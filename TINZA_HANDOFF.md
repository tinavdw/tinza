# TINZA — Session Handoff

_Last regenerated: 12 Jun 2026 (costing-fixes session)_

## ✅ Done this session (rebuilt clean, ready to push)
On resume the live repo still showed PRE-FIX files (stale GitHub raw cache or an older set was pushed), so one clean set of 4 files was regenerated with every fix locked in. All `node --check` ✓.

- **prices.js — price gaps filled.** Added top-level keys so name-matching works: `brisket` 130, `blue cheese` 400, `jam` 50, `balsamic glaze` 360, `braai spice`/`braai spice blend` 225, `crushed chilli spice` 868. Added `kudu`/`kudu fillet` **195** (Mike's Mouse R195/kg — was only inside packed objects, no top-level key). Corrected `lemon`/`lemon_each` R9 → **R8**.
- **core.js — lemon-shows-R0 bug fixed.** `priceOf()` now detects any `<name>_each` key right after the eggs line and prices per **count**, not weight. Generalises to all unit-sold items. Verified: lemon/lemons → count R8; brisket/chilli/jam → weight; kudu fillet → weight R195.
- **data.js — three edits.** Köfte ×2: "Red pepper flakes (pul biber)" → "Crushed Chilli Spice" (SA replacement). Stokbrood: shopping line "Jam or cheese" → "Jam" (single priceable buy item); ingredient line keeps cheddar as a swap suggestion only.
- **braai.js — tick-bug fixed.** In braaiStep4 shopping loop, both totals were summed BEFORE checking the tick, so ticking never dropped the price. Now skips checked items for cookTotal AND buyTotal.

## 🔜 Next up
1. **Push 4 files** (GitHub Desktop) in order: **prices.js → core.js → data.js → braai.js**. Then confirm on live: blank Braai price lines show numbers, lemons priced (not R0), kudu fillet prices, ticking an item lowers the total.
2. **Green food-cost strip into shared `qtyBox()`** in core.js, with the "this food cost is for costing only — not the same as the cost at the grocery store" note. (First job — top of RECIPE DETAIL lock.)
3. **WK tick-bug fix** — mirror braai.js skip-checked logic into wkBuildPlanShopping / wkMyPlanView.
4. **§6.4 Step 3** — copy the simple two-cost shopping layout into World Kitchen, same gold/green colours, with the reason line.
5. **§6.4 Step 2** — lift ONE shared plan+shopping renderer into core.js so Braai & WK can't drift.
6. **packs.js fruit/veg pass** (Tina leads) — add `punnet` (berries ≈125g) + `loaf` (bread ≈700g) buy-types; add blue cheese pack size (currently shows raw 150g need).
7. **Then:** make Braai "look like World" (visual parity), after costing is settled.

## 📋 Backlog (later)
- "Pantry — you may already have" group (butter/cheese/spices) to tame the food→spend gap.
- Pro "show detail" toggle = the per-row real cost (30g Butter — R5) for those who want it.
- Phase-1 uniformity sweep: flatten WK region accents to one warm palette; roll sectionHeader()+qtyBox() across all sections; shared recipeRow() in core; global sans flip in index.html.

## 🔒 Locked decisions
- **Colour convention (LOCKED):** gold/yellow `#f5c842` = SHOPPING (buy amount + price per row, "What you'll spend" total). Green `#c8e840`/`#9bbf6a` = COST ("What the food costs" total). Plan dish-rows show shopping total only; food cost goes in the green qtyBox.
- **Green-box note wording (LOCKED):** "This food cost is for costing only — it's not the same as the cost at the grocery store."
- Shopping list rows: ONE number (what to buy + price). Real-cost-per-row = future Pro toggle, NOT default.
- Ingredient standard: name = what you buy (matches PRICE_DB); one ingredient per line, no "+" lines; prep goes in method, not the name.
- Never guess a price — an unresolved name returns null and the caller hides the figure.

## ▶️ START HERE next conversation
1. Curl both `TINZA_STANDARD.md` and this `TINZA_HANDOFF.md` from repo root BEFORE touching code. Standard takes precedence over chat.
2. Confirm the 4 files pushed & live looks right (prices fill in, lemon/kudu priced, ticking drops totals).
3. Then: green food-cost strip into qtyBox(), then WK tick-bug + two-cost layout.
4. Live site: tinza.netlify.app · repo tinavdw/tinza · fetch files via curl from raw.githubusercontent.com.
