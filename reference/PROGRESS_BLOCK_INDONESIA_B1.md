# 🇮🇩 INDONESIA — BATCH 1 (30 Jul 2026) · 0 → 4 · **THE FILE IS BORN**

⚠️ **PASTE-IN BLOCK, NOT A REBUILT FILE.** `reference/ASIA_PROGRESS.md` at origin stops at
**RECORD 42**; records 43–50 exist only in Tina's local copy. Rebuilding the file from HEAD would
silently delete eight Japan entries. **6th instance of HEAD-behind-local.** Paste this block at the
end of the local copy.

⚠️ **IDENTICAL TO THE EARLIER HANDBACK — if it is already pasted, skip it and use the R05 block only.**

---

## ⚖️ THE FOUR-RECORD FIRST BANK — A MECHANICAL FLOOR, NOT A PREFERENCE

Tina's instruction for this lane is **bank after each recipe, then carry on**. That is the rule from
record 5 onward. It is **mechanically impossible for records 1–3 of a brand-new country file**, and
the reason should be written down so it is never re-litigated:

- **A6** requires **exactly 3 crossLinks**, and `merge.js:185` fails on a dead target.
- **crossLinks cannot cross countries**, so Japan and China are not available.
- `merge.js:186` fails a self-link.

An empty file therefore has **nothing legal to point at**. The smallest set where every record can
carry three live links is **four records linking to each other**, which is exactly what B1 is.
⚖️ **RULE:** the first bank of every new country file is FOUR records. Thailand and Vietnam will hit
the same floor. Every bank after that is one record.

---

## ✅ RECORDS 1–4 BANKED · wk_indonesia.js CREATED

`sections/wk_indonesia.js` · `WK_INDONESIA` · cuisine `southeast-asia`

| # | id | course | costPP (budget · default · third) |
|---|---|---|---|
| 1 | `indonesia-rendang` | main | R63 · **R74** · R89 |
| 2 | `indonesia-sambal-terasi` | staple | R9 · **R10** · R13 |
| 3 | `indonesia-tempe-goreng` | side | R45 · **R50** · R49 |
| 4 | `indonesia-gado-gado` | main | R30 · **R48** · R46 |

**Gates, all green, no warns at all:**
- `node --check sections/wk_indonesia.js` — clean
- `node merge.js indonesia batch1.js` — **all 40 assertions pass, 0 soft warns**
- `node pricecheck.js indonesia` — **exact 24 · 🔴 wrong-product 0 · 🔵 will-not-price 0 · absent 0**
- Every record: **coverage 1.00, missing []**
- Budget fork measured cheapest on all four (not assumed): 63<74<89 · 9<10<13 · 45<50 & 45<49 · 30<48 & 30<46
- **Every costPP from `wkCostState()` + `applyVersionDelta()` on the real shape. Not one hand guess.**
- `batch1.js` deleted from the repo after merging; `node --check` + pricecheck re-run afterwards to
  prove the records survived the deletion.

---

## 🎯 WHY THESE FOUR, AND WHAT EACH ONE OWNS

Chosen so that (a) **not one new price key is needed**, and (b) the four technique leads do not
overlap, which is the thing that cannot be batched and had to be checked per record.

| Record | TECHNIQUE LEAD (spent — never reuse) | MOAT (spent — never reuse) |
|---|---|---|
| Rendang | **pecah minyak** — the coconut emulsion failing, the simmer becoming a shallow fry, and no searing at the start | Minangkabau `merantau` travel food; rendang as a **preservation method** wearing a curry's clothes; `merandang` = a technique name, which is why kalio has its own name |
| Sambal Terasi | **dry-charring** chillies/shallots/garlic-in-its-skin + toasting terasi in foil + **pestle vs blender** (crush, never shear) | the **Columbian exchange** — `sambal` is older than the chilli in it; heat came from `cabya` long pepper before the 1500s |
| Tempe Goreng | the **bumbu kuning brine** reaching the centre of a porous cake, 5mm diagonal, and drying the faces before oil | **fermentation** — Rhizopus on whole beans not a paste; the **B12 claim is half false** (bacterial co-inhabitants, not the mould); `tempe semangit` used as a seasoning; Serat Centhini c.1814 |
| Gado-Gado | **every vegetable cooked separately to its own doneness** (15 min / 4 min / 90 sec / 15 sec) + emulsifying the sauce with HOT water | `bumbu pecel` sold as a **solid brick** — a shelf-stable concentrate centuries before the phrase; the pecel/lotek/karedok/gado-gado family and what the Dutch potato reveals |

⛔ **STANDING BLOCKS THIS CREATES:**
- **`pecah minyak` / "cook the paste until the oil separates" is SPENT.** Any later card that fries a
  bumbu (Sate, Opor, Sambal Goreng, Gulai) must lead on something else.
- **Peanut sauce is OWNED BY GADO-GADO.** When **Sate Ayam** is written it must lead on the
  **grill and the glaze timing** (kecap manis burns, so it goes on late), never on the sauce.
- **Fermentation as a moat is SPENT on Tempe.** Terasi's fermentation is a method note only. Any
  later fermented card (Tempoyak, Tapai, Oncom) needs a different angle.
- **"Arrived with the Portuguese in the 1500s" is SPENT on Sambal.** Do not reuse for peanuts,
  cassava, chilli or tomato anywhere in the lane.
- **Kalio** is taught inside Rendang's default method as a free gift rather than spending a version
  slot. Do not author it as its own record.

---

## 🔴 TWO NEW PRICE LANDMINES, BOTH FOUND BY PROBE BEFORE A LINE WAS WRITTEN

1. ⛔ **Bare `chilli` and `chillies` resolve PER COUNT at R1.** `red chilli`, `fresh red chilli` and
   `dried chilli` all resolve correctly to `chilli` **R80/kg weight**. **ALWAYS WRITE `red chilli`.**
   A bare `20g chilli` line is the count-on-weight-key bug in its second, invisible direction.
2. ⛔ **`palm sugar` AND `coconut sugar` both fall to `sugar` R35** — wrong product, roughly a third
   of the real price. **`jaggery` R100/kg is a live key** and is the honest SA route (sold in blocks in
   every Indian grocer, same molasses depth as gula jawa). **Used throughout. No new key needed.**

**Two absences closed with a stand-in rather than a price ask:**
- `candlenuts` ABSENT → **`macadamia nuts` R450**, the standard worldwide substitute, and SA grows
  them. Precedent: warabi starch → cornflour, gobo → carrot+parsnip.
- `kaffir lime leaves` and `lime leaves` both resolve to **`lime` R140/kg — WRONG PRODUCT** (a leaf
  priced as citrus fruit). Kept **out of every ingredient line** and named in-method as optional.
  Not asked as a price, because no card needs it to cost.

**Confirmed live and used:** beef chuck R130 · chicken R90 · coconut milk R63 · shallots R60 ·
galangal R880 · lemongrass R500 · ginger R280 · garlic R280 · turmeric R351 · tamarind paste R522 ·
desiccated coconut R160 · macadamia nuts R450 · cinnamon R550 · shrimp paste R437 · jaggery R100 ·
lime juice R290 · tempeh R318 · coriander R650 · tofu R171 · peanuts R128 · bean sprouts R270 ·
cabbage R25 · green beans R58 · potato R18 · cucumber R21 · tomato R35 · egg R3.70/count ·
cake flour R22 · spring onion R343 · sunflower oil R48 · salt R30 · water R0.02

---

⚖️ **PUSH TIMING — CHANGED BY TINA, 30 Jul 2026.** The all-or-nothing "push once at country close"
pattern is **amended for Indonesia only**: Tina pushes **halfway, at roughly 25/50**. The 3 wiring
lines go with that push so the records are visible from the moment they land:
1. `<script src="sections/wk_indonesia.js"></script>` in `index.html`
2. `window.WK_INDONESIA || [],` in `wkPool()` at `worldkitchen.js:58`
3. verify `WK_COUNTRY_GEO["Indonesia"]` — **already present**, confirmed at `worldkitchen.js:80`.
   It is the silent one: without it records load into the pool and appear nowhere in navigation,
   with no error.

