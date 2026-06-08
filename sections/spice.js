// ── TINZA SPICE ROOM ─────────────────────────────────────────────────────────
// "Everything that enhances your food."
// PILOT FILE — 6 entries, locked schema. Roll the rest from the seed list.
//
// SCHEMA (locked):
//   id            slug, unique
//   name          display name
//   type          blend | sauce | chutney | sambal | relish | preserve | jam | dressing | dip | paste
//   shelf         spice-blends | sauces | chutneys-atchars | sambals-relishes | jams-preserves | dressings-dips
//   region        where it comes from (human, short)
//   flavourChips  [max 3]  Warm · Earthy · Tangy · Hot · Aromatic · Herby
//   whenToUse     start | mid | finish   (when it goes into the cook)
//   makeYourOwn   { ingredients:[one per line], method:"joined prose" }   ← the heart
//   pairsWith     [dish/ingredient names]   (mirrors braai "Goes Well With")
//   aliases       [strings]  ← recipe auto-linker matches any of these in an ingredient line
//   story         2 sentences, human + cultural
//   howThisFeels  ""   (deferred soul-pass)

var SPICE_DB = [

  {
    id: "garam-masala",
    name: "Garam Masala",
    type: "blend",
    shelf: "spice-blends",
    region: "North India",
    flavourChips: ["Warm", "Aromatic", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      ingredients: [
        "cumin seeds 2 tbsp",
        "coriander seeds 2 tbsp",
        "green cardamom pods 1 tbsp",
        "black peppercorns 1 tbsp",
        "whole cloves 1 tsp",
        "cinnamon stick 1 (5 cm)",
        "bay leaves 2",
        "nutmeg ¼ tsp, grated"
      ],
      method: "Dry-roast the cumin, coriander, cardamom, peppercorns, cloves, cinnamon and bay in a hot dry pan over medium heat, shaking constantly until they darken a shade and smell toasty (2–3 min). Tip onto a cold plate and let them cool completely. Grind to a fine powder with the grated nutmeg, then store airtight away from light. Add near the END of cooking — the aroma is delicate and burns off if simmered too long."
    },
    pairsWith: ["Butter Chicken", "dhal", "biryani", "roast vegetables"],
    aliases: ["garam masala", "garam-masala"],
    story: "Garam means 'warm' — not chilli-hot, but the warming spices believed to lift the body's heat. Every family and region grinds its own, so no two tins ever taste quite the same.",
    howThisFeels: ""
  },

  {
    id: "peri-peri-sauce",
    name: "Peri-Peri Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "Mozambique · Afro-Portuguese",
    flavourChips: ["Hot", "Tangy", "Aromatic"],
    whenToUse: "mid",
    makeYourOwn: {
      ingredients: [
        "African bird's-eye chillies 8–12",
        "garlic cloves 4",
        "lemon juice 60 ml",
        "red wine vinegar 30 ml",
        "smoked paprika 1 tbsp",
        "dried oregano 1 tsp",
        "olive oil 100 ml",
        "salt 1 tsp"
      ],
      method: "Blend the chillies, garlic, lemon juice, vinegar, paprika, oregano and salt to a coarse paste. With the motor running, stream in the olive oil until it loosens into a pourable sauce. Warm gently in a pan for 5 min to marry the flavours (do not boil). Use as a marinade and a baste DURING cooking, then keep a little back fresh to spoon over at the table."
    },
    pairsWith: ["Frango Piri-Piri", "flame-grilled chicken", "prawns", "slap chips"],
    aliases: ["peri-peri", "peri peri", "piri-piri", "piri piri", "peri-peri sauce"],
    story: "Portuguese traders met the tiny, fierce bird's-eye chilli in Mozambique and carried it across their world — the name simply means 'pepper-pepper' in Swahili. It became the soul of flame-grilled chicken from Maputo to Joburg.",
    howThisFeels: ""
  },

  {
    id: "chakalaka",
    name: "Chakalaka",
    type: "relish",
    shelf: "sambals-relishes",
    region: "South Africa · township kitchens",
    flavourChips: ["Tangy", "Hot", "Earthy"],
    whenToUse: "finish",
    makeYourOwn: {
      ingredients: [
        "onion 1, finely chopped",
        "garlic cloves 2, crushed",
        "carrots 2, coarsely grated",
        "green pepper 1, diced",
        "curry powder 1 tbsp",
        "chopped tomatoes 1 tin (400 g)",
        "baked beans 1 tin (410 g)",
        "green chilli 1, finely chopped",
        "sunflower oil 2 tbsp",
        "salt to taste"
      ],
      method: "Fry the onion and garlic in the oil until soft and golden. Stir in the carrots, green pepper, chilli and curry powder and cook 3–4 min so the spice blooms. Add the tomatoes and simmer 10 min until thick and glossy. Fold the baked beans through at the very end, just to heat — overcooking turns them to mush. Serve warm or at room temperature ALONGSIDE the meal, not cooked into it."
    },
    pairsWith: ["pap", "braai meat", "boerewors", "fresh bread"],
    aliases: ["chakalaka", "chaka laka"],
    story: "Born in the mine hostels and township kitchens of Gauteng, chakalaka was a way to turn a few cheap vegetables and a tin of beans into something bright and fiery. It's now on every braai table and Sunday plate in the country.",
    howThisFeels: ""
  },

  {
    id: "mango-atchar",
    name: "Mango Atchar",
    type: "chutney",
    shelf: "chutneys-atchars",
    region: "South Africa · Cape Malay & Indian",
    flavourChips: ["Tangy", "Hot", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      ingredients: [
        "green (unripe) mangoes 4, shredded",
        "atchar / achar masala 2 tbsp",
        "turmeric 1 tsp",
        "chilli powder 1 tbsp",
        "fenugreek (methi) seeds 1 tsp",
        "mustard seeds 1 tsp",
        "sunflower oil 250 ml",
        "salt 2 tbsp"
      ],
      method: "Toss the shredded green mango with the salt and leave in a colander for a few hours to draw out the liquid, then pat dry. Heat the oil until shimmering, drop in the mustard and fenugreek seeds and let them crackle, then stir in the turmeric, chilli and atchar masala off the heat. Mix the spiced oil through the mango until every strand is coated. Pack into a sterilised jar, top with a film of oil, and leave to mature for at least 3 days. Serve a spoonful on the side to cut through rich, saucy dishes."
    },
    pairsWith: ["bunny chow", "Durban curry", "breyani", "bread & butter"],
    aliases: ["mango atchar", "atchar", "achar", "mango achar"],
    story: "Atchar travelled with indentured workers from India to the sugar-cane coast of Natal, where the green mango harvest made it a household staple. Sharp, oily and fierce, a spoonful is meant to wake up the whole plate.",
    howThisFeels: ""
  },

  {
    id: "chimichurri",
    name: "Chimichurri",
    type: "sauce",
    shelf: "sauces",
    region: "Argentina · Uruguay",
    flavourChips: ["Herby", "Tangy", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      ingredients: [
        "flat-leaf parsley 1 large bunch, finely chopped",
        "garlic cloves 4, finely chopped",
        "dried oregano 1 tbsp",
        "red chilli flakes 1 tsp",
        "red wine vinegar 60 ml",
        "olive oil 120 ml",
        "salt 1 tsp"
      ],
      method: "Chop the parsley and garlic as finely as you can by hand — a blender bruises it and turns it bitter. Stir in the oregano, chilli flakes, salt and vinegar, then loosen with the olive oil to a loose, spoonable sauce. Leave it to stand at room temperature for at least 30 min so the flavours open up. Spoon raw over hot grilled meat at the table — never cook it."
    },
    pairsWith: ["grilled steak", "braai", "flame-grilled chicken", "roast vegetables"],
    aliases: ["chimichurri", "chimi churri"],
    story: "On the Argentine and Uruguayan grill, chimichurri is the green counterpoint to all that char and fat — bright, sharp and garlicky. It's never blended smooth and never cooked; the freshness IS the point.",
    howThisFeels: ""
  },

  {
    id: "monkey-gland-sauce",
    name: "Monkey Gland Sauce",
    type: "sauce",
    shelf: "sauces",
    region: "South Africa",
    flavourChips: ["Tangy", "Warm", "Aromatic"],
    whenToUse: "finish",
    makeYourOwn: {
      ingredients: [
        "onion 1, finely chopped",
        "garlic cloves 2, crushed",
        "tomato sauce (ketchup) 125 ml",
        "fruit chutney 60 ml",
        "Worcestershire sauce 2 tbsp",
        "brown sugar 1 tbsp",
        "white vinegar 1 tbsp",
        "Dijon mustard 1 tsp",
        "sunflower oil 1 tbsp"
      ],
      method: "Fry the onion and garlic in the oil until soft and just colouring. Stir in the tomato sauce, chutney, Worcestershire, sugar, vinegar and mustard. Simmer gently 8–10 min until thickened and glossy, loosening with a splash of water if it gets too tight. Spoon over a grilled steak or burger to FINISH — there's no actual gland in it, despite the name."
    },
    pairsWith: ["grilled steak", "burgers", "boerewors", "braai"],
    aliases: ["monkey gland", "monkeygland", "monkey-gland", "monkey gland sauce"],
    story: "A Johannesburg steakhouse invention from the 1930s, named as a cheeky nod to a quack 'youth' surgery of the era — there's nothing exotic in it at all. It's pure SA comfort: sweet, tangy, faintly spiced, and poured generously over a rump.",
    howThisFeels: ""
  }

];

