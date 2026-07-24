#!/usr/bin/env node
/* ============================================================================
 * tinza-lawcheck.js — THE DOC DOCTOR
 * ----------------------------------------------------------------------------
 * tinza-doctor.js watches the CODE. This watches the GOVERNANCE — the laws,
 * rulings, and CLAUDE.md that steer every AI session. That layer had no doctor.
 * A wrong document is SILENT (Law 3). This makes it speak.
 *
 * READ-ONLY. Never edits. Exits 0 always — a FLOOR, not a gate (Law 51).
 * Run: node tinza-lawcheck.js
 * ============================================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const CANON = {                 // the four canonical governance files
  claude:  'CLAUDE.md',
  law:     'TINZA_LAW.md',
  rulings: 'TINZA_RULINGS.md',
  board:   'TINZA_NOW.mermaid',
};

const RED = [];   // HIGH  — silent hole, fix at first chance
const AMB = [];   // MED   — drift, will mislead an AI eventually
const LOW = [];   // LOW   — housekeeping / workflow hygiene
const EYE = [];   // needs the JUDGMENT layer — a human/AI read, not a script

const read = p => { try { return fs.readFileSync(path.join(ROOT, p), 'utf8'); } catch { return null; } };
const exists = p => fs.existsSync(path.join(ROOT, p));

/* -- walk every tracked file (skip .git, node_modules) ---------------------- */
function walk(dir, out = []) {
  for (const e of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const rel = path.join(dir, e.name);
    if (e.isDirectory()) walk(rel, out); else out.push(rel);
  }
  return out;
}
const ALL = walk('.').map(p => p.replace(/^\.\//, ''));

/* ==========================================================================
 * CHECK 1 · SPLIT-BRAIN — same filename, two live homes, different content.
 * This is what bit us with R50: a stale second copy nobody knew to update.
 * ======================================================================== */
(() => {
  const byName = {};
  for (const p of ALL) {
    if (p.startsWith('Archive/')) continue;            // Archive is allowed to hold old copies
    if (!/\.(md|mermaid|js)$/.test(p)) continue;
    const b = path.basename(p);
    (byName[b] ||= []).push(p);
  }
  for (const [name, paths] of Object.entries(byName)) {
    if (paths.length < 2) continue;
    const bodies = paths.map(p => read(p));
    const allSame = bodies.every(b => b === bodies[0]);
    const sizes = paths.map((p, i) => `${p} (${bodies[i] ? bodies[i].length : 0}b)`).join('  vs  ');
    if (allSame) LOW.push(`SPLIT-BRAIN (identical dupes) · ${name} · ${sizes} · keep ONE, delete the rest`);
    else         RED.push(`SPLIT-BRAIN (DIFFERENT content) · ${name} · ${sizes} · pick the canonical one, delete/redirect the other`);
  }
})();

/* ==========================================================================
 * CHECK 2 · LAWS — defined vs referenced.
 * Phantom ref = a law cited that was never written. Dup def = same number twice.
 * ======================================================================== */
let definedLaws = new Set();
(() => {
  const law = read(CANON.law);
  if (!law) { RED.push(`MISSING FILE · ${CANON.law} not found`); return; }
  const defs = [...law.matchAll(/^###\s+(\d+)\s*·/gm)].map(m => +m[1]);
  const seen = new Set();
  for (const n of defs) { if (seen.has(n)) RED.push(`DUPLICATE LAW · Law ${n} is defined more than once in ${CANON.law}`); seen.add(n); }
  definedLaws = seen;

  // referenced anywhere in the canonical set + sections + standards
  const scanFiles = [CANON.claude, CANON.rulings, CANON.board, ...ALL.filter(p => p.startsWith('sections/') || p.startsWith('standards/'))];
  const refd = new Map();   // lawNum -> Set(files)
  for (const f of scanFiles) {
    const t = read(f); if (!t) continue;
    for (const m of t.matchAll(/\bLaw\s+(\d+)\b/gi)) {
      const n = +m[1]; (refd.get(n) || refd.set(n, new Set()).get(n)).add(f);
    }
  }
  for (const [n, files] of refd) {
    if (!definedLaws.has(n)) RED.push(`PHANTOM LAW · Law ${n} is cited but NEVER defined in ${CANON.law} · cited in: ${[...files].join(', ')}`);
  }
})();

/* ==========================================================================
 * CHECK 3 · CLAIM DRIFT — hardcoded counts in CLAUDE.md vs reality.
 * CLAUDE.md was the original bug factory. It must be checked against itself.
 * ======================================================================== */
(() => {
  const c = read(CANON.claude); if (!c) return;
  // "N laws"
  const lawClaim = c.match(/(\d+)\s+laws/i);
  const highest = Math.max(0, ...definedLaws);
  if (lawClaim && +lawClaim[1] !== highest && +lawClaim[1] !== definedLaws.size)
    AMB.push(`CLAIM DRIFT · CLAUDE.md says "${lawClaim[1]} laws" · reality: highest defined is ${highest} (${definedLaws.size} total)`);
  // "N .js files"
  const jsClaim = c.match(/(\d+)\s+\.js/i);
  const jsReal = ALL.filter(p => p.startsWith('sections/') && p.endsWith('.js')).length;
  if (jsClaim && +jsClaim[1] !== jsReal)
    AMB.push(`CLAIM DRIFT · CLAUDE.md says "${jsClaim[1]} .js files" · reality: sections/ holds ${jsReal} · (note: "loaded" may differ from "present" — confirm)`);
})();

/* ==========================================================================
 * CHECK 4 · DECLARED SHARED RENDERERS — do they exist, and where?
 * RULE ZERO names the shared renderers as core.js. Verify each resolves.
 * Missing entirely = RED. Found outside core.js = a note (the doc implies core).
 * ======================================================================== */
(() => {
  const c = read(CANON.claude); if (!c) return;
  const zero = c.split(/RULE ZERO/i)[1] || '';
  const listLine = (zero.match(/Shared renderers:[^\n]*/i) || [''])[0];
  const names = [...listLine.matchAll(/`([a-zA-Z_]\w*)`/g)].map(m => m[1]);
  if (!names.length) return;
  const jsFiles = ALL.filter(p => p.startsWith('sections/') && p.endsWith('.js'));
  const defRe = fn => new RegExp(`(function\\s+${fn}\\b|\\b${fn}\\s*[:=]\\s*(?:async\\s+)?(?:function|\\())`);
  for (const fn of names) {
    const homes = jsFiles.filter(f => defRe(fn).test(read(f) || ''));
    if (!homes.length)                         RED.push(`DEAD RENDERER · CLAUDE.md RULE ZERO names \`${fn}\` as shared but it is DEFINED NOWHERE in sections/`);
    else if (!homes.includes('sections/core.js')) LOW.push(`RENDERER HOME · \`${fn}\` is declared a core.js renderer but is defined in ${homes.join(', ')} · either move it or reword the doc`);
  }
})();

/* ==========================================================================
 * CHECK 5 · DEAD PATH REFS — explicit repo paths named in canon docs that
 * do not exist on disk. (The classic "index.js:334" style rot, file-level.)
 * ======================================================================== */
(() => {
  for (const f of [CANON.claude, CANON.law, CANON.rulings]) {
    const t = read(f); if (!t) continue;
    const paths = new Set([...t.matchAll(/`((?:sections|standards|reference|Tools|Archive)\/[A-Za-z0-9_\-.]+\.(?:js|md|mermaid))`/g)].map(m => m[1]));
    for (const p of paths) if (!exists(p)) AMB.push(`DEAD PATH · ${f} points at \`${p}\` — not on disk`);
  }
})();

/* ==========================================================================
 * CHECK 6 · DONE-BRIEF HYGIENE (workflow-based, from their own law:
 * "when the commit is green, the brief is history — MOVE IT" to Archive).
 * MF-briefs sitting in reference/ are candidates for archiving.
 * ======================================================================== */
(() => {
  const strays = ALL.filter(p => /^reference\/MF\d+.*\.md$/i.test(p));
  if (strays.length) LOW.push(`BRIEFS TO REVIEW · ${strays.length} MF-briefs live in reference/ · per "a brief is for a day" (Law) confirm which are DONE and belong in Archive/ · ${strays.map(p=>path.basename(p)).join(', ')}`);
})();

/* ==========================================================================
 * CHECK 7b · UNLOADED SECTIONS — .js in sections/ that index.html never loads.
 * A dead file in the live folder is drift: it looks current and isn't.
 * ======================================================================== */
(() => {
  const html = read('index.html'); if (!html) return;
  const loaded = new Set([...html.matchAll(/sections\/([A-Za-z0-9_\-.]+\.js)/g)].map(m => m[1]));
  const onDisk = ALL.filter(p => p.startsWith('sections/') && p.endsWith('.js')).map(p => path.basename(p));
  const stray = onDisk.filter(f => !loaded.has(f));
  if (stray.length) LOW.push(`UNLOADED SECTIONS · ${stray.length} .js in sections/ are NOT loaded by index.html · dead, or pending wiring — confirm each · ${stray.join(', ')}`);
})();

/* ==========================================================================
 * CHECK 7 · STRUCK INVENTORY — hand every STRUCK statement to the eyes.
 * A script can't tell if a struck rule is still cited as live elsewhere.
 * ======================================================================== */
(() => {
  for (const f of [CANON.claude, CANON.law, CANON.rulings]) {
    const t = read(f); if (!t) continue;
    const lines = t.split('\n');
    lines.forEach((ln, i) => {
      if (/struck/i.test(ln)) {
        const clean = ln.replace(/[*#>`]/g, '').trim().slice(0, 90);
        EYE.push(`${f}:${i + 1} · ${clean}`);
      }
    });
  }
})();

/* ==========================================================================
 * REPORT
 * ======================================================================== */
const bar = '─'.repeat(60);
console.log(`\n${bar}\n  TINZA DOC DOCTOR — governance drift check\n  read-only · a floor, not a gate\n${bar}`);

const block = (title, arr, mark) => {
  console.log(`\n${mark} ${title}  (${arr.length})`);
  if (!arr.length) { console.log('   — clean'); return; }
  arr.forEach(x => console.log('   • ' + x));
};
block('RED — silent holes, fix first',        RED, '🔴');
block('DRIFT — will mislead an AI eventually', AMB, '🟠');
block('HYGIENE — housekeeping',                LOW, '🟡');

console.log(`\n👁️  FOR THE JUDGMENT READ  (${EYE.length})  — a script can't rule on these`);
if (EYE.length) EYE.forEach(x => console.log('   • ' + x)); else console.log('   — none');

const score = RED.length * 3 + AMB.length;
console.log(`\n${bar}`);
console.log(`  DRIFT SCORE: ${score}   (RED×3 + DRIFT)   · ${RED.length} red · ${AMB.length} drift · ${LOW.length} hygiene`);
console.log(`  Like the doctor: watch this number. Same or lower each session = holding. Up = new drift.`);
console.log(`${bar}\n`);
process.exit(0);   // FLOOR NOT GATE
