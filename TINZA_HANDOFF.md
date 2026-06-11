# TINZA — Session Handoff

## ✅ Done this session (pushed/live unless noted)
- **Dead World Kitchen cleanup** — worldkitchen.js 2276→1035; coordinated core.js fix (removed orphaned initWKMap call). LIVE.
- **§6.4 Step 1 — Braai shopping list costed** — per-line amount·R, aisle-grouped, +10% buffer; aisle fixes in core.js. LIVE.
- **packs.js rebuilt + make-vs-buy two-cost** — PACK_DB ladder model; cookCost (exact) + buy fields per line. LIVE.
- **Ladder model locked** — round up to next real pack; egg ladder fixed 6/12/18/24; loose = money-saving TIP not default. LIVE.
- **⭐ NEW — Braai shopping list simplified (grandma layout)** — STAGED, ready to push:
  - Rows = ONE number each: name (+ "loose" tag) left, buy amount · R gold right. Removed per-row "needs Xg" + per-row loose tip.
  - Removed top cost box. Two plain totals now at FOOT of list: green **What the food costs** (sums real cook cost, ~honest ≈R480) + gold **What you'll spend** (pack-rounded ≈R664) + one plain sentence.
  - Collapsible "About these totals & ways to save" holds: the two explanations + a gathered **💡 Buy loose to save** list + estimate note.
  - braai.js 388→386, node --check ✓. core.js unchanged.

## 🔜 Next up
1. **Push braai.js** (GitHub Desktop) → confirm on live: simple rows, two foot totals, collapsible with loose tips.
2. **packs.js fruit/veg data pass** (Tina leads) — add `punnet` (berries ≈125g) + `loaf` (bread ≈700g; fix per-loaf R0 bug) buy-types; Claude wires the buy-types.
3. **§6.4 Step 3** — mirror the same simple two-cost shopping layout into World Kitchen (wkBuildPlanShopping / wkMyPlanView).
4. **§6.4 Step 2** — lift ONE shared plan+shopping renderer into core.js so Braai & WK can't drift.

## 📋 Backlog (later)
- Staples floor: smallest-covering vs 2kg floor (one-line flip); loose-tip trigger (<60% of rung) tunable.
- "Pantry — you may already have" group (butter/cheese/spices) to tame the food→spend gap (Standard §6.3).
- Pro "show detail" toggle = the per-row real cost (30g Butter — R5) for those who want it.
- Phase-1 uniformity: flatten WK region accents to one warm palette; roll sectionHeader()+qtyBox() across meals→events/buffet/spice/budget→kiddies→health; shared recipeRow() in core; global sans flip in index.html.

## 🔒 Locked decisions (this session)
- **Colour convention (LOCKED):** yellow/gold `#f5c842` = SHOPPING (buy amount + price on every row, and the "What you'll spend" total). Green `#c8e840`/`#9bbf6a` = COST (the "What the food costs" total). The buy amount stays on every shopping-list row.
- Shopping list rows: ONE number (what to buy + price). Real-cost-per-row = future Pro toggle, NOT default.
- Two totals in plain words at foot of list. Food cost = sum of exact cook cost (reconciles honestly). Spend = pack-rounded.
- Grandma/child test wins over feature richness — every time.

## ▶️ START HERE next conversation
1. Confirm braai.js pushed & live looks right (simple rows, gold buy / green food totals, loose tips in collapsible).
2. Then: §6.4 Step 3 — copy this same simple two-cost layout into World Kitchen, same colours.
3. Live site: tinza.netlify.app · repo tinavdw/tinza · fetch files via curl from raw.githubusercontent.com.
