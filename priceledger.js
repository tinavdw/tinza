// priceledger.js — THE ANTI-DUPLICATION TOOL.
//
//   node priceledger.js --ask <term>      # HAS TINA ALREADY GIVEN THIS PRICE? Run this FIRST, always.
//   node priceledger.js --check           # every Tina-attributed key must have a ledger entry
//   node priceledger.js --seed            # rebuild the ledger from prices.js (grandfathers existing keys)
//   node priceledger.js --selftest        # born-RED proofs
//
// WHY THIS EXISTS (30 Jul 2026, ruled by Tina: "as long as it can help that I don't have to
// waste hours duplicating things"):
//
// TWO FAILURES ON ONE DAY, and both cost her time rather than correctness alone.
//   1. She was asked for the SA price of instant hon dashi granules. She had given it on
//      29 Jul, `"dashi": 13` was already live in prices.js, and the identical stock-precedent
//      reasoning was then re-derived from scratch as though new — very nearly shipping a
//      DUPLICATE "dashi": 13 sixteen lines below the live one, where the last wins silently.
//      Her words: "I gave this price earlier as well, and you said exactly the same thing."
//   2. FOUR entries appeared in prices.js attributed to her that she never gave —
//      `sambal terasi` 590, `peanut sauce` 260, `rendang paste` 520 and a false "Tina
//      re-sourced tempeh" comment. Reverted with git checkout.
//
// ⚖️ THE LADDER, one rung past §29.5: missing < duplicate < wrong < WRONG-AND-SIGNED.
//    A fabricated figure wearing Tina's name renders as a number, LOOKS sourced, and its own
//    comment tells the next reader not to re-check it. It is the worst class of error here.
//
// ⚖️ DESIGN LAW, same as pricecheck.js: THE LEDGER IS DERIVED FROM prices.js, NEVER TYPED.
//    A hand-maintained second list of prices is a second source of truth, which is exactly the
//    MF152-grepped-against-itself failure. `--seed` reads the real file and extracts what is
//    actually there. The only thing added by hand is a DATED entry when Tina gives a new price,
//    and that is the one fact prices.js cannot prove about itself.
//
// HONEST LIMIT, stated the way merge.js and pricecheck.js state theirs:
//    This proves PROVENANCE, never CORRECTNESS. It cannot tell you R2000/kg is the right keluak
//    or that a normalisation is sound. It can only tell you whether a claim that Tina sourced
//    something has a dated record behind it, and whether she has answered a question already.

const fs = require('fs');
const path = require('path');

const REPO   = process.env.TINZA_REPO || __dirname;
const PRICES = path.join(REPO, 'sections', 'prices.js');
const LEDGER = path.join(REPO, 'reference', 'PRICE_LEDGER.json');

// ── READ prices.js AS TEXT, KEY BY KEY ────────────────────────────────────────
// Deliberately textual rather than loading the module: the ATTRIBUTION lives in the
// comment, and a comment does not survive being parsed into an object. This is the one
// place PARSE-NEVER-REGEX does not apply, because the comment IS the data being checked.
function scanPrices() {
  if (!fs.existsSync(PRICES)) {
    console.error('🔴 not found: ' + PRICES);
    console.error('   Run from the repo root. Refusing to report on a file it could not read.');
    process.exit(1);
  }
  const lines = fs.readFileSync(PRICES, 'utf8').split('\n');
  const out = [];
  lines.forEach((line, i) => {
    // ⚠️ SPLIT THE LINE FIRST. Found 30 Jul on the very first real run: scanning the whole line
    // picked up `"dashi": 13` from inside a COMMENT that was documenting the near-duplicate, and
    // reported a second phantom dashi key. A key named in prose is not a key. Code side only.
    const cIdx = line.indexOf('//');
    const code    = cIdx > -1 ? line.slice(0, cIdx) : line;
    const comment = cIdx > -1 ? line.slice(cIdx + 2).trim() : '';
    // every "key": number pair on the line, so multi-key lines are all captured
    const pairs = [...code.matchAll(/"([^"]+)"\s*:\s*([0-9]+(?:\.[0-9]+)?)/g)];
    if (!pairs.length) return;
    pairs.forEach(m => out.push({ key: m[1], value: Number(m[2]), line: i + 1, comment }));
  });
  return out;
}

