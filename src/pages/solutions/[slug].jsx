import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import solutionsData from "../../utils/solutionsData";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowLeft, CheckCircle2, Phone, Mail, Star, Clock, Zap, Shield, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import ContactModal from "../../components/ContactModal";

export default function SolutionPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useTranslation('common');

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("devis");

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-pulse">Chargement...</div>
      </div>
    );
  }

  const key = Array.isArray(slug) ? slug[0] : slug;
  const solution = solutionsData[key];

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-black text-white">
        <div>
          <h1 className="text-3xl font-bold mb-4">404 — Solution introuvable</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const seoData = solution.seo;
  const locale = router.locale || 'fr';
  const title = seoData.title[locale] || seoData.title.fr;
  const description = seoData.description[locale] || seoData.description.fr;
  const keywords = seoData.keywords[locale] || seoData.keywords.fr;

  // Get content based on locale
  const baseContent = solution.content?.[locale] || solution.content?.fr;

  // Helper function to localize multilingual objects
  const localize = (obj) => {
    if (!obj) return obj;
    if (typeof obj === 'object' && (obj.fr || obj.en || obj.ar)) {
      return obj[locale] || obj.fr;
    }
    return obj;
  };

  // Helper to localize array items with multilingual properties
  const localizeArray = (arr) => {
    if (!arr) return arr;
    return arr.map(item => {
      const localized = {};
      for (const key in item) {
        if (typeof item[key] === 'object' && (item[key]?.fr || item[key]?.en || item[key]?.ar)) {
          localized[key] = item[key][locale] || item[key].fr;
        } else {
          localized[key] = item[key];
        }
      }
      return localized;
    });
  };

  // Build unified content object from either structure
  const content = {
    ...baseContent,
    // Use content[locale] data if available, otherwise fall back to top-level with localization
    whyChooseUs: baseContent?.whyChooseUs || localizeArray(solution.whyChooseUs),
    features: baseContent?.features || localizeArray(solution.features),
    useCases: baseContent?.useCases || localizeArray(solution.useCases),
    technologies: baseContent?.technologies || solution.technologies,
    pricing: baseContent?.pricing || (solution.pricing ? {
      ...solution.pricing,
      packages: solution.pricing.packages?.map(pkg => ({
        ...pkg,
        name: localize(pkg.name) || pkg.name,
        features: pkg.features?.[locale] || pkg.features?.fr || pkg.features,
        price: localize(pkg.price) || pkg.priceMulti?.[locale === 'ar' ? 'DA' : locale === 'en' ? 'USD' : 'DA'] || pkg.priceMulti?.DA
      })),
      factors: solution.pricing.factors
    } : null),
    process: baseContent?.process || localizeArray(solution.process),
    faq: baseContent?.faq || localizeArray(solution.faqs),
    cta: baseContent?.cta || (solution.cta ? {
      title: localize(solution.cta.title),
      subtitle: localize(solution.cta.subtitle),
      primaryAction: localize(solution.cta.primaryAction),
      secondaryAction: localize(solution.cta.secondaryAction)
    } : null)
  };

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://symloop.com/${locale}/solutions/${key}#service`,
        "name": title,
        "description": description,
        "provider": {
          "@type": "Organization",
          "@id": "https://symloop.com#organization",
          "name": "Symloop Technology",
          "url": "https://symloop.com",
          "logo": "https://symloop.com/sym-logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+213-549-57-55-12",
            "contactType": "sales",
            "areaServed": ["DZ", "MA", "TN", "EG", "AE", "SA"],
            "availableLanguage": ["fr", "en", "ar"]
          }
        },
        "areaServed": [
          { "@type": "Country", "name": "Algeria" },
          { "@type": "Country", "name": "Morocco" },
          { "@type": "Country", "name": "Tunisia" },
          { "@type": "Country", "name": "Egypt" },
          { "@type": "Country", "name": "UAE" },
          { "@type": "Country", "name": "Saudi Arabia" }
        ],
        "offers": content?.pricing?.packages ? content.pricing.packages.map(pkg => ({
          "@type": "Offer",
          "name": pkg.name,
          "price": pkg.price.split(' - ')[0].replace(/[^0-9]/g, ''),
          "priceCurrency": "DZD",
          "availability": "https://schema.org/InStock",
          "validFrom": new Date().toISOString().split('T')[0],
          "priceSpecification": pkg.priceMulti ? [
            { "@type": "UnitPriceSpecification", "price": pkg.priceMulti.DA?.split(' - ')[0].replace(/[^0-9]/g, ''), "priceCurrency": "DZD" },
            { "@type": "UnitPriceSpecification", "price": pkg.priceMulti.EUR?.split(' - ')[0].replace(/[^0-9]/g, ''), "priceCurrency": "EUR" },
            { "@type": "UnitPriceSpecification", "price": pkg.priceMulti.USD?.split(' - ')[0].replace(/[^0-9]/g, ''), "priceCurrency": "USD" },
            { "@type": "UnitPriceSpecification", "price": pkg.priceMulti.MAD?.split(' - ')[0].replace(/[^0-9]/g, ''), "priceCurrency": "MAD" },
            { "@type": "UnitPriceSpecification", "price": pkg.priceMulti.TND?.split(' - ')[0].replace(/[^0-9]/g, ''), "priceCurrency": "TND" }
          ] : null
        })) : {
          "@type": "AggregateOffer",
          "priceCurrency": "DZD",
          "lowPrice": content?.pricing?.min || "100000",
          "highPrice": content?.pricing?.max || "5000000",
          "offerCount": content?.pricing?.packages?.length || 3
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://symloop.com/${locale}/solutions/${key}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": locale === 'fr' ? "Accueil" : locale === 'en' ? "Home" : "الصفحة الرئيسية",
            "item": `https://symloop.com/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === 'fr' ? "Solutions" : locale === 'en' ? "Solutions" : "الحلول",
            "item": `https://symloop.com/${locale}#solutions`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": `https://symloop.com/${locale}/solutions/${key}`
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://symloop.com#localbusiness",
        "name": "Symloop Technology",
        "image": "https://symloop.com/sym-logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Algiers Business District",
          "addressLocality": "Alger",
          "addressRegion": "Algiers",
          "postalCode": "16000",
          "addressCountry": "DZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.7538,
          "longitude": 3.0588
        },
        "url": "https://symloop.com",
        "telephone": "+213-549-57-55-12",
        "priceRange": "€€€",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "CIB", "Edahabia"],
        "currenciesAccepted": "DZD, EUR, USD, MAD, TND",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://symloop.com/${locale}/solutions/${key}#faq`,
        "mainEntity": content?.faq?.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        })) || []
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="fr" href={`https://symloop.com/fr/solutions/${key}`} />
        <link rel="alternate" hrefLang="en" href={`https://symloop.com/en/solutions/${key}`} />
        <link rel="alternate" hrefLang="ar" href={`https://symloop.com/ar/solutions/${key}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://symloop.com/fr/solutions/${key}`} />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://symloop.com${router.asPath}`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://symloop.com${solution.image || '/og-image-default.jpg'}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://symloop.com/${locale}/solutions/${key}`} />
        <meta property="og:site_name" content="Symloop Technology" />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'ar_AR'} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@symloop" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://symloop.com${solution.image || '/og-image-default.jpg'}`} />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Symloop Technology" />
        <meta name="publisher" content="Symloop Technology" />
        <meta httpEquiv="Content-Language" content={locale} />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="geo.region" content="DZ" />
        <meta name="geo.placename" content="Algeria" />
        <meta name="geo.position" content="36.7538;3.0588" />
        <meta name="ICBM" content="36.7538, 3.0588" />
        <meta name="revisit-after" content="7 days" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {locale === 'en' ? 'Back to solutions' : locale === 'ar' ? 'العودة إلى الحلول' : 'Retour aux solutions'}
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-sm border border-white/20 mb-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="font-medium text-white/90">
                {locale === 'en' ? 'Digital Solutions MENA' : locale === 'ar' ? 'الحلول الرقمية منطقة مينا' : 'Solutions Digitales MENA'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white">
              {content?.headline || title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {content?.description || description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                onClick={() => openModal("consultation")}
                className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                {locale === 'en' ? 'Free Consultation' : locale === 'ar' ? 'استشارة مجانية' : 'Consultation Gratuite'}
              </button>
              <button
                onClick={() => openModal("devis")}
                className="inline-flex items-center gap-2 bg-white/10 text-white font-medium px-8 py-4 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20"
              >
                <Mail className="w-5 h-5" />
                {locale === 'en' ? 'Request a quote' : locale === 'ar' ? 'طلب عرض أسعار' : 'Demander un devis'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Long Description */}
        {content?.longDescription && (
          <div className="max-w-5xl mx-auto px-6 py-12">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              {content.longDescription}
            </p>
          </div>
        )}

        {/* Why Choose Us */}
        {content?.whyChooseUs && (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">{content.sectionTitles?.whyChooseUs || "Pourquoi Choisir Symloop ?"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {content?.features && (
          <div className="max-w-7xl mx-auto px-6 py-20 bg-white/5">
            <h2 className="text-3xl font-bold text-center mb-12">{content.sectionTitles?.features || "Fonctionnalités Complètes"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-black border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Use Cases */}
        {content?.useCases && (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-4">{content.sectionTitles?.useCases || "Cas d'Usage"}</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              {content.sectionTitles?.useCasesSubtitle || "Découvrez comment nos solutions transforment différents secteurs d'activité"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{useCase.description}</p>
                  <div className="text-xs text-green-400 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {useCase.example}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        {content?.technologies && (
          <div className="max-w-7xl mx-auto px-6 py-20 bg-white/5">
            <h2 className="text-3xl font-bold text-center mb-12">{content.sectionTitles?.technologies || "Technologies Utilisées"}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {content.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 bg-black border border-white/10 rounded-lg text-center hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-lg font-bold mb-1">{tech.name}</div>
                  <div className="text-xs text-gray-500">{tech.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing */}
        {content?.pricing && content.pricing.packages && (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-4">{content.sectionTitles?.pricing || "Tarifs Transparents"}</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              {content.sectionTitles?.pricingSubtitle || "Choisissez le package qui correspond à vos besoins et votre budget"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {(content.pricing.packages || []).map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 border rounded-2xl relative ${
                    pkg.popular
                      ? 'bg-white/10 border-white/30 scale-105'
                      : 'bg-white/5 border-white/10'
                  } hover:border-white/20 transition-all duration-300`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                        {locale === 'en' ? 'Most Popular' : locale === 'ar' ? 'الأكثر شعبية' : 'Plus Populaire'}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-2 text-green-400">
                    {pkg.priceMulti?.DA || pkg.price}
                  </div>
                  {pkg.priceMulti && (
                    <div className="text-xs text-gray-500 mb-4 space-y-1">
                      <div>{pkg.priceMulti.EUR} • {pkg.priceMulti.USD}</div>
                      <div>{pkg.priceMulti.MAD} • {pkg.priceMulti.TND}</div>
                    </div>
                  )}
                  <p className="text-sm text-gray-400 mb-6">{pkg.ideal}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${t('contact.phone')}`}
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {locale === 'en' ? 'Choose this package' : locale === 'ar' ? 'اختر هذه الباقة' : 'Choisir ce package'}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Pricing Factors */}
            {content.pricing?.factors && content.pricing.factors.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">{content.sectionTitles?.pricingFactors || "Facteurs de prix"}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.pricing.factors.map((factor, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      {factor}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Process */}
        {content?.process && (
          <div className="max-w-7xl mx-auto px-6 py-20 bg-white/5">
            <h2 className="text-3xl font-bold text-center mb-12">{content.sectionTitles?.process || content.process.title || "Notre Processus"}</h2>
            <div className="space-y-8">
              {(Array.isArray(content.process) ? content.process : content.process.steps || []).map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center font-bold">
                    {step.step || i + 1}
                  </div>
                  <div className="flex-1 bg-black border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">{typeof step.title === 'object' ? step.title[locale] : step.title}</h3>
                      {step.duration && (
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{typeof step.description === 'object' ? step.description[locale] : step.description}</p>
                    {step.deliverables && step.deliverables.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, j) => (
                          <span key={j} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {content?.faq && (
          <div className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-12">{content.sectionTitles?.faq || "Questions Fréquentes"}</h2>
            <div className="space-y-6">
              {content.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              {content?.cta?.title || "Prêt à démarrer votre projet ?"}
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {content?.cta?.subtitle || "Contactez-nous pour une consultation gratuite et un devis personnalisé"}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal("consultation")}
                className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5" />
                {locale === 'en' ? 'Free Consultation' : locale === 'ar' ? 'استشارة مجانية' : 'Consultation Gratuite'}
              </button>
              <button
                onClick={() => openModal("devis")}
                className="inline-flex items-center gap-2 bg-white/10 text-white font-medium px-8 py-4 rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20"
              >
                <Mail className="w-5 h-5" />
                {locale === 'en' ? 'Request a quote' : locale === 'ar' ? 'طلب عرض أسعار' : 'Demander un devis'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* SEO Footer Text */}
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="text-sm text-gray-500 text-center leading-relaxed">
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={title}
        type={modalType}
      />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = Object.keys(solutionsData);
  const locales = ['en', 'fr', 'ar'];

  const paths = [];
  slugs.forEach(slug => {
    locales.forEach(locale => {
      paths.push({ params: { slug }, locale });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
