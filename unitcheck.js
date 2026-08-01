#!/usr/bin/env node
/* ============================================================================
 * unitcheck.js — THE COUNT-VS-WEIGHT WATCHER
 * ----------------------------------------------------------------------------
 *   node unitcheck.js                  # every wk_* file in sections/
 *   node unitcheck.js thailand         # one country
 *   node unitcheck.js thailand b.js    # a batch before merge
 *
 * WHY THIS EXISTS (Tina, 1 Aug 2026: "this needs fixing"):
 *   The Thailand cold start had grown FOUR separate landmine table rows all
 *   describing ONE shape:
 *       mushroom R165 / mushrooms R90   ·   lime R8.75-count / limes R140-weight
 *       banana R2.50-count / bananas R25-weight   ·   chicken wing / chicken wings
 *   A standard that lives in a document is a standard that lives in a memory,
 *   and this project has already paid for that lesson twice (see tinza-all.js).
 *   Four rows in a markdown file is not a gate. This is.
 *
 * ⚖️ THIS IS CARRIED DEBT #3, MADE MECHANICAL AT LAST.
 *   The debt reads: "count-vs-weight direction B has no mechanical rung — a g/ml
 *   line hitting a count key is invisible to pricecheck, coverage and merge."
 *   It is invisible because the line DOES resolve. pricecheck asks "is there a
 *   key?" and the answer is yes. Nobody was asking "is it the right KIND of key?"
 *
 * ⚖️ DESIGN LAW, identical to merge.js / pricecheck.js / costcheck.js:
 *   THIS TOOL DOES NOT REIMPLEMENT THE PRICING ENGINE. It loads the app's own
 *   prices.js + core.js + worldkitchen.js into a vm sandbox and calls the real
 *   wkParseIngredients() and wkPriceLookup(). A watcher with a private copy of
 *   the rules drifts from the rules.
 *
 * ⚠️ THE FIRST VERSION OF THIS TOOL WAS WRONG, AND THE CORRECTION IS THE POINT.
 *   It began by flagging every g/ml line that resolved to a per-COUNT key, on the
 *   premise stated in carried debt #3. That fired 89 times across the corpus —
 *   and every one was a FALSE POSITIVE. The engine already carries AVG_WEIGHT_G,
 *   77 entries of average item weights, and converts grams to counts perfectly
 *   well: "100g apple" costs R4 against R6 for a whole one. ⚖️ A watcher that
 *   reports 89 faults that are not faults is worse than no watcher, because
 *   somebody will spend a day "fixing" correct records.
 *
 * ⚖️ SO THIS TOOL TESTS BY OUTCOME, NOT BY THEORY. It does not reason about what
 *   the engine ought to do with a unit. It PRICES THE LINE and asks one question:
 *
 *       the key exists — so why did this ingredient cost R0?
 *
 * THE FAULT IT ACTUALLY FINDS
 *   🔴 SILENT ZERO — a line whose ingredient resolves to a real, live price key
 *      and still costs nothing, because the unit and the key disagree and there
 *      is no average weight to bridge them. "2 sheep trotters" → `trotters`
 *      R130/kg → R0. "5 curry leaves" → R0. "1 carrot" → R0.
 *      ⚖️ Law 20 — a price that vanishes is a harm. The card shows a total that
 *      is confidently, quietly short, and coverage still counts the item as
 *      priced. This is invisible to pricecheck, to costcheck and to merge.
 *
 * ⚖️ AND IT NAMES WHAT IT CANNOT DO. It cannot tell you that a per-count price
 *   is the WRONG count price, or that R85/kg is the wrong wing. Presence and
 *   KIND only. Same honest limit as pricecheck's.
 * ==========================================================================*/

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const REPO_ROOT = __dirname;

