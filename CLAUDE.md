# CLAUDE.md — Tinza · **THE FRONT DOOR**

> Repo: `tinavdw/tinza` · Live: **https://tinza.netlify.app** · Vanilla JS · modular `sections/` + shared `core.js`.
> **The repo is PUBLIC. Clone it. Read it. Run it. THE REPO IS THE END OF GUESSING.** ⚖️ **Law 22.**

---

# 🚦 0 · READ THESE TWO FILES BEFORE YOU TOUCH ANYTHING

| file | trigger | what it is |
|---|---|---|
| 📕 **`TINZA_LAW.md`** | **`/law`** | **HOW WE WORK.** 59 laws, highest number 63. Every one was paid for. |
| 📗 **`TINZA_RULINGS.md`** | **`/rule`** | **WHAT TINZA IS.** Every decision Tina has made — with the date and the reason. |

## ⛔ IF THOSE FILES AND THE CODE DISAGREE — **THE FILE IS RIGHT AND THE CODE IS A BUG.**

🩸 **This file used to carry rules of its own. It said "Pro = R50 (FINAL)" for two weeks after
Tina ruled R90. It said "copy Braai v33" after Braai became the worst room in the app.
It told every AI, every session, to do the wrong thing.**
✅ **It carries no rulings any more. It POINTS. That is all it does.** ⚖️ **Law 15 · Law 37.**

---

# 🩺 1 · HOW TO START A SESSION

```
node tinza-doctor.js      ← is the CODE broken?   RED or GREEN.  5 seconds. Read-only.
node tinza-census.js      ← how much of it is there?   A number.
node tinza-lawcheck.js    ← is the GOVERNANCE drifting?   A DRIFT SCORE. Read-only.
```

⚖️ **LAW 51 — THE DOCTOR'S RED IS A BASELINE, NOT A GATE.**
**Count BEFORE. Count AFTER. Still 10 → push. 11 → STOP.**
*(If you wait for GREEN you will never push.)*

⛔ **NEVER "look for bugs"** — that has no end.
✅ **"Run the doctor. Fix what is RED. Stop when the count has not grown."** — **a task with an end.** ⚖️ **Law 35.**

**Then:** open **`TINZA_NOW.mermaid`** — the board. *What is in flight, right now.*

---

# 🪞 2 · RULE ZERO — SAMENESS

**Every page looks and functions IDENTICALLY. Rooms differ only by photo + emoji.**
Uniformity comes **ONLY** from shared `core.js` functions using `var(--token)` — **never** hand-rolled markup, **never** a hardcoded hex.

- Shared builds roll to **ALL** sections at once.
- **If two sections differ, that is a BUG to close — not a style choice.**
- Shared renderers: `warmCard` · `recipeRow` · `qtyBox` · `sectionHeader` · `methodStep` · `crossLinkBox` · `goesWellBox` · `planDishRow` · `shoppingView` · `planView` · `recipePage` · `costLine` · `kcalChip` · `nutritionGrid` · `sectionPlanBtn` · `sectionPlanView`.

### 🏆 THE TEMPLATE IS **BAKES**. NOT BRAAI. ⚖️ **Law 49.**
⛔ **"Every section matches braai v33" is STRUCK.** *Braai — the old gold standard — is now the worst room in the app: cost 0% · diet 0% · time 0%. **Every section built "exactly like Braai" inherits its holes.***

### 🏆 SAMENESS IS **NOT** A COSMETIC PASS. **IT IS THE BUG LIST.** ⚖️ **Law 50.**
⛔ **"Cosmetic sweep LAST" is STRUCK.** *Do the sweep last and you fix each hole one room at a time, forever.*

---

# 🧱 3 · STABILITY (non-negotiable)

1. **Never edit a working section** unless that section IS the session's purpose.
2. **Start at https://tinza.netlify.app.** Confirm what works before changing anything.
3. **GitHub is the backup.** If something breaks, restore from the last commit.
4. **`node --check` before every push.** ⚠️ *It proves the file parses. It proves NOTHING else.* ⚖️ **Law 1.**
5. **Go into the ACTUAL live code.** Never trust a summary or a stale line number. ⚖️ **Law 22.**
6. **ONE THING PER COMMIT. AND NAME THE COMMIT.** ⚖️ **Law 5.**

---

# 🚀 4 · PUSH WORKFLOW (GitHub Desktop)

