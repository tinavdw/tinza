# 🇻🇳 MF182 — BÁNH TÉT · AUTHORING BRIEF

**Vietnam B6 · record 2 of the batch · written 10 Aug 2026**
**Unblocked by Tina's 10 Aug price band. §3n resolved — see §0b.**

> ⚖️ **This is authoring, not implementation.** Code writes it into `sections/wk_vietnam.js` in the
> lane's existing shape. ⛔ **Do not invent a schema from this file** — copy the shape of
> `vietnam-xoi-xeo` (the nearest sibling: glutinous rice + mung bean, same `course:"side"`) and
> drop this content in.
> ⛔ **Do not merge until the Vietnam ledger is rebaselined to 25 (MF181 Part A).** `merge.js` will
> refuse, and it is right to.

---

## 🔴 0a · READ THIS FIRST — A CORRECTION TO `MF178_CHA_LUA_AUTHORING.md`

**MF178 §3, line 93 is WRONG and must not be followed:**

> *"| 2 | banana leaves | `banana leaves` ⚠️ Tina says this was priced already — `--ask` confirms, do not re-ask her |"*

**Measured 10 Aug 2026 at HEAD:**
```
node priceledger.js --ask "banana leaves"
✅ GENUINELY ABSENT from prices.js and from the ledger, including near-spellings.
```

And `sections/prices.js:1693` carries Tina's own ruling, **30 Jul 2026**:

> ⛔ **NO `banana leaf` / `banana leaves` KEY — §29.1 FAILS LOUD.** *"not sold here, unless you have
> a banana tree, and it's quite common."* A garden tree is not a bought product, so there is no
> store route and therefore no cost.
> 🔴 **AND IT CURRENTLY MIS-RESOLVES:** `banana leaves` → **`banana` R32/kg** — a **LEAF priced as
> FRUIT**, via `wkPriceLookup`'s longest-word-anywhere rung. **No live ingredient line in any
> section uses the phrase. ⛔ KEEP IT THAT WAY.**

⚖️ **THEREFORE, FOR BOTH BÁNH TÉT AND CHẢ LỤA: BANANA LEAF IS NAMED IN THE METHOD ONLY. IT IS
NEVER AN INGREDIENT LINE.** A leaf costed as fruit renders a number and looks correct — that is
the WRONG PRODUCT rung, the worst one on the ladder. `pricecheck` would report it as **exact**.

**The honest route, and the method leads on it:** cut a leaf if there is a tree in the garden;
otherwise **baking paper inside foil**. ⚠️ Do not put the caveat in Tina's mouth beyond what she
said — she said it is not sold here and that garden trees are common. Both halves are hers.

📌 **Code: hand back a one-line correction to `reference/MF178_CHA_LUA_AUTHORING.md` line 93 in the
same session.** Do not let a brief with a wrong price instruction sit in `reference/` reading as true.

---

## 💰 0b · THE §3n RULING THAT UNBLOCKED THIS RECORD — **RESOLVED 10 Aug 2026 (Tina)**

**Tina's band, 10 Aug:** raw mung beans **R20–R35 / 500 g**, or **R38–R90 / kg** by brand.

| step | finding |
|---|---|
| **§3n — filter the tier** | Every price in the band is **ordinary retail**. There is **no specialty tier to exclude**, so **§3n does not bite.** |
| **§3l — top of what survives** | The whole band survives. Top = **R90/kg**. |
| **result** | **`"mung beans": 90` STANDS, unchanged.** Now carries a second Tina-sourced band (10 Aug) behind the 3 Aug one. |

⛔ **R55 IS CLOSED.** It cannot be derived from either band. ⚖️ A7 — defer a price, never author one
that cannot be proved. **Do not re-open it and do not ask her about it again.**

🩸 **AND THE SECOND HALF OF HER ANSWER CHANGES THE RECORD'S SHAPE — SEE §7.**
> *"Ready-made sweet mung bean paste is uncommon in mainstream local supermarkets."*

---

## 0 · RECORD HEADER

```
id:        vietnam-banh-tet
name:      Bánh Tét
course:    side
cuisine:   southeast-asia
country:   Vietnam
servings:  1
```
**Schema control = the Snoek Curry record in `wk_southafrica.js`** (A3). `costPP` lives on the
**version**, never on the record (§31 / ⚖️ Law 56). `diet` is required on every version —
⛔ **never default to non-veg.** Exactly one `default: true`.

---

## 1 · ⛔ GREENFIELD CHECK — RUN BEFORE MERGE, NOT AFTER

