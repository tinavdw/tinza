# 🍽️ TINZA DISH FAMILIES — versions, dietary tags & tier gate
*Locked 27 Jun 2026. Master reference for the version system and the dietary system — they are two halves of one mechanism, so they live together.*
*Companion doc: `TINZA_DISH_NAMING.md` (naming is the LAST step of the recipe pipeline).*

---

## THE RECIPE PIPELINE (order is locked)

**1. Recipe upgrade** (depth standard — real ingredients + proper method)
**→ 2. Build version categories** (count scaled to popularity)
**→ 3. Tag each version** (dietary tags live per-VERSION, not per-dish)
**→ 4. Derive the name** of the parent dish + each version, from the finished recipe

Never name or tag a thin recipe. Fix the recipe first.

---

## 1 · THE VERSION SYSTEM

A **version** = one dish cooked a different way. Same dish, different build.

### Canonical version types
| Type | Emoji | Optimises for | Kind |
|---|---|---|---|
| **Default** | — | taste / the full experience | the hero — comprehensive classic **+ Tinza twist baked in** |
| **Budget** | 💰 | money | situational |
| **Quick & Easy** | ⚡ | time / effort | situational |
| **Vegetarian** | 🌱 | meat-free | dietary (carries V tag) |
| **Keto** | 🥑 | low-carb | dietary (carries KT tag) |
| **Healthy** | ❤️ | nutrition / lighter | dietary — **cross-links to Health Hub**, doesn't duplicate |

### Two kinds of version (keep distinct)
- **Situational** — Budget, Quick & Easy. Solve money/time. No dietary tag.
- **Dietary** — Vegetarian, Keto, Healthy. Built to *earn a dietary tag* so a filtered user can still eat the dish.

### Locked rules
- **Default = best version, always present.** Tinza twist is baked into the default — it is NOT a separate "Tinza" version. (Decision 27 Jun: Tinza folded into default.)
- **Budget ≠ Quick.** Different axes — a quick build (jarred sauce, pre-grated cheese) can cost *more* than a scratch budget build. Never merge them.
  - *Exception:* if a specific dish's cheapest build genuinely IS its easiest, ship ONE labelled with the bigger selling point. Don't pad slots.
- **A version only takes types that genuinely fit.** No Vegetarian version of a steak. Pick from the menu; don't fill every slot.
- **Popularity cap:**
  - Hero (Spag Bol, Lasagne, Roast Chicken) → 4–5 versions
  - Popular → 2–3
  - Standard → 1–2 alternatives
  - Simple / obscure → 1, no versions
- **Method versions** (🔥 Over Coals · 🐌 Slow-cooker · Air-fryer) = **a-la-carte extras**, only on dishes where they make sense. NOT part of the universal menu.
  - **🔥 Over Coals** is the global name for a potjie/coals version (never "SA method"). Use on a *few* suited dishes only, and **cross-link to the dedicated Potjie shelf in Braai** (potjiekos lives there as its own recipes too: oxtail, lamb knuckle, chicken & veg, venison).

### "Real food only" — ingredient honesty (locked 27 Jun)
The depth standard is about depth a cook can't Google in 5 min, so shortcuts that *replace* cooking are banned:
- **Stock powder = FINE** (concentrated real stock) · **Soup powder = NO** (a flavour-shortcut packet).
- **Condiments = FINE** as real kitchen building blocks: Worcestershire, mustard, soy, fish sauce, chutney.
- Budget versions stretch with *more veg / less meat / honest thickening (flour + stock)* — never with a packet.

### Swaps within a version (swap-aware versions)
A version can be **adapted by a stated swap** instead of being hidden — e.g. a meat-free swap on a non-religious dish.
- Convention: a `swap:` line on the version (text now; full `add:[]`/`swap:[]` re-costing mechanism = backlog B5).
- **Honesty gate:** offer a swap ONLY where the result is still a real, good dish.

### 🚫 RELIGIOUS TAGS = FILTER, NEVER SWAP (locked, conservative)
**Halaal and Kosher get NO swap-guidance.** The app never says "to make this Halaal, leave out X." Religious observance + certification is the user's call, not the app's — getting it subtly wrong is worse than not claiming it. So religious-tag users **only ever see naturally-compliant versions** (the default is built to be one).

Halaal ≠ Kosher — they are different laws:
| | No pork | Alcohol | Other |
|---|---|---|---|
| **Halaal** | yes | no alcohol | — |
| **Kosher** | yes | wine only if *certified kosher* | no meat + dairy together |

