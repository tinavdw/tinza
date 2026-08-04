# 🇻🇳 VIETNAM — COLD START
**Opened 3 Aug 2026, at Thailand close (38). Revised 3 Aug, evening.** Read this BEFORE
anything else.

⛔ **WRITE THIS FILE TO `reference/VIETNAM_COLD_START.md`. Then run `git status` and READ
THE PATH, not the filename.** A reference file written to the repo root is indistinguishable
from one never written at all — the tools read `reference/`. This scar cost two reds and the
first two hours of the 2 Aug session.

---

## 0 · THE OPENING SEQUENCE — NOT OPTIONAL

```
1. clone
2. read THIS file, all of it
3. read reference/THAILAND_COLD_START.md §4o — the close, and every carried ruling
4. COUNT WITH NODE. Never by eye, never from a handoff, never from memory.
5. node tinza-all.js vietnam    → expect 4 · 0 red · 0 drift · 1 🔵 (thai basil)
6. node tinza-all.js thailand   → expect 38 · 0 red · 0 drift
                                   claimcheck 🔴 0 · 🟠 11 · 🔵 20
6. node priceledger.js --ask <term>   BEFORE asking Tina for ANY price
```

⚖️ **LANE STATE: 4 of 50 records banked (B1 closed 3 Aug).** All three wiring lines live and
verified: `index.html:160` · `worldkitchen.js:58` concat · `WK_COUNTRY_GEO["Vietnam"]`.

**B1 BANKED — Phở Bò R99·R85·R75 · Gỏi Cuốn R67·R57·R55 · Bún Chả R80·R85·R83 ·
Chè Chuối R21·R24·R22.** 12/12 costs green, 0 red across all six measured standards.
Batch source archived at `Archive/Vietnam-recipes/vietnam-batch1.js`.

⚖️ **THE RING IS CLOSED, SO B2 IS EASIER THAN B1 WAS.** B1 had to be written as four records in
ONE merge because A6 needs 3 live country-scoped crossLinks and merge fails a self-link — with
an empty lane there was nothing legal to point at. **That constraint is gone.** From B2 onward a
single record can bank alone, pointing at any three of the four already there.

⛔ **ARGUMENTS B1 HAS ALREADY SPENT — do not reuse these in Vietnam:**
- **Deliberate charring / burning on purpose** — `vietnam-pho-bo` (pyrolysis vs Maillard on allium)
- **Rehydration continuing after the water** — `vietnam-goi-cuon` (the one-second bánh tráng rule)
- **A sauce that changes during the meal** — `vietnam-bun-cha` (fat, char, osmosis, starch)
- **Ethylene and climacteric ripening** — `vietnam-che-chuoi`
- **nước chấm** is owned by `vietnam-goi-cuon`. **Peanut dipping sauce belongs to Indonesia**
  (`gado-gado`, `sate-ayam`, `sate-lilit`) — six records deep, do not take it.

⚠️ **REGISTERS FOUND SPENT WHILE WRITING B1 — check before reaching for them again:**
collagen→gelatin (~60 records) · clear-broth skimming (`china-lanzhou-niurou-mian`) ·
raw meat cooked at the table (`china-guo-qiao-mi-xian` — Crossing-the-Bridge Noodles, the trap
that no search for "pho" would ever find) · quick-pickle-vs-ferment (`japan-tsukemono`,
`indonesia-acar-kuning`) · osmosis (12 records) · shaved-ice desserts (`indonesia-es-cendol`,
`indonesia-es-teler`, `thailand-tub-tim-grob`).
⚖️ **Six registers burned across four records. Budget for that rate, it is normal.**
All three lines are live: the `index.html` script tag, `window.WK_VIETNAM || []` in
`wkPool()`, and `WK_COUNTRY_GEO["Vietnam"]`. Record 1 lands and simply works.
✅ `wkCountriesIn()` derives the country list from the RECORDS, so Vietnam now appears in the
Asia grid. Spot-check the tile on Netlify after the push — Law 2, fingers on live.

⛔ **THE PROCESS SCAR: never run `git checkout` on a lane file that is ahead of HEAD.**

---

## 1 · ⚖️ RULINGS CARRIED IN — LANE-INDEPENDENT, THEY APPLY FROM RECORD 1

