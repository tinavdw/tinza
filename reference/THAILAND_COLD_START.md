# 🇹🇭 THAILAND — LANE SCOPE & COLD START
**Written 30 Jul 2026. ⚖️ REVISED 31 Jul 2026 — read the revision notes in §0a before anything else.**
*This file is the memory. Read it first, in the session that opens Thailand.*

---

## 0 · WHERE THE LANE STANDS — ✅ COUNTED WITH NODE AT ORIGIN HEAD (`93c2d08`)

| country | status |
|---|---|
| China | ✅ CLOSED **50** · pushed + wired |
| Japan | ✅ CLOSED **50** · pushed + wired |
| Indonesia | ✅ CLOSED **42** · pushed + wired · ledger `42 · 8a1c2521f08a717e` |
| **Thailand** | ▶️ **OPEN — 10 records banked (B1–B7 closed 31 Jul 2026)** · ⚖️ COUNT WITH NODE, NEVER FROM THIS LINE |
| Vietnam | ⏸️ not started |

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
| `noodles` R80 *(knowingly)* | `glass noodles` | → `noodles` R80 — wheat, not mung bean |
| *(in-method only)* | `banana leaves` | → `banana` R32, the fruit |

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

## 4 · ✅ FIRST BANK — **CLOSED 31 JUL 2026 · 4 RECORDS BANKED**

⚖️ **ALL FOUR LEADS BELOW ARE NOW SPENT.** They are kept visible, never deleted, so the
next session cannot re-author them. **From here: ONE RECORD, ONE BANK.**

| # | dish | id | course | costPP (engine-derived) |
|---|---|---|---|---|
| 1 | Pad Thai | `thailand-pad-thai` | main | R61 · R92 · R75 |
| 2 | Som Tam | `thailand-som-tam` | side | R16 · R22 · R43 |
| 3 | Massaman | `thailand-massaman` | main | R78 · R83 · R91 |
| 4 | Khao Niao Mamuang | `thailand-khao-niao-mamuang` | dessert | R18 · R22 · R30 |

⛔ **MOATS NOW SPENT — DO NOT REUSE THE ANGLE:**
**statecraft/propaganda** *(Pad Thai — the Phibun "noodle is your lunch" campaign, WITH the
Chatichai counter-view written in)* · **food science/enzymes** *(Som Tam — papain)* ·
**poetry & etymology** *(Massaman — Rama II's 1800 barge poem; the word never existed in
Persian or any Indian language)* · **genetics** *(Mango Sticky Rice — the Waxy gene)*.
✅ **STILL UNSPENT:** archaeology · mathematics & calendrics · textiles · cartography · entomology.

⛔ **LEADS NOW SPENT:** soak-never-boil *(Pad Thai)* · bruise-never-grind *(Som Tam, deferring
to Sambal Terasi in prose — crossLinks cannot cross countries)* · red-paste-plus-dry-roasted-
whole-spices *(Massaman)* · soak-then-steam-never-absorb *(Mango Sticky Rice)*.

🆕 **SA STAND-INS TAKEN, all named honestly in-method rather than hidden:**
`long beans` ABSENT → **green beans** ⚖️ **NOW A RULED NOT-IN-SA PRECEDENT** (Tina, 31 Jul:
yard-long/snake/bodi beans are specialty-market only, no shelf price to key; ⛔ the R24–30
figures are SEED PACKETS and must never become a food key) · `preserved radish`/chai poh →
falls to FRESH `radish` R108, so it is **kept OUT of the ingredient line and named in-method**
— ✅ **Tina sourced it 31 Jul at R58–60/500g ≈ R118/kg; logged in the MF152 append, still
deferred under A7, and the line goes in the moment the key lands** · `peanut oil` → aliased to
`sunflower oil` in BOTH maps; 🩸 **`nigeria-suya` says peanut oil and is costed as sunflower —
a §29.2 mismatch awaiting Tina's ruling, see the MF152 append.** ⚠️ Green papaya is hard to find in much of SA, so Som Tam's budget fork is
**Tam Taeng Kwa (cucumber)** — a real Thai dish, not a consolation.

---

## 4a · ✅ B2 AND B3 — BANKED 31 JUL 2026 · ONE RECORD, ONE BANK

⚖️ **ADDED BECAUSE THIS FILE ONLY KNEW ABOUT B1 AND THE CODE HELD SIX RECORDS.** A cold-start file
that lags the code is the exact shape that has cost a session before. **Never quote a count from
this table — read it, then count with node.**

| # | dish | id | course | costPP |
|---|---|---|---|---|
| 5 | **Tom Yum Goong** | `thailand-tom-yum-goong` | **soup** | R50 · R80 · R86 |
| 6 | **Pad Krapow** | `thailand-pad-krapow` | main | R46 · R50 · R47 |
| 7 | **Gai Yang** | `thailand-gai-yang` | main | R53 · R60 · R66 |
| 8 | **Larb** | `thailand-larb` | **salad** | R47 · R52 · R52 |
| 9 | **Thod Man Pla** | `thailand-thod-man-pla` | **starter** | R61 · R79 · R104 |
| 10 | **Khanom Krok** | `thailand-khanom-krok` | **dessert** | R14 · R16 · R18 |

