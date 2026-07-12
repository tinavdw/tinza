# TINZA — BANK A FIX BRIEF
**Source:** Tina's live read of tinza.netlify.app, 11 Jul 2026. All confirmed on-screen.
**Files:** `sections/meals.js` (+ possibly `core.js` for #4/#5)
**Do not re-author the cards. These are surgical corrections.**

---

## 🔴 1. `goesWith` on Tofu Scramble recommends EGG DISHES on a VEGAN card

Currently: `Chakalaka Beans on Toast` ✓ · **`Masala Scramble (Akoori)`** ✗ · **`Menemen (Turkish Scramble)`** ✗

Two faults:
- **DIETARY:** Akoori and Menemen are egg dishes. A vegan card must never `goesWith` a non-vegan dish. Same failure class as almond-milk-priced-as-dairy — the app not honouring its own dietary logic.
- **CULINARY:** all three are *scrambles*. You do not serve a scramble alongside two other scrambles. `goesWith` = things that go **on the same plate**.

**FIX:** replace with real, vegan, plate-compatible dishes from the existing library. Toast / roasted tomatoes / rösti / beans / flatbread. **C4 rule: verify every one is a real library dish before writing it.**

**ALSO — naming collision:** this card has a version chip named **"Masala Scramble"** AND links out to a different dish named **"Masala Scramble (Akoori)"**. Two different things, same name, same screen. Rename the chip (e.g. "Masala Tofu") or drop the link.

**→ Sweep ALL 6 Bank A cards for the same defect.** If it happened once it happened more.

---

## 🔴 2. THE HONEST TOFU PARAGRAPH IS MISSING — reported as done, is not on the card

Close-out item ⑤ was: *hero states plainly that tofu is expensive in SA and points to the chickpea chip as a real alternative, not a compromise.*

**It is not on the card.** Method steps 1–5 are all cooking instructions. There is no cost-honesty note anywhere.

**Why this matters:** the card charges **R50** — the priciest breakfast on the shelf — and never explains itself. The Chickpea Flour chip costs **R7** and nothing tells anyone why they'd tap it. The whole reason we built that chip is currently invisible.

**FIX — put it in the TIP block (or a second note), NOT the method.** Method steps are for cooking; this is read *before* deciding to cook. Something like:

> *Tofu isn't cheap in South Africa — about R250/kg, which makes this one of the pricier breakfasts here. If that stings, tap the Chickpea Flour Scramble: gram flour, turmeric and kala namak, a fraction of the cost, and a proper dish in its own right — not a sad compromise.*

**Verify it on the rendered page. Do not report it done from the source.**

---

## 🟡 3. Broken emoji on the "Mediterranean" version chip
Renders as an empty box ▯. The other three chips are fine. Same emoji-encoding gremlin as before. **Node `fs.writeFileSync` only — never Python.** Sweep all 6 Bank A cards + chips for other box-renders.

---

## 🟡 4. Stale date in the cost footer — APP-WIDE
Cost box reads **"SA's biggest retailers · May 2026"**. It is **July 2026**.
Almost certainly a hardcoded string in `core.js`. Find it, and make it a **single constant** so it never goes stale silently again. Report where it lives.

---

## 🟡 5. Green/gold mixing in the COST ESTIMATE box
The box has a **gold** border and a **gold 🥇 icon**, but the figures inside are **green food cost**.
**Locked rule: green = food cost, gold = shop spend, NEVER mix.** The box currently says both at once. Make it green, or state explicitly which number it is.
(Likely a shared `core.js` component → check the blast radius before touching. **core.js is sacred: backup + line count before/after.**)

---

## ✅ CONFIRMED GOOD — do not touch
- `didYouKnow` on Tofu Scramble ("your nose reads 'egg' before your brain catches up") — best on the shelf
- `TIP` (kala namak late, off the boil)
- Method step 1 (press the tofu — law first, with the why)
- Chickpea Flour chip at R7 vs tofu R50 — working exactly as designed
- Nutrition grid, storage line, timers, cost chips all rendering

---

## ⚖️ BEFORE PUSH
Render-prove (real engine over merged pool) + file size + card count (**must stay 63**).
**And then LOOK AT THE PAGE.** Two things today were reported done and were not done. The screen is the proof, not the summary.
