import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-organiser-un-entrepot-de-stockage-algerie-2027-adressage-classement-abc-chemin-de-preparation-erreurs-de-preparation-logiciel-wms.mjs';

const SLUG = 'comment-organiser-un-entrepot-de-stockage-algerie-2027-adressage-classement-abc-chemin-de-preparation-erreurs-de-preparation-logiciel-wms';
const FIGURES = ['flux', 'regles', 'chemin', 'couches', 'erreurs', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  lots: '/blog/le-lot-qui-expire-en-premier-est-au-fond-tracabilite-par-lot-application-algerie-2027-reception-fefo-quarantaine-rappel-ce-qu-on-construit/',
  reception: '/blog/le-meme-defaut-revient-et-on-paie-le-fournisseur-controle-a-la-reception-application-algerie-2027-plan-de-controle-non-conformite-reclamation/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  tournees: '/blog/le-camion-repasse-deux-fois-dans-le-meme-quartier-tournees-de-livraison-application-algerie-2027-zones-charge-ordre-des-arrets-replanification/',
  etiquettes: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
};

const CONTENT = {
  fr: {
    kind: 'Entrepôt · Algérie · 2027', title: "Comment organiser un entrepôt de stockage en Algérie (2027) : « c'est au fond, à gauche », le même article à quatre endroits, des kilomètres pour préparer une commande, la mauvaise référence livrée ; adressage, classement, scan, et ce qu'on met en place",
    dek: "« Nous sommes grossiste, avec un dépôt de 1 200 m² et quatre personnes à la préparation. Tout le monde sait à peu près où sont les choses, sauf quand la personne qui sait est absente. Le même article se retrouve à trois endroits, nous livrons la mauvaise référence une fois par jour, et une nouvelle recrue met deux mois avant de préparer seule. Comment organiser un entrepôt ? Faut-il un logiciel de gestion d'entrepôt ? » Un dépôt ne se désorganise pas par manque de place : il se désorganise parce que les choses n'ont pas d'adresse. Une fois que chaque emplacement en a une, le rangement, la préparation et le contrôle deviennent une affaire de scan.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ["Organisation d'entrepôt", 'Adressage des emplacements', 'Classement ABC', 'Préparation de commandes', "Logiciel de gestion d'entrepôt (WMS)", 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Organiser un entrepôt tient en quatre décisions, dans cet ordre. **Donner une adresse à chaque emplacement** : allée, travée, niveau, une étiquette à scanner. **Donner à chaque article un emplacement de prélèvement**, et un seul. **Rapprocher du quai les articles qui sortent le plus**, d'après les sorties réelles. **Faire confirmer chaque geste par un scan**, au rangement comme à la préparation. Un logiciel d'entrepôt, souvent appelé WMS, est ce qui tient ces quatre décisions tous les jours. Dans l'exemple de cette page, la même commande passe de 192 m à 120 m de marche, et 1 000 lignes préparées de 20 erreurs à 3.",
      "Cette page s'adresse à celles et ceux qui dirigent un dépôt de grossiste, de distributeur, d'importateur, de boutique en ligne ou d'usine, de quelques allées à quelques milliers de mètres carrés, et à celles et ceux qui en possèdent un en Algérie et le suivent depuis la France. Les définitions viennent de sources publiques : système de gestion d'entrepôt, préparation de commandes, méthodes de prélèvement, analyse ABC, inventaire tournant, transbordement à quai, code-barres, unité de gestion de stock. Le dépôt à quatre allées, ses distances et ses taux d'erreur sont un exemple construit. La page ne traite ni des règles de sécurité des bâtiments et du stockage, ni de la conduite des engins, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Le trajet d'une marchandise dans le dépôt", body: [
        "La figure suit une marchandise en six temps.",
      ], visual: 'flux', after: [
        "**La réception.** Un quai de chargement est la zone d'un bâtiment où les véhicules de marchandises sont chargés et déchargés ; c'est là que le stock entre, avec son bon, ses quantités, son état. Le contrôle détaillé est celui de [la réception](" + L.reception + "). **Le rangement.** C'est le temps accentué. Le logiciel propose une adresse, la personne y pose la marchandise et scanne l'étiquette de l'emplacement : le stock a désormais un « où ». Sans ce geste, il est dans le dépôt et nulle part. **La préparation.** La préparation de commandes consiste à prélever et rassembler des articles, dans une quantité donnée, avant l'expédition, pour satisfaire les commandes des clients.",
        "**Quatre façons de prélever.** À la pièce : les articles sont pris un par un. Par zones : chaque personne ne prélève que dans la sienne. Par lots : on collecte en un seul passage les articles de plusieurs commandes. Par vagues : la combinaison des deux précédentes. Pour un dépôt de quatre personnes, la préparation commande par commande, ou par petits lots de commandes, suffit ; le choix se refait quand le volume double. **L'emballage et l'expédition.** Le colis est contrôlé, étiqueté depuis le logiciel, voir [l'impression d'étiquettes](" + L.etiquettes + "), puis chargé dans l'ordre inverse de la tournée, voir [les tournées de livraison](" + L.tournees + "). **Sans stockage.** Le transbordement à quai fait passer la marchandise directement du camion entrant au camion sortant, en supprimant stockage et préparation : utile pour ce qui est déjà vendu à l'arrivée.",
      ] },
      { heading: "Six règles d'un dépôt organisé", body: [
        "La figure donne six règles, ce que chacune évite, et comment le logiciel la tient.",
      ], visual: 'regles', after: [
        "**L'adresse.** Trois ou quatre éléments suffisent : la zone, l'allée, la travée, le niveau. « B-07-2 » se lit par une personne arrivée hier. L'étiquette porte un code-barres, c'est-à-dire une représentation des données sous une forme visuelle lisible par une machine : elle se scanne, elle ne se recopie pas. **Un emplacement de prélèvement.** Chaque article a une adresse où on le prend, toujours la même ; le surplus va en réserve, au-dessus ou au fond, et redescend quand l'emplacement se vide. C'est ce qui met fin au même article à quatre endroits. **L'unité.** Une unité de gestion de stock est un type d'article distinct que l'on suit en stock ; le carton de douze et la pièce sont deux unités, pas une.",
        "**Les références voisines.** La vis de 10 et la vis de 12, le même produit en deux parfums : rangés côte à côte, ils seront confondus. On les éloigne, et le scan de l'article fait le reste. **Rien sans adresse.** La palette posée dans l'allée « en attendant » a droit à une adresse elle aussi : une zone d'attente, visible, où rien ne reste plus de deux jours. **Le plus ancien d'abord.** Pour les produits qui ont une date, le logiciel propose l'adresse et le lot à sortir, comme dans [la traçabilité par lot](" + L.lots + "). **Les palettiers.** Un palettier est un système de stockage conçu pour ranger des marchandises sur palettes ; les charges admissibles et la sécurité des installations relèvent de leur fabricant et de la réglementation, pas de cette page.",
      ] },
      { heading: "Rapprocher du quai ce qui sort le plus", body: [
        "La figure prépare la même commande dans le même dépôt, rangé de deux façons.",
      ], visual: 'chemin', after: [
        "**L'analyse ABC.** C'est une technique de classement du stock en trois catégories. L'exemple habituel : 20 % des articles font 70 % de la valeur consommée dans l'année, 30 % en font 25 %, et la moitié restante 5 %. Pour ranger un dépôt, on applique la même logique au nombre de lignes de commande : quels articles reviennent le plus souvent sur les bons de préparation. **Ce que cela change.** Dans le schéma, la commande de six lignes demande 192 m quand les articles sont rangés là où il y avait de la place, et 120 m quand les plus sortis sont à l'entrée des deux premières allées. À 80 commandes par jour, 15,4 km contre 9,6.",
        "**Les limites du schéma.** Les distances viennent d'un plan simplifié, quatre allées et un aller-retour dans chacune ; votre dépôt donnera d'autres chiffres, que l'on calcule sur vos sorties réelles. **Recalculer.** Le classement n'est pas fait une fois pour toutes : la saison change les articles courants. Le logiciel propose chaque mois une courte liste de déplacements, dix ou vingt, pas un déménagement. **L'ordre de la liste.** La liste de préparation est triée dans l'ordre du trajet, pas dans l'ordre de la commande : cela ne demande aucun déplacement d'article, et c'est souvent le premier gain. **En hauteur.** Les articles courants à hauteur de main, les lourds en bas, les rares en haut : la même logique, à la verticale. **Le stock.** Rapprocher un article ne sert à rien s'il manque : le niveau de l'emplacement de prélèvement se suit comme un petit [réapprovisionnement](" + L.reappro + ") interne, de la réserve vers l'avant.",
      ] },
      { heading: "Ce que tient un logiciel d'entrepôt", body: [
        "La figure empile cinq couches ; la deuxième fait la différence avec un logiciel de stock.",
      ], visual: 'couches', after: [
        "**La définition.** Un système de gestion d'entrepôt est un ensemble de règles et de processus destiné à organiser le travail d'un entrepôt ou d'un centre de distribution. Sa fonction première est d'enregistrer les entrées et les sorties du stock ; il enregistre aussi l'emplacement précis du stock dans l'entrepôt, pour mieux employer l'espace. **Ce que cela ajoute.** Un logiciel de gestion commerciale sait qu'il reste 340 cartons ; le logiciel d'entrepôt sait que 40 sont en B-07-1 et 300 en réserve R-12-4. La base de mouvements est celle que décrit [le stock juste](" + L.stock + ") ; l'emplacement s'y ajoute comme une dimension.",
        "**Sur un téléphone.** Les écrans de rangement et de préparation tiennent sur un téléphone ou un terminal : une ligne à la fois, l'adresse en grand, un scan pour confirmer. Dans un dépôt, le réseau a des zones mortes : l'application doit continuer et se synchroniser ensuite, voir [l'application hors ligne](" + L.horsligne + "). **Les commandes.** Elles arrivent d'elles-mêmes dans la file de préparation depuis la vente, le site ou [le portail de commande des clients](" + L.portail + "), avec une heure limite. **L'inventaire.** Un inventaire tournant consiste à compter un petit sous-ensemble précis du stock ; la plupart des méthodes s'appuient sur le classement ABC pour compter plus souvent certains articles. Avec des adresses, compter une allée prend une heure, pas un week-end.",
      ] },
      { heading: "Les erreurs de préparation, et ce qui les arrête", body: [
        "La figure prépare les mêmes 1 000 lignes à la feuille, puis au scan.",
      ], visual: 'erreurs', after: [
        "**Trois erreurs.** Le mauvais article, presque toujours une référence voisine ; la mauvaise quantité ; la ligne oubliée. Dans l'exemple, 20 erreurs sur 1 000 lignes préparées à la feuille : toutes partent, parce que rien ne les arrête entre l'étagère et le camion. **Ce que le scan arrête.** À chaque ligne, deux scans : l'adresse, puis l'article. Une mauvaise adresse ou un mauvais code refuse la ligne ; une ligne non faite empêche de fermer la commande. Les 9 mauvais articles et les 4 oublis disparaissent ; il reste 3 erreurs de quantité.",
        "**Les quantités.** Elles résistent, parce que le scan confirme l'article, pas le nombre. Trois parades : prélever en cartons complets quand c'est possible ; faire saisir la quantité prise plutôt que l'afficher ; peser le colis fini et le comparer au poids attendu. **Ce que coûte une erreur.** Elle ne se réduit pas à la pièce : un retour, une seconde livraison, un avoir, un client qui vérifie désormais tout. Mesurez-la chez vous : retours pour erreur de préparation, sur un mois, rapportés aux lignes préparées. **La formation.** Avec des adresses et une liste triée, une nouvelle recrue prépare seule bien plus tôt : le savoir n'est plus dans la tête de la personne la plus ancienne. **Un critère.** L'exactitude du prélèvement fait partie de ce que l'on regarde pour juger l'exécution des commandes.",
      ] },
      { heading: "Sept semaines, dans l'exemple", body: [
        "Sept semaines pour un dépôt de quelques allées, sans arrêter l'activité.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine dans le dépôt : le plan réel, les familles d'articles, un mois de sorties, les erreurs connues. **L'adressage.** Il se fait allée par allée, pendant que le dépôt tourne ; chaque allée étiquetée est aussitôt comptée et son stock rattaché aux adresses. **Le classement.** Les articles courants sont rapprochés par petites séries, le soir. **Le scan.** La réception et le rangement d'abord, puis la préparation, une équipe à la fois.",
        "**Ce qui reste après.** Un plan du dépôt, un stock par emplacement, des listes triées dans l'ordre du trajet, des erreurs comptées, un inventaire tournant. **Du marché ou sur mesure.** Des logiciels d'entrepôt existent, des plus simples aux plus complets ; les grands systèmes sont faits pour de grands sites. Pour un dépôt de quelques personnes, il faut surtout quatre écrans, réception, rangement, préparation, inventaire, reliés à votre logiciel de vente. Le sur-mesure se justifie quand ce lien n'existe pas, ou quand votre activité a ses règles : lots, dates, cartons et pièces, plusieurs dépôts. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que la direction reçoit** : un plan du dépôt avec une adresse par emplacement ; un stock par emplacement ; des articles classés d'après leurs sorties ; des listes de préparation dans l'ordre du trajet ; un scan à chaque rangement et à chaque prélèvement ; les erreurs et les lignes par heure, semaine après semaine.",
        "**Ce que le dépôt ne fait plus** : chercher un article que seule une personne sait trouver, ranger là où il y a de la place, traverser le dépôt pour les articles de tous les jours, livrer la référence voisine, fermer deux jours pour l'inventaire.",
        "**Ce qui est mesuré** : lignes préparées par heure ; distance ou temps par commande ; erreurs pour mille lignes, par type ; articles sans adresse ; palettes en zone d'attente depuis plus de deux jours ; écarts d'inventaire par allée.",
        "**Ce que fait Symloop** : le relevé dans le dépôt, le plan et les adresses, les étiquettes, le classement d'après vos sorties, les écrans de réception, de rangement et de préparation, hors ligne compris, le lien avec votre logiciel de vente, puis la première revue avec l'équipe.",
      ], faq: [
        { q: "Comment organiser un entrepôt de stockage ?", a: "Dans cet ordre : une adresse pour chaque emplacement, un emplacement de prélèvement par article, les articles les plus sortis près du quai, et un scan pour confirmer chaque rangement et chaque prélèvement. Le reste en découle." },
        { q: "Faut-il un logiciel de gestion d'entrepôt ?", a: "Dès que le stock doit se retrouver sans la personne qui l'a rangé. Un logiciel de stock dit combien il reste ; un logiciel d'entrepôt dit où. Pour un petit dépôt, quatre écrans suffisent : réception, rangement, préparation, inventaire." },
        { q: "Qu'est-ce qu'un WMS ?", a: "Un système de gestion d'entrepôt : il enregistre les entrées et les sorties, et l'emplacement précis de chaque stock. Il propose où ranger, dans quel ordre préparer, et fait confirmer chaque geste par un scan." },
        { q: "Comment adresser les emplacements ?", a: "Par zone, allée, travée et niveau, avec une étiquette à code-barres sur chaque emplacement. L'adresse doit se lire par quelqu'un arrivé la veille : courte, logique, croissante dans le sens de la marche." },
        { q: "Comment éviter les erreurs de préparation de commande ?", a: "En faisant scanner l'adresse puis l'article à chaque ligne : la mauvaise référence est refusée, la ligne oubliée empêche de fermer la commande. Pour les quantités : cartons complets, quantité saisie, contrôle au poids." },
        { q: "Comment réduire les déplacements dans le dépôt ?", a: "En rapprochant du quai les articles qui reviennent le plus sur les commandes, et en triant la liste de préparation dans l'ordre du trajet. Dans l'exemple, la même commande passe de 192 m à 120 m." },
        { q: "Qu'est-ce que le classement ABC ?", a: "Un classement du stock en trois catégories. Pour le rangement, on classe les articles par nombre de lignes de commande : quelques-uns font l'essentiel des prélèvements, et ce sont eux que l'on place à l'entrée des allées." },
        { q: "Comment faire l'inventaire sans fermer le dépôt ?", a: "Par un inventaire tournant : une allée ou une famille comptée à la fois, les articles courants plus souvent que les autres. Avec des adresses et un scan, l'écart se corrige sur place, emplacement par emplacement." },
        { q: "Peut-on organiser le dépôt sans arrêter l'activité ?", a: "Oui : l'adressage se fait allée par allée, chacune comptée au passage, et les déplacements d'articles par petites séries. Le scan est mis en place d'abord à la réception, puis à la préparation." },
        { q: "Combien de temps pour organiser un entrepôt ?", a: "Sept semaines dans l'exemple de cette page, pour un dépôt de quelques allées, relevé compris, jusqu'à une première mesure des erreurs et des lignes par heure." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Sans ce geste, le stock est dans le dépôt et nulle part." },
      { after: 4, text: "Le scan ne rend personne plus attentif : il rend l'erreur impossible à valider." },
    ],
    cta: { eyebrow: "Dites-nous ce que vous stockez, sur quelle surface, et comment se prépare une commande aujourd'hui : nous commençons par une semaine dans le dépôt", title: "« C'est au fond, à gauche », le même article à quatre endroits, des kilomètres pour préparer, la mauvaise référence livrée, un inventaire qui ferme le dépôt, ou un dépôt en Algérie que vous suivez depuis la France", body: "Symloop construit ce qui tient un dépôt : plan et adresses, stock par emplacement, rangement et préparation au scan, inventaire tournant, lien avec votre logiciel de vente. Décrivez-nous votre dépôt, vos articles, et l'erreur qui revient le plus souvent." },
    related: { label: 'À lire aussi', items: [
      { href: L.stock, kind: '2027', name: 'Stock juste : journal de mouvements, inventaire tournant' },
      { href: L.lots, kind: '2027', name: 'Traçabilité par lot : réception, quarantaine, rappel' },
      { href: L.reappro, kind: '2027', name: 'Réapprovisionnement : point de commande, délai mesuré' },
      { href: L.tournees, kind: '2027', name: 'Tournées de livraison : zones, charge, ordre des arrêts' },
    ] },
  },
  en: {
    kind: 'Warehouse · Algeria · 2027', title: "How to organise a storage warehouse in Algeria (2027): “it's at the back, on the left”, the same item in four places, kilometres walked to pick one order, the wrong reference delivered; addresses, ranking, scanning, and what we put in place",
    dek: "“We are a wholesaler, with a 1,200 m² depot and four people picking. Everyone knows roughly where things are, except when the person who knows is away. The same item turns up in three places, we deliver the wrong reference once a day, and a new hire takes two months before picking alone. How do you organise a warehouse? Do we need warehouse management software?” A depot does not become disorganised for lack of space: it becomes disorganised because things have no address. Once every location has one, put-away, picking and checking become a matter of scanning.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Warehouse organisation', 'Location addresses', 'ABC ranking', 'Order picking', 'Warehouse management software (WMS)', 'Algeria 2027'],
    intro: [
      "**Short answer.** Organising a warehouse comes down to four decisions, in this order. **Give every location an address**: aisle, bay, level, a label to scan. **Give every item one picking location**, and only one. **Move the items that leave most often closer to the dock**, based on what really goes out. **Have every gesture confirmed by a scan**, at put-away as at picking. Warehouse software, often called a WMS, is what holds those four decisions every day. In this page's example, the same order goes from 192 m to 120 m of walking, and 1,000 picked lines from 20 errors to 3.",
      "This page is for those who run the depot of a wholesaler, a distributor, an importer, an online shop or a factory, from a few aisles to a few thousand square metres, and for those who own one in Algeria and follow it from France. The definitions come from public sources: warehouse management system, order picking, picking methods, ABC analysis, cycle counting, cross-docking, barcode, stock keeping unit. The four-aisle depot, its distances and its error rates are a constructed example. The page covers neither safety rules for buildings and storage nor the driving of handling equipment, and quotes no hardware price.",
    ],
    sections: [
      { heading: "The journey of goods through the depot", body: [
        "The figure follows goods in six steps.",
      ], visual: 'flux', after: [
        "**Receiving.** A loading dock is the area of a building where goods vehicles are loaded and unloaded; that is where stock comes in, with its note, its quantities, its condition. The detailed check is that of [receiving control](" + L.reception + "). **Put-away.** It is the accented step. The software proposes an address, the person sets the goods down there and scans the location label: the stock now has a “where”. Without that gesture, it is in the depot and nowhere. **Picking.** Order picking consists of taking and collecting items, in a specified quantity, before shipment, to fulfil customer orders.",
        "**Four ways of picking.** By the piece: items are taken one by one. By zone: each person picks only in their own. By batch: the items of several orders are collected in one pass. By wave: the combination of the previous two. For a depot of four people, picking order by order, or in small batches of orders, is enough; the choice is revisited when volume doubles. **Packing and shipping.** The parcel is checked, labelled from the software, see [label printing](" + L.etiquettes + "), then loaded in the reverse order of the round, see [delivery rounds](" + L.tournees + "). **Without storage.** Cross-docking moves goods directly from the inbound truck to the outbound truck, removing storage and picking: useful for what is already sold on arrival.",
      ] },
      { heading: "Six rules of an organised depot", body: [
        "The figure gives six rules, what each avoids, and how the software holds it.",
      ], visual: 'regles', after: [
        "**The address.** Three or four elements are enough: zone, aisle, bay, level. “B-07-2” can be read by someone who arrived yesterday. The label carries a barcode, that is a way of representing data in a visual, machine-readable form: it is scanned, not copied out. **One picking location.** Each item has one address where it is taken, always the same; the surplus goes to reserve, above or at the back, and comes down when the location empties. That is what ends the same item in four places. **The unit.** A stock keeping unit is a distinct type of item tracked in inventory; the carton of twelve and the single piece are two units, not one.",
        "**Look-alike references.** The 10 mm screw and the 12 mm one, the same product in two flavours: stored side by side, they will be confused. They are kept apart, and the scan of the item does the rest. **Nothing without an address.** The pallet set down in the aisle “for now” is entitled to an address too: a waiting zone, visible, where nothing stays more than two days. **The oldest first.** For products that carry a date, the software proposes the address and the lot to take out, as in [traceability by lot](" + L.lots + "). **Pallet racks.** A pallet rack is a storage system designed to store goods on pallets; permitted loads and the safety of installations are matters for their maker and for regulation, not for this page.",
      ] },
      { heading: "Bringing what leaves most closer to the dock", body: [
        "The figure picks the same order in the same depot, stored in two ways.",
      ], visual: 'chemin', after: [
        "**ABC analysis.** It is a technique that sorts inventory into three categories. The usual example: 20% of items account for 70% of the value consumed in the year, 30% for 25%, and the remaining half for 5%. To arrange a depot, the same logic is applied to the number of order lines: which items come back most often on picking lists. **What that changes.** On the plan, the six-line order takes 192 m when items are stored wherever there was room, and 120 m when the busiest ones are at the mouth of the first two aisles. At 80 orders a day, 15.4 km against 9.6.",
        "**The limits of the plan.** The distances come from a simplified plan, four aisles and a there-and-back in each; your depot will give other figures, calculated on what really goes out. **Recalculating.** The ranking is not done once and for all: the season changes the everyday items. Each month the software proposes a short list of moves, ten or twenty, not a house move. **The order of the list.** The picking list is sorted in route order, not in order of the customer's order: it requires moving no item, and it is often the first gain. **Height.** Everyday items at hand height, heavy ones at the bottom, rare ones at the top: the same logic, vertically. **Stock.** Bringing an item closer is useless if it is missing: the level of the picking location is followed like a small internal [replenishment](" + L.reappro + "), from the reserve to the front.",
      ] },
      { heading: "What warehouse software holds", body: [
        "The figure stacks five layers; the second is the difference from stock software.",
      ], visual: 'couches', after: [
        "**The definition.** A warehouse management system is a set of policies and processes meant to organise the work of a warehouse or distribution centre. Its core function is to record the arrival and departure of inventory; it also records the precise location of stock within the warehouse, to make better use of space. **What that adds.** Sales software knows 340 cartons are left; warehouse software knows 40 are in B-07-1 and 300 in reserve at R-12-4. The movement base is the one described in [accurate stock](" + L.stock + "); the location is added to it as one more dimension.",
        "**On a phone.** The put-away and picking screens fit on a phone or a handheld terminal: one line at a time, the address in large type, a scan to confirm. In a depot the network has dead zones: the application has to keep going and synchronise afterwards, see [the offline application](" + L.horsligne + "). **The orders.** They arrive by themselves in the picking queue from sales, the website or [the customers' ordering portal](" + L.portail + "), with a cut-off time. **Stock counts.** A cycle count consists of counting a small, specific subset of inventory; most methods rely on ABC ranking to count some items more often. With addresses, counting an aisle takes an hour, not a weekend.",
      ] },
      { heading: "Picking errors, and what stops them", body: [
        "The figure picks the same 1,000 lines from a sheet, then with a scan.",
      ], visual: 'erreurs', after: [
        "**Three errors.** The wrong item, almost always a neighbouring reference; the wrong quantity; the forgotten line. In the example, 20 errors in 1,000 lines picked from a sheet: all of them leave, because nothing stops them between the shelf and the truck. **What the scan stops.** On each line, two scans: the address, then the item. A wrong address or a wrong code refuses the line; a line not done prevents the order from being closed. The 9 wrong items and the 4 omissions disappear; 3 quantity errors remain.",
        "**Quantities.** They resist, because the scan confirms the item, not the number. Three countermeasures: pick in full cartons where possible; have the quantity taken typed in rather than displayed; weigh the finished parcel and compare it with the expected weight. **What an error costs.** It is not just the piece: a return, a second delivery, a credit note, a customer who now checks everything. Measure it in your depot: returns for picking errors, over a month, set against lines picked. **Training.** With addresses and a sorted list, a new hire picks alone much sooner: the knowledge is no longer in the head of the longest-serving person. **A criterion.** Picking accuracy is part of what is looked at when judging how orders are fulfilled.",
      ] },
      { heading: "Seven weeks, in the example", body: [
        "Seven weeks for a depot of a few aisles, without stopping activity.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week in the depot: the real plan, the item families, a month of outbound lines, the known errors. **Addressing.** It is done aisle by aisle, while the depot runs; each labelled aisle is counted at once and its stock attached to the addresses. **Ranking.** Everyday items are moved closer in small batches, in the evening. **The scan.** Receiving and put-away first, then picking, one team at a time.",
        "**What remains afterwards.** A plan of the depot, stock by location, lists sorted in route order, errors counted, cycle counts. **Off the shelf or custom.** Warehouse software exists, from the simplest to the most complete; the large systems are made for large sites. For a depot of a few people, what is needed above all is four screens, receiving, put-away, picking, counting, tied to your sales software. Custom work is justified when that link does not exist, or when your business has its rules: lots, dates, cartons and pieces, several depots. **The durations** are those of a constructed example.",
      ], list: [
        "**What management receives**: a plan of the depot with one address per location; stock by location; items ranked by what goes out; picking lists in route order; a scan at each put-away and each pick; errors and lines per hour, week after week.",
        "**What the depot no longer does**: look for an item only one person can find, store wherever there is room, cross the depot for everyday items, deliver the neighbouring reference, close for two days for the stock count.",
        "**What is measured**: lines picked per hour; distance or time per order; errors per thousand lines, by type; items without an address; pallets in the waiting zone for more than two days; count gaps per aisle.",
        "**What Symloop does**: the survey in the depot, the plan and the addresses, the labels, the ranking from your outbound lines, the receiving, put-away and picking screens, offline included, the link with your sales software, then the first review with the team.",
      ], faq: [
        { q: "How do you organise a storage warehouse?", a: "In this order: an address for every location, one picking location per item, the busiest items near the dock, and a scan to confirm each put-away and each pick. The rest follows." },
        { q: "Do we need warehouse management software?", a: "As soon as stock has to be found without the person who stored it. Stock software says how many are left; warehouse software says where. For a small depot, four screens are enough: receiving, put-away, picking, counting." },
        { q: "What is a WMS?", a: "A warehouse management system: it records arrivals and departures, and the precise location of each stock. It proposes where to store, in what order to pick, and has each gesture confirmed by a scan." },
        { q: "How do you address locations?", a: "By zone, aisle, bay and level, with a barcode label on each location. The address must be readable by someone who arrived the day before: short, logical, increasing in the direction of walking." },
        { q: "How do you avoid picking errors?", a: "By having the address then the item scanned on each line: the wrong reference is refused, the forgotten line prevents the order from being closed. For quantities: full cartons, quantity typed in, weight check." },
        { q: "How do you reduce walking in the depot?", a: "By moving the items that come back most on orders closer to the dock, and sorting the picking list in route order. In the example, the same order goes from 192 m to 120 m." },
        { q: "What is ABC ranking?", a: "A sorting of inventory into three categories. For storage, items are ranked by number of order lines: a few make up most of the picks, and those are placed at the mouth of the aisles." },
        { q: "How do you count stock without closing the depot?", a: "With cycle counts: one aisle or one family counted at a time, everyday items more often than the others. With addresses and a scan, the gap is corrected on the spot, location by location." },
        { q: "Can the depot be organised without stopping activity?", a: "Yes: addressing is done aisle by aisle, each one counted along the way, and items are moved in small batches. Scanning is introduced at receiving first, then at picking." },
        { q: "How long does it take to organise a warehouse?", a: "Seven weeks in this page's example, for a depot of a few aisles, survey included, up to a first measurement of errors and lines per hour." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Without that gesture, the stock is in the depot and nowhere." },
      { after: 4, text: "The scan makes nobody more attentive: it makes the error impossible to confirm." },
    ],
    cta: { eyebrow: "Tell us what you store, on what surface, and how an order is picked today: we start with a week in the depot", title: "“It's at the back, on the left”, the same item in four places, kilometres walked to pick, the wrong reference delivered, a stock count that closes the depot, or a depot in Algeria that you follow from France", body: "Symloop builds what holds a depot together: plan and addresses, stock by location, scanned put-away and picking, cycle counts, a link with your sales software. Describe your depot to us, your items, and the error that comes back most often." },
    related: { label: 'Also read', items: [
      { href: L.stock, kind: '2027', name: 'Accurate stock: movement journal, cycle counts' },
      { href: L.lots, kind: '2027', name: 'Traceability by lot: reception, quarantine, recall' },
      { href: L.reappro, kind: '2027', name: 'Replenishment: reorder point, measured lead time' },
      { href: L.tournees, kind: '2027', name: 'Delivery rounds: zones, load, order of stops' },
    ] },
  },
  ar: {
    kind: 'المستودع · الجزائر · 2027', title: "كيف يُنظَّم مستودع تخزين في الجزائر (2027): «هو في الآخر، على اليسار»، السلعة نفسها في أربعة أماكن، كيلومترات لتحضير طلبية، والمرجع الخاطئ يُسلَّم؛ العنونة، التصنيف، المسح، وما نضعه",
    dek: "«نحن تاجر جملة، بمستودع من 1200 متر مربع وأربعة أشخاص في التحضير. الجميع يعرف تقريباً أين الأشياء، إلا حين يغيب الشخص الذي يعرف. السلعة نفسها توجد في ثلاثة أماكن، نسلّم المرجع الخاطئ مرة في اليوم، والموظف الجديد يحتاج شهرين قبل أن يحضّر وحده. كيف يُنظَّم المستودع؟ وهل يلزم برنامج لتسيير المستودع؟» المستودع لا يختلّ تنظيمه لنقص المكان: يختلّ لأن الأشياء لا عنوان لها. وحين يصير لكل موضع عنوان، يصبح الترتيب والتحضير والمراقبة مسألة مسح.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تنظيم المستودع', 'عنونة المواضع', 'التصنيف حسب الخروج', 'تحضير الطلبيات', 'برنامج تسيير المستودع', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** تنظيم المستودع يقوم على أربعة قرارات، بهذا الترتيب. **إعطاء عنوان لكل موضع**: ممر، خانة، مستوى، وملصق يُمسح. **إعطاء كل سلعة موضع سحب واحداً**، لا أكثر. **تقريب السلع الأكثر خروجاً من الرصيف**، حسب المخرجات الفعلية. و**تأكيد كل حركة بمسح**، عند الترتيب كما عند التحضير. وبرنامج المستودع، المعروف بـ" + I('WMS') + "، هو ما يمسك هذه القرارات الأربعة كل يوم. في مثال هذه الصفحة، تنتقل الطلبية نفسها من 192 متراً إلى 120 متراً من المشي، وألف سطر محضَّر من 20 خطأ إلى 3.",
      "هذه الصفحة موجّهة إلى من يسيّر مستودع تاجر جملة، موزّع، مستورد، متجر إلكتروني، أو مصنع، من بضعة ممرات إلى بضعة آلاف من الأمتار المربعة، وإلى من يملك واحداً في الجزائر ويتابعه من فرنسا. التعريفات من مصادر عمومية: نظام تسيير المستودع، تحضير الطلبيات، طرق السحب، التحليل حسب الفئات الثلاث، الجرد الدوري، العبور عبر الرصيف، الرمز الشريطي، ووحدة تسيير المخزون. والمستودع ذو الممرات الأربعة ومسافاته ونسب أخطائه مثال مركَّب. والصفحة لا تتناول قواعد سلامة المباني والتخزين ولا قيادة آليات المناولة، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "مسار السلعة في المستودع", body: [
        "الشكل يتابع سلعة في ست مراحل.",
      ], visual: 'flux', after: [
        "**الاستلام.** رصيف التحميل هو المنطقة من المبنى التي تُحمَّل فيها مركبات البضائع وتُفرَّغ؛ وهناك يدخل المخزون، بوصله وكمياته وحالته. والمراقبة المفصَّلة هي [المراقبة عند الاستلام](" + L.reception + "). **الترتيب.** هو المرحلة المبرزة. البرنامج يقترح عنواناً، يضع الشخص السلعة فيه ويمسح ملصق الموضع: صار للمخزون «أين». ودون هذه الحركة، هو في المستودع وليس في أي مكان. **التحضير.** تحضير الطلبيات هو سحب السلع وجمعها، بكمية محددة، قبل الإرسال، لتلبية طلبيات الزبائن.",
        "**أربع طرق للسحب.** بالقطعة: تؤخذ السلع واحدة واحدة. بالمناطق: كل شخص يسحب في منطقته فقط. بالدفعات: تُجمع في مرور واحد سلع عدة طلبيات. بالموجات: الجمع بين الطريقتين السابقتين. ولمستودع من أربعة أشخاص، يكفي التحضير طلبية بطلبية، أو بدفعات صغيرة من الطلبيات؛ ويُعاد النظر حين يتضاعف الحجم. **التغليف والإرسال.** الطرد يُراقَب، يُلصَق عليه ملصق من البرنامج، انظر [طباعة الملصقات](" + L.etiquettes + ")، ثم يُحمَّل بعكس ترتيب الجولة، انظر [جولات التسليم](" + L.tournees + "). **دون تخزين.** العبور عبر الرصيف ينقل البضاعة مباشرة من الشاحنة الداخلة إلى الشاحنة الخارجة، ملغياً التخزين والتحضير: نافع لما هو مبيع عند وصوله.",
      ] },
      { heading: "ست قواعد لمستودع منظَّم", body: [
        "الشكل يعطي ست قواعد، ما تتفاداه كل واحدة، وكيف يمسكها البرنامج.",
      ], visual: 'regles', after: [
        "**العنوان.** ثلاثة أو أربعة عناصر تكفي: المنطقة، الممر، الخانة، والمستوى. «" + I('B-07-2') + "» يقرؤه شخص وصل أمس. والملصق يحمل رمزاً شريطياً، أي طريقة لتمثيل البيانات في شكل مرئي تقرؤه الآلة: يُمسح، ولا يُنسخ. **موضع سحب واحد.** لكل سلعة عنوان تؤخذ منه، هو نفسه دائماً؛ والفائض يذهب إلى الاحتياط، فوقه أو في الآخر، وينزل حين يفرغ الموضع. وهذا ما ينهي السلعة نفسها في أربعة أماكن. **الوحدة.** وحدة تسيير المخزون نوع متميّز من السلع يُتابَع في المخزون؛ وكرتون الاثنتي عشرة والقطعة وحدتان، لا واحدة.",
        "**المراجع المتشابهة.** برغي 10 وبرغي 12، المنتوج نفسه بنكهتين: إذا رُتّبا جنباً إلى جنب، خُلط بينهما. يُبعَدان، ومسح السلعة يكمل الباقي. **لا شيء دون عنوان.** المنصّة الموضوعة في الممر «مؤقتاً» لها حق في عنوان كذلك: منطقة انتظار، ظاهرة، لا يبقى فيها شيء أكثر من يومين. **الأقدم أولاً.** للمنتجات التي لها تاريخ، يقترح البرنامج العنوان والحصة التي تُخرَج، كما في [التتبّع بالحصة](" + L.lots + "). **رفوف المنصّات.** رف المنصّات نظام تخزين مصمَّم لتخزين البضائع على منصّات؛ والحمولات المسموحة وسلامة المنشآت من شأن صانعها ومن شأن التنظيم، لا من شأن هذه الصفحة.",
      ] },
      { heading: "تقريب ما يخرج أكثر من الرصيف", body: [
        "الشكل يحضّر الطلبية نفسها في المستودع نفسه، مرتَّباً بطريقتين.",
      ], visual: 'chemin', after: [
        "**التحليل حسب الفئات الثلاث.** المعروف بـ" + I('ABC') + "، وهو تقنية تصنّف المخزون في ثلاث فئات. والمثال المعتاد: 20 بالمئة من السلع تصنع 70 بالمئة من القيمة المستهلكة في السنة، 30 بالمئة تصنع 25 بالمئة، والنصف الباقي 5 بالمئة. ولترتيب مستودع، يُطبَّق المنطق نفسه على عدد أسطر الطلبيات: أي السلع تعود أكثر على قوائم التحضير. **ما يغيّره ذلك.** في المخطط، الطلبية من ستة أسطر تتطلب 192 متراً حين تُرتَّب السلع حيث وُجد مكان، و120 متراً حين تكون الأكثر خروجاً في مدخل الممرين الأولين. وبـ80 طلبية في اليوم، " + I('15,4') + " كلم مقابل " + I('9,6') + ".",
        "**حدود المخطط.** المسافات من مخطط مبسَّط، أربعة ممرات وذهاب وإياب في كل واحد؛ ومستودعكم سيعطي أرقاماً أخرى، تُحسب على مخرجاتكم الفعلية. **إعادة الحساب.** التصنيف لا يُنجَز مرة واحدة: الموسم يغيّر السلع الجارية. والبرنامج يقترح كل شهر قائمة قصيرة من عمليات النقل، عشراً أو عشرين، لا ترحيلاً كاملاً. **ترتيب القائمة.** قائمة التحضير تُرتَّب حسب المسار، لا حسب ترتيب الطلبية: وهذا لا يتطلب نقل أي سلعة، وهو غالباً أول ربح. **في الارتفاع.** السلع الجارية في مستوى اليد، الثقيلة في الأسفل، والنادرة في الأعلى: المنطق نفسه، عمودياً. **المخزون.** تقريب سلعة لا ينفع إذا كانت ناقصة: مستوى موضع السحب يُتابَع كـ[إعادة تموين](" + L.reappro + ") داخلية صغيرة، من الاحتياط إلى الأمام.",
      ] },
      { heading: "ما يمسكه برنامج المستودع", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية هي الفرق مع برنامج المخزون.",
      ], visual: 'couches', after: [
        "**التعريف.** نظام تسيير المستودع مجموعة من القواعد والعمليات الغاية منها تنظيم عمل مستودع أو مركز توزيع. ووظيفته الأولى تسجيل دخول المخزون وخروجه؛ ويسجّل كذلك الموضع الدقيق للمخزون داخل المستودع، لاستعمال أفضل للمساحة. **ما يضيفه ذلك.** برنامج التسيير التجاري يعرف أنه بقي 340 كرتوناً؛ وبرنامج المستودع يعرف أن 40 منها في " + I('B-07-1') + " و300 في الاحتياط " + I('R-12-4') + ". وقاعدة الحركات هي التي يصفها [المخزون الصحيح](" + L.stock + ")؛ والموضع يُضاف إليها كبُعد إضافي.",
        "**على هاتف.** شاشات الترتيب والتحضير تدخل في هاتف أو جهاز محمول: سطر في كل مرة، العنوان بخط كبير، ومسح للتأكيد. وفي المستودع، للشبكة مناطق ميتة: يجب أن يواصل التطبيق ويُزامَن بعد ذلك، انظر [التطبيق دون اتصال](" + L.horsligne + "). **الطلبيات.** تصل وحدها إلى طابور التحضير من البيع، الموقع، أو [بوابة طلبيات الزبائن](" + L.portail + ")، مع ساعة قصوى. **الجرد.** الجرد الدوري هو عدّ جزء صغير ومحدد من المخزون؛ ومعظم الطرق تعتمد على التصنيف لعدّ بعض السلع أكثر من غيرها. وبالعناوين، عدّ ممر يأخذ ساعة، لا عطلة نهاية أسبوع.",
      ] },
      { heading: "أخطاء التحضير، وما يوقفها", body: [
        "الشكل يحضّر الأسطر الألف نفسها بالورقة، ثم بالمسح.",
      ], visual: 'erreurs', after: [
        "**ثلاثة أخطاء.** السلعة الخاطئة، وهي تقريباً دائماً مرجع مجاور؛ الكمية الخاطئة؛ والسطر المنسي. في المثال، 20 خطأ في ألف سطر محضَّر بالورقة: كلها تغادر، لأن لا شيء يوقفها بين الرف والشاحنة. **ما يوقفه المسح.** في كل سطر، مسحان: العنوان، ثم السلعة. عنوان خاطئ أو رمز خاطئ يرفض السطر؛ وسطر غير منجَز يمنع إغلاق الطلبية. فتختفي السلع الخاطئة التسع والأسطر المنسية الأربعة؛ وتبقى 3 أخطاء في الكمية.",
        "**الكميات.** هي تقاوم، لأن المسح يؤكد السلعة، لا العدد. ثلاث وسائل: السحب بكراتين كاملة حين يمكن؛ إدخال الكمية المأخوذة بدل عرضها؛ ووزن الطرد النهائي ومقارنته بالوزن المنتظر. **ما يكلّفه الخطأ.** لا يُختصر في القطعة: إرجاع، تسليم ثانٍ، وصل دائن، وزبون صار يراجع كل شيء. قيسوه عندكم: المرتجعات بسبب خطأ تحضير، على شهر، منسوبة إلى الأسطر المحضَّرة. **التكوين.** بالعناوين وقائمة مرتّبة، يحضّر الموظف الجديد وحده أبكر بكثير: المعرفة لم تعد في رأس أقدم شخص. **معيار.** دقة السحب جزء مما يُنظر إليه للحكم على تنفيذ الطلبيات.",
      ] },
      { heading: "سبعة أسابيع، في المثال", body: [
        "سبعة أسابيع لمستودع من بضعة ممرات، دون إيقاف النشاط.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع في المستودع: المخطط الحقيقي، عائلات السلع، شهر من المخرجات، والأخطاء المعروفة. **العنونة.** تجري ممراً بممر، والمستودع يشتغل؛ وكل ممر يوضع ملصقه يُعدّ فوراً ويُربط مخزونه بالعناوين. **التصنيف.** السلع الجارية تُقرَّب بدفعات صغيرة، في المساء. **المسح.** الاستلام والترتيب أولاً، ثم التحضير، فريقاً بعد فريق.",
        "**ما يبقى بعد ذلك.** مخطط للمستودع، مخزون حسب الموضع، قوائم مرتّبة حسب المسار، أخطاء معدودة، وجرد دوري. **جاهز أو على المقاس.** توجد برامج للمستودعات، من الأبسط إلى الأكمل؛ والأنظمة الكبرى مصنوعة للمواقع الكبرى. ولمستودع من بضعة أشخاص، يلزم خصوصاً أربع شاشات، استلام، ترتيب، تحضير، وجرد، مربوطة ببرنامج البيع عندكم. والعمل على المقاس يُبرَّر حين لا يوجد هذا الربط، أو حين تكون لنشاطكم قواعده: حصص، تواريخ، كراتين وقطع، وعدة مستودعات. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقاه الإدارة**: مخطط للمستودع بعنوان لكل موضع؛ مخزون حسب الموضع؛ سلع مصنَّفة حسب مخرجاتها؛ قوائم تحضير حسب المسار؛ مسح عند كل ترتيب وكل سحب؛ والأخطاء والأسطر في الساعة، أسبوعاً بعد أسبوع.",
        "**ما لا يفعله المستودع بعد الآن**: البحث عن سلعة لا يجدها إلا شخص واحد، الترتيب حيث يوجد مكان، عبور المستودع من أجل سلع كل يوم، تسليم المرجع المجاور، والإغلاق يومين من أجل الجرد.",
        "**ما يُقاس**: الأسطر المحضَّرة في الساعة؛ المسافة أو الوقت لكل طلبية؛ الأخطاء لكل ألف سطر، حسب النوع؛ السلع دون عنوان؛ المنصّات في منطقة الانتظار منذ أكثر من يومين؛ وفوارق الجرد لكل ممر.",
        "**ما تفعله Symloop**: المعاينة في المستودع، المخطط والعناوين، الملصقات، التصنيف حسب مخرجاتكم، شاشات الاستلام والترتيب والتحضير، دون اتصال كذلك، الربط ببرنامج البيع عندكم، ثم أول مراجعة مع الفريق.",
      ], faq: [
        { q: "كيف يُنظَّم مستودع تخزين؟", a: "بهذا الترتيب: عنوان لكل موضع، موضع سحب واحد لكل سلعة، السلع الأكثر خروجاً قرب الرصيف، ومسح لتأكيد كل ترتيب وكل سحب. والباقي يتبع." },
        { q: "هل يلزم برنامج لتسيير المستودع؟", a: "منذ أن يجب العثور على المخزون دون الشخص الذي رتّبه. برنامج المخزون يقول كم بقي؛ وبرنامج المستودع يقول أين. ولمستودع صغير، أربع شاشات تكفي: استلام، ترتيب، تحضير، وجرد." },
        { q: "ما هو نظام تسيير المستودع؟", a: "نظام يسجّل الدخول والخروج، والموضع الدقيق لكل مخزون. ويقترح أين يُرتَّب، بأي ترتيب يُحضَّر، ويؤكد كل حركة بمسح." },
        { q: "كيف تُعنوَن المواضع؟", a: "بالمنطقة، الممر، الخانة، والمستوى، مع ملصق برمز شريطي على كل موضع. ويجب أن يقرأ العنوان من وصل أمس: قصير، منطقي، ومتزايد في اتجاه المشي." },
        { q: "كيف تُتفادى أخطاء تحضير الطلبيات؟", a: "بمسح العنوان ثم السلعة في كل سطر: المرجع الخاطئ يُرفض، والسطر المنسي يمنع إغلاق الطلبية. وللكميات: كراتين كاملة، كمية تُدخَل، ومراقبة بالوزن." },
        { q: "كيف تُقلَّص التنقلات في المستودع؟", a: "بتقريب السلع التي تعود أكثر على الطلبيات من الرصيف، وترتيب قائمة التحضير حسب المسار. في المثال، تنتقل الطلبية نفسها من 192 متراً إلى 120 متراً." },
        { q: "ما هو التصنيف حسب الفئات الثلاث؟", a: "تصنيف للمخزون في ثلاث فئات. وللترتيب، تُصنَّف السلع حسب عدد أسطر الطلبيات: قليل منها يصنع معظم عمليات السحب، وهي التي توضع في مدخل الممرات." },
        { q: "كيف يُجرى الجرد دون إغلاق المستودع؟", a: "بجرد دوري: ممر أو عائلة تُعدّ في كل مرة، والسلع الجارية أكثر من غيرها. وبالعناوين والمسح، يُصحَّح الفارق في عين المكان، موضعاً بموضع." },
        { q: "هل يمكن تنظيم المستودع دون إيقاف النشاط؟", a: "نعم: العنونة تجري ممراً بممر، وكل واحد يُعدّ في الطريق، ونقل السلع بدفعات صغيرة. والمسح يوضع أولاً عند الاستلام، ثم عند التحضير." },
        { q: "كم من الوقت لتنظيم مستودع؟", a: "سبعة أسابيع في مثال هذه الصفحة، لمستودع من بضعة ممرات، المعاينة منها، حتى أول قياس للأخطاء وللأسطر في الساعة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "دون هذه الحركة، المخزون في المستودع وليس في أي مكان." },
      { after: 4, text: "المسح لا يجعل أحداً أكثر انتباهاً: يجعل الخطأ مستحيل التأكيد." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا تخزّنون، على أي مساحة، وكيف تُحضَّر الطلبية اليوم: نبدأ بأسبوع في المستودع", title: "«هو في الآخر، على اليسار»، السلعة نفسها في أربعة أماكن، كيلومترات للتحضير، المرجع الخاطئ يُسلَّم، جرد يغلق المستودع، أو مستودع في الجزائر تتابعونه من فرنسا", body: "Symloop تبني ما يمسك المستودع: المخطط والعناوين، المخزون حسب الموضع، الترتيب والتحضير بالمسح، الجرد الدوري، والربط ببرنامج البيع عندكم. صِفوا لنا مستودعكم، سلعكم، والخطأ الذي يعود أكثر." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.stock, kind: '2027', name: 'المخزون الصحيح: سجل الحركات والجرد الدوري' },
      { href: L.lots, kind: '2027', name: 'التتبّع بالحصة: الاستلام، الحجر، والسحب' },
      { href: L.reappro, kind: '2027', name: 'إعادة التموين: نقطة الطلب والأجل المقيس' },
      { href: L.tournees, kind: '2027', name: 'جولات التسليم: المناطق، الحمولة، وترتيب التوقفات' },
    ] },
  },
};

const KEYWORDS = "comment organiser un entrepôt de stockage, comment organiser un entrepôt, comment gérer un entrepôt, comment éviter les erreurs de préparation de commande, logiciel de gestion d'entrepôt algérie 2027, logiciel wms algérie, logiciel de gestion logistique, adressage des emplacements, classement abc, préparation de commandes, how to organise a warehouse, warehouse management software algeria, wms, picking errors, slotting, location addresses, كيف يُنظَّم المستودع, برنامج تسيير المستودع الجزائر, تحضير الطلبيات, عنونة المواضع, أخطاء التحضير, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