const claimsTina = c => /\btina\b/i.test(c || '');
// A date in the comment, in any of the shapes the file actually uses.
function dateIn(c) {
  const m = (c || '').match(/\b(\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4})\b/i)
        || (c || '').match(/when:(\d{4}-\d{2}(?:-\d{2})?)/i)
        || (c || '').match(/\b((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4})\b/i);
  return m ? m[1] : null;
}

function loadLedger() {
  if (!fs.existsSync(LEDGER)) return null;
  return JSON.parse(fs.readFileSync(LEDGER, 'utf8'));
}

// ── --seed ────────────────────────────────────────────────────────────────────
// One-time bootstrap plus a safe re-run. Everything already in prices.js on the day the
// ledger was created is GRANDFATHERED: those attributions predate the ledger and cannot be
// retro-proved, so they are recorded as-found rather than deleted or pretended-verified.
// ⛔ Seeding NEVER removes a hand-added entry — it merges.
function seed() {
  const found = scanPrices().filter(p => claimsTina(p.comment));
  const prev  = loadLedger();
  const byKey = {};
  if (prev) (prev.entries || []).forEach(e => { byKey[e.key] = e; });

  let added = 0, kept = 0;
  found.forEach(p => {
    if (byKey[p.key]) { kept++; return; }
    byKey[p.key] = {
      key: p.key,
      value: p.value,
      date: dateIn(p.comment),          // null when the comment carries no date
      grandfathered: true,              // present in prices.js before the ledger existed
      evidence: p.comment.slice(0, 200),
      pricesLine: p.line
    };
    added++;
  });

  const entries = Object.values(byKey).sort((a, b) => a.key.localeCompare(b.key));
  const out = {
    note: 'Ledger of every price Tina has sourced. DERIVED from sections/prices.js by ' +
          'priceledger.js --seed, never typed by hand. A new price she gives is added with a ' +
          'DATE in the same edit that keys it. RUN --ask BEFORE ASKING HER FOR ANY PRICE.',
    created: '2026-07-30',
    entries: entries
  };
  fs.mkdirSync(path.dirname(LEDGER), { recursive: true });
  fs.writeFileSync(LEDGER, JSON.stringify(out, null, 2) + '\n');
  console.log('✅ ledger written: ' + path.relative(process.cwd(), LEDGER));
  console.log('   ' + entries.length + ' entries (' + added + ' new, ' + kept + ' already present)');
  const undated = entries.filter(e => !e.date).length;
  console.log('   ' + undated + ' carry no date in their prices.js comment — recorded as undated, not invented.');
}

// ── --ask : THE ONE THAT SAVES HER TIME ───────────────────────────────────────
// Answers "has Tina already given me this?" across the ledger AND the live file AND every
// near-spelling, because `bean sprouts` vs `beansprouts` cost her a repeat once already.
// ⚖️ MATCHING RULE, tightened 30 Jul after the tool's FIRST false positive: asking for
//    `peanut sauce` reported a hit that did not exist, because a naive two-way substring test
//    lets a SHORT key match inside a longer phrase (`peanut` inside `peanut sauce`). A false
//    positive here is the exact harm the tool exists to prevent — it would tell Tina a price is
//    already keyed when it is not. So:
//      · a SINGLE-WORD key must match EXACTLY (with plural tolerance)
//      · only a MULTI-WORD phrase may match by containment
//      · space-stripped equality is kept, because `bean sprouts` vs `beansprouts` cost her a repeat
const norm  = s => String(s).toLowerCase().trim().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ');
const strip = s => norm(s).replace(/\s/g, '');
const depl  = s => norm(s).replace(/s$/, '');
function termMatchesKey(term, key) {
  const t = norm(term), k = norm(key);
  if (!t || !k) return false;
  if (t === k || depl(t) === depl(k) || strip(t) === strip(k)) return true;   // exact / plural / joined
  const multi = s => s.includes(' ');
  if (multi(k) && t.includes(k)) return true;   // "satay peanut sauce" finds key "peanut sauce"
  if (multi(t) && k.includes(t)) return true;   // "peanut sauce" finds key "peanut sauce jar"
  return false;                                  // a single word never matches by containment
}