if (typeof window !== "undefined") window.SPICE_DB = SPICE_DB;
if (typeof module !== "undefined" && module.exports) module.exports = SPICE_DB;

// ── TINZA SPICE ROOM — SCREEN (v33) ──────────────────────────────────────────
// Self-contained UI. core.js only needs: a dispatch line + one home tile.
// State: S.spiceShelf (shelf id|null) · S.spiceEntry (entry id|null) · S.spiceFilter

var SPICE_SHELVES = [
  {id:"spice-blends",     e:"🌶️", t:"Spice Blends & Masalas", sub:"Garam masala · peri-peri · the real way", b:"#c0501a", bg:"#1d0e05"},
  {id:"sauces",           e:"🥫", t:"Sauces",                 sub:"Hot · herby · pan & savoury",            b:"#b83020", bg:"#1d0807"},
  {id:"chutneys-atchars", e:"🫙", t:"Chutneys & Atchars",     sub:"Fruit · hot atchar · savoury",           b:"#c08020", bg:"#1a1206"},
  {id:"sambals-relishes", e:"🥗", t:"Sambals & Relishes",     sub:"Fresh · cooked · SA",                    b:"#a08020", bg:"#16140a"},
  {id:"jams-preserves",   e:"🍓", t:"Jams & Preserves",       sub:"Fruit jams · marmalades · fermented",    b:"#b03050", bg:"#1a0810"},
  {id:"dressings-dips",   e:"🥣", t:"Dressings & Dips",       sub:"Creamy dips · oil & vinegar · bean dips",b:"#9060a0", bg:"#140a18"}
];

