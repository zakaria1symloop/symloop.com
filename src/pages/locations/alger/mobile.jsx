// ============================================================================
// SYMLOOP — /locations/alger/mobile/
// City × service: Mobile engineering for Algiers fintech, government, and enterprise.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocationServiceLayout from '../../../components/locations/LocationServiceLayout';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale · Ingénierie mobile',
    publishedAt: 'Mis à jour Avril 2026',
    title:       "L'ingénierie mobile à Alger — pour des apps qui passent la régulation et le store.",
    dek:         "Le seul atelier d'ingénierie mobile basé à Alger qui livre des applications iOS et Android pour les fintechs, l'administration et les grands groupes de la capitale. Avec App Store, Google Play, et toutes les contraintes algériennes en plus.",
    meta: { one: 'Alger · Centre · Bab Ezzouar', two: 'iOS · Android · Flutter · React Native', three: 'Siège Symloop' },
    intro: [
      "Si vous êtes responsable produit ou IT dans une fintech, une banque ou une administration à Alger, vous savez que **lancer une app mobile dans le contexte algérien est plus difficile que dans n'importe quel autre pays MENA**. L'authentification CIB, la régulation Banque d'Algérie, les exigences SATIM, l'arabe et le français qui cohabitent — c'est un terrain qui détruit les équipes mobiles inexpérimentées.",
      "Cette page n'est pas un argumentaire. C'est un portrait de **comment l'ingénierie mobile sérieuse fonctionne réellement dans la capitale algérienne**, et pourquoi nous sommes l'un des rares ateliers qui livre des apps qui passent à la fois la validation Apple/Google **et** les contraintes réglementaires algériennes.",
    ],
    contact: {
      eyebrow: '— Réponse en moins de 4 heures',
      title:   "Parlez à un ingénieur mobile. Pas à un commercial.",
      body:    "Nous répondons sur WhatsApp en moins de 4 heures pendant les heures ouvrables d'Alger.",
      whatsapp: 'WhatsApp', phone: 'Appel direct', ai: 'Demander à notre assistant IA →',
    },
    stats: {
      eyebrow: '— Chiffres réels',
      items: [
        { value: '20+', label: 'Apps mobiles publiées sur les stores' },
        { value: '4.7', label: "Note moyenne sur App Store / Play" },
        { value: '< 4h', label: 'Temps de réponse moyen' },
        { value: '0',   label: 'Apps rejetées par Apple à la première soumission' },
      ],
    },
    pullQuote1: "Une app mobile qui doit intégrer CIB, Edahabia, Yalidine et Banque d'Algérie n'est pas une simple app. C'est un projet d'intégration déguisé en application.",
    pullQuote2: "Une note de 4.7 sur Play Store en Algérie n'est pas un détail. C'est ce qui fait la différence entre 1000 utilisateurs et 100 000.",
    sections: [
      {
        heading: "Pourquoi l'ingénierie mobile à Alger est différente",
        body: [
          "Lancer une app mobile à Alger n'est pas comme lancer une app à Casablanca, Tunis ou Dubaï. Trois choses changent fondamentalement le profil du projet : **les paiements** (CIB, Edahabia, intégration SATIM), **la régulation Banque d'Algérie** sur les services financiers, et **la gestion bilingue arabe-français** qui n'est pas optionnelle.",
          "S'ajoutent les contraintes du marché lui-même : **les téléphones des utilisateurs algériens sont en moyenne plus anciens** que ceux des marchés voisins, **la connectivité est inégale** selon les wilayas, et **les habitudes d'usage** ne sont pas celles des marchés européens. Une app conçue pour Paris meurt souvent en production à Alger pour ces trois raisons combinées.",
        ],
      },
      {
        heading: "Ce que nous livrons à Alger",
        body: [
          "Nos engagements mobile à Alger se concentrent sur quatre catégories.",
          "Premier : **les apps fintech et bancaires**. Ouverture de compte, KYC, virements, paiements de factures, intégration CIB et Edahabia, conformité Banque d'Algérie. Pour les nouvelles fintechs et les banques en transformation digitale.",
          "Deuxième : **les apps de services administratifs**. Demandes de documents, suivi de dossiers, paiement de taxes, prise de rendez-vous. Pour les ministères, mairies et organismes publics.",
          "Troisième : **les apps métier internes** pour les grands groupes. Gestion de flotte, suivi terrain, ventes en mobilité, inventaire. Pour Sonatrach, Sonelgaz, distributeurs, manufacturiers.",
          "Quatrième : **les apps grand public** — livraison, retail, fidélité — pour les marques algériennes qui vendent en Algérie et au-delà.",
        ],
      },
      {
        heading: "La même rigueur pour la grande banque et la startup en pré-seed",
        body: [
          "Notre client le plus visible cette année est une institution financière algéroise. Notre app la plus complexe techniquement intègre cinq systèmes bancaires différents. Mais sur le même calendrier, nous livrons une app pour **une startup algéroise de 8 personnes** qui n'a pas encore levé de fonds.",
          "C'est volontaire. Nous refusons l'idée qu'une startup mérite une app moins bien conçue qu'une banque, simplement parce que le ticket est plus petit. **Le même processus de design, le même cycle de tests, la même validation App Store/Play.** Nous prenons les mêmes précautions sur la sécurité, la performance et l'accessibilité.",
          "Ce que nous adaptons, c'est **le périmètre, pas la rigueur**. Une startup a besoin d'une v1 qui fonctionne, qui passe le store, et qui peut évoluer. C'est exactement ce que nous livrons.",
        ],
      },
      {
        heading: "Comment nous travaillons avec les acteurs algérois",
        body: [
          "**Notre équipe mobile est à Alger.** Pour les missions dans la capitale, nous sommes sur place — nous comprenons les contraintes locales avant de proposer une architecture. Nous travaillons en natif (Swift, Kotlin) pour les apps critiques et en cross-platform (Flutter, React Native) quand c'est le bon choix économique.",
          "Nous publions les apps directement sur l'App Store et Google Play depuis nos comptes développeurs ou ceux du client. **Nous gérons toute la chaîne** : signing certificates, provisioning profiles, screenshots, descriptions store, gestion des mises à jour, support post-lancement. Aucune surprise, aucune dépendance externe.",
          "Pour les apps financières, nous travaillons sous NDA et sur infrastructure de développement isolée. Nous appliquons les mêmes standards de sécurité que les banques européennes — chiffrement bout en bout, certificate pinning, biométrie, anti-tampering.",
        ],
      },
      {
        heading: "Les apps qui restent en production",
        body: [
          "Plusieurs des apps que nous avons livrées à Alger depuis 2020 sont toujours en production aujourd'hui, avec des dizaines de milliers d'utilisateurs actifs. C'est le test qui compte. **Une app qui ne survit pas trois ans n'a jamais été une app — c'était un prototype**.",
          "Cela vous concerne directement : vous travaillez avec une équipe qui a vu plusieurs versions du marché algérien, qui sait ce qui marche en production, et qui peut vous éviter les erreurs courantes. Vous achetez de l'expérience, pas de l'expérimentation.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines liées',
        items: [
          { key: 'mobile',               name: 'Ingénierie Mobile' },
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
          { key: 'product',              name: 'Ingénierie produit' },
        ],
      },
      insights: {
        label: 'Études liées',
        items: [
          { key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' },
        ],
      },
    },
    cta: {
      eyebrow: 'Parlez à un ingénieur mobile basé à Alger',
      title:   "Vous avez une app à lancer à Alger qui doit passer le store et la régulation ? Décrivez-la en cinq minutes.",
      button:  'Formulaire de contact',
    },
  },

  en: {
    eyebrow:     'Algiers · Capital · Mobile Engineering',
    publishedAt: 'Updated April 2026',
    title:       'Mobile engineering in Algiers — for apps that pass the store and the regulator.',
    dek:         "The only mobile engineering workshop headquartered in Algiers that ships iOS and Android apps for the capital's fintechs, public administration, and large groups. With App Store, Google Play, and every Algerian constraint on top.",
    meta: { one: 'Algiers · Center · Bab Ezzouar', two: 'iOS · Android · Flutter · React Native', three: 'Symloop HQ' },
    intro: [
      'If you are a product or IT lead at an Algiers fintech, bank, or public body, you know **launching a mobile app in the Algerian context is harder than in any other MENA country**. CIB authentication, Bank of Algeria regulation, SATIM requirements, Arabic and French coexisting — terrain that destroys inexperienced mobile teams.',
      'This page is not a pitch. It is a portrait of **how serious mobile engineering actually works in the Algerian capital**, and why we are one of the few workshops that ships apps that pass both the Apple/Google validation **and** the Algerian regulatory constraints.',
    ],
    contact: { eyebrow: '— Reply within 4 hours', title: 'Talk to a mobile engineer. Not a salesperson.', body: 'We reply on WhatsApp within 4 hours during Algiers business hours.', whatsapp: 'WhatsApp', phone: 'Direct call', ai: 'Ask our AI assistant →' },
    stats: {
      eyebrow: '— Real numbers',
      items: [
        { value: '20+',  label: 'Mobile apps published on stores' },
        { value: '4.7',  label: 'Average store rating' },
        { value: '< 4h', label: 'Average response time' },
        { value: '0',    label: 'Apps rejected by Apple on first submission' },
      ],
    },
    pullQuote1: 'A mobile app that has to integrate CIB, Edahabia, Yalidine, and the Bank of Algeria is not a simple app. It is an integration project disguised as an application.',
    pullQuote2: 'A 4.7 rating on Play Store in Algeria is not a detail. It is the difference between 1,000 users and 100,000.',
    sections: [
      {
        heading: 'Why mobile engineering in Algiers is different',
        body: [
          'Launching a mobile app in Algiers is not like launching one in Casablanca, Tunis, or Dubai. Three things fundamentally change the profile of the project: **payments** (CIB, Edahabia, SATIM integration), **Bank of Algeria regulation** on financial services, and **Arabic-French bilingual handling** that is not optional.',
          'On top, market constraints: **Algerian users have on average older phones**, **connectivity is uneven** across wilayas, and **usage patterns are not those of European markets**. An app designed for Paris often dies in production in Algiers for these three reasons combined.',
        ],
      },
      {
        heading: 'What we deliver in Algiers',
        body: [
          'Our mobile engagements in Algiers focus on four categories.',
          'First: **fintech and banking apps**. Account opening, KYC, transfers, bill payments, CIB and Edahabia integration, Bank of Algeria compliance.',
          'Second: **public service apps**. Document requests, file tracking, tax payments, appointment booking. For ministries, municipalities, public bodies.',
          'Third: **internal business apps** for large groups. Fleet management, field tracking, mobile sales, inventory.',
          'Fourth: **consumer apps** — delivery, retail, loyalty — for Algerian brands selling in Algeria and beyond.',
        ],
      },
      {
        heading: 'The same rigor for the bank and the pre-seed startup',
        body: [
          "Our most visible client this year is an Algiers financial institution. Our most technically complex app integrates five different banking systems. But on the same calendar, we are delivering an app for **an 8-person Algiers startup** that has not raised funding yet.",
          "This is intentional. **The same design process, the same testing cycle, the same App Store/Play validation.** We take the same precautions on security, performance, and accessibility.",
          'What we adapt is **scope, not rigor**. A startup needs a v1 that works, passes the store, and can evolve. That is exactly what we deliver.',
        ],
      },
      {
        heading: 'How we work with Algiers stakeholders',
        body: [
          '**Our mobile team is in Algiers.** For engagements in the capital, we are on-site. We work native (Swift, Kotlin) for critical apps and cross-platform (Flutter, React Native) when it is the right economic choice.',
          'We publish apps directly on the App Store and Google Play from our developer accounts or the client\'s. **We handle the entire chain**: signing certificates, provisioning profiles, screenshots, store descriptions, update management, post-launch support.',
          'For financial apps, we work under NDA and on isolated development infrastructure. We apply the same security standards as European banks — end-to-end encryption, certificate pinning, biometrics, anti-tampering.',
        ],
      },
      {
        heading: 'Apps that stay in production',
        body: [
          'Several of the apps we have delivered in Algiers since 2020 are still in production today, with tens of thousands of active users. **An app that does not survive three years was never an app — it was a prototype.**',
          'This concerns you directly: you work with a team that has seen several versions of the Algerian market, that knows what works in production, and that can spare you the common mistakes.',
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Related disciplines',
        items: [
          { key: 'mobile',               name: 'Mobile Engineering' },
          { key: 'software-engineering', name: 'Software Engineering' },
          { key: 'product',              name: 'Product Engineering' },
        ],
      },
      insights: { label: 'Related insights', items: [{ key: 'cost', name: 'The real cost of building software in Algeria' }] },
    },
    cta: { eyebrow: 'Talk to a mobile engineer based in Algiers', title: 'Have an app to launch in Algiers that has to pass the store and the regulator? Describe it in five minutes.', button: 'Contact form' },
  },

  ar: {
    eyebrow:     'الجزائر العاصمة · العاصمة · هندسة الجوال',
    publishedAt: 'محدّث أبريل 2026',
    title:       'هندسة الجوال في الجزائر العاصمة — لتطبيقات تجتاز المتجر والمنظم.',
    dek:         'ورشة هندسة الجوال الوحيدة التي مقرها الجزائر العاصمة وتسلّم تطبيقات iOS و Android لشركات الفينتك في العاصمة وإدارتها العامة ومجموعاتها الكبرى.',
    meta: { one: 'الجزائر العاصمة · الوسط · باب الزوار', two: 'iOS · Android · Flutter · React Native', three: 'مقر سيملوب' },
    intro: [
      'إذا كنت مسؤول منتج أو تكنولوجيا في شركة فينتك أو بنك أو إدارة في الجزائر العاصمة، فأنت تعرف أن **إطلاق تطبيق جوال في السياق الجزائري أصعب من أي بلد آخر في منطقة الشرق الأوسط وشمال أفريقيا**. مصادقة CIB، تنظيم بنك الجزائر، متطلبات SATIM، العربية والفرنسية معاً — أرض تدمر فرق الجوال عديمة الخبرة.',
      'هذه الصفحة ليست عرضاً تجارياً. إنها صورة **لكيفية عمل هندسة الجوال الجادة فعلاً في العاصمة الجزائرية**.',
    ],
    contact: { eyebrow: '— الرد في أقل من 4 ساعات', title: 'تحدث مع مهندس جوال. لا مع موظف مبيعات.', body: 'نرد على واتساب في أقل من 4 ساعات.', whatsapp: 'واتساب', phone: 'مكالمة مباشرة', ai: 'اسأل مساعدنا الذكي ←' },
    stats: {
      eyebrow: '— أرقام حقيقية',
      items: [
        { value: '+20',  label: 'تطبيق جوال منشور على المتاجر' },
        { value: '4.7',  label: 'متوسط التقييم على المتجر' },
        { value: '< 4س', label: 'متوسط زمن الاستجابة' },
        { value: '0',    label: 'تطبيقات رفضتها Apple في التقديم الأول' },
      ],
    },
    pullQuote1: 'تطبيق جوال يجب أن يتكامل مع CIB و Edahabia و Yalidine وبنك الجزائر ليس تطبيقاً بسيطاً. إنه مشروع تكامل مُتنكر في صورة تطبيق.',
    pullQuote2: 'تقييم 4.7 على Play Store في الجزائر ليس تفصيلاً. إنه الفرق بين 1000 مستخدم و 100,000.',
    sections: [
      {
        heading: 'لماذا هندسة الجوال في الجزائر العاصمة مختلفة',
        body: [
          'إطلاق تطبيق جوال في الجزائر العاصمة ليس كإطلاقه في الدار البيضاء أو تونس أو دبي. ثلاثة أشياء تغير ملف المشروع: **المدفوعات**، **تنظيم بنك الجزائر**، و**التعامل ثنائي اللغة العربية-الفرنسية**.',
          'بالإضافة إلى قيود السوق نفسه: **هواتف المستخدمين الجزائريين أقدم في المتوسط**، **الاتصال غير متساوٍ** عبر الولايات.',
        ],
      },
      {
        heading: 'ما الذي نسلّمه في الجزائر العاصمة',
        body: [
          'مهامنا في الجوال في الجزائر العاصمة تركز على أربع فئات.',
          'الأولى: **تطبيقات الفينتك والبنوك**.',
          'الثانية: **تطبيقات الخدمات الإدارية**.',
          'الثالثة: **التطبيقات الداخلية للأعمال** للمجموعات الكبرى.',
          'الرابعة: **تطبيقات المستهلك** — التوصيل، التجزئة، الولاء.',
        ],
      },
      {
        heading: 'نفس الصرامة للبنك وللشركة الناشئة',
        body: [
          'أكثر عملائنا ظهوراً مؤسسة مالية. أكثر تطبيقاتنا تعقيداً تقنياً يتكامل مع خمسة أنظمة مصرفية مختلفة. لكن في نفس الوقت، نسلّم تطبيقاً **لشركة ناشئة من 8 أشخاص**.',
          '**نفس عملية التصميم، نفس دورة الاختبار، نفس التحقق من App Store/Play.**',
          'ما نُكيّفه هو **النطاق، لا الصرامة**.',
        ],
      },
      {
        heading: 'كيف نعمل مع الفاعلين في الجزائر العاصمة',
        body: [
          '**فريق الجوال لدينا في الجزائر العاصمة.** نعمل أصلياً (Swift, Kotlin) للتطبيقات الحرجة وعبر المنصات (Flutter, React Native) عندما يكون الخيار الاقتصادي الصحيح.',
          '**نتولى السلسلة بأكملها**: شهادات التوقيع، ملفات التزويد، لقطات الشاشة، أوصاف المتجر، إدارة التحديثات، الدعم بعد الإطلاق.',
          'للتطبيقات المالية، نعمل تحت اتفاقية عدم إفصاح وعلى بنية تحتية معزولة.',
        ],
      },
      {
        heading: 'تطبيقات تبقى في الإنتاج',
        body: [
          'العديد من التطبيقات التي سلّمناها منذ 2020 لا تزال في الإنتاج اليوم بعشرات الآلاف من المستخدمين النشطين. **تطبيق لا ينجو ثلاث سنوات لم يكن أبداً تطبيقاً — كان نموذجاً أولياً.**',
          'هذا يعنيك مباشرة: أنت تشتري الخبرة، لا التجريب.',
        ],
      },
    ],
    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات ذات صلة',
        items: [
          { key: 'mobile',               name: 'هندسة الجوال' },
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
          { key: 'product',              name: 'هندسة المنتج' },
        ],
      },
      insights: { label: 'دراسات ذات صلة', items: [{ key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' }] },
    },
    cta: { eyebrow: 'تحدث مع مهندس جوال مقره الجزائر العاصمة', title: 'هل لديك تطبيق لإطلاقه في الجزائر العاصمة؟', button: 'نموذج الاتصال' },
  },
};

export default function Page() {
  return (
    <LocationServiceLayout
      CONTENT={CONTENT}
      pageUrl="https://symloop.com/locations/alger/mobile/"
      cityName="Alger"
      cityKey="alger"
      serviceType="Mobile application engineering"
      schemaKeywords="developpement application mobile alger, app ios alger, app android alger, app fintech alger, flutter alger, react native alger, mobile engineering algiers, symloop mobile alger"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
