import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { roster, week, STRINGS as SH } from './custom/shifts.mjs';
export const slug = 'personne-ne-sait-qui-travaille-demain-planning-des-equipes-application-algerie-2027-besoins-par-creneau-contraintes-echanges-pointage';
const T = {
  fr: {
    cover: { eyebrow: 'Planning des équipes · Créneaux · Pointage · 2027', title: ['« Personne ne sait', 'qui travaille demain »'], subtitle: 'Ce qu’on construit pour les équipes : besoins par créneau, contraintes écrites, proposition expliquée, échanges, pointage', left: { label: 'Un tableau blanc, un groupe WhatsApp', sub: 'et un samedi soir à cinq au lieu de six' }, right: { label: 'Un besoin calculé, une règle écrite', sub: 'une proposition expliquée, un trou vu à l’avance' } },
    planifier: { title: 'Planifier une semaine, en six temps', items: [
      { label: 'Calculer les besoins', sub: 'par créneau, depuis l’activité passée et les réservations' },
      { label: 'Écrire les contraintes', sub: 'dures : qualifications, heures max, repos ; souples : préférences' },
      { label: 'Proposer', sub: 'affectations expliquées ; trous signalés ; le gérant décide', accent: true },
      { label: 'Publier', sub: 'sur les téléphones ; confirmation ; verrouillage à J-2' },
      { label: 'Échanger et remplacer', sub: 'demande, règles vérifiées, approbation ; absence remplacée' },
      { label: 'Pointer et compter', sub: 'pointage contre planning ; écarts ; heures exportées' },
    ], caption: 'Figure 1 · L’étape accentuée est la proposition : l’application affecte, explique chaque choix et signale les créneaux qu’elle n’a pas pu couvrir ; le gérant décide. Avant elle, les besoins sont calculés et les contraintes écrites ; après elle, le planning vit sur les téléphones, avec des échanges vérifiés et un pointage comparé poste par poste.', alt: 'Six temps : calculer les besoins, écrire les contraintes, proposer (accentué), publier, échanger et remplacer, pointer et compter.' },
    semaine: { caption: 'Figure 2 · Une semaine de restaurant à quatorze employés : trois créneaux par jour, et dans chaque case les affectés sur le besoin. Le besoin vient des couverts des huit dernières semaines et des réservations déjà prises ; il n’est pas deviné le dimanche soir. Le samedi soir manque une personne, et l’application le dit à la proposition, avec un candidat expliqué : ses heures de la semaine, son repos, sa qualification, sa préférence. Besoins, affectations et noms sont un exemple construit.' },
    amina: { caption: 'Figure 3 · La semaine d’une employée : les postes planifiés, le pointage dessous, et ce qui a changé. Un retard de douze minutes est noté sans être recopié ; un poste est échangé avec un collègue après vérification des règles des deux ; une absence déclarée à 6 h 40 est remplacée en vingt-cinq minutes par la personne que l’application a proposée. Les heures de chacun sont recalculées à chaque changement, et partent vers la paie, dont les règles ne sont pas dans ce guide. Horaires et noms sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le samedi soir, il manque toujours quelqu’un', cells: ['On le découvre à 18 h ; le gérant sert', 'besoin calculé par créneau ; trou signalé à la proposition, le mardi'] },
      { label: 'Deux employés ont échangé sans prévenir', cells: ['Le gérant l’apprend par le pointage', 'échange demandé dans l’application ; règles vérifiées ; approuvé ou refusé'] },
      { label: 'Le diplômé n’est pas là à 14 h', cells: ['Le comptoir attend ; le client part', 'qualification comme contrainte dure ; le créneau ne se valide pas sans'] },
      { label: 'Un employé fait 58 heures, un autre 22', cells: ['Fatigue d’un côté, rancœur de l’autre', 'heures de la semaine affichées à chaque affectation ; max écrit ; équilibre mesuré'] },
      { label: 'L’absent du matin est découvert à 8 h 05', cells: ['Appels en cascade ; retard d’ouverture', 'absence déclarée depuis le téléphone ; remplaçants proposés ; accepté en minutes'] },
      { label: 'Le planning change trois fois par jour', cells: ['Personne ne sait quelle version est vraie', 'une version publiée ; verrouillage à J-2 ; changements tracés et notifiés'] },
    ], caption: 'Figure 4 · Les trois premières lignes se règlent par le besoin calculé, l’échange vérifié et la qualification comme contrainte dure ; les trois suivantes par les heures affichées, le remplacement proposé et la version publiée. Aucune ne se règle par un gérant qui refait le tableau blanc chaque soir.', alt: 'Matrice de six situations : samedi soir en manque, échange non prévenu, diplômé absent, heures déséquilibrées, absent du matin, planning instable ; ce qui se passe et ce que l’application fait.' },
    couches: { title: 'Le planning des équipes, en cinq couches', layers: [
      { label: 'Besoins', items: [{ name: 'Par créneau et par poste : calculés depuis l’activité passée, les réservations, les événements ; corrigés à la main et écrits', sub: 'le besoin est un chiffre, pas une habitude' }] },
      { label: 'Contraintes', items: [{ name: 'Dures : qualifications, heures max, repos entre postes, jours de repos, indisponibilités ; souples : préférences, binômes', sub: 'écrites par le gérant ; une contrainte dure ne se contourne pas', accent: true }] },
      { label: 'Proposition', items: [{ name: 'Affectations calculées sous les contraintes dures, préférences pesées, chaque choix expliqué, trous signalés ; le gérant décide', sub: 'un problème connu pour être difficile : on propose, on n’impose pas' }] },
      { label: 'Publication et échanges', items: [{ name: 'Une version publiée sur les téléphones, confirmation, verrouillage à J-2 ; échanges et absences vérifiés contre les règles, approuvés', sub: 'chaque changement recalcule les heures de chacun' }] },
      { label: 'Pointage et mesure', items: [{ name: 'Pointage contre planning poste par poste, écarts, heures comptées exportées ; couverture, équilibre, échanges, absences', sub: 'la paie et ses règles sont hors de l’application' }] },
    ], caption: 'Figure 5 · La couche accentuée est celle des contraintes : écrites par le gérant, les dures ne se contournent pas et les souples se pèsent. Les besoins au-dessus sont calculés ; la proposition en dessous n’est qu’une recherche sous ces contraintes, expliquée, que le gérant accepte ou corrige ; la publication, les échanges et le pointage ne font que faire vivre ce qu’il a décidé.', alt: 'Cinq couches : besoins, contraintes (accentuée), proposition, publication et échanges, pointage et mesure.' },
    calendrier: { title: 'Planifier les équipes en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'postes et créneaux, qualifications, heures max, repos, jours de repos, préférences admises, qui approuve un échange ; avec le gérant', from: 0, to: 1 },
      { label: 'Besoins et contraintes', note: 'besoins par créneau depuis l’historique et les réservations, contraintes dures et souples écrites, indisponibilités saisies par chacun', from: 1, to: 3, accent: true },
      { label: 'Proposition', note: 'affectations sous contraintes, explications, trous signalés, correction par le gérant, publication', from: 3, to: 4 },
      { label: 'Échanges et absences', note: 'demandes depuis le téléphone, règles vérifiées, approbation, remplaçants proposés, notifications', from: 4, to: 5 },
      { label: 'Pointage', note: 'pointage sur place, comparaison poste par poste, écarts, heures comptées, export', from: 5, to: 6 },
      { label: 'Mesure', note: 'couverture des créneaux, équilibre des heures, échanges, absences, délai de remplacement, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les postes, les qualifications, les seuils d’heures et de repos et qui approuve sont des décisions du gérant. Les deux semaines accentuées sont les besoins et les contraintes, parce que la proposition n’est qu’une recherche sous ces deux couches ; le pointage vient en dernier, quand le planning est déjà vrai.', alt: 'Frise de sept semaines : règles, besoins et contraintes (accentué, deux semaines), proposition, échanges et absences, pointage, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Shift scheduling · Slots · Clock-in · 2027', title: ['“Nobody knows', 'who works tomorrow”'], subtitle: 'What gets built for teams: needs per slot, written constraints, explained proposal, swaps, clock-in', left: { label: 'A whiteboard, a WhatsApp group', sub: 'and a Saturday night with five instead of six' }, right: { label: 'A computed need, a written rule', sub: 'an explained proposal, a gap seen in advance' } },
    planifier: { title: 'Scheduling a week, in six beats', items: [
      { label: 'Compute the needs', sub: 'per slot, from past activity and bookings' },
      { label: 'Write the constraints', sub: 'hard: qualifications, max hours, rest; soft: preferences' },
      { label: 'Propose', sub: 'explained assignments; gaps flagged; the manager decides', accent: true },
      { label: 'Publish', sub: 'on phones; confirmation; locked at D-2' },
      { label: 'Swap and replace', sub: 'request, rules checked, approval; absence replaced' },
      { label: 'Clock in and count', sub: 'clock-in against roster; gaps; hours exported' },
    ], caption: 'Figure 1 · The accented beat is the proposal: the application assigns, explains every choice and flags the slots it could not cover; the manager decides. Before it, needs are computed and constraints written; after it, the roster lives on phones, with checked swaps and clock-in compared shift by shift.', alt: 'Six beats: compute the needs, write the constraints, propose (accented), publish, swap and replace, clock in and count.' },
    semaine: { caption: 'Figure 2 · A restaurant week with fourteen employees: three slots a day, and in each cell the assigned over the need. The need comes from the last eight weeks’ covers and the bookings already taken; it is not guessed on Sunday night. Saturday evening is one person short, and the application says so at proposal, with an explained candidate: their hours this week, their rest, their qualification, their preference. Needs, assignments and names are a constructed example.' },
    amina: { caption: 'Figure 3 · One employee’s week: planned shifts, clock-in below, and what changed. A twelve-minute delay is noted without being retyped; a shift is swapped with a colleague after both people’s rules are checked; an absence declared at 6:40 is replaced in twenty-five minutes by the person the application proposed. Everyone’s hours are recomputed at every change, and go to payroll, whose rules are not in this guide. Times and names are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Saturday night is always one short', cells: ['Found at 6 pm; the manager waits tables', 'need computed per slot; gap flagged at proposal, on Tuesday'] },
      { label: 'Two employees swapped without telling', cells: ['The manager learns it from clock-in', 'swap requested in the app; rules checked; approved or refused'] },
      { label: 'The qualified person is not there at 2 pm', cells: ['The counter waits; the customer leaves', 'qualification as a hard constraint; the slot does not validate without it'] },
      { label: 'One employee works 58 hours, another 22', cells: ['Fatigue on one side, resentment on the other', 'week hours shown at every assignment; written max; balance measured'] },
      { label: 'The morning absentee is found at 8:05', cells: ['Cascade of calls; late opening', 'absence declared from the phone; replacements proposed; accepted in minutes'] },
      { label: 'The roster changes three times a day', cells: ['Nobody knows which version is true', 'one published version; locked at D-2; changes traced and notified'] },
    ], caption: 'Figure 4 · The first three rows are settled by the computed need, the checked swap and the qualification as a hard constraint; the next three by the shown hours, the proposed replacement and the published version. None is settled by a manager redoing the whiteboard every night.', alt: 'Matrix of six situations: Saturday short, unannounced swap, qualified person absent, unbalanced hours, morning absentee, unstable roster; what happens and what the application does.' },
    couches: { title: 'Shift scheduling, in five layers', layers: [
      { label: 'Needs', items: [{ name: 'Per slot and position: computed from past activity, bookings, events; corrected by hand and written', sub: 'the need is a number, not a habit' }] },
      { label: 'Constraints', items: [{ name: 'Hard: qualifications, max hours, rest between shifts, rest days, unavailability; soft: preferences, pairs', sub: 'written by the manager; a hard constraint is not bypassed', accent: true }] },
      { label: 'Proposal', items: [{ name: 'Assignments computed under hard constraints, preferences weighed, every choice explained, gaps flagged; the manager decides', sub: 'a problem known to be hard: propose, never impose' }] },
      { label: 'Publication and swaps', items: [{ name: 'One version published on phones, confirmation, locked at D-2; swaps and absences checked against the rules, approved', sub: 'every change recomputes everyone’s hours' }] },
      { label: 'Clock-in and measurement', items: [{ name: 'Clock-in against roster shift by shift, gaps, counted hours exported; coverage, balance, swaps, absences', sub: 'payroll and its rules are outside the application' }] },
    ], caption: 'Figure 5 · The accented layer is constraints: written by the manager, hard ones are not bypassed and soft ones are weighed. Needs above are computed; the proposal below is only a search under those constraints, explained, that the manager accepts or corrects; publication, swaps and clock-in only keep alive what they decided.', alt: 'Five layers: needs, constraints (accented), proposal, publication and swaps, clock-in and measurement.' },
    calendrier: { title: 'Scheduling teams in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'positions and slots, qualifications, max hours, rest, rest days, admitted preferences, who approves a swap; with the manager', from: 0, to: 1 },
      { label: 'Needs and constraints', note: 'needs per slot from history and bookings, hard and soft constraints written, unavailability entered by each person', from: 1, to: 3, accent: true },
      { label: 'Proposal', note: 'assignments under constraints, explanations, gaps flagged, correction by the manager, publication', from: 3, to: 4 },
      { label: 'Swaps and absences', note: 'requests from the phone, rules checked, approval, replacements proposed, notifications', from: 4, to: 5 },
      { label: 'Clock-in', note: 'on-site clock-in, shift-by-shift comparison, gaps, counted hours, export', from: 5, to: 6 },
      { label: 'Measurement', note: 'slot coverage, hour balance, swaps, absences, replacement time, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: positions, qualifications, hour and rest thresholds and who approves are the manager’s decisions. The two accented weeks are needs and constraints, because the proposal is only a search under those two layers; clock-in comes last, when the roster is already true.', alt: 'Seven-week timeline: rules, needs and constraints (accented, two weeks), proposal, swaps and absences, clock-in, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'تخطيط الفرق · فترات · تسجيل حضور · 2027', title: ['«لا أحد يعرف', 'من يعمل غداً»'], subtitle: 'ما يُبنى للفرق: احتياجات لكل فترة، قيود مكتوبة، اقتراح مشروح، تبادلات، تسجيل حضور', left: { label: 'سبورة بيضاء، ومجموعة واتساب', sub: 'وسبت مساءً بخمسة بدل ستة' }, right: { label: 'احتياج محسوب، وقاعدة مكتوبة', sub: 'اقتراح مشروح، وثغرة تُرى مسبقاً' } },
    planifier: { title: 'تخطيط أسبوع، في ستة أوقات', items: [
      { label: 'حساب الاحتياجات', sub: 'لكل فترة، من النشاط السابق والحجوزات' },
      { label: 'كتابة القيود', sub: 'صارمة: مؤهلات، حد الساعات، راحة؛ مرنة: تفضيلات' },
      { label: 'الاقتراح', sub: 'تعيينات مشروحة؛ ثغرات معلَّمة؛ المسيّر يقرر', accent: true },
      { label: 'النشر', sub: 'على الهواتف؛ تأكيد؛ قفل قبل يومين' },
      { label: 'التبادل والاستبدال', sub: 'طلب، قواعد مفحوصة، موافقة؛ غياب مستبدَل' },
      { label: 'التسجيل والعدّ', sub: 'تسجيل مقابل التخطيط؛ فوارق؛ ساعات مصدَّرة' },
    ], caption: 'الشكل 1 · الوقت المميز هو الاقتراح: يعيّن التطبيق ويشرح كل خيار ويعلّم الفترات التي لم يستطع تغطيتها؛ والمسيّر يقرر. وقبله تُحسب الاحتياجات وتُكتب القيود؛ وبعده يعيش التخطيط على الهواتف بتبادلات مفحوصة وتسجيل يُقارن وردية وردية.', alt: 'ستة أوقات: حساب الاحتياجات، كتابة القيود، الاقتراح (مميز)، النشر، التبادل والاستبدال، التسجيل والعدّ.' },
    semaine: { caption: 'الشكل 2 · أسبوع مطعم بأربعة عشر موظفاً: ثلاث فترات في اليوم، وفي كل خانة المعيَّنون على الاحتياج. والاحتياج يأتي من وجبات آخر ثمانية أسابيع والحجوزات المأخوذة أصلاً؛ ولا يُخمَّن مساء الأحد. والسبت مساءً ينقص شخص، ويقوله التطبيق عند الاقتراح بمرشح مشروح: ساعاته في الأسبوع، راحته، مؤهله، تفضيله. والاحتياجات والتعيينات والأسماء مثال مبني.' },
    amina: { caption: 'الشكل 3 · أسبوع موظفة: الورديات المخططة، والتسجيل تحتها، وما تغيّر. تأخر اثنتي عشرة دقيقة يُدوَّن دون إعادة كتابة؛ ووردية تُتبادل مع زميل بعد فحص قواعد الاثنين؛ وغياب مصرَّح به الساعة 6:40 يُستبدل في خمس وعشرين دقيقة بالشخص الذي اقترحه التطبيق. وساعات كل واحد تُعاد حسابها عند كل تغيير وتذهب إلى الأجور التي قواعدها ليست في هذا الدليل. والأوقات والأسماء مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'السبت مساءً ينقص دائماً أحد', cells: ['يُكتشف الساعة 18؛ والمسيّر يخدم', 'احتياج محسوب لكل فترة؛ ثغرة معلَّمة عند الاقتراح يوم الثلاثاء'] },
      { label: 'موظفان تبادلا دون إخبار', cells: ['يعلم المسيّر من التسجيل', 'تبادل يُطلب في التطبيق؛ قواعد مفحوصة؛ موافَق أو مرفوض'] },
      { label: 'صاحب الشهادة غير موجود الساعة 14', cells: ['الطاولة تنتظر؛ والزبون يغادر', 'المؤهل قيد صارم؛ الفترة لا تُعتمد من دونه'] },
      { label: 'موظف يعمل 58 ساعة وآخر 22', cells: ['إرهاق من جهة وضغينة من أخرى', 'ساعات الأسبوع تُعرض عند كل تعيين؛ حد مكتوب؛ توازن مقيس'] },
      { label: 'غائب الصباح يُكتشف الساعة 8:05', cells: ['مكالمات متتالية؛ تأخر الفتح', 'غياب مصرَّح به من الهاتف؛ بدلاء مقترَحون؛ قبول في دقائق'] },
      { label: 'التخطيط يتغير ثلاث مرات في اليوم', cells: ['لا أحد يعرف أي نسخة صحيحة', 'نسخة واحدة منشورة؛ قفل قبل يومين؛ تغييرات متتبَّعة ومبلَّغة'] },
    ], caption: 'الشكل 4 · الأسطر الثلاثة الأولى تُحل بالاحتياج المحسوب والتبادل المفحوص والمؤهل كقيد صارم؛ والثلاثة التالية بالساعات المعروضة والاستبدال المقترَح والنسخة المنشورة. ولا واحد يُحل بمسيّر يعيد السبورة كل مساء.', alt: 'مصفوفة ست حالات: سبت ناقص، تبادل بلا إخبار، مؤهل غائب، ساعات غير متوازنة، غائب الصباح، تخطيط غير مستقر؛ ما يحدث وما يفعله التطبيق.' },
    couches: { title: 'تخطيط الفرق، في خمس طبقات', layers: [
      { label: 'الاحتياجات', items: [{ name: 'لكل فترة ومنصب: تُحسب من النشاط السابق والحجوزات والأحداث؛ تُصحَّح يدوياً وتُكتب', sub: 'الاحتياج رقم لا عادة' }] },
      { label: 'القيود', items: [{ name: 'صارمة: مؤهلات، حد الساعات، راحة بين الورديات، أيام راحة، عدم توفر؛ مرنة: تفضيلات، ثنائيات', sub: 'يكتبها المسيّر؛ القيد الصارم لا يُتجاوز', accent: true }] },
      { label: 'الاقتراح', items: [{ name: 'تعيينات محسوبة تحت القيود الصارمة، تفضيلات موزونة، كل خيار مشروح، ثغرات معلَّمة؛ المسيّر يقرر', sub: 'مسألة معروفة بصعوبتها: نقترح ولا نفرض' }] },
      { label: 'النشر والتبادلات', items: [{ name: 'نسخة واحدة تُنشر على الهواتف، تأكيد، قفل قبل يومين؛ تبادلات وغيابات تُفحص مقابل القواعد وتُوافَق', sub: 'كل تغيير يعيد حساب ساعات كل واحد' }] },
      { label: 'التسجيل والقياس', items: [{ name: 'تسجيل مقابل التخطيط وردية وردية، فوارق، ساعات معدودة مصدَّرة؛ تغطية، توازن، تبادلات، غيابات', sub: 'الأجور وقواعدها خارج التطبيق' }] },
    ], caption: 'الشكل 5 · الطبقة المميزة هي القيود: يكتبها المسيّر، والصارمة لا تُتجاوز والمرنة تُوزن. والاحتياجات فوقها تُحسب؛ والاقتراح تحتها مجرد بحث تحت هذه القيود، مشروح، يقبله المسيّر أو يصحّحه؛ والنشر والتبادلات والتسجيل تُبقي حياً ما قرره فقط.', alt: 'خمس طبقات: الاحتياجات، القيود (مميزة)، الاقتراح، النشر والتبادلات، التسجيل والقياس.' },
    calendrier: { title: 'تخطيط الفرق سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'مناصب وفترات، مؤهلات، حد الساعات، راحة، أيام راحة، تفضيلات مقبولة، من يوافق على تبادل؛ مع المسيّر', from: 0, to: 1 },
      { label: 'الاحتياجات والقيود', note: 'احتياجات لكل فترة من التاريخ والحجوزات، قيود صارمة ومرنة مكتوبة، عدم توفر يدخله كل واحد', from: 1, to: 3, accent: true },
      { label: 'الاقتراح', note: 'تعيينات تحت القيود، شروح، ثغرات معلَّمة، تصحيح من المسيّر، نشر', from: 3, to: 4 },
      { label: 'التبادلات والغيابات', note: 'طلبات من الهاتف، قواعد مفحوصة، موافقة، بدلاء مقترَحون، إشعارات', from: 4, to: 5 },
      { label: 'التسجيل', note: 'تسجيل في الموقع، مقارنة وردية وردية، فوارق، ساعات معدودة، تصدير', from: 5, to: 6 },
      { label: 'القياس', note: 'تغطية الفترات، توازن الساعات، تبادلات، غيابات، مهلة الاستبدال، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: المناصب والمؤهلات وعتبات الساعات والراحة ومن يوافق قرارات المسيّر. والأسبوعان المميزان هما الاحتياجات والقيود، لأن الاقتراح مجرد بحث تحت هاتين الطبقتين؛ والتسجيل يأتي أخيراً حين يكون التخطيط صحيحاً أصلاً.', alt: 'خط زمني من سبعة أسابيع: القواعد، الاحتياجات والقيود (مميز، أسبوعان)، الاقتراح، التبادلات والغيابات، التسجيل، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SH[locale] || SH.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      planifier: { svg: steps({ title: t.planifier.title, steps: t.planifier.items, arrows: true, rtl }), caption: t.planifier.caption, alt: t.planifier.alt },
      semaine: { svg: roster(e.roster, rtl), caption: t.semaine.caption, alt: e.roster.alt },
      amina: { svg: week(e.week, rtl), caption: t.amina.caption, alt: e.week.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
