# TINZA — MF40 · THE BACK BUTTON. THE REAL ONE.
## 12 Jul 2026 · Diagnosed from a LIVE repro on `main@508cd4c` (Published)

**READ-ONLY FIRST. DIAGNOSIS ONLY. DO NOT WRITE CODE UNTIL SECTION 3.**

---

## ⚖️ THE LAW THIS BUG JUST PROVED

> **LAW 2 — A REPORT IS NOT PROOF. A PASSING TEST IS A REPORT TOO.**

Back-button 4a + 4b shipped with a **written proof-by-trace**. The trace was probably **correct**. The fix is **live on `508cd4c`**. **AND THE APP STILL DOES IT.**

**4a fixed `closeRecipe`'s set-path. The user never opened a recipe.**
The fix is real, and it is on a road this bug does not drive down.

👉 **NOTHING IS FIXED UNTIL A HUMAN CLICKS IT ON THE LIVE SITE.** No exceptions, ever again.

---

## 1. THE REPRO — EXACT, LIVE, CONFIRMED BY TINA

**Site:** tinza.netlify.app · **Commit:** `508cd4c` (Published) · **Tier:** Pro

```
Feeding My Family  →  Breakfast  →  Eggs   (lands on the "EGGS · 14 KINDS" shelf)
  → Back (1st click)  →  NOTHING HAPPENS. Screen does not move.
  → Back (2nd click)  →  HOME.
```

**Breakfast is never returned to. It is skipped entirely.**

### 🚨 CONFIRMED 2 — IT IS **NOT** THE BREAKFAST PILL. IT IS **EVERY SHELF IN FMF.**
Tina reproduced the identical behaviour on **SALADS**. Same double-push. Same dead first click.

👉 **THAT KILLS THE "BUG B" THEORY AS A SEPARATE BUG.** It is not about `mealCat` at all.
👉 **IT IS ONE FUNCTION: THE SHELF-OPEN PATH IN `meals.js`. IT PUSHES TWICE. THAT IS THE WHOLE BUG.**
👉 **AND IT IS EVERY SHELF, EVERY CATEGORY, EVERY FMF USER, EVERY SESSION.**

### 🚨 CONFIRMED 4 — THE SUPPER WALK. **THIS ONE UNIFIES ALL THREE.**
```
Supper → Pasta  →  Back (1st) → lands on HOMESTYLE PLATES  →  Back (2nd) → HOME
Homestyle Plates → Back (1st) → NOTHING                    →  Back (2nd) → HOME
```

### 🎯 THE CONSTANT ACROSS ALL THREE WALKS

| Walk | Back #1 | Back #2 | Where is the parent? |
|---|---|---|---|
| Breakfast → Eggs | *nothing* | **HOME** | **Breakfast never appears** |
| Salads | *nothing* | **HOME** | — |
| Supper → Pasta | **Homestyle Plates** | **HOME** | **Supper never appears** |

> ## 👉 **THE MEAL CATEGORY IS NEVER ON THE HISTORY STACK.**
> **Not Breakfast. Not Supper. Not ever.**
> **Back can only move between SHELVES, then fall off the end to HOME.**
> **There is no category state to return to — because clicking the pill NEVER PUSHED ONE.**

**THAT IS THE CONSTANT. THAT IS BUG A. IT EXPLAINS EVERY SINGLE WALK.**

### 🚨 AND `Pasta → Back → HOMESTYLE PLATES` IS **WORSE** THAN GOING HOME
**She was never on Homestyle Plates.** Back put her on a shelf she had never visited.
- Going **Home** is a confusing exit. **The user knows something went wrong.**
- Landing on the **WRONG SHELF** *looks like a correct Back.* **The user does not know.**
⚖️ **LAW 3. SILENT WRONG IS WORSE THAN LOUD MISSING.**

