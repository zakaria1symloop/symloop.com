#!/usr/bin/env node
// Symloop Research — Outsourcing Map.
// Where do buyers in Saudi Arabia, the UAE, Qatar, France and Spain look when
// they search for a software partner, and what do they ask before choosing?
//
// Method (all of it reproducible, no key, nothing published by this script):
//   - For each market we ask two search engines (Google suggest with the
//     market's country code, Bing with the market's locale) to complete
//     "partner" seeds in the market's working languages, e.g.
//     "software development company in …", "شركة برمجة في …",
//     "agence développement application mobile …", "empresa desarrollo software …".
//   - Each place-seed is expanded with every letter of the alphabet so the
//     engines enumerate the places they propose, not only their top ten.
//   - Control markets (United States and United Kingdom for English, Egypt for
//     Arabic) receive the same seeds, to separate what is specific to a market
//     from what the engine proposes to everybody in that language.
//   - A suggestion is a phrase an engine proposes. It is not a search volume.
//
//   node scripts/research/outsourcing-map.mjs            # ≈ 4,000 calls, 15 min
//   node scripts/research/outsourcing-map.mjs --analyse  # re-analyse the last raw file
//
// Output: research/outsourcing-map/<date>/{raw.json,suggestions.csv,summary.json}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASE = path.join(ROOT, 'research', 'outsourcing-map');
const ANALYSE_ONLY = process.argv.includes('--analyse');
const TODAY = new Date().toISOString().slice(0, 10);

const LATIN = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ARABIC = 'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي'.split(' ');

const SEEDS = {
  en: {
    place: ['software development company in', 'mobile app development company in', 'best software company in', 'app developers in', 'web development company in', 'it outsourcing company in'],
    intent: ['software development company', 'app development cost', 'how to choose a software development company', 'hire app developers', 'outsource software development', 'offshore software development', 'best software development company', 'software development company reviews'],
    letters: LATIN,
  },
  ar: {
    place: ['شركة برمجة في', 'شركة تطوير تطبيقات في', 'أفضل شركة برمجة في', 'شركة تصميم مواقع في'],
    intent: ['شركة برمجة', 'تكلفة تطبيق', 'سعر تصميم تطبيق', 'كيف اختار شركة برمجة', 'أفضل شركة برمجة', 'شركة تطوير تطبيقات', 'مبرمج تطبيقات', 'تقييم شركات البرمجة'],
    letters: ARABIC,
  },
  fr: {
    place: ['agence développement application mobile', 'agence développement web', 'société développement logiciel', 'développeur offshore', 'nearshore développement', 'externalisation développement informatique', 'meilleure agence développement', 'prestataire développement informatique'],
    intent: ['prix développement application mobile', 'comment choisir une agence de développement', 'tarif développeur freelance', 'devis application mobile', 'agence développement avis', 'externaliser développement logiciel'],
    letters: LATIN,
  },
  es: {
    place: ['empresa desarrollo software', 'empresa desarrollo apps', 'empresa desarrollo web', 'outsourcing desarrollo software', 'nearshore desarrollo software', 'mejor empresa desarrollo software', 'desarrollo software offshore'],
    intent: ['cuánto cuesta desarrollar una app', 'precio desarrollo software a medida', 'cómo elegir empresa desarrollo software', 'presupuesto desarrollo app', 'empresa desarrollo software opiniones', 'externalizar desarrollo software'],
    letters: LATIN,
  },
};

// role: 'target' markets are the study; 'control' markets separate market-specific
// suggestions from what the engine proposes to everyone in that language.
const MARKETS = [
  { gl: 'sa', name: 'Saudi Arabia', role: 'target', passes: [['en', 'en-SA'], ['ar', 'ar-SA']] },
  { gl: 'ae', name: 'United Arab Emirates', role: 'target', passes: [['en', 'en-AE'], ['ar', 'ar-AE']] },
  { gl: 'qa', name: 'Qatar', role: 'target', passes: [['en', 'en-QA'], ['ar', 'ar-QA']] },
  { gl: 'fr', name: 'France', role: 'target', passes: [['fr', 'fr-FR']] },
  { gl: 'es', name: 'Spain', role: 'target', passes: [['es', 'es-ES']] },
  { gl: 'us', name: 'United States', role: 'control', passes: [['en', 'en-US']] },
  { gl: 'gb', name: 'United Kingdom', role: 'control', passes: [['en', 'en-GB']] },
  { gl: 'eg', name: 'Egypt', role: 'control', passes: [['ar', 'ar-EG']] },
];

