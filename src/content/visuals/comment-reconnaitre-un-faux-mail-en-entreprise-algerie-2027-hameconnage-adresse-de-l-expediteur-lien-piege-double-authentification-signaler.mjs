import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { anatomie, adresse, STRINGS as SC } from './custom/fauxmail.mjs';
export const slug = 'comment-reconnaitre-un-faux-mail-en-entreprise-algerie-2027-hameconnage-adresse-de-l-expediteur-lien-piege-double-authentification-signaler';
const T = {
  fr: {
    cover: { eyebrow: 'Faux mails · Algérie · 2027', title: ['Reconnaître un faux mail', 'avant de cliquer'], subtitle: 'Trois questions en dix secondes, l’adresse lue jusqu’à la première barre, cinq filets si quelqu’un clique', left: { label: 'Un mail « urgent »', sub: 'identifiants, virement, pièce jointe' }, right: { label: 'Trois questions', sub: 'qui, où, quoi, en dix secondes' } },
    types: { title: 'Six faux mails, ce qu’ils demandent', columns: ['Ce qu’il demande', 'La parade'], rows: [
      { label: 'La fausse banque, le faux service', cells: ['vos identifiants, sur une page qui imite la vraie', 'ouvrir le site soi-même, jamais par le lien'] },
      { label: 'Le faux directeur, le faux fournisseur', cells: ['un virement urgent, un changement de RIB', 'rappeler sur un numéro déjà connu'] },
      { label: 'La fausse facture en pièce jointe', cells: ['ouvrir un fichier qui installe un programme', 'aucune pièce jointe inattendue, même d’un contact'] },
      { label: 'Le faux partage de document', cells: ['se connecter pour « voir le document »', 'lire l’adresse de la page de connexion'] },
      { label: 'La fausse alerte de sécurité', cells: ['« votre compte est bloqué, cliquez ici »', 'l’urgence est le signal, pas la raison'] },
      { label: 'Le faux colis, la fausse livraison', cells: ['payer de « petits frais » par carte', 'suivre le colis sur le site du transporteur'] },
    ], caption: 'Figure 1 · Six déguisements, trois demandes seulement : vos identifiants, votre argent, ou l’ouverture d’un fichier. La parade est chaque fois la même idée : ne pas suivre le chemin que le message propose, et vérifier par un autre, celui qu’on connaît déjà.', alt: 'Matrice de six faux mails : la fausse banque, le faux directeur ou fournisseur, la fausse facture en pièce jointe, le faux partage de document, la fausse alerte de sécurité, le faux colis ; pour chacun, ce qu’il demande et la parade.' },
    filets: { title: 'Si quelqu’un clique quand même : cinq filets', layers: [
      { label: 'Domaine', items: [{ name: 'SPF, DKIM et DMARC sur votre nom de domaine : personne n’envoie de mail à votre place', sub: 'vos clients ne reçoivent pas de faux mails « de vous »' }] },
      { label: 'Boîte', items: [{ name: 'Le filtre de la messagerie, et un bandeau « expéditeur externe » sur ce qui vient du dehors', sub: 'le faux directeur porte alors une étiquette' }] },
      { label: 'Personne', items: [{ name: 'Trois questions avant d’agir, et une adresse où signaler sans être jugé', sub: 'celui qui signale protège tous les autres', accent: true }] },
      { label: 'Compte', items: [{ name: 'La double authentification sur la messagerie et la banque ; un gestionnaire de mots de passe', sub: 'un mot de passe volé ne suffit plus' }] },
      { label: 'Argent', items: [{ name: 'Aucun virement ni changement de RIB sans confirmation par un autre canal, quel que soit le demandeur', sub: 'la règle vaut aussi pour le gérant' }] },
    ], caption: 'Figure 2 · La couche accentuée est la personne : c’est elle qui lit le message. Les quatre autres servent le jour où elle se trompe : un domaine qu’on ne peut pas usurper, une boîte qui étiquette, un compte qu’un mot de passe volé n’ouvre pas, et une règle des paiements qui ne dépend d’aucun mail.', alt: 'Cinq couches : domaine ; boîte ; personne (accentuée) ; compte ; argent.' },
    anatomie: { caption: 'Figure 3 · Un message qui imite une banque, et six repères : l’adresse d’envoi, l’urgence, la formule générale, la demande, le lien dont la destination diffère du texte, la pièce jointe. Aucun n’est une preuve à lui seul ; deux ensemble suffisent pour ne pas cliquer. Exemple construit.' },
    adresse: { caption: 'Figure 4 · Où mène vraiment un lien. Le vrai site est le nom qui se trouve juste avant la première barre oblique, avec son extension ; le début de l’adresse peut imiter n’importe qui. Cinq adresses comparées : deux mènent à la banque de l’exemple, trois ailleurs. Noms de domaine fictifs.' },
    calendrier: { title: 'Quatre semaines, de l’état des lieux au premier exercice', unit: 'sem.', items: [
      { label: 'État des lieux', note: 'les faux mails reçus ce mois-ci, qui a cliqué, ce qui protège déjà les comptes', from: 0, to: 1, accent: true },
      { label: 'Comptes', note: 'double authentification sur la messagerie et la banque, gestionnaire de mots de passe', from: 0, to: 2 },
      { label: 'Domaine et boîte', note: 'SPF, DKIM et DMARC vérifiés ; bandeau « expéditeur externe » ; adresse de signalement', from: 1, to: 3 },
      { label: 'Formation', note: 'une heure par équipe : trois questions, dix vrais exemples, lire une adresse', from: 2, to: 3 },
      { label: 'Règle des paiements', note: 'confirmation par un autre canal pour tout virement et tout changement de RIB', from: 2, to: 4 },
      { label: 'Premier exercice', note: 'un faux mail d’exercice, annoncé ; la part des signalements comme mesure', from: 3, to: 4 },
    ], caption: 'Figure 5 · Quatre semaines dans l’exemple. La période accentuée est la première : regarder ce qui arrive déjà. Les comptes passent avant la formation, parce qu’ils protègent même ceux qui n’ont pas encore été formés. Durées indicatives d’un exemple construit.', alt: 'Calendrier de quatre semaines : état des lieux (accentué, une semaine), comptes, domaine et boîte, formation, règle des paiements, premier exercice.' },
    former: { title: 'Former sans humilier, en six temps', items: [
      { label: 'Annoncer', sub: 'un exercice aura lieu, sans piège caché' },
      { label: 'Montrer', sub: 'dix faux mails reçus ici' },
      { label: 'Donner', sub: 'trois questions, dix secondes', accent: true },
      { label: 'Outiller', sub: 'une adresse pour signaler' },
      { label: 'Exercer', sub: 'un faux mail, chaque trimestre' },
      { label: 'Remercier', sub: 'celui qui signale, devant tous' },
    ], caption: 'Figure 6 · Le temps accentué est le troisième : donner trois questions, qui tiennent en dix secondes. Les autres installent la confiance : un exercice annoncé, des exemples réellement reçus dans l’entreprise, une adresse où signaler, et des remerciements pour celui qui signale.', alt: 'Six temps : annoncer, montrer, donner (accentué), outiller, exercer, remercier.' },
  },
  en: {
    cover: { eyebrow: 'Fake emails · Algeria · 2027', title: ['Recognising a fake email', 'before clicking'], subtitle: 'Three questions in ten seconds, the address read up to the first slash, five nets if someone clicks', left: { label: 'An “urgent” email', sub: 'credentials, transfer, attachment' }, right: { label: 'Three questions', sub: 'who, where, what, in ten seconds' } },
    types: { title: 'Six fake emails, what they ask for', columns: ['What it asks for', 'The defence'], rows: [
      { label: 'The fake bank, the fake service', cells: ['your credentials, on a page imitating the real one', 'open the site yourself, never through the link'] },
      { label: 'The fake manager, the fake supplier', cells: ['an urgent transfer, a change of bank details', 'call back on a number you already know'] },
      { label: 'The fake invoice as an attachment', cells: ['opening a file that installs a program', 'no unexpected attachment, even from a contact'] },
      { label: 'The fake document share', cells: ['signing in to “view the document”', 'read the address of the sign-in page'] },
      { label: 'The fake security alert', cells: ['“your account is blocked, click here”', 'urgency is the signal, not the reason'] },
      { label: 'The fake parcel, the fake delivery', cells: ['paying “small fees” by card', 'track the parcel on the carrier’s site'] },
    ], caption: 'Figure 1 · Six disguises, only three requests: your credentials, your money, or the opening of a file. The defence is the same idea each time: do not follow the path the message offers, and check by another, the one you already know.', alt: 'Matrix of six fake emails: the fake bank, the fake manager or supplier, the fake invoice as an attachment, the fake document share, the fake security alert, the fake parcel; for each, what it asks for and the defence.' },
    filets: { title: 'If someone clicks anyway: five nets', layers: [
      { label: 'Domain', items: [{ name: 'SPF, DKIM and DMARC on your domain name: nobody sends email in your place', sub: 'your customers do not receive fake emails “from you”' }] },
      { label: 'Mailbox', items: [{ name: 'The mail filter, and an “external sender” banner on what comes from outside', sub: 'the fake manager then carries a label' }] },
      { label: 'Person', items: [{ name: 'Three questions before acting, and an address for reporting without being judged', sub: 'whoever reports protects everyone else', accent: true }] },
      { label: 'Account', items: [{ name: 'Two-factor sign-in on the mailbox and the bank; a password manager', sub: 'a stolen password is no longer enough' }] },
      { label: 'Money', items: [{ name: 'No transfer or change of bank details without confirmation by another channel, whoever asks', sub: 'the rule applies to the manager too' }] },
    ], caption: 'Figure 2 · The accented layer is the person: they are the one reading the message. The other four serve on the day they get it wrong: a domain that cannot be spoofed, a mailbox that labels, an account a stolen password does not open, and a payment rule that depends on no email.', alt: 'Five layers: domain; mailbox; person (accented); account; money.' },
    anatomie: { caption: 'Figure 3 · A message imitating a bank, and six markers: the sending address, the urgency, the general greeting, the request, the link whose destination differs from its text, the attachment. None is proof on its own; two together are enough not to click. Constructed example.' },
    adresse: { caption: 'Figure 4 · Where a link really leads. The real site is the name just before the first slash, with its extension; the start of the address can imitate anyone. Five addresses compared: two lead to the bank in the example, three elsewhere. Fictitious domain names.' },
    calendrier: { title: 'Four weeks, from taking stock to the first exercise', unit: 'wk', items: [
      { label: 'Taking stock', note: 'the fake emails received this month, who clicked, what already protects the accounts', from: 0, to: 1, accent: true },
      { label: 'Accounts', note: 'two-factor sign-in on the mailbox and the bank, password manager', from: 0, to: 2 },
      { label: 'Domain and mailbox', note: 'SPF, DKIM and DMARC checked; “external sender” banner; reporting address', from: 1, to: 3 },
      { label: 'Training', note: 'one hour per team: three questions, ten real examples, reading an address', from: 2, to: 3 },
      { label: 'Payment rule', note: 'confirmation by another channel for any transfer and any change of bank details', from: 2, to: 4 },
      { label: 'First exercise', note: 'an announced practice email; the share of reports as the measure', from: 3, to: 4 },
    ], caption: 'Figure 5 · Four weeks in the example. The accented period is the first: looking at what already arrives. Accounts come before training, because they protect even those who have not been trained yet. Indicative durations from a constructed example.', alt: 'Four-week calendar: taking stock (accented, one week), accounts, domain and mailbox, training, payment rule, first exercise.' },
    former: { title: 'Training without humiliating, in six steps', items: [
      { label: 'Announce', sub: 'an exercise will take place, no hidden trap' },
      { label: 'Show', sub: 'ten fake emails received here' },
      { label: 'Give', sub: 'three questions, ten seconds', accent: true },
      { label: 'Equip', sub: 'an address for reporting' },
      { label: 'Practise', sub: 'a practice email, every quarter' },
      { label: 'Thank', sub: 'whoever reports, in front of all' },
    ], caption: 'Figure 6 · The accented step is the third: give three questions, which fit in ten seconds. The others build trust: an announced exercise, examples really received in the company, an address for reporting, and thanks for whoever reports.', alt: 'Six steps: announce, show, give (accented), equip, practise, thank.' },
  },
  ar: {
    cover: { eyebrow: 'الرسائل المزيَّفة · الجزائر · 2027', title: ['التعرّف على رسالة مزيَّفة', 'قبل النقر'], subtitle: 'ثلاثة أسئلة في عشر ثوانٍ، العنوان مقروءاً إلى أول شرطة، وخمس شبكات أمان إذا نقر أحدهم', left: { label: 'رسالة «عاجلة»', sub: 'معرّفات، تحويل، أو مرفق' }, right: { label: 'ثلاثة أسئلة', sub: 'من، إلى أين، وماذا، في عشر ثوانٍ' } },
    types: { title: 'ست رسائل مزيَّفة، وما تطلبه', columns: ['ما تطلبه', 'الوقاية'], rows: [
      { label: 'البنك المزيَّف، المصلحة المزيَّفة', cells: ['معرّفاتكم، على صفحة تقلّد الحقيقية', 'فتح الموقع مباشرة، لا عبر الرابط أبداً'] },
      { label: 'المدير المزيَّف، المورّد المزيَّف', cells: ['تحويل عاجل، أو تغيير الحساب البنكي', 'الاتصال برقم معروف من قبل'] },
      { label: 'الفاتورة المزيَّفة في مرفق', cells: ['فتح ملف يثبّت برنامجاً', 'لا مرفق غير منتظَر، حتى من شخص معروف'] },
      { label: 'تقاسم الوثيقة المزيَّف', cells: ['الدخول من أجل «رؤية الوثيقة»', 'قراءة عنوان صفحة الدخول'] },
      { label: 'تنبيه الأمن المزيَّف', cells: ['«حسابكم محجوب، انقروا هنا»', 'الاستعجال هو الإشارة، لا السبب'] },
      { label: 'الطرد المزيَّف، التوصيل المزيَّف', cells: ['دفع «مصاريف صغيرة» بالبطاقة', 'تتبّع الطرد على موقع الناقل'] },
    ], caption: 'الشكل 1 · ستة أقنعة، وثلاثة طلبات فقط: معرّفاتكم، مالكم، أو فتح ملف. والوقاية كل مرة الفكرة نفسها: عدم سلوك الطريق الذي تقترحه الرسالة، والتحقق من طريق آخر، الذي تعرفونه من قبل.', alt: 'مصفوفة ست رسائل مزيَّفة: البنك المزيَّف، المدير أو المورّد المزيَّف، الفاتورة المزيَّفة في مرفق، تقاسم الوثيقة المزيَّف، تنبيه الأمن المزيَّف، والطرد المزيَّف؛ ولكل واحدة ما تطلبه والوقاية.' },
    filets: { title: 'إذا نقر أحدهم رغم ذلك: خمس شبكات أمان', layers: [
      { label: 'النطاق', items: [{ name: 'SPF وDKIM وDMARC على اسم نطاقكم: لا أحد يرسل بريداً مكانكم', sub: 'زبائنكم لا يستلمون رسائل مزيَّفة «منكم»' }] },
      { label: 'العلبة', items: [{ name: 'مصفاة البريد، وشريط «مرسِل خارجي» على ما يأتي من الخارج', sub: 'فالمدير المزيَّف يحمل عندها ملصقاً' }] },
      { label: 'الشخص', items: [{ name: 'ثلاثة أسئلة قبل التصرف، وعنوان للتبليغ دون حكم على أحد', sub: 'من يبلّغ يحمي كل الآخرين', accent: true }] },
      { label: 'الحساب', items: [{ name: 'المصادقة الثنائية على البريد والبنك؛ ومسيّر لكلمات المرور', sub: 'كلمة مرور مسروقة لم تعد تكفي' }] },
      { label: 'المال', items: [{ name: 'لا تحويل ولا تغيير حساب بنكي دون تأكيد من قناة أخرى، مهما كان الطالب', sub: 'والقاعدة تسري على المسيّر كذلك' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي الشخص: هو من يقرأ الرسالة. والأربع الأخرى تنفع يوم يخطئ: نطاق لا يمكن انتحاله، علبة تضع ملصقاً، حساب لا تفتحه كلمة مرور مسروقة، وقاعدة دفع لا تتوقف على أي رسالة.', alt: 'خمس طبقات: النطاق؛ العلبة؛ الشخص (مبرزة)؛ الحساب؛ المال.' },
    anatomie: { caption: 'الشكل 3 · رسالة تقلّد بنكاً، وست علامات: عنوان الإرسال، الاستعجال، الصيغة العامة، الطلب، الرابط الذي تختلف وجهته عن نصّه، والمرفق. ولا واحدة دليل وحدها؛ واثنتان معاً تكفيان لعدم النقر. مثال مركَّب.' },
    adresse: { caption: 'الشكل 4 · إلى أين يقود الرابط فعلاً. الموقع الحقيقي هو الاسم الموجود مباشرة قبل أول شرطة مائلة، مع امتداده؛ وبداية العنوان تستطيع تقليد أي أحد. خمسة عناوين مقارَنة: اثنان يقودان إلى بنك المثال، وثلاثة إلى مكان آخر. أسماء نطاقات خيالية.' },
    calendrier: { title: 'أربعة أسابيع، من المعاينة إلى أول تمرين', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'الرسائل المزيَّفة المستلَمة هذا الشهر، من نقر، وما يحمي الحسابات أصلاً', from: 0, to: 1, accent: true },
      { label: 'الحسابات', note: 'المصادقة الثنائية على البريد والبنك، ومسيّر كلمات المرور', from: 0, to: 2 },
      { label: 'النطاق والعلبة', note: 'SPF وDKIM وDMARC مراجَعة؛ شريط «مرسِل خارجي»؛ وعنوان للتبليغ', from: 1, to: 3 },
      { label: 'التكوين', note: 'ساعة لكل فريق: ثلاثة أسئلة، عشرة أمثلة حقيقية، وقراءة عنوان', from: 2, to: 3 },
      { label: 'قاعدة الدفع', note: 'تأكيد من قناة أخرى لكل تحويل وكل تغيير في الحساب البنكي', from: 2, to: 4 },
      { label: 'أول تمرين', note: 'رسالة تمرين، معلَن عنها؛ وحصة التبليغات هي القياس', from: 3, to: 4 },
    ], caption: 'الشكل 5 · أربعة أسابيع في المثال. الفترة المبرزة هي الأولى: النظر إلى ما يصل أصلاً. والحسابات تسبق التكوين، لأنها تحمي حتى من لم يُكوَّنوا بعد. مدد تقريبية لمثال مركَّب.', alt: 'تقويم أربعة أسابيع: المعاينة (مبرزة، أسبوع)، الحسابات، النطاق والعلبة، التكوين، قاعدة الدفع، أول تمرين.' },
    former: { title: 'التكوين دون إحراج، في ست مراحل', items: [
      { label: 'الإعلان', sub: 'سيُجرى تمرين، دون فخ مخفي' },
      { label: 'العرض', sub: 'عشر رسائل مزيَّفة وصلت هنا' },
      { label: 'الإعطاء', sub: 'ثلاثة أسئلة، عشر ثوانٍ', accent: true },
      { label: 'التجهيز', sub: 'عنوان للتبليغ' },
      { label: 'التمرين', sub: 'رسالة تمرين، كل ثلاثة أشهر' },
      { label: 'الشكر', sub: 'لمن يبلّغ، أمام الجميع' },
    ], caption: 'الشكل 6 · المرحلة المبرزة هي الثالثة: إعطاء ثلاثة أسئلة، تسعها عشر ثوانٍ. والأخرى تبني الثقة: تمرين معلَن عنه، أمثلة وصلت فعلاً إلى المؤسسة، عنوان للتبليغ، وشكر لمن يبلّغ.', alt: 'ست مراحل: الإعلان، العرض، الإعطاء (مبرزة)، التجهيز، التمرين، الشكر.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      types: { svg: matrix({ title: t.types.title, columns: t.types.columns, rows: t.types.rows, rtl }), caption: t.types.caption, alt: t.types.alt },
      filets: { svg: layers({ title: t.filets.title, layers: t.filets.layers, rtl }), caption: t.filets.caption, alt: t.filets.alt },
      anatomie: { svg: anatomie(e.anatomie, rtl), caption: t.anatomie.caption, alt: e.anatomie.alt },
      adresse: { svg: adresse(e.adresse, rtl), caption: t.adresse.caption, alt: e.adresse.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      former: { svg: steps({ title: t.former.title, steps: t.former.items, arrows: true, rtl }), caption: t.former.caption, alt: t.former.alt },
    },
  };
}
