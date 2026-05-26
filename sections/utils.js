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
function globalSearch(query) {
  if(!query || query.trim().length < 2) { set({searchQuery:'', searchResults:[]}); return; }
  const q = query.toLowerCase().trim();
  const results = [];

  // Search Braai meats
  MEAT_GROUPS.forEach(g => {
    g.items.forEach(item => {
      if(item.name.toLowerCase().includes(q) || (item.note||'').toLowerCase().includes(q)) {
        results.push({ emoji: item.emoji||'🔥', name: item.name, section: 'Braai', sub: item.note||'',
          action: `set({screen:'braai',braiStep:2,braaiView:'browse',viewingRecipe:{type:'meat',id:'${item.id}'}})` });
      }
    });
  });

  // Search Braai sides
  SIDES_GROUPS.forEach(g => {
    g.items.forEach(item => {
      if(item.name.toLowerCase().includes(q) || (item.desc||'').toLowerCase().includes(q)) {
        results.push({ emoji: item.emoji||'🥗', name: item.name, section: 'Braai — '+g.label, sub: item.desc||'',
          action: `set({screen:'braai',braiStep:3,braaiView:'browse',braaiSidesFilter:'${g.id}',viewingRecipe:{type:'side',id:'${item.id}'}})` });
      }
    });
  });

  set({ searchQuery: query, searchResults: results.slice(0, 20), screen: 'search_results' });
}

// Live search — updates results div directly, never calls draw() so input keeps focus
function globalSearchLive(query) {
  S.searchQuery = query;
  const resultsDiv = document.getElementById('searchResultsBody');
  if(!resultsDiv) return;

  if(!query || query.trim().length < 2) {
    resultsDiv.innerHTML = '';
    return;
  }

  const q = query.toLowerCase().trim();
  const results = [];

  MEAT_GROUPS.forEach(function(g) { g.items.forEach(function(item) {
    if(item.name.toLowerCase().includes(q)||(item.note||'').toLowerCase().includes(q))
      results.push({emoji:item.emoji||'🔥', name:item.name, section:'Braai', sub:item.note||'',
        action:"set({screen:'braai',braiStep:2,braaiView:'browse',viewingRecipe:{type:'meat',id:'"+item.id+"'}})"});
  });});
  SIDES_GROUPS.forEach(function(g) { g.items.forEach(function(item) {
    if(item.name.toLowerCase().includes(q)||(item.desc||'').toLowerCase().includes(q))
      results.push({emoji:item.emoji||'🥗', name:item.name, section:'Braai — '+g.label, sub:item.desc||'',
        action:"set({screen:'braai',braiStep:3,braaiView:'browse',braaiSidesFilter:'"+g.id+"',viewingRecipe:{type:'side',id:'"+item.id+"'}})"});
  });});

  S.searchResults = results.slice(0,20);
  var html = '';
  if(results.length === 0) {
    html = '<p style="color:#4a3020;font-style:italic;text-align:center;padding:40px 0;">No results for &ldquo;'+query+'&rdquo;</p>';
  } else {
    html += '<div style="font-size:11px;color:#4a3020;margin-bottom:12px;">'+results.length+' recipe'+(results.length!==1?'s':'')+' found in Tinza</div>';
    results.forEach(function(r) {
      html += '<div onclick="'+r.action+'" style="display:flex;align-items:center;gap:12px;padding:12px;background:#161210;border:1px solid #2a1a10;border-radius:10px;margin-bottom:8px;cursor:pointer;">';
      html += '<div style="font-size:28px;flex-shrink:0;">'+r.emoji+'</div>';
      html += '<div style="flex:1;min-width:0;">';
      html += '<div style="font-size:14px;color:#f5e8cc;font-weight:bold;">'+r.name+'</div>';
      html += '<div style="font-size:11px;color:#6a4020;">'+r.section+'</div>';
      if(r.sub) html += '<div style="font-size:11px;color:#4a3020;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+r.sub+'</div>';
      html += '</div><div style="color:#c06020;font-size:18px;flex-shrink:0;">→</div></div>';
    });
    html += '<div style="margin-top:20px;padding-top:16px;border-top:1px solid #1e1a10;text-align:center;">'
      +'<div style="font-size:11px;color:#4a3020;margin-bottom:10px;">Cant find it? Try a wider search</div>'
      +'<button onclick="alert(\"More recipes coming soon!\")" style="width:100%;padding:14px;background:#1a1208;border:2px solid #c06020;border-radius:10px;color:#c06020;font-size:14px;cursor:pointer;font-family:Georgia,serif;">🌍 Find more recipes</button>'
      +'</div>';
  }
  resultsDiv.innerHTML = html;
}

