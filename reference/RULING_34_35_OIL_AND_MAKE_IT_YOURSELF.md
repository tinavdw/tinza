# ⚖️ RULINGS §34 + §35 — PASTE-IN BLOCK FOR `TINZA_RULINGS.md`

**Ruled by Tina, 31 July 2026.** Paste after §33.
⚠️ **A BLOCK, NOT THE WHOLE FILE.** HEAD carries §33 and so does the local copy, so they agree
today — but the rule stands: never hand back a rebuilt canonical file without checking first.

---

## ⚖️ §34 · AN OIL WITH A TASTE IS AN INGREDIENT, NOT A SOLVENT

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

## ⚖️ §35 · HARD TO BUY, EASY TO MAKE → IT IS A SPICE CARD WITH A CLICKABLE LINK

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
