import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-pieces-auto-algerie-2027-magasin-pieces-detachees-recherche-par-vehicule-references-equivalentes-emplacements-demandes-non-servies.mjs';

const SLUG = 'logiciel-pieces-auto-algerie-2027-magasin-pieces-detachees-recherche-par-vehicule-references-equivalentes-emplacements-demandes-non-servies';
const FIGURES = ['references', 'service', 'fiche', 'manquees', 'couches', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  fiche: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  garage: '/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/',
  gescom: '/blog/logiciel-gestion-commerciale-algerie-2027-devis-commande-bon-de-livraison-facture-stock-reglements-erp-ou-pas-sans-ressaisie/',
  quincaillerie: '/blog/logiciel-quincaillerie-materiaux-de-construction-algerie-2027-caisse-stock-unites-multiples-credit-artisans-marchandise-payee-non-enlevee/',
};

const CONTENT = {
  fr: {
    kind: 'Pièces auto · Algérie · 2027', title: "Logiciel pièces auto en Algérie (2027) : magasin de pièces détachées, recherche par véhicule, références équivalentes et stock par emplacement, quand la bonne pièce est en rayon et que personne ne la trouve",
    dek: "« J'ai un magasin de pièces détachées : douze mille références, cinq marques pour la même plaquette, et tout est dans la tête de mon vendeur le plus ancien. Quand il est absent, on répond au client qu'on n'a pas la pièce alors qu'elle est sur l'étagère sous une autre référence. Une pièce sur dix revient parce que ce n'était pas la bonne, et je ne sais pas ce qu'on me demande tous les jours et que je n'ai jamais. Quel logiciel, quelle application me faut-il ? » Un logiciel de caisse ne règle rien de cela. Il faut identifier le véhicule, relier la référence du constructeur à ses équivalentes, ranger chaque référence dans une case, et noter chaque demande à laquelle on répond non.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de pièces auto', 'Pièces détachées', 'Références équivalentes', 'Stock par emplacement', 'Taux de service', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de pièces auto se juge sur quatre choses. **Identifier le véhicule** : marque, modèle, année, moteur, ou le numéro de châssis de dix-sept caractères. **Relier les références** : celle du constructeur, les équivalentes des autres marques et les véhicules compatibles, de sorte que chercher l'une trouve toutes les autres. **Ranger par emplacement** : allée, étagère, case, pour sortir la pièce en une minute. **Noter les demandes non servies**, la seule mesure de ce qu'il faut acheter. Autour : deux qualités proposées au client, les retours rattachés à la vente, le compte des mécaniciens, et une application où le garage envoie sa demande avant de se déplacer.",
      "Ce guide s'adresse au gérant d'un magasin de pièces détachées, d'un comptoir de rechange ou d'un importateur qui vend aux garages, de quelques milliers à quelques dizaines de milliers de références, et au fondateur installé en France qui veut suivre le magasin familial. Les notions citées viennent de sources publiques : le numéro d'identification du véhicule, le marché de la rechange, la pièce d'origine, la rupture de stock, le taux de service. Le véhicule, les références, les stocks et les prix des figures sont un exemple construit, pas des prix de marché. Ce guide ne traite ni des règles d'importation ni de la conformité des pièces : elles se voient avec votre conseil.",
    ],
    sections: [
      { heading: "Une pièce, cinq références : la bonne est en rayon sous un autre nom", body: [
        "La figure part d'une demande au comptoir, des plaquettes de frein avant pour une citadine de 2015, et suit les références jusqu'à l'étagère.",
      ], visual: 'references', after: [
        "**Pourquoi cinq références.** La pièce montée à l'usine porte la référence du constructeur. Le marché de la rechange, le marché secondaire des pièces de l'industrie automobile, propose la même pièce sous d'autres marques : pour les pièces auto, la pièce d'origine désigne en général celle du fabricant de l'équipement d'origine, et les pièces de rechange sont celles que fabriquent d'autres entreprises. Chaque marque a sa propre référence. Dans l'exemple, la référence du constructeur est à zéro ; deux des quatre équivalentes sont en rayon, neuf pièces en tout. Le vendeur qui ne connaît que la première répond « on ne l'a pas ».",
        "**Ce que fait le logiciel.** Il garde le lien entre toutes ces références et les véhicules qu'elles équipent. Qu'on cherche par véhicule, par la référence du constructeur ou par celle d'une marque, la réponse est la même : ce qui est en stock, sous quelle marque, à quel prix, dans quelle case. **Identifier le véhicule.** Deux versions d'un même modèle n'ont pas les mêmes freins. Le numéro d'identification du véhicule, appelé aussi numéro de châssis, est un code unique de dix-sept caractères, lettres capitales et chiffres, sans les lettres I, O et Q ; noté avec la demande, il lève le doute entre deux motorisations. **D'où viennent les équivalences.** Des listes et des catalogues de vos fournisseurs, et de ce que sait votre vendeur le plus ancien : on commence par les deux cents pièces qui tournent le plus. La structure d'une fiche à plusieurs références est celle du [guide sur la fiche produit](" + L.fiche + ").",
      ] },
      { heading: "Servir un client au comptoir, en six temps", body: [
        "Le troisième temps est accentué : c'est l'élargissement aux références équivalentes qui change la réponse.",
      ], visual: 'service', after: [
        "**Identifier** le véhicule, puis **trouver** la pièce par famille, freinage, filtration, distribution, suspension. **Élargir** : l'écran montre toutes les références équivalentes, en stock ou non. **Proposer** : deux qualités quand elles existent, avec leur prix ; le client choisit, et le vendeur n'a plus à défendre un seul prix.",
        "**Sortir du rayon** : la case est indiquée, et la pièce est comparée à l'ancienne quand le client l'a apportée. **Noter** : si la réponse est non, la demande est enregistrée en deux touches, avec le véhicule. Une vente à un mécanicien passe sur son compte, avec un plafond et un relevé, comme dans [le guide sur le crédit client](" + L.credit + ").",
      ] },
      { heading: "Ce que la fiche d'une pièce doit porter", body: [
        "La figure donne, pour six informations, à quoi elles servent et ce qui se passe quand elles manquent.",
      ], visual: 'fiche', after: [
        "**Les trois premières** font trouver la pièce : équivalences, véhicules compatibles, qualité. **Les trois suivantes** font tenir la promesse : l'emplacement, pour que la pièce affichée soit sortie en une minute ; le fournisseur et son délai, pour donner une date au lieu d'un « repassez » ; les conditions de retour.",
        "**Les retours.** Dans ce métier, une part des pièces revient : mauvaise version, panne mal diagnostiquée, client qui a trouvé ailleurs. Le retour se rattache à la vente, porte un motif, et la pièce repart en rayon, chez le fournisseur ou est mise de côté. Quand vous reprenez l'ancienne pièce en échange, un alternateur ou un démarreur par exemple, elle est suivie de la même façon jusqu'à son renvoi. **Les emplacements.** Une case par référence, une étiquette par case, et un inventaire tournant par allée, selon la méthode du [guide sur le stock faux](" + L.stock + ").",
      ] },
      { heading: "Les demandes non servies : 24 ventes manquées que personne n'a comptées", body: [
        "La figure reprend un mois de demandes sur cinq références : ce qui a été servi, et ce qui ne l'a pas été.",
      ], visual: 'manquees', after: [
        "**Ce que les ventes ne disent pas.** Une rupture de stock est l'événement qui épuise le stock ; elle fait perdre des ventes, mécontente les clients et entame leur fidélité, et le client peut changer de magasin ou prendre un produit de substitution. Rien de cela n'apparaît dans vos ventes. Dans l'exemple, sur 150 demandes, 126 sont servies : le taux de service, les quantités servies rapportées aux quantités demandées, est de 84 %. Les 24 demandes manquées représentent 247 200 DA, dont 148 000 pour huit kits de distribution que le magasin ne tient presque pas.",
        "**Le geste.** Quand le vendeur répond non, il enregistre la demande : le véhicule, la pièce, la quantité. Cela prend dix secondes, et c'est la seule donnée qui manque à vos achats. **Ce qu'on en fait.** En fin de semaine, la liste des demandes non servies, classée par montant, devient la proposition d'achat ; les seuils et les délais se règlent ensuite comme dans [le guide sur le réapprovisionnement](" + L.reappro + "). Une référence demandée huit fois et jamais tenue mérite mieux sa place qu'une référence achetée par habitude.",
      ] },
      { heading: "Un logiciel de pièces auto, en cinq couches", body: [
        "La couche accentuée est le catalogue : tout le reste en dépend.",
      ], visual: 'couches', after: [
        "**Catalogue** : véhicules, familles, références et équivalences, reliés. **Stock et emplacements** : quantités par case, réservations, inventaire tournant. **Comptoir et application** : vente, devis, comptes des mécaniciens, et une application où le garage envoie sa demande avec la photo de la pièce ou le numéro de châssis, puis reçoit la disponibilité et le prix.",
        "**Retours et garantie**, puis **achats et demandes**. Pour le garage qui achète chez vous, l'outil de l'atelier est décrit dans [le guide sur les garages](" + L.garage + ") ; pour la chaîne des documents, du devis au règlement, voir [le guide sur la gestion commerciale](" + L.gescom + "). **Ce qui distingue ce métier** d'un autre commerce de comptoir, comme la [quincaillerie](" + L.quincaillerie + "), c'est le catalogue : ici, on ne cherche pas un article, on cherche ce qui va sur un véhicule.",
      ] },
      { heading: "Un magasin de pièces équipé en 2027, en semaines", body: [
        "Six semaines dans l'exemple, dont deux pour le catalogue de départ.",
      ], visual: 'calendrier', after: [
        "**Semaines 1 et 2, le catalogue de départ.** On ne saisit pas douze mille références d'un coup. On commence par les familles, les véhicules les plus courants chez vos clients, et les deux cents pièces qui tournent le plus, avec leurs équivalences ; le reste entre au fil des ventes et des réceptions. **Semaine 3, les emplacements** : allées, étagères et cases étiquetées. **Semaine 4, le stock de départ**, compté par allée.",
        "**Semaine 5, le comptoir** : recherche par véhicule, ventes, retours et demandes non servies, en parallèle de l'ancienne méthode. **Semaine 6, les achats et l'application** : la première liste d'achat tirée des demandes, les comptes des mécaniciens, l'application des garages.",
      ], list: [
        "**Ce que le gérant voit** : le taux de service, les demandes non servies classées par montant, les retours par motif, la marge par famille et par marque, le solde de chaque mécanicien.",
        "**Ce que le magasin ne fait plus** : répondre non pour une pièce qui est en rayon, dépendre d'un seul vendeur, chercher une pièce dans trois allées, acheter par habitude.",
        "**Ce qui est mesuré** : taux de service par famille, pièces retournées pour mauvaise version, références sans mouvement depuis six mois, écart d'inventaire par allée.",
        "**Ce que fait Symloop** : le catalogue de départ avec vos vendeurs, le logiciel de comptoir et de stock par emplacement, l'application pour vos garages clients, la reprise de vos fichiers, puis l'entretien.",
      ], faq: [
        { q: "Quel logiciel pour un magasin de pièces auto en Algérie ?", a: "Un logiciel de comptoir et de stock qui cherche par véhicule, relie la référence du constructeur à ses équivalentes, range chaque référence dans une case et enregistre les demandes non servies. Un logiciel de caisse généraliste gère des articles ; ici, il faut gérer ce qui va sur un véhicule." },
        { q: "Comment trouver une pièce quand on n'a pas la référence ?", a: "Par le véhicule : marque, modèle, année, moteur, ou le numéro de châssis. Le logiciel affiche la famille de pièces, puis toutes les références qui conviennent, en stock ou non. La référence relevée sur l'ancienne pièce sert ensuite à confirmer." },
        { q: "Qu'est-ce qu'une référence équivalente ?", a: "C'est la référence d'une autre marque pour la même pièce. Une plaquette a la référence du constructeur et celles de plusieurs fabricants de rechange. Le logiciel les relie, de sorte que la recherche de l'une montre le stock de toutes." },
        { q: "À quoi sert le numéro de châssis ?", a: "Il identifie un véhicule précis : c'est un code unique de dix-sept caractères, lettres capitales et chiffres, sans I, O ni Q. Noté avec la demande, il évite de confondre deux versions d'un même modèle, ce qui épargne bien des retours." },
        { q: "Comment ranger des milliers de petites pièces ?", a: "Une case par référence, une étiquette par case, avec une adresse simple : allée, étagère, case. L'adresse est sur la fiche ; le vendeur le plus récent sort la pièce aussi vite que le plus ancien. Un comptage par allée, chaque semaine, garde le stock juste." },
        { q: "Comment savoir quelles pièces acheter ?", a: "En notant chaque demande à laquelle vous répondez non. Classée par montant, cette liste dit ce que vos clients viennent chercher et que vous n'avez pas ; les ventes seules ne le montrent jamais. On y ajoute les ventes par référence et les seuils." },
        { q: "Comment gérer les retours de pièces ?", a: "Chaque retour se rattache à sa vente, avec un motif : mauvaise version, pièce défectueuse, client qui renonce. La pièce est remise en rayon, renvoyée au fournisseur ou mise de côté. Le suivi par motif montre où corriger : l'identification du véhicule, un fournisseur, une famille." },
        { q: "Peut-on avoir une application pour les garages clients ?", a: "Oui. Le garage envoie sa demande avec le véhicule, la photo de la pièce ou le numéro de châssis ; il reçoit la disponibilité, les qualités et les prix, et réserve. Le comptoir prépare la pièce, et la demande est enregistrée même quand la réponse est non." },
        { q: "Faut-il saisir toutes les références avant de commencer ?", a: "Non. On commence par les deux cents pièces qui tournent le plus, avec leurs équivalences et leurs emplacements ; le reste entre au fil des ventes et des réceptions. Un catalogue juste sur l'essentiel vaut mieux qu'un catalogue complet et faux." },
        { q: "Combien coûte un logiciel de pièces auto ?", a: "Cela dépend du nombre de postes, du nombre de références à reprendre, de l'existence d'un catalogue chez vos fournisseurs et de l'application pour les garages. Le travail le plus long est le catalogue de départ, fait avec vos vendeurs. Nous chiffrons après une matinée au comptoir et vingt références suivies du véhicule à l'étagère." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "La pièce n'est pas introuvable parce qu'elle manque : elle l'est parce qu'elle porte un autre nom." },
      { after: 3, text: "Les ventes disent ce que vous avez vendu ; elles ne disent jamais ce qu'on vous a demandé et que vous n'aviez pas." },
    ],
    cta: { eyebrow: "Notez pendant une semaine chaque demande à laquelle vous répondez non, et prenez vingt pièces qui tournent : nous vous montrons le catalogue, les équivalences et la liste d'achat que cela donne", title: "Magasin de pièces détachées, comptoir de rechange, ou fondateur en France qui suit le magasin familial : nous construisons le catalogue par véhicule, le stock par emplacement, le comptoir et l'application de vos garages", body: "Un catalogue de départ fait avec vos vendeurs, des références reliées entre elles, une case par pièce, et les demandes non servies comptées chaque semaine. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.garage, kind: '2027', name: 'Garages : devis, pièces et carnet d’entretien, l’outil de l’atelier d’abord' },
      { href: L.quincaillerie, kind: '2027', name: 'Logiciel quincaillerie : unités multiples, compte par chantier, marchandise à enlever' },
      { href: L.stock, kind: '2027', name: 'Stock faux dans l’application : mouvements, réservations, inventaire tournant' },
      { href: L.reappro, kind: '2027', name: 'Réapprovisionnement : point de commande, délai mesuré, proposition d’achat' },
    ] },
  },
  en: {
    kind: 'Auto parts · Algeria · 2027', title: "Auto parts software in Algeria (2027): spare-parts store, search by vehicle, equivalent references and stock by location, for when the right part is on the shelf and nobody can find it",
    dek: "“I run a spare-parts store: twelve thousand references, five brands for the same brake pad, and everything is in the head of my longest-serving salesperson. When he is away, we tell the customer we do not have the part while it is sitting on the shelf under another reference. One part in ten comes back because it was not the right one, and I do not know what people ask me for every day that I never have. Which software, which app do I need?” A till program solves none of this. You need to identify the vehicle, link the manufacturer's reference to its equivalents, put every reference in a bin, and note every request you answer with a no.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Auto parts software', 'Spare parts', 'Equivalent references', 'Stock by location', 'Fill rate', 'Algeria 2027'],
    intro: [
      "**Short answer.** Auto parts software is judged on four things. **Identifying the vehicle**: make, model, year, engine, or the seventeen-character chassis number. **Linking the references**: the manufacturer's, the equivalents from other brands and the compatible vehicles, so that searching one finds all the others. **Storing by location**: aisle, shelf, bin, to have the part out in a minute. **Noting unserved requests**, the only measure of what to buy. Around these: two qualities offered to the customer, returns tied to the sale, the mechanics' accounts, and an app where the garage sends its request before travelling.",
      "This guide is for the manager of a spare-parts store, a parts counter or an importer selling to garages, with a few thousand to a few tens of thousands of references, and for the founder based in France who wants to follow the family store. The notions quoted come from public sources: the vehicle identification number, the aftermarket, the original part, the stockout, the fill rate. The vehicle, references, stock and prices in the figures are a constructed example, not market prices. This guide covers neither import rules nor the conformity of parts: those are matters for your adviser.",
    ],
    sections: [
      { heading: "One part, five references: the right one is on the shelf under another name", body: [
        "The figure starts from a request at the counter, front brake pads for a 2015 city car, and follows the references to the shelf.",
      ], visual: 'references', after: [
        "**Why five references.** The part fitted at the factory carries the manufacturer's reference. The aftermarket, the secondary parts market of the automotive industry, offers the same part under other brands: for auto parts, the original part generally means the one from the manufacturer of the original equipment, and aftermarket parts are those made by other companies. Each brand has its own reference. In the example, the manufacturer's reference is at zero; two of the four equivalents are on the shelf, nine parts in all. The salesperson who only knows the first one answers “we don't have it”.",
        "**What the software does.** It keeps the link between all these references and the vehicles they fit. Whether you search by vehicle, by the manufacturer's reference or by a brand's reference, the answer is the same: what is in stock, under which brand, at what price, in which bin. **Identifying the vehicle.** Two versions of the same model do not have the same brakes. The vehicle identification number, also called the chassis number, is a unique code of seventeen characters, capital letters and digits, without the letters I, O and Q; noted with the request, it settles the doubt between two engines. **Where the equivalences come from.** From your suppliers' lists and catalogues, and from what your longest-serving salesperson knows: you start with the two hundred fastest-moving parts. The structure of a record with several references is the one in [the guide to the product record](" + L.fiche + ").",
      ] },
      { heading: "Serving a customer at the counter, in six steps", body: [
        "The third step is accented: widening to the equivalent references is what changes the answer.",
      ], visual: 'service', after: [
        "**Identify** the vehicle, then **find** the part by family, braking, filtration, timing, suspension. **Widen**: the screen shows every equivalent reference, in stock or not. **Offer**: two qualities when they exist, with their prices; the customer chooses, and the salesperson no longer has to defend a single price.",
        "**Pick from the shelf**: the bin is shown, and the part is compared with the old one when the customer has brought it. **Note**: if the answer is no, the request is recorded in two keystrokes, with the vehicle. A sale to a mechanic goes on their account, with a limit and a statement, as in [the guide to customer credit](" + L.credit + ").",
      ] },
      { heading: "What a part record must carry", body: [
        "The figure gives, for six pieces of information, what they are for and what happens when they are missing.",
      ], visual: 'fiche', after: [
        "**The first three** get the part found: equivalences, compatible vehicles, quality. **The next three** keep the promise: the location, so that the part shown is out in a minute; the supplier and its lead time, to give a date instead of a “come back later”; the return conditions.",
        "**Returns.** In this trade, a share of the parts comes back: wrong version, fault badly diagnosed, customer who found it elsewhere. The return is tied to the sale, carries a reason, and the part goes back on the shelf, to the supplier, or is set aside. When you take the old part in exchange, an alternator or a starter for example, it is tracked the same way until it is sent back. **Locations.** One bin per reference, one label per bin, and cycle counting by aisle, following the method in [the guide to wrong stock](" + L.stock + ").",
      ] },
      { heading: "Unserved requests: 24 missed sales that nobody counted", body: [
        "The figure takes one month of requests on five references: what was served, and what was not.",
      ], visual: 'manquees', after: [
        "**What sales do not say.** A stockout is the event that exhausts the stock; it causes lost sales, dissatisfies shoppers and erodes their loyalty, and the customer may switch stores or buy a substitute. None of that shows in your sales. In the example, out of 150 requests, 126 are served: the fill rate, the quantities served against the quantities asked for, is 84 %. The 24 missed requests amount to 247,200 DZD, of which 148,000 for eight timing kits the store hardly stocks.",
        "**The action.** When the salesperson says no, they record the request: the vehicle, the part, the quantity. It takes ten seconds, and it is the only data your purchasing lacks. **What is done with it.** At the end of the week, the list of unserved requests, ranked by amount, becomes the purchase proposal; thresholds and lead times are then set as in [the guide to replenishment](" + L.reappro + "). A reference asked for eight times and never stocked deserves its place more than a reference bought out of habit.",
      ] },
      { heading: "Auto parts software, in five layers", body: [
        "The accented layer is the catalogue: everything else depends on it.",
      ], visual: 'couches', after: [
        "**Catalogue**: vehicles, families, references and equivalences, linked. **Stock and locations**: quantities per bin, reservations, cycle counting. **Counter and app**: sale, quotation, mechanics' accounts, and an app where the garage sends its request with a photo of the part or the chassis number, then receives availability and price.",
        "**Returns and warranty**, then **purchasing and requests**. For the garage that buys from you, the workshop's tool is described in [the guide to garages](" + L.garage + "); for the document chain, from quotation to payment, see [the guide to sales management](" + L.gescom + "). **What sets this trade apart** from another counter business, such as the [hardware store](" + L.quincaillerie + "), is the catalogue: here, you are not looking for an item, you are looking for what fits a vehicle.",
      ] },
      { heading: "A parts store equipped in 2027, in weeks", body: [
        "Six weeks in the example, two of them for the starting catalogue.",
      ], visual: 'calendrier', after: [
        "**Weeks 1 and 2, the starting catalogue.** You do not enter twelve thousand references in one go. You start with the families, the vehicles most common among your customers, and the two hundred fastest-moving parts, with their equivalences; the rest comes in with sales and receipts. **Week 3, locations**: aisles, shelves and bins labelled. **Week 4, opening stock**, counted by aisle.",
        "**Week 5, the counter**: search by vehicle, sales, returns and unserved requests, alongside the old method. **Week 6, purchasing and the app**: the first purchase list drawn from the requests, the mechanics' accounts, the garages' app.",
      ], list: [
        "**What the manager sees**: the fill rate, unserved requests ranked by amount, returns by reason, margin by family and by brand, each mechanic's balance.",
        "**What the store no longer does**: say no for a part that is on the shelf, depend on a single salesperson, search three aisles for a part, buy out of habit.",
        "**What is measured**: fill rate by family, parts returned for the wrong version, references with no movement for six months, stock-count difference by aisle.",
        "**What Symloop does**: the starting catalogue with your sales staff, the counter and stock-by-location software, the app for your garage customers, the migration of your files, then upkeep.",
      ], faq: [
        { q: "Which software for an auto parts store in Algeria?", a: "Counter and stock software that searches by vehicle, links the manufacturer's reference to its equivalents, puts every reference in a bin and records unserved requests. A general-purpose till manages items; here, you have to manage what fits a vehicle." },
        { q: "How do you find a part when you do not have the reference?", a: "Through the vehicle: make, model, year, engine, or the chassis number. The software shows the part family, then every reference that fits, in stock or not. The reference read on the old part is then used to confirm." },
        { q: "What is an equivalent reference?", a: "It is another brand's reference for the same part. A brake pad has the manufacturer's reference and those of several aftermarket makers. The software links them, so that searching for one shows the stock of all." },
        { q: "What is the chassis number for?", a: "It identifies one precise vehicle: it is a unique code of seventeen characters, capital letters and digits, without I, O or Q. Noted with the request, it avoids confusing two versions of the same model, which saves many returns." },
        { q: "How do you store thousands of small parts?", a: "One bin per reference, one label per bin, with a simple address: aisle, shelf, bin. The address is on the record; the newest salesperson gets the part out as fast as the oldest. A count by aisle, every week, keeps the stock right." },
        { q: "How do you know which parts to buy?", a: "By noting every request you answer with a no. Ranked by amount, that list says what your customers come for and you do not have; sales alone never show it. Sales per reference and thresholds are added to it." },
        { q: "How do you handle part returns?", a: "Each return is tied to its sale, with a reason: wrong version, faulty part, customer who gives up. The part goes back on the shelf, back to the supplier, or is set aside. Tracking by reason shows where to correct: vehicle identification, a supplier, a family." },
        { q: "Can we have an app for our garage customers?", a: "Yes. The garage sends its request with the vehicle, a photo of the part or the chassis number; it receives availability, qualities and prices, and reserves. The counter prepares the part, and the request is recorded even when the answer is no." },
        { q: "Do all the references have to be entered before starting?", a: "No. You start with the two hundred fastest-moving parts, with their equivalences and locations; the rest comes in with sales and receipts. A catalogue that is right on the essentials is worth more than one that is complete and wrong." },
        { q: "How much does auto parts software cost?", a: "It depends on the number of workstations, the number of references to migrate, whether your suppliers have a catalogue, and the app for garages. The longest job is the starting catalogue, built with your sales staff. We quote after a morning at the counter and twenty references followed from vehicle to shelf." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The part is not impossible to find because it is missing: it is because it goes by another name." },
      { after: 3, text: "Sales tell you what you sold; they never tell you what you were asked for and did not have." },
    ],
    cta: { eyebrow: "For one week, note every request you answer with a no, and take twenty fast-moving parts: we show you the catalogue, the equivalences and the purchase list that come out of it", title: "A spare-parts store, a parts counter, or a founder in France following the family store: we build the catalogue by vehicle, the stock by location, the counter and your garages' app", body: "A starting catalogue built with your sales staff, references linked to each other, one bin per part, and unserved requests counted every week. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.garage, kind: '2027', name: 'Garages: quotations, parts and service record, the workshop’s tool first' },
      { href: L.quincaillerie, kind: '2027', name: 'Hardware store software: several units, account per site, goods left to collect' },
      { href: L.stock, kind: '2027', name: 'Wrong stock in the application: movements, reservations, cycle counting' },
      { href: L.reappro, kind: '2027', name: 'Replenishment: reorder point, measured lead time, purchase proposal' },
    ] },
  },
  ar: {
    kind: 'قطع غيار السيارات · الجزائر · 2027', title: "برنامج قطع غيار السيارات في الجزائر (2027): محل قطع الغيار، البحث حسب السيارة، المراجع المكافئة والمخزون حسب الموضع، حين تكون القطعة الصحيحة على الرفّ ولا يجدها أحد",
    dek: "«عندي محل قطع غيار: اثنا عشر ألف مرجع، خمس علامات للصفيحة نفسها، وكل شيء في رأس أقدم بائع عندي. حين يغيب، نجيب الزبون أن القطعة غير موجودة وهي على الرفّ بمرجع آخر. قطعة من كل عشر تعود لأنها لم تكن الصحيحة، ولا أعرف ما يُطلب مني كل يوم وليس عندي أبداً. أي برنامج، أي تطبيق يلزمني؟» برنامج الصندوق لا يحلّ شيئاً من هذا. يلزم التعرّف على السيارة، وربط مرجع الصانع بمكافئاته، وترتيب كل مرجع في خانة، وتسجيل كل طلب نجيب عنه بلا.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج قطع غيار السيارات', 'قطع الغيار', 'المراجع المكافئة', 'المخزون حسب الموضع', 'نسبة الخدمة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج قطع غيار السيارات يُحكم عليه بأربعة أشياء. **التعرّف على السيارة**: العلامة، الطراز، السنة، المحرك، أو رقم الهيكل المكوَّن من سبعة عشر حرفاً ورقماً. **ربط المراجع**: مرجع الصانع، والمكافئات من العلامات الأخرى، والسيارات المتوافقة، بحيث يجد البحث عن أحدها كل الأخرى. **الترتيب حسب الموضع**: ممرّ، رفّ، خانة، لإخراج القطعة في دقيقة. **تسجيل الطلبات غير المسلَّمة**، وهي المقياس الوحيد لما يجب شراؤه. وحول ذلك: نوعيتان تُقترحان على الزبون، إرجاع مربوط بالبيع، حساب الميكانيكيين، وتطبيق ترسل منه الورشة طلبها قبل أن تتنقل.",
      "هذا الدليل موجَّه إلى مسيّر محل قطع غيار، أو نقطة بيع قطع بديلة، أو مستورد يبيع للورشات، عنده من بضعة آلاف إلى بضع عشرات الآلاف من المراجع، وإلى المؤسس المقيم في فرنسا الذي يريد متابعة محل العائلة. المفاهيم المذكورة آتية من مصادر علنية: رقم تعريف المركبة، سوق القطع البديلة، القطعة الأصلية، نفاد المخزون، ونسبة الخدمة. السيارة والمراجع والمخزون والأسعار في الأشكال مثال مركَّب، وليست أسعار السوق. هذا الدليل لا يتناول قواعد الاستيراد ولا مطابقة القطع: تُراجَع مع مستشاركم.",
    ],
    sections: [
      { heading: "قطعة واحدة، خمسة مراجع: الصحيحة على الرفّ باسم آخر", body: [
        "الشكل ينطلق من طلب في المحل، صفائح فرامل أمامية لسيارة مدينة من سنة 2015، ويتابع المراجع حتى الرفّ.",
      ], visual: 'references', after: [
        "**لماذا خمسة مراجع.** القطعة المركَّبة في المصنع تحمل مرجع الصانع. وسوق القطع البديلة، وهي السوق الثانوية للقطع في صناعة السيارات، تعرض القطعة نفسها بعلامات أخرى: في قطع السيارات، القطعة الأصلية تعني في الغالب قطعة صانع التجهيز الأصلي، والقطع البديلة هي التي تصنعها مؤسسات أخرى. ولكل علامة مرجعها. في المثال، مرجع الصانع عند الصفر؛ واثنان من المكافئات الأربعة على الرفّ، تسع قطع في المجموع. والبائع الذي لا يعرف إلا الأول يجيب «ليست عندنا».",
        "**ما يفعله البرنامج.** يحفظ الرابط بين كل هذه المراجع والسيارات التي تُركَّب عليها. وسواء بحثنا بالسيارة، أو بمرجع الصانع، أو بمرجع علامة، فالجواب واحد: ما هو في المخزون، بأي علامة، بأي سعر، وفي أي خانة. **التعرّف على السيارة.** نسختان من الطراز نفسه ليست لهما الفرامل نفسها. ورقم تعريف المركبة، ويُسمّى كذلك رقم الهيكل، رمز فريد من سبعة عشر حرفاً ورقماً، بحروف كبيرة وأرقام، دون الحروف " + I('I') + " و" + I('O') + " و" + I('Q') + "؛ وحين يُسجَّل مع الطلب يرفع الشك بين محرّكين. **من أين تأتي المكافئات.** من قوائم مورِّديكم وفهارسهم، ومما يعرفه أقدم بائع عندكم: نبدأ بالمئتي قطعة الأكثر دوراناً. وبنية بطاقة بعدة مراجع هي بنية [دليل بطاقة المنتَج](" + L.fiche + ").",
      ] },
      { heading: "خدمة زبون في المحل، في ست مراحل", body: [
        "المرحلة الثالثة مبرزة: التوسيع إلى المراجع المكافئة هو ما يغيّر الجواب.",
      ], visual: 'service', after: [
        "**التعرّف** على السيارة، ثم **إيجاد** القطعة حسب العائلة: الفرملة، التصفية، التوزيع، التعليق. **التوسيع**: الشاشة تعرض كل المراجع المكافئة، في المخزون أو لا. **الاقتراح**: نوعيتان حين توجدان، بسعريهما؛ الزبون يختار، والبائع لم يعد مضطراً للدفاع عن سعر واحد.",
        "**الإخراج من الرفّ**: الخانة مبيَّنة، والقطعة تُقارَن بالقديمة حين يأتي بها الزبون. **التسجيل**: إذا كان الجواب لا، يُسجَّل الطلب بنقرتين، مع السيارة. والبيع لميكانيكي يمرّ على حسابه، بسقف وكشف، كما في [دليل دَين الزبون](" + L.credit + ").",
      ] },
      { heading: "ما يجب أن تحمله بطاقة القطعة", body: [
        "الشكل يعطي، لست معلومات، ما فائدتها وما يحدث حين تغيب.",
      ], visual: 'fiche', after: [
        "**الثلاث الأولى** تجعل القطعة تُوجَد: المكافئات، السيارات المتوافقة، النوعية. **والثلاث الموالية** تجعل الوعد يُحترَم: الموضع، حتى تخرج القطعة المعروضة في دقيقة؛ المورِّد وأجله، لإعطاء تاريخ بدل «عُد لاحقاً»؛ وشروط الإرجاع.",
        "**الإرجاع.** في هذه المهنة، جزء من القطع يعود: نسخة خاطئة، عطل شُخِّص خطأً، أو زبون وجد في مكان آخر. الإرجاع يُربط بالبيع، ويحمل سبباً، والقطعة تعود إلى الرفّ، أو إلى المورِّد، أو تُوضع جانباً. وحين تستردّون القطعة القديمة في مبادلة، مولِّداً أو بادئ حركة مثلاً، تُتابَع بالطريقة نفسها حتى إعادتها. **المواضع.** خانة لكل مرجع، ملصق لكل خانة، وجرد دوري حسب الممرّ، حسب طريقة [دليل المخزون الخاطئ](" + L.stock + ").",
      ] },
      { heading: "الطلبات غير المسلَّمة: 24 بيعاً ضائعاً لم يحسبه أحد", body: [
        "الشكل يأخذ شهراً من الطلبات على خمسة مراجع: ما سُلِّم، وما لم يُسلَّم.",
      ], visual: 'manquees', after: [
        "**ما لا تقوله المبيعات.** نفاد المخزون هو الحدث الذي يستنفد المخزون؛ وهو يُضيّع مبيعات، ويُغضب الزبائن وينقص وفاءهم، والزبون قد يغيّر المحل أو يأخذ منتَجاً بديلاً. ولا شيء من هذا يظهر في مبيعاتكم. في المثال، من 150 طلباً، 126 مسلَّمة: نسبة الخدمة، أي الكميات المسلَّمة مقسومة على الكميات المطلوبة، هي 84 بالمئة. والطلبات الأربعة والعشرون الضائعة تمثّل 247200 دج، منها 148 ألفاً لثمانية أطقم توزيع يكاد المحل لا يمسكها.",
        "**الحركة.** حين يجيب البائع بلا، يسجّل الطلب: السيارة، القطعة، الكمية. يأخذ ذلك عشر ثوانٍ، وهو المعطى الوحيد الذي ينقص مشترياتكم. **ما نفعله به.** في نهاية الأسبوع، قائمة الطلبات غير المسلَّمة، مرتَّبة حسب المبلغ، تصير اقتراح الشراء؛ والعتبات والآجال تُضبط بعدها كما في [دليل إعادة التموين](" + L.reappro + "). والمرجع المطلوب ثماني مرات ولم يُمسَك قط أحقّ بمكانه من مرجع يُشترى بالعادة.",
      ] },
      { heading: "برنامج قطع غيار السيارات، في خمس طبقات", body: [
        "الطبقة المبرزة هي الفهرس: كل الباقي يتوقف عليه.",
      ], visual: 'couches', after: [
        "**الفهرس**: السيارات، العائلات، المراجع والمكافئات، مربوطة. **المخزون والمواضع**: الكميات لكل خانة، الحجز، والجرد الدوري. **المحل والتطبيق**: بيع، عرض سعر، حسابات الميكانيكيين، وتطبيق ترسل منه الورشة طلبها مع صورة القطعة أو رقم الهيكل، ثم تستلم التوفر والسعر.",
        "**الإرجاع والضمان**، ثم **الشراء والطلبات**. وبالنسبة للورشة التي تشتري منكم، أداة الورشة موصوفة في [دليل الورشات](" + L.garage + ")؛ ولسلسلة الوثائق، من عرض السعر إلى التسديد، انظر [دليل التسيير التجاري](" + L.gescom + "). **ما يميّز هذه المهنة** عن تجارة أخرى في المحل، مثل [محل الخردوات](" + L.quincaillerie + ")، هو الفهرس: هنا لا نبحث عن صنف، بل عمّا يُركَّب على سيارة.",
      ] },
      { heading: "محل قطع غيار مجهَّز سنة 2027، بالأسابيع", body: [
        "ستة أسابيع في المثال، منها أسبوعان لفهرس البداية.",
      ], visual: 'calendrier', after: [
        "**الأسبوعان 1 و2، فهرس البداية.** لا تُدخَل اثنا عشر ألف مرجع دفعة واحدة. نبدأ بالعائلات، والسيارات الأكثر شيوعاً عند زبائنكم، والمئتي قطعة الأكثر دوراناً، مع مكافئاتها؛ والباقي يدخل مع المبيعات والاستلامات. **الأسبوع 3، المواضع**: ممرّات ورفوف وخانات بملصقات. **الأسبوع 4، مخزون البداية**، يُعدّ حسب الممرّ.",
        "**الأسبوع 5، المحل**: بحث حسب السيارة، مبيعات، إرجاع وطلبات غير مسلَّمة، بالتوازي مع الطريقة القديمة. **الأسبوع 6، الشراء والتطبيق**: أول قائمة شراء مأخوذة من الطلبات، حسابات الميكانيكيين، وتطبيق الورشات.",
      ], list: [
        "**ما يراه المسيّر**: نسبة الخدمة، الطلبات غير المسلَّمة مرتَّبة حسب المبلغ، الإرجاع حسب السبب، الهامش حسب العائلة والعلامة، ورصيد كل ميكانيكي.",
        "**ما لم يعد المحل يفعله**: الجواب بلا عن قطعة على الرفّ، التبعية لبائع واحد، البحث عن قطعة في ثلاثة ممرّات، والشراء بالعادة.",
        "**ما يُقاس**: نسبة الخدمة حسب العائلة، القطع المرجَعة بسبب نسخة خاطئة، المراجع دون حركة منذ ستة أشهر، وفارق الجرد حسب الممرّ.",
        "**ما تفعله Symloop**: فهرس البداية مع باعتكم، برنامج المحل والمخزون حسب الموضع، التطبيق لورشات زبائنكم، استعادة ملفاتكم، ثم الصيانة.",
      ], faq: [
        { q: "أي برنامج لمحل قطع غيار السيارات في الجزائر؟", a: "برنامج محل ومخزون يبحث حسب السيارة، ويربط مرجع الصانع بمكافئاته، ويرتّب كل مرجع في خانة، ويسجّل الطلبات غير المسلَّمة. برنامج الصندوق العام يسيّر أصنافاً؛ وهنا يجب تسيير ما يُركَّب على سيارة." },
        { q: "كيف نجد قطعة حين لا يكون عندنا المرجع؟", a: "عبر السيارة: العلامة، الطراز، السنة، المحرك، أو رقم الهيكل. البرنامج يعرض عائلة القطع، ثم كل المراجع المناسبة، في المخزون أو لا. والمرجع المقروء على القطعة القديمة يفيد بعدها في التأكيد." },
        { q: "ما هو المرجع المكافئ؟", a: "هو مرجع علامة أخرى للقطعة نفسها. للصفيحة مرجع الصانع ومراجع عدة صانعي قطع بديلة. والبرنامج يربطها، بحيث يُظهر البحث عن أحدها مخزون الجميع." },
        { q: "ما فائدة رقم الهيكل؟", a: "يعرّف سيارة بعينها: هو رمز فريد من سبعة عشر حرفاً ورقماً، بحروف كبيرة وأرقام، دون " + I('I') + " و" + I('O') + " و" + I('Q') + ". وحين يُسجَّل مع الطلب يمنع الخلط بين نسختين من الطراز نفسه، وهذا يجنّب كثيراً من الإرجاع." },
        { q: "كيف نرتّب آلاف القطع الصغيرة؟", a: "خانة لكل مرجع، ملصق لكل خانة، بعنوان بسيط: ممرّ، رفّ، خانة. العنوان على البطاقة؛ وأحدث بائع يُخرج القطعة بسرعة أقدمهم. وعدّ حسب الممرّ، كل أسبوع، يُبقي المخزون صحيحاً." },
        { q: "كيف نعرف أي قطع نشتري؟", a: "بتسجيل كل طلب تجيبون عنه بلا. مرتَّبةً حسب المبلغ، هذه القائمة تقول ما يأتي زبائنكم من أجله وليس عندكم؛ والمبيعات وحدها لا تُظهره أبداً. ونضيف إليها المبيعات لكل مرجع والعتبات." },
        { q: "كيف يُسيَّر إرجاع القطع؟", a: "كل إرجاع يُربط ببيعه، مع سبب: نسخة خاطئة، قطعة معيبة، زبون يتراجع. القطعة تعود إلى الرفّ، أو إلى المورِّد، أو تُوضع جانباً. والمتابعة حسب السبب تبيّن أين نصحّح: التعرّف على السيارة، مورِّد، أو عائلة." },
        { q: "هل يمكن الحصول على تطبيق لورشات الزبائن؟", a: "نعم. الورشة ترسل طلبها مع السيارة، وصورة القطعة أو رقم الهيكل؛ وتستلم التوفر والنوعيات والأسعار، وتحجز. المحل يحضّر القطعة، والطلب يُسجَّل حتى حين يكون الجواب لا." },
        { q: "هل يجب إدخال كل المراجع قبل البدء؟", a: "لا. نبدأ بالمئتي قطعة الأكثر دوراناً، مع مكافئاتها ومواضعها؛ والباقي يدخل مع المبيعات والاستلامات. فهرس صحيح في الأساسي أفضل من فهرس كامل وخاطئ." },
        { q: "كم يكلّف برنامج قطع غيار السيارات؟", a: "هذا يتوقف على عدد الحواسيب، وعدد المراجع المستعادة، ووجود فهرس عند مورِّديكم، وتطبيق الورشات. وأطول عمل هو فهرس البداية، يُعَدّ مع باعتكم. ونحن نقدّر الكلفة بعد صبيحة في المحل وعشرين مرجعاً نتابعها من السيارة إلى الرفّ." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "القطعة ليست مفقودة لأنها غير موجودة: بل لأنها تحمل اسماً آخر." },
      { after: 3, text: "المبيعات تقول ما بعتم؛ ولا تقول أبداً ما طُلب منكم ولم يكن عندكم." },
    ],
    cta: { eyebrow: "سجّلوا مدة أسبوع كل طلب تجيبون عنه بلا، وخذوا عشرين قطعة تدور: نبيّن لكم الفهرس والمكافئات وقائمة الشراء التي تنتج عن ذلك", title: "محل قطع غيار، نقطة بيع قطع بديلة، أو مؤسس في فرنسا يتابع محل العائلة: نبني الفهرس حسب السيارة، المخزون حسب الموضع، برنامج المحل وتطبيق ورشاتكم", body: "فهرس بداية يُعَدّ مع باعتكم، مراجع مربوطة ببعضها، خانة لكل قطعة، وطلبات غير مسلَّمة تُحسب كل أسبوع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.garage, kind: '2027', name: 'الورشات: عروض السعر، القطع ودفتر الصيانة، أداة الورشة أولاً' },
      { href: L.quincaillerie, kind: '2027', name: 'برنامج محل الخردوات: عدة وحدات، حساب لكل ورشة، بضاعة باقية للاستلام' },
      { href: L.stock, kind: '2027', name: 'المخزون الخاطئ في التطبيق: الحركات، الحجز، الجرد الدوري' },
      { href: L.reappro, kind: '2027', name: 'إعادة التموين: نقطة الطلب، الأجل المقاس، اقتراح الشراء' },
    ] },
  },
};

const KEYWORDS = "logiciel pièces auto algérie 2027, logiciel pieces auto, application piece auto algerie, logiciel magasin pièces détachées, logiciel gestion de stock pièces auto, recherche pièce par véhicule, références équivalentes pièces auto, logiciel comptoir pièces de rechange, gestion emplacements magasin pièces, taux de service pièces détachées, auto parts store software algeria 2027, spare parts inventory software cross reference, برنامج قطع غيار السيارات الجزائر 2027, برنامج تسيير محل قطع الغيار, تطبيق قطع غيار السيارات الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
