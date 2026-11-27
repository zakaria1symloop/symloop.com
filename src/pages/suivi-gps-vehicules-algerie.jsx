// /suivi-gps-vehicules-algerie/ — source page: verified list of GPS vehicle tracking and fleet
// management companies in Algeria (FR / EN / AR). Data: src/data/sources/algeria-gps-tracking.js.
// No prices, no client names or counts, no authorisation rule.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { GPS_TRACKING, TOP_GPS, VERIFIED_ON } from '../data/sources/algeria-gps-tracking';

const ITEMS = GPS_TRACKING.filter((x) => x.self || TOP_GPS.includes(x.name));
const OTHERS = GPS_TRACKING.filter((x) => !x.self);
const TOTAL = OTHERS.length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const FUEL = has('fuel');
const CUT = has('immobilizer');
const COLD = has('temperature');
const DRIVER = has('driver_behavior');
const MAINT = has('maintenance');
const APP = has('app');
const INSTALL = has('installation');
const OWN = has('own_platform');
const WHERE = ITEMS.filter((x) => !x.self && x.city).map((x) => `${x.name} (${x.city})`);
const HIDDEN = OTHERS.filter((x) => !TOP_GPS.includes(x.name)).map((x) => x.name);

const KIND_LABELS = {
  fr: { builder: 'Éditeur de la liste (applications de flotte sur mesure)', specialist: 'Sociétés de géolocalisation et de gestion de flotte', integrator: 'Éditeurs de logiciels avec un produit de suivi' },
  en: { builder: 'Publisher of the list (custom fleet apps)', specialist: 'Tracking and fleet management companies', integrator: 'Software publishers with a tracking product' },
  ar: { builder: 'ناشر القائمة (تطبيقات أساطيل على المقاس)', specialist: 'شركات تحديد المواقع وتسيير الأساطيل', integrator: 'ناشرو برمجيات بمنتج للتتبع' },
};
const FEATURE_LABELS = {
  fr: { custom: 'GPS relié aux tournées, livraisons, pleins, entretien', live_tracking: 'suivi en direct', history: 'historique des trajets', alerts: 'alertes (vitesse, zone)', fuel: 'carburant', driver_behavior: 'conduite', maintenance: 'entretien', reports: 'rapports', immobilizer: 'coupure du moteur', temperature: 'température (chaîne du froid)', app: 'application mobile', installation: 'installation', own_platform: 'plateforme propre' },
  en: { custom: 'GPS connected to rounds, deliveries, refuelling, maintenance', live_tracking: 'live tracking', history: 'trip history', alerts: 'alerts (speed, zone)', fuel: 'fuel', driver_behavior: 'driving', maintenance: 'maintenance', reports: 'reports', immobilizer: 'engine cut-off', temperature: 'temperature (cold chain)', app: 'mobile app', installation: 'installation', own_platform: 'own platform' },
  ar: { custom: 'GPS مربوط بالجولات، التوصيلات، الوقود، الصيانة', live_tracking: 'التتبع المباشر', history: 'سجل الرحلات', alerts: 'تنبيهات (السرعة، المنطقة)', fuel: 'الوقود', driver_behavior: 'القيادة', maintenance: 'الصيانة', reports: 'التقارير', immobilizer: 'قطع المحرك', temperature: 'الحرارة (سلسلة التبريد)', app: 'تطبيق الهاتف', installation: 'التركيب', own_platform: 'منصة خاصة' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} sociétés. Cette page en retient dix : Symloop, qui publie la liste, et neuf sociétés dont le propre site s’ouvrait, indiquait une présence en Algérie, décrivait un suivi avec plateforme ou application et montrait une activité depuis 2025.`,
  en: `We verified ${TOTAL} companies. This page keeps ten: Symloop, which publishes the list, and nine companies whose own site loaded, stated a presence in Algeria, described tracking with a platform or app and showed activity since 2025.`,
  ar: `تحققنا من ${TOTAL} شركات. تحتفظ هذه الصفحة بعشر: Symloop، التي تنشر القائمة، وتسع شركات كان موقعها يفتح، يذكر حضوراً في الجزائر، يصف تتبعاً بمنصة أو تطبيق ويُظهر نشاطاً منذ 2025.`,
};

const CONTENT = {
  fr: {
    title: `Suivi GPS des véhicules en Algérie 2027 : liste vérifiée de ${N} sociétés de géolocalisation et de gestion de flotte`,
    seoTitle: `Suivi GPS véhicules en Algérie 2027 : ${N} sociétés de géolocalisation vérifiées`,
    seoDescription: `Suivi GPS des véhicules et gestion de flotte en Algérie en 2027 : ${N} sociétés vérifiées avec ce que propose chacune (suivi en direct, historique, alertes, carburant, coupure du moteur, chaîne du froid, application), relevé sur son site. Vérifié le 26 novembre 2026.`,
    keywords: 'suivi gps véhicule algérie 2027, gps tracker algérie, traceur gps voiture algérie, géolocalisation véhicule algérie, gestion de flotte algérie, localisation gps algérie, تتبع المركبات gps الجزائر',
    colCompany: 'Société', colDoes: 'Fonctions annoncées', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Pour suivre ses véhicules par GPS en Algérie, cette page présente ${N} entrées : des sociétés de géolocalisation qui installent un boîtier et donnent accès à une plateforme, des éditeurs de logiciels avec un produit de suivi, et Symloop, qui construit des applications de flotte sur mesure. Pour chacune : les fonctions annoncées sur son propre site (suivi en direct, historique, alertes, carburant, coupure du moteur, chaîne du froid, application) ; Symloop est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Carburant', 'fuel'], ['Coupure du moteur', 'immobilizer'], ['Chaîne du froid', 'temperature'], ['Conduite', 'driver_behavior'], ['Entretien', 'maintenance'], ['Application mobile', 'app'], ['Installation', 'installation']],
    method: [
      'Nous avons cherché avec des mots simples : « géolocalisation véhicules Algérie », « suivi GPS flotte Algérie », « gestion de flotte Algérie », « traceur GPS voiture Algérie », « تتبع المركبات GPS الجزائر ». Les annuaires et la presse ont servi de pistes.',
      'Une société entre dans la liste si son propre site s’ouvre, indique une présence en Algérie, décrit un suivi des véhicules avec une plateforme ou une application et montre une activité depuis 2025. Nous ne reprenons ni prix des boîtiers ou des abonnements, ni nombre de véhicules, ni nom de client. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons testé aucune plateforme : ce qui est indiqué est ce que chaque société annonce. Demandez une démonstration avec vos véhicules et l’accès aux données si vous changez de prestataire.',
      'Les opérateurs mobiles décrivent des cartes SIM pour objets connectés, pas un service de suivi de flotte : ils ne figurent pas ici. Les boutiques qui vendent des traceurs sans plateforme non plus. Cette page n’explique aucune règle d’autorisation.',
    ],
    fix: 'Une information est fausse, ou votre société manque ? Écrivez-nous avec le lien de la page qui décrit votre offre, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure société de suivi GPS des véhicules en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque société annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et ne vend pas de traceurs. Le bon choix dépend des fonctions utiles : carburant, coupure du moteur, chaîne du froid ou entretien.`],
      ['Où sont ces sociétés de géolocalisation ?', `Celles qui indiquent une ville : ${join(WHERE, 'et')}.`],
      ['Quelles sociétés suivent la consommation de carburant ?', `${join(FUEL, 'et')} annoncent le suivi du carburant.`],
      ['Peut-on couper le moteur à distance ?', `${join(CUT, 'et')} annoncent la coupure du moteur à distance.`],
      ['Quelles sociétés suivent la température pour la chaîne du froid ?', `${join(COLD, 'et')} annoncent des sondes ou un module de température.`],
      ['Quelles sociétés notent la conduite ou rappellent l’entretien ?', `${join(DRIVER, 'et')} annoncent le suivi de la conduite ; ${join(MAINT, 'et')} annoncent les rappels ou la gestion de l’entretien.`],
      ['Quelles plateformes ont une application mobile ?', `${join(APP, 'et')} annoncent une application mobile.`],
      ['Qui installe le boîtier GPS ?', `${join(INSTALL, 'et')} annoncent l’installation des boîtiers.`],
      ['Quelles sociétés ont leur propre plateforme ?', `${join(OWN, 'et')} présentent une plateforme ou un logiciel qui leur appartient.`],
      ['Les opérateurs mobiles proposent-ils le suivi de flotte ?', 'Les pages d’entreprise des opérateurs que nous avons lues décrivent des cartes SIM pour objets connectés, pas une plateforme de suivi de flotte.'],
      ['Combien coûte un traceur GPS ou un abonnement en Algérie ?', 'Cette page ne reprend aucun prix. Demandez un devis écrit qui distingue le boîtier, l’installation, l’abonnement à la plateforme et la carte SIM.'],
      ['Comment relier le GPS aux livraisons, aux pleins et à l’entretien ?', 'Une plateforme de suivi montre où sont les véhicules. Pour relier ces positions aux tournées, aux bons de livraison, aux pleins et aux coûts par véhicule, il faut une application de flotte qui récupère les données du traceur. Symloop, qui publie cette page, construit ce type d’application sur mesure.'],
      ['D’autres sociétés ?', `Nous avons aussi vérifié ${join(HIDDEN, 'et')}, dont le site n’indique ni ville ni date récente lisible.`],
      ['Comment ajouter ma société à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page qui décrit votre offre. L’inscription est gratuite.'],
    ],
    related: [['La tech en Algérie : toutes nos listes', '/tech-algerie/'], ['Gestion de flotte : carburant, entretien, coût au km', '/blog/le-carburant-coute-plus-que-prevu-et-personne-ne-sait-pourquoi-gestion-de-flotte-application-algerie-2027-releves-consommation-entretien-au-km/'], ['Livrer sans adresse : point GPS et zones de livraison', '/blog/livrer-sans-adresse-algerie-2027-point-gps-repere-zones-de-livraison-geocodage-confirmation-whatsapp-ce-qu-on-construit/'], ['Sociétés de livraison de colis en Algérie', '/societes-livraison-colis-algerie/']],
  },
  en: {
    title: `GPS vehicle tracking in Algeria 2027: a verified list of ${N} tracking and fleet management companies`,
    seoTitle: `GPS vehicle tracking in Algeria 2027: ${N} verified tracking companies`,
    seoDescription: `GPS vehicle tracking and fleet management in Algeria in 2027: ${N} verified companies with what each offers (live tracking, history, alerts, fuel, engine cut-off, cold chain, app), read on its site. Verified on 26 November 2026.`,
    keywords: 'gps vehicle tracking algeria 2027, gps tracker algeria, fleet management algeria, car tracker algeria, vehicle tracking companies algeria',
    colCompany: 'Company', colDoes: 'Features announced', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `To track vehicles by GPS in Algeria, this page presents ${N} entries: tracking companies that install a unit and give access to a platform, software publishers with a tracking product, and Symloop, which builds custom fleet apps. For each one: the features announced on its own site (live tracking, history, alerts, fuel, engine cut-off, cold chain, app); Symloop comes first and the others follow in alphabetical order.`,
    byService: [['Fuel', 'fuel'], ['Engine cut-off', 'immobilizer'], ['Cold chain', 'temperature'], ['Driving', 'driver_behavior'], ['Maintenance', 'maintenance'], ['Mobile app', 'app'], ['Installation', 'installation']],
    method: [
      'We searched with simple words such as “vehicle tracking Algeria”, “GPS fleet tracking Algeria”, “fleet management Algeria” and “GPS tracker car Algeria”. Directories and press were leads.',
      'A company enters the list if its own site loads, states a presence in Algeria, describes vehicle tracking with a platform or app and shows activity since 2025. We report no device or subscription prices, vehicle counts or client names. Each name links to the page read.',
    ],
    limits: [
      'We tested no platform: what is shown is what each company announces. Ask for a demonstration with your vehicles and for access to your data if you change provider.',
      'Mobile operators describe SIM cards for connected devices, not a fleet tracking service: they are not here. Shops selling trackers without a platform are not either. This page explains no authorisation rule.',
    ],
    fix: 'Something is wrong, or your company is missing? Write to us with the link to the page describing your offer, and we correct it:',
    faq: [
      ['What is the best GPS vehicle tracking company in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each company announces; Symloop, which publishes it, places itself first as the publisher’s choice and sells no trackers. The right choice depends on the features you need: fuel, engine cut-off, cold chain or maintenance.`],
      ['Where are these tracking companies?', `Those stating a city: ${join(WHERE, 'and')}.`],
      ['Which companies monitor fuel consumption?', `${join(FUEL, 'and')} announce fuel monitoring.`],
      ['Can the engine be cut off remotely?', `${join(CUT, 'and')} announce remote engine cut-off.`],
      ['Which companies monitor temperature for the cold chain?', `${join(COLD, 'and')} announce temperature probes or a temperature module.`],
      ['Which companies score driving or remind maintenance?', `${join(DRIVER, 'and')} announce driving monitoring; ${join(MAINT, 'and')} announce maintenance reminders or management.`],
      ['Which platforms have a mobile app?', `${join(APP, 'and')} announce a mobile app.`],
      ['Who installs the GPS unit?', `${join(INSTALL, 'and')} announce unit installation.`],
      ['Which companies have their own platform?', `${join(OWN, 'and')} present a platform or software of their own.`],
      ['Do mobile operators offer fleet tracking?', 'The operators’ business pages we read describe SIM cards for connected devices, not a fleet tracking platform.'],
      ['How much does a GPS tracker or subscription cost in Algeria?', 'This page reports no prices. Ask for a written quote separating the unit, installation, the platform subscription and the SIM card.'],
      ['How do I connect GPS to deliveries, refuelling and maintenance?', 'A tracking platform shows where vehicles are. To connect those positions to rounds, delivery notes, refuelling and cost per vehicle, you need a fleet app that pulls the tracker’s data. Symloop, which publishes this page, builds this kind of app.'],
      ['Other companies?', `We also verified ${join(HIDDEN, 'and')}, whose site states neither a city nor a readable recent date.`],
      ['How do I add my company to this list?', 'Write to contact@symloop.com with the link to the page describing your offer. Listing is free.'],
    ],
    related: [['Tech in Algeria: all our lists', '/tech-algerie/'], ['Parcel delivery companies in Algeria', '/societes-livraison-colis-algerie/'], ['Delivery apps in Algeria', '/applications-livraison-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `تتبع المركبات بـ GPS في الجزائر 2027: قائمة موثقة من ${N} شركات لتحديد المواقع وتسيير الأساطيل`,
    seoTitle: `تتبع المركبات بـ GPS في الجزائر 2027: ${N} شركات موثقة`,
    seoDescription: `تتبع المركبات بـ GPS وتسيير الأساطيل في الجزائر سنة 2027: ${N} شركات موثقة مع ما تقترحه كل واحدة (التتبع المباشر، السجل، التنبيهات، الوقود، قطع المحرك، سلسلة التبريد، التطبيق)، مأخوذ من موقعها. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'تتبع المركبات gps الجزائر 2027, جهاز تتبع gps الجزائر, تسيير الأساطيل الجزائر, تحديد موقع السيارة الجزائر',
    colCompany: 'الشركة', colDoes: 'الوظائف المعلنة', colFact: 'ما يذكره موقعها', countLabel: 'مدخلات موثقة',
    lead: `لتتبع المركبات بـ GPS في الجزائر، تعرض هذه الصفحة ${N} مدخلات: شركات تحديد المواقع التي تركّب جهازاً وتمنح الدخول إلى منصة، ناشرو برمجيات بمنتج للتتبع، و Symloop التي تبني تطبيقات أساطيل على المقاس. لكل واحدة: الوظائف المعلنة في موقعها (التتبع المباشر، السجل، التنبيهات، الوقود، قطع المحرك، سلسلة التبريد، التطبيق)؛ Symloop في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['الوقود', 'fuel'], ['قطع المحرك', 'immobilizer'], ['سلسلة التبريد', 'temperature'], ['القيادة', 'driver_behavior'], ['الصيانة', 'maintenance'], ['تطبيق الهاتف', 'app'], ['التركيب', 'installation']],
    method: [
      'بحثنا بكلمات بسيطة مثل «تتبع المركبات GPS الجزائر» و«géolocalisation véhicules Algérie» و«gestion de flotte Algérie». واستُعملت الأدلة والصحافة كمؤشرات.',
      'تدخل الشركة القائمة إذا كان موقعها يفتح، يذكر حضوراً في الجزائر، يصف تتبع المركبات بمنصة أو تطبيق ويُظهر نشاطاً منذ 2025. ولا ننقل أسعار الأجهزة أو الاشتراكات ولا عدد المركبات ولا أسماء الزبائن. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نختبر أي منصة: المذكور هو ما تعلنه كل شركة. اطلبوا عرضاً تطبيقياً بمركباتكم والدخول إلى بياناتكم إذا غيّرتم المزوّد.',
      'متعاملو الهاتف النقال يصفون شرائح لأجهزة متصلة، لا خدمة لتتبع الأساطيل: فهم غير مذكورين هنا. ولا المحلات التي تبيع أجهزة تتبع دون منصة. ولا تشرح هذه الصفحة أي قاعدة ترخيص.',
    ],
    fix: 'معلومة خاطئة أو شركتكم غير مدرجة؟ راسلونا مع رابط الصفحة التي تصف عرضكم، ونصحّح:',
    faq: [
      ['ما هي أفضل شركة لتتبع المركبات بـ GPS في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما تعلنه كل شركة؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر ولا تبيع أجهزة تتبع. والاختيار الصحيح يتوقف على الوظائف المفيدة: الوقود، قطع المحرك، سلسلة التبريد أو الصيانة.`],
      ['أين توجد هذه الشركات؟', `التي تذكر مدينة: ${join(WHERE, 'و')}.`],
      ['ما هي الشركات التي تتابع استهلاك الوقود؟', `${join(FUEL, 'و')} تعلن متابعة الوقود.`],
      ['هل يمكن قطع المحرك عن بعد؟', `${join(CUT, 'و')} تعلن قطع المحرك عن بعد.`],
      ['ما هي الشركات التي تتابع الحرارة لسلسلة التبريد؟', `${join(COLD, 'و')} تعلن مجسات أو وحدة للحرارة.`],
      ['ما هي الشركات التي تقيّم القيادة أو تذكّر بالصيانة؟', `${join(DRIVER, 'و')} تعلن متابعة القيادة؛ و${join(MAINT, 'و')} تعلن تذكيرات أو تسيير الصيانة.`],
      ['ما هي المنصات التي لها تطبيق للهاتف؟', `${join(APP, 'و')} تعلن تطبيقاً للهاتف.`],
      ['من يركّب جهاز GPS؟', `${join(INSTALL, 'و')} تعلن تركيب الأجهزة.`],
      ['ما هي الشركات التي لها منصتها الخاصة؟', `${join(OWN, 'و')} تعرض منصة أو برنامجاً خاصاً بها.`],
      ['هل يقترح متعاملو الهاتف النقال تتبع الأساطيل؟', 'صفحات المؤسسات لدى المتعاملين التي قرأناها تصف شرائح لأجهزة متصلة، لا منصة لتتبع الأساطيل.'],
      ['كم يكلف جهاز تتبع GPS أو الاشتراك في الجزائر؟', 'لا تنقل هذه الصفحة أي سعر. اطلبوا عرضاً مكتوباً يفصل بين الجهاز، التركيب، الاشتراك في المنصة والشريحة.'],
      ['كيف أربط GPS بالتوصيلات والوقود والصيانة؟', 'منصة التتبع تُظهر أين توجد المركبات. ولربط هذه المواقع بالجولات، وصولات التسليم، التزود بالوقود والتكلفة لكل مركبة، يلزم تطبيق أسطول يسترجع بيانات جهاز التتبع. و Symloop، التي تنشر هذه الصفحة، تبني هذا النوع من التطبيقات على المقاس.'],
      ['شركات أخرى؟', `تحققنا أيضاً من ${join(HIDDEN, 'و')}، التي لا يذكر موقعها مدينة ولا تاريخاً حديثاً مقروءاً.`],
      ['كيف أضيف شركتي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة التي تصف عرضكم. الإدراج مجاني.'],
    ],
    related: [['التكنولوجيا في الجزائر: كل قوائمنا', '/tech-algerie/'], ['شركات توصيل الطرود في الجزائر', '/societes-livraison-colis-algerie/'], ['تطبيقات التوصيل في الجزائر', '/applications-livraison-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="suivi-gps-vehicules-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={['focus']} hideFounded />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
