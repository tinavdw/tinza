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
  vietnam:   { country: 'Vietnam',   cuisine: 'southeast-asia', varName: 'WK_VIETNAM',   file: 'wk_vietnam.js',   idPrefix: 'vietnam-'   },
  // ── ADDED 12 Aug 2026 — Philippines lane opens with batch 1 (4 records: adobo, sinigang,
  //    lechon kawali, halo-halo). Same one-line-per-country rule: the gate should know the
  //    lane exists before the first record tries to merge.
  philippines: { country: 'Philippines', cuisine: 'southeast-asia', varName: 'WK_PHILIPPINES', file: 'wk_philippines.js', idPrefix: 'philippines-' },
  malaysia: { country: 'Malaysia', cuisine: 'southeast-asia', varName: 'WK_MALAYSIA', file: 'wk_malaysia.js', idPrefix: 'malaysia-' }
};

const DIET_VOCAB = ['omnivore', 'vegetarian', 'vegan', 'unknown'];
// ⚖️ 30 Jul 2026 — addIng MAY carry an OPTIONAL `after` anchor. Found at record 47: the
// validator rejected `{item, after}` while applyVersionDelta() in core.js explicitly supports
// it ("addIng takes an optional {after:'name'} anchor") and MF140 documents it as the contract.
// The renderer and the documented contract agreed; THIS FILE was the one out of step, so this
// is not loosening an assertion to fit a record — it is correcting a validator that contradicted
// the thing it validates. Values may be a fixed shape or a list of accepted shapes.
const DELTA_OPS  = { swapIng: 'from+to', swapStep: 'from+to', addIng: ['item', 'item+after'], removeIng: 'item', addStep: 'text' };
const okShape = (op, ks) => Array.isArray(DELTA_OPS[op]) ? DELTA_OPS[op].includes(ks) : DELTA_OPS[op] === ks;

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
  // §26 debt is collected and reported ONCE, not once per record. 50 identical warns on every
  // merge is the rung-that-cries-wolf failure — a warning she learns to scroll past is a
  // warning that has stopped working. One line with a count stays readable and stays true.
  const dietDebt = [];

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

    // ── §26 · DIET LIVES ON THE VERSION, RECORD DIET IS THE DERIVED UNION (29 Jul 2026) ──
    // Forced by china-cong-you-ban-mian: its budget fork drops the dried shrimp and is
    // genuinely vegan, but diet lived on the record, so a vegan user filtering the app would
    // never be shown it. Budget forks drop the meat by design — this recurs across the lane.
    //
    // TWO RUNGS, same pattern as budget-leads and leftovers:
    //   HARD (incoming): every version carries a valid diet, and the record's diet is exactly
    //     the union of them. A derived field that is ALSO typed by hand is a field that drifts.
    //   WARN (existing): China's 50 predate this ruling and are converted at LANE CLOSE, not
    //     mid-lane. They print on every merge so the debt stays visible and cannot be forgotten.
    const vDiets = r.versions.map(v => (v && Array.isArray(v.diet)) ? v.diet : null);
    if (vDiets.some(d => d === null)) {
      if (where === 'existing') {
        dietDebt.push(r.id);
      } else {
        r.versions.forEach((v, i) => {
          if (!v || !Array.isArray(v.diet)) bad(r.id, 'version ' + (i + 1) + ' "' + ((v && v.name) || '?') + '" has no diet[] — §26 says diet lives on the version');
        });
      }
    } else {
      vDiets.forEach((d, i) => d.forEach(x => {
        if (!DIET_VOCAB.includes(x)) bad(r.id, (where === 'existing' ? 'existing record: ' : '') + 'version ' + (i + 1) + ' diet token "' + x + '" not in v1 vocabulary [' + DIET_VOCAB + ']');
      }));
      const union = Array.from(new Set([].concat.apply([], vDiets))).sort();
      const onRec = Array.isArray(r.diet) ? r.diet.slice().sort() : [];
      if (union.join(',') !== onRec.join(',')) {
        bad(r.id, (where === 'existing' ? 'existing record: ' : '') + 'record diet ' + JSON.stringify(onRec) + ' is not the union of its versions ' + JSON.stringify(union) + ' — §26 says the record diet is DERIVED, never typed');
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

      // DIET vs INGREDIENTS cross-check. Added 29 Jul after tagging china-cong-you-ban-mian
      // "vegan" while its base ingredients listed 10g dried shrimp. The token was valid
      // vocabulary, so every structural assertion passed it — a judgement error wearing a
      // legal shape, which is precisely the class this file cannot normally see.
      //
      // A **WARN**, deliberately, because it is keyword matching and cannot be authoritative:
      // "oyster mushrooms" contains "oyster", a vegetarian record legitimately contains egg,
      // and a version delta can remove the offending item. It flags for human eyes; it does
      // not block. Making this a hard fail would train the author to work around it.
      // §26 FOLLOW-ON (29 Jul, caught on the very first Japan batch). This check must read the
      // DEFAULT VERSION's diet, not the record's. Since §26 the record diet is the UNION, so a
      // record whose budget fork is vegan now legitimately carries "vegan" while its BASE
      // ingredients — which are the default version's ingredients — are full of pork. Reading
      // r.diet here fired on all four correctly-authored Japan records at once.
      // ⚖️ A rung that fires on every correct record is the rung she learns to scroll past.
      // The base ingredients string belongs to the default version, so that is what it is judged
      // against. Deltas are NOT resolved here — an honest limit, stated: a mis-tag on a
      // non-default version's own added ingredients is invisible to this rung.
      const _def = (Array.isArray(r.versions) ? r.versions : []).find(v => v && v.default === true);
      const _judgeDiet = (_def && Array.isArray(_def.diet)) ? _def.diet : r.diet;
      const vegan = _judgeDiet.includes('vegan');
      const vegetarian = _judgeDiet.includes('vegetarian');
      if ((vegan || vegetarian) && typeof r.ingredients === 'string') {
        const ing = r.ingredients.toLowerCase();
        const FLESH = ['pork', 'beef', 'chicken', 'duck', 'lamb', 'mutton', 'fish', 'prawn',
                       'shrimp', 'crab', 'squid', 'anchov', 'bacon', 'sausage', 'lard',
                       'tallow', 'tripe', 'kidney', 'liver', 'blood', 'gelatine', 'bones'];
        const DAIRY_EGG = ['egg', 'butter', 'milk', 'cream', 'cheese', 'honey'];
        const FALSE_FRIENDS = ['oyster mushroom', 'chicken of the woods', 'eggplant', 'coconut cream', 'coconut milk', 'soya milk', 'soy milk'];
        // \u2696\ufe0f 'coconut cream' ADDED 31 Jul 2026 and it MUST sit before 'coconut milk'.
        // Found on thailand-khao-niao-mamuang: a correctly-tagged VEGAN record warned on every
        // single merge, because 'coconut milk' was stripped but 'coconut cream' was not, so the
        // bare word 'cream' hit DAIRY_EGG. A rung that fires on a CORRECT record is the rung she
        // learns to scroll past \u2014 same family as the FLESH list missing octopus and dashi.
        const cleaned = FALSE_FRIENDS.reduce((acc, ff) => acc.split(ff).join(''), ing);
        const flesh = FLESH.filter(w => cleaned.includes(w));
        if (flesh.length) warn(r.id, 'default version tagged ' + JSON.stringify(_judgeDiet) + ' but base ingredients mention: ' + flesh.join(', ') + ' — check this is not a mis-tag');
        if (vegan) {
          const de = DAIRY_EGG.filter(w => cleaned.includes(w));
          if (de.length) warn(r.id, 'default version tagged vegan but base ingredients mention: ' + de.join(', ') + ' — check this is not a mis-tag');
        }
      }
    }

    // costPP belongs on versions, never the record (A3). Checked ONCE per record —
    // the China version had this inside the versions loop, so it reported three times.
    if (r.costPP !== undefined) bad(r.id, 'costPP on the record — A3 says versions only');

    // SERVINGS CONVENTION. Added 29 Jul after authoring china-jiao-hua-ji with servings:4,
    // reasoning that a whole bird feeds four. All 44 records already banked use 1 — including
    // china-roast-duck, which lists a whole 2kg duck. Ingredient amounts are per-serving and
    // the app scales them; a record claiming 4 would have scaled wrong against every sibling.
    // Nothing on screen would have said so. Exactly the class of drift this file exists to stop.
    if (r.servings !== 1) bad(r.id, 'servings is ' + r.servings + ', lane convention is 1 — amounts are per-serving and the app scales them (see china-roast-duck: a whole 2kg bird at servings:1)');

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
          if (!okShape(key, ks)) bad(r.id, key + ' shape "' + ks + '" should be "' +
            (Array.isArray(DELTA_OPS[key]) ? DELTA_OPS[key].join('" or "') : DELTA_OPS[key]) + '"');
          // An anchor that points at nothing silently appends at the end instead of inserting
          // where the author meant — a quiet lie, so it is checked like any other dead delta.
          if (key === 'addIng' && o.after && typeof r.ingredients === 'string' && !r.ingredients.includes(o.after))
            bad(r.id, 'DEAD addIng anchor — `after` is not in ingredients: "' + String(o.after).slice(0, 50) + '"');
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

  if (dietDebt.length) {
    warns.push(dietDebt.length + ' existing records have no per-version diet[] (§26 debt, converted at LANE CLOSE not mid-lane) — e.g. ' + dietDebt.slice(0, 3).join(', '));
  }
  return { fails, warns };
}

