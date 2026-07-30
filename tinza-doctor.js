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

// ── 11. THE MOOD TAGS  (MF123 · ⚖️ Law 42 · Law 6) ───────────────────────
head('11 · DO THE MOOD TAGS POINT AT REAL FOOD?');
{
  // Reads the index built in §3 (`all`, line 87). It does NOT build a second one. ⚖️ Law 6.
  const TAGS = ctx && ctx.MOOD_TAGS;
  const favKey = ctx && ctx.tinzaStore && ctx.tinzaStore.favKey;
  if (!all || !all.length) warn('No index — cannot check the mood tags');
  else if (!TAGS) fail('MOOD_TAGS is not reachable — the mood tag store is gone',
    'sections/moodTags.js must load before sections/index.js');
  else if (typeof favKey !== 'function') fail('tinzaStore.favKey() is not reachable',
    'it is THE key builder for source:section:id — moods and favourites share it');
  else {
    // 🩸 THE KEY IS source:section:id. A key matching 0 records is a DEAD TAG (the dish
    // was renamed or moved room — the tag silently does nothing). A key matching 2+ means
    // the key shape has REGRESSED to something that collides: 19 bare ids collide across
    // 38 records, and a duplicate key in an object literal overwrites SILENTLY.
    // Either way the tag store is lying, and a lying document is a silent one. ⚖️ Law 3.
    const keyCount = {};
    all.forEach(r => { const k = favKey(r); keyCount[k] = (keyCount[k] || 0) + 1; });
    const keys = Object.keys(TAGS);
    const dead = keys.filter(k => !keyCount[k]);
    const ambiguous = keys.filter(k => keyCount[k] > 1);
    if (dead.length) fail('MOOD_TAGS keys that match NO recipe — DEAD TAGS', dead.length + ' of ' + keys.length,
      dead.map(k => k + '  → 0 records'));
    else if (ambiguous.length) fail('MOOD_TAGS keys that match MORE THAN ONE recipe', ambiguous.length + ' of ' + keys.length,
      ambiguous.map(k => k + '  → ' + keyCount[k] + ' records'));
    else pass('Every MOOD_TAGS key resolves to exactly one recipe', keys.length + ' tagged');

    // mood[] must be an ARRAY on every record — never null, never undefined.
    // ⚠️ [] is TRUTHY: any reader tests `.length`, never the array itself.
    const notArr = all.filter(r => !Array.isArray(r.mood));
    if (notArr.length) fail('Recipes whose mood is not an array', notArr.length + ' of ' + all.length,
      notArr.slice(0,6).map(r => r.name + ' [' + r.section + '] → ' + typeof r.mood));
    else pass('mood[] is an array on all ' + all.length + ' recipes', 'untagged = [] = on no shelf ⚖️ Law 45');
  }
}

