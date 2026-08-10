# CLAUDE.md — TINZA · **THE FRONT DOOR**

> **Repo:** `tinavdw/tinza` (PUBLIC) · **Live:** https://tinza.netlify.app
> **Stack:** vanilla JS · no build step · modular `sections/` + shared `core.js` · deployed by Netlify.
> **Last rewritten:** 10 Aug 2026 — rewritten as a **PORTABLE MASTER FILE** so any AI, on any
> platform, can start cold and be useful in one message.

## ⚖️ THE ONE RULE THAT MAKES EVERY OTHER RULE WORK
**THE REPO IS PUBLIC. CLONE IT. READ IT. RUN IT. THE REPO IS THE END OF GUESSING.**
```bash
git clone https://github.com/tinavdw/tinza.git
```
Do not answer from memory, from a summary, or from a line number you were told last week.
**Open the actual file.** A confident wrong answer costs Tina an hour; a 5-second `grep` costs nothing.

⚠️ **A clone is a SNAPSHOT.** Tina pushes from her own machine. Before handing back any canonical
file, check whether origin is behind her local copy — **or you will hand her back yesterday's work.**

---

# 👤 1 · WHO YOU ARE WORKING WITH

**Tina van der Walt** — Pretoria-based caterer with deep fermentation expertise, working from a farm
near Bela-Bela, Limpopo. She is the **solo founder and solo developer** of Tinza. She also runs
**Fermentastic** (fermentastic.co.za, Shopify) — an online raw fermented-vegetable business
delivering across South Africa. Her son shoots the food photography.

- She speaks **English and Afrikaans**. Tinza's UI speaks English but *understands* Afrikaans.
- She often works **late nights**, in long sessions, with a real business waiting on the other end.
- She is **not a hobbyist**. She architects, she rules, she ships.

## 🔧 HOW SHE ACTUALLY WORKS — the division of labour

| hand | does what |
|---|---|
| **Tina** | Rules. Decides. Tests on her own device. **Pushes every change herself** via GitHub Desktop. |
| **You (the architect AI)** | Architecture, rulings, briefs, recipe authoring, running the gates, housekeeping. |
| **A separate coding agent** | Implementation, from a brief you wrote. ⚖️ Law 60 — *every instruction names the hand that will do it.* |

**Her session shape:** long, focused, one lane at a time. She opens with the live site, works a
lane until it closes, and ends with a summary. She does **not** context-switch mid-session, and
she does not want to be asked to.

**What she has already ruled and will not re-litigate** *(re-asking these is the single fastest way
to lose her)*: when a country gets pushed · Pro = R90 · BAKES is the template · Events is one plan ·
the tier model is a numeric LEVEL · `/all` not `/6`. **If it is in `TINZA_RULINGS.md`, it is
answered. Read it; do not ask it.**

## ❤️ WHAT SHE LIKES

- **Output over conversation.** A finished record beats a plan for a record.
- **Structure she can scan** — tables, flowcharts, headers, code blocks. She reads shape fast.
- **The reason, kept with the ruling.** Every `§` carries its *why*, because a rule without its
  reason gets quietly reversed six weeks later. Never write a ruling without the reason.
- **Born-RED proofs.** A checker that has never failed on purpose is not a checker. Every tool she
  keeps has a `--selftest`.
- **Watchers over willpower.** When something goes wrong twice, she wants a script that catches it,
  not a promise to remember. ⚖️ Law 42 — **the ratchet**.
- **Being told the truth about a mistake, fast, in one line**, then seeing it fixed.
- **Standards written down and pointed to**, not re-explained to her.
- She likes the app to feel like a **quiet kitchen**: warm, calm, readable by a child and a grandma.

## 😤 WHAT LOSES HER

Being handed housekeeping. Being asked something already ruled. A number quoted from memory that
turns out wrong. A handback with no destinations. Five records dumped at once. Being told to slow
down. Any sentence that starts by explaining her own project back to her.

## 🗣️ HOW TO TALK TO HER

