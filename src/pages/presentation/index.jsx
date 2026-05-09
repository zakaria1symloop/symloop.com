// ============================================================================
// SYMLOOP — /presentation/ (About Symloop Technology)
//
// Editorial about-us page in the Stripe / Linear / Vercel mould — restraint,
// precision, hairline borders, font-light, mono numerals. Long-form sections,
// not a slideshow. Locale-aware (en/fr/ar) with native RTL. Schema-rich
// (Organization + AboutPage + BreadcrumbList JSON-LD) for LLM and Google
// indexing. Same visual DNA as /products/noor/, /insights/banking/.
//
// Section order:
//   1. Hero          — eyebrow, statement title, dek, stat strip
//   2. What we are   — three pillars
//   3. Sectors       — banking, government, oil & gas, healthcare
//   4. Team          — engineers + capabilities matrix
//   5. How we work   — engagement model
//   6. Footprint     — geography
//   7. Founder note  — brief regulated-industries thesis
//   8. Final CTA     — engagement intake
// ============================================================================

import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Building2,
  Landmark,
  Factory,
  HeartPulse,
  Code2,
  Brain,
  Smartphone,
  Cloud,
  Cpu,
  Lock,
  Server,
  Workflow,
  ShieldCheck,
  ScrollText,
  Compass,
  Wrench,
  MessageSquare,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

// ─── Pillars (what we are) ───────────────────────────────────────────────
const PILLARS = [
  {
    num: '01',
    icon: Code2,
    title_en: 'An engineering firm. Not an agency.',
    title_fr: "Un cabinet d'ingénierie. Pas une agence.",
    title_ar: 'شركة هندسية. وليست وكالة.',
    body_en: 'Twenty-five senior engineers, salaried, in one office in Algiers. We do not subcontract. We do not flip projects between juniors. The same engineering lead who scopes a project ships it to production and operates it under SLA.',
    body_fr: "Vingt-cinq ingénieurs seniors, salariés, dans un seul bureau à Alger. Pas de sous-traitance. Pas de projets jonglés entre juniors. Le même lead ingénierie qui cadre un projet le met en production et l'opère sous SLA.",
    body_ar: 'خمسة وعشرون مهندساً بكبار الخبرات، موظفون، في مكتب واحد بالجزائر العاصمة. لا مقاولات من الباطن. لا تنقل المشاريع بين المبتدئين. نفس قائد الهندسة الذي يحدد نطاق المشروع يطلقه إلى الإنتاج ويشغله بموجب SLA.',
  },
  {
    num: '02',
    icon: ShieldCheck,
    title_en: "Regulated industries by design.",
    title_fr: 'Industries régulées dès la conception.',
    title_ar: 'القطاعات المنظمة بالتصميم.',
    body_en: 'Banking, government, oil & gas, healthcare. Every system we build is designed from day one to pass BCT, SAMA, DORA, ISO 27001, HDS audits. Audit trails, access controls, on-prem deployment, and data residency are not features added later — they are the floor.',
    body_fr: 'Banque, gouvernement, oil & gas, santé. Chaque système que nous construisons est conçu dès le premier jour pour passer les audits BCT, SAMA, DORA, ISO 27001, HDS. Pistes d\'audit, contrôles d\'accès, déploiement on-prem et résidence des données ne sont pas des fonctionnalités ajoutées après — c\'est le plancher.',
    body_ar: 'المصارف والحكومة والنفط والغاز والصحة. كل نظام نبنيه مصمم من اليوم الأول لاجتياز عمليات تدقيق BCT و SAMA و DORA و ISO 27001 و HDS. مسارات التدقيق وعناصر التحكم في الوصول والنشر on-prem وإقامة البيانات ليست ميزات تُضاف لاحقاً — إنها الأساس.',
  },
  {
    num: '03',
    icon: Server,
    title_en: 'Sovereign deployment by default.',
    title_fr: 'Déploiement souverain par défaut.',
    title_ar: 'النشر السيادي افتراضياً.',
    body_en: 'Your data stays in Algeria, in your data center, on your hardware — or on the sovereign cloud you have already approved. We build for on-premise first, and offer hybrid only when the regulator allows it. Air-gapped variants for upstream oil & gas and defense-adjacent work.',
    body_fr: 'Vos données restent en Algérie, dans votre data center, sur votre matériel — ou sur le cloud souverain que vous avez déjà approuvé. Nous construisons d\'abord pour on-premise, et n\'offrons l\'hybride que lorsque le régulateur le permet. Variantes air-gapped pour l\'oil & gas upstream et les missions liées à la défense.',
    body_ar: 'تبقى بياناتك في الجزائر، في مركز البيانات الخاص بك، على أجهزتك — أو على السحابة السيادية التي اعتمدتها بالفعل. نبني للنشر on-premise أولاً، ونقدم النشر الهجين فقط عندما يسمح المنظم بذلك. متاحة نسخ air-gapped لأعمال النفط والغاز upstream والمشاريع المرتبطة بالدفاع.',
  },
];

