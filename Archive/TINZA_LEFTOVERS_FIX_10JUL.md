# TINZA — Leftovers-Bug Fix + Salt-Fish Card · 10 Jul 2026
### For Code (once Tina confirms). Opus authored the gold-standard examples; Code extends the pattern.

---

## ★ THE BUG (confirmed, not imagined)

WK leftover blocks pull from a **handful of generic category pools** and mis-assign them to dishes.
Observed pools:
- **Fish pool:** flake into seafood pasta/risotto · bind into fishcakes · pile onto toast w/ lemon-chilli · stir through cold noodle salad
- **Meat-stew pool:** pull into soft rolls w/ apple & slaw · dice into egg fried rice/hash · shred for tacos w/ pickled onion · toss through noodles w/ soy & ginger
- **Bread pool:** soak into pain perdu · tear into panzanella · blitz into pangrattato · layer into strata · cube into croutons
- **Lamb pool:** fold into lamb curry · warm into pita w/ tzatziki · layer into shepherd's pie · toss cold through grain salad

Mis-assignments seen: **nasi goreng (rice) → bread pool · roast veg → fish pool · chilaquiles (tortilla) → fish pool AND meat pool in different views · favas guisadas (broad beans) → meat pool (soft rolls & slaw).**
Separately, the **italic factoid line** (pain perdu / feijoada / ribollita / chilaquiles…) rotates independently of the dish, so it reads as if describing *this* dish when it doesn't.

---

## ★ THE FIX — two tiers

**Tier 1 — fallback pool must be honest (launch-critical).**
- Fallback ideas must be **category-correct**: fish→fish, red-meat→meat, poultry→poultry, veg→veg, bread/grain→bread/grain. A dish NEVER gets a pool from another category.
- **Kill or dish-match the free-floating italic factoid.** No factoid that names a *different* dish (no "French toast's real name…" sitting above a cod dish).

**Tier 2 — WK + hero cards get dish-SPECIFIC leftovers (WOW).**
- Authored per dish, keyed to the actual dish, authentic where a real traditional second-life exists (e.g. octopus → salada de polvo).
- New **/wk RULE:** WK cards carry a `leftovers` array authored for THAT dish; the generic pool is fallback only, and only category-correct.
- Dishes that are ALREADY leftover/frugal dishes (migas, sopa de cação, açorda) should say so — reheat/crisp guidance, not "turn into something else".
- **⚖️ EFFORT MIX — easy-first.** Lead each set with 1–2 EASY moves (reheat right / 5-min transform), then end on 1 creative reinvention — authentic where the components already fit (bacalhau com natas → mash+egg → **bolinhos**). Never all-projects (no bell-peppers + vol-au-vent walls); never all-reheats. See dish #2 for the arc. Tags: *(easy)* / *(creative)* / *(creative · authentic)*.
- **🛒 Ingredient reality:** EASY ideas use only what's likely already home (eggs, bread, onion, potato, rice/pasta, everyday veg, stock, lemon) — no rare/specialty. CREATIVE ideas may call for a modest shop-run/online extra — accessible, not exotic.
- **📏 Quantity = 2–4, quality-gated: 2 strong beat 4 padded.** Never pad to reach 4.

---

## ★ SALT-YOUR-OWN-FISH — new make-your-own component

**Title:** Salt Your Own Cod (Home-Salted White Fish)
**Placement:** make-your-own component; **every bacalhau recipe cross-links to it** (B4).
**Framing (story):** optional, plan-ahead project for coastal cooks / good fishmonger — NOT a same-day swap or a shortcut. Real bacalhau is cured for weeks; this approximates it in days with very fresh firm white fish.

**Ingredients**
- Fresh firm white fish fillets, skin on (hake, kingklip or snoek) — 500 g
- Coarse / rock salt — 500 g–1 kg (enough to fully bury the fish)

