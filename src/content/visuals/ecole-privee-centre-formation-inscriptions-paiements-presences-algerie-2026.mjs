import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · École privée et formation', title: ['Inscriptions, paiements,', 'présences : tout', 'sur papier et WhatsApp.'], subtitle: 'Ce qu’une école privée ou un centre de formation perd chaque trimestre, ce qui se règle en une semaine, la plateforme qu’il faut, et où l’IA aide vraiment.', left: { label: 'Aujourd’hui', sub: 'registres, reçus manuels, groupes de parents' }, right: { label: 'À la rentrée', sub: 'un dossier élève, un échéancier, une application parents' }, note: 'Algérie · 2026' },
    leaks: { title: 'Ce qu’une école perd quand tout est sur papier', items: [
      { label: 'Les impayés découverts en fin de trimestre', sub: 'Les tranches se paient en espèces, le reçu se perd, personne ne sait qui doit quoi avant le bilan.' },
      { label: 'Les absences que les parents apprennent le soir', sub: 'L’appel se fait sur un cahier. Le parent l’apprend trop tard, ou jamais.' },
      { label: 'Les inscriptions qui se font en septembre, dans la cour', sub: 'Files d’attente, dossiers incomplets, classes qui se remplissent au hasard.' },
      { label: 'Les enseignants payés de mémoire', sub: 'Heures réelles, remplacements et absences reconstitués à la fin du mois.' },
      { label: 'Le groupe WhatsApp des parents', sub: 'Cent messages par jour, l’information importante noyée, la direction injoignable.', accent: true },
    ], caption: 'Figure 1 · Cinq fuites, un seul point commun : aucune information n’existe ailleurs que dans un cahier ou un téléphone.', alt: 'Les cinq fuites d’une école privée gérée sur papier : impayés découverts tard, absences apprises le soir, inscriptions en septembre dans la cour, enseignants payés de mémoire, groupe WhatsApp des parents saturé.' },
    platform: { title: 'Ce qu’une plateforme d’école contient, au minimum', layers: [
      { label: 'Parents', items: [{ name: 'Application parents', sub: 'absences du jour, notes, échéancier, messages de l’école, AR et FR', accent: true }, { name: 'Paiement des tranches', sub: 'espèces au secrétariat enregistrées, CIB et Edahabia en option' }] },
      { label: 'Enseignants', items: [{ name: 'Appel en deux gestes', sub: 'sur téléphone, en début de cours' }, { name: 'Notes et devoirs', sub: 'saisis une fois, visibles par les parents' }] },
      { label: 'Secrétariat', items: [{ name: 'Dossier élève unique', sub: 'inscription, classe, pièces, historique' }, { name: 'Échéancier et reçus', sub: 'qui doit quoi, relances automatiques' }] },
      { label: 'Direction', items: [{ name: 'Tableau de bord', sub: 'impayés, taux de présence, heures enseignants, remplissage des classes' }, { name: 'Planning', sub: 'salles, enseignants, remplacements' }] },
      { label: 'Données', items: [{ name: 'Hébergement conforme loi 18-07', sub: 'données des mineurs, accès tracés' }] },
    ], caption: 'Figure 2 · L’application parents est ce qui justifie le projet aux yeux des familles. Le dossier élève unique est ce qui le justifie aux yeux de la direction.', alt: 'Architecture d’une plateforme pour école privée : application parents avec absences, notes et échéancier, appel enseignant en deux gestes, dossier élève unique et échéancier au secrétariat, tableau de bord et planning pour la direction, hébergement conforme loi 18-07.' },
    ai: { title: 'Où l’IA aide une école, et où elle n’apporte rien', columns: ['Gain réel', 'Prérequis'], rows: [
      { label: 'Relances de paiement personnalisées, au bon moment', cells: [2, 'Échéancier dans la plateforme'] },
      { label: 'Alerte sur les absences répétées, avant le décrochage', cells: [2, 'Appel quotidien dans la plateforme'] },
      { label: 'Réponses aux questions des parents, 24h/24', cells: [1, 'Règlement, horaires et calendrier à jour'] },
      { label: 'Planning des salles et des enseignants', cells: [1, 'Un an de contraintes saisies'] },
      { label: 'Notation automatique des copies', cells: [0, 'Hors sujet : la correction est l’acte de l’enseignant'] },
    ], legend: '●  gain fort      ◐  gain moyen      ○  hors sujet', caption: 'Figure 3 · Les deux usages qui paient traitent les deux fuites les plus chères : l’impayé et le décrochage.', alt: 'Usages de l’IA pour une école classés par gain : relances de paiement et alertes d’absences forts, réponses aux parents et planning moyens, notation automatique hors sujet.' },
    timeline: { title: 'Prêt pour la rentrée : douze semaines, en partant de juin', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'vos tranches, vos classes, vos règles', from: 0, to: 1 },
      { label: 'Reprise des élèves et des impayés', note: 'registres de l’année en cours', from: 1, to: 3 },
      { label: 'Développement ou paramétrage', note: 'dossier élève, échéancier, appel, application parents', from: 2, to: 8 },
      { label: 'Inscriptions en ligne', note: 'réinscriptions d’abord, nouveaux ensuite', from: 8, to: 11 },
      { label: 'Rentrée', note: 'appel dès le premier jour, parents déjà dans l’application', from: 11, to: 12, accent: true },
    ], caption: 'Figure 4 · On ne bascule pas une école en septembre. On prépare en juin, on inscrit en juillet et août, on ouvre l’appel le premier jour.', alt: 'Calendrier en semaines : cadrage 0 à 1, reprise 1 à 3, développement 2 à 8, inscriptions en ligne 8 à 11, rentrée 11 à 12.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Private school and training', title: ['Enrolments, payments,', 'attendance: all', 'on paper and WhatsApp.'], subtitle: 'What a private school or training centre loses every term, what gets fixed in a week, the platform it needs, and where AI really helps.', left: { label: 'Today', sub: 'registers, handwritten receipts, parent groups' }, right: { label: 'By September', sub: 'one student record, one schedule, a parent app' }, note: 'Algeria · 2026' },
    leaks: { title: 'What a school loses when everything is on paper', items: [
      { label: 'Unpaid fees discovered at term end', sub: 'Instalments are paid in cash, the receipt gets lost, nobody knows who owes what before the review.' },
      { label: 'Absences parents learn about in the evening', sub: 'Roll call is in a notebook. The parent learns too late, or never.' },
      { label: 'Enrolments done in September, in the yard', sub: 'Queues, incomplete files, classes filled at random.' },
      { label: 'Teachers paid from memory', sub: 'Real hours, substitutions and absences reconstructed at month end.' },
      { label: 'The parents’ WhatsApp group', sub: 'A hundred messages a day, important information drowned, management unreachable.', accent: true },
    ], caption: 'Figure 1 · Five leaks, one common point: no information exists anywhere but in a notebook or a phone.', alt: 'The five leaks of a private school run on paper: unpaid fees discovered late, absences learnt in the evening, September enrolments in the yard, teachers paid from memory, saturated parents’ WhatsApp group.' },
    platform: { title: 'What a school platform contains, at minimum', layers: [
      { label: 'Parents', items: [{ name: 'Parent app', sub: 'today’s absences, grades, payment schedule, school messages, AR and FR', accent: true }, { name: 'Instalment payment', sub: 'cash at the office recorded, CIB and Edahabia as options' }] },
      { label: 'Teachers', items: [{ name: 'Roll call in two taps', sub: 'on a phone, at the start of class' }, { name: 'Grades and homework', sub: 'entered once, visible to parents' }] },
      { label: 'Office', items: [{ name: 'Single student record', sub: 'enrolment, class, documents, history' }, { name: 'Schedule and receipts', sub: 'who owes what, automatic reminders' }] },
      { label: 'Management', items: [{ name: 'Dashboard', sub: 'unpaid fees, attendance rate, teacher hours, class fill' }, { name: 'Planning', sub: 'rooms, teachers, substitutions' }] },
      { label: 'Data', items: [{ name: 'Law 18-07 compliant hosting', sub: 'minors’ data, traced access' }] },
    ], caption: 'Figure 2 · The parent app is what justifies the project to families. The single student record is what justifies it to management.', alt: 'Architecture of a private school platform: parent app with absences, grades and schedule, two-tap teacher roll call, single student record and schedule at the office, dashboard and planning for management, Law 18-07 compliant hosting.' },
    ai: { title: 'Where AI helps a school, and where it adds nothing', columns: ['Real gain', 'Prerequisite'], rows: [
      { label: 'Personalised payment reminders, at the right time', cells: [2, 'Payment schedule in the platform'] },
      { label: 'Alerts on repeated absences, before drop-out', cells: [2, 'Daily roll call in the platform'] },
      { label: 'Answers to parents’ questions, 24/7', cells: [1, 'Rules, hours and calendar up to date'] },
      { label: 'Room and teacher planning', cells: [1, 'A year of constraints entered'] },
      { label: 'Automatic grading of papers', cells: [0, 'Off topic: marking is the teacher’s act'] },
    ], legend: '●  strong gain      ◐  medium gain      ○  off topic', caption: 'Figure 3 · The two uses that pay address the two most expensive leaks: unpaid fees and drop-out.', alt: 'AI uses for a school ranked by gain: payment reminders and absence alerts strong, parent answers and planning medium, automatic grading off topic.' },
    timeline: { title: 'Ready for September: twelve weeks, starting in June', unit: 'weeks', items: [
      { label: 'Scoping', note: 'your instalments, your classes, your rules', from: 0, to: 1 },
      { label: 'Import of students and unpaid fees', note: 'current year registers', from: 1, to: 3 },
      { label: 'Development or setup', note: 'student record, schedule, roll call, parent app', from: 2, to: 8 },
      { label: 'Online enrolments', note: 're-enrolments first, new students after', from: 8, to: 11 },
      { label: 'Back to school', note: 'roll call from day one, parents already in the app', from: 11, to: 12, accent: true },
    ], caption: 'Figure 4 · You do not switch a school in September. You prepare in June, enrol in July and August, open roll call on day one.', alt: 'Timeline in weeks: scoping 0 to 1, import 1 to 3, development 2 to 8, online enrolments 8 to 11, back to school 11 to 12.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · مدرسة خاصة وتكوين', title: ['تسجيلات، مدفوعات،', 'حضور: كل شيء', 'على الورق وواتساب.'], subtitle: 'ما تخسره مدرسة خاصة أو مركز تكوين كل فصل، ما يُحلّ في أسبوع، المنصة اللازمة، وأين يساعد الذكاء الاصطناعي فعلاً.', left: { label: 'اليوم', sub: 'سجلات، وصولات يدوية، مجموعات أولياء' }, right: { label: 'في الدخول المدرسي', sub: 'ملف تلميذ، جدول أقساط، تطبيق أولياء' }, note: 'الجزائر · 2026' },
    leaks: { title: 'ما تخسره المدرسة عندما يكون كل شيء على الورق', items: [
      { label: 'المتأخرات تُكتشف آخر الفصل', sub: 'تُدفع الأقساط نقداً، يضيع الوصل، ولا أحد يعرف من يدين بماذا قبل الحصيلة.' },
      { label: 'غيابات يعرفها الأولياء مساءً', sub: 'المناداة في دفتر. يعرفها الولي متأخراً أو لا يعرفها.' },
      { label: 'تسجيلات في سبتمبر في الساحة', sub: 'طوابير، ملفات ناقصة، أقسام تمتلئ عشوائياً.' },
      { label: 'أساتذة يُدفع لهم من الذاكرة', sub: 'ساعات حقيقية وتعويضات وغيابات تُعاد بناؤها آخر الشهر.' },
      { label: 'مجموعة واتساب الأولياء', sub: 'مئة رسالة يومياً، المعلومة المهمة غارقة، الإدارة لا تُطال.', accent: true },
    ], caption: 'الشكل 1 · خمسة تسربات ونقطة مشتركة واحدة: لا معلومة توجد في غير دفتر أو هاتف.', alt: 'التسربات الخمسة لمدرسة خاصة تُدار على الورق.' },
    platform: { title: 'ما تحتويه منصة المدرسة، كحد أدنى', layers: [
      { label: 'الأولياء', items: [{ name: 'تطبيق الأولياء', sub: 'غيابات اليوم، النقاط، جدول الأقساط، رسائل المدرسة، عربي وفرنسي', accent: true }, { name: 'دفع الأقساط', sub: 'نقد في السكرتارية مسجَّل، CIB والذهبية اختيارياً' }] },
      { label: 'الأساتذة', items: [{ name: 'المناداة بلمستين', sub: 'على الهاتف في بداية الحصة' }, { name: 'النقاط والواجبات', sub: 'تُدخل مرة واحدة ويراها الأولياء' }] },
      { label: 'السكرتارية', items: [{ name: 'ملف تلميذ واحد', sub: 'تسجيل، قسم، وثائق، سجل' }, { name: 'جدول الأقساط والوصولات', sub: 'من يدين بماذا، تذكيرات تلقائية' }] },
      { label: 'الإدارة', items: [{ name: 'لوحة قيادة', sub: 'متأخرات، نسبة الحضور، ساعات الأساتذة، امتلاء الأقسام' }, { name: 'التخطيط', sub: 'قاعات، أساتذة، تعويضات' }] },
      { label: 'البيانات', items: [{ name: 'استضافة مطابقة للقانون 18-07', sub: 'بيانات قاصرين، وصول متتبع' }] },
    ], caption: 'الشكل 2 · تطبيق الأولياء هو ما يبرّر المشروع في أعين العائلات. وملف التلميذ الواحد هو ما يبرّره في أعين الإدارة.', alt: 'بنية منصة مدرسة خاصة.' },
    ai: { title: 'أين يساعد الذكاء الاصطناعي المدرسة، وأين لا يضيف شيئاً', columns: ['الفائدة الحقيقية', 'الشرط المسبق'], rows: [
      { label: 'تذكيرات دفع مخصصة في الوقت المناسب', cells: [2, 'جدول الأقساط في المنصة'] },
      { label: 'تنبيه على الغيابات المتكررة قبل الانقطاع', cells: [2, 'مناداة يومية في المنصة'] },
      { label: 'أجوبة على أسئلة الأولياء على مدار الساعة', cells: [1, 'نظام داخلي ومواعيد وتقويم محدّثة'] },
      { label: 'تخطيط القاعات والأساتذة', cells: [1, 'سنة من القيود المدخلة'] },
      { label: 'تنقيط آلي للأوراق', cells: [0, 'خارج الموضوع: التصحيح فعل الأستاذ'] },
    ], legend: '●  فائدة قوية      ◐  متوسطة      ○  خارج الموضوع', caption: 'الشكل 3 · الاستخدامان المجديان يعالجان أغلى تسربين: المتأخرات والانقطاع.', alt: 'استخدامات الذكاء الاصطناعي للمدرسة حسب الفائدة.' },
    timeline: { title: 'جاهزون للدخول المدرسي: اثنا عشر أسبوعاً انطلاقاً من جوان', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'أقساطكم، أقسامكم، قواعدكم', from: 0, to: 1 },
      { label: 'استرجاع التلاميذ والمتأخرات', note: 'سجلات السنة الجارية', from: 1, to: 3 },
      { label: 'التطوير أو الإعداد', note: 'ملف تلميذ، جدول أقساط، مناداة، تطبيق أولياء', from: 2, to: 8 },
      { label: 'تسجيلات إلكترونية', note: 'إعادة التسجيل أولاً، الجدد بعدها', from: 8, to: 11 },
      { label: 'الدخول المدرسي', note: 'مناداة من اليوم الأول، الأولياء في التطبيق أصلاً', from: 11, to: 12, accent: true },
    ], caption: 'الشكل 4 · لا تنتقل مدرسة في سبتمبر. نحضّر في جوان، نسجّل في جويلية وأوت، ونفتح المناداة في اليوم الأول.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      leaks: { svg: steps({ title: t.leaks.title, steps: t.leaks.items, arrows: false, rtl }), caption: t.leaks.caption, alt: t.leaks.alt },
      platform: { svg: layers({ title: t.platform.title, layers: t.platform.layers, rtl }), caption: t.platform.caption, alt: t.platform.alt },
      ai: { svg: matrix({ title: t.ai.title, columns: t.ai.columns, rows: t.ai.rows, legend: t.ai.legend, rtl }), caption: t.ai.caption, alt: t.ai.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 12, tick: 2, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
