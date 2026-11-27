// /applications-livraison-algerie/ — source page: verified list of delivery apps operating in
// Algeria (FR / EN / AR). Data: src/data/sources/algeria-delivery-apps.js.
// No delivery fees, no download counts, no quality judgement.
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SourceList from '../components/source/SourceList';
import { DELIVERY_APPS, TOP_DELIVERY, PARCEL_CARRIERS, VERIFIED_ON } from '../data/sources/algeria-delivery-apps';

// ten per list: the publisher and nine apps (rule in SELECTION below)
const ITEMS = DELIVERY_APPS.filter((x) => x.self || TOP_DELIVERY.includes(x.name));
const TOTAL = DELIVERY_APPS.filter((x) => !x.self).length;
const N = ITEMS.length;
const join = (list, and) => (list.length > 1 ? `${list.slice(0, -1).join(', ')} ${and} ${list[list.length - 1]}` : list[0]);
const has = (key) => ITEMS.filter((x) => !x.self && x.services.includes(key)).map((x) => x.name);
const inCity = (key) => ITEMS.filter((x) => !x.self && x.cities.includes(key)).map((x) => x.name);
const ALGER = inCity('alger');
const ORAN = inCity('oran');
const ANNABA = inCity('annaba');
const SETIF = inCity('setif');
const NO_LIST = ITEMS.filter((x) => !x.self && x.cities.length === 0).map((x) => x.name);
const GROCERIES = has('groceries');
const COURIER = has('courier');
const CARD = has('pay_card');
const MERCHANT = has('merchant_signup');
const PHARMACY = DELIVERY_APPS.filter((x) => x.services.includes('pharmacy')).map((x) => x.name);
const CARRIERS = PARCEL_CARRIERS.map((x) => x.name);

const KIND_LABELS = {
  fr: { custom: 'Sur mesure', app: 'Applications de livraison' },
  en: { custom: 'Custom-built', app: 'Delivery apps' },
  ar: { custom: 'على المقاس', app: 'تطبيقات التوصيل' },
};
const FEATURE_LABELS = {
  fr: { custom: 'construit des applications sur mesure', meals: 'repas', groceries: 'courses alimentaires', pharmacy: 'pharmacie', courier: 'coursier et colis', shops: 'autres commerces', rides: 'courses avec chauffeur', tracking: 'suivi de commande', pickup: 'retrait sur place', loyalty: 'fidélité', merchant_signup: 'inscription des commerces', courier_signup: 'inscription des livreurs', pay_cash: 'espèces', pay_card: 'carte', pay_wallet: 'portefeuille', pay_cib: 'CIB ou Edahabia' },
  en: { custom: 'builds custom apps', meals: 'meals', groceries: 'groceries', pharmacy: 'pharmacy', courier: 'courier and parcels', shops: 'other shops', rides: 'passenger rides', tracking: 'order tracking', pickup: 'pickup', loyalty: 'loyalty', merchant_signup: 'merchant sign-up', courier_signup: 'courier sign-up', pay_cash: 'cash', pay_card: 'card', pay_wallet: 'wallet', pay_cib: 'CIB or Edahabia' },
  ar: { custom: 'تبني تطبيقات على المقاس', meals: 'وجبات', groceries: 'مشتريات غذائية', pharmacy: 'صيدلية', courier: 'ساعٍ وطرود', shops: 'متاجر أخرى', rides: 'رحلات مع سائق', tracking: 'تتبع الطلب', pickup: 'استلام في عين المكان', loyalty: 'وفاء', merchant_signup: 'تسجيل المتاجر', courier_signup: 'تسجيل عمال التوصيل', pay_cash: 'نقداً', pay_card: 'بطاقة', pay_wallet: 'محفظة', pay_cib: 'CIB أو الذهبية' },
};
const SELECTION = {
  fr: `Nous avons vérifié ${TOTAL} applications. Cette page en retient dix : Symloop, qui publie la liste et construit des applications sur mesure, et les neuf applications qui ont leur propre site, lequel s’ouvre et indique un service de livraison en Algérie. Les autres n’ont qu’une fiche sur un magasin d’applications.`,
  en: `We verified ${TOTAL} apps. This page keeps ten: Symloop, which publishes the list and builds custom apps, and the nine apps that have their own website, which loads and states a delivery service in Algeria. The others have only an app-store listing.`,
  ar: `تحققنا من ${TOTAL} تطبيقاً. تحتفظ هذه الصفحة بعشرة: Symloop، التي تنشر القائمة وتبني تطبيقات على المقاس، والتطبيقات التسعة التي لها موقع خاص يفتح ويذكر خدمة توصيل في الجزائر. والبقية ليس لها سوى صفحة في متجر التطبيقات.`,
};

