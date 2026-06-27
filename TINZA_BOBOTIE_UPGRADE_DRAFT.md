# 🍛 BOBOTIE — World Kitchen upgrade draft (for Tina's review)
*27 Jun 2026 · against live `sections/wk_southafrica.js` (`cape-malay-bobotie`). The "pipeline travels" test — first hero taken cross-section into World Kitchen's native schema. NOT pushed.*

## Why this is the travel test
Bobotie lives in **World Kitchen**, a different section with a **different schema** from Meals:
- `ingredients` / `method` are **single strings**, not `{n,pp,u}` arrays
- field names differ: `howThisFeels` (not `feel`), `chefNotes` (not `tip`), **`trivia`** (not `didYouKnow`)
- WK renders through its **own** `wkRecipeOpts`, not the shared `bakesRecipeOpts`

**What travels cleanly (this draft):** the *content* pipeline — recipe upgrade → derived name → sharpened 💡. WK's `wkRecipeOpts` **already renders `trivia` as "💡 Did you know"** (line 643 of `worldkitchen.js`), so the moment this patches, the sharpened fact shows. No render code needed.

**What does NOT travel yet (logged as the gap):** the **version engine**. `wkRecipeOpts` has no `applyRecipeVersion` / version strip, so "Bobotie ×N versions" has nowhere to render. Versions deferred per your call. (See "Surfaced shared-build" below.)

## Depth marks added (the upgrade)
| Mark | Was | Now |
|---|---|---|
| Spice technique | spices added to onion | **bloom curry powder + turmeric + ground spices in fat 1–2 min** — deep flavour not raw bite |
| Browning | mince added & cooked | **brown the mince hard** for Maillard depth |
| Bread | soaked & mashed | same, + **"don't over-soak / over-pack or it turns wet"** the whole secret |
| Custard | bake until set | **pull at a slight wobble** — just-set stays silky, overbaked weeps |
| Authentic touch | — | **garlic, a little butter, flaked almonds** (Cass Abrahams–style), 2 bay leaves pressed in |
| Aromatics | cloves, cinnamon | + pinch **allspice** option; lemon juice kept |

All real food (curry powder + chutney are condiments/spice = allowed; no soup powder). Lamb mince noted as the traditional swap in chefNotes.

## NAMING (derived)
- Iconic, searchable anchor stays **`Bobotie`** — a plain-but-true name beats a dressed-up one, and it's *the* search term.
- `nameAlt` sharpened: `Spiced Mince Bake` → **`Golden Spiced Mince Bake`** (names the just-set custard lid — the pull).
- Optional hooks if you'd rather the card lead with one (your call): **`Cape Malay Bobotie`** (heritage) · **`Golden-Topped Bobotie`** (the pull).

## 💡 DID YOU KNOW — pick the truest (goes in `trivia`)
All sourced, all TRUE — choose the one that lands best for SA readers:
1. **🏛️ Travelled-dish (my pick):** *"Bobotie may be the world's most-travelled 'national dish' — the earliest known recipe appears in a Dutch cookbook from 1609, long before it reached the Cape, where the Cape Malay community made it their own."*
2. **🏛️ Monday-leftovers origin:** *"Bobotie began as a thrift dish — Sunday's roast meat, minced up with curry spices, bay leaves and a little fruit on Monday, then baked under an egg custard so nothing went to waste."*
3. **🌱 Grow-your-own (bay):** *"Those bay leaves curling on top? Bay is a hardy evergreen that grows into a small tree in a sunny SA garden or a big pot — one plant gives you fresh leaves for years."*

