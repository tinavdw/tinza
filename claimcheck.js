// claimcheck.js — the mechanical watcher for PROSE ASSERTIONS.
//
//   node claimcheck.js thailand                 # check a whole country file
//   node claimcheck.js thailand batch33.js      # check a batch BEFORE it is merged
//   node claimcheck.js --selftest               # born-RED proofs
//
// WHY THIS EXISTS (2 Aug 2026):
// Two fabricated claims shipped into Thailand records in a single session, and neither
// was caught by any watcher in this repo:
//   1. Record 32 draft: "you cannot buy a live crab in Pretoria, so every crab you can
//      buy has already been cooked once." Invented. Tina buys frozen whole RAW crab at
//      Pretoria seafood shops and has for years. Caught by TINA, not by a tool.
//   2. Record 32 draft: the picked-meat version's trivia said it "costs more than the
//      shell-on one" while its derived costPP was R150 against the default's R151.
//      Caught by COSTCHECK — but only by luck, because the claim happened to sit next to
//      a number the engine derives. Three paragraphs further away and nothing sees it.
//
// ⚖️ BOTH FAILURES HAVE ONE SHAPE: the lead was chosen first and the supporting fact was
// generated to fit it. From the inside a fabricated fact is indistinguishable from a
// recalled one — there is no flag on it. So a fix that depends on the author noticing is
// not a fix. That is the tierBar lesson and the sago lesson for the third time:
// A SILENT HOLE NEEDS A MECHANICAL WATCHER, NOT SHARPER EYES.
//
// ⚖️ THE GAP THIS FILLS: every watcher in this repo checks NUMBERS.
// pricecheck checks keys · costcheck checks costPP · unitcheck checks R0 · wowcheck checks
// shape · tinza-echo checks voice. NOTHING checked whether a SENTENCE was true.
//
// THE ONE DESIGN DECISION THAT MATTERS:
// Same rule as pricecheck — this does NOT reimplement price lookup. Availability claims
// are tested against the APP'S OWN wkPriceLookup(). A card that says an ingredient cannot
// be bought in South Africa, while its key resolves to a live price, is contradicting the
// engine the same app ships. That contradiction is mechanical and this tool fails on it.
//
// HONEST LIMIT, stated the way pricecheck states its own:
// This catches CONTRADICTION and DIRECTION. It cannot tell you a claim is true.
// "Gai lan is not sold in South Africa" and "sago is not sold in South Africa" look
// identical to this tool — both are absent keys, both pass. Only Tina's eyes close that.
// ⚖️ So the availability section does NOT fail. It PRINTS WHAT IT CANNOT MEASURE, the way
// wowcheck does, and hands the list to Tina. A watcher that pretended to judge these
// would be the same error it was built to catch.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const COUNTRIES = {
  china:       { varName: 'WK_CHINA',       file: 'wk_china.js' },
  japan:       { varName: 'WK_JAPAN',       file: 'wk_japan.js' },
  indonesia:   { varName: 'WK_INDONESIA',   file: 'wk_indonesia.js' },
  thailand:    { varName: 'WK_THAILAND',    file: 'wk_thailand.js' },
  vietnam:     { varName: 'WK_VIETNAM',     file: 'wk_vietnam.js' },
  philippines: { varName: 'WK_PHILIPPINES', file: 'wk_philippines.js' },
  southafrica: { varName: 'WK_SOUTHAFRICA', file: 'wk_southafrica.js' }
};

const REPO_ROOT = process.env.TINZA_REPO || __dirname;

