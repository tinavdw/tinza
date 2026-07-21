# MF133 — CLOSE THE DEV DOOR · GATE THE TIER SWITCHER · HIDE THE DEAD CHEF

**Ruled:** `TINZA_RULINGS.md` §17 (21 Jul 2026) · **Week 1 item 2** of the three-week plan.
**Read §17 before writing a line.** This brief implements it and adds nothing to it.

---

## 🩸 WHY THIS EXISTS — READ THIS FIRST

The job was *"close the `?dev` back door."* Measuring first moved the target.

- **`?dev` was never the money door.** It gates two diagnostics: an on-screen error block and a `console.info`. A stranger who guesses it gets an error message he did not want.
- **The tier switcher is the money door, and it has no gate at all.** `tierBar` renders **unconditionally** on every screen to every visitor. Its 👑 Pro button sets `USER_TIER='pro'`, which opens cost · My Plan · shopping list · the whole nutrition grid · dietary filters · favourites.
- ✅ **CONFIRMED ON LIVE, 21 Jul 13:00** — `tinza.netlify.app` with **nothing** after it. The strip is there. ⚖️ **Law 2.**
- 💰 **The chef leaked $2.02. This leaks the entire R90 product.** The small hole announced itself because it had a bill attached; **this one is silent, which is why it survived.**

⛔ **This brief does NOT fix the four cost/gate leaks** (Braai plan · Budget rows · Spice list · the 21 raw `R${}` sites). Those are **MF132**, the shared cost/gate renderer. **Do not patch them here.** ⚖️ **Rule 1 — one job per push.**

---

## 📋 THE FIVE CHANGES

### 1 · `tinzaIsDev()` reads the STORE, not the URL — `core.js:445`

**Replace:**
```js
function tinzaIsDev(){
  try { return /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || /(?:\?|&)dev\b/.test(location.search); }
  catch(e){ return false; }
}
```
**With:**
```js
function tinzaIsDev(){
  try {
    if(/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return true;   // her own machine, no gesture needed
    return tinzaStore.getPref('dev') === true;                              // fail closed: anything else is NOT dev
  } catch(e){ return false; }
}
```

- ❌ **The `?dev` regex is DELETED, not weakened.** Do not replace it with `?dev=<secret>`. A URL flag is shareable, screenshottable, guessable, survives being pasted into WhatsApp and lands in Netlify's request logs. ⚖️ §17.2.
- ✅ **Fail closed** — anything other than a stored `true` is false. Same shape `tierLevel()` already uses for an unknown tier.
- 🚪 **This stays the ONE definition.** Nothing else may read a dev flag or invent one. ⚖️ **Law 6.**

### 2 · GATE `tierBar` — `core.js:621` ⬅️ **THE POINT OF THE WHOLE BRIEF**

**Current:**
```js
root.innerHTML = tierBar + _body + bottomBarHTML();
```
**Becomes:**
```js
root.innerHTML = (tinzaIsDev() ? tierBar + devStrip() : '') + _body + bottomBarHTML();
```

- ⛔ **DEV MODE MUST NEVER *BE* PRO.** Dev renders the switcher; the switcher sets `USER_TIER`; `tierAllows()` reads `USER_TIER`. **Three separate things, and they stay separate.** At launch **PayFast** sets the tier, and a dev flag that implied Pro would make the real gate permanently untestable. ⚖️ §17.2.
- Leave `tierBar`'s own markup at `core.js:526` **exactly as it is.** Only its rendering is gated.

### 3 · The visible DEV strip — new, next to `tierBar` in `core.js`

```js
function devStrip(){
  return '<div onclick="tinzaStore.setPref(\'dev\',false);draw();" '
    + 'style="background:var(--accent);color:#fff;padding:6px 16px;font-size:12px;'
    + 'letter-spacing:1px;text-align:center;cursor:pointer;">'
    + '🔧 DEV MODE ON · tap to turn off</div>';
}
```

- 🔴 **When dev is on it says so, and saying so is the off switch.** ⛔ A hidden flag with no visible state is how you ship a debug build. ⚖️ **Law 3.**

### 4 · The seven-tap arm — `core.js:365`, the `Appearance` heading in `profileHTML()`

The heading is currently:
```html
<div style="font-size:11px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:10px;">Appearance</div>
```
Add `onclick="tinzaDevTap()"` to that div, and add beside `tinzaIsDev()`:

