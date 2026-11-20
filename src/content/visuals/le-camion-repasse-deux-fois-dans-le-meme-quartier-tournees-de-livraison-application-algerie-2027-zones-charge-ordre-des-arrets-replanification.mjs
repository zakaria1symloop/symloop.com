import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { plan, day, STRINGS as RD } from './custom/rounds.mjs';
export const slug = 'le-camion-repasse-deux-fois-dans-le-meme-quartier-tournees-de-livraison-application-algerie-2027-zones-charge-ordre-des-arrets-replanification';
const T = {
  fr: {
    cover: { eyebrow: 'Tournées · Livraison · Planification · 2027', title: ['« Le camion repasse', 'deux fois', 'dans le même quartier »'], subtitle: 'Ce qu’on construit pour planifier les tournées : zones, charge, ordre des arrêts par temps de trajet, créneaux, replanification', left: { label: 'Les bons dans l’ordre d’arrivée', sub: 'et le chauffeur qui connaît la ville' }, right: { label: 'Un plan la veille, corrigé le jour', sub: 'et six arrêts déplacés en quatre minutes' } },
    couches: { title: 'La planification des tournées, en cinq couches', layers: [
      { label: 'Données', items: [{ name: 'Adresses géocodées avec zone, créneau client, poids et volume par commande, véhicules avec capacité et heure de départ', sub: 'les adresses et zones viennent du guide sur la livraison sans adresse' }] },
      { label: 'Moteur de trajets', items: [{ name: 'Matrice de temps entre tous les arrêts (table), ordre quasi optimal (trip) ; logiciel libre sur le serveur', sub: 'la rue en sens unique et le pont comptent, pas le vol d’oiseau', accent: true }] },
      { label: 'Plan', items: [{ name: 'Zones, charge, ordre, créneaux ; calculé la veille à 18 h ; modifiable à la main avec recalcul des heures', sub: 'un plan est une hypothèse datée, jamais écrasée' }] },
      { label: 'Application chauffeur', items: [{ name: 'Tournée dans l’ordre, hors ligne ; arrivée et départ horodatés par arrêt ; preuve de livraison ; exceptions avec motif', sub: 'le réel s’écrit arrêt par arrêt, pas en fin de journée' }] },
      { label: 'Journée et mesure', items: [{ name: 'Suivi des écarts, replanification en minutes, messages aux clients déplacés ; arrêts par heure, km par arrêt, créneaux tenus', sub: 'le réel d’aujourd’hui corrige les temps du plan de demain' }] },
    ], caption: 'Figure 1 · La couche accentuée est celle qui change la nature du plan : un ordre d’arrêts calculé sur des temps de trajet réels entre toutes les paires d’adresses, pas sur une distance à vol d’oiseau ni sur la mémoire du chauffeur. Le moteur est un logiciel libre installé sur le serveur, avec les cartes OpenStreetMap ; les autres couches lui donnent ses données et lui rendent le réel.', alt: 'Cinq couches : données, moteur de trajets (accentuée), plan, application chauffeur, journée et mesure.' },
    plan: { caption: 'Figure 2 · Les trente-huit arrêts de mardi dans trois camionnettes. Les arrêts sont regroupés par zone de livraison, la charge de chaque groupe est vérifiée contre la capacité, puis l’ordre des arrêts est calculé à partir d’une matrice de temps de trajet, et les créneaux clients sont vérifiés avec l’heure prévue par arrêt. La camionnette B est à 98 % de charge avec un créneau serré à l’arrêt 3 : le plan le dit la veille. Arrêts, charges et heures sont un exemple construit.' },
    chauffeur: { title: 'La journée du chauffeur, en six temps', items: [
      { label: 'Charger', sub: 'scan de chaque colis au chargement ; un colis manquant ou en trop est vu au dépôt' },
      { label: 'Partir', sub: 'tournée dans l’ordre sur le téléphone ; plan et heures prévues hors ligne' },
      { label: 'Arriver', sub: 'arrivée horodatée ; appel ou message au client depuis l’application', accent: true },
      { label: 'Livrer', sub: 'scan, photo, signature ou code ; encaissement saisi si contre remboursement' },
      { label: 'Signaler', sub: 'absent, refusé, adresse introuvable : motif choisi, photo, nouvelle tentative' },
      { label: 'Rentrer', sub: 'retours scannés au dépôt ; écart prévu-réel par arrêt dans la revue' },
    ], caption: 'Figure 3 · L’étape accentuée est celle qui rend la journée mesurable : l’arrivée est horodatée par l’application, pas déclarée le soir, et le départ aussi. C’est ce couple d’heures par arrêt qui donne les arrêts par heure, les temps réels par zone et, la semaine suivante, un plan plus juste. Tout fonctionne hors ligne dans la cage d’escalier.', alt: 'Six temps : charger, partir, arriver (accentué), livrer, signaler, rentrer.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le camion repasse dans le même quartier', cells: ['Bons dans l’ordre d’arrivée ; 70 km pour 30 arrêts', 'zones puis ordre par temps de trajet ; 46 km pour le même travail'] },
      { label: 'Le client exigeait avant 10 h', cells: ['Livré à 11 h 30 ; marchandise refusée ; retour au dépôt', 'créneau sur la commande ; heure prévue vérifiée ; alerte la veille'] },
      { label: 'Une camionnette tombe en panne', cells: ['Une heure de téléphone ; six clients non livrés', 'replanification en minutes ; arrêts redistribués ; clients prévenus'] },
      { label: 'Le chauffeur « connaît » la ville', cells: ['L’ordre dépend de lui ; le remplaçant met deux heures de plus', 'ordre calculé et affiché ; le remplaçant suit la même tournée'] },
      { label: 'Trop de colis pour le véhicule', cells: ['Découvert au chargement ; un aller-retour improvisé', 'charge vérifiée au plan ; arrêt déplacé la veille'] },
      { label: 'Personne ne sait où en est la tournée', cells: ['Le gérant appelle le chauffeur ; le client appelle le gérant', 'arrivées horodatées ; heure prévue recalculée ; message au client'] },
    ], caption: 'Figure 4 · Les trois premières lignes se règlent par le plan de la veille, ordre par temps de trajet, créneaux vérifiés, et par la replanification du jour ; les trois suivantes par l’ordre affiché au chauffeur, la charge vérifiée et les arrivées horodatées. Aucune ne se règle par un chauffeur plus expérimenté.', alt: 'Matrice de six situations : camion qui repasse, créneau manqué, panne, chauffeur qui connaît la ville, trop de colis, tournée sans visibilité ; ce qui se passe et ce que l’application fait.' },
    journee: { caption: 'Figure 5 · La journée réelle du même mardi. À 10 h 40, la camionnette B tombe en panne avec six arrêts faits sur douze ; les six restants sont redistribués en quatre minutes, trois vers A et trois vers C, parce que les charges, les positions et les temps de trajet sont déjà connus. Les six clients reçoivent la nouvelle heure prévue à 10 h 44, avec une réponse possible. Tout est livré, le dernier retour a lieu à 14 h 20 au lieu de 13 h 10, et deux créneaux sont manqués en ayant prévenu avant l’heure. Horaires et arrêts sont un exemple construit.' },
    calendrier: { title: 'Planifier les tournées en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'véhicules et capacités, heure de départ, zones, créneaux clients, motifs d’exception ; avec le gérant et le responsable d’exploitation', from: 0, to: 1 },
      { label: 'Données et moteur', note: 'adresses géocodées, poids et volume par commande, moteur de trajets installé avec les cartes, matrice de temps testée sur une tournée réelle', from: 1, to: 2 },
      { label: 'Plan', note: 'zones, charge, ordre, créneaux ; écran du planificateur ; modification à la main avec recalcul ; plan de la veille à 18 h', from: 2, to: 4, accent: true },
      { label: 'Application chauffeur', note: 'tournée hors ligne, arrivée et départ horodatés, preuve de livraison, exceptions, retours', from: 4, to: 5 },
      { label: 'Journée', note: 'suivi des écarts, replanification, messages aux clients déplacés, revue du soir', from: 5, to: 6 },
      { label: 'Mesure', note: 'arrêts par heure, km par arrêt, créneaux tenus, premières livraisons réussies ; temps réels réinjectés dans le plan', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les véhicules, les zones, les créneaux et les motifs d’exception sont des décisions d’exploitation. Les deux semaines accentuées sont le plan, parce que c’est lui que le gérant voit chaque soir et que le chauffeur suit chaque matin. L’application chauffeur réutilise ce qui existe déjà pour la preuve de livraison et le hors ligne.', alt: 'Frise de sept semaines : règles, données et moteur, plan (accentué, deux semaines), application chauffeur, journée, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Rounds · Delivery · Planning · 2027', title: ['“The van drives', 'through the same', 'neighbourhood twice”'], subtitle: 'What gets built to plan delivery rounds: zones, load, stop order by travel time, windows, re-planning', left: { label: 'Notes in order of arrival', sub: 'and a driver who knows the city' }, right: { label: 'A plan the evening before, fixed by day', sub: 'and six stops moved in four minutes' } },
    couches: { title: 'Round planning, in five layers', layers: [
      { label: 'Data', items: [{ name: 'Geocoded addresses with zone, customer window, weight and volume per order, vehicles with capacity and departure time', sub: 'addresses and zones come from the no-address delivery guide' }] },
      { label: 'Routing engine', items: [{ name: 'Travel-time matrix between all stops (table), near-optimal order (trip); open-source software on the server', sub: 'the one-way street and the bridge count, not straight-line distance', accent: true }] },
      { label: 'Plan', items: [{ name: 'Zones, load, order, windows; computed the evening before at 18:00; editable by hand with recompute', sub: 'a plan is a dated hypothesis, never overwritten' }] },
      { label: 'Driver application', items: [{ name: 'Round in order, offline; timestamped arrival and departure per stop; proof of delivery; exceptions with reason', sub: 'the actual is written stop by stop, not at the end of the day' }] },
      { label: 'Day and measurement', items: [{ name: 'Deviation tracking, re-planning in minutes, messages to moved customers; stops per hour, km per stop, windows met', sub: 'today’s actual corrects tomorrow’s planned times' }] },
    ], caption: 'Figure 1 · The accented layer is what changes the nature of the plan: a stop order computed on real travel times between all pairs of addresses, not on straight-line distance nor on the driver’s memory. The engine is open-source software installed on the server, with OpenStreetMap maps; the other layers feed it data and return the actual to it.', alt: 'Five layers: data, routing engine (accented), plan, driver application, day and measurement.' },
    plan: { caption: 'Figure 2 · Tuesday’s thirty-eight stops in three vans. Stops are grouped by delivery zone, each group’s load is checked against capacity, then the stop order is computed from a travel-time matrix, and customer windows are checked against the planned time per stop. Van B is at 98 % load with a tight window at stop 3: the plan says so the evening before. Stops, loads and times are a constructed example.' },
    chauffeur: { title: 'The driver’s day, in six beats', items: [
      { label: 'Load', sub: 'each parcel scanned at loading; a missing or extra parcel is seen at the depot' },
      { label: 'Leave', sub: 'round in order on the phone; plan and planned times offline' },
      { label: 'Arrive', sub: 'timestamped arrival; call or message to the customer from the app', accent: true },
      { label: 'Deliver', sub: 'scan, photo, signature or code; cash entered if cash on delivery' },
      { label: 'Report', sub: 'absent, refused, address not found: chosen reason, photo, new attempt' },
      { label: 'Return', sub: 'returns scanned at the depot; planned-vs-actual gap per stop in the review' },
    ], caption: 'Figure 3 · The accented beat is what makes the day measurable: arrival is timestamped by the application, not declared in the evening, and so is departure. That pair of times per stop gives stops per hour, real times per zone and, the following week, a fairer plan. Everything works offline in the stairwell.', alt: 'Six beats: load, leave, arrive (accented), deliver, report, return.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The van drives through the same neighbourhood again', cells: ['Notes in order of arrival; 70 km for 30 stops', 'zones then order by travel time; 46 km for the same work'] },
      { label: 'The customer required before 10:00', cells: ['Delivered at 11:30; goods refused; back to the depot', 'window on the order; planned time checked; alert the evening before'] },
      { label: 'A van breaks down', cells: ['An hour on the phone; six customers not delivered', 're-planning in minutes; stops redistributed; customers warned'] },
      { label: 'The driver “knows” the city', cells: ['The order depends on him; the replacement takes two hours more', 'order computed and shown; the replacement follows the same round'] },
      { label: 'Too many parcels for the vehicle', cells: ['Found at loading; an improvised round trip', 'load checked in the plan; stop moved the evening before'] },
      { label: 'Nobody knows where the round is', cells: ['The manager calls the driver; the customer calls the manager', 'timestamped arrivals; planned time recomputed; message to the customer'] },
    ], caption: 'Figure 4 · The first three rows are settled by the evening plan, order by travel time, windows checked, and by the day’s re-planning; the next three by the order shown to the driver, the checked load and the timestamped arrivals. None is settled by a more experienced driver.', alt: 'Matrix of six situations: van driving through again, missed window, breakdown, driver who knows the city, too many parcels, round without visibility; what happens and what the application does.' },
    journee: { caption: 'Figure 5 · The real day of the same Tuesday. At 10:40, van B breaks down with six of twelve stops done; the remaining six are redistributed in four minutes, three to A and three to C, because loads, positions and travel times are already known. The six customers receive the new planned time at 10:44, with a possible reply. Everything is delivered, the last return is at 14:20 instead of 13:10, and two windows are missed with warning before the time. Times and stops are a constructed example.' },
    calendrier: { title: 'Planning rounds in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'vehicles and capacities, departure time, zones, customer windows, exception reasons; with the manager and the operations lead', from: 0, to: 1 },
      { label: 'Data and engine', note: 'geocoded addresses, weight and volume per order, routing engine installed with maps, time matrix tested on a real round', from: 1, to: 2 },
      { label: 'Plan', note: 'zones, load, order, windows; planner screen; hand edits with recompute; evening plan at 18:00', from: 2, to: 4, accent: true },
      { label: 'Driver application', note: 'offline round, timestamped arrival and departure, proof of delivery, exceptions, returns', from: 4, to: 5 },
      { label: 'Day', note: 'deviation tracking, re-planning, messages to moved customers, evening review', from: 5, to: 6 },
      { label: 'Measurement', note: 'stops per hour, km per stop, windows met, first-attempt deliveries; real times fed back into the plan', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: vehicles, zones, windows and exception reasons are operations decisions. The two accented weeks are the plan, because it is what the manager sees every evening and what the driver follows every morning. The driver application reuses what already exists for proof of delivery and offline work.', alt: 'Seven-week timeline: rules, data and engine, plan (accented, two weeks), driver application, day, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'جولات · توصيل · تخطيط · 2027', title: ['«الشاحنة تمر', 'مرتين', 'في الحي نفسه»'], subtitle: 'ما يُبنى لتخطيط جولات التوصيل: مناطق، حمولة، ترتيب المحطات بزمن السفر، نوافذ، إعادة تخطيط', left: { label: 'الوصول بترتيب الوصول', sub: 'وسائق يعرف المدينة' }, right: { label: 'خطة عشية اليوم تُصحَّح نهاراً', sub: 'وست محطات تُنقل في أربع دقائق' } },
    couches: { title: 'تخطيط الجولات، في خمس طبقات', layers: [
      { label: 'البيانات', items: [{ name: 'عناوين مرمَّزة جغرافياً بمنطقة، نافذة الزبون، وزن وحجم لكل طلبية، مركبات بسعة ووقت انطلاق', sub: 'العناوين والمناطق من دليل التوصيل بلا عنوان' }] },
      { label: 'محرك المسارات', items: [{ name: 'مصفوفة أزمنة السفر بين كل المحطات (table)، ترتيب قريب من الأمثل (trip)؛ برنامج حر على الخادم', sub: 'الشارع ذو الاتجاه الواحد والجسر يُحسبان لا المسافة المستقيمة', accent: true }] },
      { label: 'الخطة', items: [{ name: 'مناطق، حمولة، ترتيب، نوافذ؛ تُحسب عشية اليوم عند 18:00؛ قابلة للتعديل اليدوي مع إعادة حساب', sub: 'الخطة فرضية مؤرَّخة لا تُمحى أبداً' }] },
      { label: 'تطبيق السائق', items: [{ name: 'جولة بالترتيب دون اتصال؛ وصول ومغادرة موقَّتان لكل محطة؛ إثبات تسليم؛ استثناءات بسبب', sub: 'الفعلي يُكتب محطةً محطة لا في آخر اليوم' }] },
      { label: 'اليوم والقياس', items: [{ name: 'تتبع الانحرافات، إعادة تخطيط بالدقائق، رسائل للزبائن المنقولين؛ محطات في الساعة، كم لكل محطة، نوافذ محترمة', sub: 'فعلي اليوم يصحّح أوقات خطة الغد' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي ما يغيّر طبيعة الخطة: ترتيب محطات محسوب على أزمنة سفر حقيقية بين كل أزواج العناوين، لا على مسافة مستقيمة ولا على ذاكرة السائق. والمحرك برنامج حر مثبَّت على الخادم بخرائط OpenStreetMap؛ والطبقات الأخرى تغذيه بالبيانات وتعيد إليه الفعلي.', alt: 'خمس طبقات: البيانات، محرك المسارات (مميزة)، الخطة، تطبيق السائق، اليوم والقياس.' },
    plan: { caption: 'الشكل 2 · محطات الثلاثاء الثماني والثلاثون في ثلاث شاحنات. تُجمَّع المحطات حسب منطقة التوصيل، وتُفحص حمولة كل مجموعة مقابل السعة، ثم يُحسب ترتيب المحطات من مصفوفة أزمنة السفر، وتُفحص نوافذ الزبائن مع الوقت المخطط لكل محطة. الشاحنة ب عند 98 ٪ من الحمولة بنافذة ضيقة في المحطة 3: والخطة تقول ذلك عشية اليوم. والمحطات والحمولات والأوقات مثال مبني.' },
    chauffeur: { title: 'يوم السائق، في ستة أوقات', items: [
      { label: 'التحميل', sub: 'مسح كل طرد عند التحميل؛ الطرد الناقص أو الزائد يُرى في المستودع' },
      { label: 'الانطلاق', sub: 'جولة بالترتيب على الهاتف؛ الخطة والأوقات المخططة دون اتصال' },
      { label: 'الوصول', sub: 'وصول موقَّت؛ اتصال أو رسالة للزبون من التطبيق', accent: true },
      { label: 'التسليم', sub: 'مسح، صورة، توقيع أو رمز؛ تحصيل يُدخَل إن كان الدفع عند الاستلام' },
      { label: 'الإبلاغ', sub: 'غائب، مرفوض، عنوان غير موجود: سبب مختار، صورة، محاولة جديدة' },
      { label: 'العودة', sub: 'الإرجاعات تُمسح في المستودع؛ فارق المخطط والفعلي لكل محطة في المراجعة' },
    ], caption: 'الشكل 3 · الوقت المميز هو ما يجعل اليوم قابلاً للقياس: الوصول يوقّته التطبيق لا يُصرَّح به مساءً، والمغادرة كذلك. وهذا الزوج من الأوقات لكل محطة يعطي المحطات في الساعة والأزمنة الحقيقية لكل منطقة، وفي الأسبوع التالي خطة أعدل. وكل شيء يعمل دون اتصال في بئر السلم.', alt: 'ستة أوقات: التحميل، الانطلاق، الوصول (مميز)، التسليم، الإبلاغ، العودة.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الشاحنة تمر في الحي نفسه مرة أخرى', cells: ['وصول بترتيب الوصول؛ 70 كم لـ 30 محطة', 'مناطق ثم ترتيب بزمن السفر؛ 46 كم للعمل نفسه'] },
      { label: 'الزبون اشترط قبل 10:00', cells: ['سُلّم عند 11:30؛ بضاعة مرفوضة؛ عودة إلى المستودع', 'نافذة على الطلبية؛ وقت مخطط مفحوص؛ تنبيه عشية اليوم'] },
      { label: 'شاحنة تتعطل', cells: ['ساعة من الهاتف؛ ستة زبائن لم يُسلَّموا', 'إعادة تخطيط بالدقائق؛ محطات موزَّعة؛ زبائن منبَّهون'] },
      { label: 'السائق «يعرف» المدينة', cells: ['الترتيب يتوقف عليه؛ البديل يأخذ ساعتين زيادة', 'ترتيب محسوب ومعروض؛ البديل يتبع الجولة نفسها'] },
      { label: 'طرود أكثر من سعة المركبة', cells: ['يُكتشف عند التحميل؛ ذهاب وإياب مرتجل', 'حمولة مفحوصة في الخطة؛ محطة تُنقل عشية اليوم'] },
      { label: 'لا أحد يعرف أين وصلت الجولة', cells: ['المسيّر يتصل بالسائق؛ الزبون يتصل بالمسيّر', 'وصول موقَّت؛ وقت مخطط معاد حسابه؛ رسالة للزبون'] },
    ], caption: 'الشكل 4 · الأسطر الثلاثة الأولى تُحل بخطة المساء، ترتيب بزمن السفر ونوافذ مفحوصة، وبإعادة تخطيط اليوم؛ والثلاثة التالية بالترتيب المعروض للسائق والحمولة المفحوصة والوصول الموقَّت. ولا واحد يُحل بسائق أكثر خبرة.', alt: 'مصفوفة ست حالات: شاحنة تمر من جديد، نافذة فائتة، عطل، سائق يعرف المدينة، طرود زائدة، جولة بلا رؤية؛ ما يحدث وما يفعله التطبيق.' },
    journee: { caption: 'الشكل 5 · اليوم الحقيقي للثلاثاء نفسه. عند 10:40 تتعطل الشاحنة ب وقد أنجزت ست محطات من اثنتي عشرة؛ تُوزَّع الست المتبقية في أربع دقائق، ثلاث إلى أ وثلاث إلى ج، لأن الحمولات والمواقع وأزمنة السفر معروفة سلفاً. ويتلقى الزبائن الستة الوقت المخطط الجديد عند 10:44 مع إمكانية الرد. يُسلَّم كل شيء، وتكون آخر عودة عند 14:20 بدل 13:10، وتفوت نافذتان مع تنبيه قبل الوقت. والأوقات والمحطات مثال مبني.' },
    calendrier: { title: 'تخطيط الجولات سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'المركبات وسعاتها، وقت الانطلاق، المناطق، نوافذ الزبائن، أسباب الاستثناء؛ مع المسيّر ومسؤول التشغيل', from: 0, to: 1 },
      { label: 'البيانات والمحرك', note: 'عناوين مرمَّزة، وزن وحجم لكل طلبية، محرك مسارات مثبَّت بالخرائط، مصفوفة أزمنة مجرَّبة على جولة حقيقية', from: 1, to: 2 },
      { label: 'الخطة', note: 'مناطق، حمولة، ترتيب، نوافذ؛ شاشة المخطط؛ تعديل يدوي مع إعادة حساب؛ خطة المساء عند 18:00', from: 2, to: 4, accent: true },
      { label: 'تطبيق السائق', note: 'جولة دون اتصال، وصول ومغادرة موقَّتان، إثبات تسليم، استثناءات، إرجاعات', from: 4, to: 5 },
      { label: 'اليوم', note: 'تتبع الانحرافات، إعادة تخطيط، رسائل للزبائن المنقولين، مراجعة المساء', from: 5, to: 6 },
      { label: 'القياس', note: 'محطات في الساعة، كم لكل محطة، نوافذ محترمة، تسليمات من المحاولة الأولى؛ أزمنة حقيقية تُعاد إلى الخطة', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: المركبات والمناطق والنوافذ وأسباب الاستثناء قرارات تشغيل. والأسبوعان المميزان هما الخطة، لأنها ما يراه المسيّر كل مساء وما يتبعه السائق كل صباح. وتطبيق السائق يعيد استعمال ما هو موجود أصلاً لإثبات التسليم والعمل دون اتصال.', alt: 'خط زمني من سبعة أسابيع: القواعد، البيانات والمحرك، الخطة (مميز، أسبوعان)، تطبيق السائق، اليوم، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = RD[locale] || RD.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      plan: { svg: plan(e.plan, rtl), caption: t.plan.caption, alt: e.plan.alt },
      chauffeur: { svg: steps({ title: t.chauffeur.title, steps: t.chauffeur.items, arrows: true, rtl }), caption: t.chauffeur.caption, alt: t.chauffeur.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      journee: { svg: day(e.day, rtl), caption: t.journee.caption, alt: e.day.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
