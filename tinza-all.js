#!/usr/bin/env node
/* ============================================================================
 * tinza-all.js — THE ONE COMMAND. FIRES ALL SIX `/` TRIGGERS.
 * ----------------------------------------------------------------------------
 *   node tinza-all.js                     # governance only (/law /rule /bug /tinza)
 *   node tinza-all.js <country>           # + /wow and /wk over a whole country file
 *   node tinza-all.js <country> batch.js  # + /wow and /wk over a batch before merge
 *
 * WHY THIS EXISTS (Tina, 31 Jul 2026: "please put all in one command that I can
 * just drop, something like / 6"):
 *   There are SIX standards and remembering to fire six triggers is itself a
 *   memory task — which is the exact failure this project keeps paying for.
 *   Eleven Indonesian records were banked with `/wk` never run once, because the
 *   standard was living in memory instead of in a tool. `/wow` was remembered.
 *   `/wk` was not. Nobody forgets on purpose; they forget because the checklist
 *   is in a head instead of in a file.
 *
 * ⚖️ DESIGN LAW, identical to merge.js / pricecheck.js / costcheck.js / wowcheck.js
 *   and the entire reason to trust any of them:
 *   THIS TOOL DOES NOT REIMPLEMENT A SINGLE STANDARD. It shells out to the REAL
 *   watchers and reads the REAL standards files. A runner with its own private
 *   copy of the checklist is a seventh standard that drifts from the other six.
 *
 * ⚖️ AND IT NAMES WHAT IT CANNOT DO. Two of the six — `/tinza` (voice) and `/bug`
 *   (code) — have no mechanical watcher and are pure judgement. This tool prints
 *   them as JUDGEMENT REQUIRED rather than printing a tick beside them. A runner
 *   that shows six greens when it only measured four is worse than no runner:
 *   it manufactures confidence. Same reasoning as wowcheck's JUDGEMENT list.
 *
 * ⚖️ WHY `/all` AND NOT `/6`: a number in a name goes stale the moment a seventh
 *   standard lands, and a stale number that still looks authoritative is this
 *   project's most-paid-for bug (the China 23/50 evening, ASIA_PROGRESS at 77,
 *   memory at "Indonesia 6/50"). `/all` cannot go stale. The COUNT is read from
 *   the table below at runtime and printed — never hardcoded into the name.
 *
 * READ-ONLY. Never edits. Exits 0 always — a FLOOR, not a gate (Law 51).
 * ============================================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = __dirname;

/* THE SIX. Canonical source is CLAUDE.md §11 "THE STANDARDS".
   `tool` null = no mechanical watcher exists, and we say so out loud. */
const STANDARDS = [
  { trig: '/law',   file: 'TINZA_LAW.md',                    asks: 'How do we work?',            tool: 'tinza-lawcheck.js' },
  { trig: '/rule',  file: 'TINZA_RULINGS.md',                asks: 'What IS Tinza?',             tool: null },
  { trig: '/bug',   file: 'standards/BUG_STANDARD.md',       asks: 'How do we hunt?',            tool: null },
  { trig: '/wow',   file: 'standards/WOW_STANDARD.md',       asks: 'Is this recipe good enough?',tool: 'wowcheck.js' },
  { trig: '/tinza', file: 'standards/TINZA_STANDARD.md',     asks: 'Does this sound like Tinza?',tool: 'tinza-echo.js' },
  { trig: '/wk',    file: 'standards/TINZA_WK_STANDARD.md',  asks: 'World Kitchen content.',     tool: 'wowcheck.js' }
];

const [country, batch] = process.argv.slice(2);
const line = (c = '─') => console.log(c.repeat(74));

console.log('');
line('=');
console.log(`  🇹🇭  TINZA — ALL ${STANDARDS.length} STANDARDS`);
console.log(`  ${country ? `country: ${country}${batch ? `   batch: ${batch}` : ''}` : 'governance only — pass a country to add /wow and /wk'}`);
line('=');

/* ── 1 · THE FILES MUST EXIST ──────────────────────────────────────────────
   A trigger pointing at a moved or deleted file is a standard that silently
   stopped applying. Check presence BEFORE running anything. */
console.log('\n📚 THE STANDARDS — do the files still exist where the triggers say?\n');
let missing = 0;
for (const s of STANDARDS) {
  const abs = path.join(ROOT, s.file);
  const ok = fs.existsSync(abs);
  if (!ok) missing++;
  const kb = ok ? (fs.statSync(abs).size / 1024).toFixed(0) + 'kb' : '—';
  console.log(
    `  ${ok ? '✅' : '🔴'} ${s.trig.padEnd(7)} ${s.file.padEnd(36)} ${kb.padStart(6)}   ${s.asks}`
  );
}
if (missing) {
  console.log(`\n  🔴 ${missing} standard file(s) MISSING — a trigger pointing at nothing is a`);
  console.log('     standard that has silently stopped applying. Fix before authoring.');
}

/* ── 2 · RUN THE REAL WATCHERS ─────────────────────────────────────────────
   Shell out. Never reimplement. */
function run(tool, args, label) {
  const abs = path.join(ROOT, tool);
  if (!fs.existsSync(abs)) {
    console.log(`\n  🔴 ${label}: ${tool} not found at repo root — tools resolve off __dirname.`);
    return;
  }
  line();
  console.log(`▶️  ${label}   ·   node ${tool}${args.length ? ' ' + args.join(' ') : ''}`);
  line();
  const r = spawnSync(process.execPath, [abs, ...args], { cwd: ROOT, stdio: 'inherit' });
  if (r.status !== 0) console.log(`\n  ⚠️  ${tool} exited ${r.status}`);
}

console.log('');
run('tinza-lawcheck.js', [], '/law  — THE DOC DOCTOR');
if (!country) run('tinza-echo.js', [], '/tinza  — THE DATABASE WATCHER (whole corpus)');

if (country) {
  run('wowcheck.js', batch ? [country, batch] : [country], '/wow + /wk  — THE RECIPE + WORLD KITCHEN GATE');
  run('tinza-echo.js', batch ? [country, batch] : [country], '/tinza  — THE DATABASE WATCHER');
} else {
  line();
  console.log('⏭️  /wow + /wk  — SKIPPED, no country given.');
  console.log('    ⛔ A World Kitchen card is NOT DONE until BOTH have actually RUN.');
  console.log('    Running one and assuming the other is the exact Indonesia failure.');
  console.log('    → node tinza-all.js thailand [batch.js]');
  line();
}

/* ── 3 · SAY WHAT CANNOT BE MECHANISED ─────────────────────────────────────
   Out loud, every run, never silently omitted. */
const judgement = STANDARDS.filter(s => !s.tool);
console.log('');
line('=');
console.log(`  ⚖️  JUDGEMENT REQUIRED — ${judgement.length} of ${STANDARDS.length} HAVE NO WATCHER`);
line('=');
console.log('  These were NOT checked. Nothing above measured them. Read them yourself.\n');
for (const s of judgement) {
  console.log(`  📖 ${s.trig.padEnd(7)} ${s.file.padEnd(36)} ${s.asks}`);
}
console.log('');
console.log('  ⚖️  A runner that showed six greens while measuring four would manufacture');
console.log('      confidence, which is worse than no runner at all. It measured ' +
            `${STANDARDS.length - judgement.length}.`);
console.log('');
