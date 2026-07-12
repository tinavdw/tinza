# TINZA — CODE BRIEF · 12 Jul 2026 (EVENING)
## RULINGS + BUILD · MF28 phase 2

**Repo:** tinavdw/tinza · **Live:** tinza.netlify.app · **Last published:** `main@403846b`

---

## STATUS IN (what you told me)

| Work | State |
|---|---|
| Back-button 4a + 4b | ✅ committed to working tree · `core.js` 4074→4091 · **NOT PUSHED** |
| L1 (kill `key.includes(q)`) | ✅ committed to working tree · `data.js` · **NOT PUSHED** |
| L2 collision guard | 🔬 dry-run only. Held for ruling. |
| L3 identity blanket | 🔬 dry-run only. **Held for ruling — see RULING 1.** |

**Nothing is live.** Two proven fixes are sitting in a working tree where nobody can use them.

---

## ⚖️ THE LAW — UNCHANGED, PLUS TWO NEW ONES

1. `node --check` PROVES NOTHING.
2. A REPORT IS NOT PROOF. A PASSING TEST IS A REPORT TOO. **Prove it per-section. All 12 rooms, named individually.**
3. SILENT WRONG IS WORSE THAN LOUD MISSING.
4. A NARROW QUESTION GETS A NARROW ANSWER. Ask *"what is NOT guarded?"*
5. **LOCALHOST IS NOT LIVE. COMMITTED IS NOT PUSHED. PUSHED IS NOT DEPLOYED.**
6. Don't patch N sites. Build the one thing they should all call.
7. File writes: Node `fs.writeFileSync` ONLY. Minimum-file-size guard on every destructive op.
10. **THE BUG WAS IN THE DATA, NOT THE CODE.**
12. **FAIL-LOUD IS THE NET. PRICED-CORRECTLY IS THE GOAL.** Don't ship a loud blank when the answer was already sitting in the database.
13. 🆕 **A GUARD THAT NULLS A CORRECT ANSWER IS A BUG, NOT A SAFETY FEATURE.** (This is why L3 is dead.)
14. 🆕 **DRY-RUN BEFORE SHIP.** You proposed L3, dry-ran it, and killed it on the evidence. That is the standard now. Every guard gets a dry-run with its false-positive list *before* it is built.

---

# JOB 0 — PUSH WHAT IS ALREADY TRUE. DO THIS FIRST.

Before one more line of new code:

1. Push **back-button 4a + 4b + L1** as their own commit(s).
2. Wait for Netlify to say **Published**. Report the hash.
3. Tina then walks the browser check herself: **Breakfast → cross-link recipe → Back → still Breakfast.** All 12 rooms.

**Why now and not batched:** if L2 goes wrong, a rollback must not take the back-button fix with it. The back-button is the thing Tina *feels* every single day. It ships tonight.

---

# THE RULINGS

## RULING 1 — L3 IS DEAD. Ship L1 + L2 + targeted data fixes. ✅ (your rec, adopted)

Your dry-run is the evidence. `Coconut oil for frying → coconut oil` is a **correct key** and L3 nulls it. `Sunflower or pumpkin seeds → pumpkin seeds` is **correct** and L3 nulls it. A guard that nulls a correct answer is a bug (Law 13).

And you're right that the money set is **listable** — which means it belongs in the DATA, not in a blanket rule (Law 10).

**BUT — L3's real job was never guarding. It was DETECTING.** That job doesn't go away. See **JOB 3: the Fallback Census.**

## RULING 2 — L2 CONFIRMED, AND EXTENDED. Dry-run the extension before you build it.

**Your rule stands exactly as written:** fire only when the NAME is purely plant/identity-qualified **AND** the resolved key is a **BARE animal noun**. It does not misfire on `coconut milk` / `peanut butter` / `soy sauce`. Correct. Ship that logic.

**Confirmed bare-animal set:**
`milk · butter · cheese · cream · yoghurt · yogurt · buttermilk · ghee · honey`

**ADD THESE — candidates, dry-run first, report false positives:**
`mince · egg · eggs · bacon · chicken · beef · stock · broth · sausage · fish`

Reasoning — these are the **same refund, different noun**:
- `soya mince` / `vegan mince` → **MINCE → BEEF MINCE**. Soya mince is a real SA product (Knorrox/Toppers). This is a screenshot.
- `flax egg` / `chia egg` → **EGG**.
- `vegetable stock` / `veg broth` → **CHICKEN STOCK**.
- `coconut bacon` / `vegan bacon` → **BACON**.

