import { cover, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Équipes terrain', title: ['Cinquante employés', 'sur le terrain.', 'Tout passe par téléphone.'], subtitle: 'Les trois informations que personne ne possède, ce qui se règle en une semaine, l’application terrain en trois écrans, où l’IA aide vraiment.', left: { label: 'Aujourd’hui', sub: 'appels, groupes, mémoire du chef' }, right: { label: 'Dans 12 semaines', sub: 'ma journée · ma mission · ma preuve' }, note: 'Algérie · 2026' },
    flows: { title: 'Les cinq informations vitales, et où elles vivent selon le palier', columns: ['Aujourd’hui', 'Palier 1 · règles', 'Palier 2 · application terrain'], rows: [
      { label: 'Qui travaille aujourd’hui, et où', cells: ['Dans la tête du chef d’équipe', 'Planning hebdo unique, publié le jeudi', 'Planning du jour sur le téléphone de chacun'] },
      { label: 'Quelle mission est faite, ou pas', cells: ['Un appel, puis l’oubli', 'Message début / fin au format fixe', 'Mission avec statut, hors connexion'] },
      { label: 'La preuve du travail fait', cells: ['Photo perdue dans un groupe', 'Photo nommée mission + date', 'Photo, signature et position dans la mission'] },
      { label: 'Les heures, pour la paie', cells: ['Reconstituées à la fin du mois', 'Feuille de pointage par équipe', 'Pointage horodaté, export pour le comptable'] },
      { label: 'Le client prévenu', cells: ['Si quelqu’un y pense', 'Message type envoyé par le chef', 'SMS ou WhatsApp automatique au départ'] },
    ], highlight: 2, caption: 'Figure 1 · Le téléphone n’est pas le problème. Le problème, c’est que l’information meurt à la fin de l’appel.', alt: 'Les cinq informations vitales d’une équipe terrain et où elles vivent aujourd’hui, après une semaine de règles, et avec une application terrain.' },
    app: { title: 'L’application terrain : trois écrans pour l’employé, un bureau pour vous', layers: [
      { label: 'Employé', items: [{ name: 'Ma journée', sub: 'missions du jour, ordre, adresses' }, { name: 'Ma mission', sub: 'début, checklist, fin, hors connexion', accent: true }, { name: 'Ma preuve', sub: 'photo, signature, position' }] },
      { label: 'Chef d’équipe', items: [{ name: 'Dispatch', sub: 'attribuer, réattribuer, voir qui est où' }, { name: 'Alertes', sub: 'retard, mission non commencée, absence' }] },
      { label: 'Bureau', items: [{ name: 'Planning et pointage', sub: 'heures, absences, export paie' }, { name: 'Clients', sub: 'historique, preuves, notifications' }] },
      { label: 'Données', items: [{ name: 'Backend, PostgreSQL, cartes', sub: 'hébergement conforme loi 18-07' }] },
    ], caption: 'Figure 2 · L’employé ne voit que trois écrans, en arabe ou en français, avec de gros boutons. Tout le reste est pour le bureau.', alt: 'Architecture d’une application terrain : trois écrans employé (ma journée, ma mission, ma preuve), dispatch et alertes pour le chef d’équipe, planning, pointage et clients pour le bureau, backend conforme loi 18-07.' },
    ai: { title: 'Où l’IA aide une équipe terrain, et où elle n’apporte rien', columns: ['Gain réel', 'Prérequis'], rows: [
      { label: 'Rapport vocal en darija transformé en compte rendu écrit', cells: [2, 'Application terrain avec enregistrement'] },
      { label: 'Optimisation de l’ordre des missions et des tournées', cells: [2, 'Adresses avec position GPS'] },
      { label: 'Alerte sur les anomalies de pointage', cells: [1, 'Trois mois de pointage horodaté'] },
      { label: 'Prévision des absences et des pics', cells: [1, 'Six mois d’historique'] },
      { label: 'Chatbot RH pour les employés', cells: [0, 'Peu de valeur avant les trois premiers'] },
    ], legend: '●  gain fort      ◐  gain moyen      ○  pas encore', caption: 'Figure 3 · Le rapport vocal est l’usage le plus rentable : l’employé parle trente secondes, le bureau reçoit un compte rendu structuré.', alt: 'Usages de l’IA pour une équipe terrain classés par gain : rapport vocal et optimisation des tournées forts, anomalies de pointage et prévision des absences moyens, chatbot RH faible.' },
    timeline: { title: 'Du téléphone à l’application terrain, sans bloquer l’activité', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'vos missions, vos statuts, vos preuves', from: 0, to: 1 },
      { label: 'Design', note: 'trois écrans testés avec deux employés', from: 1, to: 3 },
      { label: 'Développement', note: 'application, dispatch, bureau', from: 3, to: 9 },
      { label: 'Pilote une équipe', note: 'dix employés, deux semaines, en parallèle du téléphone', from: 9, to: 11 },
      { label: 'Bascule', note: 'toutes les équipes, export paie du premier mois', from: 11, to: 12, accent: true },
    ], caption: 'Figure 4 · Le pilote tourne en parallèle du téléphone. On coupe le téléphone quand l’équipe pilote ne l’utilise plus d’elle-même.', alt: 'Calendrier en semaines : cadrage 0 à 1, design 1 à 3, développement 3 à 9, pilote une équipe 9 à 11, bascule 11 à 12.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Field teams', title: ['Fifty employees', 'in the field.', 'Everything by phone.'], subtitle: 'The three facts nobody owns, what gets fixed in a week, the three-screen field app, where AI really helps.', left: { label: 'Today', sub: 'calls, groups, the supervisor’s memory' }, right: { label: 'In 12 weeks', sub: 'my day · my job · my proof' }, note: 'Algeria · 2026' },
    flows: { title: 'The five vital facts, and where they live at each tier', columns: ['Today', 'Tier 1 · rules', 'Tier 2 · field app'], rows: [
      { label: 'Who works today, and where', cells: ['In the supervisor’s head', 'One weekly schedule, published Thursday', 'Today’s schedule on everyone’s phone'] },
      { label: 'Which job is done, or not', cells: ['A call, then forgotten', 'Start / end message in a fixed format', 'Job with status, offline-capable'] },
      { label: 'Proof of work done', cells: ['A photo lost in a group', 'Photo named job + date', 'Photo, signature and position inside the job'] },
      { label: 'Hours, for payroll', cells: ['Reconstructed at month end', 'Timesheet per team', 'Timestamped clock-in, export for the accountant'] },
      { label: 'The customer informed', cells: ['If someone remembers', 'Template message sent by the supervisor', 'Automatic SMS or WhatsApp at departure'] },
    ], highlight: 2, caption: 'Figure 1 · The phone is not the problem. The problem is that the information dies at the end of the call.', alt: 'The five vital facts of a field team and where they live today, after a week of rules, and with a field app.' },
    app: { title: 'The field app: three screens for the employee, one office for you', layers: [
      { label: 'Employee', items: [{ name: 'My day', sub: 'today’s jobs, order, addresses' }, { name: 'My job', sub: 'start, checklist, end, offline', accent: true }, { name: 'My proof', sub: 'photo, signature, position' }] },
      { label: 'Supervisor', items: [{ name: 'Dispatch', sub: 'assign, reassign, see who is where' }, { name: 'Alerts', sub: 'late, job not started, absence' }] },
      { label: 'Office', items: [{ name: 'Schedule and clock-in', sub: 'hours, absences, payroll export' }, { name: 'Customers', sub: 'history, proofs, notifications' }] },
      { label: 'Data', items: [{ name: 'Backend, PostgreSQL, maps', sub: 'Law 18-07 compliant hosting' }] },
    ], caption: 'Figure 2 · The employee sees only three screens, in Arabic or French, with big buttons. Everything else is for the office.', alt: 'Architecture of a field app: three employee screens (my day, my job, my proof), dispatch and alerts for the supervisor, schedule, clock-in and customers for the office, Law 18-07 compliant backend.' },
    ai: { title: 'Where AI helps a field team, and where it adds nothing', columns: ['Real gain', 'Prerequisite'], rows: [
      { label: 'Voice report in darija turned into a written summary', cells: [2, 'Field app with recording'] },
      { label: 'Optimising job order and routes', cells: [2, 'Addresses with GPS position'] },
      { label: 'Alerts on clock-in anomalies', cells: [1, 'Three months of timestamped clock-ins'] },
      { label: 'Forecasting absences and peaks', cells: [1, 'Six months of history'] },
      { label: 'HR chatbot for employees', cells: [0, 'Little value before the first three'] },
    ], legend: '●  strong gain      ◐  medium gain      ○  not yet', caption: 'Figure 3 · The voice report is the most profitable use: the employee talks for thirty seconds, the office receives a structured summary.', alt: 'AI uses for a field team ranked by gain: voice reports and route optimisation strong, clock-in anomalies and absence forecasting medium, HR chatbot weak.' },
    timeline: { title: 'From the phone to the field app, without stopping operations', unit: 'weeks', items: [
      { label: 'Scoping', note: 'your jobs, your statuses, your proofs', from: 0, to: 1 },
      { label: 'Design', note: 'three screens tested with two employees', from: 1, to: 3 },
      { label: 'Development', note: 'app, dispatch, office', from: 3, to: 9 },
      { label: 'Pilot with one team', note: 'ten employees, two weeks, alongside the phone', from: 9, to: 11 },
      { label: 'Switch-over', note: 'all teams, first month payroll export', from: 11, to: 12, accent: true },
    ], caption: 'Figure 4 · The pilot runs alongside the phone. You cut the phone when the pilot team stops using it on its own.', alt: 'Timeline in weeks: scoping 0 to 1, design 1 to 3, development 3 to 9, pilot with one team 9 to 11, switch-over 11 to 12.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · فرق ميدانية', title: ['خمسون موظفاً', 'في الميدان.', 'كل شيء بالهاتف.'], subtitle: 'المعلومات الثلاث التي لا يملكها أحد، ما يُحلّ في أسبوع، تطبيق الميدان بثلاث شاشات، وأين يساعد الذكاء الاصطناعي فعلاً.', left: { label: 'اليوم', sub: 'مكالمات، مجموعات، ذاكرة المشرف' }, right: { label: 'بعد 12 أسبوعاً', sub: 'يومي · مهمتي · إثباتي' }, note: 'الجزائر · 2026' },
    flows: { title: 'المعلومات الخمس الحيوية، وأين تعيش في كل درجة', columns: ['اليوم', 'الدرجة 1 · قواعد', 'الدرجة 2 · تطبيق ميداني'], rows: [
      { label: 'من يعمل اليوم وأين', cells: ['في رأس المشرف', 'جدول أسبوعي واحد يُنشر الخميس', 'جدول اليوم على هاتف كل واحد'] },
      { label: 'أي مهمة أُنجزت أو لا', cells: ['مكالمة ثم نسيان', 'رسالة بداية / نهاية بصيغة ثابتة', 'مهمة بحالة، تعمل دون اتصال'] },
      { label: 'إثبات العمل المنجز', cells: ['صورة ضائعة في مجموعة', 'صورة مسمّاة بالمهمة والتاريخ', 'صورة وتوقيع وموقع داخل المهمة'] },
      { label: 'الساعات، للأجور', cells: ['تُعاد بناؤها آخر الشهر', 'ورقة حضور لكل فريق', 'تسجيل موقّت، تصدير للمحاسب'] },
      { label: 'إبلاغ العميل', cells: ['إن تذكّر أحد', 'رسالة نموذجية يرسلها المشرف', 'SMS أو واتساب تلقائي عند الانطلاق'] },
    ], highlight: 2, caption: 'الشكل 1 · الهاتف ليس المشكلة. المشكلة أن المعلومة تموت في نهاية المكالمة.', alt: 'المعلومات الخمس الحيوية للفريق الميداني وأين تعيش.' },
    app: { title: 'تطبيق الميدان: ثلاث شاشات للموظف ومكتب واحد لك', layers: [
      { label: 'الموظف', items: [{ name: 'يومي', sub: 'مهام اليوم، الترتيب، العناوين' }, { name: 'مهمتي', sub: 'بداية، قائمة تحقق، نهاية، دون اتصال', accent: true }, { name: 'إثباتي', sub: 'صورة، توقيع، موقع' }] },
      { label: 'المشرف', items: [{ name: 'التوزيع', sub: 'إسناد، إعادة إسناد، من أين' }, { name: 'تنبيهات', sub: 'تأخر، مهمة لم تبدأ، غياب' }] },
      { label: 'المكتب', items: [{ name: 'الجدول والحضور', sub: 'ساعات، غيابات، تصدير الأجور' }, { name: 'العملاء', sub: 'سجل، إثباتات، إشعارات' }] },
      { label: 'البيانات', items: [{ name: 'خلفية، PostgreSQL، خرائط', sub: 'استضافة مطابقة للقانون 18-07' }] },
    ], caption: 'الشكل 2 · لا يرى الموظف سوى ثلاث شاشات بالعربية أو الفرنسية بأزرار كبيرة. كل ما عداها للمكتب.', alt: 'بنية تطبيق ميداني.' },
    ai: { title: 'أين يساعد الذكاء الاصطناعي الفريق الميداني، وأين لا يضيف شيئاً', columns: ['الفائدة الحقيقية', 'الشرط المسبق'], rows: [
      { label: 'تقرير صوتي بالدارجة يتحول إلى محضر مكتوب', cells: [2, 'تطبيق ميداني مع تسجيل'] },
      { label: 'تحسين ترتيب المهام والجولات', cells: [2, 'عناوين بموقع GPS'] },
      { label: 'تنبيه على شذوذ الحضور', cells: [1, 'ثلاثة أشهر من تسجيل موقّت'] },
      { label: 'توقّع الغيابات والذروات', cells: [1, 'ستة أشهر من السجل'] },
      { label: 'روبوت محادثة للموارد البشرية', cells: [0, 'قيمة ضئيلة قبل الثلاثة الأولى'] },
    ], legend: '●  فائدة قوية      ◐  متوسطة      ○  ليس بعد', caption: 'الشكل 3 · التقرير الصوتي هو الاستخدام الأكثر ربحية: يتكلم الموظف ثلاثين ثانية ويستلم المكتب محضراً منظّماً.', alt: 'استخدامات الذكاء الاصطناعي للفريق الميداني حسب الفائدة.' },
    timeline: { title: 'من الهاتف إلى تطبيق الميدان دون توقيف النشاط', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'مهامكم، حالاتكم، إثباتاتكم', from: 0, to: 1 },
      { label: 'التصميم', note: 'ثلاث شاشات مختبرة مع موظفَين', from: 1, to: 3 },
      { label: 'التطوير', note: 'التطبيق، التوزيع، المكتب', from: 3, to: 9 },
      { label: 'تجربة بفريق واحد', note: 'عشرة موظفين، أسبوعان، بالتوازي مع الهاتف', from: 9, to: 11 },
      { label: 'الانتقال', note: 'كل الفرق، تصدير أجور الشهر الأول', from: 11, to: 12, accent: true },
    ], caption: 'الشكل 4 · تجري التجربة بالتوازي مع الهاتف. نقطع الهاتف عندما يتوقف فريق التجربة عن استعماله من تلقاء نفسه.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      flows: { svg: matrix({ title: t.flows.title, columns: t.flows.columns, rows: t.flows.rows, highlight: t.flows.highlight, rtl }), caption: t.flows.caption, alt: t.flows.alt },
      app: { svg: layers({ title: t.app.title, layers: t.app.layers, rtl }), caption: t.app.caption, alt: t.app.alt },
      ai: { svg: matrix({ title: t.ai.title, columns: t.ai.columns, rows: t.ai.rows, legend: t.ai.legend, rtl }), caption: t.ai.caption, alt: t.ai.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 12, tick: 2, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
