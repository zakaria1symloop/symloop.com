import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-cantine-entreprise-algerie-2027-reservation-des-repas-badge-au-comptoir-sans-reseau-commande-au-traiteur-repas-payes-non-servis-facture.mjs';

const SLUG = 'logiciel-cantine-entreprise-algerie-2027-reservation-des-repas-badge-au-comptoir-sans-reseau-commande-au-traiteur-repas-payes-non-servis-facture';
const FIGURES = ['semaine', 'parcours', 'couches', 'service', 'calendrier', 'situations'];
const DATE = '2026-11-25';
const I = (x) => '⁦' + x + '⁩';

const L = {
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  pointeuse: '/blog/pointeuse-biometrique-logiciel-presence-algerie-2027-controle-d-acces-pointage-mobile-releve-d-heures-sans-ressaisie/',
  planning: '/blog/personne-ne-sait-qui-travaille-demain-planning-des-equipes-application-algerie-2027-besoins-par-creneau-contraintes-echanges-pointage/',
  restaurant: '/blog/logiciel-gestion-restaurant-algerie-2027-fiches-techniques-cout-matiere-par-plat-stock-decompte-a-la-vente-ecart-theorique-reel-salle-cuisine/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  intranet: '/blog/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  erp: '/blog/logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues/',
};