*(Draft ships with #1 in `trivia`. Swap to #2 or #3 if you prefer — or bank the others for the grow-your-own strand elsewhere.)*

## 🆕 New-ingredient watchlist (confirm in PRICE_DB — feeds straight into the price pass next)
`flaked almonds` *(NEW — authentic but adds cost + allergen; drop if you'd rather keep it lean)* · `apricot chutney` · `Cape Malay curry powder` · `sultanas` · `bay leaves` *(carryover from beef stew)*
*(already expected: beef mince · onion · garlic · white bread · turmeric · butter · oil · egg · milk · lemon juice)*

---

## THE DRAFT (in-schema, WK native — ready to patch into wk_southafrica.js)

```js
{"id":"cape-malay-bobotie","name":"Bobotie","nameAlt":"Golden Spiced Mince Bake","aliases":[],"course":"main","type":["main"],"diet":[],"cuisine":"south-africa","country":"Cape Malay","occasion":["celebration","everyday"],"ingredients":"90g beef mince · 50g onion (finely chopped) · 4g garlic (crushed) · 10g white bread (soaked in 40ml milk) · 8g sultanas · 12g apricot chutney · 5g flaked almonds · 4g Cape Malay curry powder · 1g turmeric · pinch ground cloves & cinnamon · 5ml lemon juice · 5g butter · 5ml oil · ½ large egg (topping) · 50ml milk (topping) · 2 bay leaves · salt & pepper","method":"Soak the bread in the 40ml milk for 10 minutes, then mash to a paste — this keeps the bobotie moist without turning it wet. Heat the butter and oil and fry the onion and garlic gently until soft and sweet, about 6 minutes. Stir in the curry powder, turmeric, cloves and cinnamon and cook 1–2 minutes until fragrant — blooming the spices in fat is what gives bobotie its deep, rounded flavour instead of a raw bite. Turn up the heat and brown the mince well, breaking up the lumps. Stir in the chutney, sultanas, almonds, lemon juice, mashed bread and a good pinch of salt, and simmer 10 minutes until thick. Spoon into a greased baking dish and press level. Whisk the egg with the 50ml milk and a pinch of salt, pour over the mince as the topping, and tuck the bay leaves into the surface. Bake at 180°C for 35–45 minutes until the custard is just set and golden — pull it while it still has a slight wobble so it stays silky, never rubbery.","cookTime":"Prep 25–30 min · Bake 35–45 min","kcal":"~450–500 kcal","nutrition":"Protein 28g, Carbs 24g, Fat 27g, Sodium ~650–750mg","storage":"Fridge 3–4 days or freeze up to 3 months. Reheat at 160°C; lovely cold in sandwiches or wraps.","chefNotes":"Don't over-soak or over-pack the bread or the bake turns wet and dense. Brown the mince properly for depth, and bake the custard only until just set — overbaking makes it weep. Lamb mince is the traditional alternative to beef.","pairsWith":"Cape Malay yellow rice, tomato-onion sambal, banana slices and extra chutney.","trivia":"Bobotie may be the world's most-travelled 'national dish' — the earliest known recipe appears in a Dutch cookbook from 1609, long before it reached the Cape, where the Cape Malay community made it their own.","howThisFeels":"Sweet-spiced mince under a golden, just-set custard, bay leaves curling on top — the smell that fills a Cape kitchen on a Sunday.","servings":1,"sharedWith":"Boerekos"},
```

## Surfaced shared-build (the gap this test found) → flowchart
**WK version engine.** To let World Kitchen carry versions like Meals does, `wkRecipeOpts` needs the version strip + `applyRecipeVersion` wired in (currently Meals-only). Until then, WK heroes stay single-recipe. Also worth a later pass: WK renders `trivia` inside a *lumped* info-row (chefNotes/pairs/nutrition/storage/trivia together), not a standout 💡 box like Meals — a small sameness fix when the version build happens.

## Still open (your calls)
1. **`trivia` fact** — lock #1, #2, or #3 above.
2. **Name** — keep `Bobotie`, or lead the card with `Cape Malay Bobotie` / `Golden-Topped Bobotie`?
3. **Flaked almonds** — keep (authentic) or drop (leaner, fewer new PRICE_DB names)?
