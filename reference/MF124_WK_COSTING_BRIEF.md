> ## ⛔ PASS 1 IS REPORT ONLY. NO FILE IS EDITED IN THIS PASS.
> The only output is `reference/MF124_PASS1_REPORT.md`. No fixes, no partial fixes,
> no "while I was in there". The fix pass is authorised separately, after the report is read.
>
> ## ⛔ THE 21 ARE A SYMPTOM LIST, NOT THE POPULATION.
> They are the records that crossed a threshold. A recipe wrong by 2× sits quietly in
> the library looking like an expensive dish. Pass 1 therefore ends with a **named
> structural condition** and an **app-wide count** of it — not with 21 corrected numbers.
> A threshold is not a condition. ⚖️ Law 54 — a check you have never watched fail is decoration.
>
> ## ⚖️ LAW 56 — COST IS VERSION-LEVEL.
> Read `reference/TINZA_FACET_ARCHITECTURE.md` §5 before anything else.
> Every one of the 21 must be classified as:
> - **(a) scale/unit fault** — price unit and authored amount unit disagree
> - **(b) version artifact** — `costPP` computed from base ingredients while a version
>   overrides them. Under Law 56 this number is *correctly computed and wrongly attributed.*
>   It is **not** arithmetic and must not be "corrected" at record level.
> - **(c) neither** — say what it is instead
>
> If any record is **(b)**, MF124 stops being a costing bug and becomes a version-level
> costing build. Report before deciding. Do not let costing be fixed at record level and redone.

---

# Brief for Code — **MF124 · WORLD KITCHEN COSTING BUG**
*Measured 20 Jul 2026 against commit `92105af`. ⚖️ Law 22.*
*Head block added 21 Jul 2026 — post Law 54/56.*

---

## 🩸 First, a correction to the record
The 17 Jul fix queue carried *"~231 World Kitchen recipe names with double-encoded UTF-8"* as a **cosmetic** item, and this morning it was provisionally promoted to a **costing** bug on the theory that corrupted ingredient names (`"lamb mince Â"`) were missing their PRICE_DB keys.

**That theory is wrong and has been disproven by measurement.**

The encoding was repaired in full and the costs re-measured: **the outlier list is byte-for-byte identical** — still 21 recipes over R150/pp, same recipes, same values. The two problems merely shared a file (`wk_europe.js`), so they travelled together. **Correlation, not causation.**

- ✅ **The encoding repair is DONE and validated** (see companion file `wk_europe.js`). It is *not* part of this brief.
- 🎯 **This brief is the costing bug, which is a separate and more serious defect.**

---

## The bug
21 recipes carry an impossible `costPP`. The prices resolving behind them are **correct**, so this is not a lookup failure — it is the calculation.

**Worked example — `austria-apfelstrudel`, reported `costPP` = R616:**

| ingredient | qty | resolved key | price |
|---|---|---|---|
| apple | 120 g | `apple` | R5/kg |
| flour | 60 g | `cake flour` | R22/kg |
| butter | 30 g | `butter` | R160/kg |
| sugar | 30 g | `sugar` | R35/kg |
| raisins | 20 g | `raisins` | R168/kg |
| cinnamon | 5 g | `cinnamon` | R550/kg |
| breadcrumbs | 20 g | `breadcrumbs` | R150/kg |

Every key resolves. By hand this totals **≈ R17 per portion.** The app reports **R616** — roughly 36×.

**Second example — `norway-spekemat`, reported R1286:** 100 g cured meats (R140/kg) · 100 g flatbread (R12.50/kg) · 50 g sour cream (R100/kg) · 30 g cheese (R187/kg) → **≈ R26 by hand.** Reported R1286 — roughly 50×.

🩸 **The multiplier is NOT constant** (≈36× vs ≈50×), which rules out a single hard-coded factor and points at something per-recipe — a `yield` / `serves` divisor, a unit field, or a portion-scaling step.

