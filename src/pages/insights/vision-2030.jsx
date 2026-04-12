// ============================================================================
// SYMLOOP — Insight: The 2030 company — why AI is not optional for Vision economies
// Veo 3 hero video + Nano Banana body images. Targets Saudi Vision 2030 +
// Algeria digitalization push. SEO keywords woven naturally into body text.
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  en: {
    kind:        'Strategic brief',
    title:       'The 2030 company — why AI is not optional for Vision economies.',
    dek:         'Saudi Vision 2030, Algeria\'s national digitalization strategy, UAE Smart Government, Egypt\'s digital transformation — every MENA economy is betting on 2030. The companies that survive are the ones that build AI into operations now, not in 2029.',
    publishedAt: 'April 2026',
    readTime:    '16 min read',
    pages:       '28 pages',
    author:      'Symloop research',

    intro: [
      "Every government in the MENA region has a 2030 plan. **Saudi Arabia\'s Vision 2030** is the most visible — a trillion-dollar bet on economic diversification, digital infrastructure, and non-oil GDP. **Algeria\'s national digitalization strategy** is quieter but accelerating — e-government, digital payments, smart cities, industrial modernization across all 58 wilayas. The UAE, Egypt, Morocco, Kuwait — every one of them has published a 2030 document with the word \"digital\" on every page.",
      "But governments do not digitize economies. **Companies do.** And most companies in the MENA region — from Riyadh to Algiers to Cairo — are not ready. They are running 2015 operations in a 2030 economy. The gap between what their government expects them to become and what they actually are grows every quarter.",
      "This brief is about that gap. What a **2030-ready company** actually looks like, why **artificial intelligence and automation** are not optional features but structural requirements, and what companies in **Saudi Arabia, Algeria, and the broader MENA region** should build first.",
    ],

    sections: [
      {
        heading: 'What a 2030 economy actually demands from companies',
        body: [
          "**Vision 2030 economies** are not asking companies to adopt technology for its own sake. They are restructuring **entire regulatory frameworks** around the assumption that companies will be digital-native. Saudi Arabia\'s **ZATCA e-invoicing mandate**, Algeria\'s **CNRC digital registration**, the UAE\'s **smart government services** — all of these create operational requirements that **cannot be met by companies still running on Excel and WhatsApp groups**.",
          "The shift is structural, not cosmetic. By 2030, a company that cannot produce **real-time financial data** for the tax authority, **digital compliance documents** for the regulator, **automated reporting** for the ministry, and **API-integrated systems** for the banking sector will simply not be able to operate legally in most MENA markets. **AI and automation are not competitive advantages in 2030. They are compliance requirements.**",
          "This is the part that most companies miss. They think of **digital transformation** as a project — something to do once, with a start and an end. In reality, it is **an operational layer** that must be built, maintained, and evolved continuously. The companies that will thrive in **Saudi Arabia, Algeria, UAE, Egypt, and Morocco** by 2030 are the ones building that layer now.",
        ],
      },
      {
        heading: 'Why AI is the only way to close the gap in time',
        body: [
          "The gap between where most MENA companies are today and where they need to be by 2030 is too large to close with **traditional software development** alone. Building a custom ERP takes 12 to 18 months. Training a team on new processes takes another 6. Integrating with government digital platforms takes another 6. That is three years — and most companies have not started.",
          "**Artificial intelligence compresses this timeline** because it automates the parts that normally require the most human time: **document processing**, **data extraction from legacy systems**, **compliance checking**, **vendor evaluation**, **financial reporting**, and **customer service**. These are the six pillars of **enterprise AI adoption** in MENA — not chatbots, not generative art, not the things that make headlines.",
          "A company in **Algiers or Riyadh** that deploys an **AI document processing system** today saves 40 to 60 percent of its back-office time within six months. That time is what allows it to work on the harder problems — **digital compliance**, **API integrations**, **automated reporting** — before the 2030 deadlines hit.",
        ],
        image: {
          src: '/insights/2030-transformation-timeline.jpg',
          alt: 'Editorial timeline showing transformation from traditional factory to AI-powered enterprise with milestone markers.',
          caption: 'The transformation timeline from traditional company to 2030-ready enterprise. Companies that start in 2026 have 4 years of runway. Companies that start in 2029 have 12 months.',
        },
      },
      {
        heading: 'The five things every MENA company must build before 2030',
        body: [
          "**1. AI-powered document intelligence.** Every company in **Saudi Arabia, Algeria, and the UAE** deals with a flood of documents — invoices, contracts, customs declarations, compliance forms, government correspondence. Building an **automated document processing pipeline** using **Arabic and French NLP** is the single highest-ROI AI investment any MENA company can make today.",
          "**2. Digital compliance and e-invoicing.** Saudi **ZATCA**, Algeria\'s **loi de finances digitale**, UAE **VAT reporting** — every country is moving to **real-time digital tax reporting**. Companies need systems that generate, transmit, and archive **compliant electronic invoices** automatically. Manual compliance will be illegal by 2030 in most MENA markets.",
          "**3. Integrated ERP with government API connections.** The days of standalone accounting software are over. A 2030-ready company needs a **custom ERP** that connects to **banking APIs**, **customs systems**, **social security platforms**, and **tax authorities** in real time. In Algeria, that means **CNRC, CNAS, CIB, Edahabia** integrations.",
          "**4. Automated reporting and business intelligence.** Governments and banks will increasingly require **real-time dashboards** and **automated quarterly reports**. A company that cannot produce these on demand will lose banking relationships and government contracts.",
          "**5. Cybersecurity and data sovereignty.** **Saudi NCA regulations**, Algeria\'s **loi 18-07**, the UAE\'s **data localization requirements** — every Vision economy is tightening **data protection rules**. Companies need **security posture management**, **encryption**, and **compliance frameworks** (ISO 27001, SOC 2) to operate across borders.",
        ],
        image: {
          src: '/insights/2030-mena-ai-convergence.jpg',
          alt: 'Venn diagram showing the convergence of MENA Vision economies and AI technology.',
          caption: 'The convergence of MENA Vision economies and AI technology is not theoretical. It is regulatory. Companies that do not converge will not comply.',
        },
      },
      {
        heading: 'Why Algeria and Saudi Arabia are the two most important markets right now',
        body: [
          "**Saudi Arabia** has the budget, the regulation, and the timeline. Vision 2030 is backed by the PIF, enforced by ZATCA, and tracked by every ministry. Saudi companies that do not digitize will lose government contracts — and government contracts are the majority of the Saudi enterprise economy. The opportunity for **AI and software engineering firms** serving Saudi clients is measured in billions of riyals.",
          "**Algeria** has the urgency and the gap. The national digitalization strategy is accelerating — **e-government portals**, **digital payment mandates** (CIB, Edahabia), **smart city projects** in Algiers and Oran, **industrial modernization** across the hauts plateaux. But the supply of **engineering firms capable of delivering production AI systems** in Algeria is almost zero. Symloop is one of the few — and we deliver from **Algiers with local presence, French and Arabic, Algerian fiscal compliance, and international engineering standards**.",
          "The companies that build the AI operations layer now — in both markets — will be the ones that own the 2030 economy. The ones that wait will spend 2029 in emergency mode, paying three times as much for half the quality.",
        ],
      },
      {
        heading: 'What to build first — the 90-day plan',
        body: [
          "If you run a company in **Algeria, Saudi Arabia, or any MENA Vision economy** and you have not started your AI and digitalization journey, here is the honest 90-day plan.",
          "**Days 1–30: Document intelligence.** Deploy an **AI document processing system** for your highest-volume paperwork — invoices, contracts, or compliance forms. Arabic and French OCR with structured extraction. ROI visible in the first month because the alternative is humans doing it manually.",
          "**Days 31–60: E-invoicing compliance.** Connect your accounting system to the relevant **government e-invoicing platform** (ZATCA in Saudi, digital tax reporting in Algeria). This is not optional — it is becoming mandatory. Do it now while you have time to test, not in December 2029 under regulatory pressure.",
          "**Days 61–90: Security baseline.** Run a **penetration test** and a **security posture assessment** on your current systems. Fix the critical findings. Start the **ISO 27001 or SOC 2 preparation** if you plan to serve government clients or expand across borders. Companies without security certifications will be excluded from government procurement in most MENA markets by 2028.",
          "After 90 days, you have the three foundations: **AI document automation** running, **digital compliance** connected, **security baseline** established. Everything else — **custom ERP**, **business intelligence**, **IoT**, **mobile apps** — builds on top of these three.",
        ],
      },
    ],

    takeaways: {
      title: 'Five things to take from this brief',
      items: [
        'Vision 2030 economies are restructuring regulations around digital-native companies. AI and automation are compliance requirements, not competitive advantages.',
        'The gap between current operations and 2030 requirements is too large for traditional software development alone. AI compresses the timeline.',
        'The five pillars: document intelligence, e-invoicing compliance, integrated ERP, automated reporting, and cybersecurity with data sovereignty.',
        'Saudi Arabia has budget and enforcement. Algeria has urgency and a near-zero supply of capable engineering firms. Both markets are wide open.',
        'Start with document intelligence (days 1–30), e-invoicing (days 31–60), and security baseline (days 61–90). Everything else builds on top.',
      ],
    },

    cta: {
      eyebrow: 'Talk to the team that builds for 2030',
      title:   'Operating in a Vision 2030 economy and need to start now? We will tell you what to build first.',
      button:  'Book a 30-minute call',
    },
    backToHub: 'Back to all insights',
  },

  fr: {
    kind:        'Brief stratégique',
    title:       "L'entreprise 2030 — pourquoi l'IA n'est pas optionnelle pour les économies Vision.",
    dek:         "Vision 2030 saoudienne, stratégie nationale de digitalisation algérienne, Smart Government UAE, transformation numérique égyptienne — chaque économie MENA parie sur 2030. Les entreprises qui survivent sont celles qui intègrent l'IA dans leurs opérations maintenant, pas en 2029.",
    publishedAt: 'Avril 2026',
    readTime:    '16 min de lecture',
    pages:       '28 pages',
    author:      'Recherche Symloop',

    intro: [
      "Chaque gouvernement de la région MENA a un plan 2030. **La Vision 2030 saoudienne** est la plus visible — un pari de mille milliards de dollars sur la diversification économique, l'infrastructure numérique et le PIB hors pétrole. **La stratégie nationale de digitalisation algérienne** est plus discrète mais accélère — e-gouvernement, paiements numériques, smart cities, modernisation industrielle à travers les 58 wilayas. Les Émirats, l'Égypte, le Maroc, le Koweït — chacun a publié un document 2030 avec le mot « digital » à chaque page.",
      "Mais les gouvernements ne digitalisent pas les économies. **Les entreprises le font.** Et la plupart des entreprises dans la région MENA — de Riyad à Alger en passant par Le Caire — ne sont pas prêtes. Elles font tourner des opérations de 2015 dans une économie de 2030.",
      "Cette étude traite de cet écart. Ce à quoi ressemble réellement une **entreprise prête pour 2030**, pourquoi **l'intelligence artificielle et l'automatisation** ne sont pas des fonctionnalités optionnelles mais des exigences structurelles, et ce que les entreprises en **Arabie saoudite, en Algérie et dans la région MENA** devraient construire en premier.",
    ],

    sections: [
      {
        heading: "Ce qu'une économie 2030 exige réellement des entreprises",
        body: [
          "Les **économies Vision 2030** ne demandent pas aux entreprises d'adopter la technologie pour elle-même. Elles restructurent **des cadres réglementaires entiers** autour de l'hypothèse que les entreprises seront digital-native. La **facturation électronique ZATCA** en Arabie saoudite, **l'enregistrement numérique CNRC** en Algérie, les **services gouvernementaux intelligents** aux EAU — tout cela crée des exigences opérationnelles qu'**aucune entreprise fonctionnant encore sur Excel et des groupes WhatsApp ne peut remplir**.",
          "Le changement est structurel, pas cosmétique. D'ici 2030, une entreprise qui ne peut pas produire des **données financières en temps réel** pour l'administration fiscale, des **documents de conformité numériques** pour le régulateur, et des **systèmes intégrés par API** pour le secteur bancaire ne pourra simplement plus opérer légalement. **L'IA et l'automatisation ne sont pas des avantages compétitifs en 2030. Ce sont des exigences de conformité.**",
          "C'est la partie que la plupart des entreprises ratent. Elles pensent à la **transformation digitale** comme un projet — à faire une fois, avec un début et une fin. En réalité, c'est **une couche opérationnelle** qui doit être construite, maintenue et évoluée en continu.",
        ],
      },
      {
        heading: "Pourquoi l'IA est le seul moyen de combler l'écart à temps",
        body: [
          "L'écart entre la situation actuelle de la plupart des entreprises MENA et celle où elles doivent être en 2030 est trop grand pour être comblé par le **développement logiciel traditionnel** seul. Construire un ERP sur mesure prend 12 à 18 mois. Former une équipe prend 6 mois de plus. Intégrer les plateformes gouvernementales, encore 6. Soit trois ans — et la plupart des entreprises n'ont pas commencé.",
          "**L'intelligence artificielle compresse ce calendrier** parce qu'elle automatise les parties qui demandent normalement le plus de temps humain : **le traitement de documents**, **l'extraction de données depuis les systèmes hérités**, **la vérification de conformité**, **l'évaluation des fournisseurs**, **le reporting financier**, et **le service client**. Ce sont les six piliers de l'**adoption de l'IA en entreprise** dans la région MENA.",
          "Une entreprise à **Alger ou Riyad** qui déploie un **système d'intelligence documentaire IA** aujourd'hui économise 40 à 60 % de son temps de back-office en six mois. Ce temps est ce qui lui permet de travailler sur les problèmes plus difficiles — **conformité digitale**, **intégrations API**, **reporting automatisé** — avant les échéances 2030.",
        ],
        image: {
          src: '/insights/2030-transformation-timeline.jpg',
          alt: "Chronologie éditoriale montrant la transformation d'une usine traditionnelle vers une entreprise propulsée par l'IA.",
          caption: "La chronologie de transformation. Les entreprises qui commencent en 2026 ont 4 ans de marge. Celles qui commencent en 2029 ont 12 mois.",
        },
      },
      {
        heading: 'Les cinq choses que chaque entreprise MENA doit construire avant 2030',
        body: [
          "**1. Intelligence documentaire par IA.** Chaque entreprise en **Arabie saoudite, en Algérie et aux EAU** traite un flot de documents — factures, contrats, déclarations douanières, formulaires de conformité. Construire un **pipeline de traitement automatique de documents** utilisant le **NLP arabe et français** est l'investissement IA avec le meilleur ROI qu'une entreprise MENA puisse faire aujourd'hui.",
          "**2. Conformité digitale et e-facturation.** **ZATCA** en Arabie saoudite, la **loi de finances digitale** algérienne, le **reporting TVA** aux EAU — chaque pays passe au **reporting fiscal numérique en temps réel**. Les entreprises ont besoin de systèmes qui génèrent, transmettent et archivent des **factures électroniques conformes** automatiquement.",
          "**3. ERP intégré avec connexions API gouvernementales.** Une entreprise prête pour 2030 a besoin d'un **ERP sur mesure** connecté aux **APIs bancaires**, aux **systèmes douaniers**, aux **plateformes de sécurité sociale** et aux **administrations fiscales** en temps réel. En Algérie, cela signifie les intégrations **CNRC, CNAS, CIB, Edahabia**.",
          "**4. Reporting automatisé et business intelligence.** Les gouvernements et les banques exigeront de plus en plus des **dashboards en temps réel** et des **rapports trimestriels automatisés**.",
          "**5. Cybersécurité et souveraineté des données.** Les **régulations NCA** saoudiennes, la **loi 18-07** algérienne, les **exigences de localisation des données** émiraties — chaque économie Vision renforce les **règles de protection des données**. Les entreprises ont besoin de **gestion de posture de sécurité**, de **chiffrement**, et de **frameworks de conformité** (ISO 27001, SOC 2).",
        ],
        image: {
          src: '/insights/2030-mena-ai-convergence.jpg',
          alt: "Diagramme de Venn montrant la convergence des économies Vision MENA et de la technologie IA.",
          caption: "La convergence des économies Vision MENA et de l'IA n'est pas théorique. Elle est réglementaire. Les entreprises qui ne convergent pas ne seront pas conformes.",
        },
      },
      {
        heading: "Pourquoi l'Algérie et l'Arabie saoudite sont les deux marchés les plus importants maintenant",
        body: [
          "**L'Arabie saoudite** a le budget, la régulation et le calendrier. La Vision 2030 est soutenue par le PIF, appliquée par ZATCA, et suivie par chaque ministère. Les entreprises saoudiennes qui ne se digitalisent pas perdront les contrats gouvernementaux. L'opportunité pour les **entreprises d'ingénierie IA et logicielle** servant des clients saoudiens se mesure en milliards de riyals.",
          "**L'Algérie** a l'urgence et l'écart. La stratégie de digitalisation nationale accélère — **portails e-gouvernement**, **mandats de paiement numérique** (CIB, Edahabia), **projets smart city** à Alger et Oran, **modernisation industrielle** sur les hauts plateaux. Mais l'offre d'**entreprises d'ingénierie capables de livrer des systèmes IA en production** en Algérie est quasi nulle. Symloop est l'une des rares — et nous livrons depuis **Alger avec une présence locale, en français et en arabe, en conformité fiscale algérienne, et selon des standards d'ingénierie internationaux**.",
          "Les entreprises qui construisent la couche d'opérations IA maintenant — dans les deux marchés — seront celles qui possèderont l'économie 2030.",
        ],
      },
      {
        heading: 'Quoi construire en premier — le plan 90 jours',
        body: [
          "Si vous dirigez une entreprise en **Algérie, en Arabie saoudite ou dans toute économie Vision MENA** et que vous n'avez pas commencé votre parcours IA et digitalisation, voici le plan honnête à 90 jours.",
          "**Jours 1–30 : Intelligence documentaire.** Déployez un **système de traitement de documents IA** pour votre paperasse à plus fort volume — factures, contrats, formulaires de conformité. OCR arabe et français avec extraction structurée. ROI visible dès le premier mois.",
          "**Jours 31–60 : Conformité e-facturation.** Connectez votre système comptable à la **plateforme d'e-facturation gouvernementale** concernée (ZATCA en Arabie saoudite, reporting fiscal numérique en Algérie). Ce n'est pas optionnel — c'est en train de devenir obligatoire.",
          "**Jours 61–90 : Baseline sécurité.** Lancez un **test d'intrusion** et une **évaluation de posture de sécurité** sur vos systèmes actuels. Corrigez les trouvailles critiques. Commencez la préparation **ISO 27001 ou SOC 2** si vous prévoyez de servir des clients gouvernementaux ou de vous développer à l'international.",
          "Après 90 jours, vous avez les trois fondations : **automatisation documentaire IA** en production, **conformité digitale** connectée, **baseline sécurité** établie. Tout le reste — **ERP sur mesure**, **business intelligence**, **IoT**, **apps mobiles** — se construit au-dessus de ces trois-là.",
        ],
      },
    ],

    takeaways: {
      title: 'Cinq points à retenir',
      items: [
        "Les économies Vision 2030 restructurent les réglementations autour d'entreprises digital-native. L'IA et l'automatisation sont des exigences de conformité, pas des avantages compétitifs.",
        "L'écart entre les opérations actuelles et les exigences 2030 est trop grand pour le développement logiciel traditionnel seul. L'IA compresse le calendrier.",
        "Les cinq piliers : intelligence documentaire, conformité e-facturation, ERP intégré, reporting automatisé, et cybersécurité avec souveraineté des données.",
        "L'Arabie saoudite a le budget et l'application. L'Algérie a l'urgence et une offre quasi nulle d'entreprises d'ingénierie capables. Les deux marchés sont grands ouverts.",
        "Commencez par l'intelligence documentaire (jours 1–30), l'e-facturation (jours 31–60), et la baseline sécurité (jours 61–90). Tout le reste se construit au-dessus.",
      ],
    },

    cta: {
      eyebrow: "Parlez à l'équipe qui construit pour 2030",
      title:   "Vous opérez dans une économie Vision 2030 et devez commencer maintenant ? Nous vous dirons quoi construire en premier.",
      button:  'Réserver un appel de 30 minutes',
    },
    backToHub: 'Retour à toutes les études',
  },

  ar: {
    kind:        'ملخص استراتيجي',
    title:       'شركة 2030 — لماذا الذكاء الاصطناعي ليس اختيارياً لاقتصادات الرؤية.',
    dek:         'رؤية السعودية 2030، استراتيجية الرقمنة الوطنية الجزائرية، الحكومة الذكية الإماراتية، التحول الرقمي المصري — كل اقتصاد في منطقة الشرق الأوسط وشمال أفريقيا يراهن على 2030. الشركات التي تنجو هي التي تبني الذكاء الاصطناعي في عملياتها الآن، لا في 2029.',
    publishedAt: 'أبريل 2026',
    readTime:    '16 دقيقة قراءة',
    pages:       '28 صفحة',
    author:      'أبحاث سيملوب',

    intro: [
      'كل حكومة في منطقة الشرق الأوسط وشمال أفريقيا لديها خطة 2030. **رؤية السعودية 2030** هي الأكثر ظهوراً — رهان بتريليون دولار على التنويع الاقتصادي والبنية التحتية الرقمية والناتج المحلي غير النفطي. **استراتيجية الرقمنة الوطنية الجزائرية** أكثر هدوءاً لكنها تتسارع — الحكومة الإلكترونية، المدفوعات الرقمية، المدن الذكية، التحديث الصناعي عبر الـ 58 ولاية.',
      'لكن الحكومات لا ترقمن الاقتصادات. **الشركات تفعل ذلك.** ومعظم الشركات في المنطقة — من الرياض إلى الجزائر العاصمة إلى القاهرة — ليست جاهزة.',
      'هذا التقرير يتحدث عن تلك الفجوة. كيف تبدو **الشركة الجاهزة لـ 2030** فعلاً، ولماذا **الذكاء الاصطناعي والأتمتة** ليسا ميزتين اختياريتين بل متطلبات هيكلية.',
    ],

    sections: [
      {
        heading: 'ما الذي يطلبه اقتصاد 2030 فعلاً من الشركات',
        body: [
          '**اقتصادات رؤية 2030** لا تطلب من الشركات تبني التكنولوجيا من أجل ذاتها. إنها تعيد هيكلة **أطر تنظيمية بأكملها** حول افتراض أن الشركات ستكون رقمية أصلاً. **الفوترة الإلكترونية ZATCA** في السعودية، **التسجيل الرقمي CNRC** في الجزائر، **الخدمات الحكومية الذكية** في الإمارات — كل هذا يخلق متطلبات تشغيلية **لا تستطيع شركة تعمل على Excel ومجموعات WhatsApp تلبيتها**.',
          'التحول هيكلي، لا تجميلي. بحلول 2030، شركة لا تستطيع إنتاج **بيانات مالية في الوقت الفعلي** للسلطة الضريبية و**وثائق امتثال رقمية** للمنظم و**أنظمة متكاملة بالـAPI** للقطاع المصرفي لن تستطيع ببساطة العمل قانونياً. **الذكاء الاصطناعي والأتمتة ليسا ميزات تنافسية في 2030. إنهما متطلبات امتثال.**',
        ],
      },
      {
        heading: 'لماذا الذكاء الاصطناعي هو الطريقة الوحيدة لسد الفجوة في الوقت المناسب',
        body: [
          'الفجوة بين موقع معظم شركات المنطقة اليوم وأين يجب أن تكون بحلول 2030 أكبر من أن تُسد بـ**التطوير البرمجي التقليدي** وحده. بناء ERP مخصص يستغرق 12 إلى 18 شهراً. التدريب 6 أشهر أخرى. التكامل مع المنصات الحكومية 6 أخرى. أي ثلاث سنوات — ومعظم الشركات لم تبدأ.',
          '**الذكاء الاصطناعي يضغط هذا الجدول الزمني** لأنه يؤتمت الأجزاء التي تحتاج عادةً أكثر وقت بشري: **معالجة المستندات**، **استخراج البيانات من الأنظمة القديمة**، **التحقق من الامتثال**، **تقييم الموردين**، **التقارير المالية**، و**خدمة العملاء**.',
          'شركة في **الجزائر العاصمة أو الرياض** تنشر **نظام معالجة مستندات بالذكاء الاصطناعي** اليوم توفّر 40 إلى 60% من وقت المكاتب الخلفية خلال ستة أشهر.',
        ],
        image: {
          src: '/insights/2030-transformation-timeline.jpg',
          alt: 'خط زمني تحريري يُظهر التحول من المصنع التقليدي إلى المؤسسة المدعومة بالذكاء الاصطناعي.',
          caption: 'الشركات التي تبدأ في 2026 لديها 4 سنوات. التي تبدأ في 2029 لديها 12 شهراً.',
        },
      },
      {
        heading: 'الأشياء الخمسة التي يجب على كل شركة في المنطقة بناؤها قبل 2030',
        body: [
          '**1. ذكاء المستندات بالذكاء الاصطناعي.** كل شركة في **السعودية والجزائر والإمارات** تتعامل مع طوفان من المستندات. بناء **خط أنابيب معالجة مستندات آلي** باستخدام **NLP عربي وفرنسي** هو أعلى استثمار ذكاء اصطناعي عائداً يمكن لأي شركة في المنطقة القيام به اليوم.',
          '**2. الامتثال الرقمي والفوترة الإلكترونية.** **ZATCA** في السعودية، **قانون المالية الرقمي** في الجزائر، **تقارير ضريبة القيمة المضافة** في الإمارات — كل بلد ينتقل إلى **التقارير الضريبية الرقمية في الوقت الفعلي**.',
          '**3. ERP متكامل مع اتصالات API حكومية.** شركة جاهزة لـ 2030 تحتاج **ERP مخصصاً** متصلاً بـ**واجهات البنوك**، **أنظمة الجمارك**، **منصات الضمان الاجتماعي**. في الجزائر: تكاملات **CNRC وCNAS وCIB والذهبية**.',
          '**4. التقارير الآلية وذكاء الأعمال.** الحكومات والبنوك ستطلب بشكل متزايد **لوحات تحكم في الوقت الفعلي** و**تقارير ربع سنوية آلية**.',
          '**5. الأمن السيبراني وسيادة البيانات.** **لوائح NCA** السعودية، **القانون 18-07** الجزائري، **متطلبات توطين البيانات** الإماراتية — كل اقتصاد رؤية يشدد **قواعد حماية البيانات**.',
        ],
        image: {
          src: '/insights/2030-mena-ai-convergence.jpg',
          alt: 'مخطط فن يُظهر تقاطع اقتصادات الرؤية في المنطقة وتكنولوجيا الذكاء الاصطناعي.',
          caption: 'تقاطع اقتصادات الرؤية في المنطقة والذكاء الاصطناعي ليس نظرياً. إنه تنظيمي.',
        },
      },
      {
        heading: 'لماذا الجزائر والسعودية هما أهم سوقين الآن',
        body: [
          '**السعودية** لديها الميزانية والتنظيم والجدول الزمني. الرؤية 2030 مدعومة بصندوق الاستثمارات العامة، مُطبَّقة بواسطة ZATCA. الشركات السعودية التي لا ترقمن ستفقد العقود الحكومية. الفرصة لـ**شركات هندسة البرمجيات والذكاء الاصطناعي** تُقاس بمليارات الريالات.',
          '**الجزائر** لديها الإلحاح والفجوة. استراتيجية الرقمنة الوطنية تتسارع — **بوابات الحكومة الإلكترونية**، **تعليمات الدفع الرقمي** (CIB، الذهبية)، **مشاريع المدن الذكية**، **التحديث الصناعي**. لكن العرض من **شركات الهندسة القادرة على تسليم أنظمة ذكاء اصطناعي في الإنتاج** في الجزائر شبه معدوم.',
          'الشركات التي تبني طبقة عمليات الذكاء الاصطناعي الآن — في كلا السوقين — ستكون هي التي تملك اقتصاد 2030.',
        ],
      },
      {
        heading: 'ماذا تبني أولاً — خطة 90 يوماً',
        body: [
          'إذا كنت تدير شركة في **الجزائر أو السعودية أو أي اقتصاد رؤية في المنطقة** ولم تبدأ رحلة الذكاء الاصطناعي والرقمنة، إليك خطة 90 يوماً الصادقة.',
          '**الأيام 1–30: ذكاء المستندات.** انشر **نظام معالجة مستندات بالذكاء الاصطناعي** لأكثر أوراقك حجماً. OCR عربي وفرنسي مع استخراج منظم. العائد مرئي في الشهر الأول.',
          '**الأيام 31–60: امتثال الفوترة الإلكترونية.** اربط نظامك المحاسبي بمنصة **الفوترة الإلكترونية الحكومية** المعنية. هذا ليس اختيارياً — إنه يصبح إلزامياً.',
          '**الأيام 61–90: خط أساس الأمن.** أجرِ **اختبار اختراق** و**تقييم وضع أمني** على أنظمتك الحالية. أصلح النتائج الحرجة. ابدأ التحضير لـ**ISO 27001 أو SOC 2**.',
          'بعد 90 يوماً، لديك ثلاث أسس: **أتمتة مستندات ذكاء اصطناعي** تعمل، **امتثال رقمي** متصل، **خط أساس أمني** مؤسس. كل شيء آخر يُبنى فوق هذه الثلاثة.',
        ],
      },
    ],

    takeaways: {
      title: 'خمسة أشياء تأخذها من هذا التقرير',
      items: [
        'اقتصادات رؤية 2030 تعيد هيكلة التنظيمات حول شركات رقمية أصلاً. الذكاء الاصطناعي والأتمتة متطلبات امتثال، لا مزايا تنافسية.',
        'الفجوة بين العمليات الحالية ومتطلبات 2030 أكبر من أن يسدها التطوير البرمجي التقليدي وحده. الذكاء الاصطناعي يضغط الجدول.',
        'الأعمدة الخمسة: ذكاء المستندات، امتثال الفوترة الإلكترونية، ERP متكامل، تقارير آلية، وأمن سيبراني مع سيادة البيانات.',
        'السعودية لديها الميزانية والتنفيذ. الجزائر لديها الإلحاح وعرض شبه معدوم من شركات الهندسة القادرة. كلا السوقين مفتوحان.',
        'ابدأ بذكاء المستندات (أيام 1–30)، الفوترة الإلكترونية (أيام 31–60)، وخط أساس الأمن (أيام 61–90). كل شيء آخر يُبنى فوق.',
      ],
    },

    cta: {
      eyebrow: 'تحدث مع الفريق الذي يبني لـ 2030',
      title:   'تعمل في اقتصاد رؤية 2030 وتحتاج أن تبدأ الآن؟ سنخبرك بما يجب بناؤه أولاً.',
      button:  'احجز مكالمة 30 دقيقة',
    },
    backToHub: 'العودة إلى جميع الرؤى',
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

export default function InsightVision2030Page() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: c.title, description: c.dek,
    image: ['https://symloop.com/insights/cover-2030.jpg'],
    datePublished: '2026-04-10', dateModified: '2026-04-10',
    author: { '@type': 'Organization', name: 'Symloop' },
    publisher: { '@type': 'Organization', name: 'Symloop', logo: { '@type': 'ImageObject', url: 'https://symloop.com/images/symloop-logo.png' } },
    mainEntityOfPage: 'https://symloop.com/insights/vision-2030/',
    video: { '@type': 'VideoObject', name: c.title, description: c.dek, thumbnailUrl: 'https://symloop.com/insights/cover-2030.jpg', contentUrl: 'https://symloop.com/insights/2030-hero.mp4', uploadDate: '2026-04-10' },
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title, url: 'https://symloop.com/insights/vision-2030/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop Insights`}
        description={c.dek}
        keywords="vision 2030 ai, saudi vision 2030 technology, algeria digitalization strategy, ai companies mena, digital transformation saudi arabia, enterprise ai algeria, zatca e-invoicing, smart government uae, ai operations 2030, symloop vision 2030, software engineering saudi arabia, custom erp algeria 2030"
        type="article"
        structuredData={articleLd}
        breadcrumbs={breadcrumbs}
        image="/insights/cover-2030.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/insights/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">{c.kind}</Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.title}</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.author}</span><span>{c.pages}</span><span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>
          {/* Veo 3 hero video */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <video src="/insights/2030-hero.mp4" poster="/insights/cover-2030.jpg" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-6 mb-16">
            {c.intro.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/75 leading-relaxed font-light">{p}</motion.p>
            ))}
          </motion.div>

          {c.sections.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">{s.heading}</h2>
              </motion.div>
              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">{p}</motion.p>
                ))}
              </div>
              {s.image && (
                <motion.figure variants={fadeUp} className="mt-12">
                  <div className="relative w-full aspect-[16/9] border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                    <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 1024px) 800px, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-4 font-mono text-[11px] tracking-[0.1em] uppercase text-white/40 leading-relaxed">{s.image.caption}</figcaption>
                </motion.figure>
              )}
            </motion.section>
          ))}

          <motion.aside initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.takeaways.title}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="space-y-5">
              {c.takeaways.items.map((t, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">{t}</p>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">{c.cta.title}</motion.h2>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <Link href="/contact/" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors">
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
                <Link href="/insights/" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">
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
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
