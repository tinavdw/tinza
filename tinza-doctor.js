#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   TINZA DOCTOR  ·  v1  ·  13 July 2026
   READ-ONLY. It writes NOTHING. It only looks.

   RUN:   node tinza-doctor.js
   FROM:  the tinza repo root (where index.html lives)

   GREEN → you may push.        RED → fix it first.
   ⚖️ LAW 42 — A BUG YOU FIX COMES BACK. A BUG THE DOCTOR CATCHES CANNOT SHIP.
   ══════════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.cwd();
const RED = [], AMBER = [], GREEN = [];
let SMOKE_PROMISE = null;
const p = (...a) => console.log(...a);
const pass  = (t, d) => { GREEN.push(t); p('  \x1b[32m✔\x1b[0m ' + t + (d ? '  \x1b[2m' + d + '\x1b[0m' : '')); };
const fail  = (t, d, list) => { RED.push(t);  p('  \x1b[31m✘ ' + t + '\x1b[0m' + (d ? '  ' + d : '')); (list||[]).slice(0,8).forEach(x => p('      \x1b[31m·\x1b[0m ' + x)); if ((list||[]).length > 8) p('      \x1b[2m… and ' + (list.length-8) + ' more\x1b[0m'); };
const warn  = (t, d, list) => { AMBER.push(t); p('  \x1b[33m▲ ' + t + '\x1b[0m' + (d ? '  ' + d : '')); (list||[]).slice(0,6).forEach(x => p('      \x1b[33m·\x1b[0m ' + x)); };
const head  = t => p('\n\x1b[1m' + t + '\x1b[0m');

// ── setup ────────────────────────────────────────────────────────────────
if (!fs.existsSync(path.join(ROOT, 'index.html'))) {
  p('\x1b[31mNo index.html here. Run the doctor from the tinza repo root.\x1b[0m');
  process.exit(2);
}
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const loadOrder = (indexHtml.match(/sections\/[A-Za-z0-9_.-]+\.js/g) || []);
const onDisk = fs.readdirSync(path.join(ROOT, 'sections'))
  .filter(f => f.endsWith('.js'))
  .map(f => 'sections/' + f);

p('\n\x1b[1m\x1b[36m🩺  TINZA DOCTOR\x1b[0m   \x1b[2m' + new Date().toISOString().slice(0,16).replace('T',' ') + '\x1b[0m');
p('\x1b[2m    read-only · writes nothing · ' + onDisk.length + ' files in sections/\x1b[0m');

// ── 1. SYNTAX ────────────────────────────────────────────────────────────
head('1 · SYNTAX  (⚖️ Law 1 — node --check is the floor, not the ceiling)');
{
  const broken = [], empty = [];
  for (const f of onDisk) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    if (src.trim().length === 0) { empty.push(f + '  ← ZERO BYTES'); continue; }
    try { new vm.Script(src, { filename: f }); } catch (e) { broken.push(f + '  ' + e.message.slice(0, 60)); }
  }
  if (broken.length) fail('Files that will not parse', broken.length + '', broken);
  else pass('Every file parses', onDisk.length + ' files');
  if (empty.length) fail('ZERO-BYTE FILES', '', empty);
  else pass('No zero-byte files', 'the spice.js trap');
}

// ── 2. LOADED? ───────────────────────────────────────────────────────────
head('2 · IS IT ACTUALLY SHIPPED?  (a file nobody loads is a file nobody runs)');
{
  const never = onDisk.filter(f => !loadOrder.includes(f) && !/\.bak|photo-audit|doctor/.test(f));
  if (never.length) fail('In sections/ but NEVER loaded by index.html', never.length + '',
    never.map(f => f + '  (' + fs.readFileSync(path.join(ROOT,f),'utf8').split('\n').length + ' lines)'));
  else pass('Every section file is loaded', loadOrder.length + ' script tags');

  const ghosts = loadOrder.filter(f => !fs.existsSync(path.join(ROOT, f)));
  if (ghosts.length) fail('index.html loads files that DO NOT EXIST', '', ghosts);
  else pass('No ghost script tags');
}