// ── 🩸 THE FALSE NEGATIVE, FOUND 2 AUG 2026 ───────────────────────────────────
// The 30 Jul tightening above is CORRECT and stays. But it created the opposite fault, and the
// opposite fault is the expensive one:
//     node priceledger.js --ask lamb   →   "✅ GENUINELY ABSENT"
// …while prices.js holds FOURTEEN lamb keys — lamb loin chops · lamb rib chops · lamb braai
// chops · lamb shoulder chops · lamb riblets · leg of lamb · lamb neck · lamb mince · lamb
// shank · lamb potjiekos · lamb knuckles · lamb rump · lamb bones · lamb liver — every one of
// them sourced, most by Tina, several given more than once.
// ⚖️ A FALSE POSITIVE WASTES ONE QUESTION. A FALSE NEGATIVE SENDS HER BACK TO THE SHOPS FOR
// PRICES SHE HAS ALREADY GIVEN. She said so repeatedly, and she was right every time.
// ✅ THE FIX IS NOT TO LOOSEN THE VERDICT. Containment still does not earn a 🛑 ALREADY-KEYED
// ruling — but it absolutely earns a LOOK BEFORE YOU ASK. The tool may never again print
// ABSENT while the asked word appears inside a key.
function relatedKeys(term, all) {
  const t = depl(norm(term));
  if (!t) return [];
  return all.filter(p => norm(p.key).split(' ').map(depl).includes(t));
}

function ask(term) {
  const t = String(term || '').trim();
  if (!t) { console.error('usage: node priceledger.js --ask <term>'); process.exit(1); }

  const all = scanPrices();
  const led = loadLedger();
  const ledEntries = led ? (led.entries || []) : [];

  const inPrices = all.filter(p => termMatchesKey(t, p.key));
  const inLedger = ledEntries.filter(e => termMatchesKey(t, e.key));

  console.log('\n════ ASK · "' + term + '" ════\n');

  if (inPrices.length) {
    console.log('🛑 ALREADY IN prices.js — DO NOT ASK HER FOR THIS:');
    inPrices.forEach(p => {
      console.log('   · "' + p.key + '": ' + p.value + '   (line ' + p.line + ')' +
                  (claimsTina(p.comment) ? '  ✍️ TINA-SOURCED' : ''));
      if (p.comment) console.log('       ' + p.comment.slice(0, 160));
    });
    console.log('');
  }
  if (inLedger.length) {
    console.log('📒 IN THE LEDGER:');
    inLedger.forEach(e => console.log('   · ' + e.key + ' = ' + e.value +
      '  · date ' + (e.date || 'UNDATED') + (e.grandfathered ? ' · grandfathered' : '')));
    console.log('');
  }
  const related = relatedKeys(t, all).filter(p => !inPrices.includes(p));
  if (related.length) {
    console.log('🔎 NOT AN EXACT KEY — BUT "' + term + '" APPEARS IN ' + related.length +
                ' KEY(S). READ THESE BEFORE ASKING HER:');
    related.forEach(p => {
      console.log('   · "' + p.key + '": ' + p.value + '   (line ' + p.line + ')' +
                  (claimsTina(p.comment) ? '  ✍️ TINA-SOURCED' : ''));
      if (p.comment) console.log('       ' + p.comment.slice(0, 150));
    });
    console.log('   ⚖️ The product she buys is almost certainly one of the above under its');
    console.log('      SHOP name. Ask only if none of them is the thing. See');
    console.log('      reference/TINZA_MEATCUT_ADDENDUM_buy_names.md — the name is what you BUY.');
    console.log('');
  }

  if (!inPrices.length && !inLedger.length && !related.length) {
    console.log('✅ GENUINELY ABSENT from prices.js and from the ledger, including near-spellings.');
    console.log('   Safe to ask her — and when she answers, key it AND add a dated ledger entry');
    console.log('   in the SAME message. Never defer a price she has given.');
  } else {
    console.log('⚖️ If a number is already here, the question is whether it is WRONG, not whether');
    console.log('   it is missing. §29.5 — fix a wrong number when found; do not re-source a right one.');
  }
  console.log('');
}

// ── --check : THE FABRICATION CATCH ───────────────────────────────────────────
// Pure so the selftest can feed it fabricated input without touching a real file.
function checkPure(pricesEntries, ledger, createdISO) {
  const fails = [], warns = [];
  const known = new Set((ledger && ledger.entries || []).map(e => e.key));
  pricesEntries.filter(p => claimsTina(p.comment)).forEach(p => {
    if (!known.has(p.key)) {
      fails.push('"' + p.key + '": ' + p.value + ' (prices.js:' + p.line +
                 ') claims Tina attribution with NO LEDGER ENTRY — unprovable provenance');
    }
  });
  (ledger && ledger.entries || []).forEach(e => {
    if (!e.date && !e.grandfathered) warns.push(e.key + ' has a ledger entry with no date');
  });
  return { fails, warns };
}

