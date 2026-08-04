# 🇻🇳 VIETNAM — COLD START
**Opened 3 Aug 2026, at Thailand close (38). Revised 4 Aug 2026, end of session.** Read this
BEFORE anything else.

## ⚖️ LANE STATE — 10 of 50

**Verified at 4 Aug close: 10 records · 30 versions · ALL GATES GREEN.**
`costcheck 30/30 · pricecheck exact 70 / wrong-product 0 / absent 0 · echo 0 red 0 amber ·
lawcheck 0 red 0 drift · claimcheck 0 red 0 amber · /wow + /wk 0 warns`

Courses: **main 4 · starter 2 · side 2 · dessert 2.** ✅ The course floor is met — the lane
was main-heavy through B1 and B2 deliberately corrected toward sides and starters.

Banked 4 Aug (records 5–10): `vietnam-com-tam` · `vietnam-banh-mi` · `vietnam-xoi-xeo` ·
`vietnam-banh-xeo` · `vietnam-ca-phe-sua-da` · `vietnam-canh-chua`.
Also repaired 4 Aug: `vietnam-che-chuoi` (/wow §1 causal markers made explicit — content
unchanged, the logic was already there in dashes) and `vietnam-banh-mi` v1 R53 → R63 after the
A-or-B ingredient line was fixed.

⛔ **NOT PUSHED AT SESSION CLOSE.** Tina holds the files and pushes herself. The next session
must `git log -1` and COUNT WITH NODE before assuming any of the above is at HEAD.

### ⛔ DISHES STRUCK — DO NOT RE-PROPOSE
- **Rau muống xào tỏi** — `indonesia-plecing-kangkung` owns the plant, already rules it not
  reliably sold in SA, and owns the hollow-stem argument.
- **Cà tím nướng mỡ hành** — hot-oil-over-raw-aromatics has 5 owners incl. `sambal matah`.
- **Bánh bột lọc** — DEFERRED, not struck. Noun is clear (0 hits) but its scalded-dough
  argument is owned six ways (`china-cong-you-bing`, `china-xiao-long-bao`, `spain-churros`).
  Needs a genuinely new angle before it can be written.
- **Nem rán / chả giò** — DEFERRED, not struck. Noun clear (0 hits), but both natural
  arguments collide WITHIN THIS LANE: the sealed-wrapper-steams-inside point is bánh xèo's lid
  argument, and the sugar-for-browning point is cơm tấm's marinade argument. ⚖️ A within-lane
  repeat is worse than a cross-lane one.
- **Cá kho tộ** — caramel-past-sweetness has 11 owners, `china-hong-shao-rou` leads.
- **Rau câu / agar jelly** — `japan-anmitsu` owns agar.

### 🔵 ONE OPEN QUESTION FOR TINA
`vietnam-xoi-xeo`, Xôi Gấc fork, asserts gấc fruit is unbuyable in SA. Claimcheck flags it
because `red bean paste` R120 overlaps the wording. ⚖️ This is a FALSE POSITIVE — gấc is a
different fruit entirely — but the assertion itself has never been checked with Tina's eyes.

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
5. node tinza-all.js vietnam    → expect 10 · 0 red · 0 drift · 6 🔵 · 0 warns
                                   (was 4 at 3 Aug close; 6 banked 4 Aug)
6. node tinza-all.js thailand   → expect 38 · 0 red · 0 drift
                                   claimcheck 🔴 0 · 🟠 11 · 🔵 20
