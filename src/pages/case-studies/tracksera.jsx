// ============================================================================
// SYMLOOP — Case study: TrackSera
//
// Editorial case study page. Self-contained EN/FR/AR content. Premium design
// matching /insights/ and /outsourcing/ — black background, hairline borders,
// mono eyebrow labels, font-light headlines, measured whitespace.
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  en: {
    eyebrow:     'Case Study · N°01',
    client:      'TrackSera',
    tagline:     'Distribution management platform for Algeria. Web + 3 mobile apps.',
    dek:         'TrackSera is the leading distribution management SaaS in Algeria. Symloop engineered the full platform — multi-tenant web application, three native Android apps (Seller, Driver, Cashvan), GPS tracking, offline-first sync, and the infrastructure that runs it all in production.',
    publishedAt: 'Delivered 2024 · Operating 2026',
    duration:    '18 months · 4 engineers',
    url:         'https://www.tracksera.com',

    stats: [
      { value: '4',       label: 'Products shipped (1 web + 3 mobile)' },
      { value: '10+',     label: 'Core modules delivered' },
      { value: '3',       label: 'Languages (AR · FR · EN)' },
      { value: 'Offline', label: 'First architecture — with auto-sync' },
    ],

    overview: {
      eyebrow: 'Project overview',
      title:   'The problem.',
      body: [
        'Distribution and wholesale companies in Algeria run one of the most operationally complex businesses in the country — dozens of SKUs, multiple warehouses, fleets of delivery vehicles, mobile sales reps with truck-loaded stock, cash handling, credit management, and reporting across all of it. Most were running this on Excel, paper, or imported software that did not understand local payment methods, Arabic RTL, or the reality of operating in a network-intermittent environment.',
        'The founders of TrackSera came to Symloop in 2023 with a clear but ambitious brief: build the distribution management platform Algeria needed, ship it as a proper SaaS, and engineer it so it would still work when the driver has no 4G signal in the middle of a rural delivery route.',
        'The product had to be multi-tenant from day one, trilingual (Arabic, French, English) with full RTL support, mobile-first for the field operations, and desktop-first for the office. And it had to be priced for the Algerian market — from free tier up to enterprise — without cutting on engineering quality.',
      ],
    },

    solution: {
      eyebrow: 'What we built',
      title:   'Four products. One platform.',
      body: [
        '**The web application** runs the entire back office: order management, purchasing, stock across multiple warehouses with expiry-date tracking, client database with category-based pricing, cash register per user with daily reconciliation, and a full reporting engine exporting to PDF and Excel. Multi-tenant architecture with isolated data per tenant. Professional PDF invoicing, delivery notes, and a purchase-order workflow tied to supplier debt tracking.',
        '**Tracksera Vendeur** — the seller Android app — lets sales reps take orders on the road, view client history, and manage quotes without a laptop. Works offline, syncs when connectivity returns.',
        '**Tracksera Livreur** — the driver Android app — handles delivery routes with live GPS tracking, turn-by-turn directions, proof-of-delivery capture (photo + digital signature), and real-time status updates back to the office.',
        '**Tracksera Cashvan** — the mobile-sales app — loads stock onto a truck, sells direct to clients, prints invoices via Bluetooth receipt printer, handles returns, and reconciles cash at end of day. All offline-capable.',
      ],
    },

    architecture: {
      eyebrow: 'Engineering architecture',
      title:   'Built to run where the network sometimes does not.',
      body: [
        '**Backend** — Node.js + PostgreSQL multi-tenant architecture with strict tenant isolation at the database level. Redis for session and rate-limit layers. REST API designed for both web and mobile consumers, versioned from day one. Background workers for invoice generation, report exports, and scheduled syncs.',
        '**Web frontend** — Next.js with server-side rendering for the public marketing pages, client-side app for the authenticated dashboard. Full i18n with next-i18next for Arabic RTL, French, and English. Chart.js for analytics, custom PDF renderer for invoices.',
        '**Android apps** — Native Android (Kotlin), not Flutter or React Native. The field operations needed hardware-level control: Bluetooth thermal printer integration for Cashvan invoices, GPS background tracking for Livreur, and SQLite local databases with custom sync conflict resolution for offline-first operation.',
        '**Infrastructure** — Dockerized services behind an Nginx reverse proxy. Automated PostgreSQL backups, structured logging, and uptime monitoring. Deployed on a managed cloud platform with staging and production environments separated.',
      ],
    },

    challenges: {
      eyebrow: 'What was hard',
      title:   'The engineering problems that mattered.',
      items: [
        {
          heading: 'Offline-first, not offline-fallback',
          body: 'Most apps that claim offline support actually break the moment connectivity drops. For TrackSera, the mobile apps had to assume offline by default — a driver in rural Algeria has no signal for hours. We built a local SQLite layer with an event-sourced queue, conflict-resolution rules per entity type, and a background sync worker. The apps are fully operational without network.',
        },
        {
          heading: 'Multi-tenant from day one',
          body: 'Every distribution company is a tenant with its own data, users, pricing plans, and configuration. Tenant isolation at the database level, row-level security policies, and tenant-aware API authentication — all built in from the first commit, not retrofitted.',
        },
        {
          heading: 'Arabic RTL everywhere',
          body: 'Arabic is not an afterthought — it is the default language for most operators. Full RTL support in the web dashboard, in every PDF invoice, in every Android screen, with proper Arabic number formatting, Islamic calendar dates, and bi-directional text handling where Arabic and French mix.',
        },
        {
          heading: 'Bluetooth thermal printing from Android',
          body: 'Cashvan sellers print invoices on truck-mounted Bluetooth thermal printers. No library handled this cleanly for the local printer models, so we built the ESC/POS protocol integration ourselves and maintained our own driver for three printer manufacturers.',
        },
      ],
    },

    outcomes: {
      eyebrow: 'Outcomes',
      title:   'What shipped, what it runs on.',
      items: [
        'Platform went live in 2024 and has been running in production since — currently serving distribution and wholesale operators across Algeria.',
        'Four-tier pricing model (Free, Starter, Pro, Business) live on the platform with self-service billing via CCP and BaridiMob — the two most common payment methods in Algeria.',
        'Three Android apps published as APKs for direct installation on operator devices, with auto-update mechanism that doesn\'t require Play Store distribution.',
        'Website (tracksera.com) delivers product information in Arabic, French, and English, with full RTL and SEO optimization for the Algerian distribution market.',
      ],
    },

    tech: {
      eyebrow: 'Tech stack',
      items: ['Node.js', 'PostgreSQL', 'Next.js', 'Kotlin Android', 'Redis', 'Docker', 'Nginx', 'Bluetooth ESC/POS', 'GPS tracking', 'Offline SQLite sync'],
    },

    faq: {
      eyebrow: 'Frequently asked',
      title:   'What buyers usually ask about this project.',
      items: [
        {
          q: 'How long did it take to build TrackSera from scratch?',
          a: 'The full platform — web application plus three Android apps — took 18 months end-to-end with a team of 4 senior engineers. The first mobile app was in production at month 8. Multi-tenant infrastructure, offline sync, and Bluetooth printing integration were the longest-lead engineering items.',
        },
        {
          q: 'Can you build a similar multi-tenant SaaS for my industry?',
          a: 'Yes. We engineer multi-tenant SaaS platforms with offline-capable mobile apps across distribution, wholesale, fintech, healthcare, and industrial logistics. The architecture patterns transfer — tenant isolation, offline-first sync, RTL support, Bluetooth hardware integration, multi-warehouse stock — what changes is the domain logic.',
        },
        {
          q: 'Why native Android instead of Flutter or React Native?',
          a: 'For field operations with Bluetooth receipt printers, background GPS tracking, and unreliable connectivity, native Android (Kotlin) gave us hardware-level control that cross-platform frameworks do not. For products where hardware integration is lighter, Flutter or React Native is often the better economic choice — we ship both.',
        },
        {
          q: 'How does offline-first architecture work in production?',
          a: 'Each mobile app has a local SQLite database, an event-sourced queue for all write operations, and a background sync worker. Conflict resolution rules are defined per entity type. The apps are fully operational without network — orders, deliveries, and invoices all work offline. When connectivity returns, everything syncs.',
        },
        {
          q: 'Does the case study cover multi-tenant security and data isolation?',
          a: 'Yes. Tenant isolation is enforced at the PostgreSQL level with row-level security policies, not at the application layer. Every API request is authenticated and tenant-scoped. Backups are per-tenant. This is how Symloop builds every multi-tenant SaaS — isolation from the first commit.',
        },
        {
          q: 'Can I see the TrackSera product live?',
          a: 'Yes. Visit tracksera.com for the marketing site and a free 14-day trial of the SaaS. The three Android apps are available as APKs linked from the site.',
        },
      ],
    },

    related: {
      eyebrow: 'Services used on this project',
      items: [
        { label: 'Custom Software Engineering', href: '/services/software-engineering/', desc: 'Multi-tenant SaaS backend, PostgreSQL, Node.js APIs' },
        { label: 'Mobile App Development',      href: '/services/mobile/',                desc: 'Native Android (Kotlin), offline-first, GPS, Bluetooth' },
        { label: 'Cloud & DevOps',              href: '/services/cloud/',                 desc: 'Dockerized deployment, backups, monitoring, staging/prod' },
        { label: 'Product Engineering',         href: '/services/product/',               desc: 'End-to-end product shipping from discovery to launch' },
      ],
    },

    cta: {
      eyebrow: 'Building something similar?',
      title:   'We engineer multi-tenant SaaS platforms with offline-capable mobile apps for Algerian and MENA markets. Same team, same standards, same production discipline.',
      button:  'Book a 30-minute call',
    },

    backToHub: 'Back to all case studies',
  },

  // ──────────────────────────────────────────────────────────────────────
  fr: {
    eyebrow:     "Étude de cas · N°01",
    client:      'TrackSera',
    tagline:     "Plateforme de gestion de distribution pour l'Algérie. Web + 3 apps mobiles.",
    dek:         "TrackSera est le SaaS leader de gestion de distribution en Algérie. Symloop a conçu toute la plateforme — application web multi-tenant, trois apps Android natives (Vendeur, Livreur, Cashvan), suivi GPS, synchronisation offline-first, et l'infrastructure qui fait tourner le tout en production.",
    publishedAt: 'Livré 2024 · En opération 2026',
    duration:    '18 mois · 4 ingénieurs',
    url:         'https://www.tracksera.com',

    stats: [
      { value: '4',       label: 'Produits livrés (1 web + 3 mobile)' },
      { value: '10+',     label: 'Modules principaux livrés' },
      { value: '3',       label: 'Langues (AR · FR · EN)' },
      { value: 'Offline', label: 'Architecture first — avec auto-sync' },
    ],

    overview: {
      eyebrow: 'Vue du projet',
      title:   'Le problème.',
      body: [
        "Les entreprises de distribution et de gros en Algérie gèrent l'un des métiers les plus complexes opérationnellement du pays — des dizaines de références, plusieurs entrepôts, des flottes de livraison, des commerciaux mobiles avec du stock chargé en camion, de la gestion de cash, du crédit, et du reporting sur tout. La plupart le faisaient sur Excel, papier, ou des logiciels importés qui ne comprenaient ni les modes de paiement locaux, ni l'arabe RTL, ni la réalité d'opérer dans un environnement à réseau intermittent.",
        "Les fondateurs de TrackSera sont venus chez Symloop en 2023 avec un brief clair mais ambitieux : construire la plateforme de gestion de distribution dont l'Algérie avait besoin, la livrer comme un vrai SaaS, et l'ingénierer pour qu'elle fonctionne toujours quand le chauffeur n'a pas de signal 4G au milieu d'une tournée rurale.",
        "Le produit devait être multi-tenant dès le premier jour, trilingue (arabe, français, anglais) avec RTL complet, mobile-first pour le terrain et desktop-first pour le bureau. Et il devait être tarifé pour le marché algérien — de la version gratuite à l'entreprise — sans rogner sur la qualité d'ingénierie.",
      ],
    },

    solution: {
      eyebrow: 'Ce que nous avons construit',
      title:   'Quatre produits. Une plateforme.',
      body: [
        "**L'application web** fait tourner tout le back-office : gestion des commandes, achats, stock multi-entrepôts avec suivi DLC, base clients avec tarifs par catégorie, caisse par utilisateur avec réconciliation journalière, et un moteur de reporting complet exportant en PDF et Excel. Architecture multi-tenant avec isolation stricte des données. Facturation PDF professionnelle, bons de livraison, et workflow de bon de commande lié au suivi des dettes fournisseurs.",
        "**Tracksera Vendeur** — l'app Android pour commerciaux — permet de prendre des commandes sur la route, voir l'historique client, et gérer des devis sans ordinateur portable. Fonctionne hors ligne, se synchronise quand la connexion revient.",
        "**Tracksera Livreur** — l'app Android chauffeur — gère les tournées de livraison avec suivi GPS en direct, navigation, capture de preuve de livraison (photo + signature), et mises à jour de statut en temps réel vers le bureau.",
        "**Tracksera Cashvan** — l'app de vente mobile — charge le stock dans le camion, vend directement aux clients, imprime les factures via imprimante thermique Bluetooth, gère les retours, et réconcilie la caisse en fin de journée. Totalement utilisable hors ligne.",
      ],
    },

    architecture: {
      eyebrow: "Architecture d'ingénierie",
      title:   "Conçu pour tourner là où le réseau ne tourne pas toujours.",
      body: [
        "**Backend** — Node.js + PostgreSQL en architecture multi-tenant avec isolation stricte des tenants au niveau base de données. Redis pour les sessions et le rate-limiting. API REST conçue pour les consommateurs web et mobile, versionnée dès le premier jour. Workers en arrière-plan pour la génération de factures, l'export de rapports, et les syncs planifiés.",
        "**Frontend web** — Next.js avec SSR pour les pages marketing publiques, app client-side pour le dashboard authentifié. i18n complet avec next-i18next pour l'arabe RTL, le français et l'anglais. Chart.js pour les analytics, rendu PDF custom pour les factures.",
        "**Apps Android** — Android natif (Kotlin), pas Flutter ni React Native. Les opérations terrain nécessitaient un contrôle au niveau hardware : intégration d'imprimante thermique Bluetooth pour Cashvan, suivi GPS en arrière-plan pour Livreur, et bases SQLite locales avec résolution de conflits de sync custom pour l'opération offline-first.",
        "**Infrastructure** — Services Dockerisés derrière un reverse-proxy Nginx. Backups PostgreSQL automatisés, logging structuré, monitoring d'uptime. Déployé sur une plateforme cloud managée avec environnements staging et production séparés.",
      ],
    },

    challenges: {
      eyebrow: "Ce qui était difficile",
      title:   "Les problèmes d'ingénierie qui comptaient.",
      items: [
        {
          heading: 'Offline-first, pas offline-fallback',
          body: "La plupart des apps qui prétendent supporter l'offline cassent dès que la connexion tombe. Pour TrackSera, les apps mobiles devaient supposer l'offline par défaut — un chauffeur dans l'Algérie rurale n'a pas de signal pendant des heures. Nous avons construit une couche SQLite locale avec une queue event-sourced, des règles de résolution de conflits par type d'entité, et un worker de sync en arrière-plan. Les apps sont pleinement opérationnelles sans réseau.",
        },
        {
          heading: 'Multi-tenant dès le premier jour',
          body: "Chaque entreprise de distribution est un tenant avec ses propres données, utilisateurs, plans tarifaires et configuration. Isolation des tenants au niveau base de données, politiques row-level security, et authentification API consciente du tenant — tout construit depuis le premier commit, pas rétrofité.",
        },
        {
          heading: 'Arabe RTL partout',
          body: "L'arabe n'est pas un afterthought — c'est la langue par défaut pour la plupart des opérateurs. Support RTL complet dans le dashboard web, dans chaque facture PDF, dans chaque écran Android, avec formatage propre des nombres arabes, dates calendrier islamique, et gestion de texte bi-directionnel où l'arabe et le français se mélangent.",
        },
        {
          heading: "Impression thermique Bluetooth depuis Android",
          body: "Les vendeurs Cashvan impriment les factures sur des imprimantes thermiques Bluetooth montées dans le camion. Aucune librairie ne gérait proprement les modèles d'imprimantes locaux, donc nous avons construit l'intégration du protocole ESC/POS nous-mêmes et maintenons notre propre driver pour trois fabricants.",
        },
      ],
    },

    outcomes: {
      eyebrow: 'Résultats',
      title:   "Ce qui est livré, ce qui tourne en prod.",
      items: [
        "La plateforme est en production depuis 2024 — servant actuellement des opérateurs de distribution et de gros à travers l'Algérie.",
        "Modèle tarifaire à quatre paliers (Gratuit, Starter, Pro, Business) en live sur la plateforme avec facturation self-service via CCP et BaridiMob — les deux modes de paiement les plus courants en Algérie.",
        "Trois apps Android publiées en APK pour installation directe sur les appareils des opérateurs, avec mécanisme d'auto-update qui ne nécessite pas de distribution Play Store.",
        "Site (tracksera.com) livré en arabe, français et anglais, avec RTL complet et optimisation SEO pour le marché algérien de la distribution.",
      ],
    },

    tech: {
      eyebrow: 'Stack technique',
      items: ['Node.js', 'PostgreSQL', 'Next.js', 'Kotlin Android', 'Redis', 'Docker', 'Nginx', 'Bluetooth ESC/POS', 'GPS tracking', 'Offline SQLite sync'],
    },

    faq: {
      eyebrow: 'Questions fréquentes',
      title:   "Ce que les acheteurs demandent habituellement sur ce projet.",
      items: [
        {
          q: 'Combien de temps a pris la construction de TrackSera ?',
          a: "La plateforme complète — application web plus trois apps Android — a pris 18 mois de bout en bout avec une équipe de 4 ingénieurs seniors. La première app mobile était en production au mois 8. L'infrastructure multi-tenant, la synchronisation offline et l'intégration d'impression Bluetooth étaient les éléments d'ingénierie les plus longs.",
        },
        {
          q: 'Pouvez-vous construire un SaaS multi-tenant similaire pour mon secteur ?',
          a: "Oui. Nous livrons des plateformes SaaS multi-tenant avec des apps mobiles offline-capable dans la distribution, le gros, la fintech, la santé et la logistique industrielle. Les patterns d'architecture sont transférables — isolation des tenants, sync offline-first, support RTL, intégration matérielle Bluetooth, stock multi-entrepôts — ce qui change c'est la logique métier.",
        },
        {
          q: 'Pourquoi Android natif au lieu de Flutter ou React Native ?',
          a: "Pour des opérations terrain avec imprimantes Bluetooth, suivi GPS en arrière-plan et connectivité peu fiable, Android natif (Kotlin) nous a donné un contrôle au niveau hardware que les frameworks cross-platform ne permettent pas. Pour les produits avec intégration matérielle plus légère, Flutter ou React Native est souvent le meilleur choix économique — nous livrons les deux.",
        },
        {
          q: "Comment fonctionne l'architecture offline-first en production ?",
          a: "Chaque app mobile a une base SQLite locale, une queue event-sourced pour toutes les opérations d'écriture, et un worker de sync en arrière-plan. Les règles de résolution de conflits sont définies par type d'entité. Les apps sont pleinement opérationnelles sans réseau — commandes, livraisons et factures fonctionnent hors ligne. Quand la connectivité revient, tout se synchronise.",
        },
        {
          q: "L'étude couvre-t-elle la sécurité et l'isolation des données multi-tenant ?",
          a: "Oui. L'isolation des tenants est appliquée au niveau PostgreSQL avec des politiques row-level security, pas au niveau applicatif. Chaque requête API est authentifiée et scopée au tenant. Les backups sont par-tenant. C'est ainsi que Symloop construit chaque SaaS multi-tenant — isolation dès le premier commit.",
        },
        {
          q: 'Puis-je voir le produit TrackSera en live ?',
          a: "Oui. Visitez tracksera.com pour le site marketing et un essai gratuit de 14 jours du SaaS. Les trois apps Android sont disponibles en APK depuis le site.",
        },
      ],
    },

    related: {
      eyebrow: 'Services utilisés sur ce projet',
      items: [
        { label: 'Développement Logiciel Sur Mesure', href: '/services/software-engineering/', desc: 'Backend SaaS multi-tenant, PostgreSQL, APIs Node.js' },
        { label: 'Développement Application Mobile',  href: '/services/mobile/',                desc: 'Android natif (Kotlin), offline-first, GPS, Bluetooth' },
        { label: 'Cloud & DevOps',                    href: '/services/cloud/',                 desc: 'Déploiement Dockerisé, backups, monitoring, staging/prod' },
        { label: 'Ingénierie Produit',                href: '/services/product/',               desc: 'Livraison produit de bout en bout du discovery au lancement' },
      ],
    },

    cta: {
      eyebrow: 'Vous construisez quelque chose de similaire ?',
      title:   "Nous livrons des plateformes SaaS multi-tenant avec des apps mobiles offline-capable pour les marchés algérien et MENA. Même équipe, mêmes standards, même discipline production.",
      button:  'Réserver un appel de 30 minutes',
    },

    backToHub: 'Retour à toutes les études de cas',
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    eyebrow:     'دراسة حالة · N°01',
    client:      'TrackSera',
    tagline:     'منصة إدارة التوزيع للجزائر. ويب + 3 تطبيقات جوال.',
    dek:         'تراكسيرا هي منصة SaaS الرائدة لإدارة التوزيع في الجزائر. صمّمت سيملوب المنصة كاملة — تطبيق ويب متعدد المستأجرين، وثلاثة تطبيقات أندرويد أصلية (البائع، السائق، Cashvan)، وتتبع GPS، ومزامنة offline-first، والبنية التحتية التي تشغّلها جميعاً في الإنتاج.',
    publishedAt: 'تم التسليم 2024 · قيد التشغيل 2026',
    duration:    '18 شهراً · 4 مهندسين',
    url:         'https://www.tracksera.com',

    stats: [
      { value: '4',       label: 'منتجات مُسلَّمة (1 ويب + 3 جوال)' },
      { value: '10+',     label: 'وحدات أساسية' },
      { value: '3',       label: 'لغات (عربي · فرنسي · إنجليزي)' },
      { value: 'Offline', label: 'معمارية أولى — مع مزامنة تلقائية' },
    ],

    overview: {
      eyebrow: 'نظرة عامة على المشروع',
      title:   'المشكلة.',
      body: [
        'شركات التوزيع والجملة في الجزائر تُدير أحد أكثر المهن تعقيداً تشغيلياً في البلاد — عشرات الأصناف، عدة مستودعات، أساطيل توصيل، مندوبي مبيعات متنقلين بمخزون محمّل في الشاحنات، إدارة نقدية، ائتمان، وتقارير على كل ذلك. معظمهم كانوا يديرون هذا على Excel أو الورق أو برامج مستوردة لا تفهم طرق الدفع المحلية أو العربية RTL أو واقع العمل في بيئة شبكة متقطعة.',
        'جاء مؤسسو TrackSera إلى سيملوب في 2023 بملخص واضح لكنه طموح: بناء منصة إدارة التوزيع التي تحتاجها الجزائر، إطلاقها كـ SaaS حقيقي، وهندستها لتعمل حتى عندما لا يكون لدى السائق إشارة 4G في منتصف جولة توصيل ريفية.',
        'كان المنتج يجب أن يكون متعدد المستأجرين من اليوم الأول، ثلاثي اللغة (عربي، فرنسي، إنجليزي) مع دعم RTL كامل، mobile-first للعمليات الميدانية، و desktop-first للمكتب. وكان يجب أن يُسعَّر للسوق الجزائري — من مستوى مجاني إلى مستوى المؤسسات — دون تنازل عن جودة الهندسة.',
      ],
    },

    solution: {
      eyebrow: 'ما بنيناه',
      title:   'أربعة منتجات. منصة واحدة.',
      body: [
        '**تطبيق الويب** يُشغّل المكتب الخلفي بالكامل: إدارة الطلبات، المشتريات، المخزون عبر مستودعات متعددة مع تتبع تاريخ الانتهاء، قاعدة بيانات العملاء مع تسعير حسب الفئة، صندوق لكل مستخدم مع تسوية يومية، ومحرك تقارير كامل يصدر إلى PDF و Excel. معمارية متعددة المستأجرين مع عزل بيانات صارم. فوترة PDF احترافية، بونات تسليم، وسير عمل أوامر شراء مرتبط بتتبع ديون المورّدين.',
        '**Tracksera Vendeur** — تطبيق البائع Android — يتيح لمندوبي المبيعات أخذ الطلبات على الطريق، عرض سجل العميل، وإدارة عروض الأسعار دون حاسوب محمول. يعمل بدون إنترنت، يتزامن عند عودة الاتصال.',
        '**Tracksera Livreur** — تطبيق السائق Android — يدير جولات التسليم مع تتبع GPS مباشر، توجيهات خطوة بخطوة، التقاط إثبات التسليم (صورة + توقيع رقمي)، وتحديثات الحالة في الوقت الفعلي إلى المكتب.',
        '**Tracksera Cashvan** — تطبيق المبيعات المتنقل — يحمّل المخزون في الشاحنة، يبيع مباشرة للعملاء، يطبع الفواتير عبر طابعة إيصالات Bluetooth، يعالج المرتجعات، ويُسوّي النقد في نهاية اليوم. كل ذلك قابل للاستخدام دون اتصال.',
      ],
    },

    architecture: {
      eyebrow: 'معمارية الهندسة',
      title:   'مبنية لتعمل حيث الشبكة أحياناً لا تعمل.',
      body: [
        '**الخلفية** — Node.js + PostgreSQL بمعمارية متعددة المستأجرين مع عزل مستأجر صارم على مستوى قاعدة البيانات. Redis للجلسات وطبقة rate-limit. REST API مصممة لكل من العملاء الويب والجوال، محفوظة النسخة من اليوم الأول. عمّال خلفيون لتوليد الفواتير، تصدير التقارير، والمزامنات المجدولة.',
        '**واجهة الويب الأمامية** — Next.js مع SSR لصفحات التسويق العامة، تطبيق جانب العميل للوحة المصادَق عليها. i18n كامل مع next-i18next للعربية RTL والفرنسية والإنجليزية. Chart.js للتحليلات، محوّل PDF مخصص للفواتير.',
        '**تطبيقات Android** — Android أصلي (Kotlin)، وليس Flutter أو React Native. احتاجت العمليات الميدانية تحكماً على مستوى العتاد: تكامل طابعة حرارية Bluetooth لـ Cashvan، تتبع GPS في الخلفية لـ Livreur، وقواعد بيانات SQLite محلية مع حل تعارضات مزامنة مخصص للتشغيل offline-first.',
        '**البنية التحتية** — خدمات Dockerized خلف reverse proxy بـ Nginx. نسخ احتياطية تلقائية لـ PostgreSQL، تسجيل منظم، ومراقبة وقت التشغيل. منشورة على منصة سحابية مُدارة مع بيئات staging و production منفصلة.',
      ],
    },

    challenges: {
      eyebrow: 'ما كان صعباً',
      title:   'مشاكل الهندسة التي كانت مهمة.',
      items: [
        {
          heading: 'Offline-first، وليس offline-fallback',
          body: 'معظم التطبيقات التي تدّعي دعم offline تتعطل فور انقطاع الاتصال. بالنسبة لـ TrackSera، كانت تطبيقات الجوال يجب أن تفترض offline افتراضياً — سائق في الجزائر الريفية بدون إشارة لساعات. بنينا طبقة SQLite محلية مع queue مصدرها الأحداث، وقواعد حل تعارض لكل نوع كيان، وعامل مزامنة في الخلفية. التطبيقات تعمل بالكامل بدون شبكة.',
        },
        {
          heading: 'متعدد المستأجرين من اليوم الأول',
          body: 'كل شركة توزيع هي مستأجر ببياناته ومستخدميه وخطط تسعيره وتكوينه الخاص. عزل المستأجرين على مستوى قاعدة البيانات، سياسات row-level security، ومصادقة API واعية بالمستأجر — كل ذلك مبني منذ أول commit، وليس مضافاً لاحقاً.',
        },
        {
          heading: 'العربية RTL في كل مكان',
          body: 'العربية ليست تأخيراً — إنها اللغة الافتراضية لمعظم المشغّلين. دعم RTL كامل في لوحة الويب، في كل فاتورة PDF، في كل شاشة Android، مع تنسيق أرقام عربية سليم، وتواريخ التقويم الهجري، ومعالجة نصوص ثنائية الاتجاه حيث تختلط العربية والفرنسية.',
        },
        {
          heading: 'الطباعة الحرارية Bluetooth من Android',
          body: 'بائعو Cashvan يطبعون الفواتير على طابعات حرارية Bluetooth مثبتة في الشاحنة. لا مكتبة تعاملت بنظافة مع نماذج الطابعات المحلية، لذا بنينا تكامل بروتوكول ESC/POS بأنفسنا ونُحافظ على driver خاص بنا لثلاثة صنّاع طابعات.',
        },
      ],
    },

    outcomes: {
      eyebrow: 'النتائج',
      title:   'ما الذي تم تسليمه، وعلى ماذا يعمل.',
      items: [
        'المنصة دخلت الإنتاج في 2024 ولا تزال تعمل منذ ذلك الحين — تخدم حالياً مشغّلي التوزيع والجملة عبر الجزائر.',
        'نموذج تسعير من أربع طبقات (مجاني، Starter، Pro، Business) حيّ على المنصة مع فوترة self-service عبر CCP و BaridiMob — أكثر طرق الدفع شيوعاً في الجزائر.',
        'ثلاثة تطبيقات Android منشورة كـ APKs للتثبيت المباشر على أجهزة المشغّلين، مع آلية تحديث تلقائي لا تتطلب التوزيع عبر Play Store.',
        'الموقع (tracksera.com) يُسلّم معلومات المنتج باللغات العربية والفرنسية والإنجليزية، مع RTL كامل وتحسين SEO لسوق التوزيع الجزائري.',
      ],
    },

    tech: {
      eyebrow: 'الحزمة التقنية',
      items: ['Node.js', 'PostgreSQL', 'Next.js', 'Kotlin Android', 'Redis', 'Docker', 'Nginx', 'Bluetooth ESC/POS', 'GPS tracking', 'Offline SQLite sync'],
    },

    faq: {
      eyebrow: 'أسئلة شائعة',
      title:   'ما يسأله المشترون عادةً عن هذا المشروع.',
      items: [
        {
          q: 'كم استغرق بناء TrackSera من الصفر؟',
          a: 'المنصة كاملة — تطبيق الويب مع ثلاثة تطبيقات Android — استغرقت 18 شهراً من البداية للنهاية بفريق من 4 مهندسين كبار. أول تطبيق جوال كان في الإنتاج في الشهر الثامن. البنية متعددة المستأجرين، ومزامنة offline، وتكامل الطباعة Bluetooth كانت أطول عناصر الهندسة.',
        },
        {
          q: 'هل يمكنكم بناء SaaS متعدد المستأجرين مماثل لقطاعي؟',
          a: 'نعم. نهندس منصات SaaS متعددة المستأجرين مع تطبيقات جوال offline-capable عبر التوزيع والجملة والفينتك والرعاية الصحية واللوجستيات الصناعية. أنماط المعمارية قابلة للنقل — عزل المستأجر، مزامنة offline-first، دعم RTL، تكامل العتاد Bluetooth، مخزون متعدد المستودعات — ما يتغير هو المنطق الميداني.',
        },
        {
          q: 'لماذا Android أصلي بدلاً من Flutter أو React Native؟',
          a: 'للعمليات الميدانية مع طابعات إيصالات Bluetooth، تتبع GPS في الخلفية، واتصال غير موثوق، أعطانا Android الأصلي (Kotlin) تحكماً على مستوى العتاد لا توفره أطر cross-platform. للمنتجات التي يكون فيها تكامل العتاد أخف، يكون Flutter أو React Native الخيار الاقتصادي الأفضل — نحن نُسلّم الاثنين.',
        },
        {
          q: 'كيف تعمل معمارية offline-first في الإنتاج؟',
          a: 'لكل تطبيق جوال قاعدة بيانات SQLite محلية، وقائمة انتظار event-sourced لكل عمليات الكتابة، وعامل مزامنة في الخلفية. قواعد حل التعارض مُعرَّفة لكل نوع كيان. التطبيقات تعمل بالكامل بدون شبكة — الطلبات والتسليمات والفواتير كلها تعمل offline. عند عودة الاتصال، كل شيء يتزامن.',
        },
        {
          q: 'هل تغطي دراسة الحالة أمن وعزل البيانات متعدد المستأجرين؟',
          a: 'نعم. يُطبَّق عزل المستأجر على مستوى PostgreSQL مع سياسات row-level security، وليس على مستوى التطبيق. كل طلب API مُصادَق ومُحدَّد بالمستأجر. النسخ الاحتياطية لكل مستأجر. هكذا تبني سيملوب كل SaaS متعدد المستأجرين — عزل منذ أول commit.',
        },
        {
          q: 'هل يمكنني رؤية منتج TrackSera مباشرةً؟',
          a: 'نعم. زُر tracksera.com للموقع التسويقي وتجربة مجانية 14 يوماً لـ SaaS. التطبيقات الثلاث Android متاحة كـ APKs من الموقع.',
        },
      ],
    },

    related: {
      eyebrow: 'الخدمات المستخدمة في هذا المشروع',
      items: [
        { label: 'تطوير برمجيات مخصصة',   href: '/services/software-engineering/', desc: 'خلفية SaaS متعددة المستأجرين، PostgreSQL، APIs Node.js' },
        { label: 'تطوير تطبيقات جوال',    href: '/services/mobile/',                desc: 'Android أصلي (Kotlin)، offline-first، GPS، Bluetooth' },
        { label: 'السحابة و DevOps',      href: '/services/cloud/',                 desc: 'نشر Dockerized، نسخ احتياطية، مراقبة، staging/prod' },
        { label: 'هندسة المنتج',          href: '/services/product/',               desc: 'تسليم المنتج من النهاية إلى النهاية من الاكتشاف إلى الإطلاق' },
      ],
    },

    cta: {
      eyebrow: 'تبني شيئاً مشابهاً؟',
      title:   'نحن نهندس منصات SaaS متعددة المستأجرين بتطبيقات جوال قادرة على العمل offline للأسواق الجزائرية ومنطقة الشرق الأوسط وشمال أفريقيا. نفس الفريق، نفس المعايير، نفس انضباط الإنتاج.',
      button:  'احجز مكالمة 30 دقيقة',
    },

    backToHub: 'العودة إلى جميع دراسات الحالة',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function renderRichText(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return (
        <span key={i} className="font-normal text-white border-b border-white/30">
          {p.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export default function TrackSeraCaseStudyPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  // Rich Article schema — Google treats CaseStudy as a subtype of Article
  const articleLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    '@id':           'https://symloop.com/case-studies/tracksera/#article',
    headline:        `${c.client} — ${c.tagline}`,
    alternativeHeadline: 'Distribution management SaaS platform case study — Symloop Technology',
    description:     c.dek,
    image:           [
      'https://symloop.com/case-studies/tracksera-cover.jpg',
      'https://symloop.com/case-studies/tracksera-logo.png',
    ],
    datePublished:   '2024-06-01',
    dateModified:    '2026-04-17',
    inLanguage:      locale === 'ar' ? 'ar' : locale === 'fr' ? 'fr' : 'en',
    articleSection:  'Case Study',
    keywords:        'distribution management SaaS, multi-tenant SaaS Algeria, offline-first mobile app, GPS tracking cashvan, Bluetooth receipt printing, Kotlin Android, PostgreSQL multi-tenant, MENA software engineering',
    author:          {
      '@type': 'Organization',
      name:    'Symloop Technology',
      url:     'https://symloop.com',
    },
    publisher:       {
      '@type': 'Organization',
      name:    'Symloop Technology',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png', width: 512, height: 512 },
    },
    about: [
      {
        '@type': 'SoftwareApplication',
        name:    'TrackSera',
        url:     'https://www.tracksera.com',
        applicationCategory: 'BusinessApplication',
        operatingSystem:     'Web, Android',
        description:         'Distribution management SaaS for Algeria — multi-tenant web application plus three native Android apps (Seller, Driver, Cashvan).',
        inLanguage:          ['ar', 'fr', 'en'],
        offers: {
          '@type': 'Offer',
          priceCurrency: 'DZD',
          price: '0',
          description: '14-day free trial, tiered SaaS pricing from Free to Business',
        },
      },
      { '@type': 'Thing', name: 'Multi-tenant SaaS architecture' },
      { '@type': 'Thing', name: 'Offline-first mobile applications' },
      { '@type': 'Thing', name: 'Distribution management' },
      { '@type': 'Thing', name: 'GPS logistics tracking' },
    ],
    mentions: [
      { '@type': 'SoftwareApplication', name: 'PostgreSQL' },
      { '@type': 'SoftwareApplication', name: 'Node.js' },
      { '@type': 'SoftwareApplication', name: 'Next.js' },
      { '@type': 'SoftwareApplication', name: 'Kotlin' },
      { '@type': 'SoftwareApplication', name: 'Redis' },
      { '@type': 'SoftwareApplication', name: 'Docker' },
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'SaaS founders, distribution company owners, logistics directors, wholesale CEOs, FMCG operators',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':   'https://symloop.com/case-studies/tracksera/',
    },
  };

  // FAQ schema — unlocks rich snippets in Google search
  const faqLd = c.faq ? {
    '@context':  'https://schema.org',
    '@type':     'FAQPage',
    mainEntity:  c.faq.items.map(item => ({
      '@type':           'Question',
      name:              item.q,
      acceptedAnswer:    { '@type': 'Answer', text: item.a },
    })),
  } : null;

  // Service schema — links this case study back to our service offerings
  const serviceLd = {
    '@context':      'https://schema.org',
    '@type':         'Service',
    serviceType:     'Custom Software Development, Mobile App Development, Multi-Tenant SaaS Engineering',
    provider: {
      '@type': 'Organization',
      name:    'Symloop Technology',
      url:     'https://symloop.com',
    },
    areaServed: [
      { '@type': 'Country', name: 'Algeria' },
      { '@type': 'Country', name: 'Morocco' },
      { '@type': 'Country', name: 'Tunisia' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'France' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    'Symloop Engineering Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Engineering', url: 'https://symloop.com/services/software-engineering/' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development', url: 'https://symloop.com/services/mobile/' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud & DevOps', url: 'https://symloop.com/services/cloud/' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Engineering', url: 'https://symloop.com/services/product/' } },
      ],
    },
  };

  const combinedLd = { '@context': 'https://schema.org', '@graph': [articleLd, serviceLd, ...(faqLd ? [faqLd] : [])] };

  const breadcrumbs = [
    { name: 'Home',         url: 'https://symloop.com/' },
    { name: 'Case Studies', url: 'https://symloop.com/case-studies/' },
    { name: c.client,       url: 'https://symloop.com/case-studies/tracksera/' },
  ];

  // Heavy long-tail B2B keyword list — covers industry (distribution/wholesale/FMCG),
  // buyer personas (CEO/CTO/logistics director), geographic targeting, and competitors.
  const seoKeywords = [
    'tracksera case study',
    'tracksera symloop',
    'distribution management SaaS Algeria',
    'logiciel gestion distribution Algérie',
    'logiciel gestion distribution Algerie',
    'wholesale software Algeria',
    'logiciel grossiste Algérie',
    'FMCG distribution software Algeria',
    'multi-tenant SaaS Algeria',
    'SaaS multi-tenant Algérie',
    'multi-tenant SaaS MENA',
    'offline-first mobile app Algeria',
    'application mobile offline Algérie',
    'Android Kotlin distribution app',
    'cashvan mobile sales app',
    'logiciel vente mobile cashvan',
    'application cashvan Algérie',
    'GPS delivery tracking Algeria',
    'suivi GPS livraison Algérie',
    'Bluetooth thermal printer Android',
    'imprimante thermique Bluetooth Android',
    'multi-warehouse inventory Algeria',
    'stock multi-entrepôts Algérie',
    'invoicing PDF Algeria',
    'logiciel facturation distribution',
    'CCP BaridiMob SaaS payment',
    'Algerian wholesale logistics platform',
    'plateforme logistique distribution Algérie',
    'برنامج إدارة التوزيع الجزائر',
    'برنامج الجملة الجزائر',
    'تطبيق Cashvan الجزائر',
    'SaaS متعدد المستأجرين',
    'MENA SaaS case study',
    'enterprise SaaS case study Algeria',
    'symloop case studies',
    'symloop clients',
    'symloop portfolio',
  ].join(', ');

  return (
    <>
      <SEO
        title={`${c.client} — ${c.tagline} | Symloop Case Study`}
        description={c.dek}
        keywords={seoKeywords}
        type="article"
        structuredData={combinedLd}
        breadcrumbs={breadcrumbs}
        image="/case-studies/tracksera-cover.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link
                  href="/case-studies/"
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {c.eyebrow}
                </Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.publishedAt}
                </span>
              </motion.div>

              {/* Client logo + name */}
              <motion.div variants={fadeUp} className="flex items-center gap-5 mb-8">
                <div className="relative w-16 h-16 border border-white/[0.08] bg-white/[0.02] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/case-studies/tracksera-logo.png"
                    alt="TrackSera logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-mono tracking-[0.1em] uppercase text-white/40 mb-1">Client</div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-2xl lg:text-3xl font-light text-white hover:text-white/70 transition-colors"
                  >
                    {c.client}
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]"
              >
                {c.tagline}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl"
              >
                {c.dek}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"
              >
                <span>{c.duration}</span>
                <span>{c.publishedAt}</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Cover image */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image
              src="/case-studies/tracksera-cover.jpg"
              alt={`${c.client} — ${c.tagline}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* ── Stats row ─────────────────────────────────────────────── */}
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {c.stats.map((s, i) => (
                <li key={i} className="bg-black p-8 lg:p-10">
                  <div className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-none mb-5">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/45 leading-snug">
                    {s.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Body ───────────────────────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          {/* Overview */}
          <motion.section
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="mb-16 lg:mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.overview.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight mb-10">
              {c.overview.title}
            </motion.h2>
            <div className="space-y-5">
              {c.overview.body.map((p, i) => (
                <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">
                  {renderRichText(p)}
                </motion.p>
              ))}
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="mb-16 lg:mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.solution.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight mb-10">
              {c.solution.title}
            </motion.h2>
            <div className="space-y-5">
              {c.solution.body.map((p, i) => (
                <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">
                  {renderRichText(p)}
                </motion.p>
              ))}
            </div>
          </motion.section>

          {/* Demo video */}
          <motion.section
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="mb-16 lg:mb-20"
          >
            <motion.figure variants={fadeUp}>
              <div className="relative w-full aspect-video border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                <video
                  src="/case-studies/tracksera-demo.mp4"
                  controls
                  muted
                  loop
                  playsInline
                  poster="/case-studies/tracksera-cover.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-4 font-mono text-[11px] tracking-[0.1em] uppercase text-white/40 leading-relaxed">
                {locale === 'fr'
                  ? 'Démo — Gestion des stocks dans l\'application web TrackSera'
                  : locale === 'ar'
                  ? 'عرض — إدارة المخزون في تطبيق TrackSera الويب'
                  : 'Demo — Stock management in the TrackSera web application'}
              </figcaption>
            </motion.figure>
          </motion.section>

          {/* Architecture */}
          <motion.section
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="mb-16 lg:mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.architecture.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight mb-10">
              {c.architecture.title}
            </motion.h2>
            <div className="space-y-5">
              {c.architecture.body.map((p, i) => (
                <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">
                  {renderRichText(p)}
                </motion.p>
              ))}
            </div>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="mb-16 lg:mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.challenges.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight mb-10">
              {c.challenges.title}
            </motion.h2>
            <ul className="space-y-0 border border-white/[0.08]">
              {c.challenges.items.map((ch, i) => (
                <motion.li key={i} variants={fadeUp} className="p-6 lg:p-8 border-b border-white/[0.08] last:border-b-0">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg lg:text-xl font-light text-white leading-tight">
                      {ch.heading}
                    </h3>
                  </div>
                  <p className="text-base text-white/55 leading-relaxed ps-0 lg:ps-10">
                    {ch.body}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Outcomes */}
          <motion.section
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="mb-16 lg:mb-20 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.outcomes.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-light tracking-tight mb-8">
              {c.outcomes.title}
            </motion.h2>
            <ul className="space-y-5">
              {c.outcomes.items.map((o, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">{o}</p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Tech stack */}
          <motion.section
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-100px' }} variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.tech.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {c.tech.items.map((t, i) => (
                <span key={i} className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/60 border border-white/[0.12] px-4 py-2">
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.section>

          {/* Related services — internal linking for SEO */}
          {c.related && (
            <motion.section
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-100px' }} variants={stagger}
              className="mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.related.eyebrow}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
                {c.related.items.map((s, i) => (
                  <motion.div key={i} variants={fadeUp} className="bg-black">
                    <Link href={s.href} className="group block p-6 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="text-lg font-light text-white leading-tight group-hover:text-white transition-colors">
                          {s.label}
                        </h3>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed ps-0 sm:ps-7 mb-4">{s.desc}</p>
                      <div className="ps-0 sm:ps-7">
                        <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/80 group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* FAQ — FAQPage schema above unlocks rich snippets */}
          {c.faq && (
            <motion.section
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-100px' }} variants={stagger}
              className="mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.faq.eyebrow}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-light tracking-tight mb-10">
                {c.faq.title}
              </motion.h2>
              <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {c.faq.items.map((f, i) => (
                  <motion.details key={i} variants={fadeUp} className="group">
                    <summary className="cursor-pointer list-none py-5 px-2 flex items-start gap-4 hover:bg-white/[0.015] transition-colors">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base lg:text-lg font-light text-white leading-snug flex-1">
                        {f.q}
                      </span>
                      <span className="font-mono text-lg text-white/40 group-open:rotate-45 transition-transform shrink-0">+</span>
                    </summary>
                    <div className="pb-6 ps-10 pe-4">
                      <p className="text-base text-white/60 leading-relaxed">{f.a}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </motion.section>
          )}
        </article>

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-100px' }} variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                {c.cta.title}
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors"
                >
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/case-studies/"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {isRtl ? <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} /> : <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />}
                  <span>{c.backToHub}</span>
                </Link>
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
