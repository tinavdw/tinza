// tinza-askcheck.js — THE WATCHER THAT GATES THE QUESTION, NOT THE FILE.
//
//   node tinza-askcheck.js <draft.md>     # scan a handback draft before it is sent
//   cat draft.md | node tinza-askcheck.js -
//   node tinza-askcheck.js --selftest     # born-RED proofs
//
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS EXISTS (10 Aug 2026, built after counting the record)
//
// Tina has said "I already gave you this" on AT LEAST TWELVE separate occasions
// between 4 Jul and 10 Aug 2026. Per-item the count is higher: `wakame` was
// asked FOUR times, `dashi` twice, `tapioca` twice, and the lamb cutting guide
// across two months while FOURTEEN sourced lamb keys sat in prices.js.
//
// ⚖️ THREE FIXES WERE ALREADY BUILT FOR THIS, AND THE FAILURE MOVED PAST EACH:
//   30 Jul  priceledger.js --ask built, header says RUN THIS BEFORE ASKING HER.
//           → FAILED: the tool existed and was not run. wakame asked a 4th time.
//    2 Aug  relatedKeys() added after --ask lamb printed GENUINELY ABSENT.
//           → FAILED: next session probed INVENTED key names instead of grepping.
//   10 Aug  both of the above passed clean, `shallots` R60 was live, the maizena
//           ruling was on the record, §38 already said fresh is unobtainable here
//           → AND THE HANDBACK STILL ASKED HER FOR ALL THREE.
//
// 🔴 THE COMMON THREAD: every watcher in this repo gates a FILE. Nothing has ever
//    gated the SENTENCE THAT REACHES HER. As long as a session can type "needs
//    your number" without proving it looked, this recurs no matter how clean the
//    repo gets. That is the hole this file closes.
//
// ⚖️ THE RULE: A QUESTION IS A CLAIM. "This needs your ruling" asserts that the
//    record does not already answer it. That assertion is checkable, so it gets
//    checked — by a tool, before it is sent, exactly like a costPP or a price.
//
// HONEST LIMIT, stated the way the other watchers state theirs:
//    This proves the record was SEARCHED, never that the answer is RIGHT. It
//    cannot know a genuinely new price is new. It can only refuse to let a
//    question go out while prices.js, PRICE_LEDGER.json or TINZA_RULINGS.md
//    already answers it. A false RED costs one grep. A false GREEN costs Tina
//    another trip to the shops — so this tool leans RED, deliberately.
// ─────────────────────────────────────────────────────────────────────────────

const fs   = require('fs');
const path = require('path');

const REPO    = process.env.TINZA_REPO || __dirname;
const PRICES  = path.join(REPO, 'sections', 'prices.js');
const ALIASES = path.join(REPO, 'sections', 'core.js');
const LEDGER  = path.join(REPO, 'reference', 'PRICE_LEDGER.json');
const RULINGS = path.join(REPO, 'TINZA_RULINGS.md');

// ── THE ASK MARKERS ──────────────────────────────────────────────────────────
// Every phrase a handback has actually used to push a question back to Tina.
// Sourced from real transcripts, not invented — see the header count.
const ASK_MARKERS = [
  /needs?\s+your\s+(number|ruling|call|price|decision|eyes|judgement)/i,
  /your\s+call,?\s+not\s+(mine|claude)/i,
  /(this|that|it)\s+is\s+yours\s+to\s+(rule|decide|price|confirm)/i,
  /i\s+(cannot|can't|will\s+not|won't)\s+(guess|decide|price)\s+this/i,
  /reserv(e|es|ed)\s+(this|it|that|them|these)?\s*(one)?\s*(to|for)\s+you/i,
  /reserved?\s+to\s+you/i,
  /leav(e|ing)\s+(this|it|that)\s+(to|for)\s+you/i,
  /(only|nothing\s+but)\s+your\s+(eyes|number|ruling)/i,
  /tina'?s?\s+(call|ruling|decision|judgement)/i,
  /(say|give)\s+(me\s+)?the\s+word\s+on/i,
  /(what|which)\s+(is|do\s+you\s+want)\s+the\s+price/i,
  /(do\s+you\s+have|can\s+you\s+(give|source|get))\s+(me\s+)?(a\s+)?price/i,
  /still\s+(open|outstanding|unpriced|unsourced)/i,
  /no\s+(retail\s+)?price\s+(found|exists|available)/i,
  /needs?\s+(a\s+)?(ruling|number)\s+before/i,
  /⛔\s*(open|still open)/i,
];