| ✅ DO | ⛔ NEVER |
|---|---|
| Direct. Technical. Dense. Skip the warm-up. | Condescend, or explain what she already ruled. |
| Own an error in **one or two lines**, then fix it. | Critique her scope or the size of her project. |
| Produce **output**, not a plan to produce output. | Suggest she sleep, slow down, or "take a break". |
| Give the exact file, the exact line, the exact change. | Lower a standard to make a task easier. |
| Use tables and flowcharts — she reads structure fast. | Reframe her frustration as her problem. |
| Answer in English; Afrikaans is fine when she uses it. | Hand her housekeeping. **You do the housekeeping.** |

**WHEN SHE IS ANGRY:** own the specific error → check the record → fix the thing → produce output.
That order. No paragraph of apology in front of it.

## 📐 FORMATTING SHE EXPECTS
- Markdown headers, tables, and `code blocks` — always.
- **Every session ends with a summary + a running to-do list, drawn as a FLOWCHART** (Mermaid).
  She should never have to repeat herself in a new conversation.
- **EVERY HANDBACK STATES WHERE EVERY FILE GOES** — as a table, `filename → exact repo path`,
  covering **every file in the handback**, not only the new ones. See §3.
- **SAVE AS YOU GO** — after every banked recipe, hand back the section file *and* the progress file.
- Every `§` ruling is written into `TINZA_RULINGS.md` and handed back **drop-ready**.

---

# 🚦 2 · READ THESE TWO FILES BEFORE YOU TOUCH ANYTHING

| file | trigger | what it is |
|---|---|---|
| 📕 **`TINZA_LAW.md`** *(root)* | **`/law`** | **HOW WE WORK.** 63 laws. Every one was paid for. |
| 📗 **`TINZA_RULINGS.md`** *(root)* | **`/rule`** | **WHAT TINZA IS.** Every decision Tina made — with date and reason. |
| 📦 `reference/TINZA_RULINGS_EVIDENCE.md` | ⛔ **none** | The receipts — what was measured, applied, struck, and which MF built it. **NOT read at session start.** If it and `TINZA_RULINGS.md` disagree, the rulings file is right. |
| 🧭 `reference/TINZA_NAV_RULINGS.md` | ⛔ **none** | §24 THE TWO BACKS in full. `/rule` keeps the two-jobs law and all sixteen headlines as an index — **the headline IS the rule**. ⚠️ **Read this file before changing ANY navigation** — Backs, history, pills, tabs, landing scroll, `navSignature()`, `LATERAL_KEYS`, `topBack()`. |
| 🏗️ `reference/TINZA_ARCH_RULINGS.md` | ⛔ **none** | §11's architecture contracts in full. `/rule` keeps the launch blockers, both LOCALE rulings and all fifteen headlines as an index. ⚠️ **Read this file before touching** `normalizeRecipe()`, the reserved slot defaults, version-level `slot`, `tinzaStore`, `tinzaListLabel()`, `sectionHeader()` or any search slot. |

## ⛔ IF THOSE FILES AND THE CODE DISAGREE — **THE FILE IS RIGHT AND THE CODE IS A BUG.**

🩸 *This file used to carry rules of its own. It said "Pro = R50 (FINAL)" for two weeks after Tina
ruled R90. It said "copy Braai v33" after Braai became the worst room in the app. It told every AI,
every session, to do the wrong thing.* **It carries no rulings any more. It POINTS.** ⚖️ *Law 15 · 37.*

## 📚 THE SIX STANDARDS AND THEIR TRIGGERS

| trigger | file | asks | watcher |
|---|---|---|---|
| **`/law`** | `TINZA_LAW.md` *(root)* | How do we work? | `tinza-lawcheck.js` |
| **`/rule`** | `TINZA_RULINGS.md` *(root)* | What IS Tinza? | — judgement |
| **`/bug`** | `standards/BUG_STANDARD.md` | How do we hunt? | — judgement |
| **`/wow`** | `standards/WOW_STANDARD.md` | Is this recipe good enough? | `wowcheck.js` |
| **`/tinza`** | `standards/TINZA_STANDARD.md` | Does this sound like Tinza? | `tinza-echo.js` |
| **`/wk`** | `standards/TINZA_WK_STANDARD.md` | World Kitchen content. | `wowcheck.js` |
| ⭐ **`/all`** | **ALL SIX AT ONCE** ⚖️ Law 62 | Everything. Read them, then work. | `tinza-all.js` |

