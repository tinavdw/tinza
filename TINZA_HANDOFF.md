# TINZA — Session Handoff

_Last regenerated: 13 Jun 2026 (Braai "Start Cooking" bug FIXED · `core.js` only · node --check ✓ + logic smoke-tested)_

## ✅ Done this session (`node --check` ✓ + smoke-tested · PUSH `core.js`)

- **Braai "Start Cooking" button fixed** — it was dead because the shared braai recipe path called `openCookingMode(...)`, a function lost in the monolith→modules split (defined nowhere). It also embedded the whole `recipe.method` array — full of quotes — straight into an `onclick`, which would have broken the attribute even if the function existed.
  - **Fix mirrors the proven World Kitchen cook mode exactly** (no new pattern invented):
    1. **`core.js` ~line 2124** — the method's Start button now runs an inline `set({braaiCooking:{id,type,step:0}})` instead of `openCookingMode(...)`. It also only renders when the recipe actually has steps (matches WK's guard).
    2. **`core.js` ~line 391** — added the draw-level route `else if(S.braaiCooking && typeof braaiCookingView==='function')…`, sitting right next to `wkCooking` / `healthCooking`.
    3. **`core.js` (before `braaiRecipeAction`)** — added `braaiCookingView()`: reads `S.braaiCooking={id,type,step}`, re-resolves the recipe from `MEAT_GROUPS`/`SIDES_GROUPS` by id (so no quote-laden data is ever embedded in an onclick), and renders one step at a time — progress bar, ⏱️ tappable timers (reuses Braai's `parseStepTime`/`startTimer`), ← Previous / Next step → / ✓ Done, ✕ Exit. Warm palette (accent `#c06020`).
  - **Smoke-tested** in isolation: first step (no Previous), middle (both), last (Done not Next), out-of-range step index (clamps), a side recipe, a missing id, and null state — all render correctly, none throw.
  - `core.js` went 2267 → 2319 lines (grew, never truncated). Only one `openCookingMode` mention remains and it's a code comment.
- **By design unchanged:** Kiddies still has NO Start-Cooking (never had a cook mode). Migrated sections (WK/Health) untouched.

## 📤 Push status (GitHub Desktop, one file at a time)
- **`core.js` → push this** (Show in Explorer → drag into `sections/` → Replace old → commit → push). It lives at **`sections/core.js`** in the repo.
- `TINZA_HANDOFF.md` — push this regenerated file to the repo root (replace the old one).

## ▶️ Confirm live after pushing
Open **tinza.netlify.app → Braai → any meat recipe → 👨‍🍳 Start Cooking**. You should step through the method one card at a time with a progress bar, then ✓ Done returns you. Check a **side** recipe too (e.g. pap/salad) and one with timed steps (timer chip appears).

## Next up — Events, Meals (migration order is the dev's call)
1. **EVENTS migration onto the opener (events.js / eventsData.js)** — same 5 steps: split detail → builder, resolver across the section's data, register SOURCE+BUILDER, flip opens to `openRecipe('events',id)`, route cook at draw level **if** it has a cook view (use the braai cook mode just added as the template).
2. **MEALS migration (meals.js)** — same recipe. Fold the sameness fixes in: stray "Search All Recipes" box only in meals.js, and gliding scales.
3. **(maybe) BREADS** — Breads is now its own new section; confirm whether it needs migrating onto the universal opener like the others.
4. **Cross-links** once sections share the opener (salad→dressing, filled roosterkoek→base, pesto→Spice, World→Health). First real pairing is Tina's culinary call.
5. **Visual sameness folds INTO each migration** — deleting a bespoke page = look-sameness by construction.

## 🧠 Architecture notes (the spine)
- ONE opener: `openRecipe(section,id,{returnTo})` → `S.viewingRecipe={type,id,returnTo}`; `closeRecipe(extra?)` restores the `NAV_KEYS` snapshot + scroll. Each section registers a SOURCE (finder) + BUILDER (returns `recipePage` opts).
- **Cook mode is routed at draw level** (`if(S.wkCooking)… else if(S.healthCooking)… else if(S.braaiCooking)…`, core.js ~389). Add each new section's cooking view to the same chain as it migrates — Braai now uses this exact slot, so the chain is the template.
- Migration pattern proven **three times** (World Kitchen, Health, Kiddies); Braai cook mode now follows the identical state+view+route shape. Events/Meals follow the same 5 steps.

## Parked (real, after the migrations)
- **Dead code:** delete the now-unreachable old detail renderers — Health (`healthRecipeDetail` + `healthExtDetail` + their `healthHTML` dispatch) and Kiddies (`kidsRecipeDetailHTML` + its `kidsScreen==='recipe'` dispatch). Left intact as minimal-risk; cull once confirmed solid live.
- **Kiddies display decision:** count items with no unit (eggs, jelly packets) now show just the party TOTAL ("eggs … 5"), not "0.3 pp · 5 total". Tina to confirm or revert to per-child.
- **World Kitchen content:** warm-palette pass (needs braai.js + core.js) · Asia spice exact-definition · India gaps (Butter Chicken, lamb/goat) · the two "mixed meat"→named-cut edits (wk_africa Gango, wk_southafrica Braaivleis).
- **Costing:** gold "buy" two-cost (`PACK_DB`/`packs.js`) · Pantry "you may already have" group · one shared Braai+WK plan/shopping renderer (§6.4).
- **`howThisFeels` soul pass** (all sections — last) · monthly price check · Budget engine + Global Search = separate solo sessions.
- **Spice shelves Tina leads** (Chutneys & Atchars, Sambals, Jams & Preserves).

## START HERE next conversation
1. **curl `TINZA_STANDARD.md` (v1.8) and this `TINZA_HANDOFF.md` from the repo root BEFORE touching code.** Standard wins over chat.
2. Start at **tinza.netlify.app** — confirm live: Braai (incl. **Start Cooking now works**) · World Kitchen · Health · Kiddies all open through the universal opener.
3. Begin **Events migration** (then Meals → Breads? → cross-links), using the just-added Braai cook mode as the cook-route template.
4. Live: tinza.netlify.app · repo tinavdw/tinza (`sections/` holds the JS) · fetch via `curl` from raw.githubusercontent.com.
