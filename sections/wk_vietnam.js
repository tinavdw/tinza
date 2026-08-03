/* ============================================================
   Tinza — World Kitchen : Vietnam data module  (wk_vietnam.js)
   Pure data. Defines WK_VIETNAM (array of recipe objects).
   No DOM, no dependencies — cannot break a working section.
   cuisine=southeast-asia · country=Vietnam
   Slug ids (vietnam-dish).
   Authored to WOW_STANDARD.md. Validated by merge.js.

   ⚖️ WIRED EMPTY, DELIBERATELY — 2 Aug 2026, at Thailand close.
   Same move as Thailand got at Indonesia close, and for the same
   reason: the three wiring lines go live in a push that is
   happening anyway, so the first record lands and simply works.
     1. <script src="sections/wk_vietnam.js"></script>   in index.html
     2. window.WK_VIETNAM || []                          in wkPool()
     3. WK_COUNTRY_GEO["Vietnam"]                        ALREADY PRESENT

   ✅ SAFE, AND MEASURED RATHER THAN ASSUMED: wkCountriesIn() derives the
   country list from the RECORDS (`var c = pool[i].country`), not from
   WK_COUNTRY_GEO — so an empty array means Vietnam does not appear in the
   Asia grid at all. No empty tile, no "0 dishes", nothing to find. It
   starts existing the moment record 1 lands.

   ⛔ THE ONE SCAR FROM THE THAILAND LANE: never run `git checkout` on a
   lane file that is ahead of HEAD.
   ============================================================ */
var WK_VIETNAM = [
];
if (typeof window !== 'undefined') window.WK_VIETNAM = WK_VIETNAM;
