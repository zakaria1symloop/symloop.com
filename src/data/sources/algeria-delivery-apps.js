// Verified dataset: delivery applications operating in Algeria (meals, groceries, pharmacy items,
// on-demand couriers).
//
// Method: each fact below was read on the app's own website or on its official App Store
// listing on the date in VERIFIED_ON; `url` is the page read. What a page does not state is
// left out, including the list of cities when the operator does not publish one. Delivery fees,
// commissions, minimum orders and download counts are never reported, and no quality judgement
// is made. No ranking and no personal data (an app sold by a named individual is recorded
// without the name). To correct or add an entry: contact@symloop.com.
//
// focus:    custom | app
// services: what is delivered (meals, groceries, pharmacy, courier, shops), rides when the same
//           app also carries passengers, features (tracking, pickup, loyalty, merchant_signup,
//           courier_signup) and payment stated (pay_cash, pay_card, pay_wallet, pay_cib)
// cities:   city keys the page explicitly names as served (empty when it names none)
// platforms: android | ios, as found
// Entries without a `note` are verified but not shown on the page (ten per list).

export const VERIFIED_ON = '2026-11-26';

export const DELIVERY_APPS = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'custom', self: true, services: ['custom'], cities: [],
    note: { fr: 'Éditeur de cette liste. N’est pas une application de livraison : société de logiciel qui construit des applications mobiles sur mesure pour les restaurants, les commerces et les entreprises qui veulent leur propre service de commande, avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. Not a delivery app: a software company that builds custom mobile apps for restaurants, shops and businesses that want their own ordering service, with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. ليست تطبيق توصيل: شركة برمجيات تبني تطبيقات جوال على المقاس للمطاعم، المتاجر والمؤسسات التي تريد خدمة طلب خاصة بها، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'Fast', by: 'SARL HELLO DELIVERY', url: 'https://fastapp.dz/', focus: 'app', services: ['meals', 'groceries', 'courier', 'tracking', 'merchant_signup', 'courier_signup', 'pay_cash', 'pay_card'], platforms: ['android', 'ios'], cities: ['alger', 'oran', 'annaba', 'boumerdes'],
    note: { fr: 'Le site indique la livraison de repas et de courses à Alger, Oran, Annaba et Boumerdès ; la fiche de l’application ajoute Fast GO, la livraison de colis entre particuliers.', en: 'The site states meal and grocery delivery in Algiers, Oran, Annaba and Boumerdès; the app listing adds Fast GO, parcel delivery between individuals.', ar: 'يذكر الموقع توصيل الوجبات والمشتريات في الجزائر العاصمة، وهران، عنابة وبومرداس؛ وتضيف صفحة التطبيق Fast GO لتوصيل الطرود بين الأفراد.' } },
  { name: 'inDrive', by: 'inDrive', url: 'https://indrive.com/en-dz/delivery', focus: 'app', services: ['courier', 'rides', 'tracking'], platforms: ['android', 'ios'], cities: [],
    note: { fr: 'Application internationale dont la page Algérie propose la livraison par coursier jusqu’à 20 kg, à moto ou en voiture, et le fret au-delà, à un prix que l’expéditeur propose ; la page ne nomme aucune ville.', en: 'International app whose Algeria page offers courier delivery up to 20 kg by moto or car, and freight above that, at a price the sender proposes; the page names no city.', ar: 'تطبيق دولي تقترح صفحته الخاصة بالجزائر التوصيل عبر ساعٍ حتى 20 كلغ، بدراجة نارية أو سيارة، والشحن لما فوق ذلك، بسعر يقترحه المرسل؛ والصفحة لا تذكر أي مدينة.' } },
  { name: 'Makla DZ', url: 'https://makladz.com', focus: 'app', services: ['meals'], platforms: ['android', 'ios'], cities: ['ain-temouchent'],
    note: { fr: 'Application de livraison de repas de restaurants dont le site indique Aïn Témouchent comme ville disponible ; la fiche parle de plusieurs villes, le reste de l’Algérie étant prévu.', en: 'Restaurant meal delivery app whose site shows Aïn Témouchent as the available city; the listing speaks of several cities, with the rest of Algeria planned.', ar: 'تطبيق لتوصيل وجبات المطاعم يذكر موقعه عين تموشنت كمدينة متوفرة؛ وتتحدث صفحته عن عدة مدن، مع برمجة باقي الجزائر.' } },
  { name: 'Mrygla', by: 'SOUDANI NEW TECHNOLOGY', url: 'https://mrygla.com/', focus: 'app', services: ['meals', 'groceries', 'courier', 'rides', 'tracking', 'pickup', 'merchant_signup', 'courier_signup'], platforms: ['android', 'ios'], cities: [],
    note: { fr: 'Application multiservice dont la fiche décrit les courses avec chauffeur, la livraison de repas, la vente à emporter, les courses alimentaires et l’envoi de colis entre deux adresses, et se présente comme disponible dans toute l’Algérie.', en: 'Multi-service app whose listing describes rides, meal delivery, takeaway, groceries and parcel pick-up and drop-off, and presents itself as available across Algeria.', ar: 'تطبيق متعدد الخدمات تصف صفحته الرحلات، توصيل الوجبات، الطلبات المحمولة، المشتريات الغذائية وإرسال الطرود بين عنوانين، وتقدّمه على أنه متوفر في كل الجزائر.' } },
  { name: 'Noofy', url: 'https://noofy.app/', focus: 'app', services: ['meals', 'groceries', 'courier', 'tracking', 'loyalty', 'merchant_signup', 'pay_cash', 'pay_card', 'pay_wallet'], platforms: ['android', 'ios'], cities: ['alger'],
    note: { fr: 'Le site indique la livraison de repas, de courses et de produits essentiels à Alger, à toute heure ; la fiche de l’application ajoute l’envoi de colis.', en: 'The site states delivery of meals, groceries and essentials in Algiers at any hour; the app listing adds parcel sending.', ar: 'يذكر الموقع توصيل الوجبات، المشتريات والمواد الأساسية في الجزائر العاصمة في كل ساعة؛ وتضيف صفحة التطبيق إرسال الطرود.' } },
  { name: 'Qooxy', by: 'Sarl Qooxy Services', url: 'https://qooxydz.com/', focus: 'app', services: ['meals', 'groceries', 'tracking', 'merchant_signup', 'courier_signup'], platforms: ['android', 'ios'], cities: ['setif'],
    note: { fr: 'Le site indique que l’application livre depuis des restaurants et des commerces alimentaires et qu’elle est disponible à Sétif.', en: 'The site says the app delivers from restaurants and grocery shops and is available in Sétif.', ar: 'يذكر الموقع أن التطبيق يوصّل من المطاعم ومحلات المواد الغذائية وأنه متوفر في سطيف.' } },
  { name: 'Switch Food', url: 'https://switchfood.net', focus: 'app', services: ['meals', 'tracking', 'pickup', 'merchant_signup', 'courier_signup'], platforms: ['android', 'ios'], cities: ['setif'],
    note: { fr: 'Le site décrit la commande de repas en livraison ou à retirer sur place à Sétif et à El Eulma ; la fiche de l’application ne cite qu’El Eulma.', en: 'The site describes food ordering with delivery or pickup in Sétif and El Eulma; the app listing names El Eulma only.', ar: 'يصف الموقع طلب الوجبات بالتوصيل أو بالاستلام في عين المكان في سطيف والعلمة؛ وصفحة التطبيق لا تذكر سوى العلمة.' } },
  { name: 'Wajeez', by: 'Wajeez Technologies', url: 'https://wajeez.dz/fr', focus: 'app', services: ['meals', 'groceries', 'courier', 'tracking', 'loyalty', 'merchant_signup', 'courier_signup', 'pay_wallet', 'pay_cib'], platforms: ['android', 'ios'], cities: [],
    note: { fr: 'Anciennement FoodBeeper. Le site énumère les services Food, Fresh, Market et Coursier, ainsi que les billets d’avion, la recharge mobile et l’eSIM, payés par un portefeuille dans l’application ; il donne une adresse à Annaba et ne liste pas les villes desservies.', en: 'Formerly FoodBeeper. The site lists Food, Fresh, Market and Courier services, plus flights, mobile top-up and eSIM, paid through an in-app wallet; it gives an address in Annaba and does not list the cities served.', ar: 'FoodBeeper سابقاً. يذكر الموقع خدمات Food و Fresh و Market والساعي، وكذلك تذاكر الطيران، تعبئة الهاتف و eSIM، تُدفع بمحفظة داخل التطبيق؛ ويعطي عنواناً في عنابة ولا يذكر قائمة المدن المخدومة.' } },
  { name: 'Yassir', by: 'Yassir', url: 'https://yassir.com/fr/algeria/', focus: 'app', services: ['meals', 'groceries', 'rides', 'merchant_signup', 'courier_signup', 'pay_cash', 'pay_card', 'pay_wallet'], platforms: ['android', 'ios'], cities: [],
    note: { fr: 'La page Algérie présente Yassir Food pour les repas et Yassir Market pour les courses, à côté des courses avec chauffeur, dans une seule application ; elle ne donne pas la liste des villes desservies.', en: 'The Algeria page presents Yassir Food for meals and Yassir Market for groceries next to ride-hailing, in one app; it does not list the cities served.', ar: 'تعرض صفحة الجزائر Yassir Food للوجبات و Yassir Market للمشتريات إلى جانب الرحلات، في تطبيق واحد؛ ولا تعطي قائمة المدن المخدومة.' } },
  // verified, not shown on the page (read on the store listing only, or borderline)
  { name: 'Best Delivery Dz', url: 'https://apps.apple.com/dz/app/id6499099465', focus: 'app', services: ['meals', 'shops', 'loyalty', 'pay_cash'], platforms: ['ios'], cities: ['chlef'] },
  { name: 'Fel’7in', url: 'https://apps.apple.com/dz/app/fel-7in/id6480135409', focus: 'app', services: ['meals', 'groceries', 'pharmacy', 'courier', 'shops', 'tracking', 'loyalty'], platforms: ['ios'], cities: ['alger'] },
  { name: 'Floppy Delivery', url: 'https://apps.apple.com/dz/app/id1555783630', focus: 'app', services: ['meals', 'loyalty'], platforms: ['ios'], cities: [] },
  { name: 'RM Delivery', url: 'https://apps.apple.com/dz/app/id6742713095', focus: 'app', services: ['meals', 'groceries'], platforms: ['ios'], cities: [] },
  { name: 'temtem One', by: 'TEMTEM HOLDING SAS', url: 'https://temtem.one/', focus: 'app', services: ['groceries', 'shops', 'loyalty', 'pay_cash', 'pay_card', 'pay_cib'], platforms: ['android', 'ios'], cities: [] },
];

// The nine shown beside the publisher: apps that have their own website, which loads and states
// a delivery service in Algeria.
export const TOP_DELIVERY = ['Fast', 'inDrive', 'Makla DZ', 'Mrygla', 'Noofy', 'Qooxy', 'Switch Food', 'Wajeez', 'Yassir'];

// Parcel carriers for online sellers: a different service, named in the FAQ only (each read on
// its own site).
export const PARCEL_CARRIERS = [
  { name: 'Yalidine Express', url: 'https://yalidine-express.com.dz/' },
  { name: 'Noest Express', url: 'https://noest-dz.com/' },
  { name: 'EMS Champion Post', url: 'https://www.ems.dz/' },
  { name: 'Maystro Delivery', url: 'https://maystro-delivery.com/' },
];
