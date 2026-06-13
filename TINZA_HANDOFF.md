# TINZA — Session Handoff

_Last regenerated: 13 Jun 2026 (KIDDIES migrated onto the spine · pushed live · Braai Start-Cooking bug diagnosed)_

## ✅ Done this session (`node --check` ✓ + runtime-tested · pushed live)

- **KIDDIES migrated onto the universal opener (kiddies.js only — no core.js change needed).** Third section on the spine, after World Kitchen + Health.
  - Recipe identity = **(theme, category, name)** encoded as one id: `themeId§catId§name` (`§` = U+00A7, never in a food name).
  - `kiddiesResolve(themeId,catId,name)` replays the exact old resolution: cake → `th.cake`; else → `th.recipes` by name, else `kidsSyntheticRecipe` (popcorn / dips / drink / crisps / added finger-snack). Carries `_themeId`/`_catId` on the returned item for the builder.
  - `kiddiesRecipeOpts()` → shared `recipePage` opts (200px header, green `qtyBox` wired to `S.kidsCount` 4–50, shared ingredient/method shells). Added finger-snacks get a real `kidsToggleSnack` Add-to-Plan **and** a food-cost line (they carry `costPP`); all other recipes send Add-to-Plan to the party plan.
  - **All 3 entry points flipped** to the opener: recipe rows + drinks cards (`openKidsRecipe`→`openRecipe('kiddies',id)`), the **cake pill** and the **cake card** (both → new `openKidsCake(themeId)`, which sets a returnTo so Back lands on the cake list).
  - Registered `RECIPE_SOURCES.kiddies` + `RECIPE_BUILDERS.kiddies`.
  - **Runtime-tested** all 8 recipe types (savoury, sweet, cake, drink, popcorn, dips, crisps, added snack) + missing-id → all resolve/build with no throws; missing falls back to the graceful "not found" page.
  - **By design: Kiddies has NO "Start Cooking" button** (it never had a cook mode; method shows as numbered steps on the page). Do not "fix" this.

- **Breads** now live in their **own new section** (Tina moved them this session). NOTE for a future pass: check whether Breads needs migrating onto the universal opener like the others.

## 🐞 KNOWN BUG — do this first next session (or before Events)
- **Braai "Start Cooking" button is dead — clicking does nothing.**
  - **Root cause:** the shared braai recipe path in **core.js (~line 2123)** wires the method's Start-Cooking button to **`openCookingMode(item.name, recipe.method)`**, but `openCookingMode` is **not defined anywhere in the repo** (confirmed across all section files). It was lost in the monolith→modules split. Clicking throws a ReferenceError → nothing opens.
  - **NOT caused by the migrations** — our spine work only added the `wkCooking`/`healthCooking` draw-level routes; it never touched line 2123.
  - **Fix (clean):** give Braai the same cook mode the migrated sections have — define an opener that sets a `braaiCooking` state, add a `braaiCookingView()`, and route it at draw level next to `wkCooking`/`healthCooking` (core.js ~line 389-390). **Fix (quick interim):** remove the Start-Cooking button from the braai method (pass no `startJs` at line 2123) until the view exists.

## 📤 Push status (GitHub Desktop, one file at a time) — ALL LIVE
- `core.js` — live (spine + `wkCooking`/`healthCooking` draw routes + `healthGroupTab` nav key).
- `worldkitchen.js` — live (migrated).
- `health.js` — live (migrated + oats/muffins comma-hole crash fixed).
- `kiddies.js` — live (migrated this session).
- `TINZA_HANDOFF.md` — push this regenerated file to the repo root (replace the old one).

## Next up — Events, Meals (migration order is the dev's call)
1. **EVENTS migration onto the opener (events.js / eventsData.js)** — same 5 steps: split detail → builder, resolver across the section's data, register SOURCE+BUILDER, flip opens to `openRecipe('events',id)`, route cook at draw level **if** it has a cook view.
2. **MEALS migration (meals.js)** — same recipe. (Handoff notes a stray "Search All Recipes" box only in meals.js and gliding scales — fold the sameness fixes in during the migration.)
3. **(maybe) BREADS** — confirm the new breads section is on the spine; migrate if not.
4. **Cross-links** once the sections share the opener (salad→dressing, filled roosterkoek→base, pesto→Spice, World→Health). First real pairing is Tina's culinary call.
5. **Visual sameness folds INTO each migration** — deleting a bespoke page = look-sameness by construction.

## 🧠 Architecture notes (the spine)
- ONE opener: `openRecipe(section,id,{returnTo})` → `S.viewingRecipe={type,id,returnTo}`; `closeRecipe(extra?)` restores the `NAV_KEYS` snapshot + scroll. Each section registers a SOURCE (finder) + BUILDER (returns `recipePage` opts).
- Cook mode is routed at **draw level** (`if(S.wkCooking)… else if(S.healthCooking)…`, core.js ~389). Add each section's cooking view to the same chain as it migrates — **this is exactly the slot the Braai fix needs.**
- The migration pattern is proven **three times** (World Kitchen, Health, Kiddies). Events/Meals follow the identical 5 steps. Kiddies needed NO core.js edit (no cook mode + its nav keys were already in `NAV_KEYS`).

## Parked (real, after the migrations)
- **Dead code:** delete the now-unreachable old detail renderers — Health (`healthRecipeDetail` + `healthExtDetail` + their `healthHTML` dispatch) and Kiddies (`kidsRecipeDetailHTML` + its `kidsScreen==='recipe'` dispatch line). Left intact as minimal-risk; cull once confirmed solid live.
- **Kiddies display decision:** count items with no unit (eggs, jelly packets) now show just the party TOTAL (e.g. "eggs … 5"), not "0.3 pp · 5 total". Cleaner, but a visible change from before — Tina to confirm or revert to per-child.
- **World Kitchen content:** warm-palette pass (needs braai.js + core.js) · Asia spice exact-definition · India gaps (Butter Chicken, lamb/goat) · the two "mixed meat"→named-cut edits (wk_africa Gango, wk_southafrica Braaivleis).
- **Costing:** gold "buy" two-cost (`PACK_DB`) · Pantry "you may already have" group · one shared Braai+WK plan/shopping renderer (§6.4).
- **`howThisFeels` soul pass** (all sections — last) · monthly price check · Budget engine + Global Search = separate solo sessions.
- **Spice shelves Tina leads** (Chutneys & Atchars, Sambals, Jams & Preserves).

## START HERE next conversation
1. **curl `TINZA_STANDARD.md` (v1.8) and this `TINZA_HANDOFF.md` from the repo root BEFORE touching code.** Standard wins over chat.
2. Start at **tinza.netlify.app** — confirm live: Braai · World Kitchen · Health · **Kiddies** all open through the universal opener.
3. **Fix the Braai Start-Cooking bug** (see 🐞 above) — small, self-contained, and it makes Braai consistent with the migrated sections. Then continue: **Events → Meals** → (Breads?) → cross-links.
4. Live: tinza.netlify.app · repo tinavdw/tinza · fetch via `curl` from raw.githubusercontent.com.
