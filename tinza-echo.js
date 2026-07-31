#!/usr/bin/env node
/* ============================================================================
 * tinza-echo.js — THE WATCHER FOR `/tinza`. IT HUNTS THE DATABASE SMELL.
 * ----------------------------------------------------------------------------
 *   node tinza-echo.js                     # every wk_*.js — LANE-WIDE, the real scope
 *   node tinza-echo.js thailand            # one country, still compared against ALL
 *   node tinza-echo.js thailand batch.js   # a BATCH, compared against all, BEFORE merge
 *   node tinza-echo.js --selftest          # born-RED proofs
 *
 * WHY THIS EXISTS (Tina, 31 Jul 2026, on the JUDGEMENT REQUIRED list: "we need a watcher"):
 *   `/tinza` was one of three standards with no watcher. Its own one-line test is
 *   "READ IT ALOUD. IF IT SOUNDS LIKE A DATABASE, IT FAILS." That sounds like pure
 *   judgement — and most of it is. But the FIRST of its five named failures is not:
 *
 *     ❌ THE DATABASE — "Correct, complete, and dead. Nobody wrote it."
 *
 *   A card sounds like a database when it REPEATS ANOTHER CARD. Not when a human
 *   dislikes it — when the same phrasing, the same opening formula, the same moat
 *   angle appears twice. That is a FACT ABOUT THE CORPUS, and a fact is measurable.
 *   ⚖️ So this tool never asks "is this good?" It asks "HAS THIS ALREADY BEEN SAID?"
 *
 * ⚖️ THE PRECEDENT THAT SHAPED EVERY THRESHOLD IN HERE — 30 Jul 2026:
 *   wowcheck's why-led check was a PHRASE WHITELIST. It flagged 8 densely why-led
 *   records as failures and was DEMOTED to a count. The lesson was written down:
 *   COUNT, NEVER JUDGE. So nothing below carries a hand-written quality threshold.
 *   Every flag is either (a) an exact collision between two records — arithmetic,
 *   no opinion — or (b) an OUTLIER measured against this corpus's own mean and
 *   standard deviation. If the whole shelf gets longer, the bar moves with it.
 *
 * ⚖️ SCOPE IS LANE-WIDE ON PURPOSE. crossLinks are country-bound; LEADS AND MOATS
 *   ARE NOT. Indonesia's coconut-cracking lead is spent for Thailand too. So the
 *   comparison corpus is every wk_*.js in sections/, always — even when a single
 *   country or batch is named.
 *
 * ⚖️ AND IT SAYS WHAT IT CANNOT SEE. Of `/tinza`'s five failures it measures two
 *   and a half. THE CONFIDENT LIE (potato bobotie) needs a grandmother. THE GOOGLE
 *   CARD needs someone who knows what is common knowledge. Those print as
 *   NOT MEASURED on every run. A watcher that implied it had checked them would be
 *   the tierBar again — a green light over a hole.
 *
 * READ-ONLY. Never edits. Exits 0 always — a FLOOR, not a gate (Law 51).
 * ============================================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SECTIONS = path.join(ROOT, 'sections');

/* ── LOAD ─────────────────────────────────────────────────────────────────
   PARSE-NEVER-REGEX: evaluate the file, walk the objects. */
function loadFile(abs, varName) {
  const src = fs.readFileSync(abs, 'utf8');
  const m = varName ? null : src.match(/var\s+(WK_[A-Z_]+)\s*=/);
  const v = varName || (m && m[1]);
  if (!v) return null;
  try { return (new Function(src + '; return ' + v + ';'))(); } catch (e) { return null; }
}

function loadCorpus() {
  const out = [];
  for (const f of fs.readdirSync(SECTIONS).filter(x => /^wk_.*\.js$/.test(x))) {
    const arr = loadFile(path.join(SECTIONS, f));
    if (!Array.isArray(arr)) continue;
    arr.forEach(r => out.push({ file: f, rec: r }));
  }
  return out;
}

function loadBatch(abs) {
  delete require.cache[require.resolve(abs)];
  const m = require(abs);
  return Array.isArray(m) ? m : (Array.isArray(m && m.default) ? m.default : null);
}