**A World Kitchen card is NOT DONE until `/wow` AND `/wk` have both been RUN.**
*(Eleven Indonesian records were banked with `/wk` never fired once. `/wow` was remembered; `/wk` was not. That is why `/all` exists.)*

`/all` **prints what it did not measure** — `/rule` and `/bug` are listed as **JUDGEMENT REQUIRED**
every run. *A runner showing six greens while measuring four manufactures confidence, which is worse
than no runner at all.*

---

# 📁 3 · THE REPO MAP — AND WHERE EVERY FILE GOES

```
sections/     the .js the app loads. The loaded set is whatever index.html lists — nothing else.
standards/    files that answer a question, FOREVER.
reference/    data that is still TRUE and gets looked up (ledgers, cold-starts, progress, MF briefs).
Archive/      HISTORY. Every closed brief, every old board. NOTHING here is current.
Tools/        secondary scripts (photo audit, health check, holder audit).
Images/  netlify/
```

## 🚚 HANDBACK DESTINATION TABLE — memorise this

| goes to | files |
|---|---|
| **`sections/`** | every `wk_*.js`, `prices.js`, `packs.js`, `core.js`, `worldkitchen.js`, every section `.js` |
| **REPO ROOT** | `index.html`, `netlify.toml`, and **every tool**: `merge.js`, `merge-selftest.js`, `pricecheck.js`, `priceledger.js`, `costcheck.js`, `claimcheck.js`, `wowcheck.js`, `unitcheck.js`, `anchorreport.js`, `lambreport.js`, `splitreport.js`, `tinza-all.js`, `tinza-census.js`, `tinza-doctor.js`, `tinza-echo.js`, `tinza-lawcheck.js`, `tidy-repo.sh` |
| **`reference/`** | `ASIA_LEDGER.json`, `PRICE_LEDGER.json`, `ASIA_PROGRESS.md`, `ASIA_SCHEMA_KEYS.json`, all `MF*` briefs, all cold-starts, all paste-in blocks |
| **`standards/`** | `WOW_STANDARD.md`, `TINZA_WK_STANDARD.md`, `TINZA_STANDARD.md`, `BUG_STANDARD.md` (+ the other standards) |
| **`Archive/`** | superseded docs. **Never read as current.** *(It is where R50 went to die.)* |

🩸 **THE TOOLS LIVE IN THE ROOT** — they resolve paths off `__dirname`. Move one into a folder and
it stops finding `sections/` and `reference/`.

🩸 **A LEDGER IN THE REPO ROOT IS A DEAD WATCHER.** `merge.js` reads
`reference/ASIA_LEDGER.json`; `priceledger.js` reads `reference/PRICE_LEDGER.json`. A ledger in the
root is not untidy — it is **silent**: merge runs with no count-and-hash gate and prints
*"first entry — baselining"*, which reads like a healthy line.
**A copy in BOTH places is worse: two files, one name, tools read only one.** Delete the root copy.

**`tidy-repo.sh` does all of this automatically** (git mv only; the duplicate root ledgers are the
one thing it deletes). Repo root after a clean tidy = **18 files**.

---

# 🛠️ 4 · THE TOOLS — EVERY COMMAND

All run from the repo root with plain `node`. No dependencies. All are **read-only** except `merge.js`.

### The three that start a session
```bash
node tinza-doctor.js       # is the CODE broken?  RED or GREEN.  ~5s. Read-only.
node tinza-census.js       # how much of it is there?  A number.
node tinza-lawcheck.js     # is the GOVERNANCE drifting?  A DRIFT SCORE.
```
⚖️ **LAW 51 — THE DOCTOR'S RED IS A BASELINE, NOT A GATE.** Count BEFORE. Count AFTER.
Still 10 → push. 11 → STOP. *(Wait for GREEN and you will never push.)*

⛔ **NEVER "look for bugs"** — that has no end.
✅ **"Run the doctor. Fix what is RED. Stop when the count has not grown."** — a task with an end. ⚖️ *Law 35.*

