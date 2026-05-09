"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowLeft, Calendar, Clock, User, MapPin, Globe, CheckCircle, Phone, Mail,
  Star, TrendingUp, Zap, Shield, Search, Smartphone, ShoppingCart, Building2, ArrowRight
} from "lucide-react";

export default function CreationSiteWebSetif2026() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRTL = locale === 'ar';

  const content = {
    fr: {
      metaTitle: "Creation Site Web Setif 2026 | Site Internet Professionnel | Symloop Setif",
      metaDesc: "Creation site web a Setif. Agence locale specialisee sites vitrines, e-commerce, portails. Design moderne, SEO inclus, hebergement. Devis gratuit 24h. Symloop Setif.",
      title: "Creation de Site Web a Setif",
      subtitle: "Agence Web Locale - Sites Professionnels, E-commerce, Portails Sur Mesure",
      category: "Creation Site Web Setif",
      date: "13 Janvier 2026",
      readTime: "8 min",
      author: "Symloop Setif",

      intro: "Vous cherchez un createur de site web a Setif ? Symloop, agence web basee a Setif, cree des sites internet professionnels pour les entreprises locales. Site vitrine, e-commerce, portail web - nous realisons votre projet digital avec un design moderne et un referencement optimise pour Google.",

      types: {
        title: "Types de Sites Web que Nous Creons a Setif",
        list: [
          { icon: Globe, name: "Site Vitrine", desc: "Presentez votre entreprise avec elegance. Design moderne, responsive, optimise SEO.", price: "A partir de 120,000 DA" },
          { icon: ShoppingCart, name: "Site E-commerce", desc: "Vendez en ligne avec paiement CIB/Edahabia. Catalogue, panier, gestion commandes.", price: "A partir de 280,000 DA" },
          { icon: Building2, name: "Site Corporate", desc: "Image professionnelle pour PME et grandes entreprises. Multilingue, securise.", price: "A partir de 200,000 DA" },
          { icon: Search, name: "Site SEO", desc: "Site optimise pour Google. Positionnement local Setif et national.", price: "A partir de 150,000 DA" }
        ]
      },

      features: {
        title: "Ce Qui Est Inclus dans Nos Sites Web",
        list: [
          "Design sur mesure et moderne",
          "Responsive mobile/tablette",
          "Optimisation SEO Google",
          "Hebergement 1 an inclus",
          "Certificat SSL securite",
          "Formation utilisation",
          "Support technique 6 mois",
          "Nom de domaine .dz ou .com"
        ]
      },

      process: {
        title: "Notre Processus de Creation",
        steps: [
          { num: "1", title: "Rencontre", desc: "Rdv dans nos bureaux a Setif. Analyse de vos besoins et objectifs." },
          { num: "2", title: "Maquette", desc: "Design personnalise valide par vous avant developpement." },
          { num: "3", title: "Developpement", desc: "Creation du site avec suivi en temps reel." },
          { num: "4", title: "Livraison", desc: "Mise en ligne, formation et support continu." }
        ]
      },

      localSeo: {
        title: "Referencement Local Setif",
        text: "Nous optimisons votre site pour apparaitre en premiere page Google sur les recherches locales : 'votre activite + Setif'. Fiche Google Business, citations locales, et contenu geo-cible inclus."
      },

      portfolio: {
        title: "Sites Web Realises a Setif",
        projects: [
          { name: "Restaurant Le Gourmet", type: "Site Vitrine", result: "Page 1 Google 'restaurant setif'" },
          { name: "Boutique Mode Elegance", type: "E-commerce", result: "+150 commandes/mois" },
          { name: "Cabinet Avocat Benmansour", type: "Site Corporate", result: "+80% appels clients" },
          { name: "Auto-Ecole Setifienne", type: "Site Vitrine", result: "Top 3 Google local" }
        ]
      },

      zones: ["Setif Centre", "Cite Maabouda", "Ain Trick", "El Hidhab", "Chouf Lekdad", "Cite 1000 Logements", "Ain Arnat", "El Eulma", "Ain Oulmene"],

      faq: [
        { q: "Combien coute un site web a Setif ?", a: "Site vitrine a partir de 120,000 DA, e-commerce a partir de 280,000 DA. Devis gratuit personnalise." },
        { q: "Quel est le delai de creation ?", a: "Site vitrine : 2-3 semaines. E-commerce : 4-6 semaines. Express possible (+30%)." },
        { q: "Proposez-vous la maintenance ?", a: "Oui, contrats maintenance mensuelle ou annuelle avec mises a jour et support." },
        { q: "Le site sera-t-il visible sur Google ?", a: "Absolument. SEO inclus dans tous nos sites. Referencement local Setif optimise." }
      ],

      cta: {
        title: "Creez Votre Site Web a Setif",
        desc: "Rencontrez-nous dans nos bureaux a Setif. Consultation gratuite et devis sous 24h.",
        phone: "+213 549 575 512",
        email: "contact@symloop.com"
      },

      keywords: "creation site web setif, site internet setif, agence web setif, creer site setif, developpeur web setif, site vitrine setif, e-commerce setif, referencement setif",
      backToBlog: "Retour au Blog"
    },
    en: {
      metaTitle: "Website Creation Setif 2026 | Professional Website | Symloop Setif",
      metaDesc: "Website creation in Setif. Local agency specialized in showcase sites, e-commerce, portals. Modern design, SEO included, hosting. Free quote 24h. Symloop Setif.",
      title: "Website Creation in Setif",
      subtitle: "Local Web Agency - Professional Sites, E-commerce, Custom Portals",
      category: "Website Creation Setif",
      date: "January 13, 2026",
      readTime: "8 min",
      author: "Symloop Setif",
      intro: "Looking for a website creator in Setif? Symloop, a Setif-based web agency, creates professional websites for local businesses.",
      types: { title: "Types of Websites We Create in Setif", list: [
        { icon: Globe, name: "Showcase Site", desc: "Present your business elegantly. Modern, responsive, SEO-optimized design.", price: "From 120,000 DA" },
        { icon: ShoppingCart, name: "E-commerce Site", desc: "Sell online with CIB/Edahabia payment. Catalog, cart, order management.", price: "From 280,000 DA" },
        { icon: Building2, name: "Corporate Site", desc: "Professional image for SMEs and large companies. Multilingual, secure.", price: "From 200,000 DA" },
        { icon: Search, name: "SEO Site", desc: "Google-optimized site. Local Setif and national positioning.", price: "From 150,000 DA" }
      ]},
      features: { title: "What's Included", list: ["Custom modern design", "Mobile/tablet responsive", "Google SEO optimization", "1 year hosting included", "SSL security certificate", "Usage training", "6 months technical support", ".dz or .com domain name"] },
      process: { title: "Our Creation Process", steps: [
        { num: "1", title: "Meeting", desc: "Appointment at our Setif offices. Analysis of your needs." },
        { num: "2", title: "Mockup", desc: "Custom design validated by you before development." },
        { num: "3", title: "Development", desc: "Site creation with real-time tracking." },
        { num: "4", title: "Delivery", desc: "Go-live, training and ongoing support." }
      ]},
      localSeo: { title: "Local Setif SEO", text: "We optimize your site to appear on Google's first page for local searches." },
      portfolio: { title: "Websites Created in Setif", projects: [
        { name: "Le Gourmet Restaurant", type: "Showcase", result: "Page 1 Google 'restaurant setif'" },
        { name: "Elegance Fashion Boutique", type: "E-commerce", result: "+150 orders/month" }
      ]},
      zones: ["Setif Center", "Maabouda", "Ain Trick", "El Hidhab"],
      faq: [{ q: "How much does a website cost in Setif?", a: "Showcase site from 120,000 DA, e-commerce from 280,000 DA." }],
      cta: { title: "Create Your Website in Setif", desc: "Meet us at our Setif offices. Free consultation.", phone: "+213 549 575 512", email: "contact@symloop.com" },
      keywords: "website creation setif, web agency setif",
      backToBlog: "Back to Blog"
    },
    ar: {
      metaTitle: "إنشاء موقع ويب سطيف 2026 | موقع احترافي | Symloop سطيف",
      metaDesc: "إنشاء مواقع ويب في سطيف. وكالة محلية متخصصة. تصميم حديث، SEO مشمول. عرض مجاني.",
      title: "إنشاء موقع ويب في سطيف",
      subtitle: "وكالة ويب محلية - مواقع احترافية، تجارة إلكترونية",
      category: "إنشاء موقع سطيف",
      date: "13 يناير 2026",
      readTime: "8 دقائق",
      author: "Symloop سطيف",
      intro: "تبحث عن منشئ مواقع ويب في سطيف؟ Symloop وكالة محلية تنشئ مواقع احترافية للشركات المحلية.",
      types: { title: "أنواع المواقع", list: [
        { icon: Globe, name: "موقع عرض", desc: "قدم شركتك بأناقة. تصميم حديث ومتجاوب.", price: "ابتداءً من 120,000 دج" },
        { icon: ShoppingCart, name: "تجارة إلكترونية", desc: "بيع عبر الإنترنت مع دفع CIB.", price: "ابتداءً من 280,000 دج" }
      ]},
      features: { title: "ما المشمول", list: ["تصميم مخصص", "متجاوب للجوال", "تحسين SEO", "استضافة سنة"] },
      process: { title: "عمليتنا", steps: [{ num: "1", title: "لقاء", desc: "موعد في مكاتبنا بسطيف." }] },
      localSeo: { title: "SEO محلي سطيف", text: "نحسن موقعك للظهور في الصفحة الأولى من Google." },
      portfolio: { title: "مواقع منجزة", projects: [] },
      zones: ["سطيف الوسط"],
      faq: [{ q: "كم يكلف موقع ويب؟", a: "موقع عرض من 120,000 دج." }],
      cta: { title: "أنشئ موقعك في سطيف", desc: "قابلنا في مكاتبنا.", phone: "+213 549 575 512", email: "contact@symloop.com" },
      keywords: "إنشاء موقع سطيف",
      backToBlog: "العودة للمدونة"
    }
  };

  const t = content[locale] || content.fr;

  const faqsForSchema = [
    {
      question: "Combien coute un site web a Setif ?",
      answer: "Chez Symloop a Setif, un site vitrine professionnel demarre a partir de 120,000 DA et un site e-commerce a partir de 280,000 DA. Devis gratuit personnalise disponible. Contactez Symloop au +213 549 575 512."
    },
    {
      question: "Quel est le delai de creation d'un site web a Setif ?",
      answer: "Symloop livre un site vitrine en 2-3 semaines et un site e-commerce en 4-6 semaines. Un mode express est disponible avec supplement de 30%. Appelez le +213 549 575 512 pour planifier votre projet."
    },
    {
      question: "Le site sera-t-il bien reference sur Google ?",
      answer: "Oui, tous les sites crees par Symloop incluent l'optimisation SEO complete : referencement local Setif, fiche Google Business, balises meta, vitesse optimisee. Contact : +213 549 575 512."
    },
    {
      question: "Proposez-vous la maintenance apres livraison ?",
      answer: "Symloop propose des contrats de maintenance mensuelle ou annuelle incluant mises a jour, sauvegardes, support technique et corrections. Nos bureaux sont a Setif. Appelez le +213 549 575 512."
    },
    {
      question: "Quelles technologies utilise Symloop pour les sites web ?",
      answer: "Symloop utilise les technologies modernes : React, Next.js, WordPress selon les besoins. Tous nos sites sont responsive, securises (SSL) et optimises pour la performance. Contact Symloop Setif : +213 549 575 512."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Symloop - Creation Site Web Setif",
        "description": t.metaDesc,
        "url": "https://symloop.com/blog/creation-site-web-setif-2026",
        "telephone": "+213549575512",
        "email": "contact@symloop.com",
        "address": { "@type": "PostalAddress", "addressLocality": "Alger", "addressRegion": "Alger", "addressCountry": "DZ" },
        "geo": { "@type": "GeoCoordinates", "latitude": "36.7538", "longitude": "3.0588" },
        "areaServed": { "@type": "City", "name": "Setif" },
        "priceRange": "120000 DA - 500000 DA",
        "openingHours": "Mo-Sa 08:00-18:00"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqsForSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://symloop.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://symloop.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Creation Site Web Setif 2026", "item": "https://symloop.com/blog/creation-site-web-setif-2026" }
        ]
      },
      {
        "@type": "Article",
        "headline": t.title,
        "description": t.metaDesc,
        "author": { "@type": "Organization", "name": "Symloop" },
        "publisher": {
          "@type": "Organization",
          "name": "Symloop",
          "logo": { "@type": "ImageObject", "url": "https://symloop.com/logo.png" }
        },
        "datePublished": "2026-01-13",
        "mainEntityOfPage": "https://symloop.com/blog/creation-site-web-setif-2026",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".en-bref", "h1"]
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href={`https://symloop.com/blog/creation-site-web-setif-2026`} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_DZ' : locale === 'en' ? 'en_US' : 'fr_DZ'} />
        <meta name="geo.region" content="DZ-19" />
        <meta name="geo.placename" content="Setif" />
        <meta name="geo.position" content="36.1919;5.4138" />
        <meta name="ICBM" content="36.1919, 5.4138" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <main className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-black to-cyan-600/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4" />{t.backToBlog}
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />{t.category}
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Setif #1</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{t.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{t.readTime}</span>
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{t.author}</span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* En bref - LLM Optimized Summary */}
            <div className="en-bref bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-bold text-blue-300 mb-2">En bref</h2>
              <p className="text-gray-300">
                Symloop crée des sites web professionnels à Sétif. Sites vitrines, e-commerce, applications web. Équipe locale, technologies modernes. Contact&nbsp;: <a href="tel:+213549575512" className="text-blue-400 font-semibold">+213 549 575 512</a>.
              </p>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">{t.intro}</p>

            {/* Types de sites */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.types.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.types.list.map((type, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                    <type.icon className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{type.desc}</p>
                    <p className="text-blue-400 font-semibold">{type.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">{t.features.title}</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {t.features.list.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.process.title}</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {t.process.steps.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">{step.num}</div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local SEO */}
            <div className="mb-16 bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Search className="w-10 h-10 text-green-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-green-400">{t.localSeo.title}</h2>
                  <p className="text-gray-300">{t.localSeo.text}</p>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            {t.portfolio.projects.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">{t.portfolio.title}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.portfolio.projects.map((p, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-bold">{p.name}</h3>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{p.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">{p.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Zones */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">Zones Couvertes a Setif</h2>
              <div className="flex flex-wrap gap-2">
                {t.zones.map((z, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">{z}</span>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Questions Frequentes</h2>
              <div className="space-y-4">
                {t.faq.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold mb-2">{item.q}</h3>
                    <p className="text-gray-400">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-links */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Articles Recommandés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/developpement-site-web-algerie-2026" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                  <h3 className="font-bold group-hover:text-blue-400 transition-colors mb-2">Développement Site Web Algérie 2026</h3>
                  <p className="text-sm text-gray-400">Guide complet du développement de sites web en Algérie.</p>
                  <span className="flex items-center gap-2 mt-3 text-blue-400 text-sm font-medium">Lire l'article <ArrowRight className="w-4 h-4" /></span>
                </Link>
                <Link href="/blog/agence-developpement-web-setif-2026" className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                  <h3 className="font-bold group-hover:text-blue-400 transition-colors mb-2">Agence Développement Web Sétif 2026</h3>
                  <p className="text-sm text-gray-400">Votre agence de développement web de confiance à Sétif.</p>
                  <span className="flex items-center gap-2 mt-3 text-blue-400 text-sm font-medium">Lire l'article <ArrowRight className="w-4 h-4" /></span>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-gray-300 mb-6">{t.cta.desc}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${t.cta.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium">
                  <Phone className="w-5 h-5" />{t.cta.phone}
                </a>
                <a href={`mailto:${t.cta.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg">
                  <Mail className="w-5 h-5" />{t.cta.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
