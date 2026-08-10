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

## ⚠️ §31.3 IS STRUCK AND REPLACED — SEE §31.3a / §31.3b

**Ruled 29 Jul 2026 by Tina, same session.** The original §31.3 read: *"a nukadoko, a sourdough
starter, a master stock, a jar of chilli oil and a batch of kaeshi are all capital: bought once,
used for months … the full purchase is charged to the record that builds it."*

**That put five things in one category that do not belong in one category**, and the Nukazuke
figures were the proof: a 500g bed charged in full against one cucumber, which is not "rather
more than less" but roughly a twentyfold distortion. A number that wrong stops reading as
cautious and starts reading as broken.

## ✅ §31.3a THE TEST — DOES IT SURVIVE THE RECIPE?

**RETAINED → it is equipment. It does not enter costPP.**
After the dish is made it still exists, in usable form, for the next one. A nukadoko, a
sourdough starter, a master stock. Nobody costs the potjie into the potjiekos.

**CONSUMED → it is an ingredient. It is priced per unit used, exactly as now.**
A jar of chilli oil and a batch of kaeshi are consumed — slowly, but consumed. 15ml of a
R490/L oil is R7 and the engine already gets that right unaided. There is nothing to amortise
here and the old rule did no work.

## ✅ §31.3b THE COST IS NAMED IN THE METHOD, NOT HIDDEN

Equipment is kept out of costPP **and stated in prose, with the real rand figure**, so the
shopper is not ambushed. §31.1 protects the cook at the till; a method line does that job
better than a costPP does. *"You buy a R40 bag of bran once and it feeds you for months"* is
information. *"R40 per cucumber"* is a number that tells a shopper nothing true about their
trolley and makes the card look broken.

⚠️ **THE LINE IS NOT PERFECTLY CLEAN, AND THE RULING SAYS SO RATHER THAN PRETENDING.**
A nukadoko is slowly depleted and topped up; a master stock is topped up every time it is used.
Both still sit on the equipment side, because what matters is that the thing persists between
cooks, not that it never diminishes. If a future record finds a case this genuinely cannot
place, that is a ruling, not a patch.

## ✅ §31.3c NUKAZUKE RECOMPUTED — NO LONGER PROVISIONAL

Under §31.3a the bed (bran · salt · kombu · chillies · water) leaves costPP and the versions
carry the vegetable and the salt rub, which is what a pickle actually costs once the bed exists.

| Version | was | now | working |
|---|---|---|---|
| 💰 Daikon to Ninjin (budget · vegan) | R11 | **R9** | daikon 150g @ R45/kg + carrots 80g @ R25/kg + salt |
| 🥒 Kyuri no Nukazuke (default · vegan) | R23 | **R10** | one cucumber, leaning high per §31.1, + the salt rub |
| 🥚 Tamago to Chīzu (vegetarian) | R19 | **R15** | egg R3.70 + cheddar 60g @ R187/kg + salt |

Budget still leads and is still cheapest (A3), by R1 — thin, but correctly ordered.
The one-time bed cost is now stated in-method: ~R40 for a 500g bag of bran plus a bag of salt.
`wheat bran` remains an ABSENT key — the rand figure is Tina-sourced prose, and §31.2 stands:
prose may name a route, an absence still does not become a number.

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

## ✅ §31.3 REVIEW CLOSED

The block that stood here recorded §31.3 as under review because charging a 500g bed in full
put ~R40 against one cucumber. **That review is now closed by §31.3a/b/c above.** Nukazuke's
costPP values are R9 · R10 · R15 and are no longer provisional.

The nuka-as-import worry that produced the original rule is separately gone under §31.4b:
wheat bran at R40–R80/kg, not an R350–950 import.

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
