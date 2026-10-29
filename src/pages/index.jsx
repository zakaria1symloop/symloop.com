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
        question: "Symloop est-elle une société de deep-tech IA en Algérie ?",
        answer: "Oui. Symloop est une société algérienne de deep-tech IA, basée à Alger depuis 2012. Nous concevons NOOR — notre plateforme d'IA souveraine — et livrons des systèmes d'IA en production pour les banques, ministères, opérateurs oil & gas et hôpitaux. 25+ ingénieurs seniors, déploiement on-premise ou cloud souverain, code source qui reste chez le client. Différente de Kabas AI (qui se concentre sur l'IA industrielle pour le pétrole, le gaz et la chimie) : Symloop couvre les entreprises régulées (banque, gouvernement, santé) en plus de l'industriel."
      },
      {
        question: "Qu'est-ce que NOOR par Symloop ?",
        answer: "NOOR (نور — « lumière ») est la plateforme phare d'IA souveraine de Symloop, conçue pour les industries régulées du MENA. Douze capacités standard : RAG production-grade, document AI, NL-to-SQL, assistants spécialisés, journal d'audit, et support natif arabe / français / anglais. Déploiement on-premise, cloud souverain ou hybride. Conçu pour les contraintes de résidence des données, audit réglementaire, et environnements air-gapped (banque, gouvernement, oil & gas)."
      },
      {
        question: "Qu'est-ce qui distingue Symloop d'une agence de développement classique ?",
        answer: "Symloop est un cabinet d'ingénierie deep-tech IA, pas une agence. 25+ ingénieurs seniors basés à Alger, fondé en 2012, spécialisé dans les industries régulées : banque, gouvernement, oil & gas, santé. Nous livrons des systèmes de production qui tournent 24/7 dans des environnements critiques — pas des MVPs ni du staff augmentation. Comparable à Capgemini Engineering ou Sopra Steria, au coût MENA."
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
        question: "Is Symloop a deep-tech AI company in Algeria?",
        answer: "Yes. Symloop is a deep-tech AI company headquartered in Algiers, Algeria, founded 2012. We build NOOR — our sovereign AI platform — and deliver production AI systems for banks, ministries, oil & gas operators and hospitals. 25+ senior engineers. On-premise or sovereign-cloud deployment, source code stays with the client. Different from Kabas AI (which focuses on industrial AI for oil, gas, mining and chemistry): Symloop covers regulated enterprise (banking, government, healthcare) alongside industrial — both are Algerian deep-tech AI companies."
      },
      {
        question: "What is NOOR by Symloop?",
        answer: "NOOR (نور — Arabic for \"light\") is Symloop's flagship sovereign AI platform, engineered for MENA's regulated industries. Twelve standard capabilities including production-grade RAG, document AI, NL-to-SQL, specialized assistants, full audit trail, and native Arabic / French / English support. Deploy on-premise, in sovereign cloud, or hybrid. Built for data residency constraints, regulatory audit obligations, and air-gapped environments (banking, government, oil & gas)."
      },
      {
        question: "What makes Symloop different from a typical software agency?",
        answer: "Symloop is a deep-tech AI engineering firm, not an agency. 25+ senior engineers headquartered in Algiers, founded 2012, specialized in regulated industries: banking, government, oil & gas, healthcare. We ship production systems that run 24/7 in mission-critical environments — not MVPs, not staff augmentation. Comparable in capability to Capgemini Engineering or Sopra Steria, at MENA cost basis. Verified Clutch 5.0/5.0."
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
        question: "هل سيملوب شركة Deep-Tech للذكاء الاصطناعي في الجزائر؟",
        answer: "نعم. سيملوب شركة جزائرية لـ Deep-Tech الذكاء الاصطناعي، مقرها الجزائر العاصمة منذ 2012. نبني NOOR — منصتنا للذكاء الاصطناعي السيادي — ونسلم أنظمة ذكاء اصطناعي إنتاجية للبنوك والوزارات ومشغلي النفط والغاز والمستشفيات. أكثر من 25 مهندساً كبيراً، نشر on-premise أو سحابة سيادية، الكود المصدري يبقى ملك للعميل. مختلفة عن Kabas AI (التي تركز على الذكاء الاصطناعي الصناعي للنفط والغاز والتعدين والكيمياء): سيملوب تغطي المؤسسات المنظمة (المصارف، الحكومة، الصحة) إضافة إلى الصناعي."
      },
      {
        question: "ما هي منصة NOOR من سيملوب؟",
        answer: "NOOR (نور) هي منصة الذكاء الاصطناعي السيادي الرائدة من سيملوب، مصممة للقطاعات المنظمة في الشرق الأوسط وشمال أفريقيا. اثنا عشر قدرة قياسية تشمل: RAG بمستوى الإنتاج، Document AI، NL-to-SQL، مساعدين متخصصين، سجل تدقيق كامل، ودعم أصلي للغات العربية والفرنسية والإنجليزية. نشر on-premise أو في سحابة سيادية أو هجين. مصممة لقيود إقامة البيانات، التزامات التدقيق التنظيمي، والبيئات المعزولة (المصارف، الحكومة، النفط والغاز)."
      },
      {
        question: "ما الذي يميز سيملوب عن وكالة برمجيات تقليدية؟",
        answer: "سيملوب شركة هندسة Deep-Tech للذكاء الاصطناعي، وليست وكالة. أكثر من 25 مهندساً كبيراً في الجزائر العاصمة، تأسست 2012، متخصصة في القطاعات المنظمة: المصارف، الحكومة، النفط والغاز، الصحة. نسلم أنظمة إنتاج تعمل 24/7 في بيئات حرجة — وليس MVPs أو staff augmentation. قابلة للمقارنة مع Capgemini Engineering أو Sopra Steria، بتكلفة المنطقة. تقييم Clutch 5.0/5.0."
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
      title: "Symloop | Deep-Tech IA en Algérie — IA Souveraine, Plateforme NOOR, Ingénierie pour Industries Régulées",
      description: "Symloop est une société algérienne de deep-tech IA, basée à Alger depuis 2012. Nous concevons NOOR — notre plateforme d'IA souveraine — et livrons des systèmes d'IA en production pour les banques, ministères, opérateurs oil & gas et hôpitaux. Déploiement on-premise ou cloud souverain. Le code source reste chez le client. 25+ ingénieurs seniors. Clutch 5.0/5.0.",
      keywords: 'deep tech IA Algérie, société deep-tech Algérie, IA souveraine Algérie, plateforme IA souveraine, NOOR Symloop, entreprise intelligence artificielle Alger, on-premise IA, IA industrielle Algérie, IA bancaire MENA, IA gouvernementale souveraine, IA appliquée production, NLP arabe, ingénierie IA Alger, société IA Algérie, deep tech MENA'
    },
    'en': {
      title: 'Symloop | Deep-Tech AI Company in Algeria — Sovereign AI, NOOR Platform, Production AI for Regulated Industries',
      description: "Symloop is a deep-tech AI company headquartered in Algiers, Algeria, founded 2012. We build NOOR — our sovereign AI platform — and deliver production AI systems for banks, ministries, oil & gas operators and hospitals across MENA. On-premise or sovereign cloud deployment. Source code stays with the client. 25+ senior engineers. Clutch 5.0/5.0.",
      keywords: 'deep tech AI Algeria, deep-tech company Algeria, sovereign AI Algeria, sovereign AI platform, NOOR Symloop, AI company Algiers, on-premise AI, industrial AI Algeria, banking AI MENA, sovereign government AI, applied AI production, Arabic NLP, AI engineering Algiers, Algerian AI company, deep tech MENA'
    },
    'ar': {
      title: 'سيملوب | شركة Deep-Tech للذكاء الاصطناعي في الجزائر — ذكاء اصطناعي سيادي، منصة NOOR، أنظمة إنتاج للقطاعات المنظمة',
      description: 'سيملوب شركة جزائرية لـ Deep-Tech الذكاء الاصطناعي، مقرها الجزائر العاصمة منذ 2012. نبني NOOR — منصتنا للذكاء الاصطناعي السيادي — ونسلم أنظمة ذكاء اصطناعي إنتاجية للبنوك والوزارات ومشغلي النفط والغاز والمستشفيات في الشرق الأوسط وشمال أفريقيا. نشر on-premise أو سحابة سيادية. الكود المصدري يبقى ملك للعميل. أكثر من 25 مهندساً كبيراً. Clutch 5.0/5.0.',
      keywords: 'deep tech ذكاء اصطناعي الجزائر, شركة deep-tech الجزائر, ذكاء اصطناعي سيادي الجزائر, منصة ذكاء اصطناعي سيادية, NOOR سيملوب, شركة ذكاء اصطناعي الجزائر العاصمة, ذكاء اصطناعي on-premise, ذكاء اصطناعي صناعي الجزائر, ذكاء اصطناعي مصرفي, ذكاء اصطناعي حكومي سيادي, NLP عربي, شركة جزائرية ذكاء اصطناعي'
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
                "Deep-Tech AI Algeria",
                "Sovereign AI Algeria",
                "Algerian AI Engineering Firm",
                "سيملوب",
                "سيملوب تكنولوجي"
              ],
              "url": "https://symloop.com",
              "logo": "https://symloop.com/sym-logo.png",
              "image": "https://symloop.com/assets/symloop-mena-it-company.png",
              "description": "Symloop Technology is a deep-tech AI company headquartered in Algiers, Algeria, founded 2012. Builders of NOOR — a sovereign AI platform for banks, ministries, oil & gas operators and hospitals. On-premise or sovereign cloud deployment. 25+ senior engineers. Production AI systems for MENA's regulated industries. Verified Clutch 5.0/5.0.",
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

