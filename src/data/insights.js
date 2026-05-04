// ============================================================================
// SYMLOOP — Insights catalog
//
// Single source of truth for the curated "reports" / "insights" list.
//
// Both the homepage <InsightsSection /> and the /insights/ hub page read from
// this file. Translation strings (title, kind, description, meta) live in
// public/locales/{en,fr,ar}/common.json under home.insights.items.{key} —
// keep the keys in sync.
//
// Cover images live in public/insights/cover-{key}.jpg and are generated
// offline by scripts/generate-insight-covers.mjs (Nano Banana Pro / Imagen).
// ============================================================================

export const INSIGHTS = [
  {
    key:     'ai',
    path:    '/insights/ai/',
    cover:   '/insights/cover-ai.jpg',
    featured: true,    // shown on the homepage section
    publishedAt: '2026-04-08',
  },
  {
    key:     'erp',
    path:    '/insights/erp/',
    cover:   '/insights/cover-erp.jpg',
    featured: true,
    publishedAt: '2026-04-08',
  },
  {
    key:     'cost',
    path:    '/insights/cost/',
    cover:   '/insights/cover-cost.jpg',
    featured: true,
    publishedAt: '2026-03-15',
  },
  {
    key:     'healthcare',
    path:    '/insights/healthcare/',
    cover:   '/insights/cover-healthcare.jpg',
    featured: false,
    publishedAt: '2026-04-09',
  },
  {
    key:     'ai-cto',
    path:    '/insights/ai-cto/',
    cover:   '/insights/cover-ai-cto.jpg',
    featured: false,
    publishedAt: '2026-04-10',
  },
  {
    key:     'vision-2030',
    path:    '/insights/vision-2030/',
    cover:   '/insights/cover-2030.jpg',
    featured: false,
    publishedAt: '2026-04-10',
  },
  {
    key:     'oil-gas',
    path:    '/insights/oil-gas/',
    cover:   '/insights/cover-oil-gas.jpg',
    featured: true,
    publishedAt: '2026-04-17',
  },
  // ── Future insights to add when ready ────────────────────────────────────
  // To add more insights:
  //   1. Add an entry here
  //   2. Add the i18n strings under home.insights.items.{key} in all 3 locales
  //   3. Add the cover prompt in scripts/generate-insight-covers.mjs
  //   4. Run: GOOGLE_API_KEY=xxx node scripts/generate-insight-covers.mjs
];

// Helper: get the 3 LATEST insights by publishedAt date (newest first).
// Used on the homepage so visitors always see the freshest work.
// The `featured` flag on each entry is kept as a manual override — if set,
// the entry is guaranteed to appear. Otherwise date sorting takes over.
export const getFeaturedInsights = () => {
  const byDateDesc = [...INSIGHTS].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  return byDateDesc.slice(0, 3);
};

// Helper: get all insights (for the /insights/ hub page), sorted newest first
export const getAllInsights = () =>
  [...INSIGHTS].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
