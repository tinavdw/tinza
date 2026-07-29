// merge.js — append a batch to wk_china.js with full validation.
// Usage: node merge.js batch3.js
const fs = require('fs');
const path = process.argv[2];
if (!path) { console.error('usage: node merge.js <batchfile.js>'); process.exit(1); }

const src = fs.readFileSync('wk_china.js', 'utf8');
eval(src);                                   // defines WK_CHINA
const NEW = require('./' + path);

const header = src.slice(0, src.indexOf('var WK_CHINA = ['));
const BASE_KEYS = Object.keys(WK_CHINA[0]);
const all = WK_CHINA.concat(NEW);
const ids = new Set(all.map(r => r.id));
let fail = 0;
const bad = (id, msg) => { console.log('  ❌ ' + id + ' — ' + msg); fail++; };

for (const r of NEW) {
  const k = Object.keys(r);
  if (k.join(',') !== BASE_KEYS.join(',')) {
    bad(r.id, 'key mismatch. missing=[' + BASE_KEYS.filter(x => !k.includes(x)) +
        '] extra=[' + k.filter(x => !BASE_KEYS.includes(x)) + ']');
  }
  if (all.filter(x => x.id === r.id).length !== 1) bad(r.id, 'duplicate id');
  if (r.cuisine !== 'east-asia' || r.country !== 'China') bad(r.id, 'wrong cuisine/country');
  const DIET_VOCAB = ['omnivore','vegetarian','vegan','unknown'];
  r.diet.forEach(x => { if (!DIET_VOCAB.includes(x)) bad(r.id, 'diet token "' + x + '" not in v1 vocabulary ' + DIET_VOCAB + ' — halaal/kosher are SEPARATE LAWS, never diet tags'); });
  ['type','diet','occasion','leftovers'].forEach(f => { if (!Array.isArray(r[f])) bad(r.id, f + ' must be an array'); });

  // versions
  const d = r.versions.filter(v => v.default === true).length;
  if (d !== 1) bad(r.id, 'has ' + d + ' default versions, must be exactly 1');
  if (r.versions.length !== 3) bad(r.id, 'has ' + r.versions.length + ' versions, lane rule is 3');
  // A3 budget-leads — TWO rungs, because one test could not do this honestly.
  // HARD (mechanical): a version named "budget" must sit in slot 1. This is what caught
  //   cong-you-bing on 29 Jul — classic R14 led and the budget fork R12 sat in slot 2, through 4 batches.
  // WARN (judgement): v1 not being the cheapest is sometimes correct — char-siu and roast-duck
  //   both lead with a real budget fork while a protein-swap fork (chicken) costs less. That is a
  //   different dish, not a cheaper route. So it prints and does not block. Tina's eyes decide.
  const bIdx = r.versions.findIndex(v => /budget/i.test(v.name));
  if (bIdx > 0) bad(r.id, 'a version named budget ("' + r.versions[bIdx].name + '") is in slot ' + (bIdx + 1) + ' — A3 says it LEADS');
  const cheapest = Math.min.apply(null, r.versions.map(v => v.costPP));
  if (r.versions[0].costPP !== cheapest) console.log('  ⚠️  ' + r.id + ' — v1 "' + r.versions[0].name + '" R' + r.versions[0].costPP + ' is not the cheapest (R' + cheapest + '). Check this is a protein-swap fork, not a breach.');
  r.versions.forEach(v => {
    if (typeof v.costPP !== 'number') bad(r.id, 'version "' + v.name + '" missing numeric costPP');
    if (r.costPP !== undefined) bad(r.id, 'costPP on the record — A3 says versions only');
    if (!v.delta) return;
    const ok = ['swapIng','addIng','removeIng','addStep','swapStep'];
    for (const key in v.delta) {
      if (!ok.includes(key)) bad(r.id, 'unknown delta op "' + key + '"');
      v.delta[key].forEach(o => {
        const ks = Object.keys(o).join('+');
        const want = {swapIng:'from+to', swapStep:'from+to', addIng:'item', removeIng:'item', addStep:'text'}[key];
        if (ks !== want) bad(r.id, key + ' shape "' + ks + '" should be "' + want + '"');
        // DEAD-DELTA CHECK: the thing being swapped/removed must exist in the base record
        if (key === 'swapIng' && !r.ingredients.includes(o.from)) bad(r.id, 'DEAD swapIng — not in ingredients: "' + o.from.slice(0,50) + '"');
        if (key === 'removeIng' && !r.ingredients.includes(o.item)) bad(r.id, 'DEAD removeIng — not in ingredients: "' + o.item.slice(0,50) + '"');
        if (key === 'swapStep' && !r.method.includes(o.from)) bad(r.id, 'DEAD swapStep — not in method: "' + o.from.slice(0,50) + '"');
        if ((key === 'swapIng' || key === 'swapStep') && (!o.to || !o.to.trim())) bad(r.id, 'empty "to" — deletions use removeIng');
      });
    }
  });

  // crossLinks
  if (!Array.isArray(r.crossLinks) || r.crossLinks.length !== 3) bad(r.id, 'needs exactly 3 crossLinks (A6)');
  (r.crossLinks || []).forEach(c => {
    if (!ids.has(c.target)) bad(r.id, 'DEAD crossLink target → ' + c.target);
    if (c.target === r.id) bad(r.id, 'crossLink points at itself');
    if (!c.name || !c.emoji) bad(r.id, 'crossLink missing name/emoji');
  });
}

// EXISTING records get re-checked too — crossLinks AND version rules.
// 29 Jul: version rules were only ever applied to the incoming batch, so a breach authored
// in batch 1 could never be caught by any later merge. cong-you-bing sat wrong for 4 batches.
WK_CHINA.forEach(r => {
  r.crossLinks.forEach(c => { if (!ids.has(c.target)) bad(r.id, 'existing DEAD crossLink → ' + c.target); });
  if (r.versions.length !== 3) bad(r.id, 'existing record has ' + r.versions.length + ' versions');
  if (r.versions.filter(v => v.default === true).length !== 1) bad(r.id, 'existing record default count wrong');
  const bi = r.versions.findIndex(v => /budget/i.test(v.name));
  if (bi > 0) bad(r.id, 'existing record: budget fork sits in slot ' + (bi + 1) + ', A3 says it LEADS');
});

if (fail) { console.log('\n🔴 ' + fail + ' failures — NOT written.'); process.exit(1); }

const out = header + 'var WK_CHINA = [\n' + all.map(r => JSON.stringify(r)).join(',\n') +
            '\n];\nif (typeof window !== \'undefined\') window.WK_CHINA = WK_CHINA;\n';
fs.writeFileSync('wk_china.js', out);
console.log('✅ all checks pass · ' + WK_CHINA.length + ' + ' + NEW.length + ' = ' + all.length + ' records written');
NEW.forEach(r => console.log('   + ' + r.id + '  [' + r.versions.map(v => 'R' + v.costPP).join(' · ') + ']'));