function searchResultsHTML() {
  var q = S.searchQuery || '';
  var results = S.searchResults || [];
  var resultsHTML = renderSearchResults(q, results);

  return '<div>'
    + '<div class="header">'
    + '<button class="back-btn" onclick="set({screen:S.searchPrevScreen||\'home\',searchQuery:\'\',searchResults:[]})" style="color:#c06020;">&#8592; Back</button>'
    + '<h1 style="font-size:18px;font-weight:normal;color:#f5e8cc;">&#128269; Search</h1>'
    + '</div>'
    + '<div class="content">'
    + '<div style="position:relative;margin-bottom:16px;">'
    + '<input type="text" id="searchPageInput" value="' + q.replace(/"/g,'&quot;') + '" placeholder="Search recipes, ingredients..." '
    + 'style="width:100%;box-sizing:border-box;padding:12px 16px 12px 40px;background:#1a1208;border:2px solid #c06020;border-radius:10px;color:#f5e8cc;font-size:15px;font-family:Georgia,serif;outline:none;">'
    + '<span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:16px;">&#128269;</span>'
    + '</div>'
    + '<div id="searchResultsBody">' + resultsHTML + '</div>'
    + '</div></div>';
}

function renderSearchResults(q, results) {
  if(!q || q.length < 2) return '';
  if(results.length === 0) {
    return '<p style="color:#4a3020;font-style:italic;text-align:center;padding:40px 0;">No results for &ldquo;' + q + '&rdquo;</p>'
      + findMoreBtn();
  }
  var html = '<div style="font-size:11px;color:#4a3020;margin-bottom:12px;">' + results.length + ' recipe' + (results.length!==1?'s':'') + ' found in Tinza</div>';
  results.forEach(function(r) {
    html += '<div onclick="' + r.action + '" style="display:flex;align-items:center;gap:12px;padding:12px;background:#161210;border:1px solid #2a1a10;border-radius:10px;margin-bottom:8px;cursor:pointer;">';
    html += '<div style="font-size:28px;flex-shrink:0;">' + r.emoji + '</div>';
    html += '<div style="flex:1;min-width:0;">';
    html += '<div style="font-size:14px;color:#f5e8cc;font-weight:bold;">' + r.name + '</div>';
    html += '<div style="font-size:11px;color:#6a4020;">' + r.section + '</div>';
    if(r.sub) html += '<div style="font-size:11px;color:#4a3020;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + r.sub + '</div>';
    html += '</div><div style="color:#c06020;font-size:18px;flex-shrink:0;">&#8594;</div></div>';
  });
  html += findMoreBtn();
  return html;
}

function findMoreBtn() {
  return '<div style="margin-top:20px;padding-top:16px;border-top:1px solid #1e1a10;text-align:center;">'
    + '<div style="font-size:11px;color:#4a3020;margin-bottom:10px;">Cant find it? Try a wider search</div>'
    + '<button onclick="alert(\'More recipes coming soon\')" style="width:100%;padding:14px;background:#1a1208;border:2px solid #c06020;border-radius:10px;color:#c06020;font-size:14px;cursor:pointer;font-family:Georgia,serif;">&#127757; Find more recipes</button>'
    + '</div>';
}


// Start the app
draw();
