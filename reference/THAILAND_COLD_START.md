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
| **Thailand** | ▶️ **OPEN — 25 records banked · B8 CLOSED 1 Aug 2026 · ⏸️ PUSHED, AWAITING NEXT SESSION** · ⚖️ COUNT WITH NODE, NEVER FROM THIS LINE |
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
| `noodles` R80 *(A7 DEFER)* | — | ✅ **PROBE SETTLED 1 Aug**: `glass noodles` · `mung bean noodles` · `cellophane noodles` · `bean thread noodles` **ALL alias to `noodles` R80.** No silent absent. ⚠️ R80 likely UNDER-prices mung bean vermicelli — **unsourced, A7 defer, needs Tina's shelf eyes** |
| `rice noodles` R45 ✅ | 🔴 `rice vermicelli` | → **`rice` R27** — silent wrong product |
| `rice noodles` R45 ✅ | 🔴 `vermicelli` *(bare)* | → **`pasta` R36** — silent wrong product |
| `noodles` R80 ✅ *(CORRECT for khao soi)* | 🆕 `egg noodles` | → **`egg` R3.70 PER COUNT** — direction-B collision, silent |
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

## 4c · ▶️ B8 — IN PROGRESS, OPENED 1 AUG 2026 · ONE RECORD, ONE BANK

| # | dish | id | course | costPP (engine-derived) |
|---|---|---|---|---|
| 11 | **Khao Soi** | `thailand-khao-soi` | main | R68 · R81 · R98 |
| 12 | **Kluay Tod** | `thailand-kluay-tod` | dessert | R19 · R23 · R25 |
| 13 | **Kaeng Keow Wan** | `thailand-kaeng-keow-wan` | main | R69 · R78 · R85 |
| 14 | **Yam Woon Sen** | `thailand-yam-woon-sen` | salad | R45 · R62 · R64 |
| 15 | **Kai Jiao** | `thailand-kai-jiao` | main | R34 · R39 · R49 |
| 16 | **Khao Pad** | `thailand-khao-pad` | main | R39 · R49 · R58 |
| 17 | **Nam Prik Ong** | `thailand-nam-prik-ong` | **side** | R41 · R44 · R52 |
| 18 | **Khao Niao** | `thailand-khao-niao` | **side · STAPLE** | R8 · R9 · R13 |
| 19 | **Sai Krok Isan** | `thailand-sai-krok-isan` | **starter** | R31 · R34 · R37 |
| 20 | **Cha Yen** | `thailand-cha-yen` | **drink** | R3 · R8 · R11 |
| 21 | **Khao Suay** | `thailand-khao-suay` | **staple** | R8 · R9 · R15 |
| 22 | **Pla Neung Manao** | `thailand-pla-neung-manao` | main | R57 · R69 · R85 |
| 23 | **Gaeng Som** | `thailand-gaeng-som` | main | R53 · R62 · R82 |
| 24 | **Peek Gai Yat Sai** | `thailand-peek-gai-yat-sai` | **starter** | R48 · R56 · R67 |
| 25 | **Pla Goong** | `thailand-pla-goong` | **salad** | R50 · R92 · R96 |

**Courses held, counted with node at close:**
`{main:10 · side:3 · dessert:3 · salad:3 · starter:3 · soup:1 · drink:1 · staple:1}` = **25**
⚖️ **TINA'S CLOSING PLAN FOR B8 (1 Aug), 22→25:** ✅ 22 Pla Neung Manao *(main)* · ✅ 23 Gaeng Som *(main)* · ▶️ **24 Peek Gai Yat Sai** *(starter — boning a wing whole)* ·
▶️ **25 Pla Goong** *(salad — ⚖️ THE LEAD IS RESERVED: lemongrass sliced hair-thin and eaten RAW,
the exact inversion of Tom Yum's "aromatics are an infusion and are never eaten". Do not spend that
contrast anywhere else.)*
🆕 ⚖️ **`thailand-cha-yen` IS THE FIRST DRINK IN THE ENTIRE ASIA LANE.** Measured 1 Aug: China,
Japan, Indonesia and Thailand held **ZERO** `course:"drink"` records between them, against 26
elsewhere in the corpus. **Vietnam should get one on purpose** (`cà phê sữa đá` is the obvious one
and uses the same tinned-milk logic).
🩸 ⚖️ **A RE-COURSE QUESTION FOR TINA, NOT A UNILATERAL FIX:** `course:"staple"` is a **live course
with 14 records** (`japan-staple-dashi`, `japan-gohan`, `china-staple-tofu`, `indonesia-sambal-terasi`
…). **I filed `thailand-khao-niao` (18) as `side`** on the A5 wording *"staples are real cards on the
SIDES shelf"* — but the corpus convention is clearly `course:"staple"`, and **record 21
`thailand-khao-suay` IS filed as `staple`**, which is the correct call. ⛔ **RECORD 18 NOT CHANGED** —
re-courses are Tina's call (three already parked). 🩸 **The lane is now internally inconsistent: two
staples, two different courses.** Add Khao Niao to the parked re-course batch if she agrees.
⚖️ **TINA RULED 1 AUG: "a lot of mains is not a problem" — run a few SIDES and STARTERS, but the
main count is NOT a defect.** Balance is a steer, never a gate.
✅ **STAPLE DONE** — `thailand-khao-niao`, record 18. ⛔ **STILL OWED: a plain JASMINE RICE staple
card and a DRINK.** Jasmine rice is referenced on nine cards and has none of its own.

### ⛔ LEADS NOW ALSO SPENT
**Khao Soi:** *one noodle in two states in the same bowl — boiled soft under, raw-fried crisp on top*
**+ the crisp nest is a CLOCK** (soft in ~5 min; it is why northern khao soi shops shut by early
afternoon, and why you fry last and call people first) **+ ⚖️ THE DELIBERATE ANTI-MASSAMAN: this is
the one card that REFUSES to grind its own spice.** Tinned Indian-style curry powder + turmeric into
a red paste, because the tin IS the historical marker of the caravan road and grinding fresh erases
it. Written as an explicit deferral to Massaman rather than a collision. **+ the bowl is
UNDER-FINISHED on purpose** — lime, raw shallot and *phak dong* go on a side plate; the cook makes
it rich, the table makes it sharp.

