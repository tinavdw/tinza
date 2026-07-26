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
// 🩸 MF135 JOB 0 · THE INSTRUMENT WAS PART OF THE BUG. This loop used to be
//    `catch(e){}` — the census SWALLOWED ITS OWN LOAD ERRORS, so a section file that
//    threw on load was indistinguishable from one that loaded clean. That is why the
//    RED count never moved through five silent holes in three days, and why the _vHay
//    throw could delete 1021 world records with every instrument on the bench saying
//    fine. A watcher that swallows its own failures cannot watch for silent failure.
// ⛔ The `try` STAYS — the census must still finish and report. COLLECT, then report
//    (rung 26 ③ turns this list RED). Never discard. ⚖️ Law 3 · Rulings §20.
const LOAD_FAILURES = [];
for (const f of loadOrder) {
  try { vm.runInContext(fs.readFileSync(path.join(ROOT,f),'utf8'), ctx, {filename:f}); }
  catch(e){ LOAD_FAILURES.push({ file: f, msg: (e && e.message) ? String(e.message).split('\n')[0].slice(0,120) : String(e) }); }
}
// allRecipes() itself can throw (an adapter blowing up inside its own forEach is exactly
// how MF134 happened). Catching it here without recording it would rebuild the same bug.
let ALL_THREW = null, all = [];
try { all = ctx.allRecipes ? ctx.allRecipes() : []; }
catch(e){ ALL_THREW = (e && e.message) ? String(e.message).split('\n')[0].slice(0,140) : String(e); all = []; }

p('\n\x1b[1m\x1b[36m📊  TINZA CENSUS\x1b[0m  \x1b[2m' + new Date().toISOString().slice(0,16).replace('T',' ') + ' · read-only · writes nothing\x1b[0m');
p('\x1b[2m    ' + all.length + ' recipes in the index\x1b[0m');

