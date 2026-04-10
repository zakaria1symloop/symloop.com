import Head from 'next/head';
import { useRouter } from 'next/router';

const SeoEnhanced = ({
  title,
  description,
  keywords,
  image,
  article = false,
  noindex = false,
  city = null,
  service = null
}) => {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const currentUrl = `https://symloop.com${router.asPath}`;

  // MENA countries and major cities for local SEO
  const menaRegions = {
    algeria: {
      fr: "Algérie",
      en: "Algeria",
      ar: "الجزائر",
      cities: [
        "Alger", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Sétif",
        "Sidi Bel Abbès", "Biskra", "Tébessa", "El Oued", "Skikda", "Tiaret", "Béjaïa",
        "Tlemcen", "Béchar", "Mostaganem", "El Eulma", "Médéa", "Tizi Ouzou", "Chlef"
      ]
    },
    morocco: {
      fr: "Maroc",
      en: "Morocco",
      ar: "المغرب",
      cities: ["Casablanca", "Rabat", "Marrakech", "Fès", "Tanger"]
    },
    tunisia: {
      fr: "Tunisie",
      en: "Tunisia",
      ar: "تونس",
      cities: ["Tunis", "Sfax", "Sousse", "Gabès", "Bizerte"]
    },
    egypt: {
      fr: "Égypte",
      en: "Egypt",
      ar: "مصر",
      cities: ["Cairo", "Alexandria", "Giza", "Shubra", "Port Said"]
    },
    uae: {
      fr: "Émirats Arabes Unis",
      en: "United Arab Emirates",
      ar: "الإمارات العربية المتحدة",
      cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"]
    },
    saudiArabia: {
      fr: "Arabie Saoudite",
      en: "Saudi Arabia",
      ar: "السعودية",
      cities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam"]
    }
  };

  // Enhanced title with city and region
  const enhancedTitle = city
    ? `${title} ${city} | Symloop Technology`
    : `${title} | Symloop Technology`;

  // Enhanced description with local context
  const enhancedDescription = city
    ? `${description} Services disponibles à ${city} et toute l'Algérie. Expert local #1 MENA.`
    : `${description} Leader en Algérie et région MENA.`;

  // Generate comprehensive structured data
  const generateStructuredData = () => {
    const baseOrganization = {
      "@type": "Organization",
      "@id": "https://symloop.com/#organization",
      "name": "Symloop Technology",
      "alternateName": ["Symloop", "سيملوب تكنولوجي", "Symloop Tech"],
      "url": "https://symloop.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://symloop.com/sym-logo.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://www.linkedin.com/company/symloop",
        "https://twitter.com/symloop",
        "https://www.facebook.com/symloop",
        "https://www.instagram.com/symloop",
        "https://github.com/symloop"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alger",
        "addressRegion": "Alger",
        "postalCode": "16000",
        "addressCountry": "DZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.7538",
        "longitude": "3.0588"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Algeria",
          "identifier": "DZ"
        },
        {
          "@type": "Country",
          "name": "Morocco",
          "identifier": "MA"
        },
        {
          "@type": "Country",
          "name": "Tunisia",
          "identifier": "TN"
        },
        {
          "@type": "Country",
          "name": "Egypt",
          "identifier": "EG"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates",
          "identifier": "AE"
        },
        {
          "@type": "Country",
          "name": "Saudi Arabia",
          "identifier": "SA"
        },
        {
          "@type": "Country",
          "name": "Libya",
          "identifier": "LY"
        },
        {
          "@type": "Country",
          "name": "Qatar",
          "identifier": "QA"
        },
        {
          "@type": "Country",
          "name": "Kuwait",
          "identifier": "KW"
        },
        {
          "@type": "Country",
          "name": "Bahrain",
          "identifier": "BH"
        }
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+213-549-57-55-12",
        "contactType": "sales",
        "contactOption": ["TollFree", "HearingImpairedSupported"],
        "areaServed": ["DZ", "MA", "TN", "EG", "AE", "SA", "LY", "QA", "KW", "BH"],
        "availableLanguage": ["French", "Arabic", "English", "Berber"]
      }],
      "foundingDate": "2020",
      "foundingLocation": {
        "@type": "Place",
        "name": "Alger, Algeria"
      },
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 10,
        "maxValue": 25
      },
      "slogan": "Digital Innovation for MENA Region",
      "description": "Leading technology company specializing in digital transformation, web development, mobile apps, and IT solutions for businesses across Algeria and the MENA region.",
      "knowsAbout": [
        "Digital Transformation",
        "Web Development",
        "Mobile Applications",
        "Cloud Computing",
        "Cybersecurity",
        "Artificial Intelligence",
        "E-commerce Solutions",
        "ERP/CRM Systems",
        "IoT Solutions",
        "Digital Marketing"
      ],
      "award": [],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Algeria Tech Association"
        },
        {
          "@type": "Organization",
          "name": "MENA Digital Alliance"
        }
      ]
    };

    const localBusiness = {
      "@type": "LocalBusiness",
      "@id": "https://symloop.com/#localbusiness",
      "name": "Symloop Technology Algeria",
      "image": "https://symloop.com/office-photo.jpg",
      "priceRange": "€€€",
      "servesCuisine": "Technology Services",
      "telephone": "+213-549-57-55-12",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city || "Alger",
        "addressRegion": "Alger",
        "postalCode": "16000",
        "addressCountry": "DZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.7538",
        "longitude": "3.0588"
      },
      "url": currentUrl,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "15",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ahmed Benali"
          },
          "datePublished": "2024-01-15",
          "reviewBody": "Excellent service de développement web. Très professionnel et livraison dans les délais.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Fatima Zahra"
          },
          "datePublished": "2024-02-20",
          "reviewBody": "Meilleure entreprise tech en Algérie. Solutions innovantes et équipe compétente.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services Technologiques",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Développement Web",
            "description": "Sites web professionnels et applications web"
          },
          {
            "@type": "Service",
            "name": "Applications Mobiles",
            "description": "Apps iOS et Android avec Flutter et React Native"
          },
          {
            "@type": "Service",
            "name": "Transformation Digitale",
            "description": "Modernisation et digitalisation d'entreprise"
          },
          {
            "@type": "Service",
            "name": "Cybersécurité",
            "description": "Protection des données et sécurité informatique"
          }
        ]
      }
    };

    const breadcrumbs = {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://symloop.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": service || "Services",
          "item": currentUrl
        }
      ]
    };

    const webPage = {
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      "url": currentUrl,
      "name": enhancedTitle,
      "description": enhancedDescription,
      "isPartOf": {
        "@id": "https://symloop.com/#website"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": image || "https://symloop.com/og-image.jpg"
      },
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString(),
      "author": {
        "@id": "https://symloop.com/#organization"
      },
      "breadcrumb": {
        "@id": `${currentUrl}#breadcrumb`
      },
      "inLanguage": locale,
      "potentialAction": {
        "@type": "ReadAction",
        "target": [currentUrl]
      }
    };

    const website = {
      "@type": "WebSite",
      "@id": "https://symloop.com/#website",
      "url": "https://symloop.com",
      "name": "Symloop Technology",
      "description": "Leading tech company in Algeria and MENA region",
      "publisher": {
        "@id": "https://symloop.com/#organization"
      },
      "inLanguage": ["fr", "ar", "en"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://symloop.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    return {
      "@context": "https://schema.org",
      "@graph": [
        baseOrganization,
        localBusiness,
        breadcrumbs,
        webPage,
        website
      ]
    };
  };

  // Generate location-specific keywords
  const generateLocalKeywords = () => {
    const baseKeywords = keywords || "";
    const cityKeywords = city ? `${city} Algérie, ${city} DZ, ${city} 2025, ${city} services IT, développeur ${city}, ` : "";
    const regionalKeywords = "MENA region, North Africa, Maghreb, Afrique du Nord, منطقة الشرق الأوسط وشمال أفريقيا, ";
    const algerianCities = "Alger, Oran, Constantine, Annaba, Blida, Batna, Sétif, Djelfa, ";
    const industryKeywords = "transformation digitale Algérie, développement web Algérie, applications mobiles Algérie, ";
    const yearKeywords = "2025, 2024, ";

    return baseKeywords + cityKeywords + regionalKeywords + algerianCities + industryKeywords + yearKeywords;
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={generateLocalKeywords()} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta charSet="utf-8" />

      {/* Robots and Crawling */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Language and Region */}
      <meta httpEquiv="content-language" content={`${locale}-DZ`} />
      <meta name="language" content={locale} />
      <meta name="geo.region" content="DZ" />
      <meta name="geo.placename" content={city || "Algeria"} />
      <meta name="geo.position" content="36.7538;3.0588" />
      <meta name="ICBM" content="36.7538, 3.0588" />
      <meta name="country" content="Algeria" />

      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="fr-DZ" href={`https://symloop.com/fr${router.asPath}`} />
      <link rel="alternate" hrefLang="ar-DZ" href={`https://symloop.com/ar${router.asPath}`} />
      <link rel="alternate" hrefLang="en" href={`https://symloop.com/en${router.asPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://symloop.com${router.asPath}`} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:image" content={image || "https://symloop.com/og-image.jpg"} />
      <meta property="og:image:alt" content={enhancedTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Symloop Technology" />
      <meta property="og:locale" content={`${locale}_DZ`} />
      <meta property="og:locale:alternate" content="fr_DZ" />
      <meta property="og:locale:alternate" content="ar_DZ" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={enhancedTitle} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={image || "https://symloop.com/twitter-card.jpg"} />
      <meta name="twitter:site" content="@symloop" />
      <meta name="twitter:creator" content="@symloop" />

      {/* Business and Local SEO */}
      <meta name="author" content="Symloop Technology" />
      <meta name="publisher" content="Symloop Technology" />
      <meta name="copyright" content="Symloop Technology" />
      <meta name="company" content="Symloop Technology" />
      <meta name="business:contact_data:street_address" content="Alger Centre" />
      <meta name="business:contact_data:locality" content="Alger" />
      <meta name="business:contact_data:country_name" content="Algeria" />
      <meta name="business:contact_data:postal_code" content="16000" />
      <meta name="business:contact_data:phone_number" content="+213-549-57-55-12" />
      <meta name="business:contact_data:website" content="https://symloop.com" />
      <meta name="business:contact_data:email" content="contact@symloop.com" />

      {/* Mobile App Meta Tags */}
      <meta name="application-name" content="Symloop Technology" />
      <meta name="apple-mobile-web-app-title" content="Symloop" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#000000" />

      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="3 days" />
      <meta name="expires" content="never" />
      <meta name="pragma" content="no-cache" />
      <meta name="cache-control" content="no-cache" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="classification" content="Business, Technology, Software, IT Services" />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />

      {/* Article Specific (if article) */}
      {article && (
        <>
          <meta property="article:published_time" content={new Date().toISOString()} />
          <meta property="article:modified_time" content={new Date().toISOString()} />
          <meta property="article:author" content="Symloop Technology" />
          <meta property="article:section" content="Technology" />
          <meta property="article:tag" content="Algeria" />
          <meta property="article:tag" content="MENA" />
          <meta property="article:tag" content="Technology" />
        </>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />

      {/* Preconnect to Important Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Head>
  );
};

export default SeoEnhanced;