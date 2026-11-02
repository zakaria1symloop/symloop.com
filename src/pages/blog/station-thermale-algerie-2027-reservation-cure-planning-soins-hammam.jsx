import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/station-thermale-algerie-2027-reservation-cure-planning-soins-hammam.mjs';

const SLUG = 'station-thermale-algerie-2027-reservation-cure-planning-soins-hammam';
const FIGURES = ['journey', 'stack', 'capacite', 'pertes', 'calendrier', 'models'];
const DATE = '2026-11-02';

const CONTENT = {
  fr: {
    kind: 'Série · Vu en France #15', title: "Station thermale en Algérie en 2027 : réserver une cure en ligne, planifier les soins sans trou ni conflit, et remplir les lits hors saison.",
    dek: "En France, une cure thermale se réserve en ligne et chaque curiste reçoit son planning de soins pour ses 18 jours. En Algérie, les stations thermales ont reçu plus de 312 000 curistes en 2025 et les hammams traditionnels près de 2,8 millions de visiteurs, avec 14 projets en cours qui vont ajouter plus de 2 300 lits. Mais les soins se planifient encore souvent sur un cahier, et c'est là que se perd la capacité réelle. Ce qu'une cure doit tenir à chaque moment, ce qu'il faut construire en premier, ce que vaut un planning sans trou, six pertes et leur parade, et un calendrier pour 2027.",
    publishedAt: 'Novembre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Thermalisme', 'Réservation', 'Planning', 'Tourisme', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Pour une station thermale en Algérie en 2027, la pièce qui compte le plus n'est pas le site de réservation, c'est **le planning des soins**. Les lits disent combien de curistes dorment sur place ; les postes de soins, bains, douches, boues, massages, et leur planning disent combien sont réellement soignés chaque jour. Un moteur qui attribue les créneaux de chaque curiste sans trou ni conflit, qui réattribue un créneau libéré et qui prévient le curiste par SMS, peut augmenter de façon sensible le nombre de curistes soignés sans ajouter un seul poste. Autour : une réservation en ligne avec acompte, un dossier de cure qui garde la prescription et les contre-indications, des billets par créneau pour le hammam, et une caisse.",
      "Ce guide est le quinzième de la série « Vu en France, à construire en Algérie », après [les transporteurs de voyageurs](/blog/transporteur-voyageurs-algerie-2027-billets-en-ligne-caisse-receveur-colis/) et [les salles de sport](/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/). Il s'adresse aux stations thermales publiques et privées, aux investisseurs des nouveaux projets, aux hammams traditionnels, et au fondateur de la diaspora qui veut construire une plateforme de réservation pour ces établissements. Il ne traite pas des prescriptions médicales, qui relèvent des médecins.",
    ],
    sections: [
      { heading: 'Ce que disent les chiffres de 2025 et 2026', body: [
        "Selon les chiffres présentés par la ministre du Tourisme et rapportés par Algérie Eco en octobre 2026, l'Algérie compte **282 sources thermales dans 40 wilayas**, **36 stations thermales pour 5 618 lits** et 2 564 emplois, et 28 hammams traditionnels dans 18 wilayas. Les stations ont reçu **312 736 curistes en 2025**, et les hammams traditionnels **2 826 403 visiteurs** ; au premier semestre 2026, 176 115 curistes et 1 166 469 visiteurs. Le groupe public compte à lui seul 2 997 lits. Et **14 projets sont en cours**, qui doivent ajouter 2 366 lits et 1 155 emplois.",
        "En France, à titre de comparaison, le Conseil national des établissements thermaux comptait 467 874 curistes conventionnés en 2025, pour des cures de 18 jours, avec une réservation en ligne et un planning de soins remis à chaque curiste. **L'écart n'est pas dans la ressource, l'Algérie a ses sources ; il est dans l'organisation.** Une station dont les lits sont pleins mais dont les postes de soins ont des trous perd des curistes chaque jour, et un nouveau projet qui ouvre sans outil reproduit ces pertes dès le premier été.",
      ] },
      { heading: 'Une cure qui tient, en six moments', body: [
        "Le système doit tenir chacun de ces six moments. Les deux premiers se jouent avant l'arrivée ; les quatre suivants, chaque jour du séjour.",
      ], visual: 'journey', after: [
        "**La demande** se note avec la prescription, la période souhaitée, la chambre et l'éventuel accompagnant. **La réservation** bloque des dates et une chambre contre un acompte, en ligne ou par téléphone, avec une confirmation écrite. **L'accueil médical** transforme la prescription en une liste de soins, avec leurs durées et les contre-indications à respecter : c'est ce qui alimente le planning.",
        "**Le planning des soins** attribue chaque jour les créneaux de chaque curiste, sur les bons postes, sans trou ni conflit, et les envoie au curiste. **Le séjour** gère les repas, les changements et les soins ajoutés à la demande, payés à part. **Le départ**, enfin, solde la facture, remet un bilan et propose la cure suivante, souvent à la même période l'année d'après.",
      ] },
      { heading: "Ce qu'il faut construire : le planning des soins d'abord", body: [
        "La tentation est de commencer par un site de réservation des chambres. C'est utile, mais une station est d'abord limitée par ses postes de soins.",
      ], visual: 'stack', after: [
        "**Le planning des soins** est un problème de calcul. Chaque poste a des heures d'ouverture et une durée de soin ; certains soins demandent un soignant précis, d'autres un ordre ; un curiste ne peut pas être dans deux bassins à la fois, et certains soins doivent être espacés. Le moteur place les soins de chaque curiste pour la journée, remplit les trous avec la liste d'attente, et recalcule quand un curiste annule ou qu'un poste ferme. **Le soignant voit son tableau de la journée sur une tablette ; le curiste reçoit le sien par SMS.**",
        "**Le dossier de cure** garde la prescription, les contre-indications et les soins réalisés, cochés chaque jour : aucun soin payé n'est oublié. Ce sont des données de santé, à protéger selon la loi 18-07 et à réserver au personnel autorisé. **Les chambres** suivent la logique d'un [logiciel hôtelier](/blog/logiciel-hotel-reservation-hebergement-algerie-2026/), avec un détail de plus : une cure dure souvent plusieurs semaines, et un départ anticipé libère une chambre qu'il faut pouvoir revendre.",
      ] },
      { heading: 'Ce que vaut un planning sans trou', body: [
        "Un exemple sur des hypothèses, à refaire avec vos postes : douze postes de soins ouverts dix heures par jour, des soins de vingt minutes, quatre soins par curiste et par jour.",
      ], visual: 'capacite', after: [
        "Douze postes, dix heures, trois soins par heure : **360 soins possibles par jour**. Si un planning tenu à la main laisse 20 % des créneaux vides, par absences non signalées, trous entre deux soins ou postes mal attribués, la station soigne 72 curistes par jour. Si un planning calculé remplit ces trous, elle en soigne 90 : **18 de plus par jour, soit 25 %, sans construire un seul poste**. Nous ne connaissons pas de mesure publique des créneaux perdus dans les stations algériennes ; ces chiffres sont des hypothèses pour montrer l'ordre de grandeur.",
        "La vérification se fait sur une semaine de registres : comptez, poste par poste, les créneaux réellement utilisés et comparez-les aux créneaux possibles. L'écart est la capacité que la station possède déjà et n'utilise pas. Pour un nouveau projet, c'est l'argument pour ouvrir avec un planning calculé plutôt que de corriger après la première saison.",
      ] },
      { heading: 'Six pertes, six parades', body: [
        "Une station perd rarement de l'argent par manque de curistes en pleine saison. Elle en perd par six portes.",
      ], visual: 'pertes', after: [
        "**Le créneau vide** est la perte la plus fréquente et la plus facile à corriger : un rappel la veille, une liste d'attente, et un créneau libéré réattribué dans la minute. **Le hammam saturé** est la plus visible : deux heures d'attente un vendredi font repartir des familles qui ne reviendront pas. Des billets par créneau horaire, vendus en ligne ou à la caisse, avec l'affluence affichée, lissent la journée.",
        "**L'été plein et l'hiver vide** est la perte la plus coûteuse sur l'année. Les parades sont commerciales autant que techniques : séjours courts hors saison, offres pour les groupes, conventions avec des entreprises pour leurs salariés. Elles supposent toutes de savoir, en temps réel, ce qui est libre, et de pouvoir le vendre en ligne.",
      ] },
      { heading: 'Les cures offertes par la diaspora', body: [
        "Beaucoup d'Algériens de France ont des parents âgés en Algérie, et une cure thermale fait partie des séjours qu'on offre. Le besoin est précis : réserver depuis la France, choisir des dates, payer en euros, et savoir que le parent est bien arrivé et suit ses soins.",
        "Le mécanisme rejoint ce que nous décrivons pour [l'équivalent de Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) : un paiement par carte en euros qui crédite le séjour d'une personne précise, un reçu pour celui qui paie et une confirmation pour celui qui part en cure. L'encaissement en devises se règle avec la banque de la station avant d'ouvrir ce service. Pour un groupe ou une plateforme, c'est une clientèle qui réserve tôt et revient chaque année.",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles possibles, de la station qui équipe ses postes à la plateforme qui réserve pour plusieurs.",
      ], visual: 'models', after: [
        "**Une station qui fonctionne déjà** est le point de départ le plus sûr : les registres existent, les créneaux perdus se mesurent, et l'effet du planning se voit en quelques semaines. **Un nouveau projet privé** a un avantage rare : ouvrir avec le bon outil plutôt que de changer les habitudes d'une équipe. Il faut seulement que l'outil soit prêt quand la station ouvre, et pas six mois après.",
        "**Le hammam traditionnel** est le cas le plus simple et le plus rapide : des billets par créneau et une caisse suffisent à réduire les files. **La plateforme multi-stations** est tentante, mais elle exige des disponibilités réelles, synchronisées avec chaque station, sans quoi elle vend des chambres et des créneaux qui n'existent plus. Les principes de la réservation de soins rejoignent ceux des [salons et instituts](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/).",
      ] },
      { heading: 'Le calendrier pour 2027', body: [
        "Une douzaine de semaines entre le cadrage et un pilote sur une aile, pour être prêt avant la période la plus chargée.",
      ], visual: 'calendrier', after: [
        "**Novembre : le cadrage**, la liste des postes, des soins, de leurs durées et des soignants. **Novembre à janvier : la réservation et les chambres**, puis **le moteur de planning**, testé sur une vraie semaine de prescriptions. **Février et mars : le pilote sur une aile**, avec de vrais curistes et des créneaux mesurés chaque jour.",
        "**Mars et avril : les billets du hammam**, la caisse et les rappels. **L'objectif est d'arriver rodé à la période la plus chargée de votre station**, que vos registres situent, souvent les week-ends et les vacances, et l'été pour beaucoup. Ces durées sont cohérentes avec celles que nous détaillons dans [combien de temps pour développer une application ou une plateforme](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'Ce qui fait échouer ce type de projet', body: [], list: [
        "**Commencer par le site des chambres.** Les lits pleins ne servent à rien si les postes de soins ont des trous.",
        "**Un planning en tableau.** Un tableur ne sait pas éviter les conflits ni réattribuer un créneau libéré.",
        "**Oublier les soignants.** Le planning doit être lisible sur une tablette au poste, sinon il ne sera pas suivi.",
        "**Des données de santé mal protégées.** Prescriptions et contre-indications réservées au personnel autorisé.",
        "**Un hammam sans créneaux.** Les files du vendredi coûtent des clients qui ne reviennent pas.",
        "**Un outil prêt après l'ouverture.** Pour un nouveau projet, l'outil doit être là le premier jour.",
        "**Les comptes au nom du développeur.** Serveur, domaine, données et compte de paiement au nom de la station dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Combien de stations thermales y a-t-il en Algérie ?", a: "Selon les chiffres présentés par la ministre du Tourisme en octobre 2026, 36 stations thermales pour 5 618 lits, 28 hammams traditionnels dans 18 wilayas, et 282 sources thermales dans 40 wilayas. Les stations ont reçu 312 736 curistes en 2025, et 14 projets en cours doivent ajouter 2 366 lits." },
        { q: "Pourquoi le planning des soins compte-t-il plus que la réservation des chambres ?", a: "Parce que la capacité réelle d'une station est limitée par ses postes de soins. Un planning qui laisse des créneaux vides soigne moins de curistes par jour, même avec toutes les chambres occupées. Un planning calculé remplit ces trous et réattribue les créneaux libérés." },
        { q: "Un curiste peut-il recevoir son planning sur son téléphone ?", a: "Oui : par SMS ou dans une application, avec ses soins de la journée, leurs horaires et leurs lieux, et une notification à chaque changement. Les curistes âgés peuvent aussi recevoir une feuille imprimée à l'accueil chaque matin." },
        { q: "Une famille en France peut-elle réserver et payer une cure pour un parent en Algérie ?", a: "C'est possible si la station accepte un paiement par carte en euros, crédité au séjour d'une personne précise, avec un reçu pour celui qui paie. L'encaissement en devises se règle avec la banque de la station avant d'ouvrir ce service." },
        { q: "Faut-il une application mobile ?", a: "Pas au début. Une réservation en ligne, des SMS et une tablette au poste de soins suffisent. L'application vient si les curistes reviennent chaque année ; nous détaillons ces choix dans [créer une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "Combien de temps pour être prêt ?", a: "Environ douze semaines entre le cadrage et un pilote sur une aile, avec la réservation, les chambres et le planning des soins. Les billets du hammam et la caisse suivent sur un à deux mois." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Les lits disent combien de curistes dorment sur place ; le planning dit combien sont soignés." },
      { after: 3, text: "L'écart entre les créneaux possibles et les créneaux utilisés est une capacité que la station possède déjà." },
    ],
    cta: { eyebrow: 'Décrivez votre station', title: "Station thermale, nouveau projet, hammam traditionnel ou plateforme de réservation à lancer : le nombre de lits et de postes de soins, comment vous réservez et planifiez aujourd'hui, et la date visée. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des systèmes de réservation, des moteurs de planning de soins, des billetteries par créneau, des caisses et des tableaux de bord pour les stations thermales et les établissements de bien-être algériens, en arabe, en français et en anglais. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/', kind: '2027', name: 'Agence de tourisme saharien en 2027' },
      { href: '/blog/logiciel-hotel-reservation-hebergement-algerie-2026/', kind: 'Hôtellerie', name: 'Logiciel hôtelier et réservation en Algérie' },
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'Série #09', name: "Créer l'équivalent de Planity en Algérie en 2027" },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'Série #06', name: "Créer l'équivalent de Booking en Algérie en 2027" },
    ] },
  },
  en: {
    kind: 'Series · Seen in France #15', title: 'Thermal spas in Algeria in 2027: booking a cure online, scheduling treatments with no gaps or clashes, and filling beds off-season.',
    dek: "In France a thermal cure is booked online and every patient receives a treatment schedule for their 18 days. In Algeria thermal spas received more than 312,000 patients in 2025 and traditional hammams nearly 2.8 million visitors, with 14 projects under way that will add more than 2,300 beds. Yet treatments are still often scheduled in a notebook, and that is where real capacity is lost. What a cure must hold at each moment, what to build first, what a gap-free schedule is worth, six losses and their counters, and a calendar for 2027.",
    publishedAt: 'November 2026', readTime: '11 min read', author: 'Symloop', about: ['Thermal spas', 'Booking', 'Scheduling', 'Tourism', 'Algeria 2027'],
    intro: [
      "**Short answer.** For a thermal spa in Algeria in 2027, the piece that matters most is not the booking site, it is **the treatment schedule**. Beds say how many patients sleep on site; treatment stations, baths, showers, mud, massages, and their schedule say how many are actually treated each day. An engine that assigns each patient’s slots with no gaps or clashes, reassigns a freed slot and tells the patient by SMS can noticeably raise the number of patients treated without adding a single station. Around it: online booking with a deposit, a cure file that keeps the prescription and contraindications, time-slot tickets for the hammam, and a till.",
      "This guide is the fifteenth in the series “Seen in France, to build in Algeria”, after [coach operators](/blog/transporteur-voyageurs-algerie-2027-billets-en-ligne-caisse-receveur-colis/) and [gyms](/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/). It is written for public and private thermal spas, investors in new projects, traditional hammams, and the diaspora founder who wants to build a booking platform for these establishments. It does not cover medical prescriptions, which are a matter for doctors.",
    ],
    sections: [
      { heading: 'What the 2025 and 2026 figures say', body: [
        "According to figures presented by the Tourism Minister and reported by Algérie Eco in October 2026, Algeria has **282 thermal springs in 40 wilayas**, **36 thermal spas with 5,618 beds** and 2,564 jobs, and 28 traditional hammams in 18 wilayas. The spas received **312,736 patients in 2025**, and the traditional hammams **2,826,403 visitors**; in the first half of 2026, 176,115 patients and 1,166,469 visitors. The public group alone has 2,997 beds. And **14 projects are under way**, due to add 2,366 beds and 1,155 jobs.",
        "In France, for comparison, the national council of thermal establishments counted 467,874 reimbursed patients in 2025, for 18-day cures, with online booking and a treatment schedule given to each patient. **The gap is not in the resource, Algeria has its springs; it is in organisation.** A spa whose beds are full but whose treatment stations have gaps loses patients every day, and a new project that opens without a tool repeats those losses from its first summer.",
      ] },
      { heading: 'A cure that holds, in six moments', body: [
        "The system has to hold each of these six moments. The first two happen before arrival; the next four, every day of the stay.",
      ], visual: 'journey', after: [
        "**The request** records the prescription, preferred period, room and any companion. **Booking** holds dates and a room against a deposit, online or by phone, with written confirmation. **Medical intake** turns the prescription into a list of treatments, with their durations and the contraindications to respect: that is what feeds the schedule.",
        "**The treatment schedule** assigns each patient’s slots every day, on the right stations, with no gaps or clashes, and sends them to the patient. **The stay** handles meals, changes and extra treatments on request, paid separately. **Departure**, finally, settles the invoice, gives a report and offers the next cure, often in the same period the following year.",
      ] },
      { heading: 'What to build: the treatment schedule first', body: [
        "The temptation is to start with a room-booking website. It is useful, but a spa is limited first by its treatment stations.",
      ], visual: 'stack', after: [
        "**The treatment schedule** is a calculation problem. Each station has opening hours and a treatment duration; some treatments need a specific therapist, others an order; a patient cannot be in two baths at once, and some treatments must be spaced out. The engine places each patient’s treatments for the day, fills gaps from the waiting list, and recalculates when a patient cancels or a station closes. **The therapist sees the day’s board on a tablet; the patient gets theirs by SMS.**",
        "**The cure file** keeps the prescription, contraindications and treatments done, ticked daily: no paid treatment is forgotten. This is health data, to be protected under law 18-07 and restricted to authorised staff. **Rooms** follow the logic of [hotel software](/blog/logiciel-hotel-reservation-hebergement-algerie-2026/), with one more detail: a cure often lasts several weeks, and an early departure frees a room that must be resold.",
      ] },
      { heading: 'What a gap-free schedule is worth', body: [
        "An example on assumptions, to redo with your stations: twelve treatment stations open ten hours a day, twenty-minute treatments, four treatments per patient per day.",
      ], visual: 'capacite', after: [
        "Twelve stations, ten hours, three treatments an hour: **360 possible treatments a day**. If a hand-kept schedule leaves 20% of slots empty, through unreported absences, gaps between treatments or badly assigned stations, the spa treats 72 patients a day. If a calculated schedule fills those gaps, it treats 90: **18 more a day, 25%, without building a single station**. We know of no public measurement of lost slots in Algerian spas; these figures are assumptions to show the order of magnitude.",
        "The check uses one week of registers: count, station by station, the slots actually used and compare them with the slots possible. The gap is capacity the spa already has and does not use. For a new project, it is the argument for opening with a calculated schedule rather than fixing things after the first season.",
      ] },
      { heading: 'Six losses, six counters', body: [
        "A spa rarely loses money for lack of patients in peak season. It loses money through six doors.",
      ], visual: 'pertes', after: [
        "**The empty slot** is the most frequent loss and the easiest to fix: a reminder the day before, a waiting list, and a freed slot reassigned within the minute. **The saturated hammam** is the most visible: a two-hour wait on a Friday sends families away who will not come back. Time-slot tickets, sold online or at the till, with the crowd level shown, smooth the day.",
        "**Full in summer, empty in winter** is the costliest loss over the year. The counters are commercial as much as technical: short off-season stays, group offers, agreements with companies for their staff. All of them assume you know, in real time, what is free, and can sell it online.",
      ] },
      { heading: 'Cures paid by the diaspora', body: [
        "Many Algerians in France have elderly parents in Algeria, and a thermal cure is one of the stays people give. The need is precise: book from France, choose dates, pay in euros, and know that the parent has arrived and is following their treatments.",
        "The mechanism matches what we describe for [the Booking of Algeria](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/): a euro card payment credited to a specific person’s stay, a receipt for the payer and a confirmation for the person going on the cure. Receiving foreign currency is arranged with the spa’s bank before opening this service. For a group or platform, it is a clientele that books early and returns every year.",
      ] },
      { heading: 'Which model to build', body: [
        "Six possible models, from the spa equipping its stations to the platform booking for several.",
      ], visual: 'models', after: [
        "**A spa already operating** is the safest starting point: the registers exist, lost slots can be measured, and the schedule’s effect shows within weeks. **A new private project** has a rare advantage: opening with the right tool rather than changing a team’s habits. The tool just has to be ready when the spa opens, not six months later.",
        "**The traditional hammam** is the simplest and quickest case: time-slot tickets and a till are enough to shorten queues. **A multi-spa platform** is tempting, but it needs real availability, synced with each spa, or it sells rooms and slots that no longer exist. The principles of booking treatments match those of [salons and beauty institutes](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/).",
      ] },
      { heading: 'The calendar for 2027', body: [
        "About twelve weeks between scoping and a pilot on one wing, to be ready before the busiest period.",
      ], visual: 'calendrier', after: [
        "**November: scoping**, the list of stations, treatments, durations and therapists. **November to January: booking and rooms**, then **the scheduling engine**, tested on a real week of prescriptions. **February and March: the pilot on one wing**, with real patients and slots measured every day.",
        "**March and April: hammam tickets**, the till and reminders. **The aim is to arrive run in at your spa’s busiest period**, which your registers will show, often weekends and holidays, and summer for many. These durations are consistent with those we set out in [how long it takes to build an app or platform](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with the room website.** Full beds are useless if the treatment stations have gaps.",
        "**A spreadsheet schedule.** A spreadsheet cannot avoid clashes or reassign a freed slot.",
        "**Forgetting the therapists.** The schedule must be readable on a tablet at the station, or it will not be followed.",
        "**Poorly protected health data.** Prescriptions and contraindications restricted to authorised staff.",
        "**A hammam with no time slots.** Friday queues cost customers who do not come back.",
        "**A tool ready after opening.** For a new project, the tool has to be there on day one.",
        "**Accounts in the developer’s name.** Server, domain, data and payment account in the spa’s name from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'How many thermal spas are there in Algeria?', a: "According to figures presented by the Tourism Minister in October 2026, 36 thermal spas with 5,618 beds, 28 traditional hammams in 18 wilayas, and 282 thermal springs in 40 wilayas. The spas received 312,736 patients in 2025, and 14 projects under way are due to add 2,366 beds." },
        { q: 'Why does the treatment schedule matter more than room booking?', a: "Because a spa’s real capacity is limited by its treatment stations. A schedule that leaves slots empty treats fewer patients a day, even with every room occupied. A calculated schedule fills those gaps and reassigns freed slots." },
        { q: 'Can a patient receive their schedule on their phone?', a: "Yes: by SMS or in an app, with the day’s treatments, times and places, and a notification at each change. Older patients can also receive a printed sheet at reception every morning." },
        { q: 'Can a family in France book and pay for a cure for a parent in Algeria?', a: "It is possible if the spa accepts a euro card payment, credited to a specific person’s stay, with a receipt for the payer. Receiving foreign currency is arranged with the spa’s bank before opening this service." },
        { q: 'Is a mobile app needed?', a: "Not at first. Online booking, SMS and a tablet at the treatment station are enough. The app comes if patients return every year; we cover those choices in [building a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: 'How long does it take to be ready?', a: "About twelve weeks between scoping and a pilot on one wing, with booking, rooms and the treatment schedule. Hammam tickets and the till follow over one to two months." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'Beds say how many patients sleep on site; the schedule says how many are treated.' },
      { after: 3, text: 'The gap between possible and used slots is capacity the spa already has.' },
    ],
    cta: { eyebrow: 'Tell us about your spa', title: 'Thermal spa, new project, traditional hammam or booking platform to launch: the number of beds and treatment stations, how you book and schedule today, and the target date. We send back the scope, the calendar and the total price, in writing, before we start.', body: 'Symloop builds booking systems, treatment scheduling engines, time-slot ticketing, tills and dashboards for Algerian thermal spas and wellness establishments, in Arabic, French and English. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/', kind: '2027', name: 'Saharan tour agencies in 2027' },
      { href: '/blog/logiciel-hotel-reservation-hebergement-algerie-2026/', kind: 'Hospitality', name: 'Hotel and booking software in Algeria' },
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'Series #09', name: 'Building the Planity of Algeria in 2027' },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'Series #06', name: 'Building the Booking of Algeria in 2027' },
    ] },
  },
  ar: {
    kind: 'سلسلة · رأيناه في فرنسا #15', title: 'المحطة الحموية في الجزائر سنة 2027: حجز العلاج عبر الإنترنت، تخطيط الحصص دون فراغ ولا تداخل، وملء الأسرّة خارج الموسم.',
    dek: 'في فرنسا يُحجز العلاج الحموي عبر الإنترنت ويتلقّى كل معالَج برنامج حصصه لأيامه الثمانية عشر. وفي الجزائر استقبلت المحطات الحموية أكثر من 312000 معالَج سنة 2025، والحمّامات التقليدية نحو 2,8 مليون زائر، مع 14 مشروعاً جارياً سيضيف أكثر من 2300 سرير. لكن الحصص لا تزال تُخطَّط غالباً في دفتر، وهناك تضيع السعة الحقيقية. ما يجب أن يصمد عنده العلاج في كل لحظة، وما يُبنى أولاً، وكم يساوي تخطيط بلا فراغ، وست خسائر وردودها، وجدول زمني لسنة 2027.',
    publishedAt: 'نوفمبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['العلاج بالمياه الحموية', 'الحجز', 'التخطيط', 'السياحة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** بالنسبة لمحطة حموية في الجزائر سنة 2027، القطعة الأهم ليست موقع الحجز، بل **تخطيط الحصص**. الأسرّة تقول كم معالَجاً ينام في المكان؛ أما مواقع العلاج، الأحواض والرشاشات والطين والتدليك، وتخطيطها فتقول كم منهم يُعالَج فعلاً كل يوم. محرّك يخصّص مواعيد كل معالَج دون فراغ ولا تداخل، ويعيد تخصيص الموعد المحرَّر، ويُعلم المعالَج برسالة قصيرة، يمكنه رفع عدد المعالَجين بشكل ملموس دون إضافة موقع واحد. وحوله: حجز عبر الإنترنت بعربون، وملف علاج يحفظ الوصفة وموانع الاستعمال، وتذاكر بالمواعيد للحمّام، وصندوق.",
      "هذا الدليل هو الخامس عشر في سلسلة «رأيناه في فرنسا، لنبنيه في الجزائر»، بعد [ناقلي المسافرين](/blog/transporteur-voyageurs-algerie-2027-billets-en-ligne-caisse-receveur-colis/) و[قاعات الرياضة](/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/). وهو موجّه للمحطات الحموية العمومية والخاصة، ولمستثمري المشاريع الجديدة، وللحمّامات التقليدية، وللمؤسس من الجالية الذي يريد بناء منصة حجز لهذه المؤسسات. ولا يتناول الوصفات الطبية التي هي من اختصاص الأطباء.",
    ],
    sections: [
      { heading: 'ما تقوله أرقام 2025 و2026', body: [
        "حسب الأرقام التي قدّمتها وزيرة السياحة ونقلتها «الجزائر إيكو» في أكتوبر 2026، تضم الجزائر **282 منبعاً حموياً في 40 ولاية**، و**36 محطة حموية بـ5618 سريراً** و2564 منصب عمل، و28 حمّاماً تقليدياً في 18 ولاية. واستقبلت المحطات **312736 معالَجاً سنة 2025**، والحمّامات التقليدية **2826403 زائرين**؛ وفي السداسي الأول من 2026، 176115 معالَجاً و1166469 زائراً. ويضم المجمّع العمومي وحده 2997 سريراً. و**14 مشروعاً جارياً** يُنتظر أن تضيف 2366 سريراً و1155 منصب عمل.",
        "وفي فرنسا، للمقارنة، أحصى المجلس الوطني للمؤسسات الحموية 467874 معالَجاً مشمولاً بالتعويض سنة 2025، لعلاجات مدتها 18 يوماً، بحجز عبر الإنترنت وبرنامج حصص يُسلَّم لكل معالَج. **الفارق ليس في المورد، فالجزائر لها منابعها؛ بل في التنظيم.** المحطة التي أسرّتها ممتلئة ومواقع علاجها فيها فراغات تخسر معالَجين كل يوم، والمشروع الجديد الذي يفتح دون أداة يكرّر هذه الخسائر منذ صيفه الأول.",
      ] },
      { heading: 'علاج حموي يصمد، في ست لحظات', body: [
        "على النظام أن يصمد في كل لحظة من هذه اللحظات الست. الأوليان قبل الوصول؛ والأربع التالية كل يوم من أيام الإقامة.",
      ], visual: 'journey', after: [
        "**الطلب** يُدوَّن بالوصفة والفترة المرغوبة والغرفة والمرافق إن وُجد. **الحجز** يُثبّت التواريخ والغرفة مقابل عربون، عبر الإنترنت أو بالهاتف، مع تأكيد مكتوب. **الاستقبال الطبي** يحوّل الوصفة إلى قائمة حصص بمددها وموانع الاستعمال الواجب احترامها: وهذا ما يغذّي التخطيط.",
        "**تخطيط الحصص** يخصّص يومياً مواعيد كل معالَج على المواقع الصحيحة، دون فراغ ولا تداخل، ويرسلها إليه. **الإقامة** تسيّر الوجبات والتغييرات والحصص الإضافية عند الطلب، مدفوعة على حدة. وأخيراً **المغادرة** تسوّي الفاتورة وتسلّم حصيلة وتقترح العلاج التالي، غالباً في الفترة نفسها من السنة القادمة.",
      ] },
      { heading: 'ما يجب بناؤه: تخطيط الحصص أولاً', body: [
        "الإغراء هو البدء بموقع لحجز الغرف. إنه مفيد، لكن المحطة محدودة أولاً بمواقع علاجها.",
      ], visual: 'stack', after: [
        "**تخطيط الحصص** مسألة حساب. لكل موقع ساعات عمل ومدة حصة؛ وبعض الحصص تحتاج معالِجاً محدّداً، وبعضها ترتيباً؛ ولا يمكن للمعالَج أن يكون في حوضين في آن واحد، وبعض الحصص يجب أن تتباعد. يضع المحرّك حصص كل معالَج لليوم، ويملأ الفراغات من قائمة الانتظار، ويعيد الحساب حين يُلغي معالَج أو يُغلق موقع. **يرى المعالِج جدول يومه على لوحة رقمية؛ ويتلقّى المعالَج جدوله برسالة قصيرة.**",
        "**ملف العلاج** يحفظ الوصفة وموانع الاستعمال والحصص المنجزة، المؤشَّر عليها يومياً: لا تُنسى أي حصة مدفوعة. إنها معطيات صحية تُحمى وفق القانون 18-07 ولا يطّلع عليها إلا المستخدمون المرخَّص لهم. و**الغرف** تتبع منطق [برنامج الفنادق](/blog/logiciel-hotel-reservation-hebergement-algerie-2026/)، مع تفصيل إضافي: العلاج يدوم غالباً عدة أسابيع، والمغادرة المبكرة تحرّر غرفة يجب أن يُعاد بيعها.",
      ] },
      { heading: 'كم يساوي تخطيط بلا فراغ', body: [
        "مثال مبني على فرضيات، أعده بمواقعك: اثنا عشر موقع علاج مفتوحة عشر ساعات يومياً، حصص من عشرين دقيقة، وأربع حصص لكل معالَج يومياً.",
      ], visual: 'capacite', after: [
        "اثنا عشر موقعاً، عشر ساعات، ثلاث حصص في الساعة: **360 حصة ممكنة يومياً**. إذا ترك التخطيط اليدوي 20 % من المواعيد فارغاً، بغيابات غير مُبلَّغ عنها أو فراغات بين حصتين أو مواقع خاطئة التخصيص، تعالج المحطة 72 معالَجاً يومياً. وإذا ملأ تخطيط محسوب هذه الفراغات تعالج 90: **18 معالَجاً إضافياً يومياً، أي 25 %، دون بناء موقع واحد**. لا نعرف قياساً علنياً للمواعيد الضائعة في المحطات الجزائرية؛ هذه الأرقام فرضيات لإظهار حجم الأمر.",
        "يتم التحقق على سجلات أسبوع واحد: عُدّ، موقعاً موقعاً، المواعيد المستعملة فعلاً وقارنها بالمواعيد الممكنة. الفارق سعة تملكها المحطة أصلاً ولا تستعملها. وبالنسبة لمشروع جديد، إنه الحجة للافتتاح بتخطيط محسوب بدل التصحيح بعد الموسم الأول.",
      ] },
      { heading: 'ست خسائر وستة ردود', body: [
        "نادراً ما تخسر المحطة المال لقلة المعالَجين في الموسم. إنها تخسره من ستة أبواب.",
      ], visual: 'pertes', after: [
        "**الموعد الفارغ** أكثر الخسائر تكراراً وأسهلها إصلاحاً: تذكير في اليوم السابق، وقائمة انتظار، وموعد محرَّر يُعاد تخصيصه في الدقيقة نفسها. و**الحمّام المكتظ** أكثرها ظهوراً: ساعتا انتظار يوم الجمعة تجعل عائلات تنصرف ولا تعود. وتذاكر بالمواعيد، تُباع عبر الإنترنت أو في الصندوق مع عرض الازدحام، تُوازن اليوم.",
        "**الصيف الممتلئ والشتاء الفارغ** أكثر الخسائر كلفة على مدار السنة. والردود تجارية بقدر ما هي تقنية: إقامات قصيرة خارج الموسم، وعروض للأفواج، واتفاقيات مع مؤسسات لفائدة عمالها. وكلها تفترض معرفة ما هو شاغر في الوقت الحقيقي، والقدرة على بيعه عبر الإنترنت.",
      ] },
      { heading: 'علاج تهديه الجالية', body: [
        "لكثير من الجزائريين في فرنسا آباء مسنّون في الجزائر، والعلاج الحموي من الإقامات التي تُهدى. والحاجة محدّدة: الحجز من فرنسا، واختيار التواريخ، والدفع باليورو، والاطمئنان إلى أن الوالد وصل ويتابع حصصه.",
        "الآلية تلتقي مع ما نصفه في [مقابل Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/): دفع بالبطاقة باليورو يُضاف إلى إقامة شخص محدّد، ووصل لمن يدفع، وتأكيد لمن يذهب للعلاج. ويُضبط تحصيل العملة الصعبة مع بنك المحطة قبل فتح هذه الخدمة. وبالنسبة لمجموعة أو منصة، إنها زبائن يحجزون مبكراً ويعودون كل سنة.",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج ممكنة، من المحطة التي تجهّز مواقعها إلى المنصة التي تحجز لعدة محطات.",
      ], visual: 'models', after: [
        "**محطة تعمل أصلاً** هي نقطة الانطلاق الأكثر أماناً: السجلات موجودة، والمواعيد الضائعة تُقاس، وأثر التخطيط يظهر خلال أسابيع. و**المشروع الخاص الجديد** له ميزة نادرة: الافتتاح بالأداة الصحيحة بدل تغيير عادات فريق. يكفي أن تكون الأداة جاهزة حين تفتح المحطة، لا بعد ستة أشهر.",
        "**الحمّام التقليدي** الحالة الأبسط والأسرع: تذاكر بالمواعيد وصندوق يكفيان لتقليص الطوابير. و**المنصة متعددة المحطات** مغرية، لكنها تحتاج توفّراً حقيقياً متزامناً مع كل محطة، وإلا باعت غرفاً ومواعيد لم تعد موجودة. ومبادئ حجز الحصص تلتقي مع مبادئ [الصالونات ومعاهد التجميل](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/).",
      ] },
      { heading: 'الجدول الزمني لسنة 2027', body: [
        "نحو اثني عشر أسبوعاً بين التأطير وتجربة على جناح واحد، للجاهزية قبل الفترة الأكثر ازدحاماً.",
      ], visual: 'calendrier', after: [
        "**نوفمبر: التأطير**، قائمة المواقع والحصص ومددها والمعالِجين. **من نوفمبر إلى جانفي: الحجز والغرف**، ثم **محرّك التخطيط** مجرَّباً على أسبوع حقيقي من الوصفات. **فيفري ومارس: التجربة على جناح واحد** بمعالَجين حقيقيين ومواعيد تُقاس يومياً.",
        "**مارس وأفريل: تذاكر الحمّام** والصندوق والتذكيرات. **والهدف أن تصل المحطة مجرَّبة إلى فترتها الأكثر ازدحاماً**، التي تحدّدها سجلاتك، وكثيراً ما تكون نهايات الأسبوع والعطل، والصيف لدى كثير منها. وهذه المدد متّسقة مع ما نفصّله في [كم من الوقت لتطوير تطبيق أو منصة](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بموقع الغرف.** الأسرّة الممتلئة لا تنفع إذا كانت في مواقع العلاج فراغات.",
        "**تخطيط في جدول.** الجدول لا يعرف تفادي التداخل ولا إعادة تخصيص موعد محرَّر.",
        "**نسيان المعالِجين.** يجب أن يُقرأ التخطيط على لوحة رقمية عند الموقع، وإلا لن يُتّبع.",
        "**معطيات صحية سيئة الحماية.** الوصفات وموانع الاستعمال للمستخدمين المرخَّص لهم فقط.",
        "**حمّام بلا مواعيد.** طوابير الجمعة تكلّف زبائن لا يعودون.",
        "**أداة جاهزة بعد الافتتاح.** في المشروع الجديد يجب أن تكون الأداة حاضرة منذ اليوم الأول.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والبيانات وحساب الدفع باسم المحطة منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "كم عدد المحطات الحموية في الجزائر؟", a: "حسب الأرقام التي قدّمتها وزيرة السياحة في أكتوبر 2026: 36 محطة حموية بـ5618 سريراً، و28 حمّاماً تقليدياً في 18 ولاية، و282 منبعاً حموياً في 40 ولاية. واستقبلت المحطات 312736 معالَجاً سنة 2025، و14 مشروعاً جارياً سيضيف 2366 سريراً." },
        { q: "لماذا يهمّ تخطيط الحصص أكثر من حجز الغرف؟", a: "لأن السعة الحقيقية للمحطة محدودة بمواقع علاجها. التخطيط الذي يترك مواعيد فارغة يعالج معالَجين أقل يومياً، حتى مع امتلاء كل الغرف. والتخطيط المحسوب يملأ هذه الفراغات ويعيد تخصيص المواعيد المحرَّرة." },
        { q: "هل يمكن أن يتلقّى المعالَج برنامجه على هاتفه؟", a: "نعم: برسالة قصيرة أو في تطبيق، بحصص اليوم وأوقاتها وأماكنها، وإشعار عند كل تغيير. ويمكن للمعالَجين المسنّين أيضاً تلقّي ورقة مطبوعة في الاستقبال كل صباح." },
        { q: "هل تستطيع عائلة في فرنسا حجز علاج لأحد الوالدين في الجزائر ودفعه؟", a: "ذلك ممكن إذا قبلت المحطة الدفع بالبطاقة باليورو، مُضافاً إلى إقامة شخص محدّد، مع وصل لمن يدفع. ويُضبط تحصيل العملة الصعبة مع بنك المحطة قبل فتح هذه الخدمة." },
        { q: "هل يلزم تطبيق للهاتف؟", a: "ليس في البداية. يكفي الحجز عبر الإنترنت والرسائل القصيرة ولوحة رقمية عند موقع العلاج. ويأتي التطبيق إذا عاد المعالَجون كل سنة؛ نفصّل هذه الخيارات في [إنشاء تطبيق للهاتف سنة 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "كم من الوقت يلزم للجاهزية؟", a: "نحو اثني عشر أسبوعاً بين التأطير وتجربة على جناح واحد، بالحجز والغرف وتخطيط الحصص. ثم تأتي تذاكر الحمّام والصندوق خلال شهر إلى شهرين." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الأسرّة تقول كم معالَجاً ينام في المكان؛ والتخطيط يقول كم منهم يُعالَج." },
      { after: 3, text: "الفارق بين المواعيد الممكنة والمستعملة سعة تملكها المحطة أصلاً." },
    ],
    cta: { eyebrow: 'صف لنا محطتك', title: "محطة حموية، أو مشروع جديد، أو حمّام تقليدي، أو منصة حجز للإطلاق: عدد الأسرّة ومواقع العلاج، وكيف تحجز وتخطّط اليوم، والتاريخ المستهدف. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop أنظمة الحجز ومحرّكات تخطيط الحصص والتذاكر بالمواعيد والصناديق ولوحات القيادة للمحطات الحموية ومؤسسات الراحة الجزائرية، بالعربية والفرنسية والإنجليزية. مهندسون ذوو خبرة في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، والخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/agence-tourisme-saharien-algerie-2027-reservation-en-ligne-circuits-djanet/', kind: '2027', name: 'وكالة السياحة الصحراوية سنة 2027' },
      { href: '/blog/logiciel-hotel-reservation-hebergement-algerie-2026/', kind: 'فندقة', name: 'برنامج الفنادق والحجز في الجزائر' },
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'سلسلة #09', name: 'إنشاء مقابل Planity في الجزائر سنة 2027' },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'سلسلة #06', name: 'إنشاء مقابل Booking في الجزائر سنة 2027' },
    ] },
  },
};

const KEYWORDS = "station thermale algérie 2027, réservation cure thermale algérie, logiciel station thermale, planning des soins thermaux, hammam réservation en ligne algérie, thermalisme algérie chiffres 2025, cure thermale parents diaspora, thermal spa booking algeria, الحمامات المعدنية الجزائر حجز";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
