import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { mortalite, coutkilo, STRINGS as SC } from './custom/aviculture.mjs';
export const slug = 'comment-gerer-une-ferme-de-poulets-de-chair-algerie-2027-logiciel-elevage-avicole-carnet-de-bande-mortalite-indice-de-consommation-cout-du-kilo';
const T = {
  fr: {
    cover: { eyebrow: 'Élevage avicole · Algérie · 2027', title: ['Gérer une ferme de poulets de chair :', 'le coût du kilo, avant la vente'], subtitle: 'Carnet de bande, mortalité du jour, pesées, indice de consommation, stocks d’aliment, marge par bande', left: { label: 'Indice 2,00', sub: '215,8 DA le kilo' }, right: { label: 'Indice 1,80', sub: '200,8 DA le kilo' } },
    bande: { title: 'Une bande, en six temps', items: [
      { label: 'Mise en place', sub: 'poussins reçus, nombre, poids, origine' },
      { label: 'Démarrage', sub: 'première semaine, mortalité surveillée' },
      { label: 'Croissance', sub: 'pesée chaque semaine, aliment distribué', accent: true },
      { label: 'Finition', sub: 'poids visé, date d’enlèvement prévue' },
      { label: 'Enlèvement', sub: 'poids vendu, prix, acheteur' },
      { label: 'Vide sanitaire', sub: 'nettoyage, bilan de la bande' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est la croissance : c’est là que se décide l’indice de consommation, et c’est là qu’une pesée par semaine suffit à le connaître.', alt: 'Six temps : mise en place, démarrage, croissance (accentuée), finition, enlèvement, vide sanitaire.' },
    couches: { title: 'Ce qu’il y a dans un logiciel d’élevage avicole, en cinq couches', layers: [
      { label: 'Bandes', items: [{ name: 'Les bandes : bâtiment, date de mise en place, nombre de poussins, origine, date d’enlèvement prévue', sub: 'l’unité de compte de l’élevage' }] },
      { label: 'Carnet', items: [{ name: 'Le carnet du jour : morts, aliment distribué, eau, température, saisi au téléphone dans le bâtiment', sub: 'une minute chaque matin', accent: true }] },
      { label: 'Pesées', items: [{ name: 'Les pesées : poids moyen chaque semaine, comparé à l’objectif, indice de consommation calculé', sub: 'où en est la bande' }] },
      { label: 'Stocks', items: [{ name: 'Les stocks : aliment par silo et par livraison, produits vétérinaires, litière, gaz', sub: 'ce qui entre dans le bâtiment' }] },
      { label: 'Bilan', items: [{ name: 'Le bilan : coût du kilo, marge par bande, comparaison des bandes et des bâtiments', sub: 'ce que la bande a rapporté' }] },
    ], caption: 'Figure 2 · Cinq couches. La couche accentuée est le carnet du jour : tout le reste, l’indice comme le coût du kilo, se calcule à partir de ces quatre chiffres notés chaque matin.', alt: 'Cinq couches : les bandes ; le carnet du jour (accentué) ; les pesées ; les stocks ; le bilan.' },
    mortalite: { caption: 'Figure 3 · Les morts de chaque jour sur 42 jours : 500 au total, dont 190 en sept jours. Le seuil est franchi au jour 19, deux jours avant le pic. Mortalité fictive.' },
    coutkilo: { caption: 'Figure 4 · Le coût du kilo vif pour la même bande : 200,8 DA avec un indice de 1,80, 215,8 DA avec un indice de 2,00. Prix et poids fictifs.' },
    calendrier: { title: 'Six semaines, à caler sur un vide entre deux bandes', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'les bâtiments, les objectifs de poids, les fournisseurs, le carnet papier actuel', from: 0, to: 1, accent: true },
      { label: 'Bandes et carnet du jour', note: 'mise en place, saisie au téléphone, fonctionnement sans réseau', from: 1, to: 3 },
      { label: 'Pesées et indice', note: 'pesée hebdomadaire, courbe contre objectif, indice de consommation', from: 2, to: 4 },
      { label: 'Stocks d’aliment', note: 'livraisons, silos, consommation par bâtiment', from: 3, to: 5 },
      { label: 'Alertes', note: 'mortalité, consommation d’eau, écart de poids, envoyées au téléphone', from: 3, to: 5 },
      { label: 'Bilan et mise en service', note: 'coût du kilo, marge par bande, première bande suivie de bout en bout', from: 4, to: 6 },
    ], caption: 'Figure 5 · Six semaines dans l’exemple. La période accentuée est la première ; la mise en service se cale sur un vide entre deux bandes, pour que la première bande soit suivie du premier au dernier jour. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : cadrage (accentué), bandes et carnet du jour, pesées et indice, stocks d’aliment, alertes, bilan et mise en service.' },
    tailles: { title: 'D’un bâtiment à une filière intégrée : ce qui change', columns: ['Ce qui change', 'Ce que le logiciel ajoute'], rows: [
      { label: 'Un bâtiment, une bande à la fois', cells: ['tout tient dans un cahier, sauf les calculs', 'saisie au téléphone, indice et coût du kilo'] },
      { label: 'Plusieurs bâtiments, des bandes décalées', cells: ['on compare, on planifie les mises en place', 'tableau par bâtiment, planning des bandes'] },
      { label: 'Plusieurs sites, des techniciens', cells: ['la saisie se fait loin du bureau', 'hors connexion, synchronisation, alertes'] },
      { label: 'Aliment, couvoir ou abattoir intégrés', cells: ['les lots se suivent d’un maillon à l’autre', 'stocks d’aliment, traçabilité des lots'] },
      { label: 'Des éleveurs sous contrat', cells: ['un intégrateur suit des dizaines d’éleveurs', 'un compte par éleveur, livraisons, décompte'] },
    ], caption: 'Figure 6 · Cinq situations. Le même carnet de bande sert partout ; ce qui change, c’est le nombre de bâtiments à comparer et la distance entre le bâtiment et le bureau.', alt: 'Matrice de cinq situations d’élevage : un bâtiment, plusieurs bâtiments, plusieurs sites, une filière intégrée, des éleveurs sous contrat ; pour chacune, ce qui change et ce que le logiciel ajoute.' },
  },
  en: {
    cover: { eyebrow: 'Poultry farming · Algeria · 2027', title: ['Running a broiler chicken farm:', 'the cost per kilo, before the sale'], subtitle: 'Flock log, daily mortality, weighings, feed conversion ratio, feed stocks, margin per flock', left: { label: 'Ratio 2.00', sub: 'DA 215.8 a kilo' }, right: { label: 'Ratio 1.80', sub: 'DA 200.8 a kilo' } },
    bande: { title: 'A flock, in six steps', items: [
      { label: 'Placement', sub: 'chicks received, number, weight, origin' },
      { label: 'Starting', sub: 'first week, mortality watched' },
      { label: 'Growth', sub: 'weighing every week, feed given', accent: true },
      { label: 'Finishing', sub: 'target weight, planned removal date' },
      { label: 'Removal', sub: 'weight sold, price, buyer' },
      { label: 'Clean-out', sub: 'cleaning, flock results' },
    ], caption: 'Figure 1 · Six steps. The accented step is growth: that is where the feed conversion ratio is decided, and where one weighing a week is enough to know it.', alt: 'Six steps: placement, starting, growth (accented), finishing, removal, clean-out.' },
    couches: { title: 'What is inside poultry farm software, in five layers', layers: [
      { label: 'Flocks', items: [{ name: 'Flocks: house, placement date, number of chicks, origin, planned removal date', sub: 'the farm’s unit of account' }] },
      { label: 'Daily log', items: [{ name: 'The daily log: deaths, feed given, water, temperature, entered on the phone in the house', sub: 'one minute every morning', accent: true }] },
      { label: 'Weighings', items: [{ name: 'Weighings: average weight each week, compared with the target, feed conversion ratio calculated', sub: 'where the flock stands' }] },
      { label: 'Stocks', items: [{ name: 'Stocks: feed per silo and per delivery, veterinary products, litter, gas', sub: 'what goes into the house' }] },
      { label: 'Results', items: [{ name: 'Results: cost per kilo, margin per flock, comparison of flocks and houses', sub: 'what the flock brought in' }] },
    ], caption: 'Figure 2 · Five layers. The accented layer is the daily log: everything else, the ratio as much as the cost per kilo, is calculated from those four figures noted every morning.', alt: 'Five layers: flocks; the daily log (accented); weighings; stocks; results.' },
    mortalite: { caption: 'Figure 3 · Each day’s deaths over 42 days: 500 in all, 190 of them in seven days. The threshold is crossed on day 19, two days before the peak. Fictitious mortality.' },
    coutkilo: { caption: 'Figure 4 · The cost of a live kilo for the same flock: DA 200.8 with a ratio of 1.80, DA 215.8 with a ratio of 2.00. Fictitious prices and weights.' },
    calendrier: { title: 'Six weeks, timed on a gap between two flocks', unit: 'wk', items: [
      { label: 'Scoping', note: 'the houses, the weight targets, the suppliers, the current paper log', from: 0, to: 1, accent: true },
      { label: 'Flocks and daily log', note: 'placement, entry on the phone, working without a network', from: 1, to: 3 },
      { label: 'Weighings and ratio', note: 'weekly weighing, curve against target, feed conversion ratio', from: 2, to: 4 },
      { label: 'Feed stocks', note: 'deliveries, silos, consumption per house', from: 3, to: 5 },
      { label: 'Alerts', note: 'mortality, water consumption, weight gap, sent to the phone', from: 3, to: 5 },
      { label: 'Results and go-live', note: 'cost per kilo, margin per flock, first flock followed from start to finish', from: 4, to: 6 },
    ], caption: 'Figure 5 · Six weeks in the example. The accented period is the first; go-live is timed on a gap between two flocks, so that the first flock is followed from the first day to the last. Indicative durations of a constructed example.', alt: 'Six-week calendar: scoping (accented), flocks and daily log, weighings and ratio, feed stocks, alerts, results and go-live.' },
    tailles: { title: 'From one house to an integrated chain: what changes', columns: ['What changes', 'What the software adds'], rows: [
      { label: 'One house, one flock at a time', cells: ['everything fits in a notebook, except the sums', 'entry on the phone, ratio and cost per kilo'] },
      { label: 'Several houses, staggered flocks', cells: ['you compare, and plan placements', 'table per house, flock schedule'] },
      { label: 'Several sites, technicians', cells: ['entry happens far from the office', 'offline use, synchronisation, alerts'] },
      { label: 'Feed mill, hatchery or abattoir in-house', cells: ['batches are followed from one link to the next', 'feed stocks, batch traceability'] },
      { label: 'Contract growers', cells: ['an integrator follows dozens of growers', 'an account per grower, deliveries, settlement'] },
    ], caption: 'Figure 6 · Five situations. The same flock log serves everywhere; what changes is the number of houses to compare and the distance between the house and the office.', alt: 'Matrix of five farming situations: one house, several houses, several sites, an integrated chain, contract growers; for each, what changes and what the software adds.' },
  },
  ar: {
    cover: { eyebrow: 'تربية الدواجن · الجزائر · 2027', title: ['تسيير مدجنة الدجاج اللاحم:', 'كلفة الكيلوغرام، قبل البيع'], subtitle: 'سجل الفوج، نفوق اليوم، الوزن، معامل التحويل، مخزون العلف، والهامش لكل فوج', left: { label: 'معامل ⁦2,00⁩', sub: '⁦215,8⁩ دج للكيلوغرام' }, right: { label: 'معامل ⁦1,80⁩', sub: '⁦200,8⁩ دج للكيلوغرام' } },
    bande: { title: 'فوج، في ست مراحل', items: [
      { label: 'الاستقبال', sub: 'كتاكيت مستلمة، العدد، الوزن، والمصدر' },
      { label: 'الانطلاق', sub: 'الأسبوع الأول، والنفوق مراقَب' },
      { label: 'النمو', sub: 'وزن كل أسبوع، وعلف موزَّع', accent: true },
      { label: 'التسمين الأخير', sub: 'الوزن المستهدَف، وتاريخ البيع المتوقع' },
      { label: 'البيع', sub: 'الوزن المباع، السعر، والمشتري' },
      { label: 'التنظيف', sub: 'تنظيف العنبر، وحصيلة الفوج' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي النمو: فيها يُحسم معامل التحويل، وفيها يكفي وزن واحد في الأسبوع لمعرفته.', alt: 'ست مراحل: الاستقبال، الانطلاق، النمو (مبرز)، التسمين الأخير، البيع، والتنظيف.' },
    couches: { title: 'ما يوجد في برنامج تربية الدواجن، في خمس طبقات', layers: [
      { label: 'الأفواج', items: [{ name: 'الأفواج: العنبر، تاريخ الاستقبال، عدد الكتاكيت، المصدر، وتاريخ البيع المتوقع', sub: 'وحدة الحساب في المدجنة' }] },
      { label: 'سجل اليوم', items: [{ name: 'سجل اليوم: النافق، العلف الموزَّع، الماء، والحرارة، يُدخَل على الهاتف في العنبر', sub: 'دقيقة كل صباح', accent: true }] },
      { label: 'الوزن', items: [{ name: 'الوزن: متوسط الوزن كل أسبوع، مقارناً بالهدف، ومعامل التحويل محسوباً', sub: 'أين وصل الفوج' }] },
      { label: 'المخزون', items: [{ name: 'المخزون: العلف لكل صومعة ولكل تسليم، المواد البيطرية، الفرشة، والغاز', sub: 'ما يدخل العنبر' }] },
      { label: 'الحصيلة', items: [{ name: 'الحصيلة: كلفة الكيلوغرام، الهامش لكل فوج، ومقارنة الأفواج والعنابر', sub: 'ما ربحه الفوج' }] },
    ], caption: 'الشكل 2 · خمس طبقات. الطبقة المبرزة هي سجل اليوم: كل الباقي، المعامل ككلفة الكيلوغرام، يُحسب من هذه الأرقام الأربعة التي تُسجَّل كل صباح.', alt: 'خمس طبقات: الأفواج؛ سجل اليوم (مبرز)؛ الوزن؛ المخزون؛ والحصيلة.' },
    mortalite: { caption: 'الشكل 3 · نفوق كل يوم على 42 يوماً: 500 في المجموع، منها 190 في سبعة أيام. والعتبة تُتجاوز في اليوم 19، يومين قبل القمة. نفوق خيالي.' },
    coutkilo: { caption: 'الشكل 4 · كلفة الكيلوغرام الحي للفوج نفسه: 200,8 ديناراً بمعامل 1,80، و215,8 ديناراً بمعامل 2,00. أسعار وأوزان خيالية.' },
    calendrier: { title: 'ستة أسابيع، تُضبط على فراغ بين فوجين', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'العنابر، أهداف الوزن، المورّدون، والسجل الورقي الحالي', from: 0, to: 1, accent: true },
      { label: 'الأفواج وسجل اليوم', note: 'الاستقبال، الإدخال على الهاتف، والعمل دون شبكة', from: 1, to: 3 },
      { label: 'الوزن والمعامل', note: 'وزن أسبوعي، منحنى مقابل الهدف، ومعامل التحويل', from: 2, to: 4 },
      { label: 'مخزون العلف', note: 'التسليمات، الصوامع، والاستهلاك لكل عنبر', from: 3, to: 5 },
      { label: 'التنبيهات', note: 'النفوق، استهلاك الماء، فرق الوزن، تُرسَل إلى الهاتف', from: 3, to: 5 },
      { label: 'الحصيلة والتشغيل', note: 'كلفة الكيلوغرام، الهامش لكل فوج، وأول فوج متابَع من البداية إلى النهاية', from: 4, to: 6 },
    ], caption: 'الشكل 5 · ستة أسابيع في المثال. الفترة المبرزة هي الأولى؛ والتشغيل يُضبط على فراغ بين فوجين، ليُتابَع أول فوج من يومه الأول إلى الأخير. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: التأطير (مبرز)، الأفواج وسجل اليوم، الوزن والمعامل، مخزون العلف، التنبيهات، ثم الحصيلة والتشغيل.' },
    tailles: { title: 'من عنبر واحد إلى سلسلة متكاملة: ما يتغيّر', columns: ['ما يتغيّر', 'ما يضيفه البرنامج'], rows: [
      { label: 'عنبر واحد، وفوج في كل مرة', cells: ['كل شيء يسع في دفتر، إلا الحسابات', 'إدخال على الهاتف، المعامل، وكلفة الكيلوغرام'] },
      { label: 'عدة عنابر، وأفواج متتالية', cells: ['تُقارَن، ويُخطَّط للاستقبال', 'جدول لكل عنبر، وبرنامج الأفواج'] },
      { label: 'عدة مواقع، وتقنيون', cells: ['الإدخال يتم بعيداً عن المكتب', 'عمل دون اتصال، تزامن، وتنبيهات'] },
      { label: 'مصنع علف، مفرخة، أو مذبح داخلي', cells: ['الدفعات تُتابَع من حلقة إلى أخرى', 'مخزون العلف، وتتبّع الدفعات'] },
      { label: 'مربّون متعاقدون', cells: ['متعامل يتابع عشرات المربّين', 'حساب لكل مربٍّ، تسليمات، وتصفية'] },
    ], caption: 'الشكل 6 · خمس حالات. سجل الفوج نفسه يخدم في كل مكان؛ وما يتغيّر هو عدد العنابر التي تُقارَن والمسافة بين العنبر والمكتب.', alt: 'مصفوفة من خمس حالات للتربية: عنبر واحد، عدة عنابر، عدة مواقع، سلسلة متكاملة، ومربّون متعاقدون؛ ولكل واحدة، ما يتغيّر وما يضيفه البرنامج.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      bande: { svg: steps({ title: t.bande.title, steps: t.bande.items, arrows: true, rtl }), caption: t.bande.caption, alt: t.bande.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      mortalite: { svg: mortalite(e.mortalite, rtl), caption: t.mortalite.caption, alt: e.mortalite.alt },
      coutkilo: { svg: coutkilo(e.coutkilo, rtl), caption: t.coutkilo.caption, alt: e.coutkilo.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      tailles: { svg: matrix({ title: t.tailles.title, columns: t.tailles.columns, rows: t.tailles.rows, rtl }), caption: t.tailles.caption, alt: t.tailles.alt },
    },
  };
}
