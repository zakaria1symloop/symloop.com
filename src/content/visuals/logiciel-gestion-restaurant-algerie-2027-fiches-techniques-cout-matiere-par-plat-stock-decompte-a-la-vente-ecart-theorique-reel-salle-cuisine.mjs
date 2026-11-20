import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { plats, ecarts, STRINGS as SC } from './custom/restaurant.mjs';
export const slug = 'logiciel-gestion-restaurant-algerie-2027-fiches-techniques-cout-matiere-par-plat-stock-decompte-a-la-vente-ecart-theorique-reel-salle-cuisine';
const T = {
  fr: {
    cover: { eyebrow: 'Restaurant · Algérie · 2027', title: ['Logiciel de gestion de restaurant :', 'la salle est pleine, que reste-t-il ?'], subtitle: 'Fiches techniques, coût matière par plat, stock décompté à la vente, écart théorique et réel, clôture', left: { label: 'Le plus vendu', sub: '910 ventes, 340 DA' }, right: { label: 'La plus forte marge', sub: '150 ventes, 850 DA' } },
    couches: { title: 'Ce qu’il y a dans un logiciel de restaurant, en cinq couches', layers: [
      { label: 'Fiches', items: [{ name: 'La carte et les fiches techniques : ingrédients, quantités, coût par plat, prix de vente, marge', sub: 'ce que coûte et rapporte chaque plat', accent: true }] },
      { label: 'Commandes', items: [{ name: 'Les commandes : prises à table ou au comptoir, envoyées en cuisine par poste, facturées sans ressaisie', sub: 'de la table à l’addition' }] },
      { label: 'Stock', items: [{ name: 'Le stock : achats, réceptions, décompte à chaque vente selon la fiche, inventaire compté, écart', sub: 'ce qui devait sortir, et ce qui est sorti' }] },
      { label: 'Caisse', items: [{ name: 'La caisse : encaissement, sessions par service, remises et annulations tracées, clôture', sub: 'l’argent du service, compté' }] },
      { label: 'Chiffres', items: [{ name: 'Les chiffres : ventes par plat et par heure, coût matière, marge, écarts, par service et par mois', sub: 'ce que le service a laissé' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est la fiche technique : sans elle, ni le coût d’un plat ni la consommation attendue ne peuvent se calculer.', alt: 'Cinq couches : la carte et les fiches techniques (accentuées) ; les commandes ; le stock ; la caisse ; les chiffres.' },
    plats: { caption: 'Figure 2 · Douze plats selon leurs ventes et leur marge : trois plats font 44 % des ventes et 28 % de la marge. Carte et marges fictives.' },
    ecarts: { caption: 'Figure 3 · Une semaine, six ingrédients : 34 650 dinars d’écart entre la consommation théorique et la consommation réelle, dont 24 200 sur la viande. Quantités et prix fictifs.' },
    vente: { title: 'Ce qu’une vente déclenche, en six temps', items: [
      { label: 'Commande saisie', sub: 'table, plats, remarques du client' },
      { label: 'Bon en cuisine', sub: 'par poste : grill, froid, boissons' },
      { label: 'Plat servi', sub: 'heure d’envoi, heure de sortie' },
      { label: 'Addition réglée', sub: 'sans ressaisie, par table ou par personne' },
      { label: 'Stock décompté', sub: 'selon la fiche technique du plat', accent: true },
      { label: 'Chiffres du service', sub: 'ventes, coût matière, marge, caisse' },
    ], caption: 'Figure 4 · Six temps. Le temps accentué est le décompte du stock : chaque plat vendu retire du stock ce que sa fiche prévoit, et c’est ce qui rend l’écart mesurable.', alt: 'Six temps : commande saisie, bon en cuisine, plat servi, addition réglée, stock décompté (accentué), chiffres du service.' },
    calendrier: { title: 'Huit semaines, en commençant par peser', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'votre carte, vos fournisseurs, vos services, votre cahier et votre caisse actuels', from: 0, to: 1, accent: true },
      { label: 'Carte et fiches techniques', note: 'chaque plat pesé, ingrédient par ingrédient, avec les prix d’achat du moment', from: 1, to: 4 },
      { label: 'Commandes et caisse', note: 'prise de commande, bons en cuisine, addition, sessions de caisse', from: 2, to: 5 },
      { label: 'Stock et achats', note: 'réceptions, décompte à la vente, premier inventaire compté', from: 4, to: 7 },
      { label: 'Écarts et tableau de bord', note: 'consommation théorique et réelle, marge par plat, chiffres par service', from: 5, to: 8 },
      { label: 'Mise en service', note: 'un service à blanc, puis un service réel avec l’équipe', from: 7, to: 8 },
    ], caption: 'Figure 5 · Huit semaines dans l’exemple. La période accentuée est la première ; les fiches techniques se font en cuisine, balance en main, avant tout écran. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : cadrage (accentué), carte et fiches techniques, commandes et caisse, stock et achats, écarts et tableau de bord, mise en service.' },
    types: { title: 'Cinq établissements, et ce qui compte le plus pour chacun', columns: ['Ce qui compte le plus', 'Ce que le logiciel apporte'], rows: [
      { label: 'Restauration rapide au comptoir', cells: ['le débit à l’heure de pointe', 'commande rapide, écran en cuisine, numéro d’appel'] },
      { label: 'Restaurant avec service à table', cells: ['le suivi des tables et des additions', 'plan de salle, commande par table, addition partagée'] },
      { label: 'Café, salon de thé', cells: ['beaucoup de petits tickets, peu de cuisine', 'caisse rapide, stock à l’unité, fidélité'] },
      { label: 'Cuisine tournée vers la livraison', cells: ['des commandes venues de plusieurs canaux', 'commandes réunies sur un écran, temps de préparation'] },
      { label: 'Plusieurs établissements', cells: ['la même carte et les mêmes coûts partout', 'fiches communes, coûts matière comparés'] },
    ], caption: 'Figure 6 · Cinq établissements. La fiche technique et le décompte du stock servent partout ; ce qui change, c’est l’écran de prise de commande et le rythme du service.', alt: 'Matrice de cinq types d’établissement : restauration rapide au comptoir, restaurant avec service à table, café ou salon de thé, cuisine tournée vers la livraison, plusieurs établissements ; pour chacun, ce qui compte le plus et ce que le logiciel apporte.' },
  },
  en: {
    cover: { eyebrow: 'Restaurant · Algeria · 2027', title: ['Restaurant management software:', 'the room is full, what is left?'], subtitle: 'Recipe sheets, food cost per dish, stock deducted at each sale, theoretical and real gap, closing', left: { label: 'The best seller', sub: '910 sales, DA 340' }, right: { label: 'The highest margin', sub: '150 sales, DA 850' } },
    couches: { title: 'What is inside restaurant software, in five layers', layers: [
      { label: 'Recipes', items: [{ name: 'The menu and the recipe sheets: ingredients, quantities, cost per dish, selling price, margin', sub: 'what each dish costs and earns', accent: true }] },
      { label: 'Orders', items: [{ name: 'Orders: taken at the table or the counter, sent to the kitchen by station, billed with no retyping', sub: 'from the table to the bill' }] },
      { label: 'Stock', items: [{ name: 'Stock: purchases, receipts, deduction at each sale per the sheet, counted inventory, gap', sub: 'what should have gone out, and what did' }] },
      { label: 'Till', items: [{ name: 'The till: payment, sessions per service, discounts and voids traced, closing', sub: 'the service’s money, counted' }] },
      { label: 'Figures', items: [{ name: 'The figures: sales per dish and per hour, food cost, margin, gaps, per service and per month', sub: 'what the service left' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is the recipe sheet: without it, neither the cost of a dish nor the expected consumption can be calculated.', alt: 'Five layers: the menu and the recipe sheets (accented); orders; stock; the till; the figures.' },
    plats: { caption: 'Figure 2 · Twelve dishes by sales and margin: three dishes make 44% of sales and 28% of the margin. Fictitious menu and margins.' },
    ecarts: { caption: 'Figure 3 · One week, six ingredients: a gap of 34,650 dinars between theoretical and real consumption, 24,200 of it on meat. Fictitious quantities and prices.' },
    vente: { title: 'What a sale sets off, in six steps', items: [
      { label: 'Order entered', sub: 'table, dishes, the customer’s remarks' },
      { label: 'Kitchen ticket', sub: 'by station: grill, cold, drinks' },
      { label: 'Dish served', sub: 'time sent, time out' },
      { label: 'Bill paid', sub: 'no retyping, per table or per person' },
      { label: 'Stock deducted', sub: 'per the dish’s recipe sheet', accent: true },
      { label: 'Service figures', sub: 'sales, food cost, margin, till' },
    ], caption: 'Figure 4 · Six steps. The accented step is the stock deduction: each dish sold takes out of stock what its sheet provides for, and that is what makes the gap measurable.', alt: 'Six steps: order entered, kitchen ticket, dish served, bill paid, stock deducted (accented), service figures.' },
    calendrier: { title: 'Eight weeks, starting by weighing', unit: 'wk', items: [
      { label: 'Scoping', note: 'your menu, your suppliers, your services, your current notebook and till', from: 0, to: 1, accent: true },
      { label: 'Menu and recipe sheets', note: 'each dish weighed, ingredient by ingredient, at current purchase prices', from: 1, to: 4 },
      { label: 'Orders and till', note: 'order taking, kitchen tickets, bill, till sessions', from: 2, to: 5 },
      { label: 'Stock and purchasing', note: 'receipts, deduction at sale, first counted inventory', from: 4, to: 7 },
      { label: 'Gaps and dashboard', note: 'theoretical and real consumption, margin per dish, figures per service', from: 5, to: 8 },
      { label: 'Go-live', note: 'a dry-run service, then a real service with the team', from: 7, to: 8 },
    ], caption: 'Figure 5 · Eight weeks in the example. The accented period is the first; recipe sheets are made in the kitchen, scale in hand, before any screen. Indicative durations of a constructed example.', alt: 'Eight-week calendar: scoping (accented), menu and recipe sheets, orders and till, stock and purchasing, gaps and dashboard, go-live.' },
    types: { title: 'Five kinds of outlet, and what matters most for each', columns: ['What matters most', 'What the software brings'], rows: [
      { label: 'Counter-service fast food', cells: ['throughput at the peak hour', 'fast ordering, kitchen screen, call number'] },
      { label: 'Table-service restaurant', cells: ['keeping track of tables and bills', 'floor plan, order per table, split bill'] },
      { label: 'Café, tea room', cells: ['many small tickets, little cooking', 'fast till, stock by the unit, loyalty'] },
      { label: 'Kitchen geared to delivery', cells: ['orders coming in from several channels', 'orders gathered on one screen, preparation time'] },
      { label: 'Several outlets', cells: ['the same menu and the same costs everywhere', 'shared recipe sheets, food costs compared'] },
    ], caption: 'Figure 6 · Five kinds of outlet. The recipe sheet and the stock deduction serve everywhere; what changes is the ordering screen and the pace of service.', alt: 'Matrix of five kinds of outlet: counter-service fast food, table-service restaurant, café or tea room, kitchen geared to delivery, several outlets; for each, what matters most and what the software brings.' },
  },
  ar: {
    cover: { eyebrow: 'المطعم · الجزائر · 2027', title: ['برنامج تسيير المطعم:', 'القاعة ممتلئة، فماذا يبقى؟'], subtitle: 'البطاقات التقنية، كلفة المواد لكل طبق، مخزون يُخصَم عند البيع، والفارق بين النظري والفعلي', left: { label: 'الأكثر مبيعاً', sub: '910 مبيعات، و340 دج' }, right: { label: 'أعلى هامش', sub: '150 مبيعاً، و850 دج' } },
    couches: { title: 'ما يوجد في برنامج المطعم، في خمس طبقات', layers: [
      { label: 'البطاقات', items: [{ name: 'القائمة والبطاقات التقنية: المكوّنات، الكميات، الكلفة لكل طبق، سعر البيع، والهامش', sub: 'ما يكلّفه ويربحه كل طبق', accent: true }] },
      { label: 'الطلبيات', items: [{ name: 'الطلبيات: تُؤخذ على الطاولة أو عند المنضدة، تُرسَل إلى المطبخ حسب الركن، وتُفوتَر دون إعادة إدخال', sub: 'من الطاولة إلى الحساب' }] },
      { label: 'المخزون', items: [{ name: 'المخزون: المشتريات، الاستلام، الخصم عند كل بيع حسب البطاقة، جرد معدود، وفارق', sub: 'ما كان يجب أن يخرج، وما خرج' }] },
      { label: 'الصندوق', items: [{ name: 'الصندوق: التحصيل، جلسات لكل خدمة، تخفيضات وإلغاءات موثَّقة، وإقفال', sub: 'مال الخدمة، معدوداً' }] },
      { label: 'الأرقام', items: [{ name: 'الأرقام: المبيعات لكل طبق ولكل ساعة، كلفة المواد، الهامش، والفوارق، لكل خدمة ولكل شهر', sub: 'ما تركته الخدمة' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي البطاقة التقنية: دونها، لا كلفة الطبق ولا الاستهلاك المنتظَر يمكن حسابهما.', alt: 'خمس طبقات: القائمة والبطاقات التقنية (مبرزة)؛ الطلبيات؛ المخزون؛ الصندوق؛ والأرقام.' },
    plats: { caption: 'الشكل 2 · اثنا عشر طبقاً حسب مبيعاتها وهامشها: ثلاثة أطباق تمثّل 44 بالمئة من المبيعات و28 بالمئة من الهامش. قائمة وهوامش خيالية.' },
    ecarts: { caption: 'الشكل 3 · أسبوع واحد، ستة مكوّنات: فارق بنحو 35 ألف دينار بين الاستهلاك النظري والفعلي، منه نحو 24 ألفاً في اللحم. كميات وأسعار خيالية.' },
    vente: { title: 'ما يطلقه البيع، في ست مراحل', items: [
      { label: 'إدخال الطلبية', sub: 'الطاولة، الأطباق، وملاحظات الزبون' },
      { label: 'وصل المطبخ', sub: 'حسب الركن: شواء، بارد، ومشروبات' },
      { label: 'تقديم الطبق', sub: 'ساعة الإرسال، وساعة الخروج' },
      { label: 'تسديد الحساب', sub: 'دون إعادة إدخال، لكل طاولة أو لكل شخص' },
      { label: 'خصم المخزون', sub: 'حسب البطاقة التقنية للطبق', accent: true },
      { label: 'أرقام الخدمة', sub: 'المبيعات، كلفة المواد، الهامش، والصندوق' },
    ], caption: 'الشكل 4 · ست مراحل. المرحلة المبرزة هي خصم المخزون: كل طبق مباع يسحب من المخزون ما تنص عليه بطاقته، وهذا ما يجعل الفارق قابلاً للقياس.', alt: 'ست مراحل: إدخال الطلبية، وصل المطبخ، تقديم الطبق، تسديد الحساب، خصم المخزون (مبرز)، وأرقام الخدمة.' },
    calendrier: { title: 'ثمانية أسابيع، بدءاً بالوزن', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'قائمتكم، مورّدوكم، خدماتكم، ودفتركم وصندوقكم الحاليان', from: 0, to: 1, accent: true },
      { label: 'القائمة والبطاقات التقنية', note: 'كل طبق يوزَن، مكوّناً بمكوّن، بأسعار الشراء الحالية', from: 1, to: 4 },
      { label: 'الطلبيات والصندوق', note: 'أخذ الطلبية، وصولات المطبخ، الحساب، وجلسات الصندوق', from: 2, to: 5 },
      { label: 'المخزون والمشتريات', note: 'الاستلام، الخصم عند البيع، وأول جرد معدود', from: 4, to: 7 },
      { label: 'الفوارق ولوحة القيادة', note: 'الاستهلاك النظري والفعلي، الهامش لكل طبق، وأرقام كل خدمة', from: 5, to: 8 },
      { label: 'التشغيل', note: 'خدمة تجريبية، ثم خدمة حقيقية مع الفريق', from: 7, to: 8 },
    ], caption: 'الشكل 5 · ثمانية أسابيع في المثال. الفترة المبرزة هي الأولى؛ والبطاقات التقنية تُنجَز في المطبخ، والميزان في اليد، قبل أي شاشة. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: التأطير (مبرز)، القائمة والبطاقات التقنية، الطلبيات والصندوق، المخزون والمشتريات، الفوارق ولوحة القيادة، ثم التشغيل.' },
    types: { title: 'خمس مؤسسات، وما يهم أكثر لكل واحدة', columns: ['ما يهم أكثر', 'ما يأتي به البرنامج'], rows: [
      { label: 'وجبات سريعة عند المنضدة', cells: ['سرعة التدفق في ساعة الذروة', 'طلب سريع، شاشة في المطبخ، ورقم نداء'] },
      { label: 'مطعم بخدمة على الطاولة', cells: ['متابعة الطاولات والحسابات', 'مخطط القاعة، طلبية لكل طاولة، وحساب مقسَّم'] },
      { label: 'مقهى، قاعة شاي', cells: ['تذاكر صغيرة كثيرة، ومطبخ قليل', 'صندوق سريع، مخزون بالوحدة، ووفاء'] },
      { label: 'مطبخ موجَّه للتوصيل', cells: ['طلبيات تأتي من عدة قنوات', 'طلبيات مجمَّعة على شاشة، ووقت التحضير'] },
      { label: 'عدة مؤسسات', cells: ['القائمة نفسها والتكاليف نفسها في كل مكان', 'بطاقات مشتركة، ومقارنة كلفة المواد'] },
    ], caption: 'الشكل 6 · خمس مؤسسات. البطاقة التقنية وخصم المخزون يخدمان في كل مكان؛ وما يتغيّر هو شاشة أخذ الطلبية وإيقاع الخدمة.', alt: 'مصفوفة من خمسة أنواع مؤسسات: وجبات سريعة عند المنضدة، مطعم بخدمة على الطاولة، مقهى أو قاعة شاي، مطبخ موجَّه للتوصيل، وعدة مؤسسات؛ ولكل واحدة، ما يهم أكثر وما يأتي به البرنامج.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      plats: { svg: plats(e.plats, rtl), caption: t.plats.caption, alt: e.plats.alt },
      ecarts: { svg: ecarts(e.ecarts, rtl), caption: t.ecarts.caption, alt: e.ecarts.alt },
      vente: { svg: steps({ title: t.vente.title, steps: t.vente.items, arrows: true, rtl }), caption: t.vente.caption, alt: t.vente.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      types: { svg: matrix({ title: t.types.title, columns: t.types.columns, rows: t.types.rows, rtl }), caption: t.types.caption, alt: t.types.alt },
    },
  };
}
