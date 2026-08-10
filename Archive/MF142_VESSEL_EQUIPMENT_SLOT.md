# MF142 · VESSEL EQUIPMENT SLOT — the holder that scales in a slot, not in prose

**Ruled:** TINZA_RULINGS.md §10 · "Vessels scale in a slot, never in prose" (24 Jul 2026)
**For:** Code (engine) — authoring pass is separate (Fable).
**One line:** add an `equipment` field + ONE shared renderer, and show a scaling "🍽️ You'll need" line on every recipe page. Never scale a number inside method prose.

---

## WHY
Scale a cheesecake to 2 → ingredients double, but the method still says *"Line a 22cm springform tin"* (one tin) and blooms one cake's gelatine. Same frozen-holder bug is app-wide: 54 "baking dish" + oven/tart/pie/springform in method prose across meals, WK, Health, Buffet, Events. The holders that already scale (e.g. bobotie-in-a-pumpkin) do so **because the vessel is an ingredient**. So: put every scaling vessel in a slot.

## THE FIELD (recipe-level, optional)
```js
equipment:[ { n:'22cm springform tin', per:12 } ]   // per = servings ONE holder covers
```
- `per` = how many of the recipe's **yield unit** one holder takes — **servings** for a serving-recipe, **g/ml** for a batch/preserve recipe. Cheesecake springform → `per:12` (serves 12). Bobotie oven dish → `per:6`. **Jam / chilli sauce → `per:450`** (a 450g jar). Muffin tray of 24 at 2-per-serving → `per:12`.
- Multiple holders allowed: `[{n:'tart tin (24cm)',per:8},{n:'saucepan',per:99}]` (use a big `per` for one-only tools you still want listed).
- **No `equipment` field → render nothing.** A soup pot / braai grid is not a fixed holder. Absence must be silent (unchanged pages).

## THE SHARED RENDERER (add once, core.js — Law 49/50, one door)
```js
// scaledYield = the recipe's own scaled total: bakeUnits for a modelled bake, sv for a serving
// recipe, or the batch g/ml total for a preserve/spice card. Renderer is UNIT-AGNOSTIC — per just
// has to be in the same unit as scaledYield.
function equipmentLine(r, scaledYield){
  if(!r || !Array.isArray(r.equipment) || !r.equipment.length) return '';
  var rows = r.equipment.map(function(e){
    var count = Math.max(1, Math.ceil((scaledYield||1) / (e.per||1)));
    var label = (count>1 ? count+' × ' : '1 × ') + e.n;
    return '<div style="font-size:14px;color:var(--ink2);padding:3px 0;">• '+label+'</div>';
  }).join('');
  return recipeBox('🍽️ You’ll Need', rows);   // reuse the shared titled box
}
```
And the per-unit CONTRACT LINE (show only when the batch needs >1 of any holder, OR bakeBatches>1):
> *"This method makes 1 {unit} — work one at a time. The ingredient amounts above are your total for all {N}."*
`{unit}` = `bakeP.unitWord` for bakes, else "batch". Place it directly under the qty card.

## WIRE IT IN (every recipe page — anchors from HEAD)
1. **core.js `bakesRecipeOpts()`** (~3789): after `ingredientsHTML`, build `var equipHTML = equipmentLine(r, bakeP?bakeUnits:n);` and add to the returned opts; render it between qty and ingredients. Contract line when `bakeBatches>1`.
2. **meals.js `recipeDetailFromResult()`** — TWO branches (both already gate bakes on `_bakeP` after MF-bakes-4people fix):
   - warm branch (~16104): insert `equipmentLine(r, _bakeP?_bakeUnits:sv)` under the "How Much To Make" card.
   - legacy branch (~16180): same insertion under the 🧮 card.
3. **Spice / preserve batch cards** (spice.js — yield in g/ml): pass the **scaled g/ml total** as `scaledYield`, not a servings count. This is the jar/bottle path (jam, chilli sauce, cordials).
4. **Other openers** with their own recipe page (health.js:433, kiddies.js:480, events.js:1386/1694, braai.js) — call `equipmentLine(r, <that page's scaled yield>)` in the same slot. No `r.equipment` → returns '' → zero change. Roll to ALL simultaneously (shared-build law).

## HARD GUARDRAILS
- ⛔ **Never** parse/scale numbers out of `r.method`. Prose keeps 22cm, 180°C, 5 min, "per 12g" verbatim.
- ✅ `equipment` absent → no line, no contract banner. Existing pages must be byte-identical when the field is missing.
- ✅ `node --check` both files before handback.

## ACCEPTANCE TESTS (live)
1. Gin & Tonic Cheesecake, dial **1** → "🍽️ You'll Need · 1 × 22cm springform tin", no contract banner. Dial **2** → "2 × 22cm springform tins" + contract line. (requires `equipment:[{n:'22cm springform tin',per:12}]` authored on the record)
2. A recipe with NO `equipment` field → page unchanged, no "You'll Need" box.
3. Bobotie with `equipment:[{n:'ovenproof dish (~30×20cm)',per:6}]`: 6 people → 1 dish; 12 → 2 dishes.
4. Jam with `equipment:[{n:'450g jar',per:450}]` (batch card, yield g): makes 450g → 1 jar; makes 1350g → 3 jars.

## CENSUS CHECK (add to tinza-doctor or a one-off)
Assert: every `cat` in {cheesecakes, cakes, tarts, pastries} record has an `equipment` entry once the authoring pass is done (RED if a bake ships with no holder). Until then this is a WARN, not a gate.

## NOT IN THIS BRIEF
Authoring the `equipment` values per recipe + rewording any "make N tins" prose = Fable pass, worklist starts with the oven-dish family (54 baking-dish). Engine ships first so the field has somewhere to render.
