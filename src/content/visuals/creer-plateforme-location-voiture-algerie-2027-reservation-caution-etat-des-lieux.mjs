import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';

export const slug = 'creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux';

const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France #08', title: ['Créer une plateforme', 'de location de voitures', 'en Algérie en 2027.'], subtitle: 'Réserver depuis la France, la caution, l’état des lieux, la flotte : ce qu’il faut construire, et dans quel ordre.', left: { label: 'La réservation', sub: 'Paris, Lyon, Marseille' }, right: { label: 'La remise des clés', sub: 'Alger, Oran, Constantine' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Une location réservée depuis la France, en six moments', items: [
      { n: '01', label: 'Réservation', sub: 'Dates, numéro de vol, catégorie, et chaque conducteur nommé.' },
      { n: '02', label: 'Acompte en ligne', sub: 'En euros côté France, ou CIB et Edahabia. La voiture est bloquée.' },
      { n: '03', label: 'Documents avant le vol', sub: 'Permis et pièce d’identité envoyés en photo, vérifiés par l’agence.' },
      { n: '04', label: 'Remise à l’arrivée', sub: 'Photos horodatées, compteur, carburant, signature sur tablette.' },
      { n: '05', label: 'La caution', sub: 'Montant, mode et date de restitution écrits, reçu numérique.' },
      { n: '06', label: 'Retour', sub: 'Mêmes photos, côte à côte. Caution rendue, ou retenue justifiée.', accent: true },
    ], caption: 'Figure 1 · Les litiges d’une location naissent aux moments 04 à 06. Ils se règlent en quelques minutes quand les deux états des lieux sont photographiés de la même façon et partagés tout de suite avec le client.', alt: 'Six moments : réservation avec conducteurs nommés, acompte en ligne, documents vérifiés avant le vol, remise avec photos horodatées, caution écrite avec reçu numérique, retour avec photos comparées et caution rendue ou retenue justifiée.' },
    stack: { title: 'Ce qu’il faut construire : l’outil de l’agence d’abord', layers: [
      { label: 'Côté client', items: [
        { name: 'Réservation web et mobile', sub: 'français, arabe, anglais ; prix total affiché avant paiement' },
        { name: 'Paiement', sub: 'acompte en euros ou en dinars, solde sur place' },
      ] },
      { label: 'Plateforme', items: [
        { name: 'Un seul calendrier', sub: 'chaque voiture a une seule disponibilité, vraie, à la minute' },
        { name: 'Tarifs par saison', sub: 'été, fêtes, durée, livraison aéroport de nuit' },
        { name: 'Contrats', sub: 'conducteurs nommés, franchise, caution, signés en ligne' },
      ] },
      { label: 'Côté agence', items: [
        { name: 'État des lieux sur téléphone', sub: 'angles imposés, horodatage, envoi immédiat au client', accent: true },
        { name: 'Flotte et entretien', sub: 'kilométrage, vidanges, pneus, assurance, contrôle technique' },
        { name: 'Registre des cautions', sub: 'qui doit quoi, jusqu’à quand' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur à votre nom, traçabilité', sub: 'sauvegardes quotidiennes ; un contrat signé ne se modifie pas, il s’annule et l’annulation reste visible' }] },
    ], caption: 'Figure 2 · La réservation en ligne ne vaut que ce que vaut le calendrier. Si l’agence continue de noter ses locations dans un cahier, la plateforme affiche des voitures qui sont déjà sur la route.', alt: 'Quatre couches : côté client la réservation et le paiement ; la plateforme avec un seul calendrier, les tarifs par saison et les contrats ; côté agence l’état des lieux sur téléphone, la flotte et l’entretien, le registre des cautions ; un socle avec serveur à votre nom et traçabilité.' },
    utilisation: { title: 'Vingt voitures, un été : ce que coûtent deux jours d’attente', items: [
      { value: '1 840', label: 'jours-voiture : 20 voitures × 92 jours, mi-juin à mi-septembre' },
      { value: '83 %', label: 'loués avec 2 jours d’attente entre deux locations de 10 jours' },
      { value: '95 %', label: 'si elle repart le jour même de son retour' },
      { value: '+ 220', label: 'jours loués en plus, environ 22 locations de 10 jours', accent: true },
    ], caption: 'Figure 3 · Un exemple de calcul, pas une moyenne du marché. Il suppose ce que l’été rend probable : plus de demandes que de voitures. La flotte ne change pas ; c’est le temps mort entre deux clients qui baisse.', alt: 'Exemple de calcul : 1 840 jours-voiture sur un été pour vingt voitures ; 83 % de jours loués avec deux jours d’attente entre deux locations de dix jours ; 95 % si la voiture repart le jour même ; environ 220 jours loués en plus, soit 22 locations de dix jours.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Une agence, sa propre réservation en ligne', cells: ['Clients de la diaspora en direct, acompte encaissé', 'Un calendrier tenu à côté : double réservation'] },
      { label: 'Agrégateur d’agences (type comparateur)', cells: ['Une commission sur chaque location confirmée', 'Des disponibilités fausses si les agences n’ont pas d’outil'] },
      { label: 'Réseau d’agences d’une même marque', cells: ['Aller simple entre villes, flotte partagée', 'Transferts de voitures non suivis'] },
      { label: 'Location entre particuliers (type Getaround)', cells: ['Une offre sans acheter de flotte', 'Assurance et confiance : à valider avant le code'] },
      { label: 'Longue durée pour les entreprises', cells: ['Contrats mensuels qui remplissent l’hiver', 'Kilométrage et entretien non suivis'] },
      { label: 'Avec chauffeur, transferts aéroport', cells: ['Familles, mariages, voyageurs d’affaires', 'Planning des chauffeurs tenu au téléphone'] },
    ], caption: 'Figure 4 · Les six modèles ont la même base : un calendrier juste et un état des lieux incontestable. Nous conseillons de commencer par la première ligne et d’ajouter l’agrégateur quand dix à vingt agences utilisent déjà l’outil.', alt: 'Matrice de six modèles : agence avec réservation en ligne, agrégateur d’agences, réseau d’agences, location entre particuliers, longue durée pour les entreprises, avec chauffeur ; pour chacun ce qui rapporte et ce qui casse.' },
    season: { title: 'Pour l’été 2027 : de novembre 2026 à septembre 2027', unit: 'mois', items: [
      { label: 'Cadrage écrit, dossier web-marchand', note: 'novembre : le délai bancaire ne dépend pas de nous', from: 0, to: 1 },
      { label: 'Outil agence : flotte, contrats, état des lieux', note: 'décembre–janvier', from: 1, to: 3 },
      { label: 'Réservation en ligne, acompte, caution', note: 'janvier–mars', from: 2, to: 5 },
      { label: 'Pilote dans deux ou trois agences', note: 'février–mars, en double avec le cahier', from: 3, to: 5 },
      { label: 'Ouverture des réservations d’été', note: 'avril–mai : la diaspora réserve vol et voiture', from: 5, to: 7, accent: true },
      { label: 'Haute saison', note: 'juin–septembre', from: 7, to: 11 },
    ], caption: 'Figure 5 · Mois 0 = novembre 2026. Ouvrir en avril, pas en juillet : les guides de voyage signalent que les agences d’aéroport affichent souvent complet dès juin.', alt: 'Calendrier en mois à partir de novembre 2026 : cadrage et dossier web-marchand 0 à 1, outil agence 1 à 3, réservation en ligne 2 à 5, pilote 3 à 5, ouverture des réservations d’été 5 à 7, haute saison 7 à 11.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France #08', title: ['Building a car rental', 'platform in Algeria', 'in 2027.'], subtitle: 'Booking from France, the deposit, the condition report, the fleet: what to build, and in what order.', left: { label: 'The booking', sub: 'Paris, Lyon, Marseille' }, right: { label: 'The key handover', sub: 'Algiers, Oran, Constantine' }, note: 'France · Algeria · 2027' },
    journey: { title: 'A rental booked from France, in six moments', items: [
      { n: '01', label: 'Booking', sub: 'Dates, flight number, category, and every driver named.' },
      { n: '02', label: 'Online deposit', sub: 'In euros on the France side, or CIB and Edahabia. The car is held.' },
      { n: '03', label: 'Documents before the flight', sub: 'Licence and ID sent as photos, checked by the agency.' },
      { n: '04', label: 'Handover on arrival', sub: 'Time-stamped photos, odometer, fuel, signature on a tablet.' },
      { n: '05', label: 'The security deposit', sub: 'Amount, method and return date in writing, digital receipt.' },
      { n: '06', label: 'Return', sub: 'Same photos, side by side. Deposit returned, or a documented deduction.', accent: true },
    ], caption: 'Figure 1 · Rental disputes are born at moments 04 to 06. They are settled in minutes when both condition reports are photographed the same way and shared with the customer straight away.', alt: 'Six moments: booking with named drivers, online deposit, documents checked before the flight, handover with time-stamped photos, written security deposit with digital receipt, return with compared photos and deposit returned or deduction documented.' },
    stack: { title: 'What to build: the agency’s tool first', layers: [
      { label: 'Customer side', items: [
        { name: 'Web and mobile booking', sub: 'French, Arabic, English; total price shown before payment' },
        { name: 'Payment', sub: 'deposit in euros or dinars, balance on site' },
      ] },
      { label: 'Platform', items: [
        { name: 'One calendar', sub: 'each car has a single, true availability, to the minute' },
        { name: 'Seasonal pricing', sub: 'summer, holidays, length, night airport delivery' },
        { name: 'Contracts', sub: 'named drivers, excess, deposit, signed online' },
      ] },
      { label: 'Agency side', items: [
        { name: 'Condition report on a phone', sub: 'set angles, time stamp, sent to the customer at once', accent: true },
        { name: 'Fleet and maintenance', sub: 'mileage, oil changes, tyres, insurance, inspection' },
        { name: 'Deposit register', sub: 'who owes what, until when' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server in your name, traceability', sub: 'daily backups; a signed contract is never edited, it is cancelled and the cancellation stays visible' }] },
    ], caption: 'Figure 2 · Online booking is only as good as the calendar. If the agency keeps writing its rentals in a notebook, the platform shows cars that are already on the road.', alt: 'Four layers: customer side booking and payment; platform with one calendar, seasonal pricing and contracts; agency side condition report on a phone, fleet and maintenance, deposit register; a foundation with a server in your name and traceability.' },
    utilisation: { title: 'Twenty cars, one summer: what two idle days cost', items: [
      { value: '1,840', label: 'car-days: 20 cars × 92 days, mid-June to mid-September' },
      { value: '83%', label: 'rented if each car waits 2 days between two 10-day rentals' },
      { value: '95%', label: 'if it goes back out the day it returns' },
      { value: '+220', label: 'more rented days, about 22 extra 10-day rentals', accent: true },
    ], caption: 'Figure 3 · A worked example, not a market average. It assumes what summer makes likely: more requests than cars. The fleet does not change; the dead time between two customers does.', alt: 'Worked example: 1,840 car-days over a summer for twenty cars; 83% of days rented with two idle days between two ten-day rentals; 95% if the car goes back out the same day; about 220 more rented days, or 22 ten-day rentals.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One agency, its own online booking', cells: ['Diaspora customers direct, deposit collected', 'A calendar kept on the side: double booking'] },
      { label: 'Agency aggregator (comparison site)', cells: ['A commission on every confirmed rental', 'False availability if agencies have no tool'] },
      { label: 'Network of agencies under one brand', cells: ['One-way between cities, shared fleet', 'Car transfers nobody tracks'] },
      { label: 'Peer-to-peer rental (Getaround type)', cells: ['Supply without buying a fleet', 'Insurance and trust: settle them before code'] },
      { label: 'Long-term rental for companies', cells: ['Monthly contracts that fill the winter', 'Mileage and maintenance not tracked'] },
      { label: 'With driver, airport transfers', cells: ['Families, weddings, business travellers', 'Driver schedule kept on the phone'] },
    ], caption: 'Figure 4 · All six models share the same base: a true calendar and an indisputable condition report. We advise starting with the first row and adding the aggregator once ten to twenty agencies already use the tool.', alt: 'Matrix of six models: agency with online booking, agency aggregator, network of agencies, peer-to-peer rental, long-term rental for companies, with driver; for each, what pays and what breaks.' },
    season: { title: 'For summer 2027: from November 2026 to September 2027', unit: 'months', items: [
      { label: 'Written scoping, merchant application', note: 'November: the bank’s timing is not ours', from: 0, to: 1 },
      { label: 'Agency tool: fleet, contracts, condition report', note: 'December–January', from: 1, to: 3 },
      { label: 'Online booking, deposit, security deposit', note: 'January–March', from: 2, to: 5 },
      { label: 'Pilot in two or three agencies', note: 'February–March, alongside the notebook', from: 3, to: 5 },
      { label: 'Summer bookings open', note: 'April–May: the diaspora books flight and car', from: 5, to: 7, accent: true },
      { label: 'High season', note: 'June–September', from: 7, to: 11 },
    ], caption: 'Figure 5 · Month 0 = November 2026. Open in April, not July: travel guides report that airport agencies are often fully booked from June.', alt: 'Calendar in months from November 2026: scoping and merchant application 0 to 1, agency tool 1 to 3, online booking 2 to 5, pilot 3 to 5, summer bookings open 5 to 7, high season 7 to 11.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا #08', title: ['إنشاء منصة', 'لكراء السيارات', 'في الجزائر سنة 2027.'], subtitle: 'الحجز من فرنسا، الضمان، معاينة الحالة، الأسطول: ما يجب بناؤه وبأي ترتيب.', left: { label: 'الحجز', sub: 'باريس، ليون، مرسيليا' }, right: { label: 'تسليم المفاتيح', sub: 'الجزائر، وهران، قسنطينة' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'كراء محجوز من فرنسا في ست لحظات', items: [
      { n: '01', label: 'الحجز', sub: 'التواريخ، رقم الرحلة، الفئة، وكل سائق مذكور باسمه.' },
      { n: '02', label: 'عربون عبر الإنترنت', sub: 'باليورو من جهة فرنسا، أو CIB والذهبية. السيارة محجوزة.' },
      { n: '03', label: 'الوثائق قبل الرحلة', sub: 'رخصة السياقة والهوية مصوّرتان وتتحقق منهما الوكالة.' },
      { n: '04', label: 'التسليم عند الوصول', sub: 'صور مؤرَّخة، العدّاد، الوقود، توقيع على اللوحة.' },
      { n: '05', label: 'الضمان', sub: 'المبلغ والطريقة وتاريخ الإرجاع مكتوبة، ووصل رقمي.' },
      { n: '06', label: 'الإرجاع', sub: 'الصور نفسها جنباً إلى جنب. ضمان مُرجَع أو خصم مبرَّر.', accent: true },
    ], caption: 'الشكل 1 · نزاعات الكراء تولد في اللحظات 04 إلى 06، وتُحلّ في دقائق عندما تُصوَّر المعاينتان بالطريقة نفسها وتُرسلان إلى الزبون فوراً.', alt: 'ست لحظات: الحجز مع السائقين بأسمائهم، العربون عبر الإنترنت، التحقق من الوثائق قبل الرحلة، التسليم بصور مؤرَّخة، الضمان المكتوب بوصل رقمي، الإرجاع بصور مقارنة وضمان مُرجَع أو خصم مبرَّر.' },
    stack: { title: 'ما يجب بناؤه: أداة الوكالة أولاً', layers: [
      { label: 'جهة الزبون', items: [
        { name: 'حجز عبر الويب والهاتف', sub: 'بالفرنسية والعربية والإنجليزية، والسعر الإجمالي قبل الدفع' },
        { name: 'الدفع', sub: 'عربون باليورو أو بالدينار، والباقي في عين المكان' },
      ] },
      { label: 'المنصة', items: [
        { name: 'رزنامة واحدة', sub: 'لكل سيارة توفّر واحد صحيح بالدقيقة' },
        { name: 'أسعار حسب الموسم', sub: 'الصيف، الأعياد، المدة، التوصيل الليلي للمطار' },
        { name: 'العقود', sub: 'سائقون بأسمائهم، الفرانشيز، الضمان، توقيع إلكتروني' },
      ] },
      { label: 'جهة الوكالة', items: [
        { name: 'المعاينة على الهاتف', sub: 'زوايا محددة، تأريخ، إرسال فوري للزبون', accent: true },
        { name: 'الأسطول والصيانة', sub: 'الكيلومترات، تغيير الزيت، العجلات، التأمين، المراقبة التقنية' },
        { name: 'سجل الضمانات', sub: 'من يدين بماذا وإلى متى' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم باسمك وتتبّع', sub: 'نسخ احتياطي يومي؛ العقد الموقَّع لا يُعدَّل بل يُلغى ويبقى الإلغاء ظاهراً' }] },
    ], caption: 'الشكل 2 · الحجز عبر الإنترنت لا يساوي أكثر من الرزنامة. إذا واصلت الوكالة تسجيل كراءاتها في دفتر، ستعرض المنصة سيارات هي في الطريق أصلاً.', alt: 'أربع طبقات: جهة الزبون بالحجز والدفع؛ المنصة برزنامة واحدة وأسعار موسمية وعقود؛ جهة الوكالة بالمعاينة على الهاتف والأسطول والصيانة وسجل الضمانات؛ قاعدة بخادم باسمك وتتبّع.' },
    utilisation: { title: 'عشرون سيارة وصيف واحد: كم يكلّف يوما انتظار', items: [
      { value: '1 840', label: 'يوم-سيارة: 20 سيارة × 92 يوماً صيفاً' },
      { value: '83 %', label: 'مؤجَّرة إذا انتظرت كل سيارة يومين بين كراءين من 10 أيام' },
      { value: '95 %', label: 'إذا خرجت من جديد يوم عودتها' },
      { value: '+ 220', label: 'يوم كراء إضافي، نحو 22 كراء من 10 أيام', accent: true },
    ], caption: 'الشكل 3 · مثال حساب وليس متوسط السوق. يفترض ما يجعله الصيف مرجحاً: طلبات أكثر من السيارات. الأسطول لا يتغير؛ ما ينخفض هو الوقت الميت بين زبونين.', alt: 'مثال حساب: 1840 يوم-سيارة في صيف لعشرين سيارة؛ 83 % أيام مؤجرة مع يومي انتظار بين كراءين من عشرة أيام؛ 95 % إذا خرجت السيارة في اليوم نفسه؛ نحو 220 يوماً إضافياً أي 22 كراء من عشرة أيام.' },
    models: { title: 'أي نموذج تبني: ما يربح وما ينكسر', columns: ['ما يربح', 'ما ينكسر'], rows: [
      { label: 'وكالة واحدة بحجزها الخاص عبر الإنترنت', cells: ['زبائن الجالية مباشرة، عربون محصَّل', 'رزنامة جانبية: حجز مزدوج'] },
      { label: 'مجمّع وكالات (موقع مقارنة)', cells: ['عمولة على كل كراء مؤكَّد', 'توفّر خاطئ إذا لم تكن للوكالات أداة'] },
      { label: 'شبكة وكالات بعلامة واحدة', cells: ['ذهاب فقط بين المدن، أسطول مشترك', 'تحويلات سيارات لا يتابعها أحد'] },
      { label: 'كراء بين الأفراد (نوع Getaround)', cells: ['عرض دون شراء أسطول', 'التأمين والثقة: تُحسم قبل البرمجة'] },
      { label: 'كراء طويل المدة للمؤسسات', cells: ['عقود شهرية تملأ الشتاء', 'الكيلومترات والصيانة دون متابعة'] },
      { label: 'مع سائق، نقل من وإلى المطار', cells: ['عائلات، أعراس، رجال أعمال', 'مواعيد السائقين على الهاتف'] },
    ], caption: 'الشكل 4 · النماذج الستة لها القاعدة نفسها: رزنامة صحيحة ومعاينة لا تُنازع. ننصح بالبدء بالسطر الأول وإضافة المجمّع عندما تستعمل عشر إلى عشرين وكالة الأداة.', alt: 'مصفوفة ستة نماذج: وكالة بحجز إلكتروني، مجمّع وكالات، شبكة وكالات، كراء بين الأفراد، كراء طويل المدة للمؤسسات، مع سائق؛ ولكل منها ما يربح وما ينكسر.' },
    season: { title: 'لصيف 2027: من نوفمبر 2026 إلى سبتمبر 2027', unit: 'شهر', items: [
      { label: 'تأطير مكتوب وملف التاجر الإلكتروني', note: 'نوفمبر: آجال البنك ليست بأيدينا', from: 0, to: 1 },
      { label: 'أداة الوكالة: الأسطول، العقود، المعاينة', note: 'ديسمبر–جانفي', from: 1, to: 3 },
      { label: 'الحجز الإلكتروني، العربون، الضمان', note: 'جانفي–مارس', from: 2, to: 5 },
      { label: 'تجربة في وكالتين أو ثلاث', note: 'فيفري–مارس، بالتوازي مع الدفتر', from: 3, to: 5 },
      { label: 'فتح حجوزات الصيف', note: 'أفريل–ماي: الجالية تحجز الرحلة والسيارة', from: 5, to: 7, accent: true },
      { label: 'الموسم العالي', note: 'جوان–سبتمبر', from: 7, to: 11 },
    ], caption: 'الشكل 5 · الشهر 0 = نوفمبر 2026. افتح في أفريل لا في جويلية: أدلة السفر تشير إلى أن وكالات المطار غالباً ما تكون ممتلئة منذ جوان.', alt: 'جدول بالأشهر من نوفمبر 2026: التأطير وملف التاجر 0 إلى 1، أداة الوكالة 1 إلى 3، الحجز الإلكتروني 2 إلى 5، التجربة 3 إلى 5، فتح حجوزات الصيف 5 إلى 7، الموسم العالي 7 إلى 11.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      journey: { svg: steps({ title: t.journey.title, steps: t.journey.items, arrows: true, rtl }), caption: t.journey.caption, alt: t.journey.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      utilisation: { svg: stats({ title: t.utilisation.title, items: t.utilisation.items, rtl }), caption: t.utilisation.caption, alt: t.utilisation.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
      season: { svg: timeline({ title: t.season.title, items: t.season.items, total: 12, tick: 1, unit: t.season.unit, rtl }), caption: t.season.caption, alt: t.season.alt },
    },
  };
}