// 🩸 MF135 · REPORTED HERE, AT BOOT, AND NOT DOWN IN RUNG 26 — LEARNED THE HARD WAY.
// Collecting the failures was not enough: proof test 4 broke sections/utils.js on load
// and the census DIED AT RUNG 1 with a raw stack trace, long before rung 26 could say
// why. RED went to 0 — not because nothing was wrong, but because the report never
// got to print. A watcher that dies before it speaks is no better than one that
// swallows. The brief's words: the census must still FINISH AND REPORT.
// ⛔ Never move this below a rung. Rung 26 ③ restates it; THIS is the copy that lands.
if (LOAD_FAILURES.length || ALL_THREW) {
  head('0 · DID THE LIBRARY EVEN LOAD?   ⚖️ MF135 job 0 · Rulings §20');
  if (LOAD_FAILURES.length) bad(LOAD_FAILURES.length + ' SECTION FILE(S) THREW ON LOAD',
    '\n      ' + LOAD_FAILURES.map(f => f.file + '\n        ' + f.msg).join('\n      ') +
    '\n      \x1b[2mThe file did not load. Everything it defines is ABSENT from every count below,' +
    '\n      and later rungs may crash on the hole it left. Fix this before reading on.\x1b[0m');
  if (ALL_THREW) bad('allRecipes() THREW — the index could not be built',
    '\n      ' + ALL_THREW +
    '\n      \x1b[2mAn adapter is throwing inside its own forEach — the MF134 shape. Every number' +
    '\n      below was measured against an EMPTY library and means nothing.\x1b[0m');
}

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
  // ── PROVEN — KEYED ON THE STATEMENT, SCOPED BY FILE ── MF130 · RULED 21 Jul ──────
  // 🩸 THIS USED TO BE A LINE NUMBER, AND LINE NUMBERS ROT. On 21 Jul a 5-line edit at
  // spice.js:76 — an unrelated part of the file — moved the proven statement 7982 →
  // 7987. The key stopped matching, the bug fell out of PROVEN into `risk`, and the
  // census RED count went DOWN BY ONE WITH NOTHING FIXED. Under Law 51 (count before,
  // count after) that reads as progress and would have waved the edit through.
  //
  // 🩸 So the real hazard was never one missed bug: THE RATCHET CAN BE WALKED BACKWARDS
  // BY EDITING AN UNRELATED PART OF THE SAME FILE — silently, with nobody acting in bad
  // faith. Any insert above any pinned line reads as progress. ⚖️ Law 42 · Law 3.
  //
  // Ruled preference order was: a stable identifier if one exists; else the statement
  // text with file as scope; line number ONLY as a printed hint, never as the key.
  // A bare `S.screen=` statement carries no identifier, so it is the text. Verified
  // 21 Jul: this text occurs EXACTLY ONCE in braai.js and ONCE in spice.js, so file
  // scope is required and, with it, the key is unique.
  const PROVEN = {                                    // Tina's fingers, 14 Jul
    'braai.js': ["S.screen='search_results';"],
    'spice.js': ["S.screen='search_results';"],
  };
  const guilty = [], clean = [];
  const seen = {};   // file → { statement → 'guilty' | 'clean' }   guilty always wins
  files.forEach(f => {
    const s = fs.readFileSync(path.join(SD,f),'utf8');
    const re = /(set\(\{[^}]*screen\s*:\s*['"][a-zA-Z_]+['"][^}]*\}\)|S\.screen\s*=\s*['"][a-zA-Z_]+['"][^;]*;)/g;
    let m;
    while ((m = re.exec(s))) {
      const stmt = m[0];
      const at = f + ':' + s.slice(0,m.index).split('\n').length;   // a HINT to print, never a key
      const scr = (stmt.match(/screen\s*[:=]\s*['"]([a-zA-Z_]+)['"]/)||[])[1];
      const isClean = /viewingRecipe\s*[:=]\s*(null|false)/.test(stmt);
      if (!seen[f]) seen[f] = {};
      if (!isClean) seen[f][stmt] = 'guilty';
      else if (!seen[f][stmt]) seen[f][stmt] = 'clean';
      (isClean ? clean : guilty).push({at,scr,f,stmt});
    }
  });
  const isProven = g => (PROVEN[g.f]||[]).indexOf(g.stmt) >= 0;
  const proven = guilty.filter(isProven);
  const risk   = guilty.filter(g => !isProven(g));

  // ── THE LOST-KEY ALARM ── the half that matters more than the re-keying ──────────
  // Whatever we key on can still drift. A key that matches NOTHING is an unverifiable
  // claim, not a cleared bug — so it must SCREAM and HOLD RED. A key that matches a
  // statement now classified CLEAN is a genuine fix, and may clear, but must say so
  // out loud rather than simply vanishing from the output. ⚖️ MF130, ruled 21 Jul.
  //
  // ⚠️ BREAKING A KEY HOLDS THE COUNT, IT DOES NOT RAISE IT: the statement leaves
  // `proven` (−1 RED) and the alarm arrives (+1 RED). That is the point — the ratchet
  // CANNOT BE RELEASED by breaking a key. It also means the count alone will not tell
  // you a key broke. Read the LINES. ⚖️ Law 51 is a count; this rung is a claim.
  //
  // 🩸 FOUND BY PROBE, 21 Jul — FIXING THE BUG ALSO TRIPS THE ALARM. The key IS the
  // statement text, and fixing the statement CHANGES that text, so a genuine fix reads
  // as a lost key. That is not a fault in the alarm — it is the alarm refusing to clear
  // a claim it can no longer see. With statement keys a lost key now has exactly TWO
  // causes: someone fixed it, or someone refactored around it. ⛔ A MACHINE MUST NEVER
  // GUESS BETWEEN THEM. So `PROVEN NOW CLEAN` is WITHDRAWN (ruled 21 Jul) — it could
  // not fire in practice, and a message that cannot fire is a lie waiting to be
  // believed. The honest message is "retire it or explain it".
  //
  // ── THE RETIREMENT PATH ── RULED 21 Jul ─────────────────────────────────────────
  // ⛔ A PROVEN KEY IS NEVER DELETED. IT IS RETIRED, BY RULING, IN WRITING.
  // The only exit is a RETIRED entry below, written BY HAND, carrying the original
  // statement verbatim, the commit that fixed it, the date, and one line of why.
  // 🩸 RETIRED IS A GRAVEYARD, NOT A QUEUE — entries are NEVER removed. The ratchet's
  // history stays auditable, and if the same bug is ever reintroduced we can see it
  // has been buried before (and this rung says so, loudly).
  // 🩸 Fixing a proven bug is a TWO-STEP ACT: fix the code, then retire the key. The
  // second step is not admin — it is the record that the fix happened. ⚖️ Law 2.
  const RETIRED = [
    // { f:'spice.js', stmt:"S.screen='search_results';",
    //   fixedIn:'<commit>', date:'<d mon yyyy>', why:'<one line>' },
  ];
  const rKey = {};   // file -> { statement -> entry }   nested: no separator to collide, no NUL
  RETIRED.forEach(e => { (rKey[e.f] = rKey[e.f] || {})[e.stmt] = e; });

  const lost = [], buried = [], reborn = [];
  Object.keys(PROVEN).forEach(f => PROVEN[f].forEach(stmt => {
    const state = (seen[f]||{})[stmt];
    const ret   = (rKey[f]||{})[stmt];
    if (state === 'guilty') { if (ret) reborn.push(ret); return; }   // still live → `proven` prints it
    if (ret) { buried.push(ret); return; }                           // retired by ruling → no RED
    lost.push({f,stmt});                                             // fixed or refactored, unexplained → RED
  }));

  proven.forEach(g => bad('PROVEN ON LIVE  ' + g.at, '→ ' + g.scr + '   (Tina, 14 Jul: it opened Butter Chicken)'));
  reborn.forEach(e => bad('PROVEN BUG REINTRODUCED — ' + e.f + '  ' + JSON.stringify(e.stmt),
    '\n      \x1b[2mThis was buried ' + e.date + ' (' + e.fixedIn + ') and it is BACK. The graveyard' +
    '\n      is why we can see that. Do not re-retire it — it is live again. ⚖️ MF130.\x1b[0m'));
  lost.forEach(k => bad('PROVEN KEY LOST — retire it or explain it   ' + k.f + '  ' + JSON.stringify(k.stmt),
    '\n      \x1b[2mTina proved this on 14 Jul. A key that matches nothing is an UNVERIFIABLE' +
    '\n      CLAIM, not a cleared bug. With statement keys there are exactly TWO causes,' +
    '\n      and a machine must never guess between them:' +
    '\n        1. SOMEONE FIXED IT — the fix rewrites the statement, so the key stops matching.' +
    '\n        2. SOMEONE REFACTORED AROUND IT — the bug may well still be there.' +
    '\n      ⛔ NEVER DELETE THE KEY TO SILENCE THIS. Add a RETIRED entry by hand: the old' +
    '\n      statement verbatim, the commit that fixed it, the date, one line of why.' +
    '\n      Fix the code, THEN retire the key. ⚖️ MF130 · Law 2.\x1b[0m'));
  if (buried.length) p('     \x1b[2mPROVEN RETIRED — ' + buried.length + ':  ' +
    buried.map(e => e.f + ' (' + e.date + ', ' + e.fixedIn + ')').join(' · ') +
    '   \x1b[0m\x1b[2m← a graveyard, never a queue; entries are never removed\x1b[0m');
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
  // ⚠️ NO FIXED-SIZE WINDOW. This was /[\s\S]{0,2400}?/ and a comment added to goBack()
  // pushed the function past the cap, so the matcher stopped reading before the call it
  // was looking for and reported the bug as UNFIXED. ⚖️ Law 19 — an instrument with an
  // arbitrary limit measures the limit, not the code. Match to the closing brace.
  const gb = (core.match(/function goBack\(\)\{[\s\S]*?\n\}/)||[''])[0];
  const utils = fs.readFileSync(path.join(ROOT,'sections/utils.js'),'utf8');
  const exitFn = (core.match(/function tinzaSearchBack[\s\S]{0,900}?\n\}/)||[''])[0];
  const homeIdx = gb.search(/bottomBarGo\('home'\)/);
  const exitIdx = gb.search(/tinzaSearchBack\s*\(/);

  // ① goBack must ASK about search before it falls through to Home. Order is the bug.
  if (exitIdx === -1 || homeIdx === -1 || exitIdx > homeIdx)
    bad('goBack() DUMPS HER ON HOME from a search screen',
      "\n      \x1b[2mcore.js — step (4): if(S.screen!=='home'){ bottomBarGo('home'); }" +
      "\n      S.searchPrevScreen IS SET by braai.js, spice.js and liveSearch() — goBack() must consume it FIRST." +
      '\n      ⚖️ Law 6 — ONE reader in goBack(). Not one fix per room.\x1b[0m');
  else ok('goBack() consumes searchPrevScreen before the Home fallback');

  // ② the exit must exist and must actually read the target it was built to read.
  if (!/=\s*S\.searchPrevScreen/.test(exitFn))
    bad('tinzaSearchBack() does not read S.searchPrevScreen', '\n      \x1b[2mthe target is written by three callers and would be ignored again.\x1b[0m');
  else ok('tinzaSearchBack() reads S.searchPrevScreen');

  // ③ THE RUNG THAT MATTERS — the header Back must not hand-roll its own exit.
  //    Both Backs on this screen drifted apart once already: the header honoured
  //    searchPrevScreen, goBack sent her Home. One screen, two Backs, two answers.
  if (/screen\s*:\s*S\.searchPrevScreen/.test(utils))
    bad('utils.js HAND-ROLLS its own search exit — the two Backs can drift again',
      '\n      \x1b[2mthe header Back must call tinzaSearchBack(), not re-implement it. ⚖️ Law 6.\x1b[0m');
  else if (/onclick="tinzaSearchBack\(\)"/.test(utils))
    ok('both Backs on the search screen call the SAME exit');
  else warn('utils.js search header Back calls neither — check it by hand');

  // ④ ONE definition, app-wide.
  const defs = fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js'))
    .reduce((n,f)=> n + (fs.readFileSync(path.join(ROOT,'sections',f),'utf8').match(/function tinzaSearchBack/g)||[]).length, 0);
  if (defs !== 1) bad(defs + ' definitions of tinzaSearchBack() — there must be exactly ONE  ⚖️ Law 6');
  else ok('tinzaSearchBack() is defined once');
  // ⑤ THE SIGNATURE IS A CONTRACT — every key a ROOM navigates by must appear in it.
  //    draw() pushes a history entry only when navSignature() changes, so a level the
  //    signature cannot see is a level Back cannot walk: goBack() step (3) finds nothing
  //    and step (4) dumps her on Home. WK drilled continent→region→country on THREE keys
  //    the signature had never heard of, while watching two (wkCountry, wkSelectedRegion)
  //    that no room has ever written. Same symptom, five rooms. ⚖️ Law 19 · §12.
  //    NOTE: core.js is EXCLUDED as a writer — it holds the signature itself and the
  //    tier-switcher clear-down, and counting those makes the instrument measure its own
  //    reflection (it did, on 25 Jul, and reported a clean bill).
  {
    const sigFn = (core.match(/function navSignature\(\)\{[\s\S]*?\n\}/)||[''])[0];
    const watched = new Set((sigFn.match(/S\.([A-Za-z_]\w*)/g)||[]).map(x=>x.slice(2)));
    const NAVISH = /(Screen|View|Tab|Cat|Step|Country|Region|Continent|Section|Group|Theme|Culture|Detail|Pet|Mode)$/;
    const EXEMPT = new Set(['searchPrevScreen','cookStep']);   // a memo, and a ruled-open question — not levels
    // core.js HOSTS rooms (Mood, the SA culture view) so it cannot be excluded wholesale —
    // that made the first version of this rung report 9 false deaths. Blind exactly TWO
    // blocks instead: navSignature() itself and the tier-switcher clear-down. COMMENTS ARE
    // STRIPPED FIRST — the prose naming a key dead mentions S.<key> and thereby re-animates
    // it (this rung reported wkCountry alive off my own comment). data.js is not a writer:
    // declaring a key in the initial state is not navigating by it.
    const strip = t => t.replace(/\/\*[\s\S]*?\*\//g,'').split('\n').map(l=>l.replace(/\/\/.*$/,'')).join('\n');
    const writers = {};
    fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js') && f!=='data.js').forEach(f=>{
      let src = strip(fs.readFileSync(path.join(ROOT,'sections',f),'utf8'));
      if(f==='core.js'){
        src = src.replace(/function navSignature\(\)\{[\s\S]*?\n\}/,'')
                 .split('\n').filter(l=>!/USER_TIER\s*=\s*'/.test(l)).join('\n');
      }
      (src.match(/S\.([a-z]\w*)/g)||[]).map(x=>x.slice(2)).forEach(k=>{
        if(NAVISH.test(k) && !EXEMPT.has(k)) (writers[k]=writers[k]||new Set()).add(f);
      });
    });
    const blind = Object.keys(writers).filter(k=>!watched.has(k)).sort();
    if (blind.length) bad(blind.length + ' NAV KEYS THE BACK BUTTON CANNOT SEE',
      '\n      ' + blind.map(k=>'\x1b[31m'+k+'\x1b[0m \x1b[2m← '+[...writers[k]].join(', ')+'\x1b[0m').join('\n      ') +
      '\n      \x1b[2meach one is a level she can walk INTO and cannot walk back OUT of.' +
      '\n      ⚖️ §12 — navSignature() is a CONTRACT. Add the key; do not patch goBack().\x1b[0m');
    else ok('every room-nav key is in navSignature()', Object.keys(writers).length + ' keys, ' + watched.size + ' watched');

    // DEAD KEYS use DIFFERENT, LOOSER evidence than blind spots — deliberately.
    // Blind spots must be strict (S.key only): matching `key:` sweeps in the delta-contract
    // verbs addStep/swapStep and cries wolf. Each side errs the SAFE way — toward "there is
    // a bug" for blind spots, toward "it is alive" for deletions.
    //
    // 🩸 26 Jul · §24.8 · MF149-D — TIGHTENED FROM "is it MENTIONED?" TO "is it ever SET
    //    TRUTHY?". The old test counted `wkSACulture:null` in the tier-switcher clear-down
    //    as evidence the key was alive, so SEVEN keys that no room has ever set to anything
    //    sat in the signature and this rung called them healthy. A key that is only ever
    //    written null is a slot that can never change — a door that is not there.
    // ⛔ AND IT MUST COUNT STRING-NAME WRITES. barplanner.js does chipRow(…,'barMode') and
    //    the helper writes S[key] — there is no `barMode:` and no `S.barMode=` anywhere.
    //    A rung that cannot see that BURIES A LIVE KEY, which is far worse than missing a
    //    dead one: the next session deletes the key and the room stops navigating. This is
    //    part of the ruling (§24.8), not an implementation detail. ⚖️ Law 19 · Law 22.
    const NULLISH = /^(null|false|undefined|''|""|``|0|\{\}|\[\])$/;
    const anyWrite = {}, WHY = {};
    const evid = (k,f,how)=>{ (anyWrite[k]=anyWrite[k]||new Set()).add(f); if(!WHY[k]) WHY[k]=f+' ('+how+')'; };
    fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js') && f!=='data.js').forEach(f=>{
      let src = strip(fs.readFileSync(path.join(ROOT,'sections',f),'utf8'));
      if(f==='core.js') src = src.replace(/function navSignature\(\)\{[\s\S]*?\n\}/,'')
                                 .split('\n').filter(l=>!/USER_TIER\s*=\s*'/.test(l)).join('\n');
      // (a) object-literal writes — set({key:'x'}) / setQuiet({key:2}). null/false do NOT count.
      [...src.matchAll(/\b([a-z]\w*)\s*:\s*([^,;)}\n]+)/g)]
        .forEach(m=>{ if(!NULLISH.test(m[2].trim())) evid(m[1], f, 'key:value'); });
      // (b) direct assignment — S.key = 'x'. Same nullish rule.
      [...src.matchAll(/S\.([a-z]\w*)\s*=\s*([^;,\n]+)/g)]
        .forEach(m=>{ if(!NULLISH.test(m[2].trim())) evid(m[1], f, 'S.key='); });
      // (c) STRING-NAME WRITES — the key travels as a string into a helper that writes S[k].
      //     Deliberately lenient: for a DELETION rung, a false "alive" costs nothing and a
      //     false "dead" costs a room. ⚖️ err toward "it is alive".
      [...src.matchAll(/['"]([a-z]\w*)['"]/g)].forEach(m=> evid(m[1], f, 'string name'));
    });
    const dead = [...watched].filter(k=>NAVISH.test(k) && !anyWrite[k]);
    if (dead.length) bad(dead.length + ' DEAD keys in navSignature(): ' + dead.join(' · '),
      '\n      \x1b[2mwatched but never SET TRUTHY by any room — the signature guarding a door' +
      '\n      that is not there. Not even as a string name. ⚖️ §24.8.\x1b[0m');
    else ok('navSignature() watches no dead keys',
      [...watched].filter(k=>NAVISH.test(k)).length + ' navish keys, each proven SET somewhere');
    // 🩸 PROVE THE STRING-NAME ARM ACTUALLY FIRES. A rung nobody has watched go red is a
    //    claim, not a check. barMode is live ONLY through chipRow(…,'barMode'); if this
    //    line ever stops holding, arm (c) has been broken and live keys are being buried.
    if (watched.has('barMode') && !anyWrite['barMode'])
      bad('the string-name arm of the dead-key rung is BROKEN', '\n      \x1b[2mbarMode is written only as chipRow(…,\'barMode\') and this rung can no longer see it. ⚖️ §24.8.\x1b[0m');
    else if (watched.has('barMode')) ok('the string-name arm fires', 'barMode proven alive via ' + (WHY['barMode']||'?'));

    // ⑩ ⚖️ §24.6 — ONE KEY, ONE CLOSE PATH.
    //    A key in navSignature() is a key whose screen PUSHES a history entry when it
    //    opens. A key in SIMPLE_RECIPE_KEYS is a key goBack() closes with setQuiet — which
    //    pushes ANOTHER entry. A key in BOTH lists therefore pushes on open AND pushes on
    //    close, and the phone's Back walks chips → recipe → chips → recipe and never lets
    //    her out. Tina proved it on live (Sides & Basics → Chips), and Just Feed Me was
    //    the identical unwalked loop. TWO keys were in both lists: mealActiveRecipe and
    //    moodActiveRecipe. Born RED at 2, 26 Jul; GREEN once each got a closer that
    //    CONSUMES its entry (closeMealRecipe / closeMoodRecipe) and goBack called it by name.
    // ⛔ The fix is never "drop it from the signature" — then Back pops past the list to
    //    Home. It is "close it the way it opened". ⚖️ §24.6 · Law 6.
    {
      const simpleBlock = (core.match(/const SIMPLE_RECIPE_KEYS\s*=[\s\S]*?\];/)||[''])[0];
      const simpleKeys  = (simpleBlock.match(/'([^']+)'/g)||[]).map(x=>x.slice(1,-1));
      const both = simpleKeys.filter(k => watched.has(k));
      if (both.length) bad(both.length + ' key(s) in BOTH SIMPLE_RECIPE_KEYS and navSignature(): ' + both.join(' · '),
        '\n      \x1b[2mpush-on-open AND push-on-close — Back bounces straight back INTO the recipe.' +
        '\n      Give it a closer that CONSUMES the entry (see closeMealRecipe) and call that' +
        '\n      from goBack() by name. Do NOT drop it from the signature. ⚖️ §24.6.\x1b[0m');
      else ok('No key is in both SIMPLE_RECIPE_KEYS and navSignature()',
        simpleKeys.length + ' setQuiet-closed keys, none of them pushes on open');
    }

    // ⑪ ⚖️ §24.9 — NO SCREEN HAND-ROLLS A ≥2-KEY BACK-JUMP.
    //    A top Back that clears two or more nav keys is a JUMP, and every hand-rolled jump
    //    in this app has been wrong at least once: "← World Kitchen" cleared the country
    //    but not wkContinent/wkRegion and re-rendered the REGION LIST under the room's
    //    name. Nothing could see that, because the payload and the label were two separate
    //    hand-written strings sitting next to each other. topBack(chain, depth) derives
    //    BOTH from one declared level map, so they cannot disagree.
    //    Born RED at 8, measured 26 Jul: worldkitchen ×2 · events · buffet · braai ·
    //    kiddies ×3. GREEN once every one routed through topBack().
    // 🛡️ TINZA_CHAINS is EXEMPT and the exemption is PRINTED — it is where the declared
    //    jumps LIVE. Blinding it silently would let a hand-rolled jump hide inside it.
    {
      const navKeysDecl = (core.match(/var NAV_KEYS\s*=\s*\[[^\]]*\]/)||[''])[0];
      const NAVSET = new Set([].concat(
        (sigFn.match(/S\.([A-Za-z_]\w*)/g)||[]).map(x=>x.slice(2)),
        (navKeysDecl.match(/'([^']+)'/g)||[]).map(x=>x.slice(1,-1))));
      const EXEMPT_BLOCK = /var TINZA_CHAINS\s*=\s*\{[\s\S]*?\n\};/;
      let rolled = [];
      const clears = js => [...new Set((js.match(/([A-Za-z_]\w*)\s*:/g)||[])
        .map(s=>s.replace(/\s*:$/,'')).filter(k=>NAVSET.has(k)))];
      fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js')).forEach(f=>{
        // COMMENTS STRIPPED — the sectionHeader doc block writes an example backJs, and
        // prose is not a call site. ⚖️ Law 19, learned 25 Jul.
        // ⚠️ \r IS NORMALISED FIRST. On a CRLF checkout every line ends in \r, and \r is a
        //    line terminator — so /\/\/.*$/ never matches and the comment survives. The
        //    rung then reads its own prose as code. Measured 26 Jul in a fresh worktree:
        //    it re-animated wkCountry off the very comment that names it dead.
        let src = fs.readFileSync(path.join(ROOT,'sections',f),'utf8').replace(/\r\n?/g,'\n')
          .replace(/\/\*[\s\S]*?\*\//g,'').split('\n').map(l=>l.replace(/\/\/.*$/,'')).join('\n');
        if(f==='core.js') src = src.replace(EXEMPT_BLOCK,'');
        // (a) every sectionHeader spec pairs backJs with backLabel — read between them.
        // ⚠️ THE WINDOW MUST STOP AT THE SPEC. A bare {0,700} overran the `nav:{backJs,
        //    planJs, homeJs}` block — which has NO backLabel — and kept reading into the
        //    NEXT function's header, reporting a jump that no header ever made. Measured
        //    26 Jul: it invented a 9th hit at events.js:1617 out of two unrelated specs.
        //    So the window ends at whichever comes first, and only backLabel counts:
        //    planJs/homeJs/nav mean this backJs belongs to the BOTTOM nav, not a header.
        [...src.matchAll(/backJs\s*:\s*([\s\S]{0,700}?)(backLabel|planJs|homeJs|nav\s*:)/g)].forEach(m=>{
          if(m[2] !== 'backLabel') return;
          const hit = clears(m[1]);
          if(hit.length>=2) rolled.push(f+':'+src.slice(0,m.index).split('\n').length+'  ['+hit.length+'] '+hit.join(','));
        });
        // (b) kidsHeader(title, sub, BACKJS, backLabel, …) is a sectionHeader in a wrapper.
        //     Scanning only `backJs:` would miss three call sites — it did, on the first
        //     pass of this rung, and a wrapper is exactly where a hand-rolled jump hides.
        [...src.matchAll(/kidsHeader\s*\(([\s\S]{0,600}?)\)\s*\}/g)].forEach(m=>{
          const hit = clears(m[1]);
          if(hit.length>=2) rolled.push(f+':'+src.slice(0,m.index).split('\n').length+'  ['+hit.length+'] '+hit.join(',')+'  \x1b[2m(via kidsHeader)\x1b[0m');
        });
      });
      if (rolled.length) bad(rolled.length + ' hand-rolled ≥2-key back-jump(s) — they must route through topBack()',
        '\n      ' + rolled.join('\n      ') +
        '\n      \x1b[2mtopBack(chain, depth) derives the payload AND the label from ONE declared' +
        '\n      level map, so a jump can never wear a name it does not go to. ⚖️ §24.9.\x1b[0m');
      else ok('No screen hand-rolls a ≥2-key back-jump', 'every multi-key top Back routes through topBack()  \x1b[2m· EXEMPT: TINZA_CHAINS (core.js) — the declared jumps live there\x1b[0m');
    }

    // ⑫ ⚖️ §24.10 — WHERE A SCREEN LANDS. NO PUSH PATH MAY LAND AT A NON-ZERO SCROLL.
    //    🩸 Tina, on live 27 Jul: Events → Finger Foods opened BELOW the banner with the
    //    room's own top Back scrolled off-screen. Cause was `jumpToContent`, an older
    //    feature that deliberately scrolled past the banner to `.content` on ANY
    //    in-section navigation. It was written before the top Back meant anything.
    //    ⛔ A landing that hides the way out is not a landing.
    //    This rung reads the LANDING BLOCK in draw() and checks its four branches and
    //    THEIR ORDER — order is the bug here, exactly as it was in goBack() (rung ①).
    //    A push branch placed after the scrollToRestore fallback would silently restore
    //    the scroll of the screen she just LEFT, because setQuiet() saves it on every call.
    {
      // ⚠️ THE CAPTURE MUST SPAN THE WHOLE if/else-if CHAIN. A plain non-greedy
      //    `[\s\S]*?\n  \}` stops at the FIRST branch's closing brace — which is
      //    `  } else if(…)` — so the rung saw only the openedRecipe branch and cried
      //    wolf on all six probes against code that was correct. Reject a `}` that is
      //    followed by `else`; the chain ends at the one that is not. ⚖️ Law 19 — an
      //    instrument that measures the wrong window measures the window, not the code.
      const landing = (core.match(/if\(openedRecipe\)\{[\s\S]*?\n  \}(?!\s*else)/)||[''])[0];
      const iPush = landing.search(/else if\(_pushMove\)\{/);
      const iLat  = landing.search(/else if\(_lateralMove\)\{/);
      const iRest = landing.search(/scrollTo\(0,\s*scrollToRestore\)/);
      const probes = [
        [!/\bconst jumpToContent\b|\bjumpToContent\s*=/.test(core),
          'the .content-top landing is DELETED, not disabled'],
        [iLat  !== -1, 'a lateral has its own landing branch'],
        [iPush !== -1, 'a push has its own landing branch'],
        [/else if\(_pushMove\)\{[\s\S]{0,600}?window\.scrollTo\(0,\s*0\)/.test(landing),
          'a push lands at scroll 0'],
        [iPush !== -1 && iRest !== -1 && iPush < iRest,
          'the push branch is asked BEFORE the scrollToRestore fallback'],
        [iLat !== -1 && iRest !== -1 && iLat < iRest,
          'the lateral branch is asked BEFORE the scrollToRestore fallback'],
        [/t\s*==\s*null\s*\?\s*0/.test(landing),
          'a lateral with no declared block lands at the TOP, never "stay put"'],
        [/_lateralMove\s*=\s*\(window\._navSigCore/.test(core),
          'push-vs-lateral comes from navSignatureCore — ONE predicate, not a second one'],
        [/function lateralBlockTop/.test(core),
          'lateralBlockTop() exists — the anchor reader'],
      ];
      const failed = probes.filter(p=>!p[0]);
      if (failed.length) bad(failed.length + ' landing-law assertion(s) FAILED in draw()',
        '\n      ' + failed.map(p=>'✗ '+p[1]).join('\n      ') +
        '\n      \x1b[2m⚖️ §24.10 — a push lands at the TOP, a lateral lands ON THE THING YOU' +
        '\n      TAPPED, nothing lands in a random middle.\x1b[0m');
      else {
        // Rooms that DECLARE a lateral block. Not a gate — a lateral with no anchor lands
        // at the top, which is honest. Printed so a room that forgot is VISIBLE.
        let declared = [];
        fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js')).forEach(f=>{
          const src = fs.readFileSync(path.join(ROOT,'sections',f),'utf8');
          [...src.matchAll(/data-lateral-block="([a-zA-Z]\w*):/g)].forEach(m=>{
            if(declared.indexOf(m[1])===-1) declared.push(m[1]);
          });
        });
        ok('No push path lands at a non-zero scroll  ⚖️ §24.10',
          'push → 0 · lateral → its block · quiet toggle → hold' +
          '\n     \x1b[2mblocks declared by: ' + (declared.join(', ')||'NONE — every lateral lands at the top') + '\x1b[0m');
      }
    }

    // ⑬ ⚖️ §24.11 — A BACK SHELL WITHOUT A LABEL ARGUMENT WILL ALWAYS SAY "← Back".
    //    MF149-B named every sectionHeader() caller and Tina STILL found a bare "← Back"
    //    in Family Meals and Mood. Naming callers is not enough if the SHELL has no
    //    parameter to name into: recipeDetailFromResult had none, so all six of its rooms
    //    defaulted. It was missed because it never called sectionHeader() — it hand-rolls
    //    its own page. ⚖️ THE GENERAL LAW: a shell that can only default WILL default.
    //    The `|| '← Back'` fallback may stay as a crash-guard; a live CALLER leaning on
    //    it is the bug. Born RED at 6.
    {
      const SHELLS = [
        // shell name          · file            · the param that carries the label
        ['recipeDetailFromResult', 'sections/meals.js', /function recipeDetailFromResult\([^)]*\btop\b[^)]*\)/],
        ['sectionPlanView',        'sections/meals.js', /function sectionPlanView\([^)]*\bbackLabel\b[^)]*\)/],
        ['sectionHeader',          'sections/core.js',  /function sectionHeader\(o\)/],
      ];
      let noParam = [], leaning = [];
      SHELLS.forEach(([name,file,sig])=>{
        const src = fs.readFileSync(path.join(ROOT,file),'utf8');
        if(!sig.test(src)) noParam.push(name + '  \x1b[2m(' + file + ')\x1b[0m');
      });
      // every LIVE call site of the two positional shells must pass its label.
      [['recipeDetailFromResult',/topBack\s*\(/],['sectionPlanView',/'←|"←|\\u2190/]].forEach(([name,ev])=>{
        fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js')).forEach(f=>{
          const src = fs.readFileSync(path.join(ROOT,'sections',f),'utf8');
          [...src.matchAll(new RegExp(name+'\\(([\\s\\S]{0,400}?)\\);','g'))].forEach(m=>{
            if(/^\s*function/.test(m[0])) return;
            if(!ev.test(m[1])) leaning.push(f+':'+src.slice(0,m.index).split('\n').length+'  '+name);
          });
        });
      });
      if (noParam.length) bad(noParam.length + ' Back-rendering shell(s) take NO label argument',
        '\n      ' + noParam.join('\n      ') +
        '\n      \x1b[2ma shell that can only default WILL default. ⚖️ §24.11.\x1b[0m');
      else if (leaning.length) bad(leaning.length + ' live caller(s) rely on the "← Back" fallback',
        '\n      ' + leaning.join('\n      ') +
        '\n      \x1b[2mthe fallback is a crash-guard, not a destination. Name it from the' +
        '\n      room\'s chain — topBack(chain, depth). ⚖️ §24.11 · §24.9.\x1b[0m');
      else ok('Every Back shell takes a label, and every caller passes one  ⚖️ §24.11',
        SHELLS.length + ' shells · 0 callers on the fallback');
    }
  }

  // ⑥ ⚖️ §24 — A TOP BACK MUST NAME WHERE IT GOES. The BOTTOM (spine) Back is allowed to
  //    be anonymous: it always means "one level", every screen, no exceptions. A HEADER
  //    Back is a jump to a named place, so "← Back" tells her nothing and is free to land
  //    somewhere different depending on how she arrived. Born RED on purpose — this is the
  //    remaining work, measured, not a gate.
  {
    let anon = [];
    fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js')).forEach(f=>{
      const src = fs.readFileSync(path.join(ROOT,'sections',f),'utf8');
      [...src.matchAll(/backLabel\s*:\s*(['"])(?:\\.|(?!\1).)*\1/g)].forEach(m=>{
        if(/[\u2190]|&#8592;|\\u2190/.test(m[0]) && /Back['"]\s*$/.test(m[0]))
          anon.push(f + ' ' + m[0].slice(0,44));
      });
    });
    if (anon.length) bad(anon.length + ' header Backs are labelled just "← Back" — they name NO destination',
      '\n      ' + anon.join('\n      ') +
      '\n      \x1b[2m⚖️ §24 — the bottom Back may be anonymous (it always means one level).' +
      '\n      A header Back is a JUMP, so it must say where: "← Events", "← Braai", "← Home".\x1b[0m');
    else ok('every header Back names its destination  ⚖️ §24');
  }

  // ⑧ ⚖️ §24.3 — ONE SCREEN, ONE TOP BACK. eventsTopNav() hand-rolled a
  //    "← Events / 🏠 Home" PAIR and three screens rendered it ON TOP of a sectionHeader
  //    that already had a Back, on a spine that already had Home — FOUR ways out of one
  //    Kiddies screen, and on kiddies the pair sat ABOVE the photo header. Deleted 25 Jul.
  //    ⛔ The fix is not "remember not to call it". A deleted helper is one npm-less
  //    copy-paste away from coming back, and it came back once already as a second copy
  //    inside buffet. So the WATCHER is mechanical: nothing may define or call a room-nav
  //    pair again — a screen that cannot reach its room gets a sectionHeader backJs.
  {
    const banned = ['eventsTopNav'];
    let hits = [];
    fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js')).forEach(f=>{
      // ⚠️ COMMENTS ARE STRIPPED — Law 19, learned 25 Jul when this instrument
      //    re-animated a dead key off a COMMENT that named it dead. The §24.3 comment
      //    block in events.js says "eventsTopNav()" three times. Prose is not evidence.
      const src = fs.readFileSync(path.join(ROOT,'sections',f),'utf8')
        .replace(/\/\*[\s\S]*?\*\//g,'').split('\n').map(l=>l.replace(/\/\/.*$/,'')).join('\n');
      src.split('\n').forEach((l,i)=>{
        banned.forEach(b=>{ if(new RegExp('\\b'+b+'\\s*\\(').test(l)) hits.push(f+':'+(i+1)+'  '+l.trim().slice(0,70)); });
      });
    });
    if (hits.length) bad(hits.length + ' hand-rolled room-nav pair(s) — eventsTopNav() is DELETED, not deprecated',
      '\n      ' + hits.join('\n      ') +
      '\n      \x1b[2m⚖️ §24.3 · Law 6 — give the sectionHeader the right backJs/backLabel instead.\x1b[0m');
    else ok('No screen hand-rolls its own room-nav pair', 'eventsTopNav() is gone — 0 definitions, 0 call sites');
  }

  // ⑧ ⚖️ §24.4 — THE DOOR IS NOT THE ORIGIN. A dish can sit on more than one shelf
  //    (Bobotie is Cape Malay AND carried on Boerekos). wkRecipeCard passed r.country
  //    into the OPEN call, so tapping it from Boerekos ran wkOpenRecipe('Cape Malay'),
  //    which sets S.wkDataCountry "so Back lands on this country's list" — the door
  //    RE-LABELLED ITSELF BEHIND HER and both Backs honestly returned her somewhere
  //    she had never been. ⛔ meta.origin must stay r.country: the shelf can change,
  //    the dish's origin cannot.
  {
    const src = fs.readFileSync(path.join(ROOT,'sections','worldkitchen.js'),'utf8')
      .replace(/\/\*[\s\S]*?\*\//g,'').split('\n').map(l=>l.replace(/\/\/.*$/,'')).join('\n');
    const probes = [
      [/function wkRecipeCard\(r,\s*shelf\)/,        'wkRecipeCard takes the shelf it is rendered on'],
      [/var _door = shelf \|\| r\.country/,           'the card opens the DOOR, not the origin'],
      [/wkRecipeOpts\(item,\s*S\.wkDataCountry\s*\|\|/,'the recipe page labels Back with the door walked'],
      [/origin:r\.country/,                           'meta.origin is still the dish\'s own country']
    ];
    let miss = probes.filter(p=>!p[0].test(src));
    if(/\.map\(wkRecipeCard\)/.test(src)) miss.push([null,'a BARE .map(wkRecipeCard) — arg 2 would be the INDEX']);
    if (miss.length) bad(miss.length + ' door/origin assertion(s) FAILED in worldkitchen.js',
      '\n      ' + miss.map(m=>'✗ '+m[1]).join('\n      ') +
      '\n      \x1b[2m⚖️ §24.4 — the shelf can change, the dish\'s origin cannot.\x1b[0m');
    else ok('A shared dish keeps its origin and inherits its door', 'Bobotie opened from Boerekos: Back = Boerekos, chip = Cape Malay');
  }

  // ⑨ ⚖️ §24.5 — THE WORLD KITCHEN DRILL IS FIVE KEYS. wkWorldHome() branches on
  //    (wkContinent && wkRegion) → country grid · (wkContinent) → region list · else →
  //    the continent grid. A key left behind is A SCREEN LEFT BEHIND.
  //    🩸 Tina, on live 25 Jul: "I clicked from main home on WK but ended up in Southern
  //    Africa instead of main WK screen." core.js's leave-reset named THREE of the five;
  //    wkContinent/wkRegion survived the exit and WK re-opened inside Boerekos's region.
  //    SAME TWO KEYS as the §24 header bug the same evening — not lying, TWO KEYS SHORT.
  //    ⛔ A LEVEL MOVE IS NOT A RESET: "← continent" nulls wkRegion ALONE and is ignored
  //    here (threshold 3), or this rung would cry wolf on every step-up. ⚖️ Law 22.
  {
    const DRILL = ['wkScreen','wkContinent','wkRegion','wkDataCountry','wkDataRecipe'];
    let short = [], hand = 0;
    fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js')).forEach(f=>{
      const src = fs.readFileSync(path.join(ROOT,'sections',f),'utf8')
        .replace(/\/\*[\s\S]*?\*\//g,'').split('\n').map(l=>l.replace(/\/\/.*$/,'')).join('\n');
      src.split('\n').forEach((l,i)=>{
        if(/WK_DRILL_KEYS|function wkResetDrill/.test(l)) return;   // the door defines the list; it is not a caller
        const hit = DRILL.filter(k=>new RegExp('\\b'+k+'\\s*[:=]\\s*null').test(l));
        if(hit.length < 3) return;                                   // a level move, not a reset
        hand++;
        const miss = DRILL.filter(k=>!hit.includes(k));
        if(miss.length) short.push(f+':'+(i+1)+'  has '+hit.length+'/5 \u2014 MISSING '+miss.join(', '));
      });
    });
    if (short.length) bad(short.length + ' World Kitchen reset(s) are SHORT \u2014 a key left behind is a screen left behind',
      '\n      ' + short.join('\n      ') +
      '\n      \x1b[2m⚖️ §24.5 · Law 6 — call wkResetDrill(); do not hand-null the drill.\x1b[0m');
    else ok('Every World Kitchen reset names all 5 drill keys', 'wkResetDrill() is the one door \u00b7 ' + hand + ' hand-rolled reset(s) remain, none short');
    // \u26A0\uFE0F THE PROBE MUST MATCH THE WHOLE NAME. Written first as /function wkResetDrill/,
    //    it still matched `wkResetDrillX` \u2014 a rung that could not fail. And renaming the
    //    door fails SILENTLY, because every caller is guarded by typeof and falls back.
    const wkSrc = fs.readFileSync(path.join(ROOT,'sections','worldkitchen.js'),'utf8');
    const defs = (wkSrc.match(/function\s+wkResetDrill\s*\(/g)||[]).length;
    if (defs !== 1) bad('wkResetDrill() has ' + defs + ' definition(s), expected exactly 1 \u2014 the one door is gone or doubled');
    else ok('wkResetDrill() exists exactly once', 'the single door \u2696\uFE0F Law 6');
  }

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
  // ── ①'s OWN EXEMPTION LIST ── RULED 21 Jul. ONE PAIR. WRITTEN DOWN. ────────────
  // An AUDIENCE marker is not a meal slot. tiny_tummies answers "who is eating" —
  // BABYFOOD is not a course, so it cannot agree or disagree with SUPPER or SIDE.
  // Braai Sweet Potato is a SIDE and a baby meal at once; that was never a conflict.
  //
  // 🩸 PAIR-PINNED, NOT ROOM-EXEMPT — the same discipline as ② below, for the same
  // reason: tiny is silenced ONLY where it says BABYFOOD. If a tiny record ever
  // resolves SUPPER through one door and SIDE through another, that is a real
  // disagreement and this list must not swallow it.
  // 🩸 A SECOND PAIR HERE IS A RULING, NOT A CODE CHANGE. Ask Tina. This list is the
  // cheapest place in the census to hide a bug, so it PRINTS on every run.
  // ⚠️ tiny is 18 records — BELOW ②'s 20-record floor, so ② does not watch it either.
  //    A blanket assign inside tiny is currently unwatched by both halves. Logged.
  const DOOR_EXEMPT = { tiny: 'BABYFOOD' };
  const isMarker = r => DOOR_EXEMPT[r.section] === r.slot;

  const byId = {};
  all.forEach(r => { (byId[r.id] = byId[r.id] || []).push(r); });
  const multi = Object.keys(byId).filter(k => byId[k].length > 1);
  // Compare only the doors that claim a COURSE. Drop the audience markers first; a
  // recipe left with fewer than 2 course-claiming doors has nothing to disagree with.
  const courseDoors = k => byId[k].filter(r => !isMarker(r));
  const disagree = multi.filter(k => {
    const d = courseDoors(k);
    return d.length > 1 && new Set(d.map(r => r.slot)).size > 1;
  });
  p('     ' + num(multi.length) + '  recipes reachable from more than one section');
  p('     \x1b[2mexempt door (audience marker, not a course — ruled 21 Jul; a 2nd needs a ruling): ' +
    Object.keys(DOOR_EXEMPT).map(k => k + '=' + DOOR_EXEMPT[k]).join(' · ') + '\x1b[0m');
  if (disagree.length) bad(disagree.length + ' RECIPE(S) RESOLVE A DIFFERENT SLOT DEPENDING ON THE ROOM',
    '\n      ' + disagree.slice(0,6).map(k =>
      byId[k][0].name + ' → ' + courseDoors(k).map(r => r.section + ':' + r.slot).join(' vs ')).join('\n      ') +
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

// ══ 19 · REPEATED TEMPLATES ═══════════════ MF126 · Law 42 · Law 27 ══
head('19 · DOES A LIST TEMPLATE CLOSE ITS OWN TAGS?   ⚖️ MF126');
p('  \x1b[2m    A template repeated with .map().join(\'\') builds SIBLINGS. If it leaves a <div>');
p('       open, every repetition nests INSIDE the previous one — the column narrows with');
p('       each item and the text wraps to one word per line. The browser auto-closes at');
p('       the parent, so it never throws and nothing catches it.\x1b[0m');
{
  // The mood shelf shipped this: <div style="flex:1;"> opened and never closed, so every
  // "Show me 3 more ideas" batch nested a level deeper. Unusable after two presses.
  const offenders = [];
  let scanned = 0;
  for (const f of loadOrder) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    // Find `.map( … => \`` then read the template with a BACKTICK-AWARE scanner. A naive
    // /`([\s\S]*?)`/ is worthless here: these templates interpolate ${…} that contain their
    // OWN nested templates, so a lazy match stops at the first inner backtick and a greedy
    // one swallows the rest of the file. Both produce invented counts — and an invented
    // count in a ratchet is worse than no ratchet. Walk it properly. ⚖️ Law 22.
    const starts = [];
    // ⚠️ MUST allow a PARENTHESISED parameter list. The first cut of this check used
    // [^()] here, which silently skipped every `.map((r,i)=> …` — including the exact
    // mood-card template it was written for. It scanned 27 templates, found them all
    // balanced, and printed a green tick over a live bug. Proving a check FAILS before
    // trusting it is the only reason that was caught. ⚖️ Law 42 · Law 3.
    const head = /\.map\(\s*(?:\([^)]{0,120}\)|[A-Za-z_$][\w$]{0,40})\s*=>\s*`/g;
    let h;
    while ((h = head.exec(src)) !== null) starts.push(head.lastIndex - 1);   // index OF the opening backtick
    for (const start of starts) {
      let i = start + 1, depth = 0, end = -1;
      while (i < src.length) {
        const ch = src[i];
        if (ch === '\\') { i += 2; continue; }
        if (depth === 0 && ch === '`') { end = i; break; }
        if (ch === '$' && src[i + 1] === '{') { depth++; i += 2; continue; }
        if (ch === '`' && depth > 0) {            // a nested template inside ${…}
          let j = i + 1;
          while (j < src.length && src[j] !== '`') { if (src[j] === '\\') j++; j++; }
          i = j + 1; continue;
        }
        if (ch === '}' && depth > 0) depth--;
        i++;
      }
      if (end < 0) continue;                       // unterminated — not ours to judge
      const after = src.slice(end + 1, end + 40);
      if (!/^\s*\)\s*\.join\(''\)/.test(after)) continue;   // only .join('') — a REPEATED template
      const m = { index: start, 2: src.slice(start + 1, end) };
      const tpl = m[2].replace(/<!--[\s\S]*?-->/g, '');   // HTML comments are not markup
      const open = (tpl.match(/<div\b/g) || []).length;
      const close = (tpl.match(/<\/div>/g) || []).length;
      scanned++;
      if (open !== close) {
        const line = src.slice(0, m.index).split('\n').length;
        offenders.push(f + ':' + line + '   <div> ' + open + ' vs </div> ' + close +
          '   (' + (open > close ? '+' + (open - close) + ' UNCLOSED — nests' : (close - open) + ' extra close') + ')');
      }
    }
  }
  p('     ' + num(scanned) + '  repeated list templates scanned');
  if (offenders.length) bad(offenders.length + ' REPEATED TEMPLATE(S) DO NOT CLOSE THEIR OWN <div>s',
    '\n      ' + offenders.slice(0, 8).join('\n      ') +
    (offenders.length > 8 ? '\n      \x1b[2m… and ' + (offenders.length - 8) + ' more\x1b[0m' : '') +
    '\n      \x1b[2m+N UNCLOSED is the one that nests. Each repetition sits inside the last.\x1b[0m');
  else ok('Every repeated list template closes its own tags', scanned + ' templates balanced');
}

