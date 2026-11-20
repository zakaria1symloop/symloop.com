import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { arbre, paires, STRINGS as SC } from './custom/panier.mjs';
export const slug = 'comment-augmenter-le-panier-moyen-en-magasin-algerie-2027-articles-par-ticket-produits-achetes-ensemble-suggestion-a-la-caisse-lots-mesure';
const T = {
  fr: {
    cover: { eyebrow: 'Panier moyen · Algérie · 2027', title: ['Augmenter le panier moyen', 'en magasin'], subtitle: 'Articles par ticket, produits achetés ensemble, suggestion à la caisse, lots, seuils, mesure', left: { label: 'Plus de clients ?', sub: 'ce que tout le monde cherche' }, right: { label: 'Un article de plus', sub: 'sur un ticket sur dix' } },
    leviers: { title: 'Six leviers du panier moyen : ce que chacun fait, et son piège', columns: ['Ce qu’il fait', 'Son piège'], rows: [
      { label: 'La suggestion à la caisse', cells: ['propose l’article associé, au bon moment', 'proposée à tous, elle agace et ralentit'] },
      { label: 'Les articles placés ensemble', cells: ['le rouleau à côté de la peinture', 'se décide sur les tickets, pas à l’œil'] },
      { label: 'Le lot', cells: ['plusieurs articles vendus comme un seul', 'une remise donnée à qui achetait déjà tout'] },
      { label: 'Le seuil', cells: ['un avantage à partir d’un montant', 'placé trop haut, personne ne l’atteint'] },
      { label: 'La montée en gamme', cells: ['le modèle au-dessus, expliqué', 'pousser le plus coûteux fait perdre la vente'] },
      { label: 'Les articles de caisse', cells: ['le petit article pris sans y penser', 'des articles en plus, peu de valeur'] },
    ], caption: 'Figure 1 · Six leviers. Chacun a un piège, et aucun ne se juge à l’impression : il se mesure sur les tickets, avant et après, contre un magasin ou une période témoin.', alt: 'Matrice de six leviers du panier moyen : la suggestion à la caisse, les articles placés ensemble, le lot, le seuil, la montée en gamme, les articles de caisse ; pour chacun, ce qu’il fait et son piège.' },
    couches: { title: 'Ce que tient le logiciel, en cinq couches', layers: [
      { label: 'Tickets', items: [{ name: 'Les tickets, ligne par ligne : quoi, combien, à quel prix, à quelle heure, par qui en caisse', sub: 'la matière de tout le reste' }] },
      { label: 'Paires', items: [{ name: 'Les paires : les articles achetés ensemble, avec leur part et leur indice, recalculés chaque mois', sub: 'ce que les tickets disent déjà' }] },
      { label: 'Règles', items: [{ name: 'Les règles : suggestions, lots, seuils, chacune avec ses dates, ses magasins et sa marge', sub: 'ce qu’on décide d’essayer' }] },
      { label: 'Caisse', items: [{ name: 'La caisse : la suggestion affichée quand l’article déclencheur est scanné, en une ligne', sub: 'le seul endroit où la règle rencontre le client', accent: true }] },
      { label: 'Mesure', items: [{ name: 'La mesure : acceptée ou non, par règle, par magasin, par personne en caisse, contre un témoin', sub: 'ce qu’on garde, ce qu’on retire' }] },
    ], caption: 'Figure 2 · Cinq couches. La couche accentuée est la caisse : c’est là, et seulement là, que la règle rencontre le client, pendant les quelques secondes où il paie.', alt: 'Cinq couches : les tickets ; les paires ; les règles ; la caisse (accentuée) ; la mesure.' },
    arbre: { caption: 'Figure 3 · Le chiffre d’affaires du mois décomposé en tickets, articles par ticket et prix par article ; à droite, les tickets selon leur nombre d’articles. Montants fictifs.' },
    paires: { caption: 'Figure 4 · Trois paires lues dans 4 000 tickets : la part qui prend déjà le second article, l’indice de la paire, et les 1 305 tickets qui repartent sans. Exemple construit.' },
    regle: { title: 'Une règle, de l’idée à la décision, en six temps', items: [
      { label: 'Lire', sub: 'les paires du mois, triées par indice' },
      { label: 'Choisir', sub: 'une paire, un article à proposer' },
      { label: 'Écrire', sub: 'la règle : déclencheur, article, phrase' },
      { label: 'Afficher', sub: 'à la caisse, une ligne, un geste' },
      { label: 'Mesurer', sub: 'acceptée ou non, contre un témoin', accent: true },
      { label: 'Décider', sub: 'garder, corriger ou retirer' },
    ], caption: 'Figure 5 · Six temps. Le temps accentué est la mesure : une règle qui n’est pas comparée à un témoin ne prouve rien, parce que le panier monte et descend tout seul d’une semaine à l’autre.', alt: 'Six temps : lire, choisir, écrire, afficher, mesurer (accentué), décider.' },
    calendrier: { title: 'Cinq semaines, des tickets à la première règle mesurée', unit: 'sem.', items: [
      { label: 'Relevé', note: 'vos tickets des douze derniers mois, votre caisse, vos rayons, vos marges', from: 0, to: 1, accent: true },
      { label: 'Paires', note: 'calcul des paires, tri par indice, lecture avec vous', from: 1, to: 2 },
      { label: 'Règles', note: 'trois à cinq règles, les phrases de caisse, les lots et les seuils', from: 2, to: 3 },
      { label: 'Caisse', note: 'l’affichage à la caisse, hors ligne, sans ralentir le passage', from: 2, to: 4 },
      { label: 'Mesure', note: 'acceptation par règle et par personne, magasin ou période témoin, premier bilan', from: 3, to: 5 },
    ], caption: 'Figure 6 · Cinq semaines dans l’exemple, relevé compris. La période accentuée est la première : tout part des tickets que la caisse enregistre déjà. Durées indicatives d’un exemple construit.', alt: 'Calendrier de cinq semaines : relevé (accentué), paires, règles, caisse, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Average basket · Algeria · 2027', title: ['Raising the average basket', 'in a shop'], subtitle: 'Items per ticket, products bought together, suggestion at the till, bundles, thresholds, measurement', left: { label: 'More customers?', sub: 'what everyone looks for' }, right: { label: 'One more item', sub: 'on one ticket in ten' } },
    leviers: { title: 'Six levers of the average basket: what each does, and its trap', columns: ['What it does', 'Its trap'], rows: [
      { label: 'The suggestion at the till', cells: ['offers the associated item, at the right time', 'offered to everyone, it annoys and slows'] },
      { label: 'Items placed together', cells: ['the roller next to the paint', 'decided on tickets, not by eye'] },
      { label: 'The bundle', cells: ['several items sold as one', 'a discount for those who bought it all anyway'] },
      { label: 'The threshold', cells: ['a benefit from a given amount', 'set too high, nobody reaches it'] },
      { label: 'Trading up', cells: ['the model above, explained', 'pushing the dearest one loses the sale'] },
      { label: 'Till-side items', cells: ['the small item picked up without thinking', 'more items, little value'] },
    ], caption: 'Figure 1 · Six levers. Each has a trap, and none is judged by impression: it is measured on tickets, before and after, against a control shop or period.', alt: 'Matrix of six levers of the average basket: the suggestion at the till, items placed together, the bundle, the threshold, trading up, till-side items; for each, what it does and its trap.' },
    couches: { title: 'What the software holds, in five layers', layers: [
      { label: 'Tickets', items: [{ name: 'The tickets, line by line: what, how many, at what price, at what time, by whom at the till', sub: 'the raw material of everything else' }] },
      { label: 'Pairs', items: [{ name: 'The pairs: items bought together, with their share and their index, recalculated every month', sub: 'what the tickets already say' }] },
      { label: 'Rules', items: [{ name: 'The rules: suggestions, bundles, thresholds, each with its dates, its shops and its margin', sub: 'what you decide to try' }] },
      { label: 'Till', items: [{ name: 'The till: the suggestion shown when the trigger item is scanned, in one line', sub: 'the only place where the rule meets the customer', accent: true }] },
      { label: 'Measurement', items: [{ name: 'Measurement: accepted or not, per rule, per shop, per person at the till, against a control', sub: 'what is kept, what is withdrawn' }] },
    ], caption: 'Figure 2 · Five layers. The accented layer is the till: that is where, and only where, the rule meets the customer, during the few seconds they are paying.', alt: 'Five layers: the tickets; the pairs; the rules; the till (accented); measurement.' },
    arbre: { caption: 'Figure 3 · The month’s revenue broken down into tickets, items per ticket and price per item; on the right, tickets by number of items. Fictitious amounts.' },
    paires: { caption: 'Figure 4 · Three pairs read in 4,000 tickets: the share that already takes the second item, the pair’s index, and the 1,305 tickets that leave without it. Constructed example.' },
    regle: { title: 'A rule, from idea to decision, in six steps', items: [
      { label: 'Read', sub: 'the month’s pairs, sorted by index' },
      { label: 'Choose', sub: 'one pair, one item to offer' },
      { label: 'Write', sub: 'the rule: trigger, item, sentence' },
      { label: 'Show', sub: 'at the till, one line, one gesture' },
      { label: 'Measure', sub: 'accepted or not, against a control', accent: true },
      { label: 'Decide', sub: 'keep, correct or withdraw' },
    ], caption: 'Figure 5 · Six steps. The accented step is measurement: a rule that is not compared with a control proves nothing, because the basket goes up and down on its own from one week to the next.', alt: 'Six steps: read, choose, write, show, measure (accented), decide.' },
    calendrier: { title: 'Five weeks, from the tickets to the first measured rule', unit: 'wk', items: [
      { label: 'Survey', note: 'your tickets of the last twelve months, your till, your shelves, your margins', from: 0, to: 1, accent: true },
      { label: 'Pairs', note: 'calculating the pairs, sorting by index, reading them with you', from: 1, to: 2 },
      { label: 'Rules', note: 'three to five rules, the till sentences, the bundles and thresholds', from: 2, to: 3 },
      { label: 'Till', note: 'the display at the till, offline, without slowing the queue', from: 2, to: 4 },
      { label: 'Measurement', note: 'acceptance per rule and per person, control shop or period, first review', from: 3, to: 5 },
    ], caption: 'Figure 6 · Five weeks in the example, survey included. The accented period is the first: everything starts from the tickets the till already records. Indicative durations of a constructed example.', alt: 'Five-week calendar: survey (accented), pairs, rules, till, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'متوسط السلة · الجزائر · 2027', title: ['رفع متوسط السلة', 'في المحل'], subtitle: 'السلع في التذكرة، السلع التي تُشترى معاً، الاقتراح عند الصندوق، الحزم، العتبات، والقياس', left: { label: 'زبائن أكثر؟', sub: 'ما يبحث عنه الجميع' }, right: { label: 'سلعة إضافية', sub: 'في تذكرة من كل عشر' } },
    leviers: { title: 'ست روافع لمتوسط السلة: ما تفعله كل واحدة، وفخّها', columns: ['ما تفعله', 'فخّها'], rows: [
      { label: 'الاقتراح عند الصندوق', cells: ['يقترح السلعة المرتبطة، في اللحظة المناسبة', 'إذا اقتُرح على الجميع، أزعج وأبطأ'] },
      { label: 'السلع الموضوعة معاً', cells: ['الأسطوانة بجانب الطلاء', 'يُقرَّر على التذاكر، لا بالعين'] },
      { label: 'الحزمة', cells: ['عدة سلع تُباع كسلعة واحدة', 'تخفيض لمن كان يشتري الكل أصلاً'] },
      { label: 'العتبة', cells: ['مزية ابتداءً من مبلغ', 'إذا وُضعت عالية، لم يبلغها أحد'] },
      { label: 'الارتقاء في الصنف', cells: ['الموديل الأعلى، مع شرحه', 'دفع الأغلى يضيّع البيع'] },
      { label: 'سلع الصندوق', cells: ['السلعة الصغيرة التي تؤخذ دون تفكير', 'سلع أكثر، وقيمة قليلة'] },
    ], caption: 'الشكل 1 · ست روافع. لكل واحدة فخّ، ولا واحدة تُحكَم بالانطباع: تُقاس على التذاكر، قبل وبعد، مقابل محل أو فترة شاهدة.', alt: 'مصفوفة من ست روافع لمتوسط السلة: الاقتراح عند الصندوق، السلع الموضوعة معاً، الحزمة، العتبة، الارتقاء في الصنف، وسلع الصندوق؛ ولكل واحدة، ما تفعله وفخّها.' },
    couches: { title: 'ما يمسكه البرنامج، في خمس طبقات', layers: [
      { label: 'التذاكر', items: [{ name: 'التذاكر، سطراً بسطر: ماذا، كم، بأي سعر، في أي ساعة، ومن كان عند الصندوق', sub: 'مادة كل الباقي' }] },
      { label: 'الثنائيات', items: [{ name: 'الثنائيات: السلع التي تُشترى معاً، بنسبتها ومؤشرها، ويُعاد حسابها كل شهر', sub: 'ما تقوله التذاكر من قبل' }] },
      { label: 'القواعد', items: [{ name: 'القواعد: اقتراحات، حزم، وعتبات، لكل واحدة تواريخها، محلاتها، وهامشها', sub: 'ما يُقرَّر تجريبه' }] },
      { label: 'الصندوق', items: [{ name: 'الصندوق: الاقتراح يظهر حين تُمسح السلعة المحرِّكة، في سطر واحد', sub: 'المكان الوحيد الذي تلتقي فيه القاعدة بالزبون', accent: true }] },
      { label: 'القياس', items: [{ name: 'القياس: قُبل أم لا، لكل قاعدة، لكل محل، لكل شخص عند الصندوق، مقابل شاهد', sub: 'ما يُحتفظ به، وما يُسحب' }] },
    ], caption: 'الشكل 2 · خمس طبقات. الطبقة المبرزة هي الصندوق: هناك، وهناك فقط، تلتقي القاعدة بالزبون، في الثواني القليلة التي يدفع فيها.', alt: 'خمس طبقات: التذاكر؛ الثنائيات؛ القواعد؛ الصندوق (مبرزة)؛ والقياس.' },
    arbre: { caption: 'الشكل 3 · رقم أعمال الشهر مفكَّكاً إلى تذاكر، سلع في التذكرة، وسعر للسلعة؛ وعلى الجانب، التذاكر حسب عدد سلعها. مبالغ خيالية.' },
    paires: { caption: 'الشكل 4 · ثلاث ثنائيات مقروءة في 4000 تذكرة: النسبة التي تأخذ السلعة الثانية من قبل، مؤشر الثنائية، والـ1305 تذاكر التي تغادر دونها. مثال مركَّب.' },
    regle: { title: 'قاعدة، من الفكرة إلى القرار، في ست مراحل', items: [
      { label: 'القراءة', sub: 'ثنائيات الشهر، مرتّبة حسب المؤشر' },
      { label: 'الاختيار', sub: 'ثنائية واحدة، وسلعة تُقترح' },
      { label: 'الكتابة', sub: 'القاعدة: المحرِّك، السلعة، والجملة' },
      { label: 'العرض', sub: 'عند الصندوق، سطر واحد وحركة واحدة' },
      { label: 'القياس', sub: 'قُبل أم لا، مقابل شاهد', accent: true },
      { label: 'القرار', sub: 'إبقاء، تصحيح، أو سحب' },
    ], caption: 'الشكل 5 · ست مراحل. المرحلة المبرزة هي القياس: قاعدة لا تُقارَن بشاهد لا تثبت شيئاً، لأن السلة تصعد وتنزل وحدها من أسبوع إلى آخر.', alt: 'ست مراحل: القراءة، الاختيار، الكتابة، العرض، القياس (مبرزة)، والقرار.' },
    calendrier: { title: 'خمسة أسابيع، من التذاكر إلى أول قاعدة مقيسة', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'تذاكركم للاثني عشر شهراً الأخيرة، صندوقكم، رفوفكم، وهوامشكم', from: 0, to: 1, accent: true },
      { label: 'الثنائيات', note: 'حساب الثنائيات، ترتيبها حسب المؤشر، وقراءتها معكم', from: 1, to: 2 },
      { label: 'القواعد', note: 'ثلاث إلى خمس قواعد، جمل الصندوق، الحزم، والعتبات', from: 2, to: 3 },
      { label: 'الصندوق', note: 'العرض عند الصندوق، دون اتصال، ودون إبطاء المرور', from: 2, to: 4 },
      { label: 'القياس', note: 'القبول لكل قاعدة ولكل شخص، محل أو فترة شاهدة، وأول حصيلة', from: 3, to: 5 },
    ], caption: 'الشكل 6 · خمسة أسابيع في المثال، المعاينة منها. الفترة المبرزة هي الأولى: كل شيء ينطلق من التذاكر التي يسجّلها الصندوق من قبل. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من خمسة أسابيع: المعاينة (مبرزة)، الثنائيات، القواعد، الصندوق، والقياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      leviers: { svg: matrix({ title: t.leviers.title, columns: t.leviers.columns, rows: t.leviers.rows, rtl }), caption: t.leviers.caption, alt: t.leviers.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      arbre: { svg: arbre(e.arbre, rtl), caption: t.arbre.caption, alt: e.arbre.alt },
      paires: { svg: paires(e.paires, rtl), caption: t.paires.caption, alt: e.paires.alt },
      regle: { svg: steps({ title: t.regle.title, steps: t.regle.items, arrows: true, rtl }), caption: t.regle.caption, alt: t.regle.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 5, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
