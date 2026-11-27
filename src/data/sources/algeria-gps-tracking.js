// Verified dataset: GPS vehicle tracking and fleet management companies in Algeria.
//
// Method: each fact below was read on the company's own website on the date in VERIFIED_ON;
// `url` is the page read. Directories and news were leads only. What a site does not state is
// left out. Device and subscription prices, numbers of vehicles or clients and client names are
// never reported, and no authorisation rule is explained. No ranking, no personal data.
// To correct or add an entry: contact@symloop.com.
//
// focus:    builder | specialist (tracking or fleet company) | integrator (software company with a
//           tracking product among others)
// city:     as the site states it (shown as written)
// services: live_tracking, history, alerts, fuel, driver_behavior, maintenance, reports,
//           immobilizer, temperature, app, installation, own_platform
// Entries without a `note` are verified but not shown on the page (named in the FAQ).

export const VERIFIED_ON = '2026-11-26';

export const GPS_TRACKING = [
  { name: 'Symloop', url: 'https://symloop.com/services/', city: 'alger', focus: 'builder', self: true, services: ['custom'],
    note: { fr: 'Éditeur de cette liste. Ne vend pas de traceurs : société de logiciel qui construit des applications de flotte et de livraison sur mesure, où les positions GPS se relient aux tournées, aux livraisons, aux pleins et à l’entretien, avec des équipes à Alger et à Sétif.', en: 'Publisher of this list. It sells no trackers: a software company building custom fleet and delivery apps where GPS positions connect to rounds, deliveries, refuelling and maintenance, with teams in Algiers and Sétif.', ar: 'ناشر هذه القائمة. لا تبيع أجهزة تتبع: شركة برمجيات تبني تطبيقات أساطيل وتوصيل على المقاس تُربط فيها مواقع GPS بالجولات، التوصيلات، التزود بالوقود والصيانة، بفرق في الجزائر العاصمة وسطيف.' } },
  { name: 'Belive Algérie', url: 'https://www.belive.com.tn/belive-algerie/', city: 'Draria', focus: 'integrator', services: ['live_tracking', 'maintenance', 'reports', 'own_platform'],
    note: { fr: 'Éditeur tunisien de logiciels qui indique un bureau à Alger (Draria) ; son logiciel de flotte associe le suivi GPS des véhicules, la planification de l’entretien et les rapports de coûts.', en: 'Tunisian software publisher stating an office in Algiers (Draria); its fleet software combines GPS vehicle tracking, maintenance planning and cost reports.', ar: 'ناشر برمجيات تونسي يذكر مكتباً في الجزائر العاصمة (الدرارية)؛ ويجمع برنامجه للأساطيل تتبع المركبات بـ GPS، تخطيط الصيانة وتقارير التكاليف.' } },
  { name: 'Bougeo', url: 'https://bougeo.dz/fonctionnalites/', city: 'Draria', focus: 'specialist', services: ['live_tracking', 'history', 'alerts', 'fuel', 'driver_behavior', 'maintenance', 'reports', 'immobilizer', 'app', 'installation', 'own_platform'],
    note: { fr: 'Application de suivi sur le web et Android, avec un module distinct pour l’entretien de la flotte, des alertes de vitesse et de zone et l’arrêt du moteur à distance par SMS.', en: 'Tracking app on the web and Android, with a separate fleet-maintenance module, speed and zone alerts and remote engine stop by SMS.', ar: 'تطبيق تتبع على الويب وأندرويد، بوحدة منفصلة لصيانة الأسطول، تنبيهات السرعة والمنطقة وإيقاف المحرك عن بعد برسالة قصيرة.' } },
  { name: 'Geoflotte', by: 'i2b SPA', url: 'https://www.geoflotte.com/fr/', city: 'Kouba', focus: 'specialist', services: ['live_tracking', 'history', 'alerts', 'fuel', 'driver_behavior', 'reports', 'temperature', 'app', 'own_platform'],
    note: { fr: 'Plateforme de suivi de flotte développée en Algérie par i2b, avec historique des trajets, alertes de zone et de vitesse, modules carburant et chaîne du froid, accès web et Android.', en: 'Fleet tracking platform developed in Algeria by i2b, with trip history, zone and speed alerts, fuel and cold-chain modules, web and Android access.', ar: 'منصة لتتبع الأساطيل طوّرتها i2b في الجزائر، بسجل الرحلات، تنبيهات المنطقة والسرعة، وحدات الوقود وسلسلة التبريد، ودخول عبر الويب وأندرويد.' } },
  { name: 'Global Tech Security', url: 'https://globaltechsecurity.dz/', city: null, focus: 'specialist', services: ['live_tracking', 'history', 'alerts', 'fuel', 'driver_behavior', 'maintenance', 'reports', 'immobilizer', 'temperature', 'app', 'installation'],
    note: { fr: 'Le site décrit le suivi des véhicules avec sondes de carburant, notation des conducteurs, rappels d’entretien, sondes de température, coupure du moteur et installation sur tout le territoire.', en: 'The site describes vehicle tracking with fuel probes, driver scoring, maintenance reminders, temperature probes, engine cut-off and installation across the country.', ar: 'يصف الموقع تتبع المركبات بمجسات الوقود، تقييم السائقين، تذكيرات الصيانة، مجسات الحرارة، قطع المحرك والتركيب عبر كامل التراب الوطني.' } },
  { name: 'GPS City', by: 'SARL GPS City', url: 'https://www.gpscitydz.com/', city: 'Bab Ezzouar, Sétif', focus: 'specialist', services: ['live_tracking', 'alerts', 'fuel', 'driver_behavior', 'maintenance', 'temperature', 'installation', 'own_platform'],
    note: { fr: 'Installe des boîtiers de suivi et exploite sa propre plateforme, Fleetdz, présentée comme conçue en Algérie, avec surveillance de la vitesse et de la conduite, carburant et option chaîne du froid.', en: 'Installs tracking units and runs its own platform, Fleetdz, presented as made in Algeria, with speed and driving monitoring, fuel and a cold-chain option.', ar: 'تركّب أجهزة تتبع وتشغّل منصتها الخاصة Fleetdz، المقدَّمة كمصمَّمة في الجزائر، بمراقبة السرعة والقيادة، الوقود وخيار سلسلة التبريد.' } },
  { name: 'GPS-14', url: 'https://gps-14.net/', city: 'Tiaret', focus: 'integrator', services: ['live_tracking', 'history', 'reports', 'own_platform'],
    note: { fr: 'Éditeur de logiciels dont le produit GPS14 affiche la position des véhicules, l’historique des trajets et des rapports de kilométrage, à côté de logiciels de gestion et de RH.', en: 'Software publisher whose GPS14 product shows vehicle positions, route history and mileage reports, alongside management and HR software.', ar: 'ناشر برمجيات يعرض منتجه GPS14 مواقع المركبات، سجل الرحلات وتقارير المسافات، إلى جانب برامج للتسيير والموارد البشرية.' } },
  { name: 'Grizzly Tec Pro', url: 'https://www.grizzlytecpro.dz/', city: 'Bordj El Bahri', focus: 'specialist', services: ['live_tracking', 'alerts', 'reports', 'immobilizer', 'fuel', 'temperature', 'app', 'own_platform'],
    note: { fr: 'Exploite une plateforme de suivi sur le web et Android avec alertes de zone et coupure du moteur à distance, et propose des boîtiers acceptant des sondes de carburant et de température.', en: 'Runs a tracking platform on the web and Android with zone alerts and remote engine cut-off, and offers units accepting fuel and temperature probes.', ar: 'تشغّل منصة تتبع على الويب وأندرويد بتنبيهات المنطقة وقطع المحرك عن بعد، وتقترح أجهزة تقبل مجسات الوقود والحرارة.' } },
  { name: 'SGCP', by: 'SARL SGCP', url: 'https://sgcp-geo.com/', city: 'Chéraga, Oran', focus: 'specialist', services: ['live_tracking', 'alerts', 'fuel', 'driver_behavior', 'maintenance', 'reports', 'immobilizer', 'temperature', 'app', 'installation', 'own_platform'],
    note: { fr: 'Propose sa plateforme MYSGCP avec alertes de zone et de carburant, éco-conduite, coupure du moteur, température pour la chaîne du froid et applications mobiles.', en: 'Offers its MYSGCP platform with zone and fuel alerts, eco-driving, engine cut-off, cold-chain temperature and mobile apps.', ar: 'تقترح منصتها MYSGCP بتنبيهات المنطقة والوقود، القيادة الاقتصادية، قطع المحرك، الحرارة لسلسلة التبريد وتطبيقات للهاتف.' } },
  { name: 'TESPAS', url: 'https://www.tespas.com/tespas/notre-offre/', city: 'El Biar', focus: 'specialist', services: ['live_tracking', 'history', 'alerts', 'fuel', 'driver_behavior', 'maintenance', 'reports', 'immobilizer', 'own_platform'],
    note: { fr: 'Le site énumère le suivi sur le web avec alertes de vitesse, de zone et de contact, des rapports programmés, l’éco-conduite, les rappels d’entretien et l’arrêt du moteur par SMS.', en: 'The site lists web tracking with speed, zone and ignition alerts, scheduled reports, eco-driving, maintenance reminders and engine stop by SMS.', ar: 'يعدّد الموقع التتبع عبر الويب بتنبيهات السرعة والمنطقة والتشغيل، تقارير مبرمجة، القيادة الاقتصادية، تذكيرات الصيانة وإيقاف المحرك برسالة قصيرة.' } },
  // verified, not shown on the page (named in the FAQ)
  { name: 'Localira', url: 'https://localira-gps.com/', city: null, focus: 'specialist', services: ['live_tracking', 'history', 'app'] },
];

// The nine shown beside the publisher: companies whose own site loaded, states an office in Algeria
// and describes tracking with an online platform or app, with activity since 2025.
export const TOP_GPS = ['Belive Algérie', 'Bougeo', 'Geoflotte', 'Global Tech Security', 'GPS City', 'GPS-14', 'Grizzly Tec Pro', 'SGCP', 'TESPAS'];
