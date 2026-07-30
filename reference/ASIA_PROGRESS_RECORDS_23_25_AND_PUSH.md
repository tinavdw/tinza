# 📋 PASTE-IN BLOCK → `reference/ASIA_PROGRESS.md` · RECORDS 23–25 + THE HALFWAY PUSH

⚠️ **A BLOCK, NOT A REBUILT FILE.** Paste under the record 22 entry.

---

## ✅ RECORD 23 — `indonesia-ayam-betutu` · **Ayam Betutu** · main · **R43 · R55 · R77**

**LEAD (new):** the paste is roughly **a quarter of the weight of the bird**, and it goes in
**three places for three different jobs** — under the skin (direct contact, and the rendering fat
carries the fat-soluble aromatics *inward* instead of off the bird), packed into slashes cut to the
bone (the pieces version of stuffing a cavity), and over the outside as a **sacrificial crust** that
shields the skin and becomes the sauce. The four hours are forced by the paste volume, not by the
chicken: that much shallot, chilli and unrefined sugar burns long before a bird is roasted.

⚖️ **THE PEPES COLLISION WAS HANDLED HEAD-ON, NOT AVOIDED.** Betutu **fries** its base genep and the
card says why in the same breath as naming Pepes: a sealed parcel exists to trap volatiles so Pepes
goes in raw, while raw shallot sitting on meat for four hours turns acrid, and turmeric and chilli
give their colour up to *fat*, which then travels into the meat. No parcel anywhere in the card.

**MOAT (register: fuel / waste-stream engineering — unspent):** the original oven was **rice husk**.
About a fifth of harvested rice by weight, indigestible, heavily silicated, abrasive enough to wear
out machinery — and it smoulders low and steady for many hours unattended. **The timing of this dish
was never chosen; it is what a husk fire does.** Coda: the ash is 85–95% amorphous silica and is now
a commodity pozzolan blended into concrete.

⚠️ `cassava leaves` → **cassava ROOT R56, wrong product.** Kept out of the ingredient list entirely;
the traditional cassava-leaf stuffing is named in-method and the card says plainly it is left out.
`duck` R200/kg is live and correct — v3 is Bebek Betutu.

---

## ✅ RECORD 24 — `indonesia-es-cendol` · **Es Cendol** · dessert · **R11 · R13 · R17**

**LEAD (new):** the batter goes into the colander **already cooked** into a thick glossy paste, and
is pressed through **from 20–25cm up** — because a falling column of liquid cannot stay a column, it
necks and breaks into drops on its own, which is what makes the tail. Ice water underneath sets the
surface on contact so the droplets bounce apart instead of fusing into one grey mass. Two starches,
two jobs: rice flour for body, tapioca for the spring. Then **syrup sweet, coconut milk salty, never
mixed** — that separation is the dish.

**PANDAN HANDLED, NOT BUILT ON** (per the queue warning): written for **cendol putih**, the real
plain white version. Two sentences, pointing at the Klepon card, plus the honest line that colouring
alone gives you the look and none of the reason anyone wanted it.

**MOAT (register: history of technology — unspent):** **the dish is centuries older than the first
word in its own name.** Dawet traces to Old Javanese literature of the Kediri period; the *es* is a
20th-century addition and means ice. An entire family of national desserts — es teler, es campur, es
doger — is dated by its equipment, and the expensive world-spanning part of the recipe is the part
you took out of a freezer drawer without thinking.

---

## ✅ RECORD 25 — `indonesia-acar-kuning` · **Acar Kuning** · side · **R10 · R15 · R44**

**LEAD (new):** salt-draw and **throw the water away**, then **boiling brine over cold raw
vegetables** — the heat sterilises the surface, drives brine into the outer millimetre and firms the
pectin, while a jar of cold batons pulls it below cooking temperature within a minute so the centres
stay raw. ⛔ The named failure is simmering the vegetables *in* the brine.

⚖️ **THE RUJAK COLLISION IS THE POINT, NOT A DODGE.** Same osmosis, opposite purpose, and the card
says so: Rujak salts produce so the drawn liquid *becomes* the dressing; here that same water is the
enemy, because whatever comes out in the jar dilutes the brine and turns a fortnight's pickle into a
cloudy two-day one.

