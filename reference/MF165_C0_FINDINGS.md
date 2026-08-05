# MF165 c0 — FINDINGS
**Written 6 Aug 2026. Read-only session. NOTHING in `sections/` was edited.**
Produced by the stop-condition read in `MF165_C0_RENDER_PROBE.md` §1. **The probe was never
written** — two of the four stop-conditions were already true, and §1 says that ends the task.

> ⚖️ **THIS FILE EXISTS SO THE NEXT SESSION INHERITS EVIDENCE, NOT A SCREENSHOT.**
> Every claim below carries `file:line`. Anything not carried by a `file:line` is marked
> **UNVERIFIED** or **NOT MEASURED**, and those two labels are load-bearing.

---

## 0 · THE VERDICT IN ONE LINE

🔴 **`SEARCH_COLD_START.md` §0 cannot be built on.** Its central premise — *"register a `wk`
builder"* — **already shipped**. Its count of `RECIPE_BUILDERS` registrations is **wrong by 4.5×**.
Its "three renderers" is **five renderings across four paths.** One of its 12 matrix rows is
contradicted by direct reading.

⚠️ **AND THE HEADLINE IS STILL PROBABLY TRUE.** ⛔ Do not read the above as "the bug is not real."
Tina measured a **9× gap on the same dish on live** (§7a), and `recipeDetailFromResult` genuinely
calls almost nothing shared (§4). **The symptom is real; §0's explanation of the mechanism is not.**

---

## 1 · THE FOUR-PATH MAP — WHICH IS REALLY FIVE RENDERINGS

| # | path | entry | ends in |
|---|---|---|---|
| **a** | universal dispatch | `recipeView()` `core.js:4912` → `RECIPE_BUILDERS[vr.type]` `core.js:4916-4919` | `recipePage(_opts)` **`core.js:4921`** |
| **b** | **braai fall-through** | `recipeView()` `core.js:4912`, past the dispatch guard, inline opts | `recipePage({…})` **`core.js:5144`** |
| **c** | **WK internal browse** | `wkDetailV33()` **`worldkitchen.js:957`**, called from **`worldkitchen.js:320`** | `recipePage(wkRecipeOpts(r, country, false))` |
| **d** | **search / finders** | `recipeDetailFromResult()` **`meals.js:16003`** | ⛔ **does NOT call `recipePage`** — hand-rolled |

### 1.1 · PATH (b) IS REAL AND IT IS DOCUMENTED IN THE CODE
`core.js:4190-4192` states it outright: *"Braai's meat/side path is the reference and is left
untouched: it has no builder registered, so `recipeView()` falls through to its existing code."*
It reaches `recipePage` by building its opts inline at **`core.js:5144`** instead of through a
registered builder. **§0 does not name it.**

### 1.2 · PATH (d) SPLITS IN TWO — SO THERE ARE FIVE RENDERINGS, NOT FOUR
`recipeDetailFromResult` contains two whole page shells:

| | branch | lines | taken by |
|---|---|---|---|
| **d1** | WARM (parchment) | guard `meals.js:16095` · returns **`meals.js:16128`** · closes `meals.js:16197` | FMF, once in `_warm`/`inWarm()` |
| **d2** | **ORIGINAL (dark shell)** | returns **`meals.js:16199`** → `meals.js:16299` | **budget · mood · search · 4-ingredients · anchor** |

The comment at **`meals.js:16088-16094`** names the split and its five callers verbatim:
> *"Every NON-warm caller (budget · mood · search · 4-ingredients · anchor) skips this whole block
> and falls through to the ORIGINAL return below, byte-for-byte unchanged."*

📌 **SEARCH TAKES d2**, the dark shell. Any future matrix that treats "SEARCH" as one column is
already imprecise — **d1 and d2 are different pages.**

### 1.3 · PATH (d) HAS SIX CALL SITES, NOT ONE
| call site | room |
|---|---|
| `budget.js:73` | Budget |
| `core.js:2725` | (shared/other) |
| `meals.js:15384` | meal search |
| `meals.js:15768` | 4-ingredients finder |
| `meals.js:15875` | anchor finder |
| `utils.js:239` | (shared/other) |

⚖️ **"Search" is not one door. It is six doors into one hand-rolled renderer.** A fix routed at
one call site fixes one door.

---

## 2 · WORLD KITCHEN OWNS TWO OF THE PATHS — AND THE BOOLEAN IS `universal`

`wkRecipeOpts(r, country, universal)` — declared **`worldkitchen.js:801`**. The **third parameter
is named `universal`**, and the two WK paths pass **opposite values**:

| path | call | `universal` |
|---|---|---|
| **c** · internal browse | `worldkitchen.js:957` `recipePage(wkRecipeOpts(r, country, **false**))` | **`false`** |
| **a** · universal opener | `worldkitchen.js:969` `RECIPE_BUILDERS.world = … wkRecipeOpts(item, S.wkDataCountry \|\| item.country, **true**)` | **`true`** |

`RECIPE_SOURCES.world` is registered alongside at **`worldkitchen.js:961`**.

