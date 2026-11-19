import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { base, fiches, STRINGS as SC } from './custom/erp.mjs';
export const slug = 'logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel ERP · Algérie · 2027', title: ['Logiciel ERP en Algérie', 'une base, pas un outil de plus'], subtitle: 'Chaque donnée saisie une fois, des fiches nettoyées avant, un déploiement par vagues', left: { label: 'Quatre outils', sub: 'quatre quantités pour un article' }, right: { label: 'Une seule base', sub: 'lue par tous les modules' } },
    signes: { title: 'Faut-il un ERP ? Six signes', columns: ['Vos outils actuels suffisent', 'Un ERP devient utile'], rows: [
      { label: 'Les ressaisies', cells: ['une donnée se saisit à un endroit, parfois deux', 'la même vente se retape dans trois outils'] },
      { label: 'Les chiffres de fin de mois', cells: ['ils concordent du premier coup', 'trois jours à rapprocher des fichiers'] },
      { label: 'Le stock', cells: ['le stock affiché est celui du rayon', 'on appelle le magasin avant de promettre'] },
      { label: 'Les achats', cells: ['on sait ce qui est commandé', 'des commandes en double, des ruptures'] },
      { label: 'Les outils', cells: ['un logiciel, quelques tableurs autour', 'quatre outils, chacun avec ses fiches'] },
      { label: 'Qui sait', cells: ['les chiffres sont dans le logiciel', 'les chiffres sont chez une personne'] },
    ], caption: 'Figure 1 · Six signes. Le critère n’est ni le chiffre d’affaires ni l’effectif : c’est le nombre de fois où la même donnée est ressaisie, et le temps passé à rapprocher des fichiers. Si deux signes seulement sont dans la seconde colonne, un logiciel de gestion commerciale bien tenu suffit souvent.', alt: 'Matrice de six signes : les ressaisies, les chiffres de fin de mois, le stock, les achats, les outils, qui sait ; pour chacun, le cas où les outils actuels suffisent et le cas où un ERP devient utile.' },
    base: { caption: 'Figure 2 · La quantité disponible d’un même article, le même matin. À gauche, quatre outils, quatre copies, quatre réponses, reliées par des ressaisies. À droite, une seule base : les ventes, le stock, les achats et la finance lisent la même quantité. Exemple construit.' },
    couches: { title: 'Un ERP, en cinq couches', layers: [
      { label: 'Données', items: [{ name: 'Les fichiers maîtres : un article, un client, un fournisseur n’existent qu’une fois', sub: 'tout le reste s’appuie dessus', accent: true }] },
      { label: 'Flux', items: [{ name: 'Les flux de bout en bout : de la commande à l’encaissement, de l’achat au paiement', sub: 'un document naît du précédent, sans ressaisie' }] },
      { label: 'Modules', items: [{ name: 'Les modules : ventes, achats, stock, production ou projets, finance, activés selon le besoin', sub: 'on n’allume que ce qui sert' }] },
      { label: 'Contrôle', items: [{ name: 'Les droits, les validations et le journal : qui saisit, qui approuve, qui a modifié quoi', sub: 'un prix ne change pas sans trace' }] },
      { label: 'Lecture', items: [{ name: 'Les chiffres lus dans la même base : marge, stock, encours, retards, le jour même', sub: 'plus de fichier à rapprocher' }] },
    ], caption: 'Figure 3 · La couche accentuée est la première : les fichiers maîtres. Un ERP posé sur des fiches en double donne des chiffres faux avec beaucoup de précision. Les flux, les modules, le contrôle et la lecture viennent ensuite, dans cet ordre.', alt: 'Cinq couches : données de référence (accentuée) ; flux ; modules ; contrôle ; lecture.' },
    choisir: { title: 'Choisir un ERP, en six temps', items: [
      { label: 'Écrire', sub: 'vos flux, sur une page chacun', accent: true },
      { label: 'Nettoyer', sub: 'les trois fichiers maîtres' },
      { label: 'Jouer', sub: 'vos scénarios, pas la démonstration' },
      { label: 'Compter', sub: 'les écarts : ce qu’il ne fait pas' },
      { label: 'Décider', sub: 'standard, adapté, ou sur mesure' },
      { label: 'Découper', sub: 'en vagues, chacune utilisée' },
    ], caption: 'Figure 4 · Le temps accentué est le premier : écrire vos flux. On ne choisit pas un ERP sur une démonstration, mais sur dix situations réelles jouées avec vos propres fiches. Ce que le logiciel ne fait pas s’appelle un écart : on les compte avant de décider entre un progiciel, un progiciel adapté et une construction sur mesure.', alt: 'Six temps : écrire (accentué), nettoyer, jouer, compter, décider, découper.' },
    fiches: { caption: 'Figure 5 · Le fichier des articles avant la migration : 1 240 fiches, dont 180 doublons et 150 fiches jamais mouvementées depuis deux ans. Il en reste 910, dont 40 à compléter avant l’import. Plus d’un quart du fichier ne méritait pas le voyage. Exemple construit.' },
    vagues: { title: 'Quatre vagues en huit mois', unit: 'mois', items: [
      { label: 'Cadrage et fiches', note: 'flux écrits, fichiers maîtres nettoyés, scénarios joués, écarts comptés', from: 0, to: 1, accent: true },
      { label: 'Vague 1 : ventes et stock', note: 'devis, commande, livraison, facture, encaissement ; stock par emplacement', from: 1, to: 3 },
      { label: 'Vague 2 : achats', note: 'demande, commande, réception, facture fournisseur, réapprovisionnement', from: 3, to: 5 },
      { label: 'Vague 3 : production ou projets', note: 'nomenclatures et ordres, ou affaires et temps passés, selon l’activité', from: 4, to: 6 },
      { label: 'Vague 4 : finance et lecture', note: 'encours, marge, tableaux lus chaque lundi ; export vers la comptabilité', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit mois dans l’exemple. La période accentuée est la première : cadrer et nettoyer, sans rien installer. Chaque vague se termine quand elle est utilisée, les tableurs qu’elle remplace fermés. La finance vient en dernier, quand les chiffres qu’elle lit sont devenus fiables. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit mois : cadrage et fiches (accentué, un mois), vague 1 ventes et stock, vague 2 achats, vague 3 production ou projets, vague 4 finance et lecture.' },
  },
  en: {
    cover: { eyebrow: 'ERP software · Algeria · 2027', title: ['ERP software in Algeria', 'one base, not one more tool'], subtitle: 'Each piece of data entered once, records cleaned first, a roll-out in waves', left: { label: 'Four tools', sub: 'four quantities for one article' }, right: { label: 'A single base', sub: 'read by all the modules' } },
    signes: { title: 'Do you need an ERP? Six signs', columns: ['Your current tools are enough', 'An ERP becomes useful'], rows: [
      { label: 'Re-typing', cells: ['data is entered in one place, sometimes two', 'the same sale is retyped in three tools'] },
      { label: 'Month-end figures', cells: ['they agree first time', 'three days reconciling files'] },
      { label: 'Stock', cells: ['the stock shown is the stock on the shelf', 'you call the warehouse before promising'] },
      { label: 'Purchasing', cells: ['you know what is on order', 'duplicate orders, stock-outs'] },
      { label: 'Tools', cells: ['one program, a few spreadsheets around it', 'four tools, each with its own records'] },
      { label: 'Who knows', cells: ['the figures are in the software', 'the figures are with one person'] },
    ], caption: 'Figure 1 · Six signs. The criterion is neither turnover nor headcount: it is the number of times the same data is retyped, and the time spent reconciling files. If only two signs are in the second column, a well-kept sales management program is often enough.', alt: 'Matrix of six signs: re-typing, month-end figures, stock, purchasing, tools, who knows; for each, the case where current tools are enough and the case where an ERP becomes useful.' },
    base: { caption: 'Figure 2 · The available quantity of the same article, on the same morning. On the left, four tools, four copies, four answers, linked by re-typing. On the right, a single base: sales, stock, purchasing and finance read the same quantity. Constructed example.' },
    couches: { title: 'An ERP, in five layers', layers: [
      { label: 'Data', items: [{ name: 'The master files: an article, a customer, a supplier exist only once', sub: 'everything else rests on them', accent: true }] },
      { label: 'Flows', items: [{ name: 'End-to-end flows: from the order to the payment received, from the purchase to the payment made', sub: 'one document is born from the previous one, no re-typing' }] },
      { label: 'Modules', items: [{ name: 'The modules: sales, purchasing, stock, production or projects, finance, switched on as needed', sub: 'only what is used is turned on' }] },
      { label: 'Control', items: [{ name: 'Rights, approvals and the log: who enters, who approves, who changed what', sub: 'a price does not change without a trace' }] },
      { label: 'Reading', items: [{ name: 'Figures read from the same base: margin, stock, receivables, delays, the same day', sub: 'no more files to reconcile' }] },
    ], caption: 'Figure 3 · The accented layer is the first: the master files. An ERP laid over duplicate records gives wrong figures with great precision. Flows, modules, control and reading come next, in that order.', alt: 'Five layers: master data (accented); flows; modules; control; reading.' },
    choisir: { title: 'Choosing an ERP, in six steps', items: [
      { label: 'Write', sub: 'your flows, one page each', accent: true },
      { label: 'Clean', sub: 'the three master files' },
      { label: 'Play', sub: 'your scenarios, not the demo' },
      { label: 'Count', sub: 'the gaps: what it does not do' },
      { label: 'Decide', sub: 'standard, adapted, or bespoke' },
      { label: 'Split', sub: 'into waves, each one used' },
    ], caption: 'Figure 4 · The accented step is the first: write your flows. An ERP is not chosen on a demonstration, but on ten real situations played with your own records. What the software does not do is called a gap: they are counted before deciding between a package, an adapted package and a bespoke build.', alt: 'Six steps: write (accented), clean, play, count, decide, split.' },
    fiches: { caption: 'Figure 5 · The item file before migration: 1,240 records, including 180 duplicates and 150 records with no movement for two years. 910 remain, 40 of which must be completed before the import. More than a quarter of the file did not deserve the trip. Constructed example.' },
    vagues: { title: 'Four waves in eight months', unit: 'mo', items: [
      { label: 'Framing and records', note: 'flows written, master files cleaned, scenarios played, gaps counted', from: 0, to: 1, accent: true },
      { label: 'Wave 1: sales and stock', note: 'quote, order, delivery, invoice, payment received; stock by location', from: 1, to: 3 },
      { label: 'Wave 2: purchasing', note: 'request, order, receipt, supplier invoice, replenishment', from: 3, to: 5 },
      { label: 'Wave 3: production, projects', note: 'bills of materials and orders, or jobs and time spent, depending on the business', from: 4, to: 6 },
      { label: 'Wave 4: finance, reading', note: 'receivables, margin, boards read every Monday; export to accounting', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight months in the example. The accented period is the first: framing and cleaning, with nothing installed. Each wave ends when it is used, with the spreadsheets it replaces closed. Finance comes last, once the figures it reads have become reliable. Indicative durations from a constructed example.', alt: 'Eight-month calendar: framing and records (accented, one month), wave 1 sales and stock, wave 2 purchasing, wave 3 production or projects, wave 4 finance and reading.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج ERP · الجزائر · 2027', title: ['برنامج ERP في الجزائر', 'قاعدة واحدة، لا أداة إضافية'], subtitle: 'كل معطى يُدخَل مرة واحدة، بطاقات تُنظَّف قبلاً، ووضع في الخدمة على موجات', left: { label: 'أربع أدوات', sub: 'أربع كميات لمادة واحدة' }, right: { label: 'قاعدة واحدة', sub: 'تقرؤها كل الوحدات' } },
    signes: { title: 'هل يلزم نظام متكامل؟ ست علامات', columns: ['أدواتكم الحالية تكفي', 'النظام المتكامل يصير نافعاً'], rows: [
      { label: 'إعادة الإدخال', cells: ['المعطى يُدخَل في مكان، وأحياناً اثنين', 'البيع نفسه يُعاد كتابته في ثلاث أدوات'] },
      { label: 'أرقام آخر الشهر', cells: ['تتطابق من أول مرة', 'ثلاثة أيام لمقاربة الملفات'] },
      { label: 'المخزون', cells: ['المخزون المعروض هو مخزون الرف', 'يُتَّصل بالمخزن قبل الوعد'] },
      { label: 'المشتريات', cells: ['نعرف ما هو مطلوب', 'طلبيات مكرَّرة، وانقطاعات'] },
      { label: 'الأدوات', cells: ['برنامج، وبضعة جداول حوله', 'أربع أدوات، ولكل واحدة بطاقاتها'] },
      { label: 'من يعرف', cells: ['الأرقام في البرنامج', 'الأرقام عند شخص واحد'] },
    ], caption: 'الشكل 1 · ست علامات. المعيار ليس رقم الأعمال ولا عدد العمّال: هو عدد المرات التي يُعاد فيها إدخال المعطى نفسه، والوقت المصروف في مقاربة الملفات. وإذا كانت علامتان فقط في العمود الثاني، فبرنامج تسيير تجاري محكم يكفي غالباً.', alt: 'مصفوفة ست علامات: إعادة الإدخال، أرقام آخر الشهر، المخزون، المشتريات، الأدوات، من يعرف؛ ولكل واحدة الحالة التي تكفي فيها الأدوات والحالة التي يصير فيها النظام المتكامل نافعاً.' },
    base: { caption: 'الشكل 2 · الكمية المتوفرة للمادة نفسها، في الصباح نفسه. على جهة، أربع أدوات، أربع نسخ، وأربعة أجوبة، تربطها إعادة الإدخال. وعلى الجهة الأخرى، قاعدة واحدة: المبيعات والمخزون والمشتريات والمالية تقرأ الكمية نفسها. مثال مركَّب.' },
    couches: { title: 'النظام المتكامل، في خمس طبقات', layers: [
      { label: 'البيانات', items: [{ name: 'الملفات المرجعية: المادة والزبون والمورّد لا يوجدون إلا مرة واحدة', sub: 'وكل الباقي يستند إليها', accent: true }] },
      { label: 'التدفقات', items: [{ name: 'التدفقات من أولها إلى آخرها: من الطلبية إلى القبض، ومن الشراء إلى الدفع', sub: 'الوثيقة تولد من سابقتها، دون إعادة إدخال' }] },
      { label: 'الوحدات', items: [{ name: 'الوحدات: المبيعات، المشتريات، المخزون، الإنتاج أو المشاريع، والمالية، تُفعَّل حسب الحاجة', sub: 'لا يُشغَّل إلا ما ينفع' }] },
      { label: 'المراقبة', items: [{ name: 'الصلاحيات، المصادقات، والسجل: من يُدخِل، من يوافق، ومن غيّر ماذا', sub: 'السعر لا يتغيّر دون أثر' }] },
      { label: 'القراءة', items: [{ name: 'الأرقام مقروءة من القاعدة نفسها: الهامش، المخزون، المستحَقات، والتأخرات، في اليوم نفسه', sub: 'لا ملفات تُقارَب بعد اليوم' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي الأولى: الملفات المرجعية. والنظام المتكامل الموضوع على بطاقات مكرَّرة يعطي أرقاماً خاطئة بدقة كبيرة. والتدفقات والوحدات والمراقبة والقراءة تأتي بعدها، بهذا الترتيب.', alt: 'خمس طبقات: البيانات المرجعية (مبرزة)؛ التدفقات؛ الوحدات؛ المراقبة؛ القراءة.' },
    choisir: { title: 'اختيار نظام متكامل، في ست مراحل', items: [
      { label: 'الكتابة', sub: 'تدفقاتكم، صفحة لكل واحد', accent: true },
      { label: 'التنظيف', sub: 'الملفات المرجعية الثلاثة' },
      { label: 'التجربة', sub: 'حالاتكم، لا عرض البائع' },
      { label: 'العدّ', sub: 'الفجوات: ما لا يفعله' },
      { label: 'القرار', sub: 'جاهز، مكيَّف، أو على المقاس' },
      { label: 'التقسيم', sub: 'إلى موجات، وكل واحدة مستعملة' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الأولى: كتابة تدفقاتكم. النظام المتكامل لا يُختار على عرض تجريبي، بل على عشر حالات حقيقية تُجرَّب ببطاقاتكم. وما لا يفعله البرنامج يُسمّى فجوة: تُعدّ قبل القرار بين برنامج جاهز، برنامج مكيَّف، وبناء على المقاس.', alt: 'ست مراحل: الكتابة (مبرزة)، التنظيف، التجربة، العدّ، القرار، التقسيم.' },
    fiches: { caption: 'الشكل 5 · ملف المواد قبل الترحيل: 1240 بطاقة، منها 180 مكرَّرة و150 لم تتحرك منذ سنتين. يبقى 910، منها 40 تُكمَل قبل الاستيراد. وأكثر من ربع الملف لم يكن يستحق الرحلة. مثال مركَّب.' },
    vagues: { title: 'أربع موجات في ثمانية أشهر', unit: 'شهر', items: [
      { label: 'التأطير والبطاقات', note: 'التدفقات مكتوبة، الملفات المرجعية منظَّفة، الحالات مجرَّبة، والفجوات معدودة', from: 0, to: 1, accent: true },
      { label: 'الموجة 1: المبيعات والمخزون', note: 'عرض سعر، طلبية، تسليم، فاتورة، وقبض؛ والمخزون حسب الموقع', from: 1, to: 3 },
      { label: 'الموجة 2: المشتريات', note: 'طلب، طلبية، استلام، فاتورة المورّد، وإعادة التموين', from: 3, to: 5 },
      { label: 'الموجة 3: الإنتاج أو المشاريع', note: 'قوائم المكوّنات والأوامر، أو الصفقات والأوقات، حسب النشاط', from: 4, to: 6 },
      { label: 'الموجة 4: المالية والقراءة', note: 'المستحَقات، الهامش، لوحات تُقرأ كل اثنين؛ والتصدير نحو المحاسبة', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أشهر في المثال. الفترة المبرزة هي الأولى: التأطير والتنظيف، دون تثبيت شيء. وكل موجة تنتهي حين تُستعمل، والجداول التي تعوّضها مغلقة. والمالية تأتي في الأخير، حين تصير الأرقام التي تقرؤها موثوقة. مدد تقريبية لمثال مركَّب.', alt: 'تقويم ثمانية أشهر: التأطير والبطاقات (مبرزة، شهر)، الموجة 1 المبيعات والمخزون، الموجة 2 المشتريات، الموجة 3 الإنتاج أو المشاريع، الموجة 4 المالية والقراءة.' },
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
      base: { svg: base(e.base, rtl), caption: t.base.caption, alt: e.base.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      choisir: { svg: steps({ title: t.choisir.title, steps: t.choisir.items, arrows: true, rtl }), caption: t.choisir.caption, alt: t.choisir.alt },
      fiches: { svg: fiches(e.fiches, rtl), caption: t.fiches.caption, alt: e.fiches.alt },
      vagues: { svg: timeline({ title: t.vagues.title, items: t.vagues.items, total: 8, tick: 1, unit: t.vagues.unit, rtl }), caption: t.vagues.caption, alt: t.vagues.alt },
    },
  };
}
