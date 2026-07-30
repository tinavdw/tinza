# 🇮🇩 INDONESIA B3 — COLD START. PASTE THE BLOCK AND NOTHING ELSE.

---

## ⛔⛔ ORIGIN DOES NOT HAVE THE WORK — DROP THESE FILES OVER THE CLONE FIRST

`git clone --depth 1 https://github.com/tinavdw/tinza.git` gives you **zero** Indonesia records.

| file | why it must be dropped in |
|---|---|
| `sections/wk_indonesia.js` | **21 records.** A clone gives 0 and would silently start over |
| `sections/prices.js` | 20+ keys origin lacks, incl. everything Tina sourced on 30 Jul |
| `merge.js` | runs the state ledger |
| `merge-selftest.js` | 48 proofs |
| `priceledger.js` + `reference/PRICE_LEDGER.json` | 93 entries, provenance gate |
| `wowcheck.js` | the `/wow` + `/wk` gate |
| `reference/ASIA_LEDGER.json` | baselined at 21 records |

⛔ **NEVER QUOTE A COUNT FROM MEMORY.** Read the file or count with node first.

---

## PASTE BLOCK (copy from here down)

Indonesia B3. Clone the repo, don't ask me for files:
`git clone --depth 1 https://github.com/tinavdw/tinza.git`
Origin does NOT have the work — I'll give you `wk_indonesia.js`, `prices.js`, `merge.js`,
`merge-selftest.js`, `priceledger.js`, `wowcheck.js`, `PRICE_LEDGER.json`, `ASIA_LEDGER.json`.
Drop them over the clone, then count the records with node before saying any number back to me.

### WHERE IT STANDS — measured 30 Jul, hash `fd8343a3e44abd79`
**Japan CLOSED 50/50 · China CLOSED 50/50 (pushed + wired) · INDONESIA 21/50, not pushed.**
21 records · **63 versions** · main 8 · staple 3 · side 2 · starter 5 · dessert 3 ·
vegan-capable 16/21 · eggs in 6 base lines · **0 dead crossLinks · 0 diet-union mismatches** ·
pricecheck **exact 58 · wrong-product 0 · will-not-price 0 · absent 0** · every record coverage **1.00** ·
all 63 costPP match the engine · doctor **RED 10** (floor) · merge-selftest **48/48** ·
priceledger **99/99**.

| # | id | course | costPP |
|---|---|---|---|
| 1 | rendang | main | R63 · **R74** · R89 |
| 2 | sambal-terasi | staple | R9 · **R10** · R13 |
| 3 | tempe-goreng | side | R45 · **R50** · R49 |
| 4 | gado-gado | main | R30 · **R48** · R46 |
| 5 | nasi-uduk | staple | R12 · **R22** · R26 |
| 6 | nasi-goreng | main | R22 · **R35** · R50 |
| 7 | perkedel | starter | R14 · **R21** · R21 |
| 8 | sate-ayam | starter | R35 · **R40** · R74 |
| 9 | klepon | dessert | R10 · **R11** · R12 |
| 10 | bakso | main | R42 · **R49** · R54 |
| 11 | rawon | main | R54 · **R84** · R89 |
| 12 | gudeg | main | R47 · **R63** · R70 |
| 13 | rujak | starter | R15 · **R16** · R19 |
| 14 | tahu-gejrot | starter | R33 · **R50** · R51 |
| 15 | pepes-ikan | main | R43 · **R50** · R52 |
| 16 | bika-ambon | dessert | R12 · **R18** · R22 |
| 17 | ayam-goreng-kalasan | main | R39 · **R77** · R95 |
| 18 | urap-urap | side | R22 · **R30** · R31 |
| 19 | bawang-goreng | staple | R7 · **R11** · R24 |
| 20 | serabi-solo | dessert | R7 · **R11** · R16 |
| 21 | sate-lilit | starter | R37 · **R57** · R83 |

### ⛔ THE SEQUENCE — ONE RECORD, ONE BANK

    node --check <batch>.js
    node wowcheck.js indonesia <batch>.js      ← /wow §7 + /wk §7, BEFORE the merge
    node merge.js indonesia <batch>.js         ← 40 assertions + state ledger
    node pricecheck.js indonesia
    node priceledger.js --check                ← only if prices.js was touched
    rm the batch file, re-run node --check + pricecheck to prove the record survived
    node wowcheck.js indonesia                 ← 🆕 WHOLE FILE. Do this EVERY bank.
    present_files: wk_indonesia.js + the progress block

