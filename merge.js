// merge.js — append a batch to a country file, with full validation.
//
//   node merge.js japan batch1.js
//   node merge.js china batch9.js
//
// Refuses to write if ANY assertion fails. Generalised from the China-only version
// on 29 Jul 2026, with a born-RED proof per assertion in merge-selftest.js.
//
// WHY THE VALIDATION IS A PURE FUNCTION: the self-test must be able to feed it
// deliberately broken records without any risk of writing them to a real country file.
// validate() returns failures and touches nothing. Only the CLI at the bottom writes.
//
// HONEST LIMIT, UNCHANGED: this catches STRUCTURE, never JUDGEMENT. It cannot tell you
// a moat is boring, a law is wrong, or a price is unrealistic. Only Tina's eyes close those.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ── LANE CONFIG ───────────────────────────────────────────────────────────────
// cuisine per ruling A2. Adding a country is one line here, not a copy of this file (Law 50).
const COUNTRIES = {
  china:     { country: 'China',     cuisine: 'east-asia',      varName: 'WK_CHINA',     file: 'wk_china.js',     idPrefix: 'china-'     },
  japan:     { country: 'Japan',     cuisine: 'east-asia',      varName: 'WK_JAPAN',     file: 'wk_japan.js',     idPrefix: 'japan-'     },
  indonesia: { country: 'Indonesia', cuisine: 'southeast-asia', varName: 'WK_INDONESIA', file: 'wk_indonesia.js', idPrefix: 'indonesia-' },
  thailand:  { country: 'Thailand',  cuisine: 'southeast-asia', varName: 'WK_THAILAND',  file: 'wk_thailand.js',  idPrefix: 'thailand-'  },
  vietnam:   { country: 'Vietnam',   cuisine: 'southeast-asia', varName: 'WK_VIETNAM',   file: 'wk_vietnam.js',   idPrefix: 'vietnam-'   }
};

const DIET_VOCAB = ['omnivore', 'vegetarian', 'vegan', 'unknown'];
const DELTA_OPS  = { swapIng: 'from+to', swapStep: 'from+to', addIng: 'item', removeIng: 'item', addStep: 'text' };

// Canonical key set lives in a file, NOT in record 1 of the target.
// A brand-new country file HAS no record 1 — it would validate its keys against nothing
// and set its own precedent, which is exactly how five near-identical files drift apart.
const SCHEMA_PATH = path.join(__dirname, 'reference', 'ASIA_SCHEMA_KEYS.json');

