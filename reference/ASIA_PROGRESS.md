# ASIA LANE — PROGRESS
**The file is the memory.** Started 29 Jul 2026. Target: 240 recipes to WOW_STANDARD.md.

## SCOPE (Tina, 29 Jul)
> ⚠️ **COUNTED WITH NODE FROM THE SECTION FILES AT HEAD, 11 AUG 2026 — NEVER QUOTED FROM MEMORY.**
> The table below read *Japan 27 · Indonesia 0 · Thailand 0 · Vietnam 0 · TOTAL 77* until this
> correction. It had been wrong for weeks and said nothing, because a document that is wrong is
> silent. ⚖️ **Law 3.** Re-count before trusting it: `node` over `WK_<COUNTRY>.length`.

| Country | Target | Banked | File | Wired |
|---|---|---|---|---|
| China | 50 | **50** ✅ closed | `sections/wk_china.js` | ✅ wired |
| Japan | 50 | **50** ✅ closed | `sections/wk_japan.js` | ✅ wired |
| Indonesia | 50 | **42** ✅ closed *(A1: 50 is a target, not a gate)* | `sections/wk_indonesia.js` | ✅ wired |
| Thailand | 50 | **38** ✅ closed | `sections/wk_thailand.js` | ✅ wired |
| Vietnam | 50 | **28** ▶️ active | `sections/wk_vietnam.js` | ✅ wired |
| **TOTAL** | **250** | **205** | | |

Next lane after Asia: **South America.**

## RULINGS THIS LANE
- **A5 — STAPLES ARE REAL CARDS (Tina, 29 Jul).** How-to-make-it staples (tofu, chilli oil, stock, curry paste, rice paper, dashi, sambal…) get their own full WOW record with `course:"staple"`, and dishes reach them through the existing `crossLinks:[{name,target,emoji}]` mechanism rendered by `crossLinkBox()` in core.js. NOT a paragraph buried in a method. Rule: if a staple is bought in a packet but genuinely makeable, it earns a card.
- **A6 — Every record carries `crossLinks` (3 targets).** Batch 1 was retro-fitted. A dead target is a bug — the merge script asserts every target resolves before writing.
- **A7 — Prices deferred (Tina, 29 Jul).** ALL new Asian ingredient keys land in ONE batch after all five countries are authored, not per-country. MF152 is the running list — append to it, do not act on it yet.
- **A1 — One file per country.** Precedent `wk_france.js`. Smaller files, safer pushes, one Netlify batch per country. NOT one `wk_asia.js`.
- **A2 — Greenfield confirmed.** Audited 29 Jul: `wk_world.js` is South Asia only (India 32 · Pakistan 24 · Sri Lanka 30, cuisine=`south-asia`). China/Japan/Thailand/Vietnam/Indonesia have ZERO World Kitchen records. No dedupe pass needed. `cuisine` for this lane = `east-asia` (China, Japan) and `southeast-asia` (Thailand, Vietnam, Indonesia).
- **A3 — Schema control = the Snoek Curry record** in `wk_southafrica.js`. 24 keys, `type`/`diet`/`occasion` as arrays, `costPP` lives on versions never on the record, budget fork LEADS, exactly one `default:true`.
- **A4 — Dish selection: icons only.** No coffee-with-milk, no plain rice, no generic stir-fry. Every card must be a dish someone would cross town for.

## WIRING (THREE lines per country — CORRECTED 29 Jul)
⚠️ **The old "2 lines per country" note was WRONG and would have shipped 33 invisible recipes.**
There is a third, undocumented touchpoint: `WK_COUNTRY_GEO` in `worldkitchen.js` (~line 64).
`wkCountriesIn()` skips any record whose country is not in that map, so an unmapped country loads
into the pool, passes every check, and appears **nowhere** in the Continent → Region → Country nav.
No error, no blank screen, no console warning. Proven born-RED 29 Jul by removing the line: `{ China: 33 }` went unmapped.

```
1. index.html          →  <script src="sections/wk_china.js"></script>
2. worldkitchen.js:58  →  add   window.WK_CHINA || [],   to the wkPool() concat
3. worldkitchen.js:~79 →  add   "China":["Asia","Eastern Asia"],   to WK_COUNTRY_GEO
```
✅ **CHINA WIRED 29 Jul** — all three done by Claude, handed back as replacement files.
✅ Geo entries for **Japan · Indonesia · Thailand · Vietnam** were added at the same time
(Japan+China = `Eastern Asia`; ID/TH/VN = `South-eastern Asia`), so line 3 is now ALREADY DONE
for the remaining four countries. Those still need lines 1 and 2 each.
Region strings must match `WK_CONTINENTS` exactly — note it is `South-eastern Asia`, with the hyphen.

⚠️ A file that is not wired is not in the app. Push wk_china.js, index.html and worldkitchen.js TOGETHER.

---

