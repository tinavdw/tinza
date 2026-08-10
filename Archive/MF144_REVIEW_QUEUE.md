# MF144 · REVIEW QUEUE — the judgment set (okay BEFORE Code writes these)

**Status 24 Jul:** Phase A shipped + proven. Mechanical families applied: **39 jars** (jams-preserves + chutneys-atchars) · **5 cheesecakes** (springform) · **Bobotie** (soft gate example). Everything below needs Tina's tap because the keyword buckets mix holder types — auto-applying would mis-assign.

Tick each: **✅ keep my holder** · ✏️ **change to** … · ⛔ **skip (no holder)**.

---

## 1 · SOFT oven-dish mains & puddings → `{n:'23×33cm (9×13″) ovenproof dish', per:6, soft:true}`
These are assembled/baked in a family dish and scale down in a smaller one. **Proposed: SOFT.**
- meals · Thai Peanut Chicken Casserole · Cowboy Bean & Beef Bake · Mediterranean Baked Fish · Gnocchi alla Sorrentina · Bacon Cheese Potato Wedges
- meals · Cottage Pie · Shepherd's Pie · Creamy Fish Pie · Greek Lamb Moussaka · Tex-Mex Beef Nacho Bake · Loaded Chicken & Bacon Pasta Bake · Creamy Spinach & Feta Stuffed Chicken · Roasted Veg & Halloumi Bake · Honey-Mustard Chicken Traybake  *(from `ovenbakes` cat)*
- health · Cheesy Broccoli Lentil Bake · Spinach Ricotta Stuffed Shells · Butter-Baked Salmon
- world · Μπριάμ (briami) · Γίγαντες Πλακί · Rakott krumpli · Rakott tészta · Kaalilaatikko · Romerige Aartappelgereg · Janssons Frestelse · Endive/Chicons au Gratin · İmam Bayıldı · Bacalhau com Natas · Bacalhau à Gomes de Sá · Kapros túrós lepény · Hortobágyi palacsinta
- **Soft puddings** → same dish, SOFT: bakes · Chocolate Self-Saucing · Bread & Butter · Malva (events) · Cape Brandy · Sticky Toffee; events · Bread & Butter Pudding
- Baked-oats-small → `{n:'20cm square baking dish', per:serves, soft:true}`: (none clean in meals — Baked Berry Oats is EXCLUDE, see §5)