function loadSchemaKeys() {
  if (!fs.existsSync(SCHEMA_PATH)) {
    console.error('🔴 canonical schema missing: ' + SCHEMA_PATH);
    console.error('   Regenerate from a known-good country file before merging.');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8')).keys;
}

// ── FILE I/O ──────────────────────────────────────────────────────────────────
// Paths resolve against this script's folder, so merge.js can live at root with
// tinza-census.js / tinza-doctor.js and still find sections/. The old version resolved
// wk_china.js by bare filename, which is why it was stranded in sections/.
function resolveCountryFile(cfg) {
  const candidates = [
    path.join(__dirname, 'sections', cfg.file),
    path.join(__dirname, cfg.file),
    path.resolve(process.cwd(), cfg.file)
  ];
  return candidates.find(p => fs.existsSync(p)) || candidates[0];
}

function readCountryFile(cfg) {
  const filePath = resolveCountryFile(cfg);
  if (!fs.existsSync(filePath)) return { filePath, header: null, records: [], isNew: true };

  const src = fs.readFileSync(filePath, 'utf8');
  const marker = 'var ' + cfg.varName + ' = [';
  const at = src.indexOf(marker);
  if (at === -1) {
    console.error('🔴 ' + filePath + ' does not declare "' + marker + '".');
    console.error('   Either the varName in COUNTRIES is wrong, or the file is not a country data module.');
    process.exit(1);
  }

  // Run in a sandbox and read the file's OWN export line, rather than eval-ing into
  // our scope and hoping the variable name matches. Also means a stray global in a
  // data file cannot clobber anything in here.
  const sandbox = { window: {}, module: {}, exports: {} };
  try { vm.runInNewContext(src, sandbox, { filename: filePath }); }
  catch (e) { console.error('🔴 ' + filePath + ' failed to parse: ' + e.message); process.exit(1); }

  const records = sandbox.window[cfg.varName];
  if (!Array.isArray(records)) {
    console.error('🔴 ' + filePath + ' ran but window.' + cfg.varName + ' is not an array.');
    console.error('   The file needs its trailing: if (typeof window !== "undefined") window.' + cfg.varName + ' = ' + cfg.varName + ';');
    process.exit(1);
  }
  return { filePath, header: src.slice(0, at), records, isNew: false };
}

function newHeader(cfg) {
  return '/* ============================================================\n' +
         '   Tinza — World Kitchen : ' + cfg.country + ' data module  (' + cfg.file + ')\n' +
         '   Pure data. Defines ' + cfg.varName + ' (array of recipe objects).\n' +
         '   No DOM, no dependencies — cannot break a working section.\n' +
         '   cuisine=' + cfg.cuisine + ' · country=' + cfg.country + '\n' +
         '   Slug ids (' + cfg.idPrefix + 'dish).\n' +
         '   Authored to WOW_STANDARD.md. Validated by merge.js.\n' +
         '   ============================================================ */\n';
}

// ── VALIDATION (pure — returns failures, writes nothing, exits nothing) ───────
function validate(existing, incoming, cfg, KEYS) {
  const fails = [];
  const warns = [];
  const bad  = (id, msg) => fails.push(id + ' — ' + msg);
  const warn = (id, msg) => warns.push(id + ' — ' + msg);

  const all = existing.concat(incoming);
  const ids = new Set(all.map(r => r && r.id));

  // Shared version rules, applied to BOTH incoming and existing records.
  // The China-only version applied these to the incoming batch only for everything except
  // crossLinks, so a breach authored in batch 1 could never be caught later. cong-you-bing
  // sat wrong for four batches. One function now, called on both, so they cannot diverge.
  function checkVersions(r, where) {
    const tag = where === 'existing' ? 'existing record: ' : '';
    if (!Array.isArray(r.versions)) { bad(r.id, tag + 'versions is not an array'); return; }
    if (r.versions.length !== 3) bad(r.id, tag + 'has ' + r.versions.length + ' versions, lane rule is 3');

    const defs = r.versions.filter(v => v && v.default === true).length;
    if (defs !== 1) bad(r.id, tag + 'has ' + defs + ' default versions, must be exactly 1');

    // A3 budget-leads — TWO rungs, because one test could not do this honestly.
    // HARD (mechanical): a version NAMED budget must sit in slot 1. This caught cong-you-bing.
    // WARN (judgement): v1 not being the cheapest is sometimes correct — char-siu and roast-duck
    //   both lead with a real budget fork while a protein-swap fork costs less. That is a
    //   different dish, not a cheaper route. So it prints and does not block. Tina's eyes decide.
    const bIdx = r.versions.findIndex(v => v && /budget/i.test(v.name || ''));
    if (bIdx > 0) bad(r.id, tag + 'a version named budget ("' + r.versions[bIdx].name + '") is in slot ' + (bIdx + 1) + ' — A3 says it LEADS');

    const costs = r.versions.map(v => v && v.costPP).filter(c => typeof c === 'number');
    if (costs.length === r.versions.length && r.versions[0]) {
      const cheapest = Math.min.apply(null, costs);
      if (r.versions[0].costPP !== cheapest) {
        warn(r.id, 'v1 "' + r.versions[0].name + '" R' + r.versions[0].costPP + ' is not the cheapest (R' + cheapest + '). Check this is a protein-swap fork, not a breach.');
      }
    }
  }

  function checkCrossLinks(r, where) {
    const tag = where === 'existing' ? 'existing ' : '';
    if (!Array.isArray(r.crossLinks) || r.crossLinks.length !== 3) { bad(r.id, tag + 'needs exactly 3 crossLinks (A6)'); return; }
    r.crossLinks.forEach(c => {
      if (!c || !c.target)      return bad(r.id, tag + 'crossLink missing target');
      if (!ids.has(c.target))   bad(r.id, tag + 'DEAD crossLink target → ' + c.target);
      if (c.target === r.id)    bad(r.id, tag + 'crossLink points at itself');
      if (!c.name || !c.emoji)  bad(r.id, tag + 'crossLink missing name/emoji');
    });
  }

  // ── incoming batch ──
  for (const r of incoming) {
    if (!r || !r.id) { bad('(no id)', 'record has no id'); continue; }

    const k = Object.keys(r);
    if (k.join(',') !== KEYS.join(',')) {
      bad(r.id, 'key mismatch vs canonical schema. missing=[' + KEYS.filter(x => !k.includes(x)) +
          '] extra=[' + k.filter(x => !KEYS.includes(x)) + ']');
    }

    if (all.filter(x => x && x.id === r.id).length !== 1) bad(r.id, 'duplicate id');
    if (r.cuisine !== cfg.cuisine) bad(r.id, 'cuisine "' + r.cuisine + '" should be "' + cfg.cuisine + '"');
    if (r.country !== cfg.country) bad(r.id, 'country "' + r.country + '" should be "' + cfg.country + '"');
    if (typeof r.id === 'string' && !r.id.startsWith(cfg.idPrefix)) bad(r.id, 'id should start with "' + cfg.idPrefix + '"');

    // Array checks run BEFORE the diet vocabulary walk. The China version walked r.diet first,
    // so a record with diet as a string threw a raw TypeError and died with a stack trace
    // instead of reporting a clean failure. A validator that crashes is a validator that
    // stopped asserting the other 20 things.
    ['type', 'diet', 'occasion', 'leftovers'].forEach(f => {
      if (!Array.isArray(r[f])) bad(r.id, f + ' must be an array (got ' + typeof r[f] + ')');
    });

    if (Array.isArray(r.diet)) {
      r.diet.forEach(x => {
        if (!DIET_VOCAB.includes(x)) {
          bad(r.id, 'diet token "' + x + '" not in v1 vocabulary [' + DIET_VOCAB + '] — halaal/kosher are SEPARATE LAWS, never diet tags');
        }
      });
    }

    // costPP belongs on versions, never the record (A3). Checked ONCE per record —
    // the China version had this inside the versions loop, so it reported three times.
    if (r.costPP !== undefined) bad(r.id, 'costPP on the record — A3 says versions only');

    checkVersions(r, 'incoming');

    (Array.isArray(r.versions) ? r.versions : []).forEach(v => {
      if (!v) return;
      if (typeof v.costPP !== 'number') bad(r.id, 'version "' + v.name + '" missing numeric costPP');
      if (!v.delta) return;
      for (const key in v.delta) {
        if (!DELTA_OPS[key]) { bad(r.id, 'unknown delta op "' + key + '"'); continue; }
        if (!Array.isArray(v.delta[key])) { bad(r.id, 'delta op "' + key + '" must hold an array'); continue; }
        v.delta[key].forEach(o => {
          const ks = Object.keys(o).join('+');
          if (ks !== DELTA_OPS[key]) bad(r.id, key + ' shape "' + ks + '" should be "' + DELTA_OPS[key] + '"');
          // DEAD-DELTA: the thing being swapped/removed must actually exist in the base record.
          const ing = typeof r.ingredients === 'string' ? r.ingredients : '';
          const mth = typeof r.method === 'string' ? r.method : '';
          if (key === 'swapIng'   && o.from && !ing.includes(o.from)) bad(r.id, 'DEAD swapIng — not in ingredients: "' + String(o.from).slice(0, 50) + '"');
          if (key === 'removeIng' && o.item && !ing.includes(o.item)) bad(r.id, 'DEAD removeIng — not in ingredients: "' + String(o.item).slice(0, 50) + '"');
          if (key === 'swapStep'  && o.from && !mth.includes(o.from)) bad(r.id, 'DEAD swapStep — not in method: "' + String(o.from).slice(0, 50) + '"');
          if ((key === 'swapIng' || key === 'swapStep') && (!o.to || !String(o.to).trim())) bad(r.id, 'empty "to" — deletions use removeIng');
        });
      }
    });

    checkCrossLinks(r, 'incoming');
  }

  // ── existing records re-checked every merge ──
  // FIELD SHAPE ON EXISTING RECORDS IS A **WARN**, NOT A FAIL — deliberately.
  // Found 29 Jul: `leftovers` is a string in the 5 records authored before this validator
  // existed and an array in the 38 authored through it. The old version only ever checked
  // the incoming batch, so those 5 were never tested — the cong-you-bing hole in a different
  // field. It blocks nothing because (a) which shape core.js actually renders is a judgement
  // call and needs Tina's eyes on live, and (b) a validator that hard-blocks on already-shipped
  // data stops the lane dead. It WARNS every single merge so it cannot be quietly forgotten.
  const ARRAY_FIELDS = ['type', 'diet', 'occasion', 'leftovers'];
  existing.forEach(r => {
    checkVersions(r, 'existing');
    checkCrossLinks(r, 'existing');
    ARRAY_FIELDS.forEach(f => {
      if (!Array.isArray(r[f])) warn(r.id, 'existing record: ' + f + ' is a ' + typeof r[f] + ', not an array — legacy shape, predates the validator');
    });
    if (Array.isArray(r.diet)) {
      r.diet.forEach(x => { if (!DIET_VOCAB.includes(x)) warn(r.id, 'existing record: diet token "' + x + '" off-vocabulary'); });
    }
  });

  return { fails, warns };
}

module.exports = { validate, COUNTRIES, loadSchemaKeys, readCountryFile, newHeader, DIET_VOCAB, DELTA_OPS };

// ── CLI ───────────────────────────────────────────────────────────────────────
if (require.main === module) {
  const [countryArg, batchArg] = process.argv.slice(2);

  if (!countryArg || !batchArg) {
    console.error('usage: node merge.js <country> <batchfile.js>');
    console.error('countries: ' + Object.keys(COUNTRIES).join(' · '));
    process.exit(1);
  }

  const cfg = COUNTRIES[countryArg.toLowerCase()];
  if (!cfg) {
    console.error('🔴 unknown country "' + countryArg + '". Known: ' + Object.keys(COUNTRIES).join(' · '));
    console.error('   Adding one is a single line in COUNTRIES at the top of this file.');
    process.exit(1);
  }

  const batchPath = path.resolve(process.cwd(), batchArg);
  if (!fs.existsSync(batchPath)) { console.error('🔴 batch file not found: ' + batchPath); process.exit(1); }

  const KEYS = loadSchemaKeys();
  const { filePath, header, records, isNew } = readCountryFile(cfg);
  const NEW = require(batchPath);
  if (!Array.isArray(NEW)) { console.error('🔴 ' + batchArg + ' must module.exports an array of records'); process.exit(1); }

  if (isNew) console.log('📄 ' + cfg.file + ' does not exist yet — it will be created at ' + filePath);

  const { fails, warns } = validate(records, NEW, cfg, KEYS);

  warns.forEach(w => console.log('  ⚠️  ' + w));
  if (fails.length) {
    fails.forEach(f => console.log('  ❌ ' + f));
    console.log('\n🔴 ' + fails.length + ' failure' + (fails.length === 1 ? '' : 's') + ' — NOT written.');
    process.exit(1);
  }

  const all = records.concat(NEW);
  const out = (header || newHeader(cfg)) +
              'var ' + cfg.varName + ' = [\n' + all.map(r => JSON.stringify(r)).join(',\n') +
              '\n];\nif (typeof window !== \'undefined\') window.' + cfg.varName + ' = ' + cfg.varName + ';\n';
  // A new country file may resolve into a folder that does not exist yet. Caught by the
  // bootstrap test 29 Jul: the validator passed, then writeFileSync died with ENOENT —
  // all the checking done, nothing written, and a stack trace instead of a message.
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, out);

  console.log('✅ all checks pass · ' + records.length + ' + ' + NEW.length + ' = ' + all.length + ' records written to ' + path.relative(process.cwd(), filePath));
  NEW.forEach(r => console.log('   + ' + r.id + '  [' + r.versions.map(v => 'R' + v.costPP).join(' · ') + ']'));

  if (isNew) {
    console.log('\n⛔ WIRING — a file that is not wired is not in the app. TWO lines still needed:');
    console.log('   1. index.html         →  <script src="sections/' + cfg.file + '"></script>');
    console.log('   2. worldkitchen.js:58 →  window.' + cfg.varName + ' || [],   in the wkPool() concat');
    console.log('   (WK_COUNTRY_GEO is already done for all five lane countries.)');
  }
}
