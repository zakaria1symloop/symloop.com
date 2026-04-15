import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Facebook, Linkedin, Github } from "lucide-react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BusinessHeroSection from "../../src/components/home/BusinessHeroSection";
import InsightsSection from "../../src/components/home/InsightsSection";
import ServicesGrid from "../../src/components/home/ServicesGrid";
import IndustriesGrid from "../../src/components/home/IndustriesGrid";
import CompanyContactSection from "../../src/components/home/CompanyContactSection";
import Seo from "../../src/utils/seo";
import FAQSchema from "../../src/components/seo/FAQSchema";

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
        breadcrumbs={[
          { name: "Accueil", path: "/" }
        ]}
      />
      <FAQSchema faqs={getHomepageFAQs(router.locale || 'fr')} />

      {/* SEO Meta + Organization Schema for homepage */}
      <Head>
        <title>Développement Logiciel & Intelligence Artificielle Algérie — Startup, ERP, Mobile, Cloud | Symloop</title>
        <meta name="description" content="Symloop — atelier d'ingénierie logicielle et IA basé à Alger. Développement sur mesure, apps mobiles, ERP, IoT, cybersécurité, cloud. Startups et entreprises en Algérie, Afrique, MENA et Europe. +213 549 575 512." />
        <meta name="keywords" content="développement logiciel algérie, intelligence artificielle algérie, startup algérie, application mobile algérie, ERP sur mesure algérie, software development algeria, AI company algeria, startup africa, développement application mobile alger, logiciel sur mesure algérie, cybersécurité algérie, cloud devops algérie, سيملوب, شركة برمجة الجزائر, ذكاء اصطناعي الجزائر, Symloop" />
        <link rel="canonical" href="https://symloop.com/" />
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
              "description": "Symloop est une entreprise d'ingénierie logicielle et d'IA en Algérie. Solutions IA sur mesure (vision par ordinateur, NLP arabe et Darija, LLM, analyse prédictive), systèmes industriels, IoT, cloud et cybersécurité. Livraison en Algérie, MENA et Europe. Profil Clutch vérifié 5.0/5.0.",
              "foundingDate": "2020",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 10,
                "maxValue": 25
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
                "latitude": 36.7538,
                "longitude": 3.0588
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

        {/* Section 2 — Insights / thought leadership (Accenture power slot) */}
        <InsightsSection />

        {/* Services capabilities — solution-first, AI-led */}
        <ServicesGrid />

        {/* Industry verticals where Symloop has delivered real projects */}
        <IndustriesGrid />

        {/* Contact / discovery call */}
        <CompanyContactSection />

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

