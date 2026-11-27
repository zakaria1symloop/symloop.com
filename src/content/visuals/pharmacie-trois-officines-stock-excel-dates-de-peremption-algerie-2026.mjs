import { cover, layers, matrix, timeline, steps } from '../../lib/visuals/index.mjs';

export const slug = 'pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Pharmacie et commerce', title: ['Trois officines,', 'un stock sur Excel,', 'des périmés chaque mois.'], subtitle: 'Pourquoi Excel casse à partir de la deuxième officine, ce qui se règle en une semaine, le logiciel qu’il vous faut, et où l’IA aide vraiment.', left: { label: 'Aujourd’hui', sub: 'un fichier par officine, un inventaire par surprise' }, right: { label: 'Dans 10 semaines', sub: 'un stock, trois comptoirs, zéro périmé oublié' }, note: 'Algérie · 2026' },
    leaks: { title: 'Où l’argent part quand le stock vit sur Excel', items: [
      { label: 'Le périmé découvert trop tard', sub: 'Personne ne sait quelle boîte expire le mois prochain. On le découvre à l’inventaire, ou au comptoir.' },
      { label: 'La rupture dans une officine, le surstock dans l’autre', sub: 'Le même produit manque à Oran-centre et dort à Bir El Djir. Personne ne voit les deux à la fois.' },
      { label: 'La commande fournisseur de mémoire', sub: 'On recommande ce qu’on croit manquer. Les fonds de rayon s’accumulent.' },
      { label: 'Le lot non tracé', sub: 'Un rappel de lot ou un contrôle, et il faut fouiller les factures papier.' },
      { label: 'L’inventaire qui ferme l’officine', sub: 'Une journée par officine, deux fois par an, pour un chiffre déjà faux le lendemain.', accent: true },
    ], caption: 'Figure 1 · Cinq fuites, toutes causées par la même chose : chaque officine a sa vérité, et aucune n’est à jour.', alt: 'Les cinq fuites d’argent d’une pharmacie multi-officines gérée sur Excel : périmés, ruptures et surstocks, commandes de mémoire, lots non tracés, inventaires qui ferment l’officine.' },
    platform: { title: 'Ce qu’un logiciel multi-officines contient, au minimum', layers: [
      { label: 'Comptoir', items: [{ name: 'Vente et caisse', sub: 'code-barres, Chifa et tiers payant, ticket' }, { name: 'Alerte au comptoir', sub: 'produit périmant, lot bloqué, substitut disponible' }] },
      { label: 'Stock', items: [{ name: 'Fiche produit unique', sub: 'par lot et date de péremption, pour les trois officines', accent: true }, { name: 'Transferts entre officines', sub: 'proposés automatiquement avant toute commande' }] },
      { label: 'Achats', items: [{ name: 'Commande fournisseur calculée', sub: 'ventes réelles, délais, stock des trois sites' }, { name: 'Réception par scan', sub: 'lot, date, écarts, prix' }] },
      { label: 'Direction', items: [{ name: 'Tableau de bord', sub: 'périmés à 90 jours, ruptures, marge par officine' }, { name: 'Inventaire tournant', sub: 'dix minutes par jour, jamais une fermeture' }] },
      { label: 'Données', items: [{ name: 'Reprise de vos fichiers Excel', sub: 'nettoyés et importés une fois' }, { name: 'Hébergement conforme loi 18-07', sub: 'données patients et ventes' }] },
    ], caption: 'Figure 2 · La fiche produit par lot et par date est le centre. Le transfert entre officines est la fonction qui paie le logiciel en quelques mois.', alt: 'Architecture d’un logiciel de pharmacie multi-officines : vente et caisse avec Chifa, alertes au comptoir, fiche produit par lot et date, transferts entre officines, commandes fournisseur calculées, réception par scan, tableau de bord, inventaire tournant, reprise Excel, hébergement conforme loi 18-07.' },
    ai: { title: 'Où l’IA aide une pharmacie multi-officines, et où elle n’apporte rien', columns: ['Gain réel', 'Prérequis'], rows: [
      { label: 'Prévoir les ruptures et proposer la commande', cells: [2, 'Six mois de ventes par officine dans le logiciel'] },
      { label: 'Proposer un transfert avant qu’un lot n’expire', cells: [2, 'Stock par lot et par date, à jour'] },
      { label: 'Lire les factures fournisseurs et les rapprocher', cells: [1, 'Factures scannées ou PDF'] },
      { label: 'Détecter les anomalies de caisse', cells: [1, 'Trois mois de ventes horodatées'] },
      { label: 'Conseil au comptoir par chatbot', cells: [0, 'Hors sujet : le conseil est l’acte du pharmacien'] },
    ], legend: '●  gain fort      ◐  gain moyen      ○  pas encore, ou hors sujet', caption: 'Figure 3 · L’IA prévoit et propose. Elle ne remplace ni le pharmacien ni un stock faux.', alt: 'Usages de l’IA pour une pharmacie multi-officines classés par gain : prévision des ruptures et transferts anticipés forts, lecture des factures et anomalies de caisse moyens, chatbot de conseil hors sujet.' },
    timeline: { title: 'D’Excel à un stock unique, sans fermer une officine', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'vos familles de produits, vos fournisseurs, vos règles', from: 0, to: 1 },
      { label: 'Reprise des données', note: 'trois fichiers Excel, doublons, lots sans date', from: 1, to: 3 },
      { label: 'Développement et paramétrage', note: 'stock, comptoir, achats, tableau de bord', from: 3, to: 8 },
      { label: 'Première officine', note: 'inventaire tournant, deux semaines en parallèle', from: 8, to: 9 },
      { label: 'Les deux autres', note: 'transferts activés, première commande calculée', from: 9, to: 10, accent: true },
    ], caption: 'Figure 4 · Dix semaines. On n’ouvre les transferts qu’une fois les trois stocks fiables.', alt: 'Calendrier en semaines : cadrage 0 à 1, reprise des données 1 à 3, développement et paramétrage 3 à 8, première officine 8 à 9, les deux autres 9 à 10.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Pharmacy and retail', title: ['Three pharmacies,', 'stock on Excel,', 'expired goods every month.'], subtitle: 'Why Excel breaks from the second branch, what gets fixed in a week, the software you need, and where AI really helps.', left: { label: 'Today', sub: 'one file per branch, a surprise inventory' }, right: { label: 'In 10 weeks', sub: 'one stock, three counters, no forgotten expiry' }, note: 'Algeria · 2026' },
    leaks: { title: 'Where the money goes when stock lives on Excel', items: [
      { label: 'Expiry discovered too late', sub: 'Nobody knows which box expires next month. You find out at inventory, or at the counter.' },
      { label: 'Stock-out in one branch, overstock in the other', sub: 'The same product is missing downtown and sleeping in the suburb. Nobody sees both at once.' },
      { label: 'Supplier orders from memory', sub: 'You reorder what you think is missing. Slow movers pile up.' },
      { label: 'Untracked batches', sub: 'A batch recall or an inspection, and you dig through paper invoices.' },
      { label: 'The inventory that closes the shop', sub: 'One day per branch, twice a year, for a number already wrong the next day.', accent: true },
    ], caption: 'Figure 1 · Five leaks, all caused by the same thing: each branch has its own truth, and none is up to date.', alt: 'The five money leaks of a multi-branch pharmacy managed on Excel: expiries, stock-outs and overstock, orders from memory, untracked batches, inventories that close the shop.' },
    platform: { title: 'What multi-branch pharmacy software contains, at minimum', layers: [
      { label: 'Counter', items: [{ name: 'Sales and till', sub: 'barcode, Chifa and third-party payment, receipt' }, { name: 'Counter alerts', sub: 'expiring product, blocked batch, available substitute' }] },
      { label: 'Stock', items: [{ name: 'Single product record', sub: 'per batch and expiry date, across the three branches', accent: true }, { name: 'Transfers between branches', sub: 'proposed automatically before any order' }] },
      { label: 'Purchasing', items: [{ name: 'Computed supplier order', sub: 'real sales, lead times, stock of the three sites' }, { name: 'Receiving by scan', sub: 'batch, date, discrepancies, price' }] },
      { label: 'Management', items: [{ name: 'Dashboard', sub: 'expiries at 90 days, stock-outs, margin per branch' }, { name: 'Rolling inventory', sub: 'ten minutes a day, never a closure' }] },
      { label: 'Data', items: [{ name: 'Import of your Excel files', sub: 'cleaned and imported once' }, { name: 'Law 18-07 compliant hosting', sub: 'patient and sales data' }] },
    ], caption: 'Figure 2 · The product record per batch and date is the centre. Transfers between branches are the feature that pays for the software within months.', alt: 'Architecture of multi-branch pharmacy software: sales and till with Chifa, counter alerts, product record per batch and date, transfers between branches, computed supplier orders, receiving by scan, dashboard, rolling inventory, Excel import, Law 18-07 compliant hosting.' },
    ai: { title: 'Where AI helps a multi-branch pharmacy, and where it adds nothing', columns: ['Real gain', 'Prerequisite'], rows: [
      { label: 'Forecasting stock-outs and proposing the order', cells: [2, 'Six months of sales per branch in the software'] },
      { label: 'Proposing a transfer before a batch expires', cells: [2, 'Stock per batch and date, up to date'] },
      { label: 'Reading supplier invoices and reconciling them', cells: [1, 'Scanned or PDF invoices'] },
      { label: 'Detecting till anomalies', cells: [1, 'Three months of timestamped sales'] },
      { label: 'Counter advice by chatbot', cells: [0, 'Off topic: advice is the pharmacist’s act'] },
    ], legend: '●  strong gain      ◐  medium gain      ○  not yet, or off topic', caption: 'Figure 3 · AI forecasts and proposes. It replaces neither the pharmacist nor a wrong stock.', alt: 'AI uses for a multi-branch pharmacy ranked by gain: stock-out forecasting and anticipated transfers strong, invoice reading and till anomalies medium, advice chatbot off topic.' },
    timeline: { title: 'From Excel to a single stock, without closing a branch', unit: 'weeks', items: [
      { label: 'Scoping', note: 'your product families, suppliers, rules', from: 0, to: 1 },
      { label: 'Data import', note: 'three Excel files, duplicates, batches without dates', from: 1, to: 3 },
      { label: 'Development and setup', note: 'stock, counter, purchasing, dashboard', from: 3, to: 8 },
      { label: 'First branch', note: 'rolling inventory, two weeks in parallel', from: 8, to: 9 },
      { label: 'The other two', note: 'transfers enabled, first computed order', from: 9, to: 10, accent: true },
    ], caption: 'Figure 4 · Ten weeks. Transfers open only once the three stocks are reliable.', alt: 'Timeline in weeks: scoping 0 to 1, data import 1 to 3, development and setup 3 to 8, first branch 8 to 9, the other two 9 to 10.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · صيدلية وتجارة', title: ['ثلاث صيدليات،', 'مخزون على Excel،', 'منتهيات كل شهر.'], subtitle: 'لماذا ينكسر Excel من الفرع الثاني، ما يُحلّ في أسبوع، البرنامج الذي تحتاجه، وأين يساعد الذكاء الاصطناعي فعلاً.', left: { label: 'اليوم', sub: 'ملف لكل فرع، جرد بالمفاجأة' }, right: { label: 'بعد 10 أسابيع', sub: 'مخزون واحد، ثلاثة أكشاك، لا منتهٍ منسي' }, note: 'الجزائر · 2026' },
    leaks: { title: 'أين يذهب المال عندما يعيش المخزون على Excel', items: [
      { label: 'المنتهي يُكتشف متأخراً', sub: 'لا أحد يعرف أي علبة تنتهي الشهر القادم. نكتشفه في الجرد أو عند الكشك.' },
      { label: 'نفاد في فرع، وفائض في الآخر', sub: 'المنتج نفسه ناقص في الوسط ونائم في الضاحية. لا أحد يرى الاثنين معاً.' },
      { label: 'طلب المورّد من الذاكرة', sub: 'نعيد طلب ما نظن أنه ناقص. وتتراكم المنتجات البطيئة.' },
      { label: 'الدفعة غير المتتبعة', sub: 'سحب دفعة أو مراقبة، فنبحث في الفواتير الورقية.' },
      { label: 'الجرد الذي يغلق الصيدلية', sub: 'يوم لكل فرع مرتين في السنة، لرقم خاطئ في اليوم التالي.', accent: true },
    ], caption: 'الشكل 1 · خمسة تسربات سببها واحد: لكل فرع حقيقته، ولا واحدة منها محدّثة.', alt: 'التسربات المالية الخمسة لصيدلية متعددة الفروع مسيّرة على Excel.' },
    platform: { title: 'ما يحتويه برنامج متعدد الفروع، كحد أدنى', layers: [
      { label: 'الكشك', items: [{ name: 'البيع والصندوق', sub: 'باركود، الشفاء والدافع الثالث، تذكرة' }, { name: 'تنبيه عند الكشك', sub: 'منتج قارب الانتهاء، دفعة محجوبة، بديل متوفر' }] },
      { label: 'المخزون', items: [{ name: 'بطاقة منتج واحدة', sub: 'لكل دفعة وتاريخ انتهاء، للفروع الثلاثة', accent: true }, { name: 'تحويلات بين الفروع', sub: 'تُقترح تلقائياً قبل أي طلب' }] },
      { label: 'المشتريات', items: [{ name: 'طلب مورّد محسوب', sub: 'مبيعات حقيقية، آجال، مخزون المواقع الثلاثة' }, { name: 'استلام بالمسح', sub: 'دفعة، تاريخ، فوارق، سعر' }] },
      { label: 'الإدارة', items: [{ name: 'لوحة قيادة', sub: 'منتهيات خلال 90 يوماً، نفادات، هامش لكل فرع' }, { name: 'جرد دوري', sub: 'عشر دقائق يومياً، لا إغلاق أبداً' }] },
      { label: 'البيانات', items: [{ name: 'استرجاع ملفات Excel', sub: 'تُنظَّف وتُستورد مرة واحدة' }, { name: 'استضافة مطابقة للقانون 18-07', sub: 'بيانات المرضى والمبيعات' }] },
    ], caption: 'الشكل 2 · بطاقة المنتج لكل دفعة وتاريخ هي المركز. التحويل بين الفروع هو الوظيفة التي تسدّد ثمن البرنامج في أشهر.', alt: 'بنية برنامج صيدلية متعدد الفروع.' },
    ai: { title: 'أين يساعد الذكاء الاصطناعي صيدلية متعددة الفروع، وأين لا يضيف شيئاً', columns: ['الفائدة الحقيقية', 'الشرط المسبق'], rows: [
      { label: 'توقّع النفاد واقتراح الطلب', cells: [2, 'ستة أشهر من مبيعات كل فرع في البرنامج'] },
      { label: 'اقتراح تحويل قبل انتهاء دفعة', cells: [2, 'مخزون بالدفعة والتاريخ، محدّث'] },
      { label: 'قراءة فواتير المورّدين ومطابقتها', cells: [1, 'فواتير ممسوحة أو PDF'] },
      { label: 'كشف شذوذ الصندوق', cells: [1, 'ثلاثة أشهر من مبيعات موقّتة'] },
      { label: 'نصيحة عند الكشك بروبوت محادثة', cells: [0, 'خارج الموضوع: النصيحة فعل الصيدلي'] },
    ], legend: '●  فائدة قوية      ◐  متوسطة      ○  ليس بعد أو خارج الموضوع', caption: 'الشكل 3 · الذكاء الاصطناعي يتوقّع ويقترح. لا يعوّض الصيدلي ولا مخزوناً خاطئاً.', alt: 'استخدامات الذكاء الاصطناعي لصيدلية متعددة الفروع حسب الفائدة.' },
    timeline: { title: 'من Excel إلى مخزون واحد دون إغلاق فرع', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'عائلات منتجاتكم، مورّدوكم، قواعدكم', from: 0, to: 1 },
      { label: 'استرجاع البيانات', note: 'ثلاثة ملفات Excel، تكرارات، دفعات بلا تاريخ', from: 1, to: 3 },
      { label: 'التطوير والإعداد', note: 'مخزون، كشك، مشتريات، لوحة قيادة', from: 3, to: 8 },
      { label: 'الفرع الأول', note: 'جرد دوري، أسبوعان بالتوازي', from: 8, to: 9 },
      { label: 'الفرعان الآخران', note: 'تفعيل التحويلات، أول طلب محسوب', from: 9, to: 10, accent: true },
    ], caption: 'الشكل 4 · عشرة أسابيع. لا نفتح التحويلات إلا بعد أن تصبح المخزونات الثلاثة موثوقة.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      leaks: { svg: steps({ title: t.leaks.title, steps: t.leaks.items, arrows: false, rtl }), caption: t.leaks.caption, alt: t.leaks.alt },
      platform: { svg: layers({ title: t.platform.title, layers: t.platform.layers, rtl }), caption: t.platform.caption, alt: t.platform.alt },
      ai: { svg: matrix({ title: t.ai.title, columns: t.ai.columns, rows: t.ai.rows, legend: t.ai.legend, rtl }), caption: t.ai.caption, alt: t.ai.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 10, tick: 2, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
