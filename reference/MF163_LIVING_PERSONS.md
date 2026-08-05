# MF163 — WE DO NOT SPEAK FOR LIVING PEOPLE

> **Found 5 Aug 2026**, in the §3 sweep MF162 asked for. Five `wk_southafrica.js` records name
> **Mmabatho Molefe** — a real, living South African chef (Emazulwini, Cape Town). One also names
> **her mother, Sindi**, a private individual.
>
> ⚖️ **This is the Jan Braai rule, one degree sharper.** Jan Braai was an unpermissioned *credit*
> for a real technique. These are **invented speech, invented feeling, and a private family
> member.**

---

## 0 · THE RULE THIS CLOSES

📌 **NO REAL, NAMED, LIVING PERSON IS QUOTED, PARAPHRASED, OR CREDITED WITH AN OPINION, A FEELING,
OR A TECHNIQUE IN CARD CONTENT.**

**What STAYS — history and culture, and this carve-out is deliberate:**
✅ Escoffier · Louis Diat · Tselementes · Lucien Olivier · Bircher-Benner · João da Mata.
Long-dead, historically documented, and named in the way a cookbook names them. ⛔ **Do not
sweep these.** ⚖️ *"Madurese traders carried this dish"* is history. *"She says it makes her miss
home"* is a claim about a living woman's inner life.

**What GOES:**
1. **Quote-shaped claims** — *"says…"*, *"calls this…"* — for words we cannot source.
2. **Claims about a living person's feelings or private life.**
3. **Any private individual**, named at all, ever.

⚖️ **The restaurant is a public fact. The chef's feelings are not.** Emazulwini is real,
celebrated and genuinely notable, and the *culinary* claim is worth keeping. **Keep the fact,
drop the person's interior.**

---

## 1 · ⛔ STOP-CONDITION

```
grep -c "Mmabatho\|Sindi" sections/wk_southafrica.js
```
**Expect 5.** If **0**, this brief is DONE — say so and STOP. If anything other than 5 or 0,
**STOP AND REPORT THE NUMBER.**

Baseline: `node tinza-doctor.js` (**RED 10**) · `node tinza-lawcheck.js` (**0 red 0 drift**).

---

## 2 · 🚨 THE RED LINES

⛔ **DO NOT strike the dishes.** All five are real Zulu dishes and all five stay. This edits
**one descriptive sentence** per record.

⛔ **DO NOT touch the historical names** listed in §0. They were measured and cleared.

⛔ **DO NOT gloss or translate the Zulu.** ⚖️ §33 — *izingingila · namasi · istambu · namathambo ·
inyama · namadombolo* stay exactly as they are. **Explained, never translated.**

⛔ **Prose only. NOT ONE `costPP` MAY MOVE.**

---

## 3 · ✅ COMMIT 1 — THE FIVE LINES

### `zulu-izingingila-namasi`
```
FROM: A modern, restaurant-style take on humble chicken gizzards from chef Mmabatho Molefe of Emazulwini - proof that offal can be elegant.
TO:   A modern, restaurant-style take on humble chicken gizzards - proof that offal can be elegant.
```
⚖️ **The mildest of the five** — a plain credit, no invented speech. It still goes, because the
credit is unpermissioned, but note it is a different severity from the two below.

### `zulu-istambu-namathambo` 🔴 **THE WORST ONE**
```
FROM: A labour-of-love family dish - chef Mmabatho Molefe credits it to her mother Sindi, cooked on good-mood days.
TO:   A labour-of-love family dish, cooked slowly and on the days you feel like it.
```
🔴 **Sindi is a private individual with no public profile.** The card publishes her name, her
relationship, and her cooking habits. ⛔ **She must not appear in any form** — not as *"the
chef's mother"*, not as *"a Cape Town chef's family recipe"*. **The dish is the point; the
family is not ours.**

### `zulu-inyama-namadombolo`
```
FROM: Comfort food chef Mmabatho Molefe says makes her miss home and the couch.
TO:   Comfort food of the kind that makes you miss home and the couch.
```
🔴 *"says"* is a **quotation we cannot source**, about **her feelings**.

### `zulu-african-grain-salad`
```
FROM: Born in lockdown when chef Mmabatho Molefe went hunting for indigenous African grains.
TO:   Born in lockdown, when indigenous African grains got a serious second look.
```

### `zulu-creamy-sorghum`
```
FROM: Chef Mmabatho Molefe calls this one pure indulgence - all that butter and creme fraiche.
TO:   Pure indulgence - all that butter and creme fraiche.
```
🔴 *"calls this"* — another unsourced quotation.

⚠️ **`creme fraiche` should be `crème fraîche`** — noticed, **not fixed here.** One thing per brief.

