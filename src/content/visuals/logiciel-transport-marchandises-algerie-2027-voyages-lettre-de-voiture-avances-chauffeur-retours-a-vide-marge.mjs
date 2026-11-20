import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { voyage, camions, STRINGS as SC } from './custom/transport.mjs';
export const slug = 'logiciel-transport-marchandises-algerie-2027-voyages-lettre-de-voiture-avances-chauffeur-retours-a-vide-marge';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel transport de marchandises · Algérie · 2027', title: ['Logiciel transport de marchandises', 'en Algérie : voyages, retours à vide, marge'], subtitle: 'Ce qu’on construit pour un transporteur : ordre du chargeur, voyage, lettre de voiture, avance chauffeur, preuve de livraison, facture le soir, marge par voyage', left: { label: 'Un camion revenu vide', sub: 'et une facture partie trois semaines après' }, right: { label: 'Un voyage compté au retour', sub: 'fret de retour cherché, facture le soir' } },
    voyage: { caption: 'Figure 1 · Un voyage de quatre jours suivi de l’ordre du chargeur à la facture du soir : camion et chauffeur affectés avec une avance signée, lettre de voiture et photo au chargement, attente horodatée au déchargement, livraison prouvée par un bon signé et photographié, fret de retour trouvé à quinze heures, frais de route soldés au retour. Le même voyage gagne soixante mille sept cent vingt dinars s’il revient vide et cent cinquante et un mille sept cents avec le fret de retour. Chiffres, distances et noms sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le camion revient à vide', cells: ['On le découvre au dépôt', 'fret de retour cherché dès la livraison ; chargeurs de la région prévenus ; km à vide par camion'] },
      { label: 'Frais rendus sans justificatif', cells: ['Le chauffeur dit 25 000, personne ne sait', 'avance signée ; tickets photographiés sur le téléphone ; solde au retour'] },
      { label: 'Facture partie trois semaines après', cells: ['Le bon papier est resté dans la cabine', 'bon signé photographié à la livraison ; facture émise au retour ; pas de bon, pas de facture'] },
      { label: 'Le chargeur conteste l’attente', cells: ['Parole contre parole', 'arrivée et départ horodatés sur le téléphone ; franchise écrite ; attente facturée selon la grille'] },
      { label: 'On ne sait pas quel voyage gagne', cells: ['Le chiffre d’affaires monte, la caisse non', 'marge par voyage : recette, carburant, frais, coût au km ; par camion et par ligne'] },
      { label: '« Où est mon camion ? »', cells: ['Le chargeur appelle trois fois', 'lien de suivi par voyage ; jalons ; agent WhatsApp qui répond depuis le statut'] },
    ], caption: 'Figure 2 · Les trois premières lignes se règlent par le fret de retour, l’avance soldée et le bon photographié ; les trois suivantes par l’attente horodatée, la marge par voyage et le lien de suivi. Aucune ne se règle par un chauffeur plus honnête ou un gérant plus présent.', alt: 'Matrice de six situations : retour à vide, frais sans justificatif, facture tardive, attente contestée, marge inconnue, chargeur qui appelle ; ce qui se passe et ce que l’application fait.' },
    couches: { title: 'Un logiciel de transport de marchandises, en cinq couches', layers: [
      { label: 'Ordres et grille', items: [{ name: 'Chargeurs, lignes, grille par voyage, par tonne ou par km, franchise d’attente, terme de paiement ; ordre reçu par portail, WhatsApp ou API', sub: 'le prix est écrit avant le chargement' }] },
      { label: 'Voyage', items: [{ name: 'Un ordre, un camion, un chauffeur, une lettre de voiture, des jalons, une attente horodatée, une preuve de livraison, un fret de retour', sub: 'le voyage est l’objet que tout le reste lit', accent: true }] },
      { label: 'Chauffeur', items: [{ name: 'Application hors ligne : jalons, photos du chargement et du bon, tickets de frais, pleins ; avance signée et soldée au retour', sub: 'le chauffeur saisit au moment où ça se passe' }] },
      { label: 'Facture et encaissement', items: [{ name: 'Facture émise au retour sur bon signé, attente selon la grille, créances par chargeur contre le terme écrit, relances, export comptable', sub: 'pas de bon, pas de facture' }] },
      { label: 'Direction', items: [{ name: 'Marge par voyage, par camion et par ligne ; km à vide contre seuil ; coût au km depuis la flotte ; avances et bons ouverts', sub: 'le gérant voit quel voyage gagne' }] },
    ], caption: 'Figure 3 · La couche accentuée est le voyage : un ordre, un camion, un chauffeur, une lettre de voiture, des jalons et une preuve de livraison réunis dans un seul objet. La grille au-dessus fixe son prix ; le chauffeur, la facture et la direction en dessous ne font que l’écrire et le lire.', alt: 'Cinq couches : ordres et grille, voyage (accentuée), chauffeur, facture et encaissement, direction.' },
    camions: { caption: 'Figure 4 · Le tableau que le gérant lit à la fin du mois : par camion, les voyages, les kilomètres, la part roulée à vide contre le seuil qu’il a écrit, la recette et la marge, coût fixe au kilomètre compris ; par chargeur, les créances contre le terme du contrat ; et ce qui reste ouvert, avances non soldées, voyages sans bon signé, ordre sans lettre de voiture. Camions, chargeurs et chiffres sont un exemple construit.' },
    etapes: { title: 'Un voyage, en six temps', items: [
      { label: 'Recevoir l’ordre', sub: 'portail, WhatsApp ou API ; prix de la grille' },
      { label: 'Affecter', sub: 'camion, chauffeur ; avance signée' },
      { label: 'Charger', sub: 'lettre de voiture ; photo ; poids' },
      { label: 'Livrer', sub: 'attente horodatée ; bon signé photographié', accent: true },
      { label: 'Revenir', sub: 'fret de retour ; frais justifiés ; avance soldée' },
      { label: 'Facturer et compter', sub: 'facture le soir ; marge du voyage' },
    ], caption: 'Figure 5 · Le temps accentué est la livraison : le bon signé photographié et l’attente horodatée sont ce qui permet de facturer le soir même et de facturer l’attente sans discussion. Avant, l’ordre, l’affectation et le chargement ; après, le retour, la facture et la marge ne sont que des lectures du voyage.', alt: 'Six temps : recevoir l’ordre, affecter, charger, livrer (accentué), revenir, facturer et compter.' },
    calendrier: { title: 'Un logiciel de transport en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Grille et règles', note: 'chargeurs, lignes, grille, franchise d’attente, terme, avance type, seuil de km à vide ; avec le gérant, sans code', from: 0, to: 1 },
      { label: 'Ordres et voyages', note: 'ordre par portail ou WhatsApp, affectation, lettre de voiture, jalons, attente, preuve de livraison', from: 1, to: 3, accent: true },
      { label: 'Application chauffeur', note: 'hors ligne : photos, tickets, pleins, avance soldée ; lien de suivi pour le chargeur', from: 3, to: 4 },
      { label: 'Facture et créances', note: 'facture sur bon signé, attente, créances contre le terme, relances, export', from: 4, to: 5 },
      { label: 'Direction et retours', note: 'marge par voyage et par camion, km à vide, fret de retour par ligne, revue du samedi', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, la première sans code : la grille, la franchise d’attente, le terme et le seuil de kilomètres à vide sont les décisions du gérant. Les deux semaines accentuées sont les ordres et les voyages, parce que la facture, les créances et la marge ne sont que des lectures du voyage.', alt: 'Calendrier de six semaines : grille et règles, ordres et voyages (accentué, deux semaines), application chauffeur, facture et créances, direction et retours.' },
  },
  en: {
    cover: { eyebrow: 'Freight transport software · Algeria · 2027', title: ['Freight transport software', 'in Algeria: trips, empty returns, margin'], subtitle: 'What gets built for a carrier: shipper order, trip, consignment note, driver advance, proof of delivery, invoice that evening, margin per trip', left: { label: 'A truck back empty', sub: 'and an invoice sent three weeks later' }, right: { label: 'A trip counted on return', sub: 'backhaul looked for, invoice that evening' } },
    voyage: { caption: 'Figure 1 · A four-day trip followed from the shipper’s order to the evening invoice: truck and driver assigned with a signed advance, consignment note and photo at loading, timestamped waiting at unloading, delivery proven by a signed and photographed note, backhaul found at three in the afternoon, road expenses settled on return. The same trip earns sixty thousand seven hundred and twenty dinars if it comes back empty and one hundred and fifty-one thousand seven hundred with the backhaul. Figures, distances and names are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The truck comes back empty', cells: ['Found out at the depot', 'backhaul looked for from delivery; shippers in the region told; empty km per truck'] },
      { label: 'Expenses returned without receipts', cells: ['The driver says 25,000, nobody knows', 'signed advance; receipts photographed on the phone; settled on return'] },
      { label: 'Invoice sent three weeks later', cells: ['The paper note stayed in the cab', 'signed note photographed at delivery; invoice issued on return; no note, no invoice'] },
      { label: 'The shipper disputes the waiting', cells: ['Word against word', 'arrival and departure timestamped on the phone; written free time; waiting billed per the grid'] },
      { label: 'Nobody knows which trip makes money', cells: ['Turnover rises, cash does not', 'margin per trip: revenue, fuel, expenses, cost per km; per truck and per lane'] },
      { label: '“Where is my truck?”', cells: ['The shipper calls three times', 'tracking link per trip; milestones; WhatsApp agent answering from the status'] },
    ], caption: 'Figure 2 · The first three rows are settled by the backhaul, the settled advance and the photographed note; the next three by timestamped waiting, margin per trip and the tracking link. None is settled by a more honest driver or a more present manager.', alt: 'Matrix of six situations: empty return, expenses without receipts, late invoice, disputed waiting, unknown margin, calling shipper; what happens and what the application does.' },
    couches: { title: 'Freight transport software, in five layers', layers: [
      { label: 'Orders and rate grid', items: [{ name: 'Shippers, lanes, rate per trip, per tonne or per km, waiting free time, payment term; order received by portal, WhatsApp or API', sub: 'the price is written before loading' }] },
      { label: 'Trip', items: [{ name: 'An order, a truck, a driver, a consignment note, milestones, timestamped waiting, a proof of delivery, a backhaul', sub: 'the trip is the object everything else reads', accent: true }] },
      { label: 'Driver', items: [{ name: 'Offline app: milestones, photos of the load and the note, expense receipts, fill-ups; advance signed and settled on return', sub: 'the driver enters things as they happen' }] },
      { label: 'Invoice and collection', items: [{ name: 'Invoice issued on return on a signed note, waiting per the grid, receivables per shipper against the written term, reminders, accounting export', sub: 'no note, no invoice' }] },
      { label: 'Management', items: [{ name: 'Margin per trip, per truck and per lane; empty km against threshold; cost per km from the fleet; open advances and notes', sub: 'the manager sees which trip makes money' }] },
    ], caption: 'Figure 3 · The accented layer is the trip: an order, a truck, a driver, a consignment note, milestones and a proof of delivery gathered in one object. The grid above sets its price; the driver, the invoice and management below only write and read it.', alt: 'Five layers: orders and rate grid, trip (accented), driver, invoice and collection, management.' },
    camions: { caption: 'Figure 4 · The board the manager reads at month end: per truck, trips, kilometres, the share driven empty against the threshold they wrote, revenue and margin, fixed cost per kilometre included; per shipper, receivables against the contract term; and what is still open, unsettled advances, trips without a signed note, an order without a consignment note. Trucks, shippers and figures are a constructed example.' },
    etapes: { title: 'One trip, in six beats', items: [
      { label: 'Receive the order', sub: 'portal, WhatsApp or API; price from the grid' },
      { label: 'Assign', sub: 'truck, driver; signed advance' },
      { label: 'Load', sub: 'consignment note; photo; weight' },
      { label: 'Deliver', sub: 'timestamped waiting; signed note photographed', accent: true },
      { label: 'Return', sub: 'backhaul; justified expenses; advance settled' },
      { label: 'Invoice and count', sub: 'invoice that evening; trip margin' },
    ], caption: 'Figure 5 · The accented beat is delivery: the photographed signed note and the timestamped waiting are what make it possible to invoice that same evening and to bill waiting without argument. Before it, the order, assignment and loading; after it, the return, the invoice and the margin are only readings of the trip.', alt: 'Six beats: receive the order, assign, load, deliver (accented), return, invoice and count.' },
    calendrier: { title: 'Freight transport software in 2027, in weeks', unit: 'wk', items: [
      { label: 'Grid and rules', note: 'shippers, lanes, grid, waiting free time, term, standard advance, empty-km threshold; with the manager, without code', from: 0, to: 1 },
      { label: 'Orders and trips', note: 'order by portal or WhatsApp, assignment, consignment note, milestones, waiting, proof of delivery', from: 1, to: 3, accent: true },
      { label: 'Driver app', note: 'offline: photos, receipts, fill-ups, settled advance; tracking link for the shipper', from: 3, to: 4 },
      { label: 'Invoice and receivables', note: 'invoice on signed note, waiting, receivables against term, reminders, export', from: 4, to: 5 },
      { label: 'Management and returns', note: 'margin per trip and per truck, empty km, backhaul per lane, Saturday review', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, the first without code: the grid, waiting free time, term and empty-km threshold are the manager’s decisions. The two accented weeks are orders and trips, because the invoice, receivables and margin are only readings of the trip.', alt: 'Six-week timeline: grid and rules, orders and trips (accented, two weeks), driver app, invoice and receivables, management and returns.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج نقل البضائع · الجزائر · 2027', title: ['برنامج نقل البضائع في الجزائر:', 'رحلات، عودة فارغة، هامش'], subtitle: 'ما يُبنى لناقل: أمر الشاحن، الرحلة، رسالة النقل، تسبيق السائق، إثبات التسليم، فاتورة في المساء، هامش لكل رحلة', left: { label: 'شاحنة عادت فارغة', sub: 'وفاتورة خرجت بعد ثلاثة أسابيع' }, right: { label: 'رحلة تُحسب عند العودة', sub: 'حمولة عودة يُبحث عنها، فاتورة في المساء' } },
    voyage: { caption: 'الشكل 1 · رحلة من أربعة أيام متتبَّعة من أمر الشاحن إلى فاتورة المساء: تخصيص الشاحنة والسائق بتسبيق موقَّع، رسالة نقل وصورة عند التحميل، انتظار بختم زمني عند التفريغ، تسليم مُثبت بوصل موقَّع ومصوَّر، حمولة عودة وُجدت على الثالثة بعد الظهر، مصاريف طريق مسوّاة عند العودة. الرحلة نفسها تربح ستين ألفاً وسبعمئة وعشرين ديناراً إن عادت فارغة، ومئة وواحداً وخمسين ألفاً وسبعمئة بحمولة العودة. الأرقام والمسافات والأسماء مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الشاحنة تعود فارغة', cells: ['يُكتشف ذلك في المستودع', 'حمولة عودة يُبحث عنها منذ التسليم؛ شاحنو المنطقة يُخبَرون؛ كلم فارغة لكل شاحنة'] },
      { label: 'مصاريف مُرجَعة دون مبرّر', cells: ['يقول السائق 25 000، ولا أحد يعرف', 'تسبيق موقَّع؛ وصولات مصوَّرة على الهاتف؛ تسوية عند العودة'] },
      { label: 'فاتورة خرجت بعد ثلاثة أسابيع', cells: ['بقي الوصل الورقي في المقصورة', 'وصل موقَّع مصوَّر عند التسليم؛ فاتورة عند العودة؛ لا وصل، لا فاتورة'] },
      { label: 'الشاحن يعترض على الانتظار', cells: ['كلمة مقابل كلمة', 'الوصول والمغادرة بختم زمني على الهاتف؛ مهلة مكتوبة؛ الانتظار يُفوتر وفق الجدول'] },
      { label: 'لا أحد يعرف أي رحلة تربح', cells: ['رقم الأعمال يرتفع، والخزينة لا', 'هامش لكل رحلة: إيراد، وقود، مصاريف، تكلفة للكيلومتر؛ لكل شاحنة وخط'] },
      { label: '«أين شاحنتي؟»', cells: ['يتصل الشاحن ثلاث مرات', 'رابط تتبع لكل رحلة؛ مراحل؛ وكيل واتساب يجيب من الحالة'] },
    ], caption: 'الشكل 2 · الصفوف الثلاثة الأولى تُحل بحمولة العودة والتسبيق المسوّى والوصل المصوَّر؛ والثلاثة التالية بالانتظار المختوم زمنياً والهامش لكل رحلة ورابط التتبع. لا واحدة منها تُحل بسائق أكثر أمانة أو مسيّر أكثر حضوراً.', alt: 'مصفوفة ست حالات: عودة فارغة، مصاريف دون مبرّر، فاتورة متأخرة، انتظار متنازع عليه، هامش مجهول، شاحن يتصل؛ ما يحدث وما يفعله التطبيق.' },
    couches: { title: 'برنامج نقل البضائع، في خمس طبقات', layers: [
      { label: 'الأوامر والجدول', items: [{ name: 'الشاحنون، الخطوط، سعر لكل رحلة أو طن أو كيلومتر، مهلة الانتظار، أجل الدفع؛ أمر يُستلم عبر البوابة أو واتساب أو API', sub: 'السعر يُكتب قبل التحميل' }] },
      { label: 'الرحلة', items: [{ name: 'أمر، شاحنة، سائق، رسالة نقل، مراحل، انتظار بختم زمني، إثبات تسليم، حمولة عودة', sub: 'الرحلة هي الكائن الذي يقرؤه كل ما عداها', accent: true }] },
      { label: 'السائق', items: [{ name: 'تطبيق دون شبكة: مراحل، صور الحمولة والوصل، وصولات المصاريف، التعبئات؛ تسبيق موقَّع ومسوّى عند العودة', sub: 'يُدخل السائق الأشياء لحظة حدوثها' }] },
      { label: 'الفاتورة والتحصيل', items: [{ name: 'فاتورة عند العودة على وصل موقَّع، انتظار وفق الجدول، ديون لكل شاحن مقابل الأجل المكتوب، تذكيرات، تصدير محاسبي', sub: 'لا وصل، لا فاتورة' }] },
      { label: 'الإدارة', items: [{ name: 'هامش لكل رحلة وشاحنة وخط؛ كلم فارغة مقابل عتبة؛ تكلفة للكيلومتر من الأسطول؛ تسبيقات ووصولات مفتوحة', sub: 'يرى المسيّر أي رحلة تربح' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي الرحلة: أمر وشاحنة وسائق ورسالة نقل ومراحل وإثبات تسليم مجتمعة في كائن واحد. الجدول فوقها يحدد سعرها؛ والسائق والفاتورة والإدارة تحتها لا تفعل إلا كتابتها وقراءتها.', alt: 'خمس طبقات: الأوامر والجدول، الرحلة (مبرزة)، السائق، الفاتورة والتحصيل، الإدارة.' },
    camions: { caption: 'الشكل 4 · اللوحة التي يقرؤها المسيّر آخر الشهر: لكل شاحنة، الرحلات والكيلومترات وحصة الفراغ مقابل العتبة التي كتبها والإيراد والهامش، مع التكلفة الثابتة للكيلومتر؛ ولكل شاحن، الديون مقابل أجل العقد؛ وما يبقى مفتوحاً، تسبيقات غير مسوّاة ورحلات دون وصل موقَّع وأمر دون رسالة نقل. الشاحنات والشاحنون والأرقام مثال مبني.' },
    etapes: { title: 'رحلة واحدة، في ستة أوقات', items: [
      { label: 'استلام الأمر', sub: 'بوابة أو واتساب أو API؛ سعر من الجدول' },
      { label: 'التخصيص', sub: 'شاحنة، سائق؛ تسبيق موقَّع' },
      { label: 'التحميل', sub: 'رسالة نقل؛ صورة؛ وزن' },
      { label: 'التسليم', sub: 'انتظار بختم زمني؛ وصل موقَّع مصوَّر', accent: true },
      { label: 'العودة', sub: 'حمولة عودة؛ مصاريف مبرَّرة؛ تسبيق مسوّى' },
      { label: 'الفوترة والحساب', sub: 'فاتورة في المساء؛ هامش الرحلة' },
    ], caption: 'الشكل 5 · الوقت المبرز هو التسليم: الوصل الموقَّع المصوَّر والانتظار المختوم زمنياً هما ما يسمح بالفوترة في المساء نفسه وبفوترة الانتظار دون نقاش. قبله الأمر والتخصيص والتحميل؛ وبعده العودة والفاتورة والهامش مجرد قراءات للرحلة.', alt: 'ستة أوقات: استلام الأمر، التخصيص، التحميل، التسليم (مبرز)، العودة، الفوترة والحساب.' },
    calendrier: { title: 'برنامج نقل سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الجدول والقواعد', note: 'الشاحنون، الخطوط، الجدول، مهلة الانتظار، الأجل، التسبيق النموذجي، عتبة الكلم الفارغة؛ مع المسيّر، دون كود', from: 0, to: 1 },
      { label: 'الأوامر والرحلات', note: 'أمر عبر البوابة أو واتساب، تخصيص، رسالة نقل، مراحل، انتظار، إثبات تسليم', from: 1, to: 3, accent: true },
      { label: 'تطبيق السائق', note: 'دون شبكة: صور، وصولات، تعبئات، تسبيق مسوّى؛ رابط تتبع للشاحن', from: 3, to: 4 },
      { label: 'الفاتورة والديون', note: 'فاتورة على وصل موقَّع، انتظار، ديون مقابل الأجل، تذكيرات، تصدير', from: 4, to: 5 },
      { label: 'الإدارة والعودة', note: 'هامش لكل رحلة وشاحنة، كلم فارغة، حمولة عودة لكل خط، مراجعة السبت', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، الأول دون كود: الجدول ومهلة الانتظار والأجل وعتبة الكلم الفارغة قرارات المسيّر. الأسبوعان المبرزان هما الأوامر والرحلات، لأن الفاتورة والديون والهامش مجرد قراءات للرحلة.', alt: 'تقويم ستة أسابيع: الجدول والقواعد، الأوامر والرحلات (مبرز، أسبوعان)، تطبيق السائق، الفاتورة والديون، الإدارة والعودة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      voyage: { svg: voyage(e.voyage, rtl), caption: t.voyage.caption, alt: e.voyage.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      camions: { svg: camions(e.camions, rtl), caption: t.camions.caption, alt: e.camions.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
