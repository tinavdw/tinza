# ✂️ SPLIT_STANDARD.md — **HOW TINZA SPLITS A FILE WITHOUT LOSING ANYTHING**

**Written 10 Aug 2026 · trigger `/split`**

> ⚖️ **A STANDARD IS FOREVER.** This answers one question, permanently:
> **how do I split a file and PROVE nothing was lost?**
>
> 🩸 **It exists because the first split hurt.** When the monolithic `index.html` was broken into
> `sections/`, bugs arrived for weeks — load order, scope, things defined at the wrong moment. The
> lesson was never "don't split." It was **"a split with no proof is a rewrite in disguise."**

---

## ⚖️ LAW 64 · **A SPLIT IS A MOVE. THE MOMENT IT BECOMES A REWRITE, IT IS A DIFFERENT JOB WITH A DIFFERENT RISK.**

Cut and paste. Verbatim. **Not one word improved, tightened, reworded or "while we're in here".**
If something in the file is wrong, **fix it in its own commit, before or after — never during.**

🩸 **Why this is the whole standard:** a pure move can be proven by **arithmetic**. A move-plus-improvement
can only be proven by **reading**, and nobody reads 250 000 bytes carefully at midnight.

---

## 🚦 STEP 0 · WHICH KIND OF SPLIT IS THIS?

**The two kinds are not equally dangerous and must never be run the same way.**

| | 📄 **PROSE SPLIT** | ⚙️ **CODE SPLIT** |
|---|---|---|
| what | `.md`, `.json`, `.mermaid` | anything in `sections/`, any tool |
| who reads it | an AI, a person | **the browser, at runtime** |
| what can break | a rule goes missing | **load order · scope · undefined at call time · silent no-op** |
| proof | **arithmetic** — §2 | arithmetic **plus** §3 · **plus Tina's finger** ⚖️ Law 2 |
| how often needed | often | ⛔ **almost never — see §4** |

⚖️ **IF IT IS A PROSE SPLIT, §3 DOES NOT APPLY AND YOU DO NOT NEED IT.**
⛔ **IF IT IS A CODE SPLIT, §2 IS NOT ENOUGH ON ITS OWN.**

---

## 🧮 2 · THE FOUR ARITHMETIC PROOFS — **EVERY SPLIT, BOTH KINDS**

**All four are recorded BEFORE the split and re-run AFTER. A split with no BEFORE numbers cannot be proven and must be reverted.**

### 2a · BYTE CONSERVATION — the gate
```bash
git show HEAD:<file> | wc -c                 # BEFORE
wc -c <fileA> <fileB> ...                    # AFTER, every piece
```
**AFTER-total ≥ BEFORE.** It may exceed only by new headers and pointer lines.
🔴 **AFTER-total LESS than BEFORE = content was deleted or reworded. FAILED RUN. REVERT.**

### 2b · THE UNIT COUNT IS IDENTICAL
Pick the file's natural unit and count it on both sides. It must not change by one.

| file kind | the unit |
|---|---|
| `.md` | `grep -c "^## "` — top-level headings |
| `.json` | the key count, parsed — never grepped |
| a country `.js` | the record count, **evaluated** — never grepped |

⚖️ **Every unit keeps its heading in the CANONICAL file even when its whole body moves.**
That is what makes this countable. **A heading that leaves cannot be counted, and therefore cannot
be proven present.**

### 2c · THE ANCHOR GREPS — name them BEFORE you start
**Write down 5–10 load-bearing strings the file must still contain.** Not a sample — the things
that would hurt most if they vanished. Each must return **non-zero** afterwards.

*For `TINZA_RULINGS.md` these are:* `R90` · `drained` · `§3n` · `§3l` · `level 0` · `costPP` ·
`Halaal` · `diet:'unknown'`

🩸 **Choose them before the split, not after.** Anchors picked afterwards get chosen — unconsciously —
from what survived.

