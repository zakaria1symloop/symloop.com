import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { mapping, run, STRINGS as XL } from './custom/excel-import.mjs';
export const slug = 'importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere';
const T = {
  fr: {
    cover: { eyebrow: 'Imports · Excel · Fournisseurs · 2027', title: ['« Le fichier Excel', 'du fournisseur arrive', 'chaque semaine »'], subtitle: 'Ce qu’on construit pour l’importer sans casser : une correspondance mémorisée par fournisseur, une règle de lecture par colonne, un verdict par ligne, un essai à blanc, une application en arrière-plan, un journal et un retour arrière', left: { label: 'Copier-coller un lundi matin', sub: 'et des prix faux jusqu’au mercredi' }, right: { label: 'Un import qui se relit', sub: 'et qui se défait en un geste' } },
    correspondance: { caption: 'Figure 1 · Le fichier du fournisseur tel qu’il arrive, avec sa ligne de titre fusionnée, ses en-têtes à lui, ses prix écrits à la française, un code-barres avec des espaces, une référence vide, un « N/D » et une ligne de totaux. Chaque colonne est reliée à un champ de l’application par un numéro, avec la transformation appliquée et la règle de lecture ; chaque ligne reçoit un verdict avant qu’une valeur ne soit écrite. La correspondance est mémorisée par fournisseur et réutilisée ; si une colonne change de nom, l’application demande, elle ne devine pas. Les données sont un exemple construit.' },
    couches: { title: 'Un import qui ne casse rien, en cinq couches', layers: [
      { label: 'Réception', items: [{ name: 'Dépôt par le gérant, e-mail dédié ou dossier partagé ; .xlsx et .csv ; détection de l’encodage et de la feuille ; empreinte du fichier', sub: 'le même fichier déposé deux fois n’est importé qu’une fois' }] },
      { label: 'Correspondance', items: [{ name: 'Table par fournisseur et type de fichier : colonne → champ, lignes à ignorer, règle de lecture par colonne ; mémorisée, versionnée', sub: 'un fournisseur qui change ses en-têtes déclenche une question, pas un import faux' }] },
      { label: 'Validation', items: [{ name: 'Essai à blanc : tout est lu, rien n’est écrit ; verdict par ligne, acceptée, avertissement ou rejet avec la raison ; seuils écrits', sub: 'le gérant voit ce qui va changer avant que ça change', accent: true }] },
      { label: 'Application', items: [{ name: 'Après confirmation : arrière-plan, lots, progression, reprise après coupure, clé par ligne ; valeurs remplacées conservées', sub: 'une coupure au lot 6 ne rejoue pas les lots 1 à 5' }] },
      { label: 'Historique', items: [{ name: 'Journal des imports : qui, quand, quel fichier, combien de lignes et de rejets ; retour arrière en un geste ; rapport au fournisseur', sub: 'un import faux se défait en une minute, pas en une semaine' }] },
    ], caption: 'Figure 2 · La couche accentuée est celle qui sépare un import d’un copier-coller : l’essai à blanc lit tout et n’écrit rien, et le gérant voit les avertissements avant de confirmer. Les deux couches suivantes rendent l’import sûr à exécuter et sûr à annuler.', alt: 'Cinq couches : réception, correspondance, validation (accentuée), application, historique.' },
    import: { caption: 'Figure 3 · Un import, du dépôt au retour arrière. Le modèle du fournisseur est reconnu, l’essai à blanc rend un verdict par ligne en deux secondes, le gérant confirme les avertissements, l’application se fait en arrière-plan par lots avec une progression visible, le journal et le rapport des rejets partent, et l’import peut être défait en un geste parce que chaque valeur remplacée a été conservée. Un fichier redéposé ne fait rien. Les chiffres sont un exemple construit.' },
    etapes: { title: 'Le lundi matin, en six gestes', items: [
      { label: 'Déposer le fichier', sub: 'glisser le .xlsx ; ou il arrive seul par l’e-mail dédié' },
      { label: 'Vérifier le modèle', sub: 'fournisseur reconnu, colonnes reliées ; corriger si une a changé' },
      { label: 'Lire l’essai à blanc', sub: 'acceptées, avertissements, rejets ; aperçu des premières lignes', accent: true },
      { label: 'Trancher les avertissements', sub: 'confirmer en un geste, ou écarter des lignes' },
      { label: 'Lancer', sub: 'en arrière-plan ; on peut fermer l’écran' },
      { label: 'Lire le journal', sub: 'ce qui a changé ; rapport des rejets au fournisseur ; annuler si besoin' },
    ], caption: 'Figure 4 · L’étape accentuée est celle qui n’existe pas dans un copier-coller : lire ce qui va changer avant que ça change. Les cinq autres prennent deux minutes ; la troisième en prend cinq et évite une semaine de prix faux.', alt: 'Six gestes : déposer le fichier, vérifier le modèle, lire l’essai à blanc (accentuée), trancher les avertissements, lancer, lire le journal.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le fournisseur a renommé une colonne', cells: ['« PU HT » devient « Prix unitaire » ; les prix vont dans le mauvais champ', 'en-tête inconnu → question au gérant ; rien n’est importé avant le lien'] },
      { label: 'Les prix sont écrits à la française', cells: ['« 1 250,00 » lu 1 ou 125 000 selon l’outil', 'règle de lecture par colonne : virgule décimale, espace des milliers'] },
      { label: 'Une ligne a un prix multiplié par dix', cells: ['Une faute de frappe fournisseur passe en production', 'seuil d’avertissement écrit ; la ligne attend la confirmation du gérant'] },
      { label: 'Le fichier est déposé deux fois', cells: ['Les quantités reçues sont doublées', 'empreinte du fichier et clé par ligne ; le second dépôt ne fait rien'] },
      { label: 'L’import s’arrête à la moitié', cells: ['Coupure réseau ; la moitié des prix est à jour, l’autre non', 'lots avec reprise ; les lots appliqués ne rejouent pas ; état visible'] },
      { label: 'L’import était faux', cells: ['Découvert le mercredi ; trois jours à corriger à la main', 'retour arrière en un geste ; valeurs précédentes restaurées'] },
    ], caption: 'Figure 5 · Les deux premières lignes se règlent par la correspondance et les règles de lecture ; la troisième par l’essai à blanc et les seuils ; les deux suivantes par l’idempotence et les lots ; la dernière par l’historique. Aucune ne se règle par un employé plus attentif au copier-coller.', alt: 'Matrice de six situations : colonne renommée, prix à la française, prix multiplié par dix, fichier déposé deux fois, import arrêté à la moitié, import faux ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Des imports qui ne cassent rien en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Fichiers et règles', note: 'liste des fichiers récurrents, fournisseurs, fréquence, champs cibles, règles de lecture, seuils d’avertissement, qui confirme ; signés', from: 0, to: 1 },
      { label: 'Réception et correspondance', note: 'dépôt, e-mail dédié, détection, table de correspondance par fournisseur mémorisée et versionnée', from: 1, to: 2 },
      { label: 'Essai à blanc', note: 'lecture complète sans écriture, verdict par ligne, seuils, aperçu, rapport des rejets', from: 2, to: 3, accent: true },
      { label: 'Application et lots', note: 'confirmation, application en arrière-plan par lots, progression, reprise, idempotence, valeurs remplacées conservées', from: 3, to: 4 },
      { label: 'Historique et retour arrière', note: 'journal des imports, annulation en un geste, rapport des rejets envoyé au fournisseur par WhatsApp ou e-mail', from: 4, to: 5 },
      { label: 'Mesure', note: 'taux de lignes rejetées par fournisseur, imports annulés, temps du lundi matin avant et après', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : la liste des fichiers récurrents, les champs cibles et les seuils sont des décisions du gérant. La troisième semaine est accentuée parce que l’essai à blanc est la raison d’être de tout le reste : sans lui, un import n’est qu’un copier-coller plus rapide.', alt: 'Frise de six semaines : fichiers et règles, réception et correspondance, essai à blanc (accentué), application et lots, historique et retour arrière, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Imports · Excel · Suppliers · 2027', title: ['“The supplier’s', 'Excel file arrives', 'every week”'], subtitle: 'What gets built to import it without breaking anything: a mapping remembered per supplier, a reading rule per column, a verdict per row, a dry run, a background apply, a journal and an undo', left: { label: 'Copy-paste on a Monday morning', sub: 'and wrong prices until Wednesday' }, right: { label: 'An import that reads itself back', sub: 'and undoes in one gesture' } },
    correspondance: { caption: 'Figure 1 · The supplier’s file as it arrives, with its merged title row, its own headers, prices written the French way, a barcode with spaces, an empty reference, an “N/A” and a totals row. Every column is linked to an application field by a number, with the transform applied and the reading rule; every row gets a verdict before a value is written. The mapping is remembered per supplier and reused; if a column changes name, the application asks, it does not guess. The data is a constructed example.' },
    couches: { title: 'An import that breaks nothing, in five layers', layers: [
      { label: 'Receipt', items: [{ name: 'Upload by the manager, dedicated e-mail or shared folder; .xlsx and .csv; encoding and sheet detection; file fingerprint', sub: 'the same file uploaded twice is imported once' }] },
      { label: 'Mapping', items: [{ name: 'Table per supplier and file type: column → field, rows to ignore, reading rule per column; remembered, versioned', sub: 'a supplier that changes its headers triggers a question, not a wrong import' }] },
      { label: 'Validation', items: [{ name: 'Dry run: everything is read, nothing is written; verdict per row, accepted, warning or rejection with the reason; written thresholds', sub: 'the manager sees what will change before it changes', accent: true }] },
      { label: 'Apply', items: [{ name: 'After confirmation: background, batches, progress, resume after a cut, key per row; replaced values kept', sub: 'a cut at batch 6 does not replay batches 1 to 5' }] },
      { label: 'History', items: [{ name: 'Import journal: who, when, which file, how many rows and rejections; one-gesture undo; report to the supplier', sub: 'a wrong import is undone in a minute, not a week' }] },
    ], caption: 'Figure 2 · The accented layer is what separates an import from a copy-paste: the dry run reads everything and writes nothing, and the manager sees the warnings before confirming. The next two layers make the import safe to run and safe to undo.', alt: 'Five layers: receipt, mapping, validation (accented), apply, history.' },
    import: { caption: 'Figure 3 · One import, from upload to undo. The supplier’s template is recognised, the dry run gives a verdict per row in two seconds, the manager confirms the warnings, the apply runs in the background in batches with visible progress, the journal and the rejection report go out, and the import can be undone in one gesture because every replaced value was kept. A re-uploaded file does nothing. The figures are a constructed example.' },
    etapes: { title: 'Monday morning, in six gestures', items: [
      { label: 'Upload the file', sub: 'drag the .xlsx; or it arrives by itself through the dedicated e-mail' },
      { label: 'Check the template', sub: 'supplier recognised, columns linked; fix one if it changed' },
      { label: 'Read the dry run', sub: 'accepted, warnings, rejections; preview of the first rows', accent: true },
      { label: 'Settle the warnings', sub: 'confirm in one gesture, or exclude rows' },
      { label: 'Launch', sub: 'in the background; the screen can be closed' },
      { label: 'Read the journal', sub: 'what changed; rejection report to the supplier; undo if needed' },
    ], caption: 'Figure 4 · The accented step is the one that does not exist in a copy-paste: reading what will change before it changes. The other five take two minutes; the third takes five and avoids a week of wrong prices.', alt: 'Six gestures: upload the file, check the template, read the dry run (accented), settle the warnings, launch, read the journal.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The supplier renamed a column', cells: ['“PU HT” becomes “Prix unitaire”; prices go into the wrong field', 'unknown header → question to the manager; nothing imported before the link'] },
      { label: 'Prices are written the French way', cells: ['“1 250,00” read as 1 or 125,000 depending on the tool', 'reading rule per column: decimal comma, thousands space'] },
      { label: 'One row has a price multiplied by ten', cells: ['A supplier typo goes into production', 'written warning threshold; the row waits for the manager’s confirmation'] },
      { label: 'The file is uploaded twice', cells: ['Received quantities are doubled', 'file fingerprint and per-row key; the second upload does nothing'] },
      { label: 'The import stops halfway', cells: ['Network cut; half the prices updated, the other half not', 'batches with resume; applied batches do not replay; visible state'] },
      { label: 'The import was wrong', cells: ['Found on Wednesday; three days of manual fixing', 'one-gesture undo; previous values restored'] },
    ], caption: 'Figure 5 · The first two rows are settled by the mapping and the reading rules; the third by the dry run and the thresholds; the next two by idempotency and batches; the last by the history. None is settled by an employee more careful with copy-paste.', alt: 'Matrix of six situations: renamed column, French-style prices, price multiplied by ten, file uploaded twice, import stopped halfway, wrong import; what happens and what the application does.' },
    calendrier: { title: 'Imports that break nothing in 2027, in weeks', unit: 'wk', items: [
      { label: 'Files and rules', note: 'list of recurring files, suppliers, frequency, target fields, reading rules, warning thresholds, who confirms; signed', from: 0, to: 1 },
      { label: 'Receipt and mapping', note: 'upload, dedicated e-mail, detection, mapping table per supplier remembered and versioned', from: 1, to: 2 },
      { label: 'Dry run', note: 'full read without writing, verdict per row, thresholds, preview, rejection report', from: 2, to: 3, accent: true },
      { label: 'Apply and batches', note: 'confirmation, background apply in batches, progress, resume, idempotency, replaced values kept', from: 3, to: 4 },
      { label: 'History and undo', note: 'import journal, one-gesture undo, rejection report sent to the supplier by WhatsApp or e-mail', from: 4, to: 5 },
      { label: 'Measurement', note: 'rejected-row rate per supplier, undone imports, Monday-morning time before and after', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: the list of recurring files, the target fields and the thresholds are the manager’s decisions. The third week is accented because the dry run is the reason for everything else: without it, an import is only a faster copy-paste.', alt: 'Six-week timeline: files and rules, receipt and mapping, dry run (accented), apply and batches, history and undo, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'استيراد · Excel · موردون · 2027', title: ['«ملف Excel', 'من المورد يصل', 'كل أسبوع»'], subtitle: 'ما يُبنى لاستيراده دون كسر: مطابقة محفوظة لكل مورد، قاعدة قراءة لكل عمود، حكم لكل سطر، تجربة على الفارغ، تطبيق في الخلفية، سجل وتراجع', left: { label: 'نسخ ولصق صباح الاثنين', sub: 'وأسعار خاطئة حتى الأربعاء' }, right: { label: 'استيراد يُراجَع', sub: 'ويُلغى بحركة واحدة' } },
    correspondance: { caption: 'الشكل 1 · ملف المورد كما يصل، بسطر عنوانه المدمج ورؤوسه الخاصة وأسعار مكتوبة بالطريقة الفرنسية وباركود فيه مسافات ومرجع فارغ و«N/D» وسطر مجاميع. كل عمود مرتبط بحقل في التطبيق برقم، مع التحويل المطبَّق وقاعدة القراءة؛ وكل سطر يتلقى حكماً قبل كتابة قيمة. والمطابقة محفوظة لكل مورد ويُعاد استعمالها؛ وإن تغيّر اسم عمود يسأل التطبيق ولا يخمّن. والبيانات مثال مبني.' },
    couches: { title: 'استيراد لا يكسر شيئاً، في خمس طبقات', layers: [
      { label: 'الاستلام', items: [{ name: 'إيداع من المسيّر أو بريد مخصص أو مجلد مشترك؛ .xlsx و.csv؛ اكتشاف الترميز والورقة؛ بصمة الملف', sub: 'الملف نفسه مودَعاً مرتين يُستورد مرة واحدة' }] },
      { label: 'المطابقة', items: [{ name: 'جدول لكل مورد ونوع ملف: عمود ← حقل، أسطر تُتجاهَل، قاعدة قراءة لكل عمود؛ محفوظ، بنسخ', sub: 'مورد يغيّر رؤوسه يطلق سؤالاً لا استيراداً خاطئاً' }] },
      { label: 'التحقق', items: [{ name: 'تجربة على الفارغ: كل شيء يُقرأ ولا شيء يُكتب؛ حكم لكل سطر، مقبول أو تحذير أو رفض بسببه؛ عتبات مكتوبة', sub: 'يرى المسيّر ما سيتغير قبل أن يتغير', accent: true }] },
      { label: 'التطبيق', items: [{ name: 'بعد التأكيد: خلفية، دفعات، تقدم، استئناف بعد انقطاع، مفتاح لكل سطر؛ القيم المستبدَلة محفوظة', sub: 'انقطاع عند الدفعة 6 لا يعيد الدفعات 1 إلى 5' }] },
      { label: 'التاريخ', items: [{ name: 'سجل الاستيرادات: من ومتى وأي ملف وكم سطراً ورفضاً؛ تراجع بحركة واحدة؛ تقرير إلى المورد', sub: 'استيراد خاطئ يُلغى في دقيقة لا في أسبوع' }] },
    ], caption: 'الشكل 2 · الطبقة المميزة هي ما يفصل الاستيراد عن النسخ واللصق: التجربة على الفارغ تقرأ كل شيء ولا تكتب شيئاً، ويرى المسيّر التحذيرات قبل التأكيد. والطبقتان التاليتان تجعلان الاستيراد آمن التنفيذ وآمن الإلغاء.', alt: 'خمس طبقات: الاستلام، المطابقة، التحقق (مميزة)، التطبيق، التاريخ.' },
    import: { caption: 'الشكل 3 · استيراد واحد من الإيداع إلى التراجع. يُعرف قالب المورد، وتعطي التجربة على الفارغ حكماً لكل سطر في ثانيتين، ويؤكد المسيّر التحذيرات، ويجري التطبيق في الخلفية بدفعات بتقدم ظاهر، وينطلق السجل وتقرير الرفض، ويمكن إلغاء الاستيراد بحركة واحدة لأن كل قيمة مستبدَلة حُفظت. وملف معاد إيداعه لا يفعل شيئاً. والأرقام مثال مبني.' },
    etapes: { title: 'صباح الاثنين، في ست حركات', items: [
      { label: 'إيداع الملف', sub: 'سحب الـ .xlsx؛ أو يصل وحده عبر البريد المخصص' },
      { label: 'مراجعة القالب', sub: 'المورد معروف، الأعمدة مربوطة؛ تصحيح إن تغيّر أحدها' },
      { label: 'قراءة التجربة على الفارغ', sub: 'مقبولة، تحذيرات، رفض؛ معاينة الأسطر الأولى', accent: true },
      { label: 'الفصل في التحذيرات', sub: 'تأكيد بحركة واحدة، أو استبعاد أسطر' },
      { label: 'الإطلاق', sub: 'في الخلفية؛ يمكن إغلاق الشاشة' },
      { label: 'قراءة السجل', sub: 'ما تغيّر؛ تقرير الرفض إلى المورد؛ إلغاء عند الحاجة' },
    ], caption: 'الشكل 4 · الخطوة المميزة هي التي لا توجد في النسخ واللصق: قراءة ما سيتغير قبل أن يتغير. والخمس الأخرى تستغرق دقيقتين؛ والثالثة خمساً وتجنّب أسبوعاً من الأسعار الخاطئة.', alt: 'ست حركات: إيداع الملف، مراجعة القالب، قراءة التجربة على الفارغ (مميزة)، الفصل في التحذيرات، الإطلاق، قراءة السجل.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'المورد غيّر اسم عمود', cells: ['«PU HT» يصير «Prix unitaire»؛ الأسعار في الحقل الخطأ', 'رأس مجهول ← سؤال للمسيّر؛ لا استيراد قبل الربط'] },
      { label: 'الأسعار مكتوبة بالطريقة الفرنسية', cells: ['«1 250,00» تُقرأ 1 أو 125,000 حسب الأداة', 'قاعدة قراءة لكل عمود: فاصلة عشرية، مسافة آلاف'] },
      { label: 'سطر بسعر مضروب في عشرة', cells: ['خطأ كتابة من المورد يمر إلى الإنتاج', 'عتبة تحذير مكتوبة؛ ينتظر السطر تأكيد المسيّر'] },
      { label: 'الملف أُودع مرتين', cells: ['الكميات المستلَمة تتضاعف', 'بصمة الملف ومفتاح لكل سطر؛ الإيداع الثاني لا يفعل شيئاً'] },
      { label: 'الاستيراد يتوقف في المنتصف', cells: ['انقطاع شبكة؛ نصف الأسعار محدَّث والآخر لا', 'دفعات باستئناف؛ المطبَّقة لا تُعاد؛ حالة ظاهرة'] },
      { label: 'الاستيراد كان خاطئاً', cells: ['اكتُشف الأربعاء؛ ثلاثة أيام تصحيح يدوي', 'تراجع بحركة واحدة؛ القيم السابقة مستعادة'] },
    ], caption: 'الشكل 5 · السطران الأولان يُحلان بالمطابقة وقواعد القراءة؛ والثالث بالتجربة على الفارغ والعتبات؛ والتاليان بعدم التكرار والدفعات؛ والأخير بالتاريخ. ولا واحد يُحل بموظف أكثر انتباهاً في النسخ واللصق.', alt: 'مصفوفة ست حالات: عمود غيّر اسمه، أسعار بالطريقة الفرنسية، سعر مضروب في عشرة، ملف مودَع مرتين، استيراد متوقف في المنتصف، استيراد خاطئ؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'استيرادات لا تكسر شيئاً سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الملفات والقواعد', note: 'قائمة الملفات المتكررة، الموردون، التواتر، الحقول الهدف، قواعد القراءة، عتبات التحذير، من يؤكد؛ موقَّعة', from: 0, to: 1 },
      { label: 'الاستلام والمطابقة', note: 'إيداع، بريد مخصص، اكتشاف، جدول مطابقة لكل مورد محفوظ وبنسخ', from: 1, to: 2 },
      { label: 'التجربة على الفارغ', note: 'قراءة كاملة بلا كتابة، حكم لكل سطر، عتبات، معاينة، تقرير الرفض', from: 2, to: 3, accent: true },
      { label: 'التطبيق والدفعات', note: 'تأكيد، تطبيق في الخلفية بدفعات، تقدم، استئناف، عدم تكرار، قيم مستبدَلة محفوظة', from: 3, to: 4 },
      { label: 'التاريخ والتراجع', note: 'سجل الاستيرادات، إلغاء بحركة واحدة، تقرير الرفض مرسل إلى المورد عبر WhatsApp أو البريد', from: 4, to: 5 },
      { label: 'القياس', note: 'نسبة الأسطر المرفوضة لكل مورد، استيرادات ملغاة، وقت صباح الاثنين قبل وبعد', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: قائمة الملفات المتكررة والحقول الهدف والعتبات قرارات المسيّر. والأسبوع الثالث مميز لأن التجربة على الفارغ هي سبب وجود كل الباقي: بدونها لا يكون الاستيراد إلا نسخاً ولصقاً أسرع.', alt: 'خط زمني من ستة أسابيع: الملفات والقواعد، الاستلام والمطابقة، التجربة على الفارغ (مميز)، التطبيق والدفعات، التاريخ والتراجع، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = XL[locale] || XL.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      correspondance: { svg: mapping(e.mapping, rtl), caption: t.correspondance.caption, alt: e.mapping.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      import: { svg: run(e.run, rtl), caption: t.import.caption, alt: e.run.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
