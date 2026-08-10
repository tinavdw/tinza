## 🏺 29 · A STAPLE THAT IS ALSO AN INGREDIENT — **RULED 29 Jul 2026 (Tina)**

⚠️ **APPEND THIS AFTER §28. DO NOT REBUILD THIS FILE FROM HEAD.** The repo at HEAD stops at
**§25** — §26, §27 and §28 exist only in Tina's local copy. Rebuilding "the complete file" from a
clone would silently delete three rulings. Same shape as the `ASIA_PROGRESS` truncation and the
`TINZA_SPRINT_PLAN.md` split-brain. ⚖️ **Whenever handing back a canonical file, check whether
HEAD is behind the local copy FIRST.**

*Origin: §27 arrived as a pricing question. `dashi` and `chilli oil` were both absent from
`PRICE_DB` while both are real staple CARDS with their own costed versions.*

---

### ⚖️ 29.1 · THE TEST — DOES A REAL BOUGHT PRODUCT FILL THE SLOT?

A staple that is an ingredient of other cards gets a `PRICE_DB` key **if and only if a real bought
product fills that slot.**

| staple | key? | why |
|---|---|---|
| Dashi | ✅ | instant hon dashi granules are an ordinary shelf item |
| Chilli oil | ✅ | an ordinary jar |
| Master Stock | ❌ | nothing on a shelf is a master stock |

Master Stock **fails loud**. "No bought equivalent" means **"no cost"** until a sub-recipe costing
engine exists — it does not mean "guess something close."

---

### ✅ 29.2 · PRICE THE INGREDIENT SLOT AS THE **STORE ROUTE** *(RULED by Tina, 29 Jul)*

A staple appearing inside another card's ingredient line is costed as **the product a cook BUYS** —
never as the sum of the staple card's own ingredients.

The staple **CARD** is unaffected. It keeps pricing its own from-scratch route, which stays lower.
**That gap is the argument for the card existing.** Two numbers, two questions, both correct:
*"what does it cost me to use dashi in this dish?"* and *"what does it cost me to make dashi?"*

⛔ The alternative — slots priced from the staple's own record — is **FORMALLY CLOSED.** It needs a
sub-recipe costing engine, which is a **BUILD, not a ruling**, and it is not happening before launch.

---

### 🔴 29.3 · A DASHI KEY IS OMNIVORE, AND IT IS LOAD-BEARING — **CLAIM CORRECTED 29 Jul 2026**

Hon dashi contains bonito extract. `dashi` is already on the hidden-animal dictionary. Therefore a
`dashi` price key is an **omnivore** key, and any card claiming vegan or vegetarian while carrying a
plain `dashi` line is mis-tagged.

⚠️ **The original 29.3 recorded "MEASURED CLEAN — all 6 records with a plain dashi base line ... all
7 forks swap explicitly." That measurement is superseded.** Re-run mechanically against
`wk_japan.js` at **20 records** on 29 Jul, it does not hold. The word doing the damage was
**"explicitly"**. Corrected finding:

**9 records carry a plain `dashi` base line. 11 vegetarian/vegan forks hang off them, in 3 states:**

| state | count | records | verdict |
|---|---|---|---|
| ✅ formal `swapIng` → `kombu and shiitake dashi` | 6 | incl. Takoyaki, Nikujaga, Zaru Soba | correct |
| 🟠 handled in `addStep` **prose only** | 3 | Okonomiyaki *(veg)* · Chawanmushi *(vegan)* · Tempura *(vegan)* | **the cook is told, the machine is not** |
| 🔴 handled **nowhere** | 2 | Tamagoyaki — *Plain Sweet* and *Layered with Nori*, both tagged vegetarian | **genuine mis-tag: bonito in a vegetarian card** |

⚖️ **THE RULING THAT FOLLOWS: PROSE IS NOT A SWAP.** A fork whose method says *"use the kombu and
shiitake dashi"* while its ingredient list still reads `dashi` has told the human and lied to every
machine downstream. Three things read the ingredient line and none of them read the method:
the **price gate** (costs the omnivore product), the **Node diet tagger** (tags the fork animal),
and any future **allergen or filter pass**. A delta is the only place a swap counts.
**Every dashi swap must be a `swapIng`, and the prose may repeat it but may not replace it.**

