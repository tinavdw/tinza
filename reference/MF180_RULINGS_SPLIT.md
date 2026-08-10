# MF180 · SPLIT `TINZA_RULINGS.md` — **THE RULE STAYS. THE EVIDENCE MOVES.**

> **For: Code.** **From: Claude (architecture).** **Written 10 Aug 2026.**
> **Hand that does it: CODE.** ⚖️ Law 60.
> **This is a MOVE operation on one file. Not one rule changes. Not one reason is lost.**

---

## 🎯 WHY THIS EXISTS — the number

`TINZA_RULINGS.md` is **252 760 bytes ≈ 63 000 tokens**. It is read at the start of **every**
session via `/rule`. Together with the other five standards, a `/all` cold start costs
**≈ 78 000 tokens before one word of work.** Add `ASIA_PROGRESS.md` (44k) and a country file
(83k) and a single recipe costs ~240 000 tokens of re-reading.

**That is the bill Tina has been paying.** Not the model — the file sizes.

⛔ **This is NOT a trim, a summary, or a cleanup.** Nothing is shortened and nothing is judged.
Every byte that leaves `TINZA_RULINGS.md` lands, **verbatim**, in `TINZA_RULINGS_EVIDENCE.md`.

**Target: `TINZA_RULINGS.md` ≤ 90 000 bytes (~22 000 tokens).**

---

## 🩸 0 · PRECONDITION — DO THIS FIRST, IN ITS OWN COMMIT

**`§34`, `§35` and `§38` are ABSENT from `TINZA_RULINGS.md`.** The rulings live only in:
```
reference/RULING_34_35_OIL_AND_MAKE_IT_YOURSELF.md
reference/RULING_38_DRAINED_WEIGHT.md
```
Drained weight is a rule Tina works to daily, and `/rule` does not carry it.

**Merge both into `TINZA_RULINGS.md` in their correct numeric position, verbatim, BEFORE splitting.**
Otherwise the split bakes the gap in permanently.
**Do not renumber anything. Do not reword anything.**

**COMMIT:** `rulings: merge stranded §34, §35, §38 into the canonical file`

---

## ⛔ RED LINES

- **Verbatim only.** Cut and paste. **No rewriting, no summarising, no tightening, not one word.**
- **NEVER move a REASON.** Every ruling's *why* stays with the rule. ⚖️ *A rule without its reason
  gets quietly reversed six weeks later.* This is the whole point — do not optimise it away.
- **NEVER move a STRUCK ruling's strike.** A strike is a decision. The one-line strike notice stays
  in `TINZA_RULINGS.md`; the struck body moves.
- **NEVER renumber.** `§16.1` sitting after `§20`, the `§33 → §37` gap, and `§3m/§3n/§3l` are
  **reported in §5, not fixed.** Numbering is Tina's.
- **Do not touch any other file.** Not `TINZA_LAW.md`, not the standards, not `sections/`.
- **Byte conservation is the proof.** See §4.

---

## 🛑 STOP-CONDITION — STEP 1 IS READ, AND IT MAY END THE TASK

```bash
git pull
wc -c TINZA_RULINGS.md
ls TINZA_RULINGS_EVIDENCE.md 2>/dev/null && echo "SPLIT ALREADY EXISTS"
```
If `TINZA_RULINGS_EVIDENCE.md` already exists **and** `TINZA_RULINGS.md` is under 90 000 bytes:
**write "SPLIT ALREADY COMPLETE" with both sizes and STOP.**

---

## ✂️ 1 · THE CUT — what stays, what moves

Apply this to **every** `##` section, in order. The test is a single question:

> **Does a reader need this to know WHAT the rule is and WHY it exists?**
> **Yes → stays. No → it is a receipt, and receipts move.**

