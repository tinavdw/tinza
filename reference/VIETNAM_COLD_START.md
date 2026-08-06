# 🇻🇳 VIETNAM — COLD START
**Opened 3 Aug 2026 at Thailand close. Rewritten 6 Aug 2026 after B4.** Read this BEFORE anything else.

> ⚠️ **NO LINE NUMBERS. Every anchor is a SYMBOL.**
> ⛔ **WRITE THIS FILE TO `reference/VIETNAM_COLD_START.md`.** Then run `git status` and READ THE PATH, not the filename. A reference file written to the repo root is indistinguishable from one never written at all — the tools read `reference/`. That scar cost two reds and two hours on 2 Aug.

---

## ⚖️ LANE STATE — 17 of 50

**Verified at 6 Aug close: 17 records · 51 versions · ALL GATES GREEN.**

```
doctor 10 (baseline, unchanged)   ·  lawcheck 0 red 0 drift
/wow + /wk  every mechanical box ticked          ·  costcheck 51/51
tinza-echo  0 red 0 amber 0 lecture 0 mascot 0 locale 0 gloss
claimcheck  0 red 0 amber 6 🔵      ·  pricecheck exact 91 / wrong-product 0 / absent 0
```

📒 `reference/ASIA_LEDGER.json` baselined to **vietnam 17 · hash `ea49bcbf21134653`**, derived by `merge.js`'s own `fingerprint()`, never hand-typed.

**Courses: main 9 · starter 3 · dessert 3 · side 2.** ✅ Floor met on all four.

> **PREVIOUS ENTRY, KEPT PER §2.3 —** *11 of 50 · 33 versions.* ⚠️ The 4 Aug version of this file said **main 4** and was wrong by one — `vietnam-bo-kho` was banked as a main and the course line was never updated with it. **Recount, never re-read.**

### 📦 THE 17

| # | id | course | costPP |
|---|---|---|---|
| 1 | `vietnam-pho-bo` | main | 100 · 89 · 76 |
| 2 | `vietnam-goi-cuon` | starter | 67 · 60 · 55 |
| 3 | `vietnam-bun-cha` | main | 83 · 93 · 83 |
| 4 | `vietnam-che-chuoi` | dessert | 21 · 24 · 22 |
| 5 | `vietnam-com-tam` | main | 65 · 78 · 80 |
| 6 | `vietnam-banh-mi` | main | 63 · 82 · 83 |
| 7 | `vietnam-xoi-xeo` | side | 15 · 19 · 19 |
| 8 | `vietnam-banh-xeo` | starter | 83 · 73 · 82 |
| 9 | `vietnam-ca-phe-sua-da` | dessert | 30 · 27 · 34 |
| 10 | `vietnam-canh-chua` | side | 85 · 111 · 84 |
| 11 | `vietnam-bo-kho` | main | 75 · 91 · 77 |
| **12** | **`vietnam-cha-ca-la-vong`** | main | **96 · 96 · 125** |
| **13** | **`vietnam-ga-kho-gung`** | main | **45 · 52 · 59** |
| **14** | **`vietnam-banh-beo`** | starter | **32 · 41 · 22** |
| **15** | **`vietnam-ca-ri-ga`** | main | **58 · 64 · 98** |
| **16** | **`vietnam-dau-hu-sot-ca`** | main | **59 · 73 · 84** |
| **17** | **`vietnam-sinh-to-bo`** | dessert | **18 · 17 · 23** |

⚖️ **`node costcheck.js vietnam` is the only source of truth for a costPP.** ⛔ Do not compare these against an older handoff and conclude a record drifted.

**Batch sources archived:** `Archive/vietnam-batch1.js` · `Archive/vietnam-batch2.js` (written after the fact) · `Archive/vietnam-batch3.js` · **`Archive/vietnam-batch4-FULL.js` (B4, all six, `/wow`-clean).**
✅ **B4 was banked one record at a time and handed over after each merge**, at Tina's instruction — *"maybe bank after each one, im scared we gonna bomb out."* That is now the lane's working method.

