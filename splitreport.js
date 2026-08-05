// splitreport.js — THE TWO ENGINES, SIDE BY SIDE.  (MF159 commit 2 · 5 Aug 2026)
//
//   node splitreport.js                 # every wk_*.js file — the full split report
//   node splitreport.js africa          # one file
//   node splitreport.js --selftest      # born-RED proofs
//   node splitreport.js --suspect       # only the lines that need a human
//
// WHY THIS EXISTS
// -----------------------------------------------------------------------------
// Tinza has TWO price resolvers live on the same ingredient line at the same moment:
//
//   RECIPE CARD    worldkitchen.js:712  costRecipe(wkCostItems(r), n, wkPriceLookup)
//                  → wkPriceLookup() ONLY. A null goes into missing[] and bills R0.
//
//   PLAN / LIST    worldkitchen.js:1313 pr = wkPriceLookup(name)
//                  → pn = pr ? pr.key : THE RAW NAME
//                  → core.js:1785 priceOf(pn) — and priceOf DOES read PRICE_ALIAS.
//
// So when wkPriceLookup returned null, the shopping list quietly handed the raw name to
// a SECOND, more forgiving engine and got a real number. The same lamb line was R0 on the
// card and R170 in the trolley, at the same moment, for months. MF159 commit 1 gave
// wkPriceLookup a last-resort PRICE_ALIAS rung so the two engines agree.
//
// THE ONE DESIGN DECISION THAT MATTERS
// -----------------------------------------------------------------------------
// ⚖️ THIS TOOL DOES NOT REIMPLEMENT PRICE RESOLUTION. Same law as merge.js, pricecheck.js,
// costcheck.js and tinza-all.js. It loads sections/prices.js + core.js + worldkitchen.js
// into a vm sandbox and calls the APP'S OWN wkParseIngredients() / wkPriceLookup() /
// priceOf(). A watcher with a private copy of the rules measures a program that does not
// exist — which is the exact reason this split survived 371 aliases and 11,102 lines.
//
// HOW "BEFORE" IS MEASURED, AND WHY IT IS NOT A COPY OF THE OLD FUNCTION
// -----------------------------------------------------------------------------
// TWO sandboxes of the SAME real file:
//   AFTER  · untouched. wkPriceLookup() with the MF159 rung live.
//   BEFORE · identical, then PRICE_ALIAS is emptied INSIDE THAT SANDBOX ONLY.
//            worldkitchen.js references PRICE_ALIAS in exactly one place — the MF159 rung —
//            so emptying it reverts wkPriceLookup to its pre-MF159 behaviour EXACTLY, with
//            no second copy of the function to drift. priceOf() is never called in BEFORE.
// ⛔ That one-reference fact is ASSERTED at startup, not assumed. If someone adds a second
//    PRICE_ALIAS reference to worldkitchen.js, this tool REFUSES TO REPORT rather than
//    quietly measuring the wrong thing.
//
// HONEST LIMIT
// -----------------------------------------------------------------------------
// This measures WHICH ENGINE ANSWERS, never whether the answer is right. It can tell you
// `cold chicken stock` is about to bill as a whole chicken. It cannot tell you R90 is the
// right chicken. ⚖️ Law 2 — only Tina's eyes close that.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO_ROOT = process.env.TINZA_REPO || __dirname;
const WK_GLOB = f => /^wk_.*\.js$/.test(f);

// filename → the var it declares. wk_europe_germany.js → WK_EUROPE_GERMANY.
const varNameFor = file => file.replace(/\.js$/, '').toUpperCase();

// ── LOAD THE REAL ENGINES ─────────────────────────────────────────────────────
function makeSandbox() {
  const sandbox = {
    window: {}, document: undefined, console: { log(){}, info(){}, warn(){}, error(){} },
    localStorage: { getItem(){ return null; }, setItem(){}, removeItem(){} },
    navigator: {}, location: { href: '', search: '' }, setTimeout(){}, clearTimeout(){}
  };
  sandbox.globalThis = sandbox;
  return vm.createContext(sandbox);
}

