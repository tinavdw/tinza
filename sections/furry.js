function furryHTML(){
  const pet=S.furryPet||"dog";
  const dogColor="#8060c0", catColor="#e08040";
  const furryHowOpen = S.furryHowOpen || false;
  return `<div style="min-height:100vh;background:#0f0e0c;">

    <!-- ══ V33 PHOTO HEADER ══ -->
    <div style="position:relative;height:200px;overflow:hidden;background:linear-gradient(135deg,#120f1a 0%,#1a1028 100%);">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,6,14,0.3) 0%,rgba(8,6,14,0.75) 100%);z-index:1;"></div>
      <button onclick="set({screen:'home'})" style="position:absolute;top:14px;left:16px;z-index:3;background:rgba(0,0,0,0.45);border:1px solid #6040b0;border-radius:20px;color:#9060d0;font-size:12px;padding:5px 12px;cursor:pointer;">← Home</button>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:2;padding:14px 16px 0;">
        <h1 style="margin:0 0 2px;font-size:24px;font-weight:bold;color:#f5e8cc;font-family:Georgia,serif;">🐾 Furry Friends Kitchen</h1>
        <p style="margin:0 0 10px;font-size:11px;color:#9070c0;font-style:italic;">Homemade food for your fur babies — scaled by size, age and number</p>
        <div style="display:flex;align-items:center;background:rgba(18,15,26,0.85);border:1px solid #6040b0;border-radius:20px;padding:7px 14px;margin-bottom:14px;">
          <span style="color:#9060d0;margin-right:8px;font-size:14px;">🔍</span>
          <input type="text" placeholder="Search dog & cat recipes…"
            oninput="set({furrySearch:this.value})"
            value="${S.furrySearch||''}"
            style="flex:1;background:none;border:none;outline:none;color:#d0b8f0;font-size:13px;font-family:Georgia,serif;"
          />
          ${S.furrySearch?`<button onclick="set({furrySearch:''})" style="background:none;border:none;color:#6040b0;font-size:16px;cursor:pointer;">×</button>`:''}
        </div>
      </div>
    </div>

    <!-- ══ HOW IT WORKS + PET TOGGLE ══ -->
    <div style="background:#120f1a;border-bottom:1px solid #2a1a3a;padding:12px 16px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px;">
        <div style="flex:1;">
          <button onclick="set({furryHowOpen:!S.furryHowOpen})"
            style="background:none;border:none;color:#9060d0;font-size:12px;cursor:pointer;padding:0;display:flex;align-items:center;gap:4px;">
            ${furryHowOpen?'▲':'▼'} How it works
          </button>
          ${furryHowOpen?`
            <div onclick="set({furryHowOpen:false})" style="position:fixed;inset:0;z-index:9;"></div>
            <div style="position:relative;z-index:10;background:#0f0c18;border:1px solid #3a2050;border-radius:10px;padding:12px;margin-top:8px;font-size:12px;color:#b090d0;line-height:1.6;">
              <strong style="color:#9060d0;">1. Pick your pet</strong> — Dogs or Cats.<br>
              <strong style="color:#9060d0;">2. Choose a category</strong> — cooked meals, treats, raw food and more.<br>
              <strong style="color:#9060d0;">3. Scale by size & age</strong> — portions adjust automatically.<br>
              <span style="color:#6040b0;font-size:11px;">All recipes vet-reviewed. No harmful ingredients.</span>
            </div>
          `:''}
        </div>
        <!-- Pet toggle -->
        <div style="display:flex;gap:8px;flex-shrink:0;">
          <button onclick="set({furryPet:'dog',dogSection:'cooked',activeDog:null,dogView:null})"
            style="padding:7px 14px;border-radius:20px;border:2px solid ${pet==='dog'?dogColor:'#2a1a3a'};background:${pet==='dog'?'#1a1028':'transparent'};color:${pet==='dog'?'#a080e0':'#4a3060'};font-size:13px;cursor:pointer;">🐶 Dogs</button>
          <button onclick="set({furryPet:'cat',catSection:'meals',activeCat:null,catView:null})"
            style="padding:7px 14px;border-radius:20px;border:2px solid ${pet==='cat'?catColor:'#2a1a0a'};background:${pet==='cat'?'#1a1008':'transparent'};color:${pet==='cat'?'#e09050':'#603020'};font-size:13px;cursor:pointer;">🐱 Cats</button>
        </div>
      </div>
    </div>

    ${pet==='dog'?(S.dogView==='myplan'?dogMyPlanView():S.activeDog?dogRecipeHTML_screen():dogListHTML()):
                  (S.catView==='myplan'?catMyPlanView():S.activeCat?catRecipeHTML_screen():catListHTML())}
  </div>`;
}
