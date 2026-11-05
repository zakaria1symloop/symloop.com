import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';

export const slug = 'creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees';

const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France #09', title: ['Créer l’équivalent', 'de Planity en Algérie', 'en 2027.'], subtitle: 'L’agenda, l’acompte contre les absences, les forfaits des mariées : quoi construire, et dans quel ordre.', left: { label: 'La réservation', sub: 'Paris, Lyon, Marseille, ou le quartier' }, right: { label: 'Le fauteuil', sub: 'Alger, Oran, Sétif, Constantine' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Un rendez-vous en salon, en six moments', items: [
      { n: '01', label: 'La prestation', sub: 'Choisie avec sa durée réelle : une couleur, c’est 2 h 30, pas 30 min.' },
      { n: '02', label: 'La bonne personne', sub: 'Le créneau est pris sur l’agenda de la coiffeuse ou de la cabine.' },
      { n: '03', label: 'L’acompte', sub: 'CIB, Edahabia, ou en euros depuis la France. Le créneau est tenu.' },
      { n: '04', label: 'Les rappels', sub: 'J-2 et H-3, sur WhatsApp ou SMS : confirmer, ou libérer la place.' },
      { n: '05', label: 'Le jour même', sub: 'Fiche cliente ouverte : formule couleur, allergies. Solde encaissé.' },
      { n: '06', label: 'La suite', sub: 'Prochaine date proposée. Les annulations vont à la liste d’attente.', accent: true },
    ], caption: 'Figure 1 · Un salon perd de l’argent à deux endroits : quand la durée est fausse (le moment 01), et quand la cliente ne vient pas (03 et 04). L’acompte et les rappels ferment le second ; un agenda par employée ferme le premier.', alt: 'Six moments : prestation choisie avec sa durée réelle, créneau sur l’agenda de la bonne employée, acompte en ligne, rappels deux jours et trois heures avant, fiche cliente et solde le jour même, prochaine date proposée et liste d’attente.' },
    noshow: { title: 'Un salon de quatre coiffeuses : ce que coûtent les absences', items: [
      { value: '624', label: 'rendez-vous par mois : 4 coiffeuses × 6 par jour × 26 jours' },
      { value: '94', label: 'fauteuils vides si 15 % des clientes ne viennent pas' },
      { value: '31', label: 'si l’acompte et les rappels ramènent l’absence à 5 %' },
      { value: '+ 63', label: 'rendez-vous honorés par mois, ≈ 189 000 DA à 3 000 DA', accent: true },
    ], caption: 'Figure 2 · Un exemple de calcul sur des hypothèses, pas une mesure du marché algérien : 15 % d’absences au départ, 5 % à l’arrivée, 3 000 DA le rendez-vous moyen. Refaites-le avec vos chiffres : c’est ce calcul qui dit si l’outil se paie.', alt: 'Exemple de calcul : 624 rendez-vous par mois pour quatre coiffeuses ; 94 fauteuils vides avec 15 % d’absences ; 31 si l’absence tombe à 5 % ; 63 rendez-vous honorés en plus, environ 189 000 dinars par mois à 3 000 dinars le rendez-vous.' },
    stack: { title: 'Ce qu’il faut construire : l’outil du salon d’abord', layers: [
      { label: 'Côté cliente', items: [
        { name: 'Page de réservation', sub: 'arabe, français ; sur téléphone ; sans créer de compte' },
        { name: 'Acompte', sub: 'CIB, Edahabia, ou en euros pour la diaspora' },
      ] },
      { label: 'Plateforme', items: [
        { name: 'Agenda par employée et par cabine', sub: 'durées réelles, pauses, jours de congé' },
        { name: 'Règles d’acompte', sub: 'par prestation, par nouvelle cliente, par saison' },
        { name: 'Rappels, liste d’attente', sub: 'WhatsApp ou SMS ; une place libérée se remplit' },
      ] },
      { label: 'Côté salon', items: [
        { name: 'Fiche cliente privée', sub: 'formules, allergies ; photos jamais publiées sans accord', accent: true },
        { name: 'Caisse et solde', sub: 'acompte déduit, reçu, journée clôturée' },
        { name: 'Équipe', sub: 'commissions, planning, accès par rôle' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur à votre nom, données protégées', sub: 'sauvegardes quotidiennes ; les numéros et les fiches des clientes ne sortent pas du salon' }] },
    ], caption: 'Figure 3 · La page de réservation ne vaut que ce que vaut l’agenda. Si les rendez-vous pris au téléphone restent dans un cahier, la page vend des créneaux déjà occupés, et la cliente arrive pour rien.', alt: 'Quatre couches : côté cliente la page de réservation et l’acompte ; la plateforme avec l’agenda par employée et par cabine, les règles d’acompte, les rappels et la liste d’attente ; côté salon la fiche cliente privée, la caisse et l’équipe ; un socle avec serveur à votre nom et données protégées.' },
    bride: { title: 'Une mariée qui vit en France et se marie en Algérie', unit: 'semaines', items: [
      { label: 'Forfait réservé, un acompte', note: 'coiffure, maquillage, henné, tenues', from: 0, to: 2 },
      { label: 'Choix sur photos et en visio', note: 'looks, couleurs, ordre de la tesdira', from: 2, to: 12 },
      { label: 'Chaque prestataire confirme', note: 'date, heure, lieu ; solde par prestataire', from: 12, to: 22 },
      { label: 'Arrivée, essai au salon', note: 'trois semaines avant, si le calendrier le permet', from: 22, to: 23 },
      { label: 'Hammam, soins, henné', note: 'la semaine du mariage', from: 24, to: 25 },
      { label: 'Le jour J', note: 'coiffure et maquillage, changements de tenue', from: 25, to: 26, accent: true },
    ], caption: 'Figure 4 · Semaine 0 = la réservation, depuis la France, environ six mois avant ; semaine 26 = le mariage. Cinq prestataires, cinq dates, un seul acompte : c’est un problème de coordination, et c’est là que l’agenda partagé rapporte le plus.', alt: 'Calendrier en semaines : forfait réservé avec un acompte de 0 à 2, choix sur photos et en visio de 2 à 12, confirmation de chaque prestataire de 12 à 22, arrivée et essai de 22 à 23, hammam, soins et henné de 24 à 25, le jour du mariage de 25 à 26.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Un salon ou une chaîne, sa propre réservation', cells: ['Clientes en direct, acompte, aucune commission', 'Un agenda tenu à côté : double réservation'] },
      { label: 'Logiciel par abonnement pour salons (SaaS)', cells: ['Un abonnement mensuel par salon', 'Vendre et former salon par salon, sur place'] },
      { label: 'Annuaire de réservation (type Planity)', cells: ['Visibilité, commission ou abonnement', 'Créneaux faux si les salons n’ont pas d’agenda'] },
      { label: 'Forfaits mariée multi-prestataires', cells: ['Gros panier, acomptes des mois à l’avance', 'Un prestataire qui lâche, et le forfait tombe'] },
      { label: 'Prestations à domicile', cells: ['Mariées, mères de famille, quartiers éloignés', 'Trajets et planning tenus au téléphone'] },
      { label: 'Hammams et spas : créneaux, cabines', cells: ['Remplir les heures creuses de la semaine', 'Capacité par cabine, horaires femmes et hommes'] },
    ], caption: 'Figure 5 · Les six modèles reposent sur le même socle : un agenda juste par employée et un acompte. Nous conseillons de commencer par la première ligne, puis d’ouvrir le logiciel à d’autres salons ; l’annuaire vient en dernier.', alt: 'Matrice de six modèles : salon ou chaîne avec sa propre réservation, logiciel par abonnement pour salons, annuaire de réservation, forfaits mariée multi-prestataires, prestations à domicile, hammams et spas ; pour chacun ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France #09', title: ['Building the Planity', 'of Algeria', 'in 2027.'], subtitle: 'The calendar, a deposit against no-shows, bridal packages: what to build, and in what order.', left: { label: 'The booking', sub: 'Paris, Lyon, Marseille, or next door' }, right: { label: 'The chair', sub: 'Algiers, Oran, Sétif, Constantine' }, note: 'France · Algeria · 2027' },
    journey: { title: 'A salon appointment, in six moments', items: [
      { n: '01', label: 'The service', sub: 'Chosen with its real length: a colour takes 2.5 hours, not 30 minutes.' },
      { n: '02', label: 'The right person', sub: 'The slot is taken on that stylist’s or that room’s calendar.' },
      { n: '03', label: 'The deposit', sub: 'CIB, Edahabia, or in euros from France. The slot is held.' },
      { n: '04', label: 'Reminders', sub: 'Two days and three hours before, on WhatsApp or SMS: confirm or release.' },
      { n: '05', label: 'On the day', sub: 'Client card open: colour formula, allergies. Balance paid.' },
      { n: '06', label: 'Next time', sub: 'Next date offered. A cancellation filled from the waiting list.', accent: true },
    ], caption: 'Figure 1 · A salon loses money in two places: when the length is wrong (moment 01), and when the client does not come (03 and 04). The deposit and reminders close the second; a calendar per employee closes the first.', alt: 'Six moments: service chosen with its real length, slot on the right employee’s calendar, online deposit, reminders two days and three hours before, client card and balance on the day, next date offered and waiting list.' },
    noshow: { title: 'A salon with four stylists: what no-shows cost', items: [
      { value: '624', label: 'appointments a month: 4 stylists × 6 a day × 26 days' },
      { value: '94', label: 'empty chairs if 15% of clients do not show up' },
      { value: '31', label: 'if the deposit and reminders bring no-shows to 5%' },
      { value: '+63', label: 'kept appointments a month, ≈ DA 189,000 at DA 3,000', accent: true },
    ], caption: 'Figure 2 · A worked example on assumptions, not a measure of the Algerian market: 15% no-shows before, 5% after, DA 3,000 for the average appointment. Run it with your own numbers: this calculation tells you whether the tool pays for itself.', alt: 'Worked example: 624 appointments a month for four stylists; 94 empty chairs with 15% no-shows; 31 if no-shows fall to 5%; 63 more kept appointments, about 189,000 dinars a month at 3,000 dinars per appointment.' },
    stack: { title: 'What to build: the salon’s tool first', layers: [
      { label: 'Client side', items: [
        { name: 'Booking page', sub: 'Arabic, French; on a phone; no account needed' },
        { name: 'Deposit', sub: 'CIB, Edahabia, or euros for the diaspora' },
      ] },
      { label: 'Platform', items: [
        { name: 'Calendar per employee and per room', sub: 'real lengths, breaks, days off' },
        { name: 'Deposit rules', sub: 'per service, per new client, per season' },
        { name: 'Reminders, waiting list', sub: 'WhatsApp or SMS; a released slot gets filled' },
      ] },
      { label: 'Salon side', items: [
        { name: 'Private client card', sub: 'formulas, allergies; photos never published without consent', accent: true },
        { name: 'Till and balance', sub: 'deposit deducted, receipt, day closed' },
        { name: 'Team', sub: 'commissions, schedule, role-based access' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server in your name, protected data', sub: 'daily backups; clients’ numbers and cards never leave the salon' }] },
    ], caption: 'Figure 3 · The booking page is only as good as the calendar. If phone bookings stay in a notebook, the page sells slots that are already taken, and the client comes for nothing.', alt: 'Four layers: client side booking page and deposit; platform with a calendar per employee and per room, deposit rules, reminders and waiting list; salon side private client card, till and team; a foundation with a server in your name and protected data.' },
    bride: { title: 'A bride who lives in France and marries in Algeria', unit: 'weeks', items: [
      { label: 'Package booked, one deposit', note: 'hair, make-up, henna, outfits', from: 0, to: 2 },
      { label: 'Choices on photos, by video', note: 'looks, colours, order of the tesdira', from: 2, to: 12 },
      { label: 'Each provider confirms', note: 'date, time, place; balance per provider', from: 12, to: 22 },
      { label: 'Arrival, trial at the salon', note: 'three weeks before, if the calendar allows', from: 22, to: 23 },
      { label: 'Hammam, treatments, henna', note: 'the wedding week', from: 24, to: 25 },
      { label: 'The day', note: 'hair and make-up, outfit changes', from: 25, to: 26, accent: true },
    ], caption: 'Figure 4 · Week 0 = the booking, from France, about six months before; week 26 = the wedding. Five providers, five dates, one deposit: it is a coordination problem, and that is where a shared calendar pays most.', alt: 'Calendar in weeks: package booked with one deposit from 0 to 2, choices on photos and by video from 2 to 12, each provider confirms from 12 to 22, arrival and trial from 22 to 23, hammam, treatments and henna from 24 to 25, the wedding day from 25 to 26.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One salon or a chain, its own booking', cells: ['Clients direct, deposit, no commission', 'A calendar kept on the side: double booking'] },
      { label: 'Subscription software for salons (SaaS)', cells: ['A monthly subscription per salon', 'Selling and training salon by salon, on site'] },
      { label: 'Booking directory (Planity type)', cells: ['Visibility, commission or subscription', 'False slots if salons have no calendar'] },
      { label: 'Multi-provider bridal packages', cells: ['Large basket, deposits months ahead', 'One provider drops out, the package falls'] },
      { label: 'Home services', cells: ['Brides, mothers, distant neighbourhoods', 'Trips and schedule kept on the phone'] },
      { label: 'Hammams and spas: slots, rooms', cells: ['Filling the quiet hours of the week', 'Capacity per room, women’s and men’s hours'] },
    ], caption: 'Figure 5 · All six models stand on the same base: a true calendar per employee and a deposit. We advise starting with the first row, then opening the software to other salons; the directory comes last.', alt: 'Matrix of six models: salon or chain with its own booking, subscription software for salons, booking directory, multi-provider bridal packages, home services, hammams and spas; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا #09', title: ['إنشاء مقابل Planity', 'في الجزائر', 'سنة 2027.'], subtitle: 'الرزنامة، العربون ضد الغياب، باقات العرائس: ما يُبنى وبأي ترتيب.', left: { label: 'الحجز', sub: 'باريس، ليون، مرسيليا، أو الحي' }, right: { label: 'الكرسي', sub: 'الجزائر، وهران، سطيف، قسنطينة' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'موعد في الصالون في ست لحظات', items: [
      { n: '01', label: 'الخدمة', sub: 'تُختار بمدتها الحقيقية: الصباغة ساعتان ونصف لا ثلاثون دقيقة.' },
      { n: '02', label: 'الشخص المناسب', sub: 'يؤخذ الموعد على رزنامة الحلاقة أو القاعة المعنية.' },
      { n: '03', label: 'العربون', sub: 'CIB أو الذهبية أو باليورو من فرنسا. الموعد محجوز.' },
      { n: '04', label: 'التذكير', sub: 'قبل يومين وقبل ثلاث ساعات عبر واتساب أو SMS: تأكيد أو تحرير.' },
      { n: '05', label: 'يوم الموعد', sub: 'بطاقة الزبونة مفتوحة: تركيبة اللون، الحساسية. الباقي مدفوع.' },
      { n: '06', label: 'ما بعد', sub: 'يُقترح الموعد القادم. والإلغاء تملؤه قائمة الانتظار.', accent: true },
    ], caption: 'الشكل 1 · يخسر الصالون المال في موضعين: عندما تكون المدة خاطئة (اللحظة 01)، وعندما لا تأتي الزبونة (03 و04). العربون والتذكير يسدّان الثاني، ورزنامة لكل عاملة تسدّ الأول.', alt: 'ست لحظات: خدمة تُختار بمدتها الحقيقية، موعد على رزنامة العاملة المناسبة، عربون عبر الإنترنت، تذكير قبل يومين وقبل ثلاث ساعات، بطاقة الزبونة والباقي يوم الموعد، اقتراح الموعد القادم وقائمة الانتظار.' },
    noshow: { title: 'صالون بأربع حلاقات: كم يكلّف الغياب', items: [
      { value: '624', label: 'موعداً في الشهر: 4 حلاقات × 6 يومياً × 26 يوماً' },
      { value: '94', label: 'كرسياً فارغاً إذا غابت 15 % من الزبونات' },
      { value: '31', label: 'إذا خفّض العربون والتذكير الغياب إلى 5 %' },
      { value: '+ 63', label: 'موعداً إضافياً في الشهر، نحو 189 000 دج', accent: true },
    ], caption: 'الشكل 2 · مثال حساب على فرضيات، وليس قياساً للسوق الجزائرية: 15 % غياب في البداية، 5 % بعدها، و3 000 دج متوسط الموعد. أعد الحساب بأرقامك: هذا الحساب هو الذي يقول هل تسدّد الأداة تكلفتها.', alt: 'مثال حساب: 624 موعداً في الشهر لأربع حلاقات؛ 94 كرسياً فارغاً مع 15 % غياب؛ 31 إذا انخفض الغياب إلى 5 %؛ 63 موعداً إضافياً أي نحو 189 000 دينار شهرياً بـ3 000 دينار للموعد.' },
    stack: { title: 'ما يجب بناؤه: أداة الصالون أولاً', layers: [
      { label: 'جهة الزبونة', items: [
        { name: 'صفحة الحجز', sub: 'بالعربية والفرنسية، على الهاتف، دون إنشاء حساب' },
        { name: 'العربون', sub: 'CIB أو الذهبية، أو باليورو للجالية' },
      ] },
      { label: 'المنصة', items: [
        { name: 'رزنامة لكل عاملة ولكل قاعة', sub: 'مدد حقيقية، استراحات، أيام عطلة' },
        { name: 'قواعد العربون', sub: 'حسب الخدمة، الزبونة الجديدة، الموسم' },
        { name: 'التذكير وقائمة الانتظار', sub: 'واتساب أو SMS؛ الموعد المحرَّر يُملأ' },
      ] },
      { label: 'جهة الصالون', items: [
        { name: 'بطاقة زبونة خاصة', sub: 'التركيبات، الحساسية؛ لا صور تُنشر دون موافقة', accent: true },
        { name: 'الصندوق والباقي', sub: 'خصم العربون، وصل، إغلاق اليوم' },
        { name: 'الفريق', sub: 'العمولات، الجدول، صلاحيات حسب الدور' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم باسمك وبيانات محمية', sub: 'نسخ احتياطي يومي؛ أرقام الزبونات وبطاقاتهن لا تخرج من الصالون' }] },
    ], caption: 'الشكل 3 · صفحة الحجز لا تساوي أكثر من الرزنامة. إذا بقيت المواعيد المأخوذة بالهاتف في دفتر، تبيع الصفحة مواعيد مشغولة وتأتي الزبونة دون فائدة.', alt: 'أربع طبقات: جهة الزبونة بصفحة الحجز والعربون؛ المنصة برزنامة لكل عاملة ولكل قاعة وقواعد العربون والتذكير وقائمة الانتظار؛ جهة الصالون ببطاقة الزبونة الخاصة والصندوق والفريق؛ قاعدة بخادم باسمك وبيانات محمية.' },
    bride: { title: 'عروس تعيش في فرنسا وتتزوج في الجزائر', unit: 'أسبوع', items: [
      { label: 'حجز الباقة بعربون واحد', note: 'الشعر، المكياج، الحنة، الألبسة', from: 0, to: 2 },
      { label: 'الاختيار بالصور والفيديو', note: 'الإطلالات، الألوان، ترتيب التصديرة', from: 2, to: 12 },
      { label: 'تأكيد كل مقدّم خدمة', note: 'التاريخ، الساعة، المكان؛ الباقي لكل واحد', from: 12, to: 22 },
      { label: 'الوصول وتجربة في الصالون', note: 'قبل ثلاثة أسابيع إن سمح الجدول', from: 22, to: 23 },
      { label: 'الحمام، العناية، الحنة', note: 'أسبوع العرس', from: 24, to: 25 },
      { label: 'يوم العرس', note: 'الشعر والمكياج وتغيير الألبسة', from: 25, to: 26, accent: true },
    ], caption: 'الشكل 4 · الأسبوع 0 = الحجز من فرنسا قبل نحو ستة أشهر؛ الأسبوع 26 = العرس. خمسة مقدّمي خدمات، خمسة تواريخ، عربون واحد: إنها مشكلة تنسيق، وهنا تربح الرزنامة المشتركة أكثر.', alt: 'جدول بالأسابيع: حجز الباقة بعربون واحد من 0 إلى 2، الاختيار بالصور والفيديو من 2 إلى 12، تأكيد كل مقدّم خدمة من 12 إلى 22، الوصول والتجربة من 22 إلى 23، الحمام والعناية والحنة من 24 إلى 25، يوم العرس من 25 إلى 26.' },
    models: { title: 'أي نموذج تبني: ما يربح وما ينكسر', columns: ['ما يربح', 'ما ينكسر'], rows: [
      { label: 'صالون أو سلسلة بحجزها الخاص', cells: ['زبونات مباشرة، عربون، دون عمولة', 'رزنامة جانبية: حجز مزدوج'] },
      { label: 'برنامج باشتراك للصالونات (SaaS)', cells: ['اشتراك شهري لكل صالون', 'البيع والتكوين صالوناً بصالون في عين المكان'] },
      { label: 'دليل حجز (نوع Planity)', cells: ['ظهور، عمولة أو اشتراك', 'مواعيد خاطئة إذا لم تكن للصالونات رزنامة'] },
      { label: 'باقات عرائس متعددة المقدّمين', cells: ['سلة كبيرة، عرابين قبل أشهر', 'مقدّم ينسحب فتسقط الباقة'] },
      { label: 'خدمات في المنزل', cells: ['عرائس، أمهات، أحياء بعيدة', 'التنقلات والجدول على الهاتف'] },
      { label: 'حمامات وسبا: مواعيد وقاعات', cells: ['ملء الساعات الهادئة في الأسبوع', 'سعة كل قاعة، أوقات النساء والرجال'] },
    ], caption: 'الشكل 5 · النماذج الستة تقوم على القاعدة نفسها: رزنامة صحيحة لكل عاملة وعربون. ننصح بالبدء بالسطر الأول، ثم فتح البرنامج لصالونات أخرى؛ الدليل يأتي في الأخير.', alt: 'مصفوفة ستة نماذج: صالون أو سلسلة بحجزها الخاص، برنامج باشتراك للصالونات، دليل حجز، باقات عرائس متعددة المقدّمين، خدمات في المنزل، حمامات وسبا؛ ولكل منها ما يربح وما ينكسر.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      journey: { svg: steps({ title: t.journey.title, steps: t.journey.items, arrows: true, rtl }), caption: t.journey.caption, alt: t.journey.alt },
      noshow: { svg: stats({ title: t.noshow.title, items: t.noshow.items, rtl }), caption: t.noshow.caption, alt: t.noshow.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      bride: { svg: timeline({ title: t.bride.title, items: t.bride.items, total: 26, tick: 2, unit: t.bride.unit, rtl }), caption: t.bride.caption, alt: t.bride.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
