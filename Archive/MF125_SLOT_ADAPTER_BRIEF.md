# MF125 — Braai + Bakes Slot Adapters

**Status:** open
**Raised:** 20 Jul 2026
**Blocks:** celebrating shelf (MF123 mood-tag foundation)
**Number:** provisional — confirm MF125 is free before filing.

---

## 1. The bug

The braai and bakes adapters are blanket-assigning a single slot value to every
record that passes through them.

| Adapter | Records | Slot assigned | Distribution |
|---|---|---|---|
| braai | 92 | `SUPPER` | 92/92 — 100% |
| bakes | 101 | `TREAT` | 101/101 — 100% |

Events is correctly split. Events is the reference implementation for this fix.

## 2. Proof it is the adapter, not the data

**Monkey Gland Sauce** resolves to:

- `CONDIMENT` when reached via **events**
- `CONDIMENT` when reached via **spice**
- `SUPPER` when reached via **braai**

Same record. Three entry paths. Two answers. The record is not the variable —
the adapter is. Do not go looking for bad data in the recipe files.

## 3. Why this matters right now

The celebrating shelf has 130 real tagged records (up from 411 keyword guesses).
Of those, **20 are labelled `SUPPER` but are actually the spread** — pap,
chakalaka, braaibroodjies, salads. **17 of the 20 arrive via braai.**

A celebration spread rendered as 20 competing main courses is not a shelf, it is
a mess. The mood shelf cannot ship until slots resolve honestly.

## 4. The fix

Adapters must **read the record's own `slot` field** and pass it through, not
assign a constant. Slot is recipe-level data under the reserved-slots contract
and flows through `normalizeRecipe()` — the adapter's job is transport, not
authorship.

### 4a. Records with no slot — RULED 20 Jul

A missing slot is a data gap, not corruption. It must not fail loudly on screen
and it must not silently inherit the section default — silent default is the
same bias that caused this bug, at lower volume and harder to see.

Behaviour:

- Stamp `slotSource:'unresolved'`
- **Render normally** inside its own section — the cook sees no difference
- **Exclude from all mood shelves** until slotted
- Census counts `unresolved` as a defect and ratchets it to zero

This separates two numbers that are currently tangled: how much adapter damage
there was, versus how much genuine slotting work is left. After the fix, the
unresolved count is the second number, clean.

**Scope guard:** adapters only. Do not edit recipe data files in this job.
Exception — three rulings already made, apply them as data edits and list them
in the commit message:

- Braai **Bread & Butter Pudding** → `TREAT`
- **Jollof** stays `SUPPER` (confirmed, no change)
- **Vetkoek** and **Boerewors** cut from celebrating (occasion test, not income
  test — humble food stays, everyday food and self-treats go)

## 5. New check — census 18

Census 17 cannot catch this and never will. The records are *labelled*
`SUPPER`, so a check that reads labels is blind to a mislabel by construction.
It needs its own rung.

**Census 18 — cross-path slot agreement.** Two assertions:

1. **Agreement.** For any recipe reachable from more than one section, the slot
   must resolve identically on every path. Monkey Gland Sauce would have failed
   this on day one.
2. **Distribution.** Flag any adapter whose slot output is 100% single-value
   across more than 20 records. A real section is never unanimous. Braai and
   bakes both trip this today; after the fix, neither should.

Assertion 2 is the cheap one and catches the whole class of bug — a blanket
assignment is always visible as a flat distribution, even when no record is
reachable by a second path.

RED baseline applies: census 18 is a floor, not a gate.

## 6. Done when

- [ ] braai adapter passes through record slot; distribution is no longer 92/92
- [ ] bakes adapter passes through record slot; distribution is no longer 101/101
- [ ] Monkey Gland Sauce resolves `CONDIMENT` on all three paths
- [ ] celebrating's 20 mislabelled records read as spread, not mains
- [ ] Bread & Butter Pudding is `TREAT`; Vetkoek and Boerewors out of celebrating
- [ ] unslotted records stamped `slotSource:'unresolved'`, render in section,
      excluded from mood shelves
- [ ] census 18 written, both assertions, and passing
- [ ] census reports the `unresolved` count as a defect
- [ ] `node --check` on every touched file
- [ ] pushed to GitHub — nothing is banked until it is on tinza.netlify.app
