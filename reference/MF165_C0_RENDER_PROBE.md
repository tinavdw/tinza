# MF165 c0 — THE RENDER PROBE
**Written 6 Aug 2026. Read-only. This brief ships NO change to `sections/`.**
File it as `reference/MF165_C0_RENDER_PROBE.md`.

---

## WHY THIS EXISTS BEFORE MF165 ITSELF

`SEARCH_COLD_START.md` §0 claims **12 of 22 shared things are rendered by one path and not
another**, and that **search never calls `wkClassifyMain`**. On that claim rests: the whole shape of
MF165, the hold on MF164, and the statement that every fix shipped on 5 Aug misses a card opened
from search.

🩸 **That table was produced on the same day as six bad probes.** Same day the unit regex `/l|litre/`
matched the `l` inside `ml` and printed **R30,000 for a 300ml line**. Same day "354 cards with no
leftovers" was actually **115**, and "5 shop names" was actually **0** (`Makro` inside *Makroudh*).

⚖️ **A COUNT THAT DECIDES THE ORDER OF THE BOARD MUST BE PROVED BEFORE IT SPENDS A DAY.**

This probe either confirms §0 or replaces it. Nothing else happens in c0.

---

## 1 · STOP-CONDITION — **STEP 1 IS READ, AND IT MAY END THE TASK**

Read, in this order, and report what you find **before writing a single line of probe code**:

1. `core.js` — the `RECIPE_BUILDERS` declaration and every registration site.
2. `meals.js:16003-16299` — `recipeDetailFromResult`.
3. `worldkitchen.js:801-954` — `wkRecipeOpts`.
4. `core.js:4287-4397` — `bakesRecipeOpts`, and `core.js:4399-4403` + `meals.js:16569`.

**STOP AND SAY SO IF ANY OF THESE IS ALREADY TRUE:**

- ⛔ A `wk` builder **is already registered** in `RECIPE_BUILDERS`.
- ⛔ `recipeDetailFromResult` **already calls** `resolveRecipe`, `wkClassifyMain`, or `wkEffectiveMult`.
- ⛔ The line numbers in §0 **do not point at the functions named** — the cold start is stale, and
  the first output of this session is a corrected cold start, not a probe.
- ⛔ There are **more than three** card-rendering paths. If a fourth exists, the brief is wrong and
  must be rewritten before any code runs.

**If none of those is true, continue.**

---

## 2 · THE RED LINES

| ⛔ | why |
|---|---|
| **Nothing in `sections/` is edited.** Not one character. | c0 measures. c1 changes. |
| **Do not delete the 297 lines.** Do not touch `recipeDetailFromResult`. | That is c2, and c2 is two commits away. |
| **Do not fix anything the probe finds.** Report it. | A probe that fixes as it walks cannot be trusted about what it found. |
| **Do not add a fifth copy of the array loader.** | The one-array assumption has bitten **four times** — `splitreport` (fixed) · `pricecheck` (still) · `tinza-doctor` §13 (`/^WK_[A-Z]+$/`, still) · `anchorreport` (second copy of the fixed loader). ⚖️ **ONE shared loader.** If the probe needs one, it **imports** the fixed one or the brief grows a step — it does **not** paste a fifth. |
| **No `git checkout` on any lane file.** | Recorded scar. Stands. |
| **The probe must not reimplement a renderer.** | Same design law as `pricecheck.js`, `costcheck.js`, `merge.js`, `tinza-all.js`. Load the app's own functions in a `vm` sandbox and **call them**. A probe with a private copy of the card shape is a **fourth renderer**, measuring the problem by becoming it. |

---

## 3 · THE EXACT CHANGE

**Create ONE new file at repo root: `renderprobe.js`** — beside `pricecheck.js` · `costcheck.js` ·
`splitreport.js` · `anchorreport.js`. Read-only. Exits 0 always; it reports, it does not gate.

### 3.1 · IT PRINTS ITS OWN DESIGN BEFORE IT PRINTS A COUNT

⚖️ **THE RUNG FROM 5 AUG, GENERALISED: REPORT A PROBE'S DESIGN BEFORE ITS COUNT.**

The first block of output, every run, before any number:

```
DETECTION METHOD
  path resolution : <how each of the 3 paths was reached — function name + file:line>
  "renders X"     : <exactly what was tested — call graph? emitted string? DOM node?>
  NOT measured    : <what this probe cannot see>
```

### 3.2 · IT PROVES A TRUE NEGATIVE BEFORE IT REPORTS

⚖️ **A PROBE MUST BE SHOWN TO PRODUCE A TRUE NEGATIVE, NOT ONLY A TRUE POSITIVE.**

Second block, every run. Pick **one shared thing that is known present** in a path and **one known
absent**, and print both verdicts:

```
CALIBRATION
  kcalChip   in BAKES  → PRESENT   (expected PRESENT)   ✅
  kcalChip   in WK     → ABSENT    (expected ABSENT)    ✅
```

⛔ **If the calibration block cannot be made to print one of each, the probe is not trustworthy and
the run is void.** Say so and stop.

