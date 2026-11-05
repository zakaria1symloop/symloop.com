import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux.mjs';

const SLUG = 'creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux';
const FIGURES = ['journey', 'stack', 'utilisation', 'models', 'season'];
const DATE = '2026-10-31';

const CONTENT = {
  fr: {
    kind: 'Série · Vu en France #08', title: "Créer une plateforme de location de voitures en Algérie en 2027 : réserver depuis la France, la caution, l'état des lieux et la flotte.",
    dek: "En France, on réserve une voiture en trois minutes et on la récupère au comptoir avec un contrat déjà signé. En Algérie, la location se négocie encore sur WhatsApp : la voiture promise n'est pas toujours celle qui attend à l'aéroport, la caution se donne en espèces, et la rayure du retour devient une dispute. Ce qu'une plateforme doit faire à chaque moment de la location, ce qu'il faut construire en premier, le calcul qui la justifie, le modèle à choisir, et le calendrier pour ouvrir avant l'été 2027.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Location de voitures', 'Plateforme', 'Diaspora', 'Gestion de flotte', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une plateforme de location de voitures qui marche en Algérie en 2027 n'est pas d'abord un site de réservation : c'est **un calendrier juste et un état des lieux incontestable**. Le calendrier juste suppose que l'agence enregistre chaque sortie et chaque retour dans un outil, pas dans un cahier ; sinon la plateforme vend des voitures déjà sur la route. L'état des lieux incontestable suppose des photos horodatées prises sous les mêmes angles au départ et au retour, envoyées au client dans la minute. Par-dessus, la réservation depuis la France avec acompte, les conducteurs nommés et une caution écrite. Pour être prêt quand la diaspora réserve, il faut **ouvrir en avril, donc commencer en novembre**.",
      "Ce guide est le huitième de la série « Vu en France, à construire en Algérie », après [l'équivalent de Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) et [l'équivalent d'Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/). Il s'adresse au fondateur de la diaspora qui veut lancer la plateforme, et au gérant d'agence qui veut que ses voitures se réservent sans lui au téléphone.",
    ],
    sections: [
      { heading: "Pourquoi la location se réserve encore sur WhatsApp", body: [
        "Le scénario est connu. Une famille atterrit à Alger à 23 h. La voiture réservée sur WhatsApp n'est pas là, ou ce n'est pas la catégorie annoncée, parce qu'un autre client l'a gardée deux jours de plus. La caution se règle en espèces, sans reçu. Trois semaines plus tard, au retour, une rayure apparaît sur l'aile, et personne ne peut prouver si elle était là au départ. **Rien de cela n'est forcément malhonnête : c'est ce qui arrive quand la disponibilité vit dans un cahier et l'état des lieux dans la mémoire de chacun.**",
        "La demande, elle, est massive et concentrée. Selon les chiffres du ministère français des Transports repris par Algérie Eco, **3,3 millions de passagers** ont voyagé entre la France et l'Algérie sur les sept premiers mois de 2026, dont environ 600 000 en juillet. Pour le deuxième été de suite, l'entrée des véhicules neufs ou de moins de trois ans a été restreinte aux ports d'Alger et d'Oran du 15 juin au 15 septembre, et les utilitaires interdits à bord des navires de passagers : une partie des familles qui venaient avec leur voiture louent sur place. Rien ne dit que la mesure sera reconduite en 2027, mais la demande d'été ne dépend pas d'elle. Les guides de voyage conseillent de réserver deux à trois semaines à l'avance en juillet-août et signalent que les agences d'aéroport affichent souvent complet dès juin.",
        "En face, l'offre est éclatée. Il n'existe pas de recensement public des agences de location en Algérie ; à titre de comparaison, le Maroc en compte plus de 11 000 pour environ 200 000 véhicules, et en Tunisie la profession estime le parc informel supérieur de 20 % au parc déclaré. Et les voitures coûtent cher à renouveler : 96 418 véhicules neufs et d'occasion de moins de trois ans ont été importés en 2025, selon le ministre de l'Industrie. **Une agence ne peut pas acheter sa croissance : elle doit faire travailler chaque voiture plus de jours.**",
      ] },
      { heading: 'Une location réservée depuis la France, en six moments', body: [
        "La plateforme doit tenir chacun de ces six moments. Les trois premiers se passent depuis la France, les trois derniers au comptoir.",
      ], visual: 'journey', after: [
        "**La réservation** nomme chaque conducteur : chez la plupart des loueurs, seules les personnes inscrites au contrat sont assurées, et le cousin qui prend le volant pour un trajet n'est pas couvert. **L'acompte** bloque la voiture : en euros côté France pour la diaspora, ou en CIB et Edahabia pour un client résident, avec la pile à deux pays que nous avons décrite pour [l'équivalent de Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/). **Les documents** partent avant le vol : photo du permis et de la pièce d'identité, que l'agence vérifie contre ses propres règles, ancienneté du permis, âge minimum, qui varient d'un loueur à l'autre. Le client n'apprend pas au comptoir, à minuit, que son permis est trop récent.",
        "**La remise** suit un protocole fixe : huit photos sous des angles imposés, les quatre côtés et les quatre coins, plus le compteur, la jauge et l'intérieur, horodatées, signées sur tablette et envoyées au client par lien dans la minute. **La caution** est écrite : montant, mode, ce qu'elle couvre et la date de restitution. Attention à un détail technique : une pré-autorisation sur une carte européenne expire en général au bout de sept jours environ, plus tôt qu'un séjour d'été de trois semaines ; il faut donc soit encaisser un dépôt et le rembourser, soit prendre la caution sur place avec un reçu numérique. Et « sans caution » doit dire ce qui reste à la charge du client, franchise, pneus, vitres. **Au retour**, l'agent refait les mêmes photos et l'application les affiche côte à côte avec celles du départ : la rayure était là ou elle n'y était pas, et la discussion dure deux minutes.",
      ] },
      { heading: "Ce qu'il faut construire : l'outil de l'agence d'abord", body: [
        "La tentation est de commencer par le beau site de réservation. C'est l'erreur qui fait échouer la plupart des projets de ce type.",
      ], visual: 'stack', after: [
        "**Côté client**, un site et une application en français, en arabe et en anglais, avec le prix total affiché avant le paiement : jours, livraison à l'aéroport de nuit, conducteur supplémentaire, siège enfant. **La plateforme** tient un seul calendrier, où chaque voiture n'a qu'une disponibilité, vraie, à la minute ; des tarifs par saison, été, fêtes, durée ; et des contrats signés en ligne. **Côté agence**, une application sur téléphone pour l'état des lieux, qui fonctionne hors-ligne sur un parking d'aéroport et se synchronise ensuite ; le suivi de la flotte, kilométrage, vidanges, pneus, assurance, contrôle technique ; et un registre des cautions qui dit qui doit quoi et jusqu'à quand.",
        "**Le socle** est à votre nom : serveur, domaine, sauvegardes, et une règle simple, un contrat signé ne se modifie pas, il s'annule et l'annulation reste visible. C'est la même leçon que l'extranet des hôtels dans le modèle Booking : la réservation en ligne ne vaut que ce que vaut le calendrier. Une fois ce calendrier juste, un [agent IA](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) peut répondre aux demandes de disponibilité sur WhatsApp, en arabe ou en français, à 2 h du matin heure de Paris ; avant, il répondrait juste aussi vite que faux.",
      ] },
      { heading: "Le calcul qui justifie l'outil", body: [
        "Le gérant d'agence demande, à juste titre, ce que l'outil lui rapporte. Voici le calcul que nous faisons avec lui, sur ses propres chiffres.",
      ], visual: 'utilisation', after: [
        "Prenons vingt voitures sur la haute saison, de mi-juin à mi-septembre : 92 jours, soit **1 840 jours-voiture** à vendre. Quand le calendrier est tenu au cahier, une voiture qui revient attend souvent un ou deux jours avant de repartir : le temps qu'on la lave, qu'on vérifie qu'elle est bien rentrée, qu'on rappelle le client suivant. Avec deux jours d'attente entre deux locations de dix jours, la voiture est louée 10 jours sur 12, **83 %**. Si elle repart le jour même, avec une demi-journée de battement, elle est louée 10 jours sur 10,5, **95 %**. L'écart, sur 1 840 jours-voiture, fait **environ 220 jours loués en plus, une vingtaine de locations de dix jours, avec la même flotte**.",
        "C'est un exemple de calcul, pas une moyenne du marché, et il suppose ce que l'été rend probable : plus de demandes que de voitures. L'hiver, le raisonnement s'inverse : la demande de la diaspora retombe, et ce sont les contrats de longue durée avec des entreprises, au mois, qui remplissent la flotte. Le même outil les gère, à condition qu'il suive le kilométrage et l'entretien de chaque voiture.",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles reviennent dans les projets qu'on nous présente. Ils ne rapportent pas de la même façon, et ne cassent pas au même endroit.",
      ], visual: 'models', after: [
        "**L'agence avec sa propre réservation en ligne** est le point de départ le plus solide : elle capte les clients de la diaspora en direct, encaisse l'acompte, et ne verse de commission à personne. **L'agrégateur d'agences**, sur le modèle des comparateurs européens, vit d'une commission sur chaque location confirmée ; il ne fonctionne que si les agences partenaires ont un calendrier juste, ce qui revient à leur fournir l'outil. **Le réseau d'agences d'une même marque** permet l'aller simple Alger-Oran et le partage de flotte, à condition de suivre chaque transfert de voiture. **La location entre particuliers**, sur le modèle de Getaround, crée de l'offre sans acheter de voitures, mais l'assurance du véhicule d'un particulier loué à un tiers et la confiance sont à régler avec un assureur avant d'écrire une ligne de code ; nous ne le conseillons pas comme point de départ.",
        "**La longue durée pour les entreprises** remplit l'hiver et lisse la trésorerie. **La location avec chauffeur et les transferts d'aéroport** servent les familles sans permis valable, les mariages et les voyageurs d'affaires ; ils rejoignent la logique de [l'équivalent d'Uber et BlaBlaCar](/blog/creer-equivalent-uber-blablacar-algerie-2026/). Notre conseil est de commencer par la première ligne, dans une ville, et d'ajouter l'agrégateur quand dix à vingt agences utilisent déjà l'outil : à ce moment-là, les disponibilités affichées sont vraies.",
      ] },
      { heading: "Le calendrier pour l'été 2027", body: [
        "La date qui compte n'est pas l'été : c'est le printemps, quand la diaspora réserve son vol et sa voiture.",
      ], visual: 'season', after: [
        "**Novembre : le cadrage écrit**, et le dossier de web-marchand pour le paiement CIB et Edahabia, lancé dès la première semaine, parce que son délai bancaire ne dépend ni de vous ni de nous. **Décembre-janvier : l'outil de l'agence**, flotte, contrats, état des lieux. **Janvier-mars : la réservation en ligne**, l'acompte et la caution. **Février-mars : le pilote** dans deux ou trois agences d'une ville, l'outil tournant en double avec le cahier jusqu'à ce que l'équipe lui fasse confiance. **Avril-mai : l'ouverture des réservations d'été.** Juin-septembre : la haute saison, avec un outil déjà rodé.",
        "C'est cohérent avec les délais que nous donnons dans [combien de temps pour développer une application en 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/) pour une plateforme avec paiement. Commencer en mars, c'est ouvrir en plein été avec un outil que personne n'a encore utilisé un jour d'affluence : mieux vaut alors viser l'été 2028 et passer l'été 2027 en pilote.",
      ] },
      { heading: 'Ce qui fait échouer ce genre de projet', body: [], list: [
        "**Commencer par le site de réservation.** Sans outil côté agence, la plateforme affiche des voitures déjà louées, et la première double réservation d'août détruit sa réputation.",
        "**Un état des lieux libre.** Des photos prises au hasard ne prouvent rien. Angles imposés, horodatage, envoi immédiat au client.",
        "**« Sans caution » sans explication.** Le client découvre au retour la franchise, les pneus ou les vitres. Écrire ce qui reste à sa charge, avant le paiement.",
        "**Compter sur une pré-autorisation de carte pour trois semaines.** Elle expire en général avant la fin du séjour. Dépôt remboursé, ou caution sur place avec reçu numérique.",
        "**Des conducteurs non nommés.** Celui qui conduit sans être au contrat n'est souvent pas assuré. Chaque conducteur est saisi et son permis vérifié avant le vol.",
        "**Ouvrir en juillet.** Les agences d'aéroport sont pleines dès juin. Ouvrir en avril, donc commencer en novembre.",
        "**Les comptes au nom du prestataire.** Serveur, domaine, données et compte web-marchand à votre nom, dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Peut-on lancer une plateforme de location de voitures en Algérie sans posséder de voitures ?", a: "Oui, en agrégeant des agences existantes ou en organisant la location entre particuliers. Dans le premier cas, la plateforme ne marche que si les agences ont un calendrier juste, donc un outil ; dans le second, l'assurance et la confiance doivent être réglées avec un assureur avant le développement." },
        { q: "Comment gérer la caution d'un client qui réserve depuis la France ?", a: "Une pré-autorisation sur carte européenne expire en général au bout de sept jours environ, plus tôt qu'un séjour d'été. Les deux solutions qui tiennent sont un dépôt encaissé puis remboursé, ou une caution prise sur place avec un reçu numérique qui indique le montant, ce qu'elle couvre et la date de restitution." },
        { q: "Comment éviter les litiges sur les dommages au retour ?", a: "Avec un état des lieux photographié sous les mêmes angles au départ et au retour, horodaté, signé sur tablette et envoyé au client dans la minute. L'application affiche les deux séries côte à côte : la discussion se règle sur des images, pas sur des souvenirs." },
        { q: "Un logiciel de gestion de flotte du marché ne suffit-il pas ?", a: "Parfois. Si un logiciel existant couvre la flotte et les contrats et accepte une réservation en ligne connectée à son calendrier, nous vous le disons. Le sur-mesure se justifie pour la réservation depuis la France avec acompte en euros, le paiement CIB et Edahabia, plusieurs agences ou plusieurs villes, ou une plateforme qui agrège d'autres loueurs." },
        { q: "Combien de temps faut-il pour être prêt ?", a: "Environ cinq mois entre le cadrage et l'ouverture des réservations, pilote compris. Pour ouvrir en avril 2027, avant que la diaspora réserve l'été, il faut commencer en novembre 2026, et lancer le dossier de web-marchand dès la première semaine." },
        { q: "Faut-il une application mobile ou un site suffit-il ?", a: "Pour le client, un site rapide en français et en arabe suffit au lancement ; l'application vient quand les clients reviennent. Pour l'agence, l'état des lieux se fait sur téléphone : c'est l'application qui compte en premier, et elle doit fonctionner hors-ligne." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Une agence ne peut pas acheter sa croissance : elle doit faire travailler chaque voiture plus de jours." },
      { after: 2, text: "La réservation en ligne ne vaut que ce que vaut le calendrier." },
    ],
    cta: { eyebrow: 'Décrivez votre projet', title: "Agence existante ou plateforme à lancer, la ville, le nombre de voitures, comment vous gérez aujourd'hui les réservations, les cautions et les états des lieux, et la saison que vous visez. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des plateformes de réservation, des outils de gestion de flotte et des applications d'état des lieux pour les loueurs algériens, hors-ligne d'abord, en arabe, en français et en anglais, avec le paiement en euros et en dinars. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'Série #06', name: "Créer l'équivalent de Booking en Algérie en 2027" },
      { href: '/blog/creer-equivalent-airbnb-algerie-2026/', kind: 'Série', name: "L'équivalent d'Airbnb en Algérie" },
      { href: '/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/', kind: '2027', name: 'Combien de temps pour développer une application en 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
    ] },
  },

  en: {
    kind: 'Series · Seen in France #08', title: "Building a car rental platform in Algeria in 2027: booking from France, the deposit, the condition report and the fleet.",
    dek: "In France you book a car in three minutes and pick it up at the counter with a contract already signed. In Algeria rental is still negotiated on WhatsApp: the car promised is not always the one waiting at the airport, the deposit is paid in cash, and the scratch at return becomes an argument. What a platform must do at each moment of the rental, what to build first, the calculation that justifies it, the model to choose, and the calendar to open before summer 2027.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['Car rental', 'Platform', 'Diaspora', 'Fleet management', 'Algeria 2027'],
    intro: [
      "**Short answer.** A car rental platform that works in Algeria in 2027 is not first a booking site: it is **a true calendar and an indisputable condition report**. A true calendar means the agency records every departure and every return in a tool, not a notebook; otherwise the platform sells cars that are already on the road. An indisputable condition report means time-stamped photos taken from the same angles at departure and return, sent to the customer within the minute. On top of that come booking from France with a deposit, named drivers and a written security deposit. To be ready when the diaspora books, you have to **open in April, so start in November**.",
      "This guide is the eighth in the series “Seen in France, to be built in Algeria”, after [the Booking equivalent](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) and [the Airbnb equivalent](/blog/creer-equivalent-airbnb-algerie-2026/). It is for the diaspora founder who wants to launch the platform, and for the agency manager who wants cars booked without being on the phone.",
    ],
    sections: [
      { heading: 'Why car rental is still booked on WhatsApp', body: [
        "The scenario is familiar. A family lands in Algiers at 11 pm. The car booked on WhatsApp is not there, or it is not the category promised, because another customer kept it two more days. The deposit is paid in cash, with no receipt. Three weeks later, at return, a scratch appears on the wing and nobody can prove whether it was there at departure. **None of this is necessarily dishonest: it is what happens when availability lives in a notebook and the condition report in everyone's memory.**",
        "Demand is massive and concentrated. According to French Ministry of Transport figures reported by Algérie Eco, **3.3 million passengers** travelled between France and Algeria in the first seven months of 2026, around 600,000 of them in July. For the second summer running, new vehicles and vehicles under three years old were restricted at the ports of Algiers and Oran from 15 June to 15 September, and utility vehicles banned on passenger ships: some families who used to bring their car now rent on site. Nothing says the measure will be renewed in 2027, but summer demand does not depend on it. Travel guides advise booking two to three weeks ahead in July and August and report that airport agencies are often fully booked from June.",
        "Supply, on the other side, is fragmented. There is no public count of rental agencies in Algeria; for comparison, Morocco has more than 11,000 for about 200,000 vehicles, and in Tunisia the trade estimates the informal fleet at 20% above the declared one. And cars are expensive to renew: 96,418 new and under-three-year-old used vehicles were imported in 2025, according to the Minister of Industry. **An agency cannot buy its growth: it has to make every car work more days.**",
      ] },
      { heading: 'A rental booked from France, in six moments', body: [
        "The platform must hold each of these six moments. The first three happen from France, the last three at the counter.",
      ], visual: 'journey', after: [
        "**The booking** names every driver: with most rental companies only the people on the contract are insured, and the cousin who drives for one trip is not covered. **The deposit** holds the car: in euros on the France side for the diaspora, or CIB and Edahabia for a resident customer, with the two-country stack we described for [the Booking equivalent](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/). **The documents** go before the flight: photos of the licence and ID, which the agency checks against its own rules, licence seniority and minimum age, which vary from one company to another. The customer does not learn at the counter at midnight that their licence is too recent.",
        "**The handover** follows a fixed protocol: eight photos from set angles, the four sides and the four corners, plus odometer, fuel gauge and interior, time-stamped, signed on a tablet and sent to the customer by link within the minute. **The security deposit** is written: amount, method, what it covers and the return date. Watch one technical detail: a pre-authorisation on a European card generally expires after about seven days, sooner than a three-week summer stay; so either collect a deposit and refund it, or take the security deposit on site with a digital receipt. And “no deposit” must say what the customer still pays: excess, tyres, glass. **At return**, the agent takes the same photos and the app shows them side by side with the departure ones: the scratch was there or it was not, and the conversation lasts two minutes.",
      ] },
      { heading: 'What to build: the agency’s tool first', body: [
        "The temptation is to start with a beautiful booking site. That is the mistake that sinks most projects of this kind.",
      ], visual: 'stack', after: [
        "**Customer side**, a site and an app in French, Arabic and English, with the total price shown before payment: days, night airport delivery, extra driver, child seat. **The platform** keeps one calendar, where each car has only one availability, true, to the minute; seasonal pricing, summer, holidays, length; and contracts signed online. **Agency side**, a phone app for the condition report that works offline in an airport car park and syncs afterwards; fleet tracking, mileage, oil changes, tyres, insurance, inspection; and a deposit register that says who owes what and until when.",
        "**The foundation** is in your name: server, domain, backups, and one simple rule, a signed contract is never edited, it is cancelled and the cancellation stays visible. It is the same lesson as the hotel extranet in the Booking model: online booking is only as good as the calendar. Once the calendar is true, an [AI agent](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) can answer availability requests on WhatsApp, in Arabic or French, at 2 am Paris time; before that, it would answer just as fast and just as wrong.",
      ] },
      { heading: 'The calculation that justifies the tool', body: [
        "The agency manager rightly asks what the tool earns. Here is the calculation we do with them, on their own numbers.",
      ], visual: 'utilisation', after: [
        "Take twenty cars over the high season, mid-June to mid-September: 92 days, so **1,840 car-days** to sell. When the calendar is kept in a notebook, a returning car often waits a day or two before going out again: time to wash it, check it is really back, call the next customer. With two idle days between two ten-day rentals, the car is rented 10 days out of 12, **83%**. If it goes back out the same day, with half a day of buffer, it is rented 10 days out of 10.5, **95%**. Over 1,840 car-days the gap is **about 220 more rented days, some twenty ten-day rentals, with the same fleet**.",
        "It is a worked example, not a market average, and it assumes what summer makes likely: more requests than cars. In winter the reasoning flips: diaspora demand falls, and long-term monthly contracts with companies fill the fleet. The same tool handles them, as long as it tracks each car's mileage and maintenance.",
      ] },
      { heading: 'Which model to build', body: [
        "Six models keep coming up in the projects presented to us. They do not pay the same way, and they do not break in the same place.",
      ], visual: 'models', after: [
        "**The agency with its own online booking** is the soundest starting point: it captures diaspora customers directly, collects the deposit, and pays commission to nobody. **The agency aggregator**, on the model of European comparison sites, lives on a commission per confirmed rental; it only works if partner agencies have a true calendar, which means giving them the tool. **A network of agencies under one brand** allows one-way Algiers–Oran and fleet sharing, provided every car transfer is tracked. **Peer-to-peer rental**, on the Getaround model, creates supply without buying cars, but insuring a private car rented to a third party, and trust, must be settled with an insurer before writing a line of code; we do not advise it as a starting point.",
        "**Long-term rental for companies** fills the winter and smooths cash flow. **Rental with driver and airport transfers** serves families without a valid licence, weddings and business travellers; it joins the logic of [the Uber and BlaBlaCar equivalent](/blog/creer-equivalent-uber-blablacar-algerie-2026/). Our advice is to start with the first row, in one city, and add the aggregator once ten to twenty agencies already use the tool: by then, the availability shown is true.",
      ] },
      { heading: 'The calendar for summer 2027', body: [
        "The date that matters is not summer: it is spring, when the diaspora books its flight and its car.",
      ], visual: 'season', after: [
        "**November: written scoping**, and the merchant application for CIB and Edahabia payment, started in the first week, because the bank's timing depends neither on you nor on us. **December–January: the agency tool**, fleet, contracts, condition report. **January–March: online booking**, deposit and security deposit. **February–March: the pilot** in two or three agencies in one city, with the tool running alongside the notebook until the team trusts it. **April–May: summer bookings open.** June–September: high season, with a tool already run in.",
        "This is consistent with the timelines we give in [how long it takes to build an app in 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/) for a platform with payment. Starting in March means opening in mid-summer with a tool nobody has used on a busy day yet: better then to aim for summer 2028 and spend summer 2027 as a pilot.",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with the booking site.** Without a tool on the agency side, the platform shows cars already rented, and the first double booking in August destroys its reputation.",
        "**A free-form condition report.** Random photos prove nothing. Set angles, time stamp, sent to the customer at once.",
        "**“No deposit” without explanation.** The customer discovers the excess, tyres or glass at return. Write what remains payable, before payment.",
        "**Relying on a card pre-authorisation for three weeks.** It generally expires before the stay ends. Refunded deposit, or security deposit on site with a digital receipt.",
        "**Unnamed drivers.** Whoever drives without being on the contract is often not insured. Every driver is entered and their licence checked before the flight.",
        "**Opening in July.** Airport agencies are full from June. Open in April, so start in November.",
        "**Accounts in the contractor's name.** Server, domain, data and merchant account in your name, from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: "Can you launch a car rental platform in Algeria without owning cars?", a: "Yes, by aggregating existing agencies or organising peer-to-peer rental. In the first case the platform only works if agencies have a true calendar, so a tool; in the second, insurance and trust must be settled with an insurer before development." },
        { q: "How do you handle the security deposit of a customer booking from France?", a: "A pre-authorisation on a European card generally expires after about seven days, sooner than a summer stay. The two solutions that hold are a deposit collected then refunded, or a security deposit taken on site with a digital receipt stating the amount, what it covers and the return date." },
        { q: "How do you avoid damage disputes at return?", a: "With a condition report photographed from the same angles at departure and return, time-stamped, signed on a tablet and sent to the customer within the minute. The app shows both sets side by side: the conversation is settled on images, not memories." },
        { q: "Isn't off-the-shelf fleet software enough?", a: "Sometimes. If existing software covers the fleet and contracts and accepts online booking connected to its calendar, we tell you. Custom work is justified for booking from France with a euro deposit, CIB and Edahabia payment, several agencies or cities, or a platform that aggregates other rental companies." },
        { q: "How long does it take to be ready?", a: "About five months from scoping to opening bookings, pilot included. To open in April 2027, before the diaspora books summer, you need to start in November 2026 and file the merchant application in the first week." },
        { q: "Do you need a mobile app or is a website enough?", a: "For customers, a fast site in French and Arabic is enough at launch; the app comes when customers return. For the agency, the condition report is done on a phone: that app comes first, and it must work offline." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "An agency cannot buy its growth: it has to make every car work more days." },
      { after: 2, text: "Online booking is only as good as the calendar." },
    ],
    cta: { eyebrow: 'Describe your project', title: "Existing agency or platform to launch, the city, the number of cars, how you handle bookings, deposits and condition reports today, and the season you are aiming for. We send back the scope, the calendar and the total price, in writing, before we start.", body: "Symloop builds booking platforms, fleet management tools and condition-report apps for Algerian rental companies, offline first, in Arabic, French and English, with payment in euros and dinars. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name." },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'Series #06', name: 'Building the Booking equivalent in Algeria in 2027' },
      { href: '/blog/creer-equivalent-airbnb-algerie-2026/', kind: 'Series', name: 'The Airbnb equivalent in Algeria' },
      { href: '/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/', kind: '2027', name: 'How long it takes to build an app in 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
    ] },
  },

  ar: {
    kind: 'سلسلة · رأيناه في فرنسا #08', title: "إنشاء منصة لكراء السيارات في الجزائر سنة 2027: الحجز من فرنسا، الضمان، معاينة الحالة والأسطول.",
    dek: "في فرنسا تُحجز السيارة في ثلاث دقائق وتُستلم من الشباك بعقد موقَّع مسبقاً. في الجزائر ما يزال الكراء يُتفاوض عليه على واتساب: السيارة الموعودة ليست دائماً التي تنتظر في المطار، والضمان يُدفع نقداً، والخدش عند الإرجاع يتحول إلى نزاع. ما يجب أن تفعله المنصة في كل لحظة من الكراء، وما يُبنى أولاً، والحساب الذي يبرّرها، والنموذج الذي يُختار، والجدول الزمني للافتتاح قبل صيف 2027.",
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['كراء السيارات', 'منصة', 'الجالية', 'تسيير الأسطول', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** منصة كراء السيارات التي تنجح في الجزائر سنة 2027 ليست أولاً موقع حجز، بل هي **رزنامة صحيحة ومعاينة لا تُنازع**. الرزنامة الصحيحة تعني أن الوكالة تسجّل كل خروج وكل عودة في أداة لا في دفتر، وإلا باعت المنصة سيارات هي في الطريق أصلاً. والمعاينة التي لا تُنازع تعني صوراً مؤرَّخة تُلتقط من الزوايا نفسها عند الخروج والإرجاع وتُرسل إلى الزبون في الدقيقة نفسها. فوق ذلك يأتي الحجز من فرنسا مع العربون، والسائقون بأسمائهم، وضمان مكتوب. لتكون جاهزاً حين تحجز الجالية، يجب **الافتتاح في أفريل، أي البدء في نوفمبر**.",
      "هذا الدليل هو الثامن في سلسلة «رأيناه في فرنسا، ونبنيه في الجزائر»، بعد [مقابل Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) و[مقابل Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/). وهو موجّه إلى مؤسس من الجالية يريد إطلاق المنصة، وإلى مسيّر وكالة يريد أن تُحجز سياراته دون أن يبقى على الهاتف.",
    ],
    sections: [
      { heading: 'لماذا ما يزال الكراء يُحجز على واتساب', body: [
        "السيناريو معروف. عائلة تصل إلى الجزائر العاصمة على الساعة 23. السيارة المحجوزة على واتساب ليست هناك، أو ليست من الفئة الموعودة، لأن زبوناً آخر احتفظ بها يومين إضافيين. الضمان يُدفع نقداً دون وصل. بعد ثلاثة أسابيع، عند الإرجاع، يظهر خدش على الجانب ولا أحد يستطيع إثبات وجوده عند الخروج. **لا شيء من هذا غشّ بالضرورة: هذا ما يحدث حين يعيش التوفّر في دفتر وتعيش المعاينة في ذاكرة كل واحد.**",
        "أما الطلب فكبير ومركّز. حسب أرقام وزارة النقل الفرنسية التي نقلتها Algérie Eco، سافر **3,3 مليون مسافر** بين فرنسا والجزائر في الأشهر السبعة الأولى من 2026، منهم نحو 600 ألف في جويلية. وللصيف الثاني على التوالي، قُيّد دخول السيارات الجديدة أو التي يقل عمرها عن ثلاث سنوات عبر ميناءي الجزائر ووهران من 15 جوان إلى 15 سبتمبر، ومُنعت المركبات النفعية على متن سفن المسافرين: جزء من العائلات التي كانت تأتي بسيارتها صار يكتري في عين المكان. لا شيء يؤكد تجديد الإجراء سنة 2027، لكن طلب الصيف لا يتوقف عليه. وتنصح أدلة السفر بالحجز قبل أسبوعين إلى ثلاثة في جويلية وأوت، وتشير إلى أن وكالات المطار غالباً ما تكون ممتلئة منذ جوان.",
        "في المقابل، العرض مشتّت. لا يوجد إحصاء عمومي لوكالات الكراء في الجزائر؛ وللمقارنة، يضم المغرب أكثر من 11 ألف وكالة لنحو 200 ألف مركبة، وفي تونس تقدّر المهنة الأسطول غير الرسمي بأكثر من الأسطول المصرّح به بـ 20 %. والسيارات مكلفة التجديد: استُورد 96418 مركبة جديدة ومستعملة يقل عمرها عن ثلاث سنوات سنة 2025 حسب وزير الصناعة. **لا تستطيع الوكالة شراء نموها: عليها أن تجعل كل سيارة تعمل أياماً أكثر.**",
      ] },
      { heading: 'كراء محجوز من فرنسا في ست لحظات', body: [
        "يجب أن تمسك المنصة بكل واحدة من هذه اللحظات الست. الثلاث الأولى تجري من فرنسا، والثلاث الأخيرة عند الشباك.",
      ], visual: 'journey', after: [
        "**الحجز** يذكر كل سائق باسمه: عند أغلب المؤجّرين، المذكورون في العقد وحدهم مؤمَّنون، وابن العم الذي يقود في رحلة واحدة غير مغطّى. **العربون** يحجز السيارة: باليورو من جهة فرنسا للجالية، أو CIB والذهبية للزبون المقيم، بالبنية ذات البلدين التي وصفناها في [مقابل Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/). **الوثائق** تُرسل قبل الرحلة: صورة رخصة السياقة والهوية، تتحقق منها الوكالة وفق قواعدها، أقدمية الرخصة والسن الأدنى، وهي تختلف من مؤجّر لآخر. لا يكتشف الزبون عند الشباك في منتصف الليل أن رخصته حديثة جداً.",
        "**التسليم** يتبع بروتوكولاً ثابتاً: ثماني صور من زوايا محددة، الجوانب الأربعة والزوايا الأربع، إضافة إلى العدّاد ومؤشر الوقود والداخل، مؤرَّخة، موقَّعة على اللوحة ومرسلة إلى الزبون برابط في الدقيقة نفسها. **الضمان** مكتوب: المبلغ والطريقة وما يغطيه وتاريخ الإرجاع. انتبه إلى تفصيل تقني: الحجز المسبق على بطاقة أوروبية ينتهي عادة بعد نحو سبعة أيام، أي قبل نهاية إقامة صيفية من ثلاثة أسابيع؛ فإما أن يُحصَّل مبلغ ويُرَدّ، وإما أن يؤخذ الضمان في عين المكان بوصل رقمي. و«دون ضمان» يجب أن تقول ما يبقى على عاتق الزبون: الفرانشيز، العجلات، الزجاج. **عند الإرجاع** يعيد العون الصور نفسها ويعرضها التطبيق جنباً إلى جنب مع صور الخروج: الخدش كان موجوداً أو لم يكن، والنقاش يدوم دقيقتين.",
      ] },
      { heading: 'ما يجب بناؤه: أداة الوكالة أولاً', body: [
        "الإغراء هو البدء بموقع حجز جميل. وهذا هو الخطأ الذي يُفشل أغلب مشاريع هذا النوع.",
      ], visual: 'stack', after: [
        "**من جهة الزبون**، موقع وتطبيق بالفرنسية والعربية والإنجليزية، مع السعر الإجمالي قبل الدفع: الأيام، التوصيل الليلي إلى المطار، السائق الإضافي، مقعد الطفل. **المنصة** تمسك رزنامة واحدة، لكل سيارة فيها توفّر واحد صحيح بالدقيقة؛ وأسعاراً حسب الموسم، الصيف والأعياد والمدة؛ وعقوداً توقَّع إلكترونياً. **من جهة الوكالة**، تطبيق على الهاتف للمعاينة يعمل دون اتصال في موقف المطار ثم يتزامن؛ ومتابعة الأسطول، الكيلومترات وتغيير الزيت والعجلات والتأمين والمراقبة التقنية؛ وسجل ضمانات يقول من يدين بماذا وإلى متى.",
        "**القاعدة** باسمك: الخادم والنطاق والنسخ الاحتياطية، وقاعدة بسيطة: العقد الموقَّع لا يُعدَّل بل يُلغى ويبقى الإلغاء ظاهراً. إنه الدرس نفسه لواجهة الفنادق في نموذج Booking: الحجز عبر الإنترنت لا يساوي أكثر من الرزنامة. حين تصبح الرزنامة صحيحة، يستطيع [وكيل ذكاء اصطناعي](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) الرد على أسئلة التوفّر على واتساب بالعربية أو الفرنسية في الثانية فجراً بتوقيت باريس؛ وقبل ذلك سيجيب بسرعة وبخطأ.",
      ] },
      { heading: 'الحساب الذي يبرّر الأداة', body: [
        "يسأل مسيّر الوكالة، وهو محق، عمّا تجلبه له الأداة. هذا هو الحساب الذي نجريه معه على أرقامه.",
      ], visual: 'utilisation', after: [
        "لنأخذ عشرين سيارة في الموسم العالي، من منتصف جوان إلى منتصف سبتمبر: 92 يوماً، أي **1840 يوم-سيارة** للبيع. حين تُمسك الرزنامة في دفتر، تنتظر السيارة العائدة غالباً يوماً أو يومين قبل أن تخرج: وقت غسلها، والتأكد من عودتها فعلاً، والاتصال بالزبون التالي. مع يومي انتظار بين كراءين من عشرة أيام، تكون السيارة مؤجَّرة 10 أيام من 12، أي **83 %**. وإذا خرجت في اليوم نفسه بنصف يوم من الهامش، تكون مؤجَّرة 10 أيام من 10,5، أي **95 %**. الفارق على 1840 يوم-سيارة هو **نحو 220 يوم كراء إضافي، أي عشرين كراء تقريباً من عشرة أيام، بالأسطول نفسه**.",
        "هذا مثال حساب وليس متوسط السوق، ويفترض ما يجعله الصيف مرجحاً: طلبات أكثر من السيارات. في الشتاء ينقلب المنطق: يتراجع طلب الجالية، وتملأ عقود الكراء الطويل المدة مع المؤسسات، بالشهر، الأسطول. والأداة نفسها تسيّرها، بشرط أن تتابع كيلومترات كل سيارة وصيانتها.",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج تتكرر في المشاريع التي تُعرض علينا. لا تربح بالطريقة نفسها ولا تنكسر في المكان نفسه.",
      ], visual: 'models', after: [
        "**الوكالة بحجزها الخاص عبر الإنترنت** هي أمتن نقطة انطلاق: تكسب زبائن الجالية مباشرة، وتحصّل العربون، ولا تدفع عمولة لأحد. **مجمّع الوكالات**، على نموذج مواقع المقارنة الأوروبية، يعيش من عمولة على كل كراء مؤكَّد؛ ولا يعمل إلا إذا كانت للوكالات الشريكة رزنامة صحيحة، أي إذا زُوّدت بالأداة. **شبكة وكالات بعلامة واحدة** تتيح الذهاب فقط بين الجزائر ووهران ومشاركة الأسطول، بشرط متابعة كل تحويل سيارة. **الكراء بين الأفراد**، على نموذج Getaround، يخلق عرضاً دون شراء سيارات، لكن تأمين سيارة فرد مؤجَّرة لغيره والثقة يجب حسمهما مع مؤمّن قبل كتابة سطر برمجي؛ ولا ننصح به كنقطة انطلاق.",
        "**الكراء الطويل المدة للمؤسسات** يملأ الشتاء ويوازن الخزينة. **الكراء مع سائق والنقل من المطار وإليه** يخدم العائلات دون رخصة صالحة والأعراس ورجال الأعمال، ويلتقي بمنطق [مقابل Uber وBlaBlaCar](/blog/creer-equivalent-uber-blablacar-algerie-2026/). نصيحتنا هي البدء بالسطر الأول في مدينة واحدة، وإضافة المجمّع حين تستعمل عشر إلى عشرين وكالة الأداة: عندها يصبح التوفّر المعروض صحيحاً.",
      ] },
      { heading: 'الجدول الزمني لصيف 2027', body: [
        "التاريخ المهم ليس الصيف بل الربيع، حين تحجز الجالية رحلتها وسيارتها.",
      ], visual: 'season', after: [
        "**نوفمبر: التأطير المكتوب**، وملف التاجر الإلكتروني للدفع بـ CIB والذهبية، يُطلق من الأسبوع الأول لأن آجال البنك لا تتوقف عليك ولا علينا. **ديسمبر-جانفي: أداة الوكالة**، الأسطول والعقود والمعاينة. **جانفي-مارس: الحجز الإلكتروني** والعربون والضمان. **فيفري-مارس: التجربة** في وكالتين أو ثلاث في مدينة واحدة، والأداة تعمل بالتوازي مع الدفتر حتى يثق بها الفريق. **أفريل-ماي: فتح حجوزات الصيف.** جوان-سبتمبر: الموسم العالي بأداة مجرَّبة.",
        "وهذا منسجم مع الآجال التي نعطيها في [كم يستغرق تطوير تطبيق سنة 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/) لمنصة بالدفع. البدء في مارس يعني الافتتاح في عزّ الصيف بأداة لم يستعملها أحد في يوم ازدحام: الأفضل حينها استهداف صيف 2028 وجعل صيف 2027 تجربة.",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بموقع الحجز.** دون أداة لدى الوكالة، تعرض المنصة سيارات مؤجَّرة أصلاً، وأول حجز مزدوج في أوت يهدم سمعتها.",
        "**معاينة حرّة.** الصور العشوائية لا تثبت شيئاً. زوايا محددة، تأريخ، إرسال فوري للزبون.",
        "**«دون ضمان» دون شرح.** يكتشف الزبون عند الإرجاع الفرانشيز أو العجلات أو الزجاج. اكتب ما يبقى على عاتقه قبل الدفع.",
        "**الاعتماد على حجز مسبق للبطاقة لثلاثة أسابيع.** ينتهي عادة قبل نهاية الإقامة. مبلغ يُرَدّ، أو ضمان في عين المكان بوصل رقمي.",
        "**سائقون غير مذكورين.** من يقود دون أن يكون في العقد غالباً غير مؤمَّن. يُسجَّل كل سائق وتُفحص رخصته قبل الرحلة.",
        "**الافتتاح في جويلية.** وكالات المطار ممتلئة منذ جوان. افتح في أفريل، أي ابدأ في نوفمبر.",
        "**الحسابات باسم مقدّم الخدمة.** الخادم والنطاق والبيانات وحساب التاجر الإلكتروني باسمك من الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "هل يمكن إطلاق منصة لكراء السيارات في الجزائر دون امتلاك سيارات؟", a: "نعم، بتجميع وكالات موجودة أو بتنظيم الكراء بين الأفراد. في الحالة الأولى لا تعمل المنصة إلا إذا كانت للوكالات رزنامة صحيحة، أي أداة؛ وفي الثانية يجب حسم التأمين والثقة مع مؤمّن قبل التطوير." },
        { q: "كيف يُسيَّر ضمان زبون يحجز من فرنسا؟", a: "الحجز المسبق على بطاقة أوروبية ينتهي عادة بعد نحو سبعة أيام، أي قبل نهاية إقامة صيفية. الحلّان الصالحان هما مبلغ يُحصَّل ثم يُرَدّ، أو ضمان يؤخذ في عين المكان بوصل رقمي يذكر المبلغ وما يغطيه وتاريخ الإرجاع." },
        { q: "كيف نتجنب نزاعات الأضرار عند الإرجاع؟", a: "بمعاينة مصوَّرة من الزوايا نفسها عند الخروج والإرجاع، مؤرَّخة وموقَّعة على اللوحة ومرسلة إلى الزبون في الدقيقة نفسها. يعرض التطبيق السلسلتين جنباً إلى جنب: يُحسم النقاش بالصور لا بالذكريات." },
        { q: "ألا يكفي برنامج تسيير أسطول جاهز؟", a: "أحياناً. إذا كان برنامج موجود يغطي الأسطول والعقود ويقبل حجزاً إلكترونياً مربوطاً برزنامته، نقول لك ذلك. ويُبرَّر التطوير حسب الطلب للحجز من فرنسا بعربون باليورو، والدفع بـ CIB والذهبية، وعدة وكالات أو مدن، أو منصة تجمع مؤجّرين آخرين." },
        { q: "كم من الوقت يلزم لنكون جاهزين؟", a: "نحو خمسة أشهر من التأطير إلى فتح الحجوزات، مع التجربة. للافتتاح في أفريل 2027، قبل أن تحجز الجالية صيفها، يجب البدء في نوفمبر 2026 وإيداع ملف التاجر الإلكتروني من الأسبوع الأول." },
        { q: "هل يلزم تطبيق للهاتف أم يكفي موقع؟", a: "للزبون، يكفي عند الإطلاق موقع سريع بالفرنسية والعربية؛ ويأتي التطبيق حين يعود الزبائن. أما الوكالة فالمعاينة تتم على الهاتف: تطبيقها هو الأول، ويجب أن يعمل دون اتصال." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "لا تستطيع الوكالة شراء نموها: عليها أن تجعل كل سيارة تعمل أياماً أكثر." },
      { after: 2, text: "الحجز عبر الإنترنت لا يساوي أكثر من الرزنامة." },
    ],
    cta: { eyebrow: 'صف لنا مشروعك', title: "وكالة قائمة أو منصة للإطلاق، المدينة، عدد السيارات، كيف تسيّر اليوم الحجوزات والضمانات والمعاينات، والموسم الذي تستهدفه. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop منصات حجز وأدوات تسيير أسطول وتطبيقات معاينة لمؤجّري السيارات في الجزائر، تعمل دون اتصال أولاً، بالعربية والفرنسية والإنجليزية، مع الدفع باليورو والدينار. مهندسون كبار في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، الخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'سلسلة #06', name: 'إنشاء مقابل Booking في الجزائر سنة 2027' },
      { href: '/blog/creer-equivalent-airbnb-algerie-2026/', kind: 'سلسلة', name: 'مقابل Airbnb في الجزائر' },
      { href: '/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/', kind: '2027', name: 'كم يستغرق تطوير تطبيق سنة 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
    ] },
  },
};

const KEYWORDS = "plateforme location voiture algérie 2027, créer site location voiture algérie, logiciel location voiture algérie, application location voiture algérie, gestion flotte agence location algérie, état des lieux voiture application, caution location voiture algérie diaspora, location voiture aéroport alger réservation en ligne, car rental platform algeria, car rental software algeria, منصة كراء السيارات الجزائر 2027, برنامج تسيير وكالة كراء السيارات";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
