import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { load, promise, STRINGS as SC } from './custom/scheduling.mjs';
export const slug = 'on-promet-des-delais-qu-on-ne-tient-pas-planification-de-production-application-algerie-2027-capacite-charge-goulot-date-promise-calculee';
const T = {
  fr: {
    cover: { eyebrow: 'Planification · Capacité · Délais · 2027', title: ['« On promet des délais', 'qu’on ne tient pas »'], subtitle: 'Ce qu’on construit pour promettre une date vraie : capacité par ressource, charge des ordres, goulot, composants, tournée, promesse calculée', left: { label: 'Une date dite de tête', sub: 'et le client qui rappelle le 19' }, right: { label: 'Une date calculée et écrite', sub: 'et ce qui bouge si on la veut plus tôt' } },
    promettre: { title: 'Promettre une date, en six temps', items: [
      { label: 'Recevoir la commande', sub: 'quantité, produit ou configuration, gamme et nomenclature connues' },
      { label: 'Vérifier les composants', sub: 'disponibles, réservés, réceptions attendues au délai mesuré' },
      { label: 'Créneau du goulot', sub: 'première capacité libre sur la ressource la plus chargée', accent: true },
      { label: 'Placer la gamme', sub: 'opérations amont et aval autour du goulot ; durées de gamme' },
      { label: 'Ajouter la tournée', sub: 'première tournée qui livre la zone après la fin' },
      { label: 'Écrire la promesse', sub: 'date sur la commande avec son calcul ; envoyée au client' },
    ], caption: 'Figure 1 · L’étape accentuée est le créneau du goulot : la ressource la plus chargée fixe la date, et les autres opérations se placent autour. Les deux premières étapes lisent ce que les guides sur le stock et le réapprovisionnement savent déjà ; les deux dernières écrivent la date sur la commande, avec le calcul qui l’a produite, et l’envoient par le canal du client.', alt: 'Six temps : recevoir la commande, vérifier les composants, trouver le créneau du goulot (accentué), placer la gamme, ajouter la tournée, écrire la promesse.' },
    couches: { title: 'La planification, en cinq couches', layers: [
      { label: 'Capacité', items: [{ name: 'Par ressource et par jour : heures d’équipe, cadence, arrêts planifiés, congés ; écrite par le gérant, modifiable sans développement', sub: 'une capacité est un calendrier, pas une constante' }] },
      { label: 'Charge', items: [{ name: 'Somme des durées de gamme des ordres lancés et promis, par ressource et par jour ; recalculée à chaque lancement et pointage', sub: 'le pointage de l’atelier corrige la charge restante', accent: true }] },
      { label: 'Promesse', items: [{ name: 'Composants disponibles ou attendus, premier créneau libre du goulot, gamme placée, tournée ; date écrite avec son calcul', sub: 'le vendeur voit la date, pas une estimation' }] },
      { label: 'Replanification', items: [{ name: 'Urgence, panne, retard fournisseur : options affichées avec leur coût, ordre non promis déplacé, heures ajoutées ; clients prévenus', sub: 'une date promise ne bouge pas sans décision écrite' }] },
      { label: 'Mesure', items: [{ name: 'Dates tenues, charge par ressource, heures sup, ordres déplacés, écart entre durée de gamme et pointage', sub: 'le pointage réel corrige les gammes du mois suivant' }] },
    ], caption: 'Figure 2 · La couche accentuée est la charge : elle n’est pas estimée, elle est la somme des durées de gamme des ordres lancés et promis, et le pointage de l’atelier la corrige en continu. La capacité au-dessus est un calendrier écrit par le gérant ; la promesse en dessous n’est qu’une lecture de ces deux couches, plus les composants et la tournée.', alt: 'Cinq couches : capacité, charge (accentuée), promesse, replanification, mesure.' },
    charge: { caption: 'Figure 3 · Le plan de charge d’une quinzaine : trois ressources, dix jours, les heures déjà chargées par les ordres lancés contre la capacité du jour. La ligne d’embouteillage dépasse sa capacité les 18 et 19 novembre : c’est le goulot, et c’est lui qui fixe la prochaine date qu’on peut promettre, le premier créneau libre étant le 24. La capacité est écrite par le gérant, la charge est calculée. Ressources, ordres et heures sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le vendeur promet le 18, on livre le 25', cells: ['Date dite de tête ; client qui rappelle ; remise pour s’excuser', 'date calculée depuis goulot, composants, tournée ; écrite avec son calcul'] },
      { label: 'Tout le monde est urgent', cells: ['Le dernier qui a crié passe devant ; les autres glissent', 'ordres promis protégés ; déplacement d’un ordre non promis, décision écrite'] },
      { label: 'La ligne est pleine, la presse est vide', cells: ['On lance des ordres qui attendent devant la ligne', 'charge par ressource ; le goulot fixe la date ; l’amont se cale dessus'] },
      { label: 'Le fournisseur livre en retard', cells: ['Ordre lancé, composant manquant ; atelier arrêté', 'composants vérifiés à la promesse ; réception attendue au délai mesuré'] },
      { label: 'Une panne un mardi matin', cells: ['Une semaine de dates fausses ; personne ne prévient', 'capacité du jour mise à zéro ; ordres replanifiés ; clients prévenus avant'] },
      { label: 'La gamme dit 6 heures, l’atelier en prend 8', cells: ['Charge sous-estimée partout ; dates toujours optimistes', 'pointage réel contre gamme ; durées corrigées le mois suivant'] },
    ], caption: 'Figure 4 · Les trois premières lignes se règlent par la promesse calculée, la protection des ordres promis et la charge par ressource ; les trois suivantes par la vérification des composants, la capacité du jour et la correction des gammes par le pointage. Aucune ne se règle par un vendeur plus prudent.', alt: 'Matrice de six situations : promesse de tête, urgences, goulot ignoré, fournisseur en retard, panne, gammes optimistes ; ce qui se passe et ce que l’application fait.' },
    promesse: { caption: 'Figure 5 · Une commande de 3 000 bouteilles reçue le 11 novembre. Les oranges manquent et la réception est attendue le 14 ; la presse a un créneau le 16 ; la ligne est occupée par des ordres déjà promis jusqu’au 19, le nouvel ordre se place le 20 ; la tournée qui livre la zone part le 23. La date calculée est le 23, pas le 18 que le vendeur aurait dit. Pour livrer le 20, l’application montre quel ordre non promis glisse et à quelle date ; pour le 18, elle dit pourquoi c’est impossible. Commande, dates et créneaux sont un exemple construit.' },
    calendrier: { title: 'Planifier et promettre en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'ressources, capacités par jour, équipes et arrêts, règle de protection des ordres promis, qui décide un déplacement ; avec le gérant et le chef d’atelier', from: 0, to: 1 },
      { label: 'Capacité et charge', note: 'calendrier de capacité, charge depuis les gammes des ordres lancés, écran du plan de charge, goulot calculé', from: 1, to: 3, accent: true },
      { label: 'Promesse', note: 'composants, créneau du goulot, gamme placée, tournée, date écrite sur la commande avec son calcul, envoi au client', from: 3, to: 4 },
      { label: 'Replanification', note: 'urgences, pannes, retards fournisseur ; options et coûts ; clients prévenus', from: 4, to: 5 },
      { label: 'Pointage et correction', note: 'durées réelles contre gammes, correction mensuelle, charge restante en continu', from: 5, to: 6 },
      { label: 'Mesure', note: 'dates tenues, charge par ressource, heures sup, ordres déplacés, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les capacités par jour, les équipes, les arrêts et la règle de protection des ordres promis sont des décisions du gérant et du chef d’atelier. Les deux semaines accentuées sont la capacité et la charge, parce que la promesse n’est qu’une lecture de ces deux couches ; les gammes et les ordres viennent du guide sur la fabrication.', alt: 'Frise de sept semaines : règles, capacité et charge (accentué, deux semaines), promesse, replanification, pointage et correction, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Scheduling · Capacity · Lead times · 2027', title: ['“We promise dates', 'we cannot keep”'], subtitle: 'What gets built to promise a true date: capacity per resource, order load, bottleneck, components, delivery round, computed promise', left: { label: 'A date said from memory', sub: 'and the customer calling back on the 19th' }, right: { label: 'A computed, written date', sub: 'and what moves if it is wanted sooner' } },
    promettre: { title: 'Promising a date, in six beats', items: [
      { label: 'Receive the order', sub: 'quantity, product or configuration, routing and BOM known' },
      { label: 'Check components', sub: 'available, reserved, expected receptions at measured lead time' },
      { label: 'Bottleneck slot', sub: 'first free capacity on the most loaded resource', accent: true },
      { label: 'Place the routing', sub: 'upstream and downstream operations around the bottleneck; routing durations' },
      { label: 'Add the round', sub: 'first round delivering the zone after completion' },
      { label: 'Write the promise', sub: 'date on the order with its computation; sent to the customer' },
    ], caption: 'Figure 1 · The accented beat is the bottleneck slot: the most loaded resource sets the date, and the other operations are placed around it. The first two beats read what the stock and replenishment guides already know; the last two write the date on the order, with the computation that produced it, and send it through the customer’s channel.', alt: 'Six beats: receive the order, check components, find the bottleneck slot (accented), place the routing, add the round, write the promise.' },
    couches: { title: 'Scheduling, in five layers', layers: [
      { label: 'Capacity', items: [{ name: 'Per resource and per day: shift hours, rate, planned stops, leave; written by the manager, changed without development', sub: 'capacity is a calendar, not a constant' }] },
      { label: 'Load', items: [{ name: 'Sum of routing durations of launched and promised orders, per resource and per day; recomputed at every launch and clock-in', sub: 'shop-floor clock-in corrects the remaining load', accent: true }] },
      { label: 'Promise', items: [{ name: 'Components available or expected, first free bottleneck slot, placed routing, round; date written with its computation', sub: 'the seller sees the date, not an estimate' }] },
      { label: 'Rescheduling', items: [{ name: 'Emergency, breakdown, supplier delay: options shown with their cost, unpromised order moved, hours added; customers warned', sub: 'a promised date does not move without a written decision' }] },
      { label: 'Measurement', items: [{ name: 'Dates kept, load per resource, overtime, orders moved, gap between routing duration and clock-in', sub: 'real clock-in corrects next month’s routings' }] },
    ], caption: 'Figure 2 · The accented layer is load: it is not estimated, it is the sum of routing durations of launched and promised orders, and shop-floor clock-in corrects it continuously. Capacity above is a calendar written by the manager; the promise below is only a reading of those two layers, plus components and the round.', alt: 'Five layers: capacity, load (accented), promise, rescheduling, measurement.' },
    charge: { caption: 'Figure 3 · A fortnight’s load plan: three resources, ten days, the hours already loaded by launched orders against the day’s capacity. The bottling line exceeds its capacity on 18 and 19 November: it is the bottleneck, and it sets the next date that can be promised, the first free slot being the 24th. Capacity is written by the manager, load is computed. Resources, orders and hours are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The seller promises the 18th, we deliver the 25th', cells: ['Date said from memory; customer calls back; discount to apologise', 'date computed from bottleneck, components, round; written with its computation'] },
      { label: 'Everyone is urgent', cells: ['The last to shout goes first; the others slip', 'promised orders protected; unpromised order moved, written decision'] },
      { label: 'The line is full, the press is empty', cells: ['Orders launched that wait in front of the line', 'load per resource; the bottleneck sets the date; upstream aligns on it'] },
      { label: 'The supplier delivers late', cells: ['Order launched, component missing; workshop stopped', 'components checked at promise; expected reception at measured lead time'] },
      { label: 'A breakdown on a Tuesday morning', cells: ['A week of wrong dates; nobody warns', 'day’s capacity set to zero; orders rescheduled; customers warned beforehand'] },
      { label: 'The routing says 6 hours, the shop takes 8', cells: ['Load underestimated everywhere; dates always optimistic', 'real clock-in against routing; durations corrected next month'] },
    ], caption: 'Figure 4 · The first three rows are settled by the computed promise, the protection of promised orders and load per resource; the next three by component checks, the day’s capacity and the correction of routings by clock-in. None is settled by a more cautious seller.', alt: 'Matrix of six situations: promise from memory, emergencies, ignored bottleneck, late supplier, breakdown, optimistic routings; what happens and what the application does.' },
    promesse: { caption: 'Figure 5 · An order of 3,000 bottles received on 11 November. Oranges are short and the reception is expected on the 14th; the press has a slot on the 16th; the line is busy with orders already promised until the 19th, the new order is placed on the 20th; the round delivering the zone leaves on the 23rd. The computed date is the 23rd, not the 18th the seller would have said. To deliver on the 20th, the application shows which unpromised order slips and to which date; for the 18th, it says why it is impossible. Order, dates and slots are a constructed example.' },
    calendrier: { title: 'Scheduling and promising in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'resources, daily capacities, shifts and stops, protection rule for promised orders, who decides a move; with the manager and the shop-floor supervisor', from: 0, to: 1 },
      { label: 'Capacity and load', note: 'capacity calendar, load from launched orders’ routings, load plan screen, computed bottleneck', from: 1, to: 3, accent: true },
      { label: 'Promise', note: 'components, bottleneck slot, placed routing, round, date written on the order with its computation, sent to the customer', from: 3, to: 4 },
      { label: 'Rescheduling', note: 'emergencies, breakdowns, supplier delays; options and costs; customers warned', from: 4, to: 5 },
      { label: 'Clock-in and correction', note: 'real durations against routings, monthly correction, remaining load continuously', from: 5, to: 6 },
      { label: 'Measurement', note: 'dates kept, load per resource, overtime, orders moved, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: daily capacities, shifts, stops and the protection rule for promised orders are decisions of the manager and the shop-floor supervisor. The two accented weeks are capacity and load, because the promise is only a reading of those two layers; routings and orders come from the manufacturing guide.', alt: 'Seven-week timeline: rules, capacity and load (accented, two weeks), promise, rescheduling, clock-in and correction, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'تخطيط · طاقة · آجال · 2027', title: ['«نعد بآجال', 'لا نفي بها»'], subtitle: 'ما يُبنى للوعد بتاريخ حقيقي: طاقة لكل مورد، حمل الأوامر، عنق الزجاجة، المكوّنات، الجولة، وعد محسوب', left: { label: 'تاريخ يُقال من الذاكرة', sub: 'وزبون يعاود الاتصال في 19' }, right: { label: 'تاريخ محسوب ومكتوب', sub: 'وما يتحرك إن أُريد أبكر' } },
    promettre: { title: 'الوعد بتاريخ، في ستة أوقات', items: [
      { label: 'استلام الطلبية', sub: 'كمية، منتج أو تهيئة، مسار وقائمة مواد معروفان' },
      { label: 'فحص المكوّنات', sub: 'متاحة، محجوزة، استلامات متوقعة بالمهلة المقيسة' },
      { label: 'فترة عنق الزجاجة', sub: 'أول طاقة حرة على المورد الأكثر حملاً', accent: true },
      { label: 'وضع المسار', sub: 'عمليات المنبع والمصب حول عنق الزجاجة؛ مدد المسار' },
      { label: 'إضافة الجولة', sub: 'أول جولة تسلّم المنطقة بعد الإنجاز' },
      { label: 'كتابة الوعد', sub: 'تاريخ على الطلبية بحسابه؛ يُرسل للزبون' },
    ], caption: 'الشكل 1 · الوقت المميز هو فترة عنق الزجاجة: المورد الأكثر حملاً يحدد التاريخ، والعمليات الأخرى توضع حوله. والوقتان الأولان يقرآن ما يعرفه دليلا المخزون وإعادة التموين أصلاً؛ والأخيران يكتبان التاريخ على الطلبية بالحساب الذي أنتجه ويرسلانه عبر قناة الزبون.', alt: 'ستة أوقات: استلام الطلبية، فحص المكوّنات، إيجاد فترة عنق الزجاجة (مميز)، وضع المسار، إضافة الجولة، كتابة الوعد.' },
    couches: { title: 'التخطيط، في خمس طبقات', layers: [
      { label: 'الطاقة', items: [{ name: 'لكل مورد ويوم: ساعات الفرق، المعدل، التوقفات المخططة، الإجازات؛ يكتبها المسيّر وتتغير بلا تطوير', sub: 'الطاقة تقويم لا ثابت' }] },
      { label: 'الحمل', items: [{ name: 'مجموع مدد مسارات الأوامر المطلقة والموعودة، لكل مورد ويوم؛ يُعاد حسابه عند كل إطلاق وتسجيل', sub: 'تسجيل الورشة يصحّح الحمل المتبقي', accent: true }] },
      { label: 'الوعد', items: [{ name: 'مكوّنات متاحة أو متوقعة، أول فترة حرة لعنق الزجاجة، مسار موضوع، جولة؛ تاريخ مكتوب بحسابه', sub: 'البائع يرى التاريخ لا تقديراً' }] },
      { label: 'إعادة التخطيط', items: [{ name: 'طارئ، عطل، تأخر مورد: خيارات تُعرض بكلفتها، أمر غير موعود يُنقل، ساعات تُضاف؛ زبائن منبَّهون', sub: 'التاريخ الموعود لا يتحرك بلا قرار مكتوب' }] },
      { label: 'القياس', items: [{ name: 'تواريخ موفّى بها، حمل لكل مورد، ساعات إضافية، أوامر منقولة، فارق بين مدة المسار والتسجيل', sub: 'التسجيل الحقيقي يصحّح مسارات الشهر التالي' }] },
    ], caption: 'الشكل 2 · الطبقة المميزة هي الحمل: لا يُقدَّر بل هو مجموع مدد مسارات الأوامر المطلقة والموعودة، وتسجيل الورشة يصحّحه باستمرار. والطاقة فوقه تقويم يكتبه المسيّر؛ والوعد تحته مجرد قراءة لهاتين الطبقتين زائد المكوّنات والجولة.', alt: 'خمس طبقات: الطاقة، الحمل (مميزة)، الوعد، إعادة التخطيط، القياس.' },
    charge: { caption: 'الشكل 3 · خطة حمل أسبوعين: ثلاثة موارد، عشرة أيام، الساعات المحمَّلة أصلاً بالأوامر المطلقة مقابل طاقة اليوم. خط التعبئة يتجاوز طاقته في 18 و19 نوفمبر: هو عنق الزجاجة، وهو ما يحدد التاريخ التالي الذي يمكن الوعد به، وأول فترة حرة في 24. الطاقة يكتبها المسيّر، والحمل يُحسب. والموارد والأوامر والساعات مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'البائع يعد بـ 18 ونسلّم في 25', cells: ['تاريخ من الذاكرة؛ زبون يعاود الاتصال؛ خصم اعتذاراً', 'تاريخ محسوب من عنق الزجاجة والمكوّنات والجولة؛ مكتوب بحسابه'] },
      { label: 'الجميع عاجل', cells: ['آخر من صرخ يتقدم؛ والباقي ينزلق', 'أوامر موعودة محمية؛ نقل أمر غير موعود بقرار مكتوب'] },
      { label: 'الخط ممتلئ والمعصرة فارغة', cells: ['تُطلق أوامر تنتظر أمام الخط', 'حمل لكل مورد؛ عنق الزجاجة يحدد التاريخ؛ المنبع يتناسق معه'] },
      { label: 'المورد يسلّم متأخراً', cells: ['أمر مطلق ومكوّن ناقص؛ ورشة متوقفة', 'مكوّنات مفحوصة عند الوعد؛ استلام متوقع بالمهلة المقيسة'] },
      { label: 'عطل صباح ثلاثاء', cells: ['أسبوع من التواريخ الخاطئة؛ لا أحد ينبّه', 'طاقة اليوم تُصفَّر؛ أوامر معاد تخطيطها؛ زبائن منبَّهون قبلاً'] },
      { label: 'المسار يقول 6 ساعات والورشة تأخذ 8', cells: ['حمل مقدَّر بأقل في كل مكان؛ تواريخ متفائلة دائماً', 'تسجيل حقيقي مقابل المسار؛ مدد مصحَّحة الشهر التالي'] },
    ], caption: 'الشكل 4 · الأسطر الثلاثة الأولى تُحل بالوعد المحسوب وحماية الأوامر الموعودة والحمل لكل مورد؛ والثلاثة التالية بفحص المكوّنات وطاقة اليوم وتصحيح المسارات بالتسجيل. ولا واحد يُحل ببائع أكثر حذراً.', alt: 'مصفوفة ست حالات: وعد من الذاكرة، طوارئ، عنق زجاجة متجاهَل، مورد متأخر، عطل، مسارات متفائلة؛ ما يحدث وما يفعله التطبيق.' },
    promesse: { caption: 'الشكل 5 · طلبية 3,000 قارورة وردت في 11 نوفمبر. البرتقال ناقص والاستلام متوقع في 14؛ وللمعصرة فترة في 16؛ والخط مشغول بأوامر موعودة أصلاً حتى 19، والأمر الجديد يوضع في 20؛ والجولة التي تسلّم المنطقة تنطلق في 23. والتاريخ المحسوب 23 لا 18 الذي كان البائع سيقوله. وللتسليم في 20 يُظهر التطبيق أي أمر غير موعود ينزلق وإلى أي تاريخ؛ ولـ 18 يقول لماذا مستحيل. والطلبية والتواريخ والفترات مثال مبني.' },
    calendrier: { title: 'التخطيط والوعد سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'الموارد، الطاقات اليومية، الفرق والتوقفات، قاعدة حماية الأوامر الموعودة، من يقرر النقل؛ مع المسيّر ورئيس الورشة', from: 0, to: 1 },
      { label: 'الطاقة والحمل', note: 'تقويم الطاقة، حمل من مسارات الأوامر المطلقة، شاشة خطة الحمل، عنق زجاجة محسوب', from: 1, to: 3, accent: true },
      { label: 'الوعد', note: 'مكوّنات، فترة عنق الزجاجة، مسار موضوع، جولة، تاريخ مكتوب على الطلبية بحسابه، إرسال للزبون', from: 3, to: 4 },
      { label: 'إعادة التخطيط', note: 'طوارئ، أعطال، تأخر موردين؛ خيارات وكلف؛ زبائن منبَّهون', from: 4, to: 5 },
      { label: 'التسجيل والتصحيح', note: 'مدد حقيقية مقابل المسارات، تصحيح شهري، حمل متبقٍّ باستمرار', from: 5, to: 6 },
      { label: 'القياس', note: 'تواريخ موفّى بها، حمل لكل مورد، ساعات إضافية، أوامر منقولة، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: الطاقات اليومية والفرق والتوقفات وقاعدة حماية الأوامر الموعودة قرارات المسيّر ورئيس الورشة. والأسبوعان المميزان هما الطاقة والحمل، لأن الوعد مجرد قراءة لهاتين الطبقتين؛ والمسارات والأوامر من دليل التصنيع.', alt: 'خط زمني من سبعة أسابيع: القواعد، الطاقة والحمل (مميز، أسبوعان)، الوعد، إعادة التخطيط، التسجيل والتصحيح، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      promettre: { svg: steps({ title: t.promettre.title, steps: t.promettre.items, arrows: true, rtl }), caption: t.promettre.caption, alt: t.promettre.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      charge: { svg: load(e.load, rtl), caption: t.charge.caption, alt: e.load.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      promesse: { svg: promise(e.promise, rtl), caption: t.promesse.caption, alt: e.promise.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
