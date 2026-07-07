# TINZA — Sweep Report
*Per-batch review log for the Version & WOW Sweep (`TINZA_CLAUDE_CODE_BRIEF.md`). Flag generously; a 🟡 a human can deepen beats an over-claimed WOW.*

Legend: ✅ full-WOW · 🟡 compliant-but-flat · ⚠️ needs-human

---

## Phase 1 · Bobotie reconcile (§7) — 7 Jul 2026

**Reconcile pair:** `sp-bobotie` (`meals.js`, array shape) ↔ `cape-malay-bobotie` (`wk_southafrica.js`, string shape)
**Canonical set (identical names · icons · order in both rooms):**
`Classic 🏆 · Budget 💰 · Quick ⚡ · Lentil 🌱 · 1600s Original 🏛️ · In a Pumpkin 🎃`

### `meals.js` — batch 1 — `sp-bobotie`
- ✅ **`sp-bobotie`** — reconciled to the 6-version canonical set. Renamed the default `Cape Malay → Classic` (kept its richer almond content) and `Lentil (veg) → Lentil`. **Added two versions as array-deltas:** `1600s Original` (`swapIng` beef→lamb mince + `swapStep` browning line → drain fat) and `In a Pumpkin` (`addIng` pumpkin after mince + its own structural shell method). Budget · Quick · Lentil kept as their existing structural versions. Order already matched canonical for the first four, so those two appended cleanly.

### `wk_southafrica.js` — batch 1 — `cape-malay-bobotie`
- ✅ **`cape-malay-bobotie`** — added `Quick` (delta: `swapStep` the final long bake → a 5–8 min hot-grill finish) and **reordered** to canonical (`1600s Original` moved to sit after `Lentil`). Classic · Budget · 1600s · Lentil · In a Pumpkin content is byte-identical — only the Quick insertion and the 1600s move changed.

### Verification (harness executed the live `applyRecipeVersion`/`applyVersionDelta` on both real cards)
- Both cards: 6 versions, canonical order confirmed.
- Meals: 1600s→lamb (beef gone) + method drains fat; Pumpkin→pumpkin at idx 1 (right after beef mince) + shell method; Lentil→lentils/no mince; Quick→grill; Classic→almonds preserved.
- WK: Quick→grill (long bake removed); 1600s→`90g lamb mince`; Pumpkin→pumpkin shell ing; Lentil→cooked brown lentils.
- `node --check` clean on both files. Byte-discipline: only the two Bobotie cards touched.

### Twists (§6)
- Bobotie's surprise versions **are** the canonical `1600s Original` (heritage — the 1600s Cape original was mutton/lamb) and `In a Pumpkin` (the Boer *"bobotie in 'n pampoen"* showstopper). Both are heritage-true and pass the taste-gate, so **no new web-researched twist was forced** onto the national dish — §7 already defines its set.

### ⚠️ Conflicts flagged (§0 — the standards files win; confirm before I roll this rule forward)
1. **§7 "convert Budget/Lentil to deltas" vs §5 "don't force a delta where the method genuinely differs."** Kept **structural**: `Lentil` (mince→lentils + simmer-first method), `Quick` (grill-not-bake; Meals Quick also has reduced amounts), `Budget` (stretch method + different amounts). This also matches how the WK card was already authored. **Recommend §7 be reworded to "convert to deltas *where the version keeps most of the base*."**
2. **Meals delta cost honesty.** `1600s Original` is a delta with no `costPP` (per §5, deltas don't hardcode), so its **headline `costPP` inherits the base R34** even though lamb mince (R200/kg) costs more than beef (R130/kg). The shopping/plan engine still prices lamb correctly from the merged ingredients; only the headline chip understates. WK recomputes from ingredients, so it's honest there. Flagging in case the Meals headline should be bumped.

### Prices (§2/§9)
- No gaps — `lamb mince` (R200) and `pumpkin` (R35) both present in `PRICE_DB`. Nothing appended to `TINZA_WK_PRICE_GAPS.md`.

### Not committed
- Per the session's standing "show diffs, don't push" and Tina's review-on-live workflow, the two files are staged as diffs, **not committed**. Suggested commit messages (§2 format), one file each:
  - `wk-sweep: meals.js batch-1 — sp-bobotie reconciled to 6-version canonical set (+1600s, +In a Pumpkin deltas)`
  - `wk-sweep: wk_southafrica.js batch-1 — cape-malay-bobotie +Quick delta, reordered to canonical`
