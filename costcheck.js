#!/usr/bin/env node
/* ============================================================================
   costcheck.js — THE WATCHER FOR `costPP`.   ⚖️ TINZA_RULINGS.md §30.1

     node costcheck.js <country>          # score every version in a country file
     node costcheck.js <country> --all    # include the ✅ rows, not just the flags
     node costcheck.js --selftest         # born-RED proofs

   WHY IT EXISTS (ruled by Tina, 29 Jul 2026, §30.1):
     `costPP` on a version is COMPUTED from PRICE_DB via the app's own pricing path.
     It is not a figure the author estimates and types in. That alternative is formally
     closed. The consequence, straight off the ladder (missing < duplicate < WRONG): an
     unchecked costPP renders as a number and looks correct. It is the same silent hole
     as `chilli oil` → `chilli` R80 and the ungated tierBar.

   ⚖️ DESIGN LAW — identical to pricecheck.js, and it is the whole reason to trust it:
     IT DOES NOT REIMPLEMENT PRICING. It loads sections/prices.js + core.js +
     worldkitchen.js + the section file into a vm sandbox and calls the app's OWN
     wkParseIngredients() / wkPriceLookup() / applyVersionDelta() / wkCostRecipeShape().
     A watcher with a private model of pricing measures a program that does not exist.
     If any gate file fails to load it REFUSES to report rather than silently scoring
     against half a gate.

   ⚖️ TOLERANCE, NOT EQUALITY (§30). Rounding and pack hints mean exact match is not
     achievable, and demanding it would make the tool noise — a rung that cries wolf is
     a rung she learns to scroll past.
        ✅  within 15%
        🟠  15–40%
        🔴  over 40%
        ⬜  UNSCOREABLE — an ABSENT key is carrying weight in this version.

   ⚠️ UNSCOREABLE IS NOT A PASS, and this is the trap the ruling names explicitly: a
     missing price silently becomes a LOW cost, so a record with an unpriced line would
     otherwise score green for being cheap. It is reported separately and never counted
     as agreement.

   📌 §30 SEQUENCING: this tool runs BEFORE any mass re-pricing. Until it has run, nobody
     knows whether a costPP is wrong by R2 or by R30, and re-pricing blind moves numbers
     that were right. Re-typing ~300 figures by hand would reintroduce the very error
     being fixed.

   HONEST LIMIT: this compares a number to the engine. It cannot tell you the engine's
   PRICE is right — that is priceledger.js (provenance) and Tina's eyes (the shelf).
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO = process.env.TINZA_REPO || __dirname;

const COUNTRIES = {
  china:     { varName: 'WK_CHINA',     file: 'wk_china.js' },
  japan:     { varName: 'WK_JAPAN',     file: 'wk_japan.js' },
  indonesia: { varName: 'WK_INDONESIA', file: 'wk_indonesia.js' },
  thailand:  { varName: 'WK_THAILAND',  file: 'wk_thailand.js' },
  vietnam:   { varName: 'WK_VIETNAM',   file: 'wk_vietnam.js' }
};

// ── THE SCORER — pure, so the selftest can feed it without touching a file ────
// Returns { band, pct }. `missing` is the engine's own missing[] for that version.
function score(authored, computed, missing) {
  if (Array.isArray(missing) && missing.length) {
    return { band: 'UNSCOREABLE', pct: null, why: 'ABSENT key(s): ' + missing.slice(0, 4).join(', ') };
  }
  if (typeof authored !== 'number' || !isFinite(authored)) {
    return { band: 'RED', pct: null, why: 'costPP is not a number' };
  }
  if (typeof computed !== 'number' || !isFinite(computed) || computed <= 0) {
    return { band: 'UNSCOREABLE', pct: null, why: 'the engine returned no cost' };
  }
  const pct = Math.abs(authored - computed) / computed * 100;
  if (pct <= 15) return { band: 'OK', pct: pct };
  if (pct <= 40) return { band: 'AMBER', pct: pct };
  return { band: 'RED', pct: pct };
}

// ── LOAD THE REAL GATE ───────────────────────────────────────────────────────
function loadGate(country) {
  const cfg = COUNTRIES[country];
  const need = ['sections/prices.js', 'sections/packs.js', 'sections/core.js',
                'sections/worldkitchen.js', 'sections/' + cfg.file];
  const missing = need.filter(f => !fs.existsSync(path.join(REPO, f)));
  if (missing.length) {
    console.error('🔴 gate incomplete — missing: ' + missing.join(', '));
    console.error('   Refusing to report. Scoring against half a gate is worse than not scoring.');
    process.exit(1);
  }
  const sandbox = {
    window: {}, document: undefined,
    console: { log(){}, info(){}, warn(){}, error(){} },
    localStorage: { getItem(){ return null; }, setItem(){}, removeItem(){} },
    navigator: {}, location: { href: '', search: '' },
    setTimeout(){}, clearTimeout(){}
  };
  sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);
  for (const f of need) {
    try { vm.runInContext(fs.readFileSync(path.join(REPO, f), 'utf8'), ctx, { filename: f }); }
    catch (e) { /* tolerated — the probe below is what decides */ }
  }
  const probe = vm.runInContext(`({
    records:  typeof ${cfg.varName} !== 'undefined' ? ${cfg.varName}.length : -1,
    hasPrice: typeof PRICE_DB              !== 'undefined',
    hasParse: typeof wkParseIngredients    === 'function',
    hasLook:  typeof wkPriceLookup         === 'function',
    hasDelta: typeof applyVersionDelta     === 'function',
    hasShape: typeof wkCostRecipeShape     === 'function'
  })`, ctx);

  const gaps = [];
  if (probe.records < 0)  gaps.push(cfg.varName);
  if (!probe.hasPrice)    gaps.push('PRICE_DB');
  if (!probe.hasParse)    gaps.push('wkParseIngredients()');
  if (!probe.hasLook)     gaps.push('wkPriceLookup()');
  if (!probe.hasDelta)    gaps.push('applyVersionDelta()   (core.js)');
  if (!probe.hasShape)    gaps.push('wkCostRecipeShape()   (worldkitchen.js)');
  if (gaps.length) {
    console.error('🔴 gate loaded but these did not arrive: ' + gaps.join(' · '));
    console.error('   Refusing to report — a check that lost half its gate is not a check.');
    process.exit(1);
  }
  return { ctx, cfg, n: probe.records };
}

