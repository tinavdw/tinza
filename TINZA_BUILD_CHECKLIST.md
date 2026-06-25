# TINZA — MASTER BUILD CHECKLIST & DESIGN SYSTEM
*The "don't forget anything" list **plus** the locked design values, in one file. Pairs with TINZA_MASTER_PLAN.mermaid. Tick as you go.*
*Two parts: **Part 1 = the checklist (A–P)** · **Part 2 = the locked design system** (exact palette/fonts/components that A & E point to).*

---

# PART 1 — THE CHECKLIST

## A. BEFORE YOU START — checks & balances (do these first)
- [ ] Commit a known-good restore point (tag the current live app) so you can roll back instantly
- [ ] Do a full **inventory**: list every section + feature + recipe count, so nothing gets lost in the move
- [ ] Confirm the live app works at tinza.netlify.app *before* each session (your rule)
- [x] Lock the design tokens (palette, fonts, card styles) in core.js **before** re-skinning anything → **written down in Part 2** (exact hex + type scale + component inventory)
- [ ] Use Netlify **deploy previews / a branch** to test changes before they hit the live site
- [ ] Define "done" for each phase so you know when to stop and move on
- [ ] Keep the gold pair (Braai + World Kitchen) as your canary — re-skin them first, check, then roll
- [ ] core.js discipline: back it up, check `wc -l` before & after, never truncate
- [ ] Validate one file at a time (`node --check`), but **batch validated files into ONE push** — Netlify charges 15 credits/deploy, so fewer deploys = far less burn (Pro = 3,000 credits/mo)
- [ ] Turn off unneeded deploy previews (each costs credits)
- [ ] Move images to a CDN so they stop eating bandwidth credits + triggering rebuilds
- [ ] Settle the two open decisions before launch (Pro price · image approach) — *both now LOCKED, see §L*

---

## B. SECTIONS — every one must survive the move
- [ ] 🔥 Fire Food (braai · potjie · sides & salads · bastes) — *cut-aware portions*
- [ ] 🌍 World Kitchen — Africa · Europe · Asia · South Africa
- [ ] 🍽️ Feed My Family — Breakfast · Lunch · Supper · Bakes (breads · biscuits · rusks) · quick/one-pot tag
- [ ] 🧂 Spice — shelves: Blends & Rubs · Sauces & Condiments · Dressings · Pestos & Pastes · Stocks & Broths · Flavoured Butters & Oils (niter kibbeh) — *make-vs-buy savings*
- [ ] 🎉 Events umbrella, opened up → all standalone:
  - [ ] 🍽️ Buffet
  - [x] 🎂 Cakes — *on universal opener + warmCard browse cards (sameness done)*
  - [x] 🧁 Kiddies Party — *on universal opener*
  - [ ] 🍢 Finger Foods
  - [x] 🥂 Beverages — *on universal opener + warmCard browse cards (sameness done)*
- [ ] 💚 Health (habit-building · GI/GL · nutrition)
- [ ] 🌗 Mood (cook for how you feel) — *keeps colour-as-feeling accents, see Part 2 §EXCEPTIONS*
- [ ] 💰 Budget (most food, least rands) — *also a filter pill*
- [ ] 🍼 Tiny Tummies (baby food, by age stage)
- [ ] 🧒 Kiddies
- [ ] 🎒 Lunchboxes
- [ ] 🥾 Hiking & road food
- [ ] 🐾 Furry Friends (pet food)

---

