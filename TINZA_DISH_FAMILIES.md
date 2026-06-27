# TINZA DISH FAMILIES (living reference)
*The "one base, many ways, one photo" program. Turns dull/duplicated recipes into premium families with depth AND breadth — and shares photos to cut the shoot backlog. Pairs with TINZA_RECIPE_DEPTH_STANDARD.md.*

## The model (LOCKED — Tina's call)
**Keep each cultural entry in its country section, share ONE base + photo, cross-link.** World Kitchen stays browsable by country; we don't merge mandazi out of Kenya. We just stop treating cousins as strangers.

## Three mechanisms (they build differently)
0. **`versions` selector — ALTERNATE FULL VERSIONS of a hero recipe (Tina's extension).** One recipe, several complete versions; the DEFAULT is the deepened wow version. **Versions = serving different PEOPLE from one recipe:**
   - ⚡ Quick → the one in a hurry · 🏆 Classic / ⭐ Tinza's Best → the connoisseur · 🌱 Vegetarian → the dietary need · 💰 Budget → the cost-conscious · and STYLE axes too (🎏 old-country vs ✨ trendy for fish & chips).
   - **À LA CARTE:** each recipe declares only the versions that make sense for IT — never force all of them (that's padding, breaks the depth standard). Spag bol → Best/Quick/Veg/Classic. Fish & chips → Best/Quick/Budget/old-country/trendy.
   - **💰 Budget is the secret weapon:** "budget" is real here because the costing engine proves it — swap to a cheaper cut, stretch with veg/starch, and the green/gold price visibly drops on screen. Only Tinza can show the saving. Ties straight to the Rand-costing differentiator.
   - Shape: `versions:[{name:"Tinza's Best", default:true, feel, ingredients:[…], method:[…], costPP, time}, {name:'Quick', …}, {name:'Budget', …}, …]`
   - Selecting a version swaps the whole displayed recipe AND feeds THAT version's ingredients to the plan/shopping builder → cost/time/shopping list all update. Same shopping-flow as addable variations.
   - This is how "too basic" originals survive: the old 6-ingredient spag bol becomes the ⚡ Quick version under the wow default. Everyone served from one entry.
   - Use for HERO recipes (mains/suppers). Building-blocks usually just need add-on `variations` (below), not full versions.
1. **`variations` strip — DISPLAY + ADDABLE (Tina's upgrade).** Riffs on a SINGLE recipe (same dish, small twists, no new recipe). Pap → 12 ways.
   - Basic shape (display only): `{name:'Cheese & Pepper', how:'Cheddar and butter melted through.'}`
   - **ADDABLE shape (the wow):** the variation carries the EXTRA ingredients it introduces →
     `{name:'Peanut Butter & Banana', how:'Stir through the hot pap.', add:[{n:'peanut butter',pp:20,u:'g'},{n:'banana',pp:60,u:'g'}]}`
   - Each variation chip gets a **"Use this version"** toggle (distinct from "see how"). On select: store `S.recipeVariation[recipeId]=idx`; the plan/shopping builder feeds buildPlanData `base.ingredients + variation.add`. → green/gold cost re-computes, shopping list includes the add-ons. The user shops for THEIR chosen version. No recipe-website does this.
   - v1 = additive (`add`) only — covers ~90%. v2 niceties: `swap:[{out:'water',in:'milk'}]` for "cook in milk not water". Keep v1 simple.
   - Build: variation `add` field + "Use this version" button + `S.recipeVariation` state + fold into plan builder. Small, sits on existing engine.
2. **`family` tag** — distinct sibling RECIPES that are cousins (mandazi, puff-puff, vetkoek), each a full recipe in its own section, sharing a photo + cross-linked.
   - Shape on each member: `family:'frieddough'` + `photoName:'<shared family photo>'`
   - Registry: `FAMILIES = { frieddough:{ label:'Fried Dough', photoName:'…', baseId:'<richest member = canonical technique>', members:['vetkoek','mandazi','puffpuff','magwinya'] }, … }`
   - Renderer: a "Part of the Fried Dough family — see also: Mandazi, Puff-Puff…" cross-link strip.
   - **Photo win:** `photoName` already supports shared images (no new code). One shoot covers the whole family.

A recipe can use BOTH.

## Two family TYPES (Tina's rule — the split is by what the food IS, not cuisine)
- **TYPE A — Building blocks** → ONE shared photo + `variations` strip. The base is genuinely the same thing; variations are fillings/toppings/twists. Photo-sharing applies here.
  - Fried Dough (vetkoek incl. mini, magwinya, mandazi, puff-puff) · Maize Porridge · Flatbread · Fritters · Syrup-Soaked Fried Sweets · Thin Pancakes.
- **TYPE B — Composed meals** → KEEP as individual recipes, EACH its own hero photo. Collapsing them throws away the shot that sells the dish. NO shared-photo collapse. But still: cross-link siblings for discovery/browsing, fill missing cousins, and dedup true duplicates.
  - Marinated Skewers · Quiche/Savoury Pie · Fried Rice.
  - Note on Fried Rice: "leave as is" = don't squash under one photo. We DO still add Thailand (khao pad, pineapple-in-shell, crab, basil/krapow) + nasi goreng/chahan/Yangzhou — each its own dish + shot. Breadth kept, hero pics kept.

## Family map (first pass — members found · dups to merge · cousins to ADD)
1. **Fried Dough (savoury/breakfast)** — have: Vetkoek (6 near-dups → merge to 1 + variations), Magwinya (was removed, re-add). ADD: 🇰🇪 Mandazi, 🇳🇬 Puff-Puff. [Koeksister REMOVED → own family below]
2. **Syrup-Soaked Fried Sweets** *(NEW, born from koeksister split)* — have: Koeksister, Koeksister Bites, Mini Cocktail Koeksisters (→ merge + variations). ADD: 🇿🇦 Cape Malay koesister (spiced/coconut), 🇬🇷 Loukoumades, 🇹🇷 Tulumba, 🇮🇳 Jalebi, 🇪🇸 Churros-in-syrup.
3. **Flatbread** — have: Roti (Godamba, Whole Wheat), Pita, Lavash, Msemen, Braai Flatbread, Soft Tortilla. ADD: 🇮🇳 Naan, Chapati, Paratha. (Note: "Spanish Tortilla" is an omelette — NOT this family.)
4. **Maize Porridge** — have: Mealie Pap & Milk, Putu/Phutu/Stywe Pap, Pap & Sous (4 dups → merge to a clean SA set + variations). ADD: 🇰🇪 Ugali, 🇿🇼 Sadza, 🇿🇲 Nshima, Polenta, Grits.
5. **Marinated Skewers** — have: Sosaties, Lamb Sosaties, Beef/Chicken Kebabs, Beef Kofta, Beef Souvlaki, Adana, Paneer Tikka, Seafood Espetada, Pork Curry Sosaties. Consolidate technique; cross-link cultures. (Kiddies fruit skewers are a separate thing — leave.)
6. **Fried Rice** — have: Egg/Garlic/Mushroom/Kimchi Fried Rice, Nasi Goreng, Breyani-adjacent. ADD: 🇹🇭 **Thailand untouched** — Khao Pad, Pineapple Fried Rice (in the shell), Crab Fried Rice, Basil (Krapow) Fried Rice; 🇯🇵 Chahan; 🇨🇳 Yangzhou. One wok photo, many countries.
7. **Thin Pancakes/Crêpes** — have: Pannekoek, Crêpes, Fluffy/Savoury/Banana/Oat Pancakes. ADD: 🇫🇷 thin crêpe base, 🇮🇳 Dosa, Blini. Sweet+savoury variations.
8. **Quiche / Savoury Pie** — have: Crustless/Mini/Tiny Quiche, Spinach & Feta Quiche (dedup), Chicken/Cottage/Shepherd/Fish Pie. Merge the quiche dups → base + fillings variations.
9. **Fritters** — have: Mielie Fritters, Falafel. ADD: 🇮🇳 Pakora, Bhajia. Thin family, easy wins.

## Building-block bases — DEDUP + ADDABLE VARIATIONS (Health + Breakfast, audited)
These aren't cross-cultural cousins — they're single dishes with too many near-duplicate flavour versions. Collapse to a few rich bases + addable variations. ~32 near-dups → ~17 distinct bases.
- **⚠️ CROSS-SECTION DUP (Tina's fix — split by intent, cross-link, NO duplication):** oats AND smoothies live in BOTH Meals-Breakfast and Health. Oats ~17 total across the two (3 berry, 2 bircher, 2 overnight/classic, banana ×3). FIX: keep the genuinely HEALTHY version in Health, the everyday/INDULGENT version in Meals (cocoa banana, choc hazelnut, banana honey → Meals; berry & chia, booster ones → Health). Each recipe lives in ONE section only. Add a cross-link button — "More oats in Breakfast →" on Health's tab and the reverse — so users hop for variety without us duplicating. NO shared-array refactor. Per overlapping pair, Claude drafts the keep/move call, Tina confirms.
- **Overnight Oats (8 now)** → 1 base "Overnight Oats" + addable variations (Berry & Chia, PB Banana, Choc Hazelnut, Cocoa Banana). Keep Bircher / Kheer / Fruit Compote as distinct (different technique).
- **Smoothies (13 now)** → ~6 bases (Green, Berry, Tropical Mango, Choc Protein, Avo Banana). 3-berry + 2-green dups merge. "Function" ones (Vision/Brain/Maca/Colon/Immune/Heart) → BOOSTER add-ons (+ spinach & spirulina, + maca, etc.).
- **Fresh Juices (11 now)** → ~6 bases (Orange & Carrot, Green, Beetroot & Apple, Watermelon Mint, Pineapple Turmeric, Berry). Cleanse/immune/anti-inflam/digestive → add-ons (+ ginger, + celery, + turmeric). Tina's "add almond milk / more pawpaw / add oats".
- **Other Type A building-blocks to add variations:** Steamed Bread (ujeqe/dombolo — also a cross-cultural family across Africa), Scrambled Eggs, Yoghurt + Granola, plus the doughs/breads/pap already mapped above.
- Health schema note: these use `shopping:[{n,pp,u}]` + `howItFeels` (not `ingredients`/`feel`) — adapter already handles it.

## Why this is a triple win
- **Premium oomph:** one dish carries a caterer's depth + a world of variations — un-Googleable. Addable variations make the shopping list personal to the chosen version.
- **Photo backlog:** TYPE A families share `photoName` → fewer shoots. (Rough: the Type A families could collapse 40+ would-be shots into ~10–12.) TYPE B keeps individual hero shots (no saving there, but cross-links add discovery).
- **Kills duplication:** the 44-duplicate problem and the pap×4 / vetkoek×6 / quiche×N sprawl resolve into clean bases (Type A merges to base+variations; Type B merges only TRUE duplicates).

## Build sequence (when Tina's ready)
1. Lock data shapes (above). 2. Small renderer add: `variations` strip (Type A) + `family` cross-link strip (both types). 3. Per family: Type A → pick/write hero base, tag members, point `photoName` at one shared image, add variations, fill cousins; Type B → keep recipes, cross-link, fill cousins, dedup. 4. Start with **Fried Dough + Maize Porridge** (Type A — most duplicated + most photo-saving), then Fried Rice breadth (Type B — Thailand).

## Open / parked
- Confirm each missing cousin is wanted before adding (don't bloat World Kitchen).
- Heritage cousins (Cape Malay koesister, mandazi, ugali) get Tina's hard correction pass.
- Decide canonical "base" member per family (the one whose photo + core method represents the group).
