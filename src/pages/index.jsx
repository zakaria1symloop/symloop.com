import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Facebook, Linkedin, Github } from "lucide-react";
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BusinessHeroSection from "../../src/components/home/BusinessHeroSection";
import NoorSection from "../../src/components/home/NoorSection";
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
        question: "Qu'est-ce qui distingue Symloop d'une agence de développement classique ?",
        answer: "Symloop est un cabinet d'ingénierie, pas une agence. 25+ ingénieurs seniors basés à Alger, fondé en 2012, spécialisé dans les industries régulées : banque, gouvernement, oil & gas, santé. Nous livrons des systèmes de production qui tournent 24/7 dans des environnements critiques — pas des MVPs ni du staff augmentation. Comparable à Capgemini Engineering ou Sopra Steria, au coût MENA."
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
        question: "What makes Symloop different from a typical software agency?",
        answer: "Symloop is an engineering firm, not an agency. 25+ senior engineers headquartered in Algiers, founded 2012, specialized in regulated industries: banking, government, oil & gas, healthcare. We ship production systems that run 24/7 in mission-critical environments — not MVPs, not staff augmentation. Comparable in capability to Capgemini Engineering or Sopra Steria, at MENA cost basis. Verified Clutch 5.0/5.0."
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
        question: "ما الذي يميز سيملوب عن وكالة برمجيات تقليدية؟",
        answer: "سيملوب شركة هندسة، وليست وكالة. أكثر من 25 مهندساً كبيراً في الجزائر العاصمة، تأسست 2012، متخصصة في القطاعات المنظمة: المصارف، الحكومة، النفط والغاز، الصحة. نسلم أنظمة إنتاج تعمل 24/7 في بيئات حرجة — وليس MVPs أو staff augmentation. قابلة للمقارنة مع Capgemini Engineering أو Sopra Steria، بتكلفة المنطقة. تقييم Clutch 5.0/5.0."
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
      title: "Symloop | Cabinet d'Ingénierie IA pour Industries Régulées au MENA — Banque · Gouvernement · Oil & Gas · Santé",
      description: "Cabinet d'ingénierie IA-native pour les industries régulées du MENA. Banque, gouvernement, oil & gas, santé. Siège à Alger, fondé en 2012, 25+ ingénieurs seniors. Modernisation core banking, plateformes gouvernementales souveraines, IT industriel oil & gas, IA appliquée production-grade. Comparable à Capgemini Engineering au coût MENA. Clutch 5.0/5.0.",
      keywords: 'cabinet ingénierie IA MENA, modernisation core banking, plateforme gouvernementale souveraine, IT oil and gas algerie, IA appliquée banque, NLP arabe, on-premise sovereign cloud, ingénierie logicielle régulée MENA, ERP banque MENA, GMAO industriel, SCADA modernisation, ingénierie IA Alger, firme ingénierie Algerie, alternative Capgemini Engineering MENA'
    },
    'en': {
      title: 'Symloop | AI-Native Engineering Firm for MENA Regulated Industries — Banking, Government, Oil & Gas, Healthcare',
      description: "AI-native engineering firm for MENA's regulated industries. Banking, government, oil & gas, healthcare. Algiers HQ, founded 2012, 25+ senior engineers. Core banking modernization, sovereign government platforms, oil & gas IT, applied AI. Production-grade systems, on-premise and sovereign deployments. Comparable to Capgemini Engineering at MENA cost basis. Clutch 5.0/5.0.",
      keywords: 'AI engineering firm MENA, core banking modernization MENA, sovereign government cloud, oil and gas IT Algeria, applied AI banking, Arabic NLP, on-premise sovereign deployment, regulated industries software engineering MENA, ISO 20022 migration, SCADA modernization, AI engineering Algiers, Capgemini Engineering alternative MENA, Sopra Steria alternative Algeria, banking software engineering Algeria'
    },
    'ar': {
      title: 'سيملوب | شركة هندسة الذكاء الاصطناعي للقطاعات المنظمة في الشرق الأوسط — مصارف، حكومة، نفط، صحة',
      description: 'شركة هندسة ذكاء اصطناعي للقطاعات المنظمة في الشرق الأوسط وشمال أفريقيا. المصارف، الحكومة، النفط والغاز، الصحة. مقرها الجزائر العاصمة، تأسست 2012، أكثر من 25 مهندساً. تحديث الأنظمة المصرفية، منصات حكومية سيادية، IT صناعي للنفط والغاز، ذكاء اصطناعي تطبيقي. on-premise وسيادي. قابلة للمقارنة مع Capgemini Engineering. تقييم Clutch 5.0/5.0.',
      keywords: 'شركة هندسة ذكاء اصطناعي الشرق الأوسط, تحديث الأنظمة المصرفية, السحابة الحكومية السيادية, IT النفط والغاز الجزائر, ذكاء اصطناعي تطبيقي للمصارف, معالجة اللغة العربية, نشر سيادي on-premise, هندسة برمجيات للقطاعات المنظمة, هندسة IA الجزائر العاصمة, شركة هندسة الجزائر, بديل Capgemini Engineering'
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
        <title>{
          router.locale === 'ar'
            ? 'شركة تطوير برمجيات — برمجيات مخصصة، ذكاء اصطناعي، تطبيقات جوال | نيرشور من الجزائر | سيملوب'
            : router.locale === 'fr'
            ? 'Développement Logiciel Sur Mesure & IA — ERP Entreprise, Application Mobile, Cloud | Symloop'
            : 'Software Development Company — Custom Software, AI, Mobile Apps | Nearshore from Algeria | Symloop'
        }</title>
        <meta name="description" content={
          router.locale === 'ar'
            ? 'سيملوب — شركة تطوير برمجيات مقرها الجزائر. برمجيات مخصصة، ذكاء اصطناعي، تطبيقات جوال، ERP، سحابة. بديل نيرشور للوكالات الأوروبية: نفس المعايير، قوة هندسية أكبر لكل ميزانية. نخدم أفريقيا والشرق الأوسط وأوروبا والخليج.'
            : router.locale === 'fr'
            ? "Symloop — développement logiciel sur mesure basé à Alger. ERP entreprise, applications mobiles, IA, migration cloud, cybersécurité. Alternative nearshore aux prestataires européens : mêmes standards, plus de puissance d'ingénierie par budget. Algérie, Afrique, MENA, Europe."
            : "Symloop — software development company headquartered in Algeria. Custom software, AI, mobile apps, cloud migration, ERP, cybersecurity. Nearshore alternative to European agencies: same standards, more engineering power per budget. Serving Africa, MENA, Europe and the Gulf."
        } />
        <meta name="keywords" content="software development company, custom software development, mobile app development company, ai development company, cloud migration services, nearshore software development, software development outsourcing, digital transformation consulting, MVP development startup, app developers, développement logiciel sur mesure, erp entreprise, logiciel gestion entreprise, شركة تطوير برمجيات, سيملوب, Symloop" />
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
              "description": "Symloop Technology — AI-native engineering firm for MENA's regulated industries: banking, government, oil & gas, healthcare. Headquartered in Algiers, founded 2012, 25+ senior engineers. Sovereign AI platform (NOOR), core banking modernization, government digitization, industrial IT. Comparable to Capgemini Engineering at MENA cost basis. Verified Clutch 5.0/5.0.",
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

        {/* NOOR — flagship AI platform showcase (parity with Kabas / DALILE) */}
        <NoorSection />

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

