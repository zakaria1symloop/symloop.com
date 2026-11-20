import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-location-de-materiel-engins-algerie-2027-planning-de-disponibilite-etat-des-lieux-photo-compteur-d-heures-facturation-taux-utilisation.mjs';

const SLUG = 'logiciel-location-de-materiel-engins-algerie-2027-planning-de-disponibilite-etat-des-lieux-photo-compteur-d-heures-facturation-taux-utilisation';
const FIGURES = ['location', 'retour', 'parc', 'couches', 'calendrier', 'situations'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  flotte: '/blog/le-carburant-coute-plus-que-prevu-et-personne-ne-sait-pourquoi-gestion-de-flotte-application-algerie-2027-releves-consommation-entretien-au-km/',
  voiture: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/',
  reservation: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  terrain: '/blog/le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  consignes: '/blog/on-a-perdu-400-casiers-et-personne-ne-sait-chez-qui-emballages-consignes-application-algerie-2027-solde-par-client-caution-inventaire-relances/',
  btp: '/blog/logiciel-entreprise-batiment-btp-algerie-2027-devis-metre-suivi-de-chantier-situations-de-travaux-achats-pointage-marge-par-chantier/',
  catalogue: '/blog/comment-creer-un-catalogue-en-ligne-en-algerie-2027-catalogue-pdf-jamais-a-jour-fiches-produits-prix-par-client-demande-de-devis-sans-boutique/',
};