// ══ 20 · SHELF ORDER ══════════════════════ MF127 · Law 42 · Law 36 ══
head('20 · DOES A SHELF SURFACE ITS SPREAD, OR STACK THE MAINS FIRST?   ⚖️ MF127');
p('  \x1b[2m    celebrating was 84 SUPPER / 36 SIDE and its FIRST side sat at position 61 —');
p('       twenty presses of "3 more ideas". Everything rendered; nothing was reachable.\x1b[0m');
{
  const BUILD = ctx.buildMoodPool, Q = ctx.MOOD_QUERY;
  if (typeof BUILD !== 'function' || !Q) warn('buildMoodPool() not reachable — cannot check shelf order');
  else {
    // A slot holding SHARE of the pool earns a card roughly every 1/SHARE positions.
    // Allow it two full turns of slack before calling it stacked: first appearance must
    // land by ceil(2 / share). SIDE at 28% must show by ~position 7; it shows at 2.
    // Only slots with a real share are judged — a 1-of-127 STARTER is the rare-slot
    // problem, logged and deliberately NOT fixed (a floor is a hardcoded ratio in a hat).
    const MIN_SHARE = 0.10;
    const late = [];
    Object.keys(Q).forEach(m => {
      const pool = BUILD(m) || [];
      if (!pool.length) return;
      const count = {};
      pool.forEach(r => count[r.slot] = (count[r.slot] || 0) + 1);
      Object.keys(count).forEach(sl => {
        const share = count[sl] / pool.length;
        if (share < MIN_SHARE) return;
        let first = -1;
        for (let i = 0; i < pool.length; i++) if (pool[i].slot === sl) { first = i + 1; break; }
        const budget = Math.ceil(2 / share);
        if (first > budget) late.push(m + ':' + sl + ' ' + Math.round(share * 100) + '% of pool, first at ' +
          first + ' (should be by ' + budget + ')');
      });
    });
    if (late.length) bad(late.length + ' SHELF/SLOT PAIR(S) SURFACE FAR TOO LATE FOR THEIR SHARE',
      '\n      ' + late.slice(0, 8).join('\n      ') +
      '\n      \x1b[2mbalancedOrder({proportionalBy:"slot"}) deals each slot its share. If this' +
      '\n      fires, either the second axis is not being passed or the pool changed shape.\x1b[0m');
    else ok('Every slot with a real share surfaces in proportion', 'no shelf stacks one course at the front');
  }
}