// Resolve a version through the app's OWN delta merge, then cost it through the app's
// OWN engine at ONE serving — the lane convention (servings:1, amounts are per-serving).
function costVersion(ctx, record, version) {
  const q = '(function(rec, ver){' +
            '  var o = JSON.parse(JSON.stringify(rec));' +
            '  if (ver && ver.delta) applyVersionDelta(o, ver.delta);' +
            '  var c = wkCostRecipeShape(o, 1);' +
            '  return { total: c.total, missing: c.missing || [] };' +
            '})(' + JSON.stringify(record) + ',' + JSON.stringify(version) + ')';
  return vm.runInContext(q, ctx);
}

// ── REPORT ───────────────────────────────────────────────────────────────────
function run(country, showAll) {
  const { ctx, cfg, n } = loadGate(country);
  const records = vm.runInContext(cfg.varName, ctx);
  const rows = [];
  records.forEach(r => {
    (r.versions || []).forEach((v, i) => {
      const out = costVersion(ctx, r, v);
      const s = score(v.costPP, out.total, out.missing);
      rows.push({ id: r.id, v: (v && v.name) || ('version ' + (i + 1)),
                  authored: v.costPP, computed: out.total, band: s.band, pct: s.pct, why: s.why });
    });
  });

  const by = b => rows.filter(x => x.band === b);
  const ok = by('OK'), amber = by('AMBER'), red = by('RED'), un = by('UNSCOREABLE');

  console.log('\n════ COSTPP CHECK · ' + cfg.file + ' (' + n + ' records · ' + rows.length + ' versions) ════');
  console.log('   ⚖️ §30.1 — costPP is DERIVED. This scores every authored figure against the');
  console.log('      app\'s own pricing path at one serving.\n');

  const line = x => '   ' + (x.id + '                                  ').slice(0, 32) +
                    ' ' + (x.v || '').slice(0, 34).padEnd(36) +
                    'authored R' + String(x.authored).padEnd(5) +
                    'engine R' + String(x.computed).padEnd(6) +
                    (x.pct == null ? (x.why || '') : ('off by ' + x.pct.toFixed(0) + '%'));

  if (red.length)   { console.log('🔴 OVER 40% OUT — ' + red.length); red.forEach(x => console.log(line(x))); console.log(''); }
  if (amber.length) { console.log('🟠 15–40% OUT — ' + amber.length); amber.forEach(x => console.log(line(x))); console.log(''); }
  if (un.length) {
    console.log('⬜ UNSCOREABLE — ' + un.length + '  (an ABSENT key carries weight — NOT a pass:');
    console.log('   a missing price silently becomes a LOW cost, so these would score green for being cheap)');
    un.forEach(x => console.log(line(x))); console.log('');
  }
  if (showAll && ok.length) { console.log('✅ WITHIN 15% — ' + ok.length); ok.forEach(x => console.log(line(x))); console.log(''); }

  console.log('── SUMMARY ──');
  console.log('   ✅ ' + ok.length + '   🟠 ' + amber.length + '   🔴 ' + red.length + '   ⬜ ' + un.length +
              '   of ' + rows.length + ' versions');
  console.log('   HONEST LIMIT: this compares a number to the ENGINE. It cannot tell you the');
  console.log('   engine\'s PRICE is right — that is priceledger.js and Tina\'s eyes on the shelf.\n');
  return { ok: ok.length, amber: amber.length, red: red.length, un: un.length };
}

