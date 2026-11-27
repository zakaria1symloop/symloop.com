import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/on-promet-des-delais-qu-on-ne-tient-pas-planification-de-production-application-algerie-2027-capacite-charge-goulot-date-promise-calculee.mjs';

const SLUG = 'on-promet-des-delais-qu-on-ne-tient-pas-planification-de-production-application-algerie-2027-capacite-charge-goulot-date-promise-calculee';
const FIGURES = ['promettre', 'couches', 'charge', 'situations', 'promesse', 'calendrier'];
const DATE = '2026-11-11';

const L = {
  production: '/blog/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier/',
  configurateur: '/blog/chaque-devis-prend-deux-heures-configurateur-produit-sur-mesure-application-algerie-2027-options-contraintes-regles-de-prix-nomenclature/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  tournees: '/blog/le-camion-repasse-deux-fois-dans-le-meme-quartier-tournees-de-livraison-application-algerie-2027-zones-charge-ordre-des-arrets-replanification/',
  fieldservice: '/blog/le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  jobs: '/blog/rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  b2b: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  booking: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Planification · Capacité · Délais · 2027', title: "« On promet des délais qu'on ne tient pas » : ce qu'on construit dans une application en 2027 pour promettre une date vraie, capacité par ressource, charge des ordres, goulot, composants, tournée, date calculée",
    dek: "« Le vendeur dit le 18 parce que ça fait une semaine. L'atelier découvre la commande le 16, les oranges arrivent le 14, la ligne est pleine jusqu'au 19, et on livre le 25 avec une remise pour s'excuser. Quand une urgence arrive, le dernier qui a crié passe devant, et tous les autres glissent sans que personne ne les prévienne. » Tenir une date n'est pas une question de vendeur prudent, c'est une construction : une capacité par ressource et par jour écrite par le gérant ; une charge qui est la somme des durées de gamme des ordres lancés et promis ; un goulot, la ressource la plus chargée, qui fixe la date ; des composants vérifiés avec leur réception attendue ; la tournée qui livre ; et une date écrite sur la commande avec son calcul, qui ne bouge pas sans décision.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Planification de production', 'Capacité', 'Goulot', 'Date promise', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** La **capacité** est un calendrier par ressource et par jour, heures d'équipe, cadence, arrêts planifiés, congés, écrit par le gérant et modifiable sans développement. La **charge** est la somme des durées de gamme des ordres lancés et promis, par ressource et par jour, recalculée à chaque lancement et corrigée par le pointage de l'atelier. Le **goulot** est la ressource la plus chargée de la période, et c'est lui qui fixe la date : la **promesse** se calcule en vérifiant les **composants**, disponibles ou attendus au délai mesuré, en trouvant le **premier créneau libre du goulot**, en plaçant la gamme autour, et en ajoutant la **tournée** qui livre la zone ; elle est écrite sur la commande avec son calcul et envoyée au client. Une **urgence** déplace un ordre non promis ou ajoute des heures, avec le coût affiché et une décision écrite ; les clients déplacés sont prévenus avant. Le **pointage réel** contre la gamme corrige les durées le mois suivant, pour que la charge cesse d'être optimiste. Selon la définition courante, la réponse « disponible à promettre » repose sur les stocks, les réceptions et ordres planifiés et les besoins déjà engagés ; ce guide y ajoute la capacité du goulot.",
      "Ce guide s'adresse au fabricant qui vend sur commande, jus, cosmétiques, menuiserie, mobilier, emballage, pièces, au grossiste qui conditionne, à l'atelier qui reçoit des urgences tous les jours, et au fondateur installé en France qui veut savoir, avant de répondre à un client, quelle date est vraie. Il ne redit pas comment on lance et chiffre un ordre de fabrication, décrit dans [le guide sur la fabrication](" + L.production + "), ni comment on configure un produit sur mesure, décrit dans [le guide sur le configurateur](" + L.configurateur + ") ; il décrit ce qui, entre la commande et le lancement, répond à la question « pour quand ? », et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Promettre une date, en six temps', body: [
        "Le créneau du goulot est l'étape accentuée : la ressource la plus chargée fixe la date, et le reste se place autour.",
      ], visual: 'promettre', after: [
        "**Recevoir la commande** : la quantité, le produit ou la configuration, et donc la gamme et la nomenclature, sont connus dès la saisie, que la commande vienne du comptoir, du portail de [le guide sur la commande B2B](" + L.b2b + ") ou du configurateur. **Vérifier les composants** : disponibles dans le journal de [le guide sur le stock](" + L.stock + "), réservés par d'autres ordres, ou attendus par une réception au délai mesuré de [le guide sur le réapprovisionnement](" + L.reappro + ") ; la date la plus tardive des composants est la première borne. **Trouver le créneau du goulot** : sur la ressource la plus chargée, le premier jour où la capacité restante couvre la durée de gamme de cet ordre, après la borne des composants.",
        "**Placer la gamme** : les opérations amont, pressage, découpe, se placent avant le créneau du goulot, les opérations aval après, avec leurs durées de gamme. **Ajouter la tournée** : la première tournée de [le guide sur les tournées](" + L.tournees + ") qui dessert la zone du client après la fin de la dernière opération ; pour une pose, l'ordre de travail de [le guide sur les interventions terrain](" + L.fieldservice + "). **Écrire la promesse** : la date est écrite sur la commande avec les quatre bornes qui l'ont produite, et envoyée au client par [le guide sur les notifications](" + L.notif + ") ; le vendeur voit une date, pas une estimation.",
      ] },
      { heading: 'La planification, en cinq couches', body: [
        "La charge est la couche accentuée : elle n'est pas estimée, elle est la somme des gammes, corrigée par le pointage.",
      ], visual: 'couches', after: [
        "**Capacité.** Un calendrier par ressource : heures d'équipe par jour, cadence, arrêts planifiés, congés, pannes déclarées ; écrit par le gérant, changé sans développement, parce qu'une capacité n'est pas une constante. **Charge.** La somme des durées de gamme des ordres lancés et promis, par ressource et par jour, recalculée à chaque lancement par les tâches de [le guide sur les tâches en arrière-plan](" + L.jobs + ") ; le pointage de l'atelier décrit dans [le guide sur la fabrication](" + L.production + ") remplace la durée de gamme par la durée réelle au fur et à mesure, et la charge restante baisse ou monte en continu. **Promesse.** Composants, créneau du goulot, gamme placée, tournée ; date écrite avec son calcul.",
        "**Replanification.** Une urgence, une panne, un retard fournisseur : l'application montre les options, déplacer un ordre non promis vers une date, ajouter des heures sur le goulot, et leur coût ; un ordre promis ne bouge pas sans décision écrite par qui en a le droit selon [le guide sur les rôles](" + L.roles + "), et les clients déplacés sont prévenus avant. **Mesure.** Dates tenues, charge par ressource, heures sup, ordres déplacés, et l'écart entre durée de gamme et pointage, dans [le tableau de bord du gérant](" + L.dashboard + ") ; c'est cet écart qui corrige les gammes le mois suivant.",
      ] },
      { heading: 'Charge contre capacité : trois ressources, dix jours, un goulot', body: [
        "La figure montre le plan de charge d'une quinzaine. Le goulot n'est pas la ressource la plus bruyante, c'est la plus chargée.",
      ], visual: 'charge', after: [
        "Trois ressources : la presse, 8 heures par jour ; la ligne d'embouteillage, 8 heures à 400 bouteilles par heure ; la découpe et l'assemblage de la menuiserie, 16 heures sur deux équipes. Chaque case est la somme des durées de gamme des ordres lancés ce jour-là, contre la capacité écrite par le gérant. La presse est à 61 %, la découpe à 48 % ; la ligne dépasse sa capacité les 18 et 19 novembre, 110 % et 105 %, et c'est elle qui fixe toutes les dates de la quinzaine. Le premier créneau libre de huit heures sur la ligne est le 24.",
        "Le gérant voit le plan de charge chaque matin et peut y agir : ajouter deux heures sur la ligne le 18, ce qui coûte des heures sup et libère 0,8 heure ; ou laisser glisser un ordre non promis au 24. Une panne un mardi met la capacité du jour à zéro, et tous les ordres de la ligne sont replanifiés avec les clients prévenus avant l'heure. Ressources, capacités, ordres et heures sont un exemple construit.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue dans un atelier qui vend sur commande, et la réponse est un calcul, pas de la prudence.",
      ], visual: 'situations', after: [
        "**Le vendeur promet le 18, on livre le 25** : la date est calculée depuis le goulot, les composants et la tournée, et écrite avec son calcul ; le vendeur ne devine plus. **Tout le monde est urgent** : les ordres promis sont protégés ; une urgence déplace un ordre non promis, avec une décision écrite et un client prévenu. **La ligne est pleine, la presse est vide** : la charge est lue par ressource, le goulot fixe la date, et l'amont se cale dessus au lieu de produire du jus qui attend en cuve.",
        "**Le fournisseur livre en retard** : les composants sont vérifiés à la promesse, avec la réception attendue au délai mesuré, pas promis. **Une panne un mardi matin** : la capacité du jour passe à zéro, les ordres sont replanifiés, et les clients sont prévenus avant l'heure, comme dans [le guide sur les tournées](" + L.tournees + "). **La gamme dit 6 heures, l'atelier en prend 8** : le pointage réel est comparé à la gamme, et les durées sont corrigées le mois suivant ; une charge optimiste est une charge fausse.",
      ] },
      { heading: 'Une commande arrive le 11 novembre : la date calculée', body: [
        "La figure suit une commande de 3 000 bouteilles reçue un mardi. Le vendeur aurait dit le 18 ; le calcul dit le 23, et il dit pourquoi.",
      ], visual: 'promesse', after: [
        "**Matières** : il faut 4 200 kilos d'oranges, il en reste 3 100 ; la réception du fournisseur est attendue le 14, au délai mesuré de ses six dernières livraisons ; première borne. **Presse** : six heures, premier créneau le 16. **Ligne** : sept heures et demie ; la ligne est occupée jusqu'au 19 par deux ordres déjà promis, le nouvel ordre se place le 20. **Tournée** : la tournée Nord part le lundi, le 23. La date promise est donc le lundi 23 novembre, écrite sur la commande avec ces quatre bornes, et le client la reçoit par WhatsApp.",
        "**Si le client la veut plus tôt** : pour livrer le 20, il faut décaler l'ordre OF-0415, qui n'est pas promis, au 24 ; l'application le propose, le gérant décide, et le client de l'autre ordre est prévenu. Pour livrer le 18, c'est impossible : pas d'oranges avant le 14, et la ligne à 110 % ; la seule option serait deux heures sup plus des matières de secours, et l'application le dit plutôt que de laisser promettre. Un acompte encaissé à la commande, selon [le guide sur le devis et la facture](" + L.devis + "), fige la promesse. Commande, quantités, dates et créneaux sont un exemple construit.",
      ] },
      { heading: 'Planifier et promettre en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour la capacité et la charge, parce que la promesse n'est qu'une lecture de ces deux couches.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : les ressources, leurs capacités par jour, les équipes et les arrêts, la règle de protection des ordres promis, qui décide un déplacement ; avec le gérant et le chef d'atelier. **Semaines 2 et 3, capacité et charge** : le calendrier de capacité, la charge depuis les gammes des ordres lancés de [le guide sur la fabrication](" + L.production + "), l'écran du plan de charge, le goulot calculé ; comparé aux trois dernières semaines réelles pour vérifier que la charge dit vrai. **Semaine 4, promesse** : composants, créneau du goulot, gamme placée, tournée, date écrite sur la commande avec son calcul, envoi au client.",
        "**Semaine 5, replanification** : urgences, pannes, retards fournisseur, options et coûts, clients prévenus. **Semaine 6, pointage et correction** : durées réelles contre gammes, correction mensuelle, charge restante en continu. **Semaine 7, mesure** : dates tenues, charge par ressource, heures sup, ordres déplacés, revue du lundi. Un atelier de services, un salon ou un garage qui réserve des créneaux suit la même logique avec [le guide sur la réservation](" + L.booking + ") ; ici la ressource est une machine et la durée vient d'une gamme.",
      ], list: [
        "**Ce que le gérant voit** : le plan de charge du matin, le goulot de la semaine, les promesses du jour avec leurs bornes, les ordres déplacés et pourquoi.",
        "**Ce que le vendeur ne fait plus** : deviner une date, appeler l'atelier pour savoir, promettre l'impossible, rappeler le client pour s'excuser.",
        "**Ce qui est mesuré** : dates tenues, charge par ressource, heures sup, ordres déplacés, écart gamme contre pointage, délai moyen entre commande et livraison.",
      ], faq: [
        { q: "D'où vient la date promise ?", a: "De quatre bornes : la date à laquelle les composants sont tous disponibles, le premier créneau libre du goulot qui couvre la durée de gamme, la fin de la dernière opération placée, et la première tournée qui dessert la zone. La date est écrite sur la commande avec ces quatre bornes, pour que n'importe qui puisse la relire." },
        { q: "Pourquoi le goulot et pas chaque machine ?", a: "Parce que la ressource la plus chargée fixe la date de toute façon : si la ligne est pleine jusqu'au 19, presser le jus le 12 ne sert qu'à remplir une cuve. Le goulot est calculé chaque jour, et il peut changer d'une semaine à l'autre." },
        { q: "Que se passe-t-il quand une urgence arrive ?", a: "L'application montre les options et leur coût : déplacer un ordre non promis vers une date précise, ou ajouter des heures sur le goulot. Un ordre promis ne bouge pas sans décision écrite par qui en a le droit, et le client déplacé est prévenu avant l'heure." },
        { q: "Et si la gamme est fausse ?", a: "Le pointage de l'atelier, début et fin par opération, est comparé à la durée de gamme ; les écarts récurrents corrigent la gamme le mois suivant. Une charge calculée sur des gammes optimistes donne des dates optimistes, et c'est le premier écart à surveiller." },
        { q: "La capacité, qui la décide ?", a: "Le gérant, par ressource et par jour : heures d'équipe, cadence, arrêts planifiés, congés. C'est un calendrier, modifiable sans développement ; une panne déclarée met la capacité du jour à zéro et replanifie." },
        { q: "Est-ce que ça marche pour du sur mesure ?", a: "Oui : la configuration acceptée du guide sur le configurateur donne la gamme et la nomenclature, donc la charge et les composants ; la promesse se calcule de la même façon, et le devis peut l'afficher avant acceptation." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour la capacité et la charge. Un atelier qui a déjà les gammes et les ordres du guide sur la fabrication prend moins ; un atelier qui part d'un tableau blanc prend les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "La charge n'est pas estimée : elle est la somme des durées de gamme des ordres lancés, par ressource et par jour, recalculée à chaque lancement et à chaque pointage." },
      { after: 4, text: "La date promise est calculée depuis trois choses connues : les composants, les créneaux libres du goulot et la tournée qui livre ; elle est écrite sur la commande avec son calcul." },
    ],
    cta: { eyebrow: 'Envoyez-nous un mois de commandes et de dates livrées, nous montrons les dates qu’on aurait pu promettre', title: "Fabricant, conditionneur, atelier sur mesure ou fondateur en France : nous construisons le calendrier de capacité, la charge depuis les gammes, le goulot et la date promise calculée que le vendeur peut dire sans trembler", body: "Un plan de charge à blanc sur vos propres ordres, les capacités et la règle de protection écrites avec votre chef d'atelier, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.production, kind: '2027', name: 'Personne ne sait ce que coûte un produit fini : nomenclature, ordre de fabrication' },
      { href: L.configurateur, kind: '2027', name: 'Chaque devis prend deux heures : configurateur sur mesure' },
      { href: L.reappro, kind: '2027', name: 'En rupture tous les mois : point de commande, délai mesuré' },
      { href: L.tournees, kind: '2027', name: 'Le camion repasse deux fois : tournées, replanification' },
    ] },
  },
  en: {
    kind: 'Scheduling · Capacity · Lead times · 2027', title: "“We promise dates we cannot keep”: what gets built in an application in 2027 to promise a true date, capacity per resource, order load, bottleneck, components, delivery round, computed date",
    dek: "“The seller says the 18th because that is a week away. The workshop finds out about the order on the 16th, the oranges arrive on the 14th, the line is full until the 19th, and we deliver on the 25th with a discount to apologise. When an emergency comes in, the last to shout goes first, and everyone else slips without anyone being warned.” Keeping a date is not a matter of a cautious seller, it is a construction: a capacity per resource and per day written by the manager; a load that is the sum of routing durations of launched and promised orders; a bottleneck, the most loaded resource, that sets the date; components checked with their expected reception; the round that delivers; and a date written on the order with its computation, which does not move without a decision.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Production scheduling', 'Capacity', 'Bottleneck', 'Promised date', 'Algeria 2027'],
    intro: [
      "**Short answer.** **Capacity** is a calendar per resource and per day, shift hours, rate, planned stops, leave, written by the manager and changed without development. **Load** is the sum of routing durations of launched and promised orders, per resource and per day, recomputed at every launch and corrected by shop-floor clock-in. The **bottleneck** is the period’s most loaded resource, and it sets the date: the **promise** is computed by checking **components**, available or expected at the measured lead time, finding the **first free slot on the bottleneck**, placing the routing around it, and adding the **round** that delivers the zone; it is written on the order with its computation and sent to the customer. An **emergency** moves an unpromised order or adds hours, with the cost shown and a written decision; moved customers are warned beforehand. **Real clock-in** against the routing corrects durations the following month, so that load stops being optimistic. According to the common definition, the “available to promise” answer rests on stock, planned receipts and orders and requirements already committed; this guide adds the bottleneck’s capacity.",
      "This guide is for the maker who sells to order, juice, cosmetics, joinery, furniture, packaging, parts, the wholesaler who packs, the workshop that gets emergencies every day, and the founder based in France who wants to know, before answering a customer, which date is true. It does not repeat how a production order is launched and costed, described in [the manufacturing guide](" + L.production + "), nor how a made-to-measure product is configured, described in [the configurator guide](" + L.configurateur + "); it describes what, between the order and the launch, answers the question “by when?”, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: 'Promising a date, in six beats', body: [
        "The bottleneck slot is the accented beat: the most loaded resource sets the date, and the rest is placed around it.",
      ], visual: 'promettre', after: [
        "**Receive the order**: the quantity, the product or configuration, and so the routing and the BOM, are known at entry, whether the order comes from the counter, the portal of [the B2B ordering guide](" + L.b2b + ") or the configurator. **Check components**: available in the ledger of [the stock guide](" + L.stock + "), reserved by other orders, or expected by a reception at the measured lead time of [the replenishment guide](" + L.reappro + "); the latest component date is the first bound. **Find the bottleneck slot**: on the most loaded resource, the first day where remaining capacity covers this order’s routing duration, after the component bound.",
        "**Place the routing**: upstream operations, pressing, cutting, go before the bottleneck slot, downstream operations after, with their routing durations. **Add the round**: the first round of [the rounds guide](" + L.tournees + ") serving the customer’s zone after the end of the last operation; for a fitting, the work order of [the field service guide](" + L.fieldservice + "). **Write the promise**: the date is written on the order with the four bounds that produced it, and sent to the customer through [the notifications guide](" + L.notif + "); the seller sees a date, not an estimate.",
      ] },
      { heading: 'Scheduling, in five layers', body: [
        "Load is the accented layer: it is not estimated, it is the sum of routings, corrected by clock-in.",
      ], visual: 'couches', after: [
        "**Capacity.** A calendar per resource: shift hours per day, rate, planned stops, leave, declared breakdowns; written by the manager, changed without development, because capacity is not a constant. **Load.** The sum of routing durations of launched and promised orders, per resource and per day, recomputed at every launch by the jobs of [the background jobs guide](" + L.jobs + "); shop-floor clock-in described in [the manufacturing guide](" + L.production + ") replaces routing duration with real duration as it goes, and remaining load falls or rises continuously. **Promise.** Components, bottleneck slot, placed routing, round; date written with its computation.",
        "**Rescheduling.** An emergency, a breakdown, a supplier delay: the application shows the options, move an unpromised order to a date, add hours on the bottleneck, and their cost; a promised order does not move without a written decision by whoever has the right under [the roles guide](" + L.roles + "), and moved customers are warned beforehand. **Measurement.** Dates kept, load per resource, overtime, orders moved, and the gap between routing duration and clock-in, in [the manager’s dashboard](" + L.dashboard + "); that gap corrects routings the following month.",
      ] },
      { heading: 'Load against capacity: three resources, ten days, one bottleneck', body: [
        "The figure shows a fortnight’s load plan. The bottleneck is not the loudest resource, it is the most loaded.",
      ], visual: 'charge', after: [
        "Three resources: the press, 8 hours a day; the bottling line, 8 hours at 400 bottles an hour; joinery cutting and assembly, 16 hours over two shifts. Each cell is the sum of routing durations of orders launched that day, against the capacity written by the manager. The press is at 61 %, cutting at 48 %; the line exceeds its capacity on 18 and 19 November, 110 % and 105 %, and it sets every date of the fortnight. The first free eight-hour slot on the line is the 24th.",
        "The manager sees the load plan every morning and can act on it: add two hours on the line on the 18th, which costs overtime and frees 0.8 hour; or let an unpromised order slip to the 24th. A breakdown on a Tuesday sets the day’s capacity to zero, and every order on the line is rescheduled with customers warned before the time. Resources, capacities, orders and hours are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard in a make-to-order workshop, and the answer is a computation, not caution.",
      ], visual: 'situations', after: [
        "**The seller promises the 18th, we deliver the 25th**: the date is computed from the bottleneck, components and round, and written with its computation; the seller no longer guesses. **Everyone is urgent**: promised orders are protected; an emergency moves an unpromised order, with a written decision and a warned customer. **The line is full, the press is empty**: load is read per resource, the bottleneck sets the date, and upstream aligns on it instead of producing juice that waits in a tank.",
        "**The supplier delivers late**: components are checked at promise time, with the expected reception at the measured lead time, not the promised one. **A breakdown on a Tuesday morning**: the day’s capacity goes to zero, orders are rescheduled, and customers are warned before the time, as in [the rounds guide](" + L.tournees + "). **The routing says 6 hours, the shop takes 8**: real clock-in is compared with the routing, and durations are corrected the following month; an optimistic load is a wrong load.",
      ] },
      { heading: 'An order arrives on 11 November: the computed date', body: [
        "The figure follows an order of 3,000 bottles received on a Tuesday. The seller would have said the 18th; the computation says the 23rd, and says why.",
      ], visual: 'promesse', after: [
        "**Materials**: 4,200 kilos of oranges are needed, 3,100 remain; the supplier’s reception is expected on the 14th, at the measured lead time of its last six deliveries; first bound. **Press**: six hours, first slot on the 16th. **Line**: seven and a half hours; the line is busy until the 19th with two orders already promised, the new order is placed on the 20th. **Round**: the North round leaves on Monday, the 23rd. The promised date is therefore Monday 23 November, written on the order with these four bounds, and the customer receives it on WhatsApp.",
        "**If the customer wants it sooner**: to deliver on the 20th, order PO-0415, which is not promised, must slip to the 24th; the application proposes it, the manager decides, and the other order’s customer is warned. To deliver on the 18th is impossible: no oranges before the 14th, and the line at 110 %; the only option would be two hours of overtime plus emergency materials, and the application says so rather than letting it be promised. A deposit collected at order time, following [the quote and invoice guide](" + L.devis + "), freezes the promise. Order, quantities, dates and slots are a constructed example.",
      ] },
      { heading: 'Scheduling and promising in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for capacity and load, because the promise is only a reading of those two layers.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: resources, their daily capacities, shifts and stops, the protection rule for promised orders, who decides a move; with the manager and the shop-floor supervisor. **Weeks 2 and 3, capacity and load**: the capacity calendar, load from the routings of launched orders of [the manufacturing guide](" + L.production + "), the load plan screen, the computed bottleneck; compared with the last three real weeks to check that load tells the truth. **Week 4, promise**: components, bottleneck slot, placed routing, round, date written on the order with its computation, sent to the customer.",
        "**Week 5, rescheduling**: emergencies, breakdowns, supplier delays, options and costs, customers warned. **Week 6, clock-in and correction**: real durations against routings, monthly correction, remaining load continuously. **Week 7, measurement**: dates kept, load per resource, overtime, orders moved, Monday review. A service workshop, a salon or a garage booking slots follows the same logic with [the booking guide](" + L.booking + "); here the resource is a machine and the duration comes from a routing.",
      ], list: [
        "**What the manager sees**: the morning load plan, the week’s bottleneck, the day’s promises with their bounds, orders moved and why.",
        "**What the seller no longer does**: guess a date, call the workshop to find out, promise the impossible, call the customer back to apologise.",
        "**What is measured**: dates kept, load per resource, overtime, orders moved, routing-vs-clock-in gap, average time from order to delivery.",
      ], faq: [
        { q: "Where does the promised date come from?", a: "From four bounds: the date when all components are available, the first free bottleneck slot covering the routing duration, the end of the last placed operation, and the first round serving the zone. The date is written on the order with those four bounds, so anyone can re-read it." },
        { q: "Why the bottleneck and not every machine?", a: "Because the most loaded resource sets the date anyway: if the line is full until the 19th, pressing juice on the 12th only fills a tank. The bottleneck is computed every day, and it can change from one week to the next." },
        { q: "What happens when an emergency arrives?", a: "The application shows the options and their cost: move an unpromised order to a precise date, or add hours on the bottleneck. A promised order does not move without a written decision by whoever has the right, and the moved customer is warned before the time." },
        { q: "What if the routing is wrong?", a: "Shop-floor clock-in, start and end per operation, is compared with the routing duration; recurring gaps correct the routing the following month. A load computed on optimistic routings gives optimistic dates, and it is the first gap to watch." },
        { q: "Who decides capacity?", a: "The manager, per resource and per day: shift hours, rate, planned stops, leave. It is a calendar, changed without development; a declared breakdown sets the day’s capacity to zero and reschedules." },
        { q: "Does it work for made-to-measure?", a: "Yes: the accepted configuration of the configurator guide gives the routing and the BOM, hence the load and the components; the promise is computed the same way, and the quote can show it before acceptance." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for capacity and load. A workshop that already has the routings and orders of the manufacturing guide takes less; one starting from a whiteboard takes all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Load is not estimated: it is the sum of routing durations of launched orders, per resource and per day, recomputed at every launch and every clock-in." },
      { after: 4, text: "The promised date is computed from three known things: components, free slots on the bottleneck and the round that delivers; it is written on the order with its computation." },
    ],
    cta: { eyebrow: 'Send us a month of orders and delivered dates, we show the dates that could have been promised', title: "Manufacturer, packer, made-to-measure workshop or founder in France: we build the capacity calendar, load from routings, the bottleneck and the computed promised date the seller can say without flinching", body: "A dry-run load plan on your own orders, capacities and the protection rule written with your shop-floor supervisor, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.production, kind: '2027', name: 'Nobody knows what a finished product costs: BOM, production order' },
      { href: L.configurateur, kind: '2027', name: 'Every quote takes two hours: made-to-measure configurator' },
      { href: L.reappro, kind: '2027', name: 'Out of stock every month: reorder point, measured lead time' },
      { href: L.tournees, kind: '2027', name: 'The van drives through twice: rounds, re-planning' },
    ] },
  },
  ar: {
    kind: 'تخطيط · طاقة · آجال · 2027', title: "«نعد بآجال لا نفي بها»: ما يُبنى في تطبيق سنة 2027 للوعد بتاريخ حقيقي، طاقة لكل مورد، حمل الأوامر، عنق الزجاجة، المكوّنات، الجولة، تاريخ محسوب",
    dek: "«البائع يقول 18 لأن ذلك بعد أسبوع. الورشة تكتشف الطلبية في 16، والبرتقال يصل في 14، والخط ممتلئ حتى 19، ونسلّم في 25 بخصم اعتذاراً. وحين يصل طارئ يتقدم آخر من صرخ، وينزلق الباقون جميعاً دون أن ينبّه أحد أحداً.» الوفاء بتاريخ ليس مسألة بائع حذر بل بناء: طاقة لكل مورد ويوم يكتبها المسيّر؛ حمل هو مجموع مدد مسارات الأوامر المطلقة والموعودة؛ عنق زجاجة، المورد الأكثر حملاً، يحدد التاريخ؛ مكوّنات مفحوصة باستلامها المتوقع؛ الجولة التي تسلّم؛ وتاريخ مكتوب على الطلبية بحسابه لا يتحرك بلا قرار.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تخطيط الإنتاج', 'الطاقة', 'عنق الزجاجة', 'التاريخ الموعود', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** **الطاقة** تقويم لكل مورد ويوم، ساعات الفرق والمعدل والتوقفات المخططة والإجازات، يكتبه المسيّر ويتغير بلا تطوير. و**الحمل** مجموع مدد مسارات الأوامر المطلقة والموعودة، لكل مورد ويوم، يُعاد حسابه عند كل إطلاق ويصحّحه تسجيل الورشة. و**عنق الزجاجة** المورد الأكثر حملاً في الفترة، وهو ما يحدد التاريخ: يُحسب **الوعد** بفحص **المكوّنات**، المتاحة أو المتوقعة بالمهلة المقيسة، وإيجاد **أول فترة حرة لعنق الزجاجة**، ووضع المسار حولها، وإضافة **الجولة** التي تسلّم المنطقة؛ ويُكتب على الطلبية بحسابه ويُرسل للزبون. و**الطارئ** ينقل أمراً غير موعود أو يضيف ساعات، بكلفة معروضة وقرار مكتوب؛ والزبائن المنقولون يُنبَّهون قبلاً. و**التسجيل الحقيقي** مقابل المسار يصحّح المدد الشهر التالي كي يكف الحمل عن التفاؤل. وبالتعريف الشائع، يستند جواب «المتاح للوعد» إلى المخزون والاستلامات والأوامر المخططة والاحتياجات الملتزَم بها أصلاً؛ ويضيف هذا الدليل طاقة عنق الزجاجة.",
      "هذا الدليل موجَّه إلى المصنّع الذي يبيع حسب الطلب، عصير ومستحضرات تجميل ونجارة وأثاث وتعبئة وقطع، وإلى تاجر الجملة الذي يعبّئ، وإلى الورشة التي تتلقى طوارئ كل يوم، وإلى المؤسس المقيم في فرنسا الذي يريد أن يعرف، قبل الرد على زبون، أي تاريخ حقيقي. وهو لا يعيد كيف يُطلق ويُكلَّف أمر تصنيع، الموصوف في [دليل التصنيع](" + L.production + ")، ولا كيف يُهيَّأ منتج على المقاس، الموصوف في [دليل المهيّئ](" + L.configurateur + ")؛ بل يصف ما يجيب، بين الطلبية والإطلاق، عن سؤال «متى؟»، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + ").",
    ],
    sections: [
      { heading: 'الوعد بتاريخ، في ستة أوقات', body: [
        "فترة عنق الزجاجة هي الوقت المميز: المورد الأكثر حملاً يحدد التاريخ، والباقي يوضع حوله.",
      ], visual: 'promettre', after: [
        "**استلام الطلبية**: الكمية والمنتج أو التهيئة، وبالتالي المسار وقائمة المواد، معروفة منذ الإدخال، سواء جاءت الطلبية من الشباك أو من بوابة [دليل الطلب بين الشركات](" + L.b2b + ") أو من المهيّئ. **فحص المكوّنات**: متاحة في سجل [دليل المخزون](" + L.stock + ")، أو محجوزة لأوامر أخرى، أو متوقعة باستلام بالمهلة المقيسة من [دليل إعادة التموين](" + L.reappro + ")؛ وأبعد تاريخ للمكوّنات هو الحد الأول. **إيجاد فترة عنق الزجاجة**: على المورد الأكثر حملاً، أول يوم تغطي فيه الطاقة المتبقية مدة مسار هذا الأمر بعد حد المكوّنات.",
        "**وضع المسار**: عمليات المنبع، عصر وقص، توضع قبل فترة عنق الزجاجة، وعمليات المصب بعدها، بمدد مسارها. **إضافة الجولة**: أول جولة من [دليل الجولات](" + L.tournees + ") تخدم منطقة الزبون بعد نهاية آخر عملية؛ وللتركيب أمر عمل [دليل التدخلات الميدانية](" + L.fieldservice + "). **كتابة الوعد**: يُكتب التاريخ على الطلبية بالحدود الأربعة التي أنتجته ويُرسل للزبون عبر [دليل الإشعارات](" + L.notif + ")؛ والبائع يرى تاريخاً لا تقديراً.",
      ] },
      { heading: 'التخطيط، في خمس طبقات', body: [
        "الحمل هو الطبقة المميزة: لا يُقدَّر بل هو مجموع المسارات مصحَّحاً بالتسجيل.",
      ], visual: 'couches', after: [
        "**الطاقة.** تقويم لكل مورد: ساعات الفرق في اليوم، المعدل، التوقفات المخططة، الإجازات، الأعطال المصرَّح بها؛ يكتبه المسيّر ويتغير بلا تطوير لأن الطاقة ليست ثابتاً. **الحمل.** مجموع مدد مسارات الأوامر المطلقة والموعودة، لكل مورد ويوم، يُعاد حسابه عند كل إطلاق بمهام [دليل مهام الخلفية](" + L.jobs + ")؛ وتسجيل الورشة الموصوف في [دليل التصنيع](" + L.production + ") يستبدل بمدة المسار المدة الحقيقية تباعاً، والحمل المتبقي ينخفض أو يرتفع باستمرار. **الوعد.** مكوّنات، فترة عنق الزجاجة، مسار موضوع، جولة؛ تاريخ مكتوب بحسابه.",
        "**إعادة التخطيط.** طارئ أو عطل أو تأخر مورد: يعرض التطبيق الخيارات، نقل أمر غير موعود إلى تاريخ، إضافة ساعات على عنق الزجاجة، وكلفتها؛ والأمر الموعود لا يتحرك بلا قرار مكتوب ممن له الحق وفق [دليل الأدوار](" + L.roles + ")، والزبائن المنقولون يُنبَّهون قبلاً. **القياس.** تواريخ موفّى بها، حمل لكل مورد، ساعات إضافية، أوامر منقولة، والفارق بين مدة المسار والتسجيل في [لوحة المسيّر](" + L.dashboard + ")؛ وهذا الفارق يصحّح المسارات الشهر التالي.",
      ] },
      { heading: 'الحمل مقابل الطاقة: ثلاثة موارد، عشرة أيام، عنق زجاجة', body: [
        "يُظهر الشكل خطة حمل أسبوعين. عنق الزجاجة ليس المورد الأعلى صوتاً بل الأكثر حملاً.",
      ], visual: 'charge', after: [
        "ثلاثة موارد: المعصرة، 8 ساعات في اليوم؛ خط التعبئة، 8 ساعات بمعدل 400 قارورة في الساعة؛ قص وتجميع النجارة، 16 ساعة على فريقين. وكل خلية مجموع مدد مسارات الأوامر المطلقة ذلك اليوم مقابل الطاقة التي كتبها المسيّر. المعصرة عند 61 ٪، والقص عند 48 ٪؛ والخط يتجاوز طاقته في 18 و19 نوفمبر، 110 ٪ و105 ٪، وهو ما يحدد كل تواريخ الأسبوعين. وأول فترة حرة من ثماني ساعات على الخط في 24.",
        "ويرى المسيّر خطة الحمل كل صباح ويستطيع التصرف فيها: إضافة ساعتين على الخط في 18، وهو ما يكلّف ساعات إضافية ويحرر 0.8 ساعة؛ أو ترك أمر غير موعود ينزلق إلى 24. وعطل يوم ثلاثاء يصفّر طاقة اليوم، ويُعاد تخطيط كل أوامر الخط مع تنبيه الزبائن قبل الوقت. والموارد والطاقات والأوامر والساعات مثال مبني.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت في ورشة تبيع حسب الطلب، والجواب حساب لا حذر.",
      ], visual: 'situations', after: [
        "**البائع يعد بـ 18 ونسلّم في 25**: التاريخ يُحسب من عنق الزجاجة والمكوّنات والجولة ويُكتب بحسابه؛ والبائع لم يعد يخمّن. **الجميع عاجل**: الأوامر الموعودة محمية؛ والطارئ ينقل أمراً غير موعود بقرار مكتوب وزبون منبَّه. **الخط ممتلئ والمعصرة فارغة**: الحمل يُقرأ لكل مورد، وعنق الزجاجة يحدد التاريخ، والمنبع يتناسق معه بدل إنتاج عصير ينتظر في خزان.",
        "**المورد يسلّم متأخراً**: المكوّنات تُفحص عند الوعد بالاستلام المتوقع بالمهلة المقيسة لا الموعودة. **عطل صباح ثلاثاء**: طاقة اليوم تصير صفراً، وتُعاد الأوامر، ويُنبَّه الزبائن قبل الوقت كما في [دليل الجولات](" + L.tournees + "). **المسار يقول 6 ساعات والورشة تأخذ 8**: التسجيل الحقيقي يُقارَن بالمسار، وتُصحَّح المدد الشهر التالي؛ والحمل المتفائل حمل خاطئ.",
      ] },
      { heading: 'طلبية تصل في 11 نوفمبر: التاريخ المحسوب', body: [
        "يتتبع الشكل طلبية 3,000 قارورة وردت يوم ثلاثاء. البائع كان سيقول 18؛ والحساب يقول 23 ويقول لماذا.",
      ], visual: 'promesse', after: [
        "**المواد**: يلزم 4,200 كيلوغرام برتقال وبقي 3,100؛ واستلام المورد متوقع في 14 بالمهلة المقيسة لآخر ست تسليمات؛ الحد الأول. **المعصرة**: ست ساعات، أول فترة في 16. **الخط**: سبع ساعات ونصف؛ الخط مشغول حتى 19 بأمرين موعودين أصلاً، والأمر الجديد يوضع في 20. **الجولة**: جولة الشمال تنطلق يوم الاثنين، 23. فالتاريخ الموعود إذن الاثنين 23 نوفمبر، مكتوباً على الطلبية بهذه الحدود الأربعة، ويتلقاه الزبون بـ WhatsApp.",
        "**إن أراده الزبون أبكر**: للتسليم في 20 يجب إزاحة الأمر OF-0415 غير الموعود إلى 24؛ يقترحه التطبيق، ويقرر المسيّر، ويُنبَّه زبون الأمر الآخر. وللتسليم في 18 مستحيل: لا برتقال قبل 14 والخط عند 110 ٪؛ والخيار الوحيد ساعتان إضافيتان زائد مواد طوارئ، ويقول التطبيق ذلك بدل أن يدع الوعد يُعطى. والعربون المحصَّل عند الطلب وفق [دليل عرض السعر والفاتورة](" + L.devis + ") يجمّد الوعد. والطلبية والكميات والتواريخ والفترات مثال مبني.",
      ] },
      { heading: 'التخطيط والوعد سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان للطاقة والحمل، لأن الوعد مجرد قراءة لهاتين الطبقتين.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: الموارد وطاقاتها اليومية والفرق والتوقفات وقاعدة حماية الأوامر الموعودة ومن يقرر النقل؛ مع المسيّر ورئيس الورشة. **الأسبوعان 2 و3، الطاقة والحمل**: تقويم الطاقة، الحمل من مسارات الأوامر المطلقة في [دليل التصنيع](" + L.production + ")، شاشة خطة الحمل، عنق الزجاجة المحسوب؛ مقارَنة بآخر ثلاثة أسابيع حقيقية للتحقق من أن الحمل يصدق. **الأسبوع 4، الوعد**: مكوّنات، فترة عنق الزجاجة، مسار موضوع، جولة، تاريخ مكتوب على الطلبية بحسابه، إرسال للزبون.",
        "**الأسبوع 5، إعادة التخطيط**: طوارئ وأعطال وتأخر موردين، خيارات وكلف، زبائن منبَّهون. **الأسبوع 6، التسجيل والتصحيح**: مدد حقيقية مقابل المسارات، تصحيح شهري، حمل متبقٍّ باستمرار. **الأسبوع 7، القياس**: تواريخ موفّى بها، حمل لكل مورد، ساعات إضافية، أوامر منقولة، مراجعة الاثنين. وورشة خدمات أو صالون أو مرأب يحجز فترات يتبع المنطق نفسه مع [دليل الحجز](" + L.booking + ")؛ وهنا المورد آلة والمدة من مسار.",
      ], list: [
        "**ما يراه المسيّر**: خطة حمل الصباح، عنق زجاجة الأسبوع، وعود اليوم بحدودها، الأوامر المنقولة ولماذا.",
        "**ما لم يعد البائع يفعله**: تخمين تاريخ، الاتصال بالورشة ليعرف، الوعد بالمستحيل، معاودة الاتصال بالزبون للاعتذار.",
        "**ما يُقاس**: تواريخ موفّى بها، حمل لكل مورد، ساعات إضافية، أوامر منقولة، فارق المسار والتسجيل، متوسط المدة من الطلبية إلى التسليم.",
      ], faq: [
        { q: "من أين يأتي التاريخ الموعود؟", a: "من أربعة حدود: تاريخ توفر كل المكوّنات، وأول فترة حرة لعنق الزجاجة تغطي مدة المسار، ونهاية آخر عملية موضوعة، وأول جولة تخدم المنطقة. ويُكتب التاريخ على الطلبية بهذه الحدود الأربعة كي يستطيع أي أحد إعادة قراءته." },
        { q: "لماذا عنق الزجاجة لا كل آلة؟", a: "لأن المورد الأكثر حملاً يحدد التاريخ على كل حال: إن كان الخط ممتلئاً حتى 19، فعصر العصير في 12 لا يفيد إلا في ملء خزان. ويُحسب عنق الزجاجة كل يوم وقد يتغير من أسبوع إلى آخر." },
        { q: "ماذا يحدث حين يصل طارئ؟", a: "يعرض التطبيق الخيارات وكلفتها: نقل أمر غير موعود إلى تاريخ محدد، أو إضافة ساعات على عنق الزجاجة. والأمر الموعود لا يتحرك بلا قرار مكتوب ممن له الحق، والزبون المنقول يُنبَّه قبل الوقت." },
        { q: "وإن كان المسار خاطئاً؟", a: "تسجيل الورشة، بداية ونهاية لكل عملية، يُقارَن بمدة المسار؛ والفوارق المتكررة تصحّح المسار الشهر التالي. والحمل المحسوب على مسارات متفائلة يعطي تواريخ متفائلة، وهو أول فارق يُراقَب." },
        { q: "من يقرر الطاقة؟", a: "المسيّر، لكل مورد ويوم: ساعات الفرق والمعدل والتوقفات المخططة والإجازات. وهي تقويم يتغير بلا تطوير؛ والعطل المصرَّح به يصفّر طاقة اليوم ويعيد التخطيط." },
        { q: "هل يعمل للمصنوع على المقاس؟", a: "نعم: التهيئة المقبولة من دليل المهيّئ تعطي المسار وقائمة المواد، وبالتالي الحمل والمكوّنات؛ ويُحسب الوعد بالطريقة نفسها، ويستطيع عرض السعر إظهاره قبل القبول." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان للطاقة والحمل. وورشة لديها المسارات والأوامر من دليل التصنيع تأخذ أقل؛ ومن تبدأ من سبورة بيضاء تأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "الحمل لا يُقدَّر: هو مجموع مدد مسارات الأوامر المطلقة، لكل مورد ويوم، يُعاد حسابه عند كل إطلاق وكل تسجيل." },
      { after: 4, text: "التاريخ الموعود يُحسب من ثلاثة أشياء معروفة: المكوّنات، الفترات الحرة لعنق الزجاجة، والجولة التي تسلّم؛ ويُكتب على الطلبية بحسابه." },
    ],
    cta: { eyebrow: 'أرسلوا لنا شهراً من الطلبيات وتواريخ التسليم، نُريكم التواريخ التي كان يمكن الوعد بها', title: "مصنّع أو معبّئ أو ورشة على المقاس أو مؤسس في فرنسا: نبني تقويم الطاقة، والحمل من المسارات، وعنق الزجاجة، والتاريخ الموعود المحسوب الذي يقوله البائع دون أن يرتجف", body: "خطة حمل على الفارغ على أوامركم أنتم، والطاقات وقاعدة الحماية تُكتب مع رئيس ورشتكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.production, kind: '2027', name: 'لا أحد يعرف كم يكلّف المنتج النهائي: قائمة مواد، أمر تصنيع' },
      { href: L.configurateur, kind: '2027', name: 'كل عرض سعر يأخذ ساعتين: مهيّئ على المقاس' },
      { href: L.reappro, kind: '2027', name: 'نفاد كل شهر: نقطة إعادة الطلب، مهلة مقيسة' },
      { href: L.tournees, kind: '2027', name: 'الشاحنة تمر مرتين: جولات، إعادة تخطيط' },
    ] },
  },
};

const KEYWORDS = "planification de production application algérie 2027, plan de charge capacité par ressource logiciel atelier, goulot d'étranglement production date promise, délai de livraison promis calculé commande, available to promise capable to promise pme algérie, replanification urgence ordre de fabrication, capacité par jour équipes arrêts calendrier, charge depuis gammes ordres lancés, pointage atelier durée réelle gamme, dates tenues indicateur atelier, développement application planification atelier algérie, production scheduling app algeria 2027 capacity load bottleneck promise date, تخطيط الإنتاج طاقة حمل عنق الزجاجة تاريخ موعود تطبيق الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
