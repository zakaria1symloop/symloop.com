import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { controle, adresses, STRINGS as SC } from './custom/messagerie.mjs';
export const slug = 'messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365';
const I = (x) => `⁦${x}⁩`;
const T = {
  fr: {
    cover: { eyebrow: 'Messagerie professionnelle · Algérie · 2027', title: ['Messagerie professionnelle', 'en Algérie : domaine, boîtes, preuves'], subtitle: 'Nom de domaine au nom de l’entreprise, une boîte par personne, SPF, DKIM, DMARC, départs préparés', left: { label: 'Gmail et indésirables', sub: 'un employé part avec sa boîte' }, right: { label: 'Une adresse à votre nom', sub: 'vérifiée par le serveur du client' } },
    controle: { caption: 'Figure 1 · Le même commercial envoie la même offre de prix depuis quatre situations. Depuis une adresse gratuite, le message arrive, mais rien ne le relie à l’entreprise. Depuis le domaine de l’entreprise sans réglages, les trois contrôles échouent : le message finit souvent en indésirables, et un fraudeur peut écrire sous le même nom. Avec SPF, DKIM et DMARC publiés, le serveur du client sait que le message vient de vous ; et celui du fraudeur, qui échoue aux deux premiers, est rejeté par la consigne du troisième. Adresses et noms sont fictifs ; le classement final dépend aussi du contenu et du destinataire.' },
    couches: { title: 'Une messagerie professionnelle, en cinq couches', layers: [
      { label: 'Domaine', items: [{ name: 'Le nom de domaine enregistré au nom de l’entreprise, avec ses accès chez le gérant, renouvelé à date fixe', sub: 'celui qui tient le domaine tient toutes les adresses' }] },
      { label: 'Boîtes et adresses', items: [{ name: 'Une boîte par personne, des boîtes partagées par service, des listes et des alias, sur un service hébergé', sub: 'le plan d’adresses s’écrit avant de créer le premier compte' }] },
      { label: 'Preuves d’envoi', items: [{ name: 'SPF, DKIM et DMARC publiés dans le domaine ; DMARC en observation, puis mise de côté, puis rejet', sub: 'le serveur du destinataire vérifie que le message vient de vous et refuse le faux', accent: true }] },
      { label: 'Comptes', items: [{ name: 'Double vérification à la connexion, aucun mot de passe partagé, administration réservée à deux comptes nommés', sub: 'un mot de passe volé ne suffit plus à entrer' }] },
      { label: 'Continuité', items: [{ name: 'Sauvegarde des boîtes, départ d’un employé préparé, anciennes boîtes reprises, signatures communes', sub: 'la boîte et son historique restent à l’entreprise' }] },
    ], caption: 'Figure 2 · La couche accentuée est celle des preuves d’envoi : trois enregistrements qui décident si vos messages arrivent et si quelqu’un peut écrire à votre place. Le domaine, au-dessus, les rend possibles, puisqu’ils s’y publient ; les comptes et la continuité, en dessous, protègent ce que l’entreprise utilise tous les jours.', alt: 'Cinq couches : domaine ; boîtes et adresses ; preuves d’envoi (accentuée) ; comptes ; continuité.' },
    situations: { title: 'Six situations réelles, et ce que la messagerie doit faire', columns: ['Ce qui se passe', 'Ce que la messagerie doit faire'], rows: [
      { label: 'Nos mails arrivent en indésirables', cells: ['Le domaine ne publie ni SPF, ni DKIM, ni DMARC', 'trois enregistrements publiés, envois groupés séparés, rapports DMARC lus'] },
      { label: 'On écrit aux clients depuis Gmail', cells: ['Chacun a ouvert sa propre adresse', 'une boîte par personne au nom de l’entreprise, anciens messages repris'] },
      { label: 'Un employé part avec sa boîte', cells: ['L’adresse était personnelle, le mot de passe aussi', 'compte bloqué le jour même, boîte transférée au service, réponse automatique'] },
      { label: 'Plus personne n’a le mot de passe de contact@', cells: ['Une boîte commune, un mot de passe qui circule', 'boîte partagée ouverte avec le compte de chacun, accès retiré sans rien changer'] },
      { label: 'Une fausse facture part en notre nom', cells: ['N’importe qui peut imiter l’adresse', 'DMARC en rejet, et tout changement de compte bancaire confirmé par téléphone'] },
      { label: 'Le domaine est au nom de l’ancien prestataire', cells: ['Personne ne sait qui le renouvelle', 'domaine repris au nom de l’entreprise, accès chez le gérant, échéance au calendrier'] },
    ], caption: 'Figure 3 · Les trois premières lignes se règlent par les enregistrements du domaine, des boîtes au nom de l’entreprise et une procédure de départ ; les trois suivantes par des boîtes partagées sans mot de passe commun, DMARC en rejet et un domaine au nom de l’entreprise. Aucune ne se règle par « une adresse plus sérieuse » créée à la hâte.', alt: 'Matrice de six situations : mails en indésirables, envois depuis Gmail, employé qui part avec sa boîte, mot de passe de contact@ perdu, fausse facture au nom de l’entreprise, domaine au nom d’un prestataire ; ce qui se passe et ce que la messagerie doit faire.' },
    adresses: { caption: 'Figure 4 · Le plan d’adresses d’une entreprise de trente personnes : trente boîtes nominatives, cinq boîtes partagées lues par un service, quatre listes et alias. À côté, les quatre enregistrements que le domaine publie, tels qu’ils s’écrivent : MX dit où livrer, SPF qui a le droit d’envoyer, DKIM porte la signature, DMARC dit quoi faire d’un échec et où envoyer les rapports. DMARC passe par trois temps : observer, mettre de côté, rejeter. Noms, effectifs et valeurs sont un exemple construit.' },
    calendrier: { title: 'Une messagerie professionnelle en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Inventaire et domaine', note: 'adresses existantes, qui détient le domaine et ses accès, plan d’adresses, choix du service ; sans rien couper', from: 0, to: 1 },
      { label: 'Comptes et copie', note: 'création des boîtes, double vérification, copie des anciens messages, SPF et DKIM publiés, DMARC en observation', from: 1, to: 2, accent: true },
      { label: 'Bascule et suivi', note: 'MX basculé un soir, téléphones et postes configurés, anciennes adresses redirigées, rapports DMARC lus', from: 2, to: 3 },
    ], caption: 'Figure 5 · Trois semaines dans l’exemple pour la bascule, la première sans rien couper : l’inventaire des adresses, le domaine et le plan sont des décisions. La semaine accentuée est celle des comptes et de la copie des anciens messages, parce que personne ne doit perdre un échange en cours. Le passage de DMARC en rejet vient après, quand quelques semaines de rapports ont montré que tous les envois légitimes passent.', alt: 'Calendrier de trois semaines : inventaire et domaine, comptes et copie (accentué), bascule et suivi.' },
    etapes: { title: 'Le départ d’un employé, en six gestes', items: [
      { label: 'Bloquer le compte', sub: 'le jour même, sessions fermées sur ses appareils' },
      { label: 'Changer les accès', sub: 'mots de passe des outils qu’il utilisait' },
      { label: 'Transférer la boîte', sub: 'à son responsable, en boîte partagée', accent: true },
      { label: 'Répondre à sa place', sub: 'message automatique et nouveau contact' },
      { label: 'Rediriger l’adresse', sub: 'vers le service pendant quelques mois' },
      { label: 'Libérer le compte', sub: 'archive gardée, compte réattribué' },
    ], caption: 'Figure 6 · Le geste accentué est le transfert : la boîte de celui qui part devient une boîte partagée que son responsable ouvre avec son propre compte, de sorte que les échanges en cours avec les clients continuent. Avant, on bloque et on change les accès le jour même ; après, une réponse automatique donne le nouveau contact, l’adresse est redirigée quelques mois, puis le compte est libéré. Les durées sont celles que l’entreprise écrit.', alt: 'Six gestes au départ d’un employé : bloquer le compte, changer les accès, transférer la boîte (accentué), répondre à sa place, rediriger l’adresse, libérer le compte.' },
  },
  en: {
    cover: { eyebrow: 'Professional email · Algeria · 2027', title: ['Professional company email', 'in Algeria: domain, mailboxes, proof'], subtitle: 'A domain in the company’s name, one mailbox per person, SPF, DKIM, DMARC, leavers prepared for', left: { label: 'Gmail and spam', sub: 'an employee leaves with the mailbox' }, right: { label: 'An address in your name', sub: 'checked by the customer’s server' } },
    controle: { caption: 'Figure 1 · The same salesperson sends the same quotation from four situations. From a free address, the message arrives, but nothing ties it to the company. From the company’s domain without settings, all three checks fail: the message often ends in spam, and a fraudster can write under the same name. With SPF, DKIM and DMARC published, the customer’s server knows the message comes from you; and the fraudster’s, which fails the first two, is rejected by the instruction in the third. Addresses and names are fictitious; final filtering also depends on content and recipient.' },
    couches: { title: 'Professional email, in five layers', layers: [
      { label: 'Domain', items: [{ name: 'The domain name registered in the company’s name, with its access held by the manager, renewed on a fixed date', sub: 'whoever holds the domain holds every address' }] },
      { label: 'Mailboxes and addresses', items: [{ name: 'One mailbox per person, shared mailboxes per department, lists and aliases, on a hosted service', sub: 'the address plan is written before the first account is created' }] },
      { label: 'Proof of sending', items: [{ name: 'SPF, DKIM and DMARC published in the domain; DMARC in observation, then set aside, then reject', sub: 'the receiving server checks the message comes from you and refuses the fake', accent: true }] },
      { label: 'Accounts', items: [{ name: 'Two-step sign-in, no shared password, administration reserved to two named accounts', sub: 'a stolen password is no longer enough to get in' }] },
      { label: 'Continuity', items: [{ name: 'Mailbox backup, leavers prepared for, old mailboxes migrated, common signatures', sub: 'the mailbox and its history stay with the company' }] },
    ], caption: 'Figure 2 · The accented layer is proof of sending: three records that decide whether your messages arrive and whether someone can write in your place. The domain, above, makes them possible, since that is where they are published; accounts and continuity, below, protect what the company uses every day.', alt: 'Five layers: domain; mailboxes and addresses; proof of sending (accented); accounts; continuity.' },
    situations: { title: 'Six real situations, and what the email system must do', columns: ['What happens', 'What the email system must do'], rows: [
      { label: 'Our emails land in spam', cells: ['The domain publishes no SPF, DKIM or DMARC', 'three records published; bulk sending separated; DMARC reports read'] },
      { label: 'We write to customers from Gmail', cells: ['Everyone opened their own address', 'one mailbox per person in the company’s name; old messages migrated'] },
      { label: 'An employee leaves with the mailbox', cells: ['The address was personal, and so was the password', 'account blocked the same day; mailbox passed to the department; auto-reply'] },
      { label: 'Nobody has the contact@ password any more', cells: ['One common mailbox, one password going round', 'shared mailbox opened with each person’s account; one access removed alone'] },
      { label: 'A fake invoice goes out in our name', cells: ['Anyone can imitate the address', 'DMARC on reject; any change of bank account confirmed by phone'] },
      { label: 'The domain is in the old provider’s name', cells: ['Nobody knows who renews it', 'domain taken back in the company’s name; access with the manager; due date noted'] },
    ], caption: 'Figure 3 · The first three rows are settled by the domain’s records, mailboxes in the company’s name and a leaver procedure; the next three by shared mailboxes with no common password, DMARC on reject and a domain in the company’s name. None is settled by “a more serious-looking address” created in a hurry.', alt: 'Matrix of six situations: emails in spam, sending from Gmail, employee leaving with the mailbox, lost contact@ password, fake invoice in the company’s name, domain in a provider’s name; what happens and what the email system must do.' },
    adresses: { caption: 'Figure 4 · The address plan of a thirty-person company: thirty named mailboxes, five shared mailboxes read by a department, four lists and aliases. Beside it, the four records the domain publishes, as they are written: MX says where to deliver, SPF who is allowed to send, DKIM carries the signature, DMARC says what to do with a failure and where to send reports. DMARC goes through three stages: observe, set aside, reject. Names, headcounts and values are a constructed example.' },
    calendrier: { title: 'Professional email in 2027, in weeks', unit: 'wk', items: [
      { label: 'Inventory and domain', note: 'existing addresses, who holds the domain and its access, address plan, choice of service; nothing cut off', from: 0, to: 1 },
      { label: 'Accounts and copy', note: 'mailboxes created, two-step sign-in, old messages copied, SPF and DKIM published, DMARC in observation', from: 1, to: 2, accent: true },
      { label: 'Cutover and follow-up', note: 'MX switched one evening, phones and computers set up, old addresses redirected, DMARC reports read', from: 2, to: 3 },
    ], caption: 'Figure 5 · Three weeks in the example for the cutover, the first with nothing cut off: the inventory of addresses, the domain and the plan are decisions. The accented week is accounts and the copy of old messages, because nobody should lose a conversation in progress. Moving DMARC to reject comes afterwards, once a few weeks of reports have shown that every legitimate sender passes.', alt: 'Three-week calendar: inventory and domain, accounts and copy (accented), cutover and follow-up.' },
    etapes: { title: 'An employee leaves: six actions', items: [
      { label: 'Block the account', sub: 'the same day, sessions closed on their devices' },
      { label: 'Change the access', sub: 'passwords of the tools they used' },
      { label: 'Hand over the mailbox', sub: 'to their manager, as a shared mailbox', accent: true },
      { label: 'Reply in their place', sub: 'automatic message and new contact' },
      { label: 'Redirect the address', sub: 'to the department for a few months' },
      { label: 'Free the account', sub: 'archive kept, account reassigned' },
    ], caption: 'Figure 6 · The accented action is the handover: the leaver’s mailbox becomes a shared mailbox that their manager opens with their own account, so conversations in progress with customers continue. Before that, the account is blocked and access changed the same day; afterwards, an automatic reply gives the new contact, the address is redirected for a few months, then the account is freed. The durations are those the company writes down.', alt: 'Six actions when an employee leaves: block the account, change the access, hand over the mailbox (accented), reply in their place, redirect the address, free the account.' },
  },
  ar: {
    cover: { eyebrow: 'بريد إلكتروني مهني · الجزائر · 2027', title: ['بريد إلكتروني مهني للمؤسسة', 'في الجزائر: النطاق، العلب، الأدلة'], subtitle: 'نطاق باسم المؤسسة، علبة لكل شخص، تسجيلات تثبت الإرسال، ومغادرة الموظفين محضَّرة', left: { label: 'عناوين مجانية ورسائل غير مرغوبة', sub: 'موظف يغادر بعلبته' }, right: { label: 'عنوان باسمكم', sub: 'يتحقق منه خادم الزبون' } },
    controle: { caption: `الشكل 1 · البائع نفسه يرسل عرض السعر نفسه من أربع حالات. من عنوان مجاني تصل الرسالة، لكن لا شيء يربطها بالمؤسسة. من نطاق المؤسسة دون إعدادات تفشل الفحوص الثلاثة: تنتهي الرسالة غالباً في البريد غير المرغوب، ويستطيع محتال أن يكتب بالاسم نفسه. مع نشر ${I('SPF')} و${I('DKIM')} و${I('DMARC')} يعرف خادم الزبون أن الرسالة منكم؛ ورسالة المحتال، التي تفشل في الأولين، تُرفض بتعليمة الثالث. العناوين والأسماء وهمية؛ والتصنيف النهائي يتوقف أيضاً على المحتوى والمستقبِل.` },
    couches: { title: 'البريد المهني، في خمس طبقات', layers: [
      { label: 'النطاق', items: [{ name: 'اسم النطاق مسجَّل باسم المؤسسة، ومداخله عند المسيّر، ويُجدَّد في تاريخ ثابت', sub: 'من يملك النطاق يملك كل العناوين' }] },
      { label: 'العلب والعناوين', items: [{ name: 'علبة لكل شخص، علب مشتركة لكل مصلحة، قوائم وأسماء بديلة، على خدمة مستضافة', sub: 'مخطط العناوين يُكتب قبل إنشاء أول حساب' }] },
      { label: 'أدلة الإرسال', items: [{ name: `${I('SPF')} و${I('DKIM')} و${I('DMARC')} منشورة في النطاق؛ ${I('DMARC')} بالمراقبة ثم الوضع جانباً ثم الرفض`, sub: 'خادم المستقبِل يتحقق أن الرسالة منكم ويرفض المزيَّفة', accent: true }] },
      { label: 'الحسابات', items: [{ name: 'تحقق بخطوتين عند الدخول، لا كلمة مرور مشتركة، والإدارة محجوزة لحسابين باسميهما', sub: 'كلمة مرور مسروقة لم تعد تكفي للدخول' }] },
      { label: 'الاستمرارية', items: [{ name: 'نسخ احتياطي للعلب، مغادرة موظف محضَّرة، استرجاع العلب القديمة، توقيعات موحَّدة', sub: 'العلبة وتاريخها يبقيان للمؤسسة' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي أدلة الإرسال: ثلاثة تسجيلات تقرر هل تصل رسائلكم وهل يستطيع أحد أن يكتب مكانكم. النطاق، فوقها، يجعلها ممكنة لأنها تُنشر فيه؛ والحسابات والاستمرارية، تحتها، تحمي ما تستعمله المؤسسة كل يوم.', alt: 'خمس طبقات: النطاق؛ العلب والعناوين؛ أدلة الإرسال (مبرزة)؛ الحسابات؛ الاستمرارية.' },
    situations: { title: 'ست حالات واقعية، وما يجب أن يفعله البريد', columns: ['ما يحدث', 'ما يجب أن يفعله البريد'], rows: [
      { label: 'رسائلنا تصل إلى البريد غير المرغوب', cells: ['النطاق لا ينشر أي تسجيل يثبت الإرسال', 'ثلاثة تسجيلات منشورة؛ الإرسال الجماعي مفصول؛ التقارير تُقرأ'] },
      { label: 'نكتب للزبائن من عناوين مجانية', cells: ['كل واحد فتح عنوانه الخاص', 'علبة لكل شخص باسم المؤسسة؛ والرسائل القديمة تُسترجع'] },
      { label: 'موظف يغادر بعلبته', cells: ['العنوان كان شخصياً وكلمة المرور كذلك', 'الحساب يُغلق في اليوم نفسه؛ العلبة تُحوَّل للمصلحة؛ ردّ تلقائي'] },
      { label: 'لا أحد يملك كلمة مرور عنوان الاستقبال', cells: ['علبة مشتركة وكلمة مرور تتنقل', 'علبة مشتركة تُفتح بحساب كل واحد؛ ويُسحب وصول واحد وحده'] },
      { label: 'فاتورة مزيَّفة تخرج باسمنا', cells: ['أي شخص يستطيع تقليد العنوان', 'تعليمة الرفض مفعَّلة؛ وأي تغيير لحساب بنكي يُؤكَّد بالهاتف'] },
      { label: 'النطاق باسم المتعهّد القديم', cells: ['لا أحد يعرف من يجدّده', 'النطاق يُستعاد باسم المؤسسة؛ المداخل عند المسيّر؛ الأجل مدوَّن'] },
    ], caption: 'الشكل 3 · السطور الثلاثة الأولى تُحَل بتسجيلات النطاق، وعلب باسم المؤسسة، وإجراء للمغادرة؛ والثلاثة التالية بعلب مشتركة دون كلمة مرور موحَّدة، وتعليمة الرفض، ونطاق باسم المؤسسة. لا يُحَل أي منها بـ«عنوان أكثر جدية» يُنشأ على عجل.', alt: 'مصفوفة ست حالات: رسائل في غير المرغوب، إرسال من عناوين مجانية، موظف يغادر بعلبته، كلمة مرور ضائعة، فاتورة مزيَّفة باسم المؤسسة، نطاق باسم متعهّد؛ ما يحدث وما يجب أن يفعله البريد.' },
    adresses: { caption: `الشكل 4 · مخطط عناوين مؤسسة من ثلاثين شخصاً: ثلاثون علبة اسمية، خمس علب مشتركة تقرؤها مصلحة، وأربع قوائم وأسماء بديلة. وبجانبه التسجيلات الأربعة التي ينشرها النطاق كما تُكتب: ${I('MX')} يقول أين يُسلَّم البريد، ${I('SPF')} من له الحق في الإرسال، ${I('DKIM')} يحمل التوقيع، ${I('DMARC')} يقول ما يُفعل عند الفشل وأين تُرسل التقارير. و${I('DMARC')} يمرّ بثلاث مراحل: المراقبة، الوضع جانباً، الرفض. الأسماء والأعداد والقيم مثال مركَّب.` },
    calendrier: { title: 'بريد مهني سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الجرد والنطاق', note: 'العناوين الموجودة، من يملك النطاق ومداخله، مخطط العناوين، اختيار الخدمة؛ دون قطع أي شيء', from: 0, to: 1 },
      { label: 'الحسابات والنسخ', note: 'إنشاء العلب، التحقق بخطوتين، نسخ الرسائل القديمة، نشر تسجيلات الإرسال، والمراقبة', from: 1, to: 2, accent: true },
      { label: 'الانتقال والمتابعة', note: 'تحويل تسجيل البريد في مساء، ضبط الهواتف والحواسيب، توجيه العناوين القديمة، قراءة التقارير', from: 2, to: 3 },
    ], caption: 'الشكل 5 · ثلاثة أسابيع في المثال للانتقال، الأول دون قطع أي شيء: جرد العناوين والنطاق والمخطط قرارات. الأسبوع المبرز هو الحسابات ونسخ الرسائل القديمة، لأن لا أحد يجب أن يفقد محادثة جارية. والانتقال إلى الرفض يأتي بعد ذلك، حين تُظهر أسابيع من التقارير أن كل الإرسال المشروع يمرّ.', alt: 'تقويم ثلاثة أسابيع: الجرد والنطاق، الحسابات والنسخ (مبرز)، الانتقال والمتابعة.' },
    etapes: { title: 'مغادرة موظف، في ست حركات', items: [
      { label: 'إغلاق الحساب', sub: 'في اليوم نفسه، وإنهاء الجلسات على أجهزته' },
      { label: 'تغيير المداخل', sub: 'كلمات مرور الأدوات التي كان يستعملها' },
      { label: 'تحويل العلبة', sub: 'إلى مسؤوله، كعلبة مشتركة', accent: true },
      { label: 'الردّ مكانه', sub: 'رسالة تلقائية وجهة الاتصال الجديدة' },
      { label: 'توجيه العنوان', sub: 'نحو المصلحة لبضعة أشهر' },
      { label: 'تحرير الحساب', sub: 'الأرشيف محفوظ، والحساب يُعاد إسناده' },
    ], caption: 'الشكل 6 · الحركة المبرزة هي التحويل: علبة المغادر تصير علبة مشتركة يفتحها مسؤوله بحسابه الخاص، فتستمر المحادثات الجارية مع الزبائن. قبلها يُغلق الحساب وتُغيَّر المداخل في اليوم نفسه؛ وبعدها يعطي ردّ تلقائي جهة الاتصال الجديدة، ويُوجَّه العنوان بضعة أشهر، ثم يُحرَّر الحساب. المدد هي التي تكتبها المؤسسة.', alt: 'ست حركات عند مغادرة موظف: إغلاق الحساب، تغيير المداخل، تحويل العلبة (مبرز)، الردّ مكانه، توجيه العنوان، تحرير الحساب.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      controle: { svg: controle(e.controle, rtl), caption: t.controle.caption, alt: e.controle.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      adresses: { svg: adresses(e.adresses, rtl), caption: t.adresses.caption, alt: e.adresses.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 3, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
    },
  };
}
