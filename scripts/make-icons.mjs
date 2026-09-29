// Generates favicon and app icons from the theme colors in site.config.ts.
// The mark is the block logo: berry square, pink quarter circle, sun dot (same as Logo.astro).
// Run: npm run icons
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const cfg = readFileSync(new URL('../src/config/site.config.ts', import.meta.url), 'utf8');
const pick = (key) => cfg.match(new RegExp('[^A-Za-z]' + key + ": *'(#[0-9A-Fa-f]{6})'"))[1];
const berry = pick('berry');
const pink = pick('pink');
const sun = pick('sun');
const name = cfg.match(/name:\s*'([^']+)'/)[1];
const shortName = cfg.match(/shortName:\s*'([^']+)'/)[1];
const lang = cfg.match(/lang:\s*'([^']+)'/)[1];
const dir = cfg.match(/dir:\s*'([^']+)'/)[1];

// pad shrinks the mark for app icons that need a safe zone
const svg = (pad = 0) => {
  const s = (48 - pad * 2) / 48;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <rect width="48" height="48" rx="${pad ? 0 : 14}" fill="${berry}"/>
  <g transform="translate(${pad} ${pad}) scale(${s})">
    <path d="M48 48H26.4A21.6 21.6 0 0 1 48 26.4z" fill="${pink}"/>
    <circle cx="16.8" cy="16.8" r="7.2" fill="${sun}"/>
  </g>
</svg>`;
};

writeFileSync('public/favicon.svg', svg());
const out = [
  ['public/favicon-32.png', 32, 0],
  ['public/apple-touch-icon.png', 180, 5],
  ['public/icon-192.png', 192, 5],
  ['public/icon-512.png', 512, 5],
];
for (const [file, size, pad] of out) {
  await sharp(Buffer.from(svg(pad))).resize(size, size).png().toFile(file);
}
writeFileSync('public/site.webmanifest', JSON.stringify({
  name, short_name: shortName, lang, dir, start_url: '/', display: 'standalone',
  background_color: berry, theme_color: berry,
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
  ],
}, null, 2));
console.log('icons written');
