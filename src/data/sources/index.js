// Registry of live source pages (sourced, dated lists). The sitemap reads it: add one line here
// each time a source page is published. `slug` is the top-level path, without slashes.
import { WILAYA_KEYS } from './algeria-by-wilaya';

export const SOURCE_PAGES = [
  { slug: 'entreprises-informatiques-algerie', verifiedOn: '2026-11-25' },
  { slug: 'agences-web-algerie', verifiedOn: '2026-11-25' },
  { slug: 'startups-algeriennes', verifiedOn: '2026-11-25' },
  { slug: 'entreprises-ia-algerie', verifiedOn: '2026-11-25' },
  { slug: 'logiciels-gestion-scolaire-algerie', verifiedOn: '2026-11-25' },
  { slug: 'solutions-paiement-en-ligne-algerie', verifiedOn: '2026-11-25' },
  { slug: 'logiciels-erp-algerie', verifiedOn: '2026-11-25' },
  { slug: 'hebergeurs-web-algerie', verifiedOn: '2026-11-25' },
  // one page per wilaya with verified companies
  ...WILAYA_KEYS.map((k) => ({ slug: `entreprises-informatiques/${k}`, verifiedOn: '2026-11-25' })),
];
