# 🍣 JAPAN B10 — COLD START (40 → 45)

**Written 29 Jul 2026 at the close of the pricing session. Open a fresh chat, attach the eight
files listed in §1, paste this, and go. Nothing in here needs re-deriving — every claim below was
measured with the tools, not reasoned.**

---

## §1 FILES TO ATTACH — EIGHT, AND THE LAST THREE ARE NOT OPTIONAL

1. `sections/wk_japan.js` — **40 records** (Nukazuke recomputed, ginger lines renamed)
2. `sections/prices.js` — **includes `crab sticks` R120 and `pickled ginger` R280**
3. `sections/core.js`
4. `sections/worldkitchen.js`
5. `merge.js`
6. `pricecheck.js`
7. `reference/ASIA_PROGRESS.md`
8. `reference/ASIA_SCHEMA_KEYS.json` — ⛔ **DO NOT REGENERATE IT**

⚠️ **core.js, worldkitchen.js and merge.js were missing at the start of the last session and cost
the first stretch of it.** pricecheck refuses to report without all three — by design, because a
partial gate under-reports silently.

⚠️ **`JAPAN_B7_COLD_START.md` line 11 still says "hand back once at the end." That is STRUCK.**
The rule is **ONE RECORD = ONE HANDBACK**: write → `node --check` → merge → pricecheck →
present_files → *then* the next record. B7 was lost once by batching to the end. Fix that line or
delete the file; a second copy saying the opposite is the split-brain shape.

---

## §2 STATE AT B9 CLOSE + THIS SESSION'S EDITS

**40 / 50.** main 11 · side 11 · starter 8 · dessert 6 · staple 4 · 120 versions · 120 crossLinks,
0 dead · vegan-capable 30 · §26 union drift 0.

**pricecheck japan:** wrong-product **0** · exact **123** · REVIEW **97** · absent **40**
(sourced 8 · listed 29 · new 3: `sheets aburaage`, `strong flour`, `wheat bran`).

Changed this session, all gates green:
- **§31.3 struck → §31.3a/b/c.** Retained → equipment, out of costPP. Consumed → priced per unit.
- **Nukazuke R11·R23·R19 → R9·R10·R15**, no longer provisional. Bed cost named in-method (~R40).
- **`crab sticks` R120** and **`pickled ginger` R280** added to prices.js.
- **4 ingredient lines** renamed `pickled red ginger (beni shoga)` → `pickled ginger (beni shoga)`.

---

## §3 THE COLLISION SCAN — ALREADY DONE, DO NOT REDO IT

### 🔴 A "SUSHI RICE / SHARI" STAPLE CANNOT BE WRITTEN

`japan-chirashizushi` already teaches, in full, in-method: sushi-zu warmed never boiled · **wide
flat dish, never a deep bowl** · vinegar over the back of a spatula · the **cutting/slicing** fold,
never stirred, never pressed · the fan and the real reason for it · body temperature, every grain
separate · and the moat **sushi means the vinegared rice, not raw fish**.
`japan-gohan` owns the wash / 20-min rest / 12+10 / water-by-weight ×1.4 above it.
**There is nothing left to say. Staple stays 4 unless filled from outside the sushi spine.**

### ⛔ MOATS ALREADY SPENT — B10 MUST NOT REUSE

- **Name-origin moats are spent FOUR times** (Hiyayakko, Miso Soup, Nasu Dengaku, Dorayaki).
  Edamame's 枝豆 "branch bean" was deliberately left unused. **Do not make it five.**
- **Onigiri** owns: nori applied at the moment of eating · the 1978 three-layer film patent ·
  salt on the hands not in the rice · press only enough to hold · warm-never-hot-never-cold rice.
- **Tamagoyaki** owns: the sushi counter as a test of the shop · order it first · the regional pans.
- **Inarizushi** owns: abura-nuki · cool-in-the-liquid · the sweet inverse simmer · fill two-thirds,
  seam down · Inari → fox → aburaage · Kanto tawara vs Kansai sankaku.
- **Chirashizushi** owns: the sumptuary-law loophole, Ikeda Mitsumasa, Chirashizushi Day.
- **Beer as a pairing appears in 11 records.** It is not a moat.

### ✅ SUSHI IS UNBLOCKED — SAFETY LINE IS VERBATIM AND MANDATORY

Farmed pellet-fed salmon and commercially frozen tuna are the safe home route · wild fish needs
−20°C for 7 days · most home freezers only reach −18°C · **freezing kills parasites, not bacteria.**

---

## §4 THE SHORTLIST — FOUR SUSHI CARDS + ONE OPEN SLOT

No mains: `main` is frozen at 11.

| # | Record | Course | Leads on | Moat |
|---|---|---|---|---|
| 1 | **Hosomaki** | `side` | the mat and the margin — nori rough-side up, the ⅔ rule and bare border, tezu, the tuck-and-pull, wet blade wiped between cuts, cut with a pull | **nori is a manufactured paper** — sheet method borrowed from washi papermaking, Asakusa nori, Tokyo Bay |
| 2 | **Temaki** | `starter` | the clock — no mat, no knife, nori limp in minutes, assembled at the table by the eater | **home sushi in Japan is temaki and chirashi, never nigiri** — nigiri is what you buy from a professional |
| 3 | **Nigirizushi** | `starter` (type carries `main`) | the hand — ~40% air, holds in the fingers, collapses in the mouth · wasabi *between* fish and rice · brush nikiri, don't dunk · **dip fish-side** · one pull of the blade, never sawed | Hanaya Yohei's 1820s Edo stall, sushi as the original fast food; the 1923 earthquake scattering Edo chefs nationwide |
| 4 | **Oshizushi / Battera** | `side` | **the box came before the hand** — Kansai pressed sushi, and shime saba: salt then vinegar, a preservation lesson needing no raw-fish nerve | the older form; the Kansai/Edo split read backwards from the usual direction |
| 5 | **⚖️ TINA'S CALL** | dessert (6) or staple (4) | — | see §6 |

