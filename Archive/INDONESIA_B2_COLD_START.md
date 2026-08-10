# 🇮🇩 INDONESIA B2 — COLD START. PASTE THIS AND NOTHING ELSE.

---

## ⛔⛔ READ THIS FIRST — A FRESH CLONE DOES NOT HAVE THE WORK

**Origin has NONE of the 30 July session.** Verified: `wk_indonesia.js` does not exist at origin ·
`priceledger.js` and `wowcheck.js` do not exist at origin · `prices.js` at origin is missing
**11 price keys** · `merge.js` at origin has **no state ledger**.

⚠️ **So clone AND take these six files from the 30 Jul handback before doing anything:**

| file | why it must be dropped in |
|---|---|
| `sections/wk_indonesia.js` | **11 records.** A clone gives you 0 and would silently start over |
| `sections/prices.js` | 12 keys incl. `kecap manis` · `keluak` · `rawon spice mix` · skewers |
| `merge.js` | now runs the state ledger |
| `merge-selftest.js` | 48 proofs incl. 6 new ledger ones |
| `priceledger.js` + `reference/PRICE_LEDGER.json` | the anti-duplication tool |
| `wowcheck.js` | the `/wow` + `/wk` gate |
| `reference/ASIA_LEDGER.json` | baselined at 11 records, hash `dd574fd5b4c249e3` |

⛔ **DO NOT QUOTE A COUNT FROM MEMORY.** Read the file, or count with node, BEFORE stating any number.

---

## PASTE BLOCK (copy from here down into a new chat)

Indonesia B2. Clone the repo, don't ask me for files:
`git clone --depth 1 https://github.com/tinavdw/tinza.git`

⚠️ Origin does NOT have the 30 Jul work — I will give you `wk_indonesia.js`, `prices.js`, `merge.js`,
`merge-selftest.js`, `priceledger.js`, `wowcheck.js`, `PRICE_LEDGER.json` and `ASIA_LEDGER.json`.
Drop them over the clone before you touch anything, then count the records with node.

### WHERE IT STANDS — measured 30 Jul, not remembered
**Japan CLOSED 50/50 · China CLOSED 50/50 (pushed + wired) · INDONESIA 11/50**, not pushed.
11 records · 33 versions · main 5 · staple 2 · starter 2 · side 1 · dessert 1 · vegan-capable 9/11 ·
0 dead crossLinks · 0 diet-union mismatches · pricecheck **exact 41 · wrong-product 0 ·
will-not-price 0 · absent 0** · every record coverage 1.00 · all 33 costPP match the engine ·
doctor RED 10 (floor).

| # | id | costPP |
|---|---|---|
| 1 | `indonesia-rendang` | R63 · **R74** · R89 |
| 2 | `indonesia-sambal-terasi` | R9 · **R10** · R13 |
| 3 | `indonesia-tempe-goreng` | R45 · **R50** · R49 |
| 4 | `indonesia-gado-gado` | R30 · **R48** · R46 |
| 5 | `indonesia-nasi-uduk` | R12 · **R22** · R26 |
| 6 | `indonesia-nasi-goreng` | R22 · **R35** · R50 |
| 7 | `indonesia-perkedel` | R14 · **R21** · R21 |
| 8 | `indonesia-sate-ayam` | R35 · **R40** · R74 |
| 9 | `indonesia-klepon` | R10 · **R11** · R12 |
| 10 | `indonesia-bakso` | R42 · **R49** · R54 |
| 11 | `indonesia-rawon` | R54 · **R84** · R89 |

### ⛔ THE SEQUENCE — ONE RECORD, ONE BANK

    node --check <batch>.js
    node wowcheck.js indonesia <batch>.js     ← /wow §7 + /wk §7, BEFORE the merge
    node merge.js indonesia <batch>.js        ← 40 assertions + the state ledger
    node pricecheck.js indonesia
    node priceledger.js --check               ← only if prices.js was touched
    rm the batch file, re-run node --check + pricecheck to prove the record survived
    present_files: wk_indonesia.js + the progress block

⚖️ **FOUR TRIGGERS, NOT ONE** — `/wow` the food · `/wk` World Kitchen completeness · `/tinza` the voice ·
`/bug` the code. Indonesia IS World Kitchen, so **`/wk` applies to every record** and `wowcheck.js`
now gates both mechanically. **Law 23: a card can pass `/wow` and still fail `/tinza`.**
👁️ Still Tina's eyes only, and `wowcheck` prints it every run: does the dish EARN ITS PLACE · is the moat
genuinely SURPRISING and the angle unreused · **is the method why-led** · dish-type make-or-breaks
(ferments need salt % + ambient temp + a safety note) · **`/tinza` — read it aloud, and if it sounds like
a database it fails.**