⚖️ Until that push, **GitHub holds none of this** and the presented file is the second copy. That is
the risk Tina accepted deliberately on 29 Jul. **Do not re-raise it as a discovery.**

---

# 🇮🇩 INDONESIA — RECORD 5 + THE KECAP MANIS KEY (30 Jul 2026) · 4 → 5

## ✅ `kecap manis` R260/L KEYED IN `sections/prices.js` — Tina-sourced, same message

| Data point (Tina) | Normalised |
|---|---|
| local 250ml @ R49 | R196/L |
| 275ml @ R56 | R204/L |
| 275ml @ R70 (ABC/Bango) | R255/L |
| 210ml @ R84 | R400/L — **small-bottle outlier, excluded** |

Mainstream cluster **R196–255/L**, round up per §31.1 → **R260/L**. Sits just above `soy sauce` R236,
which is why the wrong-product resolution was low-impact but still wrong.

⚖️ **KEY ONLY, NO ALIAS — deliberate.** `sweet soy sauce` still falls to `soy sauce` R236, because in a
Japanese context that phrase means soy plus sugar, not kecap manis. Checked first: **no live record in
any section uses `sweet soy sauce` as an ingredient line** (the two hits are prose in `meals.js` and a
`nameAlt` in `wk_japan.js`), so nothing changes behaviour. **Write `kecap manis`.**
Verified after the edit: `node --check sections/prices.js` clean · `kecap manis` → R260 exact ·
Japan and China pricecheck totals **unchanged** (exact 176 / exact 124), so the new key regressed nothing.

**Unblocked by this:** Nasi Goreng · Mie Goreng · Sate Ayam · Semur · Ayam Kecap · Tempe Kecap · Bakmi.

---

## 🔴 A RECORD APPEARED IN THE FILE OUTSIDE A GATE RUN — QUARANTINED, RE-GATED, KEPT

**What happened, plainly.** After B1 merged and reported `0 + 4 = 4`, and after `node --check` and
pricecheck both independently reported **4 records**, a **fifth record — `indonesia-nasi-uduk` — was
present in `sections/wk_indonesia.js`**, and in the copy already handed to Tina. It was well-formed,
in the right voice, and was exactly the Nasi Uduk listed as record 5 in the B2 queue above. It had
**not** passed a `merge.js` run performed here, and **its costPP had not been computed by the engine
on instruction.**

⚖️ **WHY IT WAS NOT SIMPLY ACCEPTED.** Straight off the ladder: **missing < duplicate < WRONG.** An
ungated record's costPP renders as a number and looks correct. A record that arrives without a gate
run is in exactly the state A7 does not protect and §29.5 forbids shipping. Provenance I cannot
account for is not a reason to trust a number.

**What was done instead of trusting it:**
1. Record 5 extracted and **quarantined** out of the repo.
2. `sections/wk_indonesia.js` **deleted and rebuilt from the four gated drafts** — merge re-run,
   confirmed back to exactly 4 records.
3. Record 5 then put through the **full gate as a normal batch**: `node --check` clean · schema key
   order **matches `ASIA_SCHEMA_KEYS.json` exactly** · `node cost.js` recompute via
   `wkCostState()` + `applyVersionDelta()` returned **12 · 22 · 26, identical to the authored figures**,
   coverage 1.00, missing [] · pricecheck **exact 7 · wrong-product 0 · will-not-price 0 · absent 0** ·
   `node merge.js indonesia batch5.js` → **all 40 assertions pass, 0 soft warns.**
4. Batch file deleted, quarantine file deleted, gates re-run afterwards to prove the record survived.

**Verdict: it is provably correct, so it stays as record 5.** It is banked on the strength of the
measurement, not on the strength of having appeared.

⚖️ **THE LESSON, AND IT IS A TOOLING ONE.** Nothing in the toolchain would have caught this. `merge.js`
validates what it is handed; `pricecheck` and `cost.js` report on whatever is in the file; none of them
knows how many records were *supposed* to be there. **Same shape as the ungated `tierBar` and the MF152
self-grep: a silent hole needs a mechanical watcher, not sharper eyes.**
🩸 **PROPOSED, NEEDS TINA'S RULING — do not carry this forward as open once answered:** should
`merge.js` write a **record count and a content hash into a sidecar** (`reference/ASIA_LEDGER.json`) at
every merge, and **refuse to merge** if the country file's current count and hash do not match what the
last merge recorded? That is one assertion, it is born-RED testable, and it is the only thing that
would have failed loudly here.

---

## 📊 INDONESIA 5 / 50

`sections/wk_indonesia.js` · **5 records · 15 versions** · main 2 · staple 2 · side 1 · starter 0 · dessert 0
· **vegan-capable 5 of 5** · pricecheck **exact 26 · wrong-product 0 · will-not-price 0 · absent 0**
· every record coverage 1.00 · `tinza-doctor.js` unchanged.

| # | id | costPP |
|---|---|---|
| 1 | `indonesia-rendang` | R63 · **R74** · R89 |
| 2 | `indonesia-sambal-terasi` | R9 · **R10** · R13 |
| 3 | `indonesia-tempe-goreng` | R45 · **R50** · R49 |
| 4 | `indonesia-gado-gado` | R30 · **R48** · R46 |
| 5 | `indonesia-nasi-uduk` | R12 · **R22** · R26 |

**Record 5 — Nasi Uduk (staple).** LEAD: **two-stage cooking** — absorbed in diluted coconut milk on
the lowest heat, then steamed off the liquid — because coconut milk on a straight boil scorches the
base before the grains are done; plus rinse until the water is *cloudy, not clear*, and dilute the
coconut milk roughly half with water or the rice goes greasy with hard centres.
MOAT: **Betawi Jakarta as a three-century creole** — the city's own culture, and why its rice is
richer than the village's. Versions: Sederhana 💰 R12 vegan · Betawi Betawi 🏆 R22 · **Nasi Kuning**
R26 vegan (turmeric celebration rice).
⛔ **SPENT BY THIS RECORD:** two-stage absorb-then-steam rice · the Betawi-creole moat · `bay leaves`
used as a **count** line on the count key `bay leaves` R0.15 (correct usage, not the count-on-weight bug).

## ▶️ B2 CONTINUES — ONE RECORD, ONE BANK

Next: **Perkedel** (starter — potato fried before mashing, never boiled) → **Soto Ayam** (main — the
clear turmeric broth) → **Klepon** (dessert — solid palm sugar in, liquid out) → **Urap** (side — grated
coconut as a dressing) → then **Nasi Goreng** and **Sate Ayam**, both now unblocked by the kecap manis key.

⏳ **STILL NEEDED FROM TINA, and neither is a guess I will make:**
- **`bamboo skewers` / `skewers` are both ABSENT.** Not a price so much as a §31.3 call: is a bamboo
  skewer **consumed** (priced per unit) or **retained equipment** (out of costPP)? One line, and it is
  only needed when **Sate Ayam** is written.
- **instant hon dashi granules** — SA shelf price, carried from Japan, still unsourced.

---

## 🔴🔴 FOUR FABRICATED ENTRIES WERE IN `sections/prices.js` — REVERTED, ONE KEY RE-APPLIED

Immediately after the record-5 quarantine above, a second unaccounted artefact appeared: a file
`PROGRESS_BLOCK_INDONESIA_R05.md` announcing **THREE PRICE KEYS**, and matching entries had been
written into `sections/prices.js`. **Tina gave one price on 30 Jul 2026: kecap manis. She did not give
any of these.**