// ── 12 · DO VESSELS SCALE IN A SLOT?  (MF142 · ⚖️ Rulings §10) ────────────
head('12 · DO VESSELS SCALE IN A SLOT?  (MF142 — the holder scales in a slot, never in prose)');
if (all && all.length) {
  const eLine = ctx && ctx.equipmentLine;
  const eContract = ctx && ctx.equipmentContract;
  if (typeof eLine !== 'function' || typeof eContract !== 'function') {
    fail('The equipment engine is GONE', 'equipmentLine / equipmentContract not reachable — the shared door is missing');
  } else {
    // PROVE the byte-identical guarantee: no equipment field → '' (no render, no drift).
    const silent = eLine({}, 4) === '' && eLine(undefined, 4) === ''
                && eLine({ equipment: [] }, 4) === '' && eContract({}, 24, 'cake', 3) === '';
    // PROVE it scales with the dial: 24 / per:12 → "2 ×"; 12 → "1 ×"; the >1 banner fires past one.
    const spec = { equipment: [{ n: '22cm springform tin', per: 12 }] };
    const counts = eLine(spec, 24).indexOf('2 × 22cm springform tin') > -1
                && eLine(spec, 12).indexOf('1 × 22cm springform tin') > -1
                && eContract(spec, 24, 'cheesecake', 2).indexOf('total for all 2.') > -1
                && eContract(spec, 12, 'cheesecake', 1) === '';
    if (!silent) fail('A recipe with NO equipment is NOT byte-identical', 'the renderer must return "" when the field is absent — else every existing page drifts');
    else if (!counts) fail('The vessel does not scale with the dial', 'ceil(scaledYield / per) is wrong, or the past-one contract banner is missing');
    else pass('Vessels scale in a slot — silent when absent, count up when present', 'MF142 engine live');

    // PROVE the holder SURVIVES THE DOOR (⚖️ MF144 regression guard). rec() + normalizeRecipe
    // once projected `equipment` away, so every finder/search/mood record opened through
    // recipeDetailFromResult lost its holder app-wide (Cottage Pie opened at 4, no dish line)
    // while direct openers were fine. Assert an authored holder still rides an allRecipes()
    // (door-built) record — if the passthrough is ever dropped again, this goes RED.
    const anyEquipped = (bakeSrc0 => bakeSrc0.find(r => Array.isArray(r.equipment) && r.equipment.length))((ctx && ctx.BAKES_RECIPES) || [])
                     || ((ctx && ctx.SUPPER_RECIPES) || []).find(r => Array.isArray(r.equipment) && r.equipment.length);
    if (anyEquipped && all && all.length) {
      const door = all.find(r => r.id === anyEquipped.id);
      if (!door) warn('Door-survival check skipped — sample equipped record not in the index', anyEquipped.id);
      else if (!Array.isArray(door.equipment) || !door.equipment.length)
        fail('The equipment field is DROPPED at the door', 'rec()/normalizeRecipe must forward `equipment` — ' + anyEquipped.name + ' has a holder in source but loses it through allRecipes()');
      else pass('The holder survives the door (rec → normalizeRecipe → allRecipes)', anyEquipped.name);
    }

    // ── COVERAGE · MF144 PHASE C ────────────────────────────────────────
    // ⚖️ THE OLD GUARD READ `BAKES_RECIPES` ONLY — and that is exactly how the
    // bare twins survived a green board. The library keeps the SAME DISH as
    // separate records in different rooms; the Phase B pass tagged the NAMED
    // record and every cross-room copy stayed bare, silently. Melktert carried
    // a holder in bakes and none in World Kitchen or Events. A room-blind
    // watcher cannot see a room-crossing bug. ⚖️ Law 42 — the ratchet.
    //
    // Now spans EVERY room, and splits the finding in two:
    //   SPLIT    → RED. A twin of this dish HAS a holder and this copy does not.
    //              The dish is PROVEN to need one, so a bare copy is a BUG —
    //              never a pending authoring decision.
    //   ALL-BARE → WARN. Holder-shaped, but no copy anywhere has one. Genuinely
    //              authoring-pending (a Fable pass), so it stays a warning.
    var AUD = null;
    try { AUD = require('./Tools/tinza-holder-audit.js'); } catch (e) { AUD = null; }
    if (!AUD || typeof AUD.analyse !== 'function') {
      // ⚖️ MF135 — a watcher that swallows its own failure cannot watch. If the
      // audit module is gone, coverage is UNCHECKED, and unchecked must be LOUD.
      fail('The holder-coverage audit module is MISSING',
        'Tools/tinza-holder-audit.js — cross-room holder coverage is now UNCHECKED');
    } else {
      var doorAll = [];
      try { doorAll = (ctx && ctx.allRecipes) ? ctx.allRecipes() : []; } catch (e) { doorAll = []; }
      var rep = AUD.analyse(doorAll);
      var bareCopies = rep.split.reduce(function (n, x) { return n + x.bare.length; }, 0);
      if (bareCopies) {
        fail('BARE TWINS — a copy of a holder-carrying dish has NO holder',
          bareCopies + ' bare copies across ' + rep.split.length + ' dishes · the dish is proven, the copy is a bug',
          rep.split.map(function (x) {
            return x.eq[0].name + '   ✓ ' + AUD.loc(x.eq[0]) + '   ✗ ' + x.bare.map(AUD.loc).join(' , ');
          }));
      } else {
        pass('No bare twins — every copy of a holder-carrying dish carries it too', 'all rooms agree');
      }
      var cand = rep.allBare.reduce(function (n, x) { return n + x.g.length; }, 0);
      if (cand) {
        warn('Holder-shaped dishes with no holder anywhere — authoring pending (Fable, not a gate)',
          cand + ' records across ' + rep.allBare.length + ' dishes · run  node Tools/tinza-holder-audit.js');
      } else {
        pass('Every holder-shaped dish carries a holder', 'authoring complete → promote this WARN to a gate');
      }
    }
  }
}