// ── LOAD THE REAL GATE ────────────────────────────────────────────────────────
// Verbatim in spirit from pricecheck.js. A partial gate silently under-reports.
function loadGate(repoRoot) {
  const need = ['sections/prices.js', 'sections/core.js', 'sections/worldkitchen.js'];
  const missing = need.filter(f => !fs.existsSync(path.join(repoRoot, f)));
  if (missing.length) {
    console.error('🔴 price gate incomplete — missing: ' + missing.join(', '));
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
    try { vm.runInContext(fs.readFileSync(path.join(repoRoot, f), 'utf8'), ctx, { filename: f }); }
    catch (e) { /* tolerated — verified below */ }
  }
  const ok = vm.runInContext("typeof wkPriceLookup === 'function'", ctx);
  if (!ok) {
    console.error('🔴 gate loaded but wkPriceLookup() did not arrive.');
    console.error('   Refusing to report — a check that lost half the gate is worse than no check.');
    process.exit(1);
  }
  return ctx;
}

let _keys = null;
function allKeys(ctx) {
  if (_keys) return _keys;
  try { _keys = vm.runInContext('Object.keys(PRICE_DB)', ctx) || []; } catch (e) { _keys = []; }
  return _keys;
}

function lookup(ctx, name) {
  try { return vm.runInContext('wkPriceLookup(' + JSON.stringify(name) + ')', ctx) || null; }
  catch (e) { return null; }
}

// ── THE TWO DETECTORS ─────────────────────────────────────────────────────────

// A · COMPARATIVE COST CLAIMS.
// ⚠️ Deliberately NOT a bare min/max test. A version may honestly be "cheaper than the
// crab one" while still not being the cheapest on the record — record 32's picked-meat
// fork is exactly that. So we try to RESOLVE THE COMPARISON TARGET and compare pairwise.
// If the target cannot be resolved we print it as unmeasurable rather than guessing.
const CLAIM_MORE = /(costs?\s+more|more\s+expensive|dearer|pricier|a\s+premium\s+(?:over|on)|the\s+expensive\s+one|luxury\s+price|steeper)/i;
const CLAIM_LESS = /(cheaper|costs?\s+less|less\s+expensive|a\s+real\s+saving|a\s+saving|thriftier|the\s+cheap\s+one|for\s+a\s+fifth\s+of\s+the\s+money)/i;
// ⚠️ SCAR (2 Aug): 'shell' and 'crab' were originally in this list and the record-32 proof
// FAILED because of it — those were the only words that told "Whole Crab, Shell On" apart
// from the other versions. ⛔ A stoplist may hold grammar words. It must never hold DOMAIN
// words, because the domain word is always the one carrying the match.
const STOPWORDS = new Set(['the','a','an','one','version','it','this','that','of','and','with','no','on','in','for','by','from','to','is','are','than','other','same']);

function versionText(v) {
  const bits = [v.name || '', v.trivia || '', v.howThisFeels || ''];
  const d = v.delta || {};
  (d.addStep || []).forEach(s => bits.push(s.text || ''));
  return bits.join('\n');
}

function tokens(s) {
  return String(s).toLowerCase().replace(/[^a-z ]+/g, ' ').split(/\s+/)
    .filter(w => w.length > 2 && !STOPWORDS.has(w));
}

// Find which OTHER version a claim is pointing at, using the words after "than".
function resolveTarget(phraseTail, self, versions) {
  const want = new Set(tokens(phraseTail));
  if (!want.size) return null;
  let best = null, bestScore = 0, tie = false;
  for (const v of versions) {
    if (v === self) continue;
    const have = new Set(tokens(v.name));
    let score = 0;
    for (const w of want) if (have.has(w)) score++;
    if (score > bestScore) { best = v; bestScore = score; tie = false; }
    else if (score === bestScore && score > 0) tie = true;
  }
  if (!best || bestScore === 0 || tie) return null;
  return best;
}

