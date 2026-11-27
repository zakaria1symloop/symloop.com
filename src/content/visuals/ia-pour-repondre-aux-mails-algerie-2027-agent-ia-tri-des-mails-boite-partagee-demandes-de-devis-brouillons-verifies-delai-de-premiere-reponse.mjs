import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { file, lecture, STRINGS as SC } from './custom/boitemail.mjs';
export const slug = 'ia-pour-repondre-aux-mails-algerie-2027-agent-ia-tri-des-mails-boite-partagee-demandes-de-devis-brouillons-verifies-delai-de-premiere-reponse';
const T = {
  fr: {
    cover: { eyebrow: 'Agent IA de messagerie · Algérie · 2027', title: ['IA pour répondre aux mails :', 'la boîte contact@ qui ne déborde plus'], subtitle: 'Tri à l’arrivée, lecture avec score de confiance, brouillons vérifiés, envoi par une personne', left: { label: 'À 18 h, avant', sub: '52 mails en attente' }, right: { label: 'Avec l’agent', sub: 'file vide à 16 h' } },
    file: { caption: 'Figure 1 · Une journée de 200 mails. Avant, 148 sont traités à 18 h et 52 attendent ; avec l’agent, 64 sont rangés à l’arrivée et la file des 136 autres est vide à 16 h. Volumes et cadences fictifs.' },
    sortes: { title: 'Sept sortes de mails, et qui fait quoi', columns: ['Ce que fait l’agent', 'Ce que fait une personne'], rows: [
      { label: 'Publicité, notifications, lettres : 64', cells: ['range à l’arrivée, sans réponse', 'relit un échantillon chaque semaine'] },
      { label: 'Demandes de devis : 38', cells: ['extrait produit, quantité, lieu ; prépare le brouillon', 'fixe le prix, relit, envoie'] },
      { label: 'Commandes et suivi de commande : 27', cells: ['retrouve la commande, prépare la réponse sur son état', 'décide de ce qui modifie la commande'] },
      { label: 'Réclamations et SAV : 21', cells: ['ouvre un ticket prioritaire, accuse réception', 'décide et répond'] },
      { label: 'Factures et relevés de fournisseurs : 18', cells: ['transmet à la comptabilité, lit la pièce jointe', 'contrôle et valide'] },
      { label: 'Candidatures : 12', cells: ['transmet aux ressources humaines, avec le CV', 'lit et répond'] },
      { label: 'Autres, non reconnus : 20', cells: ['ne devine pas : transmet à une personne', 'trie, et complète les catégories'] },
    ], caption: 'Figure 2 · Sept sortes de mails pour 200 reçus dans la journée. L’agent range seul les 64 premiers ; pour les 136 autres, il prépare et une personne décide. Volumes fictifs.', alt: 'Matrice de sept sortes de mails avec leur nombre sur 200 : publicité et notifications 64, demandes de devis 38, commandes 27, réclamations 21, factures de fournisseurs 18, candidatures 12, autres 20 ; pour chacune, ce que fait l’agent et ce que fait une personne.' },
    lecture: { caption: 'Figure 3 · Une demande de prix lue par l’agent : cinq éléments extraits avec leur confiance, un seul sous le seuil, et un brouillon sans prix. Mail fictif.' },
    etapes: { title: 'Un mail, en six temps', items: [
      { label: 'Arrivée', sub: 'boîte partagée, fil, pièces jointes' },
      { label: 'Tri', sub: 'type, langue, urgence' },
      { label: 'Lecture', sub: 'éléments extraits, avec leur confiance' },
      { label: 'Routage', sub: 'bonne personne, délai selon le type' },
      { label: 'Brouillon', sub: 'vos modèles, vos données, aucun prix' },
      { label: 'Envoi', sub: 'une personne relit, corrige, envoie', accent: true },
    ], caption: 'Figure 4 · Six temps. Le temps accentué est l’envoi : une personne relit et envoie, et l’outil note ce qu’elle a changé.', alt: 'Six temps : arrivée, tri, lecture, routage, brouillon, envoi (accentué).' },
    calendrier: { title: 'Dix semaines, en commençant par quatre cents anciens mails', unit: 'sem.', items: [
      { label: 'Quatre cents anciens mails', note: 'types réels, langues, réponses déjà données : le jeu d’essai', from: 0, to: 2, accent: true },
      { label: 'Catégories et règles', note: 'sept types, qui reçoit quoi, dans quel délai', from: 1, to: 3 },
      { label: 'Tri et lecture mesurés', note: 'précision et rappel par type et par langue, seuil de confiance', from: 2, to: 6 },
      { label: 'Modèles de réponse', note: 'réponses approuvées, données reliées, ce que l’agent ne dit jamais', from: 4, to: 7 },
      { label: 'Mode fantôme', note: 'l’agent classe et rédige sans rien envoyer ; on compare', from: 6, to: 8 },
      { label: 'Ouverture par type', note: 'rangement et accusés de réception d’abord, puis les brouillons', from: 8, to: 10 },
    ], caption: 'Figure 5 · Dix semaines dans l’exemple. La période accentuée est la première : quatre cents anciens mails donnent les catégories et le jeu d’essai. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix semaines : quatre cents anciens mails (accentué), catégories et règles, tri et lecture mesurés, modèles de réponse, mode fantôme, ouverture par type.' },
    couches: { title: 'Ce qu’il y a dans l’outil, en cinq couches', layers: [
      { label: 'Boîtes', items: [{ name: 'Les boîtes : connexion aux boîtes partagées, fils de discussion, pièces jointes, expéditeurs connus', sub: 'l’outil lit, il ne remplace pas la messagerie' }] },
      { label: 'Lecture', items: [{ name: 'La lecture : classement par type, langue, urgence, éléments extraits, score de confiance', sub: 'sous le seuil, une personne' }] },
      { label: 'Règles', items: [{ name: 'Les règles et les droits : qui reçoit quoi, délais par type, ce que l’agent a le droit de faire', sub: 'il range et rédige ; il n’envoie pas, ne transfère pas, ne supprime pas', accent: true }] },
      { label: 'Réponses', items: [{ name: 'Les réponses : modèles approuvés, base de réponses, données du client et de la commande, brouillon', sub: 'une personne relit et envoie' }] },
      { label: 'Suivi', items: [{ name: 'Le suivi : délai de première réponse, mails sans responsable, erreurs de tri, brouillons modifiés', sub: 'savoir ce qui attend, et pourquoi' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est celle des règles et des droits : l’agent range et rédige, il n’envoie pas, ne transfère pas, ne supprime pas.', alt: 'Cinq couches : les boîtes ; la lecture ; les règles et les droits (accentuées) ; les réponses ; le suivi.' },
  },
  en: {
    cover: { eyebrow: 'AI email agent · Algeria · 2027', title: ['AI to answer emails:', 'the contact@ inbox under control'], subtitle: 'Sorting on arrival, reading with a confidence score, checked drafts, sending by a person', left: { label: 'At 18:00, before', sub: '52 emails waiting' }, right: { label: 'With the agent', sub: 'queue empty at 16:00' } },
    file: { caption: 'Figure 1 · A day of 200 emails. Before, 148 are handled at 18:00 and 52 wait; with the agent, 64 are filed on arrival and the queue of the other 136 is empty at 16:00. Fictitious volumes and rates.' },
    sortes: { title: 'Seven kinds of email, and who does what', columns: ['What the agent does', 'What a person does'], rows: [
      { label: 'Advertising, notifications, newsletters: 64', cells: ['files on arrival, no answer', 'rereads a sample every week'] },
      { label: 'Quote requests: 38', cells: ['extracts product, quantity, place; prepares the draft', 'sets the price, rereads, sends'] },
      { label: 'Orders and order tracking: 27', cells: ['finds the order, prepares the answer on its status', 'decides whatever changes the order'] },
      { label: 'Complaints and after-sales: 21', cells: ['opens a priority ticket, acknowledges receipt', 'decides and answers'] },
      { label: 'Supplier invoices and statements: 18', cells: ['passes to accounting, reads the attachment', 'checks and approves'] },
      { label: 'Job applications: 12', cells: ['passes to human resources, with the CV', 'reads and answers'] },
      { label: 'Other, not recognised: 20', cells: ['does not guess: passes to a person', 'sorts, and completes the categories'] },
    ], caption: 'Figure 2 · Seven kinds of email for 200 received in the day. The agent files the first 64 alone; for the other 136, it prepares and a person decides. Fictitious volumes.', alt: 'Matrix of seven kinds of email with their number out of 200: advertising and notifications 64, quote requests 38, orders 27, complaints 21, supplier invoices 18, job applications 12, other 20; for each, what the agent does and what a person does.' },
    lecture: { caption: 'Figure 3 · A price request read by the agent: five items extracted with their confidence, only one under the threshold, and a draft with no price. Fictitious email.' },
    etapes: { title: 'An email, in six steps', items: [
      { label: 'Arrival', sub: 'shared mailbox, thread, attachments' },
      { label: 'Sorting', sub: 'type, language, urgency' },
      { label: 'Reading', sub: 'items extracted, with their confidence' },
      { label: 'Routing', sub: 'right person, deadline by type' },
      { label: 'Draft', sub: 'your templates, your data, no price' },
      { label: 'Sending', sub: 'a person rereads, corrects, sends', accent: true },
    ], caption: 'Figure 4 · Six steps. The accented step is the sending: a person rereads and sends, and the tool records what they changed.', alt: 'Six steps: arrival, sorting, reading, routing, draft, sending (accented).' },
    calendrier: { title: 'Ten weeks, starting from four hundred past emails', unit: 'wk', items: [
      { label: 'Four hundred past emails', note: 'real types, languages, answers already given: the test set', from: 0, to: 2, accent: true },
      { label: 'Categories and rules', note: 'seven types, who receives what, within what deadline', from: 1, to: 3 },
      { label: 'Sorting and reading measured', note: 'precision and recall per type and per language, confidence threshold', from: 2, to: 6 },
      { label: 'Reply templates', note: 'approved answers, connected data, what the agent never says', from: 4, to: 7 },
      { label: 'Shadow mode', note: 'the agent sorts and drafts without sending anything; we compare', from: 6, to: 8 },
      { label: 'Opening type by type', note: 'filing and acknowledgements first, then the drafts', from: 8, to: 10 },
    ], caption: 'Figure 5 · Ten weeks in the example. The accented period is the first: four hundred past emails give the categories and the test set. Indicative durations of a constructed example.', alt: 'Ten-week calendar: four hundred past emails (accented), categories and rules, sorting and reading measured, reply templates, shadow mode, opening type by type.' },
    couches: { title: 'What is inside the tool, in five layers', layers: [
      { label: 'Mailboxes', items: [{ name: 'The mailboxes: connection to shared mailboxes, threads, attachments, known senders', sub: 'the tool reads, it does not replace your mail system' }] },
      { label: 'Reading', items: [{ name: 'Reading: sorting by type, language, urgency, items extracted, confidence score', sub: 'under the threshold, a person' }] },
      { label: 'Rules', items: [{ name: 'Rules and rights: who receives what, deadlines by type, what the agent is allowed to do', sub: 'it files and drafts; it does not send, forward or delete', accent: true }] },
      { label: 'Replies', items: [{ name: 'Replies: approved templates, answer base, customer and order data, draft', sub: 'a person rereads and sends' }] },
      { label: 'Follow-up', items: [{ name: 'Follow-up: time to first reply, emails with nobody in charge, sorting errors, edited drafts', sub: 'knowing what waits, and why' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is rules and rights: the agent files and drafts, it does not send, forward or delete.', alt: 'Five layers: the mailboxes; reading; rules and rights (accented); replies; follow-up.' },
  },
  ar: {
    cover: { eyebrow: 'العون الذكي للبريد · الجزائر · 2027', title: ['الذكاء الاصطناعي للرد على الرسائل:', 'العلبة المشتركة التي لا تفيض'], subtitle: 'الفرز عند الوصول، القراءة بدرجة ثقة، مسودات مُراجَعة، وإرسال من شخص', left: { label: 'في الساعة 18، قبل', sub: '52 رسالة في الانتظار' }, right: { label: 'مع العون', sub: 'الطابور فارغ في الساعة 16' } },
    file: { caption: 'الشكل 1 · يوم من 200 رسالة. قبل، عولجت 148 في الساعة 18 و52 تنتظر؛ مع العون، 64 تُرتَّب عند الوصول وطابور الـ136 الأخرى فارغ في الساعة 16. أحجام ووتائر خيالية.' },
    sortes: { title: 'سبعة أنواع من الرسائل، ومن يفعل ماذا', columns: ['ما يفعله العون', 'ما يفعله شخص'], rows: [
      { label: 'إشهار، إشعارات، ونشرات: 64', cells: ['يرتّبها عند الوصول، دون رد', 'يراجع عيّنة كل أسبوع'] },
      { label: 'طلبات عروض الأسعار: 38', cells: ['يستخرج المنتوج، الكمية، والمكان؛ ويحضّر المسودة', 'يحدّد السعر، يراجع، ويرسل'] },
      { label: 'الطلبيات ومتابعتها: 27', cells: ['يجد الطلبية، ويحضّر الجواب عن حالتها', 'يقرّر كل ما يغيّر الطلبية'] },
      { label: 'الشكاوى وما بعد البيع: 21', cells: ['يفتح تذكرة ذات أولوية، ويُشعر بالاستلام', 'يقرّر ويجيب'] },
      { label: 'فواتير الموردين وكشوفهم: 18', cells: ['يحوّلها إلى المحاسبة، ويقرأ المرفق', 'يراقب ويصادق'] },
      { label: 'الترشحات: 12', cells: ['يحوّلها إلى الموارد البشرية، مع السيرة', 'يقرأ ويجيب'] },
      { label: 'أخرى، غير معروفة: 20', cells: ['لا يخمّن: يحوّلها إلى شخص', 'يفرز، ويكمل الأصناف'] },
    ], caption: 'الشكل 2 · سبعة أنواع من الرسائل لـ200 واصلة في اليوم. العون يرتّب وحده الـ64 الأولى؛ وللـ136 الأخرى، يحضّر وشخص يقرّر. أحجام خيالية.', alt: 'مصفوفة من سبعة أنواع من الرسائل مع عددها من 200: إشهار وإشعارات 64، طلبات عروض الأسعار 38، طلبيات 27، شكاوى 21، فواتير موردين 18، ترشحات 12، وأخرى 20؛ ولكل نوع ما يفعله العون وما يفعله شخص.' },
    lecture: { caption: 'الشكل 3 · طلب سعر يقرؤه العون: خمسة عناصر مستخرَجة مع درجة ثقتها، واحد فقط تحت العتبة، ومسودة دون سعر. رسالة خيالية.' },
    etapes: { title: 'رسالة، في ست مراحل', items: [
      { label: 'الوصول', sub: 'علبة مشتركة، سلسلة، ومرفقات' },
      { label: 'الفرز', sub: 'النوع، اللغة، والاستعجال' },
      { label: 'القراءة', sub: 'عناصر مستخرَجة، مع درجة ثقتها' },
      { label: 'التوجيه', sub: 'الشخص المناسب، وأجل حسب النوع' },
      { label: 'المسودة', sub: 'قوالبكم، بياناتكم، ودون سعر' },
      { label: 'الإرسال', sub: 'شخص يراجع، يصحّح، ويرسل', accent: true },
    ], caption: 'الشكل 4 · ست مراحل. المرحلة المبرزة هي الإرسال: شخص يراجع ويرسل، والأداة تسجّل ما غيّره.', alt: 'ست مراحل: الوصول، الفرز، القراءة، التوجيه، المسودة، والإرسال (مبرز).' },
    calendrier: { title: 'عشرة أسابيع، بدءاً بأربعمئة رسالة قديمة', unit: 'أسبوع', items: [
      { label: 'أربعمئة رسالة قديمة', note: 'الأنواع الحقيقية، اللغات، والأجوبة المعطاة من قبل: مجموعة التجارب', from: 0, to: 2, accent: true },
      { label: 'الأصناف والقواعد', note: 'سبعة أنواع، من يستلم ماذا، وفي أي أجل', from: 1, to: 3 },
      { label: 'قياس الفرز والقراءة', note: 'الدقة والاستدعاء لكل نوع ولكل لغة، وعتبة الثقة', from: 2, to: 6 },
      { label: 'قوالب الأجوبة', note: 'أجوبة مصادَق عليها، بيانات مربوطة، وما لا يقوله العون أبداً', from: 4, to: 7 },
      { label: 'وضع الظل', note: 'العون يفرز ويحرّر دون أن يرسل شيئاً؛ ونقارن', from: 6, to: 8 },
      { label: 'الفتح نوعاً بنوع', note: 'الترتيب وإشعارات الاستلام أولاً، ثم المسودات', from: 8, to: 10 },
    ], caption: 'الشكل 5 · عشرة أسابيع في المثال. الفترة المبرزة هي الأولى: أربعمئة رسالة قديمة تعطي الأصناف ومجموعة التجارب. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من عشرة أسابيع: أربعمئة رسالة قديمة (مبرزة)، الأصناف والقواعد، قياس الفرز والقراءة، قوالب الأجوبة، وضع الظل، والفتح نوعاً بنوع.' },
    couches: { title: 'ما يوجد في الأداة، في خمس طبقات', layers: [
      { label: 'العلب', items: [{ name: 'العلب: الربط بالعلب المشتركة، سلاسل المراسلات، المرفقات، والمرسلون المعروفون', sub: 'الأداة تقرأ، ولا تعوّض نظام البريد' }] },
      { label: 'القراءة', items: [{ name: 'القراءة: الفرز حسب النوع، اللغة، الاستعجال، العناصر المستخرَجة، ودرجة الثقة', sub: 'تحت العتبة، شخص' }] },
      { label: 'القواعد', items: [{ name: 'القواعد والصلاحيات: من يستلم ماذا، الآجال حسب النوع، وما يحق للعون فعله', sub: 'يرتّب ويحرّر؛ ولا يرسل، لا يحوّل، ولا يحذف', accent: true }] },
      { label: 'الأجوبة', items: [{ name: 'الأجوبة: قوالب مصادَق عليها، قاعدة أجوبة، بيانات الزبون والطلبية، والمسودة', sub: 'شخص يراجع ويرسل' }] },
      { label: 'المتابعة', items: [{ name: 'المتابعة: أجل أول رد، الرسائل دون مسؤول، أخطاء الفرز، والمسودات المعدَّلة', sub: 'معرفة ما ينتظر، ولماذا' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي القواعد والصلاحيات: العون يرتّب ويحرّر، ولا يرسل، لا يحوّل، ولا يحذف.', alt: 'خمس طبقات: العلب؛ القراءة؛ القواعد والصلاحيات (مبرزة)؛ الأجوبة؛ والمتابعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      file: { svg: file(e.file, rtl), caption: t.file.caption, alt: e.file.alt },
      sortes: { svg: matrix({ title: t.sortes.title, columns: t.sortes.columns, rows: t.sortes.rows, rtl }), caption: t.sortes.caption, alt: t.sortes.alt },
      lecture: { svg: lecture(e.lecture, rtl), caption: t.lecture.caption, alt: e.lecture.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