⚖️ **`wowcheck.js` TAKES A BARE COUNTRY NAME AND AUDITS THE LIVE SECTION FILE.** This was wrongly
reported on 30 Jul as a missing feature and escalated to a ruling; it has always existed
(`loadRecords()`, the batch argument is optional). **The whole-file run is the only one that can see
`howThisFeels` reuse and duplicate ids**, because those are invisible in a single-record batch.

### ⭐ THE TEST — TINA, 30 JUL, IN HER OWN WORDS
*"Not an ordinary recipe, but something someone would like to try."* A slot is earned on **technique or
texture, never on fame.** Famous-and-ordinary is the trap because it looks like coverage.
⛔ **STRUCK PERMANENTLY:** Telur Balado (egg ruling) · Mie Goreng · Semur · Pisang Goreng · Soto Ayam.

### 🥚 EGG RULING (Tina, 30 Jul)
**No egg-LED record.** Egg may appear incidentally/structurally where a dish genuinely needs it.
Count **CLOSED AT 6**: gado-gado · nasi-goreng · perkedel · bakso · bika-ambon · kalasan.
⚖️ Re-run the census AFTER banking, never before — it was quoted as 5 and a 6th was banked minutes later.

### ⛔ 21 SPENT LEADS — NEVER REUSE
pecah minyak · dry-char + pestle-not-blender · bumbu brine into a porous centre · per-vegetable doneness
+ hot-water emulsion · absorb-then-steam rice · cold-dry-rice + one-portion-at-a-time + kecap-at-the-END ·
fry-the-potato-before-mashing · two-zone fire + across-the-grain + tight threading · solid-sugar-in
liquid-out + invisible seam + float-then-wait · cold protein gel + salt-as-reagent + bare-simmer poach ·
nut-by-nut rejection + sieve + skim-to-clear + it-is-a-soup · **colour steeped-not-browned + never stir +
sugar caramelising in liquid** (Gudeg) · **unripe-is-the-ingredient + salt pulls out its own dressing +
the ten-minute window** (Rujak) · **hollow tofu + thin broth because a thick sauce cannot enter a sponge +
the COLLAPSE makes it** (Tahu Gejrot) · **steam then char, in that order + bumbu goes in RAW** (Pepes) ·
**keep the top liquid while the bottom sets + starch not flour** (Bika Ambon) · **reduce the braise to
2 tbsp and fry it into the crunch** (Kalasan) · **steam the coconut, never fry — fat melts at 24°C +
vegetables bone DRY** (Urap) · **cold in, early out — carryover** (Bawang Goreng) · **never turned, the
edge climbs a bowl-shaped pan + swirl once + domed lid** (Serabi) · **the stick is a FORMER not a skewer +
dry coconut is structural + bruise and fray the stalk** (Sate Lilit).

### ⛔ 21 SPENT MOATS — NEVER REUSE AN ANGLE
merantau/preservation · Columbian-exchange chilli · fermentation + the B12 half-myth · the bumbu pecel
brick · **Betawi = BATAVIA** · rice food-safety + kecap manis as a local invention · colonial ratio
inversion + nutmeg via Banda · sosatie + sate klathak · 2-acetyl-1-pyrroline + jajan pasar + onde-onde ·
convergent protein gel (bakso = frankfurter = kamaboko) · *Pangium edule* as fish poison · **tannins are
named after tanning hide** (Gudeg) · **tingkeban ritual + rojak-as-the-word-for-jumble** (Rujak) ·
**why tofu puffs, and the collapse not the puff** (Tahu Gejrot) · **banana is a HERB, not a tree**
(Pepes) · **palm sap cannot stay unfermented** (Bika Ambon) · **coconut water is sterile + IV history**
(Kalasan) · **grated coconut is hours-perishable, which built the desiccated industry** (Urap) ·
**shallots as a politically-sensitive commodity** (Bawang Goreng) · **the pan is an Indian Ocean object**
(Serabi) · **lemongrass is a citronella relative, terpenes as chemical defence** (Sate Lilit).
⛔ **OWNERSHIP:** peanut sauce = Gado-Gado · beef = Rendang · fermentation-as-nutrition = Tempe ·
terasi toasting + mortar-vs-blender = Sambal Terasi · fire-building = Sate Ayam · protein binding = Bakso.
⚖️ **ROTATE THE REGISTER**, not just the fact. Used: toxicology · chemistry · ritual · physics · botany ·
microbiology · history of medicine · food-science industry · political economy · trade geography ·
chemical ecology.

