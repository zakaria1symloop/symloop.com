import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-lavage-auto-algerie-2027-application-station-de-lavage-file-d-attente-ticket-par-voiture-laveurs-abonnements-lavage-a-domicile.mjs';

const SLUG = 'logiciel-lavage-auto-algerie-2027-application-station-de-lavage-file-d-attente-ticket-par-voiture-laveurs-abonnements-lavage-a-domicile';
const FIGURES = ['affluence', 'passage', 'tickets', 'couches', 'modeles', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  sessions: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  fidelite: '/blog/programme-de-fidelite-algerie-2027-cafe-fast-food-chaine-application-points-caisse-relance/',
  tournees: '/blog/le-camion-repasse-deux-fois-dans-le-meme-quartier-tournees-de-livraison-application-algerie-2027-zones-charge-ordre-des-arrets-replanification/',
  adresse: '/blog/livrer-sans-adresse-algerie-2027-point-gps-repere-zones-de-livraison-geocodage-confirmation-whatsapp-ce-qu-on-construit/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  planity: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/',
  france: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
};

const CONTENT = {
  fr: {
    kind: 'Lavage auto · Algérie · 2027', title: "Logiciel lavage auto en Algérie (2027) : application pour station de lavage, file d'attente, un ticket par voiture, laveurs, abonnements et lavage à domicile, quand le samedi déborde et que la caisse ne tombe pas juste",
    dek: "« J'ai une station de lavage, trois baies et huit laveurs. Le samedi il y a une heure de queue et des clients repartent ; le mardi, les laveurs attendent. Je les paie à la voiture et je ne sais jamais combien de voitures ont vraiment été lavées : le cahier dit un chiffre, la caisse un autre. Des clients demandent un abonnement, des sociétés veulent laver leur flotte à crédit, et on me parle de lavage à domicile par application. Quel logiciel, quelle application me faut-il ? » Tout part d'un geste : un ticket par voiture, ouvert à l'entrée par la plaque. La caisse, le décompte des laveurs, les abonnements et la réservation n'en sont que des lectures.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de lavage auto', 'Station de lavage', 'File d’attente et réservation', 'Abonnements', 'Lavage à domicile', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de lavage auto repose sur **un ticket par voiture**, ouvert à l'entrée par la plaque d'immatriculation : une formule, un laveur, une baie, un paiement. De ce ticket sortent quatre choses. **Une caisse qui tombe juste**, parce qu'une voiture lavée est une voiture encaissée. **Le décompte des laveurs**, sans discussion. **Les abonnements et les comptes de flotte**, reconnus à la plaque. **La file et la réservation** : la capacité d'une station se calcule, baies × 60 ÷ minutes par voiture, et le samedi la dépasse ; un créneau réservé et une formule de semaine déplacent des voitures vers les jours creux. Le lavage à domicile par application reprend le même ticket, avec le trajet à la place de la baie.",
      "Ce guide s'adresse au gérant d'une station de lavage à la main, de deux à dix baies, à celui qui en ouvre une seconde, et au fondateur installé en France qui veut lancer en Algérie un service de lavage à domicile vu ailleurs. Les notions citées viennent de sources publiques : les catégories de lavage, l'étude des files d'attente, le modèle de l'abonnement. Les arrivées, les durées, les prix et les décomptes des figures sont un exemple construit, pas des prix de marché. Ce guide ne traite ni de la rémunération des salariés ni des règles sur l'eau et les rejets : elles se voient avec votre comptable et les services concernés.",
    ],
    sections: [
      { heading: "Le samedi déborde, le mardi est vide", body: [
        "La figure compare les arrivées, heure par heure, à la capacité de la station, un samedi puis un mardi.",
      ], visual: 'affluence', after: [
        "**La capacité se calcule.** Une baie qui met vingt-cinq minutes par voiture en lave 2,4 par heure ; trois baies, 7,2. Sur huit heures, 57,6 voitures : aucune organisation ne fera mieux sans raccourcir le lavage ou ajouter une baie. **Le samedi.** Dans l'exemple, 69 voitures arrivent, dont 35 entre 11 h et 14 h pour 21,6 places : la file s'allonge de plus de quatre voitures par heure. L'étude des files d'attente a deux mots pour ce qui suit : le client qui renonce à entrer dans une file trop longue, et celui qui la quitte après avoir trop attendu. Vous ne voyez ni l'un ni l'autre dans votre caisse.",
        "**Le mardi.** Les mêmes baies et les mêmes laveurs reçoivent 22 voitures : 62 % des places restent vides. **Ce que fait le logiciel.** Il montre d'abord ces deux courbes, avec vos chiffres. Ensuite il déplace : des créneaux réservés pour le samedi, la file visible depuis le téléphone avec le temps d'attente annoncé, et une formule de semaine, carnet ou abonnement, pour les clients qui peuvent venir un autre jour. La réservation avec acompte suit la logique du [guide sur la réservation en salon](" + L.planity + ").",
      ] },
      { heading: "Le passage d'une voiture, en six temps", body: [
        "Le premier temps est accentué : la plaque saisie à l'entrée ouvre le ticket.",
      ], visual: 'passage', after: [
        "**Accueillir.** La plaque d'immatriculation, fixée au véhicule pour son identification, sert de clé : saisie ou photographiée, elle retrouve la fiche du client, son abonnement, ses lavages précédents. **Choisir.** La formule et les options sont à l'écran, avec leur prix ; le client sait ce qu'il paiera avant que le lavage commence. **Photographier.** Quatre photos de l'état du véhicule à l'entrée, rattachées au ticket : la discussion sur une rayure se règle en les montrant.",
        "**Laver.** Le ticket est attribué à une baie et à un laveur ; l'heure de début et l'heure de fin donnent la durée réelle par formule. **Encaisser.** En espèces, sur abonnement ou sur le compte d'une société ; le ticket ne se ferme qu'avec un paiement. **Prévenir.** Un message annonce que la voiture est prête : le client attend au café d'en face, pas devant la baie.",
      ] },
      { heading: "Trois chiffres pour la même journée, puis un seul", body: [
        "La figure compte la même journée de trois façons, puis avec un ticket par voiture.",
      ], visual: 'tickets', after: [
        "**Sans ticket.** Le chef note 39 voitures dans son cahier. La caisse contient l'équivalent de 36 lavages. Les laveurs, payés à la voiture, en déclarent 44. Personne ne ment forcément : une voiture offerte à un ami, un abonné qu'on n'a pas noté, un lavage payé plus tard, une addition faite de mémoire. Mais le gérant n'a aucun moyen de savoir lequel des trois chiffres est le bon. **Avec le ticket.** Quarante-deux tickets ont été ouverts : 38 réglés au comptant, 3 sur abonnement, 1 sur le compte d'une société. Les mêmes 42 tickets se répartissent entre les laveurs : 15, 14 et 13.",
        "**Ce que cela change.** Dans l'exemple, six voitures lavées n'étaient pas encaissées : à 800 DA le lavage moyen, 4 800 DA par jour. Et deux voitures étaient comptées aux laveurs sans avoir existé. Le décompte de chacun sort du logiciel en fin de journée, visible par lui avant de partir ; les pourboires se notent à part. La clôture de la caisse elle-même suit la méthode du [guide sur les sessions de caisse](" + L.sessions + ").",
      ] },
      { heading: "Un logiciel de lavage auto, en cinq couches", body: [
        "La couche accentuée est celle des tickets : les quatre autres la lisent.",
      ], visual: 'couches', after: [
        "**Tickets**, puis **file et réservations**. **Clients et abonnements.** L'abonnement est le modèle où le client paie un prix récurrent, à intervalles réguliers, pour accéder à un service : ici, un carnet de dix lavages ou un forfait mensuel, rattaché à la plaque. Le logiciel sait ce qu'il reste, et signale la seconde voiture qui se présente sur le même forfait. Les **comptes de flotte**, pour une société de livraison, des taxis ou des véhicules de service, fonctionnent comme un compte client : un ticket par passage, un relevé en fin de mois, un plafond, selon le [guide sur le crédit client](" + L.credit + "). La fidélité, le dixième lavage offert, reprend le mécanisme du [guide sur les programmes de fidélité](" + L.fidelite + ").",
        "**Équipe** : la présence, les voitures par laveur, le décompte. **Pilotage** : les voitures par heure et par baie, la recette par formule, la durée réelle de chaque formule, les produits consommés. Pour un gérant qui a deux stations, ou qui suit la sienne depuis l'étranger, les mêmes écrans se lisent à distance, comme dans [le guide pour gérer son commerce depuis la France](" + L.france + ").",
      ] },
      { heading: "En station ou à domicile : six différences", body: [
        "La figure compare le lavage en station et le lavage à domicile commandé par application.",
      ], visual: 'modeles', after: [
        "**Le lavage à domicile.** Parmi les catégories de lavage, à côté du lavage à la main, du libre-service et des portiques, figurent le lavage mobile et le lavage sans eau : le laveur vient au véhicule, chez le client ou sur le parking de son entreprise. C'est un service que des fondateurs ont vu fonctionner ailleurs et veulent lancer ici. **Ce qui limite.** Ce n'est plus la baie, c'est le trajet. Dans l'exemple, un laveur qui met 45 minutes par voiture et 25 minutes entre deux clients fait 480 ÷ 70, soit six à sept lavages par jour ; si l'on regroupe les commandes par quartier et que le trajet tombe à 15 minutes, il en fait huit. Un lavage de plus par laveur et par jour, sans embaucher.",
        "**Ce que l'application doit faire.** Prendre une adresse qui n'en est pas toujours une, avec un point sur la carte et un repère, comme dans [le guide pour livrer sans adresse](" + L.adresse + ") ; proposer des créneaux par zone ; ordonner les passages, selon la méthode du [guide sur les tournées](" + L.tournees + ") ; garder les photos avant et après ; encaisser à la fin. **Commencer par les flottes.** Dix véhicules au même endroit, un seul trajet : c'est le premier client d'un service à domicile, avant les particuliers.",
      ] },
      { heading: "Une station équipée en 2027, en semaines", body: [
        "Quatre semaines dans l'exemple, la première pour le ticket.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, formules et tickets** : les formules et les options avec leurs prix, le ticket ouvert à l'entrée sur une tablette, les photos. **Semaine 2, caisse et laveurs** : l'encaissement par ticket, le décompte par laveur, la clôture du jour, en gardant le cahier une semaine pour comparer.",
        "**Semaine 3, clients** : fiches par plaque, carnets, abonnements, comptes de flotte, message de fin. **Semaine 4, réservation** : créneaux, file visible, application du client, formule de semaine. Le lavage à domicile, s'il est prévu, vient après : il réutilise tout ce qui précède.",
      ], list: [
        "**Ce que le gérant voit** : les voitures par heure face à la capacité, la recette du jour par formule, le décompte de chaque laveur, les abonnements en cours, les comptes de flotte et leur solde.",
        "**Ce que la station ne fait plus** : compter les voitures de trois façons, discuter d'une rayure sans photo, découvrir le samedi soir que des clients sont repartis, refaire l'addition des laveurs.",
        "**Ce qui est mesuré** : voitures par heure et par baie, durée réelle par formule, tickets ouverts sans paiement, part des abonnés, lavages par jour et par laveur mobile.",
        "**Ce que fait Symloop** : le logiciel de la station sur tablette, l'application du client pour réserver et suivre, l'application du laveur mobile avec ses tournées, puis l'entretien.",
      ], faq: [
        { q: "Quel logiciel pour une station de lavage auto en Algérie ?", a: "Un logiciel qui ouvre un ticket par voiture à l'entrée, par la plaque, et qui en tire la caisse, le décompte des laveurs, les abonnements et la file. Une caisse généraliste enregistre des ventes ; ici, il faut suivre une voiture de son arrivée à son départ." },
        { q: "Comment savoir combien de voitures ont vraiment été lavées ?", a: "En n'acceptant qu'un seul compte : le ticket. Ouvert à l'entrée, attribué à un laveur, fermé au paiement. À la fin de la journée, le nombre de tickets, la caisse et le décompte des laveurs donnent le même chiffre, ou l'écart se voit ticket par ticket." },
        { q: "Comment payer les laveurs à la voiture sans dispute ?", a: "Le décompte de chaque laveur sort des tickets qui lui ont été attribués, formule par formule, et il le voit avant de partir. Les pourboires sont notés à part. Les règles de rémunération elles-mêmes se voient avec votre comptable ; le logiciel fournit le compte." },
        { q: "Comment réduire la file d'attente le samedi ?", a: "D'abord en la mesurant : baies × 60 ÷ minutes par voiture donne ce que la station peut laver par heure. Ensuite en déplaçant : créneaux réservés, file visible depuis le téléphone avec le temps d'attente, formule de semaine pour ceux qui peuvent venir un autre jour. On ne lave pas plus vite ; on fait arriver moins de monde à la même heure." },
        { q: "Peut-on proposer des abonnements de lavage ?", a: "Oui : un carnet de lavages ou un forfait mensuel, rattaché à la plaque. Le logiciel sait ce qu'il reste et à quelle voiture le forfait s'applique. C'est aussi ce qui remplit les jours creux, si la formule vaut en semaine." },
        { q: "Comment gérer les véhicules d'une société ?", a: "Par un compte de flotte : chaque passage est un ticket, la société reçoit un relevé en fin de mois, avec les plaques, les dates et les formules, et un plafond limite l'encours." },
        { q: "Que faire quand un client dit que sa voiture a été rayée ?", a: "Montrer les quatre photos prises à l'entrée, rattachées à son ticket. C'est une habitude de trente secondes par voiture, et la plupart des discussions s'arrêtent là." },
        { q: "Comment lancer un lavage à domicile par application ?", a: "Avec une application pour le client, adresse sur la carte, créneau, formule, paiement, et une pour le laveur, avec sa tournée et les photos avant et après. Le calcul qui décide : les lavages par jour et par laveur, donc le temps de trajet. On commence par des flottes et par quelques quartiers." },
        { q: "Le logiciel fonctionne-t-il sur tablette, et sans internet ?", a: "Il est fait pour une tablette à l'entrée et un téléphone par laveur. Les tickets se créent même quand la connexion tombe et se synchronisent ensuite ; les messages aux clients partent au retour du réseau." },
        { q: "Combien coûte un logiciel de lavage auto ?", a: "Cela dépend du nombre de stations et de baies, de la réservation en ligne, de l'application du client et du lavage à domicile. Le socle, tickets, caisse et décompte, est le plus rapide à mettre en place, et celui dont l'effet se voit le premier. Nous chiffrons après une journée de samedi observée sur place." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "On ne lave pas plus vite : on fait arriver moins de monde à la même heure." },
      { after: 2, text: "Tant qu'on compte les voitures à trois endroits, on obtient trois chiffres ; le ticket n'en laisse qu'un." },
    ],
    cta: { eyebrow: "Comptez un samedi les arrivées heure par heure, et dites-nous combien vous avez de baies et de laveurs : nous vous montrons votre capacité, ce qui déborde, et le ticket qui met la caisse d'accord", title: "Station de lavage de deux à dix baies, seconde station à ouvrir, ou fondateur en France qui veut lancer le lavage à domicile par application : nous construisons le ticket par voiture, la caisse, le décompte des laveurs, la réservation et l'application", body: "Un ticket ouvert à la plaque, une caisse et un décompte qui donnent le même chiffre, des abonnements, une file que le client voit depuis son téléphone. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.sessions, kind: '2027', name: 'La caisse ne tombe jamais juste : sessions de caisse, comptage, écart' },
      { href: L.fidelite, kind: '2027', name: 'Programme de fidélité : application, points, caisse et relance' },
      { href: L.tournees, kind: '2027', name: 'Tournées : zones, ordre des arrêts, replanification' },
      { href: L.planity, kind: '2027', name: 'Réservation en ligne avec acompte : le modèle des salons' },
    ] },
  },
  en: {
    kind: 'Car wash · Algeria · 2027', title: "Car wash software in Algeria (2027): an app for the washing station, the queue, one ticket per car, washers, subscriptions and washing at home, for when Saturday overflows and the till does not balance",
    dek: "“I run a car wash, three bays and eight washers. On Saturday there is an hour's queue and customers drive away; on Tuesday the washers wait. I pay them per car and I never know how many cars were really washed: the notebook says one figure, the till another. Customers ask for a subscription, companies want to wash their fleet on credit, and people talk to me about washing at home through an app. Which software, which app do I need?” It all starts with one action: a ticket per car, opened at entry from the plate. The till, the washers' count, the subscriptions and the booking are only readings of it.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Car wash software', 'Washing station', 'Queue and booking', 'Subscriptions', 'Washing at home', 'Algeria 2027'],
    intro: [
      "**Short answer.** Car wash software rests on **one ticket per car**, opened at entry from the registration plate: one package, one washer, one bay, one payment. Four things come out of that ticket. **A till that balances**, because a car washed is a car cashed. **The washers' count**, with no argument. **Subscriptions and fleet accounts**, recognised by the plate. **The queue and the booking**: a station's capacity can be calculated, bays × 60 ÷ minutes per car, and Saturday exceeds it; a booked slot and a weekday offer move cars to the quiet days. Washing at home through an app reuses the same ticket, with the journey in place of the bay.",
      "This guide is for the manager of a hand car wash with two to ten bays, for the one opening a second station, and for the founder based in France who wants to launch in Algeria an at-home washing service seen elsewhere. The notions quoted come from public sources: the categories of car wash, queueing theory, the subscription model. The arrivals, durations, prices and counts in the figures are a constructed example, not market prices. This guide covers neither staff pay nor the rules on water and waste water: those are matters for your accountant and the relevant authorities.",
    ],
    sections: [
      { heading: "Saturday overflows, Tuesday is empty", body: [
        "The figure compares arrivals, hour by hour, with the station's capacity, on a Saturday then on a Tuesday.",
      ], visual: 'affluence', after: [
        "**Capacity can be calculated.** A bay that takes twenty-five minutes per car washes 2.4 an hour; three bays, 7.2. Over eight hours, 57.6 cars: no organisation will do better without shortening the wash or adding a bay. **Saturday.** In the example, 69 cars arrive, 35 of them between 11 a.m. and 2 p.m. for 21.6 places: the queue grows by more than four cars an hour. Queueing theory has two words for what follows: the customer who decides not to join a queue that is too long, and the one who leaves it after waiting too long. You see neither of them in your till.",
        "**Tuesday.** The same bays and the same washers receive 22 cars: 62 % of the places stay empty. **What the software does.** First it shows these two curves, with your figures. Then it moves cars: booked slots for Saturday, the queue visible from the phone with the waiting time announced, and a weekday offer, booklet or subscription, for customers who can come another day. Booking with a deposit follows the logic of [the guide to salon booking](" + L.planity + ").",
      ] },
      { heading: "One car through the station, in six steps", body: [
        "The first step is accented: the plate typed in at entry opens the ticket.",
      ], visual: 'passage', after: [
        "**Welcome.** The registration plate, attached to the vehicle for its identification, serves as the key: typed in or photographed, it brings up the customer's record, their subscription, their previous washes. **Choose.** The package and the options are on screen, with their prices; the customer knows what they will pay before the wash starts. **Photograph.** Four photos of the vehicle's condition at entry, attached to the ticket: a discussion about a scratch is settled by showing them.",
        "**Wash.** The ticket is assigned to a bay and a washer; the start and end times give the real duration per package. **Take payment.** In cash, on a subscription or on a company's account; the ticket only closes with a payment. **Notify.** A message says the car is ready: the customer waits in the café across the road, not in front of the bay.",
      ] },
      { heading: "Three figures for the same day, then one", body: [
        "The figure counts the same day three ways, then with one ticket per car.",
      ], visual: 'tickets', after: [
        "**Without tickets.** The supervisor writes 39 cars in the notebook. The till holds the equivalent of 36 washes. The washers, paid per car, declare 44. Nobody is necessarily lying: a car washed for a friend, a subscriber nobody noted, a wash paid later, a sum done from memory. But the manager has no way of knowing which of the three figures is right. **With the ticket.** Forty-two tickets were opened: 38 settled in cash, 3 on subscription, 1 on a company's account. The same 42 tickets are shared between the washers: 15, 14 and 13.",
        "**What it changes.** In the example, six washed cars were not cashed: at 800 DZD for the average wash, 4,800 DZD a day. And two cars were counted for the washers without having existed. Each person's count comes out of the software at the end of the day, visible to them before they leave; tips are noted separately. Closing the till itself follows the method in [the guide to till sessions](" + L.sessions + ").",
      ] },
      { heading: "Car wash software, in five layers", body: [
        "The accented layer is the tickets: the other four read it.",
      ], visual: 'couches', after: [
        "**Tickets**, then **queue and bookings**. **Customers and plans.** A subscription is the model in which the customer pays a recurring price at regular intervals for access to a service: here, a booklet of ten washes or a monthly plan, attached to the plate. The software knows what is left, and flags the second car that turns up on the same plan. **Fleet accounts**, for a delivery company, taxis or service vehicles, work like a customer account: one ticket per visit, a statement at the end of the month, a limit, as in [the guide to customer credit](" + L.credit + "). Loyalty, the tenth wash free, reuses the mechanism in [the guide to loyalty programmes](" + L.fidelite + ").",
        "**Team**: attendance, cars per washer, the count. **Steering**: cars per hour and per bay, takings per package, the real duration of each package, products used. For a manager with two stations, or one who follows theirs from abroad, the same screens are read remotely, as in [the guide to running your shop from France](" + L.france + ").",
      ] },
      { heading: "At the station or at home: six differences", body: [
        "The figure compares washing at the station and washing at home ordered through an app.",
      ], visual: 'modeles', after: [
        "**Washing at home.** Among the categories of car wash, alongside the hand car wash, self-service and automatic bays, are the mobile car wash and the waterless car wash: the washer comes to the vehicle, at the customer's home or in their company's car park. It is a service founders have seen working elsewhere and want to launch here. **What limits you.** It is no longer the bay, it is the journey. In the example, a washer who takes 45 minutes per car and 25 minutes between two customers does 480 ÷ 70, that is six to seven washes a day; if orders are grouped by district and travel falls to 15 minutes, they do eight. One more wash per washer per day, without hiring.",
        "**What the app must do.** Take an address that is not always an address, with a point on the map and a landmark, as in [the guide to delivering without an address](" + L.adresse + "); offer slots by zone; order the visits, following the method in [the guide to delivery rounds](" + L.tournees + "); keep the before and after photos; take payment at the end. **Start with fleets.** Ten vehicles in the same place, a single journey: that is the first customer of an at-home service, before private individuals.",
      ] },
      { heading: "A station equipped in 2027, in weeks", body: [
        "Four weeks in the example, the first for the ticket.",
      ], visual: 'calendrier', after: [
        "**Week 1, packages and tickets**: the packages and options with their prices, the ticket opened at entry on a tablet, the photos. **Week 2, till and washers**: payment per ticket, count per washer, daily closing, keeping the notebook for a week to compare.",
        "**Week 3, customers**: records per plate, booklets, subscriptions, fleet accounts, closing message. **Week 4, booking**: slots, visible queue, the customer's app, weekday offer. Washing at home, if planned, comes afterwards: it reuses everything above.",
      ], list: [
        "**What the manager sees**: cars per hour against capacity, the day's takings per package, each washer's count, current subscriptions, fleet accounts and their balance.",
        "**What the station no longer does**: count cars three ways, argue about a scratch without a photo, find out on Saturday evening that customers drove away, redo the washers' sum.",
        "**What is measured**: cars per hour and per bay, real duration per package, tickets opened without payment, share of subscribers, washes per day and per mobile washer.",
        "**What Symloop does**: the station's software on a tablet, the customer's app to book and follow, the mobile washer's app with their rounds, then upkeep.",
      ], faq: [
        { q: "Which software for a car wash in Algeria?", a: "Software that opens a ticket per car at entry, from the plate, and derives the till, the washers' count, the subscriptions and the queue from it. A general-purpose till records sales; here, you have to follow a car from arrival to departure." },
        { q: "How do I know how many cars were really washed?", a: "By accepting only one count: the ticket. Opened at entry, assigned to a washer, closed at payment. At the end of the day, the number of tickets, the till and the washers' count give the same figure, or the difference shows ticket by ticket." },
        { q: "How do you pay washers per car without arguments?", a: "Each washer's count comes from the tickets assigned to them, package by package, and they see it before leaving. Tips are noted separately. The pay rules themselves are a matter for your accountant; the software provides the count." },
        { q: "How do you shorten the queue on Saturday?", a: "First by measuring it: bays × 60 ÷ minutes per car gives what the station can wash per hour. Then by moving cars: booked slots, the queue visible from the phone with the waiting time, a weekday offer for those who can come another day. You do not wash faster; you have fewer people arrive at the same hour." },
        { q: "Can we offer wash subscriptions?", a: "Yes: a booklet of washes or a monthly plan, attached to the plate. The software knows what is left and which car the plan applies to. It is also what fills the quiet days, if the offer is valid on weekdays." },
        { q: "How do you handle a company's vehicles?", a: "With a fleet account: every visit is a ticket, the company receives a statement at the end of the month, with plates, dates and packages, and a limit caps the outstanding amount." },
        { q: "What do you do when a customer says their car was scratched?", a: "Show the four photos taken at entry, attached to their ticket. It is a thirty-second habit per car, and most discussions stop there." },
        { q: "How do you launch at-home car washing through an app?", a: "With one app for the customer, address on the map, slot, package, payment, and one for the washer, with their round and the before and after photos. The calculation that decides: washes per day and per washer, hence travel time. You start with fleets and a few districts." },
        { q: "Does the software work on a tablet, and without internet?", a: "It is made for a tablet at the entrance and a phone per washer. Tickets are created even when the connection drops and synchronise afterwards; messages to customers go out when the network returns." },
        { q: "How much does car wash software cost?", a: "It depends on the number of stations and bays, online booking, the customer's app and at-home washing. The base, tickets, till and count, is the quickest to set up, and the one whose effect shows first. We quote after observing a Saturday on site." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "You do not wash faster: you have fewer people arrive at the same hour." },
      { after: 2, text: "As long as cars are counted in three places, you get three figures; the ticket leaves only one." },
    ],
    cta: { eyebrow: "Count arrivals hour by hour one Saturday, and tell us how many bays and washers you have: we show you your capacity, what overflows, and the ticket that gets the till to agree", title: "A car wash with two to ten bays, a second station to open, or a founder in France who wants to launch at-home washing through an app: we build the ticket per car, the till, the washers' count, the booking and the app", body: "A ticket opened from the plate, a till and a count that give the same figure, subscriptions, a queue the customer sees from their phone. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.sessions, kind: '2027', name: 'The till never balances: till sessions, counting, differences' },
      { href: L.fidelite, kind: '2027', name: 'Loyalty programme: app, points, till and reminders' },
      { href: L.tournees, kind: '2027', name: 'Delivery rounds: zones, order of stops, replanning' },
      { href: L.planity, kind: '2027', name: 'Online booking with a deposit: the salon model' },
    ] },
  },
  ar: {
    kind: 'غسل السيارات · الجزائر · 2027', title: "برنامج غسل السيارات في الجزائر (2027): تطبيق لمحطة الغسل، الطابور، تذكرة لكل سيارة، الغسّالون، الاشتراكات والغسل في البيت، حين يفيض السبت ولا يتوازن الصندوق",
    dek: "«عندي محطة غسل، ثلاثة أروقة وثمانية غسّالين. يوم السبت طابور من ساعة وزبائن يغادرون؛ ويوم الثلاثاء الغسّالون ينتظرون. أدفع لهم بالسيارة ولا أعرف أبداً كم سيارة غُسلت فعلاً: الكرّاس يقول رقماً والصندوق رقماً آخر. زبائن يطلبون اشتراكاً، وشركات تريد غسل أسطولها بالدَّين، ويحدّثونني عن الغسل في البيت عبر تطبيق. أي برنامج، أي تطبيق يلزمني؟» كل شيء ينطلق من حركة واحدة: تذكرة لكل سيارة، تُفتح عند الدخول باللوحة. والصندوق وحساب الغسّالين والاشتراكات والحجز ليست إلا قراءات لها.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج غسل السيارات', 'محطة الغسل', 'الطابور والحجز', 'الاشتراكات', 'الغسل في البيت', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج غسل السيارات يقوم على **تذكرة لكل سيارة**، تُفتح عند الدخول بلوحة الترقيم: صيغة، غسّال، رواق، ودفع. ومن هذه التذكرة تخرج أربعة أشياء. **صندوق يتوازن**، لأن السيارة المغسولة سيارة مقبوضة. **حساب الغسّالين**، دون نقاش. **الاشتراكات وحسابات الأساطيل**، تُعرَف باللوحة. **الطابور والحجز**: طاقة المحطة تُحسب، الأروقة × 60 ÷ الدقائق لكل سيارة، والسبت يتجاوزها؛ وموعد محجوز وعرض لأيام الأسبوع ينقلان سيارات إلى الأيام الهادئة. والغسل في البيت عبر تطبيق يستعمل التذكرة نفسها، والتنقل مكان الرواق.",
      "هذا الدليل موجَّه إلى مسيّر محطة غسل يدوي، من رواقين إلى عشرة، وإلى من يفتح محطة ثانية، وإلى المؤسس المقيم في فرنسا الذي يريد أن يطلق في الجزائر خدمة غسل في البيت رآها في مكان آخر. المفاهيم المذكورة آتية من مصادر علنية: أصناف غسل السيارات، دراسة الطوابير، ونموذج الاشتراك. الوافدون والمدد والأسعار والحسابات في الأشكال مثال مركَّب، وليست أسعار السوق. هذا الدليل لا يتناول أجور العمال ولا القواعد الخاصة بالماء والصرف: تُراجَع مع محاسبكم والمصالح المعنية.",
    ],
    sections: [
      { heading: "السبت يفيض، والثلاثاء فارغ", body: [
        "الشكل يقارن الوافدين، ساعة بساعة، بطاقة المحطة، يوم سبت ثم يوم ثلاثاء.",
      ], visual: 'affluence', after: [
        "**الطاقة تُحسب.** الرواق الذي يأخذ خمساً وعشرين دقيقة للسيارة يغسل 2,4 في الساعة؛ وثلاثة أروقة، 7,2. وفي ثماني ساعات، 57,6 سيارة: لا تنظيم يفعل أحسن دون تقصير الغسل أو إضافة رواق. **السبت.** في المثال، تأتي 69 سيارة، منها 35 بين الحادية عشرة والثانية مقابل 21,6 مكاناً: الطابور يطول بأكثر من أربع سيارات في الساعة. ولدراسة الطوابير كلمتان لما يتبع ذلك: الزبون الذي يعدل عن دخول طابور طويل، والذي يغادره بعد انتظار طويل. ولا ترون لا هذا ولا ذاك في صندوقكم.",
        "**الثلاثاء.** الأروقة نفسها والغسّالون أنفسهم يستقبلون 22 سيارة: 62 بالمئة من الأماكن تبقى فارغة. **ما يفعله البرنامج.** يبيّن أولاً هذين المنحنيين، بأرقامكم. ثم ينقل: مواعيد محجوزة ليوم السبت، طابور يُرى من الهاتف مع وقت الانتظار المعلَن، وعرض لأيام الأسبوع، دفتراً أو اشتراكاً، للزبائن الذين يمكنهم المجيء في يوم آخر. والحجز مع تسبيق يتبع منطق [دليل الحجز في الصالونات](" + L.planity + ").",
      ] },
      { heading: "مرور سيارة، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: اللوحة المدخَلة عند الدخول تفتح التذكرة.",
      ], visual: 'passage', after: [
        "**الاستقبال.** لوحة الترقيم، المثبَّتة على المركبة لتعريفها، هي المفتاح: تُدخَل أو تُصوَّر فتجد بطاقة الزبون واشتراكه وغسلاته السابقة. **الاختيار.** الصيغة والإضافات على الشاشة، بأسعارها؛ والزبون يعرف ما سيدفع قبل بدء الغسل. **التصوير.** أربع صور لحالة السيارة عند الدخول، مربوطة بالتذكرة: والنقاش حول خدش يُحسم بعرضها.",
        "**الغسل.** التذكرة تُسند إلى رواق وغسّال؛ وساعة البداية وساعة النهاية تعطيان المدة الحقيقية لكل صيغة. **القبض.** نقداً، باشتراك، أو على حساب شركة؛ والتذكرة لا تُغلق إلا بدفع. **الإشعار.** رسالة تعلن أن السيارة جاهزة: الزبون ينتظر في المقهى المقابل، لا أمام الرواق.",
      ] },
      { heading: "ثلاثة أرقام لليوم نفسه، ثم رقم واحد", body: [
        "الشكل يحسب اليوم نفسه بثلاث طرق، ثم بتذكرة لكل سيارة.",
      ], visual: 'tickets', after: [
        "**دون تذكرة.** المسؤول يسجّل 39 سيارة في كرّاسه. والصندوق فيه ما يعادل 36 غسلة. والغسّالون، الذين يُدفع لهم بالسيارة، يصرّحون بـ 44. ولا أحد يكذب بالضرورة: سيارة غُسلت لصديق، مشترك لم يُسجَّل، غسلة دُفعت لاحقاً، أو جمع من الذاكرة. لكن المسيّر لا وسيلة له ليعرف أي الأرقام الثلاثة هو الصحيح. **بالتذكرة.** فُتحت اثنتان وأربعون تذكرة: 38 مسدَّدة نقداً، 3 باشتراك، و1 على حساب شركة. والتذاكر الـ 42 نفسها موزَّعة على الغسّالين: 15 و14 و13.",
        "**ما يتغيّر.** في المثال، ست سيارات غُسلت ولم تُقبَض: بـ 800 دج لمتوسط الغسل، 4800 دج في اليوم. وسيارتان حُسبتا للغسّالين ولم توجدا. وحساب كل واحد يخرج من البرنامج في نهاية اليوم، يراه قبل أن يغادر؛ والإكراميات تُسجَّل على حدة. وإقفال الصندوق نفسه يتبع طريقة [دليل حصص الصندوق](" + L.sessions + ").",
      ] },
      { heading: "برنامج غسل السيارات، في خمس طبقات", body: [
        "الطبقة المبرزة هي التذاكر: والأربع الأخرى تقرؤها.",
      ], visual: 'couches', after: [
        "**التذاكر**، ثم **الطابور والحجز**. **الزبائن والاشتراكات.** الاشتراك هو النموذج الذي يدفع فيه الزبون سعراً متكرراً، على فترات منتظمة، للحصول على خدمة: هنا، دفتر من عشر غسلات أو اشتراك شهري، مربوط باللوحة. والبرنامج يعرف ما بقي، وينبّه إلى السيارة الثانية التي تتقدم بالاشتراك نفسه. و**حسابات الأساطيل**، لشركة توصيل أو سيارات أجرة أو مركبات خدمة، تعمل كحساب زبون: تذكرة لكل مرور، كشف في نهاية الشهر، وسقف، حسب [دليل دَين الزبون](" + L.credit + "). والوفاء، الغسلة العاشرة المجانية، يستعمل آلية [دليل برامج الوفاء](" + L.fidelite + ").",
        "**الفريق**: الحضور، السيارات لكل غسّال، والحساب. **القيادة**: السيارات في الساعة ولكل رواق، المداخيل لكل صيغة، المدة الحقيقية لكل صيغة، والمواد المستهلَكة. ولمسيّر عنده محطتان، أو يتابع محطته من الخارج، الشاشات نفسها تُقرأ عن بعد، كما في [دليل تسيير المحل من فرنسا](" + L.france + ").",
      ] },
      { heading: "في المحطة أم في البيت: ستة فروق", body: [
        "الشكل يقارن الغسل في المحطة والغسل في البيت المطلوب عبر تطبيق.",
      ], visual: 'modeles', after: [
        "**الغسل في البيت.** من أصناف غسل السيارات، إلى جانب الغسل اليدوي والخدمة الذاتية والأروقة الآلية، الغسل المتنقل والغسل دون ماء: الغسّال يأتي إلى السيارة، عند الزبون أو في موقف مؤسسته. وهي خدمة رآها مؤسسون تعمل في مكان آخر ويريدون إطلاقها هنا. **ما يحدّ.** لم يعد الرواق، بل التنقل. في المثال، غسّال يأخذ 45 دقيقة للسيارة و25 دقيقة بين زبونين ينجز " + I('480 ÷ 70') + "، أي ست إلى سبع غسلات في اليوم؛ وإذا جُمعت الطلبات حسب الحي ونزل التنقل إلى 15 دقيقة، أنجز ثماني. غسلة إضافية لكل غسّال في اليوم، دون توظيف.",
        "**ما يجب أن يفعله التطبيق.** أن يأخذ عنواناً ليس دائماً عنواناً، بنقطة على الخريطة ومعلَم، كما في [دليل التوصيل دون عنوان](" + L.adresse + ")؛ أن يقترح مواعيد حسب المنطقة؛ أن يرتّب المرورات، حسب طريقة [دليل الجولات](" + L.tournees + ")؛ أن يحفظ الصور قبل وبعد؛ وأن يقبض في النهاية. **البدء بالأساطيل.** عشر مركبات في المكان نفسه، وتنقل واحد: هو أول زبون لخدمة في البيت، قبل الأفراد.",
      ] },
      { heading: "محطة مجهَّزة سنة 2027، بالأسابيع", body: [
        "أربعة أسابيع في المثال، الأول للتذكرة.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الصيغ والتذاكر**: الصيغ والإضافات بأسعارها، التذكرة تُفتح عند الدخول على لوح رقمي، والصور. **الأسبوع 2، الصندوق والغسّالون**: القبض لكل تذكرة، حساب لكل غسّال، وإقفال اليوم، مع إبقاء الكرّاس أسبوعاً للمقارنة.",
        "**الأسبوع 3، الزبائن**: بطاقات لكل لوحة، دفاتر، اشتراكات، حسابات أساطيل، ورسالة النهاية. **الأسبوع 4، الحجز**: مواعيد، طابور يُرى، تطبيق الزبون، وعرض لأيام الأسبوع. والغسل في البيت، إن كان مبرمجاً، يأتي بعد ذلك: يستعمل كل ما سبق.",
      ], list: [
        "**ما يراه المسيّر**: السيارات في الساعة مقابل الطاقة، مداخيل اليوم لكل صيغة، حساب كل غسّال، الاشتراكات الجارية، وحسابات الأساطيل وأرصدتها.",
        "**ما لم تعد المحطة تفعله**: عدّ السيارات بثلاث طرق، النقاش حول خدش دون صورة، اكتشاف مساء السبت أن زبائن غادروا، وإعادة جمع حساب الغسّالين.",
        "**ما يُقاس**: السيارات في الساعة ولكل رواق، المدة الحقيقية لكل صيغة، التذاكر المفتوحة دون دفع، نسبة المشتركين، والغسلات في اليوم لكل غسّال متنقل.",
        "**ما تفعله Symloop**: برنامج المحطة على لوح رقمي، تطبيق الزبون للحجز والمتابعة، تطبيق الغسّال المتنقل بجولاته، ثم الصيانة.",
      ], faq: [
        { q: "أي برنامج لمحطة غسل السيارات في الجزائر؟", a: "برنامج يفتح تذكرة لكل سيارة عند الدخول، باللوحة، ويستخرج منها الصندوق وحساب الغسّالين والاشتراكات والطابور. الصندوق العام يسجّل مبيعات؛ وهنا يجب متابعة سيارة من وصولها إلى مغادرتها." },
        { q: "كيف نعرف كم سيارة غُسلت فعلاً؟", a: "بقبول حساب واحد فقط: التذكرة. تُفتح عند الدخول، تُسند إلى غسّال، وتُغلق عند الدفع. وفي نهاية اليوم، عدد التذاكر والصندوق وحساب الغسّالين تعطي الرقم نفسه، أو يُرى الفارق تذكرة بتذكرة." },
        { q: "كيف ندفع للغسّالين بالسيارة دون خصام؟", a: "حساب كل غسّال يخرج من التذاكر المسنَدة إليه، صيغة بصيغة، ويراه قبل أن يغادر. والإكراميات تُسجَّل على حدة. أما قواعد الأجور نفسها فتُراجَع مع محاسبكم؛ والبرنامج يقدّم العدّ." },
        { q: "كيف نقلّص الطابور يوم السبت؟", a: "أولاً بقياسه: الأروقة × 60 ÷ الدقائق لكل سيارة تعطي ما تستطيع المحطة غسله في الساعة. ثم بالنقل: مواعيد محجوزة، طابور يُرى من الهاتف مع وقت الانتظار، وعرض لأيام الأسبوع لمن يستطيع المجيء في يوم آخر. لا نغسل أسرع؛ بل نجعل أقل الناس يأتون في الساعة نفسها." },
        { q: "هل يمكن اقتراح اشتراكات غسل؟", a: "نعم: دفتر غسلات أو اشتراك شهري، مربوط باللوحة. البرنامج يعرف ما بقي ولأي سيارة يصلح الاشتراك. وهو كذلك ما يملأ الأيام الهادئة، إن كان العرض صالحاً في أيام الأسبوع." },
        { q: "كيف تُسيَّر مركبات شركة؟", a: "بحساب أسطول: كل مرور تذكرة، والشركة تستلم كشفاً في نهاية الشهر، باللوحات والتواريخ والصيغ، وسقف يحدّ المبلغ المستحَق." },
        { q: "ماذا نفعل حين يقول زبون إن سيارته خُدشت؟", a: "نعرض الصور الأربع المأخوذة عند الدخول، المربوطة بتذكرته. هي عادة من ثلاثين ثانية لكل سيارة، وأغلب النقاشات تتوقف هناك." },
        { q: "كيف نطلق غسلاً في البيت عبر تطبيق؟", a: "بتطبيق للزبون، عنوان على الخريطة، موعد، صيغة، ودفع، وتطبيق للغسّال، بجولته والصور قبل وبعد. والحساب الذي يحسم: الغسلات في اليوم لكل غسّال، أي وقت التنقل. ونبدأ بالأساطيل وببعض الأحياء." },
        { q: "هل يعمل البرنامج على لوح رقمي، ودون إنترنت؟", a: "هو مصنوع للوح رقمي عند المدخل وهاتف لكل غسّال. التذاكر تُنشأ حتى حين ينقطع الاتصال وتتزامن بعد ذلك؛ والرسائل إلى الزبائن تخرج عند عودة الشبكة." },
        { q: "كم يكلّف برنامج غسل السيارات؟", a: "هذا يتوقف على عدد المحطات والأروقة، والحجز على الإنترنت، وتطبيق الزبون، والغسل في البيت. والقاعدة، التذاكر والصندوق والحساب، هي الأسرع وضعاً في الخدمة، والتي يظهر أثرها أولاً. ونحن نقدّر الكلفة بعد يوم سبت نلاحظه في عين المكان." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "لا نغسل أسرع: بل نجعل أقل الناس يأتون في الساعة نفسها." },
      { after: 2, text: "ما دامت السيارات تُعدّ في ثلاثة أماكن، نحصل على ثلاثة أرقام؛ والتذكرة لا تترك إلا واحداً." },
    ],
    cta: { eyebrow: "عُدّوا يوم سبت الوافدين ساعة بساعة، وقولوا لنا كم رواقاً وكم غسّالاً عندكم: نبيّن لكم طاقتكم، وما يفيض، والتذكرة التي تجعل الصندوق متفقاً", title: "محطة غسل من رواقين إلى عشرة، محطة ثانية تُفتح، أو مؤسس في فرنسا يريد أن يطلق الغسل في البيت عبر تطبيق: نبني التذكرة لكل سيارة، الصندوق، حساب الغسّالين، الحجز والتطبيق", body: "تذكرة تُفتح باللوحة، صندوق وحساب يعطيان الرقم نفسه، اشتراكات، وطابور يراه الزبون من هاتفه. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.sessions, kind: '2027', name: 'الصندوق لا يتوازن أبداً: حصص الصندوق، العدّ، والفارق' },
      { href: L.fidelite, kind: '2027', name: 'برنامج الوفاء: التطبيق، النقاط، الصندوق والتذكير' },
      { href: L.tournees, kind: '2027', name: 'الجولات: المناطق، ترتيب التوقفات، وإعادة التخطيط' },
      { href: L.planity, kind: '2027', name: 'الحجز على الإنترنت مع تسبيق: نموذج الصالونات' },
    ] },
  },
};

const KEYWORDS = "logiciel lavage auto algérie 2027, application lavage voiture algerie, application lavage auto, logiciel de gestion de lavage auto, logiciel station de lavage, gestion file d'attente lavage auto, abonnement lavage auto, lavage auto à domicile application, logiciel caisse station de lavage, car wash software algeria 2027, car wash app queue subscriptions, mobile car wash app, برنامج غسل السيارات الجزائر 2027, تطبيق غسيل السيارات الجزائر, برنامج تسيير محطة غسل السيارات";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
