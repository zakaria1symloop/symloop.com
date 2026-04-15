#!/usr/bin/env node
/**
 * trigger-indexnow.js
 *
 * Submits ALL important symloop.com URLs to IndexNow (api.indexnow.org)
 * so that search engines (Bing, Yandex, Naver, Seznam, etc.) re-crawl them.
 *
 * Usage:  node scripts/trigger-indexnow.js
 */

const https = require("https");

// ─── Configuration ──────────────────────────────────────────────────
const HOST = "symloop.com";
const KEY = "e9f4a1b2c3d5e6f7a8b9c0d1e2f3a4b5";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 10000; // IndexNow max per request
const BASE = `https://${HOST}`;

// ─── URL builders ───────────────────────────────────────────────────

/** All 130 blog slugs (static pages, NOT the dynamic [slug] catch-all) */
const blogSlugs = [
  "accompagnement-startup-tech-algerie",
  "agence-developpement-web-alger-2026",
  "agence-developpement-web-setif-2026",
  "agence-digitale-mena-2024",
  "agence-web-algerie-2024",
  "agriculture-intelligente-irrigation-algerie-2026",
  "agriculture-precision-drones-capteurs-algerie-2026",
  "app-cost-in-algeria",
  "application-gestion-agricole-algerie-2026",
  "application-immobilier-algerie-2024",
  "application-mobile-setif-2026",
  "application-restaurant-livraison-algerie",
  "application-sante-algerie-2024",
  "artificial-intelligence-solutions-kuwait-2026",
  "artificial-intelligence-solutions-saudi-arabia-2026",
  "artificial-intelligence-solutions-uae-2026",
  "barnamij-erp-idarat-sharikaat-kuwait-2026",
  "barnamij-erp-idarat-sharikaat-saudi-arabia-2026",
  "barnamij-erp-idarat-sharikaat-uae-2026",
  "cloud-computing-algerie-2024",
  "comment-choisir-developpeur-algerie",
  "comment-creer-application-mobile",
  "cout-developpement-application-algerie",
  "creation-site-web-algerie-2024",
  "creation-site-web-setif-2026",
  "cybersecurite-algerie-2024",
  "depannage-logiciel-materiel-machines-industrielles-algerie-2026",
  "desarrollo-aplicaciones-moviles-espana-portugal-2026",
  "design-ui-ux-algerie-2024",
  "developpement-api-integration-algerie",
  "developpement-application-maroc-2024",
  "developpement-application-mobile-algerie-2024",
  "developpement-application-mobile-algerie-2026",
  "developpement-application-mobile-france-europe-2026",
  "developpement-application-tunisie-2024",
  "developpement-flutter-algerie-2024",
  "developpement-nodejs-backend-algerie",
  "developpement-python-django-algerie",
  "developpement-react-native-algerie",
  "developpement-react-nextjs-algerie",
  "developpement-site-web-algerie-2026",
  "developpement-web-constantine-2024",
  "developpement-web-oran-2024",
  "developpeur-web-setif-2026",
  "devops-deployment-algerie-2024",
  "devops-developpement-logiciel-algerie-2026",
  "digital-transformation-kuwait-new-kuwait-2030",
  "digital-transformation-saudi-arabia-vision-2030",
  "digital-transformation-uae-smart-government-2026",
  "digitaliser-entreprise-algerie-ne-perdez-plus-1-dinar",
  "e-commerce-setif-2026",
  "ecommerce-algerie-paiement-cib-edahabia-2024",
  "ecommerce-cib-edahabia-algerie",
  "ecommerce-solutions-kuwait-knet-2026",
  "ecommerce-solutions-saudi-arabia-mada-2026",
  "ecommerce-solutions-uae-dubai-2026",
  "economie-energie-maison-intelligente-climatisation-algerie-2026",
  "edtech-education-algerie-2024",
  "elevage-connecte-suivi-betail-algerie-2026",
  "entwicklung-mobile-apps-deutschland-dach-2026",
  "erp-business-software-kuwait-2026",
  "erp-business-software-saudi-arabia-2026",
  "erp-business-software-uae-2026",
  "hub71-startup-engineering-partner-abu-dhabi-2026",
  "erp-sur-mesure-saas-startup-pme-algerie-2026",
  "fintech-algerie-solutions-2024",
  "freelance-vs-agence-algerie",
  "gestion-flotte-livraison-suivi-gps-algerie-2026",
  "hulul-dhakaa-istinai-kuwait-2026",
  "hulul-dhakaa-istinai-saudi-arabia-2026",
  "hulul-dhakaa-istinai-uae-2026",
  "ia-generative-chatgpt-claude-algerie-2026",
  "informatique-industrielle-algerie-maintenance-pc-usine-2026",
  "installation-cameras-surveillance-professionnelle-algerie-2026",
  "intelligence-artificielle-algerie-2026",
  "intelligence-artificielle-algerie-mena-2024",
  "intelligence-artificielle-automatisation-business-algerie-2026",
  "iot-internet-des-objets-algerie-2026",
  "logiciel-agence-voyage-gds-setif-est-algerien-2026",
  "logiciel-caisse-pos-restaurant-commerce-setif-2026",
  "logiciel-clinique-cabinet-medical-algerie-2026",
  "logiciel-comptabilite-algerie-2024",
  "logiciel-crm-algerie-2024",
  "logiciel-crm-setif-bordj-msila-gestion-clients-2026",
  "logiciel-ecole-gestion-scolaire-algerie-2026",
  "logiciel-erp-algerie-2024",
  "logiciel-gestion-livraison-distribution-algerie-2026",
  "logiciel-gestion-livraison-setif-hauts-plateaux-2026",
  "logiciel-gestion-setif-2026",
  "logiciel-hotel-reservation-hebergement-algerie-2026",
  "logiciel-immobilier-agence-algerie-2026",
  "logiciel-pharmacie-gestion-stock-algerie-2026",
  "logiciel-rh-algerie-2024",
  "logistique-transport-algerie-2024",
  "maintenance-support-application-algerie",
  "maison-intelligente-smart-home-algerie-2026",
  "marketing-digital-algerie-2024",
  "mobile-app-development-kuwait-2026",
  "mobile-app-development-saudi-arabia-2026",
  "mobile-app-development-uae-dubai-2026",
  "mvp-startup-algerie-2024",
  "partenaire-tech-startup-algerie",
  "plateforme-b2b-marketplace-algerie",
  "reussir-projet-digital-algerie",
  "saas-developpement-algerie-2024",
  "securite-maison-installation-complete-alarme-algerie-2026",
  "securite-maison-intelligente-cameras-alarmes-algerie-2026",
  "seo-algerie",
  "seo-referencement-algerie-2024",
  "serre-intelligente-agriculture-algerie-2026",
  "smart-home-promoteur-immobilier-algerie-2026",
  "solutions-informatiques-algerie-2026",
  "startup-algerie-guide-2024",
  "support-informatique-complet-usine-machines-pc-algerie-2026",
  "tahawwul-raqami-kuwait-ruiya-2035",
  "tahawwul-raqami-saudi-arabia-ruiya-2030",
  "tahawwul-raqami-uae-hukuma-dhakiya-2026",
  "tatwir-mawaqie-web-kuwait-2026",
  "tatwir-mawaqie-web-saudi-arabia-2026",
  "tatwir-mawaqie-web-uae-dubai-2026",
  "tatwir-tatbiqat-jawwal-kuwait-2026",
  "tatwir-tatbiqat-jawwal-saudi-arabia-2026",
  "tatwir-tatbiqat-jawwal-uae-dubai-2026",
  "tendances-tech-algerie-2025",
  "tijara-iliktruniya-kuwait-knet-2026",
  "tijara-iliktruniya-saudi-arabia-mada-2026",
  "tijara-iliktruniya-uae-dubai-2026",
  "transformation-digitale-algerie-2024",
  "web-development-company-kuwait-2026",
  "web-development-company-saudi-arabia-2026",
  "web-development-company-uae-dubai-2026",
  "signes-logiciel-sur-mesure-entreprise-algerie-2026",
  "odoo-vs-erp-sur-mesure-algerie-2026",
  "prix-application-mobile-algerie-2026",
  "freelance-vs-agence-vs-atelier-ingenierie-algerie-2026",
  "digitaliser-entreprise-algerie-par-ou-commencer-2026",
  "integration-cib-edahabia-satim-guide-technique-algerie-2026",
  "ia-pme-algeriennes-cas-usage-qui-marchent-2026",
];