### ⛔ PRICE LANDMINES — probe `wkPriceLookup` BEFORE authoring
- **`4 lemongrass stalks` → R0.00, coverage 0.00.** Weight key, count line. **ALWAYS `25g lemongrass`.**
- bare `chilli`/`chillies` → PER COUNT R1 → always write **`red chilli`**
- `palm sugar`/`coconut sugar` → `sugar` R35 WRONG → use **`jaggery` R100**
- `candlenuts` **NULL** → **`macadamia nuts` R450** (Tina-ruled, §29.1 no key)
- `kencur` **NULL**, `sand ginger`/`aromatic ginger` → `ginger` R280 **WRONG PLANT** → galangal 1:1, or
  ginger + a pinch of white pepper (Tina-ruled, §29.1 no key)
- `lime leaves`/`kaffir lime leaves` → `lime` R140 **WRONG** → in-method only
- `banana leaves` → `banana` R32/kg **WRONG** → in-method only (§29.1 refused)
- `coconut water` **R85/L keyed 30 Jul** — was a R0.02 trap. `whole coconut` **NULL, unsourced**
- ✅ **`sugarcane` R20/stalk — KEYED 30 Jul (Tina: R15–R25/stalk)**, both spellings, **COUNT** key. This
  closed a live wrong-product trap where `sugar cane` fell to `sugar` R35. 🟡 **Batons per stalk is NOT
  sourced — do not invent a divisor.** 📌 Vietnam's *chạo tôm* is the record that needs it
- `long beans`/`star fruit`/`jicama`/`guava`/`pear`/`papaya`/`terasi`/`fresh coconut` all **NULL** —
  use `green beans` R58 · `green papaya` R32 · `shrimp paste` R437 · `desiccated coconut` R160
- `apple` R6 **count** vs `apples` R27/kg **weight** — two real store routes, NOT a bug (Tina-ruled)
- `mushroom` R165 / `mushrooms` R90 both live — **use the plural**
- `instant noodles` R100/kg — write GRAMS · `bamboo`/`wooden skewers` R0.25 **each** — write COUNT
- `2 bananas` → R0.00 · three banana keys, one marked `// ESTIMATE`

### ✅ SAFE AND CONFIRMED
hake 180 · chicken 90 · chicken drumsticks 85 · pork mince 125 · prawns 350 · tofu 171 ·
coconut milk 63 · desiccated coconut 160 · **coconut water 85** · rice flour 40 · tapioca starch 70 ·
cornflour 68 · instant yeast 90 · white sugar 35 · jaggery 100 · **lemongrass 500 (Tina-sourced)** ·
galangal 880 · turmeric 351 · coriander 650 · garlic 280 · shallots 60 · onion 27 · chilli 80 ·
tamarind paste 522 · shrimp paste 437 · kecap manis 260 · white pepper 240 · cheddar 187 ·
green beans 58 · cabbage 25 · carrots 25 · spinach 93 · bean sprouts 270 · young jackfruit 108 ·
pineapple 25 · mango 40 · cucumber 21 · green papaya 32 · peanuts 128 · macadamia nuts 450 ·
salt 30 · sunflower oil 48 · water 0.02 · bay leaves 0.15 each · skewers 0.25 each ·
baking paper 2.20/sheet · foil 2.45/sheet · **sugarcane 20/stalk (count)**.

### ▶️ QUEUE 22–25 — takes you to the halfway push, and fixes the course balance (side is lowest at 2)
| # | dish | course | the WOW | watch |
|---|---|---|---|---|
| **22** | **Plecing Kangkung** | **side** | blanch-and-shock for squeak, under a sambal that is never cooked | `spinach` R93 as the SA route for kangkung |
| 23 | **Ayam Betutu** | main | Bali: paste in three places — cavity, under the skin, outside — then 4 hours at very low heat | ⚠️ wrap collision with Pepes; lead on the PASTE VOLUME, not the parcel |
| 24 | **Es Cendol** | dessert | batter pressed through a colander into iced water, setting into droplets mid-fall | pandan NULL — do not build colour on it |
| 25 | **Acar Kuning** | **side** | salt-draw first, then hot turmeric brine poured over cold vegetables | ferment-adjacent: /wow §4 wants ambient temp + a window |

Reserve: Lapis Legit (18 grilled layers) · Sayur Asem · Terong Balado · Oseng-Oseng Mercon.

