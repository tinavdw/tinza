#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   TINZA CENSUS  ·  v1  ·  14 July 2026
   READ-ONLY. It writes NOTHING. It only counts.

   RUN:   node tinza-census.js
   FROM:  the tinza repo root (where index.html lives)

   The DOCTOR asks "is it broken?"  →  RED or GREEN.
   The CENSUS asks "how much of it is there?"  →  A NUMBER.

   ⚖️ LAW 36 — THE COUNT IS TRUTH. THE RENDER IS A COURTESY.
   ⚖️ LAW 42 — THE RATCHET. Every bug you close adds a check here.
                A bug the census catches cannot come back quietly.
   ══════════════════════════════════════════════════════════════════════════ */

const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = process.cwd();
if (!fs.existsSync(path.join(ROOT, 'index.html'))) {
  console.log('\x1b[31mNo index.html here. Run the census from the tinza repo root.\x1b[0m');
  process.exit(2);
}
const p = (...a) => console.log(...a);
const head = t => p('\n\x1b[1m\x1b[36m' + t + '\x1b[0m');
const ok   = (t,d) => p('  \x1b[32m✔\x1b[0m ' + t + (d ? '  \x1b[2m'+d+'\x1b[0m' : ''));
const bad  = (t,d) => p('  \x1b[31m✘ ' + t + '\x1b[0m' + (d ? '  '+d : ''));
const warn = (t,d) => p('  \x1b[33m▲ ' + t + '\x1b[0m' + (d ? '  '+d : ''));
const num  = n => String(n).padStart(5);

// ── BOOT (same sandbox as the doctor) ────────────────────────────────────
const loadOrder = (fs.readFileSync(path.join(ROOT,'index.html'),'utf8').match(/sections\/[A-Za-z0-9_.-]+\.js/g) || []);
const ctx = { console:{log(){},warn(){},error(){}}, fetch:()=>Promise.reject(new Error('offline')),
  setTimeout, clearTimeout, setInterval, clearInterval,
  document:{getElementById:()=>null, addEventListener(){}, querySelector:()=>null},
  localStorage:{getItem:()=>null,setItem(){},removeItem(){}}, navigator:{onLine:true}, location:{href:''} };
ctx.window = ctx; vm.createContext(ctx);
for (const f of loadOrder) { try { vm.runInContext(fs.readFileSync(path.join(ROOT,f),'utf8'), ctx, {filename:f}); } catch(e){} }
const all = ctx.allRecipes ? ctx.allRecipes() : [];

p('\n\x1b[1m\x1b[36m📊  TINZA CENSUS\x1b[0m  \x1b[2m' + new Date().toISOString().slice(0,16).replace('T',' ') + ' · read-only · writes nothing\x1b[0m');
p('\x1b[2m    ' + all.length + ' recipes in the index\x1b[0m');

// ══ 1 · SEARCH SPEED ═════════════════════════════════════════════ MF98 ══
head('1 · IS THE SEARCH INSTANT?   ⚖️ she types, she must not wait');
{
  let calls = 0; const realNorm = ctx._searchNorm;
  ctx._searchNorm = function(s){ calls++; return realNorm(s); };
  const t0 = Date.now(); const hits = ctx.tinzaAllSearch('butternut'); const ms = Date.now()-t0;
  ctx._searchNorm = realNorm;
  p('     one keystroke ("butternut") → ' + num(ms) + ' ms · ' + calls.toLocaleString() + ' re-normalisations · ' + (hits.total||hits.length) + ' hits');
  if (calls > all.length) {
    bad('THE SEARCH RE-NORMALISES THE WHOLE APP ON EVERY LETTER',
        '\n      ⚖️ Law 6 — normalise ONCE in rec() (index.js:66), not ' + calls.toLocaleString() + '× per keystroke.' +
        '\n      \x1b[2mA tablet is 4-6× slower than this machine. Multiply it.\x1b[0m');
  } else ok('Search is precomputed', ms + 'ms');
}

// ══ 2 · TWO SEARCH ENGINES? ══════════════════════════════════════════════
head('2 · HOW MANY SEARCH ENGINES DOES TINZA HAVE?   ⚖️ SAMENESS — there must be ONE');
{
  const probes = ['vegetarian','vegan','chicken','butternut','bobotie'];
  let disagree = 0;
  probes.forEach(q => {
    const a = (ctx.allRecipes({text:q})||[]).length;             // engine 1 · index.js
    const b = (ctx.tinzaAllSearch(q)||[]).total || 0;            // engine 2 · utils.js  ← the live one
    if (a !== b) disagree++;
    p('     "' + q.padEnd(12) + '"  allRecipes{text}: ' + num(a) + '   tinzaAllSearch: ' + num(b) + (a!==b ? '   \x1b[31m← DISAGREE\x1b[0m' : ''));
  });
  if (disagree) bad(disagree + ' of ' + probes.length + ' queries give DIFFERENT answers',
      '\n      \x1b[2mEngine 1 = allRecipes({text}) · index.js:489 — plain indexOf.' +
      '\n      Engine 2 = tinzaAllSearch()   · utils.js:132  — word-start + VERSION prose.  ← the app uses this one\x1b[0m');
  else ok('Both engines agree');
}

// ══ 3 · THE DIET LABELS ══════════════════════════════════════ MF94-A/B ══
head('3 · CAN TINZA ANSWER "I AM VEGETARIAN"?');
{
  const words = {}; let none = 0;
  all.forEach(r => { const d = r.diet||[]; if(!d.length){none++;return;} d.forEach(w=>words[w]=(words[w]||0)+1); });
  Object.entries(words).sort((a,b)=>b[1]-a[1]).forEach(([w,n])=>p('     ' + num(n) + '  ' + w));
  p('     ' + num(none) + '  \x1b[31m(NO LABEL AT ALL)\x1b[0m');
  const cov = Math.round((all.length-none)/all.length*100);
  if (cov < 100) bad('Only ' + cov + '% of recipes carry a diet label', '(' + none + ' unlabelled)');

  // ⚖️ LAW 46 — ONE FOOD, ONE WORD
  const synonyms = [['veg','vegetarian'],['meat','omnivore']];
  synonyms.forEach(([a,b]) => {
    if (words[a] && words[b]) bad('TWO WORDS FOR THE SAME FOOD: "' + a + '" (' + words[a] + ') and "' + b + '" (' + words[b] + ')',
      '\n      \x1b[2m⚖️ Law 46 — the filter finds one room and goes blind to the other.\x1b[0m');
  });

  // ⚖️ LAW 45 — UNKNOWN IS NOT NO
  const bySec = {};
  all.forEach(r => { const s=r.section||'?'; bySec[s]=bySec[s]||{t:0,n:0}; bySec[s].t++; if(!(r.diet||[]).length) bySec[s].n++; });
  const blind = Object.entries(bySec).filter(([,v]) => v.n === v.t).sort((a,b)=>b[1].t-a[1].t);
  if (blind.length) bad(blind.length + ' ROOMS ARE COMPLETELY DIETARY-BLIND',
    '\n      ' + blind.map(([s,v])=>s+' ('+v.t+')').join(' · ') +
    '\n      \x1b[2m⚖️ Law 45 — an unlabelled recipe is being treated as MEAT. A chutney is not a steak.\x1b[0m');

  // ⚖️ LAW 48 — VEGAN IS A KIND OF VEGETARIAN
  const vgn = all.filter(r => (r.diet||[]).indexOf('vegan')>=0);
  const lost = vgn.filter(r => (r.diet||[]).indexOf('vegetarian')<0 && (r.diet||[]).indexOf('veg')<0);
  if (lost.length) bad(lost.length + ' VEGAN recipes are INVISIBLE to the vegetarian filter',
    '\n      \x1b[2m⚖️ Law 48 — vegan is a KIND of vegetarian. A ladder, not a row of boxes.\x1b[0m');
  else ok('Every vegan recipe is also vegetarian');
}

// ══ 4 · IS A DIET BEING READ OUT OF PROSE? ══════════════════════ MF94-E ══
head('4 · IS TINZA READING A DIET OUT OF A SENTENCE?   ⚖️ Law 47');
{
  const DIETWORDS = ['vegetarian','vegan'];
  const liars = [];
  all.forEach(r => {
    const tagged = (r.diet||[]).join(' ');
    (r.versions||[]).forEach(v => {
      const prose = ((v.name||'') + ' ' + (v.feel||'')).toLowerCase();
      DIETWORDS.forEach(w => {
        // the word is in the PROSE, but the recipe is NOT tagged with it
        if (prose.indexOf(w) >= 0 && tagged.indexOf(w) < 0 && liars.length < 40) {
          liars.push(r.name + '  \x1b[2m→ matches "' + w + '" via the "' + (v.name||'?') + '" version\'s prose\x1b[0m');
        }
      });
    });
  });
  if (liars.length) {
    bad(liars.length + ' MEAT RECIPES WILL ANSWER A VEGETARIAN/VEGAN SEARCH');
    liars.slice(0,10).forEach(x => p('      \x1b[31m·\x1b[0m ' + x));
    if (liars.length > 10) p('      \x1b[2m… and ' + (liars.length-10) + ' more\x1b[0m');
    p('      \x1b[2m⚖️ Law 47 — a diet is a FACT, not a word in a sentence. A vegan was handed a lamb tagine.\x1b[0m');
  } else ok('No diet is being matched against prose');
}

// ══ 5 · THE TOOL TILES ═══════════════════════════════════ MF89 · Law 31 ══
head('5 · DOES EVERY TOOL OPEN WITH AN EMPTY BOX?   ⚖️ Law 31');
{
  // ONLY the featureTools grid. The ROOM tiles (braai, health…) are doors, not questions —
  // they hold nothing and need no reset. Do not widen this regex or the census starts lying.
  const core = fs.readFileSync(path.join(ROOT,'sections/core.js'),'utf8');
  const block = (core.match(/featureTools[\s\S]{0,2600}?\n\s*\]/) || [''])[0];
  const tiles = [...block.matchAll(/\{\s*s\s*:\s*"([a-zA-Z]+)"([\s\S]{0,300}?)\}/g)]
    .map(m => ({ id:m[1], reset: /reset\s*:/.test(m[2]) }));
  const NOT_A_QUESTION = { weekplanner:'does not exist yet — a comingSoon page. Nothing to reset.' };
  if (!tiles.length) { warn('Could not read featureTools — its shape changed. UPDATE THIS CHECK.'); }
  tiles.forEach(t => {
    if (NOT_A_QUESTION[t.id])  warn(t.id, NOT_A_QUESTION[t.id]);
    else if (t.reset)          ok(t.id, 'opens empty');
    else                       bad(t.id, 'NO reset: — it re-opens with her last answer still in it');
  });
}

