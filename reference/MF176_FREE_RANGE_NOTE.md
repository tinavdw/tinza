# MF176 — THE FREE-RANGE & ORGANIC NOTE · ONE LINE, ONE RENDERER, NEVER ON A BUDGET FORK

> **Tina, 6 Aug 2026:** *"Tinza, from an ethical standpoint, should always recommend free range animals… Fact is free range, and organic veggies, are more expensive, but it should be encouraged on Tinza."*
> **And on where:** *"Everywhere except Budget forks."*
> **And on pricing it:** *"thats gonna cause so much extra work, maybe just a note somewhere."*

---

## 0 · ⚖️ WHY THIS IS ONE RENDERER AND NOT A CARD EDIT — THE MECHANICAL PROOF

⛔ **A per-card note is not merely expensive. THE WATCHERS WOULD REJECT IT.**

`tinza-echo.js` line 127: **`const N = 7`** — *"7 consecutive identical words"* in **3 or more records** is a 🔴 **VOICE ECHO**, the top red band. Any sentence long enough to say this is over seven words. Putting it on three cards fires the gate; putting it on three hundred makes `/tinza` permanently red.

⚖️ **RULE ZERO SETTLES THE REST.** *Uniformity comes ONLY from shared `core.js` functions using `var(--token)` — never hand-rolled markup.* A line that must appear on every non-Budget recipe is, by definition, a shared renderer's job. **If two sections differ, that is a BUG to close, not a style choice.**

✅ **One line. One place. It cannot drift, it cannot echo, and it is one commit.**

---

## 1 · STOP-CONDITION — READ FIRST, AND THIS MAY END THE TASK

```
grep -n "free.range\|organic" sections/core.js
node tinza-echo.js vietnam | grep -A3 "VOICE ECHO"
```

⛔ **If `core.js` already renders this note and `/tinza` is 0 red — SAY SO AND STOP.**
⛔ **If ANY `wk_*.js` card carries the note in its prose — STOP AND REPORT IT.** That is the per-card implementation this brief exists to prevent, and it must come out before the renderer goes in, or the note will appear twice.

---

## 2 · THE RED LINES

- ⛔ **NEVER ON A BUDGET FORK.** ⚖️ Tina's explicit words. 212 versions carry a Budget label, plus the whole `budget.js` / `budget_floor.js` Feed My Family shelf. **Those forks exist for someone deciding between supper and petrol, and the app does not ask that person to spend more.**
- ⛔ **ENCOURAGE, NEVER SHAME.** The line says what is better. It does not say the reader is doing wrong. ⚖️ `/tinza` §7: *"Short. Never a lecture."* A guilt line about battery farming on somebody's Tuesday supper is a lecture and it fails the standard.
- ⛔ **DO NOT PRICE FREE-RANGE OR ORGANIC.** Ruled 6 Aug — the cost stays on the base key. ⚠️ **THE CONSEQUENCE IS NAMED:** the app UNDER-bills anyone who follows the advice, which is the wrong direction under §30.5. **That is the accepted price of not re-pricing the corpus, and it is why the note must read as a preference and not as what the plan is costed on.**
- ⛔ **ZERO `organic` KEYS EXIST** in `prices.js`. The note may recommend organic; nothing may attempt to cost it.
- ⛔ No other UI changes in this commit. ⚖️ Law 5.

---

## 3 · THE EXACT CHANGE

**File:** `sections/core.js` — the shared recipe renderer (`recipePage`, line ~4607) or `costLine` (~1003), whichever owns the block directly beneath the ingredient list. **Read the live code and choose; do not guess from this brief.** ⚖️ Law 22.

**Render, once per recipe, directly under the ingredients:**

> 🌱 **Free-range meat and organic veg are the better buy where you can stretch to them.**

**The gate on it:**

```js
// ⚖️ MF176 — Tina, 6 Aug 2026. NEVER on a Budget fork: those forks exist for
//    someone choosing between supper and petrol.  ⛔ Encourage, never shame.
if (!/\(Budget\)/i.test(version && version.name || '')) { … render the note … }
```

⚠️ **`(Budget)` in the version NAME is the live convention** — `claimcheck.js` already keys off it (*"(Budget) means cheaper than the default"*, ruled 2 Aug). **Use the same test, do not invent a second one.**
⚠️ Also suppress it anywhere `budget.js` / `budget_floor.js` render a recipe. Confirm whether they route through the same renderer **before** writing the condition.

**Tokens only.** ⚖️ Law 38 — a token card has no colour of its own, it INHERITS. ⛔ No hardcoded hex. ⛔ **Not green and not gold** — those two mean food-cost and shop-spend and nothing else, forever.

---

## 4 · THE PROOF ⚖️ Law 2

1. Open **Phở Bò** (default fork). **The note is there, under the ingredients.**
2. Open **Cơm Tấm Chay** or any `(Budget)` fork. **The note is ABSENT.**
3. Open a Feed My Family shelf recipe. **Absent.**
4. Open any three recipes in different sections. **The note is byte-identical in all three** — that is Rule Zero holding.
5. `node tinza-echo.js vietnam` → **0 red.** It is rendered, not authored, so it never enters the corpus and can never echo.
6. `node tinza-doctor.js` → RED count **has not grown.** ⚖️ Law 51.
7. 🚨 **HARD RELOAD.** ⚖️ Law 27.
8. ⚖️ **Law 42 — ADD THE RATCHET:** a doctor check that **no `wk_*.js` prose contains the note's wording.** The day someone helpfully pastes it onto a card, that check catches it before `/tinza` goes red.

---

## 5 · ⚖️ WHAT THIS BRIEF DELIBERATELY DOES NOT DO

- It does not price free-range or organic. **Ruled out by Tina on effort, with the under-billing consequence recorded rather than hidden.**
- It does not touch the six culinary hardbody cards. **Those argue how a bird COOKS, and they were checked on 6 Aug and are correct.**
- It does not put Tina's view on animal welfare into card prose. **She holds one and stated it plainly. The note says free-range is the better buy; it does not argue ethics at a shopper.** ⚖️ `/tinza` §7 — *never a lecture.*
