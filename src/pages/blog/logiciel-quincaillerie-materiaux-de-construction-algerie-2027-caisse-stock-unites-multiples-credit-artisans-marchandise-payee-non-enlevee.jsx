import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-quincaillerie-materiaux-de-construction-algerie-2027-caisse-stock-unites-multiples-credit-artisans-marchandise-payee-non-enlevee.mjs';

const SLUG = 'logiciel-quincaillerie-materiaux-de-construction-algerie-2027-caisse-stock-unites-multiples-credit-artisans-marchandise-payee-non-enlevee';
const FIGURES = ['unites', 'vente', 'compte', 'situations', 'couches', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  fiche: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  superette: '/blog/logiciel-superette-supermarche-algerie-2027-caisse-hors-ligne-code-barres-balance-dlc-marge-cloture/',
  batiment: '/blog/logiciel-entreprise-batiment-btp-algerie-2027-devis-metre-suivi-de-chantier-situations-de-travaux-achats-pointage-marge-par-chantier/',
  gescom: '/blog/logiciel-gestion-commerciale-algerie-2027-devis-commande-bon-de-livraison-facture-stock-reglements-erp-ou-pas-sans-ressaisie/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  france: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  sessions: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
};

const CONTENT = {
  fr: {
    kind: 'Quincaillerie et matériaux · Algérie · 2027', title: "Logiciel quincaillerie en Algérie (2027) : caisse, stock et crédit clients pour quincaillerie et matériaux de construction, quand la même vis se vend à la pièce, à la boîte et au carton",
    dek: "« J'ai une quincaillerie et un dépôt de matériaux : plus de quinze mille articles, dont la moitié sans code-barres. La même vis se vend à la pièce, à la boîte et au carton, le câble au mètre, le ciment au sac et à la palette, et mon stock est faux dès la première semaine. Les artisans prennent à crédit sur un carnet, des clients paient deux cents sacs et n'en enlèvent que cinquante, et je ne sais plus ce qui est encore à vendre dans le dépôt. Quel logiciel me faut-il ? » Une caisse de supérette ne suffit pas. Il faut un article à plusieurs unités sur un seul stock, une recherche qui trouve sans code-barres, un compte par client et par chantier avec un plafond, et la marchandise payée, pas encore enlevée, sortie du stock à vendre.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de quincaillerie', 'Matériaux de construction', 'Logiciel de caisse', 'Gestion de stock', 'Crédit clients', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de quincaillerie et de matériaux de construction se juge sur quatre choses qu'une caisse ordinaire ne fait pas. **Plusieurs unités, un seul stock** : la vis achetée au carton, vendue à la boîte et à la pièce, le câble vendu au mètre, comptés dans une seule unité. **Une recherche sans code-barres** : nom, dimension, famille, en trois frappes. **Un compte par client et par chantier** : bons, versements, plafond, relevé. **La marchandise payée et pas encore enlevée**, réservée au dépôt. Autour : des prix par catégorie de client, le devis de chantier transformé en vente, le bon d'enlèvement entre comptoir et dépôt, et la marge recalculée quand le prix d'achat change.",
      "Ce guide s'adresse au gérant d'une quincaillerie, d'un dépôt de matériaux de construction, d'un magasin d'électricité, de plomberie ou de peinture, de quelques milliers à quelques dizaines de milliers d'articles, et au fondateur installé en France qui veut suivre le magasin familial à distance. Les notions citées viennent de sources publiques : l'unité de gestion de stock, le crédit commercial. Les quantités, les prix et les soldes des figures sont un exemple construit, pas des prix de marché. Ce guide ne traite ni des règles de facturation ni de fiscalité : elles se voient avec votre comptable.",
    ],
    sections: [
      { heading: "Un article, trois unités, un seul stock", body: [
        "La figure prend une vis achetée au carton et vendue à la boîte et à la pièce, puis applique la même règle au câble vendu au mètre.",
      ], visual: 'unites', after: [
        "**Le problème.** Dans beaucoup de magasins, la même vis existe trois fois dans le logiciel : « vis 4 × 40 carton », « vis 4 × 40 boîte », « vis 4 × 40 pièce ». Chaque ligne a son stock, et aucune ne sait qu'on a ouvert un carton pour remplir le présentoir. Au bout d'une semaine, les trois stocks sont faux, et l'on recommande un article qui dort au fond du dépôt. **La règle.** Une référence de stock désigne, dans sa définition courante, l'unité dans laquelle le stock d'un article est géré. On choisit donc une seule unité de stock, la plus petite que l'on vend, ici la pièce, et l'on déclare les autres comme des multiples : une boîte vaut 100 pièces, un carton vaut 20 boîtes. Le carton acheté ajoute 2 000 pièces ; la boîte vendue en retire 100.",
        "**Dans l'exemple.** Deux cartons, sept boîtes et quarante pièces font 4 740 pièces. Le client prend trois boîtes et vingt-cinq pièces : la caisse retire 325 pièces, il en reste 4 415, que l'écran affiche de nouveau en cartons, boîtes et pièces. Le prix suit la même logique : 4,50 DA de revient par pièce, 6,50 DA à la boîte, 8 DA à l'unité, et la marge se lit pour chaque unité vendue. **Au mètre, au kilo, au sac.** Le câble, la chaîne et le tuyau se gèrent en mètres, avec des décimales : trois tourets de 100 m et 37 m font 337 m, une vente de 12,5 m en laisse 324,5. Les pointes se gèrent au kilo, le ciment au sac, avec la palette comme multiple. La mécanique générale des variantes et des conditionnements est décrite dans [le guide sur la fiche produit](" + L.fiche + ").",
      ] },
      { heading: "Une vente au comptoir, en six temps", body: [
        "Le quatrième temps est accentué : c'est là que la vente devient soit un encaissement, soit une ligne sur le compte d'un chantier.",
      ], visual: 'vente', after: [
        "**Chercher.** La moitié des articles n'a pas de code-barres, et le client demande « un coude de vingt » ou « la même que la dernière fois ». La recherche accepte donc un morceau de nom, une dimension ou une famille, et propose en trois frappes ; les articles sans code reçoivent une étiquette imprimée au magasin. **Choisir l'unité.** Le vendeur choisit pièce, boîte, mètre ou sac sur la même fiche ; il ne change pas d'article. **Appliquer le prix.** Le particulier, l'artisan et le revendeur n'ont pas le même prix : la catégorie du client choisit le tarif, et la remise du vendeur est bornée par une limite que le gérant a fixée.",
        "**Régler.** Comptant, la vente passe en caisse, avec les contrôles de session décrits dans [le guide sur la caisse qui ne tombe pas juste](" + L.sessions + "). À crédit, elle devient un bon porté au compte du client, sur le chantier qu'il indique. **Enlever.** Pour les matériaux lourds, la caisse envoie un bon d'enlèvement à l'écran du dépôt ; le magasinier valide ce qui est chargé, pas ce qui est payé. **Solder.** Ce qui est payé et pas encore chargé reste dû au client, article par article, jusqu'à la dernière sortie. Et quand internet coupe, la caisse continue et se synchronise ensuite, comme dans [le guide pour la supérette](" + L.superette + ").",
      ] },
      { heading: "Le compte d'un artisan : un plafond, un relevé, 70 sacs payés qui attendent", body: [
        "La figure suit le compte d'un artisan pendant un mois, puis 200 sacs de ciment payés d'avance.",
      ], visual: 'compte', after: [
        "**Le crédit.** Vendre à crédit à des professionnels est une pratique ancienne du commerce : le crédit commercial est le prêt qu'un commerçant accorde à un autre quand des biens sont achetés à crédit, et les entreprises s'en servent couramment comme financement à court terme. Dans une quincaillerie, il vit dans un carnet. Le compte fait la même chose, en mieux : chaque bon et chaque versement est une ligne datée, rattachée à un chantier, et le solde se recalcule seul. Dans l'exemple, le plafond est de 300 000 DA ; au quatrième bon, le solde atteint 335 000 DA, et la caisse ne valide pas sans l'accord du gérant, donné depuis son téléphone. Le versement du 27 ramène le solde à 135 000 DA.",
        "**Le relevé.** Le client reçoit un relevé par chantier, à la date du jour, au lieu d'une addition refaite devant lui. Les échéances, les chèques et les relances sont détaillés dans [le guide sur le crédit client](" + L.credit + "). **Payé, pas encore enlevé.** Un client règle 200 sacs de ciment et en charge 50 ; il revient pour 80, il en reste 70. Tant que ces 70 sacs figurent dans le stock à vendre, le magasin risque de les vendre une seconde fois. Le logiciel les réserve dès le paiement : sur 500 sacs au dépôt, 430 sont à vendre. C'est la réservation décrite dans [le guide sur le stock faux](" + L.stock + "), appliquée au dépôt de matériaux.",
      ] },
      { heading: "Six situations de comptoir, et ce que fait le logiciel", body: [
        "La figure compare, pour six situations de tous les jours, ce qui se passe aujourd'hui et ce que fait le logiciel.",
      ], visual: 'situations', after: [
        "**Les prix qui changent.** Le fer, le ciment et le cuivre changent de prix d'une livraison à l'autre. À la réception, le logiciel recalcule le prix de revient et signale les articles dont le prix de vente ne couvre plus la marge voulue. Dans l'exemple de la vis, si le carton passe de 9 000 à 10 400 DA, le revient passe de 4,50 à 5,20 DA la pièce : la boîte vendue 650 DA ne laisse plus que 1,30 DA par pièce au lieu de 2,00, soit 35 % de marge en moins, visible le jour de la réception et non à l'inventaire. **Le devis de chantier.** Un artisan apporte une liste ; le devis se fait depuis les mêmes fiches, garde ses prix pendant la durée que vous fixez, et se transforme en vente ligne par ligne, au rythme des enlèvements. Pour l'entreprise de bâtiment en face, c'est l'achat rattaché au chantier décrit dans [le guide sur le logiciel de bâtiment](" + L.batiment + ").",
        "**Les retours.** Les sacs et les boîtes non utilisés reviennent : le retour se rattache au bon d'origine, remet la marchandise en stock et corrige le solde du client dans le même geste. **Comptoir et dépôt.** Quand le dépôt est de l'autre côté de la rue ou de la ville, le bon d'enlèvement voyage seul ; le magasinier voit ce qu'il doit charger, et la sortie n'est comptée qu'au chargement.",
      ] },
      { heading: "Un logiciel de quincaillerie, en cinq couches", body: [
        "La couche accentuée est celle des comptes et des chantiers : c'est elle qui remplace le carnet.",
      ], visual: 'couches', after: [
        "**Articles et unités** : une fiche par produit, ses unités, sa règle de conversion, sa famille, ses dimensions ; c'est le travail le plus long et celui dont tout dépend. **Comptoir et caisse** : la vente rapide, les tarifs par catégorie, les devis, la caisse hors ligne. **Comptes et chantiers** : le crédit, les plafonds, les relevés.",
        "**Dépôt et enlèvements** : bons, sorties partielles, réservations, livraisons, retours. **Achats, prix et marge** : commandes, réceptions, prix de revient, seuils de réapprovisionnement, selon la méthode du [guide sur le réapprovisionnement](" + L.reappro + "). **Prêt à l'emploi ou sur mesure.** Un logiciel de gestion commerciale standard couvre la chaîne des documents, comme le montre [le guide sur la gestion commerciale](" + L.gescom + ") ; ce qui décide, pour une quincaillerie, ce sont les quatre points du début : les unités, la recherche, le compte par chantier, la marchandise à enlever. Essayez-les sur vingt de vos articles avant de choisir.",
      ] },
      { heading: "Une quincaillerie équipée en 2027, en semaines", body: [
        "Six semaines dans l'exemple, dont deux pour le fichier des articles.",
      ], visual: 'calendrier', after: [
        "**Semaines 1 et 2, le fichier articles.** C'est la moitié du projet. On part des listes des fournisseurs et des fichiers existants, on fixe les familles et les unités, puis on complète rayon par rayon. Ordre de grandeur de l'exemple : sur 15 000 articles, 9 000 viennent des listes importées ; les 6 000 autres, saisis par deux personnes à 150 articles par jour chacune, demandent 20 jours ouvrés. Les deux premières semaines couvrent les familles qui font l'essentiel des ventes ; le reste se poursuit en parallèle des semaines suivantes. **Semaine 3, le stock de départ** : comptage par rayon et par zone du dépôt, dans l'unité de stock.",
        "**Semaine 4, les comptes clients** : le carnet est repris client par client, avec le solde, le chantier, le plafond et la marchandise restant à enlever. **Semaine 5, comptoir et dépôt**, en parallèle de l'ancienne méthode, puis seuls. **Semaine 6, le tableau du gérant.** Depuis la France ou depuis un autre magasin, le suivi à distance se fait comme dans [le guide pour gérer son commerce depuis la France](" + L.france + ").",
      ], list: [
        "**Ce que le gérant voit** : les ventes et la marge par famille, le solde de chaque client et de chaque chantier, la marchandise payée restant à enlever, les articles sous le seuil.",
        "**Ce que le magasin ne fait plus** : tenir trois stocks pour la même vis, chercher un prix dans un cahier, refaire l'addition du carnet devant le client, vendre deux fois les mêmes sacs.",
        "**Ce qui est mesuré** : écart d'inventaire par famille, marge par article après chaque réception, soldes au-dessus du plafond, marchandise à enlever depuis plus de trente jours.",
        "**Ce que fait Symloop** : le fichier articles avec vos vendeurs, la caisse et l'écran du dépôt, les comptes par chantier repris du carnet, l'application du gérant, la reprise des données, puis l'entretien.",
      ], faq: [
        { q: "Quel logiciel pour une quincaillerie en Algérie ?", a: "Un logiciel de caisse et de stock qui gère plusieurs unités par article, la recherche sans code-barres, un compte par client et par chantier, et la marchandise payée restant à enlever. Une caisse conçue pour l'alimentation ne fait en général ni la vente au mètre ni le compte par chantier. Vérifiez ces quatre points sur vingt de vos articles avant de choisir." },
        { q: "Comment gérer un article vendu à la pièce, à la boîte ou au mètre ?", a: "En créant un seul article avec une unité de stock, la pièce ou le mètre, et des unités multiples : la boîte de 100, le carton de 2 000, le touret de 100 m. L'achat d'un carton ajoute 2 000 pièces, la vente d'une boîte en retire 100, la vente de 12,5 m retire 12,5 m. Le stock reste unique et s'affiche dans l'unité que vous voulez." },
        { q: "Comment gérer des milliers d'articles sans code-barres ?", a: "Par une recherche sur le nom, la dimension et la famille, qui propose dès les premières lettres, et par des étiquettes imprimées au magasin pour les articles les plus vendus. Un classement par familles et par dimensions bien fait compte plus que le lecteur de codes." },
        { q: "Comment suivre le crédit des artisans et des entrepreneurs ?", a: "Avec un compte par client, découpé par chantier : chaque bon et chaque versement est une ligne datée, le solde se calcule seul, un plafond déclenche l'accord du gérant, et le relevé s'envoie au client. Le carnet ne disparaît pas du jour au lendemain : on le reprend client par client." },
        { q: "Que faire de la marchandise payée que le client n'a pas encore enlevée ?", a: "La réserver dès le paiement : elle reste au dépôt mais sort du stock à vendre. Chaque enlèvement partiel diminue le reste à enlever, que le client et le magasinier voient de la même façon. C'est ce qui évite de vendre deux fois les mêmes sacs." },
        { q: "Peut-on faire des devis pour un chantier et les transformer en vente ?", a: "Oui. Le devis se compose depuis les fiches articles, avec le tarif du client, garde ses prix pendant la durée que vous fixez, puis se transforme en vente, en une fois ou ligne par ligne au rythme des enlèvements." },
        { q: "Le logiciel fonctionne-t-il quand internet coupe ?", a: "Il le doit. La caisse et l'écran du dépôt continuent sur le réseau du magasin et se synchronisent au retour de la connexion. Le suivi à distance, lui, attend la synchronisation." },
        { q: "Combien de temps faut-il pour mettre en place le logiciel ?", a: "Six semaines dans notre exemple, dont deux pour le fichier des articles, qui est la moitié du travail. La saisie complète d'un catalogue de 15 000 articles se poursuit en parallèle : on commence par les familles qui font l'essentiel des ventes." },
        { q: "Combien coûte un logiciel de quincaillerie ?", a: "Cela dépend du nombre de postes de caisse, du nombre de dépôts, de la reprise du fichier articles et du carnet, et du choix entre un logiciel standard et un développement adapté. Le poste le plus sous-estimé n'est pas le logiciel, c'est le fichier articles : prévoyez le temps de vos vendeurs. Nous chiffrons après avoir vu vingt articles, un carnet et une journée de comptoir." },
        { q: "Peut-on suivre la quincaillerie depuis la France ?", a: "Oui : les ventes du jour, la marge, les soldes clients et la marchandise à enlever se lisent sur le téléphone, et les accords au-delà du plafond se donnent à distance. Les décisions restent au gérant ; le magasin n'attend plus un appel pour vendre." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Trois articles pour la même vis donnent trois stocks faux ; un article à trois unités donne un stock juste." },
      { after: 2, text: "Tant que les sacs payés figurent dans le stock à vendre, le magasin risque de les vendre une seconde fois." },
    ],
    cta: { eyebrow: "Prenez vingt articles difficiles, la vis, le câble, le ciment, le fer, et une page de votre carnet de crédit : nous vous montrons comment ils se gèrent, unité par unité et chantier par chantier", title: "Quincaillerie, dépôt de matériaux de construction, magasin d'électricité ou de plomberie, ou fondateur en France qui suit le magasin familial : nous construisons le fichier articles, la caisse, les comptes par chantier et l'écran du dépôt", body: "Un fichier articles fait avec vos vendeurs, un stock compté dans une seule unité, un carnet repris client par client, un dépôt qui sait ce qui est déjà vendu. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.batiment, kind: '2027', name: 'Logiciel pour entreprise de bâtiment : devis, suivi de chantier, situations de travaux' },
      { href: L.gescom, kind: '2027', name: 'Logiciel de gestion commerciale : une seule chaîne du devis au règlement' },
      { href: L.credit, kind: '2027', name: 'Crédit client : le client doit 400 000 dinars, depuis quand ?' },
      { href: L.stock, kind: '2027', name: 'Stock faux dans l’application : mouvements, réservations, inventaire tournant' },
    ] },
  },
  en: {
    kind: 'Hardware and materials · Algeria · 2027', title: "Hardware store software in Algeria (2027): till, stock and customer credit for hardware and building-materials stores, for when the same screw sells by the piece, the box and the carton",
    dek: "“I run a hardware store and a building-materials yard: more than fifteen thousand items, half of them without a barcode. The same screw sells by the piece, by the box and by the carton, cable by the metre, cement by the bag and by the pallet, and my stock is wrong within the first week. Tradesmen buy on credit in a notebook, customers pay for two hundred bags and collect only fifty, and I no longer know what is still for sale in the yard. Which software do I need?” A grocery till is not enough. You need one item with several units on a single stock, a search that finds things without a barcode, an account per customer and per site with a limit, and goods that are paid for but not yet collected taken out of the stock for sale.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Hardware store software', 'Building materials', 'Point-of-sale software', 'Stock management', 'Customer credit', 'Algeria 2027'],
    intro: [
      "**Short answer.** Software for a hardware and building-materials store is judged on four things an ordinary till does not do. **Several units, one stock**: the screw bought by the carton and sold by the box and by the piece, the cable sold by the metre, all counted in a single unit. **A search without barcodes**: name, size, family, in three keystrokes. **An account per customer and per site**: slips, payments, limit, statement. **Goods paid for and not yet collected**, reserved in the yard. Around these: prices by customer category, the site quotation turned into a sale, the collection slip between counter and yard, and the margin recalculated when the purchase price changes.",
      "This guide is for the manager of a hardware store, a building-materials yard, or an electrical, plumbing or paint shop, with a few thousand to a few tens of thousands of items, and for the founder based in France who wants to follow the family store from a distance. The notions quoted come from public sources: the stock keeping unit, trade credit. The quantities, prices and balances in the figures are a constructed example, not market prices. This guide covers neither invoicing rules nor taxation: those are matters for your accountant.",
    ],
    sections: [
      { heading: "One item, three units, one stock", body: [
        "The figure takes a screw bought by the carton and sold by the box and by the piece, then applies the same rule to cable sold by the metre.",
      ], visual: 'unites', after: [
        "**The problem.** In many stores, the same screw exists three times in the software: “screw 4 × 40 carton”, “screw 4 × 40 box”, “screw 4 × 40 piece”. Each line has its own stock, and none of them knows that a carton was opened to fill the display. After a week, the three stocks are wrong, and an item sleeping at the back of the yard gets reordered. **The rule.** A stock keeping unit is, in its usual definition, the unit in which the stock of an item is managed. So you choose a single stock unit, the smallest one you sell, here the piece, and declare the others as multiples: a box is worth 100 pieces, a carton is worth 20 boxes. The carton bought adds 2,000 pieces; the box sold removes 100.",
        "**In the example.** Two cartons, seven boxes and forty pieces make 4,740 pieces. The customer takes three boxes and twenty-five pieces: the till removes 325 pieces, 4,415 remain, and the screen shows them again as cartons, boxes and pieces. The price follows the same logic: 4.50 DZD cost per piece, 6.50 DZD by the box, 8 DZD singly, and the margin is read for each unit sold. **By the metre, the kilo, the bag.** Cable, chain and hose are managed in metres, with decimals: three 100 m reels and 37 m make 337 m, a sale of 12.5 m leaves 324.5. Nails are managed by the kilo, cement by the bag, with the pallet as a multiple. The general mechanics of variants and packagings are described in [the guide to the product record](" + L.fiche + ").",
      ] },
      { heading: "A counter sale, in six steps", body: [
        "The fourth step is accented: that is where the sale becomes either a cash receipt or a line on a site account.",
      ], visual: 'vente', after: [
        "**Search.** Half the items have no barcode, and the customer asks for “a twenty elbow” or “the same as last time”. So the search accepts part of a name, a size or a family, and suggests within three keystrokes; items without a code get a label printed in the store. **Pick the unit.** The salesperson chooses piece, box, metre or bag on the same record; they do not switch items. **Apply the price.** The private customer, the tradesman and the reseller do not pay the same price: the customer's category selects the price list, and the salesperson's discount is bounded by a limit set by the manager.",
        "**Settle.** In cash, the sale goes through the till, with the session checks described in [the guide to the till that never balances](" + L.sessions + "). On credit, it becomes a slip booked to the customer's account, on the site they name. **Collect.** For heavy materials, the till sends a collection slip to the yard screen; the storekeeper confirms what is loaded, not what is paid. **Close out.** What is paid for and not yet loaded stays owed to the customer, item by item, until the last pick-up. And when the internet drops, the till carries on and synchronises afterwards, as in [the guide for the mini-market](" + L.superette + ").",
      ] },
      { heading: "A tradesman's account: a limit, a statement, 70 paid bags waiting", body: [
        "The figure follows a tradesman's account for one month, then 200 bags of cement paid for in advance.",
      ], visual: 'compte', after: [
        "**Credit.** Selling on credit to professionals is an old practice in trade: trade credit is the loan one trader extends to another when goods are bought on credit, and businesses commonly use it as short-term financing. In a hardware store, it lives in a notebook. The account does the same thing, better: every slip and every payment is a dated line, tied to a site, and the balance recalculates itself. In the example, the limit is 300,000 DZD; at the fourth slip, the balance reaches 335,000 DZD, and the till does not confirm without the manager's approval, given from their phone. The payment on the 27th brings the balance back to 135,000 DZD.",
        "**The statement.** The customer receives a statement per site, as of today, instead of a sum redone in front of them. Due dates, cheques and reminders are detailed in [the guide to customer credit](" + L.credit + "). **Paid, not yet collected.** A customer pays for 200 bags of cement and loads 50; they come back for 80, and 70 remain. As long as those 70 bags sit in the stock for sale, the store risks selling them a second time. The software reserves them at payment: of 500 bags in the yard, 430 are for sale. This is the reservation described in [the guide to wrong stock](" + L.stock + "), applied to a materials yard.",
      ] },
      { heading: "Six counter situations, and what the software does", body: [
        "The figure compares, for six everyday situations, what happens today and what the software does.",
      ], visual: 'situations', after: [
        "**Prices that change.** Steel, cement and copper change price from one delivery to the next. At receipt, the software recalculates the cost price and flags the items whose selling price no longer covers the intended margin. In the screw example, if the carton goes from 9,000 to 10,400 DZD, the cost goes from 4.50 to 5.20 DZD a piece: the box sold at 650 DZD leaves only 1.30 DZD per piece instead of 2.00, that is 35 % less margin, visible on the day of receipt and not at the stock count. **The site quotation.** A tradesman brings a list; the quotation is built from the same records, keeps its prices for the period you set, and turns into a sale line by line, at the pace of the pick-ups. For the construction company on the other side, this is the purchase booked to the site described in [the guide to construction software](" + L.batiment + ").",
        "**Returns.** Unused bags and boxes come back: the return is tied to the original slip, puts the goods back in stock and corrects the customer's balance in the same action. **Counter and yard.** When the yard is across the street or across town, the collection slip travels by itself; the storekeeper sees what to load, and the issue is counted only at loading.",
      ] },
      { heading: "Hardware store software, in five layers", body: [
        "The accented layer is accounts and sites: it is what replaces the notebook.",
      ], visual: 'couches', after: [
        "**Items and units**: one record per product, its units, its conversion rule, its family, its sizes; it is the longest job and the one everything depends on. **Counter and till**: fast sale, price lists by category, quotations, offline till. **Accounts and sites**: credit, limits, statements.",
        "**Yard and collections**: slips, partial pick-ups, reservations, deliveries, returns. **Purchasing, prices and margin**: orders, receipts, cost price, reorder thresholds, following the method in [the guide to replenishment](" + L.reappro + "). **Off the shelf or made to measure.** Standard sales-management software covers the document chain, as [the guide to sales management](" + L.gescom + ") shows; what decides, for a hardware store, are the four points from the start: units, search, the account per site, goods left to collect. Try them on twenty of your items before choosing.",
      ] },
      { heading: "A hardware store equipped in 2027, in weeks", body: [
        "Six weeks in the example, two of them for the item file.",
      ], visual: 'calendrier', after: [
        "**Weeks 1 and 2, the item file.** It is half the project. You start from supplier lists and existing files, fix the families and the units, then complete aisle by aisle. Order of magnitude in the example: of 15,000 items, 9,000 come from imported lists; the other 6,000, keyed by two people at 150 items a day each, take 20 working days. The first two weeks cover the families that make most of the sales; the rest carries on in parallel with the following weeks. **Week 3, opening stock**: count by aisle and by yard zone, in the stock unit.",
        "**Week 4, customer accounts**: the notebook is taken over customer by customer, with the balance, the site, the limit and the goods left to collect. **Week 5, counter and yard**, alongside the old method, then alone. **Week 6, the manager's board.** From France or from another store, remote follow-up works as in [the guide to running your shop from France](" + L.france + ").",
      ], list: [
        "**What the manager sees**: sales and margin by family, the balance of every customer and every site, paid goods left to collect, items under the threshold.",
        "**What the store no longer does**: keep three stocks for the same screw, look up a price in a notebook, redo the notebook's sum in front of the customer, sell the same bags twice.",
        "**What is measured**: stock-count difference by family, margin per item after each receipt, balances above the limit, goods left to collect for more than thirty days.",
        "**What Symloop does**: the item file with your sales staff, the till and the yard screen, the site accounts taken over from the notebook, the manager's app, the data migration, then upkeep.",
      ], faq: [
        { q: "Which software for a hardware store in Algeria?", a: "Till and stock software that handles several units per item, search without barcodes, an account per customer and per site, and paid goods left to collect. A till designed for groceries generally does neither sale by the metre nor the account per site. Check those four points on twenty of your items before choosing." },
        { q: "How do you manage an item sold by the piece, the box or the metre?", a: "By creating a single item with one stock unit, the piece or the metre, and multiple units: the box of 100, the carton of 2,000, the 100 m reel. Buying a carton adds 2,000 pieces, selling a box removes 100, selling 12.5 m removes 12.5 m. The stock stays single and is displayed in whichever unit you want." },
        { q: "How do you manage thousands of items without barcodes?", a: "With a search on name, size and family that suggests from the first letters, and with labels printed in the store for the best-selling items. A well-made classification by family and size matters more than the barcode reader." },
        { q: "How do you track credit given to tradesmen and contractors?", a: "With an account per customer, split by site: every slip and every payment is a dated line, the balance calculates itself, a limit triggers the manager's approval, and the statement is sent to the customer. The notebook does not vanish overnight: it is taken over customer by customer." },
        { q: "What do you do with goods the customer has paid for but not yet collected?", a: "Reserve them at payment: they stay in the yard but leave the stock for sale. Each partial pick-up reduces what is left to collect, which the customer and the storekeeper see in the same way. That is what prevents selling the same bags twice." },
        { q: "Can we make quotations for a site and turn them into sales?", a: "Yes. The quotation is built from the item records, with the customer's price list, keeps its prices for the period you set, then turns into a sale, in one go or line by line at the pace of the pick-ups." },
        { q: "Does the software work when the internet drops?", a: "It has to. The till and the yard screen carry on over the store's network and synchronise when the connection returns. Remote follow-up waits for the synchronisation." },
        { q: "How long does it take to set up the software?", a: "Six weeks in our example, two of them for the item file, which is half the work. Full entry of a 15,000-item catalogue carries on in parallel: you start with the families that make most of the sales." },
        { q: "How much does hardware store software cost?", a: "It depends on the number of tills, the number of yards, the migration of the item file and the notebook, and the choice between standard software and adapted development. The most underestimated item is not the software, it is the item file: plan for your sales staff's time. We quote after seeing twenty items, a notebook and a day at the counter." },
        { q: "Can the hardware store be followed from France?", a: "Yes: the day's sales, the margin, customer balances and goods left to collect can be read on the phone, and approvals above the limit are given remotely. Decisions stay with the manager; the store no longer waits for a call to sell." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Three items for the same screw give three wrong stocks; one item with three units gives a right one." },
      { after: 2, text: "As long as the paid bags sit in the stock for sale, the store risks selling them a second time." },
    ],
    cta: { eyebrow: "Take twenty difficult items, the screw, the cable, the cement, the steel, and one page of your credit notebook: we show you how they are managed, unit by unit and site by site", title: "Hardware store, building-materials yard, electrical or plumbing shop, or founder in France following the family store: we build the item file, the till, the site accounts and the yard screen", body: "An item file built with your sales staff, a stock counted in a single unit, a notebook taken over customer by customer, a yard that knows what is already sold. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.batiment, kind: '2027', name: 'Software for a construction company: quotations, site tracking, progress claims' },
      { href: L.gescom, kind: '2027', name: 'Sales management software: one chain from quotation to payment' },
      { href: L.credit, kind: '2027', name: 'Customer credit: the customer owes 400,000 dinars, since when?' },
      { href: L.stock, kind: '2027', name: 'Wrong stock in the application: movements, reservations, cycle counting' },
    ] },
  },
  ar: {
    kind: 'الخردوات ومواد البناء · الجزائر · 2027', title: "برنامج محل الخردوات ومواد البناء في الجزائر (2027): الصندوق، المخزون ودَين الزبائن، حين يُباع البرغي نفسه بالقطعة وبالعلبة وبالكرتونة",
    dek: "«عندي محل خردوات ومستودع لمواد البناء: أكثر من خمسة عشر ألف صنف، نصفها بلا رمز شريطي. البرغي نفسه يُباع بالقطعة وبالعلبة وبالكرتونة، والكابل بالمتر، والإسمنت بالكيس وبالباليت، ومخزوني خاطئ منذ الأسبوع الأول. الحرفيون يأخذون بالدَّين في دفتر، وزبائن يدفعون ثمن مئتي كيس ولا يستلمون إلا خمسين، ولم أعد أعرف ما بقي للبيع في المستودع. أي برنامج يلزمني؟» صندوق محل المواد الغذائية لا يكفي. يلزم صنف بعدة وحدات على مخزون واحد، وبحث يجد دون رمز شريطي، وحساب لكل زبون ولكل ورشة بسقف، وبضاعة مدفوعة لم تُستلَم بعد تُسحب من المخزون المعروض للبيع.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج محل الخردوات', 'مواد البناء', 'برنامج الصندوق', 'تسيير المخزون', 'دَين الزبائن', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج محل الخردوات ومواد البناء يُحكم عليه بأربعة أشياء لا يفعلها صندوق عادي. **عدة وحدات، مخزون واحد**: البرغي الذي يُشترى بالكرتونة ويُباع بالعلبة وبالقطعة، والكابل الذي يُباع بالمتر، يُحسبان بوحدة واحدة. **بحث دون رمز شريطي**: الاسم، المقاس، العائلة، بثلاث نقرات. **حساب لكل زبون ولكل ورشة**: وصولات، دفعات، سقف، وكشف. **البضاعة المدفوعة التي لم تُستلَم بعد**، محجوزة في المستودع. وحول ذلك: أسعار حسب فئة الزبون، عرض سعر الورشة الذي يتحوّل إلى بيع، وصل الاستلام بين المحل والمستودع، والهامش الذي يُعاد حسابه حين يتغيّر سعر الشراء.",
      "هذا الدليل موجَّه إلى مسيّر محل خردوات، أو مستودع مواد بناء، أو محل كهرباء أو ترصيص أو دهن، فيه من بضعة آلاف إلى بضع عشرات الآلاف من الأصناف، وإلى المؤسس المقيم في فرنسا الذي يريد متابعة محل العائلة عن بعد. المفاهيم المذكورة آتية من مصادر علنية: وحدة تسيير المخزون، والائتمان التجاري. الكميات والأسعار والأرصدة في الأشكال مثال مركَّب، وليست أسعار السوق. هذا الدليل لا يتناول قواعد الفوترة ولا الجباية: تُراجَع مع محاسبكم.",
    ],
    sections: [
      { heading: "صنف واحد، ثلاث وحدات، مخزون واحد", body: [
        "الشكل يأخذ برغياً يُشترى بالكرتونة ويُباع بالعلبة وبالقطعة، ثم يطبّق القاعدة نفسها على الكابل المباع بالمتر.",
      ], visual: 'unites', after: [
        "**المشكلة.** في محلات كثيرة، البرغي نفسه موجود ثلاث مرات في البرنامج: «برغي " + I('4 × 40') + " كرتونة»، «برغي " + I('4 × 40') + " علبة»، «برغي " + I('4 × 40') + " قطعة». لكل سطر مخزونه، ولا أحد منها يعرف أن كرتونة فُتحت لملء الرفّ. وبعد أسبوع تكون المخزونات الثلاثة خاطئة، ويُعاد طلب صنف نائم في آخر المستودع. **القاعدة.** وحدة تسيير المخزون هي، في تعريفها المتداول، الوحدة التي يُسيَّر بها مخزون الصنف. فنختار وحدة مخزون واحدة، أصغر ما نبيع، وهي هنا القطعة، ونصرّح بالأخرى كمضاعفات: العلبة تساوي 100 قطعة، والكرتونة تساوي 20 علبة. الكرتونة المشتراة تضيف 2000 قطعة؛ والعلبة المباعة تسحب 100.",
        "**في المثال.** كرتونتان وسبع علب وأربعون قطعة تساوي 4740 قطعة. الزبون يأخذ ثلاث علب وخمساً وعشرين قطعة: نقطة البيع تسحب 325 قطعة، ويبقى 4415، تعرضها الشاشة من جديد كراتين وعلباً وقطعاً. والسعر يتبع المنطق نفسه: 4,50 دج تكلفة القطعة، 6,50 دج بالعلبة، 8 دج بالقطعة، والهامش يُقرأ لكل وحدة مباعة. **بالمتر، بالكيلو، بالكيس.** الكابل والسلسلة والأنبوب تُسيَّر بالمتر، مع الكسور: ثلاث بكرات من 100 متر و37 متراً تساوي 337 متراً، وبيع 12,5 متراً يُبقي 324,5. والمسامير تُسيَّر بالكيلو، والإسمنت بالكيس، والباليت مضاعَف له. والآلية العامة للأشكال والتعبئات موصوفة في [دليل بطاقة المنتَج](" + L.fiche + ").",
      ] },
      { heading: "بيع في المحل، في ست مراحل", body: [
        "المرحلة الرابعة مبرزة: فيها يصير البيع إما قبضاً نقدياً، وإما سطراً في حساب ورشة.",
      ], visual: 'vente', after: [
        "**البحث.** نصف الأصناف بلا رمز شريطي، والزبون يطلب «كوعاً من عشرين» أو «مثل المرة الماضية». فالبحث يقبل جزءاً من الاسم أو مقاساً أو عائلة، ويقترح بثلاث نقرات؛ والأصناف التي بلا رمز تأخذ ملصقاً يُطبع في المحل. **اختيار الوحدة.** البائع يختار قطعة أو علبة أو متراً أو كيساً في البطاقة نفسها؛ ولا يغيّر الصنف. **تطبيق السعر.** الزبون العادي والحرفي وبائع الجملة لا يدفعون السعر نفسه: فئة الزبون تختار التسعيرة، وتخفيض البائع مؤطَّر بحدّ وضعه المسيّر.",
        "**التسديد.** نقداً، يمرّ البيع على الصندوق، مع مراقبات الحصة الموصوفة في [دليل الصندوق الذي لا يتوازن](" + L.sessions + "). وبالدَّين، يصير وصلاً يُقيَّد في حساب الزبون، على الورشة التي يذكرها. **الاستلام.** للمواد الثقيلة، تُرسل نقطة البيع وصل استلام إلى شاشة المستودع؛ وأمين المستودع يصادق على ما حُمِّل، لا على ما دُفع. **التصفية.** ما دُفع ولم يُحمَّل بعد يبقى مستحَقاً للزبون، صنفاً بصنف، حتى آخر خروج. وحين ينقطع الإنترنت، تواصل نقطة البيع العمل وتتزامن بعد ذلك، كما في [دليل السوبيرات](" + L.superette + ").",
      ] },
      { heading: "حساب الحرفي: سقف، كشف، و70 كيساً مدفوعاً ينتظر", body: [
        "الشكل يتابع حساب حرفي خلال شهر، ثم 200 كيس إسمنت مدفوعة مسبقاً.",
      ], visual: 'compte', after: [
        "**الدَّين.** البيع بالدَّين للمهنيين ممارسة قديمة في التجارة: الائتمان التجاري هو القرض الذي يمنحه تاجر لآخر حين تُشترى السلع بالدَّين، والمؤسسات تستعمله عادةً كتمويل قصير الأجل. وفي محل الخردوات يعيش في دفتر. والحساب يفعل الشيء نفسه، بشكل أفضل: كل وصل وكل دفعة سطر مؤرَّخ، مربوط بورشة، والرصيد يُعاد حسابه وحده. في المثال، السقف 300 ألف دينار؛ وعند الوصل الرابع يبلغ الرصيد 335 ألف دينار، ونقطة البيع لا تصادق دون موافقة المسيّر، يعطيها من هاتفه. ودفعة يوم 27 تعيد الرصيد إلى 135 ألف دينار.",
        "**الكشف.** الزبون يستلم كشفاً لكل ورشة، بتاريخ اليوم، بدل جمع يُعاد أمامه. والآجال والصكوك والتذكيرات مفصَّلة في [دليل دَين الزبون](" + L.credit + "). **مدفوع، لم يُستلَم بعد.** زبون يسدّد 200 كيس إسمنت ويحمّل 50؛ ثم يعود من أجل 80، ويبقى 70. وما دامت هذه الأكياس السبعون ضمن المخزون المعروض للبيع، فالمحل مهدَّد ببيعها مرة ثانية. البرنامج يحجزها منذ الدفع: من 500 كيس في المستودع، 430 للبيع. وهو الحجز الموصوف في [دليل المخزون الخاطئ](" + L.stock + ")، مطبَّقاً على مستودع المواد.",
      ] },
      { heading: "ست حالات في المحل، وما يفعله البرنامج", body: [
        "الشكل يقارن، في ست حالات يومية، ما يحدث اليوم وما يفعله البرنامج.",
      ], visual: 'situations', after: [
        "**الأسعار التي تتغيّر.** الحديد والإسمنت والنحاس تتغيّر أسعارها من تسليم إلى آخر. عند الاستلام، يعيد البرنامج حساب سعر التكلفة وينبّه إلى الأصناف التي لم يعد سعر بيعها يغطي الهامش المطلوب. في مثال البرغي، إذا انتقلت الكرتونة من 9 آلاف إلى 10400 دج، انتقلت التكلفة من 4,50 إلى 5,20 دج للقطعة: والعلبة المباعة بـ 650 دج لا تترك إلا 1,30 دج للقطعة بدل 2,00، أي 35 بالمئة أقل من الهامش، يُرى يوم الاستلام لا عند الجرد. **عرض سعر الورشة.** حرفي يأتي بقائمة؛ عرض السعر يُعَدّ من البطاقات نفسها، ويحتفظ بأسعاره للمدة التي تحدّدونها، ويتحوّل إلى بيع سطراً بسطر، بوتيرة الاستلام. وبالنسبة لمؤسسة البناء المقابلة، هو الشراء المربوط بالورشة الموصوف في [دليل برنامج مؤسسة البناء](" + L.batiment + ").",
        "**الإرجاع.** الأكياس والعلب غير المستعمَلة تعود: الإرجاع يُربط بالوصل الأصلي، ويعيد البضاعة إلى المخزون ويصحّح رصيد الزبون في الحركة نفسها. **المحل والمستودع.** حين يكون المستودع في الجهة الأخرى من الشارع أو المدينة، يسافر وصل الاستلام وحده؛ وأمين المستودع يرى ما عليه تحميله، والخروج لا يُحسب إلا عند التحميل.",
      ] },
      { heading: "برنامج محل الخردوات، في خمس طبقات", body: [
        "الطبقة المبرزة هي الحسابات والورشات: هي التي تعوّض الدفتر.",
      ], visual: 'couches', after: [
        "**الأصناف والوحدات**: بطاقة لكل منتَج، وحداته، قاعدة تحويله، عائلته، مقاساته؛ وهو أطول عمل وعليه يتوقف كل شيء. **المحل والصندوق**: البيع السريع، التسعيرات حسب الفئة، عروض السعر، والصندوق دون اتصال. **الحسابات والورشات**: الدَّين، الأسقف، الكشوف.",
        "**المستودع والاستلام**: وصولات، خروج جزئي، حجز، توصيل، إرجاع. **الشراء والسعر والهامش**: طلبيات، استلام، سعر التكلفة، عتبات إعادة التموين، حسب طريقة [دليل إعادة التموين](" + L.reappro + "). **جاهز أم على المقاس.** برنامج تسيير تجاري عادي يغطي سلسلة الوثائق، كما يبيّن [دليل التسيير التجاري](" + L.gescom + ")؛ وما يحسم، لمحل الخردوات، هي النقاط الأربع الأولى: الوحدات، البحث، الحساب لكل ورشة، والبضاعة الباقية للاستلام. جرّبوها على عشرين صنفاً من أصنافكم قبل الاختيار.",
      ] },
      { heading: "محل خردوات مجهَّز سنة 2027، بالأسابيع", body: [
        "ستة أسابيع في المثال، منها أسبوعان لملف الأصناف.",
      ], visual: 'calendrier', after: [
        "**الأسبوعان 1 و2، ملف الأصناف.** هو نصف المشروع. ننطلق من قوائم المورِّدين والملفات الموجودة، ونحدّد العائلات والوحدات، ثم نكمل رفّاً برفّ. تقدير المثال: من 15 ألف صنف، 9 آلاف تأتي من القوائم المستورَدة؛ والستة آلاف الأخرى، يُدخلها شخصان بمعدل 150 صنفاً في اليوم لكل واحد، تتطلب 20 يوم عمل. الأسبوعان الأولان يغطيان العائلات التي تصنع أغلب المبيعات؛ والباقي يتواصل بالتوازي مع الأسابيع الموالية. **الأسبوع 3، مخزون البداية**: عدّ حسب الرفّ وحسب منطقة المستودع، بوحدة المخزون.",
        "**الأسبوع 4، حسابات الزبائن**: يُستعاد الدفتر زبوناً بزبون، بالرصيد والورشة والسقف والبضاعة الباقية للاستلام. **الأسبوع 5، المحل والمستودع**، بالتوازي مع الطريقة القديمة، ثم وحدهما. **الأسبوع 6، لوحة المسيّر.** من فرنسا أو من محل آخر، المتابعة عن بعد تتم كما في [دليل تسيير المحل من فرنسا](" + L.france + ").",
      ], list: [
        "**ما يراه المسيّر**: المبيعات والهامش حسب العائلة، رصيد كل زبون وكل ورشة، البضاعة المدفوعة الباقية للاستلام، والأصناف تحت العتبة.",
        "**ما لم يعد المحل يفعله**: مسك ثلاثة مخزونات للبرغي نفسه، البحث عن سعر في كرّاس، إعادة جمع الدفتر أمام الزبون، وبيع الأكياس نفسها مرتين.",
        "**ما يُقاس**: فارق الجرد حسب العائلة، الهامش لكل صنف بعد كل استلام، الأرصدة فوق السقف، والبضاعة الباقية للاستلام منذ أكثر من ثلاثين يوماً.",
        "**ما تفعله Symloop**: ملف الأصناف مع باعتكم، نقطة البيع وشاشة المستودع، حسابات الورشات المستعادة من الدفتر، تطبيق المسيّر، استعادة البيانات، ثم الصيانة.",
      ], faq: [
        { q: "أي برنامج لمحل خردوات في الجزائر؟", a: "برنامج صندوق ومخزون يسيّر عدة وحدات للصنف الواحد، والبحث دون رمز شريطي، وحساباً لكل زبون ولكل ورشة، والبضاعة المدفوعة الباقية للاستلام. الصندوق المصمَّم للمواد الغذائية لا يفعل في الغالب لا البيع بالمتر ولا الحساب لكل ورشة. تحقّقوا من هذه النقاط الأربع على عشرين صنفاً من أصنافكم قبل الاختيار." },
        { q: "كيف يُسيَّر صنف يُباع بالقطعة أو بالعلبة أو بالمتر؟", a: "بإنشاء صنف واحد بوحدة مخزون واحدة، القطعة أو المتر، ووحدات مضاعَفة: علبة من 100، كرتونة من 2000، بكرة من 100 متر. شراء كرتونة يضيف 2000 قطعة، وبيع علبة يسحب 100، وبيع 12,5 متراً يسحب 12,5 متراً. المخزون يبقى واحداً ويُعرض بالوحدة التي تريدون." },
        { q: "كيف تُسيَّر آلاف الأصناف دون رمز شريطي؟", a: "ببحث بالاسم والمقاس والعائلة، يقترح منذ الحروف الأولى، وبملصقات تُطبع في المحل للأصناف الأكثر مبيعاً. التصنيف الجيد حسب العائلات والمقاسات أهم من قارئ الرموز." },
        { q: "كيف يُتابَع دَين الحرفيين والمقاولين؟", a: "بحساب لكل زبون، مقسَّم حسب الورشة: كل وصل وكل دفعة سطر مؤرَّخ، والرصيد يُحسب وحده، والسقف يستدعي موافقة المسيّر، والكشف يُرسَل إلى الزبون. الدفتر لا يختفي بين يوم وليلة: يُستعاد زبوناً بزبون." },
        { q: "ماذا نفعل بالبضاعة التي دفعها الزبون ولم يستلمها بعد؟", a: "تُحجز منذ الدفع: تبقى في المستودع لكنها تخرج من المخزون المعروض للبيع. وكل استلام جزئي يُنقص الباقي للاستلام، الذي يراه الزبون وأمين المستودع بالطريقة نفسها. وهذا ما يمنع بيع الأكياس نفسها مرتين." },
        { q: "هل يمكن إعداد عروض سعر لورشة وتحويلها إلى بيع؟", a: "نعم. عرض السعر يُعَدّ من بطاقات الأصناف، بتسعيرة الزبون، ويحتفظ بأسعاره للمدة التي تحدّدونها، ثم يتحوّل إلى بيع، دفعة واحدة أو سطراً بسطر بوتيرة الاستلام." },
        { q: "هل يعمل البرنامج حين ينقطع الإنترنت؟", a: "يجب أن يعمل. نقطة البيع وشاشة المستودع تواصلان على شبكة المحل وتتزامنان عند عودة الاتصال. أما المتابعة عن بعد فتنتظر المزامنة." },
        { q: "كم من الوقت يلزم لوضع البرنامج في الخدمة؟", a: "ستة أسابيع في مثالنا، منها أسبوعان لملف الأصناف، وهو نصف العمل. والإدخال الكامل لقائمة من 15 ألف صنف يتواصل بالتوازي: نبدأ بالعائلات التي تصنع أغلب المبيعات." },
        { q: "كم يكلّف برنامج محل الخردوات؟", a: "هذا يتوقف على عدد نقاط البيع، وعدد المستودعات، واستعادة ملف الأصناف والدفتر، والاختيار بين برنامج عادي وتطوير مكيَّف. والبند الأكثر استهانة به ليس البرنامج، بل ملف الأصناف: احسبوا وقت باعتكم. ونحن نقدّر الكلفة بعد رؤية عشرين صنفاً، ودفتر، ويوم في المحل." },
        { q: "هل يمكن متابعة محل الخردوات من فرنسا؟", a: "نعم: مبيعات اليوم، الهامش، أرصدة الزبائن والبضاعة الباقية للاستلام تُقرأ على الهاتف، والموافقات فوق السقف تُعطى عن بعد. القرارات تبقى للمسيّر؛ والمحل لم يعد ينتظر مكالمة ليبيع." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "ثلاثة أصناف للبرغي نفسه تعطي ثلاثة مخزونات خاطئة؛ وصنف واحد بثلاث وحدات يعطي مخزوناً صحيحاً." },
      { after: 2, text: "ما دامت الأكياس المدفوعة ضمن المخزون المعروض للبيع، فالمحل مهدَّد ببيعها مرة ثانية." },
    ],
    cta: { eyebrow: "خذوا عشرين صنفاً صعباً، البرغي والكابل والإسمنت والحديد، وصفحة من دفتر الدَّين: نبيّن لكم كيف تُسيَّر، وحدة بوحدة وورشة بورشة", title: "محل خردوات، مستودع مواد بناء، محل كهرباء أو ترصيص، أو مؤسس في فرنسا يتابع محل العائلة: نبني ملف الأصناف، نقطة البيع، حسابات الورشات وشاشة المستودع", body: "ملف أصناف يُعَدّ مع باعتكم، مخزون يُحسب بوحدة واحدة، دفتر يُستعاد زبوناً بزبون، ومستودع يعرف ما بيع فعلاً. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.batiment, kind: '2027', name: 'برنامج مؤسسة البناء: عروض السعر، متابعة الورشة، وضعيات الأشغال' },
      { href: L.gescom, kind: '2027', name: 'برنامج التسيير التجاري: سلسلة واحدة من عرض السعر إلى التسديد' },
      { href: L.credit, kind: '2027', name: 'دَين الزبون: الزبون مدين بـ 400 ألف دينار، منذ متى؟' },
      { href: L.stock, kind: '2027', name: 'المخزون الخاطئ في التطبيق: الحركات، الحجز، الجرد الدوري' },
    ] },
  },
};

const KEYWORDS = "logiciel quincaillerie algérie 2027, logiciel de caisse quincaillerie, logiciel de gestion quincaillerie, application quincaillerie, logiciel matériaux de construction algérie, logiciel dépôt de matériaux, gestion de stock quincaillerie, logiciel magasin électricité plomberie, vente au mètre logiciel de caisse, crédit clients artisans logiciel, hardware store software algeria 2027, building materials store pos software, برنامج محل الخردوات الجزائر 2027, برنامج تسيير مواد البناء, برنامج كاشير محل مواد البناء";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