// ── 3. BOOT THE APP ──────────────────────────────────────────────────────
head('3 · DOES THE APP BOOT?');
let ctx = null, all = null;
{
  ctx = { console: { log(){}, warn(){}, error(){} }, fetch: () => Promise.reject(new Error('offline')),
          setTimeout, clearTimeout, setInterval, clearInterval,
          document: { getElementById: () => null, addEventListener(){}, querySelector: () => null },
          localStorage: { getItem: () => null, setItem(){}, removeItem(){} },
          navigator: { onLine: true }, location: { href: '' } };
  ctx.window = ctx;
  vm.createContext(ctx);
  const failedFiles = [];
  for (const f of loadOrder) {
    try { vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f }); }
    catch (e) { failedFiles.push(f + '  ' + String(e.message).slice(0, 50)); }
  }
  if (failedFiles.length) warn('Files threw while loading (may be browser-only APIs)', '', failedFiles);
  else pass('All ' + loadOrder.length + ' files loaded clean');

  try { all = ctx.allRecipes ? ctx.allRecipes() : null; } catch (e) { all = null; }
  if (!all || !all.length) fail('allRecipes() returned nothing', 'THE INDEX IS DEAD');
  else pass('The index builds', all.length + ' recipes');
}

// ── 4. THE SMOKE TEST  (MF77) ────────────────────────────────────────────
head('4 · SMOKE TEST — drive every function. What falls over?');
p('  \x1b[2m    ⚖️ Law 40 — `|| []` does not catch a name that never existed. IT THROWS.');
p('       And an async throw does not crash — it VANISHES, and the spinner spins forever.\x1b[0m');
{
  const SMOKE = `
    S.ing1='chicken'; S.ing2='onion'; S.ing3='cheese'; S.ing4='cream';
    S.anchorInput='chicken'; S.budget=150; S.people=4;
    (async () => {
      const broke = [];
      const names = Object.getOwnPropertyNames(this)
        .filter(k => typeof this[k] === 'function'
           && /HTML$|View$|^find[A-Z]|^call[A-Z]|^start[A-Z]/.test(k)
           && !/^(DataView|ArrayBuffer|Shared)/.test(k));
      for (const n of names) {
        try {
          const out = this[n]();
          if (out && typeof out.then === 'function') await out;   // AWAIT — the app forgets to
        } catch (e) {
          const m = String(e && e.message);
          if (/offline|fetch|undefined \\(reading/i.test(m)) continue;   // our stub, not a bug
          broke.push(n + '()   ' + (e.constructor ? e.constructor.name : 'Error') + ': ' + m.slice(0,54));
        }
      }
      return { broke, n: names.length };
    })();
  `;
  let result = null;
  try { result = vm.runInContext(SMOKE, ctx, { filename: 'smoke' }); } catch (e) { result = null; }
  if (!result || typeof result.then !== 'function') {
    warn('Could not run the smoke test', 'the app did not boot far enough');
  } else {
    SMOKE_PROMISE = result;   // resolved at the bottom, before the verdict
  }
}

// ── 5. THE TEXT  (MF70) ──────────────────────────────────────────────────
head('5 · ENCODING  (⚖️ Law 10 — the bug is in the data, not the code)');
{
  const MOJI = /Â·|â€|Ã[¡-¿]|Åž|ÅŸ|Ä±|Ä°|Ã–|Ãœ/g;
  const bad = [];
  for (const f of onDisk) {
    const hits = (fs.readFileSync(path.join(ROOT, f), 'utf8').match(MOJI) || []).length;
    if (hits) bad.push(f + '   ' + hits + ' broken sequences');
  }
  if (bad.length) fail('MOJIBAKE — a grandma cannot read this', '', bad);
  else pass('Text is clean UTF-8', onDisk.length + ' files');
}

