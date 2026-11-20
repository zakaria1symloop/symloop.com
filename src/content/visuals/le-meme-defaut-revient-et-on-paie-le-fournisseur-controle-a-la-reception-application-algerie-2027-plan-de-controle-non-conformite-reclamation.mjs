import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { inspection, scorecard, STRINGS as QC } from './custom/quality.mjs';
export const slug = 'le-meme-defaut-revient-et-on-paie-le-fournisseur-controle-a-la-reception-application-algerie-2027-plan-de-controle-non-conformite-reclamation';
const T = {
  fr: {
    cover: { eyebrow: 'Contrôle à la réception · Non-conformité · Fournisseurs · 2027', title: ['« Le même défaut revient,', 'et on paie le fournisseur »'], subtitle: 'Ce qu’on construit pour contrôler ce qui entre : plan écrit, échantillon, verdict calculé, facture bloquée', left: { label: 'Un carton ouvert au hasard', sub: 'et une facture payée quand même' }, right: { label: 'Un plan, un échantillon, un verdict', sub: 'une réclamation liée à la ligne, une facture bloquée' } },
    couches: { title: 'Le contrôle à la réception, en cinq couches', layers: [
      { label: 'Plan de contrôle', items: [{ name: 'Par produit ou famille : quoi vérifier, échantillon, nombre de défauts admis, mesures et tolérances ; écrit et versionné', sub: 'une table ou une décision du responsable qualité, pas du magasinier' }] },
      { label: 'Réception contrôlée', items: [{ name: 'Checklist générée depuis le plan, constats saisis et photographiés hors ligne, mesures comparées aux tolérances, verdict calculé', sub: 'le lot entre en quarantaine tant que le verdict n’est pas rendu', accent: true }] },
      { label: 'Non-conformité', items: [{ name: 'Fiche par incident : défaut codé, gravité, quantité, photos, lot, ligne de commande ; décision signée : accepter, dérogation, tri, retour', sub: 'un seul état à la fois, de ouverte à clôturée' }] },
      { label: 'Réclamation et facture', items: [{ name: 'Réclamation numérotée envoyée au fournisseur, délai mesuré, avoir ou remplacement attendu ; facture bloquée au rapprochement', sub: 'on ne paie pas ce qu’on conteste' }] },
      { label: 'Mesure', items: [{ name: 'Taux de non-conformité par fournisseur et produit, défauts récurrents, délai de clôture, niveau de contrôle qui suit le taux', sub: 'le tableau se lit avant la prochaine commande' }] },
    ], caption: 'Figure 1 · La couche accentuée est la réception contrôlée : la checklist vient du plan, les constats sont saisis et photographiés, et le verdict est calculé, pas senti. Le plan au-dessus est écrit avant la livraison ; la non-conformité, la réclamation et la facture bloquée en dessous ne sont que les conséquences d’un verdict négatif, liées à la ligne de commande.', alt: 'Cinq couches : plan de contrôle, réception contrôlée (accentuée), non-conformité, réclamation et facture, mesure.' },
    reception: { caption: 'Figure 2 · Une réception de 1 200 bouteilles le 11 novembre. Le plan écrit par le responsable qualité dit : 32 unités en échantillon, au plus 2 défauts majeurs, cinq mesures de diamètre, dix tests de fuite. Le magasinier saisit ce qu’il constate ; l’application compte 3 défauts majeurs contre 2 admis, met le lot en quarantaine et ouvre la non-conformité. Le responsable qualité choisit le tri à 100 pour cent par le fournisseur, 1 164 acceptées et 36 rebutées, un avoir est demandé et la facture reste bloquée jusqu’à son arrivée. Quantités, mesures et règles sont un exemple construit.' },
    fournisseurs: { caption: 'Figure 3 · Le tableau fournisseurs sur 90 jours : réceptions, taux de non-conformité contre un seuil de 10 pour cent, réclamations ouvertes, délai médian de clôture, et le niveau de contrôle que le taux impose. Deux fournisseurs sont au-dessus du seuil et passent en contrôle à 100 pour cent ; un fournisseur sans défaut depuis 22 réceptions passe en contrôle réduit, une réception sur trois. Le tableau se lit avant la prochaine commande, pas après la prochaine panne. Fournisseurs, taux et seuils sont un exemple construit.' },
    traiter: { title: 'Traiter une non-conformité, en six temps', items: [
      { label: 'Constater', sub: 'défaut codé, gravité, quantité touchée, photos, mesures' },
      { label: 'Isoler', sub: 'lot ou unités en quarantaine ; aucune sortie possible' },
      { label: 'Décider', sub: 'accepter, dérogation, tri, retour ; signé par qui en a le droit', accent: true },
      { label: 'Réclamer', sub: 'réclamation numérotée au fournisseur, liée à la ligne et au lot' },
      { label: 'Bloquer la facture', sub: 'rapprochement en attente ; avoir ou remplacement attendu' },
      { label: 'Clôturer et mesurer', sub: 'délai, coût, défaut compté sur le fournisseur et le produit' },
    ], caption: 'Figure 4 · L’étape accentuée est la décision : elle est prise par le responsable qualité, pas par le magasinier, parmi quatre options écrites, et elle est signée. Avant elle, les constats et la quarantaine ; après elle, la réclamation, la facture bloquée et la mesure, toutes liées à la même ligne de commande et au même lot.', alt: 'Six temps : constater, isoler, décider (accentué), réclamer, bloquer la facture, clôturer et mesurer.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le même défaut revient chaque mois', cells: ['Personne ne compte ; on râle au téléphone', 'défaut codé par réception ; récurrence par fournisseur et produit au tableau'] },
      { label: 'On a payé la facture avant de voir le défaut', cells: ['L’avoir se négocie pendant des mois', 'facture bloquée tant qu’une non-conformité est ouverte sur la ligne'] },
      { label: 'Le magasinier a accepté pour ne pas bloquer', cells: ['Le défaut se découvre en production', 'verdict calculé depuis le plan ; décision réservée au responsable qualité'] },
      { label: 'Le fournisseur conteste', cells: ['Parole contre parole', 'photos horodatées, mesures, échantillon selon le plan, réclamation numérotée'] },
      { label: 'Trop de contrôles, la réception prend deux heures', cells: ['On contrôle tout, ou rien', 'niveau de contrôle par fournisseur : réduit, normal, renforcé, selon le taux'] },
      { label: 'Le lot douteux est parti en production', cells: ['Rappel interne impossible', 'quarantaine en base : aucun mouvement de sortie tant que le verdict n’est pas rendu'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par le défaut codé, la facture bloquée et le verdict calculé ; les trois suivantes par la preuve attachée, le niveau de contrôle par fournisseur et la quarantaine en base. Aucune ne se règle par un magasinier plus sévère.', alt: 'Matrice de six situations : défaut récurrent, facture déjà payée, acceptation par facilité, contestation, contrôles trop longs, lot douteux sorti ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Contrôler ce qui entre en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'quels produits sont contrôlés, plans par famille, échantillons et défauts admis, gravités, qui décide, seuil de passage en renforcé ; avec le responsable qualité', from: 0, to: 1 },
      { label: 'Plan et réception', note: 'plans versionnés, checklist générée, constats et photos hors ligne, mesures contre tolérances, verdict calculé, quarantaine', from: 1, to: 3, accent: true },
      { label: 'Non-conformité', note: 'fiche par incident, défaut codé, décision signée parmi quatre options, états', from: 3, to: 4 },
      { label: 'Réclamation et facture', note: 'réclamation numérotée, envoi au fournisseur, délai mesuré, blocage au rapprochement, avoir ou remplacement', from: 4, to: 5 },
      { label: 'Niveaux de contrôle', note: 'réduit, normal, renforcé par fournisseur et produit selon le taux ; règles de passage', from: 5, to: 6 },
      { label: 'Mesure', note: 'taux par fournisseur et produit, défauts récurrents, délai de clôture, coût de non-qualité, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : quels produits contrôler, avec quel échantillon et quel nombre admis, et qui décide, sont des décisions du responsable qualité. Les deux semaines accentuées sont le plan et la réception, parce que la non-conformité, la réclamation et le tableau ne sont que des lectures d’un verdict rendu à l’entrée.', alt: 'Frise de sept semaines : règles, plan et réception (accentué, deux semaines), non-conformité, réclamation et facture, niveaux de contrôle, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Incoming inspection · Non-conformity · Suppliers · 2027', title: ['“The same defect comes back,', 'and we pay the supplier”'], subtitle: 'What gets built to check what comes in: written plan, sample, computed verdict, blocked invoice', left: { label: 'A box opened at random', sub: 'and an invoice paid anyway' }, right: { label: 'A plan, a sample, a verdict', sub: 'a claim linked to the line, a blocked invoice' } },
    couches: { title: 'Incoming inspection, in five layers', layers: [
      { label: 'Control plan', items: [{ name: 'Per product or family: what to check, sample, allowed defects, measurements and tolerances; written and versioned', sub: 'a table or a quality lead’s decision, not the storekeeper’s' }] },
      { label: 'Controlled reception', items: [{ name: 'Checklist generated from the plan, findings entered and photographed offline, measurements against tolerances, computed verdict', sub: 'the lot stays in quarantine until the verdict is given', accent: true }] },
      { label: 'Non-conformity', items: [{ name: 'One record per incident: coded defect, severity, quantity, photos, lot, order line; signed decision: accept, waiver, sorting, return', sub: 'one state at a time, from open to closed' }] },
      { label: 'Claim and invoice', items: [{ name: 'Numbered claim sent to the supplier, measured delay, credit note or replacement expected; invoice blocked at matching', sub: 'what is disputed is not paid' }] },
      { label: 'Measurement', items: [{ name: 'Non-conformity rate per supplier and product, recurring defects, closing time, inspection level that follows the rate', sub: 'the board is read before the next order' }] },
    ], caption: 'Figure 1 · The accented layer is the controlled reception: the checklist comes from the plan, findings are entered and photographed, and the verdict is computed, not felt. The plan above is written before the delivery; the non-conformity, the claim and the blocked invoice below are only the consequences of a negative verdict, linked to the order line.', alt: 'Five layers: control plan, controlled reception (accented), non-conformity, claim and invoice, measurement.' },
    reception: { caption: 'Figure 2 · A reception of 1,200 bottles on 11 November. The plan written by the quality lead says: 32 units sampled, at most 2 major defects, five diameter measurements, ten leak tests. The storekeeper enters what he finds; the application counts 3 major defects against 2 allowed, puts the lot in quarantine and opens the non-conformity. The quality lead chooses 100 percent sorting by the supplier, 1,164 accepted and 36 scrapped, a credit note is requested and the invoice stays blocked until it arrives. Quantities, measurements and rules are a constructed example.' },
    fournisseurs: { caption: 'Figure 3 · The supplier board over 90 days: receptions, non-conformity rate against a 10 percent threshold, open claims, median closing time, and the inspection level the rate imposes. Two suppliers are above the threshold and move to 100 percent inspection; a supplier with no defect in 22 receptions moves to reduced inspection, one reception in three. The board is read before the next order, not after the next breakdown. Suppliers, rates and thresholds are a constructed example.' },
    traiter: { title: 'Handling a non-conformity, in six beats', items: [
      { label: 'Record', sub: 'coded defect, severity, quantity affected, photos, measurements' },
      { label: 'Isolate', sub: 'lot or units in quarantine; no issue possible' },
      { label: 'Decide', sub: 'accept, waiver, sorting, return; signed by whoever has the right', accent: true },
      { label: 'Claim', sub: 'numbered claim to the supplier, linked to the line and the lot' },
      { label: 'Block the invoice', sub: 'matching on hold; credit note or replacement expected' },
      { label: 'Close and measure', sub: 'delay, cost, defect counted against supplier and product' },
    ], caption: 'Figure 4 · The accented beat is the decision: it is taken by the quality lead, not the storekeeper, among four written options, and it is signed. Before it, the findings and the quarantine; after it, the claim, the blocked invoice and the measurement, all linked to the same order line and the same lot.', alt: 'Six beats: record, isolate, decide (accented), claim, block the invoice, close and measure.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The same defect comes back every month', cells: ['Nobody counts; complaints by phone', 'defect coded per reception; recurrence per supplier and product on the board'] },
      { label: 'The invoice was paid before the defect was seen', cells: ['The credit note is negotiated for months', 'invoice blocked while a non-conformity is open on the line'] },
      { label: 'The storekeeper accepted to avoid blocking', cells: ['The defect is found in production', 'verdict computed from the plan; decision reserved to the quality lead'] },
      { label: 'The supplier disputes', cells: ['Word against word', 'timestamped photos, measurements, sample per plan, numbered claim'] },
      { label: 'Too many checks, reception takes two hours', cells: ['Everything is checked, or nothing', 'inspection level per supplier: reduced, normal, tightened, by rate'] },
      { label: 'The doubtful lot went into production', cells: ['Internal recall impossible', 'quarantine in the database: no issue movement until the verdict is given'] },
    ], caption: 'Figure 5 · The first three rows are settled by the coded defect, the blocked invoice and the computed verdict; the next three by attached evidence, the inspection level per supplier and quarantine in the database. None is settled by a stricter storekeeper.', alt: 'Matrix of six situations: recurring defect, invoice already paid, acceptance for convenience, dispute, checks too long, doubtful lot issued; what happens and what the application does.' },
    calendrier: { title: 'Checking what comes in, in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'which products are checked, plans per family, samples and allowed defects, severities, who decides, threshold for tightened inspection; with the quality lead', from: 0, to: 1 },
      { label: 'Plan and reception', note: 'versioned plans, generated checklist, findings and photos offline, measurements against tolerances, computed verdict, quarantine', from: 1, to: 3, accent: true },
      { label: 'Non-conformity', note: 'one record per incident, coded defect, signed decision among four options, states', from: 3, to: 4 },
      { label: 'Claim and invoice', note: 'numbered claim, sent to the supplier, measured delay, block at matching, credit note or replacement', from: 4, to: 5 },
      { label: 'Inspection levels', note: 'reduced, normal, tightened per supplier and product by rate; switching rules', from: 5, to: 6 },
      { label: 'Measurement', note: 'rate per supplier and product, recurring defects, closing time, cost of non-quality, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: which products to check, with which sample and allowed number, and who decides, are the quality lead’s decisions. The two accented weeks are the plan and the reception, because the non-conformity, the claim and the board are only readings of a verdict given at the door.', alt: 'Seven-week timeline: rules, plan and reception (accented, two weeks), non-conformity, claim and invoice, inspection levels, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'مراقبة الاستلام · عدم مطابقة · موردون · 2027', title: ['«العيب نفسه يعود،', 'وندفع للمورد»'], subtitle: 'ما يُبنى لمراقبة ما يدخل: خطة مكتوبة، عيّنة، حكم محسوب، فاتورة محجوزة', left: { label: 'كرتونة تُفتح عشوائياً', sub: 'وفاتورة تُدفع على أي حال' }, right: { label: 'خطة، عيّنة، حكم', sub: 'مطالبة مرتبطة بالسطر، وفاتورة محجوزة' } },
    couches: { title: 'مراقبة الاستلام، في خمس طبقات', layers: [
      { label: 'خطة المراقبة', items: [{ name: 'لكل منتج أو عائلة: ما يُفحص، العيّنة، العيوب المسموحة، القياسات والسماحيات؛ مكتوبة ومرقَّمة بالإصدار', sub: 'جدول أو قرار مسؤول الجودة، لا أمين المخزن' }] },
      { label: 'استلام مراقَب', items: [{ name: 'قائمة فحص مولَّدة من الخطة، معاينات تُدخل وتُصوَّر دون اتصال، قياسات مقابل السماحيات، حكم محسوب', sub: 'الدفعة في الحجر حتى يصدر الحكم', accent: true }] },
      { label: 'عدم المطابقة', items: [{ name: 'بطاقة لكل حادثة: عيب مرمَّز، خطورة، كمية، صور، دفعة، سطر طلبية؛ قرار موقَّع: قبول، استثناء، فرز، إرجاع', sub: 'حالة واحدة في كل مرة، من مفتوحة إلى مغلقة' }] },
      { label: 'المطالبة والفاتورة', items: [{ name: 'مطالبة مرقَّمة تُرسل للمورد، مهلة مقيسة، إشعار دائن أو استبدال متوقع؛ فاتورة محجوزة عند المطابقة', sub: 'لا يُدفع ما يُنازَع فيه' }] },
      { label: 'القياس', items: [{ name: 'نسبة عدم المطابقة لكل مورد ومنتج، عيوب متكررة، مهلة الإغلاق، مستوى مراقبة يتبع النسبة', sub: 'اللوحة تُقرأ قبل الطلبية التالية' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي الاستلام المراقَب: قائمة الفحص من الخطة، والمعاينات تُدخل وتُصوَّر، والحكم يُحسب لا يُحَس. والخطة فوقها تُكتب قبل التسليم؛ وعدم المطابقة والمطالبة والفاتورة المحجوزة تحتها مجرد نتائج لحكم سلبي، مرتبطة بسطر الطلبية.', alt: 'خمس طبقات: خطة المراقبة، استلام مراقَب (مميزة)، عدم المطابقة، المطالبة والفاتورة، القياس.' },
    reception: { caption: 'الشكل 2 · استلام 1,200 قارورة في 11 نوفمبر. الخطة التي كتبها مسؤول الجودة تقول: 32 وحدة في العيّنة، عيبان كبيران على الأكثر، خمسة قياسات قطر، عشرة اختبارات تسرب. يدخل أمين المخزن ما يعاينه؛ ويعدّ التطبيق 3 عيوب كبرى مقابل 2 مسموح، ويضع الدفعة في الحجر ويفتح عدم المطابقة. ويختار مسؤول الجودة الفرز 100 بالمائة من المورد، 1,164 مقبولة و36 تالفة، ويُطلب إشعار دائن وتبقى الفاتورة محجوزة حتى وصوله. والكميات والقياسات والقواعد مثال مبني.' },
    fournisseurs: { caption: 'الشكل 3 · لوحة الموردين على 90 يوماً: الاستلامات، نسبة عدم المطابقة مقابل عتبة 10 بالمائة، المطالبات المفتوحة، مهلة الإغلاق الوسيطة، ومستوى المراقبة الذي تفرضه النسبة. موردان فوق العتبة ينتقلان إلى مراقبة 100 بالمائة؛ ومورد بلا عيب منذ 22 استلاماً ينتقل إلى مراقبة مخففة، استلام من ثلاثة. واللوحة تُقرأ قبل الطلبية التالية لا بعد العطل التالي. والموردون والنسب والعتبات مثال مبني.' },
    traiter: { title: 'معالجة عدم مطابقة، في ستة أوقات', items: [
      { label: 'المعاينة', sub: 'عيب مرمَّز، خطورة، كمية متأثرة، صور، قياسات' },
      { label: 'العزل', sub: 'دفعة أو وحدات في الحجر؛ لا خروج ممكن' },
      { label: 'القرار', sub: 'قبول، استثناء، فرز، إرجاع؛ موقَّع ممن يحق له', accent: true },
      { label: 'المطالبة', sub: 'مطالبة مرقَّمة للمورد، مرتبطة بالسطر والدفعة' },
      { label: 'حجز الفاتورة', sub: 'المطابقة معلَّقة؛ إشعار دائن أو استبدال متوقع' },
      { label: 'الإغلاق والقياس', sub: 'مهلة، كلفة، عيب يُحسب على المورد والمنتج' },
    ], caption: 'الشكل 4 · الوقت المميز هو القرار: يتخذه مسؤول الجودة لا أمين المخزن، من بين أربعة خيارات مكتوبة، ويُوقَّع. وقبله المعاينات والحجر؛ وبعده المطالبة والفاتورة المحجوزة والقياس، كلها مرتبطة بسطر الطلبية نفسه والدفعة نفسها.', alt: 'ستة أوقات: المعاينة، العزل، القرار (مميز)، المطالبة، حجز الفاتورة، الإغلاق والقياس.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'العيب نفسه يعود كل شهر', cells: ['لا أحد يعدّ؛ تذمر بالهاتف', 'عيب مرمَّز لكل استلام؛ تكرار لكل مورد ومنتج في اللوحة'] },
      { label: 'دُفعت الفاتورة قبل رؤية العيب', cells: ['الإشعار الدائن يُفاوَض شهوراً', 'فاتورة محجوزة ما دامت عدم مطابقة مفتوحة على السطر'] },
      { label: 'قبل أمين المخزن كي لا يعطّل', cells: ['يُكتشف العيب في الإنتاج', 'حكم محسوب من الخطة؛ القرار محفوظ لمسؤول الجودة'] },
      { label: 'المورد ينازع', cells: ['كلام مقابل كلام', 'صور موقَّتة، قياسات، عيّنة وفق الخطة، مطالبة مرقَّمة'] },
      { label: 'مراقبات كثيرة، الاستلام يأخذ ساعتين', cells: ['يُراقَب كل شيء أو لا شيء', 'مستوى مراقبة لكل مورد: مخففة، عادية، مشددة، بحسب النسبة'] },
      { label: 'الدفعة المشكوك فيها ذهبت إلى الإنتاج', cells: ['استدعاء داخلي مستحيل', 'حجر في قاعدة البيانات: لا حركة خروج حتى يصدر الحكم'] },
    ], caption: 'الشكل 5 · الأسطر الثلاثة الأولى تُحل بالعيب المرمَّز والفاتورة المحجوزة والحكم المحسوب؛ والثلاثة التالية بالدليل المرفق ومستوى المراقبة لكل مورد والحجر في قاعدة البيانات. ولا واحد يُحل بأمين مخزن أكثر صرامة.', alt: 'مصفوفة ست حالات: عيب متكرر، فاتورة مدفوعة أصلاً، قبول للتسهيل، نزاع، مراقبات طويلة، دفعة مشكوك فيها خرجت؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'مراقبة ما يدخل سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'أي منتجات تُراقَب، خطط لكل عائلة، عيّنات وعيوب مسموحة، خطورات، من يقرر، عتبة الانتقال إلى المشددة؛ مع مسؤول الجودة', from: 0, to: 1 },
      { label: 'الخطة والاستلام', note: 'خطط مرقَّمة بالإصدار، قائمة فحص مولَّدة، معاينات وصور دون اتصال، قياسات مقابل السماحيات، حكم محسوب، حجر', from: 1, to: 3, accent: true },
      { label: 'عدم المطابقة', note: 'بطاقة لكل حادثة، عيب مرمَّز، قرار موقَّع من أربعة خيارات، حالات', from: 3, to: 4 },
      { label: 'المطالبة والفاتورة', note: 'مطالبة مرقَّمة، إرسال للمورد، مهلة مقيسة، حجز عند المطابقة، إشعار دائن أو استبدال', from: 4, to: 5 },
      { label: 'مستويات المراقبة', note: 'مخففة، عادية، مشددة لكل مورد ومنتج بحسب النسبة؛ قواعد الانتقال', from: 5, to: 6 },
      { label: 'القياس', note: 'نسبة لكل مورد ومنتج، عيوب متكررة، مهلة الإغلاق، كلفة اللاجودة، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: أي منتجات تُراقَب، وبأي عيّنة وعدد مسموح، ومن يقرر، قرارات مسؤول الجودة. والأسبوعان المميزان هما الخطة والاستلام، لأن عدم المطابقة والمطالبة واللوحة مجرد قراءات لحكم صدر عند الباب.', alt: 'خط زمني من سبعة أسابيع: القواعد، الخطة والاستلام (مميز، أسبوعان)، عدم المطابقة، المطالبة والفاتورة، مستويات المراقبة، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = QC[locale] || QC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      reception: { svg: inspection(e.inspection, rtl), caption: t.reception.caption, alt: e.inspection.alt },
      fournisseurs: { svg: scorecard(e.scorecard, rtl), caption: t.fournisseurs.caption, alt: e.scorecard.alt },
      traiter: { svg: steps({ title: t.traiter.title, steps: t.traiter.items, arrows: true, rtl }), caption: t.traiter.caption, alt: t.traiter.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
