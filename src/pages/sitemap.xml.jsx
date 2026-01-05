// Dynamic Sitemap Generator for Symloop
// This file generates the sitemap dynamically based on all pages

import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://symloop.com';

function generateSiteMap(pages) {
  const today = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}/fr/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/" />
  </url>

  <!-- Blog Index -->
  <url>
    <loc>${SITE_URL}/blog/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}/fr/blog/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/blog/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/blog/" />
  </url>

  <!-- Blog Posts -->
${pages.map(page => `  <url>
    <loc>${SITE_URL}/blog/${page.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority || '0.9'}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}/fr/blog/${page.slug}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/blog/${page.slug}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}/ar/blog/${page.slug}" />
  </url>`).join('\n')}

  <!-- Services -->
  <url>
    <loc>${SITE_URL}/services/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Solutions -->
  <url>
    <loc>${SITE_URL}/solutions/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Locations -->
  <url>
    <loc>${SITE_URL}/locations/alger/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/oran/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/constantine/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/setif/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/annaba/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/batna/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/blida/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/bejaia/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/tlemcen/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/locations/djelfa/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- MENA -->
  <url>
    <loc>${SITE_URL}/mena/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
</urlset>`;
}

function SiteMap() {
  // This component doesn't render anything
}

export async function getServerSideProps({ res }) {
  // Get all blog pages from the pages/blog directory
  const blogDir = path.join(process.cwd(), 'src/pages/blog');
  const files = fs.readdirSync(blogDir);

  const blogPages = files
    .filter(file => file.endsWith('.jsx') && !file.startsWith('[') && file !== 'index.jsx')
    .map(file => {
      const slug = file.replace('.jsx', '');
      // Set higher priority for 2026 posts (newer content)
      const priority = slug.includes('2026') ? '0.95' : '0.9';
      return { slug, priority };
    });

  const sitemap = generateSiteMap(blogPages);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
