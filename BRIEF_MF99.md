# BRIEF — MF99 · THE BACK BUTTON
### Closes MF64 · MF65 · MF72 — *"the bottom-left back button takes you back to main Home"*

**ONE commit. ONE file: `sections/core.js`.**

⚖️ **Law 5 — one thing per commit.**

---

## ⛔ STOP-CONDITION — READ FIRST ⚖️ Law 35

**MF95 MUST ALREADY BE IN.** *(`core.js` must contain `if(screenChanged) S.viewingRecipe = null;`)*
⛔ **If it is not — STOP. Push MF95 first.**

Then open `sections/core.js`, `goBack()`, ~line 403–426. You should find:

```js
if(S._budgetActiveRecipe && typeof budgetCloseRecipe==='function'){ budgetCloseRecipe(); return; }   // (1)
if(S.viewingRecipe && typeof closeRecipe==='function'){ closeRecipe(); return; }                      // (2)
…
if(S.screen && S.screen !== 'home'){ bottomBarGo('home'); return; }                                   // (4)
```

⛔ **If `_anchorActiveRecipe` is ALREADY named in `goBack()` — SAY SO AND STOP.** The brief is wrong.

---

## The bug — 👁️ PROVEN ON TINA'S TABLET, 14 Jul (three days running)

> 🐔 **I Have Chicken** → `butternut` → Find Recipes → tap the scones → **BOTTOM Back** → 💀 **MAIN HOME.**
> *(The TOP ← Back on the same screen works perfectly. Same recipe. Same moment.)*

### Why — MEASURED

**Every room built its own private "open recipe" key. There are SEVENTEEN of them.**

`meals.js:15753`:
```js
function openAnchorRecipe(i){ … setQuiet({_anchorActiveRecipe: a[i]}); }
```

**I Have Chicken does NOT use `S.viewingRecipe`.**

So in `goBack()`:
- **(1)** checks `_budgetActiveRecipe` → false
- **(2)** checks `S.viewingRecipe` → **false. The anchor recipe is invisible to it.**
- **(4)** → `bottomBarGo('home')` → 💀 **HOME.**

🩸 **Somebody hand-wired `goBack()` to know about BUDGET's private recipe — and never came back for the other fifteen.**

⚖️ **Law 6 — SEVENTEEN DOORS, ONE KEY. `goBack()` must ask *"is ANY recipe open?"* — not run a list of `if`s.**
⚖️ **Law 4 — this was found by asking "where ELSE does this live?", not "is I Have Chicken broken?"**

---

## The fix — ONE list, ONE question

📏 **MEASURED — five of the private keys close in EXACTLY the same way.** Their own top-Back buttons prove it:

| key | room | its own closer |
|---|---|---|
| `_anchorActiveRecipe` | 🐔 I Have Chicken | `setQuiet({_anchorActiveRecipe:null})` · `meals.js:15858` |
| `_fourActiveRecipe` | 🧅 4 Ingredients | `setQuiet({_fourActiveRecipe:null})` · `meals.js:15759` |
| `_searchActiveRecipe` | 🔍 Search | `setQuiet({_searchActiveRecipe:null})` · `utils.js:236` |
| `moodActiveRecipe` | 😴 Just Feed Me | `setQuiet({moodActiveRecipe:null})` · `core.js:2056` |
| `mealActiveRecipe` | 🍽️ Feed My Family | `setQuiet({mealActiveRecipe:null})` · `meals.js:16450` |

⚖️ **Law 35 — the closer ALREADY EXISTS in every one of them. LIFT IT. Do not invent a new one.**

### 1. Add the list — `sections/core.js`, near `NAV_DATA_KEYS` (~line 55)

```js
// MF99 · Every room opened its own private "recipe is open" key, and goBack() only ever knew
// about ONE of them (budget). These five all close the SAME way — setQuiet({key:null}) — which
// is exactly what each room's own top-Back button already does. ⚖️ Law 6 · Law 35.
const SIMPLE_RECIPE_KEYS = ['_anchorActiveRecipe','_fourActiveRecipe','_searchActiveRecipe',
                            'moodActiveRecipe','mealActiveRecipe'];
```

### 2. Add ONE step to `goBack()` — immediately AFTER step (2), BEFORE step (3)

```js
    // (2) Universal recipe view → closeRecipe (cross-link aware; consumes its pushed entry).
    if(S.viewingRecipe && typeof closeRecipe==='function'){ closeRecipe(); return; }

    // (2b) MF99 · A room's PRIVATE recipe view → close it the way that room's own Back does.
    //      Without this, Back falls through to step (4) and dumps her on HOME. ⚖️ Law 6.
    for(var _i=0; _i<SIMPLE_RECIPE_KEYS.length; _i++){
      var _k = SIMPLE_RECIPE_KEYS[_i];
      if(S[_k]){ var _p = {}; _p[_k] = null; setQuiet(_p); return; }
    }
```

