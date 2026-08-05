# SEARCH_COLD_START.md — for the session that writes MF165
**Written 5 Aug 2026, end of session.** Open the next chat with this file and `CLAUDE.md`.

---

## 0 · THE HEADLINE — WHY THE NEXT SESSION EXISTS

🔴 **THERE ARE THREE RECIPE CARD RENDERERS, AND THEY DISAGREE ABOUT WHAT A CARD IS.**

> **Tina, 5 Aug, on live:** *"Ive noticed that sometimes the recipe found in its proper section,
> differs from the recipe when searched for in the search box."* **She is right, and it is structural.**

| path | where | lines |
|---|---|---|
| **World Kitchen section** | `worldkitchen.js:801-954` · `wkRecipeOpts` | 154 |
| **Search** | `meals.js:16003-16299` · `recipeDetailFromResult` | **297** |
| **Bakes / Meals** | `core.js:4287-4397` · `bakesRecipeOpts` (via `RECIPE_BUILDERS`) | 111 |

**Measured 5 Aug — 12 of 22 shared things are rendered by one path and not another:**

| shared thing | WK | SEARCH | BAKES |
|---|---|---|---|
| `recipePage` | ⛔ | ✅ | ✅ |
| `methodStep` | ✅ | ⛔ | ✅ |
| `goesWellBox` | ✅ | ⛔ | ⛔ |
| `leftoverBoxHTML` | ✅ | ⛔ | ⛔ |
| `crossLinkBox` | ✅ | ⛔ | ⛔ |
| `costLine` | ✅ | ⛔ | ✅ |
| `nutritionGrid` | ⛔ | ✅ | ✅ |
| `kcalChip` | ⛔ | ⛔ | ✅ |
| **`wkClassifyMain` / `wkEffectiveMult`** | ✅ | ⛔ | ⛔ |

🩸 **THE LAST ROW IS THE DANGEROUS ONE.** Search never calls the portion engine. **Every fix
shipped today — MF161's `WK_NOT_A_MAIN` guard, the anchor corrections on 15 cards — does not reach
a card opened from search.** Chongqing found through search may still be anchored on beef tallow.
**The same dish can quote a different price and a different quantity depending on how you reached it.**

⚖️ **AND THE WATCHERS ONLY MEASURE ONE PATH.** `costcheck` · `pricecheck` · `splitreport` ·
`anchorreport` all load `worldkitchen.js` and score the WK shape. **None has ever measured what
search renders.** *Every green read on 5 Aug was green for two paths out of three.*

### THE SHAPE OF MF165
`RECIPE_BUILDERS` already exists for exactly this and only ever got **two** registrations
(`bakes`, `meals` — both at `core.js:4399-4403` and `meals.js:16569`). **Route search through
`resolveRecipe` + the registered builder, register a `wk` builder, and 297 lines of parallel card
code delete themselves.**

⚠️ **THIS IS THE RISKIEST CHANGE ON THE BOARD.** Search is a main navigation path and the room
Tina uses most. ⛔ **Measure first, one path at a time, and do not start by deleting anything.**

⛔ **MF164 IS HELD BEHIND THIS** — see §3.

---

## 1 · WHERE THINGS STAND

**HEAD after today: `a0b596a "jan braai"` + the MF163 commits Tina took at the end.**
**Doctor RED 10 · lawcheck 0 red 0 drift · Vietnam 11/50 · 33 versions.**

### ✅ SHIPPED 5 AUG
- **MF159 c1** — `wkPriceLookup` reads `PRICE_ALIAS` as a **last resort**, placed immediately
  before `return null`. `MOVED=0` · absent 42→40 · exact 160→162 · bare `lamb` left ABSENT.
  ⛔ **The alias was NOT deleted and must not be** — see §2.
- **MF161 c1+c2** — `WK_NOT_A_MAIN` guard in `wkClassifyMain`. 15 of 1218 records moved,
  **zero `costPP` stale**, salo held, sambal portions untouched.
- **MF162 c1+c2** — Jan Braai out of `LEFTOVER_IDEAS.beef`; `wkLeftoverKeys` asks the anchor first.
  ⚠️ **Reaches only 43 of 951 cards** — see §3.
- **MF163** — six lines: five Mmabatho Molefe + one Virgílio Nogueira Gomes. **Sindi is gone.**
  Doctor **rung 14** (amber) built, born-RED both arms. Dobos allowlisted; **Beyti Güler
  allowlisted as an eponym.**

