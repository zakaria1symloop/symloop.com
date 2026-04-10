import Head from 'next/head';
import { useRouter } from 'next/router';

/**
 * Comprehensive Blog SEO Component for Smart Home & Security Blogs
 * Optimized for Algeria and MENA region - All languages (FR, EN, AR)
 */
export default function BlogSEO({
  title,
  description,
  keywords,
  image,
  slug,
  datePublished,
  dateModified,
  author = "Symloop Team",
  category,
  readTime,
  faqs = [],
  products = [],
  howToSteps = [],
  locale = 'fr'
}) {
  const router = useRouter();
  const currentLocale = locale || router.locale || 'fr';
  const isRTL = currentLocale === 'ar';

  const baseUrl = 'https://symloop.com';
  const currentUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl = image || `${baseUrl}/images/blog/${slug}.jpg`;

  // Language codes for schema
  const langCode = currentLocale === 'ar' ? 'ar-DZ' : currentLocale === 'fr' ? 'fr-DZ' : 'en';

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": currentLocale === 'ar' ? 'الرئيسية' : currentLocale === 'fr' ? 'Accueil' : 'Home',
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": currentUrl
      }
    ]
  };

  // Article Schema - Enhanced
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/sym-logo.png`
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/sym-logo.png`,
        "width": 200,
        "height": 60
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+213-549-575-512",
        "contactType": "customer service",
        "areaServed": ["DZ", "MA", "TN", "EG", "SA", "AE"],
        "availableLanguage": ["French", "Arabic", "English"]
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "inLanguage": langCode,
    "keywords": keywords,
    "articleSection": category,
    "wordCount": 3000,
    "about": {
      "@type": "Thing",
      "name": category,
      "description": description
    },
    "mentions": [
      {
        "@type": "Country",
        "name": "Algeria"
      },
      {
        "@type": "Thing",
        "name": "Smart Home"
      },
      {
        "@type": "Thing",
        "name": "Domotique"
      }
    ]
  };

  // LocalBusiness Schema - Symloop Algeria
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    "name": "Symloop Technology",
    "alternateName": "Symloop Smart Home Algeria",
    "description": currentLocale === 'ar'
      ? "شركة جزائرية رائدة في حلول المنزل الذكي والأمن"
      : currentLocale === 'fr'
      ? "Entreprise algérienne leader en solutions smart home et sécurité"
      : "Leading Algerian company in smart home and security solutions",
    "url": baseUrl,
    "logo": `${baseUrl}/sym-logo.png`,
    "image": imageUrl,
    "telephone": "+213-549-575-512",
    "email": "contact@symloop.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alger",
      "addressLocality": "Alger",
      "addressRegion": "Alger",
      "postalCode": "16000",
      "addressCountry": "DZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.7538,
      "longitude": 3.0588
    },
    "areaServed": [
      { "@type": "Country", "name": "Algeria" },
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Tunisia" },
      { "@type": "Country", "name": "Egypt" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "DZD, EUR, USD",
    "paymentAccepted": "Cash, CIB, Edahabia, Bank Transfer",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/symloop",
      "https://instagram.com/symloop",
      "https://linkedin.com/company/symloop",
      "https://twitter.com/symloop"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    }
  };

  // FAQ Schema
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // HowTo Schema for Installation Guides
  const howToSchema = howToSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "image": imageUrl,
    "totalTime": readTime,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "DZD",
      "value": "0"
    },
    "supply": [],
    "tool": [],
    "step": howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
      "url": `${currentUrl}#step-${index + 1}`
    }))
  } : null;

  // Product Schema for Smart Home Products
  const productSchemas = products.map(product => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image || imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Symloop"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Symloop Technology",
      "url": baseUrl
    },
    "offers": {
      "@type": "Offer",
      "url": currentUrl,
      "priceCurrency": "DZD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Symloop Technology"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  }));

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": baseUrl,
    "name": "Symloop Technology",
    "description": "Solutions Smart Home et Sécurité en Algérie",
    "publisher": {
      "@type": "Organization",
      "name": "Symloop Technology"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "inLanguage": ["fr-DZ", "ar-DZ", "en"]
  };

  // Alternate language URLs
  const alternateUrls = {
    fr: `${baseUrl}/fr/blog/${slug}`,
    ar: `${baseUrl}/ar/blog/${slug}`,
    en: `${baseUrl}/blog/${slug}`
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots - Maximum indexing */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Language */}
      <meta httpEquiv="content-language" content={langCode} />
      <html lang={currentLocale} dir={isRTL ? 'rtl' : 'ltr'} />

      {/* Hreflang - Multi-language SEO */}
      <link rel="alternate" hrefLang="fr" href={alternateUrls.fr} />
      <link rel="alternate" hrefLang="ar" href={alternateUrls.ar} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.fr} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={currentLocale === 'ar' ? 'ar_DZ' : currentLocale === 'fr' ? 'fr_DZ' : 'en_US'} />
      <meta property="og:locale:alternate" content="fr_DZ" />
      <meta property="og:locale:alternate" content="ar_DZ" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content="Symloop Technology" />
      <meta property="article:published_time" content={datePublished} />
      <meta property="article:modified_time" content={dateModified || datePublished} />
      <meta property="article:author" content="Symloop Technology" />
      <meta property="article:section" content={category} />
      <meta property="article:tag" content={keywords} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@symloop" />
      <meta name="twitter:creator" content="@symloop" />
      <meta name="twitter:label1" content="Reading time" />
      <meta name="twitter:data1" content={readTime} />
      <meta name="twitter:label2" content="Category" />
      <meta name="twitter:data2" content={category} />

      {/* Geographic targeting for Algeria & MENA */}
      <meta name="geo.region" content="DZ" />
      <meta name="geo.placename" content="Algeria" />
      <meta name="geo.position" content="36.7538;3.0588" />
      <meta name="ICBM" content="36.7538, 3.0588" />

      {/* Author & Business */}
      <meta name="author" content="Symloop Technology" />
      <meta name="copyright" content="Symloop Technology" />
      <meta name="publisher" content="Symloop Technology" />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#10b981" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Structured Data - All Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      {productSchemas.map((schema, index) => (
        <script
          key={`product-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}

// Related blogs data for internal linking - Comprehensive SEO
export const relatedBlogsData = {
  smartHome: {
    fr: [
      { slug: 'maison-intelligente-smart-home-algerie-2026', title: 'Guide Complet Maison Intelligente Algérie 2026' },
      { slug: 'securite-maison-intelligente-cameras-alarmes-algerie-2026', title: 'Sécurité Maison Intelligente : Caméras et Alarmes' },
      { slug: 'economie-energie-maison-intelligente-climatisation-algerie-2026', title: 'Économie d\'Énergie : Climatisation Intelligente' },
      { slug: 'installation-cameras-surveillance-professionnelle-algerie-2026', title: 'Installation Professionnelle Caméras de Surveillance' },
      { slug: 'securite-maison-installation-complete-alarme-algerie-2026', title: 'Installation Complète Système de Sécurité' }
    ],
    ar: [
      { slug: 'maison-intelligente-smart-home-algerie-2026', title: 'دليل شامل للمنزل الذكي في الجزائر 2026' },
      { slug: 'securite-maison-intelligente-cameras-alarmes-algerie-2026', title: 'أمن المنزل الذكي: كاميرات وأجهزة إنذار' },
      { slug: 'economie-energie-maison-intelligente-climatisation-algerie-2026', title: 'توفير الطاقة: التكييف الذكي' },
      { slug: 'installation-cameras-surveillance-professionnelle-algerie-2026', title: 'تركيب احترافي لكاميرات المراقبة' },
      { slug: 'securite-maison-installation-complete-alarme-algerie-2026', title: 'تركيب كامل لنظام الأمان' }
    ],
    en: [
      { slug: 'maison-intelligente-smart-home-algerie-2026', title: 'Complete Smart Home Guide Algeria 2026' },
      { slug: 'securite-maison-intelligente-cameras-alarmes-algerie-2026', title: 'Smart Home Security: Cameras and Alarms' },
      { slug: 'economie-energie-maison-intelligente-climatisation-algerie-2026', title: 'Energy Savings: Smart Air Conditioning' },
      { slug: 'installation-cameras-surveillance-professionnelle-algerie-2026', title: 'Professional Security Camera Installation' },
      { slug: 'securite-maison-installation-complete-alarme-algerie-2026', title: 'Complete Security System Installation' }
    ]
  },
  industrialIT: {
    fr: [
      { slug: 'informatique-industrielle-algerie-maintenance-pc-usine-2026', title: 'Informatique Industrielle : Maintenance PC Usine' },
      { slug: 'depannage-logiciel-materiel-machines-industrielles-algerie-2026', title: 'Dépannage Logiciel & Matériel Machines Industrielles' },
      { slug: 'support-informatique-complet-usine-machines-pc-algerie-2026', title: 'Support Informatique Complet Usine A-Z' }
    ],
    ar: [
      { slug: 'informatique-industrielle-algerie-maintenance-pc-usine-2026', title: 'المعلوماتية الصناعية: صيانة حواسيب المصانع' },
      { slug: 'depannage-logiciel-materiel-machines-industrielles-algerie-2026', title: 'إصلاح البرامج والمعدات للآلات الصناعية' },
      { slug: 'support-informatique-complet-usine-machines-pc-algerie-2026', title: 'دعم معلوماتي شامل للمصانع' }
    ],
    en: [
      { slug: 'informatique-industrielle-algerie-maintenance-pc-usine-2026', title: 'Industrial IT: Factory PC Maintenance' },
      { slug: 'depannage-logiciel-materiel-machines-industrielles-algerie-2026', title: 'Industrial Machine Software & Hardware Repair' },
      { slug: 'support-informatique-complet-usine-machines-pc-algerie-2026', title: 'Complete Factory IT Support A-Z' }
    ]
  },
  setifSoftware: {
    fr: [
      { slug: 'logiciel-crm-setif-bordj-msila-gestion-clients-2026', title: 'Logiciel CRM Sétif, Bordj, M\'sila - Gestion Clients' },
      { slug: 'logiciel-gestion-livraison-setif-hauts-plateaux-2026', title: 'Logiciel Gestion Livraison Sétif & Hauts Plateaux' },
      { slug: 'logiciel-agence-voyage-gds-setif-est-algerien-2026', title: 'Logiciel GDS Agence de Voyage Sétif' },
      { slug: 'logiciel-caisse-pos-restaurant-commerce-setif-2026', title: 'Logiciel Caisse POS Restaurant & Commerce Sétif' }
    ],
    ar: [
      { slug: 'logiciel-crm-setif-bordj-msila-gestion-clients-2026', title: 'برنامج CRM سطيف، برج، مسيلة - إدارة العملاء' },
      { slug: 'logiciel-gestion-livraison-setif-hauts-plateaux-2026', title: 'برنامج إدارة التوصيل سطيف والهضاب العليا' },
      { slug: 'logiciel-agence-voyage-gds-setif-est-algerien-2026', title: 'برنامج GDS وكالات السفر سطيف' },
      { slug: 'logiciel-caisse-pos-restaurant-commerce-setif-2026', title: 'برنامج نقاط البيع للمطاعم والتجارة سطيف' }
    ],
    en: [
      { slug: 'logiciel-crm-setif-bordj-msila-gestion-clients-2026', title: 'CRM Software Setif, Bordj, M\'sila - Client Management' },
      { slug: 'logiciel-gestion-livraison-setif-hauts-plateaux-2026', title: 'Delivery Management Software Setif & High Plateaus' },
      { slug: 'logiciel-agence-voyage-gds-setif-est-algerien-2026', title: 'GDS Travel Agency Software Setif' },
      { slug: 'logiciel-caisse-pos-restaurant-commerce-setif-2026', title: 'POS Software for Restaurants & Retail Setif' }
    ]
  },
  aiSolutions: {
    fr: [
      { slug: 'intelligence-artificielle-algerie-2026', title: 'Intelligence Artificielle en Algérie 2026' },
      { slug: 'ia-generative-chatgpt-claude-algerie-2026', title: 'IA Générative : ChatGPT & Claude en Algérie' },
      { slug: 'intelligence-artificielle-algerie-mena-2024', title: 'IA pour les Entreprises MENA' }
    ],
    ar: [
      { slug: 'intelligence-artificielle-algerie-2026', title: 'الذكاء الاصطناعي في الجزائر 2026' },
      { slug: 'ia-generative-chatgpt-claude-algerie-2026', title: 'الذكاء الاصطناعي التوليدي: ChatGPT و Claude' },
      { slug: 'intelligence-artificielle-algerie-mena-2024', title: 'الذكاء الاصطناعي للشركات في منطقة MENA' }
    ],
    en: [
      { slug: 'intelligence-artificielle-algerie-2026', title: 'Artificial Intelligence in Algeria 2026' },
      { slug: 'ia-generative-chatgpt-claude-algerie-2026', title: 'Generative AI: ChatGPT & Claude in Algeria' },
      { slug: 'intelligence-artificielle-algerie-mena-2024', title: 'AI for MENA Businesses' }
    ]
  },
  delivery: {
    fr: [
      { slug: 'logiciel-gestion-livraison-distribution-algerie-2026', title: 'Logiciel Gestion Livraison & Distribution Algérie' },
      { slug: 'gestion-flotte-livraison-suivi-gps-algerie-2026', title: 'Gestion Flotte & Suivi GPS Livraison' },
      { slug: 'logiciel-gestion-livraison-setif-hauts-plateaux-2026', title: 'Logiciel Livraison Sétif & Est Algérien' }
    ],
    ar: [
      { slug: 'logiciel-gestion-livraison-distribution-algerie-2026', title: 'برنامج إدارة التوصيل والتوزيع الجزائر' },
      { slug: 'gestion-flotte-livraison-suivi-gps-algerie-2026', title: 'إدارة الأسطول وتتبع GPS للتوصيل' },
      { slug: 'logiciel-gestion-livraison-setif-hauts-plateaux-2026', title: 'برنامج التوصيل سطيف وشرق الجزائر' }
    ],
    en: [
      { slug: 'logiciel-gestion-livraison-distribution-algerie-2026', title: 'Delivery & Distribution Management Software Algeria' },
      { slug: 'gestion-flotte-livraison-suivi-gps-algerie-2026', title: 'Fleet Management & GPS Tracking for Delivery' },
      { slug: 'logiciel-gestion-livraison-setif-hauts-plateaux-2026', title: 'Delivery Software Setif & Eastern Algeria' }
    ]
  }
};

// Internal linking component - Enhanced for all categories
export function RelatedBlogs({ currentSlug, locale = 'fr', category = 'smartHome' }) {
  // Get blogs from the specified category or fall back to smartHome
  const categoryData = relatedBlogsData[category] || relatedBlogsData.smartHome;
  const blogs = categoryData[locale] || categoryData.fr;
  const filteredBlogs = blogs.filter(blog => blog.slug !== currentSlug).slice(0, 4);

  const labels = {
    fr: 'Articles Connexes',
    ar: 'مقالات ذات صلة',
    en: 'Related Articles'
  };

  if (filteredBlogs.length === 0) return null;

  return (
    <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
        {labels[locale] || labels.fr}
      </h3>
      <div className="grid gap-3">
        {filteredBlogs.map((blog, index) => (
          <a
            key={index}
            href={`/blog/${blog.slug}`}
            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-700/50 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors group"
          >
            <span className="w-8 h-8 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-green-500 group-hover:text-white transition-colors">
              {index + 1}
            </span>
            <span className="text-slate-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              {blog.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

// Category-specific related blogs component
export function CategoryRelatedBlogs({ currentSlug, locale = 'fr' }) {
  // Auto-detect category from slug
  let category = 'smartHome';

  if (currentSlug?.includes('industrielle') || currentSlug?.includes('usine') || currentSlug?.includes('machines')) {
    category = 'industrialIT';
  } else if (currentSlug?.includes('setif') || currentSlug?.includes('bordj') || currentSlug?.includes('msila')) {
    category = 'setifSoftware';
  } else if (currentSlug?.includes('intelligence-artificielle') || currentSlug?.includes('ia-') || currentSlug?.includes('chatgpt')) {
    category = 'aiSolutions';
  } else if (currentSlug?.includes('livraison') || currentSlug?.includes('flotte') || currentSlug?.includes('gps')) {
    category = 'delivery';
  } else if (currentSlug?.includes('maison') || currentSlug?.includes('smart-home') || currentSlug?.includes('cameras') || currentSlug?.includes('alarme')) {
    category = 'smartHome';
  }

  return <RelatedBlogs currentSlug={currentSlug} locale={locale} category={category} />;
}
