import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { unites, compte, STRINGS as SC } from './custom/quincaillerie.mjs';
export const slug = 'logiciel-quincaillerie-materiaux-de-construction-algerie-2027-caisse-stock-unites-multiples-credit-artisans-marchandise-payee-non-enlevee';
const T = {
  fr: {
    cover: { eyebrow: 'Quincaillerie et matériaux · Algérie · 2027', title: ['Logiciel quincaillerie', 'caisse, stock, crédit clients'], subtitle: 'Vendre à la pièce, à la boîte et au mètre, un compte par chantier, les sacs payés qui attendent au dépôt', left: { label: 'Trois stocks faux', sub: 'carton, boîte, pièce séparés' }, right: { label: 'Un stock juste', sub: 'une règle de conversion' } },
    unites: { caption: 'Figure 1 · Une vis achetée au carton, vendue à la boîte et à la pièce, n’est qu’un seul article : la pièce est l’unité de stock, la boîte vaut 100 pièces, le carton 2 000. Deux cartons, sept boîtes et quarante pièces font 4 740 pièces ; une vente de trois boîtes et vingt-cinq pièces en retire 325. Même règle pour le câble vendu au mètre. Quantités et prix sont un exemple construit, pas des prix de marché.' },
    vente: { title: 'Une vente au comptoir, en six temps', items: [
      { label: 'Chercher', sub: 'nom, dimension ou famille, en trois frappes' },
      { label: 'Choisir l’unité', sub: 'pièce, boîte, mètre ou sac, sur la même fiche' },
      { label: 'Appliquer le prix', sub: 'selon le client : détail, artisan, revendeur' },
      { label: 'Régler', sub: 'comptant, ou porté au compte du chantier', accent: true },
      { label: 'Enlever', sub: 'bon d’enlèvement envoyé au dépôt' },
      { label: 'Solder', sub: 'reste à enlever, suivi par client' },
    ], caption: 'Figure 2 · Le temps accentué est le quatrième : la vente devient soit un encaissement, soit une ligne sur le compte d’un chantier. Les deux derniers temps n’existent pas dans une caisse ordinaire : la marchandise lourde sort du dépôt sur un bon d’enlèvement, et ce qui est payé sans être chargé reste suivi jusqu’à la dernière sortie.', alt: 'Six temps : chercher, choisir l’unité, appliquer le prix, régler (accentué), enlever, solder.' },
    compte: { caption: 'Figure 3 · Le compte d’un artisan pendant un mois, avec un plafond de 300 000 DA. Quatre bons et deux versements : au quatrième bon, le solde atteint 335 000 DA et la vente attend l’accord du gérant. En bas, 200 sacs de ciment payés d’avance : 50 puis 80 enlevés, 70 restent réservés, et sur 500 sacs au dépôt seuls 430 sont à vendre. Montants, dates et plafond sont un exemple construit.' },
    situations: { title: 'Six situations de comptoir', columns: ['Aujourd’hui', 'Avec le logiciel'], rows: [
      { label: 'Article sans code-barres', cells: ['le prix se cherche dans un cahier ou de mémoire', 'recherche par nom, dimension ou famille, en trois frappes'] },
      { label: 'Câble, chaîne ou tuyau au mètre', cells: ['on coupe, on arrondit, le touret n’est jamais compté', 'vente en mètres avec décimales, reste du touret à jour'] },
      { label: 'Prix du fer ou du ciment qui change', cells: ['on vend à l’ancien prix pendant des jours', 'prix de revient recalculé, articles sous la marge signalés'] },
      { label: 'Liste de matériaux pour un chantier', cells: ['devis à la main, ressaisi le jour de la vente', 'devis par chantier, transformé en vente ligne par ligne'] },
      { label: 'Retour de marchandise non utilisée', cells: ['un avoir noté dans le carnet, le stock oublié', 'retour rattaché au bon, stock et solde corrigés ensemble'] },
      { label: 'Comptoir et dépôt séparés', cells: ['le client fait la navette avec un papier', 'bon d’enlèvement à l’écran du dépôt, sortie au chargement'] },
    ], caption: 'Figure 4 · Six situations de tous les jours. La colonne de gauche n’est pas une faute des vendeurs : c’est ce qu’on fait quand l’outil ne connaît ni le mètre, ni le chantier, ni le dépôt. La colonne de droite demande un fichier articles bien fait ; c’est lui, plus que l’écran de caisse, qui décide du résultat.', alt: 'Matrice de six situations de comptoir comparant la pratique actuelle et ce que fait le logiciel : article sans code-barres, vente au mètre, prix qui change, devis de chantier, retour de marchandise, comptoir et dépôt séparés.' },
    couches: { title: 'Un logiciel de quincaillerie, en cinq couches', layers: [
      { label: 'Articles et unités', items: [{ name: 'Une fiche par produit : unités d’achat et de vente, règle de conversion, famille, dimensions', sub: 'des milliers de références retrouvées en trois frappes, avec ou sans code-barres' }] },
      { label: 'Comptoir et caisse', items: [{ name: 'Vente rapide, prix par catégorie de client, remise encadrée, devis de chantier, caisse sans internet', sub: 'le vendeur ne quitte pas le client pour chercher un prix' }] },
      { label: 'Comptes et chantiers', items: [{ name: 'Un compte par client et par chantier : bons, versements, plafond, relevé à la date du jour', sub: 'le carnet de crédit devient un solde que tout le monde lit de la même façon', accent: true }] },
      { label: 'Dépôt et enlèvements', items: [{ name: 'Bon d’enlèvement, sorties partielles, marchandise payée réservée, livraisons, retours', sub: 'le dépôt sait ce qui est déjà vendu et ce qui reste à vendre' }] },
      { label: 'Achats, prix et marge', items: [{ name: 'Commandes, réceptions, prix de revient mis à jour, marge par article, seuils de réapprovisionnement', sub: 'un prix d’achat qui monte se voit avant la vente suivante, pas à l’inventaire' }] },
    ], caption: 'Figure 5 · La couche accentuée est celle des comptes et des chantiers : c’est elle qui remplace le carnet. Elle repose sur les deux couches du dessus, les articles et le comptoir, et alimente les deux du dessous : ce qui est vendu à crédit ou payé d’avance doit encore sortir du dépôt, et se racheter au bon prix.', alt: 'Cinq couches : articles et unités ; comptoir et caisse ; comptes et chantiers (accentuée) ; dépôt et enlèvements ; achats, prix et marge.' },
    calendrier: { title: 'Une quincaillerie équipée en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Fichier articles', note: 'familles, unités et conversions, import des listes fournisseurs, saisie des familles qui vendent le plus, le reste en parallèle', from: 0, to: 2, accent: true },
      { label: 'Stock de départ', note: 'comptage par rayon et par zone du dépôt, saisi dans l’unité de stock, écarts notés sans chercher de coupable', from: 2, to: 3 },
      { label: 'Comptes clients', note: 'reprise du carnet : solde par client et par chantier, plafonds fixés par le gérant, marchandise restant à enlever', from: 3, to: 4 },
      { label: 'Comptoir et dépôt', note: 'vente au comptoir et bon d’enlèvement en parallèle de l’ancienne méthode, puis seuls, un rayon après l’autre', from: 4, to: 5 },
      { label: 'Tableau du gérant', note: 'ventes et marge par famille, soldes clients, reste à enlever, articles sous le seuil, réglages de fin de mois', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple. La période accentuée est celle du fichier articles : deux semaines pour les familles, les unités et les articles qui font l’essentiel des ventes ; le reste du catalogue se saisit en parallèle des semaines suivantes.', alt: 'Calendrier de six semaines : fichier articles (accentué, deux semaines), stock de départ, comptes clients, comptoir et dépôt, tableau du gérant.' },
  },
  en: {
    cover: { eyebrow: 'Hardware and materials · Algeria · 2027', title: ['Hardware store software', 'till, stock, customer credit'], subtitle: 'Selling by the piece, the box and the metre, an account per site, paid bags waiting in the yard', left: { label: 'Three wrong stocks', sub: 'carton, box, piece apart' }, right: { label: 'One right stock', sub: 'one conversion rule' } },
    unites: { caption: 'Figure 1 · A screw bought by the carton and sold by the box and by the piece is a single item: the piece is the stock unit, the box is worth 100 pieces, the carton 2,000. Two cartons, seven boxes and forty pieces make 4,740 pieces; a sale of three boxes and twenty-five pieces removes 325. Same rule for cable sold by the metre. Quantities and prices are a constructed example, not market prices.' },
    vente: { title: 'A counter sale, in six steps', items: [
      { label: 'Search', sub: 'name, size or family, in three keystrokes' },
      { label: 'Pick the unit', sub: 'piece, box, metre or bag, on the same record' },
      { label: 'Apply the price', sub: 'by customer: retail, tradesman, reseller' },
      { label: 'Settle', sub: 'cash, or booked to the site account', accent: true },
      { label: 'Collect', sub: 'collection slip sent to the yard' },
      { label: 'Close out', sub: 'left to collect, tracked per customer' },
    ], caption: 'Figure 2 · The accented step is the fourth: the sale becomes either a cash receipt or a line on a site account. The last two steps do not exist in an ordinary till: heavy goods leave the yard on a collection slip, and what is paid for without being loaded stays tracked until the last pick-up.', alt: 'Six steps: search, pick the unit, apply the price, settle (accented), collect, close out.' },
    compte: { caption: 'Figure 3 · A tradesman’s account over one month, with a limit of 300,000 DZD. Four slips and two payments: at the fourth slip the balance reaches 335,000 DZD and the sale waits for the manager’s approval. Below, 200 bags of cement paid in advance: 50 then 80 collected, 70 stay reserved, and of 500 bags in the yard only 430 are for sale. Amounts, dates and limit are a constructed example.' },
    situations: { title: 'Six counter situations', columns: ['Today', 'With the software'], rows: [
      { label: 'Item without a barcode', cells: ['the price is looked up in a notebook or from memory', 'search by name, size or family, in three keystrokes'] },
      { label: 'Cable, chain or hose by the metre', cells: ['it is cut, rounded, and the reel is never counted', 'sale in metres with decimals, rest of the reel up to date'] },
      { label: 'Steel or cement price that changes', cells: ['goods sell at the old price for days', 'cost price recalculated, items under margin flagged'] },
      { label: 'List of materials for a site', cells: ['quotation by hand, retyped on the day of the sale', 'quotation per site, turned into a sale line by line'] },
      { label: 'Return of unused goods', cells: ['a credit noted in the notebook, stock forgotten', 'return tied to the slip, stock and balance corrected together'] },
      { label: 'Counter and yard apart', cells: ['the customer walks back and forth with a paper', 'collection slip on the yard screen, issue counted at loading'] },
    ], caption: 'Figure 4 · Six everyday situations. The left column is not the sales staff’s fault: it is what people do when the tool knows neither the metre, nor the site, nor the yard. The right column needs a well-built item file; that file, more than the till screen, decides the result.', alt: 'Matrix of six counter situations comparing current practice and what the software does: item without a barcode, sale by the metre, changing price, site quotation, return of goods, counter and yard apart.' },
    couches: { title: 'Hardware store software, in five layers', layers: [
      { label: 'Items and units', items: [{ name: 'One record per product: purchase and selling units, conversion rule, family, sizes', sub: 'thousands of references found in three keystrokes, with or without a barcode' }] },
      { label: 'Counter and till', items: [{ name: 'Fast sale, price by customer category, bounded discount, site quotation, till without internet', sub: 'the salesperson does not leave the customer to look up a price' }] },
      { label: 'Accounts and sites', items: [{ name: 'One account per customer and per site: slips, payments, limit, statement as of today', sub: 'the credit notebook becomes a balance everyone reads the same way', accent: true }] },
      { label: 'Yard and collections', items: [{ name: 'Collection slip, partial pick-ups, paid goods reserved, deliveries, returns', sub: 'the yard knows what is already sold and what is still for sale' }] },
      { label: 'Purchasing, prices, margin', items: [{ name: 'Orders, receipts, updated cost price, margin per item, reorder thresholds', sub: 'a rising purchase price shows before the next sale, not at the stock count' }] },
    ], caption: 'Figure 5 · The accented layer is accounts and sites: it is what replaces the notebook. It rests on the two layers above, items and counter, and feeds the two below: what is sold on credit or paid in advance still has to leave the yard, and be bought again at the right price.', alt: 'Five layers: items and units; counter and till; accounts and sites (accented); yard and collections; purchasing, prices and margin.' },
    calendrier: { title: 'A hardware store equipped in 2027, in weeks', unit: 'wk', items: [
      { label: 'Item file', note: 'families, units and conversions, import of supplier lists, entry of the best-selling families, the rest in parallel', from: 0, to: 2, accent: true },
      { label: 'Opening stock', note: 'count by aisle and by yard zone, entered in the stock unit, differences noted without looking for a culprit', from: 2, to: 3 },
      { label: 'Customer accounts', note: 'notebook taken over: balance per customer and per site, limits set by the manager, goods left to collect', from: 3, to: 4 },
      { label: 'Counter and yard', note: 'counter sale and collection slip alongside the old method, then alone, one aisle after another', from: 4, to: 5 },
      { label: 'Manager’s board', note: 'sales and margin by family, customer balances, goods left to collect, items under threshold, month-end tuning', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example. The accented period is the item file: two weeks for families, units and the items that make most of the sales; the rest of the catalogue is entered in parallel with the following weeks.', alt: 'Six-week calendar: item file (accented, two weeks), opening stock, customer accounts, counter and yard, manager’s board.' },
  },
  ar: {
    cover: { eyebrow: 'الخردوات ومواد البناء · الجزائر · 2027', title: ['برنامج محل الخردوات', 'الصندوق، المخزون، دَين الزبائن'], subtitle: 'البيع بالقطعة وبالعلبة وبالمتر، حساب لكل ورشة، وأكياس مدفوعة تنتظر في المستودع', left: { label: 'ثلاثة مخزونات خاطئة', sub: 'كرتونة، علبة، قطعة منفصلة' }, right: { label: 'مخزون واحد صحيح', sub: 'قاعدة تحويل واحدة' } },
    unites: { caption: 'الشكل 1 · البرغي الذي يُشترى بالكرتونة ويُباع بالعلبة وبالقطعة صنف واحد: القطعة هي وحدة المخزون، العلبة تساوي 100 قطعة، والكرتونة 2000. كرتونتان وسبع علب وأربعون قطعة تساوي 4740 قطعة؛ وبيع ثلاث علب وخمس وعشرين قطعة يسحب 325. والقاعدة نفسها للكابل المباع بالمتر. الكميات والأسعار مثال مركَّب، وليست أسعار السوق.' },
    vente: { title: 'بيع في المحل، في ست مراحل', items: [
      { label: 'البحث', sub: 'الاسم أو المقاس أو العائلة، بثلاث نقرات' },
      { label: 'اختيار الوحدة', sub: 'قطعة، علبة، متر أو كيس، في البطاقة نفسها' },
      { label: 'تطبيق السعر', sub: 'حسب الزبون: تجزئة، حرفي، بائع جملة' },
      { label: 'التسديد', sub: 'نقداً، أو يُقيَّد في حساب الورشة', accent: true },
      { label: 'الاستلام', sub: 'وصل استلام يُرسَل إلى المستودع' },
      { label: 'التصفية', sub: 'الباقي للاستلام، متابَع لكل زبون' },
    ], caption: 'الشكل 2 · المرحلة المبرزة هي الرابعة: البيع يصير إما قبضاً نقدياً، وإما سطراً في حساب ورشة. والمرحلتان الأخيرتان لا توجدان في صندوق عادي: البضاعة الثقيلة تخرج من المستودع بوصل استلام، وما دُفع دون أن يُحمَّل يبقى متابَعاً حتى آخر خروج.', alt: 'ست مراحل: البحث، اختيار الوحدة، تطبيق السعر، التسديد (مبرزة)، الاستلام، التصفية.' },
    compte: { caption: 'الشكل 3 · حساب حرفي خلال شهر، بسقف قدره 300 ألف دينار. أربعة وصولات ودفعتان: عند الوصل الرابع يبلغ الرصيد 335 ألف دينار والبيع ينتظر موافقة المسيّر. وفي الأسفل 200 كيس إسمنت مدفوعة مسبقاً: استُلم 50 ثم 80، و70 تبقى محجوزة، ومن 500 كيس في المستودع 430 فقط للبيع. المبالغ والتواريخ والسقف مثال مركَّب.' },
    situations: { title: 'ست حالات في المحل', columns: ['اليوم', 'مع البرنامج'], rows: [
      { label: 'صنف بلا رمز شريطي', cells: ['يُبحث عن السعر في كرّاس أو من الذاكرة', 'بحث بالاسم أو المقاس أو العائلة، بثلاث نقرات'] },
      { label: 'كابل أو سلسلة أو أنبوب بالمتر', cells: ['يُقطع ويُقرَّب، والبكرة لا تُحسب أبداً', 'بيع بالمتر مع الكسور، وباقي البكرة محدَّث'] },
      { label: 'سعر الحديد أو الإسمنت يتغيّر', cells: ['يُباع بالسعر القديم أياماً', 'سعر التكلفة يُعاد حسابه، والأصناف تحت الهامش تُنبَّه'] },
      { label: 'قائمة مواد لورشة', cells: ['عرض سعر باليد، يُعاد إدخاله يوم البيع', 'عرض سعر لكل ورشة، يتحوّل إلى بيع سطراً بسطر'] },
      { label: 'إرجاع بضاعة غير مستعمَلة', cells: ['رصيد يُكتب في الدفتر، والمخزون يُنسى', 'إرجاع مربوط بالوصل، يصحّح المخزون والرصيد معاً'] },
      { label: 'المحل والمستودع منفصلان', cells: ['الزبون يتنقّل بينهما بورقة', 'وصل الاستلام على شاشة المستودع، والخروج عند التحميل'] },
    ], caption: 'الشكل 4 · ست حالات يومية. العمود الأول ليس خطأ الباعة: هو ما يُفعل حين لا تعرف الأداة لا المتر ولا الورشة ولا المستودع. والعمود الثاني يحتاج ملف أصناف مُعَدّاً جيداً؛ وهو، أكثر من شاشة الصندوق، ما يحدّد النتيجة.', alt: 'مصفوفة ست حالات في المحل تقارن الممارسة الحالية وما يفعله البرنامج: صنف بلا رمز شريطي، بيع بالمتر، سعر يتغيّر، عرض سعر لورشة، إرجاع بضاعة، محل ومستودع منفصلان.' },
    couches: { title: 'برنامج محل الخردوات، في خمس طبقات', layers: [
      { label: 'الأصناف والوحدات', items: [{ name: 'بطاقة لكل منتَج: وحدات الشراء والبيع، قاعدة التحويل، العائلة، المقاسات', sub: 'آلاف الأصناف تُوجَد بثلاث نقرات، برمز شريطي أو بدونه' }] },
      { label: 'المحل والصندوق', items: [{ name: 'بيع سريع، سعر حسب فئة الزبون، تخفيض مؤطَّر، عرض سعر للورشة، وصندوق يعمل دون إنترنت', sub: 'البائع لا يترك الزبون ليبحث عن سعر' }] },
      { label: 'الحسابات والورشات', items: [{ name: 'حساب لكل زبون ولكل ورشة: وصولات، دفعات، سقف، وكشف بتاريخ اليوم', sub: 'دفتر الدَّين يصير رصيداً يقرؤه الجميع بالطريقة نفسها', accent: true }] },
      { label: 'المستودع والاستلام', items: [{ name: 'وصل استلام، خروج جزئي، بضاعة مدفوعة محجوزة، توصيل، وإرجاع', sub: 'المستودع يعرف ما بيع فعلاً وما بقي للبيع' }] },
      { label: 'الشراء والسعر والهامش', items: [{ name: 'طلبيات، استلام من المورِّد، سعر تكلفة محدَّث، هامش لكل صنف، وعتبات إعادة التموين', sub: 'سعر شراء يرتفع يُرى قبل البيع الموالي، لا عند الجرد' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي الحسابات والورشات: هي التي تعوّض الدفتر. تقوم على الطبقتين اللتين فوقها، الأصناف والمحل، وتغذّي اللتين تحتها: ما بيع بالدَّين أو دُفع مسبقاً يجب أن يخرج من المستودع، وأن يُعاد شراؤه بالسعر الصحيح.', alt: 'خمس طبقات: الأصناف والوحدات؛ المحل والصندوق؛ الحسابات والورشات (مبرزة)؛ المستودع والاستلام؛ الشراء والسعر والهامش.' },
    calendrier: { title: 'محل خردوات مجهَّز سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'ملف الأصناف', note: 'العائلات، الوحدات وقواعد التحويل، استيراد قوائم المورِّدين، إدخال العائلات الأكثر مبيعاً، والباقي بالتوازي', from: 0, to: 2, accent: true },
      { label: 'مخزون البداية', note: 'عدّ حسب الرفّ وحسب منطقة المستودع، يُدخَل بوحدة المخزون، والفوارق تُسجَّل دون البحث عن مذنب', from: 2, to: 3 },
      { label: 'حسابات الزبائن', note: 'استعادة الدفتر: رصيد لكل زبون ولكل ورشة، أسقف يحدّدها المسيّر، وبضاعة باقية للاستلام', from: 3, to: 4 },
      { label: 'المحل والمستودع', note: 'البيع ووصل الاستلام بالتوازي مع الطريقة القديمة، ثم وحدهما، رفّاً بعد رفّ', from: 4, to: 5 },
      { label: 'لوحة المسيّر', note: 'المبيعات والهامش حسب العائلة، أرصدة الزبائن، الباقي للاستلام، الأصناف تحت العتبة، وضبط نهاية الشهر', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال. الفترة المبرزة هي ملف الأصناف: أسبوعان للعائلات والوحدات والأصناف التي تصنع أغلب المبيعات؛ وباقي القائمة يُدخَل بالتوازي مع الأسابيع الموالية.', alt: 'تقويم ستة أسابيع: ملف الأصناف (مبرز، أسبوعان)، مخزون البداية، حسابات الزبائن، المحل والمستودع، لوحة المسيّر.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      unites: { svg: unites(e.unites, rtl), caption: t.unites.caption, alt: e.unites.alt },
      vente: { svg: steps({ title: t.vente.title, steps: t.vente.items, arrows: true, rtl }), caption: t.vente.caption, alt: t.vente.alt },
      compte: { svg: compte(e.compte, rtl), caption: t.compte.caption, alt: e.compte.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