| ✅ **STAYS in `TINZA_RULINGS.md`** | 📦 **MOVES to `TINZA_RULINGS_EVIDENCE.md`** |
|---|---|
| The `##` heading, the date, and who ruled it | Blocks headed *"WHAT WAS ACTUALLY BROKEN"*, *"measured at HEAD"*, *"MEASURED <date>"* |
| **THE RULE** | *"APPLIED <date>"* / *"KEYS CONFIRMED"* / *"CONFIRMED <date>"* records |
| **THE REASON — always, without exception** | The **body** of any ruling marked ⛔ STRUCK or SUPERSEDED *(leave a one-line strike notice behind)* |
| **WHAT IT DOES NOT LICENSE** | Build records and MF pointers *(“build = MF149”, census rungs, watcher-shipped notes)* |
| Ordering rules between rulings *(e.g. §3n runs before §3l)* | Long bug narratives — *"the bug this ruling nearly shipped"*, before/after code, file:line dumps |
| Any list the app or a tool reads *(key lists, red lines, the five keys)* | Enumerated per-record application logs |

### 🔗 EVERY SECTION THAT LOSES CONTENT GETS A POINTER
At the end of that section in `TINZA_RULINGS.md`, add exactly one line:
```
> 📦 Evidence, measurements and build record: `TINZA_RULINGS_EVIDENCE.md` → §<N>
```
**One line. No summary of what moved.** A summary is a second copy that drifts.

### 🎯 THE SIX THAT MATTER — 68% of the file
Do these first and re-measure before continuing. **They are also the six most likely to tempt you
into rewriting. Don't.**

| § | now | mostly | expect |
|---|---|---|---|
| **§24 · THE TWO BACKS** | **34 953 b** | 19 sub-rulings, all built and shipped (MF148–151). The *rules* hold; the bug hunt, the struck Option A, the census rung and the measured-at-HEAD blocks are receipts. | ~8 000 b |
| **§11 · LAUNCH BLOCKERS** | **32 479 b** | rulings tangled with "the bug this ruling nearly shipped" narratives | ~10 000 b |
| **§10 · STRUCTURE & CONTENT** | 17 293 b | | ~7 000 b |
| **§15 · A VERSION IS A FULL RECIPE** | 15 303 b | | ~6 000 b |
| **§2 · WHAT EACH TIER GETS** | 13 346 b | **the tier table is LOAD-BEARING — it all stays** | ~10 000 b |
| **§30 · COSTPP IS DERIVED** | 12 022 b | | ~5 000 b |

⚠️ **§9 PORTION BRAIN (339 b) and §1 PRICE & TIERS (1 139 b) are already minimal. Do not touch them.**

---

## 📄 2 · THE HEADER `TINZA_RULINGS_EVIDENCE.md` OPENS WITH

```markdown
# 📦 TINZA_RULINGS_EVIDENCE.md — THE RECEIPTS

> ⛔ **THIS FILE CARRIES NO RULES. IT IS NOT `/rule`.**
> Every ruling, and every ruling's REASON, lives in `TINZA_RULINGS.md`. That file is canonical.
> This one holds what was measured, what was applied on which date, what was struck, and which
> MF built it — kept because Tina proved it, not because it must be re-read every session.
>
> **Split from `TINZA_RULINGS.md` on 10 Aug 2026 (MF180). Nothing was reworded. Nothing was deleted.**
> **If this file and `TINZA_RULINGS.md` ever disagree — `TINZA_RULINGS.md` is right.**
```

**Section numbers mirror `TINZA_RULINGS.md` exactly.** Evidence for §24 sits under `## §24`.
**No renumbering, no regrouping, no chronological reordering.**

**DESTINATION: `TINZA_RULINGS_EVIDENCE.md` → `reference/`.** *(It is looked-up data, not a standard.
`/rule` must keep pointing at exactly one file in the root.)*

**COMMIT:** `rulings: split evidence and build records into reference/TINZA_RULINGS_EVIDENCE.md`

---

## 🧾 3 · UPDATE THE POINTERS — same commit

- **`CLAUDE.md`** — in the standards table, under the `/rule` row, add:
  `reference/TINZA_RULINGS_EVIDENCE.md — the receipts. NOT read at session start.`
- **`tinza-lawcheck.js`** — if it asserts `TINZA_RULINGS.md` exists or measures it, make it aware of
  the evidence file **without** adding it to the `/rule` read set.