### ⛔ MOAT NOW ALSO SPENT
**cartography** *(Khao Soi — the name draws a nineteenth-century trade route. Chin Haw / Yunnanese
Hui Muslim caravan traders, pushed south after the Panthay Rebellion 1856–1873, through Burma and
Laos into Chiang Mai. The proof is on the menu, not in the archive: khao soi is chicken or beef and
**never pork**, in a country where pork is the default meat. And the word outran the recipe — Chiang
Mai = wheat egg noodles in coconut curry; Luang Prabang 300km away = flat rice noodles, clear pork
broth, tomato-and-fermented-soybean mince, near enough a bolognese; over the Burmese border the
cousin is `ohn no khauk swè`, coconut noodles, which is very likely where the coconut joined.
**Same word, same road, three different bowls.**)*
**Kluay Tod:** *⚖️ CRISPNESS IS CHEMISTRY, NOT TECHNIQUE — the batter is made ALKALINE.* Thai
`nam pun sai` (limestone water, slaked lime / calcium hydroxide, from the pink `pun daeng` paste
that was a betel-chewing household staple); ✅ **SA route = 1g bicarbonate of soda, and the
difference is NAMED not hidden** — lime is a firming agent (flat dense long-lasting shell), bicarb is
a raising agent (lacier, airier, shorter-lived). ⛔ past ~2g it goes soapy and grey.
**+ the banana must be UNDERRIPE and starchy** (`kluay nam wa`; ripe = sugar burns before the batter
crisps, and no structure left) **+ the coconut is IN the batter, not on it** — the shreds stop a
continuous waterproof skin forming, which is where the lacy shatter comes from **+ ⛔ NEVER BAG OR
STACK THEM** — written as an explicit extension of Thod Man Pla's rack-not-paper rule, not a repeat.

### ⛔ MOAT NOW ALSO SPENT
**textiles** *(Kluay Tod — a banana plant has no trunk. The "trunk" is a `pseudostem`, a rolled
bundle of nested leaf bases, which is why banana fibre is classed a LEAF fibre and why the plant
peels apart in gradeable layers. Okinawan **bashōfu** woven from `Musa basjoo` since ~C14th, layers
graded coarse-to-fine (cushions → obi → kimono), ~60 plants and 3 years per bolt; Kijōka bashōfu made
an Important Intangible Cultural Property of Japan in 1974. Philippine **abacá** = `Musa textilis`, a
banana relative grown for fibre not fruit, sold worldwide as **Manila hemp** — ships' rope, because
it holds strength wet and shrugs off seawater — and still in specialty papers. **The fruit is the
by-product.**)*
**Kaeng Keow Wan:** *⚖️ THE COLOUR IS A WARNING LABEL PRINTED BACKWARDS* — green = a large
quantity of FRESH GREEN chillies, so it is the HOTTEST of the three, not the mildest; and `wan`
(sweet) is relative to the older saltier curries, not sweet in any SA sense **+ ⚖️ IT IS MEANT TO
STAY THIN** — a sauce for rice, not a stew; written as the explicit opposite of Massaman's two-hour
thickening and crossLinked to it; thin it with WATER, never more coconut milk **+ ⚖️ BITTERNESS IS
DESIGNED, NOT A FAULT** — `makhuea proh` and `makhuea puang` are bitter, and ⛔ the European reflex
to salt-and-press brinjal removes the exact thing the curry needs **+ the paste gets 90 SECONDS, not
Massaman's 2–3 min** (fresh green herbs brown and go muddy far faster than dried-chilli red paste).

### ⛔ MOAT NOW ALSO SPENT
**evolutionary pharmacology / chemical ecology** *(Kaeng Keow Wan — the popular story is only half
right. Birds' TRPV1 is insensitive to capsaicin and mammals' molars destroy seeds, so directed
deterrence is real (Tewksbury & Nabhan, **Nature** 2001) — but Tewksbury et al., **PNAS** 2008 found
pungency across wild Bolivian populations tracks **fungal pressure**: insects puncture the fruit,
`Fusarium` follows and kills the seed before any bird arrives, and capsaicinoids slow it sharply.
Where insects and fungus are rare, wild chillies are often NOT hot — and those mild plants spend the
saving on ~12% thicker seed coats, a measurable trade-off. **The burn is an antifungal and we eat it
by accident.**)*
**Yam Woon Sen:** *⚖️ THE NOODLE IS A BEAN, NOT A GRAIN — and its job is to be a SPONGE.* Mung bean
starch, amylose-rich, so it sets to a springy gel that will not go mushy in a dressing **+ ⛔ THE
DELIBERATE ANTI-PAD-THAI: this noodle WANTS hot water.** Higher gelatinisation temp and far more
amylose, so hot water hydrates without dissolving — same drawer, opposite rule, because the starch is
a different material **+ ⚖️ DRESS IT WARM, which is the deliberate anti-LARB** — larb cools the meat
completely BEFORE dressing (raw herbs + fresh lime that heat kills); this dresses warm because the
flavour has to get INSIDE a bland noodle. Both crossLinked; both reasons written out **+ 🆕 CUT THE
SKEIN WITH SCISSORS after soaking** — the step nobody writes down; whole, the dressing cannot
distribute **+ nothing is fried: pork and prawns are POACHED, and the poaching water goes in the
dressing.**

### ⛔ MOAT NOW ALSO SPENT
**plant physiology / germination biochemistry** *(Yam Woon Sen — the glass noodle and Pad Thai's bean
sprouts are THE SAME SEED at opposite moments. The noodle is starch pressed from the dormant bean;
the sprout is the bean allowed to wake. ⚖️ A dry mung bean has **essentially zero** vitamin C; a few
days of germination produces ~20mg/100g fresh — roughly a third of a day's need in a modest bowl. The
seed is not releasing a stored vitamin, it is **manufacturing one that was never there**. ✅ And light
is the lever: constant-light germination built >20× the ascorbic acid of dark-grown by day three —
while commercial sprouts are grown in the DARK on purpose, to stay pale and tender. **We breed the
vitamin out for the look of the thing.** Phytic acid also falls ~1.88% → 0.33% over 96h.)*
**Kai Jiao:** *⚖️ IT IS DEEP-FRIED, NOT PAN-FRIED* — ~3cm of oil taken genuinely to its smoke point
(~200°C); a lightly-oiled pan does not make a lesser kai jiao, it makes scrambled egg in a circle
**+ ⚖️ POUR FROM 30cm** — the falling stream entrains air AND hits hard enough to fragment into
ragged edges; then the egg's ~75% water flash-boils and inflates it in about four seconds **+ three
seasonings, three jobs, in the RAW egg**: fish sauce (savour, not just salt) · lime juice (acid → a
lighter set) · rice flour (keeps the lace crisp) **+ ⚖️ RICE ON THE PLATE BEFORE THE OIL GOES ON** —
90-second cook, it needs somewhere to land **+ explicit sibling framing to Pad Krapow's `kai dao`:
that one is cracked whole and shallow-fried around an intact yolk; this one is BEATEN then DROPPED,
so the whole egg becomes the crisp part.** ⚠️ Card carries a real hot-oil safety paragraph — this is
the hottest oil on the Thai shelf.

