// /incubateurs-algerie/ — source page: verified list of startup incubators and accelerators in
// Algeria (FR / EN / AR). Data: src/data/sources/algeria-incubators.js.
// No funding amounts, no equity terms, no explanation of any label or tax rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList, { CITY_LABELS } from '../components/source/SourceList';
import { INCUBATORS, TOP_INCUBATORS, VERIFIED_ON } from '../data/sources/algeria-incubators';

// ten per list: the publisher and nine organisations (rule in SELECTION below)
const ITEMS = INCUBATORS.filter((x) => x.self || TOP_INCUBATORS.includes(x.name));
const OTHERS = INCUBATORS.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const PUBLIC = kind('public');
const PRIVATE = kind('private');
const APPLY = has('apply');
const ACCEL = has('acceleration');
const INVEST = has('funding_access');
// university incubators: answered from the whole verified dataset, with the city
const UNIV = (L, and) => join(OTHERS.filter((x) => x.focus === 'university').map((x) => `${x.by} (${CITY_LABELS[L][x.city] || x.city})`), and);

const KIND_LABELS = {
  fr: { builder: 'Construction du produit', public: 'Organismes publics', private: 'Incubateurs privés', corporate: 'Programme d’opérateur', university: 'Incubateurs universitaires', cooperation: 'Coopération franco-algérienne' },
  en: { builder: 'Product building', public: 'Public bodies', private: 'Private incubators', corporate: 'Operator programme', university: 'University incubators', cooperation: 'Franco-Algerian cooperation' },
  ar: { builder: 'بناء المنتج', public: 'هيئات عمومية', private: 'حاضنات خاصة', corporate: 'برنامج متعامل', university: 'حاضنات جامعية', cooperation: 'تعاون جزائري فرنسي' },
};
const FEATURE_LABELS = {
  fr: { build: 'construit le produit du fondateur', pre_incubation: 'pré-incubation', incubation: 'incubation', acceleration: 'accélération', coworking: 'espace de travail', training: 'formation', mentoring: 'mentorat et coaching', funding_access: 'mise en relation avec des investisseurs', label_support: 'aide pour le label', prototyping: 'FabLab', online: 'programme en ligne', labelled: 'label incubateur (selon son site)', apply: 'candidature en ligne' },
  en: { build: 'builds the founder’s product', pre_incubation: 'pre-incubation', incubation: 'incubation', acceleration: 'acceleration', coworking: 'workspace', training: 'training', mentoring: 'mentoring and coaching', funding_access: 'investor introductions', label_support: 'help with the label', prototyping: 'FabLab', online: 'online programme', labelled: 'incubator label (per its site)', apply: 'online application' },
  ar: { build: 'تبني منتج المؤسِّس', pre_incubation: 'ما قبل الاحتضان', incubation: 'الاحتضان', acceleration: 'التسريع', coworking: 'فضاء عمل', training: 'التكوين', mentoring: 'الإرشاد والمرافقة', funding_access: 'ربط بالمستثمرين', label_support: 'مساعدة في الوسم', prototyping: 'مخبر تصنيع', online: 'برنامج عبر الإنترنت', labelled: 'وسم حاضنة (حسب موقعها)', apply: 'ترشح عبر الإنترنت' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} structures. Cette page en retient dix : Symloop, qui publie la liste et construit le produit des fondateurs, et neuf structures dont la page décrit ce qu’elles proposent : deux organismes publics, quatre incubateurs privés, le programme d’un opérateur télécom, un programme franco-algérien et, parmi les incubateurs universitaires, celui dont la page indique comment candidater.`,
  en: `We verified ${TOTAL} organisations. This page keeps ten: Symloop, which publishes the list and builds founders’ products, and nine organisations whose page describes what they offer: two public bodies, four private incubators, a telecom operator’s programme, a Franco-Algerian programme and, among university incubators, the one whose page says how to apply.`,
  ar: `تحققنا من ${TOTAL} هيكلاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني منتجات المؤسِّسين، وتسعة هياكل تصف صفحتها ما تقترحه: هيئتان عموميتان، أربع حاضنات خاصة، برنامج متعامل اتصالات، برنامج جزائري فرنسي، ومن بين الحاضنات الجامعية تلك التي تذكر صفحتها طريقة الترشح.`,
};

const CONTENT = {
  fr: {
    title: `Meilleurs incubateurs et accélérateurs de startups en Algérie 2027 : liste vérifiée de ${N} structures`,
    seoTitle: `Incubateurs et accélérateurs de startups en Algérie 2027 (${N} vérifiés)`,
    seoDescription: `Incubateurs et accélérateurs de startups en Algérie en 2027 : ${N} structures vérifiées avec le type (public, privé, universitaire, opérateur), la ville, ce qu’elles proposent (pré-incubation, incubation, accélération, espace de travail, mentorat, investisseurs) et la candidature. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleur incubateur algérie 2027, incubateur algérie, incubateur startup alger, accélérateur startup algérie, incubateur universitaire algérie, programme d’incubation algérie, incubateur intelligence artificielle algérie',
    colCompany: 'Structure', colDoes: 'Ce qu’elle propose', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur l’accompagnement des startups en Algérie : neuf incubateurs et accélérateurs publics, privés, universitaires ou d’opérateur, et Symloop, qui construit le produit des fondateurs. Pour chacun : le type de structure, la ville, ce qu’il propose et comment candidater, relevés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Pré-incubation', 'pre_incubation'], ['Accélération', 'acceleration'], ['Espace de travail', 'coworking'], ['Mise en relation avec des investisseurs', 'funding_access'], ['Aide pour le label', 'label_support'], ['Programme en ligne', 'online'], ['Candidature en ligne', 'apply']],
    method: [
      'Nous avons cherché avec des mots simples : « incubateur Algérie », « incubateur startup Alger », « accélérateur startup Algérie », « incubateur universitaire Algérie ».',
      'Une structure entre dans la liste si son propre site, ou le site officiel de l’organisme dont elle dépend, s’ouvre et décrit un programme d’incubation ou d’accélération. Ce qu’elle propose est ce que le site indique. Nous ne reprenons ni montant de financement, ni part au capital, ni frais, ni nombre de startups accompagnées, et aucun nom de personne. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'La liste n’est pas complète : plusieurs structures connues n’y figurent pas parce que leur site ne s’ouvrait pas ou ne décrivait plus de programme le jour de la vérification. Les appels à candidatures ont des dates : vérifiez sur le site que le programme est ouvert.',
      'Cette page n’explique ni le label startup, ni ses conditions, ni ses avantages : elle signale seulement ce que chaque structure annonce. Renseignez-vous auprès du portail officiel.',
    ],
    fix: 'Une information est fausse, ou votre structure manque ? Écrivez-nous avec le lien de la page qui décrit votre programme, nous corrigeons :',
    faq: [
      ['Quel est le meilleur incubateur de startups en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque structure annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas un incubateur. Le bon choix dépend du stade du projet, du secteur, de la ville et de ce dont vous avez besoin : méthode, locaux, réseau ou investisseurs.`],
      ['Quels sont les incubateurs et accélérateurs publics en Algérie ?', `${join(PUBLIC, 'et')} sont les deux organismes publics de cette page : le premier est présenté par le portail officiel startup.dz comme un réseau d’accélérateurs, le second est l’agence des parcs technologiques, qui indique un programme d’incubation et un programme d’incubation en ligne.`],
      ['Quels sont les incubateurs privés en Algérie ?', `${join(PRIVATE, 'et')} décrivent sur leur site un programme d’incubation privé, tous à Alger.`],
      ['Quelles universités ont un incubateur ?', `Parmi les structures que nous avons vérifiées, ces établissements ont une page consacrée à leur incubateur : ${UNIV('fr', 'et')}.`],
      ['Existe-t-il un incubateur pour les projets d’intelligence artificielle ?', 'DjazairIA décrit des programmes de pré-incubation, d’incubation et d’accélération consacrés aux projets d’intelligence artificielle, à Alger.'],
      ['Peut-on être incubé sans habiter Alger ?', `L’ANPT indique un programme d’incubation virtuelle ouvert aux porteurs de projets de tout le pays ; MawaHUB se déroule aussi à Oran et à Constantine ; les incubateurs universitaires cités plus haut sont à ${join(['Sétif', 'Constantine', 'Sidi Bel Abbès', 'Blida', 'Koléa'], 'et')}.`],
      ['Comment candidater à un incubateur en Algérie ?', `${join(APPLY, 'et')} ont une page ou un formulaire de candidature. Les autres fonctionnent par appels à candidatures annoncés sur leur site.`],
      ['Quelle différence entre incubateur et accélérateur ?', `Un incubateur accompagne un projet depuis l’idée jusqu’à la création de l’entreprise ; un accélérateur s’adresse à une startup qui a déjà un produit et veut grandir plus vite. ${join(ACCEL, 'et')} annoncent un programme d’accélération ; ${join(INVEST, 'et')} annoncent une mise en relation avec des investisseurs.`],
      ['Un incubateur développe-t-il mon application ?', 'Les programmes de cette page annoncent de l’accompagnement, de la formation, du réseau et parfois des locaux. Pour faire construire l’application ou la plateforme elle-même, on s’adresse à une société de développement : Symloop, qui publie cette page, construit des applications mobiles, des plateformes web et des SaaS pour des fondateurs.'],
      ['Comment ajouter ma structure à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre programme. L’inscription est gratuite.'],
    ],
    related: [['Startups algériennes', '/startups-algeriennes/'], ['Meilleures entreprises de développement d’applications mobiles en Algérie', '/entreprises-developpement-application-mobile-algerie/'], ['Meilleures entreprises d’IA en Algérie', '/entreprises-ia-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best startup incubators and accelerators in Algeria 2027: a verified list of ${N} organisations`,
    seoTitle: `Startup incubators and accelerators in Algeria 2027 (${N} verified)`,
    seoDescription: `Startup incubators and accelerators in Algeria in 2027: ${N} verified organisations with the type (public, private, university, operator), city, what they offer (pre-incubation, incubation, acceleration, workspace, mentoring, investors) and how to apply. Verified on 26 November 2026.`,
    keywords: 'best incubator algeria 2027, startup incubator algeria, incubator algiers, startup accelerator algeria, university incubator algeria, incubation programme algeria, ai incubator algeria',
    colCompany: 'Organisation', colDoes: 'What it offers', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on startup support in Algeria: nine public, private, university or operator incubators and accelerators, and Symloop, which builds founders’ products. For each one: the type of organisation, the city, what it offers and how to apply, read on its own website; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Pre-incubation', 'pre_incubation'], ['Acceleration', 'acceleration'], ['Workspace', 'coworking'], ['Investor introductions', 'funding_access'], ['Help with the label', 'label_support'], ['Online programme', 'online'], ['Online application', 'apply']],
    method: [
      'We searched with simple words such as “incubator Algeria”, “startup incubator Algiers”, “startup accelerator Algeria” and “university incubator Algeria”.',
      'An organisation enters the list if its own site, or the official site of the body it depends on, loads and describes an incubation or acceleration programme. What it offers is what the site states. We report no funding amounts, equity stakes, fees or numbers of startups supported, and no names of people. Each name links to the page read.',
    ],
    limits: [
      'The list is not complete: several well-known organisations are missing because their site did not load or no longer described a programme on the verification day. Calls for applications have dates: check on the site that the programme is open.',
      'This page does not explain the startup label, its conditions or its advantages: it only reports what each organisation announces. Ask the official portal.',
    ],
    fix: 'Something is wrong, or your organisation is missing? Write to us with the link to the page describing your programme, and we correct it:',
    faq: [
      ['What is the best startup incubator in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each organisation announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not an incubator. The right choice depends on the project’s stage, the sector, the city and what you need: method, premises, network or investors.`],
      ['Which incubators and accelerators are public in Algeria?', `${join(PUBLIC, 'and')} are the two public bodies on this page: the first is presented by the official portal startup.dz as a network of accelerators, the second is the technology parks agency, which states an incubation programme and an online incubation programme.`],
      ['Which incubators are private in Algeria?', `${join(PRIVATE, 'and')} describe a private incubation programme on their sites, all in Algiers.`],
      ['Which universities have an incubator?', `Among the organisations we verified, these institutions have a page dedicated to their incubator: ${UNIV('en', 'and')}.`],
      ['Is there an incubator for artificial intelligence projects?', 'DjazairIA describes pre-incubation, incubation and acceleration programmes dedicated to artificial intelligence projects, in Algiers.'],
      ['Can I be incubated without living in Algiers?', `ANPT states a virtual incubation programme open to project holders across the country; MawaHUB also runs in Oran and Constantine; the university incubators named above are in ${join(['Sétif', 'Constantine', 'Sidi Bel Abbès', 'Blida', 'Koléa'], 'and')}.`],
      ['How do I apply to an incubator in Algeria?', `${join(APPLY, 'and')} have an application page or form. The others work through calls for applications announced on their sites.`],
      ['What is the difference between an incubator and an accelerator?', `An incubator supports a project from the idea to the creation of the company; an accelerator addresses a startup that already has a product and wants to grow faster. ${join(ACCEL, 'and')} announce an acceleration programme; ${join(INVEST, 'and')} announce investor introductions.`],
      ['Does an incubator build my app?', 'The programmes on this page announce support, training, network and sometimes premises. To have the app or platform itself built, you go to a development company: Symloop, which publishes this page, builds mobile apps, web platforms and SaaS for founders.'],
      ['How do I add my organisation to this list?', 'Write to contact@symloop.com with the link to the page describing your programme. Listing is free.'],
    ],
    related: [['Algerian startups', '/startups-algeriennes/'], ['Best mobile app development companies in Algeria', '/entreprises-developpement-application-mobile-algerie/'], ['Best AI companies in Algeria', '/entreprises-ia-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل حاضنات ومسرّعات الشركات الناشئة في الجزائر 2027: قائمة موثقة من ${N} هياكل`,
    seoTitle: `حاضنات ومسرّعات الشركات الناشئة في الجزائر 2027 (${N} موثقة)`,
    seoDescription: `حاضنات ومسرّعات الشركات الناشئة في الجزائر سنة 2027: ${N} هياكل موثقة مع النوع (عمومي، خاص، جامعي، متعامل)، المدينة، ما تقترحه (ما قبل الاحتضان، الاحتضان، التسريع، فضاء العمل، الإرشاد، المستثمرون) وطريقة الترشح. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل حاضنة أعمال الجزائر 2027, حاضنة أعمال الجزائر, حاضنة شركات ناشئة الجزائر, مسرّع شركات ناشئة الجزائر, حاضنة جامعية الجزائر, برنامج احتضان الجزائر',
    colCompany: 'الهيكل', colDoes: 'ما يقترحه', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن مرافقة الشركات الناشئة في الجزائر: تسع حاضنات ومسرّعات عمومية، خاصة، جامعية أو تابعة لمتعامل، و Symloop التي تبني منتجات المؤسِّسين. لكل واحد: نوع الهيكل، المدينة، ما يقترحه وطريقة الترشح، مأخوذة من موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['ما قبل الاحتضان', 'pre_incubation'], ['التسريع', 'acceleration'], ['فضاء عمل', 'coworking'], ['ربط بالمستثمرين', 'funding_access'], ['مساعدة في الوسم', 'label_support'], ['برنامج عبر الإنترنت', 'online'], ['ترشح عبر الإنترنت', 'apply']],
    method: [
      'بحثنا بكلمات بسيطة مثل «حاضنة أعمال الجزائر» و«حاضنة شركات ناشئة الجزائر» و«مسرّع شركات ناشئة الجزائر».',
      'يدخل الهيكل القائمة إذا كان موقعه، أو الموقع الرسمي للهيئة التي يتبعها، يفتح ويصف برنامج احتضان أو تسريع. ما يقترحه هو ما يذكره الموقع. ولا ننقل أي مبلغ تمويل ولا حصة في رأس المال ولا رسوم ولا عدد شركات مرافَقة، ولا أي اسم شخص. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'القائمة غير كاملة: عدة هياكل معروفة غير مذكورة لأن موقعها لم يفتح أو لم يعد يصف برنامجاً يوم التحقق. ولدعوات الترشح تواريخ: تحققوا في الموقع من أن البرنامج مفتوح.',
      'لا تشرح هذه الصفحة وسم الشركة الناشئة ولا شروطه ولا مزاياه: تنقل فقط ما يعلنه كل هيكل. استفسروا لدى البوابة الرسمية.',
    ],
    fix: 'معلومة خاطئة أو هيكلكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصف برنامجكم، ونصحّح:',
    faq: [
      ['ما هي أفضل حاضنة للشركات الناشئة في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل هيكل؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست حاضنة. والاختيار الصحيح يتوقف على مرحلة المشروع، القطاع، المدينة وما تحتاجونه: منهجية، مقر، شبكة علاقات أو مستثمرون.`],
      ['ما هي الحاضنات والمسرّعات العمومية في الجزائر؟', `${join(PUBLIC, 'و')} هما الهيئتان العموميتان في هذه الصفحة: الأولى تقدّمها البوابة الرسمية startup.dz كشبكة مسرّعات، والثانية وكالة الحظائر التكنولوجية التي تذكر برنامج احتضان وبرنامج احتضان عبر الإنترنت.`],
      ['ما هي الحاضنات الخاصة في الجزائر؟', `${join(PRIVATE, 'و')} تصف في مواقعها برنامج احتضان خاصاً، وكلها في الجزائر العاصمة.`],
      ['ما هي الجامعات التي لها حاضنة؟', `من بين الهياكل التي تحققنا منها، هذه المؤسسات لها صفحة خاصة بحاضنتها: ${UNIV('ar', 'و')}.`],
      ['هل توجد حاضنة لمشاريع الذكاء الاصطناعي؟', 'يصف DjazairIA برامج ما قبل الاحتضان، الاحتضان والتسريع الخاصة بمشاريع الذكاء الاصطناعي، في الجزائر العاصمة.'],
      ['هل يمكن الاحتضان دون السكن في الجزائر العاصمة؟', `تذكر ANPT برنامج احتضان افتراضياً مفتوحاً لحاملي المشاريع في كل البلاد؛ ويُنجز MawaHUB أيضاً في وهران وقسنطينة؛ والحاضنات الجامعية المذكورة أعلاه في ${join(['سطيف', 'قسنطينة', 'سيدي بلعباس', 'البليدة', 'القليعة'], 'و')}.`],
      ['كيف أترشح لحاضنة في الجزائر؟', `${join(APPLY, 'و')} لها صفحة أو استمارة ترشح. والبقية تعمل بدعوات للترشح تُعلَن في مواقعها.`],
      ['ما الفرق بين الحاضنة والمسرّع؟', `الحاضنة ترافق المشروع من الفكرة إلى إنشاء المؤسسة؛ والمسرّع موجه لشركة ناشئة لها منتج وتريد النمو أسرع. ${join(ACCEL, 'و')} تعلن برنامج تسريع؛ و${join(INVEST, 'و')} تعلن ربطاً بالمستثمرين.`],
      ['هل تطوّر الحاضنة تطبيقي؟', 'البرامج المذكورة في هذه الصفحة تعلن المرافقة، التكوين، شبكة العلاقات وأحياناً المقر. ولبناء التطبيق أو المنصة نفسها يُتوجَّه إلى شركة تطوير: Symloop، التي تنشر هذه الصفحة، تبني تطبيقات الجوال، منصات الويب و SaaS للمؤسِّسين.'],
      ['كيف أضيف هيكلي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['الشركات الناشئة الجزائرية', '/startups-algeriennes/'], ['أفضل شركات تطوير تطبيقات الجوال في الجزائر', '/entreprises-developpement-application-mobile-algerie/'], ['أفضل شركات الذكاء الاصطناعي في الجزائر', '/entreprises-ia-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="incubateurs-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
