# 🇻🇳 VIETNAM — COLD START
**Opened 3 Aug 2026 at Thailand close. Rewritten 6 Aug 2026 after B5.** Read this BEFORE anything else.

> ⚠️ **NO LINE NUMBERS. Every anchor is a SYMBOL.**
> ⛔ **WRITE THIS FILE TO `reference/VIETNAM_COLD_START.md`.** Then run `git status` and READ THE PATH, not the filename. A reference file written to the repo root is indistinguishable from one never written at all — the tools read `reference/`. That scar cost two reds and two hours on 2 Aug.

---

## ⚖️ LANE STATE — 25 of 50

**Verified at 6 Aug B5 close: 25 records · 75 versions · ALL GATES GREEN.**

```
doctor 10 (baseline, unchanged)   ·  lawcheck 0 red 0 drift 4 hygiene
/wow + /wk  every mechanical box ticked          ·  costcheck ✅75 🟠0 🔴0 ⬜0 of 75
tinza-echo  0 red 0 amber 0 mascot 0 locale 0 gloss 0 opening-formula
claimcheck  0 red 0 amber 14 🔵     ·  pricecheck exact 108 / wrong-product 0 / absent 0
priceledger --check  ✅ every Tina-attributed key has a ledger entry
```

📒 `reference/ASIA_LEDGER.json` re-baselined by `merge.js`'s own `fingerprint()`, never hand-typed.

**Courses: main 12 · starter 5 · dessert 4 · side 4.** ✅ Floor met on all four.
⭐ **B5 CLOSED BOTH REMAINING GAPS** — the lane had NO salad course and NO vegetable side but `canh-chua`.

> **PREVIOUS ENTRIES, KEPT PER §2.3 —** *17 of 50 · 51 versions* (B4 close) · *11 of 50 · 33 versions* (B3 close).
> ⚠️ The 4 Aug version said **main 4** and was wrong by one. **Recount, never re-read.**
> 🩸 **AND THE 6 AUG ENTRY SAID 17 WHILE GITHUB HELD 11** — B4 was committed as
> `reference/vietnam-batch4-FULL.js` and the merged lane file was never staged. Recovered
> 6 Aug with `node merge.js vietnam reference/vietnam-batch4-FULL.js`, all six ids and all
> eighteen costPP matching. ⚖️ **A COUNT IN THIS FILE IS NOT EVIDENCE. `node tinza-all.js vietnam` IS.**

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
| **18** | **`vietnam-bun-bo-hue`** | main | **103 · 103 · 100** |
| **19** | **`vietnam-goi-ga-bap-cai`** | starter | **65 · 85 · 80** |
| **20** | **`vietnam-mang-xao`** | side | **58 · 58 · 76** |
| **21** | **`vietnam-che-ba-mau`** | dessert | **34 · 29 · 25** |
| **22** | **`vietnam-bo-luc-lac`** | main | **97 · 101 · 93** |
| **23** | **`vietnam-sup-mang-cua`** | starter | **92 · 92 · 65** |
| **24** | **`vietnam-mi-quang`** | main | **93 · 74 · 89** |
| **25** | **`vietnam-com-chay`** | side | **26 · 45 · 62** |

⚖️ **`node costcheck.js vietnam` is the only source of truth for a costPP.** ⛔ Do not compare these against an older handoff and conclude a record drifted.

**Batch sources archived:** `Archive/vietnam-batch1.js` · `Archive/vietnam-batch2.js` (written after the fact) · `Archive/vietnam-batch3.js` · **`reference/vietnam-batch4-FULL.js`** · **`vietnam-batch5.js` (B5, all eight, every gate green before merge).**
✅ **B4 was banked one record at a time and handed over after each merge**, at Tina's instruction — *"maybe bank after each one, im scared we gonna bomb out."* That is now the lane's working method.

---

## 0 · THE OPENING SEQUENCE — NOT OPTIONAL

