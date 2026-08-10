# MF148 · PLAYWRIGHT — NAVIGATION INVARIANTS ONLY

**Ruled 26 Jul 2026 (Tina).** Brief for Code. ⚖️ Read `TINZA_RULINGS.md` §25 · §24.6 · §24.7 · §24.3 · Law 2 · Law 51 first.

⏱️ **DO NOT START THIS UNTIL THE TOP-BACK BUILD HAS LANDED AND TINA HAS VERIFIED IT ON LIVE.** That build changes what every top Back does; tests written first are written against a shape about to be replaced.

---

## WHY

`tinza-census.js`, `tinza-doctor.js`, `tinza-lawcheck.js` and MF147 all run in Node. **Not one of them can press a button.** On 26 July Tina found, in a single walk, three bugs that no Node check could ever have caught:

- the Feed My Family back button **looping** chips → recipe → chips → recipe
- Oven Bakes → phone Back → **Homestyle Plates** *(a sideways move, not a level)*
- the Just Feed Me **"more ideas" button missing for five days**

⚖️ **These are browser behaviour. Only a browser can watch them.**

---

## SCOPE — AND THE HARD LIMIT

✅ **TEST: navigation behaviour.** Where does Back go. Does a tap do something. Is a required control present.

⛔ **NEVER TEST: colour · label text · font · spacing · layout · screenshots · recipe content.** The sameness sweep and the tinyTummies rebuild will churn all of those daily. ⚖️ **A test that breaks every day is a test Tina learns to ignore** — the rung-that-cries-wolf law applied to the browser. **If an assertion would go red because a colour token changed, it does not belong in this suite.**

Target: **roughly ten specs.** This is a smoke suite, not coverage. Resist growth.

---

## SETUP

- `npm i -D @playwright/test` · `npx playwright install chromium` *(Chromium only — Tina ships a PWA to phones and tablets; three browsers is three times the maintenance for no new information at this stage.)*
- Run against **`https://tinza.netlify.app`** by default, with a `BASE_URL` env var so localhost works too. ⚖️ **Law 2 lives here: the deployed app is the thing that matters, not a local copy.**
- Add a mobile viewport project (`devices['Pixel 7']`) **and** a desktop one — the back-loop reproduced on both her phone and her laptop.
- One command, documented in `CLAUDE.md`: `npx playwright test`. ⚖️ **Law 51 — a floor, not a gate.**

---

## THE INVARIANTS

### ① A RECIPE BACK RETURNS TO ITS OWN LIST — ⚖️ §24.6
For each room *(FMF Supper · Sides & Basics · Bakes · Braai · World Kitchen · Health · Mood)*: open a recipe → press **browser back** → assert the recipe is closed **and** the list is the one it was opened from.
Then press browser back **again** → assert it moves **up**, never back into the recipe.
🩸 **This is the chips ↔ recipe loop. It must fail today on FMF and Mood if the fix has not landed — run it once before the fix to prove the spec is real.**

### ② A LATERAL IS NOT A LEVEL — ⚖️ §24.7
In a room with pills/tabs *(FMF Supper, Bakes & Cakes, Breakfast)*: tap three different pills → press back **once** → assert you have **left the room**, not walked to the previously selected pill.
🩸 **This is Oven Bakes → Homestyle Plates and Waffles → Eggs.**

### ③ NO DEAD TAPS
Walk N levels into a room → press back N times → assert you reach Home in **exactly N presses**, and that **every single press changed the screen**. A press that changes nothing is a dead tap and goes RED.

### ④ EVERY ROOM HAS A WAY OUT
From every room's deepest reachable screen, assert **both** the top Back **and** the bottom (spine) Back exist and each moves the screen. ⚖️ §24.3 — one screen, one top Back; but "one" is not "none".

### ⑤ A SHELF THAT PROMISES MORE CAN DELIVER MORE
On a mood shelf: assert the "more ideas" control **is present** and that tapping it **increases the number of cards on screen**.
🩸 **This is MF133 — it would have gone RED on 21 July.**

### ⑥ THE TIER SWITCHER IS NOT ON SCREEN FOR A STRANGER
Load `tinza.netlify.app` with **nothing after it** on a clean context → assert **no dev strip and no tier switcher**. ⚖️ §17.1 — this leaked the entire R90 product once and announced itself with nothing. Census 24 watches the code; **this watches the actual page.**

---

## RULES OF ENGAGEMENT

- ⚖️ **PROVE EVERY SPEC CAN FAIL.** Run it against the *current* HEAD before the fixes land — ① and ② **must** go RED on FMF and Mood. A spec that is green on a known-broken app is a broken spec. **This has caught us twice already** *(`/function wkResetDrill/` matching `wkResetDrillX`; the 2,400-character `goBack()` window)*.
- ⚖️ **RULE NOTHING.** Any judgement call — which rooms count, what "left the room" means in a 3-deep room — **stop and ask Tina** (§2.3).
- **Select by role and accessible name, or by stable `data-testid` you add.** Never by CSS class, colour, or nth-child — those are exactly what the sameness sweep will change.
- Keep the whole suite under **two minutes**. If it gets slow she will stop running it.

---

## WHAT THIS STILL DOES NOT DO

It proves the app **navigates** correctly. It does not prove a recipe is good, a price is right, a mood match makes sense, or a page looks like the others.

⚖️ **LAW 2 STANDS: HER FINGERS ON LIVE CLOSE A BUG.** Three watchers now narrow where one can hide. None of them is her.
