/* ============================================================
   Tinza — World Kitchen : Thailand data module  (wk_thailand.js)
   Pure data. Defines WK_THAILAND (array of recipe objects).
   No DOM, no dependencies — cannot break a working section.
   cuisine=southeast-asia · country=Thailand
   Slug ids (thailand-dish).
   Authored to WOW_STANDARD.md. Validated by merge.js.

   ⚖️ WIRED EMPTY, DELIBERATELY — 30 Jul 2026, at Indonesia close.
   This file ships with zero records ON PURPOSE, so that the three
   wiring lines can go live in a push that is happening anyway:
     1. <script src="sections/wk_thailand.js"></script>  in index.html
     2. window.WK_THAILAND || []                         in wkPool()
     3. WK_COUNTRY_GEO["Thailand"]                       already present

   ✅ SAFE, AND MEASURED RATHER THAN ASSUMED: wkCountriesIn() derives the
   country list from the RECORDS (`var c = pool[i].country`), not from
   WK_COUNTRY_GEO — so an empty array means Thailand simply does not appear
   in the Asia grid at all. No empty country tile, no "0 dishes", nothing
   for a visitor to find. It starts existing the moment record 1 lands.

   ⚖️ WHY BOTHER: Indonesia was already wired when its records were pushed,
   so the file just dropped in and worked. Thailand was not, and an unwired
   data file uploads and is INVISIBLE — a spent deploy credit that looks
   exactly like a broken build. Doing the wiring now, inside a push that is
   already happening, removes the one step that is easy to forget later.

   ▶️ FIRST BANK IS 4 RECORDS, MECHANICALLY: ruling A6 needs 3 live
   crossLinks, they cannot cross countries, and merge fails a self-link —
   so an empty file has nothing legal to point at. See
   reference/THAILAND_COLD_START.md for scope, the probed price landmines,
   the spent moats and nudges, and the proposed first four.
   ============================================================ */
var WK_THAILAND = [
];
if (typeof window !== 'undefined') window.WK_THAILAND = WK_THAILAND;
