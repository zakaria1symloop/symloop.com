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

  // ════════════════════════════════════════════════════════════════════════
  // 07 — CYBERSECURITY (new — split out from devops-cloud)
  // Routes to editorial page /services/cybersecurity/
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'cybersecurity',
    number: '07',
    icon: 'Shield',
    accent: '#f43f5e',
    category: { fr: 'Cybersécurité', en: 'Cybersecurity', ar: 'الأمن السيبراني' },
    priceMin: 250000,
    priceMax: 4000000,
    deliveryTime: { fr: '2 à 8 semaines', en: '2 to 8 weeks', ar: 'أسبوعان إلى 8 أسابيع' },
    slugs: {
      fr: 'audit-cybersecurite-pentest-algerie',
      en: 'cybersecurity-audit-pentest-algeria',
      ar: 'تدقيق-الأمن-السيبراني-الجزائر',
    },
    title: {
      fr: 'Cybersécurité',
      en: 'Cybersecurity',
      ar: 'الأمن السيبراني',
    },
    metaTitle: {
      fr: 'Audit Cybersécurité, Pentest & Conformité en Algérie — Symloop',
      en: 'Cybersecurity Audits, Pentesting & Compliance in Algeria — Symloop',
      ar: 'تدقيقات الأمن السيبراني والاختبار في الجزائر — سيملوب',
    },
    metaDescription: {
      fr: "Symloop réalise des audits de sécurité, tests d'intrusion, durcissement d'infrastructure et frameworks de conformité (SOC 2, ISO 27001, RGPD, PCI DSS, HIPAA). Équipe sécurité senior basée à Alger, livrant en MENA, Europe et Golfe.",
      en: 'Symloop runs security audits, penetration tests, infrastructure hardening and compliance frameworks (SOC 2, ISO 27001, GDPR, PCI DSS, HIPAA). Senior security team headquartered in Algiers, delivering across MENA, Europe and the Gulf.',
      ar: 'تجري سيملوب تدقيقات أمنية واختبارات اختراق وتقوية البنية التحتية وأطر الامتثال. فريق أمني كبير مقره الجزائر العاصمة، يسلّم عبر منطقة الشرق الأوسط وشمال أفريقيا وأوروبا والخليج.',
    },
    tagline: {
      fr: 'Nous supposons que vous êtes déjà compromis. Puis nous concevons pour le jour d\'après.',
      en: 'We assume you are already compromised. Then we engineer for the day after.',
      ar: 'نفترض أنك مُخترَق بالفعل. ثم نصمم لليوم التالي.',
    },
    intro: {
      fr: "Audits de sécurité, tests d'intrusion, durcissement d'infrastructure, frameworks de conformité. Équipe d'ingénierie sécurité basée à Alger, livrant en Algérie, MENA, Europe et Golfe. Nous ne vendons pas la paranoïa — nous concevons les systèmes et processus qui survivent à une vraie attaque.",
      en: 'Security audits, penetration tests, infrastructure hardening, compliance frameworks. Senior security engineering team headquartered in Algiers, delivering across Algeria, MENA, Europe and the Gulf. We do not sell paranoia — we engineer the systems and processes that survive a real attack.',
      ar: 'تدقيقات أمنية واختبارات اختراق وتقوية البنية التحتية وأطر الامتثال. فريق هندسة أمنية مقره الجزائر العاصمة، يسلّم في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا وأوروبا والخليج. نحن لا نبيع الذعر — نصمم الأنظمة التي تنجو من هجوم حقيقي.',
    },
    longDescription: {
      fr: [
        "La cybersécurité chez Symloop n'est pas une checklist. C'est un engagement d'ingénierie : nous lisons votre code, modélisons les menaces réelles qui pèsent sur votre métier, simulons des attaques, et concevons les défenses qui tiennent quand quelque chose va mal.",
        "Nous intervenons sur six modèles d'attaque : injection (SQL, NoSQL, commande), authentification cassée, exposition de données sensibles, contrôles d'accès défaillants, mauvaise configuration de sécurité, et chaîne d'approvisionnement compromise. Pour chacun, nous concevons un contrôle défensif spécifique et le testons en conditions réelles.",
        "Conformité : nous accompagnons les implémentations SOC 2, ISO 27001, RGPD, PCI DSS, HIPAA et NIS2. Pas de slides de cabinet de conseil — du code, des pipelines et des contrôles audités.",
      ],
      en: [
        "Cybersecurity at Symloop is not a checklist. It is an engineering engagement: we read your code, model the real threats your business faces, simulate attacks, and engineer the defenses that hold when something goes wrong.",
        "We work across six attack patterns: injection (SQL, NoSQL, command), broken authentication, sensitive data exposure, broken access control, security misconfiguration, and compromised supply chain. For each one we engineer a specific defensive control and test it under real conditions.",
        "Compliance: we lead SOC 2, ISO 27001, GDPR, PCI DSS, HIPAA and NIS2 implementations. No consulting slides — code, pipelines and audited controls.",
      ],
      ar: [
        "الأمن السيبراني في سيملوب ليس قائمة فحص. إنه التزام هندسي: نقرأ الكود الخاص بك، ونحاكي التهديدات الحقيقية التي تواجه أعمالك، ونحاكي الهجمات، ونصمم الدفاعات التي تصمد عندما يسوء شيء ما.",
        "نعمل عبر ستة أنماط هجوم: الحقن، المصادقة المكسورة، تعرّض البيانات الحساسة، التحكم في الوصول المكسور، سوء التهيئة الأمنية، وسلسلة التوريد المخترقة.",
        "الامتثال: نقود تطبيقات SOC 2 و ISO 27001 و GDPR و PCI DSS و HIPAA و NIS2. لا شرائح استشارية — كود وأنابيب وضوابط مُدقَّقة.",
      ],
    },
    features: {
      fr: [
        "Tests d'intrusion (pentest) externes, internes et applicatifs",
        "Audits de code source avec identification des vulnérabilités OWASP Top 10",
        'Modélisation de menaces (STRIDE) et threat hunting',
        "Durcissement d'infrastructure cloud (AWS, Azure, GCP)",
        'Implémentation SOC 2, ISO 27001, RGPD, PCI DSS, HIPAA, NIS2',
        'Réponse à incident et investigation forensique',
        "Architecture zero-trust et gestion d'identités (IAM)",
        'Tests de phishing et formation de sensibilisation',
      ],
      en: [
        'External, internal and application penetration testing',
        'Source code audits identifying OWASP Top 10 vulnerabilities',
        'Threat modeling (STRIDE) and threat hunting',
        'Cloud infrastructure hardening (AWS, Azure, GCP)',
        'SOC 2, ISO 27001, GDPR, PCI DSS, HIPAA, NIS2 implementation',
        'Incident response and forensic investigation',
        'Zero-trust architecture and identity management (IAM)',
        'Phishing tests and security awareness training',
      ],
      ar: [
        'اختبارات الاختراق الخارجية والداخلية والتطبيقية',
        'تدقيقات الشيفرة المصدرية مع تحديد ثغرات OWASP Top 10',
        'نمذجة التهديدات (STRIDE) وصيد التهديدات',
        'تقوية البنية التحتية السحابية (AWS, Azure, GCP)',
        'تطبيق SOC 2 و ISO 27001 و GDPR و PCI DSS و HIPAA',
        'الاستجابة للحوادث والتحقيق الجنائي',
        'هندسة Zero-Trust وإدارة الهويات (IAM)',
        'اختبارات التصيد والتدريب على الوعي الأمني',
      ],
    },
    techStack: ['Burp Suite', 'OWASP ZAP', 'Metasploit', 'Nmap', 'Wireshark', 'Snyk', 'SonarQube', 'HashiCorp Vault', 'CrowdStrike', 'Wazuh', 'Falco', 'Trivy'],
    faqs: {
      fr: [
        { q: "Combien coûte un test d'intrusion ?", a: "Un pentest standard (web ou API) commence à 250 000 DA. Les engagements plus larges (infrastructure, mobile, API + cloud) vont de 800 000 DA à 4 000 000 DA selon le périmètre et la complexité." },
        { q: "Faites-vous de la conformité SOC 2 ou ISO 27001 ?", a: "Oui. Nous accompagnons l'implémentation complète : gap analysis, conception des contrôles, documentation, automatisation et préparation à l'audit. Comptez 6 à 12 mois selon la maturité initiale." },
        { q: "Que se passe-t-il si vous trouvez une faille critique ?", a: "Notification immédiate, plan de remédiation détaillé, et accompagnement à la correction. Nous ne livrons jamais un rapport sans aussi proposer le chemin pour fermer chaque trouvaille." },
      ],
      en: [
        { q: 'How much does a pentest cost?', a: 'A standard pentest (web or API) starts at 250,000 DZD. Larger engagements (infrastructure, mobile, API + cloud) range from 800,000 DZD to 4,000,000 DZD depending on scope and complexity.' },
        { q: 'Do you handle SOC 2 or ISO 27001 compliance?', a: 'Yes. We lead full implementation: gap analysis, control design, documentation, automation, and audit preparation. Plan 6 to 12 months depending on initial maturity.' },
        { q: 'What happens if you find a critical vulnerability?', a: 'Immediate notification, detailed remediation plan, and hands-on fix support. We never deliver a report without also proposing the path to close each finding.' },
      ],
      ar: [
        { q: 'كم يكلف اختبار الاختراق؟', a: 'يبدأ اختبار الاختراق القياسي (ويب أو API) من 250,000 دج. المهام الأكبر تتراوح من 800,000 إلى 4,000,000 دج حسب النطاق.' },
        { q: 'هل تتعاملون مع امتثال SOC 2 أو ISO 27001؟', a: 'نعم. نقود التطبيق الكامل: تحليل الفجوة، تصميم الضوابط، التوثيق، الأتمتة، والتحضير للتدقيق. خطط لـ 6 إلى 12 شهراً حسب النضج الأولي.' },
        { q: 'ماذا يحدث إذا وجدتم ثغرة حرجة؟', a: 'إشعار فوري، خطة معالجة مفصلة، ودعم عملي للإصلاح. لا نسلم تقريراً أبداً دون اقتراح طريق لإغلاق كل اكتشاف.' },
      ],
    },
    relatedServices: ['devops-cloud', 'software-engineering', 'consulting'],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 08 — TECHNOLOGY CONSULTING (new)
  // Routes to editorial page /services/consulting/
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'consulting',
    number: '08',
    icon: 'Brain',
    accent: '#a78bfa',
    category: { fr: 'Conseil Technologique', en: 'Technology Consulting', ar: 'الاستشارات التقنية' },
    priceMin: 150000,
    priceMax: 800000,
    deliveryTime: { fr: '2 à 4 semaines', en: '2 to 4 weeks', ar: 'أسبوعان إلى 4 أسابيع' },
    slugs: {
      fr: 'conseil-architecture-strategie-tech-algerie',
      en: 'technology-architecture-consulting-algeria',
      ar: 'استشارات-هندسة-التقنية-الجزائر',
    },
    title: {
      fr: 'Conseil technologique',
      en: 'Technology Consulting',
      ar: 'الاستشارات التقنية',
    },
    metaTitle: {
      fr: "Conseil Technologique — Revue d'Architecture, Stratégie IA, Build-vs-Buy en Algérie",
      en: 'Technology Consulting — Architecture Review, AI Strategy, Build-vs-Buy in Algeria',
      ar: 'الاستشارات التقنية — مراجعة الهندسة، استراتيجية الذكاء الاصطناعي في الجزائر',
    },
    metaDescription: {
      fr: "Revue d'architecture, stratégie IA, analyse build-vs-buy, feuille de route de modernisation. Ingénieurs seniors basés à Alger, conseillant des clients en Algérie, MENA et Europe — pas des consultants à PowerPoint.",
      en: 'Architecture review, AI strategy, build-vs-buy analysis, modernization roadmap. Senior engineers headquartered in Algiers, advising clients across Algeria, MENA and Europe — not PowerPoint consultants.',
      ar: 'مراجعة الهندسة، استراتيجية الذكاء الاصطناعي، تحليل البناء-أم-الشراء، خارطة طريق التحديث. مهندسون كبار مقرهم الجزائر العاصمة يقدمون الاستشارات لعملاء في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا وأوروبا.',
    },
    tagline: {
      fr: 'Nous vous disons ce que nous pensons. Que vous nous ayez engagés pour ça ou non.',
      en: 'We tell you what we think. Whether you hired us for it or not.',
      ar: 'نخبرك بما نعتقد. سواء استأجرتنا لذلك أم لا.',
    },
    intro: {
      fr: "Revue d'architecture, stratégie IA, analyse build-vs-buy, feuille de route de modernisation. Équipe d'ingénieurs seniors basée à Alger, conseillant des entreprises en Algérie, MENA et Europe. Nous livrons en production — pas en PowerPoint. Le conseil que vous recevez est celui que nous prendrions nous-mêmes.",
      en: 'Architecture review, AI strategy, build-vs-buy analysis, modernization roadmap. Senior engineering team headquartered in Algiers, advising companies across Algeria, MENA and Europe. We ship into production — not PowerPoint. The advice you get is the advice we would take ourselves.',
      ar: 'مراجعة الهندسة، استراتيجية الذكاء الاصطناعي، تحليل البناء-أم-الشراء، خارطة طريق التحديث. فريق هندسة كبار مقره الجزائر العاصمة، يقدم الاستشارات لشركات في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا وأوروبا. نسلّم في الإنتاج — لا في PowerPoint.',
    },
    longDescription: {
      fr: [
        "Le conseil technologique chez Symloop n'est pas un slide deck. C'est une mission d'ingénierie courte avec un livrable écrit. Nous lisons votre code, parlons à votre équipe, et écrivons un rapport spécifique à votre situation — généralement 30 à 50 pages.",
        "Nous conseillons sur cinq domaines : revue d'architecture indépendante, analyse build-vs-buy, stratégie et feuille de route IA, modernisation de systèmes legacy, et topologie d'équipe d'ingénierie. Toutes des décisions difficiles à inverser où le mauvais choix vous coûte des années.",
        "Trois étapes : une semaine de lecture du code et d'instrumentation des flux de données, une semaine d'interviews structurés avec votre équipe, puis une semaine d'écriture du rapport. Aucun framework générique. Du jugement spécifique à votre contexte.",
      ],
      en: [
        "Technology consulting at Symloop is not a slide deck. It is a short engineering engagement with a written deliverable. We read your code, talk to your team, and write a report specific to your situation — usually 30 to 50 pages.",
        'We advise across five areas: independent architecture review, build-vs-buy analysis, AI strategy and roadmap, legacy system modernization, and engineering team topology. All hard-to-reverse decisions where the wrong choice costs you years.',
        'Three steps: one week reading code and instrumenting data flows, one week of structured interviews with your team, then one week writing the report. No generic frameworks. Judgment specific to your context.',
      ],
      ar: [
        'الاستشارات التقنية في سيملوب ليست عرض شرائح. إنها مهمة هندسية قصيرة مع تسليم مكتوب. نقرأ شيفرتك، ونتحدث إلى فريقك، ونكتب تقريراً خاصاً بحالتك — عادة 30 إلى 50 صفحة.',
        'نقدم النصائح عبر خمسة مجالات: مراجعة هندسية مستقلة، وتحليل البناء-أم-الشراء، واستراتيجية وخارطة طريق الذكاء الاصطناعي، وتحديث الأنظمة القديمة، وطوبولوجيا فريق الهندسة.',
        'ثلاث خطوات: أسبوع لقراءة الشيفرة، أسبوع من المقابلات المنظمة، ثم أسبوع لكتابة التقرير. لا أطر عامة. حكم خاص بسياقك.',
      ],
    },
    features: {
      fr: [
        "Revue d'architecture indépendante (rapport 30-50 pages)",
        'Analyse build vs buy avec calculs spécifiques à votre contexte',
        "Stratégie et feuille de route IA avec cas d'usage priorisés",
        'Plan de modernisation de système legacy (strangler-fig)',
        "Topologie d'équipe d'ingénierie et priorités d'embauche",
        'Diagrammes d\'architecture canoniques (état actuel + cible)',
        "Walkthrough en direct du rapport (90 minutes, enregistré)",
        'Rapport écrit en PDF + source Markdown éditable',
      ],
      en: [
        'Independent architecture review (30-50 page report)',
        'Build vs buy analysis with calculations specific to your context',
        'AI strategy and roadmap with prioritized use cases',
        'Legacy system modernization plan (strangler-fig)',
        'Engineering team topology and hiring priorities',
        'Canonical architecture diagrams (current and target state)',
        'Live walkthrough of the report (90 minutes, recorded)',
        'Written report in PDF + editable Markdown source',
      ],
      ar: [
        'مراجعة هندسية مستقلة (تقرير 30-50 صفحة)',
        'تحليل البناء-أم-الشراء مع حسابات خاصة بسياقك',
        'استراتيجية وخارطة طريق الذكاء الاصطناعي مع حالات استخدام ذات أولوية',
        'خطة تحديث النظام القديم (strangler-fig)',
        'طوبولوجيا فريق الهندسة وأولويات التوظيف',
        'مخططات هندسية قانونية (الحالة الحالية والمستهدفة)',
        'جولة مباشرة في التقرير (90 دقيقة، مسجلة)',
        'تقرير مكتوب بصيغة PDF + مصدر Markdown قابل للتحرير',
      ],
    },
    techStack: ['Architecture', 'System Design', 'AI Strategy', 'Build vs Buy', 'Modernization', 'Team Topology', 'Code Review', 'Threat Modeling'],
    faqs: {
      fr: [
        { q: 'Combien coûte un engagement de conseil ?', a: "Un engagement standard (revue d'architecture, build-vs-buy, stratégie IA) est à prix fixe entre 150 000 DA et 400 000 DA selon le périmètre. Les feuilles de route de modernisation pour systèmes complexes vont de 400 000 DA à 800 000 DA. Nous ne facturons jamais à l'heure." },
        { q: 'Combien de temps prend un engagement ?', a: 'Engagements standards : 2 semaines du kickoff au rapport écrit. Feuilles de route plus larges : 3 à 4 semaines. Nous ne traînons pas les engagements — la valeur est dans le jugement rapide.' },
        { q: "Implémentez-vous ce que vous recommandez ?", a: "Parfois. Nous sommes une équipe d'ingénierie complète, donc si vous voulez que nous implémentions après le conseil nous le pouvons. Mais aucune obligation — beaucoup de clients prennent notre rapport et l'exécutent en interne." },
      ],
      en: [
        { q: 'How much does a consulting engagement cost?', a: 'A standard engagement (architecture review, build-vs-buy, AI strategy) is fixed-priced between 150,000 DZD and 400,000 DZD depending on scope. Modernization roadmaps for complex systems range from 400,000 DZD to 800,000 DZD. We never bill hourly.' },
        { q: 'How long does an engagement take?', a: 'Standard engagements: 2 weeks from kickoff to written report. Larger roadmaps: 3 to 4 weeks. We do not drag engagements — the value is in fast judgment.' },
        { q: 'Do you implement what you recommend?', a: 'Sometimes. We are a full engineering team, so if you want us to implement after the consulting we can. But no obligation — many clients take our report and execute it internally.' },
      ],
      ar: [
        { q: 'كم تكلف مهمة استشارية؟', a: 'مهمة قياسية (مراجعة هندسية، البناء-أم-الشراء، استراتيجية الذكاء الاصطناعي) بسعر ثابت بين 150,000 و 400,000 دج حسب النطاق. خرائط طريق التحديث للأنظمة المعقدة من 400,000 إلى 800,000 دج.' },
        { q: 'كم يستغرق الانخراط؟', a: 'المهام القياسية: أسبوعان من بدء العمل إلى التقرير المكتوب. الخرائط الأكبر: 3 إلى 4 أسابيع.' },
        { q: 'هل تطبقون ما توصون به؟', a: 'أحياناً. نحن فريق هندسي كامل، لذا إذا أردتنا التطبيق بعد الاستشارة يمكننا ذلك. لكن دون التزام — كثير من العملاء يأخذون تقريرنا ويُنفذونه داخلياً.' },
      ],
    },
    relatedServices: ['software-engineering', 'ai-ml', 'cybersecurity'],
  },

  // ════════════════════════════════════════════════════════════════════════
  // 09 — PRODUCT ENGINEERING (new)
  // Routes to editorial page /services/product/
  // ════════════════════════════════════════════════════════════════════════
  {
    id: 'product-engineering',
    number: '09',
    icon: 'Brain',
    accent: '#22d3ee',
    category: { fr: 'Ingénierie Produit', en: 'Product Engineering', ar: 'هندسة المنتج' },
    priceMin: 600000,
    priceMax: 25000000,
    deliveryTime: { fr: '8 à 16 semaines', en: '8 to 16 weeks', ar: '8 إلى 16 أسبوعاً' },
    slugs: {
      fr: 'ingenierie-produit-mvp-saas-algerie',
      en: 'product-engineering-mvp-saas-algeria',
      ar: 'هندسة-المنتج-mvp-saas-الجزائر',
    },
    title: {
      fr: 'Ingénierie produit',
      en: 'Product Engineering',
      ar: 'هندسة المنتج',
    },
    metaTitle: {
      fr: 'Ingénierie Produit — MVP, SaaS, Mobile et Marketplace en Algérie — Symloop',
      en: 'Product Engineering — MVP, SaaS, Mobile and Marketplace in Algeria — Symloop',
      ar: 'هندسة المنتج — MVP و SaaS والجوال والسوق في الجزائر — سيملوب',
    },
    metaDescription: {
      fr: 'Ingénierie produit complète : Discover → Design → Build → Ship. SaaS, mobile, marketplace, outils internes. Atelier d\'ingénierie algérien livrant des produits pour des clients en Algérie, MENA, Europe et Golfe — équipe pluridisciplinaire (PM, designer, ingénieur, DevOps, QA).',
      en: 'Full product engineering: Discover → Design → Build → Ship. SaaS, mobile, marketplace, internal tools. Algerian engineering workshop delivering products for clients across Algeria, MENA, Europe and the Gulf — multidisciplinary team (PM, designer, engineer, DevOps, QA).',
      ar: 'هندسة منتج كاملة: استكشف ← صمم ← ابنِ ← أطلق. SaaS، الجوال، السوق، الأدوات الداخلية. ورشة هندسية جزائرية تسلّم منتجات لعملاء في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا وأوروبا والخليج — فريق متعدد التخصصات.',
    },
    tagline: {
      fr: 'De la première interview utilisateur au premier client payant — un seul atelier.',
      en: 'From the first user interview to the first paying customer — one workshop.',
      ar: 'من أول مقابلة مستخدم إلى أول عميل يدفع — ورشة عمل واحدة.',
    },
    intro: {
      fr: "Ingénierie produit pour la production. Atelier algérien basé à Alger, livrant pour des clients en Algérie, MENA, Europe et Golfe. Nous prenons en charge le cycle complet : découverte, design, build, lancement. Une équipe pluridisciplinaire — product manager, designer, ingénieurs, DevOps, QA — qui livre comme un seul atelier au lieu de cinq prestataires différents.",
      en: 'Product engineering for production. Algerian workshop headquartered in Algiers, delivering for clients across Algeria, MENA, Europe and the Gulf. We own the full cycle: discover, design, build, ship. A multidisciplinary team — product manager, designer, engineers, DevOps, QA — that delivers as one workshop instead of five different vendors.',
      ar: 'هندسة المنتج للإنتاج. ورشة جزائرية مقرها الجزائر العاصمة، تسلّم لعملاء في الجزائر ومنطقة الشرق الأوسط وشمال أفريقيا وأوروبا والخليج. نحن نتولى الدورة الكاملة: استكشاف، تصميم، بناء، إطلاق. فريق متعدد التخصصات يسلّم كورشة واحدة.',
    },
    longDescription: {
      fr: [
        "L'ingénierie produit chez Symloop est un atelier complet, pas une équipe d'externalisation. Nous avons des product managers qui interviewent les utilisateurs, des designers qui dessinent les flux, des ingénieurs qui écrivent le code, des DevOps qui le déploient, et des QA qui le testent. Tous dans la même équipe, sur la même mission, avec la même responsabilité de livraison.",
        "Nous livrons cinq types de produits : SaaS multi-tenant, applications mobiles natives ou cross-platform, marketplaces multi-faces, outils internes pour grandes organisations, et plateformes web grand public. Chaque type a son propre profil de risque et nous adaptons la composition d'équipe en conséquence.",
        "Cinq phases : discovery (semaines 1-2), design (semaines 3-4), build initial (semaines 5-10), beta privée (semaines 11-13), lancement public (semaines 14-16). Chaque phase a un livrable concret. Pas de phase de discovery qui dure six mois — vous voyez du code en production avant la fin du premier mois.",
      ],
      en: [
        'Product engineering at Symloop is a full workshop, not an outsourcing team. We have product managers who interview users, designers who draw the flows, engineers who write the code, DevOps who deploy it, and QA who test it. All in the same team, on the same engagement, with the same delivery accountability.',
        'We ship five product types: multi-tenant SaaS, native or cross-platform mobile apps, multi-sided marketplaces, internal tools for large organizations, and consumer web platforms. Each type has its own risk profile and we adapt the team composition accordingly.',
        'Five phases: discovery (weeks 1-2), design (weeks 3-4), initial build (weeks 5-10), private beta (weeks 11-13), public launch (weeks 14-16). Every phase has a concrete deliverable. No six-month discovery phase — you see code in production before the end of month one.',
      ],
      ar: [
        'هندسة المنتج في سيملوب هي ورشة كاملة، لا فريق إسناد. لدينا مديرو منتج يقابلون المستخدمين، ومصممون يرسمون التدفقات، ومهندسون يكتبون الشيفرة، و DevOps ينشرونها، و QA يختبرونها. كلهم في نفس الفريق، على نفس المهمة.',
        'نسلّم خمسة أنواع من المنتجات: SaaS متعدد المستأجرين، تطبيقات الجوال الأصلية أو متعددة المنصات، الأسواق متعددة الأوجه، الأدوات الداخلية للمؤسسات الكبيرة، والمنصات الويب للمستهلكين.',
        'خمس مراحل: استكشاف (الأسبوعان 1-2)، تصميم (الأسبوعان 3-4)، بناء أولي (الأسابيع 5-10)، بيتا خاصة (الأسابيع 11-13)، إطلاق عام (الأسابيع 14-16). كل مرحلة لها تسليم ملموس.',
      ],
    },
    features: {
      fr: [
        "Discovery utilisateur : interviews, cartographie de parcours, validation d'hypothèses",
        'Design produit complet : wireframes, prototypes interactifs, design system',
        'Architecture technique : choix de stack, schéma de données, API design',
        'Développement multi-plateforme (web, iOS, Android, backend)',
        "DevOps et infrastructure : CI/CD, observabilité, scalabilité",
        'QA : tests automatisés, tests utilisateurs, monitoring de production',
        "Lancement : beta privée, soft launch, lancement public",
        'Itération post-lancement : analytics produit, A/B testing, roadmap',
      ],
      en: [
        'User discovery: interviews, journey mapping, hypothesis validation',
        'Full product design: wireframes, interactive prototypes, design system',
        'Technical architecture: stack selection, data schema, API design',
        'Multi-platform development (web, iOS, Android, backend)',
        'DevOps and infrastructure: CI/CD, observability, scalability',
        'QA: automated testing, user testing, production monitoring',
        'Launch: private beta, soft launch, public launch',
        'Post-launch iteration: product analytics, A/B testing, roadmap',
      ],
      ar: [
        'اكتشاف المستخدم: مقابلات، رسم خرائط الرحلة، التحقق من الفرضيات',
        'تصميم منتج كامل: نماذج هيكلية، نماذج أولية تفاعلية، نظام تصميم',
        'الهندسة التقنية: اختيار المكدس، مخطط البيانات، تصميم API',
        'التطوير متعدد المنصات (ويب، iOS، Android، خلفية)',
        'DevOps والبنية التحتية: CI/CD، المراقبة، قابلية التوسع',
        'QA: اختبارات آلية، اختبارات المستخدم، مراقبة الإنتاج',
        'الإطلاق: بيتا خاصة، إطلاق ناعم، إطلاق عام',
        'التكرار بعد الإطلاق: تحليلات المنتج، اختبار A/B، خارطة طريق',
      ],
    },
    techStack: ['Next.js', 'React Native', 'Node.js', 'TypeScript', 'Postgres', 'Redis', 'Tailwind', 'Framer', 'Vercel', 'Supabase', 'Stripe', 'PostHog'],
    faqs: {
      fr: [
        { q: 'Combien coûte un engagement produit ?', a: "Les engagements produit sont structurés en discovery à prix fixe (1-2 semaines) puis builds phasés à prix fixe. Le coût total varie selon le périmètre : MVP entre 600 000 DA et 3 000 000 DA, produits de taille moyenne entre 3 et 15 000 000 DA, plateformes entreprise jusqu'à 25 000 000 DA." },
        { q: 'Combien de temps avant le lancement ?', a: "La plupart des produits atteignent un v1 livrable en 12 à 16 semaines. Les MVPs plus petits peuvent se lancer en 8 à 10 semaines. Les produits enterprise avec intégrations complexes peuvent prendre 6 mois." },
        { q: 'Qui possède le code après le lancement ?', a: "Vous. Code source, fichiers de design, infrastructure-as-code, documentation, suites de tests — tout transféré sous votre PI. Pas de verrouillage éditeur." },
      ],
      en: [
        { q: 'How much does a product engagement cost?', a: 'Product engagements are structured as fixed-price discovery (1-2 weeks) then fixed-price phased builds. Total cost varies by scope: MVPs between 600,000 DZD and 3,000,000 DZD, mid-size products between 3M and 15M DZD, enterprise platforms up to 25M DZD.' },
        { q: 'How long until launch?', a: 'Most products hit a deliverable v1 in 12 to 16 weeks. Smaller MVPs can ship in 8 to 10. Enterprise products with complex integrations can take 6 months.' },
        { q: 'Who owns the code after launch?', a: 'You. Source code, design files, infrastructure-as-code, documentation, test suites — all transferred under your IP. No vendor lock-in.' },
      ],
      ar: [
        { q: 'كم تكلف مهمة منتج؟', a: 'مهام المنتج مُهيكَلة كاستكشاف بسعر ثابت (1-2 أسبوع) ثم بناء مُمرحَل بسعر ثابت. التكلفة الإجمالية تختلف حسب النطاق: MVP بين 600,000 و 3,000,000 دج، منتجات متوسطة بين 3 و 15 مليون دج.' },
        { q: 'كم من الوقت حتى الإطلاق؟', a: 'معظم المنتجات تحقق v1 قابلاً للتسليم في 12 إلى 16 أسبوعاً. MVPs الأصغر يمكن إطلاقها في 8 إلى 10. المنتجات للمؤسسات يمكن أن تستغرق 6 أشهر.' },
        { q: 'من يملك الشيفرة بعد الإطلاق؟', a: 'أنت. شيفرة المصدر، ملفات التصميم، البنية التحتية كشيفرة، التوثيق، مجموعات الاختبارات — كل شيء يُنقل تحت ملكيتك الفكرية. لا قفل من البائع.' },
      ],
    },
    relatedServices: ['software-engineering', 'mobile-engineering', 'consulting'],
  },
];

