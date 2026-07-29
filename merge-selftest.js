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
  // §26 (29 Jul): diet lives on the VERSION and the record diet is the derived union.
  // FIXTURE_SOURCE is a China record authored before the ruling, so the fixture is brought
  // up to the current contract here rather than by rewriting a banked record.
  r.versions.forEach(v => { v.diet = ['omnivore']; });
  r.diet = ['omnivore'];
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

// The mirror of red(): mutate into something the contract ALLOWS and demand zero failures.
// Needed the day a validator turns out to be stricter than the renderer it validates.
function green(label, mutate) {
  const r = fixture();
  let out;
  try { mutate(r); out = run(r); }
  catch (e) { console.log('  ❌ ' + label + '\n       validator CRASHED: ' + e.message); fail++; return; }
  if (!out.fails.length) { console.log('  ✅ GREEN ' + label); pass++; }
  else { console.log('  ❌ ' + label + '\n       expected NO failures, got: ' + out.fails.join(' | ').slice(0, 200)); fail++; }
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
red('servings 4 not 1',             r => { r.servings = 4; },                     'lane convention is 1');

// ── 4. DELTAS ────────────────────────────────────────────────────────────────
console.log('\n── delta contract ──');
red('unknown delta op',             r => { r.versions[0].delta.replaceEverything = [{ item: 'x' }]; }, 'unknown delta op');
red('addIng wrong shape',           r => { r.versions[2].delta.addIng = [{ text: 'x' }]; },            'should be "item"');
// ⚖️ 30 Jul 2026 — the OPPOSITE proof, added because the validator was wrong rather than the
// record: {item, after} is the documented contract (MF140) and core.js renders it, so it must
// PASS. And an anchor pointing at nothing must FAIL, or the insert silently moves to the end.
green('addIng WITH a valid after anchor', r => { r.versions[2].delta.addIng = [{ item: '5g extra thing', after: r.ingredients.split(' · ')[0] }]; });
red('addIng with a DEAD after anchor',  r => { r.versions[2].delta.addIng = [{ item: '5g extra thing', after: 'nothing like this in the base line' }]; }, 'DEAD addIng anchor');
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

// ── 8. DIET vs INGREDIENTS (the china-cong-you-ban-mian miss) ────────────────
// A judgement error wearing a legal shape: "vegan" is valid vocabulary, so every
// structural assertion passed a record whose ingredients listed dried shrimp.
console.log('\n── diet vs ingredients (warn rung) ──');
{
  const r = fixture();
  r.versions.forEach(v => { v.diet = ['vegan']; });   // §26: set the versions too, so the union
  r.diet = ['vegan'];                                 // matches and THIS test measures only the
                                                      // ingredient cross-check, not the union rung.
  r.ingredients = '200g pork belly, cubed · 30g ginger · 20ml soy sauce';
  r.versions.forEach(v => delete v.delta);   // deltas point at the ORIGINAL ingredients string;
                                             // replacing it wholesale would orphan them and the
                                             // record would fail the dead-delta check instead,
                                             // which is not what this test is measuring.
  const out = run(r);
  if (out.fails.length === 0 && out.warns.some(w => w.includes('pork'))) {
    console.log('  ✅ WARN vegan record listing pork is flagged, and does not block'); pass++;
  } else { console.log('  ❌ diet/ingredient mismatch not flagged: warns=' + JSON.stringify(out.warns)); fail++; }
}
{
  const r = fixture();
  r.diet = ['vegan'];
  r.ingredients = '200g oyster mushrooms, torn · 30g ginger · 20ml soy sauce';
  r.versions.forEach(v => delete v.delta);
  const out = run(r);
  if (!out.warns.some(w => w.includes('oyster'))) {
    console.log('  ✅ CONTROL "oyster mushrooms" does NOT false-trigger the shellfish check'); pass++;
  } else { console.log('  ❌ false positive on oyster mushrooms — the false-friend list is not working'); fail++; }
}

// ── 9. THE WARN RUNGS MUST NOT BLOCK ─────────────────────────────────────────
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

// ── §26 · PER-VERSION DIET (ruled 29 Jul 2026) ───────────────────────────────
console.log('\n── §26 diet lives on the version ──');
red('a version with no diet[]',
    r => { delete r.versions[1].diet; },
    'has no diet[]');
red('a version diet token outside v1 vocabulary',
    r => { r.versions[1].diet = ['halaal-friendly']; },
    'not in v1 vocabulary');
red('record diet under-reports its versions (the cong-you-ban-mian shape)',
    r => { r.versions[0].diet = ['vegan']; },              // record still says omnivore only
    'is not the union of its versions');
red('record diet over-reports — claims a diet no version has',
    r => { r.diet = ['omnivore', 'vegan']; },
    'is not the union of its versions');

// The union is order-insensitive: a record listing the same tokens in a different order is
// NOT a breach, and a rung that failed it would train the author to sort by hand for no reason.
console.log('\n── §26 union is a SET, not a sequence ──');
{
  const r = fixture();
  r.versions[0].diet = ['vegan'];
  r.diet = ['vegan', 'omnivore'];        // union, unsorted
  const out = run(r);
  if (out.fails.length === 0) { console.log('  ✅ GREEN — union compared as a set, order ignored'); pass++; }
  else { console.log('  ❌ order-sensitive: ' + out.fails.join(' | ').slice(0, 160)); fail++; }
}

// EXISTING records predate §26 and must WARN once, never block — China converts at lane close.
console.log('\n── §26 existing-record debt is a single WARN, never a block ──');
{
  const out = run(fixture());
  const d = out.warns.filter(w => w.includes('no per-version diet[]'));
  if (out.fails.length === 0 && d.length === 1) {
    console.log('  ✅ WARN-not-FAIL, and reported ONCE not per-record → ' + d[0].slice(0, 90)); pass++;
  } else {
    console.log('  ❌ debt rung wrong: fails=' + out.fails.length + ' debt-warns=' + d.length); fail++;
  }
}

// ── RESULT ───────────────────────────────────────────────────────────────────
console.log('\n═══ ' + pass + ' passed · ' + fail + ' failed ═══');
if (fail) { console.log('🔴 merge.js is NOT trustworthy — do not author a batch through it.\n'); process.exit(1); }
console.log('✅ every assertion proven born-RED, control proven GREEN.');
console.log('   Honest limit: this proves the assertions FIRE. It cannot prove they are the RIGHT');
console.log('   assertions — a boring moat, a wrong law and an absurd price all still pass.\n');
