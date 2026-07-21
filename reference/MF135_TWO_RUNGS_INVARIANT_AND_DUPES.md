# MF135 · TWO RUNGS — THE INVARIANT AND THE DUPLICATE KEYS

**Written 22 Jul 2026 · for Code · one session, no refactoring**
**File touched: `tinza-census.js` only.** Nothing in `sections/` moves. This job adds instruments; it fixes no bugs.

---

## WHY THIS EXISTS

Five silent holes in three days: the ungated `tierBar`, the missing `smoked snoek` price key, `versions:null`, the `_vHay` string throw, and nine duplicate object keys.

**Not one of them announced itself.** No error, no console, `node --check` clean, and the census RED count did not move. The `_vHay` throw silently deleted **1021 world records** — `allRecipes()` went 2083 → 1062 — and every instrument on the bench said fine.

⚖️ **§20 — INVARIANT, NOT FEATURE.** A silent hole needs a mechanical watcher, not a sharper pair of eyes.

---

## ⚠️ READ THIS FIRST — THE INSTRUMENT IS PART OF THE BUG

`tinza-census.js:37`:

```js
for (const f of loadOrder) { try { vm.runInContext(...) } catch(e){} }
```

**The census swallows its own load errors.** A section file that throws on load is indistinguishable from one that loads clean. This is why the RED count never moved.

**Job 0, before either rung: make the loader honest.** Collect the failures, don't discard them. A file that throws during load is a RED in its own right, reported by name and message. Do not remove the `try` — the census must still finish and report. Collect, then report.

---

## RUNG 26 · THE INVARIANT

`head('26 · IS THE WHOLE LIBRARY STILL THERE?   ⚖️ Rulings §20 · MF134');`

**Three assertions. All three must be able to go RED.**

1. **`allRecipes()` === 2083.** Not "roughly", not "≥". Exact. If the number is legitimately meant to change, the constant in the census changes **in the same commit as the recipes**, deliberately, and Tina sees it in the diff.
2. **Every section non-empty.** Current shape, measured at `f9b1dcc`:
   `meals 257 · bakes 101 · sides 9 · floor 9 · world 1021 · spice 190`
   A section at 0 is RED even if the total somehow still reaches 2083.
3. **The loader reported no swallowed failures** (job 0 above).

**Report the shape on GREEN too.** `ok()` should print the per-section counts, so a drift of ±3 in one room is visible to her eye even while the total holds.

---

## RUNG 27 · THE DUPLICATE KEYS

`head('27 · DOES ANY OBJECT DEFINE THE SAME KEY TWICE?   ⚖️ Rulings §20 · Law 39');`

**Assertion: zero same-object duplicate keys across `sections/*.js`.**

**⛔ DO NOT GREP THIS.** A regex over `prices.js` counts 12 duplicates; **10 of those are legitimate keys in different objects.** A grep here produces a false RED that Tina will learn to ignore, which is worse than no rung at all. ⚖️ §19.

**Parse it.** Walk every `ObjectExpression`, compare keys within that node only. `acorn` is the reference implementation — if adding a dependency is unwelcome, a brace-depth scanner is acceptable **only if it reproduces the nine below exactly**.

**The nine that exist right now — this is the acceptance fixture:**

| file | key | loser | silent winner |
|---|---|---|---|
| `prices.js` | `pork belly` | L154 · R120 | **L581 · R150** |
| `prices.js` | `pita_each` | L8 · R4 | **L487 · R7.70** |
| `core.js` | `coconut` | L1011 · coconut flakes | **L1053 · desiccated coconut** |
| `core.js` | `niter kibbeh` | L1007 | L1053 |
| `core.js` | `fish stock` | L1032 | L1053 |
| `core.js` | `phyllo sheets` | L1053 | L1083 |
| `core.js` | `pastry dough` | L1053 | L1094 |
| `core.js` | `sukuma wiki` | L1053 | L1145 |
| `core.js` | `broad beans` | L1053 | L1152 |

**Report both line numbers and both values.** "duplicate key" is useless; **"R120 has never once been used, R150 wins"** is a decision she can make in five seconds.

`photo-audit.FIXED.js` does not parse — report it as a skip by name, do not let it fail the run.

---

## 🔴 THE BASELINE MOVES — TELL HER, DO NOT HIDE IT

**Census goes 19 → 20.** Rung 27 finds nine real duplicates and goes RED on day one. That is correct behaviour: the rung works.

Rung 26 should be **GREEN** immediately.

**Do not "fix" the nine to keep the count at 19.** The keys are a content decision — which coconut, which pork belly price — and that is Tina's call, not Code's. The rung's job is to surface them.

⚖️ RED 20 is the new floor. A floor, not a gate.

---

## PROOF BY RE-INTRODUCTION — THE ONLY ACCEPTANCE THAT COUNTS

`node --check` proves the file parses. It proves nothing about the data. Each assertion must be **proven by breaking it on purpose, watching it go RED, and reverting.**

| # | break this | expect |
|---|---|---|
| 1 | make an adapter throw inside its `forEach` (the exact `_vHay` failure) | **RED** — count wrong **and** a section empty |
| 2 | delete one recipe from any section file | **RED** — 2082 ≠ 2083 |
| 3 | empty one small section (`sides`) | **RED** — section at 0 |
| 4 | make `sections/utils.js` throw on load | **RED** — loader reports it by name |
| 5 | add `"salt": 20` twice inside one object | **RED** — reported with both lines |
| 6 | add `"salt": 20` to two *different* objects | **GREEN** — this is legal, and a grep would fail here |

**Test 6 is the one that matters most.** It is the difference between a rung she trusts and a rung she learns to ignore.

---

## RULES THAT DO NOT BEND

- `tinza-census.js` only. No section file changes. No renaming, no tidying.
- Do not fix the nine duplicate keys. Surface them.
- `node tinza-doctor.js` must still report **9** and `allRecipes()` **2083** at handback.
- State the measured numbers at handback. ⚖️ Law 2 — nothing is closed until Tina's eyes are on live.
- A probe that disagrees with the real thing is wrong by definition. ⚖️ §19.
