# MF157 — SUB-R1 INGREDIENT LINES RENDER **R0**

> **Raised:** 4 Aug 2026, out of the chilli count-key work.
> **Status:** OPEN. ⚖️ **This is a DISPLAY fix. It is never a price fix.**

---

## 1 · STOP-CONDITION — READ FIRST, AND IT MAY END THE TASK

Open a card with a cheap ingredient line — `zulu-chakalaka` "1 chilli (diced)" is the shortest
route — and look at what the line renders.
**If it shows anything other than a bare `R0`, THIS IS DONE. SAY SO AND STOP.**

---

## 2 · THE FINDING

`cape-malay-tomato-bredie` carries **`1 small chilli (optional)`**. After the 4 Aug repoint it
prices as a bird's eye: 1 × 3g × R100/kg = **R0.30**. `costRecipe` rounds to the rand, so the
card shows:

```
1 small chilli (optional) .......... R0
```

⚖️ **THE ARITHMETIC IS RIGHT AND THE DISPLAY IS WRONG.** R0.30 is the correct cost of that
chilli. **R0 is not what it costs.** A real ingredient reading zero looks like a defect to
anyone holding the card — and it looks like exactly the defect this repo has spent weeks
hunting, a key that failed to resolve.

🩸 **THAT IS THE ACTUAL HARM: IT IS INDISTINGUISHABLE FROM A BUG.** An unpriced line and a
correctly-priced 30c line render the same three characters. The one thing the ladder
(missing < duplicate < WRONG) depends on is that **a missing price announces itself** — and this
display makes a *present* price wear the costume of a missing one.

## 3 · IT IS NOT ONE LINE

Anything under R0.50 renders R0. The chilli work alone produced several, and the pattern is
general — small quantities of cheap-per-kg ingredients:

| card | line | true cost | renders |
|---|---|---|---|
| cape-malay-tomato-bredie | `1 small chilli (optional)` | R0.30 | **R0** |
| zulu-isigwaqane · sotho-morogo · xhosa-imifino | `1 small chilli (optional)` | R0.30 | **R0** |
| zulu-chakalaka | `1 chilli (diced)` | — | check |
| many | `5g chilli`, `2g chilli`, small spice lines | < R0.50 | **R0** |

⚠️ **Do not scope this to chilli.** Chilli is where it was noticed. Salt, spices and small
aromatics will land in the same place.

## 4 · THE OPTIONS — ⚖️ TINA'S CALL, THEY LOOK DIFFERENT ON A PHONE

1. **CENTS BELOW R1** — `R0.30`. Truthful and exact. ⚠️ Introduces a second number format into a
   column that is currently whole rands, and `DM Mono` is the numbers font — check it lines up.
2. **A FLOOR** — anything under R1 renders `R1`. One format, never zero. ⚠️ It **overstates**,
   and this repo's costing direction is "rather more than less" (§31), so a floor is at least
   pointing the right way. ⛔ But it makes 30c and 99c identical.
3. **A DASH or `<R1`** — signals "too small to matter" without asserting a false number.
   ⚠️ Closest to honest, but it is a third thing to explain on a card read by a child and a
   grandma.

📌 **RECOMMENDATION FOR HER TO ACCEPT OR REJECT: option 3 (`<R1`), then option 1.** A dash says
what is true — *this costs almost nothing* — without printing a zero that reads as broken.

## 5 · THE RED LINES

- ⛔ **NEVER change a PRICE to make the display look better.** ⚖️ §30.1 and §3m — prices are
  DERIVED from a source and a weight. If R0 looks wrong, the renderer is wrong.
  🩸 The tempting wrong fix is to bump `birds eye chillies` R100 until the line shows R1. That
  would be authoring a number to flatter a UI, and it would be invisible in the ledger.
- ⛔ **DO NOT fix this by re-inflating `AVG_WEIGHT_G`.** The 3g bird's-eye weight is Tina's own
  4 Aug figure and is ruled correct (see the Vietnam cold start, Law 20 entry).
- ⛔ **DO NOT special-case chilli.** It is a rounding rule, not an ingredient rule.
- ⚠️ **The TOTAL must not change.** Whatever the line shows, the card total stays the sum of the
  true costs — never the sum of the rounded ones. ⚖️ Rounding for display, never for arithmetic.

## 6 · THE PROOF

Open `cape-malay-tomato-bredie` on live, hard-reload (Law 27), and read the chilli line: it
shows the chosen format, not `R0`. Then confirm the card TOTAL is unchanged from before the fix.
⚖️ **Law 2 — Tina's finger, on her own device.**