// ── SELFTEST — every rung proven BORN-RED ────────────────────────────────────
function selftest() {
  let pass = 0, fail = 0;
  const t = (name, cond) => { if (cond) { console.log('  ✅ ' + name); pass++; }
                              else { console.log('  ❌ ' + name); fail++; } };
  console.log('\n════ costcheck.js — BORN-RED PROOFS ════\n');

  t('CONTROL: an exact match scores OK',            score(50, 50, []).band === 'OK');
  t('within 15% is OK (R46 vs R50 = 8%)',            score(46, 50, []).band === 'OK');
  t('the 15% edge is INCLUSIVE, not off-by-one',     score(57.5, 50, []).band === 'OK');
  t('RED: 15–40% out is AMBER (R65 vs R50 = 30%)',   score(65, 50, []).band === 'AMBER');
  t('RED: over 40% out is RED (R90 vs R50 = 80%)',   score(90, 50, []).band === 'RED');
  t('RED: the agedashi-tofu shape (R22 vs R50) is caught, not excused',
                                                     score(22, 50, []).band === 'RED');
  // ⚠️ THE TRAP §30 NAMES: an unpriced line makes the engine cheap, so a wrong costPP
  // would score GREEN for agreeing with a number that was never complete.
  t('RED: an ABSENT key is UNSCOREABLE even when the numbers agree exactly',
                                                     score(50, 50, ['kencur']).band === 'UNSCOREABLE');
  t('RED: UNSCOREABLE is never reported as OK',      score(50, 50, ['kencur']).band !== 'OK');
  t('RED: a non-numeric costPP is caught',           score(undefined, 50, []).band === 'RED');
  t('RED: an engine total of 0 cannot be scored',    score(50, 0, []).band === 'UNSCOREABLE');
  t('a missing[] that is absent behaves as empty',   score(50, 50, undefined).band === 'OK');

  console.log('\n═══ ' + pass + ' passed · ' + fail + ' failed ═══');
  if (!fail) {
    console.log('✅ every band proven to fire, and UNSCOREABLE proven not to masquerade as a pass.');
    console.log('   Honest limit: this proves the SCORER works. It cannot prove the engine is right.\n');
  }
  process.exit(fail ? 1 : 0);
}

// ── CLI ──────────────────────────────────────────────────────────────────────
if (require.main === module) {
  const [a, b] = process.argv.slice(2);
  if (a === '--selftest') selftest();
  const cfg = COUNTRIES[(a || '').toLowerCase()];
  if (!cfg) {
    console.error('usage: node costcheck.js <country> [--all]   |   node costcheck.js --selftest');
    console.error('countries: ' + Object.keys(COUNTRIES).join(' · '));
    process.exit(1);
  }
  run(a.toLowerCase(), b === '--all');
}

module.exports = { score, COUNTRIES };
