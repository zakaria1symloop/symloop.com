import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { stock, fiche, STRINGS as SC } from './custom/boulangerie.mjs';
export const slug = 'logiciel-boulangerie-patisserie-algerie-2027-production-du-jour-invendus-ruptures-commandes-de-gateaux-acompte-cout-de-revient-recette';
const T = {
  fr: {
    cover: { eyebrow: 'Boulangerie-pâtisserie · Algérie · 2027', title: ['Logiciel boulangerie pâtisserie', 'ni trop, ni trop peu'], subtitle: 'Production du jour, invendus et ruptures, gâteaux sur commande avec acompte, coût de revient par recette', left: { label: 'Au jugé', sub: 'trop d’un côté, pas assez de l’autre' }, right: { label: 'Au chiffre', sub: 'invendus et ruptures notés chaque soir' } },
    stock: { caption: 'Figure 1 · Le stock de deux produits, de l’ouverture à la fermeture. Les croissants, produits en trois fournées, finissent la journée avec vingt-quatre invendus, un sur cinq. Les millefeuilles, produits en une fois, manquent avant 17 h, et douze demandes sont refusées. La boutique fait les deux erreurs le même jour, et aucune n’est écrite nulle part. Quantités, fournées et demandes sont un exemple construit.' },
    couches: { title: 'Un logiciel de boulangerie-pâtisserie, en cinq couches', layers: [
      { label: 'Vente au comptoir', items: [{ name: 'Touches avec photo, vente à la pièce, au poids ou au plateau, boîtes et coffrets, caisse sans internet', sub: 'la file du matin est servie sans chercher un prix' }] },
      { label: 'Production du jour', items: [{ name: 'Plan de fournées par produit, d’après les ventes du même jour de la semaine, les commandes et les fêtes', sub: 'chaque soir : invendus et heure de rupture, produit par produit', accent: true }] },
      { label: 'Commandes', items: [{ name: 'Gâteaux sur commande : date, heure, parts, parfum, inscription, modèle, acompte, reste à payer', sub: 'le cahier de commandes devient le planning du laboratoire' }] },
      { label: 'Recettes et matières', items: [{ name: 'Fiches techniques, coût par pièce, stock de farine, beurre, sucre et œufs, écart entre prévu et consommé', sub: 'un prix d’ingrédient qui change se voit le jour de l’achat' }] },
      { label: 'Boutiques et pilotage', items: [{ name: 'Répartition du laboratoire vers les boutiques, retours d’invendus, ventes et marge par produit', sub: 'on sait quel produit gagne, et dans quelle boutique' }] },
    ], caption: 'Figure 2 · La couche accentuée est la production du jour : c’est celle qu’aucune caisse ne fait. Elle se nourrit de la vente au comptoir, au-dessus, et des commandes, en dessous ; les recettes disent ce qu’elle coûte, et les boutiques ce qu’elle devient.', alt: 'Cinq couches : vente au comptoir ; production du jour (accentuée) ; commandes ; recettes et matières ; boutiques et pilotage.' },
    commande: { title: 'Un gâteau sur commande, en six temps', items: [
      { label: 'Noter', sub: 'date, heure, parts, parfum, inscription, modèle', accent: true },
      { label: 'Prendre l’acompte', sub: 'reçu remis, reste à payer affiché' },
      { label: 'Planifier', sub: 'au laboratoire, au jour et à l’heure voulus' },
      { label: 'Produire', sub: 'la fiche du jour, avec la photo du modèle' },
      { label: 'Remettre et solder', sub: 'client prévenu la veille, solde encaissé' },
      { label: 'Garder', sub: 'l’historique, pour l’an prochain' },
    ], caption: 'Figure 3 · Le temps accentué est le premier : la date, l’heure, les parts, le parfum, l’inscription et le modèle se notent une fois, complètement. Une commande n’entre au planning du laboratoire qu’avec son acompte ; elle ne se ferme qu’au retrait, quand le solde est encaissé.', alt: 'Six temps : noter (accentué), prendre l’acompte, planifier, produire, remettre et solder, garder.' },
    fiche: { caption: 'Figure 4 · La fiche technique d’une fournée de soixante croissants : 2 400 DA de matière, soit 40 DA la pièce. Vendu 65 DA, le croissant laisse 25 DA avant le travail et les charges. Si le beurre augmente d’un quart, la marge tombe à 17,50 DA, 30 % de moins. Le repère de quantité, 38 %, vient du modèle dit du vendeur de journaux. Quantités et prix sont un exemple construit, pas des prix de marché.' },
    situations: { title: 'Six situations de boulangerie-pâtisserie', columns: ['Aujourd’hui', 'Avec le logiciel'], rows: [
      { label: 'Gâteau commandé pour samedi', cells: ['noté dans un cahier, sans acompte ni photo', 'commande datée, acompte reçu, modèle joint, au planning'] },
      { label: 'Invendus du soir', cells: ['donnés ou jetés, jamais comptés', 'saisis à la fermeture, produit par produit'] },
      { label: 'Rupture en milieu d’après-midi', cells: ['on dit « il n’y en a plus », et c’est tout', 'heure notée, quantité du lendemain revue'] },
      { label: 'Prix du beurre qui change', cells: ['la marge baisse sans que personne le voie', 'coût par pièce recalculé le jour de l’achat'] },
      { label: 'Trois boutiques, un laboratoire', cells: ['répartition au téléphone, retours oubliés', 'bons de répartition, retours comptés par boutique'] },
      { label: 'Semaine de fête', cells: ['on double tout, de mémoire', 'ventes de la même fête l’an passé, commandes déjà prises'] },
    ], caption: 'Figure 5 · Six situations de la semaine. Dans la colonne de gauche, rien n’est mal fait : il manque seulement deux chiffres, les invendus et les ruptures, et un endroit où les commandes ne peuvent pas se perdre. La colonne de droite ne demande pas plus de travail au comptoir, sauf une minute à la fermeture.', alt: 'Matrice de six situations de boulangerie-pâtisserie comparant la pratique actuelle et ce que fait le logiciel : gâteau sur commande, invendus du soir, rupture l’après-midi, prix du beurre, trois boutiques et un laboratoire, semaine de fête.' },
    calendrier: { title: 'Une boulangerie-pâtisserie équipée en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Produits et comptoir', note: 'produits avec photo et prix, vente à la pièce, au poids et au plateau, caisse au comptoir en parallèle de l’ancienne', from: 0, to: 1 },
      { label: 'Invendus et ruptures', note: 'relevé de fermeture chaque soir, heure de rupture, première semaine de chiffres, plan de fournées du lendemain', from: 1, to: 2, accent: true },
      { label: 'Commandes', note: 'cahier repris dans le logiciel, acomptes, planning du laboratoire, rappel au client la veille', from: 2, to: 3 },
      { label: 'Recettes et matières', note: 'fiches techniques des vingt produits qui se vendent le plus, coût par pièce, stock des matières principales', from: 3, to: 4 },
      { label: 'Boutiques et pilotage', note: 'répartition vers les boutiques, retours d’invendus, marge par produit, tableau du gérant', from: 4, to: 5 },
    ], caption: 'Figure 6 · Cinq semaines dans l’exemple. La semaine accentuée est la deuxième : sept soirs de relevés suffisent à sortir le premier plan de fournées, et c’est à partir de là que les quantités changent.', alt: 'Calendrier de cinq semaines : produits et comptoir, invendus et ruptures (accentué), commandes, recettes et matières, boutiques et pilotage.' },
  },
  en: {
    cover: { eyebrow: 'Bakery and pastry · Algeria · 2027', title: ['Bakery and pastry shop software', 'neither too much nor too little'], subtitle: 'The day’s production, unsold goods and shortages, cakes to order with a deposit, cost per recipe', left: { label: 'By guesswork', sub: 'too much here, not enough there' }, right: { label: 'By the figures', sub: 'unsold and shortages noted every evening' } },
    stock: { caption: 'Figure 1 · The stock of two products, from opening to closing. Croissants, made in three batches, end the day with twenty-four unsold, one in five. Millefeuilles, made in one go, run out before 5 p.m., and twelve requests are refused. The shop makes both mistakes on the same day, and neither is written down anywhere. Quantities, batches and requests are a constructed example.' },
    couches: { title: 'Bakery and pastry software, in five layers', layers: [
      { label: 'Counter sales', items: [{ name: 'Buttons with photos, sale by the piece, by weight or by the tray, boxes, till without internet', sub: 'the morning queue is served without looking up a price' }] },
      { label: 'The day’s production', items: [{ name: 'Batch plan per product, from the sales of the same weekday, the orders and the feast days', sub: 'every evening: unsold and the time it ran out, product by product', accent: true }] },
      { label: 'Orders', items: [{ name: 'Cakes to order: date, time, portions, flavour, inscription, model, deposit, balance due', sub: 'the order notebook becomes the kitchen’s schedule' }] },
      { label: 'Recipes and ingredients', items: [{ name: 'Recipe sheets, cost per piece, stock of flour, butter, sugar and eggs, planned against used', sub: 'an ingredient price that changes shows on the day of purchase' }] },
      { label: 'Shops and steering', items: [{ name: 'Dispatch from the kitchen to the shops, unsold returns, sales and margin per product', sub: 'you know which product earns, and in which shop' }] },
    ], caption: 'Figure 2 · The accented layer is the day’s production: it is the one no till does. It feeds on counter sales, above, and on orders, below; recipes say what it costs, and shops say what becomes of it.', alt: 'Five layers: counter sales; the day’s production (accented); orders; recipes and ingredients; shops and steering.' },
    commande: { title: 'A cake to order, in six steps', items: [
      { label: 'Write it down', sub: 'date, time, portions, flavour, inscription, model', accent: true },
      { label: 'Take the deposit', sub: 'receipt given, balance due shown' },
      { label: 'Schedule', sub: 'in the kitchen, on the day and at the time wanted' },
      { label: 'Make', sub: 'the day’s sheet, with the photo of the model' },
      { label: 'Hand over, settle', sub: 'customer told the day before, balance paid' },
      { label: 'Keep', sub: 'the history, for next year' },
    ], caption: 'Figure 3 · The accented step is the first: date, time, portions, flavour, inscription and model are written down once, completely. An order only enters the kitchen’s schedule with its deposit; it only closes at collection, when the balance is paid.', alt: 'Six steps: write it down (accented), take the deposit, schedule, make, hand over and settle, keep.' },
    fiche: { caption: 'Figure 4 · The recipe sheet for a batch of sixty croissants: 2,400 DZD of ingredients, that is 40 DZD a piece. Sold at 65 DZD, the croissant leaves 25 DZD before labour and overheads. If butter goes up by a quarter, the margin falls to 17.50 DZD, 30 % less. The quantity marker, 38 %, comes from the so-called newsvendor model. Quantities and prices are a constructed example, not market prices.' },
    situations: { title: 'Six bakery and pastry situations', columns: ['Today', 'With the software'], rows: [
      { label: 'A cake ordered for Saturday', cells: ['noted in a notebook, no deposit, no photo', 'dated order, deposit taken, model attached, scheduled'] },
      { label: 'The evening’s unsold goods', cells: ['given away or thrown out, never counted', 'entered at closing, product by product'] },
      { label: 'Running out mid-afternoon', cells: ['people are told “there is none left”, and that is all', 'time noted, next day’s quantity reviewed'] },
      { label: 'The price of butter changes', cells: ['the margin falls without anyone seeing it', 'cost per piece recalculated on the day of purchase'] },
      { label: 'Three shops, one kitchen', cells: ['dispatch by phone, returns forgotten', 'dispatch slips, returns counted per shop'] },
      { label: 'A feast week', cells: ['everything is doubled, from memory', 'sales of the same feast last year, orders already taken'] },
    ], caption: 'Figure 5 · Six situations of the week. In the left column nothing is done badly: only two figures are missing, the unsold and the shortages, and a place where orders cannot get lost. The right column asks no more work at the counter, except one minute at closing.', alt: 'Matrix of six bakery and pastry situations comparing current practice and what the software does: cake to order, evening’s unsold, afternoon shortage, price of butter, three shops and one kitchen, feast week.' },
    calendrier: { title: 'A bakery and pastry shop equipped in 2027, in weeks', unit: 'wk', items: [
      { label: 'Products and counter', note: 'products with photo and price, sale by the piece, by weight and by the tray, till at the counter alongside the old one', from: 0, to: 1 },
      { label: 'Unsold and shortages', note: 'closing record every evening, time it ran out, first week of figures, next day’s batch plan', from: 1, to: 2, accent: true },
      { label: 'Orders', note: 'notebook taken over into the software, deposits, kitchen schedule, reminder to the customer the day before', from: 2, to: 3 },
      { label: 'Recipes and ingredients', note: 'recipe sheets for the twenty best-selling products, cost per piece, stock of the main ingredients', from: 3, to: 4 },
      { label: 'Shops and steering', note: 'dispatch to the shops, unsold returns, margin per product, manager’s board', from: 4, to: 5 },
    ], caption: 'Figure 6 · Five weeks in the example. The accented week is the second: seven evenings of records are enough to produce the first batch plan, and that is when the quantities start to change.', alt: 'Five-week calendar: products and counter, unsold and shortages (accented), orders, recipes and ingredients, shops and steering.' },
  },
  ar: {
    cover: { eyebrow: 'المخبزة والحلويات · الجزائر · 2027', title: ['برنامج المخبزة والحلويات', 'لا أكثر ولا أقل'], subtitle: 'إنتاج اليوم، غير المباع والنفاد، حلويات بالطلبية مع تسبيق، وتكلفة كل وصفة', left: { label: 'بالتقدير', sub: 'كثير هنا، وقليل هناك' }, right: { label: 'بالأرقام', sub: 'غير المباع والنفاد يُسجَّلان كل مساء' } },
    stock: { caption: 'الشكل 1 · مخزون منتَجين، من الفتح إلى الإغلاق. الكرواسان، المنتَج في ثلاث خبزات، ينهي اليوم بأربع وعشرين قطعة غير مباعة، واحدة من خمس. والميلفاي، المنتَج دفعة واحدة، ينفد قبل الخامسة، ويُرفض اثنا عشر طلباً. المحل يقع في الخطأين في اليوم نفسه، ولا أحد منهما مكتوب في أي مكان. الكميات والخبزات والطلبات مثال مركَّب.' },
    couches: { title: 'برنامج المخبزة والحلويات، في خمس طبقات', layers: [
      { label: 'البيع في المحل', items: [{ name: 'أزرار بالصور، بيع بالقطعة أو بالوزن أو بالطبق، علب، وصندوق يعمل دون إنترنت', sub: 'طابور الصباح يُخدَم دون البحث عن سعر' }] },
      { label: 'إنتاج اليوم', items: [{ name: 'خطة خبزات لكل منتَج، حسب مبيعات اليوم نفسه من الأسبوع، والطلبيات والأعياد', sub: 'كل مساء: غير المباع وساعة النفاد، منتَجاً بمنتَج', accent: true }] },
      { label: 'الطلبيات', items: [{ name: 'حلويات بالطلبية: التاريخ، الساعة، الحصص، النكهة، الكتابة، النموذج، التسبيق، والباقي', sub: 'دفتر الطلبيات يصير برنامج المخبر' }] },
      { label: 'الوصفات والمواد', items: [{ name: 'بطاقات تقنية، تكلفة القطعة، مخزون الدقيق والزبدة والسكر والبيض، والفارق بين المتوقَّع والمستهلَك', sub: 'سعر مكوّن يتغيّر يُرى يوم الشراء' }] },
      { label: 'المحلات والقيادة', items: [{ name: 'التوزيع من المخبر إلى المحلات، إرجاع غير المباع، والمبيعات والهامش لكل منتَج', sub: 'نعرف أي منتَج يربح، وفي أي محل' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي إنتاج اليوم: هي التي لا يفعلها أي صندوق. تتغذى من البيع في المحل، فوقها، ومن الطلبيات، تحتها؛ والوصفات تقول كم تكلّف، والمحلات تقول ما مصيرها.', alt: 'خمس طبقات: البيع في المحل؛ إنتاج اليوم (مبرزة)؛ الطلبيات؛ الوصفات والمواد؛ المحلات والقيادة.' },
    commande: { title: 'حلوى بالطلبية، في ست مراحل', items: [
      { label: 'التسجيل', sub: 'التاريخ، الساعة، الحصص، النكهة، الكتابة، النموذج', accent: true },
      { label: 'أخذ التسبيق', sub: 'وصل يُسلَّم، والباقي معروض' },
      { label: 'البرمجة', sub: 'في المخبر، في اليوم والساعة المطلوبين' },
      { label: 'الإنتاج', sub: 'بطاقة اليوم، مع صورة النموذج' },
      { label: 'التسليم والتسوية', sub: 'الزبون يُعلَم في اليوم السابق، والباقي يُقبَض' },
      { label: 'الحفظ', sub: 'السجل، للسنة المقبلة' },
    ], caption: 'الشكل 3 · المرحلة المبرزة هي الأولى: التاريخ والساعة والحصص والنكهة والكتابة والنموذج تُسجَّل مرة واحدة، كاملة. والطلبية لا تدخل برنامج المخبر إلا بتسبيقها؛ ولا تُغلق إلا عند الاستلام، حين يُقبَض الباقي.', alt: 'ست مراحل: التسجيل (مبرزة)، أخذ التسبيق، البرمجة، الإنتاج، التسليم والتسوية، الحفظ.' },
    fiche: { caption: 'الشكل 4 · البطاقة التقنية لخبزة من ستين كرواسان: 2400 دج من المواد، أي 40 دج للقطعة. بسعر بيع 65 دج، يترك الكرواسان 25 دج قبل العمل والتكاليف. وإذا ارتفعت الزبدة بالربع، ينزل الهامش إلى 17,50 دج، أي 30 بالمئة أقل. وعلامة الكمية، 38 بالمئة، آتية من النموذج المسمّى بائع الجرائد. الكميات والأسعار مثال مركَّب، وليست أسعار السوق.' },
    situations: { title: 'ست حالات في المخبزة والحلويات', columns: ['اليوم', 'مع البرنامج'], rows: [
      { label: 'حلوى مطلوبة ليوم السبت', cells: ['مسجَّلة في دفتر، دون تسبيق ولا صورة', 'طلبية مؤرَّخة، تسبيق مقبوض، نموذج مرفق، ومبرمَجة'] },
      { label: 'غير المباع مساءً', cells: ['يُعطى أو يُرمى، ولا يُعدّ أبداً', 'يُدخَل عند الإغلاق، منتَجاً بمنتَج'] },
      { label: 'نفاد في وسط العشية', cells: ['نقول «لم يبقَ»، وينتهي الأمر', 'الساعة تُسجَّل، وكمية الغد تُراجَع'] },
      { label: 'سعر الزبدة يتغيّر', cells: ['الهامش ينزل دون أن يراه أحد', 'تكلفة القطعة يُعاد حسابها يوم الشراء'] },
      { label: 'ثلاثة محلات، ومخبر واحد', cells: ['التوزيع بالهاتف، والإرجاع يُنسى', 'وصولات توزيع، وإرجاع يُعدّ لكل محل'] },
      { label: 'أسبوع عيد', cells: ['نضاعف كل شيء، من الذاكرة', 'مبيعات العيد نفسه السنة الماضية، والطلبيات المسجَّلة'] },
    ], caption: 'الشكل 5 · ست حالات من الأسبوع. في العمود الأول لا شيء يُفعل بشكل سيئ: ينقص فقط رقمان، غير المباع والنفاد، ومكان لا تضيع فيه الطلبيات. والعمود الثاني لا يطلب عملاً أكثر في المحل، إلا دقيقة عند الإغلاق.', alt: 'مصفوفة ست حالات في المخبزة والحلويات تقارن الممارسة الحالية وما يفعله البرنامج: حلوى بالطلبية، غير المباع مساءً، نفاد العشية، سعر الزبدة، ثلاثة محلات ومخبر، وأسبوع عيد.' },
    calendrier: { title: 'مخبزة وحلويات مجهَّزة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'المنتَجات والمحل', note: 'منتَجات بالصورة والسعر، بيع بالقطعة وبالوزن وبالطبق، وصندوق في المحل بالتوازي مع القديم', from: 0, to: 1 },
      { label: 'غير المباع والنفاد', note: 'كشف الإغلاق كل مساء، ساعة النفاد، أول أسبوع من الأرقام، وخطة خبزات الغد', from: 1, to: 2, accent: true },
      { label: 'الطلبيات', note: 'استعادة الدفتر في البرنامج، التسبيقات، برنامج المخبر، وتذكير الزبون في اليوم السابق', from: 2, to: 3 },
      { label: 'الوصفات والمواد', note: 'بطاقات تقنية للعشرين منتَجاً الأكثر مبيعاً، تكلفة القطعة، ومخزون المواد الرئيسية', from: 3, to: 4 },
      { label: 'المحلات والقيادة', note: 'التوزيع نحو المحلات، إرجاع غير المباع، الهامش لكل منتَج، ولوحة المسيّر', from: 4, to: 5 },
    ], caption: 'الشكل 6 · خمسة أسابيع في المثال. الأسبوع المبرز هو الثاني: سبع أمسيات من التسجيل تكفي لإخراج أول خطة خبزات، ومن هناك تبدأ الكميات في التغيّر.', alt: 'تقويم خمسة أسابيع: المنتَجات والمحل، غير المباع والنفاد (مبرز)، الطلبيات، الوصفات والمواد، المحلات والقيادة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      stock: { svg: stock(e.stock, rtl), caption: t.stock.caption, alt: e.stock.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      commande: { svg: steps({ title: t.commande.title, steps: t.commande.items, arrows: true, rtl }), caption: t.commande.caption, alt: t.commande.alt },
      fiche: { svg: fiche(e.fiche, rtl), caption: t.fiche.caption, alt: e.fiche.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 5, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