// ─── Sectors served ──────────────────────────────────────────────────────
const SECTORS = [
  {
    num: '01',
    icon: Building2,
    name_en: 'Banking', name_fr: 'Banque', name_ar: 'المصارف',
    body_en: 'Core banking modernization · ISO 20022 message handling · CIB, Edahabia, SATIM integration · AML/CTF transaction monitoring · KYC document AI · BCT and SAMA reporting.',
    body_fr: "Modernisation core banking · Gestion ISO 20022 · Intégration CIB, Edahabia, SATIM · Monitoring AML/CTF · IA documentaire KYC · Reporting BCT et SAMA.",
    body_ar: 'تحديث الأنظمة المصرفية الأساسية · معالجة رسائل ISO 20022 · تكامل CIB و Edahabia و SATIM · مراقبة AML/CTF · ذكاء اصطناعي للمستندات KYC · إعداد تقارير BCT و SAMA.',
  },
  {
    num: '02',
    icon: Landmark,
    name_en: 'Government', name_fr: 'Gouvernement', name_ar: 'الحكومة',
    body_en: 'Sovereign citizen platforms · National ID document AI · Inter-ministerial data exchange · Sovereign cloud residency · Multi-language administrative assistants.',
    body_fr: "Plateformes citoyennes souveraines · IA documentaire bureaux d'identité · Échange de données inter-ministériel · Résidence cloud souverain · Assistants administratifs multi-langues.",
    body_ar: 'منصات المواطن السيادية · ذكاء اصطناعي لمستندات بطاقات الهوية الوطنية · تبادل البيانات بين الوزارات · إقامة في السحابة السيادية · مساعدون إداريون متعددو اللغات.',
  },
  {
    num: '03',
    icon: Factory,
    name_en: 'Oil & Gas', name_fr: 'Oil & Gas', name_ar: 'النفط والغاز',
    body_en: 'SCADA telemetry analytics · Predictive maintenance · Computer vision for safety (PPE, leaks, intrusion) · Technical document analysis (P&IDs, procedures) · Air-gapped deployment for upstream operators.',
    body_fr: "Analyse de télémétrie SCADA · Maintenance prédictive · Vision par ordinateur pour la sécurité (EPI, fuites, intrusion) · Analyse de documentation technique (P&IDs, procédures) · Déploiement air-gapped pour opérateurs upstream.",
    body_ar: 'تحليلات القياس عن بُعد SCADA · الصيانة التنبؤية · الرؤية الحاسوبية للسلامة (PPE، التسريبات، التطفل) · تحليل الوثائق التقنية (P&IDs، الإجراءات) · نشر air-gapped لمشغلي upstream.',
  },
  {
    num: '04',
    icon: HeartPulse,
    name_en: 'Healthcare', name_fr: 'Santé', name_ar: 'الصحة',
    body_en: 'HIS / HMIS / clinic management · Pharma traceability · Medical imaging analysis · HDS-grade hosting · Clinical workflow assistants in Arabic + French · Patient data sovereignty.',
    body_fr: "HIS / HMIS / gestion clinique · Traçabilité pharma · Analyse d'imagerie médicale · Hébergement HDS · Assistants workflow clinique en arabe + français · Souveraineté des données patient.",
    body_ar: 'HIS / HMIS / إدارة العيادات · تتبع الأدوية · تحليل التصوير الطبي · استضافة بمعيار HDS · مساعدو سير العمل السريري بالعربية والفرنسية · سيادة بيانات المرضى.',
  },
];

// ─── Capabilities matrix (team) ──────────────────────────────────────────
const CAPABILITIES = [
  { icon: Code2,    name_en: 'Software engineering',   name_fr: 'Ingénierie logicielle',   name_ar: 'هندسة البرمجيات' },
  { icon: Brain,    name_en: 'Applied AI / ML',         name_fr: 'IA appliquée / ML',       name_ar: 'الذكاء الاصطناعي التطبيقي' },
  { icon: Smartphone, name_en: 'Mobile engineering',     name_fr: 'Ingénierie mobile',       name_ar: 'هندسة الجوال' },
  { icon: Cloud,    name_en: 'Cloud + DevOps',          name_fr: 'Cloud + DevOps',          name_ar: 'السحابة و DevOps' },
  { icon: Cpu,      name_en: 'IoT + embedded',          name_fr: 'IoT + embarqué',          name_ar: 'IoT والأنظمة المدمجة' },
  { icon: Lock,     name_en: 'Cybersecurity',           name_fr: 'Cybersécurité',           name_ar: 'الأمن السيبراني' },
  { icon: Server,   name_en: 'ERP + business systems',  name_fr: 'ERP + systèmes métier',   name_ar: 'ERP وأنظمة الأعمال' },
  { icon: Workflow, name_en: 'Product engineering',     name_fr: 'Ingénierie produit',      name_ar: 'هندسة المنتج' },
];

