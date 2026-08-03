# 🇻🇳 VIETNAM — COLD START
**Opened 3 Aug 2026, at Thailand close (38).** Read this BEFORE anything else.

---

## 0 · THE OPENING SEQUENCE — NOT OPTIONAL

```
1. clone
2. read THIS file, all of it
3. read reference/THAILAND_COLD_START.md §4o — the close, and every carried ruling
4. COUNT WITH NODE. Never by eye, never from a handoff, never from memory.
5. node tinza-all.js thailand   → expect 38 · 8 standards · 0 red · 0 drift
                                   claimcheck 🔴 0 · 🟠 11 · 🔵 20
6. node priceledger.js --ask <term>   BEFORE asking Tina for ANY price
```

⚖️ **The lane file `sections/wk_vietnam.js` exists and is WIRED, with 0 records.**
All three lines are live: the `index.html` script tag, `window.WK_VIETNAM || []` in
`wkPool()`, and `WK_COUNTRY_GEO["Vietnam"]`. Record 1 lands and simply works.
⚠️ `wkCountriesIn()` derives the country list from the RECORDS, so at 0 records Vietnam
does not appear in the Asia grid at all. No empty tile. It starts existing at record 1.

⛔ **THE PROCESS SCAR: never run `git checkout` on a lane file that is ahead of HEAD.**
⛔ **THE SECOND SCAR, 2 Aug: after any edit to a `reference/` file, run `git status` and
READ THE PATH, not the filename.** A reference file written to the repo root instead of
`reference/` is indistinguishable from one never written at all — the tools read
`reference/`. This cost two reds and the first two hours of the 2 Aug session.

---

## 1 · ⚖️ RULINGS CARRIED IN — THESE ARE LANE-INDEPENDENT, THEY APPLY FROM RECORD 1

- **§37 — BUDGET IS A CLAIM, NOT A CATEGORY.** A fork carries `Budget` only if its costPP
  is at or below the parent's. A meat→tofu, meat→legume or meat→egg swap is a **diet**
  fork, labelled by diet, never by cost. `claimcheck` asserts it.
- **§26 decides vegan vs vegetarian PER FORK** — the label follows what the fork actually
  contains, not what is convenient.
- **A claim can be arithmetically right and still FALSE ON THE CARD.** Khanom Jeen Reo
  cost R3.09 against R2.70 and both display **R3**. If the reader cannot see the
  difference, do not assert it.
- **⭐ VERSION SETS MUST VARY THE DISH, NOT THE ANIMAL.** Tina, 2 Aug: six Thai records ran
  the identical *Budget → chicken → third protein* fork set, and five of those six sit in
  the 🟠 list. `Khao Pad Sapparot` is the shape to copy — a fork that changes the DISH.
- **⭐ GREENFIELD THE ARGUMENT, NOT THE NOUN.** A card that never says your word can still
  own your point. On the Thai lane this found Misugaru, Kai Palo, Khao Tom and Nam Prik
  Ong — none of which shared a search term with the dish being checked.
- **§30.1 costPP is DERIVED by `costcheck.js`, never authored.** Write a placeholder, run
  the tool, set the engine's number.
- **§33 / §33.8 — SA words are EXPLAINED, never translated away.** The gloss must sit
  immediately beside the word, in a **dash or bracket** form. A comma does not satisfy
  the watcher: `pap, the stiff maize porridge` FAILS; `pap — the stiff maize porridge`
  PASSES.
- **⭐ CHILLIES BY GRAM, NOT BY COUNT** *(Tina, 3 Aug)*. Chillies differ too much in size
  for a count to mean anything. `chilli` R80/kg and `green chilli` R80/kg are already
  keyed. ⛔ This also **kills §4z item 4 outright** — the singular/plural `_each` problem
  only existed because of count keys.
- **⭐ EVERY COUNTRY NEEDS starter · side · main · dessert** *(Tina, 3 Aug)*. Drinks may sit
  under dessert. That is a floor per lane, not a target.
- **⭐ GREAT BRITAIN IS FOUR SEPARATE LANES** *(Tina, 3 Aug)* — England, Scotland, Wales,
  Northern Ireland, filed under Western Europe. ⚖️ Her reason: merging them means an extra
  click on every dish to find out which country it came from.
- **⭐ ITALY IS A MERGE BEFORE A BUILD** *(Tina, 3 Aug)*. `meals.js` already carries 16
  `pastapizza` cards. A dish belongs on several shelves at once via **`sharedWith`** —
  Italy AND Feed My Family AND Events — exactly as bobotie is Boerekos AND Cape Malay AND
  FMF. **Rule the merge before record 1 or you will ship two Cacio e Pepes.**
- **`grep` THE FILE BEFORE YOU PROBE A KEY.** Cost on 2 Aug: `egg noodles` reported ABSENT
  while `thin egg noodles` R176 sat in the file. Probing an invented spelling is not a check.

---

## 2 · ▶️ VIETNAM — WHAT IS KNOWN SO FAR

✅ **GREENFIELD, VERIFIED 2 Aug.** `goi cuon` · `bun cha` — CLEAR across the whole corpus.
⚠️ `banh mi` appears ONCE, in `meals.js`, as a `goesWith` string only. **Not a record.**

⛔ **THAILAND IS NOW THE NEIGHBOUR WHOSE ARGUMENTS YOU CAN COLLIDE WITH**, and it is 38
records deep. Fish sauce, rice noodles, herb plates, wrapping-at-the-table, chilli heat,
iced sweet drinks and fermented seafood ALL have owners two hundred kilometres away.
**Greenfield every Vietnamese lead against `sections/*.js`, not just `wk_vietnam.js`.**

