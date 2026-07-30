# THE COUNT YOU ASKED FOR — 30 Jul 2026

You asked how many times you've said you already gave a price, I went looking, and it turned out you
had. Here is the tally, with what I found in each case. No softening.

## In this conversation you said it about EIGHT keys

| # | key | you said | what I found when I actually looked |
|---|---|---|---|
| 1 | `sake` | "3rd time I give sake" | **Not in any file** — but I found the mechanism. It sat on MF152 under **"CHECK, DO NOT ADD — believed already in `prices.js`"** and was never there. Parked since batch 3, 10 cards. **You were right that it was given; the system threw it away.** |
| 2 | `sheet nori` | same batch | Not in any file. Listed on MF152 with no figure. |
| 3 | `katsuobushi` | same batch | Not in any file. Listed with a note, no figure. |
| 4 | `aonori` | "I did these yesterday???" | Not found. Both `ASIA_PROGRESS.md` and `JAPAN_B10_RESUME.md` list it as still-needed, written that night. |
| 5 | `okonomiyaki sauce` | same | Not found, same two files. |
| 6 | `agar agar powder` | "I KNOW i gave it" | Not found — and conversation search only reaches 29 Jul, so if it was a few hours ago it is **outside what I can read.** A limit on my side, not a claim about yours. |
| 7 | **`beansprouts`** | "Ive given weeks ago" | ✅ **YOU HAD.** `"bean sprouts": 270` — your Woolies/PnP figure, July, 100g punnet ~R27 — has been in `prices.js` the whole time. The card wrote `beansprouts` closed up so the lookup never met it. **My list was wrong, not your memory.** |
| 8 | **`wheat bran`** | "i did weeks ago" | ✅ **YOU HAD.** 29 July, in writing: *"Tina-sourced, NOT yet keyed (A7 defers MISSING prices): wheat bran R20–R40 per 500g at Checkers / Pick n Pay → R40–R80/kg, take R80 under §31.1."* **Recorded, then deliberately left out of `prices.js`, then reported to you as missing.** |
| 9 | `dried wakame` | "Ive given 3 times" | Not in `prices.js` under any spelling, not in any searchable chat. Same shape as sake — I believe it was given and lost; I cannot produce the evidence. |

**Score: you claimed 8, I can prove you right on 2 outright, plus a third (`sake`) where I proved the
mechanism that ate it.** Of the remaining 5, three plausibly live in today's chats or your local
MF152 — files I cannot read. **I am not going to score those against you.**

---

## 🔴 THE CAUSE IS A RULE, NOT YOUR MEMORY. IT IS A7.

**A7 says: defer prices to one batch after all five countries.** What that meant in practice, every
single time you sourced something:

1. You give the price.
2. It gets written into `ASIA_PROGRESS.md` or `MF152` **as prose**, marked "not yet keyed, A7 defers".
3. `prices.js` never changes.
4. `pricecheck.js` reads `prices.js` and reports the key **ABSENT**.
5. I read the tool, tell you it is missing, and ask you for it again.

There is even a ruling — **§31.2, "prose may name a route, an absence still does not become a
number"** — that formalised leaving your figure in a markdown file. It was written to stop *guessing*.
Its side effect was to guarantee that everything you sourced would be asked for twice.

**Two lists made this worse:** the "believed already in prices.js" block (which ate `sake` and
`sesame paste`) and the plain-prose "Tina-sourced, not yet keyed" notes (which ate `wheat bran`).
A key on either list is invisible to the tool and finished as far as any human reading the file is
concerned. That is worse than missing — a missing key announces itself, a parked one never does.

## ✅ WHAT IS ALREADY DIFFERENT AS OF TODAY

- **Every price you gave today went straight into `prices.js` in the same message** — 15 keys:
  daikon, wasabi, tapioca starch, bamboo shoots, red bean paste, gyoza wrappers, sake, katsuobushi,
  sheet nori, dried kombu, aonori, okonomiyaki sauce, matcha, kinako, sesame paste, agar,
  tonkatsu sauce, shichimi, konjac, shirataki, dried azuki, wheat bran. **Absent went 40 → 8.**
- **🟣 PARKED BUT ABSENT** rung added to `pricecheck.js`: it reads the "believed already present"
  block and asks the real `PRICE_DB`. It caught `sake` and `sesame paste` and both are now keyed.
  The list is empty on both countries.
- **The "sourced" classifier was itself wrong** and credited a key with a price belonging to a
  different key on the same row. Fixed. That is why the bucket went 7 → 3 → 0.

## ⚖️ WHAT I THINK SHOULD CHANGE, AND IT IS YOUR CALL

**Strike the price half of A7.** A7's purpose was to save deploy credits by batching, but a price key
is one line in a file that is already in every push — batching them saves nothing and costs you the
same work twice. **A price you give gets keyed in the same session, always.** Deferral stays for
things that genuinely need a decision (a new product category, a not-in-SA ruling), never for a
number you have already found.

If you want that as a written ruling I will draft it as a §31 amendment and hand it back as a block.

---

## 🔴 AND ONE MORE THING I BROKE TODAY, FOUND WHILE APPLYING WHEAT BRAN

Keying `wheat bran` pushed Nukazuke to **R65 · R60 · R71** — because the 500g bed is a line in the
ingredient string and the engine costs every line. **§31.3a says a retained bed is OUT of costPP**,
and §31.3c set those three at **R9 · R10 · R15** by ruling.

**My blanket costPP recompute silently overrode that ruling** — first to R25/R20/R31 this afternoon,
then to R65/R60/R71 tonight. Restored to R9 · R10 · R15, and marked in the patch script as
**ruling-set, not engine-set**, to be excluded from any future sweep until the engine can mark a line
as retained. A recompute that quietly reverses a ruling is the same failure class as everything else
caught today, and it was mine.

## WHAT IS ACTUALLY LEFT — 8 keys, none blocking a card

`dried wakame` · `kamaboko fish cake` · `niboshi` · `sheets aburaage` — real gaps on cards that
already cost.
`nagaimo` · `shiso or perilla leaves` · `sprigs mitsuba` — already ruled probably-unavailable with
stand-ins named in-method; MF152 says mitsuba and shiso probably need no key at all.
`tonkatsu` in Katsudon — uncostable by §29.1, no bought product fills that slot.

**I will not ask you for any of these again.** They are on the list, they block nothing, and if a
Google overview lands in front of you it takes me thirty seconds. Otherwise they wait.
