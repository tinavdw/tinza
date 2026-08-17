// wowcheck.js — THE MECHANICAL WATCHER FOR `/wow` AND `/wk`.
//
//   node wowcheck.js <country>            # audit a whole country file
//   node wowcheck.js <country> batch.js   # audit a batch before it is merged
//   node wowcheck.js --selftest           # born-RED proofs
//
// WHY THIS EXISTS (30 Jul 2026, Tina: "you forgot the /wow with indonesia, what about the other /?"):
// She was right, and the honest diagnosis is worse than a single forgotten trigger.
// THERE ARE FOUR TRIGGERS AND ONLY ONE WAS EVER IN MY MEMORY:
//   /wow   → standards/WOW_STANDARD.md      — is the recipe good enough      (the food)
//   /wk    → standards/TINZA_WK_STANDARD.md — complete, correctly placed     (World Kitchen)
//   /tinza → standards/TINZA_STANDARD.md    — does it sound like Tinza       (the voice)
//   /bug   → standards/BUG_STANDARD.md      — is this broken                 (the code)
// Indonesia IS World Kitchen, and `/wk` §7 says a WK card is NOT DONE until every box is ticked.
// Eleven records were banked without that gate ever being run once.
//
// ⚖️ THE DIAGNOSIS, and it is the same one as pricecheck.js and the tierBar: THE STANDARD WAS
//    LIVING IN MEMORY INSTEAD OF IN A TOOL. Memory is exactly where /wk went missing, where the
//    Japan record counts went stale, and where "dashi unsourced" survived after it was sourced.
//    A silent hole needs a mechanical watcher, not sharper eyes.
//
// ⚖️ DESIGN LAW, same as the others: it reads the REAL standards files to confirm they exist and
//    have not moved, and it checks the RECORDS as objects (PARSE-NEVER-REGEX). It does not keep a
//    private copy of the checklist prose — where a rule cannot be mechanised, it says so out loud
//    in the JUDGEMENT list rather than pretending to have checked it.
//
// HONEST LIMIT, stated the way merge.js / pricecheck.js / priceledger.js state theirs:
//    This catches ABSENCE, SHAPE and REUSE. It cannot judge whether a moat is surprising, whether
//    a dish earns its place, or whether the voice sounds like a friend who can cook. Those are §2,
//    the didYouKnow moat and all of /tinza, and they are Tina's eyes only.

const fs = require('fs');
const path = require('path');

const REPO = process.env.TINZA_REPO || __dirname;
const COUNTRIES = {
  china:     { varName: 'WK_CHINA',     file: 'wk_china.js' },
  japan:     { varName: 'WK_JAPAN',     file: 'wk_japan.js' },
  indonesia: { varName: 'WK_INDONESIA', file: 'wk_indonesia.js' },
  thailand:  { varName: 'WK_THAILAND',  file: 'wk_thailand.js' },
  vietnam:   { varName: 'WK_VIETNAM',   file: 'wk_vietnam.js' },
  philippines: { varName: 'WK_PHILIPPINES', file: 'wk_philippines.js' },
  malaysia: { varName: 'WK_MALAYSIA', file: 'wk_malaysia.js' }
};

// The four standards. Presence is asserted so a moved or renamed file fails loud instead of
// this tool quietly auditing against nothing.
const STANDARDS = {
  '/wow':   'standards/WOW_STANDARD.md',
  '/wk':    'standards/TINZA_WK_STANDARD.md',
  '/tinza': 'standards/TINZA_STANDARD.md',
  '/bug':   'standards/BUG_STANDARD.md'
};

// §5 — no retailer names. ⚠️ WORD-BOUNDARY MATCHED, fixed on the tool's first real run:
// a plain substring test flagged 12 records across Japan and China for "spar", which was
// matching inside "spare" and "sparingly". A false failure is worse than a missed one here —
// it sends Tina to fix something that is not broken. Same lesson as priceledger's matcher.
// ⛔ `clicks` was DROPPED from the list rather than fixed: it is an ordinary verb ("the lid
//    clicks shut"), it is a pharmacy rather than a food shop, and no boundary rule saves it.
const RETAILERS = ['checkers', 'woolworths', 'woolies', 'shoprite', 'pick n pay', 'pnp',
                   'spar', 'makro', 'food lover', 'dis-chem'];
const retailerHit = (prose, name) =>
  new RegExp('(^|[^a-z])' + name.replace(/[-\s]/g, '[-\\s]') + '([^a-z]|$)', 'i').test(prose);