---

## 0 · THE OPENING SEQUENCE — NOT OPTIONAL

```
1. clone
2. read THIS file, all of it
3. COUNT WITH NODE. Never by eye, never from a handoff, never from memory.
4. node tinza-all.js vietnam    → expect 17 · 0 red · 0 drift · 6 🔵 · 0 warns
5. node tinza-all.js thailand   → expect 38 · 0 red · 0 drift · 🟠 11 · 🔵 20
6. node priceledger.js --ask <term>   BEFORE asking Tina for ANY price
```

**✅ FULLY WIRED:** `index.html` script tag · `window.WK_VIETNAM || []` in `wkPool()` · `WK_COUNTRY_GEO["Vietnam"]`.

⛔ **PROCESS SCAR: never run `git checkout` on a lane file that is ahead of HEAD.**

---

## 🩸 1 · THE META-SCAR FROM 6 AUG — A BRIEF NAMED THE WRONG DOCUMENT

`VIETNAM_OPEN.md`, written on the afternoon of 6 Aug, correctly struck `THAILAND_COLD_START.md` as the wrong template — **and never mentioned that THIS FILE EXISTS.** It sent the next session to the Thailand document to say "don't use it" and never named the right one. It also carried `FMF_SESSION_CLOSE_6AUG.md`'s stale claim that `wk_thailand.js` was empty when it held 38.

⚖️ **A brief that rules out the wrong document without naming the right one is half a brief.**

📌 **Every future Vietnam brief must name `reference/VIETNAM_COLD_START.md` in its attachment list.** That is the fix, and it is one line.

---

## 2 · ⛔ SPENT ARGUMENTS — DO NOT REUSE THESE IN VIETNAM

### From B1–B3
- **Deliberate charring / pyrolysis vs Maillard** — `vietnam-pho-bo`
- **Rehydration continuing after the water leaves** — `vietnam-goi-cuon`
- **A sauce that changes during the meal** — `vietnam-bun-cha`
- **Ethylene and climacteric ripening** — `vietnam-che-chuoi`
- **Coconut milk is an emulsion and a hard boil breaks it** — `vietnam-che-chuoi`
- **nước chấm** is owned by `vietnam-goi-cuon`. **Peanut dipping sauce belongs to Indonesia** — six records deep, do not take it.
- **Rice starch sets into an elastic film without gluten** — `vietnam-banh-xeo`
- **Robusta vs arabica, immersion brewing** — `vietnam-ca-phe-sua-da`
- **Broken grain hydrates faster than whole** — `vietnam-com-tam`
- **Wheat cut with rice flour gives a weaker gluten net** — `vietnam-banh-mi`
- **Carrots go in at the END of a braise** — `vietnam-bo-kho`
- **Tamarind vs vinegar vs citrus as acids** — `vietnam-canh-chua`

### 🆕 From B4 — SIX NEW REGISTERS BURNED, 6 Aug
- **Herb geography / the isotherm not the border** — `vietnam-cha-ca-la-vong` (dill is a cool-season plant; Hanoi has a real winter and no other SE Asian kitchen does)
- **Gingerol → shogaol vs zingerone, and wet-vs-dry heat deciding which** — `vietnam-ga-kho-gung`
- **Setting contraction in a rigid vessel** — `vietnam-banh-beo` (rim locks, base sticks, centre pulls down → the dimple)
- **Pectin degradation shedding starch granules; cut size as the thickening dial** — `vietnam-ca-ri-ga`
- **Void space in a protein, and vapour pressure drawing sauce in on cooling** — `vietnam-dau-hu-sot-ca`
- **Sweet-vs-savoury classification assigned by what was already on the table** — `vietnam-sinh-to-bo`