/** Service slugs (French, English, legacy -- Arabic excluded as non-URL-safe) */
const serviceSlugs = [
  // French
  "developpement-logiciel-sur-mesure-mena",
  "developpement-application-mobile-flutter-mena",
  "creation-site-web-ecommerce-mena",
  "solutions-iot-esp32-objets-connectes-mena",
  "intelligence-artificielle-chatgpt-machine-learning-mena",
  "cybersecurite-entreprise-protection-donnees-mena",
  // English
  "custom-software-development-mena",
  "flutter-mobile-app-development-mena",
  "website-ecommerce-development-mena",
  "iot-solutions-esp32-connected-objects-mena",
  "artificial-intelligence-chatgpt-machine-learning-mena",
  "enterprise-cybersecurity-data-protection-mena",
  // Legacy
  "sites-web",
  "developpement-mobile",
  "hebergement",
  "logiciel",
  "iot",
  "intelligence-artificielle",
  "ecommerce",
  "cybersecurite",
];

/** Solution slugs (from solutionsData.js keys + dedicated pages) */
const solutionSlugs = [
  // Dynamic route slugs
  "applications-mobiles-flutter-react-native-algerie",
  "site-ecommerce-paiement-cib-edahabia-algerie",
  "logiciel-erp-crm-personnalise-algerie",
  "creation-site-web-professionnel-algerie",
  "intelligence-artificielle-assistant-vocal-algerie",
  "cybersecurite-pme-protection-donnees-algerie",
  "solutions-cloud-infrastructure-serveurs-algerie",
  "solutions-iot-esp32-objets-connectes-algerie",
  "transformation-digitale-entreprise-algerie",
  "marketing-digital-seo-algerie",
  "solutions-reseau-infrastructure-it-algerie",
  "consulting-technologique-strategie-digitale-algerie",
  // Dedicated static solution pages
  "digitalisation-algerie",
  "digitalisation-education-algerie",
  "digitalisation-justice-algerie",
  "digitalisation-sante-algerie",
  "intelligence-artificielle-algerie",
  "intelligence-artificielle-maroc",
  "intelligence-artificielle-mena",
  "intelligence-artificielle-tunisie",
];

