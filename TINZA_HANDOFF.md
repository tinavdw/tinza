# TINZA — SESSION HANDOFF
*Updated 11 Jun 2026 (costing session). This is the bookmark — read it, then read TINZA_STANDARD.md.*

## ▶️ OPENING LINE FOR THE NEW CHAT (paste this)
> Hi Claude — I'm Tina, building Tinza. Before anything, fetch `TINZA_STANDARD.md` and `TINZA_HANDOFF.md` from the repo root and read both. The make-vs-buy two-cost (ladder model) is LIVE on the Braai plan. **Next move: mirror the exact two-cost display + ladder into World Kitchen's `wkBuildPlanShopping` / `wkMyPlanView` (§6.4 step 3), then §6.4 step 2: one shared plan+shopping renderer in core.js so Braai and WK can't drift.**

## 🔒 BUY-NUMBER RULE (LOCKED 12 Jun) — round up to the next real pack
- **Ladders (smallest rung that covers the need; past the top rung, multiples of the top):** Milk 1L/2L · Onions·potatoes·sweet potato·tomatoes 1kg/2kg · Flour·maize/pap·rice·sugar 1/2/5/10kg · Eggs 6/12/18/24.
- **Single-pack items** (butter 500g, oil, tins, jars) → their one size.
- **By weight (no pack entry):** all meat & fish, butternut, pumpkin, garlic, chilli — buy the kg you need, +10% safety, "loose" tag.
- **"Loose" is now a money-saving TIP, not a default:** for baggable veg where the bag dwarfs the need (<60% of the rung), the row shows the bag as the buy number AND a quiet `💡 ~Xg loose ≈ Rn` so the hurried buyer takes the bag and the budget buyer can save.
- **ESTIMATE DISCLAIMER on the list:** "Estimate — based on standard pack sizes & average prices. Specials and your own shop will move it." Plus a bulk-value note in the collapsible (2kg usually better value).
- **Staples default = smallest covering** (150g flour → 1kg). If Tina prefers a 2kg floor for staples, it's a one-line change.
- **packs.js shape:** `{ladder:[…]}` | `{size:N}` | `{each:true,ladder:[…]}` | `loosable:true` | no entry = by weight. Price omitted (per-kg × size reproduces shelf price).

## ✅ DONE THIS SESSION (12 Jun — ladder model + disclaimer)
- **packs.js rewritten to the ladder model** (141 lines): veg/milk/big-staples ladder, rest single-pack, eggs tray ladder, `loosable` veg.
- **core.js (2131):** `buildShoppingList()` gains the weight-ladder branch (smallest-rung-covering + multiples of top) and the loose-saving tip; `priceOf` resolves PACK_DB by matched key (fuzzy names get their pack).
- **braai.js (388):** clean pack labels ("1kg"/"2×2kg" not "1×1kg"), per-row `💡 loose` tip, estimate disclaimer on the list, bulk note in the collapsible.
- **PROVEN:** onions 600g→1kg / 1500g→2kg / 300g→1kg +💡300g loose R8; milk 800ml→1L / 1400ml→2L; flour 3kg→5kg; eggs 8→12; boerewors 500g→550g loose; butter 60g→500g.
- **Files to PUSH (GitHub Desktop):** `packs.js`, `core.js` (2131), `braai.js` (388). index.html already live.
- **(Earlier today: the two-cost display was first wired; this supersedes it with the ladder model + disclaimer.)**

