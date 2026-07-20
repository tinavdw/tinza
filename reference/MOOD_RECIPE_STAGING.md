# MOOD RECIPE STAGING — records waiting on a decision

**Raised:** 20 Jul 2026 · MF125
**What this is:** records that cannot be slotted or tagged until a specific call is made.
Not a wish list. Every line names the **one question** blocking it and who answers it.

⚖️ **Law 45 — unknown is not no.** A record here renders normally in its own room. It is
excluded from every mood shelf until its slot resolves. That exclusion is structural:
its slot is `unknown`, and `unknown` is not in `MOOD_EAT_SLOTS`.

⚖️ **Law 42 — the ratchet.** Census 18 ③ counts these. The number goes to zero and stays there.

---

## 1 · Unresolved slot — `slotSource:'unresolved'` (2)

**The blocker is a VERSIONS call, not a slot call.** Ruled 20 Jul. These are not hard to
classify — they are genuinely two dishes wearing one name, and the record shape cannot say
so yet:

> **with mince → SUPPER. With jam or syrup → TREAT.**

Both stay unresolved and off every mood shelf until that is ruled.

| record | id | ingredients | status |
|---|---|---|---|
| Vetkoek | `bk-vetkoek` | 9 | unresolved — `versions[]` already carry the split: *Sweet (Jam & Syrup)*, *Curried Mince (Maalvleis)*, *Cheese* |
| Amagwinya (Fat Cakes) | `bk-amagwinya` | — | unresolved — same dish, one ruling |

**Keep both records.** Same dish, different cultural names — that is the standing duplicate
rule (CLAUDE.md §7), not a duplication to clean up.

**Not unresolved — ruled TREAT (do not re-litigate):**
koeksisters · Cape Malay koesisters · doughnuts · pampoenkoekies · gulab jamun · jalebi ·
malasadas. Unambiguous syrup sweets. *"Deep-fried" is a cooking method, not a slot* — the
old `deepfried` category grouped by method and told us nothing about the course.

---

## 2 · Chakalaka — THREE records, and a gap in census 18 ①

Asked 20 Jul: is chakalaka one record resolving two ways, or two records? **Measured — it
is three, under two different ids:**

| id | section | slot | ingredients | method |
|---|---|---|---|---|
| `zulu-chakalaka` | world | SIDE | **17** | 5 |
| `chakalaka` | braai | SIDE *(authored 20 Jul)* | 10 | 3 |
| `chakalaka` | spice | CONDIMENT | **0** | **0** |

**Answering the question directly: assertion 1 did NOT have a gap on the pair you
suspected.** `braai` and `spice` share the bare id `chakalaka`, and until today both
resolved CONDIMENT — they *agreed*, so there was correctly nothing to flag. Authoring
braai → SIDE has now made them disagree, and assertion 1 flags it immediately.

**But there IS a real gap, and it is this:** `world`'s record is the same dish under a
*different id* (`zulu-chakalaka`), so assertion 1 is blind to it by construction — it keys
on bare id to find multi-door recipes, and a same-dish-different-id duplicate has no shared
key to match on. A name-keyed check would catch it, but names are unreliable (58 name-groups
cover 128 records — see `tinzaStore.favKey` notes). **Unsolved. Needs a ruling on what the
"same dish" key actually is before a check can be written.**

**Also flagged, standing duplicate rule — keep the most comprehensive:** `spice:chakalaka`
carries **0 ingredients and 0 method**. It is a husk. `world:zulu-chakalaka` (17 ingredients)
is the most comprehensive. Deleting records was out of MF125's scope, so nothing was removed.

---

## 3 · Cross-path slot disagreements — census 18 ① (5)

Surfaced by the new check, **outside MF125's scope** (all are `events`-side, food-type-room,
or duplicate-record issues, not the braai/bakes adapters). Listed so they are not lost.

| recipe | disagreement | likely wrong |
|---|---|---|
| Advocaat (Dutch Egg Liqueur) | `events:SUPPER` vs `beverages:DRINK` | events — **ruled 20 Jul: Advocaat is DRINK** |
| Bread & Butter Pudding | `events:SUPPER` vs `braai:TREAT` | events — braai's is now authored TREAT |
| Biltong & Blue Cheese Salad | `events:SUPPER` vs `braai:SIDE` | events — braai's is authored SIDE |
| Chakalaka | `braai:SIDE` vs `spice:CONDIMENT` | spice — an empty stub record, see §2 |
| Braai Sweet Potato | `braai:SIDE` vs `tiny:BABYFOOD` | neither, probably — `tiny` is a food-type room |

The fix for these is the same shape as MF125: **author the slot into the record data.**
Do not add a rule to an adapter.

---