const CONTENT = {
  fr: {
    kind: 'Location de matériel · Algérie · 2027', title: "Logiciel de location de matériel en Algérie (2027) : la même machine promise à deux chantiers, une nacelle rendue abîmée, des engins qui dorment au dépôt, et des factures qui partent dix jours après le retour ; planning, état des lieux photo, compteur d'heures, taux d'utilisation, et ce qu'on met en place",
    dek: "« Nous louons des engins et du matériel de chantier : pelles, chargeuses, nacelles, groupes électrogènes. Le planning est sur un tableau blanc, on promet une machine qui n'est pas rentrée, une autre dort au dépôt depuis deux mois sans que personne le sache. Le client rend une nacelle abîmée et dit qu'elle l'était déjà, les heures du compteur ne sont pas relevées, et la facture part dix jours après le retour. Quel logiciel faut-il pour une société de location de matériel ? » Une fiche par machine, un planning qui bloque la machine réservée, un état des lieux en photos au départ et au retour, une facture le jour du retour, et un taux d'utilisation par machine.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de location de matériel', 'Location d’engins de chantier', 'Planning de disponibilité et réservation', 'État des lieux et compteur d’heures', 'Taux d’utilisation du parc', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de location de matériel tient cinq choses : une fiche par machine, avec son numéro de série, son compteur d'heures, son état et son dépôt ; un planning de disponibilité qui empêche de promettre deux fois la même machine ; un contrat par location, avec un état des lieux en photos au départ et au retour ; une facture qui part le jour du retour, à la durée, aux heures et aux écarts constatés ; et l'entretien déclenché par le compteur. Le chiffre qui dit si le parc gagne de l'argent est le taux d'utilisation, machine par machine. Dans l'exemple de cette page, un parc de 40 machines est loué 53 % du temps, avec 9 machines sous 25 %.",
      "Cette page s'adresse aux sociétés qui louent des engins de chantier, des nacelles, des chariots élévateurs, des groupes électrogènes, des échafaudages ou du matériel d'événement, en Algérie, et aux fondatrices et fondateurs de la diaspora qui montent un parc ici. Les définitions viennent de sources publiques : location de matériel, engin de chantier, nacelle élévatrice, taux d'utilisation d'un parc de location, maintenance préventive, suivi des véhicules, survente. Le parc de 40 machines, la location de 14 jours et les montants sont un exemple construit. La page ne traite ni des règles sur les contrats de location, les cautions et les assurances, ni des contrôles réglementaires des machines, ni de la fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Une location, en six temps", body: [
        "La figure suit une location, de la demande à la révision.",
      ], visual: 'location', after: [
        "**Le métier.** La location de matériel met des machines, des équipements et des outils à la disposition d'utilisateurs pour une durée limitée : des mini-pelles et des chargeuses aux groupes électrogènes et aux bétonnières. Un engin de chantier est un véhicule lourd conçu pour des travaux de construction ; une nacelle élévatrice donne un accès temporaire en hauteur. **La demande et la réservation.** La demande arrive par téléphone, au comptoir ou depuis un catalogue en ligne, voir [le catalogue en ligne](" + L.catalogue + "). La réservation bloque la machine pour ces dates : promettre deux fois la même, c'est de la survente, la vente d'un service au-delà de ce que l'on a. Le mécanisme est celui de [la réservation sans doublon](" + L.reservation + ").",
        "**Le départ et le retour.** Ce sont les deux temps où l'argent se gagne ou se perd : photos, compteur, niveau de carburant, accessoires, signature du client, au départ puis au retour. Le retour est le temps accentué. Tout se fait sur le téléphone, au dépôt ou sur le chantier, même sans réseau, voir [l'application hors ligne](" + L.horsligne + "). **Sur chantier.** Une prolongation, une panne, un échange de machine : chaque événement est noté sur le contrat, à sa date. **La facture et l'entretien.** La facture part le jour du retour ; la machine passe en contrôle avant de redevenir disponible au planning.",
      ] },
      { heading: "Départ et retour : ce que l'état des lieux met sur la facture", body: [
        "La figure compare une nacelle au départ et au retour d'une location de 14 jours, et ce que les écarts deviennent sur la facture.",
      ], visual: 'retour', after: [
        "**Dans l'exemple.** Une nacelle, 14 jours. Au départ : compteur à 1 204 heures, plein fait, douze photos, trois accessoires. Au retour : 1 338 heures, réservoir à moitié, un garde-corps tordu, deux accessoires sur trois. La location de base fait 252 000 dinars. Le compteur a tourné 134 heures pour un forfait de 112 : 22 heures en plus, 33 000 dinars. Carburant manquant, 9 000. Garde-corps, 26 000. Accessoire non rendu, 8 000. Total : 328 000 dinars, soit 76 000 de plus que la location seule.",
        "**Ce que cela dit.** Sans constat au départ, chaque écart devient une discussion ; avec, il devient une ligne. Les photos sont datées, prises devant le client, et signées deux fois. Le principe est le même que pour [la location de voitures](" + L.voiture + "). **La facture le jour du retour.** La durée, les heures et les écarts sont déjà dans le contrat : il n'y a rien à ressaisir. Dix jours gagnés sur la facture, ce sont dix jours gagnés sur l'encaissement, voir [le crédit client](" + L.credit + "). **Ce que l'on mesure.** Jours entre le retour et la facture ; écarts constatés et écarts facturés ; heures au-delà du forfait ; litiges ouverts ; impayés par client.",
      ] },
      { heading: "Où dorment les machines", body: [
        "La figure place les 40 machines du parc selon la part du mois où chacune était louée.",
      ], visual: 'parc', after: [
        "**Le taux d'utilisation.** C'est la mesure principale par laquelle un loueur juge ses machines. Le taux physique compte les jours loués sur les jours où la machine pouvait l'être ; il se compte en heures pour certains matériels. Le taux financier se mesure par le revenu de location obtenu sur une période. **Dans l'exemple.** 40 machines, 30 jours, soit 1 200 jours-machine : 637 loués, 72 en atelier, 491 disponibles et non loués. Le parc est loué 53 % du temps.",
        "**Ce que la moyenne cache.** Neuf machines sont sous 25 % : à elles neuf, 33 jours loués dans le mois. Six sont au-dessus de 85 %, et ce sont elles que l'on refuse aux clients : 14 demandes refusées. **Trois décisions.** Une machine qui dort se propose, se déplace vers un autre dépôt, ou se vend. Une famille saturée justifie une machine de plus, et les demandes refusées disent laquelle. Entre les deux, on regarde le tarif. **Le matériel dehors.** Savoir chez quel client et sur quel chantier se trouve chaque machine relève du même suivi que [les emballages consignés](" + L.consignes + "). **Les chiffres** sont ceux d'un exemple construit.",
      ] },
      { heading: "Ce qu'il y a dans le logiciel", body: [
        "La figure empile cinq couches ; la deuxième, le planning, est celle qui empêche de promettre deux fois.",
      ], visual: 'couches', after: [
        "**Le parc et le planning.** Une fiche par machine : numéro de série, compteur, état, dépôt, documents, historique des locations et des pannes. Le planning montre la disponibilité par machine et par famille ; c'est la couche accentuée. Une demande que l'on ne peut pas servir s'enregistre : c'est une location manquée, et une information. **Le contrat.** Client, chantier, durée, tarif, forfait d'heures, état des lieux au départ et au retour.",
        "**L'entretien.** La maintenance préventive est une routine d'inspection périodique, pour repérer les petits problèmes avant qu'ils deviennent gros. Ici, elle se déclenche aux heures du compteur, et une machine en atelier sort du planning, voir [les interventions sur le terrain](" + L.terrain + "). **La position.** Le suivi des véhicules consiste à surveiller la position, les mouvements et l'état d'un véhicule ou d'une flotte ; pour des engins équipés d'un boîtier, il donne aussi les heures de marche, voir [la gestion de flotte](" + L.flotte + "). **Les chiffres.** Taux d'utilisation, revenu par machine, impayés, demandes refusées, par dépôt.",
      ] },
      { heading: "Onze semaines, en commençant par l'inventaire du parc", body: [
        "Onze semaines dans l'exemple, avant les chiffres par machine.",
      ], visual: 'calendrier', after: [
        "**L'inventaire.** Une fiche par machine, avec sa série, son compteur du jour, son état, son dépôt et ses photos. C'est souvent là que l'on retrouve une machine oubliée chez un client. **Le planning.** D'abord les réservations en cours, puis toutes les demandes, y compris celles que l'on refuse. **Le contrat et l'état des lieux.** Sur téléphone, avec les photos et la signature ; le modèle de contrat est le vôtre, nous n'en écrivons pas les clauses.",
        "**Les tarifs et la facture.** Au jour, à la semaine, au mois, avec forfait d'heures et écarts au retour. **L'entretien.** Les révisions par compteur, les immobilisations au planning. **Les chiffres par machine.** Ils arrivent en dernier, parce qu'ils ont besoin de trois mois de locations bien saisies. **Ce que le logiciel ne fait pas.** Il ne décide pas d'acheter ou de vendre une machine, et ne remplace ni le contrôle d'un mécanicien ni votre contrat. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Cinq situations, et ce que le logiciel en fait", body: [
        "La figure reprend cinq situations du quotidien d'un loueur, aujourd'hui et avec le logiciel.",
      ], visual: 'situations', after: [
        "**La machine promise deux fois, la machine abîmée.** La réservation bloque, et le planning propose une machine équivalente ; les photos du départ règlent la discussion du retour. **Le chantier qui garde la machine.** La prolongation se note au planning, et la facture part à la période, sans attendre le retour. Beaucoup de clients sont des entreprises du bâtiment, qui suivent leurs propres coûts par chantier, voir [le logiciel du bâtiment](" + L.btp + ").",
        "**La machine qui dort, la révision oubliée.** Le taux d'utilisation la montre chaque mois, pas à l'inventaire de fin d'année ; le compteur déclenche la révision avant la panne chez le client. **Prêt à l'emploi ou sur mesure.** Des logiciels de location de matériel prêts à l'emploi existent, et conviennent quand vos tarifs et vos machines entrent dans leurs cases. Le sur-mesure se justifie quand vous louez avec ou sans opérateur, au jour et aux heures, depuis plusieurs dépôts, avec un état des lieux sur téléphone sans réseau, l'arabe et le français, et un lien avec votre comptabilité.",
      ], list: [
        "**Ce que vous recevez** : la fiche de chaque machine ; le planning de disponibilité ; le contrat et l'état des lieux sur téléphone ; la facture le jour du retour ; l'entretien aux heures ; le suivi des machines dehors, par client et par chantier ; le taux d'utilisation par machine, par famille et par dépôt ; les demandes refusées.",
        "**Ce que l'entreprise évite** : la machine promise deux fois, la nacelle rendue abîmée sans preuve, les heures non relevées, la prolongation jamais facturée, la facture dix jours après, la machine oubliée chez un client, la révision oubliée, la machine qui dort deux mois.",
        "**Ce qui est mesuré** : taux d'utilisation par machine ; jours en atelier ; demandes refusées par famille ; jours entre retour et facture ; écarts constatés et facturés ; heures au-delà du forfait ; revenu par machine ; impayés par client.",
        "**Ce que fait Symloop** : l'inventaire du parc, le planning, le contrat et l'état des lieux sur téléphone, les tarifs et la facturation, l'entretien aux heures, le lien avec vos outils, les chiffres par machine, en arabe et en français.",
      ], faq: [
        { q: "Quel logiciel pour une société de location de matériel ?", a: "Un logiciel qui tient une fiche par machine, un planning de disponibilité, un contrat avec état des lieux au départ et au retour, la facturation à la durée et aux heures, l'entretien au compteur, et le taux d'utilisation par machine." },
        { q: "Comment éviter de louer deux fois la même machine ?", a: "Par une réservation qui bloque la machine pour ses dates dès qu'elle est promise. Si elle n'est pas rentrée, le planning le montre et propose une machine équivalente." },
        { q: "Comment prouver qu'une machine a été rendue abîmée ?", a: "Par un état des lieux au départ et au retour, sur téléphone : mêmes photos, datées, compteur, niveau, accessoires, et la signature du client les deux fois." },
        { q: "Comment facturer les heures d'utilisation d'un engin ?", a: "En relevant le compteur au départ et au retour. Le contrat porte un forfait d'heures ; les heures au-delà sont une ligne de la facture. Dans l'exemple, 134 heures pour un forfait de 112." },
        { q: "Comment calculer le taux d'utilisation d'un parc ?", a: "Jours loués divisés par jours où la machine pouvait l'être, machine par machine. Dans l'exemple, 637 jours sur 1 200, soit 53 %, avec des machines à moins de 25 % et d'autres à plus de 85 %." },
        { q: "Que faire d'une machine qui ne se loue pas ?", a: "La voir d'abord : c'est le rôle du taux par machine. Ensuite elle se propose aux clients, se déplace vers un autre dépôt, change de tarif, ou se vend. La décision reste la vôtre." },
        { q: "Peut-on faire l'état des lieux sur un chantier sans réseau ?", a: "Oui. L'application enregistre les photos et les relevés sur le téléphone et les envoie dès que le réseau revient." },
        { q: "Le logiciel gère-t-il la location avec opérateur ?", a: "Oui, s'il est construit pour cela : l'opérateur est une ressource au planning comme la machine, avec ses heures." },
        { q: "Un tableur ne suffit-il pas ?", a: "Pour dix machines, parfois. Au-delà, il ne bloque pas une réservation, ne garde pas les photos, ne relève pas un compteur, et ne calcule pas un taux par machine sans une journée de travail." },
        { q: "Par quoi commencer ?", a: "Par l'inventaire : une fiche par machine, avec sa série, son compteur et son dépôt. Puis par le planning des réservations en cours." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Sans constat au départ, chaque écart devient une discussion ; avec, il devient une ligne." },
      { after: 2, text: "La moyenne ne dit rien : le parc gagne ou perd machine par machine." },
    ],
    cta: { eyebrow: "Dites-nous combien de machines vous louez, depuis combien de dépôts, et comment se fait le retour aujourd'hui : nous commençons par l'inventaire du parc", title: "Machine promise deux fois, matériel rendu abîmé, heures non relevées, prolongation jamais facturée, engins qui dorment, facture en retard, ou parc que vous montez en Algérie depuis la France", body: "Symloop construit le logiciel de location qui correspond à votre parc : fiche par machine, planning, contrat et état des lieux sur téléphone, facture le jour du retour, entretien aux heures, taux d'utilisation. Décrivez-nous vos machines, vos dépôts et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.voiture, kind: '2027', name: 'Logiciel de location de voitures : réservation, caution, état des lieux' },
      { href: L.flotte, kind: '2027', name: 'Gestion de flotte : relevés, consommation, entretien au kilomètre' },
      { href: L.terrain, kind: '2027', name: 'Interventions terrain : équipements, ordres de travail, préventif' },
      { href: L.reservation, kind: '2027', name: 'Réservation sans doublon : créneaux, verrou, rappels' },
    ] },
  },
  en: {
    kind: 'Equipment rental · Algeria · 2027', title: "Equipment rental software in Algeria (2027): the same machine promised to two sites, an aerial platform returned damaged, machines asleep at the depot, and invoices sent ten days after the return; planning, photo condition report, hour meter, utilisation rate, and what we put in place",
    dek: "“We rent out site machinery and equipment: excavators, loaders, aerial platforms, generators. The planning is on a whiteboard, we promise a machine that has not come back, and another has been asleep at the depot for two months without anyone knowing. The customer returns a damaged platform and says it was already like that, the meter hours are not read, and the invoice goes out ten days after the return. Which software does an equipment rental company need?” One record per machine, a planning that holds the booked machine, a photo condition report at check-out and check-in, an invoice on the day of return, and a utilisation rate per machine.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Equipment rental software', 'Machinery and plant hire', 'Availability planning and booking', 'Condition report and hour meter', 'Fleet utilisation rate', 'Algeria 2027'],
    intro: [
      "**Short answer.** Equipment rental software keeps five things: one record per machine, with its serial number, hour meter, condition and depot; an availability planning that stops the same machine being promised twice; one contract per rental, with a photo condition report at check-out and at check-in; an invoice that goes out on the day of return, by duration, hours and recorded differences; and servicing triggered by the meter. The figure that says whether the fleet makes money is the utilisation rate, machine by machine. In this page's example, a fleet of 40 machines is rented 53% of the time, with 9 machines under 25%.",
      "This page is for companies that rent out site machinery, aerial platforms, forklifts, generators, scaffolding or event equipment, in Algeria, and for diaspora founders building a fleet here. The definitions come from public sources: equipment rental, heavy equipment, aerial work platform, rental utilisation, preventive maintenance, vehicle tracking, overselling. The fleet of 40 machines, the 14-day rental and the amounts are a constructed example. The page covers neither the rules on rental contracts, deposits and insurance, nor the regulatory inspections of machines, nor taxation, and quotes no equipment price.",
    ],
    sections: [
      { heading: "A rental, in six steps", body: [
        "The figure follows a rental, from the request to the service.",
      ], visual: 'location', after: [
        "**The trade.** Equipment rental puts machines, equipment and tools at the disposal of users for a limited time: from mini-excavators and loaders to generators and concrete mixers. Heavy equipment means heavy-duty vehicles built for construction work; an aerial work platform gives temporary access at height. **The request and the booking.** The request arrives by phone, at the counter or from an online catalogue, see [the online catalogue](" + L.catalogue + "). The booking holds the machine for those dates: promising the same one twice is overselling, selling a service beyond what you actually have. The mechanism is that of [booking without double booking](" + L.reservation + ").",
        "**Check-out and check-in.** Those are the two moments where money is made or lost: photos, meter, fuel level, accessories, customer signature, at check-out then at check-in. The check-in is the accented step. Everything is done on the phone, at the depot or on site, even with no network, see [the offline application](" + L.horsligne + "). **On site.** An extension, a breakdown, a machine swap: each event is recorded on the contract, at its date. **The invoice and the service.** The invoice goes out on the day of return; the machine is inspected before it becomes available in the planning again.",
      ] },
      { heading: "Check-out and check-in: what the condition report puts on the invoice", body: [
        "The figure compares an aerial platform at check-out and at check-in of a 14-day rental, and what the differences become on the invoice.",
      ], visual: 'retour', after: [
        "**In the example.** One aerial platform, 14 days. At check-out: meter at 1,204 hours, tank full, twelve photos, three accessories. At check-in: 1,338 hours, tank half full, a bent guardrail, two accessories of three. The base rental is 252,000 dinars. The meter ran 134 hours against an allowance of 112: 22 extra hours, 33,000 dinars. Missing fuel, 9,000. Guardrail, 26,000. Accessory not returned, 8,000. Total: 328,000 dinars, that is 76,000 more than the rental alone.",
        "**What that says.** With no report at check-out, every difference becomes an argument; with one, it becomes a line. The photos are dated, taken in front of the customer, and signed twice. The principle is the same as for [car rental](" + L.voiture + "). **The invoice on the day of return.** Duration, hours and differences are already in the contract: there is nothing to retype. Ten days gained on the invoice are ten days gained on collection, see [customer credit](" + L.credit + "). **What is measured.** Days between return and invoice; differences recorded and differences invoiced; hours beyond the allowance; open disputes; unpaid amounts per customer.",
      ] },
      { heading: "Where the machines sleep", body: [
        "The figure places the 40 machines of the fleet by the share of the month each was rented.",
      ], visual: 'parc', after: [
        "**Utilisation.** It is the main measure by which a rental company judges its machines. Physical utilisation counts rented days over the days the machine could have been rented; for some equipment it is counted in hours. Financial utilisation is measured by the rental revenue achieved over a period. **In the example.** 40 machines, 30 days, that is 1,200 machine-days: 637 rented, 72 in the workshop, 491 available and not rented. The fleet is rented 53% of the time.",
        "**What the average hides.** Nine machines are under 25%: between the nine, 33 rented days in the month. Six are above 85%, and those are the ones refused to customers: 14 requests refused. **Three decisions.** A machine that sleeps is offered, moved to another depot, or sold. A saturated family justifies one more machine, and the refused requests say which. In between, you look at the rate. **Equipment out in the field.** Knowing at which customer and on which site each machine stands is the same tracking as for [returnable packaging](" + L.consignes + "). **The figures** are those of a constructed example.",
      ] },
      { heading: "What is inside the software", body: [
        "The figure stacks five layers; the second, the planning, is the one that stops a double promise.",
      ], visual: 'couches', after: [
        "**The fleet and the planning.** One record per machine: serial number, meter, condition, depot, documents, history of rentals and breakdowns. The planning shows availability per machine and per family; that is the accented layer. A request that cannot be served is recorded: it is a missed rental, and a piece of information. **The contract.** Customer, site, duration, rate, hour allowance, condition report out and back.",
        "**Servicing.** Preventive maintenance is a routine of periodic inspection, to notice small problems before they grow. Here it is triggered by the meter hours, and a machine in the workshop leaves the planning, see [field service](" + L.terrain + "). **Position.** Vehicle tracking means monitoring the location, movements and status of a vehicle or a fleet; for machines fitted with a tracking unit, it also gives running hours, see [fleet management](" + L.flotte + "). **The figures.** Utilisation rate, revenue per machine, unpaid invoices, refused requests, per depot.",
      ] },
      { heading: "Eleven weeks, starting with the fleet inventory", body: [
        "Eleven weeks in the example, before the figures per machine.",
      ], visual: 'calendrier', after: [
        "**The inventory.** One record per machine, with its serial, today's meter, its condition, its depot and its photos. That is often where a machine forgotten at a customer's is found. **The planning.** First the bookings in progress, then all requests, including the ones you refuse. **The contract and the condition report.** On the phone, with photos and signature; the contract template is yours, we do not write its clauses.",
        "**Rates and the invoice.** By day, by week, by month, with an hour allowance and differences at return. **Servicing.** Services by meter, downtime in the planning. **Figures per machine.** They come last, because they need three months of rentals entered properly. **What the software does not do.** It does not decide to buy or sell a machine, and replaces neither a mechanic's inspection nor your contract. **The durations** are those of a constructed example.",
      ] },
      { heading: "Five situations, and what the software does with them", body: [
        "The figure takes five everyday situations of a rental company, today and with the software.",
      ], visual: 'situations', after: [
        "**The machine promised twice, the damaged machine.** The booking holds the machine, and the planning offers an equivalent one; the check-out photos settle the check-in argument. **The site that keeps the machine.** The extension is recorded in the planning, and the invoice goes out per period, without waiting for the return. Many customers are construction companies that track their own costs per site, see [construction software](" + L.btp + ").",
        "**The machine that sleeps, the forgotten service.** The utilisation rate shows it every month, not at the year-end inventory; the meter triggers the service before the breakdown at the customer's. **Ready-made or custom.** Ready-made equipment rental software exists, and suits you when your rates and your machines fit its boxes. Custom work is justified when you rent with or without an operator, by the day and by the hour, from several depots, with a condition report on the phone with no network, Arabic and French, and a link with your accounting.",
      ], list: [
        "**What you receive**: the record of each machine; the availability planning; the contract and condition report on the phone; the invoice on the day of return; servicing by hours; tracking of machines out in the field, per customer and per site; the utilisation rate per machine, per family and per depot; refused requests.",
        "**What the company avoids**: the machine promised twice, the platform returned damaged with no proof, hours not read, the extension never invoiced, the invoice ten days later, the machine forgotten at a customer's, the forgotten service, the machine asleep for two months.",
        "**What is measured**: utilisation rate per machine; days in the workshop; refused requests per family; days between return and invoice; differences recorded and invoiced; hours beyond the allowance; revenue per machine; unpaid amounts per customer.",
        "**What Symloop does**: the fleet inventory, the planning, the contract and condition report on the phone, rates and invoicing, servicing by hours, the link with your tools, the figures per machine, in Arabic and in French.",
      ], faq: [
        { q: "Which software for an equipment rental company?", a: "Software that keeps one record per machine, an availability planning, a contract with a condition report at check-out and check-in, invoicing by duration and by hours, servicing by meter, and the utilisation rate per machine." },
        { q: "How do you avoid renting the same machine twice?", a: "With a booking that holds the machine for its dates as soon as it is promised. If it has not come back, the planning shows it and offers an equivalent machine." },
        { q: "How do you prove a machine was returned damaged?", a: "With a condition report at check-out and at check-in, on the phone: the same photos, dated, meter, level, accessories, and the customer's signature both times." },
        { q: "How do you invoice the hours a machine was used?", a: "By reading the meter at check-out and at check-in. The contract carries an hour allowance; hours beyond it are a line on the invoice. In the example, 134 hours against an allowance of 112." },
        { q: "How do you calculate a fleet's utilisation rate?", a: "Rented days divided by the days the machine could have been rented, machine by machine. In the example, 637 days of 1,200, that is 53%, with machines under 25% and others above 85%." },
        { q: "What do you do with a machine that does not rent?", a: "See it first: that is the role of the rate per machine. Then it is offered to customers, moved to another depot, re-priced, or sold. The decision remains yours." },
        { q: "Can the condition report be done on a site with no network?", a: "Yes. The application records the photos and readings on the phone and sends them as soon as the network returns." },
        { q: "Does the software handle rental with an operator?", a: "Yes, if it is built for it: the operator is a resource in the planning like the machine, with their hours." },
        { q: "Is a spreadsheet not enough?", a: "For ten machines, sometimes. Beyond that, it does not hold a booking, does not keep photos, does not read a meter, and does not compute a rate per machine without a day's work." },
        { q: "Where do you start?", a: "With the inventory: one record per machine, with its serial, its meter and its depot. Then with the planning of bookings in progress." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "With no report at check-out, every difference becomes an argument; with one, it becomes a line." },
      { after: 2, text: "The average says nothing: the fleet earns or loses machine by machine." },
    ],
    cta: { eyebrow: "Tell us how many machines you rent out, from how many depots, and how the return is handled today: we start with the fleet inventory", title: "A machine promised twice, equipment returned damaged, hours not read, an extension never invoiced, machines asleep, a late invoice, or a fleet you are building in Algeria from France", body: "Symloop builds the rental software that fits your fleet: a record per machine, planning, contract and condition report on the phone, invoice on the day of return, servicing by hours, utilisation rate. Describe your machines to us, your depots and your tools." },
    related: { label: 'Also read', items: [
      { href: L.voiture, kind: '2027', name: 'Car rental software: booking, deposit, condition report' },
      { href: L.flotte, kind: '2027', name: 'Fleet management: readings, consumption, servicing by kilometre' },
      { href: L.terrain, kind: '2027', name: 'Field service: equipment, work orders, preventive maintenance' },
      { href: L.reservation, kind: '2027', name: 'Booking without double booking: slots, lock, reminders' },
    ] },
  },
  ar: {
    kind: 'كراء العتاد · الجزائر · 2027', title: "برنامج كراء العتاد والآليات في الجزائر (2027): الآلة نفسها موعودة لورشتين، رافعة تُرجَع متضررة، آليات تنام في المستودع، وفواتير تخرج بعد الرجوع بعشرة أيام؛ جدول التوفر، محضر معاينة بالصور، عدّاد الساعات، نسبة الاستعمال، وما نضعه",
    dek: "«نكري آليات وعتاد ورشات: حفّارات، محمّلات، رافعات أشخاص، ومولّدات كهربائية. جدول التوفر على لوحة بيضاء، نعد بآلة لم ترجع بعد، وأخرى تنام في المستودع منذ شهرين دون أن يعلم أحد. الزبون يُرجع رافعة متضررة ويقول إنها كانت هكذا، ساعات العدّاد لا تُقرأ، والفاتورة تخرج بعد الرجوع بعشرة أيام. أي برنامج تحتاجه شركة كراء العتاد؟» بطاقة لكل آلة، جدول توفر يحجز الآلة الموعودة، محضر معاينة بالصور عند الخروج والرجوع، فاتورة يوم الرجوع، ونسبة استعمال لكل آلة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج كراء العتاد', 'تأجير المعدات والآليات', 'جدول التوفر والحجز', 'محضر المعاينة وعدّاد الساعات', 'نسبة استعمال الحظيرة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج كراء العتاد يمسك خمسة أشياء: بطاقة لكل آلة، برقمها التسلسلي، عدّاد ساعاتها، حالتها، ومستودعها؛ جدول توفر يمنع الوعد بالآلة نفسها مرتين؛ عقداً لكل عملية كراء، مع محضر معاينة بالصور عند الخروج وعند الرجوع؛ فاتورة تخرج يوم الرجوع، حسب المدة، الساعات، والفوارق المسجَّلة؛ وصيانة يطلقها العدّاد. والرقم الذي يقول إن كانت الحظيرة تربح هو نسبة الاستعمال، آلة بآلة. في مثال هذه الصفحة، حظيرة من 40 آلة مكراة 53 بالمئة من الوقت، مع 9 آلات تحت 25 بالمئة.",
      "هذه الصفحة موجّهة إلى الشركات التي تكري آليات الورشات، رافعات الأشخاص، الرافعات الشوكية، المولّدات الكهربائية، السقالات، أو عتاد التظاهرات، في الجزائر، وإلى مؤسسي الجالية الذين يكوّنون حظيرة هنا. التعريفات من مصادر عمومية: كراء العتاد، آلية الورشة، رافعة الأشخاص، نسبة استعمال حظيرة الكراء، الصيانة الوقائية، تتبّع المركبات، والبيع فوق المتوفر. والحظيرة من 40 آلة، عملية الكراء لـ14 يوماً، والمبالغ مثال مركَّب. والصفحة لا تتناول قواعد عقود الكراء، الكفالات، والتأمينات، ولا المراقبات التنظيمية للآلات، ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "عملية كراء، في ست مراحل", body: [
        "الشكل يتابع عملية كراء، من الطلب إلى الصيانة.",
      ], visual: 'location', after: [
        "**المهنة.** كراء العتاد يضع آلات، تجهيزات، وأدوات تحت تصرف مستعملين لمدة محدودة: من الحفّارات الصغيرة والمحمّلات إلى المولّدات الكهربائية وخلاطات الخرسانة. وآلية الورشة مركبة ثقيلة مصمَّمة لأشغال البناء؛ ورافعة الأشخاص تعطي وصولاً مؤقتاً إلى الأماكن العالية. **الطلب والحجز.** الطلب يصل بالهاتف، في الشباك، أو من فهرس على الإنترنت، انظر [الفهرس على الإنترنت](" + L.catalogue + "). والحجز يمنع الآلة عن غير صاحبها في هذه التواريخ: الوعد بها مرتين بيع فوق المتوفر، أي بيع خدمة بأكثر مما نملك. والآلية هي آلية [الحجز دون تكرار](" + L.reservation + ").",
        "**الخروج والرجوع.** هما المرحلتان اللتان يُربَح فيهما المال أو يضيع: صور، عدّاد، مستوى الوقود، ملحقات، وتوقيع الزبون، عند الخروج ثم عند الرجوع. والرجوع هو المرحلة المبرزة. كل شيء يُنجَز على الهاتف، في المستودع أو في الورشة، حتى دون شبكة، انظر [التطبيق دون اتصال](" + L.horsligne + "). **في الورشة.** تمديد، عطب، أو تبديل آلة: كل حدث يُسجَّل في العقد، بتاريخه. **الفاتورة والصيانة.** الفاتورة تخرج يوم الرجوع؛ والآلة تمر بالمراقبة قبل أن تعود متوفرة في الجدول.",
      ] },
      { heading: "الخروج والرجوع: ما يضعه محضر المعاينة على الفاتورة", body: [
        "الشكل يقارن رافعة أشخاص عند الخروج وعند الرجوع في عملية كراء من 14 يوماً، وما تصير إليه الفوارق على الفاتورة.",
      ], visual: 'retour', after: [
        "**في المثال.** رافعة أشخاص، 14 يوماً. عند الخروج: العدّاد عند " + I('1 204') + " ساعات، الخزان ممتلئ، اثنتا عشرة صورة، وثلاثة ملحقات. عند الرجوع: " + I('1 338') + " ساعة، الخزان إلى النصف، حاجز حماية ملتوٍ، وملحقان من ثلاثة. الكراء الأساسي " + I('252 000') + " دينار. العدّاد دار 134 ساعة لحصة من 112: 22 ساعة زائدة، " + I('33 000') + " دينار. وقود ناقص، " + I('9 000') + ". حاجز الحماية، " + I('26 000') + ". ملحق لم يُرجَع، " + I('8 000') + ". المجموع: " + I('328 000') + " دينار، أي " + I('76 000') + " أكثر من الكراء وحده.",
        "**ما يقوله ذلك.** دون معاينة عند الخروج، كل فارق يصير نقاشاً؛ ومعها، يصير سطراً. الصور مؤرَّخة، مأخوذة أمام الزبون، وموقَّعة مرتين. والمبدأ هو نفسه في [كراء السيارات](" + L.voiture + "). **الفاتورة يوم الرجوع.** المدة، الساعات، والفوارق موجودة من قبل في العقد: لا شيء يُعاد إدخاله. وعشرة أيام تُربَح في الفاتورة هي عشرة أيام تُربَح في التحصيل، انظر [ديون الزبائن](" + L.credit + "). **ما يُقاس.** الأيام بين الرجوع والفاتورة؛ الفوارق المسجَّلة والفوارق المفوتَرة؛ الساعات فوق الحصة؛ النزاعات المفتوحة؛ وغير المسدَّد لكل زبون.",
      ] },
      { heading: "أين تنام الآلات", body: [
        "الشكل يضع آلات الحظيرة الأربعين حسب حصة الشهر التي كانت فيها كل واحدة مكراة.",
      ], visual: 'parc', after: [
        "**نسبة الاستعمال.** هي المقياس الرئيسي الذي يحكم به المؤجِّر على آلاته. النسبة المادية تعدّ الأيام المكراة على الأيام التي كان يمكن فيها كراء الآلة؛ وتُحسَب بالساعات لبعض العتاد. والنسبة المالية تُقاس بمدخول الكراء المحقَّق في فترة. **في المثال.** 40 آلة، 30 يوماً، أي " + I('1 200') + " يوم-آلة: 637 مكراة، 72 في ورشة الصيانة، و491 متوفرة وغير مكراة. الحظيرة مكراة 53 بالمئة من الوقت.",
        "**ما يخفيه المعدّل.** تسع آلات تحت 25 بالمئة: للتسع معاً، 33 يوماً مكرى في الشهر. وست فوق 85 بالمئة، وهي التي نرفضها للزبائن: 14 طلباً مرفوضاً. **ثلاثة قرارات.** الآلة التي تنام تُعرَض، تُنقَل إلى مستودع آخر، أو تُباع. والصنف المشبع يبرّر آلة إضافية، والطلبات المرفوضة تقول أيها. وبين الاثنين، ننظر إلى التسعيرة. **العتاد في الخارج.** معرفة عند أي زبون وفي أي ورشة توجد كل آلة من المتابعة نفسها التي تخص [الأغلفة المسترجَعة](" + L.consignes + "). **الأرقام** هي أرقام مثال مركَّب.",
      ] },
      { heading: "ما يوجد في البرنامج", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية، جدول التوفر، هي التي تمنع الوعد مرتين.",
      ], visual: 'couches', after: [
        "**الحظيرة وجدول التوفر.** بطاقة لكل آلة: الرقم التسلسلي، العدّاد، الحالة، المستودع، الوثائق، وتاريخ عمليات الكراء والأعطاب. وجدول التوفر يُظهر التوفر لكل آلة ولكل صنف؛ هو الطبقة المبرزة. والطلب الذي لا يمكن تلبيته يُسجَّل: هو كراء ضائع، ومعلومة. **العقد.** الزبون، الورشة، المدة، التسعيرة، حصة الساعات، ومحضر المعاينة عند الخروج والرجوع.",
        "**الصيانة.** الصيانة الوقائية روتين فحص دوري، لرصد المشاكل الصغيرة قبل أن تكبر. هنا، يطلقها عدّاد الساعات، والآلة التي في ورشة الصيانة تخرج من جدول التوفر، انظر [التدخلات الميدانية](" + L.terrain + "). **الموقع.** تتبّع المركبات هو مراقبة موقع مركبة أو أسطول، تحركاته، وحالته؛ وللآليات المجهَّزة بعلبة تتبّع، يعطي أيضاً ساعات التشغيل، انظر [تسيير الأسطول](" + L.flotte + "). **الأرقام.** نسبة الاستعمال، المدخول لكل آلة، غير المسدَّد، والطلبات المرفوضة، لكل مستودع.",
      ] },
      { heading: "أحد عشر أسبوعاً، بدءاً بجرد الحظيرة", body: [
        "أحد عشر أسبوعاً في المثال، قبل الأرقام لكل آلة.",
      ], visual: 'calendrier', after: [
        "**الجرد.** بطاقة لكل آلة، برقمها التسلسلي، عدّادها اليوم، حالتها، مستودعها، وصورها. وهنا غالباً نجد آلة منسية عند زبون. **جدول التوفر.** أولاً الحجوزات الجارية، ثم كل الطلبات، بما فيها التي نرفضها. **العقد ومحضر المعاينة.** على الهاتف، بالصور والتوقيع؛ ونموذج العقد نموذجكم، ولا نكتب بنوده.",
        "**التسعيرات والفاتورة.** باليوم، بالأسبوع، بالشهر، مع حصة الساعات والفوارق عند الرجوع. **الصيانة.** المراجعات حسب العدّاد، والتوقفات في جدول التوفر. **الأرقام لكل آلة.** تأتي في الأخير، لأنها تحتاج ثلاثة أشهر من عمليات كراء مسجَّلة جيداً. **ما لا يفعله البرنامج.** لا يقرّر شراء آلة أو بيعها، ولا يعوّض مراقبة ميكانيكي ولا عقدكم. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "خمس حالات، وما يفعله البرنامج بها", body: [
        "الشكل يعرض خمس حالات من يوميات المؤجِّر، اليوم ومع البرنامج.",
      ], visual: 'situations', after: [
        "**الآلة الموعودة مرتين، والآلة المتضررة.** الحجز يمنع، وجدول التوفر يقترح آلة مماثلة؛ وصور الخروج تحسم نقاش الرجوع. **الورشة التي تحتفظ بالآلة.** التمديد يُسجَّل في الجدول، والفاتورة تخرج لكل فترة، دون انتظار الرجوع. وكثير من الزبائن مؤسسات بناء، تتابع تكاليفها لكل ورشة، انظر [برنامج مؤسسة البناء](" + L.btp + ").",
        "**الآلة التي تنام، والصيانة المنسية.** نسبة الاستعمال تُظهرها كل شهر، لا في جرد نهاية السنة؛ والعدّاد يطلق الصيانة قبل العطب عند الزبون. **جاهز أو على المقاس.** توجد برامج جاهزة لكراء العتاد، وتناسب حين تدخل تسعيراتكم وآلاتكم في خاناتها. والعمل على المقاس يُبرَّر حين تكرون بسائق أو دونه، باليوم وبالساعات، من عدة مستودعات، مع محضر معاينة على الهاتف دون شبكة، العربية والفرنسية، وربط بمحاسبتكم.",
      ], list: [
        "**ما تتلقونه**: بطاقة كل آلة؛ جدول التوفر؛ العقد ومحضر المعاينة على الهاتف؛ الفاتورة يوم الرجوع؛ الصيانة حسب الساعات؛ متابعة الآلات في الخارج، لكل زبون ولكل ورشة؛ نسبة الاستعمال لكل آلة، لكل صنف، ولكل مستودع؛ والطلبات المرفوضة.",
        "**ما تتفاداه المؤسسة**: الآلة الموعودة مرتين، الرافعة التي تُرجَع متضررة دون دليل، الساعات غير المقروءة، التمديد الذي لا يُفوتَر أبداً، الفاتورة بعد عشرة أيام، الآلة المنسية عند زبون، الصيانة المنسية، والآلة التي تنام شهرين.",
        "**ما يُقاس**: نسبة الاستعمال لكل آلة؛ الأيام في ورشة الصيانة؛ الطلبات المرفوضة لكل صنف؛ الأيام بين الرجوع والفاتورة؛ الفوارق المسجَّلة والمفوتَرة؛ الساعات فوق الحصة؛ المدخول لكل آلة؛ وغير المسدَّد لكل زبون.",
        "**ما تفعله Symloop**: جرد الحظيرة، جدول التوفر، العقد ومحضر المعاينة على الهاتف، التسعيرات والفوترة، الصيانة حسب الساعات، الربط بأدواتكم، والأرقام لكل آلة، بالعربية والفرنسية.",
      ], faq: [
        { q: "أي برنامج لشركة كراء العتاد؟", a: "برنامج يمسك بطاقة لكل آلة، جدول توفر، عقداً مع محضر معاينة عند الخروج والرجوع، الفوترة حسب المدة والساعات، الصيانة حسب العدّاد، ونسبة الاستعمال لكل آلة." },
        { q: "كيف نتفادى كراء الآلة نفسها مرتين؟", a: "بحجز يمنع الآلة عن غير صاحبها في تواريخها فور الوعد بها. وإذا لم ترجع، يُظهر الجدول ذلك ويقترح آلة مماثلة." },
        { q: "كيف نثبت أن آلة أُرجعت متضررة؟", a: "بمحضر معاينة عند الخروج وعند الرجوع، على الهاتف: الصور نفسها، مؤرَّخة، العدّاد، المستوى، الملحقات، وتوقيع الزبون في المرتين." },
        { q: "كيف تُفوتَر ساعات استعمال آلية؟", a: "بقراءة العدّاد عند الخروج وعند الرجوع. العقد يحمل حصة ساعات؛ والساعات فوقها سطر في الفاتورة. في المثال، 134 ساعة لحصة من 112." },
        { q: "كيف تُحسَب نسبة استعمال الحظيرة؟", a: "الأيام المكراة مقسومة على الأيام التي كان يمكن فيها كراء الآلة، آلة بآلة. في المثال، 637 يوماً من " + I('1 200') + "، أي 53 بالمئة، مع آلات تحت 25 بالمئة وأخرى فوق 85 بالمئة." },
        { q: "ماذا نفعل بآلة لا تُكرى؟", a: "نراها أولاً: هذا دور النسبة لكل آلة. ثم تُعرَض على الزبائن، تُنقَل إلى مستودع آخر، تتغيّر تسعيرتها، أو تُباع. والقرار يبقى لكم." },
        { q: "هل يمكن إنجاز محضر المعاينة في ورشة دون شبكة؟", a: "نعم. التطبيق يسجّل الصور والقراءات على الهاتف ويرسلها فور عودة الشبكة." },
        { q: "هل يسيّر البرنامج الكراء بسائق؟", a: "نعم، إذا بُني لذلك: السائق مورد في الجدول مثل الآلة، بساعاته." },
        { q: "ألا يكفي جدول على الحاسوب؟", a: "لعشر آلات، أحياناً. فوق ذلك، لا يمنع حجزاً، لا يحفظ الصور، لا يقرأ عدّاداً، ولا يحسب نسبة لكل آلة دون يوم عمل كامل." },
        { q: "بماذا يُبدأ؟", a: "بالجرد: بطاقة لكل آلة، برقمها التسلسلي، عدّادها، ومستودعها. ثم بجدول الحجوزات الجارية." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "دون معاينة عند الخروج، كل فارق يصير نقاشاً؛ ومعها، يصير سطراً." },
      { after: 2, text: "المعدّل لا يقول شيئاً: الحظيرة تربح أو تخسر آلة بآلة." },
    ],
    cta: { eyebrow: "قولوا لنا كم آلة تكرون، من كم مستودع، وكيف يتم الرجوع اليوم: نبدأ بجرد الحظيرة", title: "آلة موعودة مرتين، عتاد يُرجَع متضرراً، ساعات غير مقروءة، تمديد لا يُفوتَر، آليات تنام، فاتورة متأخرة، أو حظيرة تكوّنونها في الجزائر من فرنسا", body: "Symloop تبني برنامج الكراء الذي يناسب حظيرتكم: بطاقة لكل آلة، جدول توفر، عقد ومحضر معاينة على الهاتف، فاتورة يوم الرجوع، صيانة حسب الساعات، ونسبة استعمال. صِفوا لنا آلاتكم، مستودعاتكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.voiture, kind: '2027', name: 'برنامج كراء السيارات: الحجز، الضمان، ومحضر المعاينة' },
      { href: L.flotte, kind: '2027', name: 'تسيير الأسطول: القراءات، الاستهلاك، والصيانة حسب الكيلومترات' },
      { href: L.terrain, kind: '2027', name: 'التدخلات الميدانية: التجهيزات، أوامر العمل، والصيانة الوقائية' },
      { href: L.reservation, kind: '2027', name: 'الحجز دون تكرار: الفترات، القفل، والتذكيرات' },
    ] },
  },
};

const KEYWORDS = "logiciel location de matériel, logiciel location de matériel algérie 2027, logiciel gestion location matériel, logiciel location matériel btp, logiciel location matériel tp, logiciel location matériel événementiel, application location matériel, logiciel loueur, location engins algerie, location grue algerie, location chariot elevateur algerie, location groupe electrogene algerie, taux d'utilisation parc de location, état des lieux matériel, equipment rental software, rental utilization, برنامج تأجير المعدات, تطبيق تأجير المعدات, برنامج كراء العتاد, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
