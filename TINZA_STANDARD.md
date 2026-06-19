# TINZA — THE STANDARD
### The single source of truth. This file is the law. Read it FIRST, every session.
*Version 1.12 · updated 15 Jun 2026 (**§4g THE ONE TEMPLATE folded in** as the tiebreak law for plan/shopping/recipe pages [best-of Braai+Events+World]; **§6.3 packs.js corrected to LIVE** — the gold "what you'll spend" total is real now; **§8** `buildPlanData`/`guestStepperCard`/`shoppingView`/`planView` marked built. Earlier v1.11: **§7 FREE/PRO re-locked — COST IS PRO, NOT FREE:** free = all recipes + cook/view + the +/− scaler + 1 dietary restriction + calories (number always shown) + Anchor Ingredient; PRO = all cost figures, My Plan (`planView`), shopping (`shoppingView`), nutrition breakdown. Gating lives IN the shared components: `qtyBox` scaling free / cost line Pro-peekable / kcal always-on · §3 row `≈ R pp` Pro-peekable · `planView` & `shoppingView` are whole Pro pages sharing one peekable flag. Also **§4f EVENTS MODEL locked** — "Events" is only an umbrella; every tab is an EQUAL standalone feature with its own My Plan rendered by the shared `planView`/`shoppingView`/`howItWorks`/`qtyBox`; the hub My-Plan pill is per-feature/contextual, NEVER pinned to Buffet; there is NO combined cross-tab Events plan; Cultural is deleted — cull any dead cultural block. **§8: `howItWorks()` is now BUILT** — the How-it-works + optional guest-stepper box; `guestBar()` delegates to it.) Earlier v1.9 · 14 Jun 2026 (**§10 finish-sameness SEQUENCE locked** — do in order, then add recipes: recipe-page opener migrations first [NEXT = Spice] → cross-links → ONE shared plan-row/shopping renderer → cosmetic sweep LAST → then FILL. Events recipe pages migrated; buffet landing restored to standalone.) Earlier v1.8 (**braai portions re-locked §6.1** — bone-aware tier bumped up: boneless 300/bone-in 400/fish 280/shellfish 320; `calcMeat` now cut-based via `braaiBaseG` so same cut = same grams and kebabs count as RAW meat not the skewer; new grazing taper 100/70/58/50 replaces the old 350g-constant). Earlier: plan dish-rows green food-cost TOTAL §4c; Image Folders; sectionHeader; My Plan overlay §4.1; row spec §3; two-price costing §6.2–6.3; Braai↔World Kitchen one costing model §6.4. When a rule changes, edit THIS file and commit it — never re-decide in chat.*

> **Session protocol (do this every time):**
> 1. Fetch this file first: `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/TINZA_STANDARD.md`
> 2. Fetch the latest `TINZA_HANDOFF.md` for where we left off.
> 3. Only then touch code. If anything in chat contradicts this file, **this file wins** — or we change this file on purpose.

---

## MISSION — THE NORTH STAR
**Build an extraordinary South African food app people *want* and stay subscribed to — uniform across every page, and so simple a child or a grandma can use it on a phone.**

Retention is the whole game, and the research tells us exactly what to design against:
- ~56% of apps are uninstalled within 7 days; ~46% within 30. The top reasons people leave are **confusing/inconsistent UI** and **things being hard to read on a phone.**
- So our three retention levers ARE the design rules below: **uniformity** (every page the same), **simplicity** (a grandma can use it one-handed outside under a tree), **readability** (16px body floor, off-white on warm-dark, hierarchy by size/weight not dimness).
- The free hook = **real cooking value** — every recipe, cook/view, the +/− scaler, calories, and Anchor Ingredient — felt before the paywall. **Cost, My Plan and shopping are the PRO layer** (peekable), the upgrade you reach for once the cooking has earned trust (§7).

Every decision in this file serves that mission. If a change makes a page less uniform, less simple, or less readable, it's wrong — no matter how clever.

---

## 0. THE ONE RULE
**Every page, in every section, must LOOK and FUNCTION the same.** Different rooms are told apart by their *photo and emoji only* — never by different layouts, sizes, box positions, or (except Mood) colours. If two screens differ in anything below, one of them is wrong.

---

