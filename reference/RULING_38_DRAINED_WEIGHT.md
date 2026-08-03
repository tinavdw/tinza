# ⚖️ §38 — TINNED GOODS ARE PRICED ON WHAT SURVIVES THE COLANDER
**Ruled 3 Aug 2026.** Append to `TINZA_RULINGS.md`.

⚠️ **VERIFY THE NUMBER BEFORE PASTING.** §37 was the last ruling recorded in the Thailand
cold start. `grep -n "^## §" TINZA_RULINGS.md | tail -5` and confirm §38 is genuinely free.
If it is taken, this becomes the next free number and every reference below moves with it.

---

## THE RULING

A tinned ingredient is priced on the weight that reaches the pot, not the weight printed
largest on the label. Which weight that is depends on **the method, not the tin**.

### Arm 1 — the liquid is used in the dish → NET WEIGHT STANDS
Coconut milk, chopped tomatoes, fish in oil where the oil goes in, beans in a stew that
keeps its liquor. The cook buys the liquid and eats the liquid. Net weight is the honest
denominator and nothing changes.

### Arm 2 — the liquid is poured away, drained weight IS printed → DIVIDE BY DRAINED
Water chestnuts, bamboo shoots, chickpeas rinsed before use, tinned sweetcorn, lychees.
The cook pays for water that goes down the sink, so the price per kilogram of *food* is
higher than the price per kilogram of *tin contents*.

⛔ **The ledger must record the tin size the price was derived from.** The drained fraction
is NOT constant across sizes on the same product line — the 227 g tin runs ~62 % drained
while the 540 g tin runs ~52 %. A price without its tin size cannot be re-derived, checked,
or corrected later.

### Arm 3 — the liquid is poured away, no drained weight printed, ingredient is AVAILABLE → A7 DEFER
Flag it for a shelf check. A7 defers missing prices, never wrong ones. Guessing a fraction
when 52 % and 62 % are both real on the same product line manufactures a wrong price and
calls it a correction.

### Arm 4 — the liquid is poured away, no drained weight printed, ingredient is SCARCE → ESTIMATE HIGH, MARK `est`
⭐ *Tina, 3 Aug.* A scarce ingredient's price has almost certainly drifted **up** since it
was last seen, and deferring forever serves the cook worse than a conservative guess. So:

- Estimate on the **expensive** side — of the price, and of the drained fraction.
- Mark the key `est` in the ledger.
- ⛔ **An `est` key may never underwrite a cost claim.** See the §37 interaction below.
- The `est` marker clears only on a shelf check.

⚖️ **Why the errors are not symmetrical.** A shopping-cost app that overstates leaves the
cook with change in her pocket. One that understates leaves her short at the till. Round
toward the till.

---

## ⚠️ THE §37 INTERACTION — THIS IS THE PART THAT BITES

§37 makes Budget a **claim**, and `claimcheck` asserts it arithmetically against the costPP
the engine derives. An `est` key will pass that assertion **mechanically while being false
in the world** — the watcher can only check that the arithmetic is consistent, not that the
input was ever true.

⛔ **Therefore: a record keying an `est` price carries that price for display and
shopping-total purposes ONLY. It may not claim cheaper, dearer, budget, or any comparative
cost language on any fork.**

This is the same failure §37 exists to catch, arriving through the back door. Estimated
prices belong in the shop-spend number, never in an argument on the card.

---

## 🔧 ACTION — TWO KEYS RE-PRICED UNDER ARM 4
*Filed here rather than as a fresh MF-brief: 33 briefs are already unfiled and `/law`
hygiene is flagging them.*

### `water chestnuts` R152 → **R275**, marked `est`
- **Tin:** Sun Phoenix 567 g. This is the tin actually on SA shelves — Pick n Pay plus the
  Asian grocers. ⛔ **NOT a 227 g tin**; any ratio derived from the 227 g line is wrong here.
- **Price basis:** R70 at a Cape Town specialist, allowed up to R80 for a rare import on a
  Pretoria shelf.
- **Drained fraction:** taken at the pessimistic 52 %, giving ~295 g of actual chestnut.
- **Derivation:** R80 ÷ 0.295 kg = R271, rounded up to R275.
- **Confidence:** real price anchor, estimated drained fraction.

### `bamboo shoots` R136 → **R220**, marked `est`
- **Tin:** Woolworths Bamboo Shoot Strips in Water **410 g**, own-brand — mainstream, not a
  specialist-only item like the chestnuts. ⚠️ Different tin size from the chestnuts. Do not
  assume one SA tin size across tinned Asian veg.
- **Price basis:** R45 assumed, top of the band for Woolies own-brand tinned veg. ⚠️ **No
  retailer would return a price.** This is the weaker of the two numbers and should be the
  first corrected on a shelf check.
- **Drained fraction:** 52 %, giving ~213 g.
- **Derivation:** R45 ÷ 0.213 kg = R211, rounded up to R220.
- **Confidence:** estimated price, estimated drained fraction. Weakest key in the pair.

⭐ **The Woolworths label proves the ruling rather than the ruling assuming the label.** Its
own instructions open with *drain and decant from the can*. The manufacturer already tells
the cook the water goes away.

### The shelf check that closes both
One photo of the back of either tin gives net weight, drained weight and the Pretoria shelf
price together. That clears the `est` marker and lifts the claim bar in one move.

---

## 🔭 WHAT §38 OPENS
The corpus has never been swept for tinned keys. Before this ruling can be called applied,
run a pass for every keyed ingredient that arrives in a tin and sort each into an arm.
Expect a long Arm 1 list (nothing changes), a short Arm 2 list (real corrections), and a
handful of Arm 3 and Arm 4 stragglers.

⚖️ **This also lands ahead of the app going multi-locale.** Fresh water chestnuts and fresh
bamboo shoots are ordinary in parts of Asia and Australia and almost unobtainable here. They
are **separate keys with no SA price**, deferring cleanly under A7 — never an alias pointing
at the tinned product. Same shape as the lamb ruling: name the thing, do not alias it to a
near-miss.