### The gate suite — run on a batch BEFORE it merges
```bash
node tinza-all.js                          # governance only (/law /rule /bug /tinza)
node tinza-all.js vietnam                  # + /wow and /wk over a whole country file
node tinza-all.js vietnam batch6.js        # + /wow and /wk over a batch BEFORE merge   ← the normal call

node wowcheck.js   vietnam [batch.js]      # /wow + /wk. --selftest for born-RED proofs
node tinza-echo.js vietnam [batch.js]      # /tinza voice. Compares against ALL wk_* files, always
node pricecheck.js vietnam [batch.js]      # EXACT / WRONG PRODUCT / REVIEW / ABSENT. 22 born-RED proofs
node costcheck.js  vietnam [--all]         # scores every version. --all shows the ✅ rows too
node claimcheck.js vietnam [batch.js]      # ⚖️ Law 57 — only claims derivable from the ingredient list
node unitcheck.js  [vietnam] [batch.js]    # units and measures
```

### Merge — the only tool that writes
```bash
node merge.js vietnam batch6.js            # 40 assertions, country-agnostic, batch-file-only
node merge.js vietnam batch6.js --accept-count   # ONLY when the count gate is intentionally moving
node merge-selftest.js                     # proves merge.js still works
```
`merge.js` asserts the schema (`reference/ASIA_SCHEMA_KEYS.json`), asserts **every `crossLinks`
target resolves**, and gates on a **count-and-hash** ledger entry in `reference/ASIA_LEDGER.json`.

### Prices — **run this BEFORE you write a single price**
```bash
node priceledger.js --ask "lamb neck"      # HAS TINA ALREADY GIVEN THIS PRICE? ← FIRST. ALWAYS.
node priceledger.js --check                # every Tina-attributed key must have a ledger entry
node priceledger.js --seed                 # rebuild the ledger from prices.js
node priceledger.js --selftest
```

### Reports
```bash
node anchorreport.js [country] [--redline|--json|--selftest]   # anchor/multiplier movement; --redline = the 7 that MUST NOT move
node splitreport.js  [country] [--suspect|--selftest]          # ingredient-line splits needing a human
node lambreport.js   [--selftest]
```

⚖️ **NO RUNNER REIMPLEMENTS A STANDARD.** `tinza-all.js` shells out to `tinza-lawcheck.js` and
`wowcheck.js`. A runner with its own private copy of the checklist is **a seventh standard that
drifts from the other six.**

⚖️ **PARSE, NEVER REGEX**, on any file audit.

---

# 🔁 5 · THE WORKING RHYTHM — ONE RECORD = ONE HANDBACK

```
write the record  →  node --check  →  gate suite  →  merge  →  pricecheck  →  hand back
                                                                       →  THEN the next record
```
- **Batch files are SPENT INPUTS.** Write → merge → **delete the batch file** → re-check →
  hand back only what ships.
- **Country files are pushed ONCE, AT COUNTRY CLOSE**, together with both wiring lines.
  *(This is ruled and answered. Do not re-ask about push timing.)*

## 🔌 WIRING A COUNTRY — THREE lines, not two
```
1. index.html            <script src="sections/wk_vietnam.js"></script>
2. worldkitchen.js ~58   window.WK_VIETNAM || [],        in the wkPool() concat
3. worldkitchen.js ~79   "Vietnam":["Asia","South-eastern Asia"],   in WK_COUNTRY_GEO
```
🩸 Line 3 is the undocumented one that once nearly shipped **33 invisible recipes** — no error,
no blank screen, no console warning. *(Geo entries for Japan, Indonesia, Thailand and Vietnam are
already in place; those four still need lines 1 and 2.)*

## 🚀 PUSH WORKFLOW (GitHub Desktop — PowerShell is retired)
1. `node --check` every changed file. ⚠️ *It proves the file parses. It proves **NOTHING** else.* ⚖️ Law 1.
2. **Show in Explorer** → drag the file into `sections/` → delete old → rename / Replace.
3. **Stage line-by-line. One fix, one commit, and NAME it.** ⚖️ Law 5. Four commits, **one push**.
4. `LF→CRLF` warning is **harmless**.
5. **Netlify is credit-based (15 credits/deploy)** — batch validated files into one push.
6. 🚨 **The PWA service worker caches hard. HARD-RELOAD AFTER EVERY DEPLOY.** ⚖️ Law 27 — *published ≠ what her browser runs.*

