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
