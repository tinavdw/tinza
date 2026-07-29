# MF152 — ASIA PRICE KEYS

**STATUS: DEFERRED. DO NOT ACT.** Ruling A7 — all new Asian keys land in ONE batch **after all five countries are authored**. This file is the running list. Rebuilt 29 Jul 2026 from Tina's sourced prices + a live `check-not-add` audit against `sections/prices.js` at HEAD (786 keys).

**Law reminder:** the price gate is `prices.js` **AND** both alias maps (`core.js ~1050` + `worldkitchen.js ~461`), never prices.js alone.
**MF137 discipline:** a duplicate key is worse than a missing one. Everything below was *checked*, not assumed.

---

## ✅ ALREADY IN PRICE_DB — DO NOT ADD (audited 29 Jul)

Tina flagged these as "we already have these", and the audit confirms it. Twelve keys we would otherwise have duplicated:

| Key | In PRICE_DB | Tina's quote | Verdict |
|---|---|---|---|
| `beef sirloin` | R190 | — | ✅ exact match, leave it |
| `cake flour` | R22 | — | ✅ leave |
| `prawns` | R350 | — | ✅ covers "whole prawns" |
| `jasmine rice` | R63 | R55/kg | ✅ leave — DB wins, close enough |
| `cornflour` | R68 | Maizena | ✅ leave |
| `peanuts` | R128 | "normal peanuts roasted" | ✅ leave — roasting is a method, not a key |
| `oyster sauce` | R260 | R52/150ml → ~R347/L | 🟡 leave, but see discrepancies |
| `sesame seeds` | R244 | R35/100g → R350/kg | 🟡 leave, but see discrepancies |
| `crab meat` | R660 | R165/250g → R660/kg | ✅ **exact agreement** |
| `pork bones` | R45 | R45–75/kg | ✅ leave |
| `pork fat` | R60 | pork back fat R45–70/kg | ✅ **alias `pork back fat` → `pork fat`**, do not add |
| `radish` | R108 | daikon R45/kg | ⚠️ **NOT the same vegetable** — see ADD list |
| `chives` | R650 | garlic chives R750/kg | ✅ alias `chinese chives` → `chives` |
| `sichuan peppercorns` | R1300 | — | ✅ already landed in batches 1–4 |
| `puff pastry` · `butter` · `icing sugar` · `tofu` · `cabbage` · `potato` · `cauliflower` · `green beans` · `pork mince` · `onion` | — | — | ✅ all present |

---

## ➕ TO ADD — genuinely missing (one batch, after Vietnam)

| Key | Tina's price | Normalised R/kg | Note |
|---|---|---|---|
| `daikon` / `daikon radish` | R45/kg | **45** | Distinct key from `radish` R108 — different vegetable, and the turnip cake uses 900g of it |
| `rice flour` | R40/1kg | **40** | |
| `tapioca starch` | R35/500g | **70** | |
| `dried shiitake mushrooms` | R35/20g | **1750** | Light and used in grams — check the unit handling |
| `dried shrimp` | R40/50g | **800** | |
| `dried flounder` | R250/100g | **2500** | ⚠️ luxury; records now lead with dried shrimp instead |
| `wonton wrappers` | R95/500g | **190** | |
| `thin egg noodles` | R60/340g | **176** | 🟡 conflicts with existing `chow mein noodles` R60 — see discrepancies |
| `bamboo shoots` | R55.99/410g can | **~136** | Canned — drained weight is lower than tin weight, price on drained |
| `red bean paste` | R49–R60 / 400–500g | **~120** | Tina-sourced 29 Jul. Bought sweet adzuki paste from specialty Asian grocers. ⛔ **Do NOT alias to `dried azuki beans`** — one is a finished sweetened paste, the other the raw pulse, and the from-scratch route is cheaper by design (that gap is the argument for the budget fork). Same trap shape as `aburaage`→`tofu`. Used by `japan-taiyaki`. |
| `evaporated milk` | R34.99–43.99 / 380–410g | **~100** (or `_each` ≈ R39) | `_each` is probably the honest form |
| `choy sum` | R15/250g | **60** | |
| `fried shallots` | — | — | Tina: onion as the alternative. Either alias → `onion` R27, or add as a bought item |
| `pork loin` | — | — | DB has `pork loin chops` R120 (a different cut). Add `pork loin` or alias → `pork` R110 |
| `chicken thighs` | — | — | ⚠️ **HIGH PRIORITY** — used in nearly every budget fork in the lane. DB has `chicken pieces`/`chicken` R90. Alias, don't add |
| `fermented black beans` / `douchi` | R95–180 / 400g | **~340** | ✅ priced 29 Jul. **Never alias to `black beans` R50** |
| `wheat starch` | no retail price found | **?** | Specialty grocer. Ruled 29 Jul — see the wheat starch section |

### Still outstanding from batches 1–4 (unpriced)
`doubanjiang` · `five spice` · `hoisin sauce` · `shaoxing wine` · `squid` · `century egg (pi dan)` · `lap cheong (Chinese cured sausage)` · `black vinegar` · `ya cai`
*(`fermented black beans` and `wheat starch` are now resolved — see above.)*

---

## ⚠️ COLLISION RISK — read before touching the alias maps

**`fermented black beans` (douchi) must NOT alias to `black beans` R50.** The DB key is the legume. The Chinese ingredient is a salted soya ferment used 10–30g at a time. Aliasing them silently prices one as the other, and nothing in the validator would catch it — it is a judgement error, not a structural one.