- **§37 — BUDGET IS A CLAIM, NOT A CATEGORY.** A fork carries `Budget` only if its costPP
  is at or below the parent's. A meat→tofu, meat→legume or meat→egg swap is a **diet**
  fork, labelled by diet, never by cost. `claimcheck` asserts it.
- **⭐ §38 — TINNED GOODS ARE PRICED ON WHAT SURVIVES THE COLANDER** *(new, 3 Aug)*. Four
  arms: liquid used → net weight · liquid poured away and drained weight printed → divide by
  drained, and **record the tin size** · not printed but available → A7 defer · not printed
  and scarce → estimate high, mark `est`.
- **⛔ AN `est` PRICE MAY NEVER UNDERWRITE A COST CLAIM.** `claimcheck` can only verify that
  the arithmetic is consistent, not that the input was true — so an estimated key passes the
  watcher while being false on the card. Estimated prices go in the shop-spend number and
  nowhere near a comparative claim. **This is the §37 failure arriving through the back door.**
- **§26 decides vegan vs vegetarian PER FORK** — the label follows what the fork actually
  contains, not what is convenient.
- **A claim can be arithmetically right and still FALSE ON THE CARD.** Khanom Jeen Reo cost
  R3.09 against R2.70 and both display **R3**. If the reader cannot see the difference, do
  not assert it.
- **⭐ VERSION SETS MUST VARY THE DISH, NOT THE ANIMAL.** Six Thai records ran the identical
  *Budget → chicken → third protein* fork set, and five of those six sit in the 🟠 list.
  `Khao Pad Sapparot` is the shape to copy — a fork that changes the DISH.
- **⭐ GREENFIELD THE ARGUMENT, NOT THE NOUN.** A card that never says your word can still
  own your point. On the Thai lane this found Misugaru, Kai Palo, Khao Tom and Nam Prik Ong
  — none of which shared a search term with the dish being checked.
- **§30.1 costPP is DERIVED by `costcheck.js`, never authored.** Write a placeholder, run
  the tool, set the engine's number.
- **§33 / §33.8 — SA words are EXPLAINED, never translated away.** The gloss sits
  immediately beside the word, in a **dash or bracket** form. A comma does not satisfy the
  watcher: `pap, the stiff maize porridge` FAILS; `pap — the stiff maize porridge` PASSES.
- **⭐ CHILLIES BY GRAM, NOT BY COUNT.** Chillies differ too much in size for a count to mean
  anything. `chilli` R80/kg and `green chilli` R80/kg are already keyed. ⛔ This **kills §4z
  item 4 outright** — the singular/plural `_each` problem only existed because of count keys.
- **⭐ EVERY COUNTRY NEEDS starter · side · main · dessert.** Drinks may sit under dessert.
  A floor per lane, not a target.
- **⭐ GREAT BRITAIN IS FOUR SEPARATE LANES** — England, Scotland, Wales, Northern Ireland,
  under Western Europe. ⚖️ Merging them means an extra click on every dish to find out which
  country it came from.
- **⭐ ITALY IS A MERGE BEFORE A BUILD.** `meals.js` already carries 16 `pastapizza` cards. A
  dish belongs on several shelves at once via **`sharedWith`** — Italy AND Feed My Family AND
  Events — exactly as bobotie is Boerekos AND Cape Malay AND FMF. **Rule the merge before
  record 1 or you will ship two Cacio e Pepes.**
- **`grep` THE FILE BEFORE YOU PROBE A KEY.** Cost on 2 Aug: `egg noodles` reported ABSENT
  while `thin egg noodles` R176 sat in the file. Probing an invented spelling is not a check.

---

## 2 · ▶️ VIETNAM — WHAT IS KNOWN SO FAR

✅ **GREENFIELD, VERIFIED 2 Aug.** `goi cuon` · `bun cha` — CLEAR across the whole corpus.
⚠️ `banh mi` appears ONCE, in `meals.js`, as a `goesWith` string only. **Not a record.**

⛔ **THAILAND IS THE NEIGHBOUR WHOSE ARGUMENTS YOU CAN COLLIDE WITH**, and it is 38 records
deep. Fish sauce, rice noodles, herb plates, wrapping-at-the-table, chilli heat, iced sweet
drinks and fermented seafood ALL have owners two hundred kilometres away. **Greenfield every
Vietnamese lead against `sections/*.js`, not just `wk_vietnam.js`.**

