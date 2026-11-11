import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet';
const T = {
  fr: {
    cover: { eyebrow: 'Tourisme · Sahara · 2027', title: ['Vendre ses circuits', 'sahariens en ligne', 'en 2027.'], subtitle: 'Départs datés, acompte en euros, dossier de visa préparé, guide qui travaille sans réseau.', left: { label: 'Le voyageur', sub: 'à Lyon, Berlin ou Montréal' }, right: { label: 'L’agence', sub: 'Djanet, Tamanrasset, Timimoun, Taghit' }, note: 'Europe · Sahara · 2027' },
    journey: { title: 'Un circuit vendu à distance, en six moments', items: [
      { n: '01', label: 'Le départ', sub: 'Dates fixes, places, prix tout compris écrit.' },
      { n: '02', label: 'La réservation', sub: 'Acompte en ligne, place bloquée, reçu.' },
      { n: '03', label: 'Le dossier', sub: 'Passeport, assurance, visa à l’arrivée préparé.' },
      { n: '04', label: 'Le vol et l’accueil', sub: 'Vol suivi, transfert, liste du groupe prête.' },
      { n: '05', label: 'Le désert', sub: 'Guide hors ligne : liste, itinéraire, urgence.' },
      { n: '06', label: 'Le retour', sub: 'Solde, avis, photos, prochain départ proposé.', accent: true },
    ], caption: 'Figure 1 · La plupart des agences commencent au moment 04 : le voyageur est déjà là. Les voyageurs étrangers, eux, décident aux moments 01 à 03, depuis leur canapé, des semaines avant. Sans dates, sans prix écrit et sans dossier clair, ils réservent ailleurs.', alt: 'Six moments : le départ avec dates fixes, places et prix écrit ; la réservation avec acompte en ligne ; le dossier avec passeport, assurance et visa à l’arrivée préparé ; le vol suivi et l’accueil ; le désert avec un guide qui travaille sans réseau ; le retour avec solde, avis et prochain départ proposé.' },
    stack: { title: 'Ce qu’il faut construire : le calendrier des départs d’abord', layers: [
      { label: 'Voyageur', items: [
        { name: 'Site des départs', sub: 'français, anglais, arabe ; prix, dates, places' },
        { name: 'Espace voyageur', sub: 'dossier, liste d’équipement, paiements' },
      ] },
      { label: 'L’agence', items: [
        { name: 'Calendrier des départs', sub: 'places restantes, départ garanti, liste d’attente', accent: true },
        { name: 'Dossiers et visas', sub: 'passeports, assurances, listes pour l’arrivée' },
        { name: 'Paiements', sub: 'acompte, solde, euros et dinars, remboursements' },
      ] },
      { label: 'Le terrain', items: [
        { name: 'Application du guide', sub: 'groupe, itinéraire, contacts, sans réseau' },
        { name: 'Logistique', sub: '4x4, chauffeurs, cuisiniers, matériel, bivouacs' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur et données à votre nom', sub: 'passeports et données des voyageurs protégés ; loi 18-07 sur les données personnelles' }] },
    ], caption: 'Figure 2 · Le calendrier des départs est ce qui transforme une page Facebook en agence que l’on peut réserver depuis l’étranger : une date, un nombre de places, un seuil de départ garanti. Tout le reste, dossiers, paiements, logistique, s’accroche à ces départs.', alt: 'Quatre couches : le voyageur avec le site des départs et l’espace voyageur ; l’agence avec le calendrier des départs, les dossiers et visas, et les paiements ; le terrain avec l’application du guide sans réseau et la logistique ; le socle, serveur et données au nom de l’agence.' },
    saison: { title: 'Une saison, vingt départs : ce que vaut un calendrier en ligne', items: [
      { value: '240', label: 'places sur la saison : 20 départs de 12 (hypothèse)' },
      { value: '132', label: 'voyageurs à 55 % de remplissage, sur messagerie' },
      { value: '180', label: 'voyageurs à 75 % : dates, acompte, dossier en ligne' },
      { value: '48 000 €', label: 'de plus : 48 voyageurs à 1 000 € le circuit (hypothèse)', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : 20 départs de 12 places, 55 % puis 75 % de remplissage, 1 000 € par voyageur. Refaites-le avec votre dernière saison : combien de demandes reçues, combien de réservations, combien de places vides au départ.', alt: 'Exemple de calcul : 240 places sur une saison de 20 départs de 12 ; 132 voyageurs à 55 % de remplissage quand tout passe par messagerie ; 180 à 75 % avec des dates, un acompte et un dossier en ligne ; 48 voyageurs de plus à 1 000 € font 48 000 €. Les taux et le prix sont des hypothèses.' },
    freins: { title: 'Six raisons de ne pas réserver, six réponses', columns: ['Ce que le voyageur se dit', 'La réponse de l’agence'], rows: [
      { label: 'Pas de dates', cells: ['« Je ne sais pas quand partir »', 'Départs datés, places restantes'] },
      { label: 'Prix flou', cells: ['« Combien au total, vol compris ? »', 'Prix tout compris écrit, ce qui est exclu'] },
      { label: 'Visa incompris', cells: ['« Comment entrer, avec quoi ? »', 'Dossier guidé, préparé par l’agence'] },
      { label: 'Paiement impossible', cells: ['« Je ne peux pas virer en dinars »', 'Acompte en ligne en euros, reçu'] },
      { label: 'Sécurité, assurance', cells: ['« Et s’il arrive quelque chose ? »', 'Assurance, itinéraire, contact d’urgence'] },
      { label: 'Réponse lente', cells: ['Trois jours pour un devis par message', 'Réponse sous 24 h, en trois langues'] },
    ], caption: 'Figure 4 · Aucune de ces réponses ne demande un gros budget publicitaire ; elles demandent de l’ordre. Un voyageur qui trouve une date, un prix, un dossier et un moyen de payer réserve souvent dans la semaine ; celui qui doit tout demander par message part ailleurs.', alt: 'Matrice de six freins : pas de dates, prix flou, visa incompris, paiement impossible, sécurité et assurance, réponse lente ; pour chacun, ce que le voyageur se dit et la réponse de l’agence.' },
    calendrier: { title: 'De novembre 2026 à la saison 2027-2028, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, circuits, prix', note: 'catalogue, seuils de départ', from: 0, to: 3 },
      { label: 'Site des départs, acompte', note: 'trois langues, paiement en euros', from: 2, to: 8 },
      { label: 'Dossiers voyageurs', note: 'passeports, assurances, listes', from: 5, to: 11 },
      { label: 'Pilote : fin de saison', note: 'départs de février à avril', from: 12, to: 24 },
      { label: 'Application du guide', note: 'hors ligne, testée sur le terrain', from: 18, to: 28 },
      { label: 'Ventes de la saison suivante', note: 'printemps et été, départs d’octobre', from: 28, to: 48, accent: true },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. La saison saharienne court d’octobre à avril : on ne vend pas un circuit d’octobre en septembre. Les voyageurs étrangers réservent des mois à l’avance ; les départs de la saison 2027-2028 doivent être en ligne dès le printemps.', alt: 'Calendrier en semaines : cadrage des circuits et des prix de 0 à 3 ; site des départs et acompte de 2 à 8 ; dossiers voyageurs de 5 à 11 ; pilote sur la fin de saison de 12 à 24 ; application du guide de 18 à 28 ; ventes de la saison suivante de 28 à 48.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Une agence, ses départs en ligne', cells: ['Clients étrangers en direct', 'Dates non tenues, avis négatifs'] },
      { label: 'Plateforme d’agences du Sud', cells: ['Commission par réservation', 'Qualité inégale des agences'] },
      { label: 'Voyagiste étranger et agence locale', cells: ['Groupes réguliers, outil partagé', 'Dépendance à un seul partenaire'] },
      { label: 'Circuits pour la diaspora', cells: ['Fêtes de fin d’année, familles', 'Prix attendus en dinars et en euros'] },
      { label: 'Séjours d’entreprise', cells: ['Groupes, factures, dates sûres', 'Logistique lourde, exigences fortes'] },
      { label: 'Campements, maisons d’hôtes', cells: ['Nuits réservées à l’avance', 'Capacité limitée, annulations'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur le même socle : des départs datés, un prix écrit, un dossier préparé, un paiement possible depuis l’étranger. Nous conseillons de commencer avec une agence qui fait déjà ses saisons, puis d’ouvrir l’outil à ses partenaires.', alt: 'Matrice de six modèles : une agence avec ses départs en ligne, une plateforme d’agences du Sud, un voyagiste étranger avec une agence locale, des circuits pour la diaspora, des séjours d’entreprise, des campements et maisons d’hôtes ; pour chacun, ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Tourism · Sahara · 2027', title: ['Selling Saharan', 'tours online', 'in 2027.'], subtitle: 'Dated departures, deposit in euros, visa file prepared, a guide who works with no network.', left: { label: 'The traveller', sub: 'in Lyon, Berlin or Montreal' }, right: { label: 'The agency', sub: 'Djanet, Tamanrasset, Timimoun, Taghit' }, note: 'Europe · Sahara · 2027' },
    journey: { title: 'A tour sold at a distance, in six moments', items: [
      { n: '01', label: 'Departure', sub: 'Fixed dates, places, all-inclusive price in writing.' },
      { n: '02', label: 'Booking', sub: 'Online deposit, place held, receipt.' },
      { n: '03', label: 'The file', sub: 'Passport, insurance, visa on arrival prepared.' },
      { n: '04', label: 'Flight and welcome', sub: 'Flight tracked, transfer, group list ready.' },
      { n: '05', label: 'The desert', sub: 'Offline guide: list, route, emergency.' },
      { n: '06', label: 'The return', sub: 'Balance, reviews, photos, next departure offered.', accent: true },
    ], caption: 'Figure 1 · Most agencies start at moment 04: the traveller is already there. Foreign travellers decide at moments 01 to 03, from their sofa, weeks earlier. With no dates, no written price and no clear file, they book elsewhere.', alt: 'Six moments: departure with fixed dates, places and a written price; booking with an online deposit; the file with passport, insurance and visa on arrival prepared; tracked flight and welcome; the desert with a guide who works offline; the return with balance, reviews and the next departure offered.' },
    stack: { title: 'What to build: the departure calendar first', layers: [
      { label: 'Traveller', items: [
        { name: 'Departures website', sub: 'French, English, Arabic; prices, dates, places' },
        { name: 'Traveller space', sub: 'file, kit list, payments' },
      ] },
      { label: 'The agency', items: [
        { name: 'Departure calendar', sub: 'places left, guaranteed departure, waiting list', accent: true },
        { name: 'Files and visas', sub: 'passports, insurance, arrival lists' },
        { name: 'Payments', sub: 'deposit, balance, euros and dinars, refunds' },
      ] },
      { label: 'In the field', items: [
        { name: 'Guide app', sub: 'group, route, contacts, offline' },
        { name: 'Logistics', sub: '4x4s, drivers, cooks, equipment, camps' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server and data in your name', sub: 'travellers’ passports and data protected; law 18-07 on personal data' }] },
    ], caption: 'Figure 2 · The departure calendar is what turns a Facebook page into an agency that can be booked from abroad: a date, a number of places, a guaranteed-departure threshold. Everything else, files, payments, logistics, hangs off those departures.', alt: 'Four layers: the traveller with the departures website and traveller space; the agency with the departure calendar, files and visas, and payments; the field with the offline guide app and logistics; the foundation, server and data in the agency’s name.' },
    saison: { title: 'One season, twenty departures: what an online calendar is worth', items: [
      { value: '240', label: 'places in the season: 20 departures of 12 (assumption)' },
      { value: '132', label: 'travellers at 55% load, via messaging' },
      { value: '180', label: 'travellers at 75%: dates, deposit, online file' },
      { value: '€48,000', label: 'more: 48 travellers at €1,000 a tour (assumption)', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: 20 departures of 12 places, 55% then 75% load, €1,000 per traveller. Run it with your last season: how many enquiries, how many bookings, how many empty places at departure.', alt: 'Worked example: 240 places in a season of 20 departures of 12; 132 travellers at 55% load when everything goes through messaging; 180 at 75% with dates, a deposit and an online file; 48 more travellers at €1,000 make €48,000. The rates and price are assumptions.' },
    freins: { title: 'Six reasons not to book, six answers', columns: ['What the traveller thinks', 'The agency’s answer'], rows: [
      { label: 'No dates', cells: ['“I don’t know when to go”', 'Dated departures, places left'] },
      { label: 'Vague price', cells: ['“How much in total, with the flight?”', 'All-inclusive price in writing, exclusions'] },
      { label: 'Visa unclear', cells: ['“How do I get in, with what?”', 'Guided file, prepared by the agency'] },
      { label: 'Cannot pay', cells: ['“I can’t transfer dinars”', 'Online deposit in euros, receipt'] },
      { label: 'Safety, insurance', cells: ['“What if something happens?”', 'Insurance, route, emergency contact'] },
      { label: 'Slow reply', cells: ['Three days for a quote by message', 'Reply within 24 h, in three languages'] },
    ], caption: 'Figure 4 · None of these answers needs a big advertising budget; they need order. A traveller who finds a date, a price, a file and a way to pay often books within the week; one who has to ask for everything by message goes elsewhere.', alt: 'Matrix of six obstacles: no dates, vague price, visa unclear, cannot pay, safety and insurance, slow reply; for each, what the traveller thinks and the agency’s answer.' },
    calendrier: { title: 'From November 2026 to the 2027-2028 season, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, tours, prices', note: 'catalogue, departure thresholds', from: 0, to: 3 },
      { label: 'Departures site, deposit', note: 'three languages, payment in euros', from: 2, to: 8 },
      { label: 'Traveller files', note: 'passports, insurance, lists', from: 5, to: 11 },
      { label: 'Pilot: end of season', note: 'departures from February to April', from: 12, to: 24 },
      { label: 'Guide app', note: 'offline, tested in the field', from: 18, to: 28 },
      { label: 'Next season’s sales', note: 'spring and summer, October departures', from: 28, to: 48, accent: true },
    ], caption: 'Figure 5 · Week 0 = early November 2026. The Saharan season runs from October to April: you do not sell an October tour in September. Foreign travellers book months ahead; departures for the 2027-2028 season must be online by spring.', alt: 'Calendar in weeks: scoping tours and prices from 0 to 3; departures site and deposit from 2 to 8; traveller files from 5 to 11; pilot at the end of the season from 12 to 24; guide app from 18 to 28; next season’s sales from 28 to 48.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One agency, its departures online', cells: ['Foreign clients direct', 'Dates not kept, bad reviews'] },
      { label: 'Platform for Southern agencies', cells: ['Commission per booking', 'Uneven quality across agencies'] },
      { label: 'Foreign operator and local agency', cells: ['Regular groups, shared tool', 'Dependence on one partner'] },
      { label: 'Tours for the diaspora', cells: ['Year-end holidays, families', 'Prices expected in dinars and euros'] },
      { label: 'Company trips', cells: ['Groups, invoices, firm dates', 'Heavy logistics, high demands'] },
      { label: 'Camps, guesthouses', cells: ['Nights booked in advance', 'Limited capacity, cancellations'] },
    ], caption: 'Figure 6 · All six models rest on the same base: dated departures, a written price, a prepared file, payment possible from abroad. We advise starting with an agency that already runs its seasons, then opening the tool to its partners.', alt: 'Matrix of six models: one agency with its departures online, a platform for Southern agencies, a foreign operator with a local agency, tours for the diaspora, company trips, camps and guesthouses; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'السياحة · الصحراء · 2027', title: ['بيع الرحلات', 'الصحراوية عبر الإنترنت', 'سنة 2027.'], subtitle: 'انطلاقات مؤرَّخة، عربون باليورو، ملف تأشيرة محضَّر، ودليل يعمل دون شبكة.', left: { label: 'المسافر', sub: 'في ليون أو برلين أو مونتريال' }, right: { label: 'الوكالة', sub: 'جانت، تمنراست، تيميمون، تاغيت' }, note: 'أوروبا · الصحراء · 2027' },
    journey: { title: 'رحلة تُباع عن بُعد، في ست لحظات', items: [
      { n: '01', label: 'الانطلاق', sub: 'تواريخ ثابتة، مقاعد، سعر شامل مكتوب.' },
      { n: '02', label: 'الحجز', sub: 'عربون عبر الإنترنت، مقعد محجوز، وصل.' },
      { n: '03', label: 'الملف', sub: 'جواز السفر، التأمين، تأشيرة الوصول محضَّرة.' },
      { n: '04', label: 'الرحلة والاستقبال', sub: 'رحلة جوية متتبَّعة، نقل، قائمة الفوج جاهزة.' },
      { n: '05', label: 'الصحراء', sub: 'دليل دون شبكة: القائمة، المسار، الطوارئ.' },
      { n: '06', label: 'العودة', sub: 'الباقي، الآراء، الصور، الانطلاق القادم.', accent: true },
    ], caption: 'الشكل 1 · أغلب الوكالات تبدأ عند اللحظة 04: المسافر وصل أصلاً. أما المسافرون الأجانب فيقرّرون عند اللحظات 01 إلى 03، من بيوتهم، قبل أسابيع. دون تواريخ ولا سعر مكتوب ولا ملف واضح يحجزون في مكان آخر.', alt: 'ست لحظات: الانطلاق بتواريخ ثابتة ومقاعد وسعر مكتوب؛ الحجز بعربون عبر الإنترنت؛ الملف بجواز السفر والتأمين وتأشيرة الوصول المحضَّرة؛ الرحلة الجوية المتتبَّعة والاستقبال؛ الصحراء مع دليل يعمل دون شبكة؛ العودة بالباقي والآراء والانطلاق القادم.' },
    stack: { title: 'ما يجب بناؤه: رزنامة الانطلاقات أولاً', layers: [
      { label: 'المسافر', items: [
        { name: 'موقع الانطلاقات', sub: 'فرنسية، إنجليزية، عربية؛ أسعار، تواريخ، مقاعد' },
        { name: 'فضاء المسافر', sub: 'الملف، قائمة التجهيزات، المدفوعات' },
      ] },
      { label: 'الوكالة', items: [
        { name: 'رزنامة الانطلاقات', sub: 'المقاعد المتبقية، انطلاق مضمون، قائمة انتظار', accent: true },
        { name: 'الملفات والتأشيرات', sub: 'جوازات، تأمينات، قوائم الوصول' },
        { name: 'المدفوعات', sub: 'عربون، باقي، يورو ودينار، استرجاع' },
      ] },
      { label: 'الميدان', items: [
        { name: 'تطبيق الدليل', sub: 'الفوج، المسار، جهات الاتصال، دون شبكة' },
        { name: 'اللوجستيك', sub: 'سيارات رباعية الدفع، سائقون، طبّاخون، عتاد، مخيمات' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم وبيانات باسمك', sub: 'جوازات المسافرين وبياناتهم محمية؛ القانون 18-07 للمعطيات الشخصية' }] },
    ], caption: 'الشكل 2 · رزنامة الانطلاقات هي ما يحوّل صفحة فيسبوك إلى وكالة يمكن الحجز فيها من الخارج: تاريخ، وعدد مقاعد، وعتبة انطلاق مضمون. وكل الباقي، الملفات والمدفوعات واللوجستيك، يتعلّق بهذه الانطلاقات.', alt: 'أربع طبقات: المسافر بموقع الانطلاقات وفضاء المسافر؛ الوكالة برزنامة الانطلاقات والملفات والتأشيرات والمدفوعات؛ الميدان بتطبيق الدليل دون شبكة واللوجستيك؛ القاعدة، خادم وبيانات باسم الوكالة.' },
    saison: { title: 'موسم واحد، عشرون انطلاقاً: كم تساوي رزنامة على الإنترنت', items: [
      { value: '240', label: 'مقعداً في الموسم: 20 انطلاقاً من 12 (فرضية)' },
      { value: '132', label: 'مسافراً بنسبة ملء 55 %، عبر المراسلة' },
      { value: '180', label: 'مسافراً بنسبة 75 %: تواريخ، عربون، ملف عبر الإنترنت' },
      { value: '48000', label: 'يورو إضافية: 48 مسافراً بـ1000 يورو للرحلة (فرضية)', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس: 20 انطلاقاً من 12 مقعداً، و55 % ثم 75 % نسبة ملء، و1000 يورو للمسافر. أعده بموسمك الأخير: كم طلباً تلقّيت، وكم حجزاً، وكم مقعداً بقي فارغاً عند الانطلاق.', alt: 'مثال حساب: 240 مقعداً في موسم من 20 انطلاقاً من 12؛ 132 مسافراً بنسبة 55 % حين يمرّ كل شيء عبر المراسلة؛ 180 بنسبة 75 % مع تواريخ وعربون وملف عبر الإنترنت؛ 48 مسافراً إضافياً بـ1000 يورو تساوي 48000 يورو. النسب والسعر فرضيات.' },
    freins: { title: 'ستة أسباب لعدم الحجز، وستة أجوبة', columns: ['ما يقوله المسافر لنفسه', 'جواب الوكالة'], rows: [
      { label: 'لا تواريخ', cells: ['«لا أعرف متى أسافر»', 'انطلاقات مؤرَّخة، مقاعد متبقية'] },
      { label: 'سعر غامض', cells: ['«كم المجموع، مع الطائرة؟»', 'سعر شامل مكتوب، وما ليس مشمولاً'] },
      { label: 'تأشيرة غير مفهومة', cells: ['«كيف أدخل، وبماذا؟»', 'ملف موجَّه تحضّره الوكالة'] },
      { label: 'دفع مستحيل', cells: ['«لا أستطيع التحويل بالدينار»', 'عربون عبر الإنترنت باليورو، وصل'] },
      { label: 'الأمان، التأمين', cells: ['«وإن حدث شيء؟»', 'تأمين، مسار، رقم طوارئ'] },
      { label: 'رد بطيء', cells: ['ثلاثة أيام لتقدير عبر الرسائل', 'رد خلال 24 ساعة، بثلاث لغات'] },
    ], caption: 'الشكل 4 · لا يحتاج أي من هذه الأجوبة ميزانية إشهار كبيرة؛ يحتاج تنظيماً. المسافر الذي يجد تاريخاً وسعراً وملفاً وطريقة للدفع كثيراً ما يحجز خلال الأسبوع؛ ومن يضطر لطلب كل شيء بالرسائل يذهب إلى مكان آخر.', alt: 'مصفوفة ستة عوائق: لا تواريخ، سعر غامض، تأشيرة غير مفهومة، دفع مستحيل، الأمان والتأمين، رد بطيء؛ ولكل منها ما يقوله المسافر وجواب الوكالة.' },
    calendrier: { title: 'من نوفمبر 2026 إلى موسم 2027-2028، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير، الرحلات، الأسعار', note: 'الكتالوج، عتبات الانطلاق', from: 0, to: 3 },
      { label: 'موقع الانطلاقات، العربون', note: 'ثلاث لغات، دفع باليورو', from: 2, to: 8 },
      { label: 'ملفات المسافرين', note: 'جوازات، تأمينات، قوائم', from: 5, to: 11 },
      { label: 'تجربة: نهاية الموسم', note: 'انطلاقات من فيفري إلى أفريل', from: 12, to: 24 },
      { label: 'تطبيق الدليل', note: 'دون شبكة، مجرَّب في الميدان', from: 18, to: 28 },
      { label: 'مبيعات الموسم التالي', note: 'الربيع والصيف، انطلاقات أكتوبر', from: 28, to: 48, accent: true },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. يمتد الموسم الصحراوي من أكتوبر إلى أفريل: لا تُباع رحلة أكتوبر في سبتمبر. المسافرون الأجانب يحجزون قبل أشهر؛ ويجب أن تكون انطلاقات موسم 2027-2028 على الإنترنت منذ الربيع.', alt: 'جدول بالأسابيع: تأطير الرحلات والأسعار من 0 إلى 3؛ موقع الانطلاقات والعربون من 2 إلى 8؛ ملفات المسافرين من 5 إلى 11؛ تجربة نهاية الموسم من 12 إلى 24؛ تطبيق الدليل من 18 إلى 28؛ مبيعات الموسم التالي من 28 إلى 48.' },
    models: { title: 'أي نموذج تبني: ما يُدرّ، وما ينكسر', columns: ['ما يُدرّ', 'ما ينكسر'], rows: [
      { label: 'وكالة وانطلاقاتها على الإنترنت', cells: ['زبائن أجانب مباشرة', 'تواريخ لا تُحترم، آراء سلبية'] },
      { label: 'منصة لوكالات الجنوب', cells: ['عمولة على كل حجز', 'جودة متفاوتة بين الوكالات'] },
      { label: 'منظّم أجنبي ووكالة محلية', cells: ['أفواج منتظمة، أداة مشتركة', 'التبعية لشريك واحد'] },
      { label: 'رحلات للجالية', cells: ['عطل نهاية السنة، عائلات', 'أسعار منتظرة بالدينار واليورو'] },
      { label: 'رحلات المؤسسات', cells: ['أفواج، فواتير، تواريخ أكيدة', 'لوجستيك ثقيل، متطلبات عالية'] },
      { label: 'مخيمات وبيوت ضيافة', cells: ['ليالٍ محجوزة مسبقاً', 'سعة محدودة، إلغاءات'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القاعدة نفسها: انطلاقات مؤرَّخة، وسعر مكتوب، وملف محضَّر، ودفع ممكن من الخارج. ننصح بالبدء بوكالة تُنجز مواسمها أصلاً، ثم فتح الأداة لشركائها.', alt: 'مصفوفة ستة نماذج: وكالة بانطلاقاتها على الإنترنت، منصة لوكالات الجنوب، منظّم أجنبي مع وكالة محلية، رحلات للجالية، رحلات المؤسسات، مخيمات وبيوت ضيافة؛ ولكل منها ما يُدرّ وما ينكسر.' },
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
      saison: { svg: stats({ title: t.saison.title, items: t.saison.items, rtl }), caption: t.saison.caption, alt: t.saison.alt },
      freins: { svg: matrix({ title: t.freins.title, columns: t.freins.columns, rows: t.freins.rows, rtl }), caption: t.freins.caption, alt: t.freins.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 48, tick: 4, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
