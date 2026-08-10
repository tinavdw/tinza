#!/usr/bin/env node
/* ============================================================================
   TINZA PHOTO STUDIO — UPDATER
   Run from the repo root:   node Tools/photo-studio-update.js
   ----------------------------------------------------------------------------
   WHAT THIS FIXES
   The Photo Studio (Archive/TINZA_PHOTO_STUDIO.html) has a baked-in DATA list —
   one card per dish (name, filename, AI prompt). When Fable adds/renames/deletes
   recipes, that list goes stale: dead cards for deleted dishes, missing cards for
   new ones, wrong names for renamed ones. This script rebuilds it from the live
   section files, and re-bakes the "already shot" seed from your real Images folder
   so the progress bar opens at the TRUE number instead of crawling up from a stale
   snapshot. Run it, then drop the HTML back into Archive/ and commit.

   HOW IT WORKS (the whole story, so nobody has to reverse-engineer it again)
   1. DATA lives as `const DATA = [ {...}, ... ];` near the top of the HTML.
      Each record = {r:region, c:country, n:name, f:"file.jpg", p:prompt, dsc,ing,met,feel}.
   2. "Shot vs outstanding" is decided TWO ways: a baked-in `REPO` Set of already-shot
      ids (id = r|c|n), PLUS a live background scan of raw.githubusercontent Images/Image
      that heals the count up. If the REPO seed is stale, the file opens LOW and crawls.
      -> So we recompute the seed from the actual Images/Image/ folder every run.
   3. Photo filename an app looks for = photoName || name  (+ .jpg, then .png, then the
      "name (nameAlt)" display-name fallback). That's what each card's `f` must be, and
      what we match against real files (accent-insensitive, like core.js cleanPhotoName).
   4. We ONLY rebuild the regions in CONFIG (Europe + South Africa — the World Kitchen
      section files with this recipe shape). Every other region is left untouched.
      New dishes get a full template-style prompt so they're ready to shoot.

   TO ALSO REBUILD Africa / Asia later: add them to CONFIG below (their section files
   are sections/wk_africa.js / sections/wk_asia.js, same shape). The seed recompute
   already covers every region regardless.
   ============================================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HTML = path.join(ROOT, 'Archive', 'TINZA_PHOTO_STUDIO.html');
const IMAGES = path.join(ROOT, 'Images', 'Image');

// region label in DATA  ->  section file that owns those recipes
const CONFIG = [
  { region: 'Europe',       file: 'sections/wk_europe.js' },
  { region: 'South Africa', file: 'sections/wk_southafrica.js' },
  // ── ASIA LANE, added 10 Aug 2026. Each country is its OWN region label.
  //    ⛔ NOT folded into the existing 'Asia' region — that one holds India /
  //    Pakistan / Sri Lanka from wk_world.js, and the drop-deleted pass would
  //    wipe all 103 of them the moment a country file did not contain them.
  { region: 'China',        file: 'sections/wk_china.js' },
  { region: 'Japan',        file: 'sections/wk_japan.js' },
  { region: 'Indonesia',    file: 'sections/wk_indonesia.js' },
  { region: 'Thailand',     file: 'sections/wk_thailand.js' },
  { region: 'Vietnam',      file: 'sections/wk_vietnam.js' },
  // { region: 'Africa',    file: 'sections/wk_africa.js' },   // enable if Fable reworks it
];

// ---- loader: the Asia lane files define window.WK_<COUNTRY> and have NO
//      module.exports, so plain require() returns {} and silently adds nothing.
//      Try require first, fall back to evaluating with a window shim.
function loadRecipes(file){
  const full = path.join(ROOT, file);
  try {
    const m = require(full);
    if (Array.isArray(m) && m.length) return m;
  } catch (e) { /* fall through to the window shim */ }
  const sandbox = { window: {} };
  const src = fs.readFileSync(full, 'utf8');
  new Function('window', src + '\nreturn window;')(sandbox.window);
  const arr = Object.keys(sandbox.window)
    .filter(k => k.startsWith('WK_') && Array.isArray(sandbox.window[k]))
    .map(k => sandbox.window[k])
    .sort((a, b) => b.length - a.length)[0];
  if (!Array.isArray(arr)) throw new Error('no WK_* array found in ' + file);
  return arr;
}

