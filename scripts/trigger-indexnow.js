#!/usr/bin/env node
/**
 * trigger-indexnow.js
 *
 * Submits ALL symloop.com URLs to IndexNow (api.indexnow.org) so search engines
 * (Bing, Yandex, Naver, Seznam, etc.) re-crawl them.
 *
 * URLs are auto-discovered from src/pages/ at runtime — no manual list to keep
 * in sync with the codebase.
 *
 * Usage:  node scripts/trigger-indexnow.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ─── Configuration ──────────────────────────────────────────────────
const HOST = 'symloop.com';
const KEY = 'e9f4a1b2c3d5e6f7a8b9c0d1e2f3a4b5';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const BATCH_SIZE = 10000;
const BASE = `https://${HOST}`;
const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');

const SKIP_FILES = new Set([
  '_app.js', '_document.js', '_error.js', '404.jsx', '500.jsx',
  'sitemap.xml.jsx', 'robots.txt.jsx', 'index.html',
]);

// ─── Filesystem-based slug discovery ────────────────────────────────
function listSlugs(dir) {
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.jsx') || f.endsWith('.js'))
      .filter((f) => !f.startsWith('['))
      .filter((f) => !SKIP_FILES.has(f))
      .map((f) => f.replace(/\.(jsx|js)$/, ''))
      .filter((slug) => slug !== 'index');
  } catch {
    return [];
  }
}

// ─── URL Builder ────────────────────────────────────────────────────
const LOCALES = ['fr', 'ar']; // 'en' is default → no prefix

function buildAllUrls() {
  const urls = new Set();

  // Top-level static pages we always want submitted (en/no-prefix)
  const staticPaths = [
    '/',
    '/services/',
    '/insights/',
    '/case-studies/',
    '/africa/',
    '/startup/',
    '/outsourcing/',
    '/mena/',
    '/recrutement/',
    '/learning/',
    '/presentation/',
    '/blog/',
  ];
  for (const p of staticPaths) urls.add(`${BASE}${p}`);

  // Auto-discovered slugs by directory
  const blogSlugs       = listSlugs(path.join(PAGES_DIR, 'blog'));
  const insightSlugs    = listSlugs(path.join(PAGES_DIR, 'insights'));
  const caseStudySlugs  = listSlugs(path.join(PAGES_DIR, 'case-studies'));
  const serviceSlugs    = listSlugs(path.join(PAGES_DIR, 'services'));
  const solutionSlugs   = listSlugs(path.join(PAGES_DIR, 'solutions'));

  // Legacy slug-based service pages (not files — handled by [slug].jsx)
  const legacyServiceSlugs = [
    'developpement-logiciel-sur-mesure-mena',
    'developpement-application-mobile-flutter-mena',
    'creation-site-web-ecommerce-mena',
    'solutions-iot-esp32-objets-connectes-mena',
    'intelligence-artificielle-chatgpt-machine-learning-mena',
    'cybersecurite-entreprise-protection-donnees-mena',
    'custom-software-development-mena',
    'flutter-mobile-app-development-mena',
    'website-ecommerce-development-mena',
    'iot-solutions-esp32-connected-objects-mena',
    'artificial-intelligence-chatgpt-machine-learning-mena',
    'enterprise-cybersecurity-data-protection-mena',
  ];

  // Legacy dynamic solution slugs (handled by [slug].jsx)
  const dynamicSolutionSlugs = [
    'applications-mobiles-flutter-react-native-algerie',
    'creation-site-web-professionnel-algerie',
    'consulting-technologique-strategie-digitale-algerie',
    'cybersecurite-pme-protection-donnees-algerie',
    'intelligence-artificielle-assistant-vocal-algerie',
    'logiciel-erp-crm-personnalise-algerie',
    'site-ecommerce-paiement-cib-edahabia-algerie',
    'solutions-cloud-infrastructure-serveurs-algerie',
    'solutions-iot-esp32-objets-connectes-algerie',
    'transformation-digitale-entreprise-algerie',
    'marketing-digital-seo-algerie',
    'solutions-reseau-infrastructure-it-algerie',
  ];

  const cities = ['alger', 'oran', 'constantine', 'setif', 'annaba', 'blida', 'batna', 'djelfa', 'tlemcen', 'bejaia'];
  const algerServices = ['ai', 'software-engineering', 'mobile', 'cloud', 'iot', 'cybersecurity', 'consulting', 'product'];

  const productPages = [
    '/products/asa/',
    '/products/symtv-light/',
    '/products/logistics-management/',
  ];

  // Combine all "default-locale" URL templates
  const mergedSolutionSlugs = [...new Set([...solutionSlugs, ...dynamicSolutionSlugs])];
  const allPaths = [
    ...blogSlugs.map((s) => `/blog/${s}/`),
    ...insightSlugs.map((s) => `/insights/${s}/`),
    ...caseStudySlugs.map((s) => `/case-studies/${s}/`),
    ...serviceSlugs.map((s) => `/services/${s}/`),
    ...legacyServiceSlugs.map((s) => `/services/${s}/`),
    ...mergedSolutionSlugs.map((s) => `/solutions/${s}/`),
    ...cities.map((c) => `/locations/${c}/`),
    ...algerServices.map((s) => `/locations/alger/${s}/`),
    ...productPages,
  ];

  for (const p of allPaths) urls.add(`${BASE}${p}`);

  // Locale variants (fr, ar) for every URL we have
  for (const locale of LOCALES) {
    for (const p of staticPaths) urls.add(`${BASE}/${locale}${p}`);
    for (const p of allPaths) urls.add(`${BASE}/${locale}${p}`);
  }

  return [...urls];
}

// ─── IndexNow submission ────────────────────────────────────────────
function submitBatch(urlList) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    });

    const url = new URL(INDEXNOW_ENDPOINT);
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });

    req.on('error', (err) => reject(err));
    req.write(payload);
    req.end();
  });
}

// ─── Main ───────────────────────────────────────────────────────────
async function main() {
  const allUrls = buildAllUrls();

  console.log('='.repeat(60));
  console.log('  IndexNow Bulk Submission for symloop.com');
  console.log('='.repeat(60));
  console.log(`  Host:         ${HOST}`);
  console.log(`  Key Location: ${KEY_LOCATION}`);
  console.log(`  Endpoint:     ${INDEXNOW_ENDPOINT}`);
  console.log(`  Total URLs:   ${allUrls.length}`);
  console.log('='.repeat(60));

  const batches = [];
  for (let i = 0; i < allUrls.length; i += BATCH_SIZE) {
    batches.push(allUrls.slice(i, i + BATCH_SIZE));
  }

  console.log(`  Submitting in ${batches.length} batch(es)...\n`);

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`  Batch ${i + 1}/${batches.length} (${batch.length} URLs)...`);

    try {
      const result = await submitBatch(batch);
      if (result.status === 200 || result.status === 202) {
        console.log(`    SUCCESS (HTTP ${result.status})`);
      } else {
        console.log(`    RESPONSE (HTTP ${result.status}): ${result.body}`);
      }
    } catch (err) {
      console.error(`    ERROR: ${err.message}`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('  Done! All URLs submitted to IndexNow.');
  console.log('='.repeat(60));

  console.log('\n  Sample URLs submitted:');
  for (let i = 0; i < Math.min(10, allUrls.length); i++) {
    console.log(`    ${allUrls[i]}`);
  }
  if (allUrls.length > 15) {
    console.log('    ...');
    for (let i = allUrls.length - 5; i < allUrls.length; i++) {
      console.log(`    ${allUrls[i]}`);
    }
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
