import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  const { locale } = props.__NEXT_DATA__;
  const isRTL = locale === 'ar';
  
  return (
    <Html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <Head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme and Browser Config */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Symloop Technology MENA" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preconnect for Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Google Fonts — ALL fonts loaded here (not in next/head on pages).
            Arabic: IBM Plex Sans Arabic (premium, corporate, editorial).
            display=swap ensures text renders immediately with fallback, then
            swaps to the custom font once downloaded. */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Security Headers - Note: X-Frame-Options should be set as HTTP header, not meta tag */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Geographic and Business Meta */}
        <meta name="geo.region" content="MENA" />
        <meta name="geo.country" content="MENA Region" />
        <meta name="geo.placename" content="Alger, région MENA" />
        <meta name="ICBM" content="36.7538, 3.0588" />

        {/* Google Search Console Verification
            To verify ownership:
            1. Go to https://search.google.com/search-console
            2. Add property: symloop.com
            3. Choose "HTML tag" verification method
            4. Copy the content value from the meta tag Google provides
            5. Uncomment and update the meta tag below with your verification code
        */}
        {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}

        {/* Bing Webmaster Tools Verification
            To verify ownership:
            1. Go to https://www.bing.com/webmasters
            2. Add site: symloop.com
            3. Choose "Meta tag" verification method
            4. Copy the content value
            5. Uncomment and update the meta tag below
        */}
        {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
        
        {/* MENA-specific Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
              "@id": "https://www.symloop.com/#organization",
              "name": "Symloop Technology",
              "legalName": "Symloop Technology",
              "alternateName": ["Symloop", "Symloop Technology", "AI Engineering Firm Algeria", "MENA Banking Software Engineering", "Government Digitization MENA", "Oil and Gas IT Algeria", "سيملوب", "سيملوب تكنولوجي", "شركة سيملوب"],
              "slogan": "AI-native engineering for MENA's regulated industries — banking, government, oil & gas, and healthcare. Built in Algiers since 2012.",
              "url": "https://www.symloop.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.symloop.com/sym-logo.png",
                "width": 512,
                "height": 128
              },
              "image": "https://www.symloop.com/assets/symloop-algeria-it-company.png",
              "description": "AI-native engineering firm for MENA's regulated industries — banking, government, oil & gas, and healthcare. Headquartered in Algiers, Algeria, founded 2012, 25+ senior engineers. Delivers core banking modernization, sovereign government platforms, oil & gas IT, industrial IoT/SCADA, applied AI (computer vision, NLP, MLOps), and ERP for institutional clients. International-grade engineering at nearshore cost. Comparable in capability to mid-tier European engineering firms (Capgemini Engineering, Sopra Steria) — not an ESN, not an agency, not a body shop.",
              "foundingDate": "2012",
              "founder": {
                "@type": "Person",
                "name": "Zakaria Iken",
                "jobTitle": "Founder and CEO",
                "url": "https://www.linkedin.com/in/zakaria-iken/"
              },
              "telephone": "+213549575512",
              "email": "contact@symloop.com",
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
                {"@type": "Country", "name": "Algeria"},
                {"@type": "Country", "name": "France"},
                {"@type": "Country", "name": "Morocco"},
                {"@type": "Country", "name": "Tunisia"},
                {"@type": "Country", "name": "Libya"},
                {"@type": "Country", "name": "Nigeria"},
                {"@type": "Country", "name": "Senegal"},
                {"@type": "Country", "name": "Cameroon"},
                {"@type": "Country", "name": "Egypt"},
                {"@type": "Country", "name": "Kenya"},
                {"@type": "Country", "name": "Saudi Arabia"},
                {"@type": "Country", "name": "United Arab Emirates"},
                {"@type": "Country", "name": "Kuwait"},
                {"@type": "Country", "name": "Qatar"},
                {"@type": "Continent", "name": "Africa"},
                {"@type": "Continent", "name": "Europe"},
                {"@type": "Place", "name": "MENA Region"},
                {"@type": "Place", "name": "Francophone Africa"}
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.0339",
                  "longitude": "1.6596"
                },
                "geoRadius": "2000000"
              },
              "knowsLanguage": ["French", "Arabic", "English"],
              "knowsAbout": [
                "Banking Software Engineering",
                "Core Banking Modernization",
                "ISO 20022 Migration",
                "Real-time Payments",
                "Fintech Software",
                "Government Digitization",
                "Sovereign Cloud",
                "National Identity Infrastructure",
                "Inter-Ministerial Data Exchange",
                "Oil and Gas IT",
                "SCADA Modernization",
                "DCS to PLC Migration",
                "Industrial IoT",
                "Healthcare Software",
                "Hospital Information Systems",
                "Pharmaceutical Software",
                "Applied Artificial Intelligence",
                "Computer Vision",
                "Natural Language Processing",
                "Arabic NLP",
                "LLM Integration and RAG Systems",
                "MLOps",
                "Predictive Analytics for Regulated Industries",
                "ERP for Regulated Sectors",
                "Cybersecurity Audit and Pentest",
                "ISO 27001 Compliance",
                "DORA Compliance",
                "On-Premise and Sovereign Deployments",
                "Custom Software Engineering",
                "Cloud Migration"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Industry Recognition",
                  "name": "Clutch 5.0/5.0 verified profile",
                  "url": "https://clutch.co/profile/symloop-technology"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "SoftwareApplication",
                    "@id": "https://www.symloop.com/products/noor/#software",
                    "name": "NOOR by Symloop",
                    "alternateName": ["NOOR", "نور"],
                    "applicationCategory": "BusinessApplication",
                    "applicationSubCategory": "Enterprise AI Platform",
                    "operatingSystem": "Linux (on-premise, sovereign cloud, hybrid)",
                    "url": "https://www.symloop.com/products/noor/",
                    "description": "NOOR is Symloop's flagship sovereign AI platform for MENA's regulated industries — banking, government, oil & gas, healthcare. Twelve standard capabilities including production-grade RAG, document AI, NL-to-SQL, specialized assistants, audit trail, and multi-language native (Arabic, French, English). Deploy on-premise, in sovereign cloud, or hybrid."
                  }
                }
              ],
              "sameAs": [
                "https://www.facebook.com/symloop",
                "https://www.linkedin.com/company/symloop-technology/",
                "https://github.com/symloop"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+213549575512",
                "contactType": "customer service",
                "areaServed": "MENA",
                "availableLanguage": ["French", "Arabic", "English"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              },
              "award": [
                "Clutch 5.0/5.0 — verified client reviews"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "10",
                "reviewCount": "10"
              },
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": 25,
                "minValue": 25,
                "maxValue": 50
              },
              "yearlyRevenue": {
                "@type": "QuantitativeValue",
                "minValue": 50000000,
                "maxValue": 200000000,
                "unitCode": "DZD"
              }
            })
          }}
        />

        {/* WebSite Schema for Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Symloop Technology",
              "alternateName": "Symloop MENA",
              "url": "https://symloop.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://symloop.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": ["fr", "en", "ar"]
            })
          }}
        />

        {/* LocalBusiness Schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://symloop.com/#localbusiness",
              "name": "Symloop Technology",
              "image": "https://symloop.com/sym-logo.png",
              "telephone": "+213549575512",
              "email": "contact@symloop.com",
              "url": "https://symloop.com",
              "address": {
                "@type": "PostalAddress",
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
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$",
              "currenciesAccepted": "DZD, EUR, USD",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Symloop — NOOR Platform + Engineering Services for MENA Regulated Industries",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "SoftwareApplication",
                      "name": "NOOR — Sovereign AI Platform",
                      "description": "NOOR by Symloop. Flagship AI platform for MENA's regulated industries. Twelve capabilities (RAG, document AI, NL-to-SQL, specialized assistants, audit trail, multi-language). On-premise / sovereign cloud / hybrid deployment.",
                      "url": "https://www.symloop.com/products/noor/",
                      "applicationCategory": "BusinessApplication"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Banking Software Engineering",
                      "description": "Core banking modernization, ISO 20022 migration, real-time payments architecture, corporate cash management, fraud detection. On-premise and sovereign deployments for MENA banks.",
                      "serviceType": "Banking Software Engineering",
                      "areaServed": "MENA"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Government Digitization Platforms",
                      "description": "Sovereign cloud, national identity infrastructure, inter-ministerial data exchange, e-government services. Compliance with data residency and security requirements for ministries.",
                      "serviceType": "Government Digitization",
                      "areaServed": "MENA"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Oil and Gas IT and Industrial Systems",
                      "description": "DCS-to-PLC migration, SCADA modernization, industrial IoT, predictive maintenance (GMAO/CMMS) for upstream and downstream oil and gas operators.",
                      "serviceType": "Industrial Engineering",
                      "areaServed": "MENA"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Healthcare and Pharmaceutical Software",
                      "description": "Hospital information systems, pharmaceutical traceability, regulatory compliance software, document management for the healthcare and pharma sector.",
                      "serviceType": "Healthcare Software",
                      "areaServed": "MENA"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Applied AI and Machine Learning",
                      "description": "Production computer vision, Arabic NLP, LLM/RAG systems, predictive analytics, MLOps. Specialized in regulated-industry deployments with on-premise and data-sovereignty options.",
                      "serviceType": "Applied AI Engineering",
                      "areaServed": "MENA"
                    }
                  }
                ]
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Alger"
                },
                {
                  "@type": "City",
                  "name": "Oran"
                },
                {
                  "@type": "City",
                  "name": "Constantine"
                },
                {
                  "@type": "City",
                  "name": "Sétif"
                },
                {
                  "@type": "Country",
                  "name": "Algeria"
                },
                {
                  "@type": "Country",
                  "name": "Saudi Arabia"
                },
                {
                  "@type": "City",
                  "name": "Riyadh"
                },
                {
                  "@type": "City",
                  "name": "Jeddah"
                },
                {
                  "@type": "Country",
                  "name": "United Arab Emirates"
                },
                {
                  "@type": "City",
                  "name": "Dubai"
                },
                {
                  "@type": "City",
                  "name": "Abu Dhabi"
                },
                {
                  "@type": "Country",
                  "name": "Kuwait"
                },
                {
                  "@type": "City",
                  "name": "Kuwait City"
                },
                {
                  "@type": "Place",
                  "name": "MENA Region"
                }
              ]
            })
          }}
        />
      </Head>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
