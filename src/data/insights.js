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
    featured: false,   // shown only on /insights/ hub for now, not the homepage
    publishedAt: '2026-04-09',
  },
  // ── Future insights to add when ready ────────────────────────────────────
  // To add more insights:
  //   1. Add an entry here
  //   2. Add the i18n strings under home.insights.items.{key} in all 3 locales
  //   3. Add the cover prompt in scripts/generate-insight-covers.mjs
  //   4. Run: GOOGLE_API_KEY=xxx node scripts/generate-insight-covers.mjs
];

// Helper: get only the featured insights for the homepage section
export const getFeaturedInsights = () => INSIGHTS.filter(i => i.featured);

// Helper: get all insights (for the /insights/ hub page)
export const getAllInsights = () => INSIGHTS;