**Courses now held:** main ×4 · dessert ×2 · side · salad · starter · soup.
🩸 **B8 — the shelf is reasonable now; go for QUALITY not balance.** Still-unwritten strong dishes:
**Kaeng Keow Wan** *(green curry — main, but it has earned a slot)* · **Khao Soi** *(northern curry
noodle soup)* · **Kluay Tod** *(fried bananas, cheap)* · **Yam Woon Sen** *(⛔ probe first,
`glass noodles` → `noodles` R80, wheat not mung bean)* · **Sangkhaya Fak Thong** *(⛔ steamed-custard
method already used as Mango Sticky Rice v3)*.
⛔ **STILL BLOCKED:** `glutinous rice flour` unsourced → no bua loy or mochi-type desserts.
`pandan` ABSENT → no tako, no khanom chan, no lot chong.
⛔ **DO NOT RE-AUTHOR EITHER.** Both are full `/wow` cards with three versions each.

### ⛔ LEADS NOW ALSO SPENT
**Tom Yum:** *the aromatics are an INFUSION and are never eaten* (lemongrass, galangal, lime leaves
go in big and get pushed aside) **+ lime and fish sauce go in OFF THE HEAT** (volatile acids boil
away) **+ the prawn-head stock**.
**Pad Krapow:** *the named herb is a different SPECIES from what SA shops sell* (holy basil
*Ocimum tenuiflorum* vs sweet basil *O. basilicum*) **+ the mince is LEFT ALONE for 90 seconds**
(stirring floods the pan and stews it) **+ basil folded in off the heat, ten seconds**.
**Khanom Krok:** *TWO batters poured a minute apart — salty rice-flour base, molten sweet coconut
top; mixed together it is just a pancake* **+ the batter must CLIMB the well to form the cup, which
is the pan-is-hot-enough test** **+ never flipped, and the centre stays molten on purpose**
**+ cooked rice blended into the batter keeps the shell from going brittle**.
**Thod Man Pla:** *it is a GEL, not a fishcake — salt (via fish sauce) dissolves myosin, and the
paste is THROWN into the bowl 30–40× until it stops sticking and springs back* **+ cold fish, cold
bowl, blitz under 60s** (friction heat undoes the network) **+ shape 1cm thin, never 2cm**
**+ beans and lime leaves folded in BY HAND, never in the processor**.
**Larb:** *`khao khua` — raw glutinous rice dry-toasted 8–10 min to popcorn smell and ground COARSE;
it is the dish, not a garnish* **+ the meat is SIMMERED IN STOCK, never browned** (written as the
explicit opposite of Pad Krapow's hard sear, and crossLinked to it) **+ the salad is dry and crumbly
because it is scooped with cabbage and sticky rice — the cutlery dictates the texture**.
⚠️ ONE LINE OF RICE, NOT TWO: 10g is taken from the 150g before soaking, for the powder.
**Gai Yang:** *the fire must be ALMOST OUT — low indirect coals for 45–60 min, the opposite of an SA
braai instinct* **+ the bird is BUTTERFLIED so it has one thickness** **+ the marinade runs on
CORIANDER ROOT, the part that gets binned** **+ skin is seared LAST, never first** (the coconut milk
and palm sugar burn).

### ⛔ MOATS NOW ALSO SPENT — REGISTERS ARE LANE-WIDE
**economics** *(Tom Yum — the 1997 crash is named after the soup, วิกฤตต้มยำกุ้ง)* ·
**religion + botany** *(Pad Krapow — Thai kaphrao is the same species as Indian tulsi, worshipped
in its own shrine in Hindu temples)* · **archaeology** *(Gai Yang — the oldest unambiguous domestic
chicken bones on earth are from Ban Non Wat, Thailand, ~1650–1250 BC; dry rice farming drew the red
junglefowl in, and the first chickens were buried in graves rather than eaten. PNAS 2022, >600 sites
in 89 countries)*.
· **entomology** *(Larb — `khai mot daeng`, weaver-ant eggs, foraged Feb–May from mango and
jackfruit trees with a bamboo pole into a rice-floured basket; naturally acidic and used INSTEAD of
lime in some Isan dishes; ~500 baht/kg; and northern Thais admit the flavour is faint — it is bought
for the POP)*.
· **food technology** *(Thod Man Pla — springy fish paste is ancient, kamaboko recorded 1115; the
crab stick was invented in 1972 at Sugiyo in Nanao by Yoshihito Sugino, who was trying to make
artificial jellyfish from kelp alginate and noticed sliced coloured fish cake pulled apart like crab
leg. Britain requires them sold as "seafood sticks")*.
· **convergent tool design** *(Khanom Krok — the dimpled well pan exists as poffertjes, æbleskiver,
takoyaki, paniyaram and khanom krok; ✅ THREE OF THOSE ARE ALREADY CARDS IN TINZA, and in SA the
buyable one is a **poffertjes pan**)*.
✅ **STILL UNSPENT AFTER TEN RECORDS:** mathematics & calendrics · textiles · cartography.

⚖️ **THE LIME NAME — RULED AND DONE, 31 Jul 2026.** Tina first ruled keep-kaffir, then on seeing that
findability lives in the ALIAS layer and not in the printed line, went with **Thai lime leaves**.
✅ **DONE:** alias `thai lime leaves` + `thai lime leaf` → `kaffir lime leaves` added to BOTH maps
*(without it the line fell to `lime` R140, a 10× under-price)*; all ingredient lines and prose across
`wk_thailand.js` and `wk_indonesia.js` now read **Thai lime leaves**, with a one-time gloss on each
card that mentions it — *"the knobbly-skinned lime, and most shops here still label the leaves kaffir
lime leaves"* — so the shopper still knows what to ask for. **All three names remain live aliases;
search cannot break.** ⛔ Do not reintroduce either older name into a printed line.

⚠️ **A PROCESS SCAR FROM B6, WORTH NOT REPEATING.** `git checkout sections/wk_thailand.js` was used
to reset before a re-merge. **That reverts to HEAD, and HEAD still holds the EMPTY Thailand file**
because nothing in this lane has been committed yet — so it wiped 8 banked records from the working
copy. Nothing was lost (the throwaway clone and the staged download both held copies), but the
lesson is mechanical: ⛔ **NEVER `git checkout` a lane file that is ahead of HEAD.** To re-merge
after an edit, rebuild the batch from the CURRENT file and restore from the last staged copy, not
from git.

### ⚠️ NEW LANDMINES CONFIRMED THIS SESSION
- **`holy basil` and `thai basil` BOTH fall to `basil` R650** — a 🟠 REVIEW, accepted knowingly.
- **`coriander root` falls to `coriander` R650**, the leaf price — 🟠 REVIEW, accepted; the root is
  dearer per gram in reality but is bought as part of the same bunch.
- ✅ **`whole chicken` R70 is its own key and is CHEAPER than `chicken` R90.** Use it for a whole bird.
- **`mushrooms` R90 — ALWAYS THE PLURAL.** `mushroom` R165 is a separate live key.
- ⚖️ **`makrut lime leaves` prices correctly today** (alias → `kaffir lime leaves` R1500). Tina
  ruled 31 Jul: **display name UNCHANGED, note optional** — see `reference/LIME_NAME_NOTE_DRAFT.md`.
  All three names stay as search aliases either way.
- 🩸 **A3 CHECK THAT ALMOST SLIPPED:** on B3 the *vegan* fork came out R1 under the *budget* fork.
  Fixed by raising the mushrooms 180g→200g (honest — they lose half their volume), not by
  accepting the warn. **Always read costcheck's ordering, not just its pass count.**

---

## 4b · ⚖️ THE ORIGINAL FIRST-BANK BRIEF (kept for the record)
A6 needs 3 live crossLinks, they cannot cross countries, merge fails a self-link — **an empty file has
nothing legal to point at.** After this bank: **one record, one bank.**

| # | dish | course | the lead — ALL CHECKED AGAINST THE LIVE FILE |
|---|---|---|---|
| 1 | **Pad Thai** | main | **the noodles are SOAKED, never boiled** — they finish in the sauce; and the tamarind/fish-sauce/jaggery balance is TASTED, not measured. ⛔ Nasi Goreng owns *one-portion-at-a-time*. |
| 2 | **Som Tam** | **side** | **the mortar BRUISES, it does not grind** — the opposite job to Sambal Terasi, which owns pounding-to-paste. **Defer to it explicitly** and lead on why bruising keeps the shred crisp. |
| 3 | **Massaman** | main | ⛔ Rendang owns `pecah minyak`; Sayur Lodeh owns the coconut emulsion. **NEW LEAD: turning a RED paste into a MASSAMAN paste with dry-roasted whole spices** — the honest SA route, since massaman paste is ABSENT. |
| 4 | **Mango Sticky Rice** | dessert | ✅ **UNBLOCKED.** ⛔ Nasi Uduk owns *absorb-then-steam*. **Sticky rice is SOAK-then-STEAM and NEVER absorbs — write it as the deliberate opposite**, the way Dendeng pairs against Sate Klathak. |

⚖️ **LEAD AND MOAT OWNERSHIP IS LANE-WIDE**, even though crossLinks are country-bound.
✅ **UNSPENT MOAT REGISTERS:** archaeology · **mathematics & calendrics** *(the Thai solar calendar's
543-year offset)* · **textiles** *(Thai silk + sericulture)* · cartography · entomology.
⛔ **SPENT NUDGES:** lemongrass · basil cuttings · turmeric/ginger rhizome · curry leaf tree · lime tree ·
pandan · chilli · coriander · shallots. **Remaining:** mint · Thai/holy basil as a distinct variety ·
galangal *(flag — adjacent to the spent ginger nudge)* · **kaffir lime as a TREE** *(now excellent —
the leaf price is sourced)*.

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
10. 🆕 `eggplant` R43 and `brinjal` R43 are **both live keys** for one product. Harmless (same price)
    and now unused by any record, but it is the `mushroom`/`mushrooms` shape. **Needs a ruling before
    either is deleted.**
