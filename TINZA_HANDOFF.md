# TINZA — Session Handoff

_Last regenerated: 13 Jun 2026 (HEALTH migrated onto the spine · oats/muffins crash fixed · core.js + health.js pushed live)_

## ✅ Done this session (`node --check` ✓ on every file)

- **HEALTH MIGRATED onto the universal opener (health.js + core.js).** Second section fully on the spine, mirroring World Kitchen. Health off its custom pieces, onto the shared `recipePage`.
  - `healthRecipeDetail` + `healthExtDetail` → one shared builder `healthRecipeOpts(recipe)` returning `recipePage` opts (shared 200px header, green `qtyBox`, shared ingredient/method/goes-with shells, locked food-cost line `#c8e840`).
  - `healthFind(id)` — one resolver across **all 14 arrays** (juice / smoothie / oats / muffin / raw + 9 ext groups), returns `{item,type,cat}`, guards holes defensively. IDs confirmed globally unique → single-id resolve is safe.
  - Registered `RECIPE_SOURCES.health` + `RECIPE_BUILDERS.health`.
  - All 6 open funcs (`healthOpenJuice/Smoothie/Oats/Muffin/Raw`, `healthOpenExt`) flipped to `openRecipe('health',id)`; Back via `closeRecipe()`. `healthOpenExt` rebuilds returnTo so Back lands on the right ext sub-tab.
  - `healthCookingView()` now self-resolves the recipe from `S.healthCooking.id` (no arg needed); Prev/Next preserve the id so step changes don't lose the recipe.
  - **core.js (additive, +1 line → 2267):** draw-level cook route extended with `else if(S.healthCooking) healthCookingView()` (mirrors `wkCooking`); `healthGroupTab` added to `NAV_KEYS`.

- **BUG FIXED — 4 oats + 6 muffins were crashing on open (health.js).** Two stray double-commas at the 5th element of `OVERNIGHT_OATS` and `HEALTHY_MUFFINS` created sparse-array **holes**; `.find()` throws on a hole, so tapping the recipes after each hole crashed (`.map` tolerated the holes, so they still rendered as cards — looked fine, died on open). Both commas removed; resolver also guards with `x &&`.

## 📤 Push status (GitHub Desktop, one file at a time)
- `core.js` — **pushed + confirmed live** (2267 lines; health cook route + `healthGroupTab` verified in repo).
- `health.js` — **pushed + confirmed live** (1649 lines; `healthFind` + both registrations verified in repo).

## Next up — Kiddies, then the rest (migration order is the dev's call)
1. **KIDDIES migration onto the shared opener (kiddies.js) — IN PROGRESS.** Same recipe as World Kitchen + Health:
   - Split the Kiddies recipe detail renderer → a builder returning `recipePage` opts; register `RECIPE_SOURCES.kiddies` + `RECIPE_BUILDERS.kiddies` (resolver finds a snack/recipe id across all 12 themes + the master-snacks list).
   - Flip the open func(s) to `openRecipe('kiddies',id)`; Back via `closeRecipe()`. Preserve `kidsTheme` / `kidsCategory` / `kidsShowMasterSnacks` in returnTo so Back lands on the right theme + tab (all already in `NAV_KEYS`).
   - Route the Kiddies cooking view at draw level if it has one (mirror `wkCooking` / `healthCooking`).
   - Watch for: 12 themes share snacks; `EVENTS_*` data recovered from the pre-split monolith; ingredient standard (gram weights, one per line, prep in method).
2. **Then Events, Meals** onto the same rails, one file per push.
3. **Cross-links** once 3+ sections share the opener (salad→dressing, filled roosterkoek→base, pesto→Spice, World→Health). First real pairing is Tina's culinary call.
4. **Visual sameness folds INTO each migration** — deleting a bespoke page = look-sameness by construction, not a separate cosmetic pass.

## 🧠 Architecture notes (the spine — keep these in mind)
- ONE opener: `openRecipe(section,id,{returnTo})` → `S.viewingRecipe={type:section,id,returnTo}`; `closeRecipe(extra?)` restores the `NAV_KEYS` snapshot + scroll. Each section registers a SOURCE (finder) + BUILDER (returns `recipePage` opts).
- Cook mode is routed at **draw level** (`if(S.wkCooking)… else if(S.healthCooking)…`) so it survives being opened from anywhere. Add the next section's cooking view to the same chain as it migrates.
- **Migrating a section makes it look identical AND cross-linkable in one move.** Look-sameness is a consequence of function-sameness — that's why function comes first.
- **The pattern is now proven twice (World Kitchen + Health).** Kiddies / Events / Meals each follow the identical 5 steps: split detail → builder, resolver across the section's data, register SOURCE+BUILDER, flip opens to `openRecipe`, route cook at draw level.

## Parked (real, after the migrations)
- **Dead code:** delete the now-unreachable `healthRecipeDetail` + `healthExtDetail` bodies + their `healthHTML` dispatch lines (left intact this session as minimal-risk; cull once Health is confirmed solid live).
- **World Kitchen content:** warm-palette pass (needs braai.js + core.js) · Asia spice exact-definition · India gaps (Butter Chicken, lamb/goat) · the two "mixed meat" → named-cut edits (wk_africa Gango, wk_southafrica Braaivleis).
- **Costing:** gold "buy" two-cost (`PACK_DB` real pack-prices) · Pantry "you may already have" group · one shared Braai+WK plan/shopping renderer (§6.4).
- **`howThisFeels` soul pass** (all sections — deliberately last) · monthly price check · Budget engine + Global Search = separate solo sessions.
- **Spice shelves Tina leads** (Chutneys & Atchars, Sambals, Jams & Preserves) — her fermenting wheelhouse and the densest cross-link targets.

## START HERE next conversation
1. **curl `TINZA_STANDARD.md` (v1.8) and this `TINZA_HANDOFF.md` from the repo root BEFORE touching code.** Standard wins over chat.
2. Start at **tinza.netlify.app** — confirm live: Braai + World Kitchen + **Health** all open through the universal opener · Cook mode works from each · the 10 previously-crashing oats/muffins now open · Back lands correctly (incl. Health ext sub-tabs).
3. Then continue the migrations: **Kiddies** (in progress) → Events → Meals → cross-links → sameness folds in.
4. Live: tinza.netlify.app · repo tinavdw/tinza · fetch via `curl` from raw.githubusercontent.com.
