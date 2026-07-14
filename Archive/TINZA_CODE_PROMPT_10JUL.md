# TINZA — CODE PROMPT · Portugal Batch-4 + WK Fix-Queue · 10 Jul 2026
### Paste this to the Claude Code instance. Supersedes/augments TINZA_CLAUDE_CODE_BRIEF.md with today's decisions.

---

**YOUR FILE:** `sections/wk_europe.js`. You are the **SOLE DRIVER** of this file. Opus works only on separate engine files + authors hero blocks it hands you to *place*. One-driver-per-file: never assume Opus is editing wk_europe.js.

**THE BAR:** every dish you touch must match the reference hero **Bacalhau à Brás** (TINZA_HERO_BACALHAU_A_BRAS.md) on all 11 axes. If a dish can't reach it, flag it — don't ship it thin.

**READ FIRST:** TINZA_PORTUGAL_PROTOTYPE_10JUL.md (11 axes + leftovers standard), TINZA_LEFTOVERS_FIX_10JUL.md (fix-queue + salt-fish card + 9 Alentejo leftover sets), TINZA_WK_STANDARD.md, WOW_STANDARD.md.

---

## HARD BOUNDARIES
- ❌ Do NOT touch `spice.js` (Opus file).
- ❌ Do NOT author the locale / dried↔fresh engine (Opus / engine files).
- ❌ Do NOT author or rewrite the **10 reserved heroes** — leave them for Opus; only PLACE hero blocks Opus hands you. Reserved: cod trinity (à Brás · com Natas · Gomes de Sá) · pastéis de nata · bolo rei · caldo verde · francesinha · frango piri-piri · leitão da Bairrada · cozido à portuguesa.
- ✅ Cross-links FROM wk cards TO Spice/Bakes recipes are edits in wk_europe.js — safe.

## MISSION
1. **Batch-4 savoury tail (~14)** to WOW: tripas à Porto · feijoada · chanfana · arroz de pato · bifana · favas guisadas · bifinhos · sopa de pedra (stays a hearty MAIN) · sopa de cação · ensopado de borrego · carne de porco à alentejana · migas à alentejana · polvo à lagareiro …
2. **Apply the WK fix-queue per card** (TINZA_LEFTOVERS_FIX doc §C / addendum): ingredient specificity (beef honeycomb tripe · name sausages chouriço/morcela · state cuts · goat cut · duck whole/legs, not breast) · method completeness (no 1-step cards — audit the whole file) · goesWith link-or-drop + "a light red **wine**".
2b. **🔗 COMPONENT LINK + SHOPPING SPLIT (governing rule — applies as you go, every card).**
   - **Link EVERY component that has a house recipe** — not just goesWith, but anything the recipe *requires*: rolls/breads → Bakes; curry & spice mixes, masalas, chutneys, atchars, pestos, dressings, sauces, stocks → Spice; salt-cod → Salt Your Own Cod. Clickable cross-links.
   - **BUT the shopping list / costing DEFAULTS to the SHOP-BOUGHT item** (its own PRICE_DB key: shop rolls, shop curry mix, jarred chutney) — **never the exploded sub-recipe ingredients.** The link = "make your own if you like"; the default cost = you buy it. (Dovetails with make-your-own cards + two-cost cook-vs-shop.)
   - As you touch each dish: resolve required components + goesWith to REAL house recipes (link-or-drop), and confirm the shop-bought PRICE_DB key exists — flag any missing key for Tina/Opus.
   - Known: green salad → **Garden Green Salad (Braai)**. Broa de Milho → **verify it exists in Bakes; link if yes, drop the pill if no** (report back).
3. **Leftovers — per-dish, to the new standard:**
   - Research **each dish individually** (per-dish web research enforced).
   - ⚠️ **ANTI-CONTAMINATION GATE:** verify it's the RIGHT dish — Portuguese migas ≠ Mexican/Tex-Mex migas. Drop any idea belonging to a same-name foreign dish (no tortilla/burrito ideas on PT migas).
   - Authentic regional continuity; keep the theme (sibling-dish pairings where natural).
   - Already-frugal dishes (migas, sopa de cação, açorda) → reheat/refresh/crisp, not "turn into something else".
   - **Effort mix, easy-first:** 1–2 easy (reheat right / 5-min pantry transform) then 1 creative capstone (authentic where it fits).
   - **Ingredient reality:** easy ideas = staples already home (eggs, bread, onion, potato, rice/pasta, everyday veg, stock, lemon) — no rare items. Creative may call a modest shop/online extra — accessible, not exotic.
   - **Quantity 2–4, quality-gated: 2 strong beat 4 padded.** Never pad. One honest intro line; no "how much do you have" tails.
   - Use Opus's 9 Alentejo sets as the shape/length target.
4. **WK-WIDE leftovers-mapping scan:** the generic-pool mis-mapping (rice→bread ideas, veg→fish ideas, favas→slaw-roll) is almost certainly not Portugal-only. Scan the whole leftovers engine mapping; apply the **Tier-1 honest fallback** everywhere as the floor (category-correct only; kill/dish-match the rotating factoid).

## SPECIFIC RULINGS
- **Dedupe Polvo à Lagareiro** — it appears twice (keep the most comprehensive).
- **ginjinha** — KEEP only as a real make-your-own steeping recipe (sour cherries/ginja + aguardente/vodka + sugar + cinnamon, weeks steeping); if you can't author it method-complete, RESERVE for Opus — do not exclude.
- **queijo assado** — DROP from the batch (1-step by nature; not a hero) unless elevated with a named cheese + real method.
- **Region field** = controlled country-level vocab ("Portugal"); Alentejo/Porto/town detail goes in the story, never the region field.

## STABILITY (locked)
- `node --check` before every push. Match Braai v33 exactly (header, collapsibles, colours, nav, box styling). Shared core.js renderers via var(--token) only.
- Push via GitHub Desktop; LF→CRLF warning harmless. Start at tinza.netlify.app — confirm what works before editing.
- Atomic commits, clean history, canary-verify (twists merge, moats intact, reserves still thin).

## WHEN DONE
Portugal green on 11 axes for the tail → hand back to Opus for the 10-hero pass. Spain §6.5 stays HOLD.
