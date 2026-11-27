import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { dossier, quinze, STRINGS as SC } from './custom/cabinet.mjs';
export const slug = 'logiciel-de-gestion-cabinet-medical-algerie-2027-agenda-salle-d-attente-dossier-patient-ordonnances-imprimees-recettes-du-jour-qui-voit-quoi';
const T = {
  fr: {
    cover: { eyebrow: 'Cabinet médical · Algérie · 2027', title: ['Logiciel de cabinet médical :', 'le dossier ouvert avant le patient'], subtitle: 'Agenda, salle d’attente, dossier du patient, ordonnances imprimées, recettes du jour, qui voit quoi', left: { label: '9 min', sub: 'avec le patient' }, right: { label: '13 min', sub: 'avec le patient' } },
    couches: { title: 'Ce qu’il y a dans un logiciel de cabinet médical, en cinq couches', layers: [
      { label: 'Agenda', items: [{ name: 'L’agenda : rendez-vous par type de visite, passages sans rendez-vous, rappels, salle d’attente', sub: 'ce que tient le secrétariat' }] },
      { label: 'Dossier', items: [{ name: 'Le dossier du patient : antécédents, allergies, traitements, consultations, pièces rattachées', sub: 'ce que le médecin lit avant de parler', accent: true }] },
      { label: 'Consultation', items: [{ name: 'La consultation : notes, mesures, ordonnance depuis les favoris, certificat, courrier au confrère', sub: 'ce qui s’écrit pendant la visite' }] },
      { label: 'Recettes', items: [{ name: 'Les recettes : actes du jour, reçus, restes à régler, clôture de la journée', sub: 'ce qui se compte le soir' }] },
      { label: 'Accès', items: [{ name: 'Les accès : qui voit quoi, sauvegarde chaque nuit, fonctionnement sans Internet', sub: 'ce qui protège le cabinet' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est le dossier du patient : tout le reste, l’agenda comme l’ordonnance, y prend ou y dépose quelque chose.', alt: 'Cinq couches : l’agenda ; le dossier du patient (accentué) ; la consultation ; les recettes ; les accès.' },
    dossier: { caption: 'Figure 2 · Le dossier d’un patient sur trois ans : 12 consultations, 9 ordonnances, 5 analyses dont une attendue, 2 examens d’imagerie, 2 certificats. Patient fictif.' },
    visite: { title: 'Une visite, en six temps', items: [
      { label: 'Rendez-vous', sub: 'pris au téléphone, en ligne ou sur place' },
      { label: 'Arrivée', sub: 'pointée à l’accueil, dossier ouvert' },
      { label: 'Consultation', sub: 'notes, mesures, pièces reçues', accent: true },
      { label: 'Ordonnance', sub: 'depuis les favoris, imprimée, signée' },
      { label: 'Règlement', sub: 'acte enregistré, reçu remis' },
      { label: 'Suite', sub: 'prochain rendez-vous, résultats attendus' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est la consultation : c’est le seul où le médecin est indispensable ; le logiciel sert à ce que les cinq autres ne lui prennent rien.', alt: 'Six temps : rendez-vous, arrivée, consultation (accentuée), ordonnance, règlement, suite.' },
    roles: { title: 'Qui voit quoi : cinq rôles, ce qu’ils font, ce qu’ils ne voient pas', columns: ['Ce que le rôle fait', 'Ce qu’il ne voit pas'], rows: [
      { label: 'Le secrétariat', cells: ['agenda, identité, accueil, reçus', 'notes de consultation, ordonnances'] },
      { label: 'Le médecin', cells: ['dossier complet, ordonnances, certificats', 'rien ne lui est caché dans ses dossiers'] },
      { label: 'Le médecin remplaçant', cells: ['dossiers des patients vus pendant le remplacement', 'le reste de la patientèle, les recettes'] },
      { label: 'L’associé, dans un cabinet de groupe', cells: ['ses propres patients, l’agenda commun', 'les dossiers des autres, sauf accord'] },
      { label: 'La comptabilité', cells: ['recettes par jour et par type d’acte', 'toute donnée médicale'] },
    ], caption: 'Figure 4 · Cinq rôles. Les droits se règlent chez vous ; le principe ne change pas : le secrétariat organise sans lire, la comptabilité compte sans voir, et chaque ouverture de dossier laisse une trace.', alt: 'Matrice de cinq rôles dans un cabinet médical : le secrétariat, le médecin, le médecin remplaçant, l’associé, la comptabilité ; pour chacun, ce que le rôle fait et ce qu’il ne voit pas.' },
    quinze: { caption: 'Figure 5 · La même consultation de quinze minutes : 9 minutes avec le patient sur papier, 13 avec le logiciel. Durées fictives, à mesurer chez vous.' },
    calendrier: { title: 'Six semaines pour un cabinet', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'les types de visite et leurs durées, les modèles d’ordonnance, les rôles, ce qui existe déjà', from: 0, to: 1, accent: true },
      { label: 'Agenda et accueil', note: 'rendez-vous, passages, rappels, salle d’attente, fiche d’identité', from: 1, to: 3 },
      { label: 'Dossier et consultation', note: 'antécédents, notes, mesures, pièces jointes, reprise des patients actifs', from: 2, to: 4 },
      { label: 'Ordonnances et certificats', note: 'favoris du médecin, traitement habituel, impression à l’en-tête du cabinet', from: 3, to: 5 },
      { label: 'Recettes et accès', note: 'actes, reçus, clôture du jour, droits par rôle, sauvegarde testée', from: 4, to: 6 },
      { label: 'Mise en service', note: 'une semaine en double avec le papier, puis bascule', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple, pour un cabinet d’un à trois médecins. La période accentuée est la première : on liste les types de visite et l’on chronomètre quelques consultations avant d’écrire une ligne de code. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : cadrage (accentué), agenda et accueil, dossier et consultation, ordonnances et certificats, recettes et accès, mise en service.' },
  },
  en: {
    cover: { eyebrow: 'Medical practice · Algeria · 2027', title: ['Medical practice software:', 'the file open before the patient'], subtitle: 'Appointments, waiting room, patient file, printed prescriptions, daily takings, who sees what', left: { label: '9 min', sub: 'with the patient' }, right: { label: '13 min', sub: 'with the patient' } },
    couches: { title: 'What is inside medical practice software, in five layers', layers: [
      { label: 'Diary', items: [{ name: 'The diary: appointments by type of visit, walk-ins, reminders, waiting room', sub: 'what the front desk holds' }] },
      { label: 'File', items: [{ name: 'The patient file: history, allergies, treatments, consultations, attached items', sub: 'what the doctor reads before speaking', accent: true }] },
      { label: 'Consultation', items: [{ name: 'The consultation: notes, measurements, prescription from favourites, certificate, letter to a colleague', sub: 'what is written during the visit' }] },
      { label: 'Takings', items: [{ name: 'Takings: the day’s acts, receipts, amounts still due, closing of the day', sub: 'what is counted in the evening' }] },
      { label: 'Access', items: [{ name: 'Access: who sees what, a backup every night, working without the internet', sub: 'what protects the practice' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is the patient file: everything else, the diary as much as the prescription, takes something from it or puts something into it.', alt: 'Five layers: the diary; the patient file (accented); the consultation; takings; access.' },
    dossier: { caption: 'Figure 2 · One patient’s file over three years: 12 consultations, 9 prescriptions, 5 lab tests of which one is awaited, 2 imaging exams, 2 certificates. Fictitious patient.' },
    visite: { title: 'A visit, in six steps', items: [
      { label: 'Appointment', sub: 'made by phone, online or on the spot' },
      { label: 'Arrival', sub: 'checked in at the desk, file opened' },
      { label: 'Consultation', sub: 'notes, measurements, items received', accent: true },
      { label: 'Prescription', sub: 'from favourites, printed, signed' },
      { label: 'Payment', sub: 'act recorded, receipt handed over' },
      { label: 'Follow-up', sub: 'next appointment, results awaited' },
    ], caption: 'Figure 3 · Six steps. The accented step is the consultation: it is the only one where the doctor is indispensable; the software is there so that the other five take nothing from it.', alt: 'Six steps: appointment, arrival, consultation (accented), prescription, payment, follow-up.' },
    roles: { title: 'Who sees what: five roles, what they do, what they do not see', columns: ['What the role does', 'What it does not see'], rows: [
      { label: 'The front desk', cells: ['diary, identity, reception, receipts', 'consultation notes, prescriptions'] },
      { label: 'The doctor', cells: ['full file, prescriptions, certificates', 'nothing is hidden in their own files'] },
      { label: 'The locum doctor', cells: ['files of patients seen during the cover period', 'the rest of the patient list, the takings'] },
      { label: 'The partner, in a group practice', cells: ['their own patients, the shared diary', 'the others’ files, unless agreed'] },
      { label: 'Accounts', cells: ['takings per day and per type of act', 'any medical data'] },
    ], caption: 'Figure 4 · Five roles. Rights are set by you; the principle does not change: the front desk organises without reading, accounts count without seeing, and each opening of a file leaves a trace.', alt: 'Matrix of five roles in a medical practice: the front desk, the doctor, the locum doctor, the partner, accounts; for each, what the role does and what it does not see.' },
    quinze: { caption: 'Figure 5 · The same fifteen-minute consultation: 9 minutes with the patient on paper, 13 with the software. Fictitious durations, to be measured in your practice.' },
    calendrier: { title: 'Six weeks for a practice', unit: 'wk', items: [
      { label: 'Scoping', note: 'the types of visit and their durations, the prescription templates, the roles, what already exists', from: 0, to: 1, accent: true },
      { label: 'Diary and reception', note: 'appointments, walk-ins, reminders, waiting room, identity record', from: 1, to: 3 },
      { label: 'File and consultation', note: 'history, notes, measurements, attachments, taking over active patients', from: 2, to: 4 },
      { label: 'Prescriptions and certificates', note: 'the doctor’s favourites, usual treatment, printing on the practice letterhead', from: 3, to: 5 },
      { label: 'Takings and access', note: 'acts, receipts, closing of the day, rights per role, tested backup', from: 4, to: 6 },
      { label: 'Go-live', note: 'one week in parallel with paper, then switch-over', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example, for a practice of one to three doctors. The accented period is the first: the types of visit are listed and a few consultations are timed before a line of code is written. Indicative durations of a constructed example.', alt: 'Six-week calendar: scoping (accented), diary and reception, file and consultation, prescriptions and certificates, takings and access, go-live.' },
  },
  ar: {
    cover: { eyebrow: 'العيادة الطبية · الجزائر · 2027', title: ['برنامج العيادة الطبية:', 'الملف مفتوح قبل المريض'], subtitle: 'المواعيد، قاعة الانتظار، ملف المريض، الوصفات المطبوعة، مداخيل اليوم، ومن يرى ماذا', left: { label: '9 دقائق', sub: 'مع المريض' }, right: { label: '13 دقيقة', sub: 'مع المريض' } },
    couches: { title: 'ما يوجد في برنامج العيادة الطبية، في خمس طبقات', layers: [
      { label: 'المواعيد', items: [{ name: 'المواعيد: مواعيد حسب نوع الزيارة، مرور دون موعد، تذكيرات، وقاعة الانتظار', sub: 'ما تمسكه الأمانة' }] },
      { label: 'الملف', items: [{ name: 'ملف المريض: السوابق، الحساسيات، العلاجات، الفحوص، والوثائق المرفقة', sub: 'ما يقرؤه الطبيب قبل أن يتكلم', accent: true }] },
      { label: 'الفحص', items: [{ name: 'الفحص: ملاحظات، قياسات، وصفة من المفضّلة، شهادة، ورسالة إلى زميل', sub: 'ما يُكتب أثناء الزيارة' }] },
      { label: 'المداخيل', items: [{ name: 'المداخيل: أعمال اليوم، الوصولات، ما بقي للدفع، وإغلاق اليوم', sub: 'ما يُعدّ مساءً' }] },
      { label: 'الدخول', items: [{ name: 'الدخول: من يرى ماذا، نسخة احتياطية كل ليلة، وعمل دون إنترنت', sub: 'ما يحمي العيادة' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي ملف المريض: كل الباقي، المواعيد كالوصفة، يأخذ منه شيئاً أو يضع فيه شيئاً.', alt: 'خمس طبقات: المواعيد؛ ملف المريض (مبرز)؛ الفحص؛ المداخيل؛ والدخول.' },
    dossier: { caption: 'الشكل 2 · ملف مريض على ثلاث سنوات: 12 فحصاً، 9 وصفات، 5 تحاليل منها واحد منتظَر، فحصان بالتصوير، وشهادتان. مريض خيالي.' },
    visite: { title: 'زيارة، في ست مراحل', items: [
      { label: 'الموعد', sub: 'بالهاتف، عبر الإنترنت، أو في المكان' },
      { label: 'الوصول', sub: 'يُسجَّل في الاستقبال، والملف يُفتح' },
      { label: 'الفحص', sub: 'ملاحظات، قياسات، ووثائق مستلمة', accent: true },
      { label: 'الوصفة', sub: 'من المفضّلة، مطبوعة، وممضاة' },
      { label: 'الدفع', sub: 'العمل يُسجَّل، والوصل يُسلَّم' },
      { label: 'المتابعة', sub: 'الموعد القادم، والنتائج المنتظَرة' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي الفحص: هي الوحيدة التي لا غنى فيها عن الطبيب؛ والبرنامج موجود حتى لا تأخذ الخمس الأخرى منها شيئاً.', alt: 'ست مراحل: الموعد، الوصول، الفحص (مبرز)، الوصفة، الدفع، والمتابعة.' },
    roles: { title: 'من يرى ماذا: خمسة أدوار، ما تفعله، وما لا تراه', columns: ['ما يفعله الدور', 'ما لا يراه'], rows: [
      { label: 'الأمانة', cells: ['المواعيد، الهوية، الاستقبال، والوصولات', 'ملاحظات الفحص، والوصفات'] },
      { label: 'الطبيب', cells: ['الملف كاملاً، الوصفات، والشهادات', 'لا يُخفى عنه شيء في ملفاته'] },
      { label: 'الطبيب المعوِّض', cells: ['ملفات المرضى الذين رآهم مدة التعويض', 'باقي المرضى، والمداخيل'] },
      { label: 'الشريك، في عيادة جماعية', cells: ['مرضاه، والمواعيد المشتركة', 'ملفات الآخرين، إلا باتفاق'] },
      { label: 'المحاسبة', cells: ['المداخيل لكل يوم ولكل نوع عمل', 'كل معطى طبي'] },
    ], caption: 'الشكل 4 · خمسة أدوار. الحقوق تُضبط عندكم؛ والمبدأ لا يتغيّر: الأمانة تنظّم دون أن تقرأ، المحاسبة تعدّ دون أن ترى، وكل فتح لملف يترك أثراً.', alt: 'مصفوفة من خمسة أدوار في عيادة طبية: الأمانة، الطبيب، الطبيب المعوِّض، الشريك، والمحاسبة؛ ولكل واحد، ما يفعله الدور وما لا يراه.' },
    quinze: { caption: 'الشكل 5 · الفحص نفسه من خمس عشرة دقيقة: 9 دقائق مع المريض على الورق، و13 بالبرنامج. مدد خيالية، تُقاس عندكم.' },
    calendrier: { title: 'ستة أسابيع لعيادة', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'أنواع الزيارة ومددها، نماذج الوصفات، الأدوار، وما هو موجود', from: 0, to: 1, accent: true },
      { label: 'المواعيد والاستقبال', note: 'المواعيد، المرور، التذكيرات، قاعة الانتظار، وبطاقة الهوية', from: 1, to: 3 },
      { label: 'الملف والفحص', note: 'السوابق، الملاحظات، القياسات، المرفقات، واسترجاع المرضى النشطين', from: 2, to: 4 },
      { label: 'الوصفات والشهادات', note: 'مفضّلة الطبيب، العلاج المعتاد، والطباعة بترويسة العيادة', from: 3, to: 5 },
      { label: 'المداخيل والدخول', note: 'الأعمال، الوصولات، إغلاق اليوم، الحقوق لكل دور، ونسخة احتياطية مجرَّبة', from: 4, to: 6 },
      { label: 'التشغيل', note: 'أسبوع بالتوازي مع الورق، ثم الانتقال', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال، لعيادة من طبيب إلى ثلاثة. الفترة المبرزة هي الأولى: تُحصى أنواع الزيارة وتُوقَّت بعض الفحوص قبل كتابة سطر من الشيفرة. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: التأطير (مبرز)، المواعيد والاستقبال، الملف والفحص، الوصفات والشهادات، المداخيل والدخول، ثم التشغيل.' },
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
      dossier: { svg: dossier(e.dossier, rtl), caption: t.dossier.caption, alt: e.dossier.alt },
      visite: { svg: steps({ title: t.visite.title, steps: t.visite.items, arrows: true, rtl }), caption: t.visite.caption, alt: t.visite.alt },
      roles: { svg: matrix({ title: t.roles.title, columns: t.roles.columns, rows: t.roles.rows, rtl }), caption: t.roles.caption, alt: t.roles.alt },
      quinze: { svg: quinze(e.quinze, rtl), caption: t.quinze.caption, alt: e.quinze.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
