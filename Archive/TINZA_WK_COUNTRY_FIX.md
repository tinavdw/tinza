# TINZA — WK Country Wiring Fix (France · Germany · N. Ireland) · 10 Jul 2026
### BUG: 25 France + 26 Germany + 28 N. Ireland dishes (+6 FR sauces) are BUILT but UNREACHABLE — not loaded, not attached to window, not merged, not in the region map. Four small edits fix it. All verified + node --check clean. None of these files is wk_europe.js, so no collision with Code.

---

## FIX A — `index.html` : load the 3 country scripts
After the line `<script src="sections/wk_southafrica.js"></script>` (currently ~line 149), ADD:
```html
<script src="sections/wk_france.js"></script>
<script src="sections/wk_europe_germany.js"></script>
<script src="sections/wk_europe_nireland.js"></script>
```

## FIX B — attach each country file to `window` (append at end of file)
**`sections/wk_france.js`** (last line is `];`) → append:
```js
if (typeof window !== "undefined") { window.WK_FRANCE = WK_FRANCE; window.FR_SAUCES = (typeof FR_SAUCES!=="undefined"?FR_SAUCES:[]); }
```
**`sections/wk_europe_germany.js`** → append:
```js
if (typeof window !== "undefined") { window.WK_EUROPE_GERMANY = WK_EUROPE_GERMANY; }
```
**`sections/wk_europe_nireland.js`** → append:
```js
if (typeof window !== "undefined") { window.WK_EUROPE_NIRELAND = WK_EUROPE_NIRELAND; }
```

## FIX C — `sections/worldkitchen.js` : merge them into the master list
REPLACE line 58:
```js
  return [].concat(window.WK_AFRICA || [], window.WK_EUROPE || [], window.WK_WORLD || [], window.WK_SOUTHAFRICA || []);
```
WITH:
```js
  return [].concat(window.WK_AFRICA || [], window.WK_EUROPE || [], window.WK_WORLD || [], window.WK_SOUTHAFRICA || [], window.WK_FRANCE || [], window.WK_EUROPE_GERMANY || [], window.WK_EUROPE_NIRELAND || []);
```

## FIX D — `sections/worldkitchen.js` : add them to the country→region map
After the `"Austria":["Europe","Western Europe"],` line (~74), ADD:
```js
  "France":["Europe","Western Europe"], "Germany":["Europe","Western Europe"], "Northern Ireland":["Europe","Western Europe"],
```

---

## NOTES
- **N. Ireland region = your call.** I put it in **Western Europe** (British-Isles-with-the-west grouping). Move it to `"Northern Europe"` if you'd rather it sit with the Nordics — it's a one-word change. (There's no British Isles / UK region yet; worth adding one later if England/Scotland/Wales get built.)
- **France sauces (FR_SAUCES, 6):** now attached to window, but only appear if the WK sauce system consumes them. If France sauces should show, that's a small follow-up (wire FR_SAUCES the way WK sauces are consumed) — flag if you want it; the 79 dishes are the main win.
- **Verified:** node sim after the fix → France 25 · Germany 26 · N. Ireland 28 merge in; master WK count rises accordingly; all edited .js files node --check clean.
- **Ownership:** engine/loader wiring (Opus lane). Safe to hand to Code to apply (edit + `node --check` + push) — it touches index.html, worldkitchen.js and the 3 country files, none of which collides with Code's wk_europe.js work.
- After applying: on tinza.netlify.app, Western Europe should now show France + Germany (+ N. Ireland unless you move it), each with its dish count.
