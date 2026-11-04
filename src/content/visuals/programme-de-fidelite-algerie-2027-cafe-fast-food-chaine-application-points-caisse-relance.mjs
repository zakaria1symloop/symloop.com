import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'programme-de-fidelite-algerie-2027-cafe-fast-food-chaine-application-points-caisse-relance';
const T = {
  fr: {
    cover: { eyebrow: 'Fidélité · Commerce · 2027', title: ['Il revient trois fois', 'par semaine.', 'Qui le sait ?'], subtitle: 'Identification en cinq secondes à la caisse, points liés au ticket, récompense en produit, relance de ceux qui ne viennent plus, tableau de bord par point de vente : le programme de fidélité d’un café, d’un fast-food ou d’une chaîne de magasins en Algérie en 2027.', left: { label: 'Le gérant', sub: 'cinq points de vente, deux mille tickets par jour, aucun nom' }, right: { label: 'Le client', sub: 'un café chaque matin depuis trois ans, inconnu de la caisse' }, note: 'Algérie · programme de fidélité · 2027' },
    moments: { title: 'Un client régulier, de la caisse à son retour, en six moments', items: [
      { n: '01', label: 'Identification à la caisse', sub: 'Numéro de téléphone ou QR, cinq secondes, sans ralentir la file.' },
      { n: '02', label: 'Points liés au ticket', sub: 'Un ticket = un crédit, sur le montant réel de la caisse.' },
      { n: '03', label: 'Récompense en produit', sub: 'Le dixième café, le menu, la pâtisserie ; règle écrite, date limite.' },
      { n: '04', label: 'Carte dans le téléphone', sub: 'Application ou pass dans le wallet, solde visible, offres.' },
      { n: '05', label: 'Relance de celui qui ne vient plus', sub: 'Vingt et un jours sans visite : message, offre datée, retour mesuré.', accent: true },
      { n: '06', label: 'Tableau de bord', sub: 'Fréquence, dormants, panier, par point de vente, par caissier.' },
    ], caption: 'Figure 1 · Le moment 01 décide de tout : si l’identification prend plus de cinq secondes ou ralentit la file, les caissiers cessent de la proposer dès la deuxième semaine. Le moment 05 est celui qui rapporte : un client qui a cessé de venir ne revient pas tout seul, et personne ne le remarque sans la liste des dormants.', alt: 'Six moments : identification à la caisse par numéro de téléphone ou QR en cinq secondes ; points liés au ticket de caisse ; récompense en produit avec règle écrite ; carte dans le téléphone, application ou pass wallet ; relance du client qui ne vient plus après vingt et un jours, mise en avant ; tableau de bord par point de vente et par caissier.' },
    couches: { title: 'La plateforme de fidélité, en cinq couches', layers: [
      { label: 'Caisse', items: [
        { name: 'Identification et crédit', sub: 'numéro ou QR saisi dans la caisse, points calculés sur le ticket, hors ligne quand le réseau tombe' },
      ] },
      { label: 'Règles', items: [
        { name: 'Points, récompenses, garde-fous', sub: 'un ticket = un crédit, plafond par jour, annulation qui retire les points, récompense limitée aux heures creuses' },
      ] },
      { label: 'Client', items: [
        { name: 'Application ou pass wallet, SMS', sub: 'solde, historique, offres, cadeau offert par un proche ; pas de compte compliqué' },
      ] },
      { label: 'Relance', items: [
        { name: 'Segments et campagnes mesurées', sub: 'dormants à 21 jours, gros paniers, nouveaux : message daté, retour compté sur quatorze jours', accent: true },
      ] },
      { label: 'Direction', items: [{ name: 'Tableau de bord', sub: 'taux d’identification, fréquence, dormants, coût des récompenses, par site et par caissier' }] },
    ], caption: 'Figure 2 · La carte à tampons identifie le client sans rien apprendre de lui ; la plateforme apprend sa fréquence et agit quand elle baisse. La couche caisse est la première à construire, parce que sans identification rapide il n’y a pas de données ; la couche relance est celle qui paie, parce qu’elle ramène les clients que personne ne voyait partir.', alt: 'Cinq couches : caisse avec identification et crédit des points hors ligne ; règles avec points, récompenses et garde-fous anti-fraude ; client avec application, pass wallet et SMS ; relance avec segments et campagnes mesurées, mise en avant ; direction avec tableau de bord par site et par caissier.' },
    exemple: { title: 'Cinq cafés, deux mille tickets par jour, 350 dinars de panier : l’exemple', items: [
      { value: '5 s', label: 'pour identifier le client à la caisse, numéro de téléphone ou QR, sans ralentir la file ; au-delà, les caissiers abandonnent' },
      { value: '35 %', label: 'des tickets identifiés après trois mois, soit 700 visites par jour et environ 4 000 clients connus, hypothèse' },
      { value: '≈ 1,7 %', label: 'du chiffre identifié en coût de récompense : un café à 60 DA offert tous les dix tickets de 350 DA, hypothèse' },
      { value: '+700 k DA', label: 'par mois si les 4 000 clients connus font une demi-visite de plus par mois à 350 DA, hypothèse', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure. Le taux d’identification, le panier et la fréquence sont à remplacer par les vôtres ; la demi-visite de plus par mois est l’objectif que la relance et les récompenses doivent atteindre pour que le programme vaille ce qu’il coûte. Sans le tableau de bord qui mesure la fréquence avant et après, on ne saura jamais s’il y est arrivé.', alt: 'Exemple chiffré : cinq secondes pour identifier le client à la caisse ; 35 % des tickets identifiés après trois mois, environ 4 000 clients connus ; environ 1,7 % du chiffre identifié en coût de récompense ; plus 700 000 dinars par mois si les clients connus font une demi-visite de plus par mois, toutes hypothèses.' },
    fuites: { title: 'Six fuites silencieuses d’un programme de fidélité, six garde-fous', columns: ['Comment ça se passe', 'Ce que la plateforme fait'], rows: [
      { label: 'Le caissier crédite son propre numéro', cells: ['Chaque client sans carte devient un ticket crédité au cousin du caissier ; dix cafés gratuits par semaine', 'Points liés au ticket et au caissier, plafond par numéro et par jour, numéros en tête affichés au gérant'] },
      { label: 'Le ticket scanné deux fois', cells: ['Le QR du ticket photographié et partagé ; le même achat crédité trois fois', 'Un QR unique par ticket, valable une fois, vingt-quatre heures, pour le montant imprimé'] },
      { label: 'Les points sans achat', cells: ['Ticket annulé après le crédit ; vente « offerte » créditée quand même', 'L’annulation retire les points ; les ventes à zéro ne créditent pas'] },
      { label: 'La récompense à l’heure de pointe', cells: ['Le menu offert réclamé à midi, quand la file est la plus longue et la marge la plus utile', 'Récompense limitée aux heures creuses ou aux produits choisis, règle écrite, vue dans l’application'] },
      { label: 'Le message à tout le monde', cells: ['Deux SMS par semaine à 4 000 numéros ; désinscriptions, coût, et plus personne ne lit', 'Segments : dormants, gros paniers, nouveaux ; un message par segment, retour mesuré avant le suivant'] },
      { label: 'Le fichier chez le prestataire', cells: ['Trois ans de clients dans un outil dont on ne peut rien exporter ; changer d’outil, c’est repartir de zéro', 'Clients, points et historique au nom de l’enseigne, exportables, serveur et comptes à son nom'] },
    ], caption: 'Figure 4 · Les quatre premières fuites se règlent par des règles dans la caisse, pas par la surveillance : un ticket, un crédit, une fois, pour le montant réel, avec un plafond. Les deux dernières décident si le programme existe encore dans trois ans : des messages que les clients lisent, et un fichier qui appartient à l’enseigne.', alt: 'Matrice de six fuites : caissier qui crédite son propre numéro ; ticket scanné deux fois ; points sans achat ; récompense à l’heure de pointe ; message envoyé à tout le monde ; fichier client chez le prestataire ; avec pour chacune ce que la plateforme fait.' },
    modeles: { title: 'Qui vous êtes, ce qu’il faut construire', columns: ['Ce qu’il faut d’abord', 'Ce qui vient ensuite'], rows: [
      { label: 'Chaîne de cafés ou de salons de thé', cells: ['Identification par numéro dans la caisse, dixième café offert, liste des dormants', 'Pass wallet, commande à l’avance, campagnes par point de vente'] },
      { label: 'Fast-food, pizzeria, poulet : enseigne ou franchise', cells: ['Points sur le ticket, récompense en heures creuses, règles identiques dans tous les sites', 'Application à la marque, commande et retrait, fichier central pour les franchisés'] },
      { label: 'Boulangerie-pâtisserie à plusieurs points de vente', cells: ['Carte dans le wallet, points sur les commandes de fêtes, rappel avant l’Aïd', 'Précommande de gâteaux, acompte, relance des commandes de l’an dernier'] },
      { label: 'Supérette ou chaîne de magasins', cells: ['Numéro à la caisse, cagnotte en dinars, offres par rayon', 'Tableau de bord par magasin, panier moyen par segment, promotions ciblées'] },
      { label: 'Parfumerie, prêt-à-porter, cosmétique', cells: ['Compte client avec historique, points sur le ticket, anniversaire', 'Vente à distance par WhatsApp ou application, liée au même compte'] },
      { label: 'Marque lancée depuis la France', cells: ['Programme écrit avant l’ouverture, comptes à votre nom, tableau de bord à distance', 'Cadeau offert par un proche en France, extension aux sites suivants, franchise'] },
    ], caption: 'Figure 5 · Le même socle, caisse, règles, relance, sert tous les profils ; ce qui change, c’est le premier geste : le numéro à la caisse pour le café, la récompense en heures creuses pour le fast-food, la précommande de fêtes pour la pâtisserie, la cagnotte en dinars pour le magasin. La marque lancée depuis la France écrit son programme avant d’ouvrir, parce qu’il est plus dur de l’ajouter après.', alt: 'Matrice de six profils : chaîne de cafés, fast-food ou franchise, boulangerie-pâtisserie, supérette ou chaîne de magasins, parfumerie et prêt-à-porter, marque lancée depuis la France ; avec ce qu’il faut d’abord et ce qui vient ensuite.' },
    calendrier: { title: 'Le calendrier 2027 d’une enseigne qui lance son programme, en mois', unit: 'mois', items: [
      { label: 'Règles écrites, caisse équipée, pilote sur un site', note: 'janvier : points, récompenses, garde-fous, caissiers formés', from: 0, to: 1 },
      { label: 'Ramadan : identification, offres du soir', note: 'février et mars : horaires du soir, premiers milliers de clients connus', from: 1, to: 3 },
      { label: 'Relance et pass wallet', note: 'avril et mai : dormants à 21 jours, premières campagnes mesurées', from: 3, to: 5, accent: true },
      { label: 'Été : tous les sites, cadeau depuis la France', note: 'juin à août : affluence, diaspora, règles identiques partout', from: 5, to: 8 },
      { label: 'Rentrée : segments, tableau de bord par caissier', note: 'septembre et octobre : gros paniers, nouveaux, coût des récompenses', from: 8, to: 10 },
      { label: 'Bilan, franchise, 2028', note: 'novembre et décembre : fréquence avant et après, sites suivants', from: 10, to: 12 },
    ], caption: 'Figure 6 · Mois 0 = janvier 2027. Le ramadan commence vers le 8 février 2027 : un café ou un fast-food y change ses horaires et y voit ses plus grosses soirées ; un programme en place avant, même sur un seul site, y gagne ses premiers milliers de clients connus. La relance ne se lance qu’au mois 3, quand il y a des dormants à relancer.', alt: 'Calendrier en mois : règles et caisse en janvier ; ramadan en février et mars ; relance et pass wallet en avril et mai, mis en avant ; été de juin à août avec tous les sites et le cadeau depuis la France ; rentrée en septembre et octobre ; bilan et franchise en novembre et décembre.' },
  },
  en: {
    cover: { eyebrow: 'Loyalty · Retail · 2027', title: ['He comes back three', 'times a week.', 'Who knows it?'], subtitle: 'Five-second identification at the till, points tied to the receipt, a reward in product, a win-back message for those who stopped coming, a dashboard per outlet: the loyalty programme of a café, a fast-food or a chain of shops in Algeria in 2027.', left: { label: 'The owner', sub: 'five outlets, two thousand receipts a day, not one name' }, right: { label: 'The customer', sub: 'a coffee every morning for three years, unknown to the till' }, note: 'Algeria · loyalty programme · 2027' },
    moments: { title: 'A regular customer, from the till to his return, in six moments', items: [
      { n: '01', label: 'Identification at the till', sub: 'Phone number or QR, five seconds, without slowing the queue.' },
      { n: '02', label: 'Points tied to the receipt', sub: 'One receipt = one credit, on the real till amount.' },
      { n: '03', label: 'Reward in product', sub: 'The tenth coffee, the menu, the pastry; written rule, expiry date.' },
      { n: '04', label: 'Card in the phone', sub: 'App or wallet pass, visible balance, offers.' },
      { n: '05', label: 'Win-back of the one who stopped', sub: 'Twenty-one days without a visit: message, dated offer, measured return.', accent: true },
      { n: '06', label: 'Dashboard', sub: 'Frequency, dormant customers, basket, per outlet, per cashier.' },
    ], caption: 'Figure 1 · Moment 01 decides everything: if identification takes more than five seconds or slows the queue, cashiers stop offering it by the second week. Moment 05 is the one that pays: a customer who stopped coming does not come back on his own, and nobody notices without the list of dormant customers.', alt: 'Six moments: identification at the till by phone number or QR in five seconds; points tied to the till receipt; reward in product with a written rule; card in the phone, app or wallet pass; win-back of the customer who stopped after twenty-one days, highlighted; dashboard per outlet and per cashier.' },
    couches: { title: 'The loyalty platform, in five layers', layers: [
      { label: 'Till', items: [
        { name: 'Identification and credit', sub: 'number or QR entered in the till, points computed on the receipt, offline when the network drops' },
      ] },
      { label: 'Rules', items: [
        { name: 'Points, rewards, guardrails', sub: 'one receipt = one credit, daily cap, a void removes the points, reward limited to off-peak hours' },
      ] },
      { label: 'Customer', items: [
        { name: 'App or wallet pass, SMS', sub: 'balance, history, offers, a gift from a relative; no complicated account' },
      ] },
      { label: 'Win-back', items: [
        { name: 'Segments and measured campaigns', sub: 'dormant at 21 days, big baskets, newcomers: dated message, return counted over fourteen days', accent: true },
      ] },
      { label: 'Management', items: [{ name: 'Dashboard', sub: 'identification rate, frequency, dormant customers, reward cost, per outlet and per cashier' }] },
    ], caption: 'Figure 2 · The stamp card identifies the customer without learning anything about him; the platform learns his frequency and acts when it drops. The till layer is built first, because without fast identification there is no data; the win-back layer is the one that pays, because it brings back the customers nobody saw leaving.', alt: 'Five layers: till with identification and offline point credit; rules with points, rewards and anti-fraud guardrails; customer with app, wallet pass and SMS; win-back with segments and measured campaigns, highlighted; management with a dashboard per outlet and per cashier.' },
    exemple: { title: 'Five cafés, two thousand receipts a day, a 350-dinar basket: the example', items: [
      { value: '5 s', label: 'to identify the customer at the till, phone number or QR, without slowing the queue; beyond that, cashiers give up' },
      { value: '35%', label: 'of receipts identified after three months, i.e. 700 visits a day and about 4,000 known customers, assumption' },
      { value: '≈ 1.7%', label: 'of identified revenue as reward cost: a 60 DA coffee given every ten 350 DA receipts, assumption' },
      { value: '+700k DA', label: 'a month if the 4,000 known customers make half a visit more per month at 350 DA, assumption', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement. Identification rate, basket and frequency are to be replaced by yours; the extra half-visit a month is the target the win-back and the rewards must reach for the programme to be worth what it costs. Without the dashboard that measures frequency before and after, nobody will ever know whether it got there.', alt: 'Worked example: five seconds to identify the customer at the till; 35% of receipts identified after three months, about 4,000 known customers; about 1.7% of identified revenue as reward cost; plus 700,000 dinars a month if known customers make half a visit more per month, all assumptions.' },
    fuites: { title: 'Six silent leaks of a loyalty programme, six guardrails', columns: ['How it happens', 'What the platform does'], rows: [
      { label: 'The cashier credits his own number', cells: ['Every customer without a card becomes a receipt credited to the cashier’s cousin; ten free coffees a week', 'Points tied to the receipt and to the cashier, cap per number and per day, top numbers shown to the manager'] },
      { label: 'The receipt scanned twice', cells: ['The receipt QR photographed and shared; the same purchase credited three times', 'One unique QR per receipt, valid once, twenty-four hours, for the printed amount'] },
      { label: 'Points without a purchase', cells: ['Receipt voided after the credit; a “free” sale credited anyway', 'The void removes the points; zero-amount sales do not credit'] },
      { label: 'The reward at peak hour', cells: ['The free menu claimed at noon, when the queue is longest and the margin most useful', 'Reward limited to off-peak hours or chosen products, written rule, visible in the app'] },
      { label: 'The message to everyone', cells: ['Two SMS a week to 4,000 numbers; opt-outs, cost, and nobody reads any more', 'Segments: dormant, big baskets, newcomers; one message per segment, return measured before the next'] },
      { label: 'The file at the vendor’s', cells: ['Three years of customers in a tool nothing can be exported from; changing tools means starting from zero', 'Customers, points and history in the brand’s name, exportable, server and accounts in its name'] },
    ], caption: 'Figure 4 · The first four leaks are fixed by rules in the till, not by surveillance: one receipt, one credit, once, for the real amount, with a cap. The last two decide whether the programme still exists in three years: messages customers read, and a file that belongs to the brand.', alt: 'Matrix of six leaks: cashier crediting his own number; receipt scanned twice; points without purchase; reward at peak hour; message sent to everyone; customer file at the vendor’s; with what the platform does for each.' },
    modeles: { title: 'Who you are, what to build', columns: ['What comes first', 'What comes next'], rows: [
      { label: 'Chain of cafés or tea rooms', cells: ['Identification by number in the till, tenth coffee free, list of dormant customers', 'Wallet pass, order ahead, campaigns per outlet'] },
      { label: 'Fast-food, pizzeria, chicken: brand or franchise', cells: ['Points on the receipt, off-peak reward, identical rules in every site', 'Branded app, order and pick-up, central file for franchisees'] },
      { label: 'Bakery-pastry with several outlets', cells: ['Card in the wallet, points on festive orders, reminder before Eid', 'Cake pre-orders, deposit, win-back of last year’s orders'] },
      { label: 'Minimarket or chain of shops', cells: ['Number at the till, balance in dinars, offers per aisle', 'Dashboard per shop, average basket per segment, targeted promotions'] },
      { label: 'Perfumery, clothing, cosmetics', cells: ['Customer account with history, points on the receipt, birthday', 'Remote selling by WhatsApp or app, tied to the same account'] },
      { label: 'Brand launched from France', cells: ['Programme written before opening, accounts in your name, remote dashboard', 'Gift from a relative in France, extension to the next sites, franchise'] },
    ], caption: 'Figure 5 · The same base, till, rules, win-back, serves every profile; what changes is the first move: the number at the till for the café, the off-peak reward for the fast-food, festive pre-orders for the pastry shop, the dinar balance for the shop. The brand launched from France writes its programme before opening, because it is harder to add afterwards.', alt: 'Matrix of six profiles: chain of cafés, fast-food or franchise, bakery-pastry, minimarket or chain of shops, perfumery and clothing, brand launched from France; with what comes first and what comes next.' },
    calendrier: { title: 'The 2027 calendar of a brand launching its programme, in months', unit: 'months', items: [
      { label: 'Rules written, till equipped, pilot on one site', note: 'January: points, rewards, guardrails, cashiers trained', from: 0, to: 1 },
      { label: 'Ramadan: identification, evening offers', note: 'February and March: evening hours, first thousands of known customers', from: 1, to: 3 },
      { label: 'Win-back and wallet pass', note: 'April and May: dormant at 21 days, first measured campaigns', from: 3, to: 5, accent: true },
      { label: 'Summer: every site, gift from France', note: 'June to August: crowds, diaspora, identical rules everywhere', from: 5, to: 8 },
      { label: 'Back to school: segments, dashboard per cashier', note: 'September and October: big baskets, newcomers, reward cost', from: 8, to: 10 },
      { label: 'Review, franchise, 2028', note: 'November and December: frequency before and after, next sites', from: 10, to: 12 },
    ], caption: 'Figure 6 · Month 0 = January 2027. Ramadan starts around 8 February 2027: a café or a fast-food changes its hours and sees its biggest evenings; a programme in place before, even on a single site, wins its first thousands of known customers there. The win-back only starts in month 3, when there are dormant customers to win back.', alt: 'Calendar in months: rules and till in January; Ramadan in February and March; win-back and wallet pass in April and May, highlighted; summer from June to August with every site and the gift from France; back to school in September and October; review and franchise in November and December.' },
  },
  ar: {
    cover: { eyebrow: 'الولاء · التجارة · 2027', title: ['يعود ثلاث مرات', 'في الأسبوع.', 'من يعرف ذلك؟'], subtitle: 'تعريف في خمس ثوانٍ عند الصندوق، نقاط مرتبطة بالتذكرة، مكافأة بالمنتج، رسالة استرجاع لمن توقّف عن المجيء، لوحة متابعة لكل نقطة بيع: برنامج ولاء المقهى والوجبات السريعة وسلسلة المتاجر في الجزائر سنة 2027.', left: { label: 'المسيّر', sub: 'خمس نقاط بيع، ألفا تذكرة في اليوم، ولا اسم واحد' }, right: { label: 'الزبون', sub: 'قهوة كل صباح منذ ثلاث سنوات، مجهول لدى الصندوق' }, note: 'الجزائر · برنامج الولاء · 2027' },
    moments: { title: 'زبون دائم، من الصندوق إلى عودته، في ست لحظات', items: [
      { n: '01', label: 'التعريف عند الصندوق', sub: 'رقم الهاتف أو رمز QR، خمس ثوانٍ، دون إبطاء الطابور.' },
      { n: '02', label: 'نقاط مرتبطة بالتذكرة', sub: 'تذكرة واحدة = رصيد واحد، على المبلغ الحقيقي للصندوق.' },
      { n: '03', label: 'مكافأة بالمنتج', sub: 'القهوة العاشرة، الوجبة، الحلوى؛ قاعدة مكتوبة وتاريخ انتهاء.' },
      { n: '04', label: 'البطاقة في الهاتف', sub: 'تطبيق أو بطاقة في المحفظة، رصيد ظاهر، عروض.' },
      { n: '05', label: 'استرجاع من توقّف عن المجيء', sub: 'واحد وعشرون يوماً بلا زيارة: رسالة، عرض مؤرَّخ، عودة مقاسة.', accent: true },
      { n: '06', label: 'لوحة المتابعة', sub: 'التكرار، الزبائن الخاملون، السلة، لكل نقطة بيع ولكل أمين صندوق.' },
    ], caption: 'الشكل 1 · اللحظة 01 تحسم كل شيء: إذا استغرق التعريف أكثر من خمس ثوانٍ أو أبطأ الطابور، يتوقف أمناء الصندوق عن اقتراحه منذ الأسبوع الثاني. اللحظة 05 هي التي تربح: الزبون الذي توقّف عن المجيء لا يعود وحده، ولا أحد يلاحظ ذلك دون قائمة الخاملين.', alt: 'ست لحظات: التعريف عند الصندوق برقم الهاتف أو رمز QR في خمس ثوانٍ؛ نقاط مرتبطة بتذكرة الصندوق؛ مكافأة بالمنتج بقاعدة مكتوبة؛ البطاقة في الهاتف تطبيقاً أو بطاقة محفظة؛ استرجاع الزبون الذي توقّف بعد واحد وعشرين يوماً، مميّزة؛ لوحة متابعة لكل نقطة بيع ولكل أمين صندوق.' },
    couches: { title: 'منصة الولاء في خمس طبقات', layers: [
      { label: 'الصندوق', items: [
        { name: 'التعريف والرصيد', sub: 'الرقم أو رمز QR يُدخَل في الصندوق، النقاط تُحسب على التذكرة، يعمل دون اتصال عند انقطاع الشبكة' },
      ] },
      { label: 'القواعد', items: [
        { name: 'النقاط والمكافآت والضوابط', sub: 'تذكرة واحدة = رصيد واحد، سقف يومي، الإلغاء يسحب النقاط، المكافأة محصورة في ساعات الهدوء' },
      ] },
      { label: 'الزبون', items: [
        { name: 'تطبيق أو بطاقة محفظة، رسائل SMS', sub: 'الرصيد، السجل، العروض، هدية من قريب؛ دون حساب معقّد' },
      ] },
      { label: 'الاسترجاع', items: [
        { name: 'شرائح وحملات مقاسة', sub: 'الخاملون بعد 21 يوماً، السلال الكبيرة، الجدد: رسالة مؤرَّخة، عودة تُحسب على أربعة عشر يوماً', accent: true },
      ] },
      { label: 'الإدارة', items: [{ name: 'لوحة المتابعة', sub: 'نسبة التعريف، التكرار، الخاملون، كلفة المكافآت، لكل موقع ولكل أمين صندوق' }] },
    ], caption: 'الشكل 2 · بطاقة الأختام تعرّف الزبون دون أن تتعلّم شيئاً عنه؛ المنصة تتعلّم تكراره وتتصرّف حين ينخفض. طبقة الصندوق تُبنى أولاً، لأنه دون تعريف سريع لا توجد بيانات؛ وطبقة الاسترجاع هي التي تربح، لأنها تعيد الزبائن الذين لم يرَ أحد رحيلهم.', alt: 'خمس طبقات: الصندوق مع التعريف ورصيد النقاط دون اتصال؛ القواعد مع النقاط والمكافآت وضوابط مكافحة الغش؛ الزبون مع التطبيق وبطاقة المحفظة ورسائل SMS؛ الاسترجاع مع الشرائح والحملات المقاسة، مميّزة؛ الإدارة مع لوحة متابعة لكل موقع ولكل أمين صندوق.' },
    exemple: { title: 'خمسة مقاهٍ، ألفا تذكرة في اليوم، سلة بـ350 ديناراً: المثال', items: [
      { value: '5 ثوانٍ', label: 'لتعريف الزبون عند الصندوق، رقم هاتف أو رمز QR، دون إبطاء الطابور؛ وأكثر من ذلك يتخلّى أمناء الصندوق' },
      { value: '35 %', label: 'من التذاكر معرَّفة بعد ثلاثة أشهر، أي 700 زيارة في اليوم ونحو 4,000 زبون معروف، فرضية' },
      { value: '≈ 1.7 %', label: 'من رقم الأعمال المعرَّف كلفةَ مكافأة: قهوة بـ60 دج تُهدى كل عشر تذاكر بـ350 دج، فرضية' },
      { value: '+700 ألف دج', label: 'في الشهر إذا قام 4,000 زبون معروف بنصف زيارة إضافية شهرياً بـ350 دج، فرضية', accent: true },
    ], caption: 'الشكل 3 · حساب على فرضيات، لا قياس. نسبة التعريف والسلة والتكرار تُستبدل بأرقامكم؛ ونصف الزيارة الإضافية في الشهر هو الهدف الذي يجب أن يبلغه الاسترجاع والمكافآت حتى يستحق البرنامج كلفته. ودون لوحة المتابعة التي تقيس التكرار قبل وبعد، لن يعرف أحد أبداً إن كان قد بلغه.', alt: 'مثال محسوب: خمس ثوانٍ لتعريف الزبون عند الصندوق؛ 35 % من التذاكر معرَّفة بعد ثلاثة أشهر، نحو 4,000 زبون معروف؛ نحو 1.7 % من رقم الأعمال المعرَّف كلفة مكافأة؛ زائد 700,000 دينار في الشهر إذا قام الزبائن المعروفون بنصف زيارة إضافية شهرياً، كلها فرضيات.' },
    fuites: { title: 'ست تسرّبات صامتة في برنامج الولاء، ستة ضوابط', columns: ['كيف يحدث', 'ما تفعله المنصة'], rows: [
      { label: 'أمين الصندوق يضيف الرصيد إلى رقمه', cells: ['كل زبون بلا بطاقة يصير تذكرة تُضاف إلى ابن عم أمين الصندوق؛ عشر قهوات مجانية في الأسبوع', 'نقاط مرتبطة بالتذكرة وبأمين الصندوق، سقف لكل رقم ولكل يوم، الأرقام الأعلى تُعرض على المسيّر'] },
      { label: 'التذكرة تُمسح مرتين', cells: ['رمز QR للتذكرة يُصوَّر ويُتداول؛ الشراء نفسه يُحتسب ثلاث مرات', 'رمز QR فريد لكل تذكرة، صالح مرة واحدة، أربعاً وعشرين ساعة، للمبلغ المطبوع'] },
      { label: 'نقاط بلا شراء', cells: ['تذكرة تُلغى بعد الرصيد؛ بيع «مجاني» يُحتسب رغم ذلك', 'الإلغاء يسحب النقاط؛ المبيعات بقيمة صفر لا تُحتسب'] },
      { label: 'المكافأة في ساعة الذروة', cells: ['الوجبة المجانية تُطلب في الظهيرة، حين يكون الطابور أطول والهامش أنفع', 'مكافأة محصورة في ساعات الهدوء أو في منتجات مختارة، قاعدة مكتوبة، ظاهرة في التطبيق'] },
      { label: 'الرسالة إلى الجميع', cells: ['رسالتا SMS في الأسبوع إلى 4,000 رقم؛ إلغاء اشتراك، كلفة، ولا أحد يقرأ بعدها', 'شرائح: الخاملون، السلال الكبيرة، الجدد؛ رسالة واحدة لكل شريحة، والعودة تُقاس قبل التالية'] },
      { label: 'الملف عند المزوّد', cells: ['ثلاث سنوات من الزبائن في أداة لا يمكن تصدير شيء منها؛ تغيير الأداة يعني البدء من الصفر', 'الزبائن والنقاط والسجل باسم العلامة، قابلة للتصدير، الخادم والحسابات باسمها'] },
    ], caption: 'الشكل 4 · التسرّبات الأربعة الأولى تُحلّ بقواعد في الصندوق لا بالمراقبة: تذكرة واحدة، رصيد واحد، مرة واحدة، بالمبلغ الحقيقي، مع سقف. والتسرّبان الأخيران يقرّران إن كان البرنامج سيظل موجوداً بعد ثلاث سنوات: رسائل يقرؤها الزبائن، وملف يملكه صاحب العلامة.', alt: 'مصفوفة ست تسرّبات: أمين صندوق يضيف الرصيد إلى رقمه؛ تذكرة تُمسح مرتين؛ نقاط بلا شراء؛ مكافأة في ساعة الذروة؛ رسالة تُرسل إلى الجميع؛ ملف الزبائن عند المزوّد؛ مع ما تفعله المنصة لكل منها.' },
    modeles: { title: 'من أنتم، وما الذي يجب بناؤه', columns: ['ما يلزم أولاً', 'ما يأتي بعده'], rows: [
      { label: 'سلسلة مقاهٍ أو صالونات شاي', cells: ['التعريف بالرقم في الصندوق، القهوة العاشرة مجاناً، قائمة الخاملين', 'بطاقة المحفظة، الطلب المسبق، حملات لكل نقطة بيع'] },
      { label: 'وجبات سريعة، بيتزا، دجاج: علامة أو امتياز', cells: ['نقاط على التذكرة، مكافأة في ساعات الهدوء، قواعد واحدة في كل المواقع', 'تطبيق بالعلامة، طلب واستلام، ملف مركزي لأصحاب الامتياز'] },
      { label: 'مخبزة وحلويات بعدة نقاط بيع', cells: ['بطاقة في المحفظة، نقاط على طلبات الأعياد، تذكير قبل العيد', 'طلب مسبق للكعك، عربون، استرجاع طلبات العام الماضي'] },
      { label: 'سوبيرات أو سلسلة متاجر', cells: ['الرقم عند الصندوق، رصيد بالدينار، عروض لكل قسم', 'لوحة متابعة لكل متجر، متوسط السلة لكل شريحة، ترقيات موجَّهة'] },
      { label: 'عطور، ملابس جاهزة، مستحضرات تجميل', cells: ['حساب زبون بسجل، نقاط على التذكرة، عيد الميلاد', 'بيع عن بُعد عبر واتساب أو التطبيق، مرتبط بالحساب نفسه'] },
      { label: 'علامة تُطلق من فرنسا', cells: ['برنامج مكتوب قبل الافتتاح، حسابات باسمكم، لوحة متابعة عن بُعد', 'هدية من قريب في فرنسا، توسّع إلى المواقع التالية، امتياز'] },
    ], caption: 'الشكل 5 · الأساس نفسه، الصندوق والقواعد والاسترجاع، يخدم كل الأنماط؛ وما يتغيّر هو الخطوة الأولى: الرقم عند الصندوق للمقهى، المكافأة في ساعات الهدوء للوجبات السريعة، الطلب المسبق للأعياد لمحل الحلويات، الرصيد بالدينار للمتجر. والعلامة التي تُطلق من فرنسا تكتب برنامجها قبل الافتتاح، لأن إضافته لاحقاً أصعب.', alt: 'مصفوفة ستة أنماط: سلسلة مقاهٍ، وجبات سريعة أو امتياز، مخبزة وحلويات، سوبيرات أو سلسلة متاجر، عطور وملابس جاهزة، علامة تُطلق من فرنسا؛ مع ما يلزم أولاً وما يأتي بعده.' },
    calendrier: { title: 'تقويم 2027 لعلامة تطلق برنامجها، بالأشهر', unit: 'شهر', items: [
      { label: 'قواعد مكتوبة، صندوق مجهَّز، تجربة في موقع واحد', note: 'جانفي: نقاط، مكافآت، ضوابط، تدريب أمناء الصندوق', from: 0, to: 1 },
      { label: 'رمضان: التعريف، عروض المساء', note: 'فيفري ومارس: أوقات المساء، أول آلاف الزبائن المعروفين', from: 1, to: 3 },
      { label: 'الاسترجاع وبطاقة المحفظة', note: 'أفريل وماي: الخاملون بعد 21 يوماً، أول حملات مقاسة', from: 3, to: 5, accent: true },
      { label: 'الصيف: كل المواقع، هدية من فرنسا', note: 'جوان إلى أوت: الازدحام، الجالية، قواعد واحدة في كل مكان', from: 5, to: 8 },
      { label: 'الدخول: شرائح، لوحة متابعة لكل أمين صندوق', note: 'سبتمبر وأكتوبر: السلال الكبيرة، الجدد، كلفة المكافآت', from: 8, to: 10 },
      { label: 'حصيلة، امتياز، 2028', note: 'نوفمبر وديسمبر: التكرار قبل وبعد، المواقع التالية', from: 10, to: 12 },
    ], caption: 'الشكل 6 · الشهر 0 = جانفي 2027. يبدأ رمضان نحو 8 فيفري 2027: المقهى أو محل الوجبات السريعة يغيّر فيه أوقاته ويشهد أكبر أمسياته؛ والبرنامج الجاهز قبله، ولو في موقع واحد، يكسب فيه أول آلاف الزبائن المعروفين. ولا يبدأ الاسترجاع إلا في الشهر 3، حين يوجد خاملون يُسترجعون.', alt: 'تقويم بالأشهر: القواعد والصندوق في جانفي؛ رمضان في فيفري ومارس؛ الاسترجاع وبطاقة المحفظة في أفريل وماي، مميّزة؛ الصيف من جوان إلى أوت مع كل المواقع والهدية من فرنسا؛ الدخول في سبتمبر وأكتوبر؛ الحصيلة والامتياز في نوفمبر وديسمبر.' },
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
      fuites: { svg: matrix({ title: t.fuites.title, columns: t.fuites.columns, rows: t.fuites.rows, rtl }), caption: t.fuites.caption, alt: t.fuites.alt },
      modeles: { svg: matrix({ title: t.modeles.title, columns: t.modeles.columns, rows: t.modeles.rows, rtl }), caption: t.modeles.caption, alt: t.modeles.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
