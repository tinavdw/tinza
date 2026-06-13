# TINZA — Session Handoff

_Last regenerated: 13 Jun 2026 (Braai cook bug + polish DONE & live · **EVENTS migrated onto the universal opener** — node --check ✓ + smoke-tested · PUSH events.js + buffet.js)_

## ✅ Done this session

### 1. Braai "Start Cooking" — fixed + polished (`core.js`, LIVE)
- Dead `openCookingMode` replaced with WK-style `set({braaiCooking:{id,type,step}})`; new `braaiCookingView()` (re-resolves by id, progress bar, tappable timers, Prev/Next/Done/Exit); routed at draw level beside wk/health. Step **centred**, text **23px**, long steps scroll via `margin:auto 0`. Confirmed live & loved.

### 2. EVENTS migrated onto the spine (Standard §4b) — `events.js` + `buffet.js`, PUSH THESE
- **Chose option A: full sameness.** Events recipes now render through the shared `recipePage` (200px header, green `qtyBox`, shared ingredient/method shells) — identical to Braai/WK/Health/Kiddies.
- **Source:** `eventsResolve(id)` (appended to events.js) finds the record across every `EVENTS_*` array and **tags it with its plan key** (`eventSelectedMains/Sides/Salads/Starters/Desserts/Cultural`; sauces + fingers → `eventSelectedFingers`). Registered `RECIPE_SOURCES.events`.
- **Builder:** `eventsRecipeOpts(r, guests)` (appended to events.js). Registered `RECIPE_BUILDERS.events`. It:
  - **Folds the caterer's quantity logic into the green qtyBox** (per Tina's call): kg, ml→L, ice-cream tubs (2L/5L hint), shanks, trays (1 tray = 20 portions), pieces, bone-in raw-weight (+35%), ppG batch. Cost pp + total go in the info strip with the "costing only" note.
  - Scales `base300` ingredients through the shared row (ported the per-person + fraction + tbsp/tsp scalers; finger-food `pp`/`u` per-piece scaler preserved). Falls back to `pantry` strings when no base300.
  - Method → shared `methodBox` (no Start Cooking — **Events has no cook mode**, so no draw-level route needed).
  - **Real Add-to-Plan toggle** per category (not faked) + tip + ml-per-person extras.
  - qtyBox ± wired to `S.eventGuests` (default 20), like Kiddies' kidsCount.
- **Opens flipped** (4 sites): finger chevron + both eventCard actions (events.js) and the sauce-row chevron (buffet.js) now call `openRecipe('events',id)`.
- **Smoke-tested** all branches (chicken kg, ice-cream tubs, shanks, tray, ml→L, pieces, sauce, finger in-plan, missing id) — all correct, none throw. `node --check` ✓ on both files.

### 3. Photo loader now accepts PNG (`core.js`, pushed)
- `recipePhoto()` + `sectionHeader()` images route through a new `photoSwap()` helper: on a `.jpg` 404 it retries the same name as `.png` once, then falls back to the emoji. Tina's photos saved as PNG now show. Standard §5.5 still prefers `.jpg` (smaller/faster on phones) but `.png` works. (Headers with spaces e.g. `Cape Malay.png` swap too.)

## 📤 Push status (GitHub Desktop, one file at a time, into `sections/`)
- `events.js` — **PUSH** (builder + source + registration + flipped opens). Now 1817 lines.
- `buffet.js` — **PUSH** (one flipped open on the sauce row). 1408 lines.
- `core.js` — already live from earlier this session (Braai). **No new core.js change this round.**
- `TINZA_HANDOFF.md` — push to repo root (replace old).

## ▶️ Confirm live after pushing
tinza.netlify.app → **Events**. Open recipes from each list — a Big-Cooking **main** (kg + cost), an **ice-cream** dish (tub hint), **lamb shanks** (N shanks), a **tray** dish, a **sauce** (scales in the ingredient list), a **finger food** (Add to Plan toggles). Check **Back** returns to the right list, and the green **±** changes the guest count and rescales. All pages should now look identical to Braai/WK/Health/Kiddies.