### 📋 WRITTEN, NOT RUN — all in `reference/`
- **MF158** — season sweep. 8 fixes, 5 red-lined. Smallest, safest.
- **MF160 v2** — §39 THE BORDER RULE. 30 availability claims · 14 rand figures.
  ⛔ **v1 is STRUCK — do not read it.**
- **MF164** — the two boxes. **HELD.** See §3.

---

## 2 · STILL OPEN — NO BRIEF

| | |
|---|---|
| 🔴 **STOCK-GUARD · 18 lines** | **RANKED 5 AUG — see §2b.** The guard at `worldkitchen.js:637` returns null on `stock\|broth` **by design** — **the card is right, the LIST is wrong.** Fix belongs in the plan/shopping path, **not** `wkPriceLookup`. **Money, not cosmetics.** |
| 🟠 SINGULAR→PLURAL · 13 | `shallot` `orange` `clove` `pistachio`. `priceOf` tries it at `core.js:1580`; `wkPriceLookup` only goes the other way. |
| 🟠 §3j substring debt · 24 | `bread flour`→`bread R18` · `dried plums`→`plums R40` · `sardines`→`pilchards R65`. **Parked on purpose.** |
| 🟠 starter-pool numbers | hot-and-sour **8g pork / 60ml stock**; soupe à l'oignon **51.4ml stock pp**. ⚠️ **NOT the anchor** — those are `course:"starter"` and never call `wkClassifyMain`. It is `wkPoolBase("starter")=60` ÷ first weighted line. |
| 🟠 `cost: not yet priced` | on skopo + soupe à l'oignon browse cards while showing full ingredients. |
| 🟠 4 GLOSS reds (`tinza-echo`) | `sosatie`/`sosaties` on `indonesia-sate-ayam` · `biltong` on `indonesia-dendeng-balado` · `koesister` on `boerekos-koeksisters`. **Pre-existing, verified at HEAD.** §33 meets §39: SA words on non-SA cards, unglossed. ⚠️ **The koeksisters one is arguably fine — SA card, SA room. Read before treating as debt.** |
| 🔴 **the one-array assumption — bitten FOUR times** | `splitreport.js` (fixed) · `pricecheck.js` (still) · `tinza-doctor.js` §13 scans only `/^WK_[A-Z]+$/` (still) · `anchorreport.js` carries a **second copy** of the fixed loader. **`wk_france.js` declares `WK_FRANCE` AND `FR_SAUCES`** — 6 sauce cards no tool has ever read. ⚖️ **ONE shared loader, not four.** |
| 🟠 costcheck lanes | china/japan/indonesia/thailand/vietnam only. **`southafrica` and `europe` cannot be scored at all.** `pricecheck` covers 6 of **12** `wk_*.js` files. |
| ⏸️ `ayam-tangkap` "north-facing wall" | sunny in Pretoria, **shaded in Stockholm.** No grep will ever find it — the defect is a compass bearing. **Judgement.** |
| ⏸️ MF153–157 · Thailand 7 anchors · 30-stale merge refusal · root-path startup guard · §2.5 merge (7 SA dishes held) · Northern Ireland 12 pre-standard records · `pu-phad` §37 both-forks defect | **parked, correctly** |

**Vietnam record 12** — floor MET at 11. Waiting whenever Tina wants to cook again.

---

## 2b · 🔴 THE STOCK-GUARD, RANKED BY MONEY — **Tina: "fix the biggest and most important first"**

**18 lines over-bill the trolley. Total phantom spend, one serving each: R633.74.**
**THREE LINES CARRY R513 OF IT — 81%.**

| rank | record | line | phantom |
|---|---|---|---|
| 1 | `china-pi-dan-shou-rou-zhou` | 2.2 **litres** chicken stock | **R198.00** |
| 2 | `china-chongqing-huo-guo` | 2 litres **beef or chicken** stock | **R180.00** ⚠️ A-or-B |
| 3 | `china-wonton-noodle-soup` | 1.5 litres chicken stock | **R135.00** |
| 4–7 | `we-kartoffelsuppe` · `we-linsensuppe` · `we-brotchan` · `france-blanquette-de-veau` | 150–300ml | R13.50–R30.00 (3 of 4 A-or-B) |
| 8–18 | the tail | 60–300ml + stock cubes | **all under R8.10** |

⚖️ **THE SHAPE: THE DAMAGE SCALES WITH VOLUME, SO IT IS ALWAYS SOUPS AND ALWAYS BIG-POT DISHES.**
**The guard matters most exactly where stock IS the dish.** ✅ **Fix the top three and 81% of the
money is fixed in one commit.**