### ⚠️ SPENT ACROSS THE WHOLE ASIA LANE — check before reaching
capsaicin/TRPV1 · fat-solubility of heat · Columbian exchange and Portuguese chilli routes · lactic fermentation and food microbiology · rheology · historical linguistics · economic geography of perishability · palace/court kitchens · labour economics of fiddly food · religious demography · psychoacoustics · phylogenetics · nutritional epidemiology · collagen→gelatin (~60 records) · clear-broth skimming · raw meat cooked at the table · quick-pickle-vs-ferment · osmosis (12 records) · shaved-ice desserts · **ice-crystal size (13 hits)**

### 🩸 THE ONE THAT NEARLY COST A RECORD — 6 Aug
⛔ **`wk_china.js` OWNS THE ENTIRE TOFU-COAGULATION REGISTER.** It carries a from-scratch tofu record covering nigari vs acid setting, silken vs firm, and the curd itself. `vietnam-dau-hu-sot-ca` was one paragraph from leading on exactly that.

⚖️ **GREENFIELD THE ARGUMENT, NOT THE NOUN.** "coagulant" appears 8 times in the corpus and "curd" 134 — a search for *"tofu"* would have found nothing useful, because the collision was never in the dish name. **Grep the mechanism, not the ingredient.**

---

## 3 · ⚖️ RULINGS CARRIED IN — THEY APPLY FROM RECORD 1

- **§37 — BUDGET IS A CLAIM, NOT A CATEGORY.** A fork carries `Budget` only if its costPP is at or below the parent's. A meat→tofu / legume / egg swap is a **diet** fork, labelled by diet, never by cost.
  - ⭐ **§37.1 — THE COMPARATOR IS THE `default: true` VERSION, NEVER THE CHEAPEST SIBLING** *(4 Aug)*. ⛔ Do not hand-roll this test — run `claimcheck.js` and read its 🔴 block.
- **§38 — TINNED GOODS ARE PRICED ON WHAT SURVIVES THE COLANDER.** Four arms; see `RULING_38_DRAINED_WEIGHT.md`.
- ⛔ **AN `est` PRICE MAY NEVER UNDERWRITE A COST CLAIM.** `claimcheck` verifies arithmetic, not inputs.
- **§26 decides vegan vs vegetarian PER FORK.** The record's diet is the derived union.
- **§29** — staple-as-ingredient keyed only if a real bought product fills the slot.
- **§30.1 — costPP is DERIVED by `costcheck.js`, never authored.** Write `0`, run the tool, set the engine's number.
- **§31.3a/b/c** — retained equipment out of costPP; consumed items priced per unit. ⛔ `japan-nukazuke` excluded from all sweeps.
- **§33 / §33.8 — SA words are EXPLAINED, never translated away.** Gloss in a **dash or bracket**, never a comma.
- **§34** — a flavour-carrying oil is an ingredient, not a solvent (peanut oil, ruled).
- **A1 — 50 IS A TARGET, NOT A GATE.** Indonesia closed valid at 42. Never pad to reach a number.
- **A7 — DEFER A MISSING PRICE, NEVER AUTHOR A WRONG ONE.** Chilli oil R490 is the one exception ever taken.
- ⭐ **VERSION SETS MUST VARY THE DISH, NOT THE ANIMAL.** Six Thai records ran the identical *Budget → chicken → third protein* set and five sit in the 🟠 list.
- ⭐ **CHILLIES BY GRAM, NOT BY COUNT.**
- ⭐ **EVERY COUNTRY NEEDS starter · side · main · dessert.** Drinks may sit under dessert.
- ⭐ **GREAT BRITAIN IS FOUR SEPARATE LANES** — England, Scotland, Wales, Northern Ireland.
- ⭐ **ITALY IS A MERGE BEFORE A BUILD.** `meals.js` already carries 16 `pastapizza` cards. **Rule the merge before record 1 or you will ship two Cacio e Pepes.**
- **`grep` THE FILE BEFORE YOU PROBE A KEY.** `egg noodles` reported ABSENT while `thin egg noodles` R176 sat in the file.

