import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import {
  Code2,
  Smartphone,
  Globe,
  ShoppingCart,
  Server,
  Wifi,
  Network,
  Database,
  Cloud,
  Wrench,
  Megaphone,
  Users,
  Shield,
  Building2,
  Landmark
} from "lucide-react";

const getSolutions = (t) => [
  {
    title: t('solutions.digitalization.title', { defaultValue: 'رقمنة الخدمات الحكومية' }),
    slug: "digitalisation-algerie",
    subtitle: t('solutions.digitalization.subtitle', { defaultValue: 'E-Gouvernement & Transformation Digitale' }),
    punchline: t('solutions.digitalization.punchline', { defaultValue: 'التحول الرقمي للقطاعات الحكومية في الجزائر - رقمنة أي قطاع باستخدام الذكاء الاصطناعي والتكنولوجيا الحديثة' }),
    icon: Landmark,
    color: "from-emerald-600 to-cyan-500",
    keywords: "رقمنة, الرقمنة, رقمنة أي قطاع, التحول الرقمي الجزائر, digitalisation Algérie, e-gouvernement, رقمنة الخدمات الحكومية, government digitization Algeria, numérisation services publics",
    featured: true,
    schema: {
      "@type": "GovernmentService",
      "name": "رقمنة الخدمات الحكومية في الجزائر - Digitalisation Services Gouvernementaux",
      "description": "حلول رقمنة شاملة للقطاعات الحكومية والمؤسسات العامة في الجزائر - التحول الرقمي باستخدام الذكاء الاصطناعي",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "serviceType": "Government Digitization",
      "areaServed": ["الجزائر", "Alger", "Algérie", "MENA"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.mobile.title'),
    slug: "applications-mobiles-flutter-react-native-algerie",
    subtitle: "Flutter & React Native",
    punchline: t('solutions.mobile.punchline'),
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    keywords: "développement application mobile Algérie, Flutter Algérie, React Native Alger Sétif",
    schema: {
      "@type": "Service",
      "name": "Développement d'Applications Mobiles Flutter React Native",
      "description": "Création d'applications mobiles iOS et Android avec Flutter et React Native en Algérie - Alger et Sétif",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.ecommerce.title'),
    slug: "site-ecommerce-paiement-cib-edahabia-algerie",
    subtitle: t('solutions.ecommerce.subtitle'),
    punchline: t('solutions.ecommerce.punchline'),
    icon: ShoppingCart,
    color: "from-orange-500 to-red-500",
    keywords: "site e-commerce paiement CIB Algérie, boutique en ligne Edahabia, vente en ligne Alger",
    schema: {
      "@type": "Service",
      "name": "Sites E-commerce avec Paiement CIB Edahabia",
      "description": "Développement de boutiques en ligne avec intégration paiement CIB et Edahabia en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.erp.title'),
    slug: "logiciel-erp-crm-personnalise-algerie",
    subtitle: t('solutions.erp.subtitle'),
    punchline: t('solutions.erp.punchline'),
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    keywords: "logiciel ERP sur mesure Algérie, CRM personnalisé Alger, gestion entreprise Sétif",
    schema: {
      "@type": "Service",
      "name": "Logiciels ERP CRM Sur Mesure",
      "description": "Développement de logiciels ERP et CRM personnalisés pour entreprises algériennes",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.ai.title'),
    slug: "intelligence-artificielle-assistant-vocal-algerie",
    subtitle: t('solutions.ai.subtitle'),
    punchline: t('solutions.ai.punchline'),
    icon: Users,
    color: "from-emerald-500 to-teal-500",
    keywords: "assistant vocal IA Algérie, ChatGPT entreprise Alger, intelligence artificielle Sétif",
    schema: {
      "@type": "Service",
      "name": "Intelligence Artificielle et Assistants Vocaux",
      "description": "Développement de solutions IA, ChatGPT et assistants vocaux pour entreprises en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.iot.title'),
    slug: "solutions-iot-esp32-objets-connectes-algerie",
    subtitle: t('solutions.iot.subtitle'),
    punchline: t('solutions.iot.punchline'),
    icon: Wifi,
    color: "from-teal-500 to-blue-500",
    keywords: "solutions IoT Algérie, ESP32 objets connectés Alger, capteurs intelligents Sétif",
    schema: {
      "@type": "Service",
      "name": "Solutions IoT et Objets Connectés",
      "description": "Développement de solutions IoT avec ESP32 et capteurs en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer", 
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.cybersecurity.title'),
    slug: "cybersecurite-pme-protection-donnees-algerie",
    subtitle: t('solutions.cybersecurity.subtitle'),
    punchline: t('solutions.cybersecurity.punchline'),
    icon: Shield,
    color: "from-red-500 to-pink-500",
    keywords: "cybersécurité PME Algérie, protection données Alger, sécurité informatique Sétif",
    schema: {
      "@type": "Service",
      "name": "Solutions Cybersécurité PME",
      "description": "Services de cybersécurité pour PME et entreprises en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.web.title'),
    slug: "creation-site-web-professionnel-algerie",
    subtitle: t('solutions.web.subtitle'),
    punchline: t('solutions.web.punchline'),
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    keywords: "création site web Algérie, développeur web Alger, site professionnel Sétif",
    schema: {
      "@type": "Service",
      "name": "Création de Sites Web Professionnels",
      "description": "Conception de sites web professionnels optimisés SEO en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.cloud.title'),
    slug: "solutions-cloud-infrastructure-serveurs-algerie",
    subtitle: t('solutions.cloud.subtitle'),
    punchline: t('solutions.cloud.punchline'),
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
    keywords: "solutions cloud Algérie, hébergement serveurs Alger, infrastructure réseau Sétif",
    schema: {
      "@type": "Service",
      "name": "Solutions Cloud et Infrastructure",
      "description": "Services cloud et infrastructure pour entreprises en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.digital.title'),
    slug: "transformation-digitale-entreprise-algerie",
    subtitle: t('solutions.digital.subtitle'),
    punchline: t('solutions.digital.punchline'),
    icon: Wrench,
    color: "from-violet-500 to-purple-500",
    keywords: "transformation digitale Algérie, modernisation entreprise Alger, digitalisation Sétif",
    schema: {
      "@type": "Service",
      "name": "Transformation Digitale Entreprise",
      "description": "Services de transformation digitale pour entreprises algériennes",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.marketing.title'),
    slug: "marketing-digital-seo-algerie",
    subtitle: t('solutions.marketing.subtitle'),
    punchline: t('solutions.marketing.punchline'),
    icon: Megaphone,
    color: "from-amber-500 to-yellow-500",
    keywords: "marketing digital Algérie, SEO référencement Alger, publicité online Sétif",
    schema: {
      "@type": "Service",
      "name": "Marketing Digital et SEO",
      "description": "Services de marketing digital et référencement SEO en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.network.title'),
    slug: "solutions-reseau-infrastructure-it-algerie",
    subtitle: t('solutions.network.subtitle'),
    punchline: t('solutions.network.punchline'),
    icon: Network,
    color: "from-yellow-500 to-orange-500",
    keywords: "solutions réseau Algérie, infrastructure IT Alger, architecture réseau Sétif",
    schema: {
      "@type": "Service",
      "name": "Solutions Réseau et Infrastructure IT",
      "description": "Conception d'infrastructures réseau pour entreprises en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    title: t('solutions.consulting.title'),
    slug: "consulting-technologique-strategie-digitale-algerie",
    subtitle: t('solutions.consulting.subtitle'),
    punchline: t('solutions.consulting.punchline'),
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    keywords: "consulting tech Algérie, stratégie digitale Alger, expertise technique Sétif",
    schema: {
      "@type": "Service",
      "name": "Consulting Technologique et Stratégie",
      "description": "Services de conseil technologique et stratégie digitale en Algérie",
      "provider": {
        "@type": "Organization",
        "name": "Symloop",
        "founder": "Zakaria"
      },
      "areaServed": ["Alger", "Sétif", "Algérie"],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  }
];

// Enhanced SEO Schema.org structured data for Symloop
const getSchemaData = (solutions, t) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Symloop",
  "description": "Entreprise tech algérienne spécialisée dans le développement de solutions digitales sur mesure pour PME, startups et institutions. Plus de 1200 projets livrés depuis 2012.",
  "url": "https://www.symloop.com",
  "logo": "https://www.symloop.com/sym-logo.png",
  "foundingDate": "2012",
  "founder": {
    "@type": "Person",
    "name": "Zakaria"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DZ",
    "addressLocality": "Alger",
    "addressRegion": "Algérie"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+213-549-575-512",
    "email": "contact@symloop.com",
    "contactType": "customer service",
    "availableLanguage": ["French", "Arabic"],
    "hoursAvailable": "24/7"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Alger"
    },
    {
      "@type": "City", 
      "name": "Sétif"
    },
    {
      "@type": "Country",
      "name": "Algérie"
    }
  ],
  "knowsAbout": [
    "développement application mobile Algérie",
    "site e-commerce paiement CIB",
    "Flutter React Native Algérie",
    "logiciel ERP sur mesure",
    "intelligence artificielle entreprise",
    "solutions IoT ESP32",
    "cybersécurité PME Algérie",
    "transformation digitale"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Solutions Digitales Symloop Algérie",
    "description": "Catalogue complet de solutions digitales pour entreprises algériennes",
    "itemListElement": solutions.map((solution, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "category": "Service Technology",
      "businessFunction": "http://purl.org/goodrelations/v1#Sell",
      "keywords": solution.keywords,
      ...solution.schema
    }))
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "Entreprises Clientes Algérie"
    },
    "reviewBody": "Symloop est le partenaire technologique de confiance pour les entreprises algériennes. Plus de 1200 projets livrés avec succès."
  }
});

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.symloop.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Solutions Digitales Algérie",
      "item": "https://www.symloop.com/solutions"
    }
  ]
};

export default function SymloopSolutionsSection() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const solutions = getSolutions(t);
  const schemaData = getSchemaData(solutions, t);
  
  // RTL support
  const isRTL = router.locale === 'ar';

  // Update document direction dynamically without reload
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', router.locale || 'fr');
    }
  }, [isRTL, router.locale]);
  
  return (
    <>
      {/* Enhanced SEO Schema Markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <section 
        className={`relative py-32 bg-black text-white overflow-hidden ${isRTL ? 'rtl-solutions' : ''}`}
        aria-labelledby="solutions-heading"
        key={`solutions-${router.locale}`}
      >

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Enhanced SEO Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm border border-white/20 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium text-white/90">{t('solutions.badge')}</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">🇩🇿</span>
            </motion.div>
            
            <h1 
              id="solutions-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white"
            >
              {t('solutions.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-normal mt-2">
                {t('solutions.titleAccent')}
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light mb-6 text-gray-400">
              {t('solutions.subtitle')}
            </h2>
            
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              {t('solutions.description')}
            </p>
            
            <p className="text-sm text-gray-400 mt-6 max-w-3xl mx-auto font-light">
              {t('solutions.technologies')}
            </p>
          </motion.div>

          {/* Enhanced Solutions Grid with SEO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group"
                >
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="block h-full"
                    aria-label={`${solution.title} - ${solution.keywords}`}
                    title={`${solution.title} | Symloop Algérie - ${solution.keywords}`}
                  >
                    <article className="relative h-full rounded-xl p-8 bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                      
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                        </div>
                      </div>

                      {/* Enhanced SEO Content */}
                      <div className="relative space-y-4">
                        <header>
                          <h3 className="text-lg font-medium text-white group-hover:text-white transition-colors duration-300 leading-tight">
                            {solution.title}
                          </h3>
                          <p className="text-sm text-white/70 mt-1 font-light">
                            {solution.subtitle}
                          </p>
                        </header>
                        
                        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 font-light">
                          {solution.punchline}
                        </p>
                        
                        {/* SEO Keywords (hidden but crawlable) */}
                        <span className="sr-only">{solution.keywords}</span>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Call to Action with SEO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="mb-8">
              <p className="text-gray-400 mb-4 text-lg">
                <strong>{t('solutions.statsText')}</strong>
              </p>
              <p className="text-blue-200 text-base">
                {t('solutions.contactInfo')}
              </p>
            </div>
            
            <motion.a
              href="tel:+213549575512"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-gray-100"
              aria-label="Appeler Symloop Algérie pour votre projet digital"
            >
              {t('solutions.cta')}
              {isRTL ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </motion.a>
            
            <p className="text-sm text-gray-500 mt-4">
              {t('solutions.tagline')}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}