✅ **RESOLVED 29 Jul — Tina sourced it: R95–R180 per 400g pack → R237–R450/kg, honest mid ≈ R340/kg.**
That is roughly **seven times** the `black beans` R50 key, which is the measure of how bad the collision would have been.
It is not a narrow risk either — douchi appears in **six records**: `mapo-tofu` (10g) · `hui-guo-rou` (10g) ·
`mala-xiang-guo` (15g) · and the version deltas on `staple-chilli-oil` (30g), `qing-zheng-yu` (20g), `gon-chow-ngau-ho` (20g).
**ADD `fermented black beans` = 340, alias `douchi` → same key. Do not touch `black beans`.**

Same caution: `radish` ≠ `daikon`, and `chow mein noodles` ≠ `thin egg noodles` (wonton noodles).

---

## 🟡 DISCREPANCIES — Tina's call, not Claude's

Where a sourced price disagrees with PRICE_DB, check-not-add says leave the existing key. But these three are wide enough to be worth a decision:

| Key | PRICE_DB | Tina 29 Jul | Gap |
|---|---|---|---|
| `sesame seeds` | R244/kg | R350/kg | +43% |
| `oyster sauce` | R260 | ~R347/L | +33% |
| `chow mein noodles` vs thin egg noodles | R60/kg | R176/kg | **+193%** — almost certainly two different products, not a stale price |

---

## ✅ RULED 29 Jul — WHEAT STARCH IS A SPECIALTY-GROCER ITEM

Tina's ruling: **say specialty shop.** She could find no retail price — only bulk/per-tonne listings.

Applied to the Har Gow record immediately:
- Ingredient line now reads *"100g wheat starch (a specialty grocer item — not flour, and not cornflour; the packet must say wheat starch)"*.
- `chefNotes` now opens by telling the cook to buy it **before planning the day**, rather than letting them
  discover mid-recipe that the one irreplaceable ingredient is not in the everyday shop.
- Wording stays generic per the **global-wording ruling (22 Jul)** — no shop names, no place names, no "SA" in prose.
  Locale is the locale layer's job, not the card's.

**Cornflour/Maizena is NOT accepted as the substitute.** Wheat starch is flour with the protein washed out, and it is
what makes the skin translucent. Cornflour sets opaque — a har gow made with it is a white dumpling, and the method,
trivia and howThisFeels all claim otherwise. Substituting would have made the card lie.

### ⛔ STILL OPEN — the price itself
No retail price exists to file. Options at the price batch, **Tina's call, not Claude's**:
1. Price it at a **documented estimate** pegged to comparable starches (`cornflour` R68 · `tapioca starch` R70) —
   specialty imports usually land higher, so ~R90–120/kg is the honest guess band. Must be **marked as an estimate**
   in the `prices.js` comment, since that file's convention is "real prices not guesses".
2. Weigh a packet next time one is in front of you and file the real number.
3. Leave it unpriced and accept a blank/low cost on Har Gow until it surfaces.

Only 100g is used per batch, so the costing exposure is small either way — but the key still has to exist, or the
card silently costs the wheat starch at zero, which is worse than costing it slightly wrong.

⚠️ **Honest limit, restated:** `merge.js` catches structure, never judgement. It would happily pass a har gow priced
at R0 or at R4 000/kg. Only Tina's eyes close a price.

## 🔧 STRUCK FROM RECORDS ON PRICE GROUNDS (29 Jul, already applied)

- **Flying-fish roe / tobiko** — R2 000–3 500 per pack. Removed from the Siu Mai ingredient line entirely; grated carrot (the older topping anyway) now stands alone, and the roe survives only as a line in the version trivia. A R3 000 garnish on a R33 dumpling was going to poison the costing.
- **Dried flounder** — R2 500/kg. No longer leads the Wonton Noodle Soup ingredient line; dried shrimp (R800/kg) leads, flounder is named as the shop version if you find it. The budget fork's `removeIng` was repointed in the same edit, or it would have gone dead.

---

## ➕ APPENDED FROM CHINA BATCH 7 (29 Jul) — NOT YET AUDITED AGAINST prices.js

⚠️ **These are candidates, not additions.** I did not have `prices.js` in the container this session, so unlike the list above these have **not** been through a check-not-add pass. Every one must be checked against the 786 keys at HEAD before the price batch — MF137 discipline: a duplicate key is worse than a missing one.

| Candidate key | From | Note |
|---|---|---|
| `beef shin` | Lanzhou | DB has `beef sirloin` R190. Shin is a cheap collagen cut — very likely a genuinely different key. High priority, it leads the record. |
| `beef bones` | Lanzhou | DB has `pork bones` R45. Check whether a generic `bones` key exists first. |
| `beef marrow bones` | Lanzhou v3 | Possibly alias → `beef bones`. Marrow bones are usually priced higher. |
| `rock sugar` | Da Pan Ji | Alias → `sugar`? Rock sugar is genuinely dearer, but only 25g is used. Tina's call. |
| `chopped salted chilli` / `duo jiao` | Fish Head | ⚠️ **Do NOT alias to `chillies`.** It is a salted ferment sold by the jar, and 200g is used. Same collision shape as `fermented black beans` vs `black beans`. |
| `tofu skin` | Crossing-the-Bridge | Dried bean curd sheet. Sold light, used in grams — check the unit handling like `dried shiitake`. |
| `quail eggs` | Crossing-the-Bridge | Probably `_each` is the honest form. |
| `chicken fat` | Crossing-the-Bridge | May not be bought at all — it renders off the bird already in the recipe. Consider costing it at zero rather than adding a key. |
| `fresh rice noodles` / `mi xian` | Crossing-the-Bridge, Fish Head | ⚠️ Distinct from `dried rice noodles` — different product, roughly 3× the difference by weight. Same trap as `chow mein noodles` vs thin egg noodles. |
| `dried rice noodles` | budget forks | Used in three budget forks now. |
| `wide wheat noodles` | Da Pan Ji budget | Check against any existing noodle key before adding. |
| `lamb ribs` | Da Pan Ji v3 | DB has lamb cuts — check `lamb rib chops` first, it may already cover this. |
| `beer` | Da Pan Ji | 330ml as a braising liquid. Check whether the DB carries alcohol at all — Beverages may already have it. |
| `garlic chives` | Lanzhou, Fish Head | ✅ Already ruled above: alias → `chives` R650. Do not add. |
| `daikon` | Lanzhou | ✅ Already on the ADD list above (Turnip Cake). Lanzhou uses another 300g — same key, no action. |

