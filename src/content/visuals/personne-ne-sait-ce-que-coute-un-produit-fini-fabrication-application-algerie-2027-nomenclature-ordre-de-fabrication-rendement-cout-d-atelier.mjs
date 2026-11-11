import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { bom, batch, STRINGS as PR } from './custom/production.mjs';
export const slug = 'personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier';
const T = {
  fr: {
    cover: { eyebrow: 'Fabrication · Atelier · Nomenclature · 2027', title: ['« Personne ne sait', 'ce que nous coûte', 'un produit fini »'], subtitle: 'Ce qu’on construit pour un atelier : nomenclature versionnée, gamme, ordre de fabrication, lots consommés, rendement, coût d’atelier', left: { label: 'Un cahier à l’atelier, un prix de tête', sub: 'et des matières qui disparaissent' }, right: { label: 'Un ordre, des lots, un coût réel', sub: 'et un lot fini qui sait d’où il vient' } },
    nomenclature: { caption: 'Figure 1 · La nomenclature d’un jus en bouteille, en deux niveaux : le produit fini, un sous-ensemble fabriqué qui a son propre lot et son propre stock, et l’emballage acheté ; chaque composant porte sa quantité par unité de base et son rebut attendu. La gamme dit sur quelle machine, combien de temps et avec combien d’opérateurs. Les deux sont versionnées : changer une quantité crée une version, et les ordres déjà lancés gardent la leur. Produit, quantités et durées sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Personne ne sait ce que coûte le produit', cells: ['Un prix de tête ; la marge découverte au bilan', 'coût d’atelier prévu par nomenclature, réel par ordre, par unité bonne'] },
      { label: 'Les matières disparaissent', cells: ['Stock théorique faux ; personne ne sait où', 'consommation par lot à l’ordre ; écart prévu-réel par composant'] },
      { label: 'Un lot de bouteilles est rappelé', cells: ['Quels jus ? Quels clients ? Deux jours de recherche', 'lot fini lié aux lots amont ; requête de rappel en minutes'] },
      { label: 'La recette a changé, pas le prix', cells: ['Nomenclature modifiée dans un fichier ; coût jamais recalculé', 'version de nomenclature ; coût planifié recalculé ; ordres anciens intacts'] },
      { label: 'La ligne s’arrête une heure, personne ne le dit', cells: ['Temps réel inconnu ; coût sous-estimé', 'pointage de ligne, arrêts avec cause ; temps réel dans le coût'] },
      { label: 'On lance sans avoir les composants', cells: ['Ordre bloqué à mi-chemin ; jus perdu en cuve', 'disponibilité vérifiée au lancement ; composants réservés'] },
    ], caption: 'Figure 2 · Les trois premières lignes se règlent par la nomenclature, la consommation par lot et le lien entre lots ; les trois suivantes par les versions, le pointage de ligne et la réservation des composants au lancement. Aucune ne se règle par un chef d’atelier plus attentif.', alt: 'Matrice de six situations : coût inconnu, matières disparues, rappel d’un lot de composants, recette changée, arrêt de ligne non déclaré, lancement sans composants ; ce qui se passe et ce que l’application fait.' },
    ordre: { title: 'Un ordre de fabrication, en six temps', items: [
      { label: 'Lancer', sub: 'quantité, nomenclature et gamme figées en version ; composants réservés' },
      { label: 'Sortir les composants', sub: 'scan des lots consommés ; quantité réelle, pas théorique' },
      { label: 'Produire et pointer', sub: 'début et fin par opération ; arrêts avec cause codée', accent: true },
      { label: 'Compter la sortie', sub: 'bonnes et rejetées, cause du rejet ; sous-produits' },
      { label: 'Entrer le lot fini', sub: 'lot propre, date, lien vers tous les lots amont' },
      { label: 'Clôturer et chiffrer', sub: 'prévu contre réel ; coût d’atelier réel par unité bonne' },
    ], caption: 'Figure 3 · L’étape accentuée est celle que les cahiers d’atelier ne savent pas faire : le temps vient du pointage de début et de fin par opération, et un arrêt de machine est saisi avec sa cause au moment où il arrive. Les quatre autres temps écrivent des mouvements de stock, sorties par lot et entrée du lot fini, dans le même journal que le guide sur le stock.', alt: 'Six temps : lancer, sortir les composants, produire et pointer (accentué), compter la sortie, entrer le lot fini, clôturer et chiffrer.' },
    lot: { caption: 'Figure 4 · Un ordre de 6 000 bouteilles : pour chaque composant, le lot consommé, le prévu par la nomenclature, le réel scanné à l’atelier et l’écart ; le temps de ligne pointé, avec un arrêt de 48 minutes de l’étiqueteuse. Sortie : 5 940 bonnes et 60 rejetées, un lot fini entré en stock et lié à huit lots amont. Le coût d’atelier réel, 172,2 dinars par bouteille bonne, dépasse le prévu de 4 % pour deux raisons visibles : des oranges plus petites et l’arrêt. Quantités, temps et coûts sont un exemple construit, et le coût de revient comptable reste l’affaire du comptable.' },
    couches: { title: 'La fabrication, en cinq couches', layers: [
      { label: 'Nomenclature et gamme', items: [{ name: 'Composants par unité de base avec rebut, sous-ensembles à lot propre, opérations avec machine et durée ; versionnées', sub: 'la recette existe une fois, datée, et ne se modifie pas en silence' }] },
      { label: 'Ordre de fabrication', items: [{ name: 'Quantité, version figée, états datés ; composants réservés au lancement ; consommations réelles par lot ; sorties bonnes et rejetées', sub: 'un ordre est un document, avec ses mouvements de stock', accent: true }] },
      { label: 'Atelier', items: [{ name: 'Écran de ligne hors ligne : scan des lots, pointage par opération, arrêts avec cause, comptage de sortie, relevés qualité', sub: 'saisi au moment où ça arrive, pas le soir' }] },
      { label: 'Lots et traçabilité', items: [{ name: 'Lot fini lié aux lots amont et aux ordres ; rappel dans les deux sens ; date de péremption calculée à la fabrication', sub: 'les règles du guide sur la traçabilité, côté production' }] },
      { label: 'Coût et mesure', items: [{ name: 'Coût d’atelier prévu et réel par unité bonne ; écarts par composant et par cause ; rendement, arrêts, cadence par ligne', sub: 'un coût d’atelier pour décider, pas le coût de revient comptable' }] },
    ], caption: 'Figure 5 · La couche accentuée est l’ordre de fabrication : c’est lui qui fige la version, réserve et consomme les composants par lot, compte la sortie et porte le coût réel. La nomenclature au-dessus dit ce qui devrait être consommé ; l’atelier en dessous dit ce qui l’a été ; la différence est l’information que le gérant n’avait jamais.', alt: 'Cinq couches : nomenclature et gamme, ordre de fabrication (accentuée), atelier, lots et traçabilité, coût et mesure.' },
    calendrier: { title: 'Outiller la fabrication en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'produits fabriqués, unités de base, rebuts attendus, machines et cadences, causes d’arrêt et de rejet, formule du coût d’atelier ; avec le chef d’atelier', from: 0, to: 1 },
      { label: 'Nomenclatures et gammes', note: 'saisie ou reprise depuis les fichiers, sous-ensembles, versions, coût planifié par produit', from: 1, to: 3, accent: true },
      { label: 'Ordre et atelier', note: 'lancement avec réservation, écran de ligne hors ligne, scan des lots, pointage, comptage, lot fini', from: 3, to: 5 },
      { label: 'Coût et écarts', note: 'prévu contre réel par ordre, par composant, par cause ; coût par unité bonne', from: 5, to: 6 },
      { label: 'Mesure', note: 'rendement, arrêts par cause, cadence par ligne, écarts récurrents, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les unités, les rebuts attendus, les cadences et la formule du coût d’atelier se décident avec le chef d’atelier et le comptable. Les deux semaines accentuées sont les nomenclatures, parce qu’une recette fausse produit un coût faux ; l’atelier suit, un produit d’abord, sur une ligne, avant les autres.', alt: 'Frise de sept semaines : règles, nomenclatures et gammes (accentué, deux semaines), ordre et atelier (deux semaines), coût et écarts, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Manufacturing · Shop floor · BOM · 2027', title: ['“Nobody knows', 'what a finished', 'product costs us”'], subtitle: 'What gets built for a workshop: versioned bill of materials, routing, production order, lots consumed, yield, workshop cost', left: { label: 'A shop-floor notebook, a price from memory', sub: 'and materials that vanish' }, right: { label: 'One order, lots, a real cost', sub: 'and a finished lot that knows where it came from' } },
    nomenclature: { caption: 'Figure 1 · The bill of materials of a bottled juice, in two levels: the finished product, a manufactured sub-assembly with its own lot and stock, and purchased packaging; every component carries its quantity per base unit and its expected scrap. The routing says on which machine, how long and with how many operators. Both are versioned: changing a quantity creates a version, and orders already launched keep theirs. Product, quantities and durations are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Nobody knows what the product costs', cells: ['A price from memory; the margin found at year end', 'workshop cost planned by BOM, actual per order, per good unit'] },
      { label: 'Materials vanish', cells: ['Theoretical stock wrong; nobody knows where', 'consumption by lot on the order; planned-vs-actual gap per component'] },
      { label: 'A lot of bottles is recalled', cells: ['Which juices? Which customers? Two days of searching', 'finished lot linked to upstream lots; recall query in minutes'] },
      { label: 'The recipe changed, not the price', cells: ['BOM edited in a file; cost never recomputed', 'BOM version; planned cost recomputed; old orders untouched'] },
      { label: 'The line stops an hour, nobody says so', cells: ['Real time unknown; cost underestimated', 'line clock-in, stops with cause; real time in the cost'] },
      { label: 'Launched without the components', cells: ['Order stuck halfway; juice lost in the tank', 'availability checked at launch; components reserved'] },
    ], caption: 'Figure 2 · The first three rows are settled by the bill of materials, consumption by lot and the link between lots; the next three by versions, line clock-in and the reservation of components at launch. None is settled by a more attentive shop-floor supervisor.', alt: 'Matrix of six situations: unknown cost, vanished materials, recall of a component lot, changed recipe, undeclared line stop, launch without components; what happens and what the application does.' },
    ordre: { title: 'One production order, in six beats', items: [
      { label: 'Launch', sub: 'quantity, BOM and routing frozen by version; components reserved' },
      { label: 'Issue components', sub: 'scan of lots consumed; actual quantity, not theoretical' },
      { label: 'Produce and clock', sub: 'start and end per operation; stops with coded cause', accent: true },
      { label: 'Count the output', sub: 'good and rejected, reject cause; by-products' },
      { label: 'Enter the finished lot', sub: 'own lot, date, link to all upstream lots' },
      { label: 'Close and cost', sub: 'planned vs actual; actual workshop cost per good unit' },
    ], caption: 'Figure 3 · The accented beat is what shop-floor notebooks cannot do: time comes from the start and end clock-in per operation, and a machine stop is entered with its cause when it happens. The other four beats write stock movements, issues by lot and the finished lot’s receipt, in the same ledger as the stock guide.', alt: 'Six beats: launch, issue components, produce and clock (accented), count the output, enter the finished lot, close and cost.' },
    lot: { caption: 'Figure 4 · An order of 6,000 bottles: for each component, the lot consumed, the planned by BOM, the actual scanned on the shop floor and the gap; line time clocked, with a 48-minute labeller stop. Output: 5,940 good and 60 rejected, a finished lot entered into stock and linked to eight upstream lots. The actual workshop cost, 172.2 dinars per good bottle, exceeds planned by 4 % for two visible reasons: smaller oranges and the stop. Quantities, times and costs are a constructed example, and the accounting cost price remains the accountant’s business.' },
    couches: { title: 'Manufacturing, in five layers', layers: [
      { label: 'BOM and routing', items: [{ name: 'Components per base unit with scrap, sub-assemblies with own lot, operations with machine and duration; versioned', sub: 'the recipe exists once, dated, and never changes silently' }] },
      { label: 'Production order', items: [{ name: 'Quantity, frozen version, dated states; components reserved at launch; actual consumption by lot; good and rejected output', sub: 'an order is a document, with its stock movements', accent: true }] },
      { label: 'Shop floor', items: [{ name: 'Offline line screen: lot scans, clock-in per operation, stops with cause, output count, quality readings', sub: 'entered when it happens, not in the evening' }] },
      { label: 'Lots and traceability', items: [{ name: 'Finished lot linked to upstream lots and orders; recall both ways; expiry date computed at manufacture', sub: 'the traceability guide’s rules, production side' }] },
      { label: 'Cost and measurement', items: [{ name: 'Planned and actual workshop cost per good unit; gaps per component and per cause; yield, stops, rate per line', sub: 'a workshop cost to decide, not the accounting cost price' }] },
    ], caption: 'Figure 5 · The accented layer is the production order: it freezes the version, reserves and consumes components by lot, counts the output and carries the actual cost. The BOM above says what should have been consumed; the shop floor below says what was; the difference is the information the manager never had.', alt: 'Five layers: BOM and routing, production order (accented), shop floor, lots and traceability, cost and measurement.' },
    calendrier: { title: 'Tooling manufacturing in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'manufactured products, base units, expected scrap, machines and rates, stop and reject causes, workshop cost formula; with the shop-floor supervisor', from: 0, to: 1 },
      { label: 'BOMs and routings', note: 'entry or take-over from files, sub-assemblies, versions, planned cost per product', from: 1, to: 3, accent: true },
      { label: 'Order and shop floor', note: 'launch with reservation, offline line screen, lot scans, clock-in, counting, finished lot', from: 3, to: 5 },
      { label: 'Cost and gaps', note: 'planned vs actual per order, per component, per cause; cost per good unit', from: 5, to: 6 },
      { label: 'Measurement', note: 'yield, stops by cause, rate per line, recurring gaps, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: units, expected scrap, rates and the workshop cost formula are decided with the shop-floor supervisor and the accountant. The two accented weeks are the BOMs, because a wrong recipe produces a wrong cost; the shop floor follows, one product first, on one line, before the others.', alt: 'Seven-week timeline: rules, BOMs and routings (accented, two weeks), order and shop floor (two weeks), cost and gaps, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'تصنيع · ورشة · قائمة مواد · 2027', title: ['«لا أحد يعرف', 'كم يكلّفنا', 'المنتج النهائي»'], subtitle: 'ما يُبنى لورشة: قائمة مواد بإصدارات، مسار تصنيع، أمر تصنيع، دفعات مستهلَكة، مردود، كلفة ورشة', left: { label: 'دفتر في الورشة وسعر من الذاكرة', sub: 'ومواد تختفي' }, right: { label: 'أمر ودفعات وكلفة حقيقية', sub: 'ودفعة نهائية تعرف من أين أتت' } },
    nomenclature: { caption: 'الشكل 1 · قائمة مواد عصير معبّأ في مستويين: المنتج النهائي، ومجموعة فرعية مصنَّعة لها دفعتها ومخزونها، وتعبئة مشتراة؛ وكل مكوّن يحمل كميته لكل وحدة أساس وهدره المتوقع. ومسار التصنيع يقول على أي آلة وكم من الوقت وبكم عامل. وكلاهما مرقَّم بإصدار: تغيير كمية ينشئ إصداراً، والأوامر المطلقة أصلاً تحتفظ بإصدارها. والمنتج والكميات والمدد مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'لا أحد يعرف كم يكلّف المنتج', cells: ['سعر من الذاكرة؛ الهامش يُكتشف في الميزانية', 'كلفة ورشة مخططة بقائمة المواد، فعلية لكل أمر، لكل وحدة جيدة'] },
      { label: 'المواد تختفي', cells: ['مخزون نظري خاطئ؛ لا أحد يعرف أين', 'استهلاك بالدفعة على الأمر؛ فارق مخطط-فعلي لكل مكوّن'] },
      { label: 'دفعة قوارير تُسحب', cells: ['أي عصائر؟ أي زبائن؟ يومان من البحث', 'دفعة نهائية مرتبطة بدفعات المنبع؛ استعلام سحب بالدقائق'] },
      { label: 'الوصفة تغيرت لا السعر', cells: ['قائمة مواد معدَّلة في ملف؛ كلفة لم يُعد حسابها', 'إصدار قائمة مواد؛ كلفة مخططة معادة؛ الأوامر القديمة كما هي'] },
      { label: 'الخط يتوقف ساعة ولا أحد يقول', cells: ['وقت حقيقي مجهول؛ كلفة مقدَّرة بأقل', 'تسجيل خط، توقفات بسبب؛ وقت حقيقي في الكلفة'] },
      { label: 'إطلاق بلا المكوّنات', cells: ['أمر عالق في منتصفه؛ عصير ضائع في الخزان', 'توفر مفحوص عند الإطلاق؛ مكوّنات محجوزة'] },
    ], caption: 'الشكل 2 · الأسطر الثلاثة الأولى تُحل بقائمة المواد والاستهلاك بالدفعة والربط بين الدفعات؛ والثلاثة التالية بالإصدارات وتسجيل الخط وحجز المكوّنات عند الإطلاق. ولا واحد يُحل برئيس ورشة أكثر انتباهاً.', alt: 'مصفوفة ست حالات: كلفة مجهولة، مواد مختفية، سحب دفعة مكوّنات، وصفة متغيرة، توقف خط غير مصرَّح، إطلاق بلا مكوّنات؛ ما يحدث وما يفعله التطبيق.' },
    ordre: { title: 'أمر تصنيع واحد، في ستة أوقات', items: [
      { label: 'الإطلاق', sub: 'كمية وقائمة مواد ومسار مجمَّدة بإصدار؛ مكوّنات محجوزة' },
      { label: 'إخراج المكوّنات', sub: 'مسح الدفعات المستهلَكة؛ كمية فعلية لا نظرية' },
      { label: 'الإنتاج والتسجيل', sub: 'بداية ونهاية لكل عملية؛ توقفات بسبب مرمَّز', accent: true },
      { label: 'عدّ الخرج', sub: 'جيدة ومرفوضة، سبب الرفض؛ منتجات ثانوية' },
      { label: 'إدخال الدفعة النهائية', sub: 'دفعة خاصة، تاريخ، ربط بكل دفعات المنبع' },
      { label: 'الإغلاق والتكليف', sub: 'مخطط مقابل فعلي؛ كلفة ورشة فعلية لكل وحدة جيدة' },
    ], caption: 'الشكل 3 · الوقت المميز هو ما لا تستطيعه دفاتر الورشة: الوقت يأتي من تسجيل البداية والنهاية لكل عملية، وتوقف الآلة يُدخَل بسببه لحظة حدوثه. والأوقات الأربعة الأخرى تكتب حركات مخزون، خروج بالدفعة ودخول الدفعة النهائية، في سجل دليل المخزون نفسه.', alt: 'ستة أوقات: الإطلاق، إخراج المكوّنات، الإنتاج والتسجيل (مميز)، عدّ الخرج، إدخال الدفعة النهائية، الإغلاق والتكليف.' },
    lot: { caption: 'الشكل 4 · أمر 6,000 قارورة: لكل مكوّن الدفعة المستهلَكة والمخطط بقائمة المواد والفعلي الممسوح في الورشة والفارق؛ ووقت الخط المسجَّل بتوقف 48 دقيقة للملصّقة. الخرج: 5,940 جيدة و60 مرفوضة، دفعة نهائية أُدخلت إلى المخزون ورُبطت بثماني دفعات منبع. والكلفة الفعلية للورشة، 172.2 دينار للقارورة الجيدة، تتجاوز المخططة بـ 4 ٪ لسببين مرئيين: برتقال أصغر والتوقف. والكميات والأوقات والكلف مثال مبني، وسعر التكلفة المحاسبي يبقى شأن المحاسب.' },
    couches: { title: 'التصنيع، في خمس طبقات', layers: [
      { label: 'قائمة المواد والمسار', items: [{ name: 'مكوّنات لكل وحدة أساس بهدر، مجموعات فرعية بدفعة خاصة، عمليات بآلة ومدة؛ بإصدارات', sub: 'الوصفة موجودة مرة واحدة ومؤرَّخة ولا تتغير بصمت' }] },
      { label: 'أمر التصنيع', items: [{ name: 'كمية، إصدار مجمَّد، حالات مؤرَّخة؛ مكوّنات محجوزة عند الإطلاق؛ استهلاكات فعلية بالدفعة؛ خرج جيد ومرفوض', sub: 'الأمر مستند بحركات مخزونه', accent: true }] },
      { label: 'الورشة', items: [{ name: 'شاشة خط دون اتصال: مسح الدفعات، تسجيل لكل عملية، توقفات بسبب، عدّ الخرج، قراءات جودة', sub: 'يُدخَل لحظة حدوثه لا مساءً' }] },
      { label: 'الدفعات والتتبع', items: [{ name: 'دفعة نهائية مرتبطة بدفعات المنبع والأوامر؛ سحب في الاتجاهين؛ تاريخ صلاحية يُحسب عند التصنيع', sub: 'قواعد دليل التتبع من جهة الإنتاج' }] },
      { label: 'الكلفة والقياس', items: [{ name: 'كلفة ورشة مخططة وفعلية لكل وحدة جيدة؛ فوارق لكل مكوّن وسبب؛ مردود، توقفات، معدل لكل خط', sub: 'كلفة ورشة للقرار لا سعر التكلفة المحاسبي' }] },
    ], caption: 'الشكل 5 · الطبقة المميزة هي أمر التصنيع: هو ما يجمّد الإصدار ويحجز المكوّنات ويستهلكها بالدفعة ويعدّ الخرج ويحمل الكلفة الفعلية. وقائمة المواد فوقه تقول ما كان ينبغي استهلاكه؛ والورشة تحته تقول ما استُهلك؛ والفرق هو المعلومة التي لم تكن للمسيّر أبداً.', alt: 'خمس طبقات: قائمة المواد والمسار، أمر التصنيع (مميزة)، الورشة، الدفعات والتتبع، الكلفة والقياس.' },
    calendrier: { title: 'تجهيز التصنيع سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'المنتجات المصنَّعة، وحدات الأساس، الهدر المتوقع، الآلات والمعدلات، أسباب التوقف والرفض، صيغة كلفة الورشة؛ مع رئيس الورشة', from: 0, to: 1 },
      { label: 'قوائم المواد والمسارات', note: 'إدخال أو استلام من الملفات، مجموعات فرعية، إصدارات، كلفة مخططة لكل منتج', from: 1, to: 3, accent: true },
      { label: 'الأمر والورشة', note: 'إطلاق بحجز، شاشة خط دون اتصال، مسح الدفعات، تسجيل، عدّ، دفعة نهائية', from: 3, to: 5 },
      { label: 'الكلفة والفوارق', note: 'مخطط مقابل فعلي لكل أمر ومكوّن وسبب؛ كلفة لكل وحدة جيدة', from: 5, to: 6 },
      { label: 'القياس', note: 'مردود، توقفات بالسبب، معدل لكل خط، فوارق متكررة، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: الوحدات والهدر المتوقع والمعدلات وصيغة كلفة الورشة تُقرر مع رئيس الورشة والمحاسب. والأسبوعان المميزان هما قوائم المواد لأن وصفة خاطئة تنتج كلفة خاطئة؛ والورشة تلي، منتج أولاً على خط واحد قبل الباقي.', alt: 'خط زمني من سبعة أسابيع: القواعد، قوائم المواد والمسارات (مميز، أسبوعان)، الأمر والورشة (أسبوعان)، الكلفة والفوارق، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = PR[locale] || PR.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      nomenclature: { svg: bom(e.bom, rtl), caption: t.nomenclature.caption, alt: e.bom.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      ordre: { svg: steps({ title: t.ordre.title, steps: t.ordre.items, arrows: true, rtl }), caption: t.ordre.caption, alt: t.ordre.alt },
      lot: { svg: batch(e.batch, rtl), caption: t.lot.caption, alt: e.batch.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
