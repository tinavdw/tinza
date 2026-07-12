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

### 🚨 CONFIRMED BY TINA: THIS IS THE **DIRECT** PATH. NO CROSS-LINK INVOLVED.
She goes **straight in** — Breakfast → Eggs. No `goesWith` chip, no Makeable jump, no recipe opened.

👉 **THIS IS NOT AN EDGE CASE. IT IS THE MAIN ROAD.**
Breakfast → Eggs is the most-walked path in the biggest room in the app. **Every FMF user hits this on their first session — and the first Back appears to FREEZE THE APP.**

👉 **AND IT MEANS THE BUG IS SIMPLE.** No exotic state, no cross-link interaction, nothing clever. **The plain, direct shelf-open in `meals.js` fires `pushState` TWICE.**
⚖️ **TWO DOORS WHERE THERE SHOULD BE ONE. THE SAME DISEASE AS THE THREE PRICE RESOLVERS. (Law 6.)**

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
