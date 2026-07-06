# TINZA — CLAUDE CODE MARATHON BRIEF
**6 Jul 2026 · app-wide sameness + fixes · Tina-authorised full session**

Tina has authorised a marathon: fix the braai letters, migrate **all of FMF** to the shared look (the sameness pass — never done for FMF; only WK + Braai are done), and clear the outstanding audit issues in the same run. Work in the safe order at the bottom. Bank between parts.

---

## 0. SESSION DISCIPLINE — read first, don't skip
- **Curl the standards from the repo root before touching code:** `TINZA_STANDARD.md`, `TINZA_HANDOFF.md`, `WOW_STANDARD.md`, `CLAUDE.md`. The Standard beats anything in chat.
- **Know the `/wow` command.** `/wow` invokes `WOW_STANDARD.md` — the canonical card-authoring spec. Whenever Tina types `/wow`, or whenever any card is authored/rewritten (e.g. the naming pass, or if a recipe needs a touch), it must meet the full standard: unique feel-line · `didYouKnow` moat (never reuse an angle) · buy-name ingredients (pp + total) · why-led method naming each make-or-break step · tip · storage + `freezes` + `fridgeDays` · `goesWith` C4-verified against the live library · **Leavener Law** (yeast/bp/bicarb always measured in g) · no retailer names · real named spices.
- **Back up `core.js` before any edit** (copy it + record the line count before and after). `core.js` drives every section — a break there breaks the whole app.
- **One logical change at a time.** `node --check` after every file edit. Smoke-test the affected section before moving on.
- **Some wiring may already be live but unpushed from a prior Code session — VERIFY current state before redoing anything.**
- **Show diffs. DO NOT push.** Tina reviews every diff and pushes herself via GitHub Desktop.
- **Sameness rule:** uniformity comes ONLY from shared `core.js` renderers + `var(--token)`. Never hand-roll hex or sizes. Accent/badge colours must never reuse the locked **green `#46530c`** (food cost) or **gold `#876213`** (shop-spend).

---

