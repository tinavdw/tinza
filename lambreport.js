// lambreport.js — READ-ONLY. Names every ingredient line that resolves through the
// `"lamb": "lamb neck"` alias, and measures what each would fall through to if that
// alias were cut. Nothing is written, deleted or repointed.
//
// ⚖️ It does NOT reimplement pricing. Same harness as pricecheck.js: prices.js +
// core.js + worldkitchen.js into one vm sandbox, then the APP'S OWN wkParseIngredients()
// and wkPriceLookup() are called. The fallthrough column is measured by DELETING the
// alias inside the sandbox and asking the real lookup again — not by reasoning about it.
//
// ⚖️ BORN-RED PROOF (`--selftest`): the doubanjiang scar. A probe that cannot return a
// one is a blank instrument. Run the selftest before believing any zero.

const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = __dirname;

function loadGate(extraFiles) {
  const need = ['sections/prices.js', 'sections/core.js', 'sections/worldkitchen.js'].concat(extraFiles || []);
  const sandbox = {
    window: {}, document: undefined, console: { log(){}, info(){}, warn(){}, error(){} },
    localStorage: { getItem(){ return null; }, setItem(){}, removeItem(){} },
    navigator: {}, location: { href:'', search:'' }, setTimeout(){}, clearTimeout(){}
  };
  sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);
  for (const f of need) {
    if (!fs.existsSync(path.join(ROOT, f))) { console.error('🔴 missing ' + f); process.exit(1); }
    try { vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f }); } catch (e) {}
  }
  const ok = vm.runInContext(`(typeof wkParseIngredients==='function' && typeof wkPriceLookup==='function' && typeof PRICE_ALIAS!=='undefined')`, ctx);
  if (!ok) { console.error('🔴 gate incomplete — refusing to report.'); process.exit(1); }
  return ctx;
}

const wkLook  = (ctx, n) => vm.runInContext('wkPriceLookup(' + JSON.stringify(n) + ')', ctx);
const coreLook= (ctx, n) => vm.runInContext("(typeof priceOf==='function'?priceOf(" + JSON.stringify(n) + "):null)", ctx);
const resolve = coreLook;
const parse   = (ctx, s) => vm.runInContext('wkParseIngredients(' + JSON.stringify(s) + ')', ctx);

// ── harvest every ingredient line in the corpus, with its address ───────────────
function harvest(ctx, files) {
  const lines = [];
  for (const f of files) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    const s2 = { window:{}, document:undefined, console:{log(){},warn(){},error(){},info(){}},
                 localStorage:{getItem(){return null;},setItem(){},removeItem(){}},
                 navigator:{}, location:{href:'',search:''}, setTimeout(){}, clearTimeout(){} };
    s2.globalThis = s2;
    const c2 = vm.createContext(s2);
    try { vm.runInContext(src, c2, { filename:f }); } catch(e) {}
    const pools = [];
    for (const k of Object.keys(s2)) { if (Array.isArray(s2[k])) pools.push(s2[k]); }
    for (const k of Object.keys(s2.window||{})) { if (Array.isArray(s2.window[k])) pools.push(s2.window[k]); }
    const seen = new Set();
    for (const pool of pools) for (const r of pool) {
      if (!r || typeof r !== 'object') continue;
      const id = r.id || r.name; if (!id || seen.has(id)) continue; seen.add(id);
      const push = (str, where) => { if (typeof str === 'string' && str) lines.push({ file:f, id, where, str }); };
      if (typeof r.ingredients === 'string') push(r.ingredients, 'base');
      else if (Array.isArray(r.ingredients)) r.ingredients.forEach(i => push(typeof i==='string'?i:(i&&i.n), 'base[]'));
      (r.versions||[]).forEach(v => {
        const d = v.delta||{};
        (d.addIng ||[]).forEach(x => push(x.item, 'v:'+v.name+' addIng'));
        (d.swapIng||[]).forEach(x => push(x.to,   'v:'+v.name+' swapIng→'));
        (d.removeIng||[]).forEach(x => push(x.item,'v:'+v.name+' removeIng'));
        if (typeof v.ingredients === 'string') push(v.ingredients, 'v:'+v.name+' ingredients');
      });
    }
  }
  return lines;
}

const FILES = fs.readdirSync(path.join(ROOT,'sections')).filter(f=>f.endsWith('.js')).map(f=>'sections/'+f);

