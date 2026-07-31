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
| **Thailand** | ▶️ **OPENING — 0 records, file WIRED and EMPTY** |
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

## 4 · ⚖️ FIRST BANK = **4 RECORDS**, MECHANICALLY
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
