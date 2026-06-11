# TINZA — SESSION HANDOFF
*Updated 11 Jun 2026 (cleanup session). This is the bookmark — read it, then read TINZA_STANDARD.md.*

## ▶️ OPENING LINE FOR THE NEW CHAT (paste this)
> Hi Claude — I'm Tina, building Tinza. Before anything, fetch `TINZA_STANDARD.md` and `TINZA_HANDOFF.md` from the repo root and read both. We're in Phase 1: every page looks & works the same, built from shared functions in core.js. **Next move: flatten the few per-region accent colours on the live World Kitchen path to the ONE warm Spice palette (Standard §1) — `wkDataCountryHTML` + `wkDetailV33`.**

## 📌 SESSION PROTOCOL (every time)
1. `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_STANDARD.md` ← the law, read first.
2. `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_HANDOFF.md` ← this, where we are.
3. Section files via `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js`. `node --check` before every push. GitHub Desktop push only. Standard wins over chat.

---

## ✅ DONE THIS SESSION (11 Jun — cleanup)
- **DEAD WORLD-KITCHEN OLD PATH DELETED.** Removed the entire parallel old system that was misleading every session: `initWKMap` + the SVG map, `window.REGIONS`, `window.COUNTRY_TO_REGION`, `wkSAKitchensHTML`, `wkCountryHTML`, `wkRecipeDetailHTML`, `COUNTRY_RECIPES`, and `worldKitchenHTML`'s dead `'sa'`/`'country'` dispatch branches. **worldkitchen.js 2276 → 1035 lines.**
- **core.js coordinated fix:** removed the orphaned `setTimeout(initWKMap, 50)` call (was the only live tendril into the dead map). **core.js 2087 → 2086** (−1, sacred check passed). Without this the deleted function would have crashed the WK landing.
- **Verified before cutting:** every setter of `wkScreen:'sa'`/`'country'` lived inside the deleted functions; no other section file references the deleted symbols (only harmless state-key reads + null-resets remain). All 14 live WK functions confirmed present. `node --check` ✓ on both files.
- **Discovered already-done (handoff was stale):** `wkDetailV33` (the live recipe page) already runs through shared `qtyBox()` driving `S.wkServings`, renders via the `recipePage()` assembler, keeps the raw-carb note + portion collapsible + Pro cost box. The old handoff's "qtyBox into wkDetailV33" next-move was completed in a prior session — the *old* two-box pattern only survived inside the now-deleted `wkRecipeDetailHTML`, which is what made it look pending.
- **PUSH (GitHub Desktop):** `worldkitchen.js` + `core.js`. After push, open WK on the live site — landing, a country list, and a recipe page should all behave exactly as before (the map was already invisible; nothing user-facing changes, the file is just honest now).

## ▶️ NEXT MOVES (in order)
1. **Flatten WK per-region accent colours** → ONE warm Spice palette (Standard §1). The few `color`/`bg`/`border` threads remaining live in `wkDataCountryHTML` + `wkDetailV33` (e.g. `REGIONS_DATA[...].color/bg/border` fallbacks). Replace with the warm tokens.
2. **Flag-hero decision (live path):** the deleted old country screen had a 160px flag hero. Decide whether the country flag belongs in the `sectionHeader()` photo slot or as a small chip on `wkDataCountryHTML`, then standardise. (`wkFlagUrl()` is kept and still available.)
3. **Add header images** to `Images/Headers/` (`World Kitchen.jpg`, country names) so the emoji placeholders fill in.
4. **Roll `sectionHeader()` + `qtyBox()` across the rest:** meals → events/buffet/spice/budget → kiddies → health.
5. **Build shared `recipeRow()` in core.js** to the `wkRecipeCard` §3 shape; roll the touch-fix across remaining selectable rows. (Standard §3 reconcile note: the old "Recipe ›" link must align to this.)
6. **Global sans flip** — `index.html` `*{font-family:...sans...!important}` (needs index.html, still pending).

