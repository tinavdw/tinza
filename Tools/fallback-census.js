#!/usr/bin/env node
/* TINZA FALLBACK CENSUS — standing dev instrument (MF28 / Price Studio seed).
 * Run:  node Tools/fallback-census.js
 * Reports, PER ROOM (current state), the only pricing numbers that mean anything:
 *   exact  = resolved to an exact PRICE_DB key
 *   benign = fallback, SAME food (cosmetic strip: "fresh ginger"→ginger) — fine
 *   DIET   = fallback to a DIFFERENT food across the plant/animal line (MF28) — MUST BE 0
 *   CUT    = fallback to a different cut/type (chicken breast→chicken) — the money tick-lists
 *   STATE  = fallback across cooked/dried/tinned (MF34) — ~2.5x weight error
 *   null   = loud-missing (the honesty line "N/M priced")
 *   CARDS-SKIPPED = WK cards rendering NO real price (the coverage gate, index.js) — user-facing
 * A LINE metric proves the resolver. CARDS-SKIPPED proves what the user actually sees.
 * No network, no build. Reads sections/ directly. */
const fs=require('fs'),vm=require('vm'),path=require('path');
const ROOT=path.resolve(__dirname,'..');const R=f=>{try{return fs.readFileSync(path.join(ROOT,f),'utf8');}catch(e){return'';}};
const WKDATA=['sections/wk_africa.js','sections/wk_europe.js','sections/wk_world.js','sections/wk_southafrica.js','sections/wk_france.js','sections/wk_europe_germany.js','sections/wk_europe_nireland.js'];
function ctxNew(){const c={console:{log:()=>{},info:()=>{},warn:()=>{},error:()=>{}},localStorage:{getItem:()=>null,setItem:()=>{}},matchMedia:()=>({matches:false,addEventListener:()=>{}}),document:{getElementById:()=>null,addEventListener:()=>{},querySelector:()=>null,querySelectorAll:()=>[]},requestAnimationFrame:()=>{},setTimeout:()=>{},S:{}};c.window=c;c.globalThis=c;c.self=c;return vm.createContext(c);}
const ctx=ctxNew();
let src='';for(const f of ['sections/prices.js','sections/packs.js','sections/core.js','sections/data.js'])src+='\n'+R(f)+'\n';
for(const f of WKDATA)src+='\n'+R(f)+'\n';
src+='\n'+R('sections/worldkitchen.js')+'\n';
src+=';globalThis.__DB=PRICE_DB;globalThis.__po=priceOf;globalThis.__lp=lookupPrice;globalThis.__pc=priceClean;globalThis.__wk=wkPriceLookup;globalThis.__pool=(typeof wkPool==="function")?wkPool:null;globalThis.__cost=(typeof wkCostRecipe==="function")?wkCostRecipe:null;globalThis.__main=(typeof wkClassifyMain==="function")?wkClassifyMain:null;globalThis.__parse=(typeof wkParseIngredients==="function")?wkParseIngredients:null;';
try{vm.runInContext(src,ctx);}catch(e){console.error('LOAD ERROR:',e.message);process.exit(1);}
const DB=ctx.__DB,po=ctx.__po,lp=ctx.__lp,pc=ctx.__pc,wk=ctx.__wk;

