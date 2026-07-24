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

23. **⏳ In-app chef helper — freeform cooking Q&A (extends the AI Chef, §3).** A conversational assistant inside the app that answers the ad-hoc questions a recipe card can't pre-bake: *"how many dishes for 14?"* · *"can I swap the cream?"* · *"halve this for two?"* · *"what goes with it?"* — sits on top of the recipe / cost / portion data the page already holds, so it answers *in context*. **The trigger, 24 Jul:** the vessel *"one full dish plus a smaller one"* precision was parked precisely because it belongs in a helper that **reasons live**, never hard-coded per recipe (see `TINZA_RULINGS.md` §10, round-up ruling). **Post-launch — same gate as the §3 Chef: needs a subscriber base + usage economics to justify the call cost.** Built on Claude. The moat: a caterer's brain answering in the moment, on a page that already knows the dish.

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

---

# 📦 MEASURED CONTENT GAPS — *added 20 Jul 2026*
*Measured against commit `92105af` with Node probes. ⚖️ Law 22.*

> 🩸 **METHOD NOTE — READ THIS BEFORE TRUSTING ANY NAME COUNT.** Records carry BOTH `name` (authentic) and `nameAlt` (English gloss); the app renders `tinzaDisplayName()` = `name (nameAlt)`. **A probe that greps `r.name` alone UNDER-REPORTS badly** — the first pass of this very section claimed 3 dumplings when there are 25, and 2 festive breads when there are 6. **Always search `name + nameAlt`.** ⚖️ Law 22, sharpened — measure what the app RENDERS, not what the record stores.

## 🥟 15. Dumplings — **the gap is ASIA, not dumplings**
Re-measured: **25 dumpling dishes exist** — Pierogi ruskie · Kluski śląskie · Pelmeni · Vareniki · Manti · Knödel · Germknödel · Zwetschkenknödel · Nokedli · Kroppkakor · Raspeballer · Capuns · Kenkey · Salzburger Nockerl · Fluffy Drop Dumplings · Samoosas. Europe and Africa are **well covered.**
- ❌ **Genuinely missing — the East Asian family:** gyoza · jiaozi · momo · wonton · mandu · xiao long bao · siu mai.
- **Why it matters:** dumplings are the Lunar New Year celebration food, and World Kitchen Asia is thin. This is an *Asia* backlog item, not a dumpling one.
- **Cheapness:** medium. One wrapper method + one folding technique carries the whole family; fillings become `versions`.

## 🍞 16. Festive / enriched breads — **6 exist, the European festive core is missing**
Re-measured: Vetkoek ×3 · Koeksisters · **Himbasha** (Sweet Bread) · **Bolo Rei** (King Cake — the king cake box is already ticked).
- ❌ **Still missing:** challah · panettone · stollen · tsoureki · kulich · babka · hot cross buns · colomba.
- **Why it matters:** these are breads baked FOR an occasion — Easter, Christmas, New Year. Direct 🎉 *celebrating* fill, and they photograph beautifully.
- **Cheapness:** medium. One enriched sweet dough parents most of them.

