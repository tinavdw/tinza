# Tinza — Exotic tail, bucketed

The ~245-item exotic list, grouped so you can approve **whole buckets** instead of pricing line by line.
Already-handled items (teff, kale, chorizo, mopane, kapenta, the bean family, etc.) are not repeated here.

**Tag key:** `[ALIAS→x]` map to an existing PRICE_DB key, no new price · `[PANTRY]` route out of the headline like berbere/mitmita · `[1-PRICE]` whole family shares one price you give once · `[PRICE]` genuine single price (you know it, or I source it) · `[IGNORE]` parser artifact, clean at the parser pass — do not price.

---

## A · Approve as ALIASES (no price — one "yes" clears the bucket)

| item | example | → |
|---|---|---|
| sukuma wiki | Kenya Sukuma Wiki | kale |
| amaranth leaves | Kenya Mchicha | spinach |
| wild greens | Greece Horta | spinach |
| greens | Zimbabwe Nyama w/ Greens | spinach |
| palm or vegetable oil | Ghana Groundnut Soup | sunflower oil |
| oil for frying | Ghana Kelewele | sunflower oil |
| suckling pig | Portugal Leitão | pork |
| cured meat / cured meats | Switzerland Capuns / Norway Spekemat | pork |
| cooked meat | Poland Pierogi | beef |
| minced meat | India Keema Matar | beef |
| white fish fillets / fillet | Egypt Sayadeya / Denmark | hake |
| firm white fish fillets | Finland Kalakukko | hake |
| dogfish | Portugal Sopa de Cação | hake |
| perch fillets | Switzerland Filets de Perche | hake |
| vendace fish | Finland Muikut | hake |
| carp fish | Hungary Halászlé | hake |
| mixed fish | Greece Kakavia | hake |
| dried fava beans / broad beans | Egypt Ful / Portugal Favas | butter beans |
| peeled beans | Nigeria Moi Moi | sugar beans |
| green gram / sprouted beans | India Pesarattu / Misal Pav | lentils |

**Flag (pricier than their proxy — veto if you want a real price):** sea bass → hake, reindeer meat → beef, shrimp-or-minced-meat → prawns vs beef (your call).

---

## B · Approve to PANTRY (out of headline, no price — one "yes")

Spices & blends: khmeli suneli, sambar powder, tarhana powder, fennel seeds, dried mloukhia powder, goraka.
Essences & flavourings: orange blossom water, rose water, peppermint essence, caramel essence, vanilla rose water.
Teas & coffees: green tea leaves, loose black tea, instant coffee, ground coffee, coffee.
Made-in-recipe / negligible: white sauce (milk+flour+butter), spiced water, chickpea liquid (aquafaba), piri piri sauce.

---

## C · One shared price per family ( `[1-PRICE]` — give me one rand, it covers the group)

- **Phyllo / filo family** → one price covers: phyllo sheet, phyllo dough, phyllo sheets, malsouka-or-phyllo, phyllo-or-warqa, kunafa pastry, kataifi pastry, shredded phyllo, pastry wrappers, pastry dough, pastry shell, tart shells.
- **Firm / melting cheese** → gruyère, emmental, raclette, sulguni.
- **Fresh / curd cheese** → twarog, fresh ayib, curd cheese, quark, whey cheese, bryndza.
- **Plantains** → green plantain(s), ripe plantain, fried ripe plantain.
- **Fermented / starch dough** → corn dough, cassava dough, fermented corn dough.
- **Cassava (root)** → cassava, cassava root.
- **Pistachios** → crushed pistachios, pistachio, pistachios.
- **Bulgur** → fine bulgur, bulgur.
- **Pasta (small)** → orzo, vermicelli.
- **Okra** → okra, fresh okra, fresh-or-frozen okra.

---

## D · Genuine single prices ( `[PRICE]` — you know SA, or I source )

**Seafood:** octopus, cooked octopus, squid, clams, crab, fresh crab pieces, mixed seafood, dried sprats, fish roe, smoked fish, smoked-fish-or-shrimp, fresh sardines, sardines, mackerel.
**Game / poultry:** duck, rabbit, guinea fowl, reindeer meat (→ beef?), liver.
**Tropical & tubers:** yam, yam flour, green papaya, young jackfruit, wood apple pulp, black eyed pea flour, brown cheese (brunost — unique, sweet).
**Veg:** endive, radish, asparagus, vine leaves, grape leaves, olive, pomegranate seeds.
**Fruit (fresh/dried):** dried apricots, sour cherries, plum(s), sour plums, green plums, berries, mixed fruit, currants, raisin, candied fruit, candied peel, green papaya.
**Nuts:** mixed nuts, nuts, peanuts, ground peanuts, almond, almond paste, ground cashews, cashew nuts, hazelnuts.
**Bakery bits:** marzipan, sponge cake, custard, icing, caramel, wafer, wafer shells.
**Pastes & preserves:** date paste, tamarind paste, palm nut extract, marmalade, berry sauce, cherry sauce.
**Breads:** pita, baguette, small-baguette-or-roll, burger bun, bun, godamba roti, msemen, avash (lavash), pancake, dumplings, breadcrumb.
**Grains:** buckwheat, buckwheat groats, millet flour, maize kernels, roasted maize kernels, wheat berries, wheat, malt, whole grain flour, **barley (cheap — pearl barley, confirm rand)**, sour rye starter, tarhana powder.
**Pantry-cheap (could also just Pantry these):** starch, cornstarch, gelatin.
**Drinks / alcohol (tiny impact — skip or token price):** ouzo, aguardente, kvass, cola.
**Still open:** grape juice (for mos / Churchkhela) — give me the rand or I'll fetch a Ceres/Liqui-Fruit price.

---

## E · IGNORE — parser artifacts (do NOT price; clean at the parser pass)

vegetable · vegetables · veg · palm · sauces · "fresh calf s liver" · ice cubes · pine resin (retsina).

---

### Fast path
Three yeses — **approve A, B, and E** — clears well over half the list with no pricing at all. Then C collapses ~30 more items into ~10 prices. That leaves D as the only real hand-pricing, and you already know a lot of it cold.