**/wow §4 FERMENT-ADJACENT — ANSWERED PROPERLY.** The card states in bold that **this is not a
ferment**: a true pickle makes its own acid under salt at ambient temperature while lactic acid
bacteria work; an acar has the acid poured in from a bottle and nothing is being cultured. Therefore
**no counter time, no cupboard, no water-bath, fridge only, two weeks**, plus the spoilage tells.
Ambient temperature is named as a hazard rather than a step.

**MOAT (register: culinary institution / cultural export — unspent):** **rijsttafel is a Dutch
invention that barely exists in Indonesia.** Assembled in colonial households as theatre, faded
after independence, and now a living institution in Dutch restaurants — while the genuinely
Indonesian many-small-dishes format is the nasi padang counter. Second paragraph lands on acar's
role: the smallest bowl on the table is the one making the other twenty edible.

✅ `white vinegar` **R49** used rather than the generic `vinegar` R25 — a real and different store
product, exact key, no new key needed.

---

## 📊 FILE STATE AT THE PUSH — measured with node, not quoted

**25/50 · 75 versions · main 9 · staple 3 · side 4 · starter 5 · dessert 4**
vegan-capable **19/25** · egg base lines **6 (STILL CLOSED — none of 23/24/25 adds one)** ·
0 dead crossLinks · 0 diet-union mismatches · every record coverage **1.00** ·
**0 records fail the 0.8 cost gate** · all 75 costPP match the engine.

`pricecheck`: **exact 62 · wrong-product 0 · will-not-price 0 · absent 0** ·
`wowcheck` whole file ✅ · `merge-selftest` 48/48 · `priceledger` 99/99 ·
ledger baselined **25 records · `a561f3e3a5649ac4`**.

⛔ **`prices.js` WAS NOT TOUCHED IN THIS SESSION.** No key added, no key invented, no attribution
written in your name. All four records priced entirely on existing sourced keys.

---

## 🔌 WIRING — DONE, NOT DESCRIBED

Both lines are already applied in the handed-back files:

1. `index.html` — `<script src="sections/wk_indonesia.js"></script>` inserted after `wk_japan.js`
2. `sections/worldkitchen.js` line 58 — `window.WK_INDONESIA || []` appended to `wkPool()`
3. `WK_COUNTRY_GEO["Indonesia"]` — already present, `["Asia","South-eastern Asia"]`, untouched

**Proven by loading them, not by reading them:** a sandboxed load of `prices.js` → `core.js` →
`wk_indonesia.js` → `worldkitchen.js` returns **25 Indonesia records out of `wkPool()`**, the geo
entry resolves, and **no record fails the cost gate**. `node --check` green on all three files.

⚖️ Law 2 still applies — this says what the code should do at HEAD. Your eyes on
tinza.netlify.app close it.

---

## 🔴 ONE THING BEFORE THE PUSH — THE PHOTO GATE IS RED, AND IT IS NOT MINE

`node Tools/photo-audit.js` → **8 broken photo links.** All pre-existing, none Indonesian:

| what | where | fix |
|---|---|---|
| 7 × wrong case (works locally, 404s live) | `spice.js` | `mayonnaise` → `Mayonnaise`, and the same for `beef stock`, `chicken stock`, `Dijon mustard`, `mango chutney`, `sriracha`, `tomato ketchup` |
| 1 × genuinely missing file | `meals.js` · Portuguese Roll (Papo Seco) | wants `Portuguese Roll.jpg`, which is not in Images |

**I have not touched either file** — editing a working section is Stability Rule 1 and that is your
call, not mine. Say the word and I will fix the seven `spice.js` cases in one pass and hand the file
back gated. Nothing about these blocks the Indonesia deploy: the new records carry no photos yet, so
the gate is exactly as red as it was this morning.

---

## ▶️ AFTER THE PUSH — 26 to 50

**Reserve already on the list:** Lapis Legit (18 grilled layers) · Sayur Asem · Terong Balado ·
Oseng-Oseng Mercon.

⛔ **NEWLY SPENT, add to the lists.** Leads: three-placement paste + low heat forced by paste volume
(Betutu) · cooked-paste pressed from a height + ice-set droplets + sweet-vs-salty kept apart
(Cendol) · draw-and-discard + boiling brine onto cold raw vegetables (Acar).
Moats: rice husk as a self-running oven + its ash in concrete · a dish older than the first word of
its own name · rijsttafel as a Dutch invention living abroad.
**Ownership:** base genep = Betutu · the droplet = Cendol · pickling = Acar · rice-husk/ash = Betutu
(⚠️ so **dawet ireng's rice-straw-ash black is now blocked** — it would repeat Betutu's angle).
