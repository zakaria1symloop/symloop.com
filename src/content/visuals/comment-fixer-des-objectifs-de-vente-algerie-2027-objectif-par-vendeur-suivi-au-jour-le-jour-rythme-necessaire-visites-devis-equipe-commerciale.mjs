import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { vendeurs, chaine, STRINGS as SC } from './custom/objectifs.mjs';
export const slug = 'comment-fixer-des-objectifs-de-vente-algerie-2027-objectif-par-vendeur-suivi-au-jour-le-jour-rythme-necessaire-visites-devis-equipe-commerciale';
const T = {
  fr: {
    cover: { eyebrow: 'Objectifs de vente · Algérie · 2027', title: ['Fixer des objectifs de vente', 'et savoir chaque jour où l’on en est'], subtitle: 'Un objectif par vendeur et par mois, le rythme du jour, l’atterrissage, et l’activité qui y mène', left: { label: 'Connu le 30', sub: 'quand le mois est fini' }, right: { label: 'Connu le 14', sub: 'quand il reste huit jours' } },
    temps: { title: 'Fixer un objectif de vente, en six temps', items: [
      { label: 'Partir du réel', sub: 'les ventes de l’an dernier, par mois' },
      { label: 'Répartir par mois', sub: 'saisons, Ramadan, jours ouvrés' },
      { label: 'Répartir par vendeur', sub: 'selon le portefeuille, pas à parts égales' },
      { label: 'Traduire en activité', sub: 'visites et devis par jour', accent: true },
      { label: 'Suivre le rythme', sub: 'chaque jour, réalisé contre rythme' },
      { label: 'Revoir chaque mois', sub: 'ce qui a tenu, ce qui a changé' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est le quatrième : traduire le chiffre en activité. Un vendeur ne peut pas « faire 2 400 » aujourd’hui ; il peut faire cinq visites.', alt: 'Six temps : partir du réel, répartir par mois, répartir par vendeur, traduire en activité (accentué), suivre le rythme, revoir chaque mois.' },
    erreurs: { title: 'Six façons de mal fixer un objectif, et quoi faire à la place', columns: ['Ce que cela provoque', 'À la place'], rows: [
      { label: 'L’année divisée par douze', cells: ['un mois creux raté, un mois plein trop facile', 'un objectif par mois, selon la saison'] },
      { label: 'Le même chiffre pour chaque vendeur', cells: ['le nouveau décroche, l’ancien se promène', 'selon le portefeuille et le secteur'] },
      { label: 'Seulement du chiffre d’affaires', cells: ['des remises et des ventes sans marge', 'chiffre, marge et encaissement ensemble'] },
      { label: 'Connu une fois par mois', cells: ['un retard découvert trop tard', 'le rythme du jour, sur le téléphone'] },
      { label: 'Fixé d’en haut, sans explication', cells: ['un chiffre que personne ne croit', 'le calcul montré : passé, saison, secteur'] },
      { label: 'Aucune activité derrière le chiffre', cells: ['on attend la fin du mois', 'visites et devis par jour'] },
    ], caption: 'Figure 2 · Six façons courantes de fixer un objectif, ce que chacune provoque, et ce qu’on fait à la place. La troisième est la plus coûteuse : quand une mesure devient une cible, elle cesse d’être une bonne mesure.', alt: 'Matrice de six erreurs : l’année divisée par douze, le même chiffre pour chaque vendeur, seulement du chiffre d’affaires, connu une fois par mois, fixé d’en haut sans explication, aucune activité derrière le chiffre ; pour chacune, ce que cela provoque et quoi faire à la place.' },
    couches: { title: 'Ce que le logiciel tient, en cinq couches', layers: [
      { label: 'Historique', items: [{ name: 'L’historique : les ventes par mois, par vendeur, par secteur et par famille, sur deux ans', sub: 'le point de départ de tout objectif' }] },
      { label: 'Objectifs', items: [{ name: 'Les objectifs : par mois, par vendeur et par famille, avec le calcul qui les justifie', sub: 'un chiffre que l’on peut expliquer' }] },
      { label: 'Activité', items: [{ name: 'L’activité : visites, appels, devis, saisis au fil de la journée sur le téléphone', sub: 'ce qui annonce le résultat', accent: true }] },
      { label: 'Rythme', items: [{ name: 'Le rythme : réalisé contre attendu à la date du jour, et atterrissage du mois', sub: 'chaque vendeur voit le sien' }] },
      { label: 'Lecture', items: [{ name: 'La lecture : l’équipe le dimanche, chaque vendeur chaque jour, le gérant d’un coup d’œil', sub: 'la même règle pour tous' }] },
    ], caption: 'Figure 3 · Cinq couches. La couche accentuée est l’activité : c’est elle que le vendeur maîtrise chaque jour, et c’est elle qui annonce le chiffre de la fin du mois.', alt: 'Cinq couches : l’historique ; les objectifs ; l’activité (accentuée) ; le rythme ; la lecture.' },
    vendeurs: { caption: 'Figure 4 · Le jour 14 d’un mois de 22 jours ouvrés. Le rythme est à 64 % ; l’équipe est à 52,5 %. Deux vendeurs finiront au-dessus de leur objectif, trois en dessous, et l’équipe à 82,5 % si rien ne change. Exemple construit.' },
    chaine: { caption: 'Figure 5 · 12 000 de chiffre d’affaires, ce sont 500 visites dans le mois, soit 4,5 par vendeur et par jour. Au jour 14, il en manque une sur cinq : le retard du chiffre vient de là. Exemple construit.' },
    calendrier: { title: 'Cinq semaines pour des objectifs suivis chaque jour', unit: 'sem.', items: [
      { label: 'Relevé', note: 'ventes des deux dernières années, vendeurs, secteurs, façon de fixer les objectifs aujourd’hui', from: 0, to: 1, accent: true },
      { label: 'Historique et saisons', note: 'ventes par mois, par vendeur et par famille ; poids de chaque mois', from: 1, to: 2 },
      { label: 'Objectifs', note: 'par mois et par vendeur, calcul visible, validés avec l’équipe', from: 1, to: 3 },
      { label: 'Activité', note: 'visites et devis saisis sur le téléphone, rattachés au client', from: 2, to: 4 },
      { label: 'Rythme et atterrissage', note: 'réalisé contre attendu, par vendeur, chaque jour', from: 3, to: 5 },
      { label: 'Première réunion', note: 'le dimanche : qui est sur le rythme, qui ne l’est pas, pourquoi', from: 4, to: 5 },
    ], caption: 'Figure 6 · Cinq semaines dans l’exemple. La période accentuée est la première : on regarde comment les objectifs sont fixés aujourd’hui, et ce que les ventes passées permettent de calculer. Durées indicatives d’un exemple construit.', alt: 'Calendrier de cinq semaines : relevé (accentué), historique et saisons, objectifs, activité, rythme et atterrissage, première réunion.' },
  },
  en: {
    cover: { eyebrow: 'Sales targets · Algeria · 2027', title: ['Setting sales targets', 'and knowing every day where you stand'], subtitle: 'One target per seller and per month, the day’s pace, the landing, and the activity that leads to it', left: { label: 'Known on the 30th', sub: 'when the month is over' }, right: { label: 'Known on the 14th', sub: 'when eight days remain' } },
    temps: { title: 'Setting a sales target, in six steps', items: [
      { label: 'Start from facts', sub: 'last year’s sales, by month' },
      { label: 'Split by month', sub: 'seasons, Ramadan, working days' },
      { label: 'Split by seller', sub: 'by portfolio, not in equal shares' },
      { label: 'Translate into activity', sub: 'visits and quotes per day', accent: true },
      { label: 'Follow the pace', sub: 'every day, done against pace' },
      { label: 'Review every month', sub: 'what held, what changed' },
    ], caption: 'Figure 1 · Six steps. The accented step is the fourth: translating the figure into activity. A seller cannot “do 2,400” today; they can make five visits.', alt: 'Six steps: start from facts, split by month, split by seller, translate into activity (accented), follow the pace, review every month.' },
    erreurs: { title: 'Six ways to set a target badly, and what to do instead', columns: ['What it causes', 'Instead'], rows: [
      { label: 'The year divided by twelve', cells: ['a slow month missed, a busy month too easy', 'one target per month, by season'] },
      { label: 'The same figure for every seller', cells: ['the newcomer gives up, the veteran coasts', 'by portfolio and by territory'] },
      { label: 'Revenue only', cells: ['discounts, and sales with no margin', 'revenue, margin and cash collected together'] },
      { label: 'Known once a month', cells: ['a shortfall discovered too late', 'the day’s pace, on the phone'] },
      { label: 'Set from above, with no explanation', cells: ['a figure nobody believes', 'the calculation shown: past, season, territory'] },
      { label: 'No activity behind the figure', cells: ['everyone waits for month end', 'visits and quotes per day'] },
    ], caption: 'Figure 2 · Six common ways of setting a target, what each causes, and what is done instead. The third is the most costly: when a measure becomes a target, it ceases to be a good measure.', alt: 'Matrix of six mistakes: the year divided by twelve, the same figure for every seller, revenue only, known once a month, set from above with no explanation, no activity behind the figure; for each, what it causes and what to do instead.' },
    couches: { title: 'What the software holds, in five layers', layers: [
      { label: 'History', items: [{ name: 'The history: sales by month, by seller, by territory and by family, over two years', sub: 'the starting point of every target' }] },
      { label: 'Targets', items: [{ name: 'The targets: by month, by seller and by family, with the calculation that justifies them', sub: 'a figure that can be explained' }] },
      { label: 'Activity', items: [{ name: 'The activity: visits, calls, quotes, entered through the day on the phone', sub: 'what announces the result', accent: true }] },
      { label: 'Pace', items: [{ name: 'The pace: done against expected as of today, and the month’s landing', sub: 'each seller sees their own' }] },
      { label: 'Reading', items: [{ name: 'The reading: the team on Sunday, each seller every day, the manager at a glance', sub: 'the same rule for everyone' }] },
    ], caption: 'Figure 3 · Five layers. The accented layer is activity: it is what the seller controls every day, and it is what announces the month-end figure.', alt: 'Five layers: the history; the targets; the activity (accented); the pace; the reading.' },
    vendeurs: { caption: 'Figure 4 · Day 14 of a month of 22 working days. The pace is at 64%; the team is at 52.5%. Two sellers will finish above their target, three below, and the team at 82.5% if nothing changes. Constructed example.' },
    chaine: { caption: 'Figure 5 · 12,000 of revenue is 500 visits in the month, that is 4.5 per seller per day. On day 14, one in five is missing: that is where the revenue shortfall comes from. Constructed example.' },
    calendrier: { title: 'Five weeks for targets followed every day', unit: 'wk', items: [
      { label: 'Survey', note: 'sales of the last two years, sellers, territories, how targets are set today', from: 0, to: 1, accent: true },
      { label: 'History and seasons', note: 'sales by month, by seller and by family; the weight of each month', from: 1, to: 2 },
      { label: 'Targets', note: 'by month and by seller, calculation visible, agreed with the team', from: 1, to: 3 },
      { label: 'Activity', note: 'visits and quotes entered on the phone, attached to the customer', from: 2, to: 4 },
      { label: 'Pace and landing', note: 'done against expected, per seller, every day', from: 3, to: 5 },
      { label: 'First meeting', note: 'on Sunday: who is on pace, who is not, and why', from: 4, to: 5 },
    ], caption: 'Figure 6 · Five weeks in the example. The accented period is the first: looking at how targets are set today, and what past sales allow you to calculate. Indicative durations of a constructed example.', alt: 'Five-week calendar: survey (accented), history and seasons, targets, activity, pace and landing, first meeting.' },
  },
  ar: {
    cover: { eyebrow: 'أهداف البيع · الجزائر · 2027', title: ['تحديد أهداف البيع', 'ومعرفة أين نحن كل يوم'], subtitle: 'هدف لكل بائع ولكل شهر، وتيرة اليوم، نهاية الشهر المتوقعة، والنشاط الذي يقود إليها', left: { label: 'يُعرف يوم 30', sub: 'حين ينتهي الشهر' }, right: { label: 'يُعرف يوم 14', sub: 'حين تبقى ثمانية أيام' } },
    temps: { title: 'تحديد هدف بيع، في ست مراحل', items: [
      { label: 'الانطلاق من الواقع', sub: 'مبيعات السنة الماضية، شهراً بشهر' },
      { label: 'التوزيع حسب الشهر', sub: 'المواسم، رمضان، وأيام العمل' },
      { label: 'التوزيع حسب البائع', sub: 'حسب المحفظة، لا بالتساوي' },
      { label: 'الترجمة إلى نشاط', sub: 'زيارات وعروض في اليوم', accent: true },
      { label: 'متابعة الوتيرة', sub: 'كل يوم، المنجز مقابل الوتيرة' },
      { label: 'المراجعة كل شهر', sub: 'ما صمد، وما تغيّر' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الرابعة: ترجمة الرقم إلى نشاط. البائع لا يستطيع أن «ينجز 2400» اليوم؛ لكنه يستطيع إنجاز خمس زيارات.', alt: 'ست مراحل: الانطلاق من الواقع، التوزيع حسب الشهر، التوزيع حسب البائع، الترجمة إلى نشاط (مبرزة)، متابعة الوتيرة، والمراجعة كل شهر.' },
    erreurs: { title: 'ست طرق سيئة لتحديد هدف، وما يُفعل بدلها', columns: ['ما تسبّبه', 'بدلها'], rows: [
      { label: 'السنة مقسومة على اثني عشر', cells: ['شهر ضعيف يُخفق، وشهر قوي سهل جداً', 'هدف لكل شهر، حسب الموسم'] },
      { label: 'الرقم نفسه لكل بائع', cells: ['الجديد ينسحب، والقديم يتراخى', 'حسب المحفظة والقطاع'] },
      { label: 'رقم الأعمال وحده', cells: ['تخفيضات، ومبيعات دون هامش', 'الرقم، الهامش، والتحصيل معاً'] },
      { label: 'يُعرف مرة في الشهر', cells: ['تأخر يُكتشف بعد فوات الأوان', 'وتيرة اليوم، على الهاتف'] },
      { label: 'يُحدَّد من فوق، دون شرح', cells: ['رقم لا يصدّقه أحد', 'الحساب ظاهر: الماضي، الموسم، والقطاع'] },
      { label: 'لا نشاط وراء الرقم', cells: ['ننتظر نهاية الشهر', 'زيارات وعروض في اليوم'] },
    ], caption: 'الشكل 2 · ست طرق شائعة لتحديد هدف، ما تسبّبه كل واحدة، وما يُفعل بدلها. والثالثة هي الأكثر كلفة: حين يصير المقياس هدفاً، يتوقف عن كونه مقياساً جيداً.', alt: 'مصفوفة من ستة أخطاء: السنة مقسومة على اثني عشر، الرقم نفسه لكل بائع، رقم الأعمال وحده، يُعرف مرة في الشهر، يُحدَّد من فوق دون شرح، ولا نشاط وراء الرقم؛ ولكل واحد، ما يسبّبه وما يُفعل بدله.' },
    couches: { title: 'ما يمسكه البرنامج، في خمس طبقات', layers: [
      { label: 'التاريخ', items: [{ name: 'التاريخ: المبيعات حسب الشهر، البائع، القطاع، والصنف، على سنتين', sub: 'نقطة انطلاق كل هدف' }] },
      { label: 'الأهداف', items: [{ name: 'الأهداف: حسب الشهر، البائع، والصنف، مع الحساب الذي يبرّرها', sub: 'رقم يمكن شرحه' }] },
      { label: 'النشاط', items: [{ name: 'النشاط: زيارات، مكالمات، وعروض أسعار، تُدخَل خلال اليوم على الهاتف', sub: 'ما يُعلن النتيجة', accent: true }] },
      { label: 'الوتيرة', items: [{ name: 'الوتيرة: المنجز مقابل المنتظر بتاريخ اليوم، ونهاية الشهر المتوقعة', sub: 'كل بائع يرى وتيرته' }] },
      { label: 'القراءة', items: [{ name: 'القراءة: الفريق كل أسبوع، كل بائع كل يوم، والمسيّر بنظرة واحدة', sub: 'القاعدة نفسها للجميع' }] },
    ], caption: 'الشكل 3 · خمس طبقات. الطبقة المبرزة هي النشاط: هو ما يتحكم فيه البائع كل يوم، وهو ما يُعلن رقم نهاية الشهر.', alt: 'خمس طبقات: التاريخ؛ الأهداف؛ النشاط (مبرزة)؛ الوتيرة؛ والقراءة.' },
    vendeurs: { caption: 'الشكل 4 · اليوم 14 من شهر فيه 22 يوم عمل. الوتيرة عند 64 بالمئة؛ والفريق عند 52,5 بالمئة. بائعان سينهيان فوق هدفهما، ثلاثة تحته، والفريق عند 82,5 بالمئة إذا لم يتغير شيء. مثال مركَّب.' },
    chaine: { caption: 'الشكل 5 · 12 000 من رقم الأعمال تعني 500 زيارة في الشهر، أي 4,5 لكل بائع في اليوم. وفي اليوم 14، تنقص زيارة من كل خمس: ومن هناك يأتي تأخر الرقم. مثال مركَّب.' },
    calendrier: { title: 'خمسة أسابيع لأهداف تُتابَع كل يوم', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'مبيعات السنتين الأخيرتين، البائعون، القطاعات، وطريقة تحديد الأهداف اليوم', from: 0, to: 1, accent: true },
      { label: 'التاريخ والمواسم', note: 'المبيعات حسب الشهر، البائع، والصنف؛ ووزن كل شهر', from: 1, to: 2 },
      { label: 'الأهداف', note: 'حسب الشهر والبائع، بحساب ظاهر، ومتفق عليها مع الفريق', from: 1, to: 3 },
      { label: 'النشاط', note: 'زيارات وعروض تُدخَل على الهاتف، مربوطة بالزبون', from: 2, to: 4 },
      { label: 'الوتيرة ونهاية الشهر', note: 'المنجز مقابل المنتظر، لكل بائع، كل يوم', from: 3, to: 5 },
      { label: 'الاجتماع الأول', note: 'أول الأسبوع: من على الوتيرة، من ليس عليها، ولماذا', from: 4, to: 5 },
    ], caption: 'الشكل 6 · خمسة أسابيع في المثال. الفترة المبرزة هي الأولى: النظر في طريقة تحديد الأهداف اليوم، وما تسمح المبيعات السابقة بحسابه. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من خمسة أسابيع: المعاينة (مبرزة)، التاريخ والمواسم، الأهداف، النشاط، الوتيرة ونهاية الشهر، ثم الاجتماع الأول.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      temps: { svg: steps({ title: t.temps.title, steps: t.temps.items, arrows: true, rtl }), caption: t.temps.caption, alt: t.temps.alt },
      erreurs: { svg: matrix({ title: t.erreurs.title, columns: t.erreurs.columns, rows: t.erreurs.rows, rtl }), caption: t.erreurs.caption, alt: t.erreurs.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      vendeurs: { svg: vendeurs(e.vendeurs, rtl), caption: t.vendeurs.caption, alt: e.vendeurs.alt },
      chaine: { svg: chaine(e.chaine, rtl), caption: t.chaine.caption, alt: e.chaine.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 5, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
