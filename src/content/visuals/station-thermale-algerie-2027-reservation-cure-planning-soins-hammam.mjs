import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'station-thermale-algerie-2027-reservation-cure-planning-soins-hammam';
const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France #15', title: ['Réserver une cure', 'et planifier les soins', 'en 2027.'], subtitle: 'Cure réservée en ligne, soins planifiés sans trou ni conflit, hammam par créneau, lits remplis hors saison.', left: { label: 'Le curiste', sub: 'à Guelma, à Oran, ou réservé depuis Lyon' }, right: { label: 'La station', sub: 'stations thermales, hammams, projets privés' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Une cure qui tient, en six moments', items: [
      { n: '01', label: 'La demande', sub: 'Prescription, période, chambre, accompagnant.' },
      { n: '02', label: 'La réservation', sub: 'Dates, chambre, acompte, en ligne ou par téléphone.' },
      { n: '03', label: 'L’accueil médical', sub: 'Consultation, soins prescrits, contre-indications.' },
      { n: '04', label: 'Le planning des soins', sub: 'Créneaux chaque jour, sans trou ni conflit.' },
      { n: '05', label: 'Le séjour', sub: 'Repas, changements, soins ajoutés à la demande.' },
      { n: '06', label: 'Le départ', sub: 'Facture, bilan, prochaine cure proposée.', accent: true },
    ], caption: 'Figure 1 · Le moment qui décide de la capacité réelle d’une station est le 04. Les lits fixent combien de curistes dorment sur place ; les postes de soins et leur planning fixent combien sont vraiment soignés chaque jour. Un planning tenu à la main laisse des trous et crée des files.', alt: 'Six moments : la demande avec prescription, période et chambre ; la réservation avec dates et acompte ; l’accueil médical avec consultation et soins prescrits ; le planning des soins chaque jour sans trou ni conflit ; le séjour avec repas et soins ajoutés ; le départ avec facture, bilan et prochaine cure proposée.' },
    stack: { title: 'Ce qu’il faut construire : le planning des soins d’abord', layers: [
      { label: 'Curiste', items: [
        { name: 'Réservation en ligne', sub: 'dates, chambre, acompte ; arabe, français' },
        { name: 'Planning du jour', sub: 'sur téléphone ou par SMS, changements prévenus' },
      ] },
      { label: 'La station', items: [
        { name: 'Chambres', sub: 'disponibilités, arrivées, départs, annulations' },
        { name: 'Planning des soins', sub: 'postes, soignants, durées, aucun conflit', accent: true },
        { name: 'Dossier de cure', sub: 'prescription, contre-indications, suivi' },
      ] },
      { label: 'Hammam et caisse', items: [
        { name: 'Billets par créneau', sub: 'bains et entrées à la journée, sans file' },
        { name: 'Caisse', sub: 'soins à l’unité, extras, chambres, reçus' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur et données à votre nom', sub: 'données de santé protégées ; arabe, français ; loi 18-07 sur les données personnelles' }] },
    ], caption: 'Figure 2 · Le planning des soins est un problème de calcul, pas de tableau : chaque curiste a plusieurs soins par jour, chaque soin a une durée, un poste et parfois un soignant. Le système doit remplir les créneaux, éviter les doubles réservations et prévenir le curiste quand quelque chose change.', alt: 'Quatre couches : le curiste avec la réservation en ligne et le planning du jour ; la station avec les chambres, le planning des soins et le dossier de cure ; le hammam et la caisse avec les billets par créneau ; le socle, serveur et données de santé au nom de la station.' },
    capacite: { title: 'Douze postes de soins : ce que vaut un planning sans trou', items: [
      { value: '360', label: 'soins possibles par jour : 12 postes, 10 h, 3 par heure' },
      { value: '72', label: 'curistes soignés si 20 % des créneaux restent vides' },
      { value: '90', label: 'curistes soignés avec un planning qui remplit les trous' },
      { value: '+18', label: 'curistes par jour, +25 %, sans un poste de plus', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : 12 postes, 10 heures d’ouverture, des soins de 20 minutes, 4 soins par curiste et par jour, 20 % de créneaux perdus avec un planning tenu à la main. Refaites-le avec vos postes et vos registres d’une semaine.', alt: 'Exemple de calcul : 360 soins possibles par jour avec 12 postes ouverts 10 heures à 3 soins par heure ; 72 curistes soignés si 20 % des créneaux restent vides, à 4 soins chacun ; 90 curistes avec un planning qui remplit les trous ; 18 curistes de plus par jour, soit 25 %, sans poste supplémentaire. Les taux sont des hypothèses.' },
    pertes: { title: 'Six pertes, six parades', columns: ['Comment ça se passe', 'La parade dans le système'], rows: [
      { label: 'Créneau vide', cells: ['Le curiste ne vient pas, personne ne le sait', 'Rappel, liste d’attente, créneau réattribué'] },
      { label: 'Deux curistes, un poste', cells: ['Le cahier de planning se contredit', 'Un poste, un créneau, une seule personne'] },
      { label: 'Soin prescrit oublié', cells: ['Le curiste repart sans un soin payé', 'Dossier de cure, soins cochés chaque jour'] },
      { label: 'Chambre annulée invendue', cells: ['Départ anticipé, lit vide une semaine', 'Annulation visible, revente, liste d’attente'] },
      { label: 'File au hammam', cells: ['Deux heures d’attente le vendredi', 'Billets par créneau, affluence affichée'] },
      { label: 'Été plein, hiver vide', cells: ['Refus en août, chambres vides en janvier', 'Offres hors saison, séjours courts, groupes'] },
    ], caption: 'Figure 4 · Une station perd rarement de l’argent par manque de curistes en pleine saison ; elle en perd par des créneaux vides, des chambres qui ne se revendent pas et des mois creux. Chaque parade repose sur la même chose : savoir, en temps réel, ce qui est libre.', alt: 'Matrice de six pertes : créneau de soin vide, deux curistes sur un poste, soin prescrit oublié, chambre annulée invendue, file d’attente au hammam, été plein et hiver vide ; pour chacune, comment ça se passe et la parade dans le système.' },
    calendrier: { title: 'De novembre 2026 à l’été 2027, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, postes, soins', note: 'durées, soignants, chambres', from: 0, to: 3 },
      { label: 'Réservation, chambres', note: 'en ligne, acompte, annulations', from: 2, to: 8 },
      { label: 'Planning des soins', note: 'moteur testé sur une vraie semaine', from: 5, to: 12 },
      { label: 'Pilote : une aile', note: 'vrais curistes, créneaux mesurés', from: 12, to: 18 },
      { label: 'Billets du hammam', note: 'créneaux, affluence, caisse', from: 16, to: 24 },
      { label: 'Saison chargée', note: 'week-ends, vacances, diaspora', from: 30, to: 42, accent: true },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. Les mois les plus chargés varient d’une station à l’autre : relevez-les dans vos registres. L’objectif est d’avoir le planning des soins rodé sur une aile avant la période la plus chargée, quand chaque créneau compte.', alt: 'Calendrier en semaines : cadrage des postes et des soins de 0 à 3 ; réservation et chambres de 2 à 8 ; planning des soins de 5 à 12 ; pilote sur une aile de 12 à 18 ; billets du hammam de 16 à 24 ; saison chargée de 30 à 42.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Une station, son système', cells: ['Plus de curistes soignés par jour', 'Soignants à former au planning'] },
      { label: 'Groupe de stations', cells: ['Réservation et chiffres consolidés', 'Soins et tarifs différents par site'] },
      { label: 'Nouveau projet privé', cells: ['Outil prêt dès l’ouverture', 'Ouverture retardée, outil en attente'] },
      { label: 'Hammam traditionnel', cells: ['Billets par créneau, moins de files', 'Clientèle habituée au guichet'] },
      { label: 'Plateforme multi-stations', cells: ['Commission par séjour réservé', 'Disponibilités réelles à synchroniser'] },
      { label: 'Cures offertes par la diaspora', cells: ['Séjour payé en euros pour un parent', 'Encaissement en devises à organiser'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur le même socle : des chambres et des postes de soins dont on connaît la disponibilité réelle, minute par minute. Nous conseillons de commencer avec une station ou un projet qui ouvre, sur une aile, puis d’étendre.', alt: 'Matrice de six modèles : une station avec son système, un groupe de stations, un nouveau projet privé, un hammam traditionnel, une plateforme multi-stations, des cures offertes par la diaspora ; pour chacun, ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France #15', title: ['Booking a spa cure', 'and scheduling care', 'in 2027.'], subtitle: 'Cure booked online, treatments scheduled with no gaps or clashes, hammam by time slot, beds filled off-season.', left: { label: 'The patient', sub: 'in Guelma, in Oran, or booked from Lyon' }, right: { label: 'The spa', sub: 'thermal spas, hammams, private projects' }, note: 'France · Algeria · 2027' },
    journey: { title: 'A cure that holds, in six moments', items: [
      { n: '01', label: 'The request', sub: 'Prescription, period, room, companion.' },
      { n: '02', label: 'Booking', sub: 'Dates, room, deposit, online or by phone.' },
      { n: '03', label: 'Medical intake', sub: 'Consultation, prescribed care, contraindications.' },
      { n: '04', label: 'Treatment schedule', sub: 'Slots every day, no gaps, no clashes.' },
      { n: '05', label: 'The stay', sub: 'Meals, changes, extra treatments on request.' },
      { n: '06', label: 'Departure', sub: 'Invoice, report, next cure offered.', accent: true },
    ], caption: 'Figure 1 · The moment that decides a spa’s real capacity is 04. Beds set how many patients sleep on site; treatment stations and their schedule set how many are actually treated each day. A schedule kept by hand leaves gaps and creates queues.', alt: 'Six moments: the request with prescription, period and room; booking with dates and deposit; medical intake with consultation and prescribed care; the daily treatment schedule with no gaps or clashes; the stay with meals and extra treatments; departure with invoice, report and the next cure offered.' },
    stack: { title: 'What to build: the treatment schedule first', layers: [
      { label: 'Patient', items: [
        { name: 'Online booking', sub: 'dates, room, deposit; Arabic, French' },
        { name: 'Daily schedule', sub: 'on the phone or by SMS, changes notified' },
      ] },
      { label: 'The spa', items: [
        { name: 'Rooms', sub: 'availability, arrivals, departures, cancellations' },
        { name: 'Treatment schedule', sub: 'stations, staff, durations, no clashes', accent: true },
        { name: 'Cure file', sub: 'prescription, contraindications, follow-up' },
      ] },
      { label: 'Hammam and till', items: [
        { name: 'Time-slot tickets', sub: 'baths and day entries, no queue' },
        { name: 'Till', sub: 'single treatments, extras, rooms, receipts' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server and data in your name', sub: 'health data protected; Arabic, French; law 18-07 on personal data' }] },
    ], caption: 'Figure 2 · The treatment schedule is a calculation problem, not a spreadsheet: each patient has several treatments a day, each treatment has a duration, a station and sometimes a therapist. The system has to fill the slots, avoid double bookings and tell the patient when something changes.', alt: 'Four layers: the patient with online booking and the daily schedule; the spa with rooms, the treatment schedule and the cure file; the hammam and till with time-slot tickets; the foundation, server and health data in the spa’s name.' },
    capacite: { title: 'Twelve treatment stations: what a gap-free schedule is worth', items: [
      { value: '360', label: 'possible treatments a day: 12 stations, 10 h, 3 an hour' },
      { value: '72', label: 'patients treated if 20% of slots stay empty' },
      { value: '90', label: 'patients treated with a schedule that fills the gaps' },
      { value: '+18', label: 'patients a day, +25%, without one more station', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: 12 stations, 10 opening hours, 20-minute treatments, 4 treatments per patient per day, 20% of slots lost with a hand-kept schedule. Run it with your stations and one week of your registers.', alt: 'Worked example: 360 possible treatments a day with 12 stations open 10 hours at 3 an hour; 72 patients treated if 20% of slots stay empty, at 4 treatments each; 90 patients with a schedule that fills the gaps; 18 more patients a day, 25%, without an extra station. The rates are assumptions.' },
    pertes: { title: 'Six losses, six counters', columns: ['How it happens', 'The counter in the system'], rows: [
      { label: 'Empty slot', cells: ['The patient does not come, nobody knows', 'Reminder, waiting list, slot reassigned'] },
      { label: 'Two patients, one station', cells: ['The schedule book contradicts itself', 'One station, one slot, one person'] },
      { label: 'Prescribed care forgotten', cells: ['The patient leaves without a paid treatment', 'Cure file, treatments ticked daily'] },
      { label: 'Cancelled room unsold', cells: ['Early departure, bed empty for a week', 'Cancellation visible, resale, waiting list'] },
      { label: 'Hammam queue', cells: ['Two hours’ wait on Friday', 'Time-slot tickets, crowd level shown'] },
      { label: 'Full in summer, empty in winter', cells: ['Turned away in August, empty in January', 'Off-season offers, short stays, groups'] },
    ], caption: 'Figure 4 · A spa rarely loses money for lack of patients in peak season; it loses money through empty slots, rooms that do not resell and slack months. Every counter rests on the same thing: knowing, in real time, what is free.', alt: 'Matrix of six losses: empty treatment slot, two patients on one station, prescribed care forgotten, cancelled room unsold, hammam queue, full in summer and empty in winter; for each, how it happens and the counter in the system.' },
    calendrier: { title: 'From November 2026 to summer 2027, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, stations, care', note: 'durations, staff, rooms', from: 0, to: 3 },
      { label: 'Booking, rooms', note: 'online, deposit, cancellations', from: 2, to: 8 },
      { label: 'Treatment schedule', note: 'engine tested on a real week', from: 5, to: 12 },
      { label: 'Pilot: one wing', note: 'real patients, slots measured', from: 12, to: 18 },
      { label: 'Hammam tickets', note: 'slots, crowd level, till', from: 16, to: 24 },
      { label: 'Busy season', note: 'weekends, holidays, diaspora', from: 30, to: 42, accent: true },
    ], caption: 'Figure 5 · Week 0 = early November 2026. The busiest months vary from one spa to another: read them in your registers. The aim is to have the treatment schedule run in on one wing before the busiest period, when every slot counts.', alt: 'Calendar in weeks: scoping stations and care from 0 to 3; booking and rooms from 2 to 8; treatment schedule from 5 to 12; pilot on one wing from 12 to 18; hammam tickets from 16 to 24; busy season from 30 to 42.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One spa, its own system', cells: ['More patients treated per day', 'Staff to train on the schedule'] },
      { label: 'Group of spas', cells: ['Shared booking and figures', 'Different care and prices per site'] },
      { label: 'New private project', cells: ['Tool ready from opening day', 'Opening delayed, tool waiting'] },
      { label: 'Traditional hammam', cells: ['Time-slot tickets, shorter queues', 'Customers used to the counter'] },
      { label: 'Multi-spa platform', cells: ['Commission per booked stay', 'Real availability to sync'] },
      { label: 'Cures paid by the diaspora', cells: ['Stay paid in euros for a parent', 'Foreign-currency collection to organise'] },
    ], caption: 'Figure 6 · All six models rest on the same base: rooms and treatment stations whose real availability is known minute by minute. We advise starting with one spa, or a project about to open, on one wing, then extending.', alt: 'Matrix of six models: one spa with its system, a group of spas, a new private project, a traditional hammam, a multi-spa platform, cures paid by the diaspora; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا #15', title: ['حجز العلاج الحموي', 'وتخطيط الحصص', 'سنة 2027.'], subtitle: 'علاج يُحجز عبر الإنترنت، حصص مخطَّطة دون فراغ ولا تداخل، حمّام بالمواعيد، وأسرّة ممتلئة خارج الموسم.', left: { label: 'المعالَج', sub: 'في قالمة أو وهران، أو يُحجز له من ليون' }, right: { label: 'المحطة', sub: 'محطات حموية، حمّامات، مشاريع خاصة' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'علاج حموي يصمد، في ست لحظات', items: [
      { n: '01', label: 'الطلب', sub: 'الوصفة، الفترة، الغرفة، المرافق.' },
      { n: '02', label: 'الحجز', sub: 'التواريخ، الغرفة، العربون، عبر الإنترنت أو الهاتف.' },
      { n: '03', label: 'الاستقبال الطبي', sub: 'فحص، الحصص الموصوفة، موانع الاستعمال.' },
      { n: '04', label: 'تخطيط الحصص', sub: 'مواعيد كل يوم، دون فراغ ولا تداخل.' },
      { n: '05', label: 'الإقامة', sub: 'الوجبات، التغييرات، حصص إضافية عند الطلب.' },
      { n: '06', label: 'المغادرة', sub: 'الفاتورة، الحصيلة، اقتراح العلاج القادم.', accent: true },
    ], caption: 'الشكل 1 · اللحظة التي تحدّد السعة الحقيقية للمحطة هي 04. الأسرّة تحدّد كم معالَجاً ينام في المكان؛ أما مواقع العلاج وتخطيطها فتحدّد كم منهم يُعالَج فعلاً كل يوم. والتخطيط اليدوي يترك فراغات ويصنع طوابير.', alt: 'ست لحظات: الطلب بالوصفة والفترة والغرفة؛ الحجز بالتواريخ والعربون؛ الاستقبال الطبي بالفحص والحصص الموصوفة؛ تخطيط الحصص يومياً دون فراغ ولا تداخل؛ الإقامة بالوجبات والحصص الإضافية؛ المغادرة بالفاتورة والحصيلة واقتراح العلاج القادم.' },
    stack: { title: 'ما يجب بناؤه: تخطيط الحصص أولاً', layers: [
      { label: 'المعالَج', items: [
        { name: 'الحجز عبر الإنترنت', sub: 'التواريخ، الغرفة، العربون؛ عربية وفرنسية' },
        { name: 'برنامج اليوم', sub: 'على الهاتف أو برسالة، والتغييرات مُعلنة' },
      ] },
      { label: 'المحطة', items: [
        { name: 'الغرف', sub: 'التوفّر، الوصول، المغادرة، الإلغاء' },
        { name: 'تخطيط الحصص', sub: 'المواقع، المعالِجون، المدد، دون تداخل', accent: true },
        { name: 'ملف العلاج', sub: 'الوصفة، موانع الاستعمال، المتابعة' },
      ] },
      { label: 'الحمّام والصندوق', items: [
        { name: 'تذاكر بالمواعيد', sub: 'الحمّامات والدخول اليومي، دون طابور' },
        { name: 'الصندوق', sub: 'حصص منفردة، إضافات، غرف، وصولات' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم وبيانات باسمك', sub: 'معطيات صحية محمية؛ عربية وفرنسية؛ القانون 18-07 للمعطيات الشخصية' }] },
    ], caption: 'الشكل 2 · تخطيط الحصص مسألة حساب لا جدول: لكل معالَج عدة حصص في اليوم، ولكل حصة مدة وموقع وأحياناً معالِج. على النظام أن يملأ المواعيد، ويتفادى الحجز المزدوج، ويُعلم المعالَج حين يتغيّر شيء.', alt: 'أربع طبقات: المعالَج بالحجز عبر الإنترنت وبرنامج اليوم؛ المحطة بالغرف وتخطيط الحصص وملف العلاج؛ الحمّام والصندوق بالتذاكر حسب المواعيد؛ القاعدة، خادم ومعطيات صحية باسم المحطة.' },
    capacite: { title: 'اثنا عشر موقع علاج: كم يساوي تخطيط بلا فراغ', items: [
      { value: '360', label: 'حصة ممكنة يومياً: 12 موقعاً، 10 ساعات، 3 في الساعة' },
      { value: '72', label: 'معالَجاً إذا بقي 20 % من المواعيد فارغاً' },
      { value: '90', label: 'معالَجاً مع تخطيط يملأ الفراغات' },
      { value: '18', label: 'معالَجاً إضافياً يومياً، أي 25 %، دون موقع جديد', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس: 12 موقعاً، 10 ساعات عمل، حصص من 20 دقيقة، 4 حصص لكل معالَج يومياً، و20 % من المواعيد ضائعة مع التخطيط اليدوي. أعده بمواقعك وبسجلات أسبوع واحد.', alt: 'مثال حساب: 360 حصة ممكنة يومياً بـ12 موقعاً مفتوحاً 10 ساعات بـ3 حصص في الساعة؛ 72 معالَجاً إذا بقي 20 % من المواعيد فارغاً بـ4 حصص لكل منهم؛ 90 معالَجاً مع تخطيط يملأ الفراغات؛ 18 معالَجاً إضافياً يومياً، أي 25 %، دون موقع جديد. النسب فرضيات.' },
    pertes: { title: 'ستة خسائر وستة ردود', columns: ['كيف يحدث', 'الرد في النظام'], rows: [
      { label: 'موعد فارغ', cells: ['المعالَج لا يأتي ولا أحد يعلم', 'تذكير، قائمة انتظار، إعادة تخصيص'] },
      { label: 'معالَجان لموقع واحد', cells: ['دفتر التخطيط يناقض نفسه', 'موقع واحد، موعد واحد، شخص واحد'] },
      { label: 'حصة موصوفة منسية', cells: ['يغادر دون حصة مدفوعة', 'ملف العلاج، الحصص تُؤشَّر يومياً'] },
      { label: 'غرفة ملغاة غير مُعاد بيعها', cells: ['مغادرة مبكرة، سرير فارغ أسبوعاً', 'إلغاء ظاهر، إعادة بيع، قائمة انتظار'] },
      { label: 'طابور الحمّام', cells: ['ساعتا انتظار يوم الجمعة', 'تذاكر بالمواعيد، الازدحام معروض'] },
      { label: 'صيف ممتلئ، شتاء فارغ', cells: ['رفض في أوت، غرف فارغة في جانفي', 'عروض خارج الموسم، إقامات قصيرة، أفواج'] },
    ], caption: 'الشكل 4 · نادراً ما تخسر المحطة المال لقلة المعالَجين في الموسم؛ إنها تخسره بمواعيد فارغة وغرف لا يُعاد بيعها وأشهر راكدة. وكل رد يقوم على الشيء نفسه: معرفة ما هو شاغر، في الوقت الحقيقي.', alt: 'مصفوفة ست خسائر: موعد علاج فارغ، معالَجان لموقع واحد، حصة موصوفة منسية، غرفة ملغاة غير مُعاد بيعها، طابور الحمّام، صيف ممتلئ وشتاء فارغ؛ ولكل منها كيف يحدث والرد في النظام.' },
    calendrier: { title: 'من نوفمبر 2026 إلى صيف 2027، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير، المواقع، الحصص', note: 'المدد، المعالِجون، الغرف', from: 0, to: 3 },
      { label: 'الحجز، الغرف', note: 'عبر الإنترنت، عربون، إلغاء', from: 2, to: 8 },
      { label: 'تخطيط الحصص', note: 'محرّك مجرَّب على أسبوع حقيقي', from: 5, to: 12 },
      { label: 'تجربة: جناح واحد', note: 'معالَجون حقيقيون، مواعيد مقاسة', from: 12, to: 18 },
      { label: 'تذاكر الحمّام', note: 'مواعيد، ازدحام، صندوق', from: 16, to: 24 },
      { label: 'الموسم المزدحم', note: 'نهايات الأسبوع، العطل، الجالية', from: 30, to: 42, accent: true },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. تختلف الأشهر الأكثر ازدحاماً من محطة لأخرى: اقرأها في سجلاتك. والهدف أن يكون تخطيط الحصص مجرَّباً على جناح واحد قبل الفترة الأكثر ازدحاماً، حين يصبح لكل موعد ثمنه.', alt: 'جدول بالأسابيع: تأطير المواقع والحصص من 0 إلى 3؛ الحجز والغرف من 2 إلى 8؛ تخطيط الحصص من 5 إلى 12؛ تجربة على جناح واحد من 12 إلى 18؛ تذاكر الحمّام من 16 إلى 24؛ الموسم المزدحم من 30 إلى 42.' },
    models: { title: 'أي نموذج تبني: ما يُدرّ، وما ينكسر', columns: ['ما يُدرّ', 'ما ينكسر'], rows: [
      { label: 'محطة واحدة ونظامها', cells: ['معالَجون أكثر يومياً', 'معالِجون يجب تكوينهم على التخطيط'] },
      { label: 'مجموعة محطات', cells: ['حجز وأرقام موحّدة', 'حصص وأسعار مختلفة لكل موقع'] },
      { label: 'مشروع خاص جديد', cells: ['أداة جاهزة منذ الافتتاح', 'افتتاح متأخر، أداة تنتظر'] },
      { label: 'حمّام تقليدي', cells: ['تذاكر بالمواعيد، طوابير أقصر', 'زبائن معتادون على الشباك'] },
      { label: 'منصة متعددة المحطات', cells: ['عمولة على كل إقامة محجوزة', 'توفّر حقيقي يجب مزامنته'] },
      { label: 'علاج تدفعه الجالية', cells: ['إقامة مدفوعة باليورو لأحد الوالدين', 'تحصيل العملة الصعبة يجب تنظيمه'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القاعدة نفسها: غرف ومواقع علاج يُعرف توفّرها الحقيقي دقيقة بدقيقة. ننصح بالبدء بمحطة واحدة، أو بمشروع على وشك الافتتاح، على جناح واحد، ثم التوسيع.', alt: 'مصفوفة ستة نماذج: محطة بنظامها، مجموعة محطات، مشروع خاص جديد، حمّام تقليدي، منصة متعددة المحطات، علاج تدفعه الجالية؛ ولكل منها ما يُدرّ وما ينكسر.' },
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
      capacite: { svg: stats({ title: t.capacite.title, items: t.capacite.items, rtl }), caption: t.capacite.caption, alt: t.capacite.alt },
      pertes: { svg: matrix({ title: t.pertes.title, columns: t.pertes.columns, rows: t.pertes.rows, rtl }), caption: t.pertes.caption, alt: t.pertes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 44, tick: 4, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