---

### 🆕 `wk_europe.js` · Virgílio Nogueira Gomes — **A SIXTH LINE, FOUND 5 AUG**
```
FROM: Virgílio Nogueira Gomes credits the restaurant boom for turning this once-domestic dish into a national favourite.
TO:   The restaurant boom is what turned this once-domestic dish into a national favourite.
```
⚖️ **A living Portuguese food historian, credited with an origin claim.** Milder than the Molefe
quotations — it is a scholarly attribution, not a feeling — **but it is still an unsourced claim
put in a living person's name, and the sentence loses nothing without him.** ⚠️ The stop-condition
count in §1 covers `wk_southafrica.js` only; **this line is in `wk_europe.js` and must be counted
separately.**

---

## 4 · ⚠️ COMMIT 2 — BEYTI GÜLER, VERIFY BEFORE TOUCHING

`wk_europe.js:510` — *"Named after chef Beyti Güler."* Code flagged him as recently deceased but
**could not confirm the date, and correctly flagged rather than assumed.**

### ✅ `József Dobos` — RULED: STAYS, AND GOES ON THE ALLOWLIST
> *"Created by pastry chef József Dobos in 1885 — the glassy caramel top was not decoration but
> armour…"*

**A dated creation fact from 1885.** Nobody alive is being spoken for, nothing is quoted, no
feeling is claimed. This is §0's historical carve-out working exactly as intended. ⚖️ Code
declined to add a death date it had not verified — **correct, and the right instinct** — but the
*date is not what makes him allowlist material.* **1885 is.** A named creator with a documented
year is food history, and food history is most of what the trivia fields are for.

### ⚠️ BEYTI GÜLER

⚖️ **This one is probably FINE and should probably STAY.** A dish **named after** a person is a
naming fact, like Beef Wellington or Pavlova — it is not a quote, an opinion, or a feeling. It is
the §0 carve-out almost exactly.

⛔ **DO NOT edit it on a guess.** ⚠️ **Report it to Tina with what is known and STOP.** ⚖️ This is
the crab scar again: *do not reason from a city to a shelf.* **Do not reason from "recently
deceased, unconfirmed" to an edit.**

---

## 5 · 🧪 THE PROOF

```
node --check sections/wk_southafrica.js
grep -c "Mmabatho\|Sindi" sections/wk_southafrica.js    # must be 0
node tinza-doctor.js        # RED must STILL be 10       ⚖️ Law 51
node tinza-lawcheck.js      # 0 red · 0 drift
node tinza-echo.js          # voice must not have flattened
node costcheck.js southafrica
```
⚖️ **NOT ONE `costPP` MAY MOVE.**

**On live, after a HARD RELOAD** (⚖️ Law 27):
1. All five Zulu dishes are **still there**, still findable, still with their Zulu names intact.
2. **No living person is named on any of them. Sindi appears nowhere.**
3. The Zulu words are **unglossed and untranslated.** §33 holds.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

---

## 6 · ⚖️ LAW 42 — THE RATCHET

**A rung that flags `chef <Capitalised Name>` and quote-shaped verbs — `says` · `calls it` ·
`credits it to` · `recommends` · `insists` — in any `wk_*.js` prose field.**

⚠️ **It must be AMBER, and it must carry the §0 historical allowlist** (Escoffier, Louis Diat,
Tselementes, Lucien Olivier, Bircher-Benner, João da Mata, Beyti Güler pending Tina's call).
**A red rung here would block legitimate food history, which is most of what the trivia fields
are for.**

⚠️ **Prove it born-RED, BOTH ARMS** — ⚖️ §5b of MF160: paste *"chef X says"* and watch it fire;
confirm **Escoffier does not.** *A probe that cannot produce a true negative is as untrustworthy
as one that cannot produce a positive.*

---

## 7 · ▶️ WHY THIS WENT FIRST

⚠️ Still open and correctly queued behind this: **the map regexes are singular-only**
(`/\bchickpea\b/` misses `chickpeas`, `/\blentil\b/` misses `lentils`, `black-eyed peas` matches
nothing) and **four `LEFTOVER_IDEAS` keys have no map entry at all** — `egg`, `pap`, `roast-veg`,
`fruit`. Frittatensuppe's anchor is `egg`, so it still falls through to beef.

🔴 **And the bigger one: 267 hand-authored `leftovers` arrays are never read by any code path.**
`leftoverBoxHTML(keys)` renders `LEFTOVER_IDEAS[key]` only. **Bebek Goreng's four bespoke ideas
have never been seen by anyone.** That is real authoring work sitting dead in the file.

⚖️ **Those are wrong content. This was a real woman's mother.** *That* is the ordering.