**That is the entire commit.**

---

## 🚨 DO NOT TOUCH — measured, and deliberately excluded

⛔ **`eventActiveRecipe` · `wkRecipeDetail` · `activeSmoothie` · `activeOats` · `activeMuffin` · `activeRaw` · `activeFermented` · `activeHealthExt` · `activeDog` · `activeCat` · `activeBaby`**

**These do NOT close with `setQuiet({key:null})`.** They bundle their close with a *screen change* (`set({screen:'home', activeSmoothie:null, …})`). **A different animal. NOT MEASURED. NOT IN THIS COMMIT.**
⚖️ **Law 22 — do not "fix" eleven things you have not measured.** ⚖️ **Law 23 — two bugs sharing a name do not share a fix.**

⛔ **Do NOT touch `closeRecipe()`.** ⛔ **Do NOT touch step (4).** *(Back from a room's own ROOT screen SHOULD go Home. That part was always right — all 6 header Backs that go Home are honestly LABELLED "← Home".)*
⛔ **Do NOT touch `braai.js`, `spice.js`, or the tile grid.**
⛔ **Do NOT add `S.searchPrevScreen` handling.** *(An earlier draft of this brief proposed it. It was a guess. The real cause is measured above. ⚖️ Law 22.)*

### Files changed
`sections/core.js` — **1.**

---

## 👁️ THE PROOF — ⚖️ Law 2. Tina's fingers on live.

⚖️ **Law 27 — HARD-RELOAD FIRST.** ⚖️ **Law 1 — `node --check` proves nothing.**

**THE ONE THAT FAILED (do this first):**
1. 🐔 **I Have Chicken** → type `butternut` → **Find Recipes** → tap **Butternut, Feta & Chive Scones.**
2. Tap **BOTTOM-LEFT Back.**
3. ✅ **SHE IS BACK IN I HAVE CHICKEN — with `butternut` still in the box and the results still showing.**
   ⛔ **If she lands on HOME — the fix did not land. Stop.**

**THE OTHER FOUR:**
4. 🧅 **4 Ingredients** → find → open a card → **BOTTOM Back** → ✅ back in 4 Ingredients.
5. 🔍 **Search** → search anything → open a result → **BOTTOM Back** → ✅ back in the results.
6. 😴 **Just Feed Me** → pick a mood → open a recipe → **BOTTOM Back** → ✅ back in the mood list.
7. 🍽️ **Feed My Family** → open a recipe → **BOTTOM Back** → ✅ back in the list.

**NOTHING MAY REGRESS:**
8. 💰 **I've Got R100** → open a recipe → **BOTTOM Back** → ✅ still works *(step 1 — untouched).*
9. 🔥 **Braai** → open a recipe → **BOTTOM Back** → ✅ still works *(`viewingRecipe` — step 2, untouched).*
10. 🌍 **World Kitchen** · 🥗 **Health** → open a recipe → **BOTTOM Back** → ⚠️ **note what happens. Do not fix it. TELL TINA.** *(Those are the eleven unmeasured keys.)*
11. From any room's **ROOT** screen → **BOTTOM Back** → ✅ **still goes Home.** *(Correct. Unchanged.)*

---

## 📌 PUSH
Run `node tinza-doctor.js` **before and after**. It was RED with **10**.
**Still 10 → push. 11 → STOP.** ⚖️ **Law 51 — the RED is a baseline, not a gate. The ratchet is "did I ADD one."**

GitHub Desktop must say **"1 changed file."** Anything else — **stop and read it.**

**Commit name:** `MF99: Back closes a room's own recipe instead of dumping her on Home`

---

## 🏆 WHAT THIS CLOSES
**MF99 · MF64 · MF65 · MF72** — and *"the back button is stupid,"* said three days running.

## ⚠️ WHAT IT DOES **NOT** CLOSE — and Tina must test it after
**MF95 clears `S.viewingRecipe` on a screen change. It does NOT clear these five private keys.**
👁️ **SO: after MF99 lands — 🐔 I Have Chicken → open a recipe → tap ← Home → walk back in.**
· ✅ **A clean page** → nothing more to do.
· ❌ **The scone is still there** → **that is `BRIEF_MF100`** *(the `reset:` key on the tile — it now includes `_anchorActiveRecipe`).* **Push MF100 next.**