---

## 4 · 💰 PRICES — THE FOUR STEPS, EVERY TIME

1. **Grep `PRICE_DB`** for the exact product name.
2. **Not there? Grep `reference/`** — a price she gave may be banked and not yet keyed.
3. **Still nothing? `node priceledger.js --ask <term>`** — it answers *has she already given this*.
4. **Only then** defer under A7, and put it in ONE block at the end of the session.

⛔ **DO NOT ASK TINA FOR A PRICE SHE HAS ALREADY GIVEN.** ⚖️ Law 22 — the repo is the end of guessing.
⚠️ **A name miss is not a missing price.** Most "missing" prices are the wrong string.

✅ **B4 asked for ZERO prices.** All 91 new ingredient lines resolved exact. The four-step order works; use it.

### 💣 LANDMINES — ALREADY PAID FOR
tuna steak ≠ tuna · crab sticks ≠ crab · **pickled ginger** spelling · **neutral oil** absent and unaliased · **glutinous rice flour** → resolves to rice R27, ⛔ unresolved, Japan mochi and Thai Bua Loi still blocked · **chai poh** R118/kg deferred under A7 · **yard-long beans** NOT-IN-SA · **peanut oil** a §34 exception

### ✅ THE SEVEN ABSENT ITEMS — ASKED ONCE, ANSWERED ONCE, BANKED. 6 Aug 2026.
⛔ **DO NOT ASK ANY OF THESE AGAIN.** `node priceledger.js --ask` now returns 🛑 on every one.

| item | keyed | basis |
|---|---|---|
| `pandan leaf powder` (+ `pandan powder`, `pandan`) | **R2900/kg** | R290 per 100g. ⛔ Only the POWDER is buyable; fresh leaf not keyed |
| `wood ear mushrooms` (+ 6 aliases) | **R943/kg** | band R503 (1kg bulk) – R943 (70g @ R66). Spread 1.87x, under the §3l threshold |
| `watercress` | **R500/kg** | band R325–R500 (40g @ R12.99–R20) |
| `annatto food colouring` | **R1500/L** | 20ml @ R30. ⚠️ COLOURING, not SEED — see below |
| `kingklip` (+ 3 aliases) | **R450/kg** | band R170–R450. ⚠️ Spread 2.65x = §3l territory, see below |
| `catfish` | ⛔ **NOT SOLD IN SA** | Tina: *"only if you catch it yourself, substitute with hake"*. A RULING, not a price |
| `taro` | 🟡 still unkeyed | not asked — `vietnam-ca-ri-ga` already routes around it with potato |

⚠️ **`annatto seeds` (hạt điều màu) IS A DIFFERENT PRODUCT and remains UNKEYED.** She priced the food colouring. ⛔ Do not alias one to the other. `vietnam-bo-kho` already routes around this with paprika. Her upper figure R129/bottle has no stated volume and could not be derived.

⚠️ **`kingklip` R450 is the one number in this batch that may move.** Its band spans 2.65x, which is over the threshold where **§3l (mid-vs-top on wide bands) is UNRULED**. The standing most-expensive rule was applied because it is the rule until she rules otherwise. 📌 **If §3l is ever ruled toward a mid, this key moves first.**

### 🩸 KEYING `wood ear` FIXED A LIVE §8f FALLTHROUGH — AND MOVED A CLOSED LANE
Three China records wrote `wood ear mushrooms` and were billing at `mushrooms` **R140 — about 6.7x LOW**. Never ABSENT, so no watcher ever fired.