function checkCostClaims(rec, red, note) {
  const vs = rec.versions || [];
  if (vs.length < 2) return;
  const costs = vs.map(v => (typeof v.costPP === 'number' ? v.costPP : null));
  if (costs.some(c => c === null)) return; // pre-merge batch with costPP 0 placeholders is fine
  const min = Math.min(...costs), max = Math.max(...costs);

  vs.forEach((v, i) => {
    const txt = versionText(v);
    const mine = costs[i];

    // A1 · a version LABELLED budget must be cheaper THAN THE DEFAULT.
    // ⚖️ RULED BY TINA, 2 Aug 2026: "(Budget) means cheaper than the default." NOT cheapest on
    // the record. ⛔ The first draft of this tool enforced the strict reading and returned 15
    // reds across four closed lanes — nearly all of them records where a THIRD fork is cheaper
    // than the budget one for a legitimate reason. A watcher enforcing a rule the owner never
    // made is not finding faults, it is manufacturing them.
    const defIdx = vs.findIndex(v => v.default);
    const defCost = defIdx >= 0 ? costs[defIdx] : null;
    if (/\(budget\b|·\s*budget\b|\bbudget\)/i.test(v.name || '') && !v.default && defCost !== null && mine >= defCost) {
      red.push(rec.id + ' — version "' + v.name + '" is labelled BUDGET but costs R' + mine +
               ' against the DEFAULT ("' + vs[defIdx].name + '") at R' + defCost +
               '. A3: the budget fork must come in under the default.');
    }

    // A2 · directional claims, resolved against a named target where possible.
    for (const [re, dir] of [[CLAIM_MORE, 'MORE'], [CLAIM_LESS, 'LESS']]) {
      const m = txt.match(re);
      if (!m) continue;
      const after = txt.slice(txt.indexOf(m[0]) + m[0].length, txt.indexOf(m[0]) + m[0].length + 90);
      const thanM = after.match(/^\s*than\s+(.{3,60})/i);
      if (thanM) {
        const target = resolveTarget(thanM[1], v, vs);
        if (target) {
          const theirs = costs[vs.indexOf(target)];
          const wrong = (dir === 'MORE' && !(mine > theirs)) || (dir === 'LESS' && !(mine < theirs));
          if (wrong) {
            red.push(rec.id + ' — version "' + v.name + '" claims it costs ' + dir +
                     ' than "' + target.name + '", but the DERIVED figures say R' + mine +
                     ' vs R' + theirs + '.  ⚖️ The card contradicts its own arithmetic.' +
                     '\n           claim: …' + m[0] + ' than ' + thanM[1].trim().slice(0, 50) + '…');
          }
          continue;
        }
        note.push(rec.id + ' — "' + v.name + '": comparative cost claim whose target could not be' +
                  ' resolved to another version. Reads: …' + m[0] + ' than ' + thanM[1].trim().slice(0, 45) + '…');
        continue;
      }
      // No explicit "than" — ⛔ THIS CANNOT BE FAILED ON, and the first draft of this tool did.
      // ⚠️ SCAR (2 Aug): record 32's CHICKEN fork was reported RED for reading as "the expensive
      // one" when the sentence was `Crab is the famous one and the expensive one` — about crab,
      // not about itself. A comparative with no resolvable target cannot be attributed to the
      // version that happens to contain it. ⚖️ So it is NOTED, never failed. Printing what it
      // cannot measure is the whole point; a watcher that cries wolf gets switched off.
      const mine_is = (mine === min) ? 'the CHEAPEST' : (mine === max) ? 'the DEAREST' : 'mid-priced';
      note.push(rec.id + ' — "' + v.name + '": unanchored ' + dir + ' cost claim (…' + m[0] +
                '…) in a version that is ' + mine_is + ' at R' + mine +
                '. No "than X" to point at — may well be about something other than this version.');
    }
  });
}

