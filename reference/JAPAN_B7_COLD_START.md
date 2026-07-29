# ▶️ JAPAN B7 + B8 — COLD START

**Paste the block below as the first message of the next chat.** Attach nothing.
Everything is on GitHub. No diagnosis, no baseline hunting, no re-deriving.

---

## 📋 PASTE THIS

```
Japan batch 7. Author 3 records, hand back once at the end.

EVERYTHING IS AT HEAD — clone it, do not ask me for files:
  git clone --depth 1 https://github.com/tinavdw/tinza.git
  wk_japan.js (27 records) · merge.js · ASIA_SCHEMA_KEYS.json · prices.js ·
  core.js · worldkitchen.js · reference/ASIA_PROGRESS.md · MF152 · tinza-census.js

TWO THINGS ARE *NOT* AT HEAD AND YOU MUST ADD THEM YOURSELF:
  1. pricecheck.js — I will upload it. It is the only attachment.
  2. "chilli oil": 490 in sections/prices.js — add the line, do not hand prices.js back.
     (neutral oil IS already aliased at core.js:1138. Do not re-hunt it.)

SETUP, then start writing:
  node pricecheck.js --selftest          → expect 22/22
  node merge.js japan /tmp/empty.js      → expect "all checks pass · 27 + 0 = 27"

DO NOT regenerate ASIA_SCHEMA_KEYS.json. Frozen from wk_china.js @43. Every country
validates against it, never against its own record 1 (Law 50). Regenerating breaks merge.

THE THREE (27 → 30). Course gaps: staple 1, dessert 4. Main is 11/27 (41%) — do not add mains.
  Karaage · Ohitashi · Inarizushi
  ⚠️ Karaage: double-fry is ALREADY China's Gu Lao Rou law — do not reuse that angle.
     Its own moat is Ōita/Nakatsu's specialist karaage shops, post-war poultry farming.
  ⚠️ Inarizushi needs a new price key (aburaage). That is fine — A7 defers it.
  ⚠️ Sukiyaki is NOT in this batch. Needs a ruling first: raw-egg dip vs egg CLOSED at 3,
     plus the Chongqing Hotpot collision.

BEFORE writing each record, in this order — this is what catches the bugs:
  1. grep the ingredient convention already in wk_japan.js — never invent a line
  2. grep sections/prices.js for every buy-name — measure against prices.js, NEVER MF152
  3. read the moat of the nearest neighbour so the angle is not reused
  4. web-search to verify any historical claim before writing it as fact

Then: node --check → node merge.js japan batch7.js → node pricecheck.js japan.
MF152 append is GENERATED from pricecheck output, never hand-written.
```