## 🔍 DIAGNOSTIC (found 13 Jun, fix = the Meals migration below)
**Symptom:** some recipes still show the OLD orange "📊 QUANTITIES FOR N GUESTS" detail page (no green qtyBox, no shared layout) while migrated Events recipes show the new green page.
**Root cause:** it is NOT an Events gap — Events is fully migrated (no `openEvent` calls, no `eventActiveRecipe` setters left in events.js). The old page is triggered by **`meals.js` line ~1039: `set({eventActiveRecipe: r})`**, which reuses the old `eventsRecipeView` (buffet.js) via the dead-but-still-present `if(aer){ return eventsRecipeView(aer,guests) }` dispatch in events.js (~1066). So opening a recipe through the **Meals** path renders the old Events detail page.
**Fix:** the **Meals migration** (next task) replaces that `set({eventActiveRecipe:r})` with `openRecipe('meals',id)` + a `RECIPE_BUILDERS.meals` builder — same 5 steps as Events. That makes every page green/consistent. (Braai's "Potato Bake" green page in testing was a Braai SIDE, already on the spine — not an Event.)
**Cook mode note:** migrated Events pages show the method as a numbered list but have NO "Start Cooking" step-mode (Events never had one). If a cook mode is wanted for Events/Meals later, reuse the Braai `braaiCookingView` pattern.

## Next up
1. **MEALS migration (meals.js)** — same 5 steps. Fold sameness fixes in: the stray "Search All Recipes" box that's only in meals.js, and the gliding category scales.
2. **(maybe) BREADS** — its own new section now; confirm if it's on the spine, migrate if not.
3. **Cross-links** once sections share the opener (salad→dressing, pesto→Spice, World→Health). Tina's culinary call.

## Parked — cook-mode consistency
- Apply the Braai cook-screen tweak (**centre + 23px + long-step `margin:auto 0`**) to `wkCookingView` (worldkitchen.js) and `healthCookingView` (health.js) so all cook screens match.
- Eventually collapse the three near-duplicate cook views into ONE shared `cookingView()` in core.js.

## Parked — dead code to cull (after each migration is confirmed solid live)
- **Events:** `eventsRecipeView()` in **buffet.js** (the old ~277-line detail renderer) + the `if(aer){ return eventsRecipeView(...) }` dispatch in events.js + `openEvent()` in core.js — all now unreachable. Left intact as minimal-risk; cull once Events is confirmed solid.
- **Health:** `healthRecipeDetail` + `healthExtDetail` + their `healthHTML` dispatch.
- **Kiddies:** `kidsRecipeDetailHTML` + its `kidsScreen==='recipe'` dispatch.
- **Finger-food qty note:** finger foods show no qtyBox total ("scaled below") — same as the old behaviour (they have neither perPerson nor ppG). Could later show "≈N pieces"; Tina to decide.

## Parked — community ideas (feedfeed look · LATER, low priority — Tina is sceptical, rightly)
- "Made it!" photo on the recipe page · community recipe lane + badge · "What SA's cooking this week" from own activity. Borrow the engine, **not** the ad model (Tinza = subscription, no ads ever). Not worth chasing now.

## Parked (real, after the migrations)
- **World Kitchen content:** warm-palette pass · Asia spice exact-definition · India gaps (Butter Chicken, lamb/goat) · two "mixed meat"→named-cut edits.
- **Costing:** gold "buy" two-cost (`PACK_DB`/`packs.js`) · Pantry "you may already have" group · one shared Braai+WK plan/shopping renderer (§6.4).
- **Kiddies display:** count items show party TOTAL only — Tina to confirm or revert to per-child.
- **`howThisFeels` soul pass** (all sections — last) · monthly price check · Budget engine + Global Search = separate solo sessions.
- **Spice shelves Tina leads** (Chutneys & Atchars, Sambals, Jams & Preserves).

## START HERE next conversation
1. **curl `TINZA_STANDARD.md` (v1.8) and this `TINZA_HANDOFF.md` from the repo root BEFORE touching code.** Standard wins over chat.
2. Start at **tinza.netlify.app** — confirm live: Braai · World Kitchen · Health · Kiddies · **Events** all open through the universal opener.
3. Begin **Meals migration** (then Breads? → cross-links), using Events/Kiddies as the template.
4. Live: tinza.netlify.app · repo tinavdw/tinza (`sections/` holds the JS) · fetch via `curl` from raw.githubusercontent.com.
