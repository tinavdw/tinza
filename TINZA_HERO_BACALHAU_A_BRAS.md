# Bacalhau à Brás — TINZA REFERENCE HERO CARD · 10 Jul 2026
### Portugal prototype · green on all 11 axes · the bar every WK dish is measured against.
*(Opus-authored content. Code encodes to the live wk_europe.js object shape — match Braai v33 card fields; do not invent field names, map to the real schema. node --check before push.)*

---

## THE CARD

**Title:** Bacalhau à Brás (Salt Cod with Straw Potatoes & Egg)
**Region:** Portugal   ·   **Type:** main (fish)   ·   **Serves:** 4

**Story:** Born in the taverns of Lisbon's Bairro Alto and named, the story goes, after a tavern-keeper called Brás. It's Portugal's great nothing-wasted dish — shredded salt cod, a tangle of matchstick potatoes and softly set egg, pulled into something golden, savoury and comforting. The one trick that separates a great *à Brás* from a sad one: the egg must stay **creamy**, never dry.

**Ingredients**  *(buy-name matching PRICE_DB · weight + pack hint · one per line · prep lives in method)*
- Salted cod (bacalhau) — 500 g *(dried-salted; soaks ~35% heavier — see locale block)*
- Batata palha (matchstick straw potatoes) — 400 g *(shop packet fine; or 500 g potatoes cut fine & fried)*
- Onions — 3 medium
- Large eggs — 6
- Garlic — 3 cloves
- Olive oil — 100 ml
- Fresh parsley — 1 small bunch
- Black olives (Portuguese / Kalamata-style) — 12
- Black pepper — to taste  *(NO added salt: the cod brings its own — taste before adding any)*

**Method**  *(complete — every prep stated; no trivial steps)*
1. **Desalt the cod:** soak 24–48 h in cold water in the fridge, changing the water 4–5 times, until pleasantly (not aggressively) salty — taste a sliver. *(Or make it yourself — see Salt Your Own Cod.)*
2. Poach or steam the desalted cod 8–10 min until it flakes; drain, cool, and shred, discarding skin and bones.
3. *(If frying your own):* cut potatoes into fine matchsticks, dry well, fry in hot oil until pale gold and crisp; drain on paper. Shop batata palha skips this step.
4. Warm the olive oil in a wide pan. Add the thinly sliced onions and sliced garlic; cook gently 12–15 min until soft and sweet — **not browned**.
5. Fold the flaked cod through the onions and warm 2–3 min.
6. **Off the heat (or lowest heat)**, stir in the beaten eggs and the straw potatoes together, folding constantly so the egg *just* sets into a creamy tangle — pull it while still glossy and soft. Do not let it dry out.
7. Grind over black pepper (taste before any salt — usually none needed). Scatter parsley and black olives. Serve at once.

**Variations**  *(authentic default 🏆 + honestly-labelled riffs)*
- 🏆 **Classic Lisbon** — the authentic default (above).
- **SA cod swap (honest):** home-salted hake, or salted snoek — snoek is oilier and stronger, so it's a bolder, *not identical*, version. *(Locale layer surfaces this for SA.)*
- **Lighter oven-straw (honest riff):** potatoes baked as straws, not fried — less oil, slightly less crisp.
- **Weeknight-quick (honest):** shop batata palha + a hot 2–3 h quick-desalt — faster, a touch saltier.

**Leftovers**  *(new standard: easy-first · 2–4 quality-gated · authentic · SA-realistic)*
- *(easy)* Reheat very gently with a splash of olive oil so the egg stays soft, not rubbery.
- *(easy)* Pile warm or cold onto toast with a little parsley for a quick lunch.
- *(creative)* Beat with 2–3 more eggs and set into a thick **tortilha** (Portuguese-style frittata).
- *(creative · authentic)* Shape into small cakes, dust lightly, pan-fry crisp — pastéis-style bites.
*(Already egg-and-potato bound → refresh/transform, not "turn into something else." Easy ideas use only eggs/bread/oil you'll have; the tortilha route may want a couple more eggs from the shop.)*

**goesWith**  *(link-or-drop; drinks = phrases, not links)*
- Crisp green salad → link to **Garden Green Salad (Braai)** *(closest existing house salad)*
- Broa de Milho (Portuguese cornbread) → **VERIFY it exists in Bakes; link if yes, drop the pill if no**
- Pairing: a chilled **Vinho Verde** or other crisp dry white wine

**Component links + shopping split** *(governing rule)*
- Salted cod (bacalhau) → **Salt Your Own Cod** (make-your-own) — link only; shopping list costs shop-bought salted cod (`salted-cod` key).
- Any required component with a house recipe (rolls, curry/spice mixes, chutneys, dressings, stocks) → **clickable link**, but **shopping list defaults to the shop-bought item + its PRICE_DB key**, never the exploded sub-recipe. Link = "make your own if you like".

---

## 11-AXIS GREEN CHECK  *(definition of done)*
1. **Recipe quality (WOW)** ✅ authentic method + creamy-egg technique called out.
2. **Versions** ✅ classic default 🏆 + 3 honest riffs.
3. **Story / origin** ✅ Lisbon / Bairro Alto in the STORY; region field stays "Portugal".
4. **Leftovers** ✅ easy-first, 4 tight, authentic, SA-realistic.
5. **Ingredient specificity** ✅ bacalhau (form), batata palha (form), olive type, olives named.
6. **Method completeness** ✅ desalt → cook → fry → soften → combine → egg-bind → finish.
7. **goesWith** ✅ link-or-drop; wine as a pairing phrase.
8. **Component cross-links** ✅ salt-cod card + broa.
9. **Region field** ✅ "Portugal" controlled vocab; city detail in story only.
10. **Locale-ready** ✅ cod = override #1; dried↔fresh triple; metric canonical.
11. **Hero** ✅ 1 of the 10, showcase level.

---

## LOCALE + DRIED↔FRESH BLOCK  *(override entry #1 — Opus/engine owns; reused by whole cod trinity)*
```
{ name:"salted cod (bacalhau)", form:"dried-salted", priceKey:"salted-cod",   // R450/kg
  freshEquivalent:{ factor:1.35, note:"soaks ~35% heavier; buy ~1.3× weight in fresh fish to swap" },
  localeNames:{ ZA:"salted cod (bacalhau) — or home-salted hake/snoek",
                UK:"salted cod", US:"salt cod" },
  substitutes:[
    { name:"salted hake",        priceKey:"salted-hake",  factor:1.0,  similarity:"closest texture; salt fresh hake ~24h" },
    { name:"salted snoek",       priceKey:"salted-snoek", factor:1.0,  similarity:"available/traditional; oilier & stronger — not identical" },
    { name:"fresh hake/tilapia", priceKey:"fresh-hake",   factor:1.35, similarity:"cheapest/easiest; salt a day ahead for depth" }
  ] }
```
- **SA default surfaced substitute:** salted hake / snoek prominent; bacalhau shown as the authentic (dearer) option.
- All weights metric canonical (g/ml); imperial convert at render for US.

## COSTING + PHOTO
- Cod off `salted-cod` R450/kg (SA default may surface salted-hake/snoek cheaper). Eggs, potatoes, onions, olives from PRICE_DB. Two-cost: cook-cost vs shop-spend.
- Set a romanised `photoName` (son's AI food photography); confirm it renders.
