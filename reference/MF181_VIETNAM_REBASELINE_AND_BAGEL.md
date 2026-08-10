# MF181 · REBASELINE VIETNAM · DELETE `bakes_additions.js`

> **For: Code.** **From: Claude (architecture).** **Written 10 Aug 2026.**
> **Hand: CODE.** ⚖️ Law 60. **Two independent commits. Do not combine them.**
> **Run at `93e960b` or later** *(the tidy is pushed; root is clean, both ledgers in `reference/`)*.

---

# ▶️ PART A · REBASELINE THE VIETNAM LEDGER TO 25

## 🩸 THE FACTS — measured 10 Aug 2026, at origin HEAD

| country | `wk_*.js` | `reference/ASIA_LEDGER.json` | |
|---|---|---|---|
| china | 50 | 50 | ✅ |
| japan | 50 | 50 | ✅ |
| indonesia | 42 | 42 | ✅ |
| **thailand** | **38** | **30** *(1 Aug)* | 🔴 **+8 — PART C, NOT THIS BRIEF** |
| **vietnam** | **25** | **11** *(4 Aug, `vietnam-batch3.js`)* | 🔴 **+14 — this brief** |

**22 records across two countries entered their files outside `merge.js`** and therefore never
faced the 40 assertions. Vietnam's 14 have now been measured directly and are clean. **Thailand's
8 are NOT clean and are explicitly out of scope here** — see PART C.

## ✅ THE EVIDENCE THAT LICENSES THE REBASELINE

Every gate run against all 25 Vietnam records on 10 Aug, at HEAD:

| gate | result |
|---|---|
| `node wowcheck.js vietnam` | ✅ **every mechanical box in `/wow` §7 and `/wk` §7 ticked** |
| `node pricecheck.js vietnam` | exact **108** · wrong-product **0** · review **0** · absent **0** · will-not-price **0** |
| `node costcheck.js vietnam` | ✅ **75 / 75 versions** · 🟠 0 · 🔴 0 · ⬜ 0 |
| `node claimcheck.js vietnam` | 🔴 **0** · 🟠 **0** · 🔵 14 |
| `node unitcheck.js vietnam` | 25 scanned · 🔴 **0** silent zeros *(9/9 self-tests pass)* |
| `node tinza-echo.js vietnam` | no repeats flagged |

⚖️ **The 14 🔵 are AVAILABILITY CLAIMS and are NOT faults.** The tool prints them because it cannot
measure them — only Tina can. Three carry ⚠️ where a keyed product overlaps the wording
(`pandan leaf powder` R2900 on chè ba màu · `red bean paste` R120 on xôi gấc · `brown rice` R35 on
cơm cháy). **Recorded for her eye. They do not block.**

## 🛑 STOP-CONDITION

```bash
git pull
node -e "global.window={};eval(require('fs').readFileSync('sections/wk_vietnam.js','utf8'));console.log(window.WK_VIETNAM.length)"
node -e "console.log(JSON.parse(require('fs').readFileSync('reference/ASIA_LEDGER.json','utf8')).countries.vietnam)"
```
- **File is not 25** → the count moved again since this brief. **STOP and report both numbers.**
  Do not rebaseline to a number this brief did not measure.
- **Ledger already reads 25** → **"ALREADY REBASELINED." STOP.**

## ⛔ RED LINES

- ⛔ **Do not hand-edit `reference/ASIA_LEDGER.json`.** ⚖️ Its own note: *derived by merge.js, never
  hand-typed.* A hand-typed hash is a lie the tool will believe forever.
- ⛔ **Do not touch thailand's ledger entry.** It is 30, the file is 38, and those 8 are unproven.
- ⛔ **Do not touch `sections/wk_vietnam.js`.** Not one byte. This changes a ledger, not a record.
- ⛔ **`--accept-count` is used ONCE, for vietnam, on the strength of the table above.** It is not a
  way to make a surprise go away — it is being used because the surprise was **measured and cleared**.

## 🔧 THE CHANGE

Re-run the merge that last wrote the ledger, with the count gate accepted, so **`merge.js` derives
the new count and hash itself**:

```bash
node merge.js vietnam <empty-or-noop-batch>.js --accept-count
```
Precedent: `indonesia` was baselined with `empty.js`, `china` and `japan` with `t.js`. **Use the same
pattern.** If the batch file must be created, create it, run the merge, then **`rm` it** — a batch
file is a spent input and does not get committed.

**Then verify `merge.js` wrote it:**
```bash
node -e "console.log(JSON.parse(require('fs').readFileSync('reference/ASIA_LEDGER.json','utf8')).countries.vietnam)"
```
Must read **`records: 25`**, a **new hash**, and **`updated: 2026-08-10`**.

## ✅ PROOF A

```bash
node merge.js vietnam <next real batch>   # must now gate on count-and-hash, NOT refuse
node tinza-doctor.js                      # RED count must not have grown        ⚖️ Law 51
node tinza-census.js                      # recipe count IDENTICAL — 2288
node --check sections/wk_vietnam.js
git status                                # ONLY reference/ASIA_LEDGER.json changed
```
🩸 **If `git status` shows any file other than the ledger, revert.**