// B · AVAILABILITY ASSERTIONS.
// ⚖️ These are LEGITIMATE and the lane wants them — §33 and the Sup Nor Mai precedent say a
// card should state out loud when an ingredient is not on a South African shelf. So this does
// NOT fail on their presence. It fails on ONE thing only: a card asserting an ingredient
// cannot be bought here while the app's own engine returns a live price for it.
const AVAIL_RE = /((?:cannot|can not|can't|could not|couldn't|will not|won't|do not|don't)\s+(?:reliably\s+)?(?:buy|get|find|source)[^.!?]{0,90}|not\s+(?:sold|available|stocked|found)\s+(?:here|anywhere\s+here|in\s+SA|in\s+South\s+Africa)[^.!?]{0,60}|(?:is|are)\s+not\s+(?:on|in)\s+(?:a\s+)?South\s+African\s+(?:shelf|shelves|shop)[^.!?]{0,40}|NOT-IN-SA)/gi;

function prose(rec) {
  const out = [];
  const push = (field, s) => { if (typeof s === 'string' && s) out.push([field, s]); };
  ['method','trivia','chefNotes','storage','pairsWith','nameAlt','howThisFeels'].forEach(f => push(f, rec[f]));
  // ⚠️ SCHEMA DIFFERENCE FOUND 2 Aug: the Asia files carry `leftovers` as an ARRAY of lines,
  // but `wk_southafrica.js` carries it as a STRING. The first run against SA crashed here.
  // ⛔ A watcher that crashes on a real file is a watcher that never gets run on it — which is
  // exactly how SA stayed outside pricecheck for months. Tolerate both shapes, note neither.
  const lo = rec.leftovers;
  if (Array.isArray(lo)) lo.forEach((l, i) => push('leftovers[' + i + ']', l));
  else push('leftovers', lo);
  (rec.versions || []).forEach(v => {
    push('v:' + v.name + ' trivia', v.trivia);
    push('v:' + v.name + ' howThisFeels', v.howThisFeels);
    ((v.delta || {}).addStep || []).forEach((s, i) => push('v:' + v.name + ' addStep[' + i + ']', s.text));
  });
  return out;
}

// Pull candidate ingredient names out of a claim sentence by testing every ingredient the
// record actually uses. ⚖️ We do NOT try to parse the English — we ask which of THIS RECORD'S
// own ingredients is named inside the claim. That keeps it mechanical.
function recordIngredientNames(rec) {
  const names = new Set();
  const add = (line) => {
    const n = String(line).replace(/^[\d.]+\s*(g|ml|kg|l|tbsp|tsp)?\s*/i, '').replace(/\s*\(.*?\)\s*$/, '').trim().toLowerCase();
    if (n) names.add(n);
  };
  String(rec.ingredients || '').split(' · ').forEach(add);
  (rec.versions || []).forEach(v => {
    const d = v.delta || {};
    (d.swapIng || []).forEach(x => { add(x.from); add(x.to); });
    (d.addIng  || []).forEach(x => add(x.item));
  });
  return [...names];
}

