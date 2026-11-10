import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier.mjs';

const SLUG = 'personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier';
const FIGURES = ['nomenclature', 'situations', 'ordre', 'lot', 'couches', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  lots: '/blog/le-lot-qui-expire-en-premier-est-au-fond-tracabilite-par-lot-application-algerie-2027-reception-fefo-quarantaine-rappel-ce-qu-on-construit/',
  catalogue: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  excel: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  imprimer: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  fieldservice: '/blog/le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Fabrication · Atelier · Nomenclature · 2027', title: "« Personne ne sait ce que nous coûte un produit fini » : ce qu'on construit dans une application en 2027 pour un atelier, nomenclature versionnée, gamme, ordre de fabrication, lots consommés, rendement, coût d'atelier",
    dek: "« On fabrique du jus, des cosmétiques, des meubles, des sacs. Le chef d'atelier tient un cahier. Les matières partent du stock sans qu'on sache pour quel lot, la ligne s'arrête une heure et personne ne le dit, la recette a changé trois fois dans un fichier, et quand on nous demande le coût d'une bouteille, on donne un prix de tête. » Connaître le coût d'un produit fini n'est pas une question de comptabilité, c'est une construction : une nomenclature versionnée qui dit quoi et combien par unité, avec le rebut attendu ; une gamme qui dit où et combien de temps ; un ordre de fabrication qui fige la version, réserve et consomme les composants par lot, pointe le temps, compte les bonnes et les rejetées, entre le lot fini, et porte un coût d'atelier réel par unité bonne.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Fabrication', 'Nomenclature', 'Ordre de fabrication', 'Coût d’atelier', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** La **nomenclature** liste, par unité de base d'un produit fini, ses matières, sous-ensembles et composants avec leur quantité et leur **rebut attendu** ; un sous-ensemble fabriqué a son propre lot et son propre stock ; elle est **versionnée**, et changer une quantité crée une version sans toucher aux ordres déjà lancés. La **gamme** dit sur quelle machine, combien de temps et avec combien d'opérateurs. L'**ordre de fabrication** fige la version, vérifie la disponibilité et **réserve** les composants au lancement, les **consomme par lot** scannés à l'atelier, **pointe** le début et la fin de chaque opération et les arrêts avec leur cause, **compte** les unités bonnes et rejetées, **entre le lot fini** en stock avec sa date et son lien vers tous les lots amont, et se **clôture** avec un prévu contre réel par composant. Le **coût d'atelier** réel, matières aux prix des dernières réceptions plus heures et temps de ligne à un taux écrit, est divisé par les unités bonnes, pas lancées ; c'est un chiffre pour décider, pas le coût de revient comptable, que le comptable calcule avec ses règles.",
      "Ce guide s'adresse au fabricant de boissons, de cosmétiques, de produits d'entretien, de meubles, de textile, d'emballages ou de pièces, au grossiste qui a commencé à conditionner ou assembler lui-même, et au fondateur installé en France qui veut connaître la marge réelle par produit de son atelier à Sétif. Il ne redit pas comment on tient un stock, décrit dans [le guide sur le stock](" + L.stock + "), ni comment on trace par lot, décrit dans [le guide sur la traçabilité](" + L.lots + ") ; il décrit ce qui, entre les deux, transforme des composants en produit fini, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + "). Il ne traite pas des règles comptables de valorisation : le coût d'atelier est un outil du gérant, le coût de revient comptable est l'affaire du comptable.",
    ],
    sections: [
      { heading: 'La nomenclature d’un jus en bouteille', body: [
        "La figure suit un pack de six bouteilles de jus d'orange. Deux niveaux, un sous-ensemble, un emballage, une gamme, une version.",
      ], visual: 'nomenclature', after: [
        "**Le produit fini** a une unité de base, la bouteille, et un conditionnement de vente, le pack de six, selon [le guide sur la fiche produit](" + L.catalogue + "). **Le sous-ensemble** : le jus pasteurisé en vrac est fabriqué d'abord, stocké en cuve avec son propre lot, puis consommé par l'embouteillage ; il existe seul, peut être vendu en vrac ou perdu seul, et son coût se calcule à son niveau. **Les matières** : oranges, 1 400 kilos pour 1 000 litres avec 3 % de rebut attendu, sucre, eau au compteur. **L'emballage** : bouteille, bouchon, étiquette, un par bouteille avec leur rebut, et un carton pour six. Selon la définition courante, une nomenclature multi-niveaux liste les matières, sous-ensembles et pièces en parent-enfant avec leurs quantités ; c'est exactement cet arbre.",
        "**La gamme** : trois opérations, pressage sur la presse à 2 heures pour 1 000 litres avec deux opérateurs, pasteurisation à 1 h 30 avec relevé de température par lot comme dans [le guide sur la chaîne du froid](" + L.froid + "), embouteillage sur la ligne à 400 bouteilles par heure avec trois opérateurs. **La version** : nomenclature v3 depuis septembre 2026, étiquette v3 ; la v2 est archivée, et les ordres lancés sous v2 gardent la v2. Le coût planifié se recalcule à chaque version avec les prix des dernières réceptions de [le guide sur le réapprovisionnement](" + L.reappro + "). Produit, quantités, rebuts et durées sont un exemple construit.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue dans un atelier, et la réponse est une construction, pas un chef d'atelier plus attentif.",
      ], visual: 'situations', after: [
        "**Personne ne sait ce que coûte le produit** : la nomenclature donne un coût prévu, chaque ordre donne un coût réel par unité bonne, et l'écart est expliqué composant par composant. **Les matières disparaissent** : chaque composant est consommé par lot sur un ordre, et le stock théorique du journal de [le guide sur le stock](" + L.stock + ") ne bouge que par ces consommations ; l'écart prévu-réel dit où partent les kilos en trop. **Un lot de bouteilles est rappelé** : le lot fini est lié aux lots amont, et la requête de [le guide sur la traçabilité](" + L.lots + ") retrouve en minutes les jus concernés et leurs clients.",
        "**La recette a changé, pas le prix** : une version de nomenclature, un coût planifié recalculé, et les ordres anciens intacts. **La ligne s'arrête une heure, personne ne le dit** : le pointage de ligne enregistre les arrêts avec une cause codée, et le temps réel entre dans le coût réel. **On lance sans avoir les composants** : la disponibilité est vérifiée au lancement, les composants sont réservés, et un ordre qui manque d'un composant ne part pas à moitié. Qui peut modifier une nomenclature ou clôturer un ordre suit [le guide sur les rôles](" + L.roles + ").",
      ] },
      { heading: 'Un ordre de fabrication, en six temps', body: [
        "Le pointage est l'étape accentuée : le temps vient de l'atelier au moment où il se passe, pas du soir.",
      ], visual: 'ordre', after: [
        "**Lancer** : la quantité, la nomenclature et la gamme sont figées en version sur l'ordre ; la disponibilité de chaque composant est vérifiée et les composants sont réservés, comme une commande réserve du stock. **Sortir les composants** : à l'atelier, les lots consommés sont scannés, et la quantité réelle est saisie, pas la théorique ; un composant pris sur un autre lot que celui prévu est accepté et noté. **Produire et pointer** : début et fin par opération, sur l'écran de ligne hors ligne selon [le guide sur le hors-ligne](" + L.horsligne + ") ; un arrêt est saisi avec sa cause au moment où il arrive, étiqueteuse, manque de bouteilles, nettoyage.",
        "**Compter la sortie** : bonnes et rejetées, avec la cause du rejet ; les sous-produits, pulpe, chutes, entrent en stock s'ils ont une valeur. **Entrer le lot fini** : un lot propre, sa date calculée depuis la fabrication, et le lien vers tous les lots amont ; l'étiquette du lot est imprimée selon [le guide sur l'impression](" + L.imprimer + "). **Clôturer et chiffrer** : prévu contre réel par composant et par opération, coût d'atelier réel par unité bonne, écarts avec leurs causes ; un ordre clôturé ne se modifie plus, il se corrige par un ordre d'ajustement.",
      ] },
      { heading: 'L’ordre OF-0412 : prévu contre réel, lots, rendement, coût', body: [
        "La figure suit un ordre de 6 000 bouteilles, du lancement à la clôture. Le réel n'est pas le prévu recopié.",
      ], visual: 'lot', after: [
        "**Les composants** : les oranges consommées, 8 650 kilos contre 8 400 prévus, viennent de deux lots fournisseurs ; des fruits plus petits expliquent les 3 % ; les bouteilles, 6 180 contre 6 120, une casse en ligne ; le reste tient dans le pourcent. **Le temps** : 10 h 12 contre 9 heures, dont un arrêt de l'étiqueteuse de 48 minutes saisi avec sa cause. **La sortie** : 5 940 bouteilles bonnes et 60 rejetées pour étiquette décollée, rendement 99 % ; le lot fini L-JUS-1110, 990 packs, entre en stock avec sa date et ses huit lots amont.",
        "**Le coût d'atelier** : prévu 165,6 dinars par bouteille, matières 158,6, main-d'œuvre 2,0, ligne 3,8 ; réel 172,2, soit plus 4 %, dont 23 750 dinars d'oranges et 4 620 de temps, divisé par 5 940 bonnes et non par 6 000 lancées. Ce chiffre sert au gérant pour comparer deux ordres, deux lignes, deux fournisseurs d'oranges, et pour fixer un prix de vente avec le moteur de [le guide sur le devis et la facture](" + L.devis + ") ; le coût de revient comptable, avec ses amortissements et ses répartitions, reste l'affaire du comptable, qui reçoit les ordres par [le guide sur l'intégration](" + L.integrer + "). Ordre, lots, quantités, temps et coûts sont un exemple construit.",
      ] },
      { heading: 'La fabrication, en cinq couches', body: [
        "L'ordre de fabrication est la couche accentuée : il fige, réserve, consomme, compte et chiffre.",
      ], visual: 'couches', after: [
        "**Nomenclature et gamme.** Composants par unité de base avec rebut attendu, sous-ensembles à lot propre, opérations avec machine, durée et effectif ; versionnées, datées, jamais modifiées en silence. **Ordre de fabrication.** Quantité, version figée, états datés, créé, lancé, en cours, terminé, clôturé ; composants réservés au lancement, consommés par lot ; sorties bonnes et rejetées ; c'est un document avec ses mouvements de stock. **Atelier.** Un écran de ligne hors ligne : scan des lots, pointage par opération, arrêts avec cause, comptage de sortie, relevés qualité ; saisi au moment où ça arrive.",
        "**Lots et traçabilité.** Lot fini lié aux lots amont et à l'ordre ; rappel dans les deux sens ; date de péremption calculée à la fabrication. **Coût et mesure.** Coût d'atelier prévu et réel par unité bonne, écarts par composant et par cause, rendement, arrêts par cause, cadence par ligne, dans [le tableau de bord du gérant](" + L.dashboard + ") avec une seule définition par chiffre. Les machines de la gamme sont des équipements au sens de [le guide sur les interventions terrain](" + L.fieldservice + ") : leurs arrêts et leurs entretiens vivent sur la même fiche.",
      ] },
      { heading: 'Outiller la fabrication en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour les nomenclatures, parce qu'une recette fausse produit un coût faux.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : les produits fabriqués, leurs unités de base, les rebuts attendus, les machines et leurs cadences, les causes d'arrêt et de rejet, la formule du coût d'atelier ; avec le chef d'atelier et le comptable. **Semaines 2 et 3, nomenclatures et gammes** : saisie, ou reprise depuis les fichiers avec [le guide sur l'import](" + L.excel + "), sous-ensembles, versions, coût planifié par produit comparé au prix de tête. **Semaines 4 et 5, ordre et atelier** : lancement avec réservation, écran de ligne, scan des lots, pointage, comptage, lot fini ; un produit d'abord, sur une ligne, selon [le guide sur la livraison](" + L.livrer + ").",
        "**Semaine 6, coût et écarts** : prévu contre réel par ordre, par composant, par cause ; coût par unité bonne ; export des ordres clôturés au comptable. **Semaine 7, mesure** : rendement, arrêts par cause, cadence par ligne, écarts récurrents, revue du lundi. Les composants achetés suivent ensuite [le guide sur le réapprovisionnement](" + L.reappro + ") : la consommation prévue des ordres lancés entre dans le point de commande.",
      ], list: [
        "**Ce que le gérant voit** : le coût prévu et réel de chaque produit, les ordres en cours avec leur avancement, les écarts par cause, et le rendement par ligne le lundi.",
        "**Ce que le chef d'atelier ne fait plus** : recopier le cahier le soir, deviner le temps, chercher quel lot a servi, refaire le calcul du coût dans un fichier.",
        "**Ce qui est mesuré** : rendement par produit et par ligne, écart matières par composant, arrêts par cause, coût réel par unité bonne, ordres lancés sans composant.",
      ], faq: [
        { q: "Pourquoi une nomenclature versionnée ?", a: "Parce qu'une recette change, sucre en moins, étiquette nouvelle, et qu'un ordre lancé la semaine dernière a consommé l'ancienne. Chaque changement crée une version datée ; les ordres gardent la leur, le coût planifié se recalcule sur la nouvelle, et on peut comparer les deux." },
        { q: "Le coût d'atelier est-il le coût de revient ?", a: "Non. Le coût d'atelier est matières aux prix des dernières réceptions, plus heures et temps de ligne à un taux écrit par l'entreprise, divisé par les unités bonnes. C'est un chiffre pour comparer et décider. Le coût de revient comptable, avec amortissements et répartitions, est calculé par le comptable avec ses règles, à partir des mêmes ordres exportés." },
        { q: "Comment le réel est-il saisi sans ralentir l'atelier ?", a: "Par un écran de ligne hors ligne : scan du lot au moment de la sortie, un bouton début et fin par opération, un bouton arrêt avec une cause à choisir, un comptage de sortie. Rien n'est tapé deux fois, et rien n'attend le soir." },
        { q: "Et les sous-ensembles ?", a: "Un sous-ensemble fabriqué, le jus en cuve, la pâte, la pièce usinée, a sa propre nomenclature, son propre ordre, son propre lot et son propre stock. Il peut être consommé par un autre ordre, vendu seul ou perdu seul, et son coût se calcule à son niveau." },
        { q: "Que se passe-t-il en cas de rappel ?", a: "Le lot fini est lié aux lots amont et à l'ordre. Un rappel d'un composant retrouve les ordres, les lots finis et les clients livrés ; un rappel d'un lot fini retrouve les composants et le fournisseur. C'est la requête du guide sur la traçabilité, côté production." },
        { q: "Faut-il tout l'atelier d'un coup ?", a: "Non. Un produit d'abord, sur une ligne, pendant deux semaines, avec le cahier en parallèle ; puis les autres produits de la même ligne, puis les autres lignes. Les nomenclatures de tous les produits se préparent avant, parce qu'elles prennent le plus de temps." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour les nomenclatures. Un atelier qui a déjà le journal de stock et les lots prend moins ; un atelier qui part d'un cahier et de recettes dans la tête du chef prend les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "La nomenclature dit quoi et combien par unité de base, avec le rebut attendu ; la gamme dit où, combien de temps et avec qui ; les deux sont versionnées." },
      { after: 3, text: "Le coût réel divise par les bouteilles bonnes, pas par les bouteilles lancées ; le rebut et l'arrêt de machine sont dedans, avec leur cause." },
    ],
    cta: { eyebrow: 'Envoyez-nous une recette et un mois d’ordres, nous montrons le coût réel par unité bonne', title: "Fabricant, conditionneur ou fondateur en France : nous construisons la nomenclature versionnée, l'ordre de fabrication avec lots consommés, l'écran de ligne hors ligne et le coût d'atelier réel", body: "Un calcul à blanc sur vos propres recettes et réceptions, les rebuts et cadences écrits avec votre chef d'atelier, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.stock, kind: '2027', name: 'Stock faux : journal de mouvements, réservations, inventaire tournant' },
      { href: L.lots, kind: '2027', name: 'Le lot qui expire en premier : traçabilité, réception, rappel' },
      { href: L.reappro, kind: '2027', name: 'En rupture tous les mois : point de commande, délai mesuré, proposition' },
      { href: L.catalogue, kind: '2027', name: 'Le même produit en douze lignes : fiche produit, conditionnements' },
    ] },
  },
  en: {
    kind: 'Manufacturing · Shop floor · BOM · 2027', title: "“Nobody knows what a finished product costs us”: what gets built in an application in 2027 for a workshop, versioned bill of materials, routing, production order, lots consumed, yield, workshop cost",
    dek: "“We make juice, cosmetics, furniture, bags. The shop-floor supervisor keeps a notebook. Materials leave the stock without anyone knowing for which batch, the line stops for an hour and nobody says so, the recipe changed three times in a file, and when we are asked what a bottle costs, we give a price from memory.” Knowing what a finished product costs is not a matter of accounting, it is a construction: a versioned bill of materials that says what and how much per unit, with expected scrap; a routing that says where and how long; a production order that freezes the version, reserves and consumes components by lot, clocks time, counts good and rejected units, enters the finished lot, and carries an actual workshop cost per good unit.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Manufacturing', 'Bill of materials', 'Production order', 'Workshop cost', 'Algeria 2027'],
    intro: [
      "**Short answer.** The **bill of materials** lists, per base unit of a finished product, its materials, sub-assemblies and components with their quantity and their **expected scrap**; a manufactured sub-assembly has its own lot and its own stock; it is **versioned**, and changing a quantity creates a version without touching orders already launched. The **routing** says on which machine, how long and with how many operators. The **production order** freezes the version, checks availability and **reserves** components at launch, **consumes them by lot** scanned on the shop floor, **clocks** the start and end of each operation and stops with their cause, **counts** good and rejected units, **enters the finished lot** into stock with its date and its link to all upstream lots, and **closes** with a planned-vs-actual per component. The actual **workshop cost**, materials at latest reception prices plus hours and line time at a written rate, is divided by good units, not launched ones; it is a figure to decide with, not the accounting cost price, which the accountant computes with their rules.",
      "This guide is for the maker of beverages, cosmetics, cleaning products, furniture, textiles, packaging or parts, the wholesaler who started packing or assembling in-house, and the founder based in France who wants to know the real margin per product of their workshop in Sétif. It does not repeat how stock is kept, described in [the stock guide](" + L.stock + "), nor how lots are traced, described in [the traceability guide](" + L.lots + "); it describes what, between the two, turns components into a finished product, and it extends [our software engineering page](" + L.service + "). It does not cover accounting valuation rules: the workshop cost is the manager’s tool, the accounting cost price is the accountant’s business.",
    ],
    sections: [
      { heading: 'The bill of materials of a bottled juice', body: [
        "The figure follows a six-pack of orange juice. Two levels, one sub-assembly, packaging, a routing, a version.",
      ], visual: 'nomenclature', after: [
        "**The finished product** has a base unit, the bottle, and a sales packaging, the six-pack, following [the product record guide](" + L.catalogue + "). **The sub-assembly**: pasteurised bulk juice is made first, stored in a tank with its own lot, then consumed by bottling; it exists on its own, can be sold in bulk or lost on its own, and its cost is computed at its level. **Materials**: oranges, 1,400 kilos per 1,000 litres with 3 % expected scrap, sugar, metered water. **Packaging**: bottle, cap, label, one per bottle with their scrap, and one carton per six. According to the common definition, a multi-level bill of materials lists materials, sub-assemblies and parts parent-child with their quantities; it is exactly this tree.",
        "**The routing**: three operations, pressing on the press at 2 hours per 1,000 litres with two operators, pasteurising at 1 h 30 with a temperature reading per lot as in [the cold chain guide](" + L.froid + "), bottling on the line at 400 bottles an hour with three operators. **The version**: BOM v3 since September 2026, label v3; v2 is archived, and orders launched under v2 keep v2. The planned cost is recomputed at every version with the latest reception prices from [the replenishment guide](" + L.reappro + "). Product, quantities, scrap and durations are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard in a workshop, and the answer is a construction, not a more attentive supervisor.",
      ], visual: 'situations', after: [
        "**Nobody knows what the product costs**: the BOM gives a planned cost, every order gives an actual cost per good unit, and the gap is explained component by component. **Materials vanish**: every component is consumed by lot on an order, and the theoretical stock of the ledger in [the stock guide](" + L.stock + ") only moves through those consumptions; the planned-vs-actual gap says where the extra kilos go. **A lot of bottles is recalled**: the finished lot is linked to upstream lots, and the query of [the traceability guide](" + L.lots + ") finds the affected juices and their customers in minutes.",
        "**The recipe changed, not the price**: a BOM version, a recomputed planned cost, and old orders untouched. **The line stops an hour, nobody says so**: the line clock-in records stops with a coded cause, and real time enters the actual cost. **Launched without the components**: availability is checked at launch, components are reserved, and an order missing a component does not leave half done. Who may edit a BOM or close an order follows [the roles guide](" + L.roles + ").",
      ] },
      { heading: 'One production order, in six beats', body: [
        "Clocking is the accented beat: time comes from the shop floor when it happens, not from the evening.",
      ], visual: 'ordre', after: [
        "**Launch**: quantity, BOM and routing are frozen by version on the order; each component’s availability is checked and components are reserved, as a sales order reserves stock. **Issue components**: on the shop floor, lots consumed are scanned, and the actual quantity is entered, not the theoretical; a component taken from a lot other than planned is accepted and recorded. **Produce and clock**: start and end per operation, on the offline line screen following [the offline guide](" + L.horsligne + "); a stop is entered with its cause when it happens, labeller, bottle shortage, cleaning.",
        "**Count the output**: good and rejected, with the reject cause; by-products, pulp, offcuts, enter stock if they have value. **Enter the finished lot**: its own lot, its date computed from manufacture, and the link to all upstream lots; the lot label is printed following [the printing guide](" + L.imprimer + "). **Close and cost**: planned vs actual per component and operation, actual workshop cost per good unit, gaps with their causes; a closed order no longer changes, it is corrected by an adjustment order.",
      ] },
      { heading: 'Order PO-0412: planned vs actual, lots, yield, cost', body: [
        "The figure follows an order of 6,000 bottles, from launch to close. Actual is not planned copied over.",
      ], visual: 'lot', after: [
        "**Components**: oranges consumed, 8,650 kilos against 8,400 planned, come from two supplier lots; smaller fruit explains the 3 %; bottles, 6,180 against 6,120, breakage on the line; the rest is within a percent. **Time**: 10 h 12 against 9 hours, including a 48-minute labeller stop entered with its cause. **Output**: 5,940 good bottles and 60 rejected for peeled labels, yield 99 %; finished lot L-JUS-1110, 990 packs, enters stock with its date and its eight upstream lots.",
        "**Workshop cost**: planned 165.6 dinars per bottle, materials 158.6, labour 2.0, line 3.8; actual 172.2, that is plus 4 %, including 23,750 dinars of oranges and 4,620 of time, divided by 5,940 good and not by 6,000 launched. This figure serves the manager to compare two orders, two lines, two orange suppliers, and to set a selling price with the engine of [the quote and invoice guide](" + L.devis + "); the accounting cost price, with its depreciation and allocations, remains the accountant’s business, who receives the orders through [the integration guide](" + L.integrer + "). Order, lots, quantities, times and costs are a constructed example.",
      ] },
      { heading: 'Manufacturing, in five layers', body: [
        "The production order is the accented layer: it freezes, reserves, consumes, counts and costs.",
      ], visual: 'couches', after: [
        "**BOM and routing.** Components per base unit with expected scrap, sub-assemblies with own lot, operations with machine, duration and headcount; versioned, dated, never silently changed. **Production order.** Quantity, frozen version, dated states, created, launched, in progress, done, closed; components reserved at launch, consumed by lot; good and rejected output; it is a document with its stock movements. **Shop floor.** An offline line screen: lot scans, clock-in per operation, stops with cause, output count, quality readings; entered when it happens.",
        "**Lots and traceability.** Finished lot linked to upstream lots and the order; recall both ways; expiry date computed at manufacture. **Cost and measurement.** Planned and actual workshop cost per good unit, gaps per component and per cause, yield, stops by cause, rate per line, in [the manager’s dashboard](" + L.dashboard + ") with a single definition per figure. The routing’s machines are equipment in the sense of [the field service guide](" + L.fieldservice + "): their stops and their maintenance live on the same record.",
      ] },
      { heading: 'Tooling manufacturing in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for the BOMs, because a wrong recipe produces a wrong cost.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: manufactured products, their base units, expected scrap, machines and their rates, stop and reject causes, the workshop cost formula; with the shop-floor supervisor and the accountant. **Weeks 2 and 3, BOMs and routings**: entry, or take-over from files with [the import guide](" + L.excel + "), sub-assemblies, versions, planned cost per product compared with the price from memory. **Weeks 4 and 5, order and shop floor**: launch with reservation, line screen, lot scans, clock-in, counting, finished lot; one product first, on one line, following [the delivery guide](" + L.livrer + ").",
        "**Week 6, cost and gaps**: planned vs actual per order, per component, per cause; cost per good unit; export of closed orders to the accountant. **Week 7, measurement**: yield, stops by cause, rate per line, recurring gaps, Monday review. Purchased components then follow [the replenishment guide](" + L.reappro + "): the planned consumption of launched orders enters the reorder point.",
      ], list: [
        "**What the manager sees**: planned and actual cost of every product, orders in progress with their progress, gaps by cause, and yield per line on Monday.",
        "**What the supervisor no longer does**: copy the notebook in the evening, guess the time, look for which lot was used, redo the cost computation in a file.",
        "**What is measured**: yield per product and per line, material gap per component, stops by cause, actual cost per good unit, orders launched without a component.",
      ], faq: [
        { q: "Why a versioned bill of materials?", a: "Because a recipe changes, less sugar, a new label, and an order launched last week consumed the old one. Every change creates a dated version; orders keep theirs, the planned cost is recomputed on the new one, and the two can be compared." },
        { q: "Is the workshop cost the cost price?", a: "No. The workshop cost is materials at latest reception prices, plus hours and line time at a rate written by the company, divided by good units. It is a figure to compare and decide. The accounting cost price, with depreciation and allocations, is computed by the accountant with their rules, from the same exported orders." },
        { q: "How is actual entered without slowing the shop floor?", a: "Through an offline line screen: lot scan at issue, a start and end button per operation, a stop button with a cause to pick, an output count. Nothing is typed twice, and nothing waits for the evening." },
        { q: "And sub-assemblies?", a: "A manufactured sub-assembly, the juice in the tank, the dough, the machined part, has its own BOM, its own order, its own lot and its own stock. It can be consumed by another order, sold on its own or lost on its own, and its cost is computed at its level." },
        { q: "What happens in a recall?", a: "The finished lot is linked to upstream lots and to the order. A component recall finds the orders, finished lots and delivered customers; a finished-lot recall finds the components and the supplier. It is the traceability guide’s query, production side." },
        { q: "Must the whole workshop switch at once?", a: "No. One product first, on one line, for two weeks, with the notebook alongside; then the other products of the same line, then the other lines. The BOMs of all products are prepared beforehand, because they take the most time." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for the BOMs. A workshop that already has the stock ledger and lots takes less; one starting from a notebook and recipes in the supervisor’s head takes all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The bill of materials says what and how much per base unit, with expected scrap; the routing says where, how long and with whom; both are versioned." },
      { after: 3, text: "The actual cost divides by good bottles, not by bottles launched; scrap and the machine stop are in it, with their cause." },
    ],
    cta: { eyebrow: 'Send us a recipe and a month of orders, we show the actual cost per good unit', title: "Manufacturer, packer or founder in France: we build the versioned bill of materials, the production order with lots consumed, the offline line screen and the actual workshop cost", body: "A dry-run computation on your own recipes and receptions, scrap and rates written with your shop-floor supervisor, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.stock, kind: '2027', name: 'Wrong stock: movement ledger, reservations, cycle counts' },
      { href: L.lots, kind: '2027', name: 'The lot that expires first: traceability, reception, recall' },
      { href: L.reappro, kind: '2027', name: 'Out of stock every month: reorder point, measured lead time, proposal' },
      { href: L.catalogue, kind: '2027', name: 'The same product in twelve lines: product record, packagings' },
    ] },
  },
  ar: {
    kind: 'تصنيع · ورشة · قائمة مواد · 2027', title: "«لا أحد يعرف كم يكلّفنا المنتج النهائي»: ما يُبنى في تطبيق سنة 2027 لورشة، قائمة مواد بإصدارات، مسار تصنيع، أمر تصنيع، دفعات مستهلَكة، مردود، كلفة ورشة",
    dek: "«نصنع عصيراً ومستحضرات تجميل وأثاثاً وأكياساً. رئيس الورشة يمسك دفتراً. المواد تخرج من المخزون دون أن نعرف لأي دفعة، والخط يتوقف ساعة ولا أحد يقول، والوصفة تغيرت ثلاث مرات في ملف، وحين يُسألنا عن كلفة قارورة نعطي سعراً من الذاكرة.» معرفة كلفة المنتج النهائي ليست مسألة محاسبة بل بناء: قائمة مواد بإصدارات تقول ماذا وكم لكل وحدة بالهدر المتوقع؛ مسار تصنيع يقول أين وكم من الوقت؛ أمر تصنيع يجمّد الإصدار ويحجز المكوّنات ويستهلكها بالدفعة ويسجّل الوقت ويعدّ الجيد والمرفوض ويُدخل الدفعة النهائية ويحمل كلفة ورشة فعلية لكل وحدة جيدة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تصنيع', 'قائمة المواد', 'أمر التصنيع', 'كلفة الورشة', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** **قائمة المواد** تسرد لكل وحدة أساس من منتج نهائي مواده ومجموعاته الفرعية ومكوّناته بكميتها و**هدرها المتوقع**؛ والمجموعة الفرعية المصنَّعة لها دفعتها ومخزونها؛ وهي **بإصدارات**، وتغيير كمية ينشئ إصداراً دون المساس بالأوامر المطلقة أصلاً. و**مسار التصنيع** يقول على أي آلة وكم من الوقت وبكم عامل. و**أمر التصنيع** يجمّد الإصدار ويفحص التوفر و**يحجز** المكوّنات عند الإطلاق، و**يستهلكها بالدفعة** ممسوحة في الورشة، و**يسجّل** بداية ونهاية كل عملية والتوقفات بسببها، و**يعدّ** الوحدات الجيدة والمرفوضة، و**يُدخل الدفعة النهائية** إلى المخزون بتاريخها وربطها بكل دفعات المنبع، و**يُغلق** بمخطط مقابل فعلي لكل مكوّن. و**كلفة الورشة** الفعلية، مواد بأسعار آخر الاستلامات زائد ساعات ووقت خط بمعدل مكتوب، تُقسم على الوحدات الجيدة لا المطلقة؛ وهي رقم للقرار لا سعر التكلفة المحاسبي الذي يحسبه المحاسب بقواعده.",
      "هذا الدليل موجَّه إلى مصنّع المشروبات أو مستحضرات التجميل أو منتجات التنظيف أو الأثاث أو النسيج أو التعبئة أو القطع، وإلى تاجر الجملة الذي بدأ يعبّئ أو يجمّع بنفسه، وإلى المؤسس المقيم في فرنسا الذي يريد معرفة الهامش الحقيقي لكل منتج في ورشته بسطيف. وهو لا يعيد كيف يُحفظ المخزون، الموصوف في [دليل المخزون](" + L.stock + ")، ولا كيف يُتتبَّع بالدفعة، الموصوف في [دليل التتبع](" + L.lots + ")؛ بل يصف ما يحوّل، بينهما، المكوّنات إلى منتج نهائي، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + "). ولا يتناول قواعد التقييم المحاسبية: كلفة الورشة أداة المسيّر، وسعر التكلفة المحاسبي شأن المحاسب.",
    ],
    sections: [
      { heading: 'قائمة مواد عصير معبّأ', body: [
        "يتتبع الشكل عبوة ست قوارير عصير برتقال. مستويان، مجموعة فرعية، تعبئة، مسار تصنيع، إصدار.",
      ], visual: 'nomenclature', after: [
        "**المنتج النهائي** له وحدة أساس، القارورة، وتعبئة بيع، عبوة الست، وفق [دليل بطاقة المنتج](" + L.catalogue + "). **المجموعة الفرعية**: العصير المبستر السائب يُصنع أولاً ويُخزَّن في خزان بدفعته الخاصة ثم تستهلكه التعبئة؛ وهو موجود وحده، يمكن بيعه سائباً أو فقدانه وحده، وكلفته تُحسب في مستواه. **المواد**: برتقال، 1,400 كيلوغرام لكل 1,000 لتر بهدر متوقع 3 ٪، سكر، ماء بالعداد. **التعبئة**: قارورة وغطاء وملصق، واحد لكل قارورة بهدرها، وكرتون لكل ست. وبالتعريف الشائع، قائمة المواد متعددة المستويات تسرد المواد والمجموعات الفرعية والقطع أباً وابناً بكمياتها؛ وهي بالضبط هذه الشجرة.",
        "**مسار التصنيع**: ثلاث عمليات، عصر على المعصرة بساعتين لكل 1,000 لتر بعاملين، بسترة بساعة ونصف بقراءة حرارة لكل دفعة كما في [دليل سلسلة التبريد](" + L.froid + ")، تعبئة على الخط بمعدل 400 قارورة في الساعة بثلاثة عمال. **الإصدار**: قائمة مواد إ3 منذ سبتمبر 2026، ملصق إ3؛ إ2 مؤرشف، والأوامر المطلقة تحت إ2 تحتفظ بإ2. والكلفة المخططة تُعاد في كل إصدار بأسعار آخر الاستلامات من [دليل إعادة التموين](" + L.reappro + "). والمنتج والكميات والهدر والمدد مثال مبني.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت في ورشة، والجواب بناء لا رئيس ورشة أكثر انتباهاً.",
      ], visual: 'situations', after: [
        "**لا أحد يعرف كم يكلّف المنتج**: قائمة المواد تعطي كلفة مخططة، وكل أمر يعطي كلفة فعلية لكل وحدة جيدة، والفارق يُفسَّر مكوّناً مكوّناً. **المواد تختفي**: كل مكوّن يُستهلك بالدفعة على أمر، والمخزون النظري في سجل [دليل المخزون](" + L.stock + ") لا يتحرك إلا بتلك الاستهلاكات؛ وفارق المخطط والفعلي يقول أين تذهب الكيلوغرامات الزائدة. **دفعة قوارير تُسحب**: الدفعة النهائية مرتبطة بدفعات المنبع، واستعلام [دليل التتبع](" + L.lots + ") يجد العصائر المعنية وزبائنها في دقائق.",
        "**الوصفة تغيرت لا السعر**: إصدار قائمة مواد، كلفة مخططة معادة، والأوامر القديمة كما هي. **الخط يتوقف ساعة ولا أحد يقول**: تسجيل الخط يسجّل التوقفات بسبب مرمَّز، والوقت الحقيقي يدخل الكلفة الفعلية. **إطلاق بلا المكوّنات**: التوفر يُفحص عند الإطلاق، والمكوّنات تُحجز، والأمر الذي ينقصه مكوّن لا ينطلق نصف منطلق. ومن يستطيع تعديل قائمة مواد أو إغلاق أمر يتبع [دليل الأدوار](" + L.roles + ").",
      ] },
      { heading: 'أمر تصنيع واحد، في ستة أوقات', body: [
        "التسجيل هو الوقت المميز: الوقت يأتي من الورشة لحظة حدوثه لا من المساء.",
      ], visual: 'ordre', after: [
        "**الإطلاق**: الكمية وقائمة المواد والمسار مجمَّدة بإصدار على الأمر؛ ويُفحص توفر كل مكوّن وتُحجز المكوّنات كما تحجز طلبية البيع مخزوناً. **إخراج المكوّنات**: في الورشة تُمسح الدفعات المستهلَكة وتُدخَل الكمية الفعلية لا النظرية؛ والمكوّن المأخوذ من دفعة غير المخططة يُقبل ويُسجَّل. **الإنتاج والتسجيل**: بداية ونهاية لكل عملية على شاشة الخط دون اتصال وفق [دليل العمل دون اتصال](" + L.horsligne + ")؛ والتوقف يُدخَل بسببه لحظة حدوثه، ملصّقة، نقص قوارير، تنظيف.",
        "**عدّ الخرج**: جيدة ومرفوضة بسبب الرفض؛ والمنتجات الثانوية، لب وقصاصات، تدخل المخزون إن كانت لها قيمة. **إدخال الدفعة النهائية**: دفعة خاصة وتاريخها محسوب من التصنيع وربط بكل دفعات المنبع؛ ويُطبع ملصق الدفعة وفق [دليل الطباعة](" + L.imprimer + "). **الإغلاق والتكليف**: مخطط مقابل فعلي لكل مكوّن وعملية، كلفة ورشة فعلية لكل وحدة جيدة، فوارق بأسبابها؛ والأمر المغلق لا يتغير بل يُصحَّح بأمر تسوية.",
      ] },
      { heading: 'الأمر OF-0412: مخطط مقابل فعلي، دفعات، مردود، كلفة', body: [
        "يتتبع الشكل أمر 6,000 قارورة من الإطلاق إلى الإغلاق. والفعلي ليس المخطط منسوخاً.",
      ], visual: 'lot', after: [
        "**المكوّنات**: البرتقال المستهلَك، 8,650 كيلوغراماً مقابل 8,400 مخططة، من دفعتي مورد؛ وثمار أصغر تفسر الـ 3 ٪؛ والقوارير 6,180 مقابل 6,120، كسر على الخط؛ والباقي ضمن الواحد بالمائة. **الوقت**: 10 س 12 مقابل 9 ساعات، منها توقف للملصّقة 48 دقيقة أُدخل بسببه. **الخرج**: 5,940 قارورة جيدة و60 مرفوضة لملصق منفصل، مردود 99 ٪؛ والدفعة النهائية L-JUS-1110، 990 عبوة، تدخل المخزون بتاريخها ودفعات منبعها الثماني.",
        "**كلفة الورشة**: مخططة 165.6 دينار للقارورة، مواد 158.6 ويد عاملة 2.0 وخط 3.8؛ فعلية 172.2، أي زائد 4 ٪، منها 23,750 دينار برتقال و4,620 وقت، مقسومة على 5,940 جيدة لا على 6,000 مطلقة. ويخدم هذا الرقم المسيّر لمقارنة أمرين وخطين وموردَي برتقال، ولتحديد سعر بيع بمحرك [دليل عرض السعر والفاتورة](" + L.devis + ")؛ وسعر التكلفة المحاسبي باهتلاكاته وتوزيعاته يبقى شأن المحاسب الذي يتلقى الأوامر عبر [دليل التكامل](" + L.integrer + "). والأمر والدفعات والكميات والأوقات والكلف مثال مبني.",
      ] },
      { heading: 'التصنيع، في خمس طبقات', body: [
        "أمر التصنيع هو الطبقة المميزة: يجمّد ويحجز ويستهلك ويعدّ ويكلّف.",
      ], visual: 'couches', after: [
        "**قائمة المواد والمسار.** مكوّنات لكل وحدة أساس بهدر متوقع، مجموعات فرعية بدفعة خاصة، عمليات بآلة ومدة وعدد عمال؛ بإصدارات ومؤرَّخة ولا تتغير بصمت أبداً. **أمر التصنيع.** كمية، إصدار مجمَّد، حالات مؤرَّخة، منشأ، مطلق، جارٍ، منجز، مغلق؛ مكوّنات محجوزة عند الإطلاق ومستهلَكة بالدفعة؛ خرج جيد ومرفوض؛ مستند بحركات مخزونه. **الورشة.** شاشة خط دون اتصال: مسح الدفعات، تسجيل لكل عملية، توقفات بسبب، عدّ الخرج، قراءات جودة؛ يُدخَل لحظة حدوثه.",
        "**الدفعات والتتبع.** دفعة نهائية مرتبطة بدفعات المنبع والأمر؛ سحب في الاتجاهين؛ تاريخ صلاحية يُحسب عند التصنيع. **الكلفة والقياس.** كلفة ورشة مخططة وفعلية لكل وحدة جيدة، فوارق لكل مكوّن وسبب، مردود، توقفات بالسبب، معدل لكل خط، في [لوحة المسيّر](" + L.dashboard + ") بتعريف واحد لكل رقم. وآلات المسار معدّات بمعنى [دليل التدخلات الميدانية](" + L.fieldservice + "): توقفاتها وصيانتها تعيش على البطاقة نفسها.",
      ] },
      { heading: 'تجهيز التصنيع سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان لقوائم المواد لأن وصفة خاطئة تنتج كلفة خاطئة.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: المنتجات المصنَّعة ووحداتها الأساسية والهدر المتوقع والآلات ومعدلاتها وأسباب التوقف والرفض وصيغة كلفة الورشة؛ مع رئيس الورشة والمحاسب. **الأسبوعان 2 و3، قوائم المواد والمسارات**: إدخال أو استلام من الملفات بـ[دليل الاستيراد](" + L.excel + ")، مجموعات فرعية، إصدارات، كلفة مخططة لكل منتج مقارنة بسعر الذاكرة. **الأسبوعان 4 و5، الأمر والورشة**: إطلاق بحجز، شاشة خط، مسح الدفعات، تسجيل، عدّ، دفعة نهائية؛ منتج أولاً على خط واحد وفق [دليل التسليم](" + L.livrer + ").",
        "**الأسبوع 6، الكلفة والفوارق**: مخطط مقابل فعلي لكل أمر ومكوّن وسبب؛ كلفة لكل وحدة جيدة؛ تصدير الأوامر المغلقة إلى المحاسب. **الأسبوع 7، القياس**: مردود، توقفات بالسبب، معدل لكل خط، فوارق متكررة، مراجعة الاثنين. وتتبع المكوّنات المشتراة بعد ذلك [دليل إعادة التموين](" + L.reappro + "): الاستهلاك المخطط للأوامر المطلقة يدخل نقطة إعادة الطلب.",
      ], list: [
        "**ما يراه المسيّر**: الكلفة المخططة والفعلية لكل منتج، الأوامر الجارية بتقدمها، الفوارق بالسبب، والمردود لكل خط يوم الاثنين.",
        "**ما لم يعد رئيس الورشة يفعله**: نسخ الدفتر مساءً، تخمين الوقت، البحث عن أي دفعة استُعملت، إعادة حساب الكلفة في ملف.",
        "**ما يُقاس**: مردود لكل منتج وخط، فارق مواد لكل مكوّن، توقفات بالسبب، كلفة فعلية لكل وحدة جيدة، أوامر مطلقة بلا مكوّن.",
      ], faq: [
        { q: "لماذا قائمة مواد بإصدارات؟", a: "لأن الوصفة تتغير، سكر أقل، ملصق جديد، وأمراً أُطلق الأسبوع الماضي استهلك القديمة. كل تغيير ينشئ إصداراً مؤرَّخاً؛ والأوامر تحتفظ بإصدارها، والكلفة المخططة تُعاد على الجديد، ويمكن مقارنة الاثنين." },
        { q: "هل كلفة الورشة هي سعر التكلفة؟", a: "لا. كلفة الورشة مواد بأسعار آخر الاستلامات زائد ساعات ووقت خط بمعدل تكتبه الشركة، مقسومة على الوحدات الجيدة. وهي رقم للمقارنة والقرار. وسعر التكلفة المحاسبي باهتلاكات وتوزيعات يحسبه المحاسب بقواعده من الأوامر المصدَّرة نفسها." },
        { q: "كيف يُدخَل الفعلي دون إبطاء الورشة؟", a: "بشاشة خط دون اتصال: مسح الدفعة عند الإخراج، زر بداية ونهاية لكل عملية، زر توقف بسبب يُختار، عدّ خرج. لا شيء يُكتب مرتين، ولا شيء ينتظر المساء." },
        { q: "والمجموعات الفرعية؟", a: "المجموعة الفرعية المصنَّعة، العصير في الخزان والعجين والقطعة المشغولة، لها قائمة موادها وأمرها ودفعتها ومخزونها. ويمكن أن يستهلكها أمر آخر أو تُباع وحدها أو تُفقد وحدها، وكلفتها تُحسب في مستواها." },
        { q: "ماذا يحدث عند السحب؟", a: "الدفعة النهائية مرتبطة بدفعات المنبع وبالأمر. سحب مكوّن يجد الأوامر والدفعات النهائية والزبائن المسلَّمين؛ وسحب دفعة نهائية يجد المكوّنات والمورد. وهو استعلام دليل التتبع من جهة الإنتاج." },
        { q: "هل يجب أن تنتقل الورشة كلها دفعة واحدة؟", a: "لا. منتج أولاً على خط واحد لأسبوعين مع الدفتر بجانبه؛ ثم بقية منتجات الخط نفسه، ثم الخطوط الأخرى. وقوائم مواد كل المنتجات تُحضَّر قبلاً لأنها تأخذ الوقت الأكبر." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان لقوائم المواد. وورشة لديها سجل المخزون والدفعات تأخذ أقل؛ وورشة تبدأ من دفتر ووصفات في رأس الرئيس تأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "قائمة المواد تقول ماذا وكم لكل وحدة أساس بالهدر المتوقع؛ ومسار التصنيع يقول أين وكم من الوقت ومع من؛ وكلاهما بإصدارات." },
      { after: 3, text: "الكلفة الفعلية تُقسم على القوارير الجيدة لا على القوارير المطلقة؛ والهدر وتوقف الآلة داخلها بسببهما." },
    ],
    cta: { eyebrow: 'أرسلوا لنا وصفة وشهراً من الأوامر، نُريكم الكلفة الفعلية لكل وحدة جيدة', title: "مصنّع أو معبّئ أو مؤسس في فرنسا: نبني قائمة المواد بإصدارات، وأمر التصنيع بالدفعات المستهلَكة، وشاشة الخط دون اتصال، وكلفة الورشة الفعلية", body: "حساب على الفارغ على وصفاتكم واستلاماتكم أنتم، والهدر والمعدلات تُكتب مع رئيس ورشتكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.stock, kind: '2027', name: 'مخزون خاطئ: سجل حركات، حجوزات، جرد دوري' },
      { href: L.lots, kind: '2027', name: 'الدفعة التي تنتهي أولاً: تتبع، استلام، سحب' },
      { href: L.reappro, kind: '2027', name: 'نفاد كل شهر: نقطة إعادة الطلب، مهلة مقيسة، اقتراح' },
      { href: L.catalogue, kind: '2027', name: 'المنتج نفسه في اثني عشر سطراً: بطاقة منتج، تعبئات' },
    ] },
  },
};

const KEYWORDS = "application gestion de production atelier algérie 2027, nomenclature produit versionnée logiciel fabrication, ordre de fabrication consommation par lot application, coût de revient atelier réel par unité produite, gamme de fabrication opérations machines temps, rendement rebut suivi de production application, traçabilité lot fini lots composants rappel, pointage ligne de production arrêts causes, logiciel pme industrielle agroalimentaire cosmétique algérie, calcul coût produit fini matières main d'œuvre, développement application production fabrication algérie, manufacturing app algeria 2027 bill of materials production order yield workshop cost, تطبيق تصنيع قائمة مواد أمر تصنيع كلفة ورشة الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