- ⛔ **`/rule` still resolves to `TINZA_RULINGS.md` ONLY.** That is the entire saving. If the next
  model reads both, this brief achieved nothing.

---

## ✅ 4 · THE PROOF — Tina runs this, and it is arithmetic, not opinion

### 4a · BYTE CONSERVATION — the gate
```bash
# BEFORE (record this first, from git):
git show HEAD:TINZA_RULINGS.md | wc -c

# AFTER:
wc -c TINZA_RULINGS.md reference/TINZA_RULINGS_EVIDENCE.md
```
**AFTER-total must be ≥ BEFORE**, and may exceed it only by the evidence-file header plus the
one-line pointers. **If AFTER-total is LESS than BEFORE, content was deleted or reworded. That is a
FAILED RUN — revert it.**

### 4b · NO RULING WENT MISSING
```bash
git show HEAD:TINZA_RULINGS.md | grep -c "^## "
grep -c "^## " TINZA_RULINGS.md
```
**The two counts must be IDENTICAL.** Every `##` section keeps its heading in the canonical file,
even if its whole body moved. *(The count rises by 3 if §0 ran in the same window — state which.)*

### 4c · THE SIZE TARGET
```bash
wc -c TINZA_RULINGS.md        # must be ≤ 90 000
```

### 4d · SPOT-CHECK THE RULES TINA USES DAILY — all must still be in `TINZA_RULINGS.md`
```bash
grep -c "R90"            TINZA_RULINGS.md   # Pro price
grep -ci "drained"       TINZA_RULINGS.md   # §38, merged in §0
grep -c "§3n"            TINZA_RULINGS.md   # retail tier beats band width
grep -c "§3l"            TINZA_RULINGS.md   # top of band
grep -ci "level 0"       TINZA_RULINGS.md   # the numeric tier model
grep -ci "diet.*version" TINZA_RULINGS.md   # §26
```
**Every one must be non-zero.** A zero means a load-bearing rule left the canonical file.

### 4e · NOTHING ELSE MOVED
```bash
node tinza-doctor.js     # RED count MUST NOT have grown   ⚖️ Law 51
node tinza-census.js     # recipe count MUST be identical
node --check sections/core.js
```
**The app does not change. This brief moves text in one markdown file.**

---

## 📋 5 · REPORT ONLY — CHANGE NOTHING

1. **The numbering mess**, for Tina to rule on later:
   - `§16.1` sits between `§20` and `§21`
   - `§33` jumps to `§37` — `§34/35/36` were the stranded ones (see §0); is `§36` real or never used?
   - `§3m`, `§3n`, `§3l` read as sub-rulings of `§3 · TINZA CHEF` but are **price** rulings, and
     they are out of alphabetical order
   **Report the list. Do not renumber.**
2. **Anything you could not classify** under §1 — leave it in `TINZA_RULINGS.md` and list it.
   ⚖️ **When in doubt, it STAYS.** A receipt left in the canonical file costs tokens; a rule moved
   out of it costs Tina the rule.
3. **Before/after byte count per `##` section**, as a table.

---

## ⚖️ 6 · THE RATCHET — Law 42

Add one check to `tinza-doctor.js` before closing this out:

> **`TINZA_RULINGS.md` over 120 000 bytes is RED**, with the message:
> *"the canonical rulings file is growing back into a receipts file — split the evidence out (MF180)."*

This file grew to 63 000 tokens without anyone noticing, because a document that is too long is
**silent**. ⚖️ Law 3. **The doctor notices now.**

---

## 🔜 AFTER THIS ONE (do not start them here)

Same treatment, in this order — each is its own brief:
1. **`reference/ASIA_PROGRESS.md`** — 175 035 b (~44k tokens) → live state + `ASIA_PROGRESS_HISTORY.md`
2. **`reference/THAILAND_COLD_START.md`** — 151 973 b (~38k). Vietnam's does the same job in 38 010 b.
3. **A standing rule: never paste `sections/*.js` into a chat.** `wk_vietnam.js` is 83k tokens;
   `prices.js` is 51k. **Code greps them. Chat never loads them.**
