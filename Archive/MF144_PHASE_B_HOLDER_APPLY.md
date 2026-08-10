# MF144 · PHASE B — HOLDER APPLICATION (resolved, Tina-tapped 24 Jul 2026)

**This resolves `reference/MF144_REVIEW_QUEUE.md` in full.** The engine is done + live
(`TINZA_RULINGS.md` §10). This pass is **data only** — add the `equipment` field to the named
records. The renderers (`equipmentLine`, `equipmentContract`, `softDishNote`, `softDefaultN`)
already exist; **nothing in `core.js` changes.**

## Rules (from §10)
- **SOFT** = `{n:'…', per:6, soft:true}` — family-meal dishes. Opens at 6, scales freely, shows the freeze note.
- **HARD** = `{n:'…', per:N}` (no `soft` key) — fixed tins. Rounds up to whole units, no freeze note.
- **⛔** = **no `equipment` field at all** — byte-identical.
- A SOFT holder carries `per:6, soft:true` **on the record**; the *opener* decides behaviour — family rooms open at 6 with the freeze note, **events/kiddies count dishes off their own guest/kids number automatically** (no special-casing, no `softDefaultN` there — that stays as-is).
- **PARSE, NEVER REGEX** (⚖️ Law 6): load each file, walk the record objects, match by name. No string-replace.
- Touch **only** the records named below. Everything else stays byte-identical.
- Any name you cannot resolve to a record → **flag it, do not guess.**

---

## SOFT — `{n:'23×33cm (9×13″) ovenproof dish', per:6, soft:true}`
- **meals:** Thai Peanut Chicken Casserole · Cowboy Bean & Beef Bake · Mediterranean Baked Fish · Gnocchi alla Sorrentina · Bacon Cheese Potato Wedges · Cottage Pie · Shepherd's Pie · Creamy Fish Pie · Greek Lamb Moussaka · Tex-Mex Beef Nacho Bake · Loaded Chicken & Bacon Pasta Bake · Creamy Spinach & Feta Stuffed Chicken · Roasted Veg & Halloumi Bake · Honey-Mustard Chicken Traybake
- **health:** Cheesy Broccoli Lentil Bake · Spinach Ricotta Stuffed Shells · Butter-Baked Salmon
- **world:** Μπριάμ · Γίγαντες Πλακί · Rakott krumpli · Rakott tészta · Kaalilaatikko · Romerige Aartappelgereg · Janssons Frestelse · Endive/Chicons au Gratin · İmam Bayıldı · Bacalhau com Natas · Bacalhau à Gomes de Sá · Kapros túrós lepény · Hortobágyi palacsinta · **Mämmi**
- **puddings (soft, same dish):** bakes · Chocolate Self-Saucing · Bread & Butter · Cape Brandy · Sticky Toffee · **Tres Leches** ; events · Malva · Bread & Butter Pudding

## HARD — fixed tins (sizes per MF143)
- **Tart / torte → `23cm loose-bottom tart tin`, per:12:** Tarte Tatin · Linzertorte · Quiche Lorraine · Korslose Snoek-en-Uietert · Västerbottensostpaj · Mustikkapiirakka
- **Set custards → mould, per:serves** *(Crème Brûlée = `ramekin`, per:1)*: Flan · Encharcada · Ostkaka · Gebakte Vla · Pudim · Crème Brûlée
- **Tray bakes → fixed tray, per:serves:** Baklava · Cavacas · Runebergintorttu · **Lamingtons** (`20cm square tin`, cut) · **Basbousa** (square/round tin, cut)
- **Cake tin → `20cm round cake tin`, per:12:** Eplekake · Vanilla · Chocolate · Carrot · Red Velvet · Sponge · Olive Oil · Cardamom-Pistachio · Pineapple Upside-Down
- **Loaf → `22×12cm loaf tin`, per:serves:** Beer Bread · Mielie Bread · Banana Bread
- **Tart tin → `23cm loose-bottom tart tin`, per:12:** Milk Tart · Fig & Mascarpone · Grapefruit Margarita · Bakewell · Apple Tart · Klappertert
- **Pie dish → `pie dish`, per:serves** *(Lemon Meringue = `24cm pie dish`)*: Chicken & Mushroom Pie · Chicken Pie · Steak & Guinness pie · Chicken & ham pie · Wildspastei · Lemon Meringue
- **Own tin, per:pieces:** Karjalanpiirakka
- **Muffin tray → `12-cup muffin tray`, per:12:** Muffins · Cupcakes · Pastéis de Nata · all `health` muffins

## ⛔ NO holder — byte-identical
- **Roasts (§2):** Roast Beef · Lemon & Herb Roast Chicken & Veg · Slow-Roast Pork Belly · Slow Roast Beef · Aitchbone Beef Roast · Roast Leg of Lamb · Baked Hake · Cordero Asado · Skaapboud · Springbokboud · Cabrito Assado · Kuzu Tandır · Flaeskesteg · Kaczka/Schab pieczony · Faschierter Braten · Oondgeroosterde Varkpens · Roast pork knuckle · Κλέφτικο · braai Leg of Lamb · Butternut Stuffed
- **Tina's calls (24 Jul):** Kalakukko *(free-formed loaf, no fixed vessel)* · Empanada Gallega *(free-formed on a tray)* · Salzburger Nockerl *(soufflé — does not scale)*
- **Excludes (§5):** French Onion Soup · Baked Berry Oats · Overnight & Baked Oats · Liège Waffles · Sütlaç · jar false-matches (croquetas/ham dishes · mayo/labneh/chia breakfasts · sourdough/kefir/kombucha starters)
- **§7:** Peppermint Crisp Tart *(fridge/no-bake)* · Scones *(drop/cut, no tin)*

## Condiments — unchanged
Already applied in `spice.js` (§6). **Nut butters stay at `375ml jar`** — Tina confirmed 24 Jul, the 250ml change is **not** happening.

## Optional authoring (flag, don't block the pass)
Salzburger Nockerl → a one-line method note: *"Best made fresh in one dish — not suited to scaling or freezing."* Skip if it complicates the pass.

## Close-out
`node --check` every touched file → `tinza-doctor.js` (**RED must stay 9 — any new red = STOP and report**) → `tinza-census.js`. Report the counts. **Nothing pushes until Tina's eyes are on live.**
