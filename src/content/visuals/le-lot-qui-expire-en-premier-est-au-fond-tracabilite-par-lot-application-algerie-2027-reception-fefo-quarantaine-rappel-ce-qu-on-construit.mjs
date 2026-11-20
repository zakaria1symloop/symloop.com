import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { fefo, recall, STRINGS as LT } from './custom/lots.mjs';
export const slug = 'le-lot-qui-expire-en-premier-est-au-fond-tracabilite-par-lot-application-algerie-2027-reception-fefo-quarantaine-rappel-ce-qu-on-construit';
const T = {
  fr: {
    cover: { eyebrow: 'Traçabilité · Lots · Péremption · 2027', title: ['« Le lot qui expire', 'en premier', 'est au fond du dépôt »'], subtitle: 'Ce qu’on construit pour tracer par lot : réception scannée, lot entité, états, sortie par date, règles par client, rappel', left: { label: 'Un carton jeté par mois', sub: 'et un rappel qui prend trois jours' }, right: { label: 'Un lot sur chaque mouvement', sub: 'et un rappel en quatorze minutes' } },
    reception: { title: 'Recevoir un lot correctement, en six étapes', items: [
      { label: 'Scanner le carton', sub: 'GS1-128 : produit (01), lot (10), date (17) lus d’un coup' },
      { label: 'Créer ou retrouver le lot', sub: 'un lot = produit + numéro fournisseur ; une date par lot, jamais deux' },
      { label: 'Compter et rapprocher', sub: 'quantité reçue contre la commande ; écart noté, pas corrigé en silence' },
      { label: 'Décider l’état', sub: 'disponible, ou quarantaine si contrôle requis par la catégorie', accent: true },
      { label: 'Ranger et étiqueter', sub: 'emplacement par lot ; étiquette interne si le carton n’a pas de code' },
      { label: 'Écrire le mouvement', sub: 'entrée datée : produit, lot, quantité, emplacement, auteur' },
    ], caption: 'Figure 1 · L’étape accentuée est celle que les fichiers oublient : un lot a un état, et un lot en quarantaine existe en stock sans être disponible pour personne. La première étape lit le code GS1-128 du carton quand il en porte un : le produit, le numéro de lot et la date y sont encodés sous des identificateurs normalisés ; quand il n’y en a pas, la saisie est guidée et une étiquette interne est imprimée.', alt: 'Six étapes : scanner le carton, créer ou retrouver le lot, compter et rapprocher, décider l’état (accentuée), ranger et étiqueter, écrire le mouvement.' },
    preparation: { caption: 'Figure 2 · Préparer 120 unités le 10 novembre. Quatre lots du même produit : un en quarantaine, un trop court pour la règle de durée restante de ce client, et deux conformes, à sortir dans l’ordre des dates. La proposition prend 40 du plus proche de sa date et 80 du suivant, exclut les deux autres avec la raison, et écrit deux mouvements, chacun avec son lot. Le préparateur peut changer l’ordre, mais il écrit pourquoi. Lots, dates et règle sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le lot le plus ancien est au fond', cells: ['Le neuf part, l’ancien expire ; un carton jeté par mois', 'sortie proposée par date ; emplacement par lot ; écart justifié'] },
      { label: 'Le client refuse une date trop courte', cells: ['Livraison refusée au quai ; retour, remise, relation abîmée', 'règle de durée restante par client ; lot exclu à la préparation'] },
      { label: 'Le fournisseur rappelle un lot', cells: ['Trois jours à fouiller des bons ; des clients oubliés', 'lot bloqué à la minute ; liste des clients et quantités ; retours'] },
      { label: 'Le lot n’a pas encore été contrôlé', cells: ['Il est vendu avant le résultat ; on rappelle en interne', 'état quarantaine ; invisible à la vente ; libération tracée'] },
      { label: 'Deux lots mélangés sur une étagère', cells: ['Une seule quantité, deux dates ; la mauvaise part', 'emplacement par lot ; scan du lot à la sortie ; mélange refusé'] },
      { label: 'Le client demande quel lot il a reçu', cells: ['Le bon de livraison ne le dit pas ; on devine', 'lot sur la ligne du bon et de la facture ; historique par client'] },
    ], caption: 'Figure 3 · Les trois premières lignes se règlent par la sortie par date, la règle par client et le blocage du lot ; les trois suivantes par l’état de quarantaine, l’emplacement par lot et le lot écrit sur les documents. Aucune ne se règle par un marqueur et un rayon mieux rangé.', alt: 'Matrice de six situations : lot ancien au fond, date refusée par le client, rappel fournisseur, lot non contrôlé vendu, lots mélangés, lot demandé par le client ; ce qui se passe et ce que l’application fait.' },
    rappel: { caption: 'Figure 4 · Le rappel du lot L2409A à 9 h 12. Le lot passe à l’état bloqué à 9 h 13, partout, y compris sur les terminaux hors ligne dès leur synchronisation. Le journal des mouvements répond en une requête : la réception d’origine, les deux dépôts, les sept bons de livraison et les cinq clients avec les quantités ; les messages partent, les bons de retour sont créés, le camion du matin est rappelé. Quatorze minutes, parce que chaque mouvement portait le lot. Lot, clients et minutes sont un exemple construit.' },
    couches: { title: 'La traçabilité par lot, en cinq couches', layers: [
      { label: 'Lot', items: [{ name: 'Entité : produit, numéro fournisseur, date, état, fournisseur, réception ; une seule date par lot ; aucune suppression', sub: 'le lot n’est pas un champ texte sur le mouvement' }] },
      { label: 'Mouvements', items: [{ name: 'Chaque entrée, sortie, transfert, retour nomme le lot et l’emplacement ; le stock par lot est la somme des mouvements', sub: 'la base posée dans le guide sur le stock, avec le lot obligatoire', accent: true }] },
      { label: 'États et règles', items: [{ name: 'Disponible, quarantaine, bloqué, expiré, épuisé ; durée restante minimale par client ; alertes à 90, 60, 30 jours', sub: 'une règle est écrite par le gérant, exécutée par l’application' }] },
      { label: 'Sortie par date', items: [{ name: 'Proposition de préparation par date la plus proche sous les règles du client ; changement possible, justifié ; scan du lot à la sortie', sub: 'le préparateur ne cherche plus, il confirme' }] },
      { label: 'Documents et rappel', items: [{ name: 'Lot sur la ligne du bon et de la facture ; requête de rappel : où il est, qui l’a reçu, combien ; retours liés', sub: 'quatorze minutes dans l’exemple, pas trois jours' }] },
    ], caption: 'Figure 5 · La couche accentuée est celle qui rend tout le reste possible : si un seul mouvement oublie le lot, la sortie par date ment et le rappel devient une enquête. C’est le journal du guide sur le stock, avec une colonne qui ne peut plus être vide pour les catégories suivies par lot.', alt: 'Cinq couches : lot, mouvements (accentuée), états et règles, sortie par date, documents et rappel.' },
    calendrier: { title: 'Tracer par lot en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'catégories suivies par lot, contrôle à réception ou non, durées restantes par client, seuils d’alerte ; avec le gérant et le magasinier', from: 0, to: 1 },
      { label: 'Lot et réception', note: 'entité lot, scan GS1-128 et saisie guidée, états, étiquette interne, mouvement d’entrée avec lot', from: 1, to: 3, accent: true },
      { label: 'Sortie par date', note: 'proposition de préparation, règles par client, scan du lot à la sortie, écart justifié', from: 3, to: 4 },
      { label: 'Documents', note: 'lot sur bons et factures, historique par client, alertes de péremption au gérant', from: 4, to: 5 },
      { label: 'Reprise', note: 'inventaire par lot des catégories suivies, dates saisies, lots inconnus marqués', from: 5, to: 6 },
      { label: 'Rappel et mesure', note: 'requête de rappel testée à blanc, retours liés ; pertes par péremption, refus au quai, délai de rappel', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : quelles catégories sont suivies par lot, lesquelles passent par la quarantaine, et quelles durées restantes les clients exigent. Les deux semaines accentuées sont le lot et la réception, parce qu’un lot mal reçu ne se rattrape pas à la sortie. Le rappel est testé à blanc avant d’être nécessaire.', alt: 'Frise de sept semaines : règles, lot et réception (accentué, deux semaines), sortie par date, documents, reprise, rappel et mesure.' },
  },
  en: {
    cover: { eyebrow: 'Traceability · Lots · Expiry · 2027', title: ['“The lot that expires', 'first is at the back', 'of the warehouse”'], subtitle: 'What gets built to trace by lot: scanned reception, lot entity, states, exit by date, rules per customer, recall', left: { label: 'One case thrown out a month', sub: 'and a recall that takes three days' }, right: { label: 'A lot on every movement', sub: 'and a recall in fourteen minutes' } },
    reception: { title: 'Receiving a lot properly, in six steps', items: [
      { label: 'Scan the case', sub: 'GS1-128: product (01), lot (10), date (17) read at once' },
      { label: 'Create or find the lot', sub: 'a lot = product + supplier number; one date per lot, never two' },
      { label: 'Count and match', sub: 'received quantity against the order; gap recorded, not silently corrected' },
      { label: 'Decide the state', sub: 'available, or quarantine if the category requires inspection', accent: true },
      { label: 'Put away and label', sub: 'location per lot; internal label if the case has no code' },
      { label: 'Write the movement', sub: 'dated receipt: product, lot, quantity, location, author' },
    ], caption: 'Figure 1 · The accented step is the one files forget: a lot has a state, and a quarantined lot exists in stock without being available to anyone. The first step reads the case’s GS1-128 code when it carries one: product, lot number and date are encoded under standard identifiers; when there is none, entry is guided and an internal label is printed.', alt: 'Six steps: scan the case, create or find the lot, count and match, decide the state (accented), put away and label, write the movement.' },
    preparation: { caption: 'Figure 2 · Picking 120 units on 10 November. Four lots of the same product: one in quarantine, one too short for this customer’s remaining-shelf-life rule, and two compliant, to go out in date order. The proposal takes 40 from the closest to its date and 80 from the next, excludes the other two with the reason, and writes two movements, each with its lot. The picker can change the order, but writes why. Lots, dates and rule are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The oldest lot is at the back', cells: ['The new goes out, the old expires; a case thrown out a month', 'exit proposed by date; location per lot; justified deviation'] },
      { label: 'The customer refuses a short date', cells: ['Delivery refused at the dock; return, discount, damaged relationship', 'remaining-shelf-life rule per customer; lot excluded at picking'] },
      { label: 'The supplier recalls a lot', cells: ['Three days digging through notes; customers forgotten', 'lot blocked within the minute; list of customers and quantities; returns'] },
      { label: 'The lot has not been inspected yet', cells: ['Sold before the result; internal recall', 'quarantine state; invisible to sales; traced release'] },
      { label: 'Two lots mixed on one shelf', cells: ['One quantity, two dates; the wrong one goes out', 'location per lot; lot scanned at exit; mixing refused'] },
      { label: 'The customer asks which lot they got', cells: ['The delivery note does not say; a guess', 'lot on the note and invoice line; history per customer'] },
    ], caption: 'Figure 3 · The first three rows are settled by exit by date, the rule per customer and lot blocking; the next three by the quarantine state, the location per lot and the lot written on documents. None is settled by a marker pen and a tidier shelf.', alt: 'Matrix of six situations: old lot at the back, date refused by the customer, supplier recall, uninspected lot sold, mixed lots, lot asked by the customer; what happens and what the application does.' },
    rappel: { caption: 'Figure 4 · The recall of lot L2409A at 9:12. The lot switches to blocked at 9:13, everywhere, including on offline terminals as soon as they sync. The movement ledger answers in one query: the original reception, the two depots, the seven delivery notes and the five customers with quantities; messages go out, return notes are created, the morning truck is called back. Fourteen minutes, because every movement carried the lot. Lot, customers and minutes are a constructed example.' },
    couches: { title: 'Traceability by lot, in five layers', layers: [
      { label: 'Lot', items: [{ name: 'Entity: product, supplier number, date, state, supplier, reception; one date per lot; no deletion', sub: 'the lot is not a text field on the movement' }] },
      { label: 'Movements', items: [{ name: 'Every receipt, issue, transfer, return names the lot and the location; stock per lot is the sum of movements', sub: 'the base set in the stock guide, with the lot mandatory', accent: true }] },
      { label: 'States and rules', items: [{ name: 'Available, quarantine, blocked, expired, depleted; minimum remaining shelf life per customer; alerts at 90, 60, 30 days', sub: 'a rule is written by the manager, run by the application' }] },
      { label: 'Exit by date', items: [{ name: 'Pick proposal by closest date under the customer’s rules; change allowed, justified; lot scanned at exit', sub: 'the picker no longer searches, they confirm' }] },
      { label: 'Documents and recall', items: [{ name: 'Lot on the delivery note and invoice line; recall query: where it is, who received it, how much; linked returns', sub: 'fourteen minutes in the example, not three days' }] },
    ], caption: 'Figure 5 · The accented layer is what makes everything else possible: if a single movement forgets the lot, exit by date lies and the recall becomes an investigation. It is the ledger of the stock guide, with a column that can no longer be empty for lot-tracked categories.', alt: 'Five layers: lot, movements (accented), states and rules, exit by date, documents and recall.' },
    calendrier: { title: 'Tracing by lot in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'lot-tracked categories, inspection at reception or not, remaining shelf life per customer, alert thresholds; with the manager and the storekeeper', from: 0, to: 1 },
      { label: 'Lot and reception', note: 'lot entity, GS1-128 scan and guided entry, states, internal label, receipt movement with lot', from: 1, to: 3, accent: true },
      { label: 'Exit by date', note: 'pick proposal, rules per customer, lot scanned at exit, justified deviation', from: 3, to: 4 },
      { label: 'Documents', note: 'lot on notes and invoices, history per customer, expiry alerts to the manager', from: 4, to: 5 },
      { label: 'Take-over', note: 'count by lot of tracked categories, dates entered, unknown lots flagged', from: 5, to: 6 },
      { label: 'Recall and measurement', note: 'recall query dry-run, linked returns; losses to expiry, dock refusals, recall time', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: which categories are lot-tracked, which go through quarantine, and which remaining shelf lives customers require. The two accented weeks are the lot and reception, because a badly received lot cannot be fixed at exit. The recall is dry-run before it is needed.', alt: 'Seven-week timeline: rules, lot and reception (accented, two weeks), exit by date, documents, take-over, recall and measurement.' },
  },
  ar: {
    cover: { eyebrow: 'تتبع · دفعات · صلاحية · 2027', title: ['«الدفعة التي تنتهي', 'أولاً', 'في آخر المستودع»'], subtitle: 'ما يُبنى للتتبع بالدفعة: استلام ممسوح، الدفعة كيان، حالات، خروج بالتاريخ، قواعد لكل زبون، سحب', left: { label: 'كرتون يُرمى كل شهر', sub: 'وسحب يستغرق ثلاثة أيام' }, right: { label: 'دفعة مسمّاة في كل حركة', sub: 'وسحب في أربع عشرة دقيقة' } },
    reception: { title: 'استلام دفعة على نحو صحيح، في ست خطوات', items: [
      { label: 'مسح الكرتون', sub: 'GS1-128: المنتج (01)، الدفعة (10)، التاريخ (17) دفعة واحدة' },
      { label: 'إنشاء الدفعة أو إيجادها', sub: 'الدفعة = منتج + رقم المورد؛ تاريخ واحد لكل دفعة لا اثنان' },
      { label: 'العدّ والمطابقة', sub: 'الكمية المستلَمة مقابل الطلبية؛ الفارق يُسجَّل لا يُصحَّح بصمت' },
      { label: 'تحديد الحالة', sub: 'متاحة، أو حجر إن اشترطت الفئة مراقبة', accent: true },
      { label: 'الترتيب والوسم', sub: 'موقع لكل دفعة؛ ملصق داخلي إن لم يحمل الكرتون رمزاً' },
      { label: 'كتابة الحركة', sub: 'دخول مؤرَّخ: منتج، دفعة، كمية، موقع، مؤلف' },
    ], caption: 'الشكل 1 · الخطوة المميزة هي ما تنساه الملفات: للدفعة حالة، والدفعة في الحجر موجودة في المخزون دون أن تكون متاحة لأحد. والخطوة الأولى تقرأ رمز GS1-128 على الكرتون حين يحمله: المنتج ورقم الدفعة والتاريخ مرمَّزة تحت معرّفات معيارية؛ وحين لا يوجد، يكون الإدخال موجَّهاً ويُطبع ملصق داخلي.', alt: 'ست خطوات: مسح الكرتون، إنشاء الدفعة أو إيجادها، العدّ والمطابقة، تحديد الحالة (مميزة)، الترتيب والوسم، كتابة الحركة.' },
    preparation: { caption: 'الشكل 2 · تحضير 120 وحدة في 10 نوفمبر. أربع دفعات من المنتج نفسه: واحدة في الحجر، وواحدة أقصر من قاعدة المدة المتبقية لهذا الزبون، واثنتان مطابقتان تخرجان بترتيب التواريخ. يأخذ الاقتراح 40 من الأقرب إلى تاريخها و80 من التالية، ويستبعد الأخريين مع السبب، ويكتب حركتين كل منهما بدفعتها. ويستطيع المحضّر تغيير الترتيب لكنه يكتب السبب. والدفعات والتواريخ والقاعدة مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الدفعة الأقدم في الآخر', cells: ['الجديد يخرج والقديم ينتهي؛ كرتون يُرمى كل شهر', 'خروج مقترح بالتاريخ؛ موقع لكل دفعة؛ انحراف مبرَّر'] },
      { label: 'الزبون يرفض تاريخاً قصيراً', cells: ['تسليم مرفوض على الرصيف؛ إرجاع، خصم، علاقة متضررة', 'قاعدة مدة متبقية لكل زبون؛ الدفعة مستبعَدة عند التحضير'] },
      { label: 'المورد يسحب دفعة', cells: ['ثلاثة أيام من التنقيب في الوصول؛ زبائن منسيون', 'الدفعة محجوبة في الدقيقة؛ قائمة الزبائن والكميات؛ إرجاعات'] },
      { label: 'الدفعة لم تُراقَب بعد', cells: ['تُباع قبل النتيجة؛ سحب داخلي', 'حالة حجر؛ غير مرئية للبيع؛ إفراج متتبَّع'] },
      { label: 'دفعتان مختلطتان على رف', cells: ['كمية واحدة وتاريخان؛ الخطأ يخرج', 'موقع لكل دفعة؛ مسح الدفعة عند الخروج؛ الخلط مرفوض'] },
      { label: 'الزبون يسأل أي دفعة استلم', cells: ['وصل التسليم لا يقول؛ نخمّن', 'الدفعة على سطر الوصل والفاتورة؛ تاريخ لكل زبون'] },
    ], caption: 'الشكل 3 · الأسطر الثلاثة الأولى تُحل بالخروج بالتاريخ والقاعدة لكل زبون وحجب الدفعة؛ والثلاثة التالية بحالة الحجر والموقع لكل دفعة والدفعة المكتوبة على المستندات. ولا واحد يُحل بقلم تعليم ورف أحسن ترتيباً.', alt: 'مصفوفة ست حالات: دفعة قديمة في الآخر، تاريخ يرفضه الزبون، سحب من المورد، دفعة غير مراقَبة تُباع، دفعات مختلطة، دفعة يسأل عنها الزبون؛ ما يحدث وما يفعله التطبيق.' },
    rappel: { caption: 'الشكل 4 · سحب الدفعة L2409A عند 09:12. تتحول الدفعة إلى محجوبة عند 09:13 في كل مكان، حتى على الأجهزة دون اتصال فور مزامنتها. ويجيب سجل الحركات باستعلام واحد: الاستلام الأصلي، والمستودعان، ووصول التسليم السبعة، والزبائن الخمسة بالكميات؛ تخرج الرسائل، وتُنشأ وصول الإرجاع، وتُعاد شاحنة الصباح. أربع عشرة دقيقة لأن كل حركة كانت تحمل الدفعة. والدفعة والزبائن والدقائق مثال مبني.' },
    couches: { title: 'التتبع بالدفعة، في خمس طبقات', layers: [
      { label: 'الدفعة', items: [{ name: 'كيان: منتج، رقم المورد، تاريخ، حالة، مورد، استلام؛ تاريخ واحد لكل دفعة؛ لا حذف', sub: 'الدفعة ليست حقلاً نصياً على الحركة' }] },
      { label: 'الحركات', items: [{ name: 'كل دخول وخروج وتحويل وإرجاع يسمّي الدفعة والموقع؛ المخزون لكل دفعة مجموع الحركات', sub: 'الأساس الموضوع في دليل المخزون، مع الدفعة إلزامية', accent: true }] },
      { label: 'الحالات والقواعد', items: [{ name: 'متاحة، حجر، محجوبة، منتهية، نافدة؛ مدة متبقية دنيا لكل زبون؛ تنبيهات عند 90 و60 و30 يوماً', sub: 'القاعدة يكتبها المسيّر وينفذها التطبيق' }] },
      { label: 'الخروج بالتاريخ', items: [{ name: 'اقتراح تحضير بأقرب تاريخ تحت قواعد الزبون؛ تغيير ممكن مبرَّر؛ مسح الدفعة عند الخروج', sub: 'المحضّر لم يعد يبحث بل يؤكد' }] },
      { label: 'المستندات والسحب', items: [{ name: 'الدفعة على سطر الوصل والفاتورة؛ استعلام السحب: أين هي، من استلمها، كم؛ إرجاعات مرتبطة', sub: 'أربع عشرة دقيقة في المثال لا ثلاثة أيام' }] },
    ], caption: 'الشكل 5 · الطبقة المميزة هي ما يجعل كل ما عداها ممكناً: إن نسيت حركة واحدة الدفعة، كذب الخروج بالتاريخ وصار السحب تحقيقاً. إنه سجل دليل المخزون، مع عمود لم يعد يجوز أن يكون فارغاً للفئات المتتبَّعة بالدفعة.', alt: 'خمس طبقات: الدفعة، الحركات (مميزة)، الحالات والقواعد، الخروج بالتاريخ، المستندات والسحب.' },
    calendrier: { title: 'التتبع بالدفعة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'الفئات المتتبَّعة بالدفعة، مراقبة عند الاستلام أم لا، مدد متبقية لكل زبون، عتبات التنبيه؛ مع المسيّر وأمين المخزن', from: 0, to: 1 },
      { label: 'الدفعة والاستلام', note: 'كيان الدفعة، مسح GS1-128 وإدخال موجَّه، حالات، ملصق داخلي، حركة دخول بالدفعة', from: 1, to: 3, accent: true },
      { label: 'الخروج بالتاريخ', note: 'اقتراح تحضير، قواعد لكل زبون، مسح الدفعة عند الخروج، انحراف مبرَّر', from: 3, to: 4 },
      { label: 'المستندات', note: 'الدفعة على الوصول والفواتير، تاريخ لكل زبون، تنبيهات الصلاحية للمسيّر', from: 4, to: 5 },
      { label: 'الاستلام', note: 'جرد بالدفعة للفئات المتتبَّعة، تواريخ مُدخَلة، دفعات مجهولة موسومة', from: 5, to: 6 },
      { label: 'السحب والقياس', note: 'استعلام السحب مجرَّب على الفارغ، إرجاعات مرتبطة؛ خسائر الصلاحية، رفض الرصيف، مدة السحب', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: أي الفئات تُتتبَّع بالدفعة، وأيها يمر بالحجر، وأي مدد متبقية يشترطها الزبائن. والأسبوعان المميزان هما الدفعة والاستلام، لأن دفعة أُسيء استلامها لا تُستدرك عند الخروج. والسحب يُجرَّب على الفارغ قبل أن يلزم.', alt: 'خط زمني من سبعة أسابيع: القواعد، الدفعة والاستلام (مميز، أسبوعان)، الخروج بالتاريخ، المستندات، الاستلام، السحب والقياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = LT[locale] || LT.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      reception: { svg: steps({ title: t.reception.title, steps: t.reception.items, arrows: true, rtl }), caption: t.reception.caption, alt: t.reception.alt },
      preparation: { svg: fefo(e.fefo, rtl), caption: t.preparation.caption, alt: e.fefo.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      rappel: { svg: recall(e.recall, rtl), caption: t.rappel.caption, alt: e.recall.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
