# TINZA — RECIPE CONTRACT: RESERVED SLOTS  (rev 15 Jul 2026)
*Reserve the SHAPE now. Build the FEATURE later. So nothing needs retrofitting across 2,083 recipes or everyone's saved data.*

## Recipe-level (7)
1. **`ingredients[]` — structured** `{qty, unit, name, priceRef?, makeYourOwnId?}`
   → costing · scaling · shopping · pantry-match · make-your-own · allergen derivation.  ⚠️ World Kitchen is a `·`-string today.
2. **`steps[]` — structured** `{text, timerSeconds?}`  → Cook Mode + multi-timer dashboard.
3. **`tags[]` — flexible situational array**  (cold · hot · rainy · load-shedding · festive · quick …)  → weather / Right Now / load-shedding / any future situational feature, no new field ever.  ★ the future-proofing slot.
4. **`source`** — `db | chef | user`  → Add-a-Recipe + AI chef; retires MF118's 4 tokens.
   🆕 **RENAMED from `origin` — RULED 15 Jul 2026.** ⚖️ **Law 46 — the word `origin` was ALREADY TAKEN: it means A PLACE.** `core.js` `metaStrip()` prints `origin` as a **📍 pin**, fed `r.cuisine` / `r.country` / `r.region`. **Provenance is `source`. Location stays `origin`.** *(Census check 12 fails the build if a recipe-level `origin` ever comes back.)*
5. **`goesWith[]`** `{label, recipeId?}`  → clickable pairings (BD11) + make-your-own.
6. **`contains[]` — allergens** (~8 majors)  → the avoid-list filter. Derive from ingredients (slot 1), explicit override. SAFETY: hard-exclude, consistent "Contains" wording, "verify ingredients" note.
7. **`visibility`** — `private | shared | public`  → community recipe sharing + Add-a-Recipe.

*(Standardised, not new: `yield` · `diet[]` (12 tags: V VE PE KT GF DF DB LGI HF AI HL KS · religious+allergen HARD-hide, health SOFT-badge) · `versions[]` · the box-union — didYouKnow / howThisFeels / chefNote / storage / pairsWith, canonical-named — Front 6.)*

## 🆕 `slot` — RESERVED AT **TWO** LEVELS — **amended 21 Jul 2026** (MF125 · MF131)
**`slot`** — the meal slot: `BREAKFAST | LUNCH | SUPPER | SIDE | STARTER | TREAT | CONDIMENT | DRINK | PETFOOD | BABYFOOD`. A value outside that list **is not a slot** and is discarded. ⚖️ Law 45.

1. **Recipe level.** Authored in the data. **An adapter TRANSPORTS it and must never author it** — a slot literal inside an adapter is the MF125 bug being rebuilt. Where no slot is authored, `slot()` derives one; where nothing derives, the record is stamped `slotSource:'unresolved'` and is barred from every mood shelf. ⚖️ Law 6.
2. 🆕 **Version level — OPTIONAL, on an entry in `versions[]`**, alongside the `ingredients` · `method` · `time` · `costPP` · `nutrition` a version already carries. **A record's slot is its DEFAULT version's slot when its versions carry one.** A record whose versions carry no slot behaves **exactly** as it did before — this is additive, never breaking.

⚠️ **`slot` is one word at two levels, and they do NOT collide** — the same shape as `recipe.yield` vs `recipe.makeYourOwn.yield` above. **Never flatten one into the other.**
📌 **Measurement reads the FILED value (the default's); display reads the version the user picked.** One record must never count in two distributions.
⛔ **Never test `.versions` as a boolean — test `.length`.** `versions: []` is truthy and `null` was not.

*(Ruled in `TINZA_RULINGS.md` → **"`slot` LIVES ON THE VERSION"**, 21 Jul 2026, and written here the same day so the contract and the ruling agree — the `origin` → `source` precedent. **If they ever disagree, the ruling wins.**)*

## Saved-state store (today ONLY `tinzaTheme` persists; the rest vanish on close)
- **`preferences{}`** — one bag: `name · birthday · whatsapp · locale · tier(free/pro/deluxe) · cookingMethod[] · appetite · peopleDefault · dietFilters[] · avoid[] (allergens hard + dislikes soft) · calorieDisplay · subscribeWeekly · saved`
- **`favourites[]`** · **`plans[]`** (guest counts) · **`pantry[]` + shopping ticks**

## Price / ingredient model (1)
- **`aisle`** on each priced ingredient → aisle-grouped shopping list.

## Reserve SHAPE only — do NOT build now
Night-mode toggle · adaptive font · unit rounding · Explore tab · Home design · geofenced reminders · TWA wrap · greeting logic · weather API · Cook Mode screen · onboarding screen.
**Backend-dependent, post-launch (reserve shape, not logic):** community sharing (`visibility`+`source`) · weekly recipes to WhatsApp (`whatsapp`+`subscribeWeekly`+`tier`) · birthday messages (`birthday`).

## Retired — reserve nothing
❌ Budget toggle (Pantry/Standard/Indulge) — replaced 27 Jun by Budget version type + Budget Planner.