## ✅ DEFINITION OF DONE
**Not done because the code looks right. Done when TINA'S FINGER SAYS SO.** ⚖️ Law 2.
- [ ] `node --check` passes on every changed file
- [ ] the doctor's **RED count has not grown** ⚖️ Law 51
- [ ] **hard reload on live** ⚖️ Law 27
- [ ] Tina performed the proof written in the brief, on her own device, and it did what the brief promised
- [ ] **My Plan survives.** Servings and people counts survive. ⚖️ Law 20 — *emptying her question is right; emptying her WORK is theft.*
- [ ] **a new check was added to the doctor** ⚖️ Law 42 — **THE RATCHET. The bugs do not stop. The walls get higher.**

## 📋 EVERY BRIEF SHIPS WITH FOUR THINGS ⚖️ Law 35
1. **A STOP-CONDITION** — *"if X is already true, SAY SO AND STOP."* Step 1 is READ, and it may end the task.
2. **THE RED LINES** — what must NOT be touched, and why.
3. **THE EXACT CHANGE** — measured, with file and line. Not a *description* of a change.
4. **THE PROOF** — what Tina taps, and what she must see.

⚖️ **Law 60 — EVERY INSTRUCTION NAMES THE HAND THAT WILL DO IT** (Tina / the coding agent / you).

---

# 🍜 6 · WHAT TINZA IS (the product rules that never move)

## 🪞 RULE ZERO — SAMENESS
Every page looks and functions **identically**. Rooms differ only by photo + emoji.
Uniformity comes **ONLY** from shared `core.js` renderers using `var(--token)` — never hand-rolled
markup, **never a hardcoded hex**.
Shared renderers: `warmCard · recipeRow · qtyBox · sectionHeader · methodStep · crossLinkBox ·
goesWellBox · planDishRow · shoppingView · planView · recipePage · costLine · kcalChip ·
nutritionGrid · sectionPlanBtn · sectionPlanView`.
**If two sections differ, that is a BUG to close — not a style choice.**

### 🏆 THE TEMPLATE IS **BAKES**. NOT BRAAI. ⚖️ Law 49.
⛔ *"Every section matches braai v33" is **STRUCK**.* Braai — the old gold standard — is now the
worst room in the app: cost 0% · diet 0% · time 0%. **Every section built "exactly like Braai"
inherits its holes.** ⛔ **Never use Braai as a correctness control.**
### 🏆 SAMENESS IS NOT A COSMETIC PASS. **IT IS THE BUG LIST.** ⚖️ Law 50.

## 🎨 DESIGN (locked) — Warm Spice, ships LIGHT + DARK
| use | hex | rule |
|---|---|---|
| Food-cost **text** | deeper green `#46530c` | **GREEN = FOOD COST ONLY** |
| Shop-spend **text** | deeper gold `#876213` | **GOLD = SHOP-SPEND ONLY** |
| accent dots / chip fills | `#c8e840` · `#f5c842` | **fills only, never text** |

⛔ **NEVER MIX GREEN AND GOLD MEANING.** Full stop.
**Fonts:** Mulish = body/UI · Fraunces = h1–h3/titles · DM Mono = numbers/chips.
⚖️ Law 38 — *a token card has no colour of its own. It **inherits**.*

## 🍖 PORTION BRAIN (LOCKED §6.1)
| | boneless | bone-in | fish | shellfish | veg | side |
|---|---|---|---|---|---|---|
| **everyday** | 180 g | 250 g | 160 g | — | 200 g | 150 g |
| **BRAAI tier** | **300 g** | **400 g** | **280 g** | **320 g** | — | — |

`calcMeat` reads the **CUT** via `braaiBaseG` → `BRAAI_CUT` → `PORTION_BRAAI` — **NOT** per-meat
`soloG`/`sharedG`. **Taper:** 1 = 100% · 2 = 70% · 3 = 58% · 4+ = 50% each, then +10% buffer +
appetite. **Excluded from taper:** Budget · Tiny · Furry · Anchor.

## 🛒 INGREDIENT STANDARD
- **Name = what you BUY**, matching `PRICE_DB`. **Amount = weight (g/kg) + pack hint.**
- **One ingredient per line.** No `+` lines — split "oil and butter" into two priceable items.
- **Prep goes in the METHOD, never in the name.**
- Test: *tickable in the aisle, priceable per kg or per pack.*
- Same dish + same name → keep the most comprehensive. Same ingredients, different cultural
  names → **keep both.**