## ✅ DONE EARLIER (12 Jun — packs.js first build + first wiring)
- **THE TWO-COST IS LIVE ON THE BRAAI PLAN.** Each shopping line shows the **BUY** amount as the main number, with a grey **"needs Xg"** sub-line where you buy whole packs, and a small **"loose"** tag on by-weight items. Two clean totals in the top box: **"What this braai costs"** (no1, exact) and **"What you'll spend at the shops"** (no2, pack-rounded). The +10% buffer + the why-it's-higher explanation moved into a collapsible **"ℹ️ About these totals"** at the bottom — two numbers on screen, detail on tap (the grandma test).
- **core.js (2127):** (1) `priceOf()` now resolves `PACK_DB` by the matched key too, so fuzzy names (e.g. "coarse maize meal" → maize meal pack) get their pack. (2) `buildShoppingList()` attaches per line: `cookCost` (exact), `buyCost`/`buyAmt`/`buyPacks`/`loose`/`packLine` via four buy-types (weight +10%, pack round-up, flex loose-or-bag, egg ladder).
- **braai.js (385):** `braaiStep4` render rebuilt — buy amounts, loose tags, needs sub-lines, two totals from cook/buy sums, collapsible explainer. Replaced this-morning's single buffered shopping total.
- **PROVEN end-to-end** with the real PRICE_DB + PACK_DB: boerewors 500g→550g loose R66; coarse maize meal 512g→1×1kg R19 (fuzzy resolved); onions 300g loose / 1.1kg→2×1kg; eggs 8→12; oil 40ml→1×750ml; cake flour 150g→1×1kg.
- **Files to PUSH (GitHub Desktop):** `core.js` (2127), `braai.js` (385). `packs.js` + `index.html` already pushed and live.

## ✅ DONE EARLIER (11 Jun — packs.js rebuilt + loaded)
- **`packs.js` (PACK_DB) REBUILT from the locked spec and loaded** (it was drafted in a past session but never reached the repo — 404 — and that container reset, so it was gone). **89 entries**, three buy-types: by-weight items carry NO entry (buy = cook); by-pack items carry a `size`; eggs use a `ladder`. `index.html` now loads it (after prices.js, before core.js).
- **EGG LADDER corrected to 6/12/18/24** (was wrongly stored as 6/12/18/30).
- **PRICE has to be omitted on purpose:** PRICE_DB's per-kg figures were back-computed FROM pack prices, so `packs × (size/1000 × per-kg)` reproduces the real shelf price exactly — no Checkers trip needed for correctness. (Add `price:` only to override a verified pack price.)
- **PROVEN with a harness** (real PRICE_DB + PACK_DB): cake flour need 150g → buy 1×1kg R22 (cook R3); milk 300ml → 1×1L R20; butter 100g → 1×500g R80; eggs 8→12 (R44), 3→6, 15→18; boerewors/mince (by weight) → no gap. The make-vs-buy gap is exactly right.
- **Engine was already ready:** `priceOf()` reads PACK_DB, `costRecipe()` computes the pack-rounded `buy`. So this is now a DISPLAY job, not an engine job.
- **STILL TO DO (the visible part — the wiring):** (1) `buildShoppingList()` attach per-line `buyAmt`/`buyCost`, incl. the **flex** rule (loose under `looseUnder`, else round to `bag`) and the **egg ladder** for count items. (2) `braaiStep4` render: BUY amount as the main right-column number + grey "needs Xg" sub-line where buy≠need; loose items read e.g. "Onions — 300g (loose)". (3) **TWO totals only**, kept clean: "What the meal costs" + "What you'll spend at the shops". (4) The +10% buffer + the "why the shop total is higher" reason go in a **collapsible "ℹ️ About these totals" button at the bottom** — away from the totals, so it never overwhelms. (5) mirror into World Kitchen's `wkBuildPlanShopping`.
- **DECISIONS LOCKED (11 Jun):** (a) **Two money totals on screen, not three** — the +10% buffer lives only inside the collapsible explainer. (b) **Flexible buy-type added** to packs.js: potatoes/sweet potato/onions/tomatoes = loose under 800g, else 1 kg bag (proven). Butternut/pumpkin/garlic/chilli stay by-weight (loose). Peppers = optional 2-pack rule later. (c) Egg ladder 6/12/18/24.
- **RESEARCH (why this matters):** Mainstream apps split into recipe→list tools (Paprika, Samsung Food, AnyList — merge/aisle/scale, but show the *recipe* amount, never the pack) and budget calculators (Shop Calc, AnyList pricing — you enter pack sizes/prices *by hand*). **Nobody auto-converts recipe grams → pack-rounded buy amount + cost.** Tinza's cook-vs-buy is a genuine differentiator; the loose-vs-bag threshold is Tina's own innovation.
- **Files to PUSH (GitHub Desktop):** `packs.js` (new — 98 entries incl. flex veg), `index.html` (repo root — adds the one script line). Zero-risk; loads the data. Screen unchanged until the display wiring lands.

