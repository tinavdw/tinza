// ══════════════════════════════════════════════════════════════════════════
//  sections/tinzaStore.js — THE USER-STATE DOOR   ·  RULED 15 Jul 2026
//
//  The mirror of normalizeRecipe() (core.js). That door owns the LIBRARY —
//  what Tinza knows. This one owns the USER — what SHE did. One versioned
//  localStorage layer, one root key, one save().
//
//  ⚖️ Law 20 — emptying her question is right. Emptying her WORK is theft.
//  ⚖️ Law 6  — ONE door. NO direct localStorage anywhere else in the app.
//              Census check 14 fails the build if a second one appears.
//
//  LOAD ORDER: FIRST, before core.js — core.js's `var THEME = (…)()` runs at
//  PARSE time and reads getPref('theme'), so the door must already be open.
//
//  SHAPE (v1) — one root key "tinza", the whole blob versioned together:
//    { schemaVersion:1, preferences:{}, favourites:[], plans:{}, pantry:[] }
//
//  TIER-BLIND. The store persists favourites/plans for EVERYONE. The
//  "Favourites = Pro" gate lives in core.js's gate layer. NO tier check here.
//
//  DEGRADE, NEVER BLANK, NEVER THROW. A missing root or corrupt JSON returns a
//  fresh default — it does not crash and it does not wipe what it could not read.
// ══════════════════════════════════════════════════════════════════════════
var tinzaStore = (function(){
  'use strict';

  var ROOT_KEY   = 'tinza';        // the ONLY key this app writes
  var LEGACY_KEY = 'tinzaTheme';   // v0. Folded into preferences.theme, then removed.
  var VERSION    = 1;

  // ── raw localStorage, wrapped so a disabled/full store never throws ──
  function _raw(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }
  function _put(k,v){ try { localStorage.setItem(k,v); return true; } catch(e){ return false; } }
  function _del(k){ try { localStorage.removeItem(k); } catch(e){} }

  function _default(){
    return { schemaVersion: VERSION, preferences: {}, favourites: [], plans: {}, pantry: [] };
  }
  function _isObj(x){ return !!x && typeof x === 'object' && !Array.isArray(x); }
  function _clone(x){ try { return JSON.parse(JSON.stringify(x)); } catch(e){ return x; } }

  // Fill in whatever is missing WITHOUT discarding what is there. A half-written
  // blob keeps its favourites even if `pantry` is gone. ⚖️ Law 3 — degrade, don't blank.
  function _coerce(root){
    var s = _default();
    if(!_isObj(root)) return s;
    s.schemaVersion = VERSION;
    if(_isObj(root.preferences)) s.preferences = _clone(root.preferences);
    if(Array.isArray(root.favourites)) s.favourites = root.favourites.filter(function(x){ return typeof x === 'string' && x; });
    if(_isObj(root.plans))       s.plans   = _clone(root.plans);
    if(Array.isArray(root.pantry)) s.pantry = _clone(root.pantry);
    return s;
  }

  function _validTheme(t){ return (t==='light'||t==='dark'||t==='auto') ? t : null; }

  // Accepts a storage PICTURE {tinza, tinzaTheme}, a bare state, or a previous
  // migrate() result — so migrate(migrate(x)) is well-defined (census check 14.3).
  function _picture(raw){
    if(raw == null) return { root:null, legacyTheme:null };
    if(_isObj(raw) && raw.state !== undefined && raw.migrated !== undefined)
      return { root: raw.state, legacyTheme: null };                       // a migrate() result
    if(_isObj(raw) && raw.schemaVersion !== undefined)
      return { root: raw, legacyTheme: null };                             // a bare state
    if(_isObj(raw) && (raw[ROOT_KEY] !== undefined || raw[LEGACY_KEY] !== undefined))
      return { root: raw[ROOT_KEY] || null, legacyTheme: raw[LEGACY_KEY] || null };
    return { root: _isObj(raw) ? raw : null, legacyTheme: null };
  }

  // ── migrate(raw) → { state, migrated } ──────────────────────────────────
  // PURE. No reads, no writes, no removals — load() does the persisting. Kept pure
  // so the census can prove idempotency without touching a real localStorage.
  // v0 → v1: fold the legacy `tinzaTheme` into preferences.theme. load() then
  // deletes the legacy key (census check 14.4 proves it is gone).
  function migrate(raw){
    var pic  = _picture(raw);
    var root = pic.root, legacy = _validTheme(pic.legacyTheme);

    if(_isObj(root) && root.schemaVersion >= VERSION){
      var kept = _coerce(root);
      var changed = JSON.stringify(kept) !== JSON.stringify(root);
      // a legacy key can still linger next to a v1 root; fold it only if she has
      // never set a theme since — her v1 choice always wins over the v0 leftover.
      if(legacy && kept.preferences.theme == null){ kept.preferences.theme = legacy; changed = true; }
      return { state: kept, migrated: changed };
    }

    // v0 (or absent, or unreadable) → v1
    var s = _coerce(root);                       // carries anything recognisable across
    if(legacy) s.preferences.theme = legacy;     // the ONLY v0 field that ever existed
    return { state: s, migrated: true };
  }

  // ── the in-memory cache ─────────────────────────────────────────────────
  var _state = null;

  // Returns the STORAGE PICTURE, keyed by the REAL key names — {tinza, tinzaTheme} —
  // because that is the shape _picture()/migrate() read. 🩸 It used to return
  // {root, legacyTheme}: _picture() matched neither branch, swallowed the whole
  // wrapper as the root, and DROPPED HER SAVED THEME on migration. Census 13 caught it.
  // ⚖️ Law 20 — that is her setting. Keep these key names in step with _picture().
  function _read(){
    var txt = _raw(ROOT_KEY), parsed = null;
    if(txt){
      // Corrupt JSON must NOT crash the app and must NOT silently wipe her data.
      // We fall through to a fresh default; the bad blob stays on disk untouched
      // so it can still be recovered by hand. ⚖️ Law 3.
      try { parsed = JSON.parse(txt); } catch(e){ parsed = null; }
    }
    var pic = {};
    pic[ROOT_KEY]   = parsed;
    pic[LEGACY_KEY] = _raw(LEGACY_KEY);
    return pic;
  }

  function save(state){                          // the ONE writer
    _state = state;
    _put(ROOT_KEY, JSON.stringify(state));
    return state;
  }

  // load() — read, migrate if needed, persist, cache. Idempotent: the second call
  // returns the cache and writes nothing.
  function load(){
    if(_state) return _state;
    var res = migrate(_read());
    _state = res.state;
    if(res.migrated){
      save(_state);
      _del(LEGACY_KEY);                          // v0 is gone for good (check 14.4)
    }
    return _state;
  }

  function _s(){ return _state || load(); }      // every accessor opens the door first

  // ── preferences ─────────────────────────────────────────────────────────
  function getPref(k){ var p = _s().preferences; return p ? p[k] : undefined; }
  function setPref(k, v){ var s = _s(); s.preferences[k] = v; return save(s); }

  // ── favourites ──────────────────────────────────────────────────────────
  // 🩸 THE KEY IS `source:section:id`. NOT the id. NOT the name.
  // Measured 15 Jul: 19 BARE IDS COLLIDE ACROSS ROOMS — "potatosalad" is BOTH
  // events/Potato Salad AND braai/Potato Salad; "chakalaka" is braai AND spice.
  // Every recipe's source is 'db' today, so `source:id` collides too (2064/2083).
  // `source:section:id` → 2083 distinct, 0 collisions. Section is what actually
  // separates them; source is kept so a future user/chef recipe can never collide
  // with a db one of the same name. ⚖️ Law 46 — one key, one dish.
  // NEVER key a favourite by dish name: 58 name-groups cover 128 records.
  function favKey(r){
    if(typeof r === 'string') return r;           // already stamped
    if(!_isObj(r)) return '';
    if(!r.id) return '';
    return (r.source || 'db') + ':' + (r.section || '?') + ':' + r.id;
  }
  function getFavourites(){ return _s().favourites.slice(); }   // a copy — the store owns the array
  function isFavourite(r){
    var k = favKey(r);
    return !!k && _s().favourites.indexOf(k) >= 0;
  }
  function toggleFavourite(r){
    var k = favKey(r); if(!k) return getFavourites();
    var s = _s(), i = s.favourites.indexOf(k);
    if(i >= 0) s.favourites.splice(i, 1); else s.favourites.push(k);
    save(s);
    return getFavourites();
  }

  // ── plans ───────────────────────────────────────────────────────────────
  // RULED 15 Jul: plans is a SECTION-KEYED MAP, not a flat array.
  //   plans: { braai:[…], buffet:[…] }
  // ⛔ NO SECTION ENUM. The store never contains a room name — it holds ONLY what a
  // section hands it. Buckets are LAZY: an unused room has no key until it writes one.
  // A new room needs ZERO change here.
  function getPlan(section){
    if(!section) return [];
    var p = _s().plans[section];
    return Array.isArray(p) ? p.slice() : [];     // ?? [] — never undefined, never shared
  }
  function setPlan(section, arr){
    if(!section) return [];
    var s = _s();
    s.plans[section] = Array.isArray(arr) ? _clone(arr) : [];
    save(s);
    return getPlan(section);
  }

  // ── pantry ──────────────────────────────────────────────────────────────
  function getPantry(){ return _s().pantry.slice(); }
  function setPantry(arr){ var s = _s(); s.pantry = Array.isArray(arr) ? _clone(arr) : []; save(s); return getPantry(); }

  // Open the door at boot so the v0 → v1 migration happens once, up front, before
  // core.js's THEME reads it. Wrapped: a dead localStorage must never block the app.
  try { load(); } catch(e){ _state = _default(); }

  return {
    ROOT_KEY: ROOT_KEY, LEGACY_KEY: LEGACY_KEY, SCHEMA_VERSION: VERSION,
    load: load, migrate: migrate,
    getPref: getPref, setPref: setPref,
    favKey: favKey, getFavourites: getFavourites, isFavourite: isFavourite, toggleFavourite: toggleFavourite,
    getPlan: getPlan, setPlan: setPlan,
    getPantry: getPantry, setPantry: setPantry,
    _default: _default   // census only
  };
})();
if(typeof window !== 'undefined') window.tinzaStore = tinzaStore;