### 📌 PUSH AT ~25/50 — **4 RECORDS AWAY** — with 2 wiring lines
1. `<script src="sections/wk_indonesia.js"></script>` in `index.html`
2. `window.WK_INDONESIA || [],` in `wkPool()` at `worldkitchen.js:58`
3. `WK_COUNTRY_GEO["Indonesia"]` — **already present**, `worldkitchen.js:80`
⚠️ Until that push GitHub holds none of it and the handed-back files ARE the second copy. Risk accepted
deliberately 29 Jul — **do not re-raise it as a discovery.**

### 🩸 OPEN, WAITING ON TINA
- 🔴 **LANE-WIDE: are consumed wrappers costed, or equipment?** Keys exist (`baking paper` R2.20/sheet ·
  `foil` R2.45/sheet, 30cm width Tina-confirmed) but are **applied to no record**; `foil` appears
  in-method **31×** (JP 5 · CN 9 · ID 17). If costed, Pepes' budget fork goes R43 → ~R48.
- 🔴 **TWO `priceledger.js` HOLES:** `claimsTina` reads only the key's own line, so **attribution in a
  block comment is invisible and the check passes green** (caught live on 30 Jul); and `--seed` stamps
  brand-new entries `grandfathered: true`, which suppresses the undated warn.
- 🔴 **8 broken photo links, ALL case mismatches in `spice.js`** (`mayonnaise.jpg` vs `Mayonnaise.jpg`).
  Case-sensitive live, so broken now, and it fails the pre-push gate. **Untouched: Stability Rule 1.**
- Drop Okonomiyaki's `aonori` 2g → 0.5g? (R56 → R14 — the price is right, the quantity is the lever)
- Write A7's price-strike as a formal §31 amendment (applied in practice since 30 Jul, never written)
- Paste in `RULING_32_THE_TWO_LEDGERS.md` and `THE_FOUR_TRIGGERS.md`. ⚠️ Rulings at origin stop at **§25**
  — §26–§32 are local only, so **paste blocks, never a rebuilt file** (bitten 6×).
- Whole-coconut price unsourced — Tina noted people split a whole coconut for the water. Do not guess it.
- 🟡 **How many skewer batons a sugarcane stalk yields** — needed to cost *chạo tôm* at servings:1.
  The stalk price is sourced; the divisor is not. Ask her when that record is authored.

### 🩸 CARRIED, MINE, NEVER ASKED OF TINA
**176 prep-in-the-name lines (JP 41 · CN 135) — VERIFIED by whole-file audit, not carried on trust** ·
**22 thin-why warns (CN 20 · JP 2)** · **5 thin-leftover warns (CN)** · **35 quantity-less lemon lines
render blank** (Africa + Europe; the GAP rung, batches) · 38 A-or-B lines · China §26 per-version diet
debt, judgement not auto-tag · China 67 will-not-price (`china-roast-duck` coverage **0.31**, biggest
coverage win left) · Europe 39 + SA 33 same class · **`japan-nukazuke` R9·10·15 is RULING-SET under
§31.3c — EXCLUDE from any costPP sweep** (a blanket recompute reversed it twice) · `leftovers` has no
renderer · merge.js FLESH list missing octopus + dashi · vegan-mistag warn cannot see version deltas ·
🟠 REVIEW ledger ruling unwritten · China + Japan have no ASIA_LEDGER entries (both closed, will not
re-baseline) · `dried lemongrass` R1053/kg aliases to fresh R500, latent, 0 live lines.

### ▶️ PHASE PLAN (Tina, 30 Jul)
**P1** Indonesia → 50/50 · **P2 🆕 CHINA WOW PASS** · **P3** Thailand 50 · **P4** Vietnam 40.
⚖️ **P2 already has its candidate list, measured:** the 20 thin-why China records. And **one read-through
of `wk_china.js` can service five jobs at once** — 20 thin-why · 135 prep-in-name · 5 thin-leftovers ·
67 will-not-price · the §26 diet debt. Plan it as one pass, not five.

### ⚖️ TWO ERRORS FROM 30 JUL, RECORDED SO THEY ARE NOT REPEATED
1. **A gap was asserted from memory** (`wowcheck` "cannot audit a banked record") and escalated into a
   request for Tina's ruling. It never existed. **Read the code before reporting a hole.**
2. **A price problem was described twice before being measured** (lemon: claimed an 8× underprice, then a
   count-vs-weight bug; it was neither — 35 quantity-less lines rendering blank). **Run the cost engine
   over the actual lines, then describe. Reasoning about a price table is not pricing a line.**

**Start with record 22, Plecing Kangkung. One record, one bank.**
