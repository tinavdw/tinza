# ⚖️ RULING §30 — COSTPP IS DERIVED, AND PRICES MUST HAVE A REFRESH ROUTE

**Ruled by Tina, 29 Jul 2026.** Paste after §29 in `TINZA_RULINGS.md`.

⚠️ **HANDED BACK AS A BLOCK, NOT THE WHOLE FILE, DELIBERATELY.** `TINZA_RULINGS.md` at origin
stops at **§25**. §26, §27, §28 and §29 exist only in Tina's local copy. Rebuilding "the complete
file" from HEAD would silently delete four rulings — the same shape as the ASIA_PROGRESS truncation
and the TINZA_SPRINT_PLAN split-brain. **Whenever handing back a canonical file, check whether HEAD
is behind the local copy first.**

---

## §30.1 — `costPP` IS A DERIVED NUMBER, NOT AN AUTHORED ONE

✅ **RULED.** `costPP` on a version is **computed from `PRICE_DB` via the app's own pricing path**.
It is not a figure the author estimates and types in. The alternative — costPP as an independent
authored guess — is **formally closed**.

**Why it was in doubt, and what settled it.** At Japan B8 the `tofu` key read R250/kg, so the 200g
in `japan-agedashi-tofu` was R50 of tofu alone, yet that record was banked at `costPP` **R22** —
with starch and 400ml of oil on top. Two readings were possible and they pointed opposite ways.
Tina ruled the first: costPP is meant to be derived, therefore **the file currently contains
hand-typed numbers that nobody has ever checked against the price list**.

⚖️ **THE CONSEQUENCE, STRAIGHT OFF THE LADDER (missing < duplicate < WRONG).** An unchecked costPP
is the worst rung. It renders as a number. It looks correct. It is the same failure as the `chilli
oil` → `chilli` R80 bug and the ungated `tierBar`: a silent hole that announces itself never.

⚖️ **THE FIX IS A TOOL, NOT A TYPING SESSION.** Re-typing ~300 costPP figures by hand would
reintroduce exactly the error being fixed, and would be stale the next time a price moves. What is
needed is a watcher: **`costcheck.js`**, built to the same design law as `pricecheck.js` —

> It does **not** reimplement pricing. It loads `sections/prices.js` + `core.js` + the section file
> into a vm sandbox and calls the app's **own** `wkParseIngredients()` / `wkCleanName()` /
> `wkPriceLookup()` over the base ingredient lines **and every version delta** (`addIng` +
> `swapIng.to`; `from` excluded — removed, not bought), then compares the computed figure to the
> authored `costPP`. **A watcher with a private model of pricing measures a program that does not
> exist.** If any gate file fails to load it REFUSES to report rather than silently checking two of
> three. Born-RED proofs, same as merge.js and pricecheck.js.

⚠️ **It must report a TOLERANCE BAND, not equality.** Rounding, pack-size hints and unpriced
(ABSENT) lines mean an exact match is not achievable and demanding one would make the tool noise.
Proposed: ✅ within 15% · 🟠 15–40% · 🔴 over 40% or where an ABSENT key is carrying material weight.
⚠️ **A record containing an ABSENT key cannot be scored at all** and must be reported as
UNSCOREABLE rather than as passing — otherwise a missing price silently becomes a low cost.

📌 **Sequencing: `costcheck.js` runs BEFORE any mass re-pricing.** Until it exists, nobody knows
whether costPP is wrong by R2 or by R30, and re-pricing blind would move numbers that were right.

📌 **Authoring is unchanged in the meantime.** Keep matching sibling records rather than diverging;
one record priced on a different basis is worse than a consistent file. The tool fixes them together.

---

## §30.2 — `tofu` RE-PRICED, AND THE ERROR SHAPE IS NOW NAMED

✅ **`"tofu": 250 → 171`** (per kg), Tina-sourced 29 Jul: Woolworths R59.99/350g = R171/kg;
Pick n Pay and Checkers ordinary 350–400g blocks R125–R171/kg; ~R250/kg **only** on specialist 200g
lines.

