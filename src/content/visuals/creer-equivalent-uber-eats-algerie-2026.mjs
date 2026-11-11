import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'creer-equivalent-uber-eats-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Vu en France, à construire en Algérie · 02', title: ['Uber Eats n’est pas', 'en Algérie.', 'Le marché, si.'], subtitle: 'Qui livre vraiment en 2026, ce qui reste ouvert, et comment construire la version algérienne qui tient.', left: { label: 'Uber Eats · France', sub: '2016 → des millions de commandes' }, right: { label: 'Algérie', sub: '2026 · trois villes servies' }, note: 'Série fondateurs' },
    market: { title: 'Qui livre des repas en Algérie en 2026', columns: ['Alger, Oran, Constantine', 'Villes moyennes', 'Reste du pays'], rows: [
      { label: 'Super-app nationale (Yassir Express)', cells: [2, 1, 0] },
      { label: 'Acteurs locaux (ex. Qooxy, né à Sétif)', cells: [1, 1, 0] },
      { label: 'Restaurants en direct : téléphone, Instagram, WhatsApp', cells: [2, 2, 2] },
      { label: 'Jumia Food (parti fin 2023)', cells: [0, 0, 0] },
      { label: 'Uber Eats, Deliveroo, Glovo', cells: [0, 0, 0] },
    ], legend: '●  couverture réelle      ◐  partielle      ○  absente', caption: 'Figure 1 · Le marché n’est pas vide, il est concentré sur trois villes. Partout ailleurs, la livraison passe par le téléphone du restaurant.', alt: 'Qui livre des repas en Algérie en 2026 : Yassir Express surtout dans les grandes villes, acteurs locaux partiels, restaurants en direct partout, Jumia Food parti, Uber Eats absent.' },
    positions: { title: 'Trois positionnements encore ouverts', items: [
      { label: 'La ville moyenne, en profondeur', sub: 'Sétif, Béjaïa, Tlemcen, Batna, Annaba : une ville à la fois, trente restaurants actifs, des livreurs connus. Le modèle qui a fait Doctolib, appliqué aux repas.', accent: true },
      { label: 'La commande directe pour restaurants', sub: 'Une application au nom du restaurant ou de la chaîne, sans commission de marketplace. Le restaurateur garde son client et ses données.' },
      { label: 'La logistique B2B', sub: 'Vous ne vendez pas aux consommateurs : vous livrez pour les restaurants et les commerces qui ont déjà la demande mais pas la flotte.' },
    ], caption: 'Figure 2 · Attaquer Alger de front contre une super-app est le choix le plus coûteux. Les trois autres sont ouverts.', alt: 'Trois positionnements ouverts : la ville moyenne en profondeur, la commande directe pour restaurants, la logistique B2B.' },
    changes: { title: 'Ce qui change entre Uber Eats et la version algérienne', columns: ['Modèle français', 'Version algérienne'], rows: [
      { label: 'Paiement', cells: ['Carte, Apple Pay, à la commande', 'Espèces à la livraison, CIB et Edahabia en option'] },
      { label: 'Adresse', cells: ['Numéro, rue, code postal', 'Repère GPS, point de référence, appel du livreur'] },
      { label: 'Identité client', cells: ['Email et compte', 'Numéro de téléphone et code SMS'] },
      { label: 'Livreurs', cells: ['Vélo et scooter, auto-entrepreneurs', 'Moto et voiture, statut à cadrer, paiement quotidien'] },
      { label: 'Pics de demande', cells: ['Déjeuner, dîner, week-end', 'Ftour du Ramadan, soirées d’été, matchs'] },
      { label: 'Revenu plateforme', cells: ['Commission 25 à 30 % et frais', 'Commission plus basse ou abonnement restaurant'] },
    ], highlight: 1, caption: 'Figure 3 · Copier l’écran d’Uber Eats est facile. Copier son modèle économique en Algérie fait couler le projet.', alt: 'Comparaison Uber Eats France et version algérienne : paiement en espèces, adresse par repère GPS, identité par SMS, livreurs moto, pics Ramadan, revenu par commission réduite ou abonnement.' },
    architecture: { title: 'Trois applications et un dispatch', layers: [
      { label: 'Clients', items: [{ name: 'Application client iOS et Android', sub: 'menu, panier, suivi en temps réel, AR et FR' }, { name: 'Commande WhatsApp', sub: 'pour les clients qui n’installent rien' }] },
      { label: 'Restaurants', items: [{ name: 'Tablette ou application restaurant', sub: 'acceptation, temps de préparation, menu' }, { name: 'Back-office', sub: 'horaires, ruptures, statistiques' }] },
      { label: 'Livreurs', items: [{ name: 'Application livreur', sub: 'missions, navigation, encaissement cash' }, { name: 'Caisse livreur', sub: 'règlement quotidien du cash collecté' }] },
      { label: 'Cœur du produit', items: [{ name: 'Dispatch et zones', sub: 'attribution, distances réelles, regroupement de commandes', accent: true }, { name: 'Tableau de bord opérations', sub: 'votre équipe terrain, chaque jour' }] },
      { label: 'Paiement et données', items: [{ name: 'CIB, Edahabia via SATIM', sub: 'optionnel au lancement' }, { name: 'Backend, PostgreSQL, cartes', sub: 'hébergement conforme loi 18-07' }] },
    ], caption: 'Figure 4 · Le produit, c’est le dispatch : qui livre quoi, quand, à quel coût. Les trois applications ne sont que ses interfaces.', alt: 'Architecture d’une plateforme de livraison de repas en Algérie : application client, application restaurant, application livreur, dispatch et zones, paiement CIB Edahabia, backend conforme loi 18-07.' },
    timeline: { title: 'Une ville, trente restaurants, vingt livreurs', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'ville pilote, zones, règles de dispatch, commission', from: 0, to: 2 },
      { label: 'Design', note: 'trois applications, AR et FR, testées en cuisine', from: 2, to: 5 },
      { label: 'Développement', note: 'client, restaurant, livreur, dispatch', from: 5, to: 15 },
      { label: 'Pilote fermé', note: 'dix restaurants, un quartier, vrais livreurs', from: 15, to: 18 },
      { label: 'Ouverture et activation', note: 'trente restaurants, recrutement livreurs, marketing local', from: 18, to: 26, accent: true },
    ], caption: 'Figure 5 · Le pilote fermé est l’étape que tout le monde saute. C’est celle qui révèle les vrais temps de préparation et de trajet.', alt: 'Calendrier en semaines : cadrage 0 à 2, design 2 à 5, développement 5 à 15, pilote fermé 15 à 18, ouverture et activation 18 à 26.' },
  },
  en: {
    cover: { eyebrow: 'Seen in France, to be built in Algeria · 02', title: ['Uber Eats is not', 'in Algeria.', 'The market is.'], subtitle: 'Who really delivers in 2026, what is still open, and how to build the Algerian version that lasts.', left: { label: 'Uber Eats · France', sub: '2016 → millions of orders' }, right: { label: 'Algeria', sub: '2026 · three cities served' }, note: 'Founder series' },
    market: { title: 'Who delivers meals in Algeria in 2026', columns: ['Algiers, Oran, Constantine', 'Mid-sized cities', 'Rest of the country'], rows: [
      { label: 'National super-app (Yassir Express)', cells: [2, 1, 0] },
      { label: 'Local players (e.g. Qooxy, born in Sétif)', cells: [1, 1, 0] },
      { label: 'Restaurants directly: phone, Instagram, WhatsApp', cells: [2, 2, 2] },
      { label: 'Jumia Food (left end of 2023)', cells: [0, 0, 0] },
      { label: 'Uber Eats, Deliveroo, Glovo', cells: [0, 0, 0] },
    ], legend: '●  real coverage      ◐  partial      ○  absent', caption: 'Figure 1 · The market is not empty, it is concentrated in three cities. Everywhere else, delivery goes through the restaurant’s phone.', alt: 'Who delivers meals in Algeria in 2026: Yassir Express mostly in big cities, local players partial, restaurants directly everywhere, Jumia Food gone, Uber Eats absent.' },
    positions: { title: 'Three positions still open', items: [
      { label: 'The mid-sized city, in depth', sub: 'Sétif, Béjaïa, Tlemcen, Batna, Annaba: one city at a time, thirty active restaurants, known couriers. The model that made Doctolib, applied to meals.', accent: true },
      { label: 'Direct ordering for restaurants', sub: 'An app in the restaurant’s or chain’s name, with no marketplace commission. The owner keeps the customer and the data.' },
      { label: 'B2B logistics', sub: 'You do not sell to consumers: you deliver for restaurants and shops that already have demand but no fleet.' },
    ], caption: 'Figure 2 · Attacking Algiers head-on against a super-app is the most expensive choice. The other three are open.', alt: 'Three open positions: the mid-sized city in depth, direct ordering for restaurants, B2B logistics.' },
    changes: { title: 'What changes between Uber Eats and the Algerian version', columns: ['French model', 'Algerian version'], rows: [
      { label: 'Payment', cells: ['Card, Apple Pay, at order time', 'Cash on delivery, CIB and Edahabia as options'] },
      { label: 'Address', cells: ['Number, street, postcode', 'GPS pin, landmark, courier phone call'] },
      { label: 'Customer identity', cells: ['Email and account', 'Phone number and SMS code'] },
      { label: 'Couriers', cells: ['Bikes and scooters, self-employed', 'Motorbikes and cars, status to frame, daily payout'] },
      { label: 'Demand peaks', cells: ['Lunch, dinner, weekends', 'Ramadan iftar, summer evenings, football matches'] },
      { label: 'Platform revenue', cells: ['25 to 30% commission plus fees', 'Lower commission or restaurant subscription'] },
    ], highlight: 1, caption: 'Figure 3 · Copying the Uber Eats screen is easy. Copying its business model in Algeria sinks the project.', alt: 'Comparison of Uber Eats France and the Algerian version: cash payment, GPS landmark addresses, SMS identity, motorbike couriers, Ramadan peaks, lower commission or subscription revenue.' },
    architecture: { title: 'Three apps and one dispatch', layers: [
      { label: 'Customers', items: [{ name: 'Customer app iOS and Android', sub: 'menu, cart, live tracking, AR and FR' }, { name: 'WhatsApp ordering', sub: 'for customers who install nothing' }] },
      { label: 'Restaurants', items: [{ name: 'Restaurant tablet or app', sub: 'accept, prep time, menu' }, { name: 'Back-office', sub: 'hours, stock-outs, statistics' }] },
      { label: 'Couriers', items: [{ name: 'Courier app', sub: 'jobs, navigation, cash collection' }, { name: 'Courier cash desk', sub: 'daily settlement of collected cash' }] },
      { label: 'Product core', items: [{ name: 'Dispatch and zones', sub: 'assignment, real distances, order batching', accent: true }, { name: 'Operations dashboard', sub: 'your field team, every day' }] },
      { label: 'Payment and data', items: [{ name: 'CIB, Edahabia via SATIM', sub: 'optional at launch' }, { name: 'Backend, PostgreSQL, maps', sub: 'Law 18-07 compliant hosting' }] },
    ], caption: 'Figure 4 · The product is the dispatch: who delivers what, when, at what cost. The three apps are only its interfaces.', alt: 'Architecture of a meal delivery platform in Algeria: customer app, restaurant app, courier app, dispatch and zones, CIB Edahabia payment, Law 18-07 compliant backend.' },
    timeline: { title: 'One city, thirty restaurants, twenty couriers', unit: 'weeks', items: [
      { label: 'Scoping', note: 'pilot city, zones, dispatch rules, commission', from: 0, to: 2 },
      { label: 'Design', note: 'three apps, AR and FR, tested in a kitchen', from: 2, to: 5 },
      { label: 'Development', note: 'customer, restaurant, courier, dispatch', from: 5, to: 15 },
      { label: 'Closed pilot', note: 'ten restaurants, one district, real couriers', from: 15, to: 18 },
      { label: 'Opening and activation', note: 'thirty restaurants, courier recruitment, local marketing', from: 18, to: 26, accent: true },
    ], caption: 'Figure 5 · The closed pilot is the step everyone skips. It is the one that reveals real preparation and travel times.', alt: 'Timeline in weeks: scoping 0 to 2, design 2 to 5, development 5 to 15, closed pilot 15 to 18, opening and activation 18 to 26.' },
  },
  ar: {
    cover: { eyebrow: 'رأيته في فرنسا، ابنِه في الجزائر · 02', title: ['Uber Eats ليس', 'في الجزائر.', 'السوق موجودة.'], subtitle: 'من يوصّل فعلاً في 2026، ما يبقى مفتوحاً، وكيف تبني النسخة الجزائرية التي تصمد.', left: { label: 'Uber Eats · فرنسا', sub: '2016 ← ملايين الطلبات' }, right: { label: 'الجزائر', sub: '2026 · ثلاث مدن مخدومة' }, note: 'سلسلة المؤسسين' },
    market: { title: 'من يوصّل الوجبات في الجزائر في 2026', columns: ['الجزائر، وهران، قسنطينة', 'المدن المتوسطة', 'باقي البلاد'], rows: [
      { label: 'التطبيق الشامل الوطني (Yassir Express)', cells: [2, 1, 0] },
      { label: 'فاعلون محليون (مثل Qooxy من سطيف)', cells: [1, 1, 0] },
      { label: 'المطاعم مباشرة: هاتف، إنستغرام، واتساب', cells: [2, 2, 2] },
      { label: 'Jumia Food (غادر نهاية 2023)', cells: [0, 0, 0] },
      { label: 'Uber Eats، Deliveroo، Glovo', cells: [0, 0, 0] },
    ], legend: '●  تغطية حقيقية      ◐  جزئية      ○  غائبة', caption: 'الشكل 1 · السوق ليست فارغة بل مركّزة في ثلاث مدن. في كل مكان آخر يمر التوصيل عبر هاتف المطعم.', alt: 'من يوصّل الوجبات في الجزائر في 2026.' },
    positions: { title: 'ثلاثة مواقع ما زالت مفتوحة', items: [
      { label: 'المدينة المتوسطة، بعمق', sub: 'سطيف، بجاية، تلمسان، باتنة، عنابة: مدينة واحدة في كل مرة، ثلاثون مطعماً نشطاً، موصّلون معروفون. النموذج الذي صنع Doctolib مطبّقاً على الوجبات.', accent: true },
      { label: 'الطلب المباشر للمطاعم', sub: 'تطبيق باسم المطعم أو السلسلة، بلا عمولة سوق. صاحب المطعم يحتفظ بعميله وبياناته.' },
      { label: 'اللوجستيك B2B', sub: 'لا تبيع للمستهلكين: توصّل للمطاعم والمتاجر التي لديها الطلب وليس لديها أسطول.' },
    ], caption: 'الشكل 2 · مهاجمة العاصمة مباشرة ضد تطبيق شامل هو الخيار الأغلى. المواقع الثلاثة الأخرى مفتوحة.', alt: 'ثلاثة مواقع مفتوحة.' },
    changes: { title: 'ما يتغير بين Uber Eats والنسخة الجزائرية', columns: ['النموذج الفرنسي', 'النسخة الجزائرية'], rows: [
      { label: 'الدفع', cells: ['بطاقة، Apple Pay، عند الطلب', 'نقداً عند التسليم، CIB والذهبية اختيارياً'] },
      { label: 'العنوان', cells: ['رقم، شارع، رمز بريدي', 'نقطة GPS، معلم، اتصال الموصّل'] },
      { label: 'هوية العميل', cells: ['بريد إلكتروني وحساب', 'رقم هاتف ورمز SMS'] },
      { label: 'الموصّلون', cells: ['دراجات وسكوترات، مستقلون', 'دراجات نارية وسيارات، وضع يُؤطَّر، دفع يومي'] },
      { label: 'ذروات الطلب', cells: ['الغداء، العشاء، نهاية الأسبوع', 'إفطار رمضان، سهرات الصيف، المباريات'] },
      { label: 'إيراد المنصة', cells: ['عمولة 25 إلى 30% ورسوم', 'عمولة أقل أو اشتراك للمطعم'] },
    ], highlight: 1, caption: 'الشكل 3 · نسخ شاشة Uber Eats سهل. نسخ نموذجه الاقتصادي في الجزائر يُغرق المشروع.', alt: 'مقارنة Uber Eats فرنسا والنسخة الجزائرية.' },
    architecture: { title: 'ثلاثة تطبيقات وتوزيع واحد', layers: [
      { label: 'العملاء', items: [{ name: 'تطبيق العميل iOS وAndroid', sub: 'قائمة، سلة، تتبع مباشر، عربي وفرنسي' }, { name: 'الطلب عبر واتساب', sub: 'للعملاء الذين لا يثبّتون شيئاً' }] },
      { label: 'المطاعم', items: [{ name: 'لوحي أو تطبيق المطعم', sub: 'قبول، وقت التحضير، القائمة' }, { name: 'الإدارة الخلفية', sub: 'المواعيد، النفاد، الإحصائيات' }] },
      { label: 'الموصّلون', items: [{ name: 'تطبيق الموصّل', sub: 'مهام، ملاحة، تحصيل نقدي' }, { name: 'صندوق الموصّل', sub: 'تسوية يومية للنقد المحصّل' }] },
      { label: 'قلب المنتج', items: [{ name: 'التوزيع والمناطق', sub: 'إسناد، مسافات حقيقية، تجميع الطلبات', accent: true }, { name: 'لوحة العمليات', sub: 'فريقك الميداني كل يوم' }] },
      { label: 'الدفع والبيانات', items: [{ name: 'CIB والذهبية عبر SATIM', sub: 'اختياري عند الإطلاق' }, { name: 'خلفية، PostgreSQL، خرائط', sub: 'استضافة مطابقة للقانون 18-07' }] },
    ], caption: 'الشكل 4 · المنتج هو التوزيع: من يوصّل ماذا ومتى وبأي كلفة. التطبيقات الثلاثة مجرد واجهات له.', alt: 'بنية منصة توصيل الوجبات في الجزائر.' },
    timeline: { title: 'مدينة واحدة، ثلاثون مطعماً، عشرون موصّلاً', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'المدينة التجريبية، المناطق، قواعد التوزيع، العمولة', from: 0, to: 2 },
      { label: 'التصميم', note: 'ثلاثة تطبيقات بالعربية والفرنسية، مختبرة في المطبخ', from: 2, to: 5 },
      { label: 'التطوير', note: 'العميل، المطعم، الموصّل، التوزيع', from: 5, to: 15 },
      { label: 'تجربة مغلقة', note: 'عشرة مطاعم، حي واحد، موصّلون حقيقيون', from: 15, to: 18 },
      { label: 'الافتتاح والتفعيل', note: 'ثلاثون مطعماً، توظيف موصّلين، تسويق محلي', from: 18, to: 26, accent: true },
    ], caption: 'الشكل 5 · التجربة المغلقة هي الخطوة التي يتجاوزها الجميع. وهي التي تكشف أوقات التحضير والمسار الحقيقية.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      market: { svg: matrix({ title: t.market.title, columns: t.market.columns, rows: t.market.rows, legend: t.market.legend, rtl }), caption: t.market.caption, alt: t.market.alt },
      positions: { svg: steps({ title: t.positions.title, steps: t.positions.items, arrows: false, rtl }), caption: t.positions.caption, alt: t.positions.alt },
      changes: { svg: matrix({ title: t.changes.title, columns: t.changes.columns, rows: t.changes.rows, highlight: t.changes.highlight, rtl }), caption: t.changes.caption, alt: t.changes.alt },
      architecture: { svg: layers({ title: t.architecture.title, layers: t.architecture.layers, rtl }), caption: t.architecture.caption, alt: t.architecture.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 28, tick: 4, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