**Likely already present, check first, do not assume missing:** `star anise` · `fennel seed` · `bay leaves` · `white peppercorns` · `cinnamon stick` · `dried chillies` · `whole cumin seed` · `potatoes` · `aubergine` · `green peppers` · `bean sprouts` · `plain flour` · `bicarbonate of soda` · `red vinegar` · `quail eggs`.

## ➕ APPENDED FROM CHINA BATCH 8 (29 Jul) — ALSO NOT YET AUDITED

Same caveat as batch 7: candidates only, `prices.js` was not in the container. Check every one.

| Candidate key | From | Note |
|---|---|---|
| `beef tallow` | Hotpot | 200g, and the record argues at length that it cannot be swapped out. Check for an existing `dripping`/`suet`/`beef fat` key first. |
| `honeycomb tripe` | Hotpot v3 | Cheap cut, probably absent. |
| `pork kidney` | Hotpot v3 | |
| `chicken livers` | Hotpot v3 | ⚠️ Likely ALREADY present — Health Hub uses livers. Check, do not add. |
| `tofu puffs` | Hotpot | Distinct product from `tofu`. Called out in the budget fork as the best-value item in the pot. |
| `lotus root` | Hotpot | |
| `enoki mushrooms` | Hotpot | DB likely has `mushrooms` — decide alias vs own key. |
| `glass noodles` | Hotpot, Cucumber v3 | Mung bean starch, distinct from every wheat/rice noodle key. |
| `Chinese sesame paste` | Bang Bang | ⚠️ **Do NOT alias to `peanut butter` or `tahini`.** Toasted sesame, savoury and thin. The budget fork exists precisely because it is dear and hard to find. |
| `black cardamom` / `tsaoko` | Hotpot | Specialty. May hit the same no-retail-price wall as `wheat starch`. |
| `cloves` · `coarse salt` · `icing sugar` · `cucumbers` · `bean sprouts` | B8 | Almost certainly all present. Check only. |
| `glutinous rice flour` | Tang Yuan | ⚠️ **Do NOT alias to `rice flour`** (already on the ADD list at R40). The record states explicitly they are not interchangeable in either direction — same collision shape as `radish` vs `daikon`. |
| `black sesame seeds` | Tang Yuan | DB has `sesame seeds` R244. Black is usually dearer. Tina's call: alias or own key. |
| `sweet fermented rice` / `jiu niang` | Tang Yuan v3 | Specialty or homemade. |
| `dried osmanthus flowers` | Tang Yuan v3 | Specialty, used in grams. |
| `mustard greens` | Suan Cai v3 | |
| `Chinese cabbage` / `napa` | Suan Cai, Hotpot | DB has `cabbage` — ⚠️ different vegetable and usually a different price. Check. |
| `lard` | Tang Yuan (named in method) | Not in the ingredient line — butter leads — but named as traditional. No key needed unless a future record uses it. |

## ➕ APPENDED FROM CHINA BATCH 9 (29 Jul) — NOT YET AUDITED

Same caveat as batches 7 and 8: `prices.js` is not in the container, so these are candidates only. Check every one against the 786 keys at HEAD before the price batch.

| Candidate key | From | Note |
|---|---|---|
| `blood sausage` | Suan Cai Bai Rou v3 | 120g. Likely absent from an SA-built PRICE_DB under this name — check for any existing sausage key before adding. |
| `tofu puffs` | Suan Cai Bai Rou v3 | ✅ Already flagged from batch 8 (Hotpot) — same key, no separate action. |
| `glass noodles` | Suan Cai Bai Rou | ✅ Already flagged from batch 8 (Hotpot, Cucumber v3) — same key. |
| `suan cai` / `Chinese sour cabbage` | Suan Cai Bai Rou | ⚠️ **Judgement call.** It is a made staple with its own card (R6–R14/batch), not a bought item. Either price it as a bought jar, or cost it through the staple record. Do NOT alias to `cabbage` — it is a ferment, same collision shape as `fermented black beans` vs `black beans`. |
| `pork shoulder` | Suan Cai Bai Rou budget | DB has `pork` R110 and `pork loin chops` R120. Alias or own key — Tina's call. |
| `white peppercorns` | Suan Cai Bai Rou | Already on the batch-7 check-first list. |

### From Beggar's Chicken (batch 9) — also unaudited

| Candidate key | Note |
|---|---|
| `lotus leaves` (dried) | ⚠️ Specialty grocer, sold light and used by the leaf, not by weight. May hit the same no-retail-price wall as `wheat starch` — `_each` is probably the honest form. The card already warns the cook to buy them before planning the day. |
| `pickled mustard greens` | ⚠️ Do NOT alias to `mustard greens` (already a batch-8 candidate from Suan Cai v3). One is a fresh vegetable, one is a salted ferment sold by the jar — same collision shape as `fermented black beans` vs `black beans`. |
| `glutinous rice` | v3. Distinct from `jasmine rice` R63 AND from `glutinous rice flour` (batch 8). Three separate keys, do not merge any pair. |
| `lap cheong` | ✅ Already outstanding from batches 1–4. Same key. |
| `whole chicken` | DB has `chicken` / `chicken pieces` R90. Probably alias, not a new key. |
| `coarse salt` · `plain flour` · `dried shiitake mushrooms` · `five spice` | ✅ All already listed from earlier batches. Check only. |

