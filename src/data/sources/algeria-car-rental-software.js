// Verified dataset: car rental management software and booking platforms with an agency side in
// Algeria.
//
// Method: each fact below was read on the product's or the publisher's own website (or its official
// app listing) on the date in VERIFIED_ON; `url` is the page read. Directories and news were leads
// only. What a site does not state is left out. Prices, numbers of agencies, cars or customers and
// client names are never reported, no person is named, and no rental or insurance rule is
// explained. No ranking. To correct or add an entry: contact@symloop.com.
//
// focus:    builder | software (management software for rental agencies) | platform (online
//           booking platform with an agency side)
// city:     as the site states it (shown as written)
// services: fleet, bookings, calendar, contracts, deposit, condition_report, customer_docs,
//           invoicing, payments_tracking, maintenance, gps, online_booking, multi_agency, reports,
//           mobile, trial
// platforms: web | cloud | windows | android | ios, as stated
// Entries without a `note` are verified but not shown on the page (named in the FAQ).

export const VERIFIED_ON = '2026-11-27';

export const CAR_RENTAL = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['custom'],
    note: { fr: 'Éditeur de cette liste. Ne vend pas de logiciel de location prêt à l’emploi : construit des plateformes de location sur mesure (réservation en ligne, caution, état des lieux avec photos, contrats, entretien), avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. It sells no ready-made rental software: it builds custom rental platforms (online booking, deposit, condition reports with photos, contracts, maintenance), with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. لا تبيع برنامج كراء جاهزاً: تبني منصات كراء على المقاس (الحجز عبر الإنترنت، الكفالة، معاينة الحالة بالصور، العقود، الصيانة)، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'ACR', by: 'Algeria Car Rental', url: 'https://www.algeriacarental.com/en_US/agencies', city: 'Bouira', focus: 'software', platforms: ['web'], services: ['bookings', 'fleet', 'contracts', 'invoicing', 'payments_tracking', 'maintenance', 'reports', 'mobile', 'online_booking'],
    note: { fr: 'Plateforme pour les agences qui gère les réservations, le suivi de la flotte, les contrats électroniques, la facturation avec relances et les alertes d’entretien, avec un site et une application de réservation pour les clients.', en: 'Agency platform handling bookings, fleet tracking, electronic contracts, invoicing with reminders and maintenance alerts, with a booking site and app for customers.', ar: 'منصة للوكالات تسيّر الحجوزات، متابعة الأسطول، العقود الإلكترونية، الفوترة مع التذكيرات وتنبيهات الصيانة، مع موقع وتطبيق حجز للزبائن.' } },
  { name: 'Almawarid', url: 'https://almawarid.app/logiciel-location-voiture-algerie/', city: 'oran', focus: 'software', platforms: ['web', 'android', 'windows'], services: ['fleet', 'calendar', 'contracts', 'deposit', 'condition_report', 'maintenance', 'invoicing', 'trial'],
    note: { fr: 'Suite de gestion dont la page location de voitures couvre le planning de la flotte, les contrats, les cautions, les états des lieux au départ et au retour, l’entretien et l’assurance par véhicule et la facturation.', en: 'Management suite whose car-rental page covers fleet planning, contracts, deposits, check-out and check-in reports, per-vehicle maintenance and insurance, and invoicing.', ar: 'مجموعة تسيير تغطي صفحتها لكراء السيارات تخطيط الأسطول، العقود، الكفالات، معاينة الحالة عند الخروج والعودة، الصيانة والتأمين لكل مركبة والفوترة.' } },
  { name: 'CarLoc', by: 'ReoleWeb', url: 'https://reoleweb.com/produits/carloc', city: 'Béjaïa', focus: 'software', platforms: ['cloud'], services: ['fleet', 'bookings', 'calendar', 'contracts', 'invoicing', 'maintenance', 'reports', 'multi_agency', 'mobile', 'online_booking', 'trial'],
    note: { fr: 'Logiciel de location d’un éditeur de Béjaïa, en éditions locale, internet et complète : réservations, contrats, factures, alertes d’entretien, statistiques et réservation en ligne, avec une démo.', en: 'Rental software from a Béjaïa publisher, in local, internet and full editions: bookings, contracts, invoices, maintenance alerts, statistics and online booking, with a demo.', ar: 'برنامج كراء من ناشر في بجاية، بنسخ محلية وعبر الإنترنت وكاملة: الحجوزات، العقود، الفواتير، تنبيهات الصيانة، الإحصائيات والحجز عبر الإنترنت، مع عرض تجريبي.' } },
  { name: 'Domino Cars', by: 'DominoSoft', url: 'https://dominosoft.org/software/logiciel-de-location-de-voitures-gestion-intelligente-dominocars/', city: 'constantine', focus: 'software', platforms: [], services: ['fleet', 'contracts', 'payments_tracking', 'maintenance', 'reports'],
    note: { fr: 'Logiciel de location d’un éditeur algérien : disponibilité de la flotte, contrats automatiques, suivi de la caisse, alertes de vidange, d’assurance et de contrôle technique et statistiques par voiture ; fonctionne sans connexion.', en: 'Rental software from an Algerian publisher: fleet availability, automatic contracts, cash tracking, oil-change, insurance and inspection alerts and statistics per car; works offline.', ar: 'برنامج كراء من ناشر جزائري: توفر الأسطول، عقود آلية، متابعة الصندوق، تنبيهات تغيير الزيت والتأمين والمراقبة التقنية وإحصائيات لكل سيارة؛ يعمل دون اتصال.' } },
  { name: 'Nayda', url: 'https://nayda.app/partenaires', city: 'Hussein Dey', focus: 'platform', platforms: ['android', 'ios'], services: ['fleet', 'calendar', 'bookings', 'payments_tracking', 'online_booking', 'mobile'],
    note: { fr: 'Application de réservation : les agences s’inscrivent, ajoutent leurs véhicules, fixent les tarifs et les disponibilités et suivent les réservations et les paiements dans un tableau de bord.', en: 'Booking app: agencies sign up, add their vehicles, set rates and availability and track bookings and payments in a dashboard.', ar: 'تطبيق حجز: تسجّل الوكالات، تضيف مركباتها، تحدد الأسعار والتوفر وتتابع الحجوزات والمدفوعات في لوحة قيادة.' } },
  { name: 'RafRaf Car', url: 'https://rafrafcar.com/', city: null, focus: 'software', platforms: ['android', 'ios'], services: ['fleet', 'bookings', 'contracts', 'deposit', 'customer_docs', 'invoicing', 'maintenance', 'reports', 'mobile', 'trial'],
    note: { fr: 'Application mobile pour les agences de location en Algérie : état de la flotte, réservations, contrats et factures en PDF, cautions, photos du permis et de la pièce d’identité, alertes de vidange ; essai de 30 jours.', en: 'Mobile app for rental agencies in Algeria: fleet status, bookings, PDF contracts and invoices, deposits, licence and ID photos, oil-change alerts; 30-day trial.', ar: 'تطبيق للهاتف لوكالات الكراء في الجزائر: حالة الأسطول، الحجوزات، العقود والفواتير بصيغة PDF، الكفالات، صور رخصة السياقة وبطاقة الهوية، تنبيهات تغيير الزيت؛ تجربة 30 يوماً.' } },
  { name: 'Uleez', url: 'https://uleez.com/', city: 'Alger', focus: 'platform', platforms: ['web', 'android', 'ios'], services: ['fleet', 'bookings', 'calendar', 'condition_report', 'online_booking', 'mobile'],
    note: { fr: 'Place de marché où des agences vérifiées publient leurs voitures, reçoivent les demandes et gèrent leur planning depuis l’application ou un espace web, avec des états des lieux au départ et au retour.', en: 'Marketplace where checked agencies publish their cars, receive requests and manage their schedule from the app or a web back-office, with check-out and check-in reports.', ar: 'سوق إلكترونية تنشر فيها وكالات موثقة سياراتها، تستقبل الطلبات وتسيّر جدولها من التطبيق أو فضاء ويب، مع معاينة الحالة عند الخروج والعودة.' } },
  // verified, not shown on the page (named in the FAQ)
  { name: 'Vayyaloc', url: 'https://apps.apple.com/app/id6762440460', city: null, focus: 'platform', platforms: ['ios'], services: ['bookings', 'online_booking', 'mobile'] },
];

// Shown beside the publisher: products whose own site describes car rental management or an agency
// side, states a link to Algeria and shows activity since 2025.
export const TOP_CAR_RENTAL = ['ACR', 'Almawarid', 'CarLoc', 'Domino Cars', 'Nayda', 'RafRaf Car', 'Uleez'];
