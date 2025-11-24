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
        
        {/* Google Fonts - Changa for Arabic */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&display=swap" 
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
        <meta name="geo.placename" content="Sétif, région MENA" />
        <meta name="ICBM" content="36.1919, 5.4138" />

        {/* Google Search Console - Verified via DNS/other method */}
        
        {/* MENA-specific Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://symloop.com",
              "name": "Symloop Technology - Intelligence Artificielle Algérie",
              "alternateName": ["Symloop", "Symloop IA Algérie", "Symloop AI Algeria", "IA Algérie", "Intelligence Artificielle Algérie"],
              "url": "https://symloop.com",
              "logo": "https://symloop.com/sym-logo.png",
              "image": "https://symloop.com/assets/symloop-algeria-it-company.png",
              "description": "Leader de l'intelligence artificielle en Algérie depuis 2012. Solutions IA sur mesure: chatbots, assistants vocaux arabes, machine learning, deep learning, vision par ordinateur, NLP. Développement applications mobiles, sites e-commerce avec paiement CIB/Edahabia. Expert IA Alger, Oran, Constantine, Sétif.",
              "foundingDate": "2012",
              "telephone": "+213549575512",
              "email": "contact@symloop.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sétif",
                "addressLocality": "Sétif",
                "addressRegion": "Sétif Province",
                "postalCode": "19000",
                "addressCountry": "DZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.1919",
                "longitude": "5.4138"
              },
              "areaServed": {
                "@type": "Region",
                "name": "MENA Region"
              },
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
                "Top IT Company MENA 2023",
                "Best Software Development Company MENA 2022",
                "Excellence in Digital Transformation 2021"
              ],
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 20,
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
                "streetAddress": "Sétif",
                "addressLocality": "Sétif",
                "addressRegion": "Sétif",
                "postalCode": "19000",
                "addressCountry": "DZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.1919,
                "longitude": 5.4138
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
                "name": "Services Intelligence Artificielle & IT",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Intelligence Artificielle Algérie",
                      "description": "Solutions IA sur mesure: chatbots, machine learning, deep learning, NLP, vision par ordinateur"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chatbot & Assistant Virtuel",
                      "description": "Chatbots intelligents en arabe algérien et français. Intégration WhatsApp, Facebook, site web"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning & Deep Learning",
                      "description": "Analyse prédictive, reconnaissance d'images, traitement du langage naturel arabe"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Assistant Vocal Arabe",
                      "description": "Reconnaissance vocale en arabe dialectal algérien et français. Commandes vocales pour applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Développement Applications Mobiles",
                      "description": "Applications iOS et Android avec Flutter et React Native"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Création Sites Web & E-commerce",
                      "description": "Sites web professionnels et e-commerce avec paiement CIB/Edahabia"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Solutions ERP/CRM avec IA",
                      "description": "Logiciels de gestion personnalisés avec intelligence artificielle intégrée"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cybersécurité IA",
                      "description": "Détection de fraude, analyse comportementale, protection des données avec IA"
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
