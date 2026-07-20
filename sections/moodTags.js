// ══ MOOD TAGS ═══════════════════════ MF123 · 20 Jul · Law 6 · Law 45 ══
// THE SINGLE EDITABLE MOOD STORE. One object. { 'source:section:id': ['mood', …] }.
//
// 🩸 THE KEY IS `source:section:id` — NOT the bare id. Re-measured 20 Jul against
// 92105af: 19 BARE IDS COLLIDE ACROSS 38 RECORDS (potatosalad, slaphakskeentjies,
// tzatziki, hummus, chakalaka, breadbutterpudding …). "potatosalad" is BOTH
// events/Potato Salad AND braai/Potato Salad. A duplicate key in an object literal
// OVERWRITES SILENTLY — one of the two tags would just vanish, and nothing would
// say so. ⚖️ Law 3 — a document that is wrong is silent.
// `source:section:id` → 2,083 / 2,083 distinct.
//
// ⚖️ Law 6 — this is the SAME key shape tinzaStore uses for favourites, built by
// the SAME function: tinzaStore.favKey(r). Do NOT hand-roll the key here.
//
// ⚖️ RULED 15 Jul (RULINGS §3) — A MOOD IS A TAG, NOT A KEYWORD GUESS.
// The keyword predicates (MOOD_QUERY, core.js) put Fish & Chips under "Impress"
// and Burger Buns under "Sweet". A guess is not a shelf. A tag is.
//
// 🩸 TAG HERE AND NOWHERE ELSE. Never inline a `mood:` on a record — the moment
// tags live in two places one of them is wrong and silent. ⚖️ Law 6 · Law 3.
//
// A record whose key is NOT in this map gets `mood: []` — on NO shelf. That is
// CORRECT: untagged is not "maybe". ⚖️ Law 45 — UNKNOWN IS NOT YES.
//
// ⚠️ A key that resolves to NO record is a DEAD TAG — the dish was renamed, moved
// room, or never existed, and the tag silently does nothing. Census check 17 fails
// loud on that. ⚖️ Law 42 — the ratchet.
//
// ── THE VALID MOODS (must match MOOD_QUERY's keys, core.js:2000) ──
//   healthy · celebrating · fussy · cold · sweet · exhausted
//   sick · quick · adventurous · pickmeup · lazy · impress
//
// ── HOW A MOOD GRADUATES ──
// buildMoodPool() still runs on MOOD_QUERY keywords. A mood flips to
// allRecipes({mood}) only once ~15 recipes carry that tag — per mood, one task
// each. Census check 17 prints the per-mood tally: that is the scoreboard.
// ⚖️ Law 36 — the count is the backlog number.
//
// ⚠️ SEED = ONE RECORD. Measured 20 Jul: of the 13 staged items, twelve are not
// buildable yet (10 are uncosted version-chip blueprints, 2 are recipes that do
// not exist in the library). The critical path is CONTENT, not code. This file
// is the rail those tags land on when the authoring pass produces them.

var MOOD_TAGS = {
  // eventsData.js:31 — already in the library, tagged as authored (⚖️ Law 53 — do NOT duplicate).
  // Key measured 20 Jul, not guessed: tinzaStore.favKey(r) === 'db:events:beefstroganoff'. ⚖️ Law 22.
  'db:events:beefstroganoff': ['pickmeup', 'cold', 'lazy']
};

if (typeof window !== 'undefined') window.MOOD_TAGS = MOOD_TAGS;
