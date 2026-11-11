// Drop `revalidate: 86400` from pages that should be pure SSG.
// These are rarely-changing editorial pages where revalidating every 24h
// burns ISR reads + Fast Origin Transfer with no benefit — they only change
// when we deploy code.
//
// Pages that KEEP ISR (must refresh without redeploy):
//   - /blog/index.jsx           — shows blog list, needs new posts visible
//   - /insights/index.jsx       — same for insights hub
//   - /case-studies/index.jsx   — same
//   - /sitemap.xml.jsx          — uses SSR with cache header (separate)
//   - /blog/[slug].jsx          — fetches Firebase data, needs ISR
//
// Everything else: pure SSG, regenerate on deploy only.

const fs = require('fs');
const path = require('path');

const KEEP_ISR = new Set([
  'blog/index.jsx',
  'insights/index.jsx',
  'case-studies/index.jsx',
  'blog/[slug].jsx',
]);

function relPath(full) {
  return full.replace(process.cwd() + path.sep, '').replace(/\\/g, '/').replace('src/pages/', '');
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory() && e.name !== 'node_modules' && e.name !== 'api') {
      walk(path.join(dir, e.name), out);
    } else if (e.isFile() && (e.name.endsWith('.jsx') || e.name.endsWith('.js'))) {
      out.push(path.join(dir, e.name));
    }
  }
  return out;
}

let modified = 0;
let kept = 0;

for (const file of walk('src/pages')) {
  const txt = fs.readFileSync(file, 'utf8');
  if (!txt.includes('revalidate: 86400')) continue;

  const rel = relPath(file);
  if (KEEP_ISR.has(rel)) {
    kept++;
    continue;
  }

  // Two patterns to remove cleanly:
  // (a) multi-line:  ,\n  revalidate: 86400,\n
  // (b) inline:      , revalidate: 86400 \n
  let out = txt;
  // Inline single-line case from add-isr-revalidate.js: `, revalidate: 86400 }`
  out = out.replace(/,\s*revalidate:\s*86400\s*\}/g, ' }');
  // Multi-line case: a `revalidate: 86400,` on its own line inside a return object
  out = out.replace(/\n\s*revalidate:\s*86400,?\s*\n/g, '\n');
  // Trailing-comma multi-line variant: `..., revalidate: 86400,`
  out = out.replace(/,\s*revalidate:\s*86400(?=\s*\})/g, '');

  if (out !== txt) {
    fs.writeFileSync(file, out);
    modified++;
  }
}

console.log(`✓ Dropped revalidate from ${modified} pages`);
console.log(`✓ Kept ISR on ${kept} pages: ${[...KEEP_ISR].join(', ')}`);
