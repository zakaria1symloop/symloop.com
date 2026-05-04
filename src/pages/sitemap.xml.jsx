// Dynamic sitemap generator — auto-discovers ALL pages from the filesystem
// at request time, then emits hreflang alternates for en/fr/ar.
//
// Why filesystem auto-discovery: previous version was a hardcoded slug list
// that drifted from reality. New blog posts, insights, case studies, and
// landing pages were silently missing from the sitemap, causing Google to
// see them as orphaned and never index them.
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://symloop.com';
const LOCALES = ['en', 'fr', 'ar'];
const DEFAULT_LOCALE = 'en';
const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');

// Files/directories to skip when scanning
const SKIP_FILES = new Set([
  '_app.js', '_document.js', '_error.js', '404.jsx', '500.jsx',
  'sitemap.xml.jsx', 'robots.txt.jsx', 'index.html',
]);
const SKIP_DIRS = new Set(['api', 'fonts']);

// Slug files starting with [ are dynamic routes — skip them
const isDynamicRoute = (name) => name.startsWith('[');

function listSlugs(dir) {
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.jsx') || f.endsWith('.js'))
      .filter((f) => !isDynamicRoute(f))
      .filter((f) => !SKIP_FILES.has(f))
      .map((f) => f.replace(/\.(jsx|js)$/, ''))
      .filter((slug) => slug !== 'index');
  } catch {
    return [];
  }
}

function generateSitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(({ path: urlPath, lastmod, changefreq, priority }) => {
  const getUrl = (locale) => {
    if (locale === DEFAULT_LOCALE) return `${SITE_URL}${urlPath}`;
    return `${SITE_URL}/${locale}${urlPath}`;
  };

  return `  <url>
    <loc>${getUrl(DEFAULT_LOCALE)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${LOCALES.map(locale => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${getUrl(locale)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${getUrl(DEFAULT_LOCALE)}"/>
  </url>`;
}).join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const today = new Date().toISOString().split('T')[0];

  // ═══════════════════════════════════════
  // 1. STATIC HUBS + LANDING PAGES (high priority)
  // ═══════════════════════════════════════
  const staticPages = [
    { path: '/',                  changefreq: 'daily',   priority: '1.0' },
    { path: '/services/',         changefreq: 'weekly',  priority: '0.95' },
    { path: '/insights/',         changefreq: 'weekly',  priority: '0.9' },
    { path: '/case-studies/',     changefreq: 'weekly',  priority: '0.95' },
    { path: '/africa/',           changefreq: 'monthly', priority: '0.85' },
    { path: '/startup/',          changefreq: 'monthly', priority: '0.85' },
    { path: '/outsourcing/',      changefreq: 'monthly', priority: '0.9' },
    { path: '/mena/',             changefreq: 'weekly',  priority: '0.7' },
    { path: '/recrutement/',      changefreq: 'monthly', priority: '0.5' },
    { path: '/learning/',         changefreq: 'monthly', priority: '0.5' },
    { path: '/presentation/',     changefreq: 'monthly', priority: '0.6' },
  ].map((p) => ({ ...p, lastmod: today }));

  // ═══════════════════════════════════════
  // 2. BLOG POSTS — auto-discovered
  // ═══════════════════════════════════════
  const blogSlugs = listSlugs(path.join(PAGES_DIR, 'blog'));
  const blogPages = blogSlugs.map((slug) => ({
    path: `/blog/${slug}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  // ═══════════════════════════════════════
  // 3. INSIGHTS — auto-discovered (editorial long-form)
  // ═══════════════════════════════════════
  const insightSlugs = listSlugs(path.join(PAGES_DIR, 'insights'));
  const insightPages = insightSlugs.map((slug) => ({
    path: `/insights/${slug}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.85',
  }));

  // ═══════════════════════════════════════
  // 4. CASE STUDIES — auto-discovered
  // ═══════════════════════════════════════
  const caseStudySlugs = listSlugs(path.join(PAGES_DIR, 'case-studies'));
  const caseStudyPages = caseStudySlugs.map((slug) => ({
    path: `/case-studies/${slug}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.9',
  }));

  // ═══════════════════════════════════════
  // 5. SERVICES — auto-discovered (skips dynamic [slug] route)
  // ═══════════════════════════════════════
  const serviceSlugs = listSlugs(path.join(PAGES_DIR, 'services'));
  // Bespoke editorial service pages (the 8 disciplines) get higher priority
  const editorialServices = new Set([
    'ai', 'software-engineering', 'mobile', 'cloud',
    'iot', 'cybersecurity', 'consulting', 'product',
  ]);
  const servicePages = serviceSlugs.map((slug) => ({
    path: `/services/${slug}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: editorialServices.has(slug) ? '0.95' : '0.85',
  }));
  // Plus the legacy slug-based service URLs (kept because they have rankings)
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
  const legacyServicePages = legacyServiceSlugs.map((slug) => ({
    path: `/services/${slug}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.85',
  }));

  // ═══════════════════════════════════════
  // 6. SOLUTIONS — auto-discovered + legacy dynamic slugs
  // ═══════════════════════════════════════
  const solutionFileSlugs = listSlugs(path.join(PAGES_DIR, 'solutions'));
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
  const solutionAllSlugs = [...new Set([...solutionFileSlugs, ...dynamicSolutionSlugs])];
  const solutionPages = solutionAllSlugs.map((slug) => ({
    path: `/solutions/${slug}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.85',
  }));

  // ═══════════════════════════════════════
  // 7. LOCATIONS — explicit list (cities + Alger × service editorial)
  // ═══════════════════════════════════════
  const cities = ['alger', 'oran', 'constantine', 'setif', 'annaba', 'blida', 'batna', 'djelfa', 'tlemcen', 'bejaia'];
  const locationPages = cities.map((city) => ({
    path: `/locations/${city}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7',
  }));
  const algerServices = ['ai', 'software-engineering', 'mobile', 'cloud', 'iot', 'cybersecurity', 'consulting', 'product'];
  const algerServicePages = algerServices.map((s) => ({
    path: `/locations/alger/${s}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.85',
  }));

  // ═══════════════════════════════════════
  // 8. PRODUCTS
  // ═══════════════════════════════════════
  const productPages = [
    { path: '/products/asa/',                  changefreq: 'monthly', priority: '0.7' },
    { path: '/products/logistics-management/', changefreq: 'monthly', priority: '0.7' },
    { path: '/products/symtv-light/',          changefreq: 'monthly', priority: '0.7' },
  ].map((p) => ({ ...p, lastmod: today }));

  // ═══════════════════════════════════════
  // COMBINE
  // ═══════════════════════════════════════
  const allUrls = [
    ...staticPages,
    ...caseStudyPages,
    ...insightPages,
    ...servicePages,
    ...legacyServicePages,
    ...solutionPages,
    ...blogPages,
    ...locationPages,
    ...algerServicePages,
    ...productPages,
  ];

  const sitemap = generateSitemap(allUrls);

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=600');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