/* ── THE FIELDS THAT CARRY THE VOICE ──────────────────────────────────────
   ⚖️ TWO TIERS, AND THE SPLIT IS THE WHOLE POINT OF THE TOOL BEING USEFUL.
   The first real run flagged 216 hard echoes and the top twenty were all
   "store in an airtight container for up to" — which is not a voice failure,
   it is a STORAGE INSTRUCTION, and storage instructions are SUPPOSED to read
   the same on every card. Burying the database smell under functional
   boilerplate is how a watcher becomes noise, and a rung that cries wolf gets
   ignored, which is worse than not having it (costcheck's own tolerance note).

   VOICE = where a human is supposed to be audible. Repetition here is THE
           DATABASE FAILURE.
   FUNCTIONAL = storage, pairings. Repetition here is expected and correct.
           Reported separately, never as a fault. */
const VOICE_FIELDS = ['howThisFeels', 'trivia', 'chefNotes', 'nameAlt'];
const FUNCTIONAL_FIELDS = ['storage', 'pairsWith'];

function firstSentence(s) {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  const m = t.match(/^(.{20,200}?)(?:[.!?]\s|$)/);
  return m ? m[1] : t.slice(0, 200);
}

/* Method LEAD = the opening clause. This is where a card declares its angle,
   and it is the thing the cold starts call a "spent lead". */
