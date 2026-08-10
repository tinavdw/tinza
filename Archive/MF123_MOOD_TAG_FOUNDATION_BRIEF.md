# Brief for Code — MOOD-TAG FOUNDATION  *(suggest MF123 — Tina to number)*

**Purpose:** build the `mood[]` tag infrastructure the "mood is a tag, not a keyword guess" ruling (15 Jul, RULINGS §3) calls for, so the "Just Feed Me" shelves can move off keyword-guessing onto real tags. **Measured against commit `80a9f5a`.**

---

## Measured starting point (⚖️ Law 22)
- **No record carries a `mood` field** (0 of 2,083); the normaliser (`rec()`, index.js) does not emit one.
- `buildMoodPool` (core.js:2018) still filters via the **`MOOD_QUERY` keyword predicates** — the loose approach the tablet caught (Fish & Chips under Impress, Burger Buns under Sweet).
- So the field must exist before any mood can be tag-driven. That is this brief. **No shelf flips in this brief.**

## Scope — FOUNDATION ONLY
1. **`mood: []` on every record.** In the normaliser, emit `mood` as an array, default `[]` (empty = on NO mood shelf — ⚖️ fail loud, Law 45). Read the value from a single `MOOD_TAGS` map — never inline per record.
2. **`MOOD_TAGS` seed map** — one object `{ recipeId: ['mood', …] }` in its own file (`sections/moodTags.js`) or the top of index.js. The single editable tag store. Seed only what is confirmed tag-ready (below).
3. **`mood` filter on `allRecipes()`** (index.js:606). Accept `filter.mood` (string) → keep records whose `mood` array includes it. Mirror the existing `diet` / `section` filters. This makes `allRecipes({mood:'sick'})` work — the exact query the ruling specified.
4. **Census check 17 — add a rung:** report the tagged count per mood (records whose `mood[]` is non-empty, grouped by mood) as the marathon scoreboard (⚖️ Law 36 — the count is the backlog number). **Do NOT fail the build on low counts yet.**
5. **Leave `buildMoodPool` on `MOOD_QUERY` (keyword) for now.** Per the phasing ruling: a mood flips to `allRecipes({mood})` only once ≥ ~15 recipes carry that tag. That flip is a LATER, per-mood task — not this brief.

## The seed (what is genuinely tag-ready TODAY)
Measured: only ONE of the 13 staged items exists in the library and fits its mood as-authored:
- **`beefstroganoff` → `['pickmeup','cold','lazy']`** (the "already in library" entry; tag as-is, do NOT duplicate — ⚖️ Law 53).

That is the whole seed for now. Everything else waits on the content pass (below).

## ⚠️ What this brief does NOT cover — and why (be explicit)
The other 12 staged items are **not buildable yet**:
- **10 are VERSION CHIPS** (gentle Mac & Cheese, 20-min Bunny Chow, root-veg Mash, bold Lasagne, cold Sloppy Joes, etc.) — they are BLUEPRINTS: a feel line + a "what changes" delta, **no costed ingredient list**. A chip cannot go into a record's `versions[]` until it is authored to WOW standard AND costed (⚖️ Law 11 — Tina sources any new-ingredient prices).
- **2 are NEW recipes** (Chicken Pot Pie Soup, Cheesy Taco Pasta) — **not in the library**; they must be authored from scratch before they can be tagged.

**So the critical path for the mood marathon is CONTENT, not code.** The order is: author each chip/recipe to full WOW + cost it → add its `mood[]` tag (and, for chips, add the chip to the target record's `versions[]`) → when a mood reaches ~15 tags, flip its shelf. This foundation brief builds the rails so that tagging and flipping have somewhere to land; the authoring runs in parallel (Tina + Claude, dish by dish).

## Push discipline
`node --check` on every touched file; commit together. Message e.g. `MF123: mood[] field + allRecipes({mood}) filter + MOOD_TAGS seed + census tag count`.
