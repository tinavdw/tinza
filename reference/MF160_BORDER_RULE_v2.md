# MF160 — §39 · THE BORDER RULE · **v2, 5 Aug 2026**

> ⚠️ **THIS SUPERSEDES v1, WRITTEN EARLIER THE SAME DAY.** v1 said the fix was to replace bare
> *"here"* with *"in South Africa"*. **Tina overruled that within the hour, and she was right.**
> v1's §39a is STRUCK. Do not work from it. *(v1 kept per §2.3 as `MF160_BORDER_RULE_v1_STRUCK.md`.)*

> **Tina, 5 Aug 2026:** *"we shouldnt say that, it wont help someone in Nigeria, there he would
> maybe also struggle to find it, just say the ingredients."*
>
> And: *"Im not just aiming for SA… someone from Sweden or Nigeria or Japan should be able to
> browse our app, and be able to make sense of it."*

---

## §39 — THE RULE

> ### 1 · The ingredients line is the answer. Do not tell the reader what they cannot buy.
> ### 2 · Anything that would be false elsewhere must be stated as a MEASURED QUANTITY — not a currency figure, and not a vague multiple.

⚖️ **Naming the country does not fix an availability claim — it only makes it wrong more
politely.** *"Kencur is not sold in South Africa"* tells a Lagos cook nothing; he may not find it
either, and the card has now spent a sentence on a shelf he will never stand in front of.
**The card's job is to say what to cook with.** ✅ Galangal is already in the ingredients list.
**That IS the answer**, and it is true in Stockholm, Lagos and Pretoria alike.

⚖️ **The authentic ingredient may still be NAMED and EXPLAINED** — that is teaching, and §33
protects it. *"Traditionally this is bạc hà, an elephant-ear stem, spongy and thirsty for broth"*
is a fact about the **dish**. *"You can't get it here"* is a claim about a **shop**.
**Keep the first. Cut the second.**

---

## 0 · WHY A RULE AND NOT A `locale` FIELD — RECORDED SO IT IS NOT RE-DECIDED

1. **⚖️ Rule Zero — SAMENESS.** A record *with* the field renders differently from one *without*
   it until all 1200+ carry it — a sameness bug **by construction**, touching every shared
   renderer, `merge.js` and every watcher. ⚖️ **Law 50.**
2. **The app's SA-ness is not thirty sentences — it is `PRICE_DB`.** Every `costPP` is in rands.
   A prose locale layer fixes a few dozen sentences and leaves the real localisation untouched.
3. **There is exactly one locale.** When a second currency arrives the layer gets designed around
   **pricing**, and prose falls out of *that* design. Build it now and it gets designed twice.

⛔ **§33 / §33.8 ARE NOT IN SCOPE.** SA words are **EXPLAINED, NEVER TRANSLATED** — *bredie ·
braai · potjie · waterblommetjie · plaaskombuis · stoep · Highveld* stay exactly as they are.
**The same courtesy is owed to Nigerian, Swedish, Japanese and Indonesian dish words.** ⚠️ If a
fix seems to require re-glossing or removing a dish word, **the fix is wrong — stop and ask.**

---

## 1 · ⛔ STOP-CONDITION

```
grep -n "§39\|BORDER RULE" TINZA_RULINGS.md
```
If §39 is already written, **the ruling half is DONE — say so and go to §3.**
Baseline: `node tinza-doctor.js` (**RED 10**) · `node tinza-lawcheck.js` (**0 red 0 drift**).

---

## 2 · ✅ COMMIT 1 — WRITE §39 INTO `TINZA_RULINGS.md`

Both rule clauses, the date, Tina's words as the reason, the three grounds from §0, and the three
arms below. ⛔ **Nothing goes in `CLAUDE.md`** — it POINTS, it does not carry rulings. ⚖️ Law 15 · Law 37.

- **§39a — NO AVAILABILITY CLAIMS.** Cut them. State the substitute as the ingredient. The
  authentic item may be named and explained as a fact about the dish, never as a fact about a shop.
