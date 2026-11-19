import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { essai, nom, STRINGS as SC } from './custom/archive.mjs';
export const slug = 'comment-archiver-des-documents-en-entreprise-en-algerie-2027-papier-et-numerique-plan-de-classement-nom-des-fichiers-numerisation-recherche';
const T = {
  fr: {
    cover: { eyebrow: 'Archivage des documents · Algérie · 2027', title: ['Comment archiver des documents', 'les retrouver en une minute'], subtitle: 'Un essai de dix documents, un nom construit, le papier trié en trois piles, la recherche dans le texte', left: { label: 'Armoires et « scan0001 »', sub: 'une demi-journée de recherche' }, right: { label: 'Classé, nommé, indexé', sub: 'retrouvé en une minute' } },
    essai: { caption: 'Figure 1 · Dix documents tirés au hasard, demandés un par un. Avant, sept sont retrouvés, en onze minutes en moyenne, et trois ne le sont jamais. Après classement, nommage et index, les dix sont retrouvés, chacun en moins d’une minute. Même échelle des deux côtés. Exemple construit.' },
    nom: { caption: 'Figure 2 · Le même document sous quatre noms. Les trois premiers ne disent rien et ne se cherchent pas. Le quatrième est construit en cinq parties, toujours dans le même ordre : date, type, tiers, numéro, version. Codes et numéros fictifs.' },
    couches: { title: 'Une archive, en cinq couches', layers: [
      { label: 'Entrée', items: [{ name: 'L’entrée : un seul endroit où un document arrive, numérisé ou reçu, avant d’être classé', sub: 'rien ne se range directement « quelque part »' }] },
      { label: 'Fiche', items: [{ name: 'Le nom et la fiche : type, date, tiers, numéro, avec les mêmes mots pour tout le monde', sub: 'la couche qui fait qu’on retrouve', accent: true }] },
      { label: 'Recherche', items: [{ name: 'La recherche : par type, par tiers, par date, par numéro, et par les mots du texte lui-même', sub: 'y compris dans les pages numérisées' }] },
      { label: 'Droits', items: [{ name: 'Les droits : qui voit quoi, qui peut modifier, qui a consulté, dossier par dossier', sub: 'un contrat de travail n’est pas un bon de livraison' }] },
      { label: 'Durée', items: [{ name: 'La durée : une copie ailleurs, un format encore lisible dans dix ans, une durée de garde par type', sub: 'archiver, c’est aussi savoir quand sortir' }] },
    ], caption: 'Figure 3 · La couche accentuée est la fiche : le nom et les quelques informations qui décrivent le document. Sans elle, une archive numérique n’est qu’une armoire de plus, plus rapide à remplir et tout aussi lente à fouiller.', alt: 'Cinq couches : l’entrée ; le nom et la fiche (accentuée) ; la recherche ; les droits ; la durée.' },
    etapes: { title: 'Numériser le papier, en six temps', items: [
      { label: 'Trier', sub: 'trois piles : actif, à garder, à sortir', accent: true },
      { label: 'Préparer', sub: 'agrafes ôtées, pages dans l’ordre' },
      { label: 'Numériser', sub: 'par lots, à 300 points par pouce' },
      { label: 'Lire', sub: 'le texte des pages, reconnu' },
      { label: 'Indexer', sub: 'type, date, tiers, numéro' },
      { label: 'Contrôler', sub: 'un lot sur dix, puis la boîte numérotée' },
    ], caption: 'Figure 4 · Le temps accentué est le premier : trier. On ne numérise pas une armoire, on numérise la pile active. Le papier que l’on doit garder va en boîtes numérotées, avec le numéro de boîte inscrit dans la fiche du document.', alt: 'Six temps : trier (accentué), préparer, numériser, lire, indexer, contrôler.' },
    outil: { title: 'Dossier partagé bien tenu, ou outil d’archivage : six points', columns: ['Un dossier partagé bien tenu suffit', 'Un outil d’archivage devient utile'], rows: [
      { label: 'Le volume', cells: ['quelques milliers de fichiers', 'des dizaines de milliers, et il en arrive chaque jour'] },
      { label: 'La recherche', cells: ['par le nom du fichier', 'dans le texte des pages numérisées'] },
      { label: 'Les droits', cells: ['par dossier, pour quelques équipes', 'par type de document et par personne'] },
      { label: 'Les versions', cells: ['v1, v2 dans le nom, et cela suffit', 'un historique tenu par l’outil'] },
      { label: 'Le papier', cells: ['peu de papier, quelques classeurs', 'des armoires à numériser et à indexer'] },
      { label: 'La trace', cells: ['personne ne demande qui a ouvert quoi', 'il faut savoir qui a consulté et modifié'] },
    ], caption: 'Figure 5 · Six points pour décider. Un plan de classement et une règle de nommage, appliqués à un dossier partagé, règlent déjà beaucoup. L’outil d’archivage se justifie quand deux lignes ou plus tombent dans la seconde colonne.', alt: 'Matrice de six points : le volume, la recherche, les droits, les versions, le papier, la trace ; pour chacun, le cas où un dossier partagé bien tenu suffit et le cas où un outil d’archivage devient utile.' },
    calendrier: { title: 'Huit semaines, du premier essai au second', unit: 'sem.', items: [
      { label: 'Essai et inventaire', note: 'dix documents chronométrés, types de documents listés, armoires et dossiers comptés', from: 0, to: 1, accent: true },
      { label: 'Plan et règle de nommage', note: 'dix à quinze types, l’arborescence, la règle sur une demi-page, les droits par dossier', from: 1, to: 2 },
      { label: 'Ranger le numérique', note: 'le dossier partagé repris par lots : renommer, déplacer, dédoublonner', from: 2, to: 5 },
      { label: 'Numériser le papier actif', note: 'tri en trois piles, puis 2 000 pages par jour : numériser, lire, indexer, contrôler', from: 3, to: 7 },
      { label: 'Recherche, droits, copie', note: 'recherche dans le texte, accès par type de document, seconde copie hors du bâtiment', from: 5, to: 7 },
      { label: 'Second essai', note: 'les mêmes dix documents, le même chronomètre ; la règle affichée et un responsable nommé', from: 7, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple. La période accentuée est la première : l’essai et l’inventaire. Le numérique se range pendant que le papier actif se numérise ; le second essai, avec les mêmes dix documents, clôt le projet. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : essai et inventaire (accentué), plan et règle de nommage, ranger le numérique, numériser le papier actif, recherche et droits et copie, second essai.' },
  },
  en: {
    cover: { eyebrow: 'Document archiving · Algeria · 2027', title: ['How to archive documents', 'and find them in a minute'], subtitle: 'A test of ten documents, a built name, paper sorted into three piles, search inside the text', left: { label: 'Cabinets, “scan0001”', sub: 'half a day of searching' }, right: { label: 'Filed, named, indexed', sub: 'found in a minute' } },
    essai: { caption: 'Figure 1 · Ten documents drawn at random, asked for one by one. Before, seven are found, in eleven minutes on average, and three never are. After filing, naming and indexing, all ten are found, each in under a minute. Same scale on both sides. Constructed example.' },
    nom: { caption: 'Figure 2 · The same document under four names. The first three say nothing and cannot be searched. The fourth is built in five parts, always in the same order: date, type, third party, number, version. Fictitious codes and numbers.' },
    couches: { title: 'An archive, in five layers', layers: [
      { label: 'Entry', items: [{ name: 'Entry: a single place where a document arrives, scanned or received, before it is filed', sub: 'nothing is put away directly “somewhere”' }] },
      { label: 'Record', items: [{ name: 'The name and the record: type, date, third party, number, with the same words for everyone', sub: 'the layer that makes things findable', accent: true }] },
      { label: 'Search', items: [{ name: 'Search: by type, by third party, by date, by number, and by the words of the text itself', sub: 'including inside scanned pages' }] },
      { label: 'Rights', items: [{ name: 'Rights: who sees what, who may change, who has consulted, folder by folder', sub: 'an employment contract is not a delivery note' }] },
      { label: 'Time', items: [{ name: 'Time: a copy elsewhere, a format still readable in ten years, a keeping period per type', sub: 'archiving also means knowing when to remove' }] },
    ], caption: 'Figure 3 · The accented layer is the record: the name and the few pieces of information that describe the document. Without it, a digital archive is just one more cabinet, faster to fill and just as slow to search.', alt: 'Five layers: entry; the name and the record (accented); search; rights; time.' },
    etapes: { title: 'Scanning the paper, in six steps', items: [
      { label: 'Sort', sub: 'three piles: active, to keep, to remove', accent: true },
      { label: 'Prepare', sub: 'staples out, pages in order' },
      { label: 'Scan', sub: 'in batches, at 300 dots per inch' },
      { label: 'Read', sub: 'the text of the pages, recognised' },
      { label: 'Index', sub: 'type, date, third party, number' },
      { label: 'Check', sub: 'one batch in ten, then the numbered box' },
    ], caption: 'Figure 4 · The accented step is the first: sort. You do not scan a cabinet, you scan the active pile. Paper that must be kept goes into numbered boxes, with the box number written in the document’s record.', alt: 'Six steps: sort (accented), prepare, scan, read, index, check.' },
    outil: { title: 'A well-kept shared folder, or an archiving tool: six points', columns: ['A well-kept shared folder is enough', 'An archiving tool becomes useful'], rows: [
      { label: 'Volume', cells: ['a few thousand files', 'tens of thousands, and more arrive every day'] },
      { label: 'Search', cells: ['by the name of the file', 'inside the text of scanned pages'] },
      { label: 'Rights', cells: ['by folder, for a few teams', 'by type of document and by person'] },
      { label: 'Versions', cells: ['v1, v2 in the name, and that is enough', 'a history kept by the tool'] },
      { label: 'Paper', cells: ['little paper, a few binders', 'cabinets to scan and index'] },
      { label: 'Trace', cells: ['nobody asks who opened what', 'you must know who consulted and changed'] },
    ], caption: 'Figure 5 · Six points to decide. A filing plan and a naming rule, applied to a shared folder, already settle a great deal. An archiving tool is justified when two or more rows fall in the second column.', alt: 'Matrix of six points: volume, search, rights, versions, paper, trace; for each, the case where a well-kept shared folder is enough and the case where an archiving tool becomes useful.' },
    calendrier: { title: 'Eight weeks, from the first test to the second', unit: 'wk', items: [
      { label: 'Test and inventory', note: 'ten documents timed, types of document listed, cabinets and folders counted', from: 0, to: 1, accent: true },
      { label: 'Plan and naming rule', note: 'ten to fifteen types, the folder tree, the rule on half a page, rights by folder', from: 1, to: 2 },
      { label: 'Tidy the digital files', note: 'the shared folder taken up in batches: rename, move, remove duplicates', from: 2, to: 5 },
      { label: 'Scan the active paper', note: 'sorting into three piles, then 2,000 pages a day: scan, read, index, check', from: 3, to: 7 },
      { label: 'Search, rights, copy', note: 'search inside the text, access by type of document, a second copy outside the building', from: 5, to: 7 },
      { label: 'Second test', note: 'the same ten documents, the same stopwatch; the rule displayed and an owner named', from: 7, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example. The accented period is the first: the test and the inventory. Digital files are tidied while the active paper is scanned; the second test, with the same ten documents, closes the project. Indicative durations of a constructed example.', alt: 'Eight-week calendar: test and inventory (accented), plan and naming rule, tidy the digital files, scan the active paper, search and rights and copy, second test.' },
  },
  ar: {
    cover: { eyebrow: 'أرشفة الوثائق · الجزائر · 2027', title: ['كيف تُؤرشَف الوثائق', 'وتُسترجع في دقيقة'], subtitle: 'تجربة بعشر وثائق، اسم مبني، ورق يُفرز في ثلاث أكوام، وبحث داخل النص', left: { label: 'خزائن وأسماء آلية', sub: 'نصف يوم من البحث' }, right: { label: 'مرتَّبة ومفهرسة', sub: 'تُوجد في دقيقة' } },
    essai: { caption: 'الشكل 1 · عشر وثائق مسحوبة عشوائياً، تُطلب واحدة واحدة. قبل، سبع تُوجد، في إحدى عشرة دقيقة في المتوسط، وثلاث لا تُوجد أبداً. وبعد الترتيب والتسمية والفهرسة، العشر تُوجد كلها، كل واحدة في أقل من دقيقة. السلّم نفسه في الجهتين. مثال مركَّب.' },
    nom: { caption: 'الشكل 2 · الوثيقة نفسها بأربعة أسماء. الثلاثة الأولى لا تقول شيئاً ولا يُبحث عنها. والرابع مبني من خمسة أجزاء، دائماً بالترتيب نفسه: التاريخ، النوع، الطرف، الرقم، والنسخة. رموز وأرقام خيالية.' },
    couches: { title: 'الأرشيف، في خمس طبقات', layers: [
      { label: 'الدخول', items: [{ name: 'الدخول: مكان واحد تصل إليه الوثيقة، ممسوحة أو مستلَمة، قبل أن تُرتَّب', sub: 'لا شيء يُوضع مباشرة «في مكان ما»' }] },
      { label: 'البطاقة', items: [{ name: 'الاسم والبطاقة: النوع، التاريخ، الطرف، والرقم، بالكلمات نفسها للجميع', sub: 'الطبقة التي تجعل الوثيقة تُوجد', accent: true }] },
      { label: 'البحث', items: [{ name: 'البحث: بالنوع، بالطرف، بالتاريخ، بالرقم، وبكلمات النص نفسه', sub: 'حتى داخل الصفحات الممسوحة' }] },
      { label: 'الصلاحيات', items: [{ name: 'الصلاحيات: من يرى ماذا، من يعدّل، ومن اطّلع، مجلداً بعد مجلد', sub: 'عقد العمل ليس وصل تسليم' }] },
      { label: 'المدة', items: [{ name: 'المدة: نسخة في مكان آخر، صيغة تُقرأ بعد عشر سنوات، ومدة حفظ لكل نوع', sub: 'الأرشفة تعني كذلك معرفة متى تُخرَج الوثيقة' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي البطاقة: الاسم والمعلومات القليلة التي تصف الوثيقة. ودونها، الأرشيف الرقمي ليس إلا خزانة إضافية، أسرع في الملء وبالبطء نفسه في البحث.', alt: 'خمس طبقات: الدخول؛ الاسم والبطاقة (مبرزة)؛ البحث؛ الصلاحيات؛ والمدة.' },
    etapes: { title: 'رقمنة الورق، في ست مراحل', items: [
      { label: 'الفرز', sub: 'ثلاث أكوام: نشِط، يُحفظ، يُخرَج', accent: true },
      { label: 'التحضير', sub: 'نزع المشابك، وترتيب الصفحات' },
      { label: 'المسح', sub: 'على دفعات، بدقة 300 نقطة في البوصة' },
      { label: 'القراءة', sub: 'نص الصفحات، بالتعرّف الآلي' },
      { label: 'الفهرسة', sub: 'النوع، التاريخ، الطرف، والرقم' },
      { label: 'المراقبة', sub: 'دفعة من عشر، ثم العلبة المرقَّمة' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الأولى: الفرز. لا تُرقمَن خزانة، بل تُرقمَن الكومة النشِطة. والورق الذي يجب حفظه يذهب إلى علب مرقَّمة، ورقم العلبة يُكتب في بطاقة الوثيقة.', alt: 'ست مراحل: الفرز (مبرزة)، التحضير، المسح، القراءة، الفهرسة، والمراقبة.' },
    outil: { title: 'مجلد مشترك محكم، أم أداة أرشفة: ست نقاط', columns: ['مجلد مشترك محكم يكفي', 'أداة الأرشفة تصير نافعة'], rows: [
      { label: 'الحجم', cells: ['بضعة آلاف من الملفات', 'عشرات الآلاف، ويصل منها كل يوم'] },
      { label: 'البحث', cells: ['باسم الملف', 'داخل نص الصفحات الممسوحة'] },
      { label: 'الصلاحيات', cells: ['حسب المجلد، لبضع فرق', 'حسب نوع الوثيقة وحسب الشخص'] },
      { label: 'النسخ', cells: ['رقم النسخة في الاسم، ويكفي', 'تاريخ تمسكه الأداة'] },
      { label: 'الورق', cells: ['ورق قليل، وبضعة ملفات', 'خزائن تُرقمَن وتُفهرَس'] },
      { label: 'الأثر', cells: ['لا أحد يسأل من فتح ماذا', 'يجب معرفة من اطّلع ومن عدّل'] },
    ], caption: 'الشكل 5 · ست نقاط للقرار. خطة تصنيف وقاعدة تسمية، مطبَّقتان على مجلد مشترك، تحلّان الكثير. وأداة الأرشفة تتبرَّر حين يقع سطران أو أكثر في العمود الثاني.', alt: 'مصفوفة من ست نقاط: الحجم، البحث، الصلاحيات، النسخ، الورق، والأثر؛ ولكل واحدة، الحالة التي يكفي فيها مجلد مشترك محكم والحالة التي تصير فيها أداة الأرشفة نافعة.' },
    calendrier: { title: 'ثمانية أسابيع، من التجربة الأولى إلى الثانية', unit: 'أسبوع', items: [
      { label: 'التجربة والجرد', note: 'عشر وثائق بالتوقيت، أنواع الوثائق مجرودة، والخزائن والمجلدات معدودة', from: 0, to: 1, accent: true },
      { label: 'الخطة وقاعدة التسمية', note: 'من عشرة إلى خمسة عشر نوعاً، شجرة المجلدات، القاعدة في نصف صفحة، والصلاحيات', from: 1, to: 2 },
      { label: 'ترتيب الرقمي', note: 'المجلد المشترك يُعالَج على دفعات: إعادة تسمية، نقل، وحذف المكرَّرات', from: 2, to: 5 },
      { label: 'رقمنة الورق النشِط', note: 'الفرز في ثلاث أكوام، ثم 2000 صفحة في اليوم: مسح، قراءة، فهرسة، ومراقبة', from: 3, to: 7 },
      { label: 'البحث، الصلاحيات، والنسخة', note: 'بحث داخل النص، دخول حسب نوع الوثيقة، ونسخة ثانية خارج المبنى', from: 5, to: 7 },
      { label: 'التجربة الثانية', note: 'الوثائق العشر نفسها، وساعة التوقيت نفسها؛ القاعدة معلَّقة ومسؤول معيَّن', from: 7, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال. الفترة المبرزة هي الأولى: التجربة والجرد. الرقمي يُرتَّب بينما يُرقمَن الورق النشِط؛ والتجربة الثانية، بالوثائق العشر نفسها، تختم المشروع. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: التجربة والجرد (مبرزة)، الخطة وقاعدة التسمية، ترتيب الرقمي، رقمنة الورق النشِط، البحث والصلاحيات والنسخة، ثم التجربة الثانية.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      essai: { svg: essai(e.essai, rtl), caption: t.essai.caption, alt: e.essai.alt },
      nom: { svg: nom(e.nom, rtl), caption: t.nom.caption, alt: e.nom.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      outil: { svg: matrix({ title: t.outil.title, columns: t.outil.columns, rows: t.outil.rows, rtl }), caption: t.outil.caption, alt: t.outil.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
