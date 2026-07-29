# ▶️ JAPAN B9 — COLD START

**Paste the block below as the FIRST message of the next chat.**

🔴 **UNLIKE B8, YOU MUST ATTACH FILES THIS TIME.** Tina has decided not to push again until Japan
reaches 50/50, so origin is **five records behind** and will stay behind. A clone alone reads 30.
Authoring on a clone would silently delete Kake Udon, Hiyayakko, Chikuzenni, Ebi Furai and Taiyaki —
the exact failure the B8 baseline gate caught on its first command.

⚠️ **Written from `JAPAN_B8_COLD_START.md` and re-read against the existing rules before shipping,**
per the standing habit. Line 11 of the old chain (*"hand back once at the end"*) is **not** in here
and must never be copied forward.

---

## 📎 ATTACH THESE FIVE FILES — ALL ARE AHEAD OF ORIGIN

| File | Why it is ahead |
|---|---|
| `sections/wk_japan.js` | **35 records.** Origin has 30. |
| `sections/prices.js` | `"tofu"` re-priced 250 → **171**, ruled by Tina 29 Jul. |
| `sections/pricecheck.js` | MF152 path bug fixed — it was looking in `sections/reference/`. |
| `reference/ASIA_PROGRESS.md` | B8 close + the B8 collision map. |
| `reference/MF152_ASIA_PRICE_KEYS.md` | `red bean paste` added at ~R120/kg. |

Everything else (`merge.js`, `ASIA_SCHEMA_KEYS.json`, `wk_china.js`, `core.js`, `worldkitchen.js`)
is current at origin and comes from the clone.

---

## 📋 PASTE THIS

```
Japan batch 9. Author 5 records: 35 → 40. Files attached — read the attachments, not HEAD.

git clone --depth 1 https://github.com/tinavdw/tinza.git
Then OVERWRITE five files in the clone from my uploads:
  sections/wk_japan.js · sections/prices.js · sections/pricecheck.js
  reference/ASIA_PROGRESS.md · reference/MF152_ASIA_PRICE_KEYS.md
⚠️ The clone's wk_japan.js has 30 records. Mine has 35. If merge reports 30, you used the
   wrong file — stop and say so. Do not author on 30.

Read the JAPAN B8 CLOSED section at the tail of ASIA_PROGRESS.md FIRST. It carries the
B8 collision map. Everything else you need is in the attachments.

⛔ HAND BACK A DOWNLOAD AFTER EVERY SINGLE RECORD. Never batch to the end.
   B7 was lost exactly this way. One record = node --check + merge + pricecheck
   + present_files, THEN the next. No exceptions, no "I'll collect at the end."

SETUP — run all four, report any that misses:
   echo "module.exports = [];" > /tmp/empty.js
   TINZA_REPO=$PWD node sections/pricecheck.js --selftest  → 22/22
   node merge.js japan /tmp/empty.js                       → 35 + 0 = 35
   TINZA_REPO=$PWD node sections/pricecheck.js japan       → wrong-product 0
                                                           → absent 38 (sourced 8 · listed 29 · new 1)
   grep '"tofu"' sections/prices.js                        → 171, not 250

⚠️ CHECK THE COLLISION MAP BEFORE AUTHORING EACH RECORD, not after.
   A moat or a law used twice is the sameness bug in content form.
   B8 added five rows to it — kaeshi/shelf-life, tofu-as-cloth, fry-first + season-for-cold,
   sujikiri + the tail water bomb, tennen-vs-yoshoku + fill-the-tail.

🔴 aburaage is now the ONLY genuinely new price key in the whole Japan file.
   A7 defers it. ⛔ NEVER alias it to tofu.
✅ dashi R13 (per LITRE), potato starch R120, chilli oil R490, tofu R171 are LIVE and CLOSED.
   Do not re-derive any of them.
✅ bamboo shoots (~R136) and red bean paste (~R120) are ON MF152 with sourced prices.
   pricecheck will now tell you this itself — the cross-read works as of 29 Jul.
⚠️ mushroom R165 and mushrooms R90 are both live keys. Use the plural.
⚠️ Do NOT regenerate ASIA_SCHEMA_KEYS.json. Frozen from wk_china.js @43.

End with: ASIA_PROGRESS.md appended, a flowchart summary, and a memory update.
```

---

## 3. WHERE JAPAN STANDS — 35 / 50

| | count |
|---|---|
| main | 11 (frozen — do not add) |
| side | 10 |
| starter | 7 |
| dessert | 5 |
| staple | **2 ← still thinnest** |
| versions | 105 |
| crossLinks | 105, **0 dead** |
| vegan-capable | 26 / 35 |
| §26 union drift | **0 / 35** |

---