## 1. COLOUR (warm Spice palette — everywhere EXCEPT Mood)
| Role | Hex |
|---|---|
| Background (warm near-black) | `#0f0e0c` |
| Card surface | `#161210` |
| Raised card | `#1a1208` |
| Names / titles | `#f5e8cc` |
| Body text | `#f0ebe1` |
| Secondary (feel lines, labels, meta) | `#e0d4b8` |
| Important numbers (gold) | `#f5c842` |
| Accent (borders, buttons) | `#c06020` |
| WhatsApp green | `#25d366` |

**Green qty box** (the one deliberate non-warm accent): outer `#1a2208` / border `2px #6a8020` · inner `#0f1a04` · total `#c8e840` · count `#f5c842`.

**Mood is the ONE exception** — it keeps its colour-as-feeling accents. Do not flatten Mood.

**13px is the floor.** Nothing smaller, anywhere.

---

## 2. FONT & SIZE HIERARCHY
- **Font:** ONE global sans rule in `index.html`:
  `*{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif!important}`
- **Sizes (px):** title 22 · name 16 · body 16 · feel line 14 · labels 13 · line-height 1.5
- **Weights:** regular + bold only. Names are 16 bold.

---

## 3. THE ROW (lists, every section)
**Reference = World Kitchen's `wkRecipeCard`** (the live screen we point at). Built once, identical everywhere:
`[checkbox] [emoji] NAME` (`#f5e8cc`, 16, bold) + **ONE feel line** (`#e0d4b8`, 14, upright) + **≈ R__ pp** (`#f5c842`, 13 bold — **PRO/peekable** (§7); shown ONLY when the dish is priced AND the user is Pro, else teased behind the lock) + a bare **`›`** chevron far right (`#f5c842`, 26px, no "Recipe" word). Name, feel line and the row itself are free.
- **Whole row OPENS the recipe.** The **checkbox toggles the plan** (stop-propagation): 22px, border `#c06020`, fills `#c06020` with a white ✓ when in-plan. **Card background stays constant** — selection shows in the box, never a row highlight.
- **Never fake the cost.** If a section can't price a dish yet, the `≈ R pp` line is simply omitted (same as World) until the price wiring exists.
- All other metadata (grams/portion, time, kcal) lives on the recipe page, NOT the row.
- *Reconcile note:* `recipeRow()` in core.js still renders an old "Recipe ›" text link — align it to this `wkRecipeCard` shape next time core is touched.

---

## 4. PAGE TEMPLATES (what each page contains, in order)

### 4.1 THE MY PLAN OVERLAY (locked — every section with a plan)
The "My Plan" button is a **white pill in the top-right corner, sitting INSIDE the photo header** — never a box below the photo, never a row in the category grid, never a green/coloured pill. It lives in the shared `sectionHeader()`; a section turns it on by passing `myPlan:{ count:<live plan count>, onclick:"<go to that section's plan>" }`. Sections that pass nothing show no pill (unaffected).
- **Style (do not re-decide):** position top-right inside the 200px photo · semi-transparent dark fill `rgba(0,0,0,0.42)` · 1px white border `rgba(255,255,255,0.6)` · white text `#fff` 13px bold · rounded pill · label `🧺 My Plan (N)`.
- It carries the **scroll-to-top reset** (`_savedScroll=0`) so the plan opens at the top.
- **Reference:** Braai and World Kitchen both use this exact overlay. Any new/edited section matches it by passing `myPlan` — never by hand-rolling a plan button.

### 4a. Section landing (every section identical)
1. **Photo header — 200px**, gradient overlay, title + search bar overlaid on it. **The "My Plan" control is a WHITE PILL in the TOP-RIGHT corner inside the photo** (see §4.1) — never a separate box below the photo, never inside the category grid.
2. One box: **"How it works"** link (left) + **guest/serving ± slider** (right).
3. **Categories = wrapped BOXES** in a grid. **NO gliding / horizontal-scroll scale, anywhere, ever.**
4. Recipe rows (section 3 standard).
5. *(landing hooks: cost p/p shown on rows; calorie hint where available.)*

