#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   TINZA HOLDER AUDIT  ·  MF144 Phase C  ·  25 July 2026
   READ-ONLY. It writes NOTHING. It only reports.

   RUN:   node Tools/tinza-holder-audit.js        (from the repo root)

   ⚖️ WHY THIS EXISTS — the Phase B pass tagged ONE named record per dish.
   The library keeps the SAME DISH as separate records in different rooms,
   so the un-named twins stayed bare and nothing said so out loud. Melktert
   (bakes ✓ · WK ✗ · events ✗) and Malva (events ✓ · bakes ✗ · WK ✗) both
   slipped through a green board. ⚖️ Law 42 — the ratchet: a bug you close
   adds a watcher. A bare twin must be VISIBLE, not inferred.

   ⚖️ §19 PARSE, NEVER GREP — this boots the real library in a sandbox and
   walks the record objects. It never pattern-matches the source files.

   TWO QUESTIONS, ANSWERED SEPARATELY:
     A · SPLIT   — a twin of this dish HAS a holder and this copy does not.
                   Always a bug. The dish is proven to need one.
     B · ALL-BARE — the dish looks like it needs a holder and NO copy has one.
                   A candidate list for authoring, not an automatic bug.
   ══════════════════════════════════════════════════════════════════════════ */

const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = process.cwd();
const CLI = (require.main === module);   // required by the doctor → analysis only, no printing
if (CLI && !fs.existsSync(path.join(ROOT, 'index.html'))) {
  console.log('\x1b[31mNo index.html here. Run the audit from the tinza repo root.\x1b[0m');
  process.exit(2);
}

// ── BOOT (same sandbox as the census / doctor) ───────────────────────────
// Only when run as a CLI. The doctor has already booted the library and hands it in.
function bootLibrary(){
const loadOrder = (fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8')
  .match(/sections\/[A-Za-z0-9_.-]+\.js/g) || []);
const ctx = {
  console: { log(){}, warn(){}, error(){} },
  fetch: () => Promise.reject(new Error('offline')),
  setTimeout, clearTimeout, setInterval, clearInterval,
  document: { getElementById: () => null, addEventListener(){}, querySelector: () => null },
  localStorage: { getItem: () => null, setItem(){}, removeItem(){} },
  navigator: { onLine: true }, location: { href: '' }
};
ctx.window = ctx; vm.createContext(ctx);
const LOAD_FAILURES = [];
for (const f of loadOrder) {
  try { vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { LOAD_FAILURES.push(f + ' — ' + String(e.message).split('\n')[0].slice(0, 100)); }
}
let all = [];
try { all = ctx.allRecipes ? ctx.allRecipes() : []; } catch (e) { all = []; }
if (LOAD_FAILURES.length) {
  console.log('\x1b[31m⚠ LOAD FAILURES — the audit is reading a PARTIAL library:\x1b[0m');
  LOAD_FAILURES.forEach(f => console.log('   ' + f));
}
return all;
}

// ── NAME → GROUPING KEY ──────────────────────────────────────────────────
// Accent-fold, drop punctuation, strip the filler words that make the same
// dish look like two ("Classic Bobotie" vs "Bobotie").
const FILLER = /\b(classic|traditional|creamy|easy|simple|homemade|real|proper|best|ultimate|the|a|an|and|old|fashioned|style|granny|ouma|oma|my|our)\b/g;
function norm(s) {
  return String(s || '').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['’`]/g, '').replace(/[^a-z0-9]+/g, ' ')
    .replace(FILLER, ' ').replace(/\s+/g, ' ').trim();
}
// Cross-language / cross-spelling twins the name key can NEVER join on its own.
// ⛔ EXACT MATCH ONLY. A prefix match here once swallowed "Malva Pudding Muffin"
//    into the Malva group — a muffin is its own dish with its own holder.
const SYN = [
  ['melktert', 'milk tart'],
  ['malva pudding', 'malva poeding', 'malvapudding'],
  ['bobotie'],
  ['lasagne', 'lasagna', 'beef lasagne', 'beef lasagna'],
  ['shepherds pie', 'herderspastei'],
  ['cottage pie'],
  ['peppermint crisp tart', 'peppermint crisp tert', 'peppermint tart'],
  ['chicken pie', 'hoenderpastei'],
  ['apple tart', 'appeltert', 'appeltaart'],
  ['sago pudding', 'sagopoeding'],
  ['basbousa'], ['pasteis de nata', 'pastel de nata'],
  ['koeksister', 'koesister']
];
const synKey = {}; SYN.forEach(g => g.forEach(n => synKey[norm(n)] = norm(g[0])));

// A record's candidate names: its own name, roman name, alt, aliases, PLUS the
// inside of any bracket — "Melktert (Milk Tart)" must offer BOTH halves.
function candidates(r) {
  const raw = [r.name, r.nameRoman, r.nameAlt].concat(Array.isArray(r.aliases) ? r.aliases : []);
  const out = [];
  raw.filter(Boolean).forEach(s => {
    out.push(s);
    const m = String(s).match(/\(([^)]+)\)/g) || [];
    m.forEach(b => out.push(b.slice(1, -1)));
    out.push(String(s).replace(/\([^)]*\)/g, ''));
  });
  return out.map(norm).filter(Boolean);
}
function keyOf(r) {
  const c = candidates(r);
  if (!c.length) return 'id:' + r.id;              // non-Latin, no roman name → never group
  for (const x of c) if (synKey[x]) return synKey[x];
  return c[0];
}

const has = r => Array.isArray(r.equipment) && r.equipment.length > 0;
const loc = r => (r.section || '?') + ':' + r.id;

