# MF158 — THE SEASON SWEEP · HEMISPHERE-FREE WEATHER CUES

> **Ruled by Tina, 5 Aug 2026.** *"Summer, either say summer with Northern hemisphere, or just
> say in warmer months, or say the season, but mention that depending on where you are."*
>
> **The wider ruling this sits under:** Tinza is not an SA-only app. Someone in Sweden, Nigeria
> or Japan must be able to browse it and make sense of it, even where we do not have their
> prices. ⚖️ SA words are still **EXPLAINED, NEVER TRANSLATED** — §33 / §33.8 stand and are not
> touched by this brief. *bredie · braai · potjie · waterblommetjie · plaaskombuis* stay exactly
> as they are, and the same courtesy is owed to Nigerian and Swedish dish names.

**Scope: 8 string replacements in 5 files. Nothing else.**

---

## 1 · ⛔ STOP-CONDITION — STEP 1 IS READ, AND IT MAY END THE TASK

Run this first:

```
cd <repo> && grep -c "in summer\|In summer" sections/wk_china.js sections/wk_europe.js \
  sections/wk_japan.js sections/wk_southafrica.js sections/wk_thailand.js
```

**Expected: china 1 · europe 1 · japan 4 · southafrica 1 · thailand 1 — total 8.**

- If the total is already **0**, this brief is DONE. **SAY SO AND STOP.**
- If the total is **anything other than 8 or 0**, **STOP AND REPORT THE NUMBER.** Do not guess
  which ones moved. ⚖️ A count that does not match is a fact about the file, not a rounding error.

---

## 2 · 🚨 THE RED LINES

⛔ **DO NOT TOUCH THESE FIVE. They were measured and ruled CORRECT AS WRITTEN.**
A future session that greps `in winter` and "fixes" them will be undoing a decision.

| record | file | the phrase | why it stays |
|---|---|---|---|
| `indonesia-es-cendol` | `wk_indonesia.js` | *cut from frozen northern lakes **in winter*** | A **historical fact** about the northern ice trade, not an instruction to the reader. The hemisphere is the point. |
| `indonesia-es-teler` | `wk_indonesia.js` | *onto a stoep **in winter*** | Explicitly **Highveld-anchored** growing advice. It already names where it applies. |
| `indonesia-ayam-tangkap` | `wk_indonesia.js` | *a north-facing wall **in winter*** | Same — already Highveld-anchored. ⚠️ **See §5, this one has a separate defect.** |
| `japan-gari` | `wk_japan.js` | *young ginger… sold **in summer*** | An **agricultural season**. The crop's cycle is the fact; only the months differ by hemisphere. The season IS the right word. |
| `thailand-sai-krok-isan` | `wk_thailand.js` | *A South African summer kitchen counter… **in winter*** | **Already the model shape.** It names the country AND gives the number (22°C). This is what good looks like. |

⛔ **Do not touch any SA, Nigerian, Swedish or Japanese dish word, gloss or name.** §33 is not
in scope. If a fix seems to require re-glossing a word, **the fix is wrong — stop and ask.**

⛔ **Do not reflow, re-indent, or re-serialise any line.** These are single-line JSON records.
`node --check` passing does **not** prove you have not mangled a neighbouring record.

⛔ **One file per commit. Five files, five commits, one push.** ⚖️ Law 5.

---

## 3 · ✅ THE EXACT CHANGE — 8 REPLACEMENTS, VERBATIM

Every `FROM` string below was verified **unique in its file** on 5 Aug 2026 (occurrence count = 1).
Match them exactly, including surrounding characters. If a `FROM` is not found, or is found more
than once, **STOP for that file and report** — do not widen the match.

### `sections/wk_china.js` — `china-zhajiangmian`
```
FROM: eating them cold-style in summer, rinse them under the tap
TO:   eating them cold-style in warm weather, rinse them under the tap
```

### `sections/wk_europe.js` — `hungary-meggyleves`
```
FROM: Often served cold in summer.
TO:   Often served cold in the warm months.
```

### `sections/wk_japan.js` — `japan-chawanmushi` (1 of 2)
```
FROM: served chilled in summer it is a completely legitimate version
TO:   served chilled in warm weather it is a completely legitimate version
```

### `sections/wk_japan.js` — `japan-chawanmushi` (2 of 2)
```
FROM: grated ginger on top. In summer this is not a compromise
TO:   grated ginger on top. In warm weather this is not a compromise
```