### ⛔ MOAT NOW ALSO SPENT
**fats chemistry / oil degradation** *(Kai Jiao — **the smoke point is not a property of the oil, it
is a property of how dirty the oil is.** It is governed by **free fatty acids**, which break off the
triglycerides through heat, water and time, and which smoke far lower than intact fat. The number is
the moat: an oil at 0.04% FFA smoked at ~**218°C**; the same oil at just **1%** FFA smoked at
~**160°C** — a fraction of a percent of impurity, nearly sixty degrees gone. ✅ Load-bearing here
because kai jiao is one of the very few recipes that asks you to take oil **TO** its smoke point
rather than stay below it. **The oil is an ingredient with a shelf life, not a piece of equipment.**)*
**Khao Pad:** ⚖️ **AUTHORED AGAINST NASI GORENG, DELIBERATELY.** ⛔ Nasi Goreng owns: decide-the-
day-before · break clumps with fingers · the bumbu · ONE PORTION AT A TIME · the hot-pan water test ·
fry-paste-till-it-stops-looking-wet · sauce down the SIDE of the pan · separate frilly fried egg.
**None of those are reused.** What Khao Pad claims instead: *⚖️ IT IS MADE WITH THE WRONG RICE ON
PURPOSE* — jasmine is soft, low-amylose and sticky, everything a fried rice does not want, used
anyway because the perfume is the point; **every technique on the card is compensation for a chosen
handicap** **+ ⚖️ SO IT STARTS AT THE RICE POT, NOT THE FRIDGE** — cook it with ~⅕ less water and
spread it thin to dry; the problem is WATER, not TIME, which is the honest second route past Nasi
Goreng's day-before rule (explicitly deferred to) **+ ⚖️ THE EGG WRAPS THE GRAINS** — rice tipped
onto still-wet egg so each grain takes a jacket, which is also what stops a soft jasmine grain
breaking up; written against BOTH Nasi Goreng's egg-on-top and Pad Thai's egg-in-its-own-corner
**+ ⚖️ IT SHOULD BE PALE — BROWN MEANS OVER-SAUCED.** No dark soy, no kecap manis. Fish sauce, a
pinch of sugar, white pepper, stop. **A visual pass/fail the cook can apply.**

### ⛔ MOAT NOW ALSO SPENT
**agricultural intellectual property / plant variety rights** *(Khao Pad — Thai jasmine is a named
variety, **KDML105 / Khao Dawk Mali 105**, sold as Hom Mali. RiceTec of Texas held a US patent on
basmati lines and a trademark on **Jasmati**, marketed as American jasmine; in 2001 the Thai
government hired US lawyers over a jasmine-derived line bred at the University of Florida by Chris
Deren, and ~500 farmers protested at the US Embassy in Bangkok. ⚖️ **WRITTEN EVENHANDEDLY, WHICH IS
WHY IT WORKS:** Deren stated he had no intention of patenting it — the Thai fear was about what came
after — and Kasetsart University's DNA fingerprinting found Jasmati **essentially genetically
unrelated** to jasmine rice, descended from a US variety bred from an Italian strain. **So the
borrowing was of the NAME, not the plant** — a word built by farmers over decades, used to sell
something else.)* ⚠️ Say "bred", never "genetically engineered" — several sources get this wrong.
**Nam Prik Ong:** *⚖️ THE THING IN THE BOWL IS NOT THE DISH — THE VEGETABLE PLATE IS.* A nam prik is
deliberately the smallest thing on the table by volume and is seasoned to be far too strong to eat
by the spoonful; **it is a delivery system for eating a large plate of raw vegetables** **+ ⛔ THE
ONE MISTAKE THAT RUINS IT: it looks exactly like a bolognese, and serving it over pasta destroys it.**
Nothing about the recipe changes — **only the serving RATIO decides whether it works.** Think chutney
or sambal, never ragù **+ ⚖️ DRY-ROAST THE AROMATICS WHOLE AND UNPEELED** — shallots and garlic
blackened in their skins for 8–10 min; the skin is a jacket that steams the flesh while the outside
chars. **Written as an explicit contrast to Massaman's dry pan, which toasts SEEDS to release oils —
this COOKS BULBS to kill the raw allium bite** **+ ⚖️ TASTE IT ON A VEGETABLE, NEVER OFF A SPOON** —
if it tastes balanced alone it will taste of nothing on a cabbage leaf **+ the tomato stops tasting
of tomato** after 20 min and becomes body and background sourness. ⚖️ Deferred to Som Tam for the
bruise-vs-grind mortar question (this one grinds).

### ⛔ MOAT NOW ALSO SPENT
**crop history / the Columbian exchange** *(Nam Prik Ong — **there were nam priks before there were
chillies, and Thai still carries the receipt.** Chillies are American, carried east by the Portuguese
and reaching Siam around the C16th; before that the heat came from **black pepper and long pepper**,
Piper species native to the region. ⚖️ The survival in everyday speech: chilli is `prik`, and black
pepper is **`prik thai` — literally "Thai chilli". The newcomer took the plain name and the native
plant that had held it for centuries got demoted to the qualified version.** ✅ And it happened in
English in reverse: Columbus was hunting peppercorns, called the burning American fruit a pepper, and
we still say "chilli pepper" for two plants that are not related at all.)*
⚠️ **ADJACENCY NOTED HONESTLY:** Massaman's moat is *poetry & etymology* (a Thai coinage for a
foreign thing). This one is a **crop-movement** moat that happens to land in a word. Close, not the
same — but ⛔ **the etymology well is now genuinely dry. Do not go back to it a third time.**
**Khao Niao:** ⚖️ **THE CARD IS ABOUT THE OTHER HALF — what happens AFTER the steamer comes off.**
Explicitly defers the whole soak-and-steam argument to Mango Sticky Rice rather than restating it.
*⚖️ THE `KRATIP` IS A HUMIDITY MACHINE, NOT SERVEWARE* — steamed sticky rice is ~⅔ water and keeps
releasing it; ⛔ a sealed container condenses it back and turns the top gluey, ⛔ an open bowl loses
it and the surface hardens in ~15 min. The double-walled loose weave does neither. ✅ **SA route:
cloth-lined bowl, cloth folded LOOSELY over — never cling film, never a sealed plastic box** **+
⚖️ TURN IT OUT AND FOLD IT six or eight times the moment it is cooked**, before basketing, or you get
a wet bottom and a dry crust **+ ROLL THE BALL BEFORE YOU DIP** — unrolled rice is a loose clump and
cannot scoop; deferred to Larb for why the dishes it lifts are dry **+ the basket is communal, one
hand, ⛔ no serving spoon** **+ ⚖️ THE SALT IS RULED BOTH WAYS ON THE CARD** — traditionally none at
all, because it is the neutral thing everything else is seasoned against; 1g stated as a named
departure rather than smuggled in.

