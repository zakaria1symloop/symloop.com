import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement';
const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France #12', title: ['Créer une application', 'de salle de sport', 'en Algérie en 2027.'], subtitle: 'Abonnement, accès hors ligne, créneaux femmes, renouvellement relancé : quoi construire d’abord.', left: { label: 'L’adhérent', sub: 'inscrit à Oran, parfois payé depuis Lyon' }, right: { label: 'Le club', sub: 'salles, réseaux, espaces femmes, coachs' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Un abonnement qui tient, en six moments', items: [
      { n: '01', label: 'L’inscription', sub: 'Photo, formule, créneaux autorisés, en deux minutes.' },
      { n: '02', label: 'Le paiement', sub: 'Espèces saisies à l’accueil, CIB, Edahabia, euros.' },
      { n: '03', label: 'L’accès', sub: 'QR personnel ou badge, photo à l’écran, marche sans réseau.' },
      { n: '04', label: 'Créneaux et cours', sub: 'Horaires femmes, places de cours limitées et réservées.' },
      { n: '05', label: 'Le renouvellement', sub: 'Rappel avant la fin, gel pour voyage, relance après.' },
      { n: '06', label: 'Le pilotage', sub: 'Entrées, renouvellements, caisse : par club et par jour.', accent: true },
    ], caption: 'Figure 1 · Le moment que presque tous les clubs négligent est le 05. Sans prélèvement automatique, chaque mois l’adhérent doit revenir payer : s’il ne revient pas, personne ne le voit partir, et la salle se vide sans bruit.', alt: 'Six moments : l’inscription avec photo, formule et créneaux autorisés ; le paiement en espèces saisi à l’accueil, par CIB, Edahabia ou en euros ; l’accès par QR personnel ou badge avec photo, sans réseau ; les créneaux femmes et les cours à places limitées ; le renouvellement avec rappel, gel et relance ; le pilotage des entrées, des renouvellements et de la caisse par club et par jour.' },
    stack: { title: 'Ce qu’il faut construire : l’accès et le renouvellement d’abord', layers: [
      { label: 'Côté adhérent', items: [
        { name: 'Application adhérent', sub: 'QR d’entrée, cours, date de fin, rappel' },
        { name: 'Paiement en ligne', sub: 'CIB, Edahabia ; euros pour un proche' },
      ] },
      { label: 'Le club', items: [
        { name: 'Accueil et caisse', sub: 'inscription, espèces saisies, reçu' },
        { name: 'Contrôle d’accès', sub: 'tourniquet, QR ou badge, liste locale, marche sans réseau', accent: true },
        { name: 'Planning', sub: 'créneaux femmes, cours, coachs' },
      ] },
      { label: 'Le propriétaire', items: [
        { name: 'Tableau de bord', sub: 'clubs, entrées, renouvellements, caisse, à distance' },
        { name: 'Coachs et séances privées', sub: 'réservées, payées, part du coach calculée' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur et données à votre nom', sub: 'fichier adhérents, photos protégées, sauvegardes ; loi 18-07 sur les données personnelles' }] },
    ], caption: 'Figure 2 · L’application adhérent est ce que l’on montre ; le contrôle d’accès et l’accueil sont ce qui fait rentrer l’argent. Un tourniquet qui laisse passer un abonnement expiré, ou une caisse où l’espèce n’est pas saisie, annule tout le reste.', alt: 'Quatre couches : côté adhérent l’application et le paiement en ligne ; le club avec l’accueil et la caisse, le contrôle d’accès qui marche sans réseau, et le planning ; le propriétaire avec le tableau de bord et les séances des coachs ; le socle, serveur et données au nom du client.' },
    renouv: { title: 'Six cents adhérents : ce que vaut un renouvellement relancé', items: [
      { value: '600', label: 'adhérents actifs, 2 500 DA par mois (hypothèse)' },
      { value: '180', label: 'partent chaque mois sans relance : 30 % (hypothèse)' },
      { value: '120', label: 'partent avec rappel, gel et paiement en ligne : 20 %' },
      { value: '150 000', label: 'DA de plus chaque mois : 60 adhérents × 2 500 DA', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : 2 500 DA par mois, 30 % puis 20 % de départs mensuels. Refaites-le avec vos chiffres : comptez vos actifs le 1er du mois, et combien ont renouvelé sept jours après leur date de fin. L’écart se cumule : un adhérent gardé paie aussi le mois suivant.', alt: 'Exemple de calcul pour 600 adhérents à 2 500 DA par mois : 180 partent chaque mois sans relance, soit 30 % ; 120 avec rappel, gel et paiement en ligne, soit 20 % ; 60 adhérents gardés représentent 150 000 DA de plus par mois. Les taux sont des hypothèses.' },
    fuites: { title: 'Six fuites, six parades', columns: ['Comment ça se passe', 'La parade dans le système'], rows: [
      { label: 'Badge ou QR prêté', cells: ['Un ami entre avec le QR d’un adhérent', 'QR qui change, photo à l’écran au passage'] },
      { label: 'Abonnement expiré', cells: ['On entre encore deux semaines après la fin', 'Tourniquet fermé, renouvellement à l’accueil'] },
      { label: 'Espèces non saisies', cells: ['Payé à l’accueil, jamais enregistré', 'Pas d’accès sans reçu ; caisse du jour rapprochée'] },
      { label: 'Séances de coach hors caisse', cells: ['Le coach encaisse en privé dans la salle', 'Séances réservées dans l’outil, part calculée'] },
      { label: 'Gel détourné', cells: ['Abonnement gelé, adhérent vu à la salle', 'Le gel coupe l’accès ; durée plafonnée'] },
      { label: 'Cours surchargé', cells: ['Quarante personnes pour vingt places', 'Places réservées, liste d’attente, rappel'] },
    ], caption: 'Figure 4 · Chaque parade a un coût : un QR qui change exige un téléphone, une photo à l’écran exige un œil à l’accueil. Le bon réglage dépend du club : badge et photo pour une salle de quartier, QR dynamique pour un réseau.', alt: 'Matrice de six fuites : badge ou QR prêté, abonnement expiré, espèces non saisies, séances de coach hors caisse, gel détourné, cours surchargé ; pour chacune, comment ça se passe et la parade dans le système.' },
    saison: { title: 'De novembre 2026 à la rentrée 2027, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, formules, matériel', note: 'tourniquet, lecteurs, règles de gel', from: 0, to: 3 },
      { label: 'Accueil, caisse, adhérents', note: 'reprise du fichier existant', from: 2, to: 9 },
      { label: 'Accès hors ligne', note: 'essai réseau coupé, un vrai tourniquet', from: 6, to: 12 },
      { label: 'Pilote : un club, Ramadan', note: 'horaires du soir, vraies mesures', from: 12, to: 18 },
      { label: 'Application adhérent, cours', note: 'paiement en ligne, rappels, réservations', from: 18, to: 28 },
      { label: 'Rentrée : réseau, 2e club', note: 'un abonnement valable partout', from: 36, to: 44, accent: true },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. Le Ramadan 2027 devrait commencer vers le 8 février, date confirmée par l’observation du croissant : beaucoup de salles déplacent alors leurs horaires vers la soirée, ce qui met à l’épreuve le planning et l’accès. L’objectif est d’être prêt pour la rentrée de septembre.', alt: 'Calendrier en semaines : cadrage, formules et matériel de 0 à 3 ; accueil, caisse et adhérents de 2 à 9 ; accès hors ligne de 6 à 12 ; pilote dans un club pendant le Ramadan de 12 à 18 ; application adhérent et cours de 18 à 28 ; rentrée avec un réseau et un deuxième club de 36 à 44.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Un club, son application', cells: ['Fichier adhérents à soi, aucune commission', 'Un seul club paie mal le développement'] },
      { label: 'Réseau de clubs (type Basic-Fit)', cells: ['Un abonnement valable dans tous les clubs', 'Accès et caisse cohérents entre clubs'] },
      { label: 'Logiciel par abonnement pour salles', cells: ['Mensualité par club, accès inclus', 'Installer et former, club par club'] },
      { label: 'Pass multi-salles pour entreprises', cells: ['Contrats d’entreprise, paiement par virement', 'Payer chaque salle au juste nombre de visites'] },
      { label: 'Club ou espace pour femmes', cells: ['Une demande que les horaires alternés servent mal', 'Encadrement et accès réservés à garantir'] },
      { label: 'Coaching en ligne, séances privées', cells: ['Programmes et suivi payés au mois', 'Garder l’adhérent motivé hors de la salle'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur le même socle : un fichier adhérents propre, un accès qui ne laisse passer que les abonnements payés, un renouvellement relancé. Nous conseillons de commencer avec un club ou un réseau qui a déjà ses adhérents, puis d’ouvrir l’outil à d’autres salles.', alt: 'Matrice de six modèles : un club avec son application, un réseau de clubs, un logiciel par abonnement pour salles, un pass multi-salles pour entreprises, un club pour femmes, le coaching en ligne ; pour chacun, ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France #12', title: ['Building a gym app', 'and platform', 'in Algeria in 2027.'], subtitle: 'Membership, offline access, women’s hours, renewals that get chased: what to build first.', left: { label: 'The member', sub: 'signed up in Oran, sometimes paid from Lyon' }, right: { label: 'The club', sub: 'gyms, chains, women’s spaces, coaches' }, note: 'France · Algeria · 2027' },
    journey: { title: 'A membership that holds, in six moments', items: [
      { n: '01', label: 'Sign-up', sub: 'Photo, plan, allowed time slots, in two minutes.' },
      { n: '02', label: 'Payment', sub: 'Cash entered at the desk, CIB, Edahabia, euros.' },
      { n: '03', label: 'Access', sub: 'Personal QR or badge, photo on screen, works offline.' },
      { n: '04', label: 'Slots and classes', sub: 'Women’s hours, limited class places, booked ahead.' },
      { n: '05', label: 'Renewal', sub: 'Reminder before the end, freeze for travel, follow-up.' },
      { n: '06', label: 'Oversight', sub: 'Entries, renewals, cash: per club and per day.', accent: true },
    ], caption: 'Figure 1 · The moment almost every club neglects is 05. With no automatic debit, the member has to come back and pay every month: if they do not, nobody sees them leave, and the gym empties quietly.', alt: 'Six moments: sign-up with photo, plan and allowed slots; payment in cash entered at the desk, by CIB, Edahabia or in euros; access by personal QR or badge with photo, offline; women’s hours and classes with limited places; renewal with reminder, freeze and follow-up; oversight of entries, renewals and cash per club and per day.' },
    stack: { title: 'What to build: access and renewal first', layers: [
      { label: 'Member side', items: [
        { name: 'Member app', sub: 'entry QR, classes, end date, reminder' },
        { name: 'Online payment', sub: 'CIB, Edahabia; euros for a relative' },
      ] },
      { label: 'The club', items: [
        { name: 'Front desk and till', sub: 'sign-up, cash entered, receipt' },
        { name: 'Access control', sub: 'turnstile, QR or badge, local list, works offline', accent: true },
        { name: 'Schedule', sub: 'women’s hours, classes, coaches' },
      ] },
      { label: 'The owner', items: [
        { name: 'Dashboard', sub: 'clubs, entries, renewals, cash, remotely' },
        { name: 'Coaches and private sessions', sub: 'booked, paid, coach’s share calculated' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server and data in your name', sub: 'member file, protected photos, backups; law 18-07 on personal data' }] },
    ], caption: 'Figure 2 · The member app is what you show; access control and the front desk are what bring the money in. A turnstile that lets an expired membership through, or a till where cash is not entered, cancels out everything else.', alt: 'Four layers: member side with the app and online payment; the club with the front desk and till, access control that works offline, and the schedule; the owner with the dashboard and coach sessions; the foundation, server and data in the client’s name.' },
    renouv: { title: 'Six hundred members: what a chased renewal is worth', items: [
      { value: '600', label: 'active members, 2,500 DA a month (assumption)' },
      { value: '180', label: 'leave each month with no follow-up: 30% (assumption)' },
      { value: '120', label: 'leave with reminder, freeze and online payment: 20%' },
      { value: '150,000', label: 'DA more each month: 60 members × 2,500 DA', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: 2,500 DA a month, 30% then 20% monthly departures. Run it with your own figures: count your active members on the 1st, and how many renewed within seven days of their end date. The gap compounds: a member you keep also pays the month after.', alt: 'Worked example for 600 members at 2,500 DA a month: 180 leave each month with no follow-up, 30%; 120 with reminder, freeze and online payment, 20%; 60 members kept are worth 150,000 DA more a month. The rates are assumptions.' },
    fuites: { title: 'Six leaks, six counters', columns: ['How it happens', 'The counter in the system'], rows: [
      { label: 'Lent badge or QR', cells: ['A friend gets in on a member’s QR', 'A QR that changes, photo on screen at entry'] },
      { label: 'Expired membership', cells: ['Still getting in two weeks after the end', 'Turnstile closed, renewal at the desk'] },
      { label: 'Cash not entered', cells: ['Paid at the desk, never recorded', 'No access without a receipt; daily cash matched'] },
      { label: 'Coach sessions off the till', cells: ['The coach takes cash privately in the gym', 'Sessions booked in the tool, share calculated'] },
      { label: 'Misused freeze', cells: ['Membership frozen, member seen at the gym', 'The freeze cuts access; duration capped'] },
      { label: 'Overbooked class', cells: ['Forty people for twenty places', 'Booked places, waiting list, reminder'] },
    ], caption: 'Figure 4 · Every counter has a cost: a changing QR needs a phone, a photo on screen needs an eye at the desk. The right setting depends on the club: badge and photo for a neighbourhood gym, dynamic QR for a chain.', alt: 'Matrix of six leaks: lent badge or QR, expired membership, cash not entered, coach sessions off the till, misused freeze, overbooked class; for each, how it happens and the counter in the system.' },
    saison: { title: 'From November 2026 to September 2027, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, plans, hardware', note: 'turnstile, readers, freeze rules', from: 0, to: 3 },
      { label: 'Front desk, till, members', note: 'importing the existing file', from: 2, to: 9 },
      { label: 'Offline access', note: 'test with the network off, a real turnstile', from: 6, to: 12 },
      { label: 'Pilot: one club, Ramadan', note: 'evening hours, real figures', from: 12, to: 18 },
      { label: 'Member app, classes', note: 'online payment, reminders, bookings', from: 18, to: 28 },
      { label: 'September: chain, 2nd club', note: 'one membership valid everywhere', from: 36, to: 44, accent: true },
    ], caption: 'Figure 5 · Week 0 = early November 2026. Ramadan 2027 should begin around 8 February, a date confirmed by the sighting of the crescent: many gyms then move their hours into the evening, which tests the schedule and access. The aim is to be ready for the September return.', alt: 'Calendar in weeks: scoping, plans and hardware from 0 to 3; front desk, till and members from 2 to 9; offline access from 6 to 12; pilot in one club during Ramadan from 12 to 18; member app and classes from 18 to 28; September with a chain and a second club from 36 to 44.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One club, its own app', cells: ['Its own member file, no commission', 'One club pays poorly for the build'] },
      { label: 'A chain of clubs (Basic-Fit type)', cells: ['One membership valid in every club', 'Consistent access and cash across clubs'] },
      { label: 'Subscription software for gyms', cells: ['Monthly fee per club, access included', 'Installing and training, club by club'] },
      { label: 'Multi-gym pass for companies', cells: ['Company contracts, payment by transfer', 'Paying each gym for the right number of visits'] },
      { label: 'A club or space for women', cells: ['Demand that alternating hours serve badly', 'Staffing and reserved access to guarantee'] },
      { label: 'Online coaching, private sessions', cells: ['Programmes and follow-up paid monthly', 'Keeping members motivated outside the gym'] },
    ], caption: 'Figure 6 · All six models stand on the same base: a clean member file, access that only lets paid memberships through, and renewals that get chased. We advise starting with a club or a chain that already has its members, then opening the tool to other gyms.', alt: 'Matrix of six models: one club with its app, a chain of clubs, subscription software for gyms, a multi-gym pass for companies, a club for women, online coaching; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا #12', title: ['إنشاء تطبيق', 'لقاعة رياضة', 'في الجزائر سنة 2027.'], subtitle: 'الاشتراك، دخول يعمل دون شبكة، أوقات النساء، تجديد يُتابَع: ما يُبنى أولاً.', left: { label: 'المشترك', sub: 'مسجَّل في وهران، يُدفع عنه أحياناً من ليون' }, right: { label: 'النادي', sub: 'قاعات، شبكات، فضاءات نسائية، مدرّبون' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'اشتراك يصمد، في ست لحظات', items: [
      { n: '01', label: 'التسجيل', sub: 'صورة، صيغة الاشتراك، الأوقات المسموحة، في دقيقتين.' },
      { n: '02', label: 'الدفع', sub: 'نقد مُسجَّل في الاستقبال، CIB، الذهبية، اليورو.' },
      { n: '03', label: 'الدخول', sub: 'رمز QR شخصي أو شارة، صورة على الشاشة، يعمل دون شبكة.' },
      { n: '04', label: 'الأوقات والحصص', sub: 'أوقات النساء، مقاعد الحصص محدودة ومحجوزة.' },
      { n: '05', label: 'التجديد', sub: 'تذكير قبل النهاية، تجميد عند السفر، متابعة بعدها.' },
      { n: '06', label: 'المتابعة', sub: 'الدخول والتجديدات والصندوق: لكل نادٍ ولكل يوم.', accent: true },
    ], caption: 'الشكل 1 · اللحظة التي تهملها كل النوادي تقريباً هي 05. دون اقتطاع تلقائي، على المشترك أن يعود ويدفع كل شهر: إن لم يعد لا يراه أحد يغادر، وتفرغ القاعة في صمت.', alt: 'ست لحظات: التسجيل بالصورة وصيغة الاشتراك والأوقات المسموحة؛ الدفع نقداً مسجَّلاً في الاستقبال أو بـCIB أو الذهبية أو باليورو؛ الدخول برمز QR شخصي أو شارة مع صورة ودون شبكة؛ أوقات النساء والحصص بمقاعد محدودة؛ التجديد مع تذكير وتجميد ومتابعة؛ متابعة الدخول والتجديدات والصندوق لكل نادٍ ولكل يوم.' },
    stack: { title: 'ما يجب بناؤه: الدخول والتجديد أولاً', layers: [
      { label: 'جهة المشترك', items: [
        { name: 'تطبيق المشترك', sub: 'رمز الدخول، الحصص، تاريخ النهاية، التذكير' },
        { name: 'الدفع الإلكتروني', sub: 'CIB والذهبية؛ اليورو لقريب' },
      ] },
      { label: 'النادي', items: [
        { name: 'الاستقبال والصندوق', sub: 'التسجيل، نقد مسجَّل، وصل' },
        { name: 'مراقبة الدخول', sub: 'بوابة دوّارة، QR أو شارة، قائمة محلية، دون شبكة', accent: true },
        { name: 'التخطيط', sub: 'أوقات النساء، الحصص، المدرّبون' },
      ] },
      { label: 'المالك', items: [
        { name: 'لوحة القيادة', sub: 'النوادي، الدخول، التجديدات، الصندوق، عن بُعد' },
        { name: 'المدرّبون والحصص الخاصة', sub: 'محجوزة، مدفوعة، حصة المدرّب محسوبة' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم وبيانات باسمك', sub: 'ملف المشتركين، صور محمية، نسخ احتياطية؛ القانون 18-07 للمعطيات الشخصية' }] },
    ], caption: 'الشكل 2 · تطبيق المشترك هو ما نعرضه؛ أما مراقبة الدخول والاستقبال فهما ما يُدخل المال. بوابة تمرّر اشتراكاً منتهياً، أو صندوق لا يُسجَّل فيه النقد، يُلغيان كل الباقي.', alt: 'أربع طبقات: جهة المشترك بالتطبيق والدفع الإلكتروني؛ النادي بالاستقبال والصندوق ومراقبة الدخول دون شبكة والتخطيط؛ المالك بلوحة القيادة وحصص المدرّبين؛ القاعدة، خادم وبيانات باسم الزبون.' },
    renouv: { title: 'ستمائة مشترك: كم يساوي تجديد متابَع', items: [
      { value: '600', label: 'مشترك نشط، 2500 دج في الشهر (فرضية)' },
      { value: '180', label: 'يغادرون كل شهر دون متابعة: 30 % (فرضية)' },
      { value: '120', label: 'يغادرون مع التذكير والتجميد والدفع الإلكتروني: 20 %' },
      { value: '150000', label: 'دج إضافية كل شهر: 60 مشتركاً × 2500 دج', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس: 2500 دج في الشهر، و30 % ثم 20 % مغادرة شهرية. أعده بأرقامك: عُدّ المشتركين النشطين في أول الشهر، وكم منهم جدّد خلال سبعة أيام من تاريخ نهايته. والفرق يتراكم: المشترك الذي تحتفظ به يدفع الشهر التالي أيضاً.', alt: 'مثال حساب لـ600 مشترك بـ2500 دج في الشهر: 180 يغادرون كل شهر دون متابعة، أي 30 %؛ و120 مع التذكير والتجميد والدفع الإلكتروني، أي 20 %؛ و60 مشتركاً محتفَظاً بهم تساوي 150000 دج إضافية في الشهر. النسب فرضيات.' },
    fuites: { title: 'ستة تسرّبات وستة ردود', columns: ['كيف يحدث', 'الرد في النظام'], rows: [
      { label: 'شارة أو رمز QR مُعار', cells: ['صديق يدخل برمز مشترك', 'رمز QR يتغيّر، وصورة على الشاشة عند المرور'] },
      { label: 'اشتراك منتهٍ', cells: ['الدخول مستمر أسبوعين بعد النهاية', 'البوابة مغلقة، والتجديد في الاستقبال'] },
      { label: 'نقد غير مسجَّل', cells: ['دُفع في الاستقبال ولم يُسجَّل أبداً', 'لا دخول دون وصل؛ صندوق اليوم مطابَق'] },
      { label: 'حصص مدرّب خارج الصندوق', cells: ['المدرّب يقبض نقداً لحسابه داخل القاعة', 'الحصص محجوزة في الأداة، والحصة محسوبة'] },
      { label: 'تجميد مُستغَل', cells: ['اشتراك مجمَّد والمشترك يُرى في القاعة', 'التجميد يقطع الدخول؛ ومدته محدودة'] },
      { label: 'حصة مكتظة', cells: ['أربعون شخصاً لعشرين مقعداً', 'مقاعد محجوزة، قائمة انتظار، تذكير'] },
    ], caption: 'الشكل 4 · لكل رد كلفة: الرمز المتغيّر يحتاج هاتفاً، والصورة على الشاشة تحتاج عيناً في الاستقبال. الإعداد المناسب حسب النادي: شارة وصورة لقاعة الحي، ورمز QR متغيّر لشبكة نوادٍ.', alt: 'مصفوفة ستة تسرّبات: شارة أو رمز مُعار، اشتراك منتهٍ، نقد غير مسجَّل، حصص مدرّب خارج الصندوق، تجميد مُستغَل، حصة مكتظة؛ ولكل منها كيف يحدث والرد في النظام.' },
    saison: { title: 'من نوفمبر 2026 إلى الدخول الاجتماعي 2027، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير، الصيغ، العتاد', note: 'البوابة، القارئات، قواعد التجميد', from: 0, to: 3 },
      { label: 'الاستقبال، الصندوق، المشتركون', note: 'نقل الملف الحالي', from: 2, to: 9 },
      { label: 'الدخول دون شبكة', note: 'تجربة والشبكة مقطوعة، بوابة حقيقية', from: 6, to: 12 },
      { label: 'تجربة: نادٍ واحد، رمضان', note: 'أوقات المساء، قياسات حقيقية', from: 12, to: 18 },
      { label: 'تطبيق المشترك، الحصص', note: 'الدفع الإلكتروني، التذكير، الحجز', from: 18, to: 28 },
      { label: 'سبتمبر: شبكة، نادٍ ثانٍ', note: 'اشتراك واحد صالح في كل مكان', from: 36, to: 44, accent: true },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. يُنتظر أن يبدأ رمضان 2027 نحو 8 فيفري، والتاريخ يُؤكَّد برؤية الهلال: كثير من القاعات تنقل أوقاتها حينها إلى المساء، وهذا امتحان للتخطيط وللدخول. الهدف هو الجاهزية للدخول الاجتماعي في سبتمبر.', alt: 'جدول بالأسابيع: التأطير والصيغ والعتاد من 0 إلى 3؛ الاستقبال والصندوق والمشتركون من 2 إلى 9؛ الدخول دون شبكة من 6 إلى 12؛ تجربة في نادٍ واحد خلال رمضان من 12 إلى 18؛ تطبيق المشترك والحصص من 18 إلى 28؛ سبتمبر بشبكة ونادٍ ثانٍ من 36 إلى 44.' },
    models: { title: 'أي نموذج تبني: ما يُدرّ، وما ينكسر', columns: ['ما يُدرّ', 'ما ينكسر'], rows: [
      { label: 'نادٍ واحد وتطبيقه', cells: ['ملف مشتركين خاص، دون عمولة', 'نادٍ واحد لا يغطي كلفة التطوير جيداً'] },
      { label: 'شبكة نوادٍ (نوع Basic-Fit)', cells: ['اشتراك واحد صالح في كل النوادي', 'دخول وصندوق متّسقان بين النوادي'] },
      { label: 'برنامج بالاشتراك للقاعات', cells: ['اشتراك شهري لكل نادٍ، الدخول مشمول', 'التركيب والتكوين، نادياً نادياً'] },
      { label: 'بطاقة متعددة القاعات للشركات', cells: ['عقود مؤسسات، دفع بالتحويل', 'دفع كل قاعة حسب عدد الزيارات الصحيح'] },
      { label: 'نادٍ أو فضاء للنساء', cells: ['طلب لا تخدمه الأوقات المتناوبة جيداً', 'تأطير ودخول مخصَّص يجب ضمانهما'] },
      { label: 'تدريب عن بُعد وحصص خاصة', cells: ['برامج ومتابعة مدفوعة شهرياً', 'إبقاء المشترك متحمّساً خارج القاعة'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القاعدة نفسها: ملف مشتركين نظيف، ودخول لا يمرّر إلا الاشتراكات المدفوعة، وتجديد يُتابَع. ننصح بالبدء بنادٍ أو شبكة لها مشتركوها، ثم فتح الأداة لقاعات أخرى.', alt: 'مصفوفة ستة نماذج: نادٍ بتطبيقه، شبكة نوادٍ، برنامج بالاشتراك للقاعات، بطاقة متعددة القاعات للشركات، نادٍ للنساء، تدريب عن بُعد؛ ولكل منها ما يُدرّ وما ينكسر.' },
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
      renouv: { svg: stats({ title: t.renouv.title, items: t.renouv.items, rtl }), caption: t.renouv.caption, alt: t.renouv.alt },
      fuites: { svg: matrix({ title: t.fuites.title, columns: t.fuites.columns, rows: t.fuites.rows, rtl }), caption: t.fuites.caption, alt: t.fuites.alt },
      saison: { svg: timeline({ title: t.saison.title, items: t.saison.items, total: 44, tick: 4, unit: t.saison.unit, rtl }), caption: t.saison.caption, alt: t.saison.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