const CONTENT = {
  fr: {
    kind: 'Cantine d’entreprise · Algérie · 2027', title: "Logiciel de cantine d'entreprise en Algérie (2027) : 380 repas commandés chaque matin au jugé, des dizaines payés sans être servis, une feuille d'émargement que personne ne recompte ; réservation la veille, badge au comptoir même sans réseau, commande au traiteur, facture rapprochée, et ce qu'on construit",
    dek: "« Nous sommes une usine de 420 personnes, en trois équipes. Un traiteur livre les repas et nous facture ce que nous commandons. Chaque matin, le responsable de la cantine commande au jugé : trop certains jours, pas assez d'autres. Les gens signent une feuille que personne ne recompte, certains passent deux fois, et en fin de mois nous payons la facture sans pouvoir la vérifier. Comment gérer notre cantine ? » Un logiciel qui sait la veille combien de personnes viendront, compte chaque passage au comptoir même quand le réseau tombe, et met en face le commandé, le servi et le facturé.",
    publishedAt: 'Novembre 2026', readTime: '12 min de lecture', author: 'Symloop', about: ['Cantine d’entreprise', 'Réservation des repas', 'Badge au comptoir', 'Commande au traiteur', 'Rapprochement de facture', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une cantine d'entreprise se gère avec trois nombres par service : les repas commandés, les repas servis, les repas facturés. Tant que la commande est un chiffre fixe et que les passages sont une feuille signée, personne ne connaît les deux premiers. Le logiciel fait réserver la veille avant une heure limite, envoie au traiteur le nombre de réservations plus une marge, lit le badge au comptoir, même sans réseau, et rapproche chaque jour ce qui a été commandé, servi et facturé. Dans l'exemple de cette page, les repas payés sans être servis passent de 260 à 77 par semaine.",
      "Cette page s'adresse aux usines, bases de vie, chantiers, cliniques, écoles et sièges qui nourrissent de cent à quelques milliers de personnes, en Algérie, avec un traiteur ou une cuisine sur place, et aux fondatrices et fondateurs de la diaspora qui dirigent une équipe ici. L'usine, ses effectifs et ses repas sont un exemple construit. La page ne traite ni des règles de paie sur la participation au repas, ni des règles d'hygiène, et ne cite aucun prix.",
    ],
    sections: [
      { heading: "Une semaine de déjeuners : commandé, servi, payé sans être servi", body: [
        "La figure met côte à côte deux semaines de la même cantine : une commande fixe, puis une commande calée sur les réservations.",
      ], visual: 'semaine', after: [
        "**Avant.** Le responsable commande 380 repas chaque matin, parce que c'est le chiffre qui n'a jamais manqué. En recomptant les feuilles d'émargement d'une semaine : 312, 341, 298, 366 et 323 repas servis, soit 1 640 sur 1 900 commandés. 260 repas payés au traiteur n'ont nourri personne, 13,7 % de la commande. **Le mercredi.** 366 servis pour 380 commandés : ce jour-là, il a presque manqué. Un chiffre fixe coûte les jours creux et ne protège pas les jours pleins.",
        "**Après.** La commande est le nombre de réservations à l'heure limite, plus dix. Sur la semaine : 1 652 réservations, 1 702 repas commandés, 1 625 servis, 77 non servis, 4,5 % de la commande. **D'où viennent les 77.** 51 personnes avaient réservé et ne sont pas venues ; 26 repas de marge sont restés, les 24 autres ayant servi des personnes venues sans réserver. **Hors sujet ici.** Si la cuisine est sur place, le coût de chaque plat et les fiches techniques relèvent d'une autre page : voir [le logiciel de gestion de restaurant](" + L.restaurant + ").",
      ] },
      { heading: "Un repas, de la réservation à la facture, en six temps", body: [
        "La figure suit un repas, du menu publié jusqu'à la ligne de la facture du traiteur.",
      ], visual: 'parcours', after: [
        "**La réservation.** Le menu de la semaine est publié, par exemple dans [l'intranet](" + L.intranet + "), et chacun réserve jusqu'à 16 h la veille : sur son téléphone, sur une borne à l'entrée de l'atelier, ou par son chef d'équipe, qui réserve pour ceux qui n'ont ni téléphone ni compte. Une réservation s'annule jusqu'à la même heure. **Qui a droit à quel service.** Le déjeuner pour l'équipe du matin, le dîner pour celle de l'après-midi, un repas de nuit : le droit suit le planning, voir [le planning des équipes](" + L.planning + ").",
        "**La commande.** À l'heure limite, le logiciel compte les réservations, ajoute la marge, sépare les régimes signalés, et envoie le nombre au traiteur ou à la cuisine. Personne ne ressaisit rien. **La clôture.** À la fin du service, quatre nombres : servis sur réservation, servis sans réservation, réservés non venus, seconds passages refusés. **Le rapprochement.** Chaque jour porte trois nombres, commandé, servi, facturé. Dans l'exemple, quatre semaines font 6 808 repas commandés ; la facture du traiteur en compte 6 850. Les 42 repas d'écart se retrouvent sur deux jours précis, et la discussion porte sur ces deux jours.",
      ] },
      { heading: "Ce qu'il y a dans le logiciel", body: [
        "La figure empile cinq couches ; la troisième, le comptoir, est celle qui doit tenir sans réseau.",
      ], visual: 'couches', after: [
        "**Les personnes.** La liste ne se ressaisit pas : elle vient du logiciel de paie ou du pointage, avec l'équipe et le service de chacun. Si vos employés badgent déjà à l'entrée, le même badge sert au comptoir, voir [la pointeuse et le logiciel de présence](" + L.pointeuse + "). Les invités et les intérimaires reçoivent un droit au repas daté. **Qui voit quoi.** Le responsable de la cantine voit les comptes par service ; un chef d'équipe voit son équipe ; le détail par personne est réservé à ceux qui en ont besoin, voir [rôles, droits et journal](" + L.roles + ").",
        "**Les exports.** En fin de mois, le logiciel sort le nombre de repas par personne et par service, pour la personne qui tient la paie et pour le contrôle de gestion. Ce que l'entreprise en fait, participation ou prise en charge, est sa règle : le logiciel fournit le compte. Si vous avez un progiciel de gestion, les repas y arrivent par centre de coût, voir [le logiciel ERP](" + L.erp + "). **Ce que le logiciel ne fait pas.** Il ne choisit ni le traiteur ni le menu, et ne note pas la qualité des plats à votre place : il peut seulement recueillir un avis après le repas.",
      ] },
      { heading: "Un service au comptoir, dont vingt minutes sans réseau", body: [
        "La figure compte les passages d'un déjeuner par tranches de dix minutes, avec vingt minutes de coupure.",
      ], visual: 'service', after: [
        "**Le passage.** Au comptoir, une tablette lit le badge ou le code QR du téléphone. Elle répond en une seconde : servi sur réservation, servi sans réservation si la marge le permet, ou refusé parce que ce badge est déjà passé pour ce service. Dans l'exemple, 339 repas en deux heures, avec un pic de 52 passages en dix minutes. **Le contrôle se fait sur place.** La liste du jour, réservations et droits, est chargée sur la tablette avant le service. Elle n'interroge pas le serveur à chaque badge.",
        "**Sans réseau.** De 12 h 10 à 12 h 30, le réseau est coupé : les 101 passages sont gardés sur la tablette, puis envoyés quand il revient. Chaque passage porte un identifiant unique : envoyé deux fois, il n'est compté qu'une. C'est le même mécanisme que pour toute application de terrain, voir [l'application hors ligne et la synchronisation](" + L.horsligne + "). **Deux comptoirs.** Avec deux tablettes sans réseau, un badge pourrait passer une fois sur chacune ; la clôture le signale au retour du réseau, et vous décidez si le risque mérite un lien local entre les deux.",
      ] },
      { heading: "Huit semaines, en commençant par recompter une semaine", body: [
        "Huit semaines dans l'exemple, dont la première à recompter les feuilles avant d'écrire une ligne de code.",
      ], visual: 'calendrier', after: [
        "**Recompter.** Une semaine de feuilles d'émargement et de bons de commande suffit à connaître l'écart de départ : ici 260 repas sur 1 900. Ce nombre décide de l'ordre du projet. Un petit écart et de longues files : on commence par le comptoir. Un grand écart : par la réservation. **Les personnes.** La liste, les équipes et les badges sont repris des outils existants ; les écrans sont en arabe et en français, voir [l'application en arabe et en français](" + L.bilingue + ").",
        "**Le pilote.** Une équipe d'abord, pendant deux semaines, feuille et badge en parallèle : les deux comptes doivent se rejoindre. **La marge.** Elle commence large, puis se règle chaque mois sur les absences et les venues sans réservation constatées. **La première facture.** Le projet est terminé quand la facture du traiteur du premier mois complet a été rapprochée jour par jour.",
      ] },
      { heading: "Cinq situations, et ce que le logiciel change", body: [
        "La figure reprend cinq situations, avec la feuille d'émargement puis avec le logiciel.",
      ], visual: 'situations', after: [
        "**La commande du lendemain.** Elle cesse d'être une habitude : c'est un compte, arrêté à une heure connue de tous. **Le second passage.** Il est refusé à l'écran, sans discussion au comptoir. **Ceux qui réservent et ne viennent pas.** Le logiciel les liste ; un rappel la veille en réduit le nombre, et la suite relève de votre règlement, pas du logiciel. **La cuisine sur place.** Les réservations donnent aussi les quantités à sortir du magasin : si les denrées sont suivies, voir [le stock dans l'application](" + L.stock + ").",
        "**Ce que le logiciel ne remplace pas.** Le responsable de la cantine : il garde le menu, le lien avec le traiteur et le jugement des jours particuliers, veille de fête, arrêt technique, visite. **Prêt à l'emploi ou sur mesure.** Des logiciels de restauration collective existent et conviennent à un site unique avec des horaires simples. Le sur-mesure se justifie avec plusieurs sites ou bases de vie, des équipes postées, un réseau instable, un badge déjà en place, et des écrans en arabe et en français.",
      ], list: [
        "**Ce que vous recevez** : la réservation sur téléphone, sur borne ou par le chef d'équipe ; l'heure limite et l'annulation ; la commande envoyée au traiteur ; le comptoir sur tablette, qui fonctionne sans réseau ; la clôture de chaque service ; le rapprochement commandé, servi, facturé ; les exports par personne et par service.",
        "**Ce que l'entreprise évite** : la commande au jugé, les repas payés sans être servis, le jour où il en manque, le second passage, la feuille que personne ne recompte, la facture payée sans vérification.",
        "**Ce qui est mesuré** : repas commandés, servis et facturés par jour ; repas non servis en part de la commande ; réservés non venus ; servis sans réservation ; passages par tranche de dix minutes ; passages gardés sans réseau.",
        "**Ce que fait Symloop** : le recomptage de départ avec votre responsable, la reprise des personnes et des badges, la réservation, le comptoir hors ligne, la commande, la clôture, le rapprochement et les exports, en arabe et en français. Le menu, le traiteur et la règle de participation restent les vôtres.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel de cantine d'entreprise ?", a: "Un logiciel qui fait réserver les repas à l'avance, compte chaque passage au comptoir, calcule la commande à envoyer au traiteur ou à la cuisine, et rapproche le commandé, le servi et le facturé." },
        { q: "Comment gérer une cantine d'entreprise ?", a: "Avec trois nombres par service : commandé, servi, facturé. On les obtient par une réservation avant une heure limite, un passage au badge et une clôture à la fin de chaque service." },
        { q: "Comment savoir combien de repas commander ?", a: "En comptant les réservations à l'heure limite et en ajoutant une marge, réglée chaque mois sur les absences et les venues sans réservation constatées." },
        { q: "Le badge fonctionne-t-il sans réseau ?", a: "Oui, si le comptoir est construit pour cela : la liste du jour est chargée sur la tablette avant le service, les passages y sont gardés, puis envoyés au retour du réseau, sans doublon." },
        { q: "Peut-on utiliser le badge de pointage existant ?", a: "Le plus souvent oui : le même badge, ou le même identifiant, sert à l'entrée et au comptoir. Sinon, un code QR affiché sur le téléphone suffit." },
        { q: "Comment réservent ceux qui n'ont pas de téléphone ?", a: "Sur une borne à l'entrée de l'atelier, ou par leur chef d'équipe, qui réserve pour son équipe." },
        { q: "Que se passe-t-il si quelqu'un réserve et ne vient pas ?", a: "La clôture du service le liste. Un rappel la veille réduit ces absences ; la règle à appliquer ensuite est la vôtre." },
        { q: "Comment vérifier la facture du traiteur ?", a: "Jour par jour : le logiciel garde le nombre commandé et le nombre servi, et les met en face du nombre facturé. L'écart se discute sur des jours précis." },
        { q: "Le logiciel gère-t-il la participation des employés au repas ?", a: "Il fournit le nombre de repas par personne et par mois. La règle de participation ou de prise en charge est celle de l'entreprise et n'est pas traitée ici." },
        { q: "Par quoi commencer ?", a: "Par recompter une semaine : les feuilles d'émargement d'un côté, les bons de commande de l'autre. L'écart entre les deux décide de l'ordre du projet." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Un chiffre fixe coûte les jours creux et ne protège pas les jours pleins." },
      { after: 1, text: "La commande n'est plus une habitude : c'est un compte, arrêté à une heure connue de tous." },
    ],
    cta: { eyebrow: "Dites-nous combien de repas vous servez, sur combien de sites, et qui les prépare : nous commençons par recompter une semaine", title: "Commande au jugé, repas payés sans être servis, feuille d'émargement, seconds passages, facture du traiteur invérifiable, ou cantine que vous pilotez en Algérie depuis la France", body: "Symloop construit le logiciel de la cantine : réservation, heure limite, comptoir sur tablette qui fonctionne sans réseau, commande au traiteur, clôture, rapprochement, en arabe et en français. Décrivez-nous vos sites, vos équipes et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.horsligne, kind: '2027', name: 'Application hors ligne et synchronisation' },
      { href: L.pointeuse, kind: '2027', name: 'Pointeuse et logiciel de présence' },
      { href: L.planning, kind: '2027', name: 'Planning des équipes : qui travaille demain' },
      { href: L.restaurant, kind: '2027', name: 'Logiciel de gestion de restaurant' },
    ] },
  },
  en: {
    kind: 'Company canteen · Algeria · 2027', title: "Company canteen software in Algeria (2027): 380 meals ordered every morning by guesswork, dozens paid for and not served, a sign-in sheet nobody recounts; booking the day before, a badge at the counter even without network, the order to the caterer, the invoice reconciled, and what we build",
    dek: "“We are a plant of 420 people, in three shifts. A caterer delivers the meals and invoices what we order. Every morning, the canteen manager orders by guesswork: too many on some days, not enough on others. People sign a sheet nobody recounts, some go through twice, and at the end of the month we pay the invoice without being able to check it. How do we manage our canteen?” Software that knows the day before how many people will come, counts every reading at the counter even when the network drops, and sets side by side what was ordered, served and invoiced.",
    publishedAt: 'November 2026', readTime: '12 min read', author: 'Symloop', about: ['Company canteen', 'Meal booking', 'Badge at the counter', 'Order to the caterer', 'Invoice reconciliation', 'Algeria 2027'],
    intro: [
      "**Short answer.** A company canteen is managed with three numbers per service: meals ordered, meals served, meals invoiced. As long as the order is a fixed figure and the readings are a signed sheet, nobody knows the first two. The software has people book the day before, ahead of a cut-off, sends the caterer the number of bookings plus a margin, reads the badge at the counter, even without network, and reconciles every day what was ordered, served and invoiced. In this page's example, meals paid for and not served go from 260 to 77 a week.",
      "This page is for plants, base camps, construction sites, clinics, schools and head offices that feed one hundred to a few thousand people, in Algeria, with a caterer or a kitchen on site, and for diaspora founders who lead a team here. The plant, its headcount and its meals are a constructed example. The page covers neither payroll rules on meal contributions nor hygiene rules, and quotes no price.",
    ],
    sections: [
      { heading: "One week of lunches: ordered, served, paid for and not served", body: [
        "The figure sets side by side two weeks of the same canteen: a fixed order, then an order based on bookings.",
      ], visual: 'semaine', after: [
        "**Before.** The manager orders 380 meals every morning, because that is the figure that never ran short. Recounting one week of sign-in sheets: 312, 341, 298, 366 and 323 meals served, that is 1,640 out of 1,900 ordered. 260 meals paid to the caterer fed nobody, 13.7% of the order. **Wednesday.** 366 served for 380 ordered: that day, it almost ran short. A fixed figure costs on quiet days and does not protect on busy ones.",
        "**After.** The order is the number of bookings at the cut-off, plus ten. Over the week: 1,652 bookings, 1,702 meals ordered, 1,625 served, 77 not served, 4.5% of the order. **Where the 77 come from.** 51 people had booked and did not come; 26 meals of margin were left over, the other 24 having fed people who came without a booking. **Out of scope here.** If the kitchen is on site, the cost of each dish and the recipe sheets belong to another page: see [restaurant management software](" + L.restaurant + ").",
      ] },
      { heading: "A meal, from booking to invoice, in six steps", body: [
        "The figure follows a meal, from the published menu to the line on the caterer's invoice.",
      ], visual: 'parcours', after: [
        "**Booking.** The week's menu is published, for instance on [the intranet](" + L.intranet + "), and everyone books until 4 p.m. the day before: on their phone, on a kiosk at the workshop entrance, or through their team leader, who books for those who have neither a phone nor an account. A booking can be cancelled until the same time. **Who is entitled to which service.** Lunch for the morning shift, dinner for the afternoon shift, a night meal: the right follows the schedule, see [shift scheduling](" + L.planning + ").",
        "**The order.** At the cut-off, the software counts the bookings, adds the margin, lists the reported diets apart, and sends the number to the caterer or to the kitchen. Nobody retypes anything. **Closing.** At the end of the service, four numbers: served on a booking, served without a booking, booked and absent, second passes refused. **Reconciliation.** Each day carries three numbers, ordered, served, invoiced. In the example, four weeks make 6,808 meals ordered; the caterer's invoice counts 6,850. The 42 meals of difference are found on two precise days, and the discussion is about those two days.",
      ] },
      { heading: "What is inside the software", body: [
        "The figure stacks five layers; the third, the counter, is the one that must hold without network.",
      ], visual: 'couches', after: [
        "**People.** The list is not retyped: it comes from the payroll or attendance software, with everyone's shift and department. If your employees already badge at the entrance, the same badge works at the counter, see [the time clock and attendance software](" + L.pointeuse + "). Guests and temporary staff receive a dated right to a meal. **Who sees what.** The canteen manager sees the counts per service; a team leader sees their team; the detail per person is reserved for those who need it, see [roles, rights and audit log](" + L.roles + ").",
        "**Exports.** At the end of the month, the software gives the number of meals per person and per department, for whoever keeps payroll and for management control. What the company does with it, contribution or full coverage, is its own rule: the software provides the count. If you run a management suite, the meals arrive there per cost centre, see [ERP software](" + L.erp + "). **What the software does not do.** It chooses neither the caterer nor the menu, and does not judge the quality of the dishes for you: it can only collect an opinion after the meal.",
      ] },
      { heading: "One service at the counter, twenty minutes of it without network", body: [
        "The figure counts the readings of one lunch in ten-minute slots, with a twenty-minute outage.",
      ], visual: 'service', after: [
        "**The reading.** At the counter, a tablet reads the badge or the QR code on the phone. It answers in one second: served on a booking, served without a booking if the margin allows it, or refused because this badge has already been used for this service. In the example, 339 meals in two hours, with a peak of 52 readings in ten minutes. **The check is done on the spot.** The day's list, bookings and rights, is loaded on the tablet before the service. It does not query the server at every badge.",
        "**Without network.** From 12:10 to 12:30, the network is down: the 101 readings stay on the tablet, then are sent when it comes back. Each reading carries a unique identifier: sent twice, it is counted once. It is the same mechanism as for any field application, see [offline applications and synchronisation](" + L.horsligne + "). **Two counters.** With two tablets without network, a badge could go through once on each; the closing reports it when the network returns, and you decide whether the risk deserves a local link between the two.",
      ] },
      { heading: "Eight weeks, starting by recounting one week", body: [
        "Eight weeks in the example, the first one spent recounting the sheets before writing a line of code.",
      ], visual: 'calendrier', after: [
        "**Recounting.** One week of sign-in sheets and order slips is enough to know the starting gap: here 260 meals out of 1,900. That number decides the order of the project. A small gap and long queues: start with the counter. A large gap: start with booking. **People.** The list, the shifts and the badges are taken from existing tools; the screens are in Arabic and French, see [applications in Arabic and French](" + L.bilingue + ").",
        "**The pilot.** One shift first, for two weeks, sheet and badge in parallel: the two counts must meet. **The margin.** It starts wide, then is adjusted every month on the observed absences and arrivals without a booking. **The first invoice.** The project is finished when the caterer's invoice for the first full month has been reconciled day by day.",
      ] },
      { heading: "Five situations, and what the software changes", body: [
        "The figure takes five situations, with the sign-in sheet and then with the software.",
      ], visual: 'situations', after: [
        "**Tomorrow's order.** It stops being a habit: it is a count, closed at a time everyone knows. **The second pass.** It is refused on screen, with no argument at the counter. **Those who book and do not come.** The software lists them; a reminder the day before reduces their number, and what follows belongs to your rules, not to the software. **A kitchen on site.** Bookings also give the quantities to take out of the store: if foodstuffs are tracked, see [stock in the application](" + L.stock + ").",
        "**What the software does not replace.** The canteen manager: they keep the menu, the relationship with the caterer and the judgement of particular days, the eve of a holiday, a technical shutdown, a visit. **Ready-made or custom.** Catering software exists and suits a single site with simple hours. Custom work is justified with several sites or base camps, shift work, an unstable network, a badge already in place, and screens in Arabic and French.",
      ], list: [
        "**What you receive**: booking by phone, kiosk or team leader; the cut-off and cancellation; the order sent to the caterer; the counter on a tablet, working without network; the closing of each service; the reconciliation of ordered, served and invoiced; exports per person and per department.",
        "**What the company avoids**: ordering by guesswork, meals paid for and not served, the day it runs short, the second pass, the sheet nobody recounts, the invoice paid unchecked.",
        "**What is measured**: meals ordered, served and invoiced per day; meals not served as a share of the order; booked and absent; served without a booking; readings per ten-minute slot; readings kept without network.",
        "**What Symloop does**: the starting recount with your manager, taking over people and badges, booking, the offline counter, the order, the closing, the reconciliation and the exports, in Arabic and French. The menu, the caterer and the contribution rule remain yours.",
      ], faq: [
        { q: "What is company canteen software?", a: "Software that has meals booked in advance, counts every reading at the counter, computes the order to send to the caterer or the kitchen, and reconciles what was ordered, served and invoiced." },
        { q: "How do you manage a company canteen?", a: "With three numbers per service: ordered, served, invoiced. They come from a booking before a cut-off, a badge reading and a closing at the end of each service." },
        { q: "How do you know how many meals to order?", a: "By counting the bookings at the cut-off and adding a margin, adjusted every month on the observed absences and arrivals without a booking." },
        { q: "Does the badge work without network?", a: "Yes, if the counter is built for it: the day's list is loaded on the tablet before the service, the readings are kept there, then sent when the network returns, with no duplicate." },
        { q: "Can the existing attendance badge be used?", a: "Most often yes: the same badge, or the same identifier, works at the entrance and at the counter. Otherwise, a QR code shown on the phone is enough." },
        { q: "How do people without a phone book?", a: "On a kiosk at the workshop entrance, or through their team leader, who books for the team." },
        { q: "What happens if someone books and does not come?", a: "The service closing lists them. A reminder the day before reduces these absences; the rule to apply afterwards is yours." },
        { q: "How do you check the caterer's invoice?", a: "Day by day: the software keeps the number ordered and the number served, and sets them against the number invoiced. The difference is discussed on precise days." },
        { q: "Does the software handle employees' contribution to meals?", a: "It provides the number of meals per person and per month. The contribution or coverage rule is the company's and is not covered here." },
        { q: "Where do you start?", a: "By recounting one week: the sign-in sheets on one side, the order slips on the other. The gap between the two decides the order of the project." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "A fixed figure costs on quiet days and does not protect on busy ones." },
      { after: 1, text: "The order is no longer a habit: it is a count, closed at a time everyone knows." },
    ],
    cta: { eyebrow: "Tell us how many meals you serve, on how many sites, and who prepares them: we start by recounting one week", title: "Orders by guesswork, meals paid for and not served, a sign-in sheet, second passes, a caterer's invoice you cannot check, or a canteen you run in Algeria from France", body: "Symloop builds the canteen software: booking, cut-off, a tablet counter that works without network, the order to the caterer, closing, reconciliation, in Arabic and French. Describe your sites, your shifts and your tools." },
    related: { label: 'Read also', items: [
      { href: L.horsligne, kind: '2027', name: 'Offline applications and synchronisation' },
      { href: L.pointeuse, kind: '2027', name: 'Time clock and attendance software' },
      { href: L.planning, kind: '2027', name: 'Shift scheduling: who works tomorrow' },
      { href: L.restaurant, kind: '2027', name: 'Restaurant management software' },
    ] },
  },
  ar: {
    kind: 'مطعم المؤسسة · الجزائر · 2027', title: "برنامج مطعم المؤسسة في الجزائر (2027): 380 وجبة تُطلَب كل صباح بالتقدير، عشرات تُدفَع دون أن تُقدَّم، وورقة توقيع لا يعيد أحد عدّها؛ حجز في اليوم السابق، بطاقة عند الشباك ولو دون شبكة، طلبية المموِّن، مطابقة الفاتورة، وما نبنيه",
    dek: "«نحن مصنع من 420 شخصاً، في ثلاثة فرق. مموِّن يسلّم الوجبات ويفوتر ما نطلبه. كل صباح، مسؤول المطعم يطلب بالتقدير: أكثر من اللازم في بعض الأيام، وأقل في أخرى. الناس يوقّعون ورقة لا يعيد أحد عدّها، وبعضهم يمر مرتين، وفي آخر الشهر ندفع الفاتورة دون أن نستطيع التحقق منها. كيف نسيّر مطعمنا؟» برنامج يعرف منذ اليوم السابق كم شخصاً سيأتي، يعدّ كل مرور عند الشباك ولو انقطعت الشبكة، ويضع وجهاً لوجه المطلوب، المقدَّم، والمفوتَر.",
    publishedAt: 'نوفمبر 2026', readTime: '12 دقيقة قراءة', author: 'Symloop', about: ['مطعم المؤسسة', 'حجز الوجبات', 'البطاقة عند الشباك', 'طلبية المموِّن', 'مطابقة الفاتورة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** مطعم المؤسسة يُسيَّر بثلاثة أعداد لكل خدمة: الوجبات المطلوبة، الوجبات المقدَّمة، والوجبات المفوتَرة. وما دامت الطلبية رقماً ثابتاً والمرورات ورقة موقَّعة، فلا أحد يعرف العددين الأولين. البرنامج يجعل الناس يحجزون في اليوم السابق قبل ساعة محددة، يرسل إلى المموِّن عدد الحجوزات زائد هامش، يقرأ البطاقة عند الشباك ولو دون شبكة، ويطابق كل يوم ما طُلب، ما قُدِّم، وما فُوتِر. وفي مثال هذه الصفحة، الوجبات المدفوعة دون تقديم تنتقل من 260 إلى 77 في الأسبوع.",
      "هذه الصفحة موجّهة إلى المصانع، قواعد الحياة، الورشات، العيادات، المدارس، والمقرات التي تُطعم من مئة إلى بضعة آلاف من الأشخاص، في الجزائر، بمموِّن أو بمطبخ في الموقع، وإلى مؤسِّسات ومؤسِّسي الجالية الذين يديرون فريقاً هنا. المصنع وأعداده ووجباته مثال مركَّب. والصفحة لا تتناول قواعد الأجور المتعلقة بالمساهمة في الوجبة، ولا قواعد النظافة، ولا تذكر أي سعر.",
    ],
    sections: [
      { heading: "أسبوع من وجبات الغداء: المطلوب، المقدَّم، والمدفوع دون تقديم", body: [
        "الشكل يضع جنباً إلى جنب أسبوعين من المطعم نفسه: طلبية ثابتة، ثم طلبية مبنية على الحجوزات.",
      ], visual: 'semaine', after: [
        "**قبل.** المسؤول يطلب 380 وجبة كل صباح، لأنه الرقم الذي لم ينقص أبداً. وبإعادة عدّ أوراق التوقيع لأسبوع: 312، 341، 298، 366، و323 وجبة مقدَّمة، أي " + I('1 640') + " من " + I('1 900') + " مطلوبة. 260 وجبة دُفعت للمموِّن ولم تُطعم أحداً، أي " + I('13,7 %') + " من الطلبية. **يوم الأربعاء.** 366 مقدَّمة مقابل 380 مطلوبة: في ذلك اليوم كادت الوجبات تنقص. الرقم الثابت يكلّف في الأيام الهادئة ولا يحمي في الأيام المزدحمة.",
        "**بعد.** الطلبية هي عدد الحجوزات عند الساعة المحددة، زائد عشرة. في الأسبوع: " + I('1 652') + " حجزاً، " + I('1 702') + " وجبة مطلوبة، " + I('1 625') + " مقدَّمة، و77 غير مقدَّمة، أي " + I('4,5 %') + " من الطلبية. **من أين تأتي الـ77.** 51 شخصاً حجزوا ولم يأتوا؛ و26 وجبة بقيت من الهامش، أما الـ24 الأخرى فقُدِّمت لأشخاص جاؤوا دون حجز. **خارج الموضوع هنا.** إذا كان المطبخ في الموقع، فتكلفة كل طبق والبطاقات التقنية تخص صفحة أخرى: انظروا [برنامج تسيير المطعم](" + L.restaurant + ").",
      ] },
      { heading: "وجبة، من الحجز إلى الفاتورة، في ست مراحل", body: [
        "الشكل يتابع وجبة، من القائمة المنشورة إلى سطر فاتورة المموِّن.",
      ], visual: 'parcours', after: [
        "**الحجز.** قائمة الأسبوع تُنشَر، مثلاً في [الشبكة الداخلية](" + L.intranet + ")، وكل واحد يحجز إلى الرابعة مساءً من اليوم السابق: على هاتفه، على شاشة عند مدخل الورشة، أو عن طريق رئيس فريقه، الذي يحجز لمن لا هاتف له ولا حساب. والحجز يُلغى إلى الساعة نفسها. **من له الحق في أي خدمة.** الغداء لفريق الصباح، العشاء لفريق المساء، ووجبة لفريق الليل: الحق يتبع برنامج العمل، انظروا [برنامج عمل الفرق](" + L.planning + ").",
        "**الطلبية.** عند الساعة المحددة، البرنامج يعدّ الحجوزات، يضيف الهامش، يفصل الحِميات المصرَّح بها، ويرسل العدد إلى المموِّن أو إلى المطبخ. لا أحد يعيد إدخال شيء. **الإقفال.** في نهاية الخدمة، أربعة أعداد: من قُدِّمت لهم بحجز، من قُدِّمت لهم دون حجز، من حجزوا ولم يأتوا، والمرورات الثانية المرفوضة. **المطابقة.** كل يوم يحمل ثلاثة أعداد: المطلوب، المقدَّم، والمفوتَر. في المثال، أربعة أسابيع تعطي " + I('6 808') + " وجبة مطلوبة؛ وفاتورة المموِّن تحسب " + I('6 850') + ". الـ42 وجبة من الفارق توجد في يومين محددين، والنقاش يدور حول هذين اليومين.",
      ] },
      { heading: "ما يوجد في البرنامج", body: [
        "الشكل يرصّ خمس طبقات؛ والثالثة، الشباك، هي التي يجب أن تصمد دون شبكة.",
      ], visual: 'couches', after: [
        "**الأشخاص.** القائمة لا يُعاد إدخالها: تأتي من برنامج الأجور أو الحضور، مع فريق ومصلحة كل واحد. وإذا كان عمالكم يمرّرون بطاقة عند المدخل، فالبطاقة نفسها تصلح عند الشباك، انظروا [آلة الحضور وبرنامج الحضور](" + L.pointeuse + "). والضيوف والعمال المؤقتون يُمنَحون حقاً في الوجبة بتاريخ. **من يرى ماذا.** مسؤول المطعم يرى الأعداد لكل خدمة؛ رئيس الفريق يرى فريقه؛ والتفصيل حسب الشخص مخصَّص لمن يحتاجه، انظروا [الأدوار والصلاحيات والسجل](" + L.roles + ").",
        "**التصدير.** في آخر الشهر، البرنامج يُخرج عدد الوجبات لكل شخص ولكل مصلحة، لمن يمسك الأجور ولمراقبة التسيير. وما تفعله المؤسسة بذلك، مساهمة أو تكفّل، هو قاعدتها: البرنامج يقدّم العدّ. وإذا كان عندكم برنامج تسيير شامل، فالوجبات تصل إليه حسب مركز التكلفة، انظروا [برنامج التسيير الشامل](" + L.erp + "). **ما لا يفعله البرنامج.** لا يختار المموِّن ولا القائمة، ولا يحكم على جودة الأطباق مكانكم: يستطيع فقط جمع رأي بعد الوجبة.",
      ] },
      { heading: "خدمة عند الشباك، منها عشرون دقيقة دون شبكة", body: [
        "الشكل يعدّ مرورات غداء واحد في فترات من عشر دقائق، مع عشرين دقيقة من الانقطاع.",
      ], visual: 'service', after: [
        "**المرور.** عند الشباك، لوحة تقرأ البطاقة أو رمز " + I('QR') + " على الهاتف. وتجيب في ثانية: وجبة بحجز، وجبة دون حجز إذا سمح الهامش، أو رفض لأن هذه البطاقة مرّت من قبل في هذه الخدمة. في المثال، 339 وجبة في ساعتين، بذروة من 52 مروراً في عشر دقائق. **التحقق يتم في المكان.** قائمة اليوم، الحجوزات والحقوق، تُحمَّل على اللوحة قبل الخدمة. واللوحة لا تسأل الخادم عند كل بطاقة.",
        "**دون شبكة.** من " + I('12:10') + " إلى " + I('12:30') + "، الشبكة مقطوعة: المرورات الـ101 تبقى على اللوحة، ثم تُرسَل حين تعود. وكل مرور يحمل معرِّفاً فريداً: إذا أُرسل مرتين، يُحسَب مرة واحدة. وهي الآلية نفسها لكل تطبيق ميداني، انظروا [التطبيق دون شبكة والمزامنة](" + L.horsligne + "). **شباكان.** بلوحتين دون شبكة، قد تمر بطاقة مرة على كل واحدة؛ والإقفال يبيّن ذلك عند عودة الشبكة، وأنتم تقررون هل يستحق الخطر ربطاً محلياً بين الاثنتين.",
      ] },
      { heading: "ثمانية أسابيع، بدءاً بإعادة عدّ أسبوع", body: [
        "ثمانية أسابيع في المثال، الأول منها لإعادة عدّ الأوراق قبل كتابة أي سطر من الكود.",
      ], visual: 'calendrier', after: [
        "**إعادة العدّ.** أسبوع من أوراق التوقيع ووصولات الطلب يكفي لمعرفة الفارق عند الانطلاق: هنا 260 وجبة من " + I('1 900') + ". وهذا العدد يحدد ترتيب المشروع. فارق صغير وطوابير طويلة: نبدأ بالشباك. فارق كبير: بالحجز. **الأشخاص.** القائمة، الفرق، والبطاقات تؤخذ من الأدوات الموجودة؛ والشاشات بالعربية والفرنسية، انظروا [التطبيق بالعربية والفرنسية](" + L.bilingue + ").",
        "**التجربة.** فريق واحد أولاً، لمدة أسبوعين، الورقة والبطاقة معاً: العدّان يجب أن يلتقيا. **الهامش.** يبدأ واسعاً، ثم يُضبَط كل شهر على الغيابات وعلى من يأتون دون حجز. **أول فاتورة.** المشروع ينتهي حين تُطابَق فاتورة المموِّن لأول شهر كامل، يوماً بيوم.",
      ] },
      { heading: "خمس حالات، وما يغيّره البرنامج", body: [
        "الشكل يأخذ خمس حالات، مع ورقة التوقيع ثم مع البرنامج.",
      ], visual: 'situations', after: [
        "**طلبية الغد.** لم تعد عادة: هي عدّ، يُقفَل عند ساعة يعرفها الجميع. **المرور الثاني.** يُرفَض على الشاشة، دون نقاش عند الشباك. **من يحجزون ولا يأتون.** البرنامج يسرد أسماءهم؛ وتذكير في اليوم السابق يقلل عددهم، وما يتبع يخص نظامكم الداخلي، لا البرنامج. **المطبخ في الموقع.** الحجوزات تعطي أيضاً الكميات التي تُخرَج من المخزن: إذا كانت المواد متابَعة، انظروا [المخزون في التطبيق](" + L.stock + ").",
        "**ما لا يعوّضه البرنامج.** مسؤول المطعم: يحتفظ بالقائمة، بالعلاقة مع المموِّن، وبتقدير الأيام الخاصة، عشية عيد، توقف تقني، أو زيارة. **جاهز أم على المقاس.** برامج الإطعام الجماعي موجودة وتناسب موقعاً واحداً بمواقيت بسيطة. والبرنامج على المقاس يبرَّر بعدة مواقع أو قواعد حياة، فرق بالتناوب، شبكة غير مستقرة، بطاقة موجودة من قبل، وشاشات بالعربية والفرنسية.",
      ], list: [
        "**ما تستلمونه**: الحجز بالهاتف، بالشاشة، أو عن طريق رئيس الفريق؛ الساعة المحددة والإلغاء؛ الطلبية المرسَلة إلى المموِّن؛ الشباك على لوحة تعمل دون شبكة؛ إقفال كل خدمة؛ مطابقة المطلوب والمقدَّم والمفوتَر؛ والتصدير حسب الشخص والمصلحة.",
        "**ما تتجنبه المؤسسة**: الطلبية بالتقدير، الوجبات المدفوعة دون تقديم، اليوم الذي تنقص فيه الوجبات، المرور الثاني، الورقة التي لا يعيد أحد عدّها، والفاتورة المدفوعة دون تحقق.",
        "**ما يُقاس**: الوجبات المطلوبة، المقدَّمة، والمفوتَرة في كل يوم؛ الوجبات غير المقدَّمة كحصة من الطلبية؛ من حجزوا ولم يأتوا؛ من قُدِّمت لهم وجبة دون حجز؛ المرورات في كل عشر دقائق؛ والمرورات المحفوظة دون شبكة.",
        "**ما تقوم به Symloop**: إعادة العدّ عند الانطلاق مع مسؤولكم، أخذ الأشخاص والبطاقات، الحجز، الشباك دون شبكة، الطلبية، الإقفال، المطابقة، والتصدير، بالعربية والفرنسية. والقائمة، المموِّن، وقاعدة المساهمة تبقى لكم.",
      ], faq: [
        { q: "ما هو برنامج مطعم المؤسسة؟", a: "برنامج يجعل الوجبات تُحجَز مسبقاً، يعدّ كل مرور عند الشباك، يحسب الطلبية التي تُرسَل إلى المموِّن أو المطبخ، ويطابق المطلوب والمقدَّم والمفوتَر." },
        { q: "كيف يُسيَّر مطعم المؤسسة؟", a: "بثلاثة أعداد لكل خدمة: المطلوب، المقدَّم، والمفوتَر. ونحصل عليها بحجز قبل ساعة محددة، بمرور بالبطاقة، وبإقفال في نهاية كل خدمة." },
        { q: "كيف نعرف كم وجبة نطلب؟", a: "بعدّ الحجوزات عند الساعة المحددة وإضافة هامش، يُضبَط كل شهر على الغيابات وعلى من يأتون دون حجز." },
        { q: "هل تعمل البطاقة دون شبكة؟", a: "نعم، إذا بُني الشباك لذلك: قائمة اليوم تُحمَّل على اللوحة قبل الخدمة، المرورات تُحفَظ عليها، ثم تُرسَل عند عودة الشبكة، دون تكرار." },
        { q: "هل يمكن استعمال بطاقة الحضور الموجودة؟", a: "في أغلب الحالات نعم: البطاقة نفسها، أو المعرِّف نفسه، تصلح عند المدخل وعند الشباك. وإلا فرمز يُعرَض على الهاتف يكفي." },
        { q: "كيف يحجز من لا هاتف له؟", a: "على شاشة عند مدخل الورشة، أو عن طريق رئيس فريقه، الذي يحجز لفريقه." },
        { q: "ماذا يحدث إذا حجز شخص ولم يأتِ؟", a: "إقفال الخدمة يذكره. وتذكير في اليوم السابق يقلل هذه الغيابات؛ والقاعدة التي تُطبَّق بعد ذلك قاعدتكم." },
        { q: "كيف نتحقق من فاتورة المموِّن؟", a: "يوماً بيوم: البرنامج يحتفظ بالعدد المطلوب والعدد المقدَّم، ويضعهما أمام العدد المفوتَر. والفارق يُناقَش على أيام محددة." },
        { q: "هل يسيّر البرنامج مساهمة العمال في الوجبة؟", a: "يقدّم عدد الوجبات لكل شخص في الشهر. وقاعدة المساهمة أو التكفّل قاعدة المؤسسة، ولا تتناولها هذه الصفحة." },
        { q: "من أين نبدأ؟", a: "بإعادة عدّ أسبوع: أوراق التوقيع من جهة، ووصولات الطلب من جهة أخرى. والفارق بينهما يحدد ترتيب المشروع." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الرقم الثابت يكلّف في الأيام الهادئة ولا يحمي في الأيام المزدحمة." },
      { after: 1, text: "الطلبية لم تعد عادة: هي عدّ، يُقفَل عند ساعة يعرفها الجميع." },
    ],
    cta: { eyebrow: "قولوا لنا كم وجبة تقدّمون، في كم موقع، ومن يحضّرها: نبدأ بإعادة عدّ أسبوع", title: "طلبية بالتقدير، وجبات مدفوعة دون تقديم، ورقة توقيع، مرورات ثانية، فاتورة مموِّن لا يمكن التحقق منها، أو مطعم تديرونه في الجزائر من فرنسا", body: "Symloop تبني برنامج المطعم: الحجز، الساعة المحددة، شباك على لوحة يعمل دون شبكة، طلبية المموِّن، الإقفال، والمطابقة، بالعربية والفرنسية. صِفوا لنا مواقعكم، فرقكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.horsligne, kind: '2027', name: 'التطبيق دون شبكة والمزامنة' },
      { href: L.pointeuse, kind: '2027', name: 'آلة الحضور وبرنامج الحضور' },
      { href: L.planning, kind: '2027', name: 'برنامج عمل الفرق: من يعمل غداً' },
      { href: L.restaurant, kind: '2027', name: 'برنامج تسيير المطعم' },
    ] },
  },
};

const KEYWORDS = "logiciel cantine entreprise algérie, logiciel cantine, logiciel cantine d'entreprise, gestion cantine entreprise, gestion de cantine d'entreprise, comment gérer une cantine d'entreprise, logiciel restauration collective, logiciel gestion restauration collective, application cantine, badge cantine, réservation repas cantine, cantine entreprise algérie 2027, restauration collective algérie, restauration base de vie, company canteen software algeria, staff canteen management software, meal booking software, برنامج مطعم المؤسسة, برنامج تسيير المطعم الجماعي, حجز الوجبات, الإطعام الجماعي في الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
