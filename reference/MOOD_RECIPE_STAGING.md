# MOOD RECIPE STAGING — records waiting on a decision

**Raised:** 20 Jul 2026 · MF125
**What this is:** records that cannot be slotted or tagged until a specific call is made.
Not a wish list. Every line names the **one question** blocking it and who answers it.

⚖️ **Law 45 — unknown is not no.** A record here renders normally in its own room. It is
excluded from every mood shelf until its slot resolves. That exclusion is structural:
its slot is `unknown`, and `unknown` is not in `MOOD_EAT_SLOTS`.

⚖️ **Law 42 — the ratchet.** Census 18 ③ counts these. The number goes to zero and stays there.

---

## Unresolved slot — `slotSource:'unresolved'` (2)

Both are the same dish under two names: a fried yeast-dough bun, **sweet or savoury
depending on what goes inside it.** This is a **versions** question, not a slot question.
Answer the versions call and the slot follows.

| record | id | the question | answered by |
|---|---|---|---|
| Vetkoek | `bk-vetkoek` | Its `versions[]` already carry the split: *Sweet (Jam & Syrup)* = TREAT, *Curried Mince (Maalvleis)* = SUPPER, *Cheese* = TREAT. Does the record take the default version's slot (TREAT), or does a multi-slot record need a new shape? | Tina |
| Amagwinya (Fat Cakes) | `bk-amagwinya` | Same dish, same question. Whatever vetkoek gets, this gets — they must not diverge. | Tina |

**⚠️ Note on amagwinya — a decision I extended, flag it if it is wrong.**
The MF125 ruling named **vetkoek only** as unresolved. I applied the same call to
amagwinya because it is *literally the same dish* — "amagwinya" and "vetkoek" are two
languages for one fat cake, and vetkoek's own `goesWith` lists Amagwinya first. Slotting
one TREAT and the other unresolved would be incoherent. If you want amagwinya forced to
TREAT, it is a one-line data edit in `sections/meals.js`.

**Not unresolved — ruled TREAT (do not re-litigate):**
koeksisters · Cape Malay koesisters · doughnuts · pampoenkoekies · gulab jamun · jalebi ·
malasadas. Unambiguous syrup sweets. *"Deep-fried" is a cooking method, not a slot* — the
old `deepfried` category grouped by method and told us nothing about the course.

---

## Cross-path slot disagreements — census 18 ① (4)

Surfaced by the new check, **outside MF125's scope** (all four are `events`-side or
food-type-room derivations, not the braai/bakes adapters). Listed so they are not lost.

| recipe | disagreement | likely wrong |
|---|---|---|
| Advocaat (Dutch Egg Liqueur) | `events:SUPPER` vs `beverages:DRINK` | events — a liqueur is not supper |
| Bread & Butter Pudding | `events:SUPPER` vs `braai:TREAT` | events — braai's is now authored TREAT |
| Biltong & Blue Cheese Salad | `events:SUPPER` vs `braai:SIDE` | events — braai's is authored SIDE |
| Braai Sweet Potato | `braai:SIDE` vs `tiny:BABYFOOD` | neither, probably — `tiny` is a food-type room |

The fix for the first three is the same shape as MF125: **author the slot into the events
record data.** Do not add a rule to the events adapter.