🩸 **A World Kitchen card therefore renders TWO WAYS before search is even involved.** Any matrix
with a single "WK" column cannot express this. ⚠️ **What `universal` actually changes inside
`wkRecipeOpts` (`worldkitchen.js:801-954`) was NOT read line-by-line this session — see §6.**

The registration carries its own §24.4 note at `worldkitchen.js:964-968` about `backLabel` vs
`meta.origin`, which is **unrelated to this brief** and must not be disturbed by it.

---

## 3 · THE NINE REGISTRATIONS — §0 SAID TWO

| # | key | site |
|---|---|---|
| 1 | `bakes` | **`core.js:4403`** |
| 2 | `events` | `events.js:1537` |
| 3 | `cakes` | `events.js:1656` |
| 4 | `beverages` | `events.js:1782` |
| 5 | `health` | `health.js:486` |
| 6 | `kiddies` | `kiddies.js:545` |
| 7 | `spice` | `spice.js:8412` |
| 8 | 🩸 **`world`** | **`worldkitchen.js:969`** |
| 9 | `meals` | **`meals.js:16570`** |

Machinery: `var RECIPE_BUILDERS = {}` **`core.js:4200`** · `registerRecipeBuilder()` **`core.js:4203`**
· `resolveRecipe()` **`core.js:4205`** · `RECIPE_SOURCES` **`core.js:4194`**.

⚖️ **Seven sections migrated onto the universal opener while the cold start recorded two.**

---

## 4 · WHAT `recipeDetailFromResult` DOES **NOT** CALL

Searched inside **`meals.js:16003-16299`** for each of the 22 shared things plus `resolveRecipe`.
**Zero call sites** for all of these:

`recipePage` · `methodStep` · `goesWellBox` · `leftoverBoxHTML` · `crossLinkBox` · `costLine` ·
`kcalChip` · `warmCard` · `recipeRow` · `qtyBox` · `sectionHeader` · `planDishRow` · `shoppingView` ·
`planView` · `sectionPlanBtn` · `sectionPlanView` · `wkClassifyMain` · `wkEffectiveMult` ·
`wkLeftoverKeys` · `wkPriceLookup` · `wkPoolBase` · `resolveRecipe`

**The only shared renderer it calls is `nutritionGrid()`** — twice, at **`meals.js:16186`** (inside
d1/warm) and **`meals.js:16281`** (inside d2/dark).

### 4.1 · THE FUNCTION SAYS SO ITSELF — `meals.js:15997-15999`
> *"⛔ NOTE FOR THE NEXT READER: this function does NOT call `recipePage()`. It builds two whole
> page shells of its own (warm + dark), each with a TOP photo Back and a BOTTOM full-width Back.
> That is why the sectionHeader sweep could never have caught it."*

### 4.2 · ⚠️ A WORKED EXAMPLE OF WHY §3.3 SAYS **NEVER GREP**
A first pass counted **`qtyBox` = 2** in this range and it was **wrong**. Both hits are **comments**,
not calls:
- `meals.js:16091` — *"cream qty card like the shared `qtyBox()`"*
- `meals.js:16138` — *"How much to make — warm cream card, matches shared `qtyBox()`"*

The search path **imitates** `qtyBox` in hand-rolled markup and says so in a comment. A substring
counter reads that as ✅ PRESENT. **This is the same failure class as `/l|litre/` matching the `l`
in `ml`, and `Makro` inside `Makroudh`.** ⚖️ §3.3 stands: the matrix must be a field-by-field render
diff, never a grep — **including the version of it in this file.**

---

## 5 · STRUCK CLAIMS FROM `SEARCH_COLD_START.md` §0

| claim | verdict | evidence |
|---|---|---|
| *"register a `wk` builder"* (proposed as MF165 work) | 🔴 **STRUCK — ALREADY SHIPPED** | `worldkitchen.js:969` |
| *"`RECIPE_BUILDERS` … only ever got **two** registrations (`bakes`, `meals`)"* | 🔴 **STRUCK — there are NINE** | §3 above |
| *"**THREE** recipe card renderers"* | 🔴 **STRUCK — four paths, five renderings** | §1 |
| matrix row `recipePage` · **WK = ⛔** | 🔴 **STRUCK** — both WK paths end in `recipePage` | `worldkitchen.js:957` · `core.js:4921` |
| *"Search never calls `wkClassifyMain`"* | ✅ **STANDS** | zero call sites, §4 |
| line refs `worldkitchen.js:801` · `meals.js:16003` · `core.js:4287` · `core.js:4399-4403` | ✅ **ACCURATE** | verified |
| line ref `meals.js:16569` for the `meals` registration | ⚠️ **off by one — it is `meals.js:16570`** | |

⛔ **The other 11 matrix rows were NOT re-measured.** Striking one row does not clear the rest, and
it does not clear the headline. **The true disagreement count is UNKNOWN — it is not 12, and it is
not zero.**

---

## 6 · WHAT THIS SESSION COULD NOT SEE — **NAMED**