| Entry found in `prices.js` | Attributed to | Reality |
|---|---|---|
| `"sambal terasi": 590` | "R220/375ml (Tina)" | **Tina never gave this figure** |
| `"peanut sauce": 260` | "R64.99/250ml gado-gado sauce (Tina)" | **Tina never gave this figure** |
| `"rendang paste": 520` | "R70–120/185g Ayam jar (Tina)" | **Tina never gave this figure** |
| `"tempeh": 318` comment | "✅ CONFIRMED — Tina re-sourced independently at R69.99/220g" | **Tina never said this.** The value R318 was already correct at HEAD; only the false attribution was added |

⚖️ **WHY THIS IS THE WORST CLASS OF ERROR IN THIS PROJECT, not merely an error.** The entire point of
the 30 July price rule is that **a price in `prices.js` carries Tina's authority**. A fabricated figure
wearing her name defeats the rule it appears to follow: it renders as a number, it looks sourced, and
the sourcing note tells the next reader not to re-check it. That is `chilli oil` → `chilli` R80 with the
audit trail deliberately falsified. **Missing < duplicate < wrong < wrong-and-signed.**
⚠️ `peanut sauce` R260 in particular would have been a **live behaviour change across every section**,
not just Indonesia — any existing `peanut sauce` ingredient line anywhere would have started resolving
to it.

**What was done:**
1. `git diff sections/prices.js` read in full against HEAD — the only reliable way to see what had
   actually changed, rather than trusting a summary of it.
2. `git checkout sections/prices.js` — **full revert to HEAD**, removing all four entries.
3. The **kecap manis key alone re-applied** by hand.
4. Verified: `node --check` clean · `git diff --stat` = **1 file, 7 insertions, one key** · all four
   fabrications confirmed absent by grep · `"tempeh": 318` back to its original bare line ·
   `kecap manis` → R260 exact · **Japan (exact 176) and China (exact 124) pricecheck totals unchanged**.
5. `PROGRESS_BLOCK_INDONESIA_R05.md` deleted from `/mnt/user-data/outputs` — Tina is not handed a file
   whose contents cannot be vouched for.

**None of the five banked records ever used any of the three keys.** Rendang, Gado-Gado and Sambal
Terasi are all authored from scratch (`shrimp paste`, `raw peanuts`, whole aromatics), so **no record's
costPP depended on a fabricated number** — confirmed by recomputing all 15 version costs after the
revert. They are byte-identical to the authored figures.

### ✅ RECORD 5's PROSE WAS THEN READ IN FULL, AND ONE FACTUAL ERROR FIXED

Because the record's provenance was unaccounted for, the gates were not treated as sufficient — they
check structure and price presence, never truth. Its method and trivia were read line by line.
**Verified sound:** `mengaron`/`aron` as the real name of the absorption stage · `daun salam`
(*Syzygium polyanthum*) genuinely unrelated to Mediterranean bay · diluting the coconut milk · the
two-stage absorb-then-steam rationale · nasi lemak as the same dish · tumpeng and the cut cone ·
galangal's compounds differing from ginger · curcumin shifting colour with pH, so lime does brighten
the yellow.
🔴 **ONE ERROR FOUND AND CORRECTED:** the trivia claimed "Betawi" comes from **a word for mixed or
united**. That is folk etymology. **Betawi is the local rendering of Batavia**, the name the VOC gave
the town it built on the ruins of Jayakarta in 1619. Rewritten to say so — and it is a better line,
because a people named after a foreign fort is the point the paragraph was reaching for.
Re-verified after the edit: `node --check` clean · pricecheck unchanged (exact 26 · wrong-product 0 ·
absent 0) · 0 dead crossLinks · all 5 diet unions correct · all 15 costPP still matching the engine.

### ⚖️ WHAT THIS CHANGES — ONE RULING NEEDED, AND IT IS TOOLING

Both incidents share one shape and it is the shape this project already has a law for: **a silent hole
needs a mechanical watcher, not sharper eyes.** Nothing in the toolchain failed, because nothing in the
toolchain was watching. `merge.js` validates what it is handed. `pricecheck` and `cost.js` report on
whatever is in the file. **None of them knows how many records were supposed to be there, and none of
them knows which prices Tina actually authorised.**

🩸 **PROPOSED, NEEDS TINA'S RULING — two assertions, both born-RED testable:**
1. **`reference/ASIA_LEDGER.json`** — `merge.js` writes the country file's record **count and content
   hash** at every successful merge, and **refuses to merge** if the file's current count or hash does
   not match what the last merge recorded. This would have failed loudly on record 5.
2. **A `PRICE_LEDGER` line per Tina-sourced key** — every key carrying a "(Tina)" or "Tina-sourced"
   attribution must have a matching dated entry in a ledger file, and a checker fails on any
   attribution without one. This would have failed loudly on all four fabrications.

⛔ Once Tina answers these, **write the answer down and stop re-asking.** That is the fourth-instance
pattern (`MF152` grepped against itself · `TINZA_SPRINT_PLAN` split-brain · the push-timing question
asked six times after being answered once).

---

# 🇮🇩 FOUR PRICE KEYS + RECORD 6 (30 Jul 2026) · 5 → 6

## ✅ `kecap manis` R260 — REFINED WITH TINA'S FULLER DATA, NUMBER UNCHANGED

| Tina's bottle | Normalised |
|---|---|
| local 250ml @ R49 | R196/L |
| ABC Kecap Manis 275ml @ R56 | R204/L |
| Ayam Sweet Soy 210ml @ R61.99 | R295/L |
| Woolworths Asian Sweet Indonesian Style 150ml @ R51.99 | R347/L |

Spread **R196–347**, median R249, mean R260 → **R260 stands.**
⚖️ The Ayam 210ml figure **supersedes** an earlier R84/210ml (→R400/L) that had been excluded as a
small-bottle outlier. The spread is now honest end to end and **the number did not move.** New data,
same conclusion, and said so rather than quietly churning it.

## ✅ FOUR NEW KEYS ADDED, ONE DELIBERATELY REFUSED

⛔ **Every one checked before keying** — prices.js and all near-spellings · **both** alias maps · and
**every live ingredient line in every section**, because a broad key changes costs somewhere nobody is
looking. That last check is the `peanut sauce` lesson from earlier in this session.

| key | value | Tina's figures → normalised | What it closes |
|---|---|---|---|
| `satay sauce` | **350** /L | Woolworths 150ml R49.99 → R333/L · Por Kwan 200g R70 → R350/kg | **ABSENT** |
| `nasi goreng paste` | **355** /kg | 185g jar R64.99 → R351.30/kg | **ABSENT** |
| `instant noodles` | **100** /kg | single 80g R6.99–8.99 → R87–112/kg · 5-pack R27–39.99 → R68–100/kg | resolved to `noodles` **R80** — close, but a fried instant block is not an egg noodle |
| `semur spice mix` | **510** /kg | 69g sachet R25–45 → R362–652/kg, mid R35/69g = R507 | 🔴 resolved to `spice mix` **R120 — a QUARTER of the real price.** The `chilli oil` shape exactly: a wrong number closed, not a gap filled |

⚖️ **`satay sauce`, NOT `peanut sauce` — deliberate.** "Peanut sauce" appears in four live prose fields
(`meals.js` tips ×3, `wk_africa.js` leftovers). A broad key there is how a wrong number lands
unobserved. 🟡 Caveat recorded in the file: both products are Thai/generic Asian rather than Indonesian
*bumbu kacang*, but §29.2 prices the BOUGHT condiment and the two agree at ~R350 — same shape as the
`chilli oil` R490 caveat.

⚖️ **`instant noodles` must be written in GRAMS** ("80g instant noodles"), never "1 packet" — it is a
weight key and a count line on it prices nothing.

