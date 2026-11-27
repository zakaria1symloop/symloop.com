#!/usr/bin/env node
// SEO intent miner — "how big companies pick keywords", without a paid tool.
//
// 1. Demand: for each sector, pull live autocomplete from three engines (Google
//    gl=DZ, Bing market fr-DZ, DuckDuckGo) for the query shapes buyers type
//    ("logiciel X algérie", "application X", "logiciel de gestion X", ...).
//    A suggestion that several engines return, high in the list, is demand.
// 2. Supply: match every suggestion to the page that already answers it
//    (slug token overlap) and attach that page's real Google visitors from the
//    latest geo/analytics/<date>.json (Vercel Web Analytics, 30 days).
// 3. Classify each sector: WINNER (we rank and get traffic → strengthen),
//    SLEEPER (we have a page but no traffic → fix title / links / intent),
//    GAP (demand, no page → write). Output: geo/intent/<date>.{json,md}.
//
//   node scripts/seo/mine-intent.mjs            # full (≈ 1,700 calls, 4 min)
//   node scripts/seo/mine-intent.mjs --quick    # Google only, 2 shapes
//
// Never publishes anything. Needs no key.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.join(ROOT, 'geo', 'intent');
const QUICK = process.argv.includes('--quick');
const TODAY = new Date().toISOString().slice(0, 10);

// Sectors a buyer in Algeria names when looking for software (FR). Kept broad on
// purpose: the engines tell us which ones people actually type.
const SECTORS = [
  'école', 'école privée', 'crèche', 'centre de formation', 'auto-école', 'université',
  'pharmacie', 'parapharmacie', 'clinique', 'cabinet médical', 'cabinet dentaire', 'laboratoire d’analyses', 'radiologie', 'opticien', 'vétérinaire', 'hôpital', 'kinésithérapeute',
  'restaurant', 'fast food', 'café', 'hôtel', 'salle des fêtes', 'salle de sport', 'salon de coiffure', 'spa', 'agence de voyage', 'agence omra',
  'supérette', 'supermarché', 'grossiste', 'boutique', 'boulangerie', 'pâtisserie', 'boucherie', 'quincaillerie', 'librairie', 'bijouterie', 'magasin de vêtements', 'pièces auto', 'téléphonie',
  'transport', 'livraison', 'logistique', 'entrepôt', 'flotte', 'location de voiture', 'garage', 'lavage auto', 'vtc', 'transit', 'import export', 'douane',
  'bâtiment', 'promoteur immobilier', 'agence immobilière', 'architecte', 'bureau d’études', 'menuiserie', 'aluminium', 'chantier',
  'usine', 'production', 'atelier', 'textile', 'confection', 'imprimerie', 'minoterie', 'laiterie', 'boissons', 'cosmétique', 'plasturgie', 'agroalimentaire',
  'agriculture', 'élevage', 'serre', 'pêche', 'coopérative',
  'cabinet d’avocat', 'notaire', 'cabinet comptable', 'expert comptable', 'assurance', 'banque', 'microfinance', 'association', 'mosquée', 'commune',
  'station service', 'gaz', 'énergie solaire', 'eau', 'mines', 'oil and gas', 'maintenance', 'sécurité', 'gardiennage', 'nettoyage', 'événementiel', 'photographe', 'club de football',
];
// Arabic sectors for the Arabic suggest pass (smaller, highest-volume ones).
const SECTORS_AR = ['مدرسة', 'صيدلية', 'عيادة', 'مطعم', 'فندق', 'محل', 'سوبيرات', 'تاجر جملة', 'نقل', 'توصيل', 'مخبزة', 'وكالة عقارية', 'وكالة سفر', 'ورشة', 'مصنع', 'مزرعة', 'مكتب محاسبة', 'مركز تكوين', 'قاعة رياضة', 'كراء سيارات'];

const SHAPES = QUICK
  ? [(s) => `logiciel ${s} algérie`, (s) => `application ${s} algérie`]
  : [(s) => `logiciel ${s}`, (s) => `logiciel ${s} algérie`, (s) => `application ${s}`, (s) => `application ${s} algérie`, (s) => `logiciel de gestion ${s}`, (s) => `gestion ${s} algérie`, (s) => `${s} algérie logiciel`];
