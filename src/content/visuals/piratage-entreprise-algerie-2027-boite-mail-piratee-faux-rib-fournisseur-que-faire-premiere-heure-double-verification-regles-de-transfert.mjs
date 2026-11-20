import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { fil, journal, STRINGS as SC } from './custom/piratage.mjs';
export const slug = 'piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert';
const T = {
  fr: {
    cover: { eyebrow: 'Cybersécurité d’entreprise · Algérie · 2027', title: ['Boîte mail piratée', 'et faux RIB du fournisseur'], subtitle: 'Première heure, règle cachée, double vérification, rappel téléphonique avant tout changement de RIB', left: { label: 'Un mot de passe volé', sub: 'un mois de lecture, puis un faux RIB' }, right: { label: 'Un rappel téléphonique', sub: 'dix minutes qui font échouer la fraude' } },
    situations: { title: 'Six situations réelles, et ce qu’il faut faire', columns: ['Ce qui s’est passé', 'Ce qu’il faut faire'], rows: [
      { label: 'On a reçu un nouveau RIB du fournisseur par e-mail', cells: ['Le message venait d’un domaine voisin', 'rappel au numéro déjà connu avant toute modification, deuxième validation'] },
      { label: 'Des clients ont reçu des messages bizarres de notre part', cells: ['Notre boîte est ouverte par un tiers', 'première heure : mot de passe, sessions, règles, double vérification, contacts'] },
      { label: 'La boîte reçoit moins de messages qu’avant', cells: ['Une règle les déplace ou les transfère', 'lire les règles et les transferts de chaque boîte, interdire le transfert externe'] },
      { label: 'On a changé le mot de passe, c’est réglé', cells: ['La session et la règle sont restées', 'fermer toutes les sessions, supprimer règles et transferts, puis surveiller'] },
      { label: 'Il avait pourtant la double vérification', cells: ['Une fausse page a relayé le code', 'seconde preuve liée au site, clé ou empreinte, alerte de connexion inhabituelle'] },
      { label: 'Le fournisseur réclame une facture déjà payée', cells: ['Le virement est parti ailleurs', 'banque prévenue tout de suite, preuves gardées, suite vue avec le conseil'] },
    ], caption: 'Figure 1 · Les deux premières lignes sont les deux sens de la même fraude : on vous fait payer un faux fournisseur, ou l’on fait payer vos clients à votre place. Les trois suivantes expliquent pourquoi elle dure : une règle cachée, une session restée ouverte, une double vérification contournée. La dernière est le moment où on la découvre.', alt: 'Matrice de six situations : nouveau RIB reçu par e-mail, messages envoyés en notre nom, boîte qui reçoit moins de messages, mot de passe changé, double vérification contournée, facture réclamée alors qu’elle a été payée ; ce qui s’est passé et ce qu’il faut faire.' },
    fil: { caption: 'Figure 2 · La conversation avec le fournisseur, telle qu’elle apparaît dans la boîte : la facture, l’accusé de réception, le faux message qui annonce un changement de banque, puis le virement. Le rappel du vrai fournisseur, en pointillés, n’a jamais été vu : une règle créée dans la boîte le marque comme lu et le range ailleurs. Le faux message vient d’un domaine à une lettre près. Noms de domaine, montants et dates sont un exemple construit.' },
    journal: { caption: 'Figure 3 · À gauche, le journal des connexions de la boîte sur trente-trois jours : quatre lignes sur sept viennent d’un appareil inconnu à l’étranger, dont la création de la règle six minutes après la première connexion. À droite, les sept gestes de la première heure, dans l’ordre. Dates, lieux et nombres sont un exemple construit ; votre service de messagerie tient un journal comparable.' },
    gestes: { title: 'Changer le RIB d’un fournisseur, en six gestes', items: [
      { label: 'Recevoir', sub: 'la demande, sans répondre au message' },
      { label: 'Rappeler', sub: 'au numéro de la fiche, connu avant', accent: true },
      { label: 'Faire confirmer', sub: 'par écrit, sur le canal habituel' },
      { label: 'Valider à deux', sub: 'une deuxième personne approuve' },
      { label: 'Attendre', sub: 'un jour ouvré avant le premier paiement' },
      { label: 'Consigner', sub: 'qui a demandé, rappelé, validé' },
    ], caption: 'Figure 4 · Le geste accentué est le rappel : au numéro inscrit sur la fiche du fournisseur avant la demande, jamais à celui que le message indique. Les cinq autres l’entourent : on ne répond pas au message, on fait confirmer par écrit, une deuxième personne valide, on attend un jour ouvré, on consigne.', alt: 'Six gestes : recevoir, rappeler (accentué), faire confirmer, valider à deux, attendre, consigner.' },
    couches: { title: 'Se protéger du piratage de compte, en cinq couches', layers: [
      { label: 'Identités', items: [{ name: 'Un compte par personne, double vérification partout, preuve liée au site pour la direction et la comptabilité', sub: 'un mot de passe volé ne doit pas suffire à entrer' }] },
      { label: 'Messagerie', items: [{ name: 'Domaine signé et politique de rejet, transfert automatique externe interdit, bandeau sur les expéditeurs externes', sub: 'votre nom exact ne peut plus être imité, un domaine voisin si' }] },
      { label: 'Détection', items: [{ name: 'Alerte sur connexion inhabituelle, nouvelle règle de boîte, nouveau transfert, envoi en masse, lue par quelqu’un', sub: 'le journal existe déjà, il lui manque un lecteur', accent: true }] },
      { label: 'Paiements', items: [{ name: 'Aucun changement de RIB sur simple e-mail, rappel au numéro connu, deuxième validation, délai avant paiement', sub: 'la règle vaut aussi quand le message semble venir de la direction' }] },
      { label: 'Réaction', items: [{ name: 'Une fiche d’une page pour la première heure, qui appeler, quoi fermer, quoi garder, essayée une fois par an', sub: 'le jour où cela arrive, personne ne cherche' }] },
    ], caption: 'Figure 5 · La couche accentuée est la détection : le journal des connexions et la liste des règles existent déjà dans le service de messagerie, il leur manque quelqu’un qui les lise. Les identités et la messagerie, au-dessus, rendent l’entrée plus difficile ; les paiements et la réaction, en dessous, limitent ce qu’une entrée coûte.', alt: 'Cinq couches : identités ; messagerie ; détection (accentuée) ; paiements ; réaction.' },
    calendrier: { title: 'Fermer la porte en 2027, en semaines', unit: 'sem.', items: [
      { label: 'État des lieux', note: 'comptes, double vérification, règles et transferts de chaque boîte, journal des connexions, domaines voisins déjà déposés', from: 0, to: 1 },
      { label: 'Comptes et messagerie', note: 'double vérification pour tous, clés pour la direction et la comptabilité, transfert externe interdit, politique de rejet', from: 1, to: 2, accent: true },
      { label: 'Paiements et alertes', note: 'procédure de changement de RIB écrite, fiches fournisseurs vérifiées par téléphone, alertes réglées et attribuées', from: 2, to: 3 },
      { label: 'Exercice', note: 'faux message envoyé à l’équipe, fausse demande de RIB à la comptabilité, fiche de la première heure essayée', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple, la première sans rien changer : on lit les comptes, les règles et le journal. La semaine accentuée est celle des comptes et de la messagerie, qui ferme l’entrée ; la procédure de paiement et l’exercice viennent ensuite, parce qu’aucune fermeture n’est parfaite.', alt: 'Calendrier de quatre semaines : état des lieux, comptes et messagerie (accentué), paiements et alertes, exercice.' },
  },
  en: {
    cover: { eyebrow: 'Company cybersecurity · Algeria · 2027', title: ['A hacked mailbox', 'and forged supplier bank details'], subtitle: 'The first hour, the hidden rule, two-step verification, a phone call before any change of bank details', left: { label: 'A stolen password', sub: 'a month of reading, then forged details' }, right: { label: 'One phone call', sub: 'ten minutes that make the fraud fail' } },
    situations: { title: 'Six real situations, and what to do', columns: ['What happened', 'What to do'], rows: [
      { label: 'We received new bank details from the supplier by email', cells: ['The message came from a look-alike domain', 'call back on the number already known before any change, second approval'] },
      { label: 'Customers received odd messages from us', cells: ['Our mailbox is open to a third party', 'first hour: password, sessions, rules, two-step verification, contacts'] },
      { label: 'The mailbox gets fewer messages than before', cells: ['A rule moves or forwards them', 'read the rules and forwards of every mailbox, forbid external forwarding'] },
      { label: 'We changed the password, so it is sorted', cells: ['The session and the rule stayed', 'close every session, delete rules and forwards, then keep watching'] },
      { label: 'Yet he had two-step verification', cells: ['A forged page relayed the code', 'a second proof tied to the site, key or fingerprint, unusual sign-in alert'] },
      { label: 'The supplier is chasing an invoice already paid', cells: ['The transfer went elsewhere', 'bank warned at once, evidence kept, next steps with your legal adviser'] },
    ], caption: 'Figure 1 · The first two rows are the two directions of the same fraud: you are made to pay a forged supplier, or your customers are made to pay someone else in your place. The next three explain why it lasts: a hidden rule, a session left open, two-step verification bypassed. The last is the moment it is discovered.', alt: 'Matrix of six situations: new bank details received by email, messages sent in our name, mailbox receiving fewer messages, password changed, two-step verification bypassed, invoice chased although paid; what happened and what to do.' },
    fil: { caption: 'Figure 2 · The conversation with the supplier as it appears in the mailbox: the invoice, the acknowledgement, the forged message announcing a change of bank, then the transfer. The real supplier’s reminder, dashed, was never seen: a rule created in the mailbox marks it as read and files it elsewhere. The forged message comes from a domain one letter away. Domain names, amounts and dates are a constructed example.' },
    journal: { caption: 'Figure 3 · On the left, the mailbox sign-in log over thirty-three days: four lines out of seven come from an unknown device abroad, including the creation of the rule six minutes after the first sign-in. On the right, the seven actions of the first hour, in order. Dates, places and numbers are a constructed example; your mail service keeps a comparable log.' },
    gestes: { title: 'Changing a supplier’s bank details, in six steps', items: [
      { label: 'Receive', sub: 'the request, without replying to the message' },
      { label: 'Call back', sub: 'on the number on file, known beforehand', accent: true },
      { label: 'Get it confirmed', sub: 'in writing, through the usual channel' },
      { label: 'Approve in pairs', sub: 'a second person approves' },
      { label: 'Wait', sub: 'one working day before the first payment' },
      { label: 'Log', sub: 'who asked, who called, who approved' },
    ], caption: 'Figure 4 · The accented step is the call back: on the number recorded in the supplier’s file before the request, never the one the message gives. The other five surround it: no reply to the message, written confirmation, a second person approves, one working day of waiting, a log.', alt: 'Six steps: receive, call back (accented), get it confirmed, approve in pairs, wait, log.' },
    couches: { title: 'Protecting against account takeover, in five layers', layers: [
      { label: 'Identities', items: [{ name: 'One account per person, two-step verification everywhere, a proof tied to the site for management and accounts', sub: 'a stolen password must not be enough to get in' }] },
      { label: 'Mail', items: [{ name: 'Signed domain with a reject policy, automatic external forwarding forbidden, a banner on external senders', sub: 'your exact name can no longer be imitated; a look-alike domain can' }] },
      { label: 'Detection', items: [{ name: 'Alerts on unusual sign-in, new mailbox rule, new forward, mass sending, and someone who reads them', sub: 'the log already exists; what it lacks is a reader', accent: true }] },
      { label: 'Payments', items: [{ name: 'No change of bank details on an email alone, call back on the known number, second approval, delay before paying', sub: 'the rule also holds when the message seems to come from management' }] },
      { label: 'Response', items: [{ name: 'A one-page sheet for the first hour, who to call, what to close, what to keep, rehearsed once a year', sub: 'on the day it happens, nobody has to search' }] },
    ], caption: 'Figure 5 · The accented layer is detection: the sign-in log and the list of rules already exist in the mail service; what they lack is someone who reads them. Identities and mail, above, make getting in harder; payments and response, below, limit what getting in costs.', alt: 'Five layers: identities; mail; detection (accented); payments; response.' },
    calendrier: { title: 'Closing the door in 2027, in weeks', unit: 'wk', items: [
      { label: 'Stock-take', note: 'accounts, two-step verification, rules and forwards of every mailbox, sign-in log, look-alike domains already registered', from: 0, to: 1 },
      { label: 'Accounts and mail', note: 'two-step verification for all, keys for management and accounts, external forwarding forbidden, reject policy', from: 1, to: 2, accent: true },
      { label: 'Payments and alerts', note: 'written procedure for changing bank details, supplier files checked by phone, alerts set and assigned', from: 2, to: 3 },
      { label: 'Exercise', note: 'a forged message sent to the team, a forged bank-details request to accounts, the first-hour sheet rehearsed', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example, the first with nothing changed: accounts, rules and the log are read. The accented week is accounts and mail, which closes the way in; the payment procedure and the exercise come next, because no closing is perfect.', alt: 'Four-week calendar: stock-take, accounts and mail (accented), payments and alerts, exercise.' },
  },
  ar: {
    cover: { eyebrow: 'الأمن السيبراني للمؤسسة · الجزائر · 2027', title: ['علبة بريد مخترَقة', 'وحساب بنكي مزوَّر للمورِّد'], subtitle: 'الساعة الأولى، القاعدة المخفية، التحقق بخطوتين، ومكالمة هاتفية قبل أي تغيير للحساب البنكي', left: { label: 'كلمة مرور مسروقة', sub: 'شهر من القراءة، ثم حساب مزوَّر' }, right: { label: 'مكالمة هاتفية', sub: 'عشر دقائق تُفشل الاحتيال' } },
    situations: { title: 'ست حالات واقعية، وما يجب فعله', columns: ['ما الذي حدث', 'ما يجب فعله'], rows: [
      { label: 'وصلنا حساب بنكي جديد من المورِّد بالبريد', cells: ['الرسالة جاءت من نطاق مشابه', 'اتصال بالرقم المعروف من قبل، قبل أي تعديل، ثم مصادقة ثانية'] },
      { label: 'زبائن تلقّوا رسائل غريبة باسمنا', cells: ['علبتنا مفتوحة لطرف غريب', 'الساعة الأولى: كلمة المرور، الجلسات، القواعد، التحقق بخطوتين'] },
      { label: 'العلبة تستقبل رسائل أقل من قبل', cells: ['قاعدة تنقلها أو تعيد توجيهها', 'قراءة قواعد كل علبة وإعادات توجيهها، ومنع التوجيه نحو الخارج'] },
      { label: 'غيّرنا كلمة المرور، انتهى الأمر', cells: ['الجلسة والقاعدة بقيتا', 'إغلاق كل الجلسات، حذف القواعد وإعادات التوجيه، ثم المراقبة'] },
      { label: 'كان عنده التحقق بخطوتين مع ذلك', cells: ['صفحة مزوَّرة نقلت الرمز', 'إثبات ثانٍ مربوط بالموقع، مفتاح أو بصمة، وتنبيه دخول غير معتاد'] },
      { label: 'المورِّد يطالب بفاتورة دُفعت', cells: ['التحويل البنكي ذهب إلى مكان آخر', 'إخبار البنك فوراً، حفظ الأدلة، والباقي مع المستشار'] },
    ], caption: 'الشكل 1 · السطران الأولان هما اتجاها الاحتيال نفسه: يجعلونكم تدفعون لمورِّد مزوَّر، أو يجعلون زبائنكم يدفعون لغيركم. والثلاثة التالية تشرح لماذا يدوم: قاعدة مخفية، جلسة بقيت مفتوحة، وتحقق بخطوتين تم تجاوزه. والأخير هو لحظة الاكتشاف.', alt: 'مصفوفة ست حالات: حساب بنكي جديد بالبريد، رسائل أُرسلت باسمنا، علبة تستقبل رسائل أقل، تغيير كلمة المرور، تجاوز التحقق بخطوتين، مطالبة بفاتورة مدفوعة؛ ما الذي حدث وما يجب فعله.' },
    fil: { caption: 'الشكل 2 · المحادثة مع المورِّد كما تظهر في العلبة: الفاتورة، إشعار الاستلام، الرسالة المزوَّرة التي تعلن تغيير البنك، ثم التحويل البنكي. وتذكير المورِّد الحقيقي، بالخط المتقطع، لم يره أحد: قاعدة أُنشئت في العلبة تجعله مقروءاً وتضعه في مكان آخر. والرسالة المزوَّرة آتية من نطاق يختلف بحرف واحد. أسماء النطاقات والمبالغ والتواريخ مثال مركَّب.' },
    journal: { caption: 'الشكل 3 · على اليمين، سجل الدخول إلى العلبة خلال ثلاثة وثلاثين يوماً: أربعة سطور من سبعة آتية من جهاز مجهول في الخارج، ومنها إنشاء القاعدة بعد ست دقائق من أول دخول. وعلى اليسار، الحركات السبع في الساعة الأولى، بالترتيب. التواريخ والأماكن والأعداد مثال مركَّب؛ وخدمة بريدكم تمسك سجلاً مماثلاً.' },
    gestes: { title: 'تغيير الحساب البنكي لمورِّد، في ست خطوات', items: [
      { label: 'الاستلام', sub: 'استلام الطلب دون الردّ على الرسالة' },
      { label: 'الاتصال', sub: 'بالرقم المسجَّل في البطاقة من قبل', accent: true },
      { label: 'التأكيد', sub: 'كتابياً، عبر القناة المعتادة' },
      { label: 'مصادقة اثنين', sub: 'شخص ثانٍ يوافق' },
      { label: 'الانتظار', sub: 'يوم عمل قبل أول دفع' },
      { label: 'التدوين', sub: 'من طلب، من اتصل، من صادق' },
    ], caption: 'الشكل 4 · الخطوة المبرزة هي الاتصال: بالرقم المسجَّل في بطاقة المورِّد قبل الطلب، لا بالرقم الذي تذكره الرسالة أبداً. والخمس الأخرى تحيط به: لا ردّ على الرسالة، تأكيد كتابي، مصادقة شخص ثانٍ، انتظار يوم عمل، وتدوين.', alt: 'ست خطوات: الاستلام، الاتصال (مبرز)، التأكيد، مصادقة اثنين، الانتظار، التدوين.' },
    couches: { title: 'الحماية من اختراق الحسابات، في خمس طبقات', layers: [
      { label: 'الهويات', items: [{ name: 'حساب لكل شخص، تحقق بخطوتين في كل مكان، وإثبات ثانٍ مربوط بالموقع للإدارة والمحاسبة', sub: 'كلمة مرور مسروقة يجب ألا تكفي للدخول' }] },
      { label: 'البريد', items: [{ name: 'نطاق موقَّع وسياسة رفض، منع إعادة التوجيه التلقائي نحو الخارج، وشريط على المرسِلين الخارجيين', sub: 'اسمكم بالضبط لا يُقلَّد بعدها؛ أما النطاق المشابه فنعم' }] },
      { label: 'الكشف', items: [{ name: 'تنبيه عند دخول غير معتاد، قاعدة جديدة، إعادة توجيه جديدة، أو إرسال بالجملة، يقرؤه أحدهم', sub: 'السجل موجود من قبل، وينقصه قارئ', accent: true }] },
      { label: 'المدفوعات', items: [{ name: 'لا تغيير لحساب بنكي ببريد وحده، اتصال بالرقم المعروف، مصادقة ثانية، ومهلة قبل الدفع', sub: 'القاعدة تسري كذلك حين تبدو الرسالة آتية من الإدارة' }] },
      { label: 'ردّ الفعل', items: [{ name: 'بطاقة من صفحة للساعة الأولى، بمن نتصل، ماذا نغلق، ماذا نحفظ، تُجرَّب مرة في السنة', sub: 'يوم يحدث ذلك، لا أحد يبحث' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الكشف: سجل الدخول وقائمة القواعد موجودان من قبل في خدمة البريد، وينقصهما من يقرؤهما. الهويات والبريد، فوقها، تصعّبان الدخول؛ والمدفوعات وردّ الفعل، تحتها، تحدّان مما يكلّفه الدخول.', alt: 'خمس طبقات: الهويات؛ البريد؛ الكشف (مبرزة)؛ المدفوعات؛ ردّ الفعل.' },
    calendrier: { title: 'إغلاق الباب سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'معاينة الوضع', note: 'الحسابات، التحقق بخطوتين، قواعد كل علبة وإعادات توجيهها، سجل الدخول، والنطاقات المشابهة المسجَّلة', from: 0, to: 1 },
      { label: 'الحسابات والبريد', note: 'تحقق بخطوتين للجميع، مفاتيح للإدارة والمحاسبة، منع التوجيه نحو الخارج، وسياسة رفض', from: 1, to: 2, accent: true },
      { label: 'المدفوعات والتنبيهات', note: 'إجراء مكتوب لتغيير الحساب البنكي، بطاقات المورِّدين متحقَّق منها بالهاتف، وتنبيهات مضبوطة ومسنَدة', from: 2, to: 3 },
      { label: 'التمرين', note: 'رسالة مزوَّرة تُرسَل للفريق، طلب مزوَّر لتغيير الحساب إلى المحاسبة، وتجربة بطاقة الساعة الأولى', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال، الأول دون تغيير شيء: تُقرأ الحسابات والقواعد والسجل. الأسبوع المبرز هو الحسابات والبريد، وهو الذي يغلق المدخل؛ ثم يأتي إجراء الدفع والتمرين، لأنه لا إغلاق كامل.', alt: 'تقويم أربعة أسابيع: معاينة الوضع، الحسابات والبريد (مبرز)، المدفوعات والتنبيهات، التمرين.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      fil: { svg: fil(e.fil, rtl), caption: t.fil.caption, alt: e.fil.alt },
      journal: { svg: journal(e.journal, rtl), caption: t.journal.caption, alt: e.journal.alt },
      gestes: { svg: steps({ title: t.gestes.title, steps: t.gestes.items, arrows: true, rtl }), caption: t.gestes.caption, alt: t.gestes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