⚠️ **9 of the 18 are ALSO A-or-B lines** (`beef or chicken stock` · `water or stock` · `chicken or
vegetable stock`). **An A-or-B line cannot price honestly in ANY engine.** `china-chongqing-huo-guo`
carries **both defects on one line.** ⛔ **Fix the guard first and leave A-or-B as its own pass**,
or nobody can tell which fix did what.

⛔ **Two lines are parse artefacts, not stock lines** — `nigeria-efo-riro` *"Salt & stock to taste"*
and `nigeria-gbegiri-soup` *"Stock as needed"*. Qty is null. **They belong to the to-taste problem,
not this one.**

🩸 **AND THE PROBE SCAR THAT CAME WITH THIS ONE — THE SIXTH OF THE DAY.** The first ranking printed
**R30,000 for a 300ml line**. Cause: the unit regex `/l|litre/` matched **the `l` inside `ml`** and
multiplied every millilitre by a thousand. ⚖️ **That is the exact bug this whole day was spent
chasing — a substring winning a match — written into the tool that was measuring it.**
📌 **THE RUNG: A UNIT CONVERSION MUST PRINT ITS OWN PROOF BEFORE IT PRINTS A RAND.** The second run
opens with `300ml→300g · 2 l→2000g · 2 "litres chicken stock"→2000g` and only then reports.

---

## 3 · MF164 — WRITTEN AND HELD, AND WHY

`reference/MF164_TWO_BOXES.md` fixes four things:
1. **512 records** where pairing chips are not names — the 40-char guard measures **length** when
   the question is **namehood**. *(`"Tea, or after a heavy meal."` → «Tea» «or after a heavy meal.»
   · chakalaka splits on the `and` **inside `tomato-and-bean`** giving 36 and 25 chars, both under
   any length guard, both garbage.)*
2. **Leftover map is singular-only** — `/\bchickpea\b/` misses `chickpeas`; **four keys have no map
   entry at all**: `egg` · `pap` · `roast-veg` · `fruit`. Frittatensuppe's anchor is `egg`.
3. **267 authored `leftovers` arrays are read by NO code path.** Bebek Goreng's bespoke ideas have
   never rendered for anyone. **Rule: authored beats derived, always.**
4. **115 savoury cards** with no leftovers key *(a further 239 are desserts/drinks — **by design**)*.

⛔ **HELD because §3 and §4 patch `goesWellBox` and `leftoverBoxHTML` — and SEARCH CALLS NEITHER.**
Ship it now and you fix two paths of three, verify it in the section, and it is silently absent
from search. **MF165 first.**

### ✅ THE HERITAGE LINE — RULED 5 AUG: **KEY IT. DO NOT DROP IT.**

It was picked with `LEFTOVER_HERITAGE[Math.floor(Math.random()*7)]` — **random, re-rolled every
render** — which is why samp-and-beans carried *pain perdu* and jollof carried *chilaquiles*.

🩸 **BUT THE SEVEN LINES WERE ALREADY WRITTEN KEYED. THE KEY WAS NEVER RECORDED.** Every one names
a real dish built from one specific leftover:

| line | reuses | key |
|---|---|---|
| Nasi goreng | yesterday's rice | **rice** |
| Pain perdu / French toast | stale bread | **bread** |
| Bubble & squeak | leftover roast veg | **roast-veg** |
| Chilaquiles | yesterday's tortillas | **bread** |
| Ribollita | yesterday's soup, beans | **beans** |
| Feijoada | the day's meat scraps | **beans** / **pork** |
| Tetrazzini | leftover roast chicken | **chicken** |

**THE FIX:** tag each line with its key, and **show NO line when a key has none** — never a random one.

⚠️ **EIGHT KEYS STILL NEED A LINE, AND THEY ARE TINA'S TO WRITE, NOT CODE'S:**
**potato · pap · beef · lamb · seafood · cheese · fruit · egg.**
*(Obvious candidates: **pap** → fried pap slices the next morning · **potato** → rösti or Spanish
tortilla · **seafood** → fish cakes · **cheese** → rarebit.)*
⛔ **Until they are written those cards show the ideas with no italic line. That looks fine. Ship it
that way rather than inventing food history.**

⚖️ **THE RANDOMNESS GOES REGARDLESS.** Rule Zero — **a card that renders differently on refresh is
drift the reader can see.**

---

## 4 · 🩸 THE PATTERN OF THE DAY — READ THIS BEFORE WRITING ANYTHING