// ══ 6 · DOES EVERY ROOM HAVE A SEARCH BOX? ══════════════════ MF96 · v33 ══
head('6 · DOES EVERY ROOM HAVE A SEARCH BOX?   ⚖️ SAMENESS');
{
  const files = fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js'));
  const ROOMS = ['braai.js','spice.js','meals.js','health.js','kiddies.js','budget.js','events.js','worldkitchen.js','furry.js','tinyTummies.js'];
  ROOMS.filter(f=>files.includes(f)).forEach(f => {
    const src = fs.readFileSync(path.join(ROOT,'sections',f),'utf8');
    const hasHeader = /sectionHeader\s*\(/.test(src);
    const hasLive   = /liveSearch\s*\(/.test(src) || /oninput\s*:/.test(src);
    const hasNav    = /screen\s*=\s*'search_results'|screen:'search_results'/.test(src);
    if (hasLive)        ok(f, 'inline live search');
    else if (hasNav)    bad(f, 'search PILL only — it navigates away (and MF95: it may not close the open recipe)');
    else if (!hasHeader)bad(f, 'NO sectionHeader() AT ALL — never migrated to v33  ⚖️ Law 34');
    else                bad(f, 'sectionHeader() but NO SEARCH');
  });
}

// ══ 7 · THE AMBUSH FAMILY ════════════════════════════════════════ MF95 ══
head('7 · WHO CHANGES THE SCREEN WITHOUT CLOSING THE OPEN RECIPE?   ⚖️ Law 4');
{
  const SD = path.join(ROOT,'sections');
  const files = fs.readdirSync(SD).filter(f=>f.endsWith('.js'));
  const PROVEN = { 'braai.js:28':1, 'spice.js:7982':1 };   // Tina's fingers, 14 Jul
  const guilty = [], clean = [];
  files.forEach(f => {
    const s = fs.readFileSync(path.join(SD,f),'utf8');
    const re = /(set\(\{[^}]*screen\s*:\s*['"][a-zA-Z_]+['"][^}]*\}\)|S\.screen\s*=\s*['"][a-zA-Z_]+['"][^;]*;)/g;
    let m;
    while ((m = re.exec(s))) {
      const stmt = m[0];
      const at = f + ':' + s.slice(0,m.index).split('\n').length;
      const scr = (stmt.match(/screen\s*[:=]\s*['"]([a-zA-Z_]+)['"]/)||[])[1];
      (/viewingRecipe\s*[:=]\s*(null|false)/.test(stmt) ? clean : guilty).push({at,scr});
    }
  });
  const proven = guilty.filter(g=>PROVEN[g.at]);
  const risk   = guilty.filter(g=>!PROVEN[g.at]);
  proven.forEach(g => bad('PROVEN ON LIVE  ' + g.at, '→ ' + g.scr + '   (Tina, 14 Jul: it opened Butter Chicken)'));
  if (risk.length) warn(risk.length + ' MORE sites of the SAME SHAPE — same-shape, NOT yet proven',
    '\n      ' + risk.slice(0,12).map(g=>g.at).join(' · ') + (risk.length>12 ? ' …' : '') +
    '\n      \x1b[2m⚖️ Law 22 — this is a RISK LIST, not a bug list. Do not "fix" 32 sites.' +
    '\n      ⚖️ Law 6  — build openSectionSearch() / a router that closes the recipe ONCE.\x1b[0m');
  ok(clean.length + ' screen-changes DO close the recipe first');
}

// ══ 8 · THE BACK BUTTON ══════════════════════════════════ MF64/65/72 ══
head('8 · WHERE DOES THE BOTTOM-LEFT BACK BUTTON GO?');
{
  const core = fs.readFileSync(path.join(ROOT,'sections/core.js'),'utf8');
  const gb = (core.match(/function goBack[\s\S]{0,2400}?\n\}/)||[''])[0];
  const dumpsHome = /if\s*\(\s*S\.screen\s*&&\s*S\.screen\s*!==\s*'home'\s*\)\s*\{\s*bottomBarGo\('home'\)/.test(gb);
  const readsPrev = /searchPrevScreen/.test(gb);
  if (dumpsHome && !readsPrev) bad('goBack() DUMPS HER ON HOME from any root screen',
    "\n      \x1b[2mcore.js — step (4): if(S.screen!=='home'){ bottomBarGo('home'); }" +
    "\n      S.searchPrevScreen IS ALREADY SET by braai.js, spice.js and liveSearch() — and goBack() NEVER READS IT." +
    '\n      ⚖️ Law 6 — ONE line in goBack(). Not one fix per room.\x1b[0m');
  else if (readsPrev) ok('goBack() honours searchPrevScreen');
  // every sectionHeader back — are they honest about where they go?
  let liars = 0, homes = 0;
  fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js')).forEach(f=>{
    const s = fs.readFileSync(path.join(ROOT,'sections',f),'utf8');
    const re = /backJs\s*:\s*(["'])((?:\\.|(?!\1).)*)\1/g; let m;
    while((m=re.exec(s))){
      const goesHome = /screen\s*:\s*'home'/.test(m[2]);
      const label = (s.slice(m.index,m.index+300).match(/backLabel\s*:\s*['"]([^'"]*)/)||[])[1]||'';
      if (goesHome) { homes++; if (!/home/i.test(label)) liars++; }
    }
  });
  if (liars) bad(liars + ' header Back buttons go HOME but do not SAY Home');
  else ok('All ' + homes + ' header Backs that go Home are LABELLED "← Home"', 'they are honest — the bug is goBack(), not them');
}

// ══ 9 · COPIED CODE ══════════════════════════════════════════ ⚖️ Law 6 ══
head('9 · THE SAME CODE, WRITTEN OVER AND OVER   ⚖️ Law 6 — build the ONE thing they call');
{
  const SD = path.join(ROOT,'sections');
  const files = fs.readdirSync(SD).filter(f=>f.endsWith('.js'));
  [['the PRICE, hard-coded',        /R\s?(50|90|99)\s*\/?\s*(month|mo\b)/gi, 'MF91 — make it ONE constant: TINZA_PRICE'],
   ['a WhatsApp share link',        /wa\.me\/\?text=/g,                      'the shopping-list save already exists here — build the ONE shareList()'],
   ['the search-pill onclick',      /searchPrevScreen\s*=\s*'[a-z]+'/g,      'MF95 — build openSectionSearch(scope)']
  ].forEach(([name, re, note]) => {
    const sites = [];
    files.forEach(f => { const s=fs.readFileSync(path.join(SD,f),'utf8'); const r=new RegExp(re.source,re.flags); let m;
      while((m=r.exec(s))) sites.push(f); });
    if (sites.length > 1) bad(sites.length + ' × ' + name,
      '\n      ' + [...new Set(sites)].join(' · ') + '\n      \x1b[2m' + note + '\x1b[0m');
  });
}

// ══ 10 · THE TRINITY ═══════════════════════════════ ⚖️ Tina, 14 Jul ══
head('10 · DOES EVERY CARD CARRY 🥬 DIET · ⏱️ TIME · 💰 COST?   ⚖️ "each dish needs a cost"');
{
  const n = all.length;
  const d = all.filter(r=>(r.diet||[]).length).length;
  const t = all.filter(r=>r.time!=null).length;
  const c = all.filter(r=>r.costPP!=null).length;
  const three = all.filter(r=>(r.diet||[]).length && r.time!=null && r.costPP!=null).length;
  const pc = x => String(Math.round(x/n*100)).padStart(3)+'%';
  p('     🥬 DIET  ' + num(d) + '  ' + pc(d) + '        ⏱️ TIME  ' + num(t) + '  ' + pc(t) + '        💰 COST  ' + num(c) + '  ' + pc(c));
  if (three < n) bad('Only ' + three + ' of ' + n + ' recipes (' + pc(three).trim() + ') carry ALL THREE');
  else ok('Every recipe carries all three');

  // 💰 the moat — where is the cost missing, and is it a BUG or is it TRUE?
  const bySec = {};
  all.forEach(r => { const s=r.section||'?'; bySec[s]=bySec[s]||{t:0,c:0}; bySec[s].t++; if(r.costPP!=null) bySec[s].c++; });
  const blind = Object.entries(bySec).filter(([,v])=>v.c===0).sort((a,b)=>b[1].t-a[1].t);
  const partial = Object.entries(bySec).filter(([,v])=>v.c>0 && v.c<v.t).sort((a,b)=>(b[1].t-b[1].c)-(a[1].t-a[1].c));
  if (blind.length) bad(blind.length + ' ROOMS HAVE NO COST AT ALL',
    '\n      ' + blind.map(([s,v])=>s+' ('+v.t+')').join(' · ') +
    '\n      \x1b[2m🩸 BRAAI IS NOT A CONTENT GAP — index.js:334 HARD-CODES costPP:null (and diet, time, kcal).' +
    '\n      The cost EXISTS (calcMeat · PORTION_BRAAI · the green/gold list). THE ADAPTER BINS IT.' +
    '\n      ⚖️ Law 23 — "Braai has no cost" is a BUG. "A chutney has no cost" may simply be TRUE. Tina rules.\x1b[0m');
  partial.forEach(([s,v]) => warn(s + ': ' + (v.t-v.c) + ' of ' + v.t + ' uncosted'));

  const nocost = all.filter(r=>r.costPP==null).length;
  if (nocost) bad(nocost + ' recipes are INVISIBLE to "I\'ve Got R100"',
    '\n      \x1b[2mindex.js:483 — if(r.costPP==null) return false.  A R100 budget searches ' + (n-nocost) + ', not ' + n + '.\x1b[0m');
}

// ══ 11 · THE MEAL SLOT ═══════════════════════════════════════ MF119 · Law 42 ══
head('11 · CAN TINZA TELL BREAKFAST FROM SUPPER?   ⚖️ Law 45 — empty is unknown, never "no"');
{
  // The canonical slot vocabulary. slot() (index.js) may only ever emit one of these,
  // or 'unknown'. Anything else means a foreign value leaked in — the tripwire below.
  const CANON = ['SUPPER','LUNCH','BREAKFAST','SIDE','STARTER','TREAT','DRINK','CONDIMENT','PETFOOD','BABYFOOD'];
  const counts = {}; let present = 0, unknown = 0, missing = 0; const foreign = {};
  all.forEach(r => {
    const s = r.slot;
    if (s == null || s === '') { missing++; return; }
    present++;
    if (s === 'unknown') { unknown++; return; }
    if (CANON.indexOf(s) < 0) { foreign[s] = (foreign[s]||0) + 1; }   // not canonical, not unknown → leak
    counts[s] = (counts[s]||0) + 1;
  });
  p('     ' + num(present) + '  slot present          \x1b[2m← must be ' + all.length + '\x1b[0m');
  p('     ' + num(unknown) + '  unknown               \x1b[2m← this number must never grow\x1b[0m');
  p('           ' + CANON.filter(k=>counts[k]).map(k => counts[k] + ' ' + k).join(' · '));

  if (missing) bad(missing + ' recipes have NO slot field at all',
    '\n      \x1b[2m⚖️ Law 45 — a blank slot is a silent miss, not an answer.\x1b[0m');
  if (unknown) bad(unknown + ' recipes are UNKNOWN — the ratchet slipped',
    '\n      \x1b[2m⚖️ Law 42/45 — unknown may only ever SHRINK. It was 0. Find what stopped resolving.\x1b[0m');
  else if (!missing) ok('Every recipe knows its slot', '0 unknown · 0 missing');

  // THE COLLISION TRIPWIRE — WK's raw `occasion` is a DIFFERENT axis (117 free-text values).
  // slot() must never read it. If it did, an occasion string would show up as a slot value.
  if (Object.keys(foreign).length) bad("WK's raw `occasion` is being read as a slot",
    '\n      ' + Object.entries(foreign).map(([k,v])=>k+' ('+v+')').join(' · ') +
    '\n      \x1b[2m⚖️ Law 46 — one axis, one column. `occasion` is not a meal slot.\x1b[0m');
  else ok("No `occasion` value has leaked into slot", 'the axis is clean');
}

// ══ 12 · THE RESERVED SLOTS ═══════════════ TINZA_CONTRACT_SLOTS.md · Law 42 ══
head('12 · HOW MUCH OF THE RECIPE CONTRACT IS ACTUALLY THERE?   ⚖️ reserve the SHAPE');
{
  // The contract's 7 recipe-level slots (+ the 3 "standardised, not new" ones).
  // Measured in BOTH places, because they are different questions:
  //   RAW  — what the data files hold.        POST — what rec() lets through.
  // rec() (index.js:162) returns a WHITELIST. A field the data has but rec() omits
  // is invisible to every render path. That gap is the whole point of this check.
  // `source`, NOT `origin` — provenance was renamed 15 Jul (Law 46: `origin` means A PLACE).
  const F = ['ingredients','steps','tags','source','goesWith','contains','visibility','yield','diet','versions'];
  const ty = v => v===undefined ? '–' : v===null ? 'null' : Array.isArray(v) ? 'arr' : typeof v==='string' ? 'str' : typeof v;

  // ── RAW · harvest every SCREAMING_CASE global that holds recipe-ish objects.
  // const/let globals are NOT properties of the vm context (they live in its lexical
  // env), so Object.keys(ctx) cannot see them — read each by name, inside the context.
  const names = new Set();
  for (const f of loadOrder) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    let m, re = /^\s*(?:const|let|var)\s+([A-Z][A-Z0-9_]{2,})\s*=/gm;
    while ((m = re.exec(src))) names.add(m[1]);
  }
  const isRec = o => o && typeof o==='object' && !Array.isArray(o) &&
                     typeof o.name==='string' && (o.ingredients!==undefined || o.method!==undefined || o.id!==undefined);
  const raw = {}, seen = new Set();
  function eat(g, arr, d){
    if (d > 3) return;
    for (const o of arr) {
      if (isRec(o)) { if (!seen.has(o)) { seen.add(o); (raw[g] = raw[g] || []).push(o); } }
      else if (Array.isArray(o)) eat(g, o, d+1);
      else if (o && typeof o==='object') for (const k of Object.keys(o)) if (Array.isArray(o[k])) eat(g, o[k], d+1);
    }
  }
  for (const g of [...names].sort()) {
    let v; try { v = vm.runInContext('typeof '+g+'!=="undefined"?'+g+':undefined', ctx); } catch(e) { continue; }
    if (Array.isArray(v) && v.length) eat(g, v, 0);
  }

  // ⚠️ THE INGREDIENT KEY IS NOT `ingredients` IN EVERY ROOM.
  // health→shopping/base300/base · events→base300 · tiny→base · braai→it.recipe.ingredients
  // · WK→a `·`-STRING · spice→none (a spice IS an ingredient). The ADAPTERS already know
  // this map (index.js:307/402). Anything that re-derives it becomes a SECOND ENGINE. ⚖️ Law 6.
  const ING_KEYS = ['ingredients','base300','base','shopping','base12'];
  const shapeOf = r => {
    for (const k of ING_KEYS) {
      const i = r[k];
      if (i === undefined) continue;
      if (typeof i === 'string') return i.indexOf('·') >= 0 ? '·-STRING' : 'string';
      if (Array.isArray(i)) return (i[0] && typeof i[0]==='object') ? k+'[' + Object.keys(i[0]).sort().join(',') + ']' : k+'[]';
    }
    return 'none';
  };

  const pad = (s,n) => String(s).padEnd(n), lp = (s,n) => String(s).padStart(n);
  p('\n     \x1b[1mRAW — what the data files hold\x1b[0m');
  p('     ' + pad('GLOBAL',26) + lp('n',5) + '  ' + pad('INGREDIENT SHAPE',22) + F.slice(1).map(f=>lp(f.slice(0,8),10)).join(''));
  let tot = 0; const agg = {}; const dotRooms = [];
  for (const g of Object.keys(raw).sort()) {
    const rs = raw[g]; tot += rs.length;
    const shp = [...new Set(rs.map(shapeOf))].join('|');
    if (/·-STRING/.test(shp)) dotRooms.push(g + ' (' + rs.length + ')');
    const cells = F.slice(1).map(f => {
      const t = {}; rs.forEach(r => { const k = ty(r[f]); t[k] = (t[k]||0)+1; });
      agg[f] = agg[f] || {}; Object.entries(t).forEach(([k,v]) => agg[f][k] = (agg[f][k]||0)+v);
      const present = rs.length - (t['–']||0);
      return lp(present === 0 ? '·' : present + ' ' + Object.keys(t).filter(k=>k!=='–').join('/'), 10);
    });
    p('     ' + pad(g,26) + lp(rs.length,5) + '  ' + pad(shp,22) + cells.join(''));
  }
  p('     ' + pad('TOTAL RAW',26) + lp(tot,5) + '   \x1b[2m(index reports ' + all.length + ' — the rest are nested/derived)\x1b[0m');

  // ── POST · what rec() actually hands the renderers ──
  p('\n     \x1b[1mPOST-rec() — what every render path actually sees\x1b[0m');
  const dead = [];
  F.forEach(f => {
    const t = {}; all.forEach(r => { const k = ty(r[f]); t[k] = (t[k]||0)+1; });
    const missing = t['–'] || 0;
    const line = '     ' + pad(f,13) + pad(Object.entries(t).map(([k,v]) => v+' '+k).join(' · '), 34);
    if (missing === all.length) { dead.push(f); p(line + '\x1b[31m← rec() DROPS IT\x1b[0m'); }
    else p(line);
  });
  if (dead.length) bad(dead.length + ' CONTRACT SLOTS CANNOT REACH A RENDERER: ' + dead.join(' · '),
    '\n      \x1b[2mrec() (index.js:162) is a WHITELIST. Adding these to the DATA changes NOTHING' +
    '\n      until rec() passes them through. The plumbing belongs IN rec(), not beside it. ⚖️ Law 6.\x1b[0m');
  if (dotRooms.length) warn(dotRooms.length + ' raw globals store ingredients as a `·`-STRING',
    '\n      ' + dotRooms.join(' · ') +
    '\n      \x1b[2mNot a bug: adaptWorld (index.js:338) already parses them via wkParseIngredients()' +
    '\n      at index-build. POST-rec they are structured. Do NOT parse them a second time. ⚖️ Law 6.\x1b[0m');

  // ── THE RULINGS OF 15 JUL, ENFORCED ─────────────────────────── ⚖️ Law 42 ──
  // Each of these closed a real hole. The ratchet keeps them closed.
  const SD2 = path.join(ROOT,'sections');
  const files2 = fs.readdirSync(SD2).filter(f => f.endsWith('.js') && !/\.bak/.test(f));

  // ⚖️ LAW 46 · `origin` MEANS A PLACE. Provenance is `source`. A recipe-level `origin`
  // means the collision came back — metaStrip() would print "📍 db" on every card.
  const strays = all.filter(r => r.origin !== undefined).length;
  if (strays) bad(strays + ' recipes carry a recipe-level `origin` — THE COLLISION IS BACK',
    "\n      \x1b[2mcore.js metaStrip() prints `origin` as a 📍 PIN (fed r.cuisine|country|region)." +
    "\n      Provenance is `source` (db|chef|user). Location is `origin`. ⚖️ Law 46 — ruled 15 Jul.\x1b[0m");
  else ok('No recipe-level `origin`', 'provenance is `source`; 📍 still means a place');

  // ⚖️ LAW 45 · contains === [] is a SAFETY CLAIM ("no allergens") we have not earned.
  const claim = all.filter(r => Array.isArray(r.contains) && !r.contains.length).length;
  if (claim) bad(claim + ' recipes claim "CONTAINS NO ALLERGENS" WITHOUT DERIVING IT',
    "\n      \x1b[2m⚖️ Law 45 — UNKNOWN IS NOT NO. `contains: []` reads as a cleared allergen list." +
    "\n      Until deriveContains() ships with a confirmed list, the honest default is null. Ruled 15 Jul.\x1b[0m");
  else ok('No recipe claims an un-derived empty allergen list', 'contains is null = unknown ⚖️ Law 45');

  // 🩸 THE BUG THIS BRIEF NEARLY SHIPPED. versions defaults to [] — and [] is TRUTHY where
  // null was FALSY. budget.js:283 scored `r.versions ? 3 : 0`: every recipe would have won
  // the bonus and the dedup would silently keep a different record. Test .length, never
  // the array itself. ⚖️ Law 42 — a bug the census catches cannot come back quietly.
  const naked = [];
  files2.forEach(f => {
    const s = fs.readFileSync(path.join(SD2,f),'utf8');
    // `r.versions ?` / `&& r.versions)` etc — a bare truthiness test, no .length beside it
    const re = /[A-Za-z_$][\w$]*\.versions\s*(\?|\)\s*\?)/g; let m;
    while ((m = re.exec(s))) {
      const around = s.slice(Math.max(0,m.index-40), m.index+60);
      if (!/\.versions\s*&&|\.versions\.length/.test(around))
        naked.push(f + ':' + s.slice(0,m.index).split('\n').length);
    }
  });
  if (naked.length) bad(naked.length + ' site(s) test `.versions` AS A BOOLEAN — [] is TRUTHY',
    '\n      ' + naked.join(' · ') +
    '\n      \x1b[2mThe door defaults versions to [] (ruled 15 Jul). A bare test now fires for EVERY' +
    '\n      recipe. Use `.versions && .versions.length`. This is how budget.js:283 broke.\x1b[0m');
  else ok('Every `.versions` test checks .length', 'the [] default cannot silently fire ⚖️ Law 42');

  // ⚖️ LAW 6 · THE DOOR IS ONE FUNCTION. rec() must CALL it, never re-implement its defaults.
  const idx = fs.readFileSync(path.join(ROOT,'sections/index.js'),'utf8');
  if (/normalizeRecipe\s*\(/.test(idx) && /function\s+normalizeRecipe/.test(fs.readFileSync(path.join(ROOT,'sections/core.js'),'utf8')))
    ok('rec() calls normalizeRecipe() — THE DOOR', 'one definition of the slots; the Chef + Add-a-Recipe call the same one');
  else bad('rec() DOES NOT CALL normalizeRecipe() — the door has been bypassed',
    '\n      \x1b[2m⚖️ Law 6 — every record door produces complete records, or none do. Ruled 15 Jul.\x1b[0m');

  // `yield` — two paths, two levels, NO collision. The tripwire is a FLATTENING.
  const flat = all.filter(r => r.yield && typeof r.yield === 'object' && r.yield.mode !== undefined).length;
  if (flat) bad(flat + " recipes have spice's makeYourOwn.yield FLATTENED into recipe.yield",
    "\n      \x1b[2mrecipe.yield (contract slot) and makeYourOwn.yield ({mode,unit,base,step,label}," +
    "\n      spice.js:7905/7926/8128/8341) are DIFFERENT PATHS AT DIFFERENT LEVELS. Never flatten. Ruled 15 Jul.\x1b[0m");
  else ok('recipe.yield and makeYourOwn.yield stay separate', 'two levels, no collision — ruled 15 Jul');

  // ADDITIVE · both ingredient vocabularies coexist. Dropping {n,pp,u} blanks every page.
  const withIng = all.filter(r => (r.ingredients||[]).length);
  const both = withIng.filter(r => r.ingredients.every(i => i.n !== undefined && i.name !== undefined));
  if (both.length !== withIng.length) bad((withIng.length - both.length) + ' recipes LOST a vocabulary',
    '\n      \x1b[2m{n,pp,u} is what every renderer reads; {qty,unit,name} is the contract shape.' +
    '\n      BOTH coexist on every item — ruled 15 Jul. Dropping .n blanks the ingredient list app-wide.\x1b[0m');
  else ok(both.length + ' recipes carry BOTH {n,pp,u} and {qty,unit,name}', 'additive — nothing was mass-converted');
}

// ══ 13 · THE SAVED STATE ═══════════════ tinzaStore.js · Law 20 · Law 6 ══
head('13 · WHAT SURVIVES CLOSING THE APP?   ⚖️ Law 20 — emptying her WORK is theft');
{
  const SD = path.join(ROOT,'sections');
  const files = fs.readdirSync(SD).filter(f => f.endsWith('.js') && !/\.bak/.test(f));

  // ── 13.1 · ONE DOOR. No direct localStorage outside tinzaStore.js. ⚖️ Law 6 ──
  const strayFiles = {};
  files.forEach(f => {
    if (f === 'tinzaStore.js') return;                 // the door itself is the exception
    const s = fs.readFileSync(path.join(SD,f),'utf8');
    const re = /localStorage\s*\.\s*(getItem|setItem|removeItem)\s*\(/g; let m;
    while ((m = re.exec(s))) (strayFiles[f] = strayFiles[f] || []).push(s.slice(0,m.index).split('\n').length);
  });
  const strayN = Object.values(strayFiles).reduce((a,b) => a + b.length, 0);
  if (strayN) bad(strayN + ' DIRECT localStorage CALL(S) OUTSIDE tinzaStore.js — A SECOND DOOR',
    '\n      ' + Object.entries(strayFiles).map(([f,l]) => f + ':' + l.join(',')).join(' · ') +
    '\n      \x1b[2m⚖️ Law 6 — ONE door. Everything goes through tinzaStore. Ruled 15 Jul.\x1b[0m');
  else ok('No direct localStorage outside tinzaStore.js', 'one door ⚖️ Law 6');

  // ── 13.2–13.4 · THE MIGRATION, PROVEN ON A REAL (FAKE) DISK ──
  // A fresh vm context with a WORKING localStorage, holding a v0 user: tinzaTheme only.
  // tinzaStore.js has no dependencies, so it boots alone.
  function bootStore(seed){
    const mem = Object.assign({}, seed);
    const c = {
      localStorage: {
        getItem: k => (k in mem ? mem[k] : null),
        setItem: (k,v) => { mem[k] = String(v); },
        removeItem: k => { delete mem[k]; }
      },
      console: { log(){}, warn(){}, error(){} }
    };
    c.window = c; vm.createContext(c);
    vm.runInContext(fs.readFileSync(path.join(SD,'tinzaStore.js'),'utf8'), c, { filename:'tinzaStore.js' });
    return { store: c.tinzaStore, disk: mem };
  }

  const v0 = bootStore({ tinzaTheme: 'dark' });          // a real v0 user, mid-migration
  const rootTxt = v0.disk['tinza'];
  let root = null; try { root = JSON.parse(rootTxt); } catch(e){}

  if (root && root.schemaVersion === 1) ok('After load(): root "tinza" exists · schemaVersion === 1');
  else bad('Root "tinza" MISSING or NOT v1 after load()', '\n      \x1b[2mgot: ' + JSON.stringify(rootTxt) + '\x1b[0m');

  if (v0.disk[ 'tinzaTheme' ] === undefined) ok('Legacy `tinzaTheme` key count === 0 after migration', 'v0 is gone');
  else bad('Legacy `tinzaTheme` SURVIVED the migration', '\n      \x1b[2mv0 and v1 now disagree in silence. ⚖️ Law 3.\x1b[0m');

  if (root && root.preferences && root.preferences.theme === 'dark') ok('v0 tinzaTheme folded into preferences.theme', "'dark' carried across — her choice survived ⚖️ Law 20");
  else bad('The v0 theme was LOST in migration', '\n      \x1b[2m⚖️ Law 20 — that is her setting. Migrating must not drop it.\x1b[0m');

  // ── 13.5 · migrate() is PURE + IDEMPOTENT ──
  const M = v0.store.migrate;
  const raw  = { tinza: null, tinzaTheme: 'light' };
  const rawSnapshot = JSON.stringify(raw);
  const m1 = M(raw);
  const m2 = M(m1);                                       // migrate(migrate(x))
  const idem = JSON.stringify(m2.state) === JSON.stringify(m1.state);
  if (idem) ok('migrate(migrate(x)) deep-equals migrate(x)', 'idempotent · second pass migrated=' + m2.migrated);
  else bad('migrate() IS NOT IDEMPOTENT',
    '\n      \x1b[2mmigrate(x)        = ' + JSON.stringify(m1.state) +
    '\n      migrate(migrate(x)) = ' + JSON.stringify(m2.state) + '\x1b[0m');
  if (JSON.stringify(raw) === rawSnapshot) ok('migrate() is PURE', 'it did not mutate its input');
  else bad('migrate() MUTATED ITS INPUT — it is not pure');

  // Corrupt JSON must degrade, never blank, never throw. ⚖️ Law 3.
  try {
    const wreck = bootStore({ tinza: '{ this is not json' });
    const st = wreck.store.load();
    if (st && st.schemaVersion === 1) ok('Corrupt root JSON → fresh default, no throw', 'degrade, never blank ⚖️ Law 3');
    else bad('Corrupt root did not degrade cleanly');
  } catch(e) { bad('CORRUPT ROOT JSON THREW — the app would not boot', '\n      \x1b[2m' + e.message + '\x1b[0m'); }

  // ── 13.6 · FAVOURITES ARE KEYED BY source:section:id — NEVER BY NAME ──
  // 🩸 19 BARE IDS COLLIDE ACROSS ROOMS ("potatosalad" = events AND braai). Every
  // recipe's source is 'db', so source:id collides too. Section is what separates them.
  const st = bootStore({}).store;
  const titles = {}; all.forEach(r => { titles[String(r.name||'').toLowerCase()] = 1; });

  const collides = {};
  all.forEach(r => { (collides[r.id] = collides[r.id] || []).push(r); });
  const pair = Object.values(collides).find(v => v.length > 1);   // a REAL cross-room id clash

  if (!pair) warn('No colliding bare ids left to test with', 'check 13.6 needs one — has the data changed?');
  else {
    const [a, b] = pair;
    st.toggleFavourite(a);
    const favs = st.getFavourites();
    const leaks = favs.filter(k => titles[String(k).toLowerCase()]);
    if (leaks.length) bad(leaks.length + ' FAVOURITE(S) STORED AS A BARE DISH TITLE',
      '\n      ' + leaks.join(' · ') + '\n      \x1b[2m58 name-groups cover 128 records. A title is not an identity. ⚖️ Law 46.\x1b[0m');
    else ok('No favourite is a bare dish title', 'keyed ' + JSON.stringify(favs[0]));

    if (st.isFavourite(a) && !st.isFavourite(b))
      ok('isFavourite() does NOT leak across same-id rooms',
        '"' + a.id + '": ' + a.section + '/' + a.name + ' favourited · ' + b.section + '/' + b.name + ' NOT');
    else bad('FAVOURITING ONE RECIPE LIT UP ANOTHER — the key is not unique',
      '\n      ' + a.section + '/' + a.name + '  vs  ' + b.section + '/' + b.name +
      '\n      \x1b[2mBoth are id "' + a.id + '". The key must be source:section:id. ⚖️ Law 46.\x1b[0m');
  }
  // every key the whole index would produce must be distinct — the real guarantee
  const stamped = {}; all.forEach(r => { stamped[st.favKey(r)] = (stamped[st.favKey(r)]||0)+1; });
  const dupKeys = Object.entries(stamped).filter(([,v]) => v > 1);
  if (dupKeys.length) bad(dupKeys.length + ' favourite keys COLLIDE across the index',
    '\n      ' + dupKeys.slice(0,6).map(([k,v]) => k+' ×'+v).join(' · '));
  else ok(Object.keys(stamped).length + ' favourite keys for ' + all.length + ' recipes', 'source:section:id — every dish its own identity');

  // ── 13.7 · plans is a SECTION-KEYED MAP, and the store knows NO room names ──
  st.setPlan('braai', [{ id:'x' }]);
  const lazy = JSON.stringify(st.getPlan('a-room-invented-just-now')) === '[]';
  if (lazy) ok('getPlan(unknown) → [] · buckets are lazy', 'a new room needs zero change here');
  else bad('getPlan() on an unused section did not return []');
  const storeSrc = fs.readFileSync(path.join(SD,'tinzaStore.js'),'utf8');
  const ROOMS = ['braai','buffet','spice','worldkitchen','kiddies','furry','bakes','meals','health','events','beverages'];
  const named = ROOMS.filter(r => new RegExp("['\"]" + r + "['\"]").test(storeSrc));
  if (named.length) bad('tinzaStore.js NAMES ' + named.length + ' ROOM(S): ' + named.join(' · '),
    '\n      \x1b[2mThe store must be SECTION-AGNOSTIC — it holds only what a section hands it.' +
    '\n      No section enum. Ruled 15 Jul.\x1b[0m');
  else ok('tinzaStore.js contains NO room name', 'section-agnostic — plans is a lazy map ⚖️ ruled 15 Jul');

  // ── 13.8 · TIER-BLIND. The gate lives in core.js, never in the store. ──
  if (/\b(tier|isPro|pro\b|deluxe|free)\b/i.test(storeSrc.replace(/\/\/[^\n]*/g,'')))
    bad('tinzaStore.js MENTIONS A TIER — the gate has leaked into the store',
      '\n      \x1b[2mThe store persists for EVERYONE. "Favourites = Pro" is a core.js gate. Ruled 15 Jul.\x1b[0m');
  else ok('tinzaStore.js is TIER-BLIND', 'it persists for everyone; the gate lives in core.js');
}

// ══ 14 · THE FAVOURITE HEART ═══════════════ ruled 15 Jul · Law 42 · Law 2 ══
head('14 · DOES THE HEART TELL THE TRUTH?   ⚖️ the rendered state IS the promise');
{
  const HEART = ctx.favouriteHeart, STORE = ctx.tinzaStore, FAVREC = ctx.recipeFavRecord;
  if (typeof HEART !== 'function' || !STORE || typeof FAVREC !== 'function') {
    bad('favouriteHeart() / recipeFavRecord() / tinzaStore not reachable — the heart is not wired');
  } else {
    // A heart is a PROMISE about saved state. If the fill and isFavourite() ever
    // disagree, she taps and nothing appears to happen — or worse, it lies. ⚖️ Law 3.
    const solid = h => /fill="var\(--accent\)"/.test(h);
    const outline = h => /fill="none"/.test(h);

    const r = all.find(x => x.section === 'world') || all[0];
    const vr = { type: r.section, id: r.id };

    const before = HEART(vr);
    const wasFav = STORE.isFavourite(FAVREC(vr));
    if (!wasFav && outline(before) && !solid(before)) ok('Unsaved recipe → OUTLINE heart', 'fill="none"');
    else bad('An UNSAVED recipe did not render an outline heart', '\n      \x1b[2m' + before.slice(0,120) + '\x1b[0m');

    STORE.toggleFavourite(FAVREC(vr));
    const after = HEART(vr);
    if (STORE.isFavourite(FAVREC(vr)) && solid(after)) ok('Saved recipe → SOLID var(--accent) heart', 'the fill matches isFavourite()');
    else bad('A SAVED recipe did not render a solid heart — THE HEART LIES',
      '\n      \x1b[2misFavourite()=' + STORE.isFavourite(FAVREC(vr)) + ' but fill is not var(--accent). ⚖️ Law 3.\x1b[0m');

    STORE.toggleFavourite(FAVREC(vr));                       // untoggle — leave no state behind
    if (outline(HEART(vr))) ok('Un-toggling returns the heart to OUTLINE', 'the control is honest both ways');
    else bad('Un-toggling did NOT clear the heart');

    // 🩸 THE REAL TEST — the 19 cross-room id collisions. Favouriting the events
    // Potato Salad must NOT light the braai one. This is why the key is source:section:id.
    const clash = {};
    all.forEach(x => { (clash[x.id] = clash[x.id] || []).push(x); });
    const pair = Object.values(clash).find(v => v.length > 1);
    if (!pair) warn('No colliding bare ids to test the heart against');
    else {
      const [a, b] = pair;
      STORE.toggleFavourite(FAVREC({ type:a.section, id:a.id }));
      const ha = HEART({ type:a.section, id:a.id });
      const hb = HEART({ type:b.section, id:b.id });
      if (solid(ha) && outline(hb))
        ok('The heart does NOT leak across same-id rooms',
           '"' + a.id + '": ' + a.section + ' SOLID · ' + b.section + ' OUTLINE');
      else bad('FAVOURITING ONE ROOM LIT UP ANOTHER ROOM\'S HEART',
        '\n      ' + a.section + '/' + a.name + '  vs  ' + b.section + '/' + b.name +
        '\n      \x1b[2mBoth are id "' + a.id + '". ⚖️ Law 46 — the key must be source:section:id.\x1b[0m');
      STORE.toggleFavourite(FAVREC({ type:a.section, id:a.id }));
    }

    // The opener's namespace is NOT the index's section. If this map goes stale, a
    // heart tapped today is a heart that never lights again once the shelf ships.
    const VRS = ctx.VR_TYPE_SECTION || {};
    const sections = {}; all.forEach(x => sections[x.section] = 1);
    const badMap = Object.entries(VRS).filter(([, sec]) => !sections[sec]);
    if (badMap.length) bad('VR_TYPE_SECTION maps to a section THE INDEX DOES NOT HAVE: ' + badMap.map(x=>x.join('→')).join(' · '),
      '\n      \x1b[2mThe favourite key would never match a record. ⚖️ Law 46.\x1b[0m');
    else ok('VR_TYPE_SECTION resolves to real index sections', Object.entries(VRS).map(x=>x.join('→')).join(' · '));

    // A room the index does not carry (kiddies) must still render a heart, not crash.
    let orphan = '(none)';
    try { orphan = HEART({ type:'kiddies', id:'made-up-id' }) ? 'renders' : 'EMPTY'; } catch(e){ orphan = 'THREW: ' + e.message; }
    if (orphan === 'renders') ok('An un-indexed room still renders a heart', 'stamped synthetic — no crash ⚖️ Law 45');
    else bad('An un-indexed room broke the heart', '\n      \x1b[2m' + orphan + '\x1b[0m');

    // ⚖️ TIER-BLIND — ruled 15 Jul. The Pro gate is a LATER, separate step (Law 5).
    const coreSrc = fs.readFileSync(path.join(ROOT,'sections/core.js'),'utf8');
    const heartFn = (coreSrc.match(/function favouriteHeart[\s\S]*?\n\}/) || [''])[0];
    if (/tierAllows|isPro|USER_TIER/.test(heartFn))
      bad('THE HEART HAS A TIER GATE IN IT', '\n      \x1b[2mWire it TIER-BLIND. "Favourites = Pro" (13 Jul) is its own commit. ⚖️ Law 5.\x1b[0m');
    else ok('The heart is TIER-BLIND', 'the Pro gate is a separate, later step ⚖️ Law 5');

    // Rule Zero — no hardcoded hex in the heart; tokens only.
    if (/#[0-9a-fA-F]{3,6}/.test(heartFn)) bad('THE HEART CONTAINS A HARDCODED HEX', '\n      \x1b[2mvar(--token) only — it must follow light/dark/night. Rule Zero.\x1b[0m');
    else ok('The heart uses var(--token) only', 'no hardcoded hex — it follows every theme');

    // ⚖️ LAW 6 · THE HEART IS THE ONLY SAVE — consolidated 15 Jul. Three saves used to
    // compete: 💾 My Kitchen (an alert stub in 6 places), 🔖 Save to My Recipes (meals,
    // Pro-gated, S.savedRecipes — in memory, BARE-ID keyed, gone on close), and the heart.
    // If any of them comes back, she has two saves that disagree about what she saved.
    const SD3 = path.join(ROOT,'sections');
    const ghosts = {};
    fs.readdirSync(SD3).filter(f => f.endsWith('.js') && !/\.bak/.test(f)).forEach(f => {
      const s = fs.readFileSync(path.join(SD3,f),'utf8');
      s.split('\n').forEach((ln, i) => {
        if (/^\s*\/\//.test(ln)) return;                       // a comment about the deletion is fine
        if (/savedRecipes|toggleSavedRecipe|My Kitchen|Save to My Recipes|saveJs/.test(ln))
          (ghosts[f] = ghosts[f] || []).push(i + 1);
      });
    });
    const gn = Object.values(ghosts).reduce((a,b) => a + b.length, 0);
    if (gn) bad(gn + ' LEGACY SAVE SITE(S) ARE BACK: ' + Object.entries(ghosts).map(([f,l]) => f+':'+l.join(',')).join(' · '),
      '\n      \x1b[2mThe heart is the only save (ruled 15 Jul). A second save is a second truth.' +
      '\n      💾 My Kitchen never saved anything; 🔖 My Recipes saved to memory by BARE ID. ⚖️ Law 3 · Law 6.\x1b[0m');
    else ok('No legacy save survives', '💾 My Kitchen · 🔖 My Recipes · S.savedRecipes — all gone ⚖️ Law 6');

    // ⚖️ RULE ZERO · EVERY recipe view carries the heart. There are TWO whole-page recipe
    // renderers — recipePage() (core.js) and recipeDetailFromResult() (meals.js, reached by
    // FMF · budget · search · 4-Ingredients · Anchor). FMF had NO save for exactly this
    // reason: it never went through recipePage. Both must CALL favouriteHeart(), never
    // rebuild it. ⚖️ Law 6 — one heart, or the rooms drift apart again.
    const mealsSrc = fs.readFileSync(path.join(SD3,'meals.js'),'utf8');
    const rdfr = (mealsSrc.match(/function recipeDetailFromResult[\s\S]*?\n\}/) || [''])[0];
    const rp   = (coreSrc.match(/function recipePage[\s\S]*?\n\}/) || [''])[0];
    const views = [['recipePage (core.js)', rp], ['recipeDetailFromResult (meals.js)', rdfr]];
    const heartless = views.filter(([, src]) => !/favouriteHeart\s*\(/.test(src));
    if (heartless.length) bad(heartless.length + ' RECIPE VIEW(S) RENDER NO HEART: ' + heartless.map(v=>v[0]).join(' · '),
      '\n      \x1b[2mA room whose view skips the shared heart has NO save at all. That is the FMF' +
      '\n      gap all over again. Rule Zero — sameness is the bug list, not a style choice.\x1b[0m');
    else ok('Both whole-page recipe views call favouriteHeart()', 'recipePage + recipeDetailFromResult — one heart ⚖️ Law 6');
    // and neither may hand-roll its own — the glyph lives in ONE function
    const rebuilt = views.filter(([, src]) => /<svg[^>]*viewBox="0 0 24 24"/.test(src));
    if (rebuilt.length) bad(rebuilt.length + ' view(s) HAND-ROLL a heart SVG instead of calling favouriteHeart()',
      '\n      \x1b[2m⚖️ Law 6 — build the ONE thing they call. Two hearts drift.\x1b[0m');
    else ok('No view hand-rolls a heart', 'the glyph has exactly one definition');
  }
}

// ══ 15 · THE DEV INSTRUMENT ═══════════════════ Law 19 · Law 6 · MF44 ══
head('15 · CAN WE SEE THE REAL ERROR — AND DOES SHE NOT?   ⚖️ Law 19');
{
  const coreS = fs.readFileSync(path.join(ROOT,'sections/core.js'),'utf8');
  const idxS  = fs.readFileSync(path.join(ROOT,'sections/index.js'),'utf8');

  // ONE dev flag. It used to be a local `var _tinzaDev` inside index.js's IIFE — invisible
  // to core.js, so the render boundary could not gate on it. ⚖️ Law 6.
  if (typeof ctx.tinzaIsDev === 'function') ok('tinzaIsDev() is ONE shared function', 'reachable from every file');
  else bad('tinzaIsDev() is not a global — the dev flag is trapped in one file again');

  const inlineFlags = [];
  ['core.js','index.js'].forEach(f => {
    const s = fs.readFileSync(path.join(ROOT,'sections',f),'utf8');
    s.split('\n').forEach((ln, i) => {
      if (/^\s*\/\//.test(ln)) return;
      if (/localhost\|127\\\.0\\\.1/.test(ln) && !/function tinzaIsDev/.test(ln)) inlineFlags.push(f + ':' + (i+1));
    });
  });
  if (inlineFlags.length > 1) bad(inlineFlags.length + ' COPIES of the dev-mode regex: ' + inlineFlags.join(' · '),
    '\n      \x1b[2m⚖️ Law 6 — two flags drift. Call tinzaIsDev().\x1b[0m');
  else ok('The dev-mode test has exactly one definition', 'no copy to drift ⚖️ Law 6');

  // ⚖️ LAW 19 — the instrument must NOT ship to a live user's screen.
  const boundary = (coreS.match(/\}catch\(_err\)\{[\s\S]*?\n  \}/) || [''])[0];
  if (!boundary) warn('Could not read the render boundary — its shape changed. UPDATE THIS CHECK.');
  else {
    if (/_err\s*&&\s*_err\.message|_err\.message/.test(boundary)) ok('The boundary surfaces the real error message', 'a tablet has no console to read');
    else bad('The boundary still hides the real error', '\n      \x1b[2mIt console.error\'s a cause nobody on a tablet can see.\x1b[0m');

    if (/tinzaIsDev\s*\(\s*\)/.test(boundary)) ok('The error text is DEV-GATED', 'she sees the friendly screen; we see the cause ⚖️ Law 19');
    else bad('THE RAW ERROR SHIPS TO EVERY USER', '\n      \x1b[2m⚖️ Law 19 — the instrument stays, but it does not ship. Gate it on tinzaIsDev().\x1b[0m');

    if (/_esc|replace\(\/&\/g/.test(boundary)) ok('The error text is HTML-escaped', 'a "<" in a message cannot break the snag screen');
    else bad('The error text is injected RAW into HTML', '\n      \x1b[2mThe screen that reports the crash must not become the next crash.\x1b[0m');

    if (/catch\(_e2\)/.test(boundary)) ok('The boundary cannot throw from inside itself', 'the last line of defence holds');
    else warn('The dev block is not itself wrapped', 'if it throws, the snag screen dies too');
  }
}

// ══ 16 · THE ROOM WORD ═══════════════════════ ruled 15 Jul §14 · Law 45 ══
head('16 · CAN SHE TELL TWO DISHES WITH THE SAME NAME APART?   ⚖️ §14');
{
  const LBL = ctx.tinzaRoomLabel, MAP = ctx.TINZA_ROOM_LABEL || {}, LL = ctx.tinzaListLabel, DN = ctx.tinzaDisplayName;
  if (typeof LBL !== 'function' || typeof LL !== 'function') {
    bad('tinzaRoomLabel() / tinzaListLabel() not reachable');
  } else {
    // 🩸 EVERY section a record can CARRY must have a room word. A blank returns the
    // plain name — so an unlabelled dish sits next to a labelled one and reads as the
    // default. That is worse than no feature. ⚖️ Law 45 — a blank is a silent miss.
    const secs = {}; all.forEach(r => secs[r.section] = (secs[r.section]||0)+1);
    const unmapped = Object.keys(secs).filter(s => !LBL(s)).sort((a,b) => secs[b]-secs[a]);
    if (unmapped.length) bad(unmapped.length + ' SECTION(S) HAVE NO ROOM WORD: ' + unmapped.map(s=>s+' ('+secs[s]+')').join(' · '),
      '\n      \x1b[2mtinzaRoomLabel() returns "" → tinzaListLabel() renders a PLAIN name beside a' +
      '\n      labelled one. bakes + sides were missing from the §14 draft — 4 real collisions' +
      '\n      rode on them. ⚖️ Law 45 — unknown is not no.\x1b[0m');
    else ok('Every one of the ' + Object.keys(secs).length + ' sections has a room word',
            [...new Set(Object.values(MAP))].join(' · '));

    // The promise: two same-named dishes from DIFFERENT rooms must read differently.
    const g = {}; all.forEach(r => { const k = ctx.tinzaNormalize(DN(r)); (g[k]=g[k]||[]).push(r); });
    const dup = Object.entries(g).filter(([,v]) => v.length > 1);
    let broken = [], kept = 0, sameRoom = 0;
    dup.forEach(([, v]) => {
      const rooms = v.map(r => LBL(r.section));
      const labels = v.map(r => LL(r, v));
      if (new Set(rooms).size === v.length) {                 // all different rooms → must all differ
        if (new Set(labels).size === v.length) kept++;
        else broken.push(DN(v[0]) + ' → ' + labels.join(' | '));
      } else sameRoom++;                                      // the ruled known limit
    });
    p('     ' + num(dup.length) + '  same-display-name groups · ' + num(kept) + ' fully disambiguated · ' + num(sameRoom) + ' share a room word (ruled limit)');
    if (broken.length) bad(broken.length + ' CROSS-ROOM COLLISION(S) STILL READ THE SAME',
      '\n      ' + broken.slice(0,6).join('\n      ') +
      '\n      \x1b[2m§14 promises CROSS-room disambiguation. This is the promise breaking.\x1b[0m');
    else ok('Every cross-room same-name pair reads differently', 'the §14 promise holds');

    // A lone dish must NEVER be glossed — the label is for collisions only.
    const lone = all.find(r => g[ctx.tinzaNormalize(DN(r))].length === 1);
    if (LL(lone, [lone]) === DN(lone) && LL(lone, all.filter(x => x !== lone).slice(0,50).concat([lone])) === DN(lone))
      ok('A lone dish reads PLAIN', '"' + DN(lone) + '" — no room word when nothing collides');
    else bad('A NON-COLLIDING DISH IS BEING GLOSSED', '\n      \x1b[2m"' + LL(lone,[lone]) + '" — the label is for collisions ONLY.\x1b[0m');

    // Never "()" — a blank room word must degrade to the plain name.
    // Tested on the COLLISION GROUPS only: they are the sole path that appends a room
    // word at all, and tinzaListLabel is O(list) per row — feeding it the whole 2,083
    // index would be 4.3M normalisations and hang the census. (The app never does that:
    // §14 calls it on Favourites / Just Feed Me shelves, which are small. ⚖️ Law 22 —
    // measure the real shape; do not pre-optimise the function for a list it never sees.)
    let empties = 0;
    dup.forEach(([, v]) => v.forEach(r => { if (/\(\s*\)\s*$/.test(LL(r, v))) empties++; }));
    if (empties) bad(empties + ' row(s) render an EMPTY bracket "()"');
    else ok('No row renders an empty "()"', 'a blank room word degrades to the plain name');

    // A single-room shelf must be untouched — over-calling is meant to be harmless.
    const braaiOnly = all.filter(r => r.section === 'braai');
    const changed = braaiOnly.filter(r => LL(r, braaiOnly) !== DN(r)).length;
    if (changed) warn(changed + ' braai rows change on a single-room shelf', 'expected: only true in-shelf name clashes');
    else ok('A single-room shelf is unchanged by tinzaListLabel()', 'over-calling is harmless, as ruled');
  }
}

// ══ 17 · THE MOOD SHELVES ═══════════════════ MF117 · Law 42 · Law 43 ══
head('17 · DOES "JUST FEED ME" SERVE REAL, OPENABLE RECIPES?   ⚖️ MF117');
{
  const BUILD = ctx.buildMoodPool, Q = ctx.MOOD_QUERY, EATS = ctx.MOOD_EAT_SLOTS;
  if (typeof BUILD !== 'function' || !Q) {
    bad('buildMoodPool() / MOOD_QUERY not reachable — the mood shelves are still hand-typed');
  } else {
    const NOT_FOOD = ['CONDIMENT','DRINK','PETFOOD','BABYFOOD'];
    const TIMED = ['quick','exhausted','lazy'];
    const moods = Object.keys(Q);
    const rows = [], thin = [], noId = [], notFood = [], nullTime = [];

    moods.forEach(m => {
      const pool = BUILD(m) || [];
      rows.push([m, pool.length]);
      // ① every mood must clear 10 — below that the paid AI fires on page one. ⚖️ Law 43.
      if (pool.length < 10) thin.push(m + ' (' + pool.length + ')');
      // ② no dead-end cards — the whole point of MF117 is that a tap goes somewhere.
      pool.forEach(r => { if (!r.id) noId.push(m + ':' + (r.name||'?')); });
      // ③ nobody moods their way to a chutney or dog food.
      pool.forEach(r => { if (NOT_FOOD.indexOf(r.slot) >= 0) notFood.push(m + ':' + r.slot + ':' + r.name); });
      // ④ a null-time recipe under "need it fast" is a LIE. ⚖️ Law 45.
      if (TIMED.indexOf(m) >= 0) pool.forEach(r => { if (r.time == null) nullTime.push(m + ':' + r.name); });
    });

    rows.sort((a,b) => b[1]-a[1]).forEach(([m,n]) =>
      p('     ' + num(n) + '  ' + m + (n < 10 ? '   \x1b[31m← UNDER 10\x1b[0m' : '')));

    if (thin.length) bad(thin.length + ' MOOD(S) YIELD FEWER THAN 10: ' + thin.join(' · '),
      '\n      \x1b[2m⚖️ Law 43 — under 10 the paid AI fires on page one. The library must carry the shelf.\x1b[0m');
    else ok('All ' + moods.length + ' moods clear 10 from the live library', 'the AI is a genuine fallback, not the default');

    if (noId.length) bad(noId.length + ' MOOD CARD(S) HAVE NO id — DEAD-END CARDS ARE BACK',
      '\n      ' + noId.slice(0,5).join(' · ') +
      '\n      \x1b[2mThe 36 hand-typed MOOD_DB cards had no id, so a tap went nowhere. That is what MF117 killed.\x1b[0m');
    else ok('Every mood card carries a real id', 'every card is a live recipe, not a stub');

    if (notFood.length) bad(notFood.length + ' NON-FOOD RECORD(S) LEAKED INTO A MOOD SHELF',
      '\n      ' + notFood.slice(0,5).join(' · ') +
      '\n      \x1b[2mCONDIMENT · DRINK · PETFOOD · BABYFOOD are not a meal. MOOD_EAT_SLOTS is the gate.\x1b[0m');
    else ok('No chutney, drink, pet food or baby food on a mood shelf', EATS.join(' · '));

    if (nullTime.length) bad(nullTime.length + ' NULL-TIME RECIPE(S) IN A TIME-GATED MOOD',
      '\n      ' + nullTime.slice(0,5).join(' · ') +
      '\n      \x1b[2m⚖️ Law 45 — unknown is not "fast". A recipe with no time shown under "quick" is a lie.\x1b[0m');
    else ok('quick · exhausted · lazy contain NO null-time recipe', 'unknown never masquerades as fast ⚖️ Law 45');

    // ⑤ THE TAP. Mood cards render through recipeDetailFromResult (core.js — the same
    // renderer the budget finder and search already use with allRecipes() records), so a
    // card only truly opens if it carries what that renderer needs.
    const sample = BUILD('cold').slice(0, 40);
    const blank = sample.filter(r => !(r.ingredients||[]).length || !(r.method||[]).length);
    if (blank.length) warn(blank.length + ' of 40 sampled cards have no ingredients or no method',
      '\n      ' + blank.slice(0,4).map(r=>r.section+':'+r.id).join(' · ') +
      '\n      \x1b[2mThe tap opens a real page but it would render half-empty.\x1b[0m');
    else ok('40 sampled cards all carry ingredients + method', 'the tap opens a full page');

    // 💰 THE PAID CHEF MUST NOT FIRE WHEN THE LIBRARY CAN CARRY THE SHELF.
    // callMoodChef() used to prefetch a Sonnet call on EVERY mood tap — right when a mood
    // was 6 cards deep, pure waste now the pool is 53–261 pages deep. ⚖️ Law 20 · MF78.
    const coreSrc4 = fs.readFileSync(path.join(ROOT,'sections/core.js'),'utf8');
    const chef = (coreSrc4.match(/async function callMoodChef[\s\S]*?\n\}/) || [''])[0];
    const eager = /^\s*startMoodAIFetch\(mood\);/m.test(chef);
    if (eager) bad('callMoodChef() PREFETCHES THE PAID CHEF ON EVERY MOOD TAP',
      '\n      \x1b[2m12 moods = 12 paid Sonnet calls for pages the 160–784-deep library means' +
      '\n      she will never reach. Gate it on the pool being thin. ⚖️ Law 20 · MF78.\x1b[0m');
    else if (/moodPool[\s\S]*?length\s*<\s*10[\s\S]{0,60}startMoodAIFetch/.test(chef))
      ok('The paid chef fires ONLY when the library is thin', 'the shelf is free; the AI is the <10 fallback ⚖️ Law 20');
    else warn('Could not read callMoodChef\'s AI gate — its shape changed. UPDATE THIS CHECK.');

    // ⑥ VARIETY — balancedOrder must spread the sections, or a mood is 10 WK dishes.
    // ⑦ THE MOOD-TAG SCOREBOARD ═══════════════════ MF123 · 20 Jul · Law 36 ══
    // The shelves above still run on MOOD_QUERY keyword guesses. The RULING (15 Jul)
    // says a mood is a TAG. This rung counts how far that migration has got: a mood
    // flips from keyword → allRecipes({mood}) once it carries ~15 tags.
    // 🩸 IT NEVER FAILS THE BUILD. It is a BACKLOG NUMBER, not a gate. The tags come
    // from CONTENT (author + cost the dish first), and content takes as long as it takes.
    {
      const TARGET = 15;
      const tagged = all.filter(r => (r.mood || []).length);
      const perMood = {};
      moods.forEach(m => perMood[m] = 0);
      tagged.forEach(r => r.mood.forEach(m => { perMood[m] = (perMood[m] || 0) + 1; }));
      p('\n     \x1b[1mMOOD TAGS\x1b[0m  \x1b[2m' + tagged.length + ' of ' + all.length +
        ' recipes carry a mood[] · a mood flips its shelf at ~' + TARGET + '\x1b[0m');
      // A mood in MOOD_TAGGED (core.js) is LIVE — its shelf already reads the tags.
      // Saying "READY TO FLIP" about a mood that is already flipped is a document
      // that is wrong, and a wrong document is silent. ⚖️ Law 3.
      const FLIPPED = ctx.MOOD_TAGGED || {};
      Object.entries(perMood).sort((a,b) => b[1]-a[1]).forEach(([m,n]) =>
        p('     ' + num(n) + '  ' + m +
          (FLIPPED[m] ? '   \x1b[32m← LIVE · tag-driven\x1b[0m'
           : n >= TARGET ? '   \x1b[33m← READY TO FLIP\x1b[0m' : '')));

      // 🩸 A FLIPPED MOOD WITH NO TAGS IS AN EMPTY SHELF. Adding a name to MOOD_TAGGED
      // before its tags are in does not fail loudly — it just serves nothing, and the
      // paid chef fires on page one. ⚖️ Law 43 · Law 3.
      const starved = Object.keys(FLIPPED).filter(m => (perMood[m] || 0) < 10);
      if (starved.length) bad(starved.length + ' MOOD(S) FLIPPED TO TAGS BUT CARRY FEWER THAN 10: ' + starved.join(' · '),
        '\n      \x1b[2mRemove it from MOOD_TAGGED (core.js) or finish its tag pass. ⚖️ Law 43.\x1b[0m');
      else if (Object.keys(FLIPPED).length) ok(Object.keys(FLIPPED).length + ' mood(s) are tag-driven and carry their shelf',
        Object.keys(FLIPPED).map(m => m + ' (' + (perMood[m]||0) + ')').join(' · '));
      const unknown = Object.keys(perMood).filter(m => moods.indexOf(m) < 0);
      if (unknown.length) bad(unknown.length + ' MOOD_TAGS VALUE(S) MATCH NO MOOD: ' + unknown.join(' · '),
        '\n      \x1b[2mA tag nobody can ask for is a tag that does nothing. Fix sections/moodTags.js.\x1b[0m');

      // 🩸 EVERY MOOD_TAGS KEY MUST RESOLVE TO EXACTLY ONE RECORD.
      // 0 = a DEAD KEY: the dish was renamed, moved room, or never existed — the tag
      // silently does nothing and the scoreboard above over-counts.
      // 2+ = the key shape has REGRESSED to something that collides (19 bare ids collide
      // across 38 records). Either way the tag store is lying. ⚖️ Law 3 · Law 42.
      const TAGS = ctx.MOOD_TAGS || {};
      const keyCount = {};
      all.forEach(r => { const k = ctx.tinzaStore.favKey(r); keyCount[k] = (keyCount[k] || 0) + 1; });
      const dead = Object.keys(TAGS).filter(k => !keyCount[k]);
      const ambiguous = Object.keys(TAGS).filter(k => keyCount[k] > 1);
      if (dead.length) bad(dead.length + ' MOOD_TAGS KEY(S) MATCH NO RECIPE IN THE LIBRARY',
        '\n      ' + dead.slice(0,5).join(' · ') +
        '\n      \x1b[2mA tag on a dish that is not there does nothing, loudly to nobody. The key is' +
        '\n      source:section:id — check the room, not just the id. ⚖️ Law 22.\x1b[0m');
      else if (ambiguous.length) bad(ambiguous.length + ' MOOD_TAGS KEY(S) MATCH MORE THAN ONE RECIPE',
        '\n      ' + ambiguous.slice(0,5).map(k => k + ' ×' + keyCount[k]).join(' · ') +
        '\n      \x1b[2mThe key shape has regressed. tinzaStore.favKey() is the ONE builder. ⚖️ Law 6.\x1b[0m');
      else ok('All ' + Object.keys(TAGS).length + ' MOOD_TAGS key(s) resolve to exactly one recipe',
        'source:section:id · the same key favourites use');
      // the filter must actually work — the exact query the ruling specified
      const probe = moods.find(m => perMood[m] > 0);
      if (probe) {
        const viaFilter = (ctx.allRecipes({mood:probe}) || []).length;
        if (viaFilter !== perMood[probe]) bad('allRecipes({mood:"' + probe + '"}) returns ' + viaFilter +
          ' but ' + perMood[probe] + ' records carry that tag',
          '\n      \x1b[2mThe mood filter (index.js) disagrees with the mood[] field. One of them is lying.\x1b[0m');
        else ok('allRecipes({mood:"' + probe + '"}) returns exactly the ' + viaFilter + ' tagged record(s)',
          'the tag rail works end to end');
      } else warn('No recipe carries a mood tag yet — the filter is untested',
        '\n      \x1b[2mThe rail is built; the content pass fills it. sections/moodTags.js is the one place to tag.\x1b[0m');
    }

    // ⑥ VARIETY (continued)
    const first10 = BUILD('healthy').slice(0,10).map(r => r.section);
    const spread = new Set(first10).size;
    if (spread < 2) bad('The first 10 of `healthy` are all ONE section (' + first10[0] + ')',
      '\n      \x1b[2mbalancedOrder({bucketOf:"section"}) is not spreading the shelf.\x1b[0m');
    else ok('The first 10 of `healthy` span ' + spread + ' sections', [...new Set(first10)].join(' · '));
  }
}

// ══ 18 · THE SLOT ═════════════════════════ MF125 · Law 42 · Law 45 ══
head('18 · DOES A RECIPE GET THE SAME SLOT NO MATTER WHICH ROOM YOU REACH IT FROM?   ⚖️ MF125');
p('  \x1b[2m    Check 17 cannot catch a MISLABEL — it reads the label. A blanket-assigned');
p('       SUPPER looks exactly like an honest one. This rung reads the SHAPE instead.\x1b[0m');
{
  // ① AGREEMENT — one recipe, many doors, one answer.
  // Monkey Gland Sauce resolved CONDIMENT via events and via spice, but SUPPER via
  // braai. Same record, three paths, two answers — and the room won. Bare id is the
  // right key here precisely BECAUSE it collides across sections: those collisions
  // ARE the multi-door recipes. (favKey includes the section, so it cannot see this.)
  const byId = {};
  all.forEach(r => { (byId[r.id] = byId[r.id] || []).push(r); });
  const multi = Object.keys(byId).filter(k => byId[k].length > 1);
  const disagree = multi.filter(k => new Set(byId[k].map(r => r.slot)).size > 1);
  p('     ' + num(multi.length) + '  recipes reachable from more than one section');
  if (disagree.length) bad(disagree.length + ' RECIPE(S) RESOLVE A DIFFERENT SLOT DEPENDING ON THE ROOM',
    '\n      ' + disagree.slice(0,6).map(k =>
      byId[k][0].name + ' → ' + byId[k].map(r => r.section + ':' + r.slot).join(' vs ')).join('\n      ') +
    '\n      \x1b[2mThe record is not the variable — the adapter is. Slot belongs in the DATA. ⚖️ Law 6.\x1b[0m');
  else ok('Every multi-door recipe resolves the same slot on every path', multi.length + ' checked');

  // ② DISTRIBUTION — a real section is never unanimous.
  // The cheap one, and it catches the whole class: a blanket assignment is always
  // visible as a flat distribution, even where no record has a second door.
  // ── THE EXEMPTION LIST ── RULED 20 Jul. THREE SECTIONS. WRITTEN DOWN. ──────────
  // These rooms are defined by the KIND of food, not by where it sits in the day, so
  // they are unanimous by definition and always will be:
  //   beverages  66/66 DRINK   ·   spice  190/190 CONDIMENT   ·   furry  62/62 PETFOOD
  //
  // 🩸 ADDING A FOURTH SECTION HERE IS A RULING, NOT A CODE CHANGE. Ask Tina.
  // Left to grow quietly this list becomes the escape hatch that hides the next blanket
  // assign — a section gets exempted because it is noisy, and the bug it was hiding
  // never surfaces again. That is exactly how braai stayed 92/92 SUPPER. ⚖️ Law 3.
  // The list PRINTS on every run below, so it can never hide.
  // 🩸 THE EXEMPTION IS THE PAIR, NOT THE ROOM. spice is exempt for CONDIMENT — it is NOT
  // exempt for SUPPER. Exempting the room outright would mean a genuine blanket assign
  // inside an exempt room stayed silent forever, which is the escape hatch this list is
  // most at risk of becoming. Pinning the value costs nothing and closes it. (Proved:
  // spice forced to 100% SUPPER flags; spice at 100% CONDIMENT does not.)
  const FLAT_EXEMPT = { beverages: 'DRINK', spice: 'CONDIMENT', furry: 'PETFOOD' };
  const FLAT_MIN = 20;
  const bySec = {};
  all.forEach(r => { (bySec[r.section] = bySec[r.section] || []).push(r); });
  const flat = [];
  Object.keys(bySec).sort().forEach(s => {
    const rs = bySec[s], vals = {};
    rs.forEach(r => vals[r.slot] = (vals[r.slot] || 0) + 1);
    const kinds = Object.keys(vals);
    if (rs.length < FLAT_MIN || kinds.length !== 1) return;
    if (FLAT_EXEMPT[s] === kinds[0]) return;          // unanimous at its RULED value only
    flat.push(s + ' ' + rs.length + '/' + rs.length + ' ' + kinds[0]);
  });
  p('     \x1b[2mexempt (unanimous by definition, ruled 20 Jul — a 4th needs a ruling): ' +
    Object.keys(FLAT_EXEMPT).map(k => k + '=' + FLAT_EXEMPT[k]).join(' · ') + '\x1b[0m');
  if (flat.length) bad(flat.length + ' SECTION(S) ASSIGN ONE SLOT TO EVERY RECORD: ' + flat.join(' · '),
    '\n      \x1b[2mA room where every dish is the same course is a room that never looked.' +
    '\n      braai was 92/92 SUPPER and bakes 101/101 TREAT — sauces served as mains. ⚖️ MF125.\x1b[0m');
  else ok('No section assigns a single slot to every record', 'checked sections of ' + FLAT_MIN + '+ records');

  // ③ UNRESOLVED — the honest count of slotting work left. ⚖️ §4a, ruled 20 Jul.
  // NOT a failure of the fix: it is the second number the fix separates out. It must
  // ratchet to zero, and it must never be papered over with a section default.
  const unres = all.filter(r => r.slotSource === 'unresolved');
  const leaked = unres.filter(r => (ctx.MOOD_EAT_SLOTS || []).indexOf(r.slot) >= 0);
  if (unres.length) warn(unres.length + ' record(s) have NO slot — slotSource:"unresolved"',
    '\n      ' + unres.slice(0,8).map(r => r.section + ':' + r.id + '  ' + r.name).join('\n      ') +
    '\n      \x1b[2mA data gap, not corruption. Renders normally in its own room, off every mood' +
    '\n      shelf until slotted. Ratchet it to zero — see reference/MOOD_RECIPE_STAGING.md.\x1b[0m');
  else ok('Every record resolves a slot', 'nothing is waiting to be slotted');
  if (leaked.length) bad(leaked.length + ' UNRESOLVED RECORD(S) REACHED A MOOD SHELF ANYWAY',
    '\n      ' + leaked.slice(0,5).map(r => r.section + ':' + r.id).join(' · ') +
    '\n      \x1b[2mUnslotted must mean off-shelf. ⚖️ §4a.\x1b[0m');
  else ok('No unresolved record can reach a mood shelf', 'the exclusion is structural, not a flag');

  // ④ where every slot came from — the scoreboard for the whole job
  const src = {};
  all.forEach(r => src[r.slotSource || '(none)'] = (src[r.slotSource || '(none)'] || 0) + 1);
  p('     \x1b[2mslot source:  ' + Object.entries(src).sort((a,b)=>b[1]-a[1])
    .map(([k,n]) => k + ' ' + n).join('  ·  ') + '\x1b[0m');
}

p('\n\x1b[2m⚖️ Law 2 — none of this is proof. Her fingers on live close a bug. This only tells you where to put them.\x1b[0m\n');