✅ **Measured before and after with `git stash`, not reasoned about.** China went ✅76 🟠0 → ✅75 🟠1. Exactly one version moved: `china-hot-and-sour-soup` **Classic Beijing R71 → R84**, re-derived per §30.1 and written. China is back to ✅76 🟠0.
⚠️ The other two records (`chongqing-huo-guo`, `luo-han-zhai`) sit in China's **74 ⬜ unmeasurable** block on ABSENT keys — pre-existing, not caused by this.
⚖️ **This is §8e in miniature: closing a lane freezes its records, not its costs.**

### 🩸 A HOLE IN THE LEDGER GUARD, FOUND AND FIXED 6 Aug
`--ask "yard-long beans"` still answered **"GENUINELY ABSENT, safe to ask her"** — months after it was ruled NOT-IN-SA. **A ruling of absence was never stored anywhere the tool reads**, so the guard could not fire on it. ⚖️ *That is precisely how she ends up answering the same item twice.*
✅ Both `catfish` and `yard-long beans` are now ledger entries with `value: null` and `ruling: "NOT-IN-SA"`. Both return 📒 IN THE LEDGER.
📌 **Every future NOT-IN-SA ruling gets a null-valued ledger entry in the same write.** A ruling is an answer, and an answer gets filed.

⚖️ **A PRICE IS NOT RECEIVED UNTIL IT IS IN THE LEDGER.** Writing to `prices.js` alone means a container reset destroys the evidence and leaves the number, and the next session reads a bare number as an estimate and asks her again. Three re-asks on `rice vinegar` and two on `rice noodles` are the cost of learning this late.

---

## 5 · ⛔ DISHES STRUCK OR DEFERRED — DO NOT RE-PROPOSE

| dish | status | why |
|---|---|---|
| **Rau muống xào tỏi** | ⛔ STRUCK | `indonesia-plecing-kangkung` owns the plant and the hollow-stem argument |
| **Cà tím nướng mỡ hành** | ⛔ STRUCK | hot-oil-over-raw-aromatics has 5 owners incl. `sambal matah` |
| **Cá kho tộ** | ⛔ STRUCK | caramel-past-sweetness has 11 owners, `china-hong-shao-rou` leads |
| **Rau câu / agar jelly** | ⛔ STRUCK | `japan-anmitsu` owns agar |
| **Cháo gà** | ⛔ STRUCK *(new, 6 Aug)* | China owns congee — 4 records incl. Century Egg & Pork |
| **Thịt kho trứng** | ⛔ STRUCK *(new, 6 Aug)* | caramel argument struck above; coconut-water braising is `bo-kho`'s |
| **Bánh bột lọc** | 🟡 DEFERRED | noun clear, but scalded dough owned six ways |
| **Nem rán / chả giò** | 🟡 DEFERRED | both natural arguments collide WITHIN the lane — the sealed wrapper is `banh-xeo`'s, the sugar-browning is `com-tam`'s |
| **Bánh cuốn** | 🟡 DEFERRED *(new, 6 Aug)* | `banh-xeo` owns the rice-starch film. Needs an argument that is not about the batter |

⚖️ **A within-lane repeat is worse than a cross-lane one.**

---

## 6 · ▶️ B5 CANDIDATES — PROPOSED 6 Aug, NOT YET RULED

Tina ruled **1–6 in** and left three on the table. Still live, still need her word:

- **Bún Bò Huế** — the centre of the country, and the second-most-famous dish in it. `shrimp paste` R437 IS keyed, so it is buildable. ⚠️ Risk: a second beef noodle soup. Only works if it leads on the mắm ruốc bloom and never on the broth.
- **Gỏi Gà Bắp Cải** — fills the missing salad course. ⚠️ Risk: the obvious angle is salt-and-wring and **osmosis is spent 12 records deep**. Needs a different lead or it should not be written.
- **Chè Ba Màu** — ⚠️ `japan-anmitsu` owns agar and **pandan is genuinely absent**. Only viable built as bean layers with no jelly.

⛔ **Still missing from the lane after B4:** a **salad / gỏi** (whole course type absent) and a **vegetable side** other than `canh-chua`.