// ── LOAD THE REAL ENGINE ─────────────────────────────────────────────────────
function loadGate(repoRoot) {
  const need = ['sections/prices.js', 'sections/core.js', 'sections/worldkitchen.js'];
  const missing = need.filter(f => !fs.existsSync(path.join(repoRoot, f)));
  if (missing.length) {
    console.error('🔴 engine incomplete — missing: ' + missing.join(', '));
    process.exit(1);
  }
  const sandbox = {
    window: {}, document: undefined,
    console: { log(){}, info(){}, warn(){}, error(){} },
    localStorage: { getItem(){ return null; }, setItem(){}, removeItem(){} },
    navigator: {}, location: { href: '', search: '' }, setTimeout(){}, clearTimeout(){}
  };
  sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);
  for (const f of need) {
    try { vm.runInContext(fs.readFileSync(path.join(repoRoot, f), 'utf8'), ctx, { filename: f }); }
    catch (e) { /* DOM references on load are tolerated; verified below */ }
  }
  const ok = vm.runInContext(
    '(typeof wkParseIngredients === "function" && typeof wkPriceLookup === "function")', ctx);
  if (!ok) {
    console.error('🔴 engine loaded but wkParseIngredients()/wkPriceLookup() are missing.');
    console.error('   A partial gate silently under-reports. Stopping.');
    process.exit(1);
  }
  return ctx;
}

const CTX   = loadGate(REPO_ROOT);
const parse = s => vm.runInContext('wkParseIngredients(' + JSON.stringify(s) + ')', CTX);
const look  = n => vm.runInContext('wkPriceLookup('   + JSON.stringify(n) + ')', CTX);

// ── THE RULE ─────────────────────────────────────────────────────────────────
// One line in, one verdict out. Everything else in this file is plumbing.
const costLine = s =>
  vm.runInContext('wkCostRecipeShape(' + JSON.stringify({ ingredients: s }) + ',1)', CTX);

function judge(line) {
  let parts; try { parts = parse(line); } catch (e) { return []; }
  const out = [];
  for (const p of parts) {
    if (!p || !p.name || p.toTaste || p.qty == null) continue;
    let r; try { r = look(p.name); } catch (e) { continue; }
    if (!r || !r.per || !r.price) continue;      // absent → pricecheck's job, not ours
    let isWater = false;
    try { isWater = vm.runInContext('typeof wkIsWater==="function" && wkIsWater(' +
          JSON.stringify(p.name) + ')', CTX); } catch (e) {}
    if (isWater) continue;                       // water is not bought
    // ⚖️ THE WHOLE TEST, AND IT USES missing[] RATHER THAN THE TOTAL.
    //    An early draft compared the total to zero and tripped over rounding:
    //    "5g chilli" legitimately costs R0.33 and rounds to R0. missing[] is the
    //    engine's own statement that it could not price the item at all, and it
    //    is immune to that. ⚖️ THE GAP THIS EXPOSES IS THE WHOLE POINT:
    //    wkPriceLookup() says the key EXISTS while costRecipe() silently DROPS it.
    //    pricecheck only ever asked the first of those two.
    const one = (p.qty + (p.unit || '') + ' ' + p.name).trim();
    let shape = null; try { shape = costLine(one); } catch (e) { continue; }
    if (shape && (shape.missing || []).length) {
      out.push({
        sev: 'ZERO', text: one, key: r.key, price: r.price, per: r.per,
        unit: p.unit ? 'measured' : 'counted'
      });
    }
  }
  return out;
}

// ── BORN-RED PROOFS ──────────────────────────────────────────────────────────
// ⚖️ A watcher that has never been seen to fire is a watcher nobody should
//    trust. These lines MUST be caught. If the engine's keys change under us
//    and a proof stops firing, this tool refuses to run rather than reporting
//    a reassuring zero.
const PROOFS = [
  { line: '2 sheep trotters', want: 'ZERO' },
  { line: '5 curry leaves',   want: 'ZERO' },
  { line: '1 carrot',         want: 'ZERO' },
  { line: '1 stick celery',   want: 'ZERO' }
];
// ⚖️ AND THE ANTI-PROOFS. These MUST NOT fire. They are the 89 false positives
//    the first version of this tool reported, kept as a permanent guard so the
//    same mistake cannot be reintroduced by a future edit.
const ANTI_PROOFS = ['100g apple', '15g lime', '2g bay leaves', '100g rye bread', '5g chilli'];

function selfTest() {
  const failed = [];
  for (const p of PROOFS) {
    const hits = judge(p.line);
    if (!hits.some(h => h.sev === p.want)) failed.push(p.line + '  (expected ' + p.want + ')');
  }
  const falsePos = ANTI_PROOFS.filter(l => judge(l).length);
  if (failed.length || falsePos.length) {
    console.error('🔴 SELF-TEST FAILED — this tool is not measuring what it claims.');
    failed.forEach(f  => console.error('   ✗ proof did not fire: ' + f));
    falsePos.forEach(f => console.error('   ✗ ANTI-PROOF FIRED (false positive is back): ' + f));
    console.error('   Fix the tool before trusting any run of it, green or red.');
    process.exit(1);
  }
  return PROOFS.length + ANTI_PROOFS.length;
}