### From Tea-Smoked Duck (batch 9) — also unaudited

| Candidate key | Note |
|---|---|
| `jasmine tea leaves` | 30g per bird, burnt not drunk. DB may carry tea under Beverages — check before adding. |
| `duck legs` | ✅ Already used by `china-roast-duck`'s budget fork — should already be a candidate or a key. Check, do not duplicate. |
| `whole duck` | Same — `china-roast-duck` leads with a 2kg bird. Existing key or alias. |
| `brown sugar` · `uncooked rice` · `Sichuan peppercorns` R1300 · `shaoxing wine` | ✅ All present or already listed. Check only. |
| ⚠️ `vegetable oil` (1 litre, for deep frying) | **Costing judgement, not a key problem.** Frying oil is reused, so costing a full litre against one duck would put ~R40 on the plate that the cook does not actually spend. Same question already lurking in Gu Lao Rou, Jiao Yan You Yu and Sheng Jian Bao. **Tina's call at the price batch: cost deep-frying oil at a fraction, or exclude it.** Nothing mechanical will ever flag this — `merge.js` would pass a duck costed at R120 without comment. |

### From Jianbing (batch 9) — also unaudited

| Candidate key | Note |
|---|---|
| `mung bean flour` | ⚠️ **Do NOT alias to `rice flour`, `plain flour` or `cornflour`.** Fourth distinct flour in the lane after `rice flour`, `glutinous rice flour` and `wheat starch`. Specialty grocer; may hit the same no-retail-price wall as wheat starch. |
| `bao cui` (crisp sheet) | ⚠️ Almost certainly unobtainable and unpriceable outside the region. The budget fork exists precisely for this. Consider costing via `youtiao` or plain crackers instead of adding a key nobody can buy. |
| `sweet bean sauce` / `tianmianjiang` | ⚠️ **Do NOT alias to `hoisin sauce`** (already outstanding from batches 1–4) — related but distinct, and hoisin is sweeter and thicker. Same collision shape as the black bean trap. |
| `chilli sauce` | Generic. DB very likely has something already — check before adding. |
| `coriander` · `spring onion` · `sesame seeds` R244 · `cornflour` R68 · `eggs` | ✅ Present or already listed. Check only. |

### From Wuxi Ribs (batch 9) — also unaudited

| Candidate key | Note |
|---|---|
| `pork ribs` | Leads the record. DB has `pork` R110 and `pork loin chops` R120 — ribs are a distinct cut and usually priced apart. High priority. |
| `pork rib tips` | Budget fork. Cheap trim cut, very likely absent. Could alias → `pork ribs` but the whole point of the fork is that it costs a fraction, so an alias would erase the saving. **Own key, or the budget fork is a lie.** |
| `red yeast rice` / `hong qu mi` | v3. Specialty grocer, used 15g. May hit the `wheat starch` no-retail-price wall. |
| `rock sugar` | ✅ Already a batch-7 candidate (Da Pan Ji). Same key — 45g here, so the alias-to-`sugar` question now matters more than it did at 25g. |
| `black vinegar` · `star anise` · `cinnamon stick` · `shaoxing wine` | ✅ All already listed. Check only. |

### From Luo Han Zhai + Scallion Oil Noodles (batch 9, closing China) — unaudited

| Candidate key | Note |
|---|---|
| `dried bean curd sticks` / `fu zhu` | ⚠️ **Do NOT alias to `tofu` or `tofu puffs`.** A third distinct soya product in the lane. Sold dry and light, used in grams — same unit-handling question as `dried shiitake`. |
| `dried bean curd knots` | v3. Same product tied — almost certainly alias → `dried bean curd sticks`. |
| `fermented red bean curd` / `nam yu` | ⚠️ **Do NOT alias to `tofu`.** It is a jarred ferment and the seasoning engine of the dish. Fourth soya key. Same collision shape as `fermented black beans` vs `black beans`. |
| `dried wood ear fungus` · `dried lily buds` · `snow fungus` | Specialty, all sold light and used in grams. Check the unit handling together. |
| `lotus root` · `water chestnuts` · `ginkgo nuts` · `baby corn` | v3 only. `lotus root` already a batch-8 candidate (Hotpot) — same key. |
| `dried shrimp` | ✅ Already on the ADD list at R800/kg. Same key. |
| `thin wheat noodles` | ⚠️ Check against `chow mein noodles` R60 AND the `thin egg noodles` candidate — this is a third noodle in the same family and the wrong alias silently mis-prices it. |
| `spring onions` | 150g per serving here, which is a lot. Whatever the existing key is, this record will expose it if the price is stale. |
| `mangetout` · `bamboo shoots` · `Chinese cabbage` · `carrot` · `tofu puffs` | ✅ All already listed from earlier batches. Check only. |

---

## 📌 CHINA CLOSED — MF152 STATUS
All 50 China records authored. The price batch (A7) still waits for Japan, Indonesia, Thailand and Vietnam.
**Nothing in this file has been actioned.** Before the batch runs, every candidate above must go through a
check-not-add pass against `prices.js` at HEAD — batches 7, 8 and 9 were all appended without one.

---