// ── THE STATE LEDGER (added 30 Jul 2026, ruled by Tina) ───────────────────────
// WHY: on 30 Jul, merge reported "0 + 4 = 4" and two separate tools independently confirmed
// 4 records — and a FIFTH record was afterwards present in wk_indonesia.js. Nothing in the
// toolchain could have caught it, because merge.js validates what it is HANDED and pricecheck
// reports on whatever is in the FILE. Neither knows how many records were supposed to be there.
// Same shape as the ungated tierBar: a silent hole needs a mechanical watcher, not sharper eyes.
//
// ⚖️ TWO RUNGS, DELIBERATELY DIFFERENT, and the split is the whole design:
//   COUNT mismatch → HARD REFUSE. A record appearing or vanishing outside a merge is ALWAYS
//     wrong. This is the rung that would have caught 4 → 5.
//   HASH mismatch, count matching → LOUD WARN, then proceed. Editing prose inside an existing
//     record is legitimate and happens (the Betawi etymology fix, same day). A gate that blocks
//     Tina for a correct edit is an obstacle, not a watcher, and she ruled these in on the
//     condition that they save her time rather than cost it.
const crypto = require('crypto');
const LEDGER_PATH = path.join(__dirname, 'reference', 'ASIA_LEDGER.json');

// Fingerprint the RECORDS, not the file text — so a header edit or a reformat never false-alarms,
// while a record appearing, vanishing or changing always does.
function fingerprint(records) {
  return crypto.createHash('sha256').update(JSON.stringify(records)).digest('hex').slice(0, 16);
}