// ─── How we work ─────────────────────────────────────────────────────────
const PROCESS = [
  {
    num: 'I',
    title_en: 'Discovery sprint',
    title_fr: 'Sprint de découverte',
    title_ar: 'جلسة الاستكشاف',
    body_en: 'Two-week paid engagement. Engineering lead embedded with your team. Output: scoped problem, target architecture, regulatory map, signed engagement proposal. Walk away with a deliverable even if you do not proceed.',
    body_fr: 'Engagement payant de deux semaines. Lead ingénierie embarqué dans votre équipe. Livrable : problème cadré, architecture cible, carte réglementaire, proposition d\'engagement signée. Vous repartez avec un livrable même si vous ne continuez pas.',
    body_ar: 'مهمة مدفوعة لمدة أسبوعين. قائد هندسي مدمج مع فريقك. النتيجة: مشكلة محددة، بنية مستهدفة، خريطة تنظيمية، اقتراح ارتباط موقّع. تخرج بنتيجة قابلة للتسليم حتى لو لم تتابع.',
  },
  {
    num: 'II',
    title_en: 'Production engagement',
    title_fr: 'Engagement de production',
    title_ar: 'التزام الإنتاج',
    body_en: 'Six to eighteen months typical. Fixed-team / fixed-rate or capped time-and-materials. Bi-weekly demos to your steering committee. Production handover at the end, including runbooks, MLOps pipelines, monitoring dashboards.',
    body_fr: "Six à dix-huit mois typique. Équipe fixe / taux fixe ou temps-et-matériel plafonné. Démos bi-hebdomadaires à votre comité de pilotage. Transfert en production à la fin — runbooks, pipelines MLOps, dashboards de monitoring inclus.",
    body_ar: 'من ستة إلى ثمانية عشر شهراً عادة. فريق ثابت / سعر ثابت أو time-and-materials بسقف. عروض كل أسبوعين للجنتك التوجيهية. تسليم الإنتاج في النهاية — كتيبات التشغيل، خطوط أنابيب MLOps، لوحات المراقبة.',
  },
  {
    num: 'III',
    title_en: 'Operate or hand over',
    title_fr: 'Opérer ou transférer',
    title_ar: 'تشغيل أو تسليم',
    body_en: '99.9% SLA option, operated by our SRE team under a Managed Operations contract — or full handover to your internal team with documentation, training sprints, and a 90-day stabilization warranty.',
    body_fr: 'Option SLA 99,9% opérée par notre équipe SRE sous contrat Managed Operations — ou transfert complet à votre équipe interne avec documentation, sprints de formation et garantie de stabilisation de 90 jours.',
    body_ar: 'خيار SLA بنسبة 99.9% مُشغَّل من قبل فريق SRE الخاص بنا بموجب عقد عمليات مُدارة — أو تسليم كامل لفريقك الداخلي مع التوثيق وجلسات التدريب وضمان استقرار لمدة 90 يوماً.',
  },
];

// ─── Compliance frameworks ───────────────────────────────────────────────
const FRAMEWORKS = [
  { code: 'BCT',         scope_en: 'Banque d\'Algérie',                    scope_fr: 'Banque d\'Algérie',                    scope_ar: 'بنك الجزائر' },
  { code: 'SAMA',        scope_en: 'Saudi Central Bank',                   scope_fr: 'Banque centrale saoudienne',           scope_ar: 'البنك المركزي السعودي' },
  { code: 'DORA',        scope_en: 'EU operational resilience',            scope_fr: 'Résilience opérationnelle UE',         scope_ar: 'الصمود التشغيلي الأوروبي' },
  { code: 'ISO 27001',   scope_en: 'Information security',                 scope_fr: 'Sécurité de l\'information',           scope_ar: 'أمن المعلومات' },
  { code: 'HDS',         scope_en: 'French health data hosting',           scope_fr: 'Hébergeur de données de santé',        scope_ar: 'استضافة بيانات الصحة الفرنسية' },
  { code: 'GDPR',        scope_en: 'EU data protection',                   scope_fr: 'Protection des données UE',            scope_ar: 'حماية البيانات الأوروبية' },
];

