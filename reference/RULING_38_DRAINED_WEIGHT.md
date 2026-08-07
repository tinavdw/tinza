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

---

## ⚖️ CLARIFICATION — TINA, 6 AUG 2026: **BRINE vs SAUCE**

> *"we should always use drained weight for things that are in brine, not for something like baked beans that are in a sauce"*

⚖️ **THIS SHARPENS ARM 1 / ARM 2 AND SHOULD BE THE TEST THAT IS ACTUALLY USED.**
The original wording asks *"is the liquid used in the dish"* — which is a judgement about the
RECIPE and can differ card to card for the same tin. **Brine versus sauce is a property of the
TIN.** It can be answered standing in the aisle, it gives the same answer every time, and it
does not need the recipe in front of you.

| the tin is packed in | arm | basis |
|---|---|---|
| **brine, water, oil or SYRUP — anything you pour away** | **Arm 2** | **DRAINED weight** |
| **a sauce, or a liquid that IS the food** | **Arm 1** | net weight stands |

⚖️ **SYRUP RULED IN, 6 Aug 2026.** Tina: *"its a difficult one, mostly used with syrup, but not
always, best to use drained weight."* ✅ **That collapses the test to one question and makes it
easier, not harder: DOES THE LIQUID GO IN THE POT, OR DOWN THE SINK?** Down the sink — brine,
water, oil, syrup, no exceptions — and you divide by drained. In the pot, and net stands.
⚖️ She chose the honest direction under §30.5 as well: drained is the DEARER per-kg, and a plan
that comes in under is a good surprise.

---

## 📏 THE CORPUS CLASSIFIED AGAINST IT — 6 Aug 2026

### 🚿 ARM 2 · POURED AWAY → NEEDS A DRAINED WEIGHT OFF THE LABEL (11 keys)
`bamboo shoots` R136 *(410g can)* · `water chestnuts` R152 *(567g can)* · `artichoke hearts` R150
*(400g tin)* · `tinned asparagus` R197 *(330g)* · `butter beans` R68 *(400g)* · `black beans` R50
*(400g)* · `sugar beans` R78 *(410g)* · `tinned cannellini beans` R80 *(400g)* · `kidney beans` R35
*(already marked ESTIMATE)* · `tuna` R120 *(already marked ESTIMATE)* · **`fruit cocktail` R98**
*(410g tin, syrup — ruled in 6 Aug)*

⚠️ **ALL TEN ARE CURRENTLY DIVIDED BY THE NET TIN WEIGHT.**

🩸 **ONE comment misdescribed its own arithmetic:** `bamboo shoots` said *"priced on DRAINED
weight"* and then divided R55.99 by the 410g **net** tin. ✅ **Wording corrected 6 Aug; the
NUMBER was deliberately left alone**, because moving it needs a label. **A comment that
misdescribes its own maths is worse than no comment — the next reader trusts it.**

✅ **AND ONE GOT IT RIGHT AND SAW THIS COMING.** `water chestnuts`, written 2 Aug, already says:
*"price divided by the weight printed on the tin… OPEN, NON-BLOCKING: if a tin prints a SEPARATE
drained weight well under 567g, this key is understated and so is bamboo shoots. Both would move
together, in one pass, never key by key. Worth an eyeball next shop."*
⚖️ **Tina's brine/sauce ruling is the answer to the question that key asked four days earlier.**
That is what a good comment does — it leaves the door open instead of pretending to be finished.

### 🍲 ARM 1 · SAUCE / THE LIQUID IS THE FOOD → NOTHING CHANGES (8 keys)
`baked beans` R41 · `tinned beans` R41 · `creamed corn` R59 · `caramel treat` R125 ·
`chicken broth` R100 · `coconut milk` R63 · `coconut cream` R83 · `tomato puree` R68 ·
`chopped tomatoes` R66 — ⚖️ the juice in a tomato tin **is** the product and goes in the pot.

### ⛔ NOT §38 AT ALL — CHECKED, AND THREE OF THESE WERE NEARLY MISCLASSIFIED
`chickpeas` R68 — **R34 per 500g is a DRIED pack, not a tin.** ·
`pineapple` R25 — priced **"each"**, fresh. · `peaches` R35 · `lentils` R62 — dried.
⚖️ **Read the comment before classifying a key. Three of these were guessed wrong first time.**

### ✅ SYRUP — RULED 6 Aug 2026, NO LONGER OPEN
`fruit cocktail` R98 *(410g tin)* is the **only** syrup-packed tin key in the file. Checked and
ruled out as fresh, not tinned: `pears` R23 *(R35/1.5kg)* · `apricots` R36 *(comment says FRESH)* ·
`peaches` R35 · `cherries` R180 · `pineapple` R25 *(priced "each")*.
⚖️ `condensed milk` R119 and `evaporated milk` R100 are **Arm 1** — the liquid IS the product.

---

## ▶️ WHAT THIS MAKES THE JOB

⛔ **NOT A RULING QUESTION ANY MORE — A LABEL QUESTION.** Eleven keys need the drained weight
printed on the back of the tin. §38 already warns the drained fraction is **not constant across
sizes on the same product line** *(the 227g tin runs ~62% drained)*, so each key needs the tin
size it was derived from recorded in the ledger. **Several currently do not have it.**

✅ **Eleven photos of eleven tin backs closes this permanently.**
