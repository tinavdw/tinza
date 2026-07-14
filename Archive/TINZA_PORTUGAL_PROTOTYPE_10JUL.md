# TINZA — Portugal-Prototype + Leftovers Standard · 10 Jul 2026
### Fold into TINZA_WK_STANDARD.md (/wk) and WOW_STANDARD.md (/wow). Confirmed by Tina 10 Jul.

---

## ★ DECISIONS LOCKED (10 Jul)
1. **Launch scope = SA-FIRST, locked.** Oct ships SA-only live (naming + metric + rand costing). Locale field + sparse override map built now (enum open); zero non-SA content before Oct; UK/US/EU fast-follow.
2. **Salted-cod price = R450/kg** (bacalhau import; honest price, not the SA-surfaced default). Substitute ladder: salted-snoek ~R180 · salted-hake ≈ fresh-hake key + few rand · fresh-hake/tilapia = existing key.
3. **WK fix-queue = greenlit for Code** (incl. Tier-1 leftovers fix). Boundaries: Code not touch spice.js; Code not author the locale layer (engine = Opus).

---

## ★ PORTUGAL = THE PROTOTYPE  *(governing principle)*
Portugal is built to the fullest on **every** axis and becomes the **gold copy**. Every other country/section is then "played off against Portugal" — same axes, same bar. Nothing ships as WOW-complete until it matches the Portugal reference.

### The 11 benchmark axes (a section passes only when all 11 are green)
1. **Recipe quality** — full WOW; authentic-classic as the default 🏆.
2. **Versions / variations** — authentic classic default + honestly-labelled riffs (no disguised modern versions).
3. **Info / story** — real cultural story; **specific origin detail (Alentejo, Porto, a town) lives here, never in the region field.**
4. **Leftovers** — dish-specific, individually researched, authentic, ~4 tight bullets (standard below).
5. **Ingredient specificity** — exact thing + form (B1): beef honeycomb tripe, named sausages, stated cuts, goat cut, duck whole/legs.
6. **Method completeness** — every prep in the method; **no 1-step / trivial-method cards** (B2).
7. **goesWith** — link-or-drop; real house recipes only; generic pills resolved or dropped; drinks = complete phrases styled as pairings, not links (B3).
8. **Component links + shopping split** — **link EVERY required component that has a house recipe** (not just goesWith): rolls/breads → Bakes; curry/spice mixes, masalas, chutneys, atchars, pestos, dressings, sauces, stocks → Spice; salt-cod → Salt Your Own Cod. **BUT the shopping list / costing DEFAULTS to the shop-bought item + its own PRICE_DB key** (shop rolls, shop curry mix, jarred chutney) — never the exploded sub-recipe. The link = "make your own if you like"; the default cost = you buy it. (Dovetails with make-your-own cards + two-cost cook-vs-shop.) (B4, expanded.)
9. **Region field** — controlled country-level vocab only (B5).
10. **Locale-ready** — canonical data + override map seeded (cod = entry #1); dried↔fresh triples where relevant (form + fresh-equiv factor + own priceKey).
11. **Heroes** — the 10 reserved cards built to showcase level by Opus.

→ Once Portugal is green on all 11, it's the reference build. Roll the standard outward section by section; **do NOT gate Oct on every section reaching it** — Portugal-first, others follow.

---

## ★ LEFTOVERS STANDARD  *(NEW — /wk + /wow)*

**Principle:** research each dish → keep it authentic → gate against contamination → ship lean.

1. **Dish-specific, per-dish.** No generic category pool as primary content. Research individually where it adds value (Portugal now; roll outward).
2. **Authentic regional continuity.** Prefer real traditional second-lives (migas → açorda; octopus → salada de polvo / arroz de polvo). **Keep the theme:** pair with sibling dishes from the same cuisine where natural (leftover migas + clams nods to carne de porco à alentejana).
3. **⚠️ ANTI-CONTAMINATION GATE (critical).** Same-named dishes from other cuisines must NOT bleed in. **Portuguese migas (garlicky bread mash) ≠ Mexican/Tex-Mex migas (tortilla + egg).** Research must verify it's the RIGHT dish; drop any idea belonging to a foreign namesake (no tortilla / breakfast-burrito ideas on Portuguese migas). *This is the trap in raw web research — the useful bits and the wrong-cuisine bits arrive mixed together.*
4. **Already-frugal dishes** (migas, açorda, sopa de cação) get reheat / refresh / crisp guidance, **not** "turn into something else."
5. **SA-appropriate.** Formats and ingredients an SA cook actually has. No retailer names.
6. **⚖️ EFFORT MIX — easy-first.** Each set leads with **1–2 genuinely EASY** moves (reheat done right, or a 5-min transform) BEFORE any creative one; end on **1 creative reinvention**, ideally **authentic** where the components already fit (bacalhau com natas → mash + egg → **bolinhos / pastéis de bacalhau**). **Never all-projects** ("stuff bell peppers + puff-pastry vol-au-vents + fish pie" walls); never all-reheats. Humble dishes may stay mostly easy. Optional tags: *(easy)* / *(creative)* / *(creative · authentic)*.
7. **🛒 INGREDIENT REALITY by tier.** *Easy* ideas use only what's realistically already home — eggs, bread, onion, potato, rice/pasta, everyday veg, stock, lemon; **no rare or specialty items** (the promise of "easy" is *do it now*). *Creative* ideas MAY call for a modest extra you'd pop to the shop for or order online — realistic, **accessible not exotic** (one or two additions, fine).
8. **📏 QUANTITY = 2–4, QUALITY-GATED.** Ship only genuinely good ideas — **2 strong beat 4 padded.** Never invent filler to hit 4. One honest intro line; no "how much do you have / what's in your fridge" tails. Research deep, ship lean.
9. **Cross-link** any component that has its own card (B4).

**Fallback (Tier-1) for the un-researched long tail:** category-correct and honest only — never a pool from another category, never a factoid naming a different dish. Covers everything not yet individually done, until it is.

---

## ★ WHAT CHANGES FOR CODE
- Portugal leftovers: research **each dish individually**, apply the anti-contamination gate, distil to ~4. Opus's 9 Alentejo sets (in TINZA_LEFTOVERS_FIX_10JUL.md) are the shape/length target.
- The leftovers mis-mapping is almost certainly WK-wide — **scan the whole leftovers engine mapping**, not just wk_europe.js. Apply Tier-1 honest fallback everywhere as the floor.
- Build Portugal green on all 11 axes; flag anything that can't be met so Opus can rule.