### 2d · NOTHING ELSE MOVED
```bash
git status        # ONLY the files this split was supposed to touch
```
🔴 **Any other file changed → revert.** A split does not tidy, rename, or reformat anything else.

---

## ⚙️ 3 · CODE SPLITS ONLY — THE FIVE EXTRA PROOFS

⛔ **A `.js` split is not done when it parses. It is done when Tina's finger says so.** ⚖️ Law 2.

### 3a · IT PARSES
```bash
node --check <every piece>
```
⚠️ **This proves the file parses. It proves NOTHING else.** ⚖️ Law 1.

### 3b · THE APP STILL LOADS EVERY PIECE — **THE ONE THAT BIT US**
Every new file needs its own `<script src="sections/…">` line in `index.html`, **and** whatever
registers it downstream.
🩸 **A country file needs THREE lines, not two** — the third is the `WK_COUNTRY_GEO` entry that once
nearly shipped **33 invisible recipes**: no error, no blank screen, no console warning.
```bash
# every sections/*.js on disk must appear in index.html, and vice versa
```
⚖️ **Rung 22 now checks this side of it automatically.** Run the doctor and read it.

### 3c · NOTHING BECAME UNDEFINED-AT-CALL-TIME
🩸 **The `MAKEABLE` shape:** `core.js` reads `if (typeof MAKEABLE !== 'undefined')`, `index.html`
never loaded `makeable.js`, and so the whole block did nothing — **silently, for thirteen months.**
**A `typeof x !== 'undefined'` guard converts a split mistake into a silent no-op.**
```bash
grep -rn "typeof [A-Z_]* !== 'undefined'" sections/
```
**For each hit: is the file that defines it actually loaded?**

### 3d · THE COUNTS DID NOT MOVE
```bash
node tinza-census.js      # recipe count IDENTICAL
node tinza-doctor.js      # RED count MUST NOT have grown   ⚖️ Law 51
```

### 3e · ⚖️ LAW 2 — TINA'S FINGER
**Hard-reload live** (⚖️ Law 27 — the service worker caches hard) and open **every room the split
touched.** ⛔ Not "it should be fine." **Opened, looked at, and the plan survived** (⚖️ Law 20).

---

## ⛔ 4 · WHEN NOT TO SPLIT

**Splitting is for files that are read into a context window. It is not for files that are big.**

- ⛔ **DO NOT split `sections/*.js` for size.** `meals.js` is ~474 000 tokens and `wk_europe.js`
  ~340 000. **No split makes those loadable, and they were never meant to be loaded.** Code greps
  them off disk; a grep costs ~200 tokens. **The cost was never the file — it was pasting the file.**
- ⛔ **DO NOT split a file that is already under ~10 000 tokens.** Two files with a pointer between
  them cost more attention than one clean file.
- ⛔ **DO NOT split to "tidy".** Splitting has a real failure mode. Tidiness is not a reason to
  accept one. `Archive/` is the answer to clutter.
- ✅ **DO split a file that is read every session and is mostly history.** That is the whole list.

### 🩸 THE RULE THAT MAKES MOST SPLITS UNNECESSARY
> **NEVER PASTE A `sections/*.js` FILE INTO A CHAT. EVER.**
> Code reads it off disk. Chat gets the answer, not the file.

---

## 🗂️ 5 · THE CUT — where the line goes in a prose split

**One question, applied to every section:**

> **Does a reader need this to know WHAT the rule is and WHY it exists?**
> **Yes → stays. No → it is a receipt, and receipts move.**

| ✅ **STAYS in the canonical file** | 📦 **MOVES to the evidence file** |
|---|---|
| the heading, the date, who ruled it | *"measured at HEAD"* / *"WHAT WAS ACTUALLY BROKEN"* |
| **THE RULE** | *"APPLIED <date>"* / *"KEYS CONFIRMED"* records |
| **THE REASON — always, no exception** | the **body** of anything ⛔ STRUCK *(leave the one-line strike)* |
| WHAT IT DOES NOT LICENSE | build records, MF pointers, census rungs |
| ordering rules between rules | long bug narratives, before/after code, file:line dumps |
| any list a tool or the app reads | per-record application logs |

