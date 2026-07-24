# MF___ · VERIFY THE STRANDED RULINGS — **FACTS ONLY, RULE NOTHING**

> **For: Code.** **From: Claude (architecture).** **Assign the MF number, Tina.**
> **This is a VERIFICATION brief. Read-only. You EDIT NOTHING, MERGE NOTHING, RULE NOTHING.**
> Your job is to tell Tina what is TRUE in the live code, so she rules on facts and not on a grep.

---

## 🩸 WHY THIS EXISTS

`tinza-lawcheck.js` found a split-brain: **`Tools/TINZA_RULINGS.md`** holds three rulings that
are **absent from the canonical root `TINZA_RULINGS.md`** — the file every AI reads via `/rule`.
Before anything is merged or deleted, Tina must rule keep/merge/drop on each. **She can only rule
well if the facts are certain.** Claude checked by grep; grep can miss a differently-named build.
**You check against the live code and census. Then you STOP.**

---

## ⛔ RED LINES

- **Do not edit, move, merge, or delete ANY file.** Not the rulings, not the code.
- **Do not decide** whether a ruling is "current." That is Tina's, not yours.
- **Report only what the code IS.** Every answer is a fact + where you found it (file:line or a count).
- If a question is already answered the moment you run the command — **write the answer and stop that item.**

---

## 🔎 THE FOUR FACTS TO ESTABLISH

### 1 · LOAD-SHEDDING — is it built, at all, under any name?
The Tools ruling claims `noPower` = "no oven/grill/air-fryer," ~1,197 recipes qualify, a Pro filter.
Claude's grep found **0** code references. Confirm or break that.
- Search the whole `sections/` tree for: `noPower`, `loadshed`, `load.?shed`, `no.?power`, `powercut`, `eskom`.
- Is there ANY recipe field, filter function, or UI toggle that means "cook without electricity"?
- **REPORT:** built / partially built / not built at all — with file:line if anything exists, or "0 hits across sections/" if not.

### 2 · SLOT 10-TOKEN TABLE — does live data match the Tools ruling?
The Tools §14 table lists exact counts (SUPPER 837 · TREAT 336 · CONDIMENT 217 · SIDE 210 · DRINK 119 ·
STARTER 115 · LUNCH 106 · BREAKFAST 63 · PETFOOD 62 · BABYFOOD 18 · unknown 0).
- Run `node tinza-census.js`. Find the slot/token distribution it reports today.
- **REPORT:** the live token list + counts, side by side with the table above. Do the token NAMES still match? Is `unknown` still 0? (Exact counts will have drifted — that's fine; we care whether the VOCABULARY and the zero-unknown invariant still hold.)

### 3 · MOODS — is it 12 or 13 in the code?
The Tools ruling has a note: "sweet splits in two → 13 moods." Tina's settled vocabulary is 12.
- In `core.js`, find `MOODS` / `MOOD_DB` (~line 1439–1447 per the ruling). Count the moods actually defined.
- Is there a 13th "sweet & savoury supper" mood, or just 12 with one `sweet`?
- **REPORT:** the exact count and the list of mood ids as they exist in code today.

### 4 · THE 3 UNLOADED FILES — dead, or loaded some other way?
`index.html` does not `<script src>` these three: `bakes_additions.js`, `makeable.js`, `photo-audit.FIXED.js`.
- For each: is it imported, concatenated, required, or referenced ANYWHERE (other .js, build step, a dynamic loader)? Or is it an orphan?
- **REPORT:** for each file — LOADED-elsewhere (where) / ORPHAN (safe to Archive) / UNSURE (why).

---

## ✅ WHAT YOU HAND BACK

A short report — four numbered answers, each a fact with its evidence. **No recommendations, no merges, no rulings.** Example shape:

```
1 · LOAD-SHEDDING — not built. 0 hits for noPower/loadshed/eskom across sections/. No filter, no field, no toggle.
2 · SLOT — vocabulary matches: all 10 tokens present, unknown still 0 (census today: SUPPER 841, TREAT 338, ...).
3 · MOODS — 12 in code. MOODS = [exhausted, pickmeup, ... celebrating]. No 13th sweet-savoury mood exists.
4 · bakes_additions.js → ORPHAN. makeable.js → LOADED by X. photo-audit.FIXED.js → ORPHAN (a tool, wrong folder).
```

Then Tina reads four facts and rules keep/merge/drop on each. **That is the handoff. Stop there.**
