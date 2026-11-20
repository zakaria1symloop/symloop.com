import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { equipe, cuve, STRINGS as SC } from './custom/stationservice.mjs';
export const slug = 'logiciel-station-service-algerie-2027-compteurs-des-pompes-jaugeage-des-cuves-ecart-de-caisse-par-equipe-clients-en-compte-boutique';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel station-service · Algérie · 2027', title: ['Logiciel station-service', 'où part chaque litre, chaque dinar'], subtitle: 'Les compteurs contre la caisse à chaque équipe, la cuve jaugée chaque matin, les clients en compte', left: { label: 'Un cahier par équipe', sub: 'l’écart découvert en fin de mois' }, right: { label: 'Un écart par équipe', sub: 'connu le jour même' } },
    litre: { title: 'Du camion à la banque : six endroits où un litre se perd', items: [
      { label: 'Livraison', sub: 'le camion dépote : ce qui est entré, pas ce qui est écrit' },
      { label: 'Cuve', sub: 'jaugée chaque matin, comparée au calcul' },
      { label: 'Pistolet', sub: 'le compteur avance à chaque litre servi' },
      { label: 'Vente', sub: 'espèces, carte, ou bon d’un client en compte' },
      { label: 'Caisse', sub: 'comptée à chaque relève, au nom d’une équipe', accent: true },
      { label: 'Versement', sub: 'ce qui part à la banque, rapproché de la caisse' },
    ], caption: 'Figure 1 · Le trajet d’un litre, de la livraison au versement. À chaque étape, un litre ou sa contre-valeur peut disparaître sans bruit. L’étape accentuée est la caisse : c’est là que l’écart prend le nom d’une équipe, à condition de la compter à chaque relève.', alt: 'Six étapes : livraison, cuve, pistolet, vente, caisse (accentuée), versement.' },
    couches: { title: 'Ce que le logiciel tient, en cinq couches', layers: [
      { label: 'Compteurs', items: [{ name: 'Les compteurs : l’index de chaque pistolet, au début et à la fin de chaque équipe', sub: 'les litres vendus, sans discussion' }] },
      { label: 'Cuves', items: [{ name: 'Les cuves : jaugeage du matin, livraisons, stock théorique et écart par produit', sub: 'la couche qu’un cahier tient le moins bien', accent: true }] },
      { label: 'Caisse', items: [{ name: 'La caisse par équipe : attendu, espèces, carte, bons, dépenses, écart et versement', sub: 'une clôture signée à chaque relève' }] },
      { label: 'Comptes', items: [{ name: 'Les clients en compte : bons numérotés, véhicule, plafond, relevé de fin de mois', sub: 'ce qui est dû, par entreprise' }] },
      { label: 'Boutique', items: [{ name: 'La boutique et les services : lubrifiants, articles, lavage, avec leur propre stock', sub: 'les ventes à côté du carburant' }] },
    ], caption: 'Figure 2 · Cinq couches. La couche accentuée est celle des cuves : c’est celle qu’un cahier tient le moins bien, parce qu’elle demande un calcul chaque matin. C’est pourtant la seule façon de voir un écart de livraison le jour où il arrive.', alt: 'Cinq couches : les compteurs ; les cuves (accentuée) ; la caisse par équipe ; les clients en compte ; la boutique et les services.' },
    equipe: { caption: 'Figure 3 · La clôture de l’équipe du matin. Les compteurs donnent 6 600 litres, soit 227 800 dinars attendus aux prix de l’exemple ; l’équipe remet 223 200 dinars en espèces, carte et bons. L’écart de 4 600 dinars est connu à 14 h. Exemple construit.' },
    cuve: { caption: 'Figure 4 · Une cuve d’essence pendant huit matins. Le stock calculé et le stock jaugé s’écartent de 20 à 30 litres par jour, et de 260 litres le jour de la livraison : 410 litres en une semaine. Volumes fictifs.' },
    ecarts: { title: 'Six écarts, ce qu’on vérifie d’abord, ce que le logiciel montre', columns: ['Ce qu’on vérifie d’abord', 'Ce que le logiciel montre'], rows: [
      { label: 'Il manque de l’argent en fin d’équipe', cells: ['un bon non remis, une erreur de monnaie', 'l’écart par équipe, le jour même'] },
      { label: 'La cuve contient moins que le calcul', cells: ['une livraison courte, un compteur qui dérive', 'l’écart par cuve, chaque matin'] },
      { label: 'Un client en compte conteste son relevé', cells: ['un bon sans signature ni immatriculation', 'chaque bon : véhicule, litres, heure, équipe'] },
      { label: 'Les lubrifiants disparaissent du rayon', cells: ['des ventes notées « divers », un stock jamais compté', 'le stock de la boutique, compté par famille'] },
      { label: 'Un pistolet vend moins que les autres', cells: ['une panne passée sous silence, un débit lent', 'les litres par pistolet et par heure'] },
      { label: 'Le versement ne correspond pas à la caisse', cells: ['une dépense payée en espèces et non notée', 'caisse, dépenses, versement sur une ligne'] },
    ], caption: 'Figure 5 · Six écarts courants. La colonne du milieu donne la première cause à écarter, pas la seule possible ; celle de droite, l’écran qui permet de trancher. Aucun de ces écarts n’accuse quelqu’un : il indique où regarder.', alt: 'Matrice de six écarts : argent manquant en fin d’équipe, cuve qui contient moins que le calcul, client en compte qui conteste son relevé, lubrifiants qui disparaissent, pistolet qui vend moins, versement qui ne correspond pas à la caisse ; pour chacun, ce qu’on vérifie d’abord et ce que le logiciel montre.' },
    calendrier: { title: 'Six semaines pour une station qui sait où part chaque litre', unit: 'sem.', items: [
      { label: 'Relevé de l’existant', note: 'pistolets, cuves, équipes, cahiers tenus, clients en compte, boutique, connexion sur place', from: 0, to: 1, accent: true },
      { label: 'Compteurs et équipes', note: 'index saisis à chaque relève, clôture par équipe sur téléphone ou tablette, hors ligne si besoin', from: 1, to: 3 },
      { label: 'Cuves et livraisons', note: 'jaugeage du matin, jauge avant et après chaque dépotage, écart par produit', from: 2, to: 4 },
      { label: 'Clients en compte', note: 'bons numérotés, plafond par entreprise, relevé de fin de mois', from: 3, to: 5 },
      { label: 'Boutique et services', note: 'articles, lubrifiants, lavage, inventaire par famille', from: 4, to: 6 },
      { label: 'Tableau du gérant', note: 'écarts du jour, litres par produit, encours des comptes, consultable à distance', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple, pour une station de quatre pistolets avec boutique. La période accentuée est la première : on lit ce que les cahiers enregistrent déjà. Les périodes se chevauchent. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : relevé de l’existant (accentué), compteurs et équipes, cuves et livraisons, clients en compte, boutique et services, tableau du gérant.' },
  },
  en: {
    cover: { eyebrow: 'Filling station software · Algeria · 2027', title: ['Filling station software', 'where every litre and dinar goes'], subtitle: 'The meters against the till at every shift, the tank dipped every morning, account customers', left: { label: 'One notebook a shift', sub: 'the gap found at month end' }, right: { label: 'One gap per shift', sub: 'known the same day' } },
    litre: { title: 'From the tanker to the bank: six places where a litre is lost', items: [
      { label: 'Delivery', sub: 'the tanker unloads: what came in, not what is written' },
      { label: 'Tank', sub: 'dipped every morning, compared with the calculation' },
      { label: 'Nozzle', sub: 'the meter advances with every litre served' },
      { label: 'Sale', sub: 'cash, card, or an account customer’s voucher' },
      { label: 'Till', sub: 'counted at every shift change, in one shift’s name', accent: true },
      { label: 'Banking', sub: 'what goes to the bank, reconciled with the till' },
    ], caption: 'Figure 1 · The path of a litre, from delivery to banking. At each step, a litre or its value can disappear quietly. The accented step is the till: that is where the gap takes the name of one shift, provided it is counted at every shift change.', alt: 'Six steps: delivery, tank, nozzle, sale, till (accented), banking.' },
    couches: { title: 'What the software holds, in five layers', layers: [
      { label: 'Meters', items: [{ name: 'The meters: the reading of every nozzle, at the start and the end of every shift', sub: 'the litres sold, beyond argument' }] },
      { label: 'Tanks', items: [{ name: 'The tanks: morning dip, deliveries, book stock and gap per product', sub: 'the layer a notebook keeps least well', accent: true }] },
      { label: 'Till', items: [{ name: 'The till per shift: expected, cash, card, vouchers, expenses, gap and banking', sub: 'a signed closing at every shift change' }] },
      { label: 'Accounts', items: [{ name: 'Account customers: numbered vouchers, vehicle, ceiling, month-end statement', sub: 'what is owed, per company' }] },
      { label: 'Shop', items: [{ name: 'The shop and the services: lubricants, goods, car wash, with their own stock', sub: 'the sales beside the fuel' }] },
    ], caption: 'Figure 2 · Five layers. The accented layer is the tanks: it is the one a notebook keeps least well, because it calls for a calculation every morning. Yet it is the only way to see a delivery gap on the day it arrives.', alt: 'Five layers: the meters; the tanks (accented); the till per shift; account customers; the shop and the services.' },
    equipe: { caption: 'Figure 3 · Closing the morning shift. The meters give 6,600 litres, that is 227,800 dinars expected at the example prices; the shift hands over 223,200 dinars in cash, card and vouchers. The gap of 4,600 dinars is known at 2 pm. Constructed example.' },
    cuve: { caption: 'Figure 4 · One petrol tank over eight mornings. Calculated stock and dipped stock drift apart by 20 to 30 litres a day, and by 260 litres on delivery day: 410 litres in a week. Fictitious volumes.' },
    ecarts: { title: 'Six gaps, what to check first, what the software shows', columns: ['What to check first', 'What the software shows'], rows: [
      { label: 'Money is missing at the end of a shift', cells: ['a voucher not handed in, a change error', 'the gap per shift, the same day'] },
      { label: 'The tank holds less than the calculation', cells: ['a short delivery, a meter that drifts', 'the gap per tank, every morning'] },
      { label: 'An account customer disputes a statement', cells: ['a voucher with no signature or plate number', 'each voucher: vehicle, litres, time, shift'] },
      { label: 'Lubricants vanish from the shelf', cells: ['sales noted as “misc.”, a stock never counted', 'the shop stock, counted by family'] },
      { label: 'One nozzle sells less than the others', cells: ['a fault kept quiet, a slow flow', 'litres per nozzle and per hour'] },
      { label: 'The banking does not match the till', cells: ['an expense paid in cash and not noted', 'till, expenses, banking on one line'] },
    ], caption: 'Figure 5 · Six common gaps. The middle column gives the first cause to rule out, not the only possible one; the right-hand one, the screen that settles it. None of these gaps accuses anyone: it shows where to look.', alt: 'Matrix of six gaps: money missing at the end of a shift, a tank holding less than the calculation, an account customer disputing a statement, lubricants vanishing, a nozzle selling less, banking that does not match the till; for each, what to check first and what the software shows.' },
    calendrier: { title: 'Six weeks for a station that knows where every litre goes', unit: 'wk', items: [
      { label: 'Survey of what exists', note: 'nozzles, tanks, shifts, notebooks kept, account customers, shop, connection on site', from: 0, to: 1, accent: true },
      { label: 'Meters and shifts', note: 'readings entered at every shift change, closing per shift on a phone or tablet, offline if needed', from: 1, to: 3 },
      { label: 'Tanks and deliveries', note: 'morning dip, dip before and after each unloading, gap per product', from: 2, to: 4 },
      { label: 'Account customers', note: 'numbered vouchers, ceiling per company, month-end statement', from: 3, to: 5 },
      { label: 'Shop and services', note: 'goods, lubricants, car wash, stocktake by family', from: 4, to: 6 },
      { label: 'Manager’s board', note: 'gaps of the day, litres per product, account balances, viewable remotely', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example, for a station of four nozzles with a shop. The accented period is the first: reading what the notebooks already record. The periods overlap. Indicative durations of a constructed example.', alt: 'Six-week calendar: survey of what exists (accented), meters and shifts, tanks and deliveries, account customers, shop and services, manager’s board.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج محطة الوقود · الجزائر · 2027', title: ['برنامج محطة الوقود', 'أين يذهب كل لتر وكل دينار'], subtitle: 'العدّادات مقابل الصندوق عند كل مناوبة، الخزان يُقاس كل صباح، وزبائن الحساب', left: { label: 'دفتر لكل مناوبة', sub: 'الفارق يُكتشف آخر الشهر' }, right: { label: 'فارق لكل مناوبة', sub: 'يُعرف في اليوم نفسه' } },
    litre: { title: 'من الشاحنة إلى البنك: ستة مواضع يضيع فيها اللتر', items: [
      { label: 'التسليم', sub: 'الشاحنة تفرغ: ما دخل، لا ما كُتب' },
      { label: 'الخزان', sub: 'يُقاس كل صباح، ويُقارَن بالحساب' },
      { label: 'الفوهة', sub: 'العدّاد يتقدم مع كل لتر' },
      { label: 'البيع', sub: 'نقد، بطاقة، أو وصل زبون بالحساب' },
      { label: 'الصندوق', sub: 'يُعدّ عند كل تبديل، باسم مناوبة', accent: true },
      { label: 'الإيداع', sub: 'ما يذهب إلى البنك، مطابَقاً للصندوق' },
    ], caption: 'الشكل 1 · مسار اللتر، من التسليم إلى الإيداع. في كل مرحلة، يمكن أن يختفي لتر أو قيمته في صمت. المرحلة المبرزة هي الصندوق: هناك يأخذ الفارق اسم مناوبة، بشرط أن يُعدّ عند كل تبديل.', alt: 'ست مراحل: التسليم، الخزان، الفوهة، البيع، الصندوق (مبرزة)، ثم الإيداع.' },
    couches: { title: 'ما يمسكه البرنامج، في خمس طبقات', layers: [
      { label: 'العدّادات', items: [{ name: 'العدّادات: مؤشر كل فوهة، في بداية كل مناوبة ونهايتها', sub: 'اللترات المبيعة، دون نقاش' }] },
      { label: 'الخزانات', items: [{ name: 'الخزانات: قياس الصباح، التسليمات، المخزون النظري، والفارق لكل منتج', sub: 'الطبقة التي يمسكها الدفتر أسوأ من غيرها', accent: true }] },
      { label: 'الصندوق', items: [{ name: 'الصندوق لكل مناوبة: المنتظر، النقد، البطاقة، الوصولات، المصاريف، الفارق، والإيداع', sub: 'إغلاق موقَّع عند كل تبديل' }] },
      { label: 'الحسابات', items: [{ name: 'زبائن الحساب: وصولات مرقَّمة، المركبة، السقف، وكشف آخر الشهر', sub: 'ما هو مستحق، لكل مؤسسة' }] },
      { label: 'المتجر', items: [{ name: 'المتجر والخدمات: الزيوت، السلع، والغسل، بمخزونها الخاص', sub: 'المبيعات بجانب الوقود' }] },
    ], caption: 'الشكل 2 · خمس طبقات. الطبقة المبرزة هي الخزانات: هي التي يمسكها الدفتر أسوأ من غيرها، لأنها تتطلب حساباً كل صباح. وهي مع ذلك الطريقة الوحيدة لرؤية فارق التسليم يوم يقع.', alt: 'خمس طبقات: العدّادات؛ الخزانات (مبرزة)؛ الصندوق لكل مناوبة؛ زبائن الحساب؛ والمتجر والخدمات.' },
    equipe: { caption: 'الشكل 3 · إغلاق مناوبة الصباح. العدّادات تعطي 6600 لتر، أي 227 800 دينار منتظرة بأسعار المثال؛ والمناوبة تسلّم 223 200 دينار نقداً وبالبطاقة وبالوصولات. الفارق، 4600 دينار، معروف على الساعة 14. مثال مركَّب.' },
    cuve: { caption: 'الشكل 4 · خزان بنزين طيلة ثمانية صباحات. المخزون المحسوب والمخزون المقيس يتباعدان من 20 إلى 30 لتراً في اليوم، و260 لتراً يوم التسليم: 410 لتر في أسبوع. أحجام خيالية.' },
    ecarts: { title: 'ستة فوارق، ما يُراجَع أولاً، وما يُظهره البرنامج', columns: ['ما يُراجَع أولاً', 'ما يُظهره البرنامج'], rows: [
      { label: 'ينقص المال في نهاية المناوبة', cells: ['وصل لم يُسلَّم، أو خطأ في الصرف', 'الفارق لكل مناوبة، في اليوم نفسه'] },
      { label: 'الخزان يحتوي أقل من الحساب', cells: ['تسليم ناقص، أو عدّاد ينحرف', 'الفارق لكل خزان، كل صباح'] },
      { label: 'زبون بالحساب يعترض على كشفه', cells: ['وصل دون توقيع ولا رقم تسجيل', 'كل وصل: المركبة، اللترات، الساعة، المناوبة'] },
      { label: 'الزيوت تختفي من الرف', cells: ['مبيعات مسجَّلة «متفرقات»، ومخزون لم يُعدّ قط', 'مخزون المتجر، معدوداً حسب الصنف'] },
      { label: 'فوهة تبيع أقل من غيرها', cells: ['عطل مسكوت عنه، أو تدفق بطيء', 'اللترات لكل فوهة ولكل ساعة'] },
      { label: 'الإيداع لا يطابق الصندوق', cells: ['مصروف دُفع نقداً ولم يُسجَّل', 'الصندوق، المصاريف، والإيداع في سطر واحد'] },
    ], caption: 'الشكل 5 · ستة فوارق شائعة. العمود الأوسط يعطي أول سبب يُستبعد، لا الوحيد الممكن؛ والآخر، الشاشة التي تحسم. ولا واحد من هذه الفوارق يتهم أحداً: هو يدلّ على أين يُنظر.', alt: 'مصفوفة من ستة فوارق: مال ناقص في نهاية المناوبة، خزان يحتوي أقل من الحساب، زبون بالحساب يعترض على كشفه، زيوت تختفي، فوهة تبيع أقل، وإيداع لا يطابق الصندوق؛ ولكل واحد، ما يُراجَع أولاً وما يُظهره البرنامج.' },
    calendrier: { title: 'ستة أسابيع لمحطة تعرف أين يذهب كل لتر', unit: 'أسبوع', items: [
      { label: 'معاينة الموجود', note: 'الفوهات، الخزانات، المناوبات، الدفاتر الممسوكة، زبائن الحساب، المتجر، والاتصال في المكان', from: 0, to: 1, accent: true },
      { label: 'العدّادات والمناوبات', note: 'إدخال المؤشرات عند كل تبديل، وإغلاق لكل مناوبة على الهاتف أو اللوحة، دون اتصال عند الحاجة', from: 1, to: 3 },
      { label: 'الخزانات والتسليمات', note: 'قياس الصباح، قياس قبل كل تفريغ وبعده، والفارق لكل منتج', from: 2, to: 4 },
      { label: 'زبائن الحساب', note: 'وصولات مرقَّمة، سقف لكل مؤسسة، وكشف آخر الشهر', from: 3, to: 5 },
      { label: 'المتجر والخدمات', note: 'السلع، الزيوت، الغسل، وجرد حسب الصنف', from: 4, to: 6 },
      { label: 'لوحة المسيّر', note: 'فوارق اليوم، اللترات لكل منتج، أرصدة الحسابات، تُطالَع عن بعد', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال، لمحطة من أربع فوهات مع متجر. الفترة المبرزة هي الأولى: قراءة ما تسجّله الدفاتر من قبل. والفترات تتداخل. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: معاينة الموجود (مبرزة)، العدّادات والمناوبات، الخزانات والتسليمات، زبائن الحساب، المتجر والخدمات، ثم لوحة المسيّر.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      litre: { svg: steps({ title: t.litre.title, steps: t.litre.items, arrows: true, rtl }), caption: t.litre.caption, alt: t.litre.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      equipe: { svg: equipe(e.equipe, rtl), caption: t.equipe.caption, alt: e.equipe.alt },
      cuve: { svg: cuve(e.cuve, rtl), caption: t.cuve.caption, alt: e.cuve.alt },
      ecarts: { svg: matrix({ title: t.ecarts.title, columns: t.ecarts.columns, rows: t.ecarts.rows, rtl }), caption: t.ecarts.caption, alt: t.ecarts.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
