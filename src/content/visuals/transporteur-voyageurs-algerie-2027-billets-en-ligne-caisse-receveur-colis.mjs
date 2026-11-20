import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'transporteur-voyageurs-algerie-2027-billets-en-ligne-caisse-receveur-colis';
const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France #14', title: ['Transporteur de', 'voyageurs en Algérie', 'en 2027.'], subtitle: 'Un seul stock de places, la vente saisie à bord, les colis tracés, la caisse du voyage rapprochée.', left: { label: 'Le voyageur', sub: 'au guichet, sur Mahatati ou sur votre appli' }, right: { label: 'Le car', sub: 'lignes interwilayas, navettes, colis' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Un voyage qui tient, en six moments', items: [
      { n: '01', label: 'Le départ', sub: 'Ligne, horaire, car, chauffeur, places par canal.' },
      { n: '02', label: 'La vente', sub: 'Guichet, en ligne, agents : un seul stock de places.' },
      { n: '03', label: 'L’embarquement', sub: 'Liste des passagers, QR ou nom, places libres.' },
      { n: '04', label: 'À bord', sub: 'Billet vendu en route saisi sur le téléphone, reçu.' },
      { n: '05', label: 'Les colis', sub: 'Enregistrés, photographiés, code au destinataire.' },
      { n: '06', label: 'La clôture', sub: 'Caisse du voyage : billets, colis, carburant.', accent: true },
    ], caption: 'Figure 1 · Les moments 04 et 05 se passent loin du bureau, entre deux wilayas, souvent en espèces. C’est là qu’un transporteur perd le plus sans le voir : un billet vendu à bord sans trace, un colis remis sans signature. Le moment 06 n’a de sens que si les deux sont saisis.', alt: 'Six moments : le départ avec ligne, horaire, car, chauffeur et places par canal ; la vente au guichet, en ligne et par agents sur un seul stock de places ; l’embarquement avec la liste des passagers ; la vente à bord saisie sur le téléphone du receveur ; les colis enregistrés et photographiés ; la clôture de la caisse du voyage.' },
    stack: { title: 'Ce qu’il faut construire : le téléphone du receveur d’abord', layers: [
      { label: 'Voyageurs', items: [
        { name: 'Réservation en ligne', sub: 'site, application ; CIB, Edahabia, euros' },
        { name: 'Suivi du car', sub: 'heure d’arrivée estimée, retards annoncés' },
      ] },
      { label: 'Le transporteur', items: [
        { name: 'Stock de places unique', sub: 'guichet, en ligne, agents, gares' },
        { name: 'Tableau par ligne', sub: 'remplissage, recettes, colis, carburant' },
        { name: 'Colis', sub: 'dépôt, suivi, code de retrait, litiges' },
      ] },
      { label: 'Le car', items: [
        { name: 'Téléphone du receveur', sub: 'liste, billets à bord, colis, reçus ; marche sans réseau', accent: true },
        { name: 'Chauffeur et position', sub: 'départ, arrêts, arrivée, kilomètres' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur et données à votre nom', sub: 'voyageurs, ventes, colis ; arabe, français ; loi 18-07 sur les données personnelles' }] },
    ], caption: 'Figure 2 · L’application de réservation est ce que l’on montre ; le téléphone du receveur est ce qui fait rentrer l’argent. Il doit fonctionner sans réseau sur une route de montagne, et se synchroniser dès que le réseau revient.', alt: 'Quatre couches : voyageurs avec la réservation en ligne et le suivi du car ; le transporteur avec le stock de places unique, le tableau par ligne et les colis ; le car avec le téléphone du receveur qui marche sans réseau et le chauffeur ; le socle, serveur et données au nom du transporteur.' },
    caisse: { title: 'Dix cars : ce que coûte un billet vendu à bord sans trace', items: [
      { value: '700', label: 'passagers par jour : 10 cars, 2 départs, 50 places, 70 %' },
      { value: '210 000', label: 'DA encaissés à bord par jour : 30 % de 1 000 DA × 700' },
      { value: '21 000', label: 'DA non saisis par jour si 10 % échappent à la caisse' },
      { value: '630 000', label: 'DA par mois récupérables avec la vente saisie à bord', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : 1 000 DA de billet moyen, 70 % de remplissage, 30 % des billets vendus à bord, 10 % de ces ventes non saisies. Refaites-le avec vos lignes : comparez pendant une semaine le nombre de passagers comptés à l’arrivée et le nombre de billets en caisse.', alt: 'Exemple de calcul pour 10 cars : 700 passagers par jour ; 210 000 DA encaissés à bord par jour si 30 % des billets à 1 000 DA y sont vendus ; 21 000 DA non saisis par jour si 10 % échappent à la caisse ; 630 000 DA par mois récupérables. Les taux sont des hypothèses.' },
    fuites: { title: 'Six fuites, six parades', columns: ['Comment ça se passe', 'La parade dans le système'], rows: [
      { label: 'Billet à bord non saisi', cells: ['Encaissé en route, jamais déclaré', 'Vente sur le téléphone, reçu, comptage'] },
      { label: 'Place vendue deux fois', cells: ['Guichet et en ligne sur la même place', 'Un seul stock, bloqué à la vente'] },
      { label: 'Colis sans trace', cells: ['Remis au mauvais destinataire, ou perdu', 'Photo au dépôt, code au retrait'] },
      { label: 'Car parti à moitié vide', cells: ['Places libres jamais proposées', 'Places restantes en vente jusqu’au départ'] },
      { label: 'Carburant non justifié', cells: ['Plein payé, kilomètres inconnus', 'Kilomètres du voyage, plein rattaché'] },
      { label: 'Retard non annoncé', cells: ['Voyageurs qui appellent le guichet', 'Heure estimée envoyée aux voyageurs'] },
    ], caption: 'Figure 4 · Aucune parade ne marche contre le receveur ; elles marchent avec lui. Un receveur dont la part dépend des ventes saisies a intérêt à tout saisir, et un système qui lui fait gagner du temps à chaque arrêt sera utilisé.', alt: 'Matrice de six fuites : billet vendu à bord non saisi, place vendue deux fois, colis sans trace, car parti à moitié vide, carburant non justifié, retard non annoncé ; pour chacune, comment ça se passe et la parade dans le système.' },
    saison: { title: 'De novembre 2026 à l’Aïd el-Adha 2027, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, lignes, cars', note: 'horaires, tarifs en vigueur, places', from: 0, to: 3 },
      { label: 'Stock unique, guichet', note: 'reprise des lignes et des agents', from: 2, to: 8 },
      { label: 'Téléphone du receveur', note: 'essai hors réseau sur une vraie ligne', from: 5, to: 11 },
      { label: 'Pilote : une ligne', note: 'comptage à l’arrivée contre la caisse', from: 10, to: 15 },
      { label: 'Aïd el-Fitr : premier pic', note: 'renforts, places en temps réel', from: 16, to: 19 },
      { label: 'Vente en ligne, colis', note: 'avant l’Aïd el-Adha et l’été', from: 19, to: 30, accent: true },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. L’Aïd el-Fitr devrait tomber vers le 9 mars 2027 et l’Aïd el-Adha vers le 16 mai, dates confirmées par l’observation du croissant : ce sont les deux pics de l’année pour les gares, avant l’été et l’arrivée de la diaspora.', alt: 'Calendrier en semaines : cadrage des lignes et des cars de 0 à 3 ; stock de places unique et guichet de 2 à 8 ; téléphone du receveur de 5 à 11 ; pilote sur une ligne de 10 à 15 ; Aïd el-Fitr, premier pic, de 16 à 19 ; vente en ligne et colis de 19 à 30, avant l’Aïd el-Adha et l’été.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Un transporteur, son système', cells: ['Caisse tenue, cars mieux remplis', 'Former chaque receveur'] },
      { label: 'Réseau de lignes (type FlixBus)', cells: ['Marque et vente pour plusieurs cars', 'Qualité inégale des transporteurs'] },
      { label: 'Logiciel pour agences et gares', cells: ['Abonnement par guichet ou par car', 'Installer et former, agence par agence'] },
      { label: 'Transport du personnel', cells: ['Contrats d’entreprise, factures au mois', 'Circuits, présences, retards à justifier'] },
      { label: 'Colis par car', cells: ['Recette en plus sur chaque voyage', 'Pertes et litiges sans traçabilité'] },
      { label: 'Navettes port et aéroport', cells: ['Réservées depuis la France, en euros', 'Retards de ferry, bagages, attente'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur le même socle : un stock de places unique, un téléphone du receveur qui marche sans réseau, une caisse du voyage rapprochée. Nous conseillons de commencer avec un transporteur et une ligne, puis d’ouvrir la vente en ligne et les colis.', alt: 'Matrice de six modèles : un transporteur avec son système, un réseau de lignes privées, un logiciel pour agences et gares, le transport du personnel, les colis par car, les navettes port et aéroport pour la diaspora ; pour chacun, ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France #14', title: ['Coach operators', 'in Algeria', 'in 2027.'], subtitle: 'One seat stock, on-board sales recorded, parcels tracked, each trip’s cash reconciled.', left: { label: 'The traveller', sub: 'at the counter, on Mahatati or on your app' }, right: { label: 'The coach', sub: 'intercity lines, shuttles, parcels' }, note: 'France · Algeria · 2027' },
    journey: { title: 'A trip that holds, in six moments', items: [
      { n: '01', label: 'Departure', sub: 'Line, time, coach, driver, seats per channel.' },
      { n: '02', label: 'The sale', sub: 'Counter, online, agents: one stock of seats.' },
      { n: '03', label: 'Boarding', sub: 'Passenger list, QR or name, free seats.' },
      { n: '04', label: 'On board', sub: 'Ticket sold en route entered on the phone, receipt.' },
      { n: '05', label: 'Parcels', sub: 'Registered, photographed, code for the recipient.' },
      { n: '06', label: 'Closing', sub: 'Trip cash: tickets, parcels, fuel.', accent: true },
    ], caption: 'Figure 1 · Moments 04 and 05 happen far from the office, between two wilayas, often in cash. That is where an operator loses most without seeing it: a ticket sold on board with no trace, a parcel handed over with no signature. Moment 06 only makes sense if both are recorded.', alt: 'Six moments: departure with line, time, coach, driver and seats per channel; the sale at the counter, online and through agents from one seat stock; boarding with the passenger list; on-board sales entered on the conductor’s phone; parcels registered and photographed; closing the trip’s cash.' },
    stack: { title: 'What to build: the conductor’s phone first', layers: [
      { label: 'Travellers', items: [
        { name: 'Online booking', sub: 'website, app; CIB, Edahabia, euros' },
        { name: 'Coach tracking', sub: 'estimated arrival, delays announced' },
      ] },
      { label: 'The operator', items: [
        { name: 'Single seat stock', sub: 'counter, online, agents, stations' },
        { name: 'Dashboard per line', sub: 'load, revenue, parcels, fuel' },
        { name: 'Parcels', sub: 'drop-off, tracking, pickup code, disputes' },
      ] },
      { label: 'The coach', items: [
        { name: 'Conductor’s phone', sub: 'list, on-board tickets, parcels, receipts; works offline', accent: true },
        { name: 'Driver and position', sub: 'departure, stops, arrival, kilometres' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server and data in your name', sub: 'travellers, sales, parcels; Arabic, French; law 18-07 on personal data' }] },
    ], caption: 'Figure 2 · The booking app is what you show; the conductor’s phone is what brings the money in. It has to work with no network on a mountain road, and sync as soon as the network returns.', alt: 'Four layers: travellers with online booking and coach tracking; the operator with the single seat stock, the dashboard per line and parcels; the coach with the conductor’s phone that works offline and the driver; the foundation, server and data in the operator’s name.' },
    caisse: { title: 'Ten coaches: what an untraced on-board ticket costs', items: [
      { value: '700', label: 'passengers a day: 10 coaches, 2 departures, 50 seats, 70%' },
      { value: '210,000', label: 'DA taken on board a day: 30% of 1,000 DA × 700' },
      { value: '21,000', label: 'DA unrecorded a day if 10% escape the till' },
      { value: '630,000', label: 'DA a month recoverable with on-board sales recorded', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: 1,000 DA average ticket, 70% load, 30% of tickets sold on board, 10% of those sales unrecorded. Run it for your lines: for one week, compare passengers counted on arrival with tickets in the till.', alt: 'Worked example for 10 coaches: 700 passengers a day; 210,000 DA taken on board a day if 30% of 1,000 DA tickets are sold there; 21,000 DA unrecorded a day if 10% escape the till; 630,000 DA a month recoverable. The rates are assumptions.' },
    fuites: { title: 'Six leaks, six counters', columns: ['How it happens', 'The counter in the system'], rows: [
      { label: 'On-board ticket not entered', cells: ['Cash taken en route, never declared', 'Sale on the phone, receipt, head count'] },
      { label: 'Seat sold twice', cells: ['Counter and online on the same seat', 'One stock, locked at the sale'] },
      { label: 'Parcel with no trace', cells: ['Given to the wrong person, or lost', 'Photo at drop-off, code at pickup'] },
      { label: 'Coach leaves half empty', cells: ['Free seats never offered', 'Remaining seats on sale until departure'] },
      { label: 'Fuel not accounted for', cells: ['Tank paid, kilometres unknown', 'Trip kilometres, fill-up attached'] },
      { label: 'Delay not announced', cells: ['Travellers ringing the counter', 'Estimated time sent to travellers'] },
    ], caption: 'Figure 4 · No counter works against the conductor; they work with them. A conductor whose share depends on recorded sales has every reason to record everything, and a system that saves them time at each stop will be used.', alt: 'Matrix of six leaks: on-board ticket not entered, seat sold twice, parcel with no trace, coach leaving half empty, fuel not accounted for, delay not announced; for each, how it happens and the counter in the system.' },
    saison: { title: 'From November 2026 to Eid al-Adha 2027, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, lines, coaches', note: 'timetables, current fares, seats', from: 0, to: 3 },
      { label: 'Single stock, counter', note: 'importing lines and agents', from: 2, to: 8 },
      { label: 'Conductor’s phone', note: 'offline test on a real line', from: 5, to: 11 },
      { label: 'Pilot: one line', note: 'head count on arrival vs the till', from: 10, to: 15 },
      { label: 'Eid al-Fitr: first peak', note: 'extra coaches, live seats', from: 16, to: 19 },
      { label: 'Online sales, parcels', note: 'before Eid al-Adha and summer', from: 19, to: 30, accent: true },
    ], caption: 'Figure 5 · Week 0 = early November 2026. Eid al-Fitr should fall around 9 March 2027 and Eid al-Adha around 16 May, dates confirmed by the sighting of the crescent: these are the year’s two peaks for bus stations, before summer and the arrival of the diaspora.', alt: 'Calendar in weeks: scoping lines and coaches from 0 to 3; single seat stock and counter from 2 to 8; conductor’s phone from 5 to 11; pilot on one line from 10 to 15; Eid al-Fitr, first peak, from 16 to 19; online sales and parcels from 19 to 30, before Eid al-Adha and summer.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One operator, its own system', cells: ['Cash under control, fuller coaches', 'Training every conductor'] },
      { label: 'Line network (FlixBus type)', cells: ['Brand and sales for many coaches', 'Uneven quality across operators'] },
      { label: 'Software for agencies, stations', cells: ['Subscription per counter or coach', 'Installing and training, agency by agency'] },
      { label: 'Staff transport', cells: ['Company contracts, monthly invoices', 'Routes, attendance, delays to justify'] },
      { label: 'Parcels by coach', cells: ['Extra revenue on every trip', 'Losses and disputes with no tracking'] },
      { label: 'Port and airport shuttles', cells: ['Booked from France, in euros', 'Ferry delays, luggage, waiting'] },
    ], caption: 'Figure 6 · All six models rest on the same base: a single seat stock, a conductor’s phone that works offline, and each trip’s cash reconciled. We advise starting with one operator and one line, then opening online sales and parcels.', alt: 'Matrix of six models: one operator with its system, a network of private lines, software for agencies and stations, staff transport, parcels by coach, port and airport shuttles for the diaspora; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا #14', title: ['ناقل المسافرين', 'في الجزائر', 'سنة 2027.'], subtitle: 'مخزون مقاعد واحد، بيع مسجَّل على متن الحافلة، طرود متتبَّعة، صندوق الرحلة مطابَق.', left: { label: 'المسافر', sub: 'في الشباك، على «محطتي» أو على تطبيقك' }, right: { label: 'الحافلة', sub: 'خطوط ما بين الولايات، نقل مكوكي، طرود' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'رحلة تصمد، في ست لحظات', items: [
      { n: '01', label: 'الانطلاق', sub: 'الخط، الموعد، الحافلة، السائق، المقاعد لكل قناة.' },
      { n: '02', label: 'البيع', sub: 'الشباك، الإنترنت، الوكلاء: مخزون مقاعد واحد.' },
      { n: '03', label: 'الصعود', sub: 'قائمة المسافرين، رمز QR أو الاسم، المقاعد الشاغرة.' },
      { n: '04', label: 'على المتن', sub: 'تذكرة تُباع في الطريق تُسجَّل على الهاتف، بوصل.' },
      { n: '05', label: 'الطرود', sub: 'مسجَّلة، مصوَّرة، رمز للمستلم.' },
      { n: '06', label: 'الإغلاق', sub: 'صندوق الرحلة: التذاكر، الطرود، الوقود.', accent: true },
    ], caption: 'الشكل 1 · اللحظتان 04 و05 تجريان بعيداً عن المكتب، بين ولايتين، ونقداً في الغالب. وهناك يخسر الناقل أكثر دون أن يرى: تذكرة تُباع على المتن بلا أثر، وطرد يُسلَّم بلا توقيع. واللحظة 06 لا معنى لها إلا إذا سُجّل الاثنان.', alt: 'ست لحظات: الانطلاق بالخط والموعد والحافلة والسائق والمقاعد لكل قناة؛ البيع في الشباك وعبر الإنترنت والوكلاء من مخزون واحد؛ الصعود بقائمة المسافرين؛ البيع على المتن مسجَّلاً على هاتف القابض؛ الطرود مسجَّلة ومصوَّرة؛ إغلاق صندوق الرحلة.' },
    stack: { title: 'ما يجب بناؤه: هاتف القابض أولاً', layers: [
      { label: 'المسافرون', items: [
        { name: 'الحجز عبر الإنترنت', sub: 'موقع، تطبيق؛ CIB، الذهبية، اليورو' },
        { name: 'تتبّع الحافلة', sub: 'وقت الوصول المقدَّر، إعلان التأخير' },
      ] },
      { label: 'الناقل', items: [
        { name: 'مخزون مقاعد واحد', sub: 'الشباك، الإنترنت، الوكلاء، المحطات' },
        { name: 'لوحة لكل خط', sub: 'نسبة الملء، المداخيل، الطرود، الوقود' },
        { name: 'الطرود', sub: 'الإيداع، التتبّع، رمز السحب، النزاعات' },
      ] },
      { label: 'الحافلة', items: [
        { name: 'هاتف القابض', sub: 'القائمة، تذاكر المتن، الطرود، الوصولات؛ يعمل دون شبكة', accent: true },
        { name: 'السائق والموقع', sub: 'الانطلاق، التوقفات، الوصول، الكيلومترات' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم وبيانات باسمك', sub: 'المسافرون، المبيعات، الطرود؛ عربية وفرنسية؛ القانون 18-07 للمعطيات الشخصية' }] },
    ], caption: 'الشكل 2 · تطبيق الحجز هو ما نعرضه؛ وهاتف القابض هو ما يُدخل المال. يجب أن يعمل دون شبكة على طريق جبلي، وأن يتزامن فور عودة الشبكة.', alt: 'أربع طبقات: المسافرون بالحجز عبر الإنترنت وتتبّع الحافلة؛ الناقل بمخزون المقاعد الواحد واللوحة لكل خط والطرود؛ الحافلة بهاتف القابض الذي يعمل دون شبكة والسائق؛ القاعدة، خادم وبيانات باسم الناقل.' },
    caisse: { title: 'عشر حافلات: كم تكلّف تذكرة تُباع على المتن بلا أثر', items: [
      { value: '700', label: 'مسافر في اليوم: 10 حافلات، رحلتان، 50 مقعداً، 70 %' },
      { value: '210000', label: 'دج تُحصَّل على المتن يومياً: 30 % من 1000 دج × 700' },
      { value: '21000', label: 'دج غير مسجَّلة يومياً إذا أفلت 10 % من الصندوق' },
      { value: '630000', label: 'دج في الشهر قابلة للاسترجاع بتسجيل البيع على المتن', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس: 1000 دج متوسط التذكرة، 70 % نسبة الملء، 30 % من التذاكر تُباع على المتن، و10 % من هذه المبيعات غير مسجَّلة. أعده على خطوطك: قارن أسبوعاً كاملاً بين عدد المسافرين عند الوصول وعدد التذاكر في الصندوق.', alt: 'مثال حساب لعشر حافلات: 700 مسافر يومياً؛ 210000 دج تُحصَّل على المتن يومياً إذا بيع 30 % من تذاكر 1000 دج هناك؛ 21000 دج غير مسجَّلة يومياً إذا أفلت 10 %؛ 630000 دج شهرياً قابلة للاسترجاع. النسب فرضيات.' },
    fuites: { title: 'ستة تسرّبات وستة ردود', columns: ['كيف يحدث', 'الرد في النظام'], rows: [
      { label: 'تذكرة متن غير مسجَّلة', cells: ['تُقبض في الطريق ولا يُصرَّح بها', 'بيع على الهاتف، وصل، عدّ المسافرين'] },
      { label: 'مقعد يُباع مرتين', cells: ['الشباك والإنترنت على المقعد نفسه', 'مخزون واحد يُقفل عند البيع'] },
      { label: 'طرد بلا أثر', cells: ['يُسلَّم لغير صاحبه أو يضيع', 'صورة عند الإيداع، رمز عند السحب'] },
      { label: 'حافلة تنطلق نصف فارغة', cells: ['مقاعد شاغرة لم تُعرض أبداً', 'المقاعد المتبقية معروضة حتى الانطلاق'] },
      { label: 'وقود غير مبرَّر', cells: ['تعبئة مدفوعة وكيلومترات مجهولة', 'كيلومترات الرحلة، والتعبئة مربوطة بها'] },
      { label: 'تأخير غير معلن', cells: ['مسافرون يتصلون بالشباك', 'وقت مقدَّر يُرسل للمسافرين'] },
    ], caption: 'الشكل 4 · لا رد ينجح ضد القابض؛ الردود تنجح معه. القابض الذي ترتبط حصته بالمبيعات المسجَّلة له مصلحة في تسجيل كل شيء، والنظام الذي يوفّر له الوقت في كل توقف سيُستعمل.', alt: 'مصفوفة ستة تسرّبات: تذكرة متن غير مسجَّلة، مقعد يُباع مرتين، طرد بلا أثر، حافلة تنطلق نصف فارغة، وقود غير مبرَّر، تأخير غير معلن؛ ولكل منها كيف يحدث والرد في النظام.' },
    saison: { title: 'من نوفمبر 2026 إلى عيد الأضحى 2027، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير، الخطوط، الحافلات', note: 'المواعيد، التسعيرة السارية، المقاعد', from: 0, to: 3 },
      { label: 'المخزون الواحد، الشباك', note: 'نقل الخطوط والوكلاء', from: 2, to: 8 },
      { label: 'هاتف القابض', note: 'تجربة دون شبكة على خط حقيقي', from: 5, to: 11 },
      { label: 'تجربة: خط واحد', note: 'العدّ عند الوصول مقابل الصندوق', from: 10, to: 15 },
      { label: 'عيد الفطر: الذروة الأولى', note: 'تعزيزات، مقاعد في الوقت الحقيقي', from: 16, to: 19 },
      { label: 'البيع عبر الإنترنت، الطرود', note: 'قبل عيد الأضحى والصيف', from: 19, to: 30, accent: true },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. يُنتظر أن يكون عيد الفطر نحو 9 مارس 2027 وعيد الأضحى نحو 16 ماي، والتاريخان يُؤكَّدان برؤية الهلال: إنهما ذروتا السنة للمحطات، قبل الصيف ووصول الجالية.', alt: 'جدول بالأسابيع: تأطير الخطوط والحافلات من 0 إلى 3؛ مخزون المقاعد الواحد والشباك من 2 إلى 8؛ هاتف القابض من 5 إلى 11؛ تجربة على خط واحد من 10 إلى 15؛ عيد الفطر، الذروة الأولى، من 16 إلى 19؛ البيع عبر الإنترنت والطرود من 19 إلى 30، قبل عيد الأضحى والصيف.' },
    models: { title: 'أي نموذج تبني: ما يُدرّ، وما ينكسر', columns: ['ما يُدرّ', 'ما ينكسر'], rows: [
      { label: 'ناقل واحد ونظامه', cells: ['صندوق مضبوط، حافلات أكثر امتلاءً', 'تكوين كل قابض'] },
      { label: 'شبكة خطوط (نوع FlixBus)', cells: ['علامة وبيع لعدة حافلات', 'جودة متفاوتة بين الناقلين'] },
      { label: 'برنامج للوكالات والمحطات', cells: ['اشتراك لكل شباك أو حافلة', 'التركيب والتكوين، وكالةً وكالة'] },
      { label: 'نقل العمال', cells: ['عقود مؤسسات، فواتير شهرية', 'المسارات، الحضور، تأخيرات يجب تبريرها'] },
      { label: 'الطرود عبر الحافلات', cells: ['مدخول إضافي في كل رحلة', 'ضياع ونزاعات دون تتبّع'] },
      { label: 'نقل مكوكي من الميناء والمطار', cells: ['يُحجز من فرنسا، باليورو', 'تأخر البواخر، الأمتعة، الانتظار'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القاعدة نفسها: مخزون مقاعد واحد، وهاتف قابض يعمل دون شبكة، وصندوق رحلة مطابَق. ننصح بالبدء بناقل واحد وخط واحد، ثم فتح البيع عبر الإنترنت والطرود.', alt: 'مصفوفة ستة نماذج: ناقل واحد بنظامه، شبكة خطوط خاصة، برنامج للوكالات والمحطات، نقل العمال، الطرود عبر الحافلات، النقل المكوكي من الميناء والمطار للجالية؛ ولكل منها ما يُدرّ وما ينكسر.' },
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
      caisse: { svg: stats({ title: t.caisse.title, items: t.caisse.items, rtl }), caption: t.caisse.caption, alt: t.caisse.alt },
      fuites: { svg: matrix({ title: t.fuites.title, columns: t.fuites.columns, rows: t.fuites.rows, rtl }), caption: t.fuites.caption, alt: t.fuites.alt },
      saison: { svg: timeline({ title: t.saison.title, items: t.saison.items, total: 32, tick: 4, unit: t.saison.unit, rtl }), caption: t.saison.caption, alt: t.saison.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
