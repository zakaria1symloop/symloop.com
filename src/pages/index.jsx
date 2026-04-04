import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowRight, BookOpen, ShoppingCart, TrendingUp, DollarSign, Facebook, Linkedin, Github, Smartphone, Globe, Cpu, Home as HomeIcon, Server, Bot } from "lucide-react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ExpertiseSection from "../../src/components/home/ExpertiseSection";
import SolutionsSection from "../../src/components/home/SolutionsSection";
import TechnologySection from "../../src/components/home/TechnologySection";
import ClientsPartnersSection from "../../src/components/home/ClientsPartnersSection";
import ProductsSection from "../../src/components/home/ProductsSection";
import AIHeroSection from "../../src/components/home/AIHeroSection";
import BusinessHeroSection from "../../src/components/home/BusinessHeroSection";
import CompanyContactSection from "../../src/components/home/CompanyContactSection";
import Seo from "../../src/utils/seo";
import FAQSchema from "../../src/components/seo/FAQSchema";

import Divider from "../../src/components/home/Devider";

// Homepage FAQs for rich snippets
const getHomepageFAQs = (locale) => {
  const faqs = {
    fr: [
      {
        question: "Combien coûte le développement d'une application mobile en Algérie ?",
        answer: "Le coût varie de 180,000 DA à 1,200,000 DA selon la complexité. Une app simple coûte 180-350k DA, une app business 350-700k DA, et une app enterprise 700k-1.2M DA. Symloop offre des devis gratuits personnalisés."
      },
      {
        question: "Quels sont les délais pour créer un site e-commerce en Algérie ?",
        answer: "Un site e-commerce complet avec paiement CIB/Edahabia prend 6-12 semaines. Cela inclut design, développement, intégration paiements locaux, et formation. Livraison dans les 58 wilayas."
      },
      {
        question: "Quelles technologies utilisez-vous pour le développement mobile ?",
        answer: "Nous utilisons Flutter et React Native pour le développement cross-platform iOS/Android. Un seul code pour les deux plateformes, réduisant les coûts de 40% avec performance native."
      },
      {
        question: "Proposez-vous le support technique après livraison ?",
        answer: "Oui, tous nos projets incluent 3-12 mois de support technique gratuit. Nous offrons aussi des contrats de maintenance annuels avec support 24/7 en français, anglais et arabe."
      },
      {
        question: "Travaillez-vous avec les entreprises hors d'Algérie ?",
        answer: "Oui, nous servons toute la région MENA : Maroc, Tunisie, Émirats, Arabie Saoudite, Qatar, Koweït, Égypte. Communication en français, anglais et arabe."
      }
    ],
    en: [
      {
        question: "How much does mobile app development cost in Algeria?",
        answer: "Costs range from 180,000 DA to 1,200,000 DA depending on complexity. Simple apps cost 180-350k DA, business apps 350-700k DA, and enterprise apps 700k-1.2M DA. Symloop offers free personalized quotes."
      },
      {
        question: "What is the timeline for e-commerce website development in Algeria?",
        answer: "A complete e-commerce site with CIB/Edahabia payment takes 6-12 weeks. This includes design, development, local payment integration, and training. Delivery across all 58 wilayas."
      },
      {
        question: "What technologies do you use for mobile development?",
        answer: "We use Flutter and React Native for cross-platform iOS/Android development. Single codebase for both platforms, reducing costs by 40% while maintaining native performance."
      },
      {
        question: "Do you provide technical support after delivery?",
        answer: "Yes, all projects include 3-12 months free technical support. We also offer annual maintenance contracts with 24/7 support in French, English and Arabic."
      },
      {
        question: "Do you work with companies outside Algeria?",
        answer: "Yes, we serve the entire MENA region: Morocco, Tunisia, UAE, Saudi Arabia, Qatar, Kuwait, Egypt. Communication in French, English and Arabic."
      }
    ],
    ar: [
      {
        question: "كم يكلف تطوير تطبيق جوال في الجزائر؟",
        answer: "تتراوح التكلفة من 180,000 دج إلى 1,200,000 دج حسب التعقيد. التطبيقات البسيطة 180-350 ألف دج، تطبيقات الأعمال 350-700 ألف دج، وتطبيقات المؤسسات 700 ألف-1.2 مليون دج."
      },
      {
        question: "ما هي المدة الزمنية لتطوير موقع تجارة إلكترونية في الجزائر؟",
        answer: "موقع تجارة إلكترونية كامل مع دفع CIB/Edahabia يستغرق 6-12 أسبوعًا. يشمل التصميم والتطوير ودمج الدفع المحلي والتدريب. التسليم في جميع الولايات الـ58."
      },
      {
        question: "ما التقنيات التي تستخدمونها لتطوير الجوال؟",
        answer: "نستخدم Flutter و React Native للتطوير المتعدد المنصات iOS/Android. قاعدة كود واحدة للمنصتين، مما يقلل التكاليف بنسبة 40% مع أداء أصلي."
      },
      {
        question: "هل تقدمون الدعم التقني بعد التسليم؟",
        answer: "نعم، جميع المشاريع تشمل 3-12 شهر دعم تقني مجاني. نقدم أيضًا عقود صيانة سنوية مع دعم 24/7 بالفرنسية والإنجليزية والعربية."
      },
      {
        question: "هل تعملون مع شركات خارج الجزائر؟",
        answer: "نعم، نخدم منطقة مينا بأكملها: المغرب، تونس، الإمارات، السعودية، قطر، الكويت، مصر. التواصل بالفرنسية والإنجليزية والعربية."
      }
    ]
  };
  return faqs[locale] || faqs.fr;
};

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const typingSpeed = 100;
  const changeDelay = 3000;

  useEffect(() => {
    const placeholders = [
      t('search.placeholder1'),
      t('search.placeholder2'),
      t('search.placeholder3'),
      t('search.placeholder4')
    ];

    let index = 0;
    let letterIndex = 0;
    let typingInterval;

    const typePlaceholder = () => {
      typingInterval = setInterval(() => {
        setPlaceholder(placeholders[index].slice(0, letterIndex + 1));
        letterIndex++;
        if (letterIndex === placeholders[index].length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            index = (index + 1) % placeholders.length;
            letterIndex = 0;
            typePlaceholder();
          }, changeDelay);
        }
      }, typingSpeed);
    };

    typePlaceholder();
    return () => clearInterval(typingInterval);
  }, [t]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.toLowerCase().includes("site") || input.toLowerCase().includes("web")) {
      router.push("/services/sites-web");
    } else if (input.toLowerCase().includes("mobile") || input.toLowerCase().includes("app")) {
      router.push("/services/developpement-mobile");
    } else if (input.toLowerCase().includes("hébergement") || input.toLowerCase().includes("serveur")) {
      router.push("/services/hebergement");
    } else if (input.toLowerCase().includes("logiciel") || input.toLowerCase().includes("application")) {
      router.push("/services/logiciel");
    } else {
      router.push("/contact");
    }
  };

  const seoContent = {
    'fr': {
      title: 'Symloop Technology | #1 Intelligence Artificielle Algérie | IA, Chatbot, Machine Learning',
      description: 'Leader de l\'intelligence artificielle en Algérie. Solutions IA sur mesure: chatbots, assistants vocaux arabes, machine learning, deep learning, vision par ordinateur. Développement applications mobiles Flutter, sites e-commerce CIB/Edahabia. Expert IA Alger, Oran, Constantine, Sétif. +12 ans d\'expérience, +50 projets IA.',
      keywords: 'intelligence artificielle algérie, IA algérie, AI algeria, machine learning algérie, deep learning algérie, chatbot algérie, assistant virtuel algérie, GPT algérie, ChatGPT algérie, NLP algérie, vision par ordinateur algérie, reconnaissance vocale algérie, analyse prédictive algérie, big data algérie, data science algérie, automatisation IA algérie, entreprise IA algérie, développeur IA algérie, expert IA algérie, consultant IA algérie, développement application mobile algérie, site e-commerce algérie, paiement CIB Edahabia'
    },
    'en': {
      title: 'Symloop Technology | #1 Artificial Intelligence Algeria | AI, Chatbot, Machine Learning',
      description: 'Leading artificial intelligence company in Algeria. Custom AI solutions: chatbots, Arabic voice assistants, machine learning, deep learning, computer vision. Flutter mobile app development, e-commerce with CIB/Edahabia payment. AI expert in Algiers, Oran, Constantine, Setif. +12 years experience, +50 AI projects.',
      keywords: 'artificial intelligence algeria, AI algeria, machine learning algeria, deep learning algeria, chatbot algeria, virtual assistant algeria, GPT algeria, ChatGPT algeria, NLP algeria, computer vision algeria, speech recognition algeria, predictive analytics algeria, big data algeria, data science algeria, AI automation algeria, AI company algeria, AI developer algeria, AI expert algeria, mobile app development algeria, e-commerce algeria, CIB Edahabia payment'
    },
    'ar': {
      title: 'سيملوب تكنولوجي | #1 الذكاء الاصطناعي الجزائر | شات بوت، تعلم الآلة',
      description: 'الشركة الرائدة في الذكاء الاصطناعي في الجزائر. حلول ذكاء اصطناعي مخصصة: روبوتات الدردشة، المساعدين الصوتيين بالعربية، تعلم الآلة، التعلم العميق، الرؤية الحاسوبية. تطوير تطبيقات الجوال Flutter، مواقع التجارة الإلكترونية مع الدفع CIB/Edahabia. خبراء الذكاء الاصطناعي في الجزائر العاصمة، وهران، قسنطينة، سطيف. +12 سنة خبرة، +50 مشروع ذكاء اصطناعي.',
      keywords: 'الذكاء الاصطناعي الجزائر, ذكاء اصطناعي الجزائر, تعلم الآلة الجزائر, التعلم العميق الجزائر, شات بوت الجزائر, روبوت دردشة الجزائر, مساعد افتراضي الجزائر, GPT الجزائر, ChatGPT الجزائر, معالجة اللغة الطبيعية الجزائر, الرؤية الحاسوبية الجزائر, التعرف على الصوت الجزائر, تحليل تنبؤي الجزائر, علم البيانات الجزائر, شركة ذكاء اصطناعي الجزائر, خبير ذكاء اصطناعي الجزائر, تطوير تطبيقات الجوال الجزائر'
    }
  };

  const currentSeo = seoContent[router.locale] || seoContent['fr'];

  return (
    <>
      <Seo
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        type="website"
        image="/assets/symloop-mena-it-company.png"
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "127"
        }}
        breadcrumbs={[
          { name: "Accueil", path: "/" }
        ]}
      />
      <FAQSchema faqs={getHomepageFAQs(router.locale || 'fr')} />

      {/* Organization Schema for homepage */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Symloop Technology",
              "alternateName": ["Symloop", "سيملوب تكنولوجي"],
              "url": "https://symloop.com",
              "logo": "https://symloop.com/sym-logo.png",
              "image": "https://symloop.com/assets/symloop-mena-it-company.png",
              "description": "Leader de l'intelligence artificielle et du développement logiciel en Algérie. Solutions IA, applications mobiles Flutter, sites e-commerce, IoT, cybersécurité. +50 projets livrés dans la région MENA.",
              "foundingDate": "2014",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 10,
                "maxValue": 50
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Algeria",
                "addressRegion": "Algeria",
                "addressCountry": "DZ"
              },
              "location": [
                { "@type": "Place", "name": "Alger, Algeria" },
                { "@type": "Place", "name": "Oran, Algeria" },
                { "@type": "Place", "name": "Constantine, Algeria" },
                { "@type": "Place", "name": "Sétif, Algeria" },
                { "@type": "Place", "name": "Annaba, Algeria" }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.1919,
                "longitude": 5.4138
              },
              "telephone": "+213549575512",
              "email": "contact@symloop.com",
              "sameAs": [
                "https://www.facebook.com/symloop",
                "https://www.linkedin.com/company/symloop-technology"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+213549575512",
                  "contactType": "customer service",
                  "availableLanguage": ["French", "English", "Arabic"],
                  "areaServed": ["DZ", "MA", "TN", "AE", "SA", "QA", "KW", "EG"]
                }
              ],
              "areaServed": [
                { "@type": "Country", "name": "Algeria" },
                { "@type": "Country", "name": "Morocco" },
                { "@type": "Country", "name": "Tunisia" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "Country", "name": "Saudi Arabia" },
                { "@type": "Country", "name": "Qatar" },
                { "@type": "Country", "name": "Kuwait" },
                { "@type": "Country", "name": "Egypt" }
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Mobile App Development",
                "Flutter Development",
                "Web Development",
                "E-commerce",
                "IoT Solutions",
                "Cybersecurity",
                "Custom Software Development",
                "ERP Systems",
                "DevOps"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-black">
        {/* Business Hero Section - Revenue & Growth Focus */}
        <BusinessHeroSection />
        <Divider />
        <CompanyContactSection />
        <Divider />
        <ProductsSection />
        <Divider />
        <ClientsPartnersSection />
        <Divider />
        <ExpertiseSection />
        <Divider />
        <SolutionsSection />
        <Divider />
        <TechnologySection />
        <Divider />

      {/* Blog Highlights Section - Internal Links for SEO */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4 border border-white/20">
              <BookOpen className="w-4 h-4 text-white/70" />
              <span className="text-sm font-medium text-white/70">
                {router.locale === 'ar' ? 'موارد مجانية' : router.locale === 'en' ? 'Free Resources' : 'Ressources Gratuites'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {router.locale === 'ar' ? 'أدلة وموارد الخبراء' : router.locale === 'en' ? 'Expert Guides & Resources' : 'Guides & Ressources Expert'}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {router.locale === 'ar'
                ? 'اكتشف أدلتنا الشاملة لنجاح أعمالك الرقمية في الجزائر'
                : router.locale === 'en'
                ? 'Discover our comprehensive guides for your digital success in Algeria'
                : 'Découvrez nos guides complets pour réussir votre transformation digitale en Algérie'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* E-commerce Guide */}
            <Link href="/blog/ecommerce-cib-edahabia-algerie" className="group">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {router.locale === 'ar'
                    ? 'التجارة الإلكترونية مع CIB'
                    : router.locale === 'en'
                    ? 'E-commerce with CIB Payment'
                    : 'E-commerce avec Paiement CIB'
                  }
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {router.locale === 'ar'
                    ? 'دليل كامل للدفع عبر الإنترنت في الجزائر'
                    : router.locale === 'en'
                    ? 'Complete guide to online payment in Algeria with CIB & Edahabia'
                    : 'Guide complet du paiement en ligne en Algérie avec CIB & Edahabia'
                  }
                </p>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  {router.locale === 'ar' ? 'اقرأ المزيد' : router.locale === 'en' ? 'Read more' : 'Lire le guide'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* SEO Guide */}
            <Link href="/blog/seo-algerie" className="group">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {router.locale === 'ar'
                    ? 'دليل تحسين محركات البحث'
                    : router.locale === 'en'
                    ? 'SEO Guide Algeria 2025'
                    : 'Guide SEO Algérie 2025'
                  }
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {router.locale === 'ar'
                    ? 'استراتيجيات لتصدر نتائج Google.dz'
                    : router.locale === 'en'
                    ? 'Strategies to dominate Google.dz and triple your traffic'
                    : 'Stratégies pour dominer Google.dz et tripler votre trafic'
                  }
                </p>
                <div className="flex items-center gap-1 text-blue-400 text-sm font-medium">
                  {router.locale === 'ar' ? 'اقرأ المزيد' : router.locale === 'en' ? 'Read more' : 'Lire le guide'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* App Cost Guide */}
            <Link href="/blog/app-cost-in-algeria" className="group">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {router.locale === 'ar'
                    ? 'أسعار التطبيقات في الجزائر'
                    : router.locale === 'en'
                    ? 'App Development Costs Algeria'
                    : 'Prix Applications Mobiles Algérie'
                  }
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {router.locale === 'ar'
                    ? 'أسعار حقيقية وشفافة لتطوير التطبيقات'
                    : router.locale === 'en'
                    ? 'Real and transparent pricing for mobile app development'
                    : 'Prix réels et transparents pour le développement mobile'
                  }
                </p>
                <div className="flex items-center gap-1 text-purple-400 text-sm font-medium">
                  {router.locale === 'ar' ? 'اقرأ المزيد' : router.locale === 'en' ? 'Read more' : 'Lire le guide'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 hover:border-white/30 transition-all"
            >
              {router.locale === 'ar' ? 'عرض جميع المقالات' : router.locale === 'en' ? 'View All Articles' : 'Voir Tous les Articles'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Derniers Articles Section - Top SEO Blog Internal Links */}
      <section className="py-16 bg-black border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 rounded-full px-4 py-2 mb-4 border border-indigo-500/20">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-400">
                {router.locale === 'ar' ? 'آخر المقالات' : router.locale === 'en' ? 'Latest Articles' : 'Derniers Articles'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {router.locale === 'ar' ? 'مقالات وأدلة متخصصة 2026' : router.locale === 'en' ? 'Specialized Guides & Articles 2026' : 'Guides & Articles Spécialisés 2026'}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {router.locale === 'ar'
                ? 'أحدث الأدلة المتخصصة في تطوير البرمجيات وحلول التكنولوجيا في الجزائر'
                : router.locale === 'en'
                ? 'Our latest specialized guides on software development and technology solutions in Algeria'
                : 'Nos derniers guides spécialisés sur le développement logiciel et les solutions technologiques en Algérie'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Mobile App Development */}
            <Link href="/blog/developpement-application-mobile-algerie-2026" className="group">
              <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
                <div className="w-11 h-11 bg-cyan-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                  {router.locale === 'ar'
                    ? 'دليل تطوير تطبيقات الهاتف 2026'
                    : router.locale === 'en'
                    ? 'Mobile App Development Algeria 2026'
                    : 'Développement Application Mobile Algérie 2026'
                  }
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {router.locale === 'ar'
                    ? 'كل ما تحتاج معرفته عن تطوير التطبيقات في الجزائر: التكاليف، المدة، التقنيات.'
                    : router.locale === 'en'
                    ? 'Everything you need to know about app development in Algeria: costs, timelines, technologies.'
                    : 'Tout savoir sur le développement d\'applications mobiles en Algérie : coûts, délais, technologies.'
                  }
                </p>
                <div className="flex items-center gap-1 text-cyan-400 text-sm font-medium mt-auto">
                  {router.locale === 'ar' ? 'اقرأ المقال' : router.locale === 'en' ? 'Read article' : 'Lire l\'article'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Website Development */}
            <Link href="/blog/developpement-site-web-algerie-2026" className="group">
              <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
                <div className="w-11 h-11 bg-blue-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">
                  {router.locale === 'ar'
                    ? 'دليل تطوير مواقع الويب 2026'
                    : router.locale === 'en'
                    ? 'Website Development Algeria 2026'
                    : 'Développement Site Web Algérie 2026'
                  }
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {router.locale === 'ar'
                    ? 'إنشاء موقع ويب احترافي في الجزائر: Next.js، WordPress، التجارة الإلكترونية.'
                    : router.locale === 'en'
                    ? 'Create a professional website in Algeria: Next.js, WordPress, e-commerce solutions.'
                    : 'Créer un site web professionnel en Algérie : Next.js, WordPress, solutions e-commerce.'
                  }
                </p>
                <div className="flex items-center gap-1 text-blue-400 text-sm font-medium mt-auto">
                  {router.locale === 'ar' ? 'اقرأ المقال' : router.locale === 'en' ? 'Read article' : 'Lire l\'article'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* IoT Solutions */}
            <Link href="/blog/iot-internet-des-objets-algerie-2026" className="group">
              <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] hover:border-emerald-500/30 hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
                <div className="w-11 h-11 bg-emerald-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                  {router.locale === 'ar'
                    ? 'إنترنت الأشياء في الجزائر 2026'
                    : router.locale === 'en'
                    ? 'IoT Internet of Things Algeria 2026'
                    : 'IoT Internet des Objets Algérie 2026'
                  }
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {router.locale === 'ar'
                    ? 'حلول IoT وESP32 للشركات الجزائرية: الزراعة الذكية، المباني المتصلة.'
                    : router.locale === 'en'
                    ? 'IoT and ESP32 solutions for Algerian businesses: smart agriculture, connected buildings.'
                    : 'Solutions IoT et ESP32 pour entreprises algériennes : agriculture intelligente, bâtiments connectés.'
                  }
                </p>
                <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium mt-auto">
                  {router.locale === 'ar' ? 'اقرأ المقال' : router.locale === 'en' ? 'Read article' : 'Lire l\'article'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Smart Home */}
            <Link href="/blog/smart-home-promoteur-immobilier-algerie-2026" className="group">
              <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] hover:border-amber-500/30 hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
                <div className="w-11 h-11 bg-amber-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors leading-snug">
                  {router.locale === 'ar'
                    ? 'المنزل الذكي للمطورين العقاريين'
                    : router.locale === 'en'
                    ? 'Smart Home for Real Estate Developers'
                    : 'Smart Home Promoteur Immobilier Algérie'
                  }
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {router.locale === 'ar'
                    ? 'حلول المنزل الذكي للمطورين العقاريين في الجزائر: أتمتة، أمان، توفير الطاقة.'
                    : router.locale === 'en'
                    ? 'Smart home solutions for Algerian real estate developers: automation, security, energy savings.'
                    : 'Solutions domotiques pour promoteurs immobiliers algériens : automatisation, sécurité, économies d\'énergie.'
                  }
                </p>
                <div className="flex items-center gap-1 text-amber-400 text-sm font-medium mt-auto">
                  {router.locale === 'ar' ? 'اقرأ المقال' : router.locale === 'en' ? 'Read article' : 'Lire l\'article'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* IT Solutions */}
            <Link href="/blog/solutions-informatiques-algerie-2026" className="group">
              <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] hover:border-violet-500/30 hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
                <div className="w-11 h-11 bg-violet-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-400 transition-colors leading-snug">
                  {router.locale === 'ar'
                    ? 'حلول تكنولوجيا المعلومات الجزائر 2026'
                    : router.locale === 'en'
                    ? 'IT Solutions Algeria 2026'
                    : 'Solutions Informatiques Algérie 2026'
                  }
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {router.locale === 'ar'
                    ? 'دليل شامل لحلول تكنولوجيا المعلومات للشركات الجزائرية: ERP، CRM، السحابة.'
                    : router.locale === 'en'
                    ? 'Complete guide to IT solutions for Algerian businesses: ERP, CRM, cloud infrastructure.'
                    : 'Guide complet des solutions informatiques pour entreprises algériennes : ERP, CRM, cloud.'
                  }
                </p>
                <div className="flex items-center gap-1 text-violet-400 text-sm font-medium mt-auto">
                  {router.locale === 'ar' ? 'اقرأ المقال' : router.locale === 'en' ? 'Read article' : 'Lire l\'article'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* AI Automation */}
            <Link href="/blog/intelligence-artificielle-automatisation-business-algerie-2026" className="group">
              <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] hover:border-rose-500/30 hover:bg-white/[0.06] transition-all duration-300 h-full flex flex-col">
                <div className="w-11 h-11 bg-rose-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-rose-400 transition-colors leading-snug">
                  {router.locale === 'ar'
                    ? 'الذكاء الاصطناعي وأتمتة الأعمال'
                    : router.locale === 'en'
                    ? 'AI & Business Automation Algeria'
                    : 'IA & Automatisation Business Algérie'
                  }
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {router.locale === 'ar'
                    ? 'كيف يمكن للذكاء الاصطناعي تحويل شركتك: أتمتة، تحليل بيانات، ChatGPT.'
                    : router.locale === 'en'
                    ? 'How AI can transform your business: automation, data analysis, ChatGPT integration.'
                    : 'Comment l\'IA peut transformer votre entreprise : automatisation, analyse de données, ChatGPT.'
                  }
                </p>
                <div className="flex items-center gap-1 text-rose-400 text-sm font-medium mt-auto">
                  {router.locale === 'ar' ? 'اقرأ المقال' : router.locale === 'en' ? 'Read article' : 'Lire l\'article'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.12] text-white px-6 py-3 rounded-xl font-medium hover:bg-white/[0.12] hover:border-white/[0.2] transition-all"
            >
              {router.locale === 'ar' ? 'عرض جميع المقالات' : router.locale === 'en' ? 'View All Articles' : 'Voir Tous les Articles'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-8 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            {t('contact.followUs')}
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/symloop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/symloop-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

