// Comprehensive image optimizer for the entire public/ folder.
// Walks all images under public/images/ recursively, resizes & compresses them,
// converts opaque PNGs to JPEGs, and rewrites src/ references so the
// site keeps working after PNG -> JPG conversions.
//
// Usage (from project root):
//   node scripts/optimize-all-images.mjs
//   bun scripts/optimize-all-images.mjs

import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = "public/images";
const MAX_SIZE_HERO = 1600;
const MAX_SIZE_PRODUCT = 800;
const MAX_SIZE_LOGO = 240;
const JPEG_QUALITY = 78;

function pickMaxSize(relPath) {
  const p = relPath.toLowerCase();
  if (p.includes("logo")) return MAX_SIZE_LOGO;
  if (p.includes("hero") || p.includes("showcase") || p.includes("team")) return MAX_SIZE_HERO;
  return MAX_SIZE_PRODUCT;
}

async function hasAlpha(buf) {
  try {
    const meta = await sharp(buf).metadata();
    return meta.hasAlpha || meta.channels === 4;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

async function optimizeFile(filePath) {
  const buf = await fs.readFile(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  const relPath = path.relative("public", filePath);

  const maxSize = pickMaxSize(relPath);
  const keepPng = ext === ".png" && (await hasAlpha(buf));
  const outExt = keepPng ? ".png" : ".jpg";
  const outPath = path.join(dir, baseName + outExt);
  const converted = !keepPng && ext === ".png";

  let pipeline = sharp(buf).resize(maxSize, maxSize, {
    fit: "inside",
    withoutEnlargement: true,
  });

  if (keepPng) {
    pipeline = pipeline.png({ compressionLevel: 9, quality: 80, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true });
  }

  await pipeline.toFile(outPath + ".tmp");
  await fs.rename(outPath + ".tmp", outPath);

  if (converted) {
    await fs.unlink(filePath).catch(() => {});
  }

  const newStat = await fs.stat(outPath);
  return {
    relPath,
    outRelPath: path.relative("public", outPath),
    converted,
    originalKB: (buf.length / 1024).toFixed(1),
    newKB: (newStat.size / 1024).toFixed(1),
    saved: (((buf.length - newStat.size) / buf.length) * 100).toFixed(1),
    maxSize,
  };
}

async function rewriteSourceReferences(conversions) {
  if (conversions.length === 0) return 0;

  const map = new Map();
  for (const c of conversions) {
    const oldUrl = "/" + c.relPath.replace(/\\/g, "/");
    const newUrl = "/" + c.outRelPath.replace(/\\/g, "/");
    if (oldUrl !== newUrl) map.set(oldUrl, newUrl);
  }

  if (map.size === 0) return 0;

  async function walkSrc(dir) {
    const out = [];
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) out.push(...(await walkSrc(full)));
      else if (/\.(tsx?|jsx?)$/i.test(entry.name)) out.push(full);
    }
    return out;
  }

  const srcFiles = await walkSrc("src");
  let touchedFiles = 0;

  for (const file of srcFiles) {
    let content = await fs.readFile(file, "utf8");
    let changed = false;
    for (const [oldUrl, newUrl] of map) {
      if (content.includes(oldUrl)) {
        content = content.split(oldUrl).join(newUrl);
        changed = true;
      }
    }
    if (changed) {
      await fs.writeFile(file, content);
      touchedFiles++;
      console.log(`  updated: ${path.relative(".", file)}`);
    }
  }
  return touchedFiles;
}

async function main() {
  console.log(`Scanning ${ROOT} ...`);
  const files = await walk(ROOT);
  console.log(`Found ${files.length} images.\n`);

  const conversions = [];
  let totalOriginal = 0;
  let totalNew = 0;

  for (const file of files) {
    try {
      const r = await optimizeFile(file);
      totalOriginal += parseFloat(r.originalKB);
      totalNew += parseFloat(r.newKB);
      const convMark = r.converted ? " [PNG→JPG]" : "";
      console.log(`  ${r.relPath.padEnd(48)}  ${r.originalKB.padStart(8)} KB  ->  ${r.newKB.padStart(6)} KB   (saved ${r.saved}%)${convMark}`);
      if (r.converted) conversions.push(r);
    } catch (e) {
      console.error(`  FAIL  ${file}: ${e.message}`);
    }
  }

  console.log("");
  console.log(`Total: ${(totalOriginal / 1024).toFixed(2)} MB  ->  ${(totalNew / 1024).toFixed(2)} MB   (saved ${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);

  if (conversions.length > 0) {
    console.log(`\nUpdating source references for ${conversions.length} PNG→JPG conversion(s)...`);
    const touched = await rewriteSourceReferences(conversions);
    console.log(`Updated ${touched} source file(s).`);
  } else {
    console.log("\nNo PNG→JPG conversions — no source changes needed.");
  }

  console.log("\nDone.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
