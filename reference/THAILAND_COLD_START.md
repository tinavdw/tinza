# 🇹🇭 THAILAND — LANE SCOPE & COLD START
**Written 30 Jul 2026. ⚖️ REVISED 31 Jul 2026 — read the revision notes in §0a before anything else.**
*This file is the memory. Read it first, in the session that opens Thailand.*

---

## 0 · WHERE THE LANE STANDS — ✅ RECOUNTED WITH NODE AT HEAD, 11 AUG 2026

| country | status |
|---|---|
| China | ✅ CLOSED **50** · pushed + wired |
| Japan | ✅ CLOSED **50** · pushed + wired |
| Indonesia | ✅ CLOSED **42** · pushed + wired · ledger `42 · 8a1c2521f08a717e` |
| **Thailand** | ✅ **CLOSED 38** · pushed + wired · 🔴 **LEDGER DRIFT — ledger still reads `30 · f825fb7d0cf8c441`** |
| **Vietnam** | ▶️ **ACTIVE 25 / 50** · pushed + wired · ledger `25 · eac35cc687bcf700` |

> ⚠️ **RECOUNTED WITH NODE AT HEAD, 11 AUG 2026.** This table read *Thailand OPEN 30 · Vietnam not
> started* until this correction. ⚖️ **Law 3 — a document that is wrong is silent.**
>
> 🔴 **THE THAILAND DRIFT IS REAL AND STILL OPEN:** `sections/wk_thailand.js` holds **38** records;
> `reference/ASIA_LEDGER.json` still records **30**. ⛔ **NOT hand-fixed here** — the ledger is
> derived by `merge.js` and never hand-typed. It needs a measured rebaseline in its own session,
> the same shape as MF181 did for Vietnam.

⚖️ **A1 IS AMENDED:** 50 is a target, not a gate. **42 is a CLOSE, never a shortfall.**
⚠️ `reference/ASIA_PROGRESS.md` **at origin is badly stale** (reads Indonesia 0/50, total 77).
**Do not quote it. Count with node.**

## 0a · ⚠️ REVISION NOTES — 31 JUL 2026

1. ⛔ **§5 ROW 4 WAS WRONG AND IS STRUCK.** It called Mango Sticky Rice **BLOCKED** on the glutinous
   rice key while **§3 of this same file** said that key was live and listed Khao Niao Mamuang as
   ✅ UNBLOCKED. §3 is the correct half — measured live 31 Jul: `glutinous rice` R63 · `mango` R40 ·
   `coconut milk` R63. **MANGO STICKY RICE IS UNBLOCKED AND TAKES SLOT 4.**
   *(Split-brain inside one file — the shape already ruled on for TINZA_SPRINT_PLAN.md.)*
2. 🆕 **TWO NEW WATCHERS EXIST.** `tinza-echo.js` (`/tinza`) and `tinza-all.js` (`/all`). **Both are
   now in the banking sequence.** ⚖️ Laws 62 + 63.
3. ✅ **THE LOCALE AND GLOSS SWEEPS ARE DONE** (⚖️ §33). Every wk file is SA-English and every SA
   term is resolvable on its own card. **New Thai records must not reintroduce US spelling** —
   `tinza-echo.js` will catch it.
4. ⛔ **`bird's eye chillies` WITH AN APOSTROPHE IS ABSENT.** The live key is
   **`birds eye chillies` R100/kg — no apostrophe, plural.** Verified 31 Jul.
5. ⚠️ **`limes` (plural) R140/kg is a WEIGHT key. `lime` (singular) is R8.75 PER COUNT.**
   Write `limes` for gram lines. Verified 31 Jul.

---