// ---- prompt generator (mirrors the existing card style) --------------------
const PLATES=["blue-and-white patterned plate","cream stoneware plate","rustic speckled-grey plate","hand-glazed olive-green plate","simple white plate","warm mustard ceramic plate","white porcelain plate"];
const SETTINGS=["on a rustic wooden table outdoors in soft daylight","in a cosy old-fashioned home kitchen with worn wooden counters","on a big shared family table laid for a gathering","on a small table outside in warm afternoon light","in a lived-in living-room space, relaxed and homely","on a weathered wooden bench in a sunny yard","on a simple kitchen table by a bright window","on a woven mat set out on the ground outdoors"];
const SKIP=/\b(salt|pepper|water|oil|sugar|stock|flour)\b/i;
const hash=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))>>>0;return h;};
const first=(t,n)=>String(t||'').split(/(?<=[.!?])\s+/).slice(0,n).join(' ');
const courseWord=c=>({main:'dish',starter:'starter',dessert:'dessert',side:'side dish',salad:'side dish',drink:'drink',breakfast:'dish',snack:'snack'})[Array.isArray(c)?c[0]:c]||'dish';
// 🩸 A RECORD'S `diet` IS THE UNION OF EVERY VERSION'S DIET, NOT THE DEFAULT'S.
//    Phở Bò carries ["omnivore","vegan"] because it has a vegan fork — and the old
//    code, testing vegan FIRST, told the camera "fully plant-based, no meat" for a
//    BEEF NOODLE SOUP. The photo is of the DEFAULT version, so the strictest claim
//    only holds when nothing looser is present.
function dietLine(d){const a=Array.isArray(d)?d:[d];
  if(a.includes('omnivore'))return '';
  if(a.includes('pescatarian'))return 'Seafood/fish only - no red meat or poultry.';
  if(a.includes('vegetarian'))return 'Fully vegetarian - no meat at all.';
  if(a.includes('vegan'))return 'Fully plant-based - no meat, eggs or dairy on the plate.';
  return '';}