**Batch 8** is the same block with `batch8.js`, 30 → 33, and the three remaining:
Chikuzenni · Sukiyaki (if the ruling exists by then) · Taiyaki (⚠️ overlaps Dorayaki's anko).

---

## ✅ STATE AT HANDOFF — VERIFIED FROM A CLEAN CLONE, 29 Jul 2026

| check | result |
|---|---|
| `wk_japan.js` at HEAD | ✅ 347,525 bytes, byte-identical to handback |
| `node --check sections/wk_japan.js` | clean |
| `merge.js` full re-validate, all 27 | ✅ all checks pass |
| record key drift vs frozen schema | **0** |
| dead crossLinks | **0** (81 links) |
| §26 diet-union drift | **0** |
| `pricecheck.js` 🔴 wrong-product | **0** |
| `pricecheck.js --selftest` | 22/22 |
| census REDs / doctor REDs | 17 / 10 — unchanged all session |
| Japan wired? | ⬜ **NO — 0 script tag, 0 wkPool entry. Correct. Wire at 50.** |

**Japan 27/50** — main 11 · side 6 · starter 5 · dessert 4 · staple 1 · 81 versions ·
vegan-capable 20/27 · `dashi` in 11 records. **Asia 77/240.**

**Banked 29 Jul:** Korokke · Kinpira Gobo · Buta no Shogayaki · Chirashizushi ·
Nasu Dengaku · Miso Soup · Anmitsu.

---

## 🔧 TWO TOOLS CHANGED THIS SESSION — both pushed, both born-RED proven

**`tinza-census.js` — RUNG 28, page-load payload.**
Sums every `<script src="sections/...">` in index.html. Currently **6.88 MB across 32 files**,
all synchronous, no defer/async/lazy-load. RED above **12 MB**.
⚖️ The threshold is a DUE DATE, not a bug line. Below it, keep authoring. Above it, the
lazy-load brief is owed: split recipe data per country · build the search index at BUILD
time (`buildIndex()` at index.js:676 already does it, just at runtime) · fetch one recipe
on open · service worker caches opened + favourites.
Born-RED: threshold → 5 MB fails, then restored. Census REDs 17 → 17, no regression.
📏 Why it exists: a WOW'd record is ~8–13 KB, a pre-WOW one ~1–2.5 KB. 77 of 2,133 recipes
are WOW'd. Finishing the sweep takes 6.9 MB past 20 MB, invisibly, one good session at a time.

**`merge.js` — UNCHANGED. Take it from HEAD.**
⚠️ Mid-session I believed merge.js had no §26 union assertion and wrote one. **I was wrong** —
that was true of my session-start clone and false of live HEAD, which already carries a §26
rung that is *better* than mine (hard for incoming, warn-with-a-count for existing so China's
50 stay visible as debt without blocking; it also asserts every version *has* a `diet[]`).
**My edit was discarded. Do not re-add it.**
⚖️ Caught by diffing my base against live HEAD before handback — the §29 rule working.
**A shallow clone is a snapshot, not the truth. Re-check HEAD before touching any canonical file.**
✅ All 27 Japan records re-validated against HEAD's merge.js: pass, 0 versions missing `diet[]`.

---

## 🩸 OPEN — CARRY FORWARD

2. **`merge.js` FLESH list is missing `octopus` and `dashi`.** It has `squid`. §29.3 rules
   dashi animal, so a vegan-tagged record with plain `dashi` would never warn.
   ⚠️ Not by substring, or `kombu and shiitake dashi` collides the way radish and daikon do.
3. **The vegan-mistag warn cannot see version deltas** and says so in its own comment. It
   fires on every record with a vegan fork off an animal base, which is most of them.
   Either it becomes noise or the rung applies the delta first.
4. **`dashi` price still not sourced** — instant hon dashi granules, SA shelf price.
   Route ruled at §29.4, number outstanding, now in **11 of 27** records. **Do not guess it.**
5. **Two new MF152 keys await A7:** `agar agar powder`, `dried wakame`.
   ⚠️ Do NOT alias wakame to `nori flakes` (R4150) — wrong seaweed, badly wrong price.
6. **crossLinks cannot cross countries** — merge resolves against the country file, `wkPool()`
   is global. Needs a ruling, not a loosened assertion.
7. **Five 🟠 REVIEW rows** ship a number that looks right: `glutinous rice flour`→rice R27 ·
   `rice flour`→rice R27 · `shirataki noodles`→noodles R80 · `pickled red ginger`→ginger R280 ·
   `dried shiitake mushrooms`→mushrooms R90.
8. **⛔ Japan not wired.** Two lines at Japan close, NOT before:
   `<script src="sections/wk_japan.js"></script>` in index.html, and
   `window.WK_JAPAN || [],` in the `wkPool()` concat at worldkitchen.js:58.
   (`WK_COUNTRY_GEO` for Japan is already done.)

---

## ⚖️ RULINGS TAKEN 29 Jul — reversible, flagged, not silent

- **HIJIKI — OPTION A.** Hijiki no Nimono NOT authored. The UK FSA, Canada's CFIA, Hong Kong's
  CFS and Singapore's SFA all advise against eating hijiki over inorganic arsenic; the same
  FSA survey found none in arame, kombu, nori or wakame. **Nasu Dengaku** took the slot.
  Nothing was created that needs undoing. Tina can overrule at any time.
- **BURDOCK (gobo)** — not on an ordinary SA shelf, so Kinpira Gobo leads on carrot + parsnip
  and names gobo honestly in-method. No price key created. Precedent: warabi starch → cornflour.
- **"LEFTOVER JAPANESE CURRY" REJECTED as an ingredient line** under §29.1 — nothing on a shelf
  is leftover curry, so it can never be priced and the card would ship costless. Replaced with
  `8g curry powder · 6g butter, extra · 6g cake flour, extra`, all already priced; the leftover
  route is named in-method as the better one.

---

## 📌 PACE — for the two planned sessions

3 records per session is the right size and this session is the evidence: 7 records plus two
tool changes was over-full, and the last stretch was spent on mechanical work precisely because
authoring is what degrades first. The careful part — grepping conventions, checking prices
against prices.js, verifying history before asserting it — is what caught every bug today.
**Protect that, not the record count.**

⚖️ **SAVE AS YOU GO.** Merge and hand back after every banked record, per the standing rule.
A cut-off must cost one recipe, never a session.