## 2 · ROASTS — **your call** (a joint scales by size, not by "dish" — likely ⛔ or a non-scaling roasting tin)
meals · Roast Beef · Lemon & Herb Roast Chicken & Veg · Slow-Roast Pork Belly ; events · Slow Roast Beef · Aitchbone Beef Roast · Roast Leg of Lamb · Baked Hake ; world · Cordero Asado · Skaapboud · Springbokboud · Cabrito Assado · Kuzu Tandır · Flaeskesteg · Kaczka/Schab pieczony · Faschierter Braten · Oondgeroosterde Varkpens · Roast pork knuckle · Κλέφτικο (kleftiko) ; braai · Leg of Lamb · Butternut Stuffed
> **Recommend ⛔ no holder** (the meat is the portion; a roasting tin doesn't multiply). Confirm or set a holder.

## 3 · HARD fixed-tin false-matches inside the oven-dish sweep → NOT soft
- Tarts/tortes (tart tin): world · Tarte Tatin · Linzertorte · Quiche Lorraine · Korslose Snoek-en-Uietert · Vasterbottensostpaj
- Set custards / cheesecake-style (mould, HARD): world · Flan · Encharcada · Ostkaka · Gebakte Vla · Pudim · Crème Brûlée (ramekin per:1)
- Tray bakes (fixed tray): world · Baklava · Cavacas · Runebergintorttu
- Apple **cake** → cake tin: world · Eplekake
- Pies (pie dish): meals · Chicken & Mushroom Pie ; events · Chicken Pie ; world · Steak & Guinness / Chicken & ham pie · Wildspastei (Venison Pie)

## 4 · AMBIGUOUS `world` — your soft/hard tap (per MF143)
| dish | my guess |
|---|---|
| Kalakukko (fish pie) | SOFT / own tin? |
| Empanada Gallega (savoury pie) | SOFT |
| Karjalanpiirakka (rice pastry) | own tin (HARD, per:pieces) |
| Ostkaka (Swedish cheesecake) | HARD (mould) |
| Flan · Encharcada · Gebakte Vla (set custards) | HARD (mould) |
| Mämmi (baked malt pudding) | judge — SOFT? |
| Mustikkapiirakka (blueberry bake) | judge — tart tin? |
| Salzburger Nockerl (soufflé) | own oven dish (soft) |

## 5 · EXCLUDE — false positives, **no holder** (keep byte-identical)
meals · French Onion Soup (soup) · Baked Berry Oats (individual/small) · Overnight & Baked Oats (jar — see C1) · Liège Waffles (waffle iron) · Sütlaç baked rice pud (ramekin? your call) ; the "jar" false-matches: Croquetas/Jambon-style ham dishes, mayo/labneh/chia-pudding breakfasts, sourdough/kefir/kombucha starters (a jar for *storage*, not a scaling holder — recommend ⛔).

## 6 · CONDIMENT shelves — ✅ RESOLVED per your Q2 rule ("preserved+stored only; dips/dry-blends/fresh cooking sauces = none"). APPLIED to spice.js. Spot-check / veto below.
**Applied — BOTTLE `{n:'500ml bottle',per:500}` (14):** peri-peri · sweet-chilli · sriracha · crispy-chilli-oil · louisiana hot · habanero-mango hot · fermented-chilli-mash · scotch-bonnet · tomato-ketchup · bbq · sweet-and-sour · teriyaki · hoisin · plum.
**Applied — JAR `{n:'375ml jar',per:375}` (20):** chilli-garlic · harissa · gochujang · mayonnaise · aioli · marie-rose · English/Dijon/wholegrain/honey mustard · date-paste · sambal-oelek · ajvar · tahini · peanut/almond/cashew/macadamia/hazelnut/mixed-nut butter.
**Applied — preserved-lemons `{n:'jar',per:6}`** (its own yield label reads "1 jar" for a base of 6).
**⛔ NO holder (excluded, byte-identical):** all serves-mode sauces (béchamel, hollandaise, béarnaise, pepper, mushroom, cheese, garlic, brown/onion gravy, diane, chasseur, brandy-cream, blue-cheese, red-wine jus, chimichurri, monkey-gland, tartare, cherry) · stocks + bone broths (9) · 38 dips (dressings-dips) · 40 dry blends/rubs · **fresh relishes** (Pico de Gallo, Salsa Verde, Avocado Salsa, Chakalaka, Banana/Carrot Sambal, Pol Sambol, Sambal Matah, Tomato-Onion Sambal) · basil-pesto (yield unit is "portion", not g/ml — can't count; flag if you want it jarred).
> **Borderline calls I made (veto any):** nut butters + mustards + mayo/aioli + ketchup/bbq/teriyaki/hoisin/plum → treated as preserved+stored (they keep in a jar/bottle, aren't dips/blends/fresh-cooking-sauces). Zhoug → treated as fresh (short-life herb paste) → no holder.

## Q1 · ROASTS — ✅ RESOLVED: **no holder** (byte-identical). Nothing written.

## 7 · BAKE sub-families you greenlit me to apply (cakes/loaves/tarts/muffins) — flagged outliers only
- **Cakes (11):** round-tin `20cm round cake tin` per:12 for → Vanilla, Chocolate, Carrot, Red Velvet, Sponge, Olive Oil, Cardamom-Pistachio, Pineapple Upside-Down. **Outliers:** Lamingtons & Basbousa (square/tray, cut) · Tres Leches (soaked in a dish). Confirm holder for the 3 outliers.
- **Loaves:** Beer Bread · Mielie Bread · Banana Bread → `22×12cm loaf tin`. (Rolls/buns/baguette/focaccia = free-form → ⛔.)
- **Tarts (baked-in-tin):** Milk Tart · Fig & Mascarpone · Grapefruit Margarita · Bakewell · Apple Tart · Klappertert → `23cm loose-bottom tart tin`. **Fridge/no-bake → ⛔:** Peppermint Crisp Tart. Lemon Meringue → `24cm pie dish`.
- **Muffins/cupcakes:** Muffins, Cupcakes, Pastéis de Nata, all `health` muffins → `12-cup muffin tray` per:12. **Scones → ⛔** (drop/cut, no tin).
