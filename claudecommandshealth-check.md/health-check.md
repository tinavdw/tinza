Run a full health check on the Tinza codebase. Do NOT edit anything — report only, then wait for my go-ahead on any fixes.

1. Run `node Tools/health-check.js` and show me the output (syntax, dead onclick handlers, duplicate recipe ids, malformed version blocks).
2. Run `node --check` on every file in `sections/` and confirm each parses.
3. Judgment review against the locked rules (these are things the script can't see):
   - Sameness: any new/changed section must match the braai v33 pattern and render through the shared core.js functions — flag any section drifting from it.
   - Tokens: new code must use `var(--token)` colours, not hardcoded hex (Warm Spice palette). Flag stray hex.
   - Cost colours: green = food cost only, gold = shop-spend only, accent = interactive — flag any mixing.
   - Cross-links: every `openRecipe('section','id')` and cross-link target must resolve to a real recipe id.
   - Dead code: flag functions defined but never called, and any handler/call referencing something that no longer exists.
4. Give me a short verdict: ✅ all clear, or a numbered list of real issues ranked by severity (breaks-on-click > data bug > cosmetic > cleanup). No false-positive padding.
