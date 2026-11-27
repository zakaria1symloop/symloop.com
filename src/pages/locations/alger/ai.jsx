// ============================================================================
// SYMLOOP — /locations/alger/ai/
//
// City × service editorial page. Cross-section of "Alger" and "Applied AI".
// Page structure lives in src/components/locations/LocationServiceLayout.jsx —
// this file only owns the content (FR/EN/AR) and the SEO metadata.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocationServiceLayout from '../../../components/locations/LocationServiceLayout';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale · IA appliquée',
    publishedAt: 'Mis à jour Avril 2026',
    title:       "L'intelligence artificielle à Alger — production, pas pilotes.",
    dek:         "Le seul atelier d'ingénierie IA basé à Alger qui livre des systèmes en production dans les banques, l'administration et les grandes industries de la capitale. Pas de slides, pas de pilotes éternels, pas de chatbots jouets — du code qui tourne et des décisions qui changent.",
    meta: {
      one:   'Alger · Centre · Bab Ezzouar',
      two:   'Banques · Administration · Industrie',
      three: 'Siège Symloop',
    },

    intro: [
      "Si vous travaillez dans une banque, une administration ou un grand groupe industriel à Alger, vous avez probablement reçu **cinq pitchs IA cette année**. Tous identiques : la même promesse d'IA générative, le même chatbot vendu comme une révolution, le même prestataire **sans aucune référence en production dans le pays**. Tous repartent avec un pilote de trois mois qui meurt en production.",
      "Cette page n'est pas le sixième pitch. C'est un portrait éditorial de **comment l'IA appliquée fonctionne réellement dans la capitale algérienne en 2026** — quels cas d'usage tiennent en production, dans quels secteurs, et pourquoi Symloop est l'un des rares acteurs qui **livre plutôt que d'expérimenter**. Si vous êtes responsable d'une décision IA à Alger, lisez la suite.",
    ],

    contact: {
      eyebrow: '— Réponse en moins de 4 heures',
      title:   "Parlez à un ingénieur IA. Pas à un commercial.",
      body:    "Nous répondons sur WhatsApp en moins de 4 heures pendant les heures ouvrables d'Alger. Pour une question rapide, écrivez. Pour un brief de projet, appelez.",
      whatsapp: 'WhatsApp',
      phone:    'Appel direct',
      ai:       'Demander à notre assistant IA →',
    },

    stats: {
      eyebrow: '— Chiffres réels',
      items: [
        { value: '12+', label: "Systèmes IA en production à Alger" },
        { value: '4',   label: "Banques et institutions servies" },
        { value: '< 4h', label: "Temps de réponse moyen" },
        { value: '0',   label: "Pilotes morts depuis 2024" },
      ],
    },

    pullQuote1: "Une banque algéroise traite des millions de documents par mois. L'IA y a un sens uniquement si elle automatise une charge déjà industrielle.",
    pullQuote2: "Nous refusons l'idée qu'une startup algéroise mérite un modèle moins bien conçu qu'une institution publique.",

    sections: [
      {
        heading: "Pourquoi l'IA à Alger est différente",
        body: [
          "Alger n'est pas Oran, Sétif ou Constantine. La capitale concentre trois choses qui changent fondamentalement le profil des projets IA : **l'écosystème bancaire et financier** (BNA, BEA, BNP Paribas Algérie, Banque d'Algérie, et la majorité des compagnies d'assurance), **l'administration centrale** (ministères, douanes, fiscalité, sécurité sociale), et **les sièges des grands groupes industriels** (Sonatrach, Sonelgaz, Cevital, Cosider).",
          "Ces trois mondes partagent des contraintes que vous ne rencontrez nulle part ailleurs en Algérie. Première contrainte : **la régulation**. Un système IA qui touche à des données bancaires, fiscales ou administratives n'a pas le droit à l'erreur — pas en pourcentage, pas en marge, pas du tout. Deuxième contrainte : **le volume**. Une banque algéroise traite des millions de documents par mois ; un ministère traite des centaines de milliers de dossiers. Troisième contrainte : **l'intégration avec des systèmes existants** — souvent des mainframes des années 2000, des bases AS/400, des systèmes ministériels sans API. C'est là que la plupart des projets IA meurent.",
        ],
      },
      {
        heading: "Les quatre cas d'usage qui livrent vraiment à Alger",
        body: [
          "L'IA appliquée qui fonctionne en production à Alger aujourd'hui se limite à quatre catégories. **Aucune n'est un chatbot.**",
          "Premier cas d'usage : **l'intelligence documentaire pour les institutions financières**. Lecture automatique de pièces d'identité, chèques, relevés bancaires, contrats en arabe et en français. Le ROI le plus net dans la capitale — chaque banque algéroise a entre 80 et 300 employés qui font ce travail manuellement.",
          "Deuxième cas d'usage : **la digitalisation des processus administratifs**. Pré-remplissage de dossiers, extraction de données depuis des formulaires scannés, vérification automatique de documents, routage intelligent vers les services compétents.",
          "Troisième cas d'usage : **la maintenance prédictive et la vision par ordinateur** pour Sonatrach, Sonelgaz, leurs filiales, et les sièges algérois des cimenteries. Capteurs sur les équipements critiques, modèles prédictifs sur les pannes. Les missions les plus discrètes et les plus rentables que nous livrons.",
          "Quatrième cas d'usage : **la détection de fraude et d'anomalies** pour les banques et les assurances. Modèles entraînés sur l'historique de transactions algériennes, avec les contraintes spécifiques du marché local (CIB, virements interbancaires, particularités du blanchiment d'argent en zone MENA).",
        ],
      },
      {
        heading: 'La même rigueur pour la grande institution et la startup',
        body: [
          "Notre client le plus visible cette année est une institution publique algéroise. Notre projet le plus exigeant techniquement est un système de vision par ordinateur pour un site industriel de la capitale. Mais sur le même calendrier, nous livrons un système d'extraction de documents pour **une fintech algéroise de 25 personnes** et un modèle de scoring pour une startup d'assurance qui démarre.",
          "C'est volontaire. Nous refusons l'idée qu'une startup algéroise mérite un modèle moins bien conçu qu'une institution publique. **Le code est revu par les mêmes ingénieurs ML seniors.** Les tests automatisés, le monitoring en production, les pipelines MLOps, la documentation — tout ce qui définit notre méthode est appliqué à l'identique.",
          "Ce que nous adaptons, c'est **le périmètre. Pas la rigueur.** Une startup n'a pas besoin d'un modèle entraîné sur 500 millions de documents. Elle a besoin d'un système qui résout son problème critique, qui tient en production six mois, et qu'elle peut faire évoluer sans dépendre de personne.",
        ],
      },
      {
        heading: 'Comment nous travaillons avec les institutions algéroises',
        body: [
          "**Notre siège est à Alger.** Pour les missions dans la capitale, nos ingénieurs sont sur place — pas à San Francisco, pas à Dubaï, pas à Paris. Nous comprenons les procédures de marché public, les exigences de **la loi 18-07 sur les données personnelles**, les habilitations de sécurité, les calendriers gouvernementaux.",
          "Nous parlons français, arabe et l'anglais des spécifications techniques. Nous travaillons sous NDA dès la première réunion. Pour les institutions sensibles, nous intervenons sur infrastructure isolée et sur du code source qui ne sort jamais de l'environnement client. **Notre facturation est conforme à la fiscalité algérienne** — pas de paiement Stripe en dollars, pas de facture étrangère qui bloque trois mois en validation comptable.",
          "Notre méthode de livraison reste la même que pour nos missions internationales : discovery de deux à quatre semaines avec accès aux données réelles (sous NDA), prototypage rapide, validation en conditions réelles, mise en production avec monitoring complet. **Aucune mission ne se termine sans transfert complet de propriété intellectuelle.**",
        ],
      },
      {
        heading: "D'Alger vers le pays — et au-delà",
        body: [
          "Plusieurs des systèmes IA que nous avons livrés à Alger sont devenus le socle de produits maintenant déployés dans d'autres wilayas et à l'international. Un module d'intelligence documentaire conçu pour une banque algéroise est aujourd'hui en production **dans deux institutions financières en MENA**. Un système de maintenance prédictive développé pour un site industriel à Alger sert maintenant **trois usines en France et au Maroc**.",
          "Cela vous concerne directement : vous travaillez avec une équipe qui a vu plusieurs versions de votre problème, qui a déjà testé plusieurs approches, et qui peut vous éviter les impasses. **Vous n'achetez pas seulement de la livraison — vous achetez de l'expérience accumulée sur le terrain algérien.**",
        ],
      },
    ],

    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines liées',
        items: [
          { key: 'ai',                   name: 'Intelligence Artificielle' },
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
          { key: 'consulting',           name: 'Conseil technologique' },
        ],
      },
      insights: {
        label: 'Études liées',
        items: [
          { key: 'ai',         name: "Automatisation IA dans l'entreprise algérienne — 2026" },
          { key: 'healthcare', name: "L'IA ne remplace pas les médecins. Elle remplace la paperasse." },
        ],
      },
    },

    cta: {
      eyebrow: 'Parlez à un ingénieur IA basé à Alger',
      title:   "Vous avez un cas d'usage IA à Alger et vous voulez un avis d'ingénierie honnête ? Décrivez-le en cinq minutes.",
      button:  'Formulaire de contact',
    },
  },

  en: {
    eyebrow:     'Algiers · Capital · Applied AI',
    publishedAt: 'Updated April 2026',
    title:       'Artificial Intelligence in Algiers — production, not pilots.',
    dek:         "The only AI engineering workshop headquartered in Algiers that ships production systems for the capital's banks, public administration, and large industrial groups. No slides, no eternal pilots, no toy chatbots — code that runs and decisions that change.",
    meta: {
      one:   'Algiers · Center · Bab Ezzouar',
      two:   'Banking · Government · Industrial',
      three: 'Symloop HQ',
    },
    intro: [
      "If you work at a bank, a government body, or a large industrial group in Algiers, you have probably received **five AI pitches this year**. All identical: the same generative-AI promise, the same chatbot sold as a revolution, **the same vendor with no production references in the country**. Each one leaves with a three-month pilot that dies in production.",
      'This page is not the sixth pitch. It is an editorial portrait of **how applied AI actually works in the Algerian capital in 2026** — which use cases hold up in production, in which sectors, and why Symloop is one of the few firms that **ships rather than experiments**. If you are responsible for an AI decision in Algiers, read on.',
    ],
    contact: {
      eyebrow: '— Reply within 4 hours',
      title:   'Talk to an AI engineer. Not a salesperson.',
      body:    'We reply on WhatsApp within 4 hours during Algiers business hours. Quick question? Write. Project brief? Call.',
      whatsapp: 'WhatsApp',
      phone:    'Direct call',
      ai:       'Ask our AI assistant →',
    },
    stats: {
      eyebrow: '— Real numbers',
      items: [
        { value: '12+',  label: 'AI systems in production in Algiers' },
        { value: '4',    label: 'Banks and institutions served' },
        { value: '< 4h', label: 'Average response time' },
        { value: '0',    label: 'Dead pilots since 2024' },
      ],
    },
    pullQuote1: 'An Algiers bank processes millions of documents per month. AI only makes sense if it automates an already-industrial workload.',
    pullQuote2: 'We reject the idea that an Algiers startup deserves a less-well-designed model than a public institution.',
    sections: [
      {
        heading: 'Why AI in Algiers is different',
        body: [
          'Algiers is not Oran, Sétif, or Constantine. The capital concentrates three things that fundamentally change the profile of AI projects: **the banking and finance ecosystem** (BNA, BEA, BNP Paribas Algeria, Bank of Algeria, and most of the country\'s insurance companies), **central administration** (ministries, customs, taxation, social security), and **the headquarters of the major industrial groups** (Sonatrach, Sonelgaz, Cevital, Cosider).',
          "These three worlds share constraints you do not encounter anywhere else in Algeria. First constraint: **regulation**. An AI system that touches banking, tax, or administrative data has no right to be wrong — not in percentage, not at the margin, not at all. Second constraint: **volume**. An Algiers bank processes millions of documents per month; a ministry processes hundreds of thousands of files. Third constraint: **integration with legacy systems** — often 2000s-era mainframes, AS/400 databases, ministry systems with no API. That is where most AI projects die.",
        ],
      },
      {
        heading: 'The four use cases that actually ship in Algiers',
        body: [
          'Applied AI that runs in production in Algiers today is limited to four categories. **None of them is a chatbot.**',
          'First use case: **document intelligence for financial institutions**. Automated reading of identity documents, cheques, statements, contracts in Arabic and French. The cleanest ROI in the capital — every Algiers bank has between 80 and 300 employees doing this work manually.',
          'Second use case: **digitalization of administrative processes**. Pre-filling files, extracting data from scanned forms, automated document verification, intelligent routing to the right department.',
          'Third use case: **predictive maintenance and computer vision** for Sonatrach, Sonelgaz, their subsidiaries, and the Algiers headquarters of cement and heavy industry. Sensors on critical equipment, predictive failure models. The quietest and most profitable engagements we deliver.',
          'Fourth use case: **fraud and anomaly detection** for banks and insurance. Models trained on Algerian transaction history, with the specific constraints of the local market.',
        ],
      },
      {
        heading: 'The same rigor for the large institution and the startup',
        body: [
          'Our most visible client this year is an Algiers public institution. Our most technically demanding project is a computer vision system for an industrial site in the capital. But on the same calendar, we are delivering a document extraction system for **a 25-person Algiers fintech** and a scoring model for an insurance startup that just launched.',
          'This is intentional. We reject the idea that an Algiers startup deserves a less-well-designed model than a public institution. **The code is reviewed by the same senior ML engineers.** Automated tests, production monitoring, MLOps pipelines, documentation — everything that defines our method is applied identically.',
          'What we adapt is **scope, not rigor**. A startup does not need a model trained on 500 million documents. It needs a system that solves its critical problem, holds up in production for six months, and that it can evolve without depending on anyone.',
        ],
      },
      {
        heading: 'How we work with Algiers institutions',
        body: [
          '**Our headquarters is in Algiers.** For engagements in the capital, our engineers are on-site. We understand public procurement procedures, the requirements of **Algerian Law 18-07 on personal data**, security clearances, government calendars.',
          'We speak French, Arabic, and the English of technical specifications. We work under NDA from the first meeting. For sensitive institutions, we operate on isolated infrastructure and source code that never leaves the client environment. **Our invoicing complies with Algerian taxation** — no Stripe payments in dollars, no foreign invoice that gets stuck for three months in accounting validation.',
          'Our delivery method stays the same as for our international engagements: discovery, rapid prototyping, validation under real conditions, production deployment with full monitoring. **No engagement ends without complete IP transfer.**',
        ],
      },
      {
        heading: 'From Algiers to the country — and beyond',
        body: [
          'Several of the AI systems we delivered in Algiers have become the foundation of products now deployed in other wilayas and internationally. A document intelligence module designed for an Algiers bank is now in production **in two financial institutions in MENA**. A predictive maintenance system developed for an industrial site in Algiers now serves **three plants in France and Morocco**.',
          'This concerns you directly: you work with a team that has seen several versions of your problem, that has already tested several approaches. **You do not just buy delivery — you buy accumulated experience on Algerian soil.**',
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Related disciplines',
        items: [
          { key: 'ai',                   name: 'Artificial Intelligence' },
          { key: 'software-engineering', name: 'Software Engineering' },
          { key: 'consulting',           name: 'Technology Consulting' },
        ],
      },
      insights: {
        label: 'Related insights',
        items: [
          { key: 'ai',         name: 'AI automation in Algerian business — 2026' },
          { key: 'healthcare', name: 'AI is not replacing doctors. It is replacing the paperwork.' },
        ],
      },
    },
    cta: {
      eyebrow: 'Talk to an AI engineer based in Algiers',
      title:   'Have an AI use case in Algiers and want an honest engineering opinion? Describe it in five minutes.',
      button:  'Contact form',
    },
  },

  ar: {
    eyebrow:     'الجزائر العاصمة · العاصمة · ذكاء اصطناعي تطبيقي',
    publishedAt: 'محدّث أبريل 2026',
    title:       'الذكاء الاصطناعي في الجزائر العاصمة — إنتاج، لا تجارب.',
    dek:         'ورشة هندسة الذكاء الاصطناعي الوحيدة التي مقرها الجزائر العاصمة وتسلّم أنظمة إنتاج لبنوك العاصمة وإدارتها العامة ومجموعاتها الصناعية الكبرى. لا شرائح، لا تجارب أبدية، لا روبوتات محادثة لُعبية — شيفرة تعمل وقرارات تتغير.',
    meta: {
      one:   'الجزائر العاصمة · الوسط · باب الزوار',
      two:   'البنوك · الإدارة · الصناعة',
      three: 'مقر سيملوب',
    },
    intro: [
      'إذا كنت تعمل في بنك أو إدارة عامة أو مجموعة صناعية كبرى في الجزائر العاصمة، فمن المحتمل أنك تلقيت **خمسة عروض ذكاء اصطناعي هذا العام**. جميعها متطابقة: نفس الوعد بالذكاء الاصطناعي التوليدي، نفس الروبوت المُحادث المُباع كثورة، **نفس البائع بدون أي مراجع إنتاج في البلاد**. كل واحد يغادر بتجربة مدتها ثلاثة أشهر تموت في الإنتاج.',
      'هذه الصفحة ليست العرض السادس. إنها صورة تحريرية **لكيفية عمل الذكاء الاصطناعي التطبيقي فعلاً في العاصمة الجزائرية في 2026** — ما هي حالات الاستخدام التي تصمد في الإنتاج، في أي قطاعات، ولماذا سيملوب من الشركات القليلة التي **تسلّم بدلاً من أن تجرّب**.',
    ],
    contact: {
      eyebrow: '— الرد في أقل من 4 ساعات',
      title:   'تحدث مع مهندس ذكاء اصطناعي. لا مع موظف مبيعات.',
      body:    'نرد على واتساب في أقل من 4 ساعات خلال ساعات العمل في الجزائر العاصمة. للسؤال السريع، اكتب. لموجز المشروع، اتصل.',
      whatsapp: 'واتساب',
      phone:    'مكالمة مباشرة',
      ai:       'اسأل مساعدنا الذكي ←',
    },
    stats: {
      eyebrow: '— أرقام حقيقية',
      items: [
        { value: '+12',  label: 'نظام ذكاء اصطناعي في الإنتاج بالجزائر العاصمة' },
        { value: '4',    label: 'بنوك ومؤسسات نخدمها' },
        { value: '< 4س', label: 'متوسط زمن الاستجابة' },
        { value: '0',    label: 'تجارب ميتة منذ 2024' },
      ],
    },
    pullQuote1: 'بنك في الجزائر العاصمة يعالج ملايين الوثائق شهرياً. الذكاء الاصطناعي له معنى فقط إذا أتمت عبئاً صناعياً بالفعل.',
    pullQuote2: 'نرفض فكرة أن الشركة الناشئة في الجزائر العاصمة تستحق نموذجاً مصمماً بشكل أقل جودة من مؤسسة عامة.',
    sections: [
      {
        heading: 'لماذا الذكاء الاصطناعي في الجزائر العاصمة مختلف',
        body: [
          'الجزائر العاصمة ليست وهران أو سطيف أو قسنطينة. العاصمة تركز ثلاثة أشياء تغير ملف مشاريع الذكاء الاصطناعي: **المنظومة المصرفية والمالية** (BNA، BEA، BNP Paribas الجزائر، بنك الجزائر، ومعظم شركات التأمين)، **الإدارة المركزية** (الوزارات، الجمارك، الضرائب، الضمان الاجتماعي)، و**مقرات المجموعات الصناعية الكبرى** (سوناطراك، سونلغاز، سفيتال، كوسيدر).',
          'هذه العوالم الثلاثة تتشارك قيوداً لن تجدها في أي مكان آخر في الجزائر. القيد الأول: **التنظيم**. القيد الثاني: **الحجم** — بنك في العاصمة يعالج ملايين الوثائق شهرياً. القيد الثالث: **التكامل مع الأنظمة القديمة**. هذا حيث تموت معظم مشاريع الذكاء الاصطناعي.',
        ],
      },
      {
        heading: 'حالات الاستخدام الأربع التي تنجح فعلاً في الجزائر العاصمة',
        body: [
          'الذكاء الاصطناعي التطبيقي الذي يعمل في الإنتاج في الجزائر العاصمة اليوم يقتصر على أربع فئات. **لا واحدة منها روبوت محادثة.**',
          'الأولى: **ذكاء المستندات للمؤسسات المالية**. القراءة الآلية لوثائق الهوية، الشيكات، كشوف الحسابات، العقود — بالعربية والفرنسية. أنظف عائد على الاستثمار في العاصمة.',
          'الثانية: **رقمنة العمليات الإدارية**. ملء الملفات مسبقاً، استخراج البيانات، التحقق الآلي، التوجيه الذكي.',
          'الثالثة: **الصيانة التنبؤية والرؤية الحاسوبية** لسوناطراك، سونلغاز، فروعها، ومقرات الصناعات الثقيلة في العاصمة.',
          'الرابعة: **الكشف عن الاحتيال والشذوذ** للبنوك والتأمين. نماذج مُدرَّبة على تاريخ المعاملات الجزائرية.',
        ],
      },
      {
        heading: 'نفس الصرامة للمؤسسة الكبيرة وللشركة الناشئة',
        body: [
          'أكثر عملائنا ظهوراً هذا العام مؤسسة عامة في الجزائر العاصمة. أكثر مشاريعنا تطلباً تقنياً نظام رؤية حاسوبية لموقع صناعي في العاصمة. لكن في نفس الجدول الزمني، نسلّم نظام استخراج وثائق **لشركة فينتك من 25 شخصاً** ونموذج تسجيل لشركة تأمين ناشئة.',
          'هذا متعمد. نرفض فكرة أن الشركة الناشئة تستحق نموذجاً أقل جودة من مؤسسة عامة. **تتم مراجعة الشيفرة من قبل نفس مهندسي ML الكبار.** الاختبارات الآلية، مراقبة الإنتاج، MLOps — كل شيء يُطبَّق بشكل متطابق.',
          'ما نُكيّفه هو **النطاق. لا الصرامة.** الشركة الناشئة لا تحتاج إلى نموذج مُدرَّب على 500 مليون وثيقة. تحتاج إلى نظام يحل مشكلتها الحرجة ويصمد في الإنتاج.',
        ],
      },
      {
        heading: 'كيف نعمل مع المؤسسات في الجزائر العاصمة',
        body: [
          '**مقرنا في الجزائر العاصمة.** للمهام في العاصمة، مهندسونا في الموقع. نفهم إجراءات الصفقات العمومية، متطلبات **القانون 18-07** المتعلق بحماية البيانات، التصاريح الأمنية، التقويمات الحكومية.',
          'نتحدث الفرنسية والعربية وإنجليزية المواصفات التقنية. نعمل تحت اتفاقية عدم إفصاح من الاجتماع الأول. للمؤسسات الحساسة، نعمل على بنية تحتية معزولة. **فوترتنا تتوافق مع الضرائب الجزائرية** — لا مدفوعات Stripe بالدولار.',
          'منهج التسليم لدينا يبقى نفسه كما لمهامنا الدولية. **لا تنتهي مهمة بدون نقل كامل للملكية الفكرية.**',
        ],
      },
      {
        heading: 'من الجزائر العاصمة إلى البلاد — وأبعد',
        body: [
          'العديد من أنظمة الذكاء الاصطناعي التي سلّمناها في العاصمة أصبحت أساس منتجات نُنشرها في ولايات أخرى ودولياً. وحدة ذكاء مستندات لبنك في العاصمة تعمل اليوم **في مؤسستين ماليتين في منطقة الشرق الأوسط وشمال أفريقيا**. نظام صيانة تنبؤية يخدم **ثلاثة مصانع في فرنسا والمغرب**.',
          'هذا يعنيك مباشرة: أنت تعمل مع فريق رأى عدة نسخ من مشكلتك. **أنت لا تشتري التسليم فقط — أنت تشتري خبرة متراكمة على الأرض الجزائرية.**',
        ],
      },
    ],
    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات ذات صلة',
        items: [
          { key: 'ai',                   name: 'الذكاء الاصطناعي' },
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
          { key: 'consulting',           name: 'الاستشارات التقنية' },
        ],
      },
      insights: {
        label: 'دراسات ذات صلة',
        items: [
          { key: 'ai',         name: 'أتمتة الذكاء الاصطناعي في الشركات الجزائرية — 2026' },
          { key: 'healthcare', name: 'الذكاء الاصطناعي لا يحل محل الأطباء. إنه يحل محل الأوراق.' },
        ],
      },
    },
    cta: {
      eyebrow: 'تحدث مع مهندس ذكاء اصطناعي مقره الجزائر العاصمة',
      title:   'هل لديك حالة استخدام ذكاء اصطناعي في الجزائر العاصمة وتريد رأياً هندسياً صادقاً؟',
      button:  'نموذج الاتصال',
    },
  },
};

export default function LocationAlgerAIPage() {
  return (
    <LocationServiceLayout
      CONTENT={CONTENT}
      pageUrl="https://symloop.com/locations/alger/ai/"
      cityName="Alger"
      cityKey="alger"
      serviceType="Applied artificial intelligence and machine learning"
      schemaKeywords="intelligence artificielle alger, ia alger, ai algiers, machine learning alger, vision par ordinateur alger, ia banque alger, ia administration alger, intelligence documentaire alger, ml engineer alger, symloop ai algiers"
    />
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