// ---------------------------------------------------------------------------
// EDITORIAL ROUTE MAP
//
// Each service id is mapped to its editorial /services/{name}/ route, OR to
// `null` to keep the entry alive in data (still crawlable via [slug].jsx) but
// hidden from the /services/ index grid. This is how we preserve old crawled
// URLs while showing only the 8 redesigned editorial pages on the index.
// ---------------------------------------------------------------------------
const EDITORIAL_ROUTES = {
  'software-engineering': 'software-engineering',
  'mobile-engineering':   'mobile',
  'web-engineering':      null,           // legacy data only — no editorial page
  'ai-ml':                'ai',
  'iot-hardware':         'iot',
  'devops-cloud':         'cloud',
  'cybersecurity':        'cybersecurity',
  'consulting':           'consulting',
  'product-engineering':  'product',
};

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

export function getAllServicesForLocale(locale) {
  return SERVICES
    // Hide entries flagged null in EDITORIAL_ROUTES from the /services/ index.
    // They remain alive in the data file so [slug].jsx can still serve their
    // legacy localized URLs (and Google still indexes them).
    .filter((s) => EDITORIAL_ROUTES[s.id] !== null)
    .map((s) => {
      const editorialRoute = EDITORIAL_ROUTES[s.id];
      const localizedSlug  = s.slugs[locale] || s.slugs.fr;
      return {
        id: s.id,
        number: s.number,
        icon: s.icon,
        accent: s.accent,
        slug: localizedSlug,
        // routePath is what the /services/ index uses for `<Link href>`. When
        // an editorial /services/{name}/ page exists, that wins; otherwise we
        // fall back to the legacy localized slug routed via [slug].jsx.
        routePath: editorialRoute || localizedSlug,
        editorialRoute: editorialRoute || null,
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
      };
    });
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
  // Editorial-routed services (cybersecurity, consulting, product) are served
  // by their static /services/{name}.jsx files. We do NOT generate dynamic
  // [slug].jsx paths for them — that would conflict at build time and
  // duplicate content. Only the original 6 services keep their dynamic
  // localized slugs alive for legacy SEO.
  const editorialOnlyIds = new Set(['cybersecurity', 'consulting', 'product-engineering']);
  const paths = [];
  for (const s of SERVICES) {
    if (editorialOnlyIds.has(s.id)) continue;
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
