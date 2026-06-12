# TINZA — THE STANDARD
### The single source of truth. This file is the law. Read it FIRST, every session.
*Version 1.7 · updated 12 Jun 2026 (**plan dish-rows now carry a green per-dish food-cost TOTAL on the right §4c** — grams under name, green cost on right, gold reserved for shopping; Braai wired first, WK to follow via shared renderer). Earlier: Image Folders; sectionHeader; My Plan overlay §4.1; row spec §3; two-price costing §6.2–6.3; Braai↔World Kitchen one costing model §6.4; bone-aware portions §6.1. When a rule changes, edit THIS file and commit it — never re-decide in chat.*

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
- The free hook = real cooking value + **cost-per-person on every row**. The value is felt before the paywall.

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
`[checkbox] [emoji] NAME` (`#f5e8cc`, 16, bold) + **ONE feel line** (`#e0d4b8`, 14, upright) + **≈ R__ pp** (`#f5c842`, 13 bold — shown ONLY when the dish is priced; the free hook) + a bare **`›`** chevron far right (`#f5c842`, 26px, no "Recipe" word).
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
3. **THE GREEN QTY BOX — directly under the name** (shared `qtyBox()`): big total + per-person inside, `− guests +` same row, **scales live**. This is the ONLY size box on the page. Its optional thin info strip carries the useful bits — **cost p/p · total · kcal p/p** — where the data exists. One box, doing the work of the old three.
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
| boneless | 180 | 250 |
| bone-in | 250 | 325 |
| fish | 160 | 200 |
| shellfish | 180 | 250 |
| veg (main) | 200 | 250 |
| side 150 · dessert 120 · starter 60 · drink 0 | — | — |

**Every recipe carries its `cut`** so portion + cost stay consistent everywhere (Braai uses `BRAAI_CUT` map; other sections tag per recipe as they're touched; **World Braai is built bone-aware from the start**). Spread at plan level (mains 100/65/50%, sides taper to 50%, floors stop tiny portions). +10% buffer. Appetite toggle Big/Normal/Small. A Profile "smaller braai portions" option scales the braai tier down for light eaters. Drinks per-guest. Excludes Budget/Tiny/Furry/Anchor.

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

**Data:** `PACK_DB` lives in `packs.js` — a zero-risk data file (like `wk_africa.js`), read by every section's My Plan / shopping list. **Status: drafted (~108 lines, three buy-types) but NOT pushed; pending a Checkers price-verification pass (`tinza_pack_sizes.xlsx`) before it goes live.** Until then the buy-number stays off; the cook number (incl. all weight items) is honest and live.

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

## 7. FREE vs PRO (locked)
Subscription-only · **Pro R99/mo** · **NO third-party ads, ever.**
- **FREE:** browse + cook the everyday sections, scale portions, **cost p/p on every row** (the hook), Anchor capped ~3/day, share 1 recipe, save a few, allergen filters + 1 diet style. **NO plans, NO shopping list.**
- **PRO:** everything else — Budget / Mood / 4-Ingredient / Weekly Planner / build plans / shopping lists / downloads / unlimited saves + full dietary / AI Chef / pantry scan / leftovers / meal-stretch / nutrition / Tiny Tummies / Furry Friends + monthly letter + community + magazine.
- Locks are peekable; never move the line.

---

## 8. THE CODE LOCK (how the standard is *enforced*, not just written)
1. **Design tokens** — a single `THEME` constant block (colours + sizes) at the top of `core.js`; sections reference it instead of hardcoding hex. *(Migration: incremental.)*
2. **Shared component functions in `core.js`** — built once, called everywhere. **The whole recipe page renders from these — a section never hand-writes chrome.**
   - Header/qty: `sectionHeader()` ✅ (renders the white **My Plan overlay** top-right when passed `myPlan:{count,onclick}` — see §4.1) · `qtyBox()` ✅ · `recipePhoto()` ✅
   - Recipe-page chrome (Standard §4b): `metaStrip()` ✅ · `portionHowBox()` ✅ · `recipeBox()` ✅ (titled card shell) · `ingredientsBox()` + `ingredientRow()` ✅ · `methodBox()` + `methodStep()` ✅ · `goesWellBox()` ✅ · `recipeActions()` ✅ · `recipeNav()` ✅
   - Lists: `recipeRow()` ✅ (§3 row)
   - **Whole-page assembler: `recipePage()` ✅** — lays out the ENTIRE recipe page (wrapper, max-width, padding, block order, sizing). Sections feed content only; layout cannot differ. **This is the page every other section is compared against.** Two fixed content slots: `notesHTML` (after ingredients) and `extrasHTML` (after Goes-Well) for section-specific blocks (SA swaps, cost, tip, Braai coal guide) — always in the same place.
   - still to build: `howItWorks()` · `bottomNav()` · `costStrip()`
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
**Phase 1 — TIDY (make every page look & function the same):**
- [ ] Green `qtyBox()` rolled across ALL sections (started: Braai sides ✅)
- [ ] Photo headers all 200px (fix World Kitchen recipe 190; Health Hub mixed)
- [ ] Kill all gliding scales → wrapped boxes (meals, health, budget, spice)
- [ ] Remove per-screen bottom search (meals) → universal search above nav

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