---

## 7 · 🔵 OPEN QUESTIONS FOR TINA

- **Gấc — CLOSED 6 Aug.** `vietnam-xoi-xeo`, Xôi Gấc fork, asserts gấc is unbuyable in SA. Claimcheck flags it because `red bean paste` R120 overlaps the wording — ⚖️ **that flag is a FALSE POSITIVE, different fruit, ignore it forever.** ✅ **Tina's call 6 Aug: LEAVE IT AS WRITTEN.** ⛔ Do not re-open unless she raises it.
- **§3l — does the most-expensive rule take a MID on wide bands?** Surfaced on `rice vinegar` (band spanned R120–R415/L). She named the product and resolved that key, but **did not rule the general case.** Counter-precedent: `white wine vinegar` R165 was set as an honest mid on 22 Jul. **STILL OPEN.**

---

## 8 · 🟡 CARRIED DEBT — MEASURED 6 Aug

### 8a · 🔴 THAILAND CLAIM CLEANUP — RULED 3 Aug, STILL NOT DONE
**7 quick anchors — AUTHORING.** The version genuinely IS cheapest; it never names what it is cheaper *than*. One pass, seven cards.
**1 false positive — LEAVE IT ALONE.** `gaeng-som` Vegetable-Led: *"cheaper than it has any right to taste"* is an idiom about flavour. ⛔ Do not "fix" it.
**3 real failures — STRIKE THE COST LANGUAGE AND RE-ARGUE ON THE DISH.** `khao-soi` Gai · `pu-phad-pong-karee` Picked Meat · `pu-phad-pong-karee` Chicken (which claims to be *"the expensive one"* AND *"for a fifth of the money"* on one card). ⚠️ Read both `pu-phad` forks together before rewriting either.

### 8b · 🐑 THE LAMB JOB — HALF DONE, ORDER NOT NEGOTIABLE
✅ Alias layer completed 3 Aug. 🔴 **`"lamb": "lamb neck"` is STILL LIVE in `core.js` and must die — but not first.** There are **19 bare `Ng lamb` lines across four lanes** (9 `wk_africa.js` · 4 `wk_europe.js` · 3 `wk_china.js` · 3 `wk_southafrica.js`). **Name them, THEN kill the alias.** Killing it first turns a wrong price into a missing one.
⚖️ `lamb potjiekos` R150 is a **PRODUCT**, not an alias to neck. Stew/bredie/curry/breyani → potjiekos · braai → `lamb shoulder chops` R220 · skewers → `leg of lamb`. **There is NO bare-lamb default.**

### 8c · 🌶️ CHILLI-GRAM SWEEP — NOW MEASURED EXACTLY
⭐ Purely mechanical, no ruling needed. **Five records carry chillies by count in a PRICED ingredient line:**

| record | lane | line |
|---|---|---|
| `mozambique-lula-grelhada` | Africa | `1 chilli` |
| `zulu-inyama-yenhloko` | South Africa | `1 chilli` |
| `zulu-chakalaka` | South Africa | `1 chilli` |
| `thailand-miang-kham` | Thailand | `2 chillies` |
| `thailand-kua-kling` | Thailand | `3 chillies` |

✅ `chilli` R80/kg and `green chilli` R80/kg are already keyed. **Good first job of any session.**
✅ Every B4 record used grams. The Vietnam lane is clean going forward.

### 8d · 🥫 TINNED KEYS — RULED, PARTLY ACTIONED
✅ §38 written. ✅ `water chestnuts` → R275 `est` · `bamboo shoots` → R220 `est`, both Arm 4.
🟡 Corpus never swept for tinned keys. 🟡 One photo of the back of either tin clears both `est` markers. **Bamboo shoots is the weaker number — correct it first.**