function coreIngredients(ing){
  return String(ing||'').split('·').map(x=>{
    let t=x.trim().replace(/^[\d.,]+\s*(g|kg|ml|l|tsp|tbsp|cup|pinch|clove|cloves|sprig|slice|slices|strip|strips|piece|pieces|large|medium|small)?\s*/i,'');
    return t.replace(/\(.*?\)/g,'').trim();
  }).filter(t=>t && !SKIP.test(t)).slice(0,6).join(', ');
}
function genPrompt(r){
  const cw=courseWord(r.course), raw=Array.isArray(r.course)?r.course[0]:r.course, L=[];
  L.push(`${r.name} (${r.nameAlt||r.name}), a traditional ${r.country} ${cw}.`);
  L.push(`THE DISH is made only from these (no substitutes, keep the correct protein): ${coreIngredients(r.ingredients)}.`);
  const dl=dietLine(r.diet); if(dl)L.push(dl);
  // 🩸 Match GRAIN rice only. `rice noodles`, `rice paper`, `rice flour`, `rice
  //    vinegar` and `rice wine` are different products and the fluffy-grain note
  //    is nonsense on them. And for glutinous rice, sticky IS the correct look —
  //    the old line told the camera the exact opposite of the dish.
  const ingT=String(r.ingredients||'');
  const GLUTINOUS=/\b(glutinous rice|sticky rice|sushi rice|risotto rice|arborio|paella rice|bomba rice)\b/i;
  const GRAIN_RICE=/\b(?:jasmine |basmati |long-?grain |short-?grain |brown |white |wild |red |black |)rice\b(?!\s*(?:noodle|paper|flour|vinegar|wine|cake|krispies|malt|bran|milk|syrup|starch))/i;
  if(GLUTINOUS.test(ingT))
    L.push('RICE: this is glutinous/sticky rice - show it as it should be: glossy, translucent and clinging together in a soft mass, NOT dry separate grains.');
  else if(GRAIN_RICE.test(ingT))
    L.push('RICE: show any rice as fluffy, freshly steamed grains - separate and distinct, light and not clumped, sticky or fused into a mass.');
  if(['main','starter','side','salad'].includes(raw)&&r.pairsWith){
    const pw=String(r.pairsWith).split(/[·,]/).map(s=>s.trim()).filter(Boolean).slice(0,3).join(', ');
    if(pw)L.push(`SERVE WITH: also on the plate - ${pw} - so the meal looks full and complete, not bare.`);
  }
  const h=hash(r.name);
  L.push(`PLATING: serve on a ${PLATES[h%PLATES.length]}, ${SETTINGS[(h>>>3)%SETTINGS.length]}. Plate it generously and full - abundant, hearty and appetising, never sparse or clinical - but still tidy, no spills or mess.`);
  if(raw==='dessert')L.push('GARNISH: a light, fitting finish only if it suits - a dusting, a few berries or chopped nuts - subtle, never piled on.');
  else if(raw!=='drink')L.push('GARNISH: finish with a small fitting garnish for colour - a little fresh herb, sliced chilli, spring onion or a lemon wedge as suits the dish - subtle and authentic, never piled on.');
  L.push('STYLE: rustic home-kitchen, warm natural daylight, earthy spice-toned palette, soft shadows, homely and appetising - a lived-in family kitchen, not a studio.');
  L.push('REAL: make it look like a genuine candid photo taken by a real home cook - natural, warm and authentic, not over-styled. NOT glossy, NOT plastic, no CGI sheen, not a flawless studio stock shot. Impossible to tell it is AI-generated - it must look real and human.');
  L.push('SHOT: landscape 16:9, dish slightly off-centre with clean space along the lower third for a title overlay, shallow depth of field, no text, no hands.');
  return L.join('\n');
}
const makeRecord=(r,region)=>({r:region,c:r.country,n:r.name,f:(r.photoName||r.name)+'.jpg',
  p:genPrompt(r),dsc:r.nameAlt||'',ing:r.ingredients||'',met:first(r.method,3),feel:r.howThisFeels||''});

// ---- shot-seed from real files (mirrors app cleanPhotoName) -----------------
const clean=s=>String(s||'').trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[\/\\:*?"<>|]/g,' ').replace(/\s+/g,' ').trim().toLowerCase();
const noExt=s=>s.replace(/\.(jpe?g|png)$/i,'');
function candidates(d){
  const c=[noExt(d.f), noExt(d.n)], bf=noExt(d.f);
  if(d.dsc && !/\)\s*$/.test(bf.trim())) c.push(bf+' ('+d.dsc+')');
  if(d.dsc && !/\)\s*$/.test(String(d.n).trim())) c.push(d.n+' ('+d.dsc+')');
  return c.map(clean);
}

