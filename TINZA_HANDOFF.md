# TINZA — Session Handoff

_Last regenerated: 13 Jun 2026 (THE SPINE built · World Kitchen migrated onto it · cook-mode + Health-photo fixes)_

## ✅ Done this session (`node --check` ✓ on every file)

- **THE UNIVERSAL RECIPE OPENER — the spine (core.js, additive, zero behaviour change).** One opener for the whole app so any section can open any recipe and Back lands exactly where you jumped from, across sections. New in core.js:
  - `RECIPE_SOURCES` + `resolveRecipe(section,id)` → finds the recipe data (braai meat/side registered = the reference).
  - `RECIPE_BUILDERS` + `registerRecipeBuilder(key,fn)` → each section's builder returns `recipePage` opts.
  - `openRecipe(section,id,opts)` → sets `S.viewingRecipe={type:section,id,returnTo}` + snapshots where you are.
  - `closeRecipe(extra?)` → restores that exact origin (NAV_KEYS snapshot + scroll).
  - `recipeView()` now dispatches: if `RECIPE_BUILDERS[type]` exists → `recipePage(builder(item,recipe,vr))`; else the existing **braai meat/side** path runs untouched.
  - Also added: **draw-level cook routing** (`if(S.wkCooking) wkCookingView()` BEFORE `viewingRecipe`) so Cook mode works no matter how a recipe was opened; and `wkDataCountry`,`wkDataTab` added to `NAV_KEYS` so Back lands on the right country list.

- **WORLD KITCHEN migrated onto the opener (worldkitchen.js).** First section fully on the spine.
  - `wkDetailV33` split → `wkRecipeOpts(r,country,universal)` returns the opts; `wkDetailV33(r,country)` is now a thin wrapper (`recipePage(wkRecipeOpts(r,country,false))`) so internal browsing is byte-identical.
  - Registered `RECIPE_SOURCES.world` (finds by id via `wkPool()` — already global across all 4 wk_*.js files) and `RECIPE_BUILDERS.world`.
  - `wkOpenRecipe` flipped to `openRecipe('world',id)`. In universal mode, Back/Plan/Home use `closeRecipe()` so cross-section return works.

- **COOK MODE button fix (worldkitchen.js).** The Next/Done buttons were orange text on an orange bar = invisible. Now white text. "Next →" relabelled **"Next step →"**; final step stays **"✓ Done"** (no step after the last). Pre-existing bug, surfaced once Cook mode was actually usable.

- **HEALTH PHOTOS RESTORED (health.js).** Photos weren't lost — Health pointed at folders that don't exist (GitHub paths are case-sensitive):
  - `healthImgUrl`: `Images/recipe/` → **`Images/Image/`** + `cleanPhotoName` (accent-safe, matches the shared `recipePhoto`). The 323 recipe photos live in `Images/Image/`.
  - Banner ×4: `Images/headers/health.jpg` → **`Images/Headers/Health%20Hub.jpg`** (real file).
  - Sub-screen headers ×3: `160px` → **`200px`** (uniform with the landing header).

## 📤 Push status (GitHub Desktop, one file at a time)
- `core.js` — **pushed** (spine, then re-pushed with cook routing + nav keys). Braai confirmed working live.
- `worldkitchen.js` — **pushed** (migration, then re-pushed with the cook-button fix). Cook mode confirmed working live.
- `health.js` — **push this** (photo + header fix). After it's live: banner shows, recipe photos return, sub-screen headers match the landing.

## Next up — LOCKED ORDER
1. **Push `health.js`** (above) → photos back.
2. **HEALTH MIGRATION onto the shared render + universal opener — the big one.** Convert Health off its custom pieces onto the shared system:
   - Replace custom headers with `sectionHeader()` (200px) and custom `<img>`/`healthImgUrl` with `recipePhoto()`.
   - `healthRecipeDetail` + `healthExtDetail` → builders returning `recipePage` opts; register `RECIPE_SOURCES.health` + `RECIPE_BUILDERS.health`. Health has several sub-types (juice / smoothie / oats / muffin / raw + ext groups) — the resolver must find an id across all of them.
   - Flip the open funcs (`healthOpenJuice/Smoothie/Oats/Muffin/Raw`, `healthOpenExt`) to `openRecipe('health',id)`; Back via `closeRecipe()`.
   - `healthCookingView` → route at draw level like `wkCooking` (reuse the pattern), or fold into one shared cooking mechanism.
3. **Then Events, Kiddies, Meals** onto the same rails, one file per push.
4. **Cross-links** once 2+ sections share the opener (salad→dressing, filled roosterkoek→base, pesto→Spice, World→Health). The first real pairing is Tina's culinary call.
5. **Visual sameness sweep folds INTO the migrations** — deleting each bespoke page = look-sameness by construction, not a separate cosmetic pass.

## 🧠 Architecture notes (the spine — keep these in mind)
- ONE opener: `openRecipe(section,id,{returnTo})` → `S.viewingRecipe={type:section,id,returnTo}`; `closeRecipe()` restores the `NAV_KEYS` snapshot + scroll. Sections register a SOURCE (finder) + BUILDER (returns `recipePage` opts).
- Cook mode is routed at draw level (`if(S.wkCooking)…`) so it survives being opened from anywhere. Reuse this pattern for each section's cooking view as it migrates.
- **Migrating a section onto the opener makes it look identical AND cross-linkable in one move.** Look-sameness is a consequence of function-sameness — that's why we do function first.

## Parked (real, after the migrations)
- **World Kitchen content:** warm-palette pass (needs braai.js + core.js) · Asia spice exact-definition · India gaps (Butter Chicken, lamb/goat) · the two "mixed meat" → named-cut edits (wk_africa Gango, wk_southafrica Braaivleis) if not yet pushed.
- **Costing:** gold "buy" two-cost (`PACK_DB` real pack-prices) · Pantry "you may already have" group · one shared Braai+WK plan/shopping renderer (§6.4).
- **`howThisFeels` soul pass** (all sections — deliberately last) · monthly price check · Budget engine + Global Search = separate solo sessions.
- **Spice shelves Tina leads** (Chutneys & Atchars, Sambals, Jams & Preserves) — her fermenting wheelhouse and the densest cross-link targets.
- **Corrections:** #3/#4/#8 dropped (the screenshot file was deleted). #7 ham is still a 10-second job if Tina names which of the ~6 ham recipes is the dry one (then: "12 slices (≈Xg)" + a little mayo).

## START HERE next conversation
1. **curl `TINZA_STANDARD.md` (v1.8) and this `TINZA_HANDOFF.md` from the repo root BEFORE touching code.** Standard wins over chat.
2. Start at **tinza.netlify.app** — confirm live: Braai + World Kitchen open through the universal opener · Cook-mode buttons readable · Health photos + banner back.
3. Then work Next-up in the **LOCKED order**: push health.js (if not yet) → **Health migration** → Events/Kiddies/Meals → cross-links → sameness folds in.
4. Live: tinza.netlify.app · repo tinavdw/tinza · fetch via `curl` from raw.githubusercontent.com.