```bash
node -e "global.window={};eval(require('fs').readFileSync('sections/wk_vietnam.js','utf8'));console.log(window.WK_VIETNAM.filter(r=>/tet|glutinous|sticky/i.test(r.id+r.name+r.ingredients)).map(r=>r.id))"
```
**Expected:** `vietnam-xoi-xeo` only. ⚠️ **`vietnam-xoi-xeo` is NOT a duplicate** — it is savoury
turmeric sticky rice served loose in a bowl. Bánh tét is a **wrapped, boiled, sliceable log**.
⚖️ *Same ingredients, different cultural dish → keep both.* If anything else returns, **STOP and report.**

---

## 2 · 🔬 THE LEAD ARGUMENT — **THE LOG IS COMPRESSED WHILE IT COOKS, AND THAT IS WHY IT SLICES**

⚖️ **This is the why-led opener. It must answer a question the cook actually has:**
*why does this slice into clean discs when sticky rice normally clumps and tears?*

**Two things happen at once, and neither alone is enough.**

**One — the starch has no set-and-separate mechanism.** Ordinary rice holds two starches: amylose,
which sets firm and keeps grains apart, and amylopectin, which goes soft and sticky. **Glutinous
rice is almost entirely amylopectin, with next to no amylose.** There is nothing in the grain that
wants to stay a separate grain. That is why it goes translucent and tacky rather than fluffy — and
why, left loose in a pot, it is a mass and not a slice.

**Two — the wrap gives it nowhere to go.** Bound tight in leaf and string, every grain swells
against its neighbour for hours instead of into open water. The grains do not merely stick; they
**press into each other and fuse into one body** with the filling held dead centre. **Take the
compression away and you have xôi — the same rice, the same time, and a spoon instead of a knife.**

⚖️ **THE TEST OF THIS RECORD IS THE TIGHTNESS OF THE WRAP, NOT THE LENGTH OF THE BOIL.**
A loose parcel boiled eight hours gives wet, collapsing rice. **The method must say so.**

⛔ **/tinza check: is this a Google card?** No. "Glutinous rice is sticky" is common knowledge.
**"The compression is the ingredient"** is not, and it is the thing that changes what the cook does.
🔴 **Run `node tinza-echo.js vietnam <batch>.js` before merge** — `vietnam-xoi-xeo` and
`vietnam-che-ba-mau` both already discuss glutinous rice. **Do not say the same thing twice.**

---

## 3 · 🌾 INGREDIENTS — DEFAULT VERSION

⚖️ **§6.1 — a side is 150 g.** These are per-person amounts, matching `vietnam-xoi-xeo`'s shape.
⚖️ **Ingredient standard:** name = what you BUY · one item per line · prep goes in the METHOD.

| amount | line | key | status |
|---|---|---|---|
| 90 g | glutinous rice | `glutinous rice` | ✅ **R63** — probed 10 Aug, exact |
| 30 g | mung beans | `mung beans` | ✅ **R90** — §0b, top of band |
| 25 g | pork belly | `pork belly` | ✅ **R120** — probed 10 Aug, exact |
| 5 g | shallots | `shallots` | ✅ **R60** |
| 2 g | black pepper | `black pepper` | ⚠️ **R760** — probed exact. ⛔ **not** `pepper` — §8f substring risk |
| — | salt | `salt` | ✅ **R30** — bare `salt`, as `vietnam-xoi-xeo` writes it |

🔴 **NO BANANA LEAF LINE. NOT ONE.** See §0a. It is in the method and nowhere else.

⚠️ **PRICE RESOLUTION IS A PRE-MERGE STEP.** Run `node pricecheck.js vietnam <batch>.js`.
**Every line must come back `exact`, not merely present.** ⚖️ §8f — a longer written name resolving
to a shorter, cheaper key reports nothing and no watcher fires.
🩸 **Landmines already checked for this record:** `glutinous rice` R63 is a real key — ⛔ do **not**
let it fall to `glutinous rice flour` → rice R27, which is a different product. `mushrooms` not
`mushroom` if any version adds them.

---

## 4 · 🔥 METHOD — DEFAULT

⚖️ **Why-led. Every step says what is happening, not only what to do.**

**1 · Soak, separately, overnight.** Glutinous rice in cold water, mung beans in cold water, both at
least 6 hours. The rice must be fully hydrated **before** it is wrapped — a dry core will still be
chalky after eight hours of boiling, because once the parcel is tight, water reaches the centre very
slowly. Drain both well and salt the rice.

**2 · Cook the beans down and mash them.** Steam or simmer the drained mung beans until they crush
between two fingers, then mash them with the sliced shallots, a good grind of black pepper and salt.
**You want a paste stiff enough to roll into a rope that holds its shape** — wet paste migrates
during the boil and the slices come out with the filling off-centre.
> 🔗 **§35 CROSS-LINK GOES HERE** — see §7.

