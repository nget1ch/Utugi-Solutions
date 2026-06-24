// Generate a 1200x630 Open Graph image for social sharing.
// Uses the Utugi logo on a branded background.
// Output: public/og-image.png

import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const LOGO_PATH = "public/images/utugi-logo.jpg";
const OUT_PATH = "public/og-image.png";

const WIDTH = 1200;
const HEIGHT = 630;

// Brand colors from the site theme
const BG_COLOR = { r: 248, g: 247, b: 243 }; // cream background
const ACCENT_COLOR = { r: 139, g: 90, b: 43 }; // warm brown primary

async function main() {
  // Load the logo and resize it to ~200px tall (preserving aspect ratio)
  const logoBuf = await fs.readFile(LOGO_PATH);
  const logoResized = await sharp(logoBuf)
    .resize(200, 200, { fit: "inside", withoutEnlargement: true })
    .toBuffer();

  // Build an SVG layer with text + accent bar
  const textSvg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgb(${BG_COLOR.r},${BG_COLOR.g},${BG_COLOR.b})" />
          <stop offset="100%" stop-color="rgb(240,230,214)" />
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

      <!-- Left accent bar -->
      <rect x="0" y="0" width="14" height="${HEIGHT}" fill="rgb(${ACCENT_COLOR.r},${ACCENT_COLOR.g},${ACCENT_COLOR.b})" />

      <!-- Business name -->
      <text x="80" y="290" font-family="Georgia, 'Times New Roman', serif" font-size="84" font-weight="700" fill="rgb(40,30,20)">Utugi Solutions</text>

      <!-- Tagline -->
      <text x="80" y="360" font-family="Arial, sans-serif" font-size="38" fill="rgb(80,60,40)">Office Supplies, Corporate Branding &amp; Cosmetics in Kenya</text>

      <!-- Website URL at bottom -->
      <text x="80" y="540" font-family="Arial, sans-serif" font-size="28" fill="rgb(${ACCENT_COLOR.r},${ACCENT_COLOR.g},${ACCENT_COLOR.b})" font-weight="600">www.utugisolutions.co.ke</text>
    </svg>
  `;

  // Composite: SVG background + logo positioned top-right
  await sharp(Buffer.from(textSvg))
    .composite([
      {
        input: logoResized,
        top: 80,
        left: WIDTH - 280,
      },
    ])
    .png()
    .toFile(OUT_PATH);

  const stat = await fs.stat(OUT_PATH);
  console.log(`✓ OG image created: ${OUT_PATH} (${(stat.size / 1024).toFixed(1)} KB)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
