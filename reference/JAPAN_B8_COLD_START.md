# ▶️ JAPAN B8 — COLD START

**Paste the block below as the FIRST message of the next chat.** Attach nothing.
Everything is on GitHub. No diagnosis, no baseline hunting, no "let me check HEAD first."

⚠️ **This file was written correct from birth.** Its ancestors (`JAPAN_B5_COLD_START.md`,
`JAPAN_B7_COLD_START.md`) carried the line *"hand back once at the end"* — the instruction that lost
B7. B5 is fixed; B7 is spent and can be ignored or deleted. **Do not copy line 11 forward from an
older cold start without reading it.**

---

## 📋 PASTE THIS

```
Japan batch 8. Author 5 records: Kake Udon (staple) · Hiyayakko · Chikuzenni · Ebi Furai · Taiyaki.

git clone --depth 1 https://github.com/tinavdw/tinza.git
wk_japan.js is 30. Target 35. Read reference/JAPAN_B8_HANDOFF.md FIRST, then the
reference/ASIA_PROGRESS.md tail. Everything else you need is at HEAD — do not ask me for files.

⛔ HAND BACK A DOWNLOAD AFTER EVERY SINGLE RECORD. Never batch to the end.
   B7 was lost exactly this way. One record = node --check + merge + pricecheck
   + present_files, then the next. No exceptions, no "I'll collect at the end."

SETUP — run all three, report any that misses:
   echo "module.exports = [];" > /tmp/empty.js
   TINZA_REPO=$PWD node sections/pricecheck.js --selftest   → 22/22
   node merge.js japan /tmp/empty.js                        → 30 + 0 = 30
   TINZA_REPO=$PWD node sections/pricecheck.js japan        → wrong-product 0

⚠️ CHECK §4 OF THE HANDOFF (the collision map) BEFORE AUTHORING EACH RECORD, not after.
   A moat or a law used twice is the sameness bug in content form.

⚠️ Kake Udon: takes the STAPLE slot. Do NOT re-teach dashi (japan-staple-dashi owns it) or the
   noodle rinse (Zaru Soba owns the squeak). Lead on kaeshi as a keeping-sauce.
   ⚖️ If kaeshi or mentsuyu needs a price key it is quoted PER LITRE of made-up sauce, following
   dashi R13 and stock R8 at prices.js:97 — never per kg of concentrate.
⚠️ Hiyayakko: the whole record is the tofu itself and the toppings. Cheap, vegan-capable, and the
   one place to talk about what tofu actually IS. Agedashi Tofu owns frying it.
⚠️ Chikuzenni: nimono, the New Year table. Otoshibuta belongs to Nikujaga — one clause and a
   pointer, never re-taught.
⚠️ Ebi Furai: panko is Tonkatsu's. Lead on the straightening cut — nicking the belly so the prawn
   cannot curl.
⚠️ Taiyaki: overlaps Dorayaki. Needs a lead that is neither the batter nor the red bean.
⛔ Sukiyaki is NOT in this batch. It needs a ruling first (raw-egg dip vs egg CLOSED at 3, plus the
   Chongqing Hotpot collision).

🔴 aburaage is the one open new price key. A7 defers it. NEVER alias it to tofu R250.
✅ dashi R13 and potato starch R120 are LIVE and CLOSED. Do not re-derive them.
⚠️ If pricecheck reports dashi ABSENT, origin is behind my local copy — that is a false alarm about
   the repo, not a gap. Add nothing to prices.js.
⚠️ mushroom R165 and mushrooms R90 are both live keys. Use the plural.
⚠️ Do NOT regenerate ASIA_SCHEMA_KEYS.json. Frozen from wk_china.js @43.

End with: ASIA_PROGRESS.md appended, a flowchart summary, and a memory update.
```

---

## AFTER THE BATCH

1. Commit the handed-back files, then **one** push (Netlify is 15 credits per deploy).
2. Write `JAPAN_B9_COLD_START.md` **from this file**, and re-read the ⛔ line before shipping it.
3. 🩸 Still needing Tina's ruling: **push `wk_japan.js` unwired at every batch close?**
   One credit, zero change to the live app.
