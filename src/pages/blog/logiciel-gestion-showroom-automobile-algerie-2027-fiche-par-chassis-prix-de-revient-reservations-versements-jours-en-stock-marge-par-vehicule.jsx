import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-gestion-showroom-automobile-algerie-2027-fiche-par-chassis-prix-de-revient-reservations-versements-jours-en-stock-marge-par-vehicule.mjs';

const SLUG = 'logiciel-gestion-showroom-automobile-algerie-2027-fiche-par-chassis-prix-de-revient-reservations-versements-jours-en-stock-marge-par-vehicule';
const FIGURES = ['vente', 'revient', 'couches', 'anciennete', 'calendrier', 'tailles'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  pieces: '/blog/logiciel-pieces-auto-algerie-2027-magasin-pieces-detachees-recherche-par-vehicule-references-equivalentes-emplacements-demandes-non-servies/',
  serie: '/blog/l-appareil-revient-en-panne-et-personne-ne-sait-si-on-l-a-vendu-numero-de-serie-application-algerie-2027-garantie-reparation-retour-fournisseur/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  reservation: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  caisse: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  crm: '/blog/logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
};

const CONTENT = {
  fr: {
    kind: 'Showroom automobile · Algérie · 2027', title: "Logiciel de gestion de showroom automobile en Algérie (2027) : la même voiture promise à deux clients, des versements notés dans un cahier, une marge que personne ne connaît ; fiche par numéro de châssis, prix de revient, réservations, jours en stock, et ce qu'on met en place",
    dek: "« J'ai un showroom de voitures, une quarantaine de véhicules entre le parc et le dépôt. Les versements des clients sont dans un cahier, un commercial a promis la même voiture à deux personnes, je ne sais pas ce que chaque véhicule m'a vraiment coûté une fois les frais ajoutés, et certains sont là depuis quatre mois sans que personne ne s'en soit rendu compte. Quel logiciel pour gérer un showroom ? » Un showroom vend des pièces uniques : chaque véhicule a son numéro, son coût, son client et son âge en stock, et c'est véhicule par véhicule qu'il faut les connaître.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de showroom automobile', 'Fiche par numéro de châssis', 'Prix de revient par véhicule', 'Réservations et versements', 'Jours en stock et marge', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de showroom automobile tient quatre choses, véhicule par véhicule. **La fiche** : une par numéro de châssis, avec photos et emplacement. **Le prix de revient** : le prix d'achat, plus chaque frais rattaché au véhicule. **La réservation et les versements** : un seul client par véhicule, un acompte, une date limite, des reçus, un solde. **Les jours en stock** : un compteur qui démarre à l'entrée et s'arrête à la livraison. Dans l'exemple de cette page, deux véhicules achetés et affichés au même prix laissent l'un 160 000 dinars de marge réelle, l'autre 35 000.",
      "Cette page s'adresse à celles et ceux qui dirigent un showroom de véhicules neufs ou d'occasion, d'un seul parc à plusieurs points de vente, et aux fondateurs de la diaspora qui montent une activité d'achat et de revente en Algérie. Les définitions viennent de sources publiques : showroom, numéro d'identification du véhicule, véhicule d'occasion, acompte, rotation des stocks, coût de possession du stock, dépôt-vente, marge brute. Les deux véhicules, le stock de quarante véhicules, leurs prix et leurs frais sont un exemple construit, avec des prix fictifs. La page ne traite ni des agréments et des règles d'importation, ni de l'immatriculation, ni de la fiscalité, ni du crédit, et ne cite aucun prix réel de véhicule ou de matériel.",
    ],
    sections: [
      { heading: "Une vente, en six temps", body: [
        "La figure suit un véhicule, de son entrée en stock à sa livraison.",
      ], visual: 'vente', after: [
        "**Le métier.** Un showroom est un grand espace où des produits sont exposés à la vente, des automobiles par exemple. Un véhicule d'occasion est un véhicule qui a déjà eu un ou plusieurs propriétaires. Dans les deux cas, on ne vend pas un article en dix exemplaires : on vend une pièce unique, et tout se suit à l'unité. **L'entrée en stock.** Le numéro d'identification du véhicule, qu'on appelle aussi numéro de châssis, est un code unique qui sert à identifier chaque véhicule ; dans son format normalisé, il compte 17 caractères. C'est la clé de la fiche : le prix d'achat, les photos, l'emplacement et les frais s'y rattachent.",
        "**La préparation.** Transport, carrosserie, pièces, nettoyage : chaque dépense est saisie sur le véhicule, le jour où elle est faite. **La mise en vente.** Le prix affiché, et la remise maximale que la direction accepte, connue de la personne qui vend avant la négociation. **La réservation.** C'est le temps accentué : un acompte, une date limite, un seul client. **Les versements et la livraison.** Chaque versement donne un reçu ; le véhicule ne sort que lorsque le solde est à zéro et que le dossier est complet.",
      ] },
      { heading: "Ce qu'un véhicule a vraiment rapporté", body: [
        "La figure compare deux véhicules achetés et affichés au même prix.",
      ], visual: 'revient', after: [
        "**Le prix de revient.** Il part du prix d'achat de l'unité ; dans un showroom, on y ajoute chaque frais engagé sur le véhicule. **Dans l'exemple.** Deux véhicules achetés 2 900 000 dinars et affichés 3 250 000 : 350 000 dinars d'écart. Le véhicule A reçoit 140 000 dinars de frais, transport, préparation, pièces ; il est vendu en 20 jours avec 50 000 dinars de remise. Marge réelle : 160 000 dinars, soit 5,0 % du prix de vente.",
        "**Le véhicule B.** Les mêmes frais, plus 25 000 dinars de remise en état après quatre mois d'attente ; il part au bout de 130 jours avec 150 000 dinars de remise. Marge réelle : 35 000 dinars, soit 1,1 %. **Ce que cela dit.** Sur le cahier, les deux ventes se ressemblent. **La marge brute.** C'est la différence entre le chiffre d'affaires et le coût de ce qui a été vendu, rapportée au chiffre d'affaires ; sans les frais par véhicule, elle est fausse. **Avant la remise.** Pendant la négociation, l'écran montre la marge qui reste ; au-delà d'un seuil, la remise demande un accord, voir [les rôles et les approbations](" + L.roles + "). **Les pièces.** Si vous tenez aussi un magasin de pièces, une sortie vers un véhicule devient un frais de ce véhicule, voir [le logiciel pièces auto](" + L.pieces + ").",
      ] },
      { heading: "Ce qu'il y a dans un logiciel de showroom", body: [
        "La figure empile cinq couches ; la deuxième donne leur sens aux chiffres.",
      ], visual: 'couches', after: [
        "**La fiche véhicule.** Une par numéro de châssis, comme pour tout article suivi à l'unité, voir [le numéro de série](" + L.serie + "). Les photos sont prises au téléphone et rattachées à la fiche, voir [les photos qui font foi](" + L.photos + ") ; elles servent aussi aux annonces. **L'emplacement.** Showroom, dépôt, atelier, carrosserie : on sait où est chaque véhicule sans téléphoner.",
        "**Les réservations.** Un véhicule réservé est verrouillé pour un client jusqu'à une date ; passé ce délai, la règle que vous avez fixée s'applique. Le mécanisme est celui de [la réservation sans doublon](" + L.reservation + "). **Les versements.** Un acompte est un premier paiement partiel, versé pour l'achat d'un bien coûteux comme une voiture ; chaque versement suivant réduit le solde, voir [le crédit client](" + L.credit + "). Les espèces reçues passent par [une session de caisse](" + L.caisse + "). **Les prospects.** Qui a demandé quel modèle, et qui rappeler : voir [le CRM](" + L.crm + "). **Les chiffres.** Ils se lisent sur [un tableau de bord](" + L.dashboard + ").",
      ] },
      { heading: "Les jours en stock, véhicule par véhicule", body: [
        "La figure range quarante véhicules selon le nombre de jours depuis leur entrée.",
      ], visual: 'anciennete', after: [
        "**La rotation.** En comptabilité, la rotation des stocks mesure le nombre de fois où le stock est vendu sur une période ; on en tire un nombre moyen de jours pour vendre. Pour un showroom, la moyenne cache l'essentiel : c'est véhicule par véhicule qu'il faut regarder. **Dans l'exemple.** Quarante véhicules, 121 600 000 dinars au prix de revient, 54 jours d'ancienneté moyenne. Mais 8 véhicules ont plus de 90 jours et immobilisent 24 800 000 dinars, un cinquième du stock ; 15 ont plus de 60 jours, pour 46 100 000 dinars.",
        "**Ce que coûte l'attente.** Le coût de possession du stock est le coût total de la détention d'un stock : le local, les salaires, et le coût de l'argent immobilisé. S'y ajoutent, pour un véhicule, la remise en état et une remise plus forte : c'est le véhicule B de la figure précédente. **Ce que fait le logiciel.** Chaque matin, la liste commence par les plus anciens. Au-delà du seuil que vous fixez, le véhicule est signalé, avec son prix de revient et la remise encore possible. **Ce que l'on décide.** Le déplacer en vitrine, refaire les photos, revoir le prix, le proposer aux prospects qui cherchaient ce modèle. **Ce que l'on mesure.** Jours en stock par véhicule ; valeur du stock par tranche d'âge ; jours moyens pour vendre, par marque et par gamme de prix.",
      ] },
      { heading: "Sept semaines, en reprenant le stock présent", body: [
        "Sept semaines dans l'exemple, sans fermer le showroom.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos véhicules, vos frais habituels, vos règles de réservation, les pièces que vous exigez dans un dossier, et votre cahier actuel. **La reprise du stock.** Chaque véhicule présent reçoit sa fiche, son numéro de châssis, ses photos, sa date d'entrée réelle et, quand ils sont connus, les frais déjà engagés. **Les versements en cours.** Les clients qui ont déjà versé sont repris avec leur solde, reçu par reçu.",
        "**La saisie.** Au téléphone, dans le parc : une photo, un frais, un changement d'emplacement se saisissent debout, en arabe ou en français. **Les droits.** L'équipe de vente ne voit pas le prix d'achat si vous ne le souhaitez pas ; elle voit le prix affiché et la remise permise. **Ce que le logiciel ne fait pas.** Il ne remplace ni votre comptabilité ni vos démarches administratives : il tient le stock, les ventes et l'argent reçu, véhicule par véhicule. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "D'un seul parc à plusieurs showrooms", body: [
        "La figure donne cinq situations, et ce que le logiciel ajoute à chacune.",
      ], visual: 'tailles', after: [
        "**Un parc.** Le stock est sous les yeux ; ce qui manque, c'est le prix de revient et le compte de chaque client. **Un dépôt.** Dès que le stock est à deux endroits, l'emplacement par véhicule évite les recherches, et les promesses sur un véhicule absent. **Plusieurs showrooms.** Le stock est commun : une réservation prise ici se voit là-bas à la seconde.",
        "**Les reprises.** Le véhicule repris à un client entre en stock avec sa propre fiche, à sa valeur de reprise, et la vente qui l'a amené reste liée. **Le dépôt-vente.** Le véhicule est confié par son propriétaire, qui en garde la pleine propriété jusqu'à la vente à l'acheteur final ; le logiciel tient le compte du déposant, la commission et le reversement. **Prêt à l'emploi ou sur mesure.** Des logiciels de vente de véhicules prêts à l'emploi existent, et conviennent à un parc simple. Le sur-mesure se justifie pour plusieurs sites, du dépôt-vente, un atelier ou un magasin de pièces à relier, un site alimenté par le stock, ou un lien avec votre gestion commerciale.",
      ], list: [
        "**Ce que vous recevez** : une fiche par numéro de châssis avec photos et emplacement ; le prix de revient par véhicule ; les réservations avec date limite ; les versements avec reçus et solde ; le dossier en liste à cocher ; les jours en stock ; la marge par véhicule et par personne.",
        "**Ce que le showroom évite** : la voiture promise à deux clients, le versement introuvable dans le cahier, la remise accordée sans connaître la marge, le véhicule oublié quatre mois au fond du dépôt, la livraison avec un dossier incomplet.",
        "**Ce qui est mesuré** : jours en stock par véhicule ; valeur du stock par tranche d'âge ; prix de revient ; marge réelle par véhicule ; remise moyenne ; versements attendus ; ventes par personne.",
        "**Ce que fait Symloop** : le cadrage de vos règles, la reprise de votre stock, les fiches et les frais, les réservations et les versements, le dossier de livraison, le tableau de bord, les droits par rôle, en arabe et en français.",
      ], faq: [
        { q: "Quel logiciel pour gérer un showroom automobile ?", a: "Un logiciel qui tient une fiche par numéro de châssis, le prix de revient de chaque véhicule, les réservations et les versements des clients, le dossier de livraison et les jours en stock." },
        { q: "Comment éviter de promettre la même voiture à deux clients ?", a: "Par une réservation enregistrée sur le véhicule : un seul client, un acompte, une date limite. Tant qu'elle court, le véhicule apparaît réservé pour toute l'équipe." },
        { q: "Comment calculer la marge sur un véhicule ?", a: "Prix de vente, moins le prix de revient, c'est-à-dire le prix d'achat plus tous les frais engagés sur ce véhicule. Dans l'exemple : 3 200 000, moins 3 040 000, soit 160 000 dinars." },
        { q: "Comment suivre les versements des clients ?", a: "Chaque versement est saisi sur la vente et donne un reçu numéroté ; le solde restant se lit à tout moment, et la livraison n'est proposée que lorsqu'il est à zéro." },
        { q: "Que faire des véhicules qui ne se vendent pas ?", a: "D'abord les voir : la liste triée par jours en stock les place en tête. Ensuite décider, véhicule par véhicule, avec le prix de revient sous les yeux : emplacement, photos, prix, rappel des prospects." },
        { q: "L'équipe de vente doit-elle voir le prix d'achat ?", a: "C'est votre choix. Les droits par rôle permettent de ne lui montrer que le prix affiché et la remise permise." },
        { q: "Le logiciel gère-t-il les reprises ?", a: "Oui : le véhicule repris entre en stock avec sa fiche et sa valeur de reprise, et reste lié à la vente qui l'a amené." },
        { q: "Et le dépôt-vente ?", a: "Le véhicule reste la propriété de la personne qui le confie jusqu'à la vente ; le logiciel tient son compte, la commission convenue et le reversement." },
        { q: "Peut-on publier les véhicules en ligne depuis le logiciel ?", a: "Oui, la fiche et ses photos peuvent alimenter votre site ; un véhicule réservé ou vendu en disparaît sans intervention." },
        { q: "Le logiciel convient-il aux motos, aux utilitaires ou aux engins ?", a: "Oui : tout ce qui se vend à l'unité avec un numéro d'identification se suit de la même façon." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Sur le cahier, les deux ventes se ressemblent. Sur la fiche, l'une rapporte plus de quatre fois l'autre." },
      { after: 3, text: "La moyenne rassure ; ce sont les huit véhicules de plus de quatre-vingt-dix jours qui coûtent." },
    ],
    cta: { eyebrow: "Dites-nous combien de véhicules en stock, combien de points de vente, et comment vous notez les versements aujourd'hui : nous commençons par une semaine de cadrage", title: "Voiture promise deux fois, versements dans un cahier, marge inconnue, véhicules oubliés au dépôt, ou showroom que vous montez en Algérie depuis la France", body: "Symloop construit l'outil qui correspond à votre showroom : fiches par numéro de châssis, prix de revient, réservations, versements, dossier de livraison, jours en stock. Décrivez-nous votre stock, vos règles de réservation et votre cahier actuel." },
    related: { label: 'À lire aussi', items: [
      { href: L.pieces, kind: '2027', name: 'Logiciel pièces auto : recherche par véhicule, références équivalentes' },
      { href: L.serie, kind: '2027', name: 'Le numéro de série : garantie, réparation, retour fournisseur' },
      { href: L.credit, kind: '2027', name: 'Le crédit client : lettrage, chèques, relances, plafond' },
      { href: L.crm, kind: '2027', name: 'Logiciel CRM : portefeuille, pipeline, relances, prévision' },
    ] },
  },
  en: {
    kind: 'Car showroom · Algeria · 2027', title: "Car showroom management software in Algeria (2027): the same car promised to two customers, payments noted in a notebook, a margin nobody knows; a record per chassis number, cost price, reservations, days in stock, and what we put in place",
    dek: "“I have a car showroom, about forty vehicles between the lot and the depot. Customers' payments are in a notebook, a salesperson promised the same car to two people, I do not know what each vehicle really cost me once the costs are added, and some have been there for four months without anyone noticing. What software do I need to run a showroom?” A showroom sells one-off items: each vehicle has its number, its cost, its customer and its age in stock, and they have to be known vehicle by vehicle.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Car showroom software', 'A record per chassis number', 'Cost price per vehicle', 'Reservations and payments', 'Days in stock and margin', 'Algeria 2027'],
    intro: [
      "**Short answer.** Car showroom software holds four things, vehicle by vehicle. **The record**: one per chassis number, with photos and location. **The cost price**: the purchase price, plus every cost attached to the vehicle. **The reservation and the payments**: one customer per vehicle, a deposit, a deadline, receipts, a balance. **The days in stock**: a counter that starts at entry and stops at delivery. In this page's example, two vehicles bought and listed at the same price leave one 160,000 dinars of real margin, the other 35,000.",
      "This page is for those who run a showroom of new or used vehicles, from a single lot to several points of sale, and for diaspora founders setting up a buying and reselling business in Algeria. The definitions come from public sources: showroom, vehicle identification number, used car, down payment, inventory turnover, carrying cost of inventory, consignment, gross margin. The two vehicles, the stock of forty vehicles, their prices and their costs are a constructed example, with fictitious prices. The page covers neither approvals and import rules, nor registration, nor tax, nor credit, and quotes no real price of a vehicle or of hardware.",
    ],
    sections: [
      { heading: "A sale, in six steps", body: [
        "The figure follows a vehicle, from its entry into stock to its delivery.",
      ], visual: 'vente', after: [
        "**The trade.** A showroom is a large space where products are displayed for sale, automobiles for example. A used car is a vehicle that has already had one or more owners. In both cases you do not sell an item in ten copies: you sell a one-off, and everything is followed by the unit. **Stock entry.** The vehicle identification number, also called the chassis number, is a unique code used to identify each vehicle; in its standardised format it has 17 characters. It is the key of the record: the purchase price, the photos, the location and the costs are attached to it.",
        "**Preparation.** Transport, bodywork, parts, cleaning: each expense is entered on the vehicle, the day it is made. **Putting on sale.** The listed price, and the maximum discount management accepts, known to the person selling before the negotiation. **The reservation.** That is the accented step: a deposit, a deadline, one customer only. **Payments and delivery.** Each payment produces a receipt; the vehicle only leaves when the balance is zero and the file is complete.",
      ] },
      { heading: "What a vehicle really earned", body: [
        "The figure compares two vehicles bought and listed at the same price.",
      ], visual: 'revient', after: [
        "**The cost price.** It starts from the unit's purchase price; in a showroom, every cost incurred on the vehicle is added to it. **In the example.** Two vehicles bought at 2,900,000 dinars and listed at 3,250,000: a gap of 350,000 dinars. Vehicle A receives 140,000 dinars of costs, transport, preparation, parts; it is sold in 20 days with a discount of 50,000 dinars. Real margin: 160,000 dinars, that is 5.0% of the selling price.",
        "**Vehicle B.** The same costs, plus 25,000 dinars of reconditioning after four months of waiting; it leaves after 130 days with a discount of 150,000 dinars. Real margin: 35,000 dinars, that is 1.1%. **What that says.** In the notebook, the two sales look alike. **Gross margin.** It is the difference between revenue and the cost of what was sold, divided by revenue; without the costs per vehicle, it is wrong. **Before the discount.** During the negotiation, the screen shows the margin that remains; beyond a threshold, the discount needs an approval, see [roles and approvals](" + L.roles + "). **Parts.** If you also run a parts shop, an issue to a vehicle becomes a cost of that vehicle, see [auto parts software](" + L.pieces + ").",
      ] },
      { heading: "What is inside showroom software", body: [
        "The figure stacks five layers; the second gives the figures their meaning.",
      ], visual: 'couches', after: [
        "**The vehicle record.** One per chassis number, as for any item followed by the unit, see [the serial number](" + L.serie + "). Photos are taken on the phone and attached to the record, see [photos that stand as proof](" + L.photos + "); they also serve for listings. **Location.** Showroom, depot, workshop, body shop: you know where each vehicle is without phoning.",
        "**Reservations.** A reserved vehicle is locked for one customer until a date; after that deadline, the rule you have set applies. The mechanism is that of [reservation without double booking](" + L.reservation + "). **Payments.** A down payment is an initial partial payment, made for the purchase of an expensive good such as a car; each later payment reduces the balance, see [customer credit](" + L.credit + "). Cash received goes through [a till session](" + L.caisse + "). **Prospects.** Who asked for which model, and whom to call back: see [the CRM](" + L.crm + "). **The figures.** They are read on [a dashboard](" + L.dashboard + ").",
      ] },
      { heading: "Days in stock, vehicle by vehicle", body: [
        "The figure arranges forty vehicles by the number of days since they came in.",
      ], visual: 'anciennete', after: [
        "**Turnover.** In accounting, inventory turnover measures the number of times inventory is sold over a period; an average number of days to sell is derived from it. For a showroom, the average hides the essential: you have to look vehicle by vehicle. **In the example.** Forty vehicles, 121,600,000 dinars at cost price, an average age of 54 days. But 8 vehicles are over 90 days old and tie up 24,800,000 dinars, a fifth of the stock; 15 are over 60 days old, for 46,100,000 dinars.",
        "**What waiting costs.** The carrying cost of inventory is the total cost of holding stock: the premises, the salaries, and the cost of the money tied up. For a vehicle, reconditioning and a larger discount come on top: that is vehicle B of the previous figure. **What the software does.** Every morning the list starts with the oldest. Beyond the threshold you set, the vehicle is flagged, with its cost price and the discount still possible. **What you decide.** Move it to the front, redo the photos, review the price, offer it to the prospects who were looking for that model. **What is measured.** Days in stock per vehicle; stock value per age band; average days to sell, per make and per price range.",
      ] },
      { heading: "Seven weeks, taking over the stock on hand", body: [
        "Seven weeks in the example, without closing the showroom.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your vehicles, your usual costs, your reservation rules, the documents you require in a file, and your current notebook. **Taking over the stock.** Each vehicle on hand receives its record, its chassis number, its photos, its real entry date and, when they are known, the costs already incurred. **Payments in progress.** Customers who have already paid are taken over with their balance, receipt by receipt.",
        "**Entry.** On the phone, in the lot: a photo, a cost, a change of location are entered standing up, in Arabic or in French. **Rights.** The sales team does not see the purchase price if you do not want it to; it sees the listed price and the discount allowed. **What the software does not do.** It replaces neither your accounting nor your administrative formalities: it holds the stock, the sales and the money received, vehicle by vehicle. **The durations** are those of a constructed example.",
      ] },
      { heading: "From a single lot to several showrooms", body: [
        "The figure gives five situations, and what the software adds to each.",
      ], visual: 'tailles', after: [
        "**One lot.** The stock is in plain sight; what is missing is the cost price and each customer's account. **A depot.** As soon as the stock is in two places, the location per vehicle avoids searches, and promises on a vehicle that is not there. **Several showrooms.** The stock is shared: a reservation taken here is seen over there within the second.",
        "**Trade-ins.** The vehicle taken from a customer enters stock with its own record, at its trade-in value, and the sale that brought it stays linked. **Consignment.** The vehicle is entrusted by its owner, who retains full ownership until it is sold to the final buyer; the software keeps the consignor's account, the commission and the payout. **Ready-made or custom.** Ready-made vehicle sales software exists, and suits a simple lot. Custom work is justified for several sites, consignment sales, a workshop or a parts shop to connect, a website fed by the stock, or a link with your sales management.",
      ], list: [
        "**What you receive**: a record per chassis number with photos and location; the cost price per vehicle; reservations with a deadline; payments with receipts and balance; the file as a checklist; days in stock; margin per vehicle and per person.",
        "**What the showroom avoids**: the car promised to two customers, the payment that cannot be found in the notebook, the discount granted without knowing the margin, the vehicle forgotten for four months at the back of the depot, the delivery with an incomplete file.",
        "**What is measured**: days in stock per vehicle; stock value per age band; cost price; real margin per vehicle; average discount; payments expected; sales per person.",
        "**What Symloop does**: scoping your rules, taking over your stock, records and costs, reservations and payments, the delivery file, the dashboard, rights per role, in Arabic and in French.",
      ], faq: [
        { q: "What software to manage a car showroom?", a: "Software that holds a record per chassis number, the cost price of each vehicle, customers' reservations and payments, the delivery file and the days in stock." },
        { q: "How do you avoid promising the same car to two customers?", a: "With a reservation recorded on the vehicle: one customer, a deposit, a deadline. As long as it runs, the vehicle appears as reserved for the whole team." },
        { q: "How do you calculate the margin on a vehicle?", a: "Selling price, minus the cost price, that is the purchase price plus every cost incurred on that vehicle. In the example: 3,200,000 minus 3,040,000, that is 160,000 dinars." },
        { q: "How do you follow customers' payments?", a: "Each payment is entered on the sale and produces a numbered receipt; the balance due can be read at any time, and delivery is only offered when it is zero." },
        { q: "What do you do with vehicles that do not sell?", a: "First see them: the list sorted by days in stock puts them at the top. Then decide, vehicle by vehicle, with the cost price in front of you: location, photos, price, calling prospects back." },
        { q: "Should the sales team see the purchase price?", a: "That is your choice. Rights per role make it possible to show them only the listed price and the discount allowed." },
        { q: "Does the software handle trade-ins?", a: "Yes: the vehicle taken in enters stock with its record and its trade-in value, and stays linked to the sale that brought it." },
        { q: "And consignment sales?", a: "The vehicle remains the property of the person who entrusts it until the sale; the software keeps their account, the agreed commission and the payout." },
        { q: "Can vehicles be published online from the software?", a: "Yes, the record and its photos can feed your website; a reserved or sold vehicle disappears from it without anyone doing anything." },
        { q: "Does the software suit motorcycles, vans or machinery?", a: "Yes: anything sold by the unit with an identification number is followed the same way." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "In the notebook, the two sales look alike. On the record, one earns more than four times the other." },
      { after: 3, text: "The average reassures; it is the eight vehicles over ninety days old that cost money." },
    ],
    cta: { eyebrow: "Tell us how many vehicles in stock, how many points of sale, and how you note payments today: we start with a week of scoping", title: "A car promised twice, payments in a notebook, an unknown margin, vehicles forgotten at the depot, or a showroom you are setting up in Algeria from France", body: "Symloop builds the tool that fits your showroom: records per chassis number, cost price, reservations, payments, delivery file, days in stock. Describe your stock to us, your reservation rules and your current notebook." },
    related: { label: 'Also read', items: [
      { href: L.pieces, kind: '2027', name: 'Auto parts software: search by vehicle, equivalent references' },
      { href: L.serie, kind: '2027', name: 'The serial number: warranty, repair, return to supplier' },
      { href: L.credit, kind: '2027', name: 'Customer credit: matching, cheques, reminders, ceiling' },
      { href: L.crm, kind: '2027', name: 'CRM software: portfolio, pipeline, reminders, forecast' },
    ] },
  },
  ar: {
    kind: 'معرض السيارات · الجزائر · 2027', title: "برنامج تسيير معرض السيارات في الجزائر (2027): السيارة نفسها موعودة لزبونين، دفعات مسجَّلة في دفتر، وهامش لا يعرفه أحد؛ بطاقة برقم الهيكل، سعر التكلفة، الحجوزات، الأيام في المخزون، وما نضعه",
    dek: "«عندي معرض سيارات، نحو أربعين سيارة بين الحظيرة والمستودع. دفعات الزبائن في دفتر، وبائع وعد بالسيارة نفسها لشخصين، ولا أعرف كم كلّفتني كل سيارة فعلاً بعد إضافة المصاريف، وبعضها هناك منذ أربعة أشهر دون أن ينتبه أحد. أي برنامج لتسيير معرض؟» المعرض يبيع قطعاً فريدة: لكل سيارة رقمها، كلفتها، زبونها، وعمرها في المخزون، ويجب أن تُعرف سيارة بسيارة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج معرض السيارات', 'بطاقة برقم الهيكل', 'سعر التكلفة لكل سيارة', 'الحجوزات والدفعات', 'الأيام في المخزون والهامش', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج معرض السيارات يمسك أربعة أشياء، سيارة بسيارة. **البطاقة**: واحدة لكل رقم هيكل، مع الصور والموقع. **سعر التكلفة**: سعر الشراء، زائد كل مصروف مربوط بالسيارة. **الحجز والدفعات**: زبون واحد لكل سيارة، عربون، أجل، وصولات، وباقٍ. و**الأيام في المخزون**: عدّاد ينطلق عند الدخول ويتوقف عند التسليم. في مثال هذه الصفحة، سيارتان اشتُريتا وعُرضتا بالسعر نفسه تتركان، الأولى " + I('160 000') + " دينار هامشاً حقيقياً، والثانية " + I('35 000') + ".",
      "هذه الصفحة موجّهة إلى من يسيّر معرضاً للسيارات الجديدة أو المستعملة، من حظيرة واحدة إلى عدة نقاط بيع، وإلى مؤسسي الجالية الذين يقيمون نشاط شراء وإعادة بيع في الجزائر. التعريفات من مصادر عمومية: المعرض، رقم تعريف المركبة، السيارة المستعملة، العربون، دوران المخزون، كلفة حيازة المخزون، البيع لحساب الغير، والهامش الإجمالي. والسيارتان، ومخزون الأربعين سيارة، وأسعارها ومصاريفها مثال مركَّب، بأسعار خيالية. والصفحة لا تتناول الاعتمادات وقواعد الاستيراد، ولا الترقيم، ولا الجباية، ولا القرض، ولا تذكر أي سعر حقيقي لسيارة أو لعتاد.",
    ],
    sections: [
      { heading: "بيع، في ست مراحل", body: [
        "الشكل يتابع سيارة، من دخولها المخزون إلى تسليمها.",
      ], visual: 'vente', after: [
        "**المهنة.** المعرض فضاء واسع تُعرض فيه المنتجات للبيع، كالسيارات مثلاً. والسيارة المستعملة سيارة كان لها مالك أو أكثر من قبل. وفي الحالتين، لا يُباع صنف في عشر نسخ: تُباع قطعة فريدة، وكل شيء يُتابَع بالوحدة. **دخول المخزون.** رقم تعريف المركبة، ويسمّى أيضاً رقم الهيكل، رمز فريد يُستعمل لتعريف كل مركبة؛ وفي صيغته الموحَّدة، يتكوّن من 17 رمزاً. وهو مفتاح البطاقة: سعر الشراء، الصور، الموقع، والمصاريف تُربط به.",
        "**التحضير.** النقل، هيكل السيارة، القطع، والتنظيف: كل مصروف يُدخَل على السيارة، يوم إنفاقه. **العرض للبيع.** السعر المعروض، وأقصى تخفيض تقبله الإدارة، يعرفه من يبيع قبل التفاوض. **الحجز.** هو المرحلة المبرزة: عربون، أجل، وزبون واحد فقط. **الدفعات والتسليم.** كل دفعة تعطي وصلاً؛ والسيارة لا تخرج إلا حين يصير الباقي صفراً ويكتمل الملف.",
      ] },
      { heading: "ما ربحته السيارة فعلاً", body: [
        "الشكل يقارن سيارتين اشتُريتا وعُرضتا بالسعر نفسه.",
      ], visual: 'revient', after: [
        "**سعر التكلفة.** ينطلق من سعر شراء الوحدة؛ وفي المعرض، يُضاف إليه كل مصروف أُنفق على السيارة. **في المثال.** سيارتان اشتُريتا بـ" + I('2 900 000') + " دينار وعُرضتا بـ" + I('3 250 000') + ": فارق " + I('350 000') + " دينار. السيارة أ تتلقى " + I('140 000') + " دينار مصاريف، نقل، تحضير، وقطع؛ وتُباع في 20 يوماً بتخفيض " + I('50 000') + " دينار. الهامش الحقيقي: " + I('160 000') + " دينار، أي " + I('5,0') + " بالمئة من سعر البيع.",
        "**السيارة ب.** المصاريف نفسها، زائد " + I('25 000') + " دينار لإعادة التهيئة بعد أربعة أشهر من الانتظار؛ وتخرج بعد 130 يوماً بتخفيض " + I('150 000') + " دينار. الهامش الحقيقي: " + I('35 000') + " دينار، أي " + I('1,1') + " بالمئة. **ما يقوله ذلك.** في الدفتر، يتشابه البيعان. **الهامش الإجمالي.** هو الفرق بين رقم الأعمال وكلفة ما بيع، منسوباً إلى رقم الأعمال؛ ودون المصاريف لكل سيارة، يكون خاطئاً. **قبل التخفيض.** أثناء التفاوض، تُظهر الشاشة الهامش الباقي؛ وبعد عتبة معيّنة، يتطلب التخفيض موافقة، انظر [الأدوار والموافقات](" + L.roles + "). **القطع.** إذا كان لكم أيضاً محل قطع غيار، فإخراج قطعة نحو سيارة يصير مصروفاً لتلك السيارة، انظر [برنامج قطع غيار السيارات](" + L.pieces + ").",
      ] },
      { heading: "ما يوجد في برنامج معرض السيارات", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية تعطي الأرقام معناها.",
      ], visual: 'couches', after: [
        "**بطاقة السيارة.** واحدة لكل رقم هيكل، كما لكل صنف يُتابَع بالوحدة، انظر [الرقم التسلسلي](" + L.serie + "). والصور تُلتقط بالهاتف وتُربط بالبطاقة، انظر [الصور التي تُعتمد دليلاً](" + L.photos + ")؛ وتخدم أيضاً في الإعلانات. **الموقع.** المعرض، المستودع، الورشة، أو ورشة الهيكل: يُعرف أين توجد كل سيارة دون اتصال هاتفي.",
        "**الحجوزات.** السيارة المحجوزة مقفلة لزبون واحد إلى تاريخ معيّن؛ وبعد هذا الأجل، تُطبَّق القاعدة التي حدّدتموها. والآلية هي آلية [الحجز دون تكرار](" + L.reservation + "). **الدفعات.** العربون دفعة أولى جزئية، تُدفع لشراء شيء غالٍ كالسيارة؛ وكل دفعة تالية تنقص الباقي، انظر [دَين الزبون](" + L.credit + "). والنقد المستلَم يمر عبر [جلسة صندوق](" + L.caisse + "). **الزبائن المحتملون.** من طلب أي طراز، ومن يُعاد الاتصال به: انظر [برنامج " + I('CRM') + "](" + L.crm + "). **الأرقام.** تُقرأ على [لوحة قيادة](" + L.dashboard + ").",
      ] },
      { heading: "الأيام في المخزون، سيارة بسيارة", body: [
        "الشكل يرتّب أربعين سيارة حسب عدد الأيام منذ دخولها.",
      ], visual: 'anciennete', after: [
        "**الدوران.** في المحاسبة، دوران المخزون يقيس عدد المرات التي يُباع فيها المخزون خلال فترة؛ ويُستخرج منه متوسط عدد الأيام اللازمة للبيع. وفي المعرض، المتوسط يخفي الأهم: يجب النظر سيارة بسيارة. **في المثال.** أربعون سيارة، " + I('121 600 000') + " دينار بسعر التكلفة، ومتوسط أقدمية 54 يوماً. لكن 8 سيارات تجاوزت 90 يوماً وتجمّد " + I('24 800 000') + " دينار، خُمس المخزون؛ و15 سيارة تجاوزت 60 يوماً، بقيمة " + I('46 100 000') + " دينار.",
        "**كم يكلّف الانتظار.** كلفة حيازة المخزون هي الكلفة الكلية للاحتفاظ بمخزون: المحل، الأجور، وكلفة المال المجمَّد. ويُضاف إليها، للسيارة، إعادة التهيئة وتخفيض أكبر: هي السيارة ب في الشكل السابق. **ما يفعله البرنامج.** كل صباح، تبدأ القائمة بالأقدم. وبعد العتبة التي تحدّدونها، تُعلَّم السيارة، مع سعر تكلفتها والتخفيض الممكن بعد. **ما يُقرَّر.** نقلها إلى الواجهة، إعادة تصويرها، مراجعة السعر، أو اقتراحها على من كان يبحث عن هذا الطراز. **ما يُقاس.** الأيام في المخزون لكل سيارة؛ قيمة المخزون لكل فئة عمر؛ ومتوسط أيام البيع، لكل علامة ولكل فئة سعر.",
      ] },
      { heading: "سبعة أسابيع، مع إدخال المخزون الحاضر", body: [
        "سبعة أسابيع في المثال، دون إغلاق المعرض.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: سياراتكم، مصاريفكم المعتادة، قواعد الحجز عندكم، الوثائق التي تشترطونها في الملف، ودفتركم الحالي. **إدخال المخزون.** كل سيارة حاضرة تتلقى بطاقتها، رقم هيكلها، صورها، تاريخ دخولها الفعلي، والمصاريف المنفقة من قبل حين تُعرف. **الدفعات الجارية.** الزبائن الذين دفعوا من قبل يُدخَلون بباقيهم، وصلاً بوصل.",
        "**الإدخال.** على الهاتف، في الحظيرة: صورة، مصروف، أو تغيير موقع تُدخَل وقوفاً، بالعربية أو الفرنسية. **الصلاحيات.** فريق البيع لا يرى سعر الشراء إذا لم ترغبوا في ذلك؛ يرى السعر المعروض والتخفيض المسموح. **ما لا يفعله البرنامج.** لا يعوّض محاسبتكم ولا إجراءاتكم الإدارية: يمسك المخزون، المبيعات، والمال المستلَم، سيارة بسيارة. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "من حظيرة واحدة إلى عدة معارض", body: [
        "الشكل يعطي خمس حالات، وما يضيفه البرنامج لكل واحدة.",
      ], visual: 'tailles', after: [
        "**حظيرة واحدة.** المخزون أمام العين؛ وما ينقص هو سعر التكلفة وحساب كل زبون. **مستودع.** حين يصير المخزون في مكانين، الموقع لكل سيارة يجنّب البحث، والوعود على سيارة غائبة. **عدة معارض.** المخزون مشترك: حجز يُسجَّل هنا يُرى هناك في الثانية نفسها.",
        "**الاستبدال.** السيارة المأخوذة من زبون تدخل المخزون ببطاقتها، بقيمة أخذها، ويبقى البيع الذي جاء بها مربوطاً. **البيع لحساب الغير.** السيارة يودعها مالكها، ويحتفظ بملكيتها كاملة إلى أن تُباع للمشتري النهائي؛ والبرنامج يمسك حساب المودِع، العمولة، والتحويل له. **جاهز أو على المقاس.** توجد برامج جاهزة لبيع السيارات، وتناسب حظيرة بسيطة. والعمل على المقاس يُبرَّر لعدة مواقع، للبيع لحساب الغير، لورشة أو محل قطع يُربط، لموقع يتغذى من المخزون، أو لربط بتسييركم التجاري.",
      ], list: [
        "**ما تتلقونه**: بطاقة لكل رقم هيكل مع الصور والموقع؛ سعر التكلفة لكل سيارة؛ الحجوزات بأجل؛ الدفعات بوصولات وباقٍ؛ الملف في قائمة تأشير؛ الأيام في المخزون؛ والهامش لكل سيارة ولكل شخص.",
        "**ما يتفاداه المعرض**: السيارة الموعودة لزبونين، الدفعة التي لا تُوجد في الدفتر، التخفيض الممنوح دون معرفة الهامش، السيارة المنسية أربعة أشهر في آخر المستودع، والتسليم بملف ناقص.",
        "**ما يُقاس**: الأيام في المخزون لكل سيارة؛ قيمة المخزون لكل فئة عمر؛ سعر التكلفة؛ الهامش الحقيقي لكل سيارة؛ متوسط التخفيض؛ الدفعات المنتظَرة؛ والمبيعات لكل شخص.",
        "**ما تفعله Symloop**: تأطير قواعدكم، إدخال مخزونكم، البطاقات والمصاريف، الحجوزات والدفعات، ملف التسليم، لوحة القيادة، والصلاحيات حسب الدور، بالعربية والفرنسية.",
      ], faq: [
        { q: "أي برنامج لتسيير معرض السيارات؟", a: "برنامج يمسك بطاقة لكل رقم هيكل، سعر التكلفة لكل سيارة، حجوزات الزبائن ودفعاتهم، ملف التسليم، والأيام في المخزون." },
        { q: "كيف يُتفادى وعد زبونين بالسيارة نفسها؟", a: "بحجز يُسجَّل على السيارة: زبون واحد، عربون، وأجل. وما دام سارياً، تظهر السيارة محجوزة لكل الفريق." },
        { q: "كيف يُحسب الهامش على سيارة؟", a: "سعر البيع، ناقص سعر التكلفة، أي سعر الشراء زائد كل المصاريف المنفقة على هذه السيارة. في المثال: " + I('3 200 000') + " ناقص " + I('3 040 000') + "، أي " + I('160 000') + " دينار." },
        { q: "كيف تُتابَع دفعات الزبائن؟", a: "كل دفعة تُدخَل على البيع وتعطي وصلاً مرقَّماً؛ والباقي يُقرأ في كل لحظة، والتسليم لا يُقترح إلا حين يصير صفراً." },
        { q: "ما العمل مع السيارات التي لا تُباع؟", a: "أولاً رؤيتها: القائمة المرتّبة حسب الأيام في المخزون تضعها في الرأس. ثم القرار، سيارة بسيارة، وسعر التكلفة أمام العين: الموقع، الصور، السعر، وإعادة الاتصال بالزبائن المحتملين." },
        { q: "هل يجب أن يرى فريق البيع سعر الشراء؟", a: "هذا اختياركم. الصلاحيات حسب الدور تسمح بألا يُعرض عليه إلا السعر المعروض والتخفيض المسموح." },
        { q: "هل يسيّر البرنامج استبدال السيارات؟", a: "نعم: السيارة المأخوذة تدخل المخزون ببطاقتها وبقيمة أخذها، وتبقى مربوطة بالبيع الذي جاء بها." },
        { q: "والبيع لحساب الغير؟", a: "السيارة تبقى ملكاً لمن أودعها إلى غاية البيع؛ والبرنامج يمسك حسابه، العمولة المتفق عليها، والتحويل له." },
        { q: "هل يمكن نشر السيارات على الإنترنت من البرنامج؟", a: "نعم، البطاقة وصورها يمكن أن تغذّي موقعكم؛ والسيارة المحجوزة أو المباعة تختفي منه دون تدخّل." },
        { q: "هل يناسب البرنامج الدراجات النارية، المركبات النفعية، أو الآليات؟", a: "نعم: كل ما يُباع بالوحدة برقم تعريف يُتابَع بالطريقة نفسها." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "في الدفتر، يتشابه البيعان. وفي البطاقة، أحدهما يربح أكثر من أربعة أضعاف الآخر." },
      { after: 3, text: "المتوسط يطمئن؛ والسيارات الثماني التي تجاوزت تسعين يوماً هي التي تكلّف." },
    ],
    cta: { eyebrow: "قولوا لنا كم سيارة في المخزون، كم نقطة بيع، وكيف تسجّلون الدفعات اليوم: نبدأ بأسبوع تأطير", title: "سيارة موعودة مرتين، دفعات في دفتر، هامش مجهول، سيارات منسية في المستودع، أو معرض تقيمونه في الجزائر من فرنسا", body: "Symloop تبني الأداة التي تناسب معرضكم: بطاقات برقم الهيكل، سعر التكلفة، الحجوزات، الدفعات، ملف التسليم، والأيام في المخزون. صِفوا لنا مخزونكم، قواعد الحجز عندكم، ودفتركم الحالي." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.pieces, kind: '2027', name: 'برنامج قطع غيار السيارات: بحث حسب المركبة، ومراجع مكافئة' },
      { href: L.serie, kind: '2027', name: 'الرقم التسلسلي: الضمان، الإصلاح، والإرجاع إلى المورّد' },
      { href: L.credit, kind: '2027', name: 'دَين الزبون: المطابقة، الصكوك، التذكير، والسقف' },
      { href: L.crm, kind: '2027', name: 'برنامج تسيير العلاقة مع الزبائن: المحفظة، المسار، التذكير، والتوقّع' },
    ] },
  },
};

const KEYWORDS = "logiciel gestion showroom algerie, logiciel showroom algerie, logiciel de gestion de showroom automobile algérie 2027, logiciel showroom automobile, logiciel concessionnaire automobile, logiciel vente voiture d'occasion, logiciel achat revente voiture, logiciel négoce automobile, logiciel vente véhicule, prix de revient véhicule, jours en stock véhicule, car showroom management software algeria, car dealership software, used car dealer software, vehicle stock ageing, برنامج تسيير معرض السيارات, برنامج ادارة معارض السيارات, برنامج معرض سيارات, برنامج حسابات معرض سيارات, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
