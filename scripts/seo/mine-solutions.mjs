#!/usr/bin/env node
// Solution-intent miner — the same listening method as mine-intent.mjs, but by
// SOLUTION instead of by sector: what companies in Algeria type when they look
// for a provider of mobile apps, platforms, IT solutions and networks.
// Live autocomplete (Google gl=DZ + Bing fr-DZ / ar-DZ), no key, publishes nothing.
//
//   node scripts/seo/mine-solutions.mjs        # ≈ 1,000 calls, 3 min
//
// Output: geo/intent/solutions-<date>.{json,md}
// A suggestion is a phrase the engine proposes, not a search volume.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.join(ROOT, 'geo', 'intent');
const TODAY = new Date().toISOString().slice(0, 10);

const THEMES = {
  mobile: ['application mobile', 'développement application mobile', 'création application mobile', 'application android', 'application ios', 'application flutter', 'agence application mobile'],
  platform: ['plateforme web', 'plateforme e-commerce', 'site e-commerce', 'marketplace', 'application web', 'portail client', 'intranet', 'saas', 'plateforme de réservation', 'plateforme e-learning', 'application de livraison', 'boutique en ligne', 'création site web', 'site web entreprise', 'prise de rendez-vous en ligne', 'application de commande', 'menu qr code', 'borne de commande', 'click and collect', 'paiement en ligne', 'refonte site web', 'application de pointage', 'gestion des interventions', 'logiciel de planning', 'gestion de projet', 'service après-vente', 'gestion des réclamations', 'gestion des tickets', 'formation en ligne entreprise', 'billetterie en ligne', 'application de fidélité', 'gestion des abonnements', 'envoi de sms', 'gestion des réservations', 'gestion d’école', 'gestion salle de sport', 'gestion de location'],
  business: ['erp', 'crm', 'logiciel sur mesure', 'gestion électronique des documents', 'logiciel de gestion commerciale', 'logiciel de gestion de stock', 'tableau de bord', 'business intelligence', 'digitalisation entreprise', 'transformation digitale', 'logiciel de facturation', 'logiciel de caisse', 'logiciel de gestion', 'gestion de flotte', 'géolocalisation véhicules', 'gestion de maintenance gmao', 'suivi de production', 'gestion de chantier', 'traçabilité', 'inventaire code-barres', 'signature électronique', 'gestion des visiteurs', 'intégration erp', 'reprise de projet informatique', 'maintenance application', 'gestion d’entrepôt', 'préparation de commandes', 'gestion des encaissements', 'planification de production'],
  ai: ['intelligence artificielle', 'chatbot', 'agent ia', 'automatisation', 'chatbot whatsapp', 'ia entreprise', 'assistant ia', 'automatisation whatsapp', 'lecture automatique de documents', 'archivage numérique'],
  network: ['réseau informatique', 'installation réseau informatique', 'câblage réseau', 'câblage informatique', 'fibre optique entreprise', 'wifi entreprise', 'wifi professionnel', 'vpn entreprise', 'pare-feu', 'firewall', 'switch réseau', 'salle serveur', 'baie de brassage', 'téléphonie ip', 'standard téléphonique', 'interconnexion sites', 'filtrage web', 'wifi invités'],
  infra: ['serveur entreprise', 'installation serveur', 'virtualisation', 'sauvegarde données entreprise', 'cloud entreprise', 'hébergement cloud', 'datacenter', 'active directory', 'microsoft 365', 'messagerie professionnelle', 'nas synology', 'serveur de fichiers', 'partage de fichiers', 'accès à distance', 'bureau à distance', 'télétravail', 'hébergement site web', 'nom de domaine', 'gestion de parc informatique', 'migration cloud', 'migration messagerie', 'archivage de documents'],
  services: ['infogérance', 'maintenance informatique', 'contrat de maintenance informatique', 'prestataire informatique', 'société informatique', 'société de services informatiques', 'solution informatique', 'intégrateur informatique', 'audit informatique', 'support informatique', 'externalisation informatique'],
  security: ['cybersécurité', 'sécurité informatique', 'audit de sécurité informatique', 'antivirus entreprise', 'vidéosurveillance', 'caméra de surveillance entreprise', 'contrôle d’accès', 'pointeuse biométrique', 'test d’intrusion', 'sauvegarde cloud', 'protection des données entreprise'],
};
const THEMES_AR = ['تطبيق جوال', 'تصميم تطبيق', 'شبكات', 'تركيب شبكات', 'صيانة اعلام الي', 'كاميرات مراقبة', 'موقع الكتروني', 'متجر الكتروني', 'شركة برمجة', 'حلول تقنية', 'أمن المعلومات', 'سيرفر', 'خادم', 'شبكة الشركة', 'برنامج فواتير', 'برنامج تسيير', 'برنامج كاشير', 'تخزين سحابي', 'تطبيق توصيل'];