**Do NOT build until you have dry-run the additions and shown me the false-positive list.** If `fish` misfires on `fish sauce`, or `stock` misfires on something real — trim it and say so. Evidence, then build. (Law 14.)

## RULING 3 — "A or B" LINES = **MF37**. It is a DATA fix. Tina splits them.

You're right: `Milk or oat milk` violates the INGREDIENT STANDARD (one product per line, name = what you BUY). No resolver can fix an authoring bug.

- **Produce the full list**, grouped by room, showing what each line resolves to today. **Do not edit a single recipe.**
- **Do NOT null them** — most resolve correctly and Law 12 says don't ship a loud blank when the price is right.
- **⚠️ EXCEPT the refund class:** any `A or B` line where **one side is animal and the other is plant** (`Milk or oat milk` · `Cream cheese or cashew cheese` · `Almond or cashew butter` if the fallback is dairy). **Those NULL now, fail loud.** Put them in a separate list at the TOP. Expect a handful.

## RULING 4 — THE FOUR "STILL OPEN" ITEMS. All ruled. Here they are.

### 4a · CARAMEL — RULED
- **DELETE** `caramel → condensed milk` (core.js:930) — a bare "caramel" is not a purchasable product.
- **DELETE** stale `caramel treat → condensed milk` (core.js:931).
- **KEEP** the real `caramel treat` key **R125/kg (R45/360g, Nestlé, Checkers)** — correct, and now stamped.
- **ADD** real key `caramel essence` — **R350/L (40ml @ R14)**.
- **REWIRE** `caramel essence` (wk_southafrica.js:121) off `vanilla essence` → onto the new key.
- ✅ **No recipe renames needed** — you proved every real line already says *Caramel Treat / caramel treat (tinned)*. Good hunting.

### 4b · GOAT — RULED. DELETE.
`goat → mutton` (core.js:923) + the WK `goat→mutton` / `goat meat` / `goat ribs` aliases. **All deleted.** No dish uses goat meat. Goat's cheese (R650) and Goat milk (cat food) keep their own keys. *Goat is a different animal from lamb/mutton — that alias was always a lie.*

### 4c · THE 16 ALIAS CONFLICTS — RULED
> **DEFAULT: PRICE_ALIAS WINS.** It is the app-wide table. **WK_ALIAS may ADD, never OVERRIDE.** That is the sameness law.
>
> **EXCEPT 3** — `lamb` · `mackerel` · `firm white fish` → **NEITHER TABLE WINS. Add real keys** (below).
>
> The 171 non-conflicting shared keys merge cleanly.

### 4d · THE NEW-KEY PRICES — DELIVERED. Tina's, shelf-verified, July 2026.
See **JOB 1B**. They are all there.

---

# JOB 1 — THE DATA FIXES. This is where the bug actually lives.

## 1A — DELETE THESE ALIASES (all confirmed dead or lying)

| Alias | Where | Why |
|---|---|---|
| `caramel → condensed milk` | core.js:930 | plant/flavour word → animal key. A LIE. |
| `caramel treat → condensed milk` | core.js:931 | stale — real key exists |
| `goat → mutton` | core.js:923 | wrong animal |
| `goat meat` / `goat ribs` → mutton | WK_ALIAS | wrong animal |
| `black beans → sugar beans` (R78) | core.js | DEAD (real key R50 already wins). Hygiene. |
| `date syrup → honey` (R160) | PRICE_ALIAS + WK_ALIAS | plant → animal. **A GREEN TICK ON A LIE.** |
| `mackerel → tinned sardines` | PRICE_ALIAS | not mackerel |
| `mackerel → hake` | WK_ALIAS | not mackerel |

⚠️ `lamb → lamb neck` — **DO NOT DELETE YET. See 1D.**

## 1B — ADD THESE KEYS. Prices are Tina's. Shelf-verified. July 2026.

