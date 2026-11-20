import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/systeme-de-gestion-de-file-d-attente-algerie-2027-tickets-appel-au-guichet-temps-d-attente-file-virtuelle-par-telephone-nombre-de-guichets.mjs';

const SLUG = 'systeme-de-gestion-de-file-d-attente-algerie-2027-tickets-appel-au-guichet-temps-d-attente-file-virtuelle-par-telephone-nombre-de-guichets';
const FIGURES = ['couches', 'ticket', 'modes', 'journee', 'guichets', 'calendrier'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  reservation: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  standard: '/blog/standard-telephonique-ip-entreprise-algerie-2027-ipbx-lignes-postes-menu-vocal-file-d-attente-appels-manques-crm/',
  borne: '/blog/borne-de-commande-restaurant-algerie-2027-menu-qr-code-commande-a-emporter-file-d-attente-paiement-especes-ecran-cuisine-numero-d-appel/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  arabe: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  labo: '/blog/logiciel-laboratoire-analyses-medicales-algerie-2027-tubes-code-barres-automates-validation-compte-rendu-whatsapp/',
};

const CONTENT = {
  fr: {
    kind: 'File d’attente · Algérie · 2027', title: "Système de gestion de file d'attente en Algérie (2027) : une salle pleine dès 9 h, des disputes sur l'ordre, personne ne sait combien de temps il reste, ni combien de guichets ouvrir ; tickets, appel, attente estimée, file virtuelle, et ce qu'on met en place",
    dek: "« Nous recevons du public toute la journée. Dès 9 h la salle est pleine, les gens se disputent pour savoir qui était là avant, certains repartent sans avoir été reçus, et l'on me demande toutes les cinq minutes combien de temps il reste. Les agents disent qu'ils sont débordés, et je ne sais pas s'il faut un guichet de plus, ni à quelle heure. Existe-t-il un système de gestion de file d'attente pour cela ? » Une file d'attente ne se règle pas avec des chaises : elle se règle avec un ordre que tout le monde voit, une attente annoncée, et des chiffres qui disent combien de guichets ouvrir, heure par heure.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ["Système de gestion de file d'attente", 'Tickets et appel au guichet', "Temps d'attente estimé", "File d'attente virtuelle", 'Nombre de guichets', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un système de gestion de file d'attente fait quatre choses. **Un ordre visible** : chaque personne prend un ticket, par service, et l'appel se fait par numéro, à l'écran et à la voix. **Une attente annoncée** : le ticket donne une estimation, et le téléphone prévient quand le tour approche. **Une file qu'on peut quitter** : on attend ailleurs que dans la salle. **Des chiffres** : arrivées par heure, durée de service, attente, pour décider du nombre de guichets. Dans l'exemple de cette page, à 28 arrivées par heure, passer de trois à quatre guichets fait tomber l'attente moyenne de 26 minutes à 2.",
      "Cette page s'adresse à celles et ceux qui dirigent un lieu qui reçoit du public : agence, cabinet, clinique, laboratoire, service après-vente, guichet d'entreprise ou d'administration, un site ou plusieurs. Les définitions viennent de sources publiques : théorie des files d'attente, zone d'attente, file virtuelle, premier arrivé premier servi, formule d'Erlang C, file à plusieurs guichets, loi de Little, loi de Poisson, niveau de service. L'agence, ses arrivées et ses guichets sont un exemple construit, et les temps d'attente y sont calculés, non mesurés. La page ne traite ni d'obligations réglementaires d'accueil, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans un système de gestion de file d'attente", body: [
        "La figure empile cinq couches ; la dernière est celle qui justifie le projet.",
      ], visual: 'couches', after: [
        "**L'entrée.** Une zone d'attente est un lieu où l'on fait la queue, premier arrivé, premier servi, pour un bien ou un service. La file physique y est parfois remplacée par une file virtuelle : la personne utilise son téléphone, Internet, une borne ou un autre moyen pour y entrer, ou prend à une machine un ticket portant un numéro. **Les services.** Tout le monde ne vient pas pour la même chose : un retrait de document prend deux minutes, une ouverture de dossier vingt. Une file par motif, une durée moyenne par motif : c'est ce qui rend l'estimation possible. **Les guichets.** L'agent a un écran simple : « suivant », absent, transfert vers un autre service, pause.",
        "**L'appel.** Un écran dans la salle et une annonce vocale, en arabe et en français, voir [l'application en arabe et en français](" + L.arabe + ") ; et un message sur le téléphone, par le canal qui arrive vraiment, voir [les notifications](" + L.notifications + "). **La mesure.** C'est la couche accentuée, détaillée plus bas. **Sans connexion.** L'entrée et les guichets continuent de fonctionner sur le réseau local quand Internet tombe, voir [l'application hors ligne](" + L.horsligne + "). **Le téléphone aussi fait la queue.** Les appels entrants ont leur propre file, traitée dans [le standard téléphonique](" + L.standard + ") ; la théorie des files d'attente vient d'ailleurs de là, des modèles créés par Agner Krarup Erlang pour décrire les appels entrants d'un central téléphonique de Copenhague.",
      ] },
      { heading: "La vie d'un ticket", body: [
        "La figure suit un ticket en six temps.",
      ], visual: 'ticket', after: [
        "**Premier arrivé, premier servi.** La règle veut que les personnes soient servies une à la fois, et que celle qui attend depuis le plus longtemps passe la première. Le ticket rend cette règle visible : plus personne n'a à surveiller qui était là avant. **L'attente estimée.** Le ticket l'affiche : nombre de personnes devant, durée probable. Les gens vivent un temps « occupé » comme plus court qu'un temps « inoccupé », et surestiment en général la durée de leur attente d'environ 36 % : annoncer une durée, et permettre de faire autre chose, raccourcit l'attente ressentie sans toucher à l'attente réelle. **L'appel.** Numéro et guichet, à l'écran et à la voix ; et un message quand il ne reste que trois personnes.",
        "**L'absent.** Appelé, pas présenté : l'agent le marque, le ticket est rappelé une fois plus tard, puis clos. **Ceux qui partent.** La théorie distingue deux comportements : renoncer à entrer dans la file parce qu'elle est trop longue, et la quitter après avoir trop attendu. Le système compte les seconds, tickets pris et jamais servis, et c'est l'un des chiffres les plus utiles : chaque départ est une visite perdue. **Quatre horodatages.** Ticket, appel, début, fin : d'eux sortent l'attente, la durée de service et l'occupation de chaque guichet.",
      ] },
      { heading: "Cinq façons d'organiser l'attente", body: [
        "La figure met côte à côte cinq façons d'organiser l'attente.",
      ], visual: 'modes', after: [
        "**La file virtuelle.** L'idée est utilisée dans les centres d'appels et dans d'autres activités pour améliorer l'attente : la personne n'a plus à rester en ligne, elle est libre de faire autre chose. Appliquée à une salle : on scanne un QR code à l'entrée, ou l'on envoie un message, et l'on attend au café d'en face, dans sa voiture ou à son bureau. La salle se vide sans qu'un seul guichet ait été ajouté. **Le rendez-vous.** Pour un service long ou qui se prépare, le créneau reste la bonne réponse ; ses mécanismes sont décrits dans [la réservation en ligne](" + L.reservation + "). La plupart des lieux mêlent les deux : des guichets pour les rendez-vous, d'autres pour le passage.",
        "**La priorité.** Dans une file à priorités, les personnes prioritaires sont servies d'abord. Urgence dans une clinique, prélèvement à jeun dans [un laboratoire](" + L.labo + "), client en compte dans une agence : la règle se décide chez vous, s'écrit, et s'affiche, pour que personne n'y voie un passe-droit. **La borne.** Une tablette sur pied suffit souvent ; le principe est le même que pour [la borne de commande](" + L.borne + ") d'un restaurant : peu de choix, de gros boutons, deux langues. **Plusieurs sites.** Les mêmes services, les mêmes chiffres, comparés d'une agence à l'autre.",
      ] },
      { heading: "Quand la file se forme", body: [
        "La figure suit les arrivées d'une journée, heure par heure.",
      ], visual: 'journee', after: [
        "**La capacité.** Six minutes par personne : un guichet sert dix personnes par heure, trois guichets trente. **Les arrivées.** Dans l'exemple, 192 personnes dans la journée, mais 38 entre 10 h et 11 h et 34 l'heure suivante. Pendant ces deux heures, il arrive plus de monde que les guichets n'en servent : 8 personnes attendent à 11 h, 12 à midi, et la dernière arrivée attend 24 minutes. La file ne se résorbe qu'à l'heure du déjeuner, quand les arrivées retombent à 16. **Le quatrième guichet.** Ouvert de 9 h à 12 h, il porte la capacité à 40 par heure : dans ce calcul, la file ne se forme plus.",
        "**Ce que cela demande.** Trois heures d'une personne, pas un poste entier ; encore faut-il savoir lesquelles. Sans mesure, on voit une salle pleine et des agents débordés ; avec les tickets, on lit une courbe par heure, par jour de la semaine et par période du mois, sur [un tableau de bord en temps réel](" + L.dashboard + "). **Étaler.** L'autre levier est du côté des arrivées : proposer des rendez-vous l'après-midi, annoncer les heures calmes. **Ce calcul est optimiste.** Il suppose des arrivées régulières. En réalité elles viennent par paquets, et c'est l'objet de la figure suivante.",
      ] },
      { heading: "Le guichet de plus", body: [
        "La figure reprend une heure à 28 arrivées, avec trois, quatre ou cinq guichets.",
      ], visual: 'guichets', after: [
        "**Le modèle.** La théorie des files d'attente est l'étude mathématique des files. Son modèle à plusieurs guichets suppose des arrivées au hasard, à rythme moyen constant et indépendantes les unes des autres, ce que décrit la loi de Poisson. Il exige que le taux d'occupation des guichets, arrivées divisées par capacité, reste inférieur à 1 pour que la file soit stable. La formule d'Erlang C donne alors la probabilité qu'une personne qui arrive doive attendre. **Le calcul.** À 28 arrivées par heure pour 30 de capacité, trois guichets sont occupés à 93 % : 88 % des personnes attendent, 26 minutes en moyenne. Avec quatre guichets, 70 % d'occupation : 2 minutes. Avec cinq, 31 secondes.",
        "**Pourquoi un tel écart.** Près de la saturation, le moindre paquet d'arrivées crée une file que les guichets n'ont plus de marge pour rattraper. La loi de Little relie les grandeurs : le nombre moyen de personnes présentes est égal au rythme d'arrivée multiplié par le temps moyen passé. 28 personnes par heure qui attendent 26 minutes, ce sont 12 personnes en attente en moyenne ; à 2 minutes, une seule. **Un repère.** Avec quatre guichets et 34 arrivées par heure, soit 85 % d'occupation, le même calcul donne 7 minutes ; à 38 arrivées, soit 95 %, il en donne 27. Au-delà de 85 %, l'attente s'envole. **Les limites.** La formule suppose que personne ne quitte la file et que le rythme dure : c'est un ordre de grandeur, que vos propres chiffres remplacent dès le premier mois. **L'objectif.** Il se fixe comme un niveau de service : la part des personnes qui attendent moins d'un temps donné.",
      ] },
      { heading: "Huit semaines pour un site", body: [
        "Huit semaines dans l'exemple, pour un site.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : la liste des motifs de visite, quelques services chronométrés, le nombre de guichets, les heures que tout le monde sait chargées. **Le matériel.** Une tablette ou une borne à l'entrée, un écran dans la salle, les postes des agents : le logiciel s'adapte à ce que vous avez déjà, et un QR code imprimé suffit pour commencer la file virtuelle. **L'essai.** Une journée calme d'abord, avec les agents, avant le premier jour de pointe.",
        "**Prêt à l'emploi ou sur mesure.** Des systèmes de tickets existent, vendus avec leur borne et leur écran, et conviennent à une salle simple avec une seule file. Le sur-mesure se justifie quand il faut plusieurs services et plusieurs sites, mêler rendez-vous et passage, prévenir par message, ou relier la file au dossier de la personne dans votre logiciel métier. **Ce qui ne change pas.** Un système de file ne crée pas de capacité : il montre où elle manque, et à quelle heure. La décision d'ouvrir un guichet reste la vôtre ; elle devient chiffrée. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que vous recevez** : une entrée par borne, QR code ou message ; des files par service avec priorités ; l'écran des agents ; l'appel en salle, à l'écran et à la voix, en arabe et en français ; les messages avant l'appel ; un tableau de bord par heure, par service et par guichet.",
        "**Ce que le lieu évite** : les disputes sur l'ordre d'arrivée, la question « il reste combien ? », la salle pleine de gens qui pourraient attendre ailleurs, les départs sans avoir été reçu, le guichet ouvert à la mauvaise heure.",
        "**Ce qui est mesuré** : arrivées par heure et par service ; attente moyenne et part des personnes servies en moins de dix minutes ; durée de service par motif ; absents à l'appel ; tickets pris et jamais servis ; occupation de chaque guichet.",
        "**Ce que fait Symloop** : le cadrage des services, l'entrée et les tickets, l'écran des agents, l'appel, la file virtuelle et ses messages, le tableau de bord, le lien avec vos rendez-vous et votre logiciel métier, pour un site ou plusieurs.",
      ], faq: [
        { q: "Qu'est-ce qu'un système de gestion de file d'attente ?", a: "Un logiciel qui donne un numéro à chaque personne, par service, l'appelle à un guichet par écran, voix ou message, et enregistre l'heure de chaque étape. Il met de l'ordre dans la salle et produit les chiffres de l'accueil." },
        { q: "Comment gérer une file d'attente ?", a: "En rendant l'ordre visible par un ticket, en annonçant une durée, en laissant les gens attendre ailleurs, et en ouvrant les guichets selon les arrivées mesurées, heure par heure." },
        { q: "Comment réduire le temps d'attente ?", a: "Par trois leviers : ouvrir un guichet de plus aux heures où les arrivées dépassent la capacité, étaler les arrivées par des rendez-vous aux heures calmes, et raccourcir les services les plus longs en les préparant." },
        { q: "Combien de guichets faut-il ouvrir ?", a: "Assez pour que l'occupation reste nettement sous 100 %. Dans l'exemple, à 28 arrivées par heure et 6 minutes par personne, trois guichets donnent 26 minutes d'attente moyenne, quatre en donnent 2." },
        { q: "Faut-il une borne à tickets ?", a: "Pas forcément. Une tablette à l'entrée ou un QR code imprimé suffisent pour commencer. La borne devient utile quand le flux est fort ou que le public n'a pas toujours de téléphone." },
        { q: "Qu'est-ce qu'une file d'attente virtuelle ?", a: "Une file où l'on tient sa place sans rester sur place : on s'inscrit par QR code ou par message, on suit sa position sur son téléphone, et l'on revient quand le tour approche." },
        { q: "Comment estimer le temps d'attente affiché sur le ticket ?", a: "À partir du nombre de personnes devant, par service, de la durée moyenne mesurée pour ce service et du nombre de guichets ouverts. L'estimation s'affine avec les chiffres de chaque semaine." },
        { q: "Peut-on mêler rendez-vous et passage sans rendez-vous ?", a: "Oui, et c'est le cas le plus courant : certains guichets sont réservés aux rendez-vous sur certaines plages, les autres servent la file, et la règle est affichée." },
        { q: "Le système fonctionne-t-il sans Internet ?", a: "L'entrée, l'appel et les guichets doivent continuer sur le réseau local ; les messages et le tableau de bord à distance reprennent quand la connexion revient." },
        { q: "Que mesure un système de file d'attente ?", a: "Les arrivées par heure, l'attente, la durée de service, les absents à l'appel, les personnes parties avant d'être servies et l'occupation de chaque guichet, par service et par jour." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "Le total de la journée ne dit rien ; l'heure dit tout." },
      { after: 4, text: "Un guichet occupé à 93 % paraît bien employé ; c'est le régime où la salle déborde." },
    ],
    cta: { eyebrow: "Dites-nous combien de personnes vous recevez par jour, pour combien de motifs, et à combien de guichets : nous commençons par une semaine de cadrage", title: "Salle pleine dès 9 h, disputes sur l'ordre, attente inconnue, départs sans avoir été reçu, guichets ouverts au jugé, ou plusieurs sites à comparer", body: "Symloop construit le système de file d'attente qui correspond à votre accueil : tickets, appel, file virtuelle, tableau de bord. Décrivez-nous vos services, vos heures de pointe et ce que vous mesurez aujourd'hui." },
    related: { label: 'À lire aussi', items: [
      { href: L.reservation, kind: '2027', name: 'La réservation en ligne : créneaux, verrou, liste d’attente, rappels' },
      { href: L.standard, kind: '2027', name: 'Le standard téléphonique IP : menu vocal, file d’attente, appels manqués' },
      { href: L.dashboard, kind: '2027', name: 'Le tableau de bord en temps réel : une définition par chiffre' },
      { href: L.notifications, kind: '2027', name: 'Notifications : quel canal pour quel message' },
    ] },
  },
  en: {
    kind: 'Queue management · Algeria · 2027', title: "Queue management system in Algeria (2027): a room full by 9 am, arguments about who was first, nobody knows how long is left, or how many counters to open; tickets, calling, estimated wait, virtual queue, and what we put in place",
    dek: "“We receive the public all day. By 9 am the room is full, people argue about who was there first, some leave without having been seen, and every five minutes I am asked how long is left. The agents say they are overwhelmed, and I do not know whether we need one more counter, or at what time. Is there a queue management system for that?” A queue is not settled with chairs: it is settled with an order everyone can see, a wait that is announced, and figures that say how many counters to open, hour by hour.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Queue management system', 'Tickets and calling to the counter', 'Estimated waiting time', 'Virtual queue', 'Number of counters', 'Algeria 2027'],
    intro: [
      "**Short answer.** A queue management system does four things. **A visible order**: each person takes a ticket, per service, and calling is done by number, on screen and by voice. **An announced wait**: the ticket gives an estimate, and the phone gives notice when the turn is near. **A queue you can leave**: people wait somewhere other than the room. **Figures**: arrivals per hour, service time, wait, to decide the number of counters. In this page's example, at 28 arrivals an hour, going from three to four counters brings the average wait down from 26 minutes to 2.",
      "This page is for those who run a place that receives the public: branch, practice, clinic, laboratory, after-sales service, company or administration counter, one site or several. The definitions come from public sources: queueing theory, queue area, virtual queue, first come first served, the Erlang C formula, the multi-server queue, Little's law, the Poisson distribution, service level. The branch, its arrivals and its counters are a constructed example, and the waiting times in it are calculated, not measured. The page covers neither regulatory obligations on reception nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside a queue management system", body: [
        "The figure stacks five layers; the last is the one that justifies the project.",
      ], visual: 'couches', after: [
        "**Entry.** A queue area is a place where people queue, first come, first served, for goods or services. Physical queueing is sometimes replaced there by virtual queueing: the person uses their phone, the internet, a kiosk or another method to join, or takes a numbered ticket from a machine. **Services.** Not everyone comes for the same thing: collecting a document takes two minutes, opening a file twenty. One queue per reason, an average duration per reason: that is what makes the estimate possible. **Counters.** The agent has a simple screen: “next”, absent, transfer to another service, break.",
        "**Calling.** A display in the room and a voice announcement, in Arabic and in French, see [the application in Arabic and in French](" + L.arabe + "); and a message on the phone, through the channel that actually arrives, see [notifications](" + L.notifications + "). **Measurement.** That is the accented layer, detailed below. **Without a connection.** Entry and counters keep working on the local network when the internet drops, see [the offline application](" + L.horsligne + "). **The phone queues too.** Incoming calls have their own queue, covered in [the telephone switchboard](" + L.standard + "); queueing theory in fact comes from there, from the models Agner Krarup Erlang created to describe the incoming calls of a Copenhagen telephone exchange.",
      ] },
      { heading: "The life of a ticket", body: [
        "The figure follows a ticket in six steps.",
      ], visual: 'ticket', after: [
        "**First come, first served.** The rule is that people are served one at a time, and that whoever has been waiting longest goes first. The ticket makes that rule visible: nobody has to watch who was there before. **The estimated wait.** The ticket shows it: number of people ahead, likely duration. People experience “occupied” time as shorter than “unoccupied” time, and generally overestimate how long they waited by around 36%: announcing a duration, and letting people do something else, shortens the wait as it is felt without touching the real one. **The call.** Number and counter, on screen and by voice; and a message when only three people are left.",
        "**The no-show.** Called, not there: the agent marks it, the ticket is called once more later, then closed. **Those who leave.** The theory distinguishes two behaviours: deciding not to join the queue because it is too long, and leaving it after waiting too long. The system counts the second, tickets taken and never served, and it is one of the most useful figures: each departure is a lost visit. **Four timestamps.** Ticket, call, start, end: from them come the wait, the service time and the occupancy of each counter.",
      ] },
      { heading: "Five ways of organising the wait", body: [
        "The figure sets side by side five ways of organising the wait.",
      ], visual: 'modes', after: [
        "**The virtual queue.** The idea is used in call centres and in other businesses to improve waiting: the person no longer has to stay on the line, and is free to do something else. Applied to a room: you scan a QR code at the entrance, or send a message, and wait at the café opposite, in your car or at your desk. The room empties without a single counter having been added. **The appointment.** For a service that is long or has to be prepared, the slot remains the right answer; its mechanisms are described in [online booking](" + L.reservation + "). Most places mix the two: some counters for appointments, others for walk-ins.",
        "**Priority.** In a priority queue, high-priority people are served first. An emergency in a clinic, a fasting sample in [a laboratory](" + L.labo + "), an account customer in a branch: the rule is decided by you, written down, and displayed, so that nobody sees it as a favour. **The kiosk.** A tablet on a stand is often enough; the principle is the same as for a restaurant's [ordering kiosk](" + L.borne + "): few choices, large buttons, two languages. **Several sites.** The same services, the same figures, compared from one branch to the next.",
      ] },
      { heading: "When the queue forms", body: [
        "The figure follows a day's arrivals, hour by hour.",
      ], visual: 'journee', after: [
        "**Capacity.** Six minutes per person: one counter serves ten people an hour, three counters thirty. **Arrivals.** In the example, 192 people in the day, but 38 between 10 and 11 am and 34 in the following hour. During those two hours more people arrive than the counters serve: 8 people are waiting at 11 am, 12 at noon, and the last to arrive waits 24 minutes. The queue only clears at lunchtime, when arrivals fall back to 16. **The fourth counter.** Open from 9 am to 12 pm, it raises capacity to 40 an hour: in this calculation, the queue no longer forms.",
        "**What that requires.** Three hours of one person, not a whole post; you still have to know which hours. Without measurement, you see a full room and overwhelmed agents; with tickets, you read a curve per hour, per day of the week and per period of the month, on [a real-time dashboard](" + L.dashboard + "). **Spreading.** The other lever is on the arrivals side: offering appointments in the afternoon, announcing the quiet hours. **This calculation is optimistic.** It assumes regular arrivals. In reality they come in bunches, and that is the subject of the next figure.",
      ] },
      { heading: "One more counter", body: [
        "The figure takes an hour with 28 arrivals, with three, four or five counters.",
      ], visual: 'guichets', after: [
        "**The model.** Queueing theory is the mathematical study of queues. Its multi-server model assumes random arrivals, at a constant mean rate and independent of one another, which is what the Poisson distribution describes. It requires the counters' utilisation, arrivals divided by capacity, to stay below 1 for the queue to be stable. The Erlang C formula then gives the probability that an arriving person will need to queue. **The calculation.** At 28 arrivals an hour for a capacity of 30, three counters are 93% busy: 88% of people wait, 26 minutes on average. With four counters, 70% busy: 2 minutes. With five, 31 seconds.",
        "**Why such a gap.** Close to saturation, the slightest bunch of arrivals creates a queue that the counters no longer have the margin to catch up. Little's law links the quantities: the average number of people present equals the arrival rate multiplied by the average time spent. 28 people an hour waiting 26 minutes means 12 people waiting on average; at 2 minutes, just one. **A benchmark.** With four counters and 34 arrivals an hour, that is 85% busy, the same calculation gives 7 minutes; at 38 arrivals, 95%, it gives 27. Beyond 85%, the wait takes off. **The limits.** The formula assumes that nobody leaves the queue and that the pace lasts: it is an order of magnitude, which your own figures replace from the first month. **The target.** It is set as a service level: the share of people who wait less than a given time.",
      ] },
      { heading: "Eight weeks for one site", body: [
        "Eight weeks in the example, for one site.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: the list of reasons for visiting, a few services timed, the number of counters, the hours everyone knows are busy. **Equipment.** A tablet or a kiosk at the entrance, a display in the room, the agents' workstations: the software adapts to what you already have, and a printed QR code is enough to start the virtual queue. **The trial.** A quiet day first, with the agents, before the first peak day.",
        "**Ready-made or custom.** Ticket systems exist, sold with their kiosk and display, and suit a simple room with a single queue. Custom work is justified when you need several services and several sites, a mix of appointments and walk-ins, notice by message, or a link between the queue and the person's file in your business software. **What does not change.** A queue system does not create capacity: it shows where it is missing, and at what time. The decision to open a counter remains yours; it becomes a costed one. **The durations** are those of a constructed example.",
      ], list: [
        "**What you receive**: entry by kiosk, QR code or message; queues per service with priorities; the agents' screen; calling in the room, on screen and by voice, in Arabic and in French; messages before the call; a dashboard per hour, per service and per counter.",
        "**What the place avoids**: arguments about the order of arrival, the question “how long is left?”, a room full of people who could wait elsewhere, people leaving without being seen, the counter opened at the wrong hour.",
        "**What is measured**: arrivals per hour and per service; average wait and share of people served in under ten minutes; service time per reason; no-shows at the call; tickets taken and never served; occupancy of each counter.",
        "**What Symloop does**: scoping the services, entry and tickets, the agents' screen, calling, the virtual queue and its messages, the dashboard, the link with your appointments and your business software, for one site or several.",
      ], faq: [
        { q: "What is a queue management system?", a: "Software that gives each person a number, per service, calls them to a counter by screen, voice or message, and records the time of each step. It brings order to the room and produces the figures of the reception." },
        { q: "How do you manage a queue?", a: "By making the order visible with a ticket, announcing a duration, letting people wait elsewhere, and opening counters according to measured arrivals, hour by hour." },
        { q: "How do you reduce waiting time?", a: "With three levers: opening one more counter in the hours when arrivals exceed capacity, spreading arrivals through appointments in quiet hours, and shortening the longest services by preparing them." },
        { q: "How many counters should be open?", a: "Enough for utilisation to stay clearly below 100%. In the example, at 28 arrivals an hour and 6 minutes per person, three counters give an average wait of 26 minutes, four give 2." },
        { q: "Is a ticket kiosk needed?", a: "Not necessarily. A tablet at the entrance or a printed QR code is enough to begin. The kiosk becomes useful when the flow is heavy or the public does not always have a phone." },
        { q: "What is a virtual queue?", a: "A queue in which you keep your place without staying in place: you sign in by QR code or by message, follow your position on your phone, and come back when your turn is near." },
        { q: "How is the waiting time shown on the ticket estimated?", a: "From the number of people ahead, per service, the average duration measured for that service and the number of counters open. The estimate sharpens with each week's figures." },
        { q: "Can appointments and walk-ins be mixed?", a: "Yes, and it is the most common case: some counters are reserved for appointments in certain time bands, the others serve the queue, and the rule is displayed." },
        { q: "Does the system work without the internet?", a: "Entry, calling and counters have to carry on over the local network; messages and the remote dashboard resume when the connection returns." },
        { q: "What does a queue system measure?", a: "Arrivals per hour, the wait, service time, no-shows at the call, people who left before being served and the occupancy of each counter, per service and per day." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "The day's total says nothing; the hour says it all." },
      { after: 4, text: "A counter that is 93% busy looks well used; it is the regime in which the room overflows." },
    ],
    cta: { eyebrow: "Tell us how many people you receive a day, for how many reasons, and at how many counters: we start with a week of scoping", title: "A room full by 9 am, arguments about the order, an unknown wait, people leaving without being seen, counters opened by guesswork, or several sites to compare", body: "Symloop builds the queue system that fits your reception: tickets, calling, virtual queue, dashboard. Describe your services to us, your peak hours and what you measure today." },
    related: { label: 'Also read', items: [
      { href: L.reservation, kind: '2027', name: 'Online booking: slots, lock, waiting list, reminders' },
      { href: L.standard, kind: '2027', name: 'The IP telephone switchboard: voice menu, queue, missed calls' },
      { href: L.dashboard, kind: '2027', name: 'The real-time dashboard: one definition per figure' },
      { href: L.notifications, kind: '2027', name: 'Notifications: which channel for which message' },
    ] },
  },
  ar: {
    kind: 'تسيير الطوابير · الجزائر · 2027', title: "نظام تسيير الطوابير في الجزائر (2027): قاعة ممتلئة منذ التاسعة، خلافات على الترتيب، لا أحد يعرف كم بقي، ولا كم شبّاكاً يُفتح؛ التذاكر، النداء، الانتظار المقدَّر، الطابور الافتراضي، وما نضعه",
    dek: "«نستقبل الجمهور طوال اليوم. منذ التاسعة تمتلئ القاعة، يتخاصم الناس حول من كان قبل من، بعضهم يغادر دون أن يُستقبل، وأُسأل كل خمس دقائق كم بقي. الأعوان يقولون إنهم غارقون، ولا أعرف هل يلزم شبّاك إضافي، ولا في أي ساعة. هل يوجد نظام تسيير طوابير لهذا؟» الطابور لا يُحلّ بالكراسي: يُحلّ بترتيب يراه الجميع، انتظار مُعلَن، وأرقام تقول كم شبّاكاً يُفتح، ساعة بساعة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['نظام تسيير الطوابير', 'التذاكر والنداء إلى الشبّاك', 'مدة الانتظار المقدَّرة', 'الطابور الافتراضي', 'عدد الشبابيك', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** نظام تسيير الطوابير يفعل أربعة أشياء. **ترتيب ظاهر**: كل شخص يأخذ تذكرة، حسب الخدمة، والنداء يتم بالرقم، على الشاشة وبالصوت. **انتظار مُعلَن**: التذكرة تعطي تقديراً، والهاتف ينبّه حين يقترب الدور. **طابور يمكن مغادرته**: يُنتظر في مكان غير القاعة. و**أرقام**: الوصول في الساعة، مدة الخدمة، والانتظار، لتقرير عدد الشبابيك. في مثال هذه الصفحة، بـ28 وصولاً في الساعة، الانتقال من ثلاثة إلى أربعة شبابيك يُنزل متوسط الانتظار من 26 دقيقة إلى دقيقتين.",
      "هذه الصفحة موجّهة إلى من يسيّر مكاناً يستقبل الجمهور: وكالة، عيادة، مصحّة، مخبر، خدمة ما بعد البيع، شبّاك مؤسسة أو إدارة، موقعاً واحداً أو عدة مواقع. التعريفات من مصادر عمومية: نظرية الطوابير، منطقة الانتظار، الطابور الافتراضي، الأول وصولاً الأول خدمة، صيغة إرلانغ " + I('C') + "، الطابور بعدة شبابيك، قانون ليتل، توزيع بواسون، ومستوى الخدمة. والوكالة ووصولها وشبابيكها مثال مركَّب، ومدد الانتظار فيه محسوبة لا مقاسة. والصفحة لا تتناول الالتزامات التنظيمية للاستقبال ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في نظام تسيير الطوابير", body: [
        "الشكل يرتّب خمس طبقات؛ والأخيرة هي التي تبرّر المشروع.",
      ], visual: 'couches', after: [
        "**الدخول.** منطقة الانتظار مكان يصطفّ فيه الناس، الأول وصولاً الأول خدمة، من أجل سلعة أو خدمة. والطابور الفعلي يُعوَّض فيها أحياناً بطابور افتراضي: الشخص يستعمل هاتفه، الإنترنت، جهازاً، أو وسيلة أخرى ليدخله، أو يأخذ من آلة تذكرة تحمل رقماً. **الخدمات.** لا يأتي الجميع للشيء نفسه: سحب وثيقة يأخذ دقيقتين، وفتح ملف عشرين. طابور لكل سبب، ومدة متوسطة لكل سبب: وهذا ما يجعل التقدير ممكناً. **الشبابيك.** للعون شاشة بسيطة: «التالي»، غائب، تحويل إلى خدمة أخرى، واستراحة.",
        "**النداء.** شاشة في القاعة وإعلان صوتي، بالعربية والفرنسية، انظر [التطبيق بالعربية والفرنسية](" + L.arabe + ")؛ ورسالة على الهاتف، بالقناة التي تصل فعلاً، انظر [الإشعارات](" + L.notifications + "). **القياس.** هو الطبقة المبرزة، ومفصَّلة أسفله. **دون اتصال.** الدخول والشبابيك تواصل العمل على الشبكة المحلية حين تنقطع الإنترنت، انظر [التطبيق دون اتصال](" + L.horsligne + "). **الهاتف أيضاً يصطفّ.** للمكالمات الواردة طابورها، وهو معالَج في [المقسم الهاتفي](" + L.standard + ")؛ ونظرية الطوابير جاءت من هناك، من النماذج التي وضعها أغنر كراروب إرلانغ لوصف المكالمات الواردة إلى مقسم هاتفي في كوبنهاغن.",
      ] },
      { heading: "حياة تذكرة", body: [
        "الشكل يتابع تذكرة في ست مراحل.",
      ], visual: 'ticket', after: [
        "**الأول وصولاً، الأول خدمة.** القاعدة أن يُخدم الناس واحداً واحداً، وأن يمرّ أولاً من ينتظر منذ أطول مدة. والتذكرة تجعل هذه القاعدة ظاهرة: لا أحد يحتاج إلى مراقبة من كان قبله. **الانتظار المقدَّر.** التذكرة تعرضه: عدد الأشخاص قبلكم، والمدة المحتملة. والناس يعيشون الوقت «المشغول» أقصر من الوقت «الفارغ»، ويبالغون عموماً في تقدير مدة انتظارهم بنحو 36 بالمئة: إعلان مدة، والسماح بفعل شيء آخر، يقصّر الانتظار المحسوس دون أن يمسّ الانتظار الحقيقي. **النداء.** الرقم والشبّاك، على الشاشة وبالصوت؛ ورسالة حين لا يبقى إلا ثلاثة أشخاص.",
        "**الغائب.** نودي ولم يحضر: العون يعلّم عليه، التذكرة تُنادى مرة أخرى لاحقاً، ثم تُغلق. **من يغادرون.** النظرية تميّز سلوكين: العدول عن دخول الطابور لأنه طويل، ومغادرته بعد انتظار طويل. والنظام يعدّ الثاني، تذاكر أُخذت ولم تُخدم، وهو من أنفع الأرقام: كل مغادرة زيارة ضائعة. **أربعة أوقات مسجَّلة.** التذكرة، النداء، البداية، والنهاية: منها يخرج الانتظار، مدة الخدمة، وانشغال كل شبّاك.",
      ] },
      { heading: "خمس طرق لتنظيم الانتظار", body: [
        "الشكل يضع جنباً إلى جنب خمس طرق لتنظيم الانتظار.",
      ], visual: 'modes', after: [
        "**الطابور الافتراضي.** الفكرة مستعملة في مراكز النداء وفي أنشطة أخرى لتحسين الانتظار: الشخص لا يبقى على الخط، وهو حرّ في فعل شيء آخر. وتطبيقها على قاعة: يُمسح رمز " + I('QR') + " عند المدخل، أو تُرسَل رسالة، ويُنتظر في المقهى المقابل، في السيارة، أو في المكتب. فتفرغ القاعة دون إضافة شبّاك واحد. **الموعد.** لخدمة طويلة أو تُحضَّر، يبقى الموعد الجواب الصحيح؛ وآلياته موصوفة في [الحجز عبر الإنترنت](" + L.reservation + "). وأغلب الأماكن تجمع بين الاثنين: شبابيك للمواعيد، وأخرى للمرور.",
        "**الأولوية.** في طابور بالأولويات، يُخدم أصحاب الأولوية أولاً. استعجال في مصحّة، عيّنة على الريق في [مخبر](" + L.labo + ")، زبون بحساب في وكالة: القاعدة تُقرَّر عندكم، تُكتب، وتُعرض، حتى لا يراها أحد محاباة. **الجهاز.** لوحة على حامل تكفي في الغالب؛ والمبدأ هو نفسه في [جهاز الطلب](" + L.borne + ") في مطعم: اختيارات قليلة، أزرار كبيرة، ولغتان. **عدة مواقع.** الخدمات نفسها، الأرقام نفسها، مقارنة من وكالة إلى أخرى.",
      ] },
      { heading: "متى يتكوّن الطابور", body: [
        "الشكل يتابع وصول يوم كامل، ساعة بساعة.",
      ], visual: 'journee', after: [
        "**القدرة.** ست دقائق لكل شخص: شبّاك يخدم عشرة أشخاص في الساعة، وثلاثة شبابيك ثلاثين. **الوصول.** في المثال، 192 شخصاً في اليوم، لكن 38 بين العاشرة والحادية عشرة و34 في الساعة التالية. وطوال هاتين الساعتين، يصل أكثر مما تخدمه الشبابيك: 8 أشخاص ينتظرون عند الحادية عشرة، 12 عند منتصف النهار، وآخر الواصلين ينتظر 24 دقيقة. ولا يزول الطابور إلا وقت الغداء، حين ينزل الوصول إلى 16. **الشبّاك الرابع.** مفتوحاً من التاسعة إلى منتصف النهار، يرفع القدرة إلى 40 في الساعة: وفي هذا الحساب، لا يتكوّن الطابور.",
        "**ما يتطلّبه ذلك.** ثلاث ساعات من شخص واحد، لا منصباً كاملاً؛ ويبقى أن تُعرف أي ساعات. دون قياس، تُرى قاعة ممتلئة وأعوان غارقون؛ وبالتذاكر، يُقرأ منحنى لكل ساعة، لكل يوم من الأسبوع، ولكل فترة من الشهر، على [لوحة قيادة في الزمن الحقيقي](" + L.dashboard + "). **التوزيع.** الرافعة الأخرى من جهة الوصول: اقتراح مواعيد بعد الظهر، وإعلان الساعات الهادئة. **هذا الحساب متفائل.** يفترض وصولاً منتظماً. وفي الواقع يأتي الناس دفعات، وهذا موضوع الشكل التالي.",
      ] },
      { heading: "الشبّاك الإضافي", body: [
        "الشكل يأخذ ساعة بـ28 وصولاً، بثلاثة أو أربعة أو خمسة شبابيك.",
      ], visual: 'guichets', after: [
        "**النموذج.** نظرية الطوابير هي الدراسة الرياضية للطوابير. ونموذجها بعدة شبابيك يفترض وصولاً عشوائياً، بوتيرة متوسطة ثابتة ومستقلاً بعضه عن بعض، وهو ما يصفه توزيع بواسون. ويشترط أن تبقى نسبة انشغال الشبابيك، الوصول مقسوماً على القدرة، أقل من 1 ليكون الطابور مستقراً. وصيغة إرلانغ " + I('C') + " تعطي عندئذ احتمال أن يضطر شخص واصل إلى الانتظار. **الحساب.** بـ28 وصولاً في الساعة لقدرة 30، ثلاثة شبابيك مشغولة بنسبة 93 بالمئة: 88 بالمئة من الأشخاص ينتظرون، 26 دقيقة في المتوسط. بأربعة شبابيك، 70 بالمئة انشغالاً: دقيقتان. وبخمسة، 31 ثانية.",
        "**لماذا هذا الفرق.** قرب التشبّع، أصغر دفعة من الواصلين تصنع طابوراً لم يعد للشبابيك هامش لتداركه. وقانون ليتل يربط المقادير: متوسط عدد الأشخاص الحاضرين يساوي وتيرة الوصول مضروبة في متوسط الوقت المقضي. 28 شخصاً في الساعة ينتظرون 26 دقيقة، أي 12 شخصاً في الانتظار في المتوسط؛ وعند دقيقتين، شخص واحد. **مَعلَم.** بأربعة شبابيك و34 وصولاً في الساعة، أي 85 بالمئة انشغالاً، الحساب نفسه يعطي 7 دقائق؛ وبـ38 وصولاً، أي 95 بالمئة، يعطي 27. وفوق 85 بالمئة، يطير الانتظار. **الحدود.** الصيغة تفترض أن لا أحد يغادر الطابور وأن الوتيرة تدوم: هي ترتيب مقدار، تعوّضه أرقامكم منذ الشهر الأول. **الهدف.** يُحدَّد كمستوى خدمة: نسبة الأشخاص الذين ينتظرون أقل من مدة معيّنة.",
      ] },
      { heading: "ثمانية أسابيع لموقع واحد", body: [
        "ثمانية أسابيع في المثال، لموقع واحد.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: قائمة أسباب الزيارة، بعض الخدمات موقَّتة، عدد الشبابيك، والساعات التي يعرف الجميع أنها مزدحمة. **العتاد.** لوحة أو جهاز عند المدخل، شاشة في القاعة، ومناصب الأعوان: البرنامج يتكيّف مع ما عندكم، ورمز " + I('QR') + " مطبوع يكفي لبدء الطابور الافتراضي. **التجربة.** يوم هادئ أولاً، مع الأعوان، قبل أول يوم ذروة.",
        "**جاهز أو على المقاس.** توجد أنظمة تذاكر، تُباع بجهازها وشاشتها، وتناسب قاعة بسيطة بطابور واحد. والعمل على المقاس يُبرَّر حين تلزم عدة خدمات وعدة مواقع، الجمع بين المواعيد والمرور، التنبيه برسالة، أو ربط الطابور بملف الشخص في برنامجكم المهني. **ما لا يتغيّر.** نظام الطابور لا يخلق قدرة: يُظهر أين تنقص، وفي أي ساعة. وقرار فتح شبّاك يبقى قراركم؛ لكنه يصير محسوباً. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقونه**: دخول بجهاز، برمز " + I('QR') + "، أو برسالة؛ طوابير لكل خدمة بأولويات؛ شاشة الأعوان؛ النداء في القاعة، على الشاشة وبالصوت، بالعربية والفرنسية؛ رسائل قبل النداء؛ ولوحة قيادة لكل ساعة، لكل خدمة، ولكل شبّاك.",
        "**ما يتفاداه المكان**: الخلافات على ترتيب الوصول، سؤال «كم بقي؟»، قاعة ممتلئة بأناس يمكنهم الانتظار في مكان آخر، المغادرة دون استقبال، والشبّاك المفتوح في الساعة الخطأ.",
        "**ما يُقاس**: الوصول لكل ساعة ولكل خدمة؛ متوسط الانتظار ونسبة الأشخاص المخدومين في أقل من عشر دقائق؛ مدة الخدمة لكل سبب؛ الغائبون عند النداء؛ التذاكر المأخوذة التي لم تُخدم؛ وانشغال كل شبّاك.",
        "**ما تفعله Symloop**: تأطير الخدمات، الدخول والتذاكر، شاشة الأعوان، النداء، الطابور الافتراضي ورسائله، لوحة القيادة، والربط بمواعيدكم وببرنامجكم المهني، لموقع واحد أو لعدة مواقع.",
      ], faq: [
        { q: "ما هو نظام تسيير الطوابير؟", a: "برنامج يعطي رقماً لكل شخص، حسب الخدمة، يناديه إلى شبّاك بالشاشة أو الصوت أو الرسالة، ويسجّل وقت كل مرحلة. يضع النظام في القاعة وينتج أرقام الاستقبال." },
        { q: "كيف يُسيَّر طابور انتظار؟", a: "بجعل الترتيب ظاهراً بتذكرة، إعلان مدة، ترك الناس ينتظرون في مكان آخر، وفتح الشبابيك حسب الوصول المقاس، ساعة بساعة." },
        { q: "كيف تُقلَّص مدة الانتظار؟", a: "بثلاث رافعات: فتح شبّاك إضافي في الساعات التي يتجاوز فيها الوصول القدرة، توزيع الوصول بمواعيد في الساعات الهادئة، وتقصير أطول الخدمات بتحضيرها." },
        { q: "كم شبّاكاً يجب أن يُفتح؟", a: "ما يكفي لتبقى نسبة الانشغال بوضوح تحت 100 بالمئة. في المثال، بـ28 وصولاً في الساعة و6 دقائق لكل شخص، ثلاثة شبابيك تعطي 26 دقيقة انتظار في المتوسط، وأربعة تعطي دقيقتين." },
        { q: "هل يلزم جهاز تذاكر؟", a: "ليس بالضرورة. لوحة عند المدخل أو رمز " + I('QR') + " مطبوع يكفيان للبدء. والجهاز يصير نافعاً حين يكون التدفّق قوياً أو حين لا يملك الجمهور هاتفاً دائماً." },
        { q: "ما هو الطابور الافتراضي؟", a: "طابور يُحفظ فيه المكان دون البقاء في المكان: يُسجَّل برمز " + I('QR') + " أو برسالة، يُتابَع الترتيب على الهاتف، ويُعاد حين يقترب الدور." },
        { q: "كيف تُقدَّر مدة الانتظار المعروضة على التذكرة؟", a: "من عدد الأشخاص قبلكم، حسب الخدمة، المدة المتوسطة المقاسة لهذه الخدمة، وعدد الشبابيك المفتوحة. والتقدير يتحسّن بأرقام كل أسبوع." },
        { q: "هل يمكن الجمع بين المواعيد والمرور دون موعد؟", a: "نعم، وهي الحالة الأكثر شيوعاً: بعض الشبابيك محجوزة للمواعيد في فترات معيّنة، والأخرى تخدم الطابور، والقاعدة معروضة." },
        { q: "هل يشتغل النظام دون إنترنت؟", a: "الدخول والنداء والشبابيك يجب أن تواصل على الشبكة المحلية؛ والرسائل ولوحة القيادة عن بعد تعود حين يعود الاتصال." },
        { q: "ماذا يقيس نظام الطوابير؟", a: "الوصول في الساعة، الانتظار، مدة الخدمة، الغائبين عند النداء، من غادروا قبل أن يُخدموا، وانشغال كل شبّاك، لكل خدمة ولكل يوم." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "مجموع اليوم لا يقول شيئاً؛ والساعة تقول كل شيء." },
      { after: 4, text: "شبّاك مشغول بنسبة 93 بالمئة يبدو حسن الاستعمال؛ وهو النظام الذي تفيض فيه القاعة." },
    ],
    cta: { eyebrow: "قولوا لنا كم شخصاً تستقبلون في اليوم، لكم سبباً، وبكم شبّاكاً: نبدأ بأسبوع تأطير", title: "قاعة ممتلئة منذ التاسعة، خلافات على الترتيب، انتظار مجهول، مغادرة دون استقبال، شبابيك تُفتح بالتقدير، أو عدة مواقع تُقارَن", body: "Symloop تبني نظام الطابور الذي يناسب استقبالكم: التذاكر، النداء، الطابور الافتراضي، ولوحة القيادة. صِفوا لنا خدماتكم، ساعات الذروة عندكم، وما تقيسونه اليوم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reservation, kind: '2027', name: 'الحجز عبر الإنترنت: المواقيت، القفل، قائمة الانتظار، والتذكيرات' },
      { href: L.standard, kind: '2027', name: 'المقسم الهاتفي: القائمة الصوتية، طابور الانتظار، والمكالمات الفائتة' },
      { href: L.dashboard, kind: '2027', name: 'لوحة القيادة في الزمن الحقيقي: تعريف لكل رقم' },
      { href: L.notifications, kind: '2027', name: 'الإشعارات: أي قناة لأي رسالة' },
    ] },
  },
};

const KEYWORDS = "système de gestion de file d'attente, système de gestion de file d'attente algérie 2027, gestion file d'attente algérie, gestion de file d'attente avec distributeur de tickets, logiciel gestion file d'attente, borne gestion file d'attente, file d'attente virtuelle, comment gérer une file d'attente, comment organiser une file d'attente, réduire le temps d'attente, queue management system algeria, queue management software, virtual queue, ticket calling system, how many counters to open, نظام تسيير الطوابير, نظام إدارة الطوابير الجزائر, الطابور الافتراضي, تذاكر الانتظار, مدة الانتظار, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
