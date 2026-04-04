// Dynamic sitemap generator — auto-generates ALL URLs with hreflang
// This replaces the static public/sitemap.xml

const SITE_URL = 'https://symloop.com';
const LOCALES = ['en', 'fr', 'ar'];
const DEFAULT_LOCALE = 'en';

function generateSitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(({ path, lastmod, changefreq, priority }) => {
  // Generate locale-prefixed URLs
  const getUrl = (locale) => {
    if (locale === DEFAULT_LOCALE) return `${SITE_URL}${path}`;
    return `${SITE_URL}/${locale}${path}`;
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
  // 1. STATIC PAGES
  // ═══════════════════════════════════════
  const staticPages = [
    { path: '/', changefreq: 'daily', priority: '1.0' },
    { path: '/blog/', changefreq: 'daily', priority: '0.9' },
    { path: '/services/', changefreq: 'weekly', priority: '0.9' },
    { path: '/mena/', changefreq: 'weekly', priority: '0.7' },
    { path: '/recrutement/', changefreq: 'monthly', priority: '0.5' },
    { path: '/learning/', changefreq: 'monthly', priority: '0.5' },
    { path: '/presentation/', changefreq: 'monthly', priority: '0.6' },
    { path: '/products/asa/', changefreq: 'monthly', priority: '0.7' },
    { path: '/products/logistics-management/', changefreq: 'monthly', priority: '0.7' },
    { path: '/products/symtv-light/', changefreq: 'monthly', priority: '0.7' },
  ].map(p => ({ ...p, lastmod: today }));

  // ═══════════════════════════════════════
  // 2. BLOG POSTS (126 posts)
  // ═══════════════════════════════════════
  const blogSlugs = [
    'accompagnement-startup-tech-algerie',
    'agence-developpement-web-alger-2026',
    'agence-developpement-web-setif-2026',
    'agence-digitale-mena-2024',
    'agence-web-algerie-2024',
    'agriculture-intelligente-irrigation-algerie-2026',
    'agriculture-precision-drones-capteurs-algerie-2026',
    'application-gestion-agricole-algerie-2026',
    'application-immobilier-algerie-2024',
    'application-mobile-setif-2026',
    'application-restaurant-livraison-algerie',
    'application-sante-algerie-2024',
    'artificial-intelligence-solutions-kuwait-2026',
    'artificial-intelligence-solutions-saudi-arabia-2026',
    'artificial-intelligence-solutions-uae-2026',
    'barnamij-erp-idarat-sharikaat-kuwait-2026',
    'barnamij-erp-idarat-sharikaat-saudi-arabia-2026',
    'barnamij-erp-idarat-sharikaat-uae-2026',
    'cloud-computing-algerie-2024',
    'comment-choisir-developpeur-algerie',
    'cout-developpement-application-algerie',
    'creation-site-web-algerie-2024',
    'creation-site-web-setif-2026',
    'cybersecurite-algerie-2024',
    'depannage-logiciel-materiel-machines-industrielles-algerie-2026',
    'desarrollo-aplicaciones-moviles-espana-portugal-2026',
    'design-ui-ux-algerie-2024',
    'developpement-api-integration-algerie',
    'developpement-application-maroc-2024',
    'developpement-application-mobile-algerie-2024',
    'developpement-application-mobile-algerie-2026',
    'developpement-application-mobile-france-europe-2026',
    'developpement-application-tunisie-2024',
    'developpement-flutter-algerie-2024',
    'developpement-nodejs-backend-algerie',
    'developpement-python-django-algerie',
    'developpement-react-native-algerie',
    'developpement-react-nextjs-algerie',
    'developpement-site-web-algerie-2026',
    'developpement-web-constantine-2024',
    'developpement-web-oran-2024',
    'developpeur-web-setif-2026',
    'devops-deployment-algerie-2024',
    'devops-developpement-logiciel-algerie-2026',
    'digital-transformation-kuwait-new-kuwait-2030',
    'digital-transformation-saudi-arabia-vision-2030',
    'digital-transformation-uae-smart-government-2026',
    'digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar',
    'e-commerce-setif-2026',
    'ecommerce-algerie-paiement-cib-edahabia-2024',
    'ecommerce-solutions-kuwait-knet-2026',
    'ecommerce-solutions-saudi-arabia-mada-2026',
    'ecommerce-solutions-uae-dubai-2026',
    'economie-energie-maison-intelligente-climatisation-algerie-2026',
    'edtech-education-algerie-2024',
    'elevage-connecte-suivi-betail-algerie-2026',
    'entwicklung-mobile-apps-deutschland-dach-2026',
    'erp-business-software-kuwait-2026',
    'erp-business-software-saudi-arabia-2026',
    'erp-business-software-uae-2026',
    'erp-sur-mesure-saas-startup-pme-algerie-2026',
    'fintech-algerie-solutions-2024',
    'freelance-vs-agence-algerie',
    'gestion-flotte-livraison-suivi-gps-algerie-2026',
    'hulul-dhakaa-istinai-kuwait-2026',
    'hulul-dhakaa-istinai-saudi-arabia-2026',
    'hulul-dhakaa-istinai-uae-2026',
    'ia-generative-chatgpt-claude-algerie-2026',
    'informatique-industrielle-algerie-maintenance-pc-usine-2026',
    'installation-cameras-surveillance-professionnelle-algerie-2026',
    'intelligence-artificielle-algerie-2026',
    'intelligence-artificielle-algerie-mena-2024',
    'intelligence-artificielle-automatisation-business-algerie-2026',
    'iot-internet-des-objets-algerie-2026',
    'logiciel-agence-voyage-gds-setif-est-algerien-2026',
    'logiciel-caisse-pos-restaurant-commerce-setif-2026',
    'logiciel-clinique-cabinet-medical-algerie-2026',
    'logiciel-comptabilite-algerie-2024',
    'logiciel-crm-algerie-2024',
    'logiciel-crm-setif-bordj-msila-gestion-clients-2026',
    'logiciel-ecole-gestion-scolaire-algerie-2026',
    'logiciel-erp-algerie-2024',
    'logiciel-gestion-livraison-distribution-algerie-2026',
    'logiciel-gestion-livraison-setif-hauts-plateaux-2026',
    'logiciel-gestion-setif-2026',
    'logiciel-hotel-reservation-hebergement-algerie-2026',
    'logiciel-immobilier-agence-algerie-2026',
    'logiciel-pharmacie-gestion-stock-algerie-2026',
    'logiciel-rh-algerie-2024',
    'logistique-transport-algerie-2024',
    'maintenance-support-application-algerie',
    'maison-intelligente-smart-home-algerie-2026',
    'marketing-digital-algerie-2024',
    'mobile-app-development-kuwait-2026',
    'mobile-app-development-saudi-arabia-2026',
    'mobile-app-development-uae-dubai-2026',
    'mvp-startup-algerie-2024',
    'partenaire-tech-startup-algerie',
    'plateforme-b2b-marketplace-algerie',
    'reussir-projet-digital-algerie',
    'saas-developpement-algerie-2024',
    'securite-maison-installation-complete-alarme-algerie-2026',
    'securite-maison-intelligente-cameras-alarmes-algerie-2026',
    'seo-referencement-algerie-2024',
    'serre-intelligente-agriculture-algerie-2026',
    'smart-home-promoteur-immobilier-algerie-2026',
    'solutions-informatiques-algerie-2026',
    'startup-algerie-guide-2024',
    'support-informatique-complet-usine-machines-pc-algerie-2026',
    'tahawwul-raqami-kuwait-ruiya-2035',
    'tahawwul-raqami-saudi-arabia-ruiya-2030',
    'tahawwul-raqami-uae-hukuma-dhakiya-2026',
    'tatwir-mawaqie-web-kuwait-2026',
    'tatwir-mawaqie-web-saudi-arabia-2026',
    'tatwir-mawaqie-web-uae-dubai-2026',
    'tatwir-tatbiqat-jawwal-kuwait-2026',
    'tatwir-tatbiqat-jawwal-saudi-arabia-2026',
    'tatwir-tatbiqat-jawwal-uae-dubai-2026',
    'tendances-tech-algerie-2025',
    'tijara-iliktruniya-kuwait-knet-2026',
    'tijara-iliktruniya-saudi-arabia-mada-2026',
    'tijara-iliktruniya-uae-dubai-2026',
    'transformation-digitale-algerie-2024',
    'web-development-company-kuwait-2026',
    'web-development-company-saudi-arabia-2026',
    'web-development-company-uae-dubai-2026',
  ];

  const blogPages = blogSlugs.map(slug => ({
    path: `/blog/${slug}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  // ═══════════════════════════════════════
  // 3. SERVICE PAGES (6 services × 3 slug variants)
  // ═══════════════════════════════════════
  const serviceSlugs = [
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

  const servicePages = serviceSlugs.map(slug => ({
    path: `/services/${slug}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.85',
  }));

  // ═══════════════════════════════════════
  // 4. SOLUTION PAGES
  // ═══════════════════════════════════════
  const solutionSlugs = [
    'digitalisation-algerie',
    'digitalisation-education-algerie',
    'digitalisation-justice-algerie',
    'digitalisation-sante-algerie',
    'intelligence-artificielle-algerie',
    'intelligence-artificielle-maroc',
    'intelligence-artificielle-mena',
    'intelligence-artificielle-tunisie',
    // Dynamic solution slugs
    'applications-mobiles-flutter-react-native-algerie',
    'creation-site-web-professionnel-algerie',
    'consulting-technologique-strategie-digitale-algerie',
    'cybersecurite-pme-protection-donnees-algerie',
  ];

  const solutionPages = solutionSlugs.map(slug => ({
    path: `/solutions/${slug}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.85',
  }));

  // ═══════════════════════════════════════
  // 5. LOCATION PAGES (10 cities)
  // ═══════════════════════════════════════
  const cities = ['alger', 'oran', 'constantine', 'setif', 'annaba', 'blida', 'batna', 'djelfa', 'tlemcen', 'bejaia'];

  const locationPages = cities.map(city => ({
    path: `/locations/${city}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  // ═══════════════════════════════════════
  // 6. SMART HOME & CAMERAS CITY PAGES
  // ═══════════════════════════════════════
  const smartHomeCities = [
    'alger', 'oran', 'constantine', 'setif', 'annaba', 'blida', 'batna',
    'tlemcen', 'bejaia', 'tizi-ouzou', 'djelfa', 'biskra', 'chlef',
    'skikda', 'mostaganem', 'medea', 'msila', 'bordj-bou-arreridj',
    'el-oued', 'jijel', 'ghardaia', 'ouargla', 'relizane', 'sidi-bel-abbes',
  ];

  const smartHomePages = smartHomeCities.map(city => ({
    path: `/services/smart-home/${city}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const cameraPages = smartHomeCities.map(city => ({
    path: `/services/cameras-surveillance/${city}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  // ═══════════════════════════════════════
  // COMBINE ALL URLs
  // ═══════════════════════════════════════
  const allUrls = [
    ...staticPages,
    ...blogPages,
    ...servicePages,
    ...solutionPages,
    ...locationPages,
    ...smartHomePages,
    ...cameraPages,
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