**3 · Build the core.** Roll the bean paste into a rope, lay the pork belly strip down its length,
and close the paste around it so the meat is completely wrapped. The fat renders into the beans over
the long boil; that is the point of the pork, and it only works if it is enclosed.

**4 · Prepare the wrapper.** ⚖️ **If you have a banana tree, this is the moment it earns its keep.**
Pass each leaf over an open flame for about ten seconds a side — it turns from stiff and dull to
pliable and deep green and stops splitting when you fold it. Wipe both sides.
**No tree? Baking paper inside foil does the same job.** It gives you the tight cylinder and it will
not tear. What you lose is the faint green perfume the leaf leaves on the outer rice — worth knowing,
not worth abandoning the dish for.

**5 · Wrap, and wrap TIGHTLY.** Spread the rice in an even rectangle, lay the filled rope down the
centre, and roll it into a cylinder with the filling dead centre. Fold the ends in and bind the whole
thing with string at short intervals — **firm enough that the log does not give when you squeeze it.**
🩸 **This is the step the dish lives or dies on.** A loose parcel gives the rice room to swell into
water instead of into itself, and you get a wet, collapsing log that will not slice. ⚖️ **See §2.**

**6 · Boil long and keep it under.** Fully submerged, gentle boil, **6 to 8 hours**, topping up with
boiling water so it never drops below the surface. Turn the logs once or twice.
**Nothing about this is hurryable** — the compression means heat and water move through the log
slowly, and that slowness is exactly what fuses the grains.

**7 · Press, then cool completely.** Lift the logs out, rinse off the outside, and rest them under a
light weight until fully cold — **several hours, or overnight.** ⛔ **Do not slice warm.** Warm, the
starch has not set and the disc falls apart; cold, it cuts clean.

**8 · Slice with the string, not a knife.** Slide a length of the binding string under the log, cross
the ends over the top and pull. It cuts a perfect disc without dragging, which a knife will do
through rice this sticky.

---

## 5 · 🍽️ VERSION SET — BY FILLING

⛔ **Exactly one `default: true`.** ⚖️ **The budget fork LEADS** (A3, schema control).
⚖️ **`costPP` is DERIVED — `costcheck.js` scores it against the engine. ⛔ Do not author a guess.**