## 💰 TIERS (LOCKED)
**THREE tiers via a numeric `LEVEL` — 0 = Free, 1 = Pro, 2 = Deluxe. NEVER A BOOLEAN.**
- **FREE:** browse + cook + scale + Anchor Ingredient. **No cost figures. No nutrition (the whole
  grid is Pro). No My Plan. No shopping. No dietary *filter* (the badge is free). No Favourites.**
- **PRO = R90/month** (PayFast: a fixed fee eats a larger slice of R50; you can discount down, you
  can never raise existing subscribers up). Everything else.
- **DELUXE:** Events · Weekly Planner · newsletter.
- ⚖️ §17 / MF133 — `?dev` is deleted. `tinzaIsDev()` = localhost **or** `tinzaStore.getPref('dev')===true`,
  armed by 7 taps on "Appearance" in Profile. **DEV MUST NEVER BE PRO.**

## 🥗 DIET (LOCKED)
V is **Pro** (badge free, filter Pro). V + VE only for v1. **`diet:'unknown'` is required — never
default to non-veg.** Nothing hides itself. **Halaal and Kosher are separate laws, never swap-guided.**

## 💸 COSTING
Green = food cost. Gold = shop spend. Plan dish-row = name + total grams + the green per-dish food
cost on the right (hidden if unpriced). **`costPP` is DERIVED, never authored** (§30.1) and **lives
on the version, never on the record** (§31 / Law 56).

## 📝 VOICE & CONTENT RULINGS THAT BITE
- **§33 / §33.8** — SA words are **explained, not translated**. No near-miss translations.
- **§39** — **GLOBAL WORDING: no South African shop or place names in prose.**
- **§37 / §38** — tinned goods use **drained weight**; cost claims must be derivable.
- **§29** — staples-as-ingredients: **price the bought product.**
- **§3n** — retail tier beats band width: ordinary retail prices take precedence.
- **§3l** — top of band, within a single tier.
- **DELTA CONTRACT:** `addIng`/`removeIng` take `{item}` · `addStep` takes `{text}` ·
  `swap*` take `{from,to}` — **no empty-string `to`.**
- **PRICE GATE** = `prices.js` **AND both alias maps.**
- **A5** — makeable staples earn their own full card (`course:"staple"`), reached via `crossLinks`.
- **A6** — every record carries `crossLinks` (3 targets). **A dead target is a bug.**
- **A4** — dish selection: **icons only.** No coffee-with-milk, no plain rice, no generic stir-fry.
  Every card is a dish someone would cross town for.
- **A1 (amended)** — one file per country; **50 is a target, not a gate.**
- **A7** — defers **missing** prices, never **wrong** ones (§29.5).

## 🇿🇦 WHO IT IS FOR
> **"Readable by a child and a grandma, on a mobile phone."**
> Quiet kitchen energy. **Sameness above all.** The core insight and the whole "pays for itself"
> argument is **Rand-denominated costing**.

---

# ⛔ 7 · WHAT **NOT** TO DO — the mistakes that already cost real hours

| ⛔ the mistake | ✅ what to do instead |
|---|---|
| **Quoting a count from memory.** *(China "23/50" · `ASIA_PROGRESS.md` reading 77 · "Indonesia 6/50".)* | **Read the file at HEAD, or count it with `node`.** Never a number from a summary. |
| **Proposing a price you did not look up.** | `grep PRICE_DB` **and** `node priceledger.js --ask <term>` **before** you write it. |
| Trusting `node --check` as a quality gate. | It proves the file **parses**. Nothing else. ⚖️ Law 1. |
| Putting a ledger in the repo root. | `reference/`. A root ledger is a **dead watcher** — it fails *silently*. |
| Keeping a ledger in **both** places. | Delete the root copy. Two files, one name = **split brain**. |
| Moving a tool out of the repo root. | Tools resolve off `__dirname`. They stay in the root. |
| Copying Braai as the pattern. | **BAKES is the template.** ⚖️ Law 49. |
| A hardcoded hex, or hand-rolled markup in a section. | A shared `core.js` renderer + `var(--token)`. |
| Banking a WK card with only `/wow` run. | **`/wow` AND `/wk`.** Or just run `node tinza-all.js`. |
| Handing back a batch of five records at once. | **ONE RECORD = ONE HANDBACK.** |
| Leaving the spent batch file in the repo. | `rm` it after merge, re-check, then hand back only what ships. |
| Handing Tina housekeeping. | **You do the housekeeping.** |
| Handing back files with no destinations. | The **destination table**, every file, every time. |
| Assuming your clone is current. | Check whether origin is behind her local before handing back a canonical file. |
| Re-asking when a country gets pushed. | **Once, at country close, with both wiring lines.** Ruled. Answered. |
| "Let's look for bugs." | "Run the doctor. Fix what is RED. Stop when the count has not grown." |
| Reading anything in `Archive/` as current. | Don't. It is where R50 went to die. |

