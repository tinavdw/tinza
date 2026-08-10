# 🍣 JAPAN B10 — RESUME (41 → 45)

**⛔ THIS SUPERSEDES `JAPAN_B10_COLD_START.md`.** That file is now wrong in four places, listed in
§0. Open a fresh chat, attach the files in §1, paste this, and go straight to record 42.

---

## §0 WHAT THE OLD COLD START GETS WRONG — FIX OR DELETE IT

1. **§1 says `prices.js` "includes `crab sticks` R120 and `pickled ginger` R280".** It does in
   Tina's local copy; **it did not at origin.** This cost the first stretch of the session. The
   uploaded `prices.js` now has both — that file is canonical.
2. **§7's command points at the broken pricecheck.** ⚠️ **`pricecheck.js` HAS TWO PATH ROOTS:**
   gate files resolve off `repoRoot`, `MF152` resolves off `__dirname` (line 42). Run from
   `sections/`, `readMF152()` returns `{ok:false}` and **reports anyway**, re-discovering every
   sourced key as "new". `loadGate()` refuses on a missing file; `readMF152()` shrugs — it needs
   the same refusal. **⛔ RUN THE ROOT COPY.**
3. **§6.1 "push unwired?" is STRUCK.** ⚖️ Tina confirmed 29 Jul it was settled at the batch-3
   handover: push **ONCE at Japan close (50/50) with the two wiring lines**, China B7+B8 pattern.
   The risk (origin 30, local 41) was accepted deliberately. **Open decisions are THREE, not four.**
   Fourth instance of a to-do list re-asking a settled question — **check the record first.**
4. **§8 says "HEAD stops at §25".** Origin's `TINZA_RULINGS.md` now runs through **§28**, and
   `reference/RULING_29_STAPLES_AS_INGREDIENTS.md` is at origin too. Still hand back blocks.
5. **§5 says `avocado` is "R65/kg weight key + avocado_each R13".** Bare `avocado` resolves to
   **R13 `per: count`**. Write grams against a weight key or you price eighty avocados.

---

## §1 FILES TO ATTACH — SIX

1. `sections/wk_japan.js` — **41 records** (Hosomaki banked)
2. `sections/prices.js` — **Tina's local copy, the one with `crab sticks` + `pickled ginger`**
3. `reference/ASIA_PROGRESS.md`
4. this file

`core.js`, `worldkitchen.js`, `merge.js`, `pricecheck.js`, `ASIA_SCHEMA_KEYS.json` are **current at
origin** — Claude clones them. ⛔ Do not regenerate the schema file.

---

## §2 STATE

**41 / 50.** main 11 *(frozen)* · side 12 · starter 8 · dessert 6 · staple 4.
pricecheck: **wrong-product 0** · exact 125 · REVIEW 98 · absent 40 (sourced 8 · listed 29 · new 3).

⚖️ **THE CLOSING TEN, RULED BY TINA:** **8 savoury/sushi + 2 desserts.** "main" in that instruction
meant *the savoury eight*, **not** the course tag — `main` stays frozen at 11, confirmed.
**B10 = 4 sushi + 1 dessert · B11 = 4 sushi + 1 dessert.**

---

## §3 REMAINING B10 — THREE SUSHI + ONE DESSERT

| # | Record | Course | Leads on | Moat |
|---|---|---|---|---|
| 42 | **Temaki** | `starter` | the clock — no mat, no knife, nori goes limp in minutes, assembled at the table by the eater | **home sushi in Japan is temaki and chirashi, never nigiri** — nigiri is what you buy from a professional |
| 43 | **Nigirizushi** | `starter` | the hand — ~40% air, holds in the fingers and collapses in the mouth · wasabi *between* fish and rice · brush nikiri, don't dunk · **dip fish-side** · one pull of the blade | Hanaya Yohei's 1820s Edo stall, sushi as the original fast food; the 1923 earthquake scattering Edo chefs nationwide |
| 44 | **Oshizushi / Battera** | `side` | **the box came before the hand** — Kansai pressed sushi, and shime saba: salt then vinegar, a preservation lesson needing no raw-fish nerve | the older form; the Kansai/Edo split read backwards from the usual direction |
| 45 | **⚖️ TINA'S CALL — dessert** | `dessert` | Yokan or Kakigori | ⚠️ Anmitsu already owns agar-and-summer-cold, which **Yokan collides with** (yokan is set with kanten). Kakigori must lead on ice texture and the shaving, not the season. ⛔ Anything mochi-based blocked until `glutinous rice flour → rice R27` is keyed. 🟢 Clean alternatives with no collision: **Daigaku Imo** (candied sweet potato) or **Purin** (Japanese custard pudding). |

**⛔ B11 = Sashimi + 3 more savoury + 1 dessert.** Sashimi deferred from B10 (overlaps Nigiri's
knife and fish laws). ⚠️ B11's remaining savoury slots are thin — **Gari** collides with Tsukemono
and makes pickle #4, **Temarizushi** overlaps Temaki and Onigiri. Needs thought at B10 close.

---

## §4 LAWS THIS SESSION PROVED AGAIN

- **⚠️ THE VERBATIM SAFETY LINE IS EASY TO DROP.** It was missing from Hosomaki's first draft and
  caught by eye, not by a gate. **Merge cannot see it. Nigiri, Sashimi and Oshizushi all need it.**
  Verbatim: *farmed pellet-fed salmon and commercially frozen tuna are the safe home route · wild
  fish needs −20°C for 7 days · most home freezers only reach −18°C · **freezing kills parasites,
  not bacteria.***