var SPICE_WHENMAP = {
  start:  {label:"Goes in at the start", e:"🔥", c:"#c06020"},
  mid:    {label:"Add while it cooks",   e:"🍲", c:"#c08030"},
  finish: {label:"Finish / serve alongside", e:"✨", c:"#c0a030"}
};

var SPICE_CHIPCOLOR = {
  "Warm":"#c0601a", "Earthy":"#9a7030", "Tangy":"#c0a020",
  "Hot":"#c03020", "Aromatic":"#b07040", "Herby":"#609040"
};

function spiceDB(){ return (typeof SPICE_DB!=="undefined" && SPICE_DB) || []; }
function spiceEntriesFor(shelfId){ return spiceDB().filter(e=>e.shelf===shelfId); }

function spiceRoomHTML(){
  if(S.spiceEntry) return spiceEntryView();
  if(S.spiceShelf) return spiceShelfView();
  return spiceLandingView();
}

// ── LANDING ──────────────────────────────────────────────────────────────────
function spiceLandingView(){
  const howOpen = !!S.spiceHowOpen;
  return `<div>
    <div class="header" style="padding:0;overflow:hidden;">
      <div style="position:relative;height:150px;background:linear-gradient(135deg,#2a1206,#3a1d08 55%,#1d0e05);display:flex;flex-direction:column;justify-content:flex-end;">
        <div style="position:absolute;top:14px;right:16px;font-size:44px;opacity:0.35;">🧂</div>
        <div style="padding:14px 16px;">
          <button class="back-btn" onclick="set({screen:'home'})" style="color:#e0a060;margin-bottom:8px;">← Home</button>
          <h1 style="margin:0;font-size:24px;font-weight:normal;color:#f5e8cc;letter-spacing:1px;">Tinza Spice Room</h1>
          <p style="margin:2px 0 0;font-size:12px;color:#c09060;font-style:italic;">Everything that enhances your food</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div onclick="S.searchPrevScreen='spice';S.searchQuery='';S.searchResults=[];S.screen='search_results';draw();window.scrollTo(0,0);"
        style="padding:9px 14px;background:#161009;border:1px solid #4a2a10;border-radius:10px;color:#7a5530;font-size:13px;cursor:text;margin-bottom:12px;">🔍 Search blends, sauces & condiments…</div>

      <div class="how-it-works" style="margin-bottom:14px;cursor:pointer;" onclick="set({spiceHowOpen:${howOpen?'false':'true'}})">
        <span style="font-size:12px;color:#c08040;">${howOpen?'▲':'▼'} How it works</span>
        ${howOpen?`<div style="font-size:12px;color:#9a8060;line-height:1.6;margin-top:8px;">Pick a shelf, then an entry. Every entry shows its <strong style="color:#c0a060;">flavour</strong>, <strong style="color:#c0a060;">when to add it</strong>, and a <strong style="color:#c0a060;">Make Your Own</strong> recipe — the real way, dry-roasted and built from scratch. Soon, any matching ingredient in a recipe (like "garam masala") will tap straight through to here.</div>`:''}
      </div>

      <div class="grid2" style="gap:8px;">
        ${SPICE_SHELVES.map(sh=>{
          const n = spiceEntriesFor(sh.id).length;
          const countTxt = n>0 ? `${n} ${n===1?'entry':'entries'}` : 'coming soon';
          return `<button onclick="set({spiceShelf:'${sh.id}',spiceFilter:null})"
            style="display:flex;flex-direction:column;align-items:flex-start;padding:14px;background:${sh.bg};border:2px solid ${sh.b};border-radius:14px;cursor:pointer;text-align:left;min-height:104px;">
            <span style="font-size:26px;margin-bottom:6px;">${sh.e}</span>
            <div style="font-size:13px;color:#f5e8cc;font-weight:bold;margin-bottom:3px;line-height:1.3;">${sh.t}</div>
            <div style="font-size:10px;color:#9a7a50;line-height:1.35;margin-bottom:6px;flex:1;">${sh.sub}</div>
            <div style="font-size:10px;color:${n>0?sh.b:'#5a4530'};letter-spacing:0.5px;">${countTxt}</div>
          </button>`;
        }).join("")}
      </div>
      <div style="height:24px;"></div>
    </div>
  </div>`;
}

