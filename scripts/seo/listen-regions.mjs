#!/usr/bin/env node
// Regional listener — what buyers in KSA, UAE, Qatar, France and Spain type when
// they look for a software partner. Same method as mine-intent.mjs (live
// autocomplete, no key, nothing published), but the question is different: in
// these markets vendors are plentiful, so we classify each suggestion by the
// kind of reassurance it asks for (ranking, price, reviews, place, outsourcing).
//
//   node scripts/seo/listen-regions.mjs     # ≈ 400 calls, 2 min
//
// Output: geo/regions/<date>.{json,md}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.join(ROOT, 'geo', 'regions');
const TODAY = new Date().toISOString().slice(0, 10);

const COUNTRIES = {
  sa: { name: 'Saudi Arabia', passes: [
    { hl: 'ar', mkt: 'ar-SA', seeds: ['شركة برمجة', 'شركة تطوير تطبيقات', 'شركة تصميم تطبيقات', 'أفضل شركة برمجة', 'تكلفة تطبيق', 'تصميم تطبيق جوال', 'شركة تقنية معلومات', 'برمجة متجر الكتروني', 'نظام ادارة', 'تحول رقمي'] },
    { hl: 'en', mkt: 'en-SA', seeds: ['software development company in', 'mobile app development company', 'app development cost', 'best software company in', 'custom software development', 'it outsourcing'] },
  ] },
  ae: { name: 'United Arab Emirates', passes: [
    { hl: 'en', mkt: 'en-AE', seeds: ['software development company in', 'mobile app development company', 'app development cost', 'best software company in', 'custom software development', 'it outsourcing', 'ai development company', 'erp software'] },
    { hl: 'ar', mkt: 'ar-AE', seeds: ['شركة برمجة', 'شركة تطوير تطبيقات', 'أفضل شركة برمجة', 'تكلفة تطبيق', 'تصميم تطبيق'] },
  ] },
  qa: { name: 'Qatar', passes: [
    { hl: 'en', mkt: 'en-QA', seeds: ['software development company in', 'mobile app development company', 'app development cost', 'best software company in', 'custom software development', 'it company in'] },
    { hl: 'ar', mkt: 'ar-QA', seeds: ['شركة برمجة', 'شركة تطوير تطبيقات', 'أفضل شركة برمجة', 'تصميم تطبيق'] },
  ] },
  fr: { name: 'France', passes: [
    { hl: 'fr', mkt: 'fr-FR', seeds: ['agence développement application mobile', 'développement application mobile prix', 'agence développement web', 'externalisation développement informatique', 'développeur offshore', 'nearshore développement', 'prestataire développement logiciel', 'meilleure agence développement', 'développement logiciel sur mesure', 'agence développement algérie', 'offshore maghreb', 'créer une application'] },
  ] },
  es: { name: 'Spain', passes: [
    { hl: 'es', mkt: 'es-ES', seeds: ['empresa desarrollo software', 'desarrollo de aplicaciones móviles', 'desarrollo app precio', 'empresa desarrollo apps', 'outsourcing desarrollo software', 'nearshore desarrollo software', 'mejor empresa desarrollo software', 'software a medida', 'cuánto cuesta una app', 'desarrollo software marruecos'] },
  ] },
};