### 4b. Recipe page (every section identical)
1. **Photo header — 200px.**
2. **Recipe name** + meta strip (origin · time · kcal).
3. **THE GREEN QTY BOX — directly under the name** (shared `qtyBox()`): big total + per-person inside, `− guests +` same row, **scales live**. This is the ONLY size box on the page. Its optional thin info strip carries the useful bits — **cost p/p · total · kcal p/p** — where the data exists. One box, doing the work of the old three. **Gating (§7): scaling is FREE; the cost p/p · total figures are PRO/peekable; kcal stays visible to everyone (always-on).**
4. **"How portion size works"** collapsible (pizza analogy).
5. **Ingredients** — see section 5.
6. **Method** — numbered, with timers + cooking mode.
7. **Goes Well With.**
8. **Bottom actions:** Add to Plan · Save to My Kitchen · Download.
9. **Text nav:** Back | My Plan | Home.

### 4c. Plan page
Dishes chosen · **est. cost p/p and per plan** · **total calories p/p** (estimate, ALL dishes incl. sides — always labelled "estimate") · link to shopping list.

**Plan dish-row (LOCKED):** each chosen dish is one row — **name** (`#f5e8cc`, 16 bold) · **grams total under the name** (`#c0915a`/`#e0d4b8`, 13 — the total food for the guests selected, e.g. `480 g total`) · **green food-cost TOTAL on the right** (`#c8e840` bold, with a small `#9bbf6a` "Food cost" label — the per-dish cost for the guests selected, NOT per person). If a dish isn't priced yet, the cost is simply omitted — never faked. **Gold `#f5c842` stays reserved for the shopping list** ("what you'll spend"); the plan rows are green (cost). Built once in a shared renderer so Braai and World Kitchen never drift (§6.4).

### 4d. Shopping page
Clean aisle-grouped list, **no duplicates**, no per-meal separation. **Two-price costing** (see section 6). Share targets: WhatsApp · Gmail · Checkers60 · PnP · Spar. Print / Save as PDF.

### 4e. Universal elements
- **Persistent bottom nav bar** on every screen.
- **ONE universal search** sits ABOVE the bottom nav. **No per-screen "Search All Recipes" box.**
- **My Plan = white pill, top-right inside the photo header** on every section that has a plan (see §4.1). Same pill everywhere; only the count and destination differ.
- Back buttons read the same everywhere and isolate sub-sections correctly.

### 4f. THE EVENTS MODEL (locked 15 Jun 2026)
**"Events" is only an umbrella name.** Every tab under it — **Big Buffet · Finger Foods & Snacks · Celebration Cakes · Kiddies Parties · Beverages & Cocktails** — is an **EQUAL standalone feature.** There is **no main/primary tab** and **no merged cross-tab plan.** Each feature **looks and opens identically** and has **its own My Plan**, all rendered by the shared `core.js` functions (`planView` / `shoppingView` / `howItWorks` / `qtyBox`).
- The Events hub **"My Plan" pill is per-feature / contextual** — it opens the **active feature's own plan.** **Never pin it to Buffet.**
- **There is no single combined Events plan.** Each tab keeps its own selection set and its own plan/shopping screens.
- **Cultural was deleted.** No Cultural tab, recipes, data or render code remains in the live app — **cull any dead cultural block on sight** (was tangled into `core.js` pool spread + the Meals recipe-open leftover; remove in lockstep so nothing dangles).

### 4g. THE ONE TEMPLATE — best-of-three, the tiebreak law (locked 15 Jun 2026)
**Folded in from `TINZA_ONE_TEMPLATE.md`.** This is the LAW for the **plan, shopping and recipe pages** and the tiebreak wherever Braai, Events and World disagree. `prices.js` + `packs.js` are BOTH live, so the two-cost block is real. Gating: **cost = Pro/peekable; the +/− scaler + calories = FREE** (§7). Each pick is tagged `← [source kept]`.

**§0 ONE LOOK (applies to every element):** one warm Spice palette (except Mood) · one global sans · **locked sizes title 22 · name 16 · body/feel 16 · sub 14 · labels 13 (nothing < 13)** · locked colours bg `#0f0e0c` · card `#161210` · names `#f5e8cc` · body `#f0ebe1` · secondary `#e0d4b8` · **gold `#f5c842` = shopping / "what you'll spend"** · **green `#c8e840` = food cost** · accent `#c06020` · **single column, NO horizontal scroll anywhere**, 34px tap targets. *Acceptance: readable on a phone at arm's length in dappled outdoor light, or the size/contrast is wrong.*