🩸 **NEVER MOVE A REASON.** ⚖️ *A rule without its reason gets quietly reversed six weeks later.*
This is the single most tempting cut and it is always wrong.

**Every section that loses content gets exactly one line:**
```
> 📦 Evidence and build record: `<evidence file>` → §<N>
```
⛔ **One line. No summary of what moved.** A summary is a second copy, and a second copy drifts.

**The evidence file opens by disowning authority:**
> ⛔ **THIS FILE CARRIES NO RULES.** If it and the canonical file disagree, **the canonical file is right.**

⚖️ **`/rule`, `/law`, `/wow`, `/wk`, `/tinza`, `/bug` each resolve to EXACTLY ONE FILE, always.**
🔴 **If the next model has to read both halves, the split achieved nothing.**

---

## 📋 6 · THE HANDBACK

1. **The four arithmetic proofs**, BEFORE and AFTER, as a table.
2. **Per section: bytes before → bytes after.**
3. **Anything you could not classify — left in the canonical file, and listed.**
   ⚖️ **WHEN IN DOUBT, IT STAYS.** A receipt left behind costs tokens. A rule moved out costs Tina the rule.
4. **The destination table** — every file → its exact path.
5. **Code splits only:** the §3 proofs, and **what Tina must tap** ⚖️ Law 2.

---

## ⚖️ 7 · THE RATCHET — LAW 42

**Every split adds one doctor check: the thing that just grew, cannot grow back unnoticed.**

Already shipped from this family:
- **rung 20** — a ledger `.json` in the repo root is RED
- **rung 22** — anything parked in `sections/` the app never loads is AMBER
- **rung 21** *(MF183, written)* — the photo studio flags itself when a region goes out of sync

**Add on the next split:**
> **`TINZA_RULINGS.md` over 120 000 bytes is RED** — *"the canonical rulings file is growing back
> into a receipts file. Split the evidence out."*

🩸 **This file reached 63 000 tokens without anyone noticing, because a document that is too long is
SILENT.** ⚖️ Law 3. **A size ceiling is the only thing that makes length loud.**

---

## 📅 8 · THE QUEUE — biggest first, one per session

| # | file | now | after | kind |
|---|---|---|---|---|
| **1** | `TINZA_RULINGS.md` | **63 190 t** | ~22 000 | 📄 prose · **MF180 written** |
| **2** | `reference/ASIA_PROGRESS.md` | **43 758 t** | ~4 000 | 📄 prose ⚠️ **see below** |
| **3** | `reference/THAILAND_COLD_START.md` | **37 993 t** | ~9 000 | 📄 prose |
| **4** | `reference/FABLE_PROGRESS.md` | 20 530 t | ~5 000 | 📄 prose |
| **5** | `reference/MF152_ASIA_PRICE_KEYS.md` | 10 353 t | judgement | 📄 ⚠️ live lookup — **may be correct as is** |

⛔ **NO `.js` FILE IS ON THIS QUEUE.** See §4.

🩸 **#2 IS NOT A SPLIT — IT IS A REBUILD, THEN A SPLIT.** `ASIA_PROGRESS.md` stops at Japan record 42
and its scope table still reads *Japan 27 · Indonesia 0 · Thailand 0 · TOTAL 77* when the true figure
is ~205. Six paste-in blocks in `reference/` hold the missing content and **all twelve grep markers
came back empty** — they were written and never pasted. **Rebuild from those six first. Splitting a
stale file just makes two stale files.**

**Expected result once #1–#3 are done: a cold start drops from ~240 000 tokens to under 40 000.**
Same standards. Same discipline. Nothing lowered.