### 8e · 🔴 20 STALE `costPP` VALUES — AND THE GATE NOW HAS A PROBLEM
⛔ **A FAULT CLASS THE WATCHERS CANNOT SEE.** Four keys were corrected 3 Aug. Twenty banked records use them in PRICED lines, so their engine cost moved — but every movement is R1–R3, **inside `costcheck`'s ✅ tolerance.** All four Asia lanes still report green. **`costcheck` green means "within band", not "current".**

⚠️ **`thailand-massaman` is in this list** — a lane closed 2 Aug with every gate green. Closing a lane freezes its records, not its costs.

▶️ **The fix is mechanical — §30.1, no rulings and no prices needed.** Re-derive each stored costPP off the engine.

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

🆕 **⚠️ THE GATE NEEDS RE-EXAMINING, 6 Aug.** Tina's 3 Aug call was *"log it, finish Vietnam, then clear it in one pass."*

**This is NOT a time problem, and ⛔ DO NOT PUT A RATE OR A SESSION ESTIMATE HERE.** Three were written into this section on 6 Aug and all three were wrong.

⚠️ **The calendar span is meaningless.** Vietnam banked 4 records on 3 Aug, 7 on 4 Aug and 6 on 6 Aug — but Tina was on for a few hours at a time, and roughly 36 of those hours went to the roof session (MF172 · MF173 · ENTRY 11 · PROOF 2 · ENTRY 12 · rungs 18 and 19) with no authoring in it whatsoever. **Elapsed days measure nothing about this lane.**

⚖️ **Tina, 6 Aug, on the remaining 33: *"thats one day, if Im not looking for prices the whole day."*** That is the only estimate in this file worth anything, and it names the bottleneck exactly. **The authoring is not slow. Price-hunting is.** B4 moved six records and asked her for nothing, because the four-step lookup answered all 91 lines before they reached her. **§8f is the rung that makes that repeatable.**

⛔ **It is an ORDERING problem.** The roadmap sends the next session to **Italy**, which is itself a merge-before-build. If Italy opens while Vietnam sits at 17, the gate stops meaning "33 more records" and starts meaning "whenever we come back" — which nobody has scheduled. **And these 20 are invisible while they wait:** every lane reports green because the drift is R1–R3, inside `costcheck`'s tolerance. Nothing will surface them.

▶️ **Needs Tina's word: clear it now, or move the gate to "before Italy".** ⛔ Do not decide this alone.

⚖️ **THE RULING THIS SUGGESTS, NOT YET MADE:** `costcheck` should answer *"is this number CURRENT?"* separately from *"is this number IN BAND?"* — e.g. a recorded hash of `prices.js` per lane. ⛔ Do not build mid-lane.

### 8f · 🟠 THE SUBSTRING-FALLTHROUGH PATTERN — NOT YET A WATCHER
A compound name falls through to a SHORTER, CHEAPER key by substring and bills at its price. It is never ABSENT, so coverage never drops and no watcher fires.
**Fourteen instances found so far:** `rice noodles` · `shirataki noodles` · `thin egg noodles` · `instant noodles` · `chilli oil` · `coriander seeds`→`coriander` (7x HIGH) · `black cardamom`→`cardamom` (7x HIGH) · `rock sugar`→`sugar` · `thai basil`→`basil` · `rice paper`→`rice` (6.5x LOW) · `rice vermicelli`→`rice` · `tapioca pearls`→ABSENT · `mung beans`→ABSENT · `rice vinegar`→`vinegar` (~5x LOW).
⚖️ **FOURTEEN IS A PATTERN, NOT BAD LUCK.** Every one was caught by a human reading a resolution table, so the ones nobody looked at are still live. **The rung:** assert the resolved key IS the written name after alias, and print every case where a LONGER written name resolved to a SHORTER key. ⛔ **DO NOT BUILD MID-LANE.**

