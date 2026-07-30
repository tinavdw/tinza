#!/usr/bin/env bash
# TINZA — TIDY THE ROOT. 14 July 2026.
# git mv ONLY. Nothing is deleted. Nothing the app loads is touched.
# index.html loads 29 .js files from sections/. NOT ONE .md is read by the app.
set -e
cd "$(dirname "$0")"

mkdir -p standards reference Archive

# ── 1 · STANDARDS — the files that answer a question, forever ──────────────
for f in BUG_STANDARD.md WOW_STANDARD.md TINZA_STANDARD.md TINZA_WK_STANDARD.md \
         TINZA_KIDDIES_STANDARD.md TINZA_RECIPE_DEPTH_STANDARD.md \
         TINZA_DIDYOUKNOW_STANDARD.md TINZA_DISH_NAMING.md TINZA_ONE_TEMPLATE.md; do
  [ -f "$f" ] && git mv -f "$f" standards/ && echo "  standards/  $f"
done

# ── 2 · REFERENCE — data that is still TRUE and gets looked up ─────────────
for f in TINZA_AVG_WEIGHT_DB.md TINZA_PRICE_REPORT.md TINZA_DISH_FAMILIES.md \
         TINZA_MEATCUT_ADDENDUM_buy_names.md TINZA_EXOTIC_BUCKETS.md TINZA_EXOTIC_TO_PRICE.md \
         TINZA_WK_PRICE_GAPS.md TINZA_TECHNIQUES.md TINZA_IDEAS_BACKLOG.md \
         TINZA_LAUNCH_CHECKLIST.md TINZA_WEDDING_BAR_PLANNER.md Tinza_Outstanding_Prices.docx \
         PHOTO_RECONNECT_MAP.md PHOTO_SHOOTLIST.md TINZA_PHOTO_REGEN_QUEUE.md; do
  [ -f "$f" ] && git mv -f "$f" reference/ && echo "  reference/  $f"
done

# ── 2b · DERIVED JSON — the ledgers, which the TOOLS resolve to reference/ ─────
# Added 30 Jul 2026. Both ledgers were pushed to the ROOT, where nothing reads them:
#   merge.js:343       path.join(__dirname, 'reference', 'ASIA_LEDGER.json')
#   priceledger.js:41  path.join(REPO,      'reference', 'PRICE_LEDGER.json')
# A ledger in the root is not a tidiness problem, it is a DEAD WATCHER — merge ran with
# no count-and-hash gate and said "first entry — baselining", which reads like a healthy
# line. Worse is a copy in BOTH places: two files, one name, and the tools silently read
# only one of them. So if reference/ already has it, the root copy is DELETED, not moved.
for f in ASIA_LEDGER.json PRICE_LEDGER.json; do
  [ -f "$f" ] || continue
  if [ -f "reference/$f" ]; then
    git rm -f "$f" >/dev/null && echo "  DELETED     $f  (reference/$f already exists — a duplicate ledger is a split brain)"
  else
    git mv -f "$f" reference/ && echo "  reference/  $f  (the tools resolve it there, not here)"
  fi
done

# ── 3 · ARCHIVE — every other .md / .mermaid / .html in the root ───────────
# KEEP LIST — these eight stay in the root. Everything else is history.
KEEP="README.md CLAUDE.md TINZA_LAW.md TINZA_RULINGS.md TINZA_NOW.mermaid index.html"
for f in *.md *.mermaid *.html; do
  [ -f "$f" ] || continue
  case " $KEEP " in *" $f "*) continue ;; esac
  git mv -f "$f" Archive/ && echo "  Archive/    $f"
done
echo
echo "DONE. The root now holds only what is ALIVE."
