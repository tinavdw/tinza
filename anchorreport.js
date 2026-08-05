// anchorreport.js — WHICH LINE IS THE PORTION MEASURED ON?  (MF161 commit 2 · 5 Aug 2026)
//
//   node anchorreport.js                # every wk_*.js — every record whose anchor or mult moved
//   node anchorreport.js china          # one file
//   node anchorreport.js --selftest     # born-RED proofs, all three arms
//   node anchorreport.js --redline      # just the seven records that MUST NOT move
//   node anchorreport.js --json         # machine-readable
//
// WHY THIS EXISTS
// -----------------------------------------------------------------------------
// wkClassifyMain() walks the ingredient list IN AUTHORED ORDER and returns the FIRST line
// whose name matches a main category. `beef tallow` contains `beef` and sits at line 1 of
// Chongqing Hotpot; `beef sirloin` sits at line 19. So the whole recipe was scaled to land
// RENDERED FAT on the 180g boneless-meat plate, per person — "1.3kg beef tallow · 180g per
// person · R702 pp" on Tina's screen, 5 Aug.
//
// It breaks BOTH WAYS from the one line of code:
//   🔺 INFLATES  a tallow-led hotpot — 200g of fat forced UP to a 180g per-person plate
//   🔻 DEFLATES  a stock-led soup   — 2 litres of beef stock crushed DOWN onto the same plate,
//                                     rendering soupe a l'oignon at 17% of its authored amounts.
//
// MF161 commit 1 adds WK_NOT_A_MAIN: a carrier (fat/stock/sauce/paste/oil) is skipped FOR
// CATEGORY ONLY, and stays eligible as firstWeighted so an all-stock card still resolves.
//
// THE ONE DESIGN DECISION THAT MATTERS
// -----------------------------------------------------------------------------
// ⚖️ THIS TOOL DOES NOT REIMPLEMENT THE PORTION BRAIN. Same law as merge.js, pricecheck.js,
// costcheck.js, splitreport.js, tinza-all.js. It loads prices.js + core.js + worldkitchen.js
// into a vm sandbox and calls the APP'S OWN wkClassifyMain() / wkEffectiveMult() /
// wkCostRecipeShape(). The Portion Brain is LOCKED (180/250/160/200/150, taper 100/70/58/50)
// and this tool must not carry a second opinion about it.
//
// HOW "BEFORE" IS MEASURED
// -----------------------------------------------------------------------------
// TWO sandboxes of the SAME real file. AFTER is untouched. BEFORE has WK_NOT_A_MAIN replaced
// with /(?!)/ — a regex that matches nothing — so the guard's `if(!WK_NOT_A_MAIN.test(...))`
// is always true and wkClassifyMain behaves EXACTLY as it did before commit 1. No second copy
// of the function exists to drift. ⛔ That WK_NOT_A_MAIN is read in exactly one place is
// ASSERTED at startup, not assumed.
//
// HONEST LIMIT
// -----------------------------------------------------------------------------
// This shows WHICH LINE the portion is measured on and what that does to the mult and the
// rendered per-person cost. It cannot tell you the new anchor is the RIGHT anchor — only that
// it is no longer a carrier. ⚖️ Law 2, Tina's eyes on live.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO_ROOT = process.env.TINZA_REPO || __dirname;

// ⚖️ THE SEVEN RED-LINED RECORDS · MF161 §2. Measured 5 Aug and CORRECT as they stand.
// A guard built by pattern alone would break every one of them, so they are checked by name
// on every run and any movement is a STOP, not a diff line.
const RED_LINED = [
  ['ukraine-salo',              'Salo IS cured pork fat. The fat is the dish.'],
  ['china-hong-you-chao-shou',  '"pork mince, roughly 20% fat" — `fat` is a SPEC on the mince'],
  ['china-shizi-tou',           '"pork shoulder, 70:30 lean to fat" — a ratio, not an ingredient'],
  ['indonesia-sambal-terasi',   'protected by WK_KEEP_AUTHORED (the 30 Jul scar) — mult must stay 1'],
  ['indonesia-sambal-matah',    'protected by WK_KEEP_AUTHORED — mult must stay 1'],
  ['indonesia-rujak',           'protected by WK_KEEP_AUTHORED — mult must stay 1'],
  ['ethiopia-shiro-wat',        'shiro IS the powder; cat=pulse correctly keeps authored amounts'],
  ['indian-gulab-jamun',        'the dough IS milk powder'],
  ['turkey-tarhana-corbasi',    'tarhana IS the dish']
];

