# PASTE-IN BLOCK — LEMONGRASS SOURCED · SKEWER ALIAS · THE LEMON FINDING
⚠️ **A BLOCK, NOT A REBUILT FILE.** Origin's `ASIA_PROGRESS.md` stops at RECORD 42 (Japan).

---

## ⚖️ LEMONGRASS — SOURCED BY TINA 30 Jul 2026. **THE KEY WAS ALREADY RIGHT.**
Her figures: **Woolworths fresh 30g pack R14.99** · fresh stalks R15–R20 per bunch · dried cut 75g R79.
- R14.99 ÷ 30g = **R499.67/kg**, and the live key is **`"lemongrass": 500`**. It was correct, and it is
  now **sourced rather than assumed** — attribution written into `prices.js:986` with a dated
  `PRICE_LEDGER.json` entry. **93 keys / 93 entries, check green.**
- ⚖️ Worth recording that this is the pleasant case: a number carried on trust turned out to be right when
  finally measured against a real shelf. The 176-prep-in-name figure did the same thing earlier today.
  Verification is not only for finding errors.
- 🟡 **`dried lemongrass` aliases to the fresh key but is a different product** — Tina priced dried at
  R79/75g = **R1053/kg**, roughly double. **Zero live ingredient lines use it**, so it is latent, not
  shipping. Flagged in-file, deliberately not "fixed" — adding a `dried lemongrass` key with no live
  consumer is churn.
- ⛔ **Landmine re-stated in the file itself:** `4 lemongrass stalks` → **R0.00, coverage 0.00**. A weight
  key cannot price a count line. **ALWAYS WRITE GRAMS.**

## ✅ WOODEN SKEWERS — ALIASED, NOT PRICED AGAIN
Tina named "standard wooden or bamboo skewers" as the structural substitute for a lemongrass stalk.
`wooden skewers` was **NULL** and would have rendered blank.
- Added `"wooden skewer_each"` / `"wooden skewers_each"` at **R0.25**, pointing at the *same* skewer price
  she sourced on 30 Jul. ⚖️ **Not a new price — the same object under a second name.** No new sourcing
  claimed and none invented.
- Verified: `4 wooden skewers` → **R1.00** · `4 bamboo skewers` → R1.00 · `25g lemongrass` → R13.00.

## ⛔ SUGARCANE — NOTED FOR THE VIETNAM LANE, NO KEY
Tina's other structural substitute: **sugarcane stalks**, traditional for meat-on-a-stick and adding a
sweet caramel note. Not acted on here, but recorded because it lands squarely in a future lane:
- 🔴 **`sugar cane` → `sugar` R35 — WRONG PRODUCT.** `sugarcane` (one word) is **NULL**.
  ⛔ Never write either in an ingredient line as things stand.
- 📌 **This matters for VIETNAM (P4):** *chạo tôm* is prawn paste moulded onto sugarcane — the identical
  technique to Sate Lilit on a different stalk. When that record is authored it will need either a
  sourced SA sugarcane price or an honest §29.1 refusal with a named substitute. **Flagged now so it is
  not discovered mid-record.**

---

## 🔴 THE LEMON FINDING — AND TWO CORRECTIONS TO MY OWN FRAMING OF IT
Probing lemon substitutes surfaced something live and cross-lane. **I described it wrongly twice before
measuring it properly, and both corrections are recorded here rather than quietly dropped.**

**Claim 1, WRONG:** *"`lemons` and `lemon zest` price a whole lemon at 96 cents — an 8× underprice."*
**Claim 2, WRONG:** *"this is a count-vs-weight bug."*

**What is actually true, measured across every recipe file:**

| lemon lines (excluding `lemon juice` and `preserved lemon`) | count |
|---|---|
| ✅ price correctly (≥ R1) | **29** |
| 🟠 priced but effectively free (R0 < x < R1) | **0** |
| 🔵 **blank — R0.00** | **35** |

- **Gram lines are fine.** `30g lemon` prices correctly because `AVG_WEIGHT_G` bridges a weight line onto
  the count key — the same mechanism that was verified this morning on `30g avocado`. The "effectively
  free" band is **empty**, which is the measurement that disproves my own claim.
- **Count lines are fine.** `1 lemon` → R8.00.
- **The real failure is 35 QUANTITY-LESS lines** — `lemon`, `lemon wedges`, `Lemon zest`,
  `lemon (serving)` — carrying no number at all, so nothing can price them. Plus a handful of
  prep-in-the-name cases like `1 lemon, cut in wedges` (`wk_china.js`), which is the carried 176-line
  problem biting in a measurable way.
- ⚖️ **This is the GAP rung, not the WRONG rung.** A blank announces itself; it does not render a
  plausible number. So **§29.5 does not force an immediate fix** and it batches like any other gap.
- ⛔ **NOT ACTED ON.** The 35 lines are concentrated in `wk_africa.js` and `wk_europe.js`, entirely
  outside the Indonesia lane. **Stability Rule 1: never edit a working section unless that IS the session
  purpose.** Logged with a hard number so a future pass can start from a measurement rather than a hunt.

⚖️ **THE LESSON, and it is the same one as the wowcheck hole earlier today:** the first two descriptions
were reasoned from how the keys *looked* rather than from running the cost engine over the actual lines.
Both were plausible and both were wrong, and the correct answer was three commands away. **Measure the
thing, then describe it.** Reasoning about a price table is not the same as pricing a line.

### 🩸 CARRIED — one item added, precisely quantified
🔴 lane-wide wrapper ruling open · 🔴 two `priceledger` holes · ~~wowcheck cannot audit a banked
record~~ **STRUCK** · 🔴 8 broken photo links in `spice.js` · **🆕 35 quantity-less lemon lines render
blank (Africa + Europe, plus 1 prep-in-name in China)** · whole-coconut price unsourced · 176
prep-in-name (JP 41 · CN 135) VERIFIED · 22 thin-why (CN 20 · JP 2) · 5 thin-leftover (CN) · 38 A-or-B
lines · China §26 diet debt · China 67 will-not-price · Europe 39 + SA 33 same class · `japan-nukazuke`
**RULING-SET, exclude from costPP sweeps** · `leftovers` no renderer · FLESH list missing octopus +
dashi · vegan-mistag warn cannot see version deltas · 🟠 REVIEW ledger unwritten ·
`mushroom`/`mushrooms` both live · three banana keys · `2 bananas` = R0.00 ·
`4 lemongrass stalks` = R0.00 · `sugar cane` → `sugar` R35 🆕 · China + Japan have no ASIA_LEDGER
entries · aonori 2g→0.5g undecided · A7 price-strike unwritten as §31.
