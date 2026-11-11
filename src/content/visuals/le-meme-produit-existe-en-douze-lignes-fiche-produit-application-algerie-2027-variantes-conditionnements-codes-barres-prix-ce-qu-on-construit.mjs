import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { tree, before, STRINGS as CT } from './custom/catalog.mjs';
export const slug = 'le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit';
const T = {
  fr: {
    cover: { eyebrow: 'Catalogue · Fiche produit · Variantes · 2027', title: ['« Le même produit', 'existe en douze lignes', 'dans notre fichier »'], subtitle: 'Ce qu’on construit pour qu’un produit n’existe qu’une fois : modèle, variantes, conditionnements, codes-barres, prix, reprise', left: { label: 'Douze lignes, trois prix', sub: 'et le vendeur qui choisit « la bonne »' }, right: { label: 'Une fiche en trois niveaux', sub: 'et un carton qui vaut quatre unités' } },
    arbre: { caption: 'Figure 1 · Un produit en trois niveaux. Le modèle porte ce qu’on décrit et photographie, une fois ; chaque variante porte le seul attribut qui change, ici la contenance, et c’est là que le stock se compte, en unités de base ; chaque conditionnement porte ce qu’on scanne et ce qu’on vend : son code-barres, son facteur vers l’unité de base et son entrée dans la grille de prix. Le carton de 4 n’est pas un autre produit, c’est quatre unités de la même variante. Références, codes, facteurs et prix sont un exemple construit.' },
    etapes: { title: 'Créer un produit correctement, en six étapes', items: [
      { label: 'Choisir la catégorie', sub: 'attributs obligatoires et attributs variants imposés' },
      { label: 'Décrire le modèle', sub: 'nom en deux langues, marque, fournisseur, description, photos' },
      { label: 'Déclarer les variantes', sub: 'une par valeur de l’attribut variant ; référence générée, pas tapée', accent: true },
      { label: 'Déclarer les conditionnements', sub: 'unité de base, puis carton et palette avec leur facteur' },
      { label: 'Scanner les codes', sub: 'un code-barres par conditionnement ; doublon refusé à la saisie' },
      { label: 'Fixer les prix', sub: 'par conditionnement et par grille ; rien de tapé sur la vente' },
    ], caption: 'Figure 2 · L’étape accentuée est celle où le fichier Excel échoue toujours : la variante n’est pas une nouvelle ligne tapée à la main avec un code inventé, c’est une valeur d’attribut que l’application transforme en référence. Les deux dernières étapes rattachent le code-barres et le prix au conditionnement, pas au produit.', alt: 'Six étapes : choisir la catégorie, décrire le modèle, déclarer les variantes (accentuée), déclarer les conditionnements, scanner les codes, fixer les prix.' },
    couches: { title: 'Le catalogue, en cinq couches', layers: [
      { label: 'Structure', items: [{ name: 'Modèle, variantes, conditionnements ; attributs définis par catégorie ; une référence générée par niveau', sub: 'le modèle ne se vend pas, la variante se compte, le conditionnement se scanne' }] },
      { label: 'Identifiants', items: [{ name: 'Code-barres par conditionnement, unique dans tout le catalogue ; alias pour les anciens codes ; référence fournisseur', sub: 'un code scanné retrouve toujours un seul conditionnement', accent: true }] },
      { label: 'Prix', items: [{ name: 'Grilles de prix par conditionnement : détail, gros, promotion datée ; la vente lit la grille, ne la retape pas', sub: 'le prix a une date de début et une date de fin' }] },
      { label: 'Contenus', items: [{ name: 'Photos au niveau du modèle ou de la variante, descriptions bilingues, documents, fiches techniques', sub: 'une photo n’est pas copiée douze fois' }] },
      { label: 'Vie de la fiche', items: [{ name: 'Statut brouillon, actif, en fin de vie, archivé ; historique de chaque changement ; qui, quand, ancienne valeur', sub: 'une fiche ne se supprime pas, elle s’archive' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle qui rend le scan fiable : un code-barres appartient à un seul conditionnement dans tout le catalogue, et les anciens codes internes deviennent des alias au lieu de doublons. Les quatre autres couches disent ce qui vit à quel niveau et ce qui ne se retape jamais sur une ligne de vente.', alt: 'Cinq couches : structure, identifiants (accentuée), prix, contenus, vie de la fiche.' },
    reprise: { caption: 'Figure 4 · La reprise d’un ancien fichier : douze lignes pour la même huile de 5 litres deviennent un modèle, une variante et deux conditionnements. Les codes internes différents deviennent des alias de la variante ; le code EAN scanné est gardé sur le conditionnement unité ; le libellé arabe est gardé sur le modèle ; le prix promo part dans la grille datée ; la ligne à prix zéro est refusée et remontée au gérant. Le stock des douze lignes est additionné en unités de base une fois pour toutes. Lignes, codes et prix sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le même produit sous trois codes', cells: ['Trois stocks, trois prix ; le vendeur choisit la ligne qu’il connaît', 'une variante, trois alias ; stock et prix uniques ; la recherche trouve par alias'] },
      { label: 'Le carton vendu comme une unité', cells: ['Carton scanné, prix de l’unité facturé ; marge négative découverte au mois', 'code-barres du carton, facteur 4, prix du carton ; le stock sort 4 unités'] },
      { label: 'La nouvelle taille créée à la volée', cells: ['Le vendeur tape « T-shirt XL bleu 2 » ; personne ne le retrouve', 'variante créée par valeur d’attribut ; référence générée ; doublon refusé'] },
      { label: 'Le prix tapé sur la facture', cells: ['Chaque vendeur a son prix ; impossible de savoir lequel est bon', 'grille de prix par conditionnement, datée ; la ligne lit la grille'] },
      { label: 'La photo manque sur le site', cells: ['Douze lignes, une photo sur deux ; le site montre des cases vides', 'photo au modèle, héritée par les variantes ; manquantes listées'] },
      { label: 'Le produit arrêté toujours vendu', cells: ['Fiche supprimée, factures orphelines ; ou fiche gardée et revendue', 'statut en fin de vie : vente du restant, pas de réassort ; archivage'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par la structure à trois niveaux et les alias ; les trois suivantes par la grille de prix, les photos au bon niveau et le statut de la fiche. Aucune ne se règle par un fichier Excel mieux rangé.', alt: 'Matrice de six situations : trois codes pour un produit, carton vendu comme une unité, taille créée à la volée, prix tapé sur la facture, photo manquante, produit arrêté ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Reprendre un catalogue en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Catégories et attributs', note: 'liste des catégories, attributs obligatoires et attributs variants par catégorie, unités de base ; décidés avec le gérant et le magasinier', from: 0, to: 1 },
      { label: 'Structure', note: 'modèle, variante, conditionnement, références générées, codes-barres uniques, alias', from: 1, to: 2 },
      { label: 'Reprise', note: 'rapprochement des anciennes lignes, essai à blanc, fusions proposées, lignes refusées au gérant, stock additionné', from: 2, to: 4, accent: true },
      { label: 'Prix et contenus', note: 'grilles de prix par conditionnement, photos au modèle, descriptions bilingues, fiches manquantes listées', from: 4, to: 5 },
      { label: 'Vente et stock', note: 'caisse et commandes lisent le conditionnement scanné ; mouvements en unités de base ; fin de vie', from: 5, to: 6 },
      { label: 'Mesure', note: 'doublons détectés par semaine, codes inconnus au scan, fiches sans photo, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, dont deux pour la reprise parce que c’est elle qui décide si le catalogue sera propre : chaque ancienne ligne doit trouver sa place, ou être refusée par écrit. La première semaine est sans code : les catégories et les attributs se décident avec les gens qui rangent le dépôt.', alt: 'Frise de sept semaines : catégories et attributs, structure, reprise (accentuée, deux semaines), prix et contenus, vente et stock, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Catalogue · Product record · Variants · 2027', title: ['“The same product', 'exists in twelve lines', 'in our file”'], subtitle: 'What gets built so that a product exists only once: model, variants, packagings, barcodes, prices, take-over', left: { label: 'Twelve lines, three prices', sub: 'and a seller who picks “the right one”' }, right: { label: 'One record in three levels', sub: 'and a case worth four units' } },
    arbre: { caption: 'Figure 1 · One product in three levels. The model carries what is described and photographed, once; each variant carries the one attribute that changes, here the volume, and that is where stock is counted, in base units; each packaging carries what is scanned and sold: its barcode, its factor to the base unit and its entry in the price grid. The case of 4 is not another product, it is four units of the same variant. References, codes, factors and prices are a constructed example.' },
    etapes: { title: 'Creating a product properly, in six steps', items: [
      { label: 'Choose the category', sub: 'required and variant attributes come from it' },
      { label: 'Describe the model', sub: 'name in two languages, brand, supplier, description, photos' },
      { label: 'Declare the variants', sub: 'one per value of the variant attribute; reference generated, not typed', accent: true },
      { label: 'Declare the packagings', sub: 'base unit, then case and pallet with their factor' },
      { label: 'Scan the codes', sub: 'one barcode per packaging; duplicate refused at entry' },
      { label: 'Set the prices', sub: 'per packaging and per grid; nothing typed on the sale' },
    ], caption: 'Figure 2 · The accented step is where the Excel file always fails: a variant is not a new line typed by hand with an invented code, it is an attribute value the application turns into a reference. The last two steps attach the barcode and the price to the packaging, not to the product.', alt: 'Six steps: choose the category, describe the model, declare the variants (accented), declare the packagings, scan the codes, set the prices.' },
    couches: { title: 'The catalogue, in five layers', layers: [
      { label: 'Structure', items: [{ name: 'Model, variants, packagings; attributes defined per category; one generated reference per level', sub: 'the model is not sold, the variant is counted, the packaging is scanned' }] },
      { label: 'Identifiers', items: [{ name: 'Barcode per packaging, unique across the whole catalogue; aliases for old codes; supplier reference', sub: 'a scanned code always finds exactly one packaging', accent: true }] },
      { label: 'Prices', items: [{ name: 'Price grids per packaging: retail, wholesale, dated promotion; the sale reads the grid, never retypes it', sub: 'a price has a start date and an end date' }] },
      { label: 'Content', items: [{ name: 'Photos at model or variant level, bilingual descriptions, documents, technical sheets', sub: 'a photo is not copied twelve times' }] },
      { label: 'Record life', items: [{ name: 'Status draft, active, end of life, archived; history of every change: who, when, old value', sub: 'a record is not deleted, it is archived' }] },
    ], caption: 'Figure 3 · The accented layer is what makes scanning reliable: a barcode belongs to exactly one packaging across the whole catalogue, and old internal codes become aliases instead of duplicates. The other four layers say what lives at which level and what is never retyped on a sales line.', alt: 'Five layers: structure, identifiers (accented), prices, content, record life.' },
    reprise: { caption: 'Figure 4 · Taking over an old file: twelve lines for the same 5-litre oil become one model, one variant and two packagings. The different internal codes become aliases of the variant; the scanned EAN is kept on the unit packaging; the Arabic label is kept on the model; the promo price goes into the dated grid; the zero-price line is refused and raised to the manager. The stock of the twelve lines is added up in base units once and for all. Lines, codes and prices are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The same product under three codes', cells: ['Three stocks, three prices; the seller picks the line they know', 'one variant, three aliases; single stock and price; search finds by alias'] },
      { label: 'The case sold as a unit', cells: ['Case scanned, unit price invoiced; negative margin found at month end', 'case barcode, factor 4, case price; stock moves 4 units'] },
      { label: 'The new size created on the fly', cells: ['The seller types “T-shirt XL blue 2”; nobody finds it again', 'variant created by attribute value; generated reference; duplicate refused'] },
      { label: 'The price typed on the invoice', cells: ['Every seller has their own price; impossible to know which is right', 'price grid per packaging, dated; the line reads the grid'] },
      { label: 'The photo missing on the site', cells: ['Twelve lines, a photo on every other one; the site shows empty boxes', 'photo at the model, inherited by variants; missing ones listed'] },
      { label: 'The discontinued product still sold', cells: ['Record deleted, orphan invoices; or record kept and resold', 'end-of-life status: sell the remainder, no reorder; archiving'] },
    ], caption: 'Figure 5 · The first three rows are settled by the three-level structure and the aliases; the next three by the price grid, photos at the right level and the record status. None is settled by a tidier Excel file.', alt: 'Matrix of six situations: three codes for one product, case sold as a unit, size created on the fly, price typed on the invoice, missing photo, discontinued product; what happens and what the application does.' },
    calendrier: { title: 'Taking over a catalogue in 2027, in weeks', unit: 'wk', items: [
      { label: 'Categories and attributes', note: 'list of categories, required and variant attributes per category, base units; decided with the manager and the storekeeper', from: 0, to: 1 },
      { label: 'Structure', note: 'model, variant, packaging, generated references, unique barcodes, aliases', from: 1, to: 2 },
      { label: 'Take-over', note: 'matching of old lines, dry run, proposed merges, refused lines to the manager, stock added up', from: 2, to: 4, accent: true },
      { label: 'Prices and content', note: 'price grids per packaging, photos at the model, bilingual descriptions, missing records listed', from: 4, to: 5 },
      { label: 'Sales and stock', note: 'till and orders read the scanned packaging; movements in base units; end of life', from: 5, to: 6 },
      { label: 'Measurement', note: 'duplicates detected per week, unknown codes at scan, records without photo, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, two of them for the take-over because it decides whether the catalogue will be clean: every old line must find its place, or be refused in writing. The first week has no code: categories and attributes are decided with the people who tidy the warehouse.', alt: 'Seven-week timeline: categories and attributes, structure, take-over (accented, two weeks), prices and content, sales and stock, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'كتالوج · بطاقة منتج · متغيرات · 2027', title: ['«المنتج نفسه', 'موجود في اثني عشر سطراً', 'في ملفنا»'], subtitle: 'ما يُبنى كي لا يوجد المنتج إلا مرة واحدة: طراز، متغيرات، تعبئات، باركودات، أسعار، استلام', left: { label: 'اثنا عشر سطراً، ثلاثة أسعار', sub: 'وبائع يختار «الصحيح»' }, right: { label: 'بطاقة واحدة بثلاثة مستويات', sub: 'وكرتون يساوي أربع وحدات' } },
    arbre: { caption: 'الشكل 1 · منتج واحد بثلاثة مستويات. يحمل الطراز ما يُوصف ويُصوَّر، مرة واحدة؛ ويحمل كل متغير السمة الوحيدة التي تتغير، هنا السعة، وهناك يُعدّ المخزون بوحدات الأساس؛ وتحمل كل تعبئة ما يُمسح ويُباع: باركودها ومعاملها نحو وحدة الأساس ومدخلها في شبكة الأسعار. والكرتون من 4 ليس منتجاً آخر، بل أربع وحدات من المتغير نفسه. والمراجع والرموز والمعاملات والأسعار مثال مبني.' },
    etapes: { title: 'إنشاء منتج على نحو صحيح، في ست خطوات', items: [
      { label: 'اختيار الفئة', sub: 'تفرض السمات الإلزامية وتلك التي تنشئ متغيرات' },
      { label: 'وصف الطراز', sub: 'اسم بلغتين، علامة، مورد، وصف، صور' },
      { label: 'إعلان المتغيرات', sub: 'واحد لكل قيمة من السمة المتغيرة؛ مرجع مولَّد لا مكتوب', accent: true },
      { label: 'إعلان التعبئات', sub: 'وحدة الأساس، ثم الكرتون والطبلية بمعاملهما' },
      { label: 'مسح الرموز', sub: 'باركود لكل تعبئة؛ التكرار مرفوض عند الإدخال' },
      { label: 'تحديد الأسعار', sub: 'لكل تعبئة ولكل شبكة؛ لا شيء يُكتب على البيع' },
    ], caption: 'الشكل 2 · الخطوة المميزة هي حيث يفشل ملف Excel دائماً: المتغير ليس سطراً جديداً يُكتب يدوياً برمز مخترَع، بل قيمة سمة يحوّلها التطبيق إلى مرجع. والخطوتان الأخيرتان تربطان الباركود والسعر بالتعبئة لا بالمنتج.', alt: 'ست خطوات: اختيار الفئة، وصف الطراز، إعلان المتغيرات (مميزة)، إعلان التعبئات، مسح الرموز، تحديد الأسعار.' },
    couches: { title: 'الكتالوج، في خمس طبقات', layers: [
      { label: 'البنية', items: [{ name: 'طراز، متغيرات، تعبئات؛ سمات معرَّفة لكل فئة؛ مرجع مولَّد لكل مستوى', sub: 'الطراز لا يُباع، والمتغير يُعدّ، والتعبئة تُمسح' }] },
      { label: 'المعرّفات', items: [{ name: 'باركود لكل تعبئة فريد في الكتالوج كله؛ بدائل للرموز القديمة؛ مرجع المورد', sub: 'الرمز الممسوح يجد تعبئة واحدة دائماً', accent: true }] },
      { label: 'الأسعار', items: [{ name: 'شبكات أسعار لكل تعبئة: تجزئة، جملة، ترويج مؤرَّخ؛ البيع يقرأ الشبكة ولا يعيد كتابتها', sub: 'للسعر تاريخ بداية وتاريخ نهاية' }] },
      { label: 'المحتوى', items: [{ name: 'صور في مستوى الطراز أو المتغير، أوصاف ثنائية اللغة، وثائق، بطاقات تقنية', sub: 'الصورة لا تُنسخ اثنتي عشرة مرة' }] },
      { label: 'حياة البطاقة', items: [{ name: 'حالة مسودة، نشطة، نهاية عمر، مؤرشفة؛ تاريخ كل تغيير: من، متى، القيمة القديمة', sub: 'البطاقة لا تُحذف بل تُؤرشف' }] },
    ], caption: 'الشكل 3 · الطبقة المميزة هي ما يجعل المسح موثوقاً: الباركود ملك لتعبئة واحدة في الكتالوج كله، والرموز الداخلية القديمة تصير بدائل لا تكرارات. والطبقات الأربع الأخرى تقول ما يعيش في أي مستوى وما لا يُعاد كتابته على سطر بيع أبداً.', alt: 'خمس طبقات: البنية، المعرّفات (مميزة)، الأسعار، المحتوى، حياة البطاقة.' },
    reprise: { caption: 'الشكل 4 · استلام ملف قديم: اثنا عشر سطراً لزيت 5 لترات نفسه تصير طرازاً ومتغيراً وتعبئتين. الرموز الداخلية المختلفة تصير بدائل للمتغير؛ ورمز EAN الممسوح يُحفظ على تعبئة الوحدة؛ والتسمية العربية تُحفظ على الطراز؛ والسعر الترويجي يذهب إلى الشبكة المؤرَّخة؛ والسطر بسعر صفر يُرفض ويُرفع إلى المسيّر. ويُجمع مخزون الأسطر الاثني عشر بوحدات الأساس مرة واحدة وإلى الأبد. والأسطر والرموز والأسعار مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'المنتج نفسه تحت ثلاثة رموز', cells: ['ثلاثة مخزونات، ثلاثة أسعار؛ البائع يختار السطر الذي يعرفه', 'متغير واحد، ثلاثة بدائل؛ مخزون وسعر واحدان؛ البحث يجد بالبديل'] },
      { label: 'الكرتون يُباع كوحدة', cells: ['كرتون ممسوح، سعر الوحدة مفوتر؛ هامش سالب يُكتشف في الشهر', 'باركود الكرتون، معامل 4، سعر الكرتون؛ المخزون يخرج 4 وحدات'] },
      { label: 'المقاس الجديد يُنشأ على عجل', cells: ['البائع يكتب «تي شيرت XL أزرق 2»؛ لا أحد يجده', 'متغير بقيمة سمة؛ مرجع مولَّد؛ التكرار مرفوض'] },
      { label: 'السعر يُكتب على الفاتورة', cells: ['لكل بائع سعره؛ يستحيل معرفة الصحيح', 'شبكة أسعار لكل تعبئة مؤرَّخة؛ السطر يقرأ الشبكة'] },
      { label: 'الصورة ناقصة على الموقع', cells: ['اثنا عشر سطراً، صورة في سطر من اثنين؛ الموقع يعرض مربعات فارغة', 'صورة في الطراز يرثها المتغير؛ الناقصة مُدرَجة'] },
      { label: 'المنتج المتوقف ما زال يُباع', cells: ['بطاقة محذوفة وفواتير يتيمة؛ أو بطاقة محفوظة تُباع من جديد', 'حالة نهاية عمر: بيع الباقي، لا إعادة تموين؛ أرشفة'] },
    ], caption: 'الشكل 5 · الأسطر الثلاثة الأولى تُحل بالبنية ذات المستويات الثلاثة والبدائل؛ والثلاثة التالية بشبكة الأسعار والصور في المستوى الصحيح وحالة البطاقة. ولا واحد يُحل بملف Excel أحسن ترتيباً.', alt: 'مصفوفة ست حالات: ثلاثة رموز لمنتج، كرتون يُباع كوحدة، مقاس يُنشأ على عجل، سعر يُكتب على الفاتورة، صورة ناقصة، منتج متوقف؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'استلام كتالوج سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الفئات والسمات', note: 'قائمة الفئات، السمات الإلزامية والمتغيرة لكل فئة، وحدات الأساس؛ تُقرر مع المسيّر وأمين المخزن', from: 0, to: 1 },
      { label: 'البنية', note: 'طراز، متغير، تعبئة، مراجع مولَّدة، باركودات فريدة، بدائل', from: 1, to: 2 },
      { label: 'الاستلام', note: 'مطابقة الأسطر القديمة، تجربة على الفارغ، دمج مقترح، أسطر مرفوضة للمسيّر، مخزون مجموع', from: 2, to: 4, accent: true },
      { label: 'الأسعار والمحتوى', note: 'شبكات أسعار لكل تعبئة، صور في الطراز، أوصاف ثنائية اللغة، بطاقات ناقصة مُدرَجة', from: 4, to: 5 },
      { label: 'البيع والمخزون', note: 'الصندوق والطلبيات يقرآن التعبئة الممسوحة؛ حركات بوحدات الأساس؛ نهاية العمر', from: 5, to: 6 },
      { label: 'القياس', note: 'تكرارات مكتشفة أسبوعياً، رموز مجهولة عند المسح، بطاقات بلا صورة، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، منها اثنان للاستلام لأنه هو ما يقرر إن كان الكتالوج سيكون نظيفاً: كل سطر قديم يجب أن يجد مكانه أو يُرفض كتابةً. والأسبوع الأول بلا كود: الفئات والسمات تُقرر مع من يرتبون المخزن.', alt: 'خط زمني من سبعة أسابيع: الفئات والسمات، البنية، الاستلام (مميز، أسبوعان)، الأسعار والمحتوى، البيع والمخزون، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = CT[locale] || CT.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      arbre: { svg: tree(e.tree, rtl), caption: t.arbre.caption, alt: e.tree.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      reprise: { svg: before(e.before, rtl), caption: t.reprise.caption, alt: e.before.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
