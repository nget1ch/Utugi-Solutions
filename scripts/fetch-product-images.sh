#!/usr/bin/env bash
# Fetch one product image per query via z-ai image-search, in parallel batches.
# Saves raw JSON results to /home/z/my-project/scripts/search-results/<id>.json
#
# Note: z-ai CLI prints status messages to stdout BEFORE the JSON. We extract
# just the JSON by taking everything from the first line that starts with '{'.

set -uo pipefail

OUT_DIR="/home/z/my-project/scripts/search-results"
mkdir -p "$OUT_DIR"

# id|query  — 20 products
PRODUCTS=(
  "lotions|Nivea body lotion bottle product photo on white background"
  "serums|Vitamin C face serum dropper bottle product photo"
  "sunscreens|SPF 50 facial sunscreen bottle product photo"
  "cleansers|CeraVe facial cleanser bottle product photo"
  "face-creams|Olay face cream jar product photo"
  "hair-food|coconut hair oil bottle product photo"
  "braids|Darling braids hair extensions pack product photo"
  "styling-gels|Eco Styler hair gel green jar product photo"
  "shampoos|anti dandruff shampoo bottle product photo"
  "conditioners|hair conditioner bottle product photo"
  "foundations|Maybelline Fit Me foundation bottle product photo"
  "face-powders|compact face powder makeup product photo"
  "lipsticks|matte red lipstick tube product photo"
  "lip-glosses|clear lip gloss tube product photo"
  "eyebrow-pencils|eyebrow pencil makeup product photo"
  "mascaras|Maybelline mascara tube product photo"
  "deodorants|Nivea deodorant roll-on product photo"
  "soaps|Dudu Osun African black soap bar product"
  "face-masks|sheet face mask beauty skincare product photo"
  "perfumes|perfume body mist bottle product photo"
)

CONCURRENCY=4
running=0

for entry in "${PRODUCTS[@]}"; do
  id="${entry%%|*}"
  query="${entry##*|}"
  out="$OUT_DIR/$id.json"
  raw="$OUT_DIR/$id.raw"

  if [[ -f "$out" && -s "$out" ]]; then
    # Verify it has a valid URL inside
    if grep -q '"original_url"' "$out" 2>/dev/null; then
      echo "  SKIP  $id (already fetched)"
      continue
    fi
  fi

  echo "  FETCH $id  ::  $query"
  (
    z-ai image-search -q "$query" -c 3 --no-rank >"$raw" 2>/dev/null
    # Extract just the JSON object (from first '{' to end of file)
    sed -n '/^{/,$p' "$raw" > "$out"
    rm -f "$raw"
    if [[ ! -s "$out" ]] || ! grep -q '"original_url"' "$out" 2>/dev/null; then
      echo "  FAIL  $id (no usable result)"
      rm -f "$out"
    else
      echo "  OK    $id"
    fi
  ) &

  running=$((running + 1))
  if (( running >= CONCURRENCY )); then
    wait -n
    running=$((running - 1))
  fi
done

wait
echo "--- All fetches done ---"
ls -la "$OUT_DIR" | head -25
echo "---"
echo "Total successful: $(ls "$OUT_DIR"/*.json 2>/dev/null | wc -l) / 20"