**§1 LANDING / CATEGORY:** 200px photo header · My-Plan white pill top-right inside photo · wrapped category grid + selected-count badge · **"CATEGORY — N OPTIONS" count header** (← Braai, add everywhere) · **"X selected · N guests · Yg pp each"** subtitle (← Events, add to all) · **"How portion size works"** collapsible everywhere (← Braai, ADD to Events) · row = §3 (`≈ R pp` Pro/peekable; name + feel + row free).

**§2 RECIPE PAGE:** bottom of every recipe/category page = **Events' bottom** (`← [Feature]` / `Home` + category grid incl. My Plan + **"See my Plan & Shopping List →"**) (← Events, all adopt) · under the name a **"Xg pp · ~Ry/pp"** line (grams free, ~R Pro) · **green qty box = the Events box**: big total + per-person + `− guests +` live-scale + **Food-cost line `R__ pp · R__ total`** + "for costing only — not the shop total" disclaimer (← Events, all match); **remove "Family Mix"**; **`−/+` recomputes grams AND cost live** (scaling free, food-cost line Pro, kcal always); the stuck-320g Braai stepper heals when Braai routes through shared `qtyBox` · **scaling explained ONCE** (keep the under-name line; remove the "smart scaling" banner + below-photo repeat → the collapsible) · **ingredients show "Xg pp · Yg Total"** (← Events format, Braai adopts) · **CONCRETE amounts only — NEVER a ratio** ("2 per 5 people", "2 tbsp per 100g", "1 per 500ml" are banned; a ratio can't be scaled/costed/pack-rounded — resolve to the real total, fix everywhere) · **timers + "Start Cooking →" cook mode** on every recipe (delivered by shared `recipePage()`).

**§3 PLAN PAGE (`planView()`):** header = 200px photo + **My Plan (N)** white pill · back button names the feature **"← Braai / Buffet / Finger Foods"** (← Braai, NEVER "Overview") · title **"Your [Feature] Plan"** · one-liner "Everything you need, costed and ready" · guests count (← Events) · **summary block under the dishes, before shopping: Total dishes · Cost per person · Estimated total · kcal pp** (cost Pro/peekable, kcal always; ← Events, add to Braai) · **plan dish-rows = World's rich format**: name · `role · X of N · % of plate` · ingredient `Xg pp · Yg total` · **green Food-cost TOTAL right** (`#c8e840`, small `#9bbf6a` "Food cost" label, total-for-guests not pp, omitted if unpriced) · **gold NEVER on plan rows** (← World, Braai+Events upgrade).

**§4 SHOPPING PAGE (`shoppingView()`):** aisle-grouped · **de-duped** · no per-meal split · tap-to-tick · "N of N remaining / Start again" (← Braai) · each row = item + **buy amount · R** prominent right + grey **"needs Xg"** sub-line only where pack differs (§6.3) · **EVERY row carries a price — a gram-only row with no R is a DEFECT** (wire to the engine, or fill the `PRICE_DB` gap; only a genuinely unpriceable dish omits it — **flag every `PRICE_DB` gap found**) · **two totals**: green **"What the food costs"** (`#c8e840`, exact cook) + gold **"What you'll spend at the shops"** (`#f5c842`, pack-rounded) + **plain reason line** "More than the food because you buy full packs — the extra stays in your kitchen." (← Braai; add gold total to World, add both to Events) · **ONE combined collapsible "About these prices & totals" box at the BOTTOM** (merge Braai "ways to save" + Events "SA retail prices, planning guide only"; a one-line "SA retail prices — planning guide only" may sit atop the list) · share **WhatsApp · Gmail · Checkers60 · PnP · Spar · Print/PDF** (Pro) · "tap items you already have to remove them".

**§5 COST DATA (one engine — wire every section to it):** `PRICE_DB` (`prices.js`, LIVE) → `costRecipe()` / `priceOf()` = cook cost (green); `PACK_DB` (`packs.js`, LIVE, loaded in index.html) = pack-rounded buy cost (gold). Round the need **UP** to the next real pack. **+10% buffer ≠ pack-rounding** (buffer = safety margin on cook cost; gold = real pack sizes; label both so they never read as the same number twice). Status: Braai full two-cost ✓; **World + Events have ZERO `PACK_DB` use — routing them through `planView`/`shoppingView` is what gives them the two-cost block.**

**§6 GATING:** one shared `tierAllows('pro')` gate drives every lock (§7).

