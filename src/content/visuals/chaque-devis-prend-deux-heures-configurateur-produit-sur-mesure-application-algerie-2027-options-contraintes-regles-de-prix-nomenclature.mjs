import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { configure, fanout, STRINGS as CG } from './custom/configurator.mjs';
export const slug = 'chaque-devis-prend-deux-heures-configurateur-produit-sur-mesure-application-algerie-2027-options-contraintes-regles-de-prix-nomenclature';
const T = {
  fr: {
    cover: { eyebrow: 'Configurateur · Sur mesure · Devis · 2027', title: ['« Chaque devis', 'prend deux heures,', 'et le prix dépend du vendeur »'], subtitle: 'Ce qu’on construit pour vendre du sur mesure : options, contraintes, règles de prix, devis en deux minutes, nomenclature générée', left: { label: 'Un croquis, une calculette, un fichier Word', sub: 'et trois prix pour la même fenêtre' }, right: { label: 'Des règles écrites une fois', sub: 'et quatre documents sans ressaisie' } },
    configuration: { caption: 'Figure 1 · Une fenêtre aluminium sur mesure configurée en direct : les dimensions donnent la surface et le périmètre ; chaque groupe d’options a ses valeurs, ses contraintes avec les autres options et ses règles de prix ; une option interdite est grisée avec sa raison, une option imposée l’est aussi. Le prix se construit en cascade, règle par règle, et chaque règle est visible sur le devis. Produit, limites, options et prix sont un exemple construit ; les limites sont celles du fabricant de l’exemple, pas une norme.' },
    documents: { caption: 'Figure 2 · Une configuration acceptée et les quatre documents qu’elle génère sans ressaisie : le devis avec croquis coté et lignes de prix, envoyé en deux minutes ; la nomenclature générée avec les longueurs de profilés, le nombre de barres selon la règle de chutes, les vitrages et la quincaillerie, et le coût d’atelier prévu qui donne la marge avant d’envoyer le devis ; l’ordre de fabrication créé à l’acceptation ; la visite de pose planifiée. Configuration, longueurs, coûts et dates sont un exemple construit.' },
    vente: { title: 'Vendre une pièce sur mesure, en six temps', items: [
      { label: 'Mesurer', sub: 'dimensions saisies ou prises sur place ; surface et périmètre calculés' },
      { label: 'Configurer', sub: 'options sous contraintes ; impossible grisé ; imposé coché', accent: true },
      { label: 'Voir le prix', sub: 'cascade règle par règle ; marge contre la nomenclature générée' },
      { label: 'Envoyer le devis', sub: 'croquis coté, lignes, validité ; WhatsApp et e-mail ; versions' },
      { label: 'Accepter et encaisser', sub: 'acceptation en ligne ; acompte ; ordre de fabrication créé' },
      { label: 'Fabriquer et poser', sub: 'nomenclature et ordre lus depuis la configuration ; pose planifiée' },
    ], caption: 'Figure 3 · L’étape accentuée est la configuration : c’est là que les règles du gérant s’exécutent, pas dans la tête du vendeur. Les trois premières étapes tiennent en deux minutes au comptoir ou sur le téléphone du commercial ; les trois dernières sont les documents déjà décrits dans les guides sur le devis, la fabrication et les interventions, lus depuis la même configuration.', alt: 'Six temps : mesurer, configurer (accentué), voir le prix, envoyer le devis, accepter et encaisser, fabriquer et poser.' },
    couches: { title: 'Le configurateur, en cinq couches', layers: [
      { label: 'Modèle d’options', items: [{ name: 'Familles de produits ; groupes d’options avec valeurs ; dimensions avec limites ; quantités dérivées, surface, périmètre, vantaux', sub: 'ce que le gérant déclare, pas ce que le code sait' }] },
      { label: 'Contraintes', items: [{ name: 'Règles entre options et dimensions : interdit, imposé, limité ; évaluées à chaque changement, avec un message par règle', sub: 'une option interdite est grisée et expliquée, jamais cachée', accent: true }] },
      { label: 'Règles de prix', items: [{ name: 'Par m², par mètre, forfait, pourcentage, palier ; ordre d’application écrit ; arrondi ; grilles par client ; versionnées', sub: 'le prix est une cascade visible, pas un chiffre' }] },
      { label: 'Génération', items: [{ name: 'Devis avec croquis coté ; nomenclature avec longueurs, barres et chutes ; ordre de fabrication ; ordre de pose', sub: 'une configuration, quatre documents, zéro ressaisie' }] },
      { label: 'Canaux et mesure', items: [{ name: 'Comptoir, téléphone du commercial hors ligne, configurateur en ligne ; devis par jour, taux d’acceptation, marge réelle', sub: 'le client en France configure sa cuisine depuis Paris' }] },
    ], caption: 'Figure 4 · La couche accentuée est celle des contraintes : sans elle, le configurateur est un formulaire qui laisse promettre l’impossible. Les règles de prix au-dessous sont les mêmes que celles du moteur du guide sur le devis, avec des dimensions en entrée ; la génération au-dessous écrit les documents des guides sur la fabrication et les interventions.', alt: 'Cinq couches : modèle d’options, contraintes (accentuée), règles de prix, génération, canaux et mesure.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Trois vendeurs, trois prix', cells: ['Chacun calcule à sa façon ; le client compare et s’étonne', 'règles de prix écrites une fois ; même configuration, même prix'] },
      { label: 'Le devis prend deux heures', cells: ['Croquis, calculette, Word, relecture ; le client attend', 'configuration en deux minutes ; devis généré avec croquis'] },
      { label: 'On a vendu l’impossible', cells: ['Vantail de 1 400 mm promis ; découvert à l’atelier', 'contrainte : option grisée avec sa raison ; imposé coché'] },
      { label: 'La marge est connue après', cells: ['Prix de tête ; perte vue au coût de l’atelier', 'nomenclature générée ; coût prévu et marge avant l’envoi'] },
      { label: 'L’atelier recopie le devis', cells: ['Erreur de cote ; pièce refaite', 'nomenclature et ordre lus depuis la configuration'] },
      { label: 'Le client en France veut un devis', cells: ['Photos par WhatsApp ; allers-retours pendant dix jours', 'configurateur en ligne ; devis et acompte depuis Paris'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par les règles de prix, la configuration et les contraintes ; les trois suivantes par la nomenclature générée, la lecture directe par l’atelier et le configurateur en ligne. Aucune ne se règle par un vendeur plus expérimenté.', alt: 'Matrice de six situations : trois prix, devis de deux heures, impossible vendu, marge connue après, atelier qui recopie, client en France ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Construire un configurateur en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'familles, options, limites, contraintes et règles de prix écrites avec le gérant et l’atelier ; trois devis passés recalculés à la main', from: 0, to: 1 },
      { label: 'Modèle et contraintes', note: 'options, dimensions, quantités dérivées, contraintes avec messages, tests sur les trois devis', from: 1, to: 3, accent: true },
      { label: 'Prix et devis', note: 'cascade de règles, arrondi, grilles, croquis coté, PDF bilingue, versions, acceptation et acompte', from: 3, to: 4 },
      { label: 'Génération', note: 'nomenclature avec barres et chutes, coût prévu, ordre de fabrication, ordre de pose', from: 4, to: 5 },
      { label: 'Canaux', note: 'comptoir, téléphone hors ligne, configurateur en ligne pour le client', from: 5, to: 6 },
      { label: 'Mesure', note: 'devis par jour, délai de devis, taux d’acceptation, marge réelle contre prévue, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les options, les limites, les contraintes et les règles de prix s’écrivent avec le gérant et l’atelier, et trois devis passés sont recalculés à la main pour les vérifier. Les deux semaines accentuées sont le modèle et les contraintes, parce qu’une règle manquante vend l’impossible.', alt: 'Frise de sept semaines : règles, modèle et contraintes (accentué, deux semaines), prix et devis, génération, canaux, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Configurator · Made to measure · Quotes · 2027', title: ['“Every quote', 'takes two hours,', 'and the price depends on the seller”'], subtitle: 'What gets built to sell made-to-measure: options, constraints, price rules, a quote in two minutes, a generated bill of materials', left: { label: 'A sketch, a calculator, a Word file', sub: 'and three prices for the same window' }, right: { label: 'Rules written once', sub: 'and four documents without retyping' } },
    configuration: { caption: 'Figure 1 · A made-to-measure aluminium window configured live: the dimensions give the area and perimeter; every option group has its values, its constraints with other options and its price rules; a forbidden option is greyed with its reason, a forced one too. The price is built as a waterfall, rule by rule, and every rule is visible on the quote. Product, limits, options and prices are a constructed example; the limits are the example maker’s, not a standard.' },
    documents: { caption: 'Figure 2 · One accepted configuration and the four documents it generates without retyping: the quote with dimensioned sketch and price lines, sent in two minutes; the generated bill of materials with profile lengths, the bar count by the offcut rule, glazings and hardware, and the planned workshop cost that gives the margin before the quote is sent; the production order created on acceptance; the fitting visit planned. Configuration, lengths, costs and dates are a constructed example.' },
    vente: { title: 'Selling a made-to-measure piece, in six beats', items: [
      { label: 'Measure', sub: 'dimensions entered or taken on site; area and perimeter computed' },
      { label: 'Configure', sub: 'options under constraints; impossible greyed; forced ticked', accent: true },
      { label: 'See the price', sub: 'waterfall rule by rule; margin against the generated BOM' },
      { label: 'Send the quote', sub: 'dimensioned sketch, lines, validity; WhatsApp and e-mail; versions' },
      { label: 'Accept and collect', sub: 'online acceptance; deposit; production order created' },
      { label: 'Make and fit', sub: 'BOM and order read from the configuration; fitting planned' },
    ], caption: 'Figure 3 · The accented beat is configuration: that is where the manager’s rules run, not in the seller’s head. The first three beats take two minutes at the counter or on the rep’s phone; the last three are the documents already described in the quote, manufacturing and field service guides, read from the same configuration.', alt: 'Six beats: measure, configure (accented), see the price, send the quote, accept and collect, make and fit.' },
    couches: { title: 'The configurator, in five layers', layers: [
      { label: 'Option model', items: [{ name: 'Product families; option groups with values; dimensions with limits; derived quantities, area, perimeter, leaves', sub: 'what the manager declares, not what the code knows' }] },
      { label: 'Constraints', items: [{ name: 'Rules between options and dimensions: forbidden, forced, limited; evaluated on every change, with a message per rule', sub: 'a forbidden option is greyed and explained, never hidden', accent: true }] },
      { label: 'Price rules', items: [{ name: 'Per m², per metre, flat, percentage, tier; written order of application; rounding; grids per customer; versioned', sub: 'the price is a visible waterfall, not a number' }] },
      { label: 'Generation', items: [{ name: 'Quote with dimensioned sketch; BOM with lengths, bars and offcuts; production order; fitting order', sub: 'one configuration, four documents, zero retyping' }] },
      { label: 'Channels and measurement', items: [{ name: 'Counter, rep’s phone offline, online configurator; quotes per day, acceptance rate, real margin', sub: 'the customer in France configures their kitchen from Paris' }] },
    ], caption: 'Figure 4 · The accented layer is constraints: without it, the configurator is a form that lets the impossible be promised. The price rules below are the same as the engine’s in the quote guide, with dimensions as input; generation below writes the documents of the manufacturing and field service guides.', alt: 'Five layers: option model, constraints (accented), price rules, generation, channels and measurement.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Three sellers, three prices', cells: ['Each computes their own way; the customer compares and wonders', 'price rules written once; same configuration, same price'] },
      { label: 'The quote takes two hours', cells: ['Sketch, calculator, Word, proofreading; the customer waits', 'configuration in two minutes; quote generated with sketch'] },
      { label: 'The impossible was sold', cells: ['1,400 mm leaf promised; found out in the workshop', 'constraint: option greyed with its reason; forced ticked'] },
      { label: 'The margin is known afterwards', cells: ['Price from memory; loss seen at workshop cost', 'generated BOM; planned cost and margin before sending'] },
      { label: 'The workshop retypes the quote', cells: ['Dimension error; piece remade', 'BOM and order read from the configuration'] },
      { label: 'The customer in France wants a quote', cells: ['Photos by WhatsApp; back and forth for ten days', 'online configurator; quote and deposit from Paris'] },
    ], caption: 'Figure 5 · The first three rows are settled by price rules, configuration and constraints; the next three by the generated BOM, direct reading by the workshop and the online configurator. None is settled by a more experienced seller.', alt: 'Matrix of six situations: three prices, two-hour quote, impossible sold, margin known afterwards, workshop retyping, customer in France; what happens and what the application does.' },
    calendrier: { title: 'Building a configurator in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'families, options, limits, constraints and price rules written with the manager and the workshop; three past quotes recomputed by hand', from: 0, to: 1 },
      { label: 'Model and constraints', note: 'options, dimensions, derived quantities, constraints with messages, tests on the three quotes', from: 1, to: 3, accent: true },
      { label: 'Price and quote', note: 'rule waterfall, rounding, grids, dimensioned sketch, bilingual PDF, versions, acceptance and deposit', from: 3, to: 4 },
      { label: 'Generation', note: 'BOM with bars and offcuts, planned cost, production order, fitting order', from: 4, to: 5 },
      { label: 'Channels', note: 'counter, offline phone, online configurator for the customer', from: 5, to: 6 },
      { label: 'Measurement', note: 'quotes per day, quote time, acceptance rate, real vs planned margin, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: options, limits, constraints and price rules are written with the manager and the workshop, and three past quotes are recomputed by hand to check them. The two accented weeks are the model and constraints, because a missing rule sells the impossible.', alt: 'Seven-week timeline: rules, model and constraints (accented, two weeks), price and quote, generation, channels, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'مهيّئ · على المقاس · عروض أسعار · 2027', title: ['«كل عرض سعر', 'يأخذ ساعتين،', 'والسعر يتبع البائع»'], subtitle: 'ما يُبنى لبيع المصنوع على المقاس: خيارات، قيود، قواعد سعر، عرض سعر في دقيقتين، قائمة مواد مولَّدة', left: { label: 'رسم وحاسبة وملف Word', sub: 'وثلاثة أسعار للنافذة نفسها' }, right: { label: 'قواعد تُكتب مرة واحدة', sub: 'وأربعة مستندات بلا إعادة كتابة' } },
    configuration: { caption: 'الشكل 1 · نافذة ألمنيوم على المقاس تُهيَّأ مباشرة: الأبعاد تعطي المساحة والمحيط؛ ولكل مجموعة خيارات قيمها وقيودها مع الخيارات الأخرى وقواعد سعرها؛ والخيار الممنوع يُرمَّد بسببه، والمفروض كذلك. والسعر يُبنى شلالاً قاعدةً قاعدة، وكل قاعدة مرئية على عرض السعر. والمنتج والحدود والخيارات والأسعار مثال مبني؛ والحدود حدود مصنّع المثال لا معياراً.' },
    documents: { caption: 'الشكل 2 · تهيئة مقبولة واحدة والمستندات الأربعة التي تولّدها بلا إعادة كتابة: عرض السعر برسم مقاس وأسطر سعر، يُرسل في دقيقتين؛ قائمة المواد المولَّدة بأطوال المقاطع وعدد القضبان بقاعدة القصاصات والزجاج والعتاد، وكلفة الورشة المخططة التي تعطي الهامش قبل إرسال العرض؛ أمر التصنيع المنشأ عند القبول؛ زيارة التركيب المخططة. والتهيئة والأطوال والكلف والتواريخ مثال مبني.' },
    vente: { title: 'بيع قطعة على المقاس، في ستة أوقات', items: [
      { label: 'القياس', sub: 'أبعاد تُدخَل أو تُؤخذ في المكان؛ مساحة ومحيط محسوبان' },
      { label: 'التهيئة', sub: 'خيارات تحت قيود؛ المستحيل مرمَّد؛ المفروض مؤشَّر', accent: true },
      { label: 'رؤية السعر', sub: 'شلال قاعدةً قاعدة؛ هامش مقابل قائمة المواد المولَّدة' },
      { label: 'إرسال العرض', sub: 'رسم مقاس، أسطر، صلاحية؛ WhatsApp وبريد؛ إصدارات' },
      { label: 'القبول والتحصيل', sub: 'قبول إلكتروني؛ عربون؛ أمر تصنيع منشأ' },
      { label: 'التصنيع والتركيب', sub: 'قائمة المواد والأمر يُقرآن من التهيئة؛ تركيب مخطط' },
    ], caption: 'الشكل 3 · الوقت المميز هو التهيئة: هناك تُنفَّذ قواعد المسيّر لا في رأس البائع. والأوقات الثلاثة الأولى تستغرق دقيقتين عند الشباك أو على هاتف المندوب؛ والثلاثة الأخيرة هي المستندات الموصوفة أصلاً في أدلة عرض السعر والتصنيع والتدخلات، تُقرأ من التهيئة نفسها.', alt: 'ستة أوقات: القياس، التهيئة (مميز)، رؤية السعر، إرسال العرض، القبول والتحصيل، التصنيع والتركيب.' },
    couches: { title: 'المهيّئ، في خمس طبقات', layers: [
      { label: 'نموذج الخيارات', items: [{ name: 'عائلات منتجات؛ مجموعات خيارات بقيم؛ أبعاد بحدود؛ كميات مشتقة، مساحة، محيط، درفات', sub: 'ما يصرّح به المسيّر لا ما يعرفه الكود' }] },
      { label: 'القيود', items: [{ name: 'قواعد بين الخيارات والأبعاد: ممنوع، مفروض، محدود؛ تُقيَّم عند كل تغيير برسالة لكل قاعدة', sub: 'الخيار الممنوع يُرمَّد ويُفسَّر ولا يُخفى أبداً', accent: true }] },
      { label: 'قواعد السعر', items: [{ name: 'لكل م²، لكل متر، مبلغ ثابت، نسبة، شريحة؛ ترتيب تطبيق مكتوب؛ تقريب؛ شبكات لكل زبون؛ بإصدارات', sub: 'السعر شلال مرئي لا رقم' }] },
      { label: 'التوليد', items: [{ name: 'عرض سعر برسم مقاس؛ قائمة مواد بأطوال وقضبان وقصاصات؛ أمر تصنيع؛ أمر تركيب', sub: 'تهيئة واحدة، أربعة مستندات، صفر إعادة كتابة' }] },
      { label: 'القنوات والقياس', items: [{ name: 'شباك، هاتف المندوب دون اتصال، مهيّئ إلكتروني للزبون؛ عروض في اليوم، نسبة القبول، هامش حقيقي', sub: 'الزبون في فرنسا يهيّئ مطبخه من باريس' }] },
    ], caption: 'الشكل 4 · الطبقة المميزة هي القيود: بدونها يكون المهيّئ استمارة تدع المستحيل يُوعد به. وقواعد السعر تحتها هي قواعد محرك دليل عرض السعر نفسها بالأبعاد مدخلاً؛ والتوليد تحتها يكتب مستندات دليلي التصنيع والتدخلات.', alt: 'خمس طبقات: نموذج الخيارات، القيود (مميزة)، قواعد السعر، التوليد، القنوات والقياس.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'ثلاثة بائعين، ثلاثة أسعار', cells: ['كل واحد يحسب بطريقته؛ الزبون يقارن ويستغرب', 'قواعد سعر تُكتب مرة واحدة؛ التهيئة نفسها، السعر نفسه'] },
      { label: 'عرض السعر يأخذ ساعتين', cells: ['رسم، حاسبة، Word، مراجعة؛ الزبون ينتظر', 'تهيئة في دقيقتين؛ عرض مولَّد برسم'] },
      { label: 'بيع المستحيل', cells: ['درفة 1,400 مم موعودة؛ اكتُشفت في الورشة', 'قيد: خيار مرمَّد بسببه؛ المفروض مؤشَّر'] },
      { label: 'الهامش يُعرف بعد ذلك', cells: ['سعر من الذاكرة؛ خسارة تُرى عند كلفة الورشة', 'قائمة مواد مولَّدة؛ كلفة مخططة وهامش قبل الإرسال'] },
      { label: 'الورشة تعيد كتابة العرض', cells: ['خطأ في القياس؛ قطعة تُعاد', 'قائمة المواد والأمر يُقرآن من التهيئة'] },
      { label: 'الزبون في فرنسا يريد عرضاً', cells: ['صور بـ WhatsApp؛ ذهاب وإياب عشرة أيام', 'مهيّئ إلكتروني؛ عرض وعربون من باريس'] },
    ], caption: 'الشكل 5 · الأسطر الثلاثة الأولى تُحل بقواعد السعر والتهيئة والقيود؛ والثلاثة التالية بقائمة المواد المولَّدة والقراءة المباشرة في الورشة والمهيّئ الإلكتروني. ولا واحد يُحل ببائع أكثر خبرة.', alt: 'مصفوفة ست حالات: ثلاثة أسعار، عرض ساعتين، مستحيل مباع، هامش يُعرف بعد، ورشة تعيد الكتابة، زبون في فرنسا؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'بناء مهيّئ سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'عائلات، خيارات، حدود، قيود وقواعد سعر تُكتب مع المسيّر والورشة؛ ثلاثة عروض ماضية تُعاد يدوياً', from: 0, to: 1 },
      { label: 'النموذج والقيود', note: 'خيارات، أبعاد، كميات مشتقة، قيود برسائل، اختبارات على العروض الثلاثة', from: 1, to: 3, accent: true },
      { label: 'السعر والعرض', note: 'شلال قواعد، تقريب، شبكات، رسم مقاس، PDF ثنائي اللغة، إصدارات، قبول وعربون', from: 3, to: 4 },
      { label: 'التوليد', note: 'قائمة مواد بقضبان وقصاصات، كلفة مخططة، أمر تصنيع، أمر تركيب', from: 4, to: 5 },
      { label: 'القنوات', note: 'شباك، هاتف دون اتصال، مهيّئ إلكتروني للزبون', from: 5, to: 6 },
      { label: 'القياس', note: 'عروض في اليوم، مدة العرض، نسبة القبول، هامش حقيقي مقابل مخطط، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: الخيارات والحدود والقيود وقواعد السعر تُكتب مع المسيّر والورشة، وثلاثة عروض ماضية تُعاد يدوياً للتحقق منها. والأسبوعان المميزان هما النموذج والقيود، لأن قاعدة ناقصة تبيع المستحيل.', alt: 'خط زمني من سبعة أسابيع: القواعد، النموذج والقيود (مميز، أسبوعان)، السعر والعرض، التوليد، القنوات، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = CG[locale] || CG.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      configuration: { svg: configure(e.configure, rtl), caption: t.configuration.caption, alt: e.configure.alt },
      documents: { svg: fanout(e.fanout, rtl), caption: t.documents.caption, alt: e.fanout.alt },
      vente: { svg: steps({ title: t.vente.title, steps: t.vente.items, arrows: true, rtl }), caption: t.vente.caption, alt: t.vente.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