// ── HARVEST RECORDS ──────────────────────────────────────────────────────────
function loadRecords(target, batchArg) {
  const recs = [];
  if (batchArg) {
    const bp = path.resolve(process.cwd(), batchArg);
    if (!fs.existsSync(bp)) { console.error('🔴 batch not found: ' + bp); process.exit(1); }
    const arr = require(bp);
    arr.forEach(r => recs.push({ src: path.basename(bp), rec: r }));
    return recs;
  }
  const dir = path.join(REPO_ROOT, 'sections');
  const files = fs.readdirSync(dir)
    .filter(f => /^wk_.*\.js$/.test(f))
    .filter(f => !target || f === 'wk_' + target.toLowerCase() + '.js');
  if (target && !files.length) { console.error('🔴 no sections/wk_' + target + '.js'); process.exit(1); }
  for (const f of files) {
    const sb = { window: {} }; vm.createContext(sb);
    try { vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), sb, { filename: f }); }
    catch (e) { continue; }
    Object.keys(sb).filter(k => /^WK_/.test(k) && Array.isArray(sb[k]))
      .forEach(k => sb[k].forEach(r => recs.push({ src: f, rec: r })));
  }
  return recs;
}

// ⚖️ VERSIONS COUNT. A delta that swaps in "15g lime" is exactly as wrong as a
//    base line that does, and it is harder to see. Walk swapIng/addIng too.
function linesOf(rec) {
  const out = [];
  if (rec.ingredients) out.push({ where: 'ingredients', line: rec.ingredients });
  (rec.versions || []).forEach(v => {
    const d = v.delta; if (!d) return;
    (d.addIng  || []).forEach(a => a.item && out.push({ where: 'v:' + v.name + ' addIng',  line: a.item }));
    (d.swapIng || []).forEach(a => a.to   && out.push({ where: 'v:' + v.name + ' swapIng', line: a.to   }));
  });
  return out;
}

// ── RUN ──────────────────────────────────────────────────────────────────────
const [target, batchArg] = process.argv.slice(2);

console.log('');
console.log('⚖️  unitcheck — THE COUNT-VS-WEIGHT WATCHER   ·   carried debt #3');
console.log('   Loads the app\'s own engine. Asks the one question pricecheck never asked:');
console.log('   not "is there a key?" but "is it the right KIND of key?"');
console.log('');
const nProofs = selfTest();
console.log('   ✅ ' + nProofs + '/' + nProofs + ' self-tests pass (4 born-RED proofs + 5 anti-proofs).');
console.log('');

const records = loadRecords(target, batchArg);
const dirB = [], dirA = [];

for (const { src, rec } of records) {
  for (const { where, line } of linesOf(rec)) {
    for (const hit of judge(line)) {
      (hit.sev === 'ZERO' ? dirB : dirA).push({ id: rec.id || '(no id)', src, where, hit });
    }
  }
}

const pad = (s, n) => (s + ' '.repeat(n)).slice(0, n);

console.log('🔴 SILENT ZERO — the key is live and the ingredient still costs R0  (' + dirB.length + ')');
console.log('   ⚖️ Law 20 — a price that vanishes is a harm. The card prints a total that is');
console.log('      confidently short, and coverage still counts the item as priced.');
if (!dirB.length) console.log('   — clean');
dirB.forEach(h => console.log('   • ' + pad(h.id, 30) + pad(h.hit.text, 26) + '→ ' + h.hit.key +
                              ' R' + h.hit.price + '/' + h.hit.per + '  (' + h.hit.unit + ')   [' + h.where + ']'));
console.log('');

console.log('── SUMMARY ──');
console.log('   records scanned ' + records.length + '   ·   🔴 ' + dirB.length);
console.log('   ⚖️ THE FIX IS ALMOST ALWAYS ONE LINE IN AVG_WEIGHT_G, not an edit to the record.');
console.log('      The record is usually written the way a cook would write it. It is the');
console.log('      bridge between a count and a per-kilo price that is missing.');
console.log('   HONEST LIMIT: this finds ingredients that price at nothing. It cannot tell you');
console.log('   that a price which DID resolve is the right one — that is priceledger.js and');
console.log('   Tina\'s eyes on the shelf.');
console.log('');

process.exit(dirB.length ? 1 : 0);
