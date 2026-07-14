// ══════════════════════════════════════════════════════════════════════════
//  sections/index.js — TINZA UNIVERSAL RECIPE INDEX  (Run 1 · 3 Jul 2026)
//  Ref: TINZA_UNIVERSAL_INDEX_BRIEF.md
//
//  NEW + ADDITIVE. Every adapter is a READ-ONLY view over a section's own
//  data (never mutates the source). The ONLY existing file changed alongside
//  this is budget.js (`_budgetPool` re-point). Nothing else is touched.
//
//  Exposes:
//    window.allRecipes(filter)  — one normalised list over EVERY section
//    window.TINZA_ADAPTERS      — the per-section adapter table
//
//  Load order: LAST, after all data + worldkitchen.js + core.js (see index.html).
//  Every section global is reached by bare name with a `typeof` guard, exactly
//  like budget.js already does — so a missing/renamed source degrades to []
//  instead of throwing.
// ══════════════════════════════════════════════════════════════════════════
(function(){
  'use strict';

  // ── tiny helpers ─────────────────────────────────────────────────────────
  function toArr(x){ return Array.isArray(x) ? x : (x==null ? [] : [x]); }
  function lc(s){ return String(s==null ? '' : s).toLowerCase(); }
  function num(x){
    if(typeof x==='number') return isFinite(x) ? x : null;
    // first numeric token only — so a range string like "~420–520 kcal" → 420,
    // not "420520" (stripping every non-digit would fuse the two numbers).
    var m = String(x==null ? '' : x).match(/\d+(?:\.\d+)?/);
    return m ? parseFloat(m[0]) : null;
  }
  function parseTimeMin(s){
    if(s==null) return null;
    if(typeof s==='number') return isFinite(s) ? s : null;
    var m = String(s).match(/\d+/);
    return m ? parseInt(m[0],10) : null;
  }
  // WK/events method may arrive as a prose STRING; recipeDetailFromResult does
  // `(r.method||[]).map(...)`, which throws on a string. Always hand it an array.
  function methodToArr(m){
    if(Array.isArray(m)) return m.slice();
    if(typeof m!=='string' || !m.trim()) return [];
    var parts = m.split(/\n+/).map(function(s){ return s.trim(); }).filter(Boolean);
    if(parts.length<=1){
      // no line breaks → split on sentence ends (no lookbehind, older-Safari safe)
      parts = m.replace(/([.!?])\s+/g,'$1\n').split('\n')
               .map(function(s){ return s.trim(); }).filter(Boolean);
    }
    return parts;
  }
  // Normalise an already-{n,pp,u}-ish ingredient array (meals/floor/health/baby/pet).
  function normIng(arr){
    return (arr||[]).filter(Boolean).map(function(i){
      return { n: i.n||i.name||'', pp: (i.pp!=null ? i.pp : null), u: i.u||'' };
    }).filter(function(i){ return i.n; });
  }
  // Events / beverages carry {n, a} (a = human annotation) — keep name-only,
  // searchable; per-person amounts are wired in a later pass.
  function nameOnlyIng(arr){
    return (arr||[]).filter(Boolean).map(function(i){
      return { n: i.n||i.name||'', pp: null, u: '' };
    }).filter(function(i){ return i.n; });
  }

  // MF119 — the MEAL SLOT. One coarse answer to "where in the day does this sit?",
  // derived MOST-SPECIFIC-FIRST: the recipe's own mealCat, then its cat, then its WK
  // course, then a per-section default. Empty is NEVER allowed to mean "no" — a blank
  // at every level resolves to 'unknown', not to a silent miss. ⚖️ Law 45.
  function slot(o){
    function fromMealCat(v){
      if(/break/.test(v))            return 'BREAKFAST';
      if(/lunch/.test(v))            return 'LUNCH';
      if(/supper|dinner/.test(v))    return 'SUPPER';
      return '';
    }
    function fromCat(v){
      if(/break/.test(v))                                                              return 'BREAKFAST';
      if(/cake|cheesecake|pastr|tart|biscuit|cookie|rusk|muffin|scone|dessert|sweet|treat|bread|bun|loaf/.test(v)) return 'TREAT';
      if(/salad|staple|\bside/.test(v))                                                return 'SIDE';
      if(/stew|curr|roast|plate|handheld|soup|\bmain|\bbake/.test(v))                  return 'SUPPER';
      return '';
    }
    function fromCourse(v){
      if(/main|soup/.test(v))        return 'SUPPER';   // MF119-B · soup is a main (index.js rules soup→main)
      if(/\bside|salad/.test(v))     return 'SIDE';     // MF119-B · salad is a side
      if(/drink|beverage/.test(v))   return 'DRINK';
      if(/dessert|sweet|treat/.test(v)) return 'TREAT';
      if(/starter|snack|appet/.test(v)) return 'STARTER';
      return '';
    }
    function fromSection(v){
      if(v==='bakes'||v==='sides')   return 'TREAT';
      if(v==='spice')                return 'CONDIMENT';
      if(v==='beverages')            return 'DRINK';
      if(v==='braai')                return 'SUPPER';
      if(v==='furry')                return 'PETFOOD';    // MF119 · name the FOOD, not the room (Law 46) — never a human meal
      if(v==='tiny')                 return 'BABYFOOD';
      return '';
    }
    // MF119-B · every record already carries mealRole — the last real signal before we give
    // up. component→SUPPER: a keto/health dinner IS supper (the whole point of 'being healthy').
    function fromRole(v){
      if(v==='main')      return 'SUPPER';
      if(v==='side')      return 'SIDE';
      if(v==='drink')     return 'DRINK';
      if(v==='condiment') return 'CONDIMENT';
      if(v==='snack')     return 'TREAT';
      if(v==='component') return 'SUPPER';
      return '';
    }
    return fromMealCat(lc(o.mealCat))
        || fromCat(lc(o.cat))
        || fromCourse(lc(o.course))
        || fromSection(lc(o.section))
        || fromRole(lc(o.mealRole))
        || 'unknown';   // MF119-B · the ratchet stays — emptied, never deleted (Law 45)
  }

  // ── the normalised record (a superset: §1 index fields + read-only render
  //    passthrough so the shared budget recipe-detail renders any result) ────
  function rec(o){
    var ings = o.ingredients || [];
    // MF58 · index the ingredient NOUN only, not the weight/prep annotation after the em-dash
    // ("Pork spareribs — 450g raw per person" → "pork spareribs"). Kills the raw/cooked/dry/
    // per-person noise that returned whole rooms. (Display `ingredients` keep the full string.)
    var bits = [ o.name, o.nameAlt, (o.aliases||[]).join(' '), o.cuisine, o.country ]   // MF62 · goesWith REMOVED from searchText — a cross-link is content about ANOTHER dish (Law 30)
                 .concat(ings.map(function(i){ return String(i.n||'').split('—')[0]; }));
    return {
      // ── §1 normalised contract ──
      id:        o.id,
      section:   o.section,
      mealCat:   o.mealCat != null ? o.mealCat : null,   // MF56 · breakfast/lunch/supper for FMF sub-screen scope (NOT NAV_KEYS' mealCat — Law 23)
      cat:       o.cat || '',                       // MF119 · raw section category (meals/bakes) — kept for slot() + display
      course:    lc(o.course) || '',                // MF119 · raw WK course, lowercased (main/side/dessert/…)
      slot:      slot(o),                           // MF119 · the derived MEAL SLOT — never blank, worst case 'unknown' (Law 45)
      name:      o.name || '',
      nameAlt:   o.nameAlt || '',                  // English gloss → tinzaDisplayName
      aliases:   o.aliases || [],                  // Latin fallbacks → tinzaRoman
      nameRoman: o.nameRoman || '',
      emoji:     o.emoji || '🍽️',
      mealRole:  o.mealRole,                       // the finder switch
      diet:      (o.diet||[]).map(lc),             // ALWAYS a lowercase array
      protein:   o.protein || null,
      cuisine:   o.cuisine || '',
      time:      o.time!=null ? o.time : null,
      kcal:      o.kcal!=null ? o.kcal : null,
      costPP:    o.costPP!=null ? o.costPP : null, // null = not confidently costed
      freezes:   o.freezes!=null ? o.freezes : null,
      fridgeDays:o.fridgeDays!=null ? o.fridgeDays : null,
      ingredients: ings,                           // ALWAYS [{n,pp,u}]
      goesWith:  o.goesWith || [],
      searchText: bits.filter(Boolean).join(' ').toLowerCase(),
      // ── read-only render passthrough (keeps recipeDetailFromResult full) ──
      feel:       o.feel || '',
      method:     Array.isArray(o.method) ? o.method : methodToArr(o.method),
      nutrition:  o.nutrition || null,             // object only (never a string)
      tip:        o.tip || '',
      storage:    o.storage || '',
      didYouKnow: o.didYouKnow || '',
      photoName:  o.photoName || o.name || '',
      versions:   o.versions || null               // meals-shaped only; else null
    };
  }

  // ── meals cat → role  (URI U8a) ──────────────────────────────────────────
  function mealRoleFromCat(cat){
    var c = lc(cat);
    // (3 Jul B3 review-b) SOUP IS A MAIN. A pot of soup is supper in SA; sending
    // 'soup' → 'side' over-narrowed the finder and dropped real budget mains.
    // Only salads/staples/sides demote now; soup joins the explicit 'main' set.
    if(/salad|staple|\bside/.test(c)) return 'side';
    if(/stew|curr|bake|plate|handheld|roast|soup/.test(c)) return 'main';
    return 'main'; // unmapped meal → main
  }

  // ══ ADAPTERS ══════════════════════════════════════════════════════════════

  // meals — BREAKFAST/LIGHTLUNCH/SUPPER only (NOT Bakes, NOT Sides & Basics,
  // so those stay out of the finder for free). Breakfast is never 'main'.
  function adaptMeals(){
    var out = [];
    function add(arr, kind){
      (arr||[]).forEach(function(r){
        if(!r || !r.id) return;
        out.push(rec({
          id:r.id, section:'meals', mealCat:kind, cat:r.cat, name:r.name, emoji:r.emoji,   // MF56 · store the kind it already knows · MF119 · carry cat
          mealRole: kind==='breakfast' ? 'component' : kind==='lunch' ? 'main' : mealRoleFromCat(r.cat),
          diet: r.diet ? [r.diet] : [],
          protein: r.protein||null, cuisine: r.cuisine||'',
          time: r.time!=null ? r.time : null,
          kcal: (r.nutrition && r.nutrition.kcal!=null) ? r.nutrition.kcal : (r.kcal!=null ? r.kcal : null),
          costPP: r.costPP!=null ? r.costPP : null,
          freezes: r.freezes!=null ? r.freezes : null,
          fridgeDays: r.fridgeDays!=null ? r.fridgeDays : null,
          ingredients: normIng(r.ingredients), goesWith: r.goesWith||[],
          feel:r.feel, method:r.method, nutrition:r.nutrition||null,
          tip:r.tip, storage:r.storage, didYouKnow:r.didYouKnow,
          photoName:r.photoName, versions:r.versions||null
        }));
      });
    }
    if(typeof BREAKFAST_RECIPES  !== 'undefined') add(BREAKFAST_RECIPES,'breakfast');
    if(typeof LIGHTLUNCH_RECIPES !== 'undefined') add(LIGHTLUNCH_RECIPES,'lunch');
    if(typeof SUPPER_RECIPES     !== 'undefined') add(SUPPER_RECIPES,'supper');
    return out;
  }

  // floor — end-of-month stretcher meals; all real mains.
  function adaptFloor(){
    if(typeof BUDGET_FLOOR_RECIPES==='undefined') return [];
    return BUDGET_FLOOR_RECIPES.filter(Boolean).map(function(r){
      return rec({
        id:r.id, section:'floor', name:r.name, emoji:r.emoji, mealRole:'main',
        diet: r.diet ? [r.diet] : [], protein:r.protein||null, cuisine:r.cuisine||'',
        time:r.time!=null?r.time:null,
        kcal:(r.nutrition && r.nutrition.kcal!=null)?r.nutrition.kcal:(r.kcal!=null?r.kcal:null),
        costPP:r.costPP!=null?r.costPP:null,
        ingredients:normIng(r.ingredients), goesWith:r.goesWith||[],
        feel:r.feel, method:r.method, nutrition:r.nutrition||null,
        tip:r.tip, storage:r.storage, didYouKnow:r.didYouKnow, versions:r.versions||null
      });
    });
  }

  // bakes + sides & basics — SEARCH ONLY. Kept OUT of every finder by using roles
  // ('bake' / 'basic') that no finder queries, so allRecipes({mealRole:'main'|'side'|…})
  // never sees them — but the UNFILTERED search pool (globalSearch) does. This is the
  // ONLY thing that makes the big version cards discoverable: Focaccia ×9, Buttermilk
  // Rusks ×7, Braai Flatbread ×3 and the biscuit tins all live in Bakes/Sides, which
  // adaptMeals deliberately skips. Meals-shaped {n,pp,u} ingredients + versions passthrough.
  function adaptBakes(){
    var out = [];
    function add(arr, section, role){
      (arr||[]).forEach(function(r){
        if(!r || !r.id) return;
        out.push(rec({
          id:r.id, section:section, cat:r.cat, name:r.name, emoji:r.emoji, mealRole:role,   // MF119 · carry cat
          diet: r.diet ? [r.diet] : [], protein:r.protein||null, cuisine:r.cuisine||'',
          time: r.time!=null ? r.time : null,
          kcal:(r.nutrition && r.nutrition.kcal!=null)?r.nutrition.kcal:(r.kcal!=null?r.kcal:null),
          costPP: r.costPP!=null ? r.costPP : null,
          freezes:r.freezes!=null?r.freezes:null, fridgeDays:r.fridgeDays!=null?r.fridgeDays:null,
          ingredients: normIng(r.ingredients), goesWith: r.goesWith||[],
          feel:r.feel, method:r.method, nutrition:r.nutrition||null,
          tip:r.tip, storage:r.storage, didYouKnow:r.didYouKnow,
          photoName:r.photoName, versions:r.versions||null
        }));
      });
    }
    if(typeof BAKES_RECIPES        !== 'undefined') add(BAKES_RECIPES,'bakes','bake');
    if(typeof SIDES_BASICS_RECIPES !== 'undefined') add(SIDES_BASICS_RECIPES,'sides','basic');
    return out;
  }

  // health — searchable, but NEVER 'main' (would flood a supper finder with
  // smoothies). Roles mirror healthFind()'s registry.
  function adaptHealth(){
    var out = [];
    // [array, role] — const globals reached by bare name with a typeof guard,
    // mirroring healthFind()'s own registry. Roles keep health OUT of the finder.
    function add(arr, role){
      if(!Array.isArray(arr)) return;
      arr.forEach(function(r){
        if(!r || !r.id) return;
        out.push(rec({
          id:r.id, section:'health', name:r.name, emoji:r.emoji, mealRole:role,
          diet:[], protein:null, cuisine:'', time:r.time!=null?r.time:null,
          kcal:r.kcal!=null?r.kcal:null, costPP:r.costPP!=null?r.costPP:null,
          ingredients: normIng(r.shopping || r.base300 || r.base || r.ingredients),
          goesWith:[], feel:r.howItFeels||r.howThisFeels||'', method:r.method,
          nutrition:null, tip:r.tip, storage:r.storage, didYouKnow:'', versions:null
        }));
      });
    }
    if(typeof FRESH_JUICES       !== 'undefined') add(FRESH_JUICES,'drink');
    if(typeof SMOOTHIES          !== 'undefined') add(SMOOTHIES,'drink');
    if(typeof FROZEN_YOGHURT     !== 'undefined') add(FROZEN_YOGHURT,'snack');
    if(typeof OVERNIGHT_OATS     !== 'undefined') add(OVERNIGHT_OATS,'snack');
    if(typeof HEALTHY_MUFFINS    !== 'undefined') add(HEALTHY_MUFFINS,'snack');
    if(typeof RAW_AND_REAL       !== 'undefined') add(RAW_AND_REAL,'snack');
    if(typeof SEED_CRACKERS      !== 'undefined') add(SEED_CRACKERS,'snack');
    if(typeof KETO_RECIPES       !== 'undefined') add(KETO_RECIPES,'component');
    if(typeof WEIGHTLOSS_RECIPES !== 'undefined') add(WEIGHTLOSS_RECIPES,'component');
    if(typeof HIGHPROTEIN_RECIPES!== 'undefined') add(HIGHPROTEIN_RECIPES,'component');
    if(typeof PLANTBASED_RECIPES !== 'undefined') add(PLANTBASED_RECIPES,'component');
    if(typeof VEGETARIAN_RECIPES !== 'undefined') add(VEGETARIAN_RECIPES,'component');
    if(typeof GUTHEALTH_RECIPES  !== 'undefined') add(GUTHEALTH_RECIPES,'component');
    if(typeof DIABETIC_RECIPES   !== 'undefined') add(DIABETIC_RECIPES,'component');
    if(typeof ANTIINFLAM_RECIPES !== 'undefined') add(ANTIINFLAM_RECIPES,'component');
    if(typeof IMMUNITY_RECIPES   !== 'undefined') add(IMMUNITY_RECIPES,'component');
    if(typeof FERMENTED_RECIPES  !== 'undefined') add(FERMENTED_RECIPES,'component');
    return out;
  }

  // world — the proof. Converter already exists; we adapt + gate the costPP.
  function adaptWorld(){
    if(typeof wkPool!=='function') return [];
    var skipped = [];
    var out = (wkPool()||[]).filter(Boolean).map(function(r){
      var items = (typeof wkParseIngredients==='function') ? (wkParseIngredients(r.ingredients)||[]) : [];
      var ings = items.map(function(it){
        return { n: it.name||'', pp: (it.toTaste || it.qty==null) ? null : it.qty, u: it.unit||'' };
      }).filter(function(i){ return i.n; });

      // ── §3 costPP coverage gate — now the SHARED wkCostState (MF43 · Law 6, one door). ──
      // The card + detail + this finder all call the same gate: coverage>=0.8 AND the main
      // protein ACTUALLY priced. No surface ever prints a sides-only partial total.
      var costPP = null;
      if(typeof wkCostState==='function'){
        var gc = wkCostState(r, 1);
        if(gc.ok){ costPP = gc.total; }                     // per-person (n=1)
        else { skipped.push({ id:r.id, name:r.name, coverage:Math.round(gc.coverage*100)/100, missing:gc.missing }); }
      }

      var course = lc(r.course);
      var role = course==='main' ? 'main'
               : course==='side' ? 'side'
               : (course==='drink'||course==='beverage') ? 'drink'
               : 'component';                               // starter/dessert/other → component

      return rec({
        id:r.id, section:'world', course:r.course, name:r.name, emoji:r.emoji||'🌍', mealRole:role,   // MF119 · stop discarding course (Law 46 · line 257)
        diet: toArr(r.diet).map(lc), protein:null,
        cuisine: r.cuisine||r.country||'', country:r.country,
        nameAlt:r.nameAlt, aliases:r.aliases,
        time: parseTimeMin(r.cookTime), kcal: num(r.kcal), costPP: costPP,
        ingredients: ings, goesWith: wkGoesWith(r),
        feel: r.howThisFeels||'', method: methodToArr(r.method), nutrition:null,
        tip: r.chefNotes||'', storage: r.storage||'', didYouKnow: r.trivia||'',
        photoName: r.name, versions:null
      });
    });
    window._tinzaWKSkipped = skipped;   // pricing-hygiene audit (URI U2.3) — fill PRICE_DB later
    // MF44 · dev-gate — the instrument that found the 88 stays, but doesn't ship an internal
    // coverage metric to every live user's F12. Only localhost or ?dev. (Do NOT delete — Law 19.)
    var _tinzaDev = false;
    try { _tinzaDev = /^(localhost|127\.0\.0\.1)$/.test(location.hostname) || /(?:\?|&)dev\b/.test(location.search); } catch(_e){}
    if(_tinzaDev && skipped.length && typeof console!=='undefined' && console.info){
      console.info('[Tinza index] World Kitchen costPP-skipped (coverage<0.8 or main protein unpriced): '
                   + skipped.length + ' of ' + out.length, skipped);
    }
    return out;
  }
  function wkGoesWith(r){
    if(Array.isArray(r.goesWith)) return r.goesWith;
    if(typeof r.pairsWith==='string' && r.pairsWith.trim()){
      return r.pairsWith.split(/·|,|&| and /i).map(function(s){ return s.trim(); }).filter(Boolean);
    }
    return [];
  }

  // events — buffet mains are real 'main' recipes (costPP present → finder-eligible);
  // sides/salads = side, starters/desserts = component, sauces = condiment.
  function adaptEvents(){
    var out = [];
    function add(arr, role){
      (arr||[]).forEach(function(r){
        if(!r || !r.id) return;
        out.push(rec({
          id:r.id, section:'events', name:r.name, emoji:r.emoji, mealRole:role,
          diet: toArr(r.diet).map(lc), protein:null, cuisine:'',
          time:r.time!=null?r.time:null, kcal:num(r.kcal),
          costPP:r.costPP!=null?r.costPP:null,
          ingredients: nameOnlyIng(r.base300 || r.ingredients || r.base),
          goesWith:[], feel:r.feel||'', method:r.method, nutrition:null,
          tip:r.tip||'', storage:r.storage||'', didYouKnow:r.didYouKnow||'', versions:null
        }));
      });
    }
    if(typeof EVENTS_BIG_COOKING_MAINS  !== 'undefined') add(EVENTS_BIG_COOKING_MAINS,'main');
    if(typeof EVENTS_BIG_COOKING_SIDES  !== 'undefined') add(EVENTS_BIG_COOKING_SIDES,'side');
    if(typeof EVENTS_BIG_COOKING_SALADS !== 'undefined') add(EVENTS_BIG_COOKING_SALADS,'side');
    if(typeof EVENTS_STARTERS           !== 'undefined') add(EVENTS_STARTERS,'component');
    if(typeof EVENTS_DESSERTS           !== 'undefined') add(EVENTS_DESSERTS,'component');
    if(typeof EVENTS_SAUCES             !== 'undefined') add(EVENTS_SAUCES,'condiment');
    return out;
  }

  // braai — SEARCH ONLY. costPP null (portion-brain, not per-person costPP) and
  // budget.js excludes section==='braai' anyway. calcMeat is NOT touched.
  function adaptBraai(){
    var out = [];
    function flat(groups, role){
      (groups||[]).forEach(function(gp){
        ((gp && gp.items) || []).forEach(function(it){
          if(!it || !it.id) return;
          var ings = (it.recipe && Array.isArray(it.recipe.ingredients))
            ? it.recipe.ingredients.map(function(s){ return { n:String(s), pp:null, u:'' }; })
            : [];
          out.push(rec({
            id:it.id, section:'braai', name:it.name, emoji:it.emoji, mealRole:role,
            diet:[], protein:null, cuisine:'braai', nameAlt:it.intl,
            time:null, kcal:null, costPP:null,
            ingredients:ings, goesWith:[], feel:it.note||'',
            method:(it.recipe && it.recipe.method)||[], nutrition:null,
            tip:(it.recipe && it.recipe.tip)||'', storage:'', didYouKnow:'', versions:null
          }));
        });
      });
    }
    if(typeof MEAT_GROUPS  !== 'undefined') flat(MEAT_GROUPS,'main');
    if(typeof SIDES_GROUPS !== 'undefined') flat(SIDES_GROUPS,'side');
    return out;
  }

  // beverages — search only.
  function adaptBeverages(){
    if(typeof EVENTS_BEVERAGE_RECIPES==='undefined') return [];
    return EVENTS_BEVERAGE_RECIPES.filter(Boolean).map(function(r){
      return rec({
        id:r.id, section:'beverages', name:r.name, emoji:r.emoji, mealRole:'drink',
        diet:[], protein:null, cuisine:r.category||'', time:null, kcal:null, costPP:null,
        ingredients: nameOnlyIng(r.base300 || r.ingredients), goesWith:[],
        feel:'', method:r.method, nutrition:null, tip:r.tip||'', storage:'',
        didYouKnow:r.didYouKnow||'', versions:null
      });
    });
  }

  // tiny (baby) — search only; per-age model untouched.
  function adaptTiny(){
    if(typeof BABY_RECIPES==='undefined') return [];
    return BABY_RECIPES.filter(Boolean).map(function(r){
      return rec({
        id:r.id, section:'tiny', name:r.name, emoji:r.emoji, mealRole:'baby',
        diet:[], protein:null, cuisine:'', time:r.time!=null?r.time:null,
        kcal:null, costPP:null, ingredients: normIng(r.base), goesWith:[],
        feel:'', method:r.method, nutrition:null, tip:r.tip||'',
        storage:r.storage||'', didYouKnow:'', versions:null
      });
    });
  }

  // spice — search only (condiment).
  function adaptSpice(){
    if(typeof SPICE_DB==='undefined') return [];
    return SPICE_DB.filter(Boolean).map(function(r){
      return rec({
        id:r.id, section:'spice', name:r.name, emoji:r.emoji||'🧂', mealRole:'condiment',
        diet:[], protein:null, cuisine:r.region||'', aliases:r.aliases,
        time:null, kcal:null, costPP:r.costPP!=null?r.costPP:null,
        ingredients:[], goesWith:r.pairsWith||[],
        feel:r.howThisFeels||'', method:[], nutrition:null,
        tip:'', storage:'', didYouKnow:r.story||'', versions:null
      });
    });
  }

  // furry (pets) — indexed but human finders exclude 'pet' by default.
  function adaptFurry(){
    var out = [];
    function add(map){
      if(!map || typeof map!=='object') return;
      Object.keys(map).forEach(function(k){
        (map[k]||[]).forEach(function(r){
          if(!r || !r.id) return;
          out.push(rec({
            id:r.id, section:'furry', name:r.name, emoji:r.emoji||'🐾', mealRole:'pet',
            diet:[], protein:null, cuisine:'', time:r.time!=null?r.time:null,
            kcal:null, costPP:null, ingredients:normIng(r.base), goesWith:[],
            feel:'', method:r.method, nutrition:null, tip:r.tip||'',
            storage:r.storage||'', didYouKnow:'', versions:null
          }));
        });
      });
    }
    add(typeof DOG_RECIPES!=='undefined' ? DOG_RECIPES : null);
    add(typeof CAT_RECIPES!=='undefined' ? CAT_RECIPES : null);
    return out;
  }

  // ── adapter table + cached index + allRecipes(filter) ────────────────────
  var TINZA_ADAPTERS = {
    meals: adaptMeals, bakes: adaptBakes, floor: adaptFloor, health: adaptHealth, world: adaptWorld,
    events: adaptEvents, braai: adaptBraai, beverages: adaptBeverages,
    tiny: adaptTiny, spice: adaptSpice, furry: adaptFurry
  };

  var _cache = null;
  function buildIndex(){
    var all = [];
    Object.keys(TINZA_ADAPTERS).forEach(function(k){
      try { all = all.concat(TINZA_ADAPTERS[k]() || []); }
      catch(e){ if(typeof console!=='undefined' && console.warn) console.warn('[Tinza index] adapter failed: '+k, e); }
    });
    return all;
  }

  // ── balancedOrder — deterministic VARIETY round-robin (L12 · NO ML) ────────
  //  Rule: diversify the axes the query left open. Partition `list` into buckets
  //  via opts.bucketOf (a field NAME or an r→key function), sort inside each
  //  bucket by opts.within, then draw ONE item per bucket in priority order
  //  (opts.order first, then first-seen) and repeat down the rows. Because the
  //  draw is breadth-first, EVERY prefix stays balanced — so "show me 3 more"
  //  keeps serving a spread instead of ten near-identical cheap-vegan dishes.
  //  ONE engine: budget B3 variety today, balanced search later — both call this.
  function balancedOrder(list, opts){
    list = Array.isArray(list) ? list.slice() : [];
    opts = opts || {};
    var bo = opts.bucketOf;
    var keyOf = (typeof bo==='function') ? bo
              : (typeof bo==='string')   ? function(r){ return (r && r[bo]!=null) ? String(r[bo]) : '~'; }
              :                            function(){ return '~'; };
    var within = (typeof opts.within==='function') ? opts.within : null;

    var buckets = {}, seen = [];
    list.forEach(function(r){
      var k = keyOf(r); k = (k==null ? '~' : String(k));
      if(!buckets[k]){ buckets[k] = []; seen.push(k); }
      buckets[k].push(r);
    });
    if(within) seen.forEach(function(k){ buckets[k].sort(within); });

    // priority = requested order (that actually has items) first, then first-seen
    var order = [];
    (opts.order||[]).forEach(function(k){ if(buckets[k] && order.indexOf(k)<0) order.push(k); });
    seen.forEach(function(k){ if(order.indexOf(k)<0) order.push(k); });

    var out = [], i = 0, drew = true;
    while(drew){
      drew = false;
      for(var b=0;b<order.length;b++){
        var arr = buckets[order[b]];
        if(arr && i < arr.length){ out.push(arr[i]); drew = true; }
      }
      i++;
    }
    return out;
  }

  function allRecipes(filter, opts){
    if(!_cache) _cache = buildIndex();
    var f = filter || {};
    var roles = f.mealRole==null ? null : (Array.isArray(f.mealRole) ? f.mealRole : [f.mealRole]);
    var sects = f.section ==null ? null : (Array.isArray(f.section)  ? f.section  : [f.section]);
    var diets = f.diet    ==null ? null : (Array.isArray(f.diet) ? f.diet : [f.diet]).map(lc);
    var text  = f.text    ==null ? null : lc(f.text);
    var res = _cache.filter(function(r){
      if(roles && roles.indexOf(r.mealRole) < 0) return false;
      if(sects && sects.indexOf(r.section)  < 0) return false;
      if(f.maxCostPP!=null){ if(r.costPP==null || r.costPP > f.maxCostPP) return false; }
      if(diets){
        var ok = false;
        for(var i=0;i<diets.length;i++){ if(r.diet.indexOf(diets[i])>=0){ ok=true; break; } }
        if(!ok) return false;
      }
      if(text && r.searchText.indexOf(text) < 0) return false;
      return true;
    });
    // opts.balanceBy → run the variety round-robin over the filtered result.
    // { balanceBy: field|fn, bucketOrder:[...], within:cmp }  (L12 primitive)
    if(opts && opts.balanceBy){
      return balancedOrder(res, { bucketOf:opts.balanceBy, order:opts.bucketOrder, within:opts.within });
    }
    return res;
  }
  allRecipes.rebuild = function(){ _cache = null; return allRecipes(); };
  allRecipes.raw     = function(){ if(!_cache) _cache = buildIndex(); return _cache; };

  window.allRecipes     = allRecipes;
  window.balancedOrder  = balancedOrder;   // exposed so budget.js (+ search) share it
  window.TINZA_ADAPTERS = TINZA_ADAPTERS;

  // Warm the cache shortly after load (off the critical path) so the FIRST
  // budget-finder open is instant instead of paying to build the index.
  var _warm = function(){ try { allRecipes.raw(); } catch(_e){} };
  if(typeof window !== 'undefined'){
    if(window.requestIdleCallback) window.requestIdleCallback(_warm, { timeout:3000 });
    else setTimeout(_warm, 1500);
  }
})();
