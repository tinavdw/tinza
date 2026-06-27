#!/usr/bin/env node
// TINZA health-check — run: node Tools/health-check.js
// Catches the runtime/data problems `node --check` cannot: undefined onclick
// handlers, duplicate recipe ids, malformed version blocks. Static, safe, fast.
const fs = require('fs'), path = require('path'), cp = require('child_process');
const dir = 'sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
let problems = 0, warnings = 0;
const P = (m) => { console.log('  \u274c ' + m); problems++; };
const W = (m) => { console.log('  \u26a0\ufe0f  ' + m); warnings++; };
const all = files.map(f => ({ f, src: fs.readFileSync(path.join(dir, f), 'utf8') }));

// 1) SYNTAX -------------------------------------------------------------
console.log('\n1) Syntax (node --check)');
let synOk = 0;
for (const { f } of all) {
  try { cp.execSync(`node --check ${path.join(dir, f)}`, { stdio: 'pipe' }); synOk++; }
  catch (e) { P(`${f}: ${String(e.stderr || e).split('\n')[0]}`); }
}
console.log(`  ${synOk}/${all.length} files parse cleanly`);

// 2) DEFINED FUNCTIONS + onclick HANDLER RESOLUTION ---------------------
console.log('\n2) onclick handlers resolve to a real function');
const defined = new Set();
for (const { src } of all) {
  let m, re = /function\s+([A-Za-z_$][\w$]*)\s*\(/g;
  while ((m = re.exec(src))) defined.add(m[1]);
  re = /(?:^|\s)(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?(?:function|\()/g;
  while ((m = re.exec(src))) defined.add(m[1]);
}
const builtins = new Set(['set','setQuiet','draw','openRecipe','closeRecipe','toggle','togglePlanItem',
  'window','document','history','console','event','this','alert','confirm','encodeURIComponent','JSON','Math']);
const kw = new Set(['if','for','while','return','switch','function','var','let','const','do','else','typeof','new','delete','void','throw','try','catch']);
const handlers = new Set();
for (const { src } of all) {
  let m, re = /onclick=\\?["']\s*([A-Za-z_$][\w$]*)\s*\(/g;
  while ((m = re.exec(src))) handlers.add(m[1]);
}
let unresolved = [...handlers].filter(h => !defined.has(h) && !builtins.has(h) && !kw.has(h));
if (unresolved.length) unresolved.forEach(h => P(`onclick="${h}(...)" — no function "${h}" defined anywhere`));
else console.log(`  all ${handlers.size} distinct onclick handlers resolve`);

// 3) DUPLICATE RECIPE IDs ----------------------------------------------
console.log('\n3) Duplicate recipe ids');
let totalIds = 0, crossFile = 0;
for (const { f, src } of all) {
  const seen = {};
  let m, re = /\bid:\s*['"]([^'"{}$]*[-_][^'"{}$]*)['"]/g;  // RECIPE ids only (have - or _); bare words are categories
  while ((m = re.exec(src))) { totalIds++; (seen[m[1]] = (seen[m[1]] || 0) + 1); }
  Object.entries(seen).filter(([, n]) => n > 1).forEach(([id, n]) =>
    P(`${f}: id '${id}' defined ${n}\u00d7 IN THE SAME FILE (find() returns only the first — real collision)`));
}
// cross-file shared ids: informational only (often a category id reused per section, or data/section pair)
const xf = {};
for (const { f, src } of all) { let m, re = /\bid:\s*['"]([^'"{}$]+)['"]/g; const fseen=new Set();
  while ((m = re.exec(src))) { if(!fseen.has(m[1])){fseen.add(m[1]); (xf[m[1]] = xf[m[1]] || new Set()).add(f);} } }
crossFile = Object.values(xf).filter(set => set.size > 1).length;
console.log(`  ${totalIds} ids scanned; no same-file collisions${crossFile ? ` (${crossFile} ids shared across files — usually category ids or data/section pairs, review only if unexpected)` : ''}`);

// 4) VERSION BLOCKS WELL-FORMED ----------------------------------------
console.log('\n4) Recipe versions well-formed');
let verCount = 0, verBad = 0;
for (const { f, src } of all) {
  // find "versions:[" then eval that array literal in a sandbox
  let i = 0;
  while ((i = src.indexOf('versions:[', i)) !== -1) {
    let s = src.indexOf('[', i), d = 0, j = s, inStr = false, q = '', esc = false;
    for (; j < src.length; j++) { const c = src[j];
      if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === q) inStr = false; continue; }
      if (c === '"' || c === "'" || c === '`') { inStr = true; q = c; continue; }
      if (c === '[') d++; else if (c === ']') { d--; if (d === 0) { j++; break; } } }
    try {
      const arr = require('vm').runInNewContext('(' + src.slice(s, j) + ')', {});
      verCount++;
      const defs = arr.filter(v => v && v.default).length;
      const noName = arr.filter(v => !v || !v.name).length;
      if (noName) { W(`${f}: a version is missing a name`); verBad++; }
      if (defs > 1) { W(`${f}: ${defs} versions marked default (should be 0 or 1)`); verBad++; }
    } catch (e) { /* ignore literals with refs */ }
    i = j;
  }
}
console.log(`  ${verCount} version blocks checked, ${verBad} issues`);

// SUMMARY ---------------------------------------------------------------
console.log('\n' + '\u2500'.repeat(40));
console.log(problems ? `\u274c ${problems} problem(s), ${warnings} warning(s)` :
  warnings ? `\u2705 No problems. ${warnings} warning(s) to review.` : '\u2705 All clear.');
process.exit(problems ? 1 : 0);
