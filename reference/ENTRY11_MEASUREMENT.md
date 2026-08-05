# ENTRY 11 · MEASUREMENT PASS — WHAT `NAV_DATA_KEYS` IS MISSING

**Measured 6 Aug 2026 at `5255b02`. READ-ONLY — no code was written, `git status` was clean
throughout, doctor RED 10 before and after.**

> ⚠️ **THE LINE NUMBERS BELOW WERE CORRECT AT `5255b02`.** ⛔ Re-sweep after any commit that
> changes a line count in `core.js` — **an insertion OR a revert.** ⚖️ **MF166 RUNG 1f.**

---

## 0 · THE ANCHOR RE-SWEEP ⚖️ RUNG 1f

**11 of 11 MATCH. Zero stale.**

| cited | actual | symbol |
|---|---|---|
| `core.js:55` | 55 | `const NAV_DATA_KEYS = [...]` |
| `core.js:102` | 102 | `function navRefreshEntry(){` |
| `core.js:131` | 131 | `return [S.screen, …` (navSignature body) |
| `core.js:140-143` | 140-143 | `eventTab is DELIBERATELY NOT HERE` … `DO NOT TOUCH A WORKING ROOM.` |
| `core.js:181` | 181 | `NAV_DATA_KEYS.forEach(…)` — the re-apply loop |
| `core.js:555` | 555 | `if(_appNavDepth > _screenRootDepth …)` — goBack step (3) |
| `core.js:1854` | 1854 | `it.loose = true; …` — buy ladder A |
| `core.js:4028` | 4028 | `else { it.loose=true; … }` — buy ladder B |
| `core.js:2540-2543` | 2540-2543 | `A MOOD GRADUATES ONE AT A TIME` … `SILENTLY` |
| `core.js:2656` | 2656 | `function getMoreMoodRecipes(moodId) {` |
| `tinzaStore.js:180` | 180 | `function setPlan(section, arr){` |

---

## 1 · THE MECHANISM, IN CODE

`goBack()` step (3) — **`core.js:555`** — pops:
```js
if(_appNavDepth > _screenRootDepth && typeof history !== 'undefined'){
  try{ history.back(); return; }catch(_e){}
```
The handler — **`core.js:175-191`**:
```js
const restored = st.snap;                                              // 179  the whole old state
NAV_DATA_KEYS.forEach(function(k){ if(k in S) restored[k] = S[k]; });  // 181  re-apply, WHITELIST ONLY
S = restored;                                                          // 182  wholesale replace
```

**179** takes the snapshot as the new state in full. **181** copies back *only* the whitelisted keys
from live `S`. **182** makes it the truth.

> ## **A KEY IN NEITHER THE SNAPSHOT'S PAST NOR THE WHITELIST IS SIMPLY GONE.**
> `mealPlan` was `[]` when the entry was pushed and `[Cottage Pie]` live. 181 does not copy it.
> 182 makes `[]` the truth. **Nothing throws. Nothing logs.**

---

## 2 · THE ENUMERATION

**196 keys written · 86 in the declared shape (`data.js:1`) · 220 union · 42 in `navSignature()` ·
20 in `NAV_DATA_KEYS`.**

Method: every `S.x =`, `S['x'] =`, `set({x:})`, `setQuiet({x:})`, `Object.assign(S,{})`,
`togglePlanItem()` across all of `sections/`.

### 🔴 WORK KEYS MISSING FROM `NAV_DATA_KEYS` — **15**

| key | call site | what she loses |
|---|---|---|
| `mealPlan` | `meals.js:16589` `togglePlanItem('mealPlan',…)` | the FMF dish list |
| `budgetPlan` | `budget.js:4` `togglePlanItem('budgetPlan',…)` | the Budget dish list |
| `babyPlan` | `tinyTummies.js:88` | the baby dish list |
| `spiceCart` | `spice.js:8091` | a cart she filled |
| `wkBump` | `worldkitchen.js:1289` `wkSetBump()`, read `:1034` | **per-dish portion tweaks** |
| `wkServings` | `worldkitchen.js:769` | a serving count |
| `wkGuests` | `data.js:64` · `worldkitchen.js:297` | a guest count |
| `barGuests` | `barplanner.js:255` | a guest count |
| `beverageGuests` | `events.js:1717` | a guest count |
| `cakeGuests` | `events.js:1586` | a guest count |
| `checkedBuffetItems` | `buffet.js:278` | ticked shopping items |
| `checkedHealthItems` | `health.js:594` | ticked shopping items |
| `checkedBeverageItems` | `events.js:1829` | ticked shopping items |
| `checkedCakeItems` | `events.js:1860` | ticked shopping items |
| `checkedFingerItems` | `events.js:1897` | ticked shopping items |

