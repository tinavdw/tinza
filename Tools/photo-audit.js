#!/usr/bin/env node
/*
 * Tinza photo audit — two jobs, cleanly separated.
 *
 *   node tools/photo-audit.js              ← PRE-PUSH GATE. Only genuine breakage:
 *                                             ❌ broken photoName · 🔤 wrong case.
 *                                             Exits 1 if any found. Trustworthy, no noise.
 *
 *   node tools/photo-audit.js --missing    ← SHOOT-LIST. Adds ⚠️ recipes with no photo yet
 *                                             (informational; the emoji fallback covers these).
 *   node tools/photo-audit.js --missing spice.js   ← same, but scoped to ONE section file.
 *
 * Reads recipe name + photoName from sections/*.js, resolves photoName||name the way the
 * app's cleanPhotoName does (strip accents), and checks Images/Image/. Read-only.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const IMG_DIR = path.join(ROOT, 'Images', 'Image');
const SECT_DIR = path.join(ROOT, 'sections');

const args = process.argv.slice(2);
const showMissing = args.includes('--missing');
const scopeFile = args.find(a => a.endsWith('.js')) || null;   // optional section filter for --missing

const clean = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

if (!fs.existsSync(IMG_DIR))  { console.error('No Images/Image folder at ' + IMG_DIR); process.exit(2); }
if (!fs.existsSync(SECT_DIR)) { console.error('No sections folder at ' + SECT_DIR); process.exit(2); }

const exact = new Set();
const lower = new Map();
for (const f of fs.readdirSync(IMG_DIR)) {
  const m = f.match(/^(.*)\.(jpe?g|png|webp)$/i);
  if (!m) continue;
  const base = clean(m[1]);
  exact.add(base);
  lower.set(base.toLowerCase(), base);
}

function recipesFrom(src) {
  const out = [];
  for (let i = 0; i < src.length; i++) {
    if (src[i] !== '{') continue;
    let depth = 0, inStr = false, q = '', j = i;
    for (; j < src.length; j++) {
      const c = src[j];
      if (inStr) { if (c === q && src[j - 1] !== '\\') inStr = false; continue; }
      if (c === '"' || c === "'") { inStr = true; q = c; continue; }
      if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) break; }
    }
    const obj = src.slice(i, j + 1);
    const nm = obj.match(/\bname\s*:\s*["']([^"']+)["']/);
    if (!nm) continue;
    const pn = obj.match(/\bphotoName\s*:\s*["']([^"']+)["']/);
    out.push({ name: nm[1], photoName: pn ? pn[1] : null });
  }
  return out;
}

const seen = new Set();
const recipes = [];
for (const f of fs.readdirSync(SECT_DIR)) {
  if (!f.endsWith('.js')) continue;
  const src = fs.readFileSync(path.join(SECT_DIR, f), 'utf8');
  for (const r of recipesFrom(src)) {
    const key = f + '::' + r.name;
    if (seen.has(key)) continue;
    seen.add(key);
    recipes.push({ file: f, ...r });
  }
}

const broken = [], noPhoto = [], wrongCase = [];
for (const r of recipes) {
  const target = clean(r.photoName || r.name);
  if (exact.has(target)) continue;
  const lc = target.toLowerCase();
  if (lower.has(lc)) { wrongCase.push({ ...r, want: target, have: lower.get(lc) }); continue; }
  if (r.photoName) broken.push({ ...r, want: target });
  else noPhoto.push({ ...r, want: target });
}

const line = '─'.repeat(60);
const block = (title, arr, fmt) => {
  console.log('\n' + title + '  (' + arr.length + ')');
  if (!arr.length) { console.log('  none ✅'); return; }
  arr.sort((a, b) => a.name.localeCompare(b.name)).forEach(r => console.log('  ' + fmt(r)));
};

console.log('\nTINZA PHOTO AUDIT  ·  ' + recipes.length + ' recipes scanned  ·  ' + exact.size + ' photos in Images/Image');
console.log(line + '\n');
console.log('GATE — genuine breakage (a photo exists but won\'t load):');
block('❌ BROKEN photoName (points at a missing file)', broken, r => `${r.name}  [${r.file}]  → wants "${r.want}.jpg"`);
block('🔤 WRONG CASE (works locally, 404s on GitHub)', wrongCase, r => `${r.name}  [${r.file}]  → wants "${r.want}.jpg" but file is "${r.have}.jpg"`);

if (showMissing) {
  let miss = noPhoto;
  if (scopeFile) miss = miss.filter(r => r.file === scopeFile);
  console.log('\n' + line);
  console.log('\nSHOOT-LIST — recipes with no photo yet' + (scopeFile ? ' in ' + scopeFile : '') + ' (emoji fallback covers these):');
  block('⚠️  NO PHOTO', miss, r => `${r.name}  [${r.file}]  → needs "${r.want}.jpg"`);
}

console.log('\n' + line);
const bad = broken.length + wrongCase.length;
if (bad) console.log(`\n${bad} broken photo link(s) — fix before pushing.` + (showMissing ? '' : '  (run with --missing to also see what still needs shooting.)') + '\n');
else     console.log('\nNo broken photo links. ✅' + (showMissing ? '' : '  (run with --missing to see what still needs shooting.)') + '\n');
process.exit(bad ? 1 : 0);
