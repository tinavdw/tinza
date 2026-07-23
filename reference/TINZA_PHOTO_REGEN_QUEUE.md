# TINZA — PHOTO REGEN QUEUE

> Cards whose master name changed (PART G enticing names, 6 Jul 2026). Each needs a new
> photo generated and saved into **`Images/Image/`** with the **exact new name** as the
> filename (that is the photo-match key `recipePhoto()` uses — accents stripped).
> None of these had a photo yet (all were showing the emoji fallback), so nothing is
> orphaned — this is a fresh-generate list. Delete a row once its photo is in the folder.

| Card id | Old name | New name | New photo file (in `Images/Image/`) |
|---|---|---|---|
| `bk-chocolate-cake` | Chocolate Cake | **Ultimate Chocolate Cake** | `Ultimate Chocolate Cake.jpg` |
| `bk-carrot-cake` | Carrot Cake | **Golden Carrot Cake** | `Golden Carrot Cake.jpg` |
| `bk-vanilla-cake` | Vanilla Butter Cake | **Golden Vanilla Butter Cake** | `Golden Vanilla Butter Cake.jpg` |
| `bk-classic-cheesecake` | Classic Cheesecake | **Dreamy Classic Cheesecake** | `Dreamy Classic Cheesecake.jpg` |
| `bk-red-velvet` | Red Velvet | **Velvety Red Velvet Cake** | `Velvety Red Velvet Cake.jpg` |
| `bk-shortbread` | Shortbread | **Buttery Shortbread** | `Buttery Shortbread.jpg` |
| `bk-choc-chip` | Chocolate Chip Cookies | **Chewy Chocolate Chip Cookies** | `Chewy Chocolate Chip Cookies.jpg` |
| `bk-oat-cookies` | Oat Cookies | **Golden Oat Cookies** | `Golden Oat Cookies.jpg` |
| `bk-peanut-butter` | Peanut Butter Cookies | **Soft Peanut Butter Cookies** | `Soft Peanut Butter Cookies.jpg` |
| `bk-ginger-biscuits` | Ginger Biscuits | **Crunchy Ginger Biscuits** | `Crunchy Ginger Biscuits.jpg` |
| `bk-beer-bread` | Beer Bread | **Easy Beer Bread** | `Easy Beer Bread.jpg` |

**Applied in code (this session):** `meals.js` — each card's `name` **and** `photoName` set to the new name (photo key follows the name). `core.js` — `GOESWITH_LINKS` old-name→id aliases added so every existing `goesWith` reference still resolves to the renamed card.

---

## 🇪🇸🇵🇹 SPAIN + PORTUGAL — FABLE ELEVATION (logged 23 Jul 2026 · NOT URGENT)

**What happened:** Fable's WOW pass replaced/renamed a large batch of **Spanish** recipes and a
few **Portuguese** ones in `sections/wk_europe.js`. Photo Studio matches a photo to a card by NAME
(accents stripped), so every renamed dish now falls back to the emoji tile until its photo is
reconnected or regenerated — exactly the bakes situation above.

**The job (when Tina wants it):** produce the same old-name → new-name → photo-file table for
Spain/Portugal, then either reconnect (alias old→new so the existing photo still matches) or
fresh-generate where no photo existed.

**How Claude builds the list (no guessing):**
1. `node Tools/photo-audit.js --missing` → the authoritative list of cards now showing no photo.
2. Cross-reference the new names against `reference/FABLE_PROGRESS.md` (Spain closed 23 Jul, ~51
   versioned records) to separate *renamed-but-had-a-photo* (→ reconnect map) from *brand-new*
   (→ fresh generate).
3. Hand back the table + any `GOESWITH_LINKS` old-name→id aliases so pairings still resolve.

**Status:** logged, not started. Other countries Tina is photographing herself — this is only the
Fable-touched Spain/Portugal set. Say the word and Claude generates the exact table.