function loadEngines(ctx) {
  const need = ['sections/prices.js', 'sections/core.js', 'sections/worldkitchen.js'];
  const missing = need.filter(f => !fs.existsSync(path.join(REPO_ROOT, f)));
  if (missing.length) {
    console.error('🔴 engine incomplete — missing: ' + missing.join(', '));
    console.error('   Both resolvers or neither. One of two is not a comparison.');
    process.exit(1);
  }
  for (const f of need) {
    const src = fs.readFileSync(path.join(REPO_ROOT, f), 'utf8');
    // A section file may touch the DOM on load; swallow that and verify below.
    try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { /* verified below */ }
  }
  const probe = vm.runInContext(`({
    hasDB:      typeof PRICE_DB          !== 'undefined',
    hasAlias:   typeof PRICE_ALIAS       !== 'undefined',
    hasWkAlias: typeof WK_ALIAS          !== 'undefined',
    hasParse:   typeof wkParseIngredients === 'function',
    hasLookup:  typeof wkPriceLookup      === 'function',
    hasPriceOf: typeof priceOf            === 'function',
    hasWater:   typeof wkIsWater          === 'function',
    aliasCount: typeof PRICE_ALIAS !== 'undefined' ? Object.keys(PRICE_ALIAS).length : 0
  })`, ctx);
  const gaps = [];
  if (!probe.hasDB)      gaps.push('PRICE_DB');
  if (!probe.hasAlias)   gaps.push('PRICE_ALIAS (core.js)');
  if (!probe.hasWkAlias) gaps.push('WK_ALIAS (worldkitchen.js)');
  if (!probe.hasParse)   gaps.push('wkParseIngredients()');
  if (!probe.hasLookup)  gaps.push('wkPriceLookup()');
  if (!probe.hasPriceOf) gaps.push('priceOf()');
  if (gaps.length) {
    console.error('🔴 engines loaded but these did not arrive: ' + gaps.join(' · '));
    console.error('   Refusing to report — a comparison that lost one side is not a comparison.');
    process.exit(1);
  }
  return probe;
}

// ⛔ THE ISOLATION ASSERTION. The BEFORE sandbox reverts commit 1 by emptying PRICE_ALIAS.
// That is only a faithful revert while worldkitchen.js touches PRICE_ALIAS in ONE place.
function assertRungIsIsolated() {
  const src = fs.readFileSync(path.join(REPO_ROOT, 'sections/worldkitchen.js'), 'utf8');
  const refs = (src.match(/PRICE_ALIAS/g) || []).length;
  // ⚖️ COUNTING THE REFERENCES WAS THE WRONG TEST — the rung legitimately names PRICE_ALIAS
  // five times (guard, key, price, and twice more in the return). What actually has to be
  // true is that EVERY reference in the file lives INSIDE the rung. So: cut the rung out of
  // the source and assert the remainder mentions PRICE_ALIAS nowhere at all.
  const rungRe = /\/\/ ⚖️ MF159[\s\S]*?PRICE_ALIAS\[n\]\], per:'weight' \};\s*\n\s*\}/;
  const m = src.match(rungRe);
  const inRung = !!m;
  const rungRefs = m ? (m[0].match(/PRICE_ALIAS/g) || []).length : 0;
  const outsideRefs = m ? ((src.replace(m[0], '').match(/PRICE_ALIAS/g) || []).length) : refs;
  const codeRefs = rungRefs;
  if (refs === 0) {
    console.error('🔴 sections/worldkitchen.js does not mention PRICE_ALIAS at all.');
    console.error('   MF159 commit 1 is NOT INSTALLED. There is nothing for this tool to measure.');
    console.error('   Install the rung first (MF159 §3), then run this.');
    process.exit(1);
  }
  if (!inRung) {
    console.error('🔴 PRICE_ALIAS appears in worldkitchen.js but not as the MF159 rung.');
    console.error('   Refusing to report — this tool reverts commit 1 by emptying PRICE_ALIAS,');
    console.error('   and that is only a faithful revert when the MF159 rung is the only reader.');
    process.exit(1);
  }
  if (outsideRefs > 0) {
    console.error('🔴 worldkitchen.js reads PRICE_ALIAS ' + outsideRefs + ' time(s) OUTSIDE the MF159 rung.');
    console.error('   Emptying PRICE_ALIAS would revert MORE than commit 1, so BEFORE would be a lie.');
    console.error('   ⛔ REFUSING TO REPORT. Fix the tool before trusting a number from it.');
    process.exit(1);
  }
  return { refs, codeRefs, outsideRefs };
}

