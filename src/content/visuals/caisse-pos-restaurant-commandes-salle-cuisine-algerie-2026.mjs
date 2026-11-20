import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Restaurant', title: ['Je veux une caisse', 'pour mon restaurant.', 'Ce qu’il faut vraiment.'], subtitle: 'Les quatre fuites d’un restaurant, ce qu’une caisse du marché règle, quand le sur mesure se justifie, et où l’IA aide vraiment.', left: { label: 'Aujourd’hui', sub: 'bons papier, caisse à part, livraison au téléphone' }, right: { label: 'Dans 8 semaines', sub: 'une commande, un ticket, un stock' }, note: 'Algérie · 2026' },
    leaks: { title: 'Les quatre fuites d’un restaurant qui tourne sur papier', items: [
      { label: 'La commande perdue entre la salle et la cuisine', sub: 'Un bon mal écrit, un plat oublié, une table qui attend quarante minutes et ne revient pas.' },
      { label: 'La caisse qui ne dit pas la vérité', sub: 'Le ticket n’existe pas pour tout, le soir le tiroir ne correspond pas, personne ne sait pourquoi.' },
      { label: 'Le stock d’ingrédients invisible', sub: 'Le poulet manque à vingt heures, le fromage se jette le lundi. On achète de mémoire.' },
      { label: 'Les commandes de livraison hors système', sub: 'WhatsApp, Yassir et le téléphone chacun de leur côté. La cuisine reçoit trois flux, la caisse n’en voit qu’un.', accent: true },
    ], caption: 'Figure 1 · Le propriétaire dit « je veux une caisse ». Ce qu’il veut, c’est que ces quatre fuites s’arrêtent.', alt: 'Les quatre fuites d’un restaurant sur papier : commandes perdues entre salle et cuisine, caisse inexacte, stock d’ingrédients invisible, commandes de livraison hors système.' },
    compare: { title: 'Caisse du marché ou système sur mesure', columns: ['Caisse du marché', 'Système sur mesure'], rows: [
      { label: 'Prise de commande, ticket, écran cuisine', cells: [2, 2] },
      { label: 'Contrôle de caisse par serveur et par service', cells: [2, 2] },
      { label: 'Stock d’ingrédients par recette', cells: [1, 2] },
      { label: 'Commandes WhatsApp et livraison dans le même flux', cells: [0, 2] },
      { label: 'Plusieurs restaurants, cuisine centrale, dark kitchen', cells: [1, 2] },
      { label: 'Délai de mise en route', cells: ['Une à deux semaines', 'Six à dix semaines'] },
      { label: 'Le bon choix quand', cells: ['Un restaurant, processus standards', 'Chaîne, livraison forte, règles propres'] },
    ], highlight: -1, legend: '●  oui      ◐  partiel      ○  non', caption: 'Figure 2 · Pour un seul restaurant aux processus standards, une caisse du marché bien déployée suffit. Le sur mesure commence avec la livraison et la deuxième adresse.', alt: 'Comparaison caisse du marché et système sur mesure pour un restaurant : commande et cuisine couvertes par les deux, stock par recette et commandes de livraison intégrées surtout en sur mesure, délais et cas d’usage.' },
    system: { title: 'Ce qu’un système de restaurant contient, du comptoir à la direction', layers: [
      { label: 'Salle et comptoir', items: [{ name: 'Prise de commande', sub: 'tablette ou téléphone, par table, par serveur' }, { name: 'Caisse et ticket', sub: 'espèces, CIB, Edahabia, clôture par service' }] },
      { label: 'Cuisine', items: [{ name: 'Écran cuisine', sub: 'commandes dans l’ordre, temps par plat, prêt', accent: true }, { name: 'Recettes et stock', sub: 'chaque plat vendu décrémente ses ingrédients' }] },
      { label: 'Livraison', items: [{ name: 'Commandes WhatsApp et site', sub: 'dans le même flux que la salle' }, { name: 'Livreurs et plateformes', sub: 'vos livreurs, ou Yassir et les autres' }] },
      { label: 'Direction', items: [{ name: 'Tableau de bord', sub: 'ventes, marge par plat, écarts de caisse, pertes' }, { name: 'Achats', sub: 'commande fournisseur calculée sur les ventes' }] },
    ], caption: 'Figure 3 · L’écran cuisine est la pièce qui change la soirée. Le stock par recette est celle qui change la marge.', alt: 'Architecture d’un système de restaurant : prise de commande et caisse, écran cuisine et stock par recette, commandes de livraison dans le même flux, tableau de bord et achats.' },
    timeline: { title: 'Du papier au système, sans fermer un soir', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'votre carte, vos recettes, vos canaux de commande', from: 0, to: 1 },
      { label: 'Recettes et stock', note: 'chaque plat décrit en ingrédients, une fois', from: 1, to: 3 },
      { label: 'Développement ou paramétrage', note: 'commande, cuisine, caisse, livraison', from: 2, to: 6 },
      { label: 'Service test', note: 'deux services calmes, en parallèle du papier', from: 6, to: 7 },
      { label: 'Bascule', note: 'tous les services, première clôture automatique', from: 7, to: 8, accent: true },
    ], caption: 'Figure 4 · La semaine qui compte est celle des recettes : sans elle, la caisse compte des plats et jamais des ingrédients.', alt: 'Calendrier en semaines : cadrage 0 à 1, recettes et stock 1 à 3, développement 2 à 6, service test 6 à 7, bascule 7 à 8.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Restaurant', title: ['I want a till', 'for my restaurant.', 'What you really need.'], subtitle: 'The four leaks of a restaurant, what a market POS fixes, when custom is justified, and where AI really helps.', left: { label: 'Today', sub: 'paper slips, separate till, delivery by phone' }, right: { label: 'In 8 weeks', sub: 'one order, one receipt, one stock' }, note: 'Algeria · 2026' },
    leaks: { title: 'The four leaks of a restaurant running on paper', items: [
      { label: 'The order lost between the floor and the kitchen', sub: 'A badly written slip, a forgotten dish, a table waiting forty minutes that never comes back.' },
      { label: 'The till that does not tell the truth', sub: 'Not everything gets a receipt, at night the drawer does not match, nobody knows why.' },
      { label: 'The invisible ingredient stock', sub: 'Chicken runs out at eight, cheese is thrown away on Monday. You buy from memory.' },
      { label: 'Delivery orders outside the system', sub: 'WhatsApp, Yassir and the phone each on their own. The kitchen gets three streams, the till sees one.', accent: true },
    ], caption: 'Figure 1 · The owner says "I want a till". What they want is for these four leaks to stop.', alt: 'The four leaks of a paper-run restaurant: orders lost between floor and kitchen, inaccurate till, invisible ingredient stock, delivery orders outside the system.' },
    compare: { title: 'Market POS or custom system', columns: ['Market POS', 'Custom system'], rows: [
      { label: 'Order taking, receipt, kitchen screen', cells: [2, 2] },
      { label: 'Till control per waiter and per shift', cells: [2, 2] },
      { label: 'Ingredient stock by recipe', cells: [1, 2] },
      { label: 'WhatsApp and delivery orders in the same stream', cells: [0, 2] },
      { label: 'Several restaurants, central kitchen, dark kitchen', cells: [1, 2] },
      { label: 'Time to go live', cells: ['One to two weeks', 'Six to ten weeks'] },
      { label: 'The right choice when', cells: ['One restaurant, standard processes', 'Chain, strong delivery, own rules'] },
    ], highlight: -1, legend: '●  yes      ◐  partial      ○  no', caption: 'Figure 2 · For a single restaurant with standard processes, a well-deployed market POS is enough. Custom starts with delivery and the second address.', alt: 'Comparison of market POS and custom system for a restaurant: ordering and kitchen covered by both, recipe stock and integrated delivery orders mostly custom, timelines and use cases.' },
    system: { title: 'What a restaurant system contains, from the counter to management', layers: [
      { label: 'Floor and counter', items: [{ name: 'Order taking', sub: 'tablet or phone, per table, per waiter' }, { name: 'Till and receipt', sub: 'cash, CIB, Edahabia, closing per shift' }] },
      { label: 'Kitchen', items: [{ name: 'Kitchen screen', sub: 'orders in sequence, time per dish, ready', accent: true }, { name: 'Recipes and stock', sub: 'each dish sold decrements its ingredients' }] },
      { label: 'Delivery', items: [{ name: 'WhatsApp and website orders', sub: 'in the same stream as the floor' }, { name: 'Couriers and platforms', sub: 'your couriers, or Yassir and the others' }] },
      { label: 'Management', items: [{ name: 'Dashboard', sub: 'sales, margin per dish, till gaps, waste' }, { name: 'Purchasing', sub: 'supplier order computed from sales' }] },
    ], caption: 'Figure 3 · The kitchen screen is the piece that changes the evening. Recipe stock is the one that changes the margin.', alt: 'Architecture of a restaurant system: order taking and till, kitchen screen and recipe stock, delivery orders in the same stream, dashboard and purchasing.' },
    timeline: { title: 'From paper to system, without closing an evening', unit: 'weeks', items: [
      { label: 'Scoping', note: 'your menu, your recipes, your order channels', from: 0, to: 1 },
      { label: 'Recipes and stock', note: 'each dish described in ingredients, once', from: 1, to: 3 },
      { label: 'Development or setup', note: 'ordering, kitchen, till, delivery', from: 2, to: 6 },
      { label: 'Test service', note: 'two quiet services, alongside paper', from: 6, to: 7 },
      { label: 'Switch-over', note: 'all services, first automatic closing', from: 7, to: 8, accent: true },
    ], caption: 'Figure 4 · The week that counts is the recipes week: without it, the till counts dishes and never ingredients.', alt: 'Timeline in weeks: scoping 0 to 1, recipes and stock 1 to 3, development 2 to 6, test service 6 to 7, switch-over 7 to 8.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · مطعم', title: ['أريد صندوقاً', 'لمطعمي.', 'ما تحتاجه فعلاً.'], subtitle: 'التسربات الأربعة للمطعم، ما يحله صندوق السوق، متى يُبرَّر المخصص، وأين يساعد الذكاء الاصطناعي فعلاً.', left: { label: 'اليوم', sub: 'أوراق، صندوق منفصل، توصيل بالهاتف' }, right: { label: 'بعد 8 أسابيع', sub: 'طلب واحد، تذكرة واحدة، مخزون واحد' }, note: 'الجزائر · 2026' },
    leaks: { title: 'التسربات الأربعة لمطعم يعمل بالورق', items: [
      { label: 'الطلب الضائع بين الصالة والمطبخ', sub: 'ورقة مكتوبة بسوء، طبق منسي، طاولة تنتظر أربعين دقيقة ولا تعود.' },
      { label: 'الصندوق الذي لا يقول الحقيقة', sub: 'ليس لكل شيء تذكرة، في المساء لا يتطابق الدرج، ولا أحد يعرف لماذا.' },
      { label: 'مخزون المكوّنات غير المرئي', sub: 'ينفد الدجاج في الثامنة، يُرمى الجبن يوم الاثنين. نشتري من الذاكرة.' },
      { label: 'طلبات التوصيل خارج النظام', sub: 'واتساب وYassir والهاتف كل على حدة. يستقبل المطبخ ثلاثة تدفقات ولا يرى الصندوق إلا واحداً.', accent: true },
    ], caption: 'الشكل 1 · يقول المالك «أريد صندوقاً». ما يريده أن تتوقف هذه التسربات الأربعة.', alt: 'التسربات الأربعة لمطعم يعمل بالورق.' },
    compare: { title: 'صندوق السوق أم نظام مخصص', columns: ['صندوق السوق', 'نظام مخصص'], rows: [
      { label: 'أخذ الطلب، التذكرة، شاشة المطبخ', cells: [2, 2] },
      { label: 'مراقبة الصندوق لكل نادل ولكل فترة', cells: [2, 2] },
      { label: 'مخزون المكوّنات حسب الوصفة', cells: [1, 2] },
      { label: 'طلبات واتساب والتوصيل في التدفق نفسه', cells: [0, 2] },
      { label: 'عدة مطاعم، مطبخ مركزي، مطبخ سحابي', cells: [1, 2] },
      { label: 'مدة التشغيل', cells: ['أسبوع إلى أسبوعين', 'ستة إلى عشرة أسابيع'] },
      { label: 'الخيار الصحيح عندما', cells: ['مطعم واحد، عمليات قياسية', 'سلسلة، توصيل قوي، قواعد خاصة'] },
    ], highlight: -1, legend: '●  نعم      ◐  جزئي      ○  لا', caption: 'الشكل 2 · لمطعم واحد بعمليات قياسية يكفي صندوق سوق منشور بإتقان. يبدأ المخصص مع التوصيل والعنوان الثاني.', alt: 'مقارنة صندوق السوق والنظام المخصص للمطعم.' },
    system: { title: 'ما يحتويه نظام المطعم، من الكشك إلى الإدارة', layers: [
      { label: 'الصالة والكشك', items: [{ name: 'أخذ الطلب', sub: 'لوحي أو هاتف، لكل طاولة ولكل نادل' }, { name: 'الصندوق والتذكرة', sub: 'نقد، CIB، الذهبية، إقفال لكل فترة' }] },
      { label: 'المطبخ', items: [{ name: 'شاشة المطبخ', sub: 'الطلبات بالترتيب، وقت كل طبق، جاهز', accent: true }, { name: 'الوصفات والمخزون', sub: 'كل طبق مباع يُنقص مكوّناته' }] },
      { label: 'التوصيل', items: [{ name: 'طلبات واتساب والموقع', sub: 'في التدفق نفسه مع الصالة' }, { name: 'الموصّلون والمنصات', sub: 'موصّلوك، أو Yassir وغيره' }] },
      { label: 'الإدارة', items: [{ name: 'لوحة قيادة', sub: 'مبيعات، هامش لكل طبق، فوارق صندوق، هدر' }, { name: 'المشتريات', sub: 'طلب مورّد محسوب على المبيعات' }] },
    ], caption: 'الشكل 3 · شاشة المطبخ هي القطعة التي تغيّر السهرة. ومخزون الوصفة هي التي تغيّر الهامش.', alt: 'بنية نظام مطعم.' },
    timeline: { title: 'من الورق إلى النظام دون إغلاق سهرة', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'قائمتكم، وصفاتكم، قنوات الطلب', from: 0, to: 1 },
      { label: 'الوصفات والمخزون', note: 'كل طبق موصوف بمكوّناته، مرة واحدة', from: 1, to: 3 },
      { label: 'التطوير أو الإعداد', note: 'طلب، مطبخ، صندوق، توصيل', from: 2, to: 6 },
      { label: 'فترة تجريبية', note: 'فترتان هادئتان بالتوازي مع الورق', from: 6, to: 7 },
      { label: 'الانتقال', note: 'كل الفترات، أول إقفال تلقائي', from: 7, to: 8, accent: true },
    ], caption: 'الشكل 4 · الأسبوع الذي يهم هو أسبوع الوصفات: بدونه يعدّ الصندوق أطباقاً ولا يعدّ مكوّنات أبداً.', alt: 'جدول زمني بالأسابيع.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      leaks: { svg: steps({ title: t.leaks.title, steps: t.leaks.items, arrows: false, rtl }), caption: t.leaks.caption, alt: t.leaks.alt },
      compare: { svg: matrix({ title: t.compare.title, columns: t.compare.columns, rows: t.compare.rows, legend: t.compare.legend, rtl }), caption: t.compare.caption, alt: t.compare.alt },
      system: { svg: layers({ title: t.system.title, layers: t.system.layers, rtl }), caption: t.system.caption, alt: t.system.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 8, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
