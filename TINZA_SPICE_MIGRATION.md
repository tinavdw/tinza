# TINZA — MIGRATE SPICE onto shared warmCard (for Claude Code)

**Goal:** make the Spice section's browse list look and open like World Kitchen —
photo cards via the shared `warmCard` — WITHOUT breaking Spice's shelves, groups,
cart, or BATCH/SERVES scaler. **Scope: `spice.js` only.** (`warmCard` is already in
core.js and already supports `photoName`, so core.js should NOT need changes.)

## Why
Spice renders its own bespoke rows (`spiceRoomHTML` → `spiceGroupsFor` → `spiceGroup`,
spice.js ~4017+) and calls `warmCard` **zero times**, so it shows no photo cards and
opens differently from World Kitchen. The opener is already half-wired:
`openSpiceRecipe(id)` → `openRecipe('spice', id)` works (cross-links reach tahini).
Only the **browse/list rendering** needs migrating.

## Reference (the gold standard to copy)
`wkRecipeCard(r)` in worldkitchen.js (~line 130) returns:
```
warmCard({ name:disp, photoName:r.name, emoji, sub:r.country,
           meta:r.howThisFeels, costPP, openJs:open,
           toggleJs:"wkPlanToggle('"+r.id+"',4)", sel:checked })
```

---

## THE CODE PROMPT (paste this)
```
Before any code: curl/read TINZA_STANDARD.md and TINZA_HANDOFF.md from the repo root
(or read the local copies). The Standard takes precedence.

STABILITY: this session's purpose is the Spice migration and NOTHING else. Touch only
spice.js. Do not edit any other section. node --check before every push. ONE file.
DO NOT push — show me the diff; I push via GitHub Desktop and verify live.

TASK: Reroute the Spice browse list to render each SPICE_DB entry through the shared
warmCard, mirroring wkRecipeCard (worldkitchen.js ~line 130), so Spice shows photo
cards and opens identically to World Kitchen — while preserving Spice's existing
shelf/group structure, cart, and BATCH/SERVES scaler.

STEP 1 — Inspect first, don't guess:
  - Read wkRecipeCard (worldkitchen.js ~130) — the warmCard call shape to copy.
  - Read spiceRoomHTML / spiceGroupsFor / spiceGroup (spice.js ~4017+) to see exactly
    how rows are built today and, crucially, how a row currently (a) opens a recipe
    and (b) adds/removes from the Spice cart (spiceCart / spiceCartCount).
  - Read a few SPICE_DB entries for the real field names.

STEP 2 — Replace ONLY the per-entry row markup inside the group render with a warmCard
call. Keep the shelf tabs, group headers, "show more", search/filter, and the cart
bar exactly as they are. Map fields like this (adjust to real field names you find):
  - name:      e.name
  - photoName: e.name        (so the photo resolves the same way WK does)
  - emoji:     e.emoji || a sensible Spice default (e.g. '🧂')
  - sub:       the group/shelf label (Spice has no country) — pick what reads cleanly
  - meta:      e.howThisFeels || e.whenToUse
  - openJs:    "openSpiceRecipe('"+e.id+"')"
  - costPP:    OMIT — Spice has no per-person food cost; leave it blank, do not invent one
  - toggleJs / sel: WIRE TO SPICE'S EXISTING CART, not wkPlanToggle. Use whatever
    add/remove-to-list call the current spice row uses, and set sel to whether the
    item is currently in spiceCart. Do not introduce wkPlanToggle here.

STEP 3 — Spice DETAIL page photo (secondary): check how RECIPE_BUILDERS.spice / the
spice detail render draws its header. If it doesn't pass a photo, mirror WK's detail
(worldkitchen.js ~662: photoName: r.name, photoEmoji: '🍽️') so the opened recipe shows
a photo header too. Only if it's missing — don't duplicate an existing one.

VERIFY (do not push):
  - node --check spice.js.
  - Confirm warmCard is now called for Spice entries (grep warmCard( in spice.js > 0).
  - Confirm the cart still toggles (the add/remove call is preserved, not replaced by
    wkPlanToggle) and the BATCH/SERVES scaler and shelves still render.
  - Tell me: what you mapped sub/toggle to, and whether the detail page already had a
    photo or you added one. Show the diff.
```

---

## Notes for Tina
- After this, Spice will show the **photo-card layout** and open like World Kitchen —
  but each card shows the emoji "coming soon" until you generate Spice photos (layout
  first, photos follow, same as Africa).
- This is the first of your three pending "sameness" migrations. **Cakes** and
  **Feed-My-Family** are the same job and can each get their own session afterwards.
- Spice's cart and scaler are different from WK's plan model — that's why the task tells
  Code to keep them, not replace them with WK's plan toggle.
