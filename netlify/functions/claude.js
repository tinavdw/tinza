// ── TINZA CHEF — SWITCHED OFF 21 Jul 2026 ─────────────────────────────────────
// RULED BY TINA, 21 Jul: the chef is OFF until it is properly capped and locked.
// See reference/MF78_AI_CHEF_LOCK_AND_CAP.md for the brief that turns it back on.
//
// 🩸 WHY THE FILE STAYS INSTEAD OF BEING DELETED:
//   The redirect in netlify.toml (/api/claude → here) is still live. Deleting the
//   file leaves the route answering with Netlify's own 404 page — HTML, not JSON —
//   which is a worse answer than a deliberate one. This is the deliberate one.
//
// 🔑 THIS FILE NEVER READS process.env.ANTHROPIC_KEY AND NEVER CALLS ANTHROPIC.
//   That is the whole point. Hiding the button in the app does not close the door;
//   the door is this endpoint, and it is now closed. ⚖️ Law 6 — one door.
//
// ✅ SAFE TO SHIP: all three call sites (core.js mood fetch, meals.js four-ingredient
//   and anchor-ingredient) already wrap the call in try/catch and degrade silently —
//   "the app results stay. Nothing is lost." A body with no `content` array makes
//   their JSON.parse throw, their catch fires, the library results remain on screen.
//   MEASURED, not assumed: core.js:2301 · meals.js:15675 · meals.js:15755.
//
// 🔓 TO SWITCH BACK ON: do not restore the old file. It forwarded the browser's
//   request wholesale and answered every origin. Build the new one from the brief.
// ─────────────────────────────────────────────────────────────────────────────

exports.handler = async function () {
  return {
    statusCode: 503,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      disabled: true,
      message: "Tinza Chef is resting. Every recipe in Tinza is still here."
    })
  };
};