function checkAvailability(rec, ctx, red, confirm) {
  const ings = recordIngredientNames(rec);
  for (const [field, text] of prose(rec)) {
    let m;
    AVAIL_RE.lastIndex = 0;
    while ((m = AVAIL_RE.exec(text))) {
      const claim = m[0].replace(/\s+/g, ' ').trim();
      // ⚠️ SCAR (2 Aug): `thailand-som-tam` was reported RED for "cannot find green papaya at all"
      // when the full sentence is "IF you cannot find green papaya at all, do not substitute…".
      // ⛔ A CONDITIONAL IS NOT AN ASSERTION. The card is not claiming the thing is unbuyable, it is
      // telling you what to do in the case that YOUR shop is out. Look back at the words immediately
      // before the match and demote anything hypothetical to the confirm list.
      const before = text.slice(Math.max(0, m.index - 34), m.index);
      const conditional = /\b(if|unless|should|where|when|whenever|in case|supposing|assuming)\b[^.!?]*$/i.test(before);
      // Does the claim name an ingredient this record actually prices?
      let contradicted = null;
      for (const ing of ings) {
        if (ing.length < 4) continue;
        if (claim.toLowerCase().includes(ing)) {
          const r = lookup(ctx, ing);
          if (r && r.price > 0) { contradicted = { ing, r }; break; }
        }
      }
      // ⚠️ THE GAP THAT LET RAD NA THROUGH, FOUND 2 Aug within an hour of the tool being built.
      // The check above only tests ingredients THE RECORD ITSELF USES. Rad Na asserted
      // "tao jiew … is not sold here in any reliable form" — and tao jiew is not in its
      // ingredient list precisely BECAUSE the card believed it unbuyable. ⚖️ THE CLAIM THAT
      // NEEDS CHECKING IS ALWAYS ABOUT SOMETHING THE RECORD DOES NOT USE. So also sweep the
      // WHOLE PRICE_DB by word overlap: `yellow soybean paste` shares `yellow` + `soybean`
      // with "salted yellow soybeans", which is enough to say LOOK BEFORE YOU ASSERT.
      // 🟠 not 🔴 — word overlap is fuzzy and a fuzzy RED is a watcher nobody trusts.
      if (!contradicted && !conditional) {
        // ⚠️ SCAR: this first read only the MATCHED FRAGMENT ("not sold here in any reliable
        // form") which contains none of the product words — the proof failed and was right to.
        // The product is named BEFORE the assertion, so read a window around the match.
        const window = text.slice(Math.max(0, m.index - 160), m.index + claim.length + 60);
        const cw = new Set(tokens(window).map(w => w.replace(/s$/, '')));
        for (const k of allKeys(ctx)) {
          const kw = tokens(k).map(w => w.replace(/s$/, ''));
          if (kw.length < 2) continue;
          const hits = kw.filter(w => cw.has(w)).length;
          if (hits >= 2) {
            const r = lookup(ctx, k);
            if (r && r.price > 0) {
              confirm.push('⚠️ ' + rec.id + ' [' + field + '] — asserts something is unbuyable, and a' +
                ' KEYED PRODUCT overlaps the wording: `' + k + '` R' + r.price +
                '\n           near: …' + window.replace(/\s+/g, ' ').slice(0, 120) + '…');
              break;
            }
          }
        }
      }

      if (contradicted && !conditional) {
        red.push(rec.id + ' [' + field + '] — claims an ingredient cannot be bought, but the ' +
                 "APP'S OWN engine prices it.\n           claim: …" + claim.slice(0, 100) +
                 '…\n           engine: `' + contradicted.ing + '` → ' +
                 (contradicted.r.key || contradicted.r.name) + ' R' + contradicted.r.price);
      } else {
        confirm.push(rec.id + ' [' + field + '] — …' + claim.slice(0, 110) + '…');
      }
    }
  }
}

