# TINZA BRIEF — MF43 · THE SIDES-ONLY LIE

**Status:** LIVE ON 88 CARDS RIGHT NOW.
**Baseline:** `main@c03da83` — PUBLISHED on Netlify, verified 12 Jul 17:49. MF28 is closed and live. This brief starts from there.
**Session purpose:** ONE JOB. MF43 and nothing else.

---

## 1. THE BUG, IN ONE SENTENCE

**A lamb dish shows a price that does not include the lamb.**

`worldkitchen.js` **:151–159** — the BROWSE CARD computes its own cost with **no gate**:

```js
if (priced > 0 && total > 0) → SHOW TOTAL
```

That is the whole bug. If *any* ingredient priced, and the total is above zero, it prints the total. It does not ask whether the thing the dish is *named after* was one of them.

**What the user sees:**
- She browses World Kitchen. Card says **"Lamb Tagine · R38."** She thinks: *incredible value.*
- **That R38 is onions, spices and a lemon.**
- She opens the card — and the DETAIL page honestly says *"≈ estimate — not yet priced: lamb."*

**The card lies. The detail tells the truth. She sees the card first.**

---

## 2. WHY THIS JUMPS THE QUEUE

⚖️ **LAW 3 — SILENT WRONG IS WORSE THAN LOUD MISSING.** This is the worst live instance in the app.

⚖️ **LAW 20 — A CARD THAT PRICES SOME OF THE FOOD IS WORSE THAN A CARD THAT PRICES NONE.** A blank invites a question. **A partial total answers one that was never asked, wrongly, with a number the user will act on.** She budgets R38 and buys a R150 leg of lamb.

**The 35 lamb cards are now *correctly* unpriced.** Yesterday's work deleted the lie that priced lamb as mutton. That was right. **The bug is not the skip — the bug is the silence.**

---

## 3. THE NUMBERS (from `Tools/fallback-census.js`)

| WK CARDS-SKIPPED (no real price) | before | after |
|---|---|---|
| total | 53 / 1021 | **88 / 1021** |
| …of which the protein is LAMB | 2 | **35** |

😳 **53 were already broken before we started and nobody had ever counted them.** Not carelessness — **the metric did not exist** (Law 19). CARDS-SKIPPED is now a standing census column. Forever.

---

## 4. THE FIX — THE TRUTH-TELLING CODE IS ALREADY THERE

This is not a new feature. **It is a wiring job.**

✅ **EXISTS AND WORKS** — `worldkitchen.js` **:630–631**, the DETAIL page, already renders the loud line:
> `≈ estimate — not yet priced: lamb, …`

❌ **DOESN'T CALL IT:**
- `worldkitchen.js` **:151–159** — the browse card
- `index.js` **:264** and **:494** — the finder / search results

👉 **ROUTE THE CARD AND THE FINDER THROUGH THE SAME LOUD LINE.** ⚖️ **LAW 6 — ONE DOOR.** Do not write a second version of the line. Do not patch three sites. Lift the existing renderer into one shared function and have all three call it.

⛔ **NO PARTIAL TOTALS. EVER.** If the main protein is unpriced, the card **says so**. It does not quietly print the sides.

📌 **Note the asymmetry:** the coverage gate (`index.js` **:244–269** — `coverage >= 0.8 AND protein-priced`) is **WK-ONLY**. Only `adaptWorld` has it. Confirmed: no other room does this. **Do not extend it to other rooms in this session** — that is a separate ruling and a separate commit. Just make WK's card honour the gate WK already has.

---

## 5. PROOF — READ THIS TWICE

✅ **PROOF = A SCREENSHOT of a WK lamb card in the browser showing the loud line instead of "R38."**

⛔ **A CODE-TRACE IS NOT PROOF.**

⚖️ **LAW 2 — a report is not proof, and a passing test is a report too.** On 12 Jul this law caught its own author: Code shipped a written proof-by-trace for the back button. **The trace was correct. The fix was live. The bug was still there.** That is why MF40 is still open.

Also run `node Tools/fallback-census.js` after the fix. WK CARDS-SKIPPED should still read **88** — the fix changes what those 88 cards *say*, not how many there are. **If that number moves, something else broke.**

---

## 6. LAWS IN FORCE THIS SESSION

1. `node --check` **proves nothing.** It passed on a zero-byte `spice.js`.
2. **A report is not proof.** Prove it per-section, in the browser.
3. **Silent wrong is worse than loud missing.**
5. Committed is not pushed. Pushed is not deployed. **Deployed is not published.**
6. **Don't patch N sites. Build the one thing they should all call.**
20. **A card that prices some of the food is worse than a card that prices none.**

- All file writes via Node `fs.writeFileSync`. **Never Python.**
- `core.js` is sacred — **line count before and after.**
- MF43 ships as **its own commit**, on top of `c03da83`.

---

## 7. WHAT COMES AFTER (do not start it here)

3️⃣ MF40 — the back button (brief written, diagnosed, not fixed)
4️⃣ The tick-lists — Tina signs 36 WK lamb lines + MF37 A-or-B
5️⃣ MF29 + MF33 — the maths
6️⃣ MF30 — dietary wiring (**unblocked** — MF28 was the gate and it is open)
7️⃣ MF31 + MF32 — the colour law
