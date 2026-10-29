import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · PME algérienne', title: ['Digitaliser une PME', 'en Algérie en 2027 :', 'par où commencer, dans quel ordre.'], subtitle: 'Les quatre paliers dans le bon ordre, ce qui s’achète en abonnement et ce qui se construit, la pile complète, et la feuille de route trimestre par trimestre.', left: { label: 'Janvier 2027', sub: 'WhatsApp, Excel, cahier, espèces, le patron qui sait tout' }, right: { label: 'Décembre 2027', sub: 'encaissement tracé, un flux maîtrisé, une équipe outillée, l’IA qui relance' }, note: 'Algérie · 2027' },
    order: { title: 'Les quatre paliers, dans l’ordre où ils paient', items: [
      { n: 'T1', label: 'Encaisser et facturer', sub: 'Carte CIB/Edahabia, QR, facture conforme, relances. Le PLF 2027 récompense l’encaissement électronique.', accent: true },
      { n: 'T2', label: 'Le flux qui perd de l’argent', sub: 'Commandes, stock ou terrain : un seul flux, celui qui coûte chaque mois, outillé jusqu’au bout.' },
      { n: 'T3', label: 'L’équipe et le client', sub: 'Back-office web, application mobile terrain, puis application ou site de commande pour le client.' },
      { n: 'T4', label: 'L’IA par-dessus', sub: 'Relances, support en arabe et français, alertes, résumé du jour. Elle a besoin des données des trois paliers.' },
    ], caption: 'Figure 1 · L’ordre n’est pas négociable : l’IA en premier n’a rien à lire, l’application client en premier n’a rien à livrer.', alt: 'Quatre paliers trimestriels : encaisser et facturer, le flux qui perd de l’argent, l’équipe et le client, l’IA par-dessus.' },
    buy: { title: 'Ce qui s’achète en abonnement, et ce qui se construit', columns: ['Logiciel existant', 'Sur mesure'], rows: [
      { label: 'Comptabilité, paie, déclarations', cells: ['Toujours : votre comptable en a déjà un', 'Jamais'] },
      { label: 'Caisse d’un point de vente', cells: ['Un site, des produits standards', 'Plusieurs sites, cuisine, livraison, fidélité liés'] },
      { label: 'Facturation et relances', cells: ['Quelques factures par mois', 'Des centaines, avec échéancier et paiement en ligne intégré'] },
      { label: 'Commandes et livraison', cells: ['Moins de vingt commandes par jour, sur WhatsApp', 'Au-delà : confirmation, livreurs, retours, chiffres par wilaya'] },
      { label: 'Stock multi-dépôts et péremption', cells: ['Un dépôt, pas de dates', 'Plusieurs dépôts, lots, dates, transferts'] },
      { label: 'Employés terrain, techniciens, livreurs', cells: ['Rarement adapté au terrain algérien', 'Application hors-ligne, pointage, tournées, preuves'] },
      { label: 'Application ou site de commande client', cells: ['Site vitrine, prise de rendez-vous simple', 'Dès que le client paie ou suit quelque chose'] },
    ], caption: 'Figure 2 · La règle : ce qui est identique dans toutes les entreprises s’achète ; ce qui fait votre métier se construit.', alt: 'Matrice par fonction entre logiciel existant par abonnement et sur mesure : comptabilité, caisse, facturation, commandes, stock, terrain, application client.' },
    stack: { title: 'La pile d’une PME digitalisée fin 2027', layers: [
      { label: 'Clients', items: [{ name: 'WhatsApp Business, tenu', sub: 'un numéro d’entreprise, réponses types, horaires' }, { name: 'Application ou site de commande', sub: 'commande, suivi, paiement, en arabe et français', accent: true }] },
      { label: 'Équipe', items: [{ name: 'Application mobile terrain', sub: 'hors-ligne, pointage, tournées, photos' }, { name: 'Back-office web', sub: 'commandes, stock, clients, tableau de bord du patron' }] },
      { label: 'Argent', items: [{ name: 'Encaissement électronique', sub: 'CIB/Edahabia, QR DZMobPay, espèces enregistrées' }, { name: 'Facture conforme et relances', sub: 'TVA, numérotation, échéancier, rappels' }] },
      { label: 'Données', items: [{ name: 'Une seule base', sub: 'clients, produits, commandes ; hébergement loi 18-07, sauvegardes' }] },
      { label: 'IA', items: [{ name: 'Relances, support, alertes, résumé du jour', sub: 'en arabe, français et darija, sur vos données' }] },
    ], caption: 'Figure 3 · Fin 2027, le patron ne sait plus tout de tête : il lit le résumé du jour, et les trois couches du dessous l’ont produit.', alt: 'Cinq couches : clients (WhatsApp Business, application de commande), équipe (application terrain, back-office), argent (encaissement électronique, facture et relances), données (une base), IA.' },
    timeline: { title: 'Douze mois, trimestre par trimestre', unit: 'mois', items: [
      { label: 'T1 · Encaisser et facturer', note: 'web-marchand, facture conforme, règles WhatsApp, un registre', from: 0, to: 3 },
      { label: 'Dossier web-marchand', note: 'lancé en janvier, carte acceptée au plus tard en avril', from: 0, to: 4 },
      { label: 'T2 · Le flux qui perd de l’argent', note: 'cadrage, développement, mise en service du flux choisi', from: 3, to: 6 },
      { label: 'T3 · Équipe et client', note: 'application terrain, back-office, application client pilote', from: 6, to: 9 },
      { label: 'T4 · IA et bilan', note: 'relances et support IA ; part d’encaissement électronique mesurée', from: 9, to: 12, accent: true },
    ], caption: 'Figure 4 · Chaque trimestre livre quelque chose que l’entreprise utilise le lendemain. Rien n’attend décembre.', alt: 'Calendrier en mois : T1 encaissement 0 à 3, dossier web-marchand 0 à 4, T2 flux 3 à 6, T3 équipe et client 6 à 9, T4 IA et bilan 9 à 12.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Algerian SME', title: ['Digitising an SME', 'in Algeria in 2027:', 'where to start, in what order.'], subtitle: 'The four steps in the right order, what to buy by subscription and what to build, the full stack, and the quarter-by-quarter roadmap.', left: { label: 'January 2027', sub: 'WhatsApp, Excel, notebook, cash, the owner who knows everything' }, right: { label: 'December 2027', sub: 'traced collection, one flow under control, an equipped team, AI that follows up' }, note: 'Algeria · 2027' },
    order: { title: 'The four steps, in the order they pay', items: [
      { n: 'Q1', label: 'Collect and invoice', sub: 'CIB/Edahabia card, QR, compliant invoice, reminders. The 2027 finance bill rewards electronic collection.', accent: true },
      { n: 'Q2', label: 'The flow that loses money', sub: 'Orders, stock or field: one flow only, the one that costs every month, equipped end to end.' },
      { n: 'Q3', label: 'The team and the customer', sub: 'Web back-office, field mobile app, then an ordering app or site for the customer.' },
      { n: 'Q4', label: 'AI on top', sub: 'Reminders, support in Arabic and French, alerts, daily summary. It needs the data of the first three steps.' },
    ], caption: 'Figure 1 · The order is not negotiable: AI first has nothing to read, a customer app first has nothing to deliver.', alt: 'Four quarterly steps: collect and invoice, the flow that loses money, the team and the customer, AI on top.' },
    buy: { title: 'What to buy by subscription, and what to build', columns: ['Existing software', 'Custom'], rows: [
      { label: 'Accounting, payroll, filings', cells: ['Always: your accountant already has one', 'Never'] },
      { label: 'Point-of-sale till', cells: ['One site, standard products', 'Several sites, kitchen, delivery, loyalty linked'] },
      { label: 'Invoicing and reminders', cells: ['A few invoices a month', 'Hundreds, with schedule and online payment built in'] },
      { label: 'Orders and delivery', cells: ['Under twenty orders a day, on WhatsApp', 'Beyond: confirmation, couriers, returns, numbers by wilaya'] },
      { label: 'Multi-warehouse stock and expiry', cells: ['One warehouse, no dates', 'Several warehouses, batches, dates, transfers'] },
      { label: 'Field staff, technicians, couriers', cells: ['Rarely suited to the Algerian field', 'Offline app, clock-in, rounds, proof'] },
      { label: 'Customer ordering app or site', cells: ['Showcase site, simple booking', 'As soon as the customer pays or tracks something'] },
    ], caption: 'Figure 2 · The rule: what is identical in every company is bought; what makes your trade is built.', alt: 'Matrix by function between existing subscription software and custom: accounting, till, invoicing, orders, stock, field, customer app.' },
    stack: { title: 'The stack of a digitised SME at the end of 2027', layers: [
      { label: 'Customers', items: [{ name: 'WhatsApp Business, kept', sub: 'one company number, template replies, hours' }, { name: 'Ordering app or site', sub: 'order, tracking, payment, in Arabic and French', accent: true }] },
      { label: 'Team', items: [{ name: 'Field mobile app', sub: 'offline, clock-in, rounds, photos' }, { name: 'Web back-office', sub: 'orders, stock, customers, the owner’s dashboard' }] },
      { label: 'Money', items: [{ name: 'Electronic collection', sub: 'CIB/Edahabia, QR DZMobPay, recorded cash' }, { name: 'Compliant invoice and reminders', sub: 'VAT, numbering, schedule, follow-ups' }] },
      { label: 'Data', items: [{ name: 'One single base', sub: 'customers, products, orders; Law 18-07 hosting, backups' }] },
      { label: 'AI', items: [{ name: 'Reminders, support, alerts, daily summary', sub: 'in Arabic, French and darija, on your data' }] },
    ], caption: 'Figure 3 · At the end of 2027 the owner no longer knows everything by heart: they read the daily summary, and the three layers below produced it.', alt: 'Five layers: customers (WhatsApp Business, ordering app), team (field app, back-office), money (electronic collection, invoice and reminders), data (one base), AI.' },
    timeline: { title: 'Twelve months, quarter by quarter', unit: 'months', items: [
      { label: 'Q1 · Collect and invoice', note: 'merchant status, compliant invoice, WhatsApp rules, one register', from: 0, to: 3 },
      { label: 'Merchant file', note: 'started in January, cards accepted by April at the latest', from: 0, to: 4 },
      { label: 'Q2 · The flow that loses money', note: 'scoping, development, go-live of the chosen flow', from: 3, to: 6 },
      { label: 'Q3 · Team and customer', note: 'field app, back-office, pilot customer app', from: 6, to: 9 },
      { label: 'Q4 · AI and review', note: 'AI reminders and support; share of electronic collection measured', from: 9, to: 12, accent: true },
    ], caption: 'Figure 4 · Each quarter delivers something the company uses the next day. Nothing waits for December.', alt: 'Timeline in months: Q1 collection 0 to 3, merchant file 0 to 4, Q2 flow 3 to 6, Q3 team and customer 6 to 9, Q4 AI and review 9 to 12.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · مؤسسة جزائرية صغيرة أو متوسطة', title: ['رقمنة مؤسسة صغيرة', 'في الجزائر سنة 2027:', 'من أين تبدأ وبأي ترتيب.'], subtitle: 'المراحل الأربع بالترتيب الصحيح، ما يُشترى بالاشتراك وما يُبنى، الطبقات الكاملة، وخارطة الطريق فصلاً بفصل.', left: { label: 'جانفي 2027', sub: 'واتساب، إكسل، دفتر، نقد، المسيّر الذي يعرف كل شيء' }, right: { label: 'ديسمبر 2027', sub: 'تحصيل متتبَّع، تدفق واحد مضبوط، فريق مجهَّز، ذكاء اصطناعي يذكّر' }, note: 'الجزائر · 2027' },
    order: { title: 'المراحل الأربع بالترتيب الذي تؤتي فيه ثمارها', items: [
      { n: 'الفصل 1', label: 'التحصيل والفوترة', sub: 'بطاقة CIB/الذهبية، QR، فاتورة مطابقة، تذكيرات. مشروع قانون المالية 2027 يكافئ التحصيل الإلكتروني.', accent: true },
      { n: 'الفصل 2', label: 'التدفق الذي يخسر المال', sub: 'طلبات أو مخزون أو ميدان: تدفق واحد فقط، الذي يكلّف كل شهر، مجهَّز حتى النهاية.' },
      { n: 'الفصل 3', label: 'الفريق والزبون', sub: 'مكتب خلفي ويب، تطبيق جوّال ميداني، ثم تطبيق أو موقع طلب للزبون.' },
      { n: 'الفصل 4', label: 'الذكاء الاصطناعي فوق ذلك', sub: 'تذكيرات، دعم بالعربية والفرنسية، تنبيهات، ملخص اليوم. يحتاج بيانات المراحل الثلاث.' },
    ], caption: 'الشكل 1 · الترتيب غير قابل للتفاوض: الذكاء الاصطناعي أولاً لا يجد ما يقرأ، وتطبيق الزبون أولاً لا يجد ما يسلّم.', alt: 'أربع مراحل فصلية لرقمنة مؤسسة صغيرة.' },
    buy: { title: 'ما يُشترى بالاشتراك، وما يُبنى', columns: ['برنامج جاهز', 'مخصص'], rows: [
      { label: 'المحاسبة، الأجور، التصريحات', cells: ['دائماً: محاسبك يملك واحداً أصلاً', 'أبداً'] },
      { label: 'صندوق نقطة بيع', cells: ['موقع واحد، منتجات قياسية', 'عدة مواقع، مطبخ، توصيل، ولاء مترابطة'] },
      { label: 'الفوترة والتذكيرات', cells: ['بضع فواتير في الشهر', 'المئات، بجدول استحقاقات ودفع إلكتروني مدمج'] },
      { label: 'الطلبات والتوصيل', cells: ['أقل من عشرين طلباً يومياً على واتساب', 'فوق ذلك: تأكيد، موصّلون، مرتجعات، أرقام حسب الولاية'] },
      { label: 'مخزون متعدد المستودعات وصلاحية', cells: ['مستودع واحد، بلا تواريخ', 'عدة مستودعات، دفعات، تواريخ، تحويلات'] },
      { label: 'موظفو الميدان، تقنيون، موصّلون', cells: ['نادراً ما يناسب الميدان الجزائري', 'تطبيق دون اتصال، تسجيل حضور، جولات، إثباتات'] },
      { label: 'تطبيق أو موقع طلب للزبون', cells: ['موقع تعريفي، حجز بسيط', 'بمجرد أن يدفع الزبون أو يتابع شيئاً'] },
    ], caption: 'الشكل 2 · القاعدة: ما هو متطابق في كل الشركات يُشترى؛ وما يصنع مهنتك يُبنى.', alt: 'مصفوفة حسب الوظيفة بين برنامج جاهز بالاشتراك ومخصص.' },
    stack: { title: 'طبقات مؤسسة مرقمنة نهاية 2027', layers: [
      { label: 'الزبائن', items: [{ name: 'واتساب للأعمال، مضبوط', sub: 'رقم شركة واحد، ردود جاهزة، مواعيد' }, { name: 'تطبيق أو موقع طلب', sub: 'طلب، متابعة، دفع، بالعربية والفرنسية', accent: true }] },
      { label: 'الفريق', items: [{ name: 'تطبيق جوّال ميداني', sub: 'دون اتصال، تسجيل حضور، جولات، صور' }, { name: 'مكتب خلفي ويب', sub: 'طلبات، مخزون، زبائن، لوحة قيادة المسيّر' }] },
      { label: 'المال', items: [{ name: 'تحصيل إلكتروني', sub: 'CIB/الذهبية، QR DZMobPay، نقد مسجَّل' }, { name: 'فاتورة مطابقة وتذكيرات', sub: 'TVA، ترقيم، جدول استحقاقات، تنبيهات' }] },
      { label: 'البيانات', items: [{ name: 'قاعدة واحدة', sub: 'زبائن، منتجات، طلبات؛ استضافة القانون 18-07، نسخ احتياطية' }] },
      { label: 'الذكاء الاصطناعي', items: [{ name: 'تذكيرات، دعم، تنبيهات، ملخص اليوم', sub: 'بالعربية والفرنسية والدارجة، على بياناتك' }] },
    ], caption: 'الشكل 3 · نهاية 2027 لم يعد المسيّر يحفظ كل شيء في رأسه: يقرأ ملخص اليوم، والطبقات الثلاث تحته أنتجته.', alt: 'خمس طبقات لمؤسسة صغيرة مرقمنة في 2027.' },
    timeline: { title: 'اثنا عشر شهراً، فصلاً بفصل', unit: 'أشهر', items: [
      { label: 'الفصل 1 · التحصيل والفوترة', note: 'تاجر إلكتروني، فاتورة مطابقة، قواعد واتساب، سجل واحد', from: 0, to: 3 },
      { label: 'ملف التاجر الإلكتروني', note: 'يُطلق في جانفي، البطاقة مقبولة في أفريل على الأكثر', from: 0, to: 4 },
      { label: 'الفصل 2 · التدفق الذي يخسر المال', note: 'تأطير، تطوير، تشغيل التدفق المختار', from: 3, to: 6 },
      { label: 'الفصل 3 · الفريق والزبون', note: 'تطبيق ميداني، مكتب خلفي، تطبيق زبون تجريبي', from: 6, to: 9 },
      { label: 'الفصل 4 · الذكاء الاصطناعي والحصيلة', note: 'تذكيرات ودعم بالذكاء الاصطناعي؛ قياس حصة التحصيل الإلكتروني', from: 9, to: 12, accent: true },
    ], caption: 'الشكل 4 · كل فصل يسلّم شيئاً تستعمله المؤسسة في اليوم التالي. لا شيء ينتظر ديسمبر.', alt: 'جدول زمني بالأشهر لرقمنة مؤسسة صغيرة خلال 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      order: { svg: steps({ title: t.order.title, steps: t.order.items, arrows: true, rtl }), caption: t.order.caption, alt: t.order.alt },
      buy: { svg: matrix({ title: t.buy.title, columns: t.buy.columns, rows: t.buy.rows, rtl }), caption: t.buy.caption, alt: t.buy.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 12, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
