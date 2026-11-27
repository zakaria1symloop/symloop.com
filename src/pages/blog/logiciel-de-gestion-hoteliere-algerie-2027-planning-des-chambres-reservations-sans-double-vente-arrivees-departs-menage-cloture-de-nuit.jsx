import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-de-gestion-hoteliere-algerie-2027-planning-des-chambres-reservations-sans-double-vente-arrivees-departs-menage-cloture-de-nuit.mjs';

const SLUG = 'logiciel-de-gestion-hoteliere-algerie-2027-planning-des-chambres-reservations-sans-double-vente-arrivees-departs-menage-cloture-de-nuit';
const FIGURES = ['couches', 'planning', 'revpar', 'canaux', 'sejour', 'calendrier'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  booking: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/',
  reservation: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  caisse: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  dualpay: '/blog/client-en-france-paie-en-euros-service-en-algerie-application-2027-deux-encaissements-deux-devises-taux-fige-rapprochement-remboursement/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  agencevoyage: '/blog/logiciel-agence-de-voyage-algerie-2027-un-dossier-par-voyage-places-bloquees-acomptes-echeances-fournisseurs-passeports-marge-par-dossier/',
};

const CONTENT = {
  fr: {
    kind: 'Gestion hôtelière · Algérie · 2027', title: "Logiciel de gestion hôtelière en Algérie (2027) : la même chambre vendue deux fois, un cahier de réservations que seule la réception comprend, des extras oubliés sur la facture, des recettes qu'on ne connaît qu'à la fin du mois ; planning, réception, compte client, étages, clôture, et ce qu'on met en place",
    dek: "« Je dirige un hôtel de quarante chambres. Les réservations arrivent par téléphone, par des agences, par des messages et par deux sites, et tout finit dans un cahier que seule la réception sait lire. Le mois dernier, la même chambre a été promise à deux clients le même soir. Des repas et des services ne sont jamais portés sur la facture, je ne sais pas le matin combien de chambres sont prêtes, et je découvre le taux d'occupation à la fin du mois. Existe-t-il un logiciel de gestion hôtelière pour cela ? » Une chambre d'hôtel se vend nuit par nuit, et une nuit non vendue ne se rattrape pas : il faut un planning que tous les canaux lisent à la même seconde.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de gestion hôtelière', 'Planning des chambres', 'Réservations multicanal', 'Compte client et clôture de nuit', 'Occupation et recette par chambre', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de gestion hôtelière tient quatre choses. **Le planning** : chaque chambre, chaque nuit, une seule réservation, quel que soit le canal par lequel elle arrive. **La réception** : arrivées, départs et fiche du client, avec la chambre attribuée. **Le compte du client** : nuitées et extras portés au fur et à mesure, facture au départ. **La clôture de nuit** : recettes, occupation et prix moyen, chaque matin. Dans l'exemple de cette page, une semaine remplie à 77 % à 10 056 dinars en moyenne rapporte plus qu'une semaine remplie à 90 % à 8 000 dinars.",
      "Cette page s'adresse à celles et ceux qui dirigent un hôtel, une résidence, un complexe ou une maison d'hôtes, de dix à deux cents chambres, et à qui prépare une ouverture, depuis l'Algérie ou depuis la France. Les définitions viennent de sources publiques : hôtel, système de gestion hôtelière, surréservation, prix moyen par chambre vendue, recette par chambre disponible, service d'étage, tarification selon la demande, agence de voyages en ligne. L'hôtel, son planning, ses semaines et ses prix sont un exemple construit. La page ne traite ni des obligations de déclaration des clients, ni du classement des établissements, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans un logiciel de gestion hôtelière", body: [
        "La figure empile cinq couches ; la première est celle dont toutes les autres partent.",
      ], visual: 'couches', after: [
        "**L'hôtel.** Un hôtel est un établissement qui fournit un hébergement payant de courte durée. Ce qu'il vend a une particularité : la nuit d'hier ne se vend plus. **Le système.** Les systèmes de gestion hôtelière sont des logiciels qui automatisent les opérations de l'hôtel : réservations des clients, informations sur les clients, réservations en ligne, enregistrement des dépenses sur leur compte. **Le planning.** C'est la couche accentuée : chambres, types de chambres, tarifs par période, et toutes les réservations sur un seul tableau.",
        "**La réception.** L'écran du matin : qui arrive, qui part, quelles chambres sont prêtes. **Le compte du client.** Les nuitées s'y ajoutent chaque nuit ; le restaurant, la blanchisserie, la salle de réunion y portent leurs lignes. **Les étages.** Le service d'étage est le département qui fournit aux clients un environnement propre et confortable : changer la literie, les serviettes, nettoyer la salle de bain. Son outil est un téléphone : chambre à faire, en cours, prête, ou hors service avec la raison. **Sans connexion.** La réception continue d'enregistrer quand Internet tombe, voir [l'application hors ligne](" + L.horsligne + ").",
      ] },
      { heading: "Une chambre, une nuit, un seul client", body: [
        "La figure montre un planning de huit chambres sur quatorze nuits.",
      ], visual: 'planning', after: [
        "**La surréservation.** C'est la vente d'un bien ou d'un service périssable au-delà de ce qui existe réellement. Dans un hôtel qui tient ses réservations sur un cahier, elle arrive par accident : deux personnes ont promis la même chambre. Sur le planning, c'est impossible : une case ne porte qu'un séjour, et la réservation prise au téléphone bloque la chambre pour le site à la même seconde. Le mécanisme de verrou est décrit dans [la réservation en ligne](" + L.reservation + ").",
        "**Les nuits isolées.** Dans l'exemple, 97 nuitées sont vendues sur 112. Parmi les quinze nuits libres, cinq sont coincées entre deux séjours : une seule nuit, invendable à qui en demande deux. **Ce que fait le logiciel.** À chaque demande, il propose la chambre qui laisse le moins de nuits isolées, au lieu de la première libre ; et il signale les séjours qu'un changement de chambre, avant l'arrivée, permettrait de mieux ranger. **Les nuits pleines.** Quatre nuits sur quatorze affichent complet : ce sont celles où l'on peut tenir le prix, et celles où une erreur laisse un client sans chambre.",
      ] },
      { heading: "Plus plein, ou mieux vendu", body: [
        "La figure compare deux semaines du même hôtel de quarante chambres.",
      ], visual: 'revpar', after: [
        "**Deux chiffres.** Le prix moyen par chambre vendue se calcule en divisant la recette des chambres par le nombre de chambres vendues. La recette par chambre disponible se calcule en divisant la recette des chambres par le nombre de chambres et le nombre de jours de la période. **La semaine A.** 216 nuitées sur 280, soit 77 % ; 10 056 dinars en moyenne ; 2 172 000 dinars de recette ; 7 757 dinars par chambre disponible. **La semaine B.** 252 nuitées, soit 90 % ; 8 000 dinars en moyenne ; 2 016 000 dinars ; 7 200 dinars par chambre disponible.",
        "**Ce que cela dit.** La semaine B est plus pleine, demande 36 chambres de plus à préparer, et rapporte 156 000 dinars de moins. Le taux d'occupation seul aurait fait croire l'inverse. **La tarification selon la demande.** C'est une stratégie de prix variables, fondée sur la compréhension et l'anticipation du comportement des clients, pour tirer le plus de recette d'une ressource fixe et limitée dans le temps. Le logiciel ne décide pas de vos prix ; il vous montre, par période et par type de chambre, ce que chaque choix a rapporté. **Chaque matin.** Ces chiffres sortent de la clôture de nuit et se lisent sur [un tableau de bord](" + L.dashboard + "), sans attendre la fin du mois.",
      ] },
      { heading: "Cinq canaux, un seul planning", body: [
        "La figure donne, pour cinq canaux, comment la réservation entre et ce qu'on suit.",
      ], visual: 'canaux', after: [
        "**Le téléphone et le comptoir.** La réception saisit en direct ; un acompte demandé est suivi jusqu'à son encaissement. **Les agences et les entreprises.** Un tarif négocié, une liste de noms, un compte facturé à la fin du séjour ou du mois ; côté agence, le dossier est décrit dans [le logiciel d'agence de voyage](" + L.agencevoyage + "). **Le site de l'hôtel.** Une réservation sans intermédiaire, avec un paiement ou une garantie, voir [l'intégration du paiement en ligne](" + L.paiement + ") ; pour la clientèle qui paie depuis la France, voir [le paiement en euros](" + L.dualpay + ").",
        "**Les plateformes.** Une agence de voyages en ligne fonctionne sur un modèle de plateforme. Y être présent apporte des clients ; y oublier de fermer une chambre vendue ailleurs apporte un litige. Le logiciel envoie les disponibilités et reçoit les réservations, pour que le planning reste la seule référence. Construire sa propre plateforme est un autre projet, décrit dans [l'équivalent de Booking](" + L.booking + "). **Ce que l'on mesure.** Nuitées et recette par canal ; commissions ; annulations et clients qui ne se présentent pas, par canal.",
      ] },
      { heading: "Un séjour, en six temps", body: [
        "La figure suit un séjour en six temps.",
      ], visual: 'sejour', after: [
        "**La réservation et l'arrivée.** Dates, type de chambre, tarif, acompte ; à l'arrivée, la fiche du client est remplie une fois et retrouvée à chaque séjour suivant. **Le séjour.** C'est le temps accentué. Le restaurant, le bar, la blanchisserie portent leurs lignes sur le compte de la chambre au moment du service ; au départ, la facture est déjà juste. Un extra noté sur un carnet qui arrive à la réception après le départ est un extra offert.",
        "**Le départ.** Facture, solde, moyen de paiement ; la chambre passe à « à faire » sur le téléphone des étages. **La remise en état.** Dès qu'elle est prête, la réception le voit : une arrivée matinale n'attend plus qu'on monte vérifier. **La clôture.** Chaque nuit, le logiciel ajoute la nuitée aux comptes des clients présents, arrête les recettes par moyen de paiement, et sort l'occupation et le prix moyen. La caisse se rapproche comme dans [les sessions de caisse](" + L.caisse + ").",
      ] },
      { heading: "Huit semaines pour un hôtel", body: [
        "Huit semaines dans l'exemple, pour un hôtel.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos chambres et leurs types, vos tarifs par période, vos canaux, vos clients en compte. **La reprise.** Les réservations futures du cahier entrent dans le planning avant la bascule ; le passé reste dans le cahier. **La formation.** La réception d'abord, de jour et de nuit, puis les étages : l'outil des étages doit tenir en trois boutons.",
        "**Prêt à l'emploi ou sur mesure.** Des logiciels hôteliers existent, y compris de grands noms internationaux, et conviennent à un hôtel dont le fonctionnement est standard. Le sur-mesure se justifie pour un complexe avec restaurant, salles et activités sur le même compte, un groupe de plusieurs établissements, des tarifs négociés nombreux, l'arabe et le français, ou un lien avec votre comptabilité. **Ce qui ne change pas.** Le logiciel ne remplit pas l'hôtel : il empêche de vendre deux fois, d'oublier de facturer, et de découvrir le mois trop tard. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que vous recevez** : un planning des chambres commun à tous les canaux ; l'écran de réception des arrivées et des départs ; la fiche du client ; le compte de la chambre avec extras et acomptes ; l'état des chambres sur téléphone ; la clôture de nuit et ses indicateurs.",
        "**Ce que l'hôtel évite** : la chambre vendue deux fois, le cahier que seule la réception comprend, l'extra oublié sur la facture, l'arrivée qui attend une chambre déjà prête, le taux d'occupation découvert à la fin du mois.",
        "**Ce qui est mesuré** : occupation par nuit et par type de chambre ; prix moyen par chambre vendue ; recette par chambre disponible ; nuitées et recette par canal ; annulations et absences ; extras par séjour ; délai de remise en état.",
        "**Ce que fait Symloop** : le cadrage des chambres et des tarifs, le planning et les réservations, la réception, le compte du client et la facture, l'application des étages, la clôture et les tableaux de bord, le lien avec votre site et vos canaux.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel de gestion hôtelière ?", a: "Un logiciel qui tient le planning des chambres, les réservations de tous les canaux, les arrivées et les départs, le compte de chaque client et la clôture de chaque nuit. On l'appelle aussi PMS." },
        { q: "Comment gérer un hôtel ?", a: "En tenant un seul planning pour tous les canaux, en portant chaque dépense sur le compte du client au moment du service, et en lisant chaque matin l'occupation, le prix moyen et la recette par chambre disponible." },
        { q: "Comment éviter de vendre deux fois la même chambre ?", a: "En supprimant les cahiers séparés : chaque réservation, quel que soit son canal, bloque la chambre sur le même planning à la seconde où elle est prise." },
        { q: "Qu'est-ce que la recette par chambre disponible ?", a: "La recette des chambres divisée par le nombre de chambres disponibles sur la période. Elle tient compte à la fois du remplissage et du prix, ce que le taux d'occupation seul ne fait pas." },
        { q: "Vaut-il mieux remplir l'hôtel ou tenir le prix ?", a: "Cela dépend de la période, et se lit dans les chiffres. Dans l'exemple, 77 % à 10 056 dinars rapportent plus que 90 % à 8 000, avec 36 chambres de moins à préparer." },
        { q: "Comment suivre l'état des chambres ?", a: "Par une application sur le téléphone des étages : à faire, en cours, prête, hors service. La réception voit le changement aussitôt et peut attribuer la chambre." },
        { q: "Comment ne plus oublier d'extras sur la facture ?", a: "En les portant sur le compte de la chambre au moment du service, depuis le restaurant ou le bar, et non à partir d'un carnet remonté à la réception." },
        { q: "Peut-on relier le logiciel aux sites de réservation ?", a: "Oui : il envoie les disponibilités et reçoit les réservations, pour que le planning de l'hôtel reste la seule référence. Les modalités dépendent de chaque plateforme." },
        { q: "Le logiciel fonctionne-t-il sans Internet ?", a: "La réception doit pouvoir enregistrer une arrivée ou un départ sans connexion ; la synchronisation avec les canaux en ligne reprend au retour du réseau." },
        { q: "Combien de temps faut-il pour l'installer ?", a: "Huit semaines dans l'exemple de cette page, pour un hôtel, cadrage compris. Les réservations futures sont reprises avant la bascule." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Une chambre d'hôtel se vend nuit par nuit, et une nuit non vendue ne se rattrape pas." },
      { after: 2, text: "Le taux d'occupation seul aurait fait croire l'inverse." },
    ],
    cta: { eyebrow: "Dites-nous combien de chambres, par quels canaux arrivent vos réservations, et ce que vous utilisez aujourd'hui : nous commençons par une semaine de cadrage", title: "Chambre vendue deux fois, cahier de réservations, extras oubliés, chambres dont on ne connaît pas l'état, ou hôtel que vous ouvrez en Algérie depuis la France", body: "Symloop construit le logiciel qui correspond à votre établissement : planning, réception, compte client, étages, clôture. Décrivez-nous vos chambres, vos tarifs et vos canaux." },
    related: { label: 'À lire aussi', items: [
      { href: L.booking, kind: '2027', name: 'Créer un équivalent de Booking en Algérie : réserver depuis la France' },
      { href: L.reservation, kind: '2027', name: 'La réservation en ligne : créneaux, verrou, acompte, rappels' },
      { href: L.agencevoyage, kind: '2027', name: 'Logiciel d’agence de voyage : un dossier par voyage, acomptes, marge' },
      { href: L.caisse, kind: '2027', name: 'Les sessions de caisse : fond de caisse, comptage, écart' },
    ] },
  },
  en: {
    kind: 'Hotel management · Algeria · 2027', title: "Hotel management software in Algeria (2027): the same room sold twice, a reservations ledger only reception understands, extras left off the invoice, takings known only at the end of the month; planning, reception, guest account, housekeeping, closing, and what we put in place",
    dek: "“I run a hotel with forty rooms. Reservations come in by phone, through agencies, by message and through two websites, and everything ends up in a ledger only reception can read. Last month the same room was promised to two guests for the same evening. Meals and services never make it onto the invoice, in the morning I do not know how many rooms are ready, and I find out the occupancy rate at the end of the month. Is there hotel management software for that?” A hotel room is sold night by night, and a night that is not sold cannot be recovered: you need a planning board that every channel reads at the same second.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Hotel management software', 'Room planning', 'Multichannel reservations', 'Guest account and night closing', 'Occupancy and revenue per room', 'Algeria 2027'],
    intro: [
      "**Short answer.** Hotel management software holds four things. **The planning board**: each room, each night, a single reservation, whatever channel it comes through. **Reception**: arrivals, departures and the guest record, with the room assigned. **The guest account**: room-nights and extras posted as they happen, invoice at departure. **The night closing**: takings, occupancy and average price, every morning. In this page's example, a week filled to 77% at 10,056 dinars on average earns more than a week filled to 90% at 8,000 dinars.",
      "This page is for those who run a hotel, a residence, a resort or a guesthouse, from ten to two hundred rooms, and for anyone preparing an opening, from Algeria or from France. The definitions come from public sources: hotel, property management system, overbooking, average daily rate, revenue per available room, housekeeping, yield management, online travel agency. The hotel, its planning board, its weeks and its prices are a constructed example. The page covers neither guest declaration obligations, nor the classification of establishments, nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside hotel management software", body: [
        "The figure stacks five layers; the first is the one all the others start from.",
      ], visual: 'couches', after: [
        "**The hotel.** A hotel is an establishment that provides paid lodging on a short-term basis. What it sells has one peculiarity: last night can no longer be sold. **The system.** Property management systems are computerised software systems that automate hotel operations like guest bookings, guest details, online reservations and posting of charges. **The planning board.** That is the accented layer: rooms, room types, rates by period, and all reservations on a single board.",
        "**Reception.** The morning screen: who arrives, who leaves, which rooms are ready. **The guest account.** Room-nights are added to it each night; the restaurant, the laundry, the meeting room post their lines to it. **Housekeeping.** Housekeeping is the department that works to provide a clean and comfortable environment for guests: changing bedding, providing clean towels, cleaning bathrooms. Its tool is a phone: room to do, in progress, ready, or out of order with the reason. **Without a connection.** Reception keeps recording when the internet drops, see [the offline application](" + L.horsligne + ").",
      ] },
      { heading: "One room, one night, one guest", body: [
        "The figure shows a planning board of eight rooms over fourteen nights.",
      ], visual: 'planning', after: [
        "**Overbooking.** It is the sale of a volatile good or service in excess of actual supply. In a hotel that keeps its reservations in a ledger, it happens by accident: two people promised the same room. On the board it is impossible: a cell carries only one stay, and the reservation taken by phone blocks the room for the website at the same second. The locking mechanism is described in [online booking](" + L.reservation + ").",
        "**Isolated nights.** In the example, 97 room-nights are sold out of 112. Of the fifteen free nights, five are stuck between two stays: a single night, unsellable to anyone asking for two. **What the software does.** At each request, it proposes the room that leaves the fewest isolated nights, instead of the first one free; and it flags the stays that a room change, before arrival, would let you arrange better. **Full nights.** Four nights out of fourteen are sold out: they are the ones where the price can be held, and the ones where a mistake leaves a guest without a room.",
      ] },
      { heading: "Fuller, or better sold", body: [
        "The figure compares two weeks of the same forty-room hotel.",
      ], visual: 'revpar', after: [
        "**Two figures.** The average daily rate is calculated by dividing the rooms revenue earned by the number of rooms sold. Revenue per available room is calculated by dividing the hotel's guestroom revenue by the room count and the number of days in the period. **Week A.** 216 room-nights out of 280, that is 77%; 10,056 dinars on average; 2,172,000 dinars of revenue; 7,757 dinars per available room. **Week B.** 252 room-nights, that is 90%; 8,000 dinars on average; 2,016,000 dinars; 7,200 dinars per available room.",
        "**What that says.** Week B is fuller, needs 36 more rooms to be prepared, and brings in 156,000 dinars less. The occupancy rate alone would have suggested the opposite. **Yield management.** It is a variable pricing strategy, based on understanding and anticipating consumer behaviour, in order to maximise revenue from a fixed, time-limited resource. The software does not decide your prices; it shows you, per period and per room type, what each choice brought in. **Every morning.** These figures come out of the night closing and are read on [a dashboard](" + L.dashboard + "), without waiting for the end of the month.",
      ] },
      { heading: "Five channels, a single board", body: [
        "The figure gives, for five channels, how the reservation comes in and what is tracked.",
      ], visual: 'canaux', after: [
        "**Phone and desk.** Reception enters it live; a deposit requested is followed until it is collected. **Agencies and companies.** A negotiated rate, a list of names, an account invoiced at the end of the stay or of the month; on the agency side, the file is described in [travel agency software](" + L.agencevoyage + "). **The hotel's own website.** A booking with no intermediary, with a payment or a guarantee, see [online payment integration](" + L.paiement + "); for guests who pay from France, see [payment in euros](" + L.dualpay + ").",
        "**Platforms.** An online travel agency uses a platform business model. Being listed brings guests; forgetting to close a room sold elsewhere brings a dispute. The software sends availability and receives reservations, so that the board remains the only reference. Building your own platform is another project, described in [the Booking equivalent](" + L.booking + "). **What is measured.** Room-nights and revenue per channel; commissions; cancellations and no-shows, per channel.",
      ] },
      { heading: "A stay, in six steps", body: [
        "The figure follows a stay in six steps.",
      ], visual: 'sejour', after: [
        "**Reservation and arrival.** Dates, room type, rate, deposit; on arrival, the guest record is filled in once and found again at every later stay. **The stay.** That is the accented step. The restaurant, the bar, the laundry post their lines to the room's account at the moment of service; at departure, the invoice is already right. An extra noted in a notebook that reaches reception after departure is an extra given away.",
        "**Departure.** Invoice, balance, means of payment; the room switches to “to do” on the housekeeping phone. **Turnaround.** As soon as it is ready, reception sees it: an early arrival no longer waits for someone to go up and check. **Closing.** Every night, the software adds the room-night to the accounts of guests in house, closes takings by means of payment, and produces occupancy and average price. The cash is reconciled as in [till sessions](" + L.caisse + ").",
      ] },
      { heading: "Eight weeks for a hotel", body: [
        "Eight weeks in the example, for one hotel.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your rooms and their types, your rates by period, your channels, your account customers. **Taking over.** Future reservations in the ledger go into the board before the switch; the past stays in the ledger. **Training.** Reception first, day and night, then housekeeping: the housekeeping tool has to fit in three buttons.",
        "**Ready-made or custom.** Hotel software exists, including big international names, and suits a hotel that runs in a standard way. Custom work is justified for a resort with restaurant, meeting rooms and activities on the same account, a group of several establishments, many negotiated rates, Arabic and French, or a link with your accounting. **What does not change.** The software does not fill the hotel: it stops you selling twice, forgetting to invoice, and finding out about the month too late. **The durations** are those of a constructed example.",
      ], list: [
        "**What you receive**: a room planning board shared by every channel; the reception screen for arrivals and departures; the guest record; the room account with extras and deposits; room status on the phone; the night closing and its indicators.",
        "**What the hotel avoids**: the room sold twice, the ledger only reception understands, the extra left off the invoice, the arrival waiting for a room that is already ready, the occupancy rate discovered at the end of the month.",
        "**What is measured**: occupancy per night and per room type; average price per room sold; revenue per available room; room-nights and revenue per channel; cancellations and no-shows; extras per stay; turnaround time.",
        "**What Symloop does**: scoping the rooms and rates, planning and reservations, reception, the guest account and the invoice, the housekeeping application, closing and dashboards, the link with your website and your channels.",
      ], faq: [
        { q: "What is hotel management software?", a: "Software that holds the room planning board, reservations from every channel, arrivals and departures, each guest's account and the closing of each night. It is also called a PMS." },
        { q: "How do you manage a hotel?", a: "By keeping a single planning board for every channel, posting each expense to the guest's account at the moment of service, and reading occupancy, average price and revenue per available room every morning." },
        { q: "How do you avoid selling the same room twice?", a: "By doing away with separate ledgers: each reservation, whatever its channel, blocks the room on the same board at the second it is taken." },
        { q: "What is revenue per available room?", a: "Room revenue divided by the number of rooms available over the period. It takes both occupancy and price into account, which the occupancy rate alone does not." },
        { q: "Is it better to fill the hotel or hold the price?", a: "It depends on the period, and it shows in the figures. In the example, 77% at 10,056 dinars earns more than 90% at 8,000, with 36 fewer rooms to prepare." },
        { q: "How do you track room status?", a: "With an application on the housekeeping phone: to do, in progress, ready, out of order. Reception sees the change at once and can assign the room." },
        { q: "How do you stop forgetting extras on the invoice?", a: "By posting them to the room's account at the moment of service, from the restaurant or the bar, and not from a notebook brought up to reception." },
        { q: "Can the software be linked to booking sites?", a: "Yes: it sends availability and receives reservations, so that the hotel's board remains the only reference. The terms depend on each platform." },
        { q: "Does the software work without the internet?", a: "Reception has to be able to record an arrival or a departure without a connection; synchronisation with online channels resumes when the network returns." },
        { q: "How long does it take to install?", a: "Eight weeks in this page's example, for one hotel, scoping included. Future reservations are taken over before the switch." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A hotel room is sold night by night, and a night that is not sold cannot be recovered." },
      { after: 2, text: "The occupancy rate alone would have suggested the opposite." },
    ],
    cta: { eyebrow: "Tell us how many rooms, which channels your reservations come through, and what you use today: we start with a week of scoping", title: "A room sold twice, a reservations ledger, forgotten extras, rooms whose status nobody knows, or a hotel you are opening in Algeria from France", body: "Symloop builds the software that fits your establishment: planning, reception, guest account, housekeeping, closing. Describe your rooms to us, your rates and your channels." },
    related: { label: 'Also read', items: [
      { href: L.booking, kind: '2027', name: 'Building a Booking equivalent in Algeria: booking from France' },
      { href: L.reservation, kind: '2027', name: 'Online booking: slots, lock, deposit, reminders' },
      { href: L.agencevoyage, kind: '2027', name: 'Travel agency software: one file per trip, deposits, margin' },
      { href: L.caisse, kind: '2027', name: 'Till sessions: float, counting, discrepancy' },
    ] },
  },
  ar: {
    kind: 'تسيير الفنادق · الجزائر · 2027', title: "برنامج تسيير الفندق في الجزائر (2027): الغرفة نفسها تُباع مرتين، دفتر حجوزات لا يفهمه إلا الاستقبال، إضافات تُنسى في الفاتورة، ومداخيل لا تُعرف إلا في نهاية الشهر؛ المخطط، الاستقبال، حساب النزيل، الطوابق، الإغلاق، وما نضعه",
    dek: "«أسيّر فندقاً من أربعين غرفة. الحجوزات تصل بالهاتف، عبر الوكالات، بالرسائل، وعبر موقعين، وكل شيء ينتهي في دفتر لا يعرف قراءته إلا الاستقبال. في الشهر الماضي، وُعد زبونان بالغرفة نفسها في الليلة نفسها. وجبات وخدمات لا تُحمَل أبداً على الفاتورة، لا أعرف صباحاً كم غرفة جاهزة، وأكتشف نسبة الإشغال في نهاية الشهر. هل يوجد برنامج تسيير فندقي لهذا؟» غرفة الفندق تُباع ليلة بليلة، والليلة التي لم تُبع لا تُستدرك: يلزم مخطط تقرؤه كل القنوات في الثانية نفسها.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج تسيير الفندق', 'مخطط الغرف', 'الحجوزات من عدة قنوات', 'حساب النزيل وإغلاق الليلة', 'الإشغال والمدخول لكل غرفة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج تسيير الفندق يمسك أربعة أشياء. **المخطط**: كل غرفة، كل ليلة، حجز واحد، مهما كانت القناة التي يصل منها. **الاستقبال**: الوصول، المغادرة، وبطاقة النزيل، مع الغرفة المسنَدة. **حساب النزيل**: الليالي والإضافات تُحمَل أولاً بأول، والفاتورة عند المغادرة. و**إغلاق الليلة**: المداخيل، الإشغال، ومتوسط السعر، كل صباح. في مثال هذه الصفحة، أسبوع ممتلئ بنسبة 77 بالمئة بمتوسط " + I('10 056') + " ديناراً يربح أكثر من أسبوع ممتلئ بنسبة 90 بالمئة بمتوسط " + I('8 000') + " دينار.",
      "هذه الصفحة موجّهة إلى من يسيّر فندقاً، إقامة، مركّباً، أو دار ضيافة، من عشر غرف إلى مئتين، وإلى من يحضّر افتتاحاً، من الجزائر أو من فرنسا. التعريفات من مصادر عمومية: الفندق، نظام تسيير الفندق، الحجز الزائد، متوسط السعر لكل غرفة مباعة، المدخول لكل غرفة متاحة، خدمة الطوابق، التسعير حسب الطلب، ووكالة السفر عبر الإنترنت. والفندق ومخططه وأسبوعاه وأسعاره مثال مركَّب. والصفحة لا تتناول التزامات التصريح بالنزلاء، ولا تصنيف المؤسسات، ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في برنامج تسيير الفندق", body: [
        "الشكل يرتّب خمس طبقات؛ والأولى هي التي تنطلق منها كل الأخرى.",
      ], visual: 'couches', after: [
        "**الفندق.** الفندق مؤسسة توفّر إيواء بمقابل لمدة قصيرة. ولما يبيعه خاصية: ليلة الأمس لا تُباع. **النظام.** أنظمة تسيير الفنادق برامج تؤتمت عمليات الفندق: حجوزات النزلاء، معلوماتهم، الحجوزات عبر الإنترنت، وتحميل المصاريف على حسابهم. **المخطط.** هو الطبقة المبرزة: الغرف، أنواعها، الأسعار حسب الفترة، وكل الحجوزات على لوحة واحدة.",
        "**الاستقبال.** شاشة الصباح: من يصل، من يغادر، وأي الغرف جاهزة. **حساب النزيل.** الليالي تُضاف إليه كل ليلة؛ والمطعم، المغسلة، وقاعة الاجتماعات تحمّل أسطرها عليه. **الطوابق.** خدمة الطوابق هي القسم الذي يوفّر للنزلاء محيطاً نظيفاً ومريحاً: تغيير الأغطية، المناشف، وتنظيف الحمام. وأداتها هاتف: غرفة للتحضير، جارية، جاهزة، أو خارج الخدمة مع السبب. **دون اتصال.** الاستقبال يواصل التسجيل حين تنقطع الإنترنت، انظر [التطبيق دون اتصال](" + L.horsligne + ").",
      ] },
      { heading: "غرفة، ليلة، ونزيل واحد", body: [
        "الشكل يعرض مخططاً من ثماني غرف على أربع عشرة ليلة.",
      ], visual: 'planning', after: [
        "**الحجز الزائد.** هو بيع سلعة أو خدمة زائلة بأكثر مما يوجد فعلاً. وفي فندق يمسك حجوزاته في دفتر، يقع بالخطأ: شخصان وعدا بالغرفة نفسها. وعلى المخطط، هذا مستحيل: الخانة لا تحمل إلا إقامة واحدة، والحجز المأخوذ بالهاتف يغلق الغرفة أمام الموقع في الثانية نفسها. وآلية القفل موصوفة في [الحجز عبر الإنترنت](" + L.reservation + ").",
        "**الليالي المعزولة.** في المثال، بيعت 97 ليلة من 112. ومن الليالي الحرّة الخمس عشرة، خمس محصورة بين إقامتين: ليلة واحدة، لا تُباع لمن يطلب ليلتين. **ما يفعله البرنامج.** عند كل طلب، يقترح الغرفة التي تترك أقل عدد من الليالي المعزولة، بدل أول غرفة حرّة؛ ويشير إلى الإقامات التي يسمح تغيير غرفتها، قبل الوصول، بترتيب أحسن. **الليالي الممتلئة.** أربع ليالٍ من أربع عشرة كاملة: وهي التي يمكن فيها الإبقاء على السعر، والتي يترك فيها الخطأ نزيلاً دون غرفة.",
      ] },
      { heading: "امتلاء أكثر، أم بيع أحسن", body: [
        "الشكل يقارن أسبوعين للفندق نفسه من أربعين غرفة.",
      ], visual: 'revpar', after: [
        "**رقمان.** متوسط السعر لكل غرفة مباعة يُحسب بقسمة مداخيل الغرف على عدد الغرف المباعة. والمدخول لكل غرفة متاحة يُحسب بقسمة مداخيل الغرف على عدد الغرف وعدد أيام الفترة. **الأسبوع أ.** 216 ليلة من 280، أي 77 بالمئة؛ " + I('10 056') + " ديناراً في المتوسط؛ " + I('2 172 000') + " دينار من المداخيل؛ و" + I('7 757') + " ديناراً لكل غرفة متاحة. **الأسبوع ب.** 252 ليلة، أي 90 بالمئة؛ " + I('8 000') + " دينار في المتوسط؛ " + I('2 016 000') + " دينار؛ و" + I('7 200') + " دينار لكل غرفة متاحة.",
        "**ما يقوله ذلك.** الأسبوع ب أكثر امتلاء، يطلب 36 غرفة إضافية للتحضير، ويربح " + I('156 000') + " دينار أقل. ونسبة الإشغال وحدها كانت ستوهم بالعكس. **التسعير حسب الطلب.** هو استراتيجية أسعار متغيّرة، مبنية على فهم سلوك الزبائن وتوقّعه، لاستخراج أكبر مدخول من مورد ثابت ومحدود في الزمن. والبرنامج لا يقرّر أسعاركم؛ بل يريكم، لكل فترة ولكل نوع من الغرف، ما ربحه كل اختيار. **كل صباح.** هذه الأرقام تخرج من إغلاق الليلة وتُقرأ على [لوحة قيادة](" + L.dashboard + ")، دون انتظار نهاية الشهر.",
      ] },
      { heading: "خمس قنوات، ومخطط واحد", body: [
        "الشكل يعطي، لخمس قنوات، كيف يدخل الحجز وما يُتابَع.",
      ], visual: 'canaux', after: [
        "**الهاتف والمنضدة.** الاستقبال يُدخل مباشرة؛ وعربون مطلوب يُتابَع حتى تحصيله. **الوكالات والمؤسسات.** سعر متفاوَض عليه، قائمة أسماء، وحساب يُفوتَر في نهاية الإقامة أو الشهر؛ ومن جهة الوكالة، الملف موصوف في [برنامج وكالة الأسفار](" + L.agencevoyage + "). **موقع الفندق.** حجز دون وسيط، بدفع أو ضمان، انظر [إدماج الدفع عبر الإنترنت](" + L.paiement + ")؛ وللزبائن الذين يدفعون من فرنسا، انظر [الدفع بالأورو](" + L.dualpay + ").",
        "**المنصات.** وكالة السفر عبر الإنترنت تشتغل بنموذج منصة. والحضور فيها يجلب نزلاء؛ ونسيان إغلاق غرفة بيعت في مكان آخر يجلب نزاعاً. والبرنامج يرسل التوافر ويستلم الحجوزات، ليبقى المخطط المرجع الوحيد. وبناء منصتكم الخاصة مشروع آخر، موصوف في [مقابل Booking](" + L.booking + "). **ما يُقاس.** الليالي والمداخيل لكل قناة؛ العمولات؛ والإلغاءات والنزلاء الذين لا يحضرون، لكل قناة.",
      ] },
      { heading: "إقامة، في ست مراحل", body: [
        "الشكل يتابع إقامة في ست مراحل.",
      ], visual: 'sejour', after: [
        "**الحجز والوصول.** التواريخ، نوع الغرفة، السعر، والعربون؛ وعند الوصول، تُملأ بطاقة النزيل مرة واحدة ويُعثر عليها في كل إقامة تالية. **الإقامة.** هي المرحلة المبرزة. المطعم، المقهى، والمغسلة تحمّل أسطرها على حساب الغرفة لحظة الخدمة؛ وعند المغادرة، الفاتورة صحيحة من قبل. وإضافة مكتوبة في دفتر يصل إلى الاستقبال بعد المغادرة إضافة مهداة.",
        "**المغادرة.** فاتورة، رصيد، ووسيلة دفع؛ والغرفة تنتقل إلى «للتحضير» على هاتف الطوابق. **إعادة التهيئة.** فور جاهزيتها، يراها الاستقبال: وصول مبكّر لا ينتظر أن يصعد أحد للتحقق. **الإغلاق.** كل ليلة، يضيف البرنامج الليلة إلى حسابات النزلاء الحاضرين، يوقف المداخيل لكل وسيلة دفع، ويُخرج الإشغال ومتوسط السعر. والصندوق يُطابَق كما في [حصص الصندوق](" + L.caisse + ").",
      ] },
      { heading: "ثمانية أسابيع لفندق", body: [
        "ثمانية أسابيع في المثال، لفندق واحد.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: غرفكم وأنواعها، أسعاركم حسب الفترة، قنواتكم، وزبائنكم بحساب. **الاسترجاع.** الحجوزات القادمة في الدفتر تدخل المخطط قبل الانتقال؛ والماضي يبقى في الدفتر. **التكوين.** الاستقبال أولاً، نهاراً وليلاً، ثم الطوابق: أداة الطوابق يجب أن تسع في ثلاثة أزرار.",
        "**جاهز أو على المقاس.** توجد برامج فندقية، منها أسماء دولية كبيرة، وتناسب فندقاً يشتغل بطريقة عادية. والعمل على المقاس يُبرَّر لمركّب فيه مطعم وقاعات وأنشطة على الحساب نفسه، لمجموعة من عدة مؤسسات، لأسعار متفاوَض عليها كثيرة، للعربية والفرنسية، أو لربط بمحاسبتكم. **ما لا يتغيّر.** البرنامج لا يملأ الفندق: يمنع البيع مرتين، نسيان الفوترة، واكتشاف الشهر بعد فوات الأوان. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقونه**: مخطط غرف مشترك بين كل القنوات؛ شاشة الاستقبال للوصول والمغادرة؛ بطاقة النزيل؛ حساب الغرفة بالإضافات والعرابين؛ حالة الغرف على الهاتف؛ وإغلاق الليلة ومؤشراته.",
        "**ما يتفاداه الفندق**: الغرفة المباعة مرتين، الدفتر الذي لا يفهمه إلا الاستقبال، الإضافة المنسية في الفاتورة، الوصول الذي ينتظر غرفة جاهزة، ونسبة الإشغال المكتشَفة في نهاية الشهر.",
        "**ما يُقاس**: الإشغال لكل ليلة ولكل نوع من الغرف؛ متوسط السعر لكل غرفة مباعة؛ المدخول لكل غرفة متاحة؛ الليالي والمداخيل لكل قناة؛ الإلغاءات والغيابات؛ الإضافات لكل إقامة؛ ومدة إعادة التهيئة.",
        "**ما تفعله Symloop**: تأطير الغرف والأسعار، المخطط والحجوزات، الاستقبال، حساب النزيل والفاتورة، تطبيق الطوابق، الإغلاق ولوحات القيادة، والربط بموقعكم وقنواتكم.",
      ], faq: [
        { q: "ما هو برنامج تسيير الفندق؟", a: "برنامج يمسك مخطط الغرف، حجوزات كل القنوات، الوصول والمغادرة، حساب كل نزيل، وإغلاق كل ليلة. ويُسمّى أيضاً " + I('PMS') + "." },
        { q: "كيف يُسيَّر فندق؟", a: "بمسك مخطط واحد لكل القنوات، بتحميل كل مصروف على حساب النزيل لحظة الخدمة، وبقراءة الإشغال، متوسط السعر، والمدخول لكل غرفة متاحة كل صباح." },
        { q: "كيف يُتفادى بيع الغرفة نفسها مرتين؟", a: "بحذف الدفاتر المنفصلة: كل حجز، مهما كانت قناته، يغلق الغرفة على المخطط نفسه في الثانية التي يؤخذ فيها." },
        { q: "ما هو المدخول لكل غرفة متاحة؟", a: "مداخيل الغرف مقسومة على عدد الغرف المتاحة في الفترة. ويأخذ في الحساب الامتلاء والسعر معاً، وهو ما لا تفعله نسبة الإشغال وحدها." },
        { q: "هل الأفضل ملء الفندق أم الإبقاء على السعر؟", a: "ذلك يتوقف على الفترة، ويُقرأ في الأرقام. في المثال، 77 بالمئة بمتوسط 10056 ديناراً تربح أكثر من 90 بالمئة بمتوسط 8000، مع 36 غرفة أقل للتحضير." },
        { q: "كيف تُتابَع حالة الغرف؟", a: "بتطبيق على هاتف الطوابق: للتحضير، جارية، جاهزة، أو خارج الخدمة. والاستقبال يرى التغيير فوراً ويستطيع إسناد الغرفة." },
        { q: "كيف يُتفادى نسيان الإضافات في الفاتورة؟", a: "بتحميلها على حساب الغرفة لحظة الخدمة، من المطعم أو المقهى، لا من دفتر يُصعَد إلى الاستقبال." },
        { q: "هل يمكن ربط البرنامج بمواقع الحجز؟", a: "نعم: يرسل التوافر ويستلم الحجوزات، ليبقى مخطط الفندق المرجع الوحيد. والكيفيات تتوقف على كل منصة." },
        { q: "هل يشتغل البرنامج دون إنترنت؟", a: "الاستقبال يجب أن يستطيع تسجيل وصول أو مغادرة دون اتصال؛ والتزامن مع القنوات عبر الإنترنت يعود عند عودة الشبكة." },
        { q: "كم من الوقت يلزم لتثبيته؟", a: "ثمانية أسابيع في مثال هذه الصفحة، لفندق واحد، التأطير منها. والحجوزات القادمة تُسترجع قبل الانتقال." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "غرفة الفندق تُباع ليلة بليلة، والليلة التي لم تُبع لا تُستدرك." },
      { after: 2, text: "نسبة الإشغال وحدها كانت ستوهم بالعكس." },
    ],
    cta: { eyebrow: "قولوا لنا كم غرفة، من أي القنوات تصل حجوزاتكم، وما تستعملونه اليوم: نبدأ بأسبوع تأطير", title: "غرفة بيعت مرتين، دفتر حجوزات، إضافات منسية، غرف لا تُعرف حالتها، أو فندق تفتحونه في الجزائر من فرنسا", body: "Symloop تبني البرنامج الذي يناسب مؤسستكم: المخطط، الاستقبال، حساب النزيل، الطوابق، والإغلاق. صِفوا لنا غرفكم، أسعاركم، وقنواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.booking, kind: '2027', name: 'إنشاء مقابل Booking في الجزائر: الحجز من فرنسا' },
      { href: L.reservation, kind: '2027', name: 'الحجز عبر الإنترنت: المواقيت، القفل، العربون، والتذكيرات' },
      { href: L.agencevoyage, kind: '2027', name: 'برنامج وكالة الأسفار: ملف لكل رحلة، عرابين، وهامش' },
      { href: L.caisse, kind: '2027', name: 'حصص الصندوق: الرصيد الابتدائي، العدّ، والفرق' },
    ] },
  },
};

const KEYWORDS = "logiciel de gestion hôtelière, gestion hôtelière algérie, logiciel de gestion hôtelière algérie 2027, logiciel hôtel algérie, logiciel pms hôtel, planning des chambres, logiciel réservation hôtel, comment gérer un hôtel, clôture de nuit hôtel, recette par chambre disponible, hotel management software algeria, hotel pms, room planning board, night audit software, revenue per available room, برنامج تسيير الفندق, برنامج إدارة الفنادق الجزائر, مخطط الغرف, حجز الفنادق, نسبة الإشغال, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
