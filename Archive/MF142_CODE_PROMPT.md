# MF142 — CODE SESSION PROMPT (paste this to Code)

Repo: github.com/tinavdw/tinza — `git clone --depth 1`.
**Read first (full spec):** `reference/MF142_VESSEL_EQUIPMENT_SLOT.md` and `TINZA_RULINGS.md` §10 "Vessels scale in a slot, never in prose." This prompt is the summary.

## Task — ENGINE ONLY
Add the `equipment` field engine so a recipe's fixed-capacity holder (tin, oven dish, muffin tray, jar/bottle) scales with the dial.

1. Add ONE shared renderer `equipmentLine(r, scaledYield)` in `sections/core.js` (exact code in MF142). Reuse `recipeBox()`. Renderer is unit-agnostic: `count = ceil(scaledYield / per)`.
2. Add the per-unit **contract banner** under the qty card, shown only when >1 holder is needed (or `bakeBatches>1`): *"This method makes 1 {unit} — work one at a time. The ingredient amounts above are your total for all {N}."*
3. Wire `equipmentLine` into EVERY recipe page, in the slot right under "How Much To Make":
   - `core.js` `bakesRecipeOpts` (~3789) → pass `bakeP?bakeUnits:n`
   - `meals.js` `recipeDetailFromResult` BOTH branches (warm ~16104, legacy ~16180) → pass `_bakeP?_bakeUnits:sv`
   - `spice.js` batch cards → pass the scaled **g/ml total** (this is the jam / chilli-sauce / jar path)
   - `health.js:433 · kiddies.js:480 · events.js:1386/1694 · braai.js` → pass that page's scaled yield
   Roll to ALL simultaneously (shared-build law).

## Guardrails — NON-NEGOTIABLE
- ⛔ NEVER parse or scale a number inside `r.method`. Prose keeps `22cm`, `180°C`, `5 min`, `per 12g` verbatim.
- ✅ No `equipment` field on a recipe → `equipmentLine` returns `''` → page byte-identical. Prove this with a no-equipment recipe.
- ✅ `node --check` `sections/core.js` AND `sections/meals.js` (and every other edited file) before handback.
- ✅ Do not touch working sections beyond the single wiring line each.

## Acceptance (verify)
1. G&T Cheesecake with `equipment:[{n:'22cm springform tin',per:12}]` → dial **1** = "1 × 22cm springform tin", dial **2** = "2 × …" + contract line.
2. A recipe with NO `equipment` field → no "You'll Need" box, page unchanged.
3. Jam with `equipment:[{n:'450g jar',per:450}]` (batch card, yield g) → 450g = 1 jar, 1350g = 3 jars.

## Out of scope
Do NOT author `equipment` values per recipe — engine only. Tagging holders + rewording any "make N tins" prose is a separate Fable pass.

**Save as you go:** present each edited file after `node --check`; end the session with the `node --check` output for every file you touched.