### 5a · **Bánh Tét Chay — Mung Bean Only** *(Budget · Vegan)*
Pork removed, everything else stands. ⚖️ **`diet: ["vegan"]`.**
🩸 **§37 WARNING — READ THIS BEFORE YOU WRITE THE PROSE.** This will be the **cheapest** version.
⛔ **Do NOT write an unanchored "cheaper" / "a saving" / "for a fraction" claim in it.** A cost claim
needs a target it can point at. *(Eleven Thailand records are currently orange for exactly this —
`thailand-pu-phad-pong-karee`'s cheapest fork calls itself "the expensive one." Do not add a twelfth.)*
If a comparison is made, it names the version it is comparing to.

### 5b · **Bánh Tét Nhân Đậu Thịt — Mung Bean & Pork** — `default: true`
As written above. The Tết version, and the one people mean.
⚖️ `diet: ["omnivore"]`.

### 5c · **Bánh Tét Chuối — Banana** *(the Mekong Delta one)*
Bean and pork out, ripe banana in; the rice takes on a deep pink-red from the fruit over the long
boil. Sweet, sliced the same way, eaten as a snack rather than with a meal. ⚖️ `diet: ["vegan"]`.
⚠️ **PROBE `bananas` / `banana` BEFORE AUTHORING** — ⛔ and note the §0a warning: the key `banana`
R32/kg is the **fruit**, which is correct **here** and wrong for the leaf. Same word, two products.
🔵 **If it does not resolve exactly, drop 5c and ship two versions.** ⚖️ A7 — defer, never invent.

---

## 6 · 🗣️ §33 GLOSSARY — EXPLAINED, NEVER TRANSLATED AWAY

⚖️ **§33 / §33.8 — the word stays; the explanation sits beside it. No near-miss translations.**
⛔ **§39 — no South African shop or place names anywhere in the prose.**

| word | how it is handled |
|---|---|
| **Bánh tét** | the name. Not "Vietnamese rice log." |
| **Tết** | the Lunar New Year. Explained once, in `trivia`, not glossed every time. |
| **Chay** | the Vietnamese word for the meat-free version — explain, do not replace with "vegan." |
| **Lá chuối** | banana leaf. Named in the method. ⛔ Never an ingredient line. |

⚖️ **Bánh tét vs bánh chưng is genuine trivia and belongs in `trivia`:** same festival, same
ingredients, **different shape and different half of the country** — the cylinder is southern, the
square is northern. ⛔ Do not present one as a variant of the other.

---

## 7 · 🆕 §35 — THE MUNG BEAN PASTE CARD

> **Tina, 10 Aug 2026:** *"Ready-made sweet mung bean paste is uncommon in mainstream local supermarkets."*

⚖️ **THIS IS §35 EXACTLY — the third answer §29 could not give.**
- §29.1 route one — a bought product fills the slot. ❌ Not in ordinary retail.
- §29.1 route two — nothing on a shelf, fail loud, no cost. ❌ Wrong, because it is easy to make.
- **§35 — hard to buy here, easy to make at home → a real `SPICE_DB` card, plus a clickable link
  from every recipe that uses it.** ✅

🩸 **AND THE NEAR-MISS IS ALREADY PRE-REFUSED IN THE FILE.** `prices.js:674`:
> ⛔ *"Never aliased to `red bean paste` R120/kg — that is the finished sweetened paste."*

Tina's R50–R90 per 400–500 g jar figure is the **red bean paste** band that produced that key. It is
a **comparator, not a mung bean price.** ⚖️ §33.8 — red bean paste is sweet azuki for desserts.
**Two products sharing three words. Do not bridge them.**

### What this means for the record
- **Bánh tét keys `mung beans` R90 — the raw bean, which ordinary retail does stock.** The paste is
  made in **method step 2**. ✅ No new key, no A7 defer, no blocked cost.
- **The Spice card is a SEPARATE deliverable and it is TINA'S TO AUTHOR** — sugar ratio, cooking-down
  and texture judgement are her field, not a thing to be inferred. ⏳ **Scoped, not written.**
- ⛔ **DO NOT BLOCK BÁNH TÉT ON THE SPICE CARD.** The record ships now and the cross-link is added
  when the card exists. ⚖️ **A6 — a dead `crossLinks` target is a bug and `merge.js` asserts it.**
  **Do not point at a card that is not there yet.**

---

## 8 · 🔗 CROSSLINKS — THREE, AND ALL THREE MUST RESOLVE TODAY

⚖️ **A6.** `merge.js` asserts every target before writing.

```
{name:'Xôi Xéo',   target:'vietnam-xoi-xeo',  emoji:'🌾'}   ← the sibling: same rice, same bean, loose
{name:'Chè Chuối', target:'vietnam-che-chuoi', emoji:'🍌'}   ← the banana thread, for 5c
{name:'Cơm Tấm',   target:'vietnam-com-tam',   emoji:'🍚'}   ← the pork thread
```
✅ **All three verified present in `wk_vietnam.js` on 10 Aug.**
⛔ **Do NOT link `vietnam-cha-lua` — it is NOT BANKED YET.** Add it later, from chả lụa's side.

---

## 9 · ✅ PRE-MERGE CHECKLIST

```bash
node --check <batch>.js
node tinza-all.js vietnam <batch>.js     # /law /wow /wk /tinza — all six, one command  ⚖️ Law 62
node pricecheck.js vietnam <batch>.js    # EVERY line exact. No REVIEW. No ABSENT.
node claimcheck.js vietnam <batch>.js    # 🔴 0 AND 🟠 0 — see the §37 warning in 5a
node unitcheck.js  vietnam <batch>.js
node tinza-echo.js vietnam <batch>.js    # has this already been said?
node merge.js      vietnam <batch>.js    # ⚠️ requires MF181 Part A done first
node costcheck.js  vietnam               # after merge — costPP scored against the engine
rm <batch>.js                            # a batch file is a SPENT INPUT
```

**Then:** `present_files` the section file **and** the progress file. ⚖️ **ONE RECORD = ONE HANDBACK.**
⛔ **Do not start record 3 in the same handback.**

**HANDBACK DESTINATIONS**

| file | path |
|---|---|
| `wk_vietnam.js` | `sections/` |
| `ASIA_PROGRESS.md` | `reference/` |
| `MF178_CHA_LUA_AUTHORING.md` *(line 93 correction, §0a)* | `reference/` |

---

## 10 · ⛔ NOT PART OF THIS RECORD

- **The mung bean paste Spice card** — §7. Tina's to author. Scoped, not written.
- **A `banana leaves` price key** — ⛔ ruled out 30 Jul. **Do not create one.** §0a.
- **Thailand's 11 orange claims** — different country, different brief.
- **`gỏi hoa chuối` / `gỏi đu đủ`** — still under consideration. Not ruled in.
