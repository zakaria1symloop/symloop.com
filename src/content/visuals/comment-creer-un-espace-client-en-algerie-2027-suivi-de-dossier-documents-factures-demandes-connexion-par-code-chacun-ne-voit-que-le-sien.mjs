import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { appels, dossier, STRINGS as SC } from './custom/espaceclient.mjs';
export const slug = 'comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien';
const T = {
  fr: {
    cover: { eyebrow: 'Espace client · Algérie · 2027', title: ['Créer un espace client', 'qui évite les appels'], subtitle: 'L’état du dossier d’abord, puis les pièces, les factures, un fil de demandes, et chacun ne voit que le sien', left: { label: 'Dix appels par jour', sub: '« où en est mon dossier ? »' }, right: { label: 'Un écran d’état', sub: 'qui doit agir, et quand' } },
    appels: { caption: 'Figure 1 · Cent appels entrants d’une semaine, classés par motif. Les trois premiers, 76 sur 100, sont des questions dont la réponse existe déjà dans l’entreprise : l’état du dossier, un document à renvoyer, une pièce reçue ou non. Quinze sont de vraies questions, et méritent un appel. Exemple construit : refaites le relevé chez vous.' },
    blocs: { title: 'Ce qu’on met dans un espace client : quatre blocs et un socle', layers: [
      { label: 'État', items: [{ name: 'L’état de chaque dossier : l’étape, ce qui bloque, qui doit agir, la suite et sa date', sub: 'la question posée au téléphone', accent: true }] },
      { label: 'Documents', items: [{ name: 'Les documents dans les deux sens : ce que vous remettez, ce que le client doit fournir, en liste', sub: 'reçu, manquant, à refaire, et pourquoi' }] },
      { label: 'Factures', items: [{ name: 'Les factures et les règlements : ce qui est dû, ce qui est payé, le reçu à télécharger', sub: 'plus de « renvoyez-moi la facture »' }] },
      { label: 'Demandes', items: [{ name: 'Les demandes : une question, une pièce jointe, une réponse, dans un seul fil par dossier', sub: 'plus de message envoyé à trois personnes' }] },
      { label: 'Socle', items: [{ name: 'Le socle : connexion par code, droits par client, message à chaque changement, journal', sub: 'ce qui ne se voit pas et qui fait tout tenir' }] },
    ], caption: 'Figure 2 · La couche accentuée est la première : l’état du dossier. C’est elle qui répond à la question posée au téléphone, et c’est par elle qu’on commence. Les documents, les factures et les demandes s’ajoutent ensuite, un bloc à la fois. Le socle se construit dès le premier jour : sans lui, aucun bloc n’est sûr.', alt: 'Cinq couches : état du dossier (accentuée) ; documents ; factures et règlements ; demandes ; socle.' },
    dossier: { caption: 'Figure 3 · L’écran d’un dossier, côté client. Cinq étapes, dont celle où le dossier est arrêté, marquée « en attente de vous ». La liste des pièces : deux reçues, une manquante, une à refaire avec sa raison. La prochaine étape et son délai. À droite, ce qui s’est passé, avec le message envoyé à chaque changement. Exemple construit.' },
    droits: { title: 'Qui voit quoi : chacun ne voit que le sien', columns: ['Ce qu’il voit et fait', 'Ce qui lui est fermé'], rows: [
      { label: 'Le client', cells: ['ses dossiers, ses documents, ses factures ; il dépose, il écrit', 'les autres clients, vos notes internes'] },
      { label: 'Son collaborateur invité', cells: ['les dossiers que le client lui a ouverts', 'le reste du compte du client'] },
      { label: 'Votre chargé de dossier', cells: ['son portefeuille ; il change l’état, il répond', 'les dossiers hors de son portefeuille'] },
      { label: 'Votre responsable', cells: ['tous les dossiers, les retards, le journal', 'effacer une ligne du journal'] },
      { label: 'Un ancien employé', cells: ['plus rien, le jour de son départ', 'tout : son accès part avec ses autres comptes'] },
      { label: 'Quelqu’un qui change un numéro dans l’adresse', cells: ['une page « introuvable »', 'le dossier d’un autre : le contrôle est sur chaque page'] },
    ], caption: 'Figure 4 · Six acteurs, ce que chacun voit et ce qui lui reste fermé. La dernière ligne est le test à faire avant l’ouverture : connecté comme un client, on remplace dans l’adresse le numéro de son dossier par celui d’un autre. La seule réponse acceptable est une page introuvable.', alt: 'Matrice de six acteurs : le client, son collaborateur invité, votre chargé de dossier, votre responsable, un ancien employé, quelqu’un qui change un numéro dans l’adresse ; pour chacun, ce qu’il voit et ce qui lui est fermé.' },
    ordre: { title: 'Faire qu’ils s’en servent, dans cet ordre', items: [
      { label: 'Compter', sub: 'les appels d’une semaine, par motif', accent: true },
      { label: 'Livrer l’état', sub: 'un seul écran, tous les dossiers en cours' },
      { label: 'Inviter', sub: 'un lien et un code, à l’ouverture du dossier' },
      { label: 'Prévenir', sub: 'un message à chaque changement d’état' },
      { label: 'Renvoyer', sub: 'au téléphone, vers l’espace du client' },
      { label: 'Mesurer', sub: 'activation, appels d’état, dossiers complets' },
    ], caption: 'Figure 5 · Le temps accentué est le premier : compter. Un espace client ne s’adopte pas par une annonce ; il s’adopte parce qu’il contient la réponse, que le message d’étape y conduit, et que l’équipe y renvoie au lieu de répondre de mémoire. Le relevé d’appels du début sert de mesure à la fin.', alt: 'Six temps : compter (accentué), livrer l’état, inviter, prévenir, renvoyer, mesurer.' },
    calendrier: { title: 'Six semaines, du relevé d’appels au premier bilan', unit: 'sem.', items: [
      { label: 'Relevé des appels', note: 'une semaine de relevé par motif ; les étapes d’un dossier écrites sur une page', from: 0, to: 1, accent: true },
      { label: 'État des dossiers', note: 'étapes, qui doit agir, date de la suite ; reprise des dossiers en cours', from: 1, to: 3 },
      { label: 'Connexion et droits', note: 'connexion par code, un client ne voit que le sien, essai d’accès croisé', from: 1, to: 3 },
      { label: 'Documents et pièces', note: 'dépôt depuis le téléphone, liste des pièces, raison du refus', from: 2, to: 4 },
      { label: 'Factures et demandes', note: 'factures et reçus à télécharger, un fil de demandes par dossier', from: 3, to: 5 },
      { label: 'Invitation et bilan', note: 'invitation à l’ouverture de chaque dossier, puis le même relevé d’appels', from: 4, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple. La période accentuée est la première : le relevé des appels, sans rien construire. L’état des dossiers et le socle occupent les deux semaines suivantes ; les documents, les factures et les demandes s’ajoutent un bloc à la fois. Le bilan refait le relevé du début. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : relevé des appels (accentué, une semaine), état des dossiers, connexion et droits, documents et pièces, factures et demandes, invitation et bilan.' },
  },
  en: {
    cover: { eyebrow: 'Customer area · Algeria · 2027', title: ['Building a customer area', 'that spares the calls'], subtitle: 'The status of the file first, then documents, invoices, one request thread, and each sees only their own', left: { label: 'Ten calls a day', sub: '“where is my file?”' }, right: { label: 'One status screen', sub: 'who must act, and when' } },
    appels: { caption: 'Figure 1 · One hundred incoming calls in a week, sorted by reason. The first three, 76 out of 100, are questions whose answer already exists in the company: the status of the file, a document to resend, a document received or not. Fifteen are real questions, and deserve a call. Constructed example: redo the log at your place.' },
    blocs: { title: 'What goes into a customer area: four blocks and a base', layers: [
      { label: 'Status', items: [{ name: 'The status of each file: the stage, what is blocking, who must act, what comes next and when', sub: 'the question asked on the phone', accent: true }] },
      { label: 'Documents', items: [{ name: 'Documents both ways: what you hand over, what the customer must provide, as a list', sub: 'received, missing, to redo, and why' }] },
      { label: 'Invoices', items: [{ name: 'Invoices and payments: what is due, what is paid, the receipt to download', sub: 'no more “send me the invoice again”' }] },
      { label: 'Requests', items: [{ name: 'Requests: a question, an attachment, an answer, in a single thread per file', sub: 'no more message sent to three people' }] },
      { label: 'Base', items: [{ name: 'The base: sign-in by code, rights per customer, a message at every change, a log', sub: 'what is not seen and holds everything up' }] },
    ], caption: 'Figure 2 · The accented layer is the first: the status of the file. It is the one that answers the question asked on the phone, and it is where to start. Documents, invoices and requests are added afterwards, one block at a time. The base is built from day one: without it, no block is safe.', alt: 'Five layers: status of the file (accented); documents; invoices and payments; requests; base.' },
    dossier: { caption: 'Figure 3 · The screen of a file, on the customer’s side. Five stages, including the one where the file is stopped, marked “waiting for you”. The list of documents: two received, one missing, one to redo with its reason. The next step and its time limit. On the right, what has happened, with the message sent at each change. Constructed example.' },
    droits: { title: 'Who sees what: each sees only their own', columns: ['What they see and do', 'What is closed to them'], rows: [
      { label: 'The customer', cells: ['their files, documents and invoices; they upload, they write', 'other customers, your internal notes'] },
      { label: 'Their invited colleague', cells: ['the files the customer has opened to them', 'the rest of the customer’s account'] },
      { label: 'Your case officer', cells: ['their portfolio; they change the status, they answer', 'the files outside their portfolio'] },
      { label: 'Your manager', cells: ['all the files, the delays, the log', 'erasing a line of the log'] },
      { label: 'A former employee', cells: ['nothing any more, on the day they leave', 'everything: access goes with their other accounts'] },
      { label: 'Someone who changes a number in the address', cells: ['a “not found” page', 'another person’s file: the check is on every page'] },
    ], caption: 'Figure 4 · Six actors, what each sees and what stays closed to them. The last line is the test to run before opening: signed in as one customer, replace the number of your file in the address with someone else’s. The only acceptable answer is a not-found page.', alt: 'Matrix of six actors: the customer, their invited colleague, your case officer, your manager, a former employee, someone who changes a number in the address; for each, what they see and what is closed to them.' },
    ordre: { title: 'Getting them to use it, in this order', items: [
      { label: 'Count', sub: 'a week of calls, by reason', accent: true },
      { label: 'Deliver status', sub: 'one screen, all the open files' },
      { label: 'Invite', sub: 'a link and a code, when the file opens' },
      { label: 'Notify', sub: 'a message at every change of status' },
      { label: 'Point back', sub: 'on the phone, to the customer’s area' },
      { label: 'Measure', sub: 'activation, status calls, complete files' },
    ], caption: 'Figure 5 · The accented step is the first: count. A customer area is not adopted through an announcement; it is adopted because it holds the answer, because the stage message leads to it, and because the team points to it instead of answering from memory. The call log from the start is the measure at the end.', alt: 'Six steps: count (accented), deliver status, invite, notify, point back, measure.' },
    calendrier: { title: 'Six weeks, from the call log to the first review', unit: 'wk', items: [
      { label: 'Call log', note: 'a week of logging by reason; the stages of a file written on one page', from: 0, to: 1, accent: true },
      { label: 'Status of files', note: 'stages, who must act, date of what comes next; open files taken over', from: 1, to: 3 },
      { label: 'Sign-in and rights', note: 'sign-in by code, a customer sees only their own, cross-access test', from: 1, to: 3 },
      { label: 'Documents', note: 'upload from the phone, list of documents, reason for refusal', from: 2, to: 4 },
      { label: 'Invoices, requests', note: 'invoices and receipts to download, one request thread per file', from: 3, to: 5 },
      { label: 'Invitation, review', note: 'an invitation when each file opens, then the same call log', from: 4, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example. The accented period is the first: the call log, with nothing built. The status of files and the base take the next two weeks; documents, invoices and requests are added one block at a time. The review redoes the log from the start. Indicative durations from a constructed example.', alt: 'Six-week calendar: call log (accented, one week), status of files, sign-in and rights, documents, invoices and requests, invitation and review.' },
  },
  ar: {
    cover: { eyebrow: 'فضاء الزبون · الجزائر · 2027', title: ['إنشاء فضاء للزبون', 'يُغني عن المكالمات'], subtitle: 'حالة الملف أولاً، ثم الوثائق، الفواتير، خيط واحد للطلبات، وكل واحد لا يرى إلا ملفه', left: { label: 'عشر مكالمات في اليوم', sub: '«أين وصل ملفي؟»' }, right: { label: 'شاشة للحالة', sub: 'من عليه أن يتحرك، ومتى' } },
    appels: { caption: 'الشكل 1 · مئة مكالمة واردة في أسبوع، مرتَّبة حسب السبب. الثلاثة الأولى، 76 من 100، أسئلة جوابها موجود أصلاً في المؤسسة: حالة الملف، وثيقة تُعاد، ووثيقة استُلمت أم لا. وخمس عشرة أسئلة حقيقية، وتستحق مكالمة. مثال مركَّب: أعيدوا التسجيل عندكم.' },
    blocs: { title: 'ما يوضع في فضاء الزبون: أربعة أجزاء وقاعدة', layers: [
      { label: 'الحالة', items: [{ name: 'حالة كل ملف: المرحلة، ما يعطّل، من عليه أن يتحرك، ما يأتي بعدها ومتى', sub: 'السؤال الذي يُطرح في الهاتف', accent: true }] },
      { label: 'الوثائق', items: [{ name: 'الوثائق في الاتجاهين: ما تسلّمونه، وما على الزبون تقديمه، في قائمة', sub: 'مستلَم، ناقص، يُعاد، ولماذا' }] },
      { label: 'الفواتير', items: [{ name: 'الفواتير والتسديدات: ما هو مستحَق، ما سُدِّد، والوصل للتحميل', sub: 'لا «أعيدوا إرسال الفاتورة» بعد اليوم' }] },
      { label: 'الطلبات', items: [{ name: 'الطلبات: سؤال، مرفق، وجواب، في خيط واحد لكل ملف', sub: 'لا رسالة تُرسَل إلى ثلاثة أشخاص بعد اليوم' }] },
      { label: 'القاعدة', items: [{ name: 'القاعدة: دخول برمز، صلاحيات لكل زبون، رسالة عند كل تغيير، وسجل', sub: 'ما لا يُرى وهو الذي يُمسك الكل' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي الأولى: حالة الملف. هي التي تجيب عن السؤال المطروح في الهاتف، ومنها نبدأ. والوثائق والفواتير والطلبات تُضاف بعدها، جزءاً بعد جزء. والقاعدة تُبنى من اليوم الأول: دونها، لا جزء آمن.', alt: 'خمس طبقات: حالة الملف (مبرزة)؛ الوثائق؛ الفواتير والتسديدات؛ الطلبات؛ القاعدة.' },
    dossier: { caption: 'الشكل 3 · شاشة ملف، من جهة الزبون. خمس مراحل، منها التي توقف عندها الملف، وعليها «في انتظاركم». قائمة الوثائق: اثنتان مستلَمتان، واحدة ناقصة، وواحدة تُعاد مع سببها. والخطوة المقبلة وأجلها. وعلى الجانب، ما جرى، مع الرسالة المرسَلة عند كل تغيير. مثال مركَّب.' },
    droits: { title: 'من يرى ماذا: كل واحد لا يرى إلا ملفه', columns: ['ما يراه ويفعله', 'ما هو مغلق عليه'], rows: [
      { label: 'الزبون', cells: ['ملفاته، وثائقه، وفواتيره؛ يودِع ويكتب', 'الزبائن الآخرون، وملاحظاتكم الداخلية'] },
      { label: 'مساعده المدعوّ', cells: ['الملفات التي فتحها له الزبون', 'باقي حساب الزبون'] },
      { label: 'المكلَّف بالملف عندكم', cells: ['محفظته؛ يغيّر الحالة ويجيب', 'الملفات خارج محفظته'] },
      { label: 'المسؤول عندكم', cells: ['كل الملفات، التأخرات، والسجل', 'محو سطر من السجل'] },
      { label: 'عامل سابق', cells: ['لا شيء، يوم مغادرته', 'كل شيء: دخوله يُقطع مع حساباته الأخرى'] },
      { label: 'من يغيّر رقماً في العنوان', cells: ['صفحة «غير موجودة»', 'ملف غيره: المراقبة على كل صفحة'] },
    ], caption: 'الشكل 4 · ستة أطراف، ما يراه كل واحد وما يبقى مغلقاً عليه. والسطر الأخير هو الاختبار قبل الفتح: بعد الدخول كزبون، يُستبدل في العنوان رقم ملفه برقم ملف غيره. والجواب الوحيد المقبول صفحة غير موجودة.', alt: 'مصفوفة ستة أطراف: الزبون، مساعده المدعوّ، المكلَّف بالملف، المسؤول، عامل سابق، ومن يغيّر رقماً في العنوان؛ ولكل واحد ما يراه وما هو مغلق عليه.' },
    ordre: { title: 'كي يستعملوه، بهذا الترتيب', items: [
      { label: 'العدّ', sub: 'مكالمات أسبوع، حسب السبب', accent: true },
      { label: 'تسليم الحالة', sub: 'شاشة واحدة، لكل الملفات الجارية' },
      { label: 'الدعوة', sub: 'رابط ورمز، عند فتح الملف' },
      { label: 'الإعلام', sub: 'رسالة عند كل تغيير في الحالة' },
      { label: 'الإحالة', sub: 'في الهاتف، إلى فضاء الزبون' },
      { label: 'القياس', sub: 'التفعيل، مكالمات الحالة، والملفات الكاملة' },
    ], caption: 'الشكل 5 · المرحلة المبرزة هي الأولى: العدّ. فضاء الزبون لا يُعتمَد بإعلان؛ يُعتمَد لأن الجواب فيه، ولأن رسالة المرحلة تقود إليه، ولأن الفريق يُحيل عليه بدل الجواب من الذاكرة. وسجل المكالمات في البداية هو القياس في النهاية.', alt: 'ست مراحل: العدّ (مبرزة)، تسليم الحالة، الدعوة، الإعلام، الإحالة، القياس.' },
    calendrier: { title: 'ستة أسابيع، من سجل المكالمات إلى أول حصيلة', unit: 'أسبوع', items: [
      { label: 'سجل المكالمات', note: 'أسبوع من التسجيل حسب السبب؛ ومراحل الملف مكتوبة في صفحة', from: 0, to: 1, accent: true },
      { label: 'حالة الملفات', note: 'المراحل، من عليه أن يتحرك، وتاريخ ما بعدها؛ وإدخال الملفات الجارية', from: 1, to: 3 },
      { label: 'الدخول والصلاحيات', note: 'دخول برمز، الزبون لا يرى إلا ملفه، واختبار الدخول المتقاطع', from: 1, to: 3 },
      { label: 'الوثائق', note: 'الإيداع من الهاتف، قائمة الوثائق، وسبب الرفض', from: 2, to: 4 },
      { label: 'الفواتير والطلبات', note: 'فواتير ووصولات للتحميل، وخيط طلبات لكل ملف', from: 3, to: 5 },
      { label: 'الدعوة والحصيلة', note: 'دعوة عند فتح كل ملف، ثم سجل المكالمات نفسه', from: 4, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال. الفترة المبرزة هي الأولى: سجل المكالمات، دون بناء شيء. وحالة الملفات والقاعدة تأخذان الأسبوعين المواليين؛ والوثائق والفواتير والطلبات تُضاف جزءاً بعد جزء. والحصيلة تعيد سجل البداية. مدد تقريبية لمثال مركَّب.', alt: 'تقويم ستة أسابيع: سجل المكالمات (مبرزة، أسبوع)، حالة الملفات، الدخول والصلاحيات، الوثائق، الفواتير والطلبات، الدعوة والحصيلة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      appels: { svg: appels(e.appels, rtl), caption: t.appels.caption, alt: e.appels.alt },
      blocs: { svg: layers({ title: t.blocs.title, layers: t.blocs.layers, rtl }), caption: t.blocs.caption, alt: t.blocs.alt },
      dossier: { svg: dossier(e.dossier, rtl), caption: t.dossier.caption, alt: e.dossier.alt },
      droits: { svg: matrix({ title: t.droits.title, columns: t.droits.columns, rows: t.droits.rows, rtl }), caption: t.droits.caption, alt: t.droits.alt },
      ordre: { svg: steps({ title: t.ordre.title, steps: t.ordre.items, arrows: true, rtl }), caption: t.ordre.caption, alt: t.ordre.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