⚠️ **REGISTERS ALREADY SPENT ON THE ASIA LANE — do not re-use:** capsaicin/TRPV1 ·
fat-solubility of heat · the Columbian exchange and Portuguese chilli routes · food
microbiology and lactic fermentation · rheology · historical linguistics · economic
geography of perishability · etymology of preservation · Thai dessert naming convention ·
palace/court kitchens · labour economics of fiddly food · religious demography and food
boundaries · psychoacoustics · phylogenetics · nutritional epidemiology.
⚖️ On Thailand record 36, **three registers were tested and all three were already spent.**
Expect the same and budget for it.

---

## 3 · 🟡 CARRIED DEBT — REVISED 3 Aug

### 3a · 🔴 THAILAND CLAIM CLEANUP — SPECIFIED, NOT YET DONE
The 11 🟠 unanchored cost claims break down three ways. **Tina ruled 3 Aug on all three.**

**7 quick anchors — AUTHORING.** The version genuinely IS the cheapest; it just never names
what it is cheaper *than*. Add the comparison. One pass, seven cards.

**1 false positive — LEAVE IT ALONE.** `gaeng-som` Vegetable-Led reads *"cheaper than it has
any right to taste"*. That is an idiom about flavour, not a cost claim. ⛔ Do not "fix" it.
If a future watcher run flags it again, re-read this line rather than re-deciding.

**3 real failures — STRIKE THE COST LANGUAGE AND RE-ARGUE ON THE DISH.** ⚖️ Tina, 3 Aug.
These are §37 failures, not wording failures — the fork label itself is wrong, so rewording
cannot rescue them.
- `khao-soi` **Gai** — claims cheaper while sitting mid-priced. It is a protein fork. Say
  what the chicken does to the dish, not what it does to the bill.
- `pu-phad-pong-karee` **Picked Meat** — same failure, same fix.
- `pu-phad-pong-karee` **Chicken** — claims to be *"the expensive one"* AND *"for a fifth of
  the money"* on one card. One of those two sentences was written for a different fork.
  ⚠️ Read both forks together before rewriting either.

### 3b · 🐑 THE LAMB JOB — HALF DONE, AND THE ORDER MATTERS
✅ The alias layer was completed 3 Aug per Tina's 12 Jul ruling: `lamb chops`→
`lamb shoulder chops` · `lamb cubes`→`leg of lamb` · `lamb pieces`·`lamb chunks`·
`lamb on the bone`·`bone-in lamb pieces`→`lamb potjiekos` · `lamb shin`→`lamb shank`.

🔴 **`"lamb": "lamb neck"` IS STILL LIVE IN `core.js` AND MUST DIE — BUT NOT FIRST.**
There are **19 bare `Ng lamb` lines across four lanes** (9 in `wk_africa.js`, 4 in
`wk_europe.js`, 3 in `wk_china.js`, 3 in `wk_southafrica.js`). **Name them, THEN kill the
alias.** Killing it first turns a wrong price into a missing one.

⚖️ The ruling: **`lamb potjiekos` R150 is a PRODUCT, not an alias to neck.** The shop bag is
a forequarter MIX. Stew · bredie · curry · breyani → potjiekos. Braai → `lamb shoulder chops`
R220. Skewers → `leg of lamb` (see `cape-malay-sosaties`). **There is NO bare-lamb default.**

### 3c · 🌶️ CHILLI-GRAM SWEEP
Convert count to grams corpus-wide. ⚠️ Includes `thailand-miang-kham` (`2 chillies`) and
`thailand-kua-kling` (`3 chillies`), both written 2 Aug before the ruling existed.
⭐ Purely mechanical, no ruling needed, and it retires a debt that would otherwise
contaminate every Vietnamese record with a chilli in it. **Good first job of the session.**