## 🥩 17. Carpaccio — **zero real ones** *(Tina's ruling, 20 Jul)* — CONFIRMED after re-measure
Only matches are `Zucchini Carpaccio` and `Tomato & Butternut Carpaccio` — both **vegetable dishes borrowing the name for a slicing technique.**
- **⚖️ THE RULING:** *carpaccio is a MEAT dish by origin* (Harry's Bar, Venice). A vegetable version may use the word, but the library must not lack the real thing while using the name.
- **The SA answer, and it is a moat:** **venison carpaccio** (springbok · kudu · gemsbok — all already in the library as roasts) and **firm white fish carpaccio.** Neither is copyable by an overseas app. Feeds the ⭐ *impress* shelf.
- **Cheapness:** HIGHEST in this document — no cooking at all. Slice, dress, plate.

## 🦑 18. Calamari — **3 exist; the gap is the SA-ROOM version**
Re-measured: **Lula Grelhada** (Grilled Calamari, Mozambique) · **Calamares a la Romana** (Fried Calamari, Spain) · **Lulas Recheadas** (Rice-Stuffed Squid, Portugal). Search for "calamari" returns them correctly — ✅ **not a discoverability bug.**
- ❌ **Missing:** a **marinated calamari salad**, and SA-room versions a Pretoria cook browses to (Braai · Finger Foods · Family) rather than only under Spain/Portugal/Mozambique. ⚖️ Duplicate rule — *same ingredients, different cultural name → keep BOTH*, so the World Kitchen heroes stay and cross-link.
- 🔬 **THE TWO-WINDOW RULE — belongs in `TINZA_TECHNIQUES.md`, and every squid recipe inherits it.** Squid is cross-woven collagen that seizes at 55–60 °C. **Under ~2 minutes = tender. Over ~30–45 minutes = tender. Anything between = rubber, with no rescue.** Fry 60–90 sec at 180–190 °C in small batches (crowding drops oil temp → pushes you into the rubber window → the single commonest cause). Dry the rings hard first. Braai screaming hot, 1–2 min. Braise 30–45 min minimum. **Frozen squid is often MORE tender than fresh** (ice crystals rupture the fibres) — relevant since SA squid arrives frozen. Milk/buttermilk soak 30 min–2 hr helps; skip bicarb (goes slimy). Thick tubes → braise; small/baby → flash fry. *Lula Grelhada's existing "two minutes over fierce coals" already honours this — it is correct as written.*
- 🍺 **Batter is a `versions` case, not three recipes:** seasoned flour (Romana, lightest) · flour + cornflour (SA restaurant crisp) · beer batter (pub).

## 🐟 19. Yellowtail / Galjoen — **zero, confirmed**
Prized SA gamefish. Whole-roasted yellowtail is a genuine showstopper and a Cape/coastal signature. Nothing in the library.

---

# 🏷️ BRAND NAMES IN SA CLASSICS — *measured 20 Jul 2026*
*Measured: only **9 real cases** app-wide. Small and fixable.*

- 😲 **`Crunchies` (bakes) is NOT a brand** — it is oats · coconut · cake flour · golden syrup · bicarb, the generic SA oat traybake. Nothing to fix. **⚠️ But it creates a trap: naming a honeycomb recipe "Crunchie" would collide with it in the same room** — the one collision a room gloss cannot solve.
- 😲 **Honeycomb is at ZERO — and it is NOT a mission to make.** Sugar + golden syrup + bicarb, ~10 minutes. **The mission is the chocolate coating, not the honeycomb** — and for crushing over a Dom Pedro, an Amarula Affogato or ice cream you never coat it. Same chemistry as the existing Crunchies recipe. **Author it as "Honeycomb"** — correct generic name, and it dodges the collision.
- **The rename list:** Tennis biscuits (5 recipes) → **coconut biscuits** · Romany Creams (1) → **chocolate coconut sandwich biscuits** · Bar One Sauce (1) → **chocolate caramel nougat bar** · Aromat (1) → **savoury seasoning salt**.
- ❌ **False positives — do NOT touch:** *Ouma se Soetpampoen* (Afrikaans for grandmother, not the rusk brand) · *Tex-Mex* (not the chocolate bar).

## ⚖️ PROPOSED RULING — THE THREE TIERS *(awaiting Tina's confirmation)*
1. 🏆 **THE DISH IS THE BRAND → THE NAME STAYS.** Peppermint Crisp Tart is a named national dish; renaming it makes it unfindable. The *ingredient line* still goes generic — "mint chocolate flake bar, 49g".
2. 🔤 **BRAND AS LAZY SHORTHAND → USE THE GENERIC.** Tennis · Romany Creams · Bar One · Aromat. The product exists under many labels; the brand adds nothing.
3. 🍳 **MAKEABLE → AUTHOR IT AND CROSS-LINK.** Honeycomb is case #1. Turns a shopping dependency into a Tinza recipe — the moat.
4. 🥃 **SPIRITS AND LIQUEURS SIT OUTSIDE ALL THREE.** Amarula · Kahlúa · Cointreau — the brand *is* the product category and there is no generic. Leave them.

---

# ⭐ THE IMPRESS SHELF — MEASURED, 20 Jul 2026
- 🇿🇦 **THE SA LIST: 21 of 23 ALREADY IN THE LIBRARY.** Biltong · snoek · roosterkoek · peri-peri livers · mussels · boerewors · potjiekos · chakalaka · bobotie · oxtail · Karoo lamb chops · bunny chow · pork belly · biryani · game · melktert · peppermint crisp · Amarula · koeksisters · malva · hertzoggies · Dom Pedro · Cape brandy pudding. **Gaps: calamari-in-SA-rooms, yellowtail, carpaccio.**
- 🇫🇷 **THE EUROPEAN FINE-DINING LIST: 18 present, 21 missing** — and two "hits" were false positives (the veg carpaccios; Japanese soufflé *pancakes* matching "soufflé").
- 🩸 **THE READING:** *impress* is **tag-only for the SA half, content-hungry for the European half.** Tinza's game, potjie and braai depth is the part no overseas app can copy. Build the SA shelf from tags on day one; treat European dishes as optional depth, never the whole shelf.
- 🚫 **SOURCING CUT — the caterer's filter, ruled 20 Jul.** Do NOT author: oysters · scallops · lobster / Cape rock lobster · veal (osso buco) · branzino. Hard to source in Pretoria, expensive, inconsistent. **A recipe she cannot shop for is not impressive — it is a dead end.** ⚖️ Law 16.
- ✍️ **AUTHORING ORDER, by impress-per-hour:**
  - **🔥 Cheap + high impact:** venison carpaccio · honeycomb · Affogato / Amarula Affogato · chocolate-dipped strawberries · deviled eggs · Baked Brie en Croûte · Strawberries Romanoff · Dom Pedro variations.
  - **👍 Worth the effort:** molten lava cakes · chicken piccata · profiteroles · mushroom risotto · marinated calamari salad · whole roasted yellowtail · Beef Wellington and its SA twin **Venison Wellington**.
  - **🚫 Skip:** opera cake · macarons · tortellini in brodo · xiao long bao — days of work, tiny audience, and macarons fail on Highveld humidity alone.
---

# 🤝 PARTNERSHIP & LINKING IDEAS — *moved here 21 Jul 2026*
*Lifted out of Claude's memory, where they had sat since May with no work attached to them. ⚖️ **Law 52 in reverse** — memory is for things that steer a session; a partnership idea nobody has acted on steers nothing. It belongs in the parking lot, written down, where it cannot be lost and cannot mislead.*

## 20. 📚 Master recipe library — so every cross-link lands on a real recipe
The original idea: author the most important dishes across every category (mains · starters · salads · veg · breads · biscuits), SA and international, **so `goesWith` pairings always point at something that actually exists in the app.**
- ✅ **PARTLY OVERTAKEN BY EVENTS.** `WOW_STANDARD.md` **C4** already requires every `goesWith` link to be verified against the real library, and `TINZA_RULINGS.md` **§16** now rules that `goesWith` is a *pairing* and wrong links are **removed, not kept** (⚖️ **Law 45** — a missing link beats a wrong one).
- 🩸 **SO THE REAL QUESTION IS NO LONGER "AUTHOR EVERYTHING" — IT IS "WHAT DOES §16 LEAVE EMPTY?"** Run the `goesWith` sweep first *(Week 3)*, then count the links that had to be dropped for want of a target. **That count is this backlog item, measured.** Authoring blind before the sweep builds recipes nothing links to.
- **Cheapness:** unknown until the sweep runs. **Do not size it before then.** ⚖️ **Law 36.**

## 21. 🍷 Wine pairing per dish
A suggested wine for each main. Natural fit for a country with a serious wine industry, and a genuine premium-feel touch on a recipe card.
- ⏳ **v2, and it needs a source.** Pairings written off the top of the head are the same class of error as the `goesWith` similarity bug — plausible-sounding, wrong, and invisible until someone who knows wine reads them.
- ⚠️ **Watch the alcohol framing** — Tinza is a family recipe app; a wine line must be optional and never the default reading of a dish.

## 22. 🛒 Retailer integration for the shopping list *(Checkers Sixty60 named)*
One-tap: send the costed Tinza shopping list into a delivery basket.
- 🩸 **THE HONEST POSITION, UNCHANGED SINCE JUNE: NO PUBLIC API EXISTS.** True basket hand-off requires a **partnership**, and a partnership requires **scale** — which means this is a *post-launch* conversation, not a build.
- ✅ **WHAT IS ALREADY SHIPPED AND COVERS 90% OF THE VALUE:** export · WhatsApp share · copy-to-clipboard. **The list travels today.**
- 🔗 **Related and already noted elsewhere:** the monthly price pass and the "cheap this month" seasonal flag *(⏳ Smaller / later, above)* are the parts of this idea that need no partner at all.