### ⛔ PRICES — GREP BEFORE ASKING, ALWAYS
**`node priceledger.js --ask <term>` BEFORE asking Tina for any price.** On 30 Jul she was asked for the
hon dashi price she had already given on 29 Jul, and a **duplicate `"dashi": 13`** was nearly shipped
where the last one wins silently. `--ask dashi` returns 🛑 ALREADY IN prices.js.
When she gives a price: **key it AND add a dated ledger entry in the same message.** Never deferred.

### ▶️ THE QUEUE — WOW ONLY. Tina, 30 Jul: "I want exciting recipes, not boring ordinary ones."
**CUT as googleable-generic: Mie Goreng · Semur · Pisang Goreng · Soto Ayam.** Famous-and-ordinary is the
trap because it *looks* like coverage. A slot is earned on technique or texture, not fame.

| # | dish | the WOW | authorability |
|---|---|---|---|
| **12** | **Gudeg** | young jackfruit stewed for hours to mahogany | ✅ `young jackfruit` R108 keyed |
| 13 | **Rujak** | fiery *savoury* fruit salad, palm sugar + terasi | ✅ `pineapple` R25 · green mango → `mango` R40 |
| 14 | **Tahu Gejrot** | fried tofu smashed in a mortar under a thin sharp sugar-chilli broth | ✅ all keyed |
| 15 | **Pepes Ikan** | a parcel that steams AND chars at once | ✅ `hake` R180 · ⛔ banana leaf in-method ONLY |
| 16 | **Bika Ambon** | yeast-*fermented* coconut cake, vertical honeycomb channels | ✅ `instant yeast` R90 · `sago flour` absent → `tapioca starch` R70 |

### ⛔ SPENT LEADS — 11. NEVER REUSE.
pecah minyak · dry-char + pestle-not-blender · bumbu brine into a porous centre · per-vegetable doneness
+ hot-water emulsion · absorb-then-steam rice · cold-dry-rice + ONE PORTION AT A TIME + kecap-down-the-
hot-side-at-the-END · fry-the-potato-before-mashing · two-zone fire + across-the-grain flat slices +
tight threading · solid-sugar-in-liquid-out + invisible seam + float-then-wait · cold protein gel +
salt-as-reagent + bare-simmer poach · nut-by-nut rejection + sieve + skim-to-a-clear-stock + it-is-a-soup.

### ⛔ SPENT MOATS — 11. NEVER REUSE AN ANGLE.
merantau/preservation · Columbian-exchange chilli · fermentation + the B12 half-myth (B12 is bacterial
co-inhabitants, NOT the mould) · the bumbu pecel dried brick · **Betawi = BATAVIA** (the "mixed/united"
folk etymology was caught and fixed) · rice food-safety (*Bacillus cereus* toxin is HEAT-STABLE, frying
does not rescue it) + kecap manis as a local invention · colonial ratio inversion + nutmeg's round trip
via Banda · **sosatie is this dish** + sate's regional forks (sate klathak on bicycle spokes) ·
2-acetyl-1-pyrroline (= jasmine rice + bread crust) + jajan pasar + the onde-onde naming collision ·
convergent protein-gel science (bakso = frankfurter = kamaboko) + *kenyal* + the starch arms race ·
*Pangium edule* as a fish poison + the buried-for-a-month detox where the colour is the receipt.

⛔ **OWNERSHIP:** peanut sauce is **Gado-Gado's**. Beef is **Rendang's**. Fermentation-as-nutrition is
**Tempe's**. Do not re-tell any of them.

### ⛔ PRICE LANDMINES — probe `wkPriceLookup` BEFORE authoring
- bare **`chilli`/`chillies` resolve PER COUNT at R1** → always write **`red chilli`** (→ chilli R80/kg)
- `palm sugar` and `coconut sugar` both fall to `sugar` R35, WRONG → use **`jaggery` R100**
- `candlenuts` ABSENT → **`macadamia nuts` R450** (SA-grown, standard substitute)
- `kaffir lime leaves`/`lime leaves` → `lime` R140 **WRONG** → in-method only
- **`banana leaves` → `banana` R32/kg** (leaf priced as fruit) → in-method only. Tina: not sold in SA
  unless you have a tree, "and it's quite common" → §29.1, **no key**
- 🔴 **THREE BANANA KEYS, THREE BEHAVIOURS:** `1 banana` → R2.50 count · **`120g banana` → also R2.50**
  (weight line taking a count price) · **`2 bananas` → `bananas` R25/kg = 5 cents.** Check which fires.
