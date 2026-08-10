# MF179 · FINISH THE REPO TIDY — **BEFORE THE MIGRATION**

> **For: Code.** **From: Claude (architecture).** **Written 10 Aug 2026.**
> **Hand that does it: CODE.** ⚖️ Law 60.
> **Tina has already done part of this by hand. Your first job is to find out how much.**

---

## 🎯 WHY THIS EXISTS

Tina is moving to a cheaper AI seat. The next model has **no memory of this project** — it will
read `reference/` and treat every file there as **currently true**. Right now `reference/` holds
~129 files and roughly half describe lanes that closed weeks ago. A model that reads
`JAPAN_B8_HANDOFF.md` as live will hand her Japan work while she is on Vietnam.

**`Archive/` carries the label "nothing here is current."** That label is the entire job.

---

## ⛔ RED LINES

- **`git mv` only.** The DELETE list in §3 is the *only* thing that is removed, and it is four items.
- **Do not touch `sections/`** except the one file named in §4. Nothing the app loads changes.
- **Do not touch `Images/`.** 270 MB, 1 867 files, resolved by recipe name at runtime. Out of scope.
- **Do not edit the CONTENT of any file.** This is a move operation. Not one line of any `.md` changes.
- **Do not decide** whether a ruling is current. That is Tina's. §5 is a REPORT, not an action.
- **ONE COMMIT PER SECTION** (§2, §3, §4), named. ⚖️ Law 5. Then **one push**.

---

## 🛑 STOP-CONDITION — STEP 1 IS READ, AND IT MAY END THE TASK

```bash
git pull
ls -1 reference | wc -l        # if this is already ~60, most of §2 is done
ls -1 Archive   | wc -l        # baseline: 111 before this brief
ls -1 | wc -l                  # repo root
```

**For every file named in §2 and §3: if it is not in `reference/`, it is already handled. Say so
and skip it. Do not go looking for it in `Archive/` to confirm — its absence IS the confirmation.**

If **all** of §2, §3 and §4 are already done: **write "TIDY ALREADY COMPLETE" plus the three counts
above, and STOP.** Do not invent extra tidying to justify the run.

---

## 📦 2 · MOVE TO `Archive/` — `git mv reference/<file> Archive/`

**Run each group as its own loop. Report per group: moved / already gone.**

### 2a · Japan — closed 50/50
```
JAPAN_B5_COLD_START.md
JAPAN_B7_COLD_START.md
JAPAN_B8_COLD_START.md
JAPAN_B8_HANDOFF.md
JAPAN_B9_COLD_START.md
JAPAN_B10_COLD_START.md
JAPAN_B10_RESUME.md
JAPAN_BATCH3.mermaid
```

### 2b · Indonesia — closed 42
```
INDONESIA_B1_COLD_START.md
INDONESIA_B2_COLD_START.md
INDONESIA_B3_COLD_START.md
PROGRESS_BLOCK_INDONESIA_B1.md
```

### 2c · Progress blocks already merged into `ASIA_PROGRESS.md`
⚠️ **VERIFY BEFORE MOVING.** These are paste-in blocks. For each, grep a distinctive line from it
against `reference/ASIA_PROGRESS.md`. **If the content is NOT found in ASIA_PROGRESS.md, DO NOT
MOVE IT — report it as UNMERGED instead.** A paste-in block that was never pasted is not history.
```
ASIA_PROGRESS_RECORDS_23_25_AND_PUSH.md
ASIA_PROGRESS_RECORDS_26_ONWARD.md
ASIA_PROGRESS_RECORD_42_AND_CLOSE.md
THAILAND_B1_PROGRESS_BLOCK.md
PROGRESS_BLOCK_LEMONGRASS_AND_LEMON.md
```

### 2d · Dated session documents
```
HANDOFF_27JUL.md
FIX_SESSION_30JUL.md
SESSION_03AUG2026.mermaid
HANDOVER_6AUG.mermaid
FMF_SESSION_CLOSE_6AUG.md
COLD_START_EDITS_6AUG.md
FABLE_SESSION_BRIEF.md
FABLE_SESSION_PROMPTS.md
```

### 2e · Ruling blocks CONFIRMED merged into `TINZA_RULINGS.md`
⚠️ **VERIFY EACH ONE FIRST** — grep the ruling number in `TINZA_RULINGS.md`. All five were confirmed
present on 10 Aug. **If a grep comes back empty, DO NOT MOVE — report it as STRANDED.**
```
RULING_27_AMENDMENT.md                     → §27
RULING_29_STAPLES_AS_INGREDIENTS.md        → §29
RULING_30_COSTPP_AND_PRICE_REFRESH.md      → §30
RULING_31_COSTING_DIRECTION.md             → §31
RULING_32_THE_TWO_LEDGERS.md               → §32
```

### 🩸 2e-STOP · TWO FILES THAT MUST **NOT** MOVE
```
RULING_34_35_OIL_AND_MAKE_IT_YOURSELF.md
RULING_38_DRAINED_WEIGHT.md
```
**§34, §35 and §38 are ABSENT from `TINZA_RULINGS.md`.** These rulings are live — Tina works to
drained weight daily — but the canonical file every AI reads via `/rule` does not carry them.
**Leave both in `reference/`. Report them. Tina merges them, or rules otherwise.**
*If you archive these, drained weight silently stops existing for the next model.*

