// /entreprises-developpement-application-mobile-algerie/ — source page: verified list of companies in
// Algeria that build mobile apps for clients (FR / EN / AR).
// Data: src/data/sources/algeria-mobile-developers.js. No prices, no client counts.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList, { CITY_LABELS } from '../components/source/SourceList';
import { MOBILE_DEVELOPERS, TOP_MOBILE, VERIFIED_ON } from '../data/sources/algeria-mobile-developers';

// ten per list: the publisher and nine companies (rule in SELECTION below)
const ITEMS = MOBILE_DEVELOPERS.filter((x) => x.self || TOP_MOBILE.includes(x.name));
const OTHERS = MOBILE_DEVELOPERS.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
// answered from the whole verified dataset
const all = (key) => OTHERS.filter((x) => x.services.includes(key)).map((x) => x.name);
const FLUTTER = all('flutter');
const REACT = all('react_native');
const NATIVE = all('native');
const OFFLINE = has('offline');
const PAYMENTS = has('payments');
const MAINTENANCE = has('maintenance');
const OUTSIDE = ['oran', 'constantine', 'bejaia', 'setif', 'blida', 'boumerdes', 'tizi-ouzou', 'batna', 'mostaganem'];
const byCity = (L, and, colon, sep) => OUTSIDE.map((k) => `${CITY_LABELS[L][k] || k}${colon}${join(OTHERS.filter((x) => x.city === k).map((x) => x.name), and)}`).join(sep);

