# VIETNAM — OPEN THE NEXT CHAT WITH THIS
**Written 6 Aug 2026, afternoon. HEAD: `19692ed`, pushed, walked green by Tina.**

> ⚠️ **NO LINE NUMBERS. Every anchor is a SYMBOL.** ⚖️ RUNG 1f.
> 📌 *Twice this week a brief named the wrong file and the symbol was right. **Trust the symbol.***

---

## 0 · WHERE THE ROOF STANDS — DO NOT REOPEN ANY OF THIS

| commit | what |
|---|---|
| `2be7e02` | **MF172** — double emoji deleted · `See my Plan →` conditional · **rung 18** |
| `19692ed` | **MF173** — `draw()` stops emptying `wkPlan` · **rung 19** |

**Closed by finger, 6 Aug:** ENTRY 11 (nothing persists any plan) · PROOF 2 · ENTRY 12 (`wkPlan` theft).
**Gates at close:** doctor **RED 10** · lawcheck **DRIFT SCORE 0** · rungs 16 · 17 · 18 · 19 all green.

⛔ **The roof session is OVER. This is a CONTENT session.** If a UI bug appears, **write it down and keep authoring.** ⚖️ Law 5 — one thing per commit, and this commit is Vietnam.

---

## 1 · 🩺 START OF SESSION

```
node tinza-doctor.js       ← RED or GREEN. Expect RED 10. 11 → STOP.
node tinza-census.js       ← the number.
node tinza-lawcheck.js     ← DRIFT SCORE. Expect 0.
node tinza-all.js          ← ⭐ /all — Law 62. Fires all six standards.
```

⚖️ **LAW 51 — the doctor's RED is a BASELINE, not a gate.** Count before, count after. Still 10 → push.

⛔ **`/all` is not optional and not a shortcut.** It exists because eleven Indonesian records were banked with `/wk` never fired once. `/wow` was remembered; `/wk` was not.
⚖️ **It prints `/rule` and `/bug` as JUDGEMENT REQUIRED every run.** Read them yourself.

---

## 2 · ⚠️ STEP ZERO — THE DOCUMENTS ARE STALE. FIX THEM FIRST.

**Measured on the live grid, 6 Aug afternoon — South-eastern Asia:**

| country | dishes |
|---|---|
| Indonesia | **42** — closed under A1 |
| Thailand | **38** — open |
| **Vietnam** | **11** — open, wired, rendering |

🩸 **`FMF_SESSION_CLOSE_6AUG.md` says `wk_thailand.js` is EMPTY. It holds 38.** That file is stale in two places (MF172 and Thailand) and goes to `Archive/`.

**Do this before authoring one word:**
1. Confirm those three numbers from `tinza-census.js`.
2. **Correct every document that disagrees** — `ASIA_PROGRESS.md` and anything else carrying a count.
3. **Say which documents were wrong and what they said.**

⚖️ **A stale number that still looks authoritative is this project's most expensive recurring bug** — the China 23/50 evening, `ASIA_PROGRESS.md` reading 77, memory holding "Indonesia 6/50". **`/all` cannot go stale because its count is read at runtime. Documents can.**

---

## 3 · 🇻🇳 THE TASK — GROW VIETNAM FROM 11

### ⛔ THIS IS NOT A COLD START
**The Vietnam lane is already OPEN**: `wk_vietnam.js` holds 11 records, all three lines wired including `WK_COUNTRY_GEO`, rendering live on the South-eastern Asia grid.
📌 **`reference/THAILAND_COLD_START.md` is the WRONG template.** It opens a lane. This session continues one.

### ⚖️ STEP 1 IS READ — AND IT IS ALLOWED TO END THE TASK
**Read all 11 existing Vietnam records BEFORE authoring the 12th.** Report:
- which 11 dishes are banked
- what is already covered by course, region and technique
- **any record that would not pass `/wow` or `/wk` today** — an old record below standard is worth more than a new one above it
- any `PRICE_DB` gap the existing 11 already exposed

**Then propose B1 as a dish list, with reasons. Do not author until Tina rules on the list.**

### ⚖️ THE RULINGS THAT BIND CONTENT AUTHORING