// ── CALL THE APP'S OWN FUNCTIONS ──────────────────────────────────────────────
const call = (ctx, fn, arg) => {
  try { return vm.runInContext(fn + '(' + JSON.stringify(arg) + ')', ctx); }
  catch (e) { return null; }
};
const parseIngredients = (ctx, s) => call(ctx, 'wkParseIngredients', s) || [];
const lookup           = (ctx, n) => call(ctx, 'wkPriceLookup', n);
const priceOfIn        = (ctx, n) => call(ctx, 'priceOf', n);
const cleanName        = (ctx, n) => call(ctx, 'wkCleanName', n) || '';
const isWater          = (ctx, n) => !!call(ctx, 'wkIsWater', n);

// ── THE CORPUS ────────────────────────────────────────────────────────────────
function wkFiles(only) {
  const dir = path.join(REPO_ROOT, 'sections');
  let files = fs.readdirSync(dir).filter(WK_GLOB).sort();
  if (only) {
    const want = files.filter(f => f === 'wk_' + only + '.js' || f.replace(/^wk_|\.js$/g, '') === only);
    if (!want.length) {
      console.error('🔴 no such World Kitchen file: "' + only + '"');
      console.error('   have: ' + files.map(f => f.replace(/^wk_|\.js$/g, '')).join(' · '));
      process.exit(1);
    }
    files = want;
  }
  return files;
}

// Load every country file into BOTH sandboxes and hand back its records.
//
// ⚠️ EVERY RECORD ARRAY IN THE FILE, NOT THE ONE NAMED AFTER IT. 5 Aug 2026.
// The first version of this function assumed wk_<x>.js declares exactly one array called
// WK_<X>. wk_france.js declares TWO — WK_FRANCE (25 dishes) and FR_SAUCES (6 sauces, which
// ship as real cards through Spice → Sauces). Those six records were invisible to this tool,
// and the miss was not silent by luck: it showed up as `shallot` measuring 4 where SPLIT_121
// said 5, and `Gruyère` 5 where it said 6. ⚖️ THE TABLE WAS RIGHT AND THE TOOL WAS WRONG.
// ⛔ pricecheck.js has the SAME hole — its COUNTRIES map is one varName per file, so
//    FR_SAUCES has never been under the price watcher either. Logged, not fixed here (Law 5).
function recordArrayNames(src) {
  const names = [];
  const re = /^(?:var|const|let)\s+([A-Z_][A-Z_0-9]*)\s*=\s*\[/gm;
  let m; while ((m = re.exec(src)) !== null) names.push(m[1]);
  return names;
}

function loadRecords(ctxA, ctxB, files) {
  const out = [];
  for (const f of files) {
    const src = fs.readFileSync(path.join(REPO_ROOT, 'sections', f), 'utf8');
    for (const ctx of [ctxA, ctxB]) {
      try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { /* verified below */ }
    }
    const declared = recordArrayNames(src);
    const found = [];
    for (const v of declared) {
      const arr = vm.runInContext(`(typeof ${v} !== 'undefined' && Array.isArray(${v}) ? ${v} : null)`, ctxA);
      if (!arr || !arr.length) continue;
      // A RECORD ARRAY is one whose entries carry an id and an ingredients string. That is
      // what makes it costable; anything else in the file is not a card and is not measured.
      const isRecords = arr.some(r => r && typeof r === 'object' && r.id && typeof r.ingredients === 'string');
      if (isRecords) found.push({ v, arr });
    }
    if (!found.length) {
      console.error('🔴 ' + f + ' declares ' + (declared.join(', ') || 'no arrays') + ' but none hold records.');
      console.error('   Refusing to under-report — a file that silently contributes nothing is the bug.');
      process.exit(1);
    }
    // The primary array must be the one named after the file, or the naming convention has
    // moved and every other tool keyed off varNameFor() is quietly reading the wrong thing.
    if (!found.some(x => x.v === varNameFor(f))) {
      console.error('🔴 ' + f + ' does not declare ' + varNameFor(f) + '. The naming convention has moved.');
      process.exit(1);
    }
    for (const { v, arr } of found) {
      out.push({ file: f, label: f.replace(/^wk_|\.js$/g, ''), varName: v, records: arr });
    }
  }
  return out;
}

// ── SUSPECT FLAGS — mechanical, each one prints its reason ────────────────────
// ⚠️ \u-escaped ON PURPOSE. Written as literal combining marks this range is invisible in
// an editor, and one stray keystroke silently turns "Gruyère" into an unmatchable string.
const deaccent = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const words = s => deaccent(s).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
const singular = w => w.replace(/ies$/, 'y').replace(/([^s])s$/, '$1');

function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m || !n) return Math.max(m, n);
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

