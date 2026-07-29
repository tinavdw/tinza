// merge-selftest.js — BORN-RED PROOF, one deliberate breach per assertion in merge.js.
//
//   node merge-selftest.js
//
// WHY THIS EXISTS: merge.js is the thing that catches everything else, and a bug in it does
// not announce itself — it just quietly stops asserting something. Same shape as the ungated
// tierBar. So every assertion is proven by deliberately breaking a record and confirming the
// validator still goes RED, exactly like census check 24.
//
// The CONTROL matters as much as the breaches: a validator that fails everything proves
// nothing. Test 0 feeds a clean record and demands ZERO failures.
//
// This harness only ever calls validate(), which is pure. It cannot write to a country file.

const fs = require('fs');
const path = require('path');
const { validate, COUNTRIES, loadSchemaKeys, readCountryFile } = require('./merge.js');

const KEYS = loadSchemaKeys();
const cfg = COUNTRIES.china;

// Load the real China file as the "existing" body of records — through merge.js's OWN
// resolver, not a hardcoded path. 29 Jul: this harness originally did
// __dirname + '/wk_china.js', which worked in a flat folder and died with ENOENT in the
// real repo, where the file lives in sections/. Two copies of the path logic is one too
// many — the same fault merge.js had just been fixed for.
const loaded = readCountryFile(cfg);
if (loaded.isNew || !loaded.records.length) {
  console.error('🔴 could not load ' + cfg.file + ' — looked in sections/ and alongside merge.js.');
  console.error('   Run this from the repo root, with merge.js at root and the data file in sections/.');
  process.exit(1);
}
const EXISTING = loaded.records;

const clone = o => JSON.parse(JSON.stringify(o));

// A clean, valid incoming record: a real record with a fresh id. Everything else untouched,
// so any failure the harness sees is the mutation under test and nothing else.
//
// ⚠️ The fixture is deliberately taken from a record authored THROUGH the validator, not
// from EXISTING[0]. Record 0 (hong-shao-rou, batch 1) carries `leftovers` as a string —
// the legacy shape — so using it made the control fail and every downstream test noisy.
// The control has to be genuinely clean or it proves nothing.
const FIXTURE_SOURCE = EXISTING.find(r =>
  Array.isArray(r.leftovers) && r.versions.some(v => /budget/i.test(v.name)) &&
  r.versions[0] && /budget/i.test(r.versions[0].name) &&
  r.versions.some(v => v.delta && v.delta.swapIng)
);
if (!FIXTURE_SOURCE) { console.error('🔴 no clean fixture record found — cannot run the proof honestly'); process.exit(1); }

function fixture() {
  const r = clone(FIXTURE_SOURCE);
  r.id = 'china-selftest-fixture';
  return r;
}

const run = rec => validate(EXISTING, [rec], cfg, KEYS);

let pass = 0, fail = 0;

// A breach test: mutate, run, demand at least one failure whose text matches `expect`.
function red(label, mutate, expect) {
  const r = fixture();
  let out;
  try { mutate(r); out = run(r); }
  catch (e) {
    console.log('  ❌ ' + label + '\n       validator CRASHED instead of reporting: ' + e.message);
    fail++; return;
  }
  const hit = out.fails.find(f => f.toLowerCase().includes(expect.toLowerCase()));
  if (hit) { console.log('  ✅ RED  ' + label + '\n       → ' + hit.slice(0, 110)); pass++; }
  else {
    console.log('  ❌ MISS ' + label + '\n       expected a failure matching "' + expect + '", got: ' +
                (out.fails.length ? out.fails.join(' | ').slice(0, 200) : 'NO FAILURES AT ALL'));
    fail++;
  }
}

console.log('\n═══ MERGE.JS BORN-RED PROOF ═══');
console.log("existing records: " + EXISTING.length + " · canonical keys: " + KEYS.length + " · fixture built from: " + FIXTURE_SOURCE.id + "\n");

// ── 0. CONTROL — clean record must be GREEN ──────────────────────────────────
console.log('── CONTROL ──');
{
  const out = run(fixture());
  if (out.fails.length === 0) { console.log('  ✅ GREEN control — clean record produces 0 failures'); pass++; }
  else { console.log('  ❌ CONTROL FAILED — a clean record produced failures:\n       ' + out.fails.join('\n       ')); fail++; }
}

// ── 1. SCHEMA / IDENTITY ─────────────────────────────────────────────────────
console.log('\n── schema & identity ──');
red('missing a canonical key',      r => { delete r.trivia; },                    'key mismatch');
red('extra key not in schema',      r => { r.somethingNew = 'x'; },               'key mismatch');
red('duplicate id',                 r => { r.id = EXISTING[3].id; },              'duplicate id');
red('wrong cuisine',                r => { r.cuisine = 'southeast-asia'; },       'cuisine');
red('wrong country',                r => { r.country = 'Japan'; },                'country');
red('id without country prefix',    r => { r.id = 'japan-wrong-prefix'; },        'should start with');

// ── 2. VOCABULARY ────────────────────────────────────────────────────────────
console.log('\n── diet vocabulary (v1 = omnivore/vegetarian/vegan/unknown) ──');
red('halaal-friendly diet token',   r => { r.diet = ['halaal-friendly']; },       'not in v1 vocabulary');
red('pescatarian diet token',       r => { r.diet = ['pescatarian']; },           'not in v1 vocabulary');
red('diet as a string, not array',  r => { r.diet = 'vegan'; },                   'must be an array');
red('occasion as a string',         r => { r.occasion = 'dinner'; },              'must be an array');

