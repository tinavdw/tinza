# BRIEF — MF95
**ONE commit. ONE line.** ⚖️ Law 5 — one thing per commit.

🚨 **THE BACK BUTTON IS NOT IN THIS BRIEF ANY MORE. IT WAS PULLED, ON PURPOSE. → SEE THE LAST SECTION.**

---

## ⛔ STOP-CONDITION — READ THIS FIRST ⚖️ Law 35

**Step 1 is READ, and it is allowed to end the task.**

Open `sections/core.js` and look at **line 488–489**, inside `draw()`:

```js
const screenChanged = (root._lastScreen||'') !== S.screen;
if(screenChanged) S._searchOwner = null;   // MF59-B · a query belongs to the screen it was typed on
```

- ✅ **If those two lines exist — THIS BRIEF IS CORRECT. The pattern is already there. You are adding ONE line beside it.**
- ⛔ **If `S.viewingRecipe = null` is ALREADY on a `screenChanged` line — SAY SO AND STOP.** The bug is elsewhere and this brief is wrong.

---

# COMMIT 1 — MF95

**Commit name:** `MF95: a recipe belongs to the screen it was opened on`

## The bug — MEASURED, and PROVEN THREE TIMES on Tina's tablet

`sections/core.js`, the router:

```
517:  else if (S.viewingRecipe)             { content = recipeView(); }        ← ASKED FIRST
520:  else if (S.screen==='search_results'){ content = searchResultsHTML(); }  ← NEVER REACHED
```

**The router asks *"is a recipe open?"* BEFORE it asks *"what screen are we on?"***

Nothing clears `S.viewingRecipe` when the screen changes. So the last recipe she looked at is still sitting in `S`, and the router renders **it** instead of wherever she just navigated to.

👁️ **HER PROOF, 14 Jul — three separate rooms, same disease:**
1. **Braai** → tap the search box → **Butter Chicken.**
2. **Spice** → tap the search box → **Butter Chicken.**
3. 🩸 **I Have Chicken** → go out → walk back in → **Butternut Muffins is still the first thing on the page.**

⚖️ **Number 3 is the one that proves it is NOT a search bug.** She never touched a search box. **The tile itself does it.**

## 📏 THE CENSUS COUNT — ⚖️ Law 36

**32 screen-changes across 11 files change `S.screen` without clearing `S.viewingRecipe`.**
**Only 3 do it correctly.** (`core.js:395`, `core.js:399`, and one more.)

🚨 **DO NOT FIX 32 SITES.** ⚖️ **Law 22 — that is a risk list, not a bug list.** ⚖️ **Law 6 — build the ONE thing they all call.**

## The fix — ONE LINE

⚖️ **Law 33 — follow the paths to where they converge. `draw()` is the floor. EVERY nav path lands there.**
⚖️ **Law 35 — LIFT IT, DON'T INVENT IT. MF59-B already solved this exact problem for the search query. Copy its shape.**

In `sections/core.js`, **immediately after line 489**, add ONE line:

```js
const screenChanged = (root._lastScreen||'') !== S.screen;
if(screenChanged) S._searchOwner = null;      // MF59-B · the QUERY belongs to the screen it was typed on
if(screenChanged) S.viewingRecipe = null;     // MF95   · the RECIPE belongs to the screen it was opened on
```

**That is the entire commit.**

## 🚨 WHY THIS IS SAFE — the one thing that could have broken it, checked

**`openRecipe()` (`core.js:3187`) NEVER changes the screen.** A recipe is an **overlay** on the screen it was opened from. Verified across every `set({...viewingRecipe:{...}})` in the repo: **not one of them also sets `screen`.**

➡️ **Therefore a screen-change while a recipe is open is ALWAYS stale. Always. There is no legitimate case.**

## 🚨 DO NOT TOUCH ANY OF THESE

- ⛔ **`braai.js:28`** — leave the onclick exactly as it is.
- ⛔ **`spice.js:7982`** — leave it.
- ⛔ **The `featureTools` tile grid** — leave it.
- ⛔ **Do NOT build `openSectionSearch()`.** It is no longer needed. ⚖️ Law 35.
- ⛔ **Do NOT reorder lines 517/520.** The recipe-first check is CORRECT — a recipe *is* an overlay. The bug was never the order. The bug was that nobody closed it.

