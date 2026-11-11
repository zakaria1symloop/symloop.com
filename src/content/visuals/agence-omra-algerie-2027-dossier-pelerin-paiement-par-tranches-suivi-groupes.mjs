import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'agence-omra-algerie-2027-dossier-pelerin-paiement-par-tranches-suivi-groupes';
const T = {
  fr: {
    cover: { eyebrow: 'Agences de voyages · Omra · 2027', title: ['Une agence de Omra', 'sans cahier ni WhatsApp', 'en 2027.'], subtitle: 'Dossier pèlerin complet, paiement par tranches avec reçus, groupes et vols, appli du guide hors ligne, retour confirmé.', left: { label: 'Le pèlerin', sub: 'à Sétif, à Oran, ou sa fille qui paie depuis Lyon' }, right: { label: 'L’agence', sub: '490 agences retenues pour la saison 1448' }, note: 'Algérie · Arabie saoudite · 2027' },
    journey: { title: 'Un pèlerinage qui tient, en six moments', items: [
      { n: '01', label: 'La demande', sub: 'Période, hôtel, distance au Haram, prix écrit.' },
      { n: '02', label: 'Le dossier', sub: 'Passeport, photos, vaccins, contrat signé.' },
      { n: '03', label: 'Le paiement', sub: 'Tranches, reçus numérotés, solde visible.' },
      { n: '04', label: 'Le visa et le vol', sub: 'Statut par pèlerin, dates limites d’entrée et de sortie.' },
      { n: '05', label: 'Sur place', sub: 'Programme, guide, carte de l’hôtel, urgences.' },
      { n: '06', label: 'Le retour', sub: 'Sortie confirmée, avis, prochain départ.', accent: true },
    ], caption: 'Figure 1 · Les trois premiers moments se jouent à l’agence, les trois suivants à distance : à l’aéroport, à La Mecque, à Médine. Une agence qui tient ses dossiers dans un cahier et ses groupes dans WhatsApp perd le fil exactement au moment où le pèlerin, et sa famille, en ont le plus besoin.', alt: 'Six moments : la demande avec période, hôtel, distance au Haram et prix écrit ; le dossier avec passeport, photos, vaccins et contrat signé ; le paiement par tranches avec reçus numérotés ; le visa et le vol avec statut par pèlerin et dates limites ; sur place avec programme, guide et carte de l’hôtel ; le retour avec sortie confirmée, avis et prochain départ.' },
    stack: { title: 'Ce qu’il faut construire : les dossiers et les paiements d’abord', layers: [
      { label: 'Pèlerin et famille', items: [
        { name: 'Espace pèlerin', sub: 'dossier, reçus, programme ; arabe, français' },
        { name: 'Espace famille', sub: 'paiement depuis la France, suivi du départ et du retour' },
      ] },
      { label: 'L’agence', items: [
        { name: 'Dossiers et groupes', sub: 'passeports, chambrées, listes de vol, mahram' },
        { name: 'Paiements par tranches', sub: 'espèces saisies, CIB, Edahabia, euros ; reçus, relances', accent: true },
        { name: 'Contrats et déclarations', sub: 'contrat signé, programmes déclarés, rapports mensuels' },
      ] },
      { label: 'Sur place', items: [
        { name: 'Appli du guide, hors ligne', sub: 'programme, points de rendez-vous, carte de l’hôtel, urgences' },
        { name: 'Pointage', sub: 'embarquement, bus, hôtel, vol retour' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur et données au nom de l’agence', sub: 'passeports et données de santé protégés ; loi 18-07' }] },
    ], caption: 'Figure 2 · La tentation est de commencer par un beau site qui présente les offres. Mais une agence de Omra vit de dossiers complets à temps et de paiements encaissés en entier : c’est ce qui doit exister en premier. L’espace pèlerin, l’espace famille et l’appli du guide se branchent dessus.', alt: 'Quatre couches : le pèlerin et sa famille avec un espace pèlerin et un espace famille ; l’agence avec les dossiers et groupes, les paiements par tranches et les contrats et déclarations ; sur place avec l’appli du guide hors ligne et le pointage ; le socle, serveur et données au nom de l’agence.' },
    suivi: { title: 'Six cents pèlerins par saison : ce que coûte le suivi à la main', items: [
      { value: '600', label: 'pèlerins sur la saison : quinze départs de quarante' },
      { value: '400 h', label: 'de téléphone et de WhatsApp : 8 contacts × 5 min par pèlerin' },
      { value: '100 h', label: 'avec un espace pèlerin, des reçus et des SMS automatiques' },
      { value: '300 h', label: 'rendues à la vente et à l’encadrement des groupes', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : huit contacts par pèlerin (pièce manquante, tranche à régler, date de vol, heure de rendez-vous, hôtel, retour), cinq minutes chacun, ramenés à deux quand le pèlerin voit son dossier, ses reçus et son programme sur son téléphone. Comptez vos appels d’une semaine de départ pour refaire le calcul.', alt: 'Exemple de calcul : 600 pèlerins par saison en quinze départs de quarante ; 400 heures de téléphone et de WhatsApp à huit contacts de cinq minutes par pèlerin ; 100 heures avec un espace pèlerin, des reçus et des SMS automatiques ; 300 heures rendues à la vente et à l’encadrement. Les hypothèses sont indiquées.' },
    risques: { title: 'Six risques, six parades', columns: ['Comment ça se passe', 'La parade dans le système'], rows: [
      { label: 'Agence usurpée', cells: ['Fausse page, faux appel, « acompte » viré à un inconnu', 'Reçu numéroté, espace pèlerin officiel, agrément affiché'] },
      { label: 'Espèces sans reçu', cells: ['Tranche payée au comptoir, oubliée dans le cahier', 'Chaque tranche saisie, reçu par SMS, solde visible'] },
      { label: 'Visa ou vol en retard', cells: ['Dossier incomplet découvert la veille du départ', 'Statut par pèlerin, pièces manquantes, alertes avant les dates limites'] },
      { label: 'Hôtel différent du contrat', cells: ['Promis à 300 m, logé à 1,5 km', 'Nom, catégorie et distance écrits au contrat, photos au dossier'] },
      { label: 'Pèlerin perdu', cells: ['Téléphone déchargé, hôtel introuvable', 'Appli hors ligne, carte de l’hôtel, numéro du guide, bracelet'] },
      { label: 'Dépassement de séjour', cells: ['Un pèlerin manque au vol retour', 'Liste de retour pointée, sortie confirmée, famille prévenue'] },
    ], caption: 'Figure 4 · Les signes d’alerte que l’Office national du pèlerinage et de la Omra rappelle en octobre 2026 sont exactement ceux-là : un prix très en dessous du marché, un paiement en espèces sans reçu, une agence absente de la liste. Une agence sérieuse se protège et protège ses pèlerins avec les mêmes outils.', alt: 'Matrice de six risques : agence usurpée, espèces sans reçu, visa ou vol en retard, hôtel différent du contrat, pèlerin perdu, dépassement de séjour ; pour chacun, comment ça se passe et la parade dans le système.' },
    calendrier: { title: 'De novembre 2026 à la saison 1449, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, dossier type, contrat', note: 'pièces, tranches, chambrées', from: 0, to: 3 },
      { label: 'Dossiers, groupes, paiements', note: 'passeports, listes, reçus', from: 2, to: 9 },
      { label: 'Espace pèlerin, SMS', note: 'dossier, reçus, programme', from: 6, to: 12 },
      { label: 'Pilote : un départ de janvier', note: 'vrais pèlerins, appels comptés', from: 10, to: 14 },
      { label: 'Ramadan 1448', note: 'pic de la saison, ≈ 8 fév. → 9 mars 2027', from: 14, to: 18, accent: true },
      { label: 'Hadj 2027, puis saison 1449', note: 'mêmes dossiers, nouveaux départs', from: 26, to: 40 },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. Les dates du Ramadan et du Hadj 2027 dépendent de l’observation du croissant ; les semaines indiquées sont approximatives. Le pilote sur un départ de janvier laisse le temps de corriger avant le Ramadan, quand les groupes sont les plus nombreux et les familles les plus inquiètes.', alt: 'Calendrier en semaines : cadrage, dossier type et contrat de 0 à 3 ; dossiers, groupes et paiements de 2 à 9 ; espace pèlerin et SMS de 6 à 12 ; pilote sur un départ de janvier de 10 à 14 ; Ramadan 1448 de 14 à 18 ; Hadj 2027 puis saison 1449 de 26 à 40.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Une agence, son système', cells: ['Dossiers complets à temps, soldes encaissés', 'L’équipe habituée au cahier et à WhatsApp'] },
      { label: 'Organisateur et sous-traitants', cells: ['Portail pour les agences partenaires, quotas suivis', 'Responsabilité sur des dossiers saisis par d’autres'] },
      { label: 'Agence habilitée au Hadj', cells: ['Mêmes dossiers, exigences de l’Office tenues', 'Calendrier imposé, rapports à produire'] },
      { label: 'Réseau multi-wilayas', cells: ['Chiffres consolidés, groupes mutualisés', 'Prix et hôtels différents par agence'] },
      { label: 'Offre diaspora', cells: ['La Omra des parents payée en euros depuis la France', 'Encaissement en devises à régler avec la banque'] },
      { label: 'Comparateur d’offres', cells: ['Commission par pèlerin apporté', 'Agréments et hôtels réels à vérifier sans cesse'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur le même socle : un dossier par pèlerin, un paiement par tranches tracé, un groupe par départ. Nous conseillons de commencer par une agence et un départ, puis d’ouvrir aux partenaires ou à la diaspora une fois la saison du Ramadan passée.', alt: 'Matrice de six modèles : une agence avec son système, un organisateur avec sous-traitants, une agence habilitée au Hadj, un réseau multi-wilayas, une offre diaspora, un comparateur d’offres ; pour chacun, ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Travel agencies · Umrah · 2027', title: ['An Umrah agency', 'without notebooks or WhatsApp', 'in 2027.'], subtitle: 'Complete pilgrim file, instalment payments with receipts, groups and flights, offline guide app, confirmed return.', left: { label: 'The pilgrim', sub: 'in Sétif, in Oran, or their daughter paying from Lyon' }, right: { label: 'The agency', sub: '490 agencies shortlisted for season 1448' }, note: 'Algeria · Saudi Arabia · 2027' },
    journey: { title: 'A pilgrimage that holds, in six moments', items: [
      { n: '01', label: 'The request', sub: 'Period, hotel, distance to the Haram, written price.' },
      { n: '02', label: 'The file', sub: 'Passport, photos, vaccines, signed contract.' },
      { n: '03', label: 'Payment', sub: 'Instalments, numbered receipts, visible balance.' },
      { n: '04', label: 'Visa and flight', sub: 'Status per pilgrim, entry and exit deadlines.' },
      { n: '05', label: 'On site', sub: 'Programme, guide, hotel card, emergencies.' },
      { n: '06', label: 'The return', sub: 'Exit confirmed, review, next departure.', accent: true },
    ], caption: 'Figure 1 · The first three moments happen at the agency, the next three at a distance: at the airport, in Mecca, in Medina. An agency that keeps its files in a notebook and its groups in WhatsApp loses the thread exactly when the pilgrim, and their family, need it most.', alt: 'Six moments: the request with period, hotel, distance to the Haram and written price; the file with passport, photos, vaccines and signed contract; instalment payment with numbered receipts; visa and flight with status per pilgrim and deadlines; on site with programme, guide and hotel card; the return with exit confirmed, review and next departure.' },
    stack: { title: 'What to build: files and payments first', layers: [
      { label: 'Pilgrim and family', items: [
        { name: 'Pilgrim space', sub: 'file, receipts, programme; Arabic, French' },
        { name: 'Family space', sub: 'payment from France, departure and return tracked' },
      ] },
      { label: 'The agency', items: [
        { name: 'Files and groups', sub: 'passports, room sharing, flight lists, mahram' },
        { name: 'Instalment payments', sub: 'cash entered, CIB, Edahabia, euros; receipts, reminders', accent: true },
        { name: 'Contracts and declarations', sub: 'signed contract, declared programmes, monthly reports' },
      ] },
      { label: 'On site', items: [
        { name: 'Guide app, offline', sub: 'programme, meeting points, hotel card, emergencies' },
        { name: 'Roll call', sub: 'boarding, bus, hotel, return flight' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server and data in the agency’s name', sub: 'passports and health data protected; law 18-07' }] },
    ], caption: 'Figure 2 · The temptation is to start with a handsome website presenting the offers. But an Umrah agency lives on complete files on time and payments collected in full: that is what must exist first. The pilgrim space, the family space and the guide app plug into it.', alt: 'Four layers: the pilgrim and family with a pilgrim space and a family space; the agency with files and groups, instalment payments and contracts and declarations; on site with the offline guide app and roll call; the foundation, server and data in the agency’s name.' },
    suivi: { title: 'Six hundred pilgrims a season: what hand-kept follow-up costs', items: [
      { value: '600', label: 'pilgrims over the season: fifteen departures of forty' },
      { value: '400 h', label: 'of phone and WhatsApp: 8 contacts × 5 min per pilgrim' },
      { value: '100 h', label: 'with a pilgrim space, receipts and automatic SMS' },
      { value: '300 h', label: 'given back to sales and to looking after groups', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: eight contacts per pilgrim (missing document, instalment due, flight date, meeting time, hotel, return), five minutes each, brought down to two when the pilgrim sees their file, receipts and programme on their phone. Count your calls in one departure week to redo the sum.', alt: 'Worked example: 600 pilgrims a season in fifteen departures of forty; 400 hours of phone and WhatsApp at eight five-minute contacts per pilgrim; 100 hours with a pilgrim space, receipts and automatic SMS; 300 hours given back to sales and group care. Assumptions stated.' },
    risques: { title: 'Six risks, six counters', columns: ['How it happens', 'The counter in the system'], rows: [
      { label: 'Impersonated agency', cells: ['Fake page, fake call, “deposit” sent to a stranger', 'Numbered receipt, official pilgrim space, licence displayed'] },
      { label: 'Cash without receipt', cells: ['Instalment paid at the counter, lost in the notebook', 'Every instalment entered, receipt by SMS, visible balance'] },
      { label: 'Visa or flight late', cells: ['Incomplete file found the day before departure', 'Status per pilgrim, missing documents, alerts before deadlines'] },
      { label: 'Hotel not as contracted', cells: ['Promised at 300 m, lodged 1.5 km away', 'Name, category and distance written in the contract, photos on file'] },
      { label: 'Lost pilgrim', cells: ['Phone dead, hotel nowhere to be found', 'Offline app, hotel card, guide’s number, wristband'] },
      { label: 'Overstay', cells: ['One pilgrim missing from the return flight', 'Return list ticked, exit confirmed, family informed'] },
    ], caption: 'Figure 4 · The warning signs the National Office for Hajj and Umrah repeated in October 2026 are exactly these: a price far below the market, cash payment without a receipt, an agency missing from the list. A serious agency protects itself and its pilgrims with the same tools.', alt: 'Matrix of six risks: impersonated agency, cash without receipt, visa or flight late, hotel not as contracted, lost pilgrim, overstay; for each, how it happens and the counter in the system.' },
    calendrier: { title: 'From November 2026 to season 1449, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, model file, contract', note: 'documents, instalments, rooms', from: 0, to: 3 },
      { label: 'Files, groups, payments', note: 'passports, lists, receipts', from: 2, to: 9 },
      { label: 'Pilgrim space, SMS', note: 'file, receipts, programme', from: 6, to: 12 },
      { label: 'Pilot: one January departure', note: 'real pilgrims, calls counted', from: 10, to: 14 },
      { label: 'Ramadan 1448', note: 'season peak, ≈ 8 Feb → 9 Mar 2027', from: 14, to: 18, accent: true },
      { label: 'Hajj 2027, then season 1449', note: 'same files, new departures', from: 26, to: 40 },
    ], caption: 'Figure 5 · Week 0 = early November 2026. Ramadan and Hajj 2027 dates depend on the sighting of the crescent; the weeks shown are approximate. A pilot on one January departure leaves time to correct before Ramadan, when groups are largest and families most anxious.', alt: 'Calendar in weeks: scoping, model file and contract from 0 to 3; files, groups and payments from 2 to 9; pilgrim space and SMS from 6 to 12; pilot on one January departure from 10 to 14; Ramadan 1448 from 14 to 18; Hajj 2027 then season 1449 from 26 to 40.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One agency, its own system', cells: ['Complete files on time, balances collected', 'A team used to the notebook and WhatsApp'] },
      { label: 'Organiser and subcontractors', cells: ['Portal for partner agencies, quotas tracked', 'Liability for files entered by others'] },
      { label: 'Agency licensed for Hajj', cells: ['Same files, the Office’s requirements met', 'Imposed calendar, reports to produce'] },
      { label: 'Multi-wilaya network', cells: ['Consolidated figures, pooled groups', 'Different prices and hotels per agency'] },
      { label: 'Diaspora offer', cells: ['Parents’ Umrah paid in euros from France', 'Foreign-currency collection to settle with the bank'] },
      { label: 'Offer comparison site', cells: ['Commission per pilgrim brought in', 'Licences and real hotels to verify constantly'] },
    ], caption: 'Figure 6 · All six models rest on the same base: one file per pilgrim, one traced instalment payment, one group per departure. We advise starting with one agency and one departure, then opening to partners or the diaspora once the Ramadan season is over.', alt: 'Matrix of six models: one agency with its system, an organiser with subcontractors, an agency licensed for Hajj, a multi-wilaya network, a diaspora offer, an offer comparison site; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'وكالات السفر · العمرة · 2027', title: ['وكالة عمرة', 'بلا دفتر ولا واتساب', 'سنة 2027.'], subtitle: 'ملف معتمر كامل، دفع بالأقساط مع وصولات، أفواج ورحلات، تطبيق مرشد يعمل دون اتصال، وعودة مؤكَّدة.', left: { label: 'المعتمر', sub: 'في سطيف أو وهران، أو ابنته التي تدفع من ليون' }, right: { label: 'الوكالة', sub: '490 وكالة مقبولة لموسم 1448' }, note: 'الجزائر · السعودية · 2027' },
    journey: { title: 'عمرة تصمد، في ست لحظات', items: [
      { n: '01', label: 'الطلب', sub: 'الفترة، الفندق، المسافة عن الحرم، سعر مكتوب.' },
      { n: '02', label: 'الملف', sub: 'جواز السفر، الصور، التلقيح، عقد موقَّع.' },
      { n: '03', label: 'الدفع', sub: 'أقساط، وصولات مرقَّمة، رصيد ظاهر.' },
      { n: '04', label: 'التأشيرة والرحلة', sub: 'حالة كل معتمر، آجال الدخول والخروج.' },
      { n: '05', label: 'في الأماكن المقدسة', sub: 'البرنامج، المرشد، بطاقة الفندق، الطوارئ.' },
      { n: '06', label: 'العودة', sub: 'خروج مؤكَّد، رأي، الرحلة القادمة.', accent: true },
    ], caption: 'الشكل 1 · اللحظات الثلاث الأولى تجري في الوكالة، والثلاث التالية عن بُعد: في المطار وفي مكة وفي المدينة. والوكالة التي تحفظ ملفاتها في دفتر وأفواجها في واتساب تفقد الخيط تماماً حين يحتاجه المعتمر وعائلته أكثر ما يكون.', alt: 'ست لحظات: الطلب بالفترة والفندق والمسافة عن الحرم والسعر المكتوب؛ الملف بجواز السفر والصور والتلقيح والعقد الموقَّع؛ الدفع بالأقساط مع وصولات مرقَّمة؛ التأشيرة والرحلة بحالة كل معتمر والآجال؛ في الأماكن المقدسة بالبرنامج والمرشد وبطاقة الفندق؛ العودة بخروج مؤكَّد ورأي ورحلة قادمة.' },
    stack: { title: 'ما يجب بناؤه: الملفات والمدفوعات أولاً', layers: [
      { label: 'المعتمر وعائلته', items: [
        { name: 'فضاء المعتمر', sub: 'الملف، الوصولات، البرنامج؛ عربية وفرنسية' },
        { name: 'فضاء العائلة', sub: 'الدفع من فرنسا، متابعة الذهاب والعودة' },
      ] },
      { label: 'الوكالة', items: [
        { name: 'الملفات والأفواج', sub: 'جوازات، توزيع الغرف، قوائم الرحلات، المحرم' },
        { name: 'الدفع بالأقساط', sub: 'نقد مسجَّل، CIB، الذهبية، يورو؛ وصولات، تذكيرات', accent: true },
        { name: 'العقود والتصريحات', sub: 'عقد موقَّع، برامج مصرَّح بها، تقارير شهرية' },
      ] },
      { label: 'في الأماكن المقدسة', items: [
        { name: 'تطبيق المرشد، دون اتصال', sub: 'البرنامج، نقاط اللقاء، بطاقة الفندق، الطوارئ' },
        { name: 'التفقّد', sub: 'الصعود، الحافلة، الفندق، رحلة العودة' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم وبيانات باسم الوكالة', sub: 'جوازات ومعطيات صحية محمية؛ القانون 18-07' }] },
    ], caption: 'الشكل 2 · الإغراء هو البدء بموقع جميل يعرض العروض. لكن وكالة العمرة تعيش من ملفات كاملة في وقتها ومدفوعات محصَّلة بالكامل: هذا ما يجب أن يوجد أولاً. وفضاء المعتمر وفضاء العائلة وتطبيق المرشد تُوصَل به.', alt: 'أربع طبقات: المعتمر وعائلته بفضاء المعتمر وفضاء العائلة؛ الوكالة بالملفات والأفواج والدفع بالأقساط والعقود والتصريحات؛ في الأماكن المقدسة بتطبيق المرشد دون اتصال والتفقّد؛ القاعدة، خادم وبيانات باسم الوكالة.' },
    suivi: { title: 'ستمائة معتمر في الموسم: كم تكلّف المتابعة اليدوية', items: [
      { value: '600', label: 'معتمر في الموسم: خمس عشرة رحلة من أربعين' },
      { value: '400 س', label: 'من الهاتف وواتساب: 8 اتصالات × 5 دقائق لكل معتمر' },
      { value: '100 س', label: 'مع فضاء معتمر ووصولات ورسائل قصيرة تلقائية' },
      { value: '300 س', label: 'تعود إلى البيع وإلى تأطير الأفواج', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس: ثمانية اتصالات لكل معتمر (وثيقة ناقصة، قسط مستحق، تاريخ الرحلة، ساعة الموعد، الفندق، العودة)، خمس دقائق لكل منها، تنخفض إلى اثنين حين يرى المعتمر ملفه ووصولاته وبرنامجه على هاتفه. عُدّ مكالمات أسبوع رحلة واحد لتعيد الحساب.', alt: 'مثال حساب: 600 معتمر في الموسم في خمس عشرة رحلة من أربعين؛ 400 ساعة هاتف وواتساب بثمانية اتصالات من خمس دقائق لكل معتمر؛ 100 ساعة مع فضاء معتمر ووصولات ورسائل تلقائية؛ 300 ساعة تعود إلى البيع وتأطير الأفواج. الفرضيات مذكورة.' },
    risques: { title: 'ستة مخاطر وستة ردود', columns: ['كيف يحدث', 'الرد في النظام'], rows: [
      { label: 'انتحال صفة الوكالة', cells: ['صفحة مزيفة، مكالمة مزيفة، «عربون» يُحوَّل لمجهول', 'وصل مرقَّم، فضاء معتمر رسمي، اعتماد معروض'] },
      { label: 'نقد بلا وصل', cells: ['قسط مدفوع في الشباك، ضائع في الدفتر', 'كل قسط مسجَّل، وصل برسالة قصيرة، رصيد ظاهر'] },
      { label: 'تأشيرة أو رحلة متأخرة', cells: ['ملف ناقص يُكتشف عشية السفر', 'حالة كل معتمر، الوثائق الناقصة، تنبيهات قبل الآجال'] },
      { label: 'فندق مخالف للعقد', cells: ['وُعد بـ300 م، وسُكِّن على 1,5 كلم', 'الاسم والفئة والمسافة مكتوبة في العقد، صور في الملف'] },
      { label: 'معتمر تائه', cells: ['هاتف فارغ، فندق لا يُعثر عليه', 'تطبيق دون اتصال، بطاقة الفندق، رقم المرشد، سوار'] },
      { label: 'تجاوز مدة الإقامة', cells: ['معتمر غائب عن رحلة العودة', 'قائمة عودة متفقَّدة، خروج مؤكَّد، عائلة مُبلَّغة'] },
    ], caption: 'الشكل 4 · علامات التحذير التي ذكّر بها الديوان الوطني للحج والعمرة في أكتوبر 2026 هي هذه بالضبط: سعر أدنى بكثير من السوق، دفع نقدي بلا وصل، وكالة غائبة عن القائمة. والوكالة الجادّة تحمي نفسها ومعتمريها بالأدوات نفسها.', alt: 'مصفوفة ستة مخاطر: انتحال صفة الوكالة، نقد بلا وصل، تأشيرة أو رحلة متأخرة، فندق مخالف للعقد، معتمر تائه، تجاوز مدة الإقامة؛ ولكل منها كيف يحدث والرد في النظام.' },
    calendrier: { title: 'من نوفمبر 2026 إلى موسم 1449، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير، الملف النموذجي، العقد', note: 'الوثائق، الأقساط، الغرف', from: 0, to: 3 },
      { label: 'الملفات، الأفواج، المدفوعات', note: 'جوازات، قوائم، وصولات', from: 2, to: 9 },
      { label: 'فضاء المعتمر، الرسائل', note: 'الملف، الوصولات، البرنامج', from: 6, to: 12 },
      { label: 'تجربة: رحلة واحدة في جانفي', note: 'معتمرون حقيقيون، مكالمات معدودة', from: 10, to: 14 },
      { label: 'رمضان 1448', note: 'ذروة الموسم، ≈ 8 فيفري → 9 مارس 2027', from: 14, to: 18, accent: true },
      { label: 'حج 2027، ثم موسم 1449', note: 'الملفات نفسها، رحلات جديدة', from: 26, to: 40 },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. تواريخ رمضان وحج 2027 تتوقف على رؤية الهلال؛ والأسابيع المبيَّنة تقريبية. والتجربة على رحلة واحدة في جانفي تترك وقتاً للتصحيح قبل رمضان، حين تكون الأفواج أكبر والعائلات أكثر قلقاً.', alt: 'جدول بالأسابيع: التأطير والملف النموذجي والعقد من 0 إلى 3؛ الملفات والأفواج والمدفوعات من 2 إلى 9؛ فضاء المعتمر والرسائل من 6 إلى 12؛ تجربة على رحلة واحدة في جانفي من 10 إلى 14؛ رمضان 1448 من 14 إلى 18؛ حج 2027 ثم موسم 1449 من 26 إلى 40.' },
    models: { title: 'أي نموذج تبني: ما يُدرّ، وما ينكسر', columns: ['ما يُدرّ', 'ما ينكسر'], rows: [
      { label: 'وكالة واحدة ونظامها', cells: ['ملفات كاملة في وقتها، أرصدة محصَّلة', 'فريق معتاد على الدفتر وواتساب'] },
      { label: 'منظِّم ومتعاقدون من الباطن', cells: ['بوابة للوكالات الشريكة، حصص متابَعة', 'مسؤولية عن ملفات أدخلها آخرون'] },
      { label: 'وكالة مؤهَّلة للحج', cells: ['الملفات نفسها، متطلبات الديوان مستوفاة', 'جدول مفروض، تقارير يجب إعدادها'] },
      { label: 'شبكة متعددة الولايات', cells: ['أرقام موحَّدة، أفواج مشتركة', 'أسعار وفنادق مختلفة لكل وكالة'] },
      { label: 'عرض للجالية', cells: ['عمرة الوالدين مدفوعة باليورو من فرنسا', 'تحصيل العملة الصعبة يُضبط مع البنك'] },
      { label: 'موقع مقارنة العروض', cells: ['عمولة عن كل معتمر', 'اعتمادات وفنادق حقيقية يجب التحقق منها باستمرار'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القاعدة نفسها: ملف لكل معتمر، دفع بالأقساط متتبَّع، فوج لكل رحلة. ننصح بالبدء بوكالة واحدة ورحلة واحدة، ثم الانفتاح على الشركاء أو الجالية بعد انقضاء موسم رمضان.', alt: 'مصفوفة ستة نماذج: وكالة بنظامها، منظِّم ومتعاقدون من الباطن، وكالة مؤهَّلة للحج، شبكة متعددة الولايات، عرض للجالية، موقع مقارنة العروض؛ ولكل منها ما يُدرّ وما ينكسر.' },
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
      suivi: { svg: stats({ title: t.suivi.title, items: t.suivi.items, rtl }), caption: t.suivi.caption, alt: t.suivi.alt },
      risques: { svg: matrix({ title: t.risques.title, columns: t.risques.columns, rows: t.risques.rows, rtl }), caption: t.risques.caption, alt: t.risques.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 40, tick: 4, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