// ---- run -------------------------------------------------------------------
function main(){
  let html=fs.readFileSync(HTML,'utf8');
  const from=html.indexOf('[',html.indexOf('const DATA = ['));
  const end=html.indexOf('];',from);
  let DATA=JSON.parse(html.slice(from,end+1));
  const before=DATA.length;

  for(const {region,file} of CONFIG){
    const recipes=loadRecipes(file);
    const rNames=new Set(recipes.map(r=>r.name));
    const sNames=new Set(DATA.filter(d=>d.r===region).map(d=>d.n));
    const dropped=DATA.filter(d=>d.r===region && !rNames.has(d.n)).length;
    DATA=DATA.filter(d=>d.r!==region || rNames.has(d.n));                 // drop deleted
    const adds=recipes.filter(r=>!sNames.has(r.name)).map(r=>makeRecord(r,region));
    let last=-1; DATA.forEach((d,i)=>{if(d.r===region)last=i;});
    if(last<0) DATA.push(...adds); else DATA.splice(last+1,0,...adds);    // add new in-block
    console.log(`${region}: dropped ${dropped}, added ${adds.length}`);
  }

  // ── GHOST SWEEP · remove studio cards for recipes that no longer exist.
  //    ⚖️ Ruled by Tina, 10 Aug 2026. These four are remnants of the CULTURAL
  //    TAB, deleted under §2.2. The recipes are in no section file, and no photo
  //    was ever shot for any of them — so nothing is lost, and leaving them in
  //    sends her son out to shoot four dishes the app does not have.
  //    ⛔ EXPLICIT LIST, NOT A HEURISTIC. A name-matching sweep would also delete
  //    cards that were merely RENAMED, and a renamed card still has its photo.
  //    Anything else suspected stale is REPORTED, never auto-deleted.
  {
    const GHOSTS = [
      ['Events', 'Durban Lamb Curry'],
      ['Events', 'Durban Samoosas'],
      ['Events', 'Cape Malay Breyani'],
      ['Events', 'Jewish Chicken Soup & Matzo Balls'],
    ];
    const before = DATA.length;
    for (const [region, name] of GHOSTS) {
      const hit = DATA.find(d => d.r === region && d.n === name);
      if (!hit) { console.log(`ghost sweep: "${name}" already gone`); continue; }
      DATA = DATA.filter(d => !(d.r === region && d.n === name));
    }
    const removed = before - DATA.length;
    if (removed) console.log(`ghost sweep: ${removed} stale Cultural-tab cards removed`);
  }

  // ── REPAIR PASS · rewrite any prompt still carrying a broken PLATING line.
  //    Cause: `h>>3` was a SIGNED shift, so any name hashing above 2^31 went
  //    negative and SETTINGS[-n] came back undefined. Fixed above, but cards
  //    baked BEFORE the fix are never regenerated (the tool only builds prompts
  //    for names it is adding), so they keep the broken text forever.
  //    ⛔ This pass rewrites the PROMPT ONLY. It never touches n, f, dsc, ing,
  //    met or feel, and it never adds or removes a card.
  {
    const byRegion = {};
    for (const { region, file } of CONFIG) {
      try {
        const rs = loadRecipes(file);
        byRegion[region] = new Map(rs.map(r => [r.name, r]));
      } catch (e) { /* region not loadable — leave its cards alone */ }
    }
    let repaired = 0, orphan = 0;
    for (const d of DATA) {
      if (!/,\s*undefined\./.test(d.p || '')) continue;
      const rec = byRegion[d.r] && byRegion[d.r].get(d.n);
      if (!rec) { orphan++; continue; }
      d.p = genPrompt(rec);
      repaired++;
    }
    if (repaired || orphan)
      console.log(`repair: ${repaired} broken PLATING prompts rewritten` +
                  (orphan ? `, ${orphan} left alone (no source record)` : ''));
  }

  // recompute shot seed from real images
  const files=fs.readdirSync(IMAGES).filter(f=>/\.(jpe?g|png)$/i.test(f));
  const have=new Set(files.map(f=>clean(noExt(f))));
  const seed=DATA.filter(d=>candidates(d).some(x=>have.has(x))).map(d=>d.r+'|'+d.c+'|'+d.n);

  // write DATA
  const arrText='[\n'+DATA.map(r=>JSON.stringify(r)).join(',\n')+'\n]';
  html=html.slice(0,from)+arrText+html.slice(end+1);
  // write seed (find fresh offsets after DATA edit)
  const rs=html.indexOf('const REPO = new Set('), as=html.indexOf('[',rs), ae=html.indexOf(']',as);
  html=html.slice(0,as)+JSON.stringify(seed)+html.slice(ae+1);

  JSON.parse(arrText);                                                    // sanity
  fs.writeFileSync(HTML,html);
  console.log(`\nDATA: ${before} -> ${DATA.length} records`);
  console.log(`Shot seed rebuilt from ${files.length} images: ${seed.length} shot, ${DATA.length-seed.length} outstanding`);
  console.log('Wrote', path.relative(ROOT,HTML), '— drop into Archive/ and commit.');
}
main();
