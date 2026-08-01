# 🇹🇭 THAILAND B1 — PASTE-IN BLOCK FOR `reference/ASIA_PROGRESS.md`

⚠️ **THIS IS A PASTE-IN BLOCK, NOT A REPLACEMENT FILE — AND THAT IS DELIBERATE.**
`ASIA_PROGRESS.md` **at origin is badly behind Tina's local copy**: it reads
**Japan 20/50 · Indonesia 0/50 · Thailand 0/50 · TOTAL 77**, while the code at HEAD holds
**China 50 · Japan 50 · Indonesia 42**. Rebuilding "the complete file" from HEAD would
silently delete every Japan and Indonesia entry Tina has locally — the same shape as the
ASIA_PROGRESS truncation and the `TINZA_SPRINT_PLAN` split-brain.
✅ **Paste the block below in. Do not let anything regenerate that file.**

---

## 🇹🇭 THAILAND — B1 CLOSED 31 Jul 2026 · 0 → 4

**Counted with node at origin HEAD `8c9e3af`, never quoted from memory:**
**China 50 · Japan 50 · Indonesia 42 · Thailand 4 · Vietnam 0 · 1,167 WK records total.**

⚖️ **FIRST BANK WAS 4 BY MECHANICS, NOT BY CHOICE** — A6 needs exactly 3 live crossLinks,
they cannot cross countries, and merge fails a self-link, so an empty file has nothing legal
to point at. The four link to each other in a closed ring. **From here: one record, one bank.**

| # | id | course | versions · costPP |
|---|---|---|---|
| 1 | `thailand-pad-thai` | main | Jay/Budget/Vegan **R61** · 🏆 Prawns **R92** · Chicken **R75** |
| 2 | `thailand-som-tam` | side | Tam Taeng Kwa/Budget/Vegan **R16** · 🏆 Som Tam Thai **R22** · Prawns **R43** |
| 3 | `thailand-massaman` | main | Gai/Budget **R78** · 🏆 Nuea/Beef **R83** · Jay/Vegan **R91** |
| 4 | `thailand-khao-niao-mamuang` | dessert | Nom/Budget/Vegan **R18** · 🏆 Mango **R22** · Sangkhaya/Vegetarian **R30** |

⚖️ **EVERY `costPP` ABOVE IS ENGINE-DERIVED PER §30.1, NOT AUTHORED.** Merged into a throwaway
clone first, read off `costcheck`'s engine column, set, then merged for real. Budget fork
LEADS and IS cheapest in all four. `costcheck thailand` = **12 ✅ · 0 🟠 · 0 🔴 · 0 ⬜.**

### ✅ GATES AT BANK
`merge` all assertions pass · `costcheck` 12/12 ✅ · `pricecheck` **39 exact · 0 wrong-product
· 0 absent** · `wowcheck` every mechanical `/wow` §7 + `/wk` §7 box ticked · `tinza-echo` clean
on voice echo, opening formula, mascot, lecture, locale **and gloss** · `lawcheck` **0 red ·
0 drift** · `doctor` **RED 10 = the known floor.**
**No regression on closed countries:** china 76✅/0🔴 · japan 136✅/**3🔴 pre-existing** ·
indonesia 126✅/0🔴 — unchanged. **No new price key was added, so no key could outrank another.**

### 🟠 CARRIED, NOT NEW
`coriander seeds` → `coriander` **R650, the fresh-herb price**, and `cumin seeds` → `cumin`
R470. Both are the REVIEW class the cold start already names. They print, they do not block.

### 🆕 THREE THINGS FOUND THIS BANK

1. 🩸 **`merge.js` FALSE\_FRIENDS IS MISSING `coconut cream`.** `thailand-khao-niao-mamuang`
   is correctly tagged vegan, but the vegan-mistag rung strips `coconut milk` from the
   ingredients before matching and **does not strip `coconut cream`** — so the bare word
   `cream` hits the DAIRY\_EGG list and it warns on a correct record, every merge.
   ⚖️ **Same family as the FLESH list missing octopus + dashi.** A rung that fires on a
   correct record is the rung she learns to scroll past. **One word closes it:**
   `FALSE_FRIENDS` in `merge.js` → add `'coconut cream'` **before** `'coconut milk'`.
   ⛔ **Not done in this bank** — it is an edit to the gate itself, and `merge-selftest.js`
   must be re-run and given a born-RED proof. **Tina's call.**
2. ⚠️ **`preserved radish` (chai poh) prices as FRESH `radish` R108** — a wrong-product risk
   the cold start had not probed. Kept **out** of Pad Thai's ingredient line and named
   in-method instead, so nothing renders a wrong number.
3. 🔵 **`long beans` is ABSENT** (already listed) — Som Tam uses `green beans` R58 and
   **says so on the card** rather than substituting silently.

### ⛔ SPENT — DO NOT REUSE
**Moats:** statecraft/propaganda · food science/enzymes · poetry & etymology · genetics.
**Still unspent:** archaeology · mathematics & calendrics · textiles · cartography · entomology.
**Leads:** soak-never-boil · bruise-never-grind · red-paste-plus-dry-roasted-whole-spices ·
soak-then-steam-never-absorb.

### ▶️ NEXT
**B2 = one record, one bank.** `Moo Satay` and `Moo Ping` remain **STRUCK before writing**
(four Indonesian sate cards own the skewer; Gado-Gado owns peanut sauce outright).
