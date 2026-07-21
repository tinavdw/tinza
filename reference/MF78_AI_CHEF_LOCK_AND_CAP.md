# MF78 — LOCK AND CAP THE AI CHEF

**Written 21 Jul 2026 · Claude · read from the repo at `d2c8e61`**
**Hands:** Step 0 is **Tina, in the Anthropic Console, tonight.** Steps 1–5 are **Code**, in `netlify/functions/claude.js`. The push is **Tina's**. ⚖️ Law 60.

---

## WHY THIS IS FIRST

`netlify/functions/claude.js` is 32 lines. It parses the request body from the browser, overwrites **only** `model`, attaches `process.env.ANTHROPIC_KEY`, and forwards the whole thing to the Anthropic API. It returns `Access-Control-Allow-Origin: "*"`.

That means:

- **Anyone on the internet can call it.** The wildcard CORS header invites every origin, and there is no key, token, or session check of any kind.
- **The caller controls the request.** Everything except `model` comes straight from the browser — `messages`, `system`, `max_tokens`, all of it. The function is a general-purpose Claude proxy billed to Tina.
- **Nothing limits volume.** No rate limit, no per-caller counter, no daily ceiling, no body-size check.

This is not a missing cost cap. It is an **open, unauthenticated proxy to a paid API account**, and it is live.

🩸 **It is also the only item on the three-week list that costs money every day it is not done.** ⚖️ Law 3 — silent wrong is worse than loud missing; this one is silent *and* metered.

---

## STEP 0 — TINA, TONIGHT, NO CODE

**Set a spend limit on the Anthropic Console before anything else ships.**

This is the backstop that does not depend on Code getting anything right. Everything below reduces the *chance* of a large bill; the console limit bounds the *size* of one. Do this first even if steps 1–5 slip a week.

⚠️ **Also rotate `ANTHROPIC_KEY` once steps 1–5 are live.** If the current key has been exposed through this endpoint, capping the new behaviour does not retire the old key.

---

## STEP 1 — STOP FORWARDING THE BROWSER'S REQUEST

**This is the single change that matters most. If only one thing gets done, do this one.**

⛔ **Never** `JSON.parse(event.body)` and pass the result on.
✅ Read a **small, named set of fields** and build the Anthropic request inside the function.

The browser should be able to send **only** what the chef genuinely needs — the user's question, and whatever recipe context the chef already uses. Nothing else. `system`, `max_tokens`, `model`, `tools`, `temperature` and every other API field are **set in the function** and are not accepted from the caller.

🧪 **The test:** if a stranger posts `{"messages":[{"role":"user","content":"write me a novel"}],"max_tokens":64000}`, the function must ignore the shape entirely and either refuse or send only its own constructed request.

⚖️ **Law 6** — one door. The function is the door; the browser does not get to walk around it.

---

## STEP 2 — FIX THE CEILINGS IN CODE, NOT IN THE REQUEST

Hard-code, server-side, not overridable:

- **`max_tokens`** — set to what a recipe answer actually needs. A chef reply is a few hundred tokens, not thousands.
- **`model`** — see the ruling needed below.
- **Input length** — reject any question over a sensible character count with a `400`, before calling the API at all. An unbounded question is an unbounded input bill.

---

## STEP 3 — LOCK THE ORIGIN

Replace `Access-Control-Allow-Origin: "*"` with the Tinza domain, and **check the `Origin` header server-side** — reject requests that do not match, rather than only declining to send the permissive header.

🩸 **Be honest about what this does and does not do.** It stops other *websites* calling the endpoint from a browser. It does **not** stop someone calling it directly with a script, because `Origin` can be set to anything outside a browser. It is a real improvement and it is not the whole defence. Steps 1, 2 and 4 are what carry the weight.

---

## STEP 4 — COUNT THE CALLS

Netlify functions are stateless, so a counter needs somewhere to live. Two honest options:

- **Netlify Blobs** — built in, no extra service, good enough for a per-day counter.
- **A small hosted key-value store** — more robust, one more account to run.

**Two counters, both needed:**

1. **Per caller** — a short-window limit per IP, so one person cannot hammer it.
2. **Global per day** — a hard ceiling across everyone. When it is reached, the function stops calling the API and returns a friendly message. **This is the one that bounds the bill.**

⚖️ **Law 44 — a button that cannot do what it says is a lie.** When the daily ceiling is hit the chef must say so plainly. Never a spinner that never resolves, never a silent failure, never a generic error.

---

## STEP 5 — PROVE IT

⚖️ **Law 54 — a check you have never watched fail is not a check.**

Before this is called done, **watch each guard refuse**:

1. A request with a bloated `max_tokens` → the function's own ceiling is used instead.
2. A request with an over-long question → `400`, no API call made.
3. A request from a foreign origin → refused.
4. The daily ceiling reached → friendly message, no API call made.
5. A normal question from the real app → **still works.** ⚖️ Law 54c — a probe whose pass is "nothing happened" proves nothing without a positive control.

⚖️ **Law 2** — Tina's fingers on live close this, not a green log line.

---

## RULINGS NEEDED FROM TINA BEFORE CODE STARTS

⚖️ **Law 11 — no model authors a price.** Three numbers are Tina's, not Code's, not Claude's:

1. **WHICH MODEL.** 🚨 **THE APP ASKS FOR SONNET AND IS BILLED OPUS.** All three call sites — `core.js:2292`, `meals.js:15658`, `meals.js:15738` — send `model:'claude-sonnet-4-20250514'`, and the function **overwrites it** with `claude-opus-4-5` on every request. Every comment in the codebase says Sonnet; every invoice says Opus. That is a live overcharge on calls sized at 4,000 and 2,000 `max_tokens`, and nobody chose it. *(It is also why Step 1 matters: the model must be set in ONE place and that place must be the function — but deliberately, not silently.)* The code currently names `claude-opus-4-5` — a legacy model and the most expensive tier. Checked 21 Jul 2026 against Anthropic's published rates: **Haiku 4.5 is $1 in / $5 out per million tokens; Opus 4.8 is $5 / $25.** For recipe questions, Haiku is roughly a fifth of the cost. Prompt caching cuts repeated input by a further 90%, which matters because the chef's system prompt is the same every call. **Tina rules the model.** Verify the exact ID against Anthropic's model docs before it ships — legacy IDs get retired.
2. **THE DAILY CEILING, IN RANDS.** What is the most this may cost in a day before it switches itself off?
3. **WHAT THE USER SEES AT THE CEILING.** One sentence, in Tinza's voice.

⚖️ **Law 15** — all three go into `TINZA_RULINGS.md` the day they are made.

---

## NOT IN THIS BRIEF

- **Making the chef Pro-only at the server.** Tinza has no server-side sign-in — "save first, sign in later" — so the tier gate is a browser-side courtesy and cannot be enforced in the function today. Noted, not solved here. Its own ruling, its own brief.
- **The `?dev` back door.** Separate, smaller, same week.

---

## DONE MEANS

⚖️ **Law 53 — 0 of N remain.**

- [ ] Console spend limit set — **Tina**
- [ ] Request built server-side; browser fields ignored — **Code**
- [ ] `max_tokens`, model and input length fixed in code — **Code**
- [ ] Origin locked and checked — **Code**
- [ ] Per-caller and per-day counters live — **Code**
- [ ] All five proofs in Step 5 watched to refuse — **Tina on live**
- [ ] `ANTHROPIC_KEY` rotated — **Tina**
- [ ] Three rulings written into `TINZA_RULINGS.md` — **Claude, on Tina's word**

**Nothing here is banked until it is on GitHub.** ⚖️ Law 54d.
