function furryHTML(){
  const pet=S.furryPet||"dog";
  const dogColor="#c06020", catColor="#e08040";
  const furryHowOpen = S.furryHowOpen || false;
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#1a1208 0%,#1a1208 100%);">
      <img src="Images/Image%20header/furry.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;" onerror="this.style.display='none';">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,4,2,0.3) 0%,rgba(8,4,2,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'tinyfurry'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #c06020;border-radius:20px;color:#c06020;font-size:13px;padding:5px 12px;cursor:pointer;">← Tiny & Furry</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:22px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🐾 Furry Friends Kitchen</h1>
        <p style="margin:0 0 10px;font-size:13px;color:#c0915a;font-style:italic;">Homemade food for your fur babies — scaled by size, age and number</p>
        <div style="display:flex;align-items:center;background:rgba(15,8,4,0.85);border:1px solid #c06020;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:#c06020;margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search dog & cat recipes…"
            oninput="liveSearch(this,'furrySearchResults',{sections:['furry'],stateKey:'furrySearch'})"
            value="${S.furrySearch||''}"
            style="flex:1;width:100%;background:none;border:none;outline:none;color:#e0d4b8;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.furrySearch?`<button onclick="set({furrySearch:'',searchResults:[]})" style="background:none;border:none;color:#c06020;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>
    <div id="furrySearchResults" style="max-width:600px;margin:0 auto;padding:0 16px;"></div>

    <!-- ══ HOW IT WORKS + PET TOGGLE ══ -->
    <div style="background:#1a1208;border-bottom:1px solid #2a1a10;padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;">
        <div style="flex:1;">
          <button onclick="set({furryHowOpen:!S.furryHowOpen})"
            style="background:none;border:none;color:#c06020;font-size:13px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${furryHowOpen?'▲':'▼'} How it works
          </button>
          ${furryHowOpen?`
            <div onclick="set({furryHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:#161210;border:1px solid #3a2010;border-radius:10px;padding:12px;margin-top:8px;font-size:13px;color:#c8b898;line-height:1.6;">
              <strong style="color:#c06020;">1. Pick your pet</strong> — Dogs or Cats.<br>
              <strong style="color:#c06020;">2. Choose a category</strong> — cooked meals, treats, raw food and more.<br>
              <strong style="color:#c06020;">3. Scale by size & age</strong> — portions adjust automatically.<br>
              <span style="color:#c06020;font-size:13px;">All recipes vet-reviewed. No harmful ingredients.</span>
            </div>
          `:''}
        </div>
        <!-- Pet toggle -->
        <div style="display:flex;gap:8px;flex-shrink:0;">
          <button onclick="set({furryPet:'dog',dogSection:'cooked',activeDog:null,dogView:null})"
            style="padding:7px 14px;border-radius:20px;border:2px solid ${pet==='dog'?dogColor:'#2a1a10'};background:${pet==='dog'?'#1a1208':'transparent'};color:${pet==='dog'?'#f5c842':'#6a5440'};font-size:13px;cursor:pointer;">🐶 Dogs</button>
          <button onclick="set({furryPet:'cat',catSection:'meals',activeCat:null,catView:null})"
            style="padding:7px 14px;border-radius:20px;border:2px solid ${pet==='cat'?catColor:'#2a1a0a'};background:${pet==='cat'?'#1a1008':'transparent'};color:${pet==='cat'?'#e09050':'#603020'};font-size:13px;cursor:pointer;">🐱 Cats</button>
        </div>
      </div>
    </div>

    <!-- ══ DISCLAIMER (collapsible, one page) ══ -->
    <div style="padding:12px 16px 0;">
      <div onclick="set({furryDiscOpen:!S.furryDiscOpen})" style="background:#1a1208;border:1px solid #3a2010;border-radius:10px;padding:10px 12px;cursor:pointer;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:13px;color:#c06020;font-weight:bold;">⚠️ Disclaimer</span>
          <span style="font-size:13px;color:#c0915a;">${S.furryDiscOpen?'▲':'▼'}</span>
        </div>
        ${S.furryDiscOpen?`<p style="margin:8px 0 0;font-size:13px;color:#c0915a;line-height:1.6;">Homemade pet food ideas — not a substitute for veterinary advice. Always check with your vet before changing your pet's diet, and especially for puppies, kittens, or pregnant, senior or unwell pets.</p>`:''}
      </div>
    </div>

    ${pet==='dog'?(S.dogView==='myplan'?dogMyPlanView():S.activeDog?dogRecipeHTML_screen():dogListHTML()):
                  (S.catView==='myplan'?catMyPlanView():S.activeCat?catRecipeHTML_screen():catListHTML())}
  </div>`;
}
