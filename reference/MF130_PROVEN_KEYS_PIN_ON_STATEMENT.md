# MF130 — PROVEN keys pin on the statement, and a lost key screams

**Status:** open
**Raised:** 21 Jul 2026 · **RULED 21 Jul 2026**
**Severity:** this is a hazard to **Law 51 itself**

---

## 1. The bug

Census rung 7 keys proven-on-live bugs by **file:line**:

```js
const PROVEN = { 'braai.js:28':1, 'spice.js:7987':1 };   // tinza-census.js:180
```

On 21 Jul a 5-line insert at `sections/spice.js:76` — an unrelated edit, in an
unrelated part of the file — moved the proven statement from **7982 to 7987**. The
key stopped matching. The bug fell out of `proven` (RED) into `risk` (a warning).
The census RED count dropped from 18 to 17 **with nothing fixed**.

## 2. Why this is worse than one missed bug

Law 51 is *count before, count after; still 10 → push, 11 → STOP*. A falling count
is the signal that it is safe to ship. So:

> **The ratchet can be walked backwards by editing an unrelated part of the same
> file — silently, with no one acting in bad faith.**

Any insert above any pinned line reads as progress. Nobody has to be careless; the
check simply stops asking the question and the number goes the reassuring way.
⚖️ Law 3 — a document that is wrong is silent. ⚖️ Law 42 — the ratchet only holds if
it cannot be quietly released.

## 3. STOP-CONDITION

Open `tinza-census.js:180`. **If `PROVEN` is no longer keyed on a line number AND a
missing key already prints `PROVEN KEY LOST`, SAY SO AND STOP.**

## 4. RED LINES

- ⛔ Do not change the detector regex at `tinza-census.js:184`. It is not the bug —
  it finds both statements correctly. Only the **key** is wrong.
- ⛔ Do not "fix" the 30-odd `risk` sites. That list is a risk list, not a bug list,
  and rung 7 says so in its own output. ⚖️ Law 22.
- ⛔ Do not remove either proven entry. Both are still live bugs Tina reproduced
  with her own finger on 14 Jul. This job changes how they are *addressed*, not
  whether they are real.
- ⛔ The lost-key alarm must **hold RED**, not warn. A key matching nothing is an
  unverifiable claim, not a cleared bug.

## 4b. 🆕 RULED 21 Jul — **A PROBE WHOSE PASS IS "NOTHING CHANGED" MUST BE POSITIVE-CONTROLLED**

**Three instances this week of a check going quiet, and the quiet reading as success:**

1. A `PROVEN` key lost its anchor — census fell 18 → 17, nothing fixed *(this brief)*.
2. Census 18 fell to 16 the same way, on the same edit.
3. The MF129 probe **read empty stdin and exited 0** — PowerShell here-string syntax
   in a Bash tool. It printed a clean "no change" that was indistinguishable from a
   pass. It was caught **only** because that probe expected `204 → 205` and the
   number sat still.

**The ruling:** any probe whose pass condition is *"nothing changed"* must **first be
run in a mode where something MUST change, and that movement observed.**

> 🩸 **A probe that has never been seen to fail has not been shown to work.**

MF129's probe is the model — it was caught because a specific number was expected to
move. **Make that the required shape, not the lucky shape.** Every "expect no change"
proof in every brief must be preceded by an "expect this exact change" run.

⚖️ Law 3 — a thing that is wrong is silent. ⚖️ Law 42 — the ratchet only holds if it
cannot be quietly released. ⚖️ same root cause as §1, which is why it is filed here.

## 5. THE EXACT CHANGE

**5a — re-key on the statement.** Ruled preference order was: a stable identifier if
one exists (there is none on a bare `S.screen=` statement), else the statement text
with file as scope. So use the text.

Already verified: both proven statements are the identical string
`S.screen='search_results';`, and that text occurs **exactly once in `braai.js` and
exactly once in `spice.js`** — checked 21 Jul, zero duplicates in either file. File
scope is therefore required, and with it the key is unique.

Replace the line-number map at `tinza-census.js:180` with a file→statement map:

```js
const PROVEN = {                                   // Tina's fingers, 14 Jul
  'braai.js': ["S.screen='search_results';"],
  'spice.js': ["S.screen='search_results';"],
};
```

Match on `f` + exact `stmt`, not on `at`. Keep `at` — it is still the right thing to
**print**, as a hint, per the ruling: line number as hint, never as key.

**5b — the lost key screams.** This half matters more than 5a; whatever keying we
choose can still drift, and a lost key that screams cannot silently declassify.

After the file scan, for every `(file, statement)` in `PROVEN`, check whether the
scan actually matched it. For any that matched nothing:

```
✘ PROVEN KEY LOST — spice.js "S.screen='search_results';"
   Tina proved this on 14 Jul. It is not a cleared bug — it is an unverifiable
   claim. Either the statement moved file, or it was edited without a ruling.
```

It must go through `bad()` so it counts toward RED. A `PROVEN` entry that matches a
statement now classified **clean** (it gained `viewingRecipe:null`) is a genuine
fix — that one may clear, and should say so plainly rather than vanishing.

## 6. THE PROOF

1. `node --check tinza-census.js`
2. `node tinza-census.js` — both proven bugs still RED, census still **17**, doctor
   still **9**. Re-keying fixes no bug and must move no number.
3. **Prove the rot is gone:** insert five blank lines at the top of `sections/spice.js`,
   re-run. Both proven entries must still be RED, now printing a higher line hint.
   Under today's code this is exactly the edit that lost the key. **Revert the probe.**
4. **Prove the alarm fires:** temporarily change one `PROVEN` statement to
   `S.screen='nonsense';`, re-run, and confirm `PROVEN KEY LOST` appears **and the
   RED count goes up, not down**. **Revert the probe.** ⚖️ never trust a new rung
   until you have watched it go red.
5. Nothing ships to live in this job — census is a tool, not a section. No hard
   reload needed.
