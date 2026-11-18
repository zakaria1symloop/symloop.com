import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { tableur, champs, STRINGS as SC } from './custom/formulaire.mjs';
export const slug = 'comment-faire-un-formulaire-en-ligne-en-algerie-2027-inscriptions-demandes-de-devis-reponses-dans-un-tableur-doublons-spam-accuse-de-reception';
const T = {
  fr: {
    cover: { eyebrow: 'Formulaire en ligne · Algérie · 2027', title: ['Un formulaire en ligne', 'qui arrive quelque part'], subtitle: 'Peu de champs, un accusé de réception, ni doublon ni indésirable, une demande suivie au lieu d’une ligne', left: { label: 'Un tableur', sub: 'huit lignes, personne en face' }, right: { label: 'Des demandes suivies', sub: 'un numéro, un responsable' } },
    tableur: { caption: 'Figure 1 · Huit envois d’une semaine. À gauche, dans le tableur : un doublon, un message indésirable, une demande sans réponse depuis six jours, une demande à laquelle deux personnes ont répondu, et rien qui le signale. À droite, les mêmes envois traités comme des demandes : six demandes, chacune avec un numéro, un responsable et un délai. Exemple construit.' },
    apres: { title: 'Après « Envoyer », six temps', items: [
      { label: 'Vérifier', sub: 'pendant la saisie, pas après' },
      { label: 'Confirmer', sub: 'un numéro, un message' },
      { label: 'Filtrer', sub: 'indésirables et doublons' },
      { label: 'Créer', sub: 'une demande, pas une ligne', accent: true },
      { label: 'Prévenir', sub: 'la bonne personne' },
      { label: 'Suivre', sub: 'un état, un délai' },
    ], caption: 'Figure 2 · Le temps accentué est le quatrième : créer une demande, pas une ligne. Les trois premiers protègent le demandeur et l’entreprise : une saisie vérifiée, un accusé de réception, un tri à l’entrée. Les deux derniers font que quelqu’un s’en occupe : une alerte, puis un état jusqu’à la réponse.', alt: 'Six temps : vérifier, confirmer, filtrer, créer (accentué), prévenir, suivre.' },
    couches: { title: 'Un formulaire qui marche, en cinq couches', layers: [
      { label: 'Champs', items: [{ name: 'Peu de champs, chacun avec son libellé, dans la langue du demandeur, lisibles sur un téléphone', sub: 'ce qu’il faut pour le rappeler, rien de plus' }] },
      { label: 'Contrôles', items: [{ name: 'Des contrôles pendant la saisie : format du téléphone, pièce jointe trop lourde, champ oublié', sub: 'l’erreur se corrige avant l’envoi' }] },
      { label: 'Protection', items: [{ name: 'Les messages indésirables écartés sans casse-tête pour le demandeur, les doublons reconnus', sub: 'un champ piège, un délai minimal, une limite par adresse' }] },
      { label: 'Traitement', items: [{ name: 'Chaque envoi devient une demande : un numéro, un responsable, un état, un accusé de réception', sub: 'c’est la couche qui manque au tableur', accent: true }] },
      { label: 'Mesure', items: [{ name: 'Combien ouvrent le formulaire, combien l’envoient, en combien de temps on répond', sub: 'trois chiffres, relus chaque semaine' }] },
    ], caption: 'Figure 3 · La couche accentuée est le traitement : sans elle, le meilleur formulaire verse ses réponses dans un endroit où personne ne les attend. Les trois premières couches font que l’envoi est propre ; la dernière dit si le formulaire sert : combien l’ouvrent, combien l’envoient, et en combien de temps on répond.', alt: 'Cinq couches : champs ; contrôles ; protection ; traitement (accentuée) ; mesure.' },
    champs: { caption: 'Figure 4 · Une demande de devis, douze champs. Cinq restent : le nom, le téléphone, le besoin en une phrase, la wilaya, une pièce facultative. Sept sont barrés : trois ne servaient à personne, quatre se demandent au premier échange. Les deux taux affichés sont ceux de l’exemple construit ; les vôtres se mesurent.' },
    choix: { title: 'Outil gratuit ou application : six questions', columns: ['Un outil de formulaire suffit', 'Il faut une application'], rows: [
      { label: 'Combien d’envois', cells: ['quelques-uns par semaine', 'plusieurs par jour, ou des pics'] },
      { label: 'Qui traite', cells: ['une seule personne', 'plusieurs, avec des rôles'] },
      { label: 'Ce qui suit l’envoi', cells: ['une réponse, et c’est fini', 'des étapes : devis, pièces, validation'] },
      { label: 'Les pièces jointes', cells: ['aucune, ou une photo', 'des documents à vérifier et à garder'] },
      { label: 'Le demandeur', cells: ['n’a rien à suivre', 'veut voir où en est sa demande'] },
      { label: 'Les données', cells: ['un tableur suffit', 'doivent rejoindre votre logiciel'] },
    ], caption: 'Figure 5 · Six questions pour choisir. Si les six réponses sont dans la première colonne, un outil de formulaire gratuit suffit, avec un message de confirmation et une personne qui ouvre le tableur chaque matin. Dès que deux réponses passent dans la seconde, le formulaire est devenu un circuit, et il lui faut une application.', alt: 'Matrice de six questions : combien d’envois, qui traite, ce qui suit l’envoi, les pièces jointes, le demandeur, les données ; pour chacune, le cas où un outil de formulaire suffit et le cas où il faut une application.' },
    calendrier: { title: 'Quatre semaines, du tri des champs à la mesure', unit: 'sem.', items: [
      { label: 'Tri des champs', note: 'ce qu’on demande à l’entrée, ce qu’on demande après ; qui reçoit quoi', from: 0, to: 1, accent: true },
      { label: 'Formulaire et contrôles', note: 'libellés, formats, pièces jointes, deux langues, essai sur plusieurs téléphones', from: 1, to: 2 },
      { label: 'Protection et accusé', note: 'indésirables et doublons écartés, numéro et message de confirmation', from: 1, to: 3 },
      { label: 'Demandes et alertes', note: 'chaque envoi devient une demande, avec un responsable, un état, une alerte', from: 2, to: 4 },
      { label: 'Mesure', note: 'ouvertures, envois, délai de première réponse, champ où l’on abandonne', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple. La période accentuée est la première : trier les champs, sans rien construire. Le formulaire lui-même prend une semaine ; ce qui se passe après l’envoi en prend deux. Durées indicatives d’un exemple construit.', alt: 'Calendrier de quatre semaines : tri des champs (accentué, une semaine), formulaire et contrôles, protection et accusé de réception, demandes et alertes, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Online form · Algeria · 2027', title: ['An online form', 'that lands somewhere'], subtitle: 'Few fields, an acknowledgement, no duplicate and no spam, a tracked request instead of a row', left: { label: 'A spreadsheet', sub: 'eight rows, nobody in charge' }, right: { label: 'Tracked requests', sub: 'a number, an owner' } },
    tableur: { caption: 'Figure 1 · Eight submissions in a week. On the left, in the spreadsheet: a duplicate, a spam message, a request with no answer for six days, a request two people replied to, and nothing to flag it. On the right, the same submissions handled as requests: six requests, each with a number, an owner and a time limit. Constructed example.' },
    apres: { title: 'After “Send”, six steps', items: [
      { label: 'Check', sub: 'while typing, not afterwards' },
      { label: 'Confirm', sub: 'a number, a message' },
      { label: 'Filter', sub: 'spam and duplicates' },
      { label: 'Create', sub: 'a request, not a row', accent: true },
      { label: 'Notify', sub: 'the right person' },
      { label: 'Track', sub: 'a status, a time limit' },
    ], caption: 'Figure 2 · The accented step is the fourth: create a request, not a row. The first three protect the sender and the company: checked input, an acknowledgement, a sort at the door. The last two make sure someone deals with it: an alert, then a status until the answer.', alt: 'Six steps: check, confirm, filter, create (accented), notify, track.' },
    couches: { title: 'A form that works, in five layers', layers: [
      { label: 'Fields', items: [{ name: 'Few fields, each with its label, in the sender’s language, readable on a phone', sub: 'what is needed to call them back, nothing more' }] },
      { label: 'Checks', items: [{ name: 'Checks while typing: phone format, attachment too heavy, field forgotten', sub: 'the mistake is fixed before sending' }] },
      { label: 'Protection', items: [{ name: 'Spam set aside with no puzzle for the sender, duplicates recognised', sub: 'a trap field, a minimum delay, a limit per address' }] },
      { label: 'Handling', items: [{ name: 'Each submission becomes a request: a number, an owner, a status, an acknowledgement', sub: 'this is the layer the spreadsheet lacks', accent: true }] },
      { label: 'Measuring', items: [{ name: 'How many open the form, how many send it, how long before you answer', sub: 'three figures, reread every week' }] },
    ], caption: 'Figure 3 · The accented layer is handling: without it, the best form pours its answers into a place where nobody is waiting for them. The first three layers make the submission clean; the last says whether the form is useful: how many open it, how many send it, and how long before you answer.', alt: 'Five layers: fields; checks; protection; handling (accented); measuring.' },
    champs: { caption: 'Figure 4 · A quote request, twelve fields. Five stay: name, phone, the need in one sentence, the wilaya, an optional file. Seven are struck out: three were of use to nobody, four are asked in the first exchange. The two rates shown are those of the constructed example; yours are to be measured.' },
    choix: { title: 'Free tool or application: six questions', columns: ['A form tool is enough', 'An application is needed'], rows: [
      { label: 'How many submissions', cells: ['a few a week', 'several a day, or peaks'] },
      { label: 'Who handles them', cells: ['a single person', 'several, with roles'] },
      { label: 'What follows the submission', cells: ['one reply, and that is it', 'steps: quote, documents, validation'] },
      { label: 'Attachments', cells: ['none, or one photo', 'documents to check and keep'] },
      { label: 'The sender', cells: ['has nothing to follow', 'wants to see where the request stands'] },
      { label: 'The data', cells: ['a spreadsheet is enough', 'must reach your software'] },
    ], caption: 'Figure 5 · Six questions for choosing. If all six answers are in the first column, a free form tool is enough, with a confirmation message and one person who opens the spreadsheet every morning. As soon as two answers move to the second, the form has become a circuit, and it needs an application.', alt: 'Matrix of six questions: how many submissions, who handles them, what follows the submission, attachments, the sender, the data; for each, the case where a form tool is enough and the case where an application is needed.' },
    calendrier: { title: 'Four weeks, from sorting the fields to measuring', unit: 'wk', items: [
      { label: 'Sorting the fields', note: 'what is asked at the door, what is asked later; who receives what', from: 0, to: 1, accent: true },
      { label: 'Form and checks', note: 'labels, formats, attachments, two languages, tested on several phones', from: 1, to: 2 },
      { label: 'Protection, receipt', note: 'spam and duplicates set aside, number and confirmation message', from: 1, to: 3 },
      { label: 'Requests and alerts', note: 'each submission becomes a request, with an owner, a status, an alert', from: 2, to: 4 },
      { label: 'Measuring', note: 'opens, submissions, time to first reply, field where people give up', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example. The accented period is the first: sorting the fields, with nothing built. The form itself takes a week; what happens after sending takes two. Indicative durations from a constructed example.', alt: 'Four-week calendar: sorting the fields (accented, one week), form and checks, protection and acknowledgement, requests and alerts, measuring.' },
  },
  ar: {
    cover: { eyebrow: 'استمارة على الخط · الجزائر · 2027', title: ['استمارة على الخط', 'تصل إلى أحد'], subtitle: 'حقول قليلة، إشعار بالاستلام، لا مكرَّر ولا مزعج، وطلب متابَع بدل سطر', left: { label: 'جدول', sub: 'ثمانية أسطر، ولا أحد مقابلها' }, right: { label: 'طلبات متابَعة', sub: 'رقم، ومسؤول' } },
    tableur: { caption: 'الشكل 1 · ثمانية إرسالات في أسبوع. على جهة، في الجدول: مكرَّر، رسالة مزعجة، طلب دون جواب منذ ستة أيام، طلب أجاب عنه شخصان، ولا شيء ينبّه إلى ذلك. وعلى الجهة الأخرى، الإرسالات نفسها معالَجة كطلبات: ستة طلبات، لكل واحد رقم ومسؤول وأجل. مثال مركَّب.' },
    apres: { title: 'بعد «إرسال»، ست مراحل', items: [
      { label: 'التحقق', sub: 'أثناء الكتابة، لا بعدها' },
      { label: 'التأكيد', sub: 'رقم، ورسالة' },
      { label: 'الفرز', sub: 'المزعج والمكرَّر' },
      { label: 'الإنشاء', sub: 'طلب، لا سطر', accent: true },
      { label: 'الإعلام', sub: 'الشخص المناسب' },
      { label: 'المتابعة', sub: 'حالة، وأجل' },
    ], caption: 'الشكل 2 · المرحلة المبرزة هي الرابعة: إنشاء طلب، لا سطر. والثلاث الأولى تحمي الطالب والمؤسسة: كتابة متحقَّق منها، إشعار بالاستلام، وفرز عند المدخل. والأخيرتان تجعلان أحداً يتكفل: تنبيه، ثم حالة إلى غاية الجواب.', alt: 'ست مراحل: التحقق، التأكيد، الفرز، الإنشاء (مبرزة)، الإعلام، المتابعة.' },
    couches: { title: 'استمارة تعمل، في خمس طبقات', layers: [
      { label: 'الحقول', items: [{ name: 'حقول قليلة، لكل واحد عنوانه، بلغة الطالب، ومقروءة على الهاتف', sub: 'ما يلزم للاتصال به، لا أكثر' }] },
      { label: 'المراقبة', items: [{ name: 'مراقبة أثناء الكتابة: صيغة الهاتف، مرفق ثقيل، أو حقل منسي', sub: 'الخطأ يُصحَّح قبل الإرسال' }] },
      { label: 'الحماية', items: [{ name: 'الرسائل المزعجة تُبعَد دون لغز للطالب، والمكرَّرات تُعرَف', sub: 'حقل فخ، أجل أدنى، وحدّ لكل عنوان' }] },
      { label: 'المعالجة', items: [{ name: 'كل إرسال يصير طلباً: رقم، مسؤول، حالة، وإشعار بالاستلام', sub: 'هي الطبقة التي تنقص الجدول', accent: true }] },
      { label: 'القياس', items: [{ name: 'كم يفتحون الاستمارة، كم يرسلونها، وفي كم من الوقت نجيب', sub: 'ثلاثة أرقام، تُراجَع كل أسبوع' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي المعالجة: دونها، أحسن استمارة تصبّ أجوبتها في مكان لا ينتظرها فيه أحد. والطبقات الثلاث الأولى تجعل الإرسال نظيفاً؛ والأخيرة تقول هل الاستمارة تنفع: كم يفتحونها، كم يرسلونها، وفي كم من الوقت نجيب.', alt: 'خمس طبقات: الحقول؛ المراقبة؛ الحماية؛ المعالجة (مبرزة)؛ القياس.' },
    champs: { caption: 'الشكل 4 · طلب عرض سعر، اثنا عشر حقلاً. خمسة تبقى: الاسم، الهاتف، الحاجة في جملة، الولاية، ووثيقة اختيارية. وسبعة تُشطب: ثلاثة لم تكن تنفع أحداً، وأربعة تُسأل في أول تبادل. والنسبتان المعروضتان من المثال المركَّب؛ ونسبكم تُقاس.' },
    choix: { title: 'أداة مجانية أم تطبيق: ستة أسئلة', columns: ['أداة استمارات تكفي', 'يلزم تطبيق'], rows: [
      { label: 'كم إرسالاً', cells: ['بضعة في الأسبوع', 'عدة في اليوم، أو فترات ذروة'] },
      { label: 'من يعالج', cells: ['شخص واحد', 'عدة أشخاص، بأدوار'] },
      { label: 'ما يتبع الإرسال', cells: ['جواب، وينتهي الأمر', 'مراحل: عرض سعر، وثائق، ومصادقة'] },
      { label: 'المرفقات', cells: ['لا شيء، أو صورة', 'وثائق تُراجَع وتُحفظ'] },
      { label: 'الطالب', cells: ['لا شيء يتابعه', 'يريد أن يرى أين وصل طلبه'] },
      { label: 'البيانات', cells: ['جدول يكفي', 'يجب أن تصل إلى برنامجكم'] },
    ], caption: 'الشكل 5 · ستة أسئلة للاختيار. إذا كانت الأجوبة الستة في العمود الأول، فأداة استمارات مجانية تكفي، مع رسالة تأكيد وشخص يفتح الجدول كل صباح. وحالما ينتقل جوابان إلى العمود الثاني، صارت الاستمارة مساراً، ويلزمها تطبيق.', alt: 'مصفوفة ستة أسئلة: كم إرسالاً، من يعالج، ما يتبع الإرسال، المرفقات، الطالب، البيانات؛ ولكل واحد الحالة التي تكفي فيها أداة والحالة التي يلزم فيها تطبيق.' },
    calendrier: { title: 'أربعة أسابيع، من فرز الحقول إلى القياس', unit: 'أسبوع', items: [
      { label: 'فرز الحقول', note: 'ما يُطلب عند المدخل، وما يُطلب بعدها؛ ومن يستلم ماذا', from: 0, to: 1, accent: true },
      { label: 'الاستمارة والمراقبة', note: 'العناوين، الصيغ، المرفقات، لغتان، وتجربة على عدة هواتف', from: 1, to: 2 },
      { label: 'الحماية والإشعار', note: 'المزعج والمكرَّر يُبعَدان، رقم ورسالة تأكيد', from: 1, to: 3 },
      { label: 'الطلبات والتنبيهات', note: 'كل إرسال يصير طلباً، بمسؤول وحالة وتنبيه', from: 2, to: 4 },
      { label: 'القياس', note: 'الفتح، الإرسال، أجل أول جواب، والحقل الذي يُتخلّى عنده', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال. الفترة المبرزة هي الأولى: فرز الحقول، دون بناء شيء. والاستمارة نفسها تأخذ أسبوعاً؛ وما يجري بعد الإرسال يأخذ أسبوعين. مدد تقريبية لمثال مركَّب.', alt: 'تقويم أربعة أسابيع: فرز الحقول (مبرزة، أسبوع)، الاستمارة والمراقبة، الحماية والإشعار، الطلبات والتنبيهات، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      tableur: { svg: tableur(e.tableur, rtl), caption: t.tableur.caption, alt: e.tableur.alt },
      apres: { svg: steps({ title: t.apres.title, steps: t.apres.items, arrows: true, rtl }), caption: t.apres.caption, alt: t.apres.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      champs: { svg: champs(e.champs, rtl), caption: t.champs.caption, alt: e.champs.alt },
      choix: { svg: matrix({ title: t.choix.title, columns: t.choix.columns, rows: t.choix.rows, rtl }), caption: t.choix.caption, alt: t.choix.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
