import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'digitaliser-clinique-medecins-refusent-adoption-logiciel-medical-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Clinique et cabinet', title: ['Je veux digitaliser', 'ma clinique.', 'Mes médecins refusent.'], subtitle: 'Pourquoi ils ont souvent raison, ce qu’un logiciel doit faire pour qu’un médecin l’ouvre, l’ordre de déploiement qui marche, et où l’IA aide vraiment.', left: { label: 'Aujourd’hui', sub: 'dossiers papier, agenda au secrétariat' }, right: { label: 'Dans 12 semaines', sub: 'deux écrans par médecin, zéro double saisie' }, note: 'Algérie · 2026' },
    reasons: { title: 'Pourquoi les médecins refusent, et ce qu’ils veulent dire', columns: ['Ce qu’ils disent', 'Ce que cela veut dire', 'La réponse'], rows: [
      { label: 'Le logiciel me fait perdre du temps', cells: ['« Je tape au lieu de soigner »', 'Trop d’écrans, trop de champs obligatoires', 'Deux écrans, dictée vocale, saisie par la secrétaire'] },
      { label: 'Mes dossiers sont dans ma tête et mes cahiers', cells: ['« Je n’ai pas besoin de ça »', 'Peur de perdre vingt ans de notes', 'Reprise des dossiers actifs, le reste scanné'] },
      { label: 'Je ne veux pas être surveillé', cells: ['« La direction va compter mes actes »', 'Crainte du contrôle, pas de l’outil', 'Règles écrites sur ce que la direction voit'] },
      { label: 'Et quand ça plante ?', cells: ['« Le papier ne tombe jamais en panne »', 'Expérience d’un logiciel précédent raté', 'Mode dégradé, hors connexion, support joignable'] },
      { label: 'Le dernier logiciel était inutilisable', cells: ['« On a déjà essayé »', 'Outil générique imposé d’en haut', 'Choisi avec deux médecins, déployé par service'] },
    ], caption: 'Figure 1 · Aucune de ces objections n’est contre le numérique. Toutes sont contre un mauvais logiciel mal déployé.', alt: 'Cinq objections des médecins à la digitalisation d’une clinique, ce qu’elles signifient et la réponse : temps perdu, dossiers personnels, surveillance, pannes, mauvaise expérience passée.' },
    screens: { title: 'Ce que le médecin voit : deux écrans, rien d’autre', layers: [
      { label: 'Médecin', items: [{ name: 'Ma journée', sub: 'patients du jour, motif, dossier en un geste', accent: true }, { name: 'La consultation', sub: 'notes dictées, ordonnance, examens, prochain rendez-vous' }] },
      { label: 'Secrétariat', items: [{ name: 'Agenda et accueil', sub: 'prise de rendez-vous, rappels SMS, salle d’attente' }, { name: 'Facturation et Chifa', sub: 'actes, tiers payant, encaissement' }] },
      { label: 'Direction', items: [{ name: 'Activité et occupation', sub: 'par service, par praticien, agrégé selon les règles écrites' }, { name: 'Stock et pharmacie interne', sub: 'consommables, lots, dates' }] },
      { label: 'Patients', items: [{ name: 'Rappels et résultats', sub: 'SMS ou WhatsApp, prise de rendez-vous en ligne en option' }] },
      { label: 'Données', items: [{ name: 'Dossier patient unique', sub: 'hébergement conforme loi 18-07, accès tracés' }] },
    ], caption: 'Figure 2 · Le médecin ne touche jamais à la facturation, au stock ni aux statistiques. C’est la condition de l’adoption.', alt: 'Architecture d’un logiciel de clinique centré sur l’adoption : deux écrans pour le médecin, agenda et facturation au secrétariat, activité et stock à la direction, rappels aux patients, dossier patient unique conforme loi 18-07.' },
    ai: { title: 'Où l’IA aide une clinique, et où elle n’apporte rien', columns: ['Gain réel', 'Prérequis'], rows: [
      { label: 'Dictée de la consultation transformée en note structurée', cells: [2, 'Micro sur le téléphone ou l’ordinateur, arabe et français'] },
      { label: 'Rappels et confirmations de rendez-vous automatiques', cells: [2, 'Agenda unique au secrétariat'] },
      { label: 'Lecture des comptes rendus et résultats scannés', cells: [1, 'Scanner, dossiers numérisés'] },
      { label: 'Prévision d’occupation et planning des blocs', cells: [1, 'Six mois d’activité dans le logiciel'] },
      { label: 'Diagnostic automatique', cells: [0, 'Hors sujet : le diagnostic est l’acte du médecin'] },
    ], legend: '●  gain fort      ◐  gain moyen      ○  hors sujet', caption: 'Figure 3 · La dictée est l’argument qui retourne un médecin réticent : il parle comme avant, le dossier s’écrit tout seul.', alt: 'Usages de l’IA dans une clinique classés par gain : dictée structurée et rappels automatiques forts, lecture de documents et prévision moyens, diagnostic automatique hors sujet.' },
    timeline: { title: 'Un service à la fois, deux médecins volontaires d’abord', unit: 'semaines', items: [
      { label: 'Cadrage avec deux médecins', note: 'leurs deux écrans, leurs règles, ce que la direction verra', from: 0, to: 2 },
      { label: 'Reprise des dossiers actifs', note: 'patients vus dans l’année, le reste scanné', from: 2, to: 5 },
      { label: 'Développement ou paramétrage', note: 'agenda, consultation, dictée, facturation', from: 2, to: 8 },
      { label: 'Premier service', note: 'deux médecins volontaires, secrétariat, quatre semaines', from: 8, to: 12 },
      { label: 'Extension', note: 'service par service, à la demande des médecins', from: 12, to: 20, accent: true },
    ], caption: 'Figure 4 · Les autres médecins demandent le logiciel quand ils voient les deux premiers finir plus tôt. On ne l’impose jamais.', alt: 'Calendrier en semaines : cadrage 0 à 2, reprise des dossiers 2 à 5, développement 2 à 8, premier service 8 à 12, extension 12 à 20.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Clinic and practice', title: ['I want to digitise', 'my clinic.', 'My doctors refuse.'], subtitle: 'Why they are often right, what software must do for a doctor to open it, the deployment order that works, and where AI really helps.', left: { label: 'Today', sub: 'paper files, agenda at the front desk' }, right: { label: 'In 12 weeks', sub: 'two screens per doctor, no double entry' }, note: 'Algeria · 2026' },
    reasons: { title: 'Why doctors refuse, and what they mean', columns: ['What they say', 'What it means', 'The answer'], rows: [
      { label: 'The software wastes my time', cells: ['"I type instead of treating"', 'Too many screens, too many mandatory fields', 'Two screens, voice dictation, entry by the assistant'] },
      { label: 'My files are in my head and my notebooks', cells: ['"I do not need this"', 'Fear of losing twenty years of notes', 'Active files imported, the rest scanned'] },
      { label: 'I do not want to be monitored', cells: ['"Management will count my acts"', 'Fear of control, not of the tool', 'Written rules on what management sees'] },
      { label: 'And when it crashes?', cells: ['"Paper never breaks down"', 'Experience of a failed previous software', 'Degraded mode, offline, reachable support'] },
      { label: 'The last software was unusable', cells: ['"We already tried"', 'Generic tool imposed from above', 'Chosen with two doctors, deployed by department'] },
    ], caption: 'Figure 1 · None of these objections is against digital. All are against bad software badly deployed.', alt: 'Five doctors’ objections to clinic digitisation, what they mean and the answer: wasted time, personal files, surveillance, crashes, bad past experience.' },
    screens: { title: 'What the doctor sees: two screens, nothing else', layers: [
      { label: 'Doctor', items: [{ name: 'My day', sub: 'today’s patients, reason, file in one tap', accent: true }, { name: 'The consultation', sub: 'dictated notes, prescription, tests, next appointment' }] },
      { label: 'Front desk', items: [{ name: 'Agenda and reception', sub: 'booking, SMS reminders, waiting room' }, { name: 'Billing and Chifa', sub: 'acts, third-party payment, collection' }] },
      { label: 'Management', items: [{ name: 'Activity and occupancy', sub: 'per department, per practitioner, aggregated per written rules' }, { name: 'Stock and internal pharmacy', sub: 'consumables, batches, dates' }] },
      { label: 'Patients', items: [{ name: 'Reminders and results', sub: 'SMS or WhatsApp, online booking as an option' }] },
      { label: 'Data', items: [{ name: 'Single patient record', sub: 'Law 18-07 compliant hosting, traced access' }] },
    ], caption: 'Figure 2 · The doctor never touches billing, stock or statistics. That is the condition for adoption.', alt: 'Architecture of clinic software built for adoption: two screens for the doctor, agenda and billing at the front desk, activity and stock for management, patient reminders, single patient record compliant with Law 18-07.' },
    ai: { title: 'Where AI helps a clinic, and where it adds nothing', columns: ['Real gain', 'Prerequisite'], rows: [
      { label: 'Consultation dictation turned into a structured note', cells: [2, 'Microphone on the phone or computer, Arabic and French'] },
      { label: 'Automatic appointment reminders and confirmations', cells: [2, 'Single agenda at the front desk'] },
      { label: 'Reading scanned reports and results', cells: [1, 'Scanner, digitised files'] },
      { label: 'Occupancy forecasting and theatre scheduling', cells: [1, 'Six months of activity in the software'] },
      { label: 'Automatic diagnosis', cells: [0, 'Off topic: diagnosis is the doctor’s act'] },
    ], legend: '●  strong gain      ◐  medium gain      ○  off topic', caption: 'Figure 3 · Dictation is the argument that turns a reluctant doctor: they speak as before, the file writes itself.', alt: 'AI uses in a clinic ranked by gain: structured dictation and automatic reminders strong, document reading and forecasting medium, automatic diagnosis off topic.' },
    timeline: { title: 'One department at a time, two volunteer doctors first', unit: 'weeks', items: [
      { label: 'Scoping with two doctors', note: 'their two screens, their rules, what management will see', from: 0, to: 2 },
      { label: 'Import of active files', note: 'patients seen in the year, the rest scanned', from: 2, to: 5 },
      { label: 'Development or setup', note: 'agenda, consultation, dictation, billing', from: 2, to: 8 },
      { label: 'First department', note: 'two volunteer doctors, front desk, four weeks', from: 8, to: 12 },
      { label: 'Extension', note: 'department by department, at the doctors’ request', from: 12, to: 20, accent: true },
    ], caption: 'Figure 4 · The other doctors ask for the software when they see the first two finish earlier. It is never imposed.', alt: 'Timeline in weeks: scoping 0 to 2, file import 2 to 5, development 2 to 8, first department 8 to 12, extension 12 to 20.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · مصحة وعيادة', title: ['أريد رقمنة', 'مصحتي.', 'أطبائي يرفضون.'], subtitle: 'لماذا هم على حق غالباً، ما يجب أن يفعله البرنامج ليفتحه الطبيب، ترتيب النشر الذي ينجح، وأين يساعد الذكاء الاصطناعي فعلاً.', left: { label: 'اليوم', sub: 'ملفات ورقية، أجندة عند السكرتارية' }, right: { label: 'بعد 12 أسبوعاً', sub: 'شاشتان لكل طبيب، لا إدخال مزدوج' }, note: 'الجزائر · 2026' },
    reasons: { title: 'لماذا يرفض الأطباء، وماذا يقصدون', columns: ['ما يقولونه', 'ما يعنيه', 'الجواب'], rows: [
      { label: 'البرنامج يضيّع وقتي', cells: ['«أكتب بدل أن أعالج»', 'شاشات كثيرة، حقول إلزامية كثيرة', 'شاشتان، إملاء صوتي، إدخال من السكرتيرة'] },
      { label: 'ملفاتي في رأسي ودفاتري', cells: ['«لا أحتاج هذا»', 'خوف من ضياع عشرين سنة من الملاحظات', 'استرجاع الملفات النشطة، والباقي يُمسح ضوئياً'] },
      { label: 'لا أريد أن أُراقَب', cells: ['«الإدارة ستعدّ أعمالي»', 'خوف من المراقبة لا من الأداة', 'قواعد مكتوبة لما تراه الإدارة'] },
      { label: 'وماذا لو تعطّل؟', cells: ['«الورق لا يتعطل أبداً»', 'تجربة برنامج سابق فاشل', 'وضع متدهور، دون اتصال، دعم متاح'] },
      { label: 'البرنامج الأخير كان غير قابل للاستعمال', cells: ['«جرّبنا من قبل»', 'أداة عامة مفروضة من فوق', 'يُختار مع طبيبَين ويُنشر حسب المصلحة'] },
    ], caption: 'الشكل 1 · لا اعتراض من هذه ضد الرقمنة. كلها ضد برنامج سيئ مُنشر بسوء.', alt: 'خمسة اعتراضات للأطباء على رقمنة المصحة ومعانيها والرد عليها.' },
    screens: { title: 'ما يراه الطبيب: شاشتان، لا غير', layers: [
      { label: 'الطبيب', items: [{ name: 'يومي', sub: 'مرضى اليوم، السبب، الملف بلمسة', accent: true }, { name: 'الاستشارة', sub: 'ملاحظات مُملاة، وصفة، فحوص، الموعد التالي' }] },
      { label: 'السكرتارية', items: [{ name: 'الأجندة والاستقبال', sub: 'أخذ المواعيد، تذكيرات SMS، قاعة الانتظار' }, { name: 'الفوترة والشفاء', sub: 'الأعمال، الدافع الثالث، التحصيل' }] },
      { label: 'الإدارة', items: [{ name: 'النشاط والإشغال', sub: 'لكل مصلحة ولكل ممارس، مجمّعاً وفق القواعد المكتوبة' }, { name: 'المخزون والصيدلية الداخلية', sub: 'مستهلكات، دفعات، تواريخ' }] },
      { label: 'المرضى', items: [{ name: 'التذكيرات والنتائج', sub: 'SMS أو واتساب، حجز إلكتروني اختياري' }] },
      { label: 'البيانات', items: [{ name: 'ملف مريض واحد', sub: 'استضافة مطابقة للقانون 18-07، وصول متتبع' }] },
    ], caption: 'الشكل 2 · لا يلمس الطبيب أبداً الفوترة ولا المخزون ولا الإحصائيات. هذا شرط التبني.', alt: 'بنية برنامج مصحة مبني على التبني.' },
    ai: { title: 'أين يساعد الذكاء الاصطناعي المصحة، وأين لا يضيف شيئاً', columns: ['الفائدة الحقيقية', 'الشرط المسبق'], rows: [
      { label: 'إملاء الاستشارة وتحويله إلى ملاحظة منظّمة', cells: [2, 'ميكروفون على الهاتف أو الحاسوب، عربي وفرنسي'] },
      { label: 'تذكيرات وتأكيدات مواعيد تلقائية', cells: [2, 'أجندة واحدة عند السكرتارية'] },
      { label: 'قراءة التقارير والنتائج الممسوحة', cells: [1, 'ماسح ضوئي، ملفات مرقمنة'] },
      { label: 'توقّع الإشغال وجدولة غرف العمليات', cells: [1, 'ستة أشهر من النشاط في البرنامج'] },
      { label: 'التشخيص الآلي', cells: [0, 'خارج الموضوع: التشخيص فعل الطبيب'] },
    ], legend: '●  فائدة قوية      ◐  متوسطة      ○  خارج الموضوع', caption: 'الشكل 3 · الإملاء هو الحجة التي تقلب طبيباً متردداً: يتكلم كما كان، والملف يُكتب وحده.', alt: 'استخدامات الذكاء الاصطناعي في المصحة حسب الفائدة.' },
    timeline: { title: 'مصلحة في كل مرة، طبيبان متطوعان أولاً', unit: 'أسابيع', items: [
      { label: 'التأطير مع طبيبَين', note: 'شاشتاهما، قواعدهما، ما ستراه الإدارة', from: 0, to: 2 },
      { label: 'استرجاع الملفات النشطة', note: 'مرضى السنة، والباقي يُمسح ضوئياً', from: 2, to: 5 },
      { label: 'التطوير أو الإعداد', note: 'أجندة، استشارة، إملاء، فوترة', from: 2, to: 8 },
      { label: 'المصلحة الأولى', note: 'طبيبان متطوعان، سكرتارية، أربعة أسابيع', from: 8, to: 12 },
      { label: 'التوسيع', note: 'مصلحة بمصلحة، بطلب من الأطباء', from: 12, to: 20, accent: true },
    ], caption: 'الشكل 4 · يطلب باقي الأطباء البرنامج عندما يرون الأولَين ينهيان عملهما أبكر. لا يُفرض أبداً.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      reasons: { svg: matrix({ title: t.reasons.title, columns: t.reasons.columns, rows: t.reasons.rows, rtl }), caption: t.reasons.caption, alt: t.reasons.alt },
      screens: { svg: layers({ title: t.screens.title, layers: t.screens.layers, rtl }), caption: t.screens.caption, alt: t.screens.alt },
      ai: { svg: matrix({ title: t.ai.title, columns: t.ai.columns, rows: t.ai.rows, legend: t.ai.legend, rtl }), caption: t.ai.caption, alt: t.ai.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 20, tick: 4, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