⚠️ **REGISTERS ALREADY SPENT ON THE ASIA LANE — do not re-use:** capsaicin/TRPV1 ·
fat-solubility of heat · the Columbian exchange and Portuguese chilli routes · food
microbiology and lactic fermentation · rheology · historical linguistics · economic
geography of perishability · etymology of preservation · Thai dessert naming convention ·
palace/court kitchens · labour economics of fiddly food · religious demography and food
boundaries · psychoacoustics · phylogenetics · nutritional epidemiology.
⚖️ On Thailand record 36, **three registers were tested and all three were already spent.**
Expect the same and budget for it.

---

## 3 · 🟡 CARRIED DEBT — NOT VIETNAM'S, STILL OPEN

1. **11 pre-existing 🟠 unanchored cost claims on Thailand.** Broken down 3 Aug:
   **7 are quick anchors** (the version genuinely IS cheapest, it just never names what it
   is cheaper than) · **1 is a false positive** — `gaeng-som` Vegetable-Led reads *"cheaper
   than it has any right to taste"*, which is an idiom about flavour, **do not "fix" it** ·
   **3 are real and need a decision**: `khao-soi Gai` and `pu-phad-pong-karee Picked Meat`
   both claim *cheaper* while being MID-PRICED, and `pu-phad-pong-karee Chicken` claims
   both *"the expensive one"* and *"for a fifth of the money"* on one card.
2. **🐑 THE LAMB JOB — HALF DONE, AND THE ORDER MATTERS.**
   ✅ The alias layer was completed 3 Aug per Tina's 12 Jul ruling: `lamb chops`→
   `lamb shoulder chops` · `lamb cubes`→`leg of lamb` · `lamb pieces`·`lamb chunks`·
   `lamb on the bone`·`bone-in lamb pieces`→`lamb potjiekos` · `lamb shin`→`lamb shank`.
   🔴 **`"lamb": "lamb neck"` IS STILL LIVE IN `core.js` AND MUST DIE — BUT NOT FIRST.**
   There are **19 bare `Ng lamb` lines across four lanes** (9 in `wk_africa.js`, 4 in
   `wk_europe.js`, 3 in `wk_china.js`, 3 in `wk_southafrica.js`). **Name them, THEN kill
   the alias.** Killing it first turns a wrong price into a missing one.
   ⚖️ The ruling itself: **`lamb potjiekos` R150 is a PRODUCT, not an alias to neck.** The
   shop bag is a forequarter MIX. Stew · bredie · curry · breyani → potjiekos. Braai →
   `lamb shoulder chops` R220. Skewers → `leg of lamb` (see `cape-malay-sosaties`).
   **There is NO bare-lamb default. Bare lines get named individually.**
3. **CHILLI-GRAM SWEEP.** Convert count to grams corpus-wide. ⚠️ Includes
   `thailand-miang-kham` (`2 chillies`) and `thailand-kua-kling` (`3 chillies`), both
   written 2 Aug before the ruling existed.
4. **`wkCourseToTab` sends `soup` to the MAINS tab** via `default:`. The UI shows Mains 16
   where `course:"main"` is 14. ⛔ Not a bug to fix unilaterally — §27 struck the sixth
   tab, so adding a Soups shelf is **Tina's ruling**.
5. **TINNED DRAINED WEIGHT.** `water chestnuts` R152 and `bamboo shoots` R136 both divide
   price by the weight printed on the tin. If a tin prints a SEPARATE drained weight, both
   are understated and **both move together, in one pass, never key by key.**
6. **33 MF-briefs live in `reference/`** and `/law` hygiene flags them. Several are visibly
   done. A filing pass into `Archive/` would drop the hygiene count and stop a future
   session reading a spent brief as live work.
7. **§2.5 merge unrun — seven SA dishes held.**

---

## 4 · 🚧 STANDING BLOCKS — UNCHANGED
- **Purin** blocked — egg closed at 3.
- **Kakigori** blocked — no SA shaver, collides with Anmitsu.
- **Glutinous rice flour unresolved** → Japan mochi blocked, and Thai **Bua Loi** with it.
- **`japan-nukazuke` costPP** is ruling-set §31.3c — **exclude from all sweeps.**

---

## 5 · ⚙️ THE BANKING MECHANIC — ONE RECORD, ONE HANDBACK
**write one record → `node tinza-all.js vietnam` → 8 standards green, 0 red, 0 drift →
BANK → next record.** No stacking. If something breaks, the blame is one record wide and
git has a clean point to stand on.

---

## 6 · 🗺️ THE ROADMAP AFTER VIETNAM *(Tina, 3 Aug)*
**Vietnam → Italy → the UK (England · Scotland · Wales) → Europe closed → South America
(Peru · Argentina · Brazil · Colombia) → Mexico → Canada → USA.**
⚖️ Europe is further along than it looks: 518 records in `wk_europe.js` alone —
Spain 58 · Greece 52 · Portugal 47 · Turkey 42 · Switzerland 32 · Poland 32 · Hungary 28 ·
Georgia 28 · France 28 · Austria 26 · Norway 24 · Denmark 24 · Russia 23 · Netherlands 22 ·
Ukraine 22 · Belgium 20 · Sweden 19 · Finland 19 · Germany 14 · Northern Ireland 12.
**Italy and Great Britain are genuinely the last two gaps.**
⚠️ Northern Ireland's 12 records are PRE-STANDARD — 160–290 character methods, zero
versions, no trivia. Building England, Scotland and Wales to WOW standard puts three
modern lanes beside a legacy shelf in the same union. **Tina's call whether NI gets rebuilt.**
