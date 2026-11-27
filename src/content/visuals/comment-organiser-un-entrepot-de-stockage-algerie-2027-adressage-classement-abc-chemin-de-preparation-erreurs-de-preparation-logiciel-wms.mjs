import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { chemin, erreurs, STRINGS as SC } from './custom/entrepot.mjs';
export const slug = 'comment-organiser-un-entrepot-de-stockage-algerie-2027-adressage-classement-abc-chemin-de-preparation-erreurs-de-preparation-logiciel-wms';
const T = {
  fr: {
    cover: { eyebrow: 'Entrepôt · Algérie · 2027', title: ['Organiser un entrepôt', 'une adresse pour chaque chose'], subtitle: 'Adressage des emplacements, classement des articles, trajet de préparation, scan, erreurs', left: { label: 'Au fond, à gauche', sub: 'seul un ancien le sait' }, right: { label: 'Allée B, niveau 2', sub: 'tout le monde le trouve' } },
    flux: { title: 'Le trajet d’une marchandise dans le dépôt, en six temps', items: [
      { label: 'Réception', sub: 'au quai : bon, quantités, état' },
      { label: 'Contrôle', sub: 'conforme, lot et date notés' },
      { label: 'Rangement', sub: 'une adresse proposée, puis scannée', accent: true },
      { label: 'Préparation', sub: 'liste triée dans l’ordre du trajet' },
      { label: 'Emballage', sub: 'contrôle, colis, étiquette' },
      { label: 'Expédition', sub: 'chargé, parti, livré' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est le rangement : c’est là que le stock reçoit son adresse. Une palette posée « en attendant » sans adresse est une palette perdue, même si elle est sous les yeux.', alt: 'Six temps : réception, contrôle, rangement (accentué), préparation, emballage, expédition.' },
    regles: { title: 'Six règles d’un dépôt organisé', columns: ['Ce que la règle évite', 'Comment le logiciel la tient'], rows: [
      { label: 'Une adresse pour chaque emplacement', cells: ['chercher : « c’est au fond, à gauche »', 'allée, travée, niveau : une étiquette à scanner'] },
      { label: 'Un emplacement de prélèvement par article', cells: ['le même article à quatre endroits', 'une adresse fixe, la réserve au-dessus'] },
      { label: 'Les plus sortis près du quai', cells: ['des kilomètres pour les articles courants', 'un classement recalculé sur les sorties'] },
      { label: 'Les références voisines séparées', cells: ['prendre la 12 mm pour la 10 mm', 'deux adresses éloignées, scan de l’article'] },
      { label: 'Rien au sol, rien sans adresse', cells: ['la palette « provisoire » qui reste un mois', 'une zone d’attente, visible et datée'] },
      { label: 'Le plus ancien sort d’abord', cells: ['le stock qui vieillit au fond', 'l’adresse et le lot proposés à la préparation'] },
    ], caption: 'Figure 2 · Six règles. Aucune ne demande de matériel : elles demandent une décision, puis un logiciel qui la fait respecter au moment du geste, parce qu’une règle affichée au mur s’oublie à la première urgence.', alt: 'Matrice de six règles d’un dépôt organisé : une adresse pour chaque emplacement, un emplacement de prélèvement par article, les plus sortis près du quai, les références voisines séparées, rien au sol ni sans adresse, le plus ancien sort d’abord ; pour chacune, ce qu’elle évite et comment le logiciel la tient.' },
    chemin: { caption: 'Figure 3 · La même commande de six lignes dans le même dépôt : 192 m quand les articles sont rangés à l’arrivée, 120 m quand les plus sortis sont près du quai. Distances d’un schéma construit.' },
    couches: { title: 'Ce que tient un logiciel d’entrepôt, en cinq couches', layers: [
      { label: 'Plan', items: [{ name: 'Le plan du dépôt : zones, allées, travées, niveaux, et une adresse par emplacement', sub: 'la carte, sans laquelle rien ne se retrouve' }] },
      { label: 'Stock', items: [{ name: 'Le stock par emplacement : quel article, quel lot, quelle quantité, à quelle adresse', sub: 'non plus « combien », mais « où »', accent: true }] },
      { label: 'Entrées', items: [{ name: 'Les entrées : réception, contrôle, adresse de rangement proposée et confirmée au scan', sub: 'le moment où le stock devient juste' }] },
      { label: 'Sorties', items: [{ name: 'Les sorties : liste dans l’ordre du trajet, scan de l’adresse et de l’article à chaque ligne', sub: 'le moment où l’erreur s’arrête' }] },
      { label: 'Pilotage', items: [{ name: 'Le pilotage : lignes préparées par heure, erreurs, remplissage, articles à déplacer', sub: 'ce qu’on regarde chaque semaine' }] },
    ], caption: 'Figure 4 · Cinq couches. La couche accentuée est le stock par emplacement : un logiciel de stock dit combien il reste ; un logiciel d’entrepôt dit aussi où, et c’est ce « où » qui fait gagner les pas et éviter les erreurs.', alt: 'Cinq couches : le plan du dépôt ; le stock par emplacement (accentuée) ; les entrées ; les sorties ; le pilotage.' },
    erreurs: { caption: 'Figure 5 · 1 000 lignes préparées à la feuille puis au scan : 20 erreurs contre 3. Taux fictifs d’un exemple construit.' },
    calendrier: { title: 'Sept semaines pour un dépôt adressé et préparé au scan', unit: 'sem.', items: [
      { label: 'Relevé', note: 'le plan du dépôt, les familles d’articles, un mois de sorties, les erreurs connues', from: 0, to: 1, accent: true },
      { label: 'Adressage', note: 'zones, allées, niveaux, étiquettes posées, emplacements créés', from: 1, to: 3 },
      { label: 'Classement', note: 'sorties par article, articles courants près du quai, déplacements planifiés', from: 2, to: 4 },
      { label: 'Réception et rangement', note: 'réception au scan, adresse proposée, mise en stock confirmée', from: 3, to: 5 },
      { label: 'Préparation', note: 'liste dans l’ordre du trajet, scan de l’adresse et de l’article, hors ligne', from: 4, to: 6 },
      { label: 'Mesure', note: 'lignes par heure, erreurs, première revue avec l’équipe', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines dans l’exemple, pour un dépôt de quelques allées, sans arrêter l’activité. La période accentuée est la première : on dessine le plan réel et l’on lit un mois de sorties. Durées indicatives d’un exemple construit.', alt: 'Calendrier de sept semaines : relevé (accentué), adressage, classement, réception et rangement, préparation, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Warehouse · Algeria · 2027', title: ['Organising a warehouse', 'an address for everything'], subtitle: 'Location addresses, ranking of items, picking route, scanning, errors', left: { label: 'At the back, left', sub: 'only an old hand knows' }, right: { label: 'Aisle B, level 2', sub: 'anyone can find it' } },
    flux: { title: 'The journey of goods through the depot, in six steps', items: [
      { label: 'Receiving', sub: 'at the dock: note, quantities, condition' },
      { label: 'Check', sub: 'conforming, lot and date noted' },
      { label: 'Put-away', sub: 'an address proposed, then scanned', accent: true },
      { label: 'Picking', sub: 'list sorted in route order' },
      { label: 'Packing', sub: 'check, parcel, label' },
      { label: 'Shipping', sub: 'loaded, gone, delivered' },
    ], caption: 'Figure 1 · Six steps. The accented step is put-away: that is where stock receives its address. A pallet set down “for now” with no address is a lost pallet, even if it is in plain sight.', alt: 'Six steps: receiving, check, put-away (accented), picking, packing, shipping.' },
    regles: { title: 'Six rules of an organised depot', columns: ['What the rule avoids', 'How the software holds it'], rows: [
      { label: 'An address for every location', cells: ['searching: “it’s at the back, on the left”', 'aisle, bay, level: a label to scan'] },
      { label: 'One picking location per item', cells: ['the same item in four places', 'one fixed address, the reserve above it'] },
      { label: 'The busiest items near the dock', cells: ['kilometres walked for everyday items', 'a ranking recalculated from what leaves'] },
      { label: 'Look-alike references kept apart', cells: ['taking the 12 mm for the 10 mm', 'two distant addresses, scan of the item'] },
      { label: 'Nothing on the floor, nothing unaddressed', cells: ['the “temporary” pallet that stays a month', 'a waiting zone, visible and dated'] },
      { label: 'The oldest leaves first', cells: ['stock ageing at the back', 'address and lot proposed at picking'] },
    ], caption: 'Figure 2 · Six rules. None of them calls for equipment: they call for a decision, then software that enforces it at the moment of the gesture, because a rule pinned to the wall is forgotten at the first rush.', alt: 'Matrix of six rules of an organised depot: an address for every location, one picking location per item, the busiest items near the dock, look-alike references kept apart, nothing on the floor or unaddressed, the oldest leaves first; for each, what it avoids and how the software holds it.' },
    chemin: { caption: 'Figure 3 · The same six-line order in the same depot: 192 m when items are stored as they arrive, 120 m when the busiest ones are near the dock. Distances from a constructed plan.' },
    couches: { title: 'What warehouse software holds, in five layers', layers: [
      { label: 'Plan', items: [{ name: 'The plan of the depot: zones, aisles, bays, levels, and one address per location', sub: 'the map, without which nothing is found' }] },
      { label: 'Stock', items: [{ name: 'Stock by location: which item, which lot, what quantity, at which address', sub: 'no longer “how many”, but “where”', accent: true }] },
      { label: 'Inbound', items: [{ name: 'Inbound: receiving, check, put-away address proposed and confirmed by scan', sub: 'the moment stock becomes right' }] },
      { label: 'Outbound', items: [{ name: 'Outbound: list in route order, scan of the address and of the item on each line', sub: 'the moment the error stops' }] },
      { label: 'Steering', items: [{ name: 'Steering: lines picked per hour, errors, fill rate, items to move', sub: 'what is looked at every week' }] },
    ], caption: 'Figure 4 · Five layers. The accented layer is stock by location: stock software says how many are left; warehouse software also says where, and that “where” is what saves the steps and avoids the errors.', alt: 'Five layers: the plan of the depot; stock by location (accented); inbound; outbound; steering.' },
    erreurs: { caption: 'Figure 5 · 1,000 lines picked from a sheet then with a scan: 20 errors against 3. Fictitious rates of a constructed example.' },
    calendrier: { title: 'Seven weeks for a depot with addresses and scanned picking', unit: 'wk', items: [
      { label: 'Survey', note: 'the plan of the depot, the item families, a month of outbound lines, the known errors', from: 0, to: 1, accent: true },
      { label: 'Addressing', note: 'zones, aisles, levels, labels put up, locations created', from: 1, to: 3 },
      { label: 'Ranking', note: 'outbound lines per item, everyday items near the dock, moves planned', from: 2, to: 4 },
      { label: 'Receiving and put-away', note: 'receiving by scan, address proposed, stock entry confirmed', from: 3, to: 5 },
      { label: 'Picking', note: 'list in route order, scan of address and item, offline', from: 4, to: 6 },
      { label: 'Measurement', note: 'lines per hour, errors, first review with the team', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks in the example, for a depot of a few aisles, without stopping activity. The accented period is the first: drawing the real plan and reading a month of outbound lines. Indicative durations of a constructed example.', alt: 'Seven-week calendar: survey (accented), addressing, ranking, receiving and put-away, picking, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'المستودع · الجزائر · 2027', title: ['تنظيم المستودع', 'عنوان لكل شيء'], subtitle: 'عنونة المواضع، تصنيف السلع، مسار التحضير، المسح، والأخطاء', left: { label: 'في الآخر، على اليسار', sub: 'لا يعرفه إلا قديم' }, right: { label: 'الممر ب، المستوى 2', sub: 'يجده الجميع' } },
    flux: { title: 'مسار السلعة في المستودع، في ست مراحل', items: [
      { label: 'الاستلام', sub: 'عند الرصيف: الوصل، الكميات، والحالة' },
      { label: 'المراقبة', sub: 'مطابقة، وحصة وتاريخ مسجَّلان' },
      { label: 'الترتيب', sub: 'عنوان يُقترح، ثم يُمسح', accent: true },
      { label: 'التحضير', sub: 'قائمة مرتّبة حسب المسار' },
      { label: 'التغليف', sub: 'مراقبة، طرد، وملصق' },
      { label: 'الإرسال', sub: 'حُمّل، غادر، وسُلّم' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الترتيب: هناك يتلقى المخزون عنوانه. ومنصّة توضع «مؤقتاً» دون عنوان منصّة ضائعة، حتى لو كانت أمام العينين.', alt: 'ست مراحل: الاستلام، المراقبة، الترتيب (مبرزة)، التحضير، التغليف، والإرسال.' },
    regles: { title: 'ست قواعد لمستودع منظَّم', columns: ['ما تتفاداه القاعدة', 'كيف يمسكها البرنامج'], rows: [
      { label: 'عنوان لكل موضع', cells: ['البحث: «هو في الآخر، على اليسار»', 'ممر، خانة، مستوى: ملصق يُمسح'] },
      { label: 'موضع سحب واحد لكل سلعة', cells: ['السلعة نفسها في أربعة أماكن', 'عنوان ثابت، والاحتياط فوقه'] },
      { label: 'الأكثر خروجاً قرب الرصيف', cells: ['كيلومترات من أجل السلع الجارية', 'تصنيف يُعاد حسابه على المخرجات'] },
      { label: 'المراجع المتشابهة متباعدة', cells: ['أخذ 12 ملم مكان 10 ملم', 'عنوانان متباعدان، ومسح السلعة'] },
      { label: 'لا شيء على الأرض، ولا شيء دون عنوان', cells: ['المنصّة «المؤقتة» التي تبقى شهراً', 'منطقة انتظار، ظاهرة ومؤرَّخة'] },
      { label: 'الأقدم يخرج أولاً', cells: ['المخزون الذي يشيخ في الآخر', 'العنوان والحصة يُقترحان عند التحضير'] },
    ], caption: 'الشكل 2 · ست قواعد. لا واحدة منها تتطلب عتاداً: تتطلب قراراً، ثم برنامجاً يفرضه لحظة الحركة، لأن قاعدة معلَّقة على الجدار تُنسى عند أول استعجال.', alt: 'مصفوفة من ست قواعد لمستودع منظَّم: عنوان لكل موضع، موضع سحب واحد لكل سلعة، الأكثر خروجاً قرب الرصيف، المراجع المتشابهة متباعدة، لا شيء على الأرض ولا دون عنوان، والأقدم يخرج أولاً؛ ولكل واحدة، ما تتفاداه وكيف يمسكها البرنامج.' },
    chemin: { caption: 'الشكل 3 · الطلبية نفسها من ستة أسطر في المستودع نفسه: 192 متراً حين تُرتَّب السلع عند وصولها، و120 متراً حين تكون الأكثر خروجاً قرب الرصيف. مسافات مخطط مركَّب.' },
    couches: { title: 'ما يمسكه برنامج المستودع، في خمس طبقات', layers: [
      { label: 'المخطط', items: [{ name: 'مخطط المستودع: المناطق، الممرات، الخانات، المستويات، وعنوان لكل موضع', sub: 'الخريطة، ودونها لا يُعثر على شيء' }] },
      { label: 'المخزون', items: [{ name: 'المخزون حسب الموضع: أي سلعة، أي حصة، أي كمية، وفي أي عنوان', sub: 'ليس «كم»، بل «أين»', accent: true }] },
      { label: 'المدخلات', items: [{ name: 'المدخلات: استلام، مراقبة، وعنوان ترتيب يُقترح ويؤكَّد بالمسح', sub: 'اللحظة التي يصير فيها المخزون صحيحاً' }] },
      { label: 'المخرجات', items: [{ name: 'المخرجات: قائمة حسب المسار، ومسح العنوان والسلعة في كل سطر', sub: 'اللحظة التي يتوقف فيها الخطأ' }] },
      { label: 'القيادة', items: [{ name: 'القيادة: الأسطر المحضَّرة في الساعة، الأخطاء، نسبة الامتلاء، والسلع التي تُنقل', sub: 'ما يُنظر إليه كل أسبوع' }] },
    ], caption: 'الشكل 4 · خمس طبقات. الطبقة المبرزة هي المخزون حسب الموضع: برنامج المخزون يقول كم بقي؛ وبرنامج المستودع يقول كذلك أين، وهذه الـ«أين» هي التي تربح الخطوات وتتفادى الأخطاء.', alt: 'خمس طبقات: مخطط المستودع؛ المخزون حسب الموضع (مبرزة)؛ المدخلات؛ المخرجات؛ والقيادة.' },
    erreurs: { caption: 'الشكل 5 · 1000 سطر محضَّر بالورقة ثم بالمسح: 20 خطأ مقابل 3. نسب خيالية لمثال مركَّب.' },
    calendrier: { title: 'سبعة أسابيع لمستودع معنوَن ومحضَّر بالمسح', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'مخطط المستودع، عائلات السلع، شهر من المخرجات، والأخطاء المعروفة', from: 0, to: 1, accent: true },
      { label: 'العنونة', note: 'المناطق، الممرات، المستويات، وضع الملصقات، وإنشاء المواضع', from: 1, to: 3 },
      { label: 'التصنيف', note: 'المخرجات لكل سلعة، السلع الجارية قرب الرصيف، ونقل مبرمج', from: 2, to: 4 },
      { label: 'الاستلام والترتيب', note: 'استلام بالمسح، عنوان مقترح، وإدخال إلى المخزون مؤكَّد', from: 3, to: 5 },
      { label: 'التحضير', note: 'قائمة حسب المسار، مسح العنوان والسلعة، ودون اتصال', from: 4, to: 6 },
      { label: 'القياس', note: 'الأسطر في الساعة، الأخطاء، وأول مراجعة مع الفريق', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع في المثال، لمستودع من بضعة ممرات، دون إيقاف النشاط. الفترة المبرزة هي الأولى: رسم المخطط الحقيقي وقراءة شهر من المخرجات. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من سبعة أسابيع: المعاينة (مبرزة)، العنونة، التصنيف، الاستلام والترتيب، التحضير، ثم القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      flux: { svg: steps({ title: t.flux.title, steps: t.flux.items, arrows: true, rtl }), caption: t.flux.caption, alt: t.flux.alt },
      regles: { svg: matrix({ title: t.regles.title, columns: t.regles.columns, rows: t.regles.rows, rtl }), caption: t.regles.caption, alt: t.regles.alt },
      chemin: { svg: chemin(e.chemin, rtl), caption: t.chemin.caption, alt: e.chemin.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      erreurs: { svg: erreurs(e.erreurs, rtl), caption: t.erreurs.caption, alt: e.erreurs.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