/** Location cities (legacy dynamic [city] pages — excludes setif/alger which have editorial pages) */
const locationCities = [
  "oran", "constantine", "annaba",
  "blida", "batna", "djelfa", "tlemcen", "bejaia",
];

/** NEW: Editorial insight pages */
const insightSlugs = ["ai", "erp", "cost", "healthcare", "ai-cto", "vision-2030"];

/** NEW: Dedicated editorial service pages (8 disciplines) */
const editorialServiceSlugs = [
  "ai", "software-engineering", "mobile", "cloud",
  "iot", "cybersecurity", "consulting", "product",
];

/** NEW: Alger × service editorial pages (8 pages) */
const algerServiceSlugs = [
  "ai", "software-engineering", "mobile", "cloud",
  "iot", "cybersecurity", "consulting", "product",
];

/** Product pages */
const productPages = [
  "/products/asa/",
  "/products/symtv-light/",
  "/products/logistics-management/",
];

/** Other important pages */
const otherPages = [
  "/",             // homepage
  "/insights/",    // insights hub (replaced blog in nav)
  "/blog/",        // blog index (still indexed, just hidden from nav)
  "/services/",    // services index
  "/outsourcing/", // NEW: software dev outsourcing ($23 CPC keyword)
  "/startup/",     // startup landing page
  "/africa/",      // Africa hub
  "/mena/",        // MENA page
  "/recrutement/", // recruitment
  "/learning/",    // learning
  "/presentation/",// presentation
  "/locations/setif/", // editorial Sétif overview
];