1. `node --check` each changed file.
2. **Show in Explorer** → drag the file into `sections/` → delete old → rename / Replace.
3. **Stage line-by-line.** One `reset:` key, one fix, one commit. **Four commits, ONE push.**
4. `LF→CRLF` warning is **harmless.**
5. **Netlify is credit-based** — batch validated files into one push.
6. 🚨 **The PWA service worker caches aggressively. HARD-RELOAD AFTER EVERY DEPLOY.** ⚖️ **Law 27 — published ≠ what her browser runs.**

📌 **PUSH RULE: "1 changed file" → PUSH. "0 changed files" → nothing to push. The screen never lies.**

---

# 🎨 5 · DESIGN SYSTEM (locked)

**Warm Spice. Ships LIGHT + DARK** *(dark = intentional night mode, not drift)*.

| use | token / hex | rule |
|---|---|---|
| Food-cost **text** | deeper green **`#46530c`** | **GREEN = FOOD COST ONLY** |
| Shop-spend **text** | deeper gold **`#876213`** | **GOLD = SHOP-SPEND ONLY** |
| Accent dots / chip fills | bright green `#c8e840` · bright gold `#f5c842` | **fills only, never text** |

⛔ **NEVER MIX GREEN AND GOLD MEANING.** Green = food cost. Gold = shop-spend. **Full stop.**

**Fonts:** **Mulish** = body/UI · **Fraunces** = h1/h2/h3/titles · **DM Mono** = numbers/chips.
⚖️ **Law 38 — a token card has no colour of its own. It INHERITS.**

---

# 🍖 6 · PORTION BRAIN (locked)

| | boneless | bone-in | fish | shellfish | veg | side |
|---|---|---|---|---|---|---|
| **everyday** | 180 g | 250 g | 160 g | — | 200 g | 150 g |
| **BRAAI tier** | **300 g** | **400 g** | **280 g** | **320 g** | — | — |

- `calcMeat` reads the **CUT** via `braaiBaseG` → `BRAAI_CUT` → `PORTION_BRAAI`. **NOT** per-meat `soloG`/`sharedG`.
- **Taper:** 1 = 100% · 2 = 70% · 3 = 58% · 4+ = 50% each. Then +10% buffer + appetite.
- **Excluded from taper:** Budget · Tiny · Furry · Anchor.

---

# 🛒 7 · INGREDIENT STANDARD

- **Name = what you BUY**, matching `PRICE_DB`.
- **Amount = weight (g/kg) + pack hint.**
- **One ingredient per line.** No `+` lines. *(Split "oil and butter" into two priceable items.)*
- **Prep goes in the METHOD, never in the name.**
- Same dish + same name → keep the most comprehensive. Same ingredients + different cultural names → **keep both.**

---

# 💰 8 · MONEY, TIERS, DIET, THE CHEF, THE PLANNER, WHAT SAVES

# ➡️ **NOT HERE. `TINZA_RULINGS.md`.** 📗

**This section used to hold them. It got them WRONG, for weeks, and nobody noticed —
because a document that is wrong is SILENT.** ⚖️ **Law 3.**
**One home. One date. One reason. `/rule`.**

---

# ✅ 9 · DEFINITION OF DONE

**A thing is not done because the code looks right. A thing is done when TINA'S FINGER SAYS SO.** ⚖️ **Law 2.**

- [ ] `node --check` passes on every changed file.
- [ ] **The doctor's RED count has NOT grown.** ⚖️ Law 51.
- [ ] **HARD RELOAD on live.** ⚖️ Law 27.
- [ ] **Tina performed the proof written in the brief, on her own device, and it did what the brief promised.**
- [ ] My Plan **survives**. Servings and people counts **survive**. ⚖️ Law 20 — *emptying her question is right. Emptying her WORK is theft.*
- [ ] **A new check was added to the doctor.** ⚖️ **Law 42 — THE RATCHET. The bugs do not stop. The walls get higher.**

---

# 📋 10 · EVERY BRIEF SHIPS WITH THESE FOUR THINGS ⚖️ Law 35

1. **A STOP-CONDITION** — *"if X is already true, SAY SO AND STOP."* **Step 1 is READ, and it is allowed to end the task.**
2. **THE RED LINES** — what must NOT be touched, and why.
3. **THE EXACT CHANGE** — measured, with the file and the line. **Not a description of a change.**
4. **THE PROOF** — what Tina taps, and what she must see. ⚖️ **Law 2.**

