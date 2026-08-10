# 📌 PASTE-IN BLOCK — MERGE THE STRANDED RULINGS §34 · §35 · §38

> **This is MF180 §0, pre-built.** Written 10 Aug 2026 by Claude (architecture).
> **Hand that does it: CODE.** ⚖️ Law 60. **Target file: `TINZA_RULINGS.md` (REPO ROOT).**
> ⚠️ **A BLOCK, NOT THE WHOLE FILE.** Never hand back a rebuilt canonical file. Paste, verify, stop.
> **RUN THIS BEFORE THE MF180 SPLIT.** Split first and the gap is baked in permanently.

---

## 🩸 WHY

`§34`, `§35` and `§38` are **absent from `TINZA_RULINGS.md`** — the file every AI reads via `/rule`.
They exist only in `reference/RULING_34_35_OIL_AND_MAKE_IT_YOURSELF.md` and
`reference/RULING_38_DRAINED_WEIGHT.md`, which nothing reads at session start.

**Drained weight is a rule Tina works to daily and `/rule` does not carry it.** A ruling that lives
only in a reference file is a ruling that will be broken by the next model, confidently, with no
warning. ⚖️ **Law 3 — a document that is wrong is silent.**

⛔ **Nothing below is new.** Every word is Tina's ruling, verbatim from the two source files. Heading
levels were adjusted to match the `## ⚖️ NN ·` house style of `TINZA_RULINGS.md`. **No rewording.**

---

## 🛑 STOP-CONDITION — VERIFY THE NUMBERS ARE FREE

```bash
grep -n "^## ⚖️ 34\|^## ⚖️ 35\|^## ⚖️ 38" TINZA_RULINGS.md
grep -in "drained" TINZA_RULINGS.md | head
```
**Any hit → the merge has already happened. Say so and STOP.** Expected today: zero hits on both.

---

## 📍 WHERE EACH BLOCK GOES

| block | insert |
|---|---|
| **§34 + §35** | immediately **after §33** *(`## 🌍 33 · A SOUTH AFRICAN WORD IS EXPLAINED…`, currently ~line 2276)*, **before §37** |
| **§38** | immediately **after §37** *(`## ⚖️ 37 · BUDGET IS A CLAIM, NOT A CATEGORY`, currently ~line 2424)*, **before §3m** |

⛔ **Do not renumber anything.** ⛔ **Do not touch `§3m`, `§3n`, `§3l`.**
📋 **REPORT ONLY:** `§36` appears nowhere in either source file or the canonical file. **Is §36 a
real ruling that was never written down, or a number that was skipped?** Tina rules. Do not fill it.

---
---

# ▼▼▼ BLOCK 1 — PASTE AFTER §33 ▼▼▼

## ⚖️ 34 · **AN OIL WITH A TASTE IS AN INGREDIENT, NOT A SOLVENT** — **RULED 31 Jul 2026 (Tina)**

> **Tina, 31 Jul 2026:** *"peanut oil is more expensive, but has a distinct taste, maybe give
> sunflower as alternative or use in budget if there is one."*

### §34.1 · THE TEST
**Does the oil carry flavour into the dish, or does it only carry heat?**
- **Carries FLAVOUR** — groundnut/peanut, coconut, sesame, olive, mustard, ghee → it is a **named
  ingredient**, keyed and priced as itself. ✅ **It is never silently aliased to a cheap neutral oil.**
- **Carries only HEAT** — "oil", "vegetable oil", "frying oil", "oil for frying" → alias to
  `sunflower oil` freely. Nothing is lost because nothing was there.

### §34.2 · ⛔ THE ALIAS THAT HID IT IS STRUCK
`"peanut oil" → "sunflower oil"` is **REMOVED from BOTH maps** (`core.js` and `worldkitchen.js` —
the price gate is prices.js AND both maps, never one). It made `nigeria-suya` **name one product
and charge for another**: the card said peanut oil, the cook buys it at ~R200/L, and the card
costed it at R48/L. ⚖️ **§29.2 — a slot is priced as the product a cook actually BUYS.**

✅ **DONE 31 Jul:** `"peanut oil": 200` added to `prices.js` (Tina-sourced: R99.99/500ml → R200/L;
the 250ml pack runs R74–84 = R296–336/L, so the 500ml is the sensible route). Alias
**`groundnut oil` → `peanut oil`** added to both maps, since groundnut is the ordinary SA name.
⚠️ **Labelled in `prices.js` as a RULED A7 EXCEPTION** — the second one taken, after `chilli oil`.
It qualifies because **§29.5: A7 defers MISSING prices, never WRONG ones**, and this was wrong and shipping.
✅ **REGRESSION MEASURED:** `peanuts` R128, `peanut`, `ground peanuts` and `sunflower oil` R48 all
unchanged; china 76✅ · japan 136✅/3🔴 · indonesia 126✅ · thailand 12✅ — **identical before and after.**

