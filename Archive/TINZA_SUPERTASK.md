# TINZA — SUPER TASK for Claude Code (20–21 Jun)

One handover covering: the photo browse-card bug, recipe changes (Frango fix,
Lula Grelhada, Ewedu, Efo Riro, shrimp powder), swallow serving notes, and the
World Kitchen cross-link hook. Do the phases **in order**. Supersedes
TINZA_PHOTO_BROWSE_FIX.md and TINZA_CROSSLINK_TASK.md.

> All objects below are written in the REAL wk_africa.js schema:
> single-line, `ingredients`/`method` are `·`-separated **strings**,
> `cuisine` is regional (`"west-africa"`, `"southern-africa"`),
> `type`/`diet`/`occasion` are arrays, `nutrition`/`cookTime`/`kcal` are strings.

---

## GUARDRAILS (read first, every time)
```
Before any code: curl and read TINZA_STANDARD.md and TINZA_HANDOFF.md from the repo
root. The Standard takes precedence over anything in this file.

core.js is sacred — back it up, record line count before and after, node --check
before every push. ONE file at a time. DO NOT push — show me the diff per file; I
push via GitHub Desktop and verify live before the next file. Every section must
match braai v33 exactly.
```

---

## PHASE 1 — 🔴 FIX: browse-card photos 404 (do this FIRST)
**Why:** browse cards build the photo filename from the *display* name (recipe name +
bracketed nameAlt), so "Koshari" looks for `Koshari (Rice, Lentils & Pasta).jpg`
instead of `Koshari.jpg` → 404 → emoji. Every recipe with a nameAlt is hidden, all
regions. The detail page is already correct.

```
EDIT 1 — core.js, warmCard(): the image url currently uses cleanPhotoName(o.name||'').
Change ONLY that argument to fall back through a new photoName field:
    cleanPhotoName(o.photoName || o.name || '')
Nothing else in warmCard changes. Backward-compatible. node --check.

EDIT 2 — worldkitchen.js, the warmCard call (~line 158): add photoName:r.name, leaving
name:disp as the visible title:
    return warmCard({ name:disp, photoName:r.name, emoji:emoji, ...rest unchanged... });
node --check.

EDIT 3 — braai.js: Braai also uses warmCard. Check how it calls it; if it passes a
combined/bracketed name while photos are saved under the bare name, add
photoName:<bare name> there too. If it already passes a bare name, leave it. Report
what you found — do not guess.

VERIFY: node --check on all three. core.js line count unchanged. Confirm the warmCard
url for Koshari now ends in /Koshari.jpg. Show diffs. Do not push.
```

---

## PHASE 2 — Recipe data in wk_africa.js

### 2a. FIX Frango à Zambeziana (replace the whole object, KEEP the id)
The current method wrongly simmers the chicken in coconut milk. It's a braai dish:
marinate, grill while basting, then boil the leftover marinade into a sauce.
Replace the object with id `mozambique-frango-a-zambeziana` with:
```json
{"id": "mozambique-frango-a-zambeziana", "name": "Frango à Zambeziana", "nameAlt": "Zambezia Chicken", "aliases": [], "course": "main", "type": ["main"], "diet": [], "cuisine": "southern-africa", "country": "Mozambique", "occasion": ["braai", "celebration"], "ingredients": "200g chicken pieces (bone-in) · 120ml coconut milk · ½ lemon (juice) · 5g garlic · 10ml oil · chilli to taste · Salt", "method": "Whisk the coconut milk, lemon juice, crushed garlic, chilli and salt into a marinade and coat the chicken; rest at least 2 hours, overnight is better. Lift out the chicken and keep the marinade for basting. Braai over medium coals (or grill/oven 200°C), turning and basting often, until the juices run clear, about 35–45 min. Tip the leftover marinade into a small pot and boil it hard for a few minutes until slightly thickened — it has held raw chicken, so this is essential — then serve as a sauce over the chicken with rice.", "cookTime": "45–60 min", "kcal": "~380–450 kcal", "nutrition": "Protein 32g, Fat 25g.", "storage": "Best fresh off the coals. Fridge 2 days; reheat gently.", "chefNotes": "Baste on the fire, then boil the leftover marinade into the sauce — never serve it raw.", "pairsWith": "Coconut rice or Xima.", "trivia": "The signature dish of Zambézia province — Quelimane grill cooks are famous for it.", "howThisFeels": "Chicken grilled over coals and basted with Zambézia coconut — a regional pride you can smell from the gate.", "servings": 1, "sharedWith": ""}
```

