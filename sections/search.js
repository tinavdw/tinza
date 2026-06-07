/* ============================================================
   Tinza Search Core  —  search.js
   Shared, dependency-free search utility for the whole app.

   What it does:
     - Normalises text so accents and case never matter
       ("creme brulee" finds "Crème Brûlée").
     - Matches a query against a recipe's name, English name,
       aliases, type / diet / occasion tags and cuisine.
     - Ranks results so a NAME match beats a mere TAG match.
     - Works on whatever pool of recipes you pass in, so the
       same function powers section search (pass that section's
       recipes), in-plan search and global search (pass them all).

   Load this file BEFORE the section files that use it.
   It only adds tinza* functions to the global scope — it
   touches nothing else, so it cannot break a working section.
   ============================================================ */

/* Strip accents, lowercase, flatten punctuation to spaces. */
function tinzaNormalize(str) {
  if (!str) return '';
  return String(str)
    .normalize('NFD')                 // split é into e + accent mark
    .replace(/[\u0300-\u036f]/g, '')  // remove the accent marks
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, ' ')     // & - , ' etc. become spaces
    .replace(/\s+/g, ' ')             // collapse runs of spaces
    .trim();
}

/* Build one searchable string from every field worth matching. */
function tinzaSearchableText(recipe) {
  var parts = [recipe.name, recipe.nameEn, recipe.nameAlt, recipe.cuisine]
    .concat(recipe.aliases || [])
    .concat(recipe.type || [])
    .concat(recipe.diet || [])
    .concat(recipe.occasion || []);
  return parts
    .filter(function (p) { return p; })
    .map(tinzaNormalize)
    .join(' ');
}

/* Search a pool of recipes. Returns the matches, best first.
   query   : what the user typed
   recipes : the array to search (a section's, a plan's, or all)
   An empty query returns the whole pool unchanged. */
function tinzaSearch(query, recipes) {
  var q = tinzaNormalize(query);
  if (!q) return (recipes || []).slice();

  var terms = q.split(' ').filter(Boolean);
  var scored = [];

  for (var i = 0; i < recipes.length; i++) {
    var r = recipes[i];
    var name = tinzaNormalize(r.name);
    var nameEn = tinzaNormalize(r.nameEn);
    var haystack = tinzaSearchableText(r);

    // Every word the user typed must appear somewhere.
    var allMatch = terms.every(function (t) { return haystack.indexOf(t) !== -1; });
    if (!allMatch) continue;

    // Score: name hits are worth most, then English name, then tags.
    var score = 0;
    for (var j = 0; j < terms.length; j++) {
      var t = terms[j];
      if (name.indexOf(t) !== -1) score += 3;
      else if (nameEn.indexOf(t) !== -1) score += 2;
      else score += 1; // matched via alias / tag / cuisine
    }
    if (name === q || nameEn === q) score += 5; // exact name wins

    scored.push({ recipe: r, score: score });
  }

  scored.sort(function (a, b) { return b.score - a.score; });
  return scored.map(function (s) { return s.recipe; });
}

/* Romanized name for non-Latin scripts: a Latin alias if present, else derived
   from the slug id (greece-kleftiko -> "Kleftiko"). Latin names pass straight
   through unchanged, so other sections are unaffected. */
function tinzaRoman(recipe) {
  var NL = /[^\u0000-\u024F\u1E00-\u1EFF]/;
  var name = recipe.name || '';
  if (!NL.test(name)) return name;
  if (recipe.nameRoman) return recipe.nameRoman;
  var al = recipe.aliases || [];
  for (var i = 0; i < al.length; i++) { if (al[i] && !NL.test(al[i])) return al[i]; }
  if (recipe.id && String(recipe.id).indexOf('-') !== -1) {
    var p = String(recipe.id).split('-'); p.shift();
    var s = p.map(function (w) { return w ? w.charAt(0).toUpperCase() + w.slice(1) : w; }).join(' ');
    if (s) return s;
  }
  return name;
}

/* Display name: romanized name, English in brackets. The native script (where
   it differs) is shown by the section as a small subtitle. */
function tinzaDisplayName(recipe) {
  var roman = tinzaRoman(recipe);
  var en = recipe.nameEn || recipe.nameAlt || '';
  if (!en || tinzaNormalize(en) === tinzaNormalize(roman)) return roman;
  return roman + ' (' + en + ')';
}

/* Make the functions available whether loaded in a browser or Node. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { tinzaNormalize: tinzaNormalize, tinzaSearchableText: tinzaSearchableText, tinzaSearch: tinzaSearch, tinzaRoman: tinzaRoman, tinzaDisplayName: tinzaDisplayName };
}