## ✅ DONE EARLIER (11 Jun — costing, §6.4 Step 1)
- **BRAAI SHOPPING LIST NOW COSTED** — matches World Kitchen. Every shopping line shows `amount · R__`, aisle-grouped, with a **`🛒 Shopping List (+10% buffer) ~R____`** total in the header (WK pattern). Built on the shared engine: `buildShoppingList()` (core.js) now attaches a `+10%` buffered amount + per-line `cost` via `priceOf()` per item (same maths as WK's `wkBuildPlanShopping` / `costRecipe`); `braaiStep4` renders it. Unpriced lines (e.g. basting sauce) show no R and stay out of the total — honest, exactly like WK.
- **Buffer note:** the shopping list now shows **buffered amounts** (e.g. boerewors 500g → 550g) to match WK exactly; the meal cost up top ("What this braai costs", from `braaiPlanCost`) stays the exact unbuffered per-person number. Two different honest numbers, both labelled.
- **AISLE FIXES (core `aisleCategory`, helps BOTH sections):** (1) `sausage` → `sausages?` so **Cocktail Sausages** lands in 🥩 Meat & Fish, not 🧂 Other. (2) Added a Pantry guard so **black pepper / peppercorns / braai spice / masala** go to 🥫 Pantry instead of being grabbed by 🥦 Fruit & Veg's `pepper`.
- **Files (PUSH all three via GitHub Desktop):** `core.js` (now **2097** — includes the prior cleanup's initWKMap removal *and* today's aisle + cost edits; this supersedes the cleanup core.js), `braai.js` (**371**), `worldkitchen.js` (**1035**, unchanged from the cleanup session — push if not already pushed; re-pushing the identical file is harmless). `node --check` ✓ on all three.

## ✅ DONE PRIOR SESSION (11 Jun — cleanup)

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

## ▶️ PARALLEL FEATURE TRACK — Braai ↔ World Kitchen costing (Standard §6.4)
1. ~~**Braai shopping-list costs**~~ — ✅ **DONE 11 Jun.** Per-line `amount · R`, aisle-grouped, total + 10% buffer. Mirrors WK.
2. **Reconcile** Braai + WK My Plan to ONE shared plan-row + shopping renderer ← **NEXT.** WK format = reference (`role · X of N · % of plate · ~R`; ingredient `g pp · total kg`). Both already cost identically, so this is mostly lifting the render into a shared `planShopping()` in core.js so they can't drift. Braai's plan rows are currently simpler (`name · total · ≈R pp`) than WK's — bring Braai up to WK's richness during the extraction.
3. **Two-cost into World Kitchen** — add the two totals + reason line (§6.3) to WK; two-price is app-wide. (Braai already shows the two-total structure; the pack-rounded "shop" total stays off until `packs.js` lands — drafted ~108 lines, pending Checkers verify of `tinza_pack_sizes.xlsx`.)
- The +10% buffer (safety on cook cost) and the pack-rounded "shop" total are separate numbers — both can show, label clearly.

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
   Braai shopping costs ... DONE (per-line R + 10% buffer total, aisle-sorted)
   reconcile Braai+WK renderer ... NEXT (one shared planShopping() in core)
   two-cost into WK ... TODO   (packs.js pending Checkers verify)
```

## IMAGE FOLDERS (locked — Standard §5.5)
Two folders only, case-exact on GitHub.
- `Images/Image/` — recipe photos. Filename = exact dish name. Singular `Image`. LIVE.
- `Images/Headers/` — every banner. Filename = screen name as shown. Capital `H`. Code points here; **add the image files**.
- (The rogue third folder `Images/Image header/` was already removed from code in a prior session.)

## STABILITY RULES
Live site first · `node --check` before every push · surgical · one concern at a time · **core.js SACRED** (back up, `wc -l` before/after, never truncate — this session: 2087→2086, verified) · fetch via `curl -sL raw...` not GitHub API · GitHub Desktop push only · build on shared functions, never rebuild from new.
