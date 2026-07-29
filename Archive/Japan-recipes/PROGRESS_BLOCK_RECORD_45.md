> ⚠️ **THIS IS A BLOCK, NOT THE FILE.** `reference/ASIA_PROGRESS.md` at origin (`c47c408`)
> stops at **RECORD 42 — TEMAKI**. Records 43 (Nigirizushi) and 44 (Oshizushi) are banked in
> `sections/wk_japan.js` but their progress entries exist only in the local copy. Handing back a
> "complete" ASIA_PROGRESS.md rebuilt from HEAD would silently delete both. Paste this block
> **after the RECORD 44 — OSHIZUSHI entry** and delete this note.

### ✅ RECORD 45 — DAIGAKU IMO (`dessert`) · R9 · R28 · R27

**JAPAN 45 / 50.** `japan-daigaku-imo`. main 11 (frozen) · side 13 · starter 10 · **dessert 7** ·
staple 4 · 135 versions · 0 dead crossLinks · vegan-capable 34 · pricecheck wrong-product 0.

**THE CHOICE — TWO OF THE THREE B10 DESSERT OPTIONS WERE BLOCKED, AND NEITHER BLOCK WAS ON THE LIST.**

| option | verdict |
|---|---|
| **Purin** | ⛔ **egg-led, and egg is CLOSED at 3** (Chawanmushi · Tamagoyaki · Oyakodon) — the same block holding Sukiyaki. A custard is a fourth egg record however it is dressed. **Needs Tina's ruling to unblock, not a workaround.** |
| **Kakigori** | ⛔ **the technique lead cannot be executed.** The brief requires it to lead on ice texture and the shaving; a blender gives crushed ice, not shaved snow, and no SA home kitchen has an oshiki-style shaver. Authoring a record whose make-or-break law needs equipment nobody owns breaks beginner-proof. It also lands on **Anmitsu's** territory — cold, no-bake, syrup, anko, agar cubes, condensed milk. |
| **Daigaku Imo** | ✅ **clean on every open block.** No egg · no agar (Anmitsu) · no glutinous rice flour (still unkeyed — `glutinous rice flour` → `rice` R27) · no equipment · no ice. |

**LAWS THE RECORD LEADS ON — the low first fry, and it is not a fried-food law at all:**
skin **ON** (it is the structure through two fries and a hot syrup, not a rustic touch — peeled wedges
break down around eight minutes) · **rangiri** angled cut, quarter-turn between diagonal slices, which
is engineering not styling (more surface, faster, more for the syrup to grip) · 15-min cold soak with
one water change, because free cut-face starch gelatinises into a raft in the oil and burns before the
middle cooks · **140°C for 8–10 minutes, and expect to be bored** — this is the whole recipe · second
fry at 180°C for 60–90 s **for the surface only**, because a damp surface dilutes the syrup where they
touch and turns glass into sticky · syrup: stir once until wet, **then never again** (a spoon carries
side-wall crystals back into the middle and seeds the lot grainy in two seconds) · off the heat at
**the snap**, cold-water tested, ~150°C hard crack · coat in 30 seconds · **separate so no two pieces
touch**, sesame while wet · 2–3 min set · **do not cover it warm** — trapped steam dissolves the shell
back into syrup, which is how nearly every homemade plate ends up sticky.

**MOAT — the crop and the enzyme, and it is fused to the method rather than decorating it.**
Sweet potato reached Japan via the Philippines, China and the Ryukyus in the early 1600s and spent
three centuries as famine insurance rather than a treat — it grows in poor sandy volcanic soil where
rice will not, survives storms that flatten a paddy, and keeps in the ground. After the Kyoho famine
of the 1730s **Aoki Kon'yo** pressed the shogunate to spread cultivation across Kanto, and is still
remembered by a nickname meaning roughly Professor Sweet Potato with a memorial stone in Tokyo. It did
the job again in 1945–46, leaves and vines included. Then the second half: Japanese varieties carry an
unusually busy **beta-amylase**, which converts cooked starch to maltose only in a narrow warm band —
so **the sweetness of a sweet potato is not fixed by its variety, part of it is created by how slowly
you heat it.** That is the reason for the **ishiyakiimo** stone-roasting carts still working Japanese
streets in winter, and the low first fry is the same trick compressed into ten minutes.

⛔ **NOT a name-origin moat.** The obvious "university potato" story — Tokyo students, Taisho era — was
**deliberately not used**, and Imo Kenpi's name derivation was cut from its version trivia for the same
reason. Name-origin moats stay **spent at four** (Hiyayakko · Miso Soup · Nasu Dengaku · Dorayaki) and
the Daigaku Imo one is still available if a later record needs a fifth.
⛔ Avoids Castella's honey/sugar-trade angle and Mitarashi Dango's glaze; the syrup here is a hard-crack
sucrose glass, not a starch-thickened tare.

