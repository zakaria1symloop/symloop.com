// /agences-communication-alger/ — source page: verified list of communication, advertising, events
// and digital-marketing agencies in Algiers (FR / EN / AR).
// Data: src/data/sources/algiers-communication-agencies.js. No prices, clients, awards or years.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { COMMUNICATION_AGENCIES, TOP_COMMUNICATION, VERIFIED_ON } from '../data/sources/algiers-communication-agencies';

const ITEMS = COMMUNICATION_AGENCIES.filter((x) => x.self || TOP_COMMUNICATION.includes(x.name));
const OTHERS = COMMUNICATION_AGENCIES.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const all = (key) => OTHERS.filter((x) => x.services.includes(key)).map((x) => x.name);
const FULL = ITEMS.filter((x) => x.focus === 'full').map((x) => x.name);
const EVENTS = has('events');
const SOCIAL = has('social_media');
const ADS = all('digital_ads');
const SIGNAGE = has('outdoor');
const BRANDING = has('branding');
const VIDEO = has('video');
const INFLUENCE = all('influence');
const PR = has('pr');
const MEDIA = all('media_buying');
const HIDDEN = OTHERS.filter((x) => !TOP_COMMUNICATION.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste (logiciel, pas agence)', full: 'Agences de communication globales', events: 'Agences événementielles et créatives', digital: 'Agence de marketing digital', visual: 'Communication visuelle et signalétique', consulting: 'Groupe de conseil en communication' },
  en: { builder: 'Publisher of the list (software, not an agency)', full: 'Full communication agencies', events: 'Events and creative agencies', digital: 'Digital marketing agency', visual: 'Visual communication and signage', consulting: 'Communication consulting group' },
  ar: { builder: 'ناشر القائمة (برمجيات، ليست وكالة)', full: 'وكالات اتصال شاملة', events: 'وكالات فعاليات وإبداع', digital: 'وكالة تسويق رقمي', visual: 'اتصال بصري ولافتات', consulting: 'مجموعة استشارات في الاتصال' },
};
const FEATURE_LABELS = {
  fr: { custom: 'sites, applications et plateformes', branding: 'identité visuelle', advertising: 'campagnes', media_buying: 'achat d’espace', outdoor: 'signalétique et affichage', social_media: 'réseaux sociaux', digital_ads: 'publicité en ligne', seo: 'référencement', website: 'sites web', video: 'photo et vidéo', events: 'événements', print: 'impression', pr: 'relations presse', influence: 'influence', strategy: 'stratégie' },
  en: { custom: 'sites, apps and platforms', branding: 'visual identity', advertising: 'campaigns', media_buying: 'media buying', outdoor: 'signage and outdoor', social_media: 'social media', digital_ads: 'online ads', seo: 'SEO', website: 'websites', video: 'photo and video', events: 'events', print: 'print', pr: 'press relations', influence: 'influencers', strategy: 'strategy' },
  ar: { custom: 'مواقع، تطبيقات ومنصات', branding: 'الهوية البصرية', advertising: 'الحملات', media_buying: 'شراء المساحات الإعلانية', outdoor: 'اللافتات والإعلان الخارجي', social_media: 'شبكات التواصل', digital_ads: 'الإعلان عبر الإنترنت', seo: 'الإحالة', website: 'مواقع الويب', video: 'الصورة والفيديو', events: 'الفعاليات', print: 'الطباعة', pr: 'العلاقات الصحفية', influence: 'المؤثرون', strategy: 'الاستراتيجية' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} agences. Cette page en retient dix : Symloop, qui publie la liste, et neuf agences dont le site s’ouvrait, indiquait une adresse dans la wilaya d’Alger (commune ou rue) et montrait une activité depuis 2025.`,
  en: `We verified ${TOTAL} agencies. This page keeps ten: Symloop, which publishes the list, and nine agencies whose site loaded, stated an address in the wilaya of Algiers (commune or street) and showed activity since 2025.`,
  ar: `تحققنا من ${TOTAL} وكالة. تحتفظ هذه الصفحة بعشر: Symloop، التي تنشر القائمة، وتسع وكالات كان موقعها يفتح ويذكر عنواناً في ولاية الجزائر (بلدية أو شارع) ويُظهر نشاطاً منذ 2025.`,
};

const CONTENT = {
  fr: {
    title: `Agences de communication à Alger 2027 : liste vérifiée de ${N} agences (publicité, événementiel, digital)`,
    seoTitle: `Agence de communication à Alger 2027 : ${N} agences vérifiées`,
    seoDescription: `Agences de communication à Alger en 2027 : ${N} agences vérifiées avec la commune et les services (identité visuelle, réseaux sociaux, publicité, signalétique, événements, vidéo, relations presse) relevés sur leur site. Vérifié le 26 novembre 2026.`,
    keywords: 'agence de communication alger 2027, agence de communication alger, agence de communication alger centre, agence de publicité alger, boîte de communication alger, agence événementielle alger, agence marketing digital alger, agence social media alger',
    colCompany: 'Agence', colDoes: 'Services', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur les agences de communication à Alger : ${FULL.length} agences globales, des agences événementielles, une agence de marketing digital, une entreprise de signalétique, un groupe de conseil, et Symloop, qui publie la liste et construit les sites et applications. Pour chacune : la commune et les services relevés sur son propre site ; Symloop est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Identité visuelle', 'branding'], ['Réseaux sociaux', 'social_media'], ['Événements', 'events'], ['Photo et vidéo', 'video'], ['Signalétique et affichage', 'outdoor'], ['Relations presse', 'pr'], ['Sites web', 'website']],
    method: [
      'Nous avons cherché avec des mots simples : « agence de communication Alger », « agence de publicité Alger », « agence événementielle Alger », « agence marketing digital Alger ». Les annuaires ont servi à découvrir des noms, pas à établir les faits.',
      'Une agence entre dans la liste si son propre site s’ouvre, indique une adresse dans la wilaya d’Alger et montre une activité depuis 2025. Les services sont ceux que le site énumère. Nous ne reprenons ni tarif, ni nom de client, ni effectif, ni distinction, ni année de création. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons travaillé avec aucune de ces agences : ce qui est indiqué est ce que chacune annonce. Demandez des exemples de travaux récents et un devis écrit avant de choisir.',
      'Beaucoup d’agences d’Alger n’avaient rien de daté depuis 2025 sur leur site, ou pas d’adresse, à la date de vérification : elles ne figurent pas ici. Les sociétés de développement web sont dans notre liste des agences web.',
    ],
    fix: 'Une information est fausse, ou votre agence manque ? Écrivez-nous avec le lien de votre page de services, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure agence de communication à Alger en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque agence annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas une agence de communication. Le bon choix dépend du besoin : identité, campagne, événement ou réseaux sociaux.`],
      ['Quelles agences gèrent les réseaux sociaux à Alger ?', `${join(SOCIAL, 'et')} annoncent la gestion des réseaux sociaux.`],
      ['Quelle agence pour organiser un événement à Alger ?', `${join(EVENTS, 'et')} annoncent l’organisation d’événements ; COM EVENT’AL et South & North se présentent d’abord comme des agences événementielles.`],
      ['Quelle agence pour une identité visuelle ou un logo ?', `${join(BRANDING, 'et')} annoncent la création d’identité visuelle.`],
      ['Quelles agences font la publicité Meta, TikTok ou Google ?', `Parmi les agences que nous avons vérifiées, ${join(ADS, 'et')} annoncent la publicité en ligne.`],
      ['Quelle agence pour la signalétique et l’affichage ?', `${join(SIGNAGE, 'et')} annoncent la signalétique ou l’affichage.`],
      ['Quelles agences font la vidéo et la photo ?', `${join(VIDEO, 'et')} annoncent la production photo ou vidéo.`],
      ['Quelles agences travaillent avec des influenceurs ou la presse ?', `${join(INFLUENCE, 'et')} annoncent des campagnes d’influence ; ${join(PR, 'et')} annoncent les relations presse.`],
      ['Quelle agence pour l’achat d’espace publicitaire ?', `Parmi les agences que nous avons vérifiées, ${join(MEDIA, 'et')} annonce le placement publicitaire.`],
      ['Combien coûte une agence de communication à Alger ?', 'Cette page ne reprend aucun tarif. Demandez un devis écrit qui précise les livrables, le nombre de publications ou de visuels, la durée et ce qui reste à vous à la fin (fichiers sources, comptes).'],
      ['Agence de communication ou société de développement ?', 'Une agence de communication fait connaître une marque et amène des visiteurs. Quand la campagne doit mener à un site qui prend les commandes, à une application ou à un suivi des demandes, ce travail relève d’une société de développement comme Symloop, qui publie cette page.'],
      ['D’autres agences ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, qui indiquent Alger sans commune ou dont les informations viennent de deux sites.`],
      ['Comment ajouter mon agence à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de votre page de services. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Agences web en Algérie', '/agences-web-algerie/'], ['Entreprises informatiques à Alger', '/entreprises-informatiques/alger/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Communication agencies in Algiers 2027: a verified list of ${N} agencies (advertising, events, digital)`,
    seoTitle: `Communication agency in Algiers 2027: ${N} verified agencies`,
    seoDescription: `Communication agencies in Algiers in 2027: ${N} verified agencies with the commune and the services (visual identity, social media, advertising, signage, events, video, press relations) read on their sites. Verified on 26 November 2026.`,
    keywords: 'communication agency algiers 2027, advertising agency algiers, marketing agency algiers, events agency algiers, social media agency algiers, branding agency algeria',
    colCompany: 'Agency', colDoes: 'Services', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on communication agencies in Algiers: ${FULL.length} full-service agencies, events agencies, a digital marketing agency, a signage firm, a consulting group, and Symloop, which publishes the list and builds the sites and apps. For each one: the commune and the services read on its own site; Symloop comes first and the others follow in alphabetical order.`,
    byService: [['Visual identity', 'branding'], ['Social media', 'social_media'], ['Events', 'events'], ['Photo and video', 'video'], ['Signage and outdoor', 'outdoor'], ['Press relations', 'pr'], ['Websites', 'website']],
    method: [
      'We searched with simple words such as “communication agency Algiers”, “advertising agency Algiers”, “events agency Algiers” and “digital marketing agency Algiers”. Directories were used to discover names, not to establish facts.',
      'An agency enters the list if its own site loads, states an address in the wilaya of Algiers and shows activity since 2025. Services are those the site lists. We report no prices, client names, team sizes, awards or founding years. Each name links to the page read.',
    ],
    limits: [
      'We worked with none of these agencies: what is shown is what each one announces. Ask for recent work and a written quote before choosing.',
      'Many Algiers agencies had nothing dated since 2025 on their site, or no address, on the verification date: they are not here. Web development companies are on our list of web agencies.',
    ],
    fix: 'Something is wrong, or your agency is missing? Write to us with the link to your services page, and we correct it:',
    faq: [
      ['What is the best communication agency in Algiers in 2027?', `There is no independent ranking. This page presents ${N} entries with what each agency announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not a communication agency. The right choice depends on the need: identity, campaign, event or social media.`],
      ['Which agencies manage social media in Algiers?', `${join(SOCIAL, 'and')} announce social media management.`],
      ['Which agency to organise an event in Algiers?', `${join(EVENTS, 'and')} announce event organisation; COM EVENT’AL and South & North present themselves first as events agencies.`],
      ['Which agency for a visual identity or a logo?', `${join(BRANDING, 'and')} announce visual identity design.`],
      ['Which agencies run Meta, TikTok or Google ads?', `Among the agencies we verified, ${join(ADS, 'and')} announce online advertising.`],
      ['Which agency for signage and outdoor?', `${join(SIGNAGE, 'and')} announce signage or outdoor display.`],
      ['Which agencies do video and photo?', `${join(VIDEO, 'and')} announce photo or video production.`],
      ['Which agencies work with influencers or the press?', `${join(INFLUENCE, 'and')} announce influencer campaigns; ${join(PR, 'and')} announce press relations.`],
      ['Which agency for media buying?', `Among the agencies we verified, ${join(MEDIA, 'and')} announces advertising placement.`],
      ['How much does a communication agency in Algiers cost?', 'This page reports no prices. Ask for a written quote stating the deliverables, the number of posts or visuals, the duration and what stays yours at the end (source files, accounts).'],
      ['Communication agency or development company?', 'A communication agency makes a brand known and brings visitors. When the campaign must lead to a site that takes orders, an app or request tracking, that work belongs to a development company such as Symloop, which publishes this page.'],
      ['Other agencies?', `We also verified ${join(HIDDEN, 'and')}, which state Algiers without a commune or whose details come from two sites.`],
      ['How do I add my agency to this list?', 'Write to contact@symloop.com with the link to your services page. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Web agencies in Algeria', '/agences-web-algerie/'], ['IT companies in Algiers', '/entreprises-informatiques/alger/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `وكالات الاتصال في الجزائر العاصمة 2027: قائمة موثقة من ${N} وكالات (إشهار، فعاليات، رقمي)`,
    seoTitle: `وكالة اتصال في الجزائر العاصمة 2027: ${N} وكالات موثقة`,
    seoDescription: `وكالات الاتصال في الجزائر العاصمة سنة 2027: ${N} وكالات موثقة مع البلدية والخدمات (الهوية البصرية، شبكات التواصل، الإشهار، اللافتات، الفعاليات، الفيديو، العلاقات الصحفية) المأخوذة من مواقعها. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'وكالة اتصال الجزائر العاصمة 2027, وكالة اتصال الجزائر, وكالة إشهار الجزائر العاصمة, وكالة فعاليات الجزائر, وكالة تسويق رقمي الجزائر',
    colCompany: 'الوكالة', colDoes: 'الخدمات', colFact: 'ما يذكره موقعها', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن وكالات الاتصال في الجزائر العاصمة: وكالات شاملة، وكالات فعاليات، وكالة تسويق رقمي، مؤسسة لافتات، مجموعة استشارات، و Symloop التي تنشر القائمة وتبني المواقع والتطبيقات. لكل واحدة: البلدية والخدمات المأخوذة من موقعها؛ Symloop في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['الهوية البصرية', 'branding'], ['شبكات التواصل', 'social_media'], ['الفعاليات', 'events'], ['الصورة والفيديو', 'video'], ['اللافتات والإعلان الخارجي', 'outdoor'], ['العلاقات الصحفية', 'pr'], ['مواقع الويب', 'website']],
    method: [
      'بحثنا بكلمات بسيطة مثل «وكالة اتصال الجزائر العاصمة» و«وكالة إشهار الجزائر العاصمة» و«وكالة فعاليات الجزائر». واستُعملت الأدلة لاكتشاف الأسماء فقط، لا لإثبات المعلومات.',
      'تدخل الوكالة القائمة إذا كان موقعها يفتح، يذكر عنواناً في ولاية الجزائر ويُظهر نشاطاً منذ 2025. والخدمات هي ما يعدّده الموقع. ولا ننقل أي سعر ولا اسم زبون ولا عدد موظفين ولا جائزة ولا سنة تأسيس. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نتعامل مع أي من هذه الوكالات: المذكور هو ما تعلنه كل واحدة. اطلبوا أمثلة لأعمال حديثة وعرض سعر مكتوباً قبل الاختيار.',
      'كثير من وكالات العاصمة لم يكن في موقعها شيء مؤرخ منذ 2025، أو لا عنوان، في تاريخ التحقق: فهي غير مذكورة هنا. وشركات تطوير الويب في قائمتنا لوكالات الويب.',
    ],
    fix: 'معلومة خاطئة أو وكالتكم غير مدرجة؟ راسلونا مع رابط صفحة خدماتكم، ونصحّح:',
    faq: [
      ['ما هي أفضل وكالة اتصال في الجزائر العاصمة سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما تعلنه كل وكالة؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست وكالة اتصال. والاختيار الصحيح يتوقف على الحاجة: هوية، حملة، فعالية أو شبكات تواصل.`],
      ['ما هي الوكالات التي تسيّر شبكات التواصل في العاصمة؟', `${join(SOCIAL, 'و')} تعلن تسيير شبكات التواصل.`],
      ['أي وكالة لتنظيم فعالية في الجزائر العاصمة؟', `${join(EVENTS, 'و')} تعلن تنظيم الفعاليات؛ و COM EVENT’AL و South & North تقدّمان نفسيهما أولاً كوكالتي فعاليات.`],
      ['أي وكالة لهوية بصرية أو شعار؟', `${join(BRANDING, 'و')} تعلن تصميم الهوية البصرية.`],
      ['ما هي الوكالات التي تدير إعلانات Meta أو TikTok أو Google؟', `من بين الوكالات التي تحققنا منها، ${join(ADS, 'و')} تعلن الإعلان عبر الإنترنت.`],
      ['أي وكالة للافتات والإعلان الخارجي؟', `${join(SIGNAGE, 'و')} تعلن اللافتات أو الإعلان الخارجي.`],
      ['ما هي الوكالات التي تنجز الفيديو والصور؟', `${join(VIDEO, 'و')} تعلن إنتاج الصور أو الفيديو.`],
      ['ما هي الوكالات التي تعمل مع المؤثرين أو الصحافة؟', `${join(INFLUENCE, 'و')} تعلن حملات المؤثرين؛ و${join(PR, 'و')} تعلن العلاقات الصحفية.`],
      ['أي وكالة لشراء المساحات الإعلانية؟', `من بين الوكالات التي تحققنا منها، ${join(MEDIA, 'و')} تعلن وضع الإعلانات.`],
      ['كم تكلف وكالة اتصال في الجزائر العاصمة؟', 'لا تنقل هذه الصفحة أي سعر. اطلبوا عرضاً مكتوباً يحدد المُخرجات، عدد المنشورات أو التصاميم، المدة وما يبقى لكم في النهاية (الملفات الأصلية، الحسابات).'],
      ['وكالة اتصال أم شركة تطوير؟', 'وكالة الاتصال تُعرّف بالعلامة وتجلب الزوار. وحين يجب أن تقود الحملة إلى موقع يستقبل الطلبيات أو تطبيق أو متابعة للطلبات، فهذا عمل شركة تطوير مثل Symloop التي تنشر هذه الصفحة.'],
      ['وكالات أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي تذكر الجزائر العاصمة دون بلدية أو تأتي معلوماتها من موقعين.`],
      ['كيف أضيف وكالتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط صفحة خدماتكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['وكالات الويب في الجزائر', '/agences-web-algerie/'], ['شركات المعلوماتية في الجزائر العاصمة', '/entreprises-informatiques/alger/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="agences-communication-alger" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