---

# 📚 11 · THE STANDARDS

| trigger | file | asks |
|---|---|---|
| **`/law`** | **`TINZA_LAW.md`** *(root)* | **How do we work?** |
| **`/rule`** | **`TINZA_RULINGS.md`** *(root)* | **What IS Tinza?** |
| **`/bug`** | `standards/BUG_STANDARD.md` | **How do we hunt?** |
| **`/wow`** | `standards/WOW_STANDARD.md` | **Is this recipe good enough?** |
| **`/tinza`** | `standards/TINZA_STANDARD.md` | **Does this sound like Tinza?** |
| **`/wk`** | `standards/TINZA_WK_STANDARD.md` | **World Kitchen content.** |
| ⭐ **`/all`** | **ALL SIX ABOVE, AT ONCE** | **Everything. Read them all, then work.** |

**WATCHERS:** `/law` → `tinza-lawcheck.js` · `/wow` + `/wk` → `wowcheck.js` · `/tinza` → `tinza-echo.js` · **`/rule` and `/bug` have none — they are judgement.**

### ⭐ `/all` — THE ONE TRIGGER (added 31 Jul 2026, ⚖️ **Law 62**)

> **Tina:** *"please put all in one command that I can just drop, something like / 6"*

**`/all` means: read all six files above and apply every one of them — without being asked twice.**
⛔ It is **not** a shortcut that skips them. It is the opposite: it removes the chance of firing
five and forgetting the sixth, **which is exactly how eleven Indonesian records were banked with
`/wk` never run once.** `/wow` was remembered. `/wk` was not.

**The mechanical half runs as one shell command:**

```
node tinza-all.js                     # /law + the six files exist where the triggers say
node tinza-all.js thailand            # + /wow and /wk over a whole country file
node tinza-all.js thailand batch01.js # + /wow and /wk over a batch BEFORE it is merged
```

It shells out to `tinza-lawcheck.js` and `wowcheck.js` — ⚖️ **it does not reimplement one single
standard**, same design law as `merge.js`, `pricecheck.js` and `costcheck.js`. A runner with a
private copy of the checklist is a **seventh standard that drifts from the other six.**

⚖️ **AND IT PRINTS WHAT IT DID NOT MEASURE.** **`/rule` and `/bug`** have no watcher and are pure
judgement. The tool lists them as **JUDGEMENT REQUIRED** every run rather than showing a tick
beside them. *A runner that showed six greens while measuring four would manufacture confidence,
which is worse than no runner at all.*

🆕 **`/tinza` GOT ITS WATCHER ON 31 JUL** — `tinza-echo.js`, built the same day Tina looked at the
JUDGEMENT REQUIRED list and said **"we need a watcher."** ⚖️ **Law 63.**

⚖️ **WHY `/all` AND NOT `/6`:** a number inside a name **goes stale the moment a seventh standard
lands**, and a stale number that still looks authoritative is this project's most expensive
recurring bug — the China 23/50 evening, `ASIA_PROGRESS.md` reading 77, memory holding
"Indonesia 6/50". `/all` cannot go stale. **The count is read from the table at runtime and
printed; it is never hardcoded into the name.**

**The board:** `TINZA_NOW.mermaid` *(root)* — **what is in flight, right now.**
*It carries no laws and no rulings any more. **It is a BOARD, not a library.***

### 📁 THE REPO, AFTER 14 JULY
```
sections/     the .js files the app loads — the loaded set is whatever index.html lists, nothing else.
standards/    the files that answer a question, FOREVER.
reference/    data that is still TRUE and gets looked up (prices, weights, photo maps).
Archive/      HISTORY. Every closed brief, every old board. Nothing here is current.
Tools/  Images/  netlify/
```
⚖️ **A STANDARD IS FOREVER. A BRIEF IS FOR A DAY.**
🩸 **WHEN THE COMMIT IS GREEN, THE BRIEF IS HISTORY. MOVE IT.**
⛔ **NEVER read anything in `Archive/` as if it were current.** *(It is where R50 went to die.)*

---

# 🇿🇦 12 · WHO THIS IS FOR

> **"Readable by a child and a grandma, on a mobile phone."**
> Quiet kitchen energy. **Sameness above all.** One shared renderer, so drift is impossible.
> **Tinza speaks English — but she understands Afrikaans.**
