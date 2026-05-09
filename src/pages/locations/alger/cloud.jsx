// ============================================================================
// SYMLOOP — /locations/alger/cloud/
// City × service: Cloud + DevOps for Algiers institutions with sovereignty constraints.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocationServiceLayout from '../../../components/locations/LocationServiceLayout';

const CONTENT = {
  fr: {
    eyebrow:     'Alger · Capitale · Cloud & DevOps',
    publishedAt: 'Mis à jour Avril 2026',
    title:       'Cloud et DevOps à Alger — pour les systèmes qui ne peuvent pas tomber.',
    dek:         "Le seul atelier cloud basé à Alger qui livre des infrastructures de production pour les institutions de la capitale, avec les contraintes de souveraineté algérienne et la conformité loi 18-07.",
    meta: { one: 'Alger · Centre · Bab Ezzouar', two: 'AWS · Azure · GCP · On-prem', three: 'Siège Symloop' },
    intro: [
      "Si vous êtes responsable d'infrastructure dans une institution à Alger, vous avez probablement vécu **le dilemme cloud algérien** : aller sur AWS ou Azure et risquer de violer la loi 18-07, rester en on-premise et hériter d'une dette opérationnelle infinie, ou tenter une solution hybride mal maîtrisée. Aucun des trois ne marche bien.",
      "Cette page n'est pas un argumentaire vendor. C'est un portrait éditorial de **comment l'infrastructure cloud sérieuse fonctionne réellement dans la capitale algérienne en 2026**, et pourquoi nous sommes l'un des rares ateliers qui livre des architectures qui passent à la fois la production et la conformité algérienne.",
    ],
    contact: { eyebrow: '— Réponse en moins de 4 heures', title: "Parlez à un ingénieur cloud. Pas à un commercial.", body: "Nous répondons sur WhatsApp en moins de 4 heures pendant les heures ouvrables d'Alger.", whatsapp: 'WhatsApp', phone: 'Appel direct', ai: 'Demander à notre assistant IA →' },
    stats: {
      eyebrow: '— Chiffres réels',
      items: [
        { value: '99.97%', label: 'Uptime moyen sur les plateformes algéroises' },
        { value: '30+',    label: 'Migrations cloud livrées depuis Alger' },
        { value: '< 4h',   label: 'Temps de réponse moyen' },
        { value: '0',      label: "Incident de conformité loi 18-07 depuis 2022" },
      ],
    },
    pullQuote1: "Le cloud à Alger n'est pas un choix entre AWS et Azure. C'est un choix entre la performance et la conformité — et nous trouvons l'équilibre.",
    pullQuote2: "Une infrastructure qui tombe à 3h du matin un samedi est une infrastructure mal conçue. Pas mal opérée.",
    sections: [
      {
        heading: "Pourquoi le cloud à Alger est différent",
        body: [
          "Trois choses changent fondamentalement le profil d'un projet cloud à Alger : **la régulation sur les données personnelles** (loi 18-07), **l'absence de région cloud locale** chez les hyperscalers majeurs, et **les contraintes de paiement** en devises pour les institutions algériennes.",
          "S'ajoute une quatrième contrainte rarement discutée : **les compétences locales**. Une équipe DevOps senior à Alger est rare et chère. La plupart des institutions algéroises ont 1 ou 2 ingénieurs cloud capables, ce qui signifie que toute architecture livrée doit être **maintenable par une équipe interne réduite** — sans dépendre d'experts externes en permanence.",
        ],
      },
      {
        heading: "Ce que nous livrons à Alger",
        body: [
          "Nos engagements cloud à Alger se concentrent sur quatre catégories.",
          "Premier : **les migrations vers AWS, Azure ou GCP** avec une stratégie de souveraineté claire — quelles données vont en cloud public, quelles données restent on-premise, et comment les deux mondes communiquent.",
          "Deuxième : **les infrastructures hybrides** qui combinent cloud public pour le calcul et stockage on-premise pour les données sensibles. Pour les banques, ministères et grands groupes qui ne peuvent pas tout cloudifier.",
          "Troisième : **les pipelines CI/CD complets** — GitHub Actions, GitLab CI, Terraform, Kubernetes — avec déploiements zéro downtime et observabilité complète.",
          "Quatrième : **l'audit et le durcissement d'infrastructures existantes**. Quand une plateforme tourne mais que personne ne sait pourquoi elle tient.",
        ],
      },
      {
        heading: "La même rigueur pour la grande institution et la PME en croissance",
        body: [
          "Notre client le plus visible cette année est une institution publique algéroise qui gère plusieurs centaines de millions de transactions par mois. Notre projet le plus exigeant techniquement est une plateforme multi-région pour un client en MENA. Mais sur le même calendrier, nous montons une infrastructure cloud pour **une PME algéroise de 30 personnes** qui démarre sa croissance.",
          "C'est volontaire. Nous refusons l'idée qu'une PME mérite une infrastructure moins bien conçue qu'une institution. **Les mêmes standards de monitoring, les mêmes pipelines CI/CD, la même observabilité.** L'infrastructure est dimensionnée différemment, mais conçue avec la même rigueur.",
          "Ce que nous adaptons, c'est **le périmètre, pas la rigueur**. Une PME n'a pas besoin de Kubernetes multi-cluster. Elle a besoin d'une infrastructure qui scale quand elle grandit, qui ne tombe pas la nuit, et qu'elle peut maintenir.",
        ],
      },
      {
        heading: "Comment nous travaillons avec les institutions algéroises",
        body: [
          "**Notre équipe cloud est à Alger.** Nous comprenons les exigences de **la loi 18-07**, les procédures d'achat des institutions publiques, et les contraintes de paiement en devises pour les services cloud. Nous travaillons sous NDA dès le premier audit.",
          "Pour les institutions sensibles, nous proposons des architectures **hybrides ou on-premise** plutôt que de pousser systématiquement vers le cloud public. Nous avons l'expérience d'OpenStack, Proxmox, et VMware pour les déploiements souverains. Quand le cloud public est la bonne réponse, nous le disons. Quand il ne l'est pas, nous le disons aussi.",
          "Nous transférons toujours **la documentation complète** : runbooks d'opération, diagrammes d'architecture, procédures d'incident, plans de reprise. Une équipe interne peut prendre le relais sans nous, à n'importe quel moment.",
        ],
      },
      {
        heading: "L'infrastructure qui tient sept ans",
        body: [
          "Plusieurs des infrastructures que nous avons livrées à Alger tournent depuis cinq, six, sept ans **sans incident majeur**. C'est le test qui compte. Une infrastructure qui survit trois ans à des changements d'équipe, à des montées de version, à des pics de charge, à des pannes hardware — c'est une infrastructure bien conçue.",
          "Cela vous concerne directement : vous n'achetez pas un déploiement initial. Vous achetez **une architecture qui tient dans le temps**, sur laquelle votre équipe interne peut construire pendant des années.",
        ],
      },
    ],
    related: {
      eyebrow: 'Pour aller plus loin',
      services: {
        label: 'Disciplines liées',
        items: [
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'cybersecurity',        name: 'Cybersécurité' },
          { key: 'software-engineering', name: 'Ingénierie logicielle' },
        ],
      },
      insights: { label: 'Études liées', items: [{ key: 'cost', name: 'Le vrai coût du développement logiciel en Algérie' }] },
    },
    cta: { eyebrow: 'Parlez à un ingénieur cloud basé à Alger', title: "Vous avez une infrastructure à monter ou à auditer à Alger ? Décrivez votre situation en cinq minutes.", button: 'Formulaire de contact' },
  },

  en: {
    eyebrow:     'Algiers · Capital · Cloud & DevOps',
    publishedAt: 'Updated April 2026',
    title:       'Cloud and DevOps in Algiers — for systems that cannot fail.',
    dek:         "The only cloud workshop headquartered in Algiers that ships production infrastructure for capital institutions, with Algerian sovereignty constraints and Law 18-07 compliance built in.",
    meta: { one: 'Algiers · Center · Bab Ezzouar', two: 'AWS · Azure · GCP · On-prem', three: 'Symloop HQ' },
    intro: [
      "If you run infrastructure for an Algiers institution, you have probably faced **the Algerian cloud dilemma**: go on AWS or Azure and risk violating Law 18-07, stay on-premise and inherit infinite operational debt, or try a poorly-mastered hybrid solution. None of the three works well.",
      'This page is not a vendor pitch. It is an editorial portrait of **how serious cloud infrastructure actually works in the Algerian capital in 2026**, and why we are one of the few workshops that ships architectures that pass both production and Algerian compliance.',
    ],
    contact: { eyebrow: '— Reply within 4 hours', title: 'Talk to a cloud engineer. Not a salesperson.', body: 'We reply on WhatsApp within 4 hours during Algiers business hours.', whatsapp: 'WhatsApp', phone: 'Direct call', ai: 'Ask our AI assistant →' },
    stats: {
      eyebrow: '— Real numbers',
      items: [
        { value: '99.97%', label: 'Average uptime on Algiers platforms' },
        { value: '30+',    label: 'Cloud migrations delivered from Algiers' },
        { value: '< 4h',   label: 'Average response time' },
        { value: '0',      label: 'Law 18-07 compliance incidents since 2022' },
      ],
    },
    pullQuote1: 'Cloud in Algiers is not a choice between AWS and Azure. It is a choice between performance and compliance — and we find the balance.',
    pullQuote2: 'An infrastructure that goes down at 3 AM on a Saturday is a badly designed infrastructure. Not a badly operated one.',
    sections: [
      {
        heading: 'Why cloud in Algiers is different',
        body: [
          'Three things fundamentally change the profile of a cloud project in Algiers: **personal data regulation** (Law 18-07), **the absence of a local cloud region** at major hyperscalers, and **payment constraints** in foreign currency for Algerian institutions.',
          'A fourth constraint rarely discussed: **local skills**. A senior DevOps team in Algiers is rare and expensive. Any architecture delivered must be **maintainable by a small internal team** — without depending on external experts permanently.',
        ],
      },
      {
        heading: 'What we deliver in Algiers',
        body: [
          'Our cloud engagements in Algiers focus on four categories.',
          'First: **migrations to AWS, Azure, or GCP** with a clear sovereignty strategy — what data goes to public cloud, what stays on-premise, how the two worlds communicate.',
          'Second: **hybrid infrastructures** combining public cloud for compute and on-premise storage for sensitive data. For banks, ministries, and large groups that cannot cloudify everything.',
          'Third: **complete CI/CD pipelines** — GitHub Actions, GitLab CI, Terraform, Kubernetes — with zero-downtime deployments and full observability.',
          'Fourth: **audits and hardening of existing infrastructure**. When a platform runs but nobody knows why it holds.',
        ],
      },
      {
        heading: 'The same rigor for the large institution and the growing SME',
        body: [
          'Our most visible client this year is an Algiers public institution managing several hundred million transactions per month. But on the same calendar, we are setting up cloud infrastructure for **a 30-person Algiers SME** starting its growth.',
          'This is intentional. **The same monitoring standards, the same CI/CD pipelines, the same observability.** Infrastructure sized differently, designed with the same rigor.',
          'What we adapt is **scope, not rigor**. An SME does not need multi-cluster Kubernetes. It needs an infrastructure that scales when it grows, does not fall over at night, and that it can maintain.',
        ],
      },
      {
        heading: 'How we work with Algiers institutions',
        body: [
          '**Our cloud team is in Algiers.** We understand **Law 18-07** requirements, public institution procurement procedures, and foreign-currency payment constraints for cloud services.',
          'For sensitive institutions, we propose **hybrid or on-premise** architectures rather than pushing systematically toward public cloud. We have OpenStack, Proxmox, and VMware experience for sovereign deployments.',
          'We always transfer **complete documentation**: operation runbooks, architecture diagrams, incident procedures, recovery plans. An internal team can take over without us at any time.',
        ],
      },
      {
        heading: 'Infrastructure that lasts seven years',
        body: [
          'Several of the infrastructures we delivered in Algiers have been running for five, six, seven years **without major incident**. An infrastructure that survives three years of team changes, version upgrades, load spikes, hardware failures — that is a well-designed infrastructure.',
          'This concerns you directly: you are not buying an initial deployment. You are buying **an architecture that holds up over time**.',
        ],
      },
    ],
    related: {
      eyebrow: 'Going deeper',
      services: {
        label: 'Related disciplines',
        items: [
          { key: 'cloud',                name: 'Cloud & DevOps' },
          { key: 'cybersecurity',        name: 'Cybersecurity' },
          { key: 'software-engineering', name: 'Software Engineering' },
        ],
      },
      insights: { label: 'Related insights', items: [{ key: 'cost', name: 'The real cost of building software in Algeria' }] },
    },
    cta: { eyebrow: 'Talk to a cloud engineer based in Algiers', title: 'Have an infrastructure to set up or audit in Algiers? Describe your situation in five minutes.', button: 'Contact form' },
  },

  ar: {
    eyebrow:     'الجزائر العاصمة · العاصمة · السحابة و DevOps',
    publishedAt: 'محدّث أبريل 2026',
    title:       'السحابة و DevOps في الجزائر العاصمة — لأنظمة لا يمكنها أن تسقط.',
    dek:         'ورشة السحابة الوحيدة التي مقرها الجزائر العاصمة وتسلّم بنية تحتية إنتاج لمؤسسات العاصمة، مع قيود السيادة الجزائرية والامتثال للقانون 18-07.',
    meta: { one: 'الجزائر العاصمة · الوسط · باب الزوار', two: 'AWS · Azure · GCP · داخلي', three: 'مقر سيملوب' },
    intro: [
      'إذا كنت تدير البنية التحتية لمؤسسة في الجزائر العاصمة، فمن المحتمل أنك واجهت **معضلة السحابة الجزائرية**: الذهاب إلى AWS أو Azure والمخاطرة بانتهاك القانون 18-07، أو البقاء داخلياً ووراثة دين تشغيلي لا نهائي، أو محاولة حل هجين سيئ الإتقان.',
      'هذه الصفحة ليست عرضاً تجارياً. إنها صورة تحريرية **لكيفية عمل البنية التحتية السحابية الجادة فعلاً في العاصمة الجزائرية في 2026**.',
    ],
    contact: { eyebrow: '— الرد في أقل من 4 ساعات', title: 'تحدث مع مهندس سحابة. لا مع موظف مبيعات.', body: 'نرد على واتساب في أقل من 4 ساعات.', whatsapp: 'واتساب', phone: 'مكالمة مباشرة', ai: 'اسأل مساعدنا الذكي ←' },
    stats: {
      eyebrow: '— أرقام حقيقية',
      items: [
        { value: '99.97%', label: 'متوسط وقت التشغيل على المنصات في الجزائر العاصمة' },
        { value: '+30',    label: 'هجرة سحابية تم تسليمها من الجزائر العاصمة' },
        { value: '< 4س',   label: 'متوسط زمن الاستجابة' },
        { value: '0',      label: 'حوادث امتثال للقانون 18-07 منذ 2022' },
      ],
    },
    pullQuote1: 'السحابة في الجزائر العاصمة ليست خياراً بين AWS و Azure. إنها خيار بين الأداء والامتثال — ونحن نجد التوازن.',
    pullQuote2: 'بنية تحتية تسقط في الساعة 3 صباحاً يوم السبت هي بنية تحتية مصممة بشكل سيء. ليست مُشغَّلة بشكل سيء.',
    sections: [
      {
        heading: 'لماذا السحابة في الجزائر العاصمة مختلفة',
        body: [
          'ثلاثة أشياء تغير ملف مشروع سحابي في الجزائر العاصمة: **تنظيم البيانات الشخصية** (القانون 18-07)، **غياب منطقة سحابية محلية** لدى المزودين الكبار، و**قيود الدفع** بالعملات الأجنبية.',
          'القيد الرابع: **المهارات المحلية**. أي بنية تحتية يجب أن تكون **قابلة للصيانة من قبل فريق داخلي صغير**.',
        ],
      },
      {
        heading: 'ما الذي نسلّمه في الجزائر العاصمة',
        body: [
          'مهامنا السحابية في الجزائر العاصمة تركز على أربع فئات.',
          'الأولى: **الهجرات إلى AWS أو Azure أو GCP** مع استراتيجية سيادة واضحة.',
          'الثانية: **البنى التحتية الهجينة** التي تجمع بين السحابة العامة للحساب والتخزين الداخلي للبيانات الحساسة.',
          'الثالثة: **خطوط أنابيب CI/CD الكاملة** — GitHub Actions، GitLab CI، Terraform، Kubernetes.',
          'الرابعة: **التدقيق والتقوية للبنى التحتية الموجودة**.',
        ],
      },
      {
        heading: 'نفس الصرامة للمؤسسة الكبيرة وللشركة المتنامية',
        body: [
          'أكثر عملائنا ظهوراً مؤسسة عامة في الجزائر العاصمة. لكن في نفس الوقت، نُعدّ بنية تحتية سحابية **لشركة جزائرية من 30 شخصاً**.',
          '**نفس معايير المراقبة، نفس خطوط CI/CD، نفس قابلية المراقبة.**',
          'ما نُكيّفه هو **النطاق، لا الصرامة**.',
        ],
      },
      {
        heading: 'كيف نعمل مع المؤسسات في الجزائر العاصمة',
        body: [
          '**فريق السحابة لدينا في الجزائر العاصمة.** نفهم متطلبات **القانون 18-07**.',
          'للمؤسسات الحساسة، نقترح بنى **هجينة أو داخلية** بدلاً من الدفع نظامياً نحو السحابة العامة.',
          'ننقل دائماً **الوثائق الكاملة**: كتيبات التشغيل، رسومات البنية، إجراءات الحوادث، خطط التعافي.',
        ],
      },
      {
        heading: 'بنية تحتية تستمر سبع سنوات',
        body: [
          'العديد من البنى التحتية التي سلّمناها تعمل منذ خمس أو ست أو سبع سنوات **بدون حادث كبير**.',
          'هذا يعنيك مباشرة: أنت لا تشتري نشراً أولياً. أنت تشتري **هندسة تصمد عبر الزمن**.',
        ],
      },
    ],
    related: {
      eyebrow: 'للتعمق أكثر',
      services: {
        label: 'تخصصات ذات صلة',
        items: [
          { key: 'cloud',                name: 'السحابة و DevOps' },
          { key: 'cybersecurity',        name: 'الأمن السيبراني' },
          { key: 'software-engineering', name: 'هندسة البرمجيات' },
        ],
      },
      insights: { label: 'دراسات ذات صلة', items: [{ key: 'cost', name: 'التكلفة الحقيقية لبناء البرمجيات في الجزائر' }] },
    },
    cta: { eyebrow: 'تحدث مع مهندس سحابة مقره الجزائر العاصمة', title: 'هل لديك بنية تحتية لإعدادها أو تدقيقها في الجزائر العاصمة؟', button: 'نموذج الاتصال' },
  },
};

export default function Page() {
  return (
    <LocationServiceLayout
      CONTENT={CONTENT}
      pageUrl="https://symloop.com/locations/alger/cloud/"
      cityName="Alger"
      cityKey="alger"
      serviceType="Cloud infrastructure and DevOps"
      schemaKeywords="cloud alger, devops alger, aws alger, azure alger, kubernetes alger, terraform alger, infrastructure cloud algerie, migration cloud alger, symloop cloud algiers"
    />
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['common'])) } };
}