const COURSES = ['main', 'starter', 'side', 'dessert', 'staple', 'soup', 'salad', 'bread', 'drink'];

function loadRecords(country, batchFile) {
  if (batchFile) {
    const p = path.resolve(process.cwd(), batchFile);
    if (!fs.existsSync(p)) { console.error('🔴 batch not found: ' + p); process.exit(1); }
    const r = require(p);
    if (!Array.isArray(r)) { console.error('🔴 batch must export an array'); process.exit(1); }
    return r;
  }
  const cfg = COUNTRIES[country];
  const p = path.join(REPO, 'sections', cfg.file);
  if (!fs.existsSync(p)) { console.error('🔴 not found: ' + p); process.exit(1); }
  const w = {};
  (new Function('window', fs.readFileSync(p, 'utf8')))(w);
  return w[cfg.varName] || [];
}

// ── THE AUDIT, pure so the selftest can feed it deliberately broken records ────
function audit(records) {
  const fails = [], warns = [];
  const bad  = (id, m) => fails.push(id + ' — ' + m);
  const warn = (id, m) => warns.push(id + ' — ' + m);

  // reuse detection across the WHOLE file, which is the only place it can be seen
  const feels = new Map(), ids = new Map();

  records.forEach(r => {
    const id = (r && r.id) || '(no id)';
    if (!r) { bad(id, 'null record'); return; }

    // /wk §1 — "Nothing may be missing." A present-but-empty field is a blank.
    ['id','name','nameAlt','course','cuisine','country','ingredients','method','cookTime',
     'kcal','nutrition','storage','chefNotes','pairsWith','trivia','howThisFeels'].forEach(f => {
      if (r[f] == null || String(r[f]).trim() === '') bad(id, '/wk §1 blank field: ' + f);
    });
    ['aliases','type','diet','occasion','leftovers','versions','crossLinks'].forEach(f => {
      if (!Array.isArray(r[f]) || !r[f].length) bad(id, '/wk §1 empty array: ' + f);
    });

    // duplicate ids
    if (ids.has(r.id)) bad(id, 'duplicate id, also at index ' + ids.get(r.id));
    else ids.set(r.id, records.indexOf(r));

    // /wk §2 — course must be a real shelf
    if (!COURSES.includes(r.course)) bad(id, '/wk §2 course "' + r.course + '" is not a shelf');

    // /wk §5 — kcal + nutrition + leftovers, always
    if (!/\d/.test(String(r.kcal))) bad(id, '/wk §5 kcal carries no number');
    if (!/protein/i.test(String(r.nutrition))) bad(id, '/wk §5 nutrition has no protein figure');
    // ⚠️ /wk §5 says leftovers are "creative reuse, always (via the leftover engine key or AN
    //    EXPLICIT LINE)" — SINGULAR. A single line satisfies the standard. This was originally a
    //    hard FAIL below two, which failed five China records against a rule that does not exist.
    //    Inventing a standard and then failing her code against it is worse than missing one.
    //    Emptiness is already a hard fail in the §1 array check above; thinness is a WARN.
    if (Array.isArray(r.leftovers) && r.leftovers.length < 2)
      warn(id, '/wk §5 only ' + r.leftovers.length + ' leftover line — thin, not a breach');

    // /wow §3 — howThisFeels unique, never repeated, RECORD **and** VERSION level
    const collect = s => {
      const k = String(s || '').trim().toLowerCase();
      if (!k) return;
      if (feels.has(k)) bad(id, '/wow §3 howThisFeels REUSED — also on ' + feels.get(k));
      else feels.set(k, id);
    };
    collect(r.howThisFeels);
    (r.versions || []).forEach(v => collect(v && v.howThisFeels));

    // /wk §3 — every version named + icon'd, never "Version 2", exactly one default
    (r.versions || []).forEach((v, i) => {
      if (!v || !v.name || /^version\s*\d/i.test(v.name)) bad(id, '/wk §3 version ' + (i+1) + ' has no proper name');
      if (!v || !v.icon) bad(id, '/wk §3 version ' + (i+1) + ' has no icon');
      if (v && v.costPP == null) bad(id, '/wow costed: version ' + (i+1) + ' has no costPP');
    });
    if ((r.versions || []).filter(v => v && v.default === true).length !== 1)
      bad(id, '/wk §3 must have exactly one default version');

    // /wow §3 — one ingredient per line, no "+" lines, prep not in the name
    const lines = String(r.ingredients || '').split(' · ');
    lines.forEach(l => {
      if (/\s\+\s/.test(l)) bad(id, '/wow §3 "+" line, one ingredient per line: ' + l.trim());
      if (/\bor\b/.test(l)) warn(id, 'A-or-B ingredient line prices nothing: ' + l.trim());
      if (/,\s*(chopped|sliced|diced|grated|minced|crushed|peeled|cut|shredded|beaten|melted)\b/i.test(l))
        warn(id, '/wow §3 prep in the ingredient name, belongs in the method: ' + l.trim());
    });

    // /wow §5 — no retailer names, anywhere in the prose
    const prose = [r.method, r.storage, r.chefNotes, r.pairsWith, r.trivia, r.howThisFeels]
      .concat(r.leftovers || [])
      .concat((r.versions || []).flatMap(v => [v && v.trivia, v && v.howThisFeels,
        ...((v && v.delta && v.delta.addStep) || []).map(s => s && s.text)]))
      .join(' ').toLowerCase();
    RETAILERS.forEach(x => { if (retailerHit(prose, x)) bad(id, '/wow §5 retailer name in prose: "' + x + '"'); });

    // /wow §5 Leavener Law — if a leavener appears, it must carry g or ml
    lines.forEach(l => {
      if (/\b(baking powder|bicarb|bicarbonate|yeast)\b/i.test(l) && !/\d\s*(g|ml)\b/i.test(l))
        bad(id, '/wow §5 Leavener Law: leavener without g/ml — ' + l.trim());
    });

    // /wow §1 — why-led. ⚠️ DEMOTED FROM FAIL TO WARN on the tool's first real run, and the
    //    reason is the tool's own design law. A five-phrase whitelist flagged EIGHT records across
    //    Japan and China as "not why-led" when every one of them was densely why-led — they simply
    //    said "what makes", "the point" and "reason" instead of "because". A method could also use
    //    "because" once and be pure shorthand, so the test fails in BOTH directions.
    //    ⚖️ WHERE A RULE CANNOT BE MECHANISED IT BELONGS IN THE JUDGEMENT LIST, SAID OUT LOUD —
    //    not faked as a green tick. So this counts causal markers and reports thinness, and
    //    "is the method why-led" moves to Tina's eyes where it always belonged.
    const m = String(r.method || '');
    const causal = (m.match(/\b(because|reason|which is why|so that|otherwise|that is why|what makes|the point|which lets|so the|in order to)\b/gi) || []).length;
    if (m.length < 800) warn(id, '/wow §1 method is only ' + m.length + ' chars — shorthand?');
    if (causal === 0) warn(id, '/wow §1 method carries NO causal marker at all — read it, likely not why-led');
    else if (causal < 3 && m.length > 1500) warn(id, '/wow §1 only ' + causal + ' causal markers in ' + m.length + ' chars — thin on why');

    // /wk §1 — servings, and the lane rule
    if (r.servings !== 1) warn(id, 'servings is ' + r.servings + ', lane rule is 1');

    // storage must ANSWER THE QUESTION — which includes answering "it does not keep".
    // ⚠️ FOURTH false positive on the first real run: china-jiao-yan-you-yu says "Eat it now.
    //    There is no honest way to store fried squid", which is a correct and deliberate answer,
    //    and it was flagged for not containing the word "fridge". /wow §3 asks for storage, not
    //    for a refrigerator. A card that says plainly that it does not keep has complied.
    if (!/(fridge|refrigerat|freez|room temperature|does not keep|doesn't keep|eat it now|same day|same hour|within the hour|no honest way to store|will not keep)/i
        .test(String(r.storage)))
      bad(id, '/wow §3 storage does not answer keeps-how-long or say plainly that it does not keep');
  });

  return { fails, warns };
}

// ── the rules that CANNOT be mechanised, named out loud rather than silently skipped ──
const JUDGEMENT = [
  '/wow §2  Does the dish EARN ITS PLACE, or is it googleable as-is? (Shelf-WOW Law)',
  '/wow §3  Is the didYouKnow moat genuinely SURPRISING, and is the ANGLE unreused?',
  '/wow §1  IS THE METHOD WHY-LED? Demoted from a mechanical check on 30 Jul — a phrase',
  '         whitelist flagged 8 densely why-led records as failures. Counted, never judged.',
  '/wow §1  Michelin-to-grandma: precise, warm, zero condescension.',
  '/wow §4  Dish-type make-or-breaks — ferments need salt %, ambient temp and a safety note.',
  '/tinza   READ IT ALOUD. If it sounds like a database it FAILS; if it sounds like a friend',
  '         who can cook it PASSES. A card can pass /wow and still fail /tinza (Law 23).',
  '/wk §6   Run node Tools/photo-audit.js before every push (green = 0 broken).'
];

function report(records, label) {
  // assert the standards are where they are supposed to be
  const missing = Object.entries(STANDARDS).filter(([, p]) => !fs.existsSync(path.join(REPO, p)));
  if (missing.length) {
    console.error('🔴 standard(s) missing: ' + missing.map(([t, p]) => t + ' → ' + p).join(' · '));
    console.error('   Refusing to report — an audit against a file that is not there is not an audit.');
    process.exit(1);
  }

  const { fails, warns } = audit(records);
  console.log('\n════ /wow + /wk AUDIT · ' + label + ' (' + records.length + ' records) ════\n');
  console.log('   standards read: ' + Object.entries(STANDARDS).map(([t]) => t).join(' · ') + '\n');
  warns.forEach(w => console.log('  ⚠️  ' + w));
  if (warns.length) console.log('');
  if (fails.length) {
    fails.forEach(f => console.log('  ❌ ' + f));
    console.log('\n🔴 ' + fails.length + ' /wow-/wk FAILURE' + (fails.length === 1 ? '' : 'S') + '.');
  } else {
    console.log('  ✅ every mechanical box in /wow §7 and /wk §7 is ticked.');
  }
  console.log('\n  ── STILL TINA\'S EYES ONLY, never mechanised: ──');
  JUDGEMENT.forEach(j => console.log('     ' + j));
  console.log('');
  if (fails.length) process.exit(1);
}

// ── --selftest : BORN-RED PROOFS ──────────────────────────────────────────────
function fixture() {
  return {
    id: 'x-dish', name: 'Dish', nameAlt: 'Dish — a gloss', aliases: ['Dish'],
    course: 'main', type: ['main'], diet: ['vegan'], cuisine: 'southeast-asia',
    country: 'Indonesia', occasion: ['everyday'],
    ingredients: '100g potato · 5g salt',
    method: 'Do the thing, and the reason it matters is because the starch behaves. '.repeat(20),
    cookTime: '20 min', kcal: '~300 kcal', nutrition: 'Protein 5g, Carbs 40g, Fat 2g',
    storage: 'Keeps 3 days in the fridge.', chefNotes: 'The one insight.',
    pairsWith: 'Rice.', trivia: 'A surprising thing.', howThisFeels: 'A unique line.',
    leftovers: ['(easy) one', '(easy) two'], servings: 1, sharedWith: '',
    versions: [{ name: 'Budget', icon: '💰', diet: ['vegan'], costPP: 5, default: true },
               { name: 'Other', icon: '🏆', diet: ['vegan'], costPP: 7 }],
    crossLinks: [{ name: 'A', target: 'x-a', emoji: '🍚' }]
  };
}
function selftest() {
  let pass = 0, fail = 0;
  const t = (n, c) => { if (c) { pass++; console.log('  ✅ ' + n); } else { fail++; console.log('  ❌ ' + n); } };
  const F = r => audit([].concat(r)).fails;
  const W = r => audit([].concat(r)).warns;
  console.log('\n════ wowcheck --selftest ════\n');

  t('CONTROL: a clean record produces ZERO failures', F(fixture()).length === 0);

  let r;
  r = fixture(); r.howThisFeels = '';            t('RED: blank howThisFeels', F(r).length === 1);
  // ⚖️ REPOINTED, never deleted (the pricecheck RED-2 precedent): this proof used to assert that
  //    ONE leftover line was a FAIL. That assertion was wrong — /wk §5 permits a single line — so
  //    the proof now asserts the rung that is actually real: an EMPTY leftovers array fails.
  r = fixture(); r.leftovers = [];              t('RED: leftovers EMPTY (the real breach)', F(r).length === 1);
  r = fixture(); r.kcal = 'unknown';             t('RED: kcal with no number', F(r).length === 1);
  r = fixture(); r.nutrition = 'tasty';          t('RED: nutrition with no protein figure', F(r).length === 1);
  r = fixture(); r.course = 'brunch';            t('RED: course is not a real shelf', F(r).length === 1);
  r = fixture(); r.versions[1].icon = '';        t('RED: a version with no icon', F(r).length === 1);
  r = fixture(); r.versions[1].name = 'Version 2'; t('RED: a version named "Version 2"', F(r).length === 1);
  r = fixture(); delete r.versions[0].default;   t('RED: no default version', F(r).length === 1);
  r = fixture(); r.versions[1].default = true;   t('RED: two default versions', F(r).length === 1);
  r = fixture(); delete r.versions[1].costPP;    t('RED: a version with no costPP', F(r).length === 1);
  r = fixture(); r.ingredients = '100g potato + 5g salt'; t('RED: a "+" ingredient line', F(r).length === 1);
  // ⚖️ REPOINTED, never deleted: this proof used to assert a hard FAIL on "not why-led". That
  //    assertion produced 8 false positives on real records, so the rung it guards is now a WARN.
  r = fixture(); r.method = 'Mix it. Bake it. '.repeat(60);
  t('RED-FIXED: no causal marker is a WARN, not a FAIL',
    F(r).length === 0 && W(r).some(w => /NO causal marker/.test(w)));
  r = fixture(); r.method = 'What makes this work is the starch. The point is the heat. '.repeat(30);
  t('CONTROL: "what makes"/"the point" counts as causal, not just "because"',
    !W(r).some(w => /NO causal marker/.test(w)));
  r = fixture(); r.storage = 'It keeps.';        t('RED: storage answers nothing', F(r).length === 1);
  r = fixture(); r.storage = 'Eat it now. There is no honest way to store this.';
  t('RED-FIXED: "does not keep" IS a valid storage answer', F(r).length === 0);
  r = fixture(); r.trivia = 'Buy it at Checkers.'; t('RED: retailer name in prose', F(r).length === 1);
  // the tool's OWN first-run false positive: "spar" inside "spare" / "sparingly"
  r = fixture(); r.trivia = 'Use it sparingly, and keep a spare.';
  t('RED-FIXED: "sparingly"/"spare" is NOT a SPAR hit', F(r).length === 0);
  r = fixture(); r.trivia = 'From SPAR, in season.';
  t('CONTROL: a real SPAR mention still fails', F(r).length === 1);
  r = fixture(); r.method = r.method + ' The lid clicks shut. ';
  t('RED-FIXED: "clicks" is not a retailer (dropped from the list)', F(r).length === 0);
  // the invented standard: /wk §5 says "an explicit line", singular
  r = fixture(); r.leftovers = ['(easy) one'];
  t('RED-FIXED: ONE leftover line is a WARN, not a FAIL', F(r).length === 0 && W(r).some(w => /only 1 leftover/.test(w)));
  r = fixture(); r.ingredients = '100g flour · 7g yeast'; t('CONTROL: leavener WITH grams passes', F(r).length === 0);
  r = fixture(); r.ingredients = '100g flour · a pinch of yeast'; t('RED: Leavener Law, yeast with no g/ml', F(r).length === 1);

  // reuse is only visible across records — the whole reason the audit takes the file, not a card
  {
    const a = fixture(), b = fixture(); b.id = 'x-two';
    t('RED: howThisFeels reused across two records', F([a, b]).length === 1);
  }
  {
    const a = fixture(); a.versions[1].howThisFeels = a.howThisFeels;
    t('RED: a VERSION reusing the record\'s howThisFeels', F(a).length === 1);
  }
  { const a = fixture(), b = fixture(); b.howThisFeels = 'different';
    t('RED: duplicate id across two records', F([a, b]).length === 1); }

  r = fixture(); r.ingredients = '100g potato, peeled and diced · 5g salt';
  t('WARN: prep inside the ingredient name', W(r).some(w => /prep in the ingredient name/.test(w)));
  r = fixture(); r.ingredients = '100g potato or sweet potato · 5g salt';
  t('WARN: A-or-B ingredient line', W(r).some(w => /A-or-B/.test(w)));
  r = fixture(); r.servings = 4;
  t('WARN: servings is not 1', W(r).some(w => /servings is 4/.test(w)));

  console.log('\n  ' + pass + '/' + (pass + fail) + ' passed' + (fail ? '  🔴 ' + fail + ' FAILED' : '  ✅') + '\n');
  if (fail) process.exit(1);
}

module.exports = { audit, JUDGEMENT, STANDARDS };

if (require.main === module) {
  const [a, b] = process.argv.slice(2);
  if (a === '--selftest') selftest();
  else if (!a || !COUNTRIES[a.toLowerCase()]) {
    console.log('usage: node wowcheck.js <country> [batch.js]   ·   node wowcheck.js --selftest');
    console.log('countries: ' + Object.keys(COUNTRIES).join(' · '));
    process.exit(1);
  } else {
    report(loadRecords(a.toLowerCase(), b), b || COUNTRIES[a.toLowerCase()].file);
  }
}