### `sections/wk_japan.js` — `japan-matcha-warabimochi`
```
FROM: served hot even in summer, because the whole plate is sugar
TO:   served hot even in warm weather, because the whole plate is sugar
```

### `sections/wk_japan.js` — `japan-sunomono`
```
FROM: a hot bowl of noodles in summer for the same reason
TO:   a hot bowl of noodles in warm weather for the same reason
```

### `sections/wk_southafrica.js` — `boerekos-koeksisters`
```
FROM: eat them straight from frozen in summer, a genuine plaaskombuis trick
TO:   eat them straight from frozen in hot weather, a genuine plaaskombuis trick
```
⚖️ **`plaaskombuis` is NOT touched.** The season word moves; the SA word stays and stays unglossed
exactly as it is today.

### `sections/wk_thailand.js` — `thailand-som-tam`
```
FROM: the whole argument for eating this in summer.
TO:   the whole argument for eating this in hot weather.
```

⚖️ **WHY "warm weather" AND NOT "summer (Northern hemisphere)":** every one of these eight is a
cue about the **weather the reader is standing in**, not about a month in the dish's home country.
Tina's ruling offers three routes; for this class the second route is the cheapest and the only
one that needs no gloss at all. The first route — naming the hemisphere — is reserved for cards
where the *dish's own calendar* is the fact, which is exactly why `japan-gari` is on the red-line
list instead of this one.

---

## 4 · 🧪 THE PROOF — WHAT TINA TAPS AND WHAT SHE MUST SEE

**Mechanical, before the push:**
```
node --check sections/wk_china.js sections/wk_europe.js sections/wk_japan.js \
             sections/wk_southafrica.js sections/wk_thailand.js
grep -c "in summer\|In summer" sections/wk_*.js      # japan must now show 1 (gari), rest 0
node tinza-doctor.js                                  # RED count must still be 10
node tinza-all.js thailand ; node tinza-all.js vietnam
node costcheck.js thailand                            # 0 costPP may move — this is PROSE only
```
⚖️ **If any costPP moves, something was edited that is not prose. Revert and report.**

**On live, after a HARD RELOAD** (⚖️ Law 27):
1. Open **Som Tam** → read the `howThisFeels` line. It must say *"eating this in hot weather."*
2. Open **Koeksisters** → storage line reads *"straight from frozen in hot weather, a genuine
   plaaskombuis trick"* — and **plaaskombuis is still there, still unglossed.**
3. Open **Gari** → *"sold in summer"* is **still there.** That is the red line holding.
4. Open **Sai Krok Isan** → the South African summer kitchen line is **untouched.**

⚖️ **Law 2 — it is done when Tina's finger says so, on her own device.**

---

## 5 · ⚠️ FOUND WHILE MEASURING — NOT IN THIS BRIEF, NOT YET RULED

**`indonesia-ayam-tangkap` says "a pot you can move against a north-facing wall in winter".**
In the southern hemisphere a north-facing wall is the sunny one; **in Sweden it is the shaded
one.** The sentence is correct for Tina and inverted for half the planet — and it is invisible to
a season grep because the defect is the *compass bearing*, not the month.

⛔ **Do not fix it here.** It sits in the locale bucket, and the locale mechanism — **a new field
on the record, or a §33-style authoring rule with a watcher** — is still Tina's call.

**Also still parked pending that same call:** 5 shop names (Checkers/PnP/Woolies/Spar) ·
14 rand figures written into prose · 14 SA-only availability claims (*"not really sold here"*).
**39 "in South Africa" framings were measured and are mostly the GOOD shape** — framing that
teaches rather than assumes — and are not swept.

---

## 6 · ⚖️ LAW 42 — THE RATCHET · THE NEW RUNG (SECOND COMMIT, OPTIONAL BUT OWED)

Every brief adds a check. This one is cheap:

**A rung that fails when a `wk_*.js` file contains a bare `in summer` / `in winter` / `in spring`
/ `in autumn` that is not on the five-record allowlist above.** The allowlist is by record `id`
and carries the one-line reason from the table in §2, so the next session reads *why* rather than
re-deciding.

⚠️ **PROVE IT BORN-RED before trusting it:** paste `in summer` into a scratch copy of a wk file,
watch the rung go red, then remove it. ⚖️ *A rung nobody has seen fire is a rung nobody should
trust* — same law as the doubanjiang scar: **before trusting a zero, prove the probe can return
a one.**

⛔ Ship the 8 replacements first, green, pushed. **Then** the rung. Not in one commit.