**Method**
1. Pat fish bone-dry; use the **freshest** firm white fish. Works poorly with previously-frozen fish (watery, uneven cure, soft & surface-salty). If frozen is all there is: thaw fully, dry hard, expect a softer result.
2. Lay a 1 cm bed of coarse salt in a non-metal dish. Fish skin-down, bury completely so no flesh shows.
3. Cover, refrigerate. **24–48 h** = light fresh-salted cure; **3–5 days** = firmer, bacalhau-like. Longer cures: pour off liquid + top up salt daily.
4. Before cooking, rinse; soak in cold water — **1–2 h** (light) to **12–24 h, water changed 3–4×** (long) — until pleasantly, not aggressively, salty. Taste a sliver.
5. Pat dry; use in any bacalhau recipe. Milder/softer than shop bacalhau — season the dish a touch more confidently.

**Chef note:** No added salt anywhere the fish appears — it brings its own. If proper bacalhau is available, that's easier and more authentic; home-salting is the local/budget workaround.

---

## ★ DISH-SPECIFIC LEFTOVERS — 9 Alentejo/Portugal cards (gold standard for Code)

**2 · Bacalhau com Natas** (salt cod, cream & potato gratin)  *(exemplar of the easy-first → creative arc)*
- *(easy)* Reheat gently in a low oven so the cream doesn't split; a splash of milk loosens it.
- *(easy)* Spread on toast, scatter breadcrumbs or a little cheese, and grill to bubbling — a cod rarebit.
- *(creative)* Warm cod dip: stir in chopped parsley and lemon zest, bake, serve with toasted bread or crudités.
- *(creative · authentic)* It's already cod + potato — mash it, fold in an egg, shape and fry into **bolinhos** (mini pastéis de bacalhau).

**3 · Polvo à Lagareiro** (olive-oil roasted octopus, punched potatoes)
- Slice cold octopus into **salada de polvo** — red onion, parsley, olive oil & vinegar.
- Turn into **arroz de polvo** (octopus rice) using the leftover cooking juices.
- Crisp the punched potatoes hard in a hot pan; top with a fried egg.
- Toss octopus through a warm chickpea salad with smoked paprika.

**4 · Favas Guisadas** (stewed broad beans, usually w/ chouriço)  *(fixes the slaw-roll nonsense)*
- Blitz into a broad-bean soup with a little stock and a swirl of olive oil.
- Fold through a fried-egg breakfast, beans and all, with crusty bread.
- Toss cold with mint, lemon and feta for a bean salad.
- Stir into a rice or orzo pilaf so the sauce coats the grains.

**5 · Sopa de Cação** (Alentejo dogfish & coriander bread soup) — *already a bread soup*
- Reheat gently with extra water/stock (the bread thickens overnight).
- Flake the fish out, crisp it, and serve back over the reheated broth.
- Fold the soup into a rice cook for a coriander-fish risotto.
- Use as a poaching base for eggs — açorda-style, egg on top.

**6 · Ensopado de Borrego** (Alentejo lamb stew over bread)
- Shred the lamb into a quick curry or a ragù for pasta.
- Layer into a shepherd's-pie-style bake with mash.
- Warm into pita/flatbread with the pan juices and pickled onion.
- Reduce the broth and toss shredded lamb through orzo.

**7 · Carne de Porco à Alentejana** (pork & clams in red-pepper paste, fried potatoes)
- Pick pork + any clam meat into a quick seafood **arroz** (rice).
- Dice pork and potatoes into a breakfast hash with a fried egg.
- Fold pork (leave the clams) into soft rolls, bifana-style, with the paste juices.
- Toss through pasta with the **massa de pimentão** sauce loosened with stock.

**8 · Polvo à Lagareiro** *(duplicate of #3 — same leftovers apply; dedupe or keep one card)*

**9 · Migas à Alentejana** (garlicky bread mash with pork) — *already a leftover-bread dish*
- Crisp cold migas hard in a hot pan until golden, like a hash.
- Top crisped migas with a fried egg and the pork.
- Fold into a bean stew to thicken it.
- Form into patties and pan-fry as migas cakes.

---

## ★ NOTES FOR CODE
- These 9 are the **pattern**; extend dish-specific leftovers across WK, authentic-first.
- **#3 and #8 are the same dish (Polvo à Lagareiro)** — dedupe per the duplicate rule (keep most comprehensive).
- Do NOT touch spice.js. Salt-fish card lives where make-your-own components live; wire the cross-link from bacalhau cards (edit is in wk_europe.js, safe).
- After this: the Tier-1 category-correct fallback + factoid fix is the launch-critical piece; Tier-2 dish-specific is the WOW pass.