### §34.3 · THE CHEAP OIL IS AN ALTERNATIVE, SAID OUT LOUD — NEVER A SWAP DONE QUIETLY
Where a card **has versions**, the neutral oil belongs in the **budget fork**.
Where a card **has none** — `nigeria-suya` has no versions — it is named **in-method or in
chefNotes**, stating plainly *what the cook loses by swapping*. ✅ Done on suya.
🩸 **This is the difference between a stand-in and a potato bobotie.** "Use sunflower instead" is
honest. Printing "peanut oil" and charging sunflower is not.

### §34.4 · ✅ ALREADY CORRECT, RECORDED SO IT IS NOT RE-SOURCED
> **Tina:** *"Coconut oil is a real product, like coconut milk, and they make use of those 2 a lot
> in eastern cooking."*

**Agreed, and it was already right:** `coconut oil` **R80/L** is a real key in `prices.js`, live in
**19 records** (Sri Lanka ×18 + `indonesia-sambal-matah`). ✅ **Nothing to add.** It is exactly the
§34.1 shape — a flavour oil, keyed as itself, never aliased away.

---

## ⚖️ 35 · **HARD TO BUY, EASY TO MAKE → IT IS A SPICE CARD WITH A CLICKABLE LINK** — **RULED 31 Jul 2026 (Tina)**

> **Tina, 31 Jul 2026:** *"preserved radish is difficult to get hold off, but very easy to make,
> maybe a clickable link to Spice, to make yourself, as the same case with pickled ginger which
> they use a lot there as well, especially with sushi."*

### §35.1 · THE RULING
An ingredient that is **hard to buy in South Africa but easy to make at home** gets:
1. **a real card in `SPICE_DB`**, authored to `/wow`, and
2. **a clickable link from every recipe that uses it**, so the cook is never dead-ended.

⚖️ **THIS IS THE THIRD ANSWER TO §29, AND IT IS THE ONE §29 COULD NOT GIVE.** §29.1 offered only
two outcomes: a bought product fills the slot *(key it)*, or nothing on a shelf does *(fail loud,
no cost)*. **§35 adds: nothing convenient on a shelf, but a jar you can make.** Master Stock stays
in §29's "no bought equivalent" bucket. Preserved radish moves here.

### §35.2 · ✅ THE MACHINERY ALREADY EXISTS — THIS IS NOT A BUILD
`core.js:3626` already dispatches ingredient names to Spice cards via
`RECIPE_SOURCES.spice` / `openSpiceRecipe(...)`, with **19 links live** — `pesto`,
`apricot chutney`, `banana sambal`, `crispy chilli oil`, `brown gravy` and more. **The salad →
dressing link is the same mechanism.** Adding one is a line in that map plus a Spice card.
✅ And `SPICE_DB` already carries **190 cards including `fermented-chilli-mash` and `lime-pickle`**,
so pickles and ferments are an established shelf there, not a new category.

### §35.3 · THE TWO CARDS THIS RULING CREATES — ⏳ NOT YET AUTHORED
| ingredient | status today | what §35 says |
|---|---|---|
| **preserved radish** (chai poh / caipu) | falls to **fresh `radish` R108** · 0 records use it | Spice card **+** link. Tina's shelf price R58–60/500g ≈ R118/kg still logged in MF152 for the A7 batch, so **both routes exist**: buy it, or make it. |
| **pickled ginger** (gari / beni shoga) | key **R280/kg** already live, used across the Japan sushi cards | Key stays *(§29.2, the store route)*. The Spice card is the **second** route, not a replacement. |

⚠️ **A SPICE CARD DOES NOT DELETE A PRICE KEY.** They answer different questions — *what does it
cost me to buy?* and *how do I make it?* Two numbers, two questions, both correct. **Same shape as
§29.2**, where the staple card keeps its cheaper from-scratch cost while the ingredient slot is
priced as the bought product.

### §35.4 · 🩸 WHO AUTHORS THESE
⚖️ **Law 11 — no model authors a ferment.** Both cards are salt-percentage, time and temperature
work with a safety note *(`/wow` §4, the ferment clause)*, and that is **Tina's own field, not a
thing to be inferred.** ⏳ **The cards are scoped, not written.**

# ▲▲▲ END BLOCK 1 ▲▲▲

---
---

# ▼▼▼ BLOCK 2 — PASTE AFTER §37, BEFORE §3m ▼▼▼

## ⚖️ 38 · **TINNED GOODS ARE PRICED ON WHAT SURVIVES THE COLANDER** — **RULED 3 Aug 2026 (Tina) · CLARIFIED 6 Aug 2026**

### §38 THE RULE

A tinned ingredient is priced on the weight that reaches the pot, not the weight printed
largest on the label. Which weight that is depends on **the method, not the tin**.

#### Arm 1 — the liquid is used in the dish → NET WEIGHT STANDS
Coconut milk, chopped tomatoes, fish in oil where the oil goes in, beans in a stew that
keeps its liquor. The cook buys the liquid and eats the liquid. Net weight is the honest
denominator and nothing changes.

#### Arm 2 — the liquid is poured away, drained weight IS printed → DIVIDE BY DRAINED
Water chestnuts, bamboo shoots, chickpeas rinsed before use, tinned sweetcorn, lychees.
The cook pays for water that goes down the sink, so the price per kilogram of *food* is
higher than the price per kilogram of *tin contents*.