**ONE NOUN, FOUR ENGINES, FOUR SEPARATE MORNINGS:**

| engine | symptom | status |
|---|---|---|
| `wkPriceLookup` | `stock` → a whole chicken at R90 | MF159 · **shipped** |
| `wkClassifyMain` | `beef tallow` → the portion anchor | MF161 · **shipped** |
| plan/shopping path | `stock` over-billed in the trolley | **open** |
| `wkLeftoverKeys` | `broth` → beef leftovers | MF162 · **shipped** |

⚖️ **EVERY ONE WAS FOUND BY TINA LOOKING AT A CARD. NEVER BY A WATCHER.**
**The rungs matter more than the fixes.**

### 🩸 AND THE MEASUREMENT SCARS — five bad probes in one day, all mine
| claimed | actual | why |
|---|---|---|
| 5 shop names | **0** | `Makro` inside **Makroudh** · `Spar` inside **Spare Ribs** |
| 9 availability claims, then 473 | **30** | unanchored, then over-loosened |
| 121 split lines | **118** | orange zest 4→3, vanilla 10→8 |
| soups deflating from the anchor | **invented** | they are `course:"starter"` and never call `wkClassifyMain` — I read one function and never followed the call path |
| R30,000 phantom on a 300ml line | **R30** | my unit regex `/l\|litre/` matched the **`l` inside `ml`** — a substring winning a match, in the tool measuring substring bugs |
| 354 cards with no leftovers | **115** | 239 were desserts/drinks, by design |

📌 **THE RUNGS THIS BOUGHT:**
- ⚖️ **REPORT A PROBE'S DESIGN BEFORE ITS COUNT.**
- ⚖️ **A PROBE MUST BE SHOWN TO PRODUCE A TRUE NEGATIVE, NOT ONLY A TRUE POSITIVE.**
- ⚖️ **DO NOT REASON FROM A CITY TO A SHELF** *(the crab scar, 2 Aug — frozen whole crab IS sold
  in Pretoria; Tina buys it)*. **Ask. She has been to the shop.**
- ⚖️ **INSPECTION IS NOT PROOF** — check HEAD in a throwaway worktree.
- ⚖️ **A UNIT CONVERSION MUST PRINT ITS OWN PROOF BEFORE IT PRINTS A RAND.**
- ⚖️ **PROVE "PROSE ONLY" FIELD-BY-FIELD, NEVER BY GREP.** These are single-line JSON records, so
  every changed line contains `costPP` whether or not it moved. *(Code's MF163 method: parse at
  HEAD, parse now, diff by field. **This is the standard now.**)*

---

## 5 · RULINGS MADE 5 AUG

- **§39 · THE BORDER RULE** *(written, not yet in `TINZA_RULINGS.md` — MF160 v2 commit 1)*
  > **The ingredients line is the answer. Do not tell the reader what they cannot buy.**
  > **Anything false elsewhere must be a MEASURED QUANTITY — not a currency figure, not a vague multiple.**

  ⚖️ Naming the country does **not** fix an availability claim; it makes it wrong more politely.
  ⚖️ *"Comfortably more than double the tub"* is **not a measurement.** ✅ *"300g of whole crab
  yields about 84g of meat"* **is** — true in every country, no currency, never stale.
  ⚖️ **Seasons:** *"in warm weather"*, or name the hemisphere, or name the season **and** say it
  depends where you are.

- **NO LIVING NAMED PERSON** is quoted, paraphrased, or credited with an opinion, feeling or
  technique in card content. ✅ **History stays** — Escoffier, Diat, Tselementes, Olivier,
  Bircher-Benner, João da Mata, **Dobos (1885)**, **Beyti Güler (eponym)**. ⚖️ *A dated creation
  fact clears an entry — not a death date.*

- **§33 / §33.8 UNCHANGED** — SA words are **EXPLAINED, NEVER TRANSLATED.** Same courtesy to
  Nigerian, Swedish, Japanese and Indonesian dish words. **A Swede reading *bredie* with its gloss
  is the app WORKING.**

---

## 6 · HOW TO START

```
node tinza-doctor.js      # expect RED 10 — a BASELINE, not a gate  ⚖️ Law 51
node tinza-census.js
node tinza-lawcheck.js    # expect 0 red 0 drift
```
⚠️ Hygiene will have risen — **seven new MF briefs landed in `reference/` on 5 Aug. That is
FILING, not drift.** The drift score itself must stay 0.

Then `TINZA_NOW.mermaid`. Then §0.
