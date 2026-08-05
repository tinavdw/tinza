# MF161 — A FAT IS NOT A PORTION · *the anchor bug*

> **Found 5 Aug 2026 on Tina's screen, live.** `china-chongqing-huo-guo` · Full Offal Spread ·
> 7 people rendered **`1.3kg beef tallow · 180g per person`** and **R702 pp / R4,915 total**.
>
> 🩸 **This is the Sambal Terasi scar wearing a new face.** 30 Jul: *"Sambal Terasi rendered
> 160g shrimp paste · R529 pp."* That was fixed with `WK_KEEP_AUTHORED` — a **card-level**
> declarative rung. **It does not help here, because Chongqing Hotpot is a legitimate main.**
> The defect this time is one **ingredient line**, not one card.

---

## 0 · THE BUG, EXACTLY

`wkClassifyMain(items)` walks the ingredient list **in authored order** and returns the **first**
line whose name matches a main category:

```
for(i=0;i<items.length;i++){ ... cat = wkMainCategory(it.name); if(cat) return { item:it, cat:cat }; }
```

**`beef tallow` contains `beef`.** It is line **1** of Chongqing Hotpot. `beef sirloin` is line
**19**. So the whole recipe is scaled so that **rendered fat** lands on the 180 g boneless-meat
plate, per person.

⚖️ **AND IT BREAKS IN BOTH DIRECTIONS — this is the half that makes it urgent:**

| direction | example | `wkEffectiveMult` at 1 guest | what the reader gets |
|---|---|---|---|
| 🔺 **INFLATES** | `china-chongqing-huo-guo` — 200 g tallow forced up to a 180 g **per-person** plate | **0.9** → ×7 guests = **6.3** | 500 g sirloin becomes **3.15 kg**. 2 litres stock becomes **12.6 litres**. **R702 pp.** |
| 🔻 **DEFLATES** | `france-soupe-a-loignon` — 2 litres of `beef stock` crushed down onto a 180 g plate | **0.171** | **The entire soup renders at 17% of its authored amounts.** |
| 🔻 | `china-hot-and-sour-soup` | **0.1** | **10%.** A soup for one that is barely a cup. |
| 🔻 | `austria-frittatensuppe` | **0.2** | 20%. |
| 🔻 | `switzerland-saffron-risotto` | **0.36** | 36%. |

**A stock-led soup is being shrunk to a tenth. A tallow-led hotpot is being multiplied by six.**
Both from the same line of code.

---

## 1 · ⛔ STOP-CONDITION

```
grep -n "function wkClassifyMain" sections/worldkitchen.js
grep -n "WK_NOT_A_MAIN\|NOT_A_MAIN" sections/worldkitchen.js
```
If a `NOT-A-MAIN` guard already exists inside `wkClassifyMain`, **this brief is DONE — say so and
STOP.** Baseline first, and write the numbers down:
```
node tinza-doctor.js      # expect RED 10
node tinza-lawcheck.js    # expect 0 red 0 drift
node costcheck.js china ; node costcheck.js europe 2>/dev/null ; node costcheck.js thailand
node costcheck.js japan ; node costcheck.js indonesia ; node costcheck.js vietnam ; node costcheck.js southafrica
```

---

## 2 · 🚨 THE RED LINES

⛔ **DO NOT edit a single record to work around this.** Reordering Chongqing's ingredients so
sirloin comes first would fix one card and leave the engine broken. ⚖️ **Law 50 — sameness is
the bug list.** **The fix is in `wkClassifyMain`, once, for all 1218 records.**

⛔ **DO NOT touch `WK_KEEP_AUTHORED`, `wkMainBase`, `wkEffectiveMult`, `wkSpreadMult` or the
taper.** ⚖️ The Portion Brain is locked: 180 boneless · 250 bone-in · 160 fish · 200 veg ·
150 side, taper 100/70/58/50. **This brief changes WHICH LINE is measured, never WHAT IT IS
MEASURED AGAINST.**

⛔ **DO NOT re-derive any `costPP` in the same commit as the code change.** ⚖️ §30.1.

### ✅ RED-LINED — MEASURED AND CORRECT, DO NOT "FIX"

