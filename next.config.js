/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');


const nextConfig = {
  trailingSlash: true,
  turbopack: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
  },
  // Enable i18n for all builds
  i18n,
  // Compression for better performance
  compress: true,
  // Power optimizations
  poweredByHeader: false,
  // Strict mode for React
  reactStrictMode: true,

  // ═══════════════════════════════════════
  // 301 REDIRECTS — Fix 404s + www→non-www + .html → clean URLs
  // ═══════════════════════════════════════
  async redirects() {
    return [
      // ── Host canonicalization is handled by Vercel (symloop.com → www.symloop.com).
      //    Do NOT add an inverse rule here — it would create a redirect loop.

      // ── Stray /index.html artifacts (kill the duplicate of homepage) ──
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:locale(en|fr|ar)/index.html', destination: '/:locale/', permanent: true },

      // ── Old blog slugs that no longer exist ──
      { source: '/blog/hebergement-cloud-algerie/', destination: '/blog/cloud-computing-algerie-2024/', permanent: true },
      { source: '/blog/developpement-ecommerce-algerie-2024/', destination: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', permanent: true },
      { source: '/blog/developpement-application-mobile-algerie/', destination: '/blog/developpement-application-mobile-algerie-2026/', permanent: true },

      // ── Solutions pages that were never created ──
      { source: '/solutions/intelligence-artificielle-emirats/', destination: '/solutions/intelligence-artificielle-mena/', permanent: true },
      { source: '/solutions/intelligence-artificielle-egypte/', destination: '/solutions/intelligence-artificielle-mena/', permanent: true },
      { source: '/solutions/intelligence-artificielle-qatar/', destination: '/solutions/intelligence-artificielle-mena/', permanent: true },
      { source: '/solutions/chatbot-algerie/', destination: '/blog/ia-generative-chatgpt-claude-algerie-2026/', permanent: true },
      { source: '/solutions/chatbot-maroc/', destination: '/blog/ia-generative-chatgpt-claude-algerie-2026/', permanent: true },

      // ── Dynamic route literal leak (URL-encoded form only — raw brackets are not valid path-to-regexp sources) ──
      { source: '/services/cameras-surveillance/%5Bcity%5D/', destination: '/services/', permanent: true },
      { source: '/services/smart-home/%5Bcity%5D/', destination: '/services/', permanent: true },

      // ── Arabic path that doesn't exist (URL-encoded — Next.js redirect sources require ASCII) ──
      { source: '/%D8%AE%D8%A8%D8%B1/', destination: '/', permanent: true },
      { source: '/%D8%AE%D8%A8%D8%B1', destination: '/', permanent: true },

      // ── Old www.symloop.com blog paths (without /blog/ prefix) ──
      { source: '/developpement-application-mobile-algerie/', destination: '/blog/developpement-application-mobile-algerie-2026/', permanent: true },
      { source: '/creation-site-web-algerie/', destination: '/blog/creation-site-web-algerie-2024/', permanent: true },
      { source: '/ecommerce-algerie/', destination: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', permanent: true },

      // ── Old service slugs ──
      // Note: /services/iot/ removed from this list — there is now a dedicated
      // editorial /services/iot.jsx page that must not be redirected.
      { source: '/services/sites-web/', destination: '/services/creation-site-web-ecommerce-mena/', permanent: true },
      { source: '/services/developpement-mobile/', destination: '/services/developpement-application-mobile-flutter-mena/', permanent: true },
      { source: '/services/logiciel/', destination: '/services/developpement-logiciel-sur-mesure-mena/', permanent: true },
      { source: '/services/hebergement/', destination: '/services/solutions-iot-esp32-objets-connectes-mena/', permanent: true },
      { source: '/services/ecommerce/', destination: '/services/creation-site-web-ecommerce-mena/', permanent: true },

      // ── Catch common misspellings / old patterns ──
      { source: '/blog/developpement-web-algerie/', destination: '/blog/developpement-site-web-algerie-2026/', permanent: true },
      { source: '/blog/application-mobile-algerie/', destination: '/blog/developpement-application-mobile-algerie-2026/', permanent: true },
      { source: '/blog/intelligence-artificielle-algerie/', destination: '/blog/intelligence-artificielle-algerie-2026/', permanent: true },
      { source: '/blog/iot-algerie/', destination: '/blog/iot-internet-des-objets-algerie-2026/', permanent: true },
      { source: '/blog/smart-home-algerie/', destination: '/blog/maison-intelligente-smart-home-algerie-2026/', permanent: true },
      { source: '/blog/erp-algerie/', destination: '/blog/erp-sur-mesure-saas-startup-pme-algerie-2026/', permanent: true },
      { source: '/blog/devops-algerie/', destination: '/blog/devops-developpement-logiciel-algerie-2026/', permanent: true },
    ];
  },

  // ═══════════════════════════════════════
  // HEADERS — Security, agent discovery (RFC 8288 Link headers), .well-known content-types
  // ═══════════════════════════════════════
  async headers() {
    // RFC 8288 Link header value advertising the agent-discovery resources we publish.
    // Multiple links concatenated in a single header per RFC 8288 §3.5.
    const agentDiscoveryLink = [
      '</.well-known/agent-skills/index.json>; rel="https://agentskills.io/rel/skills-index"; type="application/json"',
      '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
      '</.well-known/mcp/server-card.json>; rel="https://modelcontextprotocol.io/rel/server-card"; type="application/json"',
      '</llms.txt>; rel="https://llmstxt.org/rel/llms"; type="text/plain"',
      '</sitemap.xml>; rel="sitemap"; type="application/xml"',
    ].join(', ');

    return [
      // Global security + agent-discovery Link headers on every page
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Link', value: agentDiscoveryLink },
        ],
      },
      // RFC 9727 — application/linkset+json content-type for the API catalog
      {
        source: '/.well-known/api-catalog',
        headers: [
          { key: 'Content-Type', value: 'application/linkset+json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
      // Agent skills index — application/json (per Agent Skills Discovery RFC v0.2.0)
      {
        source: '/.well-known/agent-skills/index.json',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
      // MCP server card — application/json
      {
        source: '/.well-known/mcp/server-card.json',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
      // SKILL.md files — text/markdown
      {
        source: '/.well-known/agent-skills/:skill/SKILL.md',
        headers: [
          { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, must-revalidate' },
        ],
      },
    ];
  },
}

module.exports = nextConfig