import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { pin, zones, STRINGS as AD } from './custom/address.mjs';
export const slug = 'livrer-sans-adresse-algerie-2027-point-gps-repere-zones-de-livraison-geocodage-confirmation-whatsapp-ce-qu-on-construit';
const T = {
  fr: {
    cover: { eyebrow: 'Adresses · Livraison · Cartes · 2027', title: ['« Le livreur', 'ne trouve pas', 'l’adresse »'], subtitle: 'Ce qu’on construit pour livrer quand la rue n’a pas de numéro : un point posé par le client, un repère, des zones dessinées, une confirmation WhatsApp, et le point confirmé à la remise qui sert la fois suivante', left: { label: 'Une ligne de texte', sub: 'et trois appels avant la porte' }, right: { label: 'Un point, un repère, une zone', sub: 'et la prochaine livraison part du bon endroit' } },
    couches: { title: 'Livrer sans adresse, en cinq couches', layers: [
      { label: 'Saisie', items: [{ name: 'Texte tel que dicté, commune depuis une liste, point posé sur la carte par le client ou l’employé, repère', sub: 'le point vaut plus que le texte ; le texte sert au livreur sur place' }] },
      { label: 'Géocodage et codes', items: [{ name: 'Texte → point quand c’est possible, point → commune toujours ; code court dérivé du point ; résultats en cache', sub: 'le géocodage aide, il ne décide pas ; la précision est stockée avec le point' }] },
      { label: 'Fiche adresse', items: [{ name: 'Texte, point et précision, repère, zone, source et date par champ ; le point de la remise remplace le point client', sub: 'une table d’adresses, pas un champ dans la commande', accent: true }] },
      { label: 'Zones et dispatch', items: [{ name: 'Polygones dessinés par le gérant ; point dans le polygone → tarif, créneau, livreur ; hors zone → relais proposé', sub: 'changer un tarif, c’est redessiner une zone' }] },
      { label: 'Confirmation', items: [{ name: 'WhatsApp avec plan et repère avant départ, appel seulement si « non » ; position partagée ; point et photo à la remise', sub: 'la confirmation remplace les trois appels, et nourrit la fiche' }] },
    ], caption: 'Figure 1 · La couche accentuée est celle que les applications oublient : l’adresse vit dans la commande, comme une ligne de texte, et meurt avec elle. Une table d’adresses, avec un point, sa précision et sa source, est ce qui fait que la deuxième livraison chez le même client part du bon endroit sans rien redemander.', alt: 'Cinq couches : saisie, géocodage et codes, fiche adresse (accentuée), zones et dispatch, confirmation.' },
    adresse: { caption: 'Figure 2 · Une seule adresse, telle qu’elle est vraiment stockée. Le point posé par le client depuis son navigateur est précis à 35 mètres, ce qui est courant entre des immeubles ; le point enregistré par le livreur au moment de la remise est précis à 6 mètres et se trouve 42 mètres plus loin : c’est lui qui est gardé, avec le repère confirmé, et c’est de lui que partira le prochain livreur. Le code court est dérivé du point, pas saisi. Les coordonnées sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'La rue n’a pas de numéro', cells: ['« Cité 1014, bât. C, en face de la pharmacie » ; aucun géocodeur ne trouve', 'le client pose un point sur la carte ; texte et repère restent pour le livreur'] },
      { label: 'Le point du client est à 200 m', cells: ['Posé depuis un bureau, ou GPS imprécis entre des immeubles ; le livreur tourne', 'la précision est stockée ; sous un seuil, on demande un repère ; la remise corrige'] },
      { label: 'Même quartier, trois orthographes', cells: ['El Hidhab, El Hidab, الهضاب : trois clients, aucune statistique par quartier', 'la commune vient d’une liste ; le quartier est un polygone, pas un texte'] },
      { label: 'Livraison hors zone acceptée', cells: ['La commande passe, le livreur découvre 40 km en fin de tournée', 'hors de tout polygone → point relais ou transporteur proposé à la commande'] },
      { label: 'Trois appels avant la porte', cells: ['Le livreur appelle pour l’adresse, puis le bâtiment, puis l’étage', 'WhatsApp avec plan et repère avant départ ; appel seulement si « non »'] },
      { label: 'Le client a déménagé', cells: ['La deuxième commande part vers l’ancien point ; la livraison échoue', 'adresse réutilisée mais confirmée en un mot ; nouvelle fiche si « non »'] },
    ], caption: 'Figure 3 · Les deux premières lignes se règlent par le point et sa précision ; la troisième par des listes et des polygones plutôt que du texte ; la quatrième par le polygone à la commande ; les deux dernières par la confirmation WhatsApp, avant le départ et à chaque nouvelle commande. Aucune ne se règle par un livreur qui connaît mieux la ville.', alt: 'Matrice de six situations : rue sans numéro, point client imprécis, quartier en trois orthographes, hors zone acceptée, trois appels, client déménagé ; ce qui se passe et ce que l’application fait.' },
    zones: { caption: 'Figure 4 · Les zones sont des polygones dessinés par le gérant dans l’application, et tout en découle : la commande 1 tombe dans la zone A et reçoit le tarif, le créneau et les livreurs de A ; les commandes 2 et 3 tombent dans B ; la commande 4 ne tombe dans aucun polygone, et l’application propose un point relais au lieu d’accepter puis d’échouer. Montants et délais sont un exemple construit.' },
    etapes: { title: 'De la commande à la porte, en six étapes', items: [
      { label: 'Poser le point', sub: 'le client sur la carte, ou l’employé au téléphone ; précision stockée' },
      { label: 'Compléter', sub: 'commune depuis la liste, repère en un mot, texte tel que dicté' },
      { label: 'Résoudre la zone', sub: 'point dans le polygone → tarif, créneau ; hors zone → relais', accent: true },
      { label: 'Confirmer', sub: 'WhatsApp avec le plan et le repère ; appel seulement si « non »' },
      { label: 'Livrer', sub: 'tournée ordonnée ; position du livreur partagée ; repère à l’écran' },
      { label: 'Enregistrer la remise', sub: 'point précis, photo, heure ; la fiche adresse est mise à jour' },
    ], caption: 'Figure 5 · L’étape accentuée est celle qui se fait à la commande, pas à la fin de la tournée : le point tombe dans un polygone ou non, et le tarif, le créneau et le livreur en découlent. La sixième étape est celle qui rend la fois suivante facile : le point de la remise remplace le point du client.', alt: 'Six étapes : poser le point, compléter, résoudre la zone (accentuée), confirmer, livrer, enregistrer la remise.' },
    calendrier: { title: 'Livrer sans adresse en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Zones et règles', note: 'polygones dessinés par le gérant, tarifs et créneaux par zone, seuil de précision, liste des communes, qui confirme ; signés', from: 0, to: 1 },
      { label: 'Fiche adresse', note: 'table d’adresses avec point, précision, repère, source et date ; reprise des adresses existantes comme texte à géocoder', from: 1, to: 2, accent: true },
      { label: 'Saisie et carte', note: 'point posé par le client sur le site et l’application, par l’employé au téléphone ; commune depuis la liste ; code court', from: 2, to: 3 },
      { label: 'Zones et dispatch', note: 'point dans le polygone, tarif et créneau à la commande, hors zone proposé, tournée ordonnée', from: 3, to: 4 },
      { label: 'Confirmation et remise', note: 'message WhatsApp avant départ, position partagée, point et photo à la remise, fiche mise à jour', from: 4, to: 5 },
      { label: 'Mesure', note: 'taux de premières livraisons réussies par zone, écart moyen entre point client et point de remise, appels par livraison', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : les polygones et les tarifs sont dessinés et signés par le gérant avant qu’on construise quoi que ce soit. La deuxième semaine est accentuée parce que la table d’adresses est ce qui dure : les commandes passent, les adresses restent. La mesure de la sixième semaine est celle qu’on suit ensuite tous les mois.', alt: 'Frise de six semaines : zones et règles, fiche adresse (accentuée), saisie et carte, zones et dispatch, confirmation et remise, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Addresses · Delivery · Maps · 2027', title: ['“The courier', 'cannot find', 'the address”'], subtitle: 'What gets built to deliver when the street has no number: a point placed by the customer, a landmark, drawn zones, a WhatsApp confirmation, and the point confirmed at hand-over that serves next time', left: { label: 'A line of text', sub: 'and three calls before the door' }, right: { label: 'A point, a landmark, a zone', sub: 'and the next delivery starts from the right place' } },
    couches: { title: 'Delivering without an address, in five layers', layers: [
      { label: 'Capture', items: [{ name: 'Text as dictated, commune from a list, point placed on the map by the customer or the employee, landmark', sub: 'the point is worth more than the text; the text serves the courier on site' }] },
      { label: 'Geocoding and codes', items: [{ name: 'Text → point when possible, point → commune always; short code derived from the point; results cached', sub: 'geocoding helps, it does not decide; accuracy is stored with the point' }] },
      { label: 'Address record', items: [{ name: 'Text, point and accuracy, landmark, zone, source and date per field; the hand-over point replaces the customer point', sub: 'an address table, not a field in the order', accent: true }] },
      { label: 'Zones and dispatch', items: [{ name: 'Polygons drawn by the manager; point inside polygon → fee, window, courier; out of zone → pick-up proposed', sub: 'changing a fee means redrawing a zone' }] },
      { label: 'Confirmation', items: [{ name: 'WhatsApp with map and landmark before departure, call only if “no”; shared position; point and photo at hand-over', sub: 'confirmation replaces the three calls, and feeds the record' }] },
    ], caption: 'Figure 1 · The accented layer is the one applications forget: the address lives in the order, as a line of text, and dies with it. An address table, with a point, its accuracy and its source, is what makes the second delivery to the same customer start from the right place without asking anything again.', alt: 'Five layers: capture, geocoding and codes, address record (accented), zones and dispatch, confirmation.' },
    adresse: { caption: 'Figure 2 · One address, as it is really stored. The point placed by the customer from their browser is accurate to 35 metres, common between buildings; the point recorded by the courier at hand-over is accurate to 6 metres and lies 42 metres away: that one is kept, with the confirmed landmark, and the next courier starts from it. The short code is derived from the point, not typed. The coordinates are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The street has no number', cells: ['“Cité 1014, building C, opposite the pharmacy”; no geocoder finds it', 'the customer places a point on the map; text and landmark stay for the courier'] },
      { label: 'The customer’s point is 200 m off', cells: ['Placed from an office, or a poor GPS fix between buildings; the courier circles', 'accuracy is stored; below a threshold a landmark is asked; hand-over corrects it'] },
      { label: 'Same district, three spellings', cells: ['El Hidhab, El Hidab, الهضاب: three customers, no statistics per district', 'the commune comes from a list; the district is a polygon, not text'] },
      { label: 'Out-of-zone delivery accepted', cells: ['The order goes through, the courier discovers 40 km at the end of the round', 'outside every polygon → pick-up point or carrier proposed at order time'] },
      { label: 'Three calls before the door', cells: ['The courier calls for the address, then the building, then the floor', 'WhatsApp with map and landmark before departure; call only if “no”'] },
      { label: 'The customer has moved', cells: ['The second order heads to the old point; the delivery fails', 'address reused but confirmed in one word; new record if “no”'] },
    ], caption: 'Figure 3 · The first two rows are settled by the point and its accuracy; the third by lists and polygons rather than text; the fourth by the polygon at order time; the last two by the WhatsApp confirmation, before departure and at every new order. None is settled by a courier who knows the city better.', alt: 'Matrix of six situations: street without number, imprecise customer point, district in three spellings, out of zone accepted, three calls, customer moved; what happens and what the application does.' },
    zones: { caption: 'Figure 4 · Zones are polygons drawn by the manager in the application, and everything follows: order 1 falls in zone A and gets A’s fee, window and couriers; orders 2 and 3 fall in B; order 4 falls in no polygon, and the application proposes a pick-up point instead of accepting and then failing. Amounts and delays are a constructed example.' },
    etapes: { title: 'From order to door, in six steps', items: [
      { label: 'Place the point', sub: 'the customer on the map, or the employee on the phone; accuracy stored' },
      { label: 'Complete', sub: 'commune from the list, one-word landmark, text as dictated' },
      { label: 'Resolve the zone', sub: 'point inside polygon → fee, window; out of zone → pick-up', accent: true },
      { label: 'Confirm', sub: 'WhatsApp with map and landmark; call only if “no”' },
      { label: 'Deliver', sub: 'ordered round; courier position shared; landmark on screen' },
      { label: 'Record hand-over', sub: 'precise point, photo, time; the address record is updated' },
    ], caption: 'Figure 5 · The accented step happens at order time, not at the end of the round: the point falls inside a polygon or not, and the fee, the window and the courier follow. The sixth step is what makes next time easy: the hand-over point replaces the customer’s point.', alt: 'Six steps: place the point, complete, resolve the zone (accented), confirm, deliver, record hand-over.' },
    calendrier: { title: 'Delivering without an address in 2027, in weeks', unit: 'wk', items: [
      { label: 'Zones and rules', note: 'polygons drawn by the manager, fees and windows per zone, accuracy threshold, commune list, who confirms; signed', from: 0, to: 1 },
      { label: 'Address record', note: 'address table with point, accuracy, landmark, source and date; existing addresses taken over as text to geocode', from: 1, to: 2, accent: true },
      { label: 'Capture and map', note: 'point placed by the customer on site and app, by the employee on the phone; commune from the list; short code', from: 2, to: 3 },
      { label: 'Zones and dispatch', note: 'point in polygon, fee and window at order time, out of zone proposed, ordered round', from: 3, to: 4 },
      { label: 'Confirmation and hand-over', note: 'WhatsApp message before departure, shared position, point and photo at hand-over, record updated', from: 4, to: 5 },
      { label: 'Measurement', note: 'first-attempt delivery rate per zone, mean gap between customer point and hand-over point, calls per delivery', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: polygons and fees are drawn and signed by the manager before anything is built. The second week is accented because the address table is what lasts: orders pass, addresses stay. The sixth week’s measurement is what is then tracked every month.', alt: 'Six-week timeline: zones and rules, address record (accented), capture and map, zones and dispatch, confirmation and hand-over, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'عناوين · توصيل · خرائط · 2027', title: ['«الموصّل', 'لا يجد', 'العنوان»'], subtitle: 'ما يُبنى للتوصيل حين لا رقم للشارع: نقطة يضعها الزبون، ومعلم، ومناطق مرسومة، وتأكيد WhatsApp، ونقطة مؤكَّدة عند التسليم تخدم المرة التالية', left: { label: 'سطر نص', sub: 'وثلاث مكالمات قبل الباب' }, right: { label: 'نقطة ومعلم ومنطقة', sub: 'والتوصيل التالي ينطلق من المكان الصحيح' } },
    couches: { title: 'التوصيل بلا عنوان، في خمس طبقات', layers: [
      { label: 'الإدخال', items: [{ name: 'نص كما أُملي، بلدية من قائمة، نقطة يضعها الزبون أو الموظف على الخريطة، معلم', sub: 'النقطة أثمن من النص؛ والنص يخدم الموصّل في المكان' }] },
      { label: 'الترميز الجغرافي والرموز', items: [{ name: 'نص ← نقطة حين يمكن، نقطة ← بلدية دائماً؛ رمز قصير مشتق من النقطة؛ نتائج مخزَّنة', sub: 'الترميز يساعد ولا يقرر؛ والدقة تُخزَّن مع النقطة' }] },
      { label: 'بطاقة العنوان', items: [{ name: 'نص، نقطة ودقتها، معلم، منطقة، مصدر وتاريخ لكل حقل؛ نقطة التسليم تحل محل نقطة الزبون', sub: 'جدول عناوين لا حقل في الطلبية', accent: true }] },
      { label: 'المناطق والتوزيع', items: [{ name: 'مضلّعات يرسمها المسيّر؛ نقطة داخل المضلّع ← تعريفة وفترة وموصّل؛ خارجها ← نقطة استلام مقترحة', sub: 'تغيير تعريفة إعادة رسم منطقة' }] },
      { label: 'التأكيد', items: [{ name: 'WhatsApp بالخريطة والمعلم قبل الانطلاق، مكالمة فقط إن «لا»؛ موقع مشترك؛ نقطة وصورة عند التسليم', sub: 'التأكيد يحل محل المكالمات الثلاث ويغذي البطاقة' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي التي تنساها التطبيقات: العنوان يعيش في الطلبية كسطر نص ويموت معها. جدول عناوين بنقطة ودقتها ومصدرها هو ما يجعل التوصيل الثاني للزبون نفسه ينطلق من المكان الصحيح دون سؤال من جديد.', alt: 'خمس طبقات: الإدخال، الترميز الجغرافي والرموز، بطاقة العنوان (مميزة)، المناطق والتوزيع، التأكيد.' },
    adresse: { caption: 'الشكل 2 · عنوان واحد كما يُخزَّن فعلاً. النقطة التي وضعها الزبون من متصفحه دقيقة إلى 35 متراً، وهو شائع بين العمارات؛ والنقطة التي سجّلها الموصّل عند التسليم دقيقة إلى 6 أمتار وتبعد 42 متراً: هي التي تُحفظ مع المعلم المؤكَّد، ومنها ينطلق الموصّل التالي. والرمز القصير مشتق من النقطة لا مكتوب. والإحداثيات مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الشارع بلا رقم', cells: ['«حي 1014، عمارة ج، مقابل الصيدلية»؛ لا مرمّز جغرافي يجده', 'يضع الزبون نقطة على الخريطة؛ النص والمعلم يبقيان للموصّل'] },
      { label: 'نقطة الزبون على بعد 200 م', cells: ['وُضعت من مكتب، أو GPS ضعيف بين العمارات؛ الموصّل يدور', 'الدقة تُخزَّن؛ تحت عتبة يُطلب معلم؛ والتسليم يصحح النقطة'] },
      { label: 'الحي نفسه بثلاث كتابات', cells: ['El Hidhab، El Hidab، الهضاب: ثلاثة زبائن ولا إحصاء حسب الحي', 'البلدية من قائمة؛ والحي مضلّع مرسوم لا نص'] },
      { label: 'قبول توصيل خارج المنطقة', cells: ['الطلبية تمر، والموصّل يكتشف 40 كم في آخر الجولة', 'خارج كل مضلّع ← نقطة استلام أو ناقل يُقترح عند الطلب'] },
      { label: 'ثلاث مكالمات قبل الباب', cells: ['يتصل الموصّل للعنوان، ثم للعمارة، ثم للطابق', 'WhatsApp بالخريطة والمعلم قبل الانطلاق؛ مكالمة فقط إن «لا»'] },
      { label: 'الزبون انتقل', cells: ['الطلبية الثانية تتجه إلى النقطة القديمة؛ يفشل التوصيل', 'العنوان يُعاد استعماله لكن يُؤكَّد بكلمة؛ بطاقة جديدة إن «لا»'] },
    ], caption: 'الشكل 3 · السطران الأولان يُحلان بالنقطة ودقتها؛ والثالث بالقوائم والمضلّعات بدل النص؛ والرابع بالمضلّع عند الطلب؛ والأخيران بتأكيد WhatsApp قبل الانطلاق وعند كل طلبية جديدة. ولا واحد يُحل بموصّل يعرف المدينة أفضل.', alt: 'مصفوفة ست حالات: شارع بلا رقم، نقطة زبون غير دقيقة، حي بثلاث كتابات، خارج المنطقة مقبول، ثلاث مكالمات، زبون انتقل؛ ما يحدث وما يفعله التطبيق.' },
    zones: { caption: 'الشكل 4 · المناطق مضلّعات يرسمها المسيّر في التطبيق، وكل شيء ينتج عنها: الطلبية 1 تقع في المنطقة أ وتأخذ تعريفتها وفترتها وموصّليها؛ والطلبيتان 2 و3 في ب؛ والطلبية 4 لا تقع في أي مضلّع، فيقترح التطبيق نقطة استلام بدل القبول ثم الفشل. والمبالغ والآجال مثال مبني.' },
    etapes: { title: 'من الطلبية إلى الباب، في ست خطوات', items: [
      { label: 'وضع النقطة', sub: 'الزبون على الخريطة، أو الموظف على الهاتف؛ الدقة مخزَّنة' },
      { label: 'الإكمال', sub: 'البلدية من القائمة، معلم بكلمة، النص كما أُملي' },
      { label: 'حل المنطقة', sub: 'نقطة داخل المضلّع ← تعريفة وفترة؛ خارجها ← نقطة استلام', accent: true },
      { label: 'التأكيد', sub: 'WhatsApp بالخريطة والمعلم؛ مكالمة فقط إن «لا»' },
      { label: 'التوصيل', sub: 'جولة مرتَّبة؛ موقع الموصّل مشترك؛ المعلم على الشاشة' },
      { label: 'تسجيل التسليم', sub: 'نقطة دقيقة، صورة، ساعة؛ تُحدَّث بطاقة العنوان' },
    ], caption: 'الشكل 5 · الخطوة المميزة تتم عند الطلب لا في آخر الجولة: تقع النقطة داخل مضلّع أو لا، وتنتج عنها التعريفة والفترة والموصّل. والخطوة السادسة هي ما يجعل المرة التالية سهلة: نقطة التسليم تحل محل نقطة الزبون.', alt: 'ست خطوات: وضع النقطة، الإكمال، حل المنطقة (مميزة)، التأكيد، التوصيل، تسجيل التسليم.' },
    calendrier: { title: 'التوصيل بلا عنوان سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'المناطق والقواعد', note: 'مضلّعات يرسمها المسيّر، تعريفات وفترات لكل منطقة، عتبة الدقة، قائمة البلديات، من يؤكد؛ موقَّعة', from: 0, to: 1 },
      { label: 'بطاقة العنوان', note: 'جدول عناوين بنقطة ودقة ومعلم ومصدر وتاريخ؛ استلام العناوين الموجودة كنص للترميز', from: 1, to: 2, accent: true },
      { label: 'الإدخال والخريطة', note: 'نقطة يضعها الزبون على الموقع والتطبيق، والموظف على الهاتف؛ البلدية من القائمة؛ رمز قصير', from: 2, to: 3 },
      { label: 'المناطق والتوزيع', note: 'نقطة في المضلّع، تعريفة وفترة عند الطلب، خارج المنطقة مقترح، جولة مرتَّبة', from: 3, to: 4 },
      { label: 'التأكيد والتسليم', note: 'رسالة WhatsApp قبل الانطلاق، موقع مشترك، نقطة وصورة عند التسليم، بطاقة محدَّثة', from: 4, to: 5 },
      { label: 'القياس', note: 'نسبة التوصيل الناجح من أول محاولة لكل منطقة، متوسط الفارق بين نقطة الزبون ونقطة التسليم، المكالمات لكل توصيل', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: المضلّعات والتعريفات يرسمها المسيّر ويوقّعها قبل بناء أي شيء. والأسبوع الثاني مميز لأن جدول العناوين هو ما يدوم: الطلبيات تمر والعناوين تبقى. وقياس الأسبوع السادس هو ما يُتابَع بعد ذلك كل شهر.', alt: 'خط زمني من ستة أسابيع: المناطق والقواعد، بطاقة العنوان (مميزة)، الإدخال والخريطة، المناطق والتوزيع، التأكيد والتسليم، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = AD[locale] || AD.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      adresse: { svg: pin(e.pin, rtl), caption: t.adresse.caption, alt: e.pin.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      zones: { svg: zones(e.zones, rtl), caption: t.zones.caption, alt: e.zones.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
