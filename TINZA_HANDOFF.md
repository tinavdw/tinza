# TINZA — SESSION HANDOFF
*Updated 11 Jun 2026 (pm). This is the bookmark — read it, then read TINZA_STANDARD.md.*

## ▶️ OPENING LINE FOR THE NEW CHAT (paste this)
> Hi Claude — I'm Tina, building Tinza. Before anything, fetch `TINZA_STANDARD.md` and `TINZA_HANDOFF.md` from the repo root and read both. We're in Phase 1: making every page look & function the same, built from shared functions in core.js. **Next move: `qtyBox()` into the live World Kitchen recipe page (`wkDetailV33`) — collapse its two size boxes into one, and add the "How portion size works" collapsible so nothing regresses.**

## 📌 SESSION PROTOCOL (every time)
1. `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_STANDARD.md` ← the law, read first.
2. `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_HANDOFF.md` ← this, where we are.
3. Fetch section files via `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js`. `node --check` before every push. GitHub Desktop push only. Standard wins over chat.

---

## ✅ DONE THIS SESSION (11 Jun late)
- **BONE-AWARE PORTIONS (Standard §6.1, LOCKED):** shared `PORTION` + `PORTION_BRAAI` + `portionG(cut,braai)` in core.js (one source). Braai `soloG` replaced by cut-derived base via `BRAAI_CUT` map + `braaiBaseG()` hook in `calcMeat`. boneless 250 · bone-in 325 (+30% for bone) · fish 200 · shellfish 250 · veg 250. Cost follows the same base. Verified: Boerewors 250g/R30 · T-Bone 325g/R94 · Lamb chops 325g/R88 · Snoek 200g/R33. **Rollout: other sections tag `cut` per recipe as touched; World Braai built bone-aware from the start.** Review the `BRAAI_CUT` map in braai.js for any wrong bone classification.
- **COST ENGINE LIVE (core.js 2069L):** shared `priceOf()` + `costRecipe()` (+ `proteinCostPP()`), pack-ready (reads `PACK_DB` when it lands, exact fallback). One price list (`PRICE_DB`), never faked. Standard §6.2–6.3.
- **BRAAI COST WIRED (braai.js):** `BRAAI_PRICEKEY` map (each raw cut → PRICE_DB key, edit in ONE place) + `braaiMeatCostPP` (standalone full-portion, pizza-spread in plan) + `braaiSideCostPP` (sides costed from their `shopping` ingredient lists via `costRecipe`). Both wired into `itemCard`. Verified: Rump R68 · T-Bone R116 · Lamb chops R81 · Chicken R31 · Prawns R88 · Pap R2 · Sweet-potato R4. **Push: core.js + braai.js + prices.js.**
- **2 veg prices added (prices.js):** halloumi R258/kg (R57.99/225g), brinjal/aubergine R43/kg (R42.99/1kg PnP).
- **STILL OPEN — 3 composite veg mains** (`brinjalskewers`, `mixedvegbraai`, `halloumiskewers`): blank for now. Next: give each a per-person `shopping` array in data.js + a `costRecipe(meat.shopping)` branch in `braaiMeatCostPP` → they light up honestly (parts all priced now).
- **Review:** the `BRAAI_PRICEKEY` table in braai.js is the cut map — Tina to eyeball the judgement cuts (kebabs→rump, sosaties→pork neck/lamb braai chops, cocktail sausages→boerewors, Kudu→beef fillet).
- Earlier: braai rows → World `wkRecipeCard` shape; My Plan overlay §4.1; row spec §3; two-price lock §6.3; Georgia stripped.

## ▶️ THE BRAAI COST — NEXT FOCUSED STEP (lights up `≈ R pp`)
**Two-price strategy is now LOCKED in Standard §6.2–6.3** (cook vs buy number · three buy-types weight/pack/each · two totals + reason line · pantry group). `PACK_DB` (`packs.js`, ~108 lines, drafted) is **NOT pushed** — pending a Checkers price-verification pass (`tinza_pack_sizes.xlsx`). Until then: **weight items (all meat) cost exactly = honestly now; buy-number stays off.**

