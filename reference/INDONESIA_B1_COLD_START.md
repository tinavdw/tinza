# 🇮🇩 INDONESIA B1 — COLD START. PASTE THIS AND NOTHING ELSE.

**Built for 5 records per handback, two batches in one chat.** The one-record-one-handback rule that
made tonight take 8 hours is STRUCK for this lane — it existed because two sessions died mid-batch,
and the actual fix is batching the GATES, not the recipes. Read "THE SHAPE OF THE SESSION" below
before writing anything.

---

## PASTE BLOCK (copy from here down into a new chat)

Indonesia B1. Clone the repo, don't ask me for files:
`git clone --depth 1 https://github.com/tinavdw/tinza.git`

Everything you need is at origin: `core.js`, `prices.js`, `worldkitchen.js`, `merge.js`,
`merge-selftest.js`, `pricecheck.js`, `reference/ASIA_SCHEMA_KEYS.json`, `reference/ASIA_PROGRESS.md`.
`wk_indonesia.js` does not exist yet — merge.js creates it.

⛔ **DO NOT QUOTE A COUNT FROM MEMORY.** Japan is closed at 50/50 and wired. China is closed at 50/50,
pushed and wired. Indonesia starts at **0**. Count with node before stating any number.

### THE SHAPE OF THE SESSION — this is the part that matters

**Batch of five, one gate run, one handback. Then the next five in the same chat.**

1. **ONE probe pass up front for all five records.** Draft every ingredient line for all 5, then probe
   them in a single `wkPriceLookup()` sweep. Do not probe record-by-record.
2. **Write all five records into one batch file.**
3. **ONE `node --check` → ONE `node merge.js indonesia batch1.js` → ONE `node pricecheck.js indonesia`.**
4. **ONE handback:** `wk_indonesia.js` + a progress block. Then start batch 2 immediately.
5. `rm` the batch file after merging. Never hand back a batch file or any file-tidying step.

⚠️ **The only thing that must stay per-record is the collision check** — every planned moat and
technique lead checked against the file before writing, because that cannot be batched safely.

### PRICES — THE RULE CHANGED ON 30 JULY

**A price Tina gives is keyed in `prices.js` in the same message. Never deferred, never left as prose.**
A7's price-deferral cost her 2–3 hours of re-sourcing on 30 Jul: nine of her figures sat normalised in
MF152's "TO ADD" table for weeks and eight were silently resolving to a cheaper product. That is closed.
⛔ **Never ask her for a price without first running:** `node pricecheck.js indonesia` and checking the
🟣 PARKED BUT ABSENT section, `grep` for the key and every near-spelling in `prices.js` (`bean sprouts`
vs `beansprouts` cost her a repeat), and both alias maps.

### THE FOUR MECHANICAL CLASSES THAT LOOK LIKE MISSING PRICES AND ARE NOT

Check these before writing any ingredient line — all four bit us on Japan:

1. **A prep tail defeats an alias or a `_each` key.** `carrot, cut into fine matchsticks` → ABSENT
   while `carrots` R25 exists. `1 sheet nori, cut in half` → ABSENT while `sheet nori_each` R4.70
   exists. **Prep goes in the method. The ingredient name is the buy-name and nothing else.**
2. **A-or-B lines price nothing.** `chicken or vegetable stock`, `tinned red kidney or adzuki beans`,
   `rock sugar, or 25g white sugar` — no contiguous phrase matches. **Pick one and put the
   alternative in the method.**
3. **A COUNT line on a per-kg key is dropped into `missing`** and silently costs the card its 0.8
   coverage. `1 whole duck, about 2kg` priced NOTHING. **Write g/ml unless the key is `_each`.**
   `pricecheck` now reports these as 🔵 WILL NOT PRICE.
4. **A note-tail collision prices the TAIL.** `garlic, whole cloves` → `cloves` R1022.
   `pricecheck` reports these as 🔴 WRONG PRODUCT and they must be zero before handback.

### LANE RULINGS — unchanged

A1 one file per country · A2 greenfield, **cuisine = `southeast-asia`**, country = `Indonesia` ·
A3 schema from `reference/ASIA_SCHEMA_KEYS.json` (⛔ never regenerate it), costPP on VERSIONS never the
record, **budget fork leads AND must be measured cheapest — not assumed**, exactly one `default:true`,
exactly 3 versions · A4 icons only · A5 staples are real cards · A6 exactly 3 crossLinks, dead target
fails merge, **crossLinks cannot cross countries** · §26 diet lives on the VERSION, record diet is the
derived union · §28 leftovers is an ARRAY · §29.1 no bought product = no price, fails loud ·
§29.2 a staple inside another card is priced as the STORE route · §31.1 mainstream buy leads, round up ·
§31.3a retained equipment is OUT of costPP, consumed is priced in full · `servings` always 1 ·
diet vocabulary = omnivore / vegetarian / vegan / unknown ONLY.

⚖️ **costPP comes from `wkCostState()` + `applyVersionDelta()`. Never by hand.** Hand guesses drifted on
**every single one** of Japan's records 46–50.

### WIRING — 3 LINES, AT COUNTRY CLOSE ONLY (50/50)

`<script src="sections/wk_indonesia.js"></script>` in `index.html` · `window.WK_INDONESIA || [],` in
`wkPool()` in `worldkitchen.js` · and **verify `WK_COUNTRY_GEO["Indonesia"]`** — it was pre-added at
China close, but it is the silent one: without it records load into the pool and appear nowhere in the
navigation, with no error. Then one push, everything together, one deploy credit.

### CARRIED, NOT BLOCKING — mine to do, never asked of Tina again

- **China: 67 🔵 WILL NOT PRICE lines** (count-on-weight-key). `china-roast-duck` sits at coverage 0.31
  because `1 whole duck, about 2kg` prices nothing. Mechanical, one pass, no new prices. **Biggest
  coverage win left in the app.**
- **China §26 debt:** all 50 records have no per-version `diet[]`. ⚠️ Needs judgement per version and
  must NOT be auto-tagged — a vegan shown a pork dish is a harm.
- **Europe 39 + South Africa 33** of the same WILL-NOT-PRICE class.
- 8 Japan keys, none blocking a card: `dried wakame` · `kamaboko fish cake` · `niboshi` ·
  `sheets aburaage` (real gaps on cards that already cost) · `nagaimo` · `shiso` · `mitsuba` (ruled
  probably-unavailable, stand-ins in-method) · `tonkatsu` in Katsudon (§29.1).
- **`japan-nukazuke`'s costPP (R9 · R10 · R15) is RULING-SET under §31.3c** and must be excluded from
  any costPP sweep — the engine has no concept of a retained bed and a blanket recompute reverses the
  ruling. It did, twice, on 30 Jul.
- 3 soft merge warns on Japan where a budget fork is not the cheapest (`takoyaki`, `nikujaga`,
  `chikuzenni`). Tina's judgement, left as authored.

### TINA'S OPEN DECISION, ONE LINE EACH

- **`aonori` 2g = R56**, which is why Okonomiyaki reads R109 — dearer than its pork belly. The price is
  right; the lever is the quantity. 0.5g is a real dusting at R14.
- **Strike the price half of A7 as a written §31 amendment?** It has been applied in practice since
  30 Jul; it is not yet written down.

**Batch 1 is five records. Author them, gate them once, hand back once, then start batch 2.**
