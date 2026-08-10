# FIX SESSION — 30 Jul 2026 · BEFORE INDONESIA

Paste-in block for `reference/ASIA_PROGRESS.md`. Seven files changed, all gates green.

---

## ⚖️ FIRST, A CORRECTION — THE CARRIED FINDING WAS WRONG IN BOTH HALVES

`ASIA_PROGRESS.md` has been carrying this since B9 close:

> **DIRECTION B IS THE WORSE RUNG… invisible to everything we own… It renders a number that
> looks correct.** And: `30g avocado` in `boerekos-gemsbok-stuffed-fillet` "prices the card at R88
> where the honest figure is R99 — a WRONG price, live today".

**Measured through the app's own engine this session, both halves are false.**

| written | key is | what the ENGINE actually does | verdict |
|---|---|---|---|
| `30g avocado` | count | **R2** — `AVG_WEIGHT_G` (65 entries, added to core.js in June) converts grams to a fraction of an item | ✅ **correct.** 30g of a 200g R13 avocado *is* R2. There was never a bug here. |
| `100g flatbread` | count | **R14**, bridged | ✅ correct |
| `300g thin egg noodles` | count | **R19**, bridged | ✅ correct |
| `1 whole duck, about 2kg` | weight | **dropped into `missing`** → renders **blank**, coverage falls | 🔵 a **GAP**, not a wrong number |

**Swept every `wk_*.js`: all 57 direction-A instances are bridged. ZERO wrong numbers from this
class anywhere in the app.** And direction B does not render a number at all — it announces itself
exactly the way the ladder says a gap should.

⚖️ **So the real cost of direction B is COVERAGE, not correctness**, and that is a much better
problem to have. It is also why so many cards printed no price: **211 lines app-wide were silently
falling into `missing`**.

📌 **The rung I nearly built was the wrong rung.** Had I flagged direction A as HARD — which the
old `pricecheck.js` did, and which the old selftest proof asserted — it would have sent someone
rewriting **57 correct lines**. The proof was asserting a bug that had already been fixed elsewhere
in the app, which is worse than no proof.

---

## 1 · `pricecheck.js` — THE RUNG, BUILT TO WHAT WAS MEASURED

- **Collector fixed first.** A line with no unit was being dropped entirely, so `units` was empty
  and the whole count-vs-weight class **could not be asked about**. A countable line now records
  `'count'` as a first-class unit alongside g and ml. *That absence is the reason this was invisible,
  not any cleverness in the bug.*
- **🔵 NOPRICE — new flag, new report section.** A COUNT line resolving to a per-kg/L key. It
  resolves, so every other rung called it EXACT. Now it is named, counted and listed with its records.
- **🔴 HARD (direction A) — now asks the bridge instead of assuming.** `AVG_WEIGHT_G` is read out of
  the sandbox (never modelled here — same law as the rest of the file). Bridged → not a fault.
  Unbridged → still HARD, because there the amount really is read as a tally.
- **Proofs: 22 → 26, all green.** `1 whole duck` → NOPRICE · the same duck in grams → clean ·
  `spring onions` as a count → NOPRICE · a count line on a count key (`lemon`) → EXACT ·
  gram-measured `apple` → **GREEN, not HARD** (repointed, not deleted).

## 2 · JAPAN — 21 LINES REWRITTEN, `NOPRICE` NOW 0

18 base lines and 3 inside version deltas. Replacement was done on the **whole record JSON**, so
ingredients, method prose and every delta string moved together — a delta left pointing at old text
is a dead delta and merge refuses. Examples: `4 large prawns` → **100g large prawns** ·
`3 spring onions` → **30g spring onion** · `1 cucumber` → **200g cucumber** ·
`1 clove garlic, grated` → **5g garlic, grated** · `1 lemon wedge` → **30g lemon, cut into a wedge** ·
`1 whole chicken leg, about 250g` → **250g whole chicken leg**.

📌 **A third class surfaced while measuring: an alias defeated by a prep tail.** `carrot, cut into
fine matchsticks` was **ABSENT** — `WK_ALIAS` has `carrot`→`carrots`, but the alias rung matches the
*whole cleaned name*, so the tail defeats it, and `carrot` singular is not a whole-word key. **9
records fixed by writing the plural.** ⚠️ This class is not Japan-specific and is worth a sweep:
any single-form alias plus a prep tail behaves the same way.

