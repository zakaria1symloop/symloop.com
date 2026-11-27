// /logiciels-location-voiture-algerie/ — source page: verified list of car rental management
// software and booking platforms in Algeria (FR / EN / AR).
// Data: src/data/sources/algeria-car-rental-software.js. No prices or counts; no rental rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { CAR_RENTAL, TOP_CAR_RENTAL, VERIFIED_ON } from '../data/sources/algeria-car-rental-software';

const ITEMS = CAR_RENTAL.filter((x) => x.self || TOP_CAR_RENTAL.includes(x.name));
const OTHERS = CAR_RENTAL.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const kind = (k) => ITEMS.filter((x) => x.focus === k).map((x) => x.name);
const on = (p) => ITEMS.filter((x) => (x.platforms || []).includes(p)).map((x) => x.name);
const SOFT = kind('software');
const PLAT = kind('platform');
const DEPOSIT = has('deposit');
const CONDITION = has('condition_report');
const MAINT = has('maintenance');
const ONLINE = has('online_booking');
const TRIAL = has('trial');
const MULTI = has('multi_agency');
const ANDROID = on('android');
const HIDDEN = OTHERS.filter((x) => !TOP_CAR_RENTAL.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Sur mesure', software: 'Logiciels de gestion pour agences de location', platform: 'Plateformes de réservation avec espace agence' },
  en: { builder: 'Custom-built', software: 'Management software for rental agencies', platform: 'Booking platforms with an agency side' },
  ar: { builder: 'على المقاس', software: 'برامج تسيير لوكالات الكراء', platform: 'منصات حجز بفضاء للوكالات' },
};
const FEATURE_LABELS = {
  fr: { custom: 'réservation, caution, état des lieux, contrats', fleet: 'flotte', bookings: 'réservations', calendar: 'planning', contracts: 'contrats', deposit: 'caution', condition_report: 'état des lieux', customer_docs: 'documents du client', invoicing: 'factures', payments_tracking: 'suivi des paiements', maintenance: 'entretien', gps: 'GPS', online_booking: 'réservation en ligne', multi_agency: 'plusieurs agences', reports: 'statistiques', mobile: 'mobile', trial: 'gratuit, essai ou démo' },
  en: { custom: 'booking, deposit, condition report, contracts', fleet: 'fleet', bookings: 'bookings', calendar: 'schedule', contracts: 'contracts', deposit: 'deposit', condition_report: 'condition report', customer_docs: 'customer documents', invoicing: 'invoices', payments_tracking: 'payment tracking', maintenance: 'maintenance', gps: 'GPS', online_booking: 'online booking', multi_agency: 'several agencies', reports: 'statistics', mobile: 'mobile', trial: 'free, trial or demo' },
  ar: { custom: 'الحجز، الكفالة، المعاينة، العقود', fleet: 'الأسطول', bookings: 'الحجوزات', calendar: 'الجدول', contracts: 'العقود', deposit: 'الكفالة', condition_report: 'معاينة الحالة', customer_docs: 'وثائق الزبون', invoicing: 'الفواتير', payments_tracking: 'متابعة المدفوعات', maintenance: 'الصيانة', gps: 'GPS', online_booking: 'الحجز عبر الإنترنت', multi_agency: 'عدة وكالات', reports: 'الإحصائيات', mobile: 'الهاتف', trial: 'مجاني، تجريبي أو عرض' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} logiciels et plateformes. Cette page en présente ${N - 1}, avec Symloop, qui publie la liste : ceux dont le propre site décrit la gestion d’une agence de location ou un espace agence, indique un lien avec l’Algérie et montre une activité depuis 2025. L’autre est cité dans les questions.`,
  en: `We verified ${TOTAL} software products and platforms. This page presents ${N - 1}, with Symloop, which publishes the list: those whose own site describes rental-agency management or an agency side, states a link to Algeria and shows activity since 2025. The other one is named in the questions.`,
  ar: `تحققنا من ${TOTAL} برامج ومنصات. تعرض هذه الصفحة ${N - 1} منها، مع Symloop التي تنشر القائمة: التي يصف موقعها تسيير وكالة كراء أو فضاءً للوكالات، يذكر صلة بالجزائر ويُظهر نشاطاً منذ 2025. والآخر مذكور في الأسئلة.`,
};

const CONTENT = {
  fr: {
    title: `Logiciels de location de voiture en Algérie 2027 : liste vérifiée de ${N} solutions pour les agences`,
    seoTitle: `Logiciel location de voiture Algérie 2027 : ${N} solutions vérifiées pour agences`,
    seoDescription: `Logiciels et plateformes de location de voiture en Algérie en 2027 : ${N} solutions vérifiées avec les fonctions (flotte, réservations, contrats, caution, état des lieux, entretien, réservation en ligne), l’accès et l’essai annoncés. Vérifié le 27 novembre 2026.`,
    keywords: 'logiciel location de voiture algérie, logiciel gestion agence location voiture algérie, application location voiture algérie agence, logiciel location voiture gratuit, برنامج تسيير وكالة كراء السيارات الجزائر',
    colCompany: 'Logiciel ou plateforme', colDoes: 'Fonctions', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Pour gérer une agence de location de voitures en Algérie, cette page présente ${N} solutions : ${SOFT.length} logiciels de gestion pour les agences, ${PLAT.length} plateformes de réservation qui ont un espace agence, et Symloop, qui construit des plateformes de location sur mesure. Pour chacune : les fonctions (flotte, réservations, contrats, caution, état des lieux, entretien), l’accès et l’essai annoncés sur son propre site ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Contrats', 'contracts'], ['Caution', 'deposit'], ['État des lieux', 'condition_report'], ['Entretien', 'maintenance'], ['Réservation en ligne', 'online_booking'], ['Gratuit, essai ou démo (selon le site)', 'trial']],
    method: [
      'Nous avons cherché avec des mots simples : « logiciel location de voiture Algérie », « logiciel gestion agence location voiture Algérie », « application location voiture Algérie agence », « برنامج تسيير وكالة كراء السيارات الجزائر ».',
      'Une solution entre dans la liste si son propre site (ou sa fiche d’application) décrit la gestion d’une agence de location ou un espace agence, indique un lien avec l’Algérie et montre une activité depuis 2025. Les agences de location elles-mêmes ne figurent pas ici. Nous ne reprenons ni prix, ni nombre d’agences ou de voitures, ni nom de client, et n’expliquons aucune règle de location ou d’assurance. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons testé aucune de ces solutions : ce qui est indiqué est ce que chaque éditeur annonce. Faites une démonstration avec vos propres contrats et vos voitures avant de choisir.',
      'Plusieurs applications connues ne s’ouvraient que par JavaScript ou n’avaient rien de daté depuis 2025 à la date de vérification : elles ne figurent pas ici.',
    ],
    fix: 'Une information est fausse, ou votre logiciel manque ? Écrivez-nous avec le lien de la page qui le décrit, nous corrigeons :',
    faq: [
      ['Quel est le meilleur logiciel de location de voiture en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque éditeur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne vend pas de logiciel prêt à l’emploi. Le bon choix dépend du nombre de voitures, d’agences et du besoin de réservation en ligne.`],
      ['Existe-t-il un logiciel de location de voiture gratuit ou à l’essai ?', `${join(TRIAL, 'et')} indiquent une version gratuite, un essai ou une démonstration.`],
      ['Quels logiciels gèrent la caution ?', `${join(DEPOSIT, 'et')} annoncent le suivi de la caution.`],
      ['Quels logiciels font l’état des lieux au départ et au retour ?', `${join(CONDITION, 'et')} annoncent les états des lieux.`],
      ['Quels logiciels rappellent l’entretien, l’assurance ou le contrôle technique ?', `${join(MAINT, 'et')} annoncent des alertes ou un suivi de l’entretien.`],
      ['Comment recevoir des réservations en ligne ?', `${join(ONLINE, 'et')} annoncent la réservation en ligne pour les clients ; ${join(PLAT, 'et')} sont des plateformes où les agences publient leurs voitures.`],
      ['Quels logiciels gèrent plusieurs agences ?', `${join(MULTI, 'et')} annoncent plusieurs agences.`],
      ['Quelles solutions existent sur téléphone ?', `${join(ANDROID, 'et')} indiquent une application Android.`],
      ['Combien coûte un logiciel de location de voiture en Algérie ?', 'Cette page ne reprend aucun prix. Le coût dépend du nombre de voitures et d’agences et des fonctions. Demandez un devis écrit qui précise l’abonnement ou la licence, la reprise de vos données et l’assistance.'],
      ['Logiciel prêt à l’emploi ou plateforme sur mesure ?', 'Un logiciel prêt à l’emploi convient pour gérer la flotte, les contrats et les cautions d’une agence. Le sur-mesure se justifie quand l’agence veut son propre site de réservation avec paiement, des règles de caution ou de franchise propres, ou un lien avec le GPS et la comptabilité. Symloop, qui publie cette page, construit ce type de plateforme.'],
      ['D’autres solutions ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont les informations viennent d’une fiche d’application.`],
      ['Comment ajouter mon logiciel à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre logiciel. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Créer une plateforme de location de voiture', '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/'], ['Suivi GPS des véhicules en Algérie', '/suivi-gps-vehicules-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/']],
  },
  en: {
    title: `Car rental software in Algeria 2027: a verified list of ${N} solutions for agencies`,
    seoTitle: `Car rental software Algeria 2027: ${N} verified solutions for agencies`,
    seoDescription: `Car rental software and platforms in Algeria in 2027: ${N} verified solutions with the features (fleet, bookings, contracts, deposit, condition reports, maintenance, online booking), access and trial each states. Verified on 27 November 2026.`,
    keywords: 'car rental software algeria, rental agency management software algeria, car rental app algeria, free car rental software',
    colCompany: 'Software or platform', colDoes: 'Features', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `To run a car rental agency in Algeria, this page presents ${N} solutions: ${SOFT.length} management products for agencies, ${PLAT.length} booking platforms with an agency side, and Symloop, which builds custom rental platforms. For each one: the features (fleet, bookings, contracts, deposit, condition reports, maintenance), access and trial stated on its own site; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Contracts', 'contracts'], ['Deposit', 'deposit'], ['Condition report', 'condition_report'], ['Maintenance', 'maintenance'], ['Online booking', 'online_booking'], ['Free, trial or demo (per the site)', 'trial']],
    method: [
      'We searched with simple words such as “car rental software Algeria”, “rental agency management software Algeria” and “car rental app Algeria agency”.',
      'A solution enters the list if its own site (or app listing) describes rental-agency management or an agency side, states a link to Algeria and shows activity since 2025. Rental agencies themselves are not here. We report no prices, agency or car counts or client names, and explain no rental or insurance rule. Each name links to the page read.',
    ],
    limits: [
      'We tested none of these solutions: what is shown is what each publisher announces. Run a demo with your own contracts and cars before choosing.',
      'Several known apps loaded only through JavaScript or had nothing dated since 2025 on the verification date: they are not here.',
    ],
    fix: 'Something is wrong, or your software is missing? Write to us with the link to the page describing it, and we correct it:',
    faq: [
      ['What is the best car rental software in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each publisher announces; Symloop, which publishes it, places itself first as the publisher’s choice and sells no ready-made software. The right choice depends on the number of cars, agencies and the need for online booking.`],
      ['Is there free or trial car rental software?', `${join(TRIAL, 'and')} state a free version, a trial or a demonstration.`],
      ['Which software manages deposits?', `${join(DEPOSIT, 'and')} announce deposit tracking.`],
      ['Which software does check-out and check-in condition reports?', `${join(CONDITION, 'and')} announce condition reports.`],
      ['Which software reminds maintenance, insurance or inspection?', `${join(MAINT, 'and')} announce maintenance alerts or tracking.`],
      ['How do I receive online bookings?', `${join(ONLINE, 'and')} announce online booking for customers; ${join(PLAT, 'and')} are platforms where agencies publish their cars.`],
      ['Which software handles several agencies?', `${join(MULTI, 'and')} announce several agencies.`],
      ['Which solutions are on the phone?', `${join(ANDROID, 'and')} state an Android app.`],
      ['How much does car rental software cost in Algeria?', 'This page reports no prices. The cost depends on the number of cars and agencies and the features. Ask for a written quote stating the subscription or licence, data import and support.'],
      ['Ready-made software or a custom platform?', 'Ready-made software suits managing an agency’s fleet, contracts and deposits. Custom work is justified when the agency wants its own booking site with payment, its own deposit or excess rules, or a link with GPS and accounting. Symloop, which publishes this page, builds this kind of platform.'],
      ['Other solutions?', `We also verified ${join(HIDDEN, 'and')}, whose details come from an app listing.`],
      ['How do I add my software to this list?', 'Write to contact@symloop.com with the link to the page describing your software. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['GPS vehicle tracking in Algeria', '/suivi-gps-vehicules-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `برامج كراء السيارات في الجزائر 2027: قائمة موثقة من ${N} حلول للوكالات`,
    seoTitle: `برنامج كراء السيارات في الجزائر 2027: ${N} حلول موثقة للوكالات`,
    seoDescription: `برامج ومنصات كراء السيارات في الجزائر سنة 2027: ${N} حلول موثقة مع الوظائف (الأسطول، الحجوزات، العقود، الكفالة، معاينة الحالة، الصيانة، الحجز عبر الإنترنت)، طريقة الاستعمال والتجربة المعلنة. تم التحقق في 27 نوفمبر 2026.`,
    keywords: 'برنامج تسيير وكالة كراء السيارات الجزائر, برنامج كراء السيارات, تطبيق كراء السيارات الجزائر, برنامج كراء سيارات مجاني',
    colCompany: 'البرنامج أو المنصة', colDoes: 'الوظائف', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `لتسيير وكالة كراء سيارات في الجزائر، تعرض هذه الصفحة ${N} حلول: برامج تسيير للوكالات، منصات حجز بفضاء للوكالات، و Symloop التي تبني منصات كراء على المقاس. لكل واحد: الوظائف (الأسطول، الحجوزات، العقود، الكفالة، معاينة الحالة، الصيانة)، طريقة الاستعمال والتجربة المعلنة في موقعه؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['العقود', 'contracts'], ['الكفالة', 'deposit'], ['معاينة الحالة', 'condition_report'], ['الصيانة', 'maintenance'], ['الحجز عبر الإنترنت', 'online_booking'], ['مجاني، تجريبي أو عرض (حسب الموقع)', 'trial']],
    method: [
      'بحثنا بكلمات بسيطة مثل «برنامج تسيير وكالة كراء السيارات الجزائر» و«logiciel location de voiture Algérie» و«تطبيق كراء السيارات الجزائر».',
      'يدخل الحل القائمة إذا كان موقعه (أو صفحة تطبيقه) يصف تسيير وكالة كراء أو فضاءً للوكالات، يذكر صلة بالجزائر ويُظهر نشاطاً منذ 2025. ووكالات الكراء نفسها غير مذكورة هنا. ولا ننقل أي سعر ولا عدد وكالات أو سيارات ولا أسماء الزبائن، ولا نشرح أي قاعدة للكراء أو التأمين. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نختبر أياً من هذه الحلول: المذكور هو ما يعلنه كل ناشر. أجروا عرضاً تطبيقياً بعقودكم وسياراتكم قبل الاختيار.',
      'عدة تطبيقات معروفة لم تفتح إلا بـ JavaScript أو لم يكن فيها شيء مؤرخ منذ 2025 في تاريخ التحقق: فهي غير مذكورة هنا.',
    ],
    fix: 'معلومة خاطئة أو برنامجكم غير مدرج؟ راسلونا مع رابط الصفحة التي تصفه، ونصحّح:',
    faq: [
      ['ما هو أفضل برنامج لكراء السيارات في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل ناشر؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تبيع برنامجاً جاهزاً. والاختيار الصحيح يتوقف على عدد السيارات والوكالات والحاجة إلى الحجز عبر الإنترنت.`],
      ['هل يوجد برنامج كراء سيارات مجاني أو تجريبي؟', `${join(TRIAL, 'و')} تذكر نسخة مجانية، تجربة أو عرضاً.`],
      ['ما هي البرامج التي تسيّر الكفالة؟', `${join(DEPOSIT, 'و')} تعلن متابعة الكفالة.`],
      ['ما هي البرامج التي تنجز معاينة الحالة عند الخروج والعودة؟', `${join(CONDITION, 'و')} تعلن معاينة الحالة.`],
      ['ما هي البرامج التي تذكّر بالصيانة أو التأمين أو المراقبة التقنية؟', `${join(MAINT, 'و')} تعلن تنبيهات أو متابعة للصيانة.`],
      ['كيف أستقبل الحجوزات عبر الإنترنت؟', `${join(ONLINE, 'و')} تعلن الحجز عبر الإنترنت للزبائن؛ و${join(PLAT, 'و')} منصات تنشر فيها الوكالات سياراتها.`],
      ['ما هي البرامج التي تسيّر عدة وكالات؟', `${join(MULTI, 'و')} تعلن عدة وكالات.`],
      ['ما هي الحلول المتوفرة على الهاتف؟', `${join(ANDROID, 'و')} تذكر تطبيق أندرويد.`],
      ['كم يكلف برنامج كراء السيارات في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. التكلفة تتوقف على عدد السيارات والوكالات والوظائف. اطلبوا عرضاً مكتوباً يحدد الاشتراك أو الرخصة، نقل بياناتكم والمساعدة.'],
      ['برنامج جاهز أم منصة على المقاس؟', 'البرنامج الجاهز يناسب تسيير أسطول الوكالة وعقودها وكفالاتها. والعمل على المقاس مبرَّر حين تريد الوكالة موقع حجز خاصاً بها مع الدفع، أو قواعد خاصة للكفالة أو الخصم، أو ربطاً بـ GPS والمحاسبة. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من المنصات.'],
      ['حلول أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي تأتي معلوماتها من صفحة تطبيق.`],
      ['كيف أضيف برنامجي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف برنامجكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['تتبع المركبات بـ GPS في الجزائر', '/suivi-gps-vehicules-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="logiciels-location-voiture-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