## 🇯🇵 JAPAN — BATCH 1 (29 Jul 2026)
⚖️ **A7 — DO NOT ACT ON THIS YET.** All Asian keys land in ONE batch after all five countries are authored.
⚠️ **MF137 — a duplicate key is worse than a missing one.** Checked against `sections/prices.js` before listing.

### NEW — not in prices.js (16)
| key | note |
|---|---|
| `kombu` | dried kelp, sold in sheets. Specialist / Asian grocer. Small quantity per serving (3–8g) so cost-per-use is low even at a high pack price. |
| `katsuobushi` | dried bonito flakes. Bag price is high, 5g per serving. |
| `niboshi` | dried sardines. Cheaper than katsuobushi and a real budget lever for the whole country. |
| `panko` | Japanese breadcrumbs. Now stocked in mainstream SA supermarkets — check the everyday shelf before pricing it as specialist. |
| `tonkatsu sauce` | thick fruit-and-vegetable brown sauce. ⚠️ Several brands contain fish extract — matters for §26 vegetarian tagging. |
| `japanese mayonnaise` | egg-yolk-only, rice vinegar. Priced separately from plain mayonnaise — it is a different product, not a brand. |
| `aonori` | dried green seaweed flakes. |
| `nagaimo` | mountain yam. ⚠️ **May be genuinely unavailable in SA.** The card already states the baking-powder stand-in honestly in-method, so a missing price is not a blocker — but decide whether it gets a key at all or whether the stand-in becomes the priced default. |
| `pickled red ginger` | beni shoga. Distinct from sushi ginger (gari) — different cut, different colour, different use. |
| `menma` | seasoned bamboo shoots. Marked optional in the ramen line. |
| `nori` | sheets. Likely mainstream. |
| `shichimi togarashi` | seven-spice. |
| `mitsuba` | Japanese parsley. ⚠️ Almost certainly unavailable — the card already offers flat-leaf parsley in the ingredient line. Probably **does not need a key**. |
| `yakisoba noodles` | for the Hiroshima version. Fresh egg noodles are the stand-in. |
| `karashi` | Japanese mustard. Marked optional. |
| `sake` | ⚠️ **LIQUOR — see MF139 liquor_price_keys.** Cooking sake and drinking sake are different products at very different prices; price the cooking grade. Small volumes (10–15ml/serving). |

### ✅ CHECK, DO NOT ADD — already in prices.js
`mirin` · `ramen noodles` · `curry powder` · `garam masala` · `cake flour` · `pork belly` · `chicken thighs` ·
`white cabbage` · `sweetcorn` · `firm tofu` · `spring onion` · `sesame seeds`

### ⚠️ CHECK AGAINST THE CHINA APPEND — do not list twice
`dried shiitake mushrooms` reads NEW against `prices.js` but China's records use it heavily, so it is
**probably already on this file from a China batch.** Search this document before adding it a second time.

---

## 🇯🇵 JAPAN BATCH 2 APPEND (29 Jul 2026) — Gyoza · Chawanmushi · Yakitori · Tempura · Dorayaki
Per A7 these are **appended, not acted on.** One price batch after all five countries.

### ➕ NEW KEYS
| Key | Note |
|---|---|
| `gyoza wrappers` | ⚠️ **Collision risk with `wonton wrappers`** (already on the ADD list at R95/500g). They are genuinely different products — gyoza wrappers are round, larger and noticeably thinner, and the Gyoza card's method makes thinness a *law*. Tina's call whether that earns a separate key or an alias. Do not alias silently. |
| `garlic chives` / `nira` | ⚠️ **Do NOT alias to the existing `chives` R650.** Different plant, different price, and the Classic version's trivia says explicitly they are not interchangeable. Same collision shape as `radish` vs `daikon`. Grows like a weed in SA gardens — a cheap real key. |
| `silken tofu` | ⚠️ **Fifth distinct soya key in the lane** (`tofu` · `firm tofu` · `tofu puffs` · `dried bean curd sticks` · `fermented red bean curd` already listed). Do not alias. Chawanmushi's vegan fork is built on it. |
| `sansho pepper` | ⚠️ **Do NOT alias to `sichuan peppercorns` R1300.** Same genus, different product, different heat, and the Yakitori card names it specifically. |
| `azuki beans` / `adzuki beans` | Dried. ⚠️ Do NOT alias to `black beans` or any other legume key. The Dorayaki budget fork deliberately falls back to tinned kidney beans, so `red kidney beans, tinned` is worth a check-not-add. |
| `matcha powder` | Culinary grade, not ceremonial — a very large price gap between the two. Used at 4g. |
| `soba noodles` | Dried buckwheat. ⚠️ Distinct from `udon` and from `ramen noodles` (already listed). |
| `udon noodles` | Fresh or vacuum-packed cooked. The Chawanmushi odamaki version uses 120g. |
| `kamaboko` | Steamed fish cake, sold in a log. May be genuinely unavailable in SA — the Chawanmushi ingredient line survives without it. |
| `chicken skin` | ⚠️ **Often free or near-free from a butcher**, which the pricing engine has no way to express. Flag for a judgement call rather than a number. Yakitori v3 only. |
| `shiso` / `perilla leaves` | ⚠️ Almost certainly unavailable in SA retail. Grows easily from seed. Same treatment as `mitsuba` — probably **does not need a key**. |
| `dried azuki` vs tinned | Two different products at very different prices; the budget fork's whole saving is the tin. |

