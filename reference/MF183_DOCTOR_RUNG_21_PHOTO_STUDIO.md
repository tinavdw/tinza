# MF183 · DOCTOR RUNG 21 — **THE PHOTO STUDIO MUST FLAG ITSELF**

> **For: Code.** **From: Claude (architecture).** **Written 10 Aug 2026.**
> **Hand: CODE.** ⚖️ Law 60. **One rung. One commit.**
> ⚖️ **Law 42 — THE RATCHET.** Tina should not have to remember to run a tool.

---

## 🩸 WHY

The Photo Studio's `DATA` list is **baked into `Archive/TINZA_PHOTO_STUDIO.html`**. It only changes
when somebody runs `node Tools/photo-studio-update.js`. Nobody did — so:

- **205 Asia lane recipes** (China 50 · Japan 50 · Indonesia 42 · Thailand 38 · Vietnam 25) had
  **no card at all.** Every one of them was invisible to the person shooting the photos.
- **4 cards pointed at recipes that no longer exist** — remnants of the Cultural tab deleted under
  §2.2. Someone could have gone out and shot four dishes the app does not have.

**Neither showed up anywhere.** No error, no warning, no red. ⚖️ **Law 3 — a document that is wrong
is silent.** Same family as the root ledger: **absence looked normal.**

**A reminder is not a fix.** The tool exists and it works. What was missing is the thing that says
*"run it."*

---

## 🛑 STOP-CONDITION

```bash
grep -n "head('21 " tinza-doctor.js
```
**Any hit → rung 21 already exists. Report what it checks and STOP.**
Also confirm rung 20 is the current last rung before the `── VERDICT ──` block.

---

## ⛔ RED LINES

- ⛔ **AMBER, NEVER RED.** A stale studio does not break the app and must not block a push.
  ⚖️ Law 51 — the doctor's RED count is a baseline; adding a new RED moves everybody's floor.
- ⛔ **Read-only.** The rung **never** runs the updater and **never** writes the HTML.
- ⛔ **Do not JSON-parse the whole 3.8 MB DATA array on every doctor run.** The doctor is a ~5 s
  tool. Count cheaply — see below.
- ⛔ **Do not hardcode the region list.** Read `CONFIG` out of `Tools/photo-studio-update.js`, the
  same way rung 20 reads ledger paths out of `merge.js`. ⚖️ *A checker holding its own copy of the
  contract is a SECOND contract, and it drifts.*
- ⛔ **Do not name a count this brief measured.** Counts move. Measure at run time.

---

## 🔧 THE RUNG

Insert **after rung 20**, before the `── VERDICT ──` block.

```
head('21 · IS THE PHOTO STUDIO STALE?  (10 Aug — MF183, the invisible shoot list)');
```

### What it does

1. **Read `CONFIG` out of `Tools/photo-studio-update.js`** — the `{ region, file }` pairs, ignoring
   commented-out lines. That is the live contract for which regions the studio mirrors.
2. **For each region**, count the records in its section file, and count the cards carrying that
   `"r":"<region>"` in `Archive/TINZA_PHOTO_STUDIO.html`.
   ⚡ **Count cheaply:** match `"r":"<region>"` occurrences in the raw HTML string rather than
   parsing 3.8 MB of JSON. The studio writes one record per line, so a line-wise scan is enough.
3. **Compare.** Any region where the two numbers differ is stale.
4. Also flag, as separate AMBER lines:
   - `undefined` appearing in any `PLATING:` line *(the signed-shift bug — see §Ratchet history)*
   - the HTML being **older than any file in `CONFIG`** by mtime

### What it prints

**Stale:**
```
🟠 PHOTO STUDIO IS STALE — <n> region(s) out of sync
   · Vietnam    file 26  ·  studio 25   → 1 recipe has no card
   · <region>   file X   ·  studio Y    → ...
   Fix: node Tools/photo-studio-update.js   then commit Archive/TINZA_PHOTO_STUDIO.html
```

**Clean:**
```
✅ Photo studio in sync   <n> regions mirrored, read live from Tools/photo-studio-update.js
```

### ⚠️ SAY WHAT IS NOT MEASURED — every run

⚖️ **Rung 20's own law: a rung that silently checks less than it implies manufactures confidence.**
Print, always:

```
⚠️ FLOOR, NOT A TOTAL: this compares COUNTS per region in CONFIG only.
   A RENAMED recipe keeps the count identical and PASSES THIS RUNG.
   Regions not in CONFIG (Events, Meals, Breakfast, Spice, Braai, Health,
   Bakes, Africa, Asia) are NOT mirrored by the tool and are NOT gated here.
```

🩸 **That last line is not boilerplate.** As of 10 Aug there are **73 cards in Breakfast, Meals and
Spice whose names match no recipe in any section file.** Some are deletions, some are renames — a
rename keeps its photo, a deletion does not, and **getting it wrong throws away shot work.** They
were deliberately left alone. ⛔ **This rung must not auto-classify them, and must not pretend it did.**

---

## ✅ PROOF

```bash
node tinza-doctor.js          # rung 21 appears · RED count UNCHANGED (amber only)  ⚖️ Law 51
node tinza-doctor.js | tail -6
```

**Then prove it is a real watcher, not decoration — born-RED, three modes:**

| mode | expected |
|---|---|
| studio as shipped today | ✅ **in sync**, all CONFIG regions match |
| temporarily add a dummy record to a country file, re-run | 🟠 **stale**, that region only, correct numbers |
| temporarily rename `Archive/TINZA_PHOTO_STUDIO.html` | 🟠 **studio not found** — ⛔ never a crash, never a silent pass |

⛔ **Revert every probe.** `git status` must be clean apart from `tinza-doctor.js`.

```bash
node --check tinza-doctor.js
node tinza-census.js          # unchanged
```

**COMMIT:** `doctor: rung 21 — the photo studio flags itself when a region goes out of sync (Law 42)`

---

## 📜 RATCHET HISTORY — for the comment block at the top of the rung

Three bugs were found in the studio generator on 10 Aug and fixed in
`Tools/photo-studio-update.js`. **Record them, because a rung should say what it is descended from:**

1. **`h>>3` was a SIGNED shift.** Any dish name hashing above 2³¹ went negative, so
   `SETTINGS[-3]` came back `undefined` and the card told the camera *"serve on a rustic
   speckled-grey plate, undefined."* It had been doing that quietly for six cards.
2. **`dietLine` read the RECORD's `diet`, which is the UNION of every version's diet.** Phở Bò
   carries `["omnivore","vegan"]` because it has a vegan fork, and the old code tested vegan
   **first** — so a **beef noodle soup** was briefed as *"fully plant-based, no meat, eggs or dairy."*
   The photo is of the DEFAULT version; the strictest claim only holds when nothing looser is present.
3. **The RICE line fired on rice NOODLES, PAPER and FLOUR**, and demanded *"separate grains, not
   clumped, sticky or fused"* — **the exact opposite of the truth** for glutinous-rice dishes like
   Xôi Xéo and Bánh Tét.

⚖️ **All three produced a plausible-looking prompt.** None of them would ever have surfaced as an
error — they would have surfaced as a wrong photograph, weeks later, after the shoot.
**That is what this rung is for.**