// ── 6. THE THUMBS  (MF76) ────────────────────────────────────────────────
head('6 · TEXT INPUTS  (under 16px a tablet ZOOMS ITSELF IN when she types)');
{
  const small = [];
  for (const f of loadOrder) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    const re = /<input[^>]*type=["']?(?:text|search)["']?[^>]*>/gi;
    let m;
    while ((m = re.exec(src))) {
      const tag = m[0];
      const fs_ = /font-size\s*:\s*(\d+)px/i.exec(tag);
      const line = src.slice(0, m.index).split('\n').length;
      if (!fs_) small.push(f + ':' + line + '   NO font-size at all');
      else if (+fs_[1] < 16) small.push(f + ':' + line + '   ' + fs_[1] + 'px');
    }
  }
  if (small.length) fail('Text inputs under 16px', small.length + '', small);
  else pass('Every text input is ≥16px');
}

// ── 7. THE PICTURES  (MF52) ──────────────────────────────────────────────
head('7 · IMAGES  (⚖️ OFFLINE MODE IS LOCKED. Never a live external dependency.)');
{
  const missing = [], external = [];
  const seen = new Set();
  for (const f of loadOrder.concat(['index.html'])) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    for (const m of src.matchAll(/["'`](\/?Images\/[^"'`)]+\.(?:jpg|jpeg|png|webp|svg))["'`]/gi)) {
      const rel = decodeURIComponent(m[1].replace(/^\//, ''));
      if (seen.has(rel)) continue; seen.add(rel);
      if (!fs.existsSync(path.join(ROOT, rel))) missing.push(rel + '   ← ' + f);
    }
    for (const m of src.matchAll(/https?:\/\/[^"'`\s)]+\.(?:jpg|jpeg|png|webp)/gi)) {
      if (!external.includes(m[0])) external.push(m[0].slice(0, 72) + '   ← ' + f);
    }
  }
  if (missing.length) fail('Image paths that DO NOT EXIST on disk', missing.length + '', missing);
  else pass('Every image path resolves');
  if (external.length) fail('LIVE EXTERNAL IMAGE — breaks offline, and can go down', '', external);
  else pass('No external image dependencies');
}

