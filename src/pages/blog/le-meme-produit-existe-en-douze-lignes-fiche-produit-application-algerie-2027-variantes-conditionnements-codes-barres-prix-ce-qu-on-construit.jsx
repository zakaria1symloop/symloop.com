import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit.mjs';

const SLUG = 'le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit';
const FIGURES = ['arbre', 'etapes', 'couches', 'reprise', 'situations', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  excel: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  b2b: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  client: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  ia: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  pharmacie: '/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Catalogue · Fiche produit · Variantes · 2027', title: "« Le même produit existe en douze lignes dans notre fichier » : ce qu'on construit dans une application en 2027 pour qu'un produit n'existe qu'une fois, modèle, variantes, conditionnements, codes-barres, prix, reprise",
    dek: "« L'huile de 5 litres existe douze fois dans notre fichier : HU5, HUILE5L, FL-5, un ancien code, un code promo. Trois prix différents, un stock éclaté en douze, et chaque vendeur tape celle qu'il connaît. Le carton de quatre est un treizième produit. » Un catalogue propre n'est pas un fichier Excel mieux rangé, c'est une construction : un modèle qui porte la description et les photos une fois, des variantes qui ne diffèrent que par un attribut et où le stock se compte, des conditionnements qui portent chacun leur code-barres, leur facteur vers l'unité de base et leur prix, des attributs imposés par la catégorie, des alias pour les anciens codes, des grilles de prix datées, un statut et un historique, et une reprise qui fusionne les douze lignes sans en perdre une.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Fiche produit', 'Variantes', 'Conditionnements', 'Codes-barres', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un produit vit à **trois niveaux**. Le **modèle** porte ce qu'on décrit et photographie : nom en deux langues, marque, catégorie, fournisseur, description, photos ; il ne se vend pas. La **variante** porte le seul attribut qui change, contenance, taille, couleur, dosage, et c'est là que le **stock se compte**, en unités de base ; sa référence est générée, pas tapée. Le **conditionnement** porte ce qu'on scanne et ce qu'on vend : un **code-barres** unique dans tout le catalogue, un **facteur** vers l'unité de base, un carton de 4 vaut 4, et son entrée dans les **grilles de prix** datées, détail, gros, promotion. Les **attributs** sont définis par **catégorie**, obligatoires ou variants, pour qu'un vendeur ne puisse pas créer « T-shirt XL bleu 2 » à la volée. Les anciens codes deviennent des **alias**, jamais des doublons. Une fiche a un **statut**, brouillon, active, en fin de vie, archivée, et un **historique** de chaque changement ; elle ne se supprime pas. Et la **reprise** de l'ancien fichier passe par un essai à blanc, des fusions proposées et des lignes refusées par écrit.",
      "Ce guide s'adresse au grossiste dont le catalogue a grandi dans un fichier pendant dix ans, au commerçant qui ouvre une boutique en ligne et découvre que chaque produit existe trois fois, au fondateur installé en France qui veut un catalogue vendable sur le site, à la caisse et par les commerciaux, et au magasinier qui scanne un carton et facture une unité. Il ne redit pas comment on tient un stock juste, décrit dans [le guide sur le stock](" + L.stock + "), ni comment on importe un fichier chaque semaine, décrit dans [le guide sur l'import](" + L.excel + ") ; il décrit la structure que ces deux guides supposent, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Un produit, trois niveaux', body: [
        "La figure suit une huile de table du modèle jusqu'à la palette. Ce qui vit à quel niveau n'est pas une question de goût, c'est ce qui décide si le scan, le stock et le prix sont justes.",
      ], visual: 'arbre', after: [
        "Le **modèle** porte ce qu'on écrit une fois : le nom en français et en arabe, la marque, la catégorie, le fournisseur, la description et les photos. Il n'a pas de stock et pas de prix, parce qu'on ne vend pas « de l'huile Fleurial », on vend une contenance précise. La **variante** porte la valeur de l'attribut variant de sa catégorie, ici la contenance, et c'est elle qui a un stock, compté en unités de base dans le journal de mouvements de [le guide sur le stock](" + L.stock + "). Sa référence est composée par l'application à partir du modèle et de l'attribut, HT-FLEU-5, jamais tapée par un vendeur.",
        "Le **conditionnement** est ce qu'on tient dans la main et ce qu'on scanne : la bouteille, le carton de 4, la palette de 112 cartons. Chacun a son code-barres, son facteur vers l'unité de base, 1, 4, 448, et son entrée dans les grilles de prix. Quand le magasinier scanne un carton en réception, le stock de la variante monte de 4 ; quand la caisse scanne une bouteille, il descend de 1. Les codes-barres du commerce (GTIN) existent en 8, 12, 13 et 14 chiffres ; le code à 14 chiffres sert aux unités logistiques, cartons et palettes, et n'est pas lu en caisse, selon la documentation publique du système GTIN. Références, codes, facteurs et prix de la figure sont un exemple construit.",
      ] },
      { heading: 'Créer un produit correctement, en six étapes', body: [
        "L'ordre des étapes est celui que l'écran de création impose, et il commence par la catégorie, parce que c'est elle qui dit quels champs existent.",
      ], visual: 'etapes', after: [
        "**Choisir la catégorie** : elle porte la liste des attributs obligatoires, marque et fournisseur pour une huile, dosage et forme pour un médicament, et l'attribut variant, contenance, taille, couleur ; sans catégorie, pas de fiche. **Décrire le modèle** : nom en deux langues, marque, fournisseur, description, photos ; c'est la seule saisie libre, et elle est faite une fois. **Déclarer les variantes** : une par valeur de l'attribut variant, 1 L, 2 L, 5 L ; la référence est générée, et une valeur déjà prise est refusée. C'est l'étape accentuée, parce que c'est là que les fichiers Excel fabriquent leurs doublons : une nouvelle ligne tapée à la main avec un code inventé.",
        "**Déclarer les conditionnements** : l'unité de base d'abord, puis le carton et la palette avec leur facteur ; un facteur se vérifie en réception, un carton ouvert qui contient 6 au lieu de 4 est une anomalie, pas une correction silencieuse. **Scanner les codes** : un code-barres par conditionnement, lu au scanner plutôt que tapé ; un code déjà présent ailleurs dans le catalogue est refusé à la saisie avec le nom de la fiche qui le porte. **Fixer les prix** : par conditionnement et par grille, détail, gros, promotion avec dates de début et de fin ; une ligne de vente lit la grille, selon la règle posée dans [le guide sur le devis et la facture](" + L.devis + "), et ne retape jamais un prix.",
      ] },
      { heading: 'Le catalogue, en cinq couches', body: [
        "Les identifiants sont la couche accentuée : un code scanné doit retrouver un seul conditionnement, dans tout le catalogue, toujours.",
      ], visual: 'couches', after: [
        "**Structure.** Modèle, variantes, conditionnements ; attributs définis par catégorie ; une référence générée par niveau. **Identifiants.** Un code-barres appartient à un seul conditionnement dans tout le catalogue, et la contrainte est dans la base de données, pas dans une consigne ; les anciens codes internes, HU5, HUILE5L, deviennent des alias de la variante, pour que la recherche, les anciennes factures et les habitudes des vendeurs continuent de trouver le produit ; la référence du fournisseur est gardée pour les commandes et l'import de ses fichiers, décrit dans [le guide sur l'import](" + L.excel + "). **Prix.** Grilles par conditionnement, détail, gros, promotion ; chaque prix a une date de début et une date de fin, et la caisse de [le guide sur l'encaissement](" + L.caisse + ") comme le portail de [le guide sur la commande B2B](" + L.b2b + ") lisent la même grille.",
        "**Contenus.** Les photos vivent au niveau du modèle, ou de la variante quand la couleur change ; les variantes héritent de celles du modèle, et une photo n'est jamais copiée douze fois. Les descriptions sont bilingues et indexées par la recherche décrite dans [le guide sur la recherche](" + L.recherche + "). **Vie de la fiche.** Statut brouillon, active, en fin de vie, archivée ; en fin de vie, on vend le restant mais on ne réassortit plus ; archivée, la fiche reste lisible depuis les anciennes factures mais n'apparaît plus dans la vente. Chaque changement est historisé, qui, quand, ancienne valeur, nouvelle valeur, et une fiche ne se supprime pas.",
      ] },
      { heading: 'La reprise : douze lignes deviennent une fiche', body: [
        "La figure montre ce que deviennent douze lignes d'un ancien fichier pour la même huile. Rien n'est perdu, et une ligne est refusée.",
      ], visual: 'reprise', after: [
        "La reprise commence par un rapprochement : les lignes dont le libellé, le code-barres ou le prix se ressemblent sont proposées comme un même produit, et le gérant confirme ou sépare, écran par écran, pas en masse. Les codes internes différents deviennent des alias de la variante ; le code EAN scanné est gardé sur le conditionnement unité ; le libellé arabe est gardé sur le modèle ; les deux lignes « carton » deviennent un conditionnement avec facteur 4 ; le prix promo part dans la grille, avec ses dates. La ligne à prix zéro n'est pas fusionnée en silence : elle est refusée et remontée au gérant avec sa raison, comme toute ligne que l'essai à blanc de [le guide sur l'import](" + L.excel + ") ne sait pas placer.",
        "Le stock des douze lignes est additionné en unités de base au moment de la reprise, une fois, et inscrit comme un mouvement d'ajustement daté dans le journal de [le guide sur le stock](" + L.stock + ") ; il ne sera plus jamais réparti entre des doublons. Le même principe de clé et de fusion sert au fichier client dans [le guide sur le client unique](" + L.client + "). Lignes, codes et prix de la figure sont un exemple construit.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne de la matrice est une plainte entendue chez un grossiste, un commerçant ou une pharmacie, et la réponse est la structure, pas une consigne de plus.",
      ], visual: 'situations', after: [
        "**Le même produit sous trois codes** : une variante, trois alias ; un seul stock et un seul prix ; la recherche trouve par n'importe quel alias. **Le carton vendu comme une unité** : le carton a son propre code-barres, son facteur et son prix ; le scan ne peut pas se tromper de niveau, et le stock sort 4 unités. **La nouvelle taille créée à la volée** : la variante naît d'une valeur d'attribut, la référence est générée, et une valeur déjà prise est refusée. **Le prix tapé sur la facture** : la ligne lit la grille du conditionnement, datée, et un prix hors grille demande une remise approuvée selon [le guide sur le devis et la facture](" + L.devis + ").",
        "**La photo manque sur le site** : la photo vit au modèle, les variantes en héritent, et une liste des fiches sans photo sort chaque lundi dans [le tableau de bord du gérant](" + L.commerce + "). **Le produit arrêté toujours vendu** : le statut en fin de vie laisse vendre le restant sans réassort, puis l'archivage retire la fiche de la vente sans casser les anciennes factures. Les dates de péremption et les lots, qui concernent la pharmacie et l'agroalimentaire, s'ajoutent au niveau du mouvement de stock, pas de la fiche, comme dans [le guide sur la pharmacie](" + L.pharmacie + ").",
      ] },
      { heading: 'Reprendre un catalogue en 2027, en semaines', body: [
        "Sept semaines, dont deux pour la reprise, parce que c'est elle qui décide si le catalogue sera propre ou s'il reproduira le fichier.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, catégories et attributs** : avec le gérant et le magasinier, la liste des catégories, les attributs obligatoires et variants de chacune, les unités de base ; sans code, et c'est la semaine qui évite le plus de reprises. **Semaine 2, structure** : modèle, variante, conditionnement, références générées, contrainte d'unicité des codes-barres, alias. **Semaines 3 et 4, reprise** : rapprochement des anciennes lignes, essai à blanc, fusions proposées écran par écran, lignes refusées au gérant, stock additionné et inscrit comme ajustement.",
        "**Semaine 5, prix et contenus** : grilles par conditionnement, photos au modèle, descriptions bilingues, liste des fiches incomplètes. **Semaine 6, vente et stock** : la caisse et les commandes lisent le conditionnement scanné, les mouvements se font en unités de base, le statut de fin de vie est respecté partout, y compris hors ligne selon [le guide sur le hors-ligne](" + L.horsligne + "). **Semaine 7, mesure** : doublons détectés par semaine, codes inconnus au scan, fiches sans photo, revue du lundi. Les fiches, comme le reste, sont exposées aux autres logiciels par [le guide sur l'intégration](" + L.integrer + ").",
      ], list: [
        "**Ce que le gérant voit** : un produit, une fiche, et sous elle ses variantes et ses conditionnements ; un scan qui tombe toujours sur le bon niveau ; des prix qui viennent d'une grille datée.",
        "**Ce que le vendeur ne peut plus faire** : créer un produit sans catégorie, inventer un code, taper un prix sur la ligne, supprimer une fiche.",
        "**Ce qui est mesuré** : doublons détectés, codes inconnus au scan, fiches sans photo ou sans prix, lignes refusées à la reprise et leur sort.",
      ], faq: [
        { q: "Pourquoi trois niveaux et pas une ligne par produit ?", a: "Parce que trois choses différentes ont besoin de vivre à trois endroits : la description et les photos une fois, le stock là où l'attribut change, le code-barres et le prix là où on scanne et on vend. Une ligne par produit force à copier la description douze fois, à éclater le stock et à inventer un produit pour chaque carton." },
        { q: "Un carton est-il un produit à part ?", a: "Non. C'est un conditionnement de la même variante, avec son propre code-barres, un facteur vers l'unité de base, 4 par exemple, et son propre prix. Le scan d'un carton fait entrer ou sortir 4 unités du même stock." },
        { q: "Que deviennent nos anciens codes ?", a: "Des alias de la variante. La recherche, les anciennes factures et les habitudes des vendeurs continuent de les trouver, mais il n'y a plus qu'un stock et une grille de prix derrière. Un alias ne peut pas pointer vers deux fiches." },
        { q: "Et les attributs ? Qui les définit ?", a: "La catégorie, pendant la première semaine, avec le gérant et le magasinier : attributs obligatoires et attribut variant. Un vendeur ne peut pas créer une variante en dehors des valeurs prévues ; si une valeur manque, elle s'ajoute à la catégorie, pas sur une ligne." },
        { q: "Comment reprend-on un fichier de dix ans ?", a: "Par un rapprochement proposé puis confirmé écran par écran, un essai à blanc qui ne modifie rien, des fusions appliquées avec les anciens codes en alias, des lignes refusées remontées au gérant par écrit, et le stock additionné une fois en unités de base. Deux semaines dans le calendrier type." },
        { q: "Les codes-barres, on les invente ?", a: "Pour les produits du commerce, on scanne celui du fabricant, qui est unique. Pour les produits maison ou sans code, l'application en génère un interne, et il est unique dans le catalogue. Les GTIN publics existent en 8, 12, 13 et 14 chiffres ; les codes à 14 chiffres servent aux cartons et palettes, pas à la caisse, selon la documentation publique du système." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, dont la première sans code et deux pour la reprise. Un catalogue de quelques centaines de références avec peu de variantes prend moins ; un grossiste avec des milliers de lignes et des conditionnements multiples prend les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le stock se compte à la variante, le prix et le code-barres vivent au conditionnement, la description et les photos vivent au modèle, une fois." },
      { after: 3, text: "Les anciens codes ne sont pas perdus : ils deviennent des alias, et il n'y a plus qu'un stock et une grille de prix derrière." },
    ],
    cta: { eyebrow: 'Envoyez-nous votre fichier produits, nous montrons les doublons et la fiche qu’ils deviennent', title: "Grossiste, commerçant ou fondateur en France : nous construisons la fiche produit à trois niveaux, les codes-barres uniques, les grilles de prix et la reprise de votre ancien fichier", body: "Un essai à blanc sur votre fichier, la liste des fusions proposées et des lignes refusées, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.stock, kind: '2027', name: 'Stock faux : journal de mouvements, réservations, inventaire tournant' },
      { href: L.excel, kind: '2027', name: 'Importer un fichier Excel chaque semaine sans casser' },
      { href: L.recherche, kind: '2027', name: 'Recherche dans une application : catalogue arabe, français, darija' },
      { href: L.devis, kind: '2027', name: 'Du devis à la facture : moteur de prix, remises, versions' },
    ] },
  },
  en: {
    kind: 'Catalogue · Product record · Variants · 2027', title: "“The same product exists in twelve lines in our file”: what gets built in an application in 2027 so that a product exists only once, model, variants, packagings, barcodes, prices, take-over",
    dek: "“The 5-litre oil exists twelve times in our file: HU5, HUILE5L, FL-5, an old code, a promo code. Three different prices, stock split twelve ways, and every seller types the one they know. The case of four is a thirteenth product.” A clean catalogue is not a tidier Excel file, it is a construction: a model that carries the description and photos once, variants that differ by one attribute only and where stock is counted, packagings that each carry their barcode, their factor to the base unit and their price, attributes imposed by the category, aliases for old codes, dated price grids, a status and a history, and a take-over that merges the twelve lines without losing one.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Product record', 'Variants', 'Packagings', 'Barcodes', 'Algeria 2027'],
    intro: [
      "**Short answer.** A product lives at **three levels**. The **model** carries what is described and photographed: name in two languages, brand, category, supplier, description, photos; it is not sold. The **variant** carries the one attribute that changes, volume, size, colour, dosage, and that is where **stock is counted**, in base units; its reference is generated, not typed. The **packaging** carries what is scanned and sold: a **barcode** unique across the whole catalogue, a **factor** to the base unit, a case of 4 is worth 4, and its entry in dated **price grids**, retail, wholesale, promotion. **Attributes** are defined per **category**, required or variant, so that a seller cannot create “T-shirt XL blue 2” on the fly. Old codes become **aliases**, never duplicates. A record has a **status**, draft, active, end of life, archived, and a **history** of every change; it is not deleted. And the **take-over** of the old file goes through a dry run, proposed merges and lines refused in writing.",
      "This guide is for the wholesaler whose catalogue has grown in a file for ten years, the shopkeeper opening an online store who discovers every product exists three times, the founder based in France who wants a catalogue sellable on the site, at the till and by the sales reps, and the storekeeper who scans a case and invoices a unit. It does not repeat how to keep stock right, described in [the stock guide](" + L.stock + "), nor how to import a file every week, described in [the import guide](" + L.excel + "); it describes the structure those two guides assume, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'One product, three levels', body: [
        "The figure follows a table oil from the model down to the pallet. What lives at which level is not a matter of taste, it is what decides whether scanning, stock and price are right.",
      ], visual: 'arbre', after: [
        "The **model** carries what is written once: the name in French and Arabic, the brand, the category, the supplier, the description and the photos. It has no stock and no price, because nobody sells “Fleurial oil”, they sell a precise volume. The **variant** carries the value of its category's variant attribute, here the volume, and it is the one with stock, counted in base units in the movement ledger of [the stock guide](" + L.stock + "). Its reference is composed by the application from the model and the attribute, HT-FLEU-5, never typed by a seller.",
        "The **packaging** is what you hold in your hand and what you scan: the bottle, the case of 4, the pallet of 112 cases. Each has its barcode, its factor to the base unit, 1, 4, 448, and its entry in the price grids. When the storekeeper scans a case at receiving, the variant's stock goes up by 4; when the till scans a bottle, it goes down by 1. Retail barcodes (GTINs) come in 8, 12, 13 and 14 digits; the 14-digit code serves logistic units, cases and pallets, and is not read at the till, according to the public documentation of the GTIN system. References, codes, factors and prices in the figure are a constructed example.",
      ] },
      { heading: 'Creating a product properly, in six steps', body: [
        "The order of the steps is the one the creation screen imposes, and it starts with the category, because the category says which fields exist.",
      ], visual: 'etapes', after: [
        "**Choose the category**: it carries the list of required attributes, brand and supplier for an oil, dosage and form for a medicine, and the variant attribute, volume, size, colour; no category, no record. **Describe the model**: name in two languages, brand, supplier, description, photos; it is the only free entry, and it is done once. **Declare the variants**: one per value of the variant attribute, 1 L, 2 L, 5 L; the reference is generated, and a value already taken is refused. This is the accented step, because it is where Excel files manufacture their duplicates: a new line typed by hand with an invented code.",
        "**Declare the packagings**: the base unit first, then the case and the pallet with their factor; a factor is checked at receiving, an opened case holding 6 instead of 4 is an anomaly, not a silent correction. **Scan the codes**: one barcode per packaging, read by scanner rather than typed; a code already present elsewhere in the catalogue is refused at entry with the name of the record that carries it. **Set the prices**: per packaging and per grid, retail, wholesale, promotion with start and end dates; a sales line reads the grid, following the rule set in [the quote and invoice guide](" + L.devis + "), and never retypes a price.",
      ] },
      { heading: 'The catalogue, in five layers', body: [
        "Identifiers are the accented layer: a scanned code must find exactly one packaging, across the whole catalogue, always.",
      ], visual: 'couches', after: [
        "**Structure.** Model, variants, packagings; attributes defined per category; one generated reference per level. **Identifiers.** A barcode belongs to exactly one packaging across the whole catalogue, and the constraint is in the database, not in an instruction; old internal codes, HU5, HUILE5L, become aliases of the variant, so that search, old invoices and sellers' habits keep finding the product; the supplier's reference is kept for orders and for importing their files, described in [the import guide](" + L.excel + "). **Prices.** Grids per packaging, retail, wholesale, promotion; every price has a start date and an end date, and the till of [the checkout guide](" + L.caisse + ") and the portal of [the B2B ordering guide](" + L.b2b + ") read the same grid.",
        "**Content.** Photos live at the model level, or at the variant when the colour changes; variants inherit the model's, and a photo is never copied twelve times. Descriptions are bilingual and indexed by the search described in [the search guide](" + L.recherche + "). **Record life.** Status draft, active, end of life, archived; at end of life, the remainder is sold but no longer reordered; archived, the record stays readable from old invoices but no longer appears in sales. Every change is logged, who, when, old value, new value, and a record is not deleted.",
      ] },
      { heading: 'The take-over: twelve lines become one record', body: [
        "The figure shows what twelve lines of an old file for the same oil become. Nothing is lost, and one line is refused.",
      ], visual: 'reprise', after: [
        "The take-over starts with matching: lines whose label, barcode or price look alike are proposed as the same product, and the manager confirms or separates, screen by screen, not in bulk. The different internal codes become aliases of the variant; the scanned EAN is kept on the unit packaging; the Arabic label is kept on the model; the two “case” lines become one packaging with factor 4; the promo price goes into the grid, with its dates. The zero-price line is not merged silently: it is refused and raised to the manager with its reason, like any line the dry run of [the import guide](" + L.excel + ") cannot place.",
        "The stock of the twelve lines is added up in base units at take-over time, once, and recorded as a dated adjustment movement in the ledger of [the stock guide](" + L.stock + "); it will never again be split across duplicates. The same key-and-merge principle serves the customer file in [the single customer guide](" + L.client + "). Lines, codes and prices in the figure are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row of the matrix is a complaint heard at a wholesaler, a shop or a pharmacy, and the answer is the structure, not one more instruction.",
      ], visual: 'situations', after: [
        "**The same product under three codes**: one variant, three aliases; a single stock and a single price; search finds by any alias. **The case sold as a unit**: the case has its own barcode, factor and price; the scan cannot pick the wrong level, and stock moves 4 units. **The new size created on the fly**: the variant is born from an attribute value, the reference is generated, and a value already taken is refused. **The price typed on the invoice**: the line reads the packaging's dated grid, and an off-grid price requires an approved discount following [the quote and invoice guide](" + L.devis + ").",
        "**The photo missing on the site**: the photo lives at the model, variants inherit it, and a list of records without photo comes out every Monday in [the manager's dashboard](" + L.commerce + "). **The discontinued product still sold**: end-of-life status lets the remainder be sold without reorder, then archiving removes the record from sales without breaking old invoices. Expiry dates and lots, which concern pharmacies and food, are added at the stock movement level, not the record, as in [the pharmacy guide](" + L.pharmacie + ").",
      ] },
      { heading: 'Taking over a catalogue in 2027, in weeks', body: [
        "Seven weeks, two of them for the take-over, because it decides whether the catalogue will be clean or will reproduce the file.",
      ], visual: 'calendrier', after: [
        "**Week 1, categories and attributes**: with the manager and the storekeeper, the list of categories, each one's required and variant attributes, the base units; no code, and it is the week that avoids the most rework. **Week 2, structure**: model, variant, packaging, generated references, uniqueness constraint on barcodes, aliases. **Weeks 3 and 4, take-over**: matching of old lines, dry run, merges proposed screen by screen, refused lines to the manager, stock added up and recorded as an adjustment.",
        "**Week 5, prices and content**: grids per packaging, photos at the model, bilingual descriptions, list of incomplete records. **Week 6, sales and stock**: the till and orders read the scanned packaging, movements are made in base units, the end-of-life status is respected everywhere, including offline following [the offline guide](" + L.horsligne + "). **Week 7, measurement**: duplicates detected per week, unknown codes at scan, records without photo, Monday review. Records, like everything else, are exposed to other software through [the integration guide](" + L.integrer + ").",
      ], list: [
        "**What the manager sees**: one product, one record, and under it its variants and packagings; a scan that always lands on the right level; prices that come from a dated grid.",
        "**What the seller can no longer do**: create a product without a category, invent a code, type a price on the line, delete a record.",
        "**What is measured**: duplicates detected, unknown codes at scan, records without photo or price, lines refused at take-over and their fate.",
      ], faq: [
        { q: "Why three levels and not one line per product?", a: "Because three different things need to live in three places: the description and photos once, the stock where the attribute changes, the barcode and price where you scan and sell. One line per product forces you to copy the description twelve times, split the stock and invent a product for every case." },
        { q: "Is a case a separate product?", a: "No. It is a packaging of the same variant, with its own barcode, a factor to the base unit, 4 for instance, and its own price. Scanning a case moves 4 units in or out of the same stock." },
        { q: "What happens to our old codes?", a: "They become aliases of the variant. Search, old invoices and sellers' habits keep finding them, but there is only one stock and one price grid behind. An alias cannot point to two records." },
        { q: "And attributes? Who defines them?", a: "The category, during the first week, with the manager and the storekeeper: required attributes and the variant attribute. A seller cannot create a variant outside the planned values; if a value is missing, it is added to the category, not on a line." },
        { q: "How do you take over a ten-year-old file?", a: "Through matching proposed then confirmed screen by screen, a dry run that changes nothing, merges applied with old codes as aliases, refused lines raised to the manager in writing, and stock added up once in base units. Two weeks in the typical calendar." },
        { q: "Barcodes, do we make them up?", a: "For retail products, you scan the manufacturer's, which is unique. For house products or products without a code, the application generates an internal one, unique across the catalogue. Public GTINs come in 8, 12, 13 and 14 digits; 14-digit codes serve cases and pallets, not the till, according to the system's public documentation." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for the take-over. A catalogue of a few hundred references with few variants takes less; a wholesaler with thousands of lines and multiple packagings takes all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Stock is counted at the variant, price and barcode live at the packaging, description and photos live at the model, once." },
      { after: 3, text: "Old codes are not lost: they become aliases, and there is only one stock and one price grid behind." },
    ],
    cta: { eyebrow: 'Send us your product file, we show the duplicates and the record they become', title: "Wholesaler, shopkeeper or founder in France: we build the three-level product record, unique barcodes, price grids and the take-over of your old file", body: "A dry run on your file, the list of proposed merges and refused lines, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.stock, kind: '2027', name: 'Wrong stock: movement ledger, reservations, cycle counts' },
      { href: L.excel, kind: '2027', name: 'Importing an Excel file every week without breaking anything' },
      { href: L.recherche, kind: '2027', name: 'Search in an application: Arabic, French, Darija catalogue' },
      { href: L.devis, kind: '2027', name: 'From quote to invoice: pricing engine, discounts, versions' },
    ] },
  },
  ar: {
    kind: 'كتالوج · بطاقة منتج · متغيرات · 2027', title: "«المنتج نفسه موجود في اثني عشر سطراً في ملفنا»: ما يُبنى في تطبيق سنة 2027 كي لا يوجد المنتج إلا مرة واحدة، طراز، متغيرات، تعبئات، باركودات، أسعار، استلام",
    dek: "«زيت 5 لترات موجود اثنتي عشرة مرة في ملفنا: HU5، HUILE5L، FL-5، رمز قديم، رمز ترويج. ثلاثة أسعار مختلفة، مخزون مبعثر على اثني عشر، وكل بائع يكتب السطر الذي يعرفه. والكرتون من أربعة منتج ثالث عشر.» الكتالوج النظيف ليس ملف Excel أحسن ترتيباً، بل بناء: طراز يحمل الوصف والصور مرة واحدة، متغيرات لا تختلف إلا بسمة واحدة وفيها يُعدّ المخزون، تعبئات تحمل كل منها باركودها ومعاملها نحو وحدة الأساس وسعرها، سمات تفرضها الفئة، بدائل للرموز القديمة، شبكات أسعار مؤرَّخة، حالة وتاريخ، واستلام يدمج الأسطر الاثني عشر دون أن يفقد واحداً.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['بطاقة منتج', 'متغيرات', 'تعبئات', 'باركودات', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** يعيش المنتج في **ثلاثة مستويات**. يحمل **الطراز** ما يُوصف ويُصوَّر: اسم بلغتين، علامة، فئة، مورد، وصف، صور؛ وهو لا يُباع. ويحمل **المتغير** السمة الوحيدة التي تتغير، سعة أو مقاس أو لون أو جرعة، وهناك **يُعدّ المخزون** بوحدات الأساس؛ ومرجعه مولَّد لا مكتوب. وتحمل **التعبئة** ما يُمسح ويُباع: **باركود** فريد في الكتالوج كله، و**معامل** نحو وحدة الأساس، فالكرتون من 4 يساوي 4، ومدخلها في **شبكات الأسعار** المؤرَّخة، تجزئة وجملة وترويج. و**السمات** معرَّفة لكل **فئة**، إلزامية أو متغيرة، كي لا يستطيع بائع إنشاء «تي شيرت XL أزرق 2» على عجل. والرموز القديمة تصير **بدائل** لا تكرارات أبداً. وللبطاقة **حالة**، مسودة ونشطة ونهاية عمر ومؤرشفة، و**تاريخ** لكل تغيير؛ وهي لا تُحذف. و**استلام** الملف القديم يمر بتجربة على الفارغ ودمج مقترح وأسطر مرفوضة كتابةً.",
      "هذا الدليل موجَّه إلى تاجر الجملة الذي كبر كتالوجه في ملف طوال عشر سنوات، وإلى التاجر الذي يفتح متجراً إلكترونياً فيكتشف أن كل منتج موجود ثلاث مرات، وإلى المؤسس المقيم في فرنسا الذي يريد كتالوجاً قابلاً للبيع على الموقع وفي الصندوق وعبر المندوبين، وإلى أمين المخزن الذي يمسح كرتوناً ويفوتر وحدة. وهو لا يعيد كيف يُحفظ مخزون صحيح، الموصوف في [دليل المخزون](" + L.stock + ")، ولا كيف يُستورد ملف كل أسبوع، الموصوف في [دليل الاستيراد](" + L.excel + ")؛ بل يصف البنية التي يفترضها هذان الدليلان، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + ").",
    ],
    sections: [
      { heading: 'منتج واحد، ثلاثة مستويات', body: [
        "يتتبع الشكل زيت مائدة من الطراز حتى الطبلية. وما يعيش في أي مستوى ليس مسألة ذوق، بل هو ما يقرر إن كان المسح والمخزون والسعر صحيحة.",
      ], visual: 'arbre', after: [
        "يحمل **الطراز** ما يُكتب مرة واحدة: الاسم بالفرنسية والعربية، والعلامة، والفئة، والمورد، والوصف، والصور. وليس له مخزون ولا سعر، لأن أحداً لا يبيع «زيت فليوريال» بل سعة محددة. ويحمل **المتغير** قيمة السمة المتغيرة لفئته، هنا السعة، وهو صاحب المخزون المعدود بوحدات الأساس في سجل الحركات من [دليل المخزون](" + L.stock + "). ومرجعه يركّبه التطبيق من الطراز والسمة، HT-FLEU-5، ولا يكتبه بائع أبداً.",
        "و**التعبئة** هي ما تمسكه بيدك وما تمسحه: القارورة، والكرتون من 4، والطبلية من 112 كرتوناً. ولكل منها باركودها ومعاملها نحو وحدة الأساس، 1 و4 و448، ومدخلها في شبكات الأسعار. وحين يمسح أمين المخزن كرتوناً عند الاستلام يرتفع مخزون المتغير بـ 4؛ وحين يمسح الصندوق قارورة ينخفض بـ 1. وباركودات التجارة (GTIN) توجد بـ 8 و12 و13 و14 رقماً؛ والرمز ذو 14 رقماً للوحدات اللوجستية، الكراتين والطبليات، ولا يُقرأ في الصندوق، بحسب الوثائق العامة لنظام GTIN. والمراجع والرموز والمعاملات والأسعار في الشكل مثال مبني.",
      ] },
      { heading: 'إنشاء منتج على نحو صحيح، في ست خطوات', body: [
        "ترتيب الخطوات هو ما تفرضه شاشة الإنشاء، ويبدأ بالفئة لأنها هي التي تقول أي الحقول موجودة.",
      ], visual: 'etapes', after: [
        "**اختيار الفئة**: تحمل قائمة السمات الإلزامية، العلامة والمورد لزيت، والجرعة والشكل لدواء، والسمة المتغيرة، سعة أو مقاس أو لون؛ ولا بطاقة بلا فئة. **وصف الطراز**: اسم بلغتين، علامة، مورد، وصف، صور؛ وهو الإدخال الحر الوحيد ويُفعل مرة واحدة. **إعلان المتغيرات**: واحد لكل قيمة من السمة المتغيرة، 1 ل و2 ل و5 ل؛ والمرجع مولَّد، والقيمة المأخوذة سلفاً مرفوضة. وهذه الخطوة المميزة، لأنها حيث تصنع ملفات Excel تكراراتها: سطر جديد يُكتب يدوياً برمز مخترَع.",
        "**إعلان التعبئات**: وحدة الأساس أولاً، ثم الكرتون والطبلية بمعاملهما؛ والمعامل يُتحقق منه عند الاستلام، فكرتون مفتوح فيه 6 بدل 4 شذوذ لا تصحيح صامت. **مسح الرموز**: باركود لكل تعبئة، يُقرأ بالماسح لا يُكتب؛ والرمز الموجود في مكان آخر من الكتالوج يُرفض عند الإدخال مع اسم البطاقة التي تحمله. **تحديد الأسعار**: لكل تعبئة ولكل شبكة، تجزئة وجملة وترويج بتاريخ بداية ونهاية؛ وسطر البيع يقرأ الشبكة، وفق القاعدة الموضوعة في [دليل عرض السعر والفاتورة](" + L.devis + ")، ولا يعيد كتابة سعر أبداً.",
      ] },
      { heading: 'الكتالوج، في خمس طبقات', body: [
        "المعرّفات هي الطبقة المميزة: الرمز الممسوح يجب أن يجد تعبئة واحدة بالضبط، في الكتالوج كله، دائماً.",
      ], visual: 'couches', after: [
        "**البنية.** طراز، متغيرات، تعبئات؛ سمات معرَّفة لكل فئة؛ مرجع مولَّد لكل مستوى. **المعرّفات.** الباركود ملك لتعبئة واحدة في الكتالوج كله، والقيد في قاعدة البيانات لا في تعليمة؛ والرموز الداخلية القديمة، HU5 وHUILE5L، تصير بدائل للمتغير كي يظل البحث والفواتير القديمة وعادات البائعين تجد المنتج؛ ومرجع المورد محفوظ للطلبيات ولاستيراد ملفاته الموصوف في [دليل الاستيراد](" + L.excel + "). **الأسعار.** شبكات لكل تعبئة، تجزئة وجملة وترويج؛ ولكل سعر تاريخ بداية وتاريخ نهاية، ويقرأ صندوق [دليل التحصيل](" + L.caisse + ") وبوابة [دليل الطلب بين الشركات](" + L.b2b + ") الشبكة نفسها.",
        "**المحتوى.** تعيش الصور في مستوى الطراز، أو المتغير حين يتغير اللون؛ وترث المتغيرات صور الطراز، ولا تُنسخ صورة اثنتي عشرة مرة أبداً. والأوصاف ثنائية اللغة ومفهرسة في البحث الموصوف في [دليل البحث](" + L.recherche + "). **حياة البطاقة.** حالة مسودة ونشطة ونهاية عمر ومؤرشفة؛ في نهاية العمر يُباع الباقي ولا يُعاد التموين؛ والمؤرشفة تبقى مقروءة من الفواتير القديمة لكنها لا تظهر في البيع. وكل تغيير مسجَّل، من ومتى والقيمة القديمة والجديدة، والبطاقة لا تُحذف.",
      ] },
      { heading: 'الاستلام: اثنا عشر سطراً تصير بطاقة', body: [
        "يُظهر الشكل ما تصير إليه اثنا عشر سطراً من ملف قديم للزيت نفسه. لا شيء يضيع، وسطر واحد يُرفض.",
      ], visual: 'reprise', after: [
        "يبدأ الاستلام بالمطابقة: الأسطر التي تتشابه تسميتها أو باركودها أو سعرها تُقترح منتجاً واحداً، والمسيّر يؤكد أو يفصل، شاشةً شاشة لا جملةً. والرموز الداخلية المختلفة تصير بدائل للمتغير؛ ورمز EAN الممسوح يُحفظ على تعبئة الوحدة؛ والتسمية العربية تُحفظ على الطراز؛ وسطرا «الكرتون» يصيران تعبئة واحدة بمعامل 4؛ والسعر الترويجي يذهب إلى الشبكة بتواريخه. والسطر بسعر صفر لا يُدمج بصمت: يُرفض ويُرفع إلى المسيّر مع سببه، ككل سطر لا تعرف التجربة على الفارغ من [دليل الاستيراد](" + L.excel + ") أين تضعه.",
        "ويُجمع مخزون الأسطر الاثني عشر بوحدات الأساس لحظة الاستلام، مرة واحدة، ويُسجَّل حركة تسوية مؤرَّخة في سجل [دليل المخزون](" + L.stock + ")؛ ولن يتوزع بعد ذلك على تكرارات أبداً. ومبدأ المفتاح والدمج نفسه يخدم ملف الزبائن في [دليل الزبون الواحد](" + L.client + "). والأسطر والرموز والأسعار في الشكل مثال مبني.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر من المصفوفة شكوى سُمعت عند تاجر جملة أو تاجر أو صيدلية، والجواب هو البنية لا تعليمة إضافية.",
      ], visual: 'situations', after: [
        "**المنتج نفسه تحت ثلاثة رموز**: متغير واحد وثلاثة بدائل؛ مخزون واحد وسعر واحد؛ والبحث يجد بأي بديل. **الكرتون يُباع كوحدة**: للكرتون باركوده ومعامله وسعره؛ والمسح لا يستطيع أن يخطئ المستوى، والمخزون يخرج 4 وحدات. **المقاس الجديد يُنشأ على عجل**: المتغير يولد من قيمة سمة، والمرجع مولَّد، والقيمة المأخوذة سلفاً مرفوضة. **السعر يُكتب على الفاتورة**: السطر يقرأ شبكة التعبئة المؤرَّخة، والسعر خارج الشبكة يستلزم خصماً معتمداً وفق [دليل عرض السعر والفاتورة](" + L.devis + ").",
        "**الصورة ناقصة على الموقع**: الصورة تعيش في الطراز وترثها المتغيرات، وقائمة البطاقات بلا صورة تخرج كل اثنين في [لوحة المسيّر](" + L.commerce + "). **المنتج المتوقف ما زال يُباع**: حالة نهاية العمر تسمح ببيع الباقي بلا إعادة تموين، ثم تُخرج الأرشفة البطاقة من البيع دون كسر الفواتير القديمة. وتواريخ الصلاحية والدفعات، التي تخص الصيدلية والغذاء، تُضاف في مستوى حركة المخزون لا البطاقة، كما في [دليل الصيدلية](" + L.pharmacie + ").",
      ] },
      { heading: 'استلام كتالوج سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، منها اثنان للاستلام، لأنه هو ما يقرر إن كان الكتالوج سيكون نظيفاً أم سيعيد إنتاج الملف.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الفئات والسمات**: مع المسيّر وأمين المخزن، قائمة الفئات والسمات الإلزامية والمتغيرة لكل منها ووحدات الأساس؛ بلا كود، وهو الأسبوع الذي يجنّب أكثر الإعادات. **الأسبوع 2، البنية**: طراز، متغير، تعبئة، مراجع مولَّدة، قيد تفرّد الباركودات، بدائل. **الأسبوعان 3 و4، الاستلام**: مطابقة الأسطر القديمة، تجربة على الفارغ، دمج مقترح شاشةً شاشة، أسطر مرفوضة للمسيّر، مخزون مجموع ومسجَّل تسوية.",
        "**الأسبوع 5، الأسعار والمحتوى**: شبكات لكل تعبئة، صور في الطراز، أوصاف ثنائية اللغة، قائمة البطاقات الناقصة. **الأسبوع 6، البيع والمخزون**: الصندوق والطلبيات يقرآن التعبئة الممسوحة، والحركات بوحدات الأساس، وحالة نهاية العمر محترمة في كل مكان، حتى دون اتصال وفق [دليل العمل دون اتصال](" + L.horsligne + "). **الأسبوع 7، القياس**: تكرارات مكتشفة أسبوعياً، رموز مجهولة عند المسح، بطاقات بلا صورة، مراجعة الاثنين. والبطاقات، كغيرها، تُعرض للبرمجيات الأخرى عبر [دليل التكامل](" + L.integrer + ").",
      ], list: [
        "**ما يراه المسيّر**: منتج واحد، بطاقة واحدة، وتحتها متغيراتها وتعبئاتها؛ مسح يقع دائماً على المستوى الصحيح؛ أسعار تأتي من شبكة مؤرَّخة.",
        "**ما لم يعد البائع يستطيعه**: إنشاء منتج بلا فئة، اختراع رمز، كتابة سعر على السطر، حذف بطاقة.",
        "**ما يُقاس**: تكرارات مكتشفة، رموز مجهولة عند المسح، بطاقات بلا صورة أو سعر، أسطر مرفوضة عند الاستلام ومصيرها.",
      ], faq: [
        { q: "لماذا ثلاثة مستويات لا سطر لكل منتج؟", a: "لأن ثلاثة أشياء مختلفة تحتاج أن تعيش في ثلاثة أماكن: الوصف والصور مرة واحدة، والمخزون حيث تتغير السمة، والباركود والسعر حيث يُمسح ويُباع. وسطر لكل منتج يجبر على نسخ الوصف اثنتي عشرة مرة وتبعثر المخزون واختراع منتج لكل كرتون." },
        { q: "هل الكرتون منتج مستقل؟", a: "لا. إنه تعبئة من المتغير نفسه، بباركودها ومعامل نحو وحدة الأساس، 4 مثلاً، وسعرها. ومسح كرتون يُدخل أو يُخرج 4 وحدات من المخزون نفسه." },
        { q: "ماذا يصير برموزنا القديمة؟", a: "تصير بدائل للمتغير. يظل البحث والفواتير القديمة وعادات البائعين تجدها، لكن خلفها مخزون واحد وشبكة أسعار واحدة. والبديل لا يستطيع الإشارة إلى بطاقتين." },
        { q: "والسمات؟ من يعرّفها؟", a: "الفئة، في الأسبوع الأول، مع المسيّر وأمين المخزن: السمات الإلزامية والسمة المتغيرة. ولا يستطيع بائع إنشاء متغير خارج القيم المقررة؛ وإن نقصت قيمة تُضاف إلى الفئة لا إلى سطر." },
        { q: "كيف نستلم ملفاً عمره عشر سنوات؟", a: "بمطابقة مقترحة ثم مؤكدة شاشةً شاشة، وتجربة على الفارغ لا تغيّر شيئاً، ودمج مطبَّق مع الرموز القديمة بدائل، وأسطر مرفوضة مرفوعة إلى المسيّر كتابةً، ومخزون مجموع مرة واحدة بوحدات الأساس. أسبوعان في التقويم النموذجي." },
        { q: "الباركودات، هل نخترعها؟", a: "للمنتجات التجارية نمسح باركود الصانع، وهو فريد. وللمنتجات المحلية أو بلا رمز يولّد التطبيق رمزاً داخلياً فريداً في الكتالوج. ورموز GTIN العامة توجد بـ 8 و12 و13 و14 رقماً؛ ورموز 14 رقماً للكراتين والطبليات لا للصندوق، بحسب الوثائق العامة للنظام." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، أولها بلا كود واثنان للاستلام. وكتالوج من بضع مئات المراجع بمتغيرات قليلة يأخذ أقل؛ وتاجر جملة بآلاف الأسطر وتعبئات متعددة يأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "يُعدّ المخزون عند المتغير، ويعيش السعر والباركود عند التعبئة، ويعيش الوصف والصور عند الطراز، مرة واحدة." },
      { after: 3, text: "الرموز القديمة لا تضيع: تصير بدائل، وخلفها مخزون واحد وشبكة أسعار واحدة." },
    ],
    cta: { eyebrow: 'أرسلوا لنا ملف منتجاتكم، نُريكم التكرارات والبطاقة التي تصير إليها', title: "تاجر جملة أو تاجر أو مؤسس في فرنسا: نبني بطاقة المنتج بثلاثة مستويات، والباركودات الفريدة، وشبكات الأسعار، واستلام ملفكم القديم", body: "تجربة على الفارغ على ملفكم، وقائمة الدمج المقترح والأسطر المرفوضة، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.stock, kind: '2027', name: 'مخزون خاطئ: سجل حركات، حجوزات، جرد دوري' },
      { href: L.excel, kind: '2027', name: 'استيراد ملف Excel كل أسبوع دون كسر شيء' },
      { href: L.recherche, kind: '2027', name: 'البحث في تطبيق: كتالوج عربي، فرنسي، دارجة' },
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة: محرك الأسعار، خصومات، نسخ' },
    ] },
  },
};

const KEYWORDS = "fiche produit application algérie 2027, variantes produit application, conditionnements carton palette facteur unité de base, code-barres unique par conditionnement, gtin ean-13 gtin-14 carton, catalogue produit doublons fusion, alias anciens codes produit, grille de prix par conditionnement datée, attributs par catégorie variantes, reprise catalogue excel essai à blanc, catalogue grossiste algérie application, développement application gestion catalogue algérie, product catalogue data model variants packagings barcodes 2027 algeria, بطاقة منتج متغيرات تعبئات باركود تطبيق الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
