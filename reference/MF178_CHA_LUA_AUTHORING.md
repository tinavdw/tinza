# 🇻🇳 MF178 — CHẢ LỤA · AUTHORING BRIEF
**Vietnam B6 · record 1 of the batch · written 7 Aug 2026**

> ⚖️ **This is authoring, not implementation.** Code writes it into `wk_vietnam.js` in the lane's
> existing shape. ⛔ Do not invent a schema from this file — copy the shape of `vietnam-goi-cuon`
> (the nearest starter) and drop this content in.
> 📌 Write the batch source to `vietnam-batch6.js` per §11. ⛔ **Do not repeat B2** — the batch
> source is written AS the record is written, never after the fact.

---

## 0 · RECORD HEADER

```
id:       vietnam-cha-lua
course:   starter
servings: 8
costPP:   0        ⚖️ §30.1 — DERIVED by costcheck.js. Write 0, run the tool, set the engine's number.
```

**Course effect:** starter 5 → 6. Mains stay frozen at 12.

---

## 1 · ⛔ GREENFIELD CHECK — RUN BEFORE MERGE, NOT AFTER

⚖️ **Grep the MECHANISM, not the noun.** The 6 Aug tofu near-miss was invisible to a search for
*"tofu"* because the collision was never in the dish name.

Grep the corpus AND `vietnam-batch6.js` itself for:

```
emulsion · emulsif · myosin · protein extraction · salt-soluble
bounce · bouncy · springy · snap back · elastic
cold paste · under 12 · ice as a brake
```

⚠️ **CHECK THE BATCH, NOT ONLY THE CORPUS.** Two of the three B5 re-leads collided with B5 itself.

**Known near neighbours, checked and cleared:**
- `vietnam-dau-hu-sot-ca` owns **void space in a protein** — this record must not go near voids.
- `wk_china.js` owns **the entire tofu-coagulation register** — nigari, acid setting, the curd.
  ⛔ Chả lụa sets by *dissolved myosin re-forming*, not by a coagulant. Different mechanism. Say so
  in the card without ever using the word "curd".
- `vietnam-bo-luc-lac` owns **shaking vs dragging / contact binaries** — the blending here is not
  a contact argument.
- Collagen → gelatin is spent across ~60 records. ⛔ **Do not reach for it.** Myosin is not collagen
  and the card must not blur them.

---

## 2 · 🔬 THE LEAD ARGUMENT — A MEAT PASTE IS A COLD EMULSION

*(This is the register being burned. It is new to the Asia lane.)*

This is not mince, and calling it a sausage will mislead you. Mince is meat cut small — the fibres
are still fibres, just shorter. Chả lụa is meat taken apart and put back together as **one
substance**, and the difference is visible the moment you cut it: a slice bends and snaps back
instead of crumbling.

What does the work is **myosin**, the main protein in muscle fibre. It is salt-soluble — which
means salt plus mechanical force pulls it out of the fibre and dissolves it into the meat's own
water. Dissolved, it coats every particle of fat in the bowl and holds it in suspension. Steam it
and that coating sets into a single continuous elastic body with the fat locked evenly through it.
No fibres left to crumble along.

**The whole thing hangs on one number: about 12 °C.** Above that the fat softens and slips out of
the protein coat — and once it is out, it does not go back in. You get a loaf that is greasy on
the tongue and grainy under the knife, and there is no fixing it after the fact.

⭐ **So the ice in the ingredient list is not there for volume. It is a brake.** It absorbs the heat
the blender motor is dumping into the meat. Freeze the cubed pork for 30 minutes first, chill the
bowl, work in short bursts, and put your hand on the outside of the bowl three times while you go.
If it is not cold to the touch, you stop and wait — the recipe is not in a hurry and the fat is
not forgiving.

---

## 3 · 🥩 INGREDIENTS — DEFAULT VERSION (serves 8)

⚖️ §7 ingredient standard: no prep welded into the name, no "or", no counts on a priced line.

| amount | ingredient | price key it must resolve to |
|---|---|---|
| 800 g | pork shoulder | `pork shoulder` |
| 150 g | pork fat | `pork fat` ⚖️ *"lard is pork fat" — ruled 6 Aug, already keyed* |
| 100 g | ice | *water — no key, no cost* |
| 45 ml | fish sauce | `fish sauce` |
| 15 g | sugar | `sugar` |
| 8 g | salt | `salt` |
| 5 g | baking powder | `baking powder` |
| 3 g | white pepper | `white pepper` ⚠️ **not** `pepper` — §8f substring risk, verify it resolves |
| 2 | banana leaves | `banana leaves` ⚠️ Tina says this was priced already — `--ask` confirms, do not re-ask her |

⚠️ **PRICE RESOLUTION IS A PRE-MERGE STEP.** Run `pricecheck.js` on the batch file. Every line
must come back **exact**, not merely present. §8f: a longer written name resolving to a shorter
cheaper key never reports ABSENT and no watcher fires.

---

## 4 · 🔥 METHOD — DEFAULT (Lá Chuối)

**1 · Get everything cold.** Cube the pork shoulder and the pork fat into roughly 2 cm pieces,
spread them on a tray in a single layer, and put the tray in the freezer for 30 minutes. You want
them firm at the edges and still yielding in the middle — not frozen solid, which will damage the
blade. Put the blender bowl in the fridge at the same time.

