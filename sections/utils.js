function startTimer(seconds, label) {
  clearInterval(_timerInterval);
  _timerRemaining = seconds;
  const bar = document.getElementById('globalTimerBar');
  const display = document.getElementById('timerDisplay');
  const lbl = document.getElementById('timerLabel');
  if (!bar) return;
  lbl.textContent = label || 'Timer';
  bar.style.display = 'flex';
  updateTimerDisplay();
  _timerInterval = setInterval(() => {
    _timerRemaining--;
    if (_timerRemaining <= 0) {
      clearInterval(_timerInterval);
      _timerRemaining = 0;
      updateTimerDisplay();
      bar.style.display = 'none';
      // Simple beep via AudioContext
      try {
        const ctx = new (window.AudioContext||window.webkitAudioContext)();
        [0,0.3,0.6].forEach(t => {
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.connect(g); g.connect(ctx.destination);
          o.frequency.value = 880; g.gain.setValueAtTime(0.3, ctx.currentTime+t);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+t+0.2);
          o.start(ctx.currentTime+t); o.stop(ctx.currentTime+t+0.3);
        });
      } catch(e){}
      alert('⏱️ ' + (lbl.textContent) + ' — done!');
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const d = document.getElementById('timerDisplay');
  if (!d) return;
  const m = Math.floor(_timerRemaining / 60);
  const s = _timerRemaining % 60;
  d.textContent = m + ':' + String(s).padStart(2,'0');
}

function cancelTimer() {
  clearInterval(_timerInterval);
  _timerRemaining = 0;
  const bar = document.getElementById('globalTimerBar');
  if (bar) bar.style.display = 'none';
}

// Parse time from a method step string — returns seconds or null
function parseStepTime(step) {
  const s = step.toLowerCase();
  let m;
  m = s.match(/(\d+)[–\-](\d+)\s*min/);
  if(m) return Math.round((parseInt(m[1])+parseInt(m[2]))/2) * 60;
  m = s.match(/(\d+(?:\.\d+)?)\s*hour/);
  if(m) return Math.round(parseFloat(m[1]) * 3600);
  m = s.match(/(\d+)\s*min/);
  if(m) return parseInt(m[1]) * 60;
  m = s.match(/(\d+)\s*sec/);
  if(m) return parseInt(m[1]);
  return null;
}


function fmtTimerLabel(secs) {
  if (secs >= 3600) return Math.round(secs/3600) + 'h';
  if (secs >= 60) return Math.round(secs/60) + ' min';
  return secs + 's';
}

// ══════════════════════════════════════════════════════════════
// COOKING MODE
// ══════════════════════════════════════════════════════════════
function openCookingMode(title, steps) {
  const overlay = document.getElementById('cookingModeOverlay');
  const titleEl = document.getElementById('cookModeTitle');
  const stepsEl = document.getElementById('cookModeSteps');
  if (!overlay) return;
  titleEl.textContent = title;
  stepsEl.innerHTML = steps.map((step, i) => {
    const secs = parseStepTime(step);
    return `<div class="cook-step" id="cookStep${i}" onclick="toggleCookStep(${i})">
      <div class="cook-step-num">
        <span>Step ${i+1} of ${steps.length}</span>
        ${secs ? `<button class="cook-timer-inline" onclick="event.stopPropagation();startTimer(${secs},'Step ${i+1}: ${fmtTimerLabel(secs)}')" >⏱️ ${fmtTimerLabel(secs)}</button>` : ''}
      </div>
      <div class="cook-step-text">${step}</div>
    </div>`;
  }).join('');
  overlay.style.display = 'block';
  // Keep screen on via wake lock if supported
  if (navigator.wakeLock) navigator.wakeLock.request('screen').catch(()=>{});
}

function closeCookingMode() {
  const overlay = document.getElementById('cookingModeOverlay');
  if (overlay) overlay.style.display = 'none';
}

function toggleCookStep(i) {
  const el = document.getElementById('cookStep'+i);
  if (el) el.classList.toggle('done');
}


// ══════════════════════════════════════════════════════════════
// GLOBAL SEARCH — searches across all sections
// ══════════════════════════════════════════════════════════════
// Accent/case-insensitive normaliser (falls back if search.js hasn't loaded yet).
function _searchNorm(s){
  return (typeof tinzaNormalize === 'function')
    ? tinzaNormalize(s)
    : String(s == null ? '' : s).toLowerCase().trim();
}
function _searchEsc(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Human-facing section labels for the universal index's section keys.
var _SEARCH_SECTION_LABEL = {
  meals:'Family Meals', bakes:'Bakes', sides:'Sides & Basics', floor:'Budget',
  health:'Healthy', world:'World Kitchen', events:'Events', braai:'Braai',
  beverages:'Beverages', tiny:'Tiny Tummies', spice:'Spice', furry:'Furry Friends'
};

// Search the WHOLE catalogue via the universal index (window.allRecipes), including
// each card's versions[]. Returns [{r, version, onVersion, section, sub, score}], best
// first. A version hit carries the version name so the opener can pre-select it.
function tinzaAllSearch(query, opts){
  opts = opts || {};
  var q = _searchNorm(query);
  if(!q || q.length < 2) return [];
  var terms = q.split(' ').filter(Boolean);
  var pool = (typeof allRecipes === 'function') ? (allRecipes() || []) : [];
  // MF46 · SCOPED-GLOBAL: the index already carries `section` on every record, so a room's
  // search is just this pool filtered to its own section(s). No new plumbing. Budget also
  // passes maxCostPP — cost is a filter (the cap gates), not a search axis (text finds).
  var secSet = (opts.sections && opts.sections.length) ? opts.sections : null;
  // MF50 · WORD-START PREFIX match. The term must BEGIN a word (\b), not appear anywhere inside
  // one: "rump" → "rump steak", NEVER "c·rump·ets" / "k·rump·li". It stays a PREFIX, NOT a whole
  // word — so live-typing survives: "lamb tag" still finds "lamb tagine", "moroc" still finds
  // "morocco". (tinzaNormalize turns punctuation into spaces, so every word start is a \b.)
  var termRes = terms.map(function(t){ return new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); });
  function everyIn(hay){ for(var k=0;k<termRes.length;k++){ if(!termRes[k].test(hay)) return false; } return true; }
  var hits = [];
  for(var i=0;i<pool.length;i++){
    var r = pool[i];
    if(secSet && secSet.indexOf(r.section) < 0) continue;
    if(opts.mealCat && r.mealCat !== opts.mealCat) continue;   // MF56 · Breakfast searches Breakfast (not all of Family Meals)
    if(opts.maxCostPP != null && (r.costPP == null || r.costPP > opts.maxCostPP)) continue;
    var nameN  = _searchNorm(r.name);
    var baseHay = _searchNorm(r.searchText || r.name);
    var version = null, onVersion = false, matched = false;

    if(everyIn(baseHay)){
      matched = true;
      // Top-level already matches — still deep-link when a version NAME matches too.
      if(r.versions && r.versions.length){
        for(var v=0; v<r.versions.length; v++){
          if(everyIn(_searchNorm(r.versions[v].name))){ version = r.versions[v].name; onVersion = true; break; }
        }
      }
    } else if(r.versions && r.versions.length){
      // No top-level hit — try each version's name + feel + ingredient names.
      for(var v2=0; v2<r.versions.length; v2++){
        var ve = r.versions[v2];
        var vh = baseHay + ' ' + _searchNorm(
          (ve.name||'') + ' ' + (ve.feel||'') + ' ' +
          (ve.ingredients||[]).map(function(x){ return x.n || x.name || ''; }).join(' ')
        );
        if(everyIn(vh)){ version = ve.name; onVersion = true; matched = true; break; }
      }
    }
    if(!matched) continue;

    var score = 0;
    for(var j=0;j<terms.length;j++){ score += (nameN.indexOf(terms[j]) >= 0) ? 3 : 1; }
    if(nameN === q) score += 6;      // exact name wins
    if(onVersion)  score += 1;
    hits.push({ r:r, version:version, onVersion:onVersion,
      section: _SEARCH_SECTION_LABEL[r.section] || (r.section||''),
      sub: r.feel || r.cuisine || '', score:score });
  }
  hits.sort(function(a,b){ return b.score - a.score; });
  return hits.slice(0, 40);
}

// Non-live entry (kept for callers that jump straight to the results screen).
function globalSearch(query){
  if(!query || query.trim().length < 2){ set({searchQuery:'', searchResults:[], searchScope:null}); return; }
  set({ searchQuery: query, searchResults: tinzaAllSearch(query),
        searchPrevScreen: S.searchPrevScreen || S.screen, screen: 'search', searchScope:null });   // MF49 · whole-app
}

// Open a search hit — lands on the parent card, pre-switched to the matched version.
function openSearchResult(i){
  var hit = (S.searchResults||[])[i];
  if(!hit || !hit.r) return;
  // MF46 · a scoped in-room result opens on the shared search-detail screen (the door that
  // already exists — Braai/Spice behave this way). liveSearch set searchPrevScreen, so Back
  // returns to the room. On the global search screen this is a no-op (already screen:'search').
  var upd = { _searchActiveRecipe: hit.r, screen: 'search' };
  if(hit.version){
    var m = Object.assign({}, S.recipeVersion || {});
    m[hit.r.id] = hit.version;
    upd.recipeVersion = m;
  }
  setQuiet(upd);
  window.scrollTo(0,0);
}

// Live search — updates results div directly, never calls draw() so input keeps focus.
function globalSearchLive(query) {
  S.searchQuery = query;
  var resultsDiv = document.getElementById('searchResultsBody');
  if(!resultsDiv) return;
  if(!query || query.trim().length < 2) { S.searchResults = []; resultsDiv.innerHTML = ''; return; }
  // MF49 · honour a preset scope (Braai/Spice tap-targets set S.searchScope). null = whole app.
  S.searchScopeLabel = null;   // MF56 · the global screen uses the section-map label, never a stale meal sub-label
  S.searchResults = tinzaAllSearch(query, { sections: S.searchScope || null });
  resultsDiv.innerHTML = renderSearchResults(query, S.searchResults);
}

// The Search page — bottom-nav Search, the Home tile, and every section's
// "Search all recipes" button all land here (screen:'search' AND the legacy
// screen:'search_results' both render this). Shows the matched recipe detail
// when one is open, else the search box + live universal results.
function searchPageHTML() {
  if(S._searchActiveRecipe && typeof recipeDetailFromResult === 'function'){
    return recipeDetailFromResult(
      S._searchActiveRecipe, "setQuiet({_searchActiveRecipe:null})",
      S.searchServings||4, '#c06020', '#1a1208', '#3a2010'
    );
  }
  var q = S.searchQuery || '';
  var resultsHTML = renderSearchResults(q, S.searchResults || []);
  return '<div>'
    + '<div class="header">'
    + '<button class="back-btn" onclick="setQuiet({_searchActiveRecipe:null,screen:S.searchPrevScreen||\'home\',searchQuery:\'\',searchResults:[],searchScope:null})" style="color:#c06020;">&#8592; Back</button>'
    + '<h1 style="font-size:18px;font-weight:normal;color:#f5e8cc;">&#128269; Search</h1>'
    + '</div>'
    + '<div class="content">'
    + '<div style="position:relative;margin-bottom:16px;">'
    + '<input type="text" id="searchPageInput" value="' + _searchEsc(q) + '" placeholder="Search recipes, versions, ingredients…" '
    + 'style="width:100%;box-sizing:border-box;padding:12px 16px 12px 40px;background:#1a1208;border:2px solid #c06020;border-radius:10px;color:#f5e8cc;font-size:15px;font-family:Georgia,serif;outline:none;">'
    + '<span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:16px;">&#128269;</span>'
    + '</div>'
    + '<div id="searchResultsBody">' + resultsHTML + '</div>'
    + '</div></div>';
}
// Both screen ids render the same universal search page (see core.js draw()).
function searchHTML(){ return searchPageHTML(); }
function searchResultsHTML(){ return searchPageHTML(); }

// Render the hit list. `results` is tinzaAllSearch()'s output. A version match
// shows a solid gold pill (the specific version); a multi-version card that
// matched on its base name shows a hollow "N versions" hint.
function renderSearchResults(q, results) {
  if(!q || _searchNorm(q).length < 2) return '';
  results = results || [];
  if(results.length === 0) {
    return '<p style="color:#4a3020;font-style:italic;text-align:center;padding:40px 0;">No results for &ldquo;' + _searchEsc(q) + '&rdquo;</p>';
  }
  // MF49 ride-along · name the ROOM when scoped ("found in World Kitchen"), not "Tinza".
  var _scope = (typeof S!=='undefined') ? S.searchScope : null;
  var _lbl = (typeof S!=='undefined' && S.searchScopeLabel) ? S.searchScopeLabel   // MF56 · explicit sub-screen label ("Breakfast")
           : (_scope && _scope.length) ? (_SEARCH_SECTION_LABEL[_scope[0]] || _scope[0]) : 'Tinza';
  var html = '<div style="font-size:11px;color:#4a3020;margin-bottom:12px;">' + results.length + ' recipe' + (results.length!==1?'s':'') + ' found in ' + _lbl + '</div>';
  results.forEach(function(hit, idx) {
    var r = hit.r;
    var name = (typeof tinzaDisplayName === 'function') ? tinzaDisplayName(r) : (r.name||'');
    var vBadge = hit.onVersion
      ? '<span style="display:inline-block;margin-left:6px;font-size:10px;font-weight:bold;color:#fff;background:#c06020;border-radius:10px;padding:1px 7px;vertical-align:middle;">' + _searchEsc(hit.version) + '</span>'
      : ((r.versions && r.versions.length>1)
          ? '<span style="display:inline-block;margin-left:6px;font-size:10px;color:#e0a060;border:1px solid #5a3010;border-radius:10px;padding:1px 7px;vertical-align:middle;">' + r.versions.length + ' versions</span>'
          : '');
    html += '<div onclick="openSearchResult(' + idx + ')" style="display:flex;align-items:center;gap:12px;padding:12px;background:#161210;border:1px solid #2a1a10;border-radius:10px;margin-bottom:8px;cursor:pointer;">';
    html += '<div style="font-size:28px;flex-shrink:0;">' + (r.emoji||'🍽️') + '</div>';
    html += '<div style="flex:1;min-width:0;">';
    html += '<div style="font-size:14px;color:#f5e8cc;font-weight:bold;">' + _searchEsc(name) + vBadge + '</div>';
    html += '<div style="font-size:11px;color:#6a4020;">' + _searchEsc(hit.section) + '</div>';
    if(hit.sub) html += '<div style="font-size:11px;color:#4a3020;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + _searchEsc(hit.sub) + '</div>';
    html += '</div><div style="color:#c06020;font-size:18px;flex-shrink:0;">&#8594;</div></div>';
  });
  return html;
}


// Start the app
draw();
