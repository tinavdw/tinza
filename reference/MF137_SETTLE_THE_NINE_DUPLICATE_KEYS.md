# MF137 · SETTLE THE NINE DUPLICATE KEYS

**Written 22 Jul 2026 · for Code · one short session**
**Files touched: `sections/core.js` and `sections/prices.js`. Nothing else.**
This job resolves content decisions Tina has made. It adds no features, fixes no logic, and touches no instrument.

---

## WHY

Rung 27 (MF135) went RED on nine same-object duplicate keys. In every case the **second definition wins silently** and the first has never once been used. Two of the nine were doing real damage:

- **`pastry dough` → `puff pastry`.** All three recipes using it are *fried parcels* — minced fish and shrimp bound in a milk-and-flour sauce, wrapped in dough, fried. Puff pastry is a bought laminated product that these recipes never touch. They have been costed against it anyway.
- **`broad beans` → `butter beans`.** Broad beans **are** fava beans; butter beans are limas — a **different legume**. The method line reads *"slip off the grey skins for the brightest green"*, which no butter bean has. At R68/kg vs R35/kg, the wrong bean was also costing **nearly double**.

⚖️ §20 · Law 39 — a silent hole needs a mechanical watcher. Rung 27 found these. This closes them.

---

## THE FIVE EDITS

### 1 · `sections/prices.js` — delete the dead `pork belly`

Delete **L154 `"pork belly": 120`**. L581 (**R150**) survives.
*Ruled by Tina 22 Jul. SA shelf range measured R129.99 (Pick n Pay) to R186.99 (Woolworths); R150 is the honest middle, not either extreme.*

### 2 · `sections/prices.js` — delete the stale `pita_each`

Delete **L8 `"pita_each": 4`**. L487 (**R7.70**) survives.
*R7.70 is Tina's own measured number — R46 per 6-pack, already commented in place. The R4 is a stale guess.*

### 3 · `sections/core.js` — `coconut`, delete the loser

Delete **L1011 `"coconut":"coconut flakes"`**. The L1053 entry (**`desiccated coconut`**) survives.
*34 ingredient lines already write "desiccated coconut" in full; only ~3 write bare "coconut". The winner matches house style.*

### 4 · `sections/core.js` — `pastry dough`, EDIT then delete

⚠️ **This one is not a delete. Do both halves.**

- **EDIT** the entry inside **L1053**: `"pastry dough":"cake flour"` → **`"pastry dough":"shortcrust pastry"`**
- **DELETE L1094** `"pastry dough":"puff pastry",`

`"shortcrust pastry": 100` **already exists** at `prices.js:658`. Do not add a key. Do not invent one.

*Neither original was right. Puff pastry is laminated and bought; cake flour is a raw ingredient standing in for a dough. Shortcrust is the actual product and the key was already sitting there unused.*

⛔ **Do not touch `"flour-based dough":"cake flour"`** on the same line. Different key, not in scope.

### 5 · `sections/core.js` — `broad beans`, delete the loser

Delete **L1152 `"broad beans":"butter beans"`**. The L1053 entry (**`dried fava beans`**) survives.

### 6 · `sections/prices.js` — correct `shortcrust pastry` to R82

**L658** `"shortcrust pastry": 100,` → **`"shortcrust pastry": 82,   // R32.99/400g PnP Today (Tina, 22 Jul) — same shelf price as puff`**

**Why this one price change is IN scope when a sweep is not.** Edit 4 repoints `pastry dough` at this key. Shipping the alias fix while knowingly leaving its target 21% high would fix the pointer and hand back a wrong number in the same commit.

Measured 22 Jul by Tina, PnP and Shoprite:

| | key was | shelf | per kg |
|---|---|---|---|
| puff pastry | 80 | R32.99/400g | R82.48 — **key is fine** |
| shortcrust pastry | 100 | R32.99/400g | **R82.48 — key was 21% high** |

Shortcrust and puff are the **same shelf price** — R32.99/400g for Today brand at Pick n Pay. The old R100 assumed R40/400g, which no shop charges.

⛔ **This is the ONLY price edit in this job.** See "out of scope" below.

### 7 · The four that agree — delete the loser, no thought required

Both definitions are identical, so this is pure tidy with **zero behaviour change**:

| file | key | delete | survives |
|---|---|---|---|
| `core.js` | `niter kibbeh` | L1007 | L1053 · ghee |
| `core.js` | `fish stock` | L1032 | L1053 · stock |
| `core.js` | `phyllo sheets` | L1053 | L1083 · phyllo pastry |
| `core.js` | `sukuma wiki` | L1053 | L1145 · kale |

*Note `phyllo sheets` is the one where L1053 is the LOSER, not the winner. Read the rung output, don't pattern-match off the others.*

---

## ⚠️ WARN HER ABOUT THE DIFF

`core.js:1053` is a **single line several thousand characters long** holding dozens of aliases. Edits 3, 4, 5 and three of the four in step 6 all land inside it.

**GitHub Desktop will show that entire line as one changed line.** She stages line by line (⚖️ census check 23) and this will look alarming — like the whole alias map was rewritten.

**Tell her explicitly at handback:** one line changed, six entries within it, and list them. Do **not** reformat or split L1053 to make the diff prettier — that is a refactor, it is out of scope, and it would make the diff genuinely unreadable.

---

## ACCEPTANCE — MEASURED, NOT CLAIMED

| # | assertion | expected |
|---|---|---|
| 1 | `node tinza-census.js` rung 27 | **0 duplicate keys — GREEN** |
| 2 | census RED total | **20 → 19** |
| 3 | `node tinza-doctor.js` | **9** — unchanged |
| 3b | `shortcrust pastry` | **82**, exactly one occurrence |
| 4 | `allRecipes()` | **2083** — unchanged, ⚖️ rung 26 |
| 5 | every section non-empty | 12 rooms, unchanged |
| 6 | `pastry dough` resolves | → `shortcrust pastry` → **R82/kg** |
| 7 | `broad beans` resolves | → `dried fava beans` → **R35/kg** |

**Assertions 6 and 7 must be proven by resolving a real recipe**, not by reading the map. Cost one rissol recipe and one broad-bean recipe before and after and state both numbers. The cost **should** change — that is the bug being fixed, and Tina needs to see the size of it.

⚖️ `node --check` proves the file parses. It proves nothing about the data.

---

## OUT OF SCOPE — DO NOT DO THESE

- ⛔ **Do not sweep prices.** Edit 6 is the ONLY price change. It is in scope because edit 4 repoints an alias at that exact key. No other key moves, however wrong it looks.
- ⛔ **Do not touch `phyllo pastry`.** Keyed R118; PnP shows 500g at R51.99 = R103.98/kg, so it looks ~13% high. **One data point at a different pack size — filed to the fix queue, not this job.**
- ⛔ **Do not add a fresh broad bean key.** The recipes use fresh podded beans and the only key is dried. Real gap, Tina's shopping trip, not a code edit.
- ⛔ **Do not reformat `core.js:1053`.**
- ⛔ **Do not touch rung 27 itself.** If it still reports a duplicate, the edit is wrong, not the rung.
