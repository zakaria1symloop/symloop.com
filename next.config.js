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
  // 301 REDIRECTS — Fix 404s in Google Search Console
  // ═══════════════════════════════════════
  async redirects() {
    return [
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

      // ── Dynamic route literal leak ──
      { source: '/services/cameras-surveillance/%5Bcity%5D/', destination: '/services/', permanent: true },
      { source: '/services/cameras-surveillance/\\[city\\]/', destination: '/services/', permanent: true },
      { source: '/services/smart-home/%5Bcity%5D/', destination: '/services/', permanent: true },
      { source: '/services/smart-home/\\[city\\]/', destination: '/services/', permanent: true },

      // ── Arabic path that doesn't exist ──
      { source: '/خبر/', destination: '/', permanent: true },
      { source: '/خبر', destination: '/', permanent: true },

      // ── Old www.symloop.com blog paths (without /blog/ prefix) ──
      { source: '/developpement-application-mobile-algerie/', destination: '/blog/developpement-application-mobile-algerie-2026/', permanent: true },
      { source: '/creation-site-web-algerie/', destination: '/blog/creation-site-web-algerie-2024/', permanent: true },
      { source: '/ecommerce-algerie/', destination: '/blog/ecommerce-algerie-paiement-cib-edahabia-2024/', permanent: true },

      // ── Old service slugs ──
      { source: '/services/sites-web/', destination: '/services/creation-site-web-ecommerce-mena/', permanent: true },
      { source: '/services/developpement-mobile/', destination: '/services/developpement-application-mobile-flutter-mena/', permanent: true },
      { source: '/services/logiciel/', destination: '/services/developpement-logiciel-sur-mesure-mena/', permanent: true },
      { source: '/services/hebergement/', destination: '/services/solutions-iot-esp32-objets-connectes-mena/', permanent: true },
      { source: '/services/ecommerce/', destination: '/services/creation-site-web-ecommerce-mena/', permanent: true },
      { source: '/services/iot/', destination: '/services/solutions-iot-esp32-objets-connectes-mena/', permanent: true },

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
  // HEADERS — Security, caching, www→non-www
  // ═══════════════════════════════════════
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
}

module.exports = nextConfig