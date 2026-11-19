import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { demenager, bascule, STRINGS as SC } from './custom/hebergeur.mjs';
export const slug = 'comment-changer-d-hebergeur-de-site-internet-en-algerie-2027-sans-coupure-site-mails-dns-bascule-retour-arriere-transfert-du-nom-de-domaine';
const T = {
  fr: {
    cover: { eyebrow: 'Changer d’hébergeur · Algérie · 2027', title: ['Changer d’hébergeur', 'sans coupure'], subtitle: 'Sept choses à déménager, tout essayé avant la bascule, l’ancien serveur gardé sept jours', left: { label: 'Ancien hébergeur', sub: 'lent, ou qui ne répond plus' }, right: { label: 'Nouvel hébergeur', sub: 'essayé avant la bascule' } },
    temps: { title: 'Déménager un site, en six temps', items: [
      { label: 'Inventorier', sub: 'sept choses, et qui a les accès', accent: true },
      { label: 'Abaisser', sub: 'la durée de cache des DNS' },
      { label: 'Copier', sub: 'et essayer, sous une adresse provisoire' },
      { label: 'Geler', sub: 'puis une dernière copie' },
      { label: 'Basculer', sub: 'une adresse change dans les DNS' },
      { label: 'Garder', sub: 'l’ancien serveur sept jours' },
    ], caption: 'Figure 1 · Le temps accentué est le premier : inventorier. Les quatre premiers temps se font sans que les visiteurs ne voient rien ; le cinquième est un seul changement ; le sixième est ce qui permet de revenir en arrière. Le transfert du nom de domaine n’est pas dans la liste : c’est une autre opération.', alt: 'Six temps : inventorier (accentué), abaisser, copier, geler, basculer, garder.' },
    demenager: { caption: 'Figure 2 · Sept éléments passent de l’ancien hébergeur au nouveau, chacun avec sa méthode : les fichiers, la base, les boîtes mail, la zone DNS, le certificat, les tâches planifiées, les envois de mails du site. En accent, les trois qu’on oublie facilement. Exemple construit : la liste change selon le site.' },
    avant: { title: 'Avant de basculer : cinq couches à essayer', layers: [
      { label: 'Adresses', items: [{ name: 'Les mêmes adresses de pages qu’avant, et une redirection permanente pour celles qui changent', sub: 'un lien ancien doit encore mener quelque part' }] },
      { label: 'Sécurité', items: [{ name: 'Un certificat émis et valide sur le nouveau serveur, pour le nom avec et sans « www »', sub: 'sinon le navigateur affiche une alerte' }] },
      { label: 'Courrier', items: [{ name: 'Chaque boîte copiée, les redirections recréées, l’envoi et la réception essayés', sub: 'c’est ce qui se remarque en premier', accent: true }] },
      { label: 'Données', items: [{ name: 'La base à jour, les formulaires qui envoient, les comptes et les commandes qui fonctionnent', sub: 'un essai par parcours, pas seulement la page d’accueil' }] },
      { label: 'Suite', items: [{ name: 'Les tâches planifiées, la sauvegarde et la surveillance en place avant le premier visiteur', sub: 'ce qui tournait la nuit tourne encore' }] },
    ], caption: 'Figure 3 · La couche accentuée est le courrier : c’est celle qu’on essaie le moins et dont l’absence se remarque le plus vite. Les cinq couches s’essaient sur le nouveau serveur avant la bascule, sous une adresse provisoire : après, il est trop tard pour découvrir.', alt: 'Cinq couches : adresses ; sécurité ; courrier (accentuée) ; données ; suite.' },
    bascule: { caption: 'Figure 4 · La bascule, de 72 heures avant à 48 heures après. La durée de cache des DNS est abaissée deux jours avant ; le nouveau serveur est copié et essayé ; l’ancien est gelé quatre heures avant, puis une adresse change. L’ancien reste allumé : revenir en arrière, c’est repointer les DNS. Exemple construit.' },
    deux: { title: 'Changer d’hébergeur, transférer le nom : deux opérations', columns: ['Changer d’hébergeur', 'Transférer le nom de domaine'], rows: [
      { label: 'Ce qui change', cells: ['l’endroit où vivent le site et les mails', 'le bureau où le nom est enregistré'] },
      { label: 'Ce qu’on modifie', cells: ['des enregistrements dans la zone DNS', 'le bureau d’enregistrement, avec un code'] },
      { label: 'Combien de temps', cells: ['de quelques minutes à quelques heures', 'environ cinq jours'] },
      { label: 'Peut-on revenir en arrière', cells: ['oui : on repointe les DNS', 'pas tout de suite : un délai s’applique'] },
      { label: 'Est-ce obligatoire', cells: ['oui, c’est le déménagement', 'non : le nom peut rester où il est'] },
      { label: 'Quand', cells: ['d’abord', 'plus tard, jamais la même semaine'] },
    ], caption: 'Figure 5 · Deux opérations que l’on confond. Changer d’hébergeur déplace le site et les mails, et se défait en repointant les DNS. Transférer le nom change seulement le bureau où il est enregistré : c’est facultatif, plus long, et cela ne se défait pas tout de suite. On ne fait jamais les deux la même semaine.', alt: 'Matrice comparant le changement d’hébergeur et le transfert du nom de domaine sur six points : ce qui change, ce qu’on modifie, combien de temps, peut-on revenir en arrière, est-ce obligatoire, quand.' },
    calendrier: { title: 'Trois semaines, de l’inventaire à la résiliation', unit: 'sem.', items: [
      { label: 'Inventaire', note: 'sept éléments, les accès, la durée de cache des DNS, la date de bascule', from: 0, to: 1, accent: true },
      { label: 'Copie et essais', note: 'site, base et boîtes copiés ; cinq couches essayées sous une adresse provisoire', from: 0, to: 2 },
      { label: 'Bascule', note: 'cache abaissé deux jours avant, gel, dernière copie, changement d’adresse', from: 1, to: 2 },
      { label: 'Ancien serveur gardé', note: 'allumé et intact sept jours, prêt à reprendre', from: 2, to: 3 },
      { label: 'Résiliation', note: 'après vérification des mails, des formulaires et d’une sauvegarde restaurée', from: 2, to: 3 },
    ], caption: 'Figure 6 · Trois semaines dans l’exemple. La période accentuée est la première : l’inventaire. La bascule elle-même tient en une matinée de la deuxième semaine ; la troisième sert à vérifier, l’ancien serveur toujours allumé. Le transfert du nom, s’il est voulu, vient après. Durées indicatives d’un exemple construit.', alt: 'Calendrier de trois semaines : inventaire (accentué, une semaine), copie et essais, bascule, ancien serveur gardé, résiliation.' },
  },
  en: {
    cover: { eyebrow: 'Changing host · Algeria · 2027', title: ['Changing host', 'with no cut'], subtitle: 'Seven things to move, everything tested before the switch, the old server kept for seven days', left: { label: 'Old host', sub: 'slow, or no longer answering' }, right: { label: 'New host', sub: 'tested before the switch' } },
    temps: { title: 'Moving a site, in six steps', items: [
      { label: 'Take inventory', sub: 'seven things, and who has the access', accent: true },
      { label: 'Lower', sub: 'the DNS cache time' },
      { label: 'Copy', sub: 'and test, under a temporary address' },
      { label: 'Freeze', sub: 'then one last copy' },
      { label: 'Switch', sub: 'one address changes in the DNS' },
      { label: 'Keep', sub: 'the old server for seven days' },
    ], caption: 'Figure 1 · The accented step is the first: take inventory. The first four steps are done without visitors seeing anything; the fifth is a single change; the sixth is what makes going back possible. The domain name transfer is not in the list: it is another operation.', alt: 'Six steps: take inventory (accented), lower, copy, freeze, switch, keep.' },
    demenager: { caption: 'Figure 2 · Seven items go from the old host to the new one, each with its method: the files, the database, the mailboxes, the DNS zone, the certificate, the scheduled tasks, the mail the site sends. Accented, the three that are easily forgotten. Constructed example: the list changes with the site.' },
    avant: { title: 'Before switching: five layers to test', layers: [
      { label: 'Addresses', items: [{ name: 'The same page addresses as before, and a permanent redirect for those that change', sub: 'an old link must still lead somewhere' }] },
      { label: 'Security', items: [{ name: 'A certificate issued and valid on the new server, for the name with and without “www”', sub: 'otherwise the browser shows a warning' }] },
      { label: 'Mail', items: [{ name: 'Each mailbox copied, the forwards recreated, sending and receiving tested', sub: 'this is what is noticed first', accent: true }] },
      { label: 'Data', items: [{ name: 'The database up to date, the forms that send, the accounts and orders that work', sub: 'one test per journey, not just the home page' }] },
      { label: 'Follow-up', items: [{ name: 'Scheduled tasks, backup and monitoring in place before the first visitor', sub: 'what ran at night still runs' }] },
    ], caption: 'Figure 3 · The accented layer is mail: it is the one tested least and whose absence is noticed fastest. The five layers are tested on the new server before the switch, under a temporary address: afterwards, it is too late to find out.', alt: 'Five layers: addresses; security; mail (accented); data; follow-up.' },
    bascule: { caption: 'Figure 4 · The switch, from 72 hours before to 48 hours after. The DNS cache time is lowered two days before; the new server is copied and tested; the old one is frozen four hours before, then one address changes. The old one stays on: going back means pointing the DNS back. Constructed example.' },
    deux: { title: 'Changing host, transferring the name: two operations', columns: ['Changing host', 'Transferring the domain name'], rows: [
      { label: 'What changes', cells: ['the place where the site and mail live', 'the office where the name is registered'] },
      { label: 'What is modified', cells: ['records in the DNS zone', 'the registrar, with a code'] },
      { label: 'How long', cells: ['from a few minutes to a few hours', 'about five days'] },
      { label: 'Can you go back', cells: ['yes: point the DNS back', 'not straight away: a waiting period applies'] },
      { label: 'Is it compulsory', cells: ['yes, that is the move', 'no: the name can stay where it is'] },
      { label: 'When', cells: ['first', 'later, never in the same week'] },
    ], caption: 'Figure 5 · Two operations that get confused. Changing host moves the site and the mail, and is undone by pointing the DNS back. Transferring the name only changes the office where it is registered: it is optional, slower, and cannot be undone straight away. The two are never done in the same week.', alt: 'Matrix comparing a change of host and a domain name transfer on six points: what changes, what is modified, how long, can you go back, is it compulsory, when.' },
    calendrier: { title: 'Three weeks, from the inventory to cancellation', unit: 'wk', items: [
      { label: 'Inventory', note: 'seven items, the access, the DNS cache time, the date of the switch', from: 0, to: 1, accent: true },
      { label: 'Copy and tests', note: 'site, database and mailboxes copied; five layers tested under a temporary address', from: 0, to: 2 },
      { label: 'Switch', note: 'cache lowered two days before, freeze, last copy, change of address', from: 1, to: 2 },
      { label: 'Old server kept', note: 'on and intact for seven days, ready to take over again', from: 2, to: 3 },
      { label: 'Cancellation', note: 'after checking mail, forms and one restored backup', from: 2, to: 3 },
    ], caption: 'Figure 6 · Three weeks in the example. The accented period is the first: the inventory. The switch itself fits in one morning of the second week; the third is for checking, with the old server still on. The name transfer, if wanted, comes afterwards. Indicative durations from a constructed example.', alt: 'Three-week calendar: inventory (accented, one week), copy and tests, switch, old server kept, cancellation.' },
  },
  ar: {
    cover: { eyebrow: 'تغيير المستضيف · الجزائر · 2027', title: ['تغيير المستضيف', 'دون انقطاع'], subtitle: 'سبعة أشياء تُنقل، الكل مجرَّب قبل التبديل، والخادم القديم يبقى سبعة أيام', left: { label: 'المستضيف القديم', sub: 'بطيء، أو لم يعد يجيب' }, right: { label: 'المستضيف الجديد', sub: 'مجرَّب قبل التبديل' } },
    temps: { title: 'نقل موقع، في ست مراحل', items: [
      { label: 'الجرد', sub: 'سبعة أشياء، ومن عنده الدخول', accent: true },
      { label: 'التخفيض', sub: 'مدة حفظ أسماء النطاقات' },
      { label: 'النسخ', sub: 'والتجربة، تحت عنوان مؤقت' },
      { label: 'التجميد', sub: 'ثم نسخة أخيرة' },
      { label: 'التبديل', sub: 'عنوان واحد يتغيّر' },
      { label: 'الإبقاء', sub: 'الخادم القديم سبعة أيام' },
    ], caption: 'الشكل 1 · المرحلة المبرزة هي الأولى: الجرد. والمراحل الأربع الأولى تُنجز دون أن يرى الزوّار شيئاً؛ والخامسة تغيير واحد؛ والسادسة هي التي تسمح بالرجوع. ونقل اسم النطاق ليس في القائمة: هو عملية أخرى.', alt: 'ست مراحل: الجرد (مبرزة)، التخفيض، النسخ، التجميد، التبديل، الإبقاء.' },
    demenager: { caption: 'الشكل 2 · سبعة عناصر تنتقل من المستضيف القديم إلى الجديد، ولكل واحد طريقته: الملفات، القاعدة، علب البريد، منطقة أسماء النطاقات، الشهادة، المهام المبرمجة، ورسائل الموقع. والمبرزة هي الثلاثة التي تُنسى بسهولة. مثال مركَّب: القائمة تتغيّر حسب الموقع.' },
    avant: { title: 'قبل التبديل: خمس طبقات تُجرَّب', layers: [
      { label: 'العناوين', items: [{ name: 'عناوين الصفحات نفسها كما كانت، وإعادة توجيه دائمة للتي تتغيّر', sub: 'الرابط القديم يجب أن يقود إلى مكان ما' }] },
      { label: 'الأمن', items: [{ name: 'شهادة صادرة وصالحة على الخادم الجديد، للاسم بالبادئة ودونها', sub: 'وإلا عرض المتصفح تنبيهاً' }] },
      { label: 'البريد', items: [{ name: 'كل علبة منسوخة، التحويلات معادة، والإرسال والاستلام مجرَّبان', sub: 'هو ما يُلاحَظ أولاً', accent: true }] },
      { label: 'البيانات', items: [{ name: 'القاعدة محدَّثة، الاستمارات ترسل، والحسابات والطلبيات تعمل', sub: 'تجربة لكل مسار، لا الصفحة الرئيسية فقط' }] },
      { label: 'ما بعدها', items: [{ name: 'المهام المبرمجة، النسخ الاحتياطي، والمراقبة موضوعة قبل أول زائر', sub: 'ما كان يعمل ليلاً ما زال يعمل' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي البريد: هي التي تُجرَّب أقل وغيابها يُلاحَظ أسرع. والطبقات الخمس تُجرَّب على الخادم الجديد قبل التبديل، تحت عنوان مؤقت: وبعده، يفوت وقت الاكتشاف.', alt: 'خمس طبقات: العناوين؛ الأمن؛ البريد (مبرزة)؛ البيانات؛ ما بعدها.' },
    bascule: { caption: 'الشكل 4 · التبديل، من 72 ساعة قبل إلى 48 ساعة بعد. مدة حفظ أسماء النطاقات تُخفَّض قبل يومين؛ الخادم الجديد يُنسخ ويُجرَّب؛ القديم يُجمَّد قبل أربع ساعات، ثم يتغيّر عنوان واحد. والقديم يبقى مشغَّلاً: الرجوع هو إعادة توجيه الأسماء. مثال مركَّب.' },
    deux: { title: 'تغيير المستضيف، ونقل الاسم: عمليتان', columns: ['تغيير المستضيف', 'نقل اسم النطاق'], rows: [
      { label: 'ما يتغيّر', cells: ['المكان الذي يعيش فيه الموقع والبريد', 'المكتب الذي سُجِّل فيه الاسم'] },
      { label: 'ما يُعدَّل', cells: ['سجلات في منطقة أسماء النطاقات', 'مكتب التسجيل، برمز'] },
      { label: 'كم من الوقت', cells: ['من بضع دقائق إلى بضع ساعات', 'نحو خمسة أيام'] },
      { label: 'هل يمكن الرجوع', cells: ['نعم: يُعاد توجيه الأسماء', 'ليس حالاً: يسري أجل انتظار'] },
      { label: 'هل هو إلزامي', cells: ['نعم، هو النقل نفسه', 'لا: الاسم قد يبقى حيث هو'] },
      { label: 'متى', cells: ['أولاً', 'لاحقاً، وأبداً في الأسبوع نفسه'] },
    ], caption: 'الشكل 5 · عمليتان يُخلط بينهما. تغيير المستضيف ينقل الموقع والبريد، ويُلغى بإعادة توجيه الأسماء. ونقل الاسم يغيّر فقط المكتب الذي سُجِّل فيه: اختياري، أطول، ولا يُلغى حالاً. ولا تُنجز العمليتان أبداً في الأسبوع نفسه.', alt: 'مصفوفة تقارن تغيير المستضيف ونقل اسم النطاق في ست نقاط: ما يتغيّر، ما يُعدَّل، كم من الوقت، هل يمكن الرجوع، هل هو إلزامي، ومتى.' },
    calendrier: { title: 'ثلاثة أسابيع، من الجرد إلى الفسخ', unit: 'أسبوع', items: [
      { label: 'الجرد', note: 'سبعة عناصر، الدخول، مدة حفظ الأسماء، وتاريخ التبديل', from: 0, to: 1, accent: true },
      { label: 'النسخ والتجارب', note: 'الموقع والقاعدة والعلب منسوخة؛ وخمس طبقات مجرَّبة تحت عنوان مؤقت', from: 0, to: 2 },
      { label: 'التبديل', note: 'تخفيض المدة قبل يومين، تجميد، نسخة أخيرة، وتغيير العنوان', from: 1, to: 2 },
      { label: 'الخادم القديم يبقى', note: 'مشغَّلاً وسليماً سبعة أيام، جاهزاً للعودة', from: 2, to: 3 },
      { label: 'الفسخ', note: 'بعد مراجعة البريد، الاستمارات، ونسخة احتياطية مسترجَعة', from: 2, to: 3 },
    ], caption: 'الشكل 6 · ثلاثة أسابيع في المثال. الفترة المبرزة هي الأولى: الجرد. والتبديل نفسه يأخذ صباحاً من الأسبوع الثاني؛ والثالث للمراجعة، والخادم القديم ما زال مشغَّلاً. ونقل الاسم، إن أُريد، يأتي بعدها. مدد تقريبية لمثال مركَّب.', alt: 'تقويم ثلاثة أسابيع: الجرد (مبرزة، أسبوع)، النسخ والتجارب، التبديل، الخادم القديم يبقى، الفسخ.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      temps: { svg: steps({ title: t.temps.title, steps: t.temps.items, arrows: true, rtl }), caption: t.temps.caption, alt: t.temps.alt },
      demenager: { svg: demenager(e.demenager, rtl), caption: t.demenager.caption, alt: e.demenager.alt },
      avant: { svg: layers({ title: t.avant.title, layers: t.avant.layers, rtl }), caption: t.avant.caption, alt: t.avant.alt },
      bascule: { svg: bascule(e.bascule, rtl), caption: t.bascule.caption, alt: e.bascule.alt },
      deux: { svg: matrix({ title: t.deux.title, columns: t.deux.columns, rows: t.deux.rows, rtl }), caption: t.deux.caption, alt: t.deux.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 3, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
