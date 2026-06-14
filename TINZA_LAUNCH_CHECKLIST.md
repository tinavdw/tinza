# TINZA — Master Launch Checklist
_14 Jun 2026 · the one list. Tick as you go. Order is most-urgent-first but NOT set in stone — pull whatever fits the session._
_Replaces the scattered backlogs; the handoff just points here._

---

## ✅ Done recently (you're already moving)
- [x] Events recipe pages migrated onto the universal opener (gold cost box + timers live)
- [x] Events buffet landing restored to standalone (land on buffet, no scroll-up)
- [x] Guest-slider labels lined up · "hotel pan" → "deep serving pan (53 × 33 cm)"
- [x] Finish-sameness sequence locked (Standard v1.9 §10)
- [x] Full uniformity audit across all 14 sections

---

## ▶️ NEXT SESSION — finish Events first (Tina's call, 14 Jun), then Spice
Pulling these forward out of order (numbers stay put): **#3 Cakes→opener · #5 shared plan-row renderer (roll to Braai/World/Events) · #9 Events My Plan overlay · #35 cull dead Events code** → then **#1 Spice** → then compare all ready pages. (Shared builds #5/#9 roll to ALL sections, not Events-only.)

---

## A · FINISH SAMENESS — the #1 goal, do this block first

1. [ ] **Migrate Spice onto the recipe opener** ← NEXT (also wire Spice cost to `PRICE_DB`)
2. [ ] Cross-links: salad→dressing · pie→Béchamel · pesto→Spice · filled roosterkoek→base
3. [ ] Migrate Celebration Cakes onto the opener (off `openCakeRecipe`)
4. [ ] Migrate Feed My Family / Anchor / 4-Ingredients onto the opener
5. [ ] Build the ONE shared **plan-row renderer** (§4c) → roll to Braai/World/Events/Health/Kiddies
6. [ ] Build the shared **two-total shopping block** → roll to all (green now, gold when packs ready)
7. [ ] Braai shopping-list costs (price each line, aisle-grouped, total + 10% buffer)
8. [ ] Roll `sectionHeader()` to every remaining section (Health, Events, Kiddies, Spice, Feed My Family, Budget, Mood, Tiny Tummies, Furry) — *biggest look-debt*
9. [ ] My Plan white overlay (§4.1) on every section (replace grid tiles / hand-rolled buttons)
10. [ ] All photo headers 200px (World recipe 190 · Health mixed)
11. [ ] Kill gliding scales → wrapped boxes (Health · Feed My Family · Kiddies)
12. [ ] One universal search above the bottom nav (remove per-screen search boxes)
13. [ ] Global sans-font flip (`index.html`)

## B · COSTING & DATA READINESS

14. [ ] `packs.js` Checkers price-verify → flips the gold "buy" total on everywhere
15. [ ] Braai per-person cost function (so the ≈R pp row hook shows)
16. [ ] Replace the 542 KB base64 fire blob with a repo image (`braai.jpg`)

## C · FILL THE CONTENT (recipes & shelves)

17. [ ] Spice — populate Emporium shelves (Chutneys & Atchars · Sambals & Relishes · Jams & Preserves)
18. [ ] World Kitchen — add North America + Oceania recipes
19. [ ] World Kitchen — India gaps (Butter Chicken, lamb/goat) + Asia spice/masala exact pass
20. [ ] Feed My Family — fill with real recipes
21. [ ] Global Braai — add recipes
22. [ ] Beverages & Cocktails — build the section (+ cocktails block)
23. [ ] Anchor Ingredient — finish (500g mince → builds a meal)
24. [ ] 4 Ingredients — finish
25. [ ] Budget (R40–150) — finish: role-slot library + two-price costing (solo session)
26. [ ] Tiny Tummies — wire to shared renderers + cost
27. [ ] Furry Friends — build out from the v33 template
28. [ ] Surprise Me — build
29. [ ] Master recipe library (so Goes-Well-With always links to a real in-app recipe)
30. [ ] General / Global Search — build (solo session, after sections + recipes)

## D · QUALITY & CLEANUP

31. [ ] WK named-cut corrections (Gango, Braaivleis) — pending push
32. [ ] Kiddies TODOs (icing sweep · cooldrink 400ml/kid + ± · Treasure Chest · Malva photo · method audit)
33. [ ] Remaining recipe corrections (#3, #4, #7, #8 from Corrections_1)
34. [ ] `howThisFeels` soul-pass — every recipe, written LAST
35. [ ] Cull dead Events code (orange box path · `bigcooking` wrapper block)

## E · THE SHELL — needed to launch

36. [ ] Onboarding / opening pages (progressive disclosure — "define your eating experience?")
37. [ ] Free / Pro tiers + payments + subscription gating
38. [ ] Profile page (toggles: leftovers · meal-stretch · budget tiers · nutrition · storage · dark/light · units)
39. [ ] Weekly Meal Planner
40. [ ] My Kitchen (save + import + recipe-link extractor)
41. [ ] My Menu (cross-section combined plan + shopping list)
42. [ ] Universal feature sweep (step timers · cooking mode · recently-viewed · nutrition bar · Goes-Well-With · offline mode)
43. [ ] Community (build + how it works)
44. [ ] Phase-2 extras: star ratings · Checkers 60/60 + wine-pairing partnerships

---

_Blocks A→E are roughly urgency order. A (sameness) is the gate to everything; E (shell) is last before launch. Move items around freely — the only hard rule is the §10 sequence inside block A._
