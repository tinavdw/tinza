# BRIEF — MF100 · THE REMAINING TOOLS OPEN EMPTY
**Ruled by Tina, 14 July 2026.** *"Empty box — fresh question."*

**Three commits. In order. Do not merge them.** ⚖️ Law 5 — one thing per commit.

⚖️ **LAW 31 — RENDER IT EMPTY ON THE WAY IN. Don't clear it on the way out.**

---

## ⛔ STOP-CONDITION — READ FIRST ⚖️ Law 35

**Step 1 is READ, and it is allowed to end the task.**

### 1. MF95 MUST BE IN FIRST.
This brief empties the **typed answer**. MF95 removes the **stale recipe**. They are **two different sticky things** and this brief does NOT fix the recipe.
⛔ **If `core.js` does NOT yet have `if(screenChanged) S.viewingRecipe = null;` — STOP. Push MF95 first.**

### 2. The mechanism already exists. Do not build one.
`sections/core.js` ~2201, the tile grid:
```js
onclick="set({screen:'${o.s}'${o.reset?','+o.reset:''}})"
```
✅ `search` and `events` already use `reset:`. **You are adding the same key to three more tiles. Nothing else.**
⛔ **If a tile below ALREADY has a `reset:` key — SAY SO AND STOP.** The brief is wrong.

### 3. Before you write each reset string — GO AND COUNT THE KEYS. ⚖️ Law 36.
Run, in the repo root:
```
grep -rno "S\._\?anchor[A-Za-z_]*"  sections/*.js | sort -u
grep -rno "S\._\?mood[A-Za-z_]*"    sections/*.js | sort -u
```
**If a key comes back that is NOT listed below — STOP AND SAY SO.** The tool grew since this brief was written. ⚖️ **Law 22 — this brief is a hypothesis.**

---

# 🚨 THE RED LINE — READ IT TWICE

## ⛔ NEVER RESET A PLAN. A PLAN IS HER WORK. A QUESTION IS NOT.

`sections/core.js:55` — **`NAV_DATA_KEYS`** is the app's own list of *"plans, carts and slider values that never revert."*

**THESE ARE IN IT. THEY ARE NOT YOURS TO CLEAR:**

| ⛔ NEVER RESET | why |
|---|---|
| `moodPlan` | **the recipes she has added to her Just-Feed-Me plan.** Clearing it DELETES HER PLAN. |
| `moodServings` | a slider value. Hers. |
| `budgetPlan` | **her budget plan.** Same. |
| `budgetPeople` | **how many people are in her house.** That is a FACT about her family, not a question she is answering. |

⚖️ **Law 20 — the same shape as `_fourCache` in MF89. Emptying the question box is correct. Emptying her work is theft.**

**If you find yourself typing `moodPlan`, `budgetPlan`, `moodServings` or `budgetPeople` — YOU HAVE GONE WRONG. STOP.**

---

## COMMIT 1 — MF100-A · 🐔 I Have Chicken

**Commit name:** `MF100-A: I Have Chicken opens with an empty box`

### The bug — 👁️ PROVEN ON TINA'S TABLET, 14 Jul
She backed out of the Butternut scones and landed on **I Have Chicken with `butternut` still sitting in the box.** Walk out, walk back in — **it is still there.** Nothing clears it. No clear on entry. No clear on exit. No Clear button.

### The fix — ONE `reset:` KEY
In `sections/core.js`, in the `featureTools` array, on the **`ingredient`** tile **and nothing else**:

```js
{s:"ingredient",
 reset:"anchorInput:'',_anchorResults:null,_anchorError:null,_anchorLoading:false,_anchorActiveRecipe:null,anchorHowOpen:false",
 e:"🐔", t:"I Have Chicken...", sub:"One ingredient · All matching recipes",
 b:"var(--accent)", bg:"var(--card2)"},
```

📏 **MEASURED — every key the tool writes:** `anchorInput` · `_anchorResults` · `_anchorError` · `_anchorLoading` · **`_anchorActiveRecipe`** · `anchorHowOpen`.