## 3b · THE 12 SHELVES — measured 20 Jul, pre-MF124. MEASUREMENT ONLY, nothing changed.

**1 of 12 shelves runs on real tags. 11 are still keyword guesses.** The food-call work
ahead is **11 shelves**, not 1.

| shelf | cards | source | tags | SUPPER | SIDE | TREAT | STARTER | LUNCH | BREAKFAST |
|---|---|---|---|---|---|---|---|---|---|
| healthy | 782 | keyword | 0 | 255 | 172 | 230 | 70 | 54 | 1 |
| fussy | 428 | keyword | 0 | 294 | 32 | 22 | 30 | 41 | 9 |
| cold | 360 | keyword | 1 | 266 | 24 | 15 | 23 | 24 | 8 |
| exhausted | 312 | keyword | 0 | 218 | · | · | · | 56 | 38 |
| sweet | 308 | keyword | 0 | · | · | 308 | · | · | · |
| sick | 252 | keyword | 0 | 167 | 20 | 15 | 20 | 26 | 4 |
| quick | 237 | keyword | 0 | 167 | · | · | · | 37 | 33 |
| adventurous | 202 | keyword | 0 | 138 | 27 | 11 | 26 | · | · |
| lazy | 161 | keyword | 1 | 141 | · | · | · | 20 | · |
| impress | 159 | keyword | 0 | 159 | · | · | · | · | · |
| pickmeup | 158 | keyword | 1 | 139 | · | · | · | 6 | 13 |
| **celebrating** | **127** | **REAL TAGS** | **127** | 84 | 36 | 6 | 1 | · | · |

The 3 stray tags on cold / lazy / pickmeup are all **one record** — beefstroganoff, the
MF123 seed. 8 shelves have zero tags. 127 tag records exist in total.

### What the keyword guesses are actually serving — spot-checked, not assumed

🩸 **fussy — "Fussy little ones · Kid friendly · No drama" is serving ALCOHOL.**
`Amarula Cheesecake` and `Gin & Tonic Cheesecake` both match the predicate's `cheese`
keyword. Two alcoholic desserts on the children's shelf. **This is the worst thing found
in the sweep and it should not wait for that shelf's turn in the queue.**

- **healthy — "Nutritious · Balanced"**: 230 of 782 cards are TREAT. The predicate counts
  any vegetarian record as healthy, so cake qualifies.
- **sick — "Light · Nourishing · Easy to digest"**: `Crunchy Ginger Biscuits` and
  `Soetkoekies` — both match the `ginger`/text predicate. Biscuits for a sick stomach.
- **impress**: `Fish & Chips` is still on it — **the exact example RULINGS §3 names as the
  keyword-guess failure.** Confirmed live, not historical.
- **adventurous**: 11 TREATs, mostly European biscuits (Speculoos, Basler Läckerli).

None of this was touched. Logged for whoever takes each shelf's content pass.

---

## 4 · Rare slots barely surface — MF127, logged, deliberately NOT fixed

`balancedOrder({proportionalBy:'slot'})` deals each slot its **share of the pool**. A slot
with a tiny share therefore earns a card very late. Ruled 20 Jul: **log it, leave it.**

Measured on celebrating (127 cards) after MF127:

| slot | cards | share | positions |
|---|---|---|---|
| SIDE | 36 | 28% | 2, 5, 10, 13, 17, 20, 23, 26, 31, 34 … |
| TREAT | 6 | 4.7% | 8, 29, 55, 76, 96, 117 |
| STARTER | **1** | 0.8% | **47** |

⚠️ **The brief predicted STARTER would "almost never appear." Measured, it lands at
position 47** — about 15 presses of "3 more ideas". Deep, but not never. Recording the
measured number rather than the assumption, because the two suggest different fixes.

**Why it is not fixed:** the only fix is a floor ("always show one STARTER in the first
N"), and *a floor is a hardcoded ratio wearing a hat* — the exact thing MF127's spec
forbade. It would be meaningless on sweet and backwards on a starter-heavy shelf. If this
ever matters, the honest fix is more STARTER content, not a thumb on the scale.

---

## 5 · Queued ruling — slot as the eighth reserved field

Raised 20 Jul, **not acted on.** `slot` is now authored data, but it is not one of the
reserved fields and `normalizeRecipe()` (core.js — THE DOOR, ruled 15 Jul) has no slot
handling. **An authored slot therefore bypasses the single recipe door.** Today `slot()`
in index.js is the only thing that reads it, so nothing is broken — but the contract is
now inconsistent, and the next reader of `r.slot` will not get a door-normalised value.

Needs a ruling: make `slot` the eighth reserved field, with `normalizeRecipe()` owning its
default and its uppercase/validity normalisation, the way it owns `diet`, `versions` and
`mood`. ⚖️ Law 6.