Braai meats (`data.js` `MEAT_GROUPS`) and sides carry NO price — only `soloG`/`sharedG` grams via `calcMeat`/`calcSide`. To show the gold `≈ R pp` (the free hook, §7) without faking:
1. Build shared `priceOf(name)` in core.js (port World's `wkPriceLookup`; depends only on `PRICE_DB`; carries buy-type + pack when `PACK_DB` lands).
2. Build shared `costRecipe()` — exact (cook) now; pack-rounds only where `PACK_DB` has a pack, exact fallback otherwise.
3. `braaiMeatCostPP(meat)` = effective grams pp ÷ 1000 × `priceOf(meat.name)`; add a verified `priceKey` per meat where the name doesn't auto-match (e.g. "Rump Steak" → `beef rump`). **Surface the meat → R/kg table for Tina to confirm before it goes live.**
4. Pass it as `itemCard(...,costPP)` from braaiStep2/Step3. Row already renders it.

## 🔥 BRAAI PUNCH-LIST (remaining to fully finish)
- [ ] **Cost wiring** — see "THE BRAAI COST" above; lights up `≈ R pp` on every row.
- [ ] **Header image** — `BRAAI_HDR_IMG` is still the base64 blob. Swap to `Images/Headers/Braai.jpg` (§5.5) once that file is in the repo; drop the blob (shrinks file). *Left as-is so the header doesn't go blank.*
- [ ] **Pro-locked side rows** — still a bespoke 🔒 placeholder; restyle to the shared row shell later.
- [ ] **Header search input** — World filters its list; Braai has no filter logic, so a header search box would be dead. Needs filtering first.
- [ ] **Off-palette loose ends** (§1) — line ~146 green "→ Go to Side Dishes" CTA; `#c8a84b` muted-gold on the How-it-works toggles → `#c06020`.

## ✅ DONE THIS SESSION (11 Jun pm)
- **worldkitchen.js — wired the two LIVE header screens to shared `sectionHeader()`.** `node --check` clean, 2351 → 2352 lines. **PUSH PENDING.**
  - **`wkWorldHome()` (landing):** bespoke 190px gradient header → shared 200px `sectionHeader()`. Also **killed the rogue third image folder** `Images/Image header/` (space in name — violated Standard §5.5); world-map background gone, replaced by the standard photo slot pointing at `Images/Headers/World Kitchen.jpg` (emoji-falls-back until the file is added).
  - **`wkDataCountryHTML()` (country recipe list):** flat `#1a1208` bar header → shared 200px `sectionHeader()`, banner pointed at `Images/Headers/<Country>.jpg`. "My Plan" button preserved, relocated to a row just under the header.
  - Both now use the ONE shared header → can't drift.

## KEY FINDING — WORLD KITCHEN HAS A DEAD OLD PATH
World Kitchen runs on **two parallel systems**; only the NEW one is live:
- **LIVE (data-driven):** `wkWorldHome` (landing) -> `wkDataCountryHTML` (country list) -> `wkDetailV33` (recipe detail), fed by `wkPool()` / `WK_AFRICA|EUROPE|WORLD|SOUTHAFRICA`. The SA tile on the landing routes here (`wkContinent:'Africa',wkRegion:'Southern Africa'`).
- **DEAD (old):** `wkSAKitchensHTML` + `wkCountryHTML` + `wkRecipeDetailHTML` + `COUNTRY_RECIPES` (placeholder ingredients). Only entered from the unreachable old-map block (worldkitchen.js lines ~150/188/210) and `initWKMap`'s panel, which never renders on the live landing. **So "SA Kitchens has no header" and "country 160->200" in the old handoff point at dead functions — don't wire them.**
- **Decision needed:** delete the dead old trio + the old map block (lines ~50-220, the `// OLD MAP SCREEN (no longer reached)` block incl. `window.REGIONS` / `COUNTRY_TO_REGION` / `initWKMap`) in a dedicated clean-up pass? Tidier + smaller file, but its own surgical session (back up, `node --check`, push). Recommend yes, separately.

## ▶️ NEXT MOVES (in order)
1. **Push** the new `worldkitchen.js` (GitHub Desktop). Then open WK on the live site: landing + a country list (e.g. tap SA -> a Southern-Africa country) should now show the 200px header (emoji placeholder until header images are added).
2. **`qtyBox()` into `wkDetailV33` (the LIVE recipe page).** It currently has TWO size boxes: the "Servings" stepper + the "Quantities for N guests" box. Collapse to ONE shared `qtyBox()` directly under the recipe name. Custom `decJs`/`incJs` must drive **`S.wkServings`** (not `recipeServings`): `set({wkServings:Math.max(1,(S.wkServings||1)-1)})` / `set({wkServings:(S.wkServings||1)+1})`. **Preserve** the raw-carb note ("rice & pasta roughly triple") + the "full portion on its own / adjusts in a plan" explainer by adding the **"How portion size works" collapsible** (pizza analogy) — `wkDetailV33` doesn't have it yet. Leave the Pro-gated `costBox` as-is (don't break the paywall).
3. **Flatten per-region accent colours** on the live path (the few `color`/`bg`/`border` threads in `wkDataCountryHTML`/`wkDetailV33`) to the ONE warm palette per Standard §1.
4. **Flag-hero decision:** the old country screen had a 160px flag hero. On the live path, decide whether the country flag belongs in the `sectionHeader` photo slot or as a small chip — then standardise.
5. **Add header images** to `Images/Headers/` (`World Kitchen.jpg`, plus country names) so the placeholders fill in.
6. Roll `sectionHeader()` + `qtyBox()` across: meals -> events/buffet/spice/budget -> kiddies -> health.
7. Build shared **`recipeRow()`** in core.js; roll the touch-fix across remaining selectable rows.
8. **Global sans flip** (index.html `*{font-family:...sans...!important}`).

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
  qtyBox ........DONE    recipes               Opening + Free/Pro
  sectionHeader .DONE    Feed My Family        + payments/toggles
  recipeRow ....TODO     Budget (role-slot)    Community · Profile
        |                Anchor · Beverage
        v                4 Ingredients
  IMAGES locked: Image/ (recipes) + Headers/ (banners)
        |
        v
  WORLD KITCHEN (live path = wkWorldHome -> wkDataCountryHTML -> wkDetailV33):
    landing header ......... DONE  sectionHeader (200px, rogue folder killed)
    country-list header .... DONE  sectionHeader (200px, My Plan kept)
    recipe page qtyBox ..... NEXT  collapse 2 boxes -> 1 + portion collapsible
    per-region colour flat . TODO
    dead old trio + map ..... CLEANUP  delete in own session
        |
        v
  then roll sectionHeader + qtyBox across:
  meals -> events/buffet/spice/budget -> kiddies -> health
        |
        v
   PHASE 1 DONE = every page looks & works the same
```

## IMAGE FOLDERS (locked — Standard §5.5)
Two folders only, case-exact on GitHub.
- `Images/Image/` — recipe photos. Filename = exact dish name. LIVE & working. Singular `Image`.
- `Images/Headers/` — every banner. Filename = screen name as shown (`World Kitchen.jpg`, `Ethiopia.jpg`...). Capital `H`. Code now points here from WK landing + country list; **add the image files next**.
- The rogue third folder `Images/Image header/` (space) is now removed from code.

## STABILITY RULES
Live site first · `node --check` before every push · surgical · one concern at a time · **core.js SACRED** (back up, `wc -l` before/after, never truncate — untouched this session) · fetch via `curl -sL raw...` not GitHub API · GitHub Desktop push only · build on shared functions, never rebuild from new.
