// pricecheck.js — the mechanical watcher for price keys.
//
//   node pricecheck.js japan                  # check a whole country file
//   node pricecheck.js japan batch4.js        # check a batch before it is merged
//   node pricecheck.js --selftest             # born-RED proofs
//
// WHY THIS EXISTS (29 Jul 2026):
// MF152 appends were being written by grepping MF152 itself — checking a to-do list
// against itself. Three separate failures came out of that in one session:
//   1. six keys listed as NEW were already priced (salmon R680, beef chuck R130, …)
//   2. four keys parked as "already there" were absent everywhere (daikon, rice vinegar, …)
//   3. keys already on MF152's canonical head WITH Tina's sourced prices were
//      "re-discovered" by an append that never read the head
// Tina caught all of it by hand, on one line. That is the tierBar lesson again:
// A SILENT HOLE NEEDS A MECHANICAL WATCHER, NOT SHARPER EYES.
//
// THE ONE DESIGN DECISION THAT MATTERS:
// This tool does NOT reimplement price lookup. It loads sections/prices.js,
// sections/core.js and sections/worldkitchen.js in a sandbox and calls the APP'S OWN
// wkParseIngredients() / wkCleanName() / wkPriceLookup(). A watcher with its own
// private idea of how pricing works measures a program that does not exist — which is
// exactly how "30g apple" vs the key `apples` stayed invisible. Same rule as
// PARSE-NEVER-REGEX: read the real thing, do not model it.
//
// HONEST LIMIT, stated the way merge.js states its own:
// This catches PRESENCE, never CORRECTNESS. It can tell you an ingredient will not
// price. It cannot tell you R680/kg salmon is the wrong salmon, that a key is stale,
// or that an alias is a lie. Only Tina's eyes close those.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const COUNTRIES = {
  china:     { varName: 'WK_CHINA',     file: 'wk_china.js' },
  japan:     { varName: 'WK_JAPAN',     file: 'wk_japan.js' },
  indonesia: { varName: 'WK_INDONESIA', file: 'wk_indonesia.js' },
  thailand:  { varName: 'WK_THAILAND',  file: 'wk_thailand.js' },
  vietnam:   { varName: 'WK_VIETNAM',   file: 'wk_vietnam.js' }
};

const REPO_ROOT = process.env.TINZA_REPO || __dirname;
// ⚠️ FIX (29 Jul): MF152 previously resolved off __dirname while the gate files resolved off
// repoRoot — two path roots. Run from sections/, readMF152() returned {ok:false} and REPORTED
// ANYWAY, re-discovering every already-sourced key as "new". Both now share one root.
const MF152 = path.join(REPO_ROOT, 'reference', 'MF152_ASIA_PRICE_KEYS.md');

