# TINZA DISH FAMILIES (living reference)
*The "one base, many ways, one photo" program. Turns dull/duplicated recipes into premium families with depth AND breadth — and shares photos to cut the shoot backlog. Pairs with TINZA_RECIPE_DEPTH_STANDARD.md.*

## The model (LOCKED — Tina's call)
**Keep each cultural entry in its country section, share ONE base + photo, cross-link.** World Kitchen stays browsable by country; we don't merge mandazi out of Kenya. We just stop treating cousins as strangers.

## Two mechanisms (they build differently)
1. **`variations` strip** — riffs on a SINGLE recipe (same dish, 1–3 ingredient twists, no new recipe). Pap → 12 ways. Cheap: one field + a "Make it your way 🪄" strip.
   - Shape: `variations:[{name:'Peanut Butter & Banana', how:'Stir a spoon of peanut butter and a mashed banana through the hot pap.'}, …]`
2. **`family` tag** — distinct sibling RECIPES that are cousins (mandazi, puff-puff, vetkoek), each a full recipe in its own section, sharing a photo + cross-linked.
   - Shape on each member: `family:'frieddough'` + `photoName:'<shared family photo>'`
   - Registry: `FAMILIES = { frieddough:{ label:'Fried Dough', photoName:'…', baseId:'<richest member = canonical technique>', members:['vetkoek','mandazi','puffpuff','magwinya'] }, … }`
   - Renderer: a "Part of the Fried Dough family — see also: Mandazi, Puff-Puff…" cross-link strip.
   - **Photo win:** `photoName` already supports shared images (no new code). One shoot covers the whole family.

A recipe can use BOTH: vetkoek is in the `frieddough` family AND carries its own `variations` (cheese / curried mince / jam).

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

## Why this is a triple win
- **Premium oomph:** one dish carries a caterer's depth + a world of variations — un-Googleable.
- **Photo backlog:** TYPE A families share `photoName` → fewer shoots. (Rough: the Type A families could collapse 40+ would-be shots into ~10–12.) TYPE B keeps individual hero shots (no saving there, but cross-links add discovery).
- **Kills duplication:** the 44-duplicate problem and the pap×4 / vetkoek×6 / quiche×N sprawl resolve into clean bases (Type A merges to base+variations; Type B merges only TRUE duplicates).

## Build sequence (when Tina's ready)
1. Lock data shapes (above). 2. Small renderer add: `variations` strip (Type A) + `family` cross-link strip (both types). 3. Per family: Type A → pick/write hero base, tag members, point `photoName` at one shared image, add variations, fill cousins; Type B → keep recipes, cross-link, fill cousins, dedup. 4. Start with **Fried Dough + Maize Porridge** (Type A — most duplicated + most photo-saving), then Fried Rice breadth (Type B — Thailand).

## Open / parked
- Confirm each missing cousin is wanted before adding (don't bloat World Kitchen).
- Heritage cousins (Cape Malay koesister, mandazi, ugali) get Tina's hard correction pass.
- Decide canonical "base" member per family (the one whose photo + core method represents the group).