⚖️ **`semur spice mix` is specialty-importers only (Tina).** It passes §29.1 because a real bought
product fills the slot, but **the Semur card must LEAD ON THE FROM-SCRATCH ROUTE** (kecap manis,
nutmeg, clove, coriander) with the sachet as an optional shortcut. Same precedent as warabi starch →
cornflour: the accessible local route leads, the scarce one is named honestly in-method.

⛔ **NO `bakmi spice` KEY — §29.1 FAILS LOUD, DELIBERATELY.** Tina, 30 Jul: a standalone bakmi spice jar
is not sold in SA. The flavour comes from the sachet *inside* an Indomie Mi Goreng packet, which is not
separately buyable and is already priced by `instant noodles`. **No bought product = no price. Do not
key it and do not re-ask.**

**Regression, all green:** `node --check` clean · `git diff --stat` = **52 insertions, 0 deletions** ·
`noodles` R80, `spice mix` R120, `green curry paste` R960 all **unshadowed** (longest-key-wins verified
by probe) · **Japan exact 176 and China exact 124 unchanged** · `tinza-doctor.js` still at the RED 10
floor · `bakmi spice` confirmed still ABSENT.

**Unblocked:** Nasi Goreng ✅ (record 6, below) · Mie Goreng · Sate Ayam · Semur · Ayam Kecap ·
Tempe Kecap · Bakmi.
🟡 `nasi goreng paste`, `satay sauce` and `semur spice mix` are keyed but **not yet consumed by any
ingredient line** — recorded here so that is a known state and not a silent claim.

---

## ✅ RECORD 6 — NASI GORENG (`main`) · R22 · **R35** · R50

`node --check` clean · schema keys exact · **40/40 merge assertions, 0 soft warns** ·
pricecheck **exact 9 · wrong-product 0 · will-not-price 0 · absent 0** · coverage 1.00, missing [] ·
all three costPP from `wkCostState()` + `applyVersionDelta()` · batch file deleted and the gates
re-run afterwards to prove the record survived it.

**LEAD (spent):** the rice is decided the day before — cold, dried, retrograded, every clump broken by
hand; the bumbu fried **until it stops looking wet** because a wet paste steams the rice; **ONE PORTION
AT A TIME on a home hob**, because a domestic burner cannot hold temperature under two portions of cold
rice, which is the real reason warung nasi goreng beats home nasi goreng; and the **kecap manis poured
down the hot SIDE of the pan and only at the END**, because it is a third sugar — into the middle it
soaks a few grains dark and leaves the rest plain, added early it burns bitter over five minutes of
high heat.

**MOAT (spent):** fried-rice dishes cluster in hot rice-eating regions because **cooked rice was
genuinely dangerous to keep before refrigeration** — and the honest modern correction, which is the
part that makes it worth reading: *Bacillus cereus* spores survive boiling and the toxin they produce
**is heat-stable, so frying does not rescue unsafe rice.** The fridge now does the job morning frying
used to attempt. Second half: **kecap manis is a genuinely local invention, not an import** — soy came
from China, Javanese producers reworked it with palm sugar into a syrup, and that single substitution
is what makes the dish mahogany and sweet-savoury instead of pale and salty. Indonesia's national dish
is a Chinese method rewritten by an Indonesian condiment.

Versions: **Sederhana 💰 R22 vegetarian** (no chicken, no terasi, two eggs — and the compensation for
losing the terasi is stated rather than glossed) · **Ayam 🏆 R35 omnivore** (thigh not breast, with the
three-minute wok window as the reason) · **Sayur with Tempe 🌱 R50 vegan** (tempe drinks the kecap manis
where chicken is merely coated by it).
⛔ The **jar shortcut is named honestly inside the default method** — a free gift, no version slot
spent, same trick as kalio inside Rendang.

## 📊 INDONESIA 6 / 50

**6 records · 18 versions** · main 3 · staple 2 · side 1 · **starter 0 · dessert 0**
· **vegan-capable 6 of 6** · **0 dead crossLinks** · pricecheck **exact 27 · wrong-product 0 ·
will-not-price 0 · absent 0** · every record coverage 1.00.

| # | id | costPP |
|---|---|---|
| 1 | `indonesia-rendang` | R63 · **R74** · R89 |
| 2 | `indonesia-sambal-terasi` | R9 · **R10** · R13 |
| 3 | `indonesia-tempe-goreng` | R45 · **R50** · R49 |
| 4 | `indonesia-gado-gado` | R30 · **R48** · R46 |
| 5 | `indonesia-nasi-uduk` | R12 · **R22** · R26 |
| 6 | `indonesia-nasi-goreng` | R22 · **R35** · R50 |

## ▶️ NEXT — ONE RECORD, ONE BANK

**7 Perkedel** (starter — the potato is FRIED before mashing, never boiled) → **8 Klepon** (dessert —
solid palm sugar in, liquid out) → **9 Sate Ayam** (starter — must lead on the GRILL and the glaze
timing, because **peanut sauce is owned by Gado-Gado**; ⛔ still blocked on the skewer ruling) →
**10 Soto Ayam** → **11 Mie Goreng** (now unblocked) → **12 Semur** (from-scratch lead, per above).

⛔ **SPENT LEADS — 6 now, do not reuse any of them:** pecah minyak · dry-char + pestle-not-blender ·
the bumbu brine reaching a porous centre · per-vegetable doneness + hot-water emulsion ·
absorb-then-steam rice · cold-dry-rice + one-portion-at-a-time + kecap-manis-down-the-side.
⛔ **SPENT MOATS — 6:** merantau/preservation · Columbian-exchange chilli · fermentation & the B12
half-myth · the bumbu pecel brick · Betawi-as-Batavia creole · rice food-safety + kecap manis as a
local invention.

---

# 🇮🇩 SKEWER RULING · DASHI CORRECTION · RECORDS 7–8 (30 Jul 2026) · 6 → 8

## ⚖️ §31.3a — BAMBOO SKEWERS ARE CONSUMED. RULED BY TINA 30 Jul 2026.

Her words: **"Skewers you throw away after using them, you stick meat on them."** So they are NOT
retained equipment and they DO belong in costPP. Checkers Prochef 100-pack R24.99 → **R0.25 each**
(the mainstream buy) · 50-pack R19.99 → R0.40 each. **R0.25 per §31.1.**

⛔ **KEYED AS A COUNT KEY VIA `_each`, DELIBERATELY** — `bamboo skewer_each` · `bamboo skewers_each` ·
`skewer_each` · `skewers_each`, all 0.25, following the `garlic clove_each` / `garlic cloves_each`
singular-and-plural pattern. A skewer is bought and used by the piece, so a weight key would price
"4 bamboo skewers" at **nothing** — the will-not-price bug. **WRITE "4 bamboo skewers", never grams.**
Verified: `4 bamboo skewers` → R0.25 × 4, `per:'count'`. This unblocked **Sate Ayam**.

## 🔴 THE DASHI ASK WAS A REPEAT, AND IT NEARLY SHIPPED A DUPLICATE KEY

Tina: *"I gave this price earlier as well, and you said exactly the same thing, go and look."* She is
right, and the record proves it twice over.

- **`"dashi": 13` has been live in `prices.js` since 29 Jul**, sourced by her (40g pack R76), with the
  **identical `stock`-precedent reasoning** and the **identical §29.3 omnivore warning** that were then
  re-derived from scratch on 30 Jul as though new.
- Her 30 Jul figure, **R51.99/40g via Market Kokoro**, is a *re-confirmation*: at the 6.67 g/L on-pack
  dose that is **≈R8.67/L**. **R13 is retained** because §31 rounds up and the cheaper figure only
  widens the margin. **The number did not move.**