⚠️ **REJECTED — `healthShowPlan`.** It matched the `/Plan$/` pattern but is a **view flag**
(`healthShowPlan:true/false`, `health.js:707`). **NAVIGATION.** That is why the number is 15.

### ⚠️ 15 IS A FLOOR, NOT A TOTAL
**36 keys matched a WORK-shaped pattern. 15 survived classification. ~184 were never individually
classified.** ⛔ **A key that is WORK but named unlike any pattern was missed.**
⚖️ **The cold start said TWO because it read names. This pass says FIFTEEN because it read
patterns. Both are subsets wearing a total's confidence.**

---

## 3 · TWO CORRECTIONS TO THE BOARD

### 🔴 `MF166` ENTRY 9 IS WRONG — Health HAS a clear-plan control
**`health.js:706`** — `set({healthPlan:[],checkedHealthItems:{},healthShowPlan:false})`.
ENTRY 9 says no room has one. **Strike that claim.**

### 🔴 `MF166` BUG 1's PREMISE IS FALSE — the shelf does not blank
`getMoodPageRecipes()` — **`core.js:2591`**:
```js
const db = moodPool(moodId).length ? moodPool(moodId) : (MOOD_DB[moodId] || []);
```
Its own comment (`core.js:2589-2590`): *"MOOD_DB is the fallback ONLY if the pool comes back empty…
degrade to the old cards, never to a blank shelf. Law 3."* **`MOOD_DB` has a `healthy` key**
(`core.js:2000`).

⛔ **BUG 1 claims flipping `healthy` into `MOOD_TAGGED` with zero tags "EMPTIES THE SHELF SILENTLY".
It would not.** The guard exists and works. **Tagging is safe to do ONE RECORD AT A TIME.**
⚠️ **UNMEASURED: whether `MOOD_DB.healthy`'s cards are the RIGHT cards.** This proves the shelf is
**not blank**. It says nothing about whether it is **good**.

---

## 4 · THE TWO BUY LADDERS — `core.js:1822-1856` vs `core.js:4022-4028`

**All five branches present in both** (count+ladder · count plain · weight ladder · pack size ·
loose ×1.10 · loosable tip · pack price). **The loose fallback is byte-identical normalised:**
`it.loose=true;it.buyAmt=Math.round(need*1.10);`

🔴 **The drift is structural, not behavioural.** The count/weight bridge is implemented **twice, in
two places, by two mechanisms**: ladder A bridges **inside the ladder** (`core.js:1824-1825`,
emitting `buyUnit:'pcs'`); ladder B bridges as a **pre-pass mutating `need` / `it.amt` / `it.unit`**
(`core.js:4010-4012`). ⚠️ **One behaviour, two implementations — not "they disagree."**

---

## 5 · NOT MEASURED

1. **Whether all 15 keys are reachable by a pop today.** The mechanism and classification are
   proven; **no room was walked to a Back press.** `spiceCart`, `babyPlan`, `checkedCakeItems` and
   the guest counts are **unproven by finger.** ⚖️ RUNG 1e.
2. **Computed-key writes.** The enumeration reads literal keys. There are exactly **two** computed
   writes in the app — `meals.js:16310` and `:16312`, both inside `togglePlanItem` — resolved by
   hand. **A third would be invisible to this method.**
3. **Whether `MOOD_DB.healthy`'s cards are good.**
4. **Whether the two ladders produce the same NUMBERS.** Branch presence and structure were
   compared; **output was not.**
5. **The other ~184 keys.** Only the 36 matching WORK-shaped patterns were classified.
6. **`healthShowPlan`'s exclusion** rests on reading three call sites, not on running the app.