// ── 3. VERSIONS (A3) ─────────────────────────────────────────────────────────
console.log('\n── versions (A3) ──');
red('only 2 versions',              r => { r.versions.pop(); },                   'lane rule is 3');
red('zero defaults',                r => { r.versions.forEach(v => delete v.default); }, 'default versions');
red('two defaults',                 r => { r.versions[0].default = true; r.versions[1].default = true; }, 'default versions');
red('budget fork NOT in slot 1',    r => { const v = r.versions.shift(); r.versions.push(v); }, 'A3 says it LEADS');
red('non-numeric costPP',           r => { r.versions[1].costPP = '42'; },        'numeric costPP');
red('costPP on the record',         r => { r.costPP = 42; },                      'costPP on the record');

// ── 4. DELTAS ────────────────────────────────────────────────────────────────
console.log('\n── delta contract ──');
red('unknown delta op',             r => { r.versions[0].delta.replaceEverything = [{ item: 'x' }]; }, 'unknown delta op');
red('addIng wrong shape',           r => { r.versions[2].delta.addIng = [{ text: 'x' }]; },            'should be "item"');
red('addStep wrong shape',          r => { r.versions[0].delta.addStep = [{ item: 'x' }]; },           'should be "text"');
red('DEAD swapIng (not in ings)',   r => { r.versions[0].delta.swapIng = [{ from: 'unicorn steak', to: 'beef' }]; }, 'DEAD swapIng');
red('DEAD removeIng',               r => { r.versions[0].delta.removeIng = [{ item: 'unicorn steak' }]; },           'DEAD removeIng');
red('DEAD swapStep',                r => { r.versions[0].delta.swapStep = [{ from: 'Summon a dragon.', to: 'Boil it.' }]; }, 'DEAD swapStep');
red('empty "to" on a swap',         r => { r.versions[0].delta.swapIng[0].to = '   '; },               'empty "to"');

// ── 5. CROSSLINKS (A6) ───────────────────────────────────────────────────────
console.log('\n── crossLinks (A6) ──');
red('only 2 crossLinks',            r => { r.crossLinks.pop(); },                        'exactly 3 crossLinks');
red('dead crossLink target',        r => { r.crossLinks[0].target = 'china-does-not-exist'; }, 'DEAD crossLink');
red('crossLink points at itself',   r => { r.crossLinks[0].target = r.id; },              'points at itself');
red('crossLink missing emoji',      r => { delete r.crossLinks[1].emoji; },               'missing name/emoji');

// ── 6. EXISTING RECORDS RE-CHECKED (the cong-you-bing hole) ──────────────────
// The China-only version validated version rules on the INCOMING batch only, so a breach
// authored in batch 1 could never be caught by any later merge. These two prove the
// re-check of already-banked records is live.
console.log('\n── existing-record re-check ──');
{
  const dirty = clone(EXISTING);
  const v = dirty[5].versions.shift(); dirty[5].versions.push(v);   // move budget fork out of slot 1
  const out = validate(dirty, [fixture()], cfg, KEYS);
  const hit = out.fails.find(f => f.includes('existing record') && f.includes('LEADS'));
  if (hit) { console.log('  ✅ RED  existing record with budget fork out of slot 1\n       → ' + hit.slice(0, 110)); pass++; }
  else { console.log('  ❌ MISS existing record breach not caught — this is the cong-you-bing hole reopening'); fail++; }
}
{
  const dirty = clone(EXISTING);
  dirty[7].crossLinks[0].target = 'china-vanished';
  const out = validate(dirty, [fixture()], cfg, KEYS);
  const hit = out.fails.find(f => f.includes('existing') && f.includes('DEAD crossLink'));
  if (hit) { console.log('  ✅ RED  existing record with a dead crossLink\n       → ' + hit.slice(0, 110)); pass++; }
  else { console.log('  ❌ MISS existing dead crossLink not caught'); fail++; }
}

// ── 7. THE WARN RUNG MUST NOT BLOCK ──────────────────────────────────────────
// char-siu and roast-duck legitimately lead with a budget fork that is not the cheapest
// version, because a protein-swap fork is a different dish. A blocking test here would
// have forced three wrong "fixes". This proves it warns and stays green.
console.log('\n── judgement rung stays a WARN, never a block ──');
{
  const r = fixture();
  r.versions[2].costPP = 1;   // v3 now cheaper than the leading budget fork
  const out = run(r);
  if (out.fails.length === 0 && out.warns.some(w => w.includes('not the cheapest'))) {
    console.log('  ✅ WARN-not-FAIL — v1 not cheapest prints and does not block'); pass++;
  } else {
    console.log('  ❌ the judgement rung is wrong: fails=' + out.fails.length + ' warns=' + out.warns.length); fail++;
  }
}

// ── RESULT ───────────────────────────────────────────────────────────────────
console.log('\n═══ ' + pass + ' passed · ' + fail + ' failed ═══');
if (fail) { console.log('🔴 merge.js is NOT trustworthy — do not author a batch through it.\n'); process.exit(1); }
console.log('✅ every assertion proven born-RED, control proven GREEN.');
console.log('   Honest limit: this proves the assertions FIRE. It cannot prove they are the RIGHT');
console.log('   assertions — a boring moat, a wrong law and an absurd price all still pass.\n');
