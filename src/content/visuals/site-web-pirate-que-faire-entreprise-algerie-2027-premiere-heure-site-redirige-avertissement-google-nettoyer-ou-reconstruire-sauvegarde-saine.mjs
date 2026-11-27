import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { chronologie, portes, STRINGS as SC } from './custom/sitepirate.mjs';
export const slug = 'site-web-pirate-que-faire-entreprise-algerie-2027-premiere-heure-site-redirige-avertissement-google-nettoyer-ou-reconstruire-sauvegarde-saine';
const T = {
  fr: {
    cover: { eyebrow: 'Site web piraté · Algérie · 2027', title: ['Site web piraté, que faire', 'la première heure, puis cinq jours'], subtitle: 'Isoler sans rien supprimer, dater l’entrée, reconstruire propre, fermer la porte, lever l’avertissement', left: { label: 'Nettoyé en vitesse', sub: 'repris la semaine suivante' }, right: { label: 'Reconstruit propre', sub: 'et la porte est fermée' } },
    signes: { title: 'Six signes d’un site piraté, et le premier geste', columns: ['Ce que cela veut dire', 'Le premier geste'], rows: [
      { label: 'Page d’accueil remplacée', cells: ['quelqu’un écrit dans les fichiers du site', 'mettre en maintenance, ne rien supprimer'] },
      { label: 'Redirection vers un autre site', cells: ['du code a été ajouté, parfois pour les seuls visiteurs venus d’un moteur', 'vérifier depuis un téléphone et depuis une recherche'] },
      { label: 'Avertissement rouge du navigateur', cells: ['le site figure sur une liste de sites dangereux', 'noter le message exact, ouvrir la console de recherche'] },
      { label: '« Ce site est peut-être piraté »', cells: ['le moteur a vu des pages qui ne sont pas les vôtres', 'lire le rapport de sécurité, relever les adresses citées'] },
      { label: 'Pages inconnues dans les résultats', cells: ['du spam est publié sous votre nom de domaine', 'chercher votre nom de domaine, copier les adresses'] },
      { label: 'Hébergeur qui suspend le compte', cells: ['il a détecté un envoi de spam ou un fichier malveillant', 'demander son rapport et la date de détection'] },
    ], caption: 'Figure 1 · Six signes, du plus visible au plus discret. Les deux premiers se voient sur le site ; les trois suivants se voient chez les autres, navigateur ou moteur de recherche ; le dernier arrive par un courriel de l’hébergeur. Dans tous les cas le premier geste est le même : isoler le site sans rien supprimer, et noter ce que l’on voit.', alt: 'Matrice de six signes d’un site piraté, avec ce qu’ils veulent dire et le premier geste : page remplacée, redirection, avertissement du navigateur, mention dans les résultats de recherche, pages inconnues, compte suspendu par l’hébergeur.' },
    etapes: { title: 'Remettre un site en état, en six temps', items: [
      { label: 'Isoler', sub: 'page de maintenance, rien n’est supprimé', accent: true },
      { label: 'Copier', sub: 'l’état infecté, pour le diagnostic' },
      { label: 'Dater', sub: 'fichiers modifiés, journaux : jour de l’entrée' },
      { label: 'Reconstruire', sub: 'logiciel repris à la source, contenu vérifié' },
      { label: 'Fermer', sub: 'mots de passe, comptes, mises à jour' },
      { label: 'Faire revoir', sub: 'demande de revue, puis surveillance' },
    ], caption: 'Figure 2 · Le temps accentué est le premier : isoler, sans rien supprimer. L’ordre compte : on copie avant de toucher, on date avant de restaurer, on reconstruit avant de rouvrir, et l’on ne demande la revue que lorsque tout le site est propre.', alt: 'Six temps : isoler (accentué), copier, dater, reconstruire, fermer, faire revoir.' },
    chronologie: { caption: 'Figure 3 · L’entrée a lieu le 3 mars ; le premier signe visible arrive le 14 avril, quarante-deux jours plus tard. Entre les deux, une porte dérobée est déposée, des pages de spam sont créées et indexées. Des sauvegardes gardées quatorze jours ont toutes été prises après l’entrée ; parmi des copies hebdomadaires gardées douze semaines, celle du 26 février est saine. Dates et délais sont un exemple construit.' },
    portes: { caption: 'Figure 4 · Six endroits d’un site piraté. Le « nettoyage » habituel supprime la page d’accueil modifiée ; il laisse un fichier de commande à distance caché parmi les images, un compte administrateur inconnu, du code ajouté dans le thème, des liens injectés dans la base et une tâche planifiée qui réinstalle le tout. Emplacements typiques d’un exemple construit.' },
    couches: { title: 'Un site qui reste propre, en cinq couches', layers: [
      { label: 'Mises à jour', items: [{ name: 'Cœur, thème et extensions à jour chaque mois, extensions inutiles retirées, rien hors des sources officielles', sub: 'un composant en retard est une porte dont la clé est publique', accent: true }] },
      { label: 'Comptes', items: [{ name: 'Peu d’administrateurs, un compte par personne, double vérification, comptes fermés au départ', sub: 'le compte de l’agence d’il y a quatre ans n’existe plus' }] },
      { label: 'Hébergement', items: [{ name: 'Compte au nom de l’entreprise, accès aux fichiers chiffré, site séparé des autres sites du même serveur', sub: 'un site voisin piraté ne contamine pas le vôtre' }] },
      { label: 'Sauvegardes', items: [{ name: 'Copie quotidienne et copie hebdomadaire gardée douze semaines, hors du serveur, restauration essayée', sub: 'il existe toujours une copie antérieure à l’entrée' }] },
      { label: 'Surveillance', items: [{ name: 'Alerte sur fichier modifié et sur nouveau compte, console de recherche suivie, contrôle mensuel', sub: 'on l’apprend en un jour, pas en six semaines' }] },
    ], caption: 'Figure 5 · La couche accentuée est la première : des mises à jour faites chaque mois par quelqu’un dont c’est la tâche. Les quatre autres limitent les dégâts quand une mise à jour a manqué : moins de comptes, un hébergement cloisonné, des copies anciennes, et une alerte rapide.', alt: 'Cinq couches : mises à jour (accentuée) ; comptes ; hébergement ; sauvegardes ; surveillance.' },
    calendrier: { title: 'Cinq jours pour rouvrir proprement', unit: 'j', items: [
      { label: 'Isoler et copier', note: 'maintenance, copie de l’état infecté, mots de passe changés depuis un poste sûr, hébergeur et console de recherche consultés', from: 0, to: 1 },
      { label: 'Dater et diagnostiquer', note: 'fichiers modifiés, journaux du serveur, comptes inconnus : date et chemin de l’entrée, choix de la copie saine', from: 1, to: 2 },
      { label: 'Reconstruire', note: 'installation propre, logiciel repris à la source, contenu et images vérifiés puis remis, extensions réduites au nécessaire', from: 2, to: 4, accent: true },
      { label: 'Rouvrir et faire revoir', note: 'remise en ligne, demande de revue auprès du moteur de recherche, surveillance des fichiers pendant un mois', from: 4, to: 5 },
    ], caption: 'Figure 6 · Cinq jours dans l’exemple, après la première heure. La période accentuée est la reconstruction : deux jours pour repartir d’une installation propre et n’y remettre que du contenu vérifié. L’avertissement des moteurs de recherche peut rester plus longtemps, le temps de leur revue.', alt: 'Calendrier de cinq jours : isoler et copier, dater et diagnostiquer, reconstruire (accentué, deux jours), rouvrir et faire revoir.' },
  },
  en: {
    cover: { eyebrow: 'Hacked website · Algeria · 2027', title: ['Hacked website: what to do', 'the first hour, then five days'], subtitle: 'Isolate without deleting, date the entry, rebuild clean, close the door, get the warning lifted', left: { label: 'Cleaned in a hurry', sub: 'taken again the next week' }, right: { label: 'Rebuilt clean', sub: 'and the door is closed' } },
    signes: { title: 'Six signs of a hacked site, and the first action', columns: ['What it means', 'The first action'], rows: [
      { label: 'Home page replaced', cells: ['someone is writing into the site’s files', 'switch to maintenance, delete nothing'] },
      { label: 'Redirect to another site', cells: ['code was added, sometimes only for visitors coming from a search engine', 'check from a phone and from a search'] },
      { label: 'Red warning in the browser', cells: ['the site is on a list of dangerous sites', 'note the exact message, open the search console'] },
      { label: '“This site may be hacked”', cells: ['the search engine saw pages that are not yours', 'read the security report, list the addresses quoted'] },
      { label: 'Unknown pages in the results', cells: ['spam is published under your domain name', 'search for your domain name, copy the addresses'] },
      { label: 'Host suspending the account', cells: ['it detected spam being sent or a malicious file', 'ask for its report and the date of detection'] },
    ], caption: 'Figure 1 · Six signs, from the most visible to the most discreet. The first two show on the site; the next three show at other people’s end, browser or search engine; the last arrives in an email from the host. In every case the first action is the same: isolate the site without deleting anything, and note what you see.', alt: 'Matrix of six signs of a hacked site, with what they mean and the first action: page replaced, redirect, browser warning, label in search results, unknown pages, account suspended by the host.' },
    etapes: { title: 'Putting a site back in order, in six steps', items: [
      { label: 'Isolate', sub: 'maintenance page, nothing is deleted', accent: true },
      { label: 'Copy', sub: 'the infected state, for the diagnosis' },
      { label: 'Date', sub: 'modified files, logs: the day of entry' },
      { label: 'Rebuild', sub: 'software from the source, content checked' },
      { label: 'Close', sub: 'passwords, accounts, updates' },
      { label: 'Get it reviewed', sub: 'review request, then monitoring' },
    ], caption: 'Figure 2 · The accented step is the first: isolate, without deleting anything. The order matters: you copy before touching, date before restoring, rebuild before reopening, and only ask for the review when the whole site is clean.', alt: 'Six steps: isolate (accented), copy, date, rebuild, close, get it reviewed.' },
    chronologie: { caption: 'Figure 3 · The entry takes place on 3 March; the first visible sign comes on 14 April, forty-two days later. In between, a backdoor is planted, spam pages are created and indexed. Backups kept fourteen days were all taken after the entry; among weekly copies kept twelve weeks, the one from 26 February is clean. Dates and delays are a constructed example.' },
    portes: { caption: 'Figure 4 · Six places in a hacked site. The usual “clean-up” deletes the modified home page; it leaves a remote-command file hidden among the images, an unknown administrator account, code added to the theme, links injected into the database and a scheduled task that reinstalls everything. Typical places from a constructed example.' },
    couches: { title: 'A site that stays clean, in five layers', layers: [
      { label: 'Updates', items: [{ name: 'Core, theme and plugins updated every month, unused plugins removed, nothing from outside the official sources', sub: 'a component left behind is a door whose key is public', accent: true }] },
      { label: 'Accounts', items: [{ name: 'Few administrators, one account per person, two-step verification, accounts closed when people leave', sub: 'the account of the agency from four years ago no longer exists' }] },
      { label: 'Hosting', items: [{ name: 'Account in the company’s name, encrypted file access, site separated from the other sites on the server', sub: 'a hacked neighbouring site does not contaminate yours' }] },
      { label: 'Backups', items: [{ name: 'Daily copy and weekly copy kept twelve weeks, off the server, restore tried', sub: 'there is always a copy from before the entry' }] },
      { label: 'Monitoring', items: [{ name: 'Alert on a modified file and on a new account, search console followed, monthly check', sub: 'you find out in a day, not in six weeks' }] },
    ], caption: 'Figure 5 · The accented layer is the first: updates done every month by someone whose task it is. The other four limit the damage when an update was missed: fewer accounts, partitioned hosting, older copies, and a fast alert.', alt: 'Five layers: updates (accented); accounts; hosting; backups; monitoring.' },
    calendrier: { title: 'Five days to reopen cleanly', unit: 'd', items: [
      { label: 'Isolate and copy', note: 'maintenance, copy of the infected state, passwords changed from a safe computer, host and search console checked', from: 0, to: 1 },
      { label: 'Date and diagnose', note: 'modified files, server logs, unknown accounts: date and path of the entry, choice of the clean copy', from: 1, to: 2 },
      { label: 'Rebuild', note: 'clean installation, software taken from the source, content and images checked then put back, plugins cut to what is needed', from: 2, to: 4, accent: true },
      { label: 'Reopen and get it reviewed', note: 'back online, review request to the search engine, files watched for a month', from: 4, to: 5 },
    ], caption: 'Figure 6 · Five days in the example, after the first hour. The accented period is the rebuild: two days to start again from a clean installation and put back only checked content. The search engines’ warning may stay longer, for the time of their review.', alt: 'Five-day calendar: isolate and copy, date and diagnose, rebuild (accented, two days), reopen and get it reviewed.' },
  },
  ar: {
    cover: { eyebrow: 'موقع مخترَق · الجزائر · 2027', title: ['موقع مخترَق، ما العمل', 'الساعة الأولى، ثم خمسة أيام'], subtitle: 'العزل دون حذف شيء، تأريخ الدخول، إعادة البناء نظيفاً، إغلاق الباب، ورفع التحذير', left: { label: 'نُظِّف على عجل', sub: 'استُعيد في الأسبوع الموالي' }, right: { label: 'أُعيد بناؤه نظيفاً', sub: 'والباب أُغلق' } },
    signes: { title: 'ست علامات لموقع مخترَق، والحركة الأولى', columns: ['ما معناها', 'الحركة الأولى'], rows: [
      { label: 'الصفحة الرئيسية مستبدَلة', cells: ['أحدهم يكتب في ملفات الموقع', 'وضع الصيانة، دون حذف شيء'] },
      { label: 'تحويل نحو موقع آخر', cells: ['شيفرة أُضيفت، أحياناً للزوّار القادمين من محرّك بحث فقط', 'التحقق من هاتف ومن بحث'] },
      { label: 'تحذير أحمر في المتصفح', cells: ['الموقع في قائمة المواقع الخطيرة', 'تسجيل الرسالة بالضبط، وفتح لوحة البحث'] },
      { label: '«قد يكون هذا الموقع مخترَقاً»', cells: ['محرّك البحث رأى صفحات ليست لكم', 'قراءة تقرير الأمن، وتسجيل العناوين المذكورة'] },
      { label: 'صفحات مجهولة في النتائج', cells: ['صفحات مزعجة تُنشر باسم نطاقكم', 'البحث باسم نطاقكم، ونسخ العناوين'] },
      { label: 'المستضيف يوقف الحساب', cells: ['اكتشف إرسال رسائل مزعجة أو ملفاً خبيثاً', 'طلب تقريره وتاريخ الاكتشاف'] },
    ], caption: 'الشكل 1 · ست علامات، من الأظهر إلى الأخفى. الأوليان تُريان على الموقع؛ والثلاث الموالية تُرى عند الآخرين، المتصفح أو محرّك البحث؛ والأخيرة تصل في رسالة من المستضيف. وفي كل الحالات الحركة الأولى واحدة: عزل الموقع دون حذف شيء، وتسجيل ما نراه.', alt: 'مصفوفة ست علامات لموقع مخترَق، مع معناها والحركة الأولى: صفحة مستبدَلة، تحويل، تحذير المتصفح، عبارة في نتائج البحث، صفحات مجهولة، وحساب أوقفه المستضيف.' },
    etapes: { title: 'إعادة موقع إلى حاله، في ست مراحل', items: [
      { label: 'العزل', sub: 'صفحة صيانة، ولا شيء يُحذف', accent: true },
      { label: 'النسخ', sub: 'الحالة المصابة، من أجل التشخيص' },
      { label: 'التأريخ', sub: 'الملفات المعدَّلة والسجلات: يوم الدخول' },
      { label: 'إعادة البناء', sub: 'برمجيات من المصدر، ومحتوى مراجَع' },
      { label: 'الإغلاق', sub: 'كلمات المرور، الحسابات، والتحديثات' },
      { label: 'طلب المراجعة', sub: 'طلب مراجعة، ثم مراقبة' },
    ], caption: 'الشكل 2 · المرحلة المبرزة هي الأولى: العزل، دون حذف شيء. والترتيب مهم: ننسخ قبل أن نلمس، نؤرّخ قبل أن نسترجع، نعيد البناء قبل أن نفتح، ولا نطلب المراجعة إلا حين يكون الموقع كله نظيفاً.', alt: 'ست مراحل: العزل (مبرزة)، النسخ، التأريخ، إعادة البناء، الإغلاق، طلب المراجعة.' },
    chronologie: { caption: 'الشكل 3 · الدخول يقع يوم 3 مارس؛ وأول علامة ظاهرة تأتي يوم 14 أفريل، بعد اثنين وأربعين يوماً. وبينهما يوضع باب خلفي، وتُنشأ صفحات مزعجة وتُفهرَس. النسخ الاحتياطية المحفوظة أربعة عشر يوماً أُخذت كلها بعد الدخول؛ ومن النسخ الأسبوعية المحفوظة اثني عشر أسبوعاً، نسخة 26 فيفري سليمة. التواريخ والآجال مثال مركَّب.' },
    portes: { caption: 'الشكل 4 · ستة مواضع في موقع مخترَق. «التنظيف» المعتاد يحذف الصفحة الرئيسية المعدَّلة؛ ويترك ملف تحكّم عن بعد مخبَّأ بين الصور، حساب مسؤول مجهولاً، شيفرة مضافة في القالب، روابط محقونة في القاعدة، ومهمة مجدوَلة تعيد تنصيب كل شيء. مواضع نموذجية لمثال مركَّب.' },
    couches: { title: 'موقع يبقى نظيفاً، في خمس طبقات', layers: [
      { label: 'التحديثات', items: [{ name: 'النواة والقالب والإضافات محدَّثة كل شهر، الإضافات غير اللازمة مسحوبة، ولا شيء من خارج المصادر الرسمية', sub: 'المكوّن المتأخر باب مفتاحه معلَن', accent: true }] },
      { label: 'الحسابات', items: [{ name: 'مسؤولون قليلون، حساب لكل شخص، تحقق بخطوتين، وحسابات تُغلق عند المغادرة', sub: 'حساب الوكالة قبل أربع سنوات لم يعد موجوداً' }] },
      { label: 'الاستضافة', items: [{ name: 'حساب باسم المؤسسة، وصول مشفَّر إلى الملفات، وموقع مفصول عن المواقع الأخرى في الخادم', sub: 'موقع مجاور مخترَق لا يعدي موقعكم' }] },
      { label: 'النسخ الاحتياطية', items: [{ name: 'نسخة يومية ونسخة أسبوعية تُحفظ اثني عشر أسبوعاً، خارج الخادم، واسترجاع مجرَّب', sub: 'توجد دائماً نسخة سابقة للدخول' }] },
      { label: 'المراقبة', items: [{ name: 'تنبيه عند تعديل ملف وعند حساب جديد، متابعة لوحة البحث، ومراقبة شهرية', sub: 'نعلم في يوم، لا في ستة أسابيع' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الأولى: تحديثات يُنجزها كل شهر شخص هي مهمته. والأربع الأخرى تحدّ من الأضرار حين يفوت تحديث: حسابات أقل، استضافة مفصولة، نسخ أقدم، وتنبيه سريع.', alt: 'خمس طبقات: التحديثات (مبرزة)؛ الحسابات؛ الاستضافة؛ النسخ الاحتياطية؛ المراقبة.' },
    calendrier: { title: 'خمسة أيام لإعادة الفتح نظيفاً', unit: 'يوم', items: [
      { label: 'العزل والنسخ', note: 'صيانة، نسخة من الحالة المصابة، كلمات مرور تُغيَّر من حاسوب آمن، ومراجعة المستضيف ولوحة البحث', from: 0, to: 1 },
      { label: 'التأريخ والتشخيص', note: 'الملفات المعدَّلة، سجلات الخادم، الحسابات المجهولة: تاريخ ومسار الدخول، واختيار النسخة السليمة', from: 1, to: 2 },
      { label: 'إعادة البناء', note: 'تنصيب نظيف، برمجيات من المصدر، محتوى وصور تُراجَع ثم تُعاد، وإضافات تُقلَّص إلى الضروري', from: 2, to: 4, accent: true },
      { label: 'الفتح وطلب المراجعة', note: 'العودة إلى الخدمة، طلب مراجعة لدى محرّك البحث، ومراقبة الملفات مدة شهر', from: 4, to: 5 },
    ], caption: 'الشكل 6 · خمسة أيام في المثال، بعد الساعة الأولى. الفترة المبرزة هي إعادة البناء: يومان للانطلاق من تنصيب نظيف وإعادة المحتوى المراجَع وحده. وتحذير محرّكات البحث قد يبقى أطول، مدة مراجعتها.', alt: 'تقويم خمسة أيام: العزل والنسخ، التأريخ والتشخيص، إعادة البناء (مبرزة، يومان)، الفتح وطلب المراجعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      signes: { svg: matrix({ title: t.signes.title, columns: t.signes.columns, rows: t.signes.rows, rtl }), caption: t.signes.caption, alt: t.signes.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      chronologie: { svg: chronologie(e.chronologie, rtl), caption: t.chronologie.caption, alt: e.chronologie.alt },
      portes: { svg: portes(e.portes, rtl), caption: t.portes.caption, alt: e.portes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 5, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
