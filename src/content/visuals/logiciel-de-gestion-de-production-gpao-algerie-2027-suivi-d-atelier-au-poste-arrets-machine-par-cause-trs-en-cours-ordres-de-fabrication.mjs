import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { poste, causes, STRINGS as SC } from './custom/atelier.mjs';
export const slug = 'logiciel-de-gestion-de-production-gpao-algerie-2027-suivi-d-atelier-au-poste-arrets-machine-par-cause-trs-en-cours-ordres-de-fabrication';
const T = {
  fr: {
    cover: { eyebrow: 'Gestion de production · Algérie · 2027', title: ['Logiciel de gestion de production', 'l’atelier suivi poste par poste'], subtitle: 'Ordres de fabrication, déclarations au poste, arrêts par cause, TRS, en-cours, coût réel', left: { label: 'Huit heures de poste', sub: 'machine en marche' }, right: { label: '4 h 22 utiles', sub: 'le reste a une cause' } },
    ordre: { title: 'La vie d’un ordre de fabrication, en six temps', items: [
      { label: 'Lancement', sub: 'ordre, quantité, date, gamme' },
      { label: 'Matière', sub: 'sortie de stock, lot noté' },
      { label: 'Réglage', sub: 'changement de série chronométré' },
      { label: 'Production', sub: 'quantités et arrêts déclarés au poste', accent: true },
      { label: 'Contrôle', sub: 'bonnes pièces, rebuts, retouches' },
      { label: 'Clôture', sub: 'temps, matière, coût, entrée en stock' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est la production : c’est là que se déclarent, au poste et au moment où ils arrivent, les quantités, les arrêts et les rebuts. Tout ce qui se lit ensuite en vient.', alt: 'Six temps : lancement, matière, réglage, production (accentuée), contrôle, clôture.' },
    poste: { caption: 'Figure 2 · Un poste de huit heures sur une machine : 345 minutes de marche, 105 d’arrêts, puis les trois rapports qui donnent un TRS de 58,3 %. Chiffres fictifs.' },
    causes: { caption: 'Figure 3 · Un mois d’arrêts sur une machine, 3 800 minutes en sept causes : les trois premières font 74 % du temps perdu. Exemple construit.' },
    couches: { title: 'Ce que tient un logiciel de gestion de production, en cinq couches', layers: [
      { label: 'Données', items: [{ name: 'Les données de base : articles, nomenclatures, gammes, postes de travail, cadences nominales', sub: 'ce qu’on fabrique, avec quoi, sur quoi' }] },
      { label: 'Ordres', items: [{ name: 'Les ordres de fabrication : quoi, combien, pour quand, dans quel ordre sur chaque poste', sub: 'le programme de l’atelier' }] },
      { label: 'Atelier', items: [{ name: 'Le suivi au poste : quantités, arrêts et rebuts déclarés au moment où ils se produisent', sub: 'la seule source des chiffres qui suivent', accent: true }] },
      { label: 'Matière', items: [{ name: 'La matière et les en-cours : ce qui est sorti du stock, ce qui attend entre deux postes', sub: 'où est la commande, à cet instant' }] },
      { label: 'Pilotage', items: [{ name: 'Le pilotage : TRS par machine, causes d’arrêt, avancement des ordres, coût réel', sub: 'ce qu’on regarde chaque matin' }] },
    ], caption: 'Figure 4 · Cinq couches. La couche accentuée est le suivi au poste : sans déclaration faite sur place, les autres couches ne contiennent que ce qui était prévu, pas ce qui s’est passé.', alt: 'Cinq couches : les données de base ; les ordres de fabrication ; le suivi au poste (accentuée) ; la matière et les en-cours ; le pilotage.' },
    pertes: { title: 'Six grandes pertes : où elles se voient, ce qui les réduit', columns: ['Ce qu’on voit au poste', 'Ce qui la réduit'], rows: [
      { label: 'Attentes (disponibilité)', cells: ['la machine prête, rien à produire', 'matière et ordre préparés la veille'] },
      { label: 'Pannes (disponibilité)', cells: ['un arrêt long, la maintenance appelée', 'entretien planifié, pièces en stock'] },
      { label: 'Micro-arrêts (performance)', cells: ['dix arrêts de trente secondes', 'les compter : personne ne les note'] },
      { label: 'Vitesse réduite (performance)', cells: ['la machine tourne, mais lentement', 'la comparer à la cadence nominale'] },
      { label: 'Rebuts (qualité)', cells: ['des pièces jetées', 'mesurer au poste, pas en fin de lot'] },
      { label: 'Retouches (qualité)', cells: ['des pièces reprises une seconde fois', 'noter la cause, corriger le réglage'] },
    ], caption: 'Figure 5 · Les six grandes pertes, deux par facteur du TRS. Les deux du milieu sont celles que personne ne note à la main : c’est le compteur de la machine, ou le rythme des déclarations, qui les fait apparaître.', alt: 'Matrice des six grandes pertes : attentes et pannes pour la disponibilité, micro-arrêts et vitesse réduite pour la performance, rebuts et retouches pour la qualité ; pour chacune, ce qu’on voit au poste et ce qui la réduit.' },
    calendrier: { title: 'Huit semaines pour un atelier suivi poste par poste', unit: 'sem.', items: [
      { label: 'Relevé', note: 'vos machines, vos gammes, vos feuilles de production, vos causes d’arrêt', from: 0, to: 1, accent: true },
      { label: 'Données de base', note: 'articles, nomenclatures, gammes, cadences nominales par machine', from: 1, to: 3 },
      { label: 'Ordres de fabrication', note: 'lancement, ordre de passage sur chaque poste, sortie de matière', from: 2, to: 4 },
      { label: 'Suivi au poste', note: 'tablette par machine, déclarations, arrêts, rebuts, hors ligne', from: 3, to: 6 },
      { label: 'Tableaux d’atelier', note: 'TRS par machine et par équipe, causes d’arrêt, avancement', from: 5, to: 7 },
      { label: 'Revue du matin', note: 'le point quotidien tenu devant l’écran, cause par cause', from: 7, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple, pour un atelier de quelques machines. La période accentuée est la première : on lit les feuilles que l’atelier remplit déjà, et l’on choisit avec lui sept ou huit causes d’arrêt. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : relevé (accentué), données de base, ordres de fabrication, suivi au poste, tableaux d’atelier, revue du matin.' },
  },
  en: {
    cover: { eyebrow: 'Production management · Algeria · 2027', title: ['Production management software', 'the shop floor, station by station'], subtitle: 'Production orders, declarations at the station, stops by cause, OEE, work in process, real cost', left: { label: 'An eight-hour shift', sub: 'machine switched on' }, right: { label: '4 h 22 useful', sub: 'the rest has a cause' } },
    ordre: { title: 'The life of a production order, in six steps', items: [
      { label: 'Release', sub: 'order, quantity, date, routing' },
      { label: 'Material', sub: 'issued from stock, lot noted' },
      { label: 'Set-up', sub: 'changeover timed' },
      { label: 'Production', sub: 'quantities and stops declared at the station', accent: true },
      { label: 'Check', sub: 'good pieces, scrap, rework' },
      { label: 'Closing', sub: 'time, material, cost, into stock' },
    ], caption: 'Figure 1 · Six steps. The accented step is production: that is where quantities, stops and scrap are declared, at the station and when they happen. Everything read afterwards comes from there.', alt: 'Six steps: release, material, set-up, production (accented), check, closing.' },
    poste: { caption: 'Figure 2 · An eight-hour shift on one machine: 345 minutes running, 105 stopped, then the three ratios that give an OEE of 58.3%. Fictitious figures.' },
    causes: { caption: 'Figure 3 · One month of stops on one machine, 3,800 minutes in seven causes: the first three make 74% of the time lost. Constructed example.' },
    couches: { title: 'What production management software holds, in five layers', layers: [
      { label: 'Master data', items: [{ name: 'The master data: items, bills of materials, routings, workstations, nominal rates', sub: 'what is made, with what, on what' }] },
      { label: 'Orders', items: [{ name: 'The production orders: what, how many, by when, in what sequence at each station', sub: 'the shop floor’s programme' }] },
      { label: 'Shop floor', items: [{ name: 'Tracking at the station: quantities, stops and scrap declared at the moment they happen', sub: 'the only source of the figures that follow', accent: true }] },
      { label: 'Material', items: [{ name: 'Material and work in process: what left stock, what is waiting between two stations', sub: 'where the order is, right now' }] },
      { label: 'Steering', items: [{ name: 'Steering: OEE per machine, causes of stops, progress of orders, real cost', sub: 'what is looked at every morning' }] },
    ], caption: 'Figure 4 · Five layers. The accented layer is tracking at the station: without a declaration made on the spot, the other layers contain only what was planned, not what happened.', alt: 'Five layers: the master data; the production orders; tracking at the station (accented); material and work in process; steering.' },
    pertes: { title: 'Six big losses: where they show, what reduces them', columns: ['What is seen at the station', 'What reduces it'], rows: [
      { label: 'Waiting (availability)', cells: ['the machine ready, nothing to produce', 'material and order prepared the day before'] },
      { label: 'Breakdowns (availability)', cells: ['a long stop, maintenance called', 'planned upkeep, spare parts in stock'] },
      { label: 'Minor stops (performance)', cells: ['ten stops of thirty seconds', 'count them: nobody writes them down'] },
      { label: 'Reduced speed (performance)', cells: ['the machine runs, but slowly', 'compare it with the nominal rate'] },
      { label: 'Scrap (quality)', cells: ['pieces thrown away', 'measure at the station, not at lot end'] },
      { label: 'Rework (quality)', cells: ['pieces handled a second time', 'note the cause, correct the setting'] },
    ], caption: 'Figure 5 · The six big losses, two per OEE factor. The two in the middle are the ones nobody writes down by hand: the machine’s counter, or the rhythm of declarations, is what makes them appear.', alt: 'Matrix of the six big losses: waiting and breakdowns for availability, minor stops and reduced speed for performance, scrap and rework for quality; for each, what is seen at the station and what reduces it.' },
    calendrier: { title: 'Eight weeks for a shop floor tracked station by station', unit: 'wk', items: [
      { label: 'Survey', note: 'your machines, your routings, your production sheets, your causes of stops', from: 0, to: 1, accent: true },
      { label: 'Master data', note: 'items, bills of materials, routings, nominal rates per machine', from: 1, to: 3 },
      { label: 'Production orders', note: 'release, sequence at each station, material issue', from: 2, to: 4 },
      { label: 'Station tracking', note: 'a tablet per machine, declarations, stops, scrap, offline', from: 3, to: 6 },
      { label: 'Shop-floor boards', note: 'OEE per machine and per shift, causes of stops, progress', from: 5, to: 7 },
      { label: 'Morning review', note: 'the daily meeting held in front of the screen, cause by cause', from: 7, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example, for a workshop of a few machines. The accented period is the first: reading the sheets the workshop already fills in, and choosing seven or eight causes of stops with it. Indicative durations of a constructed example.', alt: 'Eight-week calendar: survey (accented), master data, production orders, station tracking, shop-floor boards, morning review.' },
  },
  ar: {
    cover: { eyebrow: 'تسيير الإنتاج · الجزائر · 2027', title: ['برنامج تسيير الإنتاج', 'الورشة متابَعة مركزاً بمركز'], subtitle: 'أوامر التصنيع، التصريح في المركز، التوقفات حسب السبب، المردود الإجمالي، قيد الصنع، والكلفة الفعلية', left: { label: 'مناوبة من 8 ساعات', sub: 'والآلة مشتغلة' }, right: { label: '4 ساعات و22 دقيقة', sub: 'وللباقي سبب' } },
    ordre: { title: 'حياة أمر تصنيع، في ست مراحل', items: [
      { label: 'الإطلاق', sub: 'الأمر، الكمية، التاريخ، والمسار' },
      { label: 'المادة', sub: 'إخراج من المخزون، وحصة مسجَّلة' },
      { label: 'الضبط', sub: 'تغيير السلسلة محسوب الوقت' },
      { label: 'الإنتاج', sub: 'كميات وتوقفات يُصرَّح بها في المركز', accent: true },
      { label: 'المراقبة', sub: 'قطع جيدة، مرفوضات، وإعادة تشغيل' },
      { label: 'الإغلاق', sub: 'الوقت، المادة، الكلفة، والدخول إلى المخزون' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الإنتاج: هناك يُصرَّح، في المركز ولحظة وقوعها، بالكميات والتوقفات والمرفوضات. وكل ما يُقرأ بعد ذلك يأتي من هناك.', alt: 'ست مراحل: الإطلاق، المادة، الضبط، الإنتاج (مبرزة)، المراقبة، والإغلاق.' },
    poste: { caption: 'الشكل 2 · مناوبة من ثماني ساعات على آلة واحدة: 345 دقيقة اشتغال، 105 توقف، ثم النسب الثلاث التي تعطي مردوداً إجمالياً من 58,3 بالمئة. أرقام خيالية.' },
    causes: { caption: 'الشكل 3 · شهر من التوقفات على آلة واحدة، 3800 دقيقة في سبعة أسباب: الثلاثة الأولى تصنع 74 بالمئة من الوقت الضائع. مثال مركَّب.' },
    couches: { title: 'ما يمسكه برنامج تسيير الإنتاج، في خمس طبقات', layers: [
      { label: 'المعطيات', items: [{ name: 'المعطيات الأساسية: السلع، قوائم المكوّنات، المسارات، مراكز العمل، والوتائر الاسمية', sub: 'ما يُصنع، بماذا، وعلى ماذا' }] },
      { label: 'الأوامر', items: [{ name: 'أوامر التصنيع: ماذا، كم، متى، وبأي ترتيب في كل مركز', sub: 'برنامج الورشة' }] },
      { label: 'الورشة', items: [{ name: 'المتابعة في المركز: كميات وتوقفات ومرفوضات يُصرَّح بها لحظة وقوعها', sub: 'المصدر الوحيد للأرقام التي تليها', accent: true }] },
      { label: 'المادة', items: [{ name: 'المادة وقيد الصنع: ما خرج من المخزون، وما ينتظر بين مركزين', sub: 'أين الطلبية، في هذه اللحظة' }] },
      { label: 'القيادة', items: [{ name: 'القيادة: المردود الإجمالي لكل آلة، أسباب التوقف، تقدّم الأوامر، والكلفة الفعلية', sub: 'ما يُنظر إليه كل صباح' }] },
    ], caption: 'الشكل 4 · خمس طبقات. الطبقة المبرزة هي المتابعة في المركز: دون تصريح في عين المكان، لا تحتوي الطبقات الأخرى إلا على ما كان مقرَّراً، لا على ما جرى.', alt: 'خمس طبقات: المعطيات الأساسية؛ أوامر التصنيع؛ المتابعة في المركز (مبرزة)؛ المادة وقيد الصنع؛ والقيادة.' },
    pertes: { title: 'ستة ضياعات كبرى: أين تُرى، وما يقلّصها', columns: ['ما يُرى في المركز', 'ما يقلّصه'], rows: [
      { label: 'الانتظار (التوفر)', cells: ['الآلة جاهزة، ولا شيء يُنتَج', 'مادة وأمر يُحضَّران في اليوم السابق'] },
      { label: 'الأعطال (التوفر)', cells: ['توقف طويل، وتُستدعى الصيانة', 'صيانة مبرمجة، وقطع غيار في المخزون'] },
      { label: 'التوقفات الصغيرة (الأداء)', cells: ['عشر توقفات من ثلاثين ثانية', 'عدّها: لا أحد يسجّلها'] },
      { label: 'السرعة المنخفضة (الأداء)', cells: ['الآلة تدور، لكن ببطء', 'مقارنتها بالوتيرة الاسمية'] },
      { label: 'المرفوضات (الجودة)', cells: ['قطع تُرمى', 'القياس في المركز، لا في آخر الحصة'] },
      { label: 'إعادة التشغيل (الجودة)', cells: ['قطع تُعالَج مرة ثانية', 'تسجيل السبب، وتصحيح الضبط'] },
    ], caption: 'الشكل 5 · الضياعات الستة الكبرى، اثنان لكل عامل من عوامل المردود الإجمالي. والاثنان في الوسط هما اللذان لا يسجّلهما أحد باليد: عدّاد الآلة، أو إيقاع التصريحات، هو ما يُظهرهما.', alt: 'مصفوفة الضياعات الستة الكبرى: الانتظار والأعطال للتوفر، التوقفات الصغيرة والسرعة المنخفضة للأداء، المرفوضات وإعادة التشغيل للجودة؛ ولكل واحد، ما يُرى في المركز وما يقلّصه.' },
    calendrier: { title: 'ثمانية أسابيع لورشة متابَعة مركزاً بمركز', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'آلاتكم، مساراتكم، أوراق الإنتاج، وأسباب التوقف عندكم', from: 0, to: 1, accent: true },
      { label: 'المعطيات الأساسية', note: 'السلع، قوائم المكوّنات، المسارات، والوتائر الاسمية لكل آلة', from: 1, to: 3 },
      { label: 'أوامر التصنيع', note: 'الإطلاق، ترتيب المرور في كل مركز، وإخراج المادة', from: 2, to: 4 },
      { label: 'المتابعة في المركز', note: 'لوحة لكل آلة، تصريحات، توقفات، مرفوضات، ودون اتصال', from: 3, to: 6 },
      { label: 'لوحات الورشة', note: 'المردود الإجمالي لكل آلة ولكل فرقة، أسباب التوقف، والتقدّم', from: 5, to: 7 },
      { label: 'مراجعة الصباح', note: 'الاجتماع اليومي يُعقد أمام الشاشة، سبباً بسبب', from: 7, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال، لورشة من بضع آلات. الفترة المبرزة هي الأولى: قراءة الأوراق التي تملؤها الورشة من قبل، واختيار سبعة أو ثمانية أسباب توقف معها. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: المعاينة (مبرزة)، المعطيات الأساسية، أوامر التصنيع، المتابعة في المركز، لوحات الورشة، ثم مراجعة الصباح.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      ordre: { svg: steps({ title: t.ordre.title, steps: t.ordre.items, arrows: true, rtl }), caption: t.ordre.caption, alt: t.ordre.alt },
      poste: { svg: poste(e.poste, rtl), caption: t.poste.caption, alt: e.poste.alt },
      causes: { svg: causes(e.causes, rtl), caption: t.causes.caption, alt: e.causes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      pertes: { svg: matrix({ title: t.pertes.title, columns: t.pertes.columns, rows: t.pertes.rows, rtl }), caption: t.pertes.caption, alt: t.pertes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
