import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { parcours, delais, STRINGS as SC } from './custom/recrutement.mjs';
export const slug = 'logiciel-de-recrutement-algerie-2027-gestion-des-candidatures-tri-des-cv-doublons-convocations-entretiens-notes-reponse-a-chaque-candidat';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel de recrutement · Algérie · 2027', title: ['Logiciel de recrutement :', 'où en est chaque candidature'], subtitle: 'Gestion des candidatures, tri des CV, doublons, convocations, entretiens notés, réponse à chacun', left: { label: 'Avant', sub: '62 jours après la clôture' }, right: { label: 'Avec la plateforme', sub: '23 jours' } },
    criteres: { title: 'Ce que la règle trie seule, et ce qu’une personne décide', columns: ['Qui le fait', 'Pourquoi'], rows: [
      { label: 'Dossier complet, critères écrits dans l’annonce', cells: ['la règle, seule, la même pour tout le monde', 'cela se vérifie sans jugement'] },
      { label: 'Doublons : une personne, plusieurs envois', cells: ['la règle propose, une personne confirme', 'deux homonymes ne sont pas un doublon'] },
      { label: 'Lecture du CV : expérience, parcours', cells: ['une personne, avec une grille écrite', 'un mot-clé absent ne dit rien d’un parcours'] },
      { label: 'Classement par une IA', cells: ['une aide à la lecture, jamais un refus', 'un modèle peut reproduire un biais'] },
      { label: 'Entretien et décision', cells: ['les personnes qui recrutent', 'elles en répondent'] },
    ], caption: 'Figure 1 · Cinq tâches du tri. La règle fait seule ce qui se vérifie sans jugement ; dès qu’il faut apprécier un parcours, une personne lit, avec une grille, et elle en répond.', alt: 'Matrice de cinq tâches du tri : dossier complet et critères de l’annonce, doublons, lecture du CV, classement par une IA, entretien et décision ; pour chacune, qui le fait et pourquoi.' },
    parcours: { caption: 'Figure 2 · 3 000 candidatures pour vingt postes : 2 580 dossiers après fusion des doublons, 1 290 éligibles, 240 présélectionnés, 120 convoqués, 96 entretiens, 20 propositions. Chiffres fictifs.' },
    couches: { title: 'Ce qu’il y a dans un logiciel de recrutement, en cinq couches', layers: [
      { label: 'Entrée', items: [{ name: 'L’entrée : la page des postes, un formulaire par annonce, les pièces demandées, l’accusé de réception', sub: 'une seule porte, quel que soit le canal' }] },
      { label: 'Dossier', items: [{ name: 'Le dossier : une personne, un dossier, ses candidatures, ses pièces, l’historique des échanges', sub: 'les doublons fusionnés' }] },
      { label: 'Règles', items: [{ name: 'Les règles : critères de l’annonce, grille de lecture, grille d’entretien, qui voit et qui décide', sub: 'la même règle pour tout le monde, et écrite', accent: true }] },
      { label: 'Étapes', items: [{ name: 'Les étapes : le tableau de la campagne, les convocations, les créneaux, un message à chaque changement', sub: 'chacun sait où en est chaque dossier' }] },
      { label: 'Suivi', items: [{ name: 'Le suivi : délais par étape, absences aux entretiens, sources des candidatures, vivier pour la suite', sub: 'savoir où la campagne ralentit' }] },
    ], caption: 'Figure 3 · Cinq couches. La couche accentuée est celle des règles : les critères, les grilles et les droits s’écrivent avant d’ouvrir la campagne.', alt: 'Cinq couches : l’entrée ; le dossier ; les règles (accentuées) ; les étapes ; le suivi.' },
    delais: { caption: 'Figure 4 · De la clôture à la proposition : 62 jours avant, 23 avec la plateforme. Le tri passe de 30 à 6 jours, les convocations de 12 à 2 ; les entretiens restent à 12. Délais fictifs.' },
    calendrier: { title: 'Dix semaines, en commençant par une campagne passée', unit: 'sem.', items: [
      { label: 'Cadrage sur une campagne passée', note: 'les canaux, les doublons, les critères réellement appliqués, les jours par étape', from: 0, to: 2, accent: true },
      { label: 'Formulaire et dossier unique', note: 'page des postes, pièces demandées, accusé de réception, fusion des doublons', from: 1, to: 4 },
      { label: 'Règles et grilles', note: 'critères de l’annonce, grille de lecture, grille d’entretien, droits par rôle', from: 3, to: 6 },
      { label: 'Tableau, convocations, messages', note: 'étapes, créneaux à choisir, rappels, réponse à chaque candidature', from: 4, to: 7 },
      { label: 'Candidatures en cours reprises', note: 'boîtes mail et tableurs importés, dédoublonnés, rangés par annonce', from: 6, to: 8 },
      { label: 'Première campagne réelle', note: 'un poste d’abord, puis la campagne entière, avec les délais mesurés', from: 7, to: 10 },
    ], caption: 'Figure 5 · Dix semaines dans l’exemple. La période accentuée est la première : on repart d’une campagne passée pour voir où elle a perdu du temps. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix semaines : cadrage sur une campagne passée (accentué), formulaire et dossier unique, règles et grilles, tableau et messages, reprise des candidatures en cours, première campagne réelle.' },
    candidat: { title: 'Du dépôt à la réponse, en six temps', items: [
      { label: 'Dépôt', sub: 'un formulaire, depuis un téléphone' },
      { label: 'Accusé de réception', sub: 'un numéro de dossier, tout de suite' },
      { label: 'Éligibilité', sub: 'critères de l’annonce, même règle pour tous' },
      { label: 'Lecture', sub: 'deux personnes, une grille écrite' },
      { label: 'Entretien', sub: 'mêmes questions, même ordre, notes' },
      { label: 'Réponse', sub: 'à chaque personne, retenue ou non', accent: true },
    ], caption: 'Figure 6 · Six temps, vus par la personne qui postule. Le temps accentué est la réponse : chaque candidature en reçoit une, retenue ou non.', alt: 'Six temps : dépôt, accusé de réception, éligibilité, lecture, entretien, réponse (accentuée).' },
  },
  en: {
    cover: { eyebrow: 'Recruitment software · Algeria · 2027', title: ['Recruitment software:', 'where each application stands'], subtitle: 'Application management, CV sorting, duplicates, invitations, scored interviews, an answer to everyone', left: { label: 'Before', sub: '62 days after closing' }, right: { label: 'With the platform', sub: '23 days' } },
    criteres: { title: 'What the rule sorts alone, and what a person decides', columns: ['Who does it', 'Why'], rows: [
      { label: 'Complete file, criteria written in the posting', cells: ['the rule, alone, the same for everyone', 'it can be checked without judgement'] },
      { label: 'Duplicates: one person, several submissions', cells: ['the rule suggests, a person confirms', 'two people with one name are not a duplicate'] },
      { label: 'Reading the CV: experience, background', cells: ['a person, with a written grid', 'a missing keyword says nothing of a career'] },
      { label: 'Ranking by an AI', cells: ['a reading aid, never a rejection', 'a model can reproduce a bias'] },
      { label: 'Interview and decision', cells: ['the people who recruit', 'they answer for it'] },
    ], caption: 'Figure 1 · Five sorting tasks. The rule does alone what can be checked without judgement; as soon as a career has to be assessed, a person reads, with a grid, and answers for it.', alt: 'Matrix of five sorting tasks: complete file and posting criteria, duplicates, reading the CV, ranking by an AI, interview and decision; for each, who does it and why.' },
    parcours: { caption: 'Figure 2 · 3,000 applications for twenty jobs: 2,580 files once duplicates are merged, 1,290 eligible, 240 shortlisted, 120 invited, 96 interviews, 20 offers. Fictitious figures.' },
    couches: { title: 'What is inside recruitment software, in five layers', layers: [
      { label: 'Entry', items: [{ name: 'Entry: the jobs page, one form per posting, the documents requested, the acknowledgement', sub: 'one door, whatever the channel' }] },
      { label: 'File', items: [{ name: 'The file: one person, one file, their applications, their documents, the history of exchanges', sub: 'duplicates merged' }] },
      { label: 'Rules', items: [{ name: 'The rules: the posting’s criteria, the reading grid, the interview grid, who sees and who decides', sub: 'the same rule for everyone, and in writing', accent: true }] },
      { label: 'Stages', items: [{ name: 'The stages: the campaign board, invitations, slots, a message at each change', sub: 'everybody knows where each file stands' }] },
      { label: 'Follow-up', items: [{ name: 'Follow-up: delays per stage, interview no-shows, sources of applications, a pool for next time', sub: 'knowing where the campaign slows down' }] },
    ], caption: 'Figure 3 · Five layers. The accented layer is the rules: criteria, grids and rights are written before the campaign opens.', alt: 'Five layers: entry; the file; the rules (accented); the stages; follow-up.' },
    delais: { caption: 'Figure 4 · From closing date to offer: 62 days before, 23 with the platform. Sorting falls from 30 to 6 days, invitations from 12 to 2; interviews stay at 12. Fictitious delays.' },
    calendrier: { title: 'Ten weeks, starting from a past campaign', unit: 'wk', items: [
      { label: 'Scoping on a past campaign', note: 'the channels, the duplicates, the criteria actually applied, the days per stage', from: 0, to: 2, accent: true },
      { label: 'Form and single file', note: 'jobs page, documents requested, acknowledgement, merging of duplicates', from: 1, to: 4 },
      { label: 'Rules and grids', note: 'the posting’s criteria, reading grid, interview grid, rights per role', from: 3, to: 6 },
      { label: 'Board, invitations, messages', note: 'stages, slots to choose, reminders, an answer to every application', from: 4, to: 7 },
      { label: 'Applications in progress', note: 'mailboxes and spreadsheets imported, deduplicated, filed by posting', from: 6, to: 8 },
      { label: 'First real campaign', note: 'one job first, then the whole campaign, with the delays measured', from: 7, to: 10 },
    ], caption: 'Figure 5 · Ten weeks in the example. The accented period is the first: we start from a past campaign to see where it lost time. Indicative durations of a constructed example.', alt: 'Ten-week calendar: scoping on a past campaign (accented), form and single file, rules and grids, board and messages, taking over applications in progress, first real campaign.' },
    candidat: { title: 'From submission to answer, in six steps', items: [
      { label: 'Submission', sub: 'one form, from a phone' },
      { label: 'Acknowledgement', sub: 'a file number, at once' },
      { label: 'Eligibility', sub: 'the posting’s criteria, one rule for all' },
      { label: 'Reading', sub: 'two people, a written grid' },
      { label: 'Interview', sub: 'same questions, same order, scores' },
      { label: 'Answer', sub: 'to every person, selected or not', accent: true },
    ], caption: 'Figure 6 · Six steps, seen by the person applying. The accented step is the answer: every application gets one, selected or not.', alt: 'Six steps: submission, acknowledgement, eligibility, reading, interview, answer (accented).' },
  },
  ar: {
    cover: { eyebrow: 'برنامج التوظيف · الجزائر · 2027', title: ['برنامج التوظيف:', 'أين وصل كل ترشح'], subtitle: 'تسيير الترشحات، فرز السير الذاتية، التكرارات، الاستدعاءات، مقابلات منقَّطة، وجواب لكل مترشح', left: { label: 'قبل', sub: '62 يوماً بعد الإغلاق' }, right: { label: 'مع المنصة', sub: '23 يوماً' } },
    criteres: { title: 'ما تفرزه القاعدة وحدها، وما يقرّره شخص', columns: ['من يقوم به', 'لماذا'], rows: [
      { label: 'ملف كامل، ومعايير مكتوبة في الإعلان', cells: ['القاعدة وحدها، وهي نفسها للجميع', 'يُتحقَّق منه دون تقدير'] },
      { label: 'التكرارات: شخص واحد، وعدة إيداعات', cells: ['القاعدة تقترح، وشخص يؤكّد', 'شخصان بالاسم نفسه ليسا تكراراً'] },
      { label: 'قراءة السيرة: الخبرة والمسار', cells: ['شخص، بشبكة مكتوبة', 'غياب كلمة لا يقول شيئاً عن المسار'] },
      { label: 'ترتيب بالذكاء الاصطناعي', cells: ['مساعدة على القراءة، وليس رفضاً أبداً', 'النموذج قد يعيد إنتاج انحياز'] },
      { label: 'المقابلة والقرار', cells: ['الأشخاص الذين يوظّفون', 'هم من يتحمّل مسؤوليته'] },
    ], caption: 'الشكل 1 · خمس مهام في الفرز. القاعدة تقوم وحدها بما يُتحقَّق منه دون تقدير؛ وحين يجب تقدير مسار، شخص يقرأ، بشبكة، ويتحمّل مسؤولية ذلك.', alt: 'مصفوفة من خمس مهام في الفرز: الملف الكامل ومعايير الإعلان، التكرارات، قراءة السيرة، الترتيب بالذكاء الاصطناعي، والمقابلة والقرار؛ ولكل واحدة من يقوم بها ولماذا.' },
    parcours: { caption: 'الشكل 2 · 3000 ترشح لعشرين منصباً: 2580 ملفاً بعد دمج التكرارات، 1290 مؤهَّلاً، 240 في الانتقاء الأولي، 120 مستدعى، 96 مقابلة، و20 عرضاً. أرقام خيالية.' },
    couches: { title: 'ما يوجد في برنامج توظيف، في خمس طبقات', layers: [
      { label: 'الدخول', items: [{ name: 'الدخول: صفحة المناصب، استمارة لكل إعلان، الوثائق المطلوبة، وإشعار الاستلام', sub: 'باب واحد، مهما كانت القناة' }] },
      { label: 'الملف', items: [{ name: 'الملف: شخص واحد، ملف واحد، ترشحاته، وثائقه، وتاريخ المراسلات معه', sub: 'التكرارات مدموجة' }] },
      { label: 'القواعد', items: [{ name: 'القواعد: معايير الإعلان، شبكة القراءة، شبكة المقابلة، ومن يرى ومن يقرّر', sub: 'القاعدة نفسها للجميع، ومكتوبة', accent: true }] },
      { label: 'المراحل', items: [{ name: 'المراحل: لوحة الحملة، الاستدعاءات، الفترات، ورسالة عند كل تغيير', sub: 'الجميع يعرف أين وصل كل ملف' }] },
      { label: 'المتابعة', items: [{ name: 'المتابعة: الآجال لكل مرحلة، الغيابات عن المقابلات، مصادر الترشحات، وقاعدة للمرات القادمة', sub: 'معرفة أين تتباطأ الحملة' }] },
    ], caption: 'الشكل 3 · خمس طبقات. الطبقة المبرزة هي القواعد: المعايير، الشبكات، والصلاحيات تُكتَب قبل فتح الحملة.', alt: 'خمس طبقات: الدخول؛ الملف؛ القواعد (مبرزة)؛ المراحل؛ والمتابعة.' },
    delais: { caption: 'الشكل 4 · من الإغلاق إلى العرض: 62 يوماً قبل، و23 مع المنصة. الفرز ينزل من 30 إلى 6 أيام، والاستدعاءات من 12 إلى 2؛ والمقابلات تبقى عند 12. آجال خيالية.' },
    calendrier: { title: 'عشرة أسابيع، بدءاً بحملة سابقة', unit: 'أسبوع', items: [
      { label: 'تأطير على حملة سابقة', note: 'القنوات، التكرارات، المعايير المطبَّقة فعلاً، والأيام لكل مرحلة', from: 0, to: 2, accent: true },
      { label: 'الاستمارة والملف الواحد', note: 'صفحة المناصب، الوثائق المطلوبة، إشعار الاستلام، ودمج التكرارات', from: 1, to: 4 },
      { label: 'القواعد والشبكات', note: 'معايير الإعلان، شبكة القراءة، شبكة المقابلة، والصلاحيات لكل دور', from: 3, to: 6 },
      { label: 'اللوحة، الاستدعاءات، والرسائل', note: 'المراحل، فترات تُختار، تذكيرات، وجواب لكل ترشح', from: 4, to: 7 },
      { label: 'استرجاع الترشحات الجارية', note: 'علب البريد والجداول مستوردة، دون تكرار، ومرتّبة حسب الإعلان', from: 6, to: 8 },
      { label: 'أول حملة حقيقية', note: 'منصب واحد أولاً، ثم الحملة كلها، مع قياس الآجال', from: 7, to: 10 },
    ], caption: 'الشكل 5 · عشرة أسابيع في المثال. الفترة المبرزة هي الأولى: ننطلق من حملة سابقة لنرى أين ضاع الوقت. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من عشرة أسابيع: تأطير على حملة سابقة (مبرز)، الاستمارة والملف الواحد، القواعد والشبكات، اللوحة والرسائل، استرجاع الترشحات الجارية، وأول حملة حقيقية.' },
    candidat: { title: 'من الإيداع إلى الجواب، في ست مراحل', items: [
      { label: 'الإيداع', sub: 'استمارة واحدة، من الهاتف' },
      { label: 'إشعار الاستلام', sub: 'رقم ملف، في الحين' },
      { label: 'الأهلية', sub: 'معايير الإعلان، والقاعدة نفسها للجميع' },
      { label: 'القراءة', sub: 'شخصان، وشبكة مكتوبة' },
      { label: 'المقابلة', sub: 'الأسئلة نفسها، بالترتيب نفسه، مع تنقيط' },
      { label: 'الجواب', sub: 'لكل شخص، قُبل أو لم يُقبَل', accent: true },
    ], caption: 'الشكل 6 · ست مراحل، كما يراها من يترشح. المرحلة المبرزة هي الجواب: كل ترشح يتلقى جواباً، قُبل أو لم يُقبَل.', alt: 'ست مراحل: الإيداع، إشعار الاستلام، الأهلية، القراءة، المقابلة، والجواب (مبرز).' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      criteres: { svg: matrix({ title: t.criteres.title, columns: t.criteres.columns, rows: t.criteres.rows, rtl }), caption: t.criteres.caption, alt: t.criteres.alt },
      parcours: { svg: parcours(e.parcours, rtl), caption: t.parcours.caption, alt: e.parcours.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      delais: { svg: delais(e.delais, rtl), caption: t.delais.caption, alt: e.delais.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      candidat: { svg: steps({ title: t.candidat.title, steps: t.candidat.items, arrows: true, rtl }), caption: t.candidat.caption, alt: t.candidat.alt },
    },
  };
}