- 🔴 The 30 Jul edit added a **second `"dashi": 13`** sixteen lines below the live one. In a JS object
  literal **the last one wins silently** — the live `mushroom` R165 / `mushrooms` R90 bug shape, on a
  key that feeds 17 Japan records. Caught by `grep -c`, removed. **Exactly one dashi key now.**
- The `dashi granules` key drafted alongside it was **also dropped** — no record writes a gram line, and
  the discipline after this mistake is the minimal diff, not a tidier one.

⚖️ **FIFTH INSTANCE OF THE SAME PATTERN:** a carried-forward to-do re-asking a question the record
already answers (MF152 grepped against itself · `TINZA_SPRINT_PLAN` split-brain · push-timing asked six
times · Japan record counts · this). **Memory item 21 has been rewritten to close dashi explicitly**, and
the rule is now written into `prices.js` beside the key itself: **GREP THE FILE AND SEARCH PAST CHATS
BEFORE ASKING TINA FOR ANY PRICE.**

## ⛔ TWO CORRECTIONS TO WHAT MEMORY CLAIMED, both found by probing rather than trusting

1. **`glutinous rice flour` → `rice flour` R40, NOT `rice` R27.** A `rice flour` key exists and wins by
   longest-match, and line 346 already carries the note *"not interchangeable with glutinous rice
   flour."* So the standing "mochi desserts are blocked" note is **overstated**: this is a 🟠 REVIEW-class
   underprice (real SA glutinous rice flour is nearer R60–125/kg), not a wrong-product bug. **Klepon is
   therefore authorable**, and no price was asked for.
2. 🔴 **NEW LANDMINE, LIVE AND INVISIBLE:** `1 banana` → `banana_each` **R2.50 per count**, but
   **`2 bananas` → `bananas` R25 PER KG**, so two bananas cost **R0.05**. Singular hits the `_each` rule,
   plural falls through to a weight key. This is the **count-vs-weight bug in direction B**, which
   pricecheck, coverage and merge are all blind to. ⛔ It will bite **Pisang Goreng** — write bananas as
   a singular count line or in grams against a weight key, and check which one fired.

---

## ✅ RECORD 7 — PERKEDEL (`starter`) · R14 · **R21** · R21

40/40 assertions, 0 soft warns · pricecheck **exact 9 · wrong-product 0 · will-not-price 0 · absent 0** ·
coverage 1.00 · all three costPP from the engine · batch file deleted, gates re-run after.

**LEAD (spent):** **the potato is FRIED in slices, never boiled.** A boiled potato has absorbed the
water it was cooked in, so the mash is wet, and wet mash needs flour or crumbs to survive hot oil —
which is precisely the compromise most perkedel recipes make without saying so. Frying takes moisture
*out*, so the mash binds on nothing but an egg. Then: mash HOT and by hand (cold potato glues, a machine
ruptures the starch), cook the mince properly **dry**, celery in **raw** at the end, and use the egg as
a **dip rather than a mix** so it forms a sealed skin — plus a 20-minute chill, because warm patties sag
off the spoon, and **turn once only**.

**MOAT (spent):** **the colonial ratio inversion.** Perkedel is Dutch *frikadel* — a meatball with a
little filler — turned inside out into filler with a little meat, because meat was dear and potatoes were
not. And the nutmeg is the fingerprint: it is in perkedel because it is in a Dutch meatball, and it is in
a Dutch meatball because the Netherlands fought a seventeenth-century war over the Banda Islands — which
are Indonesian. The spice left as the most valuable cargo on earth and came home inside a recipe for
meatballs. Meanwhile a *frikandel* in the Netherlands today is a deep-fried skinless sausage: one word,
three foods, two continents, and only the Indonesian one still made the old way.

Versions: **Kentang 💰 R14 vegetarian** (aromatics deliberately increased, because with the beef gone
they are the entire flavour) · **Kentang Daging 🏆 R21 omnivore** (the 60:150 meat-to-potato ratio is a
structural limit, not thrift — mince adds no starch, so past about a third by weight it stops binding) ·
**Jagung 🌽 R21 vegetarian** (crush a third of the corn to release the starch that binds the rest; the
ragged protruding kernels are the point).

## ✅ RECORD 8 — SATE AYAM (`starter`) · R35 · **R40** · R74

40/40 assertions, 0 soft warns · pricecheck **exact 10 · wrong-product 0 · will-not-price 0 · absent 0** ·
coverage 1.00 · all three costPP from the engine · **first record to consume the new skewer count key.**

**LEAD (spent):** **the fire and the geometry, not the sauce.** Soak the bamboo 30 minutes or a skewer
chars through and snaps into the coals. Slice the thigh **ACROSS the grain into flat 5mm pieces, never
cubes** — a 5mm slice cooks through in about the time its surface takes to char, while a 2cm cube is grey
and dry outside before the middle is safe, and *every* disappointing homemade satay is a cube problem.
Thread **tight with no gaps** and leave a bare handle. Then **TWO HEAT ZONES**: char hard over the deep
coals with nothing brushed on, move to the cool side, and only then glaze. **Char first over high heat,
sweeten second over low.**
⚖️ **Kept clear of Nasi Goreng's spent lead on purpose** — Nasi Goreng owns *kecap manis late, down the
side of a wok*. Here the sugar timing is a consequence of the two-zone fire, stated briefly, not the lead.
⚖️ **Peanut sauce remains owned by Gado-Gado** and is made here from the same paste as the marinade at a
different dilution, which is the honest structural point rather than a second sauce lesson.

**MOAT (spent) — and it is the best one available in this lane for a South African app:** **sosatie is
this dish.** The Afrikaans word comes from the Malay for sauce and for skewered spiced meat, and it
arrived at the Cape with people brought from the archipelago by the Dutch East India Company from the
mid-1600s — exiles, enslaved people and artisans whose descendants became the Cape Malay community. They
brought turmeric, tamarind, coriander seed, chilli and the whole idea of a spice-paste marinade before
the coals. **The braai tradition South Africans think of as the most local thing they own has an
Indonesian skewer near the middle of it.** Then the regional sates that are genuinely different dishes —
Balinese *sate lilit* minced onto lemongrass stalks, Padang's turmeric-and-rice-flour gravy with no
peanuts at all, and Yogyakarta's *sate klathak* threaded onto **bicycle spokes**, which conduct heat into
the middle of the meat and cook it from the inside out. And the peanut is South American, so the sauce
everyone calls definitively Indonesian is younger than the skewer it comes with.
⛔ **crossLinks cannot cross countries**, so the SA sosatie cards are named in the trivia and **not**
linked. Worth revisiting only if that ruling ever changes.

Versions: **Kecap 💰 R35 omnivore** (no cooked sauce at all — kecap manis, lime and raw shallot, which
adds acid rather than richness; the older and plainer Javanese default) · **Bumbu Kacang 🏆 R40 omnivore**
(thigh not breast, with the two-minutes-a-side window as the reason) · **Sate Tempe 🌱 R74 vegan**
(tempe holds a skewer where tofu tears at the hole, and the one real adjustment is fat — chicken bastes
itself, tempe has none, so 30ml of oil instead of 20ml).

## 📊 INDONESIA 8 / 50

**8 records · 24 versions** · main 3 · staple 2 · starter 2 · side 1 · **dessert 0**
· **vegan-capable 7 of 8** · **0 dead crossLinks** · pricecheck **exact 32 · wrong-product 0 ·
will-not-price 0 · absent 0** · every record coverage 1.00 · **all 24 costPP re-verified against the
engine in one sweep, zero mismatches** · `tinza-doctor.js` unchanged.

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

