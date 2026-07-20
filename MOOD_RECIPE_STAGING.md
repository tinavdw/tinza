# 🍲 TINZA · MOOD RECIPE STAGING
*A running collection. We drop in recipes for specific moods as we find them. When a mood has **enough**, its recipes graduate into **FMF** under the most appropriate heading (Breakfast / Lunch / Supper / Bakes), each carrying an **internal `mood[]` tag** — the tag only we see (§14), never shown to the user. The user just gets a better "Just Feed Me" shelf; they never see the label.*

**Rule of the file (⚖️ Law 53):** nothing here is "done" until it's built into FMF *and* tagged. Staging is not building. This file is the memory so none of it slips.

**🌍 Locale rule (SA = locale #1):** author **SA-first**, but **mark every locale-specific line as it's written** so UK/US later is a *fill-in, not a rewrite*. Two kinds of swap: **terminology** (brinjal↔aubergine — display dictionary, same ingredient) and **product** (Ro-Tel→tinned tomato+green chilli — a real per-locale override on specific lines). Locale is picked by the system from location — it is **not** a user-facing version chip. v1 ships SA only.

---

## 🎭 The 12 moods (the real vocabulary — tag against these exactly)
| id | | mood | feel |
|---|---|---|---|
| `exhausted` | 😴 | I'm exhausted | Low effort · Quick · Comfort |
| `pickmeup` | 😊 | I need a pick-me-up | Comfort · Treat · Lift your mood |
| `sick` | 🤒 | I'm not feeling well | Light · Nourishing · Easy to digest |
| `impress` | 🔥 | I want to impress | Special · Impressive · Worth the effort |
| `healthy` | 🌿 | I want to be healthy | Nutritious · Balanced · Energising |
| `quick` | ⚡ | Need it fast | Under 20 min · No fuss |
| `lazy` | 🛋️ | I'm feeling lazy | Minimal effort · Dump & go · One pot |
| `fussy` | 😤 | Fussy little ones | Kid friendly · Hidden veg · No drama |
| `cold` | 🌧️ | It's cold & cloudy | Soup · Stew · Warm from the inside |
| `sweet` | 🍰 | I need something sweet | Dessert · Bake · Treat |
| `adventurous` | 🌍 | I'm feeling adventurous | New flavours · Bold · Explore |
| `celebrating` | 🎉 | I'm hosting/celebrating | Crowd pleaser · High volume |

---

## 📊 Coverage tracker (staged candidates per mood)
*"Enough" ≈ a comfortable shelf per mood before graduating. Most moods still empty — this is a long, slow collection.*

| mood | staged | notes |
|---|---|---|
| exhausted | 3 | ⚡ Chilli con Carne + Butter Chicken + Bunny Chow (below) |
| pickmeup | 2 | cross-tagged (both below) |
| sick | 2 | 🤒 gentle (tummy-side) versions of Mac & Cheese + Spag Bol (below) |
| impress | 0 | |
| healthy | 3 | 🌿 lighter Butter Chicken + root-veg Mash + chickpea Bunny Chow (below) |
| quick | 3 | ⚡ Chilli con Carne + Butter Chicken + Bunny Chow (below) |
| lazy | 3 | Cheesy Taco Pasta + 😴 skillet Lasagne + no-stir Risotto (below); library also tag-rich |
| fussy | 2 | Cheesy Taco Pasta + 👶 hidden-veg Bunny Chow (below) |
| cold | 2 | Chicken Pot Pie Soup + 🌧️ Sloppy Joe cold chips (below) |
| sweet | 0 | |
| adventurous | 1 | 🌍 bold Lasagne variations (below) + WK is a big tag-only source |
| celebrating | 0 | |

---

## ✅ Staged candidates (satisfied — ready to author when the mood fills up)

### 1. Chicken Pot Pie Soup
- **mood[]:** `["cold", "pickmeup"]`
- **FMF heading:** Supper
- **Verdict:** ✅ Satisfied — SA-ready as-is. All-the-cozy-of-pot-pie without the pastry faff; a strong `cold` anchor (soup · warm from the inside).
- **Sketch:** shredded chicken, carrots, peas, potatoes in a creamy velvety broth (roux + stock + a splash of milk/cream). Served with crusty bread or drop biscuits on the side.
- **SA notes:** everyday SA ingredients throughout — no adaptation needed. Optional: thicken with a little cake flour roux; frozen peas are fine.
- **🌍 Locale:** clean — no product swaps. Terminology-safe, UK/US-ready as-is.
- **Source:** themodernproper.com/chicken-pot-pie-soup · theleangreenbean.com/comfort-meals

### 2. Cheesy Taco Pasta (one-pot)
- **mood[]:** `["lazy", "fussy", "pickmeup"]`
- **FMF heading:** Supper
- **Verdict:** ✅ Satisfied **with one SA swap** — kids devour it, genuinely one-pot, strong `lazy` + `fussy` fit.
- **Sketch:** beef mince browned, then tinned tomato + pasta + stock cooked together in one pot, finished folded through with melted cheddar.
- **⚠️ SA adaptation (do at build):** the US recipe uses "diced tomatoes with green chiles" (Ro-Tel — not sold here). Swap for **tinned chopped tomato + a fresh green chilli** (or a spoon of taco/fajita spice). Use SA cheddar. Optional hidden veg (grated carrot/courgette) for the `fussy` angle.
- **🌍 Locale (mark this line):** the tomato line is the one locale-specific ingredient.
  - `SA` (locale #1): tinned chopped tomato + 1 fresh green chilli
  - `UK` (later): tin chopped tomatoes + 1 green chilli
  - `US` (base): 1 tin diced tomatoes with green chiles (Ro-Tel)
  - Everything else is locale-clean. This is the *only* line UK/US would touch — proof the "mark it now" discipline keeps the fill-in tiny.
- **Source:** one-pot cheesy taco pasta (multiple; American Tex-Mex mashup)

---

## 🤒 "I'm not feeling well" — VERSION CHIPS on existing dishes (tummy-side)
*These are NOT new recipes — they're gentle 🤒 version chips added to dishes already in the library (⚖️ Bobotie rule: same dish, gentler way · ⚖️ Law 53: don't duplicate, version the live record). This batch is the **tummy/sensitive-stomach** side (bland · soft · mild). The 🤧 flu side (warming · chicken soup · ginger · vitamin-C lift) is a separate collection still to come. Feel-lines authored in Tinza's own WOW voice — technique is general sensitive-stomach cooking sense, reworded, never lifted from a source.*

### 3. Mac & Cheese — 🤒 "Gentle" version
- **mood[]:** `["sick"]`  ·  **Type:** VERSION CHIP on the live **Mac & Cheese** (do not re-add)
- **Feel (WOW):** "Soft and mild, made to slip down easy on a sore day — little shells in a light, milky cheese sauce, with nothing sharp or heavy to trouble a tender tummy."
- **Delta from the base:** smaller, softer pasta (elbows or shells) boiled right through to fully tender; a light sauce built on full-cream milk, no cream; a mild, easy-melting cheese (mild cheddar or mozzarella) in place of sharp mature cheddar; leave out the mustard, pepper and paprika and any heat; season barely.
- **SA:** everyday pantry — mild cheddar, macaroni, full-cream milk. No adaptation. **Locale:** clean.

### 4. Spaghetti Bolognese — 🤒 "Gentle" version
- **mood[]:** `["sick"]`  ·  **Type:** VERSION CHIP on the live **Spaghetti Bolognese** (do not re-add)
- **Feel (WOW):** "A bolognese with its edges rubbed smooth — lean and mild, the veg grated down to nothing and the sauce cooked soft, gentle enough for an appetite still finding its feet."
- **Delta from the base:** extra-lean beef mince (or lean turkey/chicken); carrots and celery finely **grated** so they melt invisibly into a smooth sauce with almost no chewing; passata or blended tinned tomato instead of concentrated paste (lower acid); no raw garlic, no chilli, no heavy spice — just a whisper of dried oregano or basil; a low-salt stock or bouillon; the spaghetti cooked a touch softer than usual.
- **⚠️ Note the overlap:** the grated-veg move is the SAME technique as the 👶 hidden-veg kid version — different intent (kid = *hide*, sick = *soften*). Keep them as two distinct chips; don't merge.
- **SA:** everyday. **Locale:** clean.

---

## ⚡ Fast / low-effort — VERSION CHIPS (quick · exhausted)
*Fast by METHOD, never by packet (⚖️ mood-versions ruling, 16 Jul). Version chips on dishes already in the library — same dish, quicker way.*

### 5. Beef Chilli con Carne — ⚡ "20-Minute" version
- **mood[]:** `["quick", "exhausted"]`  ·  **Type:** VERSION CHIP on the live **Beef Chilli con Carne** (`sp-chilli-con-carne`, 45-min base — do not re-add)
- **Feel (WOW):** "The whole comforting bowl in twenty minutes flat — brighter and fresher than the long-simmered one, but every bit of it built from scratch, not a jar in sight."
- **Delta from the base:** soften onion, garlic and bell pepper; brown the mince; straight in with chilli powder, cumin, tinned tomatoes, tomato paste and a splash of beef stock; simmer hard for 15; fold through rinsed kidney beans to heat through. Serves ~4 off 500g mince.
- **🫙 Honest note:** the short simmer trades some slow-cooked depth for speed — that's the deal, and it stays real food. This is the ruling's example dish made flesh.
- **SA:** everyday pantry — mince, tinned tomato, kidney beans, tomato paste. No adaptation. **Locale:** clean.

### 6. Butter Chicken — ⚡ "20-Minute" version
- **mood[]:** `["quick", "exhausted"]`  ·  **Type:** VERSION CHIP on the live **Butter Chicken** (`sp-butter-chicken`, 45-min FMF base — NOT the WK Murgh Makhani `india-butter-chicken`; leave that one authentic)
- **Feel (WOW):** "Restaurant butter chicken on a school night — bite-size thighs seared in butter, a quick spiced tomato-cream sauce built in the same pan, done before the rice is."
- **Delta from the base:** sear bite-size chicken thighs in butter and set aside; in the same pan bloom garlic, ginger, garam masala, cumin and a little chilli; stir in tomato paste and cream (or coconut milk) to a thick sauce; the chicken back in for a short simmer. Bite-size pieces + one pan is where the speed comes from.
- **SA:** everyday. **Locale:** clean.

---

## 🌿 Healthy — VERSION CHIPS (healthy)
*Lighter takes on dishes already in the library. Same dish, made lighter — labelled honestly, never pretending to be the indulgent original (⚖️ Bobotie rule + the "veg-rich is the comfort" ruling).*

### 7. Butter Chicken — 🌿 "Lighter" version
- **mood[]:** `["healthy"]`  ·  **Type:** VERSION CHIP on the live **Butter Chicken** (`sp-butter-chicken`)
- **Feel (WOW):** "All the warm spice and silk of butter chicken, lightened — lean breast, just a lick of real butter for flavour rather than richness, and light coconut milk or Greek yoghurt standing in for the cream."
- **Delta from the base:** lean chicken breast instead of thigh; one tablespoon of real butter for flavour (not the full richness) or a little olive oil; swap the cream for light coconut milk or 0% Greek yoghurt — stir yoghurt in OFF the heat so it doesn't split.
- **🫙 Honest note:** lightening pulls it a little from its indulgent original — it's the same dish made lighter, not traditional Murgh Makhani. Label it clearly as the lighter take.
- **SA:** everyday. **Locale:** clean.

### 8. Mash — 🌿 "Root-Veg" version
- **mood[]:** `["healthy"]`  ·  **Type:** VERSION CHIP on the live **Mash** (`sb-mash`, side)
- **Feel (WOW):** "Mash with more to it — sweet potato, carrot, parsnip or butternut mashed through or instead of the potato, loosened with olive oil or a splash of stock rather than a brick of butter."
- **Delta from the base:** replace or bulk the white potato with sweet potato / carrot / parsnip / butternut; chop even so they cook together; boil or steam 15–20 min to fork-tender; mash with olive oil or a splash of veg stock instead of heavy butter.
- **♻️ One side, three uses:** this is also the heartening veg-rich partner for the bangers & mash idea, AND doubles as 👶 hidden-veg for kids (carrot/butternut mashed in vanishes). Author once, tag for all three.
- **SA:** everyday. **Locale:** clean.

---

## 🌍 Adventurous — VERSION CHIPS (adventurous)
*Bold twists on a familiar dish — a different flavour of "adventurous" from authentic World Kitchen, and both belong. Keep the familiar default chip so the classic is never lost.*

### 9. Beef Lasagne — 🌍 Bold variation chips
- **mood[]:** `["adventurous"]`  ·  (the Mushroom & Gorgonzola chip also earns `["impress"]`)  ·  **Type:** VERSION CHIPS on the live **Beef Lasagne** (`sp-lasagne`) — classic beef-and-tomato stays the DEFAULT chip.
- **The chips (leave the classic default in place):**
  - 🍄 **Mushroom & Gorgonzola** — deep mixed mushrooms and blue-cheese richness in place of the beef-and-tomato; a grown-up, meat-free showpiece (also → `impress`). *"A lasagne that swaps the mince for a forest of mushrooms and a bold streak of blue cheese — rich, savoury and unmistakably grown-up."*
  - 🎃 **Butternut & Sage** — roast butternut and crisp sage layered white; sweet-savoury and vegetarian. *"Sweet roast butternut and crisp sage between the sheets — an autumn lasagne with no tomato in sight."*
  - 🥛 **White / Béchamel base** — swap the ricotta for a silky béchamel; the underpinning for both meat-free chips above (a technique swap, not a dish on its own).
- **SA:** butternut, mushrooms, sage everyday. ⚠️ **Gorgonzola is a specialty/pricier buy** — note for costing at build (do NOT author a price — ⚖️ Law 11). **Locale:** clean.
- **🫙 Honest note:** these leave the tomato-beef comfort zone on purpose — that's what makes them adventurous. The classic must remain the default so nobody loses the everyday lasagne.

> 💡 **Reminder for `adventurous`:** this mood's biggest fill is TAG-ONLY from **World Kitchen** — the authentic global dishes are already "new flavours · bold · explore." These lasagne twists are a lovely bonus, not the main source. Say the word and I'll pull a tight WK tag-only shortlist.

---

## 🍞 Durban Bunny Chow — a hero SA dish, three tuned chips
*One iconic dish, three moods. Version chips on the live **Durban Bunny Chow** (`sp-bunny-chow`) — NOT the WK authentic (`indian-bunny-chow`) or the featured slow-lamb (`pr_bunny_chow`); leave those. The classic stays the default chip. Generous at 3 chips, but justified — it's a flagship SA dish and each chip serves a genuinely different mood.*

### 10. Durban Bunny Chow — ⚡ "20-Minute" chip
- **mood[]:** `["quick", "exhausted"]`
- **Feel (WOW):** "The Durban favourite on a weeknight — a quick masala with cubed chicken (or beans) and pre-cooked potato, spooned into a hollowed quarter-loaf while it's still steaming."
- **Delta:** skip the slow-cooked meat — small-cubed chicken breast, mince, or tinned beans/chickpeas; quick sauté of onion, garlic, ginger, Durban masala; add protein + pre-boiled or microwaved potato; simmer to thicken; serve in a hollowed quarter-loaf. Pre-cooking the potato is the speed trick.

### 11. Durban Bunny Chow — 👶 "Hidden-Veg Kids" chip
- **mood[]:** `["fussy"]`
- **Feel (WOW):** "A gentle bunny chow built for small people — a mild, smooth curry with the veg blended right in, served in a little hollowed whole-wheat roll they hold in both hands."
- **Delta:** blend tomato, carrot and butternut smooth into the sauce (no bits to reject); tone the heat right down — ground coriander, cumin, a whisper of turmeric, no chilli; bite-size chicken or soft chickpeas; serve in individual whole-wheat round rolls hollowed like personal bowls (the hands-on fun is the point).
- **⚠️ Rule check:** hidden-veg = the same Shelf-WOW "never disguise" flag from backlog #13 — Tina rules before build.

### 12. Durban Bunny Chow — 🌿 "Chickpea & Sweet Potato" chip
- **mood[]:** `["healthy"]`
- **Feel (WOW):** "A lighter bunny chow that keeps all the Durban warmth — chickpeas and sweet potato in place of slow-cooked meat, ladled into a whole-wheat roll for the fibre."
- **Delta:** chickpeas + cubed sweet potato instead of meat; the same Durban curry base (masala, turmeric, cumin, ginger, tomato); veg stock; whole-wheat rolls or quarter-loaf. Plant-based, high-fibre, ~30 min.

- **SA:** everyday pantry throughout — masala, tinned beans/chickpeas, sweet potato, whole-wheat bread. Bunny chow IS locale #1 by birth. **Locale:** UK/US may need a gloss on "quarter loaf" (a hollowed crusty roll); ingredients clean.

---

## 🌧️ Cold & cloudy — VERSION CHIPS (cold)

### 13. Sloppy Joes — 🌧️ Cold-weather chips
- **mood[]:** `["cold"]`  ·  **Type:** VERSION CHIPS on the live **Sloppy Joes** (`sp-sloppy-joes`)
- 🌶️ **Amped & slow:** chilli powder, a pinch of red-pepper flakes, extra tomato paste, simmered low 30 min to a rich thick paste — heartier and warmer than the quick weeknight one.
- 🫑 **Stuffed peppers:** the same filling packed into halved bell peppers, topped with cheddar, baked till bubbling — veg-forward, fits the "veg-rich is the comfort" ruling beautifully.
- 🌽 **Cornbread-topped bake:** the filling under a from-scratch cornbread batter, baked golden — a cosy cold-night casserole.
- **⚠️ RULING FLAG — one variation left OUT on purpose:** the popular "tater-tot topping" does NOT make the cut. Frozen tater tots are exactly the shop-shelf processed shortcut the 16 Jul mood-versions ruling bars ("no McDonald's-garbage; the freezer is for YOUR make-ahead, not the shop's"). Cornbread from scratch is the Tinza way. Tina can overrule.
- **SA:** mince, peppers, tomato, maize meal (for cornbread) everyday. **Locale:** clean.

---

## 😴 Lazy — VERSION CHIPS (lazy)
*"Lazify" a dish only if it has real steps worth REMOVING — one pan, fewer stages, no fuss. Never simplify by swapping to shop-bought (⚖️ mood-versions ruling: lazy comes from fewer steps, never a jar). Note: nachos/quesadillas are already lazy → those are TAG-only, not chips.*

### 14. Beef Lasagne — 😴 "One-Pan Skillet" version
- **mood[]:** `["lazy"]`  ·  **Type:** VERSION CHIP on the live **Beef Lasagne** (`sp-lasagne`)
- **Feel (WOW):** "All the comfort of lasagne with none of the layering — broken sheets simmered right in the pan with the meat sauce, cheese stirred through, one skillet to wash."
- **Delta:** skip the layering and the separate béchamel entirely; brown the mince and sauce in a wide pan, break the lasagne sheets straight in with a little extra liquid, simmer until the pasta is tender, stir cheese through the top and let it melt. One pan, no oven assembly.
- **SA:** everyday. **Locale:** clean.

### 15. Seafood Risotto — 😴 "Oven / No-Stir" version
- **mood[]:** `["lazy"]`  ·  **Type:** VERSION CHIP on the live **Seafood Risotto** (`sp-seafood-risotto`)
- **Feel (WOW):** "Risotto without standing at the stove — rice, stock and aromatics into a dish, into the oven, and it comes out creamy on its own while you get on with something else."
- **Delta:** skip the ladle-and-stir. Sweat the onion, toast the rice, add all the warm stock at once, cover and bake until tender and creamy — no stirring. Stir the seafood in only for the last few minutes so it doesn't overcook, then the cheese/butter to finish. (The no-stir oven method also suits a plain or mushroom risotto beautifully.)
- **SA:** everyday. **Locale:** clean.

---

## 🔁 Already in the library — TAG ONLY, do not re-add
### Mushroom Beef Stroganoff — `meals.js:9747`
- **mood[]:** `["pickmeup", "cold", "lazy"]`
- Already authored and live. When MF117 builds the live mood query, this recipe just needs the `mood[]` tag added — **do not create a duplicate.** (This is exactly the dedup ⚖️ Law 53 is about: check the library before adding.)

---

## 🗑️ Rejected / needs work
*(none yet)*