⛔ **The ledger must record the tin size the price was derived from.** The drained fraction
is NOT constant across sizes on the same product line — the 227 g tin runs ~62 % drained
while the 540 g tin runs ~52 %. A price without its tin size cannot be re-derived, checked,
or corrected later.

#### Arm 3 — poured away, no drained weight printed, ingredient is AVAILABLE → A7 DEFER
Flag it for a shelf check. A7 defers missing prices, never wrong ones. Guessing a fraction
when 52 % and 62 % are both real on the same product line manufactures a wrong price and
calls it a correction.

#### Arm 4 — poured away, no drained weight printed, ingredient is SCARCE → ESTIMATE HIGH, MARK `est`
⭐ *Tina, 3 Aug.* A scarce ingredient's price has almost certainly drifted **up** since it
was last seen, and deferring forever serves the cook worse than a conservative guess. So:

- Estimate on the **expensive** side — of the price, and of the drained fraction.
- Mark the key `est` in the ledger.
- ⛔ **An `est` key may never underwrite a cost claim.** See the §37 interaction below.
- The `est` marker clears only on a shelf check.

⚖️ **Why the errors are not symmetrical.** A shopping-cost app that overstates leaves the
cook with change in her pocket. One that understates leaves her short at the till. Round
toward the till.

### §38.1 · ⚠️ THE §37 INTERACTION — THIS IS THE PART THAT BITES

§37 makes Budget a **claim**, and `claimcheck` asserts it arithmetically against the costPP
the engine derives. An `est` key will pass that assertion **mechanically while being false
in the world** — the watcher can only check that the arithmetic is consistent, not that the
input was ever true.

⛔ **Therefore: a record keying an `est` price carries that price for display and
shopping-total purposes ONLY. It may not claim cheaper, dearer, budget, or any comparative
cost language on any fork.**

This is the same failure §37 exists to catch, arriving through the back door. Estimated
prices belong in the shop-spend number, never in an argument on the card.

### §38.2 · ⚖️ THE TEST THAT IS ACTUALLY USED — **BRINE vs SAUCE** *(Tina, 6 Aug 2026)*

> *"we should always use drained weight for things that are in brine, not for something like baked beans that are in a sauce"*

⚖️ **THIS SHARPENS ARM 1 / ARM 2 AND IS THE TEST TO REACH FOR FIRST.**
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

### §38.3 · 🔭 WHAT §38 OPENS — **STILL OPEN**

⛔ **NOT A RULING QUESTION ANY MORE — A LABEL QUESTION.** Eleven keys need the drained weight
printed on the back of the tin, and each needs the tin size it was derived from recorded in the
ledger. **Several currently do not have it.**
✅ **Eleven photos of eleven tin backs closes this permanently.**

⚖️ **This also lands ahead of the app going multi-locale.** Fresh water chestnuts and fresh
bamboo shoots are ordinary in parts of Asia and Australia and almost unobtainable here. They
are **separate keys with no SA price**, deferring cleanly under A7 — never an alias pointing
at the tinned product. Same shape as the lamb ruling: name the thing, do not alias it to a
near-miss.

> 📦 The two re-priced keys (`water chestnuts` R275 `est`, `bamboo shoots` R220 `est`, with their
> full derivations) and the 6 Aug corpus classification — 11 Arm 2 keys, 9 Arm 1 keys, and the four
> that are not §38 at all — live in `reference/RULING_38_DRAINED_WEIGHT.md`.
> **⚠️ That file is EVIDENCE, not a second rulings file. This section is canonical.**

# ▲▲▲ END BLOCK 2 ▲▲▲

---
---

## ✅ THE PROOF — Tina runs this

```bash
grep -c "^## ⚖️ 34\|^## ⚖️ 35\|^## ⚖️ 38"  TINZA_RULINGS.md    # must be 3
grep -ci "drained"                          TINZA_RULINGS.md    # must be NON-ZERO
grep -c  "^## "                             TINZA_RULINGS.md    # must be exactly 3 MORE than before
node tinza-doctor.js                                            # RED count MUST NOT have grown  ⚖️ Law 51
node tinza-census.js                                            # recipe count MUST be identical
```

**No `sections/` file changes. No tool changes. The app does not change.**
This edit adds text to one markdown file that nothing in the app loads.

**COMMIT:** `rulings: merge stranded §34, §35, §38 into the canonical file`

---

## 📋 AFTER THE MERGE — TWO THINGS TO REPORT, NOT DO

1. **`§36`** — absent everywhere. Real ruling never written, or a skipped number? **Tina rules.**
2. Once merged, `reference/RULING_34_35_OIL_AND_MAKE_IT_YOURSELF.md` and
   `reference/RULING_38_DRAINED_WEIGHT.md` become **evidence files**, and are eligible for
   `Archive/` under MF179 §2e — **but only after the greps above pass.**
   ⛔ **Do not archive them in the same commit as the merge.** If the merge is wrong, they are the
   only copy.