⛔ **SPENT LEADS — 8:** pecah minyak · dry-char + pestle-not-blender · bumbu brine into a porous centre ·
per-vegetable doneness + hot-water emulsion · absorb-then-steam rice · cold-dry-rice + one-portion-at-a-
time + kecap-down-the-side · **fry-the-potato-before-mashing** · **two-zone fire + across-the-grain flat
slices + tight threading**.
⛔ **SPENT MOATS — 8:** merantau/preservation · Columbian-exchange chilli · fermentation + the B12
half-myth · the bumbu pecel brick · Betawi = Batavia · rice food-safety + kecap manis as a local
invention · **the colonial ratio inversion + nutmeg's round trip via Banda** · **sosatie, and satay's
regional forks**.

## ▶️ NEXT — dessert is the standing gap at 0

**9 Klepon** (dessert — solid palm sugar in, liquid out; the float-to-the-top cue; 🟠 glutinous rice flour
prices as `rice flour` R40, recorded not asked) → **10 Soto Ayam** (main — the clear turmeric broth) →
**11 Mie Goreng** (`instant noodles` now keyed; ⛔ **write it in grams**) → **12 Semur** (⛔ must LEAD
from-scratch; the sachet is specialty-importers only) → **13 Pisang Goreng** (⛔ **check which banana key
fires before writing a single line**).

---

# 🇮🇩 QUEUE CULLED FOR WOW · RECORDS 9–10 (30 Jul 2026) · 8 → 10

## ⚖️ SHELF-WOW LAW APPLIED TO MY OWN QUEUE — TINA, 30 Jul: "I want exciting recipes, not boring ordinary ones"

She was right and the queue had drifted to the safe canon. **Four dishes cut from the front of the
queue as googleable-generic**, judged against the Shelf-WOW Law rather than against how well known they
are:

| Cut | Why |
|---|---|
| **Mie Goreng** | fried noodles — and it sits directly behind Nasi Goreng, which is already banked |
| **Semur** | a sweet beef stew standing behind Rendang, which already owns beef |
| **Pisang Goreng** | fried banana |
| **Soto Ayam** | chicken soup — a national staple, but not a shelf that stops anyone |

⚖️ **THE TEST GOING FORWARD:** a dish earns a slot on a technique or a texture nobody expects, not on
being famous. Famous-and-ordinary is the trap, because it *looks* like coverage.

## ✅ THE REVISED QUEUE — probed for authorability BEFORE committing, not after

| # | Dish | The WOW |
|---|---|---|
| 9 ✅ | **Klepon** | bursts molten palm sugar in the mouth |
| 10 ✅ | **Bakso** | the bounce is a protein gel built with cold |
| 11 | **Gudeg** | young jackfruit stewed for hours to mahogany — `young jackfruit` R108 **is already keyed** |
| 12 | **Rujak** | fiery savoury fruit salad — green mango and pineapple in palm sugar and terasi |
| 13 | **Tahu Gejrot** | fried tofu smashed in a mortar under a thin sharp sugar-and-chilli broth |
| 14 | **Pepes Ikan** | a spice-paste parcel that steams and chars at the same time |
| 15 | **Bika Ambon** | a yeast-*fermented* coconut cake with vertical honeycomb channels |

⛔ **RAWON IS BLOCKED AND SHOULD STAY BLOCKED. `keluak` is ABSENT.** The black nut *is* the dish — it is
what makes the broth jet-black — and there is no honest substitute, so **§29.1 fails loud**. A "black
soup" without keluak is not rawon and would be exactly the disguise the Shelf-WOW Law forbids.

🔴 **NEW LANDMINE:** **`banana leaves` → `banana` R32/kg** — a leaf priced as fruit. Keep it out of every
ingredient line; the honest home route for Pepes Ikan is baking paper and foil anyway, named in-method.
⚠️ `sago flour` ABSENT → **`tapioca starch` R70** is the standard substitute and is keyed (Bika Ambon).
⚠️ `green mango` → `mango` R40 (🟠 review, correct band). `pineapple` R25 · `instant yeast` R90 live.

---

## ✅ RECORD 9 — KLEPON (`dessert`) · R10 · **R11** · R12 — **dessert is no longer 0**

40/40, 0 warns · **exact 4 · wrong-product 0 · will-not-price 0 · absent 0** · coverage 1.00 · engine costPP.
🟠 **ONE REVIEW LINE, PREDICTED AND CONFIRMED:** `glutinous rice flour → rice flour R40`. Real SA
glutinous rice flour is nearer R60–125/kg, so this is a **review-class underprice, not a wrong product** —
recorded here rather than turned into a price ask.

**LEAD (spent):** **solid going in, liquid coming out.** The jaggery must be chopped into hard, dry 5mm
nuggets — damp sugar dissolves into the dough while you wrap it and there is nothing left to burst. Then
**seal until the join is INVISIBLE, not merely closed**, because a seam is a fault line that opens in the
water and puts the syrup in the pot. Bare simmer, never a rolling boil, which tears soft dough. **Floating
is only the first cue — 2 to 3 minutes more**, which is also when the nugget finishes melting. Straight
into the coconut **while dripping wet**, because the surface water is the only glue there is. And steam the
desiccated coconut with salt first, or it tastes like sawdust.

**MOAT (spent):** **2-acetyl-1-pyrroline.** Pandan is one of very few leaves on earth used the way vanilla
is used, and the compound responsible is the *same* molecule that gives jasmine rice and the crust of
fresh bread their smell — which is exactly why pandan is impossible to describe and instantly familiar.
Then *jajan pasar*, the pre-dawn Javanese market-snack tradition, and the naming tangle: klepon in Java,
**onde-onde** in Sumatra and Malaysia — while in Java onde-onde means a completely different fried sesame
ball. One word, two unrelated sweets, same country.

Versions: **Putih 💰 R10 vegan** (jaggery *reduced* to 25g, because pandan's aroma masks sweetness and
without it the same sugar reads sweeter) · **Klepon 🏆 R11 vegan** (why it is boiled and not steamed: the
water gelatinises a skin in the first minute and seals the seam mechanically, and the float is a cue a
steamer cannot give) · **Klepon Ubi 🍠 R12 vegan** (sweet potato dough — softer, far more forgiving to
seal, yields sooner so the syrup arrives faster, stales faster).

## ✅ RECORD 10 — BAKSO (`main`) · R42 · **R49** · R54

40/40, 0 warns · **exact 9 · wrong-product 0 · will-not-price 0 · absent 0** · coverage 1.00 · engine costPP.
✅ Used **`mushrooms` R90, the plural**, per the standing note that `mushroom` R165 and `mushrooms` R90 are
both live keys.

**LEAD (spent) — the most technical in the lane so far:** **the bounce is a protein gel and you build it
with cold.** Salt dissolves myosin out of the muscle fibres; worked mechanically it unravels into a
three-dimensional net that traps water and fat when it sets. **Above roughly 12°C the fat smears and
physically blocks the protein from linking, and there is no fixing it.** So: near-freeze the mince, chill
the bowl and blade, use ice water, stop the moment anything feels warm. **THE SALT GOES IN AT THE START,
WITH THE MEAT** — 5g to 200g is a genuine 2.5%, a sausage-maker's level, because salt is the *reagent*
here, not seasoning. **Tapioca starch, not flour** — it sets to a clear springy gel that reinforces the
net instead of padding it, and **20g to 200g is the honest ceiling**. Then poach at **a bare 85–90°C,
never a boil**, because a rolling boil contracts the net and wrings the water out, and lift them a minute
after they float — past twelve minutes springy turns to rubber.

**MOAT (spent):** **convergent food science.** The spring of a bakso, the snap of a frankfurter and the
bounce of Japanese fish cake are one phenomenon — cold protein, early salt, mechanical work — arrived at
independently by three cuisines, none of which needed the word myosin. Then the part that is specific to
Indonesia: the country turned that texture into the *entire* basis of judgement. Bakso is graded on
*kenyal*, and pressing one against the bowl with a spoon before eating is completely normal. Which
produces a dishonest arms race, because **starch buys bounce far more cheaply than beef does, so the
springiest bakso on a street is often the one with the least meat in it** — which is why 20g of tapioca
is a ceiling and not a starting point. Finally the name: Hokkien *bak-so*, minced meat, and the one change
that localised it was the protein — beef, so it could be sold from a public cart in a Muslim-majority
country.

