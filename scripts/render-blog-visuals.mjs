#!/usr/bin/env node
// Rasterizes blog SVG visuals to JPG so og:image, social cards, ChatGPT and the
// image sitemap have a preview, while pages keep the inline SVG.
//
//   node scripts/render-blog-visuals.mjs            # all posts in src/content/visuals
//   node scripts/render-blog-visuals.mjs <slug>     # one post
//
// Output: public/blog/cover-<slug>.jpg (FR cover, 1200x670)
//         public/blog/visuals/<slug>/<key>.jpg (every figure, FR)

import fs from 'fs';
import path from 'path';
import { pathToFileURL, fileURLToPath } from 'url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src', 'content', 'visuals');
const OUT = path.join(ROOT, 'public', 'blog');

// librsvg cannot resolve CSS variables; map the web fonts to system equivalents.
const FONT_FALLBACKS = [
  [/var\(--font-instrument-serif\)/g, 'Georgia'],
  [/var\(--font-jetbrains-mono\)/g, 'Consolas'],
  [/var\(--font-ibm-plex-arabic\)/g, "'Segoe UI'"],
];

function forRaster(svg) {
  return FONT_FALLBACKS.reduce((s, [re, to]) => s.replace(re, to), svg);
}

async function toJpg(svg, file, quality = 82) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp';
  await sharp(Buffer.from(forRaster(svg)), { density: 96 }).jpeg({ quality, mozjpeg: true }).toFile(tmp);
  fs.renameSync(tmp, file);
  return fs.statSync(file).size;
}

const only = process.argv[2];
const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.mjs') && (!only || f === `${only}.mjs`));
if (!files.length) { console.error('No visual modules found'); process.exit(1); }

for (const f of files) {
  const mod = await import(pathToFileURL(path.join(SRC, f)).href);
  const slug = mod.slug || f.replace(/\.mjs$/, '');
  const v = mod.visuals('fr');
  const coverFile = path.join(OUT, `cover-${slug}.jpg`);
  const size = await toJpg(v.cover, coverFile);
  console.log(`${slug}: cover ${Math.round(size / 1024)} KB`);
  for (const [key, fig] of Object.entries(v.figures)) {
    const s = await toJpg(fig.svg, path.join(OUT, 'visuals', slug, `${key}.jpg`));
    console.log(`  ${key}.jpg ${Math.round(s / 1024)} KB`);
  }
}
