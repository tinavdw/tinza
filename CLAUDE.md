# CLAUDE.md — Tinza enforcement brief for Claude Code
_You are Claude Code in the Tinza repo (Documents\GitHub\tinza → tinza.netlify.app). Read this AND TINZA_STANDARD.md before touching code. This brief is built from a REAL code audit (15 Jun), not memory._

## THE GOAL
Every page in every section LOOKS and FUNCTIONS the same; rooms differ only by photo + emoji. Mood is the ONE exception (keeps colour-as-feeling accents).

## ⚠ READ THIS FIRST — what's ALREADY shared vs what DRIFTS (verified in code, Braai vs World)
**Already shared — DO NOT rebuild, they're consistent:**
- Section header (200px photo, title, search, My-Plan pill) → `sectionHeader()`
- Recipe page chrome (box order, sizes, layout) → `recipePage()` (Braai assembles opts inline at core.js ~2206 but still calls `recipePage`; World via `RECIPE_BUILDERS.world`)
- Green qty box → `qtyBox()` ; recipe sub-shells → `metaStrip/ingredientsBox/ingredientRow/methodBox/methodStep/goesWellBox/recipeActions/recipeNav/portionHowBox`

**NOT shared — THIS is the drift, fix it by building shared functions:**
1. **"How it works" box** — NO shared function exists. Each section hand-rolls it → they differ. **BUILD `howItWorks()` in core.js**, route every section through it.
2. **Plan page** — `braaiMyPlanView()` (braai.js) vs `wkMyPlanView()` (worldkitchen.js) are two separate implementations → they differ. **BUILD ONE shared `planView()` + the §4c plan-row renderer**, route Braai / World / Events / all through it.
3. **Shopping page** — `braaiToggleShop()`+inline list vs `wkBuildPlanShopping()`/`wkToggleShop()` → two versions → differ. **BUILD ONE shared `shoppingView()`** (aisle-grouped, de-duped, two-price, share targets), route all through it.
4. **Strays to remove:** World Kitchen has a leftover hand-rolled "🧺 My Plan" button (worldkitchen.js ~319) AND `font-family:Georgia,serif` in places — both violate the Standard (use the §4.1 overlay + the one global sans). Grep every section for `Georgia` and stray plan buttons; remove.

## THE METHOD — audit, don't assume
For EVERY section, before changing anything, **audit its pages against the TINZA_STANDARD.md §4 checklist** and report drift in a table (element · what this section renders · what the Standard says · verdict). Then fix by routing through the shared function — never by hand-editing the section's bespoke copy. If you find something the Standard doesn't cover, FLAG it so we correct the Standard too.

### §4 CHECKLIST every page must pass (from the Standard)
**Landing (§4a):** 200px photo header · title+search overlaid · My-Plan WHITE pill top-right inside photo (§4.1) · ONE "How it works" + guest ± box · categories = WRAPPED boxes (NO horizontal-scroll scale) · rows = §3 standard.
**Recipe page (§4b):** 200px photo · name + meta strip · GREEN qty box directly under name (only size box; info strip = cost pp · total · kcal) · "How portion size works" collapsible · ingredients (§5) · method (numbered, timers, cook mode) · Goes Well With · actions (Add to Plan · Save · Download) · text nav (Back | My Plan | Home).
**Plan page (§4c):** dishes chosen · est cost pp + per plan · total kcal pp (labelled estimate) · link to shopping. Dish-row: name (#f5e8cc 16 bold) · grams total under name (#e0d4b8 13) · GREEN food-cost total right (#c8e840, "Food cost" label; total for guests, not pp; omit if unpriced). Gold #f5c842 reserved for shopping only.
**Shopping page (§4d):** aisle-grouped, NO duplicates, two-price costing, share targets (WhatsApp/Gmail/Checkers60/PnP/Spar), print/PDF.
**Universal (§4e):** persistent bottom nav · ONE search above nav (NO per-screen "Search All Recipes" box) · My-Plan white pill everywhere there's a plan · consistent Back.
**Row (§3):** [checkbox][emoji] NAME (#f5e8cc 16 bold) · ONE feel line (#e0d4b8 14) · ≈R_ pp (#f5c842 13, only if priced) · bare › chevron. Whole row opens recipe; checkbox toggles plan (stop-prop); card bg constant.
**Colour (§1)/Font (§2):** Spice palette only (except Mood) · 13px floor · one global sans (no Georgia) · sizes title22/name16/body16/feel14/labels13.

## SECTION INVENTORY — audit + conform each (guest-state key in brackets)
Recipe pages on the shared opener already: Braai · World Kitchen · Health · Events · Kiddies.
- [ ] **Spice** — migrate recipe pages onto the opener (NEXT per Standard roadmap; unlocks cross-links)
- [ ] **Celebration Cakes** — own opener onto `recipePage`
- [ ] **Meals / Feed My Family** — migrate; root-cause: `meals.js` ~1039 `set({eventActiveRecipe:r})` reuses the OLD `eventsRecipeView` (buffet.js) via the leftover `if(aer){…}` in events.js ~1066 → that's the orange "QUANTITIES FOR N GUESTS" page. Replace with `openRecipe('meals',id)` + `RECIPE_BUILDERS.meals`.
- [ ] **Budget · Mood · Tiny Tummies · Furry · Anchor · 4-Ingredients · Beverages** — audit landing+plan+shopping against checklist; route through shared funcs.
Every section above must also use the new shared `howItWorks()` / `planView()` / `shoppingView()` once built.

## ORDER OF WORK (finite)
1. **Build the 3 missing shared functions** in core.js: `howItWorks()`, `planView()` (+ §4c plan-row), `shoppingView()`. (This is the biggest single win — it removes the main drift.)
2. **Route every section** through them + recipePage + sectionHeader.
3. **Finish recipe-page migrations**: Spice → Cakes → Meals.
4. **Cross-links** (salad→dressing, pie→Béchamel, pesto→Spice) — after Spice.
5. **Cosmetic sweep (last):** all headers 200px · My-Plan white overlay everywhere (remove grid tiles/coloured pills) · kill all gliding scales → wrapped boxes · remove per-screen search · remove Georgia.
6. **Cook-screen consistency:** Braai's centre+23px+long-step tweak → `wkCookingView`+`healthCookingView`; later one shared `cookingView()`.
7. **Dead-code cull** (after each migration confirmed live): Events `eventsRecipeView`/`openEvent`/`if(aer)` · Health `healthRecipeDetail`/`healthExtDetail` · Kiddies `kidsRecipeDetailHTML`.

## WORKFLOW (non-negotiable — same as always)
- Live site first → confirm what works.
- **`node --check` before EVERY push** (you run it yourself).
- **`core.js` is SACRED:** back up, check `wc -l` before/after, never truncate.
- Surgical, ONE file at a time. Never edit a working section unless that IS the task.
- Fetch reference via `curl -s raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js` (NOT the GitHub API — it rate-limits).
- Show Tina the diff; she pushes via **GitHub Desktop**. Standard wins over chat.

## FIRST MESSAGE TINA WILL SEND
"Read CLAUDE.md + TINZA_STANDARD.md. Confirm live state. Then audit Braai vs World how-it-works / plan / shopping, and build the shared `howItWorks()` first." → Do exactly that: audit (show the table), then build, file by file, node --check each.