```
almond milk       R37/kg    1L @ R37      Almond Breeze · PnP R33 – DisChem R40
oat milk          R35/kg    1L @ R35      (R40 acceptable; organic much dearer)
almond butter     R320/kg   250g @ R80    R68–86/250g
cashew butter     R340/kg   250g @ R85    (1kg tub ~R255/kg — PACK_DB decides)
date syrup        R323/kg   300g @ R97    Nanuki/Wildsprout · range R264–R560/kg
cashew cheese     R396/kg   250g @ R99    Yokos/Checkers · range R396–R625/kg
bean sprouts      R270/kg   100g @ R27    Woolies/PnP punnet
caramel essence   R350/L    40ml @ R14
caramel treat     R125/kg   360g @ R45    Nestlé · Checkers/Woolies  (EXISTS — keep, stamp)
mackerel tinned   R95/kg    400g @ R38    Cape Point middlecut
mackerel frozen   R75/kg    2kg @ R150    Shoprite Cape Point
hake fillets      R180/kg   800g @ R145   Sea Harvest / I&J frozen
basa fillets      R181/kg   800g @ R145   PnP Fishmonger frozen
tilapia whole     R60/kg    800g @ R50    PnP / Superb Hyper
```

### 🚨 `bean sprouts` — READ THIS CAREFULLY
The R193 Brussels-sprouts bug is **NOT fixed by L1** (you proved it — it's the kept `q.includes(key)` direction) and **NOT fixed by L2** (sprouts aren't animal). **The new exact key kills it by construction** — longest-match-wins, exact beats fallback.

**AND:** grep for a bare `sprouts` key or alias pointing at Brussels sprouts. If it exists, **rename it `brussels sprouts`.** A bare `sprouts` key is a trap for every sprout we ever author again.

### `caster` / `castor` sugar — ✅ RULED. The R84 key is CORRECT.

Same product, one spelling variant. **Do not create two keys.**

👉 **ADD ALIAS `caster sugar → castor sugar`** → the existing exact key.
👉 **KEEP R84/kg. STAMP IT.** Tina verified: 500g packs **R36.99–R48.99** (PnP · Shoprite "The Kitchen" R39.99) → **R74–R98/kg**, mid ≈ **R84/kg**. `src: PnP/Shoprite · when: '2026-07' · conf: 'shelf'`. **No MF35 revalue needed.**

🚨 **AND THIS IS WHY THE SPELLING BUG MATTERS:**
> white sugar = **R35/kg**. castor sugar = **R84/kg**. *(It costs more because it is milled finer.)*
> A `caster sugar` line falling back to plain `sugar` is not a rounding error. **IT IS 2.4× UNDER.**
> **One letter. More than double the price.** And it is in every bake.

## 1C — MF35 PROVENANCE: stamp the new keys as you add them

Every key added today carries: `src` · `when: '2026-07'` · `conf: 'shelf'`.

**Additive fields ONLY.** The resolver keeps reading `price`/`pack` exactly as it does now. **If PRICE_DB's shape cannot take extra fields without a parser change — STOP AND REPORT. Do not refactor PRICE_DB in this session.**

*These will be the first prices in Tinza with provenance. Every one after this follows.*

## 1D — LAMB. **RECONCILE, DO NOT ADD.** Read `TINZA_MEATCUT_ADDENDUM_buy_names.md` first.

### ⚖️ THE RULING THAT CHANGES THIS JOB
> **THE MEAT CUT GUIDE IS A COOK'S RULE. PRICING NEEDS A SHOPPER'S RULE.**
> The Guide says *"stewing lamb = shoulder or neck."* True in the kitchen, **useless at the till.**
> **You cannot buy "shoulder or neck."** You buy a pack marked **Lamb Potjiekos** / **Stewing Lamb**.
> Per **ButcherSA**, that pack is a **forequarter MIX**: neck · flank · breast · shank/knuckle · shoulder.
> 👉 **`lamb potjiekos` IS A PRODUCT KEY. NOT AN ALIAS TO `lamb neck`. IT NEVER WAS.**

### 🚨 LAMB WAS WRONG IN BOTH DIRECTIONS AT ONCE
- `lamb → lamb neck` made **braai chops 33% too CHEAP.**
- `lamb potjiekos` at **R130** (the FLOOR of a R130–R170 band) made **every stew, curry, bredie and potjie ~15% too CHEAP.**
- **Both lies quietly flattered the green "cooking beats buying" number.** That is the product's core claim.

