// ============================================================================
// SYMLOOP — /locations/alger/product/
// City × service: Product engineering for Algiers startups and large enterprises.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocationServiceLayout from '../../../components/locations/LocationServiceLayout';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale · Ingénierie produit',
    publishedAt: 'Mis à jour Avril 2026',
    title:       "L'ingénierie produit à Alger — du premier user au premier client payant.",
    dek:         "Le seul atelier d'ingénierie produit basé à Alger qui livre des SaaS, des marketplaces et des plateformes complètes pour les startups et les grands groupes de la capitale. Discover, design, build, ship — comme un seul atelier au lieu de cinq prestataires.",
    meta: { one: 'Alger · Centre · Bab Ezzouar', two: 'SaaS · Marketplace · Mobile · Web', three: 'Siège Symloop' },
    intro: [
      "Si vous êtes fondateur d'une startup à Alger ou directeur produit dans un grand groupe algérois, vous avez probablement vécu **le cauchemar de coordonner cinq prestataires différents** — un designer freelance, un dev front, un dev back, un DevOps, un QA — qui ne se parlent pas et que personne ne synchronise. Le résultat est presque toujours le même : retard, dépassement, et un produit qui ne ressemble à rien.",
      "Cette page n'est pas un argumentaire. C'est un portrait éditorial de **comment l'ingénierie produit sérieuse fonctionne réellement dans la capitale algérienne en 2026**, et pourquoi un atelier intégré qui prend en charge le cycle complet livre dix fois mieux qu'une coordination d'externes.",
    ],
    contact: { eyebrow: '— Réponse en moins de 4 heures', title: "Parlez à un product manager. Pas à un commercial.", body: "Nous répondons sur WhatsApp en moins de 4 heures pendant les heures ouvrables d'Alger.", whatsapp: 'WhatsApp', phone: 'Appel direct', ai: 'Demander à notre assistant IA →' },
    stats: {
      eyebrow: '— Chiffres réels',
      items: [
        { value: '15+',  label: 'Produits lancés depuis Alger' },
        { value: '12-16', label: 'Semaines de la discovery au lancement v1' },
        { value: '< 4h', label: 'Temps de réponse moyen' },
        { value: '100%', label: 'Code et IP transférés au client' },
      ],
    },
    pullQuote1: "L'ingénierie produit à Alger n'est pas un problème de tech. C'est un problème de coordination — et c'est exactement ce qu'un atelier intégré résout.",
    pullQuote2: "Un produit lancé en 14 semaines bat un produit lancé en 9 mois. Toujours. Surtout dans le marché algérien.",
    sections: [
      {
        heading: "Pourquoi l'ingénierie produit à Alger est différente",
        body: [
          "Lancer un produit à Alger n'est pas comme lancer un produit à Paris ou San Francisco. Trois choses changent fondamentalement le profil : **les talents produits sont rares** (moins de 50 product managers seniors avec expérience SaaS dans toute l'Algérie), **les compétences sont fragmentées** (les bons designers, devs et DevOps n'appartiennent pas aux mêmes équipes), et **les délais de lancement comptent énormément** (le marché récompense la vitesse).",
          "Dans ce contexte, **l'option « équipe interne complète » n'existe pas pour la majorité des entreprises algéroises**. Recruter un produit manager + designer + 3 devs + DevOps + QA prend 12 mois minimum et coûte plus que tout le projet. C'est pourquoi un atelier intégré qui livre la stack complète est le seul modèle qui marche pour la majorité des produits algérois.",
        ],
      },
      {
        heading: "Ce que nous livrons à Alger",
        body: [
          "Nos engagements produit à Alger se concentrent sur cinq types de produits.",
          "Premier : **les SaaS B2B multi-tenant**. Pour les startups algéroises qui veulent vendre leur logiciel à plusieurs clients depuis le jour 1. Architecture multi-tenant, gestion des rôles, facturation récurrente, dashboards admin.",
          "Deuxième : **les marketplaces multi-faces**. Mise en relation entre offreurs et demandeurs, paiements, évaluations, support, modération. Pour les nouvelles places de marché sectorielles algériennes.",
          "Troisième : **les apps mobiles natives ou cross-platform** avec backend complet. Pour les fintechs, les services à la demande, les outils B2B en mobilité.",
          "Quatrième : **les outils internes pour grands groupes**. Pour les directions qui veulent un système métier sur mesure plutôt qu'un Odoo bricolé. Workflows, formulaires, tableaux de bord, intégrations.",
          "Cinquième : **les plateformes web grand public**. Pour les marques algériennes qui ont besoin d'un produit digital qui passe à l'échelle, pas d'un site WordPress.",
        ],
      },
      {
        heading: "La même rigueur pour la startup en pré-seed et le grand groupe",
        body: [
          "Notre client le plus visible cette année est un grand groupe algérois qui digitalise un département de 200 personnes. Notre projet le plus exigeant techniquement intègre cinq systèmes existants. Mais sur le même calendrier, nous livrons un MVP SaaS pour **deux fondateurs algérois** qui n'ont encore aucun client.",
          "C'est volontaire. Nous refusons l'idée qu'une startup en pré-seed mérite un produit moins bien conçu qu'un grand groupe. **Le même process discovery, le même design system, les mêmes ingénieurs.** L'échelle est différente, mais la qualité est la même.",
          "Ce que nous adaptons, c'est **le périmètre, pas la rigueur**. Une startup en pré-seed n'a pas besoin de 80 fonctionnalités. Elle a besoin des 5 fonctionnalités qui vont valider son hypothèse business.",
        ],
      },
      {
        heading: "Comment nous travaillons avec les acteurs algérois",
        body: [
          "**Notre équipe produit complète est à Alger.** Product manager, designer, ingénieurs, DevOps, QA — dans le même bureau, sur la même mission, avec la même responsabilité de livraison. Pas une équipe d'externalisation qui se passe les tickets.",
          "Notre méthode reste la même que pour nos missions internationales : **discovery de 1 à 2 semaines** (interviews utilisateurs, validation d'hypothèses, cartographie de parcours), **design en 1 à 2 semaines** (wireframes, prototypes interactifs, design system), **build en 6 à 10 semaines** (sprints courts avec démos hebdomadaires), **beta privée**, **lancement public**, **itération post-lancement** sur la base d'analytics réels.",
          "Pour les startups, nous proposons des modalités flexibles : prix fixe par phase, contrats courts, transparence totale sur l'avancement. Pour les grands groupes, nous travaillons sous contrat avec jalons mensuels et facturation contre livrable. **Aucune mission ne se termine sans transfert complet de code, design et propriété intellectuelle.**",
        ],
      },
      {
        heading: "Les produits qui survivent",
        body: [
          "Plusieurs des produits que nous avons lancés à Alger entre 2021 et 2024 sont toujours en activité aujourd'hui, avec des utilisateurs payants et des équipes internes qui les maintiennent. **C'est le seul test qui compte.** Un produit qui meurt six mois après le lancement n'a jamais été un produit — c'était une démo.",
          "Cela vous concerne directement : vous ne nous achetez pas une livraison initiale. Vous achetez **un produit qui survit à votre première année de croissance**, avec un code que votre équipe interne peut reprendre, un design system qui scale, et une infrastructure qui ne craque pas au premier pic de trafic.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines liées',
        items: [
          { key: 'product',              name: 'Ingénierie produit' },
          { key: 'mobile',               name: 'Ingénierie Mobile' },
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
        ],
      },
      insights: {
        label: 'Études liées',
        items: [
          { key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' },
          { key: 'erp',  name: "ERP sur mesure pour PME algériennes — au-delà d'Odoo" },
        ],
      },
    },
    cta: { eyebrow: 'Parlez à un product manager basé à Alger', title: "Vous avez un produit à lancer à Alger en moins de 4 mois ? Décrivez-le en cinq minutes.", button: 'Formulaire de contact' },
  },

  en: {
    eyebrow:     'Algiers · Capital · Product Engineering',
    publishedAt: 'Updated April 2026',
    title:       'Product engineering in Algiers — from first user to first paying customer.',
    dek:         "The only product engineering workshop headquartered in Algiers that ships SaaS, marketplaces, and complete platforms for the capital's startups and large groups. Discover, design, build, ship — as one workshop instead of five vendors.",
    meta: { one: 'Algiers · Center · Bab Ezzouar', two: 'SaaS · Marketplace · Mobile · Web', three: 'Symloop HQ' },
    intro: [
      "If you are a founder of an Algiers startup or a product director at a large Algiers group, you have probably lived through **the nightmare of coordinating five different vendors** — a freelance designer, a front-end dev, a back-end dev, a DevOps, a QA — who do not talk to each other and that nobody synchronizes. The result is almost always the same: late, over budget, and a product that does not look like anything.",
      'This page is not a pitch. It is an editorial portrait of **how serious product engineering actually works in the Algerian capital in 2026**, and why an integrated workshop that owns the full cycle ships ten times better than a coordination of externals.',
    ],
    contact: { eyebrow: '— Reply within 4 hours', title: 'Talk to a product manager. Not a salesperson.', body: 'We reply on WhatsApp within 4 hours during Algiers business hours.', whatsapp: 'WhatsApp', phone: 'Direct call', ai: 'Ask our AI assistant →' },
    stats: {
      eyebrow: '— Real numbers',
      items: [
        { value: '15+',   label: 'Products shipped from Algiers' },
        { value: '12-16', label: 'Weeks from discovery to v1 launch' },
        { value: '< 4h',  label: 'Average response time' },
        { value: '100%',  label: 'Code and IP transferred to client' },
      ],
    },
    pullQuote1: 'Product engineering in Algiers is not a tech problem. It is a coordination problem — and that is exactly what an integrated workshop solves.',
    pullQuote2: 'A product launched in 14 weeks beats a product launched in 9 months. Always. Especially in the Algerian market.',
    sections: [
      {
        heading: 'Why product engineering in Algiers is different',
        body: [
          'Launching a product in Algiers is not like launching one in Paris or San Francisco. Three things fundamentally change the profile: **product talent is rare** (fewer than 50 senior PMs with SaaS experience in all of Algeria), **skills are fragmented** (good designers, devs, and DevOps do not belong to the same teams), and **time-to-launch matters enormously** (the market rewards speed).',
          'In this context, **the "full internal team" option does not exist for the majority of Algerian companies**. Hiring a PM + designer + 3 devs + DevOps + QA takes 12 months minimum and costs more than the entire project.',
        ],
      },
      {
        heading: 'What we deliver in Algiers',
        body: [
          'Our product engagements in Algiers focus on five product types.',
          'First: **multi-tenant B2B SaaS**. Multi-tenant architecture, role management, recurring billing, admin dashboards.',
          'Second: **multi-sided marketplaces**. Connecting suppliers and buyers, payments, ratings, support, moderation.',
          'Third: **native or cross-platform mobile apps** with full backend.',
          'Fourth: **internal tools for large groups**. For directors who want a custom business system instead of a hacked-together Odoo.',
          'Fifth: **consumer web platforms**. For Algerian brands that need a digital product that scales.',
        ],
      },
      {
        heading: 'The same rigor for the pre-seed startup and the large group',
        body: [
          "Our most visible client this year is a large Algiers group digitizing a 200-person department. But on the same calendar, we are delivering a SaaS MVP for **two Algiers founders** who have no customers yet.",
          '**The same discovery process, the same design system, the same engineers.** Scale is different, quality is the same.',
          'What we adapt is **scope, not rigor**. A pre-seed startup does not need 80 features. It needs the 5 features that will validate its business hypothesis.',
        ],
      },
      {
        heading: 'How we work with Algiers stakeholders',
        body: [
          '**Our complete product team is in Algiers.** Product manager, designer, engineers, DevOps, QA — in the same office, on the same engagement, with the same delivery accountability.',
          'Our method stays the same as for our international engagements: **1-2 weeks of discovery**, **1-2 weeks of design**, **6-10 weeks of build**, **private beta**, **public launch**, **post-launch iteration** on real analytics.',
          'For startups, we offer flexible terms. For large groups, we work under contract with monthly milestones. **No engagement ends without complete transfer of code, design, and IP.**',
        ],
      },
      {
        heading: 'Products that survive',
        body: [
          'Several of the products we launched in Algiers between 2021 and 2024 are still active today, with paying users and internal teams maintaining them. **That is the only test that matters.** A product that dies six months after launch was never a product — it was a demo.',
          'This concerns you directly: you are not buying us an initial delivery. You are buying **a product that survives your first year of growth**.',
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Related disciplines',
        items: [
          { key: 'product',              name: 'Product Engineering' },
          { key: 'mobile',               name: 'Mobile Engineering' },
          { key: 'software-engineering', name: 'Software Engineering' },
        ],
      },
      insights: {
        label: 'Related insights',
        items: [
          { key: 'cost', name: 'The real cost of building software in Algeria' },
          { key: 'erp',  name: 'Custom ERP for Algerian SMEs — beyond Odoo' },
        ],
      },
    },
    cta: { eyebrow: 'Talk to a product manager based in Algiers', title: 'Have a product to launch in Algiers in less than 4 months? Describe it in five minutes.', button: 'Contact form' },
  },

  ar: {
    eyebrow:     'الجزائر العاصمة · العاصمة · هندسة المنتج',
    publishedAt: 'محدّث أبريل 2026',
    title:       'هندسة المنتج في الجزائر العاصمة — من أول مستخدم إلى أول عميل يدفع.',
    dek:         'ورشة هندسة المنتج الوحيدة التي مقرها الجزائر العاصمة وتسلّم SaaS وأسواقاً ومنصات كاملة للشركات الناشئة والمجموعات الكبرى في العاصمة.',
    meta: { one: 'الجزائر العاصمة · الوسط · باب الزوار', two: 'SaaS · سوق · جوال · ويب', three: 'مقر سيملوب' },
    intro: [
      'إذا كنت مؤسس شركة ناشئة في الجزائر العاصمة أو مدير منتج في مجموعة كبيرة، فمن المحتمل أنك عشت **كابوس تنسيق خمسة مزودين مختلفين** لا يتحدثون مع بعضهم. النتيجة دائماً نفسها: تأخير، تجاوز للميزانية، ومنتج لا يشبه أي شيء.',
      'هذه الصفحة ليست عرضاً تجارياً. إنها صورة **لكيفية عمل هندسة المنتج الجادة فعلاً في العاصمة الجزائرية في 2026**.',
    ],
    contact: { eyebrow: '— الرد في أقل من 4 ساعات', title: 'تحدث مع مدير منتج. لا مع موظف مبيعات.', body: 'نرد على واتساب في أقل من 4 ساعات.', whatsapp: 'واتساب', phone: 'مكالمة مباشرة', ai: 'اسأل مساعدنا الذكي ←' },
    stats: {
      eyebrow: '— أرقام حقيقية',
      items: [
        { value: '+15',   label: 'منتج تم إطلاقه من الجزائر العاصمة' },
        { value: '12-16', label: 'أسبوعاً من الاستكشاف إلى إطلاق v1' },
        { value: '< 4س',  label: 'متوسط زمن الاستجابة' },
        { value: '100%',  label: 'الشيفرة والملكية الفكرية تُنقل إلى العميل' },
      ],
    },
    pullQuote1: 'هندسة المنتج في الجزائر العاصمة ليست مشكلة تقنية. إنها مشكلة تنسيق — وهذا بالضبط ما تحله ورشة متكاملة.',
    pullQuote2: 'منتج يُطلَق في 14 أسبوعاً يتفوق على منتج يُطلَق في 9 أشهر. دائماً. خاصة في السوق الجزائرية.',
    sections: [
      {
        heading: 'لماذا هندسة المنتج في الجزائر العاصمة مختلفة',
        body: [
          'إطلاق منتج في الجزائر العاصمة ليس كإطلاقه في باريس أو سان فرانسيسكو. ثلاثة أشياء تغير الملف: **مواهب المنتج نادرة**، **المهارات مجزأة**، و**سرعة الإطلاق تهم بشكل كبير**.',
          'في هذا السياق، **خيار "الفريق الداخلي الكامل" لا يوجد لمعظم الشركات الجزائرية**. توظيف PM + مصمم + 3 مطورين + DevOps + QA يستغرق 12 شهراً على الأقل.',
        ],
      },
      {
        heading: 'ما الذي نسلّمه في الجزائر العاصمة',
        body: [
          'مهامنا في المنتج تركز على خمسة أنواع.',
          'الأول: **SaaS B2B متعدد المستأجرين**.',
          'الثاني: **الأسواق متعددة الأوجه**.',
          'الثالث: **تطبيقات الجوال** الأصلية أو متعددة المنصات.',
          'الرابع: **الأدوات الداخلية للمجموعات الكبرى**.',
          'الخامس: **منصات الويب للمستهلكين**.',
        ],
      },
      {
        heading: 'نفس الصرامة للشركة الناشئة وللمجموعة الكبيرة',
        body: [
          'أكثر عملائنا ظهوراً مجموعة كبيرة في الجزائر العاصمة. لكن في نفس الوقت، نسلّم MVP لـ **مؤسسين جزائريين** ليس لديهم عملاء بعد.',
          '**نفس عملية الاستكشاف، نفس نظام التصميم، نفس المهندسين.**',
          'ما نُكيّفه هو **النطاق، لا الصرامة**.',
        ],
      },
      {
        heading: 'كيف نعمل مع الفاعلين في الجزائر العاصمة',
        body: [
          '**فريق المنتج الكامل لدينا في الجزائر العاصمة.** مدير منتج، مصمم، مهندسون، DevOps، QA — في نفس المكتب.',
          'منهجنا: **1-2 أسبوع من الاستكشاف**، **1-2 أسبوع من التصميم**، **6-10 أسابيع من البناء**، **بيتا خاصة**، **إطلاق عام**.',
          'للشركات الناشئة، نقدم شروطاً مرنة. للمجموعات الكبرى، نعمل بعقود ذات معالم شهرية. **لا تنتهي مهمة بدون نقل كامل للشيفرة والتصميم والملكية الفكرية.**',
        ],
      },
      {
        heading: 'منتجات تنجو',
        body: [
          'العديد من المنتجات التي أطلقناها بين 2021 و 2024 لا تزال نشطة اليوم. **هذا الاختبار الوحيد الذي يهم.**',
          'هذا يعنيك مباشرة: أنت تشتري **منتجاً ينجو من سنتك الأولى من النمو**.',
        ],
      },
    ],
    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات ذات صلة',
        items: [
          { key: 'product',              name: 'هندسة المنتج' },
          { key: 'mobile',               name: 'هندسة الجوال' },
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
        ],
      },
      insights: {
        label: 'دراسات ذات صلة',
        items: [
          { key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' },
          { key: 'erp',  name: 'تخطيط موارد المؤسسات المخصص للشركات الجزائرية — ما بعد أودو' },
        ],
      },
    },
    cta: { eyebrow: 'تحدث مع مدير منتج مقره الجزائر العاصمة', title: 'هل لديك منتج لإطلاقه في الجزائر العاصمة في أقل من 4 أشهر؟', button: 'نموذج الاتصال' },
  },
};

export default function Page() {
  return (
    <LocationServiceLayout
      CONTENT={CONTENT}
      pageUrl="https://symloop.com/locations/alger/product/"
      cityName="Alger"
      cityKey="alger"
      serviceType="Product engineering and SaaS development"
      schemaKeywords="ingenierie produit alger, product engineering algiers, saas alger, mvp alger, marketplace alger, startup alger, product manager alger, symloop product algiers"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