const COSMETIC=/\b(fresh|dried|frozen|tinned|canned|cooked|raw|ground|chopped|sliced|grated|minced|crushed|cubed|diced|finely|roughly|large|medium|small|ripe|plain|whole|peeled|shredded|mashed|baby|lean|unsalted|salted|natural|organic|boneless|skinless|cold|warm|hot|toasted|blanched|drained|rinsed|soft|softened|melted|extra|virgin|light|thinly|coarsely|halved|quartered|optional)\b/g;
const ANIMAL=/^(honey|milk|buttermilk|butter|ghee|cream|cheese|yoghurt|yogurt|egg|eggs|stock|broth|beef|chicken|lamb|mutton|pork|bacon|fish|hake|basa|snoek|pilchard|sardine|prawn|mussel|calamari|tuna|salmon|mince|sausage)$/;
const PLANT=/\b(almond|oat|soy|soya|cashew|coconut|rice|hemp|pea|nut|vegan|plant|tofu|tempeh|date|maple|flax)\b/;
const STATE=/\b(cooked|dried|tinned|canned|frozen|raw)\b/;
const core=n=>pc(n).replace(COSMETIC,' ').replace(/\s+/g,' ').trim();
function isExact(n){return DB[n]!=null||DB[n+'_each']!=null||(n.slice(-1)==='s'&&(DB[n.slice(0,-1)]!=null||DB[n.slice(0,-1)+'_each']!=null))||/\beggs?\b/.test(n);}
function classify(name,res){
  const q=String(name||'').toLowerCase().trim();if(!q)return'null';const n=pc(name);let key=null;
  if(res==='lp'){if(DB[q]!==undefined)return'exact';const v=lp(name);if(v==null)return'null';let b=null,bl=0;for(const k in DB){if(typeof DB[k]!=='number')continue;if(q.includes(k)&&k.length>bl){b=k;bl=k.length;}}key=b;}
  else if(res==='wk'){let r=null;try{r=wk(name);}catch(e){}if(!r||r.key==null)return'null';if(isExact(n))return'exact';key=r.key;}
  else{let r=null;try{r=po(name);}catch(e){}if(!r||r.key==null)return'null';key=r.key;}
  if(isExact(n))return'exact';if(key==null)return'null';
  const c=core(name),eq=(a,b)=>a===b||a===b+'s'||a+'s'===b||a.replace(/s$/,'')===b.replace(/s$/,'');
  if(eq(c,key))return'benign';
  if(PLANT.test(n)&&ANIMAL.test(key))return'DIET';
  if(STATE.test(n))return'STATE';
  return'CUT';
}
function nOf(f){const t=R(f),re=/[{,]\s*['"`]?n['"`]?\s*:\s*(['"`])((?:\\.|(?!\1).)*)\1/g;let m,s=new Set();while((m=re.exec(t)))s.add(m[2]);return[...s];}
function nameOf(f){const t=R(f),re=/[{,]\s*(?:name|priceName)\s*:\s*(['"`])((?:\\.|(?!\1).)*)\1/g;let m,s=new Set();while((m=re.exec(t)))s.add(m[2]);return[...s];}
function dashOf(f){const t=R(f),re=/(['"`])([^'"`]*?)\s*—\s*[^'"`]*?per\s+p[^'"`]*?\1/g;let m,s=new Set();while((m=re.exec(t))){if(m[2]&&m[2].length<40)s.add(m[2].trim());}return[...s];}
function wkIng(){const s=new Set();for(const f of WKDATA){const t=R(f),re=/"ingredients"\s*:\s*"([^"]*)"/g;let m;while((m=re.exec(t)))m[1].split('·').forEach(tok=>{let x=tok.trim().replace(/^[\d.\/–-]+\s*(g|kg|ml|l|tbsp|tsp|pcs|cup|cups)?\b/i,'').replace(/\(.*?\)/g,'').trim();if(x&&x.length>1)s.add(x);});}return[...s];}
// WK cards-skipped = the real gate (index.js:244-269)
function wkCardsSkipped(){if(!ctx.__pool||!ctx.__cost)return'n/a';const pool=ctx.__pool()||[];let skip=0;for(const r of pool){if(!r)continue;const c=ctx.__cost(r,1)||{priced:0,missing:[]};const miss=c.missing||[],denom=(c.priced||0)+miss.length,cov=denom>0?c.priced/denom:0;let pOk=true;if(ctx.__main&&ctx.__parse){const it=ctx.__parse(r.ingredients)||[],mc=ctx.__main(it);if(mc&&mc.item&&/^(meat|fish|bonein)$/.test(mc.cat))pOk=miss.indexOf(mc.item.name)<0;}if(!(denom>0&&cov>=0.8&&pOk))skip++;}return skip+' / '+pool.length;}

const ROOMS=[['Health',nOf('sections/health.js'),'lp'],['Tiny Tummies+pets',nOf('sections/prices.js'),'lp'],['Meals',nOf('sections/meals.js'),'po'],['Events/Buffet/Cakes',nOf('sections/eventsData.js'),'po'],['Beverages',nOf('sections/beveragesData.js'),'po'],['Kiddies',nameOf('sections/kiddies.js'),'po'],['Spice',nameOf('sections/spice.js'),'po'],['Braai',dashOf('sections/data.js'),'po'],['World Kitchen',wkIng(),'wk']];
console.log('TINZA FALLBACK CENSUS · '+new Date().toISOString().slice(0,10));
console.log('ROOM                     res    exact benign  DIET  CUT STATE  null   (n)');
let tD=0;
for(const[name,pool,res]of ROOMS){if(!pool.length){console.log(name.padEnd(24)+res+'  (no pool)');continue;}
  const c={exact:0,benign:0,DIET:0,CUT:0,STATE:0,'null':0};for(const nm of pool)c[classify(nm,res)]++;tD+=c.DIET;
  const f=x=>String(x).padStart(5);console.log(name.padEnd(24)+res.padEnd(5)+f(c.exact)+f(c.benign)+f(c.DIET)+f(c.CUT)+f(c.STATE)+f(c['null'])+'   ('+pool.length+')');}
console.log('\nDANGER-DIET total (MF28 zero-metric): '+tD+(tD===0?'  ✅':'  🚨 NOT ZERO'));
console.log('WORLD KITCHEN cards-skipped (no real price shown): '+wkCardsSkipped()+'   [MF43]');