| ruling | what it means here |
|---|---|
| **A1** | **50 is a TARGET, not a gate.** Indonesia closed valid at 42. Never pad to reach a number. |
| **A7** | **Defer a missing price. NEVER author a wrong one.** *(chilli oil R490 is the one exception ever taken.)* |
| **§26** | Diet lives on the **version**. The record's diet is a **derived union**. |
| **§29** | Staple-as-ingredient: keyed **only** if a real bought product fills the slot. |
| **§30.1** | `costPP` is **DERIVED from the engine, never authored.** Use `costcheck.js`. |
| **§31.3a/b/c** | Retained equipment stays **out** of `costPP`. Consumed items priced per unit. |
| **§33 · §33.8** | **SA words are EXPLAINED, never translated away.** A word with no English equivalent gets an **explanation**, not a near-miss translation. |
| **§34** | A flavour-carrying oil is an **ingredient**, not a solvent. *(peanut oil, ruled.)* |

### 🧰 THE WATCHERS — THEY LOAD THE APP'S OWN ENGINE, NEVER REIMPLEMENT IT
`pricecheck.js` · `wowcheck.js` · `costcheck.js` · `tinza-all.js` · `tinza-echo.js`
⚖️ **A runner with a private copy of the checklist is a seventh standard that drifts from the other six.**

```
node tinza-all.js vietnam                 # the whole country file
node tinza-all.js vietnam batch01.js      # a batch BEFORE it is merged
```

### 💰 THE PRICES ALREADY EXIST. LOOK THEM UP.

🩸 **TINA HAS ALREADY SUPPLIED THE PRICES — SEVERAL OF THEM MORE THAN ONCE.**
⛔ **DO NOT ASK HER FOR A PRICE BEFORE YOU HAVE LOOKED.** They live in `PRICE_DB` and in `reference/`. ⚖️ **Law 22 — the repo is the end of guessing.**

**The order, every time:**
1. **Grep `PRICE_DB`** for the exact product name.
2. **Not there? Grep `reference/`** — a price she gave may be banked there and not yet keyed.
3. **Still nothing? Run `pricecheck.js`** — it loads the app's own pricing engine in a vm sandbox and **never reimplements it.**
4. **Only then**, if it is genuinely absent everywhere: **defer under A7 and say so.** ⚖️ **A7 defers. It never invents, and it never asks twice.**

⚠️ **A name miss is not a missing price.** Most "missing" prices are the wrong string, not an absent product — that is what the landmine list below is made of. **Search variants before concluding absence.**

### 💣 THE LANDMINES — ALREADY PAID FOR, DO NOT REDISCOVER
- **tuna steak ≠ tuna** · **crab sticks ≠ crab**
- **pickled ginger** — spelling matters, check `PRICE_DB` exactly
- **neutral oil** — absent and unaliased
- **glutinous rice flour** → resolves to rice R27. ⛔ **Unresolved. Japan mochi still blocked.**
- **chai poh** — sourced R118/kg, **deferred under A7**
- **yard-long beans** — ruled **NOT-IN-SA**
- **peanut oil** — ruled a **§34 exception**: flavour-carrying oil is an ingredient, not a solvent

⚠️ **Vietnam's likely candidates** — fish sauce, rice paper, rice vermicelli, Vietnamese mint, banh mi rolls. **Look each one up by the four steps above.** Report what you found and where you found it, **not what you want her to confirm.**

📌 **If a price is genuinely absent, list every absent item ONCE, at the end, in a single block** — not scattered through the session. She answers a list. She should never answer the same item twice.

### 🩸 THE ROOT — WHY SHE KEEPS BEING ASKED TWICE

**A price given in a chat and used in a record is not banked anywhere.** It works that session and evaporates. Three sessions later the next person greps `PRICE_DB`, finds nothing, and asks her again. **She has answered some items three times.**

⚖️ **A PRICE SHE GIVES IS AN ANSWER. AN ANSWER GETS FILED, OR IT WAS NEVER RECEIVED.**