**VERSIONS** (budget leads and is cheapest): **Oven-Roasted, No Deep Fry** 💰 vegan **R9** — the oven
does the *enzyme* half better than the fryer (30–40 min in the window vs 10) and gives up the shell
entirely; stated as an honest trade, a coating not a glass · **Daigaku Imo — the Two-Stage Fry** 🏆
default vegan **R28** (trivia = mizuame, the malt syrup that resists crystallising, and golden syrup as
the partial home route) · **Imo Kenpi — the Crisp Kochi Sticks** 🍠 vegan **R27** (5mm sticks, peeled,
**one** fry at 160°C until the bubbling goes quiet — that silence is the water gone — keeps 3–4 days,
which is why it travels as a packaged snack and daigaku imo does not).
crossLinks: Mitarashi Dango · Taiyaki · Anmitsu.

**GATES:** `node --check` clean ×2 · **merge 44 + 1 = 45, all checks pass [R9 · R28 · R27]** ·
**pricecheck wrong-product 0**, exact 127 → 128, absent **40 unchanged — no new price keys** ·
doctor 10 (floor, unchanged) · `git diff --stat` = 1 file, 2 insertions 1 deletion.

📌 **NO HAND-COSTED NUMBER IN THIS RECORD.** All three costPP came from
`wkCostState()` + `applyVersionDelta()` on the real record shape. Every one of the six base lines was
probed through `wkParseIngredients()` → `wkCleanName()` → `wkPriceLookup()` first, and **every line's
written unit was checked against the key's `per`** — six g/ml lines against six `weight` keys, so
**neither direction of the count-vs-weight bug is present**. Base coverage **1.00**, `missing []`.

**PRICE PROBE — all six lines, no landmines hit:**
`sweet potato` R30 weight ✅ exact · `sunflower oil` R48 weight ✅ (⛔ **not** `neutral oil`, which is
still ABSENT and unaliased) · `white sugar` R35 weight ✅ · `water` R0.02 ✅ · `Japanese soy sauce`
→ `soy sauce` R236 ✅ · `black sesame seeds` → `sesame seeds` R244 🟠 **REVIEW** (correct product,
correct band — the one REVIEW line this record adds, 99 → 100).

### 🩸 STILL OPEN — CARRIED, NOT WORSENED

1. **68 of 132 version costPP disagree with the app** (hand-costing, whole lane incl. China). This
   record adds **three that agree by construction**, so the ratio is now against 135.
2. **46 of 132 versions render no cost at all.** This record adds **three that render** — base
   coverage 1.00, nothing missing.
3. **Versions named vegan but not diet-tagged** (China's "Vegan (No Pork)", "Vegetarian",
   "Vegan, with Mushroom"). All three versions here carry `diet:["vegan"]` explicitly; §26 union
   measured clean, record `diet:["vegan"]`.
4. **9 versions carry `diet` as a STRING not an array.** None here.
5. **The 🟠 REVIEW ledger ruling** — 100 lines now, prints and never blocks, still unruled.
6. **Count-vs-weight direction B needs the mechanical rung** + a sweep of all `wk_*.js`, including the
   live `30g avocado` in `boerekos-gemsbok-stuffed-fillet`.
7. **`glutinous rice flour` → `rice` R27** still blocks every mochi dessert.
8. **Instant hon dashi granules** — route ruled at §29, SA shelf price still not sourced. Do not guess.

### ▶️ JAPAN B11 (45 → 50) — FIVE TO CLOSE THE COUNTRY

**Sashimi** (deferred from B10; overlaps Nigiri's knife-and-fish laws, so it must lead on something
else — the fish *buying* and the ice, not the cut) · **+3 savoury** · **+1 dessert or staple**.
⛔ Course counts at 45: main **11 and frozen** · side 13 · starter 10 · dessert 7 · staple 4.
⛔ **Purin and Kakigori are both still blocked** — Purin needs the egg cap lifted, Kakigori needs a
different lead than the shaving. Neither is a "just write it" record.
⛔ Wiring stays at **50/50 only** — 2 lines, `index.html` + `worldkitchen.js:58`, pushed with the file.

⚖️ **BEFORE QUOTING ANY COUNT FROM THIS FILE:** read it at HEAD, or clone and count the records with
node. This entry says 45 because `WK_JAPAN.length === 45` was measured, not remembered.
