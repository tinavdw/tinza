# TINZA — Breakfast Merge Plan
**Session 7 handoff · 28 Jun 2026 · for the MERGE conversation**

Start that chat by uploading: `TINZA_NOW.mermaid` + `breakfast_merge_bundle.js` + this file.
All objects are in `breakfast_merge_bundle.js`. Everything new is a **candidate** for Tina's review first.

---

## 0. Before touching anything (stability rules)
- Open **tinza.netlify.app**, confirm breakfast works as-is.
- Read the **live** files via raw.githubusercontent.com (cache-bust `?cb=$RANDOM`) — never trust this summary over the live repo.
- `node --check` every file before any push.
- Push via **GitHub Desktop only**. Batch all validated files into **one push** (Netlify credits).
- Every card must match **braai v33** and render only through shared `core.js` functions.

---

## 1. What goes where

### A. NEW bundle cards → add to `BREAKFAST_RECIPES`
Each is one card with a `versions[]` chip strip, one shared accent-free photo.
| Object | Card | Chips | Notes |
|---|---|---|---|
| `BF_WAFFLES` | Waffles | 5 | photoName `Waffles` |
| `BF_FRITTATA` | Frittata | 5 | incl **Chorizo & Sweetcorn** (renamed); Tomato-Basil-Pesto cross-links pesto |
| `BF_MUFFINS` | Muffins | 6 | photoName `Muffins` |
| `BF_SCONES` | Scones | 6 | Buttermilk-Jam-&-Cream cross-links strawberry-jam |

### B. Standalone dishes → add to `BREAKFAST_RECIPES`
| Object | Dish(es) | Notes |
|---|---|---|
| `BF_OMELETTE_WAFFLE` | Omelette Waffle | **OPEN:** standalone wow OR 6th chip in Eggs-Your-Way (Tina's call) |
| `BF_EGGS_INTERESTING` | Smoked Snoek Scramble · Chakalaka Baked Eggs · Turkish Eggs | Chakalaka Baked Eggs = brinner-eligible |

### C. Chips → INSERT into EXISTING bundles' `versions[]`
| Object | Insert into | Notes |
|---|---|---|
| `OATS_INTERESTING_CHIPS` (5) | Oats card | after Creamy (default) + Overnight; set Oats card `freezes:true, fridgeDays:2` |
| `BOWLS_INTERESTING_CHIPS` (4) | Fruit & Yoghurt Bowls card | existing 4 bowls stay |
| `BF_SMOOTHIES` (7) | Smoothies card | Berry Banana + Green are the EXISTING LIVE recipes folded in — reconcile, keep most comprehensive |

### D. Spice section
| Object | Where | Notes |
|---|---|---|
| `SP_STRAWBERRY_JAM` | Spice → Sauces/Preserves | new "make your own", like Basil Pesto |

---

## 2. Cross-links to wire (pattern: `BRAAI_CROSS_LINKS`)
- Frittata → **Tomato, Basil & Pesto** → `openSpiceRecipe('basil-pesto')`
- Scones → **Buttermilk, Jam & Cream** → `openSpiceRecipe('strawberry-jam')`

## 3. Photo Studio shoot list (new, accent-free filenames)
`Waffles` · `Omelette Waffle` · `Frittata` · `Smoothie` · `Muffins` · `Scones` · `Strawberry Jam` · `Smoked Snoek Scrambled Eggs` · `Chakalaka Baked Eggs` · `Turkish Eggs`
(Oats & Bowls chips share their existing card photos — no new shots.)

## 4. PRICE_DB — verify / add (specialty ones most likely missing)
atchar · biltong · quinoa · cottage cheese · sour cream · smoked snoek · thick/Greek yoghurt · fresh dill · rooibos tea · Peppermint Crisp chocolate · caramel treat · coconut milk · cashews · desiccated coconut · buttermilk rusks · dried fruit · granadilla · maple syrup · golden syrup · apricot jam · culinary lavender · blue cheese · dried figs · walnuts · jalapenos · pecan nuts · nectarine · peaches · hot sauce
(costPP + nutrition on candidates are draft estimates — engine recomputes once these resolve.)

## 5. Standards now LOCKED (apply going forward)
- **X23 Collections** — themed lenses, never sections; dish keeps one home + soft tag. Collection #1 = Breakfast for Supper (2 doorways).
- **X24 Interesting-Dishes** — interesting + Tina-treatment, not google-able filler; anchors + skew interesting.
- **X25 Storage** — every recipe states fridge-days + freeze; card `freezes`/`fridgeDays` fields power Quick-Cooking + Freezer-Friendly collections.

## 6. Still open after the merge
- Omelette Waffle placement (standalone vs Eggs chip)
- Prune bland oats? (Banana-Honey · Apple-Cinnamon · Mango · Baked-Berry)
- Optional Pesto-Goat-Cheese egg chip
- **App-wide X25 retrofit** across older sections (its own task)

## 7. Suggested safe sequence
1. Tina reviews candidates (method + ingredients vs PRICE_DB).
2. Wire bundle cards (A) + standalone dishes (B) into `BREAKFAST_RECIPES`; insert chips (C); add jam (D).
3. Wire the 2 cross-links.
4. `node --check` all touched files.
5. One GitHub Desktop push; live-eyeball at tinza.netlify.app.
6. Add new photos to the shoot list; update `TINZA_NOW.mermaid`.