function methodLead(r) {
  const t = String(r.method || '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  return firstSentence(t);
}

function norm(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function shingles(text, n) {
  const w = norm(text).split(' ').filter(Boolean);
  const out = [];
  for (let i = 0; i + n <= w.length; i++) out.push(w.slice(i, i + n).join(' '));
  return out;
}

function mean(a) { return a.reduce((x, y) => x + y, 0) / (a.length || 1); }
function sd(a) { const m = mean(a); return Math.sqrt(mean(a.map(x => (x - m) ** 2))); }

/* ── RUNG 1 · ECHO — the same words in two different records ───────────────
   Arithmetic. No opinion. N=7 chosen because 7 consecutive identical words is
   past coincidence for prose but short enough to catch a reused formula. */
const N = 7;
function rungEcho(corpus, targetIds, fields) {
  const map = new Map();
  for (const { file, rec } of corpus) {
    const id = rec.id || rec.name;
    const seen = new Set();
    for (const f of fields) {
      const text = f === '__lead' ? methodLead(rec) : rec[f];
      for (const g of shingles(text, N)) {
        if (seen.has(g)) continue;
        seen.add(g);
        if (!map.has(g)) map.set(g, []);
        map.get(g).push({ id, file, field: f === '__lead' ? 'method-lead' : f });
      }
    }
  }
  const hits = [];
  for (const [g, list] of map) {
    const ids = [...new Set(list.map(x => x.id))];
    if (ids.length < 2) continue;
    if (targetIds && !ids.some(i => targetIds.has(i))) continue;
    hits.push({ gram: g, ids, list, n: ids.length });
  }
  return hits.sort((a, b) => b.n - a.n || b.gram.length - a.gram.length);
}
const VOICE_SCAN = VOICE_FIELDS.concat(['__lead']);

/* ── RUNG 2 · OPENING FORMULA — do the cards start the same way? ───────────
   The database tell. Corpus-relative: a formula is only reported when it is
   shared, and the count is printed so a human can judge whether it is a house
   style or a rut. */
function rungFormula(corpus, targetIds) {
  const buckets = new Map();
  for (const { rec } of corpus) {
    const id = rec.id || rec.name;
    for (const [label, text] of [['howThisFeels', rec.howThisFeels], ['method-lead', methodLead(rec)]]) {
      const w = norm(text).split(' ').filter(Boolean).slice(0, 4).join(' ');
      if (w.split(' ').length < 4) continue;
      const k = label + ' :: ' + w;
      if (!buckets.has(k)) buckets.set(k, []);
      buckets.get(k).push(id);
    }
  }
  const out = [];
  for (const [k, ids] of buckets) {
    const u = [...new Set(ids)];
    if (u.length < 2) continue;
    if (targetIds && !u.some(i => targetIds.has(i))) continue;
    out.push({ key: k, ids: u, n: u.length });
  }
  return out.sort((a, b) => b.n - a.n);
}

/* ── RUNG 3 · MASCOT — exclamation marks, emoji doing word-work, squealing ─
   `/tinza` §2: "never uses three exclamation marks." This one IS literal, so
   it is checked literally. The squeal list is short and is drawn verbatim from
   the standard's own FAIL example, not invented. */
const SQUEAL = ['yay', 'yummy', 'yum', 'delish', 'scrumptious', 'nom', 'omg', 'super duper', 'begging for more'];
function rungMascot(corpus, targetIds) {
  const out = [];
  for (const { file, rec } of corpus) {
    const id = rec.id || rec.name;
    if (targetIds && !targetIds.has(id)) continue;
    const prose = VOICE_FIELDS.map(f => String(rec[f] || '')).join(' ') + ' ' + String(rec.method || '');
    const bangs = (prose.match(/!/g) || []).length;
    const runs = (prose.match(/([\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]\s*){3,}/gu) || []).length;
    const squeals = SQUEAL.filter(s => norm(prose).includes(s));
    if (bangs || runs || squeals.length) out.push({ id, file, bangs, runs, squeals });
  }
  return out.sort((a, b) => b.bangs - a.bangs);
}

/* ── RUNG 4 · LECTURE — outlier, never a fixed limit ───────────────────────
   `/tinza` §7: "Short. Never a lecture." No hand-written word cap: the bar is
   this corpus's own mean + 2 standard deviations. The shelf sets its own bar. */
function rungLecture(corpus, targetIds) {
  const lens = corpus.map(({ rec }) => norm(rec.trivia).split(' ').filter(Boolean).length).filter(n => n > 0);
  if (lens.length < 8) return { skip: true };
  const m = mean(lens), s = sd(lens), bar = m + 2 * s;
  const out = [];
  for (const { file, rec } of corpus) {
    const id = rec.id || rec.name;
    if (targetIds && !targetIds.has(id)) continue;
    const n = norm(rec.trivia).split(' ').filter(Boolean).length;
    if (n > bar) out.push({ id, file, words: n });
  }
  return { mean: m, sd: s, bar, hits: out.sort((a, b) => b.words - a.words) };
}

/* ── RUNG 5 · LOCALE — "SHE IS FROM HERE" ─────────────────────────────────
   `/tinza`, under all nine: "🇿🇦 AND UNDERNEATH ALL NINE — SHE IS FROM HERE."
   A card that says "flavor" and "eggplant" is not a woman in Pretoria; it is a
   US recipe site wearing her name. Pure arithmetic — a word is present or it
   is not, no judgement anywhere.

   ⚠️ NOT a contradiction of the GLOBAL-WORDING ruling (22 Jul). That ruling bans
   SA SHOP AND PLACE NAMES in prose — "the stand-in", never "the SA stand-in".
   It never touched SPELLING or produce names, and the price maps already alias
   eggplant→brinjal and zucchini→baby marrow, so the buy-names were settled long
   ago. This rung only makes the PROSE agree with what pricing already believes. */
const LOCALE = [
  ['flavor', 'flavour'], ['flavors', 'flavours'], ['flavorful', 'flavourful'],
  ['color', 'colour'], ['colors', 'colours'], ['colored', 'coloured'],
  ['favorite', 'favourite'], ['savory', 'savoury'], ['caramelize', 'caramelise'],
  ['caramelized', 'caramelised'], ['realize', 'realise'], ['organize', 'organise'],
  ['eggplant', 'brinjal'], ['zucchini', 'baby marrow'], ['scallion', 'spring onion'],
  ['scallions', 'spring onions'], ['cilantro', 'coriander'], ['skillet', 'pan'],
  ['liter', 'litre'], ['liters', 'litres'], ['fiber', 'fibre']
  /* ⛔ molasses→treacle REMOVED 31 Jul. It is not an Americanism: molasses is
     ordinary SA English and is what you buy. Worse, greece-koulouri says "grape
     molasses" — petimezi, a specific Greek product — and calling that treacle is
     a POTATO BOBOTIE (Law 43). A locale list must only carry SPELLING and
     PRODUCE-NAME differences, never rename a distinct product. */
];
const LOCALE_SCAN = ['howThisFeels', 'trivia', 'chefNotes', 'nameAlt', 'storage', 'pairsWith', 'method', 'ingredients'];
function rungLocale(corpus, targetIds) {
  const out = [];
  for (const { file, rec } of corpus) {
    const id = rec.id || rec.name;
    if (targetIds && !targetIds.has(id)) continue;
    const t = ' ' + norm(LOCALE_SCAN.map(k => String(rec[k] || '')).join(' ')) + ' ';
    const found = LOCALE.filter(([us]) => t.includes(' ' + us + ' '));
    if (found.length) out.push({ id, file, found });
  }
  return out.sort((a, b) => b.found.length - a.found.length);
}

/* ── RUNG 6 · GLOSS — "WRITTEN SOMEWHERE, WHAT IT IS" ─────────────────────
   ⚖️ RULED BY TINA, 31 Jul 2026, in her own words:
     "as long as it is written somewhere, what it is, PREFERABLY ON GLOSS,
      but otherwise when they open the recipe."

   THE TESTABLE FORM: **THE CARD IS THE UNIT.** A reader must be able to resolve
   every South African term WITHOUT LEAVING THE CARD SHE IS ON. Preferred route
   is an inline gloss at the mention; the fallback is that opening the recipe
   explains it, which is automatic when the term IS the dish.

   ⚖️ THIS IS A GLOSS, NEVER A REPLACEMENT. `/tinza`: "There is no English word
   for a koeksister. THERE IS A KOEKSISTER." The dish name never gets translated
   away — it gets explained. Those are different operations and this rung only
   ever asks whether the explanation exists.

   ⚖️ AND IT PREDICTED ITSELF. The LOCALE ruling (§11, 15 Jul): "mark every
   locale-specific line AS IT IS WRITTEN — the marking is free today; the
   rewrite is not." The marking stopped happening and nothing was watching. */
const SA_TERMS = [
  'pap', 'putupap', 'krummelpap', 'stywepap', 'slap pap', 'mieliepap', 'samp', 'umngqusho',
  'boerewors', 'wors', 'droëwors', 'droewors', 'biltong', 'sosatie', 'sosaties',
  'vetkoek', 'pannekoek', 'koeksister', 'koeksisters', 'koesister', 'koesisters',
  'melktert', 'malva', 'bobotie', 'potjiekos', 'potjie', 'bredie', 'chakalaka',
  'snoek', 'morogo', 'imifino', 'amasi', 'maas', 'braaibroodjie', 'braaibroodjies',
  'skilpadjies', 'souskluitjies', 'hertzoggie', 'hertzoggies', 'soutribbetjie',
  'waterblommetjie', 'waterblommetjies', 'frikkadel', 'frikkadelle', 'roosterkoek',
  'melkkos', 'boerekos', 'smoor', 'smoortjie', 'blatjang', 'mageu',
  /* ⛔ `sambal` DELIBERATELY EXCLUDED. It reads as an SA (Cape Malay) word and it is
     also Indonesian — and in THIS corpus it is Indonesian on 34 of 34 cards. Flagging
     it as "an SA term needing a gloss" would put a WRONG REASON beside a real finding,
     which trains a reader to distrust the whole rung. If untranslated non-SA loanwords
     need watching, that is a DIFFERENT list and a different ruling. */
  'rooibos', 'bunny chow', 'gatsby', 'walkie talkies', 'mogodu', 'skop'
];

/* A gloss = the term, then a bracketed explanation close behind it …
   … OR the reverse: an English phrase with the term in brackets after it,
   which is `wild greens (imifino)` and is just as resolvable to a reader.
   🩸 The rung shipped without the reverse case and immediately flagged two
   CORRECTLY glossed records. The planner that wrote the sweep already knew
   about it; the watcher did not. ⚖️ A watcher that is dumber than the tool
   doing the work will train its reader to ignore it. */
function isGlossed(term, text) {
  const t = String(text || '');
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const forward = new RegExp('\\b' + esc + '\\b[^.!?]{0,40}?[(\u2014\u2013-]', 'i');
  const reverse = new RegExp('\\(\\s*' + esc + '[^)]{0,30}\\)', 'i');
  return forward.test(t) || reverse.test(t);
}

function rungGloss(corpus, targetIds) {
  const out = [];
  for (const { file, rec } of corpus) {
    const id = rec.id || rec.name;
    if (targetIds && !targetIds.has(id)) continue;
    const prose = ['method', 'trivia', 'chefNotes', 'pairsWith', 'howThisFeels', 'storage']
      .map(k => String(rec[k] || '')).join('  ');
    const selfText = [rec.name, rec.nameAlt].concat(rec.aliases || []).join(' ').toLowerCase();
    const linkText = [].concat(rec.crossLinks || [], rec.goesWith || [])
      .map(x => (typeof x === 'string' ? x : (x && x.name) || '')).join(' ').toLowerCase();

    for (const term of SA_TERMS) {
      const re = new RegExp('\\b' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
      if (!re.test(prose)) continue;
      if (re.test(selfText)) continue;                    // ✅ the card IS the dish — opening it explains it
      if (isGlossed(term, prose)) continue;               // ✅ glossed inline, the preferred route
      const linked = re.test(linkText);                   // 🟡 a tap away, not on this card
      out.push({ id, file, term, linked });
    }
  }
  return out;
}

/* ── REPORT ───────────────────────────────────────────────────────────────*/
const line = (c = '─') => console.log(c.repeat(78));

function report(corpus, targetIds, label) {
  console.log('');
  line('=');
  console.log(`  🔊 tinza-echo — THE DATABASE WATCHER   ·   /tinza`);
  console.log(`  corpus: ${corpus.length} records across every wk_*.js${label ? `   ·   scoring: ${label}` : ''}`);
  line('=');

  /* 1 · ECHO — VOICE */
  const echo = rungEcho(corpus, targetIds, VOICE_SCAN);
  const hard = echo.filter(h => h.n >= 3);
  const soft = echo.filter(h => h.n === 2);
  console.log(`\n🔴 VOICE ECHO — identical ${N}-word run in 3+ records  (${hard.length})`);
  console.log(`   fields: ${VOICE_FIELDS.join(' · ')} · method-lead   ⚖️ THIS is the database smell`);
  if (!hard.length) console.log('   — clean');
  for (const h of hard.slice(0, 12)) {
    console.log(`   • "${h.gram}"`);
    console.log(`     ${h.n} records · ${h.ids.slice(0, 6).join(' · ')}${h.ids.length > 6 ? ' …' : ''}`);
  }
  console.log(`\n🟠 VOICE ECHO — identical ${N}-word run in exactly 2 records  (${soft.length})`);
  if (!soft.length) console.log('   — clean');
  for (const h of soft.slice(0, 15)) {
    console.log(`   • "${h.gram}"   ← ${h.ids.join('  ·  ')}`);
  }

  /* 1b · ECHO — FUNCTIONAL, reported, never a fault */
  const fecho = rungEcho(corpus, targetIds, FUNCTIONAL_FIELDS).filter(h => h.n >= 3);
  console.log(`\n🟡 FUNCTIONAL ECHO — ${FUNCTIONAL_FIELDS.join(' · ')}  (${fecho.length})`);
  console.log('   ⚖️ NOT A FAULT. Storage and pairings are SUPPOSED to read alike.');
  console.log('   Shown only so a genuine copy-paste in a functional field is still visible.');
  for (const h of fecho.slice(0, 5)) console.log(`   • "${h.gram}"  ×${h.n}`);

  /* 2 · FORMULA */
  const form = rungFormula(corpus, targetIds);
  console.log(`\n🟠 OPENING FORMULA — same first 4 words  (${form.length})`);
  if (!form.length) console.log('   — clean');
  for (const f of form.slice(0, 12)) {
    console.log(`   • ${f.key}   ×${f.n}`);
    console.log(`     ${f.ids.slice(0, 5).join(' · ')}${f.ids.length > 5 ? ' …' : ''}`);
  }

  /* 3 · MASCOT */
  const mas = rungMascot(corpus, targetIds);
  console.log(`\n🔴 MASCOT — exclamation marks · emoji runs · squeal words  (${mas.length})`);
  if (!mas.length) console.log('   — clean');
  for (const m of mas.slice(0, 15)) {
    const bits = [];
    if (m.bangs) bits.push(`${m.bangs}× "!"`);
    if (m.runs) bits.push(`${m.runs}× emoji-run`);
    if (m.squeals.length) bits.push(`squeal: ${m.squeals.join(', ')}`);
    console.log(`   • ${m.id.padEnd(38)} ${bits.join(' · ')}`);
  }

  /* 4 · LECTURE */
  const lec = rungLecture(corpus, targetIds);
  if (lec.skip) {
    console.log('\n⏭️  LECTURE — corpus too small to set an outlier bar (needs 8+ trivia fields)');
  } else {
    console.log(`\n🟡 LECTURE — trivia longer than mean+2sd  (${lec.hits.length})`);
    console.log(`   bar = ${lec.bar.toFixed(0)} words   (mean ${lec.mean.toFixed(0)} · sd ${lec.sd.toFixed(0)})  ⚖️ set by the corpus, not by hand`);
    if (!lec.hits.length) console.log('   — clean');
    for (const h of lec.hits.slice(0, 10)) console.log(`   • ${h.id.padEnd(38)} ${h.words} words`);
  }

  /* 5 · LOCALE */
  const loc = rungLocale(corpus, targetIds);
  const totalWords = loc.reduce((n, x) => n + x.found.length, 0);
  console.log(`\n🔴 LOCALE — US spelling / US produce names  (${loc.length} records · ${totalWords} hits)`);
  console.log('   ⚖️ "SHE IS FROM HERE." A card saying "flavor" is a US site wearing her name.');
  if (!loc.length) console.log('   — clean');
  const tally = {};
  loc.forEach(r => r.found.forEach(([us, sa]) => { tally[us + ' → ' + sa] = (tally[us + ' → ' + sa] || 0) + 1; }));
  Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 14)
    .forEach(([k, n]) => console.log(`   • ${k.padEnd(30)} ${n} record(s)`));
  if (loc.length) console.log(`   first offenders: ${loc.slice(0, 5).map(r => r.id).join(' · ')}`);

  /* 6 · GLOSS */
  const gl = rungGloss(corpus, targetIds);
  const bare = gl.filter(x => !x.linked);
  const linked = gl.filter(x => x.linked);
  console.log(`\n🔴 GLOSS — SA term used in prose, NOT resolvable on this card  (${bare.length})`);
  console.log('   ⚖️ Tina 31 Jul: "as long as it is written somewhere, what it is, preferably');
  console.log('      on gloss, but otherwise when they open the recipe."  THE CARD IS THE UNIT.');
  if (!bare.length) console.log('   — clean');
  const byTerm = {};
  bare.forEach(x => { (byTerm[x.term] = byTerm[x.term] || []).push(x.id); });
  Object.entries(byTerm).sort((a, b) => b[1].length - a[1].length).slice(0, 14)
    .forEach(([t, ids]) => console.log(`   • ${t.padEnd(18)} ${String(ids.length).padStart(3)} card(s)   ${ids.slice(0, 3).join(' · ')}${ids.length > 3 ? ' …' : ''}`));
  console.log(`\n🟡 GLOSS — resolvable only by TAPPING a crossLink  (${linked.length})`);
  console.log('   Acceptable, but it is not "on the recipe she opened".');
  if (!linked.length) console.log('   — clean');
  else Object.entries(linked.reduce((m, x) => { (m[x.term] = m[x.term] || []).push(x.id); return m; }, {}))
    .slice(0, 6).forEach(([t, ids]) => console.log(`   • ${t.padEnd(18)} ${ids.length} card(s)`));

  /* WHAT IT CANNOT SEE */
  console.log('');
  line('=');
  console.log('  ⚖️  NOT MEASURED — 2 of /tinza\'s 5 FAILURES HAVE NO MECHANICAL FORM');
  line('=');
  console.log('  ❌ THE CONFIDENT LIE   A bobotie with potato in it. Sounds beautiful, a');
  console.log('                         grandmother would spit. NEEDS THE GRANDMOTHER.');
  console.log('  ❌ THE GOOGLE CARD     She could have had this in ten seconds, for free.');
  console.log('                         Needs someone who knows what is common knowledge.');
  console.log('');
  console.log('  ⚖️  This tool asks "HAS THIS ALREADY BEEN SAID?" — never "is this good?"');
  console.log('      Nothing above is a verdict on writing quality. Reading it aloud is');
  console.log('      still the test, and that is still Tina.');
  console.log('');
}

/* ── SELFTEST · BORN-RED ───────────────────────────────────────────────────
   Every rung is proven by planting the exact fault it exists to catch. A rung
   that has never been seen to go RED is decoration. */
function selftest() {
  let pass = 0, fail = 0;
  const t = (name, cond) => { if (cond) { pass++; console.log('  ✅ ' + name); } else { fail++; console.log('  🔴 ' + name); } };
  const mk = (id, o) => ({ file: 'test.js', rec: Object.assign({ id }, o) });

  console.log('\n  ── RUNG 1 · ECHO ──');
  const shared = 'the moment the sauce quietly gives up and a slick of oil rises';
  t('clean corpus → no echo',
    rungEcho([mk('a', { trivia: 'one two three four five six seven eight' }),
              mk('b', { trivia: 'nine ten eleven twelve thirteen fourteen fifteen' })], null, VOICE_SCAN).length === 0);
  t('BORN-RED: same 7-gram in 2 records → flagged',
    rungEcho([mk('a', { trivia: shared }), mk('b', { howThisFeels: shared })], null, VOICE_SCAN).length > 0);
  t('BORN-RED: same 7-gram in 3 records → n===3',
    rungEcho([mk('a', { trivia: shared }), mk('b', { trivia: shared }), mk('c', { trivia: shared })], null, VOICE_SCAN)
      .some(h => h.n === 3));
  t('echo reaches into the METHOD LEAD, not just prose',
    rungEcho([mk('a', { method: shared + '. then more words.' }), mk('b', { trivia: shared })], null, VOICE_SCAN).length > 0);

  console.log('\n  ── RUNG 2 · OPENING FORMULA ──');
  t('different openings → clean',
    rungFormula([mk('a', { howThisFeels: 'alpha bravo charlie delta echo' }),
                 mk('b', { howThisFeels: 'foxtrot golf hotel india juliet' })]).length === 0);
  t('BORN-RED: shared first 4 words → flagged',
    rungFormula([mk('a', { howThisFeels: 'lifting the lid after twenty minutes' }),
                 mk('b', { howThisFeels: 'lifting the lid after three hours' })]).length > 0);

  console.log('\n  ── RUNG 3 · MASCOT ──');
  t('sober prose → clean', rungMascot([mk('a', { trivia: 'A calm, dry sentence about salt.' })]).length === 0);
  t('BORN-RED: exclamation mark → flagged',
    rungMascot([mk('a', { trivia: 'This is amazing!' })]).some(x => x.bangs === 1));
  t('BORN-RED: squeal word → flagged',
    rungMascot([mk('a', { trivia: 'Yummy little things.' })]).some(x => x.squeals.length > 0));
  t('BORN-RED: 3+ emoji run → flagged',
    rungMascot([mk('a', { trivia: 'Lovely 🥰🥰🥰 stuff' })]).some(x => x.runs > 0));

  console.log('\n  ── RUNG 4 · LECTURE (outlier, not a fixed cap) ──');
  const short = Array.from({ length: 10 }, (_, i) => mk('s' + i, { trivia: 'ten short words here for the baseline corpus measure now' }));
  t('uniform corpus → no outlier', rungLecture(short).hits.length === 0);
  const withLong = short.concat([mk('long', { trivia: 'word '.repeat(400) })]);
  t('BORN-RED: one very long trivia → outlier flagged',
    rungLecture(withLong).hits.some(h => h.id === 'long'));
  t('bar is corpus-relative, NOT hardcoded',
    rungLecture(withLong).bar !== rungLecture(short.concat([mk('l2', { trivia: 'word '.repeat(60) })])).bar);

  console.log('\n  ── RUNG 5 · LOCALE ──');
  t('SA spelling → clean',
    rungLocale([mk('a', { trivia: 'A deep flavour and a good colour.' })]).length === 0);
  t('BORN-RED: "flavor" → flagged',
    rungLocale([mk('a', { trivia: 'A deep flavor here.' })]).length === 1);
  t('BORN-RED: "eggplant" → flagged, and it knows the SA word',
    rungLocale([mk('a', { ingredients: '200g eggplant' })]).some(x => x.found.some(f => f[1] === 'brinjal')));
  t('BORN-RED: two US words in one record → both found',
    rungLocale([mk('a', { trivia: 'color', method: 'zucchini' })])[0].found.length === 2);
  t('SUBSTRING SAFETY — "flavour" must NOT trip the "flavor" rule',
    rungLocale([mk('a', { trivia: 'flavour flavours flavourful' })]).length === 0);

  console.log('\n  ── RUNG 6 · GLOSS ──');
  t('BORN-RED: bare SA term in prose → flagged',
    rungGloss([mk('a', { name: 'Braai Platter', method: 'Serve it with pap on the side.' })])
      .some(x => x.term === 'pap' && !x.linked));
  t('inline gloss → PASS (the preferred route)',
    rungGloss([mk('a', { name: 'Braai Platter', method: 'Serve it with pap (soft maize porridge) alongside.' })])
      .filter(x => x.term === 'pap').length === 0);
  t('an em-dash explanation also counts as a gloss',
    rungGloss([mk('a', { name: 'Braai Platter', method: 'Serve with pap — the soft maize porridge.' })])
      .filter(x => x.term === 'pap').length === 0);
  t('THE CARD IS THE DISH → PASS (opening the recipe explains it)',
    rungGloss([mk('a', { name: 'Bobotie', nameAlt: 'Golden Spiced Mince Bake', method: 'A bobotie is baked until set.' })])
      .filter(x => x.term === 'bobotie').length === 0);
  t('resolvable via an alias also passes',
    rungGloss([mk('a', { name: 'Milk Tart', aliases: ['Melktert'], method: 'This melktert sets as it cools.' })])
      .filter(x => x.term === 'melktert').length === 0);
  t('BORN-RED: crossLink-only → flagged SEPARATELY as linked, not as bare',
    rungGloss([mk('a', { name: 'Braai Platter', method: 'Serve with chakalaka.', crossLinks: [{ name: 'Chakalaka' }] })])
      .some(x => x.term === 'chakalaka' && x.linked === true));
  t('REVERSE gloss "wild greens (imifino)" → PASS, the rung shipped blind to this',
    rungGloss([mk('a', { name: 'Sotho Greens', chefNotes: 'Pumpkin leaves or wild greens (imifino) work here.' })])
      .filter(x => x.term === 'imifino').length === 0);
  t('no SA term at all → clean',
    rungGloss([mk('a', { name: 'Pad Thai', method: 'Soak the noodles in warm water.' })]).length === 0);

  console.log('');
  line();
  console.log(`  ${fail === 0 ? '✅' : '🔴'} SELFTEST ${pass}/${pass + fail}`);
  line();
  console.log('');
}

/* ── MAIN ─────────────────────────────────────────────────────────────────*/
const [a, b] = process.argv.slice(2);
if (a === '--selftest') { selftest(); process.exit(0); }

const corpus = loadCorpus();
if (!corpus.length) { console.error('🔴 no wk_*.js records loaded — refusing to report.'); process.exit(1); }

let targetIds = null, label = '';
if (a && b) {
  const abs = path.resolve(process.cwd(), b);
  const batch = loadBatch(abs);
  if (!batch) { console.error('🔴 batch must module.exports an ARRAY of records.'); process.exit(1); }
  batch.forEach(r => corpus.push({ file: path.basename(abs), rec: r }));
  targetIds = new Set(batch.map(r => r.id || r.name));
  label = `${batch.length} record(s) from ${path.basename(abs)} vs the whole corpus`;
} else if (a) {
  const f = 'wk_' + a.toLowerCase() + '.js';
  const ids = corpus.filter(c => c.file === f).map(c => c.rec.id || c.rec.name);
  if (!ids.length) {
    /* ⚖️ Law 51 — a FLOOR, not a gate. An empty country file is the normal state
       of a lane that has just opened (Thailand shipped deliberately empty on
       30 Jul). Exiting non-zero here made `/all` print a red error for a correct
       situation, which trains a reader to ignore red. Say it plainly, exit 0. */
    console.log(`\n⏭️  tinza-echo — sections/${f} holds 0 records. Nothing to score yet.`);
    console.log(`   The corpus (${corpus.length} records) is still loaded and will be the`);
    console.log('   comparison set the moment the first record lands. Pass a batch file to');
    console.log(`   score records BEFORE they merge:  node tinza-echo.js ${a} batch01.js\n`);
    process.exit(0);
  }
  targetIds = new Set(ids);
  label = `${ids.length} record(s) in ${f} vs the whole corpus`;
}

report(corpus, targetIds, label);
