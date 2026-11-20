import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { vehicle, fleet, STRINGS as FT } from './custom/fleet.mjs';
export const slug = 'le-carburant-coute-plus-que-prevu-et-personne-ne-sait-pourquoi-gestion-de-flotte-application-algerie-2027-releves-consommation-entretien-au-km';
const T = {
  fr: {
    cover: { eyebrow: 'Flotte · Carburant · Entretien · 2027', title: ['« Le carburant coûte', 'plus que prévu, et personne', 'ne sait pourquoi »'], subtitle: 'Ce qu’on construit pour une flotte : relevés de compteur, consommation calculée, bande attendue, entretien au km, échéances, coût par km', left: { label: 'Des tickets dans une boîte', sub: 'et un total qui monte chaque mois' }, right: { label: 'Un plein, deux relevés, un calcul', sub: 'et une question posée au bon chauffeur' } },
    couches: { title: 'La gestion de flotte, en cinq couches', layers: [
      { label: 'Véhicules et chauffeurs', items: [{ name: 'Une fiche par véhicule : compteur, chauffeur habituel, affectations, plans d’entretien, documents avec dates', sub: 'la fiche existe avant la panne et avant l’amende' }] },
      { label: 'Relevés', items: [{ name: 'Compteur photographié au départ, au retour et à chaque plein ; litres et montant lus sur le ticket ; horodatés, hors ligne', sub: 'aucun chiffre déclaré de mémoire', accent: true }] },
      { label: 'Calculs', items: [{ name: 'Consommation par plein depuis litres et écart de compteur ; bande attendue par véhicule depuis son historique ; coût par km', sub: 'chaque véhicule comparé à lui-même' }] },
      { label: 'Alertes', items: [{ name: 'Plein hors bande, entretien dû par km, document à échéance ; question au chauffeur, tâche au gérant, qualification avec cause', sub: 'une alerte est une question, pas une sanction' }] },
      { label: 'Mesure et décision', items: [{ name: 'Coût par km par véhicule, carburant et entretien séparés, km par chauffeur, anomalies qualifiées ; remplacer ou garder', sub: 'le chiffre qui décide quel véhicule part en premier' }] },
    ], caption: 'Figure 1 · La couche accentuée est celle des relevés : un compteur photographié au départ et au retour de chaque tournée et à chaque plein, un ticket lu, le tout horodaté et saisi hors ligne. Tout ce qui est au-dessus en découle ; rien n’est déclaré de mémoire le soir. Le véhicule est un équipement au sens du guide sur les interventions terrain, avec un compteur en plus.', alt: 'Cinq couches : véhicules et chauffeurs, relevés (accentuée), calculs, alertes, mesure et décision.' },
    vehicule: { caption: 'Figure 2 · La fiche d’une camionnette : dix pleins depuis septembre, chacun transformé en litres aux cent kilomètres depuis le ticket et l’écart de compteur. Huit tiennent dans la bande attendue, calculée sur l’historique de ce véhicule, et deux en sortent, signalés avec la date et le chauffeur du jour : une question est posée, pas une accusation. À droite, l’entretien dû par kilomètre et les documents à échéance, avec l’alerte avant la date. Véhicule, pleins et coûts sont un exemple construit.' },
    flotte: { caption: 'Figure 3 · Le tableau de la flotte : six véhicules, chacun comparé à son propre attendu, avec le coût par kilomètre, l’état de l’entretien et des documents, et un signal quand quelque chose demande une décision. Un fourgon chargé à treize litres n’est pas une anomalie ; une camionnette à quinze en est une. Le coût par kilomètre, carburant et entretien sur les kilomètres relevés, est le chiffre qui décide quel véhicule remplacer. Véhicules et coûts sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le carburant coûte plus que prévu', cells: ['Un total qui monte ; personne ne sait quel véhicule ni quand', 'consommation par plein et par véhicule ; hors bande signalé le jour même'] },
      { label: 'Le ticket ne correspond pas au compteur', cells: ['62 litres pour 400 km ; découvert au mois, ou jamais', 'calcul au plein ; question au chauffeur avec le ticket et les deux relevés'] },
      { label: 'La vidange est faite trop tard', cells: ['Compteur jamais relevé ; moteur abîmé', 'entretien dû par km depuis les relevés de tournée ; alerte avant'] },
      { label: 'L’assurance a expiré hier', cells: ['Amende, immobilisation, client non livré', 'dates sur la fiche ; alerte à 30 et 7 jours ; véhicule bloqué au planning'] },
      { label: 'Deux chauffeurs, un véhicule, un accident', cells: ['Personne ne sait qui conduisait', 'affectation par jour et par tournée ; relevé au départ signé'] },
      { label: 'Quel véhicule remplacer ?', cells: ['Le plus vieux, au sentiment', 'coût par km par véhicule, carburant et entretien séparés, sur six mois'] },
    ], caption: 'Figure 4 · Les trois premières lignes se règlent par les relevés et les calculs qui en découlent ; les trois suivantes par les dates sur la fiche, l’affectation par tournée et le coût par kilomètre. Aucune ne se règle par un chauffeur plus honnête ou un gérant plus méfiant.', alt: 'Matrice de six situations : carburant trop cher, ticket incohérent, vidange tardive, assurance expirée, conducteur inconnu, véhicule à remplacer ; ce qui se passe et ce que l’application fait.' },
    plein: { title: 'Un plein, en six temps', items: [
      { label: 'Relever le compteur', sub: 'photo du compteur ; chiffres lus et confirmés ; horodaté, hors ligne' },
      { label: 'Scanner le ticket', sub: 'litres, montant, station lus sur la photo ; corrigés si besoin' },
      { label: 'Calculer', sub: 'litres ÷ km depuis le plein précédent × 100 ; comparé à la bande', accent: true },
      { label: 'Signaler', sub: 'hors bande : question au chauffeur avec ticket et relevés' },
      { label: 'Qualifier', sub: 'gérant : cause codée, charge, trajet, fuite, ou anomalie confirmée' },
      { label: 'Imputer', sub: 'coût au véhicule, au chauffeur, à la tournée ; export comptable' },
    ], caption: 'Figure 5 · L’étape accentuée est le calcul, parce qu’il est fait au moment du plein, pas au mois, et parce qu’il compare le véhicule à lui-même. Les deux premières étapes prennent trente secondes à la pompe, hors ligne ; les deux dernières appartiennent au gérant, qui qualifie avec une cause et impute le coût là où il va.', alt: 'Six temps : relever le compteur, scanner le ticket, calculer (accentué), signaler, qualifier, imputer.' },
    calendrier: { title: 'Outiller une flotte en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'liste des véhicules, plans d’entretien par km, documents et dates, largeur de bande, causes de qualification ; avec le gérant et un chauffeur', from: 0, to: 1 },
      { label: 'Fiches et relevés', note: 'fiche véhicule, affectation par tournée, relevé photo au départ, au retour et au plein, hors ligne', from: 1, to: 3, accent: true },
      { label: 'Calculs et alertes', note: 'consommation par plein, bande par véhicule, entretien au km, échéances, questions et qualification', from: 3, to: 4 },
      { label: 'Coûts', note: 'carburant et entretien par véhicule et par km, imputation aux tournées, export comptable', from: 4, to: 5 },
      { label: 'Reprise', note: 'historique de pleins depuis les tickets ou le fichier, compteurs de départ, bandes initiales', from: 5, to: 6 },
      { label: 'Mesure', note: 'coût par km par véhicule, anomalies qualifiées, entretiens à l’heure, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les plans d’entretien, les dates des documents et la largeur de la bande sont des décisions du gérant, prises avec un chauffeur. Les deux semaines accentuées sont les fiches et les relevés, parce que sans relevé il n’y a ni consommation, ni entretien au kilomètre, ni coût par kilomètre.', alt: 'Frise de sept semaines : règles, fiches et relevés (accentué, deux semaines), calculs et alertes, coûts, reprise, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Fleet · Fuel · Maintenance · 2027', title: ['“Fuel costs more', 'than planned, and nobody', 'knows why”'], subtitle: 'What gets built for a fleet: odometer readings, computed consumption, expected band, maintenance by km, due dates, cost per km', left: { label: 'Receipts in a box', sub: 'and a total that rises every month' }, right: { label: 'One fuel-up, two readings, one computation', sub: 'and a question asked to the right driver' } },
    couches: { title: 'Fleet management, in five layers', layers: [
      { label: 'Vehicles and drivers', items: [{ name: 'One record per vehicle: odometer, usual driver, assignments, maintenance plans, documents with dates', sub: 'the record exists before the breakdown and before the fine' }] },
      { label: 'Readings', items: [{ name: 'Odometer photographed at start, end and every fuel-up; litres and amount read from the receipt; timestamped, offline', sub: 'no figure declared from memory', accent: true }] },
      { label: 'Computations', items: [{ name: 'Consumption per fuel-up from litres and odometer gap; expected band per vehicle from its history; cost per km', sub: 'every vehicle compared with itself' }] },
      { label: 'Alerts', items: [{ name: 'Fuel-up out of band, maintenance due by km, document due; question to the driver, task to the manager, qualification with cause', sub: 'an alert is a question, not a sanction' }] },
      { label: 'Measurement and decision', items: [{ name: 'Cost per km per vehicle, fuel and maintenance apart, km per driver, qualified anomalies; replace or keep', sub: 'the figure that decides which vehicle goes first' }] },
    ], caption: 'Figure 1 · The accented layer is readings: an odometer photographed at the start and end of every round and at every fuel-up, a receipt read, everything timestamped and entered offline. Everything above follows from it; nothing is declared from memory in the evening. The vehicle is equipment in the sense of the field service guide, with an odometer added.', alt: 'Five layers: vehicles and drivers, readings (accented), computations, alerts, measurement and decision.' },
    vehicule: { caption: 'Figure 2 · One van’s record: ten fuel-ups since September, each turned into litres per hundred kilometres from the receipt and the odometer gap. Eight fit in the expected band, computed on this vehicle’s history, and two fall outside, flagged with the date and the day’s driver: a question is asked, not an accusation. On the right, maintenance due by kilometre and documents coming due, with the alert before the date. Vehicle, fuel-ups and costs are a constructed example.' },
    flotte: { caption: 'Figure 3 · The fleet board: six vehicles, each compared with its own expected value, with cost per kilometre, maintenance and document state, and a flag when something needs a decision. A loaded truck at thirteen litres is not an anomaly; a van at fifteen is. Cost per kilometre, fuel and maintenance over the kilometres read, is the figure that decides which vehicle to replace. Vehicles and costs are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Fuel costs more than planned', cells: ['A rising total; nobody knows which vehicle nor when', 'consumption per fuel-up and per vehicle; out of band flagged the same day'] },
      { label: 'The receipt does not match the odometer', cells: ['62 litres for 400 km; found at month end, or never', 'computed at fuel-up; question to the driver with receipt and both readings'] },
      { label: 'The oil change is done too late', cells: ['Odometer never read; engine damaged', 'maintenance due by km from round readings; alert before'] },
      { label: 'The insurance expired yesterday', cells: ['Fine, vehicle grounded, customer not delivered', 'dates on the record; alert at 30 and 7 days; vehicle blocked in planning'] },
      { label: 'Two drivers, one vehicle, one accident', cells: ['Nobody knows who was driving', 'assignment per day and per round; start reading signed'] },
      { label: 'Which vehicle to replace?', cells: ['The oldest, by feel', 'cost per km per vehicle, fuel and maintenance apart, over six months'] },
    ], caption: 'Figure 4 · The first three rows are settled by readings and the computations that follow; the next three by dates on the record, assignment per round and cost per kilometre. None is settled by a more honest driver or a more suspicious manager.', alt: 'Matrix of six situations: fuel too expensive, inconsistent receipt, late oil change, expired insurance, unknown driver, vehicle to replace; what happens and what the application does.' },
    plein: { title: 'One fuel-up, in six beats', items: [
      { label: 'Read the odometer', sub: 'odometer photo; digits read and confirmed; timestamped, offline' },
      { label: 'Scan the receipt', sub: 'litres, amount, station read from the photo; corrected if needed' },
      { label: 'Compute', sub: 'litres ÷ km since previous fuel-up × 100; compared with the band', accent: true },
      { label: 'Flag', sub: 'out of band: question to the driver with receipt and readings' },
      { label: 'Qualify', sub: 'manager: coded cause, load, route, leak, or confirmed anomaly' },
      { label: 'Allocate', sub: 'cost to vehicle, driver, round; accounting export' },
    ], caption: 'Figure 5 · The accented beat is the computation, because it is done at the fuel-up, not at month end, and because it compares the vehicle with itself. The first two beats take thirty seconds at the pump, offline; the last two belong to the manager, who qualifies with a cause and allocates the cost where it goes.', alt: 'Six beats: read the odometer, scan the receipt, compute (accented), flag, qualify, allocate.' },
    calendrier: { title: 'Tooling a fleet in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'vehicle list, maintenance plans by km, documents and dates, band width, qualification causes; with the manager and a driver', from: 0, to: 1 },
      { label: 'Records and readings', note: 'vehicle record, assignment per round, photo reading at start, end and fuel-up, offline', from: 1, to: 3, accent: true },
      { label: 'Computations and alerts', note: 'consumption per fuel-up, band per vehicle, maintenance by km, due dates, questions and qualification', from: 3, to: 4 },
      { label: 'Costs', note: 'fuel and maintenance per vehicle and per km, allocation to rounds, accounting export', from: 4, to: 5 },
      { label: 'Take-over', note: 'fuel-up history from receipts or the file, starting odometers, initial bands', from: 5, to: 6 },
      { label: 'Measurement', note: 'cost per km per vehicle, qualified anomalies, maintenance on time, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: maintenance plans, document dates and band width are the manager’s decisions, taken with a driver. The two accented weeks are records and readings, because without a reading there is no consumption, no maintenance by kilometre and no cost per kilometre.', alt: 'Seven-week timeline: rules, records and readings (accented, two weeks), computations and alerts, costs, take-over, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'أسطول · وقود · صيانة · 2027', title: ['«الوقود يكلّف', 'أكثر من المتوقع، ولا أحد', 'يعرف لماذا»'], subtitle: 'ما يُبنى لأسطول: قراءات عداد، استهلاك محسوب، نطاق متوقع، صيانة بالكم، استحقاقات، كلفة للكم', left: { label: 'وصول في علبة', sub: 'ومجموع يرتفع كل شهر' }, right: { label: 'تعبئة، قراءتان، حساب', sub: 'وسؤال يُطرح على السائق الصحيح' } },
    couches: { title: 'إدارة الأسطول، في خمس طبقات', layers: [
      { label: 'المركبات والسائقون', items: [{ name: 'بطاقة لكل مركبة: عداد، سائق معتاد، تعيينات، خطط صيانة، وثائق بتواريخ', sub: 'البطاقة موجودة قبل العطل وقبل الغرامة' }] },
      { label: 'القراءات', items: [{ name: 'عداد مصوَّر عند الانطلاق والعودة وكل تعبئة؛ لترات ومبلغ يُقرآن من الوصل؛ موقَّتة، دون اتصال', sub: 'لا رقم يُصرَّح به من الذاكرة', accent: true }] },
      { label: 'الحسابات', items: [{ name: 'استهلاك لكل تعبئة من اللترات وفارق العداد؛ نطاق متوقع لكل مركبة من تاريخها؛ كلفة للكم', sub: 'كل مركبة تُقارَن بنفسها' }] },
      { label: 'التنبيهات', items: [{ name: 'تعبئة خارج النطاق، صيانة مستحقة بالكم، وثيقة تستحق؛ سؤال للسائق، مهمة للمسيّر، تصنيف بسبب', sub: 'التنبيه سؤال لا عقوبة' }] },
      { label: 'القياس والقرار', items: [{ name: 'كلفة للكم لكل مركبة، وقود وصيانة منفصلان، كم لكل سائق، شذوذات مصنَّفة؛ استبدال أو إبقاء', sub: 'الرقم الذي يقرر أي مركبة تذهب أولاً' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي القراءات: عداد مصوَّر عند انطلاق كل جولة وعودتها وعند كل تعبئة، ووصل مقروء، وكل شيء موقَّت ومدخَل دون اتصال. وكل ما فوقها ينتج عنها؛ ولا شيء يُصرَّح به من الذاكرة مساءً. والمركبة معدّة بمعنى دليل التدخلات الميدانية بعداد إضافي.', alt: 'خمس طبقات: المركبات والسائقون، القراءات (مميزة)، الحسابات، التنبيهات، القياس والقرار.' },
    vehicule: { caption: 'الشكل 2 · بطاقة شاحنة صغيرة: عشر تعبئات منذ سبتمبر، كل منها حُوّلت إلى لتر لكل مائة كيلومتر من الوصل وفارق العداد. ثمانٍ تقع في النطاق المتوقع المحسوب على تاريخ هذه المركبة، واثنتان تخرجان منه موسومتين بالتاريخ وسائق اليوم: سؤال يُطرح لا اتهام. على الجانب الآخر الصيانة المستحقة بالكيلومتر والوثائق التي تستحق بتنبيه قبل التاريخ. والمركبة والتعبئات والكلف مثال مبني.' },
    flotte: { caption: 'الشكل 3 · لوحة الأسطول: ست مركبات، كل منها تُقارَن بمتوقعها الخاص، بالكلفة للكيلومتر وحالة الصيانة والوثائق وإشارة حين يتطلب شيء قراراً. شاحنة محمَّلة عند ثلاثة عشر لتراً ليست شذوذاً؛ وشاحنة صغيرة عند خمسة عشر شذوذ. والكلفة للكيلومتر، وقود وصيانة على الكيلومترات المقروءة، هي الرقم الذي يقرر أي مركبة تُستبدل. والمركبات والكلف مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الوقود يكلّف أكثر من المتوقع', cells: ['مجموع يرتفع؛ لا أحد يعرف أي مركبة ولا متى', 'استهلاك لكل تعبئة ومركبة؛ خارج النطاق يُوسم في اليوم نفسه'] },
      { label: 'الوصل لا يطابق العداد', cells: ['62 لتراً لـ 400 كم؛ يُكتشف في الشهر أو أبداً', 'حساب عند التعبئة؛ سؤال للسائق بالوصل والقراءتين'] },
      { label: 'تغيير الزيت متأخر', cells: ['عداد لم يُقرأ أبداً؛ محرك متضرر', 'صيانة مستحقة بالكم من قراءات الجولات؛ تنبيه قبلاً'] },
      { label: 'التأمين انتهى أمس', cells: ['غرامة، توقيف، زبون لم يُسلَّم', 'تواريخ على البطاقة؛ تنبيه عند 30 و7 أيام؛ مركبة محجوبة في التخطيط'] },
      { label: 'سائقان، مركبة، حادث', cells: ['لا أحد يعرف من كان يقود', 'تعيين لكل يوم وجولة؛ قراءة انطلاق موقَّعة'] },
      { label: 'أي مركبة تُستبدل؟', cells: ['الأقدم، بالإحساس', 'كلفة للكم لكل مركبة، وقود وصيانة منفصلان، على ستة أشهر'] },
    ], caption: 'الشكل 4 · الأسطر الثلاثة الأولى تُحل بالقراءات والحسابات الناتجة عنها؛ والثلاثة التالية بالتواريخ على البطاقة والتعيين لكل جولة والكلفة للكيلومتر. ولا واحد يُحل بسائق أكثر أمانة أو مسيّر أكثر ريبة.', alt: 'مصفوفة ست حالات: وقود غالٍ، وصل غير متسق، تغيير زيت متأخر، تأمين منتهٍ، سائق مجهول، مركبة للاستبدال؛ ما يحدث وما يفعله التطبيق.' },
    plein: { title: 'تعبئة واحدة، في ستة أوقات', items: [
      { label: 'قراءة العداد', sub: 'صورة العداد؛ أرقام مقروءة ومؤكَّدة؛ موقَّتة، دون اتصال' },
      { label: 'مسح الوصل', sub: 'لترات ومبلغ ومحطة تُقرأ من الصورة؛ تُصحَّح عند الحاجة' },
      { label: 'الحساب', sub: 'لترات ÷ كم منذ التعبئة السابقة × 100؛ مقارَن بالنطاق', accent: true },
      { label: 'الوسم', sub: 'خارج النطاق: سؤال للسائق بالوصل والقراءات' },
      { label: 'التصنيف', sub: 'المسيّر: سبب مرمَّز، حمولة، مسار، تسرب، أو شذوذ مؤكَّد' },
      { label: 'التحميل', sub: 'كلفة على المركبة والسائق والجولة؛ تصدير محاسبي' },
    ], caption: 'الشكل 5 · الوقت المميز هو الحساب، لأنه يُجرى لحظة التعبئة لا في الشهر، ولأنه يقارن المركبة بنفسها. والوقتان الأولان يستغرقان ثلاثين ثانية عند المضخة دون اتصال؛ والأخيران للمسيّر الذي يصنّف بسبب ويحمّل الكلفة حيث تذهب.', alt: 'ستة أوقات: قراءة العداد، مسح الوصل، الحساب (مميز)، الوسم، التصنيف، التحميل.' },
    calendrier: { title: 'تجهيز أسطول سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'قائمة المركبات، خطط الصيانة بالكم، الوثائق والتواريخ، عرض النطاق، أسباب التصنيف؛ مع المسيّر وسائق', from: 0, to: 1 },
      { label: 'البطاقات والقراءات', note: 'بطاقة مركبة، تعيين لكل جولة، قراءة بالصورة عند الانطلاق والعودة والتعبئة، دون اتصال', from: 1, to: 3, accent: true },
      { label: 'الحسابات والتنبيهات', note: 'استهلاك لكل تعبئة، نطاق لكل مركبة، صيانة بالكم، استحقاقات، أسئلة وتصنيف', from: 3, to: 4 },
      { label: 'الكلف', note: 'وقود وصيانة لكل مركبة وكم، تحميل على الجولات، تصدير محاسبي', from: 4, to: 5 },
      { label: 'الاستلام', note: 'تاريخ التعبئات من الوصول أو الملف، عدادات البداية، نطاقات أولية', from: 5, to: 6 },
      { label: 'القياس', note: 'كلفة للكم لكل مركبة، شذوذات مصنَّفة، صيانات في وقتها، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: خطط الصيانة وتواريخ الوثائق وعرض النطاق قرارات المسيّر مع سائق. والأسبوعان المميزان هما البطاقات والقراءات، لأن بلا قراءة لا استهلاك ولا صيانة بالكيلومتر ولا كلفة للكيلومتر.', alt: 'خط زمني من سبعة أسابيع: القواعد، البطاقات والقراءات (مميز، أسبوعان)، الحسابات والتنبيهات، الكلف، الاستلام، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = FT[locale] || FT.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      vehicule: { svg: vehicle(e.vehicle, rtl), caption: t.vehicule.caption, alt: e.vehicle.alt },
      flotte: { svg: fleet(e.fleet, rtl), caption: t.flotte.caption, alt: e.fleet.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      plein: { svg: steps({ title: t.plein.title, steps: t.plein.items, arrows: true, rtl }), caption: t.plein.caption, alt: t.plein.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
