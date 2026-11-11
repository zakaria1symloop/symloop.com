import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { ledger, count, STRINGS as SL } from './custom/stock-ledger.mjs';
export const slug = 'stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit';
const T = {
  fr: {
    cover: { eyebrow: 'Stock · Mouvements · Inventaire · 2027', title: ['« Le stock de l’application', 'ne correspond jamais', 'au stock réel »'], subtitle: 'Un journal de mouvements qu’on ne modifie jamais, un disponible distinct du physique, des réservations qui expirent, des transferts en deux temps, et un inventaire tournant qui mesure l’exactitude', left: { label: 'Un chiffre qu’on corrige', sub: 'et que personne ne peut expliquer' }, right: { label: 'Un journal qu’on additionne', sub: 'et une exactitude mesurée' } },
    mouvements: { caption: 'Figure 1 · Une journée d’un produit dans un dépôt. Le stock n’est pas un champ qu’on met à jour : c’est la somme d’une colonne de mouvements, chacun avec sa source, son auteur et son appareil. Le disponible, ce qu’on peut encore vendre ou promettre, est le physique moins les réservations ; il baisse à 9 h 12 quand le portail B2B réserve, sans qu’aucun carton ait bougé, et remonte à 16 h quand une réservation non payée expire. L’ajustement de 14 h 02 est un mouvement comme les autres, avec un motif obligatoire. Les données sont un exemple construit.' },
    couches: { title: 'Un stock juste, en cinq couches', layers: [
      { label: 'Saisie', items: [{ name: 'Lecteur ou caméra du téléphone à la réception, en caisse, au transfert, au comptage ; un mouvement daté et signé par geste', sub: 'le mouvement est écrit même sans réseau, et rejoué sans doublon grâce à son identifiant' }] },
      { label: 'Journal de mouvements', items: [{ name: 'Une table où l’on ajoute et n’efface jamais : type, quantité signée, produit, lot, emplacement, document source, auteur', sub: 'le stock de chaque produit à chaque instant est une somme ; il se recalcule depuis le journal si on en doute', accent: true }] },
      { label: 'Quantités calculées', items: [{ name: 'Physique, réservé, en transit, disponible par produit et emplacement ; vérifiés chaque nuit contre la somme du journal', sub: 'la lecture est instantanée ; la vérité reste dans le journal' }] },
      { label: 'Règles', items: [{ name: 'Réservation qui expire, transfert en deux temps avec état en transit, ajustement avec motif et droit, verrou sur le dernier carton', sub: 'la dernière règle est tenue par la base de données, pas par l’écran' }] },
      { label: 'Mesure', items: [{ name: 'Inventaire tournant par classe, écarts avec motif, exactitude du mois par dépôt, ruptures calculées sur le disponible', sub: 'un stock sans mesure d’exactitude est un stock qu’on croit sur parole' }] },
    ], caption: 'Figure 2 · La couche accentuée est celle qui rend le stock explicable : on ne « corrige » jamais la quantité, on ajoute un mouvement d’ajustement avec un motif. Les quantités de la troisième couche sont une vue de lecture ; si elles divergent du journal, c’est la vue qu’on recalcule, jamais le journal qu’on retouche.', alt: 'Cinq couches : saisie, journal de mouvements (accentué), quantités calculées, règles, mesure.' },
    etapes: { title: 'Un transfert entre deux dépôts, en six étapes', items: [
      { label: 'Préparer', sub: 'liste des produits, quantités, lots ; un numéro de transfert' },
      { label: 'Scanner la sortie', sub: 'chaque carton lu au départ ; mouvement « sortie » daté, signé' },
      { label: 'Marquer en transit', sub: 'ni dans le dépôt A, ni dans le B ; visible comme tel', accent: true },
      { label: 'Scanner l’entrée', sub: 'chaque carton lu à l’arrivée ; mouvement « entrée » dans B' },
      { label: 'Constater l’écart', sub: 'sorti 24, entré 23 : l’écart est un mouvement avec un motif' },
      { label: 'Clore le transfert', sub: 'le numéro devient définitif ; plus rien ne bouge dessus' },
    ], caption: 'Figure 3 · Le transfert est la première source de stock faux dans une entreprise à plusieurs dépôts, parce qu’il est presque toujours saisi en une seule fois, à la sortie ou à l’entrée. L’étape accentuée est celle que les applications sautent : entre le départ et l’arrivée, la marchandise n’est nulle part, et il faut un état pour le dire. La cinquième étape transforme le carton manquant en un mouvement expliqué, pas en un chiffre qui diverge.', alt: 'Six étapes : préparer, scanner la sortie, marquer en transit (accentuée), scanner l’entrée, constater l’écart, clore le transfert.' },
    inventaire: { caption: 'Figure 4 · L’inventaire tournant remplace la fermeture annuelle : les références de classe A, celles qui portent l’essentiel de la valeur, sont comptées chaque semaine, les B chaque mois, les C chaque trimestre. On compte sans voir le chiffre système, chaque écart reçoit un motif et devient un mouvement d’ajustement, et l’exactitude du mois, la part des lignes comptées justes, est suivie contre un objectif écrit. Le partage 20/80 est une règle de pratique, pas une loi ; les quantités sont un exemple construit.' },
    situations: { title: 'Six raisons d’un stock faux, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le chiffre est corrigé à la main', cells: ['Le gérant tape 66 au lieu de 68 « parce que c’est ce qu’il y a au rayon »', 'quantité non modifiable ; un ajustement de −2 avec motif, signé, entre au journal'] },
      { label: 'Vendu deux fois le dernier carton', cells: ['Deux caisses, ou la caisse et la boutique, vendent la même unité à la même seconde', 'disponible décrémenté sous verrou dans la base ; la seconde vente est refusée'] },
      { label: 'Commande en ligne jamais payée', cells: ['Le panier a bloqué 12 unités, le client n’a pas payé, le disponible reste à zéro', 'une réservation expire ; passée l’heure sans paiement, un mouvement la libère'] },
      { label: 'Transfert saisi une seule fois', cells: ['Sorti à 11 h 20, saisi à l’arrivée le lendemain ; le stock total est faux de 24', 'sortie et entrée sont deux mouvements, avec un état « en transit » entre les deux'] },
      { label: 'Réception sans réseau', cells: ['Le lecteur a scanné 48 cartons hors ligne, l’application est relancée ; 96 apparaissent', 'chaque mouvement a un identifiant créé sur l’appareil ; le serveur ignore le déjà reçu'] },
      { label: 'Le même produit sous trois codes', cells: ['Carton de 4, unité, ancien code interne ; le stock n’est juste dans aucune ligne', 'une fiche produit, unités et facteurs, tous les codes rattachés ; stock en unités'] },
    ], caption: 'Figure 5 · Les deux premières lignes se règlent par le journal et par la base de données ; les deux suivantes par des règles d’expiration et d’état ; les deux dernières par l’identifiant d’appareil et la fiche produit. Aucune ne se règle par un employé plus attentif.', alt: 'Matrice de six situations : chiffre corrigé à la main, dernier carton vendu deux fois, commande jamais payée, transfert saisi une fois, réception sans réseau, même produit sous trois codes ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Un stock juste en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles et fiche produit', note: 'types de mouvements, unités et facteurs, codes-barres rattachés, emplacements, qui a le droit d’ajuster, classes A/B/C et objectif d’exactitude ; signés', from: 0, to: 1 },
      { label: 'Journal et quantités', note: 'table de mouvements en ajout seul, quantités calculées par emplacement, recalcul de nuit, reprise de l’existant comme mouvement d’ouverture', from: 1, to: 2, accent: true },
      { label: 'Saisie et hors ligne', note: 'réception, vente, retour au lecteur ou à la caméra ; identifiants d’appareil ; file hors ligne rejouée sans doublon', from: 2, to: 3 },
      { label: 'Réservations et transferts', note: 'réservation avec expiration, verrou sur le dernier carton, transfert en deux temps avec état en transit', from: 3, to: 4 },
      { label: 'Inventaire tournant', note: 'feuilles de comptage par classe, saisie à l’aveugle, écarts avec motif, exactitude du mois par dépôt', from: 4, to: 5 },
      { label: 'Alertes et revue', note: 'ruptures calculées sur le disponible, écarts récurrents par produit et par personne, revue mensuelle de l’exactitude', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : on écrit les types de mouvements, les unités et les droits, parce qu’un journal construit avec les mauvais types se migre mal. La deuxième semaine est accentuée parce que la reprise du stock existant y entre comme un mouvement d’ouverture, pas comme un chiffre tapé ; dès cette semaine, plus aucune quantité n’est modifiable.', alt: 'Frise de six semaines : règles et fiche produit, journal et quantités (accentué), saisie et hors ligne, réservations et transferts, inventaire tournant, alertes et revue.' },
  },
  en: {
    cover: { eyebrow: 'Stock · Movements · Counting · 2027', title: ['“The application’s stock', 'never matches', 'the real stock”'], subtitle: 'A movement ledger that is never edited, available distinct from on hand, reservations that expire, two-step transfers, and cycle counting that measures accuracy', left: { label: 'A figure you correct', sub: 'and nobody can explain' }, right: { label: 'A ledger you add up', sub: 'and a measured accuracy' } },
    mouvements: { caption: 'Figure 1 · One day of one product in one warehouse. Stock is not a field you update: it is the sum of a column of movements, each with its source, its author and its device. Available, what you can still sell or promise, is on hand minus reservations; it drops at 9:12 when the B2B portal reserves, without a single case moving, and rises at 16:00 when an unpaid reservation expires. The 14:02 adjustment is a movement like the others, with a mandatory reason. The data is a constructed example.' },
    couches: { title: 'Accurate stock, in five layers', layers: [
      { label: 'Capture', items: [{ name: 'Scanner or phone camera at receiving, at the till, at transfer, at counting; one dated, signed movement per gesture', sub: 'the movement is written even without network, and replayed without duplicate thanks to its identifier' }] },
      { label: 'Movement ledger', items: [{ name: 'A table you append to and never erase from: type, signed quantity, product, lot, location, source document, author', sub: 'the stock of every product at any instant is a sum; it recomputes from the ledger if in doubt', accent: true }] },
      { label: 'Computed quantities', items: [{ name: 'On hand, reserved, in transit, available per product and location; checked every night against the ledger’s sum', sub: 'reading is instant; the truth stays in the ledger' }] },
      { label: 'Rules', items: [{ name: 'Reservation that expires, two-step transfer with in-transit state, adjustment with reason and right, lock on the last case', sub: 'the last rule is held by the database, not by the screen' }] },
      { label: 'Measurement', items: [{ name: 'Cycle counting by class, variances with a reason, monthly accuracy per warehouse, stock-outs computed on available', sub: 'stock without an accuracy measure is stock taken on trust' }] },
    ], caption: 'Figure 2 · The accented layer is what makes stock explainable: you never “correct” the quantity, you add an adjustment movement with a reason. The quantities of the third layer are a read view; if they diverge from the ledger, the view is recomputed, never the ledger retouched.', alt: 'Five layers: capture, movement ledger (accented), computed quantities, rules, measurement.' },
    etapes: { title: 'A transfer between two warehouses, in six steps', items: [
      { label: 'Prepare', sub: 'list of products, quantities, lots; a transfer number' },
      { label: 'Scan out', sub: 'every case read at departure; dated, signed “out” movement' },
      { label: 'Mark in transit', sub: 'neither in warehouse A nor in B; visible as such', accent: true },
      { label: 'Scan in', sub: 'every case read on arrival; “in” movement into B' },
      { label: 'Record the variance', sub: 'out 24, in 23: the variance is a movement with a reason' },
      { label: 'Close the transfer', sub: 'the number becomes final; nothing moves on it any more' },
    ], caption: 'Figure 3 · The transfer is the first source of wrong stock in a company with several warehouses, because it is almost always entered once, on the way out or on the way in. The accented step is the one applications skip: between departure and arrival, the goods are nowhere, and a state is needed to say so. The fifth step turns the missing case into an explained movement, not a diverging figure.', alt: 'Six steps: prepare, scan out, mark in transit (accented), scan in, record the variance, close the transfer.' },
    inventaire: { caption: 'Figure 4 · Cycle counting replaces the yearly closure: class-A references, those carrying most of the value, are counted every week, B every month, C every quarter. You count without seeing the system figure, every variance gets a reason and becomes an adjustment movement, and the month’s accuracy, the share of counted lines that were right, is tracked against a written objective. The 20/80 split is a rule of practice, not a law; the quantities are a constructed example.' },
    situations: { title: 'Six reasons for wrong stock, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The figure is corrected by hand', cells: ['The manager types 66 instead of 68 “because that’s what is on the shelf”', 'quantity not editable; a −2 adjustment with a signed reason enters the ledger'] },
      { label: 'The last case sold twice', cells: ['Two tills, or the till and the shop, sell the same unit in the same second', 'available decremented under a database lock; the second sale is refused'] },
      { label: 'Online order never paid', cells: ['The basket blocked 12 units, the customer did not pay, available stays at zero', 'a reservation expires; past the hour without payment, a movement releases it'] },
      { label: 'Transfer entered once', cells: ['Out at 11:20, entered on arrival the next day; total stock is wrong by 24', 'out and in are two movements, with an “in transit” state between them'] },
      { label: 'Receiving without network', cells: ['The scanner read 48 cases offline, the app was restarted; 96 appear', 'every movement has an identifier created on the device; the server ignores repeats'] },
      { label: 'The same product under three codes', cells: ['Case of 4, unit, old internal code; stock is right in none of the lines', 'one product record, its units and factors, all codes attached; stock read in units'] },
    ], caption: 'Figure 5 · The first two rows are settled by the ledger and the database; the next two by expiry and state rules; the last two by the device identifier and the product record. None is settled by a more attentive employee.', alt: 'Matrix of six situations: figure corrected by hand, last case sold twice, order never paid, transfer entered once, receiving without network, same product under three codes; what happens and what the application does.' },
    calendrier: { title: 'Accurate stock in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules and product record', note: 'movement types, units and factors, attached barcodes, locations, who may adjust, A/B/C classes and accuracy objective; signed', from: 0, to: 1 },
      { label: 'Ledger and quantities', note: 'append-only movement table, computed quantities per location, nightly recompute, existing stock taken over as an opening movement', from: 1, to: 2, accent: true },
      { label: 'Capture and offline', note: 'receipt, sale, return by scanner or camera; device identifiers; offline queue replayed without duplicates', from: 2, to: 3 },
      { label: 'Reservations and transfers', note: 'reservation with expiry, lock on the last case, two-step transfer with in-transit state', from: 3, to: 4 },
      { label: 'Cycle counting', note: 'count sheets by class, blind entry, variances with reason, monthly accuracy per warehouse', from: 4, to: 5 },
      { label: 'Alerts and review', note: 'stock-outs computed on available, recurring variances by product and by person, monthly accuracy review', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: you write the movement types, the units and the rights, because a ledger built with the wrong types migrates badly. The second week is accented because the existing stock enters it as an opening movement, not as a typed figure; from that week on, no quantity is editable any more.', alt: 'Six-week timeline: rules and product record, ledger and quantities (accented), capture and offline, reservations and transfers, cycle counting, alerts and review.' },
  },
  ar: {
    cover: { eyebrow: 'مخزون · حركات · جرد · 2027', title: ['«مخزون التطبيق', 'لا يطابق أبداً', 'المخزون الحقيقي»'], subtitle: 'سجل حركات لا يُعدَّل أبداً، متاح مستقل عن الفعلي، حجوزات تنتهي، تحويلات على مرحلتين، وجرد دوري يقيس الدقة', left: { label: 'رقم يُصحَّح', sub: 'ولا أحد يستطيع تفسيره' }, right: { label: 'سجل يُجمع', sub: 'ودقة مقيسة' } },
    mouvements: { caption: 'الشكل 1 · يوم واحد لمنتج واحد في مستودع واحد. المخزون ليس حقلاً يُحدَّث: إنه مجموع عمود من الحركات، لكل منها مصدرها ومؤلفها وجهازها. والمتاح، ما يمكن بيعه أو الوعد به بعد، هو الفعلي ناقص الحجوزات؛ ينخفض عند 9:12 حين تحجز بوابة B2B دون أن يتحرك كرتون واحد، ويرتفع عند 16:00 حين ينتهي حجز غير مدفوع. وتسوية 14:02 حركة كغيرها، بسبب إلزامي. والبيانات مثال مبني.' },
    couches: { title: 'مخزون صحيح، في خمس طبقات', layers: [
      { label: 'الإدخال', items: [{ name: 'ماسح أو كاميرا الهاتف عند الاستلام وفي الصندوق وعند التحويل والجرد؛ حركة مؤرَّخة موقَّعة لكل إيماءة', sub: 'تُكتب الحركة حتى بلا شبكة، وتُعاد بلا تكرار بفضل معرّفها' }] },
      { label: 'سجل الحركات', items: [{ name: 'جدول يُضاف إليه ولا يُمحى منه أبداً: نوع، كمية بإشارة، منتج، دفعة، موقع، وثيقة مصدر، مؤلف', sub: 'مخزون كل منتج في كل لحظة مجموع؛ ويُعاد حسابه من السجل عند الشك', accent: true }] },
      { label: 'كميات محسوبة', items: [{ name: 'فعلي، محجوز، في الطريق، متاح لكل منتج وموقع؛ تُراجَع كل ليلة مقابل مجموع السجل', sub: 'القراءة فورية؛ والحقيقة تبقى في السجل' }] },
      { label: 'القواعد', items: [{ name: 'حجز ينتهي، تحويل على مرحلتين بحالة في الطريق، تسوية بسبب وحق، قفل على آخر كرتون', sub: 'القاعدة الأخيرة تمسكها قاعدة البيانات لا الشاشة' }] },
      { label: 'القياس', items: [{ name: 'جرد دوري حسب الفئة، فوارق بسبب، دقة الشهر لكل مستودع، نفاد محسوب على المتاح', sub: 'مخزون بلا قياس للدقة مخزون يُصدَّق على كلمته' }] },
    ], caption: 'الشكل 2 · الطبقة المميزة هي ما يجعل المخزون قابلاً للتفسير: لا «نصحح» الكمية أبداً، بل نضيف حركة تسوية بسبب. وكميات الطبقة الثالثة عرض للقراءة؛ إن انحرفت عن السجل يُعاد حساب العرض، ولا يُرتَّق السجل أبداً.', alt: 'خمس طبقات: الإدخال، سجل الحركات (مميز)، كميات محسوبة، القواعد، القياس.' },
    etapes: { title: 'تحويل بين مستودعين، في ست خطوات', items: [
      { label: 'التحضير', sub: 'قائمة المنتجات والكميات والدفعات؛ رقم تحويل' },
      { label: 'مسح الخروج', sub: 'كل كرتون يُقرأ عند المغادرة؛ حركة «خروج» مؤرَّخة موقَّعة' },
      { label: 'وضع «في الطريق»', sub: 'لا في المستودع أ ولا في ب؛ ظاهر هكذا', accent: true },
      { label: 'مسح الدخول', sub: 'كل كرتون يُقرأ عند الوصول؛ حركة «دخول» في ب' },
      { label: 'تسجيل الفارق', sub: 'خرج 24، دخل 23: الفارق حركة بسبب' },
      { label: 'إغلاق التحويل', sub: 'الرقم يصير نهائياً؛ لا شيء يتحرك عليه بعد' },
    ], caption: 'الشكل 3 · التحويل هو المصدر الأول للمخزون الخاطئ في شركة بعدة مستودعات، لأنه يُدخل دائماً تقريباً مرة واحدة، عند الخروج أو عند الدخول. والخطوة المميزة هي التي تتجاوزها التطبيقات: بين المغادرة والوصول، البضاعة ليست في أي مكان، ولا بد من حالة تقول ذلك. والخطوة الخامسة تحوّل الكرتون الناقص إلى حركة مفسَّرة، لا إلى رقم منحرف.', alt: 'ست خطوات: التحضير، مسح الخروج، وضع في الطريق (مميزة)، مسح الدخول، تسجيل الفارق، إغلاق التحويل.' },
    inventaire: { caption: 'الشكل 4 · الجرد الدوري يحل محل الإغلاق السنوي: مراجع الفئة أ، التي تحمل معظم القيمة، تُعدّ كل أسبوع، وب كل شهر، وج كل فصل. نعدّ دون رؤية رقم النظام، وكل فارق يأخذ سبباً ويصير حركة تسوية، ودقة الشهر، حصة الأسطر المعدودة الصحيحة، تُتابَع مقابل هدف مكتوب. وتقسيم 20/80 قاعدة ممارسة لا قانون؛ والكميات مثال مبني.' },
    situations: { title: 'ستة أسباب لمخزون خاطئ، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الرقم يُصحَّح يدوياً', cells: ['يكتب المسيّر 66 بدل 68 «لأن هذا ما في الرف»', 'الكمية غير قابلة للتعديل؛ تسوية −2 بسبب موقَّع تدخل السجل'] },
      { label: 'آخر كرتون بيع مرتين', cells: ['صندوقان، أو الصندوق والمتجر، يبيعان الوحدة نفسها في الثانية نفسها', 'المتاح يُنقص تحت قفل في قاعدة البيانات؛ البيع الثاني يُرفض'] },
      { label: 'طلبية إلكترونية لم تُدفع', cells: ['السلة حجزت 12 وحدة، الزبون لم يدفع، المتاح يبقى صفراً', 'الحجز ينتهي؛ بعد الساعة بلا دفع تحرّره حركة آلية'] },
      { label: 'تحويل أُدخل مرة واحدة', cells: ['خرج عند 11:20 وأُدخل في اليوم التالي؛ المخزون الإجمالي خاطئ بـ 24', 'الخروج والدخول حركتان، بحالة «في الطريق» بينهما'] },
      { label: 'استلام بلا شبكة', cells: ['الماسح قرأ 48 كرتوناً دون اتصال، وأُعيد تشغيل التطبيق؛ يظهر 96', 'لكل حركة معرّف أُنشئ على الجهاز؛ الخادم يتجاهل ما استلمه من قبل'] },
      { label: 'المنتج نفسه بثلاثة رموز', cells: ['كرتون من 4، وحدة، رمز داخلي قديم؛ المخزون ليس صحيحاً في أي سطر', 'بطاقة منتج واحدة بوحداتها ومعاملاتها، كل الرموز مرتبطة؛ يُقرأ بالوحدات'] },
    ], caption: 'الشكل 5 · السطران الأولان يُحلان بالسجل وقاعدة البيانات؛ والتاليان بقواعد الانتهاء والحالة؛ والأخيران بمعرّف الجهاز وبطاقة المنتج. ولا واحد منها يُحل بموظف أكثر انتباهاً.', alt: 'مصفوفة ست حالات: رقم مصحَّح يدوياً، آخر كرتون بيع مرتين، طلبية لم تُدفع، تحويل أُدخل مرة، استلام بلا شبكة، المنتج نفسه بثلاثة رموز؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'مخزون صحيح سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد وبطاقة المنتج', note: 'أنواع الحركات، الوحدات والمعاملات، الباركودات المرتبطة، المواقع، من له حق التسوية، فئات أ/ب/ج وهدف الدقة؛ موقَّعة', from: 0, to: 1 },
      { label: 'السجل والكميات', note: 'جدول حركات بالإضافة فقط، كميات محسوبة لكل موقع، إعادة حساب ليلية، استلام الموجود كحركة افتتاح', from: 1, to: 2, accent: true },
      { label: 'الإدخال ودون اتصال', note: 'استلام وبيع وإرجاع بالماسح أو الكاميرا؛ معرّفات الجهاز؛ طابور دون اتصال يُعاد بلا تكرار', from: 2, to: 3 },
      { label: 'الحجوزات والتحويلات', note: 'حجز بانتهاء، قفل على آخر كرتون، تحويل على مرحلتين بحالة في الطريق', from: 3, to: 4 },
      { label: 'الجرد الدوري', note: 'أوراق جرد حسب الفئة، إدخال أعمى، فوارق بسبب، دقة الشهر لكل مستودع', from: 4, to: 5 },
      { label: 'التنبيهات والمراجعة', note: 'نفاد محسوب على المتاح، فوارق متكررة حسب المنتج والشخص، مراجعة شهرية للدقة', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: نكتب أنواع الحركات والوحدات والحقوق، لأن سجلاً بُني بأنواع خاطئة يُرحَّل بصعوبة. والأسبوع الثاني مميز لأن المخزون الموجود يدخله كحركة افتتاح لا كرقم مكتوب؛ ومن ذلك الأسبوع لا تعود أي كمية قابلة للتعديل.', alt: 'خط زمني من ستة أسابيع: القواعد وبطاقة المنتج، السجل والكميات (مميز)، الإدخال ودون اتصال، الحجوزات والتحويلات، الجرد الدوري، التنبيهات والمراجعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SL[locale] || SL.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      mouvements: { svg: ledger(e.ledger, rtl), caption: t.mouvements.caption, alt: e.ledger.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      inventaire: { svg: count(e.count, rtl), caption: t.inventaire.caption, alt: e.count.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