*Build order: shared funcs built (`buildPlanData` · `guestStepperCard` · `shoppingView` · `planView`) → WK proof pass → roll to Events → fold Braai onto `buildPlanData` (delete the duplicate cook/buy logic) → recipe-page cosmetic items last.*

---

## 5. INGREDIENT STANDARD
- **Name** = exactly what you buy, matching `PRICE_DB`.
- **Amount** = weight (g/kg) + pack hint; count only for unit-sold items.
- One ingredient per line. No "+" lines. Prep instructions go in the **method**, not the name.
- Display: per-person amount + total, totals in gold `#f5c842`.

---

## 5.5 IMAGE FOLDERS (locked)
**Two folders only — names are case-exact on GitHub, so match them precisely.**
- `Images/Image/` — every recipe/dish photo. Filename = the **exact recipe name** (e.g. `Bobotie.jpg`); `recipePhoto()` builds this path and strips accents to match. **Singular `Image` — already live & working; never rename to plural `Images` or every recipe photo breaks.**
- `Images/Headers/` — every screen **banner**: main-section landings, sub-screens, cultures, countries — all one type. **Filename = the screen's name exactly as the app shows it** (`Boerekos.jpg`, `Cape Malay.jpg`, `France.jpg`) — same habit as recipe photos, so **one rule covers every image in the app: copy the name on screen.** (For main-section titles that are long or contain symbols like `&`, Claude assigns the exact filename when wiring that section.) Folder is capital `H`. All header / `sectionHeader()` code points here.
- There is **no third folder** and **no "main section vs sub-screen" split** — a header is a header. **Recipes and headers are the only two photo types.**

---

## 6. PORTIONS & COSTING

### 6.1 Portion Brain — bone-aware (LOCKED)
Portion (and therefore cost) derives from a recipe's **CUT type**, never a magic number. One source in core.js: `PORTION` (everyday) + `PORTION_BRAAI` (generous braai tier), read via `portionG(cut, braai)`. Bone-in is heavier because **~25–30% is bone you buy but don't eat** (researched: lamb/beef bone is 20–30% of weight).