- `glutinous rice flour` → **`rice flour` R40**, not `rice` R27. A 🟠 review-class underprice, not a bug
- `mushroom` R165 and `mushrooms` R90 are BOTH live — **use the plural**
- ⛔ `instant noodles` R100/kg — **write it in GRAMS**, never "1 packet"
- ⛔ `bamboo skewers` R0.25 **each** — a COUNT key, so **write "4 bamboo skewers"**, never grams

### ✅ 12 KEYS ADDED 30 JUL, all Tina-sourced, all normalised in-file
`kecap manis` 260/L · `satay sauce` 350/L (narrow name on purpose, NOT `peanut sauce`) ·
`nasi goreng paste` 355/kg · `instant noodles` 100/kg · `semur spice mix` 510/kg (closed `spice mix`
R120, a quarter) · `bamboo skewer(s)_each` + `skewer(s)_each` 0.25 · `keluak`/`kluwek`/`kluwak` 2000/kg
(🟡 the 100g pack size is Claude's assumption, one word moves it) · `rawon spice mix`/`bumbu rawon`
680/kg (closed `spice mix` R120, a fifth).
⛔ **REFUSED, §29.1 fails loud:** `bakmi spice` (sachet is inside the Indomie packet) ·
`banana leaf/leaves` (a garden tree is not a bought product).
⛔ **`dashi` R13/L WAS ALREADY THERE since 29 Jul. CLOSED. DO NOT RE-ASK.**

### 📌 PUSH — Tina pushes HALFWAY, ~25/50, with the 3 wiring lines
1. `<script src="sections/wk_indonesia.js"></script>` in `index.html`
2. `window.WK_INDONESIA || [],` in `wkPool()` at `worldkitchen.js:58`
3. `WK_COUNTRY_GEO["Indonesia"]` — **already present**, `worldkitchen.js:80`. The silent one: without it
   records load into the pool and appear nowhere in navigation, with no error.
⚠️ Until that push GitHub holds none of it, and the handed-back files ARE the second copy. Risk accepted
deliberately 29 Jul — **do not re-raise it as a discovery.**

### 🩸 OPEN, AND WAITING ON TINA
- 🔴 **`/wk` §6 photo audit is NOT GREEN: 8 broken links, all CASE mismatches in `spice.js`**
  (`mayonnaise.jpg` vs `Mayonnaise.jpg`). Case-sensitive on live, so broken now, and it fails the
  pre-push gate. **Untouched: Stability Rule 1 — never edit a working section unless that is the session
  purpose.** Eight string cases, one edit, on her word.
- **38 A-or-B ingredient lines PRICE NOTHING** across Japan (3) and China (35) — `25g rock sugar (or
  white sugar)`, `300g silken or soft tofu`. Same family as China's 67 will-not-price count-on-weight
  lines. One mechanical sweep, no new prices.
- **176 prep-in-the-name lines** (JP 41 · CN 135) — defeats aliases and `_each` keys.
- **China §26 per-version `diet[]` debt**, all 50 records. ⚠️ Judgement per version, must NOT be
  auto-tagged — a vegan shown a pork dish is a harm. Converts at lane close.
- Drop Okonomiyaki's `aonori` 2g → 0.5g? (R56 → R14; the price is right, the quantity is the lever)
- Write A7's price-strike as a formal §31 amendment — applied in practice since 30 Jul, never written.
- Paste in **`RULING_32_THE_TWO_LEDGERS.md`** (ledgers) and **`THE_FOUR_TRIGGERS.md`**. ⚠️ Rulings file at
  origin stops at **§25** — §26–§32 are local only, so **paste blocks, never a rebuilt file** (bitten 6×).

### 🩸 CARRIED, MINE, NEVER ASKED OF TINA
China 67 will-not-price lines (`china-roast-duck` at coverage 0.31 — biggest coverage win left) ·
Europe 39 + SA 33 of the same class · count-vs-weight **direction B still has no mechanical rung**, incl.
the live `30g avocado` in `boerekos-gemsbok-stuffed-fillet` · **`japan-nukazuke` costPP R9·10·15 is
RULING-SET under §31.3c — EXCLUDE from any costPP sweep** (a blanket recompute reversed it twice) ·
8 Japan keys unsourced, none blocking a card · 3 soft merge warns on Japan where a budget fork is not
cheapest (takoyaki, nikujaga, chikuzenni), left as authored · `leftovers` has **no renderer** ·
merge.js FLESH list missing octopus + dashi · the vegan-mistag warn cannot see version deltas ·
the 🟠 REVIEW ledger ruling still unwritten.

**Start with record 12, Gudeg. One record, one bank.**