// ─── Geographic footprint ────────────────────────────────────────────────
const FOOTPRINT = [
  { num: '01', region_en: 'Algeria',         region_fr: 'Algérie',         region_ar: 'الجزائر',         body_en: 'Algiers HQ. National banks, ministries, Sonatrach-adjacent operators, hospital networks.', body_fr: 'Siège Alger. Banques nationales, ministères, opérateurs proches de Sonatrach, réseaux hospitaliers.', body_ar: 'المقر الرئيسي في الجزائر العاصمة. البنوك الوطنية، الوزارات، المشغلون القريبون من Sonatrach، شبكات المستشفيات.' },
  { num: '02', region_en: 'GCC',             region_fr: 'Golfe',           region_ar: 'الخليج',          body_en: 'Saudi Arabia, UAE, Kuwait, Qatar — Vision 2030 / 2040 partners, Hub71 nearshore engineering, Mubadala-track work.', body_fr: 'Arabie saoudite, EAU, Koweït, Qatar — partenaires Vision 2030 / 2040, ingénierie nearshore Hub71, missions track Mubadala.', body_ar: 'المملكة العربية السعودية، الإمارات، الكويت، قطر — شركاء رؤية 2030 / 2040، هندسة nearshore لـ Hub71، أعمال track Mubadala.' },
  { num: '03', region_en: 'Maghreb',         region_fr: 'Maghreb',         region_ar: 'المغرب العربي',  body_en: 'Morocco, Tunisia — pan-Maghreb banking groups, francophone government modernization mandates.', body_fr: 'Maroc, Tunisie — groupes bancaires pan-maghrébins, missions de modernisation gouvernementale francophone.', body_ar: 'المغرب وتونس — المجموعات المصرفية المغاربية، مهام تحديث الحكومات الفرنكوفونية.' },
  { num: '04', region_en: 'Europe',          region_fr: 'Europe',          region_ar: 'أوروبا',          body_en: 'France, Spain, Germany — nearshore alternative to Capgemini Engineering and Sopra Steria for Maghreb-rooted clients and DACH industrial groups.', body_fr: 'France, Espagne, Allemagne — alternative nearshore à Capgemini Engineering et Sopra Steria pour clients enracinés au Maghreb et groupes industriels DACH.', body_ar: 'فرنسا، إسبانيا، ألمانيا — بديل nearshore لشركتي Capgemini Engineering و Sopra Steria للعملاء ذوي الجذور المغاربية والمجموعات الصناعية في DACH.' },
];

