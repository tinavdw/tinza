# TINZA — THE ONE TEMPLATE
### Best of Braai + Events + World, combined. Build the shared `core.js` functions to THIS.
*Locked 15 Jun 2026. Where the three sections disagree, this is the tiebreak. Gating: **cost = Pro/peekable; the +/− scaler + calories = FREE** (§7). packs.js + prices.js are BOTH live.*

Each line is tagged `← [source]` (the section whose version we keep) and notes what is **added**, **dropped**, or **fixed**.

---

## 0 · ONE LOOK — same size, same colour, readable on a phone under a tree
*Applies to every element below. The reason for the shared functions: no section can render a rogue size or colour.*
- **One warm Spice palette** (except Mood), **one global sans font** — everywhere.
- **Locked type sizes:** title 22 · name 16 · feel line / body 16 · sub-line 14 · labels 13. **Nothing smaller than 13.**
- **Locked colours:** bg `#0f0e0c` · card `#161210` · names `#f5e8cc` · body `#f0ebe1` · secondary `#e0d4b8` · **gold `#f5c842`** (shopping / "what you'll spend") · **green `#c8e840`** (food cost) · accent `#c06020`. High contrast on near-black.
- **Mobile-first:** single column, wraps to phone width, **NO horizontal scroll anywhere.** Big tap targets — 34px `−/+` circles, tick boxes, pills.
- **Acceptance test:** if it isn't clearly readable on your phone, at arm's length, in dappled outdoor light — the size or contrast is wrong. Fix it before it ships.

---

## 1 · SECTION LANDING / CATEGORY PAGES
- 200px photo header, title + search overlaid; **My Plan = white pill, top-right inside the photo** (never a box below). ← all
- Wrapped category grid (no horizontal scroll), selected-count badge on each category. ← all
- **"CATEGORY — N OPTIONS" count header** on every category list (e.g. `BEEF — 14 OPTIONS`). ← Braai · **add everywhere**
- **"X selected · N guests · Yg pp each"** subtitle on the category screen. ← Events buffet · **add to Braai + all**
- **"How portion size works"** collapsible on every section. ← Braai · **ADD to Events (missing) + all**
- Row (§3): checkbox + emoji + NAME + one feel line + **≈ R pp** *(Pro/peekable)* + bare `›` chevron. Name, feel line, row = free.

## 2 · RECIPE PAGE
- **Bottom of every recipe/category page = Events' bottom**: `← [Feature]` / `Home` buttons + category grid (incl. My Plan) + **"See my Plan & Shopping List →"** button. ← Events · **Braai + all adopt**
- Under the recipe **name**: **"Xg pp · ~Ry/pp"** line. ← Events · **add to Braai** (cost-only today). Grams free, ~R Pro/peekable.
- **Green qty box = the Events box** (target): big total + per-person + `− guests +` (live scale) + **Food cost line `R__ pp · R__ total`** + the "for costing only — not the same as the shop" disclaimer. ← Events · **all match**
  - **Remove "Family Mix"** from the Braai box.
  - **Live on `−/+`:** grams AND cost recompute instantly as guests change (total, per-person, food cost pp + total). Scaling is FREE; the Food-cost line is Pro/peekable; kcal always shown.
  - **BUG:** Braai box stepper is stuck at 320g (`+/−` dead) → fixes itself when Braai routes through the shared `qtyBox`.
- **Scaling explained ONCE.** Keep the line under the recipe name; **remove** the "smart scaling" banner above the dishes AND the below-photo repeat; replace them with the "How portions work" collapsible. ← de-dupe (too much today)
- **Ingredients:** every line shows **"Xg pp · Yg Total"** — per-person AND total, the word "Total" present. ← Events format · **Braai adopts**
  - **Concrete amounts only.** Every amount is a real scaled number for the chosen guests (g / kg / ml / count). **NEVER a ratio** — no "2 per 5 people", "2 tbsp per 100g", "1 per 500ml water". A ratio can't be scaled, costed, or pack-rounded — resolve it to the actual total. **Fix these everywhere they appear.**
- **Timers + cook mode:** every recipe has method-step **timers** (screen stays on) and a **"Start Cooking →"** button (big-text, steps-only cook mode). Delivered automatically by the shared `recipePage()` — every migrated section gets them. ← universal