```js
var _devTaps = 0, _devTapT = 0;
function tinzaDevTap(){
  var now = Date.now();
  if(now - _devTapT > 3000) _devTaps = 0;   // a slow tap is not a gesture
  _devTapT = now;
  if(++_devTaps >= 7){
    _devTaps = 0;
    try{ tinzaStore.setPref('dev', true); }catch(e){}
    draw();
  }
}
```

- 👆 **Seven is past accident and short of a chore.** A gesture, not a typed secret — **the tablet is where dev mode is needed, and typing a URL on it is the thing being removed.** ⚖️ §17.2.
- ⚠️ **Do not add any visible hint, label or counter.** If it announces itself it is not hidden.

### 5 · The dead chef — 2 buttons OUT, 3 strings OUT

The chef endpoint returns **503** (`netlify/functions/claude.js`). These five surfaces still sell him.

🔘 **BUTTONS FIRST — a broken control is worse than a missing one:**
- `core.js:2498–2501` — the `getMoreMoodRecipes(...)` button, **✨ Show me 3 more ideas**
- `budget.js:164–166` — the `getMoreBudgetRecipes()` button, **✨ Show me 3 more recipes**

**Remove both buttons from the render.** ⛔ Do **not** delete `getMoreMoodRecipes` / `getMoreBudgetRecipes` themselves — MF78 turns them back on.

😕 **Why:** the error path at `core.js:2446` renders *"Couldn't load recipes right now"* with a **← Start again** button that **re-calls the same dead endpoint.** It does not crash — **it fails politely into a loop that cannot succeed**, and a Free user is shown that loop as a reason to pay R90.

📝 **THEN the three strings — `meals.js`:**
- **15786** — the How-it-works step *"…then asks Tinza Chef"* → end the sentence at Tinza's own recipes.
- **15839** — the `🤖 Tinza Chef's ideas` heading + subtitle → remove the block.
- **15841** — the Pro upsell *"Pro also asks Tinza Chef to invent fresh ideas…"* → remove.

🔁 **REVERSE ALL FIVE WHEN MF78 LANDS.** Recorded here so the app is not left silent about the chef forever after he is capped and switched back on.

---

## 🧪 VERIFY BEFORE HANDBACK

1. `node --check sections/core.js` · `node --check sections/budget.js` · `node --check sections/meals.js`
2. **`tinza.netlify.app` — no query string → NO tier strip, NO dev strip.** *(This is the acceptance test. Everything else is secondary.)*
3. **`tinza.netlify.app/?dev` → still NO strip.** The URL trick is dead.
4. **Profile → tap `Appearance` seven times → strip appears, tier switcher appears.** Reload → **still there** (`?dev` never survived a reload; this must).
5. **Tap the dev strip → both disappear.** Reload → still gone.
6. **Free tier, 4 Ingredients and any mood shelf → no chef heading, no upsell line, no "Show me 3 more" button.**
7. **Incognito / cleared storage → not dev.** Fail-closed check.

---

## 🚨 DO NOT

- ⛔ Do **not** make `tinzaIsDev()` grant Pro, or read `USER_TIER`, or be read by anything except the three gated surfaces in §17.3.
- ⛔ Do **not** keep `?dev` "just in case".
- ⛔ Do **not** touch `tierAllows()`, `tierLevel()`, `TIER_LEVEL` or `USER_TIER` — **the gate logic is correct; only the switcher's visibility is wrong.**
- ⛔ Do **not** fix the Braai / Budget / Spice cost leaks here. **MF132.**
- ⛔ Do **not** delete `netlify/functions/claude.js` or the `getMore*` functions.
- ⛔ Do **not** push. **Every push is Tina's hand.** ⚖️ **Law 60.**

---

## 🔢 DOCTOR / CENSUS CHECK — ⚖️ Law 42

Add to `tinza-census.js`: **`tierBar` must never reach `innerHTML` ungated.** Fail loudly if `root.innerHTML` is assigned `tierBar` without `tinzaIsDev()` on the same line.

🩸 **This ratchet is the real deliverable.** The tier bar survived because nothing was watching for it — it emitted no Rand, threw no error and cost no money. **A silent hole needs a mechanical watcher, not a sharper pair of eyes.**