⚖️ **THE SHAPE: THE TOP OF A RANGE USED AS THE MID.** This is the third time. `"stock"` was 170
(a powder price) before it became 8 per litre. `"dashi"` was nearly quoted per kg of granules.
Now `tofu` was quoted at the specialist ceiling. **When sourcing a key, write down the range and
take the honest mid, and record both in the comment** — a single number with no range behind it
cannot be audited later.

---

## §30.3 — PRICES NEED A REFRESH ROUTE BEFORE LAUNCH, AND IT CANNOT BE 789 SHOPPING TRIPS

**The problem.** `PRICE_DB` holds ~789 hand-sourced keys stamped `PRICE_ASOF = 'July 2026'`.
Launch is October. Re-sourcing every key by hand is not maintainable once, let alone quarterly, and
an app whose whole positioning is honest costing cannot ship prices it cannot defend.

⚖️ **THE INSIGHT: TINZA DOES NOT NEED 789 TRUE PRICES. IT NEEDS 789 DEFENSIBLE ONES AND ONE HONEST
DATE.** A cost that is 6% out but carries a visible as-of date is a working feature. A cost that is
40% out and presented as exact is the retailer cage in miniature.

### THE THREE-TIER METHOD

**TIER 1 — THE ANCHOR SET (~40–50 keys, re-priced BY HAND).**
A small number of keys carry most of the money in most recipes: chicken, beef, pork, lamb, fish,
eggs, milk, cheese, butter, oil, flour, sugar, rice, maize meal, bread, potato, onion, carrot,
tomato, cabbage, tinned tomato, beans, tofu. These get walked and photographed on one shopping trip
and typed in. **This is one afternoon, not a project**, and Tina already does this weekly for
catering and for Fermentastic.

**TIER 2 — THE INDEXED REMAINDER (~740 keys, moved MECHANICALLY).**
Everything else is shifted by a published inflation figure between anchor refreshes, by script, per
category. It is approximate, it is transparent, and it is far better than being frozen.

**TIER 3 — THE HONESTY LAYER.**
`PRICE_ASOF` already exists and is already referenced by the cost footers. Surface it. Past a
certain age the app should widen to a band rather than pretend to a rand.

### THE SOURCES — BOTH FREE, BOTH SOUTH AFRICAN, BOTH MONTHLY

| Source | What it gives | How to use it |
|---|---|---|
| **PMBEJD Household Affordability Index** (`pmbejd.org.za`) | 44 basic foods, priced monthly across 52 supermarkets and 36 butcheries in Joburg, Durban, Cape Town, Pietermaritzburg, Mtubatuba, Mthatha and Springbok. Published as a free PDF at month end, with per-food month-on-month movement. | ⚠️ **AS AN INDEX, NOT AS LEVELS.** It is deliberately a low-income basket priced in townships, so its rand figures are NOT Woolworths shelf prices. Use its **rate of change per food** to move Tier 2, never its absolute numbers as Tinza's prices. |
| **StatsSA CPI, Food & non-alcoholic beverages** | The official national food inflation rate, monthly, with sub-indices. PMBEJD quotes it in every release, so one PDF gives both. | The fallback multiplier for any key PMBEJD does not track. |

⛔ **DO NOT SCRAPE RETAILER SITES.** It breaks their terms, it breaks the moment they change their
markup, and it contradicts the positioning: Tinza carries **no retailer names** by law, so anchoring
the price list to one chain would undo the neutrality that is the entire argument against the
retailer apps.

### THE PRE-OCTOBER SEQUENCE

1. **Build `costcheck.js`** — first, because until it runs nobody knows the size of the problem.
2. **Run the A7 price batch** — all deferred keys land at once, after Vietnam. `aburaage` and the
   MF152 list close here.
3. **September: one anchor walk.** ~40 keys re-typed by hand. This makes prices ~1 month old at
   launch instead of 3.
4. **Write `reprice.js`** — applies an index factor to a named subset and rewrites `PRICE_ASOF`.
   Small, and it makes step 3 repeatable quarterly instead of heroic.
5. **Surface `PRICE_ASOF` in the UI** before launch.

📌 **Not before launch, but write it down now:** a per-locale price layer already exists in the
LOCALE ruling. Whatever refresh route is built must be per-locale from the start, or locale #2
inherits South African rands.

---

## §30.4 — THE PRICE LIST HAS A RETAILER BASIS, AND IT MUST BE DECLARED

