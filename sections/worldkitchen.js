/* ---- Flag headers (flagcdn placeholders until real food photos) ---- */
var WK_FLAG = {
  usa:'us', canada:'ca', mexico:'mx', guatemala:'gt',
  jamaica:'jm', trinidad:'tt', cuba:'cu',
  brazil:'br', colombia:'co', peru:'pe',
  argentina:'ar', chile:'cl',
  france:'fr', italy:'it', spain:'es', germany:'de',
  england:'gb-eng', scotland:'gb-sct', wales:'gb-wls', nireland:'gb-nir',
  greece:'gr', portugal:'pt',
  russia:'ru', poland:'pl', ukraine:'ua',
  sweden:'se', norway:'no', denmark:'dk',
  turkey:'tr',
  morocco:'ma', egypt:'eg', tunisia:'tn',
  nigeria:'ng', ghana:'gh', senegal:'sn',
  ethiopia:'et', kenya:'ke', tanzania:'tz',
  sa:'za', mozambique:'mz', zimbabwe:'zw',
  lebanon:'lb', israel:'il', jordan:'jo',
  uae:'ae', saudi:'sa',
  iran:'ir',
  india:'in', pakistan:'pk', srilanka:'lk',
  uzbekistan:'uz', kazakhstan:'kz',
  china:'cn', japan:'jp', korea:'kr',
  thailand:'th', vietnam:'vn', indonesia:'id', malaysia:'my',
  australia:'au', newzealand:'nz', fiji:'fj'
};
function wkFlagUrl(id){ var c = WK_FLAG[id]; return c ? ('https://flagcdn.com/' + c + '.svg') : ''; }

function worldKitchenHTML(){

  // ── COOKING MODE (overlays any WK screen) ───────────────────────
  if(S.wkCooking){
    return wkCookingView();
  }

  // ── SUB-SCREENS ──────────────────────────────────────────────────
  if(S.wkScreen === 'sa'){
    return wkSAKitchensHTML();
  }
  if(S.wkScreen === 'country' || S.wkRecipeDetail){
    return wkCountryHTML();
  }
  if(S.wkScreen === 'wkdata'){
    return wkDataCountryHTML();
  }
  if(S.wkScreen === 'wkplan'){
    return wkMyPlanView();
  }
  return wkWorldHome();

  // ── OLD MAP SCREEN (no longer reached — kept for reference) ─────────
  const mapColor = '#c06020';
  const mapBg    = '#160f08';

  // Region data
window.REGIONS = {
    'north-america':   { title:'North America',           sub:'United States · Canada',                        emoji:'🌎', color:'#5DCAA5', dishes:['BBQ ribs','Poutine','Clam chowder','Butter tarts','Buffalo wings'] },
    'mexico':          { title:'Mexico',                  sub:'Central America',                               emoji:'🌮', color:'#1D9E75', dishes:['Tacos al pastor','Mole negro','Guacamole','Tamales','Churros'] },
    'caribbean':       { title:'Caribbean',               sub:'Jamaica · Trinidad · Cuba · Barbados',          emoji:'🌴', color:'#97C459', dishes:['Jerk chicken','Roti & curry','Rice & peas','Plantain','Rum cake'] },
    'south-america-n': { title:'South America — North',   sub:'Brazil · Colombia · Peru · Venezuela',          emoji:'🌿', color:'#639922', dishes:['Brazilian churrasco','Ceviche','Feijoada','Arepas','Coxinha'] },
    'south-america-s': { title:'South America — South',   sub:'Argentina · Chile · Uruguay',                   emoji:'🔥', color:'#3B6D11', dishes:['Argentinian asado','Empanadas','Chimichurri','Dulce de leche','Cazuela'] },
    'western-europe':  { title:'Western Europe',          sub:'France · UK · Germany · Spain · Belgium',       emoji:'🥐', color:'#7F77DD', dishes:['Coq au vin','Fish & chips','Bratwurst','Moules frites','Crêpes'] },
    'southern-europe': { title:'Southern Europe',         sub:'Italy · Greece · Portugal · Spain',             emoji:'🍝', color:'#534AB7', dishes:['Pasta carbonara','Greek mezze','Bacalhau','Paella','Tiramisu'] },
    'eastern-europe':  { title:'Eastern Europe',          sub:'Russia · Poland · Ukraine · Georgia · Hungary', emoji:'🥘', color:'#AFA9EC', dishes:['Borscht','Pierogi','Goulash','Khachapuri','Pelmeni'] },
    'scandinavia':     { title:'Scandinavia',             sub:'Sweden · Norway · Denmark · Finland',           emoji:'🐟', color:'#CECBF6', dishes:['Gravlax','Swedish meatballs','Smørrebrød','Lefse','Janssons'] },
    'turkey':          { title:'Turkey',                  sub:'Anatolia · Istanbul',                           emoji:'🫕', color:'#F0997B', dishes:['Kebab & kofta','Börek','Meze platters','Pide','Turkish delight'] },
    'north-africa':    { title:'North Africa',            sub:'Morocco · Egypt · Tunisia · Algeria',           emoji:'🏺', color:'#EF9F27', dishes:['Tagine','Koshari','Harira','Shakshuka','Couscous'] },
    'west-africa':     { title:'West Africa',             sub:'Nigeria · Ghana · Senegal · Ivory Coast',       emoji:'🌶', color:'#FAC775', dishes:['Jollof rice','Egusi soup','Thieboudienne','Suya','Puff puff'] },
    'east-africa':     { title:'East Africa',             sub:'Ethiopia · Kenya · Tanzania · Uganda',          emoji:'🫙', color:'#BA7517', dishes:['Injera & wot','Nyama choma','Ugali','Pilau rice','Mandazi'] },
    'southern-africa': { title:'Southern Africa',         sub:'South Africa · Mozambique · Zimbabwe',          emoji:'🇿🇦', color:'#854F0B', dishes:['Boerekos','Cape Malay curry','Peri-peri chicken','Sadza','SA Braai'] },
    'middle-east':     { title:'Middle East',             sub:'Lebanon · Israel · Jordan · Syria · Iraq',      emoji:'🧆', color:'#F5C4B3', dishes:['Hummus & falafel','Shawarma','Fattoush','Kibbeh','Baklava'] },
    'gulf':            { title:'Gulf & Arabian Peninsula',sub:'Saudi · UAE · Oman · Yemen · Kuwait',           emoji:'🫖', color:'#F0997B', dishes:['Kabsa','Machboos','Harees','Mandi','Luqaimat'] },
    'iran':            { title:'Persia',                  sub:'Iran',                                          emoji:'🏵', color:'#D85A30', dishes:['Ghormeh sabzi','Fesenjan','Chelokabab','Ash reshteh','Saffron rice'] },
    'south-asia':      { title:'South Asia',              sub:'India · Pakistan · Sri Lanka · Bangladesh',     emoji:'🍛', color:'#CECBF6', dishes:['Biryani','Butter chicken','Dhal','Roti & naan','Kheer'] },
    'central-asia':    { title:'Central Asia',            sub:'Kazakhstan · Uzbekistan · Kyrgyzstan',          emoji:'🐑', color:'#B5D4F4', dishes:['Plov','Beshbarmak','Lagman','Samsa','Shashlik'] },
    'east-asia':       { title:'East Asia',               sub:'China · Japan · Korea · Taiwan',                emoji:'🥢', color:'#5DCAA5', dishes:['Dim sum','Ramen & sushi','Korean BBQ','Peking duck','Bibimbap'] },
    'southeast-asia':  { title:'Southeast Asia',          sub:'Thailand · Vietnam · Indonesia · Malaysia',     emoji:'🌿', color:'#9FE1CB', dishes:['Pad thai','Pho','Nasi goreng','Rendang','Adobo'] },
    'oceania':         { title:'Oceania & Pacific',       sub:'Australia · NZ · Hawaii · Fiji · Samoa',        emoji:'🌺', color:'#85B7EB', dishes:['Aussie meat pie','NZ lamb roast','Hawaiian poke','Lovo feast','Pavlova'] },
  };

window.COUNTRY_TO_REGION = {
    840:'north-america',124:'north-america',
    484:'mexico',320:'mexico',188:'mexico',222:'mexico',340:'mexico',558:'mexico',591:'mexico',
    192:'caribbean',214:'caribbean',332:'caribbean',388:'caribbean',630:'caribbean',659:'caribbean',662:'caribbean',670:'caribbean',780:'caribbean',28:'caribbean',44:'caribbean',52:'caribbean',84:'caribbean',
    76:'south-america-n',218:'south-america-n',604:'south-america-n',862:'south-america-n',328:'south-america-n',740:'south-america-n',
    32:'south-america-s',152:'south-america-s',600:'south-america-s',68:'south-america-s',858:'south-america-s',
    250:'western-europe',826:'western-europe',276:'western-europe',528:'western-europe',56:'western-europe',40:'western-europe',756:'western-europe',442:'western-europe',372:'western-europe',348:'western-europe',
    380:'southern-europe',300:'southern-europe',620:'southern-europe',724:'southern-europe',191:'southern-europe',705:'southern-europe',499:'southern-europe',807:'southern-europe',8:'southern-europe',703:'southern-europe',
    792:'turkey',
    643:'eastern-europe',616:'eastern-europe',804:'eastern-europe',268:'eastern-europe',100:'eastern-europe',642:'eastern-europe',203:'eastern-europe',112:'eastern-europe',233:'eastern-europe',428:'eastern-europe',440:'eastern-europe',
    752:'scandinavia',578:'scandinavia',208:'scandinavia',246:'scandinavia',352:'scandinavia',
    504:'north-africa',818:'north-africa',788:'north-africa',12:'north-africa',434:'north-africa',736:'north-africa',
    566:'west-africa',288:'west-africa',686:'west-africa',384:'west-africa',466:'west-africa',854:'west-africa',768:'west-africa',204:'west-africa',324:'west-africa',694:'west-africa',430:'west-africa',562:'west-africa',
    231:'east-africa',404:'east-africa',834:'east-africa',800:'east-africa',646:'east-africa',706:'east-africa',108:'east-africa',174:'east-africa',262:'east-africa',232:'east-africa',
    710:'southern-africa',508:'southern-africa',716:'southern-africa',454:'southern-africa',516:'southern-africa',426:'southern-africa',72:'southern-africa',748:'southern-africa',24:'southern-africa',180:'southern-africa',
    422:'middle-east',376:'middle-east',400:'middle-east',760:'middle-east',368:'middle-east',275:'middle-east',
    682:'gulf',784:'gulf',512:'gulf',887:'gulf',414:'gulf',48:'gulf',634:'gulf',
    364:'iran',
    356:'south-asia',586:'south-asia',144:'south-asia',50:'south-asia',524:'south-asia',64:'south-asia',462:'south-asia',
    398:'central-asia',860:'central-asia',417:'central-asia',762:'central-asia',795:'central-asia',4:'central-asia',
    156:'east-asia',392:'east-asia',410:'east-asia',158:'east-asia',496:'east-asia',408:'east-asia',
    764:'southeast-asia',704:'southeast-asia',360:'southeast-asia',458:'southeast-asia',608:'southeast-asia',104:'southeast-asia',116:'southeast-asia',418:'southeast-asia',96:'southeast-asia',626:'southeast-asia',
    36:'oceania',554:'oceania',242:'oceania',882:'oceania',776:'oceania',598:'oceania',90:'oceania',585:'oceania',584:'oceania'
  };

  const selectedRegion = S.wkSelectedRegion || null;
  const sel = selectedRegion ? REGIONS[selectedRegion] : null;

  const wkHowOpen = S.wkHowOpen || false;

  return `<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#160f08 0%,#1a1208 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.3) 0%,rgba(8,4,2,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home',wkSelectedRegion:null})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #3a2010;border-radius:20px;color:#c06020;font-size:13px;padding:5px 12px;cursor:pointer;font-family:Georgia,serif;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🌍 World Kitchen</h1>
        <p style="margin:0 0 10px;font-size:13px;color:#e0d4b8;font-style:italic;">Explore cuisines from every corner of the globe</p>
        <div style="display:flex;align-items:center;background:rgba(15,8,4,0.85);border:1px solid #3a2010;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:#c06020;margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search cuisines, dishes, countries…"
            oninput="set({wkSearch:this.value})"
            value="${S.wkSearch||''}"
            style="flex:1;background:none;border:none;outline:none;color:#e0d4b8;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.wkSearch?`<button onclick="set({wkSearch:''})" style="background:none;border:none;color:#e0d4b8;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- ══ HOW IT WORKS ══ -->
    <div style="background:#160f08;border-bottom:1px solid #2a1a10;padding:12px 16px;">
      <button onclick="set({wkHowOpen:!S.wkHowOpen})"
        style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;font-family:Georgia,serif;">
        ${wkHowOpen?'▲':'▼'} How it works
      </button>
      ${wkHowOpen?`
        <div onclick="set({wkHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
        <div style="position:relative;z-index:10;background:#100a04;border:1px solid #2a1a10;border-radius:10px;padding:12px;margin-top:8px;font-size:13px;color:#e0d4b8;line-height:1.6;">
          <strong style="color:#c06020;">1. Tap 🇿🇦 South African Kitchens</strong> — explore our own rich food heritage.<br>
          <strong style="color:#c06020;">2. Tap any country on the map</strong> — discover that region's cuisine.<br>
          <strong style="color:#c06020;">3. Browse dishes</strong> — tap any recipe for full ingredients and method.<br>
          <span style="color:#e0d4b8;font-size:13px;">Going global — new cuisines added regularly.</span>
        </div>
      `:''}
    </div>

    <!-- SA Kitchens feature tile -->
    <div style="padding:12px 16px 0;max-width:600px;margin:0 auto;">
      <div onclick="set({screen:'worldkitchen',wkScreen:'sa'})"
           style="background:linear-gradient(135deg,#1a1208,#0f2a20);border:1px solid #c06020;border-radius:12px;padding:16px;margin-bottom:4px;cursor:pointer;display:flex;align-items:center;gap:12px;">
        <div style="font-size:28px;">🇿🇦</div>
        <div style="flex:1;">
          <div style="font-size:15px;color:#40d090;font-weight:bold;margin-bottom:2px;">South African Kitchens</div>
          <div style="font-size:13px;color:#c06020;">Boerekos · Cape Malay · Indian · Zulu · Sotho · Xhosa</div>
          <div style="font-size:13px;color:#e0d4b8;margin-top:3px;font-style:italic;">"The flavours that built this country"</div>
        </div>
        <div style="color:#c06020;font-size:18px;">›</div>
      </div>
    </div>

    <!-- Map label -->
    <div style="padding:12px 16px 6px;max-width:600px;margin:0 auto;">
      <div style="font-size:13px;letter-spacing:0.08em;color:#e0d4b8;text-transform:uppercase;margin-bottom:6px;">Around the world — tap a country</div>
    </div>

    <!-- Eckert IV Map -->
    <div style="padding:0 16px;max-width:600px;margin:0 auto;">
      <div id="wk-map-wrap" style="background:#1a1208;border:1px solid #2a1a10;border-radius:12px;overflow:hidden;position:relative;">
        <svg id="wk-map-svg" viewBox="0 0 680 360" style="width:100%;height:auto;display:block;cursor:pointer;"></svg>
      </div>
    </div>

    <!-- Region info panel -->
    <div style="padding:10px 16px;max-width:600px;margin:0 auto;">
      <div id="wk-panel" style="background:#161210;border:1px solid #2a1a10;border-radius:12px;padding:14px 16px;min-height:64px;">
        ${sel ? `
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span style="font-size:18px;">${sel.emoji}</span>
            <div>
              <div style="font-size:15px;color:#f5e8cc;font-weight:bold;">${sel.title}</div>
              <div style="font-size:13px;color:#e0d4b8;">${sel.sub}</div>
            </div>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px;">
            ${sel.dishes.map(d=>`<span style="font-size:13px;padding:4px 9px;border-radius:14px;border:1px solid #3a2010;color:#e0d4b8;background:#160f08;">${d}</span>`).join('')}
          </div>
          <button onclick="set({screen:'worldkitchen',wkScreen:'country',wkCountry:'${selectedRegion}',wkSelectedRegion:'${selectedRegion}'})"
                  style="width:100%;padding:10px;border-radius:8px;background:#1a1208;border:2px solid #c06020;color:#40d090;font-size:13px;cursor:pointer;font-family:Georgia,serif;">
            Explore ${sel.title} cuisine →
          </button>
        ` : `<p style="font-size:13px;color:#e0d4b8;text-align:center;padding:8px 0;margin:0;">Tap any country to explore its cuisine</p>`}
      </div>
    </div>

    <!-- More to Explore -->
    <div style="padding:4px 16px 24px;max-width:600px;margin:0 auto;">
      <div style="font-size:13px;letter-spacing:0.08em;color:#e0d4b8;text-transform:uppercase;margin-bottom:8px;">More to explore</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
        ${[
          {key:'north-africa',   e:'🏺', label:'North Africa',       countries:'Morocco · Egypt · Tunisia'},
          {key:'west-africa',    e:'🌶', label:'West Africa',         countries:'Nigeria · Ghana · Senegal'},
          {key:'east-africa',    e:'🫙', label:'East Africa',         countries:'Ethiopia · Kenya · Tanzania'},
          {key:'scandinavia',    e:'🐟', label:'Scandinavia',         countries:'Sweden · Norway · Denmark'},
          {key:'eastern-europe', e:'🥘', label:'Eastern Europe',      countries:'Russia · Poland · Ukraine'},
          {key:'central-asia',   e:'🐑', label:'Central Asia',        countries:'Kazakhstan · Uzbekistan'},
          {key:'southeast-asia', e:'🌿', label:'Southeast Asia',      countries:'Thailand · Vietnam · Indonesia'},
          {key:'oceania',        e:'🌺', label:'Oceania & Pacific',   countries:'Aus · NZ · Hawaii · Fiji'},
        ].map(r=>`
          <div onclick="setQuiet({wkSelectedRegion:'${r.key}',wkScreen:'country',wkCountry:'${r.key}'});draw();window.scrollTo(0,0);"
               style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:10px;cursor:pointer;">
            <div style="font-size:18px;margin-bottom:4px;">${r.e}</div>
            <div style="font-size:13px;color:#e0d4b8;font-weight:bold;margin-bottom:2px;">${r.label}</div>
            <div style="font-size:13px;color:#e0d4b8;line-height:1.4;">${r.countries}</div>
          </div>
        `).join('')}
      </div>
    </div>

  </div>`
}


function initWKMap(){
  (function(){
  // COUNTRY_TO_REGION already in scope
    const REGION_COLORS = {
      'north-america':'#5DCAA5','mexico':'#1D9E75','caribbean':'#97C459',
      'south-america-n':'#97C459','south-america-s':'#639922',
      'western-europe':'#AFA9EC','southern-europe':'#7F77DD','eastern-europe':'#CECBF6','scandinavia':'#534AB7',
      'turkey':'#F0997B',
      'north-africa':'#EF9F27','west-africa':'#FAC775','east-africa':'#BA7517','southern-africa':'#854F0B',
      'middle-east':'#F5C4B3','gulf':'#F0997B','iran':'#D85A30',
      'south-asia':'#CECBF6','central-asia':'#B5D4F4',
      'east-asia':'#5DCAA5','southeast-asia':'#9FE1CB',
      'oceania':'#85B7EB'
    };

    const W=680,H=360;
    const svg = document.getElementById('wk-map-svg');
    if(!svg) return;

    // Draw ocean
    const ocean = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
    ocean.setAttribute('cx',W/2); ocean.setAttribute('cy',H/2);
    ocean.setAttribute('rx',W/2-2); ocean.setAttribute('ry',H/2-2);
    ocean.setAttribute('fill','#0d2a3a');
    svg.appendChild(ocean);

    const loadingText = document.createElementNS('http://www.w3.org/2000/svg','text');
    loadingText.setAttribute('x',W/2); loadingText.setAttribute('y',H/2);
    loadingText.setAttribute('text-anchor','middle'); loadingText.setAttribute('fill','#3a2010');
    loadingText.setAttribute('font-size','13'); loadingText.textContent = 'Loading map…';
    svg.appendChild(loadingText);

    Promise.all([
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r=>r.json()),
      new Promise(res=>{
        const s=document.createElement('script');
        s.src='https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js';
        s.onload=res; document.head.appendChild(s);
      }),
      new Promise(res=>{
        const s=document.createElement('script');
        s.src='https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js';
        s.onload=()=>{
          const s2=document.createElement('script');
          s2.src='https://cdn.jsdelivr.net/npm/d3-geo-projection@4/dist/d3-geo-projection.min.js';
          s2.onload=res; document.head.appendChild(s2);
        };
        document.head.appendChild(s);
      })
    ]).then(([world])=>{
      svg.removeChild(loadingText);
      const projection = d3.geoEckert4().scale(100).translate([W/2,H/2]);
      const path = d3.geoPath().projection(projection);
      const countries = topojson.feature(world, world.objects.countries);

      // Graticule
      const grat = document.createElementNS('http://www.w3.org/2000/svg','path');
      grat.setAttribute('d', path(d3.geoGraticule()()));
      grat.setAttribute('fill','none'); grat.setAttribute('stroke','#0f2a20'); grat.setAttribute('stroke-width','0.3');
      svg.appendChild(grat);

      // Countries
      countries.features.forEach(feature=>{
        const region = window.COUNTRY_TO_REGION[+feature.id];
        const col = region ? REGION_COLORS[region] : '#2a1a10';
        const d = path(feature);
        if(!d) return;
        const p = document.createElementNS('http://www.w3.org/2000/svg','path');
        p.setAttribute('d', d);
        p.setAttribute('fill', col);
        p.setAttribute('stroke','#160f08');
        p.setAttribute('stroke-width','0.4');
        p.style.cursor = region ? 'pointer' : 'default';
        p.style.transition = 'opacity 0.15s';
        if(region){
          p.addEventListener('mouseenter',()=>{ p.style.opacity='0.7'; });
          p.addEventListener('mouseleave',()=>{ p.style.opacity='1'; });
          p.addEventListener('click',()=>{
            // Update state and panel inline without full redraw
            window._wkTapRegion && window._wkTapRegion(region);
          });
        }
        svg.appendChild(p);
      });

      // Outline
      const outline = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
      outline.setAttribute('cx',W/2); outline.setAttribute('cy',H/2);
      outline.setAttribute('rx',W/2-2); outline.setAttribute('ry',H/2-2);
      outline.setAttribute('fill','none'); outline.setAttribute('stroke','#3a2010'); outline.setAttribute('stroke-width','0.8');
      svg.appendChild(outline);

    }).catch(()=>{
      loadingText.textContent='Map unavailable offline';
    });

    // Inline panel update (no full redraw — keeps map rendered)
  const REGIONS_JS = window.REGIONS;
    window._wkTapRegion = function(regionKey){
      S.wkSelectedRegion = regionKey;
      const data = REGIONS_JS[regionKey];
      if(!data) return;
      const panel = document.getElementById('wk-panel');
      if(!panel) return;
      panel.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <span style="font-size:18px;">${data.emoji}</span>
          <div>
            <div style="font-size:15px;color:#f5e8cc;font-weight:bold;">${data.title}</div>
            <div style="font-size:13px;color:#e0d4b8;">${data.sub}</div>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px;">
          ${data.dishes.map(d=>`<span style="font-size:13px;padding:4px 9px;border-radius:14px;border:1px solid #3a2010;color:#e0d4b8;background:#160f08;">${d}</span>`).join('')}
        </div>
        <button onclick="setQuiet({wkScreen:'country',wkCountry:'${regionKey}'});draw();window.scrollTo(0,0);"
                style="width:100%;padding:10px;border-radius:8px;background:#1a1208;border:2px solid #c06020;color:#40d090;font-size:13px;cursor:pointer;font-family:Georgia,serif;">
          Explore ${data.title} cuisine →
        </button>
      `;
    };
  })();
}