Consequences:
- A **wine** version → not Halaal (alcohol) and not Kosher (uncertified wine). Filtered out for both; they land on the default.
- A **creamy/cheesy meat** dish → breaks **Kosher** (meat+dairy) even with no pork/wine. Tag accordingly.
- Frame health tags as guidance (not medical); frame religious tags as **filter-only** (not certification).

### Cross-link real ingredients to their recipes
Where a recipe calls for a homemade staple (stock, broth, pesto, dressings), **cross-link to that recipe** (e.g. `beef stock` → Spice Step-5 stock recipe). Makes "real food only" useful, not just a rule, and pulls users deeper. *(Wiring needs the Spice recipe IDs + the core.js cross-link helper — shared build, applies app-wide.)*

### Tags live per-VERSION, not per-dish
Out of 4 Lasagne versions, maybe only 1 is Heart-Friendly. So:
- Each version is tagged at build-time.
- A **dish surfaces** in a filtered view if **any version qualifies**.
- Tapping in **opens to the qualifying version** by default.

---

## 2 · THE DIETARY SYSTEM

### The 12 locked tags
| Code | Tag | Hard / Soft |
|---|---|---|
| V | Vegetarian | 🚫 Hard |
| VE | Vegan | 🚫 Hard |
| PE | Pescatarian | 🚫 Hard |
| HL | Halal | 🚫 Hard |
| KS | Kosher | 🚫 Hard |
| GF | Gluten Free | 🚫 Hard (allergy-based) |
| DF | Dairy Free | 🚫 Hard (allergy-based) |
| KT | Keto | 💚 Soft |
| LGI | Low-GI | 💚 Soft |
| DB | Diabetic Friendly | 💚 Soft |
| HF | Heart Friendly | 💚 Soft |
| AI | Anti-Inflammatory | 💚 Soft |

### Hard vs Soft behaviour (locked)
**🚫 Hard — "I can't / won't eat this"** → filter out EVERYWHERE, feed included.
A vegan never sees meat lasagne in their feed at all — not even badged. Just hidden. (Pescatarian behaves like Vegetarian: fish yes, meat no.)

**💚 Soft — "this is better for me"** → badge in the feed, hard-filter only on search.
A heart-conscious user still eats normally → show the full feed with ❤️ marking the good versions. Only when they actively search/filter "Heart-Friendly" does it hide the rest.

### Feed vs Search
- **Feed / browse / My Family / sections** = organised by section. Hard restrictions hidden silently. Soft prefs **badged** — but **only the badges matching the user's ticked tags** (no badge-clutter; personalised density).
- **Search** = can hard-filter on ANYTHING the user asks for (soft tags included).

### Where tags are set
- Ticked at **signup**, saved to profile.
- **Editable later in Settings** (people develop conditions / change their minds).
- Live app-wide, sitting under the tier switcher on every screen.
- Multiple tags active at once.

### Framing (liability — locked early, still holds)
Health tags are **friendly guidelines, never medical claims.** "Heart-Friendly" = helpful marker. Never "treats heart disease." Describe as low-sugar / low-carb / lighter, not as medical treatment.

---

## 3 · THE TIER GATE

- **Free** = sees **ONE version per dish only.**
  - Normally the **Default** (best version — Free never feels stingy, they eat well).
  - **If the default breaks the user's hard dietary restriction**, the dish **opens on its qualifying version instead** (their diet-appropriate default). Still one version — just the right one. Quietly signals more versions exist → soft nudge to Pro.
- **Pro (R50/mo)** = the **full version selector** — Budget, Quick & Easy, Vegetarian, Keto, Healthy. *"Cook it your way"* is the upgrade reason.
- **Budget TIERS eliminated.** The old Pantry / Everyday / Indulge tier concept is dead — replaced by the **Budget version** (per-dish) + the standalone **Budget Planner** section. Budget is no longer a global user setting.

This sits inside the existing locked Free/Paid split (Free = browse + full recipes + scaling + 1 dietary restriction + calories; Pro = cost figures, My Plan, shopping, nutrition breakdown, **and now the version selector**).

---

## OPEN / NEXT
- **Spag Bol pilot needs re-aligning** to canonical types. Currently live as ⭐Best · ⚡Quick · 🌱Veg · 🏆Classic → should become Default (+twist) · 💰Budget · ⚡Quick & Easy · 🌱Veg (or as the recipe warrants).
- **Recipe-upgrade workstream is now LIVE.** First dishes: Beef Stew (currently 6 ingredients — too thin) + Roast Chicken & Veg. Pipeline each: upgrade → version → tag → name.