🚨 **`_anchorActiveRecipe` WAS MISSING FROM THE FIRST DRAFT OF THIS BRIEF (⚖️ Law 39 — Claude's grep pattern skipped the underscore-prefixed keys).** It is **the open recipe**. `openAnchorRecipe()` (`meals.js:15753`) sets it. **MF95's one-liner does NOT clear it — MF95 only clears `S.viewingRecipe`, and this tool does not use `S.viewingRecipe`.** **Without this key in the reset string, the scone is still sitting there when she walks back in.**

⚠️ **If your `grep` from the stop-condition finds more — ADD THEM AND SAY SO.**

🚨 **`S.ing1`–`S.ing4` BELONG TO 4 INGREDIENTS, NOT TO THIS TILE. DO NOT TOUCH THEM HERE.** *(That is MF89.)*

### Files changed
`sections/core.js` — **1.**

---

## COMMIT 2 — MF100-B · 😴 Just Feed Me

**Commit name:** `MF100-B: Just Feed Me opens with nothing selected`

### The fix
On the **`mood`** tile **and nothing else**:

```js
{s:"mood",
 reset:"moodSelected:[],moodRecipes:null,moodAIRecipes:null,moodAILoading:false,moodLoading:false,moodPage:5,moodActiveRecipe:null,moodPlanView:false",   // moodActiveRecipe = the open recipe. MF95 does NOT clear it.
 e:"😴", t:"Just Feed Me", sub:"Tell us how you feel · We do the rest",
 b:"var(--accent)", bg:"var(--card2)"},
```

### 🚨 `moodPlan` AND `moodServings` ARE **NOT** IN THAT STRING. THAT IS DELIBERATE.
**They are her plan and her slider. → SEE THE RED LINE ABOVE.** ⚖️ **Law 20.**

⚠️ **`moodPage:5`** — confirm 5 is the real starting page-size in `meals.js` before you write it. **If it is a different number, use the real one.** ⚖️ Law 22.

### Files changed
`sections/core.js` — **1.**

---

## COMMIT 3 — MF100-C · 💰 I've Got R100

**Commit name:** `MF100-C: I've Got R100 opens as a fresh question`

*(Tina ruled this one on 13 Jul: **"I'VE GOT R100 = A QUESTION. IT OPENS EMPTY."**)*

### The fix
On the **`budget`** tile **and nothing else**:

```js
{s:"budget",
 reset:"budget:null,budgetAmount:null,budgetSearch:'',budgetStep:1,_budgetResults:null,_budgetError:null,_budgetLoading:false,_budgetAILoading:false,_budgetActiveRecipe:null,budgetHowOpen:false,budgetPlanView:false",
 e:"💰", t:"I've Got R100", sub:"Budget planner · Make the most of your money",
 b:"var(--accent)", bg:"var(--card2)"},
```

### ⛔ NOT IN THE STRING, ON PURPOSE — AND TINA MUST RULE ON THEM
- `budgetPlan` — **her plan. NEVER.**
- `budgetPeople` — **how many people live in her house. A fact, not a question.**
🏆 **RULED BY TINA, 14 JUL: `budget` AND `budgetAmount` **DO** CLEAR.**
*"Yes, it must change."* **I've Got R100 is a QUESTION all the way down. New week, new money.**
➡️ **SO ADD THEM TO THE RESET STRING:** `budget:null,budgetAmount:null`
⛔ **`budgetPeople` STILL DOES NOT CLEAR.** Her family did not shrink because she left the room.

### Files changed
`sections/core.js` — **1.**

---

## 👁️ THE PROOF — ⚖️ Law 2. A report is not proof. Tina's fingers on live close it.

Not `node --check`. ⚖️ **Law 1 — it proves nothing.** ⚖️ **Law 27 — HARD-RELOAD FIRST.**

**MF100-A:**
1. Home → 🐔 **I Have Chicken** → type `butternut` → **Find Recipes** → the scones appear.
2. **Back to Home.**
3. Home → 🐔 **I Have Chicken** again.
4. ✅ **THE BOX IS EMPTY. NO RESULTS. A CLEAN QUESTION.**

**MF100-B:**
5. 😴 **Just Feed Me** → tap *"I'm exhausted"* → recipes appear → **add one to My Plan.**
6. **Back to Home** → 😴 walk back in.
7. ✅ **NOTHING IS SELECTED. A CLEAN MOOD BOARD.**
8. 🚨 **NOW OPEN MY PLAN.** ✅ **THE RECIPE SHE ADDED IS STILL THERE.**
   ⛔ **IF HER PLAN IS EMPTY — YOU RESET `moodPlan`. THAT IS A FAIL. REVERT THE COMMIT.**

**MF100-C:**
9. 💰 **I've Got R100** → type a budget → find → **back Home → walk back in.**
10. ✅ **The results are gone. The search box is empty. Step 1.**
11. ✅ **The BUDGET AMOUNT is empty.** *(Ruled 14 Jul — it is a question.)*
12. ✅ **The PEOPLE COUNT is unchanged.** *(Her family did not shrink because she left the room.)*

---

## 📌 PUSH
GitHub Desktop. **"1 changed file"** per commit — `sections/core.js`, all three times.
If the screen says **anything else — stop and read it.**

---

## 🏆 AFTER THIS, THE CENSUS SHOULD SAY:

```
5 · DOES EVERY TOOL OPEN WITH AN EMPTY BOX?
  ✔ search            opens empty
  ✔ budget            opens empty
  ✔ ingredient        opens empty
  ✔ fourIngredients   opens empty
  ✔ mood              opens empty
  ▲ weekplanner       does not exist yet
```

⚖️ **Law 42 — THE RATCHET. Run `node tinza-census.js`. If check 5 is not all green, it did not land.**