⚠️ **The Node diet tagger must treat `dashi` as animal and `kombu and shiitake dashi` as NOT — and
it cannot substring-match between them**, since the second contains the first. Same collision shape
as radish vs daikon.

🩸 **OPEN, NOT RULED — Tamagoyaki.** Two vegetarian forks carry bonito. This is not an authoring
question, it is a correctness bug in a banked B3 record, and it wants Tina's call on the fix: swap
the dashi in both forks, or drop the vegetarian tag. **Not decided silently.**

---

### 🍲 29.4 · THE THREE HONEST DASHI ROUTES *(Tina)*

1. **Instant granules** — the ordinary route, and the one 29.1 prices.
2. **Light chicken or vegetable broth with a splash of soy** — the pantry route. **Name it in-method
   rather than pretending**; a cook without dashi is not a cook who has failed.
3. **Shiitake steeping liquid** — ✅ **THE VEGAN ROUTE**, and already what every Japan vegan fork
   uses. Kelp and dried mushroom both predate the industrial bonito flake by centuries, so this is
   the older larder rather than a modern substitution.

⏳ **STILL NEEDED, ONE NUMBER:** the SA shelf price of **instant hon dashi granules.** The route is
ruled; the price is **NOT sourced. DO NOT GUESS IT.** `dashi` now appears in 9 of 20 Japan records.

---

### ⚖️ 29.5 · A7 DEFERS **MISSING** PRICES. IT DOES NOT DEFER **WRONG** ONES.

Found because `chilli oil` had no key and fell through `wkPriceLookup()`'s last rung to `chilli`
**R80/kg — a fresh-chilli price, roughly 6× under** — live in the pushed and wired `wk_china.js`
across **24 mentions**, plus Japan's Gyoza. Invisible, because the card renders a number and the
number looks fine.

A7 exists to batch the **work**, not to protect a wrong number that is already shipping.

- **A MISSING price is a GAP.** Renders blank. Announces itself. Waits for the batch. **A7 applies.**
- **A WRONG price is a BUG.** Renders as a number. Looks correct. Ships. **A7 does NOT apply — fix
  it when found.**

Straight off the MF137 ladder: **missing < duplicate < WRONG.** Same reasoning as the tierBar leak —
the thing that announces itself with nothing is the dangerous one.

✅ **ACTED:** `"chilli oil": 490` added to `sections/prices.js`, labelled in the file as **the ONE A7
exception taken.** Everything genuinely missing still waits for the batch.

🟡 **CAVEAT ON THE NUMBER, on the record:** the two sources are arguably different products —
Woolworths R48.95/100ml is a chilli-flavoured *olive* oil, Banhoek R125/250ml is an SA artisan
condiment, and neither is Chinese *la yóu*. They agree at ~R490/L, which is why it stands, and
R490 prices **the bought condiment** per 29.2. The China Chilli Oil staple card still prices its own
from-scratch route, which is far lower — and that gap is 29.2 working exactly as intended.

---

### 📌 29.6 · SIDE-FINDINGS LOGGED, NOT RULED

- ⚠️ `mushroom` **R165** and `mushrooms` **R90** are BOTH live keys at different prices.
  Pre-existing, not this lane.
- ⚠️ `neutral oil` belongs in **`WK_ALIAS` (worldkitchen.js ~486)**, not `PRICE_ALIAS` (core.js).
  `wkPriceLookup()` reads `WK_ALIAS` only, and `"oil"` does not rescue `"neutral oil"` — the match
  is exact on the cleaned name. Fixed locally; **not at HEAD.**
- ⚖️ **`ASIA_SCHEMA_KEYS.json` MUST NOT BE REGENERATED.** It is frozen from `wk_china.js` @ 43
  records, and its own note rules that every country validates against **that** list, *never against
  its own record 1* — letting each file set its own precedent is how five near-identical files drift
  apart **(Law 50)**. Regenerating it from Japan's record 1 broke `merge.js` on 29 Jul. The habit is
  **STRUCK**. Same inversion as Events §2.2 and the potato-starch alias: **the file was right and the
  note was the bug.**