### Files changed
`sections/core.js` — **1 line.**

---

## 👁️ THE PROOF — ⚖️ Law 2. A report is not proof. Tina's fingers on live close it.

Not `node --check`. ⚖️ **Law 1 — it proves nothing.**
⚖️ **Law 27 — HARD-RELOAD FIRST. Published ≠ what her browser runs.**

**MF95 — all three, in one run:**
1. Feed My Family → search `butter` → tap **Butter Chicken** → the recipe opens.
2. Tap **← Home**.
3. 🔥 **Braai** → tap the search box → ✅ **THE SEARCH PAGE OPENS. Not Butter Chicken.**
4. 🧂 **Spice** → tap the search box → ✅ **THE SEARCH PAGE OPENS.**
5. 🐔 **I Have Chicken** → open any recipe → go Home → 🐔 walk back in →
   ✅ **A CLEAN PAGE. NO BUTTERNUT MUFFINS.**
6. ✅ **A recipe still opens normally, from every room.** *(If a recipe will not open at all, the line is in the wrong place — it must be AFTER `screenChanged` is computed, and INSIDE `draw()`.)*

---

## 📌 PUSH
GitHub Desktop. **"1 changed file."** `sections/core.js`. **ONE line.**
If the screen says **anything else — stop and read it.**

---

# 🧭 THE BACK BUTTON — DELIBERATELY *NOT* IN THIS BRIEF ⚖️ Law 37

**Do not touch `goBack()`. Do not touch `closeRecipe()`. Not in this commit.**

👁️ **HER PROOF, 14 Jul — two back buttons, same open recipe, opposite results:**
· **TOP ← Back** → peels the scone off → **I Have Chicken, with `butternut` still in the box.** ✅
· **BOTTOM Back** → **HOME.** ❌

**Both call the SAME function — `closeRecipe()`.** So why do they differ?

🩸 **`closeRecipe()` (`core.js:3205`) does `history.back()` — it CONSUMES a history entry, assuming the recipe pushed one when it opened.**
**THAT SCONE WAS NEVER OPENED THIS TIME. IT WAS STALE. IT PUSHED NOTHING.**
So `history.back()` steps over an entry that does not exist, walks straight past the room, and lands on **Home.**

⚖️ **THE BACK BUTTON MAY NOT BE BROKEN AT ALL. IT MAY BE A GHOST OF MF95.**
**After the one line lands, there IS no stale recipe to back out of. The scenario stops existing.**

⚖️ **Law 37 — DON'T PAINT A ROOM YOU ARE ABOUT TO DEMOLISH.**
⚖️ **Law 5 — if both fixes land together and Back still misbehaves, she will not know which line to blame.**

### 👁️ SO: AFTER MF95 IS PROVEN GREEN, RE-TEST THE BACK BUTTON ON A **FRESH** RECIPE:
1. 🐔 **I Have Chicken** → type `butternut` → **Find Recipes** → tap the scones. *(Opened properly. It pushed a history entry.)*
2. Tap **BOTTOM Back.**
3. · ✅ **Lands on I Have Chicken** → **THE BACK BUTTON WAS NEVER BROKEN. It was MF95 all along. Close MF64/65/72.**
   · ❌ **Lands on Home** → **THE BUG IS REAL AND SEPARATE.** *Then, and only then, write `BRIEF_MF99.md`:*
     `goBack()` step (4) dumps her Home from any root screen, and **`S.searchPrevScreen` — already set by
     `braai.js`, `spice.js` AND `liveSearch()` — is NEVER READ.** ⚖️ **Law 6 — one line in `goBack()`.**

---

## 🏆 WHAT THIS ONE LINE BUYS YOU

**MF95 · the Braai search · the Spice search · I Have Chicken · Just Feed Me · Budget · and the 30 other sites the census flagged that she has not even found yet.**

⚖️ **Law 4 — she asked "where else does this live?" instead of "is this broken?" — and turned twelve bugs into one line.**