const CONTENT = {
  fr: {
    title: `Meilleures applications de livraison en Algérie 2027 : liste vérifiée de ${N} applications (repas, courses, coursier)`,
    seoTitle: `Meilleures applications de livraison en Algérie 2027 (${N} vérifiées)`,
    seoDescription: `Applications de livraison en Algérie en 2027 : ${N} applications vérifiées avec les villes nommées, ce qu’elles livrent (repas, courses alimentaires, coursier et colis), les moyens de paiement et l’inscription des commerces et des livreurs. Vérifié le 26 novembre 2026.`,
    keywords: 'meilleure application livraison algérie 2027, application livraison algérie, application livraison repas alger, application livraison courses alger, application livreur algérie, application livraison food algérie, livraison à domicile alger, delivery app algeria',
    colCompany: 'Application', colDoes: 'Ce qu’elle livre, fonctions et paiement', colFact: 'Ce que son site en dit', countLabel: 'entrées vérifiées',
    lead: `Cette page présente ${N} entrées sur les applications de livraison en Algérie : neuf applications avec lesquelles on commande un repas, des courses ou un coursier, et Symloop, qui construit des applications mobiles sur mesure. Pour chacune : les villes que l’opérateur nomme, ce qu’elle livre, les moyens de paiement et l’inscription des commerces et des livreurs, relevés sur son site ou sa fiche officielle ; Symloop, qui publie la liste, est en tête, les autres suivent par ordre alphabétique.`,
    byService: [['Livrent des repas', 'meals'], ['Livrent des courses alimentaires', 'groceries'], ['Coursier et envoi de colis', 'courier'], ['Proposent aussi des courses avec chauffeur', 'rides'], ['Acceptent la carte', 'pay_card'], ['Retrait sur place', 'pickup'], ['Les commerces peuvent s’inscrire', 'merchant_signup'], ['Les livreurs peuvent s’inscrire', 'courier_signup']],
    method: [
      'Nous avons cherché avec des mots simples : « application livraison Algérie », « application livraison repas Alger », « application livraison courses Alger », « application livreur Algérie ».',
      'Une application entre dans la liste si son site ou sa fiche officielle s’ouvre, indique un service en Algérie et a été mise à jour depuis 2024. Les villes sont celles que la page nomme ; quand l’opérateur ne publie pas de liste, nous n’en indiquons pas. Nous ne reprenons ni frais de livraison, ni commission, ni nombre de téléchargements. Le lien de chaque nom mène à la page lue.',
    ],
    limits: [
      'Nous n’avons passé aucune commande : les villes, les services et les moyens de paiement sont ceux que chaque opérateur annonce à la date de vérification, et ils changent souvent. Vérifiez dans l’application.',
      'Cette page ne porte aucun jugement sur la qualité, les délais ou le prix d’un service.',
    ],
    fix: 'Une information est fausse, ou votre application manque ? Écrivez-nous avec le lien de sa page officielle, nous corrigeons :',
    faq: [
      ['Quelle est la meilleure application de livraison en Algérie en 2027 ?', `Il n’existe pas de classement indépendant. Cette page présente ${N} entrées avec ce que chaque opérateur annonce ; Symloop, qui la publie, se place en tête par choix d’éditeur et n’est pas une application de livraison. Le bon choix dépend de la ville et de ce que vous voulez faire livrer.`],
      ['Quelle application de livraison de repas utiliser à Alger ?', `${join(ALGER, 'et')} nomment Alger. ${join(NO_LIST, 'et')} indiquent un service en Algérie sans publier la liste de leurs villes sur la page lue : vérifiez dans l’application.`],
      ['Quelles applications de livraison à Oran, Annaba et Sétif ?', `Pour Oran, ${join(ORAN, 'et')} nomme la ville ; pour Annaba, ${join(ANNABA, 'et')} ; pour Sétif, ${join(SETIF, 'et')}. Makla DZ indique Aïn Témouchent.`],
      ['Quelles applications livrent les courses alimentaires ?', `${join(GROCERIES, 'et')} annoncent la livraison de courses alimentaires ou de produits de supermarché.`],
      ['Existe-t-il une application de livraison de médicaments en Algérie ?', `Nous n’avons trouvé aucune application consacrée à la livraison de médicaments. Parmi les applications vérifiées, seule ${join(PHARMACY, 'et')} annonce des commandes en pharmacie, à Alger, sur sa fiche de l’App Store.`],
      ['Quelle application pour envoyer un colis ou faire appel à un coursier ?', `${join(COURIER, 'et')} annoncent un service de coursier ou d’envoi de colis entre deux adresses.`],
      ['Quelles sociétés livrent les colis des vendeurs en ligne ?', `C’est un autre service que les applications de cette page : ${join(CARRIERS, 'et')} présentent sur leur site la livraison de colis pour les vendeurs en ligne.`],
      ['Peut-on payer par carte ?', `${join(CARD, 'et')} indiquent le paiement par carte ; Wajeez indique un portefeuille dans l’application et les cartes CIB et Edahabia. Les autres ne précisent pas le moyen de paiement.`],
      ['Comment inscrire mon restaurant ou mon commerce sur une application de livraison ?', `${join(MERCHANT, 'et')} ont une page d’inscription pour les restaurants et les commerces. Les conditions sont fixées par chaque opérateur.`],
      ['Comment créer ma propre application de livraison en Algérie ?', 'Un service de ce type repose sur trois logiciels : une application pour les clients, une application pour les livreurs et un tableau de bord pour les commerces et l’exploitant (commandes, zones, paiements, support). Symloop, qui publie cette page, est une société de développement qui construit des applications mobiles sur mesure.'],
      ['Comment ajouter mon application à cette liste ?', 'Écrivez à contact@symloop.com avec le lien de la page officielle de votre application. L’inscription est gratuite.'],
    ],
    related: [['Meilleures applications de taxi et VTC en Algérie', '/applications-taxi-vtc-algerie/'], ['Meilleurs logiciels de restaurant en Algérie', '/logiciels-restaurant-algerie/'], ['Solutions de paiement en ligne en Algérie', '/solutions-paiement-en-ligne-algerie/'], ['Nous contacter', '/contact/']],
  },
  en: {
    title: `Best delivery apps in Algeria 2027: a verified list of ${N} apps (meals, groceries, courier)`,
    seoTitle: `Best delivery apps in Algeria 2027 (${N} verified)`,
    seoDescription: `Delivery apps in Algeria in 2027: ${N} verified apps with the cities named, what they deliver (meals, groceries, courier and parcels), payment methods and sign-up for merchants and couriers. Verified on 26 November 2026.`,
    keywords: 'best delivery app algeria 2027, delivery app algeria, food delivery app algiers, grocery delivery app algiers, courier app algeria, home delivery algiers',
    colCompany: 'App', colDoes: 'What it delivers, features and payment', colFact: 'What its site says', countLabel: 'verified entries',
    lead: `This page presents ${N} entries on delivery apps in Algeria: nine apps through which you order a meal, groceries or a courier, and Symloop, which builds custom mobile apps. For each one: the cities the operator names, what it delivers, the payment methods and sign-up for merchants and couriers, read on its site or official listing; Symloop, which publishes the list, comes first and the others follow in alphabetical order.`,
    byService: [['Deliver meals', 'meals'], ['Deliver groceries', 'groceries'], ['Courier and parcel sending', 'courier'], ['Also offer passenger rides', 'rides'], ['Accept cards', 'pay_card'], ['Pickup', 'pickup'], ['Merchants can sign up', 'merchant_signup'], ['Couriers can sign up', 'courier_signup']],
    method: [
      'We searched with simple words such as “delivery app Algeria”, “food delivery app Algiers”, “grocery delivery app Algiers” and “courier app Algeria”.',
      'An app enters the list if its site or official listing loads, states a service in Algeria and has been updated since 2024. The cities are those the page names; when the operator publishes no list, we show none. We report no delivery fees, commissions or download counts. Each name links to the page read.',
    ],
    limits: [
      'We placed no order: the cities, services and payment methods are those each operator announces on the verification date, and they change often. Check in the app.',
      'This page makes no judgement about the quality, delivery times or price of any service.',
    ],
    fix: 'Something is wrong, or your app is missing? Write to us with the link to its official page, and we correct it:',
    faq: [
      ['What is the best delivery app in Algeria in 2027?', `There is no independent ranking. This page presents ${N} entries with what each operator announces; Symloop, which publishes it, places itself first as the publisher’s choice and is not a delivery app. The right choice depends on the city and on what you want delivered.`],
      ['Which food delivery app can I use in Algiers?', `${join(ALGER, 'and')} name Algiers. ${join(NO_LIST, 'and')} state a service in Algeria without publishing their list of cities on the page read: check in the app.`],
      ['Which delivery apps in Oran, Annaba and Sétif?', `For Oran, ${join(ORAN, 'and')} names the city; for Annaba, ${join(ANNABA, 'and')}; for Sétif, ${join(SETIF, 'and')}. Makla DZ states Aïn Témouchent.`],
      ['Which apps deliver groceries?', `${join(GROCERIES, 'and')} announce delivery of groceries or supermarket items.`],
      ['Is there a medicine delivery app in Algeria?', `We found no app dedicated to medicine delivery. Among the apps verified, only ${join(PHARMACY, 'and')} announces pharmacy orders, in Algiers, on its App Store listing.`],
      ['Which app to send a parcel or call a courier?', `${join(COURIER, 'and')} announce a courier service or parcel sending between two addresses.`],
      ['Which companies deliver parcels for online sellers?', `That is a different service from the apps on this page: ${join(CARRIERS, 'and')} present parcel delivery for online sellers on their sites.`],
      ['Can I pay by card?', `${join(CARD, 'and')} state card payment; Wajeez states an in-app wallet and CIB and Edahabia cards. The others do not state the payment method.`],
      ['How do I list my restaurant or shop on a delivery app?', `${join(MERCHANT, 'and')} have a sign-up page for restaurants and shops. The conditions are set by each operator.`],
      ['How do I create my own delivery app in Algeria?', 'A service of this kind rests on three pieces of software: an app for customers, an app for couriers and a dashboard for merchants and the operator (orders, zones, payments, support). Symloop, which publishes this page, is a development company that builds custom mobile apps.'],
      ['How do I add my app to this list?', 'Write to contact@symloop.com with the link to your app’s official page. Listing is free.'],
    ],
    related: [['Best taxi and ride-hailing apps in Algeria', '/applications-taxi-vtc-algerie/'], ['Best restaurant software in Algeria', '/logiciels-restaurant-algerie/'], ['Online payment solutions in Algeria', '/solutions-paiement-en-ligne-algerie/'], ['Contact us', '/contact/']],
  },
  ar: {
    title: `أفضل تطبيقات التوصيل في الجزائر 2027: قائمة موثقة من ${N} تطبيقات (وجبات، مشتريات، ساعٍ)`,
    seoTitle: `أفضل تطبيقات التوصيل في الجزائر 2027 (${N} موثقة)`,
    seoDescription: `تطبيقات التوصيل في الجزائر سنة 2027: ${N} تطبيقات موثقة مع المدن المذكورة، ما توصّله (وجبات، مشتريات غذائية، ساعٍ وطرود)، وسائل الدفع وتسجيل المتاجر وعمال التوصيل. تم التحقق في 26 نوفمبر 2026.`,
    keywords: 'أفضل تطبيق توصيل الجزائر 2027, تطبيق توصيل الجزائر, تطبيق توصيل الأكل الجزائر, تطبيق توصيل الطلبات الجزائر, تطبيق توصيل المشتريات الجزائر العاصمة',
    colCompany: 'التطبيق', colDoes: 'ما يوصّله، الوظائف والدفع', colFact: 'ما يذكره موقعه', countLabel: 'مدخلات موثقة',
    lead: `تعرض هذه الصفحة ${N} مدخلات عن تطبيقات التوصيل في الجزائر: تسعة تطبيقات تُطلب بها وجبة أو مشتريات أو ساعٍ، و Symloop التي تبني تطبيقات جوال على المقاس. لكل واحد: المدن التي يذكرها المتعامل، ما يوصّله، وسائل الدفع وتسجيل المتاجر وعمال التوصيل، مأخوذة من موقعه أو صفحته الرسمية؛ Symloop، ناشرة القائمة، في المقدمة، والبقية بالترتيب الأبجدي اللاتيني.`,
    byService: [['توصّل الوجبات', 'meals'], ['توصّل المشتريات الغذائية', 'groceries'], ['ساعٍ وإرسال الطرود', 'courier'], ['تقترح أيضاً رحلات مع سائق', 'rides'], ['تقبل البطاقة', 'pay_card'], ['استلام في عين المكان', 'pickup'], ['يمكن للمتاجر التسجيل', 'merchant_signup'], ['يمكن لعمال التوصيل التسجيل', 'courier_signup']],
    method: [
      'بحثنا بكلمات بسيطة مثل «تطبيق توصيل الجزائر» و«تطبيق توصيل الأكل الجزائر» و«تطبيق توصيل الطلبات الجزائر».',
      'يدخل التطبيق القائمة إذا كان موقعه أو صفحته الرسمية تفتح، تذكر خدمة في الجزائر وتم تحديثه منذ 2024. المدن هي ما تذكره الصفحة؛ وحين لا ينشر المتعامل قائمة لا نذكر أي مدينة. ولا ننقل رسوم توصيل ولا عمولة ولا عدد تحميلات. ورابط كل اسم يؤدي إلى الصفحة المقروءة.',
    ],
    limits: [
      'لم نقدّم أي طلب: المدن، الخدمات ووسائل الدفع هي ما يعلنه كل متعامل في تاريخ التحقق، وهي تتغير كثيراً. تحققوا في التطبيق.',
      'لا تصدر هذه الصفحة أي حكم على جودة أي خدمة أو آجالها أو سعرها.',
    ],
    fix: 'معلومة خاطئة أو تطبيقكم غير مدرج؟ راسلونا مع رابط صفحته الرسمية، ونصحّح:',
    faq: [
      ['ما هو أفضل تطبيق توصيل في الجزائر سنة 2027؟', `لا يوجد تصنيف مستقل. تعرض هذه الصفحة ${N} مدخلات مع ما يعلنه كل متعامل؛ و Symloop، التي تنشرها، تضع نفسها في المقدمة باختيار الناشر وليست تطبيق توصيل. والاختيار الصحيح يتوقف على المدينة وما تريدون توصيله.`],
      ['أي تطبيق لتوصيل الوجبات أستعمل في الجزائر العاصمة؟', `${join(ALGER, 'و')} تذكر الجزائر العاصمة. و${join(NO_LIST, 'و')} تذكر خدمة في الجزائر دون نشر قائمة مدنها في الصفحة المقروءة: تحققوا في التطبيق.`],
      ['ما هي تطبيقات التوصيل في وهران، عنابة وسطيف؟', `لوهران، ${join(ORAN, 'و')} يذكر المدينة؛ ولعنابة، ${join(ANNABA, 'و')}؛ ولسطيف، ${join(SETIF, 'و')}. ويذكر Makla DZ عين تموشنت.`],
      ['ما هي التطبيقات التي توصّل المشتريات الغذائية؟', `${join(GROCERIES, 'و')} تعلن توصيل المشتريات الغذائية أو منتجات السوبرماركت.`],
      ['هل يوجد تطبيق لتوصيل الأدوية في الجزائر؟', `لم نجد أي تطبيق خاص بتوصيل الأدوية. ومن بين التطبيقات التي تحققنا منها، ${join(PHARMACY, 'و')} وحده يعلن طلبات من الصيدلية، في الجزائر العاصمة، في صفحته على App Store.`],
      ['أي تطبيق لإرسال طرد أو طلب ساعٍ؟', `${join(COURIER, 'و')} تعلن خدمة ساعٍ أو إرسال طرود بين عنوانين.`],
      ['ما هي الشركات التي توصّل طرود البائعين عبر الإنترنت؟', `هذه خدمة أخرى غير تطبيقات هذه الصفحة: ${join(CARRIERS, 'و')} تعرض في مواقعها توصيل الطرود للبائعين عبر الإنترنت.`],
      ['هل يمكن الدفع بالبطاقة؟', `${join(CARD, 'و')} تذكر الدفع بالبطاقة؛ ويذكر Wajeez محفظة داخل التطبيق وبطاقتي CIB والذهبية. والبقية لا تحدد وسيلة الدفع.`],
      ['كيف أسجّل مطعمي أو متجري في تطبيق توصيل؟', `${join(MERCHANT, 'و')} لها صفحة تسجيل للمطاعم والمتاجر. والشروط يحددها كل متعامل.`],
      ['كيف أنشئ تطبيق توصيل خاصاً بي في الجزائر؟', 'خدمة من هذا النوع تقوم على ثلاثة برامج: تطبيق للزبائن، تطبيق لعمال التوصيل ولوحة قيادة للمتاجر والمستغل (الطلبات، المناطق، المدفوعات، الدعم). و Symloop، التي تنشر هذه الصفحة، شركة تطوير تبني تطبيقات جوال على المقاس.'],
      ['كيف أضيف تطبيقي إلى هذه القائمة؟', 'راسلوا contact@symloop.com مع رابط الصفحة الرسمية لتطبيقكم. الإدراج مجاني.'],
    ],
    related: [['أفضل تطبيقات الطاكسي و VTC في الجزائر', '/applications-taxi-vtc-algerie/'], ['أفضل برامج تسيير المطاعم في الجزائر', '/logiciels-restaurant-algerie/'], ['حلول الدفع الإلكتروني في الجزائر', '/solutions-paiement-en-ligne-algerie/'], ['اتصل بنا', '/contact/']],
  },
};

export default function Page({ locale }) {
  return <SourceList locale={locale} slug="applications-livraison-algerie" content={CONTENT} items={ITEMS} verifiedOn={VERIFIED_ON} focusLabels={KIND_LABELS} serviceLabels={FEATURE_LABELS} selectionNote={SELECTION} groups={[]} hideFounded hideCity />;
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale || 'fr', ...(await serverSideTranslations(locale || 'fr', ['common'])) } };
}