| cut | everyday `PORTION` (g) | braai `PORTION_BRAAI` (g) |
|---|---|---|
| boneless | 180 | **300** |
| bone-in | 250 | **400** (≈⅓ is bone you buy but don't eat) |
| fish | 160 | **280** |
| shellfish | 180 | **320** |
| veg (main) | 200 | 250 |
| side 150 · dessert 120 · starter 60 · drink 0 | — | — |

**The braai tier was bumped up 12 Jun 2026** — people graze a lot off the grill, especially when drinking. These are generous on purpose.

**Cut-based, never per-meat magic (LOCKED 12 Jun).** `calcMeat()` reads each meat's grams from `braaiBaseG(meat)` → `BRAAI_CUT[id]` → `PORTION_BRAAI`. It does NOT read per-meat `soloG`/`sharedG` or `pcs × gramEach`. So **same cut always lands on the same grams**, and **kebabs / anything "on a stick" are counted as RAW boneless meat — never the whole skewer.** Cost (`braaiMeatCostPP`) reads the same base, so the R and the grams can't disagree. (Old per-meat `soloG`/`sharedG` are now ignored — do not re-wire them.)

**Grazing taper (LOCKED — replaces the old "350g constant" / "100/65/50 pyramid").** Each meat gets an **equal share** (so same cut always matches), but the TOTAL climbs with variety: 1 meat → 100% · 2 → 70% each · 3 → 58% each · 4+ → 50% each (`meatSpreadMult`). Worked: 10 people, 3 boneless mains = **1.7kg each** (174g pp). Solo = 3.0kg (300g pp). Sides taper separately (`sideSpreadMult`). +10% buffer. Appetite toggle Big/Normal/Small multiplies on top. A Profile "smaller braai portions" option scales the braai tier down for light eaters. Drinks per-guest. Excludes Budget/Tiny/Furry/Anchor.

**Meat cut guide (all sections):** slow/potjie → lamb shoulder/neck/shank, pork shoulder, beef chuck/shin/brisket · grill → lamb loin/leg, pork neck, beef rump/sirloin · quick → pork loin, beef rump · roast → leg joints.

### 6.2 COSTING — one engine, one price list (LOCKED)
All cost flows from **`PRICE_DB`** (single source, rand-per-kg / per-each) through the shared **`costRecipe()`** engine in core.js. Never hand-type or freeze a rand. **If a dish can't be priced, hide the number — never guess.** (Reconcile: World's `wkCostRecipe`/`wkPriceLookup` and Events' runtime `costPP` both fold into this one engine.)

### 6.3 TWO-PRICE COSTING (LOCKED — the budget feature depends on it)
Every ingredient has **two numbers answering two questions:**
- **Cook number** — the exact recipe amount (150 g butter). Drives the recipe view, the `≈ R pp` row hook, and per-person cost. **Live now.**
- **Buy number** — what actually goes in the trolley (one 500 g tub). Drives the shopping list and the Budget feature.

Every ingredient is tagged with **one of three buy-types** (`PACK_DB`):
1. **By weight** — buy the grams you need at the per-kg price, **no rounding**. Meat, chicken, fish, loose veg/fruit. Cook number = buy number (no gap). *Most of the list, all of Braai's meat.*
2. **By pack** — sold in fixed sizes; **round UP to the fewest whole packs.** Flour/rice/sugar/pap 1 kg · couscous/lentils 500 g · milk 1 L · butter 500 g · oil 750 ml · tinned tomato per tin · berries per punnet · yogurt 1 kg.
3. **By each** — countable; round up to the next unit/tray. Eggs (tray ladder **6/12/18/30**), cucumber, lemons, a loaf, a garlic bulb.

**Default pack** = smallest standard pack for perishables; common household pack for shelf-stable staples. (Bulk = a Phase-2 Profile toggle "Shop in: smallest / bulk where cheaper", 5 staple categories only — build the data so it slots in, not in v1.)

**Shopping-list display:** the **buy amount is the prominent right-column number**; the recipe "needs Xg" is a small grey sub-line, shown **only where buy differs from need**. e.g. `Cake flour — 1 × 1 kg · R26` with grey `needs 150 g` below.

**Two totals (summary block):** "**What the meal costs**" (exact, per-person from the guest slider) and "**What you'll spend at the shops**" (pack-rounded), with a plain-language reason line between them so the gap never reads as a bug — *"More than the meal because you buy full packs — the extra stays in your kitchen."*

**Pantry group:** a separate "**Pantry — you may already have**" list (spices + tiny-quantity items) that is shown but **NOT counted in the headline total** — this protects the accuracy of the "I've got R100" budget feature. The existing delete-what-you-have mechanism handles "I already have this."

**Data:** `PACK_DB` lives in `packs.js` — a zero-risk data file (like `wk_africa.js`), read by every section's My Plan / shopping list. **Status: LIVE (15 Jun 2026)** — `packs.js` (~128 lines, three buy-types) is pushed and loaded in `index.html` (after `prices.js`), read by `core.js` (`priceOf`/`costRecipe`/`buildPlanData`) + `braai.js`. **Both the cook number (green) AND the pack-rounded buy number (gold "what you'll spend") are real now** — Braai proves it. Sections gain the gold total the moment they route through the shared `planView`/`shoppingView`.

### 6.4 BRAAI ↔ WORLD KITCHEN — one costing model, both sections (LOCKED 11 Jun)
The two most-built sections must do costing **identically**. World Kitchen is currently ahead on shopping; Braai is ahead on the two-total wiring. Bring each up to the other, then keep them in lockstep — and that shared model becomes the template every other section copies.

**State today (from the live screens):**
- **World Kitchen My Plan** already prices every shopping line (`amount · R`), groups by aisle, sums a **shopping total with a +10% buffer** (e.g. `~R848`), and shows per-dish `role · X of N · % of plate · ~R` + `ingredient: g pp · total kg`. It shows **ONE** total only.
- **Braai My Plan** shows the engine-based **meal cost + R pp** and the two-total *structure* (the "shop" total appears once packs create a gap), but its **shopping list shows amounts only — no per-line R, no total.**

**The three locked steps (in order):**
1. **Braai shopping costs** — price every Braai shopping line through the same engine (`costRecipe`/`priceOf`), show `amount · R` per row, group by aisle, and add a **shopping total + 10% buffer**, matching World Kitchen's shopping block exactly.
2. **Reconcile** — Braai and World Kitchen My Plan use the **same plan-row format and the same shopping block**. One shared renderer is the goal so they can never drift (the World Kitchen richness — `role · X of N · % of plate · ~R`, ingredient `g pp · total kg` — is the reference; Braai adopts it).
3. **Two-cost in World Kitchen** — once Braai's shopping is reconciled, add the **two totals** ("What the meal costs" vs "What you'll spend at the shops" + reason line, §6.3) to **World Kitchen too**. The two-price method is **app-wide, not Braai-only** — every section's My Plan ends in the same two-total shopping block.

The +10% buffer and the pack-rounded "shop" total are **separate**: the buffer is a safety margin on the cook cost; the shop total is pack-rounding (needs `packs.js`). Both can show; keep them clearly labelled so they don't read as the same number twice.

---

## 7. FREE vs PRO (locked 15 Jun 2026 — cost is PRO, not free)
Subscription-only · **Pro R50/mo** · **NO third-party ads, ever.**
- **FREE gets:** all recipes (browse + cook/view) · the **+/− portion scaler** · **1 dietary restriction** · **calories shown** (the number, always) · **Anchor Ingredient**. **NO cost figures · NO My Plan · NO shopping list.**
- **PRO gets everything else, and specifically the money + planning layer:** **all cost figures** (per-row `≈ R pp`, the qtyBox cost line, plan & shopping totals) · **My Plan** (`planView`) · **shopping list** (`shoppingView`) · the **nutrition breakdown** (the macro/detail toggle — *not* the kcal number, which is free) · Budget / Mood / 4-Ingredient / Weekly Planner / downloads / unlimited saves / full dietary / AI Chef / pantry scan / leftovers / meal-stretch / Tiny Tummies / Furry Friends + monthly letter + community + magazine.
- **Where the line falls inside a shared component (so gating is uniform, not per-section):**
  - **`qtyBox()`** — **scaling is free; the cost line is Pro/peekable.** The kcal figure stays visible to everyone.
  - **The §3 row** — name + feel line + kcal are free; the **`≈ R pp` cost figure is Pro/peekable.**
  - **`planView()` and `shoppingView()` are whole Pro pages** (peekable lock for free). Both take the same `proGated` / peekable flag.
  - **Calories always display for everyone** (free included) — kcal in the qtyBox info strip and in plan totals is **always-on, never gated.** Only the deeper nutrition *breakdown* is Pro.
- Locks are **peekable** (free users see the shape, blurred/teased, with an unlock prompt); **never move the line.**

---

## 8. THE CODE LOCK (how the standard is *enforced*, not just written)
1. **Design tokens** — a single `THEME` constant block (colours + sizes) at the top of `core.js`; sections reference it instead of hardcoding hex. *(Migration: incremental.)*
2. **Shared component functions in `core.js`** — built once, called everywhere. **The whole recipe page renders from these — a section never hand-writes chrome.**
   - Header/qty: `sectionHeader()` ✅ (renders the white **My Plan overlay** top-right when passed `myPlan:{count,onclick}` — see §4.1) · `qtyBox()` ✅ · `recipePhoto()` ✅
   - Recipe-page chrome (Standard §4b): `metaStrip()` ✅ · `portionHowBox()` ✅ · `recipeBox()` ✅ (titled card shell) · `ingredientsBox()` + `ingredientRow()` ✅ · `methodBox()` + `methodStep()` ✅ · `goesWellBox()` ✅ · `recipeActions()` ✅ · `recipeNav()` ✅
   - Lists: `recipeRow()` ✅ (§3 row)
   - **Whole-page assembler: `recipePage()` ✅** — lays out the ENTIRE recipe page (wrapper, max-width, padding, block order, sizing). Sections feed content only; layout cannot differ. **This is the page every other section is compared against.** Two fixed content slots: `notesHTML` (after ingredients) and `extrasHTML` (after Goes-Well) for section-specific blocks (SA swaps, cost, tip, Braai coal guide) — always in the same place.
   - **`howItWorks()` ✅ built** (§4a.2 — the How-it-works + optional guest-stepper box; `guestBar()` delegates to it, so there's one source)
   - **`buildPlanData()` ✅ built** (§6.4 — the ONE plan-data builder: price → de-dupe → aisle → pack-round → two-price `items[]` + per-dish cost + plan totals; sections feed raw dishes only, so money can't drift)
   - **`guestStepperCard()` ✅ built** (§4c — the one guest stepper card, `+/−` matched to `qtyBox`)
   - **`shoppingView()` ✅ built** (§4d — the two-cost shopping block, Pro/peekable) · **`planView()` ✅ built** (§4c whole plan page; calls `buildPlanData`, embeds `shoppingView`)
   - **routing status:** WK proof pass next (route `wkMyPlanView` → `planView`); then Events; then fold Braai onto `buildPlanData` and delete its duplicate cook/buy logic
   - still to build: `bottomNav()` · `costStrip()`
   - **What "the same" means:** every section's page is these identical shells in the §4b order — same boxes, arrows, info layout, fonts, colours, sizes. Only the *content* inside differs (the actual ingredients/method, and genuinely section-specific blocks like Braai's coal guide or WK's SA-swaps, which sit in the same `recipeBox()` shell). Mood is the one colour exception.
3. Once a screen uses the shared function, it **cannot drift** — there's only one definition.

---

## 9. STABILITY RULES (never skip)
- Live site first · `node --check` before every push · surgical edits · **one file at a time**.
- **`core.js` is SACRED:** back up first, check `wc -l` before/after, never truncate.
- Fetch files via `curl -sL raw.githubusercontent.com/tinavdw/tinza/main/sections/<file>.js` (GitHub API rate-limits — don't use). Cache-bust with `?cb=…`.
- Push via GitHub Desktop only. LF→CRLF warning is harmless.
- **Build on the template (shared functions). Never rebuild from new.**

---

## 10. ROADMAP (the order we work — checked off as done)
**Phase 1 — TIDY (make every page look & function the same). THE FINISH-SAMENESS SEQUENCE (LOCKED 14 Jun) — do these steps IN ORDER, then add recipes.**
*Why this order: sameness is achieved by rendering every section through the SHARED `core.js` functions (§8) — build once, call everywhere. That is also how "every page has every feature" happens, and the only thing that stops drift. So we finish by getting every section onto the shared renderers, biggest page first, and leave the cosmetic pass for last so new content lands already-uniform.*

- **Step 1 — FUNCTION sameness (recipe pages via the universal opener).** Migrate every remaining section onto the shared `recipePage()` opener (`RECIPE_SOURCES` / `RECIPE_BUILDERS`). Each migration auto-delivers the WHOLE recipe page + every feature (green `qtyBox`, cost box, cook mode, timers) to that section.
  - Done ✅: Braai (meat/side), World Kitchen, Health, Events (buffet dishes + finger foods).
  - [ ] **Spice ← NEXT STEP** (also unlocks the cross-links — pie→Béchamel, salad→dressing, pesto)
  - [ ] Celebration Cakes (its own `openCakeRecipe`/`activeCake` opener)
  - [ ] Kiddies recipe pages (`kiddies.js`)
  - [ ] Meals / Feed My Family
- **Step 2 — CROSS-LINKS** (unlocked once Spice is on the opener): salad→dressing, pie→Béchamel, pesto→Spice, filled roosterkoek→base.
- **Step 3 — ONE shared PLAN-ROW + SHOPPING renderer (§4c / §6.4).** Build once, roll to Braai / World / Events / all so they can never drift. Green food-cost plan rows + two-total structure now; gold "buy" total switches on when `packs.js` is verified. *(Fixes the Events plan-row drift — inline → §4c cards.)*
- **Step 4 — COSMETIC sameness sweep (LAST).** Done once at the end so new recipes don't need re-polishing:
  - [ ] Photo headers all 200px (World Kitchen recipe 190; Health Hub mixed)
  - [ ] My Plan WHITE OVERLAY pill on every section (§4.1) — replace any grid tiles / coloured pills (e.g. Events buffet)
  - [ ] Kill all gliding scales → wrapped boxes (meals, health, budget, spice)
  - [ ] Remove per-screen bottom search → ONE universal search above the nav

**Phase 2 — FILL (content):**
- [ ] World Kitchen — add recipes
- [ ] Spice — add recipes
- [ ] Feed My Family — finish (+ open-bug trace)
- [ ] Global Braai — add recipes
- [ ] Budget — finish (role-slot library + two-price costing) *(retrieve full plan from past chat when we start)*
- [ ] Anchor Ingredient — finish
- [ ] Beverage section
- [ ] 4 Ingredients

**Phase 3 — SHELL (the wrapper):**
- [ ] Weekly Planner
- [ ] Opening pages + Free/Pro + payments + toggles
- [ ] Community (build + how it works)
- [ ] Profile page

---
*End of standard. This file is read first, every session. Change it on purpose, or not at all.*