// ── SELF-TEST ─────────────────────────────────────────────────────────────────
// Born-RED proofs + anti-proofs, the pricecheck pattern. A watcher that has never been
// shown to fire is a watcher nobody should trust.
function selftest(ctx) {
  let pass = 0, fail = 0;
  const t = (label, fn) => {
    let ok = false;
    try { ok = fn(); } catch (e) { ok = false; }
    if (ok) { pass++; console.log('  ✅ ' + label); }
    else    { fail++; console.log('  🔴 ' + label); }
  };
  const run = (rec) => {
    const red = [], note = [], confirm = [];
    checkCostClaims(rec, red, note);
    checkAvailability(rec, ctx, red, confirm);
    return { red, note, confirm };
  };
  const base = (versions, extra) => Object.assign({
    id: 'test-rec', ingredients: '300g crab · 100g chicken', versions, leftovers: []
  }, extra || {});

  console.log('\n── BORN-RED PROOFS ──');

  t('RED · the RECORD 32 failure: version claims it costs MORE than a named version that is dearer', () =>
    run(base([
      { name: 'Chicken (Budget)', costPP: 46 },
      { name: 'Picked Meat, No Shell', costPP: 150, trivia: 'This version costs more than the shell-on one and is the lesser dish.' },
      { name: 'Whole Crab, Shell On', costPP: 151, default: true }
    ])).red.some(r => /costs MORE than "Whole Crab/.test(r)));

  t('RED · the RAD NA failure: a (Budget) fork costing MORE than the default', () =>
    run(base([
      { name: 'Tofu (Budget)', costPP: 57 },
      { name: 'Pork', costPP: 45, default: true },
      { name: 'Seafood', costPP: 85 }
    ])).red.some(r => /labelled BUDGET/.test(r)));

  t('RED · a version calling itself cheaper than a named version that is in fact cheaper', () =>
    run(base([
      { name: 'Alpha', costPP: 90, trivia: 'It is cheaper than the Beta version by a good margin.' },
      { name: 'Beta', costPP: 40, default: true }
    ])).red.some(r => /costs LESS than "Beta"/.test(r)));


  t('RED · availability claim contradicted by the app\'s own engine (crab R400 is live)', () =>
    run(base([{ name: 'A', costPP: 10 }, { name: 'B', costPP: 20 }],
      { method: 'You cannot buy crab in South Africa, so this is a compromise from the start.' })).red
      .some(r => /APP'S OWN engine prices it/.test(r)));

  console.log('\n── ANTI-PROOFS (these must NOT fire) ──');

  t('ok · record 32 AS SHIPPED — the corrected trivia claims no such thing', () =>
    run(base([
      { name: 'Chicken (Budget)', costPP: 46 },
      { name: 'Picked Meat, No Shell', costPP: 97, trivia: 'Picked meat looks like the extravagant way to buy crab and it is the opposite.' },
      { name: 'Whole Crab, Shell On', costPP: 151, default: true }
    ])).red.length === 0);

  t('ok · an honest "cheaper than" pointing at a genuinely dearer version', () =>
    run(base([
      { name: 'Picked Meat', costPP: 97, trivia: 'It is cheaper than the Whole Crab version once you price the meat.' },
      { name: 'Whole Crab', costPP: 151, default: true }
    ])).red.length === 0);

  t('ok · a legitimate §33 not-in-SA claim about an ABSENT ingredient does not fire RED', () =>
    run(base([{ name: 'A', costPP: 10 }, { name: 'B', costPP: 20 }],
      { ingredients: '10g gai lan', method: 'You cannot buy gai lan here, and this card says so rather than swapping quietly.' })).red.length === 0);

  t('ok · …but it IS printed for Tina to confirm', () =>
    run(base([{ name: 'A', costPP: 10 }, { name: 'B', costPP: 20 }],
      { ingredients: '10g gai lan', method: 'You cannot buy gai lan here, and this card says so rather than swapping quietly.' })).confirm.length === 1);

  t('ok · a single-version record is never judged on comparatives', () =>
    run(base([{ name: 'Only', costPP: 50, default: true, trivia: 'It costs more than you think.' }])).red.length === 0);

  t('ok · RECORD 32 REGRESSION — "Crab is the famous one and the expensive one" in the CHICKEN fork is NOTED, not failed', () => {
    const r = run(base([
      { name: 'Chicken (Budget)', costPP: 46, trivia: 'Crab is the famous one and the expensive one, but it is not the parent.' },
      { name: 'Whole Crab', costPP: 151, default: true }
    ]));
    return r.red.length === 0 && r.note.length === 1;
  });

  t('ok · SOM TAM REGRESSION — a CONDITIONAL "if you cannot find X" is not an assertion', () =>
    run(base([{ name: 'A', costPP: 10 }, { name: 'B', costPP: 20 }],
      { ingredients: '100g green papaya',
        method: 'If you cannot find green papaya at all, do not substitute ripe papaya — use the cucumber version.' })).red.length === 0);

  t("ok · TINA'S RULING — a (Budget) fork UNDER the default is fine even when a third fork is cheaper", () =>
    run(base([
      { name: 'Duck Legs (Budget)', costPP: 42 },
      { name: 'Whole Duck', costPP: 90, default: true },
      { name: 'Offcuts', costPP: 34 }
    ])).red.length === 0);

  t('ok · RAD NA REGRESSION — "tao jiew, salted yellow soybeans, not sold here" surfaces the keyed `yellow soybean paste`', () => {
    const r = run(base([{ name: 'A', costPP: 10 }, { name: 'B', costPP: 20 }],
      { method: 'The first is tao jiew, salted yellow soybeans, and it is not sold here in any reliable form.' }));
    return r.red.length === 0 && r.confirm.some(c => /yellow soybean paste/.test(c));
  });

  t('ok · an unresolvable comparison target is NOTED, never failed', () => {
    const r = run(base([
      { name: 'Alpha', costPP: 20, trivia: 'It costs more than a takeaway would.' },
      { name: 'Beta', costPP: 80, default: true }
    ]));
    return r.red.length === 0 && r.note.length === 1;
  });

  console.log('\n' + (fail === 0 ? '✅ all ' + pass + ' proofs pass\n' : '🔴 ' + fail + ' of ' + (pass + fail) + ' proofs FAILED\n'));
  process.exit(fail === 0 ? 0 : 1);
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
function loadRecords(country, batchArg) {
  if (batchArg) {
    const p = path.resolve(REPO_ROOT, batchArg);
    const NEW = require(p);
    if (!Array.isArray(NEW)) { console.error('🔴 ' + batchArg + ' must export an array'); process.exit(1); }
    return NEW;
  }
  const meta = COUNTRIES[country];
  const src = fs.readFileSync(path.join(REPO_ROOT, 'sections', meta.file), 'utf8');
  const sb = { window: {} }; sb.globalThis = sb;
  const c = vm.createContext(sb);
  vm.runInContext(src, c, { filename: meta.file });
  return vm.runInContext(meta.varName, c);
}

function main() {
  const args = process.argv.slice(2);
  const ctx = loadGate(REPO_ROOT);
  if (args[0] === '--selftest') return selftest(ctx);

  const country = args[0];
  if (!country || !COUNTRIES[country]) {
    console.error('usage: node claimcheck.js <' + Object.keys(COUNTRIES).join('|') + '> [batch.js]');
    console.error('       node claimcheck.js --selftest');
    process.exit(1);
  }
  const records = loadRecords(country, args[1]);

  const red = [], note = [], confirm = [];
  records.forEach(r => { checkCostClaims(r, red, note); checkAvailability(r, ctx, red, confirm); });

  console.log('\n⚖️  claimcheck · ' + country + ' · ' + records.length + ' records' + (args[1] ? ' (batch ' + args[1] + ')' : ''));

  if (red.length) {
    console.log('\n🔴 CONTRADICTIONS — the card disagrees with the app\'s own numbers (' + red.length + ')');
    red.forEach(r => console.log('   🔴 ' + r));
  }
  if (note.length) {
    console.log('\n🟠 UNRESOLVED COMPARISONS — a cost claim this tool could not point at a version (' + note.length + ')');
    note.forEach(r => console.log('   🟠 ' + r));
  }

  console.log('\n🔵 AVAILABILITY CLAIMS — NOT A FAULT. TINA CONFIRMS THESE, NOTHING ELSE CAN (' + confirm.length + ')');
  if (!confirm.length) console.log('   (none)');
  confirm.forEach(r => console.log('   🔵 ' + r));

  console.log('\n── SUMMARY ──');
  console.log('   🔴 ' + red.length + '   🟠 ' + note.length + '   🔵 ' + confirm.length + '   of ' + records.length + ' records');
  console.log('   HONEST LIMIT: this catches CONTRADICTION and DIRECTION, never TRUTH. An');
  console.log('   invented claim about an ingredient that is genuinely absent looks exactly');
  console.log('   like a correct one. The 🔵 list is printed BECAUSE it cannot be measured.');
  console.log('');
  process.exit(red.length ? 1 : 0);
}

main();