const SHAPES_AR = [(s) => `برنامج ${s}`, (s) => `برنامج ${s} الجزائر`, (s) => `تطبيق ${s} الجزائر`];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(u, opts = {}) { try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' }, ...opts }); return await r.json(); } catch { return null; } }
const ENGINES = {
  google: async (q, lang) => { const j = await getJson(`https://suggestqueries.google.com/complete/search?client=firefox&hl=${lang}&gl=dz&q=${encodeURIComponent(q)}`); return (j && j[1]) || []; },
  bing: async (q, lang) => { const j = await getJson(`https://www.bing.com/osjson.aspx?query=${encodeURIComponent(q)}&market=${lang === 'ar' ? 'ar-DZ' : 'fr-DZ'}`); return (j && j[1]) || []; },
  ddg: async (q, lang) => { const j = await getJson(`https://duckduckgo.com/ac/?q=${encodeURIComponent(q)}&kl=${lang === 'ar' ? 'xa-ar' : 'fr-fr'}`); return Array.isArray(j) ? j.map((x) => x.phrase) : []; },
};
const ENGINE_NAMES = QUICK ? ['google'] : ['google', 'bing', 'ddg'];

// ── supply: what the site already has, with real traffic ────────────────
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/’/g, "'");
const STOP = new Set(['algerie', 'en', 'de', 'la', 'le', 'les', 'une', 'un', 'des', 'du', 'd', 'l', 'pour', 'et', 'a', 'au', 'aux', 'the', 'in', 'of', 'ce', 'qu', 'on', 'logiciel', 'application', 'gestion', 'gratuit', 'pdf', 'prix', 'telecharger', 'meilleur', 'avec', 'sur', 'par', '2024', '2025', '2026', '2027']);
const tokens = (s) => norm(s).split(/[^a-z0-9؀-ۿ]+/).filter((t) => t && !STOP.has(t) && t.length > 1);
function sitePages() {
  const dirs = ['blog', 'solutions', 'services', 'insights', 'locations'];
  const pages = [];
  for (const d of dirs) {
    const dir = path.join(ROOT, 'src', 'pages', d);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (!/\.(jsx?|mdx?)$/.test(f) || f.startsWith('[') || f === 'index.jsx') continue;
      const slug = f.replace(/\.(jsx?|mdx?)$/, '');
      pages.push({ path: `/${d}/${slug}`, slug, toks: new Set(slug.split('-').filter((t) => !STOP.has(t))) });
    }
  }
  return pages;
}
function latestAnalytics() {
  const dir = path.join(ROOT, 'geo', 'analytics');
  if (!fs.existsSync(dir)) return { google_by_path: {} };
  const f = fs.readdirSync(dir).filter((x) => x.endsWith('.json')).sort().pop();
  return f ? JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) : { google_by_path: {} };
}
function bestPage(query, pages) {
  const qt = tokens(query);
  if (!qt.length) return null;
  let best = null;
  for (const p of pages) {
    const hit = qt.filter((t) => p.toks.has(t)).length;
    const ratio = hit / qt.length;
    if (hit >= 1 && ratio >= 0.5 && (!best || ratio > best.ratio)) best = { path: p.path, ratio };
  }
  return best;
}

// ── demand ──────────────────────────────────────────────────────────────
const pages = sitePages();
const analytics = latestAnalytics();
const visits = analytics.google_by_path || {};
const found = new Map(); // suggestion -> { sector, engines:Set, bestRank, shapes:Set, lang }
let calls = 0;
async function harvest(sector, shapes, lang) {
  for (const shape of shapes) {
    const q = shape(sector);
    for (const e of ENGINE_NAMES) {
      const list = await ENGINES[e](q, lang); calls++;
      list.slice(0, 10).forEach((s, rank) => {
        const key = norm(s);
        const it = found.get(key) || { text: s, sector, engines: new Set(), bestRank: 99, shapes: new Set(), lang };
        it.engines.add(e); it.bestRank = Math.min(it.bestRank, rank); it.shapes.add(q);
        found.set(key, it);
      });
      await sleep(110);
    }
  }
}
for (const s of SECTORS) { await harvest(s, SHAPES, 'fr'); process.stdout.write(`\r${calls} calls · ${found.size} suggestions · ${s}            `); }
if (!QUICK) for (const s of SECTORS_AR) { await harvest(s, SHAPES_AR, 'ar'); process.stdout.write(`\r${calls} calls · ${found.size} suggestions · ${s}            `); }
console.log();