function check() {
  const led = loadLedger();
  if (!led) {
    console.error('🔴 no ledger at ' + LEDGER + ' — run: node priceledger.js --seed');
    process.exit(1);
  }
  const all = scanPrices();
  const { fails, warns } = checkPure(all, led, led.created);
  const attributed = all.filter(p => claimsTina(p.comment)).length;

  console.log('\n════ PRICE LEDGER CHECK ════\n');
  console.log('   ' + attributed + ' keys in prices.js claim Tina attribution');
  console.log('   ' + (led.entries || []).length + ' ledger entries\n');
  warns.forEach(w => console.log('  ⚠️  ' + w));
  if (fails.length) {
    fails.forEach(f => console.log('  ❌ ' + f));
    console.log('\n🔴 ' + fails.length + ' UNPROVABLE ATTRIBUTION' + (fails.length === 1 ? '' : 'S') + '.');
    console.log('   Either Tina gave this and the ledger entry is missing — add it with a date —');
    console.log('   or she did not, and the entry must come out. A figure wearing her name with');
    console.log('   nothing behind it is the worst class of error in this project.');
    process.exit(1);
  }
  console.log('  ✅ every Tina-attributed key has a ledger entry.');
  console.log('\n  HONEST LIMIT: provenance only. This cannot tell you a number is right.\n');
}