- **§39b — MEASURED QUANTITIES, NOT CURRENCY AND NOT VAGUE MULTIPLES.** A yield in grams travels.
  A rand figure does not. *"Comfortably more than double"* is not a measurement.
- **§39c — SEASONS.** Shipped separately as **MF158**. Do not redo it here.

---

## 3 · ✅ COMMIT 2 — §39a · THIRTY CLAIMS ACROSS TWENTY-FIVE RECORDS

**Measured 5 Aug 2026 with an anchored pattern.** ⚠️ v1 said nine. **Nine was wrong** — that
pattern caught only the bare-`here` shape and treated *"in South Africa"* as already correct.
Under this ruling **both shapes go.**

| file | records |
|---|---|
| `wk_indonesia.js` | `gado-gado` · `pepes-ikan` · `urap-urap` ×2 · `plecing-kangkung` · `ayam-betutu` ×2 · `es-cendol` · `sayur-asem` · `ayam-taliwang` · `kue-lapis` ×2 · `ayam-tangkap` |
| `wk_thailand.js` | `som-tam` ×2 · `massaman` · `khao-soi` · `sai-krok-isan` · `sup-nor-mai` · `oliang` · `khanom-jeen` · `miang-kham` · `kua-kling` |
| `wk_vietnam.js` | `che-chuoi` · `com-tam` · `xoi-xeo` · `canh-chua` ×2 |
| `wk_japan.js` | `kinpira-gobo` |

**THE TREATMENT — the same three moves every time:**
1. **Cut the availability clause.** Not softened, not re-worded — **cut**.
2. **Keep the authentic ingredient named and explained** where it teaches something about the dish.
3. **Let the ingredients list carry the answer.** Every one of these records already has the
   substitute on its ingredients line.

**Worked example — `indonesia-urap-urap`:**
> ⛔ *"…kencur, which is a third plant entirely — not ginger and not galangal, sharper and more
> medicinal than either — **and it is not sold here**."*
>
> ✅ *"…kencur, which is a third plant entirely — not ginger and not galangal, sharper and more
> medicinal than either. **Galangal, measure for measure, is the closest honest route**; ginger
> with a pinch of white pepper is the other."*

**The teaching survives. The shop disappears. The cook is told what to do.**

⚠️ **`thailand-massaman`'s caps and `thailand-miang-kham`'s ⛔ are DELIBERATE VOICE.** Massaman's
whole argument is *"you are going to build the paste"* — **that argument is right and stays**;
only the *"NOT SOLD HERE"* clause goes. `tinza-echo.js` will flag a rewrite that flattens the voice.

⚠️ **TWO ARE `no reliable shelf price` CLAIMS, NOT AVAILABILITY CLAIMS** — `thailand-khao-soi` and
`thailand-sai-krok-isan`. They explain why an ingredient is **off the ingredients line**, which is
a pricing fact and load-bearing. ⛔ **Do not cut them blind.** Rewrite to say the ingredient is not
priced in this card **without** asserting where it can be bought — or hand both to Tina. Two lines,
worth her eyes.

⚠️ **`indonesia-ayam-goreng-kalasan` IS A FALSE POSITIVE** — *"sterile saline was not available, in
the Pacific during the Second World War."* Wartime history. ⛔ **Leave it.** If a future grep flags
it, re-read this line rather than re-deciding.

---

## 4 · 🩸 THE CRAB SCAR — READ BEFORE TOUCHING `thailand-som-tam`

🩸 **On 2 Aug 2026 a card claimed frozen whole raw crab could not be bought in Pretoria. IT WAS
FALSE.** Tina buys it regularly at seafood shops and has made crab curries for years.

⚖️ **THE RULE RECORDED THAT DAY: DO NOT REASON FROM A CITY TO A SHELF. ASK — SHE HAS BEEN TO THE
SHOP.** Two assumptions were stacked and the second was invented. `thailand-pu-phad-pong-karee`
was rewritten and now carries **no availability claim at all** — re-verified 5 Aug.

