# TINZA FIX QUEUE (confirmed bugs — not ideas)
*This is the QUEUE, not the parking lot. Everything here is a defect seen on the live tablet, waiting to be fixed. Ideas live in TINZA_IDEAS_BACKLOG.md; this file is only things that are actually wrong. Promote an item to an MF-number when it's picked up.*

---

## 🎂 Whole-unit bakes show a misleading per-person dial
**Seen:** 15 Jul AM, still live 16 Jul. Example: **Gin & Tonic Cheesecake** (`bk-gin-tonic-cheesecake`, meals.js).

- **Symptom.** The recipe opens at "**4 people**" on the How-Much-To-Make dial, but the line beneath reads "**makes 1 cheesecake · serves 12 · 1 slice each**". The 4 and the 12 contradict each other on screen.
- **NOT a math bug — numbers are safe to bake from.** Ingredient totals are `pp × 12` (shortbread 17g pp → 204g total, etc.), correctly scaled to one whole cheesecake. Confirmed against the record 16 Jul.
- **The real bug.** A bake that only comes in whole units should not offer a per-person dial that starts at an arbitrary headcount (4). It should step by **whole units** — "1 cheesecake (serves 12)" → "2 cheesecakes (serves 24)" — so the headcount and the yield can never contradict. The "rounds up so you never bake a fraction" note is trying to paper over this; fix the dial instead.
- **Where.** The How-Much-To-Make dial / bake-yield logic in `core.js` (the whole-unit rounding path). Applies to ALL whole-unit bakes (cakes, cheesecakes, tarts), not just this one. Related to MF120 (the "4 people" bakes family).
- **Priority.** Cosmetic/UX — numbers are correct, so not a launch blocker, but it's on recipes people bake from, so it reads as broken. Fix before launch.

## 🔍 Human "biscuits" search returns dog biscuits
**Seen:** 16 Jul.

- **Symptom.** Searching **"biscuits"** surfaces Furry Friends pet biscuits (Oatmeal & Apple, Maize Meal & Chicken Crunch, Oat & Cottage Cheese, Chicken Liver Training Biscuits) mixed in with the human bakes.
- **Root.** Global search has no room/slot scope. MF117 excludes PETFOOD / BABYFOOD from the mood shelves, but the main search still returns every slot.
- **Fix is a product call (not obvious — decide, don't guess).** Either (a) exclude PETFOOD / BABYFOOD from default search with an opt-in toggle, or (b) group search results by room so pet/baby food is clearly separated rather than intermixed. Lean toward (b) — it's honest and discoverable — but Tina's call.
- **Where.** The global search query path in `search.js`.
- **Priority.** Pre-launch polish — it makes search look untrustworthy on a common query.

## 🔤 Mojibake in World Kitchen authentic names ("no funny letters")
**Seen:** surfaced 16 Jul via the mood auto-draft. Long-standing (this is the doctor's standing "mojibake" RED, now pinned to a location).

- **Symptom.** ~**231 recipe names** carry double-encoded UTF-8 — the authentic-name HERO renders as garbled bytes. Mostly Greek (`ÎšÎ»Î­Ï†Ï„Î¹ÎºÎ¿` → *Kleftiko*, `Î£Ï„Î¹Ï†Î¬Î´Î¿` → *Stifado*, `Î“Î¹Î¿Ï…Î²Î­Ï„ÏƒÎ¹` → *Giouvetsi*), plus German (`knÃ¶del` → *knödel*) and Polish (`Å›lÄ…skie` → *śląskie*).
- **Root.** UTF-8 bytes were saved through a Latin-1 step somewhere in the WK authoring/import pipeline, so each accented char became two garbled chars. It is IN the source data, not a display bug.
- **Why it matters.** WK's whole standard is "authentic name as hero + English gloss." When the hero is mangled, the standard inverts — the proudest names look broken. Directly undermines the World Kitchen pitch.
- **Fix.** Re-decode the affected strings at source (read as Latin-1 → re-encode UTF-8, or re-import from a clean source). Verify against a known-good list (Kleftiko, Stifado, Zwetschkenknödel…). Do NOT hand-retype 231 names — script the re-decode, spot-check.
- **Where.** `sections/wk_*.js` (Greek/Europe files worst hit).
- **Priority.** Pre-launch — it's the single most visible content-quality flaw in the flagship room.
