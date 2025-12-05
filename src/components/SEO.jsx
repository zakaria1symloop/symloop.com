import Head from 'next/head';
import { useRouter } from 'next/router';

// Comprehensive SEO Component for Algeria and MENA ranking
export default function SEO({
  title,
  description,
  keywords,
  image = '/images/og-default.jpg',
  type = 'website',
  article = null,
  noindex = false,
  structuredData = null,
  breadcrumbs = null,
  faq = null,
  localBusiness = true,
}) {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const baseUrl = 'https://symloop.com';
  const currentUrl = `${baseUrl}${router.asPath}`;

  // Default SEO values
  const defaultTitle = 'Symloop | Agence Digitale N°1 en Algérie - Web, Mobile, IA';
  const defaultDescription = 'Symloop, agence digitale leader en Algérie. Développement web, applications mobiles, e-commerce, ERP, intelligence artificielle. Expertise MENA. Devis gratuit.';
  const defaultKeywords = 'agence digitale algérie, développement web algérie, application mobile algérie, e-commerce algérie, ERP algérie, intelligence artificielle algérie, transformation digitale, symloop';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Hreflang for multilingual
  const hreflangs = [
    { lang: 'fr', href: `${baseUrl}/fr${router.asPath}` },
    { lang: 'en', href: `${baseUrl}/en${router.asPath}` },
    { lang: 'ar', href: `${baseUrl}/ar${router.asPath}` },
    { lang: 'x-default', href: `${baseUrl}${router.asPath}` },
  ];

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Symloop',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: 'Agence digitale leader en Algérie et MENA. Développement web, mobile, e-commerce, ERP et solutions IA.',
    foundingDate: '2020',
    founders: [{ '@type': 'Person', name: 'Symloop Team' }],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Alger',
      addressLocality: 'Alger',
      addressRegion: 'Alger',
      postalCode: '16000',
      addressCountry: 'DZ'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+213-550-470-927',
        contactType: 'customer service',
        availableLanguage: ['French', 'Arabic', 'English'],
        areaServed: ['DZ', 'TN', 'MA', 'EG', 'SA', 'AE', 'QA', 'KW', 'BH', 'OM', 'JO', 'LB']
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/symloop',
      'https://www.facebook.com/symloop',
      'https://twitter.com/symloop',
      'https://www.instagram.com/symloop'
    ],
    areaServed: [
      { '@type': 'Country', name: 'Algeria' },
      { '@type': 'Country', name: 'Tunisia' },
      { '@type': 'Country', name: 'Morocco' },
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' }
    ],
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'E-commerce',
      'ERP Systems',
      'Artificial Intelligence',
      'Digital Transformation',
      'SEO',
      'Cloud Computing'
    ]
  };

  // Local Business Schema (for Algeria)
  const localBusinessSchema = localBusiness ? {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Symloop - Agence Digitale Algérie',
    image: `${baseUrl}/images/logo.png`,
    url: baseUrl,
    telephone: '+213-550-470-927',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Alger Centre',
      addressLocality: 'Alger',
      addressRegion: 'Alger',
      postalCode: '16000',
      addressCountry: 'DZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.7538,
      longitude: 3.0588
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127'
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Ahmed B.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Excellente agence, travail professionnel et équipe réactive.'
      }
    ]
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`
    }))
  } : null;

  // FAQ Schema
  const faqSchema = faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  // Article Schema
  const articleSchema = article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || seoImage,
    author: {
      '@type': 'Organization',
      name: 'Symloop',
      url: baseUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Symloop',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    }
  } : null;

  // WebPage Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seoTitle,
    description: seoDescription,
    url: currentUrl,
    inLanguage: locale === 'ar' ? 'ar-DZ' : locale === 'en' ? 'en' : 'fr-DZ',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Symloop',
      url: baseUrl
    }
  };

  // Service Schema for service pages
  const serviceSchema = structuredData?.service ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: structuredData.service.name,
    description: structuredData.service.description,
    provider: {
      '@type': 'Organization',
      name: 'Symloop'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Algeria'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: structuredData.service.name,
      itemListElement: structuredData.service.offerings?.map(offer => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description
        }
      }))
    }
  } : null;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Symloop" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang Tags for Multilingual */}
      {hreflangs.map((hreflang) => (
        <link
          key={hreflang.lang}
          rel="alternate"
          hrefLang={hreflang.lang}
          href={hreflang.href}
        />
      ))}

      {/* Geographic Tags for Algeria and MENA */}
      <meta name="geo.region" content="DZ" />
      <meta name="geo.placename" content="Alger, Algeria" />
      <meta name="geo.position" content="36.7538;3.0588" />
      <meta name="ICBM" content="36.7538, 3.0588" />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={locale === 'ar' ? 'ar-DZ' : locale === 'en' ? 'en' : 'fr-DZ'} />
      <meta name="language" content={locale === 'ar' ? 'Arabic' : locale === 'en' ? 'English' : 'French'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seoTitle} />
      <meta property="og:site_name" content="Symloop" />
      <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'en' ? 'en_US' : 'fr_FR'} />
      <meta property="og:locale:alternate" content="ar_DZ" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@symloop" />
      <meta name="twitter:creator" content="@symloop" />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.datePublished} />
          <meta property="article:modified_time" content={article.dateModified || article.datePublished} />
          <meta property="article:author" content="Symloop" />
          <meta property="article:section" content={article.category} />
          {article.tags?.map((tag, i) => (
            <meta key={i} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Mobile & PWA */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="Symloop" />
      <meta name="application-name" content="Symloop" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {localBusinessSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
      {structuredData && !structuredData.service && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Head>
  );
}

// Export SEO data for different pages
export const SEOData = {
  home: {
    title: 'Symloop | Agence Digitale N°1 en Algérie - Développement Web, Mobile, IA',
    description: 'Symloop, votre partenaire digital en Algérie. Création sites web, applications mobiles, e-commerce avec paiement CIB, ERP, solutions IA. Leader MENA. Devis gratuit.',
    keywords: 'agence digitale algérie, création site web algérie, développement mobile algérie, e-commerce algérie, paiement cib, edahabia, erp algérie, intelligence artificielle algérie, symloop, agence web alger'
  },
  services: {
    title: 'Services Digitaux en Algérie | Web, Mobile, E-commerce, IA | Symloop',
    description: 'Découvrez nos services digitaux en Algérie : création de sites web, développement d\'applications mobiles, e-commerce avec CIB/Edahabia, ERP, intelligence artificielle.',
    keywords: 'services digitaux algérie, développement web, application mobile, e-commerce, erp, intelligence artificielle, transformation digitale algérie'
  },
  contact: {
    title: 'Contactez Symloop | Agence Digitale Algérie | Devis Gratuit',
    description: 'Contactez Symloop pour votre projet digital en Algérie. Devis gratuit sous 24h. Équipe locale à Alger. WhatsApp, email, téléphone.',
    keywords: 'contact symloop, agence digitale alger, devis gratuit, projet digital algérie'
  },
  blog: {
    title: 'Blog Tech & Digital Algérie | Guides & Conseils | Symloop',
    description: 'Articles et guides sur le développement web, mobile, SEO, e-commerce et digitalisation en Algérie. Conseils d\'experts pour votre transformation digitale.',
    keywords: 'blog tech algérie, guides développement web, tutoriels mobile, conseils e-commerce, seo algérie, transformation digitale'
  }
};