### ✅ CHECK, DO NOT ADD — believed already in `prices.js` or already listed above
`prawns` · `cornflour` · `cake flour` · `chicken thighs` · `chicken livers` · `chicken mince` · `pork mince` ·
`spring onion` · `white cabbage` · `sweet potato` · `pumpkin` · `aubergine` · `green pepper` · `carrot` ·
`green beans` · `onion` · `cream` · `honey` · `caster sugar` · `bicarbonate of soda` · `rice vinegar` ·
`soy sauce` · `mirin` · `sake` · `sesame oil` · `sesame paste` · `fresh shiitake mushrooms` · `daikon` · `ginger` · `garlic`

⚠️ `sesame paste` reads new against Japan but China's Dan Dan and Bang Bang records use it heavily — **search this
document before adding it a second time**, same caution as `dried shiitake mushrooms`.

---

## 🇯🇵 JAPAN — GENERATED BY `pricecheck.js`, 29 Jul 2026 (supersedes the batch-1/2/3 appends)

⚠️ **GENERATED. DO NOT HAND-EDIT AND DO NOT APPEND.** Regenerate: `node pricecheck.js japan`.
The three hand-written Japan appends are **struck** — they contradicted each other *and* the
canonical head of this file (`daikon` at R45/kg near the top, "check, do not add" near the
bottom). A generated section cannot drift from itself.

**Measured by** loading `prices.js` + `core.js` + `worldkitchen.js` in a sandbox and calling the
app's **own** `wkParseIngredients()` / `wkPriceLookup()` over every base line and every version
delta. 22 born-RED proofs (`--selftest`).

### ✅ STATE AFTER THE 29 JUL SWEEP
**exact 57 · wrong-product 0 · absent 29 — of which GENUINELY NEW: 0.**
Every unpriced ingredient in Japan is now either already sourced by Tina or already on this file.

### 📌 ALREADY SOURCED — Tina's prices. APPLY them, do not re-list. (3)
| Key | Used by |
|---|---|
| `daikon` | japan-tempura, japan-agedashi-tofu, japan-tamagoyaki |
| `gyoza wrappers` | japan-gyoza |
| `sansho pepper` | japan-yakitori |

### 📝 ON MF152, NO PRICE ATTACHED YET (26)
| Key | Used by |
|---|---|
| `aonori` | japan-okonomiyaki |
| `apple` | japan-tonkatsu, japan-kare-raisu |
| `bamboo skewers` | japan-yakitori |
| `beansprouts` | japan-okonomiyaki |
| `carrot` | japan-tonkatsu, japan-goma-ae, japan-tempura |
| `chicken or vegetable stock` | japan-tonkatsu |
| `dashi` | japan-oyakodon, japan-chawanmushi, japan-tempura, japan-agedashi-tofu, japan-okonomiyaki, japan-tamagoyaki |
| `dried azuki beans` | japan-dorayaki |
| `dried kombu` | japan-staple-dashi, japan-shoyu-ramen |
| `kamaboko fish cake` | japan-chawanmushi |
| `katsuobushi` | japan-staple-dashi, japan-shoyu-ramen, japan-okonomiyaki, japan-agedashi-tofu |
| `kombu and shiitake dashi` | japan-oyakodon, japan-agedashi-tofu |
| `matcha powder` | japan-dorayaki |
| `menma` | japan-shoyu-ramen |
| `nagaimo` | japan-okonomiyaki |
| `niboshi` | japan-staple-dashi |
| `okonomiyaki sauce` | japan-okonomiyaki |
| `sake` | japan-shoyu-ramen, japan-oyakodon, japan-gyoza, japan-chawanmushi, japan-yakitori |
| `sheet nori` | japan-shoyu-ramen, japan-onigiri, japan-tamagoyaki |
| `shichimi togarashi` | japan-oyakodon |
| `shiso or perilla leaves` | japan-yakitori |
| `sprigs mitsuba` | japan-chawanmushi |
| `tinned red kidney or adzuki beans` | japan-dorayaki |
| `tonkatsu` | japan-oyakodon |
| `tonkatsu sauce` | japan-tonkatsu |
| `white sesame paste` | japan-gyoza |

### ➕ GENUINELY NEW (0)
| Key | Used by |
|---|---|
| _(none — nothing undiscovered left in Japan)_ | |

### ⚖️ RULED 29 JUL — THE NEUTRAL-OIL FAMILY (one line, closes it app-wide)
`neutral oil` was absent while used in 7 of 15 Japan records. It is what the WOW standard writes
**deliberately** — the global-wording ruling forbids naming a local product in prose — so it is a
**category**, and every member of that category is the same commodity frying oil at the same
shelf price. Tina confirmed the Japanese set: canola, generic vegetable blends, soybean.
`vegetable oil` is already a real key at **R48** and five terms already alias to `sunflower oil`
**R48** — so this is not a new decision, it is the sixth instance of one made five times already.

**Added to `WK_ALIAS` (`worldkitchen.js`):**
`neutral oil` · `canola oil` · `rapeseed oil` · `soybean oil` · `soya oil` ·
`neutral cooking oil` → `sunflower oil` R48

⚠️ **RICE BRAN OIL IS DELIBERATELY EXCLUDED.** It is the traditional tempura oil and a genuinely
dearer product. Aliasing an expensive oil to a cheap one is the **MF28 lamb→mutton mistake** —
the alias lies quietly and nothing catches it. Let it fail loud and earn its own key. (Worth
considering for the Tempura card as a named upgrade.)

### ⚖️ ALSO FIXED 29 JUL — A PURPOSE CLAUSE IN AN INGREDIENT NAME IS A PRICING BUG
The alias fixed `neutral oil` but **not** `neutral oil, for frying` / `for the pan` / `for the
roux`: `wkPriceLookup()` cleans the whole string, and the purpose clause blocks every rung
including the alias. That is **TINZA INGREDIENT STANDARD** being violated — *prep goes in the
method, not the name* — so the cause was fixed rather than six more aliases added. 11 purpose
clauses stripped from Japan ingredient names; `merge.js` re-validates 40/40.
📌 **Lane-wide habit:** this is not a style issue, it is a pricing bug. Watch it in every batch.