**The rule, from this session on:**
- **Every price Tina gives in a session is written down before that session closes** — into `PRICE_DB` if it keys cleanly, otherwise into `reference/` with the date and her exact wording.
- **A ruling counts as an answer too.** *yard-long beans NOT-IN-SA* · *chai poh R118/kg deferred under A7* · *peanut oil is a §34 exception* — those are filed so nobody re-opens them. **Every future NOT-IN-SA and every A7 deferral gets the same treatment.**
- ⛔ **The session does not close until this is done.** It is a checklist item in §6, not a nice-to-have.

📌 **Ask Code to propose a doctor rung for this** — *no record may reference an ingredient whose price is neither in `PRICE_DB` nor recorded as deferred/NOT-IN-SA in `reference/`.* Born-RED both ways. ⚖️ **Law 42 — the bugs do not stop, the walls get higher.** **Propose it. Do not build it in the same commit as content.**

### 🛒 INGREDIENT STANDARD — CLAUDE.md §7
Name = **what you BUY**, matching `PRICE_DB` · amount = weight + pack hint · **one ingredient per line, no `+`** · prep goes in the METHOD, never the name.

---

## 4 · 📋 EVERY BRIEF SHIPS WITH FOUR THINGS ⚖️ Law 35
1. **A STOP-CONDITION** — *"if X is already true, SAY SO AND STOP."*
2. **THE RED LINES** — what must NOT be touched, and why.
3. **THE EXACT CHANGE** — measured, named by symbol.
4. **THE PROOF** — what Tina taps, and what she must see. ⚖️ **Law 2.**

---

## 5 · ⛔ RED LINES FOR THIS SESSION
- ⛔ **No UI fixes.** ENTRY 13, ENTRY 6, BUG 7, ENTRY 14 are filed and waiting.
- ⛔ **Do not touch the portion collision.** `wkPlan` stores `{id, servings}`; the shared-renderer family stores `serves:1`. **Two live conventions. Its own session.**
- ⛔ **Do not build the app-wide floating My Plan.** Parked 11 Jul. Eleven stores, four item shapes.
- ⛔ **Do not delete `wkPlanClearAll()`.** Dead code, filed, one thing per commit.
- ⛔ **Do not touch `japan-nukazuke` costPP** — ruling-set §31.3c, **excluded from all sweeps.**
- ⛔ **Do not open Thailand.** It sits at 38 and stays there this session. **Vietnam, then Italy.**
- ⛔ **DO NOT ASK TINA FOR A PRICE SHE HAS ALREADY GIVEN.** Grep `PRICE_DB`, then `reference/`, then run `pricecheck.js`. **Asking before looking is a Law 22 violation.** If it truly is not there, it goes in the single absent-items block at the end — once.

### 🚧 STANDING CONTENT BLOCKS
**Purin** blocked (egg closed at 3) · **Kakigori** blocked (no SA shaver, collides with Anmitsu) · **Japan mochi** blocked (glutinous rice flour unresolved).

---

## 6 · 🚀 CLOSING THE SESSION
1. `node --check` every changed file. ⚠️ *It proves the file parses. It proves NOTHING else.* ⚖️ Law 1.
2. Doctor RED count **has not grown.** ⚖️ Law 51.
3. `node tinza-all.js vietnam` — green.
4. **ONE THING PER COMMIT. NAME THE COMMIT.** ⚖️ Law 5.
5. **Tina pushes from GitHub Desktop.** ⚠️ Code has no git credentials — it fails every time. Don't retry it.
6. 🚨 **HARD RELOAD after Netlify deploys.** ⚖️ Law 27.
7. **Write the session-close. Move the old one to `Archive/`.** 🩸 *When the commit is green, the brief is history.*
8. **Update the count in every document that carries one.** ⚖️ Step zero exists because this step got skipped before.
9. 💰 **BANK EVERY PRICE SHE GAVE THIS SESSION** — into `PRICE_DB`, or into `reference/` with the date and her wording. Same for every NOT-IN-SA ruling and every A7 deferral. ⛔ **The session is not closed until this is done.** 🩸 *This is why she has answered some items three times.*

---

## 7 · ⏭️ AFTER VIETNAM
**Italy.** Then Thailand's remaining 12 to a close, if A1 allows it honestly.

---

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**