const UNIT_WORDS = /^(litres?|liters?|ml|kg|g|grams?|cups?|tbsps?|tsps?|tablespoons?|teaspoons?|packets?|tins?|cans?)\b/;

// ⚖️ SAME PRODUCT vs DIFFERENT PRODUCT — the one judgement this tool makes, made
// mechanically so it cannot drift. Same product = the key is the written name, its
// plural, a superset of its words (lamb → lamb neck, vanilla → vanilla essence), or
// within an edit of two after accent-stripping (Gruyere → gruyere). Anything else is
// a SUBSTITUTION and a human has to agree to it.
function sameProduct(head, key) {
  const h = words(head).map(singular), k = words(key).map(singular);
  if (!h.length || !k.length) return false;
  const hs = h.join(' '), ks = k.join(' ');
  if (hs === ks) return true;
  if (k.every(w => h.includes(w)) || h.every(w => k.includes(w))) return true;   // superset either way
  if (lev(hs, ks) <= 2) return true;                                             // spelling / accent
  return false;
}

// ── WHY IS IT *STILL* SPLIT? ──────────────────────────────────────────────────
// Commit 1 closes the lines PRICE_ALIAS can reach. It does not close them all, and a
// report that just says "still R0" hands Tina a list with no next move. Each remaining
// line is asked WHICH rung the card is missing — measured against the real PRICE_DB in
// the sandbox, never guessed.
function whyStillSplit(ctx, name, listKey) {
  const n = cleanName(ctx, name);
  const has = k => vm.runInContext('PRICE_DB[' + JSON.stringify(k) + '] != null', ctx);
  // The stock/broth guard (worldkitchen.js:637) returns null BEFORE the alias rung can run,
  // deliberately — it exists so a stock line can never fall through to a raw-protein price.
  if (/\b(stock|broth)\b/.test(n)) {
    return 'STOCK-GUARD|the stock/broth guard returns null before the alias rung — by design, so `' +
           listKey + '` can never bill a pantry liquid as the raw product. ⛔ The GUARD is right and the LIST is wrong here.';
  }
  // priceOf (core.js:1580) tries singular→plural. wkPriceLookup only tries plural→singular.
  if (has(n + 's')) {
    return 'SINGULAR→PLURAL|`' + n + 's` is a real key and priceOf finds it (core.js:1580), but wkPriceLookup only de-pluralises the other way. A missing rung, not a missing alias.';
  }
  return 'PRICEOF-ONLY|priceOf reaches `' + listKey + '` through a rung wkPriceLookup does not have (qualifier-stripping / broader word match).';
}

function suspectFlags(ctx, written, key, billable, toTaste) {
  const flags = [];
  const raw = String(written);
  const head = raw.split(',')[0].replace(/\([^)]*\)/g, ' ').trim();
  const low = deaccent(raw).toLowerCase();

  if (/\bor\b/.test(low)) {
    flags.push('A-OR-B|"' + head + '" offers a choice — an either/or line cannot price honestly, and it is already ruled against');
  }
  if (UNIT_WORDS.test(deaccent(head).toLowerCase().trim())) {
    flags.push('UNIT-WORD|the line starts with a unit ("' + head + '") — the unit word has eaten the ingredient name');
  }
  if (/\b(stock|broth)\b/.test(low) && !/\b(stock|broth)\b/.test(String(key).toLowerCase())) {
    flags.push('STOCK→PRODUCT|a stock/broth line resolving to `' + key + '` — pantry liquid billing as the raw product');
  }
  if (toTaste || /\b(to taste|as needed|as required)\b/.test(low)) {
    flags.push('PARSE-ARTEFACT|"' + head + '" is a seasoning instruction that became an ingredient line');
  }
  if (key && !sameProduct(head, key)) {
    flags.push('DIFFERENT-PRODUCT|`' + key + '` is a SUBSTITUTION for "' + head + '", not another spelling of it');
  }
  if (!billable) {
    flags.push('NOT-BILLED|no quantity (or water) — the card never bills this line either way');
  }
  return flags;
}

