const fs = require('fs');
const path = require('path');

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name !== 'api' && entry.name !== 'node_modules') {
      walk(path.join(dir, entry.name), results);
    } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
      const full = path.join(dir, entry.name);
      const txt = fs.readFileSync(full, 'utf8');
      if (txt.includes('getStaticProps') && !txt.includes('revalidate')) {
        results.push(full.replace(process.cwd() + path.sep, ''));
      }
    }
  }
  return results;
}

const list = walk('src/pages');
console.log('Total without revalidate:', list.length);
console.log(list.slice(0, 40).join('\n'));
if (list.length > 40) console.log('... and ' + (list.length - 40) + ' more');