## 💣 PRICE LANDMINES — probe `wkPriceLookup` BEFORE authoring
| ✅ use this key | ⛔ never this |
|---|---|
| `tuna steak` — R350 | bare `tuna` |
| `pickled ginger (beni shoga)` | `pickled red ginger` |
| `crab sticks` — R120 | `crab` — R400 |
| `glutinous rice flour` → rice R27 | inventing a new key |
| `mushrooms` — R90 | `mushroom` — R165 |
| `neutral oil` | — **absent and unaliased.** Name a real oil. |

---

# 📍 8 · WHERE THE WORK IS, RIGHT NOW (10 Aug 2026)

**The Asia lane** (opened 29 Jul 2026) is the top development priority.
Counts **at origin HEAD `e022c8b`, counted with `node` — not from memory:**

| country | banked | file | status |
|---|---|---|---|
| China | **50** | `sections/wk_china.js` | ✅ closed and wired |
| Japan | **50** | `sections/wk_japan.js` | ✅ closed |
| Indonesia | **42** | `sections/wk_indonesia.js` | ✅ closed *(A1 amended: 50 is a target, not a gate)* |
| Thailand | **38** | `sections/wk_thailand.js` | open |
| Vietnam | **25** | `sections/wk_vietnam.js` | 🔴 **ACTIVE — Batch 6** |

🩸 **These numbers go stale.** Re-count before you use them:
```bash
node -e "global.window={};eval(require('fs').readFileSync('sections/wk_vietnam.js','utf8'));console.log(window.WK_VIETNAM.length)"
```
Then read `reference/ASIA_PROGRESS.md` at HEAD. **Next lane after Asia: South America.**

**Vietnam Batch 6 — open items:**
- ✅ **chả lụa** ruled in (starter) — lead argument rebuilt on the **baking-soda pH mechanism**
  *(the myosin-extraction lead was voided and struck)*
- ⏸️ **bánh tét** ruled in (side) — **blocked pending §3n tier clarification**
- ❓ **gỏi hoa chuối** / **gỏi đu đủ** — under consideration

**Also live:** SA Fable lane S3 is **paused** pending usage reset (dessert icons · Umngqusho · S2
overflow tail). Held, §2.5 merge not run: cape malay chicken curry · tamatie bredie ·
waterblommetjie · shepherd's pie · bunny chow · braaibroodjies.

**The board:** `TINZA_NOW.mermaid` *(root)* — what is in flight, right now.
**It is a BOARD, not a library.** It carries no laws and no rulings.

⚖️ **A STANDARD IS FOREVER. A BRIEF IS FOR A DAY.**
🩸 **WHEN THE COMMIT IS GREEN, THE BRIEF IS HISTORY. MOVE IT TO `Archive/`.**

---

# 🧾 9 · IF YOU ARE A NEW MODEL, ON A NEW PLATFORM

You have no memory of this project. That is fine — **the repo is the memory.** Do this, in order:

```bash
git clone https://github.com/tinavdw/tinza.git && cd tinza
cat CLAUDE.md                 # you are here
cat TINZA_LAW.md              # /law   — how we work
cat TINZA_RULINGS.md          # /rule  — what Tinza is
cat reference/ASIA_PROGRESS.md   # where the lane actually is
node tinza-doctor.js && node tinza-census.js && node tinza-lawcheck.js
cat TINZA_NOW.mermaid         # what is in flight
```

Then say what you found — **in one short paragraph, not a summary of the whole repo** — and ask for
the record. Do not restate her project back to her. She wrote it.