6. node priceledger.js --ask <term>   BEFORE asking Tina for ANY price
```

**✅ FULLY WIRED — all three lines verified:** `index.html:160` · `worldkitchen.js:58` concat ·
`WK_COUNTRY_GEO["Vietnam"]`.

**B1 BANKED (3 Aug) — Phở Bò R99·R85·R75 · Gỏi Cuốn R67·R57·R55 · Bún Chả R80·R85·R83 ·
Chè Chuối R21·R24·R22.**
**B2 BANKED (4 Aug) — Cơm Tấm R65·R78·R77 · Bánh Mì R63·R71·R66 · Xôi Xéo R15·R19·R19 ·
Bánh Xèo R82·R72·R77 · Cà Phê Sữa Đá R30·R27·R34 · Canh Chua R85·R111·R82.**
⚠️ B2 has NO archived batch source — the records live only in `sections/wk_vietnam.js` and in
the files handed to Tina until it is pushed. See the container-revert scar at the foot of this
file.

B1 source archived at `Archive/Vietnam-recipes/vietnam-batch1.js`; B2 source archived at
`Archive/Vietnam-recipes/vietnam-batch2.js` (written 4 Aug, after the revert incident).

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

### 3k · ✅ CLOSED 4 Aug — `rice noodles` R45 IS TINA-GIVEN. DO NOT RE-ASK.
⚖️ **Tina confirmed 4 Aug that she supplied this number, and had to say so more than once.**
The price was never written to `PRICE_LEDGER.json` at the time, and the evidence text was lost in
the 3 Aug container reset. A later comment then described the key as "never Tina-sourced" —
⛔ **that claim is STRUCK.** It was a bookkeeping failure on the tooling side, not a missing price.

✅ Now ledgered (4 Aug, grandfathered) and marked TINA-SOURCED in `prices.js`.
`node priceledger.js --ask "rice noodles"` returns 🛑 DO NOT ASK.

⚠️ **ONE OPEN QUESTION REMAINS, AND IT IS A BAND QUESTION, NOT A PROVENANCE ONE.** `rice
vermicelli` R200 put the ROUND cut at R165–R200/kg. R45 for the FLAT cut sits well below that
family. Both can be true — different cut, different manufacture — and **R45 stands unless Tina
says otherwise.** ⛔ This is not a reason to ask her again.

⚖️ **THE RUNG THIS ESTABLISHES:** a price is not received until it is in the LEDGER. Writing it
into `prices.js` alone means a container reset can destroy the evidence while leaving the number,
and the next session reads a bare number as an estimate and asks her again. **Ledger entry and
key in the same write, always.** Three re-asks on `rice vinegar` and two on this key are the cost
of having learned it late.

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

---

# ⛔ PROCESS SCAR — 4 AUG 2026 · THE WORKING FILE SILENTLY REVERTED

**WHAT HAPPENED.** Between the record-9 handback and the record-10 merge, `sections/wk_vietnam.js`
in the working container **reverted to its record-7 state**, silently losing `vietnam-banh-xeo` and
`vietnam-ca-phe-sua-da` — roughly two hours of authoring. Nothing errored. The file parsed, the
lane loaded, and `merge.js` proceeded to write record 10 onto the reverted file, announcing
`7 + 1 = 8` when the true count was 9.

⚠️ **THE REVERT WAS WIDER THAN THE LANE FILE.** `/home/claude/work/` reverted too, taking the
scratch record sources `r8.js` and `r9.js` with it. Assume a revert takes EVERYTHING in the
container, not just the file you were editing.

**WHAT SAVED IT.** Nothing in the container and nothing in git. The two records were recovered
**only** from the copy handed to Tina via `present_files` after record 9. ⚖️ **THIS IS THE ENTIRE
JUSTIFICATION FOR THE ONE-RECORD-ONE-HANDBACK RULE.** Had the batch been handed back at the end
instead, both records were gone with no recovery path.

**WHAT WORKED.**
- ✅ `merge.js` has a **count watcher** that refuses to write when the record count changes outside
  a merge. It printed the surprise and told the operator to find out what happened rather than
  offering a quiet fix. Without it, `7 + 1 = 8` would have looked routine and the loss would only
  have surfaced when two cards were missing from the app.
- ✅ `--accept-count` was used **only after** the restored file was verified record-by-record and
  cost-by-cost against the handback. ⛔ That flag must never be used to make a surprise go away.
- ✅ `git checkout` was NOT used. HEAD was at 4 records; it would have destroyed six.

**ARCHIVE THE BATCH SOURCE FROM THE LIVE LANE, NOT FROM SCRATCH FILES.**
`Archive/Vietnam-recipes/vietnam-batch2.js` was rebuilt by extracting the six records straight
out of `sections/wk_vietnam.js` after banking. ✅ That is strictly better than archiving the
authoring files: the live lane carries every post-merge fix (causal markers, echo rewrites, the
baguette ingredient-line fix and the resulting R53 -> R63 re-derive) that the scratch files never
had. ⛔ Do not archive from `/home/claude/work/`.

**THE RUNG.** ⚖️ **THE CONTAINER IS NOT STORAGE. THE HANDBACK IS THE ONLY DURABLE COPY.**
Hand back after EVERY record, never at the end of a batch. Before any merge, if the printed
`n + 1 = m` does not match the count you expect, **STOP AND COUNT** — do not proceed and do not
re-baseline until the cause is established or the file is verified against a handback.

---

# ⛔ PROCESS SCAR — 4 AUG 2026 · A PRICE IS NOT RECEIVED UNTIL IT IS LEDGERED

Tina supplied `rice vinegar` roughly three times and the flat `rice noodles` price twice, because
each was written into `prices.js` while its evidence text lived only in a container that later
reset. A bare number with no ledger entry reads to the next session as an estimate, and it gets
re-asked. ⚖️ **LEDGER ENTRY AND PRICE KEY IN THE SAME WRITE, ALWAYS.** Never "I'll ledger it after
the record merges."

---

# ⚠️ WATCHER GAPS FOUND 4 AUG — NOT YET FIXED

**1. `claimcheck.js` does not read `howThisFeels`.** A §37 cost claim ("the cheapest version") was
written into both `trivia` and `howThisFeels` on the same fork. Claimcheck flagged the `trivia`
one; fixing it turned the summary green while the identical false claim — on the DEAREST of the
three versions — was still live in `howThisFeels`. It was caught by grep, not by a watcher.
⚖️ **Green means clean where we looked, not clean.** `howThisFeels` needs adding to the claimcheck
field sweep.

**2. Grepping `tinza-all.js` output for red patterns hides amber warns on your own new records.**
`/wow §1` fired on `vietnam-banh-xeo` and an A-or-B ingredient line fired on `vietnam-banh-mi`
while both were being reported as green. ⛔ Read the `⚠️` lines in full every time, or grep for
`⚠️` explicitly.

**3. A-or-B ingredient lines price nothing.** `1 small baguette or roll` resolved as an exact key
in `pricecheck` but `wowcheck` correctly flagged it as unpriceable. Fixed to `1 baguette`, which
moved `vietnam-banh-mi` v1 from R53 to R63. ⚖️ Never write "X or Y" in an ingredients line; put the
alternative in the method as a §35 route.

---