// ── gazetteer: place token → country ─────────────────────────────────────
const strip = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const W = (list) => new RegExp(`(^|[^a-z])(${list.join('|')})([^a-z]|$)`, 'i');
const A = (list) => new RegExp(list.join('|'));
const GAZ = [
  ['India', W(['india', 'indian', 'inde', 'bangalore', 'bengaluru', 'chennai', 'hyderabad', 'pune', 'mumbai', 'delhi', 'noida', 'gurgaon', 'gurugram', 'ahmedabad', 'kolkata', 'kochi', 'kerala', 'jaipur', 'indore', 'chandigarh', 'coimbatore', 'lucknow', 'nagpur', 'surat', 'vadodara', 'mohali', 'bhubaneswar', 'trivandrum', 'mysore', 'vizag', 'madurai', 'patna', 'bhopal', 'nashik', 'rajkot', 'goa', 'gujarat', 'tamil nadu', 'karnataka', 'punjab', 'uttar pradesh', 'maharashtra']), A(['الهند'])],
  ['Pakistan', W(['pakistan', 'lahore', 'karachi', 'islamabad', 'rawalpindi', 'faisalabad', 'peshawar', 'multan']), A(['باكستان'])],
  ['Bangladesh', W(['bangladesh', 'dhaka']), A(['بنغلاديش'])],
  ['Sri Lanka', W(['sri lanka', 'colombo']), null],
  ['Nepal', W(['nepal', 'kathmandu']), null],
  ['Egypt', W(['egypt', 'egypte', 'cairo', 'le caire', 'alexandria']), A(['مصر', 'القاهرة', 'القاهره', 'الاسكندرية', 'الإسكندرية'])],
  ['Jordan', W(['jordan', 'jordanie', 'amman']), A(['الأردن', 'الاردن'])],
  ['Saudi Arabia', W(['saudi', 'saudi arabia', 'ksa', 'riyadh', 'jeddah', 'dammam', 'khobar', 'al khobar', 'makkah', 'mecca', 'medina', 'madinah', 'arabie saoudite']), A(['السعودية', 'السعوديه', 'الرياض', 'جدة', 'جده', 'الدمام', 'الخبر', 'مكة', 'المدينة المنورة', 'القصيم', 'ابها', 'أبها', 'تبوك', 'الطائف'])],
  ['United Arab Emirates', W(['uae', 'u a e', 'dubai', 'abu dhabi', 'sharjah', 'ajman', 'al ain', 'ras al khaimah', 'emirates', 'emirats']), A(['الامارات', 'الإمارات', 'دبي', 'ابوظبي', 'أبوظبي', 'ابو ظبي', 'أبو ظبي', 'الشارقة', 'عجمان', 'العين'])],
  ['Qatar', W(['qatar', 'doha']), A(['قطر', 'الدوحة', 'الدوحه'])],
  ['Kuwait', W(['kuwait', 'koweit']), A(['الكويت'])],
  ['Bahrain', W(['bahrain', 'manama', 'bahrein']), A(['البحرين'])],
  ['Oman', W(['oman', 'muscat']), A(['سلطنة عمان', 'مسقط'])],
  ['Oman or Amman (ambiguous)', null, A(['(^|\\s)عمان(\\s|$)'])],
  ['Lebanon', W(['lebanon', 'liban', 'beirut', 'beyrouth']), A(['لبنان', 'بيروت'])],
  ['Syria', W(['syria', 'damascus']), A(['سوريا', 'دمشق'])],
  ['Iraq', W(['iraq', 'baghdad', 'erbil']), A(['العراق', 'بغداد', 'اربيل', 'أربيل'])],
  ['Palestine', W(['palestine', 'gaza', 'ramallah']), A(['فلسطين', 'غزة', 'رام الله'])],
  ['Yemen', W(['yemen']), A(['اليمن'])],
  ['Libya', W(['libya', 'libye', 'tripoli']), A(['ليبيا', 'طرابلس'])],
  ['Sudan', W(['sudan', 'khartoum']), A(['السودان'])],
  ['Morocco', W(['maroc', 'morocco', 'marruecos', 'casablanca', 'rabat', 'marrakech', 'tanger', 'tangier', 'agadir', 'fes']), A(['المغرب', 'الدار البيضاء', 'الرباط', 'مراكش', 'طنجة'])],
  ['Algeria', W(['algerie', 'algeria', 'argelia', 'alger', 'algiers', 'oran', 'constantine', 'setif', 'annaba']), A(['الجزائر', 'وهران', 'قسنطينة', 'سطيف'])],
  ['Tunisia', W(['tunisie', 'tunisia', 'tunez', 'tunis', 'sfax', 'sousse']), A(['تونس', 'صفاقس'])],
  ['Turkey', W(['turkey', 'turquie', 'turquia', 'istanbul', 'ankara']), A(['تركيا', 'اسطنبول', 'إسطنبول'])],
  ['France', W(['france', 'francia', 'paris', 'lyon', 'marseille', 'toulouse', 'lille', 'nantes', 'bordeaux', 'rennes', 'strasbourg', 'montpellier', 'nice', 'grenoble', 'rouen', 'tours', 'dijon', 'angers', 'reims', 'clermont', 'brest', 'caen', 'orleans', 'metz', 'nancy', 'la reunion', 'reunion', 'guadeloupe', 'martinique', 'ile de france', 'bretagne', 'normandie', 'alsace']), A(['فرنسا', 'باريس'])],
  ['Spain', W(['espana', 'spain', 'espagne', 'madrid', 'barcelona', 'valencia', 'sevilla', 'malaga', 'bilbao', 'zaragoza', 'alicante', 'murcia', 'vigo', 'granada', 'cordoba', 'valladolid', 'gijon', 'asturias', 'galicia', 'canarias', 'mallorca', 'pamplona', 'coruna', 'tenerife', 'cantabria', 'andalucia', 'cataluna', 'pais vasco', 'navarra', 'castellon', 'almeria', 'santander']), A(['اسبانيا', 'إسبانيا'])],
  ['United States', W(['usa', 'u s a', 'united states', 'us', 'america', 'etats unis', 'estados unidos', 'new york', 'nyc', 'california', 'texas', 'chicago', 'houston', 'dallas', 'austin', 'los angeles', 'san francisco', 'seattle', 'boston', 'atlanta', 'florida', 'miami', 'denver', 'new jersey', 'virginia', 'ohio', 'michigan', 'arizona', 'phoenix', 'san diego', 'washington', 'philadelphia', 'utah', 'colorado', 'north carolina', 'minnesota', 'illinois', 'georgia', 'oregon', 'portland', 'las vegas', 'nashville', 'charlotte', 'orlando', 'tampa', 'detroit', 'san jose', 'silicon valley']), A(['امريكا', 'أمريكا', 'الولايات المتحدة'])],
  ['United Kingdom', W(['uk', 'u k', 'united kingdom', 'england', 'london', 'londres', 'manchester', 'birmingham', 'leeds', 'bristol', 'glasgow', 'edinburgh', 'scotland', 'liverpool', 'nottingham', 'sheffield', 'cardiff', 'wales', 'belfast', 'newcastle', 'leicester', 'cambridge', 'oxford', 'brighton', 'reading', 'kent', 'essex', 'yorkshire', 'royaume uni', 'reino unido']), A(['بريطانيا', 'لندن'])],
  ['Canada', W(['canada', 'toronto', 'vancouver', 'montreal', 'ottawa', 'calgary', 'quebec']), A(['كندا'])],
  ['Germany', W(['germany', 'allemagne', 'alemania', 'berlin', 'munich', 'hamburg', 'frankfurt']), A(['المانيا', 'ألمانيا'])],
  ['Australia', W(['australia', 'sydney', 'melbourne', 'brisbane', 'perth', 'adelaide']), A(['استراليا', 'أستراليا'])],
  ['Ukraine', W(['ukraine', 'ucrania', 'kyiv', 'kiev', 'lviv']), A(['اوكرانيا', 'أوكرانيا'])],
  ['Poland', W(['poland', 'pologne', 'polonia', 'warsaw', 'krakow']), null],
  ['Romania', W(['romania', 'roumanie', 'rumania', 'bucharest', 'bucarest']), null],
  ['Portugal', W(['portugal', 'lisbon', 'lisbonne', 'lisboa', 'porto']), null],
  ['Vietnam', W(['vietnam', 'ho chi minh', 'hanoi']), null],
  ['Philippines', W(['philippines', 'manila', 'cebu']), null],
  ['Singapore', W(['singapore', 'singapour']), A(['سنغافورة'])],
  ['Malaysia', W(['malaysia', 'kuala lumpur']), A(['ماليزيا'])],
  ['China', W(['china', 'chine', 'shanghai', 'beijing', 'shenzhen']), A(['الصين'])],
  ['Madagascar', W(['madagascar', 'antananarivo']), null],
  ['Mauritius', W(['mauritius', 'ile maurice', 'maurice']), null],
  ['Senegal', W(['senegal', 'dakar']), null],
  ['Ivory Coast', W(['cote d ivoire', 'abidjan']), null],
  ['Cameroon', W(['cameroun', 'cameroon', 'douala', 'yaounde']), null],
  ['Belgium', W(['belgique', 'belgium', 'bruxelles', 'brussels', 'liege']), null],
  ['Switzerland', W(['suisse', 'switzerland', 'geneve', 'geneva', 'lausanne', 'zurich']), null],
  ['Luxembourg', W(['luxembourg']), null],
  ['Latin America', W(['mexico', 'colombia', 'argentina', 'peru', 'chile', 'ecuador', 'uruguay', 'venezuela', 'bolivia', 'paraguay', 'costa rica', 'guatemala', 'panama', 'republica dominicana', 'latinoamerica', 'latam', 'bogota', 'medellin', 'buenos aires', 'lima', 'santiago', 'monterrey', 'guadalajara', 'cdmx', 'brazil', 'brasil', 'sao paulo']), null],
  ['South Africa', W(['south africa', 'cape town', 'johannesburg', 'durban', 'pretoria']), null],
  ['Nigeria', W(['nigeria', 'lagos', 'abuja']), null],
  ['Kenya', W(['kenya', 'nairobi']), null],
  ['Ireland', W(['ireland', 'dublin']), null],
  ['Netherlands', W(['netherlands', 'amsterdam', 'pays bas']), null],
  ['Europe (generic)', W(['europe', 'europa', 'eastern europe', 'europe de l est']), A(['اوروبا', 'أوروبا'])],
  ['Asia (generic)', W(['asia', 'asie']), null],
  ['Africa (generic)', W(['africa', 'afrique']), A(['افريقيا', 'أفريقيا'])],
  ['Near me', W(['near me', 'pres de moi', 'cerca de mi', 'autour de moi']), A(['قريب مني', 'بالقرب مني'])],
];
function places(s) {
  const lat = strip(s).replace(/[’'`.,-]/g, ' ').replace(/\s+/g, ' ');
  const out = [];
  for (const [country, reLatin, reArabic] of GAZ) { if ((reLatin && reLatin.test(lat)) || (reArabic && reArabic.test(s))) out.push(country); }
  if (out.includes('Oman or Amman (ambiguous)') && (out.includes('Jordan') || out.includes('Oman'))) out.splice(out.indexOf('Oman or Amman (ambiguous)'), 1);
  return out;
}

const CLASSES = [
  ['ranking', /(^|[^a-z])(best|top|top 10|leading|largest|biggest|meilleur|meilleure|meilleures|mejor|mejores|classement|ranking|list of|liste)([^a-z]|$)|أفضل|افضل|احسن|أحسن|اكبر|أكبر|قائمة/i],
  ['price', /(^|[^a-z])(cost|costs|price|prices|pricing|rates|rate|prix|tarif|tarifs|cout|devis|precio|precios|cuanto|coste|costo|presupuesto|budget|cheap|affordable|quote)([^a-z]|$)|تكلفة|تكلفه|سعر|اسعار|أسعار|بكم|رخيص|ارخص|أرخص/i],
  ['reviews', /(^|[^a-z])(review|reviews|avis|opiniones|opinion|reddit|forum|glassdoor|clutch|testimonials|rating|ratings|quora|trustpilot)([^a-z]|$)|تقييم|تقييمات|تجربة|تجارب|رأي|آراء/i],
  ['how to choose', /(^|[^a-z])(how to choose|how to find|how to hire|how to select|comment choisir|comment trouver|como elegir|como contratar|questions to ask|checklist|criteria|criteres|contract|contrat|contrato|rfp|vs|versus|or|ou|pros and cons)([^a-z]|$)|كيف اختار|كيف أختار|كيفية اختيار|مقارنة|عقد/i],
  ['outsourcing', /(^|[^a-z])(outsourcing|outsource|offshore|offshoring|nearshore|nearshoring|externalisation|externaliser|externalizar|subcontratar|remote|dedicated team|staff augmentation|regie|esn|freelance|freelancer|freelancers)([^a-z]|$)|تعهيد|عن بعد|مستقل|فريلانسر/i],
  ['jobs', /(^|[^a-z])(jobs|job|careers|career|hiring|salary|salaries|emploi|recrutement|stage|alternance|salaire|empleo|trabajo|vacantes|internship|interview|sueldo|practicas|linkedin|fresher|freshers|walk in)([^a-z]|$)|وظائف|وظيفة|توظيف|تدريب|راتب|رواتب/i],
];
const NOISE = /(^|[^a-z])(apple|play store|app store|music|tv|card|pdf|meaning|definition|que es|wikipedia|ppt|course|cours|curso|tutorial|book|logo|png|images?)([^a-z]|$)/i;
function classify(s) { const lat = strip(s); const out = CLASSES.filter(([, re]) => re.test(lat) || re.test(s)).map(([k]) => k); return out; }

// ── collection ──────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(u, tries = 3) { for (let i = 0; i < tries; i++) { try { const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }); if (r.ok) return await r.json(); } catch { /* retry */ } await sleep(800 * (i + 1)); } return null; }
const google = async (q, hl, gl) => { const j = await getJson(`https://suggestqueries.google.com/complete/search?client=firefox&hl=${hl}&gl=${gl}&q=${encodeURIComponent(q)}`); return (j && j[1]) || null; };
const bing = async (q, mkt) => { const j = await getJson(`https://www.bing.com/osjson.aspx?query=${encodeURIComponent(q)}&market=${mkt}`); return (j && j[1]) || null; };

async function collect() {
  const dir = path.join(BASE, TODAY); fs.mkdirSync(dir, { recursive: true });
  const raw = []; let calls = 0; let failed = 0;
  for (const m of MARKETS) {
    for (const [lang, mkt] of m.passes) {
      const S = SEEDS[lang];
      const queries = [];
      for (const seed of S.place) { queries.push({ seed, kind: 'place', q: seed }, { seed, kind: 'place', q: `${seed} ` }); for (const l of S.letters) queries.push({ seed, kind: 'place', q: `${seed} ${l}` }); }
      for (const seed of S.intent) queries.push({ seed, kind: 'intent', q: seed }, { seed, kind: 'intent', q: `${seed} ` });
      for (const it of queries) {
        const [g, b] = await Promise.all([google(it.q, lang, m.gl), bing(it.q, mkt)]);
        calls += 2; if (!g) failed++; if (!b) failed++;
        raw.push({ gl: m.gl, lang, kind: it.kind, seed: it.seed, q: it.q, google: g || [], bing: b || [] });
        await sleep(140);
      }
      console.log(`${m.gl}/${lang}: ${queries.length} queries · total calls ${calls} · failed ${failed}`);
      fs.writeFileSync(path.join(dir, 'raw.json'), JSON.stringify({ date: TODAY, calls, failed, raw }));
    }
  }
  return dir;
}

// ── analysis ────────────────────────────────────────────────────────────
// Everything printed in the study comes from summary.json, which this function
// rebuilds from raw.json: per-market and per-engine destination maps, the
// per-language map (reference market), the similarity of each market to its
// control, the localisation of the first line, intent classes, Maghreb mentions.
const REFERENCE = { en: 'ae', ar: 'sa', fr: 'fr', es: 'es' };   // market whose Google list is shown as "the map" of a language
const CONTROL = { en: 'us', ar: 'eg' };
const NAME = Object.fromEntries(MARKETS.map((m) => [m.gl, m.name]));
const round = (x, d = 3) => +x.toFixed(d);

function analyse(dir) {
  const { date, calls, failed, raw } = JSON.parse(fs.readFileSync(path.join(dir, 'raw.json'), 'utf8'));

  // unique suggestion per market × language, remembering engines and seed kinds
  const uniq = new Map();
  for (const r of raw) for (const eng of ['google', 'bing']) (r[eng] || []).forEach((s, i) => {
    const key = `${r.gl}|${r.lang}|${s.toLowerCase().trim()}`;
    const e = uniq.get(key) || { gl: r.gl, lang: r.lang, suggestion: s.trim(), engines: new Set(), kinds: new Set(), seeds: new Set(), best: 99 };
    e.engines.add(eng); e.kinds.add(r.kind); e.seeds.add(r.seed); e.best = Math.min(e.best, i); uniq.set(key, e);
  });
  const rows = [...uniq.values()].map((e) => ({ gl: e.gl, lang: e.lang, suggestion: e.suggestion, engines: [...e.engines].sort(), kinds: [...e.kinds].sort(), seeds: e.seeds.size, best: e.best, places: places(e.suggestion), classes: classify(e.suggestion), noise: NOISE.test(strip(e.suggestion)) }));
  const csvEsc = (v) => `"${String(v).replace(/"/g, '""')}"`;
  fs.writeFileSync(path.join(dir, 'suggestions.csv'), '﻿' + ['market,language,suggestion,engines,seed_kinds,places,classes,noise', ...rows.map((r) => [r.gl, r.lang, csvEsc(r.suggestion), r.engines.join('+'), r.kinds.join('+'), csvEsc(r.places.join('; ')), csvEsc(r.classes.join('; ')), r.noise ? 1 : 0].join(','))].join('\n'));

  // destination map of one market × language × engine ('google' | 'bing' | 'both')
  function map(gl, lang, engine) {
    const R = rows.filter((r) => r.gl === gl && r.lang === lang && !r.noise && r.kinds.includes('place') && !r.classes.includes('jobs') && r.places.length && (engine === 'both' || r.engines.includes(engine)));
    const dest = {}; R.forEach((r) => r.places.forEach((p) => { dest[p] = (dest[p] || 0) + 1; }));
    const total = Object.values(dest).reduce((a, n) => a + n, 0);
    const destinations = Object.entries(dest).sort((a, b) => b[1] - a[1]).map(([country, n]) => ({ country, n, share: total ? round(n / total) : 0 }));
    return { market: NAME[gl], gl, language: lang, engine, suggestions_with_place: R.length, place_mentions: total, domestic: dest[NAME[gl]] || 0, domestic_share: total ? round((dest[NAME[gl]] || 0) / total) : null, destinations };
  }
  const share = (m, country) => (m.destinations.find((d) => d.country === country) || { share: 0 }).share;
  const count = (m, country) => (m.destinations.find((d) => d.country === country) || { n: 0 }).n;

  const maps = {};
  for (const m of MARKETS) for (const [lang] of m.passes) for (const engine of ['google', 'bing', 'both']) maps[`${m.gl}/${lang}/${engine}`] = map(m.gl, lang, engine);

  // the map of a language = Google's list in the reference market; gap = largest difference in share, on any country, between a market and the reference
  const language_maps = {}; const share_gap_vs_reference = {};
  for (const [lang, ref] of Object.entries(REFERENCE)) {
    const R = maps[`${ref}/${lang}/google`];
    language_maps[lang] = { reference_market: NAME[ref], engine: 'google', place_mentions: R.place_mentions, top: R.destinations.slice(0, 12), algeria: count(R, 'Algeria'), morocco: count(R, 'Morocco'), tunisia: count(R, 'Tunisia'), egypt: count(R, 'Egypt'), jordan: count(R, 'Jordan'), india: count(R, 'India') };
    for (const m of MARKETS) for (const [l] of m.passes) if (l === lang && m.gl !== ref) for (const engine of ['google', 'bing']) {
      const A = maps[`${m.gl}/${lang}/${engine}`]; const B = maps[`${ref}/${lang}/${engine}`];
      const countries = new Set([...A.destinations, ...B.destinations].map((d) => d.country));
      let gap = 0; let on = null; for (const c of countries) { if (c === NAME[m.gl] || c === NAME[ref] || c === 'Near me') continue; const g = Math.abs(share(A, c) - share(B, c)); if (g > gap) { gap = g; on = c; } }
      share_gap_vs_reference[`${m.gl}/${lang}/${engine}`] = { market: NAME[m.gl], reference: NAME[ref], largest_gap_points: round(gap * 100, 1), on_country: on, india_share: share(A, 'India'), domestic_share: A.domestic_share };
    }
  }

  // similarity of each market's suggestion set to its control, per engine, bare seed vs letter-expanded
  function sset(gl, lang, eng, bare) { const out = new Set(); for (const r of raw) { if (r.gl !== gl || r.lang !== lang || r.kind !== 'place') continue; if ((r.q.trim() === r.seed) !== bare) continue; for (const s of r[eng]) out.add(s.toLowerCase().trim()); } return out; }
  const jac = (a, b) => { let inter = 0; for (const x of a) if (b.has(x)) inter++; const uni = a.size + b.size - inter; return uni ? round(inter / uni, 2) : null; };
  const similarity_vs_control = [];
  for (const [lang, ctrl] of Object.entries(CONTROL)) for (const eng of ['google', 'bing']) for (const bare of [true, false]) {
    const base = sset(ctrl, lang, eng, bare); const row = { language: lang, engine: eng, seed_type: bare ? 'bare' : 'letters', control: NAME[ctrl], control_size: base.size, markets: {} };
    for (const m of MARKETS) for (const [l] of m.passes) if (l === lang && m.gl !== ctrl) row.markets[m.gl] = jac(sset(m.gl, lang, eng, bare), base);
    similarity_vs_control.push(row);
  }

  // first line: what each engine proposes first (and in its first three) when the buyer has typed the seed and a space
  const first_line = []; const first_line_summary = {};
  for (const m of MARKETS) for (const [lang] of m.passes) {
    const S = SEEDS[lang]; const key = `${m.gl}/${lang}`; const sum = { market: m.name, language: lang, seeds: S.place.length, google_domestic_first: 0, google_domestic_top3: 0, bing_domestic_first: 0, bing_domestic_top3: 0 };
    for (const seed of S.place) {
      const r = raw.find((x) => x.gl === m.gl && x.lang === lang && x.seed === seed && x.q === `${seed} `) || raw.find((x) => x.gl === m.gl && x.lang === lang && x.seed === seed && x.q === seed);
      const g = (r && r.google) || []; const b = (r && r.bing) || [];
      const dom = (list, k) => list.slice(0, k).some((s) => places(s).includes(m.name));
      if (dom(g, 1)) sum.google_domestic_first++; if (dom(g, 3)) sum.google_domestic_top3++; if (dom(b, 1)) sum.bing_domestic_first++; if (dom(b, 3)) sum.bing_domestic_top3++;
      first_line.push({ gl: m.gl, language: lang, seed, google_first3: g.slice(0, 3), google_first_places: g[0] ? places(g[0]) : [], bing_first3: b.slice(0, 3), bing_first_places: b[0] ? places(b[0]) : [] });
    }
    first_line_summary[key] = sum;
  }

  // intent classes, all non-noise suggestions of a market × language (both engines)
  const intent = {};
  for (const m of MARKETS) for (const [lang] of m.passes) {
    const R = rows.filter((r) => r.gl === m.gl && r.lang === lang && !r.noise);
    const cls = {}; R.forEach((r) => r.classes.forEach((k) => { cls[k] = (cls[k] || 0) + 1; }));
    intent[`${m.gl}/${lang}`] = { market: m.name, language: lang, suggestions: R.length, noise_removed: rows.filter((r) => r.gl === m.gl && r.lang === lang && r.noise).length, with_place: R.filter((r) => r.places.length).length, with_place_share: round(R.filter((r) => r.places.length).length / R.length), classes: Object.fromEntries(Object.entries(cls).sort((a, b) => b[1] - a[1]).map(([k, n]) => [k, { n, share: round(n / R.length) }])) };
  }

  // every distinct suggestion naming Algeria, Morocco or Tunisia
  const maghreb = {};
  for (const c of ['Algeria', 'Morocco', 'Tunisia']) { const seen = new Map(); rows.filter((r) => r.places.includes(c) && !r.noise).forEach((r) => { const k = r.suggestion.toLowerCase(); const e = seen.get(k) || { suggestion: r.suggestion, markets: new Set(), languages: new Set(), engines: new Set() }; e.markets.add(r.gl); e.languages.add(r.lang); r.engines.forEach((x) => e.engines.add(x)); seen.set(k, e); }); maghreb[c] = [...seen.values()].map((e) => ({ suggestion: e.suggestion, markets: [...e.markets], languages: [...e.languages], engines: [...e.engines] })); }

  const summary = {
    date, calls, failed, unique_suggestions: rows.length,
    method: 'Google suggest (client=firefox, hl per language, gl per market) and Bing osjson (market per locale); place seeds expanded with every letter of the alphabet; a suggestion is a phrase an engine proposes, not a search volume',
    markets: MARKETS.map((m) => ({ gl: m.gl, name: m.name, role: m.role, languages: m.passes.map((p) => p[0]) })),
    seeds: Object.fromEntries(Object.entries(SEEDS).map(([k, v]) => [k, { place: v.place, intent: v.intent, letters: v.letters.length }])),
    reference_markets: Object.fromEntries(Object.entries(REFERENCE).map(([l, gl]) => [l, NAME[gl]])), control_markets: Object.fromEntries(Object.entries(CONTROL).map(([l, gl]) => [l, NAME[gl]])),
    language_maps, share_gap_vs_reference, similarity_vs_control, first_line_summary, first_line, intent, maghreb, maps,
  };
  fs.writeFileSync(path.join(dir, 'summary.json'), JSON.stringify(summary, null, 1));

  for (const [lang, L] of Object.entries(language_maps)) console.log(`MAP ${lang} (Google, ${L.reference_market}) · ${L.place_mentions} place mentions ·`, L.top.slice(0, 8).map((d) => `${d.country} ${d.n} (${Math.round(d.share * 100)} %)`).join(', '), `· Algeria ${L.algeria}`);
  for (const s of similarity_vs_control) console.log(`SIM ${s.language} ${s.engine} ${s.seed_type} vs ${s.control} (${s.control_size}):`, JSON.stringify(s.markets));
  for (const [k, v] of Object.entries(share_gap_vs_reference)) console.log(`GAP ${k}: ${v.largest_gap_points} pts on ${v.on_country} · India ${Math.round(v.india_share * 100)} % · domestic ${v.domestic_share === null ? '—' : Math.round(v.domestic_share * 100) + ' %'}`);
  for (const [k, v] of Object.entries(first_line_summary)) console.log(`FIRST ${k}: google domestic first ${v.google_domestic_first}/${v.seeds}, top3 ${v.google_domestic_top3}/${v.seeds} · bing first ${v.bing_domestic_first}/${v.seeds}, top3 ${v.bing_domestic_top3}/${v.seeds}`);
  for (const [k, v] of Object.entries(intent)) console.log(`INTENT ${k}: ${v.suggestions} ·`, Object.entries(v.classes).map(([c, x]) => `${c} ${Math.round(x.share * 100)} %`).join(', '), `· with place ${Math.round(v.with_place_share * 100)} %`);
  console.log('MAGHREB', Object.fromEntries(Object.entries(maghreb).map(([c, l]) => [c, l.length])));
  console.log(`wrote ${path.relative(ROOT, dir)}/{suggestions.csv,summary.json} — ${rows.length} unique suggestions, ${calls} calls, ${failed} failed`);
}

let dir;
if (ANALYSE_ONLY) { const ds = fs.readdirSync(BASE).filter((d) => fs.existsSync(path.join(BASE, d, 'raw.json'))).sort(); dir = path.join(BASE, ds[ds.length - 1]); } else dir = await collect();
analyse(dir);