⚠️ **`thailand-som-tam` still carries one:** *"Those crabs are not sold in South Africa."* It is
about small whole raw **field** crabs for som tam poo — a different product from frozen whole crab
— **but nobody has checked it with Tina's eyes, and the last unchecked crab claim in this corpus
was fabricated.** Under §39a it goes regardless. ⛔ **Do not replace it with a different
availability claim.** The raw-preparation caution is a **food-safety** point and **stays**.

---

## 5 · ⚠️ TWO CORRECTIONS TO THE 5 AUG MEASUREMENTS

**5a · SHOP NAMES: THERE ARE NONE.** An earlier count reported 5. **All five were false positives.**
`Makro` matched inside **`Makroudh`** and **`Makroud`** *(Tunisian and Libyan date pastries)*;
`Spar` matched inside **`Spare Ribs`**, **`spare leaves`** and **`Sparks "Jollof wars"`**.
⚖️ A brand grep must be **word-boundary anchored and case-sensitive** or it invents work out of
ordinary English and Arabic loanwords.

**5b · AVAILABILITY CLAIMS: 9 WAS WRONG, AND SO WAS 473.** The first pattern caught only
bare-`here` — **9, an undercount**. A second, loosened to catch both shapes, returned **473**,
almost all ordinary prose: *"no resistance at all"*, *"here is the law"*, *"nothing here freezes"*.
The anchored pattern returns **30 across 25 records**, and that is the number this brief works from.

⚖️ **THE RUNG BOTH FAILURES SHARE — the doubanjiang scar wearing two more faces:** that probe could
only ever return a **zero**; these two could only return a **false one** and a **flood**. **None of
the three had been shown to distinguish a hit from a miss before its number was reported.**
⛔ **Report a probe's design before its count.**

---

## 6 · ✅ COMMIT 3 — §39b · FOURTEEN RAND FIGURES ACROSS SIX RECORDS

⚠️ **v1 proposed keeping the figures and naming the country. STRUCK** by the same ruling: a rand
figure does not help a Swede, and *"in South Africa"* in front of it does not make it help.

**The replacement is a MEASURED QUANTITY.** ⚖️ **Tina, 5 Aug:** *"'comfortably more than double the
tub' — vague, rather give grams kg or ml."*

| record | figures | treatment |
|---|---|---|
| `thailand-pu-phad-pong-karee` | R660 · R400 · R1400/kg | ⭐ **THE MODEL.** The card already holds the real number: **a whole crab is 25–33% edible — 300g of whole crab yields about 84g of meat.** ✅ **That yield IS the argument.** True in every country, no currency, never goes stale. **Lead with the grams; the rands go.** |
| `japan-yakitori` | R450 · R37,500/kg | give the **weight and the dose** — a 12g shaker against the pinch a recipe uses. The absurdity survives without the price. |
| `japan-matcha-warabimochi` | R350–R600 · under R30 | give **grams per pack**. The card's real point — cornflour is the honest route — stands on the method. |
| `japan-takoyaki` | R250–R400 | *"a 1kg bulk bag for something you use ten grams of"* — **the card already says this.** Keep the weights, cut the rands. |
| `japan-nukazuke` | R20–R40 · R40 | give **500g bag**, cut the rands. ⚠️ `japan-nukazuke` costPP is ruling-set **§31.3c — EXCLUDE FROM ALL SWEEPS.** Prose only, never the cost. |
| `ethiopia-shiro-wat` | ~R375/kg | cut the figure; the besan substitute is already on the line and is the answer. |

⛔ **NO CURRENCY CONVERSION, EVER.** *"about US$25"* goes wrong silently the moment the rand moves.

⚠️ **`thailand-pu-phad-pong-karee` also carries a live §37 defect** — its **Picked Meat** and
**Chicken** forks are two of the three struck cost claims from 3 Aug, one card asserting both
*"the expensive one"* and *"for a fifth of the money"*. ⛔ **Not this brief.** Read both forks
together in its own pass.