**⛔ DEFERRED, with reasons:** Sashimi → B11 (overlaps Nigiri's knife and fish laws too heavily to
write both in one batch) · Gari (collides with Tsukemono's salt/weight/clock, and makes pickle #4) ·
Temarizushi (overlaps Temaki's no-mat and Onigiri's hand-shaped ball) · Sukiyaki still BLOCKED on
the raw-egg-dip ruling, egg CLOSED at 3 · Katsudon still overlaps Tonkatsu AND Oyakodon.

---

## §5 PRICE LANDMINES — PROBED, NOT GUESSED

**Run every planned ingredient name through `wkPriceLookup()` BEFORE writing the record.** Neither
merge nor pricecheck can catch this class after the fact.

| ✅ WRITE | ⛔ NEVER WRITE | why |
|---|---|---|
| `tuna steak` (R350, already keyed) | `tuna` · `tuna loin` · `sashimi tuna` | all fall to `tuna` R120, commented **(tinned)** — 3× under, wrong direction under §31.1 |
| `crab sticks` (R120, keyed this session) | — | was falling to `crab` R400 |
| `pickled ginger (beni shoga)` | `pickled red ginger …` | the lookup needs the key as a **contiguous phrase** |
| `surimi sticks` | — | resolves null — honest ABSENT if you'd rather not use the new key |

**Honest ABSENT, already on MF152, no action:** `nori` / `sheet nori` · `kombu` · `wasabi`.
**New ABSENT if used:** `mackerel` (Oshizushi) · `tobiko`.
**Also verified:** `avocado` R65/kg weight key + `avocado_each` R13 — use the right one.

---

## §6 OPEN DECISIONS — FOUR

1. **Push `wk_japan.js` unwired at batch close?** Asked six times. One deploy credit, zero change
   to the live app. **Origin reads 30, local reads 40 — ten records ahead.**
2. **The REVIEW ledger.** `reference/REVIEW_LEDGER.md`, one line per *(qualifier, key)* pair, each
   `SAME` / `DIFFERENT` / `PENDING`, set once by Tina. pricecheck prints only PENDING and **hard-
   fails** on a `DIFFERENT` pair with no key of its own. Day one it carries `pickled ginger`,
   `crab sticks`, `rice bran`, `bread flour`, `chilli oil`, `potato starch`, `sushi rice`,
   `glutinous rice flour`, `tuna loin`. Born-RED proof: reintroduce `crab sticks` unkeyed.
   *(`fresh ginger → ginger` will otherwise print in every run forever. That is the whole argument.)*
3. **Count-vs-weight — a third bug class, needs a rung and a sweep of all 40.** A key that exists,
   matches, and still cannot be costed because the record writes a count where the key wants grams.
   pricecheck reports these as **EXACT** — it checks the key, not the unit. Confirmed instances:
   `1 cucumber` and `2 dried chillies` in `japan-nukazuke` (that card currently prices **nothing** —
   coverage 1 of 5, under the 0.8 gate). Related, same sweep: `japan-yakitori` carries
   `chicken mince with 5g grated ginger, for tsukune` — one line, two ingredients, prices the whole
   weight as `chicken` R90 and loses the ginger.
4. **B10 record 5** — dessert (6) or staple (4)?
   - *dessert:* **Yokan** or **Kakigori**. ⚠️ Anmitsu owns agar-and-summer-cold, so Kakigori must
     lead on ice texture and the shaving, not the season. ⛔ Anything mochi-based is blocked until
     `glutinous rice flour → rice R27` is keyed.
   - *staple:* **Umeboshi** (real, distinct — salt-plum, shiso, the three-day sun-dry — but it makes
     pickle #4) or **Ponzu** / **Furikake** (thinner, but clean).

---

## §7 THE COMMANDS

```bash
node --check sections/wk_japan.js
node merge.js japan batch10.js          # 40 assertions incl. the §26 union check
TINZA_REPO=$PWD node sections/pricecheck.js japan
TINZA_REPO=$PWD node sections/pricecheck.js --selftest   # 22/22
```

To re-validate an **edited existing** record (merge only accepts new batches): split the record out
of the file, write it to `batch.js` as `module.exports = [record]`, re-merge. Verified working.

⛔ **WIRING — 2 lines, at country close only:** `<script src="sections/wk_japan.js"></script>` in
index.html, and `window.WK_JAPAN || [],` in `wkPool()` at worldkitchen.js:58.

---

## §8 THE LAWS THAT KEEP BITING

- **PARSE-NEVER-REGEX.** Load the file, walk the objects. Every audit.
- **PROBE BEFORE AUTHORING.** Earned itself three times now (`rice bran`, `bread flour`, `crab sticks`).
- **A shallow clone is a snapshot, not the truth.** Check whether origin is behind local before
  believing an ABSENT report or handing back a canonical file. Bitten four times.
- **Hand rulings back as a BLOCK, never the whole TINZA_RULINGS.md** — HEAD stops at §25.
- **A7 defers MISSING prices, never WRONG ones** (§29.5).
- **Version deltas are the blind spot.** The ginger rename was "three records" and was actually
  four lines — the fourth inside a Takoyaki version delta. The vegan-mistag warn has the same hole.
- **Where a ruling turns on a factual claim about how an ingredient behaves, check the claim
  BEFORE filing** (§31.4b). The sushi safety line was verified first and held; the nuka
  no-substitute clause was not and lasted under 24 hours.
