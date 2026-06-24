#!/usr/bin/env node
// Download the first image from each search result JSON file
// into /home/z/my-project/public/images/products/cosmetics/<id>.<ext>
//
// We pick the first result (most relevant). If the URL ends in .webp we save
// as .webp; otherwise default to .png. Next.js with images.unoptimized=true
// handles both fine.

import fs from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const RESULTS_DIR = "/home/z/my-project/scripts/search-results";
const OUT_DIR = "/home/z/my-project/public/images/products/cosmetics";

const PRODUCT_IDS = [
  "lotions",
  "serums",
  "sunscreens",
  "cleansers",
  "face-creams",
  "hair-food",
  "braids",
  "styling-gels",
  "shampoos",
  "conditioners",
  "foundations",
  "face-powders",
  "lipsticks",
  "lip-glosses",
  "eyebrow-pencils",
  "mascaras",
  "deodorants",
  "soaps",
  "face-masks",
  "perfumes",
];

async function downloadImage(url, outPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
    },
  });
  if (!res.ok || !res.body) {
    throw new Error(`HTTP ${res.status}`);
  }
  await pipeline(Readable.fromWeb(res.body), await fs.open(outPath, "w").then((h) => h.createWriteStream()));
  const stat = await fs.stat(outPath);
  return stat.size;
}

function pickExtension(url) {
  const m = url.match(/\.(png|jpe?g|webp|gif|bmp)(\?|$)/i);
  if (m) {
    const ext = m[1].toLowerCase();
    if (ext === "jpeg") return "jpg";
    return ext;
  }
  return "png";
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const manifest = [];

  // Download in parallel batches of 4
  const concurrency = 4;
  const queue = [...PRODUCT_IDS];

  async function worker() {
    while (queue.length > 0) {
      const id = queue.shift();
      const jsonPath = path.join(RESULTS_DIR, `${id}.json`);
      let json;
      try {
        const raw = await fs.readFile(jsonPath, "utf8");
        json = JSON.parse(raw);
      } catch (e) {
        console.error(`  FAIL  ${id}  (cannot read JSON: ${e.message})`);
        continue;
      }
      if (!json.success || !json.results || json.results.length === 0) {
        console.error(`  FAIL  ${id}  (no results in JSON)`);
        continue;
      }
      // Try each result in order until one downloads successfully
      let downloaded = false;
      for (let i = 0; i < json.results.length; i++) {
        const r = json.results[i];
        const ext = pickExtension(r.original_url);
        const outPath = path.join(OUT_DIR, `${id}.${ext}`);
        try {
          const size = await downloadImage(r.original_url, outPath);
          if (size < 1024) {
            // suspiciously small, try next
            await fs.unlink(outPath).catch(() => {});
            console.warn(`  SKIP  ${id} result #${i} (too small: ${size}B)`);
            continue;
          }
          console.log(`  OK    ${id}  ->  ${id}.${ext}  (${(size / 1024).toFixed(1)} KB)`);
          manifest.push({ id, ext, url: r.original_url, source: r.source });
          downloaded = true;
          break;
        } catch (e) {
          console.warn(`  WARN  ${id} result #${i} failed: ${e.message}`);
        }
      }
      if (!downloaded) {
        console.error(`  FAIL  ${id}  (all results failed to download)`);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  // Write manifest for downstream use
  await fs.writeFile(
    path.join(RESULTS_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  console.log(`\n--- Manifest written ---`);
  console.log(`Total downloaded: ${manifest.length} / ${PRODUCT_IDS.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