### THE PRICES — RULED
```
lamb potjiekos     R150/kg   MID of the mainstream band. Card shows the RANGE:
                             "R130–R170/kg depending on butcher."  (Pricing Law: spread > 2x.)
                             src: Shoprite/PnP · when: 2026-07 · conf: shelf
                             ⚠️ LIVE VALUE IS R130 — THE FLOOR. RAISE IT.
stewing lamb       → ALIAS to lamb potjiekos.  (NOT to lamb neck. Delete that.)
lamb knuckles      OWN KEY — premium band (R169–R235). NOT merged with potjiekos.
lamb neck          OWN KEY — premium band. Only when the recipe NAMES neck.
lamb shank         OWN KEY.
lamb shoulder chops  ✅ THE BRAAI/GRILL DEFAULT. Tina's ruling — people prefer them,
                     and the shelf agrees (PnP braai-chop packs sit well under loin).
lamb loin/rib chops  Only when the recipe NAMES loin / rib / cutlet / rack.
leg of lamb        Roast, whole joint.
lamb riblets       Braai ribs.
lamb rump          Steak.
lamb mince         R215/kg  ✅ RULED. Real band R175–R260 (Woolies R260 · butchery R270
                            · bulk R175). conf: 'ONLINE' not 'shelf' — nobody has read it
                            off a Checkers fridge. Price Studio ranks it for a shelf check.
                            ⛔ OWN KEY. NOT `lamb stew`. Mince is GROUND. Stew is CUBED BONE-IN.
                            🚨 R98 was 2.2x UNDER (that is BEEF mince wearing a lamb label).
                               R160 was 35% UNDER. BOTH were Tina's own notes.
                               ⚖️ LAW 11 DOES NOT CARE WHO WROTE THE NUMBER DOWN.
```

### ⛔ THREE MERGES THAT MUST NOT HAPPEN
Same context-flattening disease as the alias — just at the **key** level:
1. ❌ `lamb knuckle / potjiekos` as one key — **a CUT and a MIX, different price bands.**
2. ❌ `lamb stew / lamb mince` as one key — **ground vs cubed bone-in. Not the same food.**
3. ❌ `stewing lamb → lamb neck` — **dead. The pack is not neck.**

### 🩸 THE COLLISION — READ THIS BEFORE YOU WRITE ANYTHING
**PRICE_DB ALREADY HAS LAMB KEYS** (from the v20 build) and **they disagree with the 12-Jul list:**

| Already in PRICE_DB | The 12-Jul list |
|---|---|
| `lamb loin chops` **R270** | `lamb chops (loin/rib)` **R255** |
| `lamb braai chops` **R200** | `lamb shoulder chops` **R220** |
| `leg of lamb` **R190** | `leg of lamb` **R205** |
| `lamb neck` **R180** | `lamb neck` **R170** |
| `lamb shank` **R190** | `lamb shank` **R180** |
| `lamb potjiekos` **R130** | *(merged into knuckle @ R170)* |
| `lamb knuckles` **R200** · `lamb rib` R220 · `butterflied leg of lamb` R190 · `lamb roast` R190 · `mutton` R180 | *(not in the list at all)* |

> 🚨 **IF YOU JUST *ADD* THE NEW KEYS, PRICE_DB ENDS UP WITH TWO KEYS FOR THE SAME PRODUCT AT TWO DIFFERENT PRICES**, and longest-match-wins picks whichever door it came through.
> **THAT IS EXACTLY THE `date syrup = R160 or R50` DISEASE WE ARE HERE TO KILL.**

### THE STEPS — IN THIS ORDER
1. **PRINT the FULL current lamb key list from PRICE_DB**, side by side with the target above. **Read-only. Report it.**
2. **Tina signs ONE number per product.** Then write.
3. **GREP every lamb ingredient line, all 12 rooms.** file:line + exact string + **dish name + cooking method**.
4. **PROPOSE the buy-name from the METHOD** using the addendum's table (potjie/stew/curry → `lamb potjiekos` · braai/grill → `lamb shoulder chops` · roast → `leg of lamb` · frikkadelle → `lamb mince`). **Present as a tick-list.**
5. **DELETE `lamb → lamb neck` and `stewing lamb → lamb neck` ONLY after Tina signs.**
6. ⛔ **A bare `lamb` line with NO method signal → FAIL LOUD. List it. DO NOT GUESS.**
   *(In June Tina said "bare lamb will mostly be stewing lamb." That sentence is TRUE — and it is also the exact sentence that became the alias. **No defaults.**)*
7. **SAME CHECK FOR BEEF AND PORK.** Did the same context-flattening happen there? `pork potjiekos` and `pork roast` already exist as keys — are they aliased away? **Report.**

### 🔄 TWO KNOCK-ONS FROM THE MINCE PRICE — BOTH REAL, BOTH IN SCOPE

**1. THE SHAPE OF THE LAMB TABLE IS INVERTED.** Mince was assumed to be the CHEAP lamb key. **It is not.** At R215 it is **dearer than `lamb potjiekos` (R150)** and level with shoulder chops.
👉 **Every frikkadelle, kofta and lamb bobotie has been costed as if mince were the budget option. It is the opposite. RE-COST THEM** and report the delta per dish.

