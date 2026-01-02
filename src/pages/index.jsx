import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ArrowRight, BookOpen, ShoppingCart, TrendingUp, DollarSign } from "lucide-react";
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
import AIOnboarding from "../../src/components/onboarding/AIOnboarding";
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
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const typingSpeed = 100;
  const changeDelay = 3000;

  // Check if user has seen onboarding
  useEffect(() => {
    setIsClient(true);
    const hasSeenOnboarding = localStorage.getItem('symloop_onboarding_seen');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  // Handle onboarding complete
  const handleOnboardingComplete = (answers) => {
    localStorage.setItem('symloop_onboarding_seen', 'true');
    setShowOnboarding(false);
  };

  // Handle onboarding skip
  const handleOnboardingSkip = () => {
    localStorage.setItem('symloop_onboarding_seen', 'true');
    setShowOnboarding(false);
  };

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
      {/* AI Onboarding Screen */}
      {isClient && showOnboarding && (
        <AIOnboarding
          onComplete={handleOnboardingComplete}
          onSkip={handleOnboardingSkip}
        />
      )}

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
      <div className="min-h-screen flex flex-col">
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">
                {router.locale === 'ar' ? 'موارد مجانية' : router.locale === 'en' ? 'Free Resources' : 'Ressources Gratuites'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {router.locale === 'ar' ? 'أدلة وموارد الخبراء' : router.locale === 'en' ? 'Expert Guides & Resources' : 'Guides & Ressources Expert'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {router.locale === 'ar'
                    ? 'التجارة الإلكترونية مع CIB'
                    : router.locale === 'en'
                    ? 'E-commerce with CIB Payment'
                    : 'E-commerce avec Paiement CIB'
                  }
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {router.locale === 'ar'
                    ? 'دليل كامل للدفع عبر الإنترنت في الجزائر'
                    : router.locale === 'en'
                    ? 'Complete guide to online payment in Algeria with CIB & Edahabia'
                    : 'Guide complet du paiement en ligne en Algérie avec CIB & Edahabia'
                  }
                </p>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  {router.locale === 'ar' ? 'اقرأ المزيد' : router.locale === 'en' ? 'Read more' : 'Lire le guide'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* SEO Guide */}
            <Link href="/blog/seo-algerie" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {router.locale === 'ar'
                    ? 'دليل تحسين محركات البحث'
                    : router.locale === 'en'
                    ? 'SEO Guide Algeria 2025'
                    : 'Guide SEO Algérie 2025'
                  }
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {router.locale === 'ar'
                    ? 'استراتيجيات لتصدر نتائج Google.dz'
                    : router.locale === 'en'
                    ? 'Strategies to dominate Google.dz and triple your traffic'
                    : 'Stratégies pour dominer Google.dz et tripler votre trafic'
                  }
                </p>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                  {router.locale === 'ar' ? 'اقرأ المزيد' : router.locale === 'en' ? 'Read more' : 'Lire le guide'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* App Cost Guide */}
            <Link href="/blog/app-cost-in-algeria" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {router.locale === 'ar'
                    ? 'أسعار التطبيقات في الجزائر'
                    : router.locale === 'en'
                    ? 'App Development Costs Algeria'
                    : 'Prix Applications Mobiles Algérie'
                  }
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {router.locale === 'ar'
                    ? 'أسعار حقيقية وشفافة لتطوير التطبيقات'
                    : router.locale === 'en'
                    ? 'Real and transparent pricing for mobile app development'
                    : 'Prix réels et transparents pour le développement mobile'
                  }
                </p>
                <div className="flex items-center gap-1 text-purple-600 text-sm font-medium">
                  {router.locale === 'ar' ? 'اقرأ المزيد' : router.locale === 'en' ? 'Read more' : 'Lire le guide'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {router.locale === 'ar' ? 'عرض جميع المقالات' : router.locale === 'en' ? 'View All Articles' : 'Voir Tous les Articles'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            {t('contact.followUs')}
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/symloop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/symloop-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaGithub className="w-6 h-6" />
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

