# BRIEF — MF89 + MF90
**Two commits. In order. Do not merge them.** ⚖️ Law 5 — one thing per commit.

---

## ⛔ STOP-CONDITION — READ THIS FIRST ⚖️ Law 35

**Step 1 is READ, and it is allowed to end the task.**

Open `sections/core.js` around **line 2176–2183** (`featureTools`) and **line 2201**.

You should find that the tile grid **already has a reset mechanism**:

```js
onclick="set({screen:'${o.s}'${o.reset?','+o.reset:''}})"
```

…and that `events` and `search` already use it.

- ✅ **If that mechanism exists — USE IT. Do not build a new one. Do not open a new file.**
- ⛔ **If the `fourIngredients` tile ALREADY has a `reset:` key — SAY SO AND STOP.** The bug is elsewhere and this brief is wrong.

---

## COMMIT 1 — MF89

**Commit name:** `MF89: 4 Ingredients opens with an empty fridge`

### The bug — MEASURED, not guessed

`S.ing1`–`S.ing4` live in global state `S`. **Nothing, anywhere in any section file, ever sets them back to empty.** No clear on entry. No clear on exit. No Clear button.

**Proven on Tina's tablet, 13 Jul:** she left 4 Ingredients, went back to the main screen, walked back in — **the same ingredients AND the same results were still sitting there.**

⚖️ **LAW 31 — RENDER IT EMPTY ON THE WAY IN. Don't clear it on the way out.**

### The fix — ONE LINE

In `sections/core.js`, in the `featureTools` array (~line 2181), add a `reset:` key to the `fourIngredients` tile **and nothing else**:

```js
{s:"fourIngredients",
 reset:"ing1:'',ing2:'',ing3:'',ing4:'',_fourResults:null,_fourAI:null,_fourAILoading:false,_fourError:null,_fourPage:5,_fourActiveRecipe:null",
 e:"🧅", t:"4 Ingredients", sub:"What's in your fridge? Get a recipe",
 b:"var(--accent)", bg:"var(--card2)"},
```

### 🚨 DO NOT TOUCH `_fourCache`

`_fourCache` is a **module-level const** in `meals.js` (~15618). **It is NOT in `S` and it must NOT be reset.**

⚖️ **Law 20 — the cache IS the business model.** It is what keeps a Pro user at R1–R3/month instead of R30. Emptying the fridge boxes is correct. Emptying the cache would cost real money on every re-search.

**If you find yourself typing `_fourCache` — you have gone wrong. Stop.**

### 🚨 DO NOT touch any other tile

`ingredient`, `mood`, and `budget` have the **same** gap — **but they are NOT ruled yet, and the Weekly Meal Planner must NEVER be reset (it holds her actual meal plan).** Those are a separate session, after Tina rules. **This commit touches exactly one tile.**

### Files changed
`sections/core.js` — **1**.

---

## COMMIT 2 — MF90

**Commit name:** `MF90: Tinza Chef says so when he cannot reach the kitchen`

### The bug — MEASURED

`sections/meals.js` ~15832:

```js
var chefRelevant = aiLoading || ai.length>0 || (!isPro && total < 10);
```

And in `startFourAIFetch`, the `catch` (~15673) only does:

```js
setQuiet({ _fourAILoading: false });
```

**So in PRO: if the fetch throws → loading goes false → `ai` stays empty → `chefRelevant` is FALSE → the ENTIRE chef section vanishes. No divider. No heading. Nothing. She would never know he tried.**

⚖️ **LAW 3 — SILENT WRONG IS WORSE THAN LOUD MISSING.**

> Note: this has **not** fired in the wild — the Pro path was proven working on 13 Jul, and the model string `claude-sonnet-4-20250514` is **fine**. This is a **latent** bug. Fix it anyway. The day it fires, it fires silently.

### The fix

1. In the `catch`, also set an error flag:
   `setQuiet({ _fourAILoading:false, _fourAIError:true });`
2. In `findFourIngredients()`, add `_fourAIError:null` to the `setQuiet({...})` block that already resets `_fourAI` (~15600) — so a new search clears the old error.
3. Include it in the relevance test:
   `var chefRelevant = aiLoading || ai.length>0 || S._fourAIError || (!isPro && total < 10);`
4. In the render, in the Pro branch, before the `ai.map(...)`:
   if `S._fourAIError` → print, in the same card style as the Free promise:
   **"Tinza Chef could not reach the kitchen just now. Your Tinza recipes are all still here."**

### Files changed
`sections/meals.js` — **1**.

---

## 👁️ THE PROOF — ⚖️ Law 2. A report is not proof. Tina's fingers on live close it.

Not `node --check`. ⚖️ **Law 1 — it proves nothing.**

**MF89:**
1. Home → 🧅 4 Ingredients → type `fish · lemon · rice` → **Find Recipes** → results appear.
2. **Back to Home.**
3. Home → 🧅 4 Ingredients again.
4. ✅ **THE BOXES ARE EMPTY. NO RESULTS. A CLEAN FRIDGE.**
5. Type `fish · lemon · rice` again → **the chef answers INSTANTLY** *(= `_fourCache` survived. If he "thinks" again, you reset the cache. That is a FAIL.)*

**MF90:**
- Everything still works exactly as it did on 13 Jul: 2 in Tinza · 4 from Tinza Chef, honest names, no bobotie.
- *(The error line cannot be proven without breaking the call on purpose. Do not break it. Just make sure nothing regressed.)*

---

## 📌 PUSH
GitHub Desktop. **"2 changed files"** across the two commits. `sections/core.js` (1 line) and `sections/meals.js` (4 small edits). If the screen says anything else — **stop and read it.**