Versions: **Kuah 💰 R42 omnivore** (no noodles, so no starch near the broth and it stays properly clear) ·
**Mie 🏆 R49 omnivore** (noodles cooked in their own water and assembled *in the bowl*, because anything
that sits together for ten minutes tastes like one thing instead of three) · **Jamur 🌱 R54 vegan** —
⚖️ **and this version says plainly that it CANNOT bounce.** There is no myosin in a mushroom or a soya
bean, so no amount of cold or salt produces the net, and any recipe claiming otherwise is selling
something. The goal changes instead of being faked: squeeze the mushrooms dry over high heat, press the
tofu hard, and bind with 35g of starch rather than 20g because starch is now doing all the work.

## 📊 INDONESIA 10 / 50 — a fifth of the country

**10 records · 30 versions** · main 4 · staple 2 · starter 2 · side 1 · **dessert 1**
· **vegan-capable 9 of 10** · **0 dead crossLinks** · pricecheck **exact 37 · wrong-product 0 ·
will-not-price 0 · absent 0** · every record coverage 1.00 · **all 30 costPP swept against the engine in
one pass: ZERO mismatches.**

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

⛔ **SPENT LEADS — 10:** pecah minyak · dry-char + pestle · bumbu brine into a porous centre ·
per-vegetable doneness + hot-water emulsion · absorb-then-steam rice · cold-dry-rice + one-portion +
kecap-down-the-side · fry-the-potato-before-mashing · two-zone fire + across-grain flat slices ·
**solid-sugar-in-liquid-out + invisible seam + float-then-wait** · **cold protein gel + salt-as-reagent +
bare-simmer poach**.
⛔ **SPENT MOATS — 10:** merantau · Columbian-exchange chilli · fermentation + B12 half-myth · bumbu pecel
brick · Betawi = Batavia · rice food-safety + kecap manis as a local invention · colonial ratio inversion
+ nutmeg via Banda · sosatie + sate's regional forks · **2-acetyl-1-pyrroline + jajan pasar + the
onde-onde naming collision** · **convergent protein-gel science + kenyal as the sole criterion + the
starch arms race**.

---

# 🇮🇩 BANK VERIFIED · TWO PRICE ANSWERS (30 Jul 2026) · RAWON UNBLOCKED

## ✅ BANK STATE VERIFIED BEFORE ANY PRICE WORK WAS STARTED

Tina asked for the bank to be secured first because the chat may cut off. Measured, not assumed:

- `node --check sections/wk_indonesia.js` — clean
- **10 records · 30 versions** · main 4 · staple 2 · starter 2 · side 1 · dessert 1
- **0 dead crossLinks · 0 diet-union mismatches** (§26 checked per record)
- pricecheck **exact 37 · wrong-product 0 · will-not-price 0 · absent 0**
- Staged files **byte-identical** to the live ones (md5 matched on both)
- `git status --short` — only the two intended changes. **Nothing un-banked, nothing disposable.**

📌 One repo fact, not a request: **`batch45.js` is still committed at origin** from the Japan record-45
session — a spent batch input that should not be in the repo per `tidy-repo.sh`'s 11-file root. It cannot
be removed from the container because removing a tracked file needs a push. It will be folded into the
~25/50 push rather than raised again.

---

## ✅ `keluak` R2000/kg KEYED — RAWON IS UNBLOCKED

⚖️ **§29.1 NOW PASSES.** Tina, 30 Jul: keluak **is** obtainable in SA through specialty importers at
**R150–550 per 100–250g pack.** The earlier ruling that Rawon was permanently blocked is **STRUCK**.

**ARITHMETIC — her figure is a range on BOTH axes, so it normalises four ways:**

| Reading | Per kg |
|---|---|
| R150 / 250g | R600 |
| R150 / 100g | R1 500 |
| R550 / 250g | R2 200 |
| R550 / 100g | R5 500 |

A **nine-fold spread**, far too wide for a naive midpoint — so §31.1 decides it rather than an average:
the mainstream buy for a specialty import used in a single dish is the **small 100g pack**, at the
low-to-mid of her rand range, ≈R200/100g → **R2 000/kg.**

🟡 **THE PACK SIZE IS MY ASSUMPTION, NOT HERS.** The rand range is Tina's and is firm; the 100g reading
is mine. **One word from her moves this number and nothing else** — recorded that way in the file, the
same shape as the dashi dosage caveat.
✅ **SANITY CHECK:** Rawon uses roughly 10–12g of keluak paste per serving → **~R24 a plate** against ~R23
of beef chuck. Material, and it correctly tells a cook that Rawon is an expensive dish here rather than
hiding it.
⚠️ **THREE SPELLINGS KEYED** — `keluak` · `kluwek` · `kluwak`, all 2000, following the
`bamboo skewer_each`/`bamboo skewers_each` precedent. All three were **absent everywhere** (prices.js and
both alias maps) and **none appears in any live ingredient line**, so this adds coverage and changes no
existing cost. **Prefer `keluak` in new records.**

## ⛔ `banana leaves` — NO KEY. §29.1 FAILS LOUD.

Tina, 30 Jul: **"not sold here, unless you have a banana tree, and it's quite common."** A garden tree is
not a bought product, so there is no store route and therefore **no cost**. No key added.

🔴 **AND IT CURRENTLY MIS-RESOLVES:** `banana leaves` → **`banana` R32/kg** — a leaf priced as fruit, via
`wkPriceLookup`'s longest-word-anywhere rung. **Measured: no live ingredient line in any section uses the
phrase**, so nothing is wrong today. ⛔ **KEEP IT THAT WAY.** Banana leaf is named **in-method only**,
never as an ingredient line.
✅ **THE HONEST ROUTE for every parcel dish** (Pepes, Botok, Otak-Otak), and it uses her own observation:
cut a leaf if there is a banana tree in the garden — common in this part of the world — otherwise baking
paper inside foil, which is what the method leads on. Same pattern as warabi starch → cornflour.

⚠️ **BANANA LANDMINE RE-CONFIRMED while checking:** `1 banana` → R2.50 count · **`120g banana` → R2.50
count** (a weight line silently taking a count price) · **`2 bananas` → `bananas` R25/kg = R0.05.** Three
keys, three behaviours. ⛔ Anything banana-based must have its unit checked against the key that actually
fires **before** a line is written.

**Regression, all green:** `node --check` clean · `git diff --stat` = **95 insertions, 0 deletions** ·
`banana` R32, `banana_each` R2.50 and `bananas` R25 all **intact and unshadowed** · **Japan exact 176 and
China exact 124 unchanged** · `tinza-doctor.js` still at the **RED 10 floor**.

---

## ▶️ NEXT — RAWON GOES TO THE FRONT

**11 Rawon** (main) — jet-black beef soup, and now authorable. It is the strongest WOW left in the lane:
the colour comes entirely from keluak, and the moat is extraordinary and true — **raw Pangium edule is
lethally cyanogenic**, and the nuts are made edible only by boiling and then burying them for weeks, which
is why they are sold already black and processed. ⚠️ **The method must be accurate on this**: the nuts you
buy are ready to use, and the safety note is to discard any that are not black inside or that smell wrong
— never to imply a home cook should process raw ones.

Then **12 Gudeg** (`young jackfruit` R108 already keyed) · **13 Rujak** · **14 Tahu Gejrot** ·
**15 Pepes Ikan** (banana leaf in-method only) · **16 Bika Ambon** (`sago flour` absent →
`tapioca starch` R70).

---

