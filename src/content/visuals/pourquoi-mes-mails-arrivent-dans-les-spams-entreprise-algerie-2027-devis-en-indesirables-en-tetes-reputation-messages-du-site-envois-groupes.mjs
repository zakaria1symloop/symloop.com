import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { entetes, flux, STRINGS as SC } from './custom/delivrabilite.mjs';
export const slug = 'pourquoi-mes-mails-arrivent-dans-les-spams-entreprise-algerie-2027-devis-en-indesirables-en-tetes-reputation-messages-du-site-envois-groupes';
const T = {
  fr: {
    cover: { eyebrow: 'Messagerie · Algérie · 2027', title: ['Pourquoi mes mails arrivent en spam', 'et comment en sortir'], subtitle: 'Lire les en-têtes, trouver qui envoie vraiment, réparer les preuves, séparer les flux, la réputation', left: { label: 'Devis en indésirables', sub: 'le client ne le voit jamais' }, right: { label: 'Boîte de réception', sub: 'trois preuves, une réputation' } },
    etapes: { title: 'Sortir des indésirables : diagnostiquer en six temps', items: [
      { label: 'Récupérer', sub: 'un message arrivé en spam, entier', accent: true },
      { label: 'Lire', sub: 'ses en-têtes : qui a envoyé' },
      { label: 'Vérifier', sub: 'les trois preuves : pass ou fail' },
      { label: 'Chercher', sub: 'l’adresse sur les listes de blocage' },
      { label: 'Compter', sub: 'volumes, rebonds, plaintes' },
      { label: 'Séparer', sub: 'personnes, site, envois groupés' },
    ], caption: 'Figure 1 · Le temps accentué est le premier : récupérer un message arrivé en indésirables, entier, avec ses en-têtes. Sans cette pièce, on corrige au jugé. Les quatre temps suivants se lisent dedans ; le dernier est la réparation.', alt: 'Six temps : récupérer (accentué), lire, vérifier, chercher, compter, séparer.' },
    entetes: { caption: 'Figure 2 · Deux messages reçus le même jour par le même client, avec la même adresse d’expéditeur. Le devis part de la messagerie : les trois preuves réussissent. La confirmation part du serveur du site, que le domaine n’a jamais déclaré : elles échouent. Exemple construit, noms fictifs.' },
    causes: { title: 'Six causes, leur signe, et ce qu’on fait', columns: ['Le signe', 'Ce qu’on fait'], rows: [
      { label: 'Une preuve échoue', cells: ['spf, dkim ou dmarc à fail dans l’en-tête', 'déclarer le serveur, signer, puis vérifier'] },
      { label: 'Le site envoie tout seul', cells: ['Received cite le serveur de l’hébergeur', 'faire passer le site par un service d’envoi'] },
      { label: 'Une adresse partagée et bloquée', cells: ['l’adresse du serveur figure sur une liste', 'changer de chemin d’envoi, demander le retrait'] },
      { label: 'Des envois groupés depuis la boîte', cells: ['300 destinataires en copie cachée', 'un outil d’envoi groupé, une autre adresse'] },
      { label: 'Des plaintes, des adresses mortes', cells: ['rebonds, aucun moyen de se désinscrire', 'nettoyer la liste, un lien de désinscription'] },
      { label: 'Un message qui ressemble à du spam', cells: ['lien raccourci, pièce lourde, objet criard', 'un texte simple, un lien vers le document'] },
    ], caption: 'Figure 3 · Six causes, dans l’ordre où on les vérifie. Les trois premières se lisent dans les en-têtes d’un seul message ; les trois suivantes se lisent dans la façon dont l’entreprise envoie. Le plus souvent, deux causes se cumulent.', alt: 'Matrice de six causes : une preuve échoue, le site envoie tout seul, une adresse partagée et bloquée, des envois groupés depuis la boîte, des plaintes et des adresses mortes, un message qui ressemble à du spam ; pour chacune, le signe et ce qu’on fait.' },
    couches: { title: 'Ce que regarde le serveur du destinataire, en cinq couches', layers: [
      { label: 'Connexion', items: [{ name: 'La connexion : l’adresse du serveur qui envoie, et un nom qui se vérifie dans les deux sens', sub: 'avant même de lire le message' }] },
      { label: 'Preuves', items: [{ name: 'Les preuves : SPF, DKIM, DMARC, et qu’elles portent bien sur le domaine affiché', sub: 'pass ou fail, écrit dans l’en-tête' }] },
      { label: 'Réputation', items: [{ name: 'La réputation : ce que ce domaine et cette adresse ont envoyé avant, et ce qu’on en a fait', sub: 'la couche qu’aucun réglage ne remplace', accent: true }] },
      { label: 'Contenu', items: [{ name: 'Le contenu : liens, pièces jointes, mise en forme, cohérence entre l’objet et le texte', sub: 'ce qui ressemble aux messages déjà signalés' }] },
      { label: 'Réactions', items: [{ name: 'Les réactions : signalé comme indésirable, ou sorti des indésirables par le destinataire', sub: 'chaque signalement compte' }] },
    ], caption: 'Figure 4 · La couche accentuée est la réputation. Les preuves se règlent en quelques jours ; la réputation se construit sur ce que les destinataires font de vos messages, et se regagne en semaines.', alt: 'Cinq couches : la connexion ; les preuves ; la réputation (accentuée) ; le contenu ; les réactions.' },
    flux: { caption: 'Figure 5 · Avant, les devis, les messages du site et la lettre d’information partent du même endroit et partagent une réputation. Après, chaque usage a son chemin, son adresse et sa réputation : les plaintes contre la lettre ne touchent plus les devis. Exemple construit.' },
    calendrier: { title: 'Quatre semaines pour sortir des indésirables', unit: 'sem.', items: [
      { label: 'Diagnostiquer', note: 'trois messages récupérés, en-têtes lus, expéditeurs listés, listes de blocage consultées', from: 0, to: 1, accent: true },
      { label: 'Réparer les preuves', note: 'chaque expéditeur déclaré et signé, le site branché sur un service d’envoi', from: 1, to: 2 },
      { label: 'Séparer les flux', note: 'une adresse et un chemin pour le site, d’autres pour les envois groupés', from: 1, to: 3 },
      { label: 'Nettoyer les listes', note: 'adresses mortes retirées, lien de désinscription, plus aucun envoi en copie cachée', from: 2, to: 3 },
      { label: 'Monter en volume', note: 'reprise des envois groupés par petits lots, d’abord vers ceux qui répondent', from: 2, to: 4 },
      { label: 'Mesurer', note: 'plaintes, rebonds, messages d’essai relus : les preuves réussissent, boîte de réception', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple. La période accentuée est la première : le diagnostic, sur pièces. Les preuves se réparent vite ; la montée en volume des envois groupés prend le reste du temps. Durées indicatives d’un exemple construit.', alt: 'Calendrier de quatre semaines : diagnostiquer (accentué), réparer les preuves, séparer les flux, nettoyer les listes, monter en volume, mesurer.' },
  },
  en: {
    cover: { eyebrow: 'Business email · Algeria · 2027', title: ['Why my emails go to spam', 'and how to get out'], subtitle: 'Read the headers, find who really sends, repair the proofs, separate the streams, keep your reputation', left: { label: 'Quote in junk', sub: 'the customer never sees it' }, right: { label: 'Inbox', sub: 'three proofs, one reputation' } },
    etapes: { title: 'Getting out of junk: diagnosing in six steps', items: [
      { label: 'Recover', sub: 'a message that went to spam, whole', accent: true },
      { label: 'Read', sub: 'its headers: who sent it' },
      { label: 'Check', sub: 'the three proofs: pass or fail' },
      { label: 'Look up', sub: 'the address on blocklists' },
      { label: 'Count', sub: 'volumes, bounces, complaints' },
      { label: 'Separate', sub: 'people, website, bulk mail' },
    ], caption: 'Figure 1 · The accented step is the first: recover a message that landed in junk, whole, with its headers. Without it, fixes are guesses. The next four steps are read from it; the last is the repair.', alt: 'Six steps: recover (accented), read, check, look up, count, separate.' },
    entetes: { caption: 'Figure 2 · Two messages received the same day by the same customer, with the same sender address. The quote leaves from the mail service: the three proofs pass. The confirmation leaves from the website’s server, which the domain never declared: they fail. Constructed example, fictitious names.' },
    causes: { title: 'Six causes, their sign, and what is done', columns: ['The sign', 'What is done'], rows: [
      { label: 'A proof fails', cells: ['spf, dkim or dmarc at fail in the header', 'declare the server, sign, then check'] },
      { label: 'The website sends by itself', cells: ['Received names the host’s server', 'send the site’s mail through a sending service'] },
      { label: 'A shared, blocked address', cells: ['the server’s address is on a list', 'change the sending path, ask for removal'] },
      { label: 'Bulk mail from the mailbox', cells: ['300 recipients in blind copy', 'a bulk sending tool, another address'] },
      { label: 'Complaints, dead addresses', cells: ['bounces, no way to unsubscribe', 'clean the list, an unsubscribe link'] },
      { label: 'A message that looks like spam', cells: ['shortened link, heavy file, loud subject', 'plain text, a link to the document'] },
    ], caption: 'Figure 3 · Six causes, in the order they are checked. The first three are read in the headers of a single message; the next three are read in the way the company sends. Most often, two causes add up.', alt: 'Matrix of six causes: a proof fails, the website sends by itself, a shared and blocked address, bulk mail from the mailbox, complaints and dead addresses, a message that looks like spam; for each, the sign and what is done.' },
    couches: { title: 'What the recipient’s server looks at, in five layers', layers: [
      { label: 'Connection', items: [{ name: 'The connection: the address of the sending server, and a name that checks out both ways', sub: 'before the message is even read' }] },
      { label: 'Proofs', items: [{ name: 'The proofs: SPF, DKIM, DMARC, and that they do apply to the domain shown', sub: 'pass or fail, written in the header' }] },
      { label: 'Reputation', items: [{ name: 'Reputation: what this domain and this address sent before, and what was done with it', sub: 'the layer no setting replaces', accent: true }] },
      { label: 'Content', items: [{ name: 'Content: links, attachments, formatting, consistency between subject and text', sub: 'what looks like messages already reported' }] },
      { label: 'Reactions', items: [{ name: 'Reactions: reported as junk, or taken out of junk by the recipient', sub: 'every report counts' }] },
    ], caption: 'Figure 4 · The accented layer is reputation. Proofs are set up in a few days; reputation is built on what recipients do with your messages, and is won back over weeks.', alt: 'Five layers: the connection; the proofs; reputation (accented); content; reactions.' },
    flux: { caption: 'Figure 5 · Before, quotes, the website’s messages and the newsletter leave from the same place and share one reputation. After, each use has its path, its address and its reputation: complaints about the newsletter no longer touch the quotes. Constructed example.' },
    calendrier: { title: 'Four weeks to get out of junk', unit: 'wk', items: [
      { label: 'Diagnose', note: 'three messages recovered, headers read, senders listed, blocklists consulted', from: 0, to: 1, accent: true },
      { label: 'Repair the proofs', note: 'each sender declared and signed, the website connected to a sending service', from: 1, to: 2 },
      { label: 'Separate the streams', note: 'one address and one path for the website, others for bulk mail', from: 1, to: 3 },
      { label: 'Clean the lists', note: 'dead addresses removed, an unsubscribe link, no more mailings in blind copy', from: 2, to: 3 },
      { label: 'Raise the volume', note: 'bulk mail resumed in small batches, first to those who reply', from: 2, to: 4 },
      { label: 'Measure', note: 'complaints, bounces, test messages re-read: the proofs pass, inbox', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example. The accented period is the first: the diagnosis, on evidence. Proofs are repaired quickly; raising the volume of bulk mail takes the rest of the time. Indicative durations of a constructed example.', alt: 'Four-week calendar: diagnose (accented), repair the proofs, separate the streams, clean the lists, raise the volume, measure.' },
  },
  ar: {
    cover: { eyebrow: 'بريد المؤسسة · الجزائر · 2027', title: ['لماذا تصل رسائلي إلى السبام', 'وكيف نخرج منه'], subtitle: 'قراءة رأس الرسالة، معرفة من يرسل فعلاً، إصلاح الإثباتات، فصل التدفقات، وحفظ السمعة', left: { label: 'عرض سعر في السبام', sub: 'الزبون لا يراه أبداً' }, right: { label: 'صندوق الوارد', sub: 'ثلاثة إثباتات، وسمعة' } },
    etapes: { title: 'الخروج من البريد غير المرغوب فيه: التشخيص في ست مراحل', items: [
      { label: 'الاسترجاع', sub: 'رسالة وصلت إلى السبام، كاملة', accent: true },
      { label: 'القراءة', sub: 'رأسها: من أرسلها' },
      { label: 'المراجعة', sub: 'الإثباتات الثلاثة: نجاح أم فشل' },
      { label: 'البحث', sub: 'العنوان في قوائم الحظر' },
      { label: 'العدّ', sub: 'الأحجام، الارتدادات، والشكاوى' },
      { label: 'الفصل', sub: 'الأشخاص، الموقع، والإرسال الجماعي' },
    ], caption: 'الشكل 1 · المرحلة المبرزة هي الأولى: استرجاع رسالة وصلت إلى البريد غير المرغوب فيه، كاملة، برأسها. ودونها، يكون التصحيح تخميناً. والمراحل الأربع الموالية تُقرأ فيها؛ والأخيرة هي الإصلاح.', alt: 'ست مراحل: الاسترجاع (مبرزة)، القراءة، المراجعة، البحث، العدّ، والفصل.' },
    entetes: { caption: 'الشكل 2 · رسالتان استلمهما الزبون نفسه في اليوم نفسه، بعنوان المرسِل نفسه. عرض السعر يخرج من خدمة البريد: الإثباتات الثلاثة تنجح. والتأكيد يخرج من خادم الموقع، الذي لم يصرّح به النطاق أبداً: فتفشل. مثال مركَّب، وأسماء خيالية.' },
    causes: { title: 'ستة أسباب، علامتها، وما يُفعل', columns: ['العلامة', 'ما يُفعل'], rows: [
      { label: 'إثبات يفشل', cells: ['كلمة الفشل أمام أحد الإثباتات في الرأس', 'التصريح بالخادم، التوقيع، ثم المراجعة'] },
      { label: 'الموقع يرسل وحده', cells: ['الرأس يذكر خادم المستضيف', 'إرسال رسائل الموقع عبر خدمة إرسال'] },
      { label: 'عنوان مشترك ومحظور', cells: ['عنوان الخادم موجود في قائمة', 'تغيير مسار الإرسال، وطلب الحذف'] },
      { label: 'إرسال جماعي من الصندوق', cells: ['300 مستلِم في نسخة مخفية', 'أداة إرسال جماعي، وعنوان آخر'] },
      { label: 'شكاوى وعناوين ميتة', cells: ['ارتدادات، ولا وسيلة لإلغاء الاشتراك', 'تنظيف القائمة، ورابط لإلغاء الاشتراك'] },
      { label: 'رسالة تشبه السبام', cells: ['رابط مختصر، مرفق ثقيل، وعنوان صارخ', 'نص بسيط، ورابط نحو الوثيقة'] },
    ], caption: 'الشكل 3 · ستة أسباب، بالترتيب الذي تُراجَع به. الثلاثة الأولى تُقرأ في رأس رسالة واحدة؛ والثلاثة الموالية تُقرأ في طريقة إرسال المؤسسة. وغالباً، يجتمع سببان.', alt: 'مصفوفة من ستة أسباب: إثبات يفشل، الموقع يرسل وحده، عنوان مشترك ومحظور، إرسال جماعي من الصندوق، شكاوى وعناوين ميتة، ورسالة تشبه السبام؛ ولكل واحد، العلامة وما يُفعل.' },
    couches: { title: 'ما ينظر فيه خادم المستلِم، في خمس طبقات', layers: [
      { label: 'الاتصال', items: [{ name: 'الاتصال: عنوان الخادم المرسِل، واسم يُتحقَّق منه في الاتجاهين', sub: 'قبل قراءة الرسالة أصلاً' }] },
      { label: 'الإثباتات', items: [{ name: 'الإثباتات الثلاثة، وأنها تخص فعلاً النطاق الظاهر في العنوان', sub: 'نجاح أو فشل، مكتوب في الرأس' }] },
      { label: 'السمعة', items: [{ name: 'السمعة: ما أرسله هذا النطاق وهذا العنوان من قبل، وما فُعل به', sub: 'الطبقة التي لا يعوّضها أي ضبط', accent: true }] },
      { label: 'المحتوى', items: [{ name: 'المحتوى: الروابط، المرفقات، الشكل، وتوافق العنوان مع النص', sub: 'ما يشبه رسائل سبق التبليغ عنها' }] },
      { label: 'ردود الفعل', items: [{ name: 'ردود الفعل: تبليغ عن الرسالة، أو إخراجها من البريد غير المرغوب فيه', sub: 'كل تبليغ يُحسب' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي السمعة. الإثباتات تُضبط في بضعة أيام؛ والسمعة تُبنى على ما يفعله المستلِمون برسائلكم، وتُسترجَع في أسابيع.', alt: 'خمس طبقات: الاتصال؛ الإثباتات؛ السمعة (مبرزة)؛ المحتوى؛ وردود الفعل.' },
    flux: { caption: 'الشكل 5 · قبل، عروض الأسعار ورسائل الموقع والنشرة تخرج من المكان نفسه وتتقاسم سمعة واحدة. وبعد، لكل استعمال مساره وعنوانه وسمعته: الشكاوى ضد النشرة لم تعد تمسّ عروض الأسعار. مثال مركَّب.' },
    calendrier: { title: 'أربعة أسابيع للخروج من البريد غير المرغوب فيه', unit: 'أسبوع', items: [
      { label: 'التشخيص', note: 'ثلاث رسائل مسترجَعة، الرؤوس مقروءة، المرسِلون مجرودون، وقوائم الحظر مراجَعة', from: 0, to: 1, accent: true },
      { label: 'إصلاح الإثباتات', note: 'كل مرسِل مصرَّح به وموقَّع، والموقع مربوط بخدمة إرسال', from: 1, to: 2 },
      { label: 'فصل التدفقات', note: 'عنوان ومسار للموقع، وآخران للإرسال الجماعي', from: 1, to: 3 },
      { label: 'تنظيف القوائم', note: 'العناوين الميتة محذوفة، رابط لإلغاء الاشتراك، ولا إرسال في نسخة مخفية بعد الآن', from: 2, to: 3 },
      { label: 'رفع الحجم', note: 'استئناف الإرسال الجماعي على دفعات صغيرة، أولاً نحو من يجيبون', from: 2, to: 4 },
      { label: 'القياس', note: 'الشكاوى، الارتدادات، ورسائل تجريبية تُعاد قراءتها: الإثباتات تنجح، وصندوق الوارد', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال. الفترة المبرزة هي الأولى: التشخيص، على وثائق. الإثباتات تُصلَح بسرعة؛ ورفع حجم الإرسال الجماعي يأخذ باقي الوقت. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من أربعة أسابيع: التشخيص (مبرزة)، إصلاح الإثباتات، فصل التدفقات، تنظيف القوائم، رفع الحجم، والقياس.' },
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
      entetes: { svg: entetes(e.entetes, rtl), caption: t.entetes.caption, alt: e.entetes.alt },
      causes: { svg: matrix({ title: t.causes.title, columns: t.causes.columns, rows: t.causes.rows, rtl }), caption: t.causes.caption, alt: t.causes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      flux: { svg: flux(e.flux, rtl), caption: t.flux.caption, alt: e.flux.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
