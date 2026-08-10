# ⚖️ §32 — THE TWO LEDGERS (RULED 30 Jul 2026 by Tina)

⚠️ **PASTE-IN BLOCK, NOT A REBUILT FILE.** `TINZA_RULINGS.md` at HEAD stops at **§25**; §26–§31 exist
only in Tina's local copy. Rebuilding the file from HEAD would silently delete six rulings. **6th
instance of HEAD-behind-local.** Paste this after §31.

---

## §32.0 THE RULING AND ITS CONDITION

Tina, 30 Jul 2026: **"as long as it can help that I don't have to waste hours duplicating things."**

That is the ruling **and** the acceptance test. Both ledgers exist to stop repeated work, not to add
process. **A gate that blocks a correct edit is an obstacle, not a watcher**, and §32 is written so that
neither ledger can become one — see §32.2 and §32.4, where each has an explicit non-blocking rung.

**THE TWO FAILURES BEING CLOSED, both on 30 Jul, both cost hours rather than correctness alone:**

1. **A record appeared outside a merge.** `merge.js` reported `0 + 4 = 4`, `node --check` and
   `pricecheck` independently confirmed **4**, and a fifth record — `indonesia-nasi-uduk` — was
   afterwards present in `wk_indonesia.js` and in the copy already handed to Tina. **Nothing in the
   toolchain could have caught it**: merge validates what it is *handed*, pricecheck reports on whatever
   is in the *file*, and neither knows how many records were *supposed* to be there.
2. **Four fabricated entries in `prices.js`, three of them figures signed with Tina's name** —
   `sambal terasi` 590, `peanut sauce` 260, `rendang paste` 520, and a false "Tina re-sourced tempeh"
   comment. Reverted with `git checkout`. Separately, she was asked for the hon dashi price she had
   already given on 29 Jul, and the identical reasoning was re-derived from scratch, nearly shipping a
   **duplicate `"dashi": 13`** where the last one wins silently.

⚖️ **THE LADDER, one rung past §29.5: missing < duplicate < wrong < WRONG-AND-SIGNED.** A fabricated
figure wearing Tina's name renders as a number, *looks* sourced, and its own comment tells the next
reader not to re-check it.
⚖️ **AND THE STANDING LAW THIS IS AN INSTANCE OF:** a silent hole needs a mechanical watcher, not
sharper eyes (§17, the ungated `tierBar`).

---

## §32.1 `reference/ASIA_LEDGER.json` — RECORD COUNT + CONTENT FINGERPRINT

`merge.js` writes, per country, the **record count** and a **sha256 fingerprint of the records array**
after every successful merge, and **checks them before the next one**.

- The fingerprint is taken over the **records**, not the file text, so a header edit or a reformat never
  false-alarms while a record appearing, vanishing or changing always does.
- The check runs **before validation**, because if the file's state is unexplained then validating a
  batch against it is answering the wrong question.
- The ledger is written **after** the country file, so a crash between the two leaves the ledger
  **behind** rather than ahead — failing loud next run instead of silently blessing an unverified state.
  **Missing < wrong**, as always.
- **Derived by `merge.js`, never hand-typed.**

## §32.2 TWO RUNGS, AND THE SPLIT IS THE WHOLE DESIGN

| Condition | Rung | Why |
|---|---|---|
| **COUNT** mismatch | **HARD REFUSE**, nothing written | A record appearing or vanishing outside a merge is **always** wrong. This is the rung that catches 4 → 5. |
| **HASH** drift, count unchanged | **LOUD WARN**, then proceed | Editing prose inside an existing record is legitimate and happened the same day (the Betawi etymology fix). Blocking that would make the tool an obstacle. |
| Country **absent** from the ledger | **BASELINE**, no refusal | Otherwise the first merge of every new country file is blocked by the tool meant to protect it. |

⚖️ **`--accept-count` EXISTS AND IS ON THE RECORD.** A deliberate re-baseline is available for when the
current file is known-good, it prints a warning naming itself, and **it must never be used to make a
surprise go away.** Find out what happened first.

## §32.3 `reference/PRICE_LEDGER.json` + `priceledger.js` — PROVENANCE