- **COST THROUGH THE APP, NEVER BY HAND.** Hosomaki's default costPP was hand-declared R31;
  `wkCostRecipeShape()` said R28. Hand-costing drifts.
- **PROBE BEFORE AUTHORING.** Every planned name through `wkPriceLookup()` first.
- ⛔ **MOATS SPENT — name-origin ×4** (Hiyayakko, Miso Soup, Nasu Dengaku, Dorayaki), Edamame's
  枝豆 deliberately unused. **Hosomaki now also owns:** nori-as-manufactured-paper, washi method,
  Asakusa-nori, Kathleen Drew-Baker / the Drew Festival, kappa folklore, surimi's 1973 Hiroshima
  invention. **Nigiri must not reuse the papermaking or the Tokyo Bay angle.**
- ⛔ **A "sushi rice / shari" staple CANNOT be written** — Chirashizushi + Gohan own it in full.
  Hosomaki points at both rather than re-teaching. **Temaki and Nigiri must do the same.**

---

## §5 PRICE LANDMINES — PROBED, NOT GUESSED

| ✅ WRITE | ⛔ NEVER WRITE |
|---|---|
| `tuna steak` R350 | `tuna` · `tuna loin` · `sashimi tuna` → all fall to tinned `tuna` R120 |
| `pickled ginger (gari)` or `(beni shoga)` | `pickled red ginger …` — lookup needs the key as a contiguous phrase |
| `crab sticks` R120 | `crab` R400 |
| grams against weight keys | counts — `cucumber` R21 and `dried chillies` R200 are **weight** keys |

Resolves clean: `Japanese soy sauce`→`soy sauce` R236 · `rice vinegar`→`vinegar` R25 (REVIEW) ·
`white sugar` R35 · `fine salt`→`salt` R30 · `Japanese mayonnaise`→`mayonnaise` R64 ·
`toasted sesame seeds`→`sesame seeds` R244 · `spring onion` R343.
Honest ABSENT, on MF152, no action: `sheet nori` · `kombu` · `wasabi`. New if used: `mackerel` · `tobiko`.

---

## §6 OPEN DECISIONS — FOUR (push is NOT one of them)

1. **⚖️ THE A7 QUESTION, and it is the big one.** Swept all 41 through the live gate
   `wkCostState()` (coverage ≥ 0.8 **and** main protein priced, worldkitchen.js:582):
   **15 of 41 Japan records render NO cost at all.** dashi 0% · nukazuke 20% · tsukemono 40% ·
   takoyaki 50% · zaru-soba 50% · chawanmushi 55% · warabimochi 60% · okonomiyaki 62% ·
   shoyu-ramen 67% · kinpira-gobo 67% · anmitsu 67% · yakitori 73% · oyakodon 75% ·
   **hosomaki 78%** · tempura 88% *(fails the protein clause — `large prawns` unpriced)*.
   A7 formally applies (missing ≠ wrong, §29.5), but a third of Japan shipping costless on an app
   whose pitch is honest Rand costing is launch-visible. **Hold to A7, or take a ~10-key Japan
   mini-batch:** `sheet nori` · `katsuobushi` · `dried kombu` · `sake` · `spring onion(s)` prep
   forms · `wasabi` · `okonomiyaki sauce` · `aonori` · `daikon` · `agar agar powder`.
   ⚖️ **Hosomaki was NOT distorted to dodge the gate** — dropping `wasabi` would have tipped it to
   87% and passed. That is gaming a gate, not authoring a record.
2. **The REVIEW ledger** — `reference/REVIEW_LEDGER.md`, one line per *(qualifier, key)*,
   `SAME`/`DIFFERENT`/`PENDING`, set once by Tina. pricecheck prints only PENDING and hard-fails a
   `DIFFERENT` pair with no key. Born-RED proof: reintroduce `crab sticks` unkeyed.
3. **Count-vs-weight — third bug class, needs a rung + a sweep of all 41.** A key that exists,
   matches, and cannot cost because the record writes a count where the key wants grams;
   pricecheck calls these EXACT. Confirmed: `1 cucumber` + `2 dried chillies` in `japan-nukazuke`,
   `cucumber` in `japan-tsukemono`. Same sweep: `japan-yakitori`'s
   `chicken mince with 5g grated ginger, for tsukune` — one line, two ingredients, loses the ginger.
4. **Record 45 — which dessert?** See §3.

---

## §7 THE COMMANDS

```bash
node --check sections/wk_japan.js
node merge.js japan batch10.js                    # 40 assertions incl. the §26 union check
TINZA_REPO=$PWD node pricecheck.js japan          # ⛔ ROOT copy, not sections/
TINZA_REPO=$PWD node pricecheck.js --selftest     # 22/22
```

To re-validate an **edited existing** record: split it out to `batch.js` as
`module.exports = [record]` and re-merge. Verified working.

⛔ **WIRING — 2 lines, AT JAPAN CLOSE ONLY:** `<script src="sections/wk_japan.js"></script>` in
index.html, and `window.WK_JAPAN || [],` in `wkPool()` at worldkitchen.js:58. Pushed together.

⛔ **ONE RECORD = ONE HANDBACK:** write → `node --check` → merge → pricecheck → present_files →
*then* the next record. Never batch downloads to the end.
