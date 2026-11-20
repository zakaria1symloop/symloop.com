import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { parcours, planning, STRINGS as SC } from './custom/autoecole.mjs';
export const slug = 'logiciel-auto-ecole-algerie-2027-planning-moniteurs-vehicules-heures-comptees-tranches-code-en-ligne';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel auto-école · Algérie · 2027', title: ['Logiciel auto-école en Algérie :', 'planning, heures comptées, tranches'], subtitle: 'Ce qu’on construit pour une auto-école : dossier candidat, planning par moniteur et véhicule, leçons évaluées hors ligne, code en ligne, tranches avec reçu', left: { label: 'Un cahier par moniteur', sub: 'et « il me reste combien d’heures ? » au téléphone' }, right: { label: 'Un créneau, un moniteur, un véhicule', sub: 'compteur partagé, rappel la veille' } },
    couches: { title: 'Un logiciel d’auto-école, en cinq couches', layers: [
      { label: 'Dossier candidat', items: [{ name: 'Inscription, documents, forfait choisi, moniteur, tranches, compteur d’heures, grille de compétences', sub: 'tout ce qui doit être su avant la première leçon' }] },
      { label: 'Code', items: [{ name: 'Séries dans l’application, hors ligne ; série blanche ; fiches ; progression vue par le moniteur et la direction', sub: 'le candidat révise chez lui, l’école le voit' }] },
      { label: 'Planning', items: [{ name: 'Un créneau par moniteur et par véhicule ; réservation, annulation selon la règle, rappel la veille, véhicule immobilisé', sub: 'un créneau existe une seule fois', accent: true }] },
      { label: 'Leçon', items: [{ name: 'Pointée par le moniteur sur son téléphone, sans réseau ; grille remplie à la fin ; absence comptée par la règle', sub: 'la leçon est écrite au moment où elle se passe' }] },
      { label: 'Tranches et direction', items: [{ name: 'Tranches avec reçu, rappel, règlement depuis la France ; occupation, heures moniteurs, véhicules, export comptable', sub: 'le gérant lit, il ne compte plus' }] },
    ], caption: 'Figure 1 · La couche accentuée est le planning : un créneau existe une seule fois, pour un moniteur et un véhicule, et tout le reste, la leçon pointée, le compteur, les tranches, l’occupation, en découle. Le dossier candidat au-dessus est ce que le planning lit ; la direction en bas n’est qu’une lecture.', alt: 'Cinq couches : dossier candidat, code, planning (accentué), leçon, tranches et direction.' },
    parcours: { caption: 'Figure 2 · Le parcours d’une candidate inscrite le 12 janvier : le code révisé dans l’application, dont six cent quarante questions sans réseau, réussi le 9 février ; vingt leçons dans une grille, quatorze faites et notées sur la grille de compétences, deux annulées à temps et non comptées, une absence comptée selon la règle écrite, trois restantes ; trois tranches, deux encaissées avec reçu dont une par le père depuis Lyon, la troisième rappelée le 25 février, et la règle qui bloque la quinzième leçon tant qu’elle n’est pas encaissée. Candidate, dates et chiffres sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le candidat ne vient pas à sa leçon', cells: ['Le moniteur attend, l’heure est perdue', 'rappel WhatsApp la veille ; absence comptée selon la règle écrite ; créneau rouvert'] },
      { label: 'Deux candidats à la même heure', cells: ['Deux cahiers, un moniteur', 'un planning par moniteur et par véhicule ; un créneau existe une seule fois ; zéro doublon'] },
      { label: '« Il me reste combien d’heures ? »', cells: ['On recompte dans le cahier', 'compteur par candidat : faites, annulées à temps, absences, restantes ; visible par lui'] },
      { label: 'Le père paie depuis la France', cells: ['Virement sans trace, reçu oublié', 'tranche réglée en ligne, montant en dinars figé, reçu au payeur et au candidat'] },
      { label: 'Le véhicule est en panne', cells: ['On appelle huit candidats un par un', 'véhicule immobilisé ; leçons déplacées ; candidats prévenus avant de partir'] },
      { label: 'Le candidat veut réviser le code chez lui', cells: ['Un livre, des séries sur papier', 'séries dans l’application, hors ligne ; progression vue par le moniteur'] },
    ], caption: 'Figure 3 · Les trois premières lignes se règlent par le planning et le compteur ; les trois suivantes par les tranches, l’immobilisation et le code en ligne. Aucune ne se règle par un cahier mieux tenu.', alt: 'Matrice de six situations : absence, doublon, heures restantes, paiement depuis la France, véhicule en panne, code à la maison ; ce qui se passe et ce que l’application fait.' },
    planning: { caption: 'Figure 4 · Une semaine de planning pour trois moniteurs et trois véhicules : huit créneaux par jour, les réservées sur la capacité, les annulations à temps et les absences comptées ; le mardi, le véhicule B est immobilisé au garage et ses sept leçons sont déplacées sur le mercredi et le jeudi, les candidats prévenus à 7h40. La direction lit les totaux : cent dix-huit leçons sur cent quarante-quatre places, quatre-vingt-deux pour cent, et les heures des moniteurs payées sur le réel. Noms et chiffres sont un exemple construit.' },
    etapes: { title: 'Mettre une auto-école sous logiciel, en six temps', items: [
      { label: 'Écrire les règles', sub: 'forfaits, tranches, règle d’annulation, grille, créneaux par jour' },
      { label: 'Reprendre les dossiers', sub: 'candidats en cours, heures faites, tranches encaissées' },
      { label: 'Planifier', sub: 'un créneau par moniteur et véhicule ; rappel la veille', accent: true },
      { label: 'Pointer et évaluer', sub: 'moniteur sur téléphone, hors ligne ; grille à la fin' },
      { label: 'Encaisser et rappeler', sub: 'reçu par tranche ; rappel ; depuis la France' },
      { label: 'Lire le tableau', sub: 'occupation, heures, véhicules, export comptable' },
    ], caption: 'Figure 5 · Le temps accentué est la planification : un créneau par moniteur et par véhicule, réservé, annulé selon la règle, rappelé la veille. Avant, les règles et les dossiers ; après, la leçon pointée, les tranches et le tableau ne sont que des lectures du planning.', alt: 'Six temps : écrire les règles, reprendre les dossiers, planifier (accentué), pointer et évaluer, encaisser et rappeler, lire le tableau.' },
    calendrier: { title: 'Un logiciel d’auto-école en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles et dossiers', note: 'forfaits, tranches, règle d’annulation, grille de compétences, créneaux ; reprise des candidats en cours', from: 0, to: 1 },
      { label: 'Planning et leçons', note: 'créneau unique par moniteur et véhicule, réservation, annulation, rappel ; pointage et grille hors ligne', from: 1, to: 3, accent: true },
      { label: 'Code', note: 'séries hors ligne, série blanche, fiches, progression vue par l’école', from: 3, to: 4 },
      { label: 'Tranches', note: 'encaissement avec reçu, rappel, règlement depuis la France, export', from: 4, to: 5 },
      { label: 'Direction', note: 'occupation, heures moniteurs, véhicules, immobilisations, revue du lundi', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, la première sans code : les forfaits, la règle d’annulation, la grille et les créneaux sont les décisions de la direction. Les deux semaines accentuées sont le planning et les leçons, parce que le compteur, les tranches et le tableau ne sont que des lectures de ce qui a été planifié et pointé.', alt: 'Calendrier de six semaines : règles et dossiers, planning et leçons (accentué, deux semaines), code, tranches, direction.' },
  },
  en: {
    cover: { eyebrow: 'Driving school software · Algeria · 2027', title: ['Driving school software in Algeria:', 'schedule, counted hours, instalments'], subtitle: 'What gets built for a driving school: candidate file, schedule per instructor and vehicle, lessons rated offline, theory online, instalments with receipt', left: { label: 'One notebook per instructor', sub: 'and “how many hours do I have left?” by phone' }, right: { label: 'One slot, one instructor, one vehicle', sub: 'shared counter, day-before reminder' } },
    couches: { title: 'Driving school software, in five layers', layers: [
      { label: 'Candidate file', items: [{ name: 'Enrolment, documents, chosen package, instructor, instalments, hours counter, skills grid', sub: 'everything that must be known before the first lesson' }] },
      { label: 'Theory', items: [{ name: 'Series in the app, offline; mock test; sheets; progress seen by the instructor and management', sub: 'the candidate revises at home, the school sees it' }] },
      { label: 'Schedule', items: [{ name: 'One slot per instructor and per vehicle; booking, cancellation per the rule, day-before reminder, immobilised vehicle', sub: 'a slot exists only once', accent: true }] },
      { label: 'Lesson', items: [{ name: 'Checked in by the instructor on their phone, without network; grid filled at the end; no-show counted by the rule', sub: 'the lesson is written as it happens' }] },
      { label: 'Instalments and management', items: [{ name: 'Instalments with receipt, reminder, payment from France; occupancy, instructor hours, vehicles, accounting export', sub: 'the manager reads, and stops counting' }] },
    ], caption: 'Figure 1 · The accented layer is the schedule: a slot exists only once, for one instructor and one vehicle, and everything else, the checked-in lesson, the counter, the instalments, occupancy, follows from it. The candidate file above is what the schedule reads; management at the bottom is only a reading.', alt: 'Five layers: candidate file, theory, schedule (accented), lesson, instalments and management.' },
    parcours: { caption: 'Figure 2 · The path of a candidate enrolled on 12 January: theory revised in the app, six hundred and forty questions of it without network, passed on 9 February; twenty lessons in a grid, fourteen done and scored on the skills grid, two cancelled in time and not counted, one no-show counted per the written rule, three remaining; three instalments, two collected with receipt including one by the father from Lyon, the third reminded on 25 February, and the rule that blocks lesson fifteen until it is collected. Candidate, dates and figures are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The candidate does not show up', cells: ['The instructor waits, the hour is lost', 'WhatsApp reminder the day before; no-show counted per the written rule; slot reopened'] },
      { label: 'Two candidates at the same hour', cells: ['Two notebooks, one instructor', 'one schedule per instructor and vehicle; a slot exists only once; zero duplicates'] },
      { label: '“How many hours do I have left?”', cells: ['Recounted in the notebook', 'counter per candidate: done, cancelled in time, no-shows, remaining; visible to them'] },
      { label: 'The father pays from France', cells: ['Transfer without trace, receipt forgotten', 'instalment paid online, dinar amount frozen, receipt to payer and candidate'] },
      { label: 'The vehicle breaks down', cells: ['Eight candidates called one by one', 'vehicle immobilised; lessons moved; candidates told before leaving home'] },
      { label: 'The candidate wants to revise theory at home', cells: ['A book, paper series', 'series in the app, offline; progress seen by the instructor'] },
    ], caption: 'Figure 3 · The first three rows are settled by the schedule and the counter; the next three by instalments, immobilisation and online theory. None is settled by a better-kept notebook.', alt: 'Matrix of six situations: no-show, duplicate, remaining hours, payment from France, vehicle breakdown, theory at home; what happens and what the application does.' },
    planning: { caption: 'Figure 4 · One week of schedule for three instructors and three vehicles: eight slots a day, booked over capacity, cancellations in time and counted no-shows; on Tuesday vehicle B is immobilised at the garage and its seven lessons are moved to Wednesday and Thursday, candidates told at 7:40. Management reads the totals: one hundred and eighteen lessons over one hundred and forty-four slots, eighty-two percent, and instructor hours paid on actuals. Names and figures are a constructed example.' },
    etapes: { title: 'Putting a driving school under software, in six beats', items: [
      { label: 'Write the rules', sub: 'packages, instalments, cancellation rule, grid, slots per day' },
      { label: 'Take over the files', sub: 'current candidates, hours done, instalments collected' },
      { label: 'Schedule', sub: 'one slot per instructor and vehicle; day-before reminder', accent: true },
      { label: 'Check in and rate', sub: 'instructor on phone, offline; grid at the end' },
      { label: 'Collect and remind', sub: 'receipt per instalment; reminder; from France' },
      { label: 'Read the board', sub: 'occupancy, hours, vehicles, accounting export' },
    ], caption: 'Figure 5 · The accented beat is scheduling: one slot per instructor and vehicle, booked, cancelled per the rule, reminded the day before. Before it, rules and files; after it, the checked-in lesson, instalments and the board are only readings of the schedule.', alt: 'Six beats: write the rules, take over the files, schedule (accented), check in and rate, collect and remind, read the board.' },
    calendrier: { title: 'Driving school software in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules and files', note: 'packages, instalments, cancellation rule, skills grid, slots; current candidates taken over', from: 0, to: 1 },
      { label: 'Schedule and lessons', note: 'single slot per instructor and vehicle, booking, cancellation, reminder; offline check-in and grid', from: 1, to: 3, accent: true },
      { label: 'Theory', note: 'offline series, mock test, sheets, progress seen by the school', from: 3, to: 4 },
      { label: 'Instalments', note: 'collection with receipt, reminder, payment from France, export', from: 4, to: 5 },
      { label: 'Management', note: 'occupancy, instructor hours, vehicles, immobilisations, Monday review', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, the first without code: packages, the cancellation rule, the grid and slots are management’s decisions. The two accented weeks are the schedule and lessons, because the counter, instalments and the board are only readings of what was scheduled and checked in.', alt: 'Six-week timeline: rules and files, schedule and lessons (accented, two weeks), theory, instalments, management.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج مدرسة سياقة · الجزائر · 2027', title: ['برنامج مدرسة سياقة في الجزائر:', 'الجدول، الساعات المحسوبة، الأقساط'], subtitle: 'ما يُبنى لمدرسة سياقة: ملف المترشّح، جدول لكل مدرّب وسيارة، حصص تُقيَّم دون شبكة، القانون عبر الإنترنت، أقساط بوصل', left: { label: 'دفتر لكل مدرّب', sub: 'و«كم بقي لي من ساعات؟» بالهاتف' }, right: { label: 'فترة واحدة، مدرّب واحد، سيارة واحدة', sub: 'عدّاد مشترك، تذكير اليوم السابق' } },
    couches: { title: 'برنامج مدرسة سياقة، في خمس طبقات', layers: [
      { label: 'ملف المترشّح', items: [{ name: 'التسجيل، الوثائق، الباقة المختارة، المدرّب، الأقساط، عدّاد الساعات، شبكة المهارات', sub: 'كل ما يجب أن يُعرف قبل الحصة الأولى' }] },
      { label: 'القانون', items: [{ name: 'سلاسل في التطبيق، دون شبكة؛ سلسلة تجريبية؛ بطاقات؛ تقدّم يراه المدرّب والإدارة', sub: 'يراجع المترشّح في بيته، وتراه المدرسة' }] },
      { label: 'الجدول', items: [{ name: 'فترة واحدة لكل مدرّب ولكل سيارة؛ حجز، إلغاء وفق القاعدة، تذكير اليوم السابق، سيارة متوقفة', sub: 'الفترة توجد مرة واحدة', accent: true }] },
      { label: 'الحصة', items: [{ name: 'يسجّلها المدرّب على هاتفه، دون شبكة؛ الشبكة تُملأ في النهاية؛ الغياب يُحسب بالقاعدة', sub: 'تُكتب الحصة لحظة حدوثها' }] },
      { label: 'الأقساط والإدارة', items: [{ name: 'أقساط بوصل، تذكير، دفع من فرنسا؛ إشغال، ساعات المدرّبين، السيارات، تصدير محاسبي', sub: 'يقرأ المسيّر، ولا يعدّ بعد اليوم' }] },
    ], caption: 'الشكل 1 · الطبقة المبرزة هي الجدول: الفترة توجد مرة واحدة، لمدرّب واحد وسيارة واحدة، وكل ما عداها، الحصة المسجَّلة والعدّاد والأقساط والإشغال، ينتج عنها. ملف المترشّح فوقها هو ما يقرؤه الجدول؛ والإدارة في الأسفل مجرد قراءة.', alt: 'خمس طبقات: ملف المترشّح، القانون، الجدول (مبرز)، الحصة، الأقساط والإدارة.' },
    parcours: { caption: 'الشكل 2 · مسار مترشّحة مسجَّلة في 12 جانفي: القانون مراجَع في التطبيق، منه ستمئة وأربعون سؤالاً دون شبكة، ناجح في 9 فيفري؛ عشرون حصة في شبكة، أربع عشرة منجزة ومنقّطة على شبكة المهارات، اثنتان ملغاتان في الوقت وغير محسوبتين، غياب واحد محسوب وفق القاعدة المكتوبة، ثلاث متبقية؛ ثلاثة أقساط، اثنان محصَّلان بوصل منهما واحد من الأب من ليون، والثالث مذكَّر به في 25 فيفري، والقاعدة التي تحجب الحصة الخامسة عشرة ما لم يُحصَّل. المترشّحة والتواريخ والأرقام مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'المترشّح لا يأتي إلى حصته', cells: ['ينتظر المدرّب، وتضيع الساعة', 'تذكير واتساب في اليوم السابق؛ غياب محسوب وفق القاعدة المكتوبة؛ الفترة تُفتح من جديد'] },
      { label: 'مترشّحان في الساعة نفسها', cells: ['دفتران، مدرّب واحد', 'جدول لكل مدرّب ولكل سيارة؛ الفترة توجد مرة واحدة؛ صفر تكرار'] },
      { label: '«كم بقي لي من ساعات؟»', cells: ['يُعاد العدّ في الدفتر', 'عدّاد لكل مترشّح: منجزة، ملغاة في الوقت، غيابات، متبقية؛ يراه هو'] },
      { label: 'الأب يدفع من فرنسا', cells: ['تحويل بلا أثر، وصل منسي', 'قسط يُدفع عبر الإنترنت، مبلغ بالدينار مجمَّد، وصل للدافع وللمترشّح'] },
      { label: 'السيارة معطّلة', cells: ['يُتَّصل بثمانية مترشّحين واحداً واحداً', 'سيارة متوقفة؛ حصص منقولة؛ المترشّحون يُخبَرون قبل المغادرة'] },
      { label: 'المترشّح يريد مراجعة القانون في بيته', cells: ['كتاب، وسلاسل على الورق', 'سلاسل في التطبيق، دون شبكة؛ تقدّم يراه المدرّب'] },
    ], caption: 'الشكل 3 · الصفوف الثلاثة الأولى تُحل بالجدول والعدّاد؛ والثلاثة التالية بالأقساط والتوقف والقانون عبر الإنترنت. لا واحدة منها تُحل بدفتر أحسن مسكاً.', alt: 'مصفوفة ست حالات: غياب، تكرار، ساعات متبقية، دفع من فرنسا، سيارة معطّلة، قانون في البيت؛ ما يحدث وما يفعله التطبيق.' },
    planning: { caption: 'الشكل 4 · أسبوع جدول لثلاثة مدرّبين وثلاث سيارات: ثماني فترات في اليوم، المحجوزة على السعة، الإلغاءات في الوقت والغيابات المحسوبة؛ يوم الثلاثاء تتوقف السيارة ب في الورشة وتُنقل حصصها السبع إلى الأربعاء والخميس، والمترشّحون يُخبَرون على 7:40. تقرأ الإدارة المجاميع: مئة وثماني عشرة حصة على مئة وأربعة وأربعين مكاناً، اثنان وثمانون بالمئة، وساعات المدرّبين تُدفع على الفعلي. الأسماء والأرقام مثال مبني.' },
    etapes: { title: 'وضع مدرسة سياقة تحت برنامج، في ستة أوقات', items: [
      { label: 'كتابة القواعد', sub: 'الباقات، الأقساط، قاعدة الإلغاء، الشبكة، الفترات في اليوم' },
      { label: 'استعادة الملفات', sub: 'المترشّحون الجارون، الساعات المنجزة، الأقساط المحصَّلة' },
      { label: 'الجدولة', sub: 'فترة لكل مدرّب وسيارة؛ تذكير اليوم السابق', accent: true },
      { label: 'التسجيل والتقييم', sub: 'المدرّب على الهاتف، دون شبكة؛ الشبكة في النهاية' },
      { label: 'التحصيل والتذكير', sub: 'وصل لكل قسط؛ تذكير؛ من فرنسا' },
      { label: 'قراءة اللوحة', sub: 'إشغال، ساعات، سيارات، تصدير محاسبي' },
    ], caption: 'الشكل 5 · الوقت المبرز هو الجدولة: فترة لكل مدرّب وسيارة، تُحجز، تُلغى وفق القاعدة، يُذكَّر بها في اليوم السابق. قبلها القواعد والملفات؛ وبعدها الحصة المسجَّلة والأقساط واللوحة مجرد قراءات للجدول.', alt: 'ستة أوقات: كتابة القواعد، استعادة الملفات، الجدولة (مبرز)، التسجيل والتقييم، التحصيل والتذكير، قراءة اللوحة.' },
    calendrier: { title: 'برنامج مدرسة سياقة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد والملفات', note: 'الباقات، الأقساط، قاعدة الإلغاء، شبكة المهارات، الفترات؛ استعادة المترشّحين الجارين', from: 0, to: 1 },
      { label: 'الجدول والحصص', note: 'فترة وحيدة لكل مدرّب وسيارة، حجز، إلغاء، تذكير؛ تسجيل وشبكة دون شبكة', from: 1, to: 3, accent: true },
      { label: 'القانون', note: 'سلاسل دون شبكة، سلسلة تجريبية، بطاقات، تقدّم تراه المدرسة', from: 3, to: 4 },
      { label: 'الأقساط', note: 'تحصيل بوصل، تذكير، دفع من فرنسا، تصدير', from: 4, to: 5 },
      { label: 'الإدارة', note: 'إشغال، ساعات المدرّبين، السيارات، التوقفات، مراجعة الاثنين', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، الأول دون كود: الباقات وقاعدة الإلغاء والشبكة والفترات قرارات الإدارة. الأسبوعان المبرزان هما الجدول والحصص، لأن العدّاد والأقساط واللوحة مجرد قراءات لما خُطط وسُجّل.', alt: 'تقويم ستة أسابيع: القواعد والملفات، الجدول والحصص (مبرز، أسبوعان)، القانون، الأقساط، الإدارة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      parcours: { svg: parcours(e.parcours, rtl), caption: t.parcours.caption, alt: e.parcours.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      planning: { svg: planning(e.planning, rtl), caption: t.planning.caption, alt: e.planning.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