**2. THE "3.5× SPREAD" LINE WAS BUILT ON THE BAD NUMBER.** R98 → R350 was 3.5×. The real spread is **R150 (potjiekos) → R310 (rump) ≈ 2.1×.** Still wide. Still justifies cut-aware keys. **Quote the true number: 2.1, not 3.5.**

### ✅ NOTHING IN THE LAMB JOB IS NOW BLOCKED ON TINA EXCEPT ONE SIGNATURE
Print the v20-vs-target key list side by side. **She signs one number per product. Then write.**

## 1E — THE THREE GENERIC WHITE-FISH CALL SITES — ✅ RULED BY TINA. HAKE, ALL THREE.

`prices.js:1077` (baby — currently "hake or kingklip") · `eventsData.js:53` · `meals.js:13620`

👉 **ALL THREE → `hake fillets`** (frozen, **R180/kg**, Sea Harvest / I&J). The SA default white fish.
👉 This also KILLS the "hake or kingklip" A-or-B line at `prices.js:1077`. **One product per line.** Done, not deferred to MF37.

---

# JOB 2 — BUILD L2 (after the dry-run of the extended set)

- One shared resolver. `core.js`. **Do not add a second door.**
- Longest-match-wins. Exact key beats every fallback.
- L2 fires → **return null → route into the existing *"N/M ingredients priced"* line.** That is not an error message. **It is the honesty feature.**
- `costLine()` remains the only thing allowed to emit a Rand.

---

# JOB 3 — THE FALLBACK CENSUS. This is what replaces L3.

L3 was the wrong *mechanism* for the right *fear*: **a new fallback lie can be authored tomorrow and we'd never see it.**

**BUILD A STANDING DEV-ONLY REPORT** (a Node script — not shipped UI, not a runtime guard):

> For all 12 rooms, per section: every ingredient string that resolves via **FALLBACK** rather than an **EXACT key**, with what it resolves to and what it costs.

- Run it before and after this session. **Report the counts.**
- Baselines to beat:
  - Health (`lookupPrice`) — before-L1 **82 exact / 356 fallback / 37 null**
  - Tiny Tummies + pets — before-L1 **25 / 132 / 16**
  - `priceOf` rooms (Meals, Braai-shop, Buffet, Kiddies, Events, Spice, WK-plan) — **never measured. Measure them.**
- **The fallback column must go DOWN.** If it doesn't, we built nothing.

This is the seed of **Price Studio**. It is how we ever find the next `date syrup → honey`.

---

# JOB 4 — MF37: THE "A or B" LIST

Produce it. Grouped by room. Show current resolution. **Refund class (animal-vs-plant) at the TOP, nulled.** Everything else: report only, no edits.

---

# PROOF — NOT OPTIONAL

- ❌ `node --check` is not proof. ❌ "Code reports it's fixed" is not proof.
- ✅ Render-proof over the **merged pool** AND **per-section — all 12 rooms, named individually, each pass/fail.**
- ✅ **Fallback Census before/after, per section.** The number goes down.
- ✅ **Netlify says `Published`** on the hash you think you're testing.

---

# DEFINITION OF DONE

1. Back-button + L1 **PUSHED and Published**. Hash reported.
2. Extended-L2 dry-run false-positive list shown **before** L2 is built.
3. Aliases in 1A deleted. Keys in 1B added, stamped with src/when/conf.
4. `bean sprouts` exact key in. Bare `sprouts` key renamed or gone.
5. L2 shipped. Nulls routed into *"N/M ingredients priced."*
6. Fallback Census script exists and reports before/after, per section, 12 rooms.
7. MF37 list delivered. Refund-class nulled.
8. Lamb: 9 keys added, cut list proposed, **alias NOT deleted without Tina's signature.**
9. Pushed. Published.

---

# ⛔ OUT OF SCOPE — DO NOT TOUCH

- **MF29** (Math.ceil over-billing) · **MF33** (`hcLineCost`/`ttLineCost` null on count items) · **MF34** (cooked/dried/tinned state qualifiers) · **MF36** (the other 49 aliases from the 26-Jun batch) · **MF30** (dietary wiring) · **MF31/32** (colour law)

Fixing the resolver does not fix the maths. Keep them separate so we can prove each one.

*"Ship it" is not "push it." Say which one you mean.*
