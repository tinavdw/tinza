# MF140 · THE addStep DELTA CONTRACT — FYI, NO ACTION REQUIRED

**Date:** 22 Jul 2026 · **From:** Fable session (Spain batch 3) · **Status:** DATA ALREADY FIXED — this file is awareness, not a work order.

---

## What happened

Six version deltas in `sections/wk_europe.js` carried `addStep:[{"item":"…"}]`.
The renderer contract (`core.js:4045-4060`) is:

| delta key | takes |
|---|---|
| `removeIng` | `{item:"…"}` (or bare string) |
| `addIng` | `{item:"…", after?:"…"}` |
| `swapIng` | `{from,to}` |
| `swapStep` | `{from,to}` |
| **`addStep`** | **`{text:"…"}`** (or bare string) |

With `{item}`, `a.text` is null → the renderer appends the **object itself** →
the method ends in `[object Object]`. Silent — `node --check` clean, doctor clean,
census unmoved. Only a human opening one of these six version chips on live would see it.

## The six fixed (all Fable-authored, 22 Jul)

1. Patatas Bravas · a la Catalana
2. Pan con Tomate · Con Jamón
3. Boquerones en Vinagre · El Matrimonio
4. Gazpacho · Con Guarnición
5. Calamares a la Romana · Bocadillo de Calamares
6. Pisto · Con Huevo (caught at authoring, same sitting)

All six now use `{"text":"…"}`. Fixed in the same wk_europe.js handback as the
Spain batch (Pulpo · Merluza · Pisto · Arroz Negro · Fideuà).

## For Code — two thoughts, zero obligations

- **No PRICE_DB gaps this session.** Pulpo (octopus→calamari rings alias), Merluza
  (clams→mussels alias), Pisto, Arroz Negro (squid ink R4375 — Tina's entry, used 2–4g),
  Fideuà (spaghetti broken short, declared stand-in) — all priced at HEAD. First
  gap-free Fable batch.
- **If a cheap mechanical watcher ever wants a home:** a walk over every `versions[].delta`
  asserting keys ∈ {removeIng, addIng, swapIng, swapStep} with the right inner shape
  (`item` vs `text` vs `from/to`) would have caught all six on day one. Same species as
  Census Check 24 — a silent hole needs a watcher, not sharper eyes. Fable's call is that
  this earns a census rung; Code's call whether/when to build it.

## Standing lesson (also in FABLE_PROGRESS.md)

`addIng`/`removeIng` take `{item}` · `addStep` takes `{text}` · `swap*` take `{from,to}`.
Never assume symmetry — read the contract comment at `core.js:4045` before writing a delta shape you haven't used before.