✅ **RULED (Tina, 29 Jul 2026).** Nearly every key in `PRICE_DB` was sourced at **one retailer**
(Checkers, mid-shelf). Until now this was **nowhere written down** — not in the file, not in the
rulings, not in MF152. A reader of `prices.js` had no way to know what the numbers meant.

⚖️ **A SINGLE BASIS IS A FEATURE, NOT A FLAW — PROVIDED IT IS DECLARED AND KEPT.**
- **It makes recipe-to-recipe comparison honest.** Every costPP in the app is measured with the same
  ruler, so "this dish is cheaper than that one" is a true statement even if both absolute rands are
  a little high. That is the number the user actually acts on.
- **It makes the absolute rand a known, directional bias.** A shopper at a cheaper chain pays less
  than Tinza says. Erring high is the safe direction for a budgeting tool — a plan that comes in
  under is a good surprise; one that comes in over is a broken promise.
- ⚠️ **It only holds while it stays consistent.** ⛔ **RE-PRICE AT THE SAME RETAILER.** An anchor
  walk done at a different chain injects a step-change across the whole file that looks exactly like
  inflation and is not — and it would corrupt the Tier-2 index at the same time, because the index
  assumes the level it is multiplying is comparable to the last one.
- If the basis is ever deliberately changed, change `PRICE_BASIS` in one place and **re-price the
  entire anchor set in the same pass.** Never key by key, or the file ends up half one shop and half
  another with no way to tell which is which.

📌 **`PRICE_BASIS` is now a constant at the top of `sections/prices.js`, beside `PRICE_ASOF`.**
Two facts, one place: *when* the prices are from, and *where*.

⚠️ **IT MUST NOT SURFACE AS A RETAILER NAME IN APP PROSE.** The no-retailer-names law is unchanged
and this does not bend it. The constant exists for the code and the audit trail. User-facing wording
is **"typical national supermarket prices"** plus the as-of date.

🩸 **CONSEQUENCE FOR §30.2 WORTH NOTING.** The `tofu` 250 → 171 re-price took Woolworths R59.99/350g
as its anchor. Tina's own Checkers figure for an ordinary 350–400g block was R125–R171/kg, so R171
sits at the top of the Checkers range as well and the number survives. **But the method slipped**:
a key on a Checkers basis should be sourced from Checkers. Flagged rather than reverted — the value
is right, the provenance was mixed, and mixed provenance is the thing this ruling exists to stop.

⚖️ **AND THE POINT THAT OUTLIVES THE RETAILER ARGUMENT:** which chain is objectively dearest is not
the question and is not worth resolving. **What matters is that it is ONE chain and that it is
WRITTEN DOWN.** An undeclared basis cannot be audited, cannot be re-walked correctly, and cannot be
indexed — which is the same failure as an undeclared unit (`stock` per kg vs per litre) and an
undeclared range (`tofu` at the ceiling vs the mid). Third instance of the same disease: **a number
without its provenance is not a measurement.**


---

## §30.5 — THE HIGH BIAS IS DELIBERATE (Tina, 29 Jul 2026)

✅ **RULED.** Pricing on the dearer side is **the chosen direction of error**, not a limitation to be
engineered away later.

> A plan that comes in **under** is a good surprise. A plan that comes in **over** is a broken
> promise. For a tool whose entire pitch is honest costing, those two are not symmetrical.

⛔ **DO NOT "IMPROVE" THIS BY AVERAGING ACROSS RETAILERS.** A blended basis would look more accurate,
would read better in any spec, and would **silently delete the safety margin** — leaving every
shopper at a dearer store short by an amount the app never warned them about. It would also break
§30.4, because a blend has no single shop to re-walk.

⚠️ **This is written down precisely because it looks like a flaw.** A future session — human or
otherwise — will eventually open `prices.js`, notice the basis is one dearer chain, and reach for
the average in good faith. **It is not a bug. It is the ruling.** Anyone changing it needs Tina's
word, not a tidy-up.

📌 Sits alongside the other deliberate asymmetries already ruled: budget fork **leads** and must be
cheapest (A3) · a **missing** price is honest and a **wrong** one is not (§29.5, MF137 ladder) ·
free tier gets the whole recipe and the gate sits on planning, not browsing.