// ── LOAD THE REAL GATE ────────────────────────────────────────────────────────
// All three files, in the order the app loads them, into one shared sandbox so the
// functions close over the real PRICE_DB / WK_ALIAS / PRICE_ALIAS. If any of the three
// is missing we STOP — a partial gate silently under-reports, which is the failure mode
// this whole tool exists to kill.
function loadGate(repoRoot) {
  const need = ['sections/prices.js', 'sections/core.js', 'sections/worldkitchen.js'];
  const missing = need.filter(f => !fs.existsSync(path.join(repoRoot, f)));
  if (missing.length) {
    console.error('🔴 price gate incomplete — missing: ' + missing.join(', '));
    console.error('   The gate is prices.js AND both alias maps. Two of three is not a check.');
    process.exit(1);
  }
  const sandbox = {
    window: {}, document: undefined, console: { log(){}, info(){}, warn(){}, error(){} },
    localStorage: { getItem(){ return null; }, setItem(){}, removeItem(){} },
    navigator: {}, location: { href: '', search: '' }, setTimeout(){}, clearTimeout(){}
  };
  sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);
  for (const f of need) {
    const src = fs.readFileSync(path.join(repoRoot, f), 'utf8');
    // Data + helper definitions are what we want. A section file may reference DOM on
    // load; we swallow that and verify afterwards that the pieces we need arrived.
    try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { /* tolerated — verified below */ }
  }
  const probe = vm.runInContext(`({
    PRICE_DB:      typeof PRICE_DB      !== 'undefined' ? PRICE_DB      : null,
    WK_ALIAS:      typeof WK_ALIAS      !== 'undefined' ? WK_ALIAS      : null,
    PRICE_ALIAS:   typeof PRICE_ALIAS   !== 'undefined' ? PRICE_ALIAS   : null,
    hasParse:      typeof wkParseIngredients === 'function',
    hasLookup:     typeof wkPriceLookup      === 'function',
    hasClean:      typeof wkCleanName        === 'function',
    hasWater:      typeof wkIsWater          === 'function'
  })`, ctx);

  const gaps = [];
  if (!probe.PRICE_DB)  gaps.push('PRICE_DB');
  if (!probe.WK_ALIAS)  gaps.push('WK_ALIAS (worldkitchen.js)');
  if (!probe.PRICE_ALIAS) gaps.push('PRICE_ALIAS (core.js)');
  if (!probe.hasParse)  gaps.push('wkParseIngredients()');
  if (!probe.hasLookup) gaps.push('wkPriceLookup()');
  if (gaps.length) {
    console.error('🔴 gate loaded but these did not arrive: ' + gaps.join(' · '));
    console.error('   Refusing to report — a check that silently lost half the gate is worse than no check.');
    process.exit(1);
  }
  return { ctx, probe };
}

// Call the app's own functions inside the sandbox.
function parseIngredients(ctx, str) {
  return vm.runInContext('wkParseIngredients(' + JSON.stringify(str) + ')', ctx);
}
function lookup(ctx, name) {
  return vm.runInContext('wkPriceLookup(' + JSON.stringify(name) + ')', ctx);
}
function isWater(ctx, name) {
  return vm.runInContext('typeof wkIsWater === "function" ? wkIsWater(' + JSON.stringify(name) + ') : false', ctx);
}