// ── SA KITCHENS SCREEN ───────────────────────────────────────────
function wkSAKitchensHTML(){
  const cultures = [
    { key:'boerekos',   emoji:'🫕', name:'Boerekos',   desc:'Potjiekos · Boerewors · Melktert · Vetkoek · Braaibroodjie', feel:'This is what grandmothers made on cold winter Sundays — you can almost smell the potjie from the driveway' },
    { key:'capemalay',  emoji:'🌶', name:'Cape Malay',  desc:'Bobotie · Sosaties · Koeksisters · Samosas · Denningvleis', feel:'Warm spice, sweet apricot, a kitchen that smells like somewhere faraway and completely like home at the same time' },
    { key:'indian',     emoji:'🍛', name:'Indian',      desc:'Bunny chow · Lamb curry · Biryani · Rotis · Samoosas',      feel:'Loud, generous, layered — the kind of food that makes you loosen your belt and stay another hour' },
    { key:'zulu',       emoji:'🥁', name:'Zulu',        desc:'Umngqusho · Uphuthu · Umleqwa · Amasi · Isijingi',         feel:'Honest and ancient — food that has fed people through hard work and celebration for hundreds of years' },
    { key:'sotho',      emoji:'🌿', name:'Sotho',       desc:'Samp · Merogo · Seswaa · Bogobe · Dikgobe',                feel:'Quiet, earthy, the kind of meal that settles you — makes you think of open land and unhurried evenings' },
    { key:'xhosa',      emoji:'🤝', name:'Xhosa',       desc:'Umngqusho · Umxhaxha · Umleqwa · Amasi · Uphuthu',        feel:'Deeply rooted — food tied to celebration, coming of age, family gatherings that go on all afternoon' },
  ];

  const active = S.wkSACulture || null;

  return `<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">
    <div style="background:#1a1208;border-bottom:1px solid #3a2010;padding:14px 20px;">
      <button onclick="setQuiet({wkScreen:null});draw()" style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;">← World Kitchen</button>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
        <span style="font-size:22px;">🇿🇦</span>
        <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;margin:0;">South African Kitchens</h1>
      </div>
      <p style="font-size:13px;color:#e0d4b8;margin:0;font-style:italic;">The flavours that built this country</p>
    </div>

    <div style="padding:16px;max-width:600px;margin:0 auto;">
      ${cultures.map(c=>`
        <div onclick="setQuiet({wkSACulture:'${c.key}'})"
             style="background:${active===c.key?'#1a1208':'#161210'};border:1px solid ${active===c.key?'#c06020':'#2a1a10'};border-radius:12px;padding:14px;margin-bottom:8px;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:${active===c.key?'10px':'0'};">
            <span style="font-size:24px;">${c.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:15px;color:#f5e8cc;font-weight:bold;">${c.name}</div>
              <div style="font-size:13px;color:#e0d4b8;margin-top:2px;">${c.desc}</div>
            </div>
            <div style="color:#c06020;font-size:16px;">${active===c.key?'▾':'›'}</div>
          </div>
          ${active===c.key?`
            <div style="border-top:1px solid #2a1a10;padding-top:10px;">
              <p style="font-size:13px;color:#e0d4b8;font-style:italic;margin:0 0 10px;">${c.feel}</p>
              <button onclick="event.stopPropagation();setQuiet({wkScreen:'country',wkCountry:'${c.key}',wkSACulture:'${c.key}'});draw();window.scrollTo(0,0);"
                      style="width:100%;padding:10px;border-radius:8px;background:#1a1208;border:2px solid #c06020;color:#40d090;font-size:13px;cursor:pointer;font-family:Georgia,serif;">
                Explore ${c.name} recipes →
              </button>
            </div>
          `:''}
        </div>
      `).join('')}
    </div>
  </div>`;
}

// ── COUNTRY / REGION CUISINE SCREEN ─────────────────────────────
function wkCountryHTML(){
  const regionKey = S.wkCountry || S.wkSelectedRegion || 'southern-africa';

  // ── COUNTRIES BY REGION ──────────────────────────────────────────
  const COUNTRIES_BY_REGION = {
    'north-america':   [
      { id:'usa',    flag:'🇺🇸', name:'United States', feel:'Loud, generous, iconic — from BBQ smoke to New York deli' },
      { id:'canada', flag:'🇨🇦', name:'Canada',        feel:'Clean flavours, maple-kissed, built for cold winters' },
      { id:'mexico', flag:'🇲🇽', name:'Mexico',        feel:'Ancient, layered, smoky — one of the world\'s great cuisines' },
    ],
    'mexico':          [
      { id:'mexico',    flag:'🇲🇽', name:'Mexico',       feel:'Chilli, corn, chocolate — civilisation on a plate' },
      { id:'guatemala', flag:'🇬🇹', name:'Guatemala',    feel:'Rich stews, black beans, the taste of the Maya highlands' },
    ],
    'caribbean':       [
      { id:'jamaica',  flag:'🇯🇲', name:'Jamaica',     feel:'Jerk smoke, allspice heat, rum in everything good' },
      { id:'trinidad', flag:'🇹🇹', name:'Trinidad',    feel:'Doubles at dawn, curry on the road, roti that fixes everything' },
      { id:'cuba',     flag:'🇨🇺', name:'Cuba',        feel:'Black beans and rice, slow-cooked pork, café Cubano at midnight' },
    ],
    'south-america-n': [
      { id:'brazil',   flag:'🇧🇷', name:'Brazil',      feel:'Feijoada on Saturdays, churrasco always, açaí at the market' },
      { id:'colombia', flag:'🇨🇴', name:'Colombia',    feel:'Arepas for breakfast, bandeja paisa for when you\'re very hungry' },
      { id:'peru',     flag:'🇵🇪', name:'Peru',        feel:'Ceviche, causa, anticuchos — one of the world\'s rising cuisines' },
    ],
    'south-america-s': [
      { id:'argentina', flag:'🇦🇷', name:'Argentina',  feel:'Asado is a religion, empanadas are a way of life' },
      { id:'chile',     flag:'🇨🇱', name:'Chile',      feel:'Cazuela, pastel de choclo, wine with everything' },
    ],
    'western-europe':  [
      { id:'france',   flag:'🇫🇷', name:'France',      feel:'Butter, wine, technique — the language the world cooks in' },
      { id:'italy',    flag:'🇮🇹', name:'Italy',       feel:'Simple ingredients, enormous pride, never skip the pasta' },
      { id:'spain',    flag:'🇪🇸', name:'Spain',       feel:'Tapas culture, saffron rice, ham that took three years to cure' },
      { id:'germany',  flag:'🇩🇪', name:'Germany',     feel:'Hearty, honest, built for cold evenings and good beer' },
      { id:'england',  flag:'🏴‍☠️', name:'England',          feel:'Pies, roasts, fish & chips — comfort food with centuries of history' },
      { id:'scotland', flag:'🏴‍☠️', name:'Scotland',         feel:'Haggis, Cullen skink, cranachan — wild, peaty, deeply satisfying' },
      { id:'wales',    flag:'🏴‍☠️', name:'Wales',            feel:'Cawl, Welsh rarebit, bara brith — Celtic soul food' },
      { id:'nireland', flag:'🇮🇪', name:'Northern Ireland',  feel:'Ulster fry, soda bread, champ — hearty food from hard land' },
    ],
    'southern-europe': [
      { id:'italy',    flag:'🇮🇹', name:'Italy',       feel:'Pasta, olive oil, the smell of Sunday ragù' },
      { id:'greece',   flag:'🇬🇷', name:'Greece',      feel:'Lemon, oregano, lamb — the original Mediterranean diet' },
      { id:'portugal', flag:'🇵🇹', name:'Portugal',    feel:'Bacalhau a hundred ways, pastéis de nata at 7am' },
    ],
    'eastern-europe':  [
      { id:'russia',   flag:'🇷🇺', name:'Russia',      feel:'Borscht, blini, black bread — warming food for cold lands' },
      { id:'poland',   flag:'🇵🇱', name:'Poland',      feel:'Pierogi, żurek, bigos — honest food from honest hands' },
      { id:'ukraine',  flag:'🇺🇦', name:'Ukraine',     feel:'Rich borsch, varenyky, the sunflower fields on your plate' },
    ],
    'scandinavia':     [
      { id:'sweden',  flag:'🇸🇪', name:'Sweden',      feel:'Meatballs, gravlax, husmanskost — cosy food for dark winters' },
      { id:'norway',  flag:'🇳🇴', name:'Norway',      feel:'Salmon, Bergen fish soup, lefse by the fire' },
      { id:'denmark', flag:'🇩🇰', name:'Denmark',     feel:'Smørrebrød, æbleskiver, new Nordic before it had a name' },
    ],
    'turkey':          [
      { id:'turkey',  flag:'🇹🇷', name:'Turkey',      feel:'Meze, kebab, simit at dawn — where East meets West on a plate' },
    ],
    'north-africa':    [
      { id:'morocco',  flag:'🇲🇦', name:'Morocco',     feel:'Tagine steam, ras el hanout, mint tea poured from a height' },
      { id:'egypt',    flag:'🇪🇬', name:'Egypt',       feel:'Ful medames at breakfast, koshary for lunch, 7000 years of wheat' },
      { id:'tunisia',  flag:'🇹🇳', name:'Tunisia',     feel:'Harissa heat, brik, the scent of jasmine and olive oil' },
    ],
    'west-africa':     [
      { id:'nigeria',  flag:'🇳🇬', name:'Nigeria',     feel:'Jollof wars aside — egusi, suya, pepper soup that fixes everything' },
      { id:'ghana',    flag:'🇬🇭', name:'Ghana',       feel:'Jollof on point, fufu and light soup, kelewele at night' },
      { id:'senegal',  flag:'🇸🇳', name:'Senegal',     feel:'Thieboudienne, yassa, the best fish on the West African coast' },
    ],
    'east-africa':     [
      { id:'ethiopia', flag:'🇪🇹', name:'Ethiopia',    feel:'Injera and wot, no cutlery needed, ancient flavours, ancient land' },
      { id:'kenya',    flag:'🇰🇪', name:'Kenya',       feel:'Nyama choma, ugali, chai — the taste of the savannah' },
      { id:'tanzania', flag:'🇹🇿', name:'Tanzania',    feel:'Zanzibar spices, pilau rice, coconut on everything near the coast' },
    ],
    'southern-africa': [
      { id:'sa',       flag:'🇿🇦', name:'South Africa', feel:'The whole world in one kitchen — braai is the language' },
      { id:'mozambique',flag:'🇲🇿', name:'Mozambique', feel:'Peri-peri prawns, coconut curries, the Indian Ocean on your lips' },
      { id:'zimbabwe', flag:'🇿🇼', name:'Zimbabwe',    feel:'Sadza and nyama, roadside braai, the smell of home' },
    ],
    'middle-east':     [
      { id:'lebanon',  flag:'🇱🇧', name:'Lebanon',     feel:'Meze for hours, kibbeh, tabbouleh — the most generous table' },
      { id:'israel',   flag:'🇮🇱', name:'Israel',      feel:'Shakshuka, hummus wars, sabich — modern and ancient at once' },
      { id:'jordan',   flag:'🇯🇴', name:'Jordan',      feel:'Mansaf, maqluba, Bedouin hospitality on a plate' },
    ],
    'gulf':            [
      { id:'uae',      flag:'🇦🇪', name:'UAE',          feel:'Luqaimat, shawarma, machboos — desert heat, golden spice' },
      { id:'saudi',    flag:'🇸🇦', name:'Saudi Arabia', feel:'Kabsa, jareesh, dates and coffee before everything else' },
    ],
    'iran':            [
      { id:'iran',     flag:'🇮🇷', name:'Iran (Persia)', feel:'Ghormeh sabzi, fesenjan, the most sophisticated rice on earth' },
    ],
    'south-asia':      [
      { id:'india',    flag:'🇮🇳', name:'India',        feel:'A billion kitchens, infinite spice — no two meals the same' },
      { id:'pakistan', flag:'🇵🇰', name:'Pakistan',     feel:'Nihari, biryani, karahi — bold, generous, fragrant' },
      { id:'srilanka', flag:'🇱🇰', name:'Sri Lanka',    feel:'Coconut, cinnamon, hoppers at dawn — an island of flavour' },
    ],
    'central-asia':    [
      { id:'uzbekistan',flag:'🇺🇿', name:'Uzbekistan',  feel:'Plov, samsa, shashlik — the Silk Road on a plate' },
      { id:'kazakhstan',flag:'🇰🇿', name:'Kazakhstan',  feel:'Beshbarmak, kumiss, nomadic food built for long journeys' },
    ],
    'east-asia':       [
      { id:'china',   flag:'🇨🇳', name:'China',        feel:'Eight cuisines, ten thousand dishes — a lifetime isn\'t enough' },
      { id:'japan',   flag:'🇯🇵', name:'Japan',        feel:'Precision, seasonality, umami — the world\'s most refined food culture' },
      { id:'korea',   flag:'🇰🇷', name:'Korea',        feel:'Kimchi, bibimbap, dakgalbi — fermented, fiery, unforgettable' },
    ],
    'southeast-asia':  [
      { id:'thailand',    flag:'🇹🇭', name:'Thailand',     feel:'Sweet, sour, salty, spicy — all four in every mouthful' },
      { id:'vietnam',     flag:'🇻🇳', name:'Vietnam',      feel:'Pho at 6am, bánh mì for lunch, the freshest herbs in the world' },
      { id:'indonesia',   flag:'🇮🇩', name:'Indonesia',    feel:'Nasi goreng, rendang, 17,000 islands of spice' },
      { id:'malaysia',    flag:'🇲🇾', name:'Malaysia',     feel:'Nasi lemak, char kway teow — Chinese, Malay, Indian as one' },
    ],
    'oceania':         [
      { id:'australia', flag:'🇦🇺', name:'Australia',   feel:'Barramundi, Vegemite, multicultural BBQ culture' },
      { id:'newzealand',flag:'🇳🇿', name:'New Zealand', feel:'Lamb, green-lipped mussels, hāngī — Māori and modern' },
      { id:'fiji',      flag:'🇫🇯', name:'Fiji',        feel:'Kokoda, lovo, cassava — Pacific sunshine on a plate' },
    ],
  };

  // ── RECIPES BY COUNTRY ───────────────────────────────────────────
  const COUNTRY_RECIPES = {
    'france': {
      starters:  ['French Onion Soup','Soupe au Pistou','Vichyssoise','Gougères','Pâté de Campagne'],
      mains:     ['Coq au Vin','Beef Bourguignon','Bouillabaisse','Cassoulet','Duck Confit'],
      sides:     ['Ratatouille','Gratin Dauphinois','Haricots Verts','Pommes Sarladaises','Tian Provençal'],
      desserts:  ['Crème Brûlée','Tarte Tatin','Mousse au Chocolat','Madeleine','Profiteroles'],
      trivia:'French cuisine became the world standard in the 17th century under Louis XIV. The concept of a restaurant was invented in Paris in 1765. The brigade system — with a head chef leading stations — was designed by Auguste Escoffier and is still used globally today.',
      grows:'Wheat, grapes, sunflowers, lavender, truffles, walnuts, oysters along the Atlantic coast',
      cookStyle:'Traditionally the woman of the house, la cuisinière — but professional kitchens were historically all-male until the late 20th century'
    },
    'italy': {
      starters:  ['Bruschetta al Pomodoro','Burrata with Tomatoes','Caprese Salad','Arancini','Carpaccio di Manzo'],
      mains:     ['Spaghetti Carbonara','Osso Buco','Lasagne al Forno','Pizza Margherita','Risotto alla Milanese'],
      sides:     ['Panzanella','Caponata','Fagioli all\'Uccelletto','Gremolata Cauliflower','Patate al Rosmarino'],
      desserts:  ['Tiramisu','Panna Cotta','Cannoli','Affogato','Torta Caprese'],
      trivia:'Italy has 26 UNESCO-recognised food traditions. Each region guards its recipes fiercely — a Bolognese in Naples is considered an insult. The fork only became common eating utensil in Italy in the 11th century, centuries before the rest of Europe adopted it.',
      grows:'Tomatoes, olives, grapes, durum wheat, truffles, chestnuts, artichokes, lemons in the south',
      cookStyle:'Deeply maternal — la nonna (grandmother) is the keeper of all real recipes. No grandmother writes things down.'
    },
    'japan': {
      starters:  ['Miso Soup','Edamame','Agedashi Tofu','Gyoza','Chawanmushi'],
      mains:     ['Tonkatsu','Chicken Teriyaki','Beef Sukiyaki','Miso Glazed Salmon','Katsu Curry'],
      sides:     ['Steamed Rice','Tamagoyaki','Kinpira Gobo','Cucumber Sunomono','Hijiki Seaweed Salad'],
      desserts:  ['Mochi Ice Cream','Matcha Cheesecake','Dorayaki','Anmitsu','Warabi Mochi'],
      trivia:'Japan has more Michelin-starred restaurants than any other country. Itadakimasu — said before eating — means "I humbly receive." The tradition of ichiju sansai (one soup, three sides) has structured Japanese meals for over 1,000 years.',
      grows:'Rice, tea, yuzu, wasabi, mushrooms (shiitake, maitake), seaweed, soy, sweet potato',
      cookStyle:'Traditionally women in the home; male chefs dominate professional settings. The itamae (master chef) trains for years just to learn to cut fish correctly.'
    },
    'india': {
      starters:  ['Samosas','Palak Paneer Tikki','Dahi Puri','Papdi Chaat','Tandoori Mushrooms'],
      mains:     ['Butter Chicken','Lamb Rogan Josh','Dal Makhani','Paneer Tikka Masala','Prawn Masala'],
      sides:     ['Jeera Rice','Garlic Naan','Aloo Gobi','Chana Masala','Raita'],
      desserts:  ['Gulab Jamun','Kheer','Kulfi','Jalebi','Rasmalai'],
      trivia:'India has no single cuisine — it has dozens. The Mughal emperors brought Persian techniques in the 16th century that created korma, biryani and kebab. Spices from India drove the entire Age of Exploration; Vasco da Gama sailed to Calicut in 1498 specifically for black pepper.',
      grows:'Rice, wheat, lentils, spices (cardamom, turmeric, cumin, chilli), mangoes, tea, coconut',
      cookStyle:'Historically women at home — recipes passed orally, never written. Professional cooking (especially tandoor) was traditionally male.'
    },
    'china': {
      starters:  ['Har Gow Dim Sum','Spring Rolls','Scallion Pancakes','Century Egg with Tofu','Dan Dan Noodles'],
      mains:     ['Peking Duck','Kung Pao Chicken','Mapo Tofu','Sweet and Sour Pork','Hong Shao Rou (Red-braised Pork)'],
      sides:     ['Fried Rice','Stir-fried Bok Choy','Steamed Egg Custard','Smashed Cucumber Salad','Lotus Root Stir-fry'],
      desserts:  ['Egg Tarts','Tang Yuan','Sesame Balls','Mango Pudding','Red Bean Soup'],
      trivia:'Chinese cuisine is divided into eight major schools — Cantonese, Sichuan, Hunan, Shandong, Jiangsu, Zhejiang, Fujian and Anhui — each as different from each other as French is from Italian. The wok, chopsticks and soy sauce were all Chinese inventions that changed global cooking.',
      grows:'Rice, wheat, soy, tea, cabbage, taro, lotus, lychee, longan, countless varieties of mushroom',
      cookStyle:'Historically male in professional and imperial kitchens; women cooked at home. The concept of wok hei — breath of the wok — is a skill chefs train years to master.'
    },
    'thailand': {
      starters:  ['Tom Yum Soup','Som Tam (Green Papaya Salad)','Satay with Peanut Sauce','Crying Tiger Beef Salad','Miang Kham'],
      mains:     ['Pad Thai','Green Curry','Massaman Curry','Larb Moo','Khao Pad (Thai Fried Rice)'],
      sides:     ['Sticky Rice','Jasmine Rice','Stir-fried Morning Glory','Thai Omelette','Cucumber Relish'],
      desserts:  ['Mango Sticky Rice','Khanom Buang','Tub Tim Grob','Coconut Ice Cream','Khao Niao Mamuang'],
      trivia:'Thai cooking balances four fundamental flavours simultaneously: sweet, sour, salty and spicy — usually in every single dish. The mortar and pestle (khrok) is the soul of Thai cooking; a Thai grandmother\'s mortar is among her most prized possessions.',
      grows:'Rice, chillis, lemongrass, galangal, kaffir lime, coconut, mango, papaya, jackfruit, jasmine',
      cookStyle:'Predominantly women, especially in the home. Street food vendors are often female. The royal court cuisine of Thailand was developed entirely by palace women.'
    },
    'morocco': {
      starters:  ['Harira Soup','Zaalouk (Smoked Aubergine)','Briouats','Bastilla Fingers','Taktouka'],
      mains:     ['Lamb Tagine with Preserved Lemon','Chicken Tagine with Olives','Couscous Royale','Mrouzia','Pastilla au Poulet'],
      sides:     ['Couscous','Chermoula Roasted Vegetables','Mechouia Salad','Carrot and Cumin Salad','Msemen Flatbread'],
      desserts:  ['Orange Blossom Fruit Salad','Chebakia','Bastilla au Lait','Kaab el Ghazal','Sellou'],
      trivia:'Morocco sits at the crossroads of Arab, Berber, Andalusian and sub-Saharan African cuisines. The preserved lemon — left in salt for weeks — is one of the world\'s oldest preservation techniques. Mint tea is never optional; refusing it is a cultural offence.',
      grows:'Olives, argan (most valuable oil in the world), oranges, saffron, almonds, dates, wheat, courgettes',
      cookStyle:'Entirely women, traditionally. A Moroccan bride\'s cooking skill was considered her most important quality. Tajines cook slowly over clay charcoal stoves called kanouns.'
    },
    'nigeria': {
      starters:  ['Puff Puff','Akara (Bean Fritters)','Suya Beef Skewers','Pepper Soup','Moi Moi'],
      mains:     ['Jollof Rice','Egusi Soup with Fufu','Afang Soup','Ogbono Soup','Fried Rice Lagos Style'],
      sides:     ['Eba (Cassava Fufu)','Pounded Yam','Fried Plantain','Jollof Spaghetti','Coleslaw'],
      desserts:  ['Puff Puff','Chin Chin','Coconut Candy','Fried Plantain with Ice Cream','Zobo Jelly'],
      trivia:'The Jollof Wars — Nigeria vs Ghana — may be the most passionate food debate on the African continent. Nigerians claim their jollof is smokier (party jollof, cooked over wood fire) and the definitive version. Nigerian pepper soup varies by tribe: Igbo, Yoruba and Hausa versions all taste entirely different.',
      grows:'Cassava (world\'s 2nd largest producer), yams, sorghum, millet, cocoa, palm oil, groundnuts',
      cookStyle:'Almost exclusively women in the home. Cooking for others is an act of love and status. A woman who cannot cook is considered unprepared for marriage in many communities.'
    },
    'ethiopia': {
      starters:  ['Azifa (Lentil Salad)','Timatim Salata','Sambusa','Kitfo (Spiced Tartare)','Gomen (Collard Greens)'],
      mains:     ['Doro Wot (Chicken Stew)','Tibs (Sautéed Lamb)','Misir Wot (Red Lentils)','Shiro Wot','Beyaynetu (Fasting Platter)'],
      sides:     ['Injera','Ayib (Fresh Cheese)','Tikil Gomen','Yatakilt Kilkil','Ful (Fava Beans)'],
      desserts:  ['Himbasha Bread','Ye\'abesha Dabo','Baklava (influenced)','Fresh Fruit Platter','Spiced Coffee Ceremony'],
      trivia:'Ethiopia has one of the oldest food cultures on earth. Injera — the spongy sourdough flatbread — serves as both plate and utensil. Eating together from one plate (gursha) is a sign of deep respect; feeding someone with your own hand is the highest act of friendship. Coffee originated in Ethiopia (Kaffa region).',
      grows:'Teff (unique to Ethiopia), coffee, enset (false banana), sorghum, barley, berbere spices, lentils',
      cookStyle:'Women exclusively in traditional homes. The coffee ceremony — roasting, grinding, brewing — is performed entirely by women and can take over an hour.'
    },
    'sa': {
      starters:  ['Boerewors Rolls','Biltong Board','Butternut Soup','Springbok Carpaccio','Snoek Pâté'],
      mains:     ['Braai Mixed Grill','Potjiekos','Bobotie','Cape Malay Curry','Karoo Lamb Chops'],
      sides:     ['Pap & Tomato Bredie','Braaibroodjie','Coleslaw','Chakalaka','Beetroot Salad'],
      desserts:  ['Malva Pudding','Melktert','Koeksisters','Peppermint Crisp Tart','Amarula Cheesecake'],
      trivia:'South Africa has 11 official languages and just as many distinct food traditions. The braai is constitutionally protected — there is an actual National Braai Day (24 September). Biltong was invented by the Voortrekkers as a preservation method and predates jerky by centuries.',
      grows:'Citrus, wine grapes, deciduous fruit, rooibos, fynbos honey, maize, sugarcane, macadamia nuts',
      cookStyle:'Braai is male territory. Kitchen cooking spans all genders. Umngqusho (samp and beans) — Madiba\'s favourite — has been cooked by Xhosa women for hundreds of years.'
    },
    'usa': {
      starters:  ['Clam Chowder','Buffalo Wings','Shrimp Cocktail','Loaded Potato Skins','Cobb Salad'],
      mains:     ['Texas BBQ Brisket','New England Lobster Roll','Southern Fried Chicken','Chicago Deep Dish Pizza','New York Strip Steak'],
      sides:     ['Mac and Cheese','Cornbread','Coleslaw','Baked Beans','Sweet Potato Casserole'],
      desserts:  ['New York Cheesecake','Apple Pie','Banana Pudding','Key Lime Pie','Pecan Pie'],
      trivia:'American cuisine is really dozens of regional cuisines: Cajun Louisiana, Tex-Mex, New England seafood, Southern soul food, Pacific Northwest salmon culture. Hot dogs were introduced by German immigrants; pizza by Italians; tacos by Mexicans. Almost nothing "American" started in America.',
      grows:'Corn, soy, wheat, beef, potatoes, cranberries, blueberries, almonds, avocado (California)',
      cookStyle:'Varies enormously by region and culture. BBQ pitmasters are traditionally male. Soul food was created by Black women in the American South under conditions of extreme hardship.'
    },
    'brazil': {
      starters:  ['Coxinha','Pão de Queijo','Camarão na Moranga','Bolinho de Bacalhau','Farofa Starter'],
      mains:     ['Feijoada','Churrasco Mixed Grill','Moqueca de Camarão','Frango com Quiabo','Picanha na Brasa'],
      sides:     ['White Rice','Farofa','Feijão Tropeiro','Collard Greens (Couve)','Vinagrete Salsa'],
      desserts:  ['Brigadeiro','Pudim de Leite','Bolo de Cenoura','Quindim','Romeu e Julieta'],
      trivia:'Feijoada — black bean stew with pork — is Brazil\'s national dish, traditionally eaten on Saturdays. It was originally created by enslaved Africans using the pork cuts discarded by slave owners (ears, tails, trotters). Brazilians consume more açaí than the rest of the world combined.',
      grows:'Coffee (world\'s largest producer), sugarcane, soy, beef, cassava, açaí, passion fruit, papaya',
      cookStyle:'Women dominate home cooking. Churrasco (BBQ) is male territory. The churrasqueiro tends the fire and the meat; the women handle everything else.'
    },
    'lebanon': {
      starters:  ['Hummus bi Tahini','Fattoush','Tabbouleh','Warak Dawali (Stuffed Vine Leaves)','Labneh with Za\'atar'],
      mains:     ['Kafta bi Siniyeh','Kibbeh Nayyeh','Lamb Ouzi','Chicken Shawarma','Samkeh Harra (Spicy Fish)'],
      sides:     ['Lebanese Rice','Moujaddara','Batata Harra','Loubieh bi Zayt','Khobz (Flatbread)'],
      desserts:  ['Knafeh','Baklava','Awamat','Maamoul','Hrisseh'],
      trivia:'Lebanese cuisine is among the most widely spread in the world, carried by diaspora communities to every continent. The concept of meze — many small dishes shared at table — embodies Lebanese hospitality philosophy: no guest leaves hungry. Za\'atar, sumac and pomegranate molasses are distinctly Lebanese flavours.',
      grows:'Olives, grapes, figs, citrus, thyme, cedar nuts, mulberries, apricots on mountain terraces',
      cookStyle:'Women in the home; men in professional kitchens and at the mangal (grill). A Lebanese mother\'s kibbeh recipe is her most guarded secret.'
    },
    'argentina': {
      starters:  ['Empanadas','Provoleta (Grilled Cheese)','Matambre Arrollado','Humita en Chala','Choripán'],
      mains:     ['Asado Mixto','Milanesa a la Napolitana','Locro','Guiso Carrero','Bife de Chorizo'],
      sides:     ['Chimichurri','Papas Fritas','Ensalada Mixta','Arroz con Leche','Provoleta'],
      desserts:  ['Alfajores','Dulce de Leche Pancakes','Facturas','Pastafrola','Chocotorta'],
      trivia:'Argentina consumes more beef per capita than almost any country on earth. The asado is a social ritual, not just a meal — it can last four to six hours. The asador (person managing the fire) is given enormous respect. Dulce de leche appears in or alongside almost every Argentine dessert.',
      grows:'Soy, corn, wheat, sunflowers, wine grapes (Malbec), beef, yerba maté, lemons',
      cookStyle:'Asado is exclusively male territory. Inside the home, women cook. Handing over the asado tongs to another man without permission is a serious social transgression.'
    },
    'england': {
      starters:  ['Scotch Eggs','Prawn Cocktail','Stilton & Walnut Salad','Potted Shrimp','Mushrooms on Toast'],
      mains:     ['Beef & Ale Pie','Roast Beef with Yorkshire Pudding','Fish & Chips','Chicken Tikka Masala','Bangers & Mash'],
      sides:     ['Roast Potatoes','Mushy Peas','Bubble & Squeak','Cauliflower Cheese','Minted New Potatoes'],
      desserts:  ['Sticky Toffee Pudding','Eton Mess','Bread & Butter Pudding','Bakewell Tart','Victoria Sponge'],
      trivia:"England's most popular dish is Chicken Tikka Masala — a curry adapted by Bangladeshi immigrants in Glasgow in the 1970s. The full English breakfast (eggs, bacon, beans, sausage, toast, tomato, mushrooms) is so culturally ingrained it's simply called 'a fry-up.' Fish and chips was the original fast food, introduced in the 1860s during the Industrial Revolution.",
      grows:'Wheat, barley, apples (Cox, Bramley), strawberries, Brussels sprouts, root vegetables, dairy cattle',
      cookStyle:'Historically women at home. The pub landlady and the tearoom hostess are iconic female cooking figures. Professional kitchens were male-dominated until the late 20th century.'
    },
    'scotland': {
      starters:  ['Cullen Skink','Smoked Salmon with Oatcakes','Cock-a-Leekie Soup','Haggis Bon Bons','Arbroath Smokie Pâté'],
      mains:     ['Haggis, Neeps & Tatties','Venison Casserole','Cullen Skink Pie','Beef Stovies','Scottish Smoked Salmon Fishcake'],
      sides:     ['Clapshot','Rumbledethumps','Chappit Tatties','Neeps (Turnip)','Scottish Oatcakes'],
      desserts:  ['Cranachan','Clootie Dumpling','Scottish Tablet','Dundee Cake','Deep-Fried Mars Bar'],
      trivia:"Burns Night (25 January) celebrates Robert Burns with haggis, whisky, and the Address to a Haggis — recited before eating. Haggis is sheep offal (liver, heart, lungs) minced with oatmeal, onion and spices, cooked in a sheep's stomach. Scotland produces some of the world's finest beef (Aberdeen Angus), salmon, and single malt whisky. The deep-fried Mars Bar was invented in Stonehaven in 1992.",
      grows:'Oats, barley (for whisky), soft fruits (raspberries, strawberries), potatoes, heather honey, seafood',
      cookStyle:'Traditionally women at home. Burns Night carving of the haggis is ceremonially male. Gillies and estate gamekeepers have a long tradition of game preparation.'
    },
    'wales': {
      starters:  ['Leek & Potato Soup','Laverbread on Toast','Glamorgan Sausages','Cockle Chowder','Welsh Rarebit'],
      mains:     ['Cawl (Lamb Stew)','Welsh Lamb with Rosemary','Bara Lawr (Laverbread Cakes)','Welsh Beef Casserole','Tatws Pum Munud'],
      sides:     ['Bara Brith (Fruit Loaf)','Welsh Cakes','Leek Gratin','Colcannon (Welsh style)','Pickled Red Cabbage'],
      desserts:  ['Welsh Cakes with Butter','Bara Brith','Teisen Lap (Moist Cake)','Apple Cake','Honey Ice Cream'],
      trivia:"Wales has its own ancient food traditions entirely distinct from England. Laverbread — seaweed boiled to a paste — has been eaten on the Welsh coast for centuries and is called the 'Welsh caviar.' The leek is the national symbol of Wales, worn on St David's Day (1 March). Cawl, the national dish, is a slow-cooked lamb and root vegetable broth with a history going back to the 14th century.",
      grows:'Lamb (famous Welsh Mountain sheep), leeks, seaweed (laver), oats, apples, dairy, honey',
      cookStyle:'Deeply maternal Celtic tradition. The farmhouse kitchen is central to Welsh identity. Women have always been the keepers of cawl and Welsh cake recipes.'
    },
    'nireland': {
      starters:  ['Potato & Leek Soup','Smoked Mackerel Pâté','Champ Croquettes','Ulster Chowder','Wheaten Bread with Butter'],
      mains:     ['Ulster Fry','Irish Stew with Soda Bread','Boxty (Potato Pancakes)','Belfast Bacon & Cabbage','Dulse & Yellow Man'],
      sides:     ['Champ (Mashed Potato with Spring Onion)','Soda Bread','Wheaten Bread','Colcannon','Bashed Neeps'],
      desserts:  ['Fifteens','Porter Cake','Barmbrack','Apple & Blackberry Crumble','Yellowman Toffee'],
      trivia:"Northern Ireland's food identity is fiercely distinct. The Ulster Fry differs from the Full English — it includes soda bread and potato bread, never beans. Dulse (dried seaweed) and Yellowman (honeycomb toffee) have been sold together at the Auld Lammas Fair in Ballycastle since the 17th century. The Great Famine (1845–1852) shaped Irish food culture permanently — potato dependency, and the deep emotional weight placed on having enough to eat.",
      grows:'Potatoes, oats, barley, dairy, beef, lamb, seaweed, blackberries, apples',
      cookStyle:'Strong maternal tradition. Soda bread baked daily in the home. The griddle (iron pan over fire) was the original Northern Irish cooker — no oven needed.'
    },
    'spain': {
      starters:  ['Patatas Bravas','Pan con Tomate','Jamón Ibérico Board','Gambas al Ajillo','Croquetas de Jamón'],
      mains:     ['Paella Valenciana','Cocido Madrileño','Fabada Asturiana','Bacalao al Pil-Pil','Cordero al Chilindrón'],
      sides:     ['Patatas Bravas','Escalivada','Pimientos de Padrón','Gazpacho','Pan de Cristal'],
      desserts:  ['Crema Catalana','Churros con Chocolate','Tarta de Santiago','Arroz con Leche','Tocino de Cielo'],
      trivia:"Spain has the world's most bars per capita. Tapas culture began as a practical measure — bartenders placed a slice of bread or ham over sherry glasses to keep flies out (tapar = to cover). Jamón Ibérico de Bellota, from pigs fed exclusively on acorns, takes 3–4 years to cure and is among the world's most expensive foods. Saffron from La Mancha is the world's most expensive spice by weight.",
      grows:'Olives (world leader), grapes, saffron, tomatoes, peppers, almonds, citrus, jamón pigs',
      cookStyle:'Regional and proud — a Catalan cook and an Andalusian cook are cooking entirely different cuisines. Tapas culture means cooking is communal and social, not just domestic.'
    },
    'greece': {
      starters:  ['Tzatziki with Pita','Taramasalata','Spanakopita','Dolmades','Saganaki (Fried Cheese)'],
      mains:     ['Moussaka','Kleftiko (Slow Lamb)','Gemista (Stuffed Vegetables)','Stifado (Beef Stew)','Grilled Whole Sea Bream'],
      sides:     ['Greek Salad','Horiatiki','Gigantes Plaki','Fasolakia (Green Beans)','Htipiti (Feta Dip)'],
      desserts:  ['Baklava','Loukoumades','Galaktoboureko','Revani','Portokalopita (Orange Cake)'],
      trivia:"Greek cuisine is one of the oldest in the world — Apicius, the Roman cookbook, drew heavily from Greek food. The Mediterranean diet (olive oil, fish, legumes, vegetables, moderate wine) was modelled largely on Greek eating habits and is UNESCO-recognised. Greeks eat the most cheese per capita of any nation — mostly feta. The word 'symposium' originally meant a wine-drinking party with food.",
      grows:'Olives, grapes, figs, honey (Hymettus honey is legendary), tomatoes, aubergine, citrus, pistachios',
      cookStyle:'Grandmothers (yiayia) are the absolute authority. No yiayia writes recipes — everything is done by feel, smell and memory passed through watching.'
    },
    'germany': {
      starters:  ['Leberknödelsuppe (Liver Dumpling Soup)','Flammkuchen','Obatzda (Cheese Spread)','Maultaschen','Kartoffelpuffer'],
      mains:     ['Sauerbraten','Schweinshaxe (Pork Knuckle)','Wiener Schnitzel','Rinderroulade','Bratwurst with Sauerkraut'],
      sides:     ['Sauerkraut','Kartoffelknödel (Potato Dumplings)','Spätzle','Red Cabbage (Rotkohl)','Pretzel Bread'],
      desserts:  ['Black Forest Cake','Apfelstrudel','Bienenstich','Lebkuchen','Kaiserschmarrn'],
      trivia:"Germany has over 1,500 different varieties of beer and 300 different types of bread — both of which are considered cultural heritage. The Christmas market (Weihnachtsmarkt) tradition began in Germany in the 14th century. Oktoberfest is technically a Bavarian tradition, not all-German — Bavaria considers itself a distinct food culture. German bakers train for 3 years as apprentices before qualifying.",
      grows:'Barley (for beer), rye, wheat, apples, asparagus (Spargel is a national obsession), mustard, hops',
      cookStyle:'Strong tradition of both male butchers/bakers/brewers and female home cooks. Hausmannskost (home cooking) is a term of deep respect in German food culture.'
    },
    'jamaica': {
      starters:  ['Jerk Chicken Wings','Ackee & Saltfish Fritters','Pepperpot Soup','Festival (Fried Dumplings)','Stamp & Go (Salt Fish Fritters)'],
      mains:     ['Jerk Chicken','Oxtail Stew','Curried Goat','Brown Stew Chicken','Escovitch Fish'],
      sides:     ['Rice & Peas','Festival','Fried Plantain','Bammy (Cassava Flatbread)','Callaloo'],
      desserts:  ['Rum Cake','Gizzada','Toto (Coconut Cake)','Sweet Potato Pudding','Grater Cake'],
      trivia:"Jerk cooking originated with the Maroons — escaped enslaved Africans who hid in the Blue Mountains and developed slow-cooking techniques using pimento wood (allspice tree) to avoid smoke detection. Ackee, the national fruit, is toxic when unripe and was introduced from West Africa. Jamaica produces some of the world's finest rum and Blue Mountain coffee, considered among the most expensive in the world.",
      grows:'Ackee, scotch bonnet peppers, allspice (pimento), sugar cane, coffee (Blue Mountain), coconut, yam',
      cookStyle:'Women dominate home and restaurant cooking. The jerk pan (oil drum BBQ) is male territory. Grandmothers hold the real recipes — especially for rum cake and black cake at Christmas.'
    },
    'peru': {
      starters:  ['Ceviche Clásico','Causa Limeña','Anticuchos (Grilled Beef Heart)','Tiradito','Choclo con Queso'],
      mains:     ['Lomo Saltado','Ají de Gallina','Seco de Cordero','Carapulcra','Arroz con Leche'],
      sides:     ['Arroz Blanco','Papas a la Huancaína','Chaufa (Fried Rice)','Frijoles','Patacones'],
      desserts:  ['Suspiro Limeño','Mazamorra Morada','Picarones','Arroz con Leche','Turrón de Doña Pepa'],
      trivia:"Peru has more varieties of potato than any country on earth — over 3,000 native varieties grown in the Andes. Ceviche (raw fish cured in lime juice) was being eaten by coastal peoples 2,000 years ago. Peru is experiencing a global fine-dining renaissance — Lima now has several of the world's top-50 restaurants. The Inca civilisation created freeze-dried potato (chuño) that could last years — one of history's first preserved foods.",
      grows:'Potatoes (3,000+ varieties), corn (250+ varieties), quinoa, amaranth, ají peppers, purple maize, lucuma',
      cookStyle:'Women traditionally. Street food vendors (huariques) are mostly female. The cevichero (ceviche maker) is a respected male profession at the market.'
    },
    'kenya': {
      starters:  ['Mandazi (Fried Doughnuts)','Kachumbari Salad','Samosas','Maharagwe (Bean Soup)','Coconut Soup'],
      mains:     ['Nyama Choma (Grilled Meat)','Ugali with Sukuma Wiki','Pilau Rice','Mutura (Blood Sausage)','Fish from Lake Victoria'],
      sides:     ['Ugali','Sukuma Wiki (Kale)','Irio (Peas & Potato Mash)','Githeri (Corn & Beans)','Chapati'],
      desserts:  ['Mandazi','Mahamri','Kashata (Coconut Candy)','Kaimati (Sweet Dumplings)','Fresh Mango'],
      trivia:"Nyama choma — roasted goat or beef — is Kenya's social institution. You don't eat nyama choma alone; it's eaten standing around a grill with friends, hands only, with Tusker beer. Ugali (maize porridge stiff enough to hold its shape) is eaten daily by most Kenyans and is used as a scoop for stews and vegetables. Chai in Kenya is always masala chai — spiced, milky, sweet, boiled together in one pot.",
      grows:'Tea (Kenya is the world\'s largest exporter of black tea), coffee, maize, beans, mango, avocado, sukuma wiki',
      cookStyle:'Women cook at home. Nyama choma is male territory — the butcher chops and grills. The jiko (small charcoal stove) is the engine of the Kenyan kitchen.'
    },
    'vietnam': {
      starters:  ['Gỏi Cuốn (Fresh Spring Rolls)','Chả Giò (Fried Spring Rolls)','Bánh Xèo (Sizzling Crepe)','Phở Gà (Chicken Pho)','Gỏi Đu Đủ (Papaya Salad)'],
      mains:     ['Phở Bò (Beef Noodle Soup)','Bánh Mì','Bún Bò Huế','Cơm Tấm (Broken Rice)','Cá Kho Tộ (Caramelised Fish)'],
      sides:     ['Steamed Jasmine Rice','Rau Muống (Water Spinach)','Dưa Cải (Pickled Mustard)','Bánh Cuốn','Fresh Herb Plate'],
      desserts:  ['Chè Ba Màu (Three-Colour Dessert)','Bánh Flan','Chè Chuối (Banana Dessert)','Kem Dừa (Coconut Ice Cream)','Bánh Chuối'],
      trivia:"Phở began as a street food in Hanoi in the early 20th century, influenced by both Chinese noodle soups and French pot-au-feu. The French colonial period (1887–1954) left an indelible mark — the bánh mì baguette, café sua da (iced coffee with condensed milk) and crème caramel (bánh flan) are all French-Vietnamese fusions. Vietnamese cuisine uses more fresh herbs than almost any other — a plate of mint, basil, perilla, and coriander accompanies most dishes.",
      grows:'Rice, coffee (world\'s 2nd largest producer), black pepper, cashews, dragon fruit, lychee, coconut',
      cookStyle:'Women dominate all cooking — home and street. The bánh mì lady at 6am and the phở vendor at midnight are both almost exclusively female.'
    },
    'korea': {
      starters:  ['Japchae (Glass Noodles)','Pajeon (Spring Onion Pancake)','Sundubu Jjigae','Gyeran Mari (Egg Roll)','Kongnamul (Bean Sprout Salad)'],
      mains:     ['Bibimbap','Dakgalbi (Spicy Chicken)','Doenjang Jjigae','Samgyeopsal (Pork Belly BBQ)','Kimchi Jjigae'],
      sides:     ['Kimchi','Steamed Rice','Japchae','Spinach Namul','Kongnamul Muchim'],
      desserts:  ['Hotteok (Sweet Pancake)','Bingsu (Shaved Ice)','Tteok (Rice Cakes)','Yakgwa','Sikhye (Rice Punch)'],
      trivia:"Korea is the world capital of fermentation — kimchi alone has over 200 regional varieties, and Koreans eat approximately 2kg of kimchi per person per month. The kimchi-making tradition (kimjang) is UNESCO Intangible Cultural Heritage. Korean BBQ (samgyeopsal, galbi) is a communal table experience — you grill your own meat. The Korean Wave (Hallyu) has made Korean food globally trendy: Korean fried chicken, tteokbokki, and ramyeon are now worldwide phenomena.",
      grows:'Rice, Korean chilli (gochugaru), garlic, ginger, doenjang (fermented soy), sesame, kimchi cabbage, barley',
      cookStyle:'Women have traditionally controlled fermentation and home cooking. Korean grandmothers (halmoni) are considered the ultimate cooking authority — especially for kimchi and jjigae.'
    },
    'turkey': {
      starters:  ['Mercimek Çorbası (Red Lentil Soup)','Sigara Böreği','Haydari (Yoghurt Dip)','Ezme (Tomato Dip)','Midye Dolma (Stuffed Mussels)'],
      mains:     ['İskender Kebab','Kuzu Tandır (Slow Lamb)','İmam Bayıldı','Mantı (Dumplings)','Hünkâr Beğendi'],
      sides:     ['Pilav (Rice)','Cacık (Yoghurt Cucumber)','Patlıcan Salatası','Bulgur Pilavi','Simit'],
      desserts:  ['Baklava','Künefe','Sütlaç (Rice Pudding)','Lokum (Turkish Delight)','Aşure (Noah\'s Pudding)'],
      trivia:"Ottoman palace cuisine (the Topkapi kitchens fed 10,000 people daily) was one of history's most sophisticated food systems, with master cooks specialising in single dishes. Turkey sits at the crossroads of Europe, Central Asia and the Middle East — its cuisine reflects all three. Yoghurt is Turkish in origin (the word comes from the Turkish yoğurmak). İskender kebab was invented in Bursa in 1867 by İskender Efendi.",
      grows:'Hazelnuts (world\'s largest producer), figs, apricots, cherries, tea (Black Sea coast), wheat, saffron, pistachios',
      cookStyle:'Women at home; male kebab masters (ustalar) in professional settings. The döner ustası is a highly respected male profession. Simit vendors are predominantly male.'
    },
    'indonesia': {
      starters:  ['Gado-Gado (Peanut Salad)','Soto Ayam (Chicken Soup)','Martabak Telur','Bakso (Meatball Soup)','Lumpia Semarang'],
      mains:     ['Nasi Goreng','Rendang','Sate Ayam with Peanut Sauce','Mie Goreng','Opor Ayam'],
      sides:     ['Steamed Rice','Tempeh Goreng','Tahu Goreng','Sambal','Emping Crackers'],
      desserts:  ['Es Cendol','Klepon (Pandan Rice Balls)','Dadar Gulung','Kolak','Es Campur'],
      trivia:"Indonesia is an archipelago of 17,000 islands with over 5,000 distinct traditional recipes. Rendang — slow-cooked beef in coconut and spices — has been voted the world's most delicious food in multiple international polls. Tempeh was invented in Indonesia centuries ago and is the world's oldest known fermented soy product. Indonesia is the world's largest producer of nutmeg and cloves — spices that caused Europeans to colonise the islands in the 16th century.",
      grows:'Rice, palm oil, coconut, cloves, nutmeg, vanilla, coffee, tea, rubber, cacao, chilli',
      cookStyle:'Women are the domestic cooks. Street food (warung) is both male and female. Rendang is traditionally cooked by women for ceremonial occasions — a single pot can take 8 hours.'
    },
    'australia': {
      starters:  ['Prawn Cocktail','Smoked Salmon Blini','Barramundi Ceviche','Vegemite Toast','Avocado on Sourdough'],
      mains:     ['Barramundi with Lemon Butter','Aussie BBQ Mixed Grill','Lamb Chops with Mint Jelly','Meat Pie','Chicken Parmigiana'],
      sides:     ['Potato Salad','Coleslaw','Beetroot Salad','Damper Bread','Sweet Potato Mash'],
      desserts:  ['Pavlova','Tim Tam Slam','Lamingtons','Anzac Biscuits','Wattleseed Ice Cream'],
      trivia:"Australia's cuisine is genuinely multicultural — waves of immigration from Britain, Italy, Greece, China, Vietnam and Lebanon have all left permanent marks. Vegemite (yeast extract spread) is the national food icon, eaten on buttered toast and considered an acquired taste by everyone who didn't grow up with it. The pavlova — meringue with cream and fruit — is simultaneously claimed by both Australia and New Zealand as a national dish, causing diplomatic tension.",
      grows:'Beef (huge cattle stations), lamb, wheat, barley, macadamia nuts, wattleseed, finger lime, Kakadu plum',
      cookStyle:'BBQ is sacred and gender-neutral in modern Australia. The tradition of the Sunday roast came from British settlers. Indigenous food (bush tucker) is experiencing a revival in fine dining.'
    },
    'egypt': {
      starters:  ['Ful Medames','Koshari (Street Bowl)','Ta\'meya (Fava Bean Falafel)','Baba Ghanoush','Fattoush'],
      mains:     ['Koshari','Hamam Mahshi (Stuffed Pigeon)','Molokheya','Grilled Kofta','Fattah (Lamb with Rice)'],
      sides:     ['Eish Baladi (Flatbread)','Salata Baladi','Tahini','Dukkah','Rice with Vermicelli'],
      desserts:  ['Om Ali (Egyptian Bread Pudding)','Basbousa','Konafa','Luqmat al-Qadi','Zalabia'],
      trivia:"Egypt is where bread was invented — ancient Egyptians were baking leavened bread as early as 3000 BC, using wild yeast from the Nile. Ful medames (stewed fava beans with olive oil, lemon and cumin) has been Egypt's breakfast for over 2,000 years — it appears in records from Roman times. Koshari — rice, lentils, macaroni, chickpeas and crispy onions — is the ultimate Cairo street food, a product of Ottoman, Italian and Indian influences meeting at the crossroads of the world.",
      grows:'Wheat, dates, figs, pomegranates, fava beans, sugar cane, citrus, rice along the Nile Delta',
      cookStyle:'Women cook at home; male street vendors dominate koshari, ful and ta\'meya stalls. Egyptian food is rooted in peasant tradition — the fellah (farmer) kitchen is the source of most national dishes.'
    },
    'sweden': {
      starters:  ['Gravlax with Mustard Dill','Räkmacka (Prawn Open Sandwich)','Janssons Frestelse','Inlagd Sill (Pickled Herring)','Toast Skagen'],
      mains:     ['Swedish Meatballs with Lingonberry','Pyttipanna','Köttbullar med Gräddsås','Lax i Ugn (Baked Salmon)','Raggmunk (Potato Pancakes)'],
      sides:     ['Hasselbackspotatis','Rödkål (Red Cabbage)','Ärtsoppa (Pea Soup)','Kroppkakor (Potato Dumplings)','Knäckebröd'],
      desserts:  ['Semla (Cardamom Bun)','Kladdkaka (Sticky Chocolate Cake)','Kanelbulle (Cinnamon Bun)','Prinsesstårta','Ostkaka'],
      trivia:"Sweden gave the world the smörgåsbord — a spread of cold and hot dishes served buffet-style that originated in 16th-century Sweden as an appetiser table before the main meal. Fika (a coffee break with something sweet, usually a kanelbulle) is a cultural institution so ingrained that Swedish companies legally protect employee fika time. IKEA's Swedish meatballs are served in 50+ countries and may be the world's most widely eaten Swedish dish.",
      grows:'Lingonberries, cloudberries, dill, rye, barley, dairy, reindeer (Sámi north), herring, crayfish',
      cookStyle:'Strong home cooking tradition, gender-neutral in modern Sweden. The husmanskost (home-style cooking) tradition is as valued as fine dining. New Nordic cuisine (Noma influence) has elevated Swedish food globally.'
    },
    'iran': {
      starters:  ['Ash-e Reshteh (Herb Noodle Soup)','Mast-o-Khiar (Yoghurt Cucumber)','Kashk-e Bademjan','Mirza Ghasemi','Salad Olivieh'],
      mains:     ['Ghormeh Sabzi','Fesenjan (Pomegranate Walnut Stew)','Chelow Kebab','Baghali Polo ba Mahiche','Zereshk Polo ba Morgh'],
      sides:     ['Chelow (Steamed Rice with Crust)','Salad Shirazi','Torshi (Pickles)','Lavash Bread','Mast-o-Musir'],
      desserts:  ['Sholeh Zard (Saffron Rice Pudding)','Bastani Sonnati (Saffron Ice Cream)','Zoolbia','Bamieh','Halva'],
      trivia:"Persian cuisine is arguably the most sophisticated rice culture in the world — the technique of creating tahdig (the golden crust at the bottom of the rice pot) is an art form that takes years to master. Iran is the birthplace of saffron cultivation and uses more saffron per capita than any other nation. The garden (pairidaeza in Old Persian) is the origin of the English word 'paradise' — Persian gardens were designed around food: fruit trees, fragrant herbs, flowing water.",
      grows:'Saffron (world\'s finest), pomegranates, pistachios, walnuts, barberries, dried limes, herbs, dates, rice',
      cookStyle:'Women exclusively in the home — Persian cooking is considered the highest expression of female artistry and hospitality. A Persian hostess is judged on the quality of her tahdig and the generosity of her table.'
    },
    'portugal': {
      starters:  ['Caldo Verde','Pastéis de Bacalhau','Ameijoas à Bulhão Pato','Chouriço Assado','Pica-Pau'],
      mains:     ['Bacalhau à Brás','Bacalhau com Natas','Cozido à Portuguesa','Frango Piri-Piri','Arroz de Pato'],
      sides:     ['Arroz de Tomate','Migas','Grelos Salteados','Açorda (Bread Stew)','Pão Alentejano'],
      desserts:  ['Pastel de Nata','Arroz Doce','Serradura','Leite Creme','Toucinho do Céu'],
      trivia:"Portugal has 365 official bacalhau (salt cod) recipes — one for every day of the year. Despite having no cod-fishing waters, Portugal has been the world's largest consumer of salt cod for 500 years, sourcing it from Norway and Newfoundland. The pastel de nata (custard tart) was invented by monks at Jerónimos Monastery in Lisbon before 1837. Piri-piri chilli was brought to Portugal by explorers from Africa — the name comes from Swahili.",
      grows:'Cork oak (world leader), olives, grapes (Port wine, Vinho Verde), citrus, figs, almonds, sardines',
      cookStyle:'Women in the home. The tasca (tavern) and tasquinha have historically been male spaces. Bacalhau preparation is considered an art — a good bacalhau cook is deeply respected.'
    },
    'russia': {
      starters:  ['Borscht','Solyanka','Okroshka (Cold Soup)','Blini with Sour Cream & Caviar','Olivye Salad'],
      mains:     ['Beef Stroganoff','Pelmeni (Dumplings)','Shashlik','Chicken Kiev','Plov (Uzbek-influenced Rice)'],
      sides:     ['Black Rye Bread','Buckwheat Kasha','Pickled Cucumbers','Smetana (Sour Cream)','Vinegret Salad'],
      desserts:  ['Medovik (Honey Cake)','Napoleon Cake','Paskha (Easter Cheesecake)','Kisel','Syrniki (Cottage Cheese Pancakes)'],
      trivia:"Russia spans 11 time zones — its food culture varies enormously from west to east. Borscht (beetroot soup) is fiercely claimed by both Russia and Ukraine as a national dish. Vodka comes from the Russian word for water (voda). During Soviet times, Stolovaya (canteen) food became the common eating experience — borscht, kotlety and kompot were eaten daily by millions. Caviar (sturgeon roe) from the Caspian Sea was once so abundant it was served to workers.",
      grows:'Wheat, rye, buckwheat, sunflowers, potatoes, cabbage, beets, berries, mushrooms from taiga forests',
      cookStyle:'Dacha (country house) cooking in summer is communal and celebrated. City cooking is female-dominated at home. Shashlik (BBQ) at the dacha is male territory.'
    },
    'poland': {
      starters:  ['Żurek (Sour Rye Soup)','Barszcz (Beetroot Soup)','Śledź (Pickled Herring)','Flaki (Tripe Soup)','Tatar (Beef Tartare)'],
      mains:     ['Bigos (Hunter\'s Stew)','Pierogi Ruskie','Kotlet Schabowy (Pork Schnitzel)','Gołąbki (Stuffed Cabbage)','Żeberka w Miodzie'],
      sides:     ['Kapusta (Sauerkraut)','Kasza Gryczana (Buckwheat)','Placki Ziemniaczane (Potato Pancakes)','Chleb (Rye Bread)','Ogórki Kiszone (Pickles)'],
      desserts:  ['Sernik (Cheesecake)','Makowiec (Poppy Seed Roll)','Szarlotka (Apple Cake)','Pączki (Doughnuts)','Piernik (Gingerbread)'],
      trivia:"Poland's bigos — a slow-cooked stew of sauerkraut, fresh cabbage and various meats — is the national dish. It improves over days of reheating and is traditionally made after hunting. Pierogi (stuffed dumplings) have been eaten in Poland since at least the 13th century. Poland is the world's largest apple exporter. Oscypek — a smoked sheep's milk cheese from the Tatra mountains — has protected European designation.",
      grows:'Apples (world leader), rye, wheat, potatoes, cabbage, beets, poppy seeds, mushrooms, dairy',
      cookStyle:'Strong female home-cooking tradition. Grandmother\'s pierogi recipe is among the most guarded in Polish culture. Bigos is often considered better when a man makes it — specifically after a hunt.'
    },
    'norway': {
      starters:  ['Rakfisk (Fermented Trout)','Gravlaks med Sennepssaus','Bergen Fish Soup','Fiskesuppe','Rekedip (Prawn Dip)'],
      mains:     ['Fårikål (Lamb & Cabbage)','Lutefisk','Kjøttkaker (Meatcakes)','Bacalao Norsk','Pinnekjøtt (Lamb Ribs)'],
      sides:     ['Lefse (Potato Flatbread)','Flatbrød','Rømmegrøt (Sour Cream Porridge)','Klippfisk','Surkal (Pickled Cabbage)'],
      desserts:  ['Krumkake','Multekrem (Cloudberry Cream)','Blotkake','Sirupsnipper','Julekake'],
      trivia:"Norway invented salmon farming — over 60% of the world's farmed salmon comes from Norwegian fjords. Lutefisk (dried cod rehydrated in lye) is so pungent it divides the nation — deeply loved in the north, politely avoided in the south. The Norwegian concept of friluftsliv (outdoor life) extends to food — eating outdoors, foraging, and cooking over fire are cultural values. Lefse is made on special rounded griddles passed down through generations.",
      grows:'Salmon, cod, herring, lamb, dairy, cloudberries, lingonberries, strawberries, barley',
      cookStyle:'Egalitarian — both men and women cook at home and professionally. Outdoor cooking (bål-mat, fire food) is gender-neutral and celebrated from childhood.'
    },
    'denmark': {
      starters:  ['Smørrebrød (Open Sandwich)','Æbleflæsk (Pork & Apple)','Tarteletter','Fiskesuppe','Rejer med Dild (Prawns with Dill)'],
      mains:     ['Stegt Flæsk med Persillesovs','Frikadeller (Meatballs)','Rødgrød med Fløde','Biksemad','Boller i Karry'],
      sides:     ['Rugbrød (Rye Bread)','Rødkål (Red Cabbage)','Brunede Kartofler (Caramelised Potatoes)','Agurkesalat','Flæskesteg'],
      desserts:  ['Æbleskiver','Rødgrød med Fløde','Drømmekage','Kanelsnegle (Cinnamon Rolls)','Hindbærsnitter'],
      trivia:"Denmark gave the world the open sandwich (smørrebrød) — rye bread topped with anything from pickled herring to roast beef, eaten with a knife and fork. The 'Danish pastry' (wienerbrød) was actually introduced by Austrian bakers in the 19th century. Noma (Copenhagen) revolutionised global cuisine from 2003 onwards, making foraged, fermented Nordic ingredients the most talked-about food movement in the world. Denmark consumes more pork per capita than almost any country.",
      grows:'Pork (Denmark has twice as many pigs as people), rye, barley, dairy, potatoes, strawberries, apples',
      cookStyle:'Hygge (cosiness) culture centres on home cooking and shared meals. Gender-neutral in modern Denmark. The smørrebrød lunch was historically prepared by women in offices for colleagues.'
    },
    'trinidad': {
      starters:  ['Doubles','Aloo Pie','Saheena (Spinach Fritter)','Shark & Bake','Phlourie (Split Pea Fritter)'],
      mains:     ['Curry Goat','Pelau (One-Pot Rice)','Stewed Oxtail','Crab & Dumplings','Buss Up Shut (Paratha Roti)'],
      sides:     ['Roti','Callaloo','Macaroni Pie','Fried Plantain','Channa (Chickpea Curry)'],
      desserts:  ['Black Cake (Rum Fruit Cake)','Toolum (Coconut Candy)','Kurma','Pone (Cassava Cake)','Mithai'],
      trivia:"Trinidad & Tobago has the most diverse cuisine in the Caribbean — African, Indian, Chinese, Spanish, French and British influences all coexist. Doubles (two bara flatbreads with curried chickpeas) is the national street food, eaten at 6am roadside, and was introduced by Indian indentured workers in the 19th century. Black cake — dark rum fruit cake soaked for months — is baked at Christmas and is the most emotionally significant food in Trinidadian culture.",
      grows:'Sugar cane, cocoa (Trinidad produces the world\'s finest Trinitario cacao), coconut, citrus, hot peppers',
      cookStyle:'Women at home and at doubles stalls. Indian food traditions (brought by indentured labourers from 1845) blended with African Creole cooking to create something entirely new.'
    },
    'colombia': {
      starters:  ['Ajiaco (Potato Soup)','Empanadas Colombianas','Patacones con Hogao','Arepa de Chócolo','Buñuelos'],
      mains:     ['Bandeja Paisa','Sancocho de Gallina','Ajiaco Bogotano','Lechona','Cazuela de Mariscos'],
      sides:     ['Arroz Blanco','Frijoles Rojos','Tostones','Hogao (Tomato Sauce)','Maduros (Fried Plantain)'],
      desserts:  ['Tres Leches','Postre de Natas','Arroz con Leche','Brevas con Arequipe','Oblea'],
      trivia:"The bandeja paisa — a tray piled with rice, beans, ground beef, chicharrón, fried egg, plantain, arepa and avocado — is Colombia's most filling meal and reflects the Antioqueño work ethic: eat enough to work hard all day. Arepas (corn cakes) are eaten daily across all classes and regions. Colombia is the world's largest exporter of cut flowers and the third-largest coffee producer — café de Colombia is considered among the finest in the world.",
      grows:'Coffee (Arabica, specialty grade), bananas, cut flowers, sugar cane, cocoa, panela, potatoes, yuca',
      cookStyle:'Women dominate home cooking. The abuela\'s sancocho recipe is the most valued culinary inheritance. Street food (fritanga, arepas, empanadas) is sold equally by men and women.'
    },
    'ghana': {
      starters:  ['Kelewele (Spiced Plantain)','Groundnut Soup','Kontomire Stew','Omo Tuo (Rice Balls)','Bean Cakes (Koose)'],
      mains:     ['Jollof Rice (Ghana style)','Fufu with Light Soup','Waakye','Banku with Tilapia','Groundnut Soup with Fufu'],
      sides:     ['Fufu','Banku (Fermented Corn)','Kenkey (Fermented Corn Dumpling)','Gari (Cassava Granules)','Fried Plantain'],
      desserts:  ['Chin Chin','Bofrot (Doughnuts)','Puff Puff','Coconut Candy','Groundnut Cake'],
      trivia:"Ghana invented the Jollof Wars rivalry — Ghanaians insist their jollof is superior to Nigerian jollof (more fragrant, less smoky). Waakye (rice and beans cooked together with sorghum leaves) is a beloved street breakfast eaten wrapped in banana leaves. Ghana produces 20% of the world's cocoa but historically exported it all — the country is now developing its own premium chocolate industry. Fufu is pounded — never stirred — and the rhythmic pounding sound is the heartbeat of the Ghanaian kitchen.",
      grows:'Cocoa (world top-3 producer), yams, cassava, plantain, groundnuts, palm oil, maize, shea',
      cookStyle:'Women cook at home and dominate market food stalls. The fufu-pounding is traditionally done by women using a large wooden mortar — it is physically demanding and rhythmically skilled.'
    },
    'senegal': {
      starters:  ['Thiébou Yapp (Meat Rice Soup)','Accara (Bean Fritters)','Pastels (Fried Pastry)','Caldou (Fish Broth)','Caakry (Millet Couscous Snack)'],
      mains:     ['Thiéboudienne (Fish & Rice)','Yassa Poulet','Mafé (Peanut Stew)','Domoda (Peanut Stew variation)','Ceebu Jen'],
      sides:     ['Riz au Gras','Attieké (Cassava Couscous)','Plantain Braisé','Pain Français','Salade Verte'],
      desserts:  ['Thiakry (Millet Dessert)','Ngalakh','Ceebu Yéré (Sweet Rice)','Beignets','Coconut Candy'],
      trivia:"Thiéboudienne — fish cooked with vegetables and rice in a rich tomato-fish broth — is considered the national dish of Senegal and one of West Africa's greatest culinary achievements. Senegalese hospitality (teranga) is legendary: a guest must never leave hungry. Dakar is the fine-dining capital of West Africa. Yassa (marinated onion and lemon chicken or fish) originated with the Casamance people and is now eaten across West Africa.",
      grows:'Peanuts (groundnuts — Senegal is a top producer), millet, sorghum, rice, fish (Atlantic coast), mangoes',
      cookStyle:'Women cook exclusively at home. The cooking woman (jabar) is central to family honour. Large pots of thiéboudienne require hours of preparation — a respected skill passed from mother to daughter.'
    },
    'tanzania': {
      starters:  ['Mchuzi wa Pweza (Octopus Curry)','Maandazi (Swahili Doughnuts)','Kachumbari','Vitumbua (Rice Cakes)','Coconut Soup'],
      mains:     ['Pilau ya Zanzibar','Mchuzi wa Samaki (Fish Curry)','Nyama Choma','Ugali na Maharage','Wali wa Nazi (Coconut Rice)'],
      sides:     ['Ugali','Wali (Rice)','Ndizi na Nyama (Plantain & Meat)','Maharagwe (Beans)','Chapati'],
      desserts:  ['Halwa ya Zanzibar (Spiced Halva)','Mandazi','Kaimati','Vitumbua','Fresh Coconut'],
      trivia:"Zanzibar (Tanzania's island) was the Spice Island that drove the entire global spice trade — cloves, black pepper, nutmeg and cinnamon grew here under Arab, Portuguese and British control. Zanzibar's food is a unique fusion of African, Arab, Indian and Persian influences accumulated over 1,000 years of trade. The Swahili coast cuisine uses coconut milk in almost everything — a testament to centuries of Indian Ocean trade. Stone Town's night food market (Forodhani) is one of Africa's most atmospheric.",
      grows:'Cloves (Zanzibar produces 75% of world supply), coconut, cassava, maize, rice, vanilla, seaweed',
      cookStyle:'Women at home. Zanzibar cooking is considered an art — spice blending is a skill passed from mother to daughter. Male fishermen supply the catch; women transform it.'
    },
    'uae': {
      starters:  ['Hummus bi Lahme','Fattoush','Stuffed Dates with Cream Cheese','Luqaimat (Sweet Dumplings)','Sambousek'],
      mains:     ['Machboos (Spiced Rice with Meat)','Harees (Wheat & Meat Porridge)','Al Harees','Shawarma','Grilled Hammour Fish'],
      sides:     ['Khubz (Flatbread)','Thareed (Bread Stew)','Saloona (Vegetable Stew)','Rice with Saffron','Raita'],
      desserts:  ['Luqaimat','Basbousa','Umm Ali','Muhallabia (Milk Pudding)','Khanfaroosh (Rice Flour Cakes)'],
      trivia:"The UAE's food scene is the most cosmopolitan in the Middle East — Dubai alone has restaurants representing over 200 nationalities. Traditional Emirati cuisine is modest and Bedouin-influenced: dates, camel milk, rice, fish and lamb. Dates are eaten before every meal — it is a religious and cultural tradition. Al Harees (slow-cooked wheat and meat) takes 12+ hours in a traditional clay pot buried in embers and is eaten at Ramadan and weddings.",
      grows:'Dates (UAE produces hundreds of varieties), fish (Arabian Gulf), camels (milk and meat), herbs grown in desert farms',
      cookStyle:'Traditional cooking is women\'s domain. Emirati grandmothers guard machboos and harees recipes. The modern UAE food industry is male-dominated and international.'
    },
    'pakistan': {
      starters:  ['Shami Kebab','Dahi Bhalle','Samosas','Haleem (Lentil Meat Porridge)','Chaat'],
      mains:     ['Nihari (Slow-Cooked Beef)','Biryani Karachi Style','Karahi Gosht','Seekh Kebab','Dal Makhani'],
      sides:     ['Naan','Roti','Raita','Chana Masala','Saag (Mustard Greens)'],
      desserts:  ['Gulab Jamun','Kheer','Gajar ka Halwa','Sheer Khurma','Barfi'],
      trivia:"Pakistan's Nihari — beef slow-cooked overnight in bone marrow and spices — was originally a pre-dawn breakfast for Mughal emperors in Delhi, eaten before the morning prayer. Karachi's street food scene is considered among Asia's finest. Pakistan produces the world's finest Basmati rice. The dhaba (roadside eatery) is the heartbeat of Pakistani food culture — simple, robust, cooked over fire on a tawa.",
      grows:'Wheat, rice (Basmati), mangoes (world top-5), sugarcane, cotton, onions, chilli, citrus',
      cookStyle:'Women at home exclusively in traditional households. Male dhaba cooks are the street food institution. The tandoor (clay oven) was historically shared by the neighbourhood.'
    },
    'malaysia': {
      starters:  ['Satay Ayam','Rojak (Fruit Salad)','Otak-Otak (Spiced Fish Cake)','Popiah (Fresh Spring Roll)','Prawn Crackers'],
      mains:     ['Nasi Lemak','Char Kway Teow','Rendang Ayam','Laksa Lemak','Nasi Kandar'],
      sides:     ['Steamed Rice','Roti Canai','Sambal Belacan','Acar (Pickled Vegetables)','Ikan Bilis (Anchovies)'],
      desserts:  ['Cendol','Kuih Lapis (Layered Cake)','Ondeh-Ondeh','Bubur Cha Cha','Sago Pudding'],
      trivia:"Malaysia's food scene is the most ethnically layered in Southeast Asia: Malay, Chinese, Indian and indigenous Orang Asli traditions coexist and constantly blend. Nasi lemak — coconut rice with sambal, anchovies, peanuts and egg — is eaten for breakfast, lunch and dinner. Char kway teow (stir-fried flat noodles) requires wok hei (breath of the wok) at extreme heat — a skill street vendors develop over decades. Mamak stalls (Indian-Muslim) are open 24 hours and are the social spine of Malaysian cities.",
      grows:'Palm oil (world top-2 producer), rubber, coconut, pineapple, durian, cacao, pepper, vanilla',
      cookStyle:'Home cooking is female. Mamak stall cooking is male. Chinese kopitiam (coffee shop) cooking is family-run. Nasi lemak vendors start cooking at 3am.'
    },
    'newzealand': {
      starters:  ['Whitebait Fritters','Green-lipped Mussel Chowder','Kina (Sea Urchin)','Pumpkin Soup','Smoked Fish Dip'],
      mains:     ['Hāngī (Earth Oven Feast)','Lamb Rack with Mint','Green-lipped Mussels with Wine','Venison with Kawakawa','Whitebait Omelette'],
      sides:     ['Kumara (Sweet Potato)','Rewena (Sourdough)','Fried Bread','Watercress Salad','Roasted Root Vegetables'],
      desserts:  ['Pavlova (claimed with Australia)','Hokey Pokey Ice Cream','Anzac Biscuits','Louise Cake','Afghan Biscuits'],
      trivia:"The hāngī — a Māori earth oven feast — involves heating stones in a pit fire, placing meat and vegetables in baskets, lowering them onto the hot stones, covering with earth and steaming for 3–4 hours. It is a communal event for celebrations and tangihanga (funerals). New Zealand lamb is considered the world's finest for flavour — grass-fed year-round in clean mountain pastures. The pavlova dispute with Australia remains diplomatically unresolved.",
      grows:'Lamb, dairy, kiwifruit (world leader), apples, wine grapes, cervena (farmed venison), Pacific oysters',
      cookStyle:'Māori cooking is communal — the hāngī is prepared by men and women together. Modern NZ cooking is relaxed and outdoor-oriented. The bach (holiday home) BBQ is a national institution.'
    },
    'boerekos': {
      starters:  ['Braaibroodjie','Biltong Board','Boerewors with Tomato Relish','Oxtail Soup','Sousboontjies'],
      mains:     ['Potjiekos (Lamb & Vegetable Stew)','Boerewors with Tomato Relish','Tomato Bredie','Bobotie','Oxtail Stew','Chicken Pie (Hoenderpastei)','Frikkadels (Meatballs)','Herderspastei (Shepherd\'s Pie)','Cabbage Bredie (Koolbredie)'],
      sides:     ['Yellow Rice with Raisins','Roosterkoek','Potato Bake (Aartappelgereg)','Sousboontjies (Sweet-Sour Green Beans)','Braai Broodjies'],
      desserts:  ['Malva Pudding','Milk Tart (Melktert)','Pumpkin Fritters (Pampoenkoekies)','Koeksisters','Peppermint Crisp Tart','Date Loaf','Baked Custard','Soetkoekies (Ginger Biscuits)','Buttermilk Rusks (Beskuit)','Hertzoggie','Mosbolletjie Bread'],
      drinks:    ['Homemade Ginger Beer','Karringmelk (Buttermilk Drink)'],
      trivia:'Boerekos (farmer\'s food) is the backbone of Afrikaner food culture, born from trekboer hardship and the Great Trek. Potjiekos — slow-cooked in a cast-iron pot over coals — originated with the Voortrekkers who carried their black three-legged pots across the continent. Koeksisters were introduced to the Cape in the 17th century and every farm family guarded their own recipe. The braai is the great unifier — on 24 September (Heritage Day), millions of South Africans fire up the grid.',
      grows:'Maize, wheat, deciduous fruit, wine grapes, rooibos, fynbos honey, pumpkin, sunflowers, deciduous stone fruit in the Boland',
      cookStyle:'The kitchen was the ouma\'s domain — recipes passed by watching, never written down. The braai is male territory. Potjiekos is traditionally the man\'s pot. Beskuit (rusks) are baked in enormous batches every autumn.'
    },
    'capemalay': {
      starters:  ['Samoosas','Sosaties','Pickled Fish'],
      mains:     ['Bobotie','Cape Malay Chicken Curry','Denningvleis (Tangy Lamb Stew)','Tomato Bredie','Chicken Breyani','Lamb Breyani','Snoek Curry','Green Bean Bredie (Snyboontjies)','Waterblommetjie Bredie','Frikkadels'],
      sides:     ['Cape Malay Yellow Rice','Flaky Roti','Tomato-Onion Sambal'],
      desserts:  ['Koesisters (Cape Malay style)','Milk Tart','Boeber (Vermicelli Pudding)','Hertzoggie','Date Balls','Peppermint Crisp Tart'],
      trivia:'Cape Malay cuisine is one of the oldest and most layered food cultures in South Africa, born from the forced migration of enslaved people from the Indonesian archipelago, India, Sri Lanka and East Africa to the Cape Colony from the 17th century onward. Bobotie — now considered a national dish — dates to 1609 and was brought by slaves from Batavia. The Bo-Kaap neighbourhood in Cape Town remains the living heart of this cuisine. The flavour profile — warm spice, sweet dried fruit, tangy vinegar — is unlike anything else in the world.',
      grows:'Snoek (seasonal, from the Atlantic), waterblommetjies (foraged from dams in spring), apricots, raisins, dried fruit — all central to Cape Malay cooking',
      cookStyle:'Historically and still today — women. The Cape Malay kitchen is the most matriarchal food tradition in South Africa. Recipes are passed through daughters. Koesisters are made by women early Sunday mornings for church.'
    },
    'indian': {
      starters:  ['Durban Samosas','Chilli Bites (Bhajia)','Masala Chips','Seekh Kebabs'],
      mains:     ['Bunny Chow','Durban Chicken Curry','Durban Mutton Curry','Lamb Biryani','Sugar Bean Curry','Durban Fish Curry','Sugar Beans & Potato Curry','Vegetable Biryani','Prawn Curry','Aloo Curry (Spicy Potato)','Dhal Curry'],
      sides:     ['Durban Roti','Mango Atchar'],
      desserts:  ['Gulab Jamun','Carrot Halwa (Gajar Halwa)','Soji Halwa','Ras Malai'],
      trivia:'South African Indian cuisine centres on Durban — home to the largest Indian population outside India. The community traces back to 1860 when indentured labourers were brought to KwaZulu-Natal to work the sugar cane fields. Bunny chow — curry in a hollowed bread loaf — was invented in Durban\'s Grey Street in the 1940s and is now one of South Africa\'s most iconic street foods. Durban curry is distinctively hotter and simpler than North Indian curry — bone-in meat, minimal cream, maximum chilli.',
      grows:'Sugar cane (the crop that brought the community to SA), mango, banana, roti wheat, curry leaf trees planted in every yard',
      cookStyle:'Women dominate the home kitchen. The dhal and curry are cooked daily. Breyani for weddings and Eid can take two days to prepare. The tawa (flat griddle) is the engine of the Indian kitchen — roti is made fresh for every meal in traditional homes.'
    },
    'zulu': {
      starters:  ['Amasi (Fermented Milk)','Mageu (Fermented Maize Drink)'],
      mains:     ['Umngqusho (Samp & Sugar Beans)','Inyama Yenkukhu (Chicken Stew)','Beef Stew with Cabbage','Ulusu (Tripe Stew)','Isigwaqane (Maize with Spinach)','Imifino (Wild Greens Stew)'],
      sides:     ['Phuthu (Stiff Maize Porridge)','Uphuthu (Crumbly Maize Porridge)','Dombolo (Steamed Dumplings)','Ujeqe (Steamed Yeast Bread)','Chakalaka'],
      desserts:  ['Isijabane (Roasted Maize & Peanut Mix)'],
      drinks:    ['Amasi (Fermented Milk)','Mageu (Fermented Maize Drink)'],
      trivia:'Zulu cuisine is ancient, nourishing and deeply tied to the land. Umngqusho — samp and sugar beans cooked together until creamy — was famously Nelson Mandela\'s favourite dish (he was Xhosa but the dish is beloved across cultures). Amasi (fermented milk) was drunk by Zulu warriors for strength and is still consumed daily. Cooking pots (izimbiza) are central to Zulu ceremony. The traditional inkukhu (chicken stew) is prepared for important guests — serving chicken is an act of significant respect.',
      grows:'Maize (impila), sorghum (used for amahewu and traditional beer), wild greens (imifino foraged from the veld), sugar beans, sweet potato',
      cookStyle:'Women cook — this is unambiguous in traditional Zulu culture. The act of cooking for others is an expression of love, care and status. A daughter who cannot cook is considered ill-prepared for adulthood. Slaughtering animals for ceremony is male territory.'
    },
    'sotho': {
      starters:  ['Motoho (Fermented Sorghum Porridge)','Ting (Fermented Maize Porridge)'],
      mains:     ['Bean & Sorghum Stew (Likhobe/Dikgobe)','Seswaa/Tshotlo (Shredded Meat)','Beef Tripe Stew (Mala)','Chicken Feet Stew','Pumpkin & Peanut Butter Stew','Dried Meat Stew (Lekhala)'],
      sides:     ['Stiff Maize Porridge (Papa)','Wild Greens (Morogo)','Steamed Bread (Borotho)','Sorghum Dumplings (Dipone)'],
      desserts:  ['Deep-Fried Doughnuts (Makoenya/Vetkoek)','Sweet Sorghum Porridge (Mabele a Aledi)','Fermented Maize Porridge (Ting)'],
      trivia:'Sotho cuisine spans both North and South Sotho communities and extends into Lesotho and the Free State. Seswaa — slow-cooked, pounded meat — is the signature dish for weddings and celebrations: the meat cooks for hours until it falls from the bone, then is pounded in a mortar until it shreds. Papa (stiff maize porridge) is the daily anchor of every Sotho meal. Morogo (wild greens) reflects a deep connection to the land — specific varieties are foraged seasonally and considered superior to cultivated spinach.',
      grows:'Sorghum (mabele — the original grain before maize), maize, pumpkin, beans, wild greens, peanuts',
      cookStyle:'Women cook in the home exclusively. Seswaa preparation is communal — women cook, men may pound. The three-legged pot (pitsa) over an open fire is the symbol of Sotho cooking. Older women are the keepers of fermentation knowledge — ting and motoho timing requires experience passed through generations.'
    },
    'xhosa': {
      starters:  ['Amasi (Sour Milk)','Amahewu (Fermented Maize Drink)'],
      mains:     ['Samp & Beans (Umngqusho)','Chicken Stew (Isityu seNkukhu)','Beef Stew (Isityu Senyama)','Tripe Stew (Usu)','Fish Stew (Isityu seNtlantla)','Pumpkin Stew (Isityu seThanga)','Cabbage Stew (Isityu seKhabhishi)','Wild Greens (Imifino)'],
      sides:     ['Crumbly Maize Porridge (Umphuphu)','Steamed Bread (Idombolo)','Sorghum Porridge (Umphothulo)'],
      drinks:    ['Amasi (Sour Milk)','Amahewu (Fermented Maize Drink)'],
      desserts:  ['Fried Dough (Magwinya/Vetkoek)'],
      trivia:'Xhosa cuisine is one of the oldest living food traditions in South Africa, rooted in the Eastern Cape. Umngqusho — samp and beans — was Nelson Mandela\'s most-loved dish, the food of his childhood home in Qunu. Amasi (fermented milk) is not just food but cultural identity — Xhosa warriors and elders drank it for health and strength, and refusing amasi in a Xhosa home is a serious social slight. The cooking of food for ceremony (ulwaluko initiation, weddings, ukubuyisa) is governed by strict protocol — certain dishes are made only on certain occasions.',
      grows:'Maize, sorghum, wild greens (imifino — foraged), samp, beans, pumpkin, coastal fish along the Eastern Cape seaboard',
      cookStyle:'Women cook — without exception in traditional households. The Eastern Cape rural kitchen is built around the three-legged pot over an open fire. Xhosa grandmothers are the custodians of all real recipes. Food for ceremony is prepared by specific women in the family, following ancestral protocol.'
    },
  };

  // ── REGION DISPLAY DATA ──────────────────────────────────────────
  const REGIONS_DATA = {
    'north-america':   { title:'North America',           emoji:'🌎', color:'#5DCAA5', bg:'#160f08', border:'#2a1a10' },
    'mexico':          { title:'Mexico & Central America',emoji:'🌮', color:'#1D9E75', bg:'#140d06', border:'#3a2010' },
    'caribbean':       { title:'Caribbean',               emoji:'🌴', color:'#97C459', bg:'#0f1a08', border:'#2a3a15' },
    'south-america-n': { title:'South America — North',   emoji:'🌿', color:'#639922', bg:'#160f08', border:'#253510' },
    'south-america-s': { title:'South America — South',   emoji:'🔥', color:'#3B6D11', bg:'#160f08', border:'#2a1a10' },
    'western-europe':  { title:'Western Europe',          emoji:'🥐', color:'#7F77DD', bg:'#0f0f1a', border:'#1a1a3a' },
    'southern-europe': { title:'Southern Europe',         emoji:'🍝', color:'#534AB7', bg:'#0a0a18', border:'#151530' },
    'eastern-europe':  { title:'Eastern Europe',          emoji:'🥘', color:'#AFA9EC', bg:'#0f0f1a', border:'#20203a' },
    'scandinavia':     { title:'Scandinavia',             emoji:'🐟', color:'#534AB7', bg:'#0a0a18', border:'#15152a' },
    'turkey':          { title:'Turkey & Anatolia',       emoji:'🫕', color:'#D85A30', bg:'#1a0c08', border:'#3a1a10' },
    'north-africa':    { title:'North Africa',            emoji:'🏺', color:'#EF9F27', bg:'#1a1008', border:'#3a2010' },
    'west-africa':     { title:'West Africa',             emoji:'🌶', color:'#BA7517', bg:'#180e04', border:'#3a2008' },
    'east-africa':     { title:'East Africa',             emoji:'🫙', color:'#BA7517', bg:'#180e04', border:'#3a2008' },
    'southern-africa': { title:'Southern Africa',         emoji:'🇿🇦', color:'#854F0B', bg:'#180e04', border:'#3a2008' },
    'middle-east':     { title:'Middle East',             emoji:'🧆', color:'#D85A30', bg:'#1a0c08', border:'#3a1810' },
    'gulf':            { title:'Gulf & Arabian Peninsula',emoji:'🫖', color:'#D85A30', bg:'#1a0c08', border:'#3a1810' },
    'iran':            { title:'Persia (Iran)',            emoji:'🏵', color:'#D85A30', bg:'#1a0c08', border:'#3a1810' },
    'south-asia':      { title:'South Asia',              emoji:'🍛', color:'#7F77DD', bg:'#0f0a18', border:'#201530' },
    'central-asia':    { title:'Central Asia',            emoji:'🐑', color:'#85B7EB', bg:'#0a1018', border:'#151a2a' },
    'east-asia':       { title:'East Asia',               emoji:'🥢', color:'#5DCAA5', bg:'#160f08', border:'#2a1a10' },
    'southeast-asia':  { title:'Southeast Asia',          emoji:'🌿', color:'#5DCAA5', bg:'#160f08', border:'#2a1a10' },
    'oceania':         { title:'Oceania & Pacific',       emoji:'🌺', color:'#85B7EB', bg:'#0a1018', border:'#15202a' },
  };

  const data   = REGIONS_DATA[regionKey] || { title:regionKey, emoji:'🌍', color:'#c06020', bg:'#160f08', border:'#2a1a10' };
  const color  = data.color;
  const bg     = data.bg;
  const border = data.border;

  const countries = COUNTRIES_BY_REGION[regionKey] || [];
  const selectedCountry = S.wkCountry && S.wkCountry !== regionKey ? S.wkCountry : null;
  const countryRecipes  = selectedCountry ? (COUNTRY_RECIPES[selectedCountry] || null) : null;

  // If we have a recipe detail open
  if(S.wkRecipeDetail){
    return wkRecipeDetailHTML(data);
  }

  const tab      = S.wkCourseTab || 'mains';
  const TABS     = [{id:'starters',e:'🥗',l:'Starters'},{id:'mains',e:'🍽️',l:'Mains'},{id:'sides',e:'🥘',l:'Sides'},{id:'desserts',e:'🍮',l:'Desserts'}];
  const recipes  = countryRecipes ? (countryRecipes[tab] || []) : [];
  const wkServings = S.wkServings || 4;

  const backLabel  = S.wkSACulture ? '← SA Kitchens' : '← World Kitchen';
  const backAction = S.wkSACulture
    ? "setQuiet({wkScreen:'sa',wkSACulture:null})"
    : "setQuiet({wkScreen:null,wkSelectedRegion:null,wkCountry:null});draw();window.scrollTo(0,0);";

  // Flag hero banner for the selected country (real flag via flagcdn, graceful fallback)
  var flagHeroHTML = '';
  if(selectedCountry){
    var _co = countries.find(function(x){ return x.id === selectedCountry; }) || { name:selectedCountry, feel:'' };
    var _fu = wkFlagUrl(selectedCountry);
    flagHeroHTML = `
    <div style="position:relative;height:160px;overflow:hidden;background:${bg};max-width:600px;margin:0 auto;">
      ${_fu ? `<img src="${_fu}" onerror="this.style.display='none'" alt="${_co.name} flag" style="width:100%;height:100%;object-fit:cover;display:block;" />` : ''}
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.30) 0%,rgba(8,4,2,0.85) 100%);"></div>
      <div style="position:absolute;left:0;right:0;bottom:0;padding:14px 18px;">
        <h2 style="font-size:22px;font-weight:normal;color:#f5e8cc;margin:0;font-family:Georgia,serif;text-shadow:0 1px 4px rgba(0,0,0,0.6);">${_co.name}</h2>
        <p style="font-size:13px;color:#e0d4b8;margin:3px 0 0;font-style:italic;text-shadow:0 1px 3px rgba(0,0,0,0.6);">${_co.feel || ''}</p>
      </div>
    </div>`;
  }

  return `<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">

    <!-- Header -->
    <div style="background:${bg};border-bottom:1px solid ${border};padding:14px 20px;">
      <button onclick="${backAction}" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:8px;padding:0;display:block;font-family:Georgia,serif;">${backLabel}</button>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:24px;">${data.emoji}</span>
        <div>
          <h1 style="font-size:20px;font-weight:normal;color:#f5e8cc;margin:0;">${data.title}</h1>
          <p style="font-size:13px;color:${color};margin:2px 0 0;opacity:0.8;">${countries.length} cuisines to explore</p>
        </div>
      </div>
    </div>

    <!-- Country List -->
    <div style="padding:12px 16px;max-width:600px;margin:0 auto;">
      <div style="font-size:13px;letter-spacing:0.08em;color:#e0d4b8;text-transform:uppercase;margin-bottom:10px;">Choose a country</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${countries.map(c => {
          const isSelected = selectedCountry === c.id;
          const hasRecipes = !!COUNTRY_RECIPES[c.id];
          return `<div onclick="setQuiet({wkCountry:'${c.id}',wkCourseTab:'mains',wkRecipeDetail:null});draw();window.scrollTo(0,0);"
               style="background:${isSelected ? bg : '#161210'};border:1px solid ${isSelected ? color : border};border-radius:10px;padding:12px 14px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all 0.15s;">
            <span style="font-size:22px;">${c.flag}</span>
            <div style="flex:1;">
              <div style="font-size:14px;color:${isSelected ? color : '#e0d4b8'};font-weight:bold;margin-bottom:2px;">${c.name}</div>
              <div style="font-size:13px;color:#e0d4b8;line-height:1.4;font-style:italic;">${c.feel}</div>
            </div>
            <div style="color:${hasRecipes ? color : '#3a2010'};font-size:16px;">${hasRecipes ? '›' : '○'}</div>
          </div>`;
        }).join('')}
      </div>
    </div>

    ${flagHeroHTML}

    ${selectedCountry && countryRecipes ? `
    <!-- Recipe Section -->
    <div style="padding:0 16px 24px;max-width:600px;margin:0 auto;">

      <!-- Trivia card -->
      ${COUNTRY_RECIPES[selectedCountry].trivia ? `
      <div style="background:#161210;border:1px solid ${border};border-radius:10px;padding:12px 14px;margin-bottom:12px;">
        <div style="font-size:13px;letter-spacing:0.08em;color:${color};text-transform:uppercase;margin-bottom:6px;">Food Culture</div>
        <div style="font-size:13px;color:#e0d4b8;line-height:1.7;">${COUNTRY_RECIPES[selectedCountry].trivia}</div>
        ${COUNTRY_RECIPES[selectedCountry].grows ? `<div style="margin-top:8px;font-size:13px;color:#e0d4b8;"><span style="color:${color};">🌱 Grows: </span>${COUNTRY_RECIPES[selectedCountry].grows}</div>` : ''}
        ${COUNTRY_RECIPES[selectedCountry].cookStyle ? `<div style="margin-top:4px;font-size:13px;color:#e0d4b8;"><span style="color:${color};">👩‍🍳 Who cooks: </span>${COUNTRY_RECIPES[selectedCountry].cookStyle}</div>` : ''}
      </div>` : ''}

      <!-- Servings -->
      <div style="background:#161210;border:1px solid ${border};border-radius:10px;padding:10px 14px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:13px;color:#e0d4b8;">Serves</span>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="if(S.wkServings>1)setQuiet({wkServings:S.wkServings-1})" style="width:28px;height:28px;border-radius:50%;background:#2a1a10;border:1px solid ${border};color:${color};font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">−</button>
          <span style="font-size:16px;color:#f5e8cc;font-weight:bold;min-width:24px;text-align:center;">${wkServings}</span>
          <button onclick="setQuiet({wkServings:S.wkServings+1})" style="width:28px;height:28px;border-radius:50%;background:#2a1a10;border:1px solid ${border};color:${color};font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">+</button>
        </div>
      </div>

      <!-- Course Tabs -->
      <div style="display:flex;gap:4px;margin-bottom:10px;">
        ${TABS.map(t => `
          <button onclick="setQuiet({wkCourseTab:'${t.id}'})" 
                  style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid ${tab===t.id ? color : border};background:${tab===t.id ? bg : '#0f0e0c'};color:${tab===t.id ? color : '#6a5440'};font-size:13px;cursor:pointer;font-family:Georgia,serif;">
            ${t.e}<br>${t.l}
          </button>`).join('')}
      </div>

      <!-- Recipe List -->
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${recipes.map((r,i) => `
          <div onclick="setQuiet({wkRecipeDetail:{name:'${r.replace(/'/g,"\\'")}',region:'${selectedCountry}',tab:'${tab}',servings:${wkServings}}});draw();window.scrollTo(0,0);"
               style="background:#161210;border:1px solid ${border};border-radius:10px;padding:12px 14px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:14px;color:#e0d4b8;margin-bottom:2px;">${r}</div>
              <div style="font-size:13px;color:#e0d4b8;">${tab.charAt(0).toUpperCase()+tab.slice(1,-1)} · Tap for full recipe</div>
            </div>
            <span style="color:${color};font-size:16px;">›</span>
          </div>`).join('')}
      </div>

    </div>` : selectedCountry && !countryRecipes ? `
    <div style="padding:20px 16px;max-width:600px;margin:0 auto;">
      <div style="background:#161210;border:1px solid ${border};border-radius:10px;padding:20px;text-align:center;">
        <div style="font-size:32px;margin-bottom:8px;">🌍</div>
        <div style="font-size:14px;color:#e0d4b8;">Full recipe collection coming soon</div>
        <div style="font-size:13px;color:#e0d4b8;margin-top:4px;">We're building this country's kitchen now</div>
      </div>
    </div>` : ''}

  </div>`;
}


function wkRecipeDetailHTML(regionData){
  const det = S.wkRecipeDetail;
  if(!det) return '';

  const rd = regionData || {};
  const color  = rd.color  || '#c06020';
  const bg     = rd.bg     || '#160f08';
  const border = rd.border || '#2a1a10';

  const servings = S.wkServings || 4;
  const adj = (S.recipeAdjustments || {})[det.name] || 0;
  const totalServings = Math.max(1, servings + adj);

  // Placeholder ingredients — will be populated when recipe library fills in
  const placeholderIngredients = [
    {n:'Main ingredient', pp:150, u:'g'},
    {n:'Supporting ingredient', pp:80, u:'g'},
    {n:'Fresh herbs', pp:10, u:'g'},
    {n:'Oil or fat', pp:15, u:'ml'},
    {n:'Salt & pepper', pp:null, u:null},
  ];

  const placeholderMethod = [
    {t:'Prepare', s:'Prepare your ingredients — measure everything before you start. This dish rewards a little organisation up front.',    time:null},
    {t:'Cook',    s:'Follow the traditional method for this dish — low and slow where the recipe calls for it, hot and fast where it doesn\'t. Taste as you go.',  time:null},
    {t:'Finish',  s:'Rest the dish briefly before serving. Add any fresh garnishes at the last moment for maximum flavour and visual impact.',  time:null},
  ];

  // Goes Well With pills (cross-section pairings)
  const gww = det.tab==='mains'
    ? ['Roasted vegetables','Fresh salad','Crusty bread','Steamed rice']
    : det.tab==='starters'
    ? ['Main course','Wine pairing','Dipping sauce','Fresh lemon']
    : ['Ice cream','Cream','Fresh berries','Coffee'];

  // Timer state helper
  const timerKey = 'wkt_' + det.name.replace(/\s+/g,'_');

  return `<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">

    <!-- Text header (Braai pattern) -->
    <div style="background:#161210;border-bottom:1px solid ${border};padding:14px 16px;">
      <button onclick="setQuiet({wkRecipeDetail:null});draw();window.scrollTo(0,0);" style="background:none;border:none;color:${color};font-size:13px;cursor:pointer;margin-bottom:6px;padding:0;display:block;font-family:Georgia,serif;">← ${rd.title||'World Kitchen'}</button>
      <div style="font-size:22px;font-weight:normal;color:#f5e8cc;">${det.emoji} ${det.name}</div>
      <div style="font-size:13px;color:${color};font-style:italic;margin-top:3px;opacity:0.8;">Full recipe · ${det.tab}</div>
    </div>

    <div style="padding:0 16px;max-width:600px;margin:0 auto;">
      ${recipePhoto(det.name, det.emoji)}

      <!-- Quantity box -->
      <div style="background:#1a1208;border:1px solid ${color};border-radius:12px;padding:12px 14px;margin:12px 0;display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-size:13px;color:#e0d4b8;margin-bottom:2px;">Total</div>
          <div style="font-size:18px;color:#f5e8cc;font-weight:bold;">${totalServings} ${totalServings===1?'person':'people'}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button onclick="(function(){var a=(S.recipeAdjustments||{});a['${det.name.replace(/'/g,'')}']=(a['${det.name.replace(/'/g,'')}']||0)-1;if((S.wkServings||4)+(a['${det.name.replace(/'/g,'')}']||0)<1)a['${det.name.replace(/'/g,'')}']=(a['${det.name.replace(/'/g,'')}']||0)+1;setQuiet({recipeAdjustments:a});})()" style="width:30px;height:30px;border-radius:50%;border:1px solid ${color};background:transparent;color:${color};font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;">−</button>
          <button onclick="(function(){var a=(S.recipeAdjustments||{});a['${det.name.replace(/'/g,'')}']=(a['${det.name.replace(/'/g,'')}']||0)+1;setQuiet({recipeAdjustments:a});})()" style="width:30px;height:30px;border-radius:50%;border:1px solid ${color};background:transparent;color:${color};font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;">+</button>
          <span style="font-size:13px;color:#e0d4b8;">⚖️ scaled</span>
        </div>
      </div>

      <!-- How portion size works -->
      <div style="margin-bottom:12px;">
        <span id="wk-portion-btn" onclick="(function(){var c=document.getElementById('wk-portion-body');var b=document.getElementById('wk-portion-btn');var open=c.style.display==='block';c.style.display=open?'none':'block';b.textContent=open?'▼ How portion size works':'▲ How portion size works';})()" style="font-size:13px;color:${color};cursor:pointer;user-select:none;">▼ How portion size works</span>
        <div id="wk-portion-body" style="display:none;background:#161210;border:1px solid ${border};border-radius:8px;padding:12px;margin-top:6px;font-size:13px;color:#e0d4b8;line-height:1.8;">
          1. Pick one dish — you get a full serving of it<br>
          2. Pick two dishes — half of each, same total food<br>
          3. More dishes = smaller slices, same total<br>
          4. Think of it like slicing a pizza — more slices, same pizza<br>
          5. Want more food? Increase guests or tap + above
        </div>
      </div>

      <!-- Ingredients -->
      <div style="margin-bottom:16px;">
        <div style="font-size:13px;color:${color};letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;">Ingredients · ${totalServings} ${totalServings===1?'person':'people'}</div>
        ${placeholderIngredients.map(i=>{
          const amt = i.pp ? (i.u==='g'||i.u==='ml') && i.pp*totalServings>=1000
            ? (Math.round(i.pp*totalServings/100)/10)+(i.u==='g'?'kg':'L')
            : Math.round(i.pp*totalServings*10)/10+(i.u||'')
            : null;
          return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${border};">
            <span style="font-size:13px;color:#c0c8e0;">${i.n}</span>
            <span style="font-size:13px;color:#f5c842;font-weight:bold;">${amt||'to taste'}</span>
          </div>`;
        }).join('')}
        <div style="font-size:13px;color:#e0d4b8;margin-top:8px;font-style:italic;">📚 Full recipe ingredients arrive when recipe library is added — coming soon</div>
      </div>

      <!-- Method -->
      <div style="margin-bottom:16px;">
        <div style="font-size:13px;color:${color};letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${placeholderMethod.map((step,si)=>{
          const tkId = timerKey+'_'+si;
          return `<div style="display:flex;gap:12px;margin-bottom:14px;">
            <div style="width:24px;height:24px;border-radius:50%;border:1px solid ${color};color:${color};font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;">${si+1}</div>
            <div style="flex:1;">
              <div style="font-size:13px;color:${color};margin-bottom:3px;font-weight:bold;">${step.t}</div>
              <p style="margin:0;font-size:13px;color:#c0c8e0;line-height:1.7;">${step.s}</p>
            </div>
          </div>`;
        }).join('')}
      </div>

      <!-- Start Cooking button -->
      <button onclick="setQuiet({wkCookingMode:true});draw();" style="width:100%;padding:14px;border-radius:12px;background:${bg};border:2px solid ${color};color:${color};font-size:15px;cursor:pointer;font-family:Georgia,serif;margin-bottom:14px;">🍳 Start Cooking →</button>

      <!-- Goes Well With -->
      <div style="margin-bottom:16px;">
        <div style="font-size:13px;color:${color};letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;">Goes Well With</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${gww.map(g=>`<span style="padding:5px 12px;border-radius:16px;border:1px solid ${border};color:#e0d4b8;font-size:13px;">${g}</span>`).join('')}
        </div>
      </div>

      <!-- Bottom actions -->
      <div style="display:flex;gap:8px;margin-bottom:14px;">
        <button onclick="alert('Add to plan — coming soon')" style="flex:1;padding:11px 8px;border-radius:10px;background:#160f08;border:1px solid ${border};color:#e0d4b8;font-size:13px;cursor:pointer;">📋 Add to Plan</button>
        <button onclick="alert('Save to My Kitchen — coming soon')" style="flex:1;padding:11px 8px;border-radius:10px;background:#160f08;border:1px solid ${border};color:#e0d4b8;font-size:13px;cursor:pointer;">💾 My Kitchen</button>
        <button onclick="alert('Download — coming soon')" style="flex:1;padding:11px 8px;border-radius:10px;background:#160f08;border:1px solid ${border};color:#e0d4b8;font-size:13px;cursor:pointer;">⬇️ Download</button>
      </div>

      <!-- Text nav -->
      <div style="display:flex;justify-content:space-between;padding:10px 0 30px;border-top:1px solid ${border};font-size:13px;">
        <button onclick="setQuiet({wkRecipeDetail:null});draw();window.scrollTo(0,0);" style="background:none;border:none;color:${color};cursor:pointer;font-family:Georgia,serif;">← Back</button>
        <button onclick="set({screen:'home'})" style="background:none;border:none;color:#e0d4b8;cursor:pointer;font-family:Georgia,serif;">Home</button>
      </div>

    </div>
  </div>`;
}


// ── MEAL SECTION RENDERER ─────────────────────────────────────────


/* ============================================================
   NEW World Kitchen navigation (Jun 2026)
   Continent -> Region -> Country -> Recipe, driven by the
   WK_AFRICA / WK_EUROPE data files. Static map header (no d3).
   Self-contained: adds new functions only. The old SA Kitchens
   path (wkSAKitchensHTML / wkCountryHTML / COUNTRY_RECIPES) is
   left completely untouched.
   ============================================================ */

/* Combined recipe pool from the data modules. */
function wkPool(){
  return [].concat(window.WK_AFRICA || [], window.WK_EUROPE || [], window.WK_WORLD || [], window.WK_SOUTHAFRICA || []);
}

/* country -> [continent, region] using the UN geoscheme.
   Grouping is by COUNTRY, so the data's own cuisine tags don't
   need to match — new recipes file themselves by country name. */
var WK_COUNTRY_GEO = {
  "Egypt":["Africa","Northern Africa"], "Morocco":["Africa","Northern Africa"], "Tunisia":["Africa","Northern Africa"],
  "Ghana":["Africa","Western Africa"], "Nigeria":["Africa","Western Africa"], "Senegal":["Africa","Western Africa"],
  "Ethiopia":["Africa","Eastern Africa"], "Kenya":["Africa","Eastern Africa"], "Tanzania":["Africa","Eastern Africa"],
  "Mozambique":["Africa","Eastern Africa"], "Zimbabwe":["Africa","Eastern Africa"],
  "Belgium":["Europe","Western Europe"],
  "Greece":["Europe","Southern Europe"], "Portugal":["Europe","Southern Europe"],
  "Denmark":["Europe","Northern Europe"], "Finland":["Europe","Northern Europe"],
  "Norway":["Europe","Northern Europe"], "Sweden":["Europe","Northern Europe"],
  "Netherlands":["Europe","Western Europe"], "Switzerland":["Europe","Western Europe"], "Austria":["Europe","Western Europe"],
  "Poland":["Europe","Eastern Europe"], "Ukraine":["Europe","Eastern Europe"], "Russia":["Europe","Eastern Europe"],
  "Hungary":["Europe","Eastern Europe"], "Turkey":["Europe","Eastern Europe"], "Georgia":["Europe","Eastern Europe"],
  "India":["Asia","Southern Asia"], "Pakistan":["Asia","Southern Asia"], "Sri Lanka":["Asia","Southern Asia"],
  "Cape Malay":["Africa","Southern Africa"], "Indian":["Africa","Southern Africa"], "Zulu":["Africa","Southern Africa"],
  "Sotho":["Africa","Southern Africa"], "Xhosa":["Africa","Southern Africa"], "Boerekos":["Africa","Southern Africa"]
};

/* The six continent boxes, each with its UN regions in display order. */
var WK_CONTINENTS = [
  { key:"Africa",        emoji:"🌍", regions:["Northern Africa","Western Africa","Middle Africa","Eastern Africa","Southern Africa"] },
  { key:"Europe",        emoji:"🥐", regions:["Northern Europe","Western Europe","Southern Europe","Eastern Europe"] },
  { key:"Asia",          emoji:"🥢", regions:["Eastern Asia","South-eastern Asia","Southern Asia","Western Asia","Central Asia"] },
  { key:"North America", emoji:"🌮", regions:["Northern America","Central America","Caribbean"] },
  { key:"South America", emoji:"🔥", regions:["South America"] },
  { key:"Oceania",       emoji:"🌺", regions:["Australia & New Zealand","Pacific Islands"] }
];

/* Distinct countries in the data that map to a given continent+region. */
function wkCountriesIn(continent, region){
  var pool = wkPool(), seen = {}, out = [];
  for(var i=0;i<pool.length;i++){
    var c = pool[i].country, g = WK_COUNTRY_GEO[c];
    if(g && g[0]===continent && g[1]===region && !seen[c]){ seen[c]=1; out.push(c); }
  }
  return out.sort();
}

/* Regions of a continent that actually have at least one recipe. */
function wkRegionsWithData(continent){
  var def = null;
  for(var i=0;i<WK_CONTINENTS.length;i++){ if(WK_CONTINENTS[i].key===continent) def = WK_CONTINENTS[i]; }
  if(!def) return [];
  return def.regions.filter(function(r){ return wkCountriesIn(continent, r).length > 0; });
}

/* course value -> tab id */
function wkCourseToTab(course){
  switch((course||"").toLowerCase()){
    case "starter": return "starters";
    case "side":    return "sides";
    case "dessert": return "desserts";
    case "drink":   return "drinks";
    case "beverage":return "drinks";
    default:        return "mains";
  }
}

/* A tappable recipe card (used in country lists and search results). */
/* course → emoji, so every list row carries an icon like braai's rows */
function wkCourseEmoji(course){
  var t = wkCourseToTab(course);
  return ({starters:'🥗', mains:'🍽️', sides:'🥘', desserts:'🍮', drinks:'🍷'})[t] || '🍽️';
}

/* Braai-style row: emoji · name/note · green "Recipe →" button (WK green theme). */
function wkRecipeCard(r){
  var green='#c06020', cream='#f5e8cc', feelCol='#e0d4b8';
  var disp = (typeof tinzaDisplayName === 'function')
    ? tinzaDisplayName(r)
    : (r.name + (r.nameAlt ? (' ('+r.nameAlt+')') : ''));
  var emoji = wkCourseEmoji(r.course);
  // Standard row: name + ONE feel one-liner. Use howThisFeels when written;
  // fall back to country (keeps cross-cuisine search useful) until the writing pass fills feel lines.
  var sub   = r.howThisFeels ? r.howThisFeels : r.country;
  var open  = "wkOpenRecipe('"+r.country+"','"+r.id+"')";
  var checked = (typeof wkInPlan === 'function') && wkInPlan(r.id);
  // live per-person portion — recalculates as dishes are added to the plan
  var pk = (typeof wkPoolOf==='function') ? wkPoolOf(r.course) : 'main';
  var grams = '';
  if(pk !== 'drink' && typeof wkEffectiveMult==='function'){
    var apC = wkAppetite();
    var dc  = Math.max(1, (wkPlanPoolCounts()[pk]) || 0);
    var mainIt = wkClassifyMain(wkParseIngredients(r.ingredients)).item;
    if(mainIt){ var sc = wkScaleLine(mainIt, wkEffectiveMult(r, dc, apC)); if(!sc.faded) grams = sc.amt; }
  }
  // ── per-person cost (FREE hook) — show only when ingredients are priced ──
  var costPP = '';
  if(typeof wkCostRecipe==='function' && typeof wkEffectiveMult==='function'){
    var _ap  = (typeof wkAppetite==='function') ? wkAppetite() : null;
    var _cpp = wkCostRecipe(r, wkEffectiveMult(r, 1, _ap));
    if(_cpp && _cpp.priced > 0 && _cpp.total > 0) costPP = _cpp.total;
  }
  var box = '<div onclick="event.stopPropagation();wkPlanToggle(\''+r.id+'\',4)" '
    + 'title="'+(checked?'In plan — tap to remove':'Add to plan')+'" '
    + 'style="width:22px;height:22px;flex-shrink:0;border-radius:5px;border:1px solid '+green+';'
    + 'background:'+(checked?green:'transparent')+';color:#fff;display:flex;align-items:center;'
    + 'justify-content:center;font-size:14px;font-weight:bold;cursor:pointer;">'+(checked?'✓':'')+'</div>';
  return '<div onclick="'+open+'" '
    + 'style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:14px;margin-bottom:8px;cursor:pointer;">'
    +   '<div style="display:flex;align-items:flex-start;gap:12px;">'
    +     box
    +     '<span style="font-size:20px;flex-shrink:0;line-height:1.35;">'+emoji+'</span>'
    +     '<div style="flex:1;min-width:0;">'
    +       '<div style="font-size:16px;color:'+cream+';font-weight:bold;line-height:1.35;">'+disp+'</div>'
    +       '<div style="font-size:14px;color:'+feelCol+';margin-top:4px;line-height:1.4;">'+sub+'</div>'
    +       (costPP ? '<div style="font-size:13px;color:#f5c842;font-weight:bold;margin-top:4px;">≈ R'+costPP+' pp</div>' : '')
    +     '</div>'
    +     '<span style="font-size:26px;font-weight:bold;color:#f5c842;flex-shrink:0;align-self:center;line-height:1;">›</span>'
    +   '</div>'
    + '</div>';
}

/* braai-style grid tile: emoji on top, bold title, subtitle. dim = coming-soon, accent = green-featured. */
function wkGridCard(emoji, title, sub, onclick, dim, accent){
  var green='#c06020', cream='#f5e8cc';
  var bg = dim ? '#140d06' : (accent ? '#1a1208' : '#161210');
  var bd = dim ? '#2a1a10' : (accent ? green   : '#2a1a10');
  return '<div'+(dim?'':' onclick="'+onclick+'"')+' '
    + 'style="background:'+bg+';border:1px solid '+bd+';border-radius:14px;padding:14px 8px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:96px;cursor:'+(dim?'default':'pointer')+';opacity:'+(dim?'0.5':'1')+';">'
    +   '<div style="font-size:24px;margin-bottom:6px;line-height:1;">'+emoji+'</div>'
    +   '<div style="font-size:16px;color:'+(dim?'#6a5440':cream)+';font-weight:bold;line-height:1.2;">'+title+'</div>'
    +   (sub ? '<div style="font-size:14px;color:'+(dim?'#6a5440':'#e0d4b8')+';margin-top:4px;line-height:1.2;">'+sub+'</div>' : '')
    + '</div>';
}

/* ── HOME / drill-down: continents → regions → countries (braai-style grids) ── */
function wkWorldHome(){
  var green = '#c06020', cream = '#f5e8cc';
  var search = (S.wkSearch || '').trim();

  // V33 shared 200px photo header (core.js sectionHeader). Header image
  // lives in Images/Headers/ — emoji-falls-back until the file is added.
  var header = sectionHeader({
    title:'World Kitchen',
    tagline:'Tap a continent, then a region, then a country',
    emoji:'🌍',
    img:'https://raw.githubusercontent.com/tinavdw/tinza/main/Images/Headers/World%20Kitchen.jpg',
    backJs:"set({screen:'home',wkContinent:null,wkRegion:null,wkSearch:''})", backLabel:'← Home',
    search:{ value:(S.wkSearch||'').replace(/"/g,'&quot;'), placeholder:'Search dishes, countries…', oninput:'set({wkSearch:this.value})', clearJs:"set({wkSearch:''})" }
  });

  var wrap = function(inner){ return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">'+header+inner+'</div>'; };
  var pad  = function(inner){ return '<div style="padding:14px 16px 30px;max-width:600px;margin:0 auto;">'+inner+'</div>'; };
  var backRow = function(label, action){ return '<div onclick="'+action+'" style="display:inline-block;color:'+green+';font-size:13px;cursor:pointer;margin-bottom:12px;font-family:Georgia,serif;">'+label+'</div>'; };
  var heading = function(t){ return '<h2 style="font-size:19px;font-weight:normal;color:'+cream+';margin:0 0 10px;font-family:Georgia,serif;">'+t+'</h2>'; };
  var contEmoji = function(key){ for(var i=0;i<WK_CONTINENTS.length;i++){ if(WK_CONTINENTS[i].key===key) return WK_CONTINENTS[i].emoji; } return '🌍'; };

  // ── SEARCH MODE (works from any level) ──
  if(search){
    var results = (typeof tinzaSearch === 'function') ? tinzaSearch(search, wkPool()) : [];
    var rbody = '<div style="padding:14px 16px;max-width:600px;margin:0 auto;">'
      + '<div style="font-size:13px;color:#e0d4b8;margin-bottom:10px;">'+results.length+' result'+(results.length===1?'':'s')+' for “'+search+'”</div>'
      + (results.length ? results.slice(0,80).map(wkRecipeCard).join('')
         : '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:24px;text-align:center;color:#e0d4b8;font-size:13px;">No dishes found. Try another word.</div>')
      + '</div>';
    return wrap(rbody);
  }

  // ── LEVEL 3: COUNTRIES grid (continent + region chosen) ──
  if(S.wkContinent && S.wkRegion){
    var l3countries = wkCountriesIn(S.wkContinent, S.wkRegion);
    var l3grid = l3countries.length
      ? '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">'
        + l3countries.map(function(ct){
            var dishes = wkPool().filter(function(x){return x.country===ct || (x.sharedWith && x.sharedWith.indexOf(ct) !== -1);}).length;
            return wkGridCard('🍲', ct, dishes+' dish'+(dishes===1?'':'es'),
              "set({wkScreen:'wkdata',wkDataCountry:'"+ct.replace(/'/g,"\\'")+"',wkDataTab:'mains',wkDataRecipe:null});window.scrollTo(0,0)", false);
          }).join('')
        + '</div>'
      : '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:20px;text-align:center;color:#e0d4b8;font-size:13px;">No countries here yet.</div>';
    return wrap(pad( backRow('← '+S.wkContinent, "set({wkRegion:null});window.scrollTo(0,0)") + heading(S.wkRegion) + l3grid ));
  }

  // ── LEVEL 2: REGIONS grid (continent chosen) ──
  if(S.wkContinent){
    var l2regions = wkRegionsWithData(S.wkContinent);
    var ce = contEmoji(S.wkContinent);
    var l2grid = l2regions.length
      ? '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">'
        + l2regions.map(function(reg){
            var nc = wkCountriesIn(S.wkContinent, reg).length;
            return wkGridCard(ce, reg, nc+' '+(nc===1?'country':'countries'),
              "set({wkRegion:'"+reg.replace(/'/g,"\\'")+"'});window.scrollTo(0,0)", false);
          }).join('')
        + '</div>'
      : '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:20px;text-align:center;color:#e0d4b8;font-size:13px;">🌍 Recipes being added — coming soon</div>';
    return wrap(pad( backRow('← World Kitchen', "set({wkContinent:null,wkRegion:null});window.scrollTo(0,0)") + heading(S.wkContinent) + l2grid ));
  }

  // ── LEVEL 1: HOME — SA + 6 continents in one 4-wide grid (braai-style: 4 on top, 3 under) ──
  var saTile = wkGridCard('🇿🇦', 'SA Kitchens', 'Our heritage', "set({wkContinent:'Africa',wkRegion:'Southern Africa'});window.scrollTo(0,0)", false, true);
  var contTiles = WK_CONTINENTS.map(function(c){
        var regions = wkRegionsWithData(c.key);
        var count = 0; regions.forEach(function(r){ count += wkCountriesIn(c.key, r).length; });
        var live = count > 0;
        return wkGridCard(c.emoji, c.key, live ? (count+' countries') : 'Coming soon',
          "set({wkContinent:'"+c.key.replace(/'/g,"\\'")+"',wkRegion:null});window.scrollTo(0,0)", !live, false);
      }).join('');
  var contGrid = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">' + saTile + contTiles + '</div>';

  return wrap( pad(contGrid) );
}

/* ── COUNTRY recipe list + RECIPE detail (data-driven) ── */
function wkDataCountryHTML(){
  var green = '#c06020', cream = '#f5e8cc';
  var pool = wkPool();
  var country = S.wkDataCountry;

  // ── DETAIL ──
  if(S.wkDataRecipe){
    var r = null;
    for(var i=0;i<pool.length;i++){ if(pool[i].id === S.wkDataRecipe){ r = pool[i]; break; } }
    if(!r){
      return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;padding:20px;color:#e0d4b8;">'
        + '<button onclick="set({wkDataRecipe:null})" style="background:none;border:none;color:'+green+';cursor:pointer;font-family:Georgia,serif;">← Back</button>'
        + '<p style="margin-top:20px;">Recipe not found.</p></div>';
    }
    return wkDetailV33(r, country);
  }

  // ── COUNTRY LIST ──
  var tab = S.wkDataTab || 'mains';
  var TABS = [{id:'starters',e:'🥗',l:'Starters'},{id:'mains',e:'🍽️',l:'Mains'},{id:'sides',e:'🥘',l:'Sides'},{id:'desserts',e:'🍮',l:'Desserts'},{id:'drinks',e:'🍷',l:'Drinks'}];
  var recipes = pool.filter(function(x){ return x.country === country || (x.sharedWith && x.sharedWith.indexOf(country) !== -1); });
  var inTab = recipes.filter(function(x){ return wkCourseToTab(x.course) === tab; });

  var planCounts = (typeof wkPlanPoolCounts==='function') ? wkPlanPoolCounts() : {};
  var tabPool = {starters:'starter', mains:'main', sides:'side', desserts:'dessert', drinks:'drink'};
  var tabsBar = '<div style="display:flex;gap:4px;margin-bottom:12px;">'
    + TABS.map(function(t){
        var n = recipes.filter(function(x){return wkCourseToTab(x.course)===t.id;}).length;
        var pn = planCounts[tabPool[t.id]] || 0;
        var sel = tab===t.id;
        var badge = pn>0 ? '<span style="display:inline-block;min-width:15px;margin-left:3px;padding:0 4px;border-radius:8px;background:#c97a30;color:#1a0f06;font-size:13px;font-weight:bold;line-height:15px;vertical-align:middle;">'+pn+'</span>' : '';
        return '<button onclick="set({wkDataTab:\''+t.id+'\'})" style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid '+(sel?green:'#2a1a10')+';background:'+(sel?'#1a1208':'#0f0e0c')+';color:'+(sel?green:'#e0d4b8')+';font-size:13px;cursor:pointer;font-family:Georgia,serif;">'+t.e+'<br>'+t.l+' ('+n+')'+badge+'</button>';
      }).join('')
    + '</div>';

  var list = inTab.length
    ? inTab.map(wkRecipeCard).join('')
    : '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:20px;text-align:center;color:#e0d4b8;font-size:13px;">No '+tab+' for '+country+' yet.</div>';

  // V33 shared 200px photo header (core.js sectionHeader). Country banner
  // lives in Images/Headers/<Country>.jpg — emoji-falls-back until added.
  var hdr = sectionHeader({
    title: country,
    tagline: recipes.length + ' dish' + (recipes.length===1?'':'es'),
    emoji: '🍽️',
    img: 'https://raw.githubusercontent.com/tinavdw/tinza/main/Images/Headers/' + encodeURIComponent(country) + '.jpg',
    backJs: "set({wkScreen:null,wkDataCountry:null,wkDataRecipe:null});window.scrollTo(0,0);",
    backLabel: '← World Kitchen'
  });
  var planBtnRow = '<div style="padding:12px 16px 0;max-width:600px;margin:0 auto;display:flex;justify-content:flex-end;">'
    + '<button onclick="var _r=document.getElementById(\'root\');if(_r)_r._savedScroll=0;set({wkScreen:\'wkplan\'});" style="background:#160f08;border:1px solid '+green+';border-radius:20px;color:'+green+';font-size:13px;padding:6px 14px;cursor:pointer;font-family:Georgia,serif;white-space:nowrap;">🧺 My Plan ('+((S.wkPlan||[]).length)+')</button>'
    + '</div>';

  return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">'
    + hdr + planBtnRow
    + '<div style="padding:16px;max-width:600px;margin:0 auto;">'+tabsBar+'<div style="display:flex;flex-direction:column;gap:0;">'+list+'</div></div>'
    + '</div>';
}


/* ============================================================
   Tinza — World Kitchen · Stage 2 engine  (appended to worldkitchen.js)
   v33 recipe detail · per-person serving stepper · partial PRICE_DB
   costing · "to taste" handling · SA substitutions · My Plan + shopping.
   Self-contained. No core.js dependency except recipePhoto() & set()/S.
   ============================================================ */

/* ── SA substitution notes (handoff: niter kibbeh → ghee, etc.) ──
   Keyed by a lowercase substring that may appear in an ingredient name.
   Surfaced as a "🇿🇦 SA swaps" box on any recipe that uses them.        */
var WK_SUBS = {
  "niter kibbeh": "Niter kibbeh → use ghee (or clarified butter) simmered 2 min with a pinch of cardamom, cumin & turmeric.",
  "berbere":      "Berbere → mix paprika + cayenne + a pinch each of cumin, coriander, ginger & cinnamon.",
  "injera":       "Injera → a thin sourdough wrap or store pancake works as a scoop if teff isn't available.",
  "teff":         "Teff flour → swap with a 50/50 wholewheat + cake flour mix (texture differs slightly).",
  "harissa":      "Harissa → blend tomato paste + chilli + garlic + a little olive oil & cumin.",
  "ras el hanout":"Ras el hanout → cumin + coriander + cinnamon + paprika + a pinch of ginger & nutmeg.",
  "scotch bonnet":"Scotch bonnet → habanero, or any fiery chilli (use less — they're milder here).",
  "scent leaves": "Scent leaves (uziza/utazi) → fresh basil is the closest easy swap.",
  "crayfish":     "Ground crayfish → it's dried, ground shrimp (a seasoning used in tiny pinches — not SA rock-lobster). Closest swap: ground dried shrimp/prawns; or a little shrimp paste, fish sauce or anchovy — or simply omit.",
  "egusi":        "Egusi (melon seed) → ground pumpkin seeds or ground sunflower seeds.",
  "fufu":         "Fufu → mashed potato or polenta-style maize meal makes an easy stand-in.",
  "orzo":         "Orzo → any tiny pasta, or a handful of broken spaghetti / rice.",
  "fava bean":    "Fava (broad) beans → tinned butter beans are the easiest local swap.",
  "black-eyed pea":"Black-eyed peas → sold as 'black-eyed beans' (same as cowpeas) at most SA shops; sugar beans work in a pinch.",
  "plantain":     "Plantain → use a firm, very-green (under-ripe) banana, fried.",
  "millet flour": "Millet flour → maize meal / corn flour works for tuo zaafi-style dishes.",
  "reindeer":     "Reindeer → we don't get it here; use venison or other local game (springbok/kudu) — beef works too.",
  "veal":         "Veal → a good substitute is beef steak, tenderised and flattened thin; chicken breasts also work.",
  "cod":          "Cod → fresh: hake. Salted/dried cod: Portuguese bacalhau (salt cod) is sold at SA Portuguese delis and many supermarkets — use that; salted snoek is a good local fallback if you can't find it.",
  "sardine":      "Fresh sardines → scarce here; fresh Maasbanker (Cape mackerel) is the local stand-in.",
  "clam":         "Clams → hard to find fresh; fresh mussels are the easy local swap (frozen clams work too).",
  "rabbit":       "Rabbit → not easy to find; chicken pieces are the simplest local substitute.",
  "molokhia":     "Molokhia (jute mallow) leaves → hard to find fresh in SA; use frozen molokhia from a Middle-Eastern/Egyptian shop, or substitute spinach (a little okra stirred in brings back the silky texture).",
  "quark":        "Quark → smooth/creamed cottage cheese, or thick plain yoghurt, is the easy SA swap (cream cheese at a push).",
  "herring":      "Herring → fresh or pickled herring is scarce here; for fresh use maasbanker or sardines, or grab a jar of pickled herring where you can find it.",
  "octopus":      "Octopus → calamari / squid (tubes & heads, usually frozen) is the easy local swap.",
  "perch":        "Perch → any firm white fish works; hake is the easy SA choice.",
  "carp":         "Carp → any firm white or freshwater fish; hake or tilapia work well here.",
  "saucisson":    "Saucisson → any cured/smoked sausage or a firm salami stands in well.",
  "bratwurst":    "Bratwurst → a good plain pork sausage (or boerewors) is the easy local swap.",
  "blood sausage":"Blood sausage (black pudding) → a spiced pork sausage is the easy stand-in, or simply leave it out.",
  "suckling pig": "Suckling pig → a pork shoulder or leg roast is the practical SA stand-in (crackling and all).",
  "duck":         "Duck → look at Woolworths or Asian grocers; chicken pieces work if you can't find it.",
  "raclette":     "Raclette cheese → gouda or any good melting cheese works if raclette is hard to find.",
  "juniper":      "Juniper berries → tricky to find; a small splash of gin gives the same piney note, or simply omit."
};

/* ── parse a per-person ingredient string into structured items ──
   handles: "40g rice" · "10ml veg oil" · "3g cardamom + cinnamon"
            "1/4 egg (scale accordingly)" · "Pinch salt"
            "cumin, salt, chilli" (comma list → separate to-taste lines)      */
function wkParseQty(t){
  t = String(t).trim();
  var uni = {"¼":0.25,"½":0.5,"¾":0.75,"⅓":0.333,"⅔":0.667,"⅛":0.125};
  if(uni[t] != null) return uni[t];
  if(/^\d+\/\d+$/.test(t)){ var p=t.split('/'); return parseFloat(p[0])/parseFloat(p[1]); }
  var f = parseFloat(t);
  return isNaN(f) ? null : f;
}

function wkParseIngredients(str){
  var out = [];
  if(!str) return out;
  str.split('·').forEach(function(chunk){
    chunk = chunk.trim();
    if(!chunk) return;

    // pull out a parenthetical note, keep the rest for parsing
    var note = '';
    var nm = chunk.match(/\(([^)]*)\)/);
    if(nm) note = nm[1].trim();
    var body = chunk.replace(/\([^)]*\)/g,'').trim();

    // leading quantity? "40g rice", "1/4 egg", "3g cardamom + cinnamon", "120–150ml water" (range)
    var m = body.match(/^([0-9]+\/[0-9]+|[0-9]+(?:\.[0-9]+)?|[¼½¾⅓⅔⅛])\s*(?:[–—-]\s*[0-9]+(?:\.[0-9]+)?)?\s*(kg|g|ml|l)?\s*(.*)$/i);
    if(m && wkParseQty(m[1]) != null && (m[2] || m[3])){
      var qty  = wkParseQty(m[1]);
      var unit = m[2] ? m[2].toLowerCase() : null;     // null => countable (eggs etc.)
      var name = (m[3]||'').trim();
      if(name){ out.push({ qty:qty, unit:unit, name:name, note:note, toTaste:false }); return; }
    }

    // no parseable amount — treat as "to taste".
    // comma list of bare spices → split into separate lines.
    var parts = (body.indexOf(',') > -1 && !/[0-9]/.test(body)) ? body.split(',') : [body];
    parts.forEach(function(p){
      p = p.trim().replace(/^(pinch of|pinch|a dash of|dash of|zest of|handful of)\s+/i,'').trim();
      if(p) out.push({ qty:null, unit:null, name:p, note:note, toTaste:true });
    });
  });
  return out;
}

/* ── display one scaled ingredient line for N servings ── */
function wkFmtAmount(qty, unit){
  if(unit === 'g'){  return qty >= 1000 ? (Math.round(qty/100)/10)+'kg' : (Math.round(qty*10)/10)+'g'; }
  if(unit === 'ml'){ return qty >= 1000 ? (Math.round(qty/100)/10)+'L'  : (Math.round(qty*10)/10)+'ml'; }
  if(unit === 'kg'){ return (Math.round(qty*100)/100)+'kg'; }
  if(unit === 'l'){  return (Math.round(qty*100)/100)+'L'; }
  // countable
  var v = Math.round(qty*100)/100;
  return (Number.isInteger(v) ? v : v);
}
function wkScaleLine(item, n){
  if(item.toTaste || item.qty == null){
    return { amt:'to taste', name:item.name, note:item.note, faded:true };
  }
  var scaled = item.qty * n;
  var amt = wkFmtAmount(scaled, item.unit);
  if(item.unit == null) amt = amt + '×';     // countable, e.g. eggs
  return { amt:amt, name:item.name, note:item.note, faded:false };
}

/* ── PRICE_DB lookup: longest whole-word key contained in the name ── */
function wkCleanName(name){
  return String(name||'').toLowerCase()
    .split('/')[0]                              // "goat meat/fish" → "goat meat"
    .replace(/[^a-z0-9\s]/g,' ')
    .replace(/\s+/g,' ').trim();
}
function wkIsWater(name){ var n=wkCleanName(name); return /^(water|tap water|boiling water|warm water|cold water|ice water|warm water or milk)$/.test(n) || (/\bwater\b/.test(n) && /\b(stock|broth)\b/.test(n)); }
var WK_ALIAS = { "veg oil":"sunflower oil","vegetable oil":"sunflower oil","frying oil":"sunflower oil","cooking oil":"sunflower oil","oil":"sunflower oil",
  // ── SA coverage aliases (8 Jun 2026) — conservative, lean-high ──
  "mince":"beef mince","beef or lamb mince":"beef mince","lamb mince":"beef mince",
  "lamb":"mutton","lamb pieces":"mutton","bone in lamb pieces":"mutton","lamb chops":"mutton","lamb or chicken cubes":"mutton","lamb or beef pieces":"mutton","chicken or lamb pieces":"mutton","bone in mutton or lamb":"mutton",
  "fish":"hake","white fish":"hake","firm white fish":"hake",
  "ghee":"butter","ghee or oil":"butter","ghee or butter":"butter","butter or ghee":"butter","butter or oil":"butter","oil or butter":"butter","butter or margarine":"butter",
  "cheese":"cheddar","cheddar cheese":"cheddar",
  "flour":"cake flour","flour for dusting":"cake flour","self raising flour":"cake flour",
  "carrot":"carrots",
  "masala":"curry powder","durban masala":"curry powder","durban curry masala":"curry powder","breyani masala":"curry powder","biryani masala":"curry powder","mild curry powder":"curry powder",
  "potatoes":"potato","potato chunks":"potato","potato cubes":"potato",
  "yoghurt":"yoghurt","plain yoghurt":"yoghurt" };
function wkPriceLookup(name){
  if(typeof PRICE_DB === 'undefined') return null;
  var n = wkCleanName(name);
  if(!n) return null;
  if(/\beggs?\b/.test(n)) return { key:'egg', price:(PRICE_DB['eggs_each']||PRICE_DB['eggs']||3.7), per:'count' };
  if(PRICE_DB[n] != null) return { key:n, price:PRICE_DB[n], per:'weight' };
  // deplural
  if(n.slice(-1)==='s' && PRICE_DB[n.slice(0,-1)] != null) return { key:n.slice(0,-1), price:PRICE_DB[n.slice(0,-1)], per:'weight' };
  if(WK_ALIAS[n] && PRICE_DB[WK_ALIAS[n]] != null) return { key:WK_ALIAS[n], price:PRICE_DB[WK_ALIAS[n]], per:'weight' };
  // longest key that appears as a whole word inside the name
  var best=null;
  for(var k in PRICE_DB){
    if(typeof PRICE_DB[k] !== 'number') continue;
    var re = new RegExp('\\b'+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b');
    if(re.test(n) && (!best || k.length > best.length)) best = k;
  }
  if(best) return { key:best, price:PRICE_DB[best], per:'weight' };
  return null;
}

/* ── cost one recipe for N servings · returns {total, priced, missing[]} ── */
function wkCostRecipe(recipe, n){
  var items = wkParseIngredients(recipe.ingredients);
  var total = 0, priced = 0, missing = [];
  items.forEach(function(it){
    if(it.toTaste || it.qty == null) return;          // spices/seasoning — skip
    if(wkIsWater(it.name)) return;                       // water — not bought
    var pr = wkPriceLookup(it.name);
    if(!pr){ missing.push(it.name); return; }
    var q = it.qty * n, c = 0;
    if(pr.per === 'count')      c = Math.ceil(q) * pr.price;          // eggs
    else if(it.unit === 'g')    c = (q/1000) * pr.price;
    else if(it.unit === 'kg')   c = q * pr.price;
    else if(it.unit === 'ml')   c = (q/1000) * pr.price;             // R per L
    else if(it.unit === 'l')    c = q * pr.price;
    else { missing.push(it.name); return; }            // countable but not egg → unpriced
    total += c; priced++;
  });
  return { total:Math.round(total), priced:priced, missing:missing };
}

/* ── My Plan state (its own list — never touches braai's plan) ── */
function wkPlanFind(id){ var p=S.wkPlan||[]; for(var i=0;i<p.length;i++) if(p[i].id===id) return i; return -1; }
function wkInPlan(id){ return wkPlanFind(id) > -1; }
function wkPlanToggle(id, servings){
  var p = (S.wkPlan||[]).slice();
  var i = wkPlanFind(id);
  if(i > -1) p.splice(i,1);
  else p.push({ id:id, servings: Math.max(1, servings||1) });
  set({ wkPlan:p });
}
function wkPlanSetServings(id, servings){
  var p = (S.wkPlan||[]).slice();
  var i = wkPlanFind(id);
  if(i > -1){ p[i] = { id:id, servings:Math.max(1,servings) }; set({ wkPlan:p }); }
}
function wkPlanClearAll(){
  if(typeof confirm === 'function' && !confirm('Clear all dishes from your World Kitchen plan?')) return;
  set({ wkPlan:[] });
}

/* ── scroll-aware recipe nav: remember list position, restore on back ──
   feeds draw()'s _savedScroll (same mechanism openEvent uses) so we work
   WITH the core scroll logic, never against it. No core.js changes. */
function wkOpenRecipe(country, id, servings){
  var root = document.getElementById('root');
  S.wkListScroll = window.scrollY;            // remember where the list was
  if(root) root._savedScroll = 0;             // recipe opens at the top
  var upd = { wkScreen:'wkdata', wkDataCountry:country, wkDataRecipe:id };
  if(servings) upd.wkServings = servings;
  set(upd);
}
function wkBackFromRecipe(){
  var root = document.getElementById('root');
  if(root) root._savedScroll = (S.wkListScroll || 0);   // land back where we were
  set({ wkDataRecipe:null });
}

/* ── v33 RECIPE DETAIL ── */
function wkDetailV33(r, country){
  var green='#c06020';
  var n = Math.max(1, S.wkServings || 1);
  var disp = (typeof tinzaDisplayName === 'function') ? tinzaDisplayName(r) : (r.name + (r.nameAlt ? (' ('+r.nameAlt+')') : ''));
  var items = wkParseIngredients(r.ingredients);
  var apD = (typeof wkAppetite==='function') ? wkAppetite() : {mult:1,label:'Normal'};
  var baseMult = (typeof wkEffectiveMult==='function') ? wkEffectiveMult(r, 1, apD) : 1;  // standalone-dish standard portion
  var cost  = wkCostRecipe(r, n * baseMult);
  var inPlan = wkInPlan(r.id);

  // main item + raw-carb flag (drives the qty box + the raw note)
  var mainItem = (typeof wkClassifyMain==='function') ? wkClassifyMain(items).item : null;
  if(!mainItem){ for(var mi=0; mi<items.length; mi++){ if(items[mi].qty != null && !items[mi].toTaste){ mainItem = items[mi]; break; } } }
  var rawCarb = mainItem && /\b(rice|pasta|macaroni|spaghetti|noodle|noodles|couscous|bulgur|semolina|flour|lentil|lentils|bean|beans|chickpea|chickpeas|samp|grain)\b/.test((typeof wkCleanName==='function')?wkCleanName(mainItem.name):String(mainItem.name||'').toLowerCase());

  // ── green qty box (shared qtyBox) — drives S.wkServings ──
  var qtyTotal = mainItem ? (wkScaleLine(mainItem, baseMult * n).amt + ' ' + mainItem.name) : (n + ' ' + (n===1?'serving':'servings'));
  var qtyPP    = mainItem ? (wkScaleLine(mainItem, baseMult).amt + ' per person' + (rawCarb ? ' · raw' : '')) : '';
  var qtyHTML = qtyBox({
    label:'How Much To Make', total:qtyTotal, ppLine:qtyPP, n:n,
    decJs:"set({wkServings:Math.max(1,(S.wkServings||1)-1)})",
    incJs:"set({wkServings:(S.wkServings||1)+1})"
  });

  // ── ingredients (shared shell + rows): "Xg pp · Yg total" ──
  var ingRows = items.map(function(it){
    var ppS  = wkScaleLine(it, baseMult);
    var totS = wkScaleLine(it, baseMult * n);
    var amt;
    if(ppS.faded){ amt = '<span style="color:#e0d4b8;font-weight:normal;font-style:italic;">to taste</span>'; }
    else if(n === 1){ amt = totS.amt; }
    else { amt = '<span style="color:#e0d4b8;font-weight:normal;font-size:13px;">'+ppS.amt+' pp · </span>'+totS.amt; }
    return ingredientRow(ppS.name, amt, ppS.note);
  }).join('');
  var ingredientsHTML = ingredientsBox(ingRows, n);

  // ── SA swaps → notes slot (shared box shell) ──
  var hay = (r.ingredients||'').toLowerCase(); var swaps = [];
  for(var key in WK_SUBS){ if(hay.indexOf(key) > -1) swaps.push(WK_SUBS[key]); }
  var notesHTML = swaps.length
    ? recipeBox('🇿🇦 SA swaps', swaps.map(function(s){ return '<div style="font-size:15px;color:#f0ebe1;line-height:1.5;padding:4px 0;">• '+s+'</div>'; }).join(''))
    : '';

  // ── method (shared shell + steps) ──
  var steps = (r.method||'').split(/\.\s+/).map(function(x){return x.trim();}).filter(Boolean);
  var stepsHTML = steps.map(function(s,si){
    return methodStep(si, s+(s.slice(-1).match(/[.!?]/)?'':'.'), wkStepTimer(s));
  }).join('');
  var methodHTML = methodBox(stepsHTML, steps.length ? "set({wkCooking:{id:'"+r.id+"',step:0}});window.scrollTo(0,0);" : '');

  // ── extras slot: cost (Pro-gated) + tip + chef notes ──
  var costNote = cost.missing.length
    ? '<div style="font-size:14px;color:#9ab36a;margin-top:6px;">≈ estimate — not yet priced: '+cost.missing.slice(0,6).join(', ')+(cost.missing.length>6?'…':'')+'</div>'
    : '<div style="font-size:13px;color:#e0d4b8;margin-top:6px;">all ingredients priced</div>';
  var isWkPro = (typeof USER_TIER !== 'undefined') && USER_TIER === 'pro';
  var costBox = !isWkPro
    ? '<div style="background:#160f08;border:1px dashed #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;text-align:center;">'
      + '<div style="font-size:22px;color:#e0d4b8;letter-spacing:6px;margin-bottom:6px;">R \u2022 \u2022 \u2022 \u2022</div>'
      + '<div style="font-size:13px;color:#e0d4b8;">\ud83d\udcb0 Cost estimate \u2014 <strong style="color:'+green+';">Tinza Pro R99/month</strong></div></div>'
    : '<div style="background:#160f08;border:1px solid #3a2010;border-radius:10px;padding:14px;margin-bottom:12px;">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;">'
      +   '<div style="font-size:13px;color:#e0d4b8;">\ud83d\udcb0 Estimated cost \u00b7 '+n+' '+(n===1?'serving':'servings')+'</div>'
      +   '<div style="font-size:24px;color:'+green+';font-weight:bold;">'+(cost.priced?('~R'+cost.total):'\u2014')+'</div></div>'
      + (cost.priced ? '<div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:6px;border-top:1px solid #2a1a10;"><span style="font-size:13px;color:#e0d4b8;">Per person</span><span style="font-size:14px;color:#c0a030;font-weight:bold;">~R'+Math.round(cost.total/n)+'</span></div>' : '')
      + costNote + '</div>';
  var tipBox = r.tip ? recipeBox('💡 Tip', '<div style="font-size:16px;color:#f0ebe1;line-height:1.6;">'+r.tip+'</div>') : '';
  function infoRow(label, val){ return val ? '<div style="margin-bottom:8px;"><span style="color:'+green+';font-size:13px;">'+label+': </span><span style="font-size:15px;color:#f0ebe1;">'+val+'</span></div>' : ''; }
  var extraInner = infoRow('👩‍🍳 Chef notes', r.chefNotes)+infoRow('🍷 Pairs with', r.pairsWith)+infoRow('📊 Nutrition', r.nutrition)+infoRow('🧊 Storage', r.storage)+infoRow('💡 Did you know', r.trivia);
  var extrasHTML = costBox + tipBox + (extraInner ? recipeBox('', extraInner) : '');

  // ── goes well with (array → shared box) ──
  var gwwList = [];
  if(r.goesWith && r.goesWith.length){ gwwList = [].concat(r.goesWith); }
  else if(r.pairsWith){ gwwList = r.pairsWith.split(/,|\band\b|&/i).map(function(x){return x.trim();}).filter(Boolean); }
  else { var gt=wkCourseToTab(r.course); gwwList = (gt==='desserts'?['Coffee','Fresh cream','Berries']:gt==='starters'?['A main course','Fresh bread','Lemon wedges']:['Fresh salad','Crusty bread','Steamed rice']); }
  gwwList = gwwList.map(function(g){ return String(g).replace(/[.;,\s]+$/,'').trim(); }).filter(Boolean);

  // ── sub line: native-script name (if any) + the feel one-liner ──
  var nonLatin = /[^\u0000-\u024F\u1E00-\u1EFF]/.test(r.name||'');
  var sub = (nonLatin ? '<span style="font-style:italic;">'+r.name+'</span>' : '')
          + (nonLatin && r.howThisFeels ? ' · ' : '')
          + (r.howThisFeels ? '<span style="font-style:italic;">'+r.howThisFeels+'</span>' : '');

  // ── assemble through the ONE shared page builder (Standard §4b) ──
  return recipePage({
    photoName: r.name, photoEmoji: '🍽️',
    backJs: "wkBackFromRecipe()", backLabel: '← '+country,
    name: disp,
    sub: sub,
    meta: { origin:r.country, time:r.cookTime, kcal:r.kcal },
    qtyHTML: qtyHTML,
    portionRawNote: rawCarb ? 'Amounts shown are <strong style="color:#e0d4b8;">raw / uncooked</strong> \u2014 rice &amp; pasta roughly triple once cooked.' : '',
    ingredientsHTML: ingredientsHTML,
    notesHTML: notesHTML,
    methodHTML: methodHTML,
    goesWith: gwwList,
    extrasHTML: extrasHTML,
    actions: { addJs: "wkPlanToggle('"+r.id+"',"+n+")", inPlan: inPlan },
    nav: { backJs:"wkBackFromRecipe()", planJs:"var _r=document.getElementById('root');if(_r)_r._savedScroll=0;set({wkScreen:'wkplan',wkDataRecipe:null});", planCount:(S.wkPlan||[]).length, homeJs:"set({screen:'home'})" }
  });
}

/* parse a cook time out of a method step → pill label ("⏲ 20 min", "⏲ overnight") */
function wkStepTimer(txt){
  var m = (txt||'').match(/(\d+(?:\s*[–-]\s*\d+)?)\s*(min(?:ute)?s?|hours?|hrs?)\b/i);
  if(m){ return '⏲ ' + m[1].replace(/\s+/g,'') + ' ' + (/h/i.test(m[2]) ? 'hr' : 'min'); }
  if(/overnight/i.test(txt)) return '⏲ overnight';
  return '';
}

/* ── fullscreen step-by-step cooking mode (self-contained, no core.js) ── */
function wkCookingView(){
  var green='#c06020', cream='#f5e8cc';
  var c = S.wkCooking || {};
  var pool = wkPool();
  var r = null;
  for(var i=0;i<pool.length;i++){ if(pool[i].id === c.id){ r = pool[i]; break; } }
  if(!r){ return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;padding:20px;color:#e0d4b8;"><button onclick="set({wkCooking:null})" style="background:none;border:none;color:'+green+';cursor:pointer;font-family:Georgia,serif;">← Back</button><p style="margin-top:20px;">Recipe not found.</p></div>'; }

  var disp = (typeof tinzaDisplayName === 'function') ? tinzaDisplayName(r) : r.name;
  var steps = (r.method||'').split(/\.\s+/).map(function(x){return x.trim();}).filter(Boolean);
  if(!steps.length){ return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;padding:20px;color:#e0d4b8;"><button onclick="set({wkCooking:null})" style="background:none;border:none;color:'+green+';cursor:pointer;font-family:Georgia,serif;">← Back</button><p style="margin-top:20px;">No method steps for this recipe yet.</p></div>'; }

  var idx = Math.min(Math.max(0, c.step||0), steps.length-1);
  var step = steps[idx];
  if(step.slice(-1).match(/[.!?]/) === null) step += '.';
  var tp = wkStepTimer(step);
  var pct = Math.round(((idx+1)/steps.length)*100);
  var last = idx === steps.length-1;

  return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;display:flex;flex-direction:column;">'
    // header
    + '<div style="background:#1a1208;border-bottom:1px solid #3a2010;padding:14px 16px;">'
    +   '<button onclick="set({wkCooking:null});window.scrollTo(0,0);" style="background:none;border:none;color:'+green+';font-size:13px;cursor:pointer;font-family:Georgia,serif;padding:0;">✕ Exit cooking mode</button>'
    +   '<div style="font-size:17px;color:'+cream+';margin-top:6px;">'+disp+'</div>'
    +   '<div style="font-size:13px;color:#e0d4b8;margin-top:2px;">Step '+(idx+1)+' of '+steps.length+'</div>'
    +   '<div style="height:5px;background:#0f0e0c;border-radius:3px;margin-top:10px;overflow:hidden;"><div style="height:100%;width:'+pct+'%;background:'+green+';"></div></div>'
    + '</div>'
    // step body
    + '<div style="flex:1;padding:28px 22px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   '<div style="width:46px;height:46px;border-radius:50%;background:#1a1208;border:2px solid '+green+';display:flex;align-items:center;justify-content:center;font-size:20px;color:'+green+';margin-bottom:18px;">'+(idx+1)+'</div>'
    +   '<div style="font-size:20px;color:#dce8de;line-height:1.65;">'+step+'</div>'
    +   (tp ? '<div style="margin-top:18px;"><span style="display:inline-block;background:#1a1208;border:1px solid '+green+';border-radius:8px;color:'+green+';font-size:14px;padding:6px 14px;">'+tp+'</span></div>' : '')
    + '</div>'
    // nav
    + '<div style="display:flex;gap:10px;padding:16px 22px 30px;max-width:600px;margin:0 auto;width:100%;box-sizing:border-box;">'
    +   (idx>0 ? '<button onclick="set({wkCooking:{id:\''+r.id+'\',step:'+(idx-1)+'}});window.scrollTo(0,0);" style="flex:1;padding:14px;border-radius:12px;background:#160f08;border:1px solid '+green+';color:'+green+';font-size:15px;cursor:pointer;font-family:Georgia,serif;">← Previous</button>' : '')
    +   (last
        ? '<button onclick="set({wkCooking:null});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+green+';border:1px solid '+green+';color:#c06020;font-size:15px;font-weight:bold;cursor:pointer;font-family:Georgia,serif;">✓ Done</button>'
        : '<button onclick="set({wkCooking:{id:\''+r.id+'\',step:'+(idx+1)+'}});window.scrollTo(0,0);" style="flex:2;padding:14px;border-radius:12px;background:'+green+';border:1px solid '+green+';color:#c06020;font-size:15px;font-weight:bold;cursor:pointer;font-family:Georgia,serif;">Next →</button>')
    + '</div>'
    + '</div>';
}

/* ── consolidated, costed shopping list across the whole WK plan ──
   aggregates parsed ingredients (scaled per recipe servings), +10% buffer. */
function wkBuildPlanShopping(){
  var pool = wkPool();
  var map = {}, missing = {};
  var counts = wkPlanPoolCounts(), ap = wkAppetite(), guests = wkGuests();
  (S.wkPlan||[]).forEach(function(entry){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===entry.id){ r=pool[i]; break; } }
    if(!r) return;
    var pk = wkPoolOf(r.course);
    var n = guests * wkEffectiveMult(r, counts[pk]||1, ap) * wkBumpOf(r.id);   // plate-anchored per-person x guests x bump
    wkParseIngredients(r.ingredients).forEach(function(it){
      if(it.toTaste || it.qty==null){
        var tk = wkCleanName(it.name) || it.name;
        if(!map['~'+tk]) map['~'+tk] = { name:it.name, toTaste:true };
        return;
      }
      if(wkIsWater(it.name)) return;                    // water — not bought
      var pr = wkPriceLookup(it.name);
      var key = (pr ? pr.key : wkCleanName(it.name)) + '|' + (pr&&pr.per==='count'?'count':(it.unit==='kg'?'g':it.unit==='l'?'ml':it.unit));
      var qty = it.qty * n;
      // normalise to base unit g / ml / count
      var unit = it.unit, amt = qty;
      if(unit==='kg'){ unit='g'; amt=qty*1000; }
      if(unit==='l'){  unit='ml'; amt=qty*1000; }
      if(pr && pr.per==='count'){ unit='count'; }
      if(!map[key]) map[key] = { name:(pr?it.name:it.name), unit:unit, amt:0, price:pr?pr.price:null, per:pr?pr.per:null };
      map[key].amt += amt;
      if(!pr) missing[wkCleanName(it.name)] = 1;
    });
  });

  var out = [], total = 0;
  Object.keys(map).forEach(function(k){
    var e = map[k];
    if(e.toTaste){ out.push({ name:e.name, amt:'to taste', cost:null, aisle:(typeof aisleCategory==='function'?aisleCategory(e.name):'🧂 Other'), faded:true }); return; }
    var buffered = e.amt * 1.10;   // +10% buffer (Tinza standard)
    var amtStr, cost=null;
    if(e.unit==='count'){ var c=Math.ceil(buffered); amtStr=c+'×'; if(e.price!=null){ cost=Math.round(c*e.price); } }
    else if(e.unit==='ml'){ amtStr = buffered>=1000?(Math.round(buffered/100)/10)+'L':(Math.round(buffered))+'ml'; if(e.price!=null) cost=Math.round((buffered/1000)*e.price); }
    else { amtStr = buffered>=1000?(Math.round(buffered/100)/10)+'kg':(Math.round(buffered))+'g'; if(e.price!=null) cost=Math.round((buffered/1000)*e.price); }
    if(cost!=null) total += cost;
    out.push({ name:e.name, amt:amtStr, cost:cost, aisle:(typeof aisleCategory==='function'?aisleCategory(e.name):'🧂 Other'), faded:false });
  });

  var order=['🥩 Meat & Fish','🥛 Dairy & Eggs','🥦 Fruit & Veg','🥫 Pantry','🧂 Other'];
  out.sort(function(a,b){ var ai=order.indexOf(a.aisle), bi=order.indexOf(b.aisle); if(ai!==bi) return ai-bi; return a.name.localeCompare(b.name); });
  return { items:out, total:Math.round(total), missing:Object.keys(missing) };
}

/* ── MY PLAN screen ── */
/* ── My Plan tick-off / share / print (WK-aware, self-contained — never touches braai) ── */
function wkToggleShop(name){
  var c = Object.assign({}, S.wkCheckedShop || {});
  c[name] = !c[name];
  set({ wkCheckedShop: c });
}
function wkPlanShareText(includeList){
  var pool = wkPool(), plan = S.wkPlan || [];
  var L = ['*My World Kitchen Plan*', ''];
  plan.forEach(function(e){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===e.id){ r=pool[i]; break; } }
    if(!r) return;
    var n = Math.max(1, e.servings||1);
    var disp = (typeof tinzaDisplayName==='function') ? tinzaDisplayName(r) : r.name;
    L.push('\u2022 ' + disp + '  (' + n + ' ' + (n===1?'serving':'servings') + ')');
  });
  if(includeList){
    var shop = wkBuildPlanShopping(), cur='';
    L.push('', '*Shopping list*  (+10% buffer)');
    shop.items.forEach(function(it){
      if(it.aisle!==cur){ cur=it.aisle; L.push('', it.aisle); }
      L.push('  [ ] ' + it.name + ' \u2014 ' + it.amt + (it.cost!=null ? ' (R'+it.cost+')' : ''));
    });
    L.push('', 'Estimated total: ~R' + shop.total);
  }
  L.push('', '\u2014 made with Tinza');
  return L.join('\n');
}
function wkShareDishes(){ window.open('https://wa.me/?text=' + encodeURIComponent(wkPlanShareText(false)), '_blank'); }
function wkShareWithList(){ window.open('https://wa.me/?text=' + encodeURIComponent(wkPlanShareText(true)), '_blank'); }
function wkPrintPlan(){
  var pool = wkPool(), plan = S.wkPlan || [];
  var rows = plan.map(function(e){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===e.id){ r=pool[i]; break; } }
    if(!r) return '';
    var n = Math.max(1, e.servings||1);
    var disp = (typeof tinzaDisplayName==='function') ? tinzaDisplayName(r) : r.name;
    return '<li>' + disp + ' &mdash; ' + n + ' ' + (n===1?'serving':'servings') + '</li>';
  }).join('');
  var shop = wkBuildPlanShopping(), cur='', sl='';
  shop.items.forEach(function(it){
    if(it.aisle!==cur){ cur=it.aisle; sl += '<h3>'+it.aisle+'</h3>'; }
    sl += '<div>&#9744; ' + it.name + ' &mdash; ' + it.amt + (it.cost!=null?' (R'+it.cost+')':'') + '</div>';
  });
  var w = window.open('', '_blank');
  if(!w){ alert('Please allow pop-ups to print your plan.'); return; }
  w.document.write('<html><head><title>My World Kitchen Plan</title>'
    + '<style>body{font-family:Georgia,serif;color:#7f7f7f;padding:28px;line-height:1.6;}h1{font-size:22px;}h2{font-size:15px;margin-top:22px;}h3{font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#808080;margin:14px 0 4px;}ul{margin:0;padding-left:20px;}li{margin:4px 0;}.tot{margin-top:18px;font-weight:bold;}</style></head><body>'
    + '<h1>&#127757; My World Kitchen Plan</h1><h2>Dishes</h2><ul>' + rows + '</ul>'
    + '<h2>Shopping list <span style="font-weight:normal;font-size:13px;color:#808080;">(+10% buffer)</span></h2>' + sl
    + '<div class="tot">Estimated total: ~R' + shop.total + '</div></body></html>');
  w.document.close(); w.focus(); setTimeout(function(){ w.print(); }, 300);
}

/* -- Portion Brain pools (Jun 2026): spread by COURSE at plan level --
   Each dish shows a fraction of its solo per-person portion, set by how
   many dishes share its course. Floors stop the 'teaspoon of mousse'.
   Self-contained in worldkitchen.js -- no core.js changes. */
function wkPoolOf(course){
  switch(course){
    case 'side': case 'salad': return 'side';
    case 'dessert': return 'dessert';
    case 'starter': case 'snack': case 'finger': return 'starter';
    case 'drink': case 'beverage': return 'drink';
    default: return 'main';
  }
}
function wkSpreadMult(poolKey, count){
  if(count<=1) return 1.0;
  if(poolKey==='side'){    if(count===2)return 0.80; if(count===3)return 0.667; if(count===4)return 0.567; return 0.50; }
  if(poolKey==='dessert'){ if(count===2)return 0.75; if(count===3)return 0.65;  if(count===4)return 0.58;  return 0.55; }
  if(poolKey==='starter'){ if(count===2)return 0.80; if(count===3)return 0.70;  if(count===4)return 0.62;  return 0.55; }
  if(poolKey==='drink')  return 1.0;                       // drinks: per guest, never divided
  if(count===2)return 0.65; if(count===3)return 0.50; return 0.50;   // main / veg-main (floor 50%, researched)
}
var WK_POOL_LABEL = { main:'Main', side:'Side', dessert:'Dessert', starter:'Starter', drink:'Drink' };
function wkPlanPoolCounts(){
  var pool = wkPool(), counts = {};
  (S.wkPlan||[]).forEach(function(entry){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===entry.id){ r=pool[i]; break; } }
    if(r){ var pk=wkPoolOf(r.course); counts[pk]=(counts[pk]||0)+1; }
  });
  return counts;
}
function wkAppetite(){
  if(typeof APPETITE !== 'undefined' && S.appetite && APPETITE[S.appetite]) return APPETITE[S.appetite];
  return { mult:1, label:'Normal' };
}
function wkGuests(){ return Math.max(1, S.wkGuests || 10); }
function wkPoolBase(poolKey){
  // standard solo per-person base (grams) for non-main pools
  if(poolKey==='side') return 150;
  if(poolKey==='dessert') return 120;
  if(poolKey==='starter') return 60;
  if(poolKey==='drink') return null;     // drinks: keep authored, per guest
  return 180;                            // fallback
}
function wkMainCategory(name){
  var n = (typeof wkCleanName==='function') ? wkCleanName(name) : String(name||'').toLowerCase();
  if(/\b(fish|hake|snoek|kingklip|kabeljou|yellowtail|salmon|tuna|trout|sardine|sardines|pilchard|pilchards|anchovy|anchovies|mackerel|prawn|prawns|shrimp|calamari|squid|mussel|mussels|crab|lobster|crayfish|oyster|oysters|scallop|scallops|seafood|octopus|cod|clam|clams|herring|haring|perch|sea bass|bass|dogfish|whitebait)\b/.test(n)) return 'fish';
  if(/\b(bone[- ]?in|on the bone|chop|chops|rib|ribs|wing|wings|drumstick|drumsticks|shank|neck|oxtail|trotter|cutlet|cutlets|spatchcock|whole chicken)\b/.test(n)) return 'bonein';
  if(/\b(beef|lamb|mutton|pork|chicken|mince|minced|steak|fillet|sausage|wors|boerewors|brisket|chuck|goat|sosatie|kebab|bacon|ham|gammon|venison|duck|turkey|meatball|meatballs|meats|frikkadel|rabbit|reindeer|liver|veal|bratwurst|saucisson|suckling|pig|meat|tongue)\b/.test(n)) return 'meat';
  if(/\b(lentil|lentils|bean|beans|chickpea|chickpeas|chana|dal|dhal|paneer|tofu|soya|halloumi|egg|eggs|mushroom|mushrooms|butternut|aubergine|brinjal|eggplant|cauliflower|spinach|jackfruit|shiro|cowpea|black-eyed|black eyed|okra|plantain)\b/.test(n)) return 'veg';
  return null;
}
function wkClassifyMain(items){
  // find the protein/main ingredient + its category; fall back to first weighted line
  var i, cat, firstWeighted=null;
  for(i=0;i<items.length;i++){
    var it=items[i];
    if(it.qty==null || it.toTaste) continue;
    if(!firstWeighted) firstWeighted=it;
    cat = wkMainCategory(it.name);
    if(cat) return { item:it, cat:cat };
  }
  if(firstWeighted){
    var fwn = (typeof wkCleanName==='function') ? wkCleanName(firstWeighted.name) : String(firstWeighted.name||'').toLowerCase();
    if(/\b(rice|pasta|noodle|noodles|spaghetti|macaroni|penne|tagliatelle|vermicelli|flour|bread|dough|couscous|polenta|semolina|potato|potatoes|dumpling|dumplings|gnocchi|injera|roti|paratha|pierogi|vareniki|tortilla|maize|samp)\b/.test(fwn))
      return { item:firstWeighted, cat:'carb' };   // starch-led main -> keep authored amounts
  }
  return { item:firstWeighted, cat:'veg' };   // no protein found -> treat as veg/composed main (200g)
}
function wkMainBase(cat){
  if(cat==='bonein') return 250;   // bone-in meat / poultry
  if(cat==='fish')   return 160;   // fish / seafood
  if(cat==='veg')    return 200;   // vegetarian main (~lasagne + a bit)
  if(cat==='carb')   return null;  // starch-led main (pasta/rice/dough) -> keep authored amounts
  return 180;                      // boneless meat / poultry (default)
}
function wkEffectiveMult(r, count, ap){
  // scale the recipe's authored per-person amounts so the MAIN ingredient lands
  // on its CATEGORY plate (base x spread), floored by the curve.
  var pk = wkPoolOf(r.course);
  var mult = (ap && ap.mult) || 1;
  if(pk==='drink') return mult;                         // per guest, authored amounts
  var items = wkParseIngredients(r.ingredients), main, base, i;
  if(pk==='main'){
    var cls = wkClassifyMain(items);                    // meat / bonein / fish / veg / carb
    main = cls.item; base = wkMainBase(cls.cat);
    if(base==null) return wkSpreadMult('main', count) * mult;   // carb/composed main: keep authored, just spread
  } else {
    base = wkPoolBase(pk); main=null;
    for(i=0;i<items.length;i++){ if(items[i].qty!=null && !items[i].toTaste){ main=items[i]; break; } }
  }
  var spread = wkSpreadMult(pk, count), authored=null;
  if(main && main.unit){
    var u=main.unit, q=main.qty;
    if(u==='kg'){ q=q*1000; } if(u==='l'){ q=q*1000; }
    if(u==='g'||u==='kg'||u==='ml'||u==='l') authored=q;
  }
  if(authored && authored>0) return (base*spread*mult)/authored;
  return spread*mult;
}
function wkBumpOf(id){ var b=S.wkBump||{}; return b[id]||1; }
function wkSetBump(id, mult){ var b=Object.assign({},S.wkBump||{}); b[id]=Math.max(0.25, Math.round(mult*100)/100); set({wkBump:b}); }

function wkMyPlanView(){
  var green='#c06020', cream='#f5e8cc';
  var pool = wkPool();
  var plan = S.wkPlan||[];

  var header = '<div style="background:#1a1208;border-bottom:1px solid #3a2010;padding:14px 20px;">'
    + '<button onclick="set({wkScreen:null});window.scrollTo(0,0);" style="background:none;border:none;color:'+green+';font-size:13px;cursor:pointer;margin-bottom:6px;padding:0;display:block;font-family:Georgia,serif;">← World Kitchen</button>'
    + '<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:10px;">'
    +   '<div><h1 style="font-size:20px;font-weight:normal;color:'+cream+';margin:0;">🧺 My World Kitchen Plan</h1>'
    +   '<p style="font-size:13px;color:#e0d4b8;margin:2px 0 0;font-style:italic;">'+plan.length+' '+(plan.length===1?'dish':'dishes')+'</p></div>'
    +   (plan.length ? '<button onclick="wkPlanClearAll()" style="background:#180e0a;border:1px solid #6a3030;color:#c07a68;border-radius:20px;font-size:13px;padding:6px 12px;cursor:pointer;font-family:Georgia,serif;white-space:nowrap;">Clear all</button>' : '')
    + '</div></div>';

  if(!plan.length){
    return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">'+header
      + '<div style="padding:40px 20px;text-align:center;color:#e0d4b8;font-size:13px;">Your plan is empty.<br>Open any dish and tap <span style="color:'+green+';">＋ Add to My Plan</span>.</div></div>';
  }

  var counts = wkPlanPoolCounts();
  var ap = wkAppetite();
  var guests = wkGuests();
  var dishes = plan.map(function(entry){
    var r=null; for(var i=0;i<pool.length;i++){ if(pool[i].id===entry.id){ r=pool[i]; break; } }
    if(!r) return '';
    var disp = (typeof tinzaDisplayName === 'function') ? tinzaDisplayName(r) : (r.name + (r.nameAlt ? (' ('+r.nameAlt+')') : ''));
    var pk = wkPoolOf(r.course);
    var cnt = counts[pk] || 1;
    var spread = wkSpreadMult(pk, cnt);
    var bump = wkBumpOf(r.id);
    var mult = wkEffectiveMult(r, cnt, ap) * bump;    // per-person factor on authored amounts
    var n = guests * mult;                            // party total (servings-equivalent)
    var c = wkCostRecipe(r, n);
    var items = wkParseIngredients(r.ingredients);
    var mainItem = wkClassifyMain(items).item;
    var portionPct = Math.round(spread*100);
    var poolLabel = (WK_POOL_LABEL[pk]||'Dish');
    var shareNote = (pk==='drink')
      ? poolLabel+' \u00b7 per guest'
      : (cnt>1 ? poolLabel+' \u00b7 1 of '+cnt+' \u00b7 '+portionPct+'% of plate' : poolLabel+' \u00b7 full portion');
    if(bump!==1) shareNote += ' \u00b7 <span style="color:#f5c842;">'+bump+'\u00d7</span>';
    var mainLine = mainItem
      ? '<div style="font-size:13px;color:#e0d4b8;margin-top:4px;">'+mainItem.name+': '
        + '<span style="color:#e0d4b8;font-size:13px;">'+wkScaleLine(mainItem, mult).amt+' pp</span> <span style="color:#e0d4b8;">\u00b7</span> '
        + '<strong style="color:#f5c842;">'+wkScaleLine(mainItem, mult*guests).amt+'</strong></div>'
      : '';
    var adjuster = '';  // per-dish "Portion for this dish" removed — the global Guests stepper scales the whole menu
    return '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:12px 14px;margin-bottom:8px;">'
      + '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">'
      +   '<div onclick="wkOpenRecipe(\''+r.country+'\',\''+r.id+'\','+Math.max(1,Math.round(n))+')" style="flex:1;cursor:pointer;">'
      +     '<div style="font-size:16px;color:'+cream+';font-weight:bold;">'+disp+'</div>'
      +     '<div style="font-size:13px;color:'+green+';margin-top:2px;">'+shareNote+(c.priced?(' \u00b7 ~R'+c.total):'')+'</div>'
      +     mainLine
      +   '</div>'
      +   '<button onclick="wkPlanToggle(\''+r.id+'\')" style="background:none;border:none;color:#bc6b6b;font-size:16px;cursor:pointer;">\u2715</button>'
      + '</div>'
      + adjuster
      + '</div>';
  }).join('');
  var controls = '<div style="background:#1a1208;border:1px solid '+green+';border-radius:10px;padding:12px 14px;margin-bottom:12px;">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;">'
    +   '<div><div style="font-size:13px;color:'+cream+';font-weight:bold;">Guests</div>'
    +     '<div style="font-size:13px;color:#e0d4b8;margin-top:2px;">the whole menu scales to this</div></div>'
    +   '<div style="display:flex;align-items:center;gap:10px;">'
    +     '<button onclick="set({wkGuests:Math.max(1,(S.wkGuests||10)-1)})" style="width:30px;height:30px;border-radius:50%;background:#1a1208;border:2px solid '+green+';color:'+green+';font-size:18px;line-height:1;cursor:pointer;">\u2212</button>'
    +     '<span style="font-size:22px;color:'+cream+';font-weight:bold;min-width:34px;text-align:center;">'+guests+'</span>'
    +     '<button onclick="set({wkGuests:(S.wkGuests||10)+1})" style="width:30px;height:30px;border-radius:50%;background:#1a1208;border:2px solid '+green+';color:'+green+';font-size:18px;line-height:1;cursor:pointer;">\uff0b</button>'
    +   '</div>'
    + '</div>'
    + '<div style="margin-top:10px;">'
    +   '<span id="wkpp-btn" onclick="(function(){var c=document.getElementById(\'wkpp-body\');var b=document.getElementById(\'wkpp-btn\');var open=c.style.display===\'block\';c.style.display=open?\'none\':\'block\';b.innerHTML=(open?\'\u25bc\':\'\u25b2\')+\' How portion size works\';})()" style="font-size:13px;color:'+green+';cursor:pointer;user-select:none;">\u25bc How portion size works</span>'
    +   '<div id="wkpp-body" style="display:none;background:#161210;border:1px solid #2a1a10;border-radius:8px;padding:12px;margin-top:6px;font-size:13px;color:#e0d4b8;line-height:1.8;">'
    +     'One dish in a course \u2192 a full helping.<br>'
    +     'Add more of the same course \u2192 each gets a smaller slice of the same plate.<br>'
    +     'It never drops below a sensible minimum \u2014 no teaspoon portions.<br>'
    +     'Drinks and a single cake stay per guest.<br>'
    +     'Sized for <strong style="color:'+cream+';">'+ap.label+'</strong> eaters \u2014 change Big / Normal / Small on the opening page.'
    +   '</div>'
    + '</div></div>';
  var shop = wkBuildPlanShopping();
  var isWkPro = (typeof USER_TIER !== 'undefined') && USER_TIER === 'pro';
  var checked = S.wkCheckedShop || {};
  var curAisle='', shopRows='';
  shop.items.forEach(function(it){
    if(it.aisle!==curAisle){ curAisle=it.aisle; shopRows += '<div style="font-size:13px;letter-spacing:0.06em;color:'+green+';text-transform:uppercase;margin:12px 0 4px;">'+curAisle+'</div>'; }
    var isOn = !!checked[it.name];
    var key  = it.name.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
    shopRows += '<div onclick="wkToggleShop(\''+key+'\')" style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #1a1208;cursor:pointer;opacity:'+(isOn?'0.35':'1')+';">'
      + '<div style="width:20px;height:20px;border-radius:4px;border:2px solid '+green+';flex-shrink:0;display:flex;align-items:center;justify-content:center;background:'+(isOn?green:'transparent')+';">'+(isOn?'<span style="color:#c06020;font-size:13px;">\u2713</span>':'')+'</div>'
      + '<span style="flex:1;font-size:15px;color:'+(isOn?'#6a5440':(it.faded?'#b0987a':'#f0ebe1'))+';font-style:'+(it.faded?'italic':'normal')+';text-decoration:'+(isOn?'line-through':'none')+';">'+it.name+'</span>'
      + '<span style="font-size:15px;color:'+(isOn?'#6a5440':(it.faded?'#b0987a':green))+';white-space:nowrap;">'+it.amt+(it.cost!=null?' \u00b7 R'+it.cost:'')+'</span></div>';
  });
  var remaining = shop.items.filter(function(it){ return !checked[it.name]; }).length;
  var remainRow = shop.items.length
    ? '<div style="margin-top:10px;padding-top:10px;border-top:1px solid #1a1208;display:flex;justify-content:space-between;align-items:center;">'
      + '<span style="font-size:14px;color:#e0d4b8;">'+remaining+' of '+shop.items.length+' items remaining</span>'
      + '<button onclick="set({wkCheckedShop:{}})" style="background:none;border:none;color:'+green+';font-size:13px;cursor:pointer;text-decoration:underline;font-family:Georgia,serif;">Reset all</button></div>'
    : '';
  var missNote = shop.missing.length
    ? '<div style="font-size:14px;color:#9ab36a;margin-top:8px;">\u2248 estimate \u2014 not yet priced: '+shop.missing.slice(0,8).join(', ')+(shop.missing.length>8?'\u2026':'')+'</div>' : '';

  var shopBox = isWkPro
    ? '<div style="background:#161210;border:1px solid #2a1a10;border-radius:10px;padding:14px;margin-bottom:12px;">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">'
      +   '<div style="font-size:13px;letter-spacing:0.08em;color:'+green+';text-transform:uppercase;">\ud83d\uded2 Shopping list <span style="color:#e0d4b8;text-transform:none;">(+10% buffer)</span></div>'
      +   '<div style="font-size:20px;color:'+green+';font-weight:bold;">~R'+shop.total+'</div>'
      + '</div>'
      + '<div style="font-size:13px;color:#e0d4b8;margin-bottom:8px;">\u2705 Tap items you already have to tick them off</div>'
      + shopRows + remainRow + missNote + '</div>'
    : '<div style="background:#160f08;border:1px dashed #3a2010;border-radius:10px;padding:20px;margin-bottom:12px;text-align:center;">'
      + '<div style="font-size:32px;margin-bottom:8px;">\ud83d\udd12</div>'
      + '<div style="font-size:14px;color:'+green+';margin-bottom:6px;font-weight:bold;">Full Shopping List &amp; Cost</div>'
      + '<div style="font-size:13px;color:#e0d4b8;margin-bottom:10px;line-height:1.6;">Every ingredient across your dishes, combined with no duplicates, aisle-sorted, with the +10% buffer \u2014 plus the estimated total.</div>'
      + '<div style="font-size:13px;color:'+green+';font-weight:bold;">Unlock with Tinza Pro \u2014 R99/month</div></div>';

  // action stack — mirrors Braai's My Plan footer (Free/Pro gated)
  var shareRow = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">'
    + '<button onclick="wkShareDishes()" style="padding:14px;border-radius:10px;cursor:pointer;background:#0f2a1a;border:2px solid #25d366;color:#25d366;font-size:13px;font-weight:bold;line-height:1.4;font-family:Georgia,serif;">\ud83d\udcf1 Share Plan<br><span style="font-size:13px;opacity:0.7;">\ud83c\udd93 Free</span></button>'
    + (isWkPro
        ? '<button onclick="wkShareWithList()" style="padding:14px;border-radius:10px;cursor:pointer;background:#0f2a1a;border:2px solid #25d366;color:#25d366;font-size:13px;font-weight:bold;line-height:1.4;font-family:Georgia,serif;">\ud83d\udcf1 Share + Shopping List<br><span style="font-size:13px;opacity:0.7;">\ud83d\udc51 Pro</span></button>'
        : '<button style="padding:14px;border-radius:10px;cursor:not-allowed;background:#0f0e0c;border:2px solid #1a1208;color:#b0936a;font-size:13px;line-height:1.4;font-family:Georgia,serif;">\ud83d\udd12 Full List<br><span style="font-size:13px;">\ud83d\udc51 Pro only</span></button>')
    + '</div>';
  var printBtn = isWkPro
    ? '<button onclick="wkPrintPlan()" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#181008;border:2px solid #c0a020;color:#f5c842;font-size:13px;font-weight:bold;margin-bottom:10px;font-family:Georgia,serif;">\ud83d\udda8\ufe0f Print / Save as PDF <span style="font-size:13px;opacity:0.7;">\ud83d\udc51 Pro</span></button>'
    : '<button style="width:100%;padding:13px;border-radius:10px;cursor:not-allowed;background:#0f0e0c;border:1px solid #1a1208;color:#b0936a;font-size:13px;margin-bottom:10px;font-family:Georgia,serif;">\ud83d\udd12 Print / Save as PDF \u2014 Pro only</button>';
  var newBtn = '<button onclick="if(confirm(\'Clear your World Kitchen plan and start fresh?\')){set({wkPlan:[],wkCheckedShop:{}});window.scrollTo(0,0);}" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#1a1208;border:2px solid '+green+';color:#f5c842;font-size:13px;font-weight:bold;margin-bottom:14px;font-family:Georgia,serif;">\ud83d\udd04 Start a New Plan</button>';
  var navRow = '<div style="display:flex;justify-content:space-between;padding:0 4px 24px;font-size:13px;">'
    + '<button onclick="set({wkScreen:null});window.scrollTo(0,0);" style="background:none;border:none;color:'+green+';cursor:pointer;font-family:Georgia,serif;">\u2190 World Kitchen</button>'
    + '<button onclick="set({screen:\'home\'})" style="background:none;border:none;color:#e0d4b8;cursor:pointer;font-family:Georgia,serif;">Home</button>'
    + '</div>';

  return '<div style="min-height:100vh;background:#0f0e0c;font-family:Georgia,serif;">'+header
    + '<div style="padding:16px;max-width:600px;margin:0 auto;">'+controls+dishes+shopBox+shareRow+printBtn+newBtn+navRow+'</div></div>';
}
