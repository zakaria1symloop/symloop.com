import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * Comprehensive SEO Head component for Google and Bing optimization
 * Includes meta tags, Open Graph, Twitter Cards, and structured data
 */
export default function SEOHead({
  title,
  description,
  keywords,
  image = 'https://symloop.com/og-image.jpg',
  url,
  type = 'website',
  article = null,
  noindex = false,
  breadcrumbs = [],
  service = null,
  faq = [],
}) {
  const router = useRouter();
  const locale = router.locale || 'en';
  const currentUrl = url || `https://symloop.com${router.asPath}`;

  // Clean URL without query params for canonical
  const canonicalUrl = currentUrl.split('?')[0].replace(/\/$/, '');

  // Generate hreflang URLs
  const hreflangUrls = {
    en: canonicalUrl.replace(/^\/(fr|ar)\//, '/').replace('symloop.com/', 'symloop.com/'),
    fr: canonicalUrl.includes('/fr/') ? canonicalUrl : canonicalUrl.replace('symloop.com/', 'symloop.com/fr/'),
    ar: canonicalUrl.includes('/ar/') ? canonicalUrl : canonicalUrl.replace('symloop.com/', 'symloop.com/ar/'),
  };

  // Breadcrumb structured data
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  // Article structured data for blog posts
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || image,
    "author": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": "https://symloop.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "logo": {
        "@type": "ImageObject",
        "url": "https://symloop.com/sym-logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "inLanguage": locale === 'ar' ? 'ar-DZ' : locale === 'fr' ? 'fr-DZ' : 'en',
    "keywords": keywords
  } : null;

  // Service structured data
  const serviceSchema = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": "https://symloop.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "MENA Region, Algeria"
    },
    "hasOfferCatalog": service.offers ? {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.offers.map(offer => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description
        },
        "priceSpecification": offer.price ? {
          "@type": "PriceSpecification",
          "price": offer.price,
          "priceCurrency": "DZD"
        } : undefined
      }))
    } : undefined
  } : null;

  // FAQ structured data
  const faqSchema = faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="bingbot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Canonical and Language */}
      <link rel="canonical" href={canonicalUrl} />
      <meta httpEquiv="content-language" content={locale === 'ar' ? 'ar-DZ' : locale === 'fr' ? 'fr-DZ' : 'en'} />

      {/* Hreflang for multilingual SEO */}
      <link rel="alternate" hrefLang="en" href={hreflangUrls.en} />
      <link rel="alternate" hrefLang="fr" href={hreflangUrls.fr} />
      <link rel="alternate" hrefLang="ar" href={hreflangUrls.ar} />
      <link rel="alternate" hrefLang="x-default" href={hreflangUrls.en} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'fr' ? 'fr_DZ' : 'en_US'} />
      <meta property="og:site_name" content="Symloop Technology" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@symloop" />
      <meta name="twitter:creator" content="@symloop" />

      {/* Google specific */}
      <meta name="google" content="notranslate" />
      <meta name="format-detection" content="telephone=no" />

      {/* Bing specific - Add your Bing verification code in _document.js */}

      {/* Geographic targeting for MENA */}
      <meta name="geo.region" content="DZ" />
      <meta name="geo.placename" content="Algeria" />
      <meta name="geo.position" content="36.7538;3.0588" />
      <meta name="ICBM" content="36.7538, 3.0588" />

      {/* Business info */}
      <meta name="author" content="Symloop Technology" />
      <meta name="copyright" content="Symloop Technology" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Structured Data */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </Head>
  );
}

// Helper to generate breadcrumbs
export function generateBreadcrumbs(path, locale = 'en') {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: locale === 'fr' ? 'Accueil' : locale === 'ar' ? 'الرئيسية' : 'Home', url: 'https://symloop.com' }
  ];

  let currentPath = 'https://symloop.com';

  segments.forEach((segment, index) => {
    if (segment === 'en' || segment === 'fr' || segment === 'ar') return;

    currentPath += `/${segment}`;
    const name = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());

    breadcrumbs.push({ name, url: currentPath });
  });

  return breadcrumbs;
}