// ── SHELF (list of entries) ────────────────────────────────────────────────
function spiceShelfView(){
  const shelf = SPICE_SHELVES.find(s=>s.id===S.spiceShelf) || SPICE_SHELVES[0];
  let entries = spiceEntriesFor(shelf.id);

  // data-driven sub-pills by region (only show if >1 distinct region)
  const regions = [...new Set(entries.map(e=>e.region))];
  const showPills = regions.length > 1;
  const filter = S.spiceFilter;
  const shown = (showPills && filter) ? entries.filter(e=>e.region===filter) : entries;

  return `<div>
    <div class="header">
      <button class="back-btn" onclick="set({spiceShelf:null,spiceFilter:null})" style="color:#c08040;">← Spice Room</button>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:26px;">${shelf.e}</span>
        <h1 style="margin:0;font-size:19px;font-weight:normal;color:#f5e8cc;">${shelf.t}</h1>
      </div>
    </div>
    <div class="content">
      ${showPills?`<div class="pill-row">
        <button class="pill" onclick="set({spiceFilter:null})" style="background:${!filter?'#2a1808':'#161009'};border-color:${!filter?'#c08040':'#3a2510'};color:${!filter?'#f5c842':'#8a6a40'};">All</button>
        ${regions.map(r=>`<button class="pill" onclick="set({spiceFilter:'${r.replace(/'/g,"\\'")}'})" style="background:${filter===r?'#2a1808':'#161009'};border-color:${filter===r?'#c08040':'#3a2510'};color:${filter===r?'#f5c842':'#8a6a40'};">${r}</button>`).join("")}
      </div>`:''}

      ${shown.length===0?`<div style="background:#161009;border:1px dashed #4a3018;border-radius:12px;padding:28px 16px;text-align:center;">
        <div style="font-size:34px;margin-bottom:10px;opacity:0.5;">${shelf.e}</div>
        <div style="font-size:14px;color:#c08040;margin-bottom:4px;">${shelf.t} — coming soon</div>
        <div style="font-size:12px;color:#7a5a38;line-height:1.5;">We're filling this shelf next. The pilot starts with blends, sauces, atchars and relishes.</div>
      </div>`:
      shown.map(e=>{
        const w = SPICE_WHENMAP[e.whenToUse] || {};
        const chips = (e.flavourChips||[]).slice(0,3).map(c=>`<span style="font-size:10px;color:${SPICE_CHIPCOLOR[c]||'#a08050'};border:1px solid ${SPICE_CHIPCOLOR[c]||'#a08050'};border-radius:20px;padding:2px 8px;">${c}</span>`).join("");
        return `<button onclick="set({spiceEntry:'${e.id}'})"
          style="width:100%;display:block;text-align:left;background:#161009;border:1px solid #3a2510;border-radius:12px;padding:13px;margin-bottom:8px;cursor:pointer;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <div style="flex:1;font-size:15px;color:#f5e8cc;font-weight:bold;">${e.name}</div>
            <span style="font-size:15px;color:#c08040;">→</span>
          </div>
          <div style="font-size:11px;color:#9a7a50;font-style:italic;margin-bottom:7px;">${e.region}</div>
          <div style="display:flex;gap:5px;flex-wrap:wrap;align-items:center;">
            ${chips}
            ${w.label?`<span style="font-size:10px;color:#7a6040;margin-left:2px;">· ${w.e} ${w.label}</span>`:''}
          </div>
        </button>`;
      }).join("")}
      <div style="height:24px;"></div>
    </div>
  </div>`;
}