| record | anchor | why it is right |
|---|---|---|
| `ukraine-salo` | `pork fat` | **Salo IS cured pork fat.** The fat is the dish. |
| `china-hong-you-chao-shou` | `pork mince, roughly 20% fat` | the word `fat` is a **spec on the mince**, not a fat ingredient |
| `china-shizi-tou` | `pork shoulder, roughly 70:30 lean to fat, hand-chopped` | same — a ratio, not an ingredient |
| `indonesia-sambal-terasi` · `sambal-matah` · `rujak` | `shrimp paste` | already protected by `WK_KEEP_AUTHORED` — **verified mult = 1** |
| `ethiopia-shiro-wat` | `shiro powder` | shiro IS the powder; `cat=pulse` correctly keeps authored amounts |
| `indian-gulab-jamun` | `milk powder` | the dough IS milk powder |
| `turkey-tarhana-corbasi` | `tarhana powder` | tarhana IS the dish |

⚠️ **Seven of the twenty-two flagged records are correct.** A guard list built by pattern alone
would break every one of them. **Read this table before writing the regex.**

---

## 3 · ✅ THE EXACT CHANGE — ONE GUARD, INSIDE `wkClassifyMain`

**File:** `sections/worldkitchen.js` · inside `function wkClassifyMain(items)`.

Add a **NOT-A-MAIN** test in the scan loop: a line matching it is **skipped for category
purposes** but **still eligible as `firstWeighted`**, so a card made entirely of stock still
resolves rather than crashing.

```
FROM:
    if(!firstWeighted) firstWeighted=it;
    cat = wkMainCategory(it.name);
    if(cat) return { item:it, cat:cat };
```
```
TO:
    if(!firstWeighted) firstWeighted=it;
    // ⚖️ MF161 (5 Aug 2026) — A FAT IS NOT A PORTION. Tina's eyes on live: Chongqing Hotpot
    // rendered "1.3kg beef tallow · 180g per person · R702 pp". `beef tallow` carries the word
    // `beef`, sits at line 1, and won the scan ahead of the beef sirloin at line 19. The same
    // line crushes 2 litres of `beef stock` onto a 180g plate and renders soupe a l'oignon at
    // 17% of its authored amounts. INFLATES one way, DEFLATES the other, one cause.
    // ⛔ These lines are SKIPPED FOR CATEGORY ONLY. They remain eligible as firstWeighted, so
    //    a card that is genuinely all stock still resolves instead of returning null.
    // ⚠️ NOT a hand-maintained id list — same design law as WK_KEEP_AUTHORED.
    if(!WK_NOT_A_MAIN.test(wkCleanName(it.name))) {
      cat = wkMainCategory(it.name);
      if(cat) return { item:it, cat:cat };
    }
```

And beside `WK_KEEP_AUTHORED`, its sibling:

```
// ⚖️ MF161 · A fat, a stock, a sauce or a seasoning paste is a CARRIER, not a portion.
// It may carry a protein word (beef tallow, chicken stock, fish sauce, shrimp paste) and
// must never win the main-ingredient scan on that word alone.
// ⛔ `fat` and `powder` are DELIBERATELY ABSENT — "pork mince, roughly 20% fat" and
//    "pork shoulder, 70:30 lean to fat" are specs on real meat, and shiro/tarhana/milk
//    powder ARE their dishes. Both were measured on 5 Aug and both must keep their anchor.
// ⛔ `salo` is pork fat and IS the dish — it survives because `pork fat` is two words and
//    `tallow|dripping|lard|suet` do not match it. VERIFY THIS IN THE PROOF.
var WK_NOT_A_MAIN = /\b(tallow|dripping|lard|suet|stock|broth|bouillon|consomme|sauce|paste|essence|extract|vinegar|oil)\b/i;
```

⚠️ **`wkCleanName(it.name)`, not `it.name`.** Same trap as MF159 — the raw name carries prep
text and the match will be unreliable. **Use the cleaned form.**

⚠️ **`ukraine-salo` is the single most likely casualty.** ⛔ **If the proof shows salo's anchor
moving off `pork fat`, STOP and report** — do not add a special case for it.

---

## 4 · ✅ COMMIT 2 — THE BEFORE/AFTER TABLE, BEFORE ANY RE-DERIVATION