## C. FEATURES — the spine & tools (shared, roll to all sections at once)
- [ ] Bottom nav: Home · Explore · Plan · List · Box (on every screen)
- [ ] Home — daily-open screen (Today's Special · Right Now · Anchor Ingredient · shelf tiles)
- [ ] Explore — the full directory (every section visible, nothing buried)
- [ ] Search (recipe · ingredient · section)
- [ ] Filter pills (diet · cuisine · meal · time · max-ingredients · missing-one) with live count
- [ ] Recipe screen — one shared layout *(= `recipePage`, Part 2 §COMPONENTS)*
- [ ] Cook Mode (screen awake · big text · step highlight · tick ingredients · auto-timers)
- [ ] qtyBox — live serving scaler (± guests), per-person **and** total per ingredient line
- [ ] My Plan / weekly planner (one engine · ready-made weeks · "Use this plan") *(build from §COMPONENTS only — see Part 2 §UNBUILT)*
- [ ] Shopping list (auto-combined · aisle-sorted in Checkers order · tick-to-trolley)
- [ ] Pantry scan ("scan what you have" → removes staples, drops the spend)
- [ ] Recipe Box (folders · source badges · "yours to keep, never shared")
- [ ] Import from any URL (schema.org → AI fallback · personal save · Pro)
- [ ] TikTok / Reel / YouTube → recipe (caption + on-screen + audio → review step → save · Pro)
- [ ] Anchor Ingredient (weekly spotlight on Home + opens free inside every recipe)
- [ ] Cross-links between recipes (the 15 already wired + new ones) *(= `crossLinkBox`)*
- [ ] Right Now engine (location + weather + time → contextual line & suggestions)
- [ ] Locale layer (terminology dictionary · home region first · SA = locale #1)
- [ ] Settings/Profile (location → sets SA kitchen · dietary prefs · units · who's eating)
- [ ] Free / Pro tiers (peekable locks · calories always free · cost = Pro)
- [ ] Monthly letter from Tina (Pro)
- [ ] Community (Pro)
- [ ] Magazine (Pro)
- [ ] AI Chef (Pro)

**Builder tools (for Tina, not subscribers):**
- [ ] Photo Studio — whole-app "needs photos" dashboard: per-section counts + drill-in (keeps the old click-a-section flow, adds a global backlog view)
- [ ] "Missing photo" filter inside any section
- [ ] Recipe Review Queue: AI-drafted/searched recipes land as candidates → Tina checks method, maps ingredients to PRICE_DB, sets SA name + "How This Feels" → approve to library (demand-driven growth, human-checked)
- [ ] Leftovers from pack-waste: "you've got X left" → leftover-recipe suggestions (money-saver)

---

## D. THE COST SYSTEM — the moat, on every screen
- [ ] 🟢 Green = food cost (what the meals cost) — per-person + total
- [ ] 🟡 Gold = shop spend (full packs at the till)
- [ ] Cost line is Pro, peekable for free · scaling is free
- [ ] Spice shows make-vs-buy saving instead of per-person
- [ ] Plan dish-rows: name + grams total + green per-dish food cost *(= `planDishRow` §4c)*
- [ ] Pricing rule: on duplicate prices across rounds, take the most expensive
- [ ] Pack-waste reframed positively ("R28 is pack extra, yours to keep")
- *Exact green/gold hex + meaning rule: Part 2 §PALETTE.*

---

## E. LOOK & FEEL — the new skin (one re-skin, propagates everywhere)
- [x] Warm spice palette (parchment · paprika · turmeric) — not competitor-white *(live; exact hex in Part 2 §PALETTE)*
- [x] Fonts: Fraunces (titles) · Mulish (body, big & readable) · DM Mono (cost figures) *(live; Part 2 §TYPE)*
- [ ] Keep 1200×640 photos with the name on them (single-column cards) *(= `warmCard`)*
- [ ] "How This Feels" sensory one-liner on every recipe
- [x] Sameness rule: every page identical via shared core.js — only photo + emoji differ *(architecture in place; shared renderers built — Part 2 §COMPONENTS. Ongoing = per-section hand-roll sweep, §DRIFT)*
- [ ] Signature micro-animation per section (CSS, reduced-motion safe): 🔥 Fire Food flame · 🎈 Kiddies Party balloons · 🌍 World spinning earth · 🧂 Spice steam · 🐾 Furry waking pet
- [ ] Quality floor: keyboard focus · reduced-motion · big tap targets for older users

---

## F. CROSS-DEVICE & ACCOUNTS
- [ ] Responsive: phone · tablet · laptop browser (fluid CSS, not fixed-width)
- [ ] Installable PWA on each device
- [ ] User accounts (login) — needed for subscriptions
- [ ] Cross-device **sync** (same plan/box/list on all a subscriber's screens) → needs backend
- [ ] Basic offline (browse recipes without signal)

---

## G. CONTENT & INFO — standards to carry over (don't lose the rules)
- [ ] Ingredient standard: name = what you buy · one per line · no "X or Y" combos *(full rule: Part 2 §BOXES)*
- [ ] Salt & pepper "to taste" (K14) on every savoury dish (no drinks/sweet bakes)
- [ ] SA naming: Afrikaans first, English gloss in (), old names in aliases
- [ ] SA cuts by cooking method · cod swaps (hake / bacalhau / snoek)
- [ ] Portion brain locked (cut-aware calcMeat · taper · +10% buffer)
- [ ] Cross-links wired and working
- [ ] Recipe detail elements kept on every recipe: serving suggestions · chef notes · trivia · pairings · "How This Feels" (on Overview, not Cook Mode)
- [ ] Costing data (PRICE_DB / PACK_DB) carried in
- [ ] **Content queue:** Ethiopia niter kibbeh (cross-links 9) · Zimbabwe methods · Libya 5 dishes
- [ ] Recipe gate → paste into CLAUDE.md

---

## H. INFRASTRUCTURE — by stage (free-to-start, pay as you grow)
**Now (building):**
- [ ] Claude + Netlify (free tier is enough) — static PWA
**At launch (subscribers):**
- [ ] Auth + database (Supabase or Firebase) — accounts, sync, saved data
- [ ] Payments (PayFast/Network — recurring billing for the website · sell subscription on web, app logs in, to avoid Play in-app billing)
- [ ] Image CDN (Cloudinary / Cloudflare Images) — move photos off the repo
- [ ] Weather API (Open-Meteo — free, no key)
- [ ] Serverless backend (Netlify Functions) for AI import/TikTok (keys stay server-side)
**At scale:**
- [ ] Monitoring / analytics · backups · support inbox

---

## I. SHOPPING-LIST HAND-OFF (no partnership needed yet)
- [ ] Export list: clean text · PDF · native share-sheet
- [ ] Deep-link each item to a search on the retailer's site/app (Sixty60 web store, etc.)
- [ ] Copy-whole-list to clipboard
- [ ] Share via WhatsApp / messaging (one tap, pre-filled message to partner/helper)
- [ ] Scheduled reminder ("your list's ready at 5pm" → tap to send) — needs backend/notifications
- [ ] (Later, at scale) pursue official retailer integration

---

## J. LAUNCH — South Africa first
- [ ] Wrap PWA as a TWA (PWABuilder / Bubblewrap) for the Play Store
- [ ] Play Console: restrict availability to South Africa
- [ ] Billing restricted to SA
- [ ] Privacy policy + terms (required for store + accounts)
- [ ] Store listing assets (icon · screenshots · description)
- [ ] Free trial (matches rivals)

---

## K. EXPANSION — the growth path
- [ ] Phase A: SA launch · prove the moat · get subscribers
- [ ] Phase B: deepen SA content + features · referrals · letter · magazine
- [ ] Phase C: locale #2 (UK or US) — needs local price data for the cost wedge
- [ ] Phase D: more locales (AU → India → rest of Africa) — each = dictionary + price data
- [ ] Phase E: retailer integration once scale justifies it

---

## L. DECISIONS STILL TO LOCK
- [x] **Pro price: R50/month for SA — LOCKED** (in-band: NYT Cooking R49.99, Savvy Chef R50) · add a free trial
- [x] **Images: LOCKED** — free *commercially-licensed* stock first; AI-generate the rest (ChatGPT/Gemini) in one consistent style line; never alter copyrighted photos

## M. NOTICED — FIX IN A LATER PASS (content/costing, not the re-skin)
- [ ] **Boerewors price** wrong in Worsrolpasteie (Sausage Rolls): pp vs total don't reconcile (R12 pp but R39 total for 4) — check the "×"-unit → PRICE_DB costing for boerewors
- [ ] **Costs read too cheap on some dishes** — recipe cost shows "based on X/5 ingredients priced" (e.g. Cocktail Sausages = 3/5), so unpriced ingredients are skipped and the total undercounts. Fill missing PRICE_DB entries so costs reach realistic levels. (Tina's gut: boerewors ≈ R25–R35 pp; standalone Boerewors at R36 pp/350g looks about right.)
- [ ] **Update Pro price text R99 → R50** everywhere in the app (cost-lock teaser box, etc.) — matches the locked R50 decision
- [ ] (minor) Some titles have a double English gloss, e.g. "Worsrolpasteie (Sausage Rolls) (Boerewors Sausage Rolls)" — keep one gloss; appears systematic

## N. PHASE 1 POLISH — NEXT SESSION (judge on a real phone, in daylight)
- [ ] **Legibility pass (warm theme)** — flagged hard to read on tablet at night: bump body/method/ingredient **font sizes**; darken the **amber ingredient amounts** + the lighter "(note)" text for dim-light/older-eyes reading; check the dark **My Kitchen / Download** button text contrast. Warm-gated, judged on Tina's actual phone in good light. *Rationale (Tina): people read recipes in bed / dim rooms — it must be legible at low brightness.*
  - [x] *(19 Jun, palette level — DONE)* darkened warm-light cost figures to deeper green `#46530c` + deeper amber `#876213`; bright `#c8e840`/`#f5c842` kept as accent dots/chips only. (This is why those hex are live — Part 2 §PALETTE.)
  - [ ] **OPEN THREAD (per-element, confirm on phone in daylight):** the 19 Jun pass also flagged **leftover dark boxes bleeding into the warm page** — the **Pro cost box** and the **timer pill** (dark-on-parchment, low contrast). May not all be re-skinned to warm tokens yet. Glance at a recipe's Pro cost box + a timer pill in warm-light; if either still looks dark, that's the remaining bit. *(See Part 2 §DRIFT — distinguishes this from intentional night mode.)*
- [ ] **Night mode = the real bed-reading answer** — the planned **dark/light toggle (Profile)** is the proper fix for night use (warm light theme by day, dark theme for bed). **DEFAULT = Auto**: the app follows the phone's own light/dark setting (via `prefers-color-scheme`), so it switches to dark automatically at night — NO manual step each time. Toggle = 3-way override: **Auto (follow phone) / Always Light / Always Dark**; most users never touch it. Bonus: both themes already exist in-app (warm-light + warm-dark, both in Part 2 §PALETTE) — it's "wire the two to follow the phone," not build from scratch.
- [ ] **Cocktail Sausages (Braai) photo not showing** — falls back to emoji = filename/path mismatch. Ask Code for the exact expected filename + folder (cleanPhotoName); rename image to match (watch .jpg vs .jpeg, capitals, spaces, folder). Boerewors photo works = good reference.

## O. PHOTO COVERAGE — REAL NUMBERS (full audit, 18 Jun) — supersedes the old "402"
- **TOTAL 1,808 · HAVE photo 391 (~22%) · MISSING 1,417.** Full report: `Downloads\TINZA_PHOTO_COVERAGE.txt`.
- **World Kitchen = 957 recipes, ~953 missing = 67% of all missing** → the big job. Do as **AI-batch / stock with one style line, NOT hand-shoot.** Hero recipes + strong sections get real photos; long tail rides the fallback. Don't try to make all 1,417.
- **WK native-script naming issue (important):** many WK recipes have Greek/Cyrillic/Arabic names (Σπανακόπιτα, Κλέφτικο…), so their expected photo filename is non-Latin. A chunk of WK "missing" is a NAMING-SCHEME problem, not absent photos. FIX = add **transliteration** in cleanPhotoName so native-script names map to Latin filenames (e.g. `Spanakopita.jpg`). Decide as part of WK photo strategy.
- **Orphan buckets (29):** A = 7 recoverable renames + Quatre Épices → Quatre Epices [apply now, clean wins]; B = Spanakopita parked with the WK transliteration decision; C = 4 muffin recipe names truncated (add "Muffins" to recover photos) + 7 harmless dups (leave / sort in photo pass); D = 9 true orphans incl. 6 smoothie photos (leave — may map to renamed recipes, DON'T delete).

## P. FEATURE IDEAS — SOMEDAY (night-scroll research, 19 Jun)
- **Hands-free Cook Mode** — say "Next"/"Repeat" (or a wave gesture) to advance steps with flour-covered fingers. Use the PHONE's on-device voice (works on every Android — SA is Android-heavy), NOT an Alexa skill.
- **Unit-smart rounding** — never show "0.66 eggs"; round to practical amounts or switch units (e.g. to tbsp). Fits the ingredient standard.
- **Adaptive font scaling** — text grows as the cook steps back from the counter. Ties to the readability + night-mode theme.
- **Pan-size scaler** — scale a recipe by actual tin/pan dimensions, not just servings.
- **Multi-timer dashboard** — already have timers on steps; add a multi-timer view for complex meals.
- **Pantry "before it spoils" alerts** + **geofenced grocery reminder** (near a store → quick-grab list) — extend the planned pantry photo scan.
- **"Balance My Week"** — auto-fill snacks/breakfasts to hit macro/calorie goals in the planner.
- **Alexa / voice-assistant skill → PARKED, US/UK expansion only.** Alexa is still big globally (esp. US; revitalised by Alexa+ AI), BUT Echo penetration in SA is low and SA is Android/Google-heavy — not worth it for the SA-first launch. Do voice via the phone instead; revisit Alexa if expanding.
- Already on roadmap (research just confirms on-trend): smart-text timers ✓, pantry photo scan ✓, aisle-sorted list ✓, TikTok/shareable Cook Mode ✓, substitutions + Anchor Ingredient ✓.

---
*If you think of something new, add a line. This file is the memory so you never have to repeat yourself.*

---
---

# PART 2 — THE LOCKED DESIGN SYSTEM
*The exact values behind §A "lock the design tokens" and §E "look & feel". Single source of truth for form + function. **Uniformity comes ONLY from shared `core.js` functions using CSS variables** — never hand-rolled, never raw hex. Build every section against this, including unbuilt ones. Values extracted from live `index.html` + `core.js`, not invented.*

## §PALETTE — use `var(--token)`, never raw hex

Warm Spice palette ships in **light** + **dark** — **both intended** (warm-light by day, warm-dark for bed/glare, switched by the Auto toggle in §N). The warm-dark column is **night mode, not drift — never flatten it.** `--cost-green` and `--shop-gold` stay constant across themes (they're *meaning* markers).

> **Locked 19 Jun (legibility):** warm-light cost text is the **deeper** green `#46530c` + amber `#876213` on purpose — bright `#c8e840`/`#f5c842` washed out on parchment and failed the child-or-grandma read. Bright survives **only** as accent dots / chip fills. Do not "fix" back to bright.

| token | role | warm-light | warm-dark |
|---|---|---|---|
| `--bg` | page | `#f7ebdc` | `#1b1410` |
| `--card` | primary surface | `#fffaf2` | `#241c15` |
| `--card2` | inset / secondary surface | `#fbf3e6` | `#2d241b` |
| `--ink` / `--ink2` | primary text | `#2c211a` | `#f2e8d8` |
| `--ink-soft` | secondary text (feel, meta) | `#6b5849` | `#c9b9a4` |
| `--ink-faint` | faint text | `#9a897a` | `#9a897a` |
| `--line` | borders | `#e9dac6` | `#3a3026` |
| `--accent` / `--paprika` | interactive / headers / eyebrows | `#b5462b` | `#e08a5e` |
| `--turmeric` | focus / warm highlight | `#d98a2b` | `#f0b34a` |
| `--on-media` | text **on** photos | `#fff5e9` | `#fff5e9` |
| `--on-media-soft` | sub-text on photos | `#ffe6cf` | `#ffe6cf` |
| `--cost-green` | FOOD-cost dot (constant) | `#c8e840` | `#c8e840` |
| `--green` | FOOD-cost text | `#46530c` | `#9fc15e` |
| `--green-tint` | FOOD-cost chip bg | `#f3f7df` | `#232a14` |
| `--shop-gold` | SHOP-spend marker (constant) | `#f5c842` | `#f5c842` |
| `--gold` | SHOP-spend text | `#876213` | `#e8b84e` |
| `--gold-tint` | SHOP-spend bg | `#fbf2d8` | `#3a2e18` |
| `--radius` | card corner | `18px` | `18px` |

**Colour meaning LOCKED — never mix:** 🟢 green (`--cost-green` dot + `--green` text) = **food cost** only · 🟡 gold (`--shop-gold`/`--gold`) = **shopping / shop spend** only · 🔴 accent/paprika = interactive, headers, eyebrows.

## §TYPE

**Fonts** (warm scope, `!important`): **Mulish** = body + UI · **Fraunces** = `h1,h2,h3,.ttl` (titles/card names) only · **DM Mono** (`.mono`) = numbers, cost chips, steppers.

| role | size | weight | colour | font |
|---|---|---|---|---|
| Card name (on photo) | 22px | 600 | `--on-media` | Fraunces |
| Section / recipe title | 22px | 600 | `--ink` | Fraunces |
| Row name · cross-link · plan name | 16px | bold | `--ink` | Mulish |
| Method / body text | 17px | 400 | `--ink2` | Mulish · lh 1.6 |
| Secondary line (feel, sub, meta) | 14px | 400 | `--ink-soft` | Mulish |
| Meta strip / small labels | 12.5–13px | 700 | `--ink-soft` | Mulish |
| Eyebrow label (UPPERCASE) | 11–13px | 800 | `--paprika`/`--accent` | Mulish · l-spacing ~0.1em |
| Cost chip text | 13px | 500 | `--green` | DM Mono |
| Stepper / qty number | 20px | 600 | `--ink` | DM Mono |

## §COMPONENTS — the ONLY way to render

Compose pages from these. If a pattern isn't here yet, **build the shared function in `core.js` first, then call it** — never inline.

| function | what it renders | canonical form |
|---|---|---|
| `warmCard` | browse photo card | 1200×640 image, name-on-photo (Fraunces 22), optional ✓ checkbox top-left, badge top-right, meta strip (green chip + meta) below |
| `recipeRow` | text list row | `--card` bg, `--line` border, radius 10, pad 12×14 · ✓ emoji **NAME 16 bold** + feel 14 `--ink-soft` + "Recipe ›" (gold chevron 22) |
| `qtyBox` | the ONE quantity box | under recipe name · label 11 uppercase `--paprika` · −/＋ steppers (36px) · mono number 20 · optional green total chip + info strip |
| `sectionHeader` | 200px photo header | back + title + tagline + search overlaid · optional wrapped category grid below (NO horizontal scroll) |
| `guestBar` | guest-count control | shared stepper for plan guests |
| `methodStep` | numbered step | 26px `--accent` circle + white number 15 bold · text 17 `--ink2` lh1.6 · optional timer pill (14, `--gold`) |
| `crossLinkBox` | "make your own" link | `--card2` bg, `--accent` border, radius 10 · emoji 24 · label 13 accent uppercase · target 16 `--ink` bold · gold chevron 26 |
| `goesWellBox` | pairing pills | titled box of pills (14, `--line` border, `--ink-soft`) |
| `recipeBox` | generic titled box | the wrapper all "boxes" use — title + content, `--card`/`--card2`, `--line` |
| `recipeActions` | bottom trio | Add to Plan / My Kitchen / Download · radius 10, 13–14px |
| `recipeNav` | bottom text nav | ← Back · 🧺 My Plan · Home · 13px |
| `planDishRow` (§4c) | plan row | NAME 16 cream bold · stacked meta lines · **green food-cost TOTAL** right (omitted if unpriced) |
| `shoppingView` | shopping list | two-cost: green food cost + gold shop spend; `priceName` keys |
| `planView` | My Plan screen | shared plan chrome |
| `recipePage` | the whole detail page | name → qtyBox → ingredients → method → boxes → actions → nav |

## §BOXES & BULLETS

- **Box chrome (all boxes share this):** `--card`/`--card2` bg, `1px solid --line` (or `--accent` for emphasis), radius **10px** (boxes) / **18px** (`--radius`, cards), padding ~12–14px, margin-bottom 12–14px. Tip box, cost box, info strip, cross-link, goes-well = **same chrome; only the meaning-colour changes.**
- **"Bullets" = numbered `methodStep`s**, not raw `<li>`. Tags/pairings = **pills**, not bullets.
- **Ingredients (LOCKED):** one ingredient per line · show **both** per-person **and** total-for-guests · name = what you BUY (matches PRICE_DB) · prep goes in METHOD, not the name.

## §EXCEPTIONS ("a small exception here and there")

- **Section identity = photo + emoji ONLY.** Nothing else differs between rooms.
- **Mood keeps its colour-as-feeling accents** — do NOT flatten Mood to the single palette.
- Warm light **and** dark are both shipping (dark = night mode, not a fallback to delete).

## §UNBUILT — rule for sections not built yet (Weekly Planner, Wedding Bar Planner…)

1. Do **not** hand-roll a single box, row, button, or label.
2. Compose the screen entirely from §COMPONENTS.
3. Need a pattern with no shared function yet? **Add it to `core.js`, then call it everywhere** — the new section inherits sameness for free, and every existing room gets the upgrade in the same roll.

> This is why the Weekly Planner can be "the same" before it's even built: same lego → cannot drift.

## §DRIFT — the actionable sameness backlog

1. **Leftover dark hex bleeding into the WARM page** (the 19 Jun legibility pass — palette level done, per-element to confirm on phone). The *real* drift = hard-coded dark colours that show even in warm-light, reading poorly (rust-on-near-black). Flagged 19 Jun: **Pro cost box**, **timer pill**. Suspects: `.timer-*` / `.cook-step-*` / `.cook-timer-inline` / `.serving-*` / `.goes-well-pill`.
   → **Test per element: does it show in warm mode?** YES + dark → drift → migrate colours to `var(--…)`. Only in dark theme → **leave it, that's night mode.** *(Static analysis can't tell them apart — judge on the actual phone, warm-light, daylight.)*
   → **Do NOT** convert the warm-**dark** column to anything — it's intentional.
   → `.pill` · `.back-btn` · `.step-num` · `.next-btn` carry **no hard-coded colour** (and `.warm *` already swaps Georgia→Mulish) — not drift, leave them.
2. **Global sans rule not yet live:** decide between current warm-scoped Mulish vs a truly global `* { … sans-serif }` rule.
3. **Per-section hand-roll sweep:** confirm every section routes rows/boxes through §COMPONENTS. Cakes + Beverages done (warmCard). Still to confirm: **Spice, Feed-My-Family, Health, buffet**.
4. **Finish Events sameness first** (locked tactical order): shared §4c plan-row in Events → Events My Plan white overlay (§4.1) → cull dead Events code — *before* moving to Spice.
