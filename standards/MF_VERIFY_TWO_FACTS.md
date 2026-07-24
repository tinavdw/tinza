# MF___ · VERIFY TWO FACTS — **READ-ONLY. RULE NOTHING. EDIT NOTHING.**

> **For: Code.** **From: Claude (architecture).** **Assign the MF number, Tina.**
> Census already settled two of the four original questions (load-shedding is unbuilt; the slot
> vocabulary is intact, `unknown` still 0). **Only these two remain.** Confirm each against the
> live code, report the fact + where you found it, and STOP.

---

## ⛔ RED LINES
- **Edit nothing. Move nothing. Rename nothing. Rule nothing.**
- Report only what the code **IS** — a fact plus its evidence (file:line or a count).
- If a question is answered the moment you look — **write the answer and stop that item.**

---

## 🔎 FACT 3 · MOODS — is it 12 or 13 in the code?
Tina ruled 24 Jul: **the vocabulary stays 12.** The old "sweet splits → 13" note is struck.
This is a CONFIRMATION, not a decision — verify the code already matches the ruling.
- In `sections/core.js`, find the `MOODS` array (near line 1439) and `MOOD_DB` (near 1447).
- Count the moods actually defined. List their ids.
- **REPORT:** exact count + the id list. Flag if anything other than 12 exists, or if a 13th
  "sweet & savoury supper" mood is present in code. (Claude's grep couldn't parse the array shape —
  that's why a human-run confirmation is worth it.)

## 🔎 FACT 4 · THE 3 UNLOADED FILES — orphan, or loaded some other way?
`index.html` does not `<script src>` these three:
`bakes_additions.js` · `makeable.js` · `photo-audit.FIXED.js`
- For EACH: is it imported, required, concatenated, or referenced anywhere (other `.js`, a build
  step, a dynamic loader)? Or is it a true orphan?
- **REPORT:** per file — LOADED-elsewhere (say where) / ORPHAN (safe to move to `Archive/`) / UNSURE (why).

---

## ✅ WHAT YOU HAND BACK
Two numbered facts, each with evidence. **No recommendations, no edits, no rulings.** Shape:

```
3 · MOODS — 12 in code. MOODS = [exhausted, pickmeup, sick, impress, healthy, quick, lazy, fussy,
    cold, sweet, adventurous, celebrating]. No 13th mood. Matches the ruling.
4 · bakes_additions.js → ORPHAN.  makeable.js → LOADED by <file:line>.  photo-audit.FIXED.js → ORPHAN (a tool, wrong folder).
```

Then Tina decides what to move. **That is the handoff. Stop there.**