## 🔧 MERGE VALIDATOR (`merge.js` — GENERALISED 29 Jul, keep it with the lane)
Run as **`node merge.js <country> <batchfile.js>`** — e.g. `node merge.js japan batch1.js`.
Known countries: china · japan · indonesia · thailand · vietnam (one line each in `COUNTRIES`).
Bootstraps a country file that does not exist yet, writes the standard header, and prints the
**two wiring lines** still needed. Canonical 25-key schema lives in `reference/ASIA_SCHEMA_KEYS.json`,
**never in record 1 of the target** — a new country file has no record 1, and letting each file set its
own precedent is exactly how five near-identical files drift apart.
Proof harness: **`node merge-selftest.js` → 31 assertions born-RED, control GREEN.** Run it after ANY edit to merge.js.
Asserts: Refuses to write the file if ANY assertion fails. Asserts:
key-set identical to record 1 · no duplicate id · cuisine/country correct · type/diet/occasion/leftovers are arrays ·
**diet token in vocabulary** (omnivore/vegetarian/vegan/unknown — halaal & kosher are separate laws) ·
exactly 3 versions · exactly one `default:true` · budget fork LEADS · numeric `costPP` on every version · no `costPP` on the record ·
delta op names + shapes (`addIng{item}` · `addStep{text}` · `swap*{from,to}` · `removeIng{item}`) · no empty `to` ·
**DEAD-DELTA CHECK — every `swapIng`/`removeIng` `from`/`item` must actually exist in that record's `ingredients` string, and every `swapStep` `from` must exist verbatim in its `method`** ·
exactly 3 crossLinks, none self-pointing, every target resolving, and every EXISTING record's crossLinks re-checked on each merge.

Honest limit: it cannot tell you a moat is boring, a law is wrong, or a price is unrealistic. It catches structure, not judgement.

## 🇨🇳 CHINA — ✅ CLOSED 50 / 50
## 🇯🇵 JAPAN — ✅ CLOSED 50 / 50
## 🇮🇩 INDONESIA — ✅ CLOSED 42 *(A1 amended: 50 is a target, not a gate)*
## 🇹🇭 THAILAND — ✅ CLOSED 38
## 🇻🇳 VIETNAM — ▶️ ACTIVE 25 / 50 — the authoring front

---

## ⚠️ OPEN — PRICE GATE
Prices remain **DEFERRED** (A7) — one batch after all five countries. `reference/MF152_ASIA_PRICE_KEYS.md`
was rebuilt 29 Jul from Tina's sourced prices plus a live check-not-add audit against `prices.js` at HEAD.

**Headline: Tina was right — a lot already exist.** 14 keys we would have duplicated are already in the DB
(`beef sirloin` R190 · `cake flour` R22 · `prawns` R350 · `jasmine rice` R63 · `cornflour` R68 · `peanuts` R128 ·
`oyster sauce` R260 · `sesame seeds` R244 · `crab meat` R660 · `pork bones` R45 · `pork fat` R60 · `chives` R650 ·
`sichuan peppercorns` R1300 · `puff pastry` R80). `crab meat` matched Tina's R165/250g to the rand.

**~14 genuinely missing**, headed by `chicken thighs` (unpriced, and used in nearly every budget fork in the lane)
and `daikon` (distinct from the existing `radish` R108 — different vegetable).

⚠️ **Collision risk, flagged loudly in MF152:** `fermented black beans` must NOT alias to the existing
`black beans` R50, which is the legume. Nothing mechanical would ever catch that.

✅ **RULED 29 Jul — WHEAT STARCH = SPECIALTY GROCER ITEM.** No retail price exists (bulk/per-tonne only), so the
Har Gow card now says so on the ingredient line and warns in `chefNotes` to buy it *before* planning the day.
Wording kept generic per the global-wording ruling — no shop or place names in prose. Cornflour/Maizena rejected as
a substitute: it sets opaque and the card claims a translucent skin. **The price itself is still open** — estimate
against `cornflour` R68 / `tapioca` R70, weigh a real packet, or leave it blank. Tina's call at the price batch.

✅ **RULED 29 Jul — FERMENTED BLACK BEANS (douchi) = R95–180 / 400g → ~R340/kg.** That is **~7× the existing
`black beans` R50 legume key**, and douchi appears in **six records** (mapo-tofu · hui-guo-rou · mala-xiang-guo,
plus version deltas on chilli-oil, qing-zheng-yu and gon-chow-ngau-ho). Add as its own key; never alias.

---


---

## 📦 THE BUILD LOG LIVES NEXT DOOR

> Every per-record decision entry — China 1–50, Japan 1–50, Indonesia 1–42, Thailand B1 — is in
> **`reference/ASIA_PROGRESS_HISTORY.md`**, split out 11 Aug 2026 (MF180 family, `/split`).
> ⛔ **That file carries no live state.** Where it and this file disagree, **this file is right.**
>
> ⚠️ **Three documented gaps in the history, all recorded there and none reconstructed:**
> Japan 43–44 *(entries lost)* · Indonesia 12–22 and 36–41 *(no block found)* ·
> Thailand B2→38 and all of Vietnam *(never written — the narrative is in the cold starts)*.
