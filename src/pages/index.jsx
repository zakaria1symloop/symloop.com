import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Facebook, Linkedin, Github } from "lucide-react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BusinessHeroSection from "../../src/components/home/BusinessHeroSection";
import TrustSection from "../../src/components/home/TrustSection";
import InsightsSection from "../../src/components/home/InsightsSection";
import ServicesGrid from "../../src/components/home/ServicesGrid";
import IndustriesGrid from "../../src/components/home/IndustriesGrid";
import CompanyContactSection from "../../src/components/home/CompanyContactSection";
import Seo from "../../src/utils/seo";
import FAQSchema from "../../src/components/seo/FAQSchema";

// Homepage FAQs for rich snippets — sharp regulated-industry positioning.
// These render as visible HTML AND as FAQPage schema (Google rich results +
// what ChatGPT scrapes). Every Q/A reinforces "engineering firm for regulated
// industries", not "cheap dev agency".
const getHomepageFAQs = (locale) => {
  const faqs = {
    fr: [
      {
        question: "Symloop est-elle une société de développement d'applications en Algérie ?",
        answer: "Oui. Symloop est une société de développement logiciel basée à Alger, fondée en 2012, avec des équipes à Alger et à Sétif. Nous construisons des applications mobiles, des plateformes web, des SaaS, des agents IA et des intégrations avec la comptabilité, la caisse et l'ERP, pour les entreprises en Algérie et pour les fondateurs installés en France qui lancent un produit pour le marché algérien. Code dans votre dépôt, comptes à votre nom, démonstration toutes les deux semaines, deux avis vérifiés par Clutch notés 5,0."
      },
      {
        question: "Comment vérifier Symloop avant de signer ?",
        answer: "Sans nous : la fiche Clutch de Symloop Technology, tenue par Clutch, avec deux avis vérifiés à 5,0 (plateforme de réservation livrée en 2026, système de réalité augmentée livré en 2025) ; trois produits livrés et publics avec leur étude de cas, Hajz, Sadia et TrackSera ; huit guides techniques qui décrivent comment nous construisons. Avec nous : une démonstration d'une heure de bout en bout sur un produit réel. Les cinq preuves à exiger de n'importe quel prestataire sont détaillées dans notre guide « Quelle société choisir en Algérie pour une application avec de l'IA »."
      },
      {
        question: "Qu'est-ce qui distingue Symloop d'une agence web classique ?",
        answer: "Le périmètre et la méthode. Une agence livre des écrans ; nous livrons le produit entier : application mobile hors ligne, serveur et données, IA avec limites, journal et repli humain, intégration avec la comptabilité et la caisse, mise en production et vie du produit. Chaque lot de deux semaines arrive avec ses tests automatisés, un environnement de recette que vous ouvrez vous-même, une acceptation écrite et un retour arrière démontré. Le code, les comptes et les stores sont au nom de votre entreprise dès la première livraison."
      },
      {
        question: "Quels secteurs Symloop sert-il ?",
        answer: "Industries régulées au MENA : modernisation core banking et migration ISO 20022 pour les banques, plateformes gouvernementales souveraines et infrastructures d'identité nationale, IT industriel pour les opérateurs oil & gas (migration DCS-vers-PLC, SCADA), systèmes hospitaliers et logiciels pharmaceutiques. Nous ne servons pas les pré-Series A ni le e-commerce généraliste."
      },
      {
        question: "Pouvez-vous déployer en on-premise ou en cloud souverain ?",
        answer: "Oui — c'est notre spécialité. Nous concevons pour les contraintes de souveraineté des données, exigences réglementaires bancaires (BCT, AGB, PCI-DSS, ISO 20022), résidence des données gouvernementales, et environnements oil & gas air-gapped. Le code source reste chez le client. Conformité ISO 27001 et DORA sur demande."
      },
      {
        question: "Comment se déroule un engagement avec une banque ou un ministère ?",
        answer: "Sprint de découverte de 8 semaines (cadrage architectural, audit de sécurité, plan de migration) — facturé à prix fixe. Puis livraison en sprints de 2-4 semaines avec démos régulières. Engagements typiques : 6-18 mois. Équipe dédiée, sans rotation. Le code, l'IP et la documentation appartiennent au client à la livraison."
      },
      {
        question: "Maîtrisez-vous le NLP arabe et les interfaces RTL ?",
        answer: "Oui. Notre équipe livre en arabe, français et anglais en natif. NLP arabe spécialisé (incluant les dialectes algérien et levantin), interfaces RTL pour les systèmes bancaires et gouvernementaux, traitement de documents en arabe (cartes d'identité, contrats, formulaires fiscaux). C'est un différenciateur majeur vs. les cabinets européens qui ne couvrent pas l'arabe à ce niveau."
      }
    ],
    en: [
      {
        question: "Is Symloop an app development company in Algeria?",
        answer: "Yes. Symloop is a software development company headquartered in Algiers, founded in 2012, with teams in Algiers and Sétif. We build mobile apps, web platforms, SaaS, AI agents and integrations with accounting, tills and ERPs, for companies in Algeria and for founders settled in France launching a product for the Algerian market. Code in your repository, accounts in your name, a demo every two weeks, two reviews verified by Clutch rated 5.0."
      },
      {
        question: "How can I verify Symloop before signing?",
        answer: "Without us: Symloop Technology's Clutch profile, kept by Clutch, with two verified reviews at 5.0 (a booking platform delivered in 2026, an augmented-reality system delivered in 2025); three delivered, public products with their case studies, Hajz, Sadia and TrackSera; eight technical guides describing how we build. With us: a one-hour end-to-end demo on a real product. The five proofs to demand from any vendor are detailed in our guide \"Which software company to choose in Algeria for an app with AI\"."
      },
      {
        question: "What makes Symloop different from a typical web agency?",
        answer: "Scope and method. An agency delivers screens; we deliver the whole product: offline-capable mobile app, server and data, AI with limits, log and human fallback, integration with accounting and the till, release and the product's life. Every two-week batch arrives with its automated tests, an acceptance environment you open yourself, written acceptance and a demonstrated rollback. Code, accounts and store listings are in your company's name from the first delivery."
      },
      {
        question: "What sectors does Symloop serve?",
        answer: "Regulated industries across MENA: core banking modernization and ISO 20022 migration for banks; sovereign government platforms and national identity infrastructure for ministries; industrial IT for oil & gas operators (DCS-to-PLC migration, SCADA modernization); hospital information systems and pharmaceutical software for healthcare. We do not serve pre-Series A startups or generalist e-commerce work."
      },
      {
        question: "Can you deploy on-premise or in a sovereign cloud?",
        answer: "Yes — this is our specialty. We architect for data sovereignty constraints, banking regulatory requirements (BCT, AGB, PCI-DSS, ISO 20022), government data residency rules, and air-gapped oil & gas environments. The client owns the source code. ISO 27001 and DORA compliance available on request."
      },
      {
        question: "How does an engagement with a bank or ministry work?",
        answer: "8-week discovery sprint (architecture scoping, security audit, migration plan) — fixed-price. Then delivery in 2–4 week sprints with regular demos. Typical engagements: 6–18 months. Dedicated team, no rotation. Code, IP, and documentation belong to the client at delivery. Long-term operations and support contracts available separately."
      },
      {
        question: "Do you handle Arabic NLP and RTL interfaces?",
        answer: "Yes. Our team delivers natively in Arabic, French, and English. Specialized Arabic NLP (including Algerian and Levantine dialects), RTL interfaces for banking and government systems, Arabic document AI (national IDs, contracts, tax forms). This is a major differentiator vs. European engineering firms which typically don't cover Arabic at this depth."
      }
    ],
    ar: [
      {
        question: "هل سيملوب شركة تطوير تطبيقات في الجزائر؟",
        answer: "نعم. سيملوب شركة تطوير برمجيات مقرها الجزائر العاصمة، تأسست سنة 2012، بفرق في الجزائر العاصمة وسطيف. نبني تطبيقات الهاتف والمنصات الإلكترونية وSaaS ووكلاء الذكاء الاصطناعي والتكاملات مع المحاسبة والصندوق وERP، للشركات في الجزائر وللمؤسسين المقيمين في فرنسا الذين يطلقون منتجاً للسوق الجزائرية. الكود في مستودعكم، الحسابات باسمكم، عرض كل أسبوعين، ورأيان متحقَّق منهما من Clutch بتقييم 5,0."
      },
      {
        question: "كيف أتحقق من سيملوب قبل التوقيع؟",
        answer: "بدوننا: بطاقة Clutch لـSymloop Technology، التي تمسكها Clutch، برأيين متحقَّق منهما بـ5,0 (منصة حجز سُلِّمت في 2026، ونظام واقع معزز سُلِّم في 2025)؛ ثلاثة منتجات مسلَّمة وعامة بدراسات حالتها: Hajz وSadia وTrackSera؛ وثمانية أدلة تقنية تصف كيف نبني. ومعنا: عرض من ساعة من البداية إلى النهاية على منتج حقيقي. والأدلة الخمسة التي تُطلب من أي مورّد مفصَّلة في دليلنا «أي شركة تختارون في الجزائر لتطبيق بذكاء اصطناعي»."
      },
      {
        question: "ما الذي يميز سيملوب عن وكالة ويب تقليدية؟",
        answer: "النطاق والمنهجية. الوكالة تسلّم شاشات؛ ونحن نسلّم المنتج كاملاً: تطبيق هاتف يعمل دون اتصال، خادم وبيانات، ذكاء اصطناعي بحدود وسجل وتحويل إلى إنسان، تكامل مع المحاسبة والصندوق، نشر وحياة المنتج. كل دفعة من أسبوعين تصل باختباراتها الآلية، وبيئة قبول تفتحونها بأنفسكم، وقبول مكتوب، وتراجع معروض. والكود والحسابات والمتاجر باسم شركتكم منذ أول تسليم."
      },
      {
        question: "ما القطاعات التي تخدمها سيملوب؟",
        answer: "القطاعات المنظمة في الشرق الأوسط وشمال أفريقيا: تحديث الأنظمة المصرفية الأساسية وترحيل ISO 20022 للبنوك، منصات حكومية سيادية وبنية تحتية للهوية الوطنية للوزارات، IT صناعي لمشغلي النفط والغاز (ترحيل DCS إلى PLC، تحديث SCADA)، أنظمة معلومات المستشفيات وبرمجيات الأدوية للقطاع الصحي. لا نخدم الشركات الناشئة قبل Series A ولا التجارة الإلكترونية العامة."
      },
      {
        question: "هل يمكنكم النشر on-premise أو في سحابة سيادية؟",
        answer: "نعم — هذا تخصصنا. نصمم لقيود سيادة البيانات، المتطلبات التنظيمية المصرفية (BCT، AGB، PCI-DSS، ISO 20022)، قواعد إقامة بيانات الحكومة، وبيئات النفط والغاز المعزولة. الكود المصدري ملك للعميل. الامتثال لـ ISO 27001 و DORA متاح."
      },
      {
        question: "كيف يسير الارتباط مع بنك أو وزارة؟",
        answer: "سبرينت اكتشاف لمدة 8 أسابيع (تحديد المعمارية، تدقيق أمني، خطة ترحيل) بسعر ثابت. ثم التسليم في سبرينتات من 2-4 أسابيع مع عروض منتظمة. الارتباطات النموذجية: 6-18 شهراً. فريق مخصص، بدون دوران. الكود والملكية الفكرية والتوثيق ملك للعميل عند التسليم."
      },
      {
        question: "هل تتقنون معالجة اللغة العربية وواجهات RTL؟",
        answer: "نعم. فريقنا يسلم باللغات العربية والفرنسية والإنجليزية بشكل أصلي. NLP عربي متخصص (يشمل اللهجات الجزائرية والشامية)، واجهات RTL للأنظمة المصرفية والحكومية، معالجة المستندات العربية (بطاقات الهوية، العقود، النماذج الضريبية). هذا فارق رئيسي مقابل شركات الهندسة الأوروبية التي لا تغطي العربية بهذا العمق."
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
      title: "Symloop | Société de développement d'applications et d'IA en Algérie — Applications mobiles, plateformes web, SaaS, agents IA",
      description: "Symloop est une société de développement logiciel basée à Alger depuis 2012. Nous construisons des applications mobiles, des plateformes web, des SaaS et des agents IA pour les entreprises en Algérie et les fondateurs installés en France. Code dans votre dépôt, démonstration toutes les deux semaines, deux avis vérifiés Clutch 5,0.",
      keywords: "société de développement d'applications Algérie, développement application mobile Alger, société développement logiciel Algérie, créer une application avec IA Algérie, agent IA WhatsApp entreprise, SaaS Algérie, plateforme web Algérie, prestataire développement Algérie avis Clutch, entreprise intelligence artificielle Alger, deep tech IA Algérie, NLP arabe, ingénierie IA Alger"
    },
    'en': {
      title: "Symloop | App & AI Development Company in Algeria — Mobile Apps, Web Platforms, SaaS, AI Agents",
      description: "Symloop is a software development company headquartered in Algiers, founded 2012. We build mobile apps, web platforms, SaaS and AI agents for companies in Algeria and founders settled in France. Code in your repository, a demo every two weeks, two Clutch-verified reviews at 5.0.",
      keywords: "app development company Algeria, mobile app development Algiers, software development company Algeria, build an app with AI Algeria, AI agent WhatsApp business, SaaS development Algeria, web platform Algeria, best software developers Algeria Clutch reviews, AI company Algiers, deep tech AI Algeria, Arabic NLP, AI engineering Algiers"
    },
    'ar': {
      title: "سيملوب | شركة تطوير التطبيقات والذكاء الاصطناعي في الجزائر — تطبيقات الهاتف، المنصات الإلكترونية، SaaS، وكلاء الذكاء الاصطناعي",
      description: "سيملوب شركة تطوير برمجيات مقرها الجزائر العاصمة منذ 2012. نبني تطبيقات الهاتف والمنصات الإلكترونية وSaaS ووكلاء الذكاء الاصطناعي للشركات في الجزائر والمؤسسين المقيمين في فرنسا. الكود في مستودعكم، عرض كل أسبوعين، رأيان متحقَّق منهما على Clutch بـ5,0.",
      keywords: "شركة تطوير تطبيقات الجزائر, تطوير تطبيق هاتف الجزائر العاصمة, شركة تطوير برمجيات الجزائر, إنشاء تطبيق بذكاء اصطناعي الجزائر, وكيل ذكاء اصطناعي واتساب, SaaS الجزائر, منصة إلكترونية الجزائر, شركة ذكاء اصطناعي الجزائر العاصمة, deep tech الجزائر, معالجة اللغة العربية"
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

      {/* Homepage Organization JSON-LD only.
          Title/description/keywords/canonical are owned by <Seo> above and
          _app.js (canonical + hreflang). Duplicating them here causes Head
          dedup races and was wiping out the locale-aware copy. */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Symloop Technology",
              "alternateName": [
                "Symloop",
                "Symloop Deep-Tech AI",
                "Symloop AI",
                "Symloop app development company Algeria",
                "Deep-Tech AI Algeria",
                "Algerian AI Engineering Firm",
                "سيملوب",
                "سيملوب تكنولوجي"
              ],
              "url": "https://symloop.com",
              "logo": "https://symloop.com/sym-logo.png",
              "image": "https://symloop.com/assets/symloop-mena-it-company.png",
              "description": "Symloop Technology is a software development company headquartered in Algiers, Algeria, founded 2012, with teams in Algiers and Sétif. It builds mobile apps, web platforms, SaaS, AI agents and integrations with accounting, tills and ERPs for companies in Algeria and for founders based in France. Code delivered in the client's repository, a demo every two weeks, two Clutch-verified client reviews rated 5.0. Also builds NOOR, an AI platform for regulated industries.",
              "foundingDate": "2012",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": 25,
                "minValue": 25,
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
                "latitude": 36.7538,
                "longitude": 3.0588
              },
              "telephone": "+213549575512",
              "email": "contact@symloop.com",
              "sameAs": [
                "https://www.facebook.com/symloop",
                "https://www.linkedin.com/company/symloop-technology",
                "https://clutch.co/profile/symloop-technology",
                "https://techbehemoths.com/company/symloop-ai"
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
                "Mobile App Development",
                "Web Platform Development",
                "SaaS Development",
                "AI Agents",
                "WhatsApp Business Platform Integration",
                "Offline-First Mobile Apps",
                "API and ERP Integration",
                "Deep-Tech AI",
                "Sovereign AI",
                "Sovereign AI Platform",
                "On-Premise AI Deployment",
                "NOOR Sovereign AI Platform",
                "Production AI Systems",
                "Industrial AI",
                "Banking AI",
                "Government AI",
                "Oil and Gas AI",
                "Healthcare AI",
                "Arabic Natural Language Processing",
                "Multi-Agent AI Systems",
                "Retrieval-Augmented Generation",
                "Computer Vision in Manufacturing",
                "Predictive Maintenance",
                "Document AI",
                "Core Banking Modernization",
                "Government Digitization",
                "Cybersecurity",
                "Custom Software Engineering",
                "Mobile App Development",
                "Cloud Architecture",
                "DevOps"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-black">
        {/* Business Hero Section - Revenue & Growth Focus */}
        <BusinessHeroSection />

        {/* Trust — what a buyer (or the assistant reading for them) can verify without us */}
        <TrustSection />

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