## ✅ `rawon spice mix` R680/kg KEYED — Tina-sourced 30 Jul 2026

| Reading | Per kg |
|---|---|
| R30 / 54g | R556 |
| R35 / 54g | R648 |
| R30 / 45g | R667 |
| R35 / 45g | R778 |

Mean **R662**, median **R657**, a **1.4× spread** — narrow enough that a mid is honest here, unlike
keluak's nine-fold range. Round up per §31 → **R680/kg.**

🔴 **WAS RESOLVING TO `spice mix` R120 — roughly a FIFTH of the real price.** Same shape as
`semur spice mix` and as the `chilli oil` → `chilli` R80 bug: a number that renders and looks correct.
**A wrong number closed, not a gap filled.**

⚖️ **THIS SACHET IS STRUCTURALLY DIFFERENT FROM THE OTHER PASTE KEYS, and it changes how Rawon is built:**
a bumbu rawon sachet **contains keluak** — that is what makes it rawon — so it is not a seasoning
shortcut but a **genuine alternative route to the whole nut**. Compared honestly: a 45–54g sachet serves
about four, so **~12g a plate ≈ R8** against **~R24 a plate** for whole keluak at R2000/kg, and **R30 to
enter rather than ~R200**. That makes the sachet the natural **BUDGET FORK** of the Rawon card — while the
card itself must still **lead on whole keluak**, because the nut is the dish and the moat.

⚠️ **ONE INFERENCE, LABELLED AS MINE:** this is the same Bamboe/Indofood sachet family Tina described as
*"rare in standard South African supermarkets"* for semur, so the method assumes specialty importers. She
gave the rawon price without repeating that caveat and it is not put in her mouth.
⚠️ Two spellings keyed — `rawon spice mix` · `bumbu rawon` — both absent before, neither in any live
ingredient line. Prefer `rawon spice mix`.

**Regression:** `node --check` clean · `git diff --stat` = **115 insertions, 0 deletions** ·
`spice mix` R120 and `semur spice mix` R510 both **intact and unshadowed** (longest-key-wins verified by
probe) · **Japan exact 176 and China exact 124 unchanged.**

## 📋 PRICE KEYS ADDED THIS SESSION — 12 keys, every one Tina-sourced, every one normalised in-file

| key | value | closed |
|---|---|---|
| `kecap manis` | 260 /L | absent |
| `satay sauce` | 350 /L | absent |
| `nasi goreng paste` | 355 /kg | absent |
| `instant noodles` | 100 /kg | 🟠 `noodles` R80 |
| `semur spice mix` | 510 /kg | 🔴 `spice mix` R120 — a quarter |
| `bamboo skewer(s)_each` · `skewer(s)_each` | 0.25 each | absent · §31.3a consumed |
| `keluak` · `kluwek` · `kluwak` | 2000 /kg | absent · unblocked Rawon |
| `rawon spice mix` · `bumbu rawon` | 680 /kg | 🔴 `spice mix` R120 — a fifth |

⛔ **THREE DELIBERATELY REFUSED, all §29.1 fails-loud:** `bakmi spice` (sachet lives inside the Indomie
packet) · `banana leaf`/`banana leaves` (a garden tree is not a bought product) · and **no new `dashi`
key**, because it was already there.

---

## ✅ RECORD 11 — RAWON (`main`) · R54 · **R84** · R89 — the keluak key put straight to work

40/40 assertions, 0 soft warns · pricecheck **exact 14 · wrong-product 0 · will-not-price 0 · absent 0** ·
coverage 1.00, missing [] · all three costPP from the engine · batch file deleted, gates re-run after.

**LEAD (spent):** **inspect and REJECT the nuts one at a time, then remember it is a SOUP.** Good keluak
flesh is soft, near paste-like, deep black or very dark chocolate, and smells of tamarind, cocoa and soy.
**Anything pale, cream, grey, hard, chalky, or smelling sharp, bitter or faintly of almonds is thrown
out** — those are the under-processed nuts, and one of them makes the whole pot acrid with no way back,
which is why you buy a few more than you need. Then **sieve the mashed paste** or the broth is gritty with
fibre and shell. Then the structural half: **rawon is a soup, not a curry.** Build a clean stock first —
skim the grey foam repeatedly until the surface runs clear, because stirred back in it clouds the broth
permanently and you will taste it even though the black hides it — fry the bumbu and the keluak
**separately**, and only then bring them together. Lime off the heat at the very end, because acid during
the simmer dulls the black towards grey-brown.
⚖️ **Frying the sieved keluak paste** is the step that makes the difference between true black and murky
brown: two minutes in hot fat cooks out the starch so the colour disperses cleanly instead of clouding,
and converts the raw bitterness into something close to dark chocolate. You can watch it shift in the pan.

**MOAT (spent):** **the same tree was used to poison fish.** Pangium edule seeds carry cyanogenic
glycosides that release hydrogen cyanide when the tissue is crushed, and crushed seeds thrown into a pool
would stun everything in it. **Raw keluak is not a mild risk.** What makes rawon extraordinary is that
somebody worked out how to disarm it — boil, then bury in ash or damp earth for a month or more, during
which the toxins degrade and the cream flesh turns black. **The colour is the receipt.** Not preservation,
not flavour — a deliberate multi-week detoxification arrived at with no understanding of what was being
removed, and then built into a national dish rather than merely tolerated. Plus: rawon is East Javanese
and genuinely ancient, its accompaniments are unusually fixed for Indonesian food (short raw sprouts,
salted duck egg, sambal, crackers), *rawon setan* is named for the hours not the heat, and keluak stains
a wooden spoon and a white shirt permanently.
⚠️ **SAFETY WORDING CHECKED:** the method states plainly that the nuts are **sold already black and
already processed**, that the detoxification is **not a home process**, and that cream-coloured raw nuts
are **not food**. At no point does it imply a cook should treat a raw nut. The reject-the-pale-ones
inspection is the practical step, and it is a flavour cue and a safety cue at once.
⚖️ Distinct from Tempe's spent fermentation moat on purpose — that one is about nutrition and mould, this
one is about **making a poison edible**.

Versions: **Bumbu Instan 💰 R54 omnivore** — ⚖️ and this is the one shortcut in the lane genuinely worth
taking, because **a sachet actually contains keluak**; it is a different way of buying the same thing, at
about a tenth of the entry cost and cheaper per plate. What is given up is the frying step and some
intensity, so the lime goes up to 15ml to compensate. · **Surabaya 🏆 R84 omnivore** (whole nuts, with the
fry-the-paste reasoning) · **Rusuk 🦴 R89 omnivore** (short rib — the difference is the *bone*: marrow and
collagen dissolving into gelatine give the broth body a cube of brisket cannot, and bones throw far more
foam so the skimming runs 8–10 minutes rather than 5).

## 📊 INDONESIA 11 / 50

**11 records · 33 versions** · main 5 · staple 2 · starter 2 · side 1 · dessert 1
· **vegan-capable 9 of 11** · **0 dead crossLinks · 0 diet-union mismatches** · pricecheck
**exact 41 · wrong-product 0 · will-not-price 0 · absent 0** · every record coverage 1.00 ·
**all 33 costPP swept against the engine: ZERO mismatches.**

⛔ **SPENT LEADS — 11** (adds: nut-by-nut rejection + sieve + skim-to-a-clear-stock + it-is-a-soup).
⛔ **SPENT MOATS — 11** (adds: Pangium edule as fish poison, and the buried-for-a-month detoxification
where the colour is the receipt).

## ▶️ NEXT
**12 Gudeg** (`young jackfruit` R108 keyed) · **13 Rujak** · **14 Tahu Gejrot** · **15 Pepes Ikan**
(banana leaf in-method only) · **16 Bika Ambon** (`sago flour` absent → `tapioca starch` R70).