### 🎯 BUG B — THE DEAD CLICK IS PATH-DEPENDENT
Some shelf-opens push **twice**, and **which ones depends on how you arrived**.
`Supper → Pasta` pushed once (Back #1 moved). `Homestyle Plates` direct pushed twice (Back #1 dead).

👉 **THAT IS THE "SOMETIMES" TINA HAS BEEN DESCRIBING FOR FOUR SESSIONS.**
**It is not intermittent. It is PATH-DEPENDENT. And that is why nobody could pin it down.**

⛔ **DO NOT THEORISE FURTHER. THREE REPROS IS MORE THAN THE LOG NEEDS. INSTRUMENT IT (§4A) AND READ THE ANSWER.**

### 🚨 CONFIRMED 3 — THE BISECT (Tina, live)
- Back **FROM INSIDE A RECIPE** → **WORKS.** ✅ The recipe path pushes ONCE and is **HEALTHY**.
- Back **FROM THE SHELF** → **FAILS.** ❌

⛔ **THEREFORE: DO NOT TOUCH `openRecipe` / `closeRecipe`. THEY ARE NOT THE BUG.**
*(That is where the last fix went. It is where you will instinctively look again. Don't.)*

---

## 2. THE FOUR FACTS. EACH ONE KILLS A THEORY.

| Fact | What it rules OUT |
|---|---|
| **The BROWSER back button does the exact same thing** (not just the bottom-bar Back) | ⛔ It is **NOT** `goBack()`. **NOT** `bottomBarGo('home')`. **NOT** the bottom bar at all. **THE BUG IS IN THE HISTORY STACK ITSELF.** |
| **Braai · Spice · Health · World Kitchen are ALL CLEAN** | ⛔ It is **NOT** in `core.js`'s shared `popstate` handler — that handler works in 4 of 5 rooms. **THE BUG IS IN THE MEALS / FMF RENDERER.** |
| **"EGGS · 14 KINDS" is a SHELF, not a recipe detail** | ⛔ 4a fixed `closeRecipe`'s set-path. **NO RECIPE WAS EVER OPENED.** That code never runs on this path. |
| **1st Back = nothing. 2nd Back = Home.** | This is the whole diagnosis. See below. |

---

## 3. THE ONLY STACK SHAPE THAT PRODUCES THIS SYMPTOM

```
[ home ]  →  [ eggs ]  →  [ eggs ]
```

- **Back #1** pops one `eggs` entry and restores… `eggs`. **Visually identical. "Nothing happens."**
- **Back #2** pops to `home`.
- **`breakfast` IS NOT ON THE STACK.**

### 👉 THEREFORE THERE ARE **TWO** BUGS, NOT ONE:

**BUG A — THE SHELF PUSHES TWICE.**
Opening the Eggs shelf creates **two** history entries where it should create **one**.
*Suspect: `draw()` pushes on `navSignature()` change AND the shelf-open pushes its own entry. Two doors. (This is Law 6 again — one function should own pushState.)*

**BUG B — THE MEAL-CATEGORY PILL PUSHES ZERO TIMES.**
Switching to the Breakfast pill changes state but **never lands on the history stack**, so Back can never return to it.
*Suspect: the pill mutates `S.mealCat` and re-renders WITHOUT going through the `draw()` path that pushes — or `navSignature()` doesn't actually change when only `mealCat` changes at that moment.*

⚠️ **THIS IS WHY "IT TAKES ME OUT OF BREAKFAST" HAS BEEN SO SLIPPERY FOR FOUR SESSIONS. IT WAS NEVER ONE BUG.**

---

## 4. THE JOB — READ-ONLY. INSTRUMENT, DON'T GUESS.

### ⚖️ ASK THE NARROW QUESTION (LAW 4)
> ⛔ **NOT** *"is the shelf pushing history?"*
> ✅ **"In the meals/FMF renderer, WHICH navigations push a history entry, AND HOW MANY, and which push NONE?"*

### 4A — INSTRUMENT IT. THIS IS THE FASTEST PATH TO TRUTH.
Wrap `history.pushState` with a logger that prints, on every call:
- `history.length` **before and after**
- the `navSignature()` value being pushed
- **a stack trace** (`new Error().stack`) so we see **WHO called it**

Then drive the exact repro: **FMF → Breakfast → Eggs.**
**Paste the raw log.** Do not summarise it. **The log is the deliverable.**

### 4B — ANSWER THESE, WITH `file:line`
1. **The meal-category pill (Breakfast / Lunch / Supper):** what does clicking it call? Does it reach `draw()`? Does `navSignature()` change? **Does it push? YES or NO.**
2. **The subcategory shelf (Eggs):** what does clicking it call? **How many pushState calls fire? Show the count from the log, not from reading the code.**
3. **What does `meals.js` do that `braai.js` / `spice.js` / `health.js` / `worldkitchen.js` DO NOT?** Those four are clean. **The difference IS the bug.** Diff the navigation paths.
4. **Is there more than one thing in the app that calls `history.pushState`?** Grep it. **List every call site.** If there is more than one, that is the root cause and the fix is to collapse them into one.

### 4C — THE VERIFICATION IS A HUMAN, NOT A TRACE
When the fix is written and **PUBLISHED** (not built, not deployed — **Published**), **Tina walks it**:
```
FMF → Breakfast → Eggs → Back   → must land on BREAKFAST, with the Breakfast pill lit.
FMF → Lunch     → [any] → Back  → must land on LUNCH.
FMF → Breakfast → Eggs → a recipe → Back → back to EGGS → Back → back to BREAKFAST.
Then the same walk in Braai, Spice, Health, WK — CONFIRM NOTHING BROKE.
```
**⛔ A CODE-TRACE IS NOT AN ANSWER TO THIS. It already gave us one and it was wrong.**

---

## 5. ⛔ SCOPE + COMMIT DISCIPLINE

- **MF40 IS ITS OWN COMMIT.** Separate from the MF28 data fixes.
- **BOTH TOUCH `core.js`.** If MF40 goes wrong, **the rollback must NOT take the fourteen verified prices with it.**
- ⚖️ **ONE DRIVER PER FILE.** Finish the MF28 data-fix commit and push it **before** MF40 touches `core.js`.
- `core.js` is **SACRED**. Back it up. **Line-count before and after.**
- ⛔ **DO NOT "fix" 4c (`bottomBarGo('home')`) as a patch.** Home is the *symptom* of an empty stack. **Fill the stack correctly and the symptom dies on its own.** Patching the fallback would hide the bug, not kill it. **That is Law 3.**