// ── DOES THIS RECORD LOOK LIKE IT NEEDS A FIXED HOLDER? ──────────────────
// Only used for list B (candidates). List A never asks — a twin already proved it.
const HOLDER_WORDS = /\b(lasagne|lasagna|bake|baked|pie|tart|tert|taart|quiche|gratin|crumble|cobbler|casserole|moussaka|pastitsio|pudding|poeding|cheesecake|brownie|blondie|cake|koek|torte|kuchen|loaf|brood|muffin|scone|tray ?bake|roulade|flan|clafoutis|strata|cannelloni|hotpot|potbake|melktert|malva|souffle|nockerl|terrine|tiramisu|trifle|sernik|mazurek)\b/;
const VESSEL_METHOD = /\b(ovenproof dish|baking dish|baking tin|oven dish|cake tin|loaf tin|springform|pie dish|tart tin|muffin tin|muffin tray|roasting dish|casserole dish)\b/i;
// Rooms whose records are never fixed-holder dishes.
const SKIP_SECTIONS = { furry: 1, beverages: 1 };
// A roast, a grill, a no-bake — the holder is not a fixed-capacity vessel (⚖️ NONE).
const NOT_A_HOLDER = /\b(roast|braten|asado|assado|tandir|kebap|gyros|souvlaki|steak|chop|grill|braai|skillet|no ?bake|chia|smoothie|salad|soup|sauce|dressing|marinade|chutney|atchar|jam)\b/;

function methodText(r) {
  const m = r.method;
  if (Array.isArray(m)) return m.map(x => typeof x === 'string' ? x : (x && (x.text || x.step || ''))).join(' ');
  return typeof m === 'string' ? m : '';
}
function needsHolder(r) {
  if (SKIP_SECTIONS[r.section]) return false;
  const n = candidates(r).join(' ');
  if (NOT_A_HOLDER.test(n)) return false;
  return HOLDER_WORDS.test(n) || VESSEL_METHOD.test(methodText(r));
}
// ⚖️ SOFT-6 IS FAMILY-MEAL ONLY (Rulings §10). A count-scaled room keeps its own
// count, so its holder carries NO `soft:true` — the dish COUNT still shows.
const COUNT_SCALED = { events: 1, buffet: 1, kiddies: 1 };
const seed = r => COUNT_SCALED[r.section] ? 'no soft: (count-scaled room)' : 'soft:true allowed';

// ── GROUP ────────────────────────────────────────────────────────────────
// analyse(all) → { split, allBare }. Pure. The doctor calls this with its own library.
function analyse(all) {
  const groups = {};
  all.forEach(r => { const k = keyOf(r); (groups[k] = groups[k] || []).push(r); });
  const split = [], allBare = [];
  Object.keys(groups).forEach(k => {
    const g = groups[k], eq = g.filter(has), bare = g.filter(r => !has(r));
    if (eq.length && bare.length) split.push({ k, eq, bare });
    else if (!eq.length) { const nd = g.filter(needsHolder); if (nd.length) allBare.push({ k, g: nd }); }
  });
  return { split, allBare };
}
module.exports = { analyse, needsHolder, keyOf, has, loc, seed };
if (!CLI) return;   // required by the doctor — stop here, print nothing

const all = bootLibrary();
const { split: SPLIT, allBare: ALLBARE } = analyse(all);

// ── REPORT ───────────────────────────────────────────────────────────────
const C = { r:'\x1b[31m', g:'\x1b[32m', y:'\x1b[33m', c:'\x1b[36m', b:'\x1b[1m', d:'\x1b[2m', x:'\x1b[0m' };
console.log('\n' + C.b + C.c + '🍽️  TINZA HOLDER AUDIT' + C.x + C.d + '  ' +
  new Date().toISOString().slice(0, 16).replace('T', ' ') + ' · read-only · writes nothing' + C.x);
console.log(C.d + '    ' + all.length + ' records · ' + all.filter(has).length + ' carry a holder' + C.x);

console.log('\n' + C.b + C.r + 'A · SPLIT — a twin HAS the holder, this copy is BARE' + C.x +
  C.d + '   (always a bug — the dish is proven)' + C.x);
if (!SPLIT.length) console.log('  ' + C.g + '✔ no split dishes — every twin matches' + C.x);
SPLIT.sort((a, b) => b.bare.length - a.bare.length).forEach(x => {
  console.log('\n  ' + C.b + x.eq[0].name + C.x + C.d + '   [' + x.k + ']' + C.x);
  x.eq.forEach(r => console.log('    ' + C.g + '✓' + C.x + ' ' + loc(r).padEnd(32) + C.d + JSON.stringify(r.equipment) + C.x));
  x.bare.forEach(r => console.log('    ' + C.r + '✗' + C.x + ' ' + loc(r).padEnd(32) + r.name + C.d + '  → ' + seed(r) + C.x));
});

console.log('\n\n' + C.b + C.y + 'B · ALL-BARE — looks like it needs a holder, NO copy has one' + C.x +
  C.d + '   (authoring candidates)' + C.x);
const byRoom = {};
ALLBARE.forEach(x => x.g.forEach(r => (byRoom[r.section] = byRoom[r.section] || []).push(r)));
Object.keys(byRoom).sort().forEach(sec => {
  console.log('\n  ' + C.b + sec + C.x + C.d + '  (' + byRoom[sec].length + ')' + C.x);
  byRoom[sec].forEach(r => console.log('    · ' + r.id.padEnd(34) + r.name));
});

console.log('\n' + C.b + 'TOTALS' + C.x + '  split dishes=' + SPLIT.length +
  ' (' + SPLIT.reduce((n, x) => n + x.bare.length, 0) + ' bare copies)  ·  all-bare candidates=' +
  ALLBARE.reduce((n, x) => n + x.g.length, 0) + '\n');
