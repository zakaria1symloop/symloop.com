// ============================================================================
// SYMLOOP — SERVICES DATA (SSG-friendly, SEO-first)
// Single source of truth for /services and /services/[slug].
// Loaded exclusively via getStaticProps -> pre-rendered into HTML at build time.
// No runtime dependency on i18next for service content.
// ============================================================================

export const SERVICES = [
  // ════════════════════════════════════════════════════════════════════════
  // 01 — CUSTOM SOFTWARE ENGINEERING
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'software-engineering',
    number: '01',
    icon: 'Code2',
    accent: '#6366f1',
    category: { fr: 'Ingénierie Logicielle', en: 'Software Engineering', ar: 'هندسة البرمجيات' },
    priceMin: 120000,
    priceMax: 3000000,
    deliveryTime: { fr: '6 à 20 semaines', en: '6 to 20 weeks', ar: '6 إلى 20 أسبوعًا' },
    slugs: {
      fr: 'developpement-logiciel-sur-mesure-algerie',
      en: 'custom-software-development-algeria',
      ar: 'تطوير-البرمجيات-المخصصة-الجزائر',
    },
    title: {
      fr: 'Développement logiciel sur mesure',
      en: 'Custom Software Engineering',
      ar: 'تطوير البرمجيات المخصصة',
    },
    metaTitle: {
      fr: 'Développement Logiciel Sur Mesure en Algérie — Symloop',
      en: 'Custom Software Engineering in Algeria — Symloop',
      ar: 'تطوير البرمجيات المخصصة في الجزائر — سيملوب',
    },
    metaDescription: {
      fr: "Entreprise d'ingénierie logicielle basée à Alger. ERP, SaaS, plateformes métier, API et systèmes distribués conçus pour entreprises algériennes et MENA. Tarifs à partir de 120 000 DA.",
      en: 'Software engineering company based in Algiers. Custom ERPs, SaaS platforms, business systems, APIs and distributed architectures for Algerian and MENA enterprises. From 120,000 DZD.',
      ar: 'شركة هندسة برمجيات مقرها الجزائر العاصمة. أنظمة ERP مخصصة، منصات SaaS، أنظمة الأعمال وواجهات برمجة التطبيقات للشركات الجزائرية والمنطقة. ابتداءً من 120,000 دج.',
    },
    tagline: {
      fr: 'Des systèmes robustes, typés et testés, conçus pour durer dix ans.',
      en: 'Robust, typed and tested systems built to last a decade.',
      ar: 'أنظمة قوية ومختبرة ومصممة لتدوم عقدًا كاملاً.',
    },
    intro: {
      fr: "Nous concevons et développons des logiciels d'entreprise sur mesure pour les organisations algériennes et de la région MENA : ERP, plateformes SaaS, systèmes métier, APIs et architectures distribuées. Notre équipe d'ingénieurs seniors travaille en TypeScript, Go, Python et Rust avec des architectures prouvées en production.",
      en: 'We design and engineer custom enterprise software for Algerian and MENA organizations: ERPs, SaaS platforms, business systems, APIs and distributed architectures. Our senior engineering team works in TypeScript, Go, Python and Rust with battle-tested production architectures.',
      ar: 'نصمم ونطور برمجيات مؤسسية مخصصة للمنظمات الجزائرية ومنطقة مينا: أنظمة ERP ومنصات SaaS وأنظمة الأعمال وواجهات برمجة التطبيقات والهياكل الموزعة. يعمل فريقنا من المهندسين الكبار على TypeScript و Go و Python و Rust بهياكل مجربة في الإنتاج.',
    },
    longDescription: {
      fr: [
        "L'ingénierie logicielle sur mesure n'est pas une commodité. C'est le système nerveux de votre entreprise — il doit être fiable, évolutif et maintenable par la prochaine équipe qui y touchera. Chez Symloop, nous construisons des logiciels d'entreprise qui fonctionnent encore dix ans après leur première ligne de code, parce que nous prenons les décisions d'architecture avec le même sérieux qu'un ingénieur d'infrastructure prend les décisions de câblage.",
        "Nos clients viennent nous voir quand Odoo ne suffit plus, quand Excel casse à 10 000 lignes, ou quand leur ancien prestataire a livré un monolithe PHP impossible à déboguer. Nous reprenons, auditons, modernisons ou reconstruisons. Chaque projet commence par une semaine de discovery technique gratuite pendant laquelle nous cartographions votre domaine métier, identifions les goulots d'étranglement et proposons une architecture cible.",
        "Nous livrons en cycles courts avec tests automatisés, CI/CD, observabilité (logs, traces, métriques) et documentation vivante. Toutes nos bases de code sont revues par deux ingénieurs avant merge. Nous utilisons les mêmes outils que Vercel, Stripe et Shopify : Next.js, NestJS, Postgres, Redis, Kubernetes, Terraform. Pas de framework exotique, pas de dette technique cachée.",
      ],
      en: [
        "Custom software engineering is not a commodity. It is the nervous system of your business — it must be reliable, scalable and maintainable by whatever team touches it next. At Symloop we build enterprise software that still runs well ten years after the first line of code, because we take architectural decisions with the same seriousness an infrastructure engineer takes wiring decisions.",
        "Clients come to us when Odoo is no longer enough, when Excel breaks at 10,000 rows, or when a previous vendor has shipped an unmaintainable PHP monolith. We take over, audit, modernize or rebuild. Every engagement starts with a free one-week technical discovery where we map your business domain, identify bottlenecks and propose a target architecture.",
        'We deliver in short cycles with automated testing, CI/CD, observability (logs, traces, metrics) and living documentation. Every codebase is reviewed by two engineers before merge. We use the same tools as Vercel, Stripe and Shopify: Next.js, NestJS, Postgres, Redis, Kubernetes, Terraform. No exotic frameworks, no hidden tech debt.',
      ],
      ar: [
        "هندسة البرمجيات المخصصة ليست سلعة. إنها الجهاز العصبي لأعمالك — يجب أن تكون موثوقة وقابلة للتوسع وقابلة للصيانة من قبل أي فريق يلمسها لاحقًا. في سيملوب نبني برمجيات المؤسسات التي لا تزال تعمل بعد عشر سنوات من كتابة أول سطر من الشيفرة.",
        'يأتي إلينا العملاء عندما لا يعود Odoo كافيًا، أو عندما ينهار Excel عند 10,000 صف، أو عندما يسلم مزود سابق برمجية PHP يصعب صيانتها. نتولى الأمر ونراجع ونحدث أو نعيد البناء. كل مشروع يبدأ بأسبوع مجاني من الاستكشاف التقني.',
        'نسلم في دورات قصيرة مع اختبارات آلية، CI/CD، مراقبة ووثائق حية. يتم مراجعة كل قاعدة شيفرة من قبل مهندسين اثنين قبل الدمج. نستخدم نفس الأدوات مثل Vercel و Stripe و Shopify.',
      ],
    },
    features: {
      fr: [
        'Architecture logicielle cible (monolithe modulaire, microservices, event-driven)',
        'Bases de données relationnelles (Postgres, MySQL) et NoSQL (MongoDB, Redis)',
        'APIs REST, GraphQL, gRPC avec authentification JWT / OAuth2',
        'Intégrations tierces : CIB, Edahabia, Yalidine, Stripe, WhatsApp Business',
        'Tests unitaires, d\'intégration et end-to-end automatisés',
        'CI/CD avec GitHub Actions ou GitLab CI, déploiements zéro downtime',
        'Observabilité complète : logs structurés, traces OpenTelemetry, alertes',
        'Documentation technique et formation des équipes internes',
      ],
      en: [
        'Target software architecture (modular monolith, microservices, event-driven)',
        'Relational databases (Postgres, MySQL) and NoSQL (MongoDB, Redis)',
        'REST, GraphQL, gRPC APIs with JWT / OAuth2 authentication',
        'Third-party integrations: CIB, Edahabia, Yalidine, Stripe, WhatsApp Business',
        'Automated unit, integration and end-to-end testing',
        'CI/CD with GitHub Actions or GitLab CI, zero-downtime deployments',
        'Full observability: structured logs, OpenTelemetry traces, alerting',
        'Technical documentation and internal team training',
      ],
      ar: [
        'هيكلة البرمجيات المستهدفة (monolith, microservices, event-driven)',
        'قواعد بيانات علائقية (Postgres, MySQL) و NoSQL (MongoDB, Redis)',
        'واجهات REST و GraphQL و gRPC مع مصادقة JWT / OAuth2',
        'تكاملات الطرف الثالث: CIB، الذهبية، Yalidine، Stripe، WhatsApp Business',
        'اختبارات وحدة وتكامل ونهاية إلى نهاية آلية',
        'CI/CD مع GitHub Actions أو GitLab CI',
        'مراقبة كاملة: سجلات منظمة، تتبعات OpenTelemetry، تنبيهات',
        'وثائق تقنية وتدريب الفرق الداخلية',
      ],
    },
    techStack: ['TypeScript', 'Node.js', 'NestJS', 'Next.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
    faqs: {
      fr: [
        {
          q: 'Combien coûte un ERP sur mesure en Algérie ?',
          a: 'Un ERP sur mesure chez Symloop démarre à 500 000 DA pour un MVP (3 modules : ventes, stock, comptabilité) et peut atteindre 3 000 000 DA pour un ERP complet multi-entités avec intégrations avancées. Nous facturons en phases livrables, pas en licence annuelle.',
        },
        {
          q: 'Pouvez-vous reprendre un projet commencé par un autre prestataire ?',
          a: 'Oui. Nous réalisons régulièrement des audits de code et des reprises de projets. Le processus commence par un audit technique payant (50 000 DA) qui produit un rapport complet avec dette technique, risques et plan de remédiation.',
        },
        {
          q: 'Utilisez-vous des frameworks low-code ?',
          a: "Rarement. Les outils low-code sont excellents pour des prototypes, mais ils deviennent une cage quand vos besoins dépassent leurs abstractions. Nous privilégions le code natif (TypeScript, Go, Python) qui reste votre propriété intellectuelle.",
        },
      ],
      en: [
        {
          q: 'How much does a custom ERP cost in Algeria?',
          a: 'A custom ERP at Symloop starts at 500,000 DZD for an MVP (3 modules: sales, inventory, accounting) and can reach 3,000,000 DZD for a full multi-entity ERP with advanced integrations. We bill in delivery phases, not annual licenses.',
        },
        {
          q: 'Can you take over a project started by another vendor?',
          a: 'Yes. We regularly run code audits and project takeovers. The process starts with a paid technical audit (50,000 DZD) producing a full report with tech debt, risks and remediation plan.',
        },
        {
          q: 'Do you use low-code frameworks?',
          a: 'Rarely. Low-code tools are excellent for prototypes but become a cage when your needs outgrow their abstractions. We favor native code (TypeScript, Go, Python) which remains your intellectual property.',
        },
      ],
      ar: [
        {
          q: 'كم يكلف نظام ERP مخصص في الجزائر؟',
          a: 'يبدأ نظام ERP المخصص في سيملوب من 500,000 دج لنسخة MVP (3 وحدات: المبيعات، المخزون، المحاسبة) ويمكن أن يصل إلى 3,000,000 دج لنظام ERP كامل متعدد الكيانات.',
        },
        {
          q: 'هل يمكنكم تولي مشروع بدأه مزود آخر؟',
          a: 'نعم. نقوم بانتظام بمراجعات الشيفرة وتولي المشاريع. تبدأ العملية بمراجعة تقنية مدفوعة (50,000 دج).',
        },
        {
          q: 'هل تستخدمون أطر low-code؟',
          a: 'نادرًا. نفضل الشيفرة الأصلية (TypeScript، Go، Python) التي تظل ملكيتك الفكرية.',
        },
      ],
    },
    relatedServices: ['mobile-engineering', 'web-engineering', 'ai-ml'],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 02 — MOBILE APP ENGINEERING
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'mobile-engineering',
    number: '02',
    icon: 'Smartphone',
    accent: '#10b981',
    category: { fr: 'Applications Mobiles', en: 'Mobile Apps', ar: 'تطبيقات الهاتف' },
    priceMin: 180000,
    priceMax: 1200000,
    deliveryTime: { fr: '8 à 16 semaines', en: '8 to 16 weeks', ar: '8 إلى 16 أسبوعًا' },
    slugs: {
      fr: 'developpement-application-mobile-ios-android-algerie',
      en: 'ios-android-mobile-app-development-algeria',
      ar: 'تطوير-تطبيقات-iOS-أندرويد-الجزائر',
    },
    title: {
      fr: 'Applications mobiles iOS et Android',
      en: 'iOS and Android Mobile Apps',
      ar: 'تطبيقات iOS وأندرويد',
    },
    metaTitle: {
      fr: 'Développement Application Mobile iOS Android Algérie — Symloop',
      en: 'iOS & Android Mobile App Development in Algeria — Symloop',
      ar: 'تطوير تطبيقات iOS وأندرويد في الجزائر — سيملوب',
    },
    metaDescription: {
      fr: "Développement d'applications mobiles natives et cross-platform en Algérie. Swift, Kotlin, Flutter, React Native. Publication sur App Store et Google Play. Tarifs à partir de 180 000 DA.",
      en: 'Native and cross-platform mobile app development in Algeria. Swift, Kotlin, Flutter, React Native. App Store and Google Play publishing. From 180,000 DZD.',
      ar: 'تطوير تطبيقات الهاتف المحمول الأصلية ومتعددة المنصات في الجزائر. Swift و Kotlin و Flutter و React Native. النشر على App Store و Google Play.',
    },
    tagline: {
      fr: 'Des applications qui atteignent 4.8/5 sur les stores et qui y restent.',
      en: 'Apps that hit 4.8/5 on the stores — and stay there.',
      ar: 'تطبيقات تحقق 4.8/5 على المتاجر وتبقى هناك.',
    },
    intro: {
      fr: "Symloop développe des applications mobiles iOS et Android pour startups, PME et grandes entreprises algériennes : applications de livraison, banking, fidélité, marketplace, IoT mobile et super-apps. Nous construisons en natif (Swift, Kotlin) ou en cross-platform (Flutter, React Native) selon le contexte, et publions sur l'App Store et Google Play.",
      en: 'Symloop develops iOS and Android mobile apps for Algerian startups, SMBs and enterprises: delivery apps, banking, loyalty, marketplace, mobile IoT and super-apps. We build native (Swift, Kotlin) or cross-platform (Flutter, React Native) depending on context, and publish on the App Store and Google Play.',
      ar: 'تطور سيملوب تطبيقات الهاتف المحمول iOS و Android للشركات الناشئة والشركات الصغيرة والمتوسطة والشركات الكبيرة في الجزائر. نبني بشكل أصلي (Swift, Kotlin) أو متعدد المنصات (Flutter, React Native).',
    },
    longDescription: {
      fr: [
        "Une application mobile réussie n'est pas une copie de votre site web sur un écran de 6 pouces. C'est un produit différent avec des contraintes propres : latence réseau imprévisible, batterie, notifications push, offline-first, authentification biométrique, App Store Review. Nous concevons chaque application mobile autour de ces contraintes, pas autour de votre site web.",
        "Nos clients mobiles incluent des banques, des sociétés de livraison, des marketplaces et des startups de la santé. Nous avons publié plus de 40 applications sur l'App Store et Google Play avec un taux de rejet inférieur à 5% et une note moyenne de 4.7/5. Nous gérons aussi la soumission, les mises à jour et les réponses aux avis.",
        "Côté technique, nous privilégions Flutter quand la cible est iOS + Android avec un budget serré, React Native quand l'équipe maintient déjà du React, et natif (Swift/Kotlin) quand les performances graphiques ou l'accès matériel le justifient. Le choix n'est jamais idéologique — il est toujours justifié par vos contraintes.",
      ],
      en: [
        'A successful mobile app is not a copy of your website on a 6-inch screen. It is a different product with different constraints: unpredictable network latency, battery, push notifications, offline-first, biometric auth, App Store Review. We design every mobile app around those constraints, not around your website.',
        'Our mobile clients include banks, delivery companies, marketplaces and healthcare startups. We have published 40+ apps on the App Store and Google Play with a rejection rate below 5% and an average rating of 4.7/5. We also handle submission, updates and review responses.',
        'Technically, we prefer Flutter when the target is iOS + Android with a tight budget, React Native when the team already maintains React, and native (Swift/Kotlin) when graphics performance or hardware access justifies it. The choice is never ideological — it is always justified by your constraints.',
      ],
      ar: [
        'التطبيق المحمول الناجح ليس نسخة من موقع الويب الخاص بك على شاشة 6 بوصات. إنه منتج مختلف بقيود مختلفة.',
        'يشمل عملاؤنا المحمولون البنوك وشركات التوصيل والأسواق والشركات الناشئة في مجال الرعاية الصحية. نشرنا أكثر من 40 تطبيقًا على App Store و Google Play.',
        'من الناحية التقنية، نفضل Flutter للميزانيات المحدودة و React Native للفرق التي تتعامل مع React والأصلي (Swift/Kotlin) عندما تبرر الأداء الرسومي أو الوصول إلى الأجهزة ذلك.',
      ],
    },
    features: {
      fr: [
        'Applications natives iOS (Swift, SwiftUI) et Android (Kotlin, Jetpack Compose)',
        'Applications cross-platform Flutter et React Native',
        'Mode hors ligne, synchronisation différée, notifications push (FCM, APNs)',
        'Authentification biométrique (Face ID, Touch ID, empreinte)',
        'Paiement in-app, CIB, Edahabia, Apple Pay, Google Pay',
        'Géolocalisation, tracking temps réel, cartes Mapbox / Google Maps',
        'Publication App Store et Google Play, gestion des mises à jour',
        'Analytics (Firebase, Mixpanel), crash reporting (Sentry, Crashlytics)',
      ],
      en: [
        'Native iOS (Swift, SwiftUI) and Android (Kotlin, Jetpack Compose) apps',
        'Cross-platform Flutter and React Native apps',
        'Offline mode, deferred sync, push notifications (FCM, APNs)',
        'Biometric authentication (Face ID, Touch ID, fingerprint)',
        'In-app payment, CIB, Edahabia, Apple Pay, Google Pay',
        'Geolocation, real-time tracking, Mapbox / Google Maps',
        'App Store and Google Play publishing, update management',
        'Analytics (Firebase, Mixpanel), crash reporting (Sentry, Crashlytics)',
      ],
      ar: [
        'تطبيقات iOS الأصلية (Swift, SwiftUI) وتطبيقات Android (Kotlin, Jetpack Compose)',
        'تطبيقات Flutter و React Native متعددة المنصات',
        'وضع عدم الاتصال والإشعارات الفورية',
        'المصادقة البيومترية (Face ID، Touch ID، البصمة)',
        'الدفع داخل التطبيق، CIB، الذهبية، Apple Pay، Google Pay',
        'تحديد الموقع، التتبع في الوقت الفعلي، خرائط Google',
        'النشر على App Store و Google Play',
        'التحليلات وتقارير الأعطال',
      ],
    },
    techStack: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Flutter', 'Dart', 'React Native', 'Firebase', 'Realm', 'Mapbox'],
    faqs: {
      fr: [
        {
          q: 'Combien coûte une application mobile en Algérie ?',
          a: 'Chez Symloop, une application mobile simple (MVP, 5-10 écrans, backend basique) démarre à 180 000 DA. Une application moyenne (marketplace, e-commerce, livraison) coûte entre 400 000 et 800 000 DA. Une super-app complexe (banking, multi-rôles) atteint 1 200 000 DA ou plus.',
        },
        {
          q: 'Flutter ou React Native : lequel choisir ?',
          a: 'Flutter performe mieux sur les animations complexes et les UI très custom. React Native est préférable si votre équipe connaît déjà React ou si vous partagez du code avec une app web Next.js. Les deux sont matures en 2026. Nous décidons lors de la discovery.',
        },
        {
          q: 'Gérez-vous la publication sur l\'App Store ?',
          a: 'Oui. Nous gérons la création de vos comptes Apple Developer (99$/an) et Google Play Console (25$ une fois), la soumission, les rejets, les mises à jour, les fiches ASO, les captures d\'écran et la réponse aux avis.',
        },
      ],
      en: [
        {
          q: 'How much does a mobile app cost in Algeria?',
          a: 'At Symloop, a simple mobile app (MVP, 5-10 screens, basic backend) starts at 180,000 DZD. A medium app (marketplace, e-commerce, delivery) costs 400,000 to 800,000 DZD. A complex super-app (banking, multi-role) reaches 1,200,000 DZD or more.',
        },
        {
          q: 'Flutter or React Native: which should I choose?',
          a: 'Flutter performs better on complex animations and highly custom UIs. React Native is preferable if your team already knows React or if you share code with a Next.js web app. Both are mature in 2026. We decide during discovery.',
        },
        {
          q: 'Do you handle App Store publishing?',
          a: 'Yes. We handle Apple Developer ($99/year) and Google Play Console ($25 one-time) account creation, submission, rejections, updates, ASO listings, screenshots and review responses.',
        },
      ],
      ar: [
        {
          q: 'كم يكلف تطبيق الهاتف المحمول في الجزائر؟',
          a: 'في سيملوب، يبدأ تطبيق الهاتف المحمول البسيط من 180,000 دج. تكلف التطبيقات المتوسطة بين 400,000 و 800,000 دج.',
        },
        {
          q: 'Flutter أم React Native؟',
          a: 'يعمل Flutter بشكل أفضل على الرسوم المتحركة المعقدة. React Native يُفضل إذا كان فريقك يعرف بالفعل React.',
        },
        {
          q: 'هل تتولون النشر على App Store؟',
          a: 'نعم. نتولى إنشاء الحسابات والتقديم والرفض والتحديثات.',
        },
      ],
    },
    relatedServices: ['software-engineering', 'web-engineering', 'ai-ml'],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 03 — WEB ENGINEERING & E-COMMERCE
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'web-engineering',
    number: '03',
    icon: 'Globe',
    accent: '#f97316',
    category: { fr: 'Web & E-commerce', en: 'Web & E-commerce', ar: 'الويب والتجارة الإلكترونية' },
    priceMin: 32000,
    priceMax: 1500000,
    deliveryTime: { fr: '2 à 12 semaines', en: '2 to 12 weeks', ar: '2 إلى 12 أسبوعًا' },
    slugs: {
      fr: 'creation-site-web-ecommerce-algerie',
      en: 'website-ecommerce-development-algeria',
      ar: 'تطوير-المواقع-والتجارة-الإلكترونية-الجزائر',
    },
    title: {
      fr: 'Sites web et e-commerce',
      en: 'Websites and E-commerce',
      ar: 'المواقع والتجارة الإلكترونية',
    },
    metaTitle: {
      fr: 'Création Site Web & E-commerce en Algérie — Symloop',
      en: 'Website & E-commerce Development in Algeria — Symloop',
      ar: 'إنشاء المواقع والتجارة الإلكترونية في الجزائر — سيملوب',
    },
    metaDescription: {
      fr: 'Création de sites web professionnels, landing pages, e-commerce avec CIB/Edahabia, SEO technique et performance Core Web Vitals. Tarifs à partir de 32 000 DA.',
      en: 'Professional websites, landing pages, e-commerce with CIB/Edahabia payment, technical SEO and Core Web Vitals performance. From 32,000 DZD.',
      ar: 'مواقع ويب احترافية وصفحات هبوط وتجارة إلكترونية مع دفع CIB/الذهبية. ابتداءً من 32,000 دج.',
    },
    tagline: {
      fr: 'Des sites qui convertissent, qui se chargent en moins d\'une seconde, et qui se classent sur Google.',
      en: 'Sites that convert, load in under a second, and rank on Google.',
      ar: 'مواقع تحول، وتُحمّل في أقل من ثانية، وتحتل مرتبة على Google.',
    },
    intro: {
      fr: "Symloop conçoit et développe des sites web, landing pages et plateformes e-commerce optimisés pour la conversion et le référencement. Nous intégrons les paiements CIB et Edahabia, travaillons avec les transporteurs algériens (Yalidine, ZR Express, Kezili) et livrons des sites qui passent Core Web Vitals en vert dès le premier déploiement.",
      en: 'Symloop designs and develops websites, landing pages and e-commerce platforms optimized for conversion and search. We integrate CIB and Edahabia payments, work with Algerian carriers (Yalidine, ZR Express, Kezili) and ship sites that pass Core Web Vitals green from day one.',
      ar: 'تصمم سيملوب وتطور مواقع الويب وصفحات الهبوط ومنصات التجارة الإلكترونية المحسنة للتحويل والبحث. نحن ندمج مدفوعات CIB و Edahabia، ونعمل مع شركات النقل الجزائرية.',
    },
    longDescription: {
      fr: [
        "Un site web professionnel en 2026 n'est pas une brochure statique. C'est un actif de performance marketing qui doit charger en moins d'une seconde sur 4G algérienne, passer les Core Web Vitals de Google, apparaître dans les résultats locaux d'Alger à Tamanrasset, et convertir au moins 3% des visiteurs. Nous construisons des sites qui cochent ces cases dès le jour 1.",
        "Côté e-commerce, nous avons intégré des dizaines de boutiques avec CIB, Edahabia, Yalidine et ZR Express. Nous savons comment gérer la livraison 58 wilayas, les produits avec variantes, la TVA algérienne, les factures officielles et les remboursements partiels. Nos boutiques tournent sur Next.js, Shopify ou WooCommerce selon vos contraintes.",
        "Nous faisons aussi du SEO technique sérieux : audit Lighthouse, optimisation du LCP/INP/CLS, schema.org, sitemap dynamique, hreflang multi-locale, balises Open Graph, et un dossier de mots-clés livré avec chaque projet. Les sites que nous livrons se classent généralement en première page Google Algérie en 3 à 6 mois.",
      ],
      en: [
        'A professional website in 2026 is not a static brochure. It is a marketing performance asset that must load in under a second on Algerian 4G, pass Google Core Web Vitals, show up in local results from Algiers to Tamanrasset, and convert at least 3% of visitors. We build sites that tick those boxes on day one.',
        'For e-commerce, we have integrated dozens of stores with CIB, Edahabia, Yalidine and ZR Express. We know how to handle 58-wilaya delivery, products with variants, Algerian VAT, official invoices and partial refunds. Our stores run on Next.js, Shopify or WooCommerce depending on your constraints.',
        'We also do serious technical SEO: Lighthouse audit, LCP/INP/CLS optimization, schema.org, dynamic sitemap, multi-locale hreflang, Open Graph tags, and a keyword report delivered with every project. The sites we ship typically rank on Google Algeria page 1 within 3 to 6 months.',
      ],
      ar: [
        'الموقع الاحترافي في عام 2026 ليس كتيبًا ثابتًا. إنه أصل أداء تسويقي يجب أن يُحمّل في أقل من ثانية على شبكة 4G الجزائرية.',
        'من ناحية التجارة الإلكترونية، قمنا بدمج عشرات المتاجر مع CIB و Edahabia و Yalidine و ZR Express. نعرف كيفية التعامل مع التوصيل في 58 ولاية.',
        'نقوم أيضًا بعمل SEO تقني جاد: تدقيق Lighthouse، تحسين LCP/INP/CLS، schema.org، خريطة موقع ديناميكية.',
      ],
    },
    features: {
      fr: [
        'Sites vitrine, landing pages, portails corporate, intranets',
        'E-commerce complet avec panier, checkout, CIB, Edahabia, Yalidine',
        'CMS headless (Strapi, Sanity, Contentful) ou intégré (WordPress)',
        'SEO technique avancé : schema.org, sitemap, hreflang, Core Web Vitals',
        'Design responsive mobile-first avec accessibilité WCAG AA',
        'Animations Framer Motion, transitions Lenis, micro-interactions',
        'CMS multi-utilisateurs avec rôles, workflow de publication',
        'Analytics GA4, Google Tag Manager, Facebook Pixel, Meta Conversions API',
      ],
      en: [
        'Showcase sites, landing pages, corporate portals, intranets',
        'Full e-commerce with cart, checkout, CIB, Edahabia, Yalidine',
        'Headless CMS (Strapi, Sanity, Contentful) or integrated (WordPress)',
        'Advanced technical SEO: schema.org, sitemap, hreflang, Core Web Vitals',
        'Mobile-first responsive design with WCAG AA accessibility',
        'Framer Motion animations, Lenis transitions, micro-interactions',
        'Multi-user CMS with roles and publishing workflow',
        'GA4 analytics, Google Tag Manager, Facebook Pixel, Meta Conversions API',
      ],
      ar: [
        'مواقع العرض وصفحات الهبوط والبوابات المؤسسية',
        'تجارة إلكترونية كاملة مع سلة التسوق، CIB، الذهبية، Yalidine',
        'CMS بدون رأس (Strapi، Sanity) أو متكامل (WordPress)',
        'SEO تقني متقدم: schema.org، خريطة الموقع، hreflang',
        'تصميم متجاوب mobile-first مع إمكانية الوصول WCAG AA',
        'رسوم متحركة Framer Motion',
        'CMS متعدد المستخدمين',
        'تحليلات GA4',
      ],
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Strapi', 'WordPress', 'Shopify', 'WooCommerce', 'Vercel'],
    faqs: {
      fr: [
        {
          q: 'Combien coûte un site web en Algérie ?',
          a: 'Chez Symloop, une landing page démarre à 32 000 DA, un site vitrine 5 pages à 80 000 DA, un site corporate avec CMS à 180 000 DA, et un e-commerce avec paiement CIB à 350 000 DA. Le prix varie selon le design, le nombre de pages et les intégrations.',
        },
        {
          q: 'Intégrez-vous le paiement CIB et Edahabia ?',
          a: 'Oui, nous sommes intégrateurs certifiés SATIM. Nous gérons la demande commerçant SATIM, la configuration technique, les tests de paiement et la mise en production. Délai typique : 2 à 4 semaines.',
        },
        {
          q: 'Combien de temps pour classer mon site sur Google ?',
          a: 'Pour un site correctement optimisé (technique + contenu), comptez 3 à 6 mois pour des mots-clés locaux ("agence web Alger") et 6 à 12 mois pour des mots-clés nationaux compétitifs. Nous livrons un rapport SEO avec chaque projet.',
        },
      ],
      en: [
        {
          q: 'How much does a website cost in Algeria?',
          a: 'At Symloop, a landing page starts at 32,000 DZD, a 5-page showcase site at 80,000 DZD, a corporate site with CMS at 180,000 DZD, and an e-commerce with CIB payment at 350,000 DZD. Price varies with design, page count and integrations.',
        },
        {
          q: 'Do you integrate CIB and Edahabia payments?',
          a: 'Yes, we are certified SATIM integrators. We handle the SATIM merchant request, technical configuration, payment testing and go-live. Typical timeline: 2 to 4 weeks.',
        },
        {
          q: 'How long to rank my site on Google?',
          a: 'For a properly optimized site (technical + content), expect 3 to 6 months for local keywords ("web agency Algiers") and 6 to 12 months for competitive national keywords. We deliver an SEO report with every project.',
        },
      ],
      ar: [
        {
          q: 'كم يكلف موقع الويب في الجزائر؟',
          a: 'في سيملوب، تبدأ صفحة الهبوط من 32,000 دج، وموقع العرض المكون من 5 صفحات من 80,000 دج.',
        },
        {
          q: 'هل تدمجون مدفوعات CIB و Edahabia؟',
          a: 'نعم، نحن من المتكاملين المعتمدين من SATIM.',
        },
        {
          q: 'ما المدة اللازمة لتصنيف موقعي على Google؟',
          a: 'من 3 إلى 6 أشهر للكلمات الرئيسية المحلية، ومن 6 إلى 12 شهرًا للكلمات الرئيسية الوطنية التنافسية.',
        },
      ],
    },
    relatedServices: ['software-engineering', 'mobile-engineering', 'ai-ml'],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 04 — AI / ML ENGINEERING
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'ai-ml',
    number: '04',
    icon: 'Brain',
    accent: '#a855f7',
    category: { fr: 'Intelligence Artificielle', en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
    priceMin: 300000,
    priceMax: 5000000,
    deliveryTime: { fr: '8 à 24 semaines', en: '8 to 24 weeks', ar: '8 إلى 24 أسبوعًا' },
    slugs: {
      fr: 'intelligence-artificielle-machine-learning-algerie',
      en: 'artificial-intelligence-machine-learning-algeria',
      ar: 'الذكاء-الاصطناعي-وتعلم-الآلة-الجزائر',
    },
    title: {
      fr: 'Intelligence artificielle et machine learning',
      en: 'Artificial Intelligence and Machine Learning',
      ar: 'الذكاء الاصطناعي وتعلم الآلة',
    },
    metaTitle: {
      fr: 'Intelligence Artificielle & Machine Learning en Algérie — Symloop',
      en: 'Artificial Intelligence & Machine Learning in Algeria — Symloop',
      ar: 'الذكاء الاصطناعي وتعلم الآلة في الجزائر — سيملوب',
    },
    metaDescription: {
      fr: 'Solutions IA pour entreprises algériennes : chatbots GPT-4, vision par ordinateur, NLP arabe/français, moteurs de recommandation, RAG, agents autonomes. Tarifs à partir de 300 000 DA.',
      en: 'AI solutions for Algerian enterprises: GPT-4 chatbots, computer vision, Arabic/French NLP, recommendation engines, RAG, autonomous agents. From 300,000 DZD.',
      ar: 'حلول الذكاء الاصطناعي للشركات الجزائرية: روبوتات GPT-4 والرؤية الحاسوبية ومعالجة اللغة الطبيعية.',
    },
    tagline: {
      fr: "L'IA sans le hype — que des résultats mesurables.",
      en: 'AI without the hype — only measurable results.',
      ar: 'ذكاء اصطناعي بدون ضجة — نتائج قابلة للقياس فقط.',
    },
    intro: {
      fr: "Symloop est l'une des rares entreprises algériennes avec une équipe dédiée au machine learning et à l'IA appliquée. Nous déployons des solutions GPT-4, Claude, vision par ordinateur, NLP arabe et moteurs de recommandation pour des banques, cabinets juridiques, e-commerces, usines et administrations. Pas de hype — que du ROI mesurable.",
      en: 'Symloop is one of the few Algerian companies with a dedicated machine learning and applied AI team. We deploy GPT-4, Claude, computer vision, Arabic NLP and recommendation engine solutions for banks, law firms, e-commerces, factories and administrations. No hype — only measurable ROI.',
      ar: 'سيملوب هي واحدة من الشركات الجزائرية القليلة التي لديها فريق مخصص لتعلم الآلة والذكاء الاصطناعي التطبيقي.',
    },
    longDescription: {
      fr: [
        "L'IA en 2026 n'est plus de la science-fiction. C'est un ensemble d'APIs (OpenAI, Anthropic, Mistral), de modèles open source (Llama, Qwen, DeepSeek) et de techniques éprouvées (RAG, fine-tuning, agents) que nous combinons pour résoudre des problèmes métier concrets. Notre équipe d'ingénieurs ML a formé des modèles en production sur des jeux de données en arabe, français et anglais.",
        "Nos projets IA les plus fréquents sont : chatbots support client avec RAG sur votre documentation, extraction automatique de données depuis des factures et contrats, classification automatique d'emails, moteur de recommandation pour e-commerce, détection de fraude transactionnelle, vision par ordinateur pour contrôle qualité en usine, et agents autonomes pour automatiser des workflows entiers.",
        "Nous hébergeons soit sur des APIs managées (OpenAI, Anthropic, AWS Bedrock) si la confidentialité le permet, soit en on-premise avec vLLM / llama.cpp si vos données ne peuvent pas quitter l'Algérie. Tous nos déploiements incluent du monitoring LLM (latence, coût, qualité) et du prompt versioning.",
      ],
      en: [
        'AI in 2026 is no longer science fiction. It is a set of APIs (OpenAI, Anthropic, Mistral), open-source models (Llama, Qwen, DeepSeek) and battle-tested techniques (RAG, fine-tuning, agents) we combine to solve concrete business problems. Our ML engineers have trained production models on Arabic, French and English datasets.',
        'Our most frequent AI projects are: customer support chatbots with RAG on your documentation, automatic data extraction from invoices and contracts, email classification, e-commerce recommendation engines, transaction fraud detection, computer vision for factory quality control, and autonomous agents for workflow automation.',
        'We host either on managed APIs (OpenAI, Anthropic, AWS Bedrock) when confidentiality allows, or on-premise with vLLM / llama.cpp when your data cannot leave Algeria. Every deployment includes LLM monitoring (latency, cost, quality) and prompt versioning.',
      ],
      ar: [
        'الذكاء الاصطناعي في عام 2026 لم يعد خيالًا علميًا. إنه مجموعة من APIs والنماذج مفتوحة المصدر والتقنيات المجربة.',
        'مشاريع الذكاء الاصطناعي الأكثر شيوعًا لدينا هي: روبوتات دعم العملاء مع RAG، واستخراج البيانات التلقائي من الفواتير والعقود.',
        'نستضيف إما على واجهات برمجة التطبيقات المُدارة أو في مقر العميل إذا كانت بياناتك لا يمكن أن تغادر الجزائر.',
      ],
    },
    features: {
      fr: [
        'Chatbots GPT-4, Claude et Mistral avec RAG sur vos documents',
        'Extraction automatique de données (factures, contrats, CV, reçus)',
        'NLP arabe et français (classification, NER, sentiment)',
        'Vision par ordinateur (détection, segmentation, OCR)',
        'Moteurs de recommandation produit et contenu',
        'Détection de fraude et d\'anomalies temps réel',
        'Agents autonomes avec outils (function calling, LangGraph)',
        'Fine-tuning de LLMs open-source, hébergement on-premise avec vLLM',
      ],
      en: [
        'GPT-4, Claude and Mistral chatbots with RAG on your documents',
        'Automatic data extraction (invoices, contracts, resumes, receipts)',
        'Arabic and French NLP (classification, NER, sentiment)',
        'Computer vision (detection, segmentation, OCR)',
        'Product and content recommendation engines',
        'Real-time fraud and anomaly detection',
        'Autonomous agents with tools (function calling, LangGraph)',
        'Open-source LLM fine-tuning, on-premise hosting with vLLM',
      ],
      ar: [
        'روبوتات GPT-4 و Claude و Mistral',
        'استخراج البيانات التلقائي',
        'معالجة اللغة الطبيعية العربية والفرنسية',
        'الرؤية الحاسوبية',
        'محركات التوصية',
        'كشف الاحتيال في الوقت الفعلي',
        'الوكلاء المستقلون',
        'الضبط الدقيق لنماذج LLM مفتوحة المصدر',
      ],
    },
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LangGraph', 'OpenAI', 'Anthropic', 'Mistral', 'vLLM', 'ChromaDB', 'Pinecone'],
    faqs: {
      fr: [
        {
          q: 'Combien coûte un chatbot IA en Algérie ?',
          a: 'Un chatbot IA simple (support client avec RAG sur FAQ) démarre à 300 000 DA. Un chatbot avancé avec intégration WhatsApp, historique et escalade humaine : 500 000 à 1 200 000 DA. Un agent autonome avec outils (prise de rendez-vous, commande) : 1 500 000 DA et plus.',
        },
        {
          q: 'Mes données quittent-elles l\'Algérie ?',
          a: "Par défaut, oui : nous utilisons OpenAI ou Anthropic pour le meilleur rapport qualité/prix. Si vos données sont sensibles (santé, banque, défense), nous déployons des modèles open-source (Llama 3, Qwen) on-premise sur votre infrastructure ou sur un serveur algérien dédié.",
        },
        {
          q: 'Quelle différence entre ChatGPT et un chatbot sur mesure ?',
          a: "ChatGPT est généraliste et ne connaît pas votre entreprise. Un chatbot sur mesure utilise le même moteur GPT-4 mais avec RAG sur vos documents, connecté à votre CRM, à WhatsApp, à votre site. Il répond avec vos tarifs, vos horaires et escalade vers un humain si nécessaire.",
        },
      ],
      en: [
        {
          q: 'How much does an AI chatbot cost in Algeria?',
          a: 'A simple AI chatbot (customer support with RAG on FAQ) starts at 300,000 DZD. An advanced chatbot with WhatsApp integration, history and human escalation: 500,000 to 1,200,000 DZD. An autonomous agent with tools (appointment booking, orders): 1,500,000 DZD and up.',
        },
        {
          q: 'Does my data leave Algeria?',
          a: 'By default, yes: we use OpenAI or Anthropic for the best price-quality ratio. If your data is sensitive (healthcare, banking, defense), we deploy open-source models (Llama 3, Qwen) on-premise on your infrastructure or a dedicated Algerian server.',
        },
        {
          q: 'What is the difference between ChatGPT and a custom chatbot?',
          a: 'ChatGPT is generalist and does not know your business. A custom chatbot uses the same GPT-4 engine but with RAG on your documents, connected to your CRM, WhatsApp, website. It answers with your prices, hours and escalates to a human when needed.',
        },
      ],
      ar: [
        {
          q: 'كم يكلف روبوت الدردشة في الجزائر؟',
          a: 'يبدأ روبوت الدردشة البسيط من 300,000 دج. الروبوت المتقدم مع تكامل WhatsApp: من 500,000 إلى 1,200,000 دج.',
        },
        {
          q: 'هل تغادر بياناتي الجزائر؟',
          a: 'افتراضيًا، نعم. لكن إذا كانت بياناتك حساسة، فإننا ننشر نماذج مفتوحة المصدر في مقرك.',
        },
        {
          q: 'ما الفرق بين ChatGPT وروبوت دردشة مخصص؟',
          a: 'ChatGPT عام ولا يعرف عملك. الروبوت المخصص يستخدم نفس المحرك ولكن مع RAG على مستنداتك.',
        },
      ],
    },
    relatedServices: ['software-engineering', 'web-engineering', 'iot-hardware'],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 05 — IOT & CONNECTED HARDWARE
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'iot-hardware',
    number: '05',
    icon: 'Cpu',
    accent: '#06b6d4',
    category: { fr: 'IoT & Hardware', en: 'IoT & Hardware', ar: 'إنترنت الأشياء والأجهزة' },
    priceMin: 250000,
    priceMax: null,
    deliveryTime: { fr: '12 à 32 semaines', en: '12 to 32 weeks', ar: '12 إلى 32 أسبوعًا' },
    slugs: {
      fr: 'solutions-iot-objets-connectes-algerie',
      en: 'iot-connected-devices-algeria',
      ar: 'حلول-إنترنت-الأشياء-الجزائر',
    },
    title: {
      fr: 'IoT et objets connectés',
      en: 'IoT and Connected Devices',
      ar: 'إنترنت الأشياء والأجهزة المتصلة',
    },
    metaTitle: {
      fr: 'Solutions IoT & Objets Connectés en Algérie — Symloop',
      en: 'IoT & Connected Devices Solutions in Algeria — Symloop',
      ar: 'حلول إنترنت الأشياء في الجزائر — سيملوب',
    },
    metaDescription: {
      fr: 'Solutions IoT industrielles en Algérie : ESP32, LoRaWAN, capteurs, agriculture intelligente, smart city, monitoring usine. Conception électronique et firmware sur mesure.',
      en: 'Industrial IoT solutions in Algeria: ESP32, LoRaWAN, sensors, smart agriculture, smart city, factory monitoring. Custom electronics and firmware.',
      ar: 'حلول إنترنت الأشياء الصناعية في الجزائر: ESP32، LoRaWAN، الاستشعار، الزراعة الذكية، المدينة الذكية.',
    },
    tagline: {
      fr: 'Du capteur au tableau de bord — une stack IoT complète.',
      en: 'From sensor to dashboard — a full IoT stack.',
      ar: 'من المستشعر إلى لوحة المعلومات — حزمة IoT كاملة.',
    },
    intro: {
      fr: "Symloop conçoit des solutions IoT complètes : électronique (PCB, capteurs, ESP32, Raspberry Pi), firmware embarqué (C, Rust, MicroPython), passerelles LoRaWAN, backend cloud (MQTT, Kafka, TimescaleDB) et dashboards temps réel. Nous intervenons en agriculture de précision, smart city, monitoring industriel et santé connectée.",
      en: 'Symloop designs complete IoT solutions: electronics (PCB, sensors, ESP32, Raspberry Pi), embedded firmware (C, Rust, MicroPython), LoRaWAN gateways, cloud backend (MQTT, Kafka, TimescaleDB) and real-time dashboards. We work in precision agriculture, smart city, industrial monitoring and connected health.',
      ar: 'تصمم سيملوب حلول إنترنت الأشياء الكاملة: الإلكترونيات، البرامج الثابتة المضمنة، بوابات LoRaWAN، الخلفية السحابية، ولوحات المعلومات في الوقت الفعلي.',
    },
    longDescription: {
      fr: [
        "L'IoT en Algérie est encore sous-exploité. Nous travaillons avec des fermes d'olives à Béjaïa qui ont réduit leur consommation d'eau de 40% grâce à l'irrigation intelligente, avec des usines à Sétif qui ont évité 2 millions de DA d'arrêts non-planifiés grâce au monitoring prédictif, et avec des municipalités qui comptent leurs poubelles, leur éclairage public et leur qualité d'air en temps réel.",
        "Nous concevons les circuits, nous les assemblons en petite série, nous flashons le firmware, nous déployons les passerelles, nous stockons les données dans TimescaleDB et nous affichons tout sur un dashboard Grafana ou Next.js. Pas de vendor lock-in, pas de solution propriétaire que vous ne pouvez pas modifier.",
        "Nos protocoles de prédilection sont MQTT, LoRaWAN et NB-IoT. Nous travaillons avec des capteurs industriels (SenseCAP, Seeed, Bosch) ou des cartes ESP32 bon marché pour les prototypes. Nous gérons la certification CE, le boîtier IP65/IP67, et la logistique d'installation sur site.",
      ],
      en: [
        'IoT in Algeria is still under-exploited. We work with olive farms in Bejaia that reduced water consumption by 40% through smart irrigation, with factories in Setif that avoided 2 million DZD of unplanned downtime through predictive monitoring, and with municipalities that count their bins, street lights and air quality in real time.',
        'We design the circuits, assemble in small batches, flash the firmware, deploy gateways, store data in TimescaleDB and display everything on a Grafana or Next.js dashboard. No vendor lock-in, no proprietary solution you cannot modify.',
        'Our preferred protocols are MQTT, LoRaWAN and NB-IoT. We work with industrial sensors (SenseCAP, Seeed, Bosch) or cheap ESP32 boards for prototypes. We handle CE certification, IP65/IP67 enclosures and on-site installation logistics.',
      ],
      ar: [
        'إنترنت الأشياء في الجزائر لا يزال غير مستغل بشكل كافٍ. نعمل مع مزارع الزيتون في بجاية التي خفضت استهلاك المياه بنسبة 40٪.',
        'نصمم الدوائر، ونجمعها في دفعات صغيرة، وننزل البرامج الثابتة، وننشر البوابات، ونخزن البيانات.',
        'البروتوكولات المفضلة لدينا هي MQTT و LoRaWAN و NB-IoT.',
      ],
    },
    features: {
      fr: [
        'Conception électronique PCB et assemblage petite série',
        'Firmware embarqué C, C++, Rust, MicroPython sur ESP32, STM32, Raspberry Pi',
        'Protocoles LoRaWAN, MQTT, NB-IoT, Zigbee, BLE',
        'Agriculture intelligente (irrigation, serres, élevage connecté)',
        'Monitoring industriel (SCADA, OEE, maintenance prédictive)',
        'Smart city (éclairage, déchets, parking, qualité d\'air)',
        'Dashboards temps réel Grafana ou custom Next.js',
        'Certification CE, boîtiers IP65/IP67, installation terrain',
      ],
      en: [
        'PCB electronic design and small-batch assembly',
        'C, C++, Rust, MicroPython embedded firmware on ESP32, STM32, Raspberry Pi',
        'LoRaWAN, MQTT, NB-IoT, Zigbee, BLE protocols',
        'Smart agriculture (irrigation, greenhouses, connected livestock)',
        'Industrial monitoring (SCADA, OEE, predictive maintenance)',
        'Smart city (lighting, waste, parking, air quality)',
        'Real-time Grafana or custom Next.js dashboards',
        'CE certification, IP65/IP67 enclosures, on-site installation',
      ],
      ar: [
        'تصميم الدوائر الإلكترونية وتجميع دفعات صغيرة',
        'البرامج الثابتة المضمنة على ESP32 و STM32 و Raspberry Pi',
        'بروتوكولات LoRaWAN و MQTT و NB-IoT',
        'الزراعة الذكية',
        'المراقبة الصناعية',
        'المدينة الذكية',
        'لوحات معلومات في الوقت الفعلي',
        'شهادة CE والتركيب الميداني',
      ],
    },
    techStack: ['ESP32', 'STM32', 'Raspberry Pi', 'Arduino', 'LoRaWAN', 'MQTT', 'Node-RED', 'InfluxDB', 'TimescaleDB', 'Grafana'],
    faqs: {
      fr: [
        {
          q: 'Combien coûte un projet IoT en Algérie ?',
          a: "Les projets IoT démarrent à 250 000 DA pour un pilote (5-10 capteurs, dashboard basique). Un déploiement industriel complet (50-500 capteurs, passerelles LoRaWAN, backend temps réel) coûte entre 1 500 000 et 8 000 000 DA selon la complexité et le volume.",
        },
        {
          q: 'Concevez-vous vos propres cartes électroniques ?',
          a: "Oui, nous faisons de la conception PCB (KiCad, Altium) et de l'assemblage petite série en partenariat avec des fablabs. Pour les grands volumes, nous sous-traitons en Chine ou en Tunisie via des partenaires certifiés.",
        },
        {
          q: 'Gérez-vous la connectivité cellulaire ?',
          a: "Oui. Nous travaillons avec Mobilis, Djezzy et Ooredoo pour les cartes SIM M2M et NB-IoT. Nous pouvons aussi proposer des solutions LoRaWAN privées pour réduire les coûts opérationnels.",
        },
      ],
      en: [
        {
          q: 'How much does an IoT project cost in Algeria?',
          a: 'IoT projects start at 250,000 DZD for a pilot (5-10 sensors, basic dashboard). A full industrial deployment (50-500 sensors, LoRaWAN gateways, real-time backend) costs 1,500,000 to 8,000,000 DZD depending on complexity and volume.',
        },
        {
          q: 'Do you design your own electronic boards?',
          a: 'Yes, we do PCB design (KiCad, Altium) and small-batch assembly in partnership with fablabs. For high volumes, we subcontract in China or Tunisia via certified partners.',
        },
        {
          q: 'Do you handle cellular connectivity?',
          a: 'Yes. We work with Mobilis, Djezzy and Ooredoo for M2M and NB-IoT SIM cards. We can also offer private LoRaWAN solutions to reduce operational costs.',
        },
      ],
      ar: [
        {
          q: 'كم يكلف مشروع IoT في الجزائر؟',
          a: 'تبدأ مشاريع IoT من 250,000 دج للتجريب. النشر الصناعي الكامل يكلف من 1,500,000 إلى 8,000,000 دج.',
        },
        {
          q: 'هل تصممون لوحاتكم الإلكترونية الخاصة؟',
          a: 'نعم، نقوم بتصميم PCB والتجميع في دفعات صغيرة.',
        },
        {
          q: 'هل تديرون الاتصال الخلوي؟',
          a: 'نعم. نحن نعمل مع موبيليس وجازي وأوريدو.',
        },
      ],
    },
    relatedServices: ['software-engineering', 'ai-ml', 'devops-cloud'],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 06 — DEVOPS, CLOUD & SECURITY
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'devops-cloud',
    number: '06',
    icon: 'Shield',
    accent: '#ef4444',
    category: { fr: 'DevOps, Cloud & Sécurité', en: 'DevOps, Cloud & Security', ar: 'DevOps والسحابة والأمان' },
    priceMin: 100000,
    priceMax: 2000000,
    deliveryTime: { fr: '2 à 12 semaines', en: '2 to 12 weeks', ar: '2 إلى 12 أسبوعًا' },
    slugs: {
      fr: 'devops-cloud-cybersecurite-algerie',
      en: 'devops-cloud-cybersecurity-algeria',
      ar: 'devops-السحابة-الأمن-السيبراني-الجزائر',
    },
    title: {
      fr: 'DevOps, cloud et cybersécurité',
      en: 'DevOps, Cloud and Cybersecurity',
      ar: 'DevOps والسحابة والأمن السيبراني',
    },
    metaTitle: {
      fr: 'DevOps, Cloud & Cybersécurité en Algérie — Symloop',
      en: 'DevOps, Cloud & Cybersecurity in Algeria — Symloop',
      ar: 'DevOps والسحابة والأمن السيبراني في الجزائر — سيملوب',
    },
    metaDescription: {
      fr: 'DevOps, migration cloud (AWS, Azure, GCP), pipelines CI/CD, Kubernetes, audit de sécurité et pentest pour entreprises algériennes. Disponibilité 99.9%. À partir de 100 000 DA.',
      en: 'DevOps, cloud migration (AWS, Azure, GCP), CI/CD pipelines, Kubernetes, security audit and pentest for Algerian enterprises. 99.9% uptime. From 100,000 DZD.',
      ar: 'DevOps والترحيل السحابي (AWS، Azure، GCP) وخطوط أنابيب CI/CD و Kubernetes ومراجعة الأمان للشركات الجزائرية.',
    },
    tagline: {
      fr: 'Infrastructure fiable, déploiements sans downtime, sécurité de niveau bancaire.',
      en: 'Reliable infrastructure, zero-downtime deploys, bank-grade security.',
      ar: 'بنية تحتية موثوقة، عمليات نشر بدون توقف، أمان بمستوى بنكي.',
    },
    intro: {
      fr: "Symloop gère l'infrastructure, les déploiements et la sécurité de plus de 40 applications en production. Nous migrons vers AWS, Azure ou GCP, nous conteneurisons avec Docker et Kubernetes, nous automatisons les déploiements avec GitHub Actions et Terraform, et nous durcissons la sécurité avec des audits OWASP, du pentest et de la conformité RGPD/HIPAA.",
      en: 'Symloop manages infrastructure, deployments and security for 40+ production applications. We migrate to AWS, Azure or GCP, containerize with Docker and Kubernetes, automate deployments with GitHub Actions and Terraform, and harden security with OWASP audits, pentesting and GDPR/HIPAA compliance.',
      ar: 'تدير سيملوب البنية التحتية وعمليات النشر والأمان لأكثر من 40 تطبيقًا في الإنتاج.',
    },
    longDescription: {
      fr: [
        "Le DevOps n'est pas un luxe. Une application sans CI/CD, sans monitoring et sans sauvegarde est une application qui va perdre des données un jour, casser en production un vendredi soir, et coûter des milliers d'euros en temps d'arrêt. Nous avons vu ça trop de fois. Nous réparons ces situations et nous aidons les équipes à ne plus jamais y retourner.",
        "Notre offre inclut : audit d'infrastructure existante, migration cloud (souvent depuis un serveur VPS OVH vers AWS ou une VM Azure), mise en place de pipelines CI/CD, conteneurisation, Kubernetes managé (EKS, GKE, AKS), monitoring complet (Datadog, Grafana, Prometheus), logs centralisés, sauvegardes automatisées et tests de restauration mensuels.",
        "Côté sécurité, nous faisons des audits OWASP Top 10, du pentest boîte noire et boîte grise, de la revue de code sécurité, du durcissement de serveurs Linux et du contrôle d'accès. Nous sommes familiers avec la loi algérienne 18-07 sur la protection des données personnelles et le RGPD européen pour nos clients qui travaillent avec l'Europe.",
      ],
      en: [
        'DevOps is not a luxury. An application without CI/CD, monitoring and backups is one that will lose data someday, break in production on a Friday night, and cost thousands of euros in downtime. We have seen it too many times. We fix those situations and help teams never go back.',
        'Our offering includes: existing infrastructure audit, cloud migration (often from an OVH VPS to AWS or an Azure VM), CI/CD pipeline setup, containerization, managed Kubernetes (EKS, GKE, AKS), full monitoring (Datadog, Grafana, Prometheus), centralized logs, automated backups and monthly restore tests.',
        'On security, we do OWASP Top 10 audits, black-box and gray-box pentest, security code review, Linux server hardening and access control. We are familiar with Algerian law 18-07 on personal data protection and European GDPR for clients working with Europe.',
      ],
      ar: [
        'DevOps ليس رفاهية. التطبيق بدون CI/CD والمراقبة والنسخ الاحتياطي هو تطبيق سيفقد البيانات يومًا ما.',
        'يشمل عرضنا: تدقيق البنية التحتية الحالية، والهجرة السحابية، وإعداد خطوط أنابيب CI/CD، والحاويات، و Kubernetes المُدارة.',
        'من ناحية الأمان، نقوم بمراجعات OWASP Top 10 والاختراق وتدقيق الشيفرة.',
      ],
    },
    features: {
      fr: [
        'Migration cloud AWS, Azure, Google Cloud, OVH',
        'CI/CD avec GitHub Actions, GitLab CI, Jenkins',
        'Conteneurisation Docker, orchestration Kubernetes (EKS, GKE, AKS)',
        'Infrastructure as Code avec Terraform, Pulumi, Ansible',
        'Monitoring 24/7 : Datadog, Grafana, Prometheus, Sentry',
        'Audit de sécurité OWASP Top 10, pentest, durcissement Linux',
        'Conformité RGPD, loi 18-07, ISO 27001, HIPAA',
        'Sauvegardes automatisées et tests de restauration mensuels',
      ],
      en: [
        'Cloud migration AWS, Azure, Google Cloud, OVH',
        'CI/CD with GitHub Actions, GitLab CI, Jenkins',
        'Docker containerization, Kubernetes orchestration (EKS, GKE, AKS)',
        'Infrastructure as Code with Terraform, Pulumi, Ansible',
        '24/7 monitoring: Datadog, Grafana, Prometheus, Sentry',
        'OWASP Top 10 security audit, pentest, Linux hardening',
        'GDPR, law 18-07, ISO 27001, HIPAA compliance',
        'Automated backups and monthly restore tests',
      ],
      ar: [
        'الترحيل السحابي AWS و Azure و Google Cloud',
        'CI/CD مع GitHub Actions و GitLab CI',
        'Docker و Kubernetes',
        'Infrastructure as Code مع Terraform',
        'مراقبة 24/7',
        'تدقيق الأمان OWASP Top 10',
        'الامتثال لـ GDPR والقانون 18-07',
        'النسخ الاحتياطي الآلي',
      ],
    },
    techStack: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'AWS', 'Azure', 'GCP', 'GitHub Actions', 'Datadog', 'Grafana', 'Prometheus', 'Sentry'],
    faqs: {
      fr: [
        {
          q: 'Combien coûte une migration cloud en Algérie ?',
          a: 'Une migration simple (un seul service monolithique vers un VPS cloud) démarre à 100 000 DA. Une migration complexe (microservices, bases de données, Kubernetes, zéro downtime) coûte entre 500 000 et 2 000 000 DA selon la taille et les contraintes.',
        },
        {
          q: 'Faites-vous du pentest ?',
          a: 'Oui. Nous faisons du pentest boîte noire (sans accès au code) et boîte grise (avec accès au code). Un pentest standard sur une application web coûte 150 000 à 400 000 DA et produit un rapport détaillé avec sévérité, reproductibilité et plan de remédiation.',
        },
        {
          q: 'Gérez-vous la mise en conformité RGPD ?',
          a: "Oui. Nous aidons les entreprises algériennes qui traitent des données de citoyens européens à être conformes au RGPD : nomination DPO, registre des traitements, DPIA, contrats sous-traitance, suppression et portabilité des données.",
        },
      ],
      en: [
        {
          q: 'How much does a cloud migration cost in Algeria?',
          a: 'A simple migration (a single monolithic service to a cloud VPS) starts at 100,000 DZD. A complex migration (microservices, databases, Kubernetes, zero downtime) costs 500,000 to 2,000,000 DZD depending on size and constraints.',
        },
        {
          q: 'Do you do pentesting?',
          a: 'Yes. We do black-box (no code access) and gray-box (with code access) pentesting. A standard pentest on a web application costs 150,000 to 400,000 DZD and produces a detailed report with severity, reproducibility and remediation plan.',
        },
        {
          q: 'Do you handle GDPR compliance?',
          a: 'Yes. We help Algerian companies processing European citizens\' data become GDPR compliant: DPO appointment, processing register, DPIA, subprocessor contracts, data deletion and portability.',
        },
      ],
      ar: [
        {
          q: 'كم تكلف الهجرة السحابية في الجزائر؟',
          a: 'تبدأ الهجرة البسيطة من 100,000 دج. الهجرة المعقدة تكلف من 500,000 إلى 2,000,000 دج.',
        },
        {
          q: 'هل تقومون بالاختراق التجريبي؟',
          a: 'نعم. نقوم باختبارات الصندوق الأسود والرمادي.',
        },
        {
          q: 'هل تتولون الامتثال لـ GDPR؟',
          a: 'نعم. نحن نساعد الشركات الجزائرية التي تعالج بيانات المواطنين الأوروبيين.',
        },
      ],
    },
    relatedServices: ['software-engineering', 'web-engineering', 'iot-hardware'],
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

export function getAllServicesForLocale(locale) {
  return SERVICES.map((s) => ({
    id: s.id,
    number: s.number,
    icon: s.icon,
    accent: s.accent,
    slug: s.slugs[locale] || s.slugs.fr,
    category: s.category[locale] || s.category.fr,
    title: s.title[locale] || s.title.fr,
    metaTitle: s.metaTitle[locale] || s.metaTitle.fr,
    metaDescription: s.metaDescription[locale] || s.metaDescription.fr,
    tagline: s.tagline[locale] || s.tagline.fr,
    intro: s.intro[locale] || s.intro.fr,
    longDescription: s.longDescription[locale] || s.longDescription.fr,
    features: s.features[locale] || s.features.fr,
    techStack: s.techStack,
    faqs: s.faqs[locale] || s.faqs.fr,
    priceMin: s.priceMin,
    priceMax: s.priceMax,
    deliveryTime: s.deliveryTime[locale] || s.deliveryTime.fr,
    relatedServices: s.relatedServices,
  }));
}

export function getServiceBySlug(slug) {
  for (const s of SERVICES) {
    for (const locale of ['fr', 'en', 'ar']) {
      if (s.slugs[locale] === slug) return { service: s, locale };
    }
  }
  return null;
}

export function getAllSlugPaths() {
  const paths = [];
  for (const s of SERVICES) {
    for (const locale of ['fr', 'en', 'ar']) {
      paths.push({ params: { slug: s.slugs[locale] }, locale });
    }
  }
  return paths;
}

export function formatPriceRange(min, max, locale) {
  if (min === null || min === undefined) {
    return locale === 'ar' ? 'على الطلب' : locale === 'en' ? 'On quote' : 'Sur devis';
  }
  const fmt = (n) => new Intl.NumberFormat(locale === 'ar' ? 'ar-DZ' : locale === 'en' ? 'en-US' : 'fr-DZ').format(n);
  if (max === null || max === undefined) {
    return locale === 'ar' ? `ابتداءً من ${fmt(min)} دج` : locale === 'en' ? `From ${fmt(min)} DZD` : `À partir de ${fmt(min)} DA`;
  }
  return `${fmt(min)} – ${fmt(max)} DA`;
}