// ── WHAT COUNTS AS A SUBJECT ────────────────────────────────────────────────
// Backticked terms are the project's own convention for naming a key.
const subjectsIn = line => {
  const out = [];
  const re = /`([^`\n]{2,60})`/g;
  let m;
  while ((m = re.exec(line))) out.push(m[1].trim());
  return out;
};

// ── THE RECORD ──────────────────────────────────────────────────────────────
function readSafe(p) { try { return fs.readFileSync(p, 'utf8'); } catch { return ''; } }

const norm  = s => String(s).toLowerCase().trim().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ');
const depl  = s => norm(s).replace(/s$/, '');

function priceKeys(src) {
  const keys = [];
  const re = /^\s*"([^"]+)"\s*:\s*([0-9.]+)\s*,?(.*)$/gm;
  let m;
  while ((m = re.exec(src))) keys.push({ key: m[1], value: Number(m[2]), comment: m[3] || '' });
  return keys;
}

function aliasKeys(src) {
  const keys = [];
  const re = /^\s*"([^"]+)"\s*:\s*"([^"]+)"\s*,/gm;
  let m;
  while ((m = re.exec(src))) keys.push({ key: m[1], to: m[2] });
  return keys;
}

// A term is ANSWERED if it is keyed, aliased, ledgered, or named in a ruling.
function answeredBy(term, rec) {
  const t = norm(term), td = depl(t);
  const hits = [];

  for (const k of rec.prices) {
    const n = norm(k.key);
    if (n === t || depl(n) === td || n.includes(t) || t.includes(n))
      hits.push({ where: 'prices.js', what: `"${k.key}": ${k.value}` });
  }
  for (const a of rec.aliases) {
    const n = norm(a.key);
    if (n === t || depl(n) === td || n.includes(t))
      hits.push({ where: 'core.js PRICE_ALIAS', what: `"${a.key}" → "${a.to}"` });
  }
  for (const e of rec.ledger) {
    const n = norm(e.key || '');
    if (n === t || depl(n) === td || n.includes(t))
      hits.push({ where: 'PRICE_LEDGER.json', what: `${e.key} = ${e.value} (${e.date || 'undated'})` });
  }
  if (rec.rulings) {
    const lines = rec.rulings.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (norm(lines[i]).includes(t) && /§|ruled|ruling|CLOSED|STOP ASKING/i.test(lines[i]))
        hits.push({ where: 'TINZA_RULINGS.md', what: lines[i].trim().slice(0, 110) });
    }
  }
  // de-duplicate by source so one key does not print six times
  const seen = new Set();
  return hits.filter(h => { const k = h.where + '|' + h.what; if (seen.has(k)) return false; seen.add(k); return true; });
}

function loadRecord() {
  let ledger = [];
  try { ledger = (JSON.parse(readSafe(LEDGER)) || {}).entries || []; } catch { ledger = []; }
  return {
    prices:  priceKeys(readSafe(PRICES)),
    aliases: aliasKeys(readSafe(ALIASES)),
    ledger,
    rulings: readSafe(RULINGS),
  };
}

// ── THE SCAN ────────────────────────────────────────────────────────────────
function scan(text, rec) {
  const rows = [];
  text.split('\n').forEach((line, i) => {
    if (!ASK_MARKERS.some(re => re.test(line))) return;
    const subs = subjectsIn(line);
    if (!subs.length) {
      rows.push({ line: i + 1, term: null, band: 'AMBER', hits: [], text: line.trim().slice(0, 100) });
      return;
    }
    for (const term of subs) {
      const hits = answeredBy(term, rec);
      rows.push({ line: i + 1, term, band: hits.length ? 'RED' : 'GREEN', hits, text: line.trim().slice(0, 100) });
    }
  });
  return rows;
}

function report(text) {
  const rec  = loadRecord();
  const rows = scan(text, rec);
  const red   = rows.filter(r => r.band === 'RED');
  const amber = rows.filter(r => r.band === 'AMBER');
  const green = rows.filter(r => r.band === 'GREEN');

  console.log('\n⚖️  askcheck · the question is a claim, so the question gets checked\n');
  console.log(`    ${rec.prices.length} price keys · ${rec.aliases.length} aliases · ${rec.ledger.length} ledger entries read\n`);

  if (red.length) {
    console.log(`🔴  ALREADY ANSWERED — DO NOT SEND THESE. (${red.length})`);
    red.forEach(r => {
      console.log(`\n    line ${r.line}:  \`${r.term}\``);
      console.log(`      "${r.text}"`);
      r.hits.slice(0, 4).forEach(h => console.log(`      ↳ ${h.where}: ${h.what}`));
    });
    console.log('');
  }
  if (amber.length) {
    console.log(`🟠  ASK WITH NO NAMED SUBJECT — name the key in backticks so it can be checked. (${amber.length})`);
    amber.forEach(r => console.log(`    line ${r.line}: "${r.text}"`));
    console.log('');
  }
  if (green.length) {
    console.log(`✅  GENUINELY UNANSWERED — safe to ask. (${green.length})`);
    green.forEach(r => console.log(`    line ${r.line}: \`${r.term}\``));
    console.log('');
  }
  if (!rows.length) console.log('✅  no questions in this draft.\n');

  console.log('    HONEST LIMIT: this proves the record was SEARCHED, never that an');
  console.log('    answer is RIGHT. A false RED costs one grep. A false GREEN costs');
  console.log('    Tina another trip to the shops — so it leans RED on purpose.\n');
  return red.length;
}

