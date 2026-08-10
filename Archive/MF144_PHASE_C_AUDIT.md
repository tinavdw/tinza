# MF144 · PHASE C — HOLDER COVERAGE AUDIT
*Generated 25 Jul 2026 · regenerate any time with `node Tools/tinza-holder-audit.js`*

⚖️ **Phase B tagged one NAMED record per dish. The library keeps the same dish as separate records in different rooms — so every cross-room twin stayed bare, and the old coverage guard read `BAKES_RECIPES` only, so nothing said so.** A green board the whole time. Ruling banked: `TINZA_RULINGS.md` §10 — *the holder follows the yield basis, not the name; a bare twin is RED.*

---

## ✅ CLOSED THIS PASS — 9 holders added (171 → 180)

| record | room | holder | why |
|---|---|---|---|
| `cape-malay-milk-tart` | world | 23cm loose-bottom tart tin · per 12 | twin `bakes:bk-milk-tart` |
| `melktert` | events | 23cm loose-bottom tart tin · per 12 | same tin — HARD takes no `soft` anywhere |
| `boerekos-malva-pudding` | world | 23×33cm dish · per 6 · **soft** | twin `events:malvapudding` |
| `bk-malva-pudding` | bakes | 23×33cm dish · per 6 · **soft** | twin `events:malvapudding` |
| `cape-malay-bobotie` | world | 23×33cm dish · per 6 · **soft** | twin `meals:sp-bobotie` · prose already says *baking dish* |
| `boerekos-herderspastei` | world | 23×33cm dish · per 6 · **soft** | twin `meals:sp-shepherds-pie` |
| `boerekos-hoenderpastei` | world | pie dish · per 8 | twin `events:chickenpie` |
| `sp-lasagne` | meals | 23×33cm dish · per 6 · **soft** | **the outright miss** — no copy had one |
| `lasagna` | events | 23×33cm dish · per 6 · **no soft** | count-scaled room keeps its own count (§10) |

**Fish Pie (WK) confirmed fine** — it was never bare, exactly as Tina saw on live.

---

## 🔴 OPEN — 4 dishes, 6 bare copies · **these need Tina's ruling, not Claude's guess**

**1 · Apple Tart ×2** — `world:netherlands-appeltaart` · `world:boerekos-appeltert`
A Dutch **appeltaart** is a deep springform; an SA **appeltert** is not the same vessel as the `bakes` 23cm tart tin. Same name, three different dishes. ⚖️ §2.3 — ask, never infer.
> **Question:** does each get its own tin, or do they share the 23cm tart tin?

**2 · Peri-Peri Sauce ×2** — `events:periperi` · `braai:periperibraai`
`braai:periperibraai` is costed **per person** (*3g pp · 8ml pp*) — it has **no fixed yield**, so a *"500ml bottle"* would be a lie on the page. By the yield-basis ruling this one takes **NO holder** and is correctly bare. `events:periperi` looks like a batch and probably should carry the bottle.
> **Question:** confirm braai = NO holder (suppress it), events = 500ml bottle?

**3 · Mango Atchar ×1** — `world:indian-mango-atchar` — same question as above: batch (jar) or per-head?

**4 · Tahini ×1** — `events:tahini` — same question.

*Until these are ruled, doctor rung 12 sits **RED**. That is deliberate — ⚖️ Law 42, the gap is visible instead of silent.*

---

## ⚠️ THE REAL SCOPE — 131 records, 128 dishes, holder-shaped and bare everywhere

This is **not** a bug list; it is an **authoring worklist** (a Fable-scale pass), so the doctor holds it as a **WARN**, not a gate. The heavy rooms: **world 85 · meals 17 · events 12 · health 9 · bakes 7 · braai 2 · spice 1**. Promote the WARN to a gate the day it closes.

---

## THE WATCHER

`Tools/tinza-holder-audit.js` — read-only, writes nothing. Boots the real library and **walks the record objects** (⚖️ §19 parse-never-grep). The doctor `require`s it, so there is **one** grouping, not a copy per tool; if the module goes missing the doctor **fails loudly** (⚖️ MF135).

**Proven to fire:** stripping the holder just added to `events:melktert` moved the count 6 → 7 and named the record. Restored, `node --check` clean.

---

## RAW OUTPUT