### ⛔ MOAT NOW SPENT — **THE LAST REGISTER IS GONE**
**mathematics & calendrics** *(Khao Niao — **the rice keeps its own calendar and it can count.** Isan
glutinous rice is overwhelmingly **RD6**, created in the 1970s by gamma-irradiating **KDML105** — so
Thailand's sticky rice and its fragrant rice are the same plant one step apart, which closes the loop
with Khao Pad's moat at record 16. ⚖️ Both inherited **photoperiod sensitivity**: they do not flower
a fixed number of days after planting, they wait until day length drops below a threshold —
**~11 h 52 min for KDML105** — and rice resolves differences of about half an hour. ✅ So sowing
moves with the rains (June–July), but flowering is the **second half of October** and harvest is
**November**, every year, regardless. **The rigidity IS the adaptation:** rainfed rice under an
unreliable monsoon lands its harvest at the end of the rains whether the season started early or
late. **A crop whose calendar is more reliable than the weather.**)*
🩸 **ALL LISTED MOAT REGISTERS ARE NOW SPENT.** ⚖️ Records 19+ must OPEN A NEW REGISTER, and the
register list in §4 is a record of what has gone, not a menu. Fresh ones opened this session and
also now spent: convergent tool design · cartography · textiles · germination biochemistry ·
evolutionary pharmacology · fats chemistry · agricultural IP · crop history.

### 🩸 FOURTH VOICE SCAR — AND THE WORST ONE, BECAUSE IT WAS SELF-PLAGIARISM
🟠 **VOICE ECHO ×30 on a single record.** Every one of them was ONE paragraph: `chefNotes` had been
written straight from the same mental template as Mango Sticky Rice's — *"buy the bag that says
glutinous or sweet rice… short, fat and chalky opaque white… not jasmine, not arborio, not sushi
rice"*, near enough verbatim. ⚖️ **THE LESSON: a card that deliberately DEFERS to a neighbour is the
single highest-risk card for echo, because you are holding the neighbour's argument in mind while
you write.** ✅ Fixed by rewriting `chefNotes` onto a completely different subject — **the cloth**
(loose weave, ⛔ never a doubled dishcloth, ⛔ never washed in anything scented, because bland rice
carries fabric softener to the table) and the cheap wide bamboo steamer.
🔴 **GLOSS: `pap` used in `pairsWith`, unglossed** — second gloss miss in two records, **both in
`pairsWith`.** ⚠️ That field is now a known weak point: check it explicitly.

### ⚖️ §26 FIRED AND WAS RIGHT
merge REFUSED the first attempt: record diet typed `["vegan"]` while the versions union to
`["vegan","vegetarian"]` — Khao Jee is brushed with egg. **The record diet is DERIVED, never typed.**
**Sai Krok Isan:** ⚠️ **THE ONLY CARD ON THIS SHELF WITH A MANDATORY SAFETY BLOCK, AND IT OPENS
THE RECORD.** Ferments 2–3 days at ambient and is **ALWAYS COOKED — never raw.** ⛔ Explicitly
distinguished from `naem`, the Thai raw fermented pork, so the two are never conflated. Spoilage
tells written out (slimy · grey-green · putrid-not-sour). ⛔ Grill to **75°C measured**, not by eye.
*⚖️ THE RICE IS BACTERIAL FEEDSTOCK, NOT FILLER* — meat has almost no fermentable sugar (glycogen is
spent within hours of slaughter), so a pork mince left alone does not sour, it spoils; glutinous rice
specifically because near-pure amylopectin gelatinises and yields available sugar fastest **+ ⚖️ YOU
ARE NOT ADDING BACTERIA, YOU ARE RIGGING A COMPETITION** — salt as a filter · tight casing as an
oxygen barrier · warmth as accelerator · rice as the only food. `Pediococcus` + `Lactobacillus` are
already present; **once away they build their own barrier at pH ~4.5–5.0** **+ ⚖️ WEIGH THE SALT AS
A PERCENTAGE, ~2% OF TOTAL FILLING MASS — scales, not a spoon.** ⚠️ Too little = field not narrowed;
too much = ferment stalls warm and unacidified, the worst of both **+ ferment 25–30°C, ⛔ NOT LONGER
THAN 3–4 DAYS** (past that: aggressive acid, chalky texture) **+ fat at ~20% of meat weight is
structural, not richness.** ⚖️ Slow-coal grilling deferred to Gai Yang.

### ⛔ NEW REGISTER OPENED AND SPENT — **food microbiology / the substrate problem**
*(Sai Krok Isan — **meat cannot ferment itself.** LAB eat sugar and excrete acid, but muscle stores
carbohydrate as glycogen and spends nearly all of it in the hours after slaughter. So **every**
fermented-sausage tradition on earth must import sugar from outside: **northern Europe reached for
measured dextrose, Isan reached for a fistful of cooked sticky rice** — and glutinous rice is an
unusually good feedstock because amylopectin breaks down to available sugar faster than a firm grain.
**A cook with no microscope selected, out of every grain available, the one that fed the bacteria
best.** The rest of the recipe is the same logic: salt is a filter, the casing is an oxygen barrier,
warmth is an accelerator. **Nobody in Isan was adding bacteria — they were building a room only one
guest could survive in.**)*
⚠️ **ADJACENCY NOTED:** this is same-problem-two-answers, which is close in shape to Khanom Krok's
*convergent tool design*. Different register (substrate biochemistry vs tool form) — but ⛔ **the
"two cultures solved this identically" shape is now used twice. Do not reach for it a third time.**

### 🩸 FIFTH VOICE SCAR — `howThisFeels` IS THE NEXT WEAK FIELD
🟠 **OPENING FORMULA ×3:** *"Lifting the lid on…"* — already used by `china-staple-master-stock` AND
`china-zhang-cha-ya`. ⚖️ **The pattern across this whole session is now clear and worth stating: the
echo never lands in `method`, where the writing is deliberate. It lands in the SHORT, RELAXED fields
— `chefNotes` (record 18), `pairsWith` (17 and 18), `howThisFeels` (19).** ✅ Check those three
explicitly before merging, not after.

### 🔴 NEW LANDMINE, RECORD 19
**`sausage casings` → `sausage` R130** — resolves to the finished sausage, not the casing. ⛔ Kept
OUT of the ingredient line and named in-method on the `chai poh` precedent; **A7 defer, unsourced.**
✅ **`pork fat` R60 is exact and live** — use it, do not fudge fat ratios with belly.

