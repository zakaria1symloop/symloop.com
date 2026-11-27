import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'installateur-solaire-algerie-2027-devis-chantier-monitoring-installations-maintenance';
const T = {
  fr: {
    cover: { eyebrow: 'Solaire · Installateurs · 2027', title: ['2,1 GW de panneaux', 'sont entrés en 2025.', 'Qui suit les installations ?'], subtitle: 'Devis depuis une photo de toit et une facture, chantier suivi, monitoring de chaque installation, contrats de maintenance : l’outil de l’installateur solaire en Algérie en 2027.', left: { label: 'L’installateur', sub: 'une entreprise à Biskra, Sétif ou Oran, 15 chantiers par mois' }, right: { label: 'Les installations', sub: 'des toits, des pompes, des usines, personne ne les regarde' }, note: 'Algérie · solaire · 2027' },
    moments: { title: 'Une installation solaire, du premier appel au douzième mois, en six moments', items: [
      { n: '01', label: 'Demande : facture et photo du toit', sub: 'Consommation, surface, orientation, coupures subies.' },
      { n: '02', label: 'Dimensionnement et devis écrit', sub: 'kWc, batteries, autonomie, prix total, délai.' },
      { n: '03', label: 'Acompte et matériel réservé', sub: 'Numéros de série des panneaux et de l’onduleur.' },
      { n: '04', label: 'Chantier avec liste photo', sub: 'Structure, câblage, protections, mise à la terre.' },
      { n: '05', label: 'Mise en service et monitoring', sub: 'Production visible le jour même, alertes actives.', accent: true },
      { n: '06', label: 'Mois 12 : visite et contrat', sub: 'Nettoyage, serrage, batteries, renouvellement.' },
    ], caption: 'Figure 1 · Le moment 05 fait la différence entre un installateur qui vend du matériel et un installateur qui vend de l’énergie : si la production est visible dès la mise en service, le client sait ce qu’il a acheté, et l’installateur sait quand ça s’arrête. Les moments 01 et 02 décident du taux de signature ; le moment 06 décide du revenu récurrent.', alt: 'Six moments : demande avec facture et photo du toit ; dimensionnement et devis écrit avec kWc, batteries, autonomie, prix total et délai ; acompte et matériel réservé avec numéros de série ; chantier avec liste photo ; mise en service et monitoring avec production visible le jour même ; mois 12 visite et contrat.' },
    couches: { title: 'La plateforme de l’installateur, en cinq couches', layers: [
      { label: 'Terrain', items: [
        { name: 'Onduleurs et compteurs', sub: 'données par le cloud du fabricant, Modbus ou une passerelle 4G quand il n’y a pas de Wi-Fi' },
      ] },
      { label: 'Monitoring', items: [
        { name: 'Production par installation, alertes', sub: 'arrêt, chaîne sous-productive, batterie, température', accent: true },
      ] },
      { label: 'Opérations', items: [
        { name: 'Devis, chantiers, stock', sub: 'catalogue à prix du jour, numéros de série, liste photo, acomptes' },
        { name: 'Maintenance', sub: 'tickets, visites, pièces sous garantie, contrats' },
      ] },
      { label: 'Client', items: [
        { name: 'Application', sub: 'production du jour, kWh évités, ticket, facture de la visite' },
      ] },
      { label: 'Direction', items: [{ name: 'Tableau de bord', sub: 'devis signés, chantiers en cours, parc installé, installations en panne' }] },
    ], caption: 'Figure 2 · L’application du fabricant d’onduleurs montre une installation à la fois, à son propriétaire. L’installateur a besoin de la vue inverse : tout son parc, classé par ce qui ne produit pas. C’est la couche monitoring, alimentée par les API des fabricants ou par une passerelle posée au moment du chantier, qui transforme cent chantiers passés en cent contrats de maintenance.', alt: 'Cinq couches : terrain avec onduleurs et compteurs par cloud du fabricant, Modbus ou passerelle 4G ; monitoring avec production par installation et alertes ; opérations avec devis, chantiers, stock et maintenance ; client avec une application ; direction avec un tableau de bord.' },
    exemple: { title: 'Quarante demandes par mois, deux cents installations posées : l’exemple', items: [
      { value: '1 jour', label: 'pour rendre un devis écrit au lieu de cinq : photo, facture, catalogue à prix du jour' },
      { value: '+ 4 chantiers', label: 'par mois si le taux de signature passe de 20 à 30 % sur 40 demandes, hypothèse' },
      { value: '≈ 2,4 M DA', label: 'de ventes en plus par mois à 600 000 DA le chantier moyen, hypothèse' },
      { value: '10 sur 200', label: 'installations à l’arrêt à tout moment si 5 % tombent en panne sans que personne ne le voie, hypothèse', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure. Le délai de devis est ce qu’un catalogue et une application de relevé permettent ; les taux de signature et le prix moyen sont à remplacer par les vôtres. La dernière ligne est celle qui coûte le plus : dix clients qui paient Sonelgaz plein tarif en croyant produire, et qui l’apprennent sur la facture du trimestre.', alt: 'Exemple chiffré : un jour pour rendre un devis au lieu de cinq ; plus quatre chantiers par mois si le taux de signature passe de 20 à 30 % sur quarante demandes ; environ 2,4 millions de dinars de ventes en plus par mois à 600 000 dinars le chantier ; dix installations sur deux cents à l’arrêt si cinq pour cent tombent en panne sans être vues. Hypothèses indiquées.' },
    pannes: { title: 'Six pannes silencieuses d’un parc installé, six alertes', columns: ['Comment ça se passe', 'Ce que la plateforme fait'], rows: [
      { label: 'Onduleur arrêté', cells: ['Défaut réseau ou surchauffe, voyant rouge que personne ne regarde', 'Production nulle à midi par ciel clair : alerte en moins d’une heure'] },
      { label: 'Chaîne sous-productive', cells: ['Poussière, ombre d’un nouveau bâtiment, connecteur desserré', 'Comparaison entre chaînes et avec les voisines : ticket de visite'] },
      { label: 'Batterie épuisée tôt', cells: ['Cycles profonds l’été, autonomie qui fond sans que le client sache', 'Courbe de décharge par nuit, seuil d’alerte, remplacement planifié'] },
      { label: 'Disjoncteur déclenché', cells: ['Orage, surtension ; l’installation est hors ligne depuis des semaines', 'Perte de communication plus production nulle : appel au client'] },
      { label: 'Passerelle hors ligne', cells: ['Wi-Fi changé, box remplacée, carte SIM expirée', 'Distinction « pas de données » et « pas de production » ; SIM à renouveler'] },
      { label: 'Garantie expirée sans visite', cells: ['L’onduleur casse un mois après la fin de garantie', 'Visite planifiée avant l’échéance, pièce commandée sous garantie'] },
    ], caption: 'Figure 4 · Chacune de ces pannes coûte au client des kilowattheures payés plein tarif, et à l’installateur sa réputation dans la rue voisine. Aucune ne se voit sans monitoring ; toutes se règlent en une visite si elles sont vues la semaine même. Le contrat de maintenance se vend sur ce tableau.', alt: 'Matrice de six pannes : onduleur arrêté, chaîne sous-productive, batterie épuisée tôt, disjoncteur déclenché, passerelle hors ligne, garantie expirée sans visite ; pour chacune, comment ça se passe et ce que la plateforme fait.' },
    modeles: { title: 'Qui vous êtes, ce qu’il faut construire', columns: ['Ce qu’il faut d’abord', 'Ce qui vient ensuite'], rows: [
      { label: 'Installateur, 5 à 30 chantiers par mois', cells: ['Devis depuis photo et facture, chantiers avec liste photo', 'Monitoring du parc, contrats de maintenance'] },
      { label: 'Importateur ou distributeur', cells: ['Portail revendeurs : stock, prix du jour, numéros de série', 'Garanties par numéro de série, formation des installateurs'] },
      { label: 'Usine, ferme, chaîne de magasins', cells: ['Tableau de bord multi-sites : production, autoconsommation, coupures', 'Alertes, maintenance, rapport mensuel par site'] },
      { label: 'Pompage solaire agricole', cells: ['Suivi hors réseau par passerelle 4G : débit, niveau, panneaux', 'Alerte pompe à sec, planning d’irrigation, visite'] },
      { label: 'Fondateur de la diaspora', cells: ['Installation chez les parents payée d’Europe, application avec production et alertes', 'Contrat de maintenance avec rapport mensuel'] },
      { label: 'Entreprise sur un marché public', cells: ['Suivi par bâtiment : avancement, photos, mise en service', 'Rapport de production par site, exigé ou non, prêt à remettre'] },
    ], caption: 'Figure 5 · La première colonne est ce que l’on construit en douze semaines ; la seconde, ce qui suit quand le parc grandit. Le monitoring se pose dès le premier chantier, même sans l’exploiter tout de suite : une passerelle à cent euros posée aujourd’hui évite un retour sur site demain.', alt: 'Matrice de six profils : installateur, importateur ou distributeur, usine ou ferme ou chaîne de magasins, pompage solaire agricole, fondateur de la diaspora, entreprise sur un marché public ; pour chacun, ce qu’il faut d’abord et ce qui vient ensuite.' },
    calendrier: { title: 'Le calendrier 2027 d’un installateur, en mois', unit: 'mois', items: [
      { label: 'Catalogue, devis, chantiers', note: 'janvier et février : l’outil de vente', from: 0, to: 2 },
      { label: 'Monitoring sur 20 installations', note: 'mars et avril : passerelles, alertes, premiers tickets', from: 2, to: 4 },
      { label: 'Vente avant l’été', note: 'mai et juin : climatisation, coupures, délai tenu', from: 4, to: 6, accent: true },
      { label: 'Été : alertes chaleur, service', note: 'juillet et août : production maximale, pannes maximales', from: 6, to: 8 },
      { label: 'Campagne de nettoyage et de visites', note: 'septembre et octobre : poussière de l’été, garanties', from: 8, to: 10 },
      { label: 'Rapports annuels, renouvellements', note: 'novembre et décembre : contrats 2028', from: 10, to: 12 },
    ], caption: 'Figure 6 · Mois 0 = janvier 2027. Le solaire a deux saisons : la vente, avant la chaleur, et le service, pendant et après. L’outil de vente se construit l’hiver, quand les demandes sont calmes ; le monitoring se teste sur vingt installations au printemps pour être prêt quand l’été arrête les onduleurs.', alt: 'Calendrier en mois : catalogue, devis et chantiers de 0 à 2 ; monitoring sur vingt installations de 2 à 4 ; vente avant l’été de 4 à 6 ; été alertes chaleur et service de 6 à 8 ; campagne de nettoyage et de visites de 8 à 10 ; rapports annuels et renouvellements de 10 à 12.' },
  },
  en: {
    cover: { eyebrow: 'Solar · Installers · 2027', title: ['2.1 GW of panels', 'came in during 2025.', 'Who watches the systems?'], subtitle: 'Quotes from a roof photo and a bill, tracked jobs, monitoring of every system, maintenance contracts: the solar installer’s tool in Algeria in 2027.', left: { label: 'The installer', sub: 'a company in Biskra, Sétif or Oran, 15 jobs a month' }, right: { label: 'The systems', sub: 'roofs, pumps, factories, nobody watching them' }, note: 'Algeria · solar · 2027' },
    moments: { title: 'A solar system, from the first call to month 12, in six moments', items: [
      { n: '01', label: 'Request: bill and roof photo', sub: 'Consumption, area, orientation, outages suffered.' },
      { n: '02', label: 'Sizing and written quote', sub: 'kWp, batteries, autonomy, total price, lead time.' },
      { n: '03', label: 'Deposit and reserved stock', sub: 'Serial numbers of panels and inverter.' },
      { n: '04', label: 'Job with photo checklist', sub: 'Structure, wiring, protections, earthing.' },
      { n: '05', label: 'Commissioning and monitoring', sub: 'Production visible the same day, alerts active.', accent: true },
      { n: '06', label: 'Month 12: visit and contract', sub: 'Cleaning, torque, batteries, renewal.' },
    ], caption: 'Figure 1 · Moment 05 is the difference between an installer who sells hardware and one who sells energy: if production is visible from commissioning, the client knows what they bought and the installer knows when it stops. Moments 01 and 02 decide the signing rate; moment 06 decides recurring revenue.', alt: 'Six moments: request with bill and roof photo; sizing and written quote with kWp, batteries, autonomy, total price and lead time; deposit and reserved stock with serial numbers; job with photo checklist; commissioning and monitoring with production visible the same day; month 12 visit and contract.' },
    couches: { title: 'The installer’s platform, in five layers', layers: [
      { label: 'Field', items: [
        { name: 'Inverters and meters', sub: 'data through the manufacturer’s cloud, Modbus, or a 4G gateway where there is no Wi-Fi' },
      ] },
      { label: 'Monitoring', items: [
        { name: 'Production per system, alerts', sub: 'stopped, under-producing string, battery, temperature', accent: true },
      ] },
      { label: 'Operations', items: [
        { name: 'Quotes, jobs, stock', sub: 'catalogue at today’s prices, serial numbers, photo checklist, deposits' },
        { name: 'Maintenance', sub: 'tickets, visits, parts under warranty, contracts' },
      ] },
      { label: 'Client', items: [
        { name: 'App', sub: 'today’s production, kWh avoided, ticket, visit invoice' },
      ] },
      { label: 'Management', items: [{ name: 'Dashboard', sub: 'signed quotes, jobs in progress, installed base, systems down' }] },
    ], caption: 'Figure 2 · The inverter manufacturer’s app shows one system at a time, to its owner. The installer needs the opposite view: the whole fleet, sorted by what is not producing. That monitoring layer, fed by manufacturers’ APIs or by a gateway fitted during the job, turns a hundred past jobs into a hundred maintenance contracts.', alt: 'Five layers: field with inverters and meters through manufacturer cloud, Modbus or 4G gateway; monitoring with production per system and alerts; operations with quotes, jobs, stock and maintenance; client with an app; management with a dashboard.' },
    exemple: { title: 'Forty requests a month, two hundred systems installed: the example', items: [
      { value: '1 day', label: 'to return a written quote instead of five: photo, bill, catalogue at today’s prices' },
      { value: '+ 4 jobs', label: 'a month if the signing rate goes from 20 to 30 % on 40 requests, assumption' },
      { value: '≈ 2.4 M DA', label: 'of extra sales a month at 600,000 DA per average job, assumption' },
      { value: '10 of 200', label: 'systems stopped at any time if 5 % fail without anyone seeing, assumption', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement. The quote lead time is what a catalogue and a survey app allow; signing rates and average price are to be replaced with yours. The last line is the one that costs most: ten clients paying Sonelgaz full rate while believing they produce, who find out on the quarterly bill.', alt: 'Worked example: one day to return a quote instead of five; plus four jobs a month if the signing rate goes from 20 to 30 % on forty requests; about 2.4 million dinars of extra sales a month at 600,000 dinars per job; ten systems of two hundred stopped if five per cent fail unseen. Assumptions stated.' },
    pannes: { title: 'Six silent failures of an installed base, six alerts', columns: ['How it happens', 'What the platform does'], rows: [
      { label: 'Inverter stopped', cells: ['Grid fault or overheating, red light nobody looks at', 'Zero production at noon under clear sky: alert within the hour'] },
      { label: 'Under-producing string', cells: ['Dust, shadow of a new building, loose connector', 'Comparison between strings and with neighbours: visit ticket'] },
      { label: 'Battery drained early', cells: ['Deep cycles in summer, autonomy melting without the client knowing', 'Discharge curve per night, alert threshold, planned replacement'] },
      { label: 'Breaker tripped', cells: ['Storm, surge; the system has been offline for weeks', 'Lost communication plus zero production: call to the client'] },
      { label: 'Gateway offline', cells: ['Wi-Fi changed, router replaced, SIM expired', 'Tells “no data” from “no production”; SIM to renew'] },
      { label: 'Warranty expired without a visit', cells: ['The inverter breaks a month after the warranty ends', 'Visit planned before the deadline, part ordered under warranty'] },
    ], caption: 'Figure 4 · Each of these failures costs the client kilowatt-hours paid at full rate, and the installer their reputation in the next street. None is visible without monitoring; all are fixed in one visit if seen the same week. The maintenance contract is sold on this table.', alt: 'Matrix of six failures: inverter stopped, under-producing string, battery drained early, breaker tripped, gateway offline, warranty expired without a visit; for each, how it happens and what the platform does.' },
    modeles: { title: 'Who you are, what to build', columns: ['What comes first', 'What comes next'], rows: [
      { label: 'Installer, 5 to 30 jobs a month', cells: ['Quotes from photo and bill, jobs with photo checklist', 'Fleet monitoring, maintenance contracts'] },
      { label: 'Importer or distributor', cells: ['Dealer portal: stock, today’s prices, serial numbers', 'Warranties by serial number, installer training'] },
      { label: 'Factory, farm, retail chain', cells: ['Multi-site dashboard: production, self-consumption, outages', 'Alerts, maintenance, monthly report per site'] },
      { label: 'Agricultural solar pumping', cells: ['Off-grid tracking through a 4G gateway: flow, level, panels', 'Dry-pump alert, irrigation schedule, visit'] },
      { label: 'Diaspora founder', cells: ['Parents’ system paid from Europe, app with production and alerts', 'Maintenance contract with monthly report'] },
      { label: 'Company on a public contract', cells: ['Tracking per building: progress, photos, commissioning', 'Production report per site, required or not, ready to hand over'] },
    ], caption: 'Figure 5 · The first column is what gets built in twelve weeks; the second, what follows as the fleet grows. Monitoring is fitted from the first job, even if not used straight away: a gateway at a hundred euros fitted today saves a site visit tomorrow.', alt: 'Matrix of six profiles: installer, importer or distributor, factory or farm or retail chain, agricultural solar pumping, diaspora founder, company on a public contract; for each, what comes first and what comes next.' },
    calendrier: { title: 'An installer’s 2027 calendar, in months', unit: 'months', items: [
      { label: 'Catalogue, quotes, jobs', note: 'January and February: the sales tool', from: 0, to: 2 },
      { label: 'Monitoring on 20 systems', note: 'March and April: gateways, alerts, first tickets', from: 2, to: 4 },
      { label: 'Selling before summer', note: 'May and June: air conditioning, outages, lead time kept', from: 4, to: 6, accent: true },
      { label: 'Summer: heat alerts, service', note: 'July and August: peak production, peak failures', from: 6, to: 8 },
      { label: 'Cleaning and visit campaign', note: 'September and October: summer dust, warranties', from: 8, to: 10 },
      { label: 'Annual reports, renewals', note: 'November and December: 2028 contracts', from: 10, to: 12 },
    ], caption: 'Figure 6 · Month 0 = January 2027. Solar has two seasons: selling, before the heat, and service, during and after. The sales tool is built in winter, when requests are quiet; monitoring is tested on twenty systems in spring so it is ready when summer stops the inverters.', alt: 'Calendar in months: catalogue, quotes and jobs from 0 to 2; monitoring on twenty systems from 2 to 4; selling before summer from 4 to 6; summer heat alerts and service from 6 to 8; cleaning and visit campaign from 8 to 10; annual reports and renewals from 10 to 12.' },
  },
  ar: {
    cover: { eyebrow: 'الطاقة الشمسية · شركات التركيب · 2027', title: ['2.1 جيغاواط من الألواح', 'دخلت سنة 2025.', 'من يراقب المنشآت؟'], subtitle: 'عرض سعر من صورة السطح والفاتورة، ورشة متابَعة، مراقبة كل منشأة، عقود صيانة: أداة شركة التركيب الشمسي في الجزائر سنة 2027.', left: { label: 'شركة التركيب', sub: 'مؤسسة في بسكرة أو سطيف أو وهران، 15 ورشة في الشهر' }, right: { label: 'المنشآت', sub: 'أسطح ومضخات ومصانع، لا أحد يراقبها' }, note: 'الجزائر · الطاقة الشمسية · 2027' },
    moments: { title: 'منشأة شمسية من أول اتصال إلى الشهر الثاني عشر، في ست لحظات', items: [
      { n: '01', label: 'الطلب: الفاتورة وصورة السطح', sub: 'الاستهلاك، المساحة، الاتجاه، الانقطاعات.' },
      { n: '02', label: 'التحجيم وعرض سعر مكتوب', sub: 'كيلوواط ذروة، بطاريات، استقلالية، سعر إجمالي، أجل.' },
      { n: '03', label: 'تسبيق وعتاد محجوز', sub: 'الأرقام التسلسلية للألواح والمحوّل.' },
      { n: '04', label: 'ورشة بقائمة صور', sub: 'الهيكل، الكوابل، الحمايات، التأريض.' },
      { n: '05', label: 'التشغيل والمراقبة', sub: 'الإنتاج ظاهر في اليوم نفسه، التنبيهات مفعّلة.', accent: true },
      { n: '06', label: 'الشهر 12: زيارة وعقد', sub: 'تنظيف، شدّ، بطاريات، تجديد.' },
    ], caption: 'الشكل 1 · اللحظة 05 هي الفرق بين شركة تبيع عتاداً وشركة تبيع طاقة: إذا كان الإنتاج ظاهراً منذ التشغيل، يعرف الزبون ما اشتراه وتعرف الشركة متى يتوقف. اللحظتان 01 و02 تقرّران نسبة التوقيع؛ واللحظة 06 تقرّر الدخل المتكرر.', alt: 'ست لحظات: طلب بالفاتورة وصورة السطح؛ تحجيم وعرض سعر مكتوب؛ تسبيق وعتاد محجوز بالأرقام التسلسلية؛ ورشة بقائمة صور؛ تشغيل ومراقبة مع إنتاج ظاهر في اليوم نفسه؛ الشهر 12 زيارة وعقد.' },
    couches: { title: 'منصة شركة التركيب في خمس طبقات', layers: [
      { label: 'الميدان', items: [
        { name: 'المحوّلات والعدادات', sub: 'بيانات عبر سحابة الصانع أو Modbus أو بوابة 4G حيث لا توجد واي فاي' },
      ] },
      { label: 'المراقبة', items: [
        { name: 'الإنتاج لكل منشأة، تنبيهات', sub: 'توقف، سلسلة ضعيفة الإنتاج، بطارية، حرارة', accent: true },
      ] },
      { label: 'العمليات', items: [
        { name: 'عروض الأسعار، الورشات، المخزون', sub: 'كتالوج بأسعار اليوم، أرقام تسلسلية، قائمة صور، تسبيقات' },
        { name: 'الصيانة', sub: 'تذاكر، زيارات، قطع تحت الضمان، عقود' },
      ] },
      { label: 'الزبون', items: [
        { name: 'تطبيق', sub: 'إنتاج اليوم، كيلوواط ساعة موفَّرة، تذكرة، فاتورة الزيارة' },
      ] },
      { label: 'الإدارة', items: [{ name: 'لوحة متابعة', sub: 'عروض موقّعة، ورشات جارية، حظيرة مركّبة، منشآت متوقفة' }] },
    ], caption: 'الشكل 2 · تطبيق صانع المحوّلات يعرض منشأة واحدة لمالكها. شركة التركيب تحتاج إلى العكس: كل حظيرتها مرتّبة حسب ما لا يُنتج. طبقة المراقبة هذه، المغذّاة بواجهات الصانعين أو ببوابة تُركَّب يوم الورشة، تحوّل مئة ورشة ماضية إلى مئة عقد صيانة.', alt: 'خمس طبقات: الميدان بالمحوّلات والعدادات؛ المراقبة بالإنتاج لكل منشأة والتنبيهات؛ العمليات بعروض الأسعار والورشات والمخزون والصيانة؛ الزبون بتطبيق؛ الإدارة بلوحة متابعة.' },
    exemple: { title: 'أربعون طلباً في الشهر ومئتا منشأة مركّبة: المثال', items: [
      { value: 'يوم واحد', label: 'لتسليم عرض سعر مكتوب بدل خمسة: صورة، فاتورة، كتالوج بأسعار اليوم' },
      { value: '+ 4 ورشات', label: 'في الشهر إذا انتقلت نسبة التوقيع من 20 إلى 30 % على 40 طلباً، فرضية' },
      { value: '≈ 2.4 مليون دج', label: 'مبيعات إضافية في الشهر بمعدل 600,000 دج للورشة، فرضية' },
      { value: '10 من 200', label: 'منشأة متوقفة في أي لحظة إذا تعطّلت 5 % دون أن يراها أحد، فرضية', accent: true },
    ], caption: 'الشكل 3 · حساب على فرضيات لا قياس. أجل عرض السعر هو ما يسمح به كتالوج وتطبيق معاينة؛ نسب التوقيع ومتوسط السعر تُستبدل بأرقامك. السطر الأخير هو الأغلى: عشرة زبائن يدفعون لسونلغاز التعريفة الكاملة وهم يظنون أنهم يُنتجون، ويكتشفون ذلك في فاتورة الثلاثي.', alt: 'مثال محسوب: يوم واحد لعرض السعر بدل خمسة؛ زائد أربع ورشات في الشهر إذا انتقلت نسبة التوقيع من 20 إلى 30 %؛ نحو 2.4 مليون دينار مبيعات إضافية في الشهر؛ عشر منشآت من مئتين متوقفة إذا تعطّلت خمسة بالمئة دون رؤية. الفرضيات مبيّنة.' },
    pannes: { title: 'ستة أعطال صامتة في حظيرة مركّبة، ستة تنبيهات', columns: ['كيف يحدث', 'ما تفعله المنصة'], rows: [
      { label: 'محوّل متوقف', cells: ['خلل شبكة أو سخونة، ضوء أحمر لا ينظر إليه أحد', 'إنتاج صفر عند الظهر في سماء صافية: تنبيه خلال ساعة'] },
      { label: 'سلسلة ضعيفة الإنتاج', cells: ['غبار، ظل بناية جديدة، موصّل مرتخٍ', 'مقارنة بين السلاسل ومع الجيران: تذكرة زيارة'] },
      { label: 'بطارية تنفد مبكراً', cells: ['دورات عميقة صيفاً، استقلالية تذوب دون علم الزبون', 'منحنى تفريغ كل ليلة، عتبة تنبيه، استبدال مخطَّط'] },
      { label: 'قاطع مفصول', cells: ['عاصفة، جهد زائد؛ المنشأة خارج الخدمة منذ أسابيع', 'انقطاع اتصال مع إنتاج صفر: اتصال بالزبون'] },
      { label: 'بوابة خارج الخط', cells: ['واي فاي تغيّر، موجّه استُبدل، شريحة انتهت', 'تمييز «لا بيانات» عن «لا إنتاج»؛ شريحة للتجديد'] },
      { label: 'ضمان انتهى دون زيارة', cells: ['المحوّل يتعطّل بعد شهر من نهاية الضمان', 'زيارة مخطَّطة قبل الأجل، قطعة مطلوبة تحت الضمان'] },
    ], caption: 'الشكل 4 · كل عطل من هذه يكلّف الزبون كيلوواط ساعات بالتعريفة الكاملة، ويكلّف الشركة سمعتها في الشارع المجاور. لا يُرى أيّ منها دون مراقبة؛ وكلها تُحل في زيارة واحدة إذا رُئيت في الأسبوع نفسه. عقد الصيانة يُباع على هذا الجدول.', alt: 'مصفوفة ستة أعطال: محوّل متوقف، سلسلة ضعيفة الإنتاج، بطارية تنفد مبكراً، قاطع مفصول، بوابة خارج الخط، ضمان انتهى دون زيارة؛ لكل منها كيف يحدث وما تفعله المنصة.' },
    modeles: { title: 'من أنت، وما الذي يجب بناؤه', columns: ['ما يأتي أولاً', 'ما يأتي بعده'], rows: [
      { label: 'شركة تركيب، 5 إلى 30 ورشة في الشهر', cells: ['عروض أسعار من صورة وفاتورة، ورشات بقائمة صور', 'مراقبة الحظيرة، عقود صيانة'] },
      { label: 'مستورد أو موزّع', cells: ['بوابة للبائعين: مخزون، أسعار اليوم، أرقام تسلسلية', 'ضمانات بالرقم التسلسلي، تكوين المركّبين'] },
      { label: 'مصنع، مزرعة، سلسلة محلات', cells: ['لوحة متعددة المواقع: إنتاج، استهلاك ذاتي، انقطاعات', 'تنبيهات، صيانة، تقرير شهري لكل موقع'] },
      { label: 'ضخ شمسي فلاحي', cells: ['متابعة خارج الشبكة ببوابة 4G: تدفق، مستوى، ألواح', 'تنبيه مضخة جافة، برنامج سقي، زيارة'] },
      { label: 'مؤسِّس من الجالية', cells: ['منشأة عند الوالدين مدفوعة من أوروبا، تطبيق بالإنتاج والتنبيهات', 'عقد صيانة بتقرير شهري'] },
      { label: 'مؤسسة في صفقة عمومية', cells: ['متابعة لكل بناية: تقدّم، صور، تشغيل', 'تقرير إنتاج لكل موقع، مطلوباً كان أم لا، جاهز للتسليم'] },
    ], caption: 'الشكل 5 · العمود الأول ما يُبنى في اثني عشر أسبوعاً؛ والثاني ما يتبع حين تكبر الحظيرة. المراقبة تُركَّب منذ الورشة الأولى حتى دون استغلالها فوراً: بوابة بمئة يورو تُركَّب اليوم توفّر رجوعاً إلى الموقع غداً.', alt: 'مصفوفة ستة أنماط: شركة تركيب، مستورد أو موزّع، مصنع أو مزرعة أو سلسلة محلات، ضخ شمسي فلاحي، مؤسِّس من الجالية، مؤسسة في صفقة عمومية؛ لكل منها ما يأتي أولاً وما يأتي بعده.' },
    calendrier: { title: 'تقويم 2027 لشركة تركيب، بالأشهر', unit: 'شهر', items: [
      { label: 'كتالوج، عروض أسعار، ورشات', note: 'جانفي وفيفري: أداة البيع', from: 0, to: 2 },
      { label: 'مراقبة على 20 منشأة', note: 'مارس وأفريل: بوابات، تنبيهات، أولى التذاكر', from: 2, to: 4 },
      { label: 'البيع قبل الصيف', note: 'ماي وجوان: تكييف، انقطاعات، أجل محترم', from: 4, to: 6, accent: true },
      { label: 'الصيف: تنبيهات حرارة، خدمة', note: 'جويلية وأوت: ذروة الإنتاج وذروة الأعطال', from: 6, to: 8 },
      { label: 'حملة تنظيف وزيارات', note: 'سبتمبر وأكتوبر: غبار الصيف، ضمانات', from: 8, to: 10 },
      { label: 'تقارير سنوية، تجديدات', note: 'نوفمبر وديسمبر: عقود 2028', from: 10, to: 12 },
    ], caption: 'الشكل 6 · الشهر 0 = جانفي 2027. للطاقة الشمسية موسمان: البيع قبل الحر، والخدمة أثناءه وبعده. أداة البيع تُبنى شتاءً حين تهدأ الطلبات؛ والمراقبة تُجرَّب على عشرين منشأة ربيعاً لتكون جاهزة حين يوقف الصيف المحوّلات.', alt: 'تقويم بالأشهر: كتالوج وعروض أسعار وورشات من 0 إلى 2؛ مراقبة على عشرين منشأة من 2 إلى 4؛ البيع قبل الصيف من 4 إلى 6؛ الصيف تنبيهات حرارة وخدمة من 6 إلى 8؛ حملة تنظيف وزيارات من 8 إلى 10؛ تقارير سنوية وتجديدات من 10 إلى 12.' },
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