## 6. ▶️ B9 SHORTLIST (35 → 40)

**Prefer staples and desserts. `main` is at 11 and stays there.**

| Candidate | Course | Notes |
|---|---|---|
| **Gohan — plain Japanese rice** | staple | The most-used thing in the file and it has no card. ⚠️ Chirashizushi owns amylose/amylopectin and the vinegar fold; Onigiri owns warm-not-hot and salt-on-the-hands. Lead on the WASH and the REST — the 10-minute steam off the heat that no packet mentions. |
| **Tsukemono — quick pickles** | staple/side | Clean. Asazuke, the overnight salt press. ⚠️ Ohitashi owns the single squeeze; Goma-ae owns the osmotic-dressing argument, so the salt-draws-water angle needs care. |
| **Nukazuke — the rice-bran bed** | staple | ⭐ Strong pick — a living ferment stirred by hand daily, and squarely in Tina's own expertise. Completely unused territory in the file. |
| **Castella (Kasutera)** | dessert | Very clean. Portuguese missionaries, Nagasaki, no butter and no dairy because it had to survive a sea voyage. |
| **Edamame** | starter | Cheap, fast, vegan, and the salt-on-the-pod-not-the-bean law is real and unused. Good balance filler. |
| **Purin** | dessert | ⚠️ **Custard overlaps my Taiyaki custard version** — the thicken-and-chill argument is spent. Needs a different lead (the caramel, or the steam-not-bake temperature). |
| **Daifuku / Kinako Mochi** | dessert | ⚠️ anko is Dorayaki's and now Taiyaki's too. Lead on the mochi pounding, never the filling. |
| **Katsudon** | main | ⚠️ overlaps Tonkatsu AND Oyakodon, and main is full. Low priority. |
| **Sukiyaki** | main | ⛔ **STILL BLOCKED.** Needs the raw-egg-dip ruling (egg CLOSED at 3) + the Chongqing Hotpot collision. |

**Suggested five:** Gohan (staple) · Nukazuke (staple) · Tsukemono (side) · Castella (dessert) ·
Edamame (starter) — takes staple 2 → 4 and adds nothing to `main`.

---

## 7. 🩸 OPEN — CARRIED INTO B9

- **China is 50/50 authored, but §26 is NOT converted.** Measured 29 Jul: all 50 records have
  versions, and **all 50 have versions with no `diet` field at all**. The drift check passes only
  because there is nothing to compare. The lane-close conversion is still entirely outstanding —
  it is a real job, not a formality.
- ✅ **costPP vs PRICE_DB — RULED §30.1, 29 Jul.** costPP is **derived** from PRICE_DB, not authored.
  The file therefore contains hand-typed figures nobody has checked. The fix is a tool,
  **`costcheck.js`**, built to pricecheck's design law (load the app's own pricing path in a vm
  sandbox, never reimplement it), reporting a tolerance band and marking any record with an ABSENT
  key as UNSCOREABLE rather than passing. ⚠️ **Authoring is unchanged until it exists** — keep
  matching sibling records, do not diverge. Block: `reference/RULING_30_COSTPP_AND_PRICE_REFRESH.md`.
- ✅ **§30.4 — `PRICE_BASIS` declared.** `prices.js` was sourced at ONE retailer (Checkers,
  mid-shelf) and this was nowhere written down. Now a constant beside `PRICE_ASOF`.
  ⛔ **Re-price at the same retailer** or the anchor walk injects a fake step-change.
  ⚠️ Never surfaces as a retailer name in app prose.
- 🩸 **Price refresh before October — §30.3.** Anchor set by hand + indexed remainder via PMBEJD /
  StatsSA. Not a lane job, but it lands before launch.
- **crossLinks cannot cross countries** — needs a ruling, not a patch. Do not loosen the assertion.
- **`leftovers` has no renderer** — authored must win, ⚠️ do NOT delete `wkLeftoverKeys()`, it feeds
  LEFTOVER_CLASS → SAFETY_CLASS food safety.
- **`merge.js` FLESH list missing `octopus` and `dashi`.**
- **The vegan-mistag warn cannot see version deltas.**
- ⛔ **WIRING** — 2 lines, at Japan close only: `<script src="sections/wk_japan.js">` in
  `index.html`, and `window.WK_JAPAN || [],` in `wkPool()` at `worldkitchen.js:58`.

---

## AFTER THE BATCH

1. **Do not ask Tina to push.** She has ruled: one commit and one push at Japan 50/50.
   That means **every future batch must attach files**, and the list only grows.
2. Write `JAPAN_B10_COLD_START.md` **from this file**, and re-read the ⛔ line before shipping it.
3. Keep the attach-list at the top current. It is now the single most important thing in this file.