## 3 · PLAN PAGE — `planView()`
- **Header:** 200px photo + white **My Plan (N)** pill ← Events · back button names the feature **"← Braai / Buffet / Finger Foods"** ← Braai (**never "Overview"**) · title **"Your [Feature] Plan"** · **one-liner** "Everything you need, costed and ready" ← Braai (**add to Events**) · guests count ← Events.
- **Summary block** under the dishes, before the shopping list: **Total dishes · Cost per person · Estimated total · kcal pp** (cost Pro/peekable, kcal always). ← Events · **add to Braai**
- **Plan dish-rows = World's rich format:** name · `role · X of N · % of plate` · ingredient `Xg pp · Yg total` · **green Food-cost TOTAL on the right** (`#c8e840`, small `#9bbf6a` "Food cost" label, total-for-guests NOT per person, omitted if unpriced). **Gold never appears on plan rows.** ← World · **Braai + Events upgrade to this**

## 4 · SHOPPING PAGE — `shoppingView()` (the two-cost block)
- Aisle-grouped, **de-duped**, no per-meal split, tap-to-tick, "N of N remaining / Start again". ← Braai
- Each row: item + **buy amount · R** prominent on the right + grey **"needs Xg"** sub-line *only where the pack differs from the need* (§6.3). ← Braai/World · **add per-line R to Events** (amounts-only today)
  - **Every row carries a price.** A gram-only row with no R is a **defect**: either the section isn't wired to the cost engine (fix by routing it through the shared builder) or the ingredient is missing from `PRICE_DB` (fill the gap). Only omit the number for a genuinely unpriceable dish (§6.2) — never as the norm. **Flag any `PRICE_DB` gaps found so Tina can fill them.**
- **Two totals:**
  - **green "What the food costs"** (`#c8e840`) — exact cook cost from the guest slider
  - **gold "What you'll spend at the shops"** (`#f5c842`) — pack-rounded
  - **plain reason line** between them — *"More than the food because you buy full packs — the extra stays in your kitchen."*
  - ← Braai (reference) · **add the gold total to World** (one-total today) · **add both to Events** (none today)
- **ONE combined collapsible "About these prices & totals" box — at the BOTTOM, with the totals.** Merge Braai's "ways to save" text + Events' "SA retail prices, planning guide only" into a single box, same wording everywhere. (A one-line "SA retail prices — planning guide only" may sit atop the list; the full explanation + ways-to-save folds into the bottom box.) ← combine · **drop the duplicate** (top in Events, bottom in Braai today)
- Share: **WhatsApp · Gmail · Checkers60 · PnP · Spar · Print / Save PDF** (Pro). ← full §4d set
- "Tap items you already have to remove them" toggle. ← both

## 5 · THE COST DATA (live engine — wire every section to it)
- **One engine.** `PRICE_DB` (`prices.js`, 1056 lines, **LIVE**) → `costRecipe()` / `priceOf()` = cook cost (green). `PACK_DB` (`packs.js`, 141 lines, **LIVE**, loaded in index.html) = pack-rounded buy cost (gold). Both pushed.
- Cook number drives the recipe view, the `≈ R pp` row, per-person cost. Buy number drives shopping + Budget. Round the need **UP** to the next real pack (ladder / single size / each / loose / by-weight).
- **+10% buffer ≠ pack-rounding.** The buffer is a safety margin on the cook cost; the gold total is real pack sizes. Both may show — label clearly so they never read as the same number twice.
- **Status:** Braai reads the engine (full two-cost ✓). **World Kitchen + Events have ZERO `PACK_DB` references — not wired.** Routing them through the shared `planView`/`shoppingView` (which read the engine) is what gives them the two-cost block. The WK proof pass does exactly this.
- **Fix the Standard:** §6.3 still says packs.js is "drafted, NOT pushed" — that line is **stale**. packs.js is live; the gold total is real (Braai proves it).

## 6 · GATING (cost = Pro, §7)
- **FREE:** all recipes (browse + cook/view) · the `+/−` scaler · 1 dietary restriction · **calories (the number, always)** · Anchor Ingredient.
- **PRO / peekable:** all cost figures (`≈ R pp`, the green-box cost line, plan + shopping totals) · My Plan (`planView`) · shopping (`shoppingView`) · the nutrition breakdown (macros — NOT the kcal number).
- One shared `tierAllows('pro')` gate drives every lock.

---

### Build order (unchanged)
Shared funcs already built (buildPlanData · guestStepperCard · shoppingView · planView). → **WK proof pass** (route `wkMyPlanView` through `planView`, prove it matches this spec) → roll to Events → fold Braai onto `buildPlanData` and delete the duplicate cook/buy logic → cosmetic sweep (recipe-page items in §1–2) last.