// ── SELFTEST: prove the probe can return a one ─────────────────────────────────
if (process.argv[2] === '--selftest') {
  const ctx = loadGate();
  let fails = 0;
  const hit = resolve(ctx, 'lamb');
  console.log('PROOF 1 · does the bare word `lamb` resolve at all?');
  console.log('   →', JSON.stringify(hit));
  if (!hit || !/neck/.test(JSON.stringify(hit))) { console.log('   🔴 expected it to land on lamb neck'); fails++; }
  else console.log('   ✅ it lands on lamb neck — the alias is LIVE');

  console.log('PROOF 2 · can the parser produce the name `lamb` from a real line shape?');
  const p = parse(ctx, '300g lamb, sliced paper-thin');
  console.log('   →', JSON.stringify(p));
  const names = (p||[]).map(x => (x.name||x.n||'').toLowerCase());
  if (!names.some(n=>/lamb/.test(n))) { console.log('   🔴 parser did not surface a lamb name'); fails++; }
  else console.log('   ✅ the parser surfaces it — a bare line IS visible to this probe');

  console.log('PROOF 3 · with the alias cut, does the answer CHANGE? (proves the fallthrough column measures)');
  vm.runInContext('delete PRICE_ALIAS["lamb"];', ctx);
  const after = resolve(ctx, 'lamb');
  console.log('   →', JSON.stringify(after));
  if (JSON.stringify(after) === JSON.stringify(hit)) { console.log('   🔴 unchanged — the cut is not being measured'); fails++; }
  else console.log('   ✅ the answer moved — the cut is real and measurable');

  console.log(fails ? `\n🔴 ${fails} proof(s) failed — do not trust this tool.` : '\n✅ 3/3 born-RED proofs pass. Counts from this tool are real.');
  process.exit(fails?1:0);
}

// ── THE REPORT ─────────────────────────────────────────────────────────────────
const ctxA = loadGate();               // alias LIVE
const ctxB = loadGate();               // alias CUT
vm.runInContext('delete PRICE_ALIAS["lamb"];', ctxB);

const all = harvest(ctxA, FILES);
const rows = [];
for (const L of all) {
  if (!/lamb/i.test(L.str)) continue;
  let items; try { items = parse(ctxA, L.str) || []; } catch(e) { continue; }
  for (const it of items) {
    const nm = it.name || it.n || ''; if (!nm) continue;
    const core = coreLook(ctxA, nm);
    if (!core || core.key !== 'lamb neck') continue;   // resolves THROUGH the alias in core
    const coreCut = coreLook(ctxB, nm);
    const wk      = wkLook(ctxA, nm);
    rows.push({ file:L.file.replace('sections/',''), id:L.id, where:L.where, written:nm,
      core:    'lamb neck R' + core.price,
      coreCut: coreCut ? (coreCut.key + ' R' + coreCut.price) : 'ABSENT - unpriced',
      wk:      wk ? (wk.key + ' R' + wk.price) : 'ABSENT - unpriced' });
  }
}

const isWK = f => /^wk_/.test(f);
console.log('LINES THAT RESOLVE THROUGH `"lamb": "lamb neck"` IN THE CORE ENGINE - ' + rows.length + ' found');
console.log('corpus: ' + FILES.length + ' section files - ' + all.length + ' ingredient strings harvested');
console.log('columns: [core priceOf now] | [core priceOf if alias cut] | [wkPriceLookup TODAY]\n');
const byFile = {};
rows.forEach(r => (byFile[r.file] = byFile[r.file] || []).push(r));
for (const f of Object.keys(byFile).sort()) {
  console.log('-- ' + f + '  (' + byFile[f].length + ')' + (isWK(f) ? '   <-- WORLD KITCHEN: costed by wkPriceLookup, NOT by priceOf' : ''));
  byFile[f].forEach(r => {
    console.log('   ' + r.id + '  [' + r.where + ']');
    console.log('      "' + r.written + '"');
    console.log('        core now: ' + r.core + '   |  core if cut: ' + r.coreCut + '   |  WK today: ' + r.wk);
  });
  console.log('');
}
const wkRows = rows.filter(r=>isWK(r.file));
const wkDead = wkRows.filter(r=>/ABSENT/.test(r.wk));
const coreRows = rows.filter(r=>!isWK(r.file));
console.log('SUMMARY');
console.log('  total lines            : ' + rows.length);
console.log('  in wk_*.js             : ' + wkRows.length + '  (of these, ' + wkDead.length + ' are ALREADY UNPRICED TODAY - the alias never reaches them)');
console.log('  in core/meals/events   : ' + coreRows.length + '  (these DO use the alias and DO change if it is cut)');
console.log('  would go unpriced if cut, core path: ' + rows.filter(r=>/ABSENT/.test(r.coreCut)).length);
