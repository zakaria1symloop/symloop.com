import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora';
const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France #13', title: ['Créer une plateforme', 'de cours de soutien', 'en Algérie en 2027.'], subtitle: 'Prof vérifié, groupe limité, séance suivie, paiement tracé : du bac à Alger à l’arabe pour la diaspora.', left: { label: 'L’élève', sub: 'à Sétif avant le bac, ou à Lyon le mercredi' }, right: { label: 'Le prof', sub: 'écoles de soutien, profs, centres' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Un cours de soutien qui tient, en six moments', items: [
      { n: '01', label: 'Le besoin', sub: 'Niveau, matière, objectif : BEM, bac, langue.' },
      { n: '02', label: 'Le choix du prof', sub: 'Profil vérifié, avis de parents, cours d’essai.' },
      { n: '03', label: 'Groupe et horaire', sub: 'Taille plafonnée, en salle ou en ligne, créneau fixe.' },
      { n: '04', label: 'Le paiement', sub: 'Au mois : espèces tracées, CIB, Edahabia, euros.' },
      { n: '05', label: 'Le suivi', sub: 'Présence, devoir, deux lignes envoyées aux parents.' },
      { n: '06', label: 'Le résultat', sub: 'Examens blancs, progression, réinscription.', accent: true },
    ], caption: 'Figure 1 · Le moment que presque tout le monde saute est le 05. Les parents paient chaque mois sans savoir si leur enfant était là ni ce qu’il a fait. Deux lignes après chaque séance changent ce qu’ils acceptent de payer, et s’ils reviennent l’année suivante.', alt: 'Six moments : le besoin avec niveau, matière et objectif ; le choix d’un prof vérifié avec avis et cours d’essai ; le groupe plafonné en salle ou en ligne ; le paiement mensuel en espèces tracées, CIB, Edahabia ou euros ; le suivi avec présence, devoir et message aux parents ; le résultat avec examens blancs et réinscription.' },
    stack: { title: 'Ce qu’il faut construire : le suivi de séance d’abord', layers: [
      { label: 'Parents et élèves', items: [
        { name: 'Application parents', sub: 'présences, comptes rendus, paiement, messages' },
        { name: 'Classe en ligne', sub: 'vidéo, tableau, devoirs, séance enregistrée' },
      ] },
      { label: 'Plateforme', items: [
        { name: 'Profils vérifiés', sub: 'diplômes, cours d’essai, avis de parents' },
        { name: 'Suivi de séance', sub: 'présence, devoir, note aux parents en deux minutes', accent: true },
        { name: 'Paiements et parts', sub: 'mois payés, relances, part du prof' },
      ] },
      { label: 'École ou centre', items: [
        { name: 'Groupes et planning', sub: 'salles, créneaux, taille, rattrapages' },
        { name: 'Examens blancs', sub: 'sujets, notes, progression par élève' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur et données à votre nom', sub: 'données de mineurs protégées ; arabe, français ; loi 18-07 sur les données personnelles' }] },
    ], caption: 'Figure 2 · Le suivi de séance est la seule fonction que le prof utilise après chaque cours ; s’il prend plus de deux minutes, il ne sera pas fait. Tout le reste en dépend : l’application des parents, les relances de paiement et la réinscription.', alt: 'Quatre couches : parents et élèves avec l’application parents et la classe en ligne ; la plateforme avec les profils vérifiés, le suivi de séance et les paiements ; l’école ou le centre avec les groupes et les examens blancs ; le socle, serveur et données au nom du client.' },
    impayes: { title: 'Un centre de 300 inscriptions : ce que coûtent les mois non payés', items: [
      { value: '600 000', label: 'DA par mois : 300 inscriptions à 2 000 DA (hypothèse)' },
      { value: '90 000', label: 'DA non payés ou en retard chaque mois : 15 % (hypothèse)' },
      { value: '30 000', label: 'DA avec relance, paiement en ligne et suivi : 5 %' },
      { value: '540 000', label: 'DA récupérés sur neuf mois d’année scolaire', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : 2 000 DA par mois et par matière, 15 % puis 5 % de mois non payés ou en retard. Refaites-le avec vos chiffres : combien d’inscriptions au 1er du mois, combien encore impayées le 15.', alt: 'Exemple de calcul pour un centre de 300 inscriptions à 2 000 DA par mois : 600 000 DA attendus ; 90 000 DA non payés ou en retard à 15 % ; 30 000 DA à 5 % avec relance, paiement en ligne et suivi ; 540 000 DA récupérés sur neuf mois. Les taux sont des hypothèses.' },
    parents: { title: 'Six choses que les parents ignorent, six réponses dans l’outil', columns: ['Aujourd’hui', 'Dans la plateforme'], rows: [
      { label: 'Le prof est-il qualifié ?', cells: ['Le bouche-à-oreille du quartier', 'Diplôme vérifié, avis, cours d’essai'] },
      { label: 'Mon enfant était-il là ?', cells: ['On le découvre au bulletin', 'Présence notée, message le jour même'] },
      { label: 'Qu’a-t-il fait pendant la séance ?', cells: ['« On a fait des exercices »', 'Chapitre, devoir, remarque du prof'] },
      { label: 'Combien sont-ils dans le groupe ?', cells: ['Trente dans un garage, parfois', 'Taille plafonnée, affichée à l’inscription'] },
      { label: 'Où en est-il avant l’examen ?', cells: ['Une impression, pas une note', 'Examens blancs, courbe de progression'] },
      { label: 'Ai-je payé ce mois-ci ?', cells: ['Reçu perdu, discussion à la porte', 'Mois payés, reçus, rappel avant échéance'] },
    ], caption: 'Figure 4 · Chacune de ces réponses tient en une ligne de données saisie par le prof ou l’accueil. C’est ce qui distingue une école de soutien sérieuse du cours donné au hasard, et ce qui justifie son prix aux yeux des parents.', alt: 'Matrice de six questions de parents : le prof est-il qualifié, mon enfant était-il là, qu’a-t-il fait pendant la séance, combien sont-ils dans le groupe, où en est-il avant l’examen, ai-je payé ce mois-ci ; pour chacune, la situation actuelle et la réponse dans la plateforme.' },
    saison: { title: 'De novembre 2026 au bac de juin 2027, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, profils, vérification', note: 'reprise des élèves et des groupes', from: 0, to: 3 },
      { label: 'Groupes, planning, paiements', note: 'salles, créneaux, relances', from: 2, to: 8 },
      { label: 'Suivi de séance, parents', note: 'deux minutes par séance, pas plus', from: 5, to: 11 },
      { label: 'Pilote : vacances d’hiver', note: 'un centre, classes d’examen', from: 7, to: 12 },
      { label: 'Classe en ligne, diaspora', note: 'arabe le mercredi et le week-end', from: 12, to: 22 },
      { label: 'Révisions BEM et bac', note: 'examens blancs, stages intensifs', from: 22, to: 32, accent: true },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. Les vacances d’hiver, fin décembre, font un bon pilote avec les classes d’examen. Le Ramadan, attendu vers le 8 février, déplace les séances vers la soirée. Le bac se tient d’ordinaire mi-juin : date 2027 à confirmer par le ministère.', alt: 'Calendrier en semaines : cadrage, profils et vérification de 0 à 3 ; groupes, planning et paiements de 2 à 8 ; suivi de séance et application parents de 5 à 11 ; pilote pendant les vacances d’hiver de 7 à 12 ; classe en ligne et cours pour la diaspora de 12 à 22 ; révisions du BEM et du bac de 22 à 32.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Une école de soutien, son outil', cells: ['Réinscriptions, parents qui recommandent', 'Profs qui ne remplissent pas le suivi'] },
      { label: 'Réseau de centres', cells: ['Un niveau de qualité sous une marque', 'Profs et salles à coordonner'] },
      { label: 'Place de marché (type Superprof)', cells: ['Abonnement ou commission par cours', 'Les profs passent en direct après'] },
      { label: 'Arabe en ligne pour la diaspora', cells: ['Abonnement mensuel en euros', 'Rémunérer les profs, cadre à poser'] },
      { label: 'Contenus en ligne par abonnement', cells: ['Coût marginal faible par élève', 'Sans prof, l’élève décroche'] },
      { label: 'Stages intensifs avant le bac', cells: ['Forte demande sur six semaines', 'Une saison courte, des pics'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur le même socle : un prof vérifié, une séance suivie, un paiement tracé. Nous conseillons de commencer avec une école de soutien qui a déjà ses élèves, puis d’ouvrir les cours en ligne ; la place de marché vient quand la confiance est installée.', alt: 'Matrice de six modèles : une école de soutien avec son outil, un réseau de centres, une place de marché de profs, l’arabe en ligne pour la diaspora, des contenus en ligne par abonnement, des stages intensifs avant le bac ; pour chacun, ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France #13', title: ['Building a tutoring', 'platform', 'in Algeria in 2027.'], subtitle: 'Vetted tutor, capped group, tracked session, traced payment: the bac in Algiers, Arabic for the diaspora.', left: { label: 'The pupil', sub: 'in Sétif before the bac, or in Lyon on Wednesdays' }, right: { label: 'The tutor', sub: 'tutoring schools, tutors, centres' }, note: 'France · Algeria · 2027' },
    journey: { title: 'A tutoring course that holds, in six moments', items: [
      { n: '01', label: 'The need', sub: 'Level, subject, goal: BEM, bac, language.' },
      { n: '02', label: 'Choosing a tutor', sub: 'Vetted profile, parent reviews, trial lesson.' },
      { n: '03', label: 'Group and time', sub: 'Capped size, in a room or online, fixed slot.' },
      { n: '04', label: 'Payment', sub: 'Monthly: traced cash, CIB, Edahabia, euros.' },
      { n: '05', label: 'Follow-up', sub: 'Attendance, homework, two lines sent to parents.' },
      { n: '06', label: 'The result', sub: 'Mock exams, progress, re-enrolment.', accent: true },
    ], caption: 'Figure 1 · The moment almost everyone skips is 05. Parents pay every month without knowing whether their child was there or what they did. Two lines after each session change what they are willing to pay, and whether they come back next year.', alt: 'Six moments: the need with level, subject and goal; choosing a vetted tutor with reviews and a trial lesson; a capped group in a room or online; monthly payment in traced cash, CIB, Edahabia or euros; follow-up with attendance, homework and a message to parents; the result with mock exams and re-enrolment.' },
    stack: { title: 'What to build: session follow-up first', layers: [
      { label: 'Parents and pupils', items: [
        { name: 'Parent app', sub: 'attendance, session notes, payment, messages' },
        { name: 'Online classroom', sub: 'video, whiteboard, homework, recorded session' },
      ] },
      { label: 'Platform', items: [
        { name: 'Vetted profiles', sub: 'diplomas, trial lesson, parent reviews' },
        { name: 'Session follow-up', sub: 'attendance, homework, note to parents in two minutes', accent: true },
        { name: 'Payments and shares', sub: 'months paid, reminders, tutor’s share' },
      ] },
      { label: 'School or centre', items: [
        { name: 'Groups and schedule', sub: 'rooms, slots, size, make-up sessions' },
        { name: 'Mock exams', sub: 'papers, marks, progress per pupil' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server and data in your name', sub: 'minors’ data protected; Arabic, French; law 18-07 on personal data' }] },
    ], caption: 'Figure 2 · Session follow-up is the only feature the tutor uses after every lesson; if it takes more than two minutes, it will not be done. Everything else depends on it: the parent app, payment reminders and re-enrolment.', alt: 'Four layers: parents and pupils with the parent app and the online classroom; the platform with vetted profiles, session follow-up and payments; the school or centre with groups and mock exams; the foundation, server and data in the client’s name.' },
    impayes: { title: 'A centre with 300 enrolments: what unpaid months cost', items: [
      { value: '600,000', label: 'DA a month: 300 enrolments at 2,000 DA (assumption)' },
      { value: '90,000', label: 'DA unpaid or late each month: 15% (assumption)' },
      { value: '30,000', label: 'DA with reminders, online payment and follow-up: 5%' },
      { value: '540,000', label: 'DA recovered over a nine-month school year', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: 2,000 DA per month per subject, 15% then 5% of months unpaid or late. Run it with your own figures: how many enrolments on the 1st of the month, how many still unpaid on the 15th.', alt: 'Worked example for a centre with 300 enrolments at 2,000 DA a month: 600,000 DA expected; 90,000 DA unpaid or late at 15%; 30,000 DA at 5% with reminders, online payment and follow-up; 540,000 DA recovered over nine months. The rates are assumptions.' },
    parents: { title: 'Six things parents do not know, six answers in the tool', columns: ['Today', 'In the platform'], rows: [
      { label: 'Is the tutor qualified?', cells: ['Neighbourhood word of mouth', 'Diploma checked, reviews, trial lesson'] },
      { label: 'Was my child there?', cells: ['Found out on the school report', 'Attendance taken, message the same day'] },
      { label: 'What did they do in the session?', cells: ['“We did exercises”', 'Chapter, homework, tutor’s remark'] },
      { label: 'How many are in the group?', cells: ['Thirty in a garage, sometimes', 'Capped size, shown at enrolment'] },
      { label: 'Where are they before the exam?', cells: ['An impression, not a mark', 'Mock exams, progress curve'] },
      { label: 'Have I paid this month?', cells: ['Lost receipt, argument at the door', 'Months paid, receipts, reminder before due'] },
    ], caption: 'Figure 4 · Each of these answers is one line of data entered by the tutor or the front desk. That is what separates a serious tutoring school from a lesson given at random, and what justifies its price in parents’ eyes.', alt: 'Matrix of six parent questions: is the tutor qualified, was my child there, what did they do in the session, how many are in the group, where are they before the exam, have I paid this month; for each, today’s situation and the answer in the platform.' },
    saison: { title: 'From November 2026 to the June 2027 bac, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, profiles, vetting', note: 'importing pupils and groups', from: 0, to: 3 },
      { label: 'Groups, schedule, payments', note: 'rooms, slots, reminders', from: 2, to: 8 },
      { label: 'Session follow-up, parents', note: 'two minutes per session, no more', from: 5, to: 11 },
      { label: 'Pilot: winter holidays', note: 'one centre, exam classes', from: 7, to: 12 },
      { label: 'Online classroom, diaspora', note: 'Arabic on Wednesdays and weekends', from: 12, to: 22 },
      { label: 'BEM and bac revision', note: 'mock exams, intensive courses', from: 22, to: 32, accent: true },
    ], caption: 'Figure 5 · Week 0 = early November 2026. The winter holidays at the end of December make a good pilot with exam classes. Ramadan, expected around 8 February, moves sessions into the evening. The bac is usually held in mid-June: the 2027 date is to be confirmed by the ministry.', alt: 'Calendar in weeks: scoping, profiles and vetting from 0 to 3; groups, schedule and payments from 2 to 8; session follow-up and parent app from 5 to 11; pilot during the winter holidays from 7 to 12; online classroom and diaspora courses from 12 to 22; BEM and bac revision from 22 to 32.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One tutoring school, its own tool', cells: ['Re-enrolments, parents who recommend', 'Tutors who skip the follow-up'] },
      { label: 'A network of centres', cells: ['One quality level under one brand', 'Tutors and rooms to coordinate'] },
      { label: 'Marketplace (Superprof type)', cells: ['Subscription or commission per lesson', 'Tutors go direct afterwards'] },
      { label: 'Online Arabic for the diaspora', cells: ['Monthly subscription in euros', 'Paying tutors, a framework to set'] },
      { label: 'Online content by subscription', cells: ['Low marginal cost per pupil', 'Without a tutor, pupils drop off'] },
      { label: 'Intensive bac courses', cells: ['Strong demand over six weeks', 'A short season, with peaks'] },
    ], caption: 'Figure 6 · All six models rest on the same base: a vetted tutor, a tracked session, a traced payment. We advise starting with a tutoring school that already has its pupils, then opening online classes; the marketplace comes once trust is in place.', alt: 'Matrix of six models: one tutoring school with its tool, a network of centres, a tutor marketplace, online Arabic for the diaspora, online content by subscription, intensive bac courses; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا #13', title: ['إنشاء منصة', 'لدروس الدعم', 'في الجزائر سنة 2027.'], subtitle: 'أستاذ موثَّق، فوج محدود، حصة متابَعة، دفع متتبَّع: من البكالوريا في العاصمة إلى العربية لأبناء الجالية.', left: { label: 'التلميذ', sub: 'في سطيف قبل البكالوريا، أو في ليون يوم الأربعاء' }, right: { label: 'الأستاذ', sub: 'مدارس الدعم، أساتذة، مراكز' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'درس دعم يصمد، في ست لحظات', items: [
      { n: '01', label: 'الحاجة', sub: 'المستوى، المادة، الهدف: المتوسط، البكالوريا، لغة.' },
      { n: '02', label: 'اختيار الأستاذ', sub: 'ملف موثَّق، آراء الأولياء، حصة تجريبية.' },
      { n: '03', label: 'الفوج والتوقيت', sub: 'عدد محدود، في القاعة أو عن بُعد، وقت ثابت.' },
      { n: '04', label: 'الدفع', sub: 'شهرياً: نقد متتبَّع، CIB، الذهبية، اليورو.' },
      { n: '05', label: 'المتابعة', sub: 'الحضور، الواجب، سطران يُرسلان للأولياء.' },
      { n: '06', label: 'النتيجة', sub: 'امتحانات تجريبية، التقدّم، إعادة التسجيل.', accent: true },
    ], caption: 'الشكل 1 · اللحظة التي يتخطّاها الجميع تقريباً هي 05. يدفع الأولياء كل شهر دون أن يعرفوا هل حضر ابنهم ولا ماذا فعل. سطران بعد كل حصة يغيّران ما يقبلون دفعه، وهل يعودون في السنة التالية.', alt: 'ست لحظات: الحاجة بالمستوى والمادة والهدف؛ اختيار أستاذ موثَّق بآراء وحصة تجريبية؛ فوج محدود في القاعة أو عن بُعد؛ دفع شهري نقداً متتبَّعاً أو بـCIB أو الذهبية أو اليورو؛ المتابعة بالحضور والواجب ورسالة للأولياء؛ النتيجة بامتحانات تجريبية وإعادة التسجيل.' },
    stack: { title: 'ما يجب بناؤه: متابعة الحصة أولاً', layers: [
      { label: 'الأولياء والتلاميذ', items: [
        { name: 'تطبيق الأولياء', sub: 'الحضور، ملخصات الحصص، الدفع، الرسائل' },
        { name: 'القسم عن بُعد', sub: 'فيديو، سبورة، واجبات، حصة مسجَّلة' },
      ] },
      { label: 'المنصة', items: [
        { name: 'ملفات موثَّقة', sub: 'الشهادات، حصة تجريبية، آراء الأولياء' },
        { name: 'متابعة الحصة', sub: 'الحضور، الواجب، ملاحظة للأولياء في دقيقتين', accent: true },
        { name: 'المدفوعات والحصص', sub: 'الأشهر المدفوعة، التذكير، حصة الأستاذ' },
      ] },
      { label: 'المدرسة أو المركز', items: [
        { name: 'الأفواج والتخطيط', sub: 'القاعات، الأوقات، العدد، الاستدراك' },
        { name: 'الامتحانات التجريبية', sub: 'المواضيع، العلامات، تقدّم كل تلميذ' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم وبيانات باسمك', sub: 'معطيات القصّر محمية؛ عربية وفرنسية؛ القانون 18-07 للمعطيات الشخصية' }] },
    ], caption: 'الشكل 2 · متابعة الحصة هي الوظيفة الوحيدة التي يستعملها الأستاذ بعد كل درس؛ إن تجاوزت دقيقتين فلن تُنجز. وكل الباقي يتوقف عليها: تطبيق الأولياء، وتذكيرات الدفع، وإعادة التسجيل.', alt: 'أربع طبقات: الأولياء والتلاميذ بتطبيق الأولياء والقسم عن بُعد؛ المنصة بالملفات الموثَّقة ومتابعة الحصة والمدفوعات؛ المدرسة أو المركز بالأفواج والامتحانات التجريبية؛ القاعدة، خادم وبيانات باسم الزبون.' },
    impayes: { title: 'مركز بـ300 تسجيل: كم تكلّف الأشهر غير المدفوعة', items: [
      { value: '600000', label: 'دج في الشهر: 300 تسجيل بـ2000 دج (فرضية)' },
      { value: '90000', label: 'دج غير مدفوعة أو متأخرة كل شهر: 15 % (فرضية)' },
      { value: '30000', label: 'دج مع التذكير والدفع الإلكتروني والمتابعة: 5 %' },
      { value: '540000', label: 'دج مسترجعة خلال تسعة أشهر من السنة الدراسية', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس: 2000 دج في الشهر لكل مادة، و15 % ثم 5 % أشهر غير مدفوعة أو متأخرة. أعده بأرقامك: كم تسجيلاً في أول الشهر، وكم بقي غير مدفوع يوم 15.', alt: 'مثال حساب لمركز بـ300 تسجيل بـ2000 دج في الشهر: 600000 دج منتظرة؛ 90000 دج غير مدفوعة أو متأخرة بنسبة 15 %؛ 30000 دج بنسبة 5 % مع التذكير والدفع الإلكتروني والمتابعة؛ 540000 دج مسترجعة خلال تسعة أشهر. النسب فرضيات.' },
    parents: { title: 'ستة أشياء يجهلها الأولياء، وستة أجوبة في الأداة', columns: ['اليوم', 'في المنصة'], rows: [
      { label: 'هل الأستاذ مؤهَّل؟', cells: ['كلام الحي', 'شهادة موثَّقة، آراء، حصة تجريبية'] },
      { label: 'هل حضر ابني؟', cells: ['نكتشف ذلك في كشف النقاط', 'حضور مسجَّل، رسالة في اليوم نفسه'] },
      { label: 'ماذا فعل في الحصة؟', cells: ['«قمنا بتمارين»', 'الفصل، الواجب، ملاحظة الأستاذ'] },
      { label: 'كم عددهم في الفوج؟', cells: ['ثلاثون في مرآب أحياناً', 'عدد محدود، معلن عند التسجيل'] },
      { label: 'أين وصل قبل الامتحان؟', cells: ['انطباع لا علامة', 'امتحانات تجريبية، منحنى التقدّم'] },
      { label: 'هل دفعت هذا الشهر؟', cells: ['وصل ضائع، نقاش عند الباب', 'الأشهر المدفوعة، الوصولات، تذكير مسبق'] },
    ], caption: 'الشكل 4 · كل جواب من هذه الأجوبة سطر من البيانات يُدخله الأستاذ أو الاستقبال. هذا ما يميّز مدرسة دعم جادة عن درس يُعطى كيفما اتفق، وما يبرّر سعرها في عيون الأولياء.', alt: 'مصفوفة ستة أسئلة للأولياء: هل الأستاذ مؤهَّل، هل حضر ابني، ماذا فعل في الحصة، كم عددهم في الفوج، أين وصل قبل الامتحان، هل دفعت هذا الشهر؛ ولكل منها الوضع الحالي والجواب في المنصة.' },
    saison: { title: 'من نوفمبر 2026 إلى بكالوريا جوان 2027، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير، الملفات، التوثيق', note: 'نقل التلاميذ والأفواج', from: 0, to: 3 },
      { label: 'الأفواج، التخطيط، الدفع', note: 'القاعات، الأوقات، التذكير', from: 2, to: 8 },
      { label: 'متابعة الحصة، الأولياء', note: 'دقيقتان لكل حصة، لا أكثر', from: 5, to: 11 },
      { label: 'تجربة: عطلة الشتاء', note: 'مركز واحد، أقسام الامتحانات', from: 7, to: 12 },
      { label: 'القسم عن بُعد، الجالية', note: 'العربية يوم الأربعاء ونهاية الأسبوع', from: 12, to: 22 },
      { label: 'مراجعة الشهادتين', note: 'امتحانات تجريبية، تربّصات مكثّفة', from: 22, to: 32, accent: true },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. عطلة الشتاء في نهاية ديسمبر تجربة جيدة مع أقسام الامتحانات. ورمضان، المنتظر نحو 8 فيفري، ينقل الحصص إلى المساء. وتُجرى البكالوريا عادة في منتصف جوان: تاريخ 2027 تؤكّده الوزارة.', alt: 'جدول بالأسابيع: التأطير والملفات والتوثيق من 0 إلى 3؛ الأفواج والتخطيط والدفع من 2 إلى 8؛ متابعة الحصة وتطبيق الأولياء من 5 إلى 11؛ تجربة خلال عطلة الشتاء من 7 إلى 12؛ القسم عن بُعد ودروس الجالية من 12 إلى 22؛ مراجعة شهادة التعليم المتوسط والبكالوريا من 22 إلى 32.' },
    models: { title: 'أي نموذج تبني: ما يُدرّ، وما ينكسر', columns: ['ما يُدرّ', 'ما ينكسر'], rows: [
      { label: 'مدرسة دعم وأداتها', cells: ['إعادة التسجيل، أولياء يوصون بها', 'أساتذة لا يملؤون المتابعة'] },
      { label: 'شبكة مراكز', cells: ['مستوى جودة واحد تحت علامة واحدة', 'أساتذة وقاعات يجب تنسيقهم'] },
      { label: 'سوق أساتذة (نوع Superprof)', cells: ['اشتراك أو عمولة على كل درس', 'يتعامل الأساتذة مباشرة بعدها'] },
      { label: 'العربية عن بُعد للجالية', cells: ['اشتراك شهري باليورو', 'دفع أجور الأساتذة، إطار يجب وضعه'] },
      { label: 'محتوى رقمي بالاشتراك', cells: ['كلفة إضافية ضعيفة لكل تلميذ', 'دون أستاذ ينقطع التلميذ'] },
      { label: 'تربّصات مكثّفة قبل البكالوريا', cells: ['طلب قوي خلال ستة أسابيع', 'موسم قصير بذروات'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القاعدة نفسها: أستاذ موثَّق، وحصة متابَعة، ودفع متتبَّع. ننصح بالبدء بمدرسة دعم لها تلاميذها، ثم فتح الأقسام عن بُعد؛ والسوق تأتي حين تترسّخ الثقة.', alt: 'مصفوفة ستة نماذج: مدرسة دعم بأداتها، شبكة مراكز، سوق أساتذة، العربية عن بُعد للجالية، محتوى رقمي بالاشتراك، تربّصات مكثّفة قبل البكالوريا؛ ولكل منها ما يُدرّ وما ينكسر.' },
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
      impayes: { svg: stats({ title: t.impayes.title, items: t.impayes.items, rtl }), caption: t.impayes.caption, alt: t.impayes.alt },
      parents: { svg: matrix({ title: t.parents.title, columns: t.parents.columns, rows: t.parents.rows, rtl }), caption: t.parents.caption, alt: t.parents.alt },
      saison: { svg: timeline({ title: t.saison.title, items: t.saison.items, total: 36, tick: 4, unit: t.saison.unit, rtl }), caption: t.saison.caption, alt: t.saison.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