```
1. clone
2. read THIS file, all of it
3. COUNT WITH NODE. Never by eye, never from a handoff, never from memory.
4. node tinza-all.js vietnam    → expect 25 · 0 red · 0 drift · 14 🔵 · 0 warns
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

### 🆕 From B5 — EIGHT NEW REGISTERS BURNED, 6 Aug
- **A fermented paste is a SUSPENSION — slake, settle, decant, bin the grit** — `vietnam-bun-bo-hue`
  (⚖️ and the uncovered simmer: the volatile half leaves, the amino-acid half cannot follow)
- **A dressing with NO OIL — dissolved sugar supplies the body oil would have given** — `vietnam-goi-ga-bap-cai`
- **Which boil does what — the factory did the safety one, yours is about the tin** — `vietnam-mang-xao`
- **Sugar STOPS a bean softening, and then LOCKS it where it is** — `vietnam-che-ba-mau`
- **Shaking vs dragging — contact binary, never lateral** — `vietnam-bo-luc-lac`
- **Viscosity decides a soup's POSITION IN THE MEAL — thick coats, thin clears** — `vietnam-sup-mang-cua`
- **Puffing on water the food has held since it was made** — `vietnam-mi-quang`
- **One pot, two cooking methods — only the bottom centimetre can brown** — `vietnam-com-chay`

### 🩸 THREE B5 RECORDS HAD TO BE RE-LED — AND TWO COLLISIONS WERE WITH B5 ITSELF
⚖️ **CHECK THE BATCH, NOT ONLY THE CORPUS.** The corpus greps came back clean and the collisions were still there:
- `che-ba-mau` nearly led on *"three layers stay three layers"* — **`xoi-xeo` owns it.**
- `mi-quang` nearly led on *"coated, not submerged"* — **`bun-bo-hue`'s own Khô version, written an hour earlier.**
- `sup-mang-cua` nearly led on *"the tin is the authentic ingredient"* — **`mang-xao`, two records earlier.**
⚖️ Also: `bun-bo-hue` was one paragraph from re-writing Indonesia's *"toast the terasi"*. **Inverted to slake-and-decant. Different paste, opposite move.**

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
- ⭐ **"CHICKEN IS CHICKEN" — A DESCRIPTIVE ADJECTIVE IS NOT A NEW PRODUCT** *(Tina, 6 Aug)*. free-range · organic · corn-fed · village resolve to the base bird via `PRICE_ALIAS`. Her reason: *"free range chicken is a personal choice."* ⛔ **PRICING ONLY** — six cards correctly argue that a bird that WALKED carries more connective tissue and needs a longer braise; those stay. ⛔ **Tinza takes no position on farming ethics ON A CARD.** She holds one; it lives in governance. ⚠️ Consequence named: the app under-bills whoever buys free-range — accepted, because a name that resolves slightly low beats an ABSENT one that renders R0 and fires no gate.
- ⭐ **"LARD IS PORK FAT"** *(Tina, 6 Aug)* — a ruling, not a price. It already had a key.
- ⭐ **PREP GOES IN THE METHOD — BUT IT MUST ACTUALLY GO THERE.** ⚠️ On 6 Aug prep was stripped out of two China ingredient names and never landed anywhere; `chongqing-huo-guo` ended up not mentioning cardamom at all. **Deleting is half the job.**
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

### 💰 BANKED IN THE B5 SESSION — 6 Aug 2026. ⛔ DO NOT RE-ASK ANY OF THESE.
| key | value | note |
|---|---|---|
| `pork hock` (+3 aliases) | **R99/kg** | band R49.99–R99, 1.98x. ⛔ closed a §8f fallthrough to `pork` R110; `pork shank` R80→R99, measured as used by ZERO records |
| `black-eyed beans` (+4) | **R55/kg** | ⚠️ the 1kg pack costs MORE per kg than the 500g — **not a typo, do not "correct" it** |
| `dried tangerine peel` (+4) | **R700/kg** | R35/50g. §33 — naartjie kept and explained |
| `lotus root` (+1) | **R116/kg** | R58/500g |
| `black cardamom` | **R420 → R720** | §29.5 — R420 implied ~R21/50g, BELOW the band she quoted three days later. **Moved records in two lanes; all re-derived same session** |
| `beef stock` | **R50 → R8** | its own comment said *"mostly water + cube"* and billed 6× the generic `stock` key |
| `presunto` | **R400/kg** | ⛔ NOT an alias to `prosciutto` R1190 — her figures bracket and confirm that key |
| `poppy seeds` (+1) | **R400/kg** | band 2.01x |
| `graviera` | **R1160/kg** | band 2.15x. ⛔ `kefalotyri` still unkeyed; `greece-saganaki`'s "or" was split |
| `dried cannellini beans` (+1) | **R70/kg** | her dried white/sugar/speckled band |
| `tinned cannellini beans` (+1) | **R80/kg** | R32/400g **on TIN weight**, matching the other beans — see §8d |

### 💣 LANDMINES — ALREADY PAID FOR
tuna steak ≠ tuna · crab sticks ≠ crab · **pickled ginger** spelling · **neutral oil** absent and unaliased · **glutinous rice flour** → resolves to rice R27, ⛔ unresolved, Japan mochi and Thai Bua Loi still blocked · **chai poh** R118/kg deferred under A7 · **yard-long beans** NOT-IN-SA · **peanut oil** a §34 exception

### ✅ THE SEVEN ABSENT ITEMS — ASKED ONCE, ANSWERED ONCE, BANKED. 6 Aug 2026.
⛔ **DO NOT ASK ANY OF THESE AGAIN.** `node priceledger.js --ask` now returns 🛑 on every one.

🩸 **CORRECTION 6 Aug — "BANKED" WAS HALF TRUE WHEN THIS WAS WRITTEN.** All five prices went into `prices.js`. **NONE went into `PRICE_LEDGER.json`.** Only the two NOT-IN-SA rulings got an entry. `--check` was reporting **🔴 5 UNPROVABLE ATTRIBUTIONS** and no session had run it. ⚖️ **The session that wrote "a price is not received until it is in the ledger" did not apply it to its own five prices.** ✅ All five filed 6 Aug. 📌 **`node priceledger.js --check` is now part of §13.**

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
| **Bánh Da Lợn** | ⛔ **STRUCK** *(B5, ruled by Tina 6 Aug)* | `indonesia-kue-lapis` owns **all four** arguments: tapioca-vs-rice proportion · layers staying separate · batter settling between pours · fridge retrogradation. **No angle survives. A STRIKE, not a defer.** ⚠️ Its only remaining difference — a mung bean layer — is a third mung bean record after `xoi-xeo` and `che-ba-mau` |

⚖️ **A within-lane repeat is worse than a cross-lane one.**

---

## 6 · ▶️ B6 — THE LANE AFTER B5

**All eight B5 dishes were ruled in by Tina and all eight banked.** Bún Bò Huế · Gỏi Gà Bắp Cải · Măng Xào · Chè Ba Màu · Bò Lúc Lắc · Súp Măng Cua · Mì Quảng · Cơm Cháy.

✅ **THE TWO STANDING GAPS ARE CLOSED.** The lane had no salad course and no vegetable side beyond `canh-chua`. `goi-ga-bap-cai` and `mang-xao` closed both.

▶️ **B6 has no proposed slate yet and no dish is ruled in.** ⛔ Do not assume one. Propose, then get her word — §5's struck list now runs to ten dishes and §2's spent list to twenty-six registers, so the proposal itself is the work.

⚠️ **Course balance to aim at:** main 12 · starter 5 · dessert 4 · side 4. Mains are the heavy end; starters, sides and desserts are where the lane is thin.

## 7 · 🔵 OPEN QUESTIONS FOR TINA

- **Gấc — CLOSED 6 Aug.** `vietnam-xoi-xeo`, Xôi Gấc fork, asserts gấc is unbuyable in SA. Claimcheck flags it because `red bean paste` R120 overlaps the wording — ⚖️ **that flag is a FALSE POSITIVE, different fruit, ignore it forever.** ✅ **Tina's call 6 Aug: LEAVE IT AS WRITTEN.** ⛔ Do not re-open unless she raises it.
- **🔵 THREE KNOWN FALSE POSITIVES — RULED, PERMANENT, DO NOT RE-LITIGATE.** `claimcheck` has **no suppression mechanism at all**, so these live only here, where a script cannot see them.
  1. **gấc** on `vietnam-xoi-xeo` vs keyed `red bean paste` R120 — different fruit. *(ruled 6 Aug)*
  2. **pandan LEAF** on `vietnam-che-ba-mau` vs keyed `pandan leaf powder` R2900 — leaf and powder are two products and `prices.js` says so at the key. *(✅ Tina agreed 6 Aug)*
  3. **"it physically cannot brown"** on `vietnam-com-chay` vs keyed `brown rice` R35 — a verb, not a product. *(6 Aug)*
  ⚖️ **THE RUNG, NOT BUILT:** a dated, reasoned suppression list keyed on `record + field`, printed as **KNOWN, RULED** rather than silently dropped. ⛔ A list that HIDES things is a worse tool than one that over-reports.
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

### 8d · 🥫 TINNED KEYS — ~~PARTLY ACTIONED~~ ⛔ STRUCK 6 Aug 2026. DONE.
✅ §38 written. ✅ **BOTH KEYS ARE TINA-SOURCED AND §38-CORRECT. NO PHOTO IS NEEDED.**
`bamboo shoots` **R136/kg** (R55.99/410g can, drained, applied 30 Jul) · `water chestnuts` **R152/kg** (R86/567g can, 2 Aug).
⛔ The `est` markers and the R275 / R220 figures in the old text were **never live** — carried from a draft and already superseded when this file was written. Anyone reading it would have gone hunting for a tin to photograph for a job finished a week earlier. ⚖️ Kept visible and dated per §2.3.
🟡 **STILL OPEN, and it is not these two:** the corpus was never swept for OTHER tinned keys against §38.
🩸 **CORRECTION, 6 Aug — "TWO TIN BASES" WAS THE WRONG DIAGNOSIS.** There are not two competing
policies. **There is ONE ruling and the file has never been swept against it.**
`RULING_38_DRAINED_WEIGHT.md`: **Arm 1** liquid used in the dish → net stands · **Arm 2** poured
away and drained weight printed → **divide by DRAINED** · **Arm 3** poured away, not printed,
available → **A7 defer** · **Arm 4** poured away, not printed, scarce → estimate high, mark `est`.

⚠️ **TWO COMMENTS ACTIVELY CONTRADICT THEIR OWN ARITHMETIC.** `bamboo shoots` says *"Priced on
DRAINED weight"* and computes R55.99 ÷ **410g** (the net tin) = R136. `water chestnuts` says the
same and computes R86 ÷ **567g** = R152. **Both are Arm 2 products priced as Arm 1.** A comment
that misdescribes its own maths is worse than no comment — the next reader trusts it.

✅ **RULED 6 Aug — THE TEST IS NOW ONE QUESTION.** Tina: *"we should always use drained weight
for things that are in brine, not for something like baked beans that are in a sauce"* — and on
syrup: *"mostly used with syrup, but not always, best to use drained weight."*
⚖️ **DOES THE LIQUID GO IN THE POT, OR DOWN THE SINK?** Down the sink — brine, water, oil, syrup,
no exceptions — divide by DRAINED. In the pot — divide by NET. Full classification lives in
`reference/RULING_38_DRAINED_WEIGHT.md`: **11 keys Arm 2, 11 keys Arm 1**, and three that turned
out not to be tinned at all (`chickpeas` is a 500g DRIED pack; `pineapple` is priced *each*).

📏 **THE SIZE OF THE SWEEP: 22 keys in `prices.js` are derived from a tin.** Most sort themselves
on one question — does the liquid go into the dish or down the sink?
**Arm 1, nothing changes:** `creamed corn` · `caramel treat` · `chicken broth` · `fruit cocktail`.
**Arm 2, real corrections:** `butter beans` R68 · `black beans` R50 · `chickpeas` R68 ·
`kidney beans` R35 (already marked ESTIMATE) · `tinned cannellini beans` R80 · `artichoke hearts`
R150 · `tinned asparagus` R197 · `tuna` R120 · plus `bamboo shoots` and `water chestnuts`.

⛔ **NOT MECHANICAL, AND §38 SAYS SO ITSELF:** *"the drained fraction is NOT constant across sizes
on the same product line — the 227g tin runs ~62% drained."* Each key needs the tin size it was
derived from recorded in the ledger. **Several of ours do not have it.** That is the real blocker,
and it is a photo of a label per product, not a ruling.

### 8e · ✅ ~~20 STALE `costPP`~~ — CLEARED 6 Aug 2026. THE TABLE WAS WRONG THREE WAYS.
**52 rows re-derived off the engine** — 39 in the §8e sweep, 13 more after `black cardamom` moved. ⚖️ §30.1 throughout.

⚠️ **1 · FOUR OF THE TWENTY HAD NO `costPP` AT ALL.** `tunisia-mloukhia` · `boerekos-boerewors-homemade` · `india-chicken-chettinad` · `pakistan-chapli-kebab` are FLAT records — no versions, no cost field. The table's *"R36 → R33"* described a number that is not in the file.

⚠️ **2 · SIX ROWS WERE NEVER A COSTING PROBLEM.** They costed against ABSENT keys. Two were genuine missing prices (`dried tangerine peel` R700, `lotus root` R116 — both now keyed). **The other four were §7 INGREDIENT-STANDARD VIOLATIONS** — prep, counts, units and an "or" welded into product names: `black cardamom pods, cracked` · `2 litres beef or chicken stock` · `leafy greens` · `free-range chicken, about 1.6kg, chopped…` · `dried tangerine peel pieces` · `extra sichuan pepper`. ✅ All six rewritten, and the prep put back into the methods.

⚠️ **3 · THE DRIFT WAS NOT R1–R3.** That was true only of rows that already resolved. Once the names could resolve: `china-staple-master-stock` R15 → **R141**, `china-da-pan-ji` R62 → **R371** — both confirmed by SIBLING versions already scoring ✅ on whole-batch amounts.

### 8j · ✅ `china-chongqing-huo-guo` — RULED AND WRITTEN, 6 Aug 2026
⚖️ **Tina's call: "accept whole pot."** The record carries whole-pot quantities while declaring
`servings: 1`, exactly as `china-staple-master-stock` and `china-da-pan-ji` already do — so the
engine's numbers were written per §30.1 rather than the quantities being rewritten.
**R32 → R616 · R62 → R830 · R88 → R1032.** All three resolved with **no ABSENT keys** before writing.
✅ **China is now `costcheck` ✅82 · 🟠0 · 🔴0.** That was the last costPP red in the lane.
⚠️ Its ⬜68 block is pre-existing and unrelated.

📌 **THE CONVENTION THIS SETTLES, AND IT IS NOT WRITTEN DOWN ANYWHERE ELSE:** three China
records use WHOLE-POT amounts under `servings: 1`. That is now accepted rather than a bug.
⛔ **Do not "fix" them to per-serving in a later session without re-opening this ruling.**

### 8k · 🟠 `costcheck` SCORES VERSIONS ONLY — 293 FLAT RECORDS NEVER CHECKED
MF153 widened the country map 6 Aug (now 12 lanes; selftest still 11/11). That surfaced the bigger hole: `wk_africa.js` (190) and `wk_world.js` (103) are **entirely flat**, `wk_southafrica.js` is 108 flat of 131. None have ever been cost-checked by anything.

### 8l · 🟠 `wk_europe` — SPLIT IT BEFORE ANYONE PANICS
**149** versions resolve fine and the stored number is just old → ⚙️ mechanical, **NO PRICES NEEDED**. **50** carry an ABSENT key. Of the 27 distinct absent strings: **17 are pure mechanics** (counts like `1 clove` where `cloves` R1022 is keyed; `orange`→`oranges`; `sprig rosemary`→`rosemary`; three `or`s), **8 are real substitution decisions** (morcela · alheira · doce de chila · pennyroyal · mountain cheese · pig's ear · turnip greens · whole suckling pig) and ~~**only 2 are money**~~ ✅ **ALL FOUR PRICED 6 Aug** — `goat`/`kid goat` R220 (her ruling: no SA difference) · `lobster` R570 whole + `lobster tail` R1790 · `chestnuts` R710. ⛔ Also fixed: `crayfish` was aliased to `prawns` R350 and is now `lobster`; zero cards write it, so nothing moved..
🩸 **REPORTING SCAR:** this was first reported to Tina as *"148 🔴"* un-split, and she read it — reasonably — as prices going missing. ✅ **The reverse ledger check was run and is the proof: 149 of 149 priced ledger entries still in `prices.js` at her exact number, ZERO missing, ZERO changed.** 📌 **That reverse check should be a permanent mode** — `--check` only proves the forward direction.

### 8m · 🔴 `stock cubes` R1.50 IS TAGGED `weight`, NOT PER-UNIT
A card writing grams of stock cube bills R1.50 **per kilogram** — effectively free. A broken key, not a wrong number.

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

### 8i-2 · 🔴 MF154 — FOUR BUDGET FORKS THAT FAIL A3 · QUEUED SINCE 4 Aug
`china-cong-you-bing` R26 vs R26 · `china-da-pan-ji` R275 vs R256 · `china-staple-suan-cai` R32 vs R9 · `china-wuxi-pai-gu` R67 vs R64.
⚖️ **§37 / A3 — a version labelled `Budget` must come in UNDER THE DEFAULT.** ⛔ **NONE were caused by the 6 Aug re-derivations** — measured with `git stash` before and after: China's claimcheck reds went **5 → 4**, so tonight FIXED one. ⚖️ A re-derivation cannot create a Budget breach; it reveals one that the stored number was hiding.
▶️ The fix is §37: label the fork by DIET or by DISH, never by cost, unless it genuinely comes in under.

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
9. 🔑 **`node priceledger.js --check`** → must read *✅ every Tina-attributed key has a ledger entry.*
10. 💰 **BANK EVERY PRICE SHE GAVE** — into `prices.js` AND `PRICE_LEDGER.json`, same write. Same for every NOT-IN-SA ruling and every A7 deferral.

---

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**
