# 🐞 TINZA BUG-SWEEP BRIEF — for Claude Code
*27 Jun 2026 · run AFTER pushing this session's batch (meals.js · core.js · worldkitchen.js · wk_southafrica.js · prices.js · spice.js). Hand this to Code so the sweep is targeted, not vague.*

## Ground rules (from CLAUDE.md / locked)
- Read live repo files directly. `node --check` every file before proposing a push. GitHub Desktop only.
- Additive, surgical edits. Never refactor a working section unless that's the explicit task.
- Report findings first; don't mass-edit without showing the list.

## 🎯 Priority 1 — the parser bug we just found (look for MORE of its kind)
World Kitchen's `wkParseIngredients` had a regex that grabbed a unit letter out of the *name*: `½ large egg` → `0.5 L "arge egg"`, `1 garlic clove` → `1g "arlic clove"`, `1 lemon` → `1 litre "emon"`. Fixed by requiring the unit not be followed by a letter: `((?:kg|g|ml|l)(?![a-z]))?`.
**ACTION:** grep every section for ingredient/quantity parsers (`meals.js`, `braai.js`, `buffet.js`, `events.js`, `spice.js` `makeYourOwn`, `budget.js`, kiddies). For each `(kg|g|ml|l)` -style unit regex, confirm it can't swallow a leading letter from the next word (needs a `(?![a-z])` lookahead or a `\b`). Report each parser + whether it's affected.

## 🎯 Priority 2 — the new version engine (core.js + worldkitchen.js)
- `applyRecipeVersion` overlays only listed fields. Confirm a version object can't silently drop a field the renderer needs (e.g., a WK version without `ingredients` should inherit the base, not blank out).
- Confirm recipes/entries WITHOUT a `versions[]` array render byte-identically to before (zero regression).
- `S.recipeVersion[id]` is keyed by recipe id — confirm selecting a version on one recipe can't bleed into another, and that the selection resets/persists sensibly on navigation.
- Confirm `versionStripHTML` escapes version names safely in the onclick (quotes/backslashes).

## 🎯 Priority 3 — price resolution (run a repo-wide audit)
- For every recipe ingredient name across all sections, run it through the live resolver (`lookupPrice` / `PRICE_ALIAS` / substring) and list anything that resolves to **null** (unpriced) OR to a **suspiciously short key** (e.g., a 3-letter key matching an unrelated long name). The substring matcher can mis-match — flag any ingredient where the matched key looks wrong.
- Confirm `tagliatelle or spaghetti` (new) resolves to `spaghetti` (it should).

## 🎯 Priority 4 — this session's other new surfaces
- **Heat meter** (`spice.js`): `heatMeterHTML(level)` — confirm out-of-range/invalid `heat` values are clamped, and entries without `heat` render nothing.
- **didYouKnow render** (meals.js + core.js): renders only when present; no layout break when absent.
- **Goes-well-with** (meals.js + WK): renders only when `goesWith`/`pairsWith` present; no empty box.
- **Cross-links**: any `WK_CROSS_LINKS` / `BRAAI_CROSS_LINKS` target id that doesn't resolve to a real recipe (dead link).

## 🎯 Priority 5 — general health
- `node --check` every `sections/*.js`.
- `index.html` script-load order still correct (prices/packs/core before sections that use them).
- Grep for `console.log`/leftover debug, undefined globals, and any `TODO`/`FIXME`.
- Duplicate recipe ids across sections (the universal opener resolves by id+type — confirm no collisions break it).

## Output format
A short report: **file · issue · severity · suggested fix**. No edits until the list is reviewed.
