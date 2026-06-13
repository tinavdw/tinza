# TINZA — Session Handoff

_Last regenerated: 13 Jun 2026 (Braai "Start Cooking" FIXED + cook screen polished · `core.js` only · node --check ✓ + smoke-tested · confirmed live & loved)_

## ✅ Done this session (`core.js` only — PUSHED & confirmed working live)

- **Braai "Start Cooking" button fixed.** It was dead because the shared braai recipe path called `openCookingMode(...)`, a function lost in the monolith→modules split (defined nowhere), and it also crammed the whole quote-laden `recipe.method` array into an `onclick`.
  - **Fix mirrors the World Kitchen cook mode exactly** (no new pattern):
    1. `core.js` ~2124 — Start button now runs inline `set({braaiCooking:{id,type,step:0}})`; only renders when the recipe has steps.
    2. `core.js` ~391 — draw-level route `else if(S.braaiCooking && typeof braaiCookingView==='function')…`, beside `wkCooking`/`healthCooking`.
    3. `core.js` (before `braaiRecipeAction`) — new `braaiCookingView()`: reads `S.braaiCooking={id,type,step}`, re-resolves the recipe from `MEAT_GROUPS`/`SIDES_GROUPS` by id (no data ever embedded in onclick), renders one step at a time with progress bar, ⏱️ tappable timers, ← Previous / Next → / ✓ Done / ✕ Exit.
- **Cook screen polished** (same `braaiCookingView`):
  - Step is **vertically centred** so a short step doesn't strand a dark void (the bottom nav is `position:fixed`, so the screen fills the viewport).
  - **Step text bumped to 23px** (number circle 48px/21px, line-height 1.7) — one step at a time, glanceable from the stove.
  - **Long-step provision:** the step sits in a `margin:auto 0` wrapper — short steps centre, a long step collapses the auto-margins to 0 so the page scrolls instead of clipping. (Most long steps are already split, so this rarely triggers.)
  - **Confirmed live: works great, text size right.** `core.js` now 2322 lines (grew, never truncated).
- Untouched by design: Kiddies still has NO Start-Cooking (never had a cook mode); WK/Health cook views untouched.

## 📤 Push status (GitHub Desktop, one file at a time)
- `core.js` (lives at **`sections/core.js`**) — LIVE.
- `TINZA_HANDOFF.md` — push this regenerated file to the repo root (replace the old one).

## Next up — Events, Meals (migration order is the dev's call)
1. **EVENTS migration onto the opener (events.js / eventsData.js)** — same 5 steps: split detail → builder, resolver across the data, register SOURCE+BUILDER, flip opens to `openRecipe('events',id)`, route cook at draw level **if** it has a cook view. **Use the just-built Braai cook mode as the template.**
2. **MEALS migration (meals.js)** — same recipe. Fold the sameness fixes in: stray "Search All Recipes" box only in meals.js, and gliding scales.
3. **(maybe) BREADS** — now its own new section; confirm whether it needs migrating onto the universal opener.
4. **Cross-links** once sections share the opener (salad→dressing, filled roosterkoek→base, pesto→Spice, World→Health). First real pairing is Tina's culinary call.
5. **Visual sameness folds INTO each migration** — deleting a bespoke page = look-sameness by construction.

## 🧠 Architecture notes (the spine)
- ONE opener: `openRecipe(section,id,{returnTo})` → `S.viewingRecipe={type,id,returnTo}`; `closeRecipe(extra?)` restores the `NAV_KEYS` snapshot + scroll. Each section registers a SOURCE (finder) + BUILDER (returns `recipePage` opts).
- **Cook mode is routed at draw level** (`if(S.wkCooking)… else if(S.healthCooking)… else if(S.braaiCooking)…`, core.js ~389). Add each new section's cook view to the same chain as it migrates — Braai now uses this exact slot, so the chain is the template.
- Migration pattern proven 3× (World Kitchen, Health, Kiddies); Braai cook mode follows the identical state+view+route shape.

## Parked — cook-mode consistency (NEW, after migrations)
- **WK & Health cook screens have the identical older layout** (Braai's was copied from WK) — they still have the dark void + 20px text. Apply the same **centre + 23px + long-step `margin:auto 0`** tweak to `wkCookingView` (worldkitchen.js) and `healthCookingView` (health.js) so all cook screens match the Standard's "every screen looks the same."
- **Future:** collapse the three near-duplicate cook views (`wkCookingView` / `healthCookingView` / `braaiCookingView`) into ONE shared `cookingView()` in core.js — same philosophy as `qtyBox()`, so a tweak like today's only happens once.

## Parked — community / "made it" ideas (NEW, from feedfeed look — for Pro/community later)
- **"Made it!" photo on the recipe page** — a cooked-this photo tied to the exact recipe (not a social feed; keeps "quiet kitchen energy"). Cleanest version of in-app photo uploads; natural Pro perk.
- **Community recipe lane + badge** — "submit a recipe → we might feature it", but in a separate Community lane so it doesn't have to meet the full costed/locked template.
- **"What South Africa's cooking this week"** — surfaced from Tinza's OWN activity (most-planned / most-saved), no social plumbing needed.
- Note: feedfeed monetises via brand partnerships/sponsored content — **borrow the community engine, NOT the ad model** (Tinza = subscription, no third-party ads, ever).

## Parked (real, after the migrations)
- **Dead code:** delete the now-unreachable old detail renderers — Health (`healthRecipeDetail` + `healthExtDetail` + their `healthHTML` dispatch) and Kiddies (`kidsRecipeDetailHTML` + its `kidsScreen==='recipe'` dispatch). Cull once confirmed solid live.
- **Kiddies display decision:** count items with no unit (eggs, jelly packets) now show just the party TOTAL ("eggs … 5"), not "0.3 pp · 5 total". Tina to confirm or revert to per-child.
- **World Kitchen content:** warm-palette pass (needs braai.js + core.js) · Asia spice exact-definition · India gaps (Butter Chicken, lamb/goat) · the two "mixed meat"→named-cut edits (wk_africa Gango, wk_southafrica Braaivleis).
- **Costing:** gold "buy" two-cost (`PACK_DB`/`packs.js`) · Pantry "you may already have" group · one shared Braai+WK plan/shopping renderer (§6.4).
- **`howThisFeels` soul pass** (all sections — last) · monthly price check · Budget engine + Global Search = separate solo sessions.
- **Spice shelves Tina leads** (Chutneys & Atchars, Sambals, Jams & Preserves).

## START HERE next conversation
1. **curl `TINZA_STANDARD.md` (v1.8) and this `TINZA_HANDOFF.md` from the repo root BEFORE touching code.** Standard wins over chat.
2. Start at **tinza.netlify.app** — confirm live: Braai (incl. **Start Cooking — works, centred, 23px**) · World Kitchen · Health · Kiddies all open through the universal opener.
3. Begin **Events migration** (then Meals → Breads? → cross-links), using the Braai cook mode as the cook-route template.
4. Live: tinza.netlify.app · repo tinavdw/tinza (`sections/` holds the JS) · fetch via `curl` from raw.githubusercontent.com.