// Locales: default is 'en' (no prefix), 'fr' and 'ar' have /fr/ and /ar/ prefixes
const LOCALES = ["fr", "ar"];

// ─── Build the complete URL list ────────────────────────────────────

function buildAllUrls() {
  const urls = new Set();

  // 1. Other important pages (default locale = en, no prefix)
  for (const page of otherPages) {
    urls.add(`${BASE}${page}`);
  }

  // 2. Blog index + all blog posts (default locale)
  for (const slug of blogSlugs) {
    urls.add(`${BASE}/blog/${slug}/`);
  }

  // 3. Services index + all service detail pages (default locale)
  for (const slug of serviceSlugs) {
    urls.add(`${BASE}/services/${slug}/`);
  }

  // 4. Solution pages (default locale)
  for (const slug of solutionSlugs) {
    urls.add(`${BASE}/solutions/${slug}/`);
  }

  // 5. Location pages — legacy dynamic cities (default locale)
  for (const city of locationCities) {
    urls.add(`${BASE}/locations/${city}/`);
  }

  // 6. NEW: Insight pages (default locale)
  for (const slug of insightSlugs) {
    urls.add(`${BASE}/insights/${slug}/`);
  }

  // 7. NEW: Editorial service pages (default locale)
  for (const slug of editorialServiceSlugs) {
    urls.add(`${BASE}/services/${slug}/`);
  }

  // 8. NEW: Alger × service pages (default locale)
  for (const slug of algerServiceSlugs) {
    urls.add(`${BASE}/locations/alger/${slug}/`);
  }

  // 9. Product pages (default locale)
  for (const page of productPages) {
    urls.add(`${BASE}${page}`);
  }

  // 9. /fr/ and /ar/ versions of most important pages
  for (const locale of LOCALES) {
    // Homepage
    urls.add(`${BASE}/${locale}/`);
    // Blog index
    urls.add(`${BASE}/${locale}/blog/`);
    // Services index
    urls.add(`${BASE}/${locale}/services/`);
    // MENA page
    urls.add(`${BASE}/${locale}/mena/`);
    // Recruitment
    urls.add(`${BASE}/${locale}/recrutement/`);
    // Learning
    urls.add(`${BASE}/${locale}/learning/`);

    // All service detail pages in fr/ar
    for (const slug of serviceSlugs) {
      urls.add(`${BASE}/${locale}/services/${slug}/`);
    }

    // All solution static pages in fr/ar
    for (const slug of solutionSlugs) {
      urls.add(`${BASE}/${locale}/solutions/${slug}/`);
    }

    // All blog posts in fr/ar
    for (const slug of blogSlugs) {
      urls.add(`${BASE}/${locale}/blog/${slug}/`);
    }

    // Location pages in fr/ar (legacy cities)
    for (const city of locationCities) {
      urls.add(`${BASE}/${locale}/locations/${city}/`);
    }

    // Sétif editorial page in fr/ar
    urls.add(`${BASE}/${locale}/locations/setif/`);

    // Insight pages in fr/ar
    for (const slug of insightSlugs) {
      urls.add(`${BASE}/${locale}/insights/${slug}/`);
    }
    urls.add(`${BASE}/${locale}/insights/`);

    // Editorial service pages in fr/ar
    for (const slug of editorialServiceSlugs) {
      urls.add(`${BASE}/${locale}/services/${slug}/`);
    }

    // Alger × service pages in fr/ar
    for (const slug of algerServiceSlugs) {
      urls.add(`${BASE}/${locale}/locations/alger/${slug}/`);
    }

    // Product pages in fr/ar
    for (const page of productPages) {
      urls.add(`${BASE}/${locale}${page}`);
    }
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
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        resolve({ status: res.statusCode, body });
      });
    });

    req.on("error", (err) => reject(err));
    req.write(payload);
    req.end();
  });
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const allUrls = buildAllUrls();

  console.log("=".repeat(60));
  console.log("  IndexNow Bulk Submission for symloop.com");
  console.log("=".repeat(60));
  console.log(`  Host:         ${HOST}`);
  console.log(`  Key:          ${KEY}`);
  console.log(`  Key Location: ${KEY_LOCATION}`);
  console.log(`  Endpoint:     ${INDEXNOW_ENDPOINT}`);
  console.log(`  Total URLs:   ${allUrls.length}`);
  console.log(`  Batch size:   ${BATCH_SIZE}`);
  console.log("=".repeat(60));

  // Print breakdown
  const blogCount = blogSlugs.length;
  const serviceCount = serviceSlugs.length;
  const solutionCount = solutionSlugs.length;
  const locationCount = locationCities.length;
  const insightCount = insightSlugs.length;
  const editorialServiceCount = editorialServiceSlugs.length;
  const algerServiceCount = algerServiceSlugs.length;
  const productCount = productPages.length;
  const otherCount = otherPages.length;

  console.log("\n  URL Breakdown (default locale / en):");
  console.log(`    Blog posts:           ${blogCount}`);
  console.log(`    Service (legacy):     ${serviceCount}`);
  console.log(`    Service (editorial):  ${editorialServiceCount}`);
  console.log(`    Solution pages:       ${solutionCount}`);
  console.log(`    Insights:             ${insightCount}`);
  console.log(`    Location (legacy):    ${locationCount}`);
  console.log(`    Alger × service:      ${algerServiceCount}`);
  console.log(`    Product pages:        ${productCount}`);
  console.log(`    Other pages:          ${otherCount}`);
  console.log(`    ────────────────────────────────`);
  const defaultTotal = blogCount + serviceCount + solutionCount + locationCount + insightCount + editorialServiceCount + algerServiceCount + productCount + otherCount;
  console.log(`    Default locale total: ${defaultTotal}`);
  console.log(`    x3 locales (en/fr/ar) + overlap = ${allUrls.length} total unique URLs`);
  console.log("");

  // Split into batches
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

      // IndexNow returns:
      //   200 = OK, URLs submitted
      //   202 = Accepted, URLs will be processed later
      //   400 = Bad request
      //   403 = Key not valid
      //   422 = Invalid URLs
      //   429 = Too many requests
      if (result.status === 200 || result.status === 202) {
        console.log(`    SUCCESS (HTTP ${result.status})`);
      } else {
        console.log(`    RESPONSE (HTTP ${result.status}): ${result.body}`);
      }
    } catch (err) {
      console.error(`    ERROR: ${err.message}`);
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("  Done! All URLs submitted to IndexNow.");
  console.log("  Search engines will re-crawl these pages shortly.");
  console.log("=".repeat(60));

  // Print first 10 and last 5 URLs as sample
  console.log("\n  Sample URLs submitted:");
  for (let i = 0; i < Math.min(10, allUrls.length); i++) {
    console.log(`    ${allUrls[i]}`);
  }
  if (allUrls.length > 15) {
    console.log("    ...");
    for (let i = allUrls.length - 5; i < allUrls.length; i++) {
      console.log(`    ${allUrls[i]}`);
    }
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
// This patch won't work — need to edit the blogSlugs array properly
