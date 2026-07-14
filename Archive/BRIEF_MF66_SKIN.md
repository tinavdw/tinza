# BRIEF — MF66 · THE RESULTS ARE BLACK
**One commit. `utils.js` only. `core.js` is NOT touched — it stays at 4149.**

---

## 🚨 GATE — ANSWER THIS BEFORE YOU DO ANYTHING ELSE

Your window has shown **`+148 −32`** since **before the census started.** The census is read-only, so **those are not your edits.**

**Something in the working tree is uncommitted, and 32 lines are marked deleted.**

Run and paste the raw output:

```
git status
git diff --stat
git diff
```

**Then answer in one line: what are the +148 and the −32?**

- If they are **ours and intended** — say which brief they came from, and I will rule on whether they ship.
- If **you cannot account for them** — 🛑 **STOP. WRITE NOTHING. TELL TINA.** A stray push carries them to live.

⚖️ **Law 5 — ONE THING PER COMMIT.** MF66 cannot ride to production with 148 unexplained lines strapped to its back.

---

## THE VERDICT, ALREADY EVIDENCED (do not re-litigate it)

The search result cards are **hand-built** in `renderSearchResults()` (`utils.js:263–296`) with hardcoded dark hexes:

- **`color:#4a3020`** at lines **267 · 278 · 292**
- **`color:#6a4020`** at line **291**
- **Not one `var(--token)`.** They never flip with the Warm Spice skin. On the Search page shell they render **black on black.**

⚖️ **This is not cosmetic. The founding rule is "readable by a child and a grandma on a mobile phone." A grandma cannot read them.**

---

## ⛔ WHAT THIS BRIEF IS **NOT**

**Do NOT convert the search rows to call `warmCard()`.**

I know Law 6 says *"don't patch N sites, build the one thing they should all call."* **I am declining it here, and it is a number, not a preference:**

`warmCard()` is a **photo card — 6–8 DOM nodes.** A search result is a **compact row.** That list is **rebuilt on EVERY KEYSTROKE, 40 rows deep, on a tablet.** That is the exact ceiling we measured in MF67 — the one that stopped us lifting the render cap.

⚖️ **Law 36, corollary — MEASURE THE CEILING BEFORE YOU CHANGE WHAT RENDERS INSIDE IT.**

Whether search rows should one day *be* `warmCard()`s is **a different question, a different commit, and it needs a node-count first.** It is not MF66.

---

## 🛑 STOP-CONDITION — ANSWER BEFORE YOU EDIT (⚖️ Law 35)

**Do not invent a token name.**

1. **Read the `:root` block** (wherever the Warm Spice tokens are actually declared — `index.html` or the stylesheet). **List every colour token by its real name.**
2. **Name the exact token** each of the four hexes becomes. Not "a token" — **`var(--x)`, by name, and it must already exist.**
3. **Prove it survives on BOTH backgrounds:**
   - the **cream section tiles** in Breakfast/FMF *(where results sit directly under them)*
   - the **Search page shell** in Braai/Spice *(where it currently renders black-on-black)*

🚨 **Black-on-black on the Search page means the SHELL very likely has a hardcoded background of its own.** **Sweep it in the same pass** — grep the Search page render (`utils.js` ~247) for `background:#` / `background-color:#` / `rgb(`. **If you find one, it is part of MF66 and it is fixed in this commit.**

**If a token you need does not exist, or resolves wrong on one of the two backgrounds — SAY SO AND STOP. Do not create a new token without a ruling.**

---

## THE WORK

**File: `sections/utils.js`. That file only.**

- Replace `#4a3020` (×3) and `#6a4020` (×1) with the **named, verified** Warm Spice tokens.
- Fix the Search page shell background **if and only if** the sweep finds a hardcoded one.
- **`font-size:11px` stays** unless it is genuinely unreadable — that is a separate call and Tina makes it. **Report the sizes; do not change them silently.**
- **Cost colours are LOCKED and out of scope:** food cost `#46530c` · shop-spend `#876213`. **Do not touch them.**

**Writes via Node `fs.writeFileSync`. NEVER Python.**

---

## PROOF (⚖️ Law 2 — a report is not proof)

`localhost:8899` **does not close this bug.** **Tina's fingers on live do.**

Report back with:
1. **The `git diff` verdict** from the gate above.
2. The **token map** — old hex → new token, four rows.
3. `utils.js` **line count before and after.**
4. `core.js` **line count — it must still be 4149.**
5. `node --check` *(⚖️ Law 1 — it proves nothing. Run it anyway.)*

**Then Tina hard-reloads live on her tablet and reads the results with her own eyes. That closes it. Nothing else does.**

---

## ✍️ ALSO — HAND BACK CENSUS 1

When your four census agents return, **deliver the Census 1 table** *(every screen: BOX · PILL · NONE)* as agreed. **That is a report, not a commit.** MF63 and MF64 are ruled off that table, **not** in this brief.
