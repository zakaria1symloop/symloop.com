import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-gestion-restaurant-algerie-2027-fiches-techniques-cout-matiere-par-plat-stock-decompte-a-la-vente-ecart-theorique-reel-salle-cuisine.mjs';

const SLUG = 'logiciel-gestion-restaurant-algerie-2027-fiches-techniques-cout-matiere-par-plat-stock-decompte-a-la-vente-ecart-theorique-reel-salle-cuisine';
const FIGURES = ['couches', 'plats', 'ecarts', 'vente', 'calendrier', 'types'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  cout: '/blog/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier/',
  borne: '/blog/borne-de-commande-restaurant-algerie-2027-menu-qr-code-commande-a-emporter-file-d-attente-paiement-especes-ecran-cuisine-numero-d-appel/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  caisse: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  fidelite: '/blog/programme-de-fidelite-algerie-2027-cafe-fast-food-chaine-application-points-caisse-relance/',
  franchise: '/blog/comment-creer-une-franchise-en-algerie-2027-logiciel-de-reseau-catalogue-central-caisse-commune-commandes-a-la-centrale-redevances-audits/',
};

const CONTENT = {
  fr: {
    kind: 'Restaurant · Algérie · 2027', title: "Logiciel de gestion de restaurant en Algérie (2027) : la salle est pleine et il ne reste rien à la fin du mois, la viande part plus vite que les ventes, personne ne sait ce que coûte un plat ; fiches techniques, coût matière, stock décompté à la vente, salle et cuisine, et ce qu'on met en place",
    dek: "« J'ai un restaurant de soixante couverts. La salle est pleine le soir et pourtant, à la fin du mois, il ne reste presque rien. Je ne sais pas ce que me coûte chaque plat, la viande part plus vite que les ventes, les bons se perdent entre la salle et la cuisine, et je fais les comptes sur un cahier. Quel logiciel pour gérer un restaurant ? » Un restaurant vend des recettes : tant que chaque plat n'a pas sa fiche et que le stock ne suit pas les ventes, le chiffre d'affaires ne dit rien de ce qui reste.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de gestion de restaurant', 'Fiches techniques', 'Coût matière et marge par plat', 'Stock décompté à la vente', 'Écart théorique et réel', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de gestion de restaurant tient quatre choses. **La fiche technique** de chaque plat : ses ingrédients, leurs quantités, son coût, donc sa marge. **La commande** : prise en salle, envoyée en cuisine, facturée sans ressaisie. **Le stock** : décompté à chaque vente selon la fiche, puis comparé à l'inventaire compté. **Les chiffres du service** : ventes par plat, coût matière, marge, caisse. Dans l'exemple de cette page, le plat le plus vendu rapporte 340 dinars quand la moyenne est de 472, et l'écart de stock d'une semaine vaut 34 650 dinars.",
      "Cette page s'adresse à celles et ceux qui dirigent un restaurant, une enseigne de restauration rapide, un café ou une cuisine de livraison, et aux fondateurs de la diaspora qui ouvrent un établissement en Algérie. Les définitions viennent de sources publiques : gestion de restaurant, ingénierie des menus, marge sur coût variable, démarque, inventaire, pertes alimentaires. La carte de douze plats, ses ventes, ses marges, les quantités et les prix d'achat sont un exemple construit, avec des prix fictifs. La page ne traite ni des règles d'hygiène et des agréments, ni de la fiscalité et de la paie, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans un logiciel de restaurant", body: [
        "La figure empile cinq couches ; la première rend possibles les quatre autres.",
      ], visual: 'couches', after: [
        "**Le métier.** La gestion d'un restaurant consiste à diriger et administrer l'exploitation d'un établissement de restauration : la salle, la cuisine, les achats et l'argent. **La fiche technique.** C'est la couche accentuée. Pour chaque plat : les ingrédients, la quantité de chacun, pesée, et leur prix d'achat du moment. Elle donne le coût du plat, donc sa marge, et dit ce que chaque vente doit retirer du stock. La méthode est celle d'une nomenclature de fabrication, voir [le coût d'un produit fini](" + L.cout + ").",
        "**Les commandes.** Prises à table ou au comptoir, elles partent en cuisine par poste et reviennent en addition sans être recopiées ; les modes de commande, borne, menu par code, à emporter, sont décrits dans [la borne de commande](" + L.borne + "). **Le stock.** Les achats entrent, les ventes sortent selon les fiches, et un inventaire compté dit ce qui reste vraiment, voir [le journal des mouvements de stock](" + L.stock + "). **La caisse.** Une session par service, des annulations tracées, voir [les sessions de caisse](" + L.caisse + "). **Les chiffres.** Par plat, par heure et par service, sur [un tableau de bord](" + L.dashboard + ").",
      ] },
      { heading: "Les plats qui remplissent la salle, et ceux qui paient", body: [
        "La figure place douze plats selon leurs ventes et leur marge.",
      ], visual: 'plats', after: [
        "**L'ingénierie des menus.** C'est la conception d'une carte pour maximiser le profit du restaurant. Elle classe chaque plat selon deux mesures : sa popularité, c'est-à-dire la fréquence à laquelle il est commandé par rapport aux autres, et sa marge, le prix de vente moins le coût des ingrédients. **Dans l'exemple.** Douze plats, 5 700 ventes dans le mois, une marge moyenne de 472 dinars par plat vendu. Les deux moyennes découpent la carte en quatre groupes.",
        "**Les vedettes.** Populaires et à forte marge : on n'y touche pas, ni recette ni portion, et on les met en avant. **Les chevaux de trait.** Populaires, à faible marge : on les garde, et on les rend plus rentables par de légers ajustements. Dans l'exemple, ils sont trois, font 44 % des ventes et 28 % de la marge ; le poulet rôti avec frites, 910 ventes, rapporte 340 dinars par plat. **Les énigmes.** Peu commandées, à forte marge : meilleure description, meilleure place sur la carte, promotion. Le poisson grillé rapporte 850 dinars et se vend 150 fois. **Les poids morts.** Peu commandés, à faible marge : candidats au retrait, ce qui simplifie aussi la cuisine et le stock. **Ce que fait le logiciel.** Il recalcule la marge quand le prix d'un ingrédient change, et redessine la carte chaque mois.",
      ] },
      { heading: "Ce qui aurait dû sortir du stock, et ce qui est sorti", body: [
        "La figure compare, pour six ingrédients, la consommation théorique et la consommation réelle d'une semaine.",
      ], visual: 'ecarts', after: [
        "**Les deux consommations.** La consommation théorique est ce que les ventes auraient dû consommer, d'après les fiches techniques des plats vendus. La consommation réelle se compte : le stock de départ, plus les achats, moins le stock compté à la fin. L'inventaire est la vérification physique des quantités ; la démarque, en comptabilité, désigne le fait d'avoir moins en stock que ce que l'état de stock prévoit. **Dans l'exemple.** 86 kg de viande auraient dû sortir, 97 kg sont sortis : 11 kg d'écart, 24 200 dinars au prix d'achat. Sur six ingrédients, la semaine laisse 34 650 dinars d'écart, soit environ 150 000 dinars par mois.",
        "**Où est l'écart.** Pas partout : la viande fait 70 % du total, le fromage vient ensuite, et les boissons, qui se comptent à l'unité, ne bougent presque pas. **D'où il vient.** Des portions plus généreuses que la fiche, des pertes à la découpe et à la cuisson non prévues, des produits jetés, des plats offerts ou sortis sans ticket, des erreurs de réception. Les pertes alimentaires sont la nourriture jetée ou perdue sans être mangée : elles se notent, comme une vente. **Ce que l'on fait.** On pèse les portions des deux ingrédients qui dérivent, on corrige la fiche si elle était fausse, on enregistre les pertes, et on recompte la semaine suivante. **Les achats.** Les quantités à commander suivent la consommation, voir [le réapprovisionnement](" + L.reappro + ").",
      ] },
      { heading: "Ce qu'une vente déclenche", body: [
        "La figure suit une vente en six temps, de la commande aux chiffres du service.",
      ], visual: 'vente', after: [
        "**La commande.** Saisie sur un téléphone ou une tablette, avec la table et les remarques : sans oignon, bien cuit, à emporter. **Le bon en cuisine.** Chaque poste reçoit ce qui le concerne, sur un écran ou une imprimante ; la salle voit quand le plat est prêt. **L'addition.** Elle sort de la commande, par table ou par personne, sans rien recopier.",
        "**Le décompte.** C'est le temps accentué : au moment de la vente, le stock baisse de ce que la fiche prévoit, 220 grammes de viande pour une grillade si c'est ce que dit la fiche. **Sans connexion.** La prise de commande et la caisse continuent quand la connexion tombe, et se synchronisent ensuite. **La fidélité.** La caisse reconnaît la personne et crédite ses points, voir [le programme de fidélité](" + L.fidelite + "). **Les chiffres du service.** À la clôture : ventes par plat, coût matière, marge, caisse comptée.",
      ] },
      { heading: "Huit semaines, en commençant par peser", body: [
        "Huit semaines dans l'exemple ; les fiches se font en cuisine.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : votre carte, vos fournisseurs, vos services, votre cahier et votre caisse actuels. **Les fiches techniques.** C'est le vrai travail : chaque plat est préparé comme d'habitude et pesé, ingrédient par ingrédient. On découvre souvent à ce moment-là que deux personnes en cuisine ne font pas le même plat. **Les prix d'achat.** Ils se mettent à jour à chaque réception : le coût du plat suit.",
        "**Le premier inventaire.** Un comptage complet, un soir, donne le point de départ ; ensuite, un comptage par semaine sur les ingrédients qui pèsent le plus. **La mise en service.** Un service à blanc avec l'équipe, puis un service réel. **Ce que le logiciel ne fait pas.** Il ne cuisine pas, ne remplace pas la personne qui tient la cuisine, et ne décide pas des prix : il montre ce que coûte chaque plat et où part la marchandise. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Du comptoir à plusieurs établissements", body: [
        "La figure donne cinq types d'établissement, et ce que le logiciel apporte à chacun.",
      ], visual: 'types', after: [
        "**Au comptoir.** Tout se joue à l'heure de pointe : la commande doit se saisir en quelques gestes. **À table.** Le plan de salle, les commandes par table, l'addition partagée. **Le café.** Beaucoup de petits tickets : la caisse doit être rapide, et le stock se compte à l'unité.",
        "**La livraison.** Les commandes arrivent du comptoir, du téléphone et des applications : elles se réunissent sur un seul écran en cuisine. **Plusieurs établissements.** Les fiches techniques sont communes, et les coûts matière se comparent d'un point à l'autre ; pour une enseigne qui s'étend, voir [créer une franchise](" + L.franchise + "). **Prêt à l'emploi ou sur mesure.** Des logiciels de caisse pour restaurant existent, et conviennent pour encaisser. Le sur-mesure se justifie quand il faut des fiches techniques reliées au stock, des écarts par ingrédient, plusieurs établissements, une application de commande à votre nom, ou un lien avec votre gestion.",
      ], list: [
        "**Ce que vous recevez** : les fiches techniques avec coût et marge par plat ; la prise de commande en salle et les bons en cuisine ; l'addition sans ressaisie ; le stock décompté à la vente ; l'inventaire et les écarts par ingrédient ; la caisse par service ; les chiffres par plat et par heure.",
        "**Ce que le restaurant évite** : la carte dont personne ne connaît les marges, la viande qui part plus vite que les ventes, les bons perdus entre la salle et la cuisine, les plats sortis sans ticket, les comptes faits de mémoire.",
        "**Ce qui est mesuré** : ventes par plat et par heure ; coût matière ; marge par plat ; écart entre consommation théorique et réelle, par ingrédient ; pertes enregistrées ; ticket moyen ; temps de sortie des plats.",
        "**Ce que fait Symloop** : le cadrage, la mise en place des fiches techniques, la prise de commande et les écrans de cuisine, le stock et les achats, les écarts, la caisse, le tableau de bord, en arabe et en français.",
      ], faq: [
        { q: "Quel logiciel pour gérer un restaurant ?", a: "Un logiciel qui relie quatre choses : les fiches techniques des plats, la prise de commande entre la salle et la cuisine, le stock décompté à chaque vente, et la caisse du service. Une caisse seule encaisse ; elle ne dit pas ce qui reste." },
        { q: "Comment calculer le prix de revient d'un plat ?", a: "En additionnant le coût de chaque ingrédient de la fiche technique : la quantité utilisée multipliée par son prix d'achat. La marge du plat est son prix de vente moins ce coût." },
        { q: "Comment savoir quels plats garder sur la carte ?", a: "En plaçant chaque plat selon ses ventes et sa marge. Les plats populaires à forte marge se mettent en avant ; les populaires à faible marge se retravaillent ; les peu commandés à faible marge sont candidats au retrait." },
        { q: "Pourquoi le restaurant est-il plein alors qu'il ne reste rien ?", a: "Souvent pour deux raisons que le chiffre d'affaires cache : les plats les plus vendus sont ceux qui rapportent le moins, et une partie de la marchandise sort du stock sans être vendue." },
        { q: "Comment suivre le stock d'un restaurant ?", a: "Chaque vente retire du stock ce que la fiche du plat prévoit ; un inventaire compté donne la consommation réelle ; la différence entre les deux est l'écart, ingrédient par ingrédient." },
        { q: "D'où viennent les écarts de stock ?", a: "Des portions plus généreuses que la fiche, des pertes non prévues, des produits jetés, des plats sortis sans ticket, des erreurs de réception. L'écart dit où regarder, pas qui accuser." },
        { q: "Faut-il des tablettes pour prendre les commandes ?", a: "Un téléphone suffit. Ce qui compte, c'est que la commande parte en cuisine et revienne en addition sans être recopiée." },
        { q: "Le logiciel fonctionne-t-il sans Internet ?", a: "Oui pour le service : la prise de commande et la caisse continuent hors connexion et se synchronisent ensuite." },
        { q: "Combien de temps pour faire les fiches techniques ?", a: "C'est le plus long : chaque plat est préparé et pesé. Dans l'exemple, trois semaines pour une carte complète, en commençant par les plats les plus vendus." },
        { q: "Le logiciel convient-il à plusieurs restaurants ?", a: "Oui : les fiches sont communes, chaque établissement a son stock et sa caisse, et les coûts matière se comparent d'un point à l'autre." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le plat qui remplit la salle n'est pas celui qui paie le loyer." },
      { after: 2, text: "L'écart n'est pas partout : il est sur la viande et le fromage. C'est là que l'on pèse." },
    ],
    cta: { eyebrow: "Dites-nous combien de couverts, combien de plats à la carte, et comment vous comptez aujourd'hui : nous commençons par une semaine de cadrage", title: "Salle pleine et rien à la fin du mois, coût des plats inconnu, viande qui part trop vite, bons perdus entre la salle et la cuisine, ou restaurant que vous ouvrez en Algérie depuis la France", body: "Symloop construit l'outil qui correspond à votre établissement : fiches techniques, commandes, stock, écarts, caisse, chiffres du service. Décrivez-nous votre carte, vos services et votre façon de compter actuelle." },
    related: { label: 'À lire aussi', items: [
      { href: L.borne, kind: '2027', name: 'Borne de commande : menu par code, à emporter, écran en cuisine' },
      { href: L.fidelite, kind: '2027', name: 'Programme de fidélité : café, fast-food, chaîne, points à la caisse' },
      { href: L.franchise, kind: '2027', name: 'Créer une franchise : catalogue central, caisse commune, redevances' },
      { href: L.caisse, kind: '2027', name: 'Les sessions de caisse : fond de caisse, comptage, écart, dépôt' },
    ] },
  },
  en: {
    kind: 'Restaurant · Algeria · 2027', title: "Restaurant management software in Algeria (2027): the room is full and nothing is left at month end, meat goes faster than sales, nobody knows what a dish costs; recipe sheets, food cost, stock deducted at each sale, floor and kitchen, and what we put in place",
    dek: "“I have a sixty-seat restaurant. The room is full in the evening and yet, at the end of the month, almost nothing is left. I do not know what each dish costs me, meat goes faster than sales, tickets get lost between the floor and the kitchen, and I do the accounts in a notebook. What software do I need to run a restaurant?” A restaurant sells recipes: as long as each dish has no sheet and stock does not follow sales, turnover says nothing about what is left.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Restaurant management software', 'Recipe sheets', 'Food cost and margin per dish', 'Stock deducted at each sale', 'Theoretical and real gap', 'Algeria 2027'],
    intro: [
      "**Short answer.** Restaurant management software holds four things. **The recipe sheet** of each dish: its ingredients, their quantities, its cost, and so its margin. **The order**: taken on the floor, sent to the kitchen, billed with no retyping. **Stock**: deducted at each sale according to the sheet, then compared with the counted inventory. **The service's figures**: sales per dish, food cost, margin, till. In this page's example, the best-selling dish earns 340 dinars when the average is 472, and one week's stock gap is worth 34,650 dinars.",
      "This page is for those who run a restaurant, a fast-food brand, a café or a delivery kitchen, and for diaspora founders opening an outlet in Algeria. The definitions come from public sources: restaurant management, menu engineering, contribution margin, shrinkage, stock-taking, food loss and waste. The menu of twelve dishes, its sales, its margins, the quantities and the purchase prices are a constructed example, with fictitious prices. The page covers neither hygiene rules and approvals, nor tax and payroll, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside restaurant software", body: [
        "The figure stacks five layers; the first makes the other four possible.",
      ], visual: 'couches', after: [
        "**The trade.** Restaurant management is the profession of leading and administering the operation of a food service establishment: the floor, the kitchen, purchasing and money. **The recipe sheet.** That is the accented layer. For each dish: the ingredients, the quantity of each, weighed, and their current purchase price. It gives the cost of the dish, and so its margin, and says what each sale must take out of stock. The method is that of a bill of materials, see [the cost of a finished product](" + L.cout + ").",
        "**Orders.** Taken at the table or the counter, they go to the kitchen by station and come back as a bill without being copied; the ways of ordering, kiosk, menu by code, takeaway, are described in [the ordering kiosk](" + L.borne + "). **Stock.** Purchases come in, sales go out according to the sheets, and a counted inventory says what is really left, see [the stock movement journal](" + L.stock + "). **The till.** One session per service, voids traced, see [till sessions](" + L.caisse + "). **The figures.** Per dish, per hour and per service, on [a dashboard](" + L.dashboard + ").",
      ] },
      { heading: "The dishes that fill the room, and those that pay", body: [
        "The figure places twelve dishes by their sales and their margin.",
      ], visual: 'plats', after: [
        "**Menu engineering.** It is the design of a menu to maximise restaurant profits. It classifies each dish by two measures: its popularity, how often it is ordered relative to the other items, and its margin, the selling price less the cost of its ingredients. **In the example.** Twelve dishes, 5,700 sales in the month, an average margin of 472 dinars per dish sold. The two averages cut the menu into four groups.",
        "**Stars.** Popular and high-margin: they are left unchanged, recipe and portion, and given a prominent place. **Plowhorses.** Popular, low-margin: they are kept, and made more profitable through modest adjustments. In the example there are three of them, making 44% of sales and 28% of the margin; roast chicken with fries, 910 sales, earns 340 dinars a dish. **Puzzles.** Rarely ordered, high-margin: a better description, a more visible position on the menu, promotion. Grilled fish earns 850 dinars and sells 150 times. **Dogs.** Rarely ordered, low-margin: candidates for removal, which also simplifies the kitchen and the stock. **What the software does.** It recalculates the margin when the price of an ingredient changes, and redraws the map every month.",
      ] },
      { heading: "What should have left the stock, and what did", body: [
        "The figure compares, for six ingredients, theoretical and real consumption over a week.",
      ], visual: 'ecarts', after: [
        "**The two consumptions.** Theoretical consumption is what sales should have consumed, according to the recipe sheets of the dishes sold. Real consumption is counted: opening stock, plus purchases, minus the stock counted at the end. Stock-taking is the physical verification of quantities; shrinkage, in accounting, is having fewer items in stock than the inventory list expects. **In the example.** 86 kg of meat should have gone out, 97 kg did: a gap of 11 kg, 24,200 dinars at purchase price. Over six ingredients, the week leaves a gap of 34,650 dinars, that is about 150,000 dinars a month.",
        "**Where the gap is.** Not everywhere: meat makes 70% of the total, cheese comes next, and drinks, which are counted by the unit, hardly move. **Where it comes from.** Portions more generous than the sheet, trimming and cooking losses not provided for, products thrown away, dishes given away or sent out without a ticket, receiving errors. Food loss and waste is food that is discarded or lost uneaten: it gets recorded, like a sale. **What is done.** The portions of the two drifting ingredients are weighed, the sheet is corrected if it was wrong, losses are recorded, and the count is repeated the following week. **Purchasing.** Quantities to order follow consumption, see [replenishment](" + L.reappro + ").",
      ] },
      { heading: "What a sale sets off", body: [
        "The figure follows a sale in six steps, from the order to the service's figures.",
      ], visual: 'vente', after: [
        "**The order.** Entered on a phone or a tablet, with the table and the remarks: no onion, well done, to take away. **The kitchen ticket.** Each station receives what concerns it, on a screen or a printer; the floor sees when the dish is ready. **The bill.** It comes out of the order, per table or per person, with nothing copied.",
        "**The deduction.** That is the accented step: at the moment of the sale, stock goes down by what the sheet provides for, 220 grams of meat for a grill if that is what the sheet says. **Without a connection.** Order taking and the till carry on when the connection drops, and synchronise afterwards. **Loyalty.** The till recognises the person and credits their points, see [the loyalty programme](" + L.fidelite + "). **The service's figures.** At closing: sales per dish, food cost, margin, till counted.",
      ] },
      { heading: "Eight weeks, starting by weighing", body: [
        "Eight weeks in the example; the sheets are made in the kitchen.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your menu, your suppliers, your services, your current notebook and till. **Recipe sheets.** That is the real work: each dish is prepared as usual and weighed, ingredient by ingredient. It is often then that you discover two people in the kitchen do not make the same dish. **Purchase prices.** They are updated at each receipt: the cost of the dish follows.",
        "**The first inventory.** A full count, one evening, gives the starting point; after that, a weekly count on the ingredients that weigh the most. **Go-live.** A dry-run service with the team, then a real service. **What the software does not do.** It does not cook, does not replace the person who runs the kitchen, and does not decide prices: it shows what each dish costs and where the goods go. **The durations** are those of a constructed example.",
      ] },
      { heading: "From the counter to several outlets", body: [
        "The figure gives five kinds of outlet, and what the software brings to each.",
      ], visual: 'types', after: [
        "**At the counter.** Everything is decided at the peak hour: the order has to be entered in a few taps. **At the table.** The floor plan, orders per table, the split bill. **The café.** Many small tickets: the till has to be fast, and stock is counted by the unit.",
        "**Delivery.** Orders come from the counter, the phone and the applications: they are gathered on a single screen in the kitchen. **Several outlets.** Recipe sheets are shared, and food costs are compared from one outlet to another; for a brand that is expanding, see [creating a franchise](" + L.franchise + "). **Ready-made or custom.** Restaurant till software exists, and suits taking payment. Custom work is justified when you need recipe sheets linked to stock, gaps per ingredient, several outlets, an ordering application under your name, or a link with your management system.",
      ], list: [
        "**What you receive**: recipe sheets with cost and margin per dish; order taking on the floor and kitchen tickets; the bill with no retyping; stock deducted at each sale; the inventory and gaps per ingredient; the till per service; figures per dish and per hour.",
        "**What the restaurant avoids**: the menu whose margins nobody knows, meat going faster than sales, tickets lost between the floor and the kitchen, dishes sent out without a ticket, accounts done from memory.",
        "**What is measured**: sales per dish and per hour; food cost; margin per dish; gap between theoretical and real consumption, per ingredient; recorded losses; average ticket; time for dishes to come out.",
        "**What Symloop does**: scoping, setting up the recipe sheets, order taking and kitchen screens, stock and purchasing, gaps, the till, the dashboard, in Arabic and in French.",
      ], faq: [
        { q: "What software to manage a restaurant?", a: "Software that links four things: the recipe sheets of the dishes, order taking between the floor and the kitchen, stock deducted at each sale, and the service's till. A till alone takes payment; it does not say what is left." },
        { q: "How do you calculate the cost of a dish?", a: "By adding up the cost of each ingredient on the recipe sheet: the quantity used multiplied by its purchase price. The dish's margin is its selling price minus that cost." },
        { q: "How do you know which dishes to keep on the menu?", a: "By placing each dish by its sales and its margin. Popular high-margin dishes are promoted; popular low-margin ones are reworked; rarely ordered low-margin ones are candidates for removal." },
        { q: "Why is the restaurant full when nothing is left?", a: "Often for two reasons turnover hides: the best-selling dishes are the ones that earn the least, and part of the goods leaves the stock without being sold." },
        { q: "How do you track a restaurant's stock?", a: "Each sale takes out of stock what the dish's sheet provides for; a counted inventory gives real consumption; the difference between the two is the gap, ingredient by ingredient." },
        { q: "Where do stock gaps come from?", a: "Portions more generous than the sheet, losses not provided for, products thrown away, dishes sent out without a ticket, receiving errors. The gap says where to look, not whom to blame." },
        { q: "Are tablets needed to take orders?", a: "A phone is enough. What matters is that the order goes to the kitchen and comes back as a bill without being copied." },
        { q: "Does the software work without the internet?", a: "Yes, for the service: order taking and the till carry on offline and synchronise afterwards." },
        { q: "How long does it take to make the recipe sheets?", a: "That is the longest part: each dish is prepared and weighed. In the example, three weeks for a full menu, starting with the best-selling dishes." },
        { q: "Does the software suit several restaurants?", a: "Yes: sheets are shared, each outlet has its own stock and till, and food costs are compared from one outlet to another." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The dish that fills the room is not the one that pays the rent." },
      { after: 2, text: "The gap is not everywhere: it is on meat and cheese. That is where you weigh." },
    ],
    cta: { eyebrow: "Tell us how many seats, how many dishes on the menu, and how you count today: we start with a week of scoping", title: "A full room and nothing at month end, unknown dish costs, meat going too fast, tickets lost between the floor and the kitchen, or a restaurant you are opening in Algeria from France", body: "Symloop builds the tool that fits your outlet: recipe sheets, orders, stock, gaps, till, service figures. Describe your menu to us, your services and the way you count today." },
    related: { label: 'Also read', items: [
      { href: L.borne, kind: '2027', name: 'Ordering kiosk: menu by code, takeaway, kitchen screen' },
      { href: L.fidelite, kind: '2027', name: 'Loyalty programme: café, fast food, chain, points at the till' },
      { href: L.franchise, kind: '2027', name: 'Creating a franchise: central catalogue, common till, royalties' },
      { href: L.caisse, kind: '2027', name: 'Till sessions: float, counting, variance, bank deposit' },
    ] },
  },
  ar: {
    kind: 'المطعم · الجزائر · 2027', title: "برنامج تسيير المطعم في الجزائر (2027): القاعة ممتلئة ولا يبقى شيء في آخر الشهر، اللحم يخرج أسرع من المبيعات، ولا أحد يعرف كم يكلّف الطبق؛ البطاقات التقنية، كلفة المواد، مخزون يُخصَم عند البيع، القاعة والمطبخ، وما نضعه",
    dek: "«عندي مطعم بستين مقعداً. القاعة ممتلئة في المساء ومع ذلك، في آخر الشهر، لا يبقى شيء تقريباً. لا أعرف كم يكلّفني كل طبق، اللحم يخرج أسرع من المبيعات، الوصولات تضيع بين القاعة والمطبخ، وأقوم بالحسابات في دفتر. أي برنامج لتسيير مطعم؟» المطعم يبيع وصفات: وما دام كل طبق دون بطاقة والمخزون لا يتبع المبيعات، رقم الأعمال لا يقول شيئاً عمّا يبقى.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج تسيير المطعم', 'البطاقات التقنية', 'كلفة المواد والهامش لكل طبق', 'مخزون يُخصَم عند البيع', 'الفارق بين النظري والفعلي', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج تسيير المطعم يمسك أربعة أشياء. **البطاقة التقنية** لكل طبق: مكوّناته، كمياتها، كلفته، وبالتالي هامشه. **الطلبية**: تُؤخذ في القاعة، تُرسَل إلى المطبخ، وتُفوتَر دون إعادة إدخال. **المخزون**: يُخصَم عند كل بيع حسب البطاقة، ثم يُقارَن بالجرد المعدود. و**أرقام الخدمة**: المبيعات لكل طبق، كلفة المواد، الهامش، والصندوق. في مثال هذه الصفحة، الطبق الأكثر مبيعاً يربح 340 ديناراً بينما المتوسط 472، وفارق المخزون في أسبوع واحد يساوي " + I('34 650') + " ديناراً.",
      "هذه الصفحة موجّهة إلى من يسيّر مطعماً، علامة وجبات سريعة، مقهى، أو مطبخ توصيل، وإلى مؤسسي الجالية الذين يفتحون مؤسسة في الجزائر. التعريفات من مصادر عمومية: تسيير المطاعم، هندسة قوائم الطعام، الهامش على الكلفة المتغيّرة، النقص في المخزون، الجرد، والخسائر الغذائية. وقائمة الأطباق الاثني عشر، مبيعاتها، هوامشها، الكميات، وأسعار الشراء مثال مركَّب، بأسعار خيالية. والصفحة لا تتناول قواعد النظافة والاعتمادات، ولا الجباية والأجور، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في برنامج المطعم", body: [
        "الشكل يرتّب خمس طبقات؛ والأولى تجعل الأربع الأخرى ممكنة.",
      ], visual: 'couches', after: [
        "**المهنة.** تسيير المطعم هو قيادة وإدارة استغلال مؤسسة إطعام: القاعة، المطبخ، المشتريات، والمال. **البطاقة التقنية.** هي الطبقة المبرزة. لكل طبق: المكوّنات، كمية كل واحد، موزونة، وسعر شرائها الحالي. تعطي كلفة الطبق، وبالتالي هامشه، وتقول ما يجب أن يسحبه كل بيع من المخزون. والطريقة هي طريقة مدوّنة التصنيع، انظر [كلفة المنتوج النهائي](" + L.cout + ").",
        "**الطلبيات.** تُؤخذ على الطاولة أو عند المنضدة، تذهب إلى المطبخ حسب الركن، وتعود حساباً دون أن تُنقَل؛ وطرق الطلب، الشاشة، القائمة بالرمز، والأخذ إلى الخارج، موصوفة في [شاشة الطلب](" + L.borne + "). **المخزون.** المشتريات تدخل، المبيعات تخرج حسب البطاقات، وجرد معدود يقول ما يبقى حقاً، انظر [سجل حركات المخزون](" + L.stock + "). **الصندوق.** جلسة لكل خدمة، وإلغاءات موثَّقة، انظر [جلسات الصندوق](" + L.caisse + "). **الأرقام.** لكل طبق، لكل ساعة، ولكل خدمة، على [لوحة قيادة](" + L.dashboard + ").",
      ] },
      { heading: "الأطباق التي تملأ القاعة، والتي تدفع", body: [
        "الشكل يضع اثني عشر طبقاً حسب مبيعاتها وهامشها.",
      ], visual: 'plats', after: [
        "**هندسة قوائم الطعام.** هي تصميم قائمة لتعظيم ربح المطعم. تصنّف كل طبق حسب مقياسين: رواجه، أي عدد مرات طلبه مقارنة بالأطباق الأخرى، وهامشه، أي سعر البيع ناقص كلفة مكوّناته. **في المثال.** اثنا عشر طبقاً، " + I('5 700') + " مبيع في الشهر، ومتوسط هامش 472 ديناراً لكل طبق مباع. والمتوسطان يقسمان القائمة إلى أربع مجموعات.",
        "**النجوم.** رائجة وبهامش مرتفع: لا تُمَس، لا وصفة ولا حصة، وتُبرَز. **الرائجة بهامش ضعيف.** تُحفَظ، وتُجعَل أكثر ربحاً بتعديلات خفيفة. في المثال، هي ثلاثة، تمثّل 44 بالمئة من المبيعات و28 بالمئة من الهامش؛ والدجاج المشوي مع البطاطا، بـ910 مبيعات، يربح 340 ديناراً للطبق. **ذات الهامش الجيد والطلب الضعيف.** وصف أفضل، مكان أوضح في القائمة، وترويج. والسمك المشوي يربح 850 ديناراً ويُباع 150 مرة. **الخاملة.** قليلة الطلب وضعيفة الهامش: مرشّحة للسحب، وذلك يبسّط المطبخ والمخزون أيضاً. **ما يفعله البرنامج.** يعيد حساب الهامش حين يتغيّر سعر مكوّن، ويعيد رسم الخريطة كل شهر.",
      ] },
      { heading: "ما كان يجب أن يخرج من المخزون، وما خرج", body: [
        "الشكل يقارن، لستة مكوّنات، الاستهلاك النظري والاستهلاك الفعلي في أسبوع.",
      ], visual: 'ecarts', after: [
        "**الاستهلاكان.** الاستهلاك النظري هو ما كان يجب أن تستهلكه المبيعات، حسب البطاقات التقنية للأطباق المباعة. والاستهلاك الفعلي يُعَدّ: مخزون البداية، زائد المشتريات، ناقص المخزون المعدود في النهاية. والجرد هو التحقق المادي من الكميات؛ والنقص في المخزون، في المحاسبة، هو وجود أقل مما تنص عليه قائمة المخزون. **في المثال.** 86 كلغ من اللحم كان يجب أن تخرج، و97 كلغ خرجت: فارق 11 كلغ، أي " + I('24 200') + " دينار بسعر الشراء. وعلى ستة مكوّنات، يترك الأسبوع فارقاً من " + I('34 650') + " ديناراً، أي نحو " + I('150 000') + " دينار في الشهر.",
        "**أين الفارق.** ليس في كل مكان: اللحم يمثّل 70 بالمئة من المجموع، يليه الجبن، والمشروبات، التي تُعَدّ بالوحدة، لا تتحرك تقريباً. **من أين يأتي.** من حصص أسخى من البطاقة، خسائر في التقطيع والطهي لم تُحسَب، منتجات تُرمى، أطباق تُقدَّم مجاناً أو تخرج دون تذكرة، وأخطاء في الاستلام. والخسائر الغذائية هي الغذاء الذي يُرمى أو يضيع دون أن يؤكل: تُسجَّل، مثل البيع. **ما يُفعل.** تُوزن حصص المكوّنين المنحرفين، تُصحَّح البطاقة إذا كانت خاطئة، تُسجَّل الخسائر، ويُعاد العدّ في الأسبوع التالي. **المشتريات.** الكميات المطلوبة تتبع الاستهلاك، انظر [إعادة التموين](" + L.reappro + ").",
      ] },
      { heading: "ما يطلقه البيع", body: [
        "الشكل يتابع بيعاً في ست مراحل، من الطلبية إلى أرقام الخدمة.",
      ], visual: 'vente', after: [
        "**الطلبية.** تُدخَل على هاتف أو لوحة، مع الطاولة والملاحظات: دون بصل، مطهوّ جيداً، أو للأخذ. **وصل المطبخ.** كل ركن يتلقى ما يخصه، على شاشة أو طابعة؛ والقاعة ترى متى يجهز الطبق. **الحساب.** يخرج من الطلبية، لكل طاولة أو لكل شخص، دون نقل أي شيء.",
        "**الخصم.** هو المرحلة المبرزة: لحظة البيع، ينزل المخزون بما تنص عليه البطاقة، 220 غراماً من اللحم للمشاوي إذا كان هذا ما تقوله البطاقة. **دون اتصال.** أخذ الطلبية والصندوق يتواصلان حين ينقطع الاتصال، ويتزامنان بعد ذلك. **الوفاء.** الصندوق يتعرّف على الشخص ويضيف نقاطه، انظر [برنامج الوفاء](" + L.fidelite + "). **أرقام الخدمة.** عند الإقفال: المبيعات لكل طبق، كلفة المواد، الهامش، والصندوق معدوداً.",
      ] },
      { heading: "ثمانية أسابيع، بدءاً بالوزن", body: [
        "ثمانية أسابيع في المثال؛ والبطاقات تُنجَز في المطبخ.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: قائمتكم، مورّدوكم، خدماتكم، ودفتركم وصندوقكم الحاليان. **البطاقات التقنية.** هي العمل الحقيقي: كل طبق يُحضَّر كالعادة ويوزَن، مكوّناً بمكوّن. وكثيراً ما يُكتشف حينها أن شخصين في المطبخ لا يحضّران الطبق نفسه. **أسعار الشراء.** تُحدَّث عند كل استلام: وكلفة الطبق تتبع.",
        "**الجرد الأول.** عدّ كامل، في مساء واحد، يعطي نقطة الانطلاق؛ وبعد ذلك، عدّ كل أسبوع للمكوّنات الأثقل وزناً في الكلفة. **التشغيل.** خدمة تجريبية مع الفريق، ثم خدمة حقيقية. **ما لا يفعله البرنامج.** لا يطبخ، لا يعوّض من يدير المطبخ، ولا يقرّر الأسعار: يُظهر كم يكلّف كل طبق وأين تذهب السلعة. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "من المنضدة إلى عدة مؤسسات", body: [
        "الشكل يعطي خمسة أنواع مؤسسات، وما يأتي به البرنامج لكل واحدة.",
      ], visual: 'types', after: [
        "**عند المنضدة.** كل شيء يُحسم في ساعة الذروة: الطلبية يجب أن تُدخَل في بضع حركات. **على الطاولة.** مخطط القاعة، الطلبيات لكل طاولة، والحساب المقسَّم. **المقهى.** تذاكر صغيرة كثيرة: الصندوق يجب أن يكون سريعاً، والمخزون يُعَدّ بالوحدة.",
        "**التوصيل.** الطلبيات تأتي من المنضدة، الهاتف، والتطبيقات: تُجمَع على شاشة واحدة في المطبخ. **عدة مؤسسات.** البطاقات التقنية مشتركة، وكلفة المواد تُقارَن من نقطة إلى أخرى؛ وللعلامة التي تتوسّع، انظر [إنشاء امتياز تجاري](" + L.franchise + "). **جاهز أو على المقاس.** توجد برامج صندوق للمطاعم، وتناسب التحصيل. والعمل على المقاس يُبرَّر حين تلزم بطاقات تقنية مربوطة بالمخزون، فوارق لكل مكوّن، عدة مؤسسات، تطبيق طلب باسمكم، أو ربط بتسييركم.",
      ], list: [
        "**ما تتلقونه**: البطاقات التقنية بالكلفة والهامش لكل طبق؛ أخذ الطلبية في القاعة ووصولات المطبخ؛ الحساب دون إعادة إدخال؛ مخزون يُخصَم عند البيع؛ الجرد والفوارق لكل مكوّن؛ الصندوق لكل خدمة؛ والأرقام لكل طبق ولكل ساعة.",
        "**ما يتفاداه المطعم**: القائمة التي لا يعرف أحد هوامشها، اللحم الذي يخرج أسرع من المبيعات، الوصولات الضائعة بين القاعة والمطبخ، الأطباق التي تخرج دون تذكرة، والحسابات من الذاكرة.",
        "**ما يُقاس**: المبيعات لكل طبق ولكل ساعة؛ كلفة المواد؛ الهامش لكل طبق؛ الفارق بين الاستهلاك النظري والفعلي، لكل مكوّن؛ الخسائر المسجَّلة؛ متوسط التذكرة؛ ووقت خروج الأطباق.",
        "**ما تفعله Symloop**: التأطير، وضع البطاقات التقنية، أخذ الطلبية وشاشات المطبخ، المخزون والمشتريات، الفوارق، الصندوق، ولوحة القيادة، بالعربية والفرنسية.",
      ], faq: [
        { q: "أي برنامج لتسيير مطعم؟", a: "برنامج يربط أربعة أشياء: البطاقات التقنية للأطباق، أخذ الطلبية بين القاعة والمطبخ، مخزون يُخصَم عند كل بيع، وصندوق الخدمة. والصندوق وحده يحصّل؛ ولا يقول ما يبقى." },
        { q: "كيف تُحسب كلفة الطبق؟", a: "بجمع كلفة كل مكوّن في البطاقة التقنية: الكمية المستعملة مضروبة في سعر شرائها. وهامش الطبق هو سعر بيعه ناقص هذه الكلفة." },
        { q: "كيف يُعرف أي الأطباق تُحفَظ في القائمة؟", a: "بوضع كل طبق حسب مبيعاته وهامشه. الرائجة بهامش مرتفع تُبرَز؛ الرائجة بهامش ضعيف تُراجَع؛ وقليلة الطلب ضعيفة الهامش مرشّحة للسحب." },
        { q: "لماذا المطعم ممتلئ ولا يبقى شيء؟", a: "في الغالب لسببين يخفيهما رقم الأعمال: الأطباق الأكثر مبيعاً هي الأقل ربحاً، وجزء من السلعة يخرج من المخزون دون أن يُباع." },
        { q: "كيف يُتابَع مخزون المطعم؟", a: "كل بيع يسحب من المخزون ما تنص عليه بطاقة الطبق؛ وجرد معدود يعطي الاستهلاك الفعلي؛ والفرق بين الاثنين هو الفارق، مكوّناً بمكوّن." },
        { q: "من أين تأتي فوارق المخزون؟", a: "من حصص أسخى من البطاقة، خسائر لم تُحسَب، منتجات تُرمى، أطباق تخرج دون تذكرة، وأخطاء في الاستلام. والفارق يقول أين يُنظَر، لا من يُتَّهم." },
        { q: "هل تلزم لوحات لأخذ الطلبيات؟", a: "هاتف يكفي. والمهم أن تذهب الطلبية إلى المطبخ وتعود حساباً دون أن تُنقَل." },
        { q: "هل يشتغل البرنامج دون إنترنت؟", a: "نعم للخدمة: أخذ الطلبية والصندوق يتواصلان دون اتصال ويتزامنان بعد ذلك." },
        { q: "كم يلزم من الوقت لإنجاز البطاقات التقنية؟", a: "هي الأطول: كل طبق يُحضَّر ويوزَن. في المثال، ثلاثة أسابيع لقائمة كاملة، بدءاً بالأطباق الأكثر مبيعاً." },
        { q: "هل يناسب البرنامج عدة مطاعم؟", a: "نعم: البطاقات مشتركة، لكل مؤسسة مخزونها وصندوقها، وكلفة المواد تُقارَن من نقطة إلى أخرى." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الطبق الذي يملأ القاعة ليس الذي يدفع الإيجار." },
      { after: 2, text: "الفارق ليس في كل مكان: هو في اللحم والجبن. هناك يُوزَن." },
    ],
    cta: { eyebrow: "قولوا لنا كم مقعداً، كم طبقاً في القائمة، وكيف تحسبون اليوم: نبدأ بأسبوع تأطير", title: "قاعة ممتلئة ولا شيء في آخر الشهر، كلفة أطباق مجهولة، لحم يخرج بسرعة، وصولات تضيع بين القاعة والمطبخ، أو مطعم تفتحونه في الجزائر من فرنسا", body: "Symloop تبني الأداة التي تناسب مؤسستكم: البطاقات التقنية، الطلبيات، المخزون، الفوارق، الصندوق، وأرقام الخدمة. صِفوا لنا قائمتكم، خدماتكم، وطريقتكم الحالية في الحساب." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.borne, kind: '2027', name: 'شاشة الطلب: قائمة بالرمز، الأخذ إلى الخارج، وشاشة المطبخ' },
      { href: L.fidelite, kind: '2027', name: 'برنامج الوفاء: مقهى، وجبات سريعة، سلسلة، ونقاط عند الصندوق' },
      { href: L.franchise, kind: '2027', name: 'إنشاء امتياز تجاري: كتالوغ مركزي، صندوق موحَّد، وإتاوات' },
      { href: L.caisse, kind: '2027', name: 'جلسات الصندوق: رصيد البداية، العدّ، الفارق، والإيداع' },
    ] },
  },
};

const KEYWORDS = "logiciel restaurant algerie, logiciel gestion restaurant algerie, logiciel de gestion de restaurant en algérie 2027, logiciel restaurant, logiciel gestion restaurant, application restaurant algerie, comment gérer un restaurant, comment calculer le prix de revient d'un plat, fiche technique restaurant, calcul coût matière restaurant, logiciel fiche technique cuisine, ingénierie des menus, restaurant management software algeria, recipe costing software, food cost calculation, menu engineering, theoretical versus actual food cost, برنامج تسيير مطعم, برنامج ادارة مطعم, تطبيق مطاعم الجزائر, كلفة الطبق, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