### 2b. ADD Lula Grelhada (NEW Mozambique recipe — do NOT delete Xima)
> Xima is the staple that Matapa, Frango Piri-Piri, Caril de Camarão and Matata all
> pair with, so keep it. Add Lula Grelhada as a new dish in the Mozambique block.
```json
{"id": "mozambique-lula-grelhada", "name": "Lula Grelhada", "nameAlt": "Grilled Calamari", "aliases": ["Lulas Grelhadas"], "course": "main", "type": ["main"], "diet": ["pescatarian"], "cuisine": "southern-africa", "country": "Mozambique", "occasion": ["braai"], "ingredients": "200g cleaned calamari (tubes & tentacles) · 10ml olive oil · 5g garlic (crushed) · ½ lemon (juice + wedges) · 1 chilli (chopped, to taste) · Small handful parsley or coriander · Salt", "method": "Pat the calamari dry and score the tubes lightly. Toss with the olive oil, garlic, half the lemon juice, chilli and salt; rest 15–20 min (no longer, or the acid toughens it). Grill over fierce heat 1–2 min per side only, until just opaque with a little char — past that it goes rubbery. Squeeze over the rest of the lemon, scatter the herbs and serve with chips, salad and lemon wedges.", "cookTime": "15–20 min", "kcal": "~230–270 kcal", "nutrition": "Protein 30g, Fat 12g, Carbs 4g.", "storage": "Eat immediately — calamari toughens and weeps if it stands.", "chefNotes": "High heat, fast cook, off quick. Over-cooking or over-marinating in acid both turn it rubbery.", "pairsWith": "Hot chips, tomato & onion salad, lemon wedges.", "trivia": "A fixture of the beachside 'barracas' — the grill shacks along Mozambique's Indian Ocean coast.", "howThisFeels": "Two minutes over fierce coals — lemon, garlic and chilli, the way the barraca shacks do it.", "servings": 1, "sharedWith": ""}
```
> ALTERNATIVE (only if Tina says delete Xima): remove the `mozambique-xima` object,
> reuse its slot for Lula Grelhada, AND change every "pairsWith": "...Xima..." in the
> Mozambique recipes to "Coconut rice or rice." Also re-add a Xima card in the photo
> studio if you want it back there. Default is KEEP Xima.

### 2c. ADD Ewedu (NEW Nigeria recipe — uses Dried shrimp powder, not crayfish)
```json
{"id": "nigeria-ewedu", "name": "Ewedu", "nameAlt": "Jute Leaf Soup", "aliases": ["Ewedu Soup"], "course": "main", "type": ["main", "side"], "diet": ["pescatarian"], "cuisine": "west-africa", "country": "Nigeria", "occasion": ["everyday"], "ingredients": "60g jute leaves (ewedu, stems removed) · 5g iru (locust beans) · 5g Dried shrimp powder · 150ml water · Salt to taste", "method": "Bring the salted water to a boil and add the washed jute leaves; simmer 5–8 min until soft and bright green. Blend with a little cooking water until smooth and viscous (traditionally beaten with an ijabe broom). Return to the pot, stir in the iru and Dried shrimp powder and simmer 2–3 min. Keep it loose so it 'draws'. Serve over soft Amala.", "cookTime": "15 min", "kcal": "~60–90 kcal", "nutrition": "Protein 4g, Carbs 7g, high in vitamins A & C.", "storage": "Fridge 2-3 days. Reheat gently with a splash of water.", "chefNotes": "The whole game is the draw — less water, more viscous. Don't overcook or you lose the green.", "pairsWith": "Amala, Gbegiri, pepper stew.", "trivia": "A Yoruba buka staple — Ewedu, Gbegiri and Amala together make the combo called 'abula'.", "howThisFeels": "Silky, green and quiet — the everyday soul of a Yoruba lunch table.", "servings": 1, "sharedWith": ""}
```