⚖️ *A runner that shows greens while measuring nothing manufactures confidence.* Everything below is
**NOT MEASURED**, not "fine":

1. **Everything runtime.** Nothing was executed. No card was rendered by any path. All of §1–§5 is
   **static reading of call sites**, which proves *a function is not called*; it does **not** prove
   *what a card looks like*.
2. **The 22 × N matrix.** Not produced. §3.3 requires a field-by-field render diff; this file
   deliberately does not substitute a grep for it (§4.2).
3. **What `universal` actually changes** inside `wkRecipeOpts` `worldkitchen.js:801-954`.
4. **Whether search anchors Chongqing on beef tallow.** The money question. Untested.
5. **Portion grams and `costPP` per path at a matched servings count.** Untested — and §7a shows
   why this matters more than the matrix.
6. **The `FR_SAUCES` question** (`wk_france.js`, 6 cards) — can any path open one? Untested.
7. **Whether d1/warm and d2/dark disagree with each other**, independently of WK.
8. **The other five doors into path (d)** — budget, mood, 4-ingredients, anchor, `utils.js:239`.

---

## 7 · MEASURED BY TINA'S FINGER, 5 AUG, ON LIVE ⚖️ Law 2

**Recorded verbatim as evidence. NOT investigated and NOT fixed in this session, by instruction.**

### 7a · SAME DISH, SAME LIVE BUILD — `china-chongqing-huo-guo`

| path | servings | food cost pp | total |
|---|---|---|---|
| **WK** | **1 person** | **R579 pp** | **R579** |
| **SEARCH** | **4 people** | **R62 pp** | **R248** |

**WK's total for ONE is more than double SEARCH's total for FOUR.**
**Both boxes are labelled FOOD COST.**

⚠️ **UNRESOLVED — NOT PROVED.**
- **Servings were not matched** between the two readings, so this is not a like-for-like comparison.
- **The taper cannot account for it.** Taper is 1 = 100% · 4+ = 50% (`CLAUDE.md` §6). A 2× taper
  cannot produce a **~9× per-person gap** (R579 vs R62).
- ⛔ **Do not enter this as proof of the headline, and do not enter it as disproof.** The next
  session's first job is to **re-take this reading at a matched servings count**, which is exactly
  what `MF165_C0_RENDER_PROBE.md` §3.5 and §5 were written to do.

📌 Related and already banked: `anchorreport.js` measured `china-chongqing-huo-guo` on the **WK**
path as **mult 0.9 → 1.0, R521 → R579 pp** after MF161 (`reference/MF161_ANCHOR_BUG.md` findings).
**R579 matches the WK figure Tina read.** ⚖️ That corroborates the WK column only — **nothing has
ever measured the SEARCH column.**

### 7b · §0 ROW IS WRONG — `goesWellBox` **RENDERS IN SEARCH**

Tina, on live: the **same three chips — Chilli Oil / Suan Cai / Steamed rice — appear in BOTH
paths.** §0's matrix row says `goesWellBox` · SEARCH = ⛔.

⚠️ **THE INSTRUCTION RECORDING THIS FINDING WAS TRUNCATED MID-SENTENCE** — it ends *"Since you
proved search calls no shared renderer, search must"*. ⛔ **The conclusion is NOT recorded here,
because it was not received, and it is not Code's to invent.** ✍️ **Tina: complete this line.**

**What is established, and it is only this:**
- `goesWellBox(` has **zero call sites** in `meals.js:16003-16299` (§4). Verified by reading.
- Search renders via **d2**, the dark shell at **`meals.js:16199`** (`meals.js:16092` names search
  as a non-warm caller).
- Therefore the chips are produced **without calling `goesWellBox`** — either by markup inside d2,
  or by the caller before/after `recipeDetailFromResult` returns.

⛔ **Which of those two it is was NOT investigated, by instruction.** It is the next session's
first field-by-field target, because it is a **worked example of the whole problem**: a shared thing
that *renders identically* while being *built by a second implementation*. ⚠️ **A matrix keyed on
"is the function called" would have marked this row ⛔ and been wrong about the card** — which is
precisely how §0's table was produced, and precisely what §3.3 exists to prevent.

---

## 8 · WHAT THE NEXT SESSION SHOULD INHERIT

1. **`MF165_C0_RENDER_PROBE.md` needs rewriting before code runs** — its own §1 stop-condition 4
   says so. It needs a **five-rendering** shape (a · b · c · d1 · d2), not three columns.
2. **Re-take §7a at a matched servings count first.** It is one reading and it outranks the matrix.
3. **§7b is the calibration case** the probe's §3.2 asks for: a shared thing **known present in
   both** paths while **provably not called** in one.
4. ⛔ **Nothing was fixed, deleted or committed to `sections/`.** The 297 lines stand. No doctor rung
   was added — c0 owes none (`MF165_C0_RENDER_PROBE.md` §6); **the ratchet is owed at c1.**

**Files added this session:** `reference/MF165_C0_RENDER_PROBE.md` (filed per its header) and this
file. **`git status` shows no change under `sections/`.**