// ══ 21 · LAW 55 · CHILDREN ════════════════ MF128 · Law 55 · Law 42 ══
head('21 · IS THERE ALCOHOL ON ANY SURFACE INTENDED FOR CHILDREN?   ⚖️ LAW 55');
p('  \x1b[2m    "Fussy little ones" was serving Amarula Cheesecake and Gin & Tonic Cheesecake.');
p('       The predicate matched `cheese` inside "cheesecake". Pull the two records and the');
p('       next cheesecake walks back on — so the SURFACE is gated, not the records.\x1b[0m');
{
  const has = ctx.tinzaHasAlcohol, safe = ctx.childSafe;
  if (typeof has !== 'function' || typeof safe !== 'function') {
    bad('tinzaHasAlcohol() / childSafe() not reachable — THE CHILD GATE IS GONE',
      '\n      \x1b[2mLaw 55 is a hard exclusion. If this is missing, children can be served alcohol.\x1b[0m');
  } else {
    // 🩸 BABY_RECIPES and EVENTS_FINGER_FOODS are declared `const`, so they exist in the
    // context's LEXICAL scope and are NOT properties of ctx. Reading ctx.BABY_RECIPES
    // returns undefined, and a first cut of this rung then reported "0 Tiny Tummies
    // records" and "0 finger foods" — a green tick over two surfaces it never looked at.
    // Reach them from INSIDE the context. A count of 0 must mean "none", never
    // "could not see". ⚖️ Law 45 · Law 3.
    const inside = expr => { try { return vm.runInContext(expr, ctx); } catch (e) { return null; } };
    const leaks = [], blind = [];
    // ① the fussy mood shelf
    const fussy = ctx.buildMoodPool ? (ctx.buildMoodPool('fussy') || []) : [];
    fussy.filter(has).forEach(r => leaks.push('fussy: ' + r.section + ':' + r.id + '  ' + r.name));
    // ② Tiny Tummies
    const baby = inside('typeof BABY_RECIPES!=="undefined" ? BABY_RECIPES : null');
    if (!baby) blind.push('Tiny Tummies (BABY_RECIPES unreachable)');
    else safe(baby).filter(has).forEach(r => leaks.push('tiny: ' + r.id + '  ' + r.name));
    // ③ Kiddies — the door into the ADULT finger-food catalogue
    let fingersChecked = 0, fingersRefused = 0;
    const fingers = inside('typeof EVENTS_FINGER_FOODS!=="undefined" ? EVENTS_FINGER_FOODS : null');
    const lookup = inside('typeof kidsFingerById==="function" ? kidsFingerById : null');
    if (!fingers || !lookup) blind.push('Kiddies (EVENTS_FINGER_FOODS / kidsFingerById unreachable)');
    else {
      Object.keys(fingers).forEach(k => {
        const g = fingers[k];
        if (!Array.isArray(g)) return;
        g.forEach(f => {
          if (!f || !f.id) return;
          fingersChecked++;
          if (has(f)) { fingersRefused++; if (lookup(f.id)) leaks.push('kiddies: ' + f.id + '  ' + f.name + '  (lookup did NOT refuse it)'); }
        });
      });
    }
    if (blind.length) bad('CANNOT SEE ' + blind.length + ' CHILD SURFACE(S) — THIS RUNG IS NOT PROTECTING THEM',
      '\n      ' + blind.join('\n      ') +
      '\n      \x1b[2mA count of 0 here would be a green tick over an unchecked surface. ⚖️ Law 3.\x1b[0m');
    p('     ' + num(fussy.length) + '  fussy cards after the gate');
    p('     ' + num(baby ? baby.length : 0) + '  Tiny Tummies records');
    p('     ' + num(fingersChecked) + '  kiddies-reachable finger foods · ' + fingersRefused + ' refused at the lookup');

    if (leaks.length) bad(leaks.length + ' ALCOHOL-CARRYING RECORD(S) ON A CHILD SURFACE — ⚖️ LAW 55',
      '\n      ' + leaks.slice(0, 8).join('\n      ') +
      '\n      \x1b[2mThis is a hard exclusion. It is not a ranking problem. Fix before anything else.\x1b[0m');
    else ok('No alcohol on fussy, Tiny Tummies or Kiddies', 'gated at the query, before any predicate ⚖️ Law 55');

    // ④ the gate must still WORK — a detector that refuses nothing has never been tested.
    // Synthetic probes, so this rung keeps its teeth even when the data is clean.
    const probes = [
      [{ name: 'X', ingredients: [{ n: 'apple' }], method: ['Fold in a splash of brandy.'] }, true,  'brandy in method'],
      [{ name: 'X', base12: { sherry: '100ml sherry' } },                                     true,  'base12 object'],
      [{ name: 'X', base: 'pear, a dash of rum' },                                            true,  'baby base string'],
      [{ name: 'Vanilla Cupcakes', ingredients: [{ n: 'vanilla extract' }] },                 false, 'vanilla extract'],
      [{ name: 'Slaw', ingredients: [{ n: 'red wine vinegar' }] },                            false, 'red wine vinegar'],
      [{ name: 'Crunchy Ginger Biscuits', ingredients: [{ n: 'ginger' }] },                    false, 'ginger (substring trap)'],
      [{ name: 'Rump Steak', ingredients: [{ n: 'rump steak' }] },                             false, 'rump (substring trap)']
    ];
    const wrong = probes.filter(([rec, want]) => has(rec) !== want).map(([, , label]) => label);
    if (wrong.length) bad('THE CHILD GATE FAILED ' + wrong.length + ' OF ITS OWN PROBES: ' + wrong.join(' · '),
      '\n      \x1b[2mIt is no longer detecting what it claims to. ⚖️ Law 55 · Law 42.\x1b[0m');
    else ok('The gate passes all ' + probes.length + ' probes', 'catches method/base12/base · ignores vinegar, essence, ginger, rump');
  }
}