⛔ **Nobody re-derives a `costPP` until Tina has read this.** Extend `splitreport.js` or write
`anchorreport.js` — **read-only**, same vm harness, **the app's own `wkClassifyMain` /
`wkEffectiveMult`, never a private copy.** ⚖️ Same design law as `merge.js`, `pricecheck.js`,
`costcheck.js`, `tinza-all.js`.

Per record, both sides: **anchor before → anchor after · mult before → mult after · costPP
before → after.**

⚠️ **BORN-RED, THREE ARMS** — ⚖️ *before trusting a zero, prove the probe can return a one*:
1. `china-chongqing-huo-guo` moves off `beef tallow` **onto `beef sirloin`**;
2. `ukraine-salo` **does NOT move** *(the true-negative arm — §5b of MF160: a probe must be shown
   to produce a true negative too)*;
3. removing `WK_NOT_A_MAIN` restores the old answer exactly.

⚠️ **`splitreport.js`'s array-discovery fix must be carried over** — `wk_france.js` declares
**two** arrays (`WK_FRANCE` and `FR_SAUCES`), and `france-soupe-a-loignon` is one of the worst
records in this brief. **A one-array-per-file loader will miss it and report success.**

---

## 5 · 🧪 THE PROOF — WHAT TINA TAPS

```
node --check sections/worldkitchen.js
node tinza-doctor.js        # RED must STILL be 10        ⚖️ Law 51
node tinza-lawcheck.js      # 0 red · 0 drift
node tinza-all.js vietnam ; node tinza-all.js thailand
node costcheck.js china ; node costcheck.js europe ; node costcheck.js thailand
node costcheck.js japan  ; node costcheck.js indonesia ; node costcheck.js vietnam ; node costcheck.js southafrica
```
⚠️ **`costPP` WILL go stale on roughly fourteen records. THAT IS THE POINT** — those cards were
costed against a wrong portion. ⛔ **List them. Do not re-derive them in this brief.** ⚖️ §30.1,
handled exactly as the 20-stale debt was on 3–4 Aug.
⛔ **`japan-nukazuke` costPP is ruling-set §31.3c — EXCLUDE FROM ALL SWEEPS.**

**On live, after a HARD RELOAD** (⚖️ Law 27):
1. **Chongqing Hotpot · Full Offal Spread · 7 people.** *HOW MUCH TO MAKE* must name **beef
   sirloin**, not beef tallow. **R702 pp must fall.**
2. **French Onion Soup.** The stock must read in **litres for the pot**, not a per-person plate.
   Its total must **rise** off 17%.
3. **Sambal Terasi.** **Unchanged.** The 30 Jul fix must still hold. ⚖️ *Never re-open a closed scar.*
4. **Salo.** **Unchanged** — pork fat is still the anchor, because salo is pork fat.
5. **My Plan survives. Servings and people counts survive.** ⚖️ Law 20.

⚖️ **Law 2 — done is when Tina's finger says so, on her own device.**

---

## 6 · ⚖️ LAW 42 — THE RATCHET

**A doctor rung that goes RED when a record's classified main matches `WK_NOT_A_MAIN`.** After
this commit the correct count is the seven red-lined survivors, so the rung ships with **that
number as its baseline** and fires the day a fat wins a scan again.

⚠️ Prove it born-RED: comment out the guard, watch it fire, restore it, watch it settle.

---

## 7 · ▶️ THE OTHER STOCK BUG — NOT THIS BRIEF

🔴 **`stock` is failing in TWO engines at once, and Chongqing Hotpot has both on one card.**

- **This brief:** stock wins the **portion** scan → the recipe is mis-scaled.
- **Still open:** stock is **over-billed in the shopping list**. `cold chicken stock` bills
  **R90 as a whole chicken in the trolley**, today. The guard at `worldkitchen.js:637` returns
  null on `stock|broth` **by design**, so the **card is right and the list is wrong** — 18 lines,
  and the fix belongs in the plan/shopping path, **not** in `wkPriceLookup`.

⚠️ **`china-chongqing-huo-guo` line 18 is `2 litres beef or chicken stock`** — an **A-or-B line**
as well, which is a third defect on the same line. **Do not fix it here.** One engine per brief.