⚖️ **DERIVED FROM `prices.js`, NEVER TYPED.** A hand-maintained second list of prices is a second source
of truth, which is exactly the MF152-grepped-against-itself failure. `--seed` reads the real file. The
**only** thing added by hand is a **dated entry when Tina gives a new price**, because that is the one
fact `prices.js` cannot prove about itself.

- **84 existing Tina-attributed keys are GRANDFATHERED** — they predate the ledger and cannot be
  retro-proved, so they are recorded as-found rather than deleted or pretended-verified. 50 of them carry
  no date in their comment and are recorded as **undated, not invented**.
- `--check` **fails** any `prices.js` key claiming Tina attribution with **no ledger entry**. All four of
  the 30 Jul fabrications would have gone RED.
- **`--ask <term>` IS THE ONE THAT ANSWERS TINA'S CONDITION.** It searches the ledger *and* the live file
  *and* near-spellings, and answers "has she already given this?" in one command. Verified: **`--ask dashi`
  returns 🛑 ALREADY IN prices.js**, which is precisely the question that wasted her time.
- `--selftest` — **20 born-RED proofs**.

## §32.4 THE MATCHER RULE — earned, not designed

The tool produced a **false positive on its own first run**: `--ask "peanut sauce"` reported a hit that
did not exist, because a naive two-way substring test lets a short key match inside a longer phrase.
⚖️ **A false positive here is the exact harm the tool exists to prevent** — it would tell Tina a price is
already keyed when it is not, which is the *same* wasted hour from the other direction. So:

- a **single-word** key must match **exactly**, with plural tolerance;
- only a **multi-word** phrase may match by **containment**;
- **space-stripped equality is kept**, because `bean sprouts` vs `beansprouts` cost her a repeat once.

⚠️ Also fixed on the first run: the scanner read whole lines and picked up `"dashi": 13` from inside a
**comment** documenting the near-duplicate, reporting a phantom second key. **A key named in prose is not
a key** — the code side of a line only.

## §32.5 MANDATORY SEQUENCE — this is the part that must be obeyed

⛔ **BEFORE ASKING TINA FOR ANY PRICE:** `node priceledger.js --ask <term>`. If it says
**ALREADY IN prices.js**, the question is whether the number is **wrong**, never whether it is missing
(§29.5). **Do not re-source a right number.**
⛔ **WHEN SHE GIVES A PRICE:** key it in `prices.js` **and** add a dated ledger entry **in the same
message**. Never deferred, never left as prose in MF152.
⛔ **AFTER ANY `prices.js` EDIT:** `node priceledger.js --check`.
⛔ **`merge.js` NOW RUNS THE STATE LEDGER AUTOMATICALLY.** No extra step, no flag, nothing to remember —
which is the only way a gate survives contact with a long session.

## §32.6 PROVEN, NOT ASSERTED

| Check | Result |
|---|---|
| `node merge-selftest.js` | **48 passed · 0 failed** (42 pre-existing + **6 new ledger proofs**) |
| `node priceledger.js --selftest` | **20/20** |
| `node pricecheck.js --selftest` | **26/26** unchanged |
| Live end-to-end: phantom 12th record injected into `wk_indonesia.js` | **HARD REFUSE**, exit 1, *"A RECORD APPEARED outside a merge"* |
| File restored afterwards | **md5 byte-identical** (`ba2480c7…`), 11 records, ledger state `match` |
| `pricecheck.js indonesia` | exact 41 · wrong-product 0 · absent 0, **unchanged** |
| `tinza-doctor.js` | **RED 10 floor, unchanged** |

⚖️ **ONE BUG THE SELF-TEST CAUGHT IN THE GATE ITSELF**, worth recording because it is the argument for
the discipline: `module.exports` was placed above the ledger block and died with *"Cannot access
'LEDGER_PATH' before initialization"* — a temporal dead zone on a `const`. It was caught on the first run
of `merge-selftest.js` after the edit, before anything shipped. **Never edit `merge.js` without running
the self-test.**

## §32.7 HONEST LIMITS, stated the way the other tools state theirs

- `ASIA_LEDGER` proves **state**, never correctness. It cannot tell you a record is good — only that the
  set of records changed when it should not have.
- `PRICE_LEDGER` proves **provenance**, never correctness. It cannot tell you R2000/kg is the right
  keluak, or that a normalisation is sound.
- Neither replaces **Law 2**: Tina's eyes on live close a bug.