## 1 · ✅ GREENFIELD — RE-CHECKED 31 JUL, NOT ASSUMED
**1,135 records scanned. `country === "Thailand"` = 0.** No name or alias collision on Pad Thai,
Som Tam, Massaman or Mango Sticky Rice. *(Only `sticky rice` hit is Beggar's Chicken, an ingredient.)*
⚖️ **THIS SCAN IS MANDATORY AT EVERY COUNTRY OPEN** — Indonesia taught it the expensive way.

⛔ **`Moo Satay` IS STRUCK BEFORE IT IS WRITTEN.** Four Indonesian sate cards own bamboo soaking,
threading, the two-zone fire, the glaze window and metal-vs-wood conduction. **Gado-Gado owns peanut
sauce outright.** `Moo Ping` is in the same position.

---

## 2 · 🔴 PRICE LANDMINES — ALL RE-PROBED 31 JUL THROUGH `wkPriceLookup()`

| write this | ⛔ NEVER write | the wrong one resolves to |
|---|---|---|
| `jaggery` R100 | `palm sugar` · `coconut sugar` | → `sugar` R35 — **a third of the real price** |
| `birds eye chillies` R100 | `bird's eye chillies` *(apostrophe)* · `green chilli` | ABSENT · → **PER COUNT R1** |
| `limes` *(plural, grams)* | `lime` *(singular)* | → **R8.75 PER COUNT** |
| `glutinous rice` R63 ✅ | `roasted rice powder` | → `rice` R27 — write `glutinous rice`, toast in-method |
| `kaffir lime leaves` R1500 ✅ | — | **weight key — write grams**, e.g. `1g dried kaffir lime leaves` |
| `tamarind paste` R522 | `tamarind` *(bare)* | ABSENT |
| `red curry paste` R900 | `massaman curry paste` · `curry paste` | ABSENT — build it up with dry-roast whole spices |
| `noodles` R80 *(A7 DEFER)* | — | ✅ **PROBE SETTLED 1 Aug**: `glass noodles` · `mung bean noodles` · `cellophane noodles` · `bean thread noodles` **ALL alias to `noodles` R80.** No silent absent. ⚠️ R80 likely UNDER-prices mung bean vermicelli — **unsourced, A7 defer, needs Tina's shelf eyes** |
| `rice noodles` R45 ✅ | 🔴 `rice vermicelli` | → **`rice` R27** — silent wrong product |
| `rice noodles` R45 ✅ | 🔴 `vermicelli` *(bare)* | → **`pasta` R36** — silent wrong product |
| `noodles` R80 ✅ *(CORRECT for khao soi)* | 🆕 `egg noodles` | → **`egg` R3.70 PER COUNT** — direction-B collision, silent |
| *(in-method only)* | `banana leaves` | → `banana` R32, the fruit |
| 🆕 *(NOT IN SA — do not write)* | 🔴 `water chestnuts` | → **`water` R0.02** — the substring wins. **The ugliest silent resolution in the lane.** ⛔ Tub Tim Krob is blocked on it |
| 🆕 `cornflour` R68 *(ONE WORD)* | 🔴 `corn flour` *(spaced)* | → **`maize meal` R19** — wrong product, silently. Same fault class as `rice vermicelli` |
| 🆕 *(write `eggs`, note duck in chefNotes)* | 🔴 `duck eggs` | → **`egg` R3.70 PER COUNT** — a hen's price on a duck's egg, and plural→singular as well. **Two faults in one key** |

✅ **LIVE AND EXACT:** `fish sauce` R200 · `rice noodles` R45 · `green papaya` R32 · `mango` R40 ·
`coconut milk` R63 · `coconut cream` R83 · `peanuts` R128 · `dried shrimp` R800 · `bean sprouts` R270 ·
`galangal` R880 · `lemongrass` R500 · `shrimp paste` R437 · `green curry paste` R960 · `jasmine rice` R63 ·
`cashew nuts` R430 · `tofu` R171 · `beef` R130 · `potatoes` R18 · `cucumber` R21 · `oyster sauce` R260.

🟠 **REVIEW-class:** `coriander seeds` → `coriander` **R650, the FRESH HERB price** · `squid` →
`calamari rings` R313 · `holy basil`/`thai basil` → `basil` R650 · `chicken thighs` → `chicken` R90.
🔵 **ABSENT:** `long beans` · `pandan` · `morning glory` · `papaya` *(bare)* · `pea aubergines`.

⚖️ **ADDING A KEY IS NOT PURELY ADDITIVE.** `glutinous rice` outranked `glutinous rice flour` and
priced a FLOUR as GRAINS in 4 records across 3 countries. **Regression-test every new key against
every record containing it as a SUBSTRING, and run `costcheck` on all closed countries before and after.**

---

## 3 · ⚖️ LANE RULINGS THAT APPLY
**A1** close on canon · **A2** `cuisine:"southeast-asia"`, `country:"Thailand"` · **A3** schema from
`ASIA_SCHEMA_KEYS.json` **never record 1**, `costPP` on VERSIONS, exactly one `default:true`, exactly
3 versions, budget fork LEADS and is cheapest, `servings:1` · **A4** icons only · **A5** staples are
real cards on the SIDES shelf · **A6** exactly **3 crossLinks**, dead target fails merge, **cannot
cross countries** · **A7** prices batched — **except §29.5, a WRONG price is fixed when found** ·
**§26** diet on the VERSION, record diet is the derived union · **§29** staple-as-ingredient priced as
the STORE route · **§30.1** `costPP` **DERIVED from the engine, never authored** · **§31.3a/b/c**
retained equipment out of costPP, consumed priced per unit · 🆕 **§33** every SA term resolvable on
its own card, **explanation not near-miss translation**.

---

## 4z · ▶️ HANDOFF — THREE DECISIONS WAITING FOR TINA (written 1 Aug 2026, at B8 close)

⚖️ **NONE OF THESE WERE ACTIONED, DELIBERATELY.** Each is a ruling or a live-surface change.
They are recorded here so the next session opens with them rather than rediscovering them.

### 1 · 🩸 `AVG_WEIGHT_G` — THE BIG ONE. A WHOLE-CORPUS JOB, NOT A TAIL-END ONE.
🆕 `unitcheck.js` (new this session) found **61 ingredients across 1,159 records that price at R0**
while `wkPriceLookup()` reports their key exists — `costRecipe()` silently drops them for want of a
count↔weight bridge. ⚖️ **Law 20: a price that vanishes is a harm.**
`china 15 · southafrica 16 · japan 2 · indonesia 0 · thailand 0`
Worst single case: `sotho-skopo` — **`2 sheep trotters` → R0**, losing R52 from the dish.
⛔ **DO NOT JUST ADD KEYS.** ⚖️ §2 regression rule applies in full: adding to `AVG_WEIGHT_G` **will
move costPP on already-shipped records**, which changes ledger hashes and puts `costcheck` into
drift corpus-wide. **Run costcheck on ALL closed countries before AND after, in one measured
session.** This is the `glutinous rice` shape that cost four records across three countries.
🩸 **The 61 split three ways and only one third is really count-vs-weight:**
- **35** = phrasing the parser cannot size — `1 tsp salt` · `1 small handful fresh coriander` ·
  `2 phyllo sheets` · `1 sprig rosemary`. **A parser question, not a price question.**
- **6** = water lines — `1.5 litres water` parses its NAME as `litres water`, so `wkIsWater()`
  misses it and the engine tries to cost it. ⚠️ **A real bug in the water guard.**
- the rest = true count against a per-kg key with no average weight.

### 2 · ✅ RULED 1 AUG 2026 — **NO. STANDALONE, REPORTED SEPARATELY.** *(see §4e)*
`tinza-all.js` fires six standards. Adding a seventh is a **ruling**, not a quiet edit — and Law 62's
own comment argues that a runner showing more greens than it measured manufactures confidence.
⛔ **NOT WIRED.** Run it standalone: `node unitcheck.js [country] [batch.js]`.
✅ It self-tests 9/9 on every run (4 born-RED proofs + **5 ANTI-proofs**) and exits 1 on any finding.

### 3 · ⚖️ CARRIED DEBT #3 IS, AS WRITTEN, WRONG — AND SO WAS THIS TOOL'S FIRST DRAFT.
The debt claims a g/ml line hitting a count key is a silent fault. **It is not.** The engine carries
**`AVG_WEIGHT_G`, 77 entries**, and converts correctly: `100g apple` costs R4 against R6 for a whole
one. 🩸 **The first version of `unitcheck` fired 89 times on that premise and every one was a FALSE
POSITIVE.** Its named example — the live `30g avocado` in `boerekos-gemsbok-stuffed-fillet` — is fine;
avocado has a 200g entry. ✅ **The five worst false positives are now permanent ANTI-PROOFS in the
tool**, so the same mistake cannot be reintroduced by a future edit.
⚖️ **REWRITE CARRIED DEBT #3 to describe the real fault: not a unit hitting the wrong KIND of key,
but an ingredient that resolves and still costs NOTHING.**
⚠️ A second draft of the tool tested `total === 0` and tripped over rounding — `5g chilli`
legitimately costs R0.33. **It now uses the engine's own `missing[]`, which is immune to that.**

### 4 · 🔴 AND THE SINGULAR/PLURAL SHAPE STILL NEEDS ITS RULING
Four instances found in this lane alone — `mushroom`/`mushrooms` · `lime`/`limes` ·
`banana`/`bananas` · `chicken wing`/`chicken wings` — plus `chilli sauce` → `chilli`,
`sea bass` → `basa`, `rice vermicelli` → `rice`, `vermicelli` → `pasta`, `egg noodles` → `egg`,
`sausage casings` → `sausage`, `chilli jam` → `chilli`. ⚖️ **These are all ONE fault class wearing
eleven table rows. One ruling, and ideally one mechanical rung, not an twelfth row.**

---

## 5 · ⚙️ THE BANKING MECHANIC — ONE RECORD, ONE HANDBACK
```
write batch  →  node --check
             →  node merge.js thailand batchNN.js
             →  node costcheck.js thailand
             →  node pricecheck.js thailand
             →  node wowcheck.js thailand batchNN.js     ← /wow + /wk
             →  node tinza-echo.js thailand batchNN.js   ← /tinza  🆕
             →  node tinza-doctor.js
             →  rm the batch  →  node --check  →  present_files
```
🆕 **OR ALL OF IT AT ONCE:** `node tinza-all.js thailand batchNN.js` *(⚖️ Law 62)*.
⛔ **The batch file is a spent input. It never ships and never appears in a handback.**
⛔ **Never hand-insert a record** — that bypasses all 40 merge assertions.
⚖️ **§30.1** — merge into a throwaway clone, read costcheck's engine column, set `costPP`, merge for real.
🆕 **Scan every batch for stray non-Latin characters** before merging.

---

## 6 · 🩸 CARRIED DEBT — NOT THAILAND'S, STILL OPEN
1. The 🟠 REVIEW ledger ruling, unwritten.
2. `leftovers` has **no renderer** (§28).
3. **count-vs-weight direction B** has no mechanical rung — a g/ml line hitting a count key is
   invisible to `pricecheck`, coverage and `merge`. Includes the live `30g avocado` in
   `boerekos-gemsbok-stuffed-fillet`.
4. `merge.js` FLESH list missing octopus + dashi · the vegan-mistag warn cannot see version deltas.
5. `mushroom` R165 / `mushrooms` R90 both live — **use the plural.** `rabbit` → `chicken` R90.
6. `glutinous rice flour` (mochiko) unsourced — **Japan's mochi desserts stay blocked.**
7. Three parked re-courses (Gohan→side · Nasi Uduk→side · Kake Udon→main) + the §27.3 plan-button
   guard on 11 jars. **Two are in SHIPPED Japan files — batch into one deploy.**
8. `japan-nukazuke` costPP R9·10·15 is **RULING-SET** under §31.3c — **EXCLUDE from any costPP sweep.**
9. 🆕 **The 26 gloss wordings in §33 are Tina's to correct** — every one is a claim about SA food
   made by a model. ⚖️ **Law 11.**
10. 🆕 ⚖️ **THE VERMICELLI SWEEP — RULED BY TINA 1 AUG 2026: run it AFTER VIETNAM CLOSES, BEFORE
    ANY NEW COUNTRY OPENS.** 🔴 `rice vermicelli` → `rice` R27 and bare `vermicelli` → `pasta` R36
    are **silent wrong-product resolutions** — they resolve to *something*, so `pricecheck` cannot
    see them. `rice noodles` R45 is the correct key. **Vietnam will want rice vermicelli constantly,
    so the sweep waits until that lane is closed and can be swept in one pass with the rest.**
    ⚠️ Grep all closed countries for `vermicelli` as a SUBSTRING, per the §2 regression rule.
11. 🆕 `eggplant` R43 and `brinjal` R43 are **both live keys** for one product. Harmless (same price)
    and now unused by any record, but it is the `mushroom`/`mushrooms` shape. **Needs a ruling before
    either is deleted.**
12. 🆕 ⚖️ **`wk_southafrica.js` IS NOW IN `pricecheck.js` — ADDED 1 AUG 2026, AND THE FIRST RUN IS
    A FINDING, NOT A CLEAN BILL.** 131 SA records had sat outside every price watcher since the
    tool was written. ⚖️ **This is how `sago` came to be ABSENT from `prices.js` while
    `boerekos-sagopoeding` shipped with `25g sago (soaked)` costing R0.** ✅ Now keyed at
    **`sago` R56** *(R28/500g, Tina-sourced 1 Aug)*. §2 regression run BEFORE adding: it moves
    that one ingredient line and nothing else corpus-wide, and sagopoeding carries no `versions[]`
    and therefore no `costPP`, so **no ledger moved.** costcheck on china · japan · indonesia ·
    thailand was identical before and after, line for line.
    🔴 **FIRST SA RUN: `exact 192 · wrong-product risk 131 · absent 30`.** ⚠️ Roughly half the 30
    are parser artefacts of the §4z-#1 kind — `oil for deep-frying` · `spices` · `fresh herbs` ·
    `yields ≈130g flesh)`. **The rest are real and one is startling:**
    ⛔ **`lamb` IS ABSENT while `mutton` R180 IS LIVE.** It hits `boerekos-sosaties` ·
    `boerekos-waterblommetjiebredie` · `boerekos-karoo-lamb-chops` · `indian-lamb-biryani` ·
    `cape-malay-denningvleis` · `cape-malay-tomato-bredie` · `boerekos-cabbage-bredie` ·
    `zulu-inyama-namadombolo`. Also absent: `millet` · `aniseed` · `cayenne` · `vanilla` ·
    `creme fraiche` · `sheep head` · `tinned caramel` · stock cubes.
    🔴 **AND A SILENT WRONG PRODUCT, THE VERMICELLI SHAPE AGAIN:**
    **`tinned pilchards in tomato sauce` → `tomato sauce` R60** — the fish priced as the sauce.
    ⚖️ **A7: all of the above are DEFERRED, not guessed. Tina's eyes on the shelf.**
    ⚠️ **HONEST LIMIT:** this brings SA under `pricecheck` only. It is not ledger-tracked, so
    `costcheck` still has nothing to score it against.
13. 🆕 ⚠️ **`tapioca flour` IS THE SAME PRODUCT AS THE KEYED `tapioca starch` R70** *(Tina-sourced
    at R35/500g, 30 Jul)*. It wants an **ALIAS, not a second key.** ⛔ **NOT ADDED — HELD.**
    ⚖️ Tina quoted R39–R73 per 500g on 1 Aug, which is **R78–R146/kg — a range sitting entirely
    ABOVE the banked R70/kg.** Either the 30 Jul price is stale or the range is small-pack. Moving
    it would shift costPP on five shipped records across three countries *(Bakso · Bika Ambon ·
    Es Cendol · Kue Lapis · Har Gow)* — a measured job. **Needs ONE number per kg from Tina.**
    ⚠️ The quoted source was a US retailer, so under A7 it cannot set a South African shelf price.
14. 🆕 🔴 **`core.js` line 1383 carries `"tapioca starch":"cornflour"` in the alias map** while
    `prices.js` holds the direct Tina-sourced key. The direct key wins, so nothing is broken today
    — but **a redundant alias pointing a SOURCED key at a different product is a trap** for whoever
    later deletes the direct line. Same family as `eggplant`/`brinjal` in item 11. **Needs a ruling.**
15. 🆕 ⚖️ **A3 RULED BY TINA, 2 AUG: `(Budget)` MEANS CHEAPER THAN THE **DEFAULT**, NOT CHEAPEST
    ON THE RECORD.** `claimcheck.js` was enforcing the strict reading and has been relaxed to match,
    with an anti-proof locking it *(a budget fork under the default passes even when a third fork is
    cheaper)*. **Sweep went 18 🔴 → 15 🔴.** Four of the dropped ones were the strict reading only:
    `china-char-siu` · `china-roast-duck` · `japan-takoyaki` · `cape-malay-frikkadels`.
    🔴 **THE 15 THAT SURVIVE, AND A PATTERN IN THEM:** japan ×6 · china ×5 · indonesia ×3 ·
    southafrica ×1. ⚖️ **FIVE of the six Japan reds are `Budget · Vegan` / `Budget · Vegetarian`
    forks that cost MORE than the meat default they replace** — `staple-dashi` R18/15 ·
    `shoyu-ramen` R136/113 · `oyakodon` R63/48 · `chawanmushi` R31/28 · `chikuzenni` R60/47.
    **This is the SAME fault Rad Na hit on 1 Aug: tofu R171/kg is above pork fillet R110/kg, and
    plant protein in South Africa is not the thrift option the label assumes.** It is one systematic
    mislabel repeated across a lane, not six unrelated slips. ⚠️ Worst outliers elsewhere:
    `china-staple-master-stock` R129 vs R15 *(a starter batch genuinely costs more up front — likely
    a mislabelled fork, not a mispriced one)* and `china-da-pan-ji` R280 vs R261.
    ⛔ **NOTHING FIXED. All 15 are pre-existing and none are Thailand's.**
16. 🆕 ✅ **`tapioca flour` R70 IS NOW KEYED — CLOSED 2 AUG.** ⚖️ **Tina had already sourced this
    more than once and the earlier note asking for "one number per kg" was ME failing to look.**
    The figure was banked as `tapioca starch` R70 on 30 Jul and re-confirmed 1–2 Aug at R39–73/500g;
    R70/kg sits inside that band. ⛔ **Added as a DUPLICATE DIRECT KEY, not an alias, and the reason
    is testable: `PRICE_ALIAS` is built at load, so a runtime alias entry is a no-op — I tried it and
    `tapioca flour` still returned ABSENT.** ⚠️ **The two keys must now move together.** Regression
    run: china · japan · indonesia · thailand costcheck identical before and after.
17. 🆕 ⚖️ **LAMB — MY EARLIER "ONE NUMBER CLOSES EIGHT RECORDS" WAS WRONG, AND TINA CORRECTED IT:**
    *"there is different cut of lamb, some are more expensive than others, certain chops are more
    expensive than ribs."* ⛔ **A single generic `lamb` key would silently mis-price every record
    that uses it** — the same silent-wrong-product shape as `water chestnuts` → `water`.
    ✅ **AND THE FILE ALREADY FOLLOWS TINA'S PATTERN:** `lamb neck` **R170** and `leg of lamb`
    **R205** are live and cut-specific. 🔴 **STILL ABSENT: `lamb chops` · `lamb ribs` · `lamb shin` ·
    `lamb knuckle` · `lamb shoulder`** — five cut keys, not one.
    ⚠️ **SEPARATE PROBLEM, NOT A PRICE JOB:** 17 distinct lamb lines exist in `wk_southafrica.js`
    and several name no cut at all — `200g lamb` · `140g lamb pieces` · `120g lamb on the bone` ·
    `150g lamb potjiekos (bone-in stewing pieces)`. **Those need REWRITING to name a cut before any
    key can price them correctly.** ⛔ Do not paper over it with a generic `lamb` fallback.

---

## 📦 THE BUILD LOG LIVES NEXT DOOR

> Every per-record banking entry — B1 through the close at 38, the struck dishes, the price failure
> and the `claimcheck.js` build — is in **`reference/THAILAND_HISTORY.md`**, split out 11 Aug 2026
> (`/split`). ⛔ **That file carries no live state.** Where it and this file disagree, **this file
> is right.**