// ── WHAT MF152 ALREADY SAYS ───────────────────────────────────────────────────
// Read, never write. The point is to spot a key we are about to "discover" that Tina
// already sourced a price for — the daikon/shiitake failure. Any `key` in backticks
// counts as recorded; a row carrying an R-figure counts as PRICED.
function readMF152() {
  if (!fs.existsSync(MF152)) return { recorded: new Map(), ok: false };
  const recorded = new Map();
  for (const line of fs.readFileSync(MF152, 'utf8').split('\n')) {
    const priced = /R\s?[0-9]/.test(line);
    let m; const re = /`([^`]+)`/g;
    while ((m = re.exec(line)) !== null) {
      const k = m[1].trim().toLowerCase();
      if (!k || k.length > 40 || /[(){}]/.test(k)) continue;
      if (priced || !recorded.has(k)) recorded.set(k, { priced, line: line.trim().slice(0, 150) });
    }
  }
  return { recorded, ok: true };
}

// ── COLLECT EVERY INGREDIENT THE RECORDS ACTUALLY USE ────────────────────────
// Base line AND every version delta. A budget fork's swapped-in ingredient is an
// ingredient; missing those is how a fork ships with no cost while the classic prices fine.
function collectIngredients(ctx, records) {
  const seen = new Map();
  const note = (raw, where, id) => {
    if (!raw) return;
    for (const item of parseIngredients(ctx, raw)) {
      const nm = String(item.name || '').trim();
      if (!nm) continue;
      const key = nm.toLowerCase();
      if (!seen.has(key)) seen.set(key, { name: nm, where: new Set(), records: new Set(), units: new Set() });
      seen.get(key).where.add(where);
      seen.get(key).records.add(id);
      if (item.unit) seen.get(key).units.add(String(item.unit).toLowerCase());
    }
  };
  for (const r of records) {
    if (!r || !r.id) continue;
    note(r.ingredients, 'base', r.id);
    for (const v of (r.versions || [])) {
      const d = v && v.delta; if (!d) continue;
      for (const x of (d.addIng    || [])) note(x.item, 'v:' + (v.name || '?'), r.id);
      for (const x of (d.swapIng   || [])) note(x.to,   'v:' + (v.name || '?'), r.id);
      // `from` is deliberately NOT collected — it is being removed, not bought.
    }
  }
  return seen;
}

// ── CLASSIFY — THREE STATES, NOT TWO ─────────────────────────────────────────
// The first version of this tool asked "does it price?" and got the answer wrong in a
// way that mattered, because wkPriceLookup() has a broad fallback: alias → deplural →
// LONGEST KEY THAT APPEARS AS A WHOLE WORD INSIDE THE NAME. That last rung means almost
// everything "prices". "potato starch" finds `potato` R18. "sushi rice" finds `rice` R27.
// "silken tofu" finds `tofu` R250 — the exact collision MF152 says never to make.
//
// ⚖️ THE LADDER, and it is the MF137 ladder one rung further on:
//    a missing price is bad · a duplicate key is worse · a WRONG price is worst,
//    because a missing cost renders blank and announces itself, and a wrong cost
//    renders as a number and looks right.
//
// Two flags, both mechanical — no judgement, so neither can drift:
//   HARD · a count-priced key (`X_each`) matched an ingredient measured in g/ml.
//          This is the apple bug: "30g apple" → `apple_each` R5 → costed as 30 apples.
//   SOFT · the resolved key is a strict substring of the ingredient name, i.e. the
//          longest-whole-word fallback fired rather than a real key or a real alias.
function classify(ctx, ingredients, mf) {
  const out = { exact: [], fallback: [], absent: [], water: [] };
  for (const [, info] of ingredients) {
    if (isWater(ctx, info.name)) { out.water.push(info); continue; }

    const hit  = lookup(ctx, info.name);
    const rec  = mf.recorded.get(info.name.toLowerCase()) || null;
    const clean = String(info.name).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    const row  = { name: info.name, records: Array.from(info.records), where: Array.from(info.where), hit, mf: rec, flags: [] };

    if (!hit) { out.absent.push(row); continue; }

    const key = String(hit.key || '').toLowerCase();
    // HEAD CLAUSE = the ingredient itself, everything before the first comma.
    // TINZA INGREDIENT STANDARD says prep belongs in the method, but real lines carry it
    // ("beef chuck, cut into 3cm cubes"), so the head clause is the honest unit to judge.
    //
    // ⚠️ IT MUST BE TAKEN FROM THE RAW NAME, BEFORE CLEANING. wkCleanName() strips commas,
    // so splitting the cleaned string on ',' is a silent no-op — which is exactly how
    // "coarse salt, for curing the salmon" → `salmon` R680 survived one round longer than
    // it should have. A check that quietly does nothing is worse than no check.
    const head = String(info.name).split(',')[0]
      .toLowerCase().replace(/\([^)]*\)/g, ' ')
      .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

    if (hit.per === 'count' && (info.units.has('g') || info.units.has('ml'))) {
      row.flags.push('HARD|quantity is in ' + Array.from(info.units).join('/') +
                     ' but `' + key + '` is priced per COUNT — the amount is read as a tally');
    }
    if (key && !head.includes(key) && clean.includes(key)) {
      // The lookup found its key ONLY in the prep/note tail. This is the coarse-salt bug:
      // "coarse salt, for curing the salmon" → `salmon` R680. Catastrophic and invisible.
      row.flags.push('HARD|`' + key + '` appears only in the note, not in the ingredient ("' + head + '")');
    } else if (key && head !== key && head !== key + 's' && key !== head + 's' && head.includes(key)) {
      // A qualifier sits next to the key. Sometimes harmless (chicken thighs), sometimes a
      // different product entirely (potato starch, sushi rice, silken tofu). Judgement — so
      // it reports and does not block, the same split merge.js uses for budget-leads.
      row.flags.push('REVIEW|`' + key + '` R' + hit.price + ' but the ingredient is "' + head + '"');
    }

    (row.flags.length ? out.fallback : out.exact).push(row);
  }
  const byName = (a, b) => a.name.localeCompare(b.name);
  out.exact.sort(byName); out.fallback.sort(byName); out.absent.sort(byName);
  return out;
}

// ── SELF-TEST — every assertion proven born-RED ───────────────────────────────
// Same discipline as merge.js: a rung that has never been seen to fail is a rung
// nobody has tested. Each case below breaks one thing on purpose and demands a catch.
function selftest(repoRoot) {
  const { ctx } = loadGate(repoRoot);
  let pass = 0, fail = 0;
  const check = (label, got, want) => {
    const ok = got === want;
    console.log((ok ? '  ✅ ' : '  ❌ ') + label + (ok ? '' : '   got=' + got + ' want=' + want));
    ok ? pass++ : fail++;
  };

  console.log('\n🔬 BORN-RED PROOFS — each asserts the tool CATCHES a real failure\n');

  const flagsFor = (name, unit) => {
    const ing = new Map([[name.toLowerCase(), { name, where: new Set(['t']), records: new Set(['t']), units: new Set(unit ? [unit] : []) }]]);
    const res = classify(ctx, ing, { recorded: new Map() });
    if (res.absent.length)   return 'ABSENT';
    if (res.fallback.length) return res.fallback[0].flags.map(f => f.split('|')[0]).join('+');
    return 'EXACT';
  };

  // ── GREEN CONTROLS ── if these fail, everything below is noise.
  check('GREEN · "salmon" resolves exactly', flagsFor('salmon', 'g'), 'EXACT');
  check('GREEN · "chickpeas" resolves exactly', flagsFor('chickpeas', 'g'), 'EXACT');

  // ── RED 1 · THE APPLE BUG. The one that started this.
  // "30g apple" finds `apple_each` R5 and prices 30 GRAMS as 30 APPLES.
  // Proven RED by construction: it resolves, so a presence-only check calls it fine.
  check('RED · gram-measured "apple" is flagged HARD', flagsFor('apple', 'g'), 'HARD');
  check('  and with no unit it is not HARD-flagged', flagsFor('apple', null) !== 'HARD', true);

  // ── RED 2 · THE SUBSTRING FALLBACK. Everything "prices"; most of it prices wrong.
  // ⚠️ 'potato starch' was RETIRED from this list 29 Jul 2026 — it now has its own
  //    exact key at R120/kg, so it correctly reports EXACT and can no longer prove
  //    the fallback. A proof whose subject gets FIXED goes stale and starts crying
  //    wolf on every run; it is repointed at a live case, never deleted quietly.
  //    Replacement: 'glutinous rice flour' -> rice R27, still live in Japan.
  [['glutinous rice flour','rice'], ['sushi rice','rice'], ['silken tofu','tofu'],
   ['rice vinegar','vinegar'], ['fresh shiitake mushrooms','mushrooms']].forEach(([n]) => {
    check('RED · "' + n + '" flagged REVIEW (qualifier, not absent)', flagsFor(n, 'g'), 'REVIEW');
  });

  // ── RED 3 · GENUINE HOLES still report as absent, not swallowed by the fallback.
  ['daikon', 'warabi starch', 'panko', 'kombu', 'katsuobushi'].forEach(k => {
    check('RED · "' + k + '" reports ABSENT', flagsFor(k, 'g'), 'ABSENT');
  });

  // ── RED 4 · THE PARSER must reach into a real line, not match raw text.
  const parsed = parseIngredients(ctx, '90g Japanese short-grain rice (sushi rice), raw · 30g apple');
  check('parser splits on · into 2 items', parsed.length, 2);
  check('parser strips the leading quantity', /^90/.test(parsed[0].name || ''), false);
  check('parser keeps the unit for the HARD flag', parsed[1].unit, 'g');

  // ── RED 5 · DELTAS must be walked, or every budget fork is invisible.
  const fake = [{ id: 'x', ingredients: '100g salmon', versions: [
    { name: 'B', delta: { addIng: [{ item: '50g warabi starch' }] } } ] }];
  check('RED · delta addIng IS collected',
        Array.from(collectIngredients(ctx, fake).keys()).some(k => /warabi/.test(k)), true);

  // ── RED 6 · a swap's `from` must NOT be collected — removed, not bought.
  // Isolated on purpose: the swapped-OUT item must NOT appear in the base line, or the
  // test proves nothing. (First draft put `beef chuck` in both and "failed" — the fixture
  // was wrong, not the code. Worth keeping the note: a test that cannot fail for the
  // stated reason is not a rung.)
  const fake2 = [{ id: 'y', ingredients: '100g salmon', versions: [
    { name: 'B', delta: { swapIng: [{ from: '100g salmon', to: '100g chickpeas' }] } } ] }];
  const k2 = Array.from(collectIngredients(ctx, fake2).keys());
  check('swap `to` collected', k2.some(k => /chickpea/.test(k)), true);
  check('swap `from` still counted (it IS in the base line)', k2.some(k => /salmon/.test(k)), true);
  const fake3 = [{ id: 'z', ingredients: '100g chickpeas', versions: [
    { name: 'B', delta: { swapIng: [{ from: '100g warabi starch', to: '100g cornflour' }] } } ] }];
  const k3 = Array.from(collectIngredients(ctx, fake3).keys());
  check('RED · a `from` absent from the base line is NOT collected', k3.some(k => /warabi/.test(k)), false);

  // ── RED 7 · water never reported as an unpriced ingredient.
  check('water excluded', isWater(ctx, 'cold water'), true);

  console.log('\n' + (fail ? '🔴 ' + fail + ' FAILED' : '✅ all ' + pass + ' proofs pass') + '\n');
  process.exit(fail ? 1 : 0);
}

// ── REPORT ───────────────────────────────────────────────────────────────────
function report(res, mf, label) {
  console.log('\n════ PRICE CHECK · ' + label + ' ════\n');

  console.log('✅ EXACT — ' + res.exact.length + ' ingredients hit a real key or a real alias.\n');

  const hard   = res.fallback.filter(r => r.flags.some(f => f.startsWith('HARD')));
  const review = res.fallback.filter(r => !r.flags.some(f => f.startsWith('HARD')));

  console.log('🔴 WRONG PRODUCT — ' + hard.length + ' ingredients price as something they are not.');
  console.log('   A missing cost renders blank and announces itself. A WRONG cost renders as a');
  console.log('   number and looks correct. This is the worst rung on the ladder.\n');
  hard.forEach(r => {
    console.log('   🔴 "' + r.name + '"');
    console.log('        → ' + r.hit.key + ' R' + r.hit.price + ' (' + r.hit.per + ')   [' + r.records.join(', ') + ']');
    r.flags.filter(f => f.startsWith('HARD')).forEach(f => console.log('        ' + f.split('|')[1]));
  });
  if (!hard.length) console.log('   (none)');
  console.log('');

  console.log('🟠 REVIEW — ' + review.length + ' resolve via a qualifier. Often fine, sometimes a different product.\n');
  review.forEach(r => console.log('   · ' + (r.name.split(',')[0]).padEnd(38) + '→ ' + r.hit.key + ' R' + r.hit.price));
  console.log('');

  console.log('🔵 WILL NOT PRICE AT ALL — ' + res.absent.length + ' (silent holes: no cost renders)\n');
  // Report by HEAD CLAUSE, deduped. "carrot, cut into chunks" and "carrot, in matchsticks"
  // are one shopping decision, not two; listing them twice makes a 41-line list out of a
  // 20-line problem and trains the reader to skim. Same reason merge.js prints the §26
  // debt as one line with a count.
  const byHead = new Map();
  for (const r of res.absent) {
    const h = String(r.name).split(',')[0].trim().toLowerCase();
    // Re-look-up MF152 against the HEAD, not the full name. Looking it up against
    // "daikon, finely grated" finds nothing and reports `daikon` as a fresh discovery —
    // which is precisely the failure this tool was built to stop, reproduced inside the
    // tool itself. Caught on the first real run.
    if (!byHead.has(h)) byHead.set(h, { ...r, name: String(r.name).split(',')[0].trim(),
                                        mf: r.mf || mf.recorded.get(h) || null, records: new Set() });
    r.records.forEach(x => byHead.get(h).records.add(x));
  }
  res.absent = Array.from(byHead.values())
    .map(r => ({ ...r, records: Array.from(r.records) }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const already = res.absent.filter(r => r.mf && r.mf.priced);
  const listed  = res.absent.filter(r => r.mf && !r.mf.priced);
  const fresh   = res.absent.filter(r => !r.mf);
  if (already.length) {
    console.log('   📌 ALREADY ON MF152 WITH A SOURCED PRICE — do NOT re-discover (' + already.length + '):');
    already.forEach(r => console.log('      · ' + r.name + '   [' + r.records.join(', ') + ']'));
    console.log('      ↳ Tina already sourced these. They need APPLYING, not listing again.\n');
  }
  if (listed.length) {
    console.log('   📝 ON MF152, no price attached yet (' + listed.length + '):');
    listed.forEach(r => console.log('      · ' + r.name + '   [' + r.records.join(', ') + ']'));
    console.log('');
  }
  if (fresh.length) {
    console.log('   ➕ GENUINELY NEW — not priced, not on MF152 (' + fresh.length + '):');
    fresh.forEach(r => console.log('      · ' + r.name + '   [' + r.records.join(', ') + ']'));
    console.log('');
  }

  console.log('── SUMMARY ──');
  console.log('   exact ' + res.exact.length + ' · wrong-product risk ' + res.fallback.length +
              ' · absent ' + res.absent.length +
              '  (sourced ' + already.length + ' · listed ' + listed.length + ' · new ' + fresh.length + ')');
  console.log('   HONEST LIMIT: presence and shape only. It cannot tell you R680 is the wrong');
  console.log('   salmon, that a price is stale, or that an exact key is the wrong product.\n');
  return { already, listed, fresh, fallback: res.fallback };
}

// ── CLI ──────────────────────────────────────────────────────────────────────
function main() {
  const args = process.argv.slice(2);
  const repoRoot = REPO_ROOT;

  if (args[0] === '--selftest') return selftest(repoRoot);

  const countryArg = (args[0] || '').toLowerCase();
  const cfg = COUNTRIES[countryArg];
  if (!cfg) {
    console.error('usage: node pricecheck.js <country> [batchfile.js]   |   node pricecheck.js --selftest');
    console.error('known countries: ' + Object.keys(COUNTRIES).join(' · '));
    process.exit(1);
  }

  const { ctx } = loadGate(repoRoot);
  const mf = readMF152();
  if (!mf.ok) console.log('⚠️  MF152 not found — "already sourced" cannot be reported this run.');

  let records = [], label = '';
  if (args[1]) {
    records = require(path.resolve(process.cwd(), args[1]));
    label = args[1] + ' (batch, ' + records.length + ' records)';
  } else {
    const p = [path.join(__dirname, 'sections', cfg.file), path.join(repoRoot, 'sections', cfg.file)]
      .find(fs.existsSync);
    if (!p) { console.error('🔴 no ' + cfg.file + ' found'); process.exit(1); }
    const sb = { window: {} };
    vm.runInNewContext(fs.readFileSync(p, 'utf8'), sb, { filename: p });
    records = sb.window[cfg.varName] || [];
    label = cfg.file + ' (' + records.length + ' records)';
  }

  const ingredients = collectIngredients(ctx, records);
  report(classify(ctx, ingredients, mf), mf, label);
}

if (require.main === module) main();
module.exports = { loadGate, collectIngredients, classify, readMF152 };