// ── 8. SAMENESS  (⚖️ #1 goal) ────────────────────────────────────────────
head('8 · SAMENESS  (every room built from the same v33 header)');
{
  const ROOMS = ['braai','spice','worldkitchen','meals','events','health','furry','kiddies',
                 'budget','tinyTummies','buffet','barplanner'];
  const noHeader = [], pills = [], bespoke = [], noSearch = [];
  for (const r of ROOMS) {
    const f = 'sections/' + r + '.js';
    if (!fs.existsSync(path.join(ROOT, f))) continue;
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    const hasHdr  = /sectionHeader\s*\(/.test(src);
    const hasPill = /onclick:[^\n]*search|search:\s*\{\s*onclick/i.test(src);
    const hasOwn  = /<input[^>]*placeholder=["'][^"']*[Ss]earch/.test(src);
    const hasIn   = /oninput:/.test(src);
    if (!hasHdr)                  noHeader.push(r + '.js   ← never migrated to v33');
    if (hasPill)                  pills.push(r + '.js   ← a PILL dressed as a search box');
    if (hasOwn && !hasIn)         bespoke.push(r + '.js   ← its own hand-rolled input');
    if (!hasPill && !hasOwn && !hasIn) noSearch.push(r + '.js   ← no search at all');
  }
  if (noHeader.length) fail('Rooms that do not use the shared header', '', noHeader);
  else pass('Every room calls sectionHeader()');
  if (pills.length)   fail('Rooms whose search box LIES (it navigates away)', '', pills);
  else pass('No fake search boxes');
  if (bespoke.length) fail('Rooms with a hand-rolled search input', '', bespoke);
  else pass('One shared search input everywhere');
  if (noSearch.length) warn('Rooms with NO search at all', '', noSearch);
}

// ── 9. THE FOOD ──────────────────────────────────────────────────────────
head('9 · THE DATA');
if (all) {
  const seen = {}, dupes = [];
  all.forEach(r => { const k = r.section + ' :: ' + String(r.name).toLowerCase();
    if (seen[k]) { if (!dupes.includes(k)) dupes.push(k); } else seen[k] = 1; });
  if (dupes.length) warn('Same name, same room, twice (may be the versions system — READ IT)', dupes.length + '', dupes);
  else pass('No duplicate recipes');

  const noName = all.filter(r => !r.name || !String(r.name).trim());
  if (noName.length) fail('Recipes with NO NAME', noName.length + '');
  else pass('Every recipe has a name');

  const empty = r => { const i = r.ingredients;
    return !i || (Array.isArray(i) && !i.length) || (typeof i === 'string' && !i.trim()); };
  const noIng = all.filter(empty);
  const inVersions = noIng.filter(r => (r.versions||[]).some(v => (v.ingredients||[]).length));
  const trulyEmpty = noIng.filter(r => !(r.versions||[]).some(v => (v.ingredients||[]).length));
  if (inVersions.length) fail('Ingredients hidden inside versions[] — the FINDER cannot see these',
    inVersions.length + ' recipes',
    Object.entries(inVersions.reduce((a,r)=>(a[r.section]=(a[r.section]||0)+1,a),{}))
      .map(([s,n]) => s + ': ' + n));
  else pass('No recipe hides its food inside versions[]');
  if (trulyEmpty.length) fail('Recipes with NO INGREDIENTS ANYWHERE', trulyEmpty.length + '',
    trulyEmpty.slice(0,6).map(r => r.name + ' [' + r.section + ']'));
  else pass('Every recipe has ingredients somewhere');
}

// ── 10. THE TILL  (⚖️ Law 3) ─────────────────────────────────────────────
head('10 · MONEY & LAUNCH');
{
  const ai = [];
  for (const f of loadOrder) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    for (const m of src.matchAll(/functions\/claude/g)) {
      ai.push(f + ':' + src.slice(0, m.index).split('\n').length);
    }
  }
  if (ai.length) warn('Calls a LIVE PAID AI endpoint — every tap is on her bill', ai.length + ' call sites', ai);
  else pass('No live AI calls');

  const tier = /SWITCH TIER|TESTING\s*—\s*SWITCH/i.test(indexHtml) ||
    loadOrder.some(f => /SWITCH TIER/i.test(fs.readFileSync(path.join(ROOT, f), 'utf8')));
  if (tier) warn('THE TIER SWITCHER IS STILL IN THE APP', 'must NOT be in the DOM on 1 October');
  else pass('No tier switcher');
}

// ── RESOLVE THE SMOKE TEST, THEN THE VERDICT ─────────────────────────────
(async () => {
if (SMOKE_PROMISE) {
  const r = await SMOKE_PROMISE.catch(() => null);
  if (!r) warn('Smoke test could not complete');
  else if (r.broke.length) fail('Functions that FALL OVER when called', r.broke.length + ' of ' + r.n, r.broke);
  else pass('Every function survives being called', r.n + ' functions');
}

// ── VERDICT ──────────────────────────────────────────────────────────────
p('\n' + '═'.repeat(66));
if (RED.length === 0) {
  p('\x1b[1m\x1b[32m  🟢  GREEN.  ' + GREEN.length + ' checks passed. YOU MAY PUSH.\x1b[0m');
  if (AMBER.length) p('\x1b[33m      (' + AMBER.length + ' amber — worth a look, but not a blocker.)\x1b[0m');
} else {
  p('\x1b[1m\x1b[31m  🔴  RED.  ' + RED.length + ' problem(s). FIX BEFORE YOU PUSH.\x1b[0m');
  RED.forEach(t => p('\x1b[31m      · ' + t + '\x1b[0m'));
}
p('═'.repeat(66));
p('\x1b[2m  ⚖️ The doctor catches STRUCTURE. It cannot catch BEHAVIOUR.');
p('  Your fingers on live still close the bug. Law 2 stands.\x1b[0m\n');
process.exit(RED.length ? 1 : 0);
})();
