import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { debit, parcours, STRINGS as SC } from './custom/elearning.mjs';
export const slug = 'comment-creer-une-plateforme-de-formation-en-ligne-algerie-2027-e-learning-paiement-acces-videos-protegees-quiz-certificat-suivi-des-eleves';
const T = {
  fr: {
    cover: { eyebrow: 'Formation en ligne · Algérie · 2027', title: ['Créer une plateforme de formation :', 'payer, regarder, finir, prouver'], subtitle: 'Inscription et paiement, accès ouvert seul, vidéo en flux protégé, quiz, certificat, suivi des abandons', left: { label: 'Fichier en 720p', sub: '225 Mo, 8 min d’attente' }, right: { label: 'Flux adaptatif', sub: '91 Mo, sans attente' } },
    etapes: { title: 'De l’inscription au certificat, en six temps', items: [
      { label: 'Inscription', sub: 'un compte par numéro de téléphone' },
      { label: 'Paiement', sub: 'carte en ligne, ou reçu de versement vérifié', accent: true },
      { label: 'Accès ouvert', sub: 'automatique, pour la durée achetée' },
      { label: 'Leçons', sub: 'vidéo en flux, reprise au bon endroit' },
      { label: 'Quiz et devoirs', sub: 'corrigés, notés, comptés dans la progression' },
      { label: 'Certificat', sub: 'nominatif, vérifiable par un lien' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est le paiement : c’est lui qui ouvre l’accès, sans qu’une personne vérifie un reçu à minuit.', alt: 'Six temps : inscription, paiement (accentué), accès ouvert, leçons, quiz et devoirs, certificat.' },
    modeles: { title: 'Cinq façons de vendre un cours, et ce que chacune exige', columns: ['Ce que l’élève achète', 'Ce que la plateforme doit faire'], rows: [
      { label: 'Cours enregistré, à l’unité', cells: ['un cours, avec un accès limité ou à vie', 'ouverture d’accès au paiement, vidéo protégée'] },
      { label: 'Abonnement mensuel', cells: ['tout le catalogue, tant que l’on paie', 'renouvellement, coupure et reprise d’accès'] },
      { label: 'Séances en direct, avec rediffusion', cells: ['des séances à heure fixe, revues ensuite', 'calendrier, salle en direct, enregistrement'] },
      { label: 'Formation d’entreprise', cells: ['des places achetées par l’employeur', 'comptes par lot, suivi par personne, rapport'] },
      { label: 'Préparation d’examen', cells: ['une saison, avec un pic avant l’épreuve', 'tenue en charge, sujets corrigés, classement'] },
    ], caption: 'Figure 2 · Cinq façons de vendre. Le modèle se choisit avant de construire : un abonnement et un cours à l’unité ne demandent pas la même plateforme.', alt: 'Matrice de cinq modèles de vente : cours enregistré à l’unité, abonnement mensuel, séances en direct avec rediffusion, formation d’entreprise, préparation d’examen ; pour chacun, ce que l’élève achète et ce que la plateforme doit faire.' },
    debit: { caption: 'Figure 3 · Une leçon de douze minutes : un fichier en 720p pèse 225 Mo et s’arrête 8 minutes sur 12 ; un flux adaptatif consomme 91 Mo sans attente. Débits fictifs.' },
    parcours: { caption: 'Figure 4 · Sur 1 000 inscrits, 780 commencent et 190 terminent ; après le démarrage, le plus gros décrochage est à la leçon 6, de 48 minutes. Effectifs fictifs.' },
    calendrier: { title: 'Dix semaines, avec un premier cours pilote', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'vos cours, vos prix, vos modes de paiement, le modèle de vente, ce que vous envoyez par messagerie', from: 0, to: 1, accent: true },
      { label: 'Comptes, catalogue, inscription', note: 'pages de cours, compte par téléphone, panier, extraits gratuits', from: 1, to: 4 },
      { label: 'Paiement et ouverture d’accès', note: 'carte en ligne, reçus de versement vérifiés en file, accès automatique', from: 3, to: 6 },
      { label: 'Vidéo protégée', note: 'encodage en plusieurs qualités, liens signés, filigrane, nombre d’appareils', from: 4, to: 7 },
      { label: 'Parcours, quiz, certificat', note: 'progression, quiz, devoirs, certificat vérifiable', from: 6, to: 9 },
      { label: 'Cours pilote et mise en service', note: 'un premier cours, une centaine d’élèves, corrections, puis le catalogue', from: 8, to: 10 },
    ], caption: 'Figure 5 · Dix semaines dans l’exemple. La période accentuée est la première ; la mise en service se fait avec un seul cours et une centaine d’élèves avant d’ouvrir le catalogue. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix semaines : cadrage (accentué), comptes, catalogue et inscription, paiement et ouverture d’accès, vidéo protégée, parcours, quiz et certificat, cours pilote et mise en service.' },
    couches: { title: 'Ce qu’il y a dans une plateforme de formation, en cinq couches', layers: [
      { label: 'Vitrine', items: [{ name: 'La vitrine : pages de cours, extraits gratuits, prix, avis, inscription par numéro de téléphone', sub: 'ce que voit la personne qui hésite' }] },
      { label: 'Paiement', items: [{ name: 'Le paiement et l’accès : carte en ligne ou reçu vérifié, accès ouvert seul, durée, renouvellement', sub: 'qui a payé quoi, et jusqu’à quand', accent: true }] },
      { label: 'Vidéo', items: [{ name: 'La vidéo : plusieurs qualités, flux adaptatif, liens signés, filigrane au nom de l’élève, appareils limités', sub: 'une leçon qui se regarde et ne se transfère pas' }] },
      { label: 'Parcours', items: [{ name: 'Le parcours : leçons courtes, reprise, quiz, devoirs corrigés, certificat vérifiable', sub: 'ce que l’élève a réellement fait' }] },
      { label: 'Pilotage', items: [{ name: 'Le pilotage : ventes, élèves actifs, leçon où l’on décroche, relances, résultats par cours', sub: 'ce qui marche, et ce qu’il faut refaire' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est le paiement et l’accès : tant qu’elle dépend d’une personne, la plateforme ne vend pas la nuit.', alt: 'Cinq couches : la vitrine ; le paiement et l’accès (accentués) ; la vidéo ; le parcours ; le pilotage.' },
  },
  en: {
    cover: { eyebrow: 'Online training · Algeria · 2027', title: ['Building a training platform:', 'pay, watch, finish, prove'], subtitle: 'Enrolment and payment, automatic access, protected video stream, quizzes, certificate, drop-off tracking', left: { label: '720p file', sub: '225 MB, 8 min waiting' }, right: { label: 'Adaptive stream', sub: '91 MB, no waiting' } },
    etapes: { title: 'From enrolment to certificate, in six steps', items: [
      { label: 'Enrolment', sub: 'one account per phone number' },
      { label: 'Payment', sub: 'card online, or a verified transfer receipt', accent: true },
      { label: 'Access opened', sub: 'automatic, for the period bought' },
      { label: 'Lessons', sub: 'streamed video, resumed at the right place' },
      { label: 'Quizzes and work', sub: 'marked, graded, counted in progress' },
      { label: 'Certificate', sub: 'in the learner’s name, checkable by a link' },
    ], caption: 'Figure 1 · Six steps. The accented step is payment: it is what opens access, without someone checking a receipt at midnight.', alt: 'Six steps: enrolment, payment (accented), access opened, lessons, quizzes and work, certificate.' },
    modeles: { title: 'Five ways of selling a course, and what each requires', columns: ['What the learner buys', 'What the platform must do'], rows: [
      { label: 'Recorded course, sold singly', cells: ['one course, with limited or lifetime access', 'access opened on payment, protected video'] },
      { label: 'Monthly subscription', cells: ['the whole catalogue, for as long as they pay', 'renewal, cutting off and restoring access'] },
      { label: 'Live sessions, with replay', cells: ['sessions at a fixed time, watched again later', 'calendar, live room, recording'] },
      { label: 'Company training', cells: ['seats bought by the employer', 'accounts in batches, tracking per person, report'] },
      { label: 'Exam preparation', cells: ['one season, with a peak before the exam', 'load handling, corrected papers, ranking'] },
    ], caption: 'Figure 2 · Five ways of selling. The model is chosen before building: a subscription and a course sold singly do not call for the same platform.', alt: 'Matrix of five sales models: recorded course sold singly, monthly subscription, live sessions with replay, company training, exam preparation; for each, what the learner buys and what the platform must do.' },
    debit: { caption: 'Figure 3 · A twelve-minute lesson: a 720p file weighs 225 MB and stops for 8 minutes of 12; an adaptive stream uses 91 MB with no waiting. Fictitious bit rates.' },
    parcours: { caption: 'Figure 4 · Of 1,000 enrolled, 780 start and 190 finish; after the start, the largest drop is at lesson 6, which lasts 48 minutes. Fictitious numbers.' },
    calendrier: { title: 'Ten weeks, with a first pilot course', unit: 'wk', items: [
      { label: 'Scoping', note: 'your courses, your prices, your payment methods, the sales model, what you send by messaging', from: 0, to: 1, accent: true },
      { label: 'Accounts, catalogue, enrolment', note: 'course pages, account by phone, basket, free extracts', from: 1, to: 4 },
      { label: 'Payment and access', note: 'card online, transfer receipts verified in a queue, automatic access', from: 3, to: 6 },
      { label: 'Protected video', note: 'encoding in several qualities, signed links, watermark, number of devices', from: 4, to: 7 },
      { label: 'Path, quizzes, certificate', note: 'progress, quizzes, assignments, verifiable certificate', from: 6, to: 9 },
      { label: 'Pilot course and go-live', note: 'a first course, about a hundred learners, corrections, then the catalogue', from: 8, to: 10 },
    ], caption: 'Figure 5 · Ten weeks in the example. The accented period is the first; go-live is done with a single course and about a hundred learners before the catalogue opens. Indicative durations of a constructed example.', alt: 'Ten-week calendar: scoping (accented), accounts, catalogue and enrolment, payment and access, protected video, path, quizzes and certificate, pilot course and go-live.' },
    couches: { title: 'What is inside a training platform, in five layers', layers: [
      { label: 'Shop window', items: [{ name: 'The shop window: course pages, free extracts, prices, reviews, enrolment by phone number', sub: 'what the hesitant visitor sees' }] },
      { label: 'Payment', items: [{ name: 'Payment and access: card online or verified receipt, access opened automatically, duration, renewal', sub: 'who paid what, and until when', accent: true }] },
      { label: 'Video', items: [{ name: 'Video: several qualities, adaptive stream, signed links, watermark in the learner’s name, limited devices', sub: 'a lesson that is watched and not passed on' }] },
      { label: 'Path', items: [{ name: 'The path: short lessons, resume, quizzes, marked assignments, verifiable certificate', sub: 'what the learner actually did' }] },
      { label: 'Steering', items: [{ name: 'Steering: sales, active learners, the lesson where people drop off, reminders, results per course', sub: 'what works, and what to redo' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is payment and access: as long as it depends on a person, the platform does not sell at night.', alt: 'Five layers: the shop window; payment and access (accented); video; the path; steering.' },
  },
  ar: {
    cover: { eyebrow: 'التكوين عبر الإنترنت · الجزائر · 2027', title: ['إنشاء منصة تعليمية:', 'دفع، مشاهدة، إتمام، وإثبات'], subtitle: 'تسجيل ودفع، دخول يُفتح تلقائياً، فيديو ببث محمي، اختبارات، شهادة، ومتابعة الانسحاب', left: { label: 'ملف ⁦720p⁩', sub: '225 ميغابايت، و8 دقائق انتظار' }, right: { label: 'بث متكيّف', sub: '91 ميغابايت، دون انتظار' } },
    etapes: { title: 'من التسجيل إلى الشهادة، في ست مراحل', items: [
      { label: 'التسجيل', sub: 'حساب لكل رقم هاتف' },
      { label: 'الدفع', sub: 'بطاقة عبر الإنترنت، أو وصل دفع متحقَّق منه', accent: true },
      { label: 'فتح الدخول', sub: 'تلقائي، للمدة المشتراة' },
      { label: 'الدروس', sub: 'فيديو بالبث، ومواصلة من المكان الصحيح' },
      { label: 'اختبارات وواجبات', sub: 'مصحَّحة، منقَّطة، ومحسوبة في التقدّم' },
      { label: 'الشهادة', sub: 'اسمية، ويُتحقق منها برابط' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الدفع: هو الذي يفتح الدخول، دون أن يتحقق شخص من وصل في منتصف الليل.', alt: 'ست مراحل: التسجيل، الدفع (مبرز)، فتح الدخول، الدروس، اختبارات وواجبات، والشهادة.' },
    modeles: { title: 'خمس طرق لبيع دورة، وما تتطلبه كل واحدة', columns: ['ما يشتريه المتعلّم', 'ما يجب أن تفعله المنصة'], rows: [
      { label: 'دورة مسجَّلة، تُباع منفردة', cells: ['دورة واحدة، بدخول محدود أو دائم', 'فتح الدخول عند الدفع، وفيديو محمي'] },
      { label: 'اشتراك شهري', cells: ['كل الكتالوغ، ما دام يدفع', 'التجديد، قطع الدخول، وإعادته'] },
      { label: 'حصص مباشرة، مع إعادة المشاهدة', cells: ['حصص في ساعة محدّدة، تُشاهَد بعد ذلك', 'رزنامة، قاعة مباشرة، وتسجيل'] },
      { label: 'تكوين المؤسسات', cells: ['مقاعد يشتريها المستخدِم', 'حسابات بالدفعة، متابعة لكل شخص، وتقرير'] },
      { label: 'التحضير للامتحان', cells: ['موسم واحد، بذروة قبل الامتحان', 'تحمّل الضغط، مواضيع مصحَّحة، وترتيب'] },
    ], caption: 'الشكل 2 · خمس طرق للبيع. النموذج يُختار قبل البناء: الاشتراك والدورة المنفردة لا يتطلبان المنصة نفسها.', alt: 'مصفوفة من خمسة نماذج بيع: دورة مسجَّلة منفردة، اشتراك شهري، حصص مباشرة مع إعادة المشاهدة، تكوين المؤسسات، والتحضير للامتحان؛ ولكل واحد، ما يشتريه المتعلّم وما يجب أن تفعله المنصة.' },
    debit: { caption: 'الشكل 3 · درس من اثنتي عشرة دقيقة: ملف بجودة 720 يزن 225 ميغابايت ويتوقف 8 دقائق من 12؛ والبث المتكيّف يستهلك 91 ميغابايت دون انتظار. معدلات خيالية.' },
    parcours: { caption: 'الشكل 4 · من 1000 مسجَّل، 780 يبدؤون و190 ينهون؛ وبعد الانطلاق، أكبر انسحاب عند الدرس 6، الذي يدوم 48 دقيقة. أعداد خيالية.' },
    calendrier: { title: 'عشرة أسابيع، مع دورة تجريبية أولى', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'دوراتكم، أسعاركم، طرق الدفع عندكم، نموذج البيع، وما ترسلونه عبر المراسلة', from: 0, to: 1, accent: true },
      { label: 'الحسابات، الكتالوغ، والتسجيل', note: 'صفحات الدورات، حساب بالهاتف، السلة، ومقتطفات مجانية', from: 1, to: 4 },
      { label: 'الدفع وفتح الدخول', note: 'بطاقة عبر الإنترنت، وصولات دفع تُتحقَّق في طابور، ودخول تلقائي', from: 3, to: 6 },
      { label: 'الفيديو المحمي', note: 'ترميز بعدة جودات، روابط موقَّعة، علامة مائية، وعدد الأجهزة', from: 4, to: 7 },
      { label: 'المسار، الاختبارات، والشهادة', note: 'التقدّم، الاختبارات، الواجبات، وشهادة يُتحقق منها', from: 6, to: 9 },
      { label: 'دورة تجريبية وتشغيل', note: 'دورة أولى، نحو مئة متعلّم، تصحيحات، ثم الكتالوغ', from: 8, to: 10 },
    ], caption: 'الشكل 5 · عشرة أسابيع في المثال. الفترة المبرزة هي الأولى؛ والتشغيل يتم بدورة واحدة ونحو مئة متعلّم قبل فتح الكتالوغ. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من عشرة أسابيع: التأطير (مبرز)، الحسابات والكتالوغ والتسجيل، الدفع وفتح الدخول، الفيديو المحمي، المسار والاختبارات والشهادة، ثم دورة تجريبية وتشغيل.' },
    couches: { title: 'ما يوجد في منصة تعليمية، في خمس طبقات', layers: [
      { label: 'الواجهة', items: [{ name: 'الواجهة: صفحات الدورات، مقتطفات مجانية، الأسعار، الآراء، والتسجيل برقم الهاتف', sub: 'ما يراه من يتردّد' }] },
      { label: 'الدفع', items: [{ name: 'الدفع والدخول: بطاقة عبر الإنترنت أو وصل متحقَّق منه، دخول يُفتح وحده، المدة، والتجديد', sub: 'من دفع ماذا، وإلى متى', accent: true }] },
      { label: 'الفيديو', items: [{ name: 'الفيديو: عدة جودات، بث متكيّف، روابط موقَّعة، علامة مائية باسم المتعلّم، وأجهزة محدودة', sub: 'درس يُشاهَد ولا يُعاد إرساله' }] },
      { label: 'المسار', items: [{ name: 'المسار: دروس قصيرة، مواصلة، اختبارات، واجبات مصحَّحة، وشهادة يُتحقق منها', sub: 'ما فعله المتعلّم حقاً' }] },
      { label: 'القيادة', items: [{ name: 'القيادة: المبيعات، المتعلّمون النشطون، الدرس الذي يُنسحَب عنده، التذكير، والنتائج لكل دورة', sub: 'ما ينجح، وما يجب إعادته' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي الدفع والدخول: ما دامت تتوقف على شخص، المنصة لا تبيع في الليل.', alt: 'خمس طبقات: الواجهة؛ الدفع والدخول (مبرزة)؛ الفيديو؛ المسار؛ والقيادة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      modeles: { svg: matrix({ title: t.modeles.title, columns: t.modeles.columns, rows: t.modeles.rows, rtl }), caption: t.modeles.caption, alt: t.modeles.alt },
      debit: { svg: debit(e.debit, rtl), caption: t.debit.caption, alt: e.debit.alt },
      parcours: { svg: parcours(e.parcours, rtl), caption: t.parcours.caption, alt: e.parcours.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