// ── --selftest : BORN-RED PROOFS ──────────────────────────────────────────────
function selftest() {
  let pass = 0, fail = 0;
  const t = (name, cond) => { if (cond) { pass++; console.log('  ✅ ' + name); } else { fail++; console.log('  ❌ ' + name); } };
  console.log('\n════ priceledger --selftest ════\n');

  const ledger = { created: '2026-07-30', entries: [
    { key: 'kecap manis', value: 260, date: '30 Jul 2026' },
    { key: 'old thing',   value: 10,  date: null, grandfathered: true }
  ]};

  // ── 🩸 THE LAMB PROOFS, added 2 Aug 2026 ────────────────────────────────────
  // Born-RED against the exact failure that sent Tina back to the shops. On 2 Aug
  // `--ask lamb` printed "✅ GENUINELY ABSENT" while prices.js held fourteen lamb keys.
  // ⚖️ These proofs exist so that verdict can never be printed again while the word is keyed.
  const lambish = [
    { key: 'lamb loin chops',    value: 255, line: 216, comment: 'src:online' },
    { key: 'lamb neck',          value: 170, line: 223, comment: 'src:online' },
    { key: 'leg of lamb',        value: 205, line: 221, comment: 'src:online' },
    { key: 'lamb potjiekos',     value: 150, line: 226, comment: 'src:Shoprite/PnP conf:shelf' }
  ];
  t('LAMB: a single word finds every key that contains it (14 in the real file)',
    relatedKeys('lamb', lambish).length === 4);
  t('LAMB: it finds the word mid-key too — "leg of lamb", not just a lamb-* prefix',
    relatedKeys('lamb', lambish).some(p => p.key === 'leg of lamb'));
  t('LAMB: plural tolerance survives — "knuckles" finds the key, and back again',
    relatedKeys('knuckle', [{ key: 'lamb knuckles', value: 200, line: 227, comment: '' }]).length === 1);
  t('LAMB: the 30 Jul discipline is INTACT — a related key is NOT an exact match',
    termMatchesKey('lamb', 'lamb loin chops') === false);
  t('LAMB: and the peanut false positive it was built to stop STAYS stopped',
    termMatchesKey('peanut', 'peanut sauce') === false);
  t('LAMB: a word in no key at all is still honestly absent',
    relatedKeys('rambutan', lambish).length === 0);

  // 0 — CONTROL. A checker that fails everything proves nothing.
  t('CONTROL: an attributed key WITH a ledger entry passes',
    checkPure([{ key: 'kecap manis', value: 260, line: 1, comment: 'Tina-sourced 30 Jul 2026' }], ledger).fails.length === 0);

  // 1 — the actual fabrication, reproduced. This is `peanut sauce` 260 from 30 Jul.
  t('RED: an attributed key with NO ledger entry fails (the real fabrication)',
    checkPure([{ key: 'peanut sauce', value: 260, line: 9, comment: 'R64.99/250ml (Tina) → R260/L' }], ledger).fails.length === 1);

  // 2 — an UNattributed key is not this tool's business.
  t('an unattributed key is ignored (no false positive on ordinary keys)',
    checkPure([{ key: 'salt', value: 30, line: 2, comment: 'R15/500g' }], ledger).fails.length === 0);

  // 3 — a bare "(Tina)" with no date still needs an entry.
  t('RED: bare "(Tina)" with no date and no entry fails',
    checkPure([{ key: 'invented', value: 999, line: 3, comment: '(Tina)' }], ledger).fails.length === 1);

  // 4 — grandfathered undated entries must NOT warn, or the tool cries wolf on 61 of them.
  t('grandfathered undated entries do not warn',
    checkPure([], ledger).warns.length === 0);

  // 5 — a NON-grandfathered undated entry DOES warn.
  t('WARN: a new ledger entry with no date warns',
    checkPure([], { created: 'x', entries: [{ key: 'k', value: 1, date: null }] }).warns.length === 1);

  // 6 — date extraction, all three shapes the file really uses.
  t('date parsed from "22 Jul 2026"',  dateIn('honest mid (Tina 22 Jul 2026)') === '22 Jul 2026');
  t('date parsed from "when:2026-07-30"', dateIn('src:Tina when:2026-07-30 conf:shelf') === '2026-07-30');
  t('undated comment returns null',    dateIn('(Tina)') === null);

  // 7 — attribution detection must not fire on an unrelated word containing "tina"
  t('does not fire on "retina" / "curtain" style false matches',
    !claimsTina('retina display') && claimsTina('sourced by Tina'));

  // ── 8 — THE MATCHER. Every one of these is a real bug or a real requirement. ──
  // The false positive the tool produced on its own first run:
  t('RED-FIXED: "peanut sauce" does NOT match the single-word key "peanut"',
    !termMatchesKey('peanut sauce', 'peanut'));
  t('RED-FIXED: "peanut sauce" does NOT match "peanuts"',
    !termMatchesKey('peanut sauce', 'peanuts'));
  t('RED-FIXED: "peanut sauce" does NOT match "satay sauce"',
    !termMatchesKey('peanut sauce', 'satay sauce'));
  // the repeat that actually cost her time once:
  t('"bean sprouts" matches "beansprouts" (space-stripped)',
    termMatchesKey('bean sprouts', 'beansprouts'));
  t('"beansprouts" matches "bean sprouts" (the other direction)',
    termMatchesKey('beansprouts', 'bean sprouts'));
  // plural tolerance, which is how `mushroom` vs `mushrooms` gets found:
  t('"mushroom" matches "mushrooms"', termMatchesKey('mushroom', 'mushrooms'));
  // multi-word containment must still work, or a longer query misses a real key:
  t('"satay peanut sauce" finds the multi-word key "peanut sauce"',
    termMatchesKey('satay peanut sauce', 'peanut sauce'));
  // and a single word must never be found by containment inside a longer key:
  t('"oil" does NOT match "sunflower oil" by containment',
    !termMatchesKey('oil', 'sunflower oil'));
  // exact single-word still works:
  t('"keluak" matches "keluak"', termMatchesKey('keluak', 'keluak'));
  // hyphen/underscore normalisation:
  t('"kecap-manis" matches "kecap manis"', termMatchesKey('kecap-manis', 'kecap manis'));

  console.log('\n  ' + pass + '/' + (pass + fail) + ' passed' + (fail ? '  🔴 ' + fail + ' FAILED' : '  ✅') + '\n');
  if (fail) process.exit(1);
}

// ── CLI ───────────────────────────────────────────────────────────────────────
// ⚠️ GUARDED, same as merge.js. Unguarded, `require('./priceledger.js')` printed the usage
// banner and exited 1 — so the module could not be imported by a test or by another tool,
// which is precisely how merge-selftest.js is able to exist at all.
module.exports = { checkPure, scanPrices, dateIn, claimsTina, termMatchesKey };

if (require.main === module) {
  const [cmd, ...rest] = process.argv.slice(2);
  if (cmd === '--seed') seed();
  else if (cmd === '--check') check();
  else if (cmd === '--selftest') selftest();
  else if (cmd === '--ask') ask(rest.join(' '));
  else {
    console.log('usage:');
    console.log('  node priceledger.js --ask <term>   # RUN THIS BEFORE ASKING TINA FOR ANY PRICE');
    console.log('  node priceledger.js --check        # every Tina-attributed key needs a ledger entry');
    console.log('  node priceledger.js --seed         # rebuild the ledger from prices.js');
    console.log('  node priceledger.js --selftest     # born-RED proofs');
    process.exit(1);
  }
}