✅ **DRINK DONE** (20) · ✅ **JASMINE RICE STAPLE DONE** (21). ⚖️ **Nothing structural is owed now.**
**Cha Yen:** *⚖️ THE ORANGE IS DYE, NOT TEA* — mixed into the dry leaf at the factory; you dissolve
it, you do not brew it. ✅ **Two honest routes named up front so nobody is disappointed at the end:**
the orange one needs a Thai tea mix; the brown one is strong black tea + star anise + vanilla and
tastes very close **+ ⚖️ BREW IT TO A STRENGTH YOU WOULD NEVER DRINK** — 8g to 200g water, 5 min,
opaque and frankly unpleasant, because ice AND 30g of condensed milk are coming. **This one step is
where every home version fails** **+ ⚖️ TWO MILKS, TWO JOBS, NOT INTERCHANGEABLE** — condensed is a
syrup and ⛔ will NOT disperse in cold liquid, so it goes into the HOT tea; evaporated floats cold on
top as the cap. The layering is why top and bottom taste different, and it is meant to **+ pour
between two jugs to aerate and cool BEFORE it meets the ice** — ⚖️ explicitly deferred against Kai
Jiao, which pours from height to INFLATE; this pours to cool.

### ⛔ NEW REGISTER OPENED AND SPENT — **food additive regulation**
*(Cha Yen — **the most misreported regulatory history in food, and the true version is better.**
The colourant is **Sunset Yellow FCF** = E110 = FD&C Yellow No. 6. The 2007 **Southampton study**
(University of Southampton, FSA-funded) tested six colours + sodium benzoate and found increased
hyperactivity vs placebo. ⛔ **YOU WILL READ EVERYWHERE THAT IT WAS BANNED IN THE UK AND EU. IT WAS
NOT AND IS NOT.** What happened: FSA requested a **voluntary** withdrawal in 2008, and from July 2010
EU law required the label *"may have an adverse effect on activity and attention in children"* on the
Southampton Six. **A warning, not a prohibition** — and many UK brands dropped the colours rather
than print it, which is probably why everyone remembers a ban. EFSA re-reviewed in 2014 and set an
ADI of 4 mg/kg bodyweight; Thailand permits up to 100 mg/kg in food. **Legal, labelled, limited and
argued about — duller than "banned", and correct.**)*
⚠️ **HANDLED EVENHANDEDLY ON PURPOSE.** ⛔ Two claims found in sources were **REJECTED as unsupported
and must not be reintroduced**: that the dye is *"proven to cause cancer and kidney disease"*, and
that *"up to 30% of ADHD cases could be prevented"* by removing synthetic dyes. Neither is
established. ⚖️ Law 11 — a health claim is the highest-risk thing a model can put on a card.

### 🩸 SIXTH SCAR — `LECTURE` FIRED, AND IT IS A MOVING BAR
🟡 trivia at **271 words against a 262-word bar**. ⚠️ **The bar is corpus-relative and it MOVES as
records are added** — it was 259 at record 11 and 263 at record 20. ✅ Trimmed by cutting a
non-load-bearing clause rather than by gutting the argument.

### ✅ PRICES CONFIRMED LIVE, RECORD 20
`tea` R300 *(and `black tea` aliases to it)* · `condensed milk` R119 · `evaporated milk` R100 ·
`cream` R148 · `milk` R20 · `vanilla essence` R330 — all exact.
🔵 **`ice` IS ABSENT.** Keyed the ice as `water` R0.02, which is honest — ice is frozen water — and is
the precedent for any future iced drink.

**Khao Suay:** *⚖️ EVERY RICE RATIO IS AN APPROXIMATION OF THE WRONG THING.* What governs the
outcome is the **DEPTH of water above the rice**, not the proportion — some is absorbed, some leaves
as steam, and how much leaves depends on pot width and lid seal, which a ratio knows nothing about.
**A wide pan and a narrow one at the identical ratio give different rice.** ✅ **So measure to ~1.5cm
above the levelled rice — the first knuckle.** ⚖️ It SELF-CORRECTS: double the batch and a ratio must
change, but the depth mark does the arithmetic for you. **This is the whole card and the budget
version exists to prove it** (120g rice takes 255g water, NOT the 240g a straight ratio gives)
**+ ⚖️ NEW CROP vs AGED RICE CHANGES THE WATER** — `khao mai` holds more moisture and needs less;
warehouse-aged drinks more. **This is why "the same recipe stopped working" — the rice changed, not
you** **+ ⛔ NO SALT, DELIBERATELY** — it is the neutral thing everything else is over-seasoned
against; salt it and you unbalance the whole table **+ ⛔ never lift the lid, never stir** (peeking
removes water you measured; stirring frees starch) **+ the 10-min rest EQUALISES moisture upward from
a wet bottom to a dry top** — ⚖️ explicitly distinguished from Mango Sticky Rice's rest, where hot
grains are DRINKING added coconut cream; here nothing is added and it only redistributes.

