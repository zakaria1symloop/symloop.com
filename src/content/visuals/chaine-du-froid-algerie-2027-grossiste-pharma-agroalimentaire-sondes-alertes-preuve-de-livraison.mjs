import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison';
const T = {
  fr: {
    cover: { eyebrow: 'Chaîne du froid · Distribution · 2027', title: ['Entre 2 et 8 °C', 'du quai au client.', 'Qui le prouve ?'], subtitle: 'Chambres froides cartographiées, camions sous enregistreur, alerte avant la perte, courbe de température jointe à chaque livraison : l’outil du grossiste pharmaceutique et du distributeur agroalimentaire en Algérie en 2027.', left: { label: 'Le distributeur', sub: 'quatre chambres froides, douze camions, trois cents livraisons par jour' }, right: { label: 'Le colis', sub: 'un vaccin, une insuline, une glace, un yaourt : personne ne voit sa température' }, note: 'Algérie · chaîne du froid · 2027' },
    moments: { title: 'Un colis réfrigéré, du quai de réception à la signature du client, en six moments', items: [
      { n: '01', label: 'Réception : relevé et lot', sub: 'Température à l’ouverture, numéro de lot, photo, accepté ou refusé.' },
      { n: '02', label: 'Chambre froide cartographiée', sub: 'Sondes aux points chauds et froids, courbe continue.' },
      { n: '03', label: 'Préparation chronométrée', sub: 'Temps hors froid compté par commande, glacière ou caisson.' },
      { n: '04', label: 'Camion : enregistreur dans le caisson', sub: 'Courbe par tournée, position, portes ouvertes.' },
      { n: '05', label: 'Alerte avant la perte', sub: 'Seuil, durée, appel au chauffeur, bascule sur le plan B.', accent: true },
      { n: '06', label: 'Livraison avec preuve', sub: 'Courbe signée remise au client, archivée par lot.' },
    ], caption: 'Figure 1 · Le moment 05 sépare le distributeur qui découvre une rupture le lundi matin de celui qui l’évite le samedi après-midi : si le seuil, la durée et la personne à appeler sont réglés avant, l’alerte est une action, pas une information. Les moments 01 et 06 fabriquent la preuve ; sans eux, le client et l’inspecteur ne peuvent rien lire.', alt: 'Six moments : réception avec relevé de température et numéro de lot ; chambre froide cartographiée avec sondes aux points chauds et froids ; préparation chronométrée avec temps hors froid compté ; camion avec enregistreur dans le caisson ; alerte avant la perte avec seuil, durée et appel au chauffeur ; livraison avec preuve, courbe signée remise au client.' },
    couches: { title: 'La plateforme chaîne du froid, en cinq couches', layers: [
      { label: 'Terrain', items: [
        { name: 'Sondes et enregistreurs', sub: 'chambres froides, frigos, caissons de camions, glacières ; Wi-Fi, Bluetooth, LoRa ou passerelle 4G' },
      ] },
      { label: 'Alertes', items: [
        { name: 'Seuil, durée, escalade', sub: 'au-dessus de 8 °C pendant 30 min : chauffeur, puis chef de dépôt, puis pharmacien responsable', accent: true },
      ] },
      { label: 'Opérations', items: [
        { name: 'Lots, commandes, tournées', sub: 'réception, préparation, chargement, retours, rappels par lot' },
        { name: 'Étalonnage et maintenance', sub: 'date de la dernière vérification de chaque sonde, groupe froid, groupe électrogène' },
      ] },
      { label: 'Client', items: [
        { name: 'Preuve de livraison', sub: 'courbe de la tournée, signature, certificat par lot, téléchargeable' },
      ] },
      { label: 'Direction', items: [{ name: 'Tableau de bord', sub: 'excursions du mois, taux de livraisons conformes, stock exposé, pertes évitées' }] },
    ], caption: 'Figure 2 · L’enregistreur du fabricant de frigos montre une courbe, après coup, à qui vient la télécharger. Le distributeur a besoin de la vue inverse : toutes ses chambres, tous ses camions, classés par ce qui sort de la plage en ce moment, et une escalade réglée. C’est la couche alertes qui évite la perte ; la couche client qui vend la différence au pharmacien, au supermarché et à l’inspecteur.', alt: 'Cinq couches : terrain avec sondes et enregistreurs dans les chambres froides, frigos, caissons de camions et glacières ; alertes avec seuil, durée et escalade ; opérations avec lots, commandes, tournées, étalonnage et maintenance ; client avec preuve de livraison ; direction avec tableau de bord.' },
    exemple: { title: 'Quatre chambres froides, douze camions, trois cents livraisons par jour : l’exemple', items: [
      { value: '30 min', label: 'entre le dépassement de 8 °C et l’appel au chef de dépôt, au lieu du lundi matin : seuil et durée réglés, hypothèse' },
      { value: '≈ 3 M DA', label: 'de produits réfrigérés dans une chambre froide moyenne, perdus si la coupure dure la nuit, hypothèse' },
      { value: '2 sur 12', label: 'camions dont le groupe froid décroche l’après-midi en juillet, révélés par les courbes du premier mois, hypothèse' },
      { value: '1 courbe', label: 'de température jointe à chaque livraison, lisible par le client et par l’inspecteur, sans rien saisir', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure. Le délai d’alerte est ce que des sondes connectées et une escalade permettent ; la valeur du stock, le nombre de camions fragiles et le nombre de livraisons sont à remplacer par les vôtres. La dernière ligne est celle qui se vend : une preuve par livraison, produite par le système, pas par un employé qui recopie un afficheur.', alt: 'Exemple chiffré : trente minutes entre le dépassement de 8 degrés et l’appel au chef de dépôt ; environ 3 millions de dinars de produits réfrigérés dans une chambre froide moyenne perdus si la coupure dure la nuit ; deux camions sur douze dont le groupe froid décroche l’après-midi ; une courbe de température jointe à chaque livraison. Hypothèses indiquées.' },
    pannes: { title: 'Six ruptures silencieuses de la chaîne du froid, six alertes', columns: ['Comment ça se passe', 'Ce que la plateforme fait'], rows: [
      { label: 'Coupure de courant la nuit', cells: ['Le disjoncteur saute à 23 h, le groupe électrogène ne démarre pas, la chambre monte à 12 °C avant 6 h', 'Perte de tension et courbe qui monte : appel au gardien, puis au chef de dépôt ; durée d’exposition calculée par lot'] },
      { label: 'Porte de chambre froide restée ouverte', cells: ['Inventaire, chariot coincé, cale-porte ; vingt minutes à 15 °C près de la porte', 'Sonde au point chaud près de la porte, contact de porte, alerte à 10 minutes'] },
      { label: 'Groupe froid du camion qui décroche', cells: ['45 °C à l’ombre, dix arrêts, portes ouvertes à chaque livraison ; le caisson suit la route', 'Courbe par tournée, alerte au chauffeur, livraison réordonnée, tournée écourtée'] },
      { label: 'Colis oublié sur le quai', cells: ['Préparé à 9 h, chargé à 11 h ; deux heures à température ambiante', 'Temps hors froid par commande, compte à rebours au chargement, colis bloqué si dépassé'] },
      { label: 'Produit congelé par erreur', cells: ['Frigo réglé trop bas, colis contre la paroi froide ; l’insuline et les vaccins ne supportent pas le gel', 'Seuil bas autant que seuil haut : alerte sous 2 °C, lot mis en quarantaine'] },
      { label: 'Sonde hors ligne ou jamais étalonnée', cells: ['Pile morte, Wi-Fi changé, sonde qui lit 2 °C de trop depuis un an', 'Distinction « pas de données » et « hors plage » ; date d’étalonnage par sonde, rappel avant échéance'] },
    ], caption: 'Figure 4 · Aucune de ces ruptures ne prévient, et la plupart se produisent quand personne n’est au dépôt : la nuit, le week-end, sur la route. Chacune se voit avec une sonde au bon endroit et un seuil réglé ; chacune se prouve ensuite, lot par lot, si les courbes sont archivées. La sixième est la plus sournoise : une sonde fausse rassure tout le monde.', alt: 'Matrice de six ruptures : coupure de courant la nuit, porte de chambre froide restée ouverte, groupe froid du camion qui décroche, colis oublié sur le quai, produit congelé par erreur, sonde hors ligne ou jamais étalonnée ; pour chacune, comment ça se passe et ce que la plateforme fait.' },
    modeles: { title: 'Qui vous êtes, ce qu’il faut construire', columns: ['Ce qu’il faut d’abord', 'Ce qui vient ensuite'], rows: [
      { label: 'Grossiste-répartiteur pharmaceutique', cells: ['Chambres froides cartographiées, sondes, alertes avec escalade, courbes par lot', 'Enregistreurs dans les camions, preuve de livraison par officine, rapport mensuel'] },
      { label: 'Importateur ou fabricant de médicaments', cells: ['Entrepôt sous sonde, réception avec relevé, quarantaine par lot', 'Suivi des transporteurs sous-traitants, dossier d’excursion prêt pour l’agence'] },
      { label: 'Distributeur agroalimentaire : surgelés, glaces, laitier', cells: ['Enregistreurs dans les caissons, alerte au chauffeur, tournées réordonnées', 'Preuve de livraison pour les supermarchés, frigos des points de vente'] },
      { label: 'Chaîne de restaurants, boucheries, supermarchés', cells: ['Une sonde par frigo et par site, relevés automatiques, alerte au gérant', 'Registre de température par site, audit interne, fournisseurs comparés'] },
      { label: 'Laboratoire, clinique, réseau d’officines', cells: ['Frigos vaccins et réactifs sous sonde, alerte la nuit et le week-end', 'Registre par frigo, étalonnage planifié, rapport pour l’inspection'] },
      { label: 'Fondateur de la diaspora', cells: ['Marque de surgelés ou distribution de frais lancée depuis la France : camions et dépôt visibles à distance', 'Tableau de bord par site, rapport mensuel, pertes évitées chiffrées'] },
    ], caption: 'Figure 5 · La première colonne se construit en douze semaines, sondes comprises ; la seconde suit quand le réseau s’étend. Le grossiste commence par ses chambres, parce que c’est là que dort la valeur ; le distributeur agroalimentaire par ses camions, parce que c’est là que la chaleur frappe. Tous finissent par la preuve de livraison, parce que c’est elle que le client paie.', alt: 'Matrice de six profils : grossiste-répartiteur pharmaceutique, importateur ou fabricant de médicaments, distributeur agroalimentaire de surgelés, glaces et laitier, chaîne de restaurants, boucheries ou supermarchés, laboratoire, clinique ou réseau d’officines, fondateur de la diaspora ; pour chacun, ce qu’il faut d’abord et ce qui vient ensuite.' },
    calendrier: { title: 'Le calendrier 2027 d’un distributeur sous chaîne du froid, en mois', unit: 'mois', items: [
      { label: 'Cartographie et sondes des chambres froides', note: 'janvier et février : points chauds, seuils, escalade', from: 0, to: 2 },
      { label: 'Camions équipés, alertes réglées', note: 'mars et avril : enregistreurs, chauffeurs formés, premières courbes', from: 2, to: 4 },
      { label: 'Preuve de livraison et application client', note: 'mai et juin : avant la chaleur, courbe par livraison', from: 4, to: 6, accent: true },
      { label: 'Été : alertes chaleur, groupes froids', note: 'juillet et août : 45 °C, tournées écourtées, pannes maximales', from: 6, to: 8 },
      { label: 'Indicateurs, auto-inspection', note: 'septembre et octobre : excursions du trimestre, étalonnages', from: 8, to: 10 },
      { label: 'Extension : sous-traitants, points de vente', note: 'novembre et décembre : réseau, contrats 2028', from: 10, to: 12 },
    ], caption: 'Figure 6 · Mois 0 = janvier 2027. La chaîne du froid a une saison : l’été. Tout ce qui se règle avant juin, sondes, seuils, escalade, preuve, sert pendant juillet et août ; tout ce qui se découvre en juillet coûte un stock. Les quatre premiers mois sont froids et calmes : c’est le moment de cartographier et d’équiper.', alt: 'Calendrier en mois : cartographie et sondes des chambres froides de 0 à 2 ; camions équipés et alertes réglées de 2 à 4 ; preuve de livraison et application client de 4 à 6 ; été alertes chaleur et groupes froids de 6 à 8 ; indicateurs et auto-inspection de 8 à 10 ; extension aux sous-traitants et points de vente de 10 à 12.' },
  },
  en: {
    cover: { eyebrow: 'Cold chain · Distribution · 2027', title: ['Between 2 and 8 °C', 'from dock to client.', 'Who can prove it?'], subtitle: 'Mapped cold rooms, trucks under data loggers, the alert before the loss, a temperature curve attached to every delivery: the pharma wholesaler’s and food distributor’s tool in Algeria in 2027.', left: { label: 'The distributor', sub: 'four cold rooms, twelve trucks, three hundred deliveries a day' }, right: { label: 'The parcel', sub: 'a vaccine, an insulin, an ice cream, a yoghurt: nobody sees its temperature' }, note: 'Algeria · cold chain · 2027' },
    moments: { title: 'A refrigerated parcel, from the receiving dock to the client’s signature, in six moments', items: [
      { n: '01', label: 'Receipt: reading and batch', sub: 'Temperature at opening, batch number, photo, accepted or refused.' },
      { n: '02', label: 'Mapped cold room', sub: 'Probes at hot and cold spots, continuous curve.' },
      { n: '03', label: 'Timed picking', sub: 'Time out of the cold counted per order, cooler or insulated box.' },
      { n: '04', label: 'Truck: logger in the body', sub: 'Curve per route, position, doors opened.' },
      { n: '05', label: 'Alert before the loss', sub: 'Threshold, duration, call to the driver, switch to plan B.', accent: true },
      { n: '06', label: 'Delivery with proof', sub: 'Signed curve handed to the client, archived by batch.' },
    ], caption: 'Figure 1 · Moment 05 separates the distributor who discovers a breach on Monday morning from the one who avoids it on Saturday afternoon: if the threshold, the duration and the person to call are set beforehand, the alert is an action, not a piece of information. Moments 01 and 06 manufacture the proof; without them, neither the client nor the inspector can read anything.', alt: 'Six moments: receipt with temperature reading and batch number; mapped cold room with probes at hot and cold spots; timed picking with time out of the cold counted; truck with a logger in the body; alert before the loss with threshold, duration and call to the driver; delivery with proof, signed curve handed to the client.' },
    couches: { title: 'The cold-chain platform, in five layers', layers: [
      { label: 'Field', items: [
        { name: 'Probes and loggers', sub: 'cold rooms, fridges, truck bodies, coolers; Wi-Fi, Bluetooth, LoRa or a 4G gateway' },
      ] },
      { label: 'Alerts', items: [
        { name: 'Threshold, duration, escalation', sub: 'above 8 °C for 30 min: driver, then depot manager, then responsible pharmacist', accent: true },
      ] },
      { label: 'Operations', items: [
        { name: 'Batches, orders, routes', sub: 'receipt, picking, loading, returns, recalls by batch' },
        { name: 'Calibration and maintenance', sub: 'date of the last check of every probe, cooling unit, generator' },
      ] },
      { label: 'Client', items: [
        { name: 'Proof of delivery', sub: 'route curve, signature, certificate per batch, downloadable' },
      ] },
      { label: 'Management', items: [{ name: 'Dashboard', sub: 'excursions this month, rate of compliant deliveries, stock exposed, losses avoided' }] },
    ], caption: 'Figure 2 · The fridge maker’s logger shows a curve, after the fact, to whoever comes to download it. The distributor needs the opposite view: every room, every truck, sorted by what is out of range right now, and an escalation that is already set. The alerts layer avoids the loss; the client layer sells the difference to the pharmacist, the supermarket and the inspector.', alt: 'Five layers: field with probes and loggers in cold rooms, fridges, truck bodies and coolers; alerts with threshold, duration and escalation; operations with batches, orders, routes, calibration and maintenance; client with proof of delivery; management with a dashboard.' },
    exemple: { title: 'Four cold rooms, twelve trucks, three hundred deliveries a day: the example', items: [
      { value: '30 min', label: 'between crossing 8 °C and the call to the depot manager, instead of Monday morning: threshold and duration set, assumption' },
      { value: '≈ 3 M DA', label: 'of refrigerated products in an average cold room, lost if the outage lasts the night, assumption' },
      { value: '2 of 12', label: 'trucks whose cooling unit drops out on July afternoons, revealed by the first month’s curves, assumption' },
      { value: '1 curve', label: 'of temperature attached to every delivery, readable by the client and the inspector, with nothing typed', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement. The alert delay is what connected probes and an escalation allow; the stock value, the number of fragile trucks and the number of deliveries are to be replaced with yours. The last line is the one that sells: one proof per delivery, produced by the system, not by an employee copying a display.', alt: 'Worked example: thirty minutes between crossing 8 degrees and the call to the depot manager; about 3 million dinars of refrigerated products in an average cold room lost if the outage lasts the night; two trucks of twelve whose cooling unit drops out in the afternoon; one temperature curve attached to every delivery. Assumptions stated.' },
    pannes: { title: 'Six silent cold-chain breaches, six alerts', columns: ['How it happens', 'What the platform does'], rows: [
      { label: 'Power cut at night', cells: ['The breaker trips at 11 pm, the generator does not start, the room reaches 12 °C before 6 am', 'Lost power and a rising curve: call to the guard, then the depot manager; exposure time computed per batch'] },
      { label: 'Cold-room door left open', cells: ['Stocktake, stuck trolley, door wedge; twenty minutes at 15 °C near the door', 'Probe at the hot spot by the door, door contact, alert at 10 minutes'] },
      { label: 'Truck cooling unit dropping out', cells: ['45 °C in the shade, ten stops, doors opened at every delivery; the body follows the road', 'Curve per route, alert to the driver, delivery reordered, route cut short'] },
      { label: 'Parcel forgotten on the dock', cells: ['Picked at 9 am, loaded at 11 am; two hours at ambient temperature', 'Time out of the cold per order, countdown at loading, parcel blocked if exceeded'] },
      { label: 'Product frozen by mistake', cells: ['Fridge set too low, parcel against the cold wall; insulin and vaccines do not survive freezing', 'Low threshold as well as high: alert below 2 °C, batch quarantined'] },
      { label: 'Probe offline or never calibrated', cells: ['Dead battery, Wi-Fi changed, a probe reading 2 °C too high for a year', 'Tells “no data” from “out of range”; calibration date per probe, reminder before it is due'] },
    ], caption: 'Figure 4 · None of these breaches gives warning, and most happen when nobody is at the depot: at night, at the weekend, on the road. Each is visible with a probe in the right place and a threshold that is set; each can then be proven, batch by batch, if the curves are archived. The sixth is the most insidious: a wrong probe reassures everyone.', alt: 'Matrix of six breaches: power cut at night, cold-room door left open, truck cooling unit dropping out, parcel forgotten on the dock, product frozen by mistake, probe offline or never calibrated; for each, how it happens and what the platform does.' },
    modeles: { title: 'Who you are, what to build', columns: ['What comes first', 'What comes next'], rows: [
      { label: 'Pharmaceutical wholesaler', cells: ['Mapped cold rooms, probes, alerts with escalation, curves per batch', 'Loggers in the trucks, proof of delivery per pharmacy, monthly report'] },
      { label: 'Medicine importer or manufacturer', cells: ['Warehouse under probes, receipt with reading, quarantine per batch', 'Tracking of subcontracted carriers, excursion file ready for the agency'] },
      { label: 'Food distributor: frozen, ice cream, dairy', cells: ['Loggers in the bodies, alert to the driver, routes reordered', 'Proof of delivery for supermarkets, fridges at points of sale'] },
      { label: 'Restaurant chain, butchers, supermarkets', cells: ['One probe per fridge per site, automatic readings, alert to the manager', 'Temperature register per site, internal audit, suppliers compared'] },
      { label: 'Laboratory, clinic, pharmacy network', cells: ['Vaccine and reagent fridges under probes, alerts at night and weekends', 'Register per fridge, planned calibration, report for the inspection'] },
      { label: 'Diaspora founder', cells: ['Frozen-food brand or fresh distribution launched from France: trucks and depot visible remotely', 'Dashboard per site, monthly report, losses avoided in figures'] },
    ], caption: 'Figure 5 · The first column is built in twelve weeks, probes included; the second follows as the network grows. The wholesaler starts with the rooms, because that is where the value sleeps; the food distributor with the trucks, because that is where the heat strikes. All end with proof of delivery, because that is what the client pays for.', alt: 'Matrix of six profiles: pharmaceutical wholesaler, medicine importer or manufacturer, food distributor of frozen, ice cream and dairy, restaurant chain, butchers or supermarkets, laboratory, clinic or pharmacy network, diaspora founder; for each, what comes first and what comes next.' },
    calendrier: { title: 'A cold-chain distributor’s 2027 calendar, in months', unit: 'months', items: [
      { label: 'Mapping and probes in the cold rooms', note: 'January and February: hot spots, thresholds, escalation', from: 0, to: 2 },
      { label: 'Trucks equipped, alerts tuned', note: 'March and April: loggers, drivers trained, first curves', from: 2, to: 4 },
      { label: 'Proof of delivery and client app', note: 'May and June: before the heat, a curve per delivery', from: 4, to: 6, accent: true },
      { label: 'Summer: heat alerts, cooling units', note: 'July and August: 45 °C, shortened routes, peak failures', from: 6, to: 8 },
      { label: 'Indicators, self-inspection', note: 'September and October: the quarter’s excursions, calibrations', from: 8, to: 10 },
      { label: 'Extension: subcontractors, points of sale', note: 'November and December: network, 2028 contracts', from: 10, to: 12 },
    ], caption: 'Figure 6 · Month 0 = January 2027. The cold chain has one season: summer. Everything set before June, probes, thresholds, escalation, proof, serves during July and August; everything discovered in July costs a stock. The first four months are cold and quiet: that is when to map and equip.', alt: 'Calendar in months: mapping and probes in the cold rooms from 0 to 2; trucks equipped and alerts tuned from 2 to 4; proof of delivery and client app from 4 to 6; summer heat alerts and cooling units from 6 to 8; indicators and self-inspection from 8 to 10; extension to subcontractors and points of sale from 10 to 12.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة التبريد · التوزيع · 2027', title: ['بين 2 و8 درجات', 'من الرصيف إلى الزبون.', 'من يثبت ذلك؟'], subtitle: 'غرف تبريد مرسومة حرارياً، شاحنات بمسجّلات، تنبيه قبل الخسارة، منحنى حرارة مرفق بكل تسليم: أداة موزّع الجملة الصيدلاني وموزّع المواد الغذائية في الجزائر سنة 2027.', left: { label: 'الموزّع', sub: 'أربع غرف تبريد، اثنتا عشرة شاحنة، ثلاثمئة تسليم في اليوم' }, right: { label: 'الطرد', sub: 'لقاح، أنسولين، مثلّجات، ياغورت: لا أحد يرى حرارته' }, note: 'الجزائر · سلسلة التبريد · 2027' },
    moments: { title: 'طرد مبرَّد من رصيف الاستلام إلى توقيع الزبون، في ست لحظات', items: [
      { n: '01', label: 'الاستلام: قراءة ورقم حصة', sub: 'الحرارة عند الفتح، رقم الحصة، صورة، مقبول أو مرفوض.' },
      { n: '02', label: 'غرفة تبريد مرسومة حرارياً', sub: 'مجسّات في النقاط الحارة والباردة، منحنى متواصل.' },
      { n: '03', label: 'تحضير موقّت', sub: 'الوقت خارج البرودة محسوب لكل طلبية، حافظة أو صندوق معزول.' },
      { n: '04', label: 'الشاحنة: مسجّل داخل الصندوق', sub: 'منحنى لكل جولة، الموقع، فتح الأبواب.' },
      { n: '05', label: 'تنبيه قبل الخسارة', sub: 'عتبة، مدة، اتصال بالسائق، تحويل إلى الخطة البديلة.', accent: true },
      { n: '06', label: 'تسليم مع إثبات', sub: 'منحنى موقَّع يُسلَّم للزبون ويُؤرشف بالحصة.' },
    ], caption: 'الشكل 1 · اللحظة 05 تفصل بين موزّع يكتشف الانقطاع صباح الاثنين وموزّع يتفاداه بعد ظهر السبت: إذا ضُبطت العتبة والمدة والشخص الذي يُتَّصل به مسبقاً، صار التنبيه فعلاً لا معلومة. اللحظتان 01 و06 تصنعان الإثبات؛ وبدونهما لا يستطيع الزبون ولا المفتش قراءة شيء.', alt: 'ست لحظات: استلام بقراءة حرارة ورقم حصة؛ غرفة تبريد مرسومة حرارياً بمجسّات في النقاط الحارة والباردة؛ تحضير موقّت؛ شاحنة بمسجّل داخل الصندوق؛ تنبيه قبل الخسارة بعتبة ومدة واتصال بالسائق؛ تسليم مع إثبات ومنحنى موقَّع.' },
    couches: { title: 'منصة سلسلة التبريد في خمس طبقات', layers: [
      { label: 'الميدان', items: [
        { name: 'مجسّات ومسجّلات', sub: 'غرف تبريد، ثلاجات، صناديق شاحنات، حافظات؛ واي فاي أو بلوتوث أو LoRa أو بوابة 4G' },
      ] },
      { label: 'التنبيهات', items: [
        { name: 'عتبة، مدة، تصعيد', sub: 'فوق 8 درجات لمدة 30 دقيقة: السائق، ثم رئيس المستودع، ثم الصيدلي المسؤول', accent: true },
      ] },
      { label: 'العمليات', items: [
        { name: 'حصص، طلبيات، جولات', sub: 'استلام، تحضير، تحميل، مرتجعات، سحب بالحصة' },
        { name: 'المعايرة والصيانة', sub: 'تاريخ آخر فحص لكل مجسّ، وحدة تبريد، مولّد كهربائي' },
      ] },
      { label: 'الزبون', items: [
        { name: 'إثبات التسليم', sub: 'منحنى الجولة، توقيع، شهادة لكل حصة، قابلة للتحميل' },
      ] },
      { label: 'الإدارة', items: [{ name: 'لوحة متابعة', sub: 'تجاوزات الشهر، نسبة التسليمات المطابقة، المخزون المعرَّض، الخسائر المتفاداة' }] },
    ], caption: 'الشكل 2 · مسجّل صانع الثلاجات يعرض منحنى، بعد فوات الأوان، لمن يأتي لتحميله. الموزّع يحتاج إلى العكس: كل غرفه وكل شاحناته مرتّبة حسب ما يخرج عن المجال الآن، وتصعيد مضبوط سلفاً. طبقة التنبيهات تتفادى الخسارة؛ وطبقة الزبون تبيع الفرق للصيدلي والسوبرماركت والمفتش.', alt: 'خمس طبقات: الميدان بمجسّات ومسجّلات في غرف التبريد والثلاجات وصناديق الشاحنات والحافظات؛ التنبيهات بعتبة ومدة وتصعيد؛ العمليات بالحصص والطلبيات والجولات والمعايرة والصيانة؛ الزبون بإثبات التسليم؛ الإدارة بلوحة متابعة.' },
    exemple: { title: 'أربع غرف تبريد واثنتا عشرة شاحنة وثلاثمئة تسليم في اليوم: المثال', items: [
      { value: '30 دقيقة', label: 'بين تجاوز 8 درجات والاتصال برئيس المستودع، بدل صباح الاثنين: عتبة ومدة مضبوطتان، فرضية' },
      { value: '≈ 3 ملايين دج', label: 'من المنتجات المبرَّدة في غرفة تبريد متوسطة، تضيع إذا دام الانقطاع الليل كله، فرضية' },
      { value: '2 من 12', label: 'شاحنة تتعطل وحدة تبريدها بعد ظهر جويلية، تكشفها منحنيات الشهر الأول، فرضية' },
      { value: 'منحنى واحد', label: 'للحرارة مرفق بكل تسليم، يقرؤه الزبون والمفتش، دون إدخال يدوي', accent: true },
    ], caption: 'الشكل 3 · حساب على فرضيات لا قياس. مهلة التنبيه هي ما تسمح به مجسّات متصلة وتصعيد؛ وقيمة المخزون وعدد الشاحنات الهشّة وعدد التسليمات تُستبدل بأرقامك. السطر الأخير هو الذي يُباع: إثبات لكل تسليم، ينتجه النظام لا موظف ينسخ شاشة.', alt: 'مثال محسوب: ثلاثون دقيقة بين تجاوز 8 درجات والاتصال برئيس المستودع؛ نحو 3 ملايين دينار من المنتجات المبرَّدة في غرفة تبريد متوسطة تضيع إذا دام الانقطاع الليل؛ شاحنتان من اثنتي عشرة تتعطل وحدة تبريدهما بعد الظهر؛ منحنى حرارة واحد مرفق بكل تسليم. الفرضيات مبيّنة.' },
    pannes: { title: 'ستة انقطاعات صامتة لسلسلة التبريد، ستة تنبيهات', columns: ['كيف يحدث', 'ما تفعله المنصة'], rows: [
      { label: 'انقطاع الكهرباء ليلاً', cells: ['يفصل القاطع في الحادية عشرة ليلاً، لا يشتغل المولّد، تصل الغرفة إلى 12 درجة قبل السادسة صباحاً', 'فقدان الجهد ومنحنى صاعد: اتصال بالحارس ثم برئيس المستودع؛ مدة التعرض محسوبة لكل حصة'] },
      { label: 'باب غرفة التبريد مفتوح', cells: ['جرد، عربة عالقة، حاجز باب؛ عشرون دقيقة عند 15 درجة قرب الباب', 'مجسّ في النقطة الحارة قرب الباب، حساس باب، تنبيه بعد 10 دقائق'] },
      { label: 'وحدة تبريد الشاحنة تتعطل', cells: ['45 درجة في الظل، عشر توقفات، أبواب تُفتح عند كل تسليم؛ الصندوق يتبع الطريق', 'منحنى لكل جولة، تنبيه للسائق، إعادة ترتيب التسليم، جولة مختصَرة'] },
      { label: 'طرد منسيّ على الرصيف', cells: ['حُضّر في التاسعة، حُمّل في الحادية عشرة؛ ساعتان في الحرارة المحيطة', 'الوقت خارج البرودة لكل طلبية، عدّ تنازلي عند التحميل، طرد محجوز إذا تجاوز'] },
      { label: 'منتج تجمّد خطأً', cells: ['ثلاجة مضبوطة على درجة منخفضة جداً، طرد ملاصق للجدار البارد؛ الأنسولين واللقاحات لا تتحمل التجمّد', 'عتبة دنيا كما عتبة عليا: تنبيه تحت درجتين، حصة في الحجر'] },
      { label: 'مجسّ خارج الخط أو لم يُعايَر قط', cells: ['بطارية فارغة، واي فاي تغيّر، مجسّ يقرأ درجتين زيادة منذ سنة', 'تمييز «لا بيانات» عن «خارج المجال»؛ تاريخ معايرة لكل مجسّ، تذكير قبل الأجل'] },
    ], caption: 'الشكل 4 · لا ينذر أيّ من هذه الانقطاعات، وأغلبها يقع حين لا يكون أحد في المستودع: ليلاً، في عطلة نهاية الأسبوع، على الطريق. كل واحد يُرى بمجسّ في المكان الصحيح وعتبة مضبوطة؛ وكل واحد يُثبَت بعدها، حصةً حصة، إذا أُرشفت المنحنيات. السادس هو الأخبث: مجسّ خاطئ يطمئن الجميع.', alt: 'مصفوفة ستة انقطاعات: انقطاع الكهرباء ليلاً، باب غرفة التبريد مفتوح، وحدة تبريد الشاحنة تتعطل، طرد منسيّ على الرصيف، منتج تجمّد خطأً، مجسّ خارج الخط أو لم يُعايَر؛ لكل منها كيف يحدث وما تفعله المنصة.' },
    modeles: { title: 'من أنت، وما الذي يجب بناؤه', columns: ['ما يأتي أولاً', 'ما يأتي بعده'], rows: [
      { label: 'موزّع جملة صيدلاني', cells: ['غرف تبريد مرسومة حرارياً، مجسّات، تنبيهات بتصعيد، منحنيات لكل حصة', 'مسجّلات في الشاحنات، إثبات تسليم لكل صيدلية، تقرير شهري'] },
      { label: 'مستورد أو صانع أدوية', cells: ['مستودع تحت المجسّات، استلام بقراءة، حجر لكل حصة', 'متابعة الناقلين المتعاقدين، ملف تجاوز جاهز للوكالة'] },
      { label: 'موزّع مواد غذائية: مجمَّدات، مثلّجات، ألبان', cells: ['مسجّلات في الصناديق، تنبيه للسائق، جولات معاد ترتيبها', 'إثبات تسليم للسوبرماركت، ثلاجات نقاط البيع'] },
      { label: 'سلسلة مطاعم، جزّارون، سوبرماركت', cells: ['مجسّ لكل ثلاجة ولكل موقع، قراءات آلية، تنبيه للمسيّر', 'سجل حرارة لكل موقع، تدقيق داخلي، مقارنة الموردين'] },
      { label: 'مخبر، عيادة، شبكة صيدليات', cells: ['ثلاجات اللقاحات والكواشف تحت المجسّات، تنبيه ليلاً وفي العطل', 'سجل لكل ثلاجة، معايرة مخطَّطة، تقرير للتفتيش'] },
      { label: 'مؤسِّس من الجالية', cells: ['علامة مجمَّدات أو توزيع طازج أُطلق من فرنسا: شاحنات ومستودع مرئية عن بعد', 'لوحة لكل موقع، تقرير شهري، خسائر متفاداة بالأرقام'] },
    ], caption: 'الشكل 5 · العمود الأول يُبنى في اثني عشر أسبوعاً بما فيه المجسّات؛ والثاني يتبع حين تتسع الشبكة. موزّع الجملة يبدأ بغرفه لأن القيمة نائمة هناك؛ وموزّع المواد الغذائية بشاحناته لأن الحر يضرب هناك. والجميع ينتهي بإثبات التسليم لأنه ما يدفع الزبون ثمنه.', alt: 'مصفوفة ستة أنماط: موزّع جملة صيدلاني، مستورد أو صانع أدوية، موزّع مواد غذائية، سلسلة مطاعم أو جزّارون أو سوبرماركت، مخبر أو عيادة أو شبكة صيدليات، مؤسِّس من الجالية؛ لكل منها ما يأتي أولاً وما يأتي بعده.' },
    calendrier: { title: 'تقويم 2027 لموزّع تحت سلسلة التبريد، بالأشهر', unit: 'شهر', items: [
      { label: 'رسم حراري ومجسّات غرف التبريد', note: 'جانفي وفيفري: نقاط حارة، عتبات، تصعيد', from: 0, to: 2 },
      { label: 'شاحنات مجهَّزة، تنبيهات مضبوطة', note: 'مارس وأفريل: مسجّلات، سائقون مكوَّنون، أولى المنحنيات', from: 2, to: 4 },
      { label: 'إثبات التسليم وتطبيق الزبون', note: 'ماي وجوان: قبل الحر، منحنى لكل تسليم', from: 4, to: 6, accent: true },
      { label: 'الصيف: تنبيهات حرارة، وحدات تبريد', note: 'جويلية وأوت: 45 درجة، جولات مختصَرة، ذروة الأعطال', from: 6, to: 8 },
      { label: 'مؤشرات، تفتيش ذاتي', note: 'سبتمبر وأكتوبر: تجاوزات الثلاثي، معايرات', from: 8, to: 10 },
      { label: 'توسيع: متعاقدون، نقاط بيع', note: 'نوفمبر وديسمبر: الشبكة، عقود 2028', from: 10, to: 12 },
    ], caption: 'الشكل 6 · الشهر 0 = جانفي 2027. لسلسلة التبريد موسم واحد: الصيف. كل ما يُضبط قبل جوان، مجسّات وعتبات وتصعيد وإثبات، يخدم في جويلية وأوت؛ وكل ما يُكتشف في جويلية يكلّف مخزوناً. الأشهر الأربعة الأولى باردة وهادئة: هي وقت الرسم الحراري والتجهيز.', alt: 'تقويم بالأشهر: رسم حراري ومجسّات غرف التبريد من 0 إلى 2؛ شاحنات مجهَّزة وتنبيهات مضبوطة من 2 إلى 4؛ إثبات التسليم وتطبيق الزبون من 4 إلى 6؛ الصيف تنبيهات حرارة ووحدات تبريد من 6 إلى 8؛ مؤشرات وتفتيش ذاتي من 8 إلى 10؛ توسيع إلى المتعاقدين ونقاط البيع من 10 إلى 12.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      moments: { svg: steps({ title: t.moments.title, steps: t.moments.items, arrows: true, rtl }), caption: t.moments.caption, alt: t.moments.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      exemple: { svg: stats({ title: t.exemple.title, items: t.exemple.items, rtl }), caption: t.exemple.caption, alt: t.exemple.alt },
      pannes: { svg: matrix({ title: t.pannes.title, columns: t.pannes.columns, rows: t.pannes.rows, rtl }), caption: t.pannes.caption, alt: t.pannes.alt },
      modeles: { svg: matrix({ title: t.modeles.title, columns: t.modeles.columns, rows: t.modeles.rows, rtl }), caption: t.modeles.caption, alt: t.modeles.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