### 3d · 🥫 TINNED KEYS — RULED, PARTLY ACTIONED
✅ §38 written. ✅ `water chestnuts` R152 → **R275 `est`** and `bamboo shoots` R136 → **R220
`est`**, both under Arm 4. See `RULING_38_DRAINED_WEIGHT.md` for full derivations.
🟡 **Still open:** the corpus has never been swept for tinned keys. Sort every keyed tinned
ingredient into an arm. Expect a long Arm 1 list where nothing changes.
🟡 **Still open:** the shelf check. One photo of the back of either tin clears both `est`
markers and lifts the claim bar. Bamboo shoots is the weaker number — correct it first.

### 3i · 🔴 20 STALE `costPP` VALUES — LOGGED 3 Aug, TO BE DONE ONCE VIETNAM CLOSES
⚖️ **Tina's call, 3 Aug: log it, finish Vietnam, then clear it in one pass.**

⛔ **THIS IS A FAULT CLASS THE WATCHERS CANNOT SEE, AND THAT IS THE POINT OF THIS ENTRY.**
Four keys were corrected on 3 Aug (see the ledger). Twenty already-banked records use them in
PRICED ingredient lines, so their engine cost moved — but every movement is R1–R3, which sits
INSIDE `costcheck`'s ✅ tolerance. All four Asia lanes still report green. **`costcheck` green
means "within band", not "current".** A price correction small enough to pass tolerance still
leaves every derived number behind it stale, and nothing announces it.

⚠️ **`thailand-massaman` is in this list** — a lane closed 2 Aug with every gate green.
Closing a lane does not freeze its costs; it freezes its records.

▶️ **THE FIX IS MECHANICAL — §30.1, no rulings and no prices needed from Tina.** Re-derive each
stored `costPP` off the engine and set it. Before/after measured against `git show HEAD:sections/prices.js`.

| record | lane | engine cost | Δ | key that moved |
|---|---|---|---|---|
| `tunisia-mloukhia` | Tunisia | R36 → **R33** | -3 | coriander seed |
| `china-staple-master-stock` | China | R136 → **R138** | +2 | rock sugar |
| `china-da-pan-ji` | China | R261 → **R262** | +1 | rock sugar |
| `china-chongqing-huo-guo` | China | R523 → **R522** | -1 | black cardamom + rock sugar |
| `indonesia-tempe-goreng` | Indonesia | R45 → **R43** | -2 | coriander seed |
| `indonesia-sate-ayam` | Indonesia | R40 → **R37** | -3 | coriander seed |
| `indonesia-gudeg` | Indonesia | R55 → **R53** | -2 | coriander seed |
| `indonesia-ayam-goreng-kalasan` | Indonesia | R77 → **R75** | -2 | coriander seed |
| `indonesia-sate-lilit` | Indonesia | R57 → **R56** | -1 | coriander seed |
| `indonesia-ayam-betutu` | Indonesia | R55 → **R52** | -3 | coriander seed |
| `indonesia-soto-betawi` | Indonesia | R78 → **R75** | -3 | coriander seed |
| `indonesia-ayam-pop` | Indonesia | R56 → **R53** | -3 | coriander seed |
| `indonesia-tempe-mendoan` | Indonesia | R77 → **R75** | -2 | coriander seed |
| `indonesia-bebek-goreng` | Indonesia | R67 → **R64** | -3 | coriander seed |
| `indonesia-sate-padang` | Indonesia | R44 → **R41** | -3 | coriander seed |
| `indonesia-dendeng-balado` | Indonesia | R49 → **R46** | -3 | coriander seed |
| `boerekos-boerewors-homemade` | Boerekos | R50 → **R47** | -3 | coriander seed |
| `thailand-massaman` | Thailand | R83 → **R80** | -3 | coriander seed |
| `india-chicken-chettinad` | India | R32 → **R29** | -3 | coriander seed |
| `pakistan-chapli-kebab` | Pakistan | R30 → **R27** | -3 | coriander seed |

⚖️ **THE RULING THIS SUGGESTS, NOT YET MADE:** `costcheck` should be able to answer
"is this number CURRENT?" separately from "is this number IN BAND?". A cheap version is a
recorded hash of `prices.js` per lane — if the hash moved since the lane was costed, every
costPP in it is suspect regardless of tolerance. ⛔ Do not build this mid-lane. Note it, finish
Vietnam, then decide.