// Pure, so the selftest can feed it a disagreeing ledger without touching a real file.
function ledgerCheck(ledger, country, count, hash) {
  const prev = ledger && ledger.countries && ledger.countries[country];
  if (!prev) {
    // ⚖️ A MISSING WATCHER MUST NOT LOOK LIKE A FRESH START (30 Jul 2026, Tina's find).
    // PRICE_LEDGER.json and ASIA_LEDGER.json were pushed to the repo ROOT instead of
    // reference/, so for one deploy this file could not find its own record — and it said
    // "first entry for indonesia — baselining", which reads like a healthy startup line.
    // Every merge in that window ran with NO count-and-hash gate and announced it in green.
    // Same shape as the ungated tierBar: the hole was invisible because absence looked normal.
    //
    // THE DISCRIMINATOR IS THE FILE, NOT THE LEDGER. `count` is how many records the country
    // file ALREADY holds. Genuinely new lane → 0 records → silent baseline, which is correct.
    // No ledger entry but 25 records already on disk → the ledger is missing or was reset,
    // and adopting whatever is there without a word is exactly what must not happen.
    //
    // A **WARN**, not a fail, deliberately: China and Japan are closed with no ledger entries
    // and will not be re-baselined, so a hard block would stop a legitimate merge dead. It
    // prints, it is impossible to mistake for a healthy line, and it proceeds.
    if (count > 0) {
      return { state: 'baseline-over-existing', fails: [], warns: [
        'NO LEDGER ENTRY for ' + country + ', but ' + count + ' record' + (count === 1 ? '' : 's') + ' already on disk. ' +
        'This is NOT a new lane — it means reference/ASIA_LEDGER.json is missing, was reset, or ' +
        'sits in the wrong folder (it belongs in reference/, not the repo root). The count-and-hash ' +
        'gate is NOT protecting this merge. Whatever is in the file right now is about to become ' +
        'the new baseline, unverified. If you did not expect this, stop and put the ledger back.'
      ]};
    }
    return { state: 'baseline', fails: [], warns: [] };
  }
  if (prev.records !== count) {
    return { state: 'count-mismatch', warns: [], fails: [
      'ASIA_LEDGER says ' + country + ' held ' + prev.records + ' records at the last merge (' +
      prev.updated + '), but the file now holds ' + count + '. ' +
      (count > prev.records ? 'A RECORD APPEARED outside a merge.' : 'A RECORD VANISHED.') +
      ' Nothing is written until this is explained.'
    ]};
  }
  if (prev.hash !== hash) {
    return { state: 'hash-drift', fails: [], warns: [
      'ASIA_LEDGER hash drift on ' + country + ' — the record COUNT is unchanged (' + count +
      ') but content changed since the last merge. Legitimate for a prose edit inside an existing ' +
      'record; not legitimate for anything you did not do. Re-baselined after this merge.'
    ]};
  }
  return { state: 'match', fails: [], warns: [] };
}