### 8g · 🟠 SEVEN JAPAN VERSIONS 15–40% OUT — caused by the `rice vinegar` fix
Not new faults; pre-existing faults becoming visible. Re-derive off the engine.
`japan-oshizushi` Yasai R17→R27 · Battera R22→R32 · `japan-sunomono` Kyuri R3→R5 · Kyuri to Wakame R6→R8 · `japan-gari` Mature R16→R21 · Sweet Pickled R19→R24 · Beni Shoga R19→R23.
⚠️ Japan's 3 RED are PRE-EXISTING. Do not attribute them to Vietnam work.

### 8h · 📁 MF-BRIEF FILING — GROWING
🆕 **49 MF-briefs now live in `reference/`**, up from 33 on 3 Aug. `/law` hygiene flags them every run and several are visibly done. ⚖️ *A standard is forever, a brief is for a day.* A filing pass into `Archive/` drops the hygiene count and stops a future session reading a spent brief as live work.

### 8i · 🟡 STILL OPEN ELSEWHERE
**§2.5 merge unrun** — seven SA dishes held. · **SA Session 3** (post-reset only) — dessert icons and Umngqusho. · **Northern Ireland** — still Tina's call.

---

## 9 · 🚧 STANDING CONTENT BLOCKS — UNCHANGED
- **Purin** blocked — egg closed at 3.
- **Kakigori** blocked — no SA shaver, collides with Anmitsu.
- **Glutinous rice flour unresolved** → Japan mochi blocked, and Thai **Bua Loi** with it.

---

## 10 · ⛔ RED LINES — CARRIED
- ⛔ **No UI fixes in a content session.** ENTRY 13, ENTRY 6, BUG 7, ENTRY 14 are filed and waiting.
- ⛔ **Do not touch the portion collision.** `wkPlan` stores `{id, servings}`; the shared-renderer family stores `serves:1`. **Two live conventions, its own session.**
- ⛔ **Do not build the app-wide floating My Plan.** Parked 11 Jul.
- ⛔ **Do not delete `wkPlanClearAll()`.** Dead code, filed, one thing per commit.
- ⛔ **Do not touch `japan-nukazuke` costPP** — §31.3c, excluded from all sweeps.

---

## 11 · ⚙️ THE BANKING MECHANIC — ONE RECORD, ONE HANDBACK
Author → `/all` on the batch file → fix → `merge.js` → `costcheck` for the derived costPP → write it → **hand Tina the lane file AND the batch source** → next record.
⚖️ **B2 has no archived batch source because it was never written at the time.** B4 has one because it was written per record. **Do not repeat B2.**

---

## 12 · 🗺️ THE ROADMAP AFTER VIETNAM
**Vietnam → Italy → the UK (England · Scotland · Wales) → Europe closed → South America (Peru · Argentina · Brazil · Colombia) → Mexico → Canada → USA.**
⚖️ Europe is further along than it looks: 518 records in `wk_europe.js` alone. **Italy and Great Britain are genuinely the last two gaps.**

---

## 13 · 🚀 CLOSING ANY SESSION
1. `node --check` every changed file. ⚠️ *It proves the file parses. It proves NOTHING else.* ⚖️ Law 1.
2. Doctor RED count **has not grown.** ⚖️ Law 51.
3. `node tinza-all.js vietnam` — green.
4. **ONE THING PER COMMIT. NAME THE COMMIT.** ⚖️ Law 5.
5. **Tina pushes from GitHub Desktop.** ⚠️ Code has no git credentials.
6. 🚨 **HARD RELOAD after Netlify deploys.** ⚖️ Law 27.
7. **Write the session-close. Move the old one to `Archive/`.**
8. **Update the count in every document that carries one.** ⚖️ This is the step that got skipped and produced the 6 Aug meta-scar.
9. 💰 **BANK EVERY PRICE SHE GAVE** — into `prices.js` AND `PRICE_LEDGER.json`, same write. Same for every NOT-IN-SA ruling and every A7 deferral.

---

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**
