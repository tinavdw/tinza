# ⚖️ §31 — RATHER MORE THAN LESS (COSTING DIRECTION)

**Ruled 29 Jul 2026 by Tina. Paste after §30. Handed back as a BLOCK, not the whole
TINZA_RULINGS.md — origin is behind Tina's local copy and rebuilding the file from HEAD
would silently delete rulings. Same precaution as the §29 handback.**

---

## §31.1 THE RULE

**Where a price must be estimated, estimate HIGH.**

A shopper who budgeted R80 and spends R60 has a good day. A shopper who budgeted R60 and
spends R80 is short at the till with a trolley full of food. The two errors are not
symmetrical, so the estimate must not be centred — it must lean.

This applies to: `// ESTIMATE` keys in prices.js, pack-size rounding, version costPP,
and any figure Tina has not personally sourced from a shelf.

## §31.2 THE BOUNDARY — ESTIMATES ROUND UP, ABSENCES STAY ABSENT

§31.1 does **not** license inventing a number to fill a gap.

- A **missing** price renders blank and announces itself. It stays missing. A7 applies.
- An **estimated** price renders as a number and gets trusted. It rounds up.
- A **wrong** price renders as a number and looks correct. It is a bug. §29.5 applies.

Rounding an ABSENT key up to "something, to be safe" converts an honest gap into a
guessed number — which is the aburaage→tofu failure wearing a helpful face. Do not.

## §31.3 REUSABLE BEDS AND KEEPING-STOCKS ARE CHARGED IN FULL, NOT AMORTISED

A nukadoko, a sourdough starter, a master stock, a jar of chilli oil and a batch of kaeshi
are all **capital**: bought once, used for months. There is no sub-recipe costing engine and
none is being built before launch (§29.2), so there is no mechanism to spread the cost.

**Ruled: the full purchase is charged to the record that builds it.** Per §31.1, the
over-cost is the safe direction — the cook buys the bag once and is never short. The card's
method must say plainly that the bed keeps, so the number is not read as a per-serving cost.

⚠️ OPEN CONSEQUENCE: Nukazuke's three costPP values (R11 · R23 · R19) were written with
`nuka` at R0. They are provisional until a nuka price exists and must be recomputed under
§31.3 when it does — the bed is 500g, and at any real bran price that moves all three.

## §31.4 "NOT FINDABLE ONLINE" IS NOT "NOT AVAILABLE"

**⚠️ AMENDED 29 Jul 2026 by Tina, same day it was ruled. The original no-substitute clause
is STRUCK — see §31.4b. The clause below is what stands.**

Japanese, Chinese and Indian specialty grocers in Gauteng and the Cape run on word of mouth,
WhatsApp groups and walk-in trade. They have no web presence, no price list and no SEO. A
failed search proves nothing about the shelf.

**Ruled: an ingredient may be authored as available, and sourced honestly in-method, on
Tina's trade knowledge alone — with no PRICE_DB key created.** `nuka` and `aburaage` are here,
they are simply not on a supermarket shelf or a search engine. Name the route, create no key,
price stays ABSENT.

## ⚠️ §31.4b THE NO-SUBSTITUTE CLAUSE IS STRUCK — AND WHY IT WAS WRONG

The original §31.4 ruled that wheat bran must **not** stand in for nuka, on the reasoning
that it "makes a different pickle, not a cheaper nukazuke," and that substituting it would be
disguising under the Shelf-WOW Law. **That was reasoned from culinary first principles and
stated more firmly than the evidence supported. It is struck.**

Fermenters who have built nukadoko from both rice bran and wheat bran report the finished
pickles taste closely alike, and that wheat bran is the standard fallback where rice bran is
hard to source. A practitioner who has made both outranks a first-principles argument and
outranks a market-research page.

✅ **RULED: `nuka` moves into the ordinary NOT-IN-SA family** alongside warabi starch → cornflour
and gobo → carrot + parsnip. Lead on the accessible route, name the real thing in-method,
create no key. Nukazuke's base ingredient line is now `wheat bran`; rice bran is named in the
method as the original and the upgrade.

✅ **ALSO RULED, from the same sourcing:** heat-toasted or heat-stabilised bran **does** work.
Stabilisation kills the lactic bacteria living on the bran's surface, but almost all of the
culture arrives from the vegetables and the cook's hands, so the bed still establishes — just
slower. Allow an extra week of sutezuke. This applies equally to bran the cook toasts at home,
and the method now states the trade-off rather than recommending the toast unconditionally.

⚖️ **THE PROCESS LESSON, which is the part worth keeping.** A ruling written the same day it
was needed, on reasoning rather than evidence, survived less than twenty-four hours. Where a
ruling turns on a factual claim about how an ingredient behaves — not on policy, not on
Tina's preference — the claim gets checked before the ruling is filed, not after. Compare
the sushi safety line, where the freezing standard was verified before it was approved.

## ⚠️ §31.3 IS NOW UNDER REVIEW AS A CONSEQUENCE

§31.3 (charge reusable beds in full) was ruled while nuka was assumed to be an import at
R350–950/kg, where charging in full would have put ~R175–475 onto a single serving — roughly
a 90x distortion. Wheat bran at R40–R80/kg shrinks the problem by an order of magnitude but
does not remove it: a 500g bed still charges ~R40 against one cucumber.

⛔ **Nukazuke's costPP figures were NOT changed in this pass.** §31.3 needs either a carve-out
for capital purchases or a rethink, and that is Tina's ruling, not a patch. The three values
stay provisional.

---

## 📋 IN-METHOD SOURCING LINE — NUKAZUKE

⚠️ **The original block here is STRUCK under §31.4b** — it led on rice bran as the only route.
The replacement is already written into `wk_japan.js` at `japan-nukazuke` and leads on wheat
bran, names nuka as the original and the upgrade, warns off animal-feed grade, and states the
toasted/stabilised trade-off honestly. Read it there rather than keeping a second copy here —
a duplicate is the split-brain shape.

## 📋 IN-METHOD SOURCING LINE — ABURAAGE (drop-ready, same shelf)

> Aburaage — thin tofu sheets, twice-fried until they puff hollow — comes from the same
> counter as the bran, and the same rule applies: an Asian grocer will have it frozen, a
> supermarket will not. Frozen is normal and correct; it is how it is sold in Japan too.