### 2d. ADD Efo Riro (NEW Nigeria recipe — chilli + Dried shrimp powder)
```json
{"id": "nigeria-efo-riro", "name": "Efo Riro", "nameAlt": "Spinach Stew", "aliases": ["Nigerian Spinach Stew"], "course": "main", "type": ["main"], "diet": [], "cuisine": "west-africa", "country": "Nigeria", "occasion": ["everyday"], "ingredients": "120g spinach (chopped) · 15ml palm oil · 40g red bell pepper (blended) · ½ chilli (blended, to taste) · 30g onion · 5g iru (locust beans) · 5g Dried shrimp powder · 80g assorted beef or smoked fish · Salt & stock to taste", "method": "Blend the red pepper, chilli and half the onion to a coarse pulp. Heat the palm oil and fry the iru and remaining sliced onion until fragrant. Add the pepper blend and fry 10 min until reduced. Stir in the Dried shrimp powder, stock and pre-cooked protein and simmer a few minutes. Fold in the spinach last and cook uncovered 3–5 min only, so it stays green. Serve with Amala, pounded yam, eba or rice.", "cookTime": "30 min", "kcal": "~300–340 kcal", "nutrition": "Protein 22g, Fat 22g, Carbs 9g.", "storage": "Fridge 3 days; freezes well. Reheat on the stove.", "chefNotes": "Spinach goes in at the very end — long cooking turns it grey. The iru and Dried shrimp powder give it the deep Yoruba savour.", "pairsWith": "Amala, pounded yam, eba, rice.", "trivia": "'Efo' means leafy greens and 'riro' means stirred — literally 'stirred spinach', a South-Western Nigerian favourite.", "howThisFeels": "Deep red palm oil, greens and chilli — a rich, generous plate that means good company.", "servings": 1, "sharedWith": ""}
```

### 2e. Swallow serving notes (so they don't look "boring")
Update ONLY the chefNotes string on these two existing recipes:
- `nigeria-pounded-yam` chefNotes →
  `"Pound until stretchy and smooth. A swallow is never eaten alone — tear off a piece by hand and dip it into a rich soup like Efo Riro."`
- `nigeria-amala` chefNotes →
  `"Stir vigorously over heat until smooth and stretchy. Best eaten by hand with a drawing soup — the classic Yoruba combo is Amala with Ewedu and Gbegiri."`

**VERIFY Phase 2:** node --check wk_africa.js. Recipe count = previous + 2 (Lula, Ewedu, Efo Riro = +3 if Xima kept; note Frango is a replace not an add). Show diff. Do not push.

---

## PHASE 3 — World Kitchen cross-link hook + links
**Build the hook once; it lights up all current and future wk cross-links.**
```
crossLinkBox() already exists in core.js (~line 2204); Braai renders it (~core.js 2902)
from a recipe's _bcl = { emoji, name, open }. RECIPE_SOURCES.world / .spice are already
registered, so openRecipe('world', id) and openRecipe('spice', id) work.

EDIT — worldkitchen.js detail render (wkRecipeOpts / wkDetailV33): if the recipe has a
_bcl, render crossLinkBox(r._bcl) exactly where/how Braai does. Back via snapshotNav.
This is the only structural change. node --check.
```
Then add a `_bcl` to these recipes in wk_africa.js (function values are fine — Braai
already uses them):
- `libya-hummus` → `_bcl: { emoji:"🥣", name:"Tahini", open:()=>openRecipe('spice','tahini') }`
- `nigeria-pounded-yam` → `_bcl: { emoji:"🥬", name:"Efo Riro", open:()=>openRecipe('world','nigeria-efo-riro') }`
- `nigeria-amala` → `_bcl: { emoji:"🍲", name:"Ewedu", open:()=>openRecipe('world','nigeria-ewedu') }`

> Niter kibbeh cluster (doro-wat, shiro-wat, kitfo, tibs, gomen, misir-wat, siga-wat,
> atikilt-wat, firfir) is DEFERRED — there is no standalone niter kibbeh recipe yet, so
> there's nothing to link to. Skip it and note it for a future task.

**VERIFY Phase 3:** node --check core.js + worldkitchen.js + wk_africa.js. Confirm the
three _bcl targets resolve. Show diffs. Do not push.

---

## PHASE 4 — Pricing check (prices.js / PRICE_DB)
The new recipes introduce these — confirm each resolves in PRICE_DB (add if missing,
following the existing format/aliases):
- `jute leaves (ewedu)`
- `iru (locust beans)`
- `Dried shrimp powder` (should already be aliased from the earlier sweep — confirm)
- `palm oil`
- `calamari`
Report which were already present vs added. Do not push without showing me.

---

## AFTER ALL PHASES
- Update TINZA_NOW.mermaid: move Phases 1–3 to DONE, note niter kibbeh staple recipe
  as the remaining cross-link task.
- Remind Tina (her side, not code): photos still to shoot — Tunisia (14), Zimbabwe (14),
  Tanzania (7), Libya (1), Mozambique (1 + Lula), plus Ewedu/Efo Riro/Frango.
