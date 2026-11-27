import { cover, steps, matrix, timeline } from '../../lib/visuals/index.mjs';
import { clean, cutover, STRINGS as DM } from './custom/data-migration.mjs';
export const slug = 'reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte';
const T = {
  fr: {
    cover: { eyebrow: 'Reprise des données · Excel · Bascule · 2027', title: ['« Et nos dix ans', 'de fichiers Excel ? »', 'Ils viennent avec'], subtitle: 'Comment les données d’un tableur ou d’un ancien logiciel entrent dans la nouvelle application : l’inventaire, la table de correspondance, le nettoyage et la fusion des doublons, trois chargements à blanc, le rapprochement des totaux, la bascule en un week-end avec retour arrière', left: { label: 'Un import la veille', sub: 'doublons, dates fausses, soldes perdus' }, right: { label: 'Une reprise répétée', sub: 'trois essais, totaux égaux, bascule' } },
    nettoyage: { caption: 'Figure 1 · Le tableur n’a pas menti : il a stocké ce qu’on lui a tapé. La date est un nombre, l’identifiant bancaire a perdu ses derniers chiffres parce qu’il a été saisi comme un nombre, et le même client existe deux fois. Chaque colonne reçoit une règle écrite ; ce qui ne peut pas être reconstruit est redemandé, jamais deviné.' },
    etapes: { title: 'La reprise des données, en six étapes', items: [
      { n: '01', label: 'L’inventaire', sub: 'Chaque source : fichiers Excel par agence, ancien logiciel, carnet papier, photos WhatsApp. Qui la tient, depuis quand, ce qui fait foi quand deux sources se contredisent.' },
      { n: '02', label: 'La correspondance', sub: 'Une table, colonne par colonne : d’où vient chaque champ de la nouvelle application, avec quelle règle, et ce qui est laissé derrière. Signée par le gérant.' },
      { n: '03', label: 'Le nettoyage', sub: 'Noms, téléphones, dates, montants, wilayas normalisés ; doublons détectés et fusionnés avec une règle ; valeurs irréparables listées pour être redemandées.', accent: true },
      { n: '04', label: 'Le chargement à blanc', sub: 'Tout est chargé dans une copie de la nouvelle application, trois fois, chronométré ; un rapport dit ce qui est entré, ce qui est rejeté et pourquoi.' },
      { n: '05', label: 'Le rapprochement', sub: 'Nombre de clients, de factures ouvertes, solde total, stock par dépôt : comparés entre l’ancien et le nouveau, à l’unité et au dinar près.' },
      { n: '06', label: 'La bascule', sub: 'Ancien système en lecture seule le vendredi soir, dernier chargement, rapprochement, ouverture lundi matin ; retour arrière écrit et daté.' },
    ], caption: 'Figure 2 · L’étape 03 prend plus de temps que toutes les autres réunies, et c’est normal : c’est là que dix ans d’habitudes de saisie rencontrent des règles. L’étape 04 se fait trois fois parce que la première échoue toujours, et qu’il vaut mieux qu’elle échoue un mardi qu’un samedi de bascule.', alt: 'Six étapes : inventaire, correspondance, nettoyage (accentuée), chargement à blanc, rapprochement, bascule.' },
    bascule: { caption: 'Figure 3 · La preuve que rien n’est perdu n’est pas une impression : ce sont quatre chiffres lus samedi soir, égaux des deux côtés. Les 213 doublons fusionnés ne sont pas une perte ; ils sont listés, et chaque fusion peut être défaite. Si un chiffre diffère, on n’ouvre pas lundi.' },
    sources: { title: 'Six sources de données, comment on les récupère et ce qu’on contrôle', columns: ['Comment on les récupère', 'Ce qu’on contrôle'], rows: [
      { label: 'Fichiers Excel', cells: ['Lecture directe des classeurs, feuille par feuille ; cellules fusionnées, totaux en bas de colonne et lignes de titre écartés', 'Dates stockées en nombres, identifiants de plus de quinze chiffres, zéros de tête perdus, encodage de l’arabe'] },
      { label: 'Ancien logiciel avec base', cells: ['Export ou lecture seule de la base ; jamais d’écriture dans l’ancien système', 'Champs détournés de leur usage, codes internes sans libellé, enregistrements supprimés mais encore liés'] },
      { label: 'Logiciel sans export', cells: ['Impressions en PDF relues, états exportés un par un, ou saisie écran par écran en dernier recours', 'Totaux de chaque état face au total général ; rien n’est repris sans un chiffre de contrôle'] },
      { label: 'Papier et carnets', cells: ['Photographiés puis lus, comme les factures ; saisis à la main pour le reste', 'Double saisie sur un échantillon, soldes confirmés avec les clients concernés'] },
      { label: 'Plusieurs fichiers par agence', cells: ['Un fichier par agence ou par commercial, colonnes différentes, mêmes clients', 'Clé commune à construire : téléphone et identifiant ; doublons entre agences'] },
      { label: 'Messages et photos', cells: ['Commandes et soldes tenus dans WhatsApp : extraits pour l’historique utile seulement', 'On ne reprend que ce qui a un effet : un solde ouvert, une commande non livrée'] },
    ], caption: 'Figure 4 · Tout ne se reprend pas. L’historique de dix ans de commandes livrées et payées peut rester consultable dans une archive ; ce qui doit entrer propre dans la nouvelle application, c’est ce qui vit encore : clients, produits, soldes, stock, commandes ouvertes.', alt: 'Matrice de six sources : Excel, ancien logiciel, logiciel sans export, papier, fichiers par agence, messages ; comment on les récupère et ce qu’on contrôle.' },
    pieges: { title: 'Six pièges de la reprise, et ce que la méthode fait', columns: ['Ce qui se passe', 'Ce que la méthode fait'], rows: [
      { label: 'Le doublon', cells: ['Le même client existe trois fois, écrit de trois façons ; son solde est réparti', 'Clé sur le téléphone et l’identifiant, noms comparés avec tolérance, fusion par règle, liste validée par le gérant'] },
      { label: 'La date devenue nombre', cells: ['45123 à la place d’une date ; ou le jour et le mois inversés selon le poste', 'Conversion depuis le numéro de série du tableur ; dates ambiguës listées, pas devinées'] },
      { label: 'L’identifiant abîmé', cells: ['Un RIB de vingt chiffres saisi comme un nombre : le tableur n’en garde que quinze', 'Détecté par sa longueur et ses zéros ; redemandé au client ; jamais reconstruit'] },
      { label: 'Le solde qui ne tombe pas juste', cells: ['Le total des soldes clients diffère du total de la comptabilité', 'Rapprochement avant le chargement ; l’écart est expliqué ligne par ligne, ou la bascule attend'] },
      { label: 'L’arabe illisible', cells: ['Les noms en arabe deviennent des points d’interrogation', 'Encodage détecté fichier par fichier, converti, vérifié sur un échantillon à l’œil'] },
      { label: 'La bascule sans retour', cells: ['Lundi matin, un chiffre est faux, et l’ancien système a été modifié entre-temps', 'Ancien système en lecture seule, sauvegarde datée, retour arrière écrit avec son heure limite'] },
    ], caption: 'Figure 5 · Les trois premiers viennent du tableur lui-même, pas de l’utilisateur ; les trois derniers viennent de la méthode. Aucun ne se voit avant le premier chargement à blanc, et c’est pourquoi il y en a trois.', alt: 'Matrice de six pièges : doublon, date, identifiant, solde, arabe, bascule sans retour ; ce qui se passe et la parade.' },
    calendrier: { title: 'Reprendre ses données en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Inventaire et correspondance', note: 'toutes les sources, ce qui fait foi, la table de correspondance colonne par colonne ; ce qui est repris, archivé ou laissé ; signés', from: 0, to: 1 },
      { label: 'Nettoyage et règles', note: 'scripts de normalisation, détection des doublons, liste des valeurs à redemander envoyée aux équipes', from: 1, to: 3, accent: true },
      { label: 'Premier chargement à blanc', note: 'tout est chargé dans une copie ; rapport des rejets ; premier rapprochement, presque toujours faux', from: 3, to: 4 },
      { label: 'Deuxième et troisième', note: 'règles corrigées, doublons validés par le gérant, durée du chargement mesurée, rapprochement juste', from: 4, to: 5 },
      { label: 'Bascule et suivi', note: 'week-end de bascule, ouverture, une semaine de suivi des écarts signalés par les équipes', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, menées en parallèle de la construction de l’application et non après : la table de correspondance de la première semaine dit aux développeurs quels champs existent vraiment. La reprise qu’on découvre la veille du lancement est celle qui le retarde d’un mois.', alt: 'Frise de six semaines : inventaire, nettoyage (accentué), premier chargement, deuxième et troisième, bascule et suivi.' },
  },
  en: {
    cover: { eyebrow: 'Data migration · Excel · Switch-over · 2027', title: ['“And our ten years', 'of Excel files?”', 'They come along'], subtitle: 'How the data of a spreadsheet or an old system gets into the new application: the inventory, the mapping table, cleaning and merging duplicates, three dry-run loads, reconciling totals, the switch-over in one weekend with rollback', left: { label: 'An import the day before', sub: 'duplicates, wrong dates, lost balances' }, right: { label: 'A rehearsed migration', sub: 'three trials, equal totals, switch' } },
    nettoyage: { caption: 'Figure 1 · The spreadsheet did not lie: it stored what was typed. The date is a number, the bank identifier lost its last digits because it was entered as a number, and the same customer exists twice. Each column gets a written rule; what cannot be rebuilt is asked again, never guessed.' },
    etapes: { title: 'Data migration, in six steps', items: [
      { n: '01', label: 'The inventory', sub: 'Every source: Excel files per branch, old software, paper notebook, WhatsApp photos. Who keeps it, since when, what prevails when two sources disagree.' },
      { n: '02', label: 'The mapping', sub: 'A table, column by column: where each field of the new application comes from, by which rule, and what is left behind. Signed by the manager.' },
      { n: '03', label: 'The cleaning', sub: 'Names, phones, dates, amounts, wilayas normalised; duplicates detected and merged by rule; unrepairable values listed to be asked again.', accent: true },
      { n: '04', label: 'The dry-run load', sub: 'Everything is loaded into a copy of the new application, three times, timed; a report says what went in, what was rejected and why.' },
      { n: '05', label: 'The reconciliation', sub: 'Number of customers, open invoices, total balance, stock per depot: compared between old and new, to the unit and to the dinar.' },
      { n: '06', label: 'The switch-over', sub: 'Old system read-only on Friday evening, last load, reconciliation, opening Monday morning; rollback written and dated.' },
    ], caption: 'Figure 2 · Step 03 takes longer than all the others combined, and that is normal: it is where ten years of entry habits meet rules. Step 04 is done three times because the first always fails, and it is better for it to fail on a Tuesday than on a switch-over Saturday.', alt: 'Six steps: inventory, mapping, cleaning (accented), dry-run load, reconciliation, switch-over.' },
    bascule: { caption: 'Figure 3 · The proof that nothing is lost is not an impression: it is four figures read on Saturday evening, equal on both sides. The 213 merged duplicates are not a loss; they are listed, and each merge can be undone. If one figure differs, we do not open on Monday.' },
    sources: { title: 'Six data sources, how they are retrieved and what is checked', columns: ['How they are retrieved', 'What is checked'], rows: [
      { label: 'Excel files', cells: ['Direct reading of workbooks, sheet by sheet; merged cells, column-bottom totals and title rows discarded', 'Dates stored as numbers, identifiers longer than fifteen digits, lost leading zeros, Arabic encoding'] },
      { label: 'Old software with a database', cells: ['Export or read-only access to the database; never a write to the old system', 'Fields diverted from their use, internal codes with no label, deleted records still linked'] },
      { label: 'Software with no export', cells: ['Printouts to PDF read back, reports exported one by one, or screen-by-screen entry as a last resort', 'Totals of each report against the grand total; nothing is migrated without a control figure'] },
      { label: 'Paper and notebooks', cells: ['Photographed then read, like invoices; entered by hand for the rest', 'Double entry on a sample, balances confirmed with the customers concerned'] },
      { label: 'Several files per branch', cells: ['One file per branch or per sales rep, different columns, same customers', 'Common key to build: phone and identifier; duplicates across branches'] },
      { label: 'Messages and photos', cells: ['Orders and balances kept in WhatsApp: extracted for useful history only', 'Only what has an effect is migrated: an open balance, an undelivered order'] },
    ], caption: 'Figure 4 · Not everything is migrated. Ten years of delivered and paid orders can stay searchable in an archive; what must enter clean into the new application is what is still alive: customers, products, balances, stock, open orders.', alt: 'Matrix of six sources: Excel, old software, software with no export, paper, files per branch, messages; how they are retrieved and what is checked.' },
    pieges: { title: 'Six migration traps, and what the method does', columns: ['What happens', 'What the method does'], rows: [
      { label: 'The duplicate', cells: ['The same customer exists three times, written three ways; their balance is split', 'Key on phone and identifier, names compared with tolerance, merge by rule, list validated by the manager'] },
      { label: 'The date turned number', cells: ['45123 in place of a date; or day and month swapped depending on the workstation', 'Conversion from the spreadsheet serial number; ambiguous dates listed, not guessed'] },
      { label: 'The damaged identifier', cells: ['A twenty-digit bank identifier entered as a number: the spreadsheet keeps only fifteen', 'Detected by its length and zeros; asked from the customer again; never rebuilt'] },
      { label: 'The balance that does not add up', cells: ['The total of customer balances differs from the accounting total', 'Reconciliation before loading; the gap is explained line by line, or the switch-over waits'] },
      { label: 'Unreadable Arabic', cells: ['Names in Arabic turn into question marks', 'Encoding detected file by file, converted, checked by eye on a sample'] },
      { label: 'The switch with no return', cells: ['Monday morning a figure is wrong, and the old system was changed in the meantime', 'Old system read-only, dated backup, rollback written with its deadline'] },
    ], caption: 'Figure 5 · The first three come from the spreadsheet itself, not from the user; the last three come from the method. None shows before the first dry-run load, which is why there are three.', alt: 'Matrix of six traps: duplicate, date, identifier, balance, Arabic, switch with no return; what happens and the defence.' },
    calendrier: { title: 'Migrating your data in 2027, in weeks', unit: 'wk', items: [
      { label: 'Inventory and mapping', note: 'all sources, what prevails, the mapping table column by column; what is migrated, archived or left; signed', from: 0, to: 1 },
      { label: 'Cleaning and rules', note: 'normalisation scripts, duplicate detection, list of values to ask again sent to the teams', from: 1, to: 3, accent: true },
      { label: 'First dry-run load', note: 'everything loaded into a copy; rejection report; first reconciliation, almost always wrong', from: 3, to: 4 },
      { label: 'Second and third', note: 'rules corrected, duplicates validated by the manager, load duration measured, reconciliation right', from: 4, to: 5 },
      { label: 'Switch-over and follow-up', note: 'switch-over weekend, opening, one week following the gaps reported by the teams', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, run alongside the building of the application and not after it: the week-one mapping table tells developers which fields really exist. The migration discovered the day before launch is the one that delays it by a month.', alt: 'Six-week timeline: inventory, cleaning (accented), first load, second and third, switch-over and follow-up.' },
  },
  ar: {
    cover: { eyebrow: 'استرجاع البيانات · Excel · التحويل · 2027', title: ['«وعشر سنوات من', 'ملفات Excel؟»', 'تأتي معنا'], subtitle: 'كيف تدخل بيانات جدول أو برنامج قديم إلى التطبيق الجديد: الجرد، جدول المطابقة، التنظيف ودمج المكررات، ثلاثة تحميلات تجريبية، مطابقة المجاميع، التحويل في عطلة نهاية أسبوع مع إمكانية التراجع', left: { label: 'استيراد عشية الإطلاق', sub: 'مكررات، تواريخ خاطئة، أرصدة ضائعة' }, right: { label: 'استرجاع مجرَّب', sub: 'ثلاث تجارب، مجاميع متساوية، تحويل' } },
    nettoyage: { caption: 'الشكل 1 · الجدول لم يكذب: خزّن ما كُتب فيه. التاريخ رقم، والمعرّف البنكي فقد أرقامه الأخيرة لأنه أُدخل رقماً، والزبون نفسه موجود مرتين. لكل عمود قاعدة مكتوبة؛ وما لا يمكن إعادة بنائه يُطلب من جديد ولا يُخمَّن أبداً.' },
    etapes: { title: 'استرجاع البيانات، في ست خطوات', items: [
      { n: '01', label: 'الجرد', sub: 'كل مصدر: ملفات Excel لكل وكالة، البرنامج القديم، الدفتر الورقي، صور WhatsApp. من يمسكه، منذ متى، وما المرجع حين يتناقض مصدران.' },
      { n: '02', label: 'المطابقة', sub: 'جدول، عموداً عموداً: من أين يأتي كل حقل في التطبيق الجديد، بأي قاعدة، وما يُترك خلفنا. يوقّعه المسيّر.' },
      { n: '03', label: 'التنظيف', sub: 'أسماء وهواتف وتواريخ ومبالغ وولايات تُطبَّع؛ مكررات تُكشف وتُدمج بقاعدة؛ قيم لا تُصلَح تُسرد لتُطلب من جديد.', accent: true },
      { n: '04', label: 'التحميل التجريبي', sub: 'كل شيء يُحمَّل في نسخة من التطبيق الجديد، ثلاث مرات، بتوقيت؛ وتقرير يقول ما دخل وما رُفض ولماذا.' },
      { n: '05', label: 'المطابقة الحسابية', sub: 'عدد الزبائن، الفواتير المفتوحة، الرصيد الإجمالي، المخزون لكل مستودع: تُقارَن بين القديم والجديد بالوحدة وبالدينار.' },
      { n: '06', label: 'التحويل', sub: 'النظام القديم للقراءة فقط مساء الجمعة، آخر تحميل، مطابقة، فتح صباح الاثنين؛ وتراجع مكتوب ومؤرَّخ.' },
    ], caption: 'الشكل 2 · الخطوة 03 تأخذ وقتاً أكثر من كل الباقي مجتمعاً، وهذا طبيعي: هنا تلتقي عشر سنوات من عادات الإدخال بالقواعد. والخطوة 04 تُنجَز ثلاث مرات لأن الأولى تفشل دائماً، والأفضل أن تفشل يوم ثلاثاء لا يوم سبت التحويل.', alt: 'ست خطوات: الجرد، المطابقة، التنظيف (مميزة)، التحميل التجريبي، المطابقة الحسابية، التحويل.' },
    bascule: { caption: 'الشكل 3 · دليل أن لا شيء ضاع ليس انطباعاً: أربعة أرقام تُقرأ مساء السبت، متساوية من الجهتين. والمكررات الـ 213 المدموجة ليست خسارة؛ هي مسرودة وكل دمج يمكن فكّه. وإن اختلف رقم واحد لا نفتح يوم الاثنين.' },
    sources: { title: 'ستة مصادر بيانات، كيف نسترجعها وما نتحقق منه', columns: ['كيف نسترجعها', 'ما نتحقق منه'], rows: [
      { label: 'ملفات Excel', cells: ['قراءة مباشرة للمصنفات ورقةً ورقة؛ الخلايا المدموجة ومجاميع أسفل الأعمدة وأسطر العناوين تُستبعد', 'تواريخ مخزَّنة أرقاماً، معرّفات أطول من خمسة عشر رقماً، أصفار بادئة ضائعة، ترميز العربية'] },
      { label: 'برنامج قديم بقاعدة بيانات', cells: ['تصدير أو وصول للقراءة فقط إلى القاعدة؛ لا كتابة أبداً في النظام القديم', 'حقول حُوّلت عن استعمالها، رموز داخلية بلا تسمية، سجلات محذوفة وما زالت مرتبطة'] },
      { label: 'برنامج بلا تصدير', cells: ['مطبوعات PDF تُقرأ، كشوف تُصدَّر واحداً واحداً، أو إدخال شاشةً شاشة كملاذ أخير', 'مجاميع كل كشف مقابل المجموع العام؛ لا يُسترجع شيء بلا رقم تحقق'] },
      { label: 'الورق والدفاتر', cells: ['تُصوَّر ثم تُقرأ كالفواتير؛ ويُدخل الباقي يدوياً', 'إدخال مزدوج على عينة، وأرصدة تُؤكَّد مع الزبائن المعنيين'] },
      { label: 'عدة ملفات لكل وكالة', cells: ['ملف لكل وكالة أو مندوب، أعمدة مختلفة، والزبائن أنفسهم', 'مفتاح مشترك يُبنى: الهاتف والمعرّف؛ ومكررات بين الوكالات'] },
      { label: 'رسائل وصور', cells: ['طلبيات وأرصدة ممسوكة في WhatsApp: تُستخرج للتاريخ المفيد فقط', 'لا يُسترجع إلا ما له أثر: رصيد مفتوح، طلبية غير مسلَّمة'] },
    ], caption: 'الشكل 4 · ليس كل شيء يُسترجع. عشر سنوات من الطلبيات المسلَّمة والمدفوعة يمكن أن تبقى قابلة للبحث في أرشيف؛ وما يجب أن يدخل نظيفاً إلى التطبيق الجديد هو ما زال حياً: الزبائن، المنتجات، الأرصدة، المخزون، الطلبيات المفتوحة.', alt: 'مصفوفة ستة مصادر: Excel، برنامج قديم، برنامج بلا تصدير، ورق، ملفات لكل وكالة، رسائل؛ كيف نسترجعها وما نتحقق منه.' },
    pieges: { title: 'ستة فخاخ في الاسترجاع، وما تفعله المنهجية', columns: ['ما يحدث', 'ما تفعله المنهجية'], rows: [
      { label: 'المكرر', cells: ['الزبون نفسه موجود ثلاث مرات بثلاث كتابات؛ ورصيده موزَّع', 'مفتاح على الهاتف والمعرّف، أسماء تُقارَن بتسامح، دمج بقاعدة، قائمة يتحقق منها المسيّر'] },
      { label: 'التاريخ الذي صار رقماً', cells: ['45123 مكان تاريخ؛ أو اليوم والشهر مقلوبان حسب الحاسوب', 'تحويل من الرقم التسلسلي للجدول؛ والتواريخ الملتبسة تُسرد ولا تُخمَّن'] },
      { label: 'المعرّف التالف', cells: ['RIB من عشرين رقماً أُدخل رقماً: الجدول لا يحفظ إلا خمسة عشر', 'يُكشف بطوله وأصفاره؛ يُطلب من الزبون من جديد؛ ولا يُعاد بناؤه أبداً'] },
      { label: 'الرصيد الذي لا يتطابق', cells: ['مجموع أرصدة الزبائن يختلف عن مجموع المحاسبة', 'مطابقة قبل التحميل؛ الفارق يُشرح سطراً سطراً، أو ينتظر التحويل'] },
      { label: 'العربية غير المقروءة', cells: ['الأسماء بالعربية تصير علامات استفهام', 'الترميز يُكشف ملفاً ملفاً، يُحوَّل، ويُتحقَّق بالعين على عينة'] },
      { label: 'التحويل بلا عودة', cells: ['صباح الاثنين رقم خاطئ، والنظام القديم عُدّل في الأثناء', 'النظام القديم للقراءة فقط، نسخة مؤرَّخة، وتراجع مكتوب بمهلته'] },
    ], caption: 'الشكل 5 · الثلاثة الأولى تأتي من الجدول نفسه لا من المستعمل؛ والثلاثة الأخيرة تأتي من المنهجية. ولا واحد منها يظهر قبل أول تحميل تجريبي، ولهذا هي ثلاثة.', alt: 'مصفوفة ستة فخاخ: مكرر، تاريخ، معرّف، رصيد، عربية، تحويل بلا عودة؛ ما يحدث والصدّ.' },
    calendrier: { title: 'استرجاع بياناتكم سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الجرد والمطابقة', note: 'كل المصادر، ما المرجع، جدول المطابقة عموداً عموداً؛ ما يُسترجع أو يُؤرشَف أو يُترك؛ موقَّعة', from: 0, to: 1 },
      { label: 'التنظيف والقواعد', note: 'سكربتات التطبيع، كشف المكررات، قائمة القيم التي تُطلب من جديد تُرسل للفرق', from: 1, to: 3, accent: true },
      { label: 'أول تحميل تجريبي', note: 'كل شيء يُحمَّل في نسخة؛ تقرير المرفوضات؛ أول مطابقة، خاطئة دائماً تقريباً', from: 3, to: 4 },
      { label: 'الثاني والثالث', note: 'قواعد مصحَّحة، مكررات يتحقق منها المسيّر، مدة التحميل مقاسة، مطابقة صحيحة', from: 4, to: 5 },
      { label: 'التحويل والمتابعة', note: 'عطلة التحويل، الفتح، وأسبوع لمتابعة الفوارق التي تبلّغ عنها الفرق', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، تُدار بالتوازي مع بناء التطبيق لا بعده: جدول المطابقة في الأسبوع الأول يقول للمطورين أي الحقول موجودة فعلاً. والاسترجاع الذي يُكتشف عشية الإطلاق هو ما يؤخره شهراً.', alt: 'خط زمني من ستة أسابيع: الجرد، التنظيف (مميزة)، أول تحميل، الثاني والثالث، التحويل والمتابعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const d = DM[locale] || DM.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      nettoyage: { svg: clean(d.clean, rtl), caption: t.nettoyage.caption, alt: d.clean.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      bascule: { svg: cutover(d.cutover, rtl), caption: t.bascule.caption, alt: d.cutover.alt },
      sources: { svg: matrix({ title: t.sources.title, columns: t.sources.columns, rows: t.sources.rows, rtl }), caption: t.sources.caption, alt: t.sources.alt },
      pieges: { svg: matrix({ title: t.pieges.title, columns: t.pieges.columns, rows: t.pieges.rows, rtl }), caption: t.pieges.caption, alt: t.pieges.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