**Result:** Japan `NOPRICE` **0** · wrong-product **0** · absent 38 → **37** · exact 140 → **147** ·
and **41 of 50 records now render a cost, up from 35.** Tempura, tamagoyaki, oyakodon, zaru-soba,
tsukemono, kare-raisu, chirashizushi and kinpira-gobo all crossed the 0.8 gate on the truth.
The 9 that still fail, fail on **genuinely absent keys** — kombu, katsuobushi, sake, aonori,
okonomiyaki sauce, matcha, kinako, tenkasu, octopus, azuki, agar, nagaimo, wheat bran.

## 3 · JAPAN costPP — RECOMPUTED, IN THE RIGHT ORDER

**118 of 150 versions moved: 81 raised, 37 lowered.** Done *after* the line fixes, never before —
recomputing first would have baked the understatement in permanently.

**Two of the biggest hand-verified line by line rather than taken on trust:**

- `japan-castella` **R4 → R50.** Six eggs alone are R22.20, 200g castor sugar R16.80, honey R6.40,
  golden syrup R3.90 → R50.35 by hand, engine R50. **The old R4 was not stale, it was nonsense.**
- `japan-agedashi-tofu` **R22 → R74.** Silken tofu R34.20 + 400ml frying oil R19.20 (§31.3c prices
  consumed oil in full) + dashi, soy, mirin, daikon, ginger, spring onion → R73.70 by hand, engine R74.

⚠️ **One new soft warn, and it is yours to judge, not mine to fiddle with:** `japan-nukazuke`'s
budget fork now reads R12 against a cheaper R7 sibling, because cucumber at R21/kg came into the
sum. Merge's own doctrine says v1 not being cheapest is *sometimes correct* — a different vegetable
rather than a cheaper route. It prints and does not block. Left as authored.

## 4 · `merge.js` — THE addIng CONTRACT, CORRECTED NOT LOOSENED

`addIng` may now carry an optional `{after}` anchor. **This is not loosening an assertion to fit a
record:** `applyVersionDelta()` in core.js explicitly supports the anchor and MF140 documents it as
the contract, so the renderer and the spec agreed and **the validator was the one out of step.**
Added with it: a **DEAD ANCHOR** check, because an anchor pointing at nothing silently appends at the
end instead of inserting where the author meant — a quiet lie, so it is checked like any other dead
delta. `merge-selftest.js` gained a `green()` helper (the mirror of `red()`, needed the day a
validator turns out stricter than the thing it validates) and two proofs: **valid anchor must PASS,
dead anchor must FAIL.** Both green.

---

## 🩸 STILL OPEN — CHINA, AND IT IS NOW MEASURED

Not touched, because `wk_china.js` is pushed and wired and this was a Japan session:

1. **64 NOPRICE lines in China** — the same one-word class, and the reason `china-roast-duck` sits at
   coverage **0.31**, wonton noodle soup 0.71, chilli oil 0.73. `1 whole duck, about 2kg` is the
   worst: the card's own R96 is honest and the engine sees **nothing**. This is the single biggest
   coverage win left in the app.
2. **6 wrong prices** (was 7 — the wonton `thin egg noodles` HARD flag correctly downgraded once the
   rung learned about the bridge). All note-tail collisions: `garlic, whole cloves` → **cloves
   R1022** · `cream, replacing 60ml of the hot water` → water R0. §29.5: a wrong price is a bug and
   A7 does not shelter it.
3. **§26 debt: all 50 China records still have no per-version `diet[]`**, which merge warns on every
   China run. This is almost certainly the census line *"160 VEGAN recipes are INVISIBLE to the
   vegetarian filter"*. ⚠️ **It needs judgement per version and must not be auto-tagged** — a vegan
   shown a pork dish is a harm, not a bug. Worth deciding whether §26's "lane close" meant China's
   own close (past) or all five countries (later).
4. **Europe and South Africa carry the same NOPRICE class** — 39 and 33 lines — plus the alias-defeated-
   by-a-prep-tail class. One sweep would cover all of it now that the rung exists to find it.

## FILES — 7, all `node --check` clean

`sections/wk_japan.js` · `sections/prices.js` · `sections/worldkitchen.js` · `index.html` ·
`pricecheck.js` · `merge.js` · `merge-selftest.js`

**Gates:** merge japan **50 + 0 = 50 all pass** · merge china **50 + 0 = 50 all pass** (byte-identical,
no stray diff) · pricecheck selftest **26/26** · merge selftest **all born-RED, control GREEN** ·
Japan wrong-product **0**, NOPRICE **0** · doctor **10, the floor** · census no new RED.
