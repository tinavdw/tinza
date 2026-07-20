# TINZA IDEAS BACKLOG (Claude's suggestions — curated + prioritized)
*Things to consider, ranked by impact × cheapness. Most build on engines that ALREADY exist (buildPlanData, shoppingView, costPP, storage field, togglePlanItem). Tag: 💰 = cheap/pre-launch-worthy · ⏳ = v2/post-launch. Don't build any of this before the version-selector slice ships — this is the parking lot, not the queue.*

## 🔥 Big commercial levers (justify the subscription)
1. **💰 Weekly meal planner → ONE costed shopping list.** Pick ~5 dinners, get a single combined, de-duped, Rand-costed list. THE feature paid recipe apps sell. Engine already exists (Events buildPlanData/shoppingView) — mostly wiring to "my week." Highest commercial impact.
2. **💰 Budget filter app-wide — "meals under R25 pp".** A global cost slider/filter across all recipes. Pairs with 💰 Budget versions. SA-critical. Runs off existing costPP. The Rand-costing moat made browsable.
3. **⏳ Pantry mode — "cook with what I have".** Tick cupboard ingredients → see makeable recipes, shopping cost drops. Big retention play; runs off existing ingredient data. Bigger build (matching logic).

## 🗺️ Planner Modes — context presets on ONE planner engine (Tina's big extension)
Key insight: multi-week, breakfast/lunch, conferences, camping, hiking, school lunches are NOT separate features — they're context PRESETS on the single meal-planner + costing/shopping engine. Each preset changes (a) which recipes surface, (b) the constraints, (c) the OUTPUT format (shopping list vs day-by-day packing list). Build the core planner first; modes layer on as config + recipe tags.
- **🏠 Home week** — breakfast/lunch/dinner toggle, 1–4+ weeks, one combined de-duped costed shopping list.
- **🏕️ Retreat / conference** — multi-day, remote (can't reshop), scaled to headcount → full "pack everything" list. Reuses the Events portion-brain (already scales to 50+).
- **⛺ Camping / off-grid (no fridge, carry-weight)** — planner SEQUENCES meals perishable → shelf-stable across the days; flags freeze-solid-first, vacuum-pack, and SA preserved heroes (biltong, droëwors, tinned, dehydrated) for later days. Output = day-by-day PACKING list. ⚠️ **FOOD SAFETY = VERIFY, DON'T GUESS:** do NOT publish invented "safe-to-eat-until-day-X" numbers for unrefrigerated meat — depends on heat/packing; use conservative established rules + Tina's caterer knowledge, vetted before ship. (Friend specifically requested this mode.)
- **🎒 Hiking** — money-no-object, lightweight, premium "wow" trail dishes; weight-aware.
- **🍱 School lunch** — REUSES the `versions` system: ⚡ quick / ✨ fancy / 💰 budget per lunch (the lazy-but-money vs budget personas, already designed). Plus a weekly lunch planner.
- Output format flexes: shopping list (home) vs packing list by day (camping/retreat) — same engine, different presentation.


4. **💰 Load-shedding mode.** Filter: no power → gas / braai / no-cook recipes. Nobody overseas thinks of this. Tag recipes by cook-method; surface the no-power set. Markets itself.
   - 🔥📦 **Cook-method is a shared axis — it also feeds the ADVENTUROUS mood + camping mode.** Foil / paper (en papillote) parcels, sheet-pan, Dutch-oven, stuffed-veg vessels are a cook-METHOD family, not new dishes — apply as a serving-style version chip across existing fish/chicken+veg dishes. Measured 17 Jul: ZERO parcel/papillote recipes in the library — the one genuine content gap here. Everything else "ambitious/adventurous" (gnocchi ×3, coq au vin, braised lamb shanks, drop dumplings) is already live → TAG-only. **One method tag → three payoffs: adventurous shelf · camping packing-list · load-shedding no-power set.**
   - 🍲🔌 **Slow-cooker is the same axis — and the ultimate LAZY / EXHAUSTED play.** "Load it in the morning, dinner's ready when you walk in." A cook-method tag over EXISTING braises / stews / curries (not new recipes). Globally common (US/UK/Aus staple; present in SA); SA cousin = the **potjie**. Markets itself to the tired-parent shelf.
   - 🍕 **"Lazify" example — pizza on bread.** French-bread / ciabatta pizza (e.g. BBQ Chicken French Bread Pizza) = pizza with ZERO dough-making → a 😴 lazy version chip on the pizza recipes. Same trick as skillet lasagne. (Europe brings lots of pizza + risotto variations to hang these on.)
5. **💰 "Tested by a real caterer" trust thread.** Lean on the fact a working Pretoria caterer wrote/tested these. A small badge + your story on hero recipes. Trust + marketing, near-zero build.

## 🍽️ Premium depth (extend versions/variations)
6. **💰 Leftover ideas cross-links.** "Made too much bolognese? → 3 things to do with it" linking to other recipes. Premium, anti-waste (SA-relevant), cheap — just curated links.
7. **💰 "Make it a meal" pairings.** Each main suggests sides + a drink that go with it; one-tap "add suggested sides to my plan." Uses existing recipe data + plan engine.
8. **⏳ Heat-level as a version axis.** Mild / medium / peri-peri-hot versions of curries & sauces. Fun, very SA. Same `versions` mechanism.
9. **💰 Freezer-friendly / make-ahead filter.** You already store `storage` notes — surface them as a filter ("batch-cook", "freezes well", "better next day"). Near-zero build, high practical value.

13. **💰 "Hidden-veg" kids version axis (👶).** For kid-staples — mac & cheese, spag bol, spag & meatballs, french toast, fritters — add a version chip that folds mild veg in invisibly: cauliflower/carrot/sweet potato steamed and blended silky into the cheese sauce; carrot/pumpkin/spinach pureed into the french-toast egg batter; grated carrot & courgette cooked down through the bolognese. Same dish, kid-tuned → a TRUE version-chip case under the Bobotie rule. This is the premium AUTHORED content that makes the "Fussy little ones" mood shelf genuinely good rather than just auto-matched. Near-zero engine (rides existing `versions`); it's a content pass. ⚠️ **Rule check:** hidden-veg is deliberate disguise — verify it doesn't trip the Shelf-WOW "remove and replace, never disguise" wording. Likely a named exception (that law is about substitution INTEGRITY, not culinary technique), but Tina rules it before build.
14. **💰 "Not feeling well" — split by ailment (🤒 tummy bug vs 🤧 flu).** The sick mood isn't one thing. A stomach bug wants bland-and-binding (plain rice, dry toast, banana, clear broth, ginger); a cold/flu wants warming-and-nourishing (chicken soup, ginger, garlic, a vitamin-C lift). Offer the two as version chips or two sub-shelves inside "I'm not feeling well," drawing on old-fashioned get-well recipes plus new ones. Rides existing `versions`; authored content. ⚠️ Keep FOOD-comfort framing, never medical advice/claims.

## 🧰 Expected UX (table stakes for a paid app)
10. **💰 Favourites / "My Cookbook".** Let users save recipes into their own collection. Expected in any paid recipe app. togglePlanItem pattern already exists.
11. **⏳ Hands-free Cook Mode.** Full-screen step-by-step with built-in timers, screen stays awake. (openCookingMode existed once — revive properly.) Premium cooking UX.
12. **💰 Global dietary toggle.** One switch surfaces the 🌱 vegetarian VERSION of every recipe that has one — ties the Free-tier "1 dietary restriction" to the versions system. Cheap once versions exist.

## ⏳ Smaller / later
- **Seasonal / "cheap this month"** flag tied to the monthly Sixty60 price pass — highlight what's good value now.
- **Scaling-up intelligence on everyday recipes** — extend the Events portion brain + make-ahead notes to home cooking ("doubling? here's what changes").
- **Recipe-of-the-week / curated collections** — ties to the marketing plan.
- **Print/share polish** — already partly there (WhatsApp/print on plans); extend to single recipes.

## Honest priority
Pre-launch, at most: the version-selector build (in progress) → meal planner → budget filter → load-shedding mode → freezer/leftover/pairings (all cheap). Everything ⏳ waits for v2. The risk tonight isn't too few ideas — it's too many at once. Build one slice, ship, then pick from here.