## The 21 affected records
`norway-spekemat` R1286 · `turkey-kebap-adana` R674 · `turkey-tantuni` R647 · `austria-apfelstrudel` R616 · `poland-kaczka-pieczona` R566 · `netherlands-appeltaart` R524 · `switzerland-birchermuesli` R510 · `boerekos-gemsbok-stuffed-fillet` R476 · `sri-lanka-banana-fritters` R378 · `denmark-stjerneskud` R377 · `denmark-smorrebrod` R368 · `finland-graavilohi-sandwich` R311 · `portugal-bifana` R297 · `senegal-ndambe` R220 · `india-jalebi` R217 · `switzerland-fondue` R198 · `russia-kvass` R166 · `georgia-kalmakhi` R164 · `switzerland-saucisson-vaudois` R163 · `spain-sangria` R161 · `switzerland-papet-vaudois` R157

⚖️ **Note the control case:** `switzerland-birchermuesli` reports **R510**, while the *health*-room Bircher Muesli costs **R18** for near-identical ingredients. **Two records, one dish, a 28× gap — the cleanest A/B in the set. Start here.**

## Scope
1. **MEASURE FIRST — do not patch.** ⚖️ Law 22. Instrument the cost path for `austria-apfelstrudel` and `switzerland-birchermuesli`: log the per-ingredient contribution, the running total, the divisor applied, and the final `costPP`. **The step where the number leaves reality is the bug.** Report it before writing a fix.
2. **Check the prime suspects in order:** (a) `yield` / `serves` is `null` on these records — `Adana Kebap` was measured with `serves: undefined, yield: null` — so a divide-by-serves may be silently skipped or defaulting to 1; (b) a unit mismatch where grams are costed as kilograms for *some* ingredient shapes; (c) World Kitchen's own portion dialect (the third of the three portion dialects) applying a scale factor twice; **(d) ⚖️ Law 56 — version artifact**: `costPP` computed off base ingredients while a version overrides them. Check this *before* concluding (a)–(c), because a (d) record will look like an arithmetic fault and is not one.
3. **APP-WIDE SWEEP — name the condition, then count it.** Once the fault is named, express it as a property of the data — *"ingredient resolves per-kg while amount is authored in grams"*, or *"card renders base-computed cost while a version overrides ingredients"* — never as a threshold. Query **every** section for it: braai, bakes, Health Hub, Spice, FMF, Events, Kiddies, Finger Foods, Beverages, all of World Kitchen. Report a count per section. ⚖️ Law 54b — a zero must distinguish "none found" from "could not look"; if a section cannot be queried, say so and say why. **Fix nothing.** State whether the total is materially larger than 21, and do not act on it — if it is, MF124 is re-scoped rather than quietly expanded.
4. **Fix at the shared door, not per recipe.** ⚖️ Law 6. If the cause is a missing `yield`, the fix is the normaliser emitting a sane default plus the data repair — never 21 hand-patches. ⚖️ Law 53 — finish the whole thing.
5. **RATCHET — census check 22.** ⚖️ Law 42. Assert **no recipe exceeds a sane `costPP` ceiling** (suggest R150/pp for an eat-slot dish; Tina to confirm the number). Build fails above it. **The ceiling is the shallow check — the ratchet that matters asserts the *structural condition* from step 3 is absent, because that is the one that catches a 2× error the ceiling never sees.** ⚖️ Law 54. A costing bug this size must never return quietly.
6. **Do NOT touch `wk_europe.js` encoding** — already repaired and delivered separately. If both land in one session, commit them **separately**. ⚖️ Law 5.

## Why this is urgent
Rand-costing is the moat and the reason Pro is worth R90/month. **A user who sees apple strudel priced at R616 a portion does not file a bug — she stops trusting every number in the app.** ⚖️ Law 7 — the lock is the salesman.

## Push discipline
`node --check` every touched file. Separate commits for the measurement instrumentation (if committed at all) and the fix. Suggested message: `MF124: WK costing — <root cause> + census check 22`.