// ── ENTRY DETAIL (v33 recipe template) ───────────────────────────────────────
function spiceEntryView(){
  const e = spiceDB().find(x=>x.id===S.spiceEntry);
  const shelf = SPICE_SHELVES.find(s=>s.id===(e&&e.shelf)) || SPICE_SHELVES[0];
  if(!e) return `<div class="content"><button class="back-btn" onclick="set({spiceEntry:null})" style="color:#c08040;">← Back</button><p style="margin-top:12px;color:#c0a080;">Entry not found.</p></div>`;

  const w = SPICE_WHENMAP[e.whenToUse] || {};
  const chips = (e.flavourChips||[]).slice(0,3).map(c=>`<span style="font-size:12px;color:${SPICE_CHIPCOLOR[c]||'#a08050'};border:1px solid ${SPICE_CHIPCOLOR[c]||'#a08050'};border-radius:20px;padding:4px 12px;">${c}</span>`).join("");

  const ing = (e.makeYourOwn && e.makeYourOwn.ingredients) || [];
  // method prose → numbered steps (split on sentence end, keep it readable)
  const steps = ((e.makeYourOwn && e.makeYourOwn.method) || "")
    .split(/(?<=[.!?])\s+(?=[A-Z(])/).map(s=>s.trim()).filter(Boolean);
  const pairs = e.pairsWith || [];

  return `<div>
    <div class="header">
      <button class="back-btn" onclick="set({spiceEntry:null})" style="color:#c08040;">← ${shelf.t}</button>
    </div>
    <div class="content">
      ${typeof recipePhoto==="function" ? recipePhoto(e.name, shelf.e, 150) : ""}

      <h1 style="margin:10px 0 2px;font-size:22px;font-weight:normal;color:#f5e8cc;">${e.name}</h1>
      <div style="font-size:12px;color:#9a7a50;font-style:italic;margin-bottom:10px;">${e.region}</div>

      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">${chips}</div>

      ${w.label?`<div style="display:inline-flex;align-items:center;gap:7px;background:#16100a;border:1px solid ${w.c};border-radius:10px;padding:8px 12px;margin-bottom:14px;">
        <span style="font-size:16px;">${w.e}</span>
        <div><div style="font-size:9px;letter-spacing:1px;color:#7a6040;text-transform:uppercase;">When to use</div><div style="font-size:13px;color:${w.c};">${w.label}</div></div>
      </div>`:''}

      <!-- MAKE YOUR OWN — v33 green box -->
      <div style="background:#1a2208;border:2px solid #6a8020;border-radius:12px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:10px;letter-spacing:2px;color:#8ab030;text-transform:uppercase;margin-bottom:4px;">🥄 Make Your Own</div>
            <div style="font-size:12px;color:#6a8030;">The real way — built from scratch</div>
          </div>
          <div style="text-align:right;"><div style="font-size:20px;font-weight:bold;color:#c8e840;line-height:1;">1 batch</div><div style="font-size:10px;color:#5a7020;margin-top:2px;">makes a jarful</div></div>
        </div>
      </div>

      <!-- INGREDIENTS -->
      <div style="background:#141008;border:1px solid #3a2810;border-radius:10px;padding:12px;margin-bottom:14px;">
        <div style="font-size:10px;letter-spacing:1.5px;color:#8a6a40;text-transform:uppercase;margin-bottom:8px;">Ingredients</div>
        ${ing.map(line=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #1e1a10;">
          <span style="width:5px;height:5px;border-radius:50%;background:#c08040;flex-shrink:0;"></span>
          <span style="font-size:14px;color:#e0d4b8;">${line}</span>
        </div>`).join("")}
      </div>

      <!-- METHOD — orange step circles -->
      <div style="margin-bottom:14px;">
        <div style="font-size:10px;letter-spacing:1.5px;color:#8a6a40;text-transform:uppercase;margin-bottom:10px;">Method</div>
        ${steps.map((s,i)=>`<div style="display:flex;gap:12px;margin-bottom:12px;">
          <div class="step-num" style="background:#2a1808;border:2px solid #c06020;color:#f5c842;">${i+1}</div>
          <div style="flex:1;font-size:14px;color:#e0d4b8;line-height:1.6;padding-top:2px;">${s}</div>
        </div>`).join("")}
      </div>

      <!-- GOES WELL WITH -->
      ${pairs.length?`<div class="goes-well">
        <div style="font-size:10px;letter-spacing:1.5px;color:#8a8ab0;text-transform:uppercase;margin-bottom:8px;">🍽️ Goes Well With</div>
        <div>${pairs.map(p=>`<span class="goes-well-pill">${p}</span>`).join("")}</div>
      </div>`:''}

      <!-- STORY -->
      ${e.story?`<div style="background:#16100a;border-left:2px solid #c08040;border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:14px;">
        <div style="font-size:13px;color:#c0a880;line-height:1.7;font-style:italic;">${e.story}</div>
      </div>`:''}

      ${e.howThisFeels?`<div style="text-align:center;font-size:13px;color:#c09060;font-style:italic;margin-bottom:14px;">${e.howThisFeels}</div>`:''}

      <!-- ACTIONS -->
      <button onclick="alert('💾 Save to My Kitchen — coming with Pro!')" style="width:100%;padding:13px;border-radius:10px;cursor:pointer;background:#181008;border:2px solid #c06020;color:#f5c842;font-size:13px;font-weight:bold;margin-bottom:10px;">💾 Save to My Kitchen</button>

      <div style="display:flex;gap:14px;justify-content:center;font-size:13px;padding:6px 0 24px;">
        <button onclick="set({spiceEntry:null})" style="background:none;border:none;color:#c08040;cursor:pointer;">← ${shelf.t}</button>
        <span style="color:#3a2810;">|</span>
        <button onclick="set({spiceShelf:null,spiceEntry:null})" style="background:none;border:none;color:#c08040;cursor:pointer;">🧂 Spice Room</button>
        <span style="color:#3a2810;">|</span>
        <button onclick="set({screen:'home',spiceShelf:null,spiceEntry:null})" style="background:none;border:none;color:#c08040;cursor:pointer;">🏠 Home</button>
      </div>
    </div>
  </div>`;
}

if (typeof window !== "undefined") {
  window.spiceRoomHTML = spiceRoomHTML;
  window.spiceLandingView = spiceLandingView;
  window.spiceShelfView = spiceShelfView;
  window.spiceEntryView = spiceEntryView;
}