## ▶️ PARALLEL FEATURE TRACK — Braai ↔ World Kitchen costing (Standard §6.4, do in order)
*(Bigger user-value work; can run between Phase-1 sweeps.)*
1. **Braai shopping-list costs** — price every Braai shopping line via `costRecipe`/`priceOf`, show `amount · R` per row, aisle-grouped, + shopping total + 10% buffer. Copy World Kitchen's `wkBuildPlanShopping` approach (it already does this).
2. **Reconcile** Braai + WK My Plan to ONE shared plan-row + shopping renderer (WK format = reference: `role · X of N · % of plate · ~R`; ingredient `g pp · total kg`).
3. **Two-cost into World Kitchen** — add the two totals + reason line (§6.3) to WK; two-price is app-wide.
- Buffer (+10%) and pack-rounded "shop" total are separate numbers — both can show, label clearly. Shop total needs `packs.js` (drafted ~108 lines, NOT pushed — pending Checkers verify of `tinza_pack_sizes.xlsx`).

## 🔥 BRAAI PUNCH-LIST (still open)
- [ ] Header image — swap `BRAAI_HDR_IMG` base64 blob → `Images/Headers/Braai.jpg` once the file's in the repo, then drop the blob.
- [ ] Pro-locked side rows — restyle the bespoke 🔒 placeholder to the shared row shell.
- [ ] Header search input — needs filter logic first (a search box is dead without it).
- [ ] Off-palette loose ends — `#c8a84b` muted-gold on How-it-works toggles → `#c06020`.
- [ ] 3 composite veg mains (`brinjalskewers`, `mixedvegbraai`, `halloumiskewers`) — give each a per-person `shopping` array + a `costRecipe(meat.shopping)` branch in `braaiMeatCostPP` so they light up honestly.
- [ ] Review `BRAAI_PRICEKEY` cut map — eyeball the judgement cuts (kebabs→rump, sosaties→pork neck/lamb braai chops, cocktail sausages→boerewors, Kudu→beef fillet).
- [ ] Follow-ups: `aisleCategory()` in core is a stub (dairy vs Other) — expand to Meat/Veg/Pantry. Retire legacy `totalCost()`/`MEAT_COSTS` once nothing uses them.

## WHERE WE ARE — FLOWCHART
```
                         TINZA BUILD
                              |
        +---------------------+----------------------+
        |                     |                      |
   PHASE 1: TIDY        PHASE 2: FILL          PHASE 3: SHELL
  (uniform pages)        (content)              (wrapper)
        |                     |                      |
        v                     v                      v
  [ shared funcs ]      World/Spice/Braai     Weekly Planner
  qtyBox .......DONE     recipes               Opening + Free/Pro
  sectionHeader.DONE     Feed My Family        + payments/toggles
  recipePage ...DONE     Budget (role-slot)    Community · Profile
  recipeRow ....TODO     Anchor · Beverage
        |                4 Ingredients
        v
  WORLD KITCHEN (live path = wkWorldHome -> wkDataCountryHTML -> wkDetailV33):
    landing header ......... DONE  sectionHeader (200px)
    country-list header .... DONE  sectionHeader (200px, My Plan pill)
    recipe page qtyBox ..... DONE  one shared qtyBox + portion collapsible
    DEAD OLD PATH .......... DONE  DELETED 11 Jun (2276 -> 1035 lines)
    per-region colour flat . NEXT  -> one warm palette (Standard §1)
    flag-hero decision ..... TODO  header slot vs chip
    header images .......... TODO  add Images/Headers/*.jpg
        |
        v
  roll sectionHeader + qtyBox across:
  meals -> events/buffet/spice/budget -> kiddies -> health
        |
        v
   PHASE 1 DONE = every page looks & works the same

  PARALLEL: COSTING (Standard §6.4)
   Braai shopping costs -> reconcile Braai+WK renderer -> two-cost into WK
   (packs.js pending Checkers verify)
```

## IMAGE FOLDERS (locked — Standard §5.5)
Two folders only, case-exact on GitHub.
- `Images/Image/` — recipe photos. Filename = exact dish name. Singular `Image`. LIVE.
- `Images/Headers/` — every banner. Filename = screen name as shown. Capital `H`. Code points here; **add the image files**.
- (The rogue third folder `Images/Image header/` was already removed from code in a prior session.)

## STABILITY RULES
Live site first · `node --check` before every push · surgical · one concern at a time · **core.js SACRED** (back up, `wc -l` before/after, never truncate — this session: 2087→2086, verified) · fetch via `curl -sL raw...` not GitHub API · GitHub Desktop push only · build on shared functions, never rebuild from new.
