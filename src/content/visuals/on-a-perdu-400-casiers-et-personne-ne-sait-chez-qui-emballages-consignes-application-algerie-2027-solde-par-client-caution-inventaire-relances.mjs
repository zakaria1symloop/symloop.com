import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { stop, circulation, STRINGS as RT } from './custom/returnables.mjs';
export const slug = 'on-a-perdu-400-casiers-et-personne-ne-sait-chez-qui-emballages-consignes-application-algerie-2027-solde-par-client-caution-inventaire-relances';
const T = {
  fr: {
    cover: { eyebrow: 'Emballages consignés · Casiers · Caution · 2027', title: ['« On a perdu 400 casiers,', 'et personne ne sait chez qui »'], subtitle: 'Ce qu’on construit pour les emballages : solde par client, compté et signé à chaque arrêt, caution, relances, inventaire', left: { label: 'Un carnet dans le camion', sub: 'et des casiers qui disparaissent' }, right: { label: 'Un solde signé par client', sub: 'une caution qui suit, un parc qui se somme' } },
    arret: { caption: 'Figure 1 · Un arrêt de tournée chez une supérette : pour chaque type d’emballage, le solde avant, ce qui est livré, ce qui est repris, le solde après et la caution détenue. Le client signe le solde, pas seulement la livraison, avec la photo de la pile reprise ; le solde dépasse le seuil écrit depuis vingt-trois jours, et la relance part seule. Le dépôt reçoit le comptage de l’arrêt sans ressaisie. Quantités, cautions et noms sont un exemple construit.' },
    parc: { caption: 'Figure 2 · Le parc de casiers au jour de l’inventaire : au dépôt, dans les camions, chez les clients par ancienneté du solde, et radiés avec un motif ; la somme fait le parc. Les 840 casiers chez des clients depuis plus de soixante jours ont leur caution facturée et une visite ou une reprise planifiée ; les cinq soldes qui demandent une action sont listés avec ce qui a été fait. Les 420 radiés de l’année se comparent aux 1 900 de l’an passé sans application. Chiffres et noms sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'On a perdu 400 casiers', cells: ['Le carnet dit une chose, le dépôt une autre', 'solde par client = mouvements signés ; parc = dépôt + camions + clients ; écart radié avec motif'] },
      { label: 'Le client dit qu’il a tout rendu', cells: ['Parole contre parole, remise accordée', 'solde signé à chaque arrêt, photo horodatée, le même solde sur son portail'] },
      { label: 'Le chauffeur a échangé des casiers contre des espèces', cells: ['Le camion revient vide, la caisse non', 'comptage au départ et au retour du camion ; écart camion = chauffeur ; reprise en espèces interdite ou tracée'] },
      { label: 'La caution n’est jamais facturée', cells: ['Des millions détenus chez les clients sans trace', 'caution calculée sur le solde ; facturée au seuil, remboursée au retour, selon la règle écrite'] },
      { label: 'On ne sait pas combien de casiers neufs commander', cells: ['On commande quand le dépôt est vide', 'radiations comptées ; parc disponible projeté ; commande au seuil écrit'] },
      { label: 'Les palettes du fournisseur se mélangent aux nôtres', cells: ['On rend les nôtres, on garde les siennes', 'propriétaire par emballage ; solde fournisseur comme solde client, en sens inverse'] },
    ], caption: 'Figure 3 · Les trois premières lignes se règlent par le solde signé à chaque arrêt et le comptage du camion ; les trois suivantes par la caution calculée, les radiations comptées et le propriétaire par emballage. Aucune ne se règle par un chauffeur plus honnête ou un client plus aimable.', alt: 'Matrice de six situations : casiers perdus, client qui conteste, chauffeur qui échange, caution non facturée, commande de casiers neufs, palettes mélangées ; ce qui se passe et ce que l’application fait.' },
    tournee: { title: 'Une tournée d’emballages, en six temps', items: [
      { label: 'Charger', sub: 'comptage au départ par type, signé par le chauffeur' },
      { label: 'Livrer et reprendre', sub: 'compté à chaque arrêt, photo, signature du client sur le solde', accent: true },
      { label: 'Solder', sub: 'solde recalculé ; caution facturée ou remboursée selon la règle' },
      { label: 'Décharger', sub: 'comptage au retour ; écart camion attribué au chauffeur' },
      { label: 'Relancer', sub: 'seuils de quantité et d’ancienneté ; WhatsApp ; visite planifiée' },
      { label: 'Inventorier', sub: 'parc = dépôt + camions + clients ; écart radié avec motif' },
    ], caption: 'Figure 4 · L’étape accentuée est la reprise à chaque arrêt : compté, photographié et signé par le client sur le solde, pas seulement sur la livraison. Avant elle, le camion est compté au départ ; après elle, le solde se recalcule, la caution suit, la relance part au seuil, et l’inventaire somme le parc.', alt: 'Six temps : charger, livrer et reprendre (accentué), solder, décharger, relancer, inventorier.' },
    couches: { title: 'Les emballages consignés, en cinq couches', layers: [
      { label: 'Référentiel', items: [{ name: 'Types d’emballages, caution par type, propriétaire, seuils de quantité et d’ancienneté par client, numéros gravés optionnels', sub: 'écrit par le gérant ; un emballage est un bien, pas un consommable' }] },
      { label: 'Mouvements', items: [{ name: 'Chaque livraison ou reprise est un mouvement signé, horodaté, géolocalisé, photographié ; le solde d’un client est la somme', sub: 'un solde ne se saisit jamais, il se calcule', accent: true }] },
      { label: 'Caution', items: [{ name: 'Calculée sur le solde ; facturée au-dessus d’un seuil ou dès la livraison, remboursée au retour, selon la règle écrite ; export', sub: 'le traitement comptable de la caution est pour le comptable' }] },
      { label: 'Relances', items: [{ name: 'Seuils de quantité et d’ancienneté ; message WhatsApp, visite planifiée dans la tournée, caution facturée ; remontée au gérant', sub: 'le chauffeur ne négocie pas, la règle parle' }] },
      { label: 'Inventaire et mesure', items: [{ name: 'Parc = dépôt + camions + clients ; comptages, écart radié avec motif ; taux de retour, rotation, commande de neufs', sub: 'un casier est quelque part, ou radié' }] },
    ], caption: 'Figure 5 · La couche accentuée est celle des mouvements : chaque livraison et chaque reprise est signée, et le solde d’un client est leur somme, jamais une saisie. Le référentiel au-dessus dit ce qu’est un emballage et ce qu’il vaut ; la caution, les relances et l’inventaire en dessous ne sont que des lectures de ces mouvements.', alt: 'Cinq couches : référentiel, mouvements (accentuée), caution, relances, inventaire et mesure.' },
    calendrier: { title: 'Mettre les emballages sous solde en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'types d’emballages, cautions, propriétaires, seuils de quantité et d’ancienneté, règle de facturation et de remboursement, qui radie ; avec le gérant', from: 0, to: 1 },
      { label: 'Mouvements et soldes', note: 'comptage au chargement, livré et repris à chaque arrêt hors ligne, photo, signature, solde par client calculé, portail client', from: 1, to: 3, accent: true },
      { label: 'Caution', note: 'calcul sur le solde, facturation au seuil, remboursement au retour, export comptable', from: 3, to: 4 },
      { label: 'Relances', note: 'seuils, WhatsApp, visite planifiée, caution facturée, remontée au gérant', from: 4, to: 5 },
      { label: 'Reprise et inventaire', note: 'soldes initiaux comptés chez les clients avec signature, parc initial, comptage du dépôt, premier écart radié', from: 5, to: 6 },
      { label: 'Mesure', note: 'taux de retour, rotation, soldes par ancienneté, radiations, commande de neufs, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les types, les cautions, les seuils et la règle de facturation sont des décisions du gérant. Les deux semaines accentuées sont les mouvements et les soldes, parce que la caution, les relances et l’inventaire ne sont que des lectures de mouvements signés ; la reprise compte une fois les soldes initiaux chez chaque client, avec sa signature.', alt: 'Frise de sept semaines : règles, mouvements et soldes (accentué, deux semaines), caution, relances, reprise et inventaire, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Returnable packaging · Crates · Deposits · 2027', title: ['“We lost 400 crates,', 'and nobody knows where”'], subtitle: 'What gets built for packaging: balance per customer, counted and signed at every stop, deposits, reminders, count', left: { label: 'A notebook in the truck', sub: 'and crates that vanish' }, right: { label: 'A signed balance per customer', sub: 'a deposit that follows, a fleet that adds up' } },
    arret: { caption: 'Figure 1 · A delivery stop at a minimarket: for each packaging type, the balance before, what is delivered, what is returned, the balance after and the deposit held. The customer signs the balance, not only the delivery, with the photo of the returned stack; the balance has exceeded the written threshold for twenty-three days, and the reminder leaves on its own. The depot receives the stop’s count without retyping. Quantities, deposits and names are a constructed example.' },
    parc: { caption: 'Figure 2 · The crate fleet on count day: at the depot, in trucks, with customers by age of balance, and written off with a reason; the sum is the fleet. The 840 crates with customers for more than sixty days have their deposit invoiced and a visit or pickup planned; the five balances that need an action are listed with what was done. The 420 written off this year compare with 1,900 last year without the application. Figures and names are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'We lost 400 crates', cells: ['The notebook says one thing, the depot another', 'balance per customer = signed movements; fleet = depot + trucks + customers; gap written off with reason'] },
      { label: 'The customer says they returned everything', cells: ['Word against word, discount granted', 'balance signed at every stop, timestamped photo, the same balance on their portal'] },
      { label: 'The driver swapped crates for cash', cells: ['The truck comes back empty, the till does not', 'truck counted at departure and return; truck gap = driver; cash take-back forbidden or traced'] },
      { label: 'The deposit is never invoiced', cells: ['Millions held by customers without a trace', 'deposit computed on the balance; invoiced at threshold, refunded on return, per the written rule'] },
      { label: 'Nobody knows how many new crates to order', cells: ['Ordered when the depot is empty', 'write-offs counted; available fleet projected; order at the written threshold'] },
      { label: 'The supplier’s pallets mix with ours', cells: ['We return ours, we keep theirs', 'owner per packaging; supplier balance like a customer balance, in reverse'] },
    ], caption: 'Figure 3 · The first three rows are settled by the balance signed at every stop and the truck count; the next three by the computed deposit, counted write-offs and the owner per packaging. None is settled by a more honest driver or a friendlier customer.', alt: 'Matrix of six situations: lost crates, disputing customer, driver swapping, uninvoiced deposit, ordering new crates, mixed pallets; what happens and what the application does.' },
    tournee: { title: 'A packaging round, in six beats', items: [
      { label: 'Load', sub: 'count at departure per type, signed by the driver' },
      { label: 'Deliver and take back', sub: 'counted at every stop, photo, customer signature on the balance', accent: true },
      { label: 'Balance', sub: 'balance recomputed; deposit invoiced or refunded per rule' },
      { label: 'Unload', sub: 'count on return; truck gap attributed to the driver' },
      { label: 'Remind', sub: 'quantity and age thresholds; WhatsApp; visit planned' },
      { label: 'Count', sub: 'fleet = depot + trucks + customers; gap written off with reason' },
    ], caption: 'Figure 4 · The accented beat is the take-back at every stop: counted, photographed and signed by the customer on the balance, not only on the delivery. Before it, the truck is counted at departure; after it, the balance recomputes, the deposit follows, the reminder leaves at threshold, and the count adds up the fleet.', alt: 'Six beats: load, deliver and take back (accented), balance, unload, remind, count.' },
    couches: { title: 'Returnable packaging, in five layers', layers: [
      { label: 'Reference data', items: [{ name: 'Packaging types, deposit per type, owner, quantity and age thresholds per customer, optional engraved numbers', sub: 'written by the manager; packaging is an asset, not a consumable' }] },
      { label: 'Movements', items: [{ name: 'Every delivery or take-back is a signed, timestamped, geolocated, photographed movement; a customer’s balance is the sum', sub: 'a balance is never typed, it is computed', accent: true }] },
      { label: 'Deposit', items: [{ name: 'Computed on the balance; invoiced above a threshold or at delivery, refunded on return, per the written rule; export', sub: 'the accounting treatment of deposits is for the accountant' }] },
      { label: 'Reminders', items: [{ name: 'Quantity and age thresholds; WhatsApp message, visit planned into the round, deposit invoiced; escalation to the manager', sub: 'the driver does not negotiate, the rule speaks' }] },
      { label: 'Count and measurement', items: [{ name: 'Fleet = depot + trucks + customers; counts, gap written off with reason; return rate, rotation, new orders', sub: 'a crate is somewhere, or written off' }] },
    ], caption: 'Figure 5 · The accented layer is movements: every delivery and every take-back is signed, and a customer’s balance is their sum, never an entry. Reference data above says what packaging is and what it is worth; deposit, reminders and count below are only readings of those movements.', alt: 'Five layers: reference data, movements (accented), deposit, reminders, count and measurement.' },
    calendrier: { title: 'Putting packaging under balances in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'packaging types, deposits, owners, quantity and age thresholds, invoicing and refund rule, who writes off; with the manager', from: 0, to: 1 },
      { label: 'Movements and balances', note: 'count at loading, delivered and taken back at every stop offline, photo, signature, computed balance per customer, customer portal', from: 1, to: 3, accent: true },
      { label: 'Deposit', note: 'computed on the balance, invoiced at threshold, refunded on return, accounting export', from: 3, to: 4 },
      { label: 'Reminders', note: 'thresholds, WhatsApp, planned visit, deposit invoiced, escalation to the manager', from: 4, to: 5 },
      { label: 'Take-over and count', note: 'opening balances counted at customers with signature, opening fleet, depot count, first gap written off', from: 5, to: 6 },
      { label: 'Measurement', note: 'return rate, rotation, balances by age, write-offs, new orders, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: types, deposits, thresholds and the invoicing rule are the manager’s decisions. The two accented weeks are movements and balances, because deposit, reminders and count are only readings of signed movements; the take-over counts opening balances once at every customer, with their signature.', alt: 'Seven-week timeline: rules, movements and balances (accented, two weeks), deposit, reminders, take-over and count, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'تغليف مسترجَع · صناديق · ضمان · 2027', title: ['«فقدنا 400 صندوق،', 'ولا أحد يعرف عند من»'], subtitle: 'ما يُبنى للتغليف: رصيد لكل زبون، يُعدّ ويُوقَّع عند كل توقف، ضمان، تذكيرات، جرد', left: { label: 'دفتر في الشاحنة', sub: 'وصناديق تختفي' }, right: { label: 'رصيد موقَّع لكل زبون', sub: 'ضمان يتبع، وأسطول يُجمع' } },
    arret: { caption: 'الشكل 1 · توقف في جولة عند سوبيرات: لكل نوع تغليف الرصيد قبل، وما سُلّم، وما استُرجع، والرصيد بعد، والضمان المحتجز. يوقّع الزبون الرصيد لا التسليم فقط، بصورة الكومة المسترجَعة؛ والرصيد تجاوز العتبة المكتوبة منذ ثلاثة وعشرين يوماً، والتذكير يخرج وحده. ويتلقى المستودع عدّ التوقف بلا إعادة كتابة. والكميات والضمانات والأسماء مثال مبني.' },
    parc: { caption: 'الشكل 2 · أسطول الصناديق يوم الجرد: في المستودع، في الشاحنات، عند الزبائن بأقدمية الرصيد، ومشطوبة بسبب؛ والمجموع هو الأسطول. والصناديق الـ 840 عند زبائن منذ أكثر من ستين يوماً ضمانها مفوتَر وزيارة أو استرجاع مخطط؛ والأرصدة الخمسة التي تتطلب إجراءً مدرجة بما فُعل. والـ 420 المشطوبة هذه السنة تُقارن بـ 1,900 السنة الماضية بلا تطبيق. والأرقام والأسماء مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'فقدنا 400 صندوق', cells: ['الدفتر يقول شيئاً والمستودع آخر', 'رصيد لكل زبون = حركات موقَّعة؛ الأسطول = مستودع + شاحنات + زبائن؛ الفارق مشطوب بسبب'] },
      { label: 'الزبون يقول إنه أرجع كل شيء', cells: ['كلام مقابل كلام، وخصم ممنوح', 'رصيد موقَّع عند كل توقف، صورة موقَّتة، الرصيد نفسه على بوابته'] },
      { label: 'السائق بادل صناديق بنقد', cells: ['الشاحنة تعود فارغة والصندوق لا', 'عدّ الشاحنة عند الانطلاق والعودة؛ فارق الشاحنة = السائق؛ استرجاع نقدي ممنوع أو متتبَّع'] },
      { label: 'الضمان لا يُفوتَر أبداً', cells: ['ملايين محتجزة عند الزبائن بلا أثر', 'ضمان محسوب على الرصيد؛ مفوتَر عند العتبة، مردود عند الإرجاع، بحسب القاعدة المكتوبة'] },
      { label: 'لا أحد يعرف كم صندوقاً جديداً يُطلب', cells: ['يُطلب حين يفرغ المستودع', 'مشطوبات معدودة؛ أسطول متاح متوقع؛ طلب عند العتبة المكتوبة'] },
      { label: 'منصات المورد تختلط بمنصاتنا', cells: ['نرجع منصاتنا ونحتفظ بمنصاته', 'مالك لكل تغليف؛ رصيد المورد كرصيد الزبون بالاتجاه المعاكس'] },
    ], caption: 'الشكل 3 · الأسطر الثلاثة الأولى تُحل بالرصيد الموقَّع عند كل توقف وعدّ الشاحنة؛ والثلاثة التالية بالضمان المحسوب والمشطوبات المعدودة والمالك لكل تغليف. ولا واحد يُحل بسائق أكثر أمانة أو زبون أكثر لطفاً.', alt: 'مصفوفة ست حالات: صناديق مفقودة، زبون ينازع، سائق يبادل، ضمان غير مفوتَر، طلب صناديق جديدة، منصات مختلطة؛ ما يحدث وما يفعله التطبيق.' },
    tournee: { title: 'جولة تغليف، في ستة أوقات', items: [
      { label: 'التحميل', sub: 'عدّ عند الانطلاق لكل نوع، موقَّع من السائق' },
      { label: 'التسليم والاسترجاع', sub: 'يُعدّ عند كل توقف، صورة، توقيع الزبون على الرصيد', accent: true },
      { label: 'التسوية', sub: 'رصيد الزبون معاد الحساب؛ ضمان مفوتَر أو مردود بحسب القاعدة' },
      { label: 'التفريغ', sub: 'عدّ عند العودة؛ فارق الشاحنة يُنسب إلى السائق' },
      { label: 'التذكير', sub: 'عتبات كمية وأقدمية؛ واتساب؛ زيارة مخططة' },
      { label: 'الجرد', sub: 'الأسطول = مستودع + شاحنات + زبائن؛ فارق مشطوب بسبب' },
    ], caption: 'الشكل 4 · الوقت المميز هو الاسترجاع عند كل توقف: يُعدّ ويُصوَّر ويوقّعه الزبون على الرصيد لا على التسليم فقط. وقبله تُعدّ الشاحنة عند الانطلاق؛ وبعده يُعاد حساب الرصيد ويتبع الضمان ويخرج التذكير عند العتبة ويجمع الجرد الأسطول.', alt: 'ستة أوقات: التحميل، التسليم والاسترجاع (مميز)، التسوية، التفريغ، التذكير، الجرد.' },
    couches: { title: 'التغليف المسترجَع، في خمس طبقات', layers: [
      { label: 'البيانات المرجعية', items: [{ name: 'أنواع التغليف، ضمان لكل نوع، مالك، عتبات كمية وأقدمية لكل زبون، أرقام محفورة اختيارية', sub: 'يكتبها المسيّر؛ التغليف أصل لا مستهلَك' }] },
      { label: 'الحركات', items: [{ name: 'كل تسليم أو استرجاع حركة موقَّعة وموقَّتة ومحددة الموقع ومصوَّرة؛ ورصيد الزبون هو المجموع', sub: 'الرصيد لا يُكتب أبداً بل يُحسب', accent: true }] },
      { label: 'الضمان', items: [{ name: 'يُحسب على الرصيد؛ يُفوتَر فوق عتبة أو عند التسليم، ويُرد عند الإرجاع، بحسب القاعدة المكتوبة؛ تصدير', sub: 'المعالجة المحاسبية للضمان للمحاسب' }] },
      { label: 'التذكيرات', items: [{ name: 'عتبات كمية وأقدمية؛ رسالة واتساب، زيارة مخططة في الجولة، ضمان مفوتَر؛ تصعيد للمسيّر', sub: 'السائق لا يتفاوض، والقاعدة تتكلم' }] },
      { label: 'الجرد والقياس', items: [{ name: 'الأسطول = مستودع + شاحنات + زبائن؛ عدّات، فارق مشطوب بسبب؛ نسبة إرجاع لكل زبون، دوران، مشطوبات، طلب جديد', sub: 'الصندوق في مكان ما أو مشطوب' }] },
    ], caption: 'الشكل 5 · الطبقة المميزة هي الحركات: كل تسليم وكل استرجاع موقَّع، ورصيد الزبون مجموعها لا إدخال أبداً. والبيانات المرجعية فوقها تقول ما التغليف وكم يساوي؛ والضمان والتذكيرات والجرد تحتها مجرد قراءات لهذه الحركات.', alt: 'خمس طبقات: البيانات المرجعية، الحركات (مميزة)، الضمان، التذكيرات، الجرد والقياس.' },
    calendrier: { title: 'وضع التغليف تحت الأرصدة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'أنواع التغليف، الضمانات، المالكون، عتبات الكمية والأقدمية، قاعدة الفوترة والرد، من يشطب؛ مع المسيّر', from: 0, to: 1 },
      { label: 'الحركات والأرصدة', note: 'عدّ عند التحميل، مسلَّم ومسترجَع عند كل توقف دون اتصال، صورة، توقيع، رصيد محسوب لكل زبون، بوابة الزبون', from: 1, to: 3, accent: true },
      { label: 'الضمان', note: 'حساب على الرصيد، فوترة عند العتبة، رد عند الإرجاع، تصدير محاسبي', from: 3, to: 4 },
      { label: 'التذكيرات', note: 'عتبات، واتساب، زيارة مخططة، ضمان مفوتَر، تصعيد للمسيّر', from: 4, to: 5 },
      { label: 'الاستعادة والجرد', note: 'أرصدة افتتاحية تُعدّ عند الزبائن بتوقيع، أسطول افتتاحي، عدّ المستودع، أول فارق مشطوب', from: 5, to: 6 },
      { label: 'القياس', note: 'نسبة الإرجاع، الدوران، الأرصدة بالأقدمية، المشطوبات، طلب جديد، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: الأنواع والضمانات والعتبات وقاعدة الفوترة قرارات المسيّر. والأسبوعان المميزان هما الحركات والأرصدة، لأن الضمان والتذكيرات والجرد مجرد قراءات لحركات موقَّعة؛ والاستعادة تعدّ الأرصدة الافتتاحية مرة عند كل زبون بتوقيعه.', alt: 'خط زمني من سبعة أسابيع: القواعد، الحركات والأرصدة (مميز، أسبوعان)، الضمان، التذكيرات، الاستعادة والجرد، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = RT[locale] || RT.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      arret: { svg: stop(e.stop, rtl), caption: t.arret.caption, alt: e.stop.alt },
      parc: { svg: circulation(e.circulation, rtl), caption: t.parc.caption, alt: e.circulation.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      tournee: { svg: steps({ title: t.tournee.title, steps: t.tournee.items, arrows: true, rtl }), caption: t.tournee.caption, alt: t.tournee.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