// ── BORN-RED PROOFS ─────────────────────────────────────────────────────────
// Every proof below is a REAL sentence from a REAL handback that reached Tina.
function selftest() {
  let pass = 0, fail = 0;
  const t = (name, cond) => { if (cond) { pass++; console.log('  ✅ ' + name); }
                              else { fail++; console.log('  🔴 ' + name); } };

  const fake = {
    prices: [
      { key: 'shallots',       value: 60,  comment: '' },
      { key: 'cornflour',      value: 68,  comment: '' },
      { key: 'dashi',          value: 13,  comment: '' },
      { key: 'tapioca starch', value: 70,  comment: '' },
      { key: 'lamb shank',     value: 180, comment: '' },
      { key: 'bamboo shoots',  value: 220, comment: '' },
    ],
    aliases: [{ key: 'wheat starch', to: 'cornflour' }, { key: 'maizena', to: 'cornflour' }],
    ledger:  [{ key: 'dried wakame', value: 725, date: '30 Jul 2026' }],
    rulings: '### §38.3a · 🔒 CLOSED — bamboo shoots have no fresh SA route, drained weight is the only basis. STOP ASKING.',
  };

  console.log('\n  ── BORN-RED: real asks that reached Tina, each must now be caught ──\n');

  t('shallots — the 10 Aug ask, keyed at R60 the whole time',
    scan('It needs your number, not my guess — `fried shallots` or `shallots`.', fake)
      .some(r => r.band === 'RED'));

  t('wheat starch — her maizena ruling, aliased in core.js',
    scan('`wheat starch` is reserved to you: no retail price found.', fake)
      .some(r => r.band === 'RED'));

  t('dashi — asked twice, live in prices.js since 29 Jul',
    scan('The SA shelf price of `dashi` is still open — needs your price.', fake)
      .some(r => r.band === 'RED'));

  t('wakame — asked FOUR times, ledgered at R725',
    scan('`dried wakame` still outstanding, your call not mine.', fake)
      .some(r => r.band === 'RED'));

  t('tapioca — asked twice, banked 30 Jul',
    scan('No price exists for `tapioca starch` — needs a ruling before authoring.', fake)
      .some(r => r.band === 'RED'));

  t('lamb — fourteen keys live while --ask said GENUINELY ABSENT',
    scan('Do you have a price for `lamb shank`?', fake).some(r => r.band === 'RED'));

  t('bamboo shoots — caught by the RULING even if the key moved',
    scan('`bamboo shoots`: net or drained? That is your call, not mine.', fake)
      .some(r => r.band === 'RED'));

  console.log('\n  ── ANTI-PROOFS: the tool must not cry wolf ──\n');

  t('a genuinely new key is allowed through',
    scan('`durian paste` needs your number — nothing in the file.', fake)
      .every(r => r.band !== 'RED'));

  t('a statement that is not a question is ignored',
    scan('`shallots` R60 is applied and the alias is written.', fake).length === 0);

  t('an ask with no backticked subject lands AMBER, never silent GREEN',
    scan('This one is your call, not mine.', fake).some(r => r.band === 'AMBER'));

  t('a price mentioned in prose without an ask marker is not flagged',
    scan('Costed against `dashi` R13 per litre.', fake).length === 0);

  console.log(`\n  ═══ ${pass} passed · ${fail} failed ═══`);
  console.log('  ⚖️  Seven of these are asks that ACTUALLY REACHED TINA. If this file');
  console.log('      had existed on 30 July, four of them could not have been sent.\n');
  return fail;
}

// ── CLI ─────────────────────────────────────────────────────────────────────
const arg = process.argv[2];
if (arg === '--selftest') {
  process.exit(selftest() ? 1 : 0);
} else if (!arg) {
  console.log('\n  usage: node tinza-askcheck.js <draft.md>');
  console.log('         cat draft.md | node tinza-askcheck.js -');
  console.log('         node tinza-askcheck.js --selftest\n');
  console.log('  ⚖️  Run this on EVERY handback that contains a question for Tina.');
  console.log('      A question is a claim that the record does not answer it.\n');
} else if (arg === '-') {
  let buf = '';
  process.stdin.on('data', d => (buf += d));
  process.stdin.on('end', () => process.exit(report(buf) ? 1 : 0));
} else {
  process.exit(report(readSafe(path.resolve(arg))) ? 1 : 0);
}