### 3.3 · THE FIELD-BY-FIELD DIFF — **NEVER GREP**

⚖️ **PROVE IT FIELD-BY-FIELD, NEVER BY GREP.** *(Code's MF163 method, and the standard now.)*

For each probe record, render through all three paths and diff **by field**, not by string search.
A substring winning a match is the exact bug this whole day was spent chasing — do not write it
into the tool that is measuring it.

**The 22 shared things**, from `CLAUDE.md` §2 plus the §0 table:
`recipePage` · `methodStep` · `goesWellBox` · `leftoverBoxHTML` · `crossLinkBox` · `costLine` ·
`nutritionGrid` · `kcalChip` · `warmCard` · `recipeRow` · `qtyBox` · `sectionHeader` ·
`planDishRow` · `shoppingView` · `planView` · `sectionPlanBtn` · `sectionPlanView` ·
`wkClassifyMain` · `wkEffectiveMult` · `wkLeftoverKeys` · `wkPriceLookup` · `wkPoolBase`.

Output the 22 × 3 matrix with ✅ / ⛔ **and, for every ⛔, the reason it is absent** — not called at
all / called but output discarded / called with different arguments.

### 3.4 · THE SIX PROBE RECORDS — **AND WHY EACH ONE**

| record | what it is there to catch |
|---|---|
| `china-chongqing-huo-guo` | 🩸 **THE MONEY QUESTION.** MF161's `WK_NOT_A_MAIN` guard moved this anchor off beef tallow. Does search still anchor on tallow? |
| one of the other **14 anchor-corrected** cards | proves the first result is the guard, not one odd record. |
| `boerekos-koeksisters` | SA card, SA room — gloss, `costLine`, and a live GLOSS red. |
| a card carrying **all four** of `goesWellBox` · `leftoverBoxHTML` · `crossLinkBox` · authored `leftovers` | MF164's four fixes ride on these. This record is why MF164 is held. |
| `soupe-à-l'oignon` **or** `hot-and-sour` | `course:"starter"` — **never calls `wkClassifyMain` in ANY path.** ⚠️ It must come back ⛔/⛔/⛔ on the anchor rows. **If it does not, the probe is lying.** |
| one card from **`FR_SAUCES`** in `wk_france.js` | 6 sauce cards no tool has ever read. Can any path even open one? |

### 3.5 · THE ANCHOR REPORT — **REPORTED SEPARATELY, IN GRAMS AND RAND**

The matrix answers *"is the function called."* It does **not** answer Tina's question.

For each probe record, print side by side, at **the same servings count**:

```
china-chongqing-huo-guo @ 4 servings
  path      anchor line            portion g     costPP
  WK        <...>                  <...>         R<...>
  SEARCH    <...>                  <...>         R<...>
  BAKES     n/a
  VERDICT   SAME / DIFFERENT
```

⚖️ **`costPP` IS DERIVED FROM THE ENGINE, NEVER AUTHORED — §30.1.** The probe reads it. It does not
compute its own.
⚖️ **AND ANY UNIT CONVERSION PRINTS ITS OWN PROOF BEFORE IT PRINTS A RAND** — `300ml→300g ·
2 l→2000g` — before one currency figure appears.

**One `DIFFERENT` on that verdict line proves the headline. Zero `DIFFERENT` strikes it.**

---

## 4 · WHAT CODE HANDS BACK

1. `renderprobe.js` at root.
2. The run output: design · calibration · 22×3 matrix · six anchor reports.
3. **One sentence: does the §0 claim of 12 disagreements hold, and is the true number 12?**
4. Anything the probe **could not see**, named. ⚖️ *A runner that shows greens while measuring
   nothing manufactures confidence, which is worse than no runner at all.*

⛔ **No fix. No commit to `sections/`. No opinion on what to do next — that is the next brief.**

---

## 5 · THE PROOF — **WHAT TINA TAPS** ⚖️ Law 2

**Tina performs this herself, on her own device, on live. Hard reload first** ⚖️ Law 27.

1. World Kitchen → China → **Chongqing Huo Guo**. Set servings to **4**.
   Write down: the **price**, the **portion/quantity**, and whether there is a **Goes Well** box.
2. Search box → type *chongqing* → open the result. Servings **4**.
3. **Compare the three numbers.**

**IF THEY DIFFER → the headline is true, MF165 proceeds, MF164 stays held.**
**IF THEY MATCH → the probe and the cold start are both wrong, and the board is re-ranked today.**

⚖️ **Tina's finger, not the probe, is what closes this.** The probe only tells us where to point it.

---

## 6 · LAW 42 — THE RATCHET

c0 adds **no** doctor check — it is a measurement, and there is nothing yet to ratchet.
📌 **The ratchet is owed at c1** and it is already named: **a doctor rung that fails when a card
path renders a shared thing that another path does not.** That is the check that makes this class of
bug impossible to ship again, and it cannot be written until the probe says what the shared set is.

⚖️ **The rungs matter more than the fixes.**