// ─── Locale dictionary ───────────────────────────────────────────────────
const COPY = {
  en: {
    metaTitle:    'About Symloop Technology — AI-native engineering for MENA regulated industries',
    metaDesc:     'Symloop Technology is an AI-native engineering firm headquartered in Algiers, founded 2012. 25+ senior engineers serving banking, government, oil & gas, and healthcare across MENA, the Gulf, and francophone Europe.',
    breadcrumb:   'About',
    hero: {
      eyebrow:   'About · Symloop Technology · Algiers · Founded 2012',
      title:     'An engineering firm. Not an agency.',
      dek:       'Symloop Technology is an AI-native engineering firm headquartered in Algiers. Twenty-five senior engineers, twelve years of production work, and a single focus: regulated industries across MENA — banking, government, oil & gas, healthcare.',
      stats: [
        { v: '2012',  k: 'Founded' },
        { v: '25+',   k: 'Senior engineers' },
        { v: '4',     k: 'Sectors served' },
        { v: '3',     k: 'Languages of operation' },
        { v: '5.0',   k: 'Clutch · verified' },
      ],
      ctaPrimary:   'Discuss an engagement',
      ctaSecondary: 'See production work',
    },
    pillars:    { eyebrow: '01 / What we are',     title: 'A different kind of engineering firm.' },
    sectors:    { eyebrow: '02 / Sectors',         title: 'Where we ship in production.' },
    team:       { eyebrow: '03 / Team',            title: 'Twenty-five senior engineers in one office.', body: 'Salaried, in Algiers, full-stack across the eight engineering disciplines below. No subcontracting. The engineering lead who scopes a project ships it to production and operates it. Native operation in Arabic, French, and English — across Algerian dialect, Modern Standard Arabic, and Levantine.' },
    process:    { eyebrow: '04 / How we work',     title: 'Three phases. No surprises.' },
    frameworks: { eyebrow: '05 / Compliance',      title: 'Audited against six regulatory frameworks.', body: 'Every system we build is designed from day one to clear these audits. We carry the documentation, the test evidence, and the regulator-facing artifacts so you do not have to assemble them at the end.' },
    footprint:  { eyebrow: '06 / Footprint',       title: 'Where we operate.' },
    founder:    { eyebrow: '07 / Why we exist',    title: 'A note from the founding team.', body_lines: [
      'In 2012, the gap between European engineering firms and Algerian agencies looked simple. The European firms — Capgemini, Sopra, Atos — billed at €700–1,200 a day for engineers who built reliable, regulated, audit-ready systems. The Algerian agencies billed at one-tenth that, but built for the small business and the launch, not the regulator and the audit.',
      'We started Symloop to close that gap from the Algerian side. Twelve years later, we are an engineering firm sized like a tier-two European house, billed at MENA cost, with the audit posture European banks and ministries actually need. Sovereign deployment by default. Documentation in three languages. The same engineer for the lifecycle of the engagement.',
      'We do not work on every brief. We say no to projects we cannot ship. The brief that fits us best: a regulated operator in MENA, a real production problem, and a steering committee that wants the audit cleared on time.',
    ] },
    cta: {
      eyebrow:    'Engage',
      title:      'Tell us about a regulated production problem.',
      body:       'Two-week paid discovery sprint. You walk away with a scoped engagement proposal and a target architecture, even if you do not proceed.',
      primary:    'Request a discovery sprint',
      secondary:  'Email contact@symloop.com',
    },
  },
  fr: {
    metaTitle:    "À propos de Symloop Technology — Cabinet d'ingénierie IA pour industries régulées MENA",
    metaDesc:     "Symloop Technology est un cabinet d'ingénierie IA-native dont le siège est à Alger, fondé en 2012. 25+ ingénieurs seniors au service des secteurs bancaire, gouvernemental, oil & gas, et santé à travers le MENA, le Golfe et l'Europe francophone.",
    breadcrumb:   'À propos',
    hero: {
      eyebrow:   "À propos · Symloop Technology · Alger · Fondé 2012",
      title:     "Un cabinet d'ingénierie. Pas une agence.",
      dek:       "Symloop Technology est un cabinet d'ingénierie IA-native dont le siège est à Alger. Vingt-cinq ingénieurs seniors, douze ans de production, et une seule focale : les industries régulées au MENA — banque, gouvernement, oil & gas, santé.",
      stats: [
        { v: '2012',  k: 'Fondé en' },
        { v: '25+',   k: 'Ingénieurs seniors' },
        { v: '4',     k: 'Secteurs servis' },
        { v: '3',     k: "Langues d'opération" },
        { v: '5.0',   k: 'Clutch · vérifié' },
      ],
      ctaPrimary:   'Discuter un engagement',
      ctaSecondary: 'Voir nos productions',
    },
    pillars:    { eyebrow: '01 / Ce que nous sommes',  title: "Un autre type de cabinet d'ingénierie." },
    sectors:    { eyebrow: '02 / Secteurs',           title: 'Où nous livrons en production.' },
    team:       { eyebrow: '03 / Équipe',             title: 'Vingt-cinq ingénieurs seniors dans un même bureau.', body: "Salariés, à Alger, full-stack sur les huit disciplines d'ingénierie ci-dessous. Pas de sous-traitance. Le lead ingénierie qui cadre un projet le met en production et l'opère. Opération native en arabe, français et anglais — dialecte algérien, arabe moderne standard et levantin." },
    process:    { eyebrow: '04 / Comment on travaille', title: 'Trois phases. Pas de surprises.' },
    frameworks: { eyebrow: '05 / Conformité',         title: 'Audités sur six cadres réglementaires.', body: "Chaque système que nous construisons est conçu dès le premier jour pour passer ces audits. Nous portons la documentation, les preuves de tests et les artefacts pour le régulateur — vous n'avez pas à les assembler à la fin." },
    footprint:  { eyebrow: '06 / Empreinte',          title: 'Où nous opérons.' },
    founder:    { eyebrow: '07 / Pourquoi nous existons', title: "Note de l'équipe fondatrice.", body_lines: [
      "En 2012, l'écart entre les cabinets d'ingénierie européens et les agences algériennes paraissait simple. Les cabinets européens — Capgemini, Sopra, Atos — facturaient 700 à 1 200 € par jour pour des ingénieurs qui construisaient des systèmes régulés, fiables, prêts pour l'audit. Les agences algériennes facturaient au dixième de ce tarif, mais construisaient pour la petite entreprise et le lancement — pas pour le régulateur et l'audit.",
      "Nous avons fondé Symloop pour fermer cet écart depuis le côté algérien. Douze ans plus tard, nous sommes un cabinet d'ingénierie de la taille d'une ESN tier-deux européenne, facturé au coût MENA, avec la posture d'audit que les banques et ministères européens attendent réellement. Déploiement souverain par défaut. Documentation en trois langues. Le même ingénieur pour le cycle de vie de l'engagement.",
      "Nous ne travaillons pas sur tous les briefs. Nous disons non aux projets que nous ne pouvons pas livrer. Le brief qui nous va le mieux : un opérateur régulé au MENA, un vrai problème de production, et un comité de pilotage qui veut l'audit passé dans les temps.",
    ] },
    cta: {
      eyebrow:    "S'engager",
      title:      'Parlez-nous d\'un problème de production en environnement régulé.',
      body:       "Sprint de découverte payant de deux semaines. Vous repartez avec une proposition d'engagement cadrée et une architecture cible, même si vous ne continuez pas.",
      primary:    'Demander un sprint de découverte',
      secondary:  'Écrire à contact@symloop.com',
    },
  },
  ar: {
    metaTitle:    'حول سيملوب تكنولوجي — هندسة IA-native للقطاعات المنظمة في MENA',
    metaDesc:     'سيملوب تكنولوجي شركة هندسية IA-native مقرها الجزائر العاصمة، تأسست عام 2012. أكثر من 25 مهندساً بكبار الخبرات يخدمون قطاعات المصارف والحكومة والنفط والغاز والصحة عبر MENA والخليج وأوروبا الفرنكوفونية.',
    breadcrumb:   'حول',
    hero: {
      eyebrow:   'حول · سيملوب تكنولوجي · الجزائر العاصمة · تأسست 2012',
      title:     'شركة هندسية. لا وكالة.',
      dek:       'سيملوب تكنولوجي شركة هندسية IA-native مقرها الجزائر العاصمة. خمسة وعشرون مهندساً بكبار الخبرات، اثنا عشر عاماً من العمل في الإنتاج، وتركيز واحد: القطاعات المنظمة عبر MENA — المصارف، الحكومة، النفط والغاز، الصحة.',
      stats: [
        { v: '2012',  k: 'تأسست' },
        { v: '+25',   k: 'مهندس بكبار الخبرات' },
        { v: '4',     k: 'قطاعات نخدمها' },
        { v: '3',     k: 'لغات التشغيل' },
        { v: '5.0',   k: 'Clutch · موثق' },
      ],
      ctaPrimary:   'ناقش ارتباطاً',
      ctaSecondary: 'استعرض أعمال الإنتاج',
    },
    pillars:    { eyebrow: '01 / من نحن',             title: 'نوع مختلف من الشركات الهندسية.' },
    sectors:    { eyebrow: '02 / القطاعات',          title: 'أين نطلق في الإنتاج.' },
    team:       { eyebrow: '03 / الفريق',            title: 'خمسة وعشرون مهندساً بكبار الخبرات في مكتب واحد.', body: 'موظفون، في الجزائر العاصمة، full-stack عبر التخصصات الهندسية الثمانية أدناه. لا مقاولات من الباطن. القائد الهندسي الذي يحدد نطاق المشروع يطلقه إلى الإنتاج ويشغله. تشغيل أصلي بالعربية والفرنسية والإنجليزية — العربية الجزائرية، العربية الفصحى الحديثة، والشامية.' },
    process:    { eyebrow: '04 / كيف نعمل',           title: 'ثلاث مراحل. بلا مفاجآت.' },
    frameworks: { eyebrow: '05 / الامتثال',           title: 'مدققون مقابل ستة أطر تنظيمية.', body: 'كل نظام نبنيه مصمم من اليوم الأول لاجتياز هذه التدقيقات. نحن نحمل التوثيق وأدلة الاختبار والمستندات الموجهة للمنظم — حتى لا تضطر إلى تجميعها في النهاية.' },
    footprint:  { eyebrow: '06 / النطاق الجغرافي',    title: 'أين نعمل.' },
    founder:    { eyebrow: '07 / لماذا نوجد',         title: 'ملاحظة من الفريق المؤسس.', body_lines: [
      'في عام 2012، بدت الفجوة بين الشركات الهندسية الأوروبية والوكالات الجزائرية بسيطة. كانت الشركات الأوروبية — Capgemini و Sopra و Atos — تفوتر 700 إلى 1,200 يورو في اليوم لمهندسين يبنون أنظمة موثوقة منظمة جاهزة للتدقيق. أما الوكالات الجزائرية، فكانت تفوتر بعشر هذا السعر، لكنها كانت تبني للأعمال الصغيرة والإطلاق — لا للمنظم والتدقيق.',
      'بدأنا سيملوب لسد تلك الفجوة من الجانب الجزائري. بعد اثني عشر عاماً، نحن شركة هندسية بحجم بيت أوروبي من الفئة الثانية، نفوتر بتكلفة MENA، مع وضع تدقيقي تحتاجه البنوك والوزارات الأوروبية فعلاً. النشر السيادي افتراضياً. التوثيق بثلاث لغات. نفس المهندس لدورة حياة الارتباط.',
      'لا نعمل على كل brief. نقول لا للمشاريع التي لا يمكننا إطلاقها. الـbrief الأنسب لنا: مشغل منظم في MENA، مشكلة إنتاج حقيقية، ولجنة توجيهية تريد اجتياز التدقيق في الوقت المحدد.',
    ] },
    cta: {
      eyebrow:    'تواصل',
      title:      'حدّثنا عن مشكلة إنتاج في بيئة منظمة.',
      body:       'جلسة استكشاف مدفوعة لمدة أسبوعين. تخرج باقتراح ارتباط محدد النطاق وبنية مستهدفة، حتى لو لم تتابع.',
      primary:    'اطلب جلسة استكشاف',
      secondary:  'راسل contact@symloop.com',
    },
  },
};