### ⛔ NEW REGISTER OPENED AND SPENT — **control engineering / sensing by proxy**
*(Khao Suay — **the rice cooker does not know anything about rice. It knows the boiling point of
water.** A pot of rice gives no external signal when done, so Toshiba's engineers stopped trying to
detect the rice and detected the **water**: liquid water cannot exceed ~100°C, so the pot sits at
boiling point until the last free water goes, then the temperature **spikes** — and a bimetallic
strip bends and cuts the circuit. ✅ The research was done by **Fumiko Minami**, wife of the
near-bankrupt water-heater maker Toshiba handed the project to; ~5 years of testing water quantities
and temperatures, establishing that constant heat adjustment was unnecessary and 20 minutes at steady
temperature sufficed. The ER-4 shipped December 1955. **Fumiko Minami died in 1959.** ⚖️ And the
punchline ties back to the method: **the machine detects the END of the water, never the RIGHT
AMOUNT of it. That measurement stayed the cook's job.**)*

### 🩸 SEVENTH SCAR — AND THE PATTERN IS NOW UNARGUABLE
🟠 **VOICE ECHO ×3 in `howThisFeels` again** — *"a face full of steam"* vs `indonesia-pepes-ikan`.
⚖️ **SEVEN scars this session and NOT ONE landed in `method`.** Tally: `chefNotes` ×1 · `pairsWith`
×2 · `howThisFeels` ×2 · `trivia` length ×2. **Where the writing is deliberate it is clean; where it
is casual it defaults to the house template.** ✅ **RULE FOR THE NEXT SESSION: before merging, read
`howThisFeels`, `pairsWith` and `chefNotes` cold and ask "have I written this sentence before?"**
🟡 **LECTURE fired twice on one record** (288 → 269 → clean at 263 bar). ⚠️ Trim by cutting
non-load-bearing clauses, never by gutting the argument.

### ⚖️ A NEW MERGE ASSERTION MET FOR THE FIRST TIME
❌ **DEAD addIng ANCHOR.** merge refused: an `addIng.after` anchor may only point at a line in the
**BASE** ingredients, **never at a line the same delta is adding.** I had chained ginger→oil→ginger.
✅ Fix: point every anchor at a base line (duplicate anchors on one base line are fine).

### ✅ PRICES CONFIRMED LIVE, RECORD 21
`jasmine rice` R63 · `stock` R8 · `ginger` R280 · `water` R0.02 — all exact.

**Pla Neung Manao:** *⚖️ TIMING A FISH BY WEIGHT IS THE WRONG MEASUREMENT* — heat travels inward, so
the variable is **THICKNESS AT THE DEEPEST POINT**, ~8–10 min hard steam per 2.5cm. A long slim fish
and a short deep one at the same weight need different times **+ three deep slashes to the bone are
not decoration** — they shorten the distance heat must travel so shoulders and tail finish together
*(⚖️ deferred to Gai Yang: remove the problem rather than manage it)* **+ ⛔ THE SAUCE IS NEVER
COOKED — not warmed, not reduced.** Raw garlic is meant to be harsh; 30 s in a pan makes it sweet and
ordinary. ⚖️ Goes further than Tom Yum's off-the-heat lime and says so **+ the fish is RAISED off the
plate** on split lemongrass and celery so steam gets underneath and it does not stew in its own
liquid; sauce goes AROUND, never over **+ ⚖️ TEST AT THE BONE AND PULL IT EARLY** — flesh just parting
from the backbone, still faintly translucent at the centre; **fish carries over harder than any other
protein** and the window is ~60 seconds. ⚠️ ⛔ Do not let it stand — the acid keeps working and the
surface goes chalky like ceviche.

### ⛔ NEW REGISTER OPENED AND SPENT — **food fraud / species substitution**
*(Pla Neung Manao — **the fish most ordered for this dish is the most lied-about name in the trade,
and Tinza's own engine falls for it.** Oceana DNA-tested 449 fish across 24 US states: **1 in 5
mislabelled, sea bass worst at 55%**, snapper 42%; an earlier 1,215-sample study found **33%**, red
snapper wrong **87%** of the time. ✅ **But the honest reading is not simply that everyone is
cheating** — much of it is a collision between naming systems: California permits 13 rockfish species
to be sold as "Pacific red snapper" where the federal list permits one, and the Canadian list allows
200+ species to be called snapper. **A fish can be legal in one jurisdiction and mislabelled in the
next.** ⚖️ SA landing: hake is honestly named and is genuinely good. **Ask what a fish IS, not what
it is called.**)*

### 🔴 NEW LANDMINE — AND IT IS THE MOAT MADE LITERAL
**`sea bass` → `basa` R160.** The engine performs exactly the substitution the trivia describes —
basa is pangasius catfish, not sea bass. ⛔ **`whole fish` · `tilapia` · `kingklip` · `yellowtail` are
ALL ABSENT.** ✅ `hake` R180 is exact, and bare `fish` aliases to `hake`. **Write `hake`; name the
whole fish in-method.**

### ✅ FIRST CLEAN `/all` OF THE SESSION
⚖️ Record 22 passed **every watcher on the first pass** — no echo, no gloss, no lecture. **The only
thing done differently was reading `howThisFeels`, `pairsWith` and `chefNotes` cold BEFORE merging**,
per the rule written at record 21. ✅ **The rule works. Keep it.**

**Gaeng Som:** *⚖️ NO COCONUT AND NO OIL — THE PASTE IS DISSOLVED INTO BOILING WATER, NEVER FRIED.*
The exact inverse of Massaman · Khao Soi · Kaeng Keow Wan, all of which fry paste in fat. **Fat is
what normally rounds off acid and chilli, and there is none here** — so it is thin, fierce and
hotter than its chilli count suggests **+ ⚖️ A PIECE OF COOKED FISH IS POUNDED INTO THE PASTE** —
poach ⅓ of the fish, flake it, pound it in until it disappears. **That is what does the job coconut
fat does elsewhere**: body, savour, and stopping it tasting like sour water. ⛔ Almost every
shortened recipe omits it; it is the step that separates gaeng som from chilli-and-tamarind soup
**+ ⚖️ ONCE THE FISH IS IN, STOP STIRRING COMPLETELY** — a dragged spoon shreds the fish and clouds a
broth meant to stay clear. Nudge and tilt only **+ season while it is still just broth**, because a
full pot cannot be stirred to adjust **+ ⚖️ TAMARIND EARLY AND COOKED · LIME OFF THE HEAT** *(the
latter deferred to Tom Yum)*. ⚠️ Turmeric stains permanently on plastic — warn before borrowing a
processor.

### ⛔ NEW REGISTER OPENED AND SPENT — **acid chemistry / the taxonomy of sour**
*(Gaeng Som — **sour is not one flavour, and Thai cooks treat the difference the way Europeans treat
vinegars.** ⚖️ **Lime is citric acid** — fast, sharp, clean, fades quickly. **Tamarind is unusually
rich in tartaric acid**, the same acid behind grapes and wine — harder, rounder, slower to arrive and
much slower to leave. **Garcinia** brings hydroxycitric acid, flat and almost savoury with no
fruitiness. **Vinegar is acetic** and partly volatile, so much of it is smelled rather than tasted;
**fermented ingredients bring lactic acid**, softest of the lot. ✅ So a southern cook using lime
where a central cook uses tamarind is **not making the same curry with what was in the cupboard —
they are choosing how the sourness behaves over the twenty seconds after you swallow.** A distinction
with almost no equivalent in Western cooking, where sour is usually just lemon.)*

### 🩸 EIGHTH SCAR — `chefNotes`, AND THE SAME TRAP AS RECORD 18
🟠 **VOICE ECHO ×3:** *"start with two-thirds of what the recipe says"* — vs `thailand-kaeng-keow-wan`,
whose chefNotes gives the identical advice about variable curry-paste strength. ⚖️ **Two cards facing
the same real problem — jarred product that varies wildly between brands — reached for the same
sentence.** ✅ Reworded to *"Put in half, taste the pot, and work up from there."* ⚠️ **Running tally:
`chefNotes` ×2 · `pairsWith` ×2 · `howThisFeels` ×2 · trivia length ×2 · opening formula ×2. STILL
ZERO in `method`.**

### ⚠️ AN AUTHORING FAULT WORTH RECORDING (mine, not the tools')
A version delta was written with a **malformed `addStep` object** — the step text never made it in,
leaving `{"text": "⚖": "x"}`. ⛔ `node --check` caught it as a syntax error **before** merge, but only
because the batch is checked every time. ✅ **Never skip `node --check` on a batch, even when the
edit looked trivial.**

**Peek Gai Yat Sai:** *⚖️ THE WING IS BONED FROM THE INSIDE, NEVER CUT OPEN* — work from the wide cut
end, push flesh and skin back off the bones like rolling a sock off a foot, twist the bones free,
turn it right side out. **The closed pouch is the dish**; a wing sliced open and tied back is a
different, worse thing **+ ⚖️ USE THE MID-JOINT, AND THE REASON IS ANATOMICAL** — it holds **two thin
parallel bones** that can be drawn out together, where the drumette's single fat bone jams in a
narrow sleeve **+ ⛔ FILL ONLY TWO-THIRDS** — filling swells as the pork sets and the noodles take up
moisture; a full wing splits in the oil **+ ⚖️ STEAM 15 MIN FIRST, FRY SECOND — THIS IS SAFETY, NOT
TEXTURE.** A stuffed wing is an insulated parcel with raw pork at its centre; fried from raw the skin
blackens long before the middle is safe. **After steaming, frying is colour and crunch only**
**+ noodles and vegetables in the filling are NOT padding** — pure mince in a sealed skin steams into
a rubbery plug **+ ✅ dry the wings 20 min before frying**, and they can be made to the steamed stage
a full day ahead, which is the whole reason this works for guests.

### ⛔ NEW REGISTER OPENED AND SPENT — **comparative anatomy / homology**
*(Peek Gai Yat Sai — **you are not deboning a wing, you are deboning an arm, and the bones map onto
your own.** The drumette holds a single **humerus** like your upper arm; the flat mid-joint holds
**radius and ulna** side by side like your forearm. ⚖️ **That is exactly why the mid-joint is the
section you can bone from the inside — the anatomy IS the technique**, not a curiosity attached to
it. ✅ Out at the tip is a fused, reduced hand, still carrying a small projecting digit called the
**alula**, a thumb-like feather tuft a bird raises at low speed to keep airflow attached — roughly
what a slat does on an aircraft. And **which fingers survived is still genuinely disputed**: fossils
and embryos have disagreed for over a century over digits 1-2-3 versus 2-3-4. **An argument that has
run a hundred years, about the bones going into the stockpot.**)*

### ✅ SECOND CLEAN `/all` — THE PRE-MERGE CHECK IS HOLDING
⚖️ Records 22 and 24 both passed **every watcher on the first pass**. Record 23 did not, and the
miss was `chefNotes` — **the one field I did not re-read that time.** ✅ The rule is working exactly
as far as it is applied. **Read `howThisFeels` · `pairsWith` · `chefNotes` cold before EVERY merge.**

### ✅ PRICES CONFIRMED LIVE, RECORD 24
`chicken wings` R85 ✅ exact · `mushrooms` R90 · `carrots` R25 · `cornflour` R68.
⚠️ **`chicken wing` SINGULAR → `chicken` R90** — same plural trap as `mushroom`/`mushrooms`,
`lime`/`limes`, `banana`/`bananas`. **Write `chicken wings`.** 🩸 **That is now FOUR instances of the
singular/plural shape in this lane. It has earned a ruling of its own rather than four table rows.**

**Pla Goong:** *⚖️ THE RESERVED LEAD, SPENT AT LAST — LEMONGRASS SLICED HAIR-THIN AND EATEN RAW.*
**The exact inversion of Tom Yum, and the only thing that changed is the knife.** There the stalk
goes in bruised at 4cm and is pushed aside; here it is cut across the grain **under 1mm** and becomes
the loudest thing on the plate. ⚖️ **Nothing about the plant differs — the fibres are simply now
shorter than the tongue registers as fibre.** ⛔ At 2mm it is a salad of woodchips. **Thickness is the
whole difference between an inedible ingredient and the point of the dish** **+ every aromatic here
is EATEN, not infused, so shallots · spring onion · lime leaf all get the same hair-fine treatment —
that is the organising idea and it runs to the last leaf** **+ ⚖️ DRESSED COLD, the deliberate
anti-YAM-WOON-SEN** (that one dresses warm so a bland noodle drinks; a prawn absorbs almost nothing
and warm acid only firms it — **this dressing COATS, so it must work on contact**) **+ prawns
poached 60–90s then straight into ICED water** *(timing deferred to Tom Yum)* **+ ⚠️ `goong chae nam
pla`, the raw version, is NAMED and declined** — frozen-thawed chiller prawns are not that product
**+ mint not coriander, torn not chopped.**

### ⛔ NEW REGISTER OPENED AND SPENT — **industrial chemistry / natural-product feedstocks**
*(Pla Goong — **the stalk is ~70–80% citral**, unusually pure for a plant extract, and why the grass
out-lemons a lemon *(lemon oil is only a few % citral)*. **1893: Tiemann & Krüger** found citral +
acetone in dilute alkali → **ionone**, the violet molecule — one flask reaction that collapsed violet
perfume from aristocratic luxury to commodity. Ionone is then a doorway to **synthetic vitamin A**,
first at kilogram scale **1948**, taking the vitamin out of fish livers and into public health reach.
**For fifty years that supply chain ran through fields of this grass.** ✅ **And then it did not** —
natural citral was inconsistent and short, acutely so in WWII, so industry went around the plant and
built citral from butene and formaldehyde. **Synthetic citral dominates today.** The grass had the
job and lost it to a petrochemical, which is the ordinary ending and rarely the one told.)*

### ✅ THIRD CLEAN `/all` — AND THE CLOSING GATE
`echo 8/8 clean · merge ✅ · costcheck 75/75 · pricecheck 89 exact / 4 review / 0 absent ·
wow+wk ✅ · lawcheck 0 red 0 drift · doctor RED 10 · unitcheck 0` — ⚖️ **Thailand is the only country
in the corpus with ZERO unitcheck faults**, because these keys were steered around all session.

### 🔴 LANDMINE, RECORD 25
**`nam prik pao` is ABSENT** and **`chilli jam` → `chilli` R80** *(the fresh vegetable)*. ⛔ Roasted
chilli jam is kept OUT of the ingredient line and named in-method on the `chai poh` precedent.
**A7 defer — it is a real shelf product at Asian grocers and deserves a key.**

✅ **REGISTERS: the original list is empty and eleven more were opened and spent this session.
Records 26+ must open new ones.**

### 🩸 THIRD VOICE SCAR — §33 GLOSS FIRED FOR THE FIRST TIME THIS SESSION
🔴 **GLOSS: `chakalaka` used in `pairsWith` with no explanation on the card.** ⚖️ Law 11 / §33 — the
CARD is the unit, and an SA term has to resolve where it is used. Fixed in place: *"the spiced
tomato, onion and bean relish served cold beside grilled meat"*. ⚠️ **The lesson is that SA
reference words slip in most easily in `pairsWith`, where the writing is most relaxed** — `braai`
and `boerewors` are already glossed elsewhere in the lane and were fine; `chakalaka` was new.

### ✅ PRICES CONFIRMED LIVE, RECORD 17
`cherry tomatoes` R100 · `dried chillies` R200 · `shrimp paste` R437 · `cabbage` R25 · `carrots` R25 ·
`baby marrow` R50 · `green pepper` R50 — all exact.
🔴 **LANDMINE CONFIRMED WIDER THAN LOGGED: bare `chillies` → R1 PER COUNT**, same as `green chilli`
and `chilli sauce` → `chilli` R80. ⛔ `long green chillies` is **ABSENT**. ✅ **The only safe weight
keys are `birds eye chillies` R100 and `dried chillies` R200** — no nam prik num fork is possible
until a long-green-chilli key lands.
🟠 `pork crackling` / `pork rinds` → `pork` R110 — kept OUT of the ingredient line and named in
`pairsWith` only, on the `chai poh` precedent.

### ✅ PRICES CONFIRMED LIVE, RECORD 16
`pineapple` R25 · `cashew nuts` R430 · `raisins` R168 · `sultanas` R120 · `curry powder` R300 ·
`crab sticks` R120 · `onions` R27 · `tomatoes` R35 — all exact.

### 🩸 SECOND VOICE SCAR — THE WATCHER CAUGHT TWO ON ONE RECORD
`tinza-echo.js` flagged record 15 twice: **VOICE ECHO** *"this dish is one of the few"* against
`indonesia-ayam-pop` — ⚠️ **and the first fix missed, because the phrase was in `chefNotes`, not the
trivia where I assumed it was. Grep the WHOLE record, not the field you think it is in.** Also
**LECTURE** at 285 words against a 261-word corpus bar; trivia trimmed to ~215. ✅ Both clean after.
⚖️ Same prose-edit-into-the-merged-file path as record 13 — ⛔ still no `git checkout`. **Expect a
hash-drift WARN on the next merge; it is correct.**

### ✅ PRICES CONFIRMED LIVE, RECORD 15
`egg` / `eggs` R3.70 **PER COUNT** *(write `3 eggs`, never a gram weight)* · `sriracha` R74 ✅ exact ·
`rice flour` R40 · `white pepper` R240 · `tomato sauce` R60.
🔴 **NEW LANDMINE: `chilli sauce` → `chilli` R80** — resolves to the fresh vegetable, not a sauce.
**Write `sriracha` R74.**

### 🩸 A VOICE SCAR WORTH NOT REPEATING
`tinza-echo.js` caught **OPENING FORMULA ×2** on record 13: the method lead opened *"the name of
this…"*, identical to `japan-agedashi-tofu`. ⚖️ **The watcher only sees it AFTER the merge**, so the
fix was a prose edit straight into the merged lane file, not a re-merge — ⛔ `git checkout` was NOT
used (see the B6 scar; the lane file is ahead of HEAD). **Expect merge.js to WARN on hash drift with
an unchanged count on the next merge — that is the legitimate-prose-edit path and is correct.**

### ✅ PRICES CONFIRMED LIVE, RECORD 13
`green curry paste` R960 · `aubergine` R43 *(and `aubergines` → same)* · `bamboo shoots` R136 ✅ exact
· `baby marrow` R50 · `peas` R61. 🟠 `basil` R650 carries both `thai basil` and `holy basil` —
knowingly accepted. ⛔ `green chillies` → **R1 PER COUNT**, still absent as a weight key.

### ✅ PRICES CONFIRMED LIVE, RECORD 12
`bananas` R25 *(weight)* ⚠️ `banana` singular is R2.50 PER COUNT — same shape as `lime`/`limes` ·
`desiccated coconut` R160 *(and bare `coconut` aliases to it)* · `rice flour` R40 · `cake flour` R22
*(and bare `flour` aliases to it)* · `bicarbonate of soda` R72 · `sweet potato` R30 · `ice cream` R45.
🔵 **ABSENT: `taro`** — no Thai taro desserts or `man tod` taro fork.

### ⚠️ NEW LANDMINES CONFIRMED THIS SESSION
- 🔴 **`egg noodles` → `egg` R3.70 PER COUNT.** A live instance of carried debt #3 (count-vs-weight
  direction B) — invisible to `pricecheck`, coverage and `merge`. **Write `noodles`.**