## PART A — FMF SAMENESS PASS ★ the main event
**Problem (Tina's screenshots 8–12):** *Feeding My Family* (Breakfast · Light Lunch · Supper · Bakes/Cakes/Breads) renders on a **DARK theme** — near-black background, purple/maroon accents, and a horizontal gliding category scroll-strip. Every other section (Braai, World Kitchen, Health, Kiddies) uses the **WARM theme** (cream background, brown/gold accents) via shared `core.js`. FMF was never migrated.

**Goal:** FMF looks and behaves **identically to Braai v33 / World Kitchen** — same warm palette, same shared renderers, same recipe page, same nav — differing only by section photo + emoji.

- **A1 · Theme.** Route every FMF view through the shared Warm Spice theme (Mulish + Fraunces + DM Mono; cream bg, brown/gold). Delete FMF-local dark styling. No FMF page sets its own background/text colours — inherit `var(--token)` only.
- **A2 · Shared renderers.** Replace all FMF-local card/list/plan/shopping code with the shared `core.js` functions the other sections already use: `warmCard`, `sectionHeader`, `qtyBox`, `planDishRow`, `planView`, `shoppingView`, `recipePage`. This is the actual sameness mechanism.
- **A3 · Universal recipe opener.** Migrate FMF to `openRecipe` / `closeRecipe` (already live on WK, Health, Kiddies, Braai — FMF + Events are the last two pending). Tapping any FMF card opens the shared recipe page with **Back → FMF**.
- **A4 · Nav = grid, not scroll-strip.** FMF Bakes category nav is a horizontal gliding scroll strip (Breads & Rolls / Flatbreads / Muffins & Quick Breads / Biscuits & Rusks). **Locked standard:** category nav = a grid of tappable boxes (like the FMF landing cards), **never** a horizontal gliding scroll. Convert it.
- **A5 · Recipe page unification — the MOST COMPREHENSIVE version wins (Tina ruling, 6 Jul).** Don't just make FMF match braai; build the **superset** recipe page and retrofit **braai AND WK to it too**. First inventory each section's recipe-page features, then make `recipePage()` render the union, applied everywhere:
  - green *HOW MUCH TO MAKE* `qtyBox` stepper · two-cost display (green food-cost + gold shop-spend) · Free/Pro cost gate ("Cost estimate — Tinza Pro R50/month" when Free) · version chips where warranted · **clickable deep-link `goesWith`** (FMF bakes has the › arrows; braai's are plain chips → braai gains clickable) · **Start Cooking + timers** (FMF has it; braai gains it) · the full button row (Add to Plan / My Kitchen / Download).
  - No per-section variants: braai, WK and FMF all emit the identical shared `recipePage()` output. Because it touches braai + WK too, re-verify those sections after the change (see A6).
- **A6 · Regression check.** These edits touch shared `core.js`, so after the pass **load every section** (Braai, WK, Health, Kiddies, Events, FMF) and confirm none regressed. FMF should now be visually indistinguishable in chrome from braai.

---

## PART B — BRAAI LETTER READABILITY
**Problem (screenshots 3–4):** the braai section header (`BEEF — 14 OPTIONS`) and the meat category chips (Beef / Pork / Lamb / Chicken / Seafood / Vegetarian) use small, low-contrast muted-orange text on cream — Tina can't read them **outdoors in sunlight** (which is exactly where a braai happens).

**Fix:** raise the contrast and size of the section-header label and the category-chip labels to a legible, high-contrast token. Do it in `sectionHeader()` / the chip renderer so it lands everywhere consistently (a sameness win too). Keep it token-driven — bump the header/chip text token, don't hand-roll a one-off. Target: readable in bright outdoor light (darker weight/colour, slightly larger).

---

## PART C — BRAAI SHOPPING-LIST / INGREDIENT DESYNC (the "800g" bug)
**Problem (screenshot 5, Boerewors, 2 people):** the green summary box shows **600g** (300g pp — correct, cut-based), but the ingredient line reads **350g pp · 700g total** and the shopping list shows **~800g** (700g + the 10% braai buffer). Three different numbers for the same meat.

**Root cause:** the green `qtyBox` uses the locked cut-based portion (`braaiBaseG` → `BRAAI_CUT` → `PORTION_BRAAI` + grazing taper). The recipe-page **ingredient breakdown** and `buildShoppingList()` (`core.js` ~line 713, the marinade/portion path) still use the **old per-meat `soloG`/`sharedG` + `meatSpreadMult`** model. Only the main-protein green box was migrated previously; these two paths weren't.

**Fix:** route the ingredient breakdown AND `buildShoppingList()` through the **same cut-based portion + taper** as the green `qtyBox`, so card / green box / ingredient lines / shopping list all show one number. Per the locked rule, per-meat `soloG`/`sharedG` magic numbers must **not** drive portions — `braaiBaseG` cut-class is the single source of truth. Keep the +10% buffer, but apply it to the cut-based figure so it reconciles.

**Verify:** Boerewors 2 people → green box, ingredient line, and shopping list all read the same (≈600g + buffer), not 600 vs 700 vs 800.

---

## PART D — DATA QUALITY (`meals.js` — apply the two locked rulings)
From the full node-load audit (361 recipes · 694 versions · 9000 ingredient entries). Recently-built cards are clean; these are pre-existing debt.

- **D1 · Measurement (Ruling A, locked 5 Jul).**
  - Salt + black pepper → stay **"to taste"** (no cost). Fine as-is.
  - Every **other** named flavour-spice (paprika, cumin, turmeric, coriander, cinnamon, cayenne…) → assign a concrete small **gram** amount (e.g. paprika 1g) + look up pp. **Never "to taste."** (Newbies need the guideline; too little spice changes the taste.)
  - Garlic → keep as **cloves in the name** ("6 cloves" / "12 cloves"). Do NOT convert to g.
  - Bread → **per slice** (keep). Egg / yolk → **each** (keep). Cheese-slices → give g.
  - Net: split the 278 no-pp seasonings into salt/pepper (leave) vs flavour-spices (gram + price).
- **D2 · Ingredient separation.** Split genuine two-seasonings-on-one-line entries ("salt & pepper", "paprika & cumin") into separate lines. **Do NOT split** legit single products ("hundreds & thousands", "mixed seeds (sunflower, sesame, linseed)", "walnuts & pecans", "dried chillies (guajillo & ancho)").
- **D3 · Nutrition.** All kcal present. One gap — the adapter/`bf-shakshuka` inject in the lunch adapter has no nutrition; confirm it inherits from canonical Shakshuka.

---

## PART E — PRICELIST CURRENCY (Ruling B — `prices.js`)
- **E1 · Reconcile Tina's recovered prices** (her own figures, already unit-normalised) into `prices.js` / `PRICE_DB`:
  - **Africa/exotic:** dried kapenta R350/kg · mopane worms R450/kg · pumpkin seeds R150/kg (also the egusi sub) · unsliced white loaf R15 ea · tea R300/kg · coffee R1050/kg (pantry) · gelatin R350/kg. Aliases: Maizena = cornstarch = cornflour = "starch" → cornflour; ground egusi seeds → pumpkin seeds.
  - **27 Jun:** stout R27/750ml · green curry paste R48/50g · gochujang R77/240g (sub 50:50 tomato paste + hot sauce) · burger rolls ~R3 ea · sliced bread ~R21/loaf ÷ 24 ≈ R0.90/slice.
  - **Pack round (13 Jun):** salt 13/500g·25/1kg · onion 30/1kg·55/2kg · sunflower oil 40/750ml·95/2L · egg 22/6·60/18·90/30 · white sugar 32/1kg→270/10kg · brown sugar 33/1kg→250/10kg · cake flour 22/1kg→145/10kg · butter 80/500g · olive oil 140/500ml·220/1L · milk 18/1L·39/2L · black pepper 4/7g·47/50g·104/200g · rice 15/500g→40/2kg · tomato paste 10/50g·16/100g.
- **E2 · Confirm the new §1–§8 bakes buy-list keys exist** (whole-wheat / rye / self-raising flour, seeds, semolina, teff, masa harina, golden syrup, desiccated coconut, cocoa, dark/white chocolate, jams, glacé cherries, sweet wine, ground almonds, pistachios, the spice set, etc. — full list in the meals handoff T2).
- **E3 · Re-run the NULL-price gap scan** across FMF + WK + Bakes → target **0 NULLs**. **Never guess a rand:** any price not in the recovered set → output it to a blank list for Tina, don't invent.

---

## PART F — WIRING (verify live first; finish only what isn't already done)
- **searchHTML bug:** `draw()` missing `searchHTML()` at `core.js:473` — confirm search renders.
- **goesWith → clickable deep-links** across all shelves (bakes already shows › arrows; confirm FMF-wide).
- **Lunch adapter (Option 1):** drop the 18 thin DUP lunch cards + surface the fuller canonical card; this also resolves the Shakshuka dup (exactly one veg-tagged Shakshuka on the lunch quick shelf, opens as a lunch detail).
- **Version-chip discoverability:** version-count badge on browse cards + search scans `versions[].name` + deep-link to the matched version. Badge colour = accent/neutral, never the locked green/gold.
- **Lunchside role fix:** `mealRoleFromCat` files lunch salads/soups as "side" → excluded from the budget finder. Fix `kind==='lunch' ? 'main' : …` in `adaptMeals`.

---

## PART G — ENTICING DISH NAMES (propose — do NOT silently rename)
Tina wants names that sell the dish (e.g. "Carrot Cake" → something more mouth-watering). **Locked rule:** on a kept card the name = the photo-match key, so a silent rename **orphans the photo**. Therefore:
- **NAMING RULE (Tina, 6 Jul):** enhance only the **master/top-level card name**, and keep it **broad** so it never collides with the version-chip names underneath. Pattern example: `Carrot Cake` → **`Delicious Carrot Cake`** (broad, appetising) — the versions (Classic / Pineapple / etc.) still read cleanly beneath it. Vary the enticing word per dish; don't rubber-stamp "Delicious" on everything.
- Code produces a **proposed rename list** (old → new) for the bakes room, starting with the flattest names (Carrot Cake, Chocolate Cake, Vanilla Cake, Banana Bread, etc.), each with a one-line reason.
- On Tina's per-card approval, update **both** the display name **and** `photoName` together, and add that card to the **photo regen queue**. Never rename without updating the photo key.
- **Deliver the list; Tina ticks; then apply.** Nothing renamed silently.

## PART H — COOKING-TIME SANITY + DISPLAY
Trigger: Croissants show ~700 minutes. First **verify** — is 700 a real total or a summed/duplicated-field bug? Croissants genuinely run ~11–16 hr (overnight chill + lamination rests + proving), so ~700 min **can** be a legitimate TOTAL — but "700 min" reads as absurd/scary.
- **Sanity scan:** flag every bake whose displayed time is implausible (e.g. > ~120 min) and confirm the figure is real vs a data bug; fix any genuine bugs.
- **Display long times in HOURS**, not minutes ("~12 hr", not "700 min"). Threshold ~90–120 min.
- **Split active vs total:** show hands-on time separately from long hands-off rests, e.g. "Active 45 min · chill overnight · prove 2 hr · bake 18 min".
- **Label** long-ferment/chill bakes as "make-ahead · mostly hands-off" so the number reassures instead of scares.
- This is a shared `core.js` display rule (applies app-wide) + a data check on the bake-time fields.

## PART I — BAKES PORTION MODEL  ✅ APPROVED (Tina, 6 Jul) — BUILD IT
Researched conventions (6 Jul): **cake slice** = 1 portion ≈ 100–115g (~350 kcal); a round cake ≈ 10–14 slices (8-inch serves ~12), so a slice ≈ 1/12 of the cake. **Biscuits** = ~2–3 small or 1–2 large ≈ 30–40g. **Rolls/muffins/scones** = 1 item = 1 portion.

Proposed per-category model (fits baking's whole-batch reality — you can't bake a third of a cake, so bakes are **yield-based**, not per-person-grams):

**BATCH LAW (Tina, 6 Jul):** every bake has a fixed **sensible batch/yield** and you **never scale below one batch** — no baking 4 amaretti, 2 rusks, or half a cake. The people dial rounds **up** to whole batches; below one batch it stays at one batch (and the card notes it keeps / freezes). Each card states **"makes ~N"** so the cook knows what a batch produces. This makes biscuits & rusks behave exactly like a cake: one fixed batch, round up for more.
1. **Countable singles — 1 item = 1 portion, 1 per person.** Rolls · buns · muffins · scones · cupcakes · vetkoek · koeksisters · amagwinya · doughnuts · koesisters · malasadas · gulab jamun · jalebi · pampoenkoekies. Card carries a **yield** ("makes 12"); named per roll/muffin/etc.; stepper rounds to whole batches.
2. **Sliceable — 1 slice = 1 portion.** Cakes · cheesecakes · tarts · tea-loaves · dish puddings (malva/sticky toffee). Card carries **serves-N** (defaults: cake 12 · tart 8–10 · loaf 10 · cheesecake 12). For P people, cakes = round-up(P ÷ N); ingredients × cakes. Slice ≈ 100–115g.
3. **Batch treats — a fixed batch, just like a cake.** Biscuits · cookies · rusks. Card states a realistic **"makes ~N"** that depends on the piece **size**: small (amaretti) ~40 · medium (choc-chip) ~30 · large cookies ~18 · shortbread fingers ~24 · rusks ~40. Derive from dough weight ÷ a typical per-piece weight (small ~15–20g · medium ~25–30g · large ~40–45g) where possible, else set per card. Portion = 2–3 small / 1–2 large biscuits · 1–2 rusks. **Never scale below one batch;** more people → whole extra batches.
4. **Spoonable — portion = a serving ~150–200g** (like supper). Panna cotta · trifle · rice pudding · banoffee (individual pots or a dish).
5. **Bread loaves — per slice** (already locked), ~2 slices pp.
**"Per cake or per person?" — RESOLVED (Tina + Claude, 6 Jul):** keep the **dial on PEOPLE everywhere** (one shared `qtyBox`, no separate "cakes" control — sameness), but bakes **answer in whole units**. Never show a fraction of a cake:
- A cake **defaults to its natural yield** on open (e.g. "1 cake · serves 12 · 1 slice each").
- Stepping people up → round up to **whole cakes/batches** and say so ("20 people → bake 2 cakes · serves 24"). Cost = whole cakes/batches; per-person = total ÷ people.
- Display speaks baker's words: **per cake · per slice · per roll · per batch** — the control underneath is still people, so costing + My Plan + shopping keep aggregating by headcount exactly like every other section.
**APPROVED DEFAULTS (Tina, 6 Jul) — wire these into the bakes `qtyBox` now:** sliceable — cake **12** · tart **8–10** · loaf **10** · cheesecake **12**; batch-treat **makes-~N** by size — small/amaretti **~40** · medium **~30** · large **~18** · rusks **~40**. Countable singles = the recipe's own item yield. These are defaults per card — a card can override (e.g. a rich chocolate cake set to serve 16) but the defaults above apply where none is set. Build it.

---

## ORDER OF PLAY (safe sequence — bank after each)
1. **Back up `core.js`; curl the standards.**
2. **PART B** (braai letters) — small, visible, low-risk warm-up. `node --check`, eyeball, bank.
3. **PART C** (braai 800g desync) — `core.js` logic; verify Boerewors reconciles, bank.
4. **PART A** (FMF sameness) — the big one. Theme + renderers + nav + recipe page, then **re-verify every section** (shared `core.js`), bank.
5. **PART D + E** (data + prices in `meals.js` / `prices.js`) — run the NULL scan, bank.
6. **PART H** (cooking-time sanity + display) — pairs with the data work; bank.
7. **PART F** (wiring — incl. the search fix F1) — verify-first, finish gaps, bank.
8. **PART G** (enticing names) — generate the **proposed list** for Tina; do NOT apply yet.
9. **PART I** (portions) — **APPROVED**; wire the model + locked yields into the bakes `qtyBox`, bank.
10. **Hand Tina the per-file diffs + the two proposal lists (names, portions).** She reviews on live, signs off, and pushes herself. **No push from Code.**