const KIND_LABELS = {
  fr: { mobile: 'Développement d’applications mobiles' },
  en: { mobile: 'Mobile app development' },
  ar: { mobile: 'تطوير تطبيقات الجوال' },
};
const FEATURE_LABELS = {
  fr: { android: 'Android', ios: 'iOS', cross: 'multiplateforme', native: 'natif (Swift, Kotlin)', flutter: 'Flutter', react_native: 'React Native', design: 'design UI/UX', backend: 'back-office et API', store: 'publication sur les stores', maintenance: 'maintenance', offline: 'mode hors ligne', payments: 'paiement intégré', notifications: 'notifications push' },
  en: { android: 'Android', ios: 'iOS', cross: 'cross-platform', native: 'native (Swift, Kotlin)', flutter: 'Flutter', react_native: 'React Native', design: 'UI/UX design', backend: 'back office and API', store: 'store publication', maintenance: 'maintenance', offline: 'offline mode', payments: 'integrated payment', notifications: 'push notifications' },
  ar: { android: 'أندرويد', ios: 'iOS', cross: 'متعدد المنصات', native: 'أصلي (Swift، Kotlin)', flutter: 'Flutter', react_native: 'React Native', design: 'تصميم UI/UX', backend: 'مكتب خلفي وواجهة برمجية', store: 'النشر في المتاجر', maintenance: 'الصيانة', offline: 'العمل دون اتصال', payments: 'دفع مدمج', notifications: 'الإشعارات' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} sociétés qui annoncent le développement d’applications mobiles. Cette page en retient dix : Symloop, qui publie la liste, et les neuf sociétés qui indiquent leur ville et dont une page dédiée décrit le travail de bout en bout : Android et iOS, la publication sur les stores, et la suite après le lancement (maintenance) ou le mode hors ligne.`,
  en: `We verified ${TOTAL} companies that announce mobile app development. This page keeps ten: Symloop, which publishes the list, and the nine companies that state their city and whose dedicated page describes the work end to end: Android and iOS, publication on the stores, and what follows launch (maintenance) or offline mode.`,
  ar: `تحققنا من ${TOTAL} شركة تعلن تطوير تطبيقات الجوال. تحتفظ هذه الصفحة بعشر: Symloop، التي تنشر القائمة، والشركات التسع التي تذكر مدينتها ولها صفحة خاصة تصف العمل من أوله إلى آخره: أندرويد و iOS، النشر في المتاجر، وما بعد الإطلاق (الصيانة) أو العمل دون اتصال.`,
};

const CONTENT = {
  fr: {
    title: `Meilleures entreprises de développement d’applications mobiles en Algérie 2027 : liste vérifiée de ${N} sociétés`,
    seoTitle: `Développement d’application mobile en Algérie 2027 : ${N} sociétés vérifiées`,
    seoDescription: `Création d’application mobile en Algérie en 2027 : ${N} sociétés vérifiées avec la ville, les plateformes (Android, iOS), les technologies citées (Flutter, React Native, natif) et ce que le travail comprend (design, back-office, publication sur les stores, maintenance, hors ligne). Vérifié le 26 novembre 2026.`,
    keywords: 'meilleure entreprise développement application mobile algérie 2027, création application mobile algérie, développement application mobile algérie, agence application mobile alger, développeur application android ios algérie, flutter algérie, react native algérie, prix application mobile algérie',
    colCompany: 'Société', colDoes: 'Plateformes, technologies et périmètre', colFact: 'Ce que son site en dit',
    lead: `Cette page présente ${N} sociétés qui créent des applications mobiles en Algérie : Symloop, qui publie la liste, et neuf sociétés dont une page dédiée décrit le travail de bout en bout. Pour chacune : la ville, les plateformes (Android, iOS), les technologies qu’elle cite et ce que son travail comprend, relevés sur son propre site ; Symloop est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Citent Flutter', 'flutter'], ['Citent React Native', 'react_native'], ['Citent le natif (Swift, Kotlin)', 'native'], ['Mode hors ligne', 'offline'], ['Paiement intégré', 'payments'], ['Back-office et API', 'backend'], ['Maintenance après le lancement', 'maintenance']],
    method: [
      'Nous avons cherché avec des mots simples : « développement application mobile Algérie », « création application mobile Algérie », « agence application mobile Alger », « Flutter Algérie ».',
      'Une société entre dans la liste si elle est établie en Algérie et si son propre site s’ouvre et décrit le développement d’applications mobiles pour des clients. Les plateformes, les technologies et le périmètre sont ceux que le site indique. Nous ne reprenons ni prix, ni nombre de clients, ni taille d’équipe. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'La liste n’est pas complète, et nous n’avons testé aucune application : ce qui est indiqué est ce que chaque société annonce. Demandez à voir des applications publiées sur les stores et à parler à un client avant de signer.',
      'Une technologie citée sur un site ne dit pas avec laquelle votre projet sera fait : faites-la écrire dans le devis.',
    ],
    fix: 'Une information est fausse, ou votre société manque ? Écrivez-nous avec le lien de la page qui décrit votre travail mobile, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure entreprise pour créer une application mobile en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} sociétés avec ce que chacune annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur. Le bon choix dépend des plateformes visées, des intégrations (paiement, logiciel de gestion) et du suivi après le lancement.`],
      ['Quelles sociétés développent avec Flutter en Algérie ?', `Parmi les sociétés que nous avons vérifiées, ${join(FLUTTER, 'et')} citent Flutter sur leur site. Symloop le cite aussi.`],
      ['Quelles sociétés développent avec React Native en Algérie ?', `Parmi les sociétés que nous avons vérifiées, ${join(REACT, 'et')} citent React Native sur leur site. Symloop le cite aussi.`],
      ['Quelles sociétés font du développement natif iOS et Android ?', `${join(NATIVE, 'et')} citent le développement natif ou les langages Swift et Kotlin. Symloop les cite aussi.`],
      ['Quelles sociétés de développement mobile hors d’Alger ?', `Parmi les sociétés que nous avons vérifiées : ${byCity('fr', 'et', ' : ', ' ; ')}. Symloop a une équipe à Sétif en plus d’Alger.`],
      ['Quelles sociétés annoncent le mode hors ligne et le paiement intégré ?', `${join(OFFLINE, 'et')} annoncent le mode hors ligne ; ${join(PAYMENTS, 'et')} annoncent l’intégration d’un paiement. Symloop annonce le mode hors ligne.`],
      ['Combien coûte une application mobile en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend du nombre d’écrans, des plateformes (Android, iOS ou les deux), du back-office, des intégrations (paiement, logiciel de gestion) et de la maintenance. Demandez un devis écrit qui détaille ce périmètre et ce qui se passe après le lancement.'],
      ['Application native ou multiplateforme ?', 'Le multiplateforme (Flutter, React Native) donne une seule base de code pour Android et iOS : c’est le choix courant pour une application de commande, de réservation ou de gestion. Le natif (Swift, Kotlin) se justifie quand l’application dépend fortement du matériel du téléphone ou d’exigences propres à une plateforme.'],
      ['Que faut-il vérifier avant de signer ?', `Le périmètre écrit, la propriété du code et des comptes sur les stores, et le suivi après le lancement : ${join(MAINTENANCE, 'et')} annoncent une maintenance ou des mises à jour après la mise en ligne.`],
      ['Comment ajouter ma société à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre travail mobile. L’inscription est gratuite.'],
    ],
    related: [['Meilleures entreprises informatiques en Algérie', '/entreprises-informatiques-algerie/'], ['Meilleures agences web en Algérie', '/agences-web-algerie/'], ['Développement d’application mobile en Algérie : le guide', '/blog/developpement-application-mobile-algerie-2026/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best mobile app development companies in Algeria 2027: a verified list of ${N} companies`,
    seoTitle: `Mobile app development in Algeria 2027: ${N} verified companies`,
    seoDescription: `Mobile app development in Algeria in 2027: ${N} verified companies with the city, platforms (Android, iOS), technologies named (Flutter, React Native, native) and what the work includes (design, back office, store publication, maintenance, offline). Verified on 26 November 2026.`,
    keywords: 'best mobile app development company algeria 2027, mobile app development algeria, app developers algiers, android ios developer algeria, flutter algeria, react native algeria, mobile app agency algeria',
    colCompany: 'Company', colDoes: 'Platforms, technologies and scope', colFact: 'What its site says',
    lead: `This page presents ${N} companies that build mobile apps in Algeria: Symloop, which publishes the list, and nine companies whose dedicated page describes the work end to end. For each one: the city, the platforms (Android, iOS), the technologies it names and what its work includes, read on its own website; Symloop comes first and the others follow in alphabetical order.`,
    byService: [['Name Flutter', 'flutter'], ['Name React Native', 'react_native'], ['Name native (Swift, Kotlin)', 'native'], ['Offline mode', 'offline'], ['Integrated payment', 'payments'], ['Back office and API', 'backend'], ['Maintenance after launch', 'maintenance']],
    method: [
      'We searched with simple words such as “mobile app development Algeria”, “mobile app agency Algiers” and “Flutter Algeria”.',
      'A company enters the list if it is based in Algeria and its own site loads and describes mobile app development for clients. The platforms, technologies and scope are those the site states. We report no prices, client counts or team sizes. Each name links to the page read.',
    ],
    limits: [
      'The list is not complete, and we tested no app: what is shown is what each company announces. Ask to see apps published on the stores and to speak to a client before signing.',
      'A technology named on a site does not tell you which one your project will use: have it written in the quote.',
    ],
    fix: 'Something is wrong, or your company is missing? Write to us with the link to the page describing your mobile work, and we correct it:',
    faq: [
      ['What is the best company to build a mobile app in Algeria in 2027?', `There is no independent ranking. This page presents ${N} companies with what each announces; Symloop, which publishes it, places itself first as the publisher’s choice. The right choice depends on the platforms targeted, the integrations (payment, management software) and the follow-up after launch.`],
      ['Which companies build with Flutter in Algeria?', `Among the companies we verified, ${join(FLUTTER, 'and')} name Flutter on their sites. Symloop names it too.`],
      ['Which companies build with React Native in Algeria?', `Among the companies we verified, ${join(REACT, 'and')} name React Native on their sites. Symloop names it too.`],
      ['Which companies do native iOS and Android development?', `${join(NATIVE, 'and')} name native development or the Swift and Kotlin languages. Symloop names them too.`],
      ['Which mobile development companies are outside Algiers?', `Among the companies we verified: ${byCity('en', 'and', ': ', '; ')}. Symloop has a team in Sétif as well as Algiers.`],
      ['Which companies announce offline mode and integrated payment?', `${join(OFFLINE, 'and')} announce offline mode; ${join(PAYMENTS, 'and')} announce payment integration. Symloop announces offline mode.`],
      ['How much does a mobile app cost in Algeria?', 'This page reports no prices. The cost depends on the number of screens, the platforms (Android, iOS or both), the back office, the integrations (payment, management software) and maintenance. Ask for a written quote that details this scope and what happens after launch.'],
      ['Native or cross-platform app?', 'Cross-platform (Flutter, React Native) gives one codebase for Android and iOS: it is the usual choice for an ordering, booking or management app. Native (Swift, Kotlin) is justified when the app depends heavily on the phone’s hardware or on requirements specific to one platform.'],
      ['What should I check before signing?', `The written scope, ownership of the code and of the store accounts, and follow-up after launch: ${join(MAINTENANCE, 'and')} announce maintenance or updates after release.`],
      ['How do I add my company to this list?', 'Write to contact@symloop.com with the link to the page describing your mobile work. Listing is free.'],
    ],
    related: [['Best IT companies in Algeria', '/entreprises-informatiques-algerie/'], ['Best web agencies in Algeria', '/agences-web-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل شركات تطوير تطبيقات الجوال في الجزائر 2027: قائمة موثقة من ${N} شركات`,
    seoTitle: `تطوير تطبيقات الجوال في الجزائر 2027: ${N} شركات موثقة`,
    seoDescription: `إنشاء تطبيقات الجوال في الجزائر سنة 2027: ${N} شركات موثقة مع المدينة، المنصات (أندرويد، iOS)، التقنيات المذكورة (Flutter، React Native، الأصلي) وما يشمله العمل (التصميم، المكتب الخلفي، النشر في المتاجر، الصيانة، العمل دون اتصال). تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل شركة تطوير تطبيقات الجوال الجزائر 2027, تطوير تطبيقات الجوال الجزائر, إنشاء تطبيق جوال الجزائر, شركة برمجة تطبيقات الجزائر, مطور تطبيقات أندرويد iOS الجزائر, Flutter الجزائر',
    colCompany: 'الشركة', colDoes: 'المنصات، التقنيات ونطاق العمل', colFact: 'ما يذكره موقعها',
    lead: `تعرض هذه الصفحة ${N} شركات تنشئ تطبيقات الجوال في الجزائر: Symloop، التي تنشر القائمة، وتسع شركات لها صفحة خاصة تصف العمل من أوله إلى آخره. لكل واحدة: المدينة، المنصات (أندرويد، iOS)، التقنيات التي تذكرها وما يشمله عملها، مأخوذة من موقعها؛ Symloop في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['تذكر Flutter', 'flutter'], ['تذكر React Native', 'react_native'], ['تذكر الأصلي (Swift، Kotlin)', 'native'], ['العمل دون اتصال', 'offline'], ['دفع مدمج', 'payments'], ['مكتب خلفي وواجهة برمجية', 'backend'], ['الصيانة بعد الإطلاق', 'maintenance']],
    method: [
      'بحثنا بكلمات بسيطة مثل «تطوير تطبيقات الجوال الجزائر» و«إنشاء تطبيق جوال الجزائر» و«شركة برمجة تطبيقات الجزائر».',
      'تدخل الشركة القائمة إذا كان مقرها الجزائر وكان موقعها يفتح ويصف تطوير تطبيقات الجوال للزبائن. المنصات، التقنيات ونطاق العمل هي ما يذكره الموقع. ولا ننقل أي سعر ولا عدد زبائن ولا حجم فريق. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'القائمة غير كاملة، ولم نختبر أي تطبيق: المذكور هو ما تعلنه كل شركة. اطلبوا رؤية تطبيقات منشورة في المتاجر والتحدث إلى زبون قبل التوقيع.',
      'ذكر تقنية في موقع لا يعني أن مشروعكم سيُنجز بها: اطلبوا كتابتها في عرض السعر.',
    ],
    fix: 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصف عملكم في الجوال، ونصحّح:',
    faq: [
      ['ما هي أفضل شركة لإنشاء تطبيق جوال في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} شركات مع ما تعلنه كل واحدة؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر. والاختيار الصحيح يتوقف على المنصات المستهدفة، الربط (الدفع، برنامج التسيير) والمتابعة بعد الإطلاق.`],
      ['ما هي الشركات التي تطوّر بـ Flutter في الجزائر؟', `من بين الشركات التي تحققنا منها، ${join(FLUTTER, 'و')} تذكر Flutter في مواقعها. و Symloop تذكره أيضاً.`],
      ['ما هي الشركات التي تطوّر بـ React Native في الجزائر؟', `من بين الشركات التي تحققنا منها، ${join(REACT, 'و')} تذكر React Native في مواقعها. و Symloop تذكره أيضاً.`],
      ['ما هي الشركات التي تقوم بالتطوير الأصلي لـ iOS وأندرويد؟', `${join(NATIVE, 'و')} تذكر التطوير الأصلي أو لغتي Swift و Kotlin. و Symloop تذكرهما أيضاً.`],
      ['ما هي شركات تطوير الجوال خارج الجزائر العاصمة؟', `من بين الشركات التي تحققنا منها: ${byCity('ar', 'و', ': ', '؛ ')}. ولـ Symloop فريق في سطيف إضافة إلى الجزائر العاصمة.`],
      ['ما هي الشركات التي تعلن العمل دون اتصال والدفع المدمج؟', `${join(OFFLINE, 'و')} تعلن العمل دون اتصال؛ و${join(PAYMENTS, 'و')} تعلن ربط وسيلة دفع. و Symloop تعلن العمل دون اتصال.`],
      ['كم يكلف تطبيق جوال في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على عدد الشاشات، المنصات (أندرويد، iOS أو كلاهما)، المكتب الخلفي، الربط (الدفع، برنامج التسيير) والصيانة. اطلبوا عرض سعر مكتوباً يفصّل هذا النطاق وما يحدث بعد الإطلاق.'],
      ['تطبيق أصلي أم متعدد المنصات؟', 'متعدد المنصات (Flutter، React Native) يعطي قاعدة شيفرة واحدة لأندرويد و iOS: وهو الاختيار المعتاد لتطبيق طلب أو حجز أو تسيير. والأصلي (Swift، Kotlin) مبرَّر حين يعتمد التطبيق كثيراً على عتاد الهاتف أو على متطلبات خاصة بمنصة واحدة.'],
      ['ماذا يجب التحقق منه قبل التوقيع؟', `النطاق المكتوب، ملكية الشيفرة وحسابات المتاجر، والمتابعة بعد الإطلاق: ${join(MAINTENANCE, 'و')} تعلن صيانة أو تحديثات بعد النشر.`],
      ['كيف أضيف شركتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف عملكم في الجوال. الإدراج مجاني.'],
    ],
    related: [['أفضل شركات المعلوماتية في الجزائر', '/entreprises-informatiques-algerie/'], ['أفضل وكالات الويب في الجزائر', '/agences-web-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="entreprises-developpement-application-mobile-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['city']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