// ── RESOLVE THE SMOKE TEST, THEN THE VERDICT ─────────────────────────────
(async () => {
if (SMOKE_PROMISE) {
  const r = await SMOKE_PROMISE.catch(() => null);
  if (!r) warn('Smoke test could not complete');
  else if (r.broke.length) fail('Functions that FALL OVER when called', r.broke.length + ' of ' + r.n, r.broke);
  else pass('Every function survives being called', r.n + ' functions');
}


// ══ 13 · DOES THE PORTION BRAIN INFLATE A CONDIMENT INTO A PORTION? ═══ Law 42 ══
head('13 · IS ANY WORLD KITCHEN DISH SCALED INTO NONSENSE?  (30 Jul — the 160g of shrimp paste)');
p('  \x1b[2m    Sambal Terasi rendered "160g shrimp paste · R529 pp". The cost was honest —');
p('       it correctly priced what the qty box displayed. wkEffectiveMult had stretched a');
p('       30g condiment onto a 180g staple plate. ⚖️ Law 42: it cannot walk in again.\x1b[0m');
{
  const mult = ctx && ctx.wkEffectiveMult;
  const parse = ctx && ctx.wkParseIngredients;
  if (typeof mult !== 'function' || typeof parse !== 'function') {
    fail('CANNOT REACH wkEffectiveMult — THIS CHECK IS NOT PROTECTING ANYTHING',
      '\n      \x1b[2mA 0 here would be a green tick over a function never called. Law 54b.\x1b[0m');
  } else {
    // Read the WK arrays straight off ctx, the way checks 11 and 12 read their engines.
    // ⚠️ allRecipes() was tried first and returned 0 here — a filter over an empty list
    // would have printed a triumphant green tick over nothing. Law 54b: the check refuses
    // to report rather than pass on an empty set, which is exactly what it did.
    const wk = [];
    Object.keys(ctx).forEach(k => {
      if (!/^WK_[A-Z_]+$/.test(k) || !Array.isArray(ctx[k])) return;
      ctx[k].forEach(r => { if (r && r.course && typeof r.ingredients === 'string') wk.push(r); });
    });
    const ap = (ctx && typeof ctx.wkAppetite === 'function') ? ctx.wkAppetite() : { mult: 1 };
    const blown = [];
    wk.forEach(r => {
      let m; try { m = mult(r, 1, ap); } catch (e) { return; }
      if (m > 3) blown.push(r.id + ' ×' + Math.round(m * 10) / 10);
    });
    if (!wk.length) {
      fail('NO WORLD KITCHEN RECORDS REACHED THIS CHECK', 'it found nothing to measure — that is not a pass');
    } else if (blown.length) {
      fail(blown.length + ' DISH(ES) SCALED MORE THAN 3x — the card will show an absurd amount and price it honestly',
        '\n      ' + blown.slice(0, 10).join(' · ') +
        (blown.length > 10 ? '\n      \x1b[2m… and ' + (blown.length - 10) + ' more\x1b[0m' : '') +
        '\n      \x1b[2mEither the dish declares itself (type: condiment/sauce/pickle/dip/relish)' +
        '\n      or the clamp in wkEffectiveMult has been removed. Law 20 — a wrong number renders.\x1b[0m');
    } else {
      pass('No World Kitchen dish is inflated past 3x', wk.length + ' records measured through the real wkEffectiveMult');
    }
  }
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
