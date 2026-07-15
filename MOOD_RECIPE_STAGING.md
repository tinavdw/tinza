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
| exhausted | 0 | |
| pickmeup | 2 | cross-tagged (both below) |
| sick | 0 | |
| impress | 0 | |
| healthy | 0 | |
| quick | 0 | |
| lazy | 1 | Cheesy Taco Pasta |
| fussy | 1 | Cheesy Taco Pasta |
| cold | 1 | Chicken Pot Pie Soup |
| sweet | 0 | |
| adventurous | 0 | |
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

## 🔁 Already in the library — TAG ONLY, do not re-add
### Mushroom Beef Stroganoff — `meals.js:9747`
- **mood[]:** `["pickmeup", "cold", "lazy"]`
- Already authored and live. When MF117 builds the live mood query, this recipe just needs the `mood[]` tag added — **do not create a duplicate.** (This is exactly the dedup ⚖️ Law 53 is about: check the library before adding.)

---

## 🗑️ Rejected / needs work
*(none yet)*
