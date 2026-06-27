---
description: Targeted bug sweep of the Tinza repo (report only, no edits)
allowed-tools: Read, Grep, Glob, Bash
---

# Tinza bug sweep

Follow all locked rules in `CLAUDE.md`. This is a **report-only** pass — do NOT edit any files. Read live repo files directly and produce a findings list at the end.

## Priority 1 — the unit-grab parser bug (find more of its kind)
World Kitchen's ingredient parser had a regex that grabbed a unit letter out of the *name*: `½ large egg` → `0.5 L "arge egg"`, `1 garlic clove` → `1g "arlic clove"`, `1 lemon` → `1 litre "emon"`. It was fixed by requiring the unit not be followed by a letter: `((?:kg|g|ml|l)(?![a-z]))?`.

Grep every section (`meals.js`, `braai.js`, `buffet.js`, `events.js`, `spice.js` makeYourOwn, `budget.js`, `kiddies.js`, `worldkitchen.js`) for any quantity/unit parser using a `(kg|g|ml|l)`-style group. For each, decide whether it can swallow a leading letter from the next word (i.e. lacks a `(?![a-z])` lookahead or `\b`). List every parser found and whether it is affected.

## Priority 2 — the version engine (core.js + worldkitchen.js)
- `applyRecipeVersion` overlays only a fixed field list. Confirm a version object can't blank out a field the renderer needs (a version missing `ingredients` should inherit the base).
- Confirm recipes/entries WITHOUT a `versions[]` array render identically to before (no regression).
- `S.recipeVersion[id]` is keyed by recipe id — confirm a selection on one recipe can't bleed into another.
- Confirm `versionStripHTML` safely escapes version names inside the `onclick`.

## Priority 3 — price resolution
- Run every recipe ingredient name across all sections through the live resolver (`lookupPrice` / `PRICE_ALIAS` / substring). List anything that resolves to **null** OR to a **suspiciously short/wrong key** (the substring matcher can mis-match — flag where the matched key looks wrong).
- Confirm `tagliatelle or spaghetti` resolves to `spaghetti`.

## Priority 4 — this session's new surfaces
- **Heat meter** (`spice.js`, `heatMeterHTML`): clamps out-of-range `heat`; entries without `heat` render nothing.
- **didYouKnow** (meals.js + core.js) and **Goes-well-with** (meals.js + WK): render only when present; no empty boxes.
- **Cross-links** (`WK_CROSS_LINKS`, `BRAAI_CROSS_LINKS`): every target id resolves to a real recipe (no dead links).

## Priority 5 — general health
- `node --check` every `sections/*.js`.
- `index.html` script-load order correct (prices/packs/core before sections that use them).
- Leftover `console.log`/debug, undefined globals, duplicate recipe ids across sections.

## Output
A single report table: **file · issue · severity · suggested fix**. Do not apply any fixes — wait for review.