**2 · Crush the ice.** It must be small enough to break down quickly. Big shards sit there while
the motor runs and the meat warms up around them, which is the opposite of what you want.

**3 · Blend in bursts.** Pork, fat, salt, sugar, fish sauce, white pepper and baking powder into
the cold bowl. Run the machine in bursts of about 10 seconds, adding the crushed ice a handful at
a time between them. **Stop three times and put your hand flat on the outside of the bowl.** Cold —
carry on. Cool but not cold — put the whole bowl in the freezer for 10 minutes and come back to it.
This is the step that decides whether the record works.

**4 · Know when to stop.** The paste is ready when it turns pale and slightly glossy, feels tacky
rather than wet, and pulls away from the sides of the bowl in one mass instead of several. Past
that point you are only adding heat.

**5 · Soften the leaves.** Pass each banana leaf over an open flame for about 10 seconds a side.
It goes from stiff and dull to pliable and deep green, and it stops splitting when you fold it.
Wipe both sides.

**6 · Wrap tight.** Wet your hands, shape the paste into a log about 20 cm long, and roll it in the
leaf. Tight is the point — any air trapped against the surface leaves a hollow. Fold the ends over
and tie firmly with string in three or four places.

**7 · Steam 45 minutes** over a rolling boil. Then **cool it completely** — on the counter, then at
least two hours in the fridge. ⭐ Warm, it tears when you cut it. Properly cold, it slices clean and
thin, which is how it is meant to be eaten.

**8 · Serve** sliced thin, at room temperature, with rice and pickled vegetables, or in a bánh mì.

---

## 5 · 🍽️ VERSION SET — BY METHOD

⚖️ **§37 — Budget is a claim, not a category.** ⛔ **No version here carries a Budget label.** None
comes in under the default, and §37.1 says the comparator is the `default: true` version. Run
`claimcheck.js` and read its 🔴 block; do not hand-roll the test.

⭐ **§ version sets must vary the DISH, not the animal.** All three are pork. What changes is the
vessel and the finish.

### 5a · **Lá Chuối** — `default: true`
As written above. The banana leaf is both the mould and a faint perfume, and it is what makes the
cylinder look like the thing you buy in Vietnam.

### 5b · **Khuôn** — steamed in a tin
Swap the 2 banana leaves for a **900 g loaf tin lined with baking paper**. Press the paste in
firmly, tap the tin down hard on the counter twice to knock out air pockets, cover tightly with
foil, and steam **55 minutes** — a tin conducts heat differently from a leaf parcel and the extra
10 minutes is not optional.

⭐ **This is the fork for someone making it the first time.** No leaf to source, no tying to learn.
The paste is the hard part and the tin removes everything that is not the paste.

### 5c · **Chả Chiên** — set, then fried
Make and steam exactly as the default, chill completely, then slice into 1 cm slabs and pan-fry in
**30 ml vegetable oil** over medium-high heat until each side is blistered and deep gold.

⚖️ **A different thing on the table, not a cheaper one.** The outside goes firm and slightly
chewy while the middle stays springy, so the bounce you built is easier to notice, not harder.

---

## 6 · 🗣️ §33 GLOSSARY — EXPLAINED, NEVER TRANSLATED AWAY

⚖️ Gloss in a **dash or a bracket**, never a comma. §33.8: where there is no English equivalent,
give an explanation, not a near-miss translation.

- **Chả lụa** — the pale pink steamed pork roll sold by weight in every Vietnamese market and
  sliced thin into rice plates and bánh mì. ⛔ **Do not render it "Vietnamese ham" or "pork
  sausage".** It is neither cured like a ham nor cased like a sausage, and both words send the
  cook to the wrong texture.
- **Lá chuối** — banana leaf.
- **Khuôn** — a mould or tin.
- **Chả chiên** — the same roll, sliced and fried.
- **Nước mắm** — fish sauce, the salted-anchovy liquid that does the seasoning work salt alone
  cannot. Already glossed elsewhere in the lane; keep the wording consistent with `vietnam-goi-cuon`.

---

## 7 · ✅ PRE-MERGE CHECKLIST

1. `node --check vietnam-batch6.js` ⚠️ *proves it parses and nothing else.* ⚖️ Law 1
2. **Greenfield greps from §1 above** — corpus **and** batch
3. `node pricecheck.js` — every line **exact**, zero wrong-product, zero absent
4. `node tinza-all.js` on the batch — all six standards, expect 0 red 0 drift
5. `node tinza-echo.js` — 0 red echo, 0 amber, 0 mascot, 0 locale, 0 gloss, 0 opening-formula
6. `node claimcheck.js` — ⛔ **no Budget label may appear on any of the three versions**
7. `node merge.js vietnam vietnam-batch6.js` → **25 + 1 = 26**
8. `node costcheck.js vietnam` → derive the three costPP, **write them back** ⚖️ §30.1
9. Hand Tina **the lane file AND the batch source** ⚖️ §11
10. Doctor RED count has not grown ⚖️ Law 51

---

## 8 · ⛔ STILL BLOCKED, NOT PART OF THIS RECORD

- **Bánh tét** — blocked on `glutinous rice`. Band R48–R109, and §3m decides it before §3l does:
  if R48 was ordinary retail and R109 was a specialty grocer, the key is **R48**, not R109.
  🔵 One question to Tina, unanswered as of this writing.
- **Gỏi hoa chuối** — 🔵 proposed, not yet ruled in. ⛔ §6: do not assume a slate.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**
