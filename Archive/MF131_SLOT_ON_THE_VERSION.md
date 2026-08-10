# MF131 — `slot` lives on the version; a record's slot is its default's

**Status:** ✅ CODE LANDED 21 Jul (`4d284c5`) · awaiting Tina's proof on live ⚖️ Law 2
**Raised:** 21 Jul 2026 · **RULED 21 Jul 2026** — see `TINZA_RULINGS.md`, *"`slot` LIVES ON THE VERSION"*
**Closes:** census 18 assertion ③ — `unresolved` 2 → 0, honestly
**Contract:** this is a **contract change**. `slot` becomes a reserved field at the **version** level as well as the recipe level.

---

## 1. The bug

`bk-vetkoek` and `bk-amagwinya` are the only two records in the app with no slot.
They render normally in Bakes and are structurally barred from every mood shelf.

They are unslotted because **the slot is filling-dependent** — vetkoek is a `TREAT`
with jam and syrup and a `SUPPER` with curried mince. That was never a data gap. It
is the **wrong shape**: one record carrying two courses.

**No exempt list.** Ruled 21 Jul. Exempting would hide a real bug behind a written
excuse — the escape hatch census 18 warns about in its own comments. `unresolved`
stays visible at 2 until the shape is fixed.

## 2. What is already there

⚠️ **Both records already carry the split as `versions[]`.** This job does not create
it — it labels it.

| record | `sections/meals.js` | versions (default first) |
|---|---|---|
| `bk-vetkoek` | 13843 | **Sweet (Jam & Syrup)** · Curried Mince (Maalvleis) · Cheese |
| `bk-amagwinya` | 13845 | **Classic** · Atchar & Polony · Sugar-Dusted |

Each version already has its own `ingredients`, `method`, `time`, `costPP` and
`nutrition`. Also referenced: `sections/makeable.js:132` · `sections/moodTags.js:49`.

## 3. STOP-CONDITION

Read `TINZA_RULINGS.md` → *"`slot` LIVES ON THE VERSION"*. **If that section is
absent, STOP — the contract must be written before the code, and it was ruled that
way.** *(Written 21 Jul; if it is missing, something reverted it.)*

Then check `bk-vetkoek`'s default version for a `slot` key. **If it is there and
census reports `unresolved 0`, SAY SO AND STOP.**

## 4. RED LINES

- ⛔ **Additive only.** A record whose versions carry no slot must behave **exactly**
  as today. Recipe-level `slot` still wins where authored; derivation still runs
  where it is not.
- ⛔ **Do not split either record into two.** Withdrawn 21 Jul — it duplicates the
  dough method four ways and puts two records under one name.
- ⛔ **Do not flip any shelf or rung to "does ANY version qualify."** Open question,
  not yet ruled — see §6. Report, do not act.
- ⛔ No exempt list, and no blanket slot on either record to make a number go green.
- ⛔ Do not touch the other 99 bakes records, `adaptBakes`, or the `slot()` ladder at
  `index.js:129`.
- ⛔ **Never test `.versions` as a boolean — test `.length`.** `versions: []` is
  truthy and `null` was not; this already nearly shipped a dedup bug (census 12
  fails the build on it). ⚖️ ruled 15 Jul.

## 5. THE EXACT CHANGE

**5a — the contract.** `sections/TINZA_CONTRACT_SLOTS.md` records the reserved shape.
`versions[]` is listed there as standardised. Add `slot` as an optional version-level
field, and point at the 21 Jul ruling. *(The `origin` → `source` precedent: the
contract file and the ruling were made to agree the same day, deliberately.)*

**5b — the resolver.** In `sections/index.js`, the record's slot must resolve from
its default version when its versions carry one. Slot into the existing ladder at
`index.js:135` — **above** the section default, and ordered against `fromRecord`
per the ruling's clause 3 (a recipe-level authored slot still wins).

The default version is the one with `default:true`; both records have exactly one.
Guard for none — fall through, do not pick `[0]` silently.

**5c — the data.** Four version-level slots, and nothing else:

| record | version | slot |
|---|---|---|
| `bk-vetkoek` | Sweet (Jam & Syrup) *(default)* | `TREAT` |
| `bk-vetkoek` | Curried Mince (Maalvleis) | `SUPPER` |
| `bk-amagwinya` | Classic *(default)* | `TREAT` |
| `bk-amagwinya` | Atchar & Polony | `SUPPER` |

*(`Cheese` and `Sugar-Dusted` may be left unslotted — they inherit nothing and change
nothing. Slot them only if a ruling says so.)*

## 6. REPORT, DO NOT ACT — every consumer of `r.slot`

Measured 21 Jul. Under this ruling all of these read **the default version's** slot.

**Mood shelves — `sections/core.js`** *(the ones that may want "any version")*
- `2201 sweet` → `slot === 'TREAT'` — vetkoek **passes** on its default. Correct.
- `2207 lazy` · `2208 impress` → `SUPPER` — **Maalvleis vetkoek can never surface.**
- `2202 exhausted` · `2204 quick` · `2206 pickmeup` → `_MOOD_MEALSLOT` membership.
- `2239 / 2242` → `MOOD_EAT_SLOTS` gate (`2174`).

**Census** — `285` canonical-slot leak · `830` not-food on a mood pool ·
`1044` unresolved-leaked-to-shelf · `1146/1151` rung 20 shelf distribution ·
`981–1027` rung 18 itself.

**The recommendation, for a ruling — not a change:** mood shelves probably want *any
version*, and every census rung probably wants *the default* (they measure the record
as filed, and "any" would make a record count in two distributions at once).

🩸 **But "any version" is not a query change on its own — it is a query change PLUS a
"which version opens" change.** Match a supper shelf on Maalvleis, then open the
record on Sweet-with-jam, and she has been lied to. ⚖️ Law 2.

## 7. THE PROOF

1. `node --check` on every touched file.
2. `node tinza-census.js` — rung 18 ③ reads `✔ Every record resolves a slot`,
   `slot source` shows `unresolved 0`.
   🩸 **CORRECTED 21 Jul, ON THE BUILD — this step predicted "census stays 17" and it
   was WRONG. Census goes 17 → 16.** Rung 18 ③ is only a `▲`, but **rung 11 was watching
   the same two records as a hard RED** (`2 recipes are UNKNOWN — the ratchet slipped`)
   and that one legitimately clears; rung 11 now reads `2083 slot present · 0 unknown`.
   *Two rungs watched one fault at two severities, and the brief only counted one.*
   ➡️ **The lesson is the method, not the number: the count was diffed LINE BY LINE
   against HEAD before it was trusted, which is the only reason we know 17 → 16 is a
   real fix and not another lost anchor.** ⚖️ Law 54c corollary — a count alone is never
   proof. **Doctor stays 9. Any OTHER moving number is still a bug — report, do not absorb.**
3. Assertion ① stays green — vetkoek must not disagree with itself across doors.
4. **Prove clause 3 (additive):** confirm `record` / `derived` move by **exactly**
   the two records slotted, and no third. Then temporarily strip the four version
   slots and confirm census returns to `unresolved 2` — proving the new path is what
   resolved them and nothing else quietly did. **Revert the probe.**
5. **Tina, on her own device, after a hard reload** ⚖️ Law 27 · Law 2:
   - Open Vetkoek in Bakes. All three fillings still reachable; **Sweet still opens first.**
   - Vetkoek now reaches a mood shelf, and reads as a **treat**, not stacked among mains.
   - Saved plans and servings survive. ⚖️ Law 20.