### 3j · 🟠 THE SUBSTRING-FALLTHROUGH PATTERN — LOGGED 3 Aug, NOT YET A WATCHER
⚖️ **Tina's call 3 Aug: log the debt, clear it once Vietnam closes.**

A compound ingredient name falls through to a SHORTER, CHEAPER key by substring and bills at
its price. It is never ABSENT, so coverage never drops and no watcher fires. `prices.js` already
carried five individually-noticed fixes of this shape before today: `rice noodles` (was `rice`
R27) · `shirataki noodles` (was `noodles` R80) · `thin egg noodles` (was `egg` PER COUNT) ·
`instant noodles` (was `noodles` R80) · `chilli oil` (was `chilli` R80, ~6x).

**Nine more found on 3 Aug in one afternoon of Vietnam authoring:** `coriander seeds`→`coriander`
(7x HIGH — the fresh-herb key) · `black cardamom`→`cardamom` (7x HIGH — green) · `rock sugar`→
`sugar` · `thai basil`→`basil` · `rice paper`→`rice` (6.5x LOW) · `rice vermicelli`→`rice` ·
`tapioca pearls`→ABSENT · `mung beans`→ABSENT · `rice vinegar`→`vinegar` R25 (~5x LOW).

⚖️ **FOURTEEN INSTANCES IS A PATTERN, NOT BAD LUCK.** Every one was caught by a human reading a
resolution table, so the ones nobody looked at are still live. The mechanical rung: for every
ingredient string in the corpus, assert the resolved key IS the written name (after alias)
rather than merely a substring of it, and print every case where a LONGER written name resolved
to a SHORTER key. Expect a long list and expect most of it to be legitimate — the tool's job is
to make the illegitimate ones visible, not to auto-fix.
⛔ **DO NOT BUILD THIS MID-LANE.**

### 3k · 🔴 `rice noodles` R45 IS AN UNSOURCED ESTIMATE, SUSPECTED ~4x LOW — NEEDS TINA
Real SA shelf data for the dried-rice-noodle family, sourced by Tina 3 Aug, lands at
**R165–R200/kg**. `rice noodles` sits at **R45**, has never been Tina-sourced, and carries no
evidence — a stopgap that fixed an earlier `rice` R27 fallthrough and inherited nothing.

⛔ **DELIBERATELY NOT CHANGED.** Extrapolating a VERMICELLI price onto FLAT noodles is precisely
the assumption that put R27 rice paper in the file. **Needs one shelf price from Tina.**
⚠️ Used in priced lines by `thailand-pad-thai` (80g) · `thailand-rad-na` (180g) ·
`china-gon-chow-ngau-ho` · `china-duo-jiao-yu-tou` · `china-guo-qiao-mi-xian` ·
`vietnam-pho-bo` (120g). Rad Na and Pad Thai would move enough to break the 40% band.

### 3l · 🟡 DOES THE MOST-EXPENSIVE RULE TAKE A MID ON WIDE BANDS? — OPEN, NOT RULED
Surfaced 3 Aug on `rice vinegar`. The band was Safari R120/L · Kong Yen R153–200/L · Woolworths
200ml R82.99 → **R415/L**. The most-expensive rule (13 Jun, restated 30 Jul) gives R415. Applied
literally for one merge, it moved 13 banked records — `japan-oshizushi` R22→R61 (+177%),
`japan-sunomono` R6→R14, `japan-gari` R19→R38 — and put Japan from 3 red to **11 red**. A 200ml
specialty bottle was setting the price of a staple used 50ml at a time in sushi rice.

⚖️ **Tina then named the product — Safari R44.99/375ml → R120/L — which resolved THIS key but
did NOT rule the general case.** The counter-precedent already exists: on 22 Jul `white wine
vinegar` R165 was set as an HONEST MID of its R150–180 band, not the top.
▶️ **The open question: should the rule take a mid when a band spans more than ~2x?**

### 3m · 🟠 SEVEN JAPAN VERSIONS NOW 15–40% OUT — CAUSED BY THE `rice vinegar` FIX, 3 Aug
⚖️ Correcting `rice vinegar` R25 → R120 is right, and these seven were previously costed against
a price that was ~5x too low. **They are not new faults; they are pre-existing faults becoming
visible.** Re-derive each costPP off the engine — §30.1, mechanical, no rulings needed.

