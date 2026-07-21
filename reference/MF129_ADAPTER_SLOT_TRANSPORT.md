# MF129 — Seven adapters cannot transport an authored slot

**Status:** open
**Raised:** 21 Jul 2026
**Parent:** MF125 (closed) · MF125-B (shipped 21 Jul, commit `1e86c11`)
**Blocks:** every future census-18 assertion ① failure

---

## 1. The bug

MF125 ruled that slot is authored on the record and an adapter only **transports**
it. That was implemented in the two adapters MF125 scoped — `adaptBraai` and
`adaptBakes` — and nowhere else. MF125-B added it to `adaptEvents` and `adaptSpice`
because two rulings could not otherwise take effect.

**Seven adapters still never pass the field.** They build their `rec({...})` with no
`slot` key at all, so `fromRecord(o.slot)` in `slot()` reads `undefined`, and the
record falls through to derivation no matter what its data says.

| adapter | `sections/index.js` | transports slot |
|---|---|---|
| adaptMeals | 270 | ❌ |
| adaptFloor | 297 | ❌ |
| adaptHealth | 350 | ❌ |
| adaptWorld | 406 | ❌ |
| adaptBeverages | 505 | ❌ |
| adaptTiny | 519 | ❌ |
| adaptFurry | 554 | ❌ |
| adaptEvents | 444 | ✅ MF125-B |
| adaptSpice | 531 | ✅ MF125-B |
| adaptBraai | 484 | ✅ MF125 |
| adaptBakes | — | ✅ MF125 |

## 2. Why it matters

Authoring a slot on any record in those seven rooms is a **silent no-op today**.
Write `slot:"SIDE"` on a world record and nothing happens — no error, no warning,
the derived value just wins. That is the worst shape of bug: the fix looks applied
and is not. ⚖️ Law 3 — a thing that is wrong is silent.

Every future census-18 ① disagreement reachable through one of these seven rooms
can *only* be closed by editing an adapter, which is the opposite of what MF125
ruled. The doctrine is in place; the plumbing is missing under two thirds of it.

## 3. STOP-CONDITION

Open `sections/index.js` and grep the eleven adapters for `slot:`. **If all eleven
already carry it, SAY SO AND STOP** — this job is done and needs no commit.

## 4. RED LINES

- ⛔ **No slot literal may enter an adapter.** The only permitted right-hand side is
  `r.slot || null` (or the record's own field, e.g. `it.slot || gp.slot` as braai
  does). A constant on the right is the MF125 bug being rebuilt. ⚖️ Law 6.
- ⛔ Do not touch `slot()`, `fromRecord()`, or the section-default ladder at
  `index.js:129`. The derivation order is correct and was paid for.
- ⛔ Do not author slots on any record in this job. Transport only. The data pass is
  a separate job, and doing both at once makes it impossible to tell which change
  moved a number.
- ⛔ Do not touch `adaptBraai` / `adaptBakes` / `adaptEvents` / `adaptSpice`.

## 5. THE EXACT CHANGE

Seven lines. In each adapter's `rec({...})` call, insert `slot:r.slot||null,`
immediately after the existing `section:'…'` key, on the lines listed in §1.

For `adaptFurry` (554) confirm the loop variable is `r` before inserting — it
iterates a map of arrays, not a flat list.

Expected effect on `node tinza-census.js` rung 18: **none**. No record in those
seven rooms carries an authored slot yet, so `slot source` should stay
`derived 1877 · record 204 · unresolved 2`. **A change in those numbers means a
record was silently being overridden and you have found a second bug — report it,
do not absorb it.**

## 6. THE PROOF

1. `node --check sections/index.js`
2. `node tinza-census.js` — rung 18 unchanged, census RED still **17**, doctor **9**.
3. Temporarily author `slot:"SIDE"` on any one world record, re-run, and confirm it
   reports `record` 205 and `derived` 1876. **Revert the probe.** This proves the
   transport is live rather than merely present. ⚖️ prove every check fires.
4. Tina: open any world recipe on live after a hard reload — it renders exactly as
   before. This job must be invisible to her. ⚖️ Law 27.
