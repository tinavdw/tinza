# MF175 — MAKE THE STOCK LINES CLICKABLE, AND CLICKABLE BOTH WAYS

> **Tina, 6 Aug 2026:** *"we have stock recipes, 4 different types, in spice, make clickable links so one can go there and back."*

⚖️ **THE RULING IS "AND BACK".** A one-way link is half the job — someone who opens Beef Stock from a curry must be able to return to the curry, not be dumped at the top of the Spice Room. ⚖️ **Law 24 · §24.9 — top-Back goes exactly two levels up, bottom-Back goes one.** Whatever transport is used here has to obey that, not invent a third rule.

---

## 1 · STOP-CONDITION — READ FIRST, AND THIS STEP MAY END THE TASK

```
grep -n 'id: "beef-stock"' sections/spice.js
grep -rn 'spice-beef-stock\|"target":"beef-stock"' sections/wk_*.js sections/meals.js
```

⛔ **If a crossLink from any wk_ record already resolves to a `spice.js` entry and returns correctly — SAY SO AND STOP.** The transport already exists and this brief is only the content pass.

---

## 2 · WHAT EXISTS TODAY — MEASURED 6 Aug 2026

**`sections/spice.js` carries NINE relevant entries, not four.** Tina said four; there are four stocks and five bone broths, and the brief should not silently drop the broths.

| id | name |
|---|---|
| `beef-stock` | Beef Stock |
| `chicken-stock` | Chicken Stock |
| `vegetable-stock` | Vegetable Stock |
| `fish-stock` | Fish Stock |
| `beef-bone-broth` | Beef Bone Broth |
| `chicken-bone-broth` | Chicken Bone Broth |
| `fish-bone-broth` | Fish Bone Broth |
| `lamb-bone-broth` | Lamb Bone Broth |
| `pork-bone-broth` | Pork Bone Broth |

**How many cards would link:** `stock` appears **483** times bare, plus `chicken stock` 38 · `beef stock` 30 · `vegetable stock` 18 · `fish stock` 18, across **eleven** `wk_*.js` files plus `meals.js`.

⛔ **DO NOT LINK ALL 587 BY HAND.** That is a generated pass or it is nothing.

---

## 3 · THE RED LINES

- ⛔ **`crossLinks` currently targets records in the SAME pool.** Every existing `target` in `wk_*.js` resolves inside World Kitchen. **Whether it can address a `spice.js` id AT ALL is the first thing to establish** — if it cannot, this is a transport job before it is a content job, and the transport is the brief.
- ⛔ **No UI work in a content session, and no content work in a transport session.** Decide which this is before starting.
- ⛔ **Do not touch the portion collision, `wkPlanClearAll()`, or `japan-nukazuke`.**
- ⚠️ **`spice.js` is a PILOT FILE** — its own header says *"6 entries, structured + scalable. Roll the rest from the seed list."* Confirm the nine above are actually loaded by `index.html` before linking anything to them. **A link to an unloaded record is a dead end that looks like a feature.**

---

## 4 · THE PROOF

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

1. Open a curry that writes `stock`. The stock line is tappable.
2. Tap it. **Beef Stock opens, in the Spice Room, and it is the real record.**
3. Tap Back **once**. **She is returned to the curry she came from** — not to the Spice Room index, and not to the World Kitchen grid.
4. Her Plan survives the round trip. Servings and people counts survive. ⚖️ **Law 20.**
5. `node tinza-doctor.js` — RED count has **not** grown. ⚖️ Law 51.
6. 🚨 **HARD RELOAD** after the deploy. ⚖️ Law 27.
7. ⚖️ **Law 42 — add a doctor check**: every `crossLink` target resolves to a record that is actually loaded. That check would have caught this class of bug before it shipped, and it does not exist today.

---

## 5 · ⚖️ WHY THIS IS WORTH DOING, IN ONE LINE

`beef stock` was keyed at **R50** — six times the generic `stock` key — while its own comment read *"mostly water + cube"*. Nobody noticed for weeks because the number rendered and looked fine. **A stock line that links to a real recipe is a stock line somebody actually reads**, and a read line is a line that gets checked.