// ── MEASURE ───────────────────────────────────────────────────────────────────
// Per ingredient LINE, ask both engines exactly what the app asks them.
function measure(ctxAfter, ctxBefore, corpus) {
  const rows = [];
  let totalLines = 0, totalRecords = 0;

  const noteLine = (item, rec, file, where) => {
    const name = String(item && item.name || '').trim();
    if (!name) return;
    totalLines++;

    const water   = isWater(ctxAfter, name);
    const toTaste = !!(item.toTaste) || item.qty == null;
    // wkCostItems() skips to-taste and water — those never bill on the card at all.
    const billable = !toTaste && !water;

    // BEFORE — wkPriceLookup with the MF159 rung neutered (PRICE_ALIAS emptied).
    const before = lookup(ctxBefore, name);
    // AFTER — the real, current function.
    const after  = lookup(ctxAfter, name);
    // THE LIST, TODAY — worldkitchen.js:1313-1318: pn = pr ? pr.key : raw name → priceOf(pn).
    const pnBefore = before ? before.key : name;
    const list = priceOfIn(ctxAfter, pnBefore);

    // SPLIT = the card resolved NOTHING while the list resolved SOMETHING.
    const split = !before && !!list;
    // MOVED = the card DID price, and now prices differently. Should be empty: the rung is
    // last. The head-clause recursion is the one path that could move a priced line, so it
    // is measured rather than assumed. ⚖️ Law 22.
    const moved = !!before && !!after && before.key !== after.key;

    if (!split && !moved) return;

    rows.push({
      name, id: (rec && rec.id) || '?', file, where, billable, toTaste, water, split, moved,
      beforeKey: before ? before.key : null,
      beforePrice: before ? before.price : null,
      afterKey: after ? after.key : null,
      afterPrice: after ? after.price : null,
      listKey: list ? list.key : null,
      listPrice: list ? list.price : null,
      fixed: split && !!after,
      why: (split && !after && billable) ? whyStillSplit(ctxAfter, name, list ? list.key : '') : null,
      flags: suspectFlags(ctxAfter, name, (after ? after.key : (list ? list.key : '')), billable, toTaste)
    });
  };

  for (const c of corpus) {
    for (const rec of c.records) {
      if (!rec || !rec.id) continue;
      totalRecords++;
      for (const it of parseIngredients(ctxAfter, rec.ingredients)) noteLine(it, rec, c.label, 'base');
      // Version deltas are real lines a fork actually buys. They do not reach the CARD
      // total (wkCostItems reads recipe.ingredients only) but they do reach the LIST,
      // so they are collected and marked — never silently dropped.
      for (const v of (rec.versions || [])) {
        const d = v && v.delta; if (!d) continue;
        for (const x of (d.addIng  || [])) for (const it of parseIngredients(ctxAfter, x.item)) noteLine(it, rec, c.label, 'v:' + (v.name || '?'));
        for (const x of (d.swapIng || [])) for (const it of parseIngredients(ctxAfter, x.to))   noteLine(it, rec, c.label, 'v:' + (v.name || '?'));
      }
    }
  }
  return { rows, totalLines, totalRecords };
}

// ── REPORT ────────────────────────────────────────────────────────────────────
const R = n => (n == null ? '—' : 'R' + Math.round(n));
const pad = (s, w) => { s = String(s); return s.length > w ? s.slice(0, w - 1) + '…' : s + ' '.repeat(w - s.length); };

