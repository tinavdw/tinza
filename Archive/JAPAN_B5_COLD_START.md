# ▶️ JAPAN B5 — COLD START

**Paste the block below as the FIRST message of the next chat.** Attach the four files listed.
Nothing else needs saying. No diagnosis, no baseline hunting, no "let me check HEAD first."

---

## 📋 PASTE THIS

```
Japan batch 5. Author 5 records. ⛔ HAND BACK A DOWNLOAD AFTER EVERY SINGLE RECORD — never batch to the end.

ATTACHED: wk_japan.js (20 records) · ASIA_PROGRESS.md · MF152_ASIA_PRICE_KEYS.md · pricecheck.js
CLONE for the rest: git clone --depth 1 https://github.com/tinavdw/tinza.git
  — merge.js, core.js and ASIA_SCHEMA_KEYS.json are all at HEAD, do NOT ask me for them.
  — sections/prices.js and worldkitchen.js at HEAD are BEHIND my local copies by exactly two
    things: "chilli oil": 490 and neutral oil in WK_ALIAS. Add those two lines yourself so
    pricecheck has an honest gate. Do not hand them back to me.

SETUP, in one command, then start writing:
  cp uploads/* into repo (prices/worldkitchen → sections/, pricecheck.js → root, .md → reference/)
  sed -i "s|path.join(__dirname, '..', 'tinzarepo')|__dirname|" pricecheck.js   ← repoRoot bug
  node pricecheck.js --selftest        (expect 22/22)

DO NOT regenerate ASIA_SCHEMA_KEYS.json. It is frozen from wk_china.js @43 and every country
validates against it, never against its own record 1 (Law 50). Regenerating it breaks merge.js.

THE FIVE (20 → 25) — thin now: side 3 · starter 4:
  Korokke · Kinpira Gobo · Hijiki no Nimono · Buta no Shogayaki · Chirashizushi
  ⚠️ Korokke IS the canonical second life of Nikujaga — cross-link it, do not re-teach the mash.
  ⚠️ Sukiyaki is NOT in this batch. It needs a ruling first (raw-egg dip vs egg CLOSED at 3,
     plus the Chongqing Hotpot collision).

BEFORE writing each record, in this order:
  1. grep the ingredient convention already in wk_japan.js — never invent a line
     (2 sheets nori vs 1 sheet nori cost a duplicate MF152 key last batch)
  2. grep prices.js for every buy-name — measured against prices.js, NEVER against MF152
  3. read the moat of the nearest neighbour record so the angle is not reused

Then: node --check → node merge.js japan batchN.js → node pricecheck.js japan.
MF152 append is GENERATED from pricecheck output, never hand-written.
```

---

## ✅ STATE AT HANDOFF — VERIFIED 29 Jul 2026, DO NOT RE-DERIVE

| check | result |
|---|---|
| `node --check sections/wk_japan.js` | clean |
| `merge.js` full re-validate, all 20 | ✅ all checks pass |
| record key drift vs frozen schema | **0** |
| dead crossLinks | **0** (60 links, all resolve) |
| dead deltas (`from`/`item` not in base) | **0** |
| version faults (one default, budget cheapest) | **0** |
| `pricecheck.js` 🔴 wrong-product | **0** |
| `pricecheck.js --selftest` | 22/22 |

**Japan 20/50** — main 9 · starter 4 · dessert 3 · side 3 · staple 1 · 60 versions ·
vegan-capable 14/20 · `dashi` in 9 records.

**Records 24–28 banked this session:** Matcha Warabimochi · Mitarashi Dango · Takoyaki ·
Zaru Soba · Nikujaga.

---

## 🚀 THE ONE CHANGE THAT WOULD MAKE B5 TWICE AS FAST

This session authored 5 records but spent roughly its first third on **recovery, not writing**:
checking HEAD, hunting the neutral-oil alias, re-uploading five files, re-fixing the `repoRoot`
bug that the lost session had already fixed, and undoing my own schema regeneration.

**Every single one of those costs disappears if `wk_japan.js` is pushed.** A clone takes four
seconds; an upload round-trip takes a message each way and only works if the right file is still
in Downloads.

⚖️ **PROPOSED RULING, FOR TINA:** push `wk_japan.js` **unwired** at every batch close — no
`<script>` tag, no `wkPool()` entry. One deploy credit. Zero change to the live app, because
nothing reads a file that is not wired. Impossible to lose. Wiring still happens exactly once, at
Japan close, as A-side already rules.

The current rule and "the file is the memory" only agree when the file is actually pushed. Today
they disagreed and it cost a full batch of authoring.

---

## 🩸 OPEN — CARRY FORWARD

1. **`merge.js` FLESH list is missing `octopus` and `dashi`.** It has `squid`. Takoyaki's 60g
   octopus under a union tag carrying `vegan` passed the mis-tag check untouched. `dashi` matters
   more — §29.3 rules it animal, so a vegan-tagged record with plain `dashi` would never warn.
   ⚠️ Not by substring, or `kombu and shiitake dashi` collides the way radish and daikon do.
2. **The vegan-mistag warn cannot see version deltas** and says so in its own comment. It now
   fires on every record with a vegan fork off an animal base, which is most of them. Either it
   becomes noise or the rung applies the delta first.
3. **`dashi` price still not sourced** — instant hon dashi granules, SA shelf price. Route ruled
   at §29.4, number outstanding, and it is in 9 of 20 records. **Do not guess it.**
4. **crossLinks cannot cross countries** — `merge.js` resolves against the country file, `wkPool()`
   is global. Needs a ruling, not a loosened assertion.
5. **Five 🟠 REVIEW rows** ship a number that looks right: `glutinous rice flour`→rice R27 ·
   `rice flour`→rice R27 · `shirataki noodles`→noodles R80 · `pickled red ginger`→ginger R280 ·
   `dried shiitake mushrooms`→mushrooms R90.
6. **⛔ Japan still NOT WIRED, NOT PUSHED.** Two lines at Japan close:
   `<script src="sections/wk_japan.js"></script>` in index.html, and
   `window.WK_JAPAN || [],` in the `wkPool()` concat at worldkitchen.js:58.
