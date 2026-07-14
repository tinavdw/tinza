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