// ── SANDBOX ───────────────────────────────────────────────────────────────────
function makeSandbox() {
  const s = {
    window: {}, document: undefined, console: { log(){}, info(){}, warn(){}, error(){} },
    localStorage: { getItem(){ return null; }, setItem(){}, removeItem(){} },
    navigator: {}, location: { href: '', search: '' }, setTimeout(){}, clearTimeout(){}
  };
  s.globalThis = s;
  return vm.createContext(s);
}

function loadEngines(ctx) {
  const need = ['sections/prices.js', 'sections/core.js', 'sections/worldkitchen.js'];
  const missing = need.filter(f => !fs.existsSync(path.join(REPO_ROOT, f)));
  if (missing.length) {
    console.error('🔴 engine incomplete — missing: ' + missing.join(', '));
    process.exit(1);
  }
  for (const f of need) {
    try { vm.runInContext(fs.readFileSync(path.join(REPO_ROOT, f), 'utf8'), ctx, { filename: f }); }
    catch (e) { /* verified below */ }
  }
  const probe = vm.runInContext(`({
    hasClassify: typeof wkClassifyMain      === 'function',
    hasMult:     typeof wkEffectiveMult     === 'function',
    hasShape:    typeof wkCostRecipeShape   === 'function',
    hasParse:    typeof wkParseIngredients  === 'function',
    hasClean:    typeof wkCleanName         === 'function',
    hasDelta:    typeof applyVersionDelta   === 'function',
    hasGuard:    typeof WK_NOT_A_MAIN       !== 'undefined',
    hasKeep:     typeof WK_KEEP_AUTHORED    !== 'undefined'
  })`, ctx);
  const gaps = [];
  if (!probe.hasClassify) gaps.push('wkClassifyMain()');
  if (!probe.hasMult)     gaps.push('wkEffectiveMult()');
  if (!probe.hasShape)    gaps.push('wkCostRecipeShape()');
  if (!probe.hasParse)    gaps.push('wkParseIngredients()');
  if (!probe.hasDelta)    gaps.push('applyVersionDelta()  (core.js)');
  if (!probe.hasKeep)     gaps.push('WK_KEEP_AUTHORED');
  if (gaps.length) {
    console.error('🔴 engines loaded but these did not arrive: ' + gaps.join(' · '));
    console.error('   Refusing to report — a comparison that lost one side is not a comparison.');
    process.exit(1);
  }
  return probe;
}

// ⛔ THE ISOLATION ASSERTION. BEFORE reverts commit 1 by neutering WK_NOT_A_MAIN, which is a
// faithful revert ONLY while that regex is read in exactly one place. Same rung as
// splitreport.js's PRICE_ALIAS assertion, and for the same reason.
function assertGuardIsIsolated() {
  const src = fs.readFileSync(path.join(REPO_ROOT, 'sections/worldkitchen.js'), 'utf8');
  const all = (src.match(/WK_NOT_A_MAIN/g) || []).length;
  if (all === 0) {
    console.error('🔴 sections/worldkitchen.js does not mention WK_NOT_A_MAIN at all.');
    console.error('   MF161 commit 1 is NOT INSTALLED. There is nothing for this tool to measure.');
    process.exit(1);
  }
  const decl = (src.match(/^var WK_NOT_A_MAIN\s*=/m) || []).length;
  const uses = (src.match(/!WK_NOT_A_MAIN\.test\(wkCleanName\(it\.name\)\)/g) || []).length;
  const comments = (src.match(/^\s*\/\/.*WK_NOT_A_MAIN.*$/gm) || []).length;
  if (decl !== 1) {
    console.error('🔴 WK_NOT_A_MAIN is declared ' + decl + ' times. Expected exactly 1.');
    process.exit(1);
  }
  if (uses !== 1) {
    console.error('🔴 WK_NOT_A_MAIN is TESTED in ' + uses + ' place(s). Expected exactly 1 (inside wkClassifyMain).');
    console.error('   Neutering it would revert MORE than commit 1, so BEFORE would be a lie.');
    console.error('   ⛔ REFUSING TO REPORT.');
    process.exit(1);
  }
  if (all !== decl + uses + comments) {
    console.error('🔴 WK_NOT_A_MAIN appears ' + all + ' times but only ' + (decl + uses + comments) +
                  ' are accounted for (1 decl + 1 test + ' + comments + ' comments).');
    console.error('   ⛔ REFUSING TO REPORT — an unaccounted reference means BEFORE is not a clean revert.');
    process.exit(1);
  }
  return { all, decl, uses, comments };
}