```

🍽️  TINZA HOLDER AUDIT  2026-07-25 06:27 · read-only · writes nothing
    2083 records · 180 carry a holder

A · SPLIT — a twin HAS the holder, this copy is BARE   (always a bug — the dish is proven)

  Apple Tart   [apple tart]
    ✓ bakes:bk-apple-tart             [{"n":"23cm loose-bottom tart tin","per":12}]
    ✗ world:netherlands-appeltaart    Appeltaart  → soft:true allowed
    ✗ world:boerekos-appeltert        Appeltert (Apple Tart)  → soft:true allowed

  Peri-Peri Sauce   [peri peri sauce]
    ✓ spice:peri-peri-sauce           [{"n":"500ml bottle","per":500}]
    ✗ events:periperi                 Peri-Peri Sauce  → no soft: (count-scaled room)
    ✗ braai:periperibraai             Peri-Peri Sauce  → soft:true allowed

  Mango Atchar   [mango atchar]
    ✓ spice:mango-atchar              [{"n":"375ml jar","per":375}]
    ✗ world:indian-mango-atchar       Mango Atchar  → soft:true allowed

  Tahini   [tahini]
    ✓ spice:tahini                    [{"n":"375ml jar","per":375}]
    ✗ events:tahini                   Tahini  → no soft: (count-scaled room)


B · ALL-BARE — looks like it needs a holder, NO copy has one   (authoring candidates)

  bakes  (7)
    · bk-hertzoggies                    Hertzoggies
    · bk-peppermint-crisp-tart          Peppermint Crisp Tart
    · bk-kouign-amann                   Kouign-Amann
    · bk-rice-pudding                   Rice Pudding
    · bk-caramelised-white-choc-pudding Caramelised White Chocolate, Raspberry & Custard Pudding
    · bk-banoffee-cream-pudding         Banoffee Cream Pudding
    · bk-trifle                         Trifle

  braai  (2)
    · potbake                           Creamy Potato Bake
    · marshmallowbanana                 Baked Marshmallow Banana

  events  (11)
    · pepperminttart                    Peppermint Tart
    · sagopudding                       Sago Pudding
    · bakedhake                         Baked Hake with Lemon Herb Crust
    · sweetpatats                       Caramelised Sweet Potato Bake
    · pumpkinbake                       Roasted Pumpkin Bake
    · cauliflowercheese                 Cauliflower & Cheese Bake
    · tipsytart                         Tipsy Tart (Date Pudding)
    · tiramisu                          Tiramisu
    · appletart                         Apple Crumble
    · choccheesecake                    Chocolate Cheesecake
    · pumpkinpie                        Pumpkin Pie

  health  (9)
    · mu_appleoat                       Spiced Apple & Oat
    · mu_zucchlem                       Zucchini & Lemon
    · mu_seedomega                      Everything Seed Omega
    · rr_chocavomousse                  Raw Choc Avocado Mousse Cake
    · ketocheesecake                    Keto Cheesecake Cups
    · hp_turkey_meatballs               Baked Turkey Meatballs & Spinach
    · veg_shakshuka_pdf                 Baked Egg & Feta Shakshuka
    · gh_tempeh_bake                    Broccoli Mushroom Tempeh Bake
    · db_salmon_asparagus               Baked Salmon with Asparagus

  meals  (16)
    · bf-chakalaka-baked-eggs           Chakalaka Baked Eggs
    · bf-japanese-souffle-pancakes      Japanese Soufflé Pancakes
    · bf-sutlac-baked-rice-pudding      Sütlaç-style Baked Rice Pudding
    · bf-malva-melktert-oats            Malva / Melktert Oats
    · bf-baked-berry-oats               Baked Berry Oats
    · bf-potato-and-sour-cream-muffins  Potato & Sour Cream Muffins
    · bf-cottage-cheese-and-quinoa-muffinsCottage Cheese & Quinoa Muffins
    · bf-carrot-and-pineapple-muffins   Carrot & Pineapple Muffins
    · bf-biltong-and-cheese-muffins     Biltong & Cheese Muffins
    · bf-malva-pudding-muffin           Malva Pudding Muffin
    · bf-overnight-baked-oats           Overnight & Baked Oats
    · ln-onion-butternut-tart           Caramelised Onion & Butternut Tart
    · ln-mini-quiches                   Mini Quiches
    · sp-tuna-pasta-bake                Cheesy Tuna Pasta Bake
    · sp-cannelloni                     Spinach & Ricotta Cannelloni
    · sp-feta-tomato-pasta              Baked Feta & Tomato Pasta

  spice  (1)
    · mixed-spice                       Mixed Spice (Baking)

  world  (85)
    · pakistan-kheer                    کھیر
    · egypt-umm-ali                     Umm Ali
    · morocco-pastilla                  Pastilla
    · senegal-thiakry                   Thiakry
    · senegal-lakh                      Lakh
    · tunisia-tunisian-tajine           Tunisian Tajine
    · tunisia-bouza                     Bouza
    · libya-mahalabia                   Mahalabia
    · mozambique-bolo-polana            Bolo Polana
    · greece-galaktoboureko             Γαλακτομπούρεκο
    · greece-youvetsi                   Γιουβέτσι
    · greece-revani                     Ρεβανί
    · greece-tiropita                   Τυρόπιτα
    · greece-horiatiko-psomi            Χωριάτικο ψωμί
    · greece-kreatopita                 Κρεατόπιτα
    · greece-paximadia                  Παξιμάδια
    · greece-milopita                   Μηλόπιτα
    · greece-moussaka                   Μουσακάς
    · greece-spanakopita                Σπανακόπιτα
    · greece-pastitsio                  Παστίτσιο
    · spain-tarta-de-santiago           Tarta de Santiago
    · spain-arroz-con-leche             Arroz con Leche
    · spain-patatas-panaderas           Patatas Panaderas
    · spain-empanada-gallega            Empanada Gallega
    · portugal-polvo-a-lagareiro        Polvo à Lagareiro
    · portugal-bolo-de-arroz            Bolo de Arroz
    · portugal-bolo-rei                 Bolo Rei
    · portugal-toucinho-do-ceu          Toucinho do Céu
    · portugal-pao-de-lo                Pão de Ló
    · portugal-arroz-de-pato            Arroz de Pato
    · netherlands-ontbijtkoek           Ontbijtkoek
    · netherlands-gevulde-koek          Gevulde Koek
    · switzerland-rosti                 Rosti
    · switzerland-nusstorte             Engadiner Nusstorte
    · switzerland-maluns                Maluns
    · switzerland-zwetschgenkuchen      Zwetschgenkuchen
    · switzerland-rueblitorte           Rueblitorte
    · austria-sachertorte               Sachertorte
    · austria-leberkaese                Leberkäse
    · austria-salzburger-nockerl        Salzburger Nockerl
    · sweden-smorgastarta               Smorgastarta
    · sweden-prinsesstarta              Prinsesstarta
    · sweden-laxpudding                 Laxpudding
    · norway-lutefisk                   Lutefisk
    · norway-tilsl-rte-bondepiker       Tilslørte Bondepiker
    · denmark-rugbrod                   Rugbrod
    · denmark-risalamande               Risalamande
    · denmark-roedgroed                 Roedgroed
    · denmark-ovnbagt-laks              Ovnbagt Laks
    · finland-kalakukko                 Kalakukko
    · finland-lihapiirakka              Lihapiirakka
    · finland-pannukakku                Pannukakku
    · finland-leipajuusto               Leipäjuusto
    · finland-lohipiirakka              Lohipiirakka
    · poland-sernik                     Sernik
    · poland-fasolka-po-bretonsku       Fasolka po bretońsku
    · poland-mazurek                    Mazurek
    · ukraine-kyiv-cake                 Київський торт
    · russia-rasstegai                  Расстегай
    · russia-ptichye-moloko             Птичье молоко
    · russia-medovik                    Медовик
    · russia-smetannik                  Сметанник
    · hungary-dobos-torta               Dobos torta
    · hungary-kurtoskalacs              Kürtőskalács
    · turkey-kumpir                     Kumpir
    · turkey-sutlac                     Sütlaç
    · turkey-revani                     Revani
    · turkey-kuzu-tandir                Kuzu Tandır
    · india-kheer                       Kheer
    · india-dhokla                      Dhokla
    · sri-lanka-lamprais                Lamprais
    · sri-lanka-wood-apple-juice        Wood Apple Juice
    · cape-malay-boeber                 Boeber
    · indian-bunny-chow                 Bunny Chow
    · indian-soji-halwa                 Soji Halwa
    · indian-carrot-halwa               Carrot Halwa
    · boerekos-buttermilk-rusks         Bottermelk Beskuit (Buttermilk Rusks)
    · boerekos-date-loaf                Dadelbrood (Date Loaf)
    · boerekos-sagopoeding              Sagopoeding (Baked Sago Pudding)
    · boerekos-caramel-banana-bread     Karamel-Piesangbrood (Caramel Banana Bread)
    · france-cassoulet                  Cassoulet
    · france-tartiflette                Tartiflette
    · france-gratin-dauphinois          Gratin Dauphinois
    · we-schwarzw-lder-kirschtorte      Black Forest cake
    · we-apple-and-blackberry-tart      Apple and blackberry tart

TOTALS  split dishes=4 (6 bare copies)  ·  all-bare candidates=131


```
