# TINZA — WK ENGINE PASS · Behavioral Spec (axes 4 & 8) · 10 Jul 2026
### Opus owns core.js + worldkitchen.js. This turns Code's touchpoints into intended behaviour.
### ⚠️ Exact edits require: (a) current code at each line ref, (b) Code's documented field shapes for `r.leftovers` + `r.crossLinks`. core.js is the shared engine — no blind splices.

---

## TOUCHPOINTS (from Code's handoff)

### 1 · Leftovers render hook — `worldkitchen.js:648–650` → new `leftoverListHTML(r)`
**Behaviour:** if `r.leftovers` exists and is non-empty → render the per-card data (honest intro line + 2–4 bullets, easy-first). Else → fall back to the derived Tier-1 pool. **Per-card data always wins over the pool.** Preserve existing box styling via var(--token); no layout change.

### 2 · Tier-1 mis-mapper — `core.js:3440` (`pork` tested before `beans`)
**Bug:** category tests fire in the wrong precedence, so a bean dish matches `pork`, a rice dish matches `bread`, etc. **Fix:** match on the card's PRIMARY ingredient/category with an explicit, correct precedence (specific before generic). This path is the FALLBACK FLOOR only — runs when `r.leftovers` is absent. Result must always be category-correct (fish→fish, red-meat→meat, poultry→poultry, beans/veg→veg, rice/bread→starch). **This fix lands WK-WIDE — all countries, not just Portugal.**

### 3 · Factoid — `core.js:3366` `LEFTOVER_HERITAGE`
**Bug:** rotates independently of the dish → prints a factoid naming a *different* dish above the ideas. **Fix:** kill the independent rotation. Show either the per-card intro (from `r.leftovers`) or nothing. Never a random heritage line that names another dish.

### 4 · Pools — `core.js:3348` `LEFTOVER_IDEAS`
**Keep** as the category-correct floor (used only when no per-card data). Audit each pool is category-honest. No behaviour change beyond guaranteeing category-correctness.

### 5 · Cross-link renderer — `worldkitchen.js:615–619` → read `r.crossLinks`
**Behaviour:** for each `{name, target, emoji}` in `r.crossLinks`, render a clickable pill linking to `target` (the house recipe). **Shopping-split rule holds:** the cross-link is NAVIGATION ONLY — the shopping list / costing continues to use the shop-bought item + its PRICE_DB key. The crossLink must NOT alter costing.

---

## GUARANTEES THIS PASS MUST HOLD
- `r.leftovers` present → shown verbatim (easy-first order preserved); absent → category-correct pool; never a mismatched pool or a wrong-dish factoid.
- Cross-links render as links; costing untouched (shop-bought default).
- Change is additive + token-styled; Braai v33 render parity intact.
- `node --check` clean; test on a card WITH staged data (e.g. tripas/polvo) and one WITHOUT, across ≥2 WK countries, before push.
- Restore-from-commit if anything renders wrong (core.js = every section).

## STILL NEEDED FROM CODE (to write exact edits)
1. Current code at `worldkitchen.js:615–619` and `:648–650`; `core.js:3348`, `:3366`, `:3440`.
2. Documented field shapes: `r.leftovers` (intro? bullets? tier tags?) and `r.crossLinks` (`{name,target,emoji}` confirmed).

## RELATED COSTING GAPS (log, not this pass)
- `pig's ear` price key (gap #294) — used in tripas + cozido.
- `carrots` vs `carrot` key trap — cozido + caldo verde.
- `salted cod` (bacalhau) R450/kg + ladder (salted-hake / salted-snoek / fresh-hake).