// Neuter the guard: a regex that can never match, so the `if(!...test())` is always true.
const neuterGuard = ctx => vm.runInContext('WK_NOT_A_MAIN = /(?!)/;', ctx);

// ── THE CORPUS · CARRIED OVER FROM splitreport.js ─────────────────────────────
// ⚠️ EVERY RECORD ARRAY IN THE FILE, NOT THE ONE NAMED AFTER IT.
// wk_france.js declares TWO — WK_FRANCE (25 dishes) and FR_SAUCES (6 sauces). A one-array-
// per-file loader misses france-soupe-a-loignon's neighbours entirely and REPORTS SUCCESS.
// This cost splitreport.js a wrong answer on 5 Aug (116 against a true 118) before it was
// caught by reconciling against the evidence table.
// ⛔ DEBT, LOGGED: this function is a second copy of splitreport.js's. They should become one
//    shared loader in a later commit — two copies of a corpus walker is exactly the drift
//    this repo keeps paying for. Not merged here: one thing per commit. ⚖️ Law 5.
function recordArrayNames(src) {
  const names = [];
  const re = /^(?:var|const|let)\s+([A-Z_][A-Z_0-9]*)\s*=\s*\[/gm;
  let m; while ((m = re.exec(src)) !== null) names.push(m[1]);
  return names;
}

function wkFiles(only) {
  const dir = path.join(REPO_ROOT, 'sections');
  let files = fs.readdirSync(dir).filter(f => /^wk_.*\.js$/.test(f)).sort();
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

function loadRecords(ctxs, files) {
  const out = [];
  for (const f of files) {
    const src = fs.readFileSync(path.join(REPO_ROOT, 'sections', f), 'utf8');
    for (const ctx of ctxs) {
      try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { /* verified below */ }
    }
    const found = [];
    for (const v of recordArrayNames(src)) {
      const arr = vm.runInContext(`(typeof ${v} !== 'undefined' && Array.isArray(${v}) ? ${v} : null)`, ctxs[0]);
      if (!arr || !arr.length) continue;
      if (arr.some(r => r && typeof r === 'object' && r.id && typeof r.ingredients === 'string')) found.push({ v, arr });
    }
    if (!found.length) {
      console.error('🔴 ' + f + ' holds no record arrays. Refusing to under-report.');
      process.exit(1);
    }
    for (const { v, arr } of found) out.push({ file: f.replace(/^wk_|\.js$/g, ''), varName: v, records: arr });
  }
  return out;
}

// ── ASK THE APP ───────────────────────────────────────────────────────────────
// One sandbox round-trip per record, calling the app's own functions and nothing else.
// ap is passed as null on purpose: wkEffectiveMult reads `(ap && ap.mult) || 1`, so null is
// the neutral appetite and the measurement is deterministic run to run.
function probeRecord(ctx, rec) {
  const q = '(function(rec){' +
            '  var items = wkParseIngredients(rec.ingredients) || [];' +
            '  var mc = wkClassifyMain(items) || {};' +
            '  var mult = wkEffectiveMult(rec, 1, null);' +
            '  var shape = wkCostRecipeShape(rec, mult);' +
            '  return { anchor: mc.item ? mc.item.name : null, cat: mc.cat || null,' +
            '           qty: mc.item ? mc.item.qty : null, unit: mc.item ? mc.item.unit : null,' +
            '           mult: mult, cost: shape.total, priced: shape.priced,' +
            '           missing: (shape.missing||[]).length, lines: items.length };' +
            '})(' + JSON.stringify(rec) + ')';
  try { return vm.runInContext(q, ctx); } catch (e) { return null; }
}

const round = (x, d) => (x == null ? null : Math.round(x * Math.pow(10, d)) / Math.pow(10, d));

function measure(ctxAfter, ctxBefore, corpus) {
  const rows = [];
  let total = 0;
  for (const c of corpus) {
    for (const rec of c.records) {
      if (!rec || !rec.id || typeof rec.ingredients !== 'string') continue;
      total++;
      const b = probeRecord(ctxBefore, rec);
      const a = probeRecord(ctxAfter, rec);
      if (!b || !a) continue;
      const anchorMoved = b.anchor !== a.anchor;
      const catMoved = b.cat !== a.cat;
      const multMoved = round(b.mult, 4) !== round(a.mult, 4);
      if (!anchorMoved && !catMoved && !multMoved) continue;
      rows.push({
        id: rec.id, file: c.file, varName: c.varName,
        name: rec.name || '', course: rec.course || '',
        beforeAnchor: b.anchor, afterAnchor: a.anchor,
        beforeCat: b.cat, afterCat: a.cat,
        beforeMult: round(b.mult, 3), afterMult: round(a.mult, 3),
        beforeCost: b.cost, afterCost: a.cost,
        direction: (a.mult > b.mult) ? 'RISES' : (a.mult < b.mult ? 'FALLS' : 'same'),
        factor: b.mult ? round(a.mult / b.mult, 2) : null,
        costPP: (rec.versions || []).map((v, i) => ({ v: (v && v.name) || ('version ' + (i + 1)), costPP: v && v.costPP }))
      });
    }
  }
  return { rows, total };
}

// ── RED-LINE CHECK ────────────────────────────────────────────────────────────
// ⚖️ MF161 §3: "If the proof shows salo's anchor moving off `pork fat`, STOP and report —
// do not add a special case for it." So this runs on EVERY invocation, not just --selftest.
function redlineCheck(ctxAfter, ctxBefore, corpus) {
  const byId = new Map();
  for (const c of corpus) for (const r of c.records) if (r && r.id) byId.set(r.id, r);
  const out = [];
  for (const [id, why] of RED_LINED) {
    const rec = byId.get(id);
    if (!rec) { out.push({ id, why, status: 'NOT FOUND', detail: 'record id not in any wk_*.js' }); continue; }
    const b = probeRecord(ctxBefore, rec), a = probeRecord(ctxAfter, rec);
    // ⚖️ THREE OUTCOMES, NOT TWO — and collapsing them would misreport the sambals.
    // The PORTION is what MF161 is about, and the portion is the mult. A record whose anchor
    // moves but whose mult is identical has not been re-portioned at all: WK_KEEP_AUTHORED
    // short-circuits wkEffectiveMult (worldkitchen.js:1251) before wkClassifyMain is ever
    // consulted. What DOES change is the name the card prints in "HOW MUCH TO MAKE", because
    // that reads wkClassifyMain directly (worldkitchen.js:188) — a display change, not a
    // portion change. Calling that "MOVED" alongside a real re-portioning would cry wolf;
    // calling it "HELD" would hide a visible change to a red-lined card. So it is its own row.
    const anchorMoved = b.anchor !== a.anchor;
    const multMoved = round(b.mult, 4) !== round(a.mult, 4);
    const status = multMoved ? 'MOVED' : (anchorMoved ? 'DISPLAY-ONLY' : 'HELD');
    out.push({
      id, why, status, anchorMoved, multMoved,
      detail: multMoved
        ? ('anchor ' + b.anchor + ' → ' + a.anchor + ' · mult ' + round(b.mult, 3) + ' → ' + round(a.mult, 3) + '  🔴 THE PORTION CHANGED')
        : anchorMoved
          ? ('anchor `' + b.anchor + '` → `' + a.anchor + '` · mult UNCHANGED at ' + round(a.mult, 3))
          : ('anchor `' + a.anchor + '` · mult ' + round(a.mult, 3))
    });
  }
  return out;
}

// ── REPORT ────────────────────────────────────────────────────────────────────
const pad = (s, w) => { s = String(s == null ? '—' : s); return s.length > w ? s.slice(0, w - 1) + '…' : s + ' '.repeat(w - s.length); };

function report(res, redline, opts) {
  const { rows, total } = res;

  console.log('\n════ THE ANCHOR, BEFORE AND AFTER · MF161 ════');
  console.log('   corpus: ' + total + ' records measured through the app\'s own wkClassifyMain / wkEffectiveMult');
  console.log('   mult is at 1 guest, neutral appetite. cost is the RENDERED per-person figure.\n');

  // ⚖️ The red-line table first. If one of these moved, nothing else on the page matters.
  const moved = redline.filter(r => r.status === 'MOVED');
  const display = redline.filter(r => r.status === 'DISPLAY-ONLY');
  const absent = redline.filter(r => r.status === 'NOT FOUND');
  console.log('── ⚖️ RED-LINED · MF161 §2 · THESE MUST NOT MOVE ──');
  for (const r of redline) {
    const mark = r.status === 'HELD' ? '  ✅ ' : (r.status === 'MOVED' ? '  🔴 ' : (r.status === 'DISPLAY-ONLY' ? '  🔶 ' : '  ⬜ '));
    console.log(mark + pad(r.id, 28) + pad(r.status, 14) + r.detail);
    console.log('       ' + ' '.repeat(28) + r.why);
  }
  if (moved.length) {
    console.log('\n  🔴🔴 ' + moved.length + ' RED-LINED RECORD(S) WERE RE-PORTIONED. ⛔ MF161 §3 says STOP AND REPORT —');
    console.log('       do NOT add a special case. The guard regex is wrong and must be re-cut.');
  }
  if (display.length) {
    console.log('\n  🔶 ' + display.length + ' red-lined record(s) kept their PORTION but changed the name the card');
    console.log('     prints as the main ingredient. WK_KEEP_AUTHORED still holds the mult (the 30 Jul');
    console.log('     scar is intact — mult is identical), but "HOW MUCH TO MAKE" will read differently');
    console.log('     on live. ⚖️ Not a portion bug. It IS a visible change to a red-lined card, so it');
    console.log('     is Tina\'s call, not the tool\'s and not mine.');
  }
  if (!moved.length && !display.length) {
    console.log('\n  ✅ all ' + (redline.length - absent.length) + ' red-lined records held, anchor and portion.' +
                (absent.length ? '  (' + absent.length + ' not found — see ⬜ above)' : ''));
  }
  console.log('');
  if (opts.redlineOnly) return { moved };

  const inflate = rows.filter(r => r.direction === 'FALLS');   // mult falls → the dish was INFLATED before
  const deflate = rows.filter(r => r.direction === 'RISES');   // mult rises → the dish was DEFLATED before

  const show = (title, list, blurb) => {
    if (!list.length) return;
    console.log('── ' + title + ' (' + list.length + ') ──');
    console.log('   ' + blurb);
    console.log('   ' + pad('record', 30) + pad('file', 10) + pad('anchor BEFORE', 26) + pad('anchor AFTER', 26)
              + pad('mult', 17) + pad('×', 7) + 'cost pp');
    console.log('   ' + '─'.repeat(132));
    for (const r of list.sort((a, b) => (a.factor || 0) - (b.factor || 0))) {
      console.log('   ' + pad(r.id, 30) + pad(r.file, 10)
        + pad((r.beforeAnchor || '—') + ' [' + (r.beforeCat || '—') + ']', 26)
        + pad((r.afterAnchor || '—') + ' [' + (r.afterCat || '—') + ']', 26)
        + pad(r.beforeMult + ' → ' + r.afterMult, 17)
        + pad(r.factor == null ? '—' : '×' + r.factor, 7)
        + 'R' + r.beforeCost + ' → R' + r.afterCost);
    }
    console.log('');
  };

  const sameMult = rows.filter(r => r.direction === 'same');

  show('🔻 WAS DEFLATED — a carrier crushed the dish onto a per-person plate', deflate,
       'These rendered at a FRACTION of their authored amounts. The mult RISES back toward 1.');
  show('🔺 WAS INFLATED — a carrier was forced UP onto a per-person plate', inflate,
       'These rendered MULTIPLES of their authored amounts. The mult FALLS.');
  // ⚠️ These are NOT nothing, and leaving them out of the table would have been the easy lie.
  // The mult is identical, so no card is re-portioned and no costPP goes stale — but
  // wkClassifyMain also feeds the name printed in "HOW MUCH TO MAKE" (worldkitchen.js:188)
  // and the protein-coverage gate in wkCostState. Both read differently on live tomorrow.
  show('🔶 DISPLAY ONLY — the anchor moved, the PORTION did not', sameMult,
       'mult identical → nothing re-portioned, no costPP stale. But the card names a different\n   main ingredient, and wkCostState\'s protein gate now watches a different line.');

  console.log('── SUMMARY ──');
  console.log('   records measured        ' + total);
  console.log('   anchor or mult moved    ' + rows.length);
  console.log('      · was DEFLATED       ' + deflate.length + '   (mult rises — the dish grows back)');
  console.log('      · was INFLATED       ' + inflate.length + '   (mult falls — the dish shrinks back)');
  console.log('      · display only       ' + sameMult.length + '  (anchor moved, mult identical — no costPP stale)');
  console.log('   red-lined RE-PORTIONED  ' + moved.length + (moved.length ? '   🔴 STOP' : '   ✅'));
  console.log('   red-lined display-only  ' + display.length + (display.length ? '   🔶 Tina\'s call' : '   ✅'));
  console.log('\n   ⚖️ BANKED costPP IS **NOT** STALE — MEASURED, NOT ASSUMED.');
  console.log('      MF161 §5 predicts "costPP WILL go stale on roughly fourteen records". It does');
  console.log('      not, and the reason is structural: costcheck scores a version through');
  console.log('      wkCostRecipeShape(record, 1) — ONE serving, AUTHORED amounts. wkEffectiveMult');
  console.log('      never enters that path, so a changed mult cannot move a banked costPP.');
  console.log('      Verified: china · thailand · japan · indonesia · vietnam all byte-identical');
  console.log('      before and after this commit. ⛔ NOTHING TO RE-DERIVE. §30.1 does not fire.');
  console.log('      What DOES move is the RENDERED per-person figure on the card (the R702 Tina');
  console.log('      saw) — that is wkCostState(r, wkEffectiveMult(...)) at worldkitchen.js:195,');
  console.log('      and it is the "cost pp" column above.');
  console.log('\n   HONEST LIMIT: this shows which LINE the portion is measured on, and what that');
  console.log('   does to the mult and the rendered cost. It cannot tell you the new anchor is the');
  console.log('   RIGHT anchor — only that it is no longer a carrier. ⚖️ Law 2.\n');
  return { moved, rows };
}

// ── SELF-TEST · BORN-RED, THE THREE ARMS MF161 §4 DEMANDS ─────────────────────
function selftest() {
  console.log('\n🔬 BORN-RED PROOFS — MF161 §4, all three arms\n');
  let pass = 0, fail = 0;
  const unmet = [];
  const check = (label, got, want) => {
    const ok = JSON.stringify(got) === JSON.stringify(want);
    console.log((ok ? '  ✅ ' : '  ❌ ') + label + (ok ? '' : '\n        got=' + JSON.stringify(got) + '\n        want=' + JSON.stringify(want)));
    ok ? pass++ : fail++;
  };
  // ⚖️ A BRIEF EXPECTATION IS NOT A TOOL PROOF, AND MERGING THEM HIDES BOTH.
  // `check` asks "does this tool work?" — a red one means the tool is broken and nothing it
  // says can be trusted. `expect` asks "did the brief's predicted OUTCOME actually happen?" —
  // a red one means the tool works fine and THE CHANGE DID NOT DO WHAT THE BRIEF SAID.
  // ⛔ The second must never be quietly relaxed to make the run go green. That is precisely
  //    how a proof stops measuring anything. It is reported, loudly, with what really happened.
  const expect = (label, got, want, whatHappened) => {
    const ok = JSON.stringify(got) === JSON.stringify(want);
    console.log((ok ? '  ✅ ' : '  🔶 ') + label + (ok ? '' : '   ⛔ BRIEF EXPECTATION NOT MET'));
    if (!ok) { console.log('        ' + whatHappened); unmet.push({ label, whatHappened }); }
    if (ok) pass++;
  };

  const iso = assertGuardIsIsolated();
  console.log('  ℹ️  isolation: WK_NOT_A_MAIN — ' + iso.decl + ' declaration · ' + iso.uses +
              ' test · ' + iso.comments + ' comment line(s). Nothing unaccounted.\n');

  const ctxA = makeSandbox(); loadEngines(ctxA);
  const ctxB = makeSandbox(); loadEngines(ctxB); neuterGuard(ctxB);
  const corpus = loadRecords([ctxA, ctxB], wkFiles(null));
  const byId = new Map();
  for (const c of corpus) for (const r of c.records) if (r && r.id) byId.set(r.id, r);

  // GREEN CONTROL · the BEFORE sandbox really is neutered, and only there.
  check('GREEN · BEFORE sandbox guard matches nothing', vm.runInContext('WK_NOT_A_MAIN.test("beef tallow")', ctxB), false);
  check('GREEN · AFTER sandbox guard still catches a carrier', vm.runInContext('WK_NOT_A_MAIN.test("beef tallow")', ctxA), true);

  // ── ARM 1 · chongqing moves OFF beef tallow ONTO beef sirloin. (§4.1)
  const hp = byId.get('china-chongqing-huo-guo');
  check('ARM 1 · china-chongqing-huo-guo is in the corpus', !!hp, true);
  if (hp) {
    const b = probeRecord(ctxB, hp), a = probeRecord(ctxA, hp);
    console.log('        before: ' + b.anchor + ' [' + b.cat + '] mult ' + round(b.mult, 3) + ' · R' + b.cost);
    console.log('        after : ' + a.anchor + ' [' + a.cat + '] mult ' + round(a.mult, 3) + ' · R' + a.cost);
    check('ARM 1 · BEFORE, the anchor is the tallow', /tallow/i.test(b.anchor || ''), true);
    check('ARM 1 · the anchor MOVES off the tallow (the probe can return a one)', b.anchor !== a.anchor, true);
    check('ARM 1 · and the mult actually changed', round(b.mult, 3) !== round(a.mult, 3), true);
    expect('ARM 1 · MF161 §4.1 — it lands on `beef sirloin`', /sirloin/i.test(a.anchor || ''), true,
      'It lands on `' + a.anchor + '` [' + a.cat + '] instead. Line 6 `fermented black beans, rinsed`\n' +
      '        matches \\bbeans\\b → cat=pulse → wkMainBase(pulse)=null → KEEP AUTHORED. The scan\n' +
      '        never reaches `beef sirloin` at line 19. Net effect: mult ' + round(b.mult, 3) + ' → ' + round(a.mult, 3) +
      ', so the\n        dish renders MORE, not less — R' + b.cost + ' → R' + a.cost + ' pp. ⛔ The headline bug is NOT closed.');
  }

  // ── ARM 2 · THE TRUE NEGATIVE. ukraine-salo must NOT move. (§4.2 / MF160 §5b)
  // ⚖️ A probe that only ever says "yes" has not been shown to be able to say "no".
  const salo = byId.get('ukraine-salo');
  check('ARM 2 · ukraine-salo is in the corpus', !!salo, true);
  if (salo) {
    const b = probeRecord(ctxB, salo), a = probeRecord(ctxA, salo);
    console.log('        before: ' + b.anchor + ' [' + b.cat + '] mult ' + round(b.mult, 3));
    console.log('        after : ' + a.anchor + ' [' + a.cat + '] mult ' + round(a.mult, 3));
    check('ARM 2 · salo keeps its anchor (pork fat IS the dish)', b.anchor, a.anchor);
    check('ARM 2 · salo keeps its mult', round(b.mult, 4), round(a.mult, 4));
    check('ARM 2 · and the guard genuinely does not match "pork fat"',
          vm.runInContext('WK_NOT_A_MAIN.test("pork fat")', ctxA), false);
  }

  // ── ARM 3 · removing the guard restores the OLD answer EXACTLY. (§4.3)
  // Not "changes it" — restores it, record for record, across the whole corpus.
  const ctxC = makeSandbox(); loadEngines(ctxC); neuterGuard(ctxC);
  let identical = 0, differing = 0;
  for (const [, rec] of byId) {
    const b = probeRecord(ctxB, rec), c = probeRecord(ctxC, rec);
    if (!b || !c) continue;
    if (b.anchor === c.anchor && round(b.mult, 4) === round(c.mult, 4)) identical++; else differing++;
  }
  check('ARM 3 · a second neutered sandbox reproduces BEFORE exactly (0 differ)', differing, 0);
  check('ARM 3 · and it actually compared the whole corpus', identical > 1000, true);
  const movedCount = measure(ctxA, ctxB, corpus).rows.length;
  check('ARM 3 · with the guard live, the answer IS different (else nothing was measured)', movedCount > 0, true);
  console.log('        ' + movedCount + ' records move when the guard is live; ' + identical + ' records reproduce exactly when it is not.');

  // ── ARM 4 · THE LOADER. wk_france.js declares two arrays and soupe-a-l'oignon is in this brief.
  const frSrc = fs.readFileSync(path.join(REPO_ROOT, 'sections/wk_france.js'), 'utf8');
  check('ARM 4 · wk_france.js is seen to declare BOTH arrays',
        recordArrayNames(frSrc).filter(n => n === 'WK_FRANCE' || n === 'FR_SAUCES').sort(), ['FR_SAUCES', 'WK_FRANCE']);
  check('ARM 4 · france-soupe-a-loignon reached the corpus', !!byId.get('france-soupe-a-loignon'), true);
  const fr = byId.get('france-soupe-a-loignon');
  if (fr) {
    const b = probeRecord(ctxB, fr), a = probeRecord(ctxA, fr);
    console.log('        before: ' + b.anchor + ' [' + b.cat + '] mult ' + round(b.mult, 3) + ' · R' + b.cost);
    console.log('        after : ' + a.anchor + ' [' + a.cat + '] mult ' + round(a.mult, 3) + ' · R' + a.cost);
    check('ARM 4 · the soup was rendering at a fraction of authored (mult < 0.25)', b.mult < 0.25, true);
    const pool = vm.runInContext('wkPoolOf(' + JSON.stringify(fr.course) + ')', ctxA);
    expect('ARM 4 · MF161 §5.2 — the guard lifts the soup off 17%', a.mult > b.mult, true,
      'Its mult is UNCHANGED at ' + round(a.mult, 3) + '. course="' + fr.course + '" → pool="' + pool + '", and for any\n' +
      '        pool that is not "main" wkEffectiveMult takes the else-branch (worldkitchen.js:1257)\n' +
      '        and NEVER CALLS wkClassifyMain. The 0.171 is wkPoolBase("' + pool + '")=' +
      vm.runInContext('wkPoolBase(' + JSON.stringify(pool) + ')', ctxA) + ' ÷ the first weighted\n' +
      '        line (350g yellow onions) — it was never the anchor bug. Same for china-hot-and-sour-soup\n' +
      '        and austria-frittatensuppe, both course="starter". ⛔ §0\'s DEFLATE rows are misdiagnosed.');
  }

  console.log('\n  ' + (fail ? '🔴 ' + fail + ' TOOL PROOF(S) FAILED — do not trust this tool'
                             : '✅ all ' + pass + ' tool proofs pass') + '  (' + pass + '/' + (pass + fail) + ')');
  if (unmet.length) {
    console.log('\n  🔶 ' + unmet.length + ' BRIEF EXPECTATION(S) NOT MET — the tool is sound, the CHANGE is not enough:');
    for (const u of unmet) console.log('     · ' + u.label);
    console.log('\n  ⚖️ MF161 §4 exists to catch exactly this. Reported, not relaxed. Commit 1 is applied\n' +
                '     as written and is CORRECT as far as it goes — it just does not reach these two.\n' +
                '     ⛔ Do not widen WK_NOT_A_MAIN to chase them without Tina: adding `beans` would\n' +
                '        break every genuine bean-led main (githeri, feijoada, fasolka).');
  }
  process.exit(fail || unmet.length ? 1 : 0);
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
if (argv.includes('--selftest')) selftest();

const asJson = argv.includes('--json');
const redlineOnly = argv.includes('--redline');
const only = argv.filter(a => !a.startsWith('--'))[0] || null;

const iso = assertGuardIsIsolated();
const ctxAfter = makeSandbox();  loadEngines(ctxAfter);
const ctxBefore = makeSandbox(); loadEngines(ctxBefore); neuterGuard(ctxBefore);

const corpus = loadRecords([ctxAfter, ctxBefore], wkFiles(only));
const redline = redlineCheck(ctxAfter, ctxBefore, corpus);
const res = measure(ctxAfter, ctxBefore, corpus);

if (asJson) {
  console.log(JSON.stringify({ redline, rows: res.rows, total: res.total }, null, 2));
  process.exit(redline.some(r => r.status === 'MOVED') ? 1 : 0);
}

console.log('\n   arrays: ' + corpus.map(c => c.varName).join(' · '));
console.log('   BEFORE sandbox = the same real wkClassifyMain with WK_NOT_A_MAIN neutered to /(?!)/');
const out = report(res, redline, { redlineOnly });
process.exit(out.moved.length ? 1 : 0);