### 2f · The MF backlog — **the line is at 152**
Move every `reference/MF*` file whose number is **151 or lower** (this includes `MF78`).
**Keep every `MF152` and above** — `MF152_ASIA_PRICE_KEYS.md` is the live running price list and
`MF178_CHA_LUA_AUTHORING.md` is tonight's record.

⚠️ **`MF153` – `MF167`: DO NOT MOVE. REPORT ONLY.** Some may still be open. List them with their
first heading line so Tina can call it in one pass.

⚠️ Sort by the **numeric** part, not the string — `MF78` must not be read as greater than `MF151`.

### 2g · Misfiled — not in `reference/`
```
git mv standards/MF142_PRICE_DB_GAP_AUDIT.md  reference/
git mv standards/MF_VERIFY_TWO_FACTS.md       reference/
git mv Tools/TINZA_ROADMAP.mermaid            reference/
git mv Tools/TINZA_PHOTO_STUDIO_UPDATE.md     Archive/
```
*A brief is not a standard.* ⚖️ **A STANDARD IS FOREVER. A BRIEF IS FOR A DAY.**
`standards/TINZA_CODE_HANDOFF.md` **stays** — it answers a question forever.

**COMMIT:** `tidy: archive closed-lane briefs and spent progress blocks`

---

## 🗑️ 3 · DELETE — the only four

```
reference/vietnam-batch4-FULL.js     ← a batch file is a SPENT INPUT. Vietnam is at 25.
sections/photo-audit.FIXED.js        ← never loaded by index.html. Tools/photo-audit.js is the real one.
ASIA_LEDGER.json     (REPO ROOT)     ← duplicate. reference/ is the live one.
PRICE_LEDGER.json    (REPO ROOT)     ← duplicate, and 8 KB BEHIND reference/. A stale decoy.
```

🩸 **BEFORE deleting either root ledger: `diff` it against `reference/`.** If the ROOT copy contains
a key the `reference/` copy does not, **STOP and report it** — that would mean an edit landed in the
dead file and must be rescued first. `merge.js:348` and `priceledger.js:41` both resolve to
`reference/`, so a root ledger is a **dead watcher** — it fails silently and prints a healthy line.

**COMMIT:** `tidy: delete spent batch file and duplicate root ledgers`

---

## 🔌 4 · ONE REAL BUG, NOT A TIDY ITEM

`sections/core.js:3802` reads:
```js
if(typeof MAKEABLE !== 'undefined'){ ... }
```
`index.html` **never loads `sections/makeable.js`**. So `MAKEABLE` is permanently undefined and the
entire MF26 makeable-cross-link block is dead code. No error. No console warning. It has simply
never run.

**DO NOT GUESS WHICH WAY TO FIX IT.** Establish the facts and report:
1. Does `sections/makeable.js` define `MAKEABLE` as a **global** (`var MAKEABLE` / `window.MAKEABLE`)?
2. How many keys does it hold?
3. Do those keys resolve to real recipes today, or has it drifted? (Parse. **Never regex.**)
4. If the script tag were added, how many cross-links would appear?

**Then STOP.** Adding a script tag to `index.html` changes what every user loads. **That is Tina's
call, and her finger closes it.** ⚖️ Law 2.

Same treatment for **`sections/bakes_additions.js`** — also unloaded, and there is no `bakes.js`
at all. Bakes is the template room (⚖️ Law 49). **Report where Bakes actually lives. Change nothing.**

**COMMIT:** none for §4 — it is a report.

---

## 📋 5 · WHAT YOU HAND BACK

1. **The three counts**, before and after: `reference/` · `Archive/` · repo root.
2. **Per group in §2:** moved / already gone / **held back and why**.
3. **The UNMERGED list** from 2c, if any.
4. **The STRANDED list** from 2e — expected to contain `§34`, `§35`, `§38`.
5. **The `MF153`–`MF167` list**, each with its first heading line.
6. **The §4 facts.** Facts only. No fix.
7. **A destination table**: every file you touched → its exact new path.

---

## ✅ THE PROOF — what Tina does, and what she must see

```bash
node --check sections/core.js          # nothing in sections/ changed, so this must still pass
node tinza-doctor.js                   # RED count MUST NOT HAVE GROWN   ⚖️ Law 51
node tinza-census.js                   # the recipe count MUST BE IDENTICAL
node merge.js vietnam <any batch>      # must find reference/ASIA_LEDGER.json and gate on count-and-hash
node priceledger.js --ask salt         # must answer from reference/PRICE_LEDGER.json
```

Then **open https://tinza.netlify.app and hard-reload.** ⚖️ Law 27.
**The app must be byte-for-byte unchanged in behaviour. This brief moves documents, not code.**

⚖️ **Law 42 — THE RATCHET.** Add one check to `tinza-doctor.js` before you close this out:
**a ledger `.json` present in the repo ROOT is RED.** That is the bug that caused this whole
section, and it must never be able to happen quietly again.