### 🩸 STILL NEEDS A RULING — STAPLES THAT ARE INGREDIENTS
`dashi` (6 records) and `chilli oil` (Gyoza) are absent from `PRICE_DB` **but both are real
staple cards with their own costed versions.** §27 arriving as a pricing question: does a staple
that is an ingredient of other cards get a `PRICE_DB` key, or does its cost come from its own
record? ⚠️ `chilli oil` currently resolves to `chilli` R80 via the substring fallback — wrong
product, and it stays wrong until this is ruled.
⚠️ Pre-existing, not this lane: **`mushroom` R165 and `mushrooms` R90 are both live at different
prices.**


---

## 🇯🇵 JAPAN BATCH 4 — GENERATED BY `pricecheck.js`, NOT HAND-WRITTEN (29 Jul 2026)

⚖️ Per the rung ruled at batch 3: **an MF152 append is not written until it has been measured
against `prices.js`, never against MF152.** Every line below is tool output.

Records added: `japan-matcha-warabimochi` · `japan-mitarashi-dango` · `japan-takoyaki` ·
`japan-zaru-soba` · `japan-nikujaga`.

### 🔴 WRONG PRODUCT — 0
Zero across the merged 20-record file. Two were caught **during** authoring and fixed before merge:
- `"20ml water, for the syrup"` → **`syrup` R50**, because the key sat only in the note tail and not
  in the ingredient. Identical shape to the batch-3 coarse-salt bug. Rewritten as plain `20ml water`.
- `sweet potato starch` was **avoided before writing** — it resolves to `sweet potato` R30, the
  vegetable price for a starch. Version 3 of Warabimochi uses `tapioca starch`, which reports
  ABSENT. A gap that announces itself beats a number that lies (MF137 ladder).

### ➕ GENUINELY NEW KEYS — 5 (measured against `prices.js` at HEAD + both alias maps)
| key | first used in | note |
|---|---|---|
| `kinako` | Matcha Warabimochi | roasted soybean flour. Also used as a topping in Mitarashi Dango's budget fork. |
| `konjac` | Takoyaki | the budget/ancestor fork. Sold as a firm block; `shirataki` is the same material as noodles. |
| `octopus` | Takoyaki | cooked octopus, the classic filling. |
| `tenkasu` | Takoyaki | tempura scraps. Sold bagged in Asian grocers; also the by-product of the Tempura card. |
| `wasabi` | Zaru Soba | paste or powder. |

### 🟠 REVIEW ROWS ESCALATED — they ship a number that LOOKS correct
Not blockers. Listed because §29.5's distinction applies: these are not missing, they resolve.
- `glutinous rice flour` → **`rice` R27** *(Mitarashi Dango)*
- `rice flour` → **`rice` R27** *(Mitarashi Dango)*
- `shirataki noodles` → **`noodles` R80** *(Nikujaga)* — konjac product priced as wheat noodles
- `pickled red ginger` → **`ginger` R280** *(Takoyaki; pre-existing via Okonomiyaki)* — badly over
- `dried shiitake mushrooms` → **`mushrooms` R90** *(Nikujaga vegan fork)* — dried priced as fresh

### ⚠️ A DUPLICATE KEY CAUGHT AND KILLED BEFORE IT LANDED
Mitarashi Dango's Isobe fork was first written `2 sheets nori`, which pricecheck reported as a
**genuinely new key** — but nori is not missing. The file's convention is `1 sheet nori`
(Shoyu Ramen, Onigiri, Tamagoyaki), already tracked. The plural had invented a *second* MF152
entry for a thing already on the list. Rewritten to convention; new-key count fell 2 → 1.
📌 **Rung this suggests:** grep the existing ingredient convention *before* authoring a line, not
after. MF137 puts a duplicate below a missing key precisely because it announces itself as progress.

### ⏳ STILL NOT SOURCED, STILL NOT GUESSED
The SA shelf price of **instant hon dashi granules**. Route ruled at §29.4; price outstanding.
`dashi` now appears in 8 of 20 Japan records.

---

## JAPAN B5 + B6 (29 Jul 2026) — generated from `node pricecheck.js japan`

Measured against `sections/prices.js` at HEAD **and both alias maps** (core.js ~1050, worldkitchen.js ~461), never against this file.

**Batch 5 (Korokke · Kinpira Gobo · Buta no Shogayaki · Chirashizushi): ZERO new keys.**
`leftover Japanese curry` was flagged and REJECTED per §29.1 — nothing on a shelf is leftover curry, so it can never be priced. Replaced with `8g curry powder · 6g butter, extra · 6g cake flour, extra`, all already priced.

**Batch 6 (Nasu Dengaku · Miso Soup · Anmitsu): TWO new keys.**

| Candidate key | Used in | Note |
|---|---|---|
| `agar agar powder` | japan-anmitsu | Sold in SA as agar agar powder / china grass, health shops and baking suppliers. Small pack sizes, high R/kg but grams-per-serving are tiny (4g). ⚠️ DO NOT alias to gelatine — different setting temperature, different diet class (agar is vegan, gelatine is not). |
| `dried wakame` | japan-miso-soup | ⚠️ Do NOT alias to `nori flakes` (R4150) — different seaweed, different product, and that price would be badly wrong. Rehydrates 5–10×, so 2g dry is a portion. |

⚠️ **Both are ABSENT, not wrong.** A7 applies — they wait for the one price batch after all five countries.