function report(res, opts) {
  const { rows, totalLines, totalRecords } = res;
  const split = rows.filter(r => r.split);
  const moved = rows.filter(r => r.moved);
  const billable = split.filter(r => r.billable);
  const fixed = billable.filter(r => r.fixed);
  const stillSplit = billable.filter(r => !r.fixed);
  const artefacts = split.filter(r => !r.billable);
  const suspect = billable.filter(r => r.flags.some(f => !/^NOT-BILLED/.test(f)));

  console.log('\n════ THE TWO ENGINES, SIDE BY SIDE · MF159 ════');
  console.log('   corpus: ' + totalRecords + ' records · ' + totalLines + ' ingredient lines');
  console.log('   CARD = wkPriceLookup() alone   ·   LIST = priceOf() via the raw name\n');

  const show = opts.suspectOnly ? suspect : billable;
  if (show.length) {
    console.log('── ' + (opts.suspectOnly ? 'SUSPECT LINES ONLY' : 'EVERY SPLIT LINE') + ' ──');
    console.log('   ' + pad('written name', 46) + pad('record', 34) + pad('file', 14) + pad('card was', 10) + pad('card now', 22) + 'list today');
    console.log('   ' + '─'.repeat(140));
    for (const r of show.sort((a, b) => a.file.localeCompare(b.file) || a.name.localeCompare(b.name))) {
      const mark = r.flags.some(f => !/^NOT-BILLED/.test(f)) ? '⚠️ ' : '   ';
      console.log(mark + pad(r.name, 46) + pad(r.id, 34) + pad(r.file, 14)
                + pad(r.fixed || r.beforeKey ? R(r.beforePrice) : 'R0', 10)
                + pad(r.afterKey ? (r.afterKey + ' ' + R(r.afterPrice)) : '⛔ STILL R0', 22)
                + (r.listKey ? r.listKey + ' ' + R(r.listPrice) : '—'));
      if (r.why) {
        const [tag, why] = r.why.split('|');
        console.log('        ⛔ ' + tag + ' · ' + why);
      }
      for (const f of r.flags) {
        if (/^NOT-BILLED/.test(f)) continue;
        const [tag, why] = f.split('|');
        console.log('        ⚠️ ' + tag + ' · ' + why);
      }
    }
    console.log('');
  }

  if (artefacts.length) {
    console.log('── PARSE ARTEFACTS · split, but the card never billed them anyway ──');
    console.log('   (no quantity, or water — wkCostItems skips these. Listed so the count reconciles.)');
    for (const r of artefacts.sort((a, b) => a.name.localeCompare(b.name))) {
      console.log('   · ' + pad(r.name, 50) + pad(r.id, 34) + (r.listKey ? r.listKey + ' ' + R(r.listPrice) : '—'));
    }
    console.log('');
  }

  if (moved.length) {
    console.log('── 🔴 MOVED · lines that ALREADY priced and now price DIFFERENTLY ──');
    console.log('   ⚠️ MF159 §2 says nothing that currently prices may change. Every row here');
    console.log('      contradicts that and needs Tina before commit 1 ships.');
    for (const r of moved) {
      console.log('   · ' + pad(r.name, 46) + pad(r.id, 34)
                + r.beforeKey + ' ' + R(r.beforePrice) + '  →  ' + r.afterKey + ' ' + R(r.afterPrice));
    }
    console.log('');
  } else {
    console.log('── MOVED · none. No line that already priced has changed its key. ⚖️ MF159 §2 holds.\n');
  }

  const names = new Set(split.map(r => r.name.toLowerCase()));
  const recs  = new Set(split.map(r => r.id));
  console.log('── SUMMARY ──');
  console.log('   SPLIT TODAY        ' + split.length + ' lines · ' + names.size + ' distinct names · ' + recs.size + ' records');
  console.log('      · billable      ' + billable.length + '   (the card really does bill these R0)');
  console.log('      · artefacts     ' + artefacts.length + '   (no qty / water — never billed either way)');
  console.log('   CLOSED BY MF159    ' + fixed.length + ' lines now price on the card');
  console.log('   STILL SPLIT        ' + stillSplit.length + ' lines — the rung does not reach them');
  const byWhy = {};
  for (const r of stillSplit) { const t = (r.why || 'OTHER|').split('|')[0]; byWhy[t] = (byWhy[t] || 0) + 1; }
  for (const t of Object.keys(byWhy).sort((a, b) => byWhy[b] - byWhy[a])) {
    console.log('      · ' + t.padEnd(16) + byWhy[t]);
  }
  console.log('   ⚠️ SUSPECT         ' + suspect.length + ' lines need a human before they are trusted');
  console.log('   🔴 MOVED           ' + moved.length + ' lines changed an existing price');
  console.log('\n   HONEST LIMIT: this measures WHICH ENGINE ANSWERS, never whether the answer');
  console.log('   is right. It can say `cold chicken stock` is about to bill as a whole chicken.');
  console.log('   It cannot say R90 is the right chicken. ⚖️ Law 2.\n');
  return { split, billable, fixed, stillSplit, artefacts, suspect, moved, names, recs };
}