**COMMIT:** `ledger: rebaseline vietnam 11 → 25 after full gate suite passed clean`

---
---

# ▶️ PART B · DELETE `sections/bakes_additions.js`

## 🩸 WHY — Tina ruled the bagel out long ago, and the file is dead

`sections/bakes_additions.js` defines `BAKES_ADDITIONS`, holding exactly two records:

| record | status |
|---|---|
| `bk-tortilla` · Soft Flour Tortillas | ✅ **already merged into `sections/meals.js`** — this copy is a duplicate |
| `bk-bagel` · 2-Ingredient Bagels | ⛔ **Tina ruled it out.** Exists **only** here. Has never rendered. |

**Verified 10 Aug at HEAD:**
- `index.html` does **not** load the file. It never has.
- `BAKES_ADDITIONS` is referenced by **nothing**, anywhere in the repo.
- `bk-bagel` appears in **no other loaded file** — only here, and in `Archive/TINZA_PHOTO_STUDIO.html`.
- Its own header says it: *"Paste into the matching cats in meals.js."* **A paste-in block that was
  pasted. The tortilla went; the bagel was ruled out.**

⚖️ **The dead cross-link check — cleared.** `bk-bagel`'s tip reads *"Cross-link target for the
Smoked Salmon Bagel."* **There is no Smoked Salmon Bagel in `sections/`.** The only other "bagel"
in the whole loaded tree is the word inside `spice.js:3039`'s `pairsWith` list, which is free text,
not a target. **Deleting this file cannot orphan a link, because no link points at it.**

## 🛑 STOP-CONDITION

```bash
grep -rn "BAKES_ADDITIONS" --include=*.js --include=*.html . | grep -v sections/bakes_additions.js
grep -rn "bk-bagel" --include=*.js sections/
grep -c "bakes_additions" index.html
```
**All three must return nothing / 0.** ⛔ **Any hit → STOP and report.** Something now depends on it
that did not on 10 Aug, and this brief's reasoning no longer holds.
If the file is already gone: **"ALREADY DELETED." STOP.**

## 🔧 THE CHANGE

```bash
git rm sections/bakes_additions.js
```
**That is the whole change.** ⛔ Do not touch `meals.js`. ⛔ Do not migrate `bk-tortilla` — it is
already there. ⛔ Do not rescue `bk-bagel` into anything.

## ✅ PROOF B

```bash
node tinza-census.js       # recipe count IDENTICAL — the file was never loaded, so nothing is lost
node tinza-doctor.js       # RED count must not have grown
node --check sections/core.js sections/meals.js
git status                 # ONLY sections/bakes_additions.js deleted
```
Then **hard-reload https://tinza.netlify.app** ⚖️ Law 27 and open **Bakes**. The tortillas are
still there — they live in `sections/meals.js:13663` as `BAKES_RECIPES`. **Tina's finger closes it.** ⚖️ Law 2.

**COMMIT:** `bakes: delete unloaded bakes_additions.js — tortilla already in meals.js, bagel ruled out`

---
---

# 📋 PART C · REPORT ONLY — THAILAND IS NOT CLEAN. DO NOT REBASELINE IT.

`wk_thailand.js` holds **38**; the ledger says **30** *(1 Aug)*. Those 8 also bypassed `merge.js`.
Measured 10 Aug — red is zero across the board:

| gate | thailand |
|---|---|
| `wowcheck` | ✅ every box ticked |
| `pricecheck` | wrong-product **0** · absent **0** · 🟠 review 3 *(`chicken thighs`→chicken · `cumin seeds`→cumin · `holy basil`→basil — all fine)* |
| `costcheck` | ✅ 115 / 115 versions |
| `unitcheck` | 38 scanned · 🔴 0 |
| **`claimcheck`** | 🔴 0 · **🟠 11** · 🔵 20 |

🩸 **The 11 orange are one repeated fault, and it is §37 exactly: a cost claim with no target.**
Nine say *"cheaper"* / *"a saving"* inside a version that is **already the cheapest fork**, so there
is nothing for the claim to point at.

**The worst is `thailand-pu-phad-pong-karee`** — its *Phad Pong Karee Gai — Chicken (Budget)* fork
is the **cheapest at R46** and calls itself both **"the expensive one"** and **"for a fifth of the
money."** Two contradictory unanchored claims on one version.

Also flagged: `thailand-pad-thai` · `thailand-khanom-krok` · `thailand-khao-soi` ×2 ·
`thailand-sai-krok-isan` · `thailand-gaeng-som` · `thailand-sangkhaya-fak-thong` · `thailand-rad-na` ·
`pu-phad-pong-karee` ×3.

⛔ **Thailand's ledger stays at 30 until these are fixed.** Rebaselining now puts a green light in
front of eleven cards making a cost argument the engine cannot stand behind — and at country close
it ships. **Its own brief, one record at a time.**