// ══ 22 · COSTING · THE COUNT→WEIGHT BRIDGE ═══ MF124 · Law 6 · Law 54b ══
head('22 · CAN EVERY COUNT-PRICED INGREDIENT BE CONVERTED FROM GRAMS?   ⚖️ MF124');
p('  \x1b[2m    "100g apple" against a R5-EACH apple must become two-thirds of an apple,');
p('       never one hundred of them. Bircher Muesli shipped at R510 against R13.63.\x1b[0m');
{
  // Reached from INSIDE the context: PRICE_DB and AVG_WEIGHT_G are `var` in core.js
  // but PACK_DB is `const` in packs.js — a plain ctx.X read returns undefined for the
  // const ones and would print a triumphant 0 over a table it never opened. ⚖️ Law 54b.
  const inside = expr => { try { return vm.runInContext(expr, ctx); } catch (e) { return null; } };
  const PRICES = inside('typeof PRICE_DB!=="undefined" ? PRICE_DB : null');
  const AVG    = inside('typeof AVG_WEIGHT_G!=="undefined" ? AVG_WEIGHT_G : null');

  if (!PRICES || !AVG) {
    bad('CANNOT REACH ' + (!PRICES ? 'PRICE_DB' : '') + (!PRICES && !AVG ? ' and ' : '') + (!AVG ? 'AVG_WEIGHT_G' : '') +
        ' — THIS CHECK IS NOT PROTECTING ANYTHING',
      '\n      \x1b[2mA 0 here would be a green tick over a table never opened. ⚖️ Law 54b.\x1b[0m');
  } else {
    const countKeys = Object.keys(PRICES).filter(k => /_each$/.test(k)).map(k => k.replace(/_each$/, ''));
    const missing = countKeys.filter(k => !AVG[k]);
    p('     ' + num(countKeys.length) + '  count-priced PRICE_DB keys  (<name>_each)');
    p('     ' + num(Object.keys(AVG).length) + '  AVG_WEIGHT_G entries');
    if (!countKeys.length) {
      bad('PRICE_DB EXPOSES NO COUNT-PRICED KEYS AT ALL — the check found nothing to check',
        '\n      \x1b[2mEither the price list changed shape or it was not loaded. Not a pass.\x1b[0m');
    } else if (missing.length) {
      bad(missing.length + ' COUNT-PRICED KEY(S) HAVE NO AVERAGE WEIGHT — GRAMS CANNOT BE CONVERTED',
        '\n      ' + missing.slice(0, 12).join(' · ') +
        (missing.length > 12 ? '\n      \x1b[2m… and ' + (missing.length - 12) + ' more\x1b[0m' : '') +
        '\n      \x1b[2mcostRecipe now REFUSES to price these rather than reading grams as units,' +
        '\n      so each one silently drops recipe coverage and can hide a card price. ⚖️ Law 20.\x1b[0m');
    } else {
      ok('Every count-priced key has an average weight', countKeys.length + ' keys, 0 unconvertible');
    }

    // The engine must also be SINGULAR. Two more copies of this arithmetic is how the
    // bug survived: both wkCostRecipe and mealsCostPP lacked the bridge. ⚖️ Law 6.
    const engines = [];
    for (const f of loadOrder) {
      // 🩸 STRIP COMMENTS FIRST. Without this the rung flags the tombstone comment
      // that documents the DELETED wkCostRecipe — it quotes the bad line on purpose.
      // A check that reports the gravestone as the corpse is a check she stops reading.
      // ⚖️ Law 54a. Newlines are preserved so line numbers stay honest.
      const raw = fs.readFileSync(path.join(ROOT, f), 'utf8');
      const src = raw.replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[^\n]/g, ' '))
                     .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + ' '.repeat(Math.max(0, m.length - p1.length)));
      // a cost loop is: per==='count' followed by a ceil(...)*price, with no AVG_WEIGHT_G nearby
      const re = /per\s*===?\s*['"]count['"][\s\S]{0,220}?Math\.ceil\([^)]*\)\s*\*\s*\w+\.price/g;
      let m;
      while ((m = re.exec(src)) !== null) {
        if (/AVG_WEIGHT_G/.test(m[0])) continue;                 // the bridged branch — fine
        const before = src.slice(Math.max(0, m.index - 400), m.index);
        if (/AVG_WEIGHT_G/.test(before)) continue;               // bridge sits just above
        engines.push(f + ':' + src.slice(0, m.index).split('\n').length);
      }
    }
    if (engines.length) bad(engines.length + ' UNBRIDGED COUNT-COST LOOP(S) — A SECOND COSTING ENGINE IS BACK',
      '\n      ' + engines.join('\n      ') +
      '\n      \x1b[2mcostRecipe() is the ONE engine. A surface with different SKIP rules filters' +
      '\n      its own items and calls it. It does not grow its own arithmetic. ⚖️ Law 6.\x1b[0m');
    else ok('No unbridged ceil-branch cost loop', 'the shape that caused MF124 is absent');

    // ── THE INVENTORY ─────────────────────────────────────── asked 21 Jul ──
    // 🩸 THE RUNG ABOVE ONLY MATCHES ONE SHAPE: per==='count' followed by
    // ceil(x)*y.price. A fifth engine that prices count-by-weight DIFFERENTLY is
    // invisible to it — and one exists: fingerPerPieceCost (events.js) does
    // (qty/uw)*pr.price with NO ceil, against its own one-entry weight table.
    // Shape-matching cannot be the whole check. So: enumerate EVERY consumer that
    // does its own count arithmetic, and name them. New ones show up as new lines.
    const consumers = [];
    for (const f of loadOrder) {
      const raw = fs.readFileSync(path.join(ROOT, f), 'utf8');
      const src = raw.replace(/\/\*[\s\S]*?\*\//g, m => m.replace(/[^\n]/g, ' '))
                     .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + ' '.repeat(Math.max(0, m.length - p1.length)));
      const re = /per\s*===?\s*['"]count['"]/g;
      let m;
      while ((m = re.exec(src)) !== null) {
        const span = src.slice(m.index, m.index + 340);
        if (!/[*/]\s*\w+\.price|\w+\.price\s*[*/]/.test(span)) continue;   // no arithmetic here
        if (/costOneLine\s*\(/.test(span)) continue;                        // routed to the one engine
        const line = src.slice(0, m.index).split('\n').length;
        // COOK vs BUY. The trolley legitimately counts WHOLE UNITS — buyAmt/buyCost/
        // pack ladders run on an already-converted unit count, so demanding a weight
        // table there would be 4 false alarms every run. ⚖️ Law 54a. Only the COOK
        // side — the exact food cost — must convert a weight before it bills.
        const side = /cookCost|total\s*\+=|cook\s*\+=/.test(span) ? 'COOK'
                   : /buyCost|buyAmt|buyPacks|rung|ladder/.test(span) ? 'BUY' : 'COOK';
        consumers.push({ at: f + ':' + line, side: side,
          table: /AVG_WEIGHT_G/.test(span) ? 'AVG_WEIGHT_G' : (/_UNIT_G|UNIT_G\s*\[/.test(span) ? 'OWN TABLE' : 'none') });
      }
    }
    p('     ' + num(consumers.length) + '  place(s) still doing their own count arithmetic outside costOneLine()');
    consumers.forEach(c => p('        \x1b[2m' + c.at.padEnd(30) + c.side.padEnd(6) + 'weight table: ' + c.table + '\x1b[0m'));
    const rogue = consumers.filter(c => c.side === 'COOK' && c.table !== 'AVG_WEIGHT_G');
    if (rogue.length) warn(rogue.length + ' consumer(s) price count-by-weight WITHOUT AVG_WEIGHT_G',
      '\n      ' + rogue.map(c => c.at + '  (' + c.table + ')').join('\n      ') +
      '\n      \x1b[2mfingerPerPieceCost uses FINGER_UNIT_G = { egg: 50 } while AVG_WEIGHT_G says' +
      '\n      egg: 58 — the same egg costs two different amounts depending on the room, and any' +
      '\n      count-priced item that is NOT an egg is silently SKIPPED. Queued, not fixed: the' +
      '\n      50-vs-58 split is a ruling, not a refactor. ⚖️ Law 6 · Law 46.\x1b[0m');
    else if (consumers.length) ok('Every remaining count consumer uses AVG_WEIGHT_G', 'one weight table');
    else ok('Nothing prices a count outside costOneLine()', 'one engine, one weight table');
  }
}

// ══ 23 · IS EVERY SOURCE FILE STILL LEGIBLE TEXT? ═══════ MF130c · Law 42 ══
head('23 · CAN SHE STILL READ THE DIFF?   ⚖️ CLAUDE.md §4.3 — she stages LINE BY LINE');
p('  \x1b[2m    21 Jul: two NUL bytes went into tinza-census.js. It PARSED. It RAN. Every check');
p('       went GREEN. And git silently reclassified the file as BINARY — a 60-line change');
p('       showed as 1420 insertions / 1420 deletions, with no line diff to stage through.');
p('       Nothing was broken except the one thing she cannot check herself: whether what');
p('       she is approving is legible. node --check proves a file parses, NOTHING else. ⚖️ Law 1.');
{
  // Sibling of the doctor's MOJI check (tinza-doctor.js:131), which catches text that
  // survived as READABLE but WRONG (Â· â€ Ã¡). This one catches text that stopped being
  // text at all. ⚖️ Law 6 — one home each; do not duplicate the mojibake regex here.
  const EXT  = ['.js','.md','.json','.html','.mermaid','.css','.sh','.toml','.svg'];
  const SKIP = ['.git','node_modules','Images','Tools/node_modules'];
  const files = [];
  (function walk(dir, rel){
    let ents; try { ents = fs.readdirSync(dir, {withFileTypes:true}); } catch(e){ return; }
    for (const e of ents) {
      const r = rel ? rel + '/' + e.name : e.name;
      if (SKIP.indexOf(e.name) >= 0 || SKIP.indexOf(r) >= 0) continue;
      if (e.isDirectory()) walk(path.join(dir, e.name), r);
      else if (EXT.indexOf(path.extname(e.name).toLowerCase()) >= 0) files.push(r);
    }
  })(ROOT, '');

  // git calls a blob binary when it finds a NUL in the first 8000 bytes; grep is
  // stricter and gives up on a NUL anywhere. Flag either — both cost her the diff.
  // The other C0 controls are never intentional in these files; \x1A in particular
  // still truncates a file for some Windows tooling.
  const hits = [];
  files.forEach(f => {
    let s; try { s = fs.readFileSync(path.join(ROOT, f)); } catch(e){ return; }
    let nul = 0, ctrl = {}, firstNul = -1;
    for (let i = 0; i < s.length; i++) {
      const b = s[i];
      if (b === 0) { nul++; if (firstNul < 0) firstNul = i; }
      else if (b < 32 && b !== 9 && b !== 10 && b !== 13) ctrl[b] = (ctrl[b]||0) + 1;
    }
    const ctrlKeys = Object.keys(ctrl);
    if (nul || ctrlKeys.length) hits.push({ f, nul, firstNul, ctrl: ctrlKeys, gitBinary: firstNul >= 0 && firstNul < 8000 });
  });

  p('     ' + num(files.length) + '  source files scanned  \x1b[2m(' + EXT.join(' ') + ')\x1b[0m');
  if (hits.length) bad(hits.length + ' SOURCE FILE(S) ARE NOT CLEAN TEXT — THE DIFF IS UNREADABLE',
    '\n      ' + hits.slice(0,8).map(h =>
      h.f + '  ' + (h.nul ? h.nul + ' × NUL @' + h.firstNul + (h.gitBinary ? '  ← GIT SEES BINARY' : '  (grep sees binary)') : '') +
      (h.ctrl.length ? '  control bytes: ' + h.ctrl.map(c => '0x' + Number(c).toString(16).toUpperCase().padStart(2,'0')).join(' ') : '')
    ).join('\n      ') +
    '\n      \x1b[2mIt will still parse and still run. That is the whole danger. Find the string' +
    '\n      literal that holds it and use a real separator — or a nested map and no' +
    '\n      separator at all. ⚖️ Law 1 — node --check proves NOTHING but that it parses.\x1b[0m');
  else ok('Every source file is clean text', files.length + ' files · no NUL, no stray control bytes — every diff stages line by line');
}

// ══ 24 · THE TIER SWITCHER ══════════════ MF133 · §17 · Law 42 · Law 4 ══
head('24 · CAN A STRANGER STILL HAND HIMSELF PRO?   ⚖️ MF133 · Rulings §17');
p('  \x1b[2m    tierBar rendered UNCONDITIONALLY to every visitor, on every screen, and its');
p('       👑 Pro button sets USER_TIER=\'pro\' — opening cost · My Plan · shopping list ·');
p('       the nutrition grid · dietary filters · favourites. The chef leaked $2.02 of');
p('       spend and was found in days. This leaked the ENTIRE R90 PRODUCT and survived,');
p('       because it emitted no Rand, threw no error and sent no bill. A SILENT HOLE');
p('       NEEDS A MECHANICAL WATCHER, NOT A SHARPER PAIR OF EYES.');
{
  const SD = path.join(ROOT,'sections');
  const files = fs.readdirSync(SD).filter(f=>f.endsWith('.js'));

  // ① THE GATE — tierBar may never reach innerHTML without tinzaIsDev() beside it.
  const ungated = [], gated = [];
  files.forEach(f => {
    const s = fs.readFileSync(path.join(SD,f),'utf8');
    s.split('\n').forEach((line, i) => {
      if (!/innerHTML\s*=/.test(line) || !/\btierBar\b/.test(line)) return;
      (/tinzaIsDev\s*\(\s*\)/.test(line) ? gated : ungated).push(f + ':' + (i+1));
    });
  });
  if (ungated.length) bad(ungated.length + ' UNGATED tierBar → innerHTML — THE TIER SWITCHER IS PUBLIC',
    '\n      ' + ungated.join('\n      ') +
    '\n      \x1b[2mAnyone who loads the page can tap 👑 Pro and take the whole R90 product.' +
    '\n      Gate it: root.innerHTML = (tinzaIsDev() ? tierBar + devStrip : \'\') + …  ⚖️ §17.4.\x1b[0m');
  else if (gated.length) ok('Every tierBar render is behind tinzaIsDev()', gated.join(' · '));
  else bad('tierBar NEVER REACHES innerHTML AT ALL — the switcher is gone, not gated',
    '\n      \x1b[2mTina needs it to see her own app as a free user sees it. Deleting it is not' +
    '\n      the fix; hiding it behind dev is. If this was deliberate it needs a ruling. ⚖️ §17.3.\x1b[0m');

  // ② THE URL FLAG MUST NOT COME BACK — ruled DELETED, not weakened. ⚖️ §17.2.
  // Not "just in case", and not as ?dev=<secret> either: a URL flag is shareable,
  // screenshottable, guessable, survives WhatsApp, and lands in Netlify's request logs.
  const urlDev = [];
  files.forEach(f => {
    const s = fs.readFileSync(path.join(SD,f),'utf8');
    s.split('\n').forEach((line, i) => {
      if (/location\.(search|href)/.test(line) && /\bdev\b/.test(line)) urlDev.push(f + ':' + (i+1) + '  ' + line.trim().slice(0,80));
    });
  });
  if (urlDev.length) bad(urlDev.length + ' site(s) READ A DEV FLAG OFF THE URL — ?dev IS BACK',
    '\n      ' + urlDev.join('\n      ') +
    '\n      \x1b[2mIt is a password written on the door. Dev is a STORED preference. ⚖️ §17.2.\x1b[0m');
  else ok('No dev flag is read from the URL', '?dev is deleted, not weakened');

  // ③ ONE DEFINITION — nothing else may read a dev flag or invent one. ⚖️ Law 6 · §17.2.
  let defs = [];
  files.forEach(f => {
    const s = fs.readFileSync(path.join(SD,f),'utf8');
    s.split('\n').forEach((line, i) => { if (/function\s+tinzaIsDev\s*\(/.test(line)) defs.push(f + ':' + (i+1)); });
  });
  if (defs.length === 1) ok('tinzaIsDev() has exactly one definition', defs[0]);
  else bad(defs.length + ' DEFINITION(S) OF tinzaIsDev() — ' + (defs.length ? 'it can drift' : 'the door is gone'),
    '\n      ' + (defs.join(' · ') || '(none found)') +
    '\n      \x1b[2mOne door, one definition. A second copy is a second answer. ⚖️ Law 6.\x1b[0m');

  // ④ DEV MUST NEVER *BE* PRO — the clause that keeps the real gate testable.
  // tinzaIsDev() renders the switcher; the switcher sets USER_TIER; tierAllows() reads
  // USER_TIER. Three things, and they stay separate — at launch PayFast sets the tier,
  // and a dev flag that implied Pro would mean Tina can never again see her own app as
  // a free user sees it. ⚖️ §17.3.
  const bleed = [];
  files.forEach(f => {
    const s = fs.readFileSync(path.join(SD,f),'utf8');
    s.split('\n').forEach((line, i) => {
      if (/^\s*(\/\/|\*)/.test(line)) return;                       // a comment about it is not a bleed
      if (/tinzaIsDev\s*\(\s*\)/.test(line) && /USER_TIER|tierAllows|tierLevel/.test(line))
        bleed.push(f + ':' + (i+1) + '  ' + line.trim().slice(0,80));
    });
  });
  if (bleed.length) bad(bleed.length + ' site(s) LET DEV MODE IMPLY A TIER',
    '\n      ' + bleed.join('\n      ') +
    '\n      \x1b[2mDev SHOWS the switch. It must never BE Pro, or the real gate is' +
    '\n      permanently untestable and she can never see her own app as free. ⚖️ §17.3.\x1b[0m');
  else ok('Dev mode never implies a tier', 'dev shows the switch; the switch sets USER_TIER; tierAllows() reads it');
}


// ══ 25 · CAN A FREE VISITOR SEE A PRICE? ═════ MF132 · §2.4 · Law 42 · Law 3 ══
head('25 · CAN A FREE VISITOR SEE A PRICE?   ⚖️ MF132 · Rulings §2.4');
p('  \x1b[2m    Check 24 watches the tier SWITCH. Nothing watched the MONEY. Measured 21 Jul:');
p('       core.js:597 rendered the whole Budget room ungated, and 11 of 21 hand-rolled');
p('       R${} sites sat outside costLine() — live Rand to any free visitor. Same silent');
p('       shape as tierBar: no error, no bill, nothing missing from the screen.');
p('       ⚖️ §2.4 — I\'ve Got R100 is ALL FILTER. The filter IS the product.');
{
  const SD = path.join(ROOT,'sections');
  const files = fs.readdirSync(SD).filter(f=>f.endsWith('.js'));
  const read = f => fs.readFileSync(path.join(SD,f),'utf8');
  const isComment = l => /^\s*(\/\/|\*|\/\*)/.test(l);

  // ① THE ROOM. A tool whose ANSWER is money is Pro at the door, not per render line.
  // ⚖️ §2.4 — ask what the tool's ANSWER is, not what its screen shows.
  const MONEY_ROOMS = ['budget'];          // add a room here the day its answer becomes money
  const openRooms = [], shutRooms = [];
  MONEY_ROOMS.forEach(room => {
    const re = new RegExp("S\\.screen\\s*===?\\s*[\"']" + room + "[\"']");
    let found = false;
    files.forEach(f => {
      read(f).split('\n').forEach((line, i) => {
        if (isComment(line) || !re.test(line)) return;
        found = true;
        (/tierAllows\s*\(|tierLevel\s*\(|lockPanel\s*\(/.test(line) ? shutRooms : openRooms)
          .push(room + '  ' + f + ':' + (i+1) + '  ' + line.trim().slice(0,70));
      });
    });
    if (!found) openRooms.push(room + '  (NO SCREEN BRANCH FOUND — did the room move?)');
  });
  if (openRooms.length) bad(openRooms.length + ' MONEY ROOM(S) RENDER UNGATED — A FREE VISITOR GETS THE PAID ANSWER',
    '\n      ' + openRooms.join('\n      ') +
    '\n      \x1b[2mBudget is ALL filter — there is no free "badge half" to keep. Handing Free the' +
    '\n      filtered list gives away the whole answer and withholds only the receipt.' +
    '\n      Gate the ROOM and return lockPanel() carrying an HONEST COUNT. ⚖️ §2.4 · Law 6.\x1b[0m');
  else ok('Every money room is gated at the door', shutRooms.join(' · '));

  // ② THE HONEST COUNT. Law 3 forbids zero results and forbids a lie. A bare lock on a
  // question tool is a zero. The count must exist, and must come from the SAME query
  // that builds the paid list — two code paths would be two numbers. ⚖️ Law 3 · Law 7.
  const lockSites = [];
  files.forEach(f => read(f).split('\n').forEach((line,i) => {
    if (isComment(line)) return;
    if (/lockPanel\s*\(/.test(line) && /budget/i.test(line)) lockSites.push(f+':'+(i+1));
  }));
  if (!openRooms.length && !lockSites.length)
    warn('Budget is gated but NO lockPanel() names it — is Free seeing a blank room?',
      '\n      \x1b[2mA gate that renders nothing is a zero result. Law 3 wants the COUNT:' +
      '\n      "R100 feeds your family from N recipes — unlock with Pro." ⚖️ Law 3 · Law 7.\x1b[0m');
  else if (lockSites.length) ok('Budget\'s lock is named and rendered', lockSites.join(' · '));

  // ③ ONE DOOR FOR MONEY. Every Rand on every screen is built by costLine()/costOneLine().
  // A hand-rolled R${} is not merely untidy — it is money rendered OUTSIDE the gate,
  // which is exactly how 11 of these leaked. ⚖️ Law 6 · MF132.
  //
  // ⚖️ §2.4 EXEMPTION (ruled 23 Jul) — THE USER'S OWN BUDGET FIGURE, INSIDE THE GATED ROOM.
  // These are not RECIPE money. They echo the amount the user typed — the R40–R500 picker
  // buttons, the "Finding recipes for R100" loading line, "R25 per person to spend" — and they
  // live inside budgetPlannerHTML, which assertion ① confirms is gated at the door. A free
  // visitor never reaches them. Routing a budget-PICKER button through a food-cost gate would
  // be a lie of a different kind. One-door purity is for recipe money; a user's own input is
  // not that. 🩸 Same discipline as RETIRED: keyed by a STABLE NEEDLE (never a line number, so a
  // shift can't re-arm or silently widen it), written in, and REPORTED dim — allowlisted, not hidden.
  const MONEY_EXEMPT = [
    { f:'budget.js', needle:'per person to spend',      why:'user budget echo' },
    { f:'budget.js', needle:'selectBudget(',            why:'R40–R500 picker buttons' },
    { f:'budget.js', needle:'Finding recipes for R',    why:'loading line' },
    { f:'budget.js', needle:'.toFixed(0)} per person',  why:'per-person budget echo' },
    { f:'budget.js', needle:'Tight budget, honest food',why:'tight-budget prose' },
  ];
  const rawMoney = [], moneyExempt = [];
  files.forEach(f => read(f).split('\n').forEach((line,i) => {
    if (isComment(line)) return;
    if (!/R\$\{/.test(line)) return;
    if (/costLine\s*\(|costOneLine\s*\(/.test(line)) return;   // already through the door
    const ex = MONEY_EXEMPT.find(e => f===e.f && line.includes(e.needle));
    if (ex) { moneyExempt.push(f+':'+(i+1)+'  \x1b[2m('+ex.why+')\x1b[0m'); return; }   // §2.4 exemption — ruled, in writing
    rawMoney.push(f+':'+(i+1)+'  '+line.trim().slice(0,64));
  }));
  if (rawMoney.length) bad(rawMoney.length + ' HAND-ROLLED money string(s) OUTSIDE costLine()',
    '\n      ' + rawMoney.slice(0,12).join('\n      ') +
    (rawMoney.length>12 ? '\n      \x1b[2m… and ' + (rawMoney.length-12) + ' more\x1b[0m' : '') +
    '\n      \x1b[2mcostLine() IS the gate (core.js) — it reads tierAllows(\'pro\') and locks.' +
    '\n      Money built by hand is money the gate never saw. ⚖️ Law 6 · MF132.\x1b[0m');
  else ok('Every recipe Rand is built by the one door', 'no hand-rolled R${} in sections/ except the ruled §2.4 exemptions');
  if (moneyExempt.length) p('     \x1b[2m§2.4 EXEMPT — ' + moneyExempt.length + ' (user\'s own budget figure, gated room, ruled 23 Jul):  '
    + moneyExempt.join('  ·  ') + '\x1b[0m');

  // ④ THE DOOR IS ONE DOOR.
  let costDefs = [];
  files.forEach(f => read(f).split('\n').forEach((line,i) => {
    if (/function\s+costLine\s*\(/.test(line)) costDefs.push(f+':'+(i+1));
  }));
  if (costDefs.length === 1) ok('costLine() has exactly one definition', costDefs[0]);
  else bad(costDefs.length + ' DEFINITION(S) OF costLine() — ' + (costDefs.length ? 'the gate can drift' : 'the gate is gone'),
    '\n      ' + (costDefs.join(' · ') || '(none found)') + '\n      \x1b[2mOne door, one definition. ⚖️ Law 6.\x1b[0m');

  // ⑤ NO GATE READS USER_TIER BY HAND — AND THE HAND-READ ONES FAIL OPEN.
  // tierLevel() fails CLOSED by design (undefined → 0 → Free). maxMeats did the opposite:
  // USER_TIER==="free"?2:99 returns 99 for undefined, for "Free", for a numeric level.
  // Every other gate in Tinza fails closed. This one handed Free unlimited meats.
  // ⚠️ A TRAILING COMMENT IS NOT CODE. Six of the seven this first flagged were the
  // comment "// … never USER_TIER==='pro'" sitting after a CORRECT tierAllows() call —
  // the file warning against the very bug, reported as the bug. Strip comments first.
  const strip = l => l.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\/\/.*$/,'');
  const handRead = [];
  files.forEach(f => read(f).split('\n').forEach((line,i) => {
    const c = strip(line);
    if (!c.trim()) return;
    if (!/USER_TIER\s*===?|===?\s*USER_TIER/.test(c)) return;
    if (/typeof\s+USER_TIER|TIER_LEVEL\[/.test(c)) return;           // tierLevel(), the door itself
    if (/USER_TIER\s*=\s*['"]/.test(c)) return;                      // the switcher SETS it
    handRead.push(f+':'+(i+1)+'  '+c.trim().slice(0,70));
  }));
  if (handRead.length) bad(handRead.length + ' gate(s) COMPARE USER_TIER BY HAND — these fail OPEN',
    '\n      ' + handRead.join('\n      ') +
    '\n      \x1b[2mtierLevel() fails CLOSED: undefined → 0 → Free. A hand comparison does not —' +
    '\n      undefined, "Free" and a numeric level all miss the string and land on the PAID' +
    '\n      branch. Ask at the door: tierAllows(\'pro\'). ⚖️ Law 6 · §17.3.\x1b[0m');
  else ok('No gate compares USER_TIER by hand', 'every gate asks tierAllows() and inherits fail-closed');

  // ⑥ A QUANTITY IS NOT MONEY. Free scales EVERY one of 2,083 recipes (§2 FREE).
  // Spice is the trap: spiceFmt() returns money AND grams, so a grep for R$ misses the
  // money and a careless gate catches the grams. Gating a gram is as much a bug as
  // leaking a Rand — it just never announces itself either. ⚖️ §2 FREE · Law 3.
  // ⚠️ A QUANTITY PASSED AS AN ARGUMENT IS NOT A GATED QUANTITY. health.js:850 gates an
  // add-to-plan button that hands S.servings along as a parameter — My Plan IS Pro, so
  // that gate is CORRECT. Only a quantity being RENDERED behind a gate is the bug.
  const QTY  = /\b(spiceFmt|qtyBox|scaleQty)\b|\bservings\b|\byield\b/;
  const PAID = /\b(plan|Plan|favourite|favorite|shop|Shop|cart|Cart|save|Save|toggle|Toggle|download)\b/;
  const gatedQty = [];
  files.forEach(f => read(f).split('\n').forEach((line,i) => {
    const c = strip(line);
    if (!/tierAllows\s*\(|tierLevel\s*\(|lockPanel\s*\(/.test(c)) return;
    if (!QTY.test(c)) return;
    if (/cost|price|Rand|R\$\{/i.test(c)) return;   // money beside a qty name is fine
    if (PAID.test(c)) return;                      // gating My Plan / favourites / list is RULED
    gatedQty.push(f+':'+(i+1)+'  '+c.trim().slice(0,70));
  }));
  if (gatedQty.length) bad(gatedQty.length + ' site(s) GATE A QUANTITY — Free must still scale',
    '\n      ' + gatedQty.join('\n      ') +
    '\n      \x1b[2m§2 FREE: browse, cook, view and SCALE every one of 2,083 recipes. Grams,' +
    '\n      servings and yields are never Pro. Lock the Rand, never the amount.\x1b[0m');
  else ok('No quantity is gated', 'grams, servings and yields stay free — only Rand locks');

  // ⑦ IS THE PITCHED PRICE THE RULED PRICE? ⚖️ Ruled 28 Jun (R50→R90) · §11 · Law 6.
  // Check 25 above asks whether Free can SEE money. This rung asks whether the money
  // we SHOW is TRUE. Different failure, same silence: a stale price renders perfectly,
  // throws nothing, and is wrong on the one screen whose entire job is to sell Pro.
  // Measured 25 Jul: 21 user-facing "R50/month" strings across 9 section files, four
  // weeks after the R90 ruling. The sweep sat in a queue and the queue did not run.
  // ⚖️ A stale price must go RED on its own, not wait for someone to open the file.
  const PRO_PRICE = 90;                        // ⛔ THE DAY PRO'S PRICE CHANGES, CHANGE IT HERE.
  const priceRe   = /R\s?(\d{1,4})\s*\/\s*(month|mo\b)/gi;
  const stale = [];
  files.forEach(f => read(f).split('\n').forEach((line,i) => {
    const c = strip(line);
    let m;
    while ((m = priceRe.exec(c)) !== null) {
      if (Number(m[1]) !== PRO_PRICE) stale.push(f+':'+(i+1)+'  R'+m[1]+'  '+c.trim().slice(0,60));
    }
  }));
  if (stale.length) bad(stale.length + ' SITE(S) PITCH A PRICE THAT IS NOT R' + PRO_PRICE + '/month',
    '\n      ' + stale.join('\n      ') +
    '\n      \x1b[2mPro was ruled R' + PRO_PRICE + ' on 28 Jun 2026. Every one of these is live to a' +
    '\n      non-Pro visitor, on the exact surface that asks her for the money. Nothing' +
    '\n      breaks, nothing logs, and the number is wrong. ⚖️ Law 6 · §11.\x1b[0m');
  else ok('Every pitched price reads R' + PRO_PRICE + '/month', 'no stale price survives anywhere in sections/');
}

// ══ 26 · THE INVARIANT ══════════════════════ MF135 · §20 · MF134 ══
head('26 · IS THE WHOLE LIBRARY STILL THERE?   ⚖️ Rulings §20 · MF134');
p('  \x1b[2m    MF134: one throw inside adaptWorld\'s forEach deleted 1021 world records —');
p('       allRecipes() went 2083 → 1062 — with NO error, NO console, node --check clean');
p('       and the census RED count unmoved. Five silent holes in three days, not one of');
p('       which announced itself. ⚖️ §20 — INVARIANT, NOT FEATURE. A silent hole needs a');
p('       mechanical watcher, not a sharper pair of eyes.');
{
  // ① THE COUNT. Exact — not "roughly", not "≥". If the library is legitimately meant to
  // grow, THIS CONSTANT CHANGES IN THE SAME COMMIT AS THE RECIPES, deliberately, and Tina
  // sees it in the diff. That is the whole point: the number is a promise, not a reading.
  const EXPECTED_TOTAL = 2083;
  // ② THE SHAPE. A section at 0 is RED even if the total somehow still reaches 2083 —
  // one room emptying while another doubles is exactly the shape MF134 would have taken
  // had the counts happened to balance.
  const EXPECTED_SECTIONS = ['meals','bakes','sides','floor','health','world','events','braai','beverages','tiny','spice','furry'];

  const bySec = {};
  all.forEach(r => bySec[r.section] = (bySec[r.section] || 0) + 1);
  const shape = EXPECTED_SECTIONS.map(s => s + ' ' + (bySec[s] || 0)).join(' · ');

  if (all.length !== EXPECTED_TOTAL) bad('allRecipes() RETURNS ' + all.length + ', NOT ' + EXPECTED_TOTAL + ' — THE LIBRARY LOST RECORDS',
    '\n      ' + shape +
    '\n      \x1b[2mIf this is a deliberate change, EXPECTED_TOTAL moves in the SAME COMMIT as the' +
    '\n      recipes. If it is not, an adapter is throwing and taking a whole room with it.\x1b[0m');
  else ok('allRecipes() === ' + EXPECTED_TOTAL, shape);

  const empty = EXPECTED_SECTIONS.filter(s => !bySec[s]);
  const unexpected = Object.keys(bySec).filter(s => EXPECTED_SECTIONS.indexOf(s) < 0);
  if (empty.length) bad(empty.length + ' SECTION(S) ARE EMPTY: ' + empty.join(' · '),
    '\n      \x1b[2mA room at zero is a room whose adapter died. The total can still look right.\x1b[0m');
  else ok('Every section has records', EXPECTED_SECTIONS.length + ' rooms, none empty');
  if (unexpected.length) warn('New section(s) not in the expected shape: ' + unexpected.join(' · '),
    '\n      \x1b[2mAdd it to EXPECTED_SECTIONS deliberately, so it is watched too.\x1b[0m');

  // ③ THE LOADER TOLD THE TRUTH (job 0). A swallowed load error is the thing that let
  // every one of these bugs through. ⚖️ §20.
  // Restated, NOT re-counted — rung 0 above already carries the RED, and double-counting
  // one fault as two would corrupt the Law 51 baseline it exists to protect.
  if (LOAD_FAILURES.length || ALL_THREW)
    p('     \x1b[31m✘ see rung 0 — ' + (LOAD_FAILURES.length ? LOAD_FAILURES.length + ' file(s) failed to load' : 'allRecipes() threw') +
      '; every count in this rung is measured against a broken library\x1b[0m');
  else ok('Every section file loaded without throwing', loadOrder.length + ' files · the loader no longer swallows its own errors');
}

// ══ 27 · DUPLICATE KEYS ═══════════════════════ MF135 · §20 · Law 39 ══
head('27 · DOES ANY OBJECT DEFINE THE SAME KEY TWICE?   ⚖️ Rulings §20 · Law 39');
p('  \x1b[2m    The second definition wins SILENTLY. "pork belly" is priced R120 at one line');
p('       and R150 at another; R120 has never once been used and nothing ever said so.');
p('       ⛔ THIS CANNOT BE GREPPED. A regex over prices.js counts 12 — and 10 of those');
p('       are legitimate keys in DIFFERENT objects. A rung that cries wolf is worse than');
p('       no rung, because she learns to skip past it. So this PARSES. ⚖️ §19.');
{
  // Brace-depth scanner: acorn is not available in this repo (no node_modules), and the
  // brief permits a scanner ONLY if it reproduces the known nine EXACTLY. It does —
  // all nine, same lines, same values. It also passes 15 unit cases including the ones
  // a grep fails: same key in two DIFFERENT objects, in sibling array objects, in a
  // parent vs its nested child, inside strings, comments, template literals, regexes
  // and ternaries. A key belongs to the object that DIRECTLY encloses it, and no other.
  function scanDuplicateKeys(src) {
    const dups = [], stack = [];
    let i = 0, line = 1, atKeyPos = false, prevSig = '';
    const N = src.length;
    function peekValue(from) {
      let j = from, d = 0, out = '', guard = 0;
      while (j < N && guard++ < 400) {
        const c = src[j];
        if (c === '"' || c === "'" || c === '`') { const q = c; out += c; j++; while (j < N && src[j] !== q) { if (src[j] === '\\') { out += src[j]; j++; } out += src[j]; j++; } out += q; j++; continue; }
        if ('{[('.indexOf(c) >= 0) d++;
        if ('}])'.indexOf(c) >= 0) { if (d === 0) break; d--; }
        if (c === ',' && d === 0) break;
        if (c === '\n') { out += ' '; j++; continue; }
        out += c; j++;
      }
      return out.trim().slice(0, 44);
    }
    while (i < N) {
      const c = src[i];
      if (c === '/' && src[i+1] === '/') { while (i < N && src[i] !== '\n') i++; continue; }
      if (c === '/' && src[i+1] === '*') { i += 2; while (i < N && !(src[i] === '*' && src[i+1] === '/')) { if (src[i] === '\n') line++; i++; } i += 2; continue; }
      // a key must be tried BEFORE the string handler, or every quoted key is swallowed
      // as a plain string and the scanner silently finds nothing. (It did, first draft.)
      const top0 = stack[stack.length - 1];
      if (atKeyPos && top0 && top0.type === 'obj' && (c === '"' || c === "'" || /[A-Za-z_$0-9]/.test(c))) {
        const startLine = line; let key = null, after = i;
        if (c === '"' || c === "'") {
          const q = c; let j = i + 1, k = '';
          while (j < N && src[j] !== q) { if (src[j] === '\\') { k += src[j+1]; j += 2; continue; } k += src[j]; j++; }
          key = k; after = j + 1;
        } else { let j = i, k = ''; while (j < N && /[A-Za-z0-9_$]/.test(src[j])) { k += src[j]; j++; } key = k; after = j; }
        let j = after; while (j < N && /\s/.test(src[j])) j++;
        if (key !== null && src[j] === ':') {
          if (top0.keys.has(key)) dups.push({ key, first: top0.keys.get(key), second: { line: startLine, val: peekValue(j+1) } });
          else top0.keys.set(key, { line: startLine, val: peekValue(j+1) });
          i = after; atKeyPos = false; prevSig = 'x'; continue;
        }
      }
      if (c === '"' || c === "'") { const q = c; i++; while (i < N && src[i] !== q) { if (src[i] === '\\') i++; if (src[i] === '\n') line++; i++; } i++; prevSig = 'x'; atKeyPos = false; continue; }
      if (c === '`') { i++; let td = 0; while (i < N) { if (src[i] === '\\') { i += 2; continue; } if (src[i] === '\n') { line++; i++; continue; } if (src[i] === '$' && src[i+1] === '{') { td++; i += 2; continue; } if (td > 0 && src[i] === '}') { td--; i++; continue; } if (td === 0 && src[i] === '`') { i++; break; } i++; } prevSig = 'x'; atKeyPos = false; continue; }
      if (c === '/' && '(,=:[!&|?{};+-*%~^'.indexOf(prevSig) >= 0) { i++; let inClass = false; while (i < N) { if (src[i] === '\\') { i += 2; continue; } if (src[i] === '[') inClass = true; else if (src[i] === ']') inClass = false; else if (src[i] === '/' && !inClass) { i++; break; } else if (src[i] === '\n') { line++; break; } i++; } while (i < N && /[gimsuy]/.test(src[i])) i++; prevSig = 'x'; atKeyPos = false; continue; }
      if (c === '\n') { line++; i++; continue; }
      if (c === ' ' || c === '\t' || c === '\r') { i++; continue; }
      if (c === '{') { stack.push({ type:'obj', keys:new Map() }); i++; prevSig = '{'; atKeyPos = true; continue; }
      if (c === '[') { stack.push({ type:'arr', keys:null }); i++; prevSig = '['; atKeyPos = false; continue; }
      if (c === '(') { stack.push({ type:'paren', keys:null }); i++; prevSig = '('; atKeyPos = false; continue; }
      if (c === '}' || c === ']' || c === ')') { stack.pop(); i++; prevSig = c; atKeyPos = false; continue; }
      if (c === ',') { const t = stack[stack.length-1]; atKeyPos = !!(t && t.type === 'obj'); i++; prevSig = ','; continue; }
      atKeyPos = false; prevSig = c; i++;
    }
    return dups;
  }

  const SD = path.join(ROOT,'sections');
  const files = fs.readdirSync(SD).filter(f => f.endsWith('.js'));
  const hits = [], skipped = [];
  files.forEach(f => {
    const src = fs.readFileSync(path.join(SD,f),'utf8');
    // a file that does not parse cannot be scanned honestly — say so by name, do not
    // let it fail the run, and do NOT report it as clean. ⚖️ Law 54b — a zero must
    // distinguish "none found" from "couldn't look".
    try { new (require('vm').Script)(src, {filename:f}); }
    catch(e){ skipped.push(f); return; }
    scanDuplicateKeys(src).forEach(d => hits.push({ file:f, ...d }));
  });

  p('     ' + num(files.length - skipped.length) + '  section file(s) parsed and walked');
  if (hits.length) bad(hits.length + ' DUPLICATE KEY(S) — THE SECOND ONE WINS, SILENTLY',
    '\n      ' + hits.map(d =>
      d.file + '  ' + JSON.stringify(d.key) + '\n        loser  L' + d.first.line + '  ' + d.first.val +
      '\n        WINNER L' + d.second.line + '  ' + d.second.val).join('\n      ') +
    '\n      \x1b[2m⛔ NOT Code\'s to fix — WHICH coconut and WHICH pork belly price is a CONTENT' +
    '\n      call, and it is Tina\'s. This rung\'s job is to surface them, not resolve them.\x1b[0m');
  else ok('No object defines the same key twice', (files.length - skipped.length) + ' files walked');
  if (skipped.length) warn(skipped.length + ' file(s) could not be parsed — NOT scanned, not "clean"',
    '\n      ' + skipped.join(' · ') + '   \x1b[2m⚖️ Law 54b\x1b[0m');
}

p('\n\x1b[2m⚖️ Law 2 — none of this is proof. Her fingers on live close a bug. This only tells you where to put them.\x1b[0m\n');
