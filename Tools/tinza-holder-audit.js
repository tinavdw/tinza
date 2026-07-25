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

// ── BARE BY RULING, NOT BY OMISSION ─────────── MF145 · 25 Jul · Rulings §10 ──
// ⚖️ "Ingredients scale per person → no fixed yield → NO holder. Ask of the
//    RECORD, never the NAME." A per-head sauce next to a batch twin is not a
//    split — it is two different constructions wearing one name, exactly like
//    the three Apple Tarts. Spice bottles 500ml; Events scales to the guest count.
//
// ⛔ THIS READS A DECLARATION, IT NEVER INFERS. There is no regex here on
//    purpose. events/braai ingredients cross the door through nameOnlyIng() with
//    pp:null BY DESIGN, so the basis is genuinely unknowable downstream — any
//    guess would be a silent wrong answer wearing a green tick.
// ⛔ AND IT FAILS LOUD, NOT SAFE. If MF145's door line is ever dropped, yieldBasis
//    arrives undefined, the exemption stops applying and the records go back to
//    RED. A missing exemption must reappear as a bug, never vanish into green.
//    ⚖️ MF135 — a watcher that swallows its own failure cannot watch.
const perHead = r => r.yieldBasis === 'perHead';

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
  const split = [], allBare = [], exempt = [];
  Object.keys(groups).forEach(k => {
    const g = groups[k], eq = g.filter(has);
    // A declared per-head record is bare BY RULING. Pull it out before either
    // question is asked — it is neither a bug nor an authoring candidate.
    // Reported all the same: an exemption nobody can see is indistinguishable
    // from a check that quietly stopped running.
    const ex = g.filter(r => !has(r) && perHead(r));
    const bare = g.filter(r => !has(r) && !perHead(r));
    ex.forEach(r => exempt.push({ k, r }));
    if (eq.length && bare.length) split.push({ k, eq, bare });
    else if (!eq.length) { const nd = bare.filter(needsHolder); if (nd.length) allBare.push({ k, g: nd }); }
  });
  return { split, allBare, exempt };
}
module.exports = { analyse, needsHolder, keyOf, has, loc, seed, perHead };
if (!CLI) return;   // required by the doctor — stop here, print nothing

const all = bootLibrary();
const { split: SPLIT, allBare: ALLBARE, exempt: EXEMPT } = analyse(all);

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

console.log('\n\n' + C.b + C.c + 'C \u00b7 EXEMPT \u2014 declared per-head, so NO holder by ruling' + C.x +
  C.d + '   (\u2696\ufe0f Rulings \u00a710 \u00b7 not a bug, not a candidate)' + C.x);
if (!EXEMPT.length) console.log('  ' + C.d + 'none declared' + C.x);
EXEMPT.forEach(x => console.log('    ' + C.c + '\u25cb' + C.x + ' ' + loc(x.r).padEnd(32) + x.r.name +
  C.d + '   [' + x.k + ']' + C.x));

console.log('\n' + C.b + 'TOTALS' + C.x + '  split dishes=' + SPLIT.length +
  ' (' + SPLIT.reduce((n, x) => n + x.bare.length, 0) + ' bare copies)  ·  all-bare candidates=' +
  ALLBARE.reduce((n, x) => n + x.g.length, 0) + '  \u00b7  per-head exempt=' + EXEMPT.length + '\n');
