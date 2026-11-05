import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';

export const slug = 'creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement';

const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France #11', title: ['Créer une billetterie', 'en ligne en Algérie', 'en 2027.'], subtitle: 'Billet signé, porte hors ligne, dinars et euros, reversement à l’organisateur : quoi construire d’abord.', left: { label: 'Le billet', sub: 'acheté depuis Oran ou depuis Paris' }, right: { label: 'La porte', sub: 'salles, stades, festivals, galas' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Une billetterie qui tient, en six moments', items: [
      { n: '01', label: 'L’événement', sub: 'Catégories, prix, quotas, jauge par porte et par tribune.' },
      { n: '02', label: 'La vente', sub: 'CIB, Edahabia, carte en euros ; plafond de billets par acheteur.' },
      { n: '03', label: 'Le billet', sub: 'Nominatif, QR signé, reçu par SMS : pas de retrait au guichet.' },
      { n: '04', label: 'La vérification', sub: 'Page officielle unique ; chaque billet vérifiable par son numéro.' },
      { n: '05', label: 'La porte', sub: 'Scan sans réseau, une entrée par billet, portes synchronisées.' },
      { n: '06', label: 'Le reversement', sub: 'Ventes rapprochées des entrées, versement, remboursé si annulé.', accent: true },
    ], caption: 'Figure 1 · Les deux moments que l’on néglige le plus sont 04 et 05 : sans page officielle, un faux compte Instagram vend à votre place ; sans scan hors ligne, la porte s’arrête quand des milliers de téléphones saturent le réseau au même endroit.', alt: 'Six moments : l’événement avec catégories, prix, quotas et jauges ; la vente par CIB, Edahabia ou carte en euros avec un plafond par acheteur ; le billet nominatif à QR signé reçu par SMS ; la vérification sur une page officielle ; la porte qui scanne sans réseau ; le reversement à l’organisateur, avec remboursement si l’événement est annulé.' },
    stack: { title: 'Ce qu’il faut construire : la porte et le reversement d’abord', layers: [
      { label: 'Côté public', items: [
        { name: 'Achat en ligne', sub: 'arabe, français ; sans compte ; CIB, Edahabia, euros' },
        { name: 'Mes billets', sub: 'QR nominatif, transfert à un proche, une seule fois' },
      ] },
      { label: 'Plateforme', items: [
        { name: 'Événements et jauges', sub: 'catégories, quotas, tribunes, plans de salle' },
        { name: 'Billet signé', sub: 'clé de l’organisateur, numéro unique, vérifiable' },
        { name: 'Reversement', sub: 'ventes, frais, remboursements, versement daté' },
      ] },
      { label: 'Organisateur et porte', items: [
        { name: 'Application de porte', sub: 'scan hors ligne, synchronisation entre portes dès que le réseau revient', accent: true },
        { name: 'Tableau organisateur', sub: 'ventes par catégorie, entrées en direct' },
        { name: 'Points de vente', sub: 'revendeurs agréés, espèces tracées' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur à votre nom, montée en charge', sub: 'tient le pic de l’ouverture des ventes ; une file d’attente en ligne plutôt qu’une panne' }] },
    ], caption: 'Figure 2 · Deux pics font tomber une billetterie : l’ouverture des ventes, quand des dizaines de milliers de personnes arrivent à la même minute, et l’heure avant le début, quand la porte dépend du réseau. Le socle doit tenir le premier ; l’application de porte doit ignorer le second.', alt: 'Quatre couches : côté public l’achat en ligne et les billets ; la plateforme avec les événements et jauges, le billet signé et le reversement ; côté organisateur l’application de porte hors ligne, le tableau de bord et les points de vente ; un socle avec serveur à votre nom qui tient le pic des ventes.' },
    porte: { title: 'Huit mille spectateurs : combien de files à la porte', items: [
      { value: '4 800', label: 'entrées dans les 45 dernières minutes : 60 % de 8 000' },
      { value: '107', label: 'entrées par minute à faire passer au pic' },
      { value: '18', label: 'files si chaque scan attend le réseau : 6 par minute' },
      { value: '11', label: 'files si le téléphone vérifie seul : 10 par minute', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : 60 % des arrivées dans les 45 dernières minutes, 6 puis 10 entrées par minute et par file. Refaites-le avec votre salle. Sept files d’écart, ce sont sept agents et sept appareils de plus, ou une demi-heure de bousculade devant les grilles.', alt: 'Exemple de calcul pour 8 000 spectateurs : 4 800 entrées dans les 45 dernières minutes ; 107 entrées par minute au pic ; 18 files si chaque scan attend le réseau à 6 entrées par minute ; 11 files si le téléphone vérifie seul le billet à 10 entrées par minute.' },
    fraude: { title: 'Six fraudes, six parades', columns: ['Comment ça se passe', 'La parade dans le système'], rows: [
      { label: 'Capture d’écran partagée', cells: ['Le même QR envoyé à dix amis', 'Premier scan accepté, les suivants refusés'] },
      { label: 'Faux billet imprimé', cells: ['QR inventé ou recopié d’un vrai', 'Signature vérifiée hors ligne : il ne passe pas'] },
      { label: 'Faux compte, faux site', cells: ['Un concert inexistant vendu sur Instagram', 'Page officielle unique, billet vérifiable'] },
      { label: 'Revente au double', cells: ['Achats en masse à l’ouverture, revente', 'Plafond par acheteur, revente officielle au prix'] },
      { label: 'Complicité à la porte', cells: ['Un agent fait entrer sans billet', 'Chaque entrée liée à un agent et à une porte'] },
      { label: 'Paiement en euros contesté', cells: ['Carte débitée, puis contestation', 'Billet annulé dès la contestation'] },
    ], caption: 'Figure 4 · Aucune parade n’est gratuite : un billet nominatif ralentit la porte si l’on contrôle chaque pièce d’identité. Le réglage dépend de l’événement : contrôle d’identité pour un grand match, simple scan pour une salle de 600 places.', alt: 'Matrice de six fraudes : capture d’écran partagée, faux billet imprimé, faux compte ou faux site, revente au double, complicité à la porte, paiement en euros contesté ; pour chacune comment elle se passe et la parade dans le système.' },
    saison: { title: 'De novembre 2026 à l’été 2027, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, dossier web-marchand', note: 'jauges, catégories, contrat avec la banque', from: 0, to: 4 },
      { label: 'Vente et billet signé', note: 'CIB, Edahabia, euros ; page officielle', from: 3, to: 10 },
      { label: 'Application de porte hors ligne', note: 'essai réseau coupé, 500 entrées', from: 6, to: 12 },
      { label: 'Pilote : soirées du Ramadan', note: 'une salle, quelques soirées, vraies mesures', from: 14, to: 18 },
      { label: 'Reversement, revente, rapports', note: 'corriger ce que le pilote a montré', from: 18, to: 28 },
      { label: 'Saison d’été, diaspora', note: 'festivals, galas ; achats depuis la France', from: 34, to: 44, accent: true },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. Le Ramadan 2027 devrait commencer vers le 8 février, date confirmée par l’observation du croissant : ses soirées font un bon pilote, dans des salles plus petites, avant les festivals et les galas de l’été, quand la diaspora achète depuis la France.', alt: 'Calendrier en semaines : cadrage et dossier web-marchand de 0 à 4, vente et billet signé de 3 à 10, application de porte hors ligne de 6 à 12, pilote pendant les soirées du Ramadan de 14 à 18, reversement, revente et rapports de 18 à 28, saison d’été et achats de la diaspora de 34 à 44.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Organisateur ou salle, sa billetterie', cells: ['Aucune commission, fichier clients à soi', 'Une petite jauge ne paie pas le développement'] },
      { label: 'Marque blanche : club, festival', cells: ['Contrat annuel, frais par billet', 'Le pic du jour d’ouverture des ventes'] },
      { label: 'Place de marché (type Shotgun)', cells: ['Frais de service sur chaque billet', 'Il faut les organisateurs avant le public'] },
      { label: 'Logiciel par abonnement pour salles', cells: ['Abonnement mensuel, porte incluse', 'Former les agents de porte, salle par salle'] },
      { label: 'Salons, congrès : inscriptions, badges', cells: ['Contrats d’entreprise, paiement par virement', 'Facturation, listes nominatives à jour'] },
      { label: 'Paiement sans espèces sur place', cells: ['Commission sur boissons et restauration', 'Recharges, remboursement des soldes'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur le même socle : un billet signé, une porte hors ligne, un reversement juste. Nous conseillons de commencer avec un organisateur ou une salle qui remplit déjà, puis d’ouvrir l’outil à d’autres ; la place de marché vient quand les organisateurs sont là.', alt: 'Matrice de six modèles : organisateur ou salle avec sa billetterie, marque blanche pour un club ou un festival, place de marché, logiciel par abonnement pour salles, inscriptions et badges pour salons et congrès, paiement sans espèces sur place ; pour chacun ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France #11', title: ['Building an online', 'ticketing platform', 'in Algeria in 2027.'], subtitle: 'Signed ticket, offline gate, dinars and euros, payout to the organiser: what to build first.', left: { label: 'The ticket', sub: 'bought from Oran or from Paris' }, right: { label: 'The gate', sub: 'venues, stadiums, festivals, galas' }, note: 'France · Algeria · 2027' },
    journey: { title: 'A ticketing platform that holds, in six moments', items: [
      { n: '01', label: 'The event', sub: 'Categories, prices, quotas, capacity per gate and per stand.' },
      { n: '02', label: 'The sale', sub: 'CIB, Edahabia, euro card; a cap on tickets per buyer.' },
      { n: '03', label: 'The ticket', sub: 'Named, signed QR, sent by SMS: no box-office pickup.' },
      { n: '04', label: 'Verification', sub: 'One official page; every ticket checkable by its number.' },
      { n: '05', label: 'The gate', sub: 'Scans with no network, one entry per ticket, gates in sync.' },
      { n: '06', label: 'The payout', sub: 'Sales matched to entries, payout, refund if cancelled.', accent: true },
    ], caption: 'Figure 1 · The two moments most often neglected are 04 and 05: without an official page, a fake Instagram account sells in your place; without offline scanning, the gate stops when thousands of phones saturate the network in one spot.', alt: 'Six moments: the event with categories, prices, quotas and capacity; the sale by CIB, Edahabia or euro card with a cap per buyer; the named ticket with a signed QR sent by SMS; verification on an official page; the gate scanning with no network; the payout to the organiser, with refunds if the event is cancelled.' },
    stack: { title: 'What to build: the gate and the payout first', layers: [
      { label: 'Public side', items: [
        { name: 'Online purchase', sub: 'Arabic, French; no account; CIB, Edahabia, euros' },
        { name: 'My tickets', sub: 'named QR, transfer to a relative, once only' },
      ] },
      { label: 'Platform', items: [
        { name: 'Events and capacity', sub: 'categories, quotas, stands, seating plans' },
        { name: 'Signed ticket', sub: 'organiser’s key, unique number, checkable' },
        { name: 'Payout', sub: 'sales, fees, refunds, dated payment' },
      ] },
      { label: 'Organiser and gate', items: [
        { name: 'Gate app', sub: 'offline scanning, gates sync as soon as the network returns', accent: true },
        { name: 'Organiser dashboard', sub: 'sales by category, live entries' },
        { name: 'Points of sale', sub: 'approved resellers, cash traced' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server in your name, load capacity', sub: 'holds the peak when sales open; an online queue rather than an outage' }] },
    ], caption: 'Figure 2 · Two peaks bring a ticketing platform down: the opening of sales, when tens of thousands of people arrive in the same minute, and the hour before the start, when the gate depends on the network. The foundation must hold the first; the gate app must ignore the second.', alt: 'Four layers: public side online purchase and tickets; the platform with events and capacity, the signed ticket and the payout; organiser side the offline gate app, the dashboard and points of sale; a foundation with a server in your name that holds the sales peak.' },
    porte: { title: 'Eight thousand people: how many lanes at the gate', items: [
      { value: '4,800', label: 'entries in the last 45 minutes: 60% of 8,000' },
      { value: '107', label: 'entries per minute to get through at the peak' },
      { value: '18', label: 'lanes if every scan waits for the network: 6 a minute' },
      { value: '11', label: 'lanes if the phone checks on its own: 10 a minute', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: 60% of arrivals in the last 45 minutes, 6 then 10 entries per minute per lane. Run it for your venue. Seven lanes apart means seven more staff and seven more devices, or half an hour of crushing at the gates.', alt: 'Worked example for 8,000 spectators: 4,800 entries in the last 45 minutes; 107 entries per minute at the peak; 18 lanes if each scan waits for the network at 6 entries per minute; 11 lanes if the phone checks the ticket on its own at 10 entries per minute.' },
    fraude: { title: 'Six frauds, six counters', columns: ['How it happens', 'The counter in the system'], rows: [
      { label: 'Shared screenshot', cells: ['The same QR sent to ten friends', 'First scan accepted, the rest refused'] },
      { label: 'Fake printed ticket', cells: ['QR made up or copied from a real one', 'Signature checked offline: it fails'] },
      { label: 'Fake account, fake site', cells: ['A concert that does not exist, sold on Instagram', 'One official page, every ticket checkable'] },
      { label: 'Resale at double the price', cells: ['Bulk buying when sales open, resale', 'Cap per buyer, official resale at face value'] },
      { label: 'Inside help at the gate', cells: ['A steward lets people in without a ticket', 'Every entry tied to a steward and a gate'] },
      { label: 'Disputed euro payment', cells: ['Card charged, then a chargeback', 'Ticket cancelled as soon as it is disputed'] },
    ], caption: 'Figure 4 · No counter comes free: a named ticket slows the gate if every ID is checked. The setting depends on the event: ID checks for a big match, a plain scan for a 600-seat hall.', alt: 'Matrix of six frauds: shared screenshot, fake printed ticket, fake account or site, resale at double the price, inside help at the gate, disputed euro payment; for each, how it happens and the counter in the system.' },
    saison: { title: 'From November 2026 to summer 2027, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, web-merchant file', note: 'capacity, categories, bank contract', from: 0, to: 4 },
      { label: 'Sales and signed ticket', note: 'CIB, Edahabia, euros; official page', from: 3, to: 10 },
      { label: 'Offline gate app', note: 'test with the network off, 500 entries', from: 6, to: 12 },
      { label: 'Pilot: Ramadan evenings', note: 'one venue, a few nights, real figures', from: 14, to: 18 },
      { label: 'Payout, resale, reports', note: 'fix what the pilot showed', from: 18, to: 28 },
      { label: 'Summer season, diaspora', note: 'festivals, galas; bought from France', from: 34, to: 44, accent: true },
    ], caption: 'Figure 5 · Week 0 = early November 2026. Ramadan 2027 should begin around 8 February, a date confirmed by the sighting of the crescent: its evenings make a good pilot, in smaller venues, before the summer festivals and galas, when the diaspora buys from France.', alt: 'Calendar in weeks: scoping and web-merchant file from 0 to 4, sales and signed ticket from 3 to 10, offline gate app from 6 to 12, pilot during Ramadan evenings from 14 to 18, payout, resale and reports from 18 to 28, summer season and diaspora purchases from 34 to 44.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'An organiser or venue, its own ticketing', cells: ['No commission, its own customer file', 'A small capacity does not pay for the build'] },
      { label: 'White label: club, festival', cells: ['Annual contract, fee per ticket', 'The peak on the day sales open'] },
      { label: 'Marketplace (Shotgun type)', cells: ['Service fee on every ticket', 'You need organisers before the public'] },
      { label: 'Subscription software for venues', cells: ['Monthly subscription, gate included', 'Training gate staff, venue by venue'] },
      { label: 'Trade fairs, congresses: badges', cells: ['Company contracts, payment by transfer', 'Invoicing, named lists kept up to date'] },
      { label: 'Cashless payment on site', cells: ['Commission on drinks and food', 'Top-ups, refunding the balances'] },
    ], caption: 'Figure 6 · All six models stand on the same base: a signed ticket, an offline gate, a fair payout. We advise starting with an organiser or a venue that already fills up, then opening the tool to others; the marketplace comes once the organisers are there.', alt: 'Matrix of six models: organiser or venue with its own ticketing, white label for a club or festival, marketplace, subscription software for venues, registrations and badges for fairs and congresses, cashless payment on site; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا #11', title: ['إنشاء منصة لبيع', 'التذاكر في الجزائر', 'سنة 2027.'], subtitle: 'تذكرة موقَّعة، بوابة تعمل دون شبكة، الدينار واليورو، تحويل المداخيل للمنظِّم: ما يُبنى أولاً.', left: { label: 'التذكرة', sub: 'تُشترى من وهران أو من باريس' }, right: { label: 'البوابة', sub: 'قاعات، ملاعب، مهرجانات، حفلات' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'منصة تذاكر تصمد، في ست لحظات', items: [
      { n: '01', label: 'الحدث', sub: 'الفئات، الأسعار، الحصص، السعة لكل بوابة ومدرج.' },
      { n: '02', label: 'البيع', sub: 'CIB، الذهبية، بطاقة باليورو؛ سقف للتذاكر لكل مشترٍ.' },
      { n: '03', label: 'التذكرة', sub: 'اسمية، رمز QR موقَّع، تصل برسالة: لا سحب من الشباك.' },
      { n: '04', label: 'التحقق', sub: 'صفحة رسمية واحدة؛ كل تذكرة يُتحقق منها برقمها.' },
      { n: '05', label: 'البوابة', sub: 'مسح دون شبكة، دخول واحد لكل تذكرة، بوابات متزامنة.' },
      { n: '06', label: 'تحويل المداخيل', sub: 'مطابقة المبيعات بالدخول، الدفع، الاسترداد عند الإلغاء.', accent: true },
    ], caption: 'الشكل 1 · اللحظتان الأكثر إهمالاً هما 04 و05: دون صفحة رسمية يبيع حساب إنستغرام مزيّف مكانك؛ ودون مسح بلا شبكة تتوقف البوابة حين تُشبع آلاف الهواتف الشبكة في مكان واحد.', alt: 'ست لحظات: الحدث بفئاته وأسعاره وحصصه وسعته؛ البيع بـCIB أو الذهبية أو بطاقة باليورو مع سقف لكل مشترٍ؛ التذكرة الاسمية برمز QR موقَّع تصل برسالة؛ التحقق على صفحة رسمية؛ البوابة التي تمسح دون شبكة؛ تحويل المداخيل للمنظِّم مع الاسترداد عند الإلغاء.' },
    stack: { title: 'ما يجب بناؤه: البوابة وتحويل المداخيل أولاً', layers: [
      { label: 'جهة الجمهور', items: [
        { name: 'الشراء عبر الإنترنت', sub: 'بالعربية والفرنسية؛ دون حساب؛ CIB والذهبية واليورو' },
        { name: 'تذاكري', sub: 'رمز QR اسمي، تحويل لقريب، مرة واحدة' },
      ] },
      { label: 'المنصة', items: [
        { name: 'الأحداث والسعة', sub: 'الفئات، الحصص، المدرجات، مخططات القاعة' },
        { name: 'التذكرة الموقَّعة', sub: 'مفتاح المنظِّم، رقم فريد، قابلة للتحقق' },
        { name: 'تحويل المداخيل', sub: 'المبيعات، الرسوم، الاستردادات، دفع مؤرَّخ' },
      ] },
      { label: 'المنظِّم والبوابة', items: [
        { name: 'تطبيق البوابة', sub: 'مسح دون شبكة، تزامن البوابات فور عودة الشبكة', accent: true },
        { name: 'لوحة المنظِّم', sub: 'المبيعات حسب الفئة، الدخول مباشرة' },
        { name: 'نقاط البيع', sub: 'باعة معتمدون، نقد متتبَّع' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم باسمك وقدرة على التحمّل', sub: 'يصمد أمام ذروة فتح البيع؛ طابور انتظار إلكتروني بدل التعطّل' }] },
    ], caption: 'الشكل 2 · ذروتان تُسقطان منصة التذاكر: فتح البيع، حين يصل عشرات الآلاف في الدقيقة نفسها، والساعة التي تسبق البداية، حين تعتمد البوابة على الشبكة. على القاعدة أن تصمد أمام الأولى، وعلى تطبيق البوابة أن يتجاهل الثانية.', alt: 'أربع طبقات: جهة الجمهور بالشراء والتذاكر؛ المنصة بالأحداث والسعة والتذكرة الموقَّعة وتحويل المداخيل؛ جهة المنظِّم بتطبيق البوابة دون شبكة واللوحة ونقاط البيع؛ قاعدة بخادم باسمك يصمد أمام ذروة البيع.' },
    porte: { title: 'ثمانية آلاف متفرج: كم طابوراً عند البوابة', items: [
      { value: '4800', label: 'دخول في آخر 45 دقيقة: 60 % من 8000' },
      { value: '107', label: 'دخول في الدقيقة يجب تمريرها في الذروة' },
      { value: '18', label: 'طابوراً إذا انتظر كل مسح الشبكة: 6 في الدقيقة' },
      { value: '11', label: 'طابوراً إذا تحقق الهاتف وحده: 10 في الدقيقة', accent: true },
    ], caption: 'الشكل 3 · حساب على فرضيات وليس قياساً: 60 % من الوافدين في آخر 45 دقيقة، و6 ثم 10 دخول في الدقيقة لكل طابور. أعد الحساب لقاعتك. فارق سبعة طوابير يعني سبعة أعوان وسبعة أجهزة إضافية، أو نصف ساعة من التدافع أمام الأبواب.', alt: 'مثال حساب لـ8 000 متفرج: 4 800 دخول في آخر 45 دقيقة؛ 107 دخول في الدقيقة في الذروة؛ 18 طابوراً إذا انتظر كل مسح الشبكة بـ6 دخول في الدقيقة؛ 11 طابوراً إذا تحقق الهاتف وحده من التذكرة بـ10 دخول في الدقيقة.' },
    fraude: { title: 'ستة أنواع من الغش وستة ردود', columns: ['كيف يحدث', 'الرد داخل النظام'], rows: [
      { label: 'لقطة شاشة متداولة', cells: ['الرمز نفسه يُرسل إلى عشرة أصدقاء', 'أول مسح مقبول والباقي مرفوض'] },
      { label: 'تذكرة مزوَّرة مطبوعة', cells: ['رمز مختلَق أو منسوخ من تذكرة حقيقية', 'التوقيع يُفحص دون شبكة: لا تمر'] },
      { label: 'حساب مزيّف، موقع مزيّف', cells: ['حفل غير موجود يُباع على إنستغرام', 'صفحة رسمية واحدة، تذكرة قابلة للتحقق'] },
      { label: 'إعادة البيع بالضعف', cells: ['شراء بالجملة عند فتح البيع ثم إعادة البيع', 'سقف لكل مشترٍ، إعادة بيع رسمية بالسعر'] },
      { label: 'تواطؤ عند البوابة', cells: ['عون يُدخل أشخاصاً دون تذكرة', 'كل دخول مرتبط بعون وببوابة'] },
      { label: 'دفع باليورو محلّ اعتراض', cells: ['بطاقة مخصومة ثم اعتراض على الدفع', 'التذكرة تُلغى فور الاعتراض'] },
    ], caption: 'الشكل 4 · لا رد دون ثمن: التذكرة الاسمية تُبطئ البوابة إذا فُحصت كل بطاقة هوية. الضبط يتعلق بالحدث: فحص الهوية لمباراة كبيرة، ومسح بسيط لقاعة من 600 مقعد.', alt: 'مصفوفة ستة أنواع من الغش: لقطة شاشة متداولة، تذكرة مزوَّرة مطبوعة، حساب أو موقع مزيّف، إعادة البيع بالضعف، تواطؤ عند البوابة، دفع باليورو محل اعتراض؛ ولكل منها كيف يحدث والرد داخل النظام.' },
    saison: { title: 'من نوفمبر 2026 إلى صيف 2027، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير وملف التاجر الإلكتروني', note: 'السعة، الفئات، العقد مع البنك', from: 0, to: 4 },
      { label: 'البيع والتذكرة الموقَّعة', note: 'CIB، الذهبية، اليورو؛ صفحة رسمية', from: 3, to: 10 },
      { label: 'تطبيق البوابة دون شبكة', note: 'تجربة بشبكة مقطوعة، 500 دخول', from: 6, to: 12 },
      { label: 'تجربة: سهرات رمضان', note: 'قاعة واحدة، بضع سهرات، أرقام حقيقية', from: 14, to: 18 },
      { label: 'المداخيل، إعادة البيع، التقارير', note: 'تصحيح ما أظهرته التجربة', from: 18, to: 28 },
      { label: 'موسم الصيف، الجالية', note: 'مهرجانات، حفلات؛ شراء من فرنسا', from: 34, to: 44, accent: true },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. يُنتظر أن يبدأ رمضان 2027 نحو 8 فبراير، وتؤكد رؤية الهلال التاريخ: سهراته تجربة جيدة في قاعات أصغر، قبل مهرجانات الصيف وحفلاته، حين تشتري الجالية من فرنسا.', alt: 'جدول بالأسابيع: التأطير وملف التاجر الإلكتروني من 0 إلى 4، البيع والتذكرة الموقَّعة من 3 إلى 10، تطبيق البوابة دون شبكة من 6 إلى 12، تجربة خلال سهرات رمضان من 14 إلى 18، المداخيل وإعادة البيع والتقارير من 18 إلى 28، موسم الصيف ومشتريات الجالية من 34 إلى 44.' },
    models: { title: 'أي نموذج تبني: ما يربح وما ينكسر', columns: ['ما يربح', 'ما ينكسر'], rows: [
      { label: 'منظِّم أو قاعة، منصته الخاصة', cells: ['دون عمولة، ملف زبائن خاص به', 'سعة صغيرة لا تغطي تكلفة التطوير'] },
      { label: 'علامة بيضاء: نادٍ، مهرجان', cells: ['عقد سنوي، رسم لكل تذكرة', 'ذروة يوم فتح البيع'] },
      { label: 'سوق تذاكر (نوع Shotgun)', cells: ['رسوم خدمة على كل تذكرة', 'يلزم المنظِّمون قبل الجمهور'] },
      { label: 'برنامج باشتراك للقاعات', cells: ['اشتراك شهري، البوابة مشمولة', 'تكوين أعوان البوابة قاعة بقاعة'] },
      { label: 'معارض ومؤتمرات: تسجيل وشارات', cells: ['عقود مؤسسات، دفع بالتحويل', 'الفوترة، قوائم اسمية محيَّنة'] },
      { label: 'دفع دون نقود في عين المكان', cells: ['عمولة على المشروبات والأكل', 'التعبئة، استرداد الأرصدة'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القاعدة نفسها: تذكرة موقَّعة، بوابة دون شبكة، تحويل عادل للمداخيل. ننصح بالبدء مع منظِّم أو قاعة تمتلئ أصلاً، ثم فتح الأداة لغيرهما؛ والسوق يأتي حين يحضر المنظِّمون.', alt: 'مصفوفة ستة نماذج: منظِّم أو قاعة بمنصته الخاصة، علامة بيضاء لنادٍ أو مهرجان، سوق تذاكر، برنامج باشتراك للقاعات، تسجيل وشارات للمعارض والمؤتمرات، دفع دون نقود في عين المكان؛ ولكل منها ما يربح وما ينكسر.' },
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
      porte: { svg: stats({ title: t.porte.title, items: t.porte.items, rtl }), caption: t.porte.caption, alt: t.porte.alt },
      fraude: { svg: matrix({ title: t.fraude.title, columns: t.fraude.columns, rows: t.fraude.rows, rtl }), caption: t.fraude.caption, alt: t.fraude.alt },
      saison: { svg: timeline({ title: t.saison.title, items: t.saison.items, total: 44, tick: 4, unit: t.saison.unit, rtl }), caption: t.saison.caption, alt: t.saison.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
