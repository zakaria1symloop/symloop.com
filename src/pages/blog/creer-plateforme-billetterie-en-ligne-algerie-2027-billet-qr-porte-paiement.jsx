import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement.mjs';

const SLUG = 'creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement';
const FIGURES = ['journey', 'stack', 'porte', 'fraude', 'saison', 'models'];
const DATE = '2026-11-01';

const CONTENT = {
  fr: {
    kind: 'Série · Vu en France #11', title: "Créer une billetterie en ligne en Algérie en 2027 : le billet signé, la porte qui scanne hors ligne, le paiement en dinars et en euros, le reversement à l'organisateur.",
    dek: "En France, on achète sa place sur Weezevent ou Shotgun, le billet arrive sur le téléphone, et la porte le lit en une seconde. En Algérie, les ventes en ligne existent déjà, mais les pannes à l'ouverture, les retraits au guichet et les faux concerts sur Instagram montrent où ça casse. Ce qu'une billetterie doit tenir à chaque moment, ce qu'il faut construire en premier, le calcul des files à la porte, six fraudes et leur parade, et un calendrier jusqu'à l'été 2027.",
    publishedAt: 'Novembre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Billetterie en ligne', 'Contrôle d’accès', 'Événementiel', 'Diaspora', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une billetterie en ligne en Algérie en 2027 ne se juge pas à sa page d'accueil : elle se juge **à la porte et au reversement**. Il faut un billet nominatif avec un QR **signé**, que n'importe quel téléphone de contrôle peut vérifier sans réseau ; une page officielle où chacun peut vérifier un billet avant de l'acheter ; une application de porte qui laisse passer dix personnes par minute et par file même quand le réseau mobile sature ; et un reversement à l'organisateur qui rapproche les ventes des entrées réelles. Le catalogue d'événements, lui, est la partie la plus facile.",
      "Ce guide est le onzième de la série « Vu en France, à construire en Algérie », après [les garages](/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/) et [les salons de beauté](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/). Il s'adresse au fondateur de la diaspora qui a vu fonctionner Weezevent ou Shotgun et veut lancer l'équivalent, et à l'organisateur, la salle, le club ou le festival qui vend encore ses places en espèces, sur WhatsApp ou par une plateforme qu'il ne contrôle pas.",
    ],
    sections: [
      { heading: "Ce que l'Algérie a déjà appris sur les billets en ligne", body: [
        "Le pays n'en est pas au premier essai, et c'est une bonne nouvelle : les leçons sont publiques. En mai 2022, le ministère de la Jeunesse et des Sports a vendu pour la première fois **tous** les billets d'un match en ligne, sur sa plateforme Tadkirati, pour Algérie–Ouganda au stade du 5-Juillet : billets au nom de l'acheteur, pièce d'identité exigée à l'entrée, selon Algérie360. En septembre 2022, pour un match amical à Oran, plus de **36 000 billets** sont partis en moins de 48 heures, à des prix de 700 à 3 000 DA, et environ 40 % des acheteurs étaient des femmes, selon la même source citant Ennahar.",
        "Les limites aussi sont publiques. Pour le CHAN, début 2023, le paiement se faisait en ligne par carte bancaire ou Edahabia, mais il fallait ensuite **retirer son billet dans l'un des 18 points de retrait d'Alger**, reçu de paiement en main. Et pour la finale, quand les billets gratuits ont été ouverts, la plateforme est restée inaccessible plusieurs heures sous la demande ; plus de 13 000 billets ont tout de même été réservés en deux heures et demie. **La demande existe et paie en ligne. Ce qui casse, c'est le pic de l'ouverture des ventes et l'étape papier qui reste à la fin.**",
      ] },
      { heading: "Le faux concert d'Instagram, et ce qu'il dit du marché", body: [
        "Le 15 août 2026, la wilaya d'Alger a mis en garde contre un compte Instagram qui annonçait un concert inexistant dans un complexe culturel de la capitale, avec vente de billets sur un faux site au nom presque identique à celui d'une billetterie, selon Algérie360. La wilaya a déposé plainte. **Le problème n'était pas technique : l'acheteur n'avait aucun moyen de savoir où se trouve la vraie billetterie d'un événement.** C'est la première chose qu'une plateforme sérieuse doit régler : une page officielle par organisateur, un lien unique, et un numéro de billet que l'on peut vérifier.",
        "Des billetteries algériennes vendent déjà des places en ligne, en dinars : dz-ticket, Plassa, qui annonce le paiement par CIB et Edahabia et un contrôle par QR, Fenin ou Vinyculture, entre autres. Nous ne connaissons pas leurs volumes. En France, Weezevent a enregistré **41 millions de scans de billets en 2025** et a racheté deux billetteries européennes la même année, selon la presse professionnelle britannique. L'écart n'est pas dans l'idée, qui existe déjà ici : il est dans la porte, le reversement et la confiance. **C'est sur ces trois points qu'un nouveau projet a une place.**",
      ] },
      { heading: 'Une billetterie qui tient, en six moments', body: [
        "La plateforme doit tenir chacun de ces six moments. Les trois premiers se jouent en ligne, des semaines avant ; les trois derniers, le soir même et le lendemain.",
      ], visual: 'journey', after: [
        "**L'événement** se décrit avec ses catégories, ses prix, ses quotas et sa jauge par porte ou par tribune : c'est ce qui permet ensuite de répartir le public aux entrées. **La vente** accepte la CIB, la carte Edahabia et une carte en euros, et plafonne le nombre de billets par acheteur pour freiner la revente. **Le billet** est nominatif, avec un QR signé, envoyé par SMS ou e-mail : plus de retrait au guichet, plus de file pour récupérer une place déjà payée.",
        "**La vérification** passe par une page officielle unique, où chacun peut contrôler un numéro de billet avant de l'acheter à un ami. **La porte** scanne sans réseau, n'accepte qu'une entrée par billet et synchronise les portes entre elles dès qu'elle le peut. **Le reversement** rapproche les ventes en ligne, les ventes en espèces des points de vente et les entrées réelles, verse l'argent à l'organisateur à une date écrite, et rembourse si l'événement est annulé.",
      ] },
      { heading: "Ce qu'il faut construire : la porte et le reversement d'abord", body: [
        "La tentation est de commencer par une belle vitrine d'événements. C'est la partie que le public voit, et celle qui fait le moins la différence.",
      ], visual: 'stack', after: [
        "**Le billet signé** est le cœur technique. Le QR contient le numéro du billet, l'événement, la catégorie et une signature calculée avec la clé de l'organisateur. Le téléphone de contrôle ne garde que la clé publique et la liste des billets, téléchargées avant l'ouverture des portes : il peut dire si un billet est authentique **sans rien demander au serveur**, et il garde la trace de chaque billet déjà scanné. Un QR inventé ou recopié avec une autre donnée ne passe pas ; un QR copié tel quel passe une fois, la première.",
        "**L'application de porte** synchronise les portes entre elles par le réseau local du site ou dès que le réseau mobile revient. Si une porte reste isolée, on limite le risque en affectant chaque catégorie à une entrée : un billet de tribune ne passe qu'à sa porte. **Le socle**, à votre nom, doit tenir l'ouverture des ventes avec une file d'attente en ligne qui fait patienter les acheteurs dans l'ordre plutôt qu'un site qui tombe. C'est précisément ce qui a manqué lors des pics connus.",
      ] },
      { heading: 'Le calcul des files à la porte', body: [
        "L'organisateur demande, à juste titre, pourquoi le scan hors ligne vaut le développement. Voici le calcul que nous faisons avec lui, sur sa salle.",
      ], visual: 'porte', after: [
        "Prenons 8 000 spectateurs. L'expérience des organisateurs est que la majorité arrive tard ; supposons que 60 % entrent dans les 45 dernières minutes : **4 800 personnes, soit 107 par minute** à faire passer. Si chaque scan interroge le serveur et attend la réponse sur un réseau saturé par des milliers de téléphones au même endroit, une file fait passer environ 6 personnes par minute : il faut 18 files. Si le téléphone de contrôle vérifie seul la signature, une file monte à environ 10 par minute : 11 files suffisent.",
        "Ce sont des hypothèses, pas une mesure : le taux d'arrivée tardive et le débit par file sont à remplacer par ceux de votre salle, et une fouille des sacs ralentit tout le monde de la même façon. Mais le mécanisme est toujours le même : **à la porte, chaque seconde d'attente du réseau se multiplie par des milliers de personnes.** Sept files d'écart, ce sont sept agents et sept appareils de plus, ou une demi-heure de bousculade devant les grilles.",
      ] },
      { heading: 'Six fraudes, six parades', body: [
        "La fraude n'est pas un risque théorique : c'est ce qui fait perdre de l'argent à l'organisateur et la confiance du public, parfois le même soir.",
      ], visual: 'fraude', after: [
        "**La capture d'écran partagée** est la plus courante : le premier scan passe, les suivants sont refusés partout dès que les portes sont synchronisées. **Le faux billet imprimé** échoue à la vérification de signature. **Le faux compte ou le faux site** se combat par la page officielle et le numéro vérifiable, et par une communication qui renvoie toujours au même lien. **La revente au double** se freine par un plafond par acheteur, le billet nominatif, et une revente officielle au prix d'origine qui coupe l'herbe sous le pied du marché noir.",
        "**La complicité à la porte** se voit dans les chiffres quand chaque entrée est liée à un agent et à une porte : une porte qui laisse passer plus de monde que de billets scannés se repère le soir même. **Le paiement en euros contesté**, enfin, se traite en annulant le billet dès la contestation. Aucune de ces parades n'est gratuite : contrôler chaque pièce d'identité ralentit la porte. Pour un grand match, on contrôle ; pour une salle de 600 places, un simple scan suffit le plus souvent.",
      ] },
      { heading: 'Acheter depuis la France, pour soi ou pour la famille', body: [
        "L'été, la diaspora achète des places pour les festivals, les concerts et les galas qu'elle verra en Algérie, et souvent pour des proches qui y vivent. Le billet doit donc pouvoir **être payé en euros et établi au nom d'un parent à Oran**, transféré une seule fois, et vérifiable par ce parent sur la page officielle. Le problème inverse existe aussi : pour la Coupe du monde 2026, le portail de la FIFA n'acceptait que les cartes internationales, rappelait Algérie360, ce qui écartait la plupart des cartes algériennes. Une billetterie qui accepte les deux côtés règle les deux problèmes.",
        "Encaisser en euros pour un événement en Algérie demande une organisation à deux pays, que nous avons décrite pour [l'équivalent de Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) et qui se valide avec la banque et un conseil avant le développement. Une fois ce cadre posé, c'est un argument fort pour l'organisateur : **une part de son public paie des semaines à l'avance, en devises, sans risque de place vide.**",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles reviennent dans les projets qu'on nous présente. Ils ne rapportent pas de la même façon et ne cassent pas au même endroit.",
      ], visual: 'models', after: [
        "**L'organisateur ou la salle avec sa propre billetterie** garde son fichier clients et ne paie aucune commission, mais une petite jauge ne rentabilise pas seule le développement. **La marque blanche pour un club ou un festival** est souvent le meilleur point de départ : un contrat annuel, un public qui existe déjà, et un vrai pic à tenir le jour de l'ouverture des ventes. **Le logiciel par abonnement pour salles** se vend salle par salle, avec la formation des agents de porte ; c'est le modèle détaillé dans [lancer un SaaS en Algérie en 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/).",
        "**La place de marché**, type Shotgun, est le modèle le plus visible et le plus difficile : il faut les organisateurs avant le public, et les règles d'une [marketplace](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/) s'appliquent, commission, reversement et litiges. **Les salons et congrès** paient par virement, avec badges et listes nominatives, et sont souvent les clients les plus réguliers. **Le paiement sans espèces sur place**, bracelet ou carte rechargeable, vient en dernier : il rapporte sur les boissons et la restauration, mais exige de rembourser les soldes.",
      ] },
      { heading: 'Le calendrier pour 2027', body: [
        "Une douzaine de semaines entre le cadrage et un premier pilote, si le dossier de paiement est lancé tout de suite.",
      ], visual: 'saison', after: [
        "**Novembre : le cadrage écrit**, les jauges et les catégories, et le dossier de web-marchand auprès de la banque pour accepter la CIB et l'Edahabia ; il part la première semaine, car ses délais, souvent plusieurs semaines, ne dépendent pas de vous. **Décembre et janvier : la vente, le billet signé et la page officielle, puis l'application de porte**, testée réseau coupé sur quelques centaines d'entrées. **Février et mars : un pilote pendant les soirées du Ramadan**, dans une salle, sur quelques soirées, pour mesurer les vrais débits.",
        "**Avril à juin : le reversement complet, la revente officielle et les rapports**, en corrigeant ce que le pilote a montré. **L'objectif est d'être prêt pour la saison d'été**, festivals, concerts et galas, quand la diaspora achète depuis la France. Ces durées sont cohérentes avec celles que nous donnons dans [combien de temps pour développer une plateforme en 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'Ce qui fait échouer ce type de projet', body: [], list: [
        "**Commencer par la vitrine.** Un beau catalogue d'événements sans porte fiable ni reversement clair ne retient ni les organisateurs ni le public.",
        "**Une porte qui dépend du réseau.** Le soir de l'événement, le réseau mobile sature au pire moment. Le scan doit marcher sans lui.",
        "**Un QR non signé.** Un simple numéro dans un QR se fabrique en une minute. La signature est ce qui rend le faux inutile.",
        "**Pas de page officielle.** Si le public ne sait pas où est la vraie billetterie, un faux compte vendra à votre place.",
        "**Le retrait au guichet.** Garder une étape papier après un paiement en ligne recrée la file que l'on voulait supprimer.",
        "**Un site qui tombe à l'ouverture des ventes.** Une file d'attente en ligne, testée avec une vraie charge avant le jour J.",
        "**Les comptes au nom du développeur.** Serveur, domaine, données, clés de signature et compte web-marchand à votre nom dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Existe-t-il déjà des billetteries en ligne en Algérie ?", a: "Oui. Tadkirati, la plateforme du ministère de la Jeunesse et des Sports, vend des billets de match depuis 2022, et des billetteries privées comme dz-ticket, Plassa, Fenin ou Vinyculture vendent des places pour des concerts et des événements. Nous ne connaissons pas leurs volumes. La place qui reste est surtout du côté de la porte, du reversement et des organisateurs qui veulent leur propre billetterie." },
        { q: "Peut-on payer un billet en CIB ou en Edahabia ?", a: "Oui : Tadkirati acceptait la carte bancaire et l'Edahabia pour le CHAN en 2023, et des billetteries privées l'annoncent. Il faut un contrat de web-marchand avec une banque et une intégration au paiement en ligne interbancaire ; le dossier prend souvent plusieurs semaines, c'est pourquoi il se lance dès la première semaine." },
        { q: "Comment un billet peut-il être vérifié sans internet à la porte ?", a: "Le QR contient une signature calculée avec la clé de l'organisateur. Le téléphone de contrôle a téléchargé avant l'ouverture la clé publique et la liste des billets : il vérifie l'authenticité seul, note chaque billet scanné, et se synchronise avec les autres portes par le réseau local ou dès que le réseau revient. Affecter chaque catégorie à une porte limite le risque de double entrée entre deux portes non synchronisées." },
        { q: "Le billet doit-il être nominatif ?", a: "Cela dépend de l'événement. Pour les matchs, Tadkirati exigeait des billets au nom de l'acheteur et une pièce d'identité à l'entrée. Pour un concert, le billet nominatif freine la revente mais ralentit la porte si l'on contrôle chaque pièce d'identité. La plateforme doit permettre les deux réglages." },
        { q: "Faut-il une application mobile pour le public ?", a: "Pas au lancement. Un achat sur le web et un billet reçu par SMS ou e-mail suffisent. L'application qui compte d'abord est celle de la porte, sur les téléphones Android des agents. L'application du public vient quand il revient souvent ; nous en parlons dans [créer une application mobile en Algérie en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "Combien de temps pour être prêt ?", a: "Environ douze semaines entre le cadrage et un premier pilote avec la vente, le billet signé et l'application de porte. Le reversement complet, la revente officielle et les rapports suivent sur deux à trois mois, pour être prêt avant la saison d'été 2027." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Une billetterie se juge à la porte et au reversement, pas sur sa page d'accueil." },
      { after: 4, text: "À la porte, chaque seconde d'attente du réseau se multiplie par des milliers de personnes." },
    ],
    cta: { eyebrow: 'Décrivez votre projet', title: "Salle, festival, club, organisateur de galas ou plateforme à lancer : la jauge, le nombre d'événements par an, comment vous vendez et contrôlez les entrées aujourd'hui, et la date de votre premier événement. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des billetteries en ligne, des applications de contrôle d'accès et des outils d'organisateur pour les salles, clubs, festivals et salons algériens, en arabe, en français et en anglais, avec le paiement en dinars et en euros. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/', kind: 'Série #10', name: "Créer l'équivalent d'iDGarages en Algérie en 2027" },
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'Série #09', name: "Créer l'équivalent de Planity en Algérie en 2027" },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'Créer une marketplace en Algérie en 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
    ] },
  },
  en: {
    kind: 'Series · Seen in France #11', title: "Building an online ticketing platform in Algeria in 2027: the signed ticket, the gate that scans offline, payment in dinars and euros, the payout to the organiser.",
    dek: "In France you buy your seat on Weezevent or Shotgun, the ticket lands on your phone, and the gate reads it in a second. In Algeria online sales already exist, but outages when sales open, box-office pickups and fake concerts on Instagram show where it breaks. What a ticketing platform must hold at each moment, what to build first, the maths of gate lanes, six frauds and their counters, and a calendar to summer 2027.",
    publishedAt: 'November 2026', readTime: '11 min read', author: 'Symloop', about: ['Online ticketing', 'Access control', 'Events', 'Diaspora', 'Algeria 2027'],
    intro: [
      "**Short answer.** An online ticketing platform in Algeria in 2027 is not judged by its home page: it is judged **at the gate and at the payout**. You need a named ticket with a **signed** QR that any steward's phone can check with no network; an official page where anyone can check a ticket before buying it; a gate app that gets ten people a minute through each lane even when the mobile network saturates; and a payout to the organiser that matches sales against real entries. The event catalogue is the easy part.",
      "This guide is the eleventh in the series \"Seen in France, to build in Algeria\", after [garages](/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/) and [beauty salons](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/). It is for the diaspora founder who has seen Weezevent or Shotgun work and wants to launch the equivalent, and for the organiser, venue, club or festival still selling seats in cash, on WhatsApp or through a platform it does not control.",
    ],
    sections: [
      { heading: 'What Algeria has already learned about online tickets', body: [
        "This is not the country's first attempt, and that is good news: the lessons are public. In May 2022 the Ministry of Youth and Sports sold **all** the tickets for a match online for the first time, on its Tadkirati platform, for Algeria–Uganda at the 5-July stadium: tickets in the buyer's name, ID required at the entrance, according to Algérie360. In September 2022, for a friendly in Oran, more than **36,000 tickets** went in under 48 hours, at prices from DA 700 to DA 3,000, and about 40% of buyers were women, according to the same source citing Ennahar.",
        "The limits are public too. For the CHAN in early 2023, payment was online by bank card or Edahabia, but you then had to **collect your ticket at one of 18 pickup points in Algiers**, payment receipt in hand. And for the final, when free tickets opened, the platform stayed unreachable for several hours under the demand; more than 13,000 tickets were still booked in two and a half hours. **The demand is there and it pays online. What breaks is the peak when sales open and the paper step left at the end.**",
      ] },
      { heading: 'The fake Instagram concert, and what it says about the market', body: [
        "On 15 August 2026 the wilaya of Algiers warned about an Instagram account announcing a non-existent concert at a cultural complex in the capital, with tickets sold on a fake site whose name was almost identical to a ticketing site's, according to Algérie360. The wilaya filed a complaint. **The problem was not technical: the buyer had no way to know where an event's real ticketing was.** That is the first thing a serious platform must settle: one official page per organiser, a single link, and a ticket number anyone can check.",
        "Algerian ticketing sites already sell seats online, in dinars: dz-ticket, Plassa, which advertises CIB and Edahabia payment and QR check-in, Fenin and Vinyculture, among others. We do not know their volumes. In France, Weezevent recorded **41 million ticket scans in 2025** and bought two European ticketing companies the same year, according to the British trade press. The gap is not in the idea, which already exists here: it is in the gate, the payout and trust. **Those three points are where a new project has room.**",
      ] },
      { heading: 'A ticketing platform that holds, in six moments', body: [
        "The platform must hold each of these six moments. The first three play out online, weeks ahead; the last three on the night and the day after.",
      ], visual: 'journey', after: [
        "**The event** is described with its categories, prices, quotas and capacity per gate or stand: that is what later lets you spread the crowd across entrances. **The sale** accepts CIB, the Edahabia card and a euro card, and caps tickets per buyer to slow resale. **The ticket** is named, with a signed QR, sent by SMS or email: no more box-office pickup, no more queue to collect a seat already paid for.",
        "**Verification** goes through one official page where anyone can check a ticket number before buying it from a friend. **The gate** scans with no network, accepts one entry per ticket and syncs the gates with each other whenever it can. **The payout** matches online sales, cash sales at points of sale and real entries, pays the organiser on a written date, and refunds if the event is cancelled.",
      ] },
      { heading: 'What to build: the gate and the payout first', body: [
        "The temptation is to start with a nice event showcase. It is the part the public sees, and the one that makes the least difference.",
      ], visual: 'stack', after: [
        "**The signed ticket** is the technical heart. The QR holds the ticket number, the event, the category and a signature computed with the organiser's key. The steward's phone keeps only the public key and the ticket list, downloaded before the doors open: it can tell whether a ticket is genuine **without asking the server anything**, and it records every ticket already scanned. A made-up QR, or one copied with altered data, fails; a QR copied as is passes once, the first time.",
        "**The gate app** syncs gates with each other over the venue's local network or as soon as the mobile network returns. If a gate stays isolated, you limit the risk by assigning each category to one entrance: a stand ticket only passes at its own gate. **The foundation**, in your name, must hold the opening of sales with an online queue that keeps buyers waiting in order rather than a site that goes down. That is exactly what was missing during the known peaks.",
      ] },
      { heading: 'The maths of gate lanes', body: [
        "The organiser rightly asks why offline scanning is worth building. Here is the calculation we do with them, for their venue.",
      ], visual: 'porte', after: [
        "Take 8,000 spectators. Organisers' experience is that most people arrive late; assume 60% come in during the last 45 minutes: **4,800 people, or 107 a minute** to get through. If every scan queries the server and waits for the answer on a network saturated by thousands of phones in one place, a lane moves about 6 people a minute: you need 18 lanes. If the steward's phone checks the signature on its own, a lane rises to about 10 a minute: 11 lanes are enough.",
        "These are assumptions, not a measurement: the late-arrival rate and the throughput per lane must be replaced by your venue's, and a bag search slows everyone the same way. But the mechanism is always the same: **at the gate, every second spent waiting for the network is multiplied by thousands of people.** Seven lanes apart means seven more staff and seven more devices, or half an hour of crushing at the gates.",
      ] },
      { heading: 'Six frauds, six counters', body: [
        "Fraud is not a theoretical risk: it is what costs the organiser money and the public's trust, sometimes on the same night.",
      ], visual: 'fraude', after: [
        "**The shared screenshot** is the most common: the first scan passes, the next ones are refused everywhere once gates are in sync. **The fake printed ticket** fails the signature check. **The fake account or site** is fought with the official page and the checkable number, and with communication that always points to the same link. **Resale at double the price** is slowed by a cap per buyer, the named ticket, and an official resale at face value that cuts the ground from under the black market.",
        "**Inside help at the gate** shows up in the numbers when every entry is tied to a steward and a gate: a gate letting in more people than tickets scanned is spotted the same night. **A disputed euro payment** is handled by cancelling the ticket as soon as it is disputed. None of these counters comes free: checking every ID slows the gate. For a big match, you check; for a 600-seat hall, a plain scan is usually enough.",
      ] },
      { heading: 'Buying from France, for yourself or for family', body: [
        "In summer the diaspora buys seats for festivals, concerts and galas it will attend in Algeria, and often for relatives who live there. So the ticket must **be payable in euros and issued in the name of a parent in Oran**, transferable once, and checkable by that parent on the official page. The reverse problem exists too: for the 2026 World Cup, the FIFA portal only accepted international cards, Algérie360 noted, which ruled out most Algerian cards. A platform that accepts both sides solves both problems.",
        "Collecting euros for an event in Algeria takes a two-country set-up, which we described for [the Booking of Algeria](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) and which is validated with the bank and an adviser before development. Once that framework is in place, it is a strong argument for the organiser: **part of the audience pays weeks ahead, in foreign currency, with no risk of an empty seat.**",
      ] },
      { heading: 'Which model to build', body: [
        "Six models keep coming up in the projects brought to us. They do not pay the same way and do not break in the same place.",
      ], visual: 'models', after: [
        "**The organiser or venue with its own ticketing** keeps its customer file and pays no commission, but a small capacity does not pay for the build on its own. **White label for a club or festival** is often the best starting point: an annual contract, an audience that already exists, and a real peak to hold on the day sales open. **Subscription software for venues** sells venue by venue, with gate-staff training; that is the model detailed in [launching a SaaS in Algeria in 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/).",
        "**The marketplace**, Shotgun style, is the most visible model and the hardest: you need organisers before the public, and the rules of a [marketplace](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/) apply, commission, payout and disputes. **Trade fairs and congresses** pay by transfer, with badges and named lists, and are often the most regular customers. **Cashless payment on site**, wristband or top-up card, comes last: it earns on drinks and food, but you must refund the balances.",
      ] },
      { heading: 'The calendar for 2027', body: [
        "About twelve weeks from scoping to a first pilot, if the payment file is started straight away.",
      ], visual: 'saison', after: [
        "**November: written scoping**, capacity and categories, and the web-merchant file with the bank to accept CIB and Edahabia; it goes out in the first week, because its lead times, often several weeks, do not depend on you. **December and January: sales, the signed ticket and the official page, then the gate app**, tested with the network off on a few hundred entries. **February and March: a pilot during Ramadan evenings**, in one venue, over a few nights, to measure real throughput.",
        "**April to June: the full payout, official resale and reports**, fixing what the pilot showed. **The goal is to be ready for the summer season**, festivals, concerts and galas, when the diaspora buys from France. These durations match the ones we give in [how long it takes to build a platform in 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with the showcase.** A nice event catalogue with no reliable gate and no clear payout keeps neither organisers nor the public.",
        "**A gate that depends on the network.** On the night, the mobile network saturates at the worst moment. Scanning must work without it.",
        "**An unsigned QR.** A plain number in a QR can be forged in a minute. The signature is what makes a fake useless.",
        "**No official page.** If the public does not know where the real ticketing is, a fake account will sell in your place.",
        "**Box-office pickup.** Keeping a paper step after an online payment recreates the queue you wanted to remove.",
        "**A site that goes down when sales open.** An online queue, load-tested for real before the day.",
        "**Accounts in the developer's name.** Server, domain, data, signing keys and web-merchant account in your name from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: "Are there already online ticketing platforms in Algeria?", a: "Yes. Tadkirati, the Ministry of Youth and Sports platform, has sold match tickets since 2022, and private sites such as dz-ticket, Plassa, Fenin and Vinyculture sell seats for concerts and events. We do not know their volumes. The room left is mostly on the side of the gate, the payout and organisers who want their own ticketing." },
        { q: "Can a ticket be paid with CIB or Edahabia?", a: "Yes: Tadkirati accepted bank cards and Edahabia for the CHAN in 2023, and private sites advertise it. You need a web-merchant contract with a bank and an integration with interbank online payment; the file often takes several weeks, which is why it starts in the first week." },
        { q: "How can a ticket be checked at the gate with no internet?", a: "The QR holds a signature computed with the organiser's key. Before the doors open, the steward's phone has downloaded the public key and the ticket list: it checks authenticity on its own, records every ticket scanned, and syncs with the other gates over the local network or as soon as the network returns. Assigning each category to one gate limits the risk of a double entry between two unsynced gates." },
        { q: "Must the ticket be named?", a: "It depends on the event. For matches, Tadkirati required tickets in the buyer's name and ID at the entrance. For a concert, a named ticket slows resale but slows the gate if every ID is checked. The platform must allow both settings." },
        { q: "Does the public need a mobile app?", a: "Not at launch. A web purchase and a ticket received by SMS or email are enough. The app that matters first is the gate app, on stewards' Android phones. The public app comes when people return often; we cover it in [building a mobile app in Algeria in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "How long until it is ready?", a: "About twelve weeks from scoping to a first pilot with sales, the signed ticket and the gate app. The full payout, official resale and reports follow over two to three months, to be ready before the 2027 summer season." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A ticketing platform is judged at the gate and at the payout, not by its home page." },
      { after: 4, text: "At the gate, every second spent waiting for the network is multiplied by thousands of people." },
    ],
    cta: { eyebrow: 'Describe your project', title: "Venue, festival, club, gala organiser or platform to launch: the capacity, the number of events a year, how you sell and check entries today, and the date of your first event. We send back the scope, the calendar and the total price, in writing, before we start.", body: "Symloop builds online ticketing, access-control apps and organiser tools for Algerian venues, clubs, festivals and trade fairs, in Arabic, French and English, with payment in dinars and euros. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name." },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/', kind: 'Series #10', name: 'Building the iDGarages of Algeria in 2027' },
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'Series #09', name: 'Building the Planity of Algeria in 2027' },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'Building a marketplace in Algeria in 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
    ] },
  },
  ar: {
    kind: 'سلسلة · رأيناه في فرنسا #11', title: "إنشاء منصة لبيع التذاكر عبر الإنترنت في الجزائر سنة 2027: التذكرة الموقَّعة، البوابة التي تمسح دون شبكة، الدفع بالدينار واليورو، وتحويل المداخيل إلى المنظِّم.",
    dek: "في فرنسا تشتري مقعدك على Weezevent أو Shotgun، فتصل التذكرة إلى هاتفك وتقرؤها البوابة في ثانية. في الجزائر البيع عبر الإنترنت موجود، لكن الأعطال عند فتح البيع، والسحب من الشبابيك، والحفلات المزيّفة على إنستغرام تُظهر أين يقع الخلل. ما يجب أن تصمد فيه منصة التذاكر في كل لحظة، وما يُبنى أولاً، وحساب الطوابير عند البوابة، وستة أنواع من الغش وردودها، وجدول زمني حتى صيف 2027.",
    publishedAt: 'نوفمبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['بيع التذاكر عبر الإنترنت', 'مراقبة الدخول', 'تنظيم الأحداث', 'الجالية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** منصة بيع التذاكر في الجزائر سنة 2027 لا تُقاس بصفحتها الرئيسية، بل **عند البوابة وعند تحويل المداخيل**. تحتاج إلى تذكرة اسمية برمز QR **موقَّع** يستطيع أي هاتف مراقبة التحقق منه دون شبكة؛ وصفحة رسمية يتحقق فيها أي شخص من تذكرة قبل شرائها؛ وتطبيق بوابة يُمرّر عشرة أشخاص في الدقيقة لكل طابور حتى عندما تتشبّع شبكة الهاتف؛ وتحويل مداخيل إلى المنظِّم يطابق المبيعات مع الدخول الفعلي. أما قائمة الأحداث فهي الجزء الأسهل.",
      "هذا الدليل هو الحادي عشر في سلسلة «رأيناه في فرنسا، نبنيه في الجزائر»، بعد [الورشات الميكانيكية](/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/) و[صالونات التجميل](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/). وهو موجّه لمؤسس من الجالية رأى Weezevent أو Shotgun يعملان ويريد إطلاق مقابلهما، وللمنظِّم أو القاعة أو النادي أو المهرجان الذي ما زال يبيع مقاعده نقداً أو عبر واتساب أو عبر منصة لا يتحكم فيها.",
    ],
    sections: [
      { heading: 'ما تعلّمته الجزائر من قبل عن التذاكر الإلكترونية', body: [
        "ليست هذه المحاولة الأولى في البلاد، وهذا خبر جيد: الدروس معروفة. في ماي 2022 باعت وزارة الشباب والرياضة لأول مرة **كل** تذاكر مباراة عبر الإنترنت، على منصتها «تذكرتي»، لمباراة الجزائر وأوغندا بملعب 5 جويلية: تذاكر باسم المشتري وبطاقة هوية مطلوبة عند الدخول، حسب Algérie360. وفي سبتمبر 2022، لمباراة ودية في وهران، بيعت أكثر من **36 000 تذكرة** في أقل من 48 ساعة، بأسعار من 700 إلى 3 000 دج، وكانت نحو 40 % من المشترين نساء، حسب المصدر نفسه نقلاً عن النهار.",
        "والحدود معروفة أيضاً. في بطولة «الشان» مطلع 2023 كان الدفع عبر الإنترنت بالبطاقة البنكية أو الذهبية، لكن كان يجب بعد ذلك **سحب التذكرة من إحدى 18 نقطة سحب في العاصمة** مع وصل الدفع. وفي النهائي، حين فُتحت التذاكر المجانية، بقيت المنصة غير متاحة عدة ساعات تحت الضغط، ومع ذلك حُجزت أكثر من 13 000 تذكرة في ساعتين ونصف. **الطلب موجود ويدفع عبر الإنترنت. ما ينكسر هو ذروة فتح البيع والخطوة الورقية المتبقية في النهاية.**",
      ] },
      { heading: 'الحفل المزيّف على إنستغرام، وما يقوله عن السوق', body: [
        "في 15 أوت 2026 حذّرت ولاية الجزائر من حساب على إنستغرام أعلن عن حفل غير موجود في مركّب ثقافي بالعاصمة، مع بيع تذاكر على موقع مزيّف يكاد اسمه يطابق اسم منصة تذاكر، حسب Algérie360. وقدّمت الولاية شكوى. **لم تكن المشكلة تقنية: لم يكن لدى المشتري أي وسيلة ليعرف أين توجد المنصة الحقيقية للحدث.** وهذا أول ما يجب أن تحلّه منصة جادة: صفحة رسمية لكل منظِّم، ورابط واحد، ورقم تذكرة يمكن التحقق منه.",
        "منصات جزائرية تبيع أصلاً مقاعد عبر الإنترنت بالدينار: dz-ticket، وPlassa التي تعلن الدفع بـCIB والذهبية والمراقبة برمز QR، وFenin وVinyculture وغيرها. لا نعرف أحجامها. وفي فرنسا سجّلت Weezevent **41 مليون مسح للتذاكر سنة 2025** واشترت منصتين أوروبيتين في السنة نفسها، حسب الصحافة المهنية البريطانية. الفارق ليس في الفكرة، فهي موجودة هنا، بل في البوابة وتحويل المداخيل والثقة. **في هذه النقاط الثلاث يجد المشروع الجديد مكانه.**",
      ] },
      { heading: 'منصة تذاكر تصمد، في ست لحظات', body: [
        "يجب أن تصمد المنصة في كل لحظة من هذه اللحظات الست. الثلاث الأولى تجري عبر الإنترنت قبل أسابيع، والثلاث الأخيرة في الليلة نفسها وفي اليوم التالي.",
      ], visual: 'journey', after: [
        "**الحدث** يُوصف بفئاته وأسعاره وحصصه وسعته لكل بوابة أو مدرج: وهذا ما يسمح لاحقاً بتوزيع الجمهور على المداخل. **البيع** يقبل CIB وبطاقة الذهبية وبطاقة باليورو، ويحدّد سقفاً لعدد التذاكر لكل مشترٍ للحدّ من إعادة البيع. **التذكرة** اسمية برمز QR موقَّع، تُرسل برسالة قصيرة أو بالبريد الإلكتروني: لا سحب من الشباك، ولا طابور لاستلام مقعد مدفوع مسبقاً.",
        "**التحقق** يمرّ عبر صفحة رسمية واحدة يستطيع فيها أي شخص فحص رقم تذكرة قبل شرائها من صديق. **البوابة** تمسح دون شبكة، ولا تقبل إلا دخولاً واحداً لكل تذكرة، وتزامن البوابات فيما بينها كلما أمكن. **تحويل المداخيل** يطابق مبيعات الإنترنت ومبيعات نقاط البيع النقدية والدخول الفعلي، ويدفع للمنظِّم في تاريخ مكتوب، ويسترد المبالغ إذا أُلغي الحدث.",
      ] },
      { heading: 'ما يجب بناؤه: البوابة وتحويل المداخيل أولاً', body: [
        "الإغراء هو البدء بواجهة جميلة للأحداث. إنها الجزء الذي يراه الجمهور، والأقل تأثيراً في الفارق.",
      ], visual: 'stack', after: [
        "**التذكرة الموقَّعة** هي القلب التقني. يحمل رمز QR رقم التذكرة والحدث والفئة وتوقيعاً محسوباً بمفتاح المنظِّم. ولا يحتفظ هاتف المراقبة إلا بالمفتاح العام وقائمة التذاكر، المحمَّلين قبل فتح الأبواب: يستطيع أن يقول إن كانت التذكرة أصلية **دون أن يسأل الخادم شيئاً**، ويحتفظ بأثر كل تذكرة مُسحت. الرمز المختلَق أو المنسوخ ببيانات معدَّلة لا يمر، والرمز المنسوخ كما هو يمر مرة واحدة، الأولى.",
        "**تطبيق البوابة** يزامن البوابات عبر الشبكة المحلية للموقع أو فور عودة شبكة الهاتف. وإذا بقيت بوابة معزولة، يُحدّ من الخطر بتخصيص كل فئة لمدخل واحد: تذكرة المدرج لا تمر إلا من بوابتها. **والقاعدة**، باسمك، يجب أن تصمد عند فتح البيع بطابور انتظار إلكتروني يُبقي المشترين بالترتيب بدل موقع يتعطّل. وهذا بالضبط ما غاب في الذروات المعروفة.",
      ] },
      { heading: 'حساب الطوابير عند البوابة', body: [
        "يسأل المنظِّم، وهو محق، لماذا يستحق المسح دون شبكة التطوير. هذا هو الحساب الذي نقوم به معه لقاعته.",
      ], visual: 'porte', after: [
        "لنأخذ 8000 متفرج. تجربة المنظِّمين أن معظم الناس يصلون متأخرين؛ لنفترض أن 60 % يدخلون في آخر 45 دقيقة: **4800 شخص، أي 107 في الدقيقة** يجب تمريرهم. إذا كان كل مسح يسأل الخادم وينتظر الجواب على شبكة تُشبعها آلاف الهواتف في مكان واحد، يمرّر الطابور نحو 6 أشخاص في الدقيقة: يلزم 18 طابوراً. وإذا تحقق هاتف المراقبة من التوقيع وحده، يرتفع الطابور إلى نحو 10 في الدقيقة: تكفي 11 طابوراً.",
        "هذه فرضيات وليست قياساً: نسبة الوصول المتأخر وسرعة كل طابور تُستبدلان بأرقام قاعتك، وتفتيش الحقائب يُبطئ الجميع بالقدر نفسه. لكن الآلية واحدة دائماً: **عند البوابة، كل ثانية انتظار للشبكة تتضاعف بآلاف الأشخاص.** فارق سبعة طوابير يعني سبعة أعوان وسبعة أجهزة إضافية، أو نصف ساعة من التدافع أمام الأبواب.",
      ] },
      { heading: 'ستة أنواع من الغش وستة ردود', body: [
        "الغش ليس خطراً نظرياً: إنه ما يُفقد المنظِّم المال والجمهور الثقة، أحياناً في الليلة نفسها.",
      ], visual: 'fraude', after: [
        "**لقطة الشاشة المتداولة** هي الأكثر شيوعاً: أول مسح يمر، والتالية تُرفض في كل مكان بمجرد تزامن البوابات. **التذكرة المزوَّرة المطبوعة** تفشل في فحص التوقيع. **الحساب أو الموقع المزيّف** يُواجَه بالصفحة الرسمية والرقم القابل للتحقق، وبتواصل يحيل دائماً إلى الرابط نفسه. **إعادة البيع بالضعف** تُكبح بسقف لكل مشترٍ، وبالتذكرة الاسمية، وبإعادة بيع رسمية بالسعر الأصلي تقطع الطريق على السوق السوداء.",
        "**التواطؤ عند البوابة** يظهر في الأرقام عندما يرتبط كل دخول بعون وببوابة: البوابة التي تُدخل أشخاصاً أكثر من التذاكر الممسوحة تُكشف في الليلة نفسها. **والدفع باليورو محل الاعتراض** يُعالج بإلغاء التذكرة فور الاعتراض. لا رد من هذه الردود دون ثمن: فحص كل بطاقة هوية يُبطئ البوابة. في مباراة كبيرة نفحص، وفي قاعة من 600 مقعد يكفي المسح البسيط في الغالب.",
      ] },
      { heading: 'الشراء من فرنسا، لنفسك أو للعائلة', body: [
        "في الصيف تشتري الجالية مقاعد للمهرجانات والحفلات والسهرات التي ستحضرها في الجزائر، وغالباً لأقارب يعيشون هناك. لذلك يجب أن تكون التذكرة **قابلة للدفع باليورو وصادرة باسم أحد الوالدين في وهران**، قابلة للتحويل مرة واحدة، ويتحقق منها ذلك القريب على الصفحة الرسمية. والمشكلة المعاكسة موجودة أيضاً: في كأس العالم 2026 لم تقبل بوابة الفيفا إلا البطاقات الدولية، كما ذكّرت Algérie360، ما استبعد معظم البطاقات الجزائرية. المنصة التي تقبل الجهتين تحلّ المشكلتين.",
        "تحصيل اليورو مقابل حدث في الجزائر يتطلب تنظيماً بين بلدين، وصفناه في [مقابل Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) ويُتحقق منه مع البنك ومستشار قبل التطوير. وبعد وضع هذا الإطار يصبح حجة قوية للمنظِّم: **جزء من جمهوره يدفع قبل أسابيع، بالعملة الصعبة، دون خطر مقعد فارغ.**",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج تتكرر في المشاريع التي تُعرض علينا. لا تربح بالطريقة نفسها ولا تنكسر في الموضع نفسه.",
      ], visual: 'models', after: [
        "**المنظِّم أو القاعة بمنصته الخاصة** يحتفظ بملف زبائنه ولا يدفع أي عمولة، لكن السعة الصغيرة وحدها لا تغطي تكلفة التطوير. **العلامة البيضاء لنادٍ أو مهرجان** غالباً أفضل نقطة انطلاق: عقد سنوي، وجمهور موجود أصلاً، وذروة حقيقية يجب الصمود أمامها يوم فتح البيع. **البرنامج باشتراك للقاعات** يُباع قاعة بقاعة مع تكوين أعوان البوابة؛ وهو النموذج المفصّل في [إطلاق SaaS في الجزائر سنة 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/).",
        "**سوق التذاكر**، على نمط Shotgun، هو النموذج الأكثر ظهوراً والأصعب: يلزم المنظِّمون قبل الجمهور، وتنطبق قواعد [السوق الإلكترونية](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/) من عمولة وتحويل ونزاعات. **المعارض والمؤتمرات** تدفع بالتحويل، مع الشارات والقوائم الاسمية، وكثيراً ما تكون الزبائن الأكثر انتظاماً. **والدفع دون نقود في عين المكان**، بسوار أو بطاقة قابلة للتعبئة، يأتي أخيراً: يربح من المشروبات والأكل، لكنه يفرض استرداد الأرصدة.",
      ] },
      { heading: 'الجدول الزمني لسنة 2027', body: [
        "نحو اثني عشر أسبوعاً بين التأطير وأول تجربة، إذا أُطلق ملف الدفع فوراً.",
      ], visual: 'saison', after: [
        "**نوفمبر: التأطير المكتوب**، والسعة والفئات، وملف التاجر الإلكتروني لدى البنك لقبول CIB والذهبية؛ يُطلق في الأسبوع الأول لأن آجاله، التي تمتد غالباً عدة أسابيع، لا تتعلق بك. **ديسمبر وجانفي: البيع والتذكرة الموقَّعة والصفحة الرسمية، ثم تطبيق البوابة**، مجرَّباً بشبكة مقطوعة على بضع مئات من الدخول. **فيفري ومارس: تجربة خلال سهرات رمضان**، في قاعة واحدة وعلى بضع سهرات، لقياس السرعات الحقيقية.",
        "**من أفريل إلى جوان: تحويل المداخيل الكامل وإعادة البيع الرسمية والتقارير**، مع تصحيح ما أظهرته التجربة. **الهدف أن تكون المنصة جاهزة لموسم الصيف**، من مهرجانات وحفلات وسهرات، حين تشتري الجالية من فرنسا. وهذه المدد منسجمة مع ما نعطيه في [كم من الوقت لتطوير منصة سنة 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بالواجهة.** قائمة أحداث جميلة دون بوابة موثوقة ولا تحويل واضح للمداخيل لا تحتفظ لا بالمنظِّمين ولا بالجمهور.",
        "**بوابة تعتمد على الشبكة.** في ليلة الحدث تتشبّع شبكة الهاتف في أسوأ لحظة. يجب أن يعمل المسح دونها.",
        "**رمز QR غير موقَّع.** رقم بسيط داخل رمز QR يُزوَّر في دقيقة. التوقيع هو ما يجعل التزوير بلا فائدة.",
        "**غياب الصفحة الرسمية.** إذا لم يعرف الجمهور أين المنصة الحقيقية، سيبيع حساب مزيّف مكانك.",
        "**السحب من الشباك.** الإبقاء على خطوة ورقية بعد الدفع الإلكتروني يعيد الطابور الذي أردنا إلغاءه.",
        "**موقع يتعطّل عند فتح البيع.** طابور انتظار إلكتروني، مجرَّب بحمل حقيقي قبل اليوم الموعود.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والبيانات ومفاتيح التوقيع وحساب التاجر الإلكتروني باسمك منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "هل توجد منصات لبيع التذاكر عبر الإنترنت في الجزائر؟", a: "نعم. «تذكرتي»، منصة وزارة الشباب والرياضة، تبيع تذاكر المباريات منذ 2022، ومنصات خاصة مثل dz-ticket وPlassa وFenin وVinyculture تبيع مقاعد للحفلات والأحداث. لا نعرف أحجامها. والمكان المتبقي هو أساساً في البوابة وتحويل المداخيل والمنظِّمين الذين يريدون منصتهم الخاصة." },
        { q: "هل يمكن دفع التذكرة بـCIB أو الذهبية؟", a: "نعم: قبلت «تذكرتي» البطاقة البنكية والذهبية في «الشان» سنة 2023، وتعلن ذلك منصات خاصة. يلزم عقد تاجر إلكتروني مع بنك وربط بالدفع الإلكتروني بين البنوك؛ وكثيراً ما يستغرق الملف عدة أسابيع، لذلك يُطلق منذ الأسبوع الأول." },
        { q: "كيف يمكن التحقق من تذكرة عند البوابة دون إنترنت؟", a: "يحمل رمز QR توقيعاً محسوباً بمفتاح المنظِّم. وقبل فتح الأبواب يكون هاتف المراقبة قد حمّل المفتاح العام وقائمة التذاكر: يتحقق من الأصالة وحده، ويسجّل كل تذكرة ممسوحة، ويتزامن مع البوابات الأخرى عبر الشبكة المحلية أو فور عودة الشبكة. وتخصيص كل فئة لبوابة واحدة يحدّ من خطر الدخول المزدوج بين بوابتين غير متزامنتين." },
        { q: "هل يجب أن تكون التذكرة اسمية؟", a: "حسب الحدث. في المباريات اشترطت «تذكرتي» تذاكر باسم المشتري وبطاقة هوية عند الدخول. وفي الحفل، تكبح التذكرة الاسمية إعادة البيع لكنها تُبطئ البوابة إذا فُحصت كل بطاقة هوية. يجب أن تسمح المنصة بالضبطين." },
        { q: "هل يحتاج الجمهور إلى تطبيق للهاتف؟", a: "ليس عند الإطلاق. يكفي الشراء عبر الويب وتذكرة تصل برسالة قصيرة أو بالبريد. التطبيق الذي يهمّ أولاً هو تطبيق البوابة على هواتف أندرويد للأعوان. ويأتي تطبيق الجمهور حين يعود كثيراً؛ نتحدث عنه في [إنشاء تطبيق للهاتف في الجزائر سنة 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "كم من الوقت يلزم للجاهزية؟", a: "نحو اثني عشر أسبوعاً بين التأطير وأول تجربة بالبيع والتذكرة الموقَّعة وتطبيق البوابة. ثم يأتي تحويل المداخيل الكامل وإعادة البيع الرسمية والتقارير خلال شهرين إلى ثلاثة، للجاهزية قبل موسم صيف 2027." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "منصة التذاكر تُقاس عند البوابة وعند تحويل المداخيل، لا بصفحتها الرئيسية." },
      { after: 4, text: "عند البوابة، كل ثانية انتظار للشبكة تتضاعف بآلاف الأشخاص." },
    ],
    cta: { eyebrow: 'صف لنا مشروعك', title: "قاعة أو مهرجان أو نادٍ أو منظِّم حفلات أو منصة للإطلاق: السعة، عدد الأحداث في السنة، كيف تبيع اليوم وتراقب الدخول، وتاريخ أول حدث. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop منصات بيع التذاكر عبر الإنترنت، وتطبيقات مراقبة الدخول، وأدوات المنظِّمين للقاعات والنوادي والمهرجانات والمعارض في الجزائر، بالعربية والفرنسية والإنجليزية، مع الدفع بالدينار واليورو. مهندسون كبار في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، الخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/', kind: 'سلسلة #10', name: 'إنشاء مقابل iDGarages في الجزائر سنة 2027' },
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'سلسلة #09', name: 'إنشاء مقابل Planity في الجزائر سنة 2027' },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'إنشاء سوق إلكترونية في الجزائر سنة 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
    ] },
  },
};

const KEYWORDS = "billetterie en ligne algérie 2027, plateforme billetterie algérie, application billetterie événement algérie, vente billets concert en ligne algérie, contrôle d'accès QR code algérie, billet électronique CIB Edahabia, équivalent weezevent algérie, logiciel billetterie salle festival, online ticketing algeria, منصة بيع التذاكر الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
