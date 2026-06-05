/* eslint-disable */
// Reads src/data/blogs.js + src/pages/blog/*.{jsx,js}, classifies each blog
// into INSIGHTS / BLOG / AGENCY tiers, writes BLOG_INVENTORY.md at repo root.
// Pure read + classify — no deletes, no moves.

const fs = require('fs');
const path = require('path');
const { blogs } = require('../src/data/blogs.js');

const dataMap = Object.fromEntries(blogs.map(b => [b.slug, b]));
const files = fs.readdirSync('src/pages/blog')
  .filter(f => (f.endsWith('.jsx') || f.endsWith('.js')) && f !== 'index.jsx' && f !== '[slug].jsx')
  .map(f => f.replace(/\.(jsx|js)$/, ''));
const allSlugs = new Set([...Object.keys(dataMap), ...files]);

function fileTitle(slug) {
  const candidates = [`${slug}.jsx`, `${slug}.js`];
  for (const c of candidates) {
    const p = path.join('src/pages/blog', c);
    if (fs.existsSync(p)) {
      const txt = fs.readFileSync(p, 'utf8');
      const m =
        txt.match(/title:\s*['"`]([^'"`]+)['"`]/) ||
        txt.match(/<title>([^<]+)<\/title>/) ||
        txt.match(/metaTitle:\s*['"`]([^'"`]+)['"`]/);
      if (m) return m[1].slice(0, 110);
    }
  }
  return '';
}

function classify(slug) {
  const s = slug.toLowerCase();

  const agencyHits = [
    /smart-home|maison-intelligente/,
    /camera|surveillance|alarme/,
    /securite-maison|economie-energie-maison/,
    /^agence-web-/, /meilleure-agence-web/, /^agence-digitale-mena/,
    /^agence-developpement-web-(alger|setif)/,
    /cout-developpement-application/, /prix-application-mobile-algerie-2026/, /prix-site-web-algerie-2026/, /^app-cost-in-algeria/,
    /comment-choisir-developpeur/, /comment-creer-application-mobile/,
    /^creation-site-web-(alger|setif|2024|algerie-2024)/, /developpement-site-web-algerie-2026/,
    /developpeur-web-setif/, /e-commerce-setif/, /application-mobile-setif/, /logiciel-gestion-setif/,
    /freelance-vs-agence-algerie/,
    /^seo-algerie/, /^seo-referencement/,
    /marketing-digital-algerie/,
    /agence-web-algerie-2024/,
    /support-informatique-complet-usine/, /informatique-industrielle-algerie-maintenance/, /depannage-logiciel-materiel/,
    /maintenance-support-application-algerie/,
    /partenaire-tech-startup-algerie/, /accompagnement-startup-tech-algerie/, /reussir-projet-digital-algerie/,
    /digitaliser-entreprise-algerie-ne-perdez-plus/,
  ];
  if (agencyHits.some(r => r.test(s))) return { tier: 'AGENCY', reason: agencyReason(s) };

  const insightsHits = [
    /multi-agent/, /high-performance-computing|calcul-haute-performance/,
    /ai-infrastructure|infrastructure-ia/,
    /simulation-optimisation-ia/, /plateforme-ia-industrielle/,
    /developpement-logiciel-bancaire/, /ia-fintech-banque/,
    /ia-pme-algeriennes-cas-usage/,
    /digitaliser-entreprise-algerie-par-ou-commencer-2026/,
    /freelance-vs-agence-vs-atelier-ingenierie/,
    /odoo-vs-erp-sur-mesure-algerie-2026/,
    /signes-logiciel-sur-mesure/,
    /hub71-startup-engineering-partner/,
    /ia-generative-chatgpt-claude/,
    /ia-analyse-predictive/, /ia-automatisation-processus-rpa/, /ia-computer-vision-industrie/,
    /intelligence-artificielle-automatisation-business/,
    /ia-ecommerce-personnalisation/, /chatbot-whatsapp-ia-entreprise/,
    /integration-cib-edahabia-satim-guide-technique/,
  ];
  if (insightsHits.some(r => r.test(s))) return { tier: 'INSIGHTS', reason: insightsReason(s) };

  return { tier: 'BLOG', reason: blogReason(s) };
}

function agencyReason(s) {
  if (/smart-home|maison-intelligente|camera|surveillance|alarme|securite-maison|economie-energie/.test(s)) return 'Smart-home / cameras (off-positioning)';
  if (/setif/.test(s)) return 'Sétif-targeted (city SEO, Sétif-as-HQ adjacent)';
  if (/cout|prix|app-cost/.test(s)) return 'Cheap-pricing framing';
  if (/agence-web|meilleure-agence|agence-digitale|agence-developpement-web/.test(s)) return 'Generic agency framing';
  if (/freelance-vs-agence-algerie/.test(s)) return 'Generic SMB framing';
  if (/seo-|marketing-digital/.test(s)) return 'SEO/marketing — not core engineering';
  if (/support-informatique|informatique-industrielle|depannage|maintenance-support/.test(s)) return 'IT support — off-positioning';
  if (/comment-choisir|comment-creer|partenaire-tech|accompagnement-startup|reussir-projet|ne-perdez/.test(s)) return 'Generic SMB how-to';
  return 'Off-positioning';
}

function insightsReason(s) {
  if (/multi-agent/.test(s)) return 'Multi-agent AI (advanced)';
  if (/high-performance|calcul-haute/.test(s)) return 'HPC (advanced)';
  if (/ai-infrastructure|infrastructure-ia/.test(s)) return 'AI infrastructure / MLOps';
  if (/bancaire|fintech-banque/.test(s)) return 'Banking (regulated)';
  if (/cib-edahabia-satim/.test(s)) return 'Banking integration (regulated)';
  if (/simulation-optimisation|plateforme-ia-industrielle|computer-vision-industrie/.test(s)) return 'Industrial AI (regulated)';
  if (/odoo-vs-erp|signes-logiciel-sur-mesure|atelier-ingenierie/.test(s)) return 'ERP / engineering thought leadership';
  if (/hub71/.test(s)) return 'Gulf market (sharp)';
  if (/ia-pme-algeriennes-cas-usage|automatisation-processus-rpa|analyse-predictive/.test(s)) return 'Applied AI (sharp)';
  if (/digitaliser-entreprise-algerie-par-ou-commencer/.test(s)) return 'Digitisation strategy (sharp)';
  return 'Sharp / regulated';
}

function blogReason(s) {
  if (/kuwait|saudi|uae|dubai|abu-dhabi|tahawwul|tatwir|tijara|hulul|barnamij/.test(s)) return 'Gulf market — broad';
  if (/maroc|tunisie|tunisia|france|europe|deutschland|espana|portugal/.test(s)) return 'Maghreb / Europe market — broad';
  if (/oran|constantine/.test(s)) return 'Algeria city — broad';
  if (/agriculture|elevage|serre/.test(s)) return 'Agriculture vertical';
  if (/logiciel-(crm|erp|rh|comptabilite|hotel|immobilier|pharmacie|clinique|ecole|wms|gmao|ged|caisse)/.test(s)) return 'SMB software vertical';
  if (/application-(mobile|sante|immobilier|restaurant|reservation|gestion|livraison)/.test(s)) return 'App vertical';
  if (/developpement-(react|node|python|flutter|api)/.test(s)) return 'Dev stack content';
  if (/cybersecurite|cloud-computing|devops/.test(s)) return 'Tech stack / cybersec';
  if (/transformation-digitale/.test(s)) return 'Digital transformation';
  if (/fintech-algerie/.test(s)) return 'Fintech (broad)';
  if (/edtech|education/.test(s)) return 'EdTech vertical';
  if (/saas/.test(s)) return 'SaaS content';
  if (/mvp-startup|startup-algerie|startup-tech/.test(s)) return 'Startup content';
  if (/intelligence-artificielle-algerie-mena|intelligence-artificielle-algerie-2026/.test(s)) return 'AI overview (broad)';
  if (/^ia-/.test(s)) return 'IA broad';
  if (/site-web-restaurant|application-livraison|application-reservation|application-gestion-stock|gestion-flotte/.test(s)) return 'Vertical app — broad';
  if (/plateforme-saas|plateforme-b2b/.test(s)) return 'Platform vertical';
  if (/tableau-de-bord|business-intelligence/.test(s)) return 'BI / dashboards';
  return 'Broad / SMB';
}

const rows = [];
for (const slug of allSlugs) {
  const data = dataMap[slug];
  const title = data?.title || fileTitle(slug) || '(no title — standalone file)';
  const date = data?.date || '';
  const category = data?.category || '';
  const lang = /^(tahawwul|tatwir|tijara|hulul|barnamij)/.test(slug) ? 'ar' :
               /(deutschland|dach)/.test(slug) ? 'de' :
               /(espana|portugal)/.test(slug) ? 'es' :
               /algerie|alger\b/.test(slug) ? 'fr' :
               /(kuwait|saudi|uae|dubai|abu-dhabi|france|europe)/.test(slug) ? 'en/fr' :
               'en';
  const { tier, reason } = classify(slug);
  rows.push({
    slug, title: title.slice(0, 95), tier, reason, lang, date, category,
    inData: !!data, hasFile: files.includes(slug),
  });
}

const tierOrder = { INSIGHTS: 0, BLOG: 1, AGENCY: 2 };
rows.sort((a, b) => {
  if (tierOrder[a.tier] !== tierOrder[b.tier]) return tierOrder[a.tier] - tierOrder[b.tier];
  return (b.date || '').localeCompare(a.date || '');
});

const counts = rows.reduce((acc, r) => { acc[r.tier] = (acc[r.tier] || 0) + 1; return acc; }, {});
const orphansData = rows.filter(r => r.inData && !r.hasFile).map(r => r.slug);
const orphansFile = rows.filter(r => !r.inData && r.hasFile).map(r => r.slug);

let md = '';
md += '# Blog Inventory — Categorization Audit\n\n';
md += `_Generated ${new Date().toISOString().slice(0, 10)} — ${rows.length} unique blog slugs across \`src/data/blogs.js\` and \`src/pages/blog/*.{jsx,js}\`._\n\n`;
md += '## Summary\n\n';
md += '| Tier | Count | Means |\n|---|---|---|\n';
md += `| **INSIGHTS** | ${counts.INSIGHTS || 0} | Sharp / regulated industries / advanced AI / engineering thought leadership. Candidates to migrate to \`/insights/\` or relaunch as company-tier content. |\n`;
md += `| **BLOG** | ${counts.BLOG || 0} | Broad / SMB / market-targeted (logiciels CRM, mobile apps, vertical SaaS, country-targeted MENA & Europe). Stays at \`/blog/\` if you relaunch a broad blog. |\n`;
md += `| **AGENCY** | ${counts.AGENCY || 0} | Legacy off-positioning — smart home, cameras, cheap-pricing, Sétif-as-HQ adjacent, generic agency framing. **Not deleted** — earmarked for a separate decision later. |\n`;
md += `| **TOTAL** | ${rows.length} | |\n\n`;

md += '## Notes\n\n';
md += `- Auto-classification by slug pattern. Override anything you disagree with — this is a starting point.\n`;
md += `- ${orphansData.length} entries in \`blogs.js\` without a matching \`.jsx/.js\` file: ${orphansData.join(', ') || '—'}\n`;
md += `- ${orphansFile.length} standalone \`.jsx/.js\` files not in \`blogs.js\`. \`Source\` column shows where each entry lives: data+file (canonical), data only (orphan in JSON), standalone (full editorial page).\n\n`;

for (const tier of ['INSIGHTS', 'BLOG', 'AGENCY']) {
  const tierRows = rows.filter(r => r.tier === tier);
  md += `## ${tier} (${tierRows.length})\n\n`;
  md += '| # | Slug | Title | Reason | Lang | Date | Source |\n';
  md += '|---|---|---|---|---|---|---|\n';
  tierRows.forEach((r, i) => {
    const src = r.inData && r.hasFile ? 'data+file' : r.inData ? 'data only' : 'standalone';
    const safeTitle = r.title.replace(/\|/g, '\\|');
    md += `| ${i + 1} | \`${r.slug}\` | ${safeTitle} | ${r.reason} | ${r.lang} | ${r.date || '—'} | ${src} |\n`;
  });
  md += '\n';
}

fs.writeFileSync('BLOG_INVENTORY.md', md);
console.log('Wrote BLOG_INVENTORY.md');
console.log('Counts:', counts);
console.log('Total:', rows.length);