// ─── Component ───────────────────────────────────────────────────────────
export default function PresentationPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = COPY[locale] || COPY.en;
  const arrowIcon = isRtl ? <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} /> : <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />;

  // ── JSON-LD ──
  const aboutPageLd = {
    '@context': 'https://schema.org',
    '@type':    'AboutPage',
    name:        c.metaTitle,
    description: c.metaDesc,
    url:         'https://symloop.com/presentation/',
    inLanguage:  isRtl ? 'ar' : (locale === 'fr' ? 'fr' : 'en'),
    isPartOf:    { '@type': 'WebSite', name: 'Symloop Technology', url: 'https://symloop.com' },
    about:       { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.breadcrumb === 'حول' ? 'الرئيسية' : (c.breadcrumb === 'À propos' ? 'Accueil' : 'Home'), item: 'https://symloop.com/' },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb,                                                                               item: 'https://symloop.com/presentation/' },
    ],
  };

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        <meta name="keywords" content="symloop technology, about symloop, symloop algiers, AI engineering firm MENA, regulated industries engineering, banking software algeria, government digitisation MENA, oil & gas IT, healthcare HIS algeria, ingénierie IA, شركة هندسة" />
        <link rel="canonical" href="https://symloop.com/presentation/" key="canonical" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDesc} />
        <meta property="og:url" content="https://symloop.com/presentation/" />
        <meta property="og:site_name" content="Symloop Technology" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.metaTitle} />
        <meta name="twitter:description" content={c.metaDesc} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      </Head>

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white selection:bg-white selection:text-black">

        {/* ════════════════════════════════════════════════════════════════
            1. HERO
            ════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          {/* Subtle radial wash, no gradients on UI */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
               style={{ backgroundImage: 'radial-gradient(ellipse at 20% 10%, rgba(255,255,255,0.6), transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(255,255,255,0.4), transparent 50%)' }} />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-24 lg:pb-32">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mb-10">
                {c.hero.eyebrow}
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-[44px] md:text-[72px] lg:text-[88px] leading-[0.98] font-light tracking-[-0.02em] text-white mb-12 max-w-5xl">
                {c.hero.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="text-[17px] md:text-[20px] leading-[1.65] text-white/55 font-light max-w-3xl mb-16">
                {c.hero.dek}
              </motion.p>

              {/* Stat strip */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/[0.06] border border-white/[0.06] mb-16">
                {c.hero.stats.map((s, i) => (
                  <div key={i} className="bg-black p-6 lg:p-7">
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/35 mb-3">{s.k}</div>
                    <div className="text-[32px] lg:text-[44px] font-light tracking-tight text-white leading-none">{s.v}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Link href="/contact/" className="group inline-flex items-center gap-3 bg-white text-black px-7 py-4 text-[13px] tracking-[0.05em]">
                  <span>{c.hero.ctaPrimary}</span>
                  {arrowIcon}
                </Link>
                <Link href="/case-studies/" className="group inline-flex items-center gap-3 px-7 py-4 border border-white/15 hover:border-white/40 text-[13px] tracking-[0.05em] transition-colors text-white/70 hover:text-white">
                  <span>{c.hero.ctaSecondary}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            2. WHAT WE ARE — three pillars
            ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-14">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">{c.pillars.eyebrow}</span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[34px] md:text-[52px] font-light tracking-tight leading-[1.05] text-white max-w-4xl mb-16">
                {c.pillars.title}
              </motion.h2>

              <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
                {PILLARS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <motion.article key={p.num} variants={fadeUp} className="bg-black p-8 lg:p-10 flex flex-col">
                      <div className="flex items-center justify-between mb-10">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">{p.num}</span>
                        <Icon className="w-4 h-4 text-white/40" strokeWidth={1.25} />
                      </div>
                      <h3 className="text-[22px] lg:text-[26px] font-light leading-[1.15] tracking-tight text-white mb-6">
                        {p[`title_${locale}`] || p.title_en}
                      </h3>
                      <p className="text-[14px] leading-[1.7] text-white/55 font-light">
                        {p[`body_${locale}`] || p.body_en}
                      </p>
                    </motion.article>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            3. SECTORS
            ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-14">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">{c.sectors.eyebrow}</span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[34px] md:text-[52px] font-light tracking-tight leading-[1.05] text-white max-w-4xl mb-16">
                {c.sectors.title}
              </motion.h2>

              <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
                {SECTORS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.article key={s.num} variants={fadeUp} className="bg-black p-8 lg:p-12">
                      <div className="flex items-center justify-between mb-10">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">{s.num}</span>
                        <Icon className="w-5 h-5 text-white/40" strokeWidth={1.25} />
                      </div>
                      <h3 className="text-[28px] lg:text-[36px] font-light tracking-tight text-white mb-6">
                        {s[`name_${locale}`] || s.name_en}
                      </h3>
                      <p className="text-[14px] leading-[1.75] text-white/55 font-light">
                        {s[`body_${locale}`] || s.body_en}
                      </p>
                    </motion.article>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            4. TEAM — engineers + capabilities matrix
            ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-14">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">{c.team.eyebrow}</span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
                <motion.h2 variants={fadeUp} className="lg:col-span-7 text-[34px] md:text-[48px] font-light tracking-tight leading-[1.08] text-white">
                  {c.team.title}
                </motion.h2>
                <motion.p variants={fadeUp} className="lg:col-span-5 text-[15px] leading-[1.75] text-white/55 font-light">
                  {c.team.body}
                </motion.p>
              </div>

              {/* Capabilities matrix — 4 cols × 2 rows */}
              <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
                {CAPABILITIES.map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <motion.div key={i} variants={fadeUp} className="bg-black p-7 lg:p-8">
                      <div className="flex items-center justify-between mb-8">
                        <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">{String(i + 1).padStart(2, '0')}</span>
                        <Icon className="w-4 h-4 text-white/40" strokeWidth={1.25} />
                      </div>
                      <div className="text-[15px] font-light text-white leading-snug">
                        {cap[`name_${locale}`] || cap.name_en}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            5. HOW WE WORK
            ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-14">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">{c.process.eyebrow}</span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[34px] md:text-[52px] font-light tracking-tight leading-[1.05] text-white max-w-4xl mb-20">
                {c.process.title}
              </motion.h2>

              <motion.ol variants={stagger} className="space-y-px bg-white/[0.06] border border-white/[0.06]">
                {PROCESS.map((p) => (
                  <motion.li key={p.num} variants={fadeUp} className="bg-black p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
                      <span className="block text-[40px] lg:text-[56px] tracking-tight text-white/15 font-light leading-none mb-3">{p.num}</span>
                      <span>Phase {p.num}</span>
                    </div>
                    <div className="lg:col-span-4">
                      <h3 className="text-[22px] lg:text-[28px] font-light tracking-tight text-white leading-[1.15]">
                        {p[`title_${locale}`] || p.title_en}
                      </h3>
                    </div>
                    <p className="lg:col-span-6 text-[14px] leading-[1.75] text-white/55 font-light">
                      {p[`body_${locale}`] || p.body_en}
                    </p>
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            6. COMPLIANCE FRAMEWORKS
            ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-14">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">{c.frameworks.eyebrow}</span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
                <motion.h2 variants={fadeUp} className="lg:col-span-7 text-[34px] md:text-[48px] font-light tracking-tight leading-[1.08] text-white">
                  {c.frameworks.title}
                </motion.h2>
                <motion.p variants={fadeUp} className="lg:col-span-5 text-[15px] leading-[1.75] text-white/55 font-light">
                  {c.frameworks.body}
                </motion.p>
              </div>

              <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
                {FRAMEWORKS.map((f, i) => (
                  <motion.div key={f.code} variants={fadeUp} className="bg-black p-7 lg:p-8 flex items-baseline gap-5">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-white/35">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="text-[20px] lg:text-[24px] font-light tracking-tight text-white mb-2">{f.code}</div>
                      <div className="text-[12px] leading-[1.5] text-white/45 font-light">
                        {f[`scope_${locale}`] || f.scope_en}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            7. FOOTPRINT
            ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-14">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">{c.footprint.eyebrow}</span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[34px] md:text-[52px] font-light tracking-tight leading-[1.05] text-white max-w-4xl mb-20">
                {c.footprint.title}
              </motion.h2>

              <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
                {FOOTPRINT.map((f) => (
                  <motion.article key={f.num} variants={fadeUp} className="bg-black p-8 lg:p-10">
                    <div className="flex items-baseline gap-5 mb-6">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-white/35">{f.num}</span>
                      <span className="h-px flex-1 bg-white/[0.06]" />
                    </div>
                    <h3 className="text-[24px] lg:text-[30px] font-light tracking-tight text-white mb-5">
                      {f[`region_${locale}`] || f.region_en}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-white/55 font-light">
                      {f[`body_${locale}`] || f.body_en}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            8. FOUNDER NOTE
            ════════════════════════════════════════════════════════════════ */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-baseline gap-5 mb-14">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/35">{c.founder.eyebrow}</span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[30px] md:text-[42px] font-light tracking-tight leading-[1.1] text-white mb-14">
                {c.founder.title}
              </motion.h2>

              <div className="space-y-7">
                {c.founder.body_lines.map((line, i) => (
                  <motion.p key={i} variants={fadeUp} className="text-[16px] md:text-[18px] leading-[1.75] text-white/65 font-light">
                    {line}
                  </motion.p>
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-16 pt-10 border-t border-white/[0.08] font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                — Symloop Technology · Algiers · 2012 → ∞
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            9. FINAL CTA
            ════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
               style={{ backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.5), transparent 55%)' }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mb-10">
                {c.cta.eyebrow}
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[36px] md:text-[60px] lg:text-[80px] font-light tracking-[-0.02em] leading-[1] text-white mb-12 max-w-5xl">
                {c.cta.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[16px] md:text-[18px] leading-[1.7] text-white/55 font-light max-w-3xl mb-14">
                {c.cta.body}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Link href="/contact/?intent=discovery-sprint" className="group inline-flex items-center gap-3 bg-white text-black px-8 py-5 text-[13px] tracking-[0.05em]">
                  <span>{c.cta.primary}</span>
                  {arrowIcon}
                </Link>
                <a href="mailto:contact@symloop.com" className="inline-flex items-center gap-3 px-8 py-5 border border-white/15 hover:border-white/40 text-[13px] tracking-[0.05em] transition-colors text-white/70 hover:text-white">
                  <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>{c.cta.secondary}</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