// ── score & classify ────────────────────────────────────────────────────
const items = [...found.values()].map((it) => {
  const t = norm(it.text);
  const buyer = /(logiciel|application|app|programme|erp|gestion|برنامج|تطبيق|نظام)/.test(t);
  const dz = /(alg|dz|الجزائر|alger|oran|setif|constantine)/.test(t);
  const price = /(prix|cout|tarif|combien|gratuit|سعر|ثمن)/.test(t);
  const noise = /(pdf|telecharger|crack|excel|word|gratuit|free|download|تحميل|مجان)/.test(t);
  const demand = it.engines.size * 3 + (10 - Math.min(it.bestRank, 9)) * 0.5 + (dz ? 3 : 0) + (buyer ? 2 : 0) + (price ? 1 : 0) - (noise ? 6 : 0);
  const page = bestPage(it.text, pages);
  const pv = page ? (visits[page.path] || 0) : 0;
  return { query: it.text, sector: it.sector, lang: it.lang, engines: [...it.engines], bestRank: it.bestRank, demand: Math.round(demand * 10) / 10, buyer, dz, noise, page: page ? page.path : null, match: page ? page.ratio : 0, googleVisitors30d: pv };
}).filter((x) => !x.noise && x.demand > 0).sort((a, b) => b.demand - a.demand);

const bySector = {};
for (const x of items) {
  const s = bySector[x.sector] || (bySector[x.sector] = { sector: x.sector, suggestions: 0, buyerDz: 0, demand: 0, covered: 0, visitors: 0, pages: new Set(), samples: [] });
  s.suggestions++; s.demand += x.demand; if (x.buyer && x.dz) s.buyerDz++;
  if (x.page) { s.covered++; s.pages.add(x.page); s.visitors = Math.max(s.visitors, x.googleVisitors30d); }
  if (s.samples.length < 4) s.samples.push(x.query);
}
const sectors = Object.values(bySector).map((s) => {
  const coverage = s.suggestions ? s.covered / s.suggestions : 0;
  const cls = s.visitors >= 15 ? 'WINNER' : coverage >= 0.4 ? 'SLEEPER' : s.buyerDz >= 2 ? 'GAP' : 'WEAK';
  return { ...s, pages: [...s.pages].slice(0, 3), demand: Math.round(s.demand), coverage: Math.round(coverage * 100), cls };
}).sort((a, b) => b.demand - a.demand);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, `${TODAY}.json`), JSON.stringify({ date: TODAY, calls, engines: ENGINE_NAMES, analyticsWindow: analytics.window, sectors, items }, null, 1));

const row = (s) => `| ${s.cls} | ${s.sector} | ${s.demand} | ${s.buyerDz} | ${s.coverage} % | ${s.visitors} | ${s.pages.join(' · ') || '—'} | ${s.samples.join(' · ')} |`;
const head = '| class | sector | demand | buyer+DZ | covered | best page Google visitors / 30 d | page(s) | sample queries |\n|---|---|---|---|---|---|---|---|';
const md = [
  `# Intent mining ${TODAY}`,
  `${items.length} buyer-shaped suggestions from ${SECTORS.length + (QUICK ? 0 : SECTORS_AR.length)} sectors (${calls} autocomplete calls on ${ENGINE_NAMES.join(', ')}). Traffic window: ${analytics.window || 'n/a'} (Google referrals only).`,
  '',
  'WINNER = demand + we already get Google visitors → strengthen (links from winners to new posts, FAQ, freshness). SLEEPER = demand + a page exists + no traffic → retitle / re-intent / internal links. GAP = buyer demand with Algeria, no page → write. WEAK = little buyer demand; skip.',
  '',
  '## GAPS (write)', head, ...sectors.filter((s) => s.cls === 'GAP').map(row), '',
  '## SLEEPERS (fix)', head, ...sectors.filter((s) => s.cls === 'SLEEPER').map(row), '',
  '## WINNERS (strengthen)', head, ...sectors.filter((s) => s.cls === 'WINNER').map(row), '',
  '## WEAK (skip)', head, ...sectors.filter((s) => s.cls === 'WEAK').slice(0, 25).map(row), '',
  '## Top 60 queries by demand', '| demand | engines | query | page | visitors |', '|---|---|---|---|---|',
  ...items.slice(0, 60).map((x) => `| ${x.demand} | ${x.engines.join('+')} | ${x.query} | ${x.page || '—'} | ${x.googleVisitors30d} |`),
].join('\n');
fs.writeFileSync(path.join(OUT, `${TODAY}.md`), md);
console.log(`wrote geo/intent/${TODAY}.md — ${sectors.filter((s) => s.cls === 'GAP').length} gaps, ${sectors.filter((s) => s.cls === 'SLEEPER').length} sleepers, ${sectors.filter((s) => s.cls === 'WINNER').length} winners`);
