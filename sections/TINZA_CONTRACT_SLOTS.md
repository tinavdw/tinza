# TINZA — RECIPE CONTRACT: RESERVED SLOTS  (rev 15 Jul 2026)
*Reserve the SHAPE now. Build the FEATURE later. So nothing needs retrofitting across 2,083 recipes or everyone's saved data.*

## Recipe-level (7)
1. **`ingredients[]` — structured** `{qty, unit, name, priceRef?, makeYourOwnId?}`
   → costing · scaling · shopping · pantry-match · make-your-own · allergen derivation.  ⚠️ World Kitchen is a `·`-string today.
2. **`steps[]` — structured** `{text, timerSeconds?}`  → Cook Mode + multi-timer dashboard.
3. **`tags[]` — flexible situational array**  (cold · hot · rainy · load-shedding · festive · quick …)  → weather / Right Now / load-shedding / any future situational feature, no new field ever.  ★ the future-proofing slot.
4. **`origin`** — `db | chef | user`  → Add-a-Recipe + AI chef; retires MF118's 4 tokens.
5. **`goesWith[]`** `{label, recipeId?}`  → clickable pairings (BD11) + make-your-own.
6. **`contains[]` — allergens** (~8 majors)  → the avoid-list filter. Derive from ingredients (slot 1), explicit override. SAFETY: hard-exclude, consistent "Contains" wording, "verify ingredients" note.
7. **`visibility`** — `private | shared | public`  → community recipe sharing + Add-a-Recipe.

*(Standardised, not new: `yield` · `diet[]` (12 tags: V VE PE KT GF DF DB LGI HF AI HL KS · religious+allergen HARD-hide, health SOFT-badge) · `versions[]` · the box-union — didYouKnow / howThisFeels / chefNote / storage / pairsWith, canonical-named — Front 6.)*

## Saved-state store (today ONLY `tinzaTheme` persists; the rest vanish on close)
- **`preferences{}`** — one bag: `name · birthday · whatsapp · locale · tier(free/pro/deluxe) · cookingMethod[] · appetite · peopleDefault · dietFilters[] · avoid[] (allergens hard + dislikes soft) · calorieDisplay · subscribeWeekly · saved`
- **`favourites[]`** · **`plans[]`** (guest counts) · **`pantry[]` + shopping ticks**

## Price / ingredient model (1)
- **`aisle`** on each priced ingredient → aisle-grouped shopping list.

## Reserve SHAPE only — do NOT build now
Night-mode toggle · adaptive font · unit rounding · Explore tab · Home design · geofenced reminders · TWA wrap · greeting logic · weather API · Cook Mode screen · onboarding screen.
**Backend-dependent, post-launch (reserve shape, not logic):** community sharing (`visibility`+`origin`) · weekly recipes to WhatsApp (`whatsapp`+`subscribeWeekly`+`tier`) · birthday messages (`birthday`).

## Retired — reserve nothing
❌ Budget toggle (Pantry/Standard/Indulge) — replaced 27 Jun by Budget version type + Budget Planner.
