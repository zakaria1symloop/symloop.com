// Add `revalidate: 86400` (1 day ISR) to every getStaticProps that does not
// already have a revalidate. Uses brace-balancing to safely handle both
// single-line and multi-line return statements.

const fs = require('fs');
const path = require('path');

const SKIP = new Set([
  '_app.js', '_document.js', '_error.js', '404.jsx', '500.jsx',
]);
const REVALIDATE = 86400;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory() && e.name !== 'api' && e.name !== 'node_modules') {
      walk(path.join(dir, e.name), out);
    } else if (e.isFile() && (e.name.endsWith('.jsx') || e.name.endsWith('.js')) && !SKIP.has(e.name)) {
      out.push(path.join(dir, e.name));
    }
  }
  return out;
}

// Find the return-object range inside getStaticProps. Returns [startIdx, endIdx]
// where endIdx points to the matching closing `}`.
function findReturnObject(source) {
  const fnIdx = source.indexOf('getStaticProps');
  if (fnIdx === -1) return null;
  // Find first `return` after the function declaration
  const afterFn = source.indexOf('return', fnIdx);
  if (afterFn === -1) return null;
  // Find opening `{` after return
  const openIdx = source.indexOf('{', afterFn);
  if (openIdx === -1) return null;

  // Brace-balance, but ignore braces inside strings / template literals.
  let depth = 0;
  let i = openIdx;
  let inStr = null; // tracks quote char or `\`` for templates
  let inLineComment = false;
  let inBlockComment = false;

  for (; i < source.length; i++) {
    const ch = source[i];
    const next = source[i + 1];
    const prev = source[i - 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (ch === '*' && next === '/') { inBlockComment = false; i++; }
      continue;
    }
    if (inStr) {
      if (ch === '\\') { i++; continue; }
      if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '/' && next === '/') { inLineComment = true; i++; continue; }
    if (ch === '/' && next === '*') { inBlockComment = true; i++; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }

    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return [openIdx, i];
    }
  }
  return null;
}

let modified = 0;
const failures = [];

for (const file of walk('src/pages')) {
  const before = fs.readFileSync(file, 'utf8');
  if (!before.includes('getStaticProps')) continue;
  if (before.includes('revalidate')) continue;
  if (before.includes('getServerSideProps')) continue;

  const range = findReturnObject(before);
  if (!range) {
    failures.push(file.replace(process.cwd() + path.sep, ''));
    continue;
  }
  const [start, end] = range;
  const inner = before.slice(start + 1, end);
  const isMultiline = inner.includes('\n');

  // Determine indent of the closing `}` line for clean multi-line injection.
  let injection;
  if (isMultiline) {
    // Find the start of the line containing the closing `}`
    const lineStart = before.lastIndexOf('\n', end) + 1;
    const closingIndent = before.slice(lineStart, end);
    injection = `,\n${closingIndent}revalidate: ${REVALIDATE},\n${closingIndent}`;
    // Replace end position; we need to inject before the `}`.
    // Trim trailing comma+whitespace from inner if present, then add ours.
    // Actually: just insert the injection right before the closing `}`,
    // ensuring the previous content ends with a comma.
    const beforeClose = before.slice(0, end).replace(/[\s,]*$/, '');
    const after = beforeClose + injection + before.slice(end);
    fs.writeFileSync(file, after);
  } else {
    // Single-line return: `return { props: { ... } };`
    // Insert `, revalidate: N` just before the closing `}`.
    const beforeClose = before.slice(0, end).replace(/[\s,]*$/, '');
    const after = beforeClose + `, revalidate: ${REVALIDATE} ` + before.slice(end);
    fs.writeFileSync(file, after);
  }
  modified++;
}

console.log(`✓ Modified ${modified} files (added revalidate: ${REVALIDATE})`);
if (failures.length) {
  console.log(`⚠ ${failures.length} files matched but pattern did not — manual review:`);
  failures.slice(0, 20).forEach(f => console.log('  ' + f));
}