---

## 7 · ⚖️ LAW 42 — THE RATCHET · THE WATCHER

**Home: `tinza-echo.js`.** ⛔ Do not build a seventh standard. ⚖️ Same design law as `tinza-all.js`.

**Two amber rungs — AMBER, not RED:**
1. **Any availability claim in a `wk_*.js` prose field** — anchored on `not sold` · `not stocked` ·
   `not available` · `not on a shelf` · `not a supermarket staple` · `will not find it here`.
   *(Allowlist: `indonesia-ayam-goreng-kalasan`, WWII saline.)*
2. **A rand figure `R\d` in any prose field** — trivia, chefNotes, method, howThisFeels, storage,
   leftovers. **After commit 3 the correct count is zero**, so it starts green and fires the day
   someone writes a price into a card.

⚠️ **AND IT MUST PRINT WHAT IT CANNOT MEASURE.** ⚖️ Same law as `tinza-all.js`'s **JUDGEMENT
REQUIRED** block. It cannot tell a *teaching* mention of South Africa (*"in South Africa this
pumpkin decision decides the dish"* — a real cooking fact, **keep**) from an *assuming* one.
**39 "in South Africa" framings were measured and most are the GOOD shape.** A rung flagging all
39 would train everyone to ignore it. **It flags availability and currency only, and says out loud
that framing quality is judgement.**

⚠️ **PROVE BOTH BORN-RED.** Paste *"not sold here"* and *"about R99"* into a scratch copy; watch
each fire; remove; watch each go quiet. ⚖️ *A rung nobody has seen fire is a rung nobody should
trust* — and, per §5, **a rung must be shown to produce a true NEGATIVE too.**

---

## 8 · 🧪 THE PROOF — WHAT TINA TAPS

```
node --check sections/wk_indonesia.js sections/wk_thailand.js sections/wk_vietnam.js \
             sections/wk_japan.js sections/wk_africa.js
node tinza-doctor.js        # RED must STILL be 10        ⚖️ Law 51
node tinza-lawcheck.js      # 0 red · 0 drift
node tinza-echo.js          # 0 red · both new rungs green
node tinza-all.js thailand ; node tinza-all.js vietnam ; node tinza-all.js indonesia
node costcheck.js thailand ; node costcheck.js japan ; node costcheck.js indonesia ; node costcheck.js vietnam
```
⚖️ **NOT ONE `costPP` MAY MOVE.** Prose only. **If a cost moves, an ingredient line was touched —
revert and report.**

**On live, after a HARD RELOAD** (⚖️ Law 27):
1. **Urap-Urap** → kencur still named, still explained. **The "not sold here" clause is gone.**
   **Galangal is in the ingredients.** A cook in Lagos knows exactly what to buy.
2. **Massaman** → the build-the-paste argument intact, caps intact. Only the availability clause went.
3. **Som Tam** → no crab availability claim. **The raw-preparation safety caution is still there.**
4. **Pu Phad Pong Karee** → the crab economics read in **grams of meat per gram of crab**. No rands.
5. **Koeksisters** → *plaaskombuis* still there, still unglossed. §33 holds.
6. **Nukazuke** → `costPP` unchanged. §31.3c holds.
7. **My Plan survives. Servings and people counts survive.** ⚖️ Law 20.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

---

## 9 · ▶️ THE HONEST LIMIT, STATED PLAINLY

**`indonesia-ayam-tangkap`: *"a pot you can move against a north-facing wall in winter."***
North-facing is the **sunny** wall in Pretoria and the **shaded** one in Stockholm. No rung will
ever fire on it — the defect is a **compass bearing**, not a word.

⚖️ **§39 catches sentences that make claims about one country's shops and one country's currency.
It cannot catch sentences that assume one hemisphere's geometry. That stays judgement.**
