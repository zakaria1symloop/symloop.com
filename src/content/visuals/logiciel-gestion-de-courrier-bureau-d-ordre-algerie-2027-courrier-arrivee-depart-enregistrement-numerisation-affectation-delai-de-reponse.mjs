import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { trajets, encours, STRINGS as SC } from './custom/courrier.mjs';
export const slug = 'logiciel-gestion-de-courrier-bureau-d-ordre-algerie-2027-courrier-arrivee-depart-enregistrement-numerisation-affectation-delai-de-reponse';
const T = {
  fr: {
    cover: { eyebrow: 'Gestion du courrier · Algérie · 2027', title: ['Logiciel de gestion de courrier :', 'ce qui attend, chez qui, depuis quand'], subtitle: 'Courrier arrivée et départ, enregistrement, numérisation, affectation, délais de réponse, suivi', left: { label: '23 jours', sub: 'de main en main' }, right: { label: '7 jours', sub: 'avec le registre' } },
    couches: { title: 'Ce qu’il y a dans un logiciel de gestion de courrier, en cinq couches', layers: [
      { label: 'Enregistrement', items: [{ name: 'L’enregistrement : un numéro d’ordre, une date, un expéditeur, un objet, pour chaque courrier arrivé ou parti', sub: 'le registre, sans cahier' }] },
      { label: 'Numérisation', items: [{ name: 'La numérisation : le courrier scanné à l’arrivée, son texte lu, l’original rangé une fois', sub: 'le papier ne circule plus' }] },
      { label: 'Affectation', items: [{ name: 'L’affectation : un service, une personne, une échéance, une consigne de la direction', sub: 'qui doit faire quoi, pour quand', accent: true }] },
      { label: 'Traitement', items: [{ name: 'Le traitement : lecture, projet de réponse, validation, signature, départ numéroté', sub: 'ce qui se passe entre l’arrivée et la réponse' }] },
      { label: 'Suivi', items: [{ name: 'Le suivi : ce qui attend, chez qui, depuis quand ; rappels avant échéance ; recherche', sub: 'ce que la direction regarde le matin' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est l’affectation : un courrier enregistré mais sans détenteur ni échéance est aussi perdu qu’un courrier non enregistré.', alt: 'Cinq couches : l’enregistrement ; la numérisation ; l’affectation (accentuée) ; le traitement ; le suivi.' },
    vie: { title: 'La vie d’un courrier arrivé, en six temps', items: [
      { label: 'Réception', sub: 'pli ouvert et daté à l’accueil' },
      { label: 'Enregistrement', sub: 'numéro d’ordre, expéditeur, objet' },
      { label: 'Numérisation', sub: 'scanné, texte lu, original rangé' },
      { label: 'Affectation', sub: 'service, personne, échéance', accent: true },
      { label: 'Traitement', sub: 'réponse préparée, validée, signée' },
      { label: 'Clôture', sub: 'réponse partie, ou classé sans suite' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est l’affectation : c’est le moment où le courrier cesse d’appartenir à l’accueil et devient le travail de quelqu’un, avec une date.', alt: 'Six temps : réception, enregistrement, numérisation, affectation (accentuée), traitement, clôture.' },
    trajets: { caption: 'Figure 3 · Le même courrier, deux trajets : 23 jours de main en main, 7 jours avec le registre, pour un délai de 15. Le travail réel est de trois jours dans les deux cas. Durées fictives.' },
    types: { title: 'Six sortes de courrier : ce qu’on enregistre, ce qu’on suit', columns: ['Ce qu’on enregistre', 'Ce qu’on suit'], rows: [
      { label: 'Le courrier arrivé', cells: ['numéro, date, expéditeur, objet', 'détenteur, échéance, réponse'] },
      { label: 'Le courrier parti', cells: ['numéro, destinataire, signataire', 'mode d’envoi, preuve de dépôt'] },
      { label: 'Le recommandé, le pli remis en main propre', cells: ['référence d’envoi, date de remise', 'accusé de réception, décharge'] },
      { label: 'La note interne', cells: ['émetteur, services destinataires', 'lecture par chaque destinataire'] },
      { label: 'Le message électronique important', cells: ['versé au registre par son destinataire', 'même suivi qu’un courrier papier'] },
      { label: 'La facture fournisseur', cells: ['numéro, fournisseur, montant', 'transmise à la comptabilité, validée'] },
    ], caption: 'Figure 4 · Six sortes de courrier, un seul registre. Tout ne demande pas une réponse ; tout demande de savoir où c’est. Les types et leurs délais se règlent chez vous.', alt: 'Matrice de six sortes de courrier : le courrier arrivé, le courrier parti, le recommandé et le pli remis en main propre, la note interne, le message électronique important, la facture fournisseur ; pour chacune, ce qu’on enregistre et ce qu’on suit.' },
    encours: { caption: 'Figure 5 · Le registre un matin : 64 courriers en attente de réponse, 9 en retard dans trois services, 14 à échéance dans les cinq jours. Exemple construit.' },
    calendrier: { title: 'Sept semaines pour un siège, un registre, des délais', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'les types de courrier, les services, les délais de réponse, la numérotation en usage', from: 0, to: 1, accent: true },
      { label: 'Enregistrement', note: 'arrivée et départ, numéro d’ordre, expéditeurs et destinataires connus', from: 1, to: 3 },
      { label: 'Numérisation', note: 'scan à l’accueil, lecture du texte, rangement de l’original', from: 2, to: 4 },
      { label: 'Affectation et rappels', note: 'services, personnes, échéances, consignes, alertes avant échéance', from: 3, to: 5 },
      { label: 'Réponse et départ', note: 'projet, validation, signature, numéro de départ, preuve d’envoi', from: 4, to: 6 },
      { label: 'Suivi et mise en service', note: 'vue du matin, recherche, formation de l’accueil et des secrétariats', from: 5, to: 7 },
    ], caption: 'Figure 6 · Sept semaines dans l’exemple, pour un site. La période accentuée est la première : on reprend la numérotation déjà en usage et l’on fixe les délais par type de courrier avant d’écrire une ligne de code. Durées indicatives d’un exemple construit.', alt: 'Calendrier de sept semaines : cadrage (accentué), enregistrement, numérisation, affectation et rappels, réponse et départ, suivi et mise en service.' },
  },
  en: {
    cover: { eyebrow: 'Mail registry · Algeria · 2027', title: ['Mail management software:', 'what is waiting, with whom, since when'], subtitle: 'Incoming and outgoing mail, registration, scanning, assignment, reply deadlines, tracking', left: { label: '23 days', sub: 'from hand to hand' }, right: { label: '7 days', sub: 'with the register' } },
    couches: { title: 'What is inside mail management software, in five layers', layers: [
      { label: 'Registration', items: [{ name: 'Registration: an order number, a date, a sender, a subject, for every letter received or sent', sub: 'the register, without the ledger' }] },
      { label: 'Scanning', items: [{ name: 'Scanning: the letter scanned on arrival, its text read, the original filed once', sub: 'paper no longer circulates' }] },
      { label: 'Assignment', items: [{ name: 'Assignment: a department, a person, a due date, an instruction from management', sub: 'who has to do what, by when', accent: true }] },
      { label: 'Handling', items: [{ name: 'Handling: reading, draft reply, approval, signature, numbered dispatch', sub: 'what happens between arrival and reply' }] },
      { label: 'Tracking', items: [{ name: 'Tracking: what is waiting, with whom, since when; reminders before the due date; search', sub: 'what management looks at in the morning' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is assignment: a letter that is registered but has no holder and no due date is as lost as a letter that was never registered.', alt: 'Five layers: registration; scanning; assignment (accented); handling; tracking.' },
    vie: { title: 'The life of an incoming letter, in six steps', items: [
      { label: 'Receipt', sub: 'opened and dated at reception' },
      { label: 'Registration', sub: 'order number, sender, subject' },
      { label: 'Scanning', sub: 'scanned, text read, original filed' },
      { label: 'Assignment', sub: 'department, person, due date', accent: true },
      { label: 'Handling', sub: 'reply prepared, approved, signed' },
      { label: 'Closing', sub: 'reply sent, or filed with no action' },
    ], caption: 'Figure 2 · Six steps. The accented step is assignment: it is the moment the letter stops belonging to reception and becomes someone’s work, with a date.', alt: 'Six steps: receipt, registration, scanning, assignment (accented), handling, closing.' },
    trajets: { caption: 'Figure 3 · The same letter, two journeys: 23 days from hand to hand, 7 days with the register, for a 15-day deadline. The real work is three days in both cases. Fictitious durations.' },
    types: { title: 'Six kinds of mail: what is registered, what is tracked', columns: ['What is registered', 'What is tracked'], rows: [
      { label: 'Incoming mail', cells: ['number, date, sender, subject', 'holder, due date, reply'] },
      { label: 'Outgoing mail', cells: ['number, recipient, signatory', 'means of sending, proof of mailing'] },
      { label: 'Registered mail, letters delivered by hand', cells: ['sending reference, date handed over', 'acknowledgement, signed receipt'] },
      { label: 'The internal memo', cells: ['issuer, recipient departments', 'read by each recipient'] },
      { label: 'The important e-mail', cells: ['filed in the register by its recipient', 'same tracking as a paper letter'] },
      { label: 'The supplier invoice', cells: ['number, supplier, amount', 'passed to accounts, approved'] },
    ], caption: 'Figure 4 · Six kinds of mail, a single register. Not everything calls for a reply; everything calls for knowing where it is. The types and their deadlines are set by you.', alt: 'Matrix of six kinds of mail: incoming mail, outgoing mail, registered mail and letters delivered by hand, the internal memo, the important e-mail, the supplier invoice; for each, what is registered and what is tracked.' },
    encours: { caption: 'Figure 5 · The register one morning: 64 letters awaiting a reply, 9 overdue in three departments, 14 due within five days. Constructed example.' },
    calendrier: { title: 'Seven weeks for a head office, a register, and deadlines', unit: 'wk', items: [
      { label: 'Scoping', note: 'the types of mail, the departments, the reply deadlines, the numbering already in use', from: 0, to: 1, accent: true },
      { label: 'Registration', note: 'incoming and outgoing, order number, known senders and recipients', from: 1, to: 3 },
      { label: 'Scanning', note: 'scan at reception, text reading, filing of the original', from: 2, to: 4 },
      { label: 'Assignment and reminders', note: 'departments, people, due dates, instructions, alerts before the due date', from: 3, to: 5 },
      { label: 'Reply and dispatch', note: 'draft, approval, signature, outgoing number, proof of sending', from: 4, to: 6 },
      { label: 'Tracking and go-live', note: 'the morning view, search, training of reception and secretaries', from: 5, to: 7 },
    ], caption: 'Figure 6 · Seven weeks in the example, for one site. The accented period is the first: the numbering already in use is taken over and deadlines are set per type of mail before a line of code is written. Indicative durations of a constructed example.', alt: 'Seven-week calendar: scoping (accented), registration, scanning, assignment and reminders, reply and dispatch, tracking and go-live.' },
  },
  ar: {
    cover: { eyebrow: 'تسيير البريد · الجزائر · 2027', title: ['برنامج تسيير البريد:', 'ما ينتظر، عند من، ومنذ متى'], subtitle: 'البريد الوارد والصادر، التسجيل، الرقمنة، الإحالة، آجال الردّ، والمتابعة', left: { label: '23 يوماً', sub: 'من يد إلى يد' }, right: { label: '7 أيام', sub: 'بالسجل' } },
    couches: { title: 'ما يوجد في برنامج تسيير البريد، في خمس طبقات', layers: [
      { label: 'التسجيل', items: [{ name: 'التسجيل: رقم ترتيبي، تاريخ، مرسِل، وموضوع، لكل بريد وارد أو صادر', sub: 'السجل، دون دفتر' }] },
      { label: 'الرقمنة', items: [{ name: 'الرقمنة: الرسالة تُمسح عند الوصول، نصّها يُقرأ، والأصل يُرتَّب مرة واحدة', sub: 'الورق لا يتنقّل بعد ذلك' }] },
      { label: 'الإحالة', items: [{ name: 'الإحالة: مصلحة، شخص، أجل، وتعليمة من المديرية', sub: 'من يفعل ماذا، ومتى', accent: true }] },
      { label: 'المعالجة', items: [{ name: 'المعالجة: قراءة، مشروع ردّ، مصادقة، إمضاء، وإرسال برقم', sub: 'ما يجري بين الوصول والردّ' }] },
      { label: 'المتابعة', items: [{ name: 'المتابعة: ما ينتظر، عند من، ومنذ متى؛ تذكيرات قبل الأجل؛ وبحث', sub: 'ما تنظر إليه المديرية صباحاً' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي الإحالة: رسالة مسجَّلة لكن دون حائز ولا أجل ضائعة مثل رسالة لم تُسجَّل.', alt: 'خمس طبقات: التسجيل؛ الرقمنة؛ الإحالة (مبرزة)؛ المعالجة؛ والمتابعة.' },
    vie: { title: 'حياة رسالة واردة، في ست مراحل', items: [
      { label: 'الاستلام', sub: 'تُفتح وتؤرَّخ في الاستقبال' },
      { label: 'التسجيل', sub: 'رقم ترتيبي، مرسِل، وموضوع' },
      { label: 'الرقمنة', sub: 'تُمسح، يُقرأ نصّها، ويُرتَّب الأصل' },
      { label: 'الإحالة', sub: 'مصلحة، شخص، وأجل', accent: true },
      { label: 'المعالجة', sub: 'ردّ يُحضَّر، يُصادَق عليه، ويُمضى' },
      { label: 'الإغلاق', sub: 'الردّ أُرسل، أو حُفظت دون متابعة' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي الإحالة: هي اللحظة التي تكفّ فيها الرسالة عن كونها للاستقبال وتصير عمل شخص، بتاريخ.', alt: 'ست مراحل: الاستلام، التسجيل، الرقمنة، الإحالة (مبرزة)، المعالجة، والإغلاق.' },
    trajets: { caption: 'الشكل 3 · الرسالة نفسها، ومساران: 23 يوماً من يد إلى يد، 7 أيام بالسجل، لأجل من 15 يوماً. والعمل الفعلي ثلاثة أيام في الحالتين. مدد خيالية.' },
    types: { title: 'ستة أنواع من البريد: ما يُسجَّل، وما يُتابَع', columns: ['ما يُسجَّل', 'ما يُتابَع'], rows: [
      { label: 'البريد الوارد', cells: ['الرقم، التاريخ، المرسِل، والموضوع', 'الحائز، الأجل، والردّ'] },
      { label: 'البريد الصادر', cells: ['الرقم، المرسَل إليه، والمُمضي', 'طريقة الإرسال، وإثبات الإيداع'] },
      { label: 'المضمون، والظرف المسلَّم يداً بيد', cells: ['مرجع الإرسال، وتاريخ التسليم', 'إشعار الاستلام، ووصل التسليم'] },
      { label: 'المذكّرة الداخلية', cells: ['المُصدِر، والمصالح المرسَل إليها', 'قراءة كل مرسَل إليه'] },
      { label: 'الرسالة الإلكترونية المهمة', cells: ['يُدرجها مستلمها في السجل', 'المتابعة نفسها كالرسالة الورقية'] },
      { label: 'فاتورة المورّد', cells: ['الرقم، المورّد، والمبلغ', 'تُحال إلى المحاسبة، ويُصادَق عليها'] },
    ], caption: 'الشكل 4 · ستة أنواع من البريد، وسجل واحد. ليس كل شيء يطلب ردّاً؛ لكن كل شيء يطلب أن يُعرف أين هو. والأنواع وآجالها تُضبط عندكم.', alt: 'مصفوفة من ستة أنواع من البريد: الوارد، الصادر، المضمون والظرف المسلَّم يداً بيد، المذكّرة الداخلية، الرسالة الإلكترونية المهمة، وفاتورة المورّد؛ ولكل واحد، ما يُسجَّل وما يُتابَع.' },
    encours: { caption: 'الشكل 5 · السجل ذات صباح: 64 رسالة تنتظر ردّاً، 9 متأخرة في ثلاث مصالح، و14 يحلّ أجلها في خمسة أيام. مثال مركَّب.' },
    calendrier: { title: 'سبعة أسابيع لمقر واحد، سجل، وآجال', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'أنواع البريد، المصالح، آجال الردّ، والترقيم المعمول به', from: 0, to: 1, accent: true },
      { label: 'التسجيل', note: 'الوارد والصادر، الرقم الترتيبي، والمرسِلون والمرسَل إليهم المعروفون', from: 1, to: 3 },
      { label: 'الرقمنة', note: 'مسح في الاستقبال، قراءة النص، وترتيب الأصل', from: 2, to: 4 },
      { label: 'الإحالة والتذكيرات', note: 'المصالح، الأشخاص، الآجال، التعليمات، وتنبيهات قبل الأجل', from: 3, to: 5 },
      { label: 'الردّ والإرسال', note: 'مشروع، مصادقة، إمضاء، رقم الصادر، وإثبات الإرسال', from: 4, to: 6 },
      { label: 'المتابعة والتشغيل', note: 'عرض الصباح، البحث، وتكوين الاستقبال والأمانات', from: 5, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع في المثال، لموقع واحد. الفترة المبرزة هي الأولى: يُسترجع الترقيم المعمول به وتُحدَّد الآجال لكل نوع من البريد قبل كتابة سطر من الشيفرة. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من سبعة أسابيع: التأطير (مبرزة)، التسجيل، الرقمنة، الإحالة والتذكيرات، الردّ والإرسال، ثم المتابعة والتشغيل.' },
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
      vie: { svg: steps({ title: t.vie.title, steps: t.vie.items, arrows: true, rtl }), caption: t.vie.caption, alt: t.vie.alt },
      trajets: { svg: trajets(e.trajets, rtl), caption: t.trajets.caption, alt: e.trajets.alt },
      types: { svg: matrix({ title: t.types.title, columns: t.types.columns, rows: t.types.rows, rtl }), caption: t.types.caption, alt: t.types.alt },
      encours: { svg: encours(e.encours, rtl), caption: t.encours.caption, alt: e.encours.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
