# TINZA RECIPE DEPTH STANDARD (locked)
*The bar for EVERY recipe — nothing stays plain. Heroes get full depth; simple dishes get a wow twist. Spag bol is the hero reference, Mealie Pap the wow-twist reference.*

## What "premium" means (and does NOT mean)
- **NOT** "17 ingredients." Ingredient count is a side-effect, never the goal. No padding.
- **IS** depth a paying home cook can't Google in five minutes: real technique written down, complete ingredients that each earn their place, method that *teaches*, and a voice only a working caterer has.

## The 7 marks of a deepened hero recipe
1. **Complete ingredients** — aromatics, the flavour-base trinity (soffritto etc.), seasoning, the finishing touch, the "secret" component. Every line must change the dish; if it doesn't, cut it.
2. **Technique in the method** — sweat slow / brown hard in batches / deglaze / reduce / cook out the paste / the long simmer. Name *why* a step matters, not just what to do.
3. **The secret step, surfaced** — the milk in a ragù, cold batter + cornflour, blooming whole spices. The thing that separates real from basic, made explicit.
4. **`feel` copy that SELLS the depth** — never apologise for the dish ("the version everyone already knows"). Make them want to cook it.
5. **A real caterer `tip`** — the make-or-break insiders only know (rest the lasagne 15 min, dry the chips, caramelise onions a full 15 min).
6. **`storage` that respects make-ahead** — better next day / freezes X months / best fresh. Catering-grade.
7. **Honest `time`** — a 2-hour ragù says 135, not 45. Premium takes time and that's the point.

## Keep unchanged (schema discipline)
`id`, `cat`, `diet`, `protein`, `cuisine`, `emoji` stay as-is. Deepen: `ingredients`, `method`, `feel`, `tip`, `time`, `costPP`, `nutrition`, `storage`.

## Costing dependency (read before scaling)
Deeper recipes = more ingredients. The engine recomputes `costPP` from each `{n,pp,u}` against `PRICE_DB`, so any new ingredient WITHOUT a price shows "not yet costed." Deepening and the price-update keystone move together. New-ingredient watchlist builds up per batch (see batch review docs) → fold into the monthly Sixty60 pass.

## Nothing stays plain — two treatments, never "leave it alone"
Every recipe earns the open. The mistake is thinking simple dishes should be left basic — a mealiepap-and-milk or smoothie so plain the user could do it from their head makes the WHOLE app look thin, and they won't bother. So there is no "do not touch" list. There are two treatments:

- **HERO depth** (suppers, mains, proper plates, centrepiece bakes, signature curries/stews): full technique + complete ingredients + the works. Spag bol is the reference.
- **WOW TWIST** (smoothies, juices, overnight oats, basic breakfasts, staples, simple snacks): keep them genuinely simple — but add 1–2 small twists that make the user go "oh, I wouldn't have thought of that," plus a `feel` that sells it and a real caterer `tip`. NEVER pad a smoothie to 17 ingredients; DO make it better than off-the-top-of-the-head.

The test for BOTH: *would someone bother opening this, and do they learn something they couldn't do from memory?* If no, it isn't done.

### Wow-twist patterns (the small moves)
- A flavour-brightener: a squeeze of acid (lime/lemon) and a tiny pinch of salt make fruit/veg taste twice as themselves.
- A texture fix: frozen fruit not fresh+ice (thick not watery); yoghurt + chia to set oats thick; brown the butter.
- A "real" swap: vanilla seeds not essence; warm the milk; toast the spice/oats first.
- A finish that elevates: a drizzle, a dust of cinnamon sugar, a scatter of toasted nuts, a built-in topping so it arrives complete.
- Heritage voice: for SA staples, the nostalgia and the proper technique (krummelpap vs slap) IS the wow — honour it.

### Proof — Mealie Pap & Milk (plain → wow, still R10, still 20 min)
Added: nut-brown butter, warm milk, cinnamon sugar, the lump-free whisk and krummelpap fork written down. `feel` upgraded to sell the finish. Same humble dish, now worth opening.

## Workflow (collaboration model)
- **Claude drafts** the deepened version in-schema, at this bar, in reviewable batches by section.
- **Tina is the catering authority** — corrects to SA reality (real cuts, Checkers brands, what scales to 50), kills anything false, adds the insider tip. Heritage dishes (Cape Malay, Boerekos, etc.) get a hard correction pass — Claude drafts respectfully, Tina knows the real thing.
- **Cadence:** Claude drafts batch → review doc → Tina taste-tests → patch into the section file → `node --check` → push. Nothing unreviewed goes live.

## Gold reference — Spaghetti Bolognese (7 → 19 ingredients, every one earned)
- Two meats + bacon (depth), soffritto trinity, tomato paste cooked out, wine reduced, **milk** (the secret), long 1.5–2h simmer, parmesan not cheddar, pasta finished THROUGH the sauce.
- `feel`: "Not the 20-minute version — a true slow ragù… makes the house smell like Sunday."
- `tip`: brown in batches (fond) + use tagliatelle.
- `time` 45 → 135. `costPP` 34 → ~54.
