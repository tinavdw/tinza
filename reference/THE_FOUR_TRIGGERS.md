# 🔤 THE FOUR `/` TRIGGERS — the answer to "what about the other / ?"

**Tina, 30 Jul 2026: "you forgot the /wow with indonesia, what about the other / ?"**
She was right, and the honest diagnosis is worse than one forgotten trigger. **There are four, and
only `/wow` was ever in my memory.** Indonesia *is* World Kitchen, so `/wk` applied to all eleven
records and was never run once.

| trigger | file | judges | question |
|---|---|---|---|
| `/wow` | `standards/WOW_STANDARD.md` | **the food** | "Is this recipe good enough?" |
| `/wk` | `standards/TINZA_WK_STANDARD.md` | **World Kitchen completeness** | "Is it complete, correctly placed, correctly displayed?" |
| `/tinza` | `standards/TINZA_STANDARD.md` | **the voice** | "Does this SOUND like Tinza?" |
| `/bug` | `standards/BUG_STANDARD.md` | **the code** | "Is this broken?" |

⚖️ **Law 23, from `TINZA_STANDARD.md`:** two things sharing a name do not share a fix. **`/wow` judges
the DISH. `/tinza` judges the VOICE. A card can pass `/wow` and still fail `/tinza`** — that is exactly
the failure that file exists to catch.
⚖️ **`/wk` pairs with `/wow`:** `/wow` = *is it wonderful?* · `/wk` = *is it complete, correctly placed
and correctly displayed?* Both must pass. `/wk` §7 is explicit: **a WK card is not done until every box
is ticked.**
📌 The design system (palette · fonts · box styles) is **NOT** a `/` trigger — it is applied
automatically by the shared `recipePage()` engine.

---

## ✅ WHAT WAS ACTUALLY WRONG, AND WHAT WAS NOT

**`wowcheck.js` was built and run against all 111 banked Asia records.** The result on Indonesia:

> **11 records · 0 hard failures · 0 warnings.** Every mechanical box in `/wow` §7 and `/wk` §7 ticked.

So the substance of `/wow` held — but that was **luck rather than a gate**, because the checklist was
living in my memory instead of in a tool. Memory is exactly where `/wk` went missing, where the Japan
counts went stale, and where "dashi unsourced" survived after it was sourced.

**Two things I had feared were gaps and are NOT:**
- **`photoName` omitted is CORRECT.** `/wk` §6: *"If not shot yet: omit `photoName` → clean emoji
  fallback. Never point at a missing file."* The whole Asia lane rightly omits it.
- **Prose `pairsWith` is right for this lane.** §1 wants C4-verified clickable dishes; in the Asia lane
  **`crossLinks[]` is that mechanism** and merge.js already fails a dead target. Japan and China do the
  same. Consistent, not a gap.

---

## 🔴 FOUR FALSE POSITIVES THE TOOL PRODUCED ON ITS OWN FIRST RUN — all fixed, all proven

The first run reported **23 hard failures across Japan and China. Twelve of them were bugs in my tool**,
and every one would have sent Tina to fix something that was not broken. That is the same harm the tool
exists to prevent, arriving from the other direction.

| # | The false positive | The fix |
|---|---|---|
| 1 | **"spar" matched inside "spare" and "sparingly"** — 12 records flagged | word-boundary matching; `clicks` dropped from the list entirely, since it is an ordinary verb and no boundary rule saves it |
| 2 | 🔴 **"leftovers needs 2" was MY INVENTION.** `/wk` §5 says *"an explicit line"* — **singular**. Five China records were failed against a rule that does not exist | one line now WARNS as thin; only an **empty** array fails |
| 3 | 🔴 **"not why-led" flagged 8 densely why-led records** — they said *"what makes"*, *"the point"*, *"reason"* instead of *"because"* | **demoted from FAIL to WARN.** It fails in both directions and cannot be mechanised, so it moved to the judgement list where it belongs |
| 4 | **`china-jiao-yan-you-yu` storage flagged for not saying "fridge"** — it says *"Eat it now. There is no honest way to store fried squid"*, which is a correct and deliberate answer | "does not keep" is now a valid storage answer |

⚖️ **INVENTING A STANDARD AND THEN FAILING HER CODE AGAINST IT IS WORSE THAN MISSING ONE.** #2 and #3
are that error, and both are recorded in the file at the line that made them.
⚖️ **Both wrong proofs were REPOINTED, never deleted** — the pricecheck RED-2 precedent. A proof whose
subject turns out to be wrong gets aimed at the rung that is actually real.

**After the fixes: `indonesia 0 · japan 0 · china 0 hard failures.` `--selftest 29/29.`**

---

## 🩸 WHAT IS REAL DEBT, and it is a COSTING problem not a style one

| lane | A-or-B lines that **price nothing** | prep-in-the-name | thin leftovers |
|---|---|---|---|
| **Indonesia** | **0** | **0** | **0** |
| Japan | **3** | 41 | 0 |
| China | **35** | 135 | 5 |

⛔ **The A-or-B lines are the ones that cost money.** `25g rock sugar (or white sugar)` ·
`300g silken or soft tofu` · `30ml shaoxing wine (or dry sherry)` — **no contiguous phrase matches a
key, so the line prices NOTHING**, which is class 2 of the four mechanical classes in the cold-start
doc. 38 of them are live across two pushed country files. This is the same family as China's 67
will-not-price count-on-weight lines and belongs in the same sweep.
⚠️ `prep-in-the-name` is a **warning, not a breach** — it violates `/wow` §3's "prep goes in the method"
but it also defeats aliases and `_each` keys (class 1). 176 lines, mechanical, no judgement needed.

---

## 🔴 `/wk` §6 — THE PHOTO AUDIT, run for the first time: **8 BROKEN LINKS**

§6 says *"Run `node Tools/photo-audit.js` before every push (green = 0 broken)"*. It has never been run
in these sessions. It is **not green**:

    beef stock · chicken stock · Dijon mustard · mango chutney
    mayonnaise · sriracha · tomato ketchup        [all in spice.js]

Every one is a **case mismatch** — the data asks for `mayonnaise.jpg`, the file is `Mayonnaise.jpg` —
and §6 warns that resolution is **case-sensitive on the live server**. So these are broken on live and
would fail the pre-push gate at the ~25/50 push.

⚠️ **NOT TOUCHED, and deliberately.** These are in `spice.js`, a working section, and **Stability Rule 1
says never edit a working section unless that IS the session purpose.** It is eight string cases and one
edit; say the word and it is done, but it is not mine to take unasked.
📌 None of the 8 is in World Kitchen. Indonesia contributes zero, because the lane correctly omits
`photoName`.

---

## ⛔ THE SEQUENCE FROM NOW ON

    node --check           → syntax
    node wowcheck.js <country> batch.js   → /wow §7 + /wk §7, BEFORE the merge
    node merge.js <country> batch.js      → 40 assertions + the state ledger
    node pricecheck.js <country>          → wrong-product / will-not-price / absent
    node priceledger.js --check           → provenance, after any prices.js edit
    node Tools/photo-audit.js             → before every push (green = 0 broken)

**Still Tina's eyes only, and `wowcheck` prints this list every run rather than pretending to have
checked it:** does the dish EARN ITS PLACE (`/wow` §2, Shelf-WOW) · is the moat genuinely SURPRISING and
the angle unreused · **is the method why-led** · dish-type make-or-breaks (`/wow` §4 — ferments need
salt %, ambient temp and a safety note) · and **all of `/tinza`: read it aloud, and if it sounds like a
database it fails.**
