// /nom-de-domaine-dz/ — source page: where to register a .dz domain name, with the registry's own
// list of accredited registrars and its figures (FR / EN / AR).
// Data: src/data/sources/algeria-dz-registrars.js. No prices, no eligibility rules explained.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { DZ_REGISTRARS, REGISTRY, VERIFIED_ON } from '../data/sources/algeria-dz-registrars';

const ITEMS = DZ_REGISTRARS;
const N = ITEMS.length;
const R = REGISTRY.registrars.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const fmt = (n, L) => n.toLocaleString(L === 'en' ? 'en-GB' : 'fr-FR').replace(/ /g, ' ');
const ON_LIST = ITEMS.filter((x) => x.focus === 'registrar').map((x) => x.name);
const ONLINE = has('online_order');
const TRANSFER = has('transfer');
const DNS = has('dns');
const SEVERAL = has('several_dz');
const top = (L, and) => join(REGISTRY.top.slice(0, 5).map(([n, v]) => `${n} (${fmt(v, L)})`), and);
const T = (L) => fmt(REGISTRY.total, L);
const Y = (y, L) => fmt(REGISTRY.perYear[y], L);

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste (pas registrar)', registrar: 'Registrars inscrits sur la liste de NIC.dz', reseller: 'Vend des .dz, absent de la liste de NIC.dz' },
  en: { builder: 'Publisher of the list (not a registrar)', registrar: 'Registrars on the NIC.dz list', reseller: 'Sells .dz, not on the NIC.dz list' },
  ar: { builder: 'ناشر القائمة (ليس مسجِّلاً)', registrar: 'مسجِّلون مدرجون في قائمة NIC.dz', reseller: 'يبيع ‎.dz، غير مدرج في قائمة NIC.dz' },
};
const FEATURE_LABELS = {
  fr: { custom: 'domaine au nom du client, DNS, hébergement', online_order: 'commande en ligne', search: 'recherche de disponibilité', transfer: 'transfert', renewal: 'renouvellement', dns: 'gestion DNS', hosting: 'hébergement', email: 'messagerie', ssl: 'SSL', other_extensions: '.com et autres', several_dz: 'plusieurs extensions .dz' },
  en: { custom: 'domain in the client’s name, DNS, hosting', online_order: 'online order', search: 'availability search', transfer: 'transfer', renewal: 'renewal', dns: 'DNS management', hosting: 'hosting', email: 'email', ssl: 'SSL', other_extensions: '.com and others', several_dz: 'several .dz extensions' },
  ar: { custom: 'النطاق باسم الزبون، DNS، الاستضافة', online_order: 'الطلب عبر الإنترنت', search: 'البحث عن التوفر', transfer: 'النقل', renewal: 'التجديد', dns: 'تسيير DNS', hosting: 'الاستضافة', email: 'البريد', ssl: 'SSL', other_extensions: '‎.com وغيرها', several_dz: 'عدة امتدادات ‎.dz' },
};
const SELECTION = {
  fr: `NIC.dz publie une liste de ${R} registrars. Cette page présente ceux dont le propre site décrit l’enregistrement de .dz et que nous avons pu lire, plus Edisoft, qui vend des .dz sans figurer sur cette liste, et Symloop, qui publie la page. Les ${R} noms de la liste sont repris dans les questions.`,
  en: `NIC.dz publishes a list of ${R} registrars. This page presents those whose own site describes .dz registration and that we could read, plus Edisoft, which sells .dz without being on that list, and Symloop, which publishes the page. All ${R} names on the list are given in the questions.`,
  ar: `ينشر NIC.dz قائمة من ${R} مسجِّلاً. تعرض هذه الصفحة الذين يصف موقعهم تسجيل ‎.dz واستطعنا قراءته، إضافة إلى Edisoft الذي يبيع ‎.dz دون أن يكون في هذه القائمة، و Symloop التي تنشر الصفحة. والأسماء الـ ${R} كلها مذكورة في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Nom de domaine .dz en 2027 : où l’acheter, les ${R} registrars agréés et les chiffres du registre`,
    seoTitle: `Nom de domaine .dz 2027 : où l’acheter, ${R} registrars agréés (liste NIC.dz)`,
    seoDescription: `Pour acheter un nom de domaine .dz en 2027, la demande passe par un registrar agréé par NIC.dz : ${R} registrars figurent sur sa liste. ${T('fr')} noms de domaine .dz créés selon le registre, ${Y(2025, 'fr')} en 2025. Services de chaque registrar vérifiés le 26 novembre 2026.`,
    keywords: 'nom de domaine .dz, acheter nom de domaine .dz, nom de domaine algérie, nom de domaine dz gratuit, registrar .dz, nic.dz, enregistrer un .dz, .com.dz, combien de noms de domaine .dz',
    colCompany: 'Registrar', colDoes: 'Ce que son site propose', colFact: 'Liste NIC.dz et site du registrar', countLabel: 'entrées vérifiées',
    lead: `Pour acheter un nom de domaine .dz, la demande passe par un registrar agréé : le registre NIC.dz, géré par le CERIST, publie une liste de ${R} registrars et compte ${T('fr')} noms de domaine créés. Cette page présente les registrars dont nous avons pu lire l’offre, avec ce que propose leur site (commande en ligne, recherche, transfert, DNS, hébergement) et le nombre de domaines que le registre leur compte ; Symloop, qui publie la page, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Commande en ligne', 'online_order'], ['Recherche de disponibilité', 'search'], ['Transfert', 'transfer'], ['Gestion DNS', 'dns'], ['Plusieurs extensions .dz', 'several_dz'], ['Hébergement', 'hosting']],
    method: [
      'La liste des registrars et les chiffres viennent du registre NIC.dz : ses pages « Liste des registrars » et « Statistiques » (noms de domaine par registrar, noms de domaine par année, total des noms de domaine créés), lues le 26 novembre 2026. Les services de chaque registrar viennent de son propre site.',
      'Nous ne reprenons ni prix ni délai, et nous n’expliquons pas les conditions ni les pièces à fournir : le site du registre les décrit. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Les chiffres sont ceux que le registre affiche à la date de vérification ; ils changent chaque jour. La somme par registrar (21 284) diffère légèrement du total affiché (21 548), tel que publié.',
      'Plusieurs registrars de la liste n’ont pas de page sur les .dz que nous ayons pu lire : ils sont cités dans les questions, sans détail. Nous n’avons commandé aucun domaine.',
    ],
    fix: 'Une information est fausse, ou votre offre .dz manque ? Écrivez-nous avec le lien de votre page, nous corrigeons :',
    faq: [
      ['Où acheter un nom de domaine .dz en 2027 ?', `Chez un registrar agréé par NIC.dz, le registre du .dz géré par le CERIST : sa liste compte ${R} registrars. ${join(ON_LIST, 'et')} en font partie et décrivent l’offre .dz sur leur site. Il n’existe pas de classement ; Symloop, qui publie cette page, est en tête par choix d’éditeur et n’est pas registrar.`],
      ['Quels sont les registrars .dz agréés ?', `La liste publiée par NIC.dz le 26 novembre 2026 compte ${R} noms : ${join(REGISTRY.registrars, 'et')}.`],
      ['Combien y a-t-il de noms de domaine .dz ?', `Le registre NIC.dz affiche ${T('fr')} noms de domaine créés au 26 novembre 2026, dont ${Y(2025, 'fr')} créés en 2025 et ${Y(2026, 'fr')} en 2026 à cette date (${Y(2020, 'fr')} en 2020, ${Y(2015, 'fr')} en 2015).`],
      ['Quels registrars gèrent le plus de noms de domaine .dz ?', `Selon les statistiques de NIC.dz au 26 novembre 2026 : ${top('fr', 'et')} noms de domaine.`],
      ['Peut-on commander un .dz en ligne ?', `${join(ONLINE, 'et')} indiquent une commande ou une demande en ligne sur leur site. D’autres registrars passent par un formulaire ou un contact.`],
      ['Comment transférer un .dz vers un autre registrar ?', `${join(TRANSFER, 'et')} annoncent le transfert d’un .dz. Demandez au nouveau registrar la marche à suivre.`],
      ['Quelles extensions en .dz existent ?', `Les registrars citent notamment .dz, .com.dz, .org.dz, .net.dz, .edu.dz, .gov.dz, .asso.dz, .pol.dz et .art.dz ; ${join(SEVERAL, 'et')} en énumèrent plusieurs sur leur site. Le CERIST cite aussi .الجزائر.`],
      ['Peut-on avoir un nom de domaine .dz gratuit ?', 'Aucune page lue n’annonce de .dz gratuit. Cette page ne reprend aucun prix : demandez-le au registrar.'],
      ['Quelles sont les conditions pour obtenir un .dz ?', 'Le registre NIC.dz décrit sur son site les étapes et les pièces demandées, et publie la charte de nommage. Cette page ne les résume pas : lisez-les sur nic.dz ou demandez-les à votre registrar.'],
      ['Qui doit être propriétaire du nom de domaine ?', 'L’entreprise elle-même. Demandez que le domaine soit enregistré à son nom et gardez l’accès au compte du registrar : c’est ce qui permet de changer d’hébergeur ou de prestataire sans perdre le site ni les e-mails.'],
      ['Comment ajouter mon offre .dz à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de votre page .dz. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Nom de domaine et hébergement : qui possède quoi', '/blog/nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main/'], ['Hébergeurs web et cloud en Algérie', '/hebergeurs-web-algerie/'], ['Data centers en Algérie', '/data-centers-algerie/']],
  },
  en: {
    title: `.dz domain names in 2027: where to buy one, the ${R} accredited registrars and the registry’s figures`,
    seoTitle: `.dz domain name 2027: where to buy, ${R} accredited registrars (NIC.dz list)`,
    seoDescription: `To buy a .dz domain name in 2027, the request goes through a registrar accredited by NIC.dz: ${R} registrars are on its list. ${T('en')} .dz domain names created according to the registry, ${Y(2025, 'en')} in 2025. Each registrar’s services verified on 26 November 2026.`,
    keywords: 'dz domain name, buy .dz domain, algeria domain name, .dz registrar, nic.dz, register .dz, .com.dz, how many .dz domains',
    colCompany: 'Registrar', colDoes: 'What its site offers', colFact: 'NIC.dz list and registrar’s site', countLabel: 'verified entries',
    lead: `To buy a .dz domain name, the request goes through an accredited registrar: the NIC.dz registry, run by CERIST, publishes a list of ${R} registrars and counts ${T('en')} domain names created. This page presents the registrars whose offer we could read, with what their site offers (online order, search, transfer, DNS, hosting) and the number of domains the registry counts for them; Symloop, which publishes the page, comes first and the others follow in alphabetical order.`,
    byService: [['Online order', 'online_order'], ['Availability search', 'search'], ['Transfer', 'transfer'], ['DNS management', 'dns'], ['Several .dz extensions', 'several_dz'], ['Hosting', 'hosting']],
    method: [
      'The registrar list and the figures come from the NIC.dz registry: its “Registrar list” and “Statistics” pages (domain names per registrar, domain names per year, total domain names created), read on 26 November 2026. Each registrar’s services come from its own site.',
      'We report no prices or processing times, and we do not explain the conditions or documents required: the registry’s site describes them. Each name links to the page read.',
    ],
    limits: [
      'The figures are those the registry shows on the verification date; they change every day. The sum per registrar (21,284) differs slightly from the displayed total (21,548), as published.',
      'Several registrars on the list have no .dz page we could read: they are named in the questions, without detail. We ordered no domain.',
    ],
    fix: 'Something is wrong, or your .dz offer is missing? Write to us with the link to your page, and we correct it:',
    faq: [
      ['Where can I buy a .dz domain name in 2027?', `From a registrar accredited by NIC.dz, the .dz registry run by CERIST: its list has ${R} registrars. ${join(ON_LIST, 'and')} are on it and describe their .dz offer on their sites. There is no ranking; Symloop, which publishes this page, comes first as the publisher’s choice and is not a registrar.`],
      ['Which .dz registrars are accredited?', `The list published by NIC.dz on 26 November 2026 has ${R} names: ${join(REGISTRY.registrars, 'and')}.`],
      ['How many .dz domain names are there?', `The NIC.dz registry shows ${T('en')} domain names created as of 26 November 2026, including ${Y(2025, 'en')} created in 2025 and ${Y(2026, 'en')} in 2026 to that date (${Y(2020, 'en')} in 2020, ${Y(2015, 'en')} in 2015).`],
      ['Which registrars manage the most .dz domain names?', `According to NIC.dz statistics on 26 November 2026: ${top('en', 'and')} domain names.`],
      ['Can I order a .dz online?', `${join(ONLINE, 'and')} state an online order or request on their sites. Other registrars use a form or a contact.`],
      ['How do I transfer a .dz to another registrar?', `${join(TRANSFER, 'and')} announce .dz transfer. Ask the new registrar for the steps.`],
      ['Which .dz extensions exist?', `Registrars name .dz, .com.dz, .org.dz, .net.dz, .edu.dz, .gov.dz, .asso.dz, .pol.dz and .art.dz among others; ${join(SEVERAL, 'and')} list several on their sites. CERIST also names .الجزائر.`],
      ['Can I get a free .dz domain name?', 'No page we read announces a free .dz. This page reports no prices: ask the registrar.'],
      ['What are the conditions to get a .dz?', 'The NIC.dz registry describes the steps and documents on its site and publishes the naming charter. This page does not summarise them: read them on nic.dz or ask your registrar.'],
      ['Who should own the domain name?', 'The company itself. Ask for the domain to be registered in its name and keep access to the registrar account: that is what lets you change host or provider without losing the site or the emails.'],
      ['How do I add my .dz offer to this list?', 'Write to contact@symloop.com with the link to your .dz page. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Web hosting and cloud in Algeria', '/hebergeurs-web-algerie/'], ['Data centers in Algeria', '/data-centers-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `اسم النطاق ‎.dz سنة 2027: أين تشتريه، المسجِّلون المعتمدون الـ ${R} وأرقام السجل`,
    seoTitle: `اسم النطاق ‎.dz 2027: أين تشتريه، ${R} مسجِّلاً معتمداً (قائمة NIC.dz)`,
    seoDescription: `لشراء اسم نطاق ‎.dz سنة 2027، يمر الطلب عبر مسجِّل معتمد لدى NIC.dz: ${R} مسجِّلاً في قائمته. ${T('ar')} اسم نطاق ‎.dz أُنشئ حسب السجل، منها ${Y(2025, 'ar')} سنة 2025. خدمات كل مسجِّل موثقة في 26 نوفمبر 2026.`,
    keywords: 'اسم نطاق dz, شراء نطاق .dz, اسم نطاق الجزائر, مسجل .dz, nic.dz, تسجيل .dz, .com.dz',
    colCompany: 'المسجِّل', colDoes: 'ما يقترحه موقعه', colFact: 'قائمة NIC.dz وموقع المسجِّل', countLabel: 'مدخلات موثقة',
    lead: `لشراء اسم نطاق ‎.dz، يمر الطلب عبر مسجِّل معتمد: سجل NIC.dz، الذي يسيّره CERIST، ينشر قائمة من ${R} مسجِّلاً ويحصي ${T('ar')} اسم نطاق أُنشئ. تعرض هذه الصفحة المسجِّلين الذين استطعنا قراءة عرضهم، مع ما يقترحه موقعهم (الطلب عبر الإنترنت، البحث، النقل، DNS، الاستضافة) وعدد النطاقات التي يحصيها لهم السجل؛ و Symloop، ناشرة الصفحة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['الطلب عبر الإنترنت', 'online_order'], ['البحث عن التوفر', 'search'], ['النقل', 'transfer'], ['تسيير DNS', 'dns'], ['عدة امتدادات ‎.dz', 'several_dz'], ['الاستضافة', 'hosting']],
    method: [
      'قائمة المسجِّلين والأرقام من سجل NIC.dz: صفحتا «قائمة المسجِّلين» و«الإحصائيات» (أسماء النطاقات حسب المسجِّل، حسب السنة، ومجموع الأسماء المُنشأة)، مقروءة في 26 نوفمبر 2026. وخدمات كل مسجِّل من موقعه.',
      'لا ننقل أي سعر ولا أجل، ولا نشرح الشروط ولا الوثائق المطلوبة: موقع السجل يصفها. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'الأرقام هي ما يعرضه السجل في تاريخ التحقق؛ وتتغير كل يوم. ومجموع الأرقام حسب المسجِّل (21 284) يختلف قليلاً عن المجموع المعروض (21 548)، كما نُشر.',
      'عدة مسجِّلين في القائمة ليست لهم صفحة عن ‎.dz استطعنا قراءتها: هم مذكورون في الأسئلة دون تفاصيل. ولم نطلب أي نطاق.',
    ],
    fix: 'معلومة خاطئة أو عرضكم لـ ‎.dz غير مدرج؟ راسلونا مع رابط صفحتكم، ونصحّح:',
    faq: [
      ['أين أشتري اسم نطاق ‎.dz سنة 2027؟', `لدى مسجِّل معتمد من NIC.dz، سجل ‎.dz الذي يسيّره CERIST: قائمته تضم ${R} مسجِّلاً. و${join(ON_LIST, 'و')} منهم ويصفون عرض ‎.dz في مواقعهم. ولا يوجد تصنيف؛ و Symloop، التي تنشر هذه الصفحة، في المقدمة باختيار الناشر وليست مسجِّلاً.`],
      ['من هم مسجِّلو ‎.dz المعتمدون؟', `القائمة التي نشرها NIC.dz في 26 نوفمبر 2026 تضم ${R} اسماً: ${join(REGISTRY.registrars, 'و')}.`],
      ['كم عدد أسماء النطاق ‎.dz؟', `يعرض سجل NIC.dz ‏${T('ar')} اسم نطاق أُنشئ إلى غاية 26 نوفمبر 2026، منها ${Y(2025, 'ar')} سنة 2025 و${Y(2026, 'ar')} سنة 2026 إلى هذا التاريخ (${Y(2020, 'ar')} سنة 2020، ${Y(2015, 'ar')} سنة 2015).`],
      ['ما هم المسجِّلون الذين يسيّرون أكبر عدد من نطاقات ‎.dz؟', `حسب إحصائيات NIC.dz في 26 نوفمبر 2026: ${top('ar', 'و')} اسم نطاق.`],
      ['هل يمكن طلب ‎.dz عبر الإنترنت؟', `${join(ONLINE, 'و')} تذكر طلباً عبر الإنترنت في مواقعها. ومسجِّلون آخرون يمرون عبر استمارة أو اتصال.`],
      ['كيف أنقل ‎.dz إلى مسجِّل آخر؟', `${join(TRANSFER, 'و')} تعلن نقل ‎.dz. اسألوا المسجِّل الجديد عن الخطوات.`],
      ['ما هي امتدادات ‎.dz الموجودة؟', `يذكر المسجِّلون خصوصاً ‎.dz و ‎.com.dz و ‎.org.dz و ‎.net.dz و ‎.edu.dz و ‎.gov.dz و ‎.asso.dz و ‎.pol.dz و ‎.art.dz؛ و${join(SEVERAL, 'و')} تعدّد عدة منها في مواقعها. ويذكر CERIST أيضاً ‎.الجزائر.`],
      ['هل يمكن الحصول على نطاق ‎.dz مجاناً؟', 'لا صفحة مقروءة تعلن ‎.dz مجانياً. ولا تنقل هذه الصفحة أي سعر: اسألوا المسجِّل.'],
      ['ما هي شروط الحصول على ‎.dz؟', 'يصف سجل NIC.dz في موقعه الخطوات والوثائق المطلوبة وينشر ميثاق التسمية. ولا تلخصها هذه الصفحة: اقرؤوها في nic.dz أو اسألوا مسجِّلكم.'],
      ['من يجب أن يملك اسم النطاق؟', 'المؤسسة نفسها. اطلبوا تسجيل النطاق باسمها واحتفظوا بالدخول إلى حساب المسجِّل: هذا ما يسمح بتغيير المستضيف أو المزوّد دون فقدان الموقع ولا البريد.'],
      ['كيف أضيف عرضي لـ ‎.dz إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط صفحتكم عن ‎.dz. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['استضافة المواقع والسحابة في الجزائر', '/hebergeurs-web-algerie/'], ['مراكز البيانات في الجزائر', '/data-centers-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="nom-de-domaine-dz" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