| record | version | authored | engine | out by |
|---|---|---|---|---|
| `japan-oshizushi` | Yasai Oshizushi | R17 | R27 | 37% |
| `japan-oshizushi` | Battera — Shime Saba | R22 | R32 | 31% |
| `japan-sunomono` | Kyuri no Sunomono | R3 | R5 | 40% |
| `japan-sunomono` | Kyuri to Wakame | R6 | R8 | 25% |
| `japan-gari` | Gari from Mature Ginger | R16 | R21 | 24% |
| `japan-gari` | Gari — Sweet Pickled Ginger | R19 | R24 | 21% |
| `japan-gari` | Beni Shoga | R19 | R23 | 17% |

⚠️ Japan's 3 RED are PRE-EXISTING and were present before this session — measured against
`git show HEAD:sections/prices.js`. Do not attribute them to the Vietnam work.

### 3e · 📁 MF-BRIEF FILING
33 MF-briefs live in `reference/` and `/law` hygiene flags them. Several are visibly done. A
filing pass into `Archive/` drops the hygiene count and stops a future session reading a
spent brief as live work. ⚠️ Nothing new was filed 3 Aug precisely to avoid growing this.

### 3f · §2.5 MERGE UNRUN — seven SA dishes held.

### 3g · 🟡 NORTHERN IRELAND — STILL TINA'S CALL
NI's 12 records are PRE-STANDARD — 160–290 character methods, zero versions, no trivia.
Building England, Scotland and Wales to WOW standard puts three modern lanes beside a legacy
shelf in the same union. Decide before the UK lane opens, not during.

---

## 3h · ✅ CLOSED 3 Aug — DO NOT RE-OPEN
- **`wkCourseToTab` sending `soup` to MAINS.** ⚖️ Tina: **leave it.** §27 struck the sixth
  tab, so soups live on Mains because there is nowhere else to put them. The UI showing
  Mains 16 where `course:"main"` is 14 is a two-dish discrepancy no cook will ever notice.
  ⛔ This is settled. A future session noticing the mismatch should read this line and move on.

---

## 4 · 🚧 STANDING BLOCKS — UNCHANGED
- **Purin** blocked — egg closed at 3.
- **Kakigori** blocked — no SA shaver, collides with Anmitsu.
- **Glutinous rice flour unresolved** → Japan mochi blocked, and Thai **Bua Loi** with it.
- **`japan-nukazuke` costPP** is ruling-set §31.3c — **exclude from all sweeps.**

---

## 5 · ⚙️ THE BANKING MECHANIC — ONE RECORD, ONE HANDBACK
**write one record → `node tinza-all.js vietnam` → 8 standards green, 0 red, 0 drift →
BANK → next record.** No stacking. If something breaks, the blame is one record wide and git
has a clean point to stand on.

---

## 6 · 🗺️ THE ROADMAP AFTER VIETNAM
**Vietnam → Italy → the UK (England · Scotland · Wales) → Europe closed → South America
(Peru · Argentina · Brazil · Colombia) → Mexico → Canada → USA.**
⚖️ Europe is further along than it looks: 518 records in `wk_europe.js` alone —
Spain 58 · Greece 52 · Portugal 47 · Turkey 42 · Switzerland 32 · Poland 32 · Hungary 28 ·
Georgia 28 · France 28 · Austria 26 · Norway 24 · Denmark 24 · Russia 23 · Netherlands 22 ·
Ukraine 22 · Belgium 20 · Sweden 19 · Finland 19 · Germany 14 · Northern Ireland 12.
**Italy and Great Britain are genuinely the last two gaps.**

---

## 7 · ▶️ SUGGESTED ORDER FOR THE NEXT SESSION
1. **Chilli-gram sweep** — mechanical, no ruling, clears a live contaminant.
2. **7 quick anchors** — authoring, one pass.
3. **3 struck claims** — authoring, read both `pu-phad-pong-karee` forks together.
4. **Lamb: name 19 lines, THEN kill the alias.** Order is not negotiable.
5. **MF filing pass** — hygiene, safe to defer.
6. **Vietnam record 1.**

⚖️ Debt first was Tina's call, 3 Aug: Vietnam starts on a clean board rather than inheriting
someone else's mess.