const SHAPES = [(t) => `${t} algérie`, (t) => `${t} alger`, (t) => `${t} entreprise algérie`, (t) => `prix ${t} algérie`, (t) => `société ${t} algérie`, (t) => `${t} algérie 2027`];
const SHAPES_AR = [(t) => `${t} الجزائر`, (t) => `${t} في الجزائر`, (t) => `سعر ${t} الجزائر`, (t) => `شركة ${t} الجزائر`];

// api.bing.com answers only to a full browser user agent (checked 17 Nov 2026).
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(u) { try { const r = await fetch(u, { headers: { 'user-agent': UA } }); return await r.json(); } catch { return null; } }
const google = async (q, hl) => { const j = await getJson(`https://suggestqueries.google.com/complete/search?client=firefox&hl=${hl}&gl=dz&q=${encodeURIComponent(q)}`); return (j && j[1]) || []; };
const bing = async (q, hl) => { const j = await getJson(`https://api.bing.com/osjson.aspx?query=${encodeURIComponent(q)}&mkt=${hl === 'ar' ? 'ar-DZ' : 'fr-DZ'}`); return (j && j[1]) || []; };

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/’/g, "'");
const STOP = new Set(['algerie', 'alger', 'en', 'de', 'la', 'le', 'les', 'une', 'un', 'des', 'du', 'd', 'l', 'pour', 'et', 'a', 'au', 'aux', 'prix', 'societe', 'entreprise', 'avec', 'sur', 'par', '2024', '2025', '2026', '2027']);
const tokens = (s) => norm(s).split(/[^a-z0-9؀-ۿ]+/).filter((t) => t && !STOP.has(t) && t.length > 2);

// supply: every page slug on the site
const pages = [];
for (const d of ['blog', 'solutions', 'services', 'insights', 'locations']) {
  const dir = path.join(ROOT, 'src', 'pages', d);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!/\.(jsx?|mdx?)$/.test(f) || f.startsWith('[') || f === 'index.jsx') continue;
    const slug = f.replace(/\.(jsx?|mdx?)$/, '');
    pages.push({ path: `/${d}/${slug}`, toks: new Set(slug.split('-')) });
  }
}
function bestPage(q) {
  const qt = tokens(q); if (!qt.length) return null;
  let best = null;
  for (const p of pages) {
    const hit = qt.filter((t) => p.toks.has(t)).length; const ratio = hit / qt.length;
    if (hit >= 2 && ratio >= 0.6 && (!best || ratio > best.ratio)) best = { path: p.path, ratio };
  }
  return best;
}

const found = new Map(); let calls = 0;
async function harvest(theme, group, shapes, hl) {
  for (const shape of shapes) {
    const q = shape(theme);
    const [g, b] = await Promise.all([google(q, hl), bing(q, hl)]); calls += 2;
    for (const [engine, list] of [['google', g], ['bing', b]]) {
      list.slice(0, 10).forEach((s, rank) => {
        const key = norm(s);
        const it = found.get(key) || { text: s, theme, group, hl, engines: new Set(), best: 99 };
        it.engines.add(engine); it.best = Math.min(it.best, rank); found.set(key, it);
      });
    }
    await sleep(200);
  }
}
for (const [group, list] of Object.entries(THEMES)) for (const t of list) { await harvest(t, group, SHAPES, 'fr'); process.stdout.write(`\r${calls} calls · ${found.size} suggestions · ${t}              `); }
for (const t of THEMES_AR) { await harvest(t, 'ar', SHAPES_AR, 'ar'); process.stdout.write(`\r${calls} calls · ${found.size} suggestions · ${t}              `); }
console.log();

