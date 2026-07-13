# GATE — ANSWER BOTH. WRITE NOTHING UNTIL YOU HAVE.

**The census is accepted. It was excellent. Two things stand between you and MF66.**

---

## 1. 🧾 THE `+148 −32`

Your window has shown **`+148 −32`** on `tinza / main` **since before the census started** — and you have just told me **"zero lines written."**

**So who wrote 148? And what are the 32 deleted lines?**

```
git status
git diff --stat
git diff
```

**Paste the raw output. Then one line: what is it?**

- If it is **ours** — name the brief it came from.
- If **you cannot account for it** — 🛑 **STOP. TELL TINA. WRITE NOTHING.**

⚖️ **Law 5 — ONE THING PER COMMIT.** MF66 does not ship with 148 unexplained lines strapped to its back.

---

## 2. 🎨 PROVE THE TOKENS ARE REAL

Your "Should be" column names **`var(--ink-mut)` · `var(--ink-soft)` · `var(--card2)` · `var(--line2)` · `var(--ink)` · `var(--accent)`.**

**The ONLY tokens verified so far are `warmCard()`'s: `--card` · `--line` · `--on-media` · `--green`.**

🚨 **If you invented `--ink-mut`, that text renders as an inherited default and we ship a NEW bug on top of the old one.**

**So:**

1. **Read the `:root` block** — wherever the Warm Spice tokens are actually declared. **Paste it in full, verbatim.**
2. **Re-issue the token map**, and mark every row: ✅ **token exists in `:root`** or ❌ **DOES NOT EXIST**.
3. **If a token you need does not exist — SAY SO AND STOP. Do not create one.** A new token is a **ruling**, and **Tina makes rulings.** ⚖️ Law 11 · Law 15.

**And the one the census did not answer:**

4. **`utils.js:250` — the Search-page INPUT** is `background:#1a1208; border:2px solid #c06020; color:#f5e8cc`. **That input sits on a PAGE, not over a photo.** But WK's input sits **over a media photograph.** **`var(--on-media)` is for text on media.**
   **→ Does the same token work in BOTH places, or do they need different ones?** **Answer before you touch line 250.**

---

## ✅ ALREADY RULED — DO NOT RE-OPEN

- **DO NOT route `renderSearchResults` through `warmCard()`.** You are right that it is the elegant fix. **It is `MF71`, it is parked, and it is gated on ONE question you have not answered: DOES `warmCard()` RENDER AN `<img>`?** If it does, that is **40 images decoding per keystroke on a tablet.** ⚖️ **Law 36 corollary — measure the ceiling before you change what renders inside it.** *(You may answer the `<img>` question in passing. You may not act on it.)*
- **DO NOT rewrite the `sectionHeader()` headers.** Your own stop-condition fired: the FMF/WK/Events/Braai **input** path is already shared and correct.
- **DO NOT resize the Braai/Spice pill.** It dies with MF63.
- **DO NOT touch Budget.** Its in-section filter may be **correct by accident** — MF48 ruled Budget is *a constraint wearing a room's clothes.* **That needs a ruling, not a refactor.**

---

## THEN — AND ONLY THEN — MF66

Per `BRIEF_MF66_SKIN.md`. **`sections/utils.js` ONLY.** Swap the **11 cited hardcoded declarations** for **verified** Warm Spice tokens.

Includes the **near-black card itself** — `background:#161210` at `utils.js:287`. **That is the actual "black."** The metadata browns are dark-on-dark **because the card underneath them is a dark-theme relic.**

**Report back:**
1. `git diff` verdict
2. `:root`, pasted whole
3. The token map, every row marked ✅ or ❌
4. `utils.js` lines before / after
5. **`core.js` — must still be 4149**
6. `node --check` *(⚖️ Law 1 — it proves nothing. Run it anyway.)*

**Writes via Node `fs.writeFileSync`. NEVER Python.**

**Then Tina hard-reloads live on her tablet and reads it with her own eyes. That closes it. Nothing else does.** ⚖️ Law 2.