const CLASSES = [
  ['ranking', /\b(best|top|leading|meilleur|meilleure|mejor|mejores|classement|ranking)\b|أفضل|افضل|احسن|أحسن/i],
  ['price', /\b(cost|price|pricing|prix|tarif|tarifs|coût|cout|devis|precio|precios|cuánto|cuanto|coste|presupuesto|salary|salaire)\b|تكلفة|سعر|اسعار|أسعار|كم/i],
  ['reviews', /\b(review|reviews|avis|opiniones|opinion|reddit|forum|glassdoor|clutch)\b|تقييم|تجربة|تجارب/i],
  ['place', /\b(riyadh|jeddah|dammam|khobar|saudi|ksa|dubai|abu dhabi|sharjah|uae|doha|qatar|paris|lyon|marseille|toulouse|lille|nantes|bordeaux|france|madrid|barcelona|valencia|sevilla|málaga|malaga|españa|near me|algérie|algerie|maroc|tunisie|maghreb|marruecos|india|pakistan|egypt)\b|الرياض|جدة|الدمام|السعودية|دبي|ابوظبي|أبوظبي|الامارات|الإمارات|الدوحة|قطر|مصر/i],
  ['outsourcing', /\b(outsourcing|offshore|nearshore|externalisation|externaliser|freelance|freelancer|remote|subcontratar|régie|esn)\b|مستقل|عن بعد/i],
  ['jobs', /\b(jobs|job|careers|hiring|emploi|recrutement|stage|alternance|empleo|trabajo|vacantes|internship)\b|وظائف|توظيف|تدريب/i],
];
const classify = (s) => { const out = CLASSES.filter(([, re]) => re.test(s)).map(([k]) => k); return out.length ? out : ['other']; };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(u) { try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0' } }); return await r.json(); } catch { return null; } }
const google = async (q, hl, gl) => { const j = await getJson(`https://suggestqueries.google.com/complete/search?client=firefox&hl=${hl}&gl=${gl}&q=${encodeURIComponent(q)}`); return (j && j[1]) || []; };
const bing = async (q, mkt) => { const j = await getJson(`https://www.bing.com/osjson.aspx?query=${encodeURIComponent(q)}&market=${mkt}`); return (j && j[1]) || []; };

const result = {};
let calls = 0;
for (const [gl, c] of Object.entries(COUNTRIES)) {
  const seen = new Map();
  for (const pass of c.passes) {
    for (const seed of pass.seeds) {
      for (const q of [seed, `${seed} `]) {
        const [g, b] = await Promise.all([google(q, pass.hl, gl), bing(q, pass.mkt)]);
        calls += 2;
        g.forEach((s, i) => { const k = s.toLowerCase().trim(); const e = seen.get(k) || { q: s, hl: pass.hl, engines: new Set(), best: 99, seed }; e.engines.add('google'); e.best = Math.min(e.best, i); seen.set(k, e); });
        b.forEach((s, i) => { const k = s.toLowerCase().trim(); const e = seen.get(k) || { q: s, hl: pass.hl, engines: new Set(), best: 99, seed }; e.engines.add('bing'); e.best = Math.min(e.best, i); seen.set(k, e); });
        await sleep(220);
      }
    }
  }
  const rows = [...seen.values()].map((e) => ({ q: e.q, hl: e.hl, seed: e.seed, engines: [...e.engines], best: e.best, classes: classify(e.q) }));
  const counts = {}; rows.forEach((r) => r.classes.forEach((k) => { counts[k] = (counts[k] || 0) + 1; }));
  result[gl] = { name: c.name, total: rows.length, counts, rows: rows.sort((a, b) => b.engines.length - a.engines.length || a.best - b.best) };
  console.log(gl, rows.length, JSON.stringify(counts));
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, `${TODAY}.json`), JSON.stringify({ date: TODAY, calls, method: 'Google suggest (client=firefox, gl per country) + Bing osjson (market per country); seeds listed in scripts/seo/listen-regions.mjs; a suggestion is a phrase the engine proposes, not a search volume', countries: result }, null, 1));
const pct = (n, t) => (t ? `${Math.round((n / t) * 100)} %` : '—');
const md = [`# Regional listening ${TODAY}`, '', 'Autocomplete suggestions for "software partner" seeds, per country. Classes overlap; a suggestion is a phrase the engine proposes, not a volume.', '',
  '| country | suggestions | ranking | price | reviews | place | outsourcing | jobs | other |', '|---|---|---|---|---|---|---|---|---|',
  ...Object.entries(result).map(([gl, c]) => `| ${c.name} (${gl}) | ${c.total} | ${['ranking', 'price', 'reviews', 'place', 'outsourcing', 'jobs', 'other'].map((k) => `${c.counts[k] || 0} · ${pct(c.counts[k] || 0, c.total)}`).join(' | ')} |`), '',
  ...Object.entries(result).flatMap(([gl, c]) => [`## ${c.name} — suggestions seen on both engines or ranked first`, '', '| suggestion | lang | engines | classes |', '|---|---|---|---|', ...c.rows.filter((r) => r.engines.length > 1 || r.best <= 1).slice(0, 45).map((r) => `| ${r.q} | ${r.hl} | ${r.engines.join('+')} | ${r.classes.join(', ')} |`), '']),
].join('\n');
fs.writeFileSync(path.join(OUT, `${TODAY}.md`), md);
console.log(`wrote geo/regions/${TODAY}.md — ${calls} calls`);
