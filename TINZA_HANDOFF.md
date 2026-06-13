# TINZA — Session Handoff

_Last regenerated: 13 Jun 2026 (pricing-coverage overhaul + braai breads + 13 corrections + roadmap locked)_

## ✅ Done this session (`node --check` ✓ on every file)
- **PRICING COVERAGE OVERHAUL (prices.js + core.js) — 78% → 91.5%.** Added ~28 missing `PRICE_DB` keys from your 4 price lists + yeast. Added ~40 `PRICE_ALIAS` entries **plus a prep-strip in `priceOf()`** (strips fresh/dried/ground/chopped/sliced/grated… then retries the match) so word-mismatches resolve: oregano→origanum, zucchini→baby marrow, plain flour→cake flour, spanspek→melon, lamb chops→lamb braai chops, etc. **Rule LOCKED: most-expensive wins on any duplicate price.** Parmesan: **block R500/kg** as an ingredient (pesto/cooked), **grated R100 per 150g** as a sprinkle/topping. `PRICE_AUDIT.md` written — what changed · the short still-unpriced-for-you list · the volatile watch-list · the monthly price-check mechanism.
- **BRAAI BREADS (data.js) — 5 SA breads added to Side Dishes → 🍞 Breads.** Roosterkoek **R4.77pp** · Roosterkoek Garlic-Cheese **R16.05** · Roosterkoek Boerewors **R20.62** · Cheese-Corn Potbrood **R19.14** · Braai Flatbreads **R4.76**. Every ingredient prices cleanly. Filled breads reference the base in their method but carry their **full buyables** so they cost on their own (no broken sub-recipe). Flatbread now lives in Braai; the Feed Your Family flatbread stays as the test recipe.
- **13 of 17 CORRECTIONS (data.js · eventsData.js · buffet.js · kiddies.js):** #1 volcano cake full two-tier method · #2 marshmallow gentle-melt (bain-marie) · #5 milk chocolate (kids) · **#6 "icing butter/milk" → plain butter/milk across all 12 cakes** (one renderer fix in kiddies.js; real "icing sugar" kept) · #9 whole beef brisket · #10 Hardbody → **Slow-Roasted Lemon & Garlic Chicken** · #11 simple peri-peri method + label "Chicken livers needed" · #12 Melon & Prosciutto rewrite (prosciutto = MAIN) + double-comma bug fixed + label "Prosciutto needed" · #13 shallots→onions (brinjal + mussels) + label "Mussels needed" · #14 basil-pesto make-your-own method · #15 Advocaat (Dutch Egg Liqueur) · #16 pumpkin-pie SA Tennis-biscuit base swap.

## 📤 Push these (one at a time, GitHub Desktop)
`prices.js` · `core.js` · `data.js` · `eventsData.js` · `buffet.js` · `kiddies.js`  (+ `PRICE_AUDIT.md` and this `TINZA_HANDOFF.md` as repo references). Push any not already pushed.

## ⏳ Waiting on you (4 corrections left)
- **#7 ham** — which recipe? There are ~6 ham recipes (best guess = the Ham & Mustard cocktail sandwich, the dry one). Then: "12 slices (≈Xg)" + add a little mayonnaise.
- **#3 · #4 · #8** — need screenshots 1/2/3 (or paste the recipe text) and they're quick.

## Next up — LOCKED ORDER (your call this session)
1. **Finish the 4 corrections** above.
2. **Wire Feed Your Family's recipe-detail page** (the shared render). FOUNDATION — the same build unlocks the flatbread's full page and every cross-link.
3. **Cross-links** — salad → dressing, filled roosterkoek → base recipe, pesto → Spice.
4. **Fill Feed Your Family** with real recipes (they plug straight into the render + costing).
5. **Visual sameness sweep across ALL sections** — COSMETIC, do this **LAST** (so new content doesn't land outside a locked look and force re-polishing — the exact loop that's been frustrating).

**Principle: shared FUNCTION now → real CONTENT next → visual SAMENESS last.**

## Parked (real, but after the spine)
- **Gold "buy" side / two-cost:** `PACK_DB` real pack-prices so the gold till-total is exact (green food cost is already right). Herbs/spices + bacon (200g ~R45) into a "Pantry — you may already have" group shown but NOT in the headline total. Sides + non-meat green-box cost strip. Then port the green plan-row + green box to World Kitchen and §6.4 (one shared Braai+WK plan/shopping renderer).
- **World Kitchen:** warm-palette pass (needs braai.js + core.js) · Asia spice exact-definition pass · India gaps (Butter Chicken, lamb/goat) · the two "mixed meat" → named-cut edits (wk_africa Gango, wk_southafrica Braaivleis) if not yet pushed.
- `howThisFeels` soul pass (all sections — deliberately last) · monthly price check · Budget engine + Global Search = separate solo sessions.

## Watch list (don't lose these)
- **Kudu price key:** confirm live Braai kudu = **R195/kg** (top-level `kudu`), not beef-fillet's price.
- **Two totals at the shopping-list bottom** — "what the food costs" (green) vs "what you'll spend" (gold); the +10% buffer must not read as the same gap twice. Settle the wording before building.

## Locked decisions (still in force)
- **Most-expensive wins** on duplicate prices. **Never guess a price** — unresolved name → null → the figure is hidden.
- **Portion model (Standard v1.8 §6.1):** cut-based `braaiBaseG`; kebabs = raw boneless; boneless 300 / bone-in 400 / fish 280 / shellfish 320; grazing taper 100/70/58/50.
- **Plan dish-row (Standard §4c):** name + grams total + GREEN per-dish food cost; gold = shopping list only; one shared renderer (§6.4).
- **Green-box note:** "This food cost is for costing only — it's not the same as the cost at the grocery store."
- ONE shared `qtyBox()` · ONE warm Spice palette (except Mood) · sameness lock (200px headers, wrapped grids, one universal search).

## START HERE next conversation
1. **Curl `TINZA_STANDARD.md` (v1.8) and this `TINZA_HANDOFF.md` from repo root BEFORE touching code.** Standard wins over chat.
2. Start at **tinza.netlify.app** — confirm what's live after pushing this session's files.
3. Then work Next-up in the **LOCKED order**: finish corrections → Feed Your Family page → cross-links → fill recipes → visual sameness LAST.
4. Live: tinza.netlify.app · repo tinavdw/tinza · fetch via curl from raw.githubusercontent.com.
