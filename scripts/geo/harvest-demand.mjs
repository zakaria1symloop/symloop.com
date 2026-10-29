#!/usr/bin/env node
// GEO pipeline, step 1: listen to demand.
// Pulls Google autocomplete suggestions (France + Algeria) for the query shapes
// our diaspora clients use, expands them, scores them, and flags which ones the
// site already answers. No API key needed.
//
//   node scripts/geo/harvest-demand.mjs            # full run, writes geo/demand/<date>.json + .md
//   node scripts/geo/harvest-demand.mjs --quick    # seeds only, no letter expansion
//
// Output is data for the scorer and for a human; it never publishes anything.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT_DIR = path.join(ROOT, 'geo', 'demand');
const QUICK = process.argv.includes('--quick');
const TODAY = new Date().toISOString().slice(0, 10);

// French models the diaspora has used and wants to see in Algeria.
const FRENCH_MODELS = ['doctolib', 'airbnb', 'booking', 'heetch', 'uber', 'uber eats', 'deliveroo', 'leboncoin', 'vinted', 'blablacar', 'lydia', 'qonto', 'alan', 'malt', 'indeed', 'seloger', 'yuka', 'too good to go', 'getaround', 'ornikar', 'hellofresh', 'bolt', 'glovo', 'yassir', 'ouedkniss', 'jumia', 'wecasa', 'pap', 'meero', 'swile'];

// Founder intents, phrased the way people type them.
const FOUNDER_SEEDS = [
  'créer une startup en algérie', 'lancer une application en algérie', 'créer une société en algérie depuis la france',
  'créer une entreprise en algérie depuis la france', 'investir en algérie diaspora', 'développer une application pour le marché algérien',
  'application mobile algérie prix', 'combien coûte une application mobile en algérie', 'agence développement application mobile algérie',
  'label startup algérie', 'développeur flutter algérie', 'paiement en ligne algérie application', 'intégrer cib edahabia application',
  'idée de startup algérie', 'idée application algérie', 'marché algérien application', 'créer une marketplace en algérie',
  'créer une application de livraison en algérie', 'créer une application vtc algérie', 'créer un site e-commerce en algérie',
  'développeur algérien freelance', 'agence web algérie', 'meilleure agence développement algérie', 'symloop',
];

const MODEL_SHAPES = (m) => [`${m} algérie`, `équivalent ${m} algérie`, `${m} en algérie`, `alternative ${m} algérie`, `créer un ${m} algérien`];
const LETTERS = QUICK ? [''] : ['', ...'abcdefghijlmnopqrstuv'.split('').map((l) => ` ${l}`), ' comment', ' combien', ' depuis', ' france', ' prix', ' 2026'];

const seeds = [...FOUNDER_SEEDS, ...FRENCH_MODELS.flatMap(MODEL_SHAPES)];

async function suggest(q, gl) {
  const u = `https://suggestqueries.google.com/complete/search?client=firefox&hl=fr&gl=${gl}&q=${encodeURIComponent(q)}`;
  try { const j = await (await fetch(u)).json(); return j[1] || []; } catch { return []; }
}

// What the site already covers: blog slugs + page files, tokenised.
function siteCoverage() {
  const dirs = ['blog', 'solutions', 'services', 'insights'].map((d) => path.join(ROOT, 'src', 'pages', d));
  const slugs = dirs.flatMap((d) => (fs.existsSync(d) ? fs.readdirSync(d).filter((f) => /\.(jsx?|mdx?)$/.test(f) && !f.startsWith('[') && f !== 'index.jsx').map((f) => f.replace(/\.(jsx?|mdx?)$/, '')) : []));
  return slugs;
}
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const STOP = new Set(['algerie', 'en', 'de', 'la', 'le', 'les', 'une', 'un', 'des', 'du', 'pour', 'et', 'a', 'au', 'aux', 'd', 'l', '2024', '2025', '2026', 'comment', 'combien']);
const tokens = (s) => norm(s).split(/[^a-z0-9]+/).filter((t) => t && !STOP.has(t));
function coveredBy(query, slugs) {
  const qt = tokens(query);
  if (!qt.length) return null;
  let best = null;
  for (const slug of slugs) {
    const st = new Set(slug.split('-'));
    const hit = qt.filter((t) => st.has(t)).length;
    const ratio = hit / qt.length;
    if (ratio >= 0.6 && (!best || ratio > best.ratio)) best = { slug, ratio };
  }
  return best;
}

const found = new Map(); // suggestion -> { gl:Set, seeds:Set, hits:number }
let calls = 0;
for (const seed of seeds) {
  for (const gl of ['fr', 'dz']) {
    for (const mod of LETTERS) {
      const list = await suggest(seed + mod, gl); calls++;
      list.forEach((s, rank) => {
        const e = found.get(s) || { gl: new Set(), seeds: new Set(), hits: 0, bestRank: 99 };
        e.gl.add(gl); e.seeds.add(seed); e.hits++; e.bestRank = Math.min(e.bestRank, rank);
        found.set(s, e);
      });
      await new Promise((r) => setTimeout(r, 120));
    }
  }
  process.stderr.write(`\r${seeds.indexOf(seed) + 1}/${seeds.length} seeds, ${found.size} suggestions, ${calls} calls`);
}
process.stderr.write('\n');

const slugs = siteCoverage();
const rows = [...found.entries()].map(([q, e]) => {
  const cov = coveredBy(q, slugs);
  const model = FRENCH_MODELS.find((m) => norm(q).includes(norm(m)));
  const diaspora = /france|etranger|depuis|diaspora|europe/.test(norm(q));
  // Score: seen in both countries, surfaced by several seeds, ranked high, diaspora phrasing, French-model shape.
  const score = (e.gl.size === 2 ? 3 : 1) + Math.min(e.seeds.size, 5) + (e.bestRank < 3 ? 2 : 0) + (diaspora ? 3 : 0) + (model ? 2 : 0);
  return { query: q, gl: [...e.gl].join('+'), seeds: e.seeds.size, bestRank: e.bestRank, model: model || null, diaspora, covered: cov?.slug || null, score };
}).sort((a, b) => b.score - a.score || a.query.localeCompare(b.query));

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, `${TODAY}.json`), JSON.stringify({ date: TODAY, calls, seeds: seeds.length, rows }, null, 1));

const uncovered = rows.filter((r) => !r.covered);
const md = [
  `# Demand harvest ${TODAY}`, '', `${rows.length} suggestions from ${seeds.length} seeds (${calls} autocomplete calls). ${uncovered.length} not yet answered on the site.`, '',
  '## Top uncovered (write / extend candidates)', '', '| score | gl | query | model | diaspora |', '|---|---|---|---|---|',
  ...uncovered.slice(0, 60).map((r) => `| ${r.score} | ${r.gl} | ${r.query} | ${r.model || ''} | ${r.diaspora ? 'yes' : ''} |`), '',
  '## Top covered (refresh candidates)', '', '| score | query | covered by |', '|---|---|---|',
  ...rows.filter((r) => r.covered).slice(0, 30).map((r) => `| ${r.score} | ${r.query} | ${r.covered} |`), '',
];
fs.writeFileSync(path.join(OUT_DIR, `${TODAY}.md`), md.join('\n'));
console.log(md.slice(0, 50).join('\n'));
console.log(`\nWritten: geo/demand/${TODAY}.json and .md`);