// ⚠️ EXPORT SITS HERE, BELOW EVERYTHING IT NAMES. It was originally placed above the ledger
// block and died with "Cannot access 'LEDGER_PATH' before initialization" — a temporal dead
// zone on a `const`. Caught by merge-selftest.js on the first run after the edit, which is the
// whole argument for running the self-test before shipping a change to the gate itself.
module.exports = { validate, COUNTRIES, loadSchemaKeys, readCountryFile, newHeader, DIET_VOCAB, DELTA_OPS,
                   ledgerCheck, fingerprint, LEDGER_PATH };

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

  // ── LEDGER GATE — runs BEFORE validation, because if the file's state is unexplained then
  //    validating a batch against it is answering the wrong question.
  const ledger = fs.existsSync(LEDGER_PATH) ? JSON.parse(fs.readFileSync(LEDGER_PATH, 'utf8')) : null;
  const lc = ledgerCheck(ledger, countryArg.toLowerCase(), records.length, fingerprint(records));
  lc.warns.forEach(w => console.log('  ⚠️  ' + w));
  if (lc.fails.length) {
    lc.fails.forEach(f => console.log('  ❌ ' + f));
    console.log('\n🔴 LEDGER MISMATCH — NOTHING WRITTEN.');
    console.log('   This is the watcher for a record appearing or vanishing outside a merge.');
    console.log('   If the current file is known-good, re-baseline deliberately:');
    console.log('     node merge.js ' + countryArg + ' <batch> --accept-count');
    console.log('   Do NOT use that flag to make a surprise go away. Find out what happened first.');
    if (!process.argv.includes('--accept-count')) process.exit(1);
    console.log('   ⚠️  --accept-count given: proceeding and re-baselining. This is on the record.');
  }
  if (lc.state === 'baseline') console.log('  📒 ledger: first entry for ' + countryArg + ' — baselining at ' + records.length + ' records.');

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

  // Re-baseline the ledger to what was just written. Written AFTER the file, so a crash between
  // the two leaves the ledger BEHIND rather than ahead — which fails loud next run instead of
  // silently blessing a state nobody verified. Missing < wrong, as always.
  const nextLedger = ledger || { note: 'Record count + content fingerprint per country at the last ' +
    'successful merge. merge.js REFUSES to write on a count mismatch (a record appearing or ' +
    'vanishing outside a merge) and WARNS on hash drift with an unchanged count (a legitimate prose ' +
    'edit). Derived by merge.js, never hand-typed.', countries: {} };
  nextLedger.countries[countryArg.toLowerCase()] = {
    records: all.length,
    hash: fingerprint(all),
    updated: new Date().toISOString().slice(0, 10),
    lastBatch: path.basename(batchArg)
  };
  fs.mkdirSync(path.dirname(LEDGER_PATH), { recursive: true });
  fs.writeFileSync(LEDGER_PATH, JSON.stringify(nextLedger, null, 2) + '\n');
  console.log('   📒 ledger baselined: ' + all.length + ' records · ' + fingerprint(all));

  if (isNew) {
    console.log('\n⛔ WIRING — a file that is not wired is not in the app. TWO lines still needed:');
    console.log('   1. index.html         →  <script src="sections/' + cfg.file + '"></script>');
    console.log('   2. worldkitchen.js:58 →  window.' + cfg.varName + ' || [],   in the wkPool() concat');
    console.log('   (WK_COUNTRY_GEO is already done for all five lane countries.)');
  }
}