---

## 💰 TWO KEYS ADDED TO `prices.js` — 29 Jul 2026 (Tina-sourced, A7 exceptions #2 and #3)

Measured against `sections/prices.js` **and both alias maps**, never against this file.
Both were verified with `node pricecheck.js japan` before and after the edit.

| Key | Value | Unit | Source |
|---|---|---|---|
| `dashi` | **13** | **per LITRE of made-up dashi** | 40g retail pack R76 = R1.90/g · Ajinomoto on-pack dose 4g per 600ml = 6.67 g/L · 6.67 x 1.90 = R12.67/L |
| `potato starch` | **120** | per kg | Tina: R50-70 per retail 500g -> R100-140/kg -> honest mid |

### 🍲 `dashi` — WHY PER LITRE AND NOT PER KG

Every Japan record writes dashi as a **volume**: `60ml dashi`, `300ml dashi`, `400ml dashi`.
`wkPriceLookup` costs an ml line as `(qty / 1000) x price`, so the key is a **per-litre** key.

This is not a new decision. `prices.js:97` already carries the identical ruling for `stock`:

> `"stock": 8,   // LIQUID stock (per L) — was 170 (powder price) which over-priced 68+ recipes`

A per-kg granule price here (R1900/kg from the 40g pack) would repeat that bug exactly:
**300ml of miso-soup dashi would have cost R570 instead of R4.**

⚠️ **THE ONE JUDGEMENT CALL — one word overrules it.** Bulk packs (R120/500g and R240/1kg,
both R0.24/g) work out to **R1.60/L, cheaper than plain stock R8**, which is not what a home
cook buys and would understate every Japanese soup in the app. The 40g retail pack is the
honest store route per **§29.2**. If Tina wants the bulk route, the key becomes `2`.

⚠️ **OMNIVORE (§29.3).** Hon dashi carries bonito extract. The Node diet tagger must read
`dashi` as animal and `kombu and shiitake dashi` as NOT, and must not substring-match between
them (same collision shape as `radish` vs `daikon`).

🟠 **SURFACED BY THE RUN, NOT A BUG:** `kombu and shiitake dashi` now resolves to `dashi` R13
via the qualifier rung. For **pricing** that is roughly honest — kombu dashi powder sits in the
same band. For **diet** it is exactly the collision §29.3 warns about. Pricing is fine; the
tagger still needs the explicit rule.

### 🥔 `potato starch` — OWN KEY, THE ALIAS WAS THE BUG

It was resolving to **`potato` R18** — a 6.7x understatement, live in the pushed `wk_europe.js`
as well as `wk_japan.js`. The `core.js:1340` alias to `cornflour` never reached it, because
`wkPriceLookup()` reads **`WK_ALIAS` in worldkitchen.js**, which has no such entry.

⚠️ **The fix was NOT to copy the alias across.** At R120/kg potato starch is ~1.8x cornflour
R68 — aliasing a dearer product to a cheaper one is the MF28 lamb->mutton mistake. It gets an
**exact key**, and the stale `core.js:1340` alias is **struck in the same edit** so the two maps
stop disagreeing.

⚖️ **A7 DOES NOT APPLY TO EITHER.** Both are the §29.5 case: potato starch was a **wrong**
price already shipping, and dashi was a **missing** price whose number Tina has now supplied.
A7 defers the work of sourcing, not a number already in hand.

### ⛔ STILL OWED, CANNOT BE WRITTEN YET

`aburaage` [japan-inarizushi] — **the record does not exist in this file.** See the B7 note in
ASIA_PROGRESS. Do not write the row until the record is back.


---

## ✅ TAKEN, NOT DEFERRED — TWO KEYS ADDED TO `prices.js` 29 Jul 2026

Same reasoning as the `chilli oil` exception: **A7 defers MISSING prices, never WRONG ones
(§29.5).** Neither of these was a gap waiting for the batch — each was a phrase that already
resolved, silently, to a different product. Both prices are Tina-sourced, not estimated, and
both lean high per §31.1.

| key | price | sourcing | why it could not wait |
|---|---|---|---|
| `crab sticks` | **R120/kg** | R32–52/500g · R75–99/800g–1kg → R64–124/kg, took the top | fell through to `crab` R400 — a 3–6× over-charge. Third crab key alongside `crab` R400 and `crab meat` R660; ⛔ do not merge any pair. |
| `pickled ginger` | **R280/kg** | R15–70 per 110–454g jar; mainstream buy ~R150–270/kg | fell through to `ginger` R280. Money was accidentally right, route was fragile — it would have broken silently the day fresh ginger repriced. |

⚠️ **`pickled ginger` covers gari AND beni shoga**, which are not the same product. At 10–20g a
card they cannot diverge enough to matter. Ruled with eyes open, not missed.

📌 **The rename that made the key work.** Adding the key alone changed nothing: `pickled red
ginger (beni shoga)` still fell to `ginger`, because the lookup needs the key as a contiguous
phrase. Four ingredient lines across `japan-okonomiyaki`, `japan-takoyaki` (base + one version
delta) and `japan-chirashizushi` were renamed to **`pickled ginger (beni shoga)`**. Verified by
probe, not by reasoning. **A key without the matching name is not a fix.**

⛔ **STILL NOT KEYED, deliberately:** `tuna` R120 is commented `(tinned)` and `tuna loin` /
`sashimi tuna` both fall through to it. The correct key **`tuna steak` R350 already exists**
(prices.js:239, Tina-sourced for Marmitako). This is not a missing price — it is a right answer
sitting one word from a 3× wrong one. Sushi records write **`tuna steak`**, never bare `tuna`.
