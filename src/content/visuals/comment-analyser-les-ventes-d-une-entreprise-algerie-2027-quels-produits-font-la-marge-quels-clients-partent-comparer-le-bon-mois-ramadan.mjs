import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { classements, ramadan, STRINGS as SC } from './custom/ventes.mjs';
export const slug = 'comment-analyser-les-ventes-d-une-entreprise-algerie-2027-quels-produits-font-la-marge-quels-clients-partent-comparer-le-bon-mois-ramadan';
const T = {
  fr: {
    cover: { eyebrow: 'Analyse des ventes · Algérie · 2027', title: ['Comment analyser ses ventes', 'six questions, six lectures'], subtitle: 'Ce qui fait la marge, qui est parti, si le mois est bon à calendrier égal, les données qu’il faut', left: { label: 'Des chiffres', sub: 'un total de ventes par mois' }, right: { label: 'Des réponses', sub: 'marge, clients, période égale' } },
    questions: { title: 'Six questions, et la lecture qui y répond', columns: ['La lecture', 'Ce qu’il faut dans les données'], rows: [
      { label: 'Qu’est-ce qui me fait vivre ?', cells: ['les produits classés par marge, pas par ventes', 'un coût d’achat sur chaque ligne de vente'] },
      { label: 'De qui est-ce que je dépends ?', cells: ['les clients classés par chiffre, puis par marge', 'une seule fiche par client'] },
      { label: 'Le mois est-il bon ?', cells: ['la même période de l’an dernier, à calendrier égal', 'des ventes datées, deux ans d’historique'] },
      { label: 'Qui est parti ?', cells: ['les clients de l’an dernier sans achat cette année', 'le client identifié sur chaque vente'] },
      { label: 'Qu’ai-je raté ?', cells: ['les demandes non servies, les ruptures', 'la demande notée, même sans vente'] },
      { label: 'Où part la marge ?', cells: ['les remises par vendeur, client et produit', 'le prix catalogue et le prix vendu'] },
    ], caption: 'Figure 1 · Six questions de gérant. Chacune appelle une lecture précise, classement ou comparaison, et chacune exige une donnée que beaucoup de logiciels n’enregistrent pas. La colonne de droite est la liste de ce qu’il faut vérifier avant toute analyse.', alt: 'Matrice de six questions : qu’est-ce qui me fait vivre, de qui je dépends, le mois est-il bon, qui est parti, qu’ai-je raté, où part la marge ; pour chacune, la lecture qui y répond et ce qu’il faut dans les données.' },
    classements: { caption: 'Figure 2 · Huit produits classés deux fois. Par chiffre d’affaires, le produit 1 est premier. Par marge, il est sixième : sa marge est de 6 %. Trois produits, les 2, 5 et 3, font près de 60 % de la marge totale. Indices et taux fictifs.' },
    analyser: { title: 'Analyser ses ventes, en six temps', items: [
      { label: 'Nettoyer', sub: 'une fiche par produit, par client' },
      { label: 'Compléter', sub: 'date, coût, vendeur sur chaque ligne', accent: true },
      { label: 'Classer', sub: 'par chiffre, puis par marge' },
      { label: 'Comparer', sub: 'à période égale, pas à date égale' },
      { label: 'Expliquer', sub: 'une cause par écart, vérifiée' },
      { label: 'Décider', sub: 'une action par lecture, un nom' },
    ], caption: 'Figure 3 · Le temps accentué est le deuxième : compléter chaque ligne de vente avec sa date, son coût et son vendeur. Sans le coût, pas de marge ; sans le client, pas de fidélité ; sans la date exacte, pas de comparaison juste.', alt: 'Six temps : nettoyer, compléter (accentué), classer, comparer, expliquer, décider.' },
    couches: { title: 'Une analyse des ventes, en cinq couches', layers: [
      { label: 'Ligne', items: [{ name: 'La ligne de vente : quoi, à qui, quand, combien, à quel prix, à quel coût, par qui', sub: 'tout le reste n’est que des sommes de lignes', accent: true }] },
      { label: 'Fiches', items: [{ name: 'Les fiches : un produit, un client, un vendeur n’existent qu’une fois, avec leur famille', sub: 'sinon chaque total est coupé en deux' }] },
      { label: 'Axes', items: [{ name: 'Les axes : produit, client, vendeur, point de vente, période, selon lesquels on regroupe', sub: 'la même vente, vue sous cinq angles' }] },
      { label: 'Mesures', items: [{ name: 'Les mesures : chiffre, quantité, marge, remise, calculées de la même façon partout', sub: 'une définition par chiffre' }] },
      { label: 'Lecture', items: [{ name: 'La lecture : classements, comparaisons à période égale, écarts expliqués, alertes', sub: 'ce que le gérant ouvre chaque dimanche' }] },
    ], caption: 'Figure 4 · La couche accentuée est la ligne de vente. Une analyse ne peut rien dire de ce que la ligne n’enregistre pas : si elle ne porte ni coût ni client, aucun écran, aussi beau soit-il, ne dira la marge ou la fidélité.', alt: 'Cinq couches : la ligne de vente (accentuée) ; les fiches ; les axes ; les mesures ; la lecture.' },
    ramadan: { caption: 'Figure 5 · Douze semaines de ventes sur deux années. Ramadan commence environ onze jours plus tôt la seconde année. Semaine 9 contre semaine 9 : moins 14 %, une fausse alerte. Deuxième semaine de Ramadan contre deuxième semaine de Ramadan : plus 6 %, la vraie évolution. Ventes fictives.' },
    calendrier: { title: 'Six semaines jusqu’à la première lecture', unit: 'sem.', items: [
      { label: 'Inventaire des données', note: 'ce que le logiciel enregistre vraiment sur une vente, et ce qui manque', from: 0, to: 1, accent: true },
      { label: 'Fiches et coûts', note: 'doublons fusionnés, familles posées, coût d’achat porté sur les lignes', from: 1, to: 3 },
      { label: 'Table des ventes', note: 'une ligne par article vendu, alimentée chaque nuit, avec ses axes', from: 2, to: 4 },
      { label: 'Six lectures', note: 'marge par produit, clients, période égale, clients partis, ruptures, remises', from: 3, to: 5 },
      { label: 'Calendrier de l’activité', note: 'Ramadan, fêtes, rentrée, jours fermés : les comparaisons s’y alignent', from: 4, to: 5 },
      { label: 'Première lecture', note: 'les six lectures lues avec le gérant, une décision et un responsable par lecture', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple. La période accentuée est la première : ouvrir les données et regarder ce qu’une vente enregistre vraiment. Le plus long n’est pas de construire les écrans, c’est de porter le coût et le client sur les lignes. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : inventaire des données (accentué), fiches et coûts, table des ventes, six lectures, calendrier de l’activité, première lecture.' },
  },
  en: {
    cover: { eyebrow: 'Sales analysis · Algeria · 2027', title: ['How to analyse your sales', 'six questions, six readings'], subtitle: 'What makes the margin, who has left, whether the month is good like for like, and what the data must hold', left: { label: 'Figures', sub: 'one sales total per month' }, right: { label: 'Answers', sub: 'margin, customers, like for like' } },
    questions: { title: 'Six questions, and the reading that answers each', columns: ['The reading', 'What the data must hold'], rows: [
      { label: 'What keeps me alive?', cells: ['products ranked by margin, not by sales', 'a purchase cost on every sales line'] },
      { label: 'Who do I depend on?', cells: ['customers ranked by revenue, then by margin', 'a single record per customer'] },
      { label: 'Is the month good?', cells: ['the same period last year, like for like', 'dated sales, two years of history'] },
      { label: 'Who has left?', cells: ['last year’s customers with no purchase this year', 'the customer identified on every sale'] },
      { label: 'What did I miss?', cells: ['requests not served, stockouts', 'the request noted, even with no sale'] },
      { label: 'Where does the margin go?', cells: ['discounts by seller, customer and product', 'the list price and the price sold'] },
    ], caption: 'Figure 1 · Six questions a manager asks. Each calls for a precise reading, a ranking or a comparison, and each requires data that many programs do not record. The right-hand column is the list of what to check before any analysis.', alt: 'Matrix of six questions: what keeps me alive, who do I depend on, is the month good, who has left, what did I miss, where does the margin go; for each, the reading that answers it and what the data must hold.' },
    classements: { caption: 'Figure 2 · Eight products ranked twice. By revenue, product 1 is first. By margin, it is sixth: its margin is 6%. Three products, 2, 5 and 3, make almost 60% of the total margin. Fictitious indices and rates.' },
    analyser: { title: 'Analysing your sales, in six steps', items: [
      { label: 'Clean', sub: 'one record per product, per customer' },
      { label: 'Complete', sub: 'date, cost, seller on every line', accent: true },
      { label: 'Rank', sub: 'by revenue, then by margin' },
      { label: 'Compare', sub: 'like period, not like date' },
      { label: 'Explain', sub: 'one cause per gap, checked' },
      { label: 'Decide', sub: 'one action per reading, one name' },
    ], caption: 'Figure 3 · The accented step is the second: complete every sales line with its date, its cost and its seller. Without the cost, no margin; without the customer, no loyalty; without the exact date, no fair comparison.', alt: 'Six steps: clean, complete (accented), rank, compare, explain, decide.' },
    couches: { title: 'A sales analysis, in five layers', layers: [
      { label: 'Line', items: [{ name: 'The sales line: what, to whom, when, how many, at what price, at what cost, by whom', sub: 'everything else is only sums of lines', accent: true }] },
      { label: 'Records', items: [{ name: 'Records: a product, a customer, a seller exist only once, with their family', sub: 'otherwise every total is cut in two' }] },
      { label: 'Axes', items: [{ name: 'Axes: product, customer, seller, point of sale, period, by which sales are grouped', sub: 'the same sale, seen from five angles' }] },
      { label: 'Measures', items: [{ name: 'Measures: revenue, quantity, margin, discount, worked out the same way everywhere', sub: 'one definition per figure' }] },
      { label: 'Reading', items: [{ name: 'Reading: rankings, like-for-like comparisons, gaps explained, alerts', sub: 'what the manager opens every Sunday' }] },
    ], caption: 'Figure 4 · The accented layer is the sales line. An analysis can say nothing about what the line does not record: if it carries neither cost nor customer, no screen, however handsome, will tell margin or loyalty.', alt: 'Five layers: the sales line (accented); records; axes; measures; reading.' },
    ramadan: { caption: 'Figure 5 · Twelve weeks of sales over two years. Ramadan starts about eleven days earlier in the second year. Week 9 against week 9: minus 14%, a false alarm. Second week of Ramadan against second week of Ramadan: plus 6%, the real change. Fictitious sales.' },
    calendrier: { title: 'Six weeks to the first reading', unit: 'wk', items: [
      { label: 'Data inventory', note: 'what the software really records on a sale, and what is missing', from: 0, to: 1, accent: true },
      { label: 'Records and costs', note: 'duplicates merged, families set, purchase cost carried on the lines', from: 1, to: 3 },
      { label: 'Sales table', note: 'one line per item sold, fed every night, with its axes', from: 2, to: 4 },
      { label: 'Six readings', note: 'margin per product, customers, like period, lost customers, stockouts, discounts', from: 3, to: 5 },
      { label: 'Business calendar', note: 'Ramadan, holidays, back-to-school, closed days: comparisons line up on it', from: 4, to: 5 },
      { label: 'First reading', note: 'the six readings read with the manager, one decision and one owner per reading', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example. The accented period is the first: open the data and look at what a sale really records. The longest part is not building the screens, it is carrying the cost and the customer on the lines. Indicative durations of a constructed example.', alt: 'Six-week calendar: data inventory (accented), records and costs, sales table, six readings, business calendar, first reading.' },
  },
  ar: {
    cover: { eyebrow: 'تحليل المبيعات · الجزائر · 2027', title: ['كيف تُحلَّل المبيعات', 'ستة أسئلة، وست قراءات'], subtitle: 'ما يصنع الهامش، من غادر، هل الشهر جيد برزنامة متساوية، وما يجب أن يكون في البيانات', left: { label: 'أرقام', sub: 'مجموع مبيعات لكل شهر' }, right: { label: 'أجوبة', sub: 'الهامش، الزبائن، والفترة نفسها' } },
    questions: { title: 'ستة أسئلة، والقراءة التي تجيب عنها', columns: ['القراءة', 'ما يجب أن يكون في البيانات'], rows: [
      { label: 'ما الذي أعيش منه؟', cells: ['المنتجات مرتَّبة بالهامش، لا بالمبيعات', 'كلفة الشراء على كل سطر بيع'] },
      { label: 'على من أتوقف؟', cells: ['الزبائن مرتَّبون بالرقم، ثم بالهامش', 'بطاقة واحدة لكل زبون'] },
      { label: 'هل الشهر جيد؟', cells: ['الفترة نفسها من السنة الماضية، برزنامة متساوية', 'مبيعات مؤرَّخة، وسنتان من التاريخ'] },
      { label: 'من غادر؟', cells: ['زبائن السنة الماضية دون شراء هذه السنة', 'الزبون معرَّف على كل بيع'] },
      { label: 'ماذا فاتني؟', cells: ['الطلبات غير الملبّاة، ونفاد المخزون', 'الطلب مسجَّل، حتى دون بيع'] },
      { label: 'أين يذهب الهامش؟', cells: ['التخفيضات حسب البائع والزبون والمنتج', 'السعر المعلَن والسعر المباع'] },
    ], caption: 'الشكل 1 · ستة أسئلة يطرحها المسيّر. كل واحد يستدعي قراءة محدَّدة، ترتيباً أو مقارنة، وكل واحد يتطلب معطى لا تسجّله برامج كثيرة. والعمود الثاني قائمة ما يُراجَع قبل أي تحليل.', alt: 'مصفوفة من ستة أسئلة: ما الذي أعيش منه، على من أتوقف، هل الشهر جيد، من غادر، ماذا فاتني، وأين يذهب الهامش؛ ولكل واحد، القراءة التي تجيب عنه وما يجب أن يكون في البيانات.' },
    classements: { caption: 'الشكل 2 · ثمانية منتجات مرتَّبة مرتين. برقم الأعمال، المنتج 1 أول. وبالهامش، هو سادس: هامشه 6 بالمئة. وثلاثة منتجات، 2 و5 و3، تصنع قرابة 60 بالمئة من الهامش الإجمالي. مؤشرات ونسب خيالية.' },
    analyser: { title: 'تحليل المبيعات، في ست مراحل', items: [
      { label: 'التنظيف', sub: 'بطاقة لكل منتج، ولكل زبون' },
      { label: 'الإكمال', sub: 'التاريخ، الكلفة، والبائع على كل سطر', accent: true },
      { label: 'الترتيب', sub: 'بالرقم، ثم بالهامش' },
      { label: 'المقارنة', sub: 'بالفترة نفسها، لا بالتاريخ نفسه' },
      { label: 'التفسير', sub: 'سبب لكل فارق، مراجَع' },
      { label: 'القرار', sub: 'عمل لكل قراءة، واسم' },
    ], caption: 'الشكل 3 · المرحلة المبرزة هي الثانية: إكمال كل سطر بيع بتاريخه وكلفته وبائعه. دون الكلفة، لا هامش؛ دون الزبون، لا وفاء؛ ودون التاريخ الدقيق، لا مقارنة عادلة.', alt: 'ست مراحل: التنظيف، الإكمال (مبرزة)، الترتيب، المقارنة، التفسير، والقرار.' },
    couches: { title: 'تحليل المبيعات، في خمس طبقات', layers: [
      { label: 'السطر', items: [{ name: 'سطر البيع: ماذا، لمن، متى، كم، بأي سعر، بأي كلفة، ومن باع', sub: 'وكل الباقي مجاميع أسطر فقط', accent: true }] },
      { label: 'البطاقات', items: [{ name: 'البطاقات: المنتج والزبون والبائع لا يوجدون إلا مرة واحدة، مع عائلتهم', sub: 'وإلا انقسم كل مجموع إلى اثنين' }] },
      { label: 'المحاور', items: [{ name: 'المحاور: المنتج، الزبون، البائع، نقطة البيع، والفترة، وبها تُجمَّع المبيعات', sub: 'البيع نفسه، من خمس زوايا' }] },
      { label: 'المقاييس', items: [{ name: 'المقاييس: الرقم، الكمية، الهامش، والتخفيض، محسوبة بالطريقة نفسها في كل مكان', sub: 'تعريف واحد لكل رقم' }] },
      { label: 'القراءة', items: [{ name: 'القراءة: ترتيبات، مقارنات بالفترة نفسها، فوارق مفسَّرة، وتنبيهات', sub: 'ما يفتحه المسيّر كل أحد' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي سطر البيع. والتحليل لا يستطيع قول شيء عما لا يسجّله السطر: إذا لم يحمل كلفة ولا زبوناً، فلا شاشة، مهما كانت جميلة، ستقول الهامش أو الوفاء.', alt: 'خمس طبقات: سطر البيع (مبرزة)؛ البطاقات؛ المحاور؛ المقاييس؛ والقراءة.' },
    ramadan: { caption: 'الشكل 5 · اثنا عشر أسبوعاً من المبيعات لسنتين. رمضان يبدأ قبل نحو أحد عشر يوماً في السنة الثانية. الأسبوع 9 مقابل الأسبوع 9: ناقص 14 بالمئة، إنذار كاذب. والأسبوع الثاني من رمضان مقابل الأسبوع الثاني من رمضان: زائد 6 بالمئة، التطور الحقيقي. مبيعات خيالية.' },
    calendrier: { title: 'ستة أسابيع حتى القراءة الأولى', unit: 'أسبوع', items: [
      { label: 'جرد البيانات', note: 'ما يسجّله البرنامج فعلاً عند البيع، وما ينقص', from: 0, to: 1, accent: true },
      { label: 'البطاقات والتكاليف', note: 'المكرَّرات مدموجة، العائلات محدَّدة، وكلفة الشراء محمولة على الأسطر', from: 1, to: 3 },
      { label: 'جدول المبيعات', note: 'سطر لكل مادة مباعة، يُغذّى كل ليلة، بمحاوره', from: 2, to: 4 },
      { label: 'ست قراءات', note: 'الهامش لكل منتج، الزبائن، الفترة نفسها، الزبائن المغادرون، النفاد، والتخفيضات', from: 3, to: 5 },
      { label: 'رزنامة النشاط', note: 'رمضان، الأعياد، الدخول، وأيام الإغلاق: المقارنات تصطف عليها', from: 4, to: 5 },
      { label: 'القراءة الأولى', note: 'القراءات الست تُقرأ مع المسيّر، قرار ومسؤول لكل قراءة', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال. الفترة المبرزة هي الأولى: فتح البيانات والنظر في ما يسجّله البيع فعلاً. والأطول ليس بناء الشاشات، بل حمل الكلفة والزبون على الأسطر. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: جرد البيانات (مبرزة)، البطاقات والتكاليف، جدول المبيعات، ست قراءات، رزنامة النشاط، ثم القراءة الأولى.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      questions: { svg: matrix({ title: t.questions.title, columns: t.questions.columns, rows: t.questions.rows, rtl }), caption: t.questions.caption, alt: t.questions.alt },
      classements: { svg: classements(e.classements, rtl), caption: t.classements.caption, alt: e.classements.alt },
      analyser: { svg: steps({ title: t.analyser.title, steps: t.analyser.items, arrows: true, rtl }), caption: t.analyser.caption, alt: t.analyser.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      ramadan: { svg: ramadan(e.ramadan, rtl), caption: t.ramadan.caption, alt: e.ramadan.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