const items = [...found.values()].map((it) => {
  const t = norm(it.text);
  const dz = /(alg|\bdz\b|الجزائر|alger|oran|setif|constantine|annaba|blida|ouedkniss)/.test(t);
  const buyer = /(prix|tarif|devis|cout|societe|entreprise|agence|prestataire|installation|creation|developpement|integrateur|solution|سعر|شركة|تركيب|تصميم)/.test(t);
  const noise = /(pdf|cours|formation|emploi|recrutement|salaire|stage|memoire|definition|c'est quoi|gratuit|telecharger|offre d'emploi|تحميل|دروس|وظائف|تكوين)/.test(t);
  const demand = it.engines.size * 3 + (10 - Math.min(it.best, 9)) * 0.5 + (dz ? 3 : 0) + (buyer ? 2 : 0) - (noise ? 8 : 0);
  const page = bestPage(it.text);
  return { query: it.text, theme: it.theme, group: it.group, hl: it.hl, engines: [...it.engines], best: it.best, dz, buyer, noise, demand: Math.round(demand * 10) / 10, page: page ? page.path : null };
});
const keep = items.filter((x) => !x.noise && x.dz).sort((a, b) => b.demand - a.demand);
const byTheme = {};
for (const x of keep) {
  const s = byTheme[x.theme] || (byTheme[x.theme] = { theme: x.theme, group: x.group, n: 0, buyer: 0, demand: 0, covered: 0, samples: [] });
  s.n++; s.demand += x.demand; if (x.buyer) s.buyer++; if (x.page) s.covered++; if (s.samples.length < 6) s.samples.push(x.query);
}
const themes = Object.values(byTheme).map((s) => ({ ...s, demand: Math.round(s.demand), coverage: s.n ? Math.round((s.covered / s.n) * 100) : 0 })).sort((a, b) => b.demand - a.demand);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, `solutions-${TODAY}.json`), JSON.stringify({ date: TODAY, calls, method: 'Google suggest (client=firefox, gl=dz) + Bing api.bing.com/osjson (mkt fr-DZ / ar-DZ; the www.bing.com endpoint answered empty on 17 Nov 2026); themes and shapes listed in scripts/seo/mine-solutions.mjs; kept = suggestions with an Algeria marker and no noise word; coverage = share matched to an existing page slug', totals: { suggestions: items.length, kept: keep.length }, themes, items: keep }, null, 1));
const md = [`# Solution intent ${TODAY}`, '', `${calls} calls · ${items.length} suggestions · ${keep.length} kept (Algeria marker, no noise). A suggestion is a phrase the engine proposes, not a volume.`, '',
  '| theme | group | kept | buyer-shaped | demand | matched to a page | samples |', '|---|---|---|---|---|---|---|',
  ...themes.map((s) => `| ${s.theme} | ${s.group} | ${s.n} | ${s.buyer} | ${s.demand} | ${s.coverage} % | ${s.samples.join(' · ')} |`), '',
  '## Top 150 suggestions', '', '| suggestion | theme | engines | demand | page |', '|---|---|---|---|---|',
  ...keep.slice(0, 150).map((x) => `| ${x.query} | ${x.theme} | ${x.engines.join('+')} | ${x.demand} | ${x.page || '—'} |`), ''].join('\n');
fs.writeFileSync(path.join(OUT, `solutions-${TODAY}.md`), md);
console.log(`wrote geo/intent/solutions-${TODAY}.md — ${calls} calls, ${keep.length} kept of ${items.length}`);