// ── SELF-TEST · BORN-RED, ALL THREE PROOFS MF159 §4 DEMANDS ───────────────────
// ⚖️ Before trusting a zero, prove the probe can return a one. (The doubanjiang scar, 4 Aug.)
function selftest() {
  console.log('\n🔬 BORN-RED PROOFS — MF159 §4\n');
  let pass = 0, fail = 0;
  const check = (label, got, want) => {
    const ok = got === want;
    console.log((ok ? '  ✅ ' : '  ❌ ') + label + (ok ? '' : '    got=' + JSON.stringify(got) + ' want=' + JSON.stringify(want)));
    ok ? pass++ : fail++;
  };

  const iso = assertRungIsIsolated();
  console.log('  ℹ️  isolation: worldkitchen.js reads PRICE_ALIAS in ' + iso.codeRefs + ' code reference(s) — the MF159 rung.\n');

  const ctxAfter = makeSandbox();  loadEngines(ctxAfter);
  const ctxBefore = makeSandbox(); loadEngines(ctxBefore);
  vm.runInContext('PRICE_ALIAS = {};', ctxBefore);

  // ── GREEN CONTROLS · if these fail everything below is noise.
  check('GREEN · the BEFORE sandbox really did lose its aliases',
        vm.runInContext('Object.keys(PRICE_ALIAS).length', ctxBefore), 0);
  check('GREEN · the AFTER sandbox kept them',
        vm.runInContext('Object.keys(PRICE_ALIAS).length > 300', ctxAfter), true);

  // ── PROOF 1 · a known split name IS reported. (MF159 §4.1)
  // `lamb` is 11 of the 121 and the reason this brief exists: R0 on the card, R170 in the list.
  const lambBefore = lookup(ctxBefore, 'lamb');
  const lambAfter  = lookup(ctxAfter,  'lamb');
  const lambList   = priceOfIn(ctxAfter, 'lamb');
  check('RED 1 · "lamb" resolved to NOTHING on the card before MF159', lambBefore, null);
  check('RED 1 · "lamb" DID resolve in the list engine before MF159 (the split)', !!lambList, true);
  check('RED 1 · "lamb" now resolves on the card', lambAfter && lambAfter.key, 'lamb neck');
  check('RED 1 · and both engines now agree on the key', lambAfter && lambList && lambAfter.key === lambList.key, true);

  // ── PROOF 2 · deleting the alias CHANGES the tool's answer. (MF159 §4.2)
  // This is the whole mechanism: if emptying PRICE_ALIAS did nothing, BEFORE would equal
  // AFTER and this tool would confidently report a zero it had not measured.
  const ctxNoAlias = makeSandbox(); loadEngines(ctxNoAlias);
  const withAlias = lookup(ctxNoAlias, 'lamb');
  vm.runInContext("delete PRICE_ALIAS['lamb'];", ctxNoAlias);
  const withoutAlias = lookup(ctxNoAlias, 'lamb');
  check('RED 2 · with the alias present, the card prices "lamb"', withAlias && withAlias.key, 'lamb neck');
  check('RED 2 · deleting ONLY that one alias makes the card lose it again', withoutAlias, null);
  check('RED 2 · so the answer is genuinely coming from PRICE_ALIAS, not a coincidence',
        (withAlias && withAlias.key) !== (withoutAlias && withoutAlias.key), true);

  // ── PROOF 3 · a name that is NOT split is NOT reported. (MF159 §4.3 — no false positives)
  // `chicken` has a real key. Both engines answered it before MF159 and both answer it now;
  // if this row ever appears in the report, the tool is inventing splits.
  const ctrlBefore = lookup(ctxBefore, 'chicken');
  const ctrlAfter  = lookup(ctxAfter,  'chicken');
  check('GREEN 3 · "chicken" priced on the card BEFORE MF159', !!ctrlBefore, true);
  check('GREEN 3 · "chicken" prices identically AFTER', ctrlBefore && ctrlAfter && ctrlBefore.key === ctrlAfter.key, true);
  check('GREEN 3 · so it is NOT a split and must never be reported', !ctrlBefore === false, true);

  // ── PROOF 4 · the SUSPECT rule can tell a spelling from a substitution.
  check('RED 4 · Gruyère → emmental cheese is a SUBSTITUTION', sameProduct('Gruyère', 'emmental cheese'), false);
  check('RED 4 · white beans → butter beans is a SUBSTITUTION', sameProduct('white beans', 'butter beans'), false);
  check('GREEN 4 · orange → oranges is only a plural', sameProduct('orange', 'oranges'), true);
  check('GREEN 4 · vanilla → vanilla essence only adds a qualifier', sameProduct('vanilla', 'vanilla essence'), true);
  check('RED 4 · an A-or-B line is flagged',
        suspectFlags(ctxAfter, 'chicken or vegetable stock', 'chicken', true, false).some(f => /^A-OR-B/.test(f)), true);
  check('RED 4 · a unit-eaten line is flagged',
        suspectFlags(ctxAfter, 'litres chicken stock', 'chicken', true, false).some(f => /^UNIT-WORD/.test(f)), true);
  check('RED 4 · a stock line billing as a product is flagged',
        suspectFlags(ctxAfter, 'cold chicken stock', 'chicken', true, false).some(f => /^STOCK/.test(f)), true);
  check('GREEN 4 · a plain, honest line carries NO suspect flag',
        suspectFlags(ctxAfter, 'orange', 'oranges', true, false).length, 0);

  // ── PROOF 5 · THE COLLECTOR MUST FIND EVERY RECORD ARRAY, NOT ONE PER FILE.
  // This is the hole that made the first run report 116 against SPLIT_121.md's 121: wk_france.js
  // declares WK_FRANCE **and** FR_SAUCES, and the sauces were invisible. ⚖️ Law 42 — the bug
  // does not get to walk in twice.
  const frSrc = fs.readFileSync(path.join(REPO_ROOT, 'sections/wk_france.js'), 'utf8');
  const frArrays = recordArrayNames(frSrc);
  check('RED 5 · wk_france.js is seen to declare MORE THAN ONE array', frArrays.length > 1, true);
  check('RED 5 · and FR_SAUCES is one of them', frArrays.includes('FR_SAUCES'), true);
  const ctxFr = makeSandbox(); loadEngines(ctxFr);
  const ctxFr2 = makeSandbox(); loadEngines(ctxFr2);
  const frCorpus = loadRecords(ctxFr, ctxFr2, ['wk_france.js']);
  check('RED 5 · the collector returns BOTH arrays, not just WK_FRANCE',
        frCorpus.map(c => c.varName).sort().join(','), 'FR_SAUCES,WK_FRANCE');
  check('RED 5 · and the sauce records really carry ingredients',
        frCorpus.find(c => c.varName === 'FR_SAUCES').records.some(r => r.id && r.ingredients), true);

  console.log('\n  ' + (fail ? '🔴 ' + fail + ' FAILED' : '✅ all ' + pass + ' proofs pass') + '  (' + pass + '/' + (pass + fail) + ')\n');
  process.exit(fail ? 1 : 0);
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
if (argv.includes('--selftest')) selftest();

const suspectOnly = argv.includes('--suspect');
const asJson = argv.includes('--json');       // machine-readable, for reconciling against SPLIT_121.md
const only = argv.filter(a => !a.startsWith('--'))[0] || null;

const iso = assertRungIsIsolated();
const ctxAfter = makeSandbox();  const probe = loadEngines(ctxAfter);
const ctxBefore = makeSandbox(); loadEngines(ctxBefore);
vm.runInContext('PRICE_ALIAS = {};', ctxBefore);

const files = wkFiles(only);
const corpus = loadRecords(ctxAfter, ctxBefore, files);
if (asJson) {
  const res = measure(ctxAfter, ctxBefore, corpus);
  console.log(JSON.stringify(res.rows.filter(r => r.split)));
  process.exit(0);
}
console.log('\n   engines: ' + probe.aliasCount + ' PRICE_ALIAS entries · ' + files.length + ' World Kitchen file(s)');
console.log('   BEFORE sandbox = the same real wkPriceLookup with PRICE_ALIAS emptied (' + iso.codeRefs + ' code ref, the MF159 rung)');
report(measure(ctxAfter, ctxBefore, corpus), { suspectOnly });
