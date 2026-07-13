# BUG_STANDARD.md
## The `/bug` protocol · Tinza · v1 · 13 July 2026

**Trigger: `/bug`** — apply this file, exactly, in order.
Same shape as `/wow` → `WOW_STANDARD.md`.

---

## ⚖️ LAW 42 — THE RATCHET

> **EVERY BUG YOU CLOSE ADDS A CHECK TO THE DOCTOR.**
> **The doctor only ever grows. What was caught once can never walk in again.**

You will never "find all the bugs." That is not the goal, and chasing it is why
three days feel like three months.

**The goal is that no bug comes back TWICE.**

Hunting has no finish line. A gate does.

---

## THE THREE LAYERS — and what each one CANNOT do

| | Catches | Blind to |
|---|---|---|
| 🩺 **`node tinza-doctor.js`** | **STRUCTURE + BEHAVIOUR.** Files not loaded · syntax · mojibake · inputs under 16px · broken image paths · external dependencies · rooms not on v33 · duplicate recipes · food missing from the index · **and it CALLS every function to see what falls over.** | Beauty. Feel. "Does this make sense to a person." |
| 🖥️ **The browser console, on live** | Runtime reality. 404s. SSL. What the *actual* device does. | Anything that fails silently. |
| 👆 **Tina's fingers, on live** | Everything that matters. | Nothing. **⚖️ Law 2 — her fingers close the bug. Nothing else does.** |

**None of them replaces the others. Run all three.**

---

## THE PROTOCOL

### 0 · GATE
```
node tinza-doctor.js
```
🔴 **RED → fix it. Do not push. Do not start new work.**
🟢 **GREEN → you may push. You may start new work.**

The doctor is **read-only**. It writes nothing. It cannot break anything.
Run it **before every push** and **at the start of every session**.

### 1 · READ  ⚖️ Law 35
> **Step 1 is READ — and it is allowed to END THE TASK.**

Go and look at the actual line. Do not trust the brief. Do not trust the flowchart.
**Do not trust a grep** — ⚖️ **Law 39: a tool result is also a hypothesis. Cross-check it with your eyes.**

**Every brief ships with a stop-condition:**
> *"If X already exists — SAY SO AND STOP."*

*(This has ended five tasks with zero lines written. It is the cheapest bug-close there is.)*

### 2 · REPRODUCE IT IN NODE — before you write a fix
The whole app boots in Node. 29 files. 2083 recipes. Five seconds.
**If you cannot make the bug happen on demand, you do not understand it yet, and you may not fix it.**

*(MF77 — the eternal spinner — was reproduced in 5 seconds this way, with no tablet and no hard reload.)*

### 3 · MEASURE — never guess  ⚖️ Law 4
> **Ask "WHAT IS NOT GUARDED?" — never "is X guarded?"**

⚖️ **Law 22 — the brief is a HYPOTHESIS, not evidence.**
It fired on Claude **sixteen times** on 13 July. Not one became code. **That is the system working.**
The worst: *"delete search.js"* — that file holds every recipe name in the app.

⚖️ **Law 36 — MEASURE THE CEILING BEFORE YOU REMOVE A LIMIT.**
*(Uncapping the search would have rebuilt ~10,000 DOM nodes on every keystroke, on a tablet.)*

### 4 · ONE THING. ONE COMMIT. AND GIVE IT A NAME.  ⚖️ Law 5
`"skin"` tells October-Tina nothing when she has to roll back at midnight.

### 5 · PROOF  ⚖️ Law 2
> **The doctor goes green** — *and* — **Tina's finger, on live, on her own tablet.**
>
> A report is not proof. `localhost` is not live. Deployed is not published.
> ⚖️ **Law 27 — PUBLISHED ≠ what her browser is actually running.** Hard-reload first.

### 6 · THE RATCHET  ⚖️ Law 42
**Before the bug is closed: add a check to the doctor that would have caught it.**

If you cannot write that check, the bug is not understood — go back to step 1.

---

## HOW TO BRIEF CODE

❌ **NEVER:** *"look for bugs"* — an instruction with no end. He will hunt forever and you will read forever.

✅ **ALWAYS:**
> **"Run `node tinza-doctor.js`. Fix what is RED. Stop when it is GREEN."**

That is a **task**. It has an end. It can be finished.

---

## WHAT THE DOCTOR CHECKS TODAY  *(every one of these caught a real bug)*

| # | Check | Caught |
|---|---|---|
| 1 | Every file parses · no zero-byte files | *the spice.js trap* |
| 2 | Every `sections/*.js` is loaded by index.html | **`makeable.js` · `bakes_additions.js`** |
| 3 | The app boots · `allRecipes()` returns 2083 | *the whole index* |
| 4 | **SMOKE TEST — call every function, await every promise** | 🎯 **MF77 — `WK_RECIPES is not defined`** |
| 5 | No mojibake | **MF70 — `wk_europe.js`, 7786 breaks** |
| 6 | Every text input ≥16px | **MF76 — the flickering comma** |
| 7 | Every image path exists · no external URLs | **MF52 — the 404s + the SSL error** |
| 8 | Every room uses `sectionHeader()` · no fake search pills | **MF63 · spice never migrated to v33** |
| 9 | No duplicates · every recipe has a name and food | **MF85 · MF86 — 205 recipes with no ingredients** |
| 10 | No live paid AI · no tier switcher in the DOM | **MF78 · the October blocker** |

---

## ⚖️ THE LAWS THIS PROTOCOL RESTS ON

- **2** · A report is not proof. **Tina's fingers on live close it.**
- **3** · **Silent wrong is worse than loud missing.**
- **4** · Ask what is NOT guarded — never "is X guarded?"
- **5** · One thing per commit. **And give the commit a name.**
- **6** · Don't patch N sites. **Build the one thing they should all call.**
- **22** · 🩸 **The brief is a hypothesis, not evidence.**
- **35** · 🏆 **Step 1 is READ, and it is allowed to end the task.**
- **36** · The count is truth. Measure the ceiling before you remove a limit.
- **39** · 🏆 **A tool result is also a hypothesis. Cross-check it with your eyes.**
- **40** · `|| []` does not catch a name that was never declared. **It throws** — and an async
  throw does not crash, it **vanishes**, and the spinner spins forever.
- **41** · **A match of 2-of-4 is not a match. It is a coincidence.** The threshold is the feature.
- **42** · 🆕 🏆 **THE RATCHET. Every bug you close adds a check. The doctor only grows.**