- ✅ **`noodles` R80 is the RIGHT key for khao soi, not a knowing compromise** — khao soi genuinely
  is wheat-and-egg noodles. First Thai dish where that key is honest rather than tolerated.
- **`pickled mustard greens` / `mustard greens` → `mustard` R84** (the condiment). Kept OUT of the
  ingredient line and named in-method, on the `chai poh` precedent. *phak dong* is sold in vacuum
  packs and tins at Asian grocers; ⚖️ **not sourced — A7 defer, do not guess a key.**
- ✅ `curry powder` R300 · `turmeric` R351 · `stock` R8 · `white pepper` R240 — all exact and live.

---

## 4d · ⛔ TOM KHA GAI — STRUCK ON COLLISION, 1 AUG 2026

⚖️ **ASSESSED PROPERLY BEFORE BEING STRUCK, NOT WAVED AWAY.** Tom Kha is a famous dish and an
obvious slot-filler, which is exactly why this needs to be on the record — so the next session does
not re-discover it, author it, and ship a card that says nothing new.

**EVERY distinguishing feature of Tom Kha is already owned by a card in this lane:**

| the Tom Kha lead | already owned by |
|---|---|
| galangal is not ginger; it is INFUSED and never eaten | **Tom Yum** — outright, and it is Tom Kha's single strongest angle |
| lemongrass + galangal + Thai lime leaves as the aromatic trio | **Tom Yum** |
| lime and fish sauce go in OFF THE HEAT | **Tom Yum** |
| whole bruised chillies for gradual, gentle heat | **Tom Yum**, in method |
| ⛔ never boil the coconut milk or the emulsion splits | **Massaman · Khao Soi · Mango Sticky Rice · Kaeng Keow Wan** — spent FOUR times |
| bone-in chicken makes the stock while the dish cooks | **Khao Soi**, chefNotes |
| "the name misleads you about how hot it is" | **Kaeng Keow Wan**, record 13, two records ago |

⚖️ **The one genuinely unowned thing** is that `tom kha` means *boiled galangal* — the dish is named
after an aromatic rather than a protein or a technique. That is an **etymology** observation, and
etymology is spent (Massaman), **and it is not a method lead.** A `/wow` card needs a lead, and
Tom Kha's only real one is Tom Yum's.

⛔ **DO NOT AUTHOR TOM KHA GAI.** Same shape as the `Moo Satay` and `Moo Ping` strikes: a real dish,
struck because the lane already said everything it has to say. ✅ **If it is ever reopened, the bar
is a METHOD lead that Tom Yum does not already carry** — not a flavour comparison to it.

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

### 2 · ⚖️ SHOULD `unitcheck` BECOME THE SEVENTH GATE IN LAW 62?
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
