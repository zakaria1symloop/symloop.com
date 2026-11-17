import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { versions, course, STRINGS as SC } from './custom/fichiers.mjs';
export const slug = 'partage-de-fichiers-entreprise-algerie-2027-serveur-de-fichiers-nas-ou-cloud-droits-par-dossier-versions-acces-a-distance';
const T = {
  fr: {
    cover: { eyebrow: 'Partage de fichiers · Algérie · 2027', title: ['Partage de fichiers en entreprise', 'serveur, NAS ou cloud'], subtitle: 'Un endroit par fichier, des droits par dossier, des versions, un accès de l’extérieur, une sauvegarde à part', left: { label: 'Des fichiers partout', sub: 'sept copies du même devis' }, right: { label: 'Un seul espace', sub: 'le bon fichier, pour tout le monde' } },
    versions: { caption: 'Figure 1 · Un devis modifié quatre fois en neuf jours se retrouve à sept endroits, sous cinq noms : un poste, une boîte mail, WhatsApp, une clé USB, un autre poste, l’ancien serveur, un téléphone. À droite, le même devis dans un espace partagé : un seul fichier, quatre versions, chacune avec son auteur et sa date. Dans Microsoft 365, l’historique garde par défaut les 500 dernières versions, et un fichier supprimé se restaure pendant 93 jours sur un compte professionnel. Noms et dates sont un exemple construit.' },
    course: { caption: 'Figure 2 · Le même fichier de 200 Mo part d’un poste vers un espace partagé. Sur le réseau du bureau, environ 2 secondes. Vers un espace en ligne, le temps dépend du débit montant du bureau : 32 secondes à 50 Mbit/s, 2 minutes 40 à 10, 13 minutes 20 à 2. En bas, le temps pour déménager 300 Go : de 13 heures à près de 14 jours. Temps théoriques d’un exemple construit ; une ligne partagée fait moins bien.' },
    comparatif: { title: 'Au bureau ou en ligne : six critères', columns: ['Au bureau, serveur ou NAS', 'En ligne, espace partagé'], rows: [
      { label: 'Fichiers lourds', cells: ['ouverts en secondes sur le réseau du bureau', 'dépend du débit montant, minutes par fichier si la ligne est faible'] },
      { label: 'Hors du bureau', cells: ['par un tunnel chiffré, jamais par un port ouvert', 'depuis n’importe où, avec le compte et la double vérification'] },
      { label: 'Plusieurs sites', cells: ['chaque agence traverse la liaison vers le siège', 'tous les sites au même niveau, sans passer par le siège'] },
      { label: 'Quand internet coupe', cells: ['le bureau continue de travailler', 'seuls les fichiers déjà synchronisés restent ouverts'] },
      { label: 'Versions et corbeille', cells: ['à régler, instantanés et corbeille du partage', 'incluses, avec des durées par défaut à connaître'] },
      { label: 'Qui l’entretient', cells: ['vous, pour les disques, les mises à jour et l’onduleur', 'le fournisseur pour le service, vous pour les droits et la sauvegarde'] },
    ], caption: 'Figure 3 · Les deux lieux ne s’excluent pas. Le bureau gagne sur les fichiers lourds et les coupures d’internet ; l’espace en ligne gagne sur les sites multiples et le travail à distance. Beaucoup d’entreprises gardent les fichiers lourds au bureau et les documents courants en ligne, avec une sauvegarde indépendante des deux.', alt: 'Matrice de six critères comparant un serveur de fichiers ou un NAS au bureau et un espace partagé en ligne : fichiers lourds, accès hors du bureau, plusieurs sites, coupure d’internet, versions et corbeille, entretien.' },
    couches: { title: 'Des fichiers bien partagés, en cinq couches', layers: [
      { label: 'Arborescence', items: [{ name: 'Un dossier par service et par projet, jamais par personne, avec une règle de nommage courte', sub: 'un fichier a une seule adresse, que tout le monde connaît' }] },
      { label: 'Droits', items: [{ name: 'Des groupes par service, des droits donnés aux groupes, la lecture seule par défaut hors de son service', sub: 'quand quelqu’un change de poste, on change son groupe, pas cent dossiers' }] },
      { label: 'Versions et corbeille', items: [{ name: 'Historique des versions, corbeille de l’espace, instantanés réguliers pour revenir à la veille', sub: 'une erreur de manipulation se rattrape sans appeler personne', accent: true }] },
      { label: 'Accès de l’extérieur', items: [{ name: 'Compte nominatif et double vérification, tunnel chiffré vers le bureau, liens de partage datés', sub: 'aucun appareil de stockage n’est exposé directement sur internet' }] },
      { label: 'Sauvegarde', items: [{ name: 'Une copie indépendante, ailleurs, dont on essaie la restauration, en plus de la synchronisation', sub: 'un fichier supprimé ou chiffré se synchronise aussi' }] },
    ], caption: 'Figure 4 · La couche accentuée est celle des versions et de la corbeille : c’est elle qui rattrape l’erreur de tous les jours. L’arborescence et les droits, au-dessus, disent où est le fichier et qui l’ouvre ; l’accès de l’extérieur et la sauvegarde, en dessous, le rendent disponible et récupérable.', alt: 'Cinq couches : arborescence ; droits ; versions et corbeille (accentuée) ; accès de l’extérieur ; sauvegarde.' },
    gestes: { title: 'Déménager ses fichiers, en six gestes', items: [
      { label: 'Inventorier', sub: 'où sont les fichiers, combien de gigaoctets' },
      { label: 'Trier', sub: 'doublons, dossiers morts, fichiers personnels' },
      { label: 'Dessiner', sub: 'l’arborescence et les groupes, sur une page', accent: true },
      { label: 'Copier', sub: 'service par service, la nuit' },
      { label: 'Vérifier', sub: 'nombre de fichiers, ouverture, droits' },
      { label: 'Fermer', sub: 'anciens emplacements en lecture seule' },
    ], caption: 'Figure 5 · Le geste accentué est le troisième : l’arborescence et les groupes se dessinent sur une page, avec un responsable par service, avant de copier quoi que ce soit. Le dernier geste est celui qu’on oublie : tant que les anciens emplacements restent ouverts, les copies renaissent.', alt: 'Six gestes : inventorier, trier, dessiner (accentué), copier, vérifier, fermer.' },
    calendrier: { title: 'Des fichiers rangés en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Inventaire et mesure', note: 'où sont les fichiers, volume par service, taille des plus lourds, débit montant mesuré au bureau, sans rien déplacer', from: 0, to: 1 },
      { label: 'Arborescence et droits', note: 'dossiers par service et par projet, groupes, règle de nommage, choix du lieu, bureau, en ligne ou les deux', from: 1, to: 2, accent: true },
      { label: 'Déménagement', note: 'copie service par service la nuit, vérification, anciens emplacements en lecture seule, clés USB récupérées', from: 2, to: 3 },
      { label: 'Accès et sauvegarde', note: 'accès de l’extérieur, versions et corbeille réglées, sauvegarde indépendante, restauration essayée', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple, la première sans rien déplacer. La semaine accentuée est celle de l’arborescence et des droits : le choix du lieu, au bureau, en ligne ou les deux, s’y fait à partir du volume et du débit mesurés la première semaine.', alt: 'Calendrier de quatre semaines : inventaire et mesure, arborescence et droits (accentué), déménagement, accès et sauvegarde.' },
  },
  en: {
    cover: { eyebrow: 'File sharing · Algeria · 2027', title: ['File sharing in a company', 'server, NAS or cloud'], subtitle: 'One place per file, rights per folder, versions, access from outside, a separate backup', left: { label: 'Files everywhere', sub: 'seven copies of one quotation' }, right: { label: 'One single space', sub: 'the right file, for everyone' } },
    versions: { caption: 'Figure 1 · A quotation changed four times in nine days ends up in seven places, under five names: a workstation, a mailbox, WhatsApp, a USB key, another workstation, the old server, a phone. On the right, the same quotation in a shared space: one file, four versions, each with its author and date. In Microsoft 365, history keeps the last 500 versions by default, and a deleted file can be restored for 93 days on a work account. Names and dates are a constructed example.' },
    course: { caption: 'Figure 2 · The same 200 MB file leaves a workstation for a shared space. On the office network, about 2 seconds. To an online space, the time depends on the office’s upload rate: 32 seconds at 50 Mbit/s, 2 minutes 40 at 10, 13 minutes 20 at 2. At the bottom, the time to move 300 GB: from 13 hours to almost 14 days. Theoretical times from a constructed example; a shared line does worse.' },
    comparatif: { title: 'At the office or online: six criteria', columns: ['At the office, server or NAS', 'Online, shared space'], rows: [
      { label: 'Heavy files', cells: ['opened in seconds on the office network', 'depends on upload rate, minutes per file if the line is weak'] },
      { label: 'Outside the office', cells: ['through an encrypted tunnel, never an open port', 'from anywhere, with the account and two-step verification'] },
      { label: 'Several sites', cells: ['each branch crosses the link to head office', 'all sites on the same footing, without going through head office'] },
      { label: 'When the internet drops', cells: ['the office keeps working', 'only files already synchronised stay open'] },
      { label: 'Versions and recycle bin', cells: ['to be set up, snapshots and share recycle bin', 'included, with default periods to know'] },
      { label: 'Who maintains it', cells: ['you, for disks, updates and the UPS', 'the provider for the service, you for rights and backup'] },
    ], caption: 'Figure 3 · The two places are not mutually exclusive. The office wins on heavy files and internet outages; the online space wins on multiple sites and remote work. Many companies keep heavy files at the office and everyday documents online, with a backup independent of both.', alt: 'Matrix of six criteria comparing a file server or NAS at the office and a shared space online: heavy files, access outside the office, several sites, internet outage, versions and recycle bin, maintenance.' },
    couches: { title: 'Well-shared files, in five layers', layers: [
      { label: 'Folder tree', items: [{ name: 'One folder per department and per project, never per person, with a short naming rule', sub: 'a file has one address, which everyone knows' }] },
      { label: 'Rights', items: [{ name: 'Groups per department, rights given to groups, read-only by default outside your own department', sub: 'when someone changes job, you change their group, not a hundred folders' }] },
      { label: 'Versions and recycle bin', items: [{ name: 'Version history, the space’s recycle bin, regular snapshots to go back to the day before', sub: 'a handling mistake is undone without calling anyone', accent: true }] },
      { label: 'Access from outside', items: [{ name: 'Named account and two-step verification, encrypted tunnel to the office, sharing links that expire', sub: 'no storage device is exposed directly to the internet' }] },
      { label: 'Backup', items: [{ name: 'An independent copy, elsewhere, whose restore is tried, on top of synchronisation', sub: 'a deleted or encrypted file synchronises too' }] },
    ], caption: 'Figure 4 · The accented layer is versions and the recycle bin: it is what undoes the everyday mistake. The folder tree and rights, above, say where the file is and who opens it; access from outside and backup, below, make it available and recoverable.', alt: 'Five layers: folder tree; rights; versions and recycle bin (accented); access from outside; backup.' },
    gestes: { title: 'Moving your files, in six steps', items: [
      { label: 'Take stock', sub: 'where the files are, how many gigabytes' },
      { label: 'Sort', sub: 'duplicates, dead folders, personal files' },
      { label: 'Draw', sub: 'the folder tree and groups, on one page', accent: true },
      { label: 'Copy', sub: 'department by department, at night' },
      { label: 'Check', sub: 'file count, opening, rights' },
      { label: 'Close', sub: 'old locations set to read-only' },
    ], caption: 'Figure 5 · The accented step is the third: the folder tree and the groups are drawn on one page, with an owner per department, before anything is copied. The last step is the one people forget: as long as the old locations stay open, copies come back.', alt: 'Six steps: take stock, sort, draw (accented), copy, check, close.' },
    calendrier: { title: 'Files in order in 2027, in weeks', unit: 'wk', items: [
      { label: 'Stock-take and measurement', note: 'where the files are, volume per department, size of the heaviest, upload rate measured at the office, nothing moved yet', from: 0, to: 1 },
      { label: 'Folder tree and rights', note: 'folders per department and per project, groups, naming rule, choice of place, office, online or both', from: 1, to: 2, accent: true },
      { label: 'Move', note: 'copy department by department at night, check, old locations read-only, USB keys collected', from: 2, to: 3 },
      { label: 'Access and backup', note: 'access from outside, versions and recycle bin set, independent backup, restore tried', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example, the first with nothing moved. The accented week is the folder tree and rights: the choice of place, office, online or both, is made there from the volume and the rate measured in the first week.', alt: 'Four-week calendar: stock-take and measurement, folder tree and rights (accented), move, access and backup.' },
  },
  ar: {
    cover: { eyebrow: 'مشاركة الملفات · الجزائر · 2027', title: ['مشاركة الملفات في المؤسسة', 'خادم، تخزين شبكي أم سحابة'], subtitle: 'مكان واحد لكل ملف، صلاحيات لكل مجلد، إصدارات، وصول من الخارج، ونسخ احتياطي مستقل', left: { label: 'ملفات في كل مكان', sub: 'سبع نسخ لعرض سعر واحد' }, right: { label: 'فضاء واحد', sub: 'الملف الصحيح، للجميع' } },
    versions: { caption: 'الشكل 1 · عرض سعر عُدِّل أربع مرات في تسعة أيام يوجد في سبعة أماكن، بخمسة أسماء: حاسوب، علبة بريد، واتساب، مفتاح USB، حاسوب آخر، الخادم القديم، وهاتف. وعلى اليسار عرض السعر نفسه في فضاء مشترك: ملف واحد، أربعة إصدارات، لكل واحد صاحبه وتاريخه. وفي ⁦Microsoft 365⁩ يحفظ السجل افتراضياً آخر 500 إصدار، والملف المحذوف يُسترجع خلال 93 يوماً في الحساب المهني. الأسماء والتواريخ مثال مركَّب.' },
    course: { caption: 'الشكل 2 · الملف نفسه، من 200 ميغا، ينطلق من حاسوب نحو فضاء مشترك. على شبكة المكتب، نحو ثانيتين. ونحو فضاء على الإنترنت، يتوقف الوقت على تدفق الرفع في المكتب: 32 ثانية بـ 50 ميغابت في الثانية، دقيقتان و40 ثانية بـ 10، و13 دقيقة و20 ثانية بـ 2. وفي الأسفل الوقت اللازم لترحيل 300 غيغا: من 13 ساعة إلى نحو 14 يوماً. أوقات نظرية لمثال مركَّب؛ والخط المتقاسَم يعطي أقل.' },
    comparatif: { title: 'في المكتب أم على الإنترنت: ستة معايير', columns: ['في المكتب، خادم أو تخزين شبكي', 'على الإنترنت، فضاء مشترك'], rows: [
      { label: 'الملفات الثقيلة', cells: ['تُفتح في ثوانٍ على شبكة المكتب', 'يتوقف على تدفق الرفع، دقائق للملف إذا كان الخط ضعيفاً'] },
      { label: 'خارج المكتب', cells: ['عبر نفق مشفَّر، لا عبر منفذ مفتوح أبداً', 'من أي مكان، بالحساب والتحقق بخطوتين'] },
      { label: 'عدة مواقع', cells: ['كل وكالة تعبر الربط نحو المقر', 'كل المواقع في المستوى نفسه، دون المرور بالمقر'] },
      { label: 'حين ينقطع الإنترنت', cells: ['المكتب يواصل العمل', 'الملفات التي تمت مزامنتها فقط تبقى مفتوحة'] },
      { label: 'الإصدارات وسلة المحذوفات', cells: ['تُضبط، لقطات وسلة محذوفات المجلد المشترك', 'مشمولة، بمدد افتراضية يجب معرفتها'] },
      { label: 'من يصونه', cells: ['أنتم، للأقراص والتحديثات والمموِّج', 'المزوِّد للخدمة، وأنتم للصلاحيات والنسخ الاحتياطي'] },
    ], caption: 'الشكل 3 · المكانان لا يتنافيان. المكتب يتفوق في الملفات الثقيلة وعند انقطاع الإنترنت؛ والفضاء على الإنترنت يتفوق في المواقع المتعددة والعمل عن بعد. ومؤسسات كثيرة تُبقي الملفات الثقيلة في المكتب والوثائق اليومية على الإنترنت، مع نسخ احتياطي مستقل عن الاثنين.', alt: 'مصفوفة ستة معايير تقارن خادم ملفات أو تخزيناً شبكياً في المكتب وفضاءً مشتركاً على الإنترنت: الملفات الثقيلة، الوصول خارج المكتب، عدة مواقع، انقطاع الإنترنت، الإصدارات وسلة المحذوفات، الصيانة.' },
    couches: { title: 'ملفات مشتركة كما يجب، في خمس طبقات', layers: [
      { label: 'هيكل المجلدات', items: [{ name: 'مجلد لكل مصلحة ولكل مشروع، لا لكل شخص أبداً، مع قاعدة تسمية قصيرة', sub: 'للملف عنوان واحد، يعرفه الجميع' }] },
      { label: 'الصلاحيات', items: [{ name: 'مجموعات حسب المصلحة، صلاحيات تُعطى للمجموعات، والقراءة فقط افتراضياً خارج مصلحة كل واحد', sub: 'حين يغيّر أحدهم منصبه نغيّر مجموعته، لا مئة مجلد' }] },
      { label: 'الإصدارات وسلة المحذوفات', items: [{ name: 'سجل الإصدارات، سلة محذوفات الفضاء، ولقطات منتظمة للرجوع إلى الأمس', sub: 'خطأ في التعامل يُتدارَك دون الاتصال بأحد', accent: true }] },
      { label: 'الوصول من الخارج', items: [{ name: 'حساب اسمي وتحقق بخطوتين، نفق مشفَّر نحو المكتب، وروابط مشاركة لها تاريخ انتهاء', sub: 'لا جهاز تخزين معروض مباشرة على الإنترنت' }] },
      { label: 'النسخ الاحتياطي', items: [{ name: 'نسخة مستقلة، في مكان آخر، يُجرَّب استرجاعها، إضافة إلى المزامنة', sub: 'الملف المحذوف أو المشفَّر يتزامن هو كذلك' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي الإصدارات وسلة المحذوفات: هي التي تتدارك خطأ كل يوم. هيكل المجلدات والصلاحيات، فوقها، يقولان أين الملف ومن يفتحه؛ والوصول من الخارج والنسخ الاحتياطي، تحتها، يجعلانه متاحاً وقابلاً للاسترجاع.', alt: 'خمس طبقات: هيكل المجلدات؛ الصلاحيات؛ الإصدارات وسلة المحذوفات (مبرزة)؛ الوصول من الخارج؛ النسخ الاحتياطي.' },
    gestes: { title: 'ترحيل الملفات، في ست خطوات', items: [
      { label: 'الجرد', sub: 'أين الملفات، وكم غيغا' },
      { label: 'الفرز', sub: 'المكرَّر، المجلدات الميتة، الملفات الشخصية' },
      { label: 'الرسم', sub: 'هيكل المجلدات والمجموعات، في صفحة', accent: true },
      { label: 'النسخ', sub: 'مصلحة بمصلحة، في الليل' },
      { label: 'التحقق', sub: 'عدد الملفات، الفتح، الصلاحيات' },
      { label: 'الإغلاق', sub: 'الأماكن القديمة للقراءة فقط' },
    ], caption: 'الشكل 5 · الخطوة المبرزة هي الثالثة: هيكل المجلدات والمجموعات يُرسمان في صفحة، مع مسؤول لكل مصلحة، قبل نسخ أي شيء. والخطوة الأخيرة هي التي تُنسى: ما دامت الأماكن القديمة مفتوحة، تعود النسخ إلى الظهور.', alt: 'ست خطوات: الجرد، الفرز، الرسم (مبرز)، النسخ، التحقق، الإغلاق.' },
    calendrier: { title: 'ملفات مرتَّبة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الجرد والقياس', note: 'أين الملفات، الحجم لكل مصلحة، حجم أثقلها، وتدفق الرفع المقاس في المكتب، دون نقل شيء', from: 0, to: 1 },
      { label: 'الهيكل والصلاحيات', note: 'مجلدات حسب المصلحة والمشروع، مجموعات، قاعدة تسمية، واختيار المكان: المكتب أو الإنترنت أو الاثنان', from: 1, to: 2, accent: true },
      { label: 'الترحيل', note: 'نسخ مصلحة بمصلحة في الليل، تحقق، الأماكن القديمة للقراءة فقط، واسترجاع مفاتيح USB', from: 2, to: 3 },
      { label: 'الوصول والنسخ الاحتياطي', note: 'وصول من الخارج، ضبط الإصدارات وسلة المحذوفات، نسخ احتياطي مستقل، وتجربة استرجاع', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال، الأول دون نقل شيء. الأسبوع المبرز هو الهيكل والصلاحيات: وفيه يُختار المكان، المكتب أو الإنترنت أو الاثنان، انطلاقاً من الحجم والتدفق المقاسَين في الأسبوع الأول.', alt: 'تقويم أربعة أسابيع: الجرد والقياس، الهيكل والصلاحيات (مبرز)، الترحيل، الوصول والنسخ الاحتياطي.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      versions: { svg: versions(e.versions, rtl), caption: t.versions.caption, alt: e.versions.alt },
      course: { svg: course(e.course, rtl), caption: t.course.caption, alt: e.course.alt },
      comparatif: { svg: matrix({ title: t.comparatif.title, columns: t.comparatif.columns, rows: t.comparatif.rows, rtl }), caption: t.comparatif.caption, alt: t.comparatif.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      gestes: { svg: steps({ title: t.gestes.title, steps: t.gestes.items, arrows: true, rtl }), caption: t.gestes.caption, alt: t.gestes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
