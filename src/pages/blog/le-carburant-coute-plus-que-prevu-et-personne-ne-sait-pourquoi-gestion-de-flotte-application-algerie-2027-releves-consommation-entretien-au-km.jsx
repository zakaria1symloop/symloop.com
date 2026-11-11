import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/le-carburant-coute-plus-que-prevu-et-personne-ne-sait-pourquoi-gestion-de-flotte-application-algerie-2027-releves-consommation-entretien-au-km.mjs';

const SLUG = 'le-carburant-coute-plus-que-prevu-et-personne-ne-sait-pourquoi-gestion-de-flotte-application-algerie-2027-releves-consommation-entretien-au-km';
const FIGURES = ['couches', 'vehicule', 'flotte', 'situations', 'plein', 'calendrier'];
const DATE = '2026-11-11';

const L = {
  tournees: '/blog/le-camion-repasse-deux-fois-dans-le-meme-quartier-tournees-de-livraison-application-algerie-2027-zones-charge-ordre-des-arrets-replanification/',
  fieldservice: '/blog/le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  ia: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  jobs: '/blog/rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  excel: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
  garage: '/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Flotte · Carburant · Entretien · 2027', title: "« Le carburant coûte plus que prévu, et personne ne sait pourquoi » : ce qu'on construit dans une application en 2027 pour une flotte, relevés de compteur, consommation calculée, bande attendue, entretien au kilomètre, échéances, coût par kilomètre",
    dek: "« On a six véhicules. Les tickets de carburant arrivent dans une boîte, le total monte chaque mois, et personne ne sait quel véhicule ni quel chauffeur. La vidange se fait quand le chauffeur y pense, l'assurance a expiré un mardi, et quand il faut remplacer un véhicule, on prend le plus vieux, au sentiment. » Une flotte n'est pas une affaire de chauffeurs plus honnêtes, c'est une construction : un compteur photographié au départ, au retour et à chaque plein ; une consommation calculée depuis le ticket et l'écart de compteur, pas déclarée ; une bande attendue par véhicule, depuis son propre historique ; un entretien dû par kilomètre et des documents à échéance qui alertent avant ; et un coût par kilomètre, carburant et entretien séparés, qui décide quel véhicule garder.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Gestion de flotte', 'Consommation', 'Entretien au kilomètre', 'Coût par kilomètre', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Chaque véhicule a une **fiche** : compteur, chauffeur habituel, affectation par jour et par tournée, plans d'entretien par kilomètre, documents avec leurs dates. Le **compteur** est **photographié** au départ et au retour de chaque tournée et à chaque plein, hors ligne, horodaté ; les chiffres sont lus et confirmés, jamais tapés de mémoire. Le **ticket** est scanné, litres et montant lus sur la photo. La **consommation** par plein est **calculée**, litres divisés par les kilomètres depuis le plein précédent, fois cent, selon la définition courante, et comparée à une **bande attendue** construite sur l'historique de ce véhicule-là ; un plein hors bande déclenche une **question** au chauffeur, avec le ticket et les deux relevés, puis une **qualification** par le gérant avec une cause codée. L'**entretien** est dû par kilomètre, depuis les relevés de tournée, et alerte avant l'échéance ; les **documents** alertent à trente et sept jours. Le **coût par kilomètre**, carburant et entretien séparés, par véhicule, est le chiffre qui décide quel véhicule remplacer.",
      "Ce guide s'adresse au distributeur et à la société de livraison qui ont cinq à cinquante véhicules, à l'entreprise de maintenance dont les techniciens roulent toute la journée, au loueur et au transporteur, et au fondateur installé en France qui veut lire chaque lundi ce que lui coûte chaque véhicule. Il ne redit pas comment on planifie une tournée, décrit dans [le guide sur les tournées](" + L.tournees + "), ni comment on gère un équipement et ses interventions, décrit dans [le guide sur les interventions terrain](" + L.fieldservice + ") ; un véhicule est un équipement avec un compteur, et ce guide décrit ce que le compteur ajoute, puis il prolonge [notre page sur l'ingénierie logicielle](" + L.service + "). Il ne traite pas des obligations réglementaires des véhicules : les dates des documents sont saisies par le gérant, l'application les rappelle.",
    ],
    sections: [
      { heading: 'La gestion de flotte, en cinq couches', body: [
        "Les relevés sont la couche accentuée : sans compteur photographié, rien au-dessus n'est vrai.",
      ], visual: 'couches', after: [
        "**Véhicules et chauffeurs.** Une fiche par véhicule, un équipement au sens de [le guide sur les interventions terrain](" + L.fieldservice + "), avec un compteur en plus ; les affectations par jour et par tournée viennent du plan de [le guide sur les tournées](" + L.tournees + "), et le relevé au départ est signé par le chauffeur du jour. **Relevés.** Le compteur photographié au départ, au retour et à chaque plein, sur le téléphone hors ligne selon [le guide sur le hors-ligne](" + L.horsligne + "), horodaté et conservé selon [le guide sur les photos qui font foi](" + L.photos + ") ; les chiffres sont lus sur la photo, confirmés par le chauffeur, et un relevé inférieur au précédent est refusé. Le ticket est lu par le même mécanisme que [le guide sur la lecture de factures par IA](" + L.ia + "), litres, montant, station, et corrigé si besoin.",
        "**Calculs.** Consommation par plein ; bande attendue par véhicule, médiane de ses pleins passés plus ou moins une marge écrite ; coût par kilomètre, carburant et entretien sur les kilomètres relevés ; recalculés chaque nuit par les tâches de [le guide sur les tâches en arrière-plan](" + L.jobs + "). **Alertes.** Plein hors bande, entretien dû, document à échéance ; question au chauffeur par [le guide sur les notifications](" + L.notif + "), tâche au gérant, qualification avec cause. **Mesure et décision.** Coût par kilomètre par véhicule dans [le tableau de bord du gérant](" + L.dashboard + "), carburant et entretien séparés, kilomètres par chauffeur, anomalies qualifiées ; export des coûts par véhicule à la comptabilité par [le guide sur l'intégration](" + L.integrer + ").",
      ] },
      { heading: 'La fiche d’une camionnette : dix pleins, une bande, deux anomalies', body: [
        "La figure suit une camionnette depuis septembre. Chaque point est un calcul, pas une déclaration.",
      ], visual: 'vehicule', after: [
        "**Dix pleins**, chacun transformé en litres aux cent kilomètres depuis le ticket et l'écart de compteur : huit entre 9,7 et 10,3, dans une **bande attendue** de 9,5 à 10,8 construite sur la médiane de ce véhicule, plus ou moins huit pour cent. Deux pleins en sortent : 13,6 le 2 octobre avec un chauffeur remplaçant, et 15,2 le 4 novembre, un ticket de 62 litres pour 408 kilomètres. Dans les deux cas, une question est partie au chauffeur avec le ticket et les deux relevés ; dans le premier, aucune justification n'est revenue ; dans le second, le gérant vérifie lundi. La consommation varie avec la charge, le relief et la conduite : la bande est large exprès, et c'est le gérant qui qualifie, pas l'application.",
        "**L'entretien** est dû par kilomètre : la vidange à 90 000, dans 3 580 kilomètres au rythme de ce mois, soit une alerte dans dix jours ; les pneus à 95 000, avec l'usure relevée au plein. **Les documents** : l'assurance expire dans 33 jours, l'alerte est partie à 30 ; le contrôle dans 83. Trois chiffres : 18,4 dinars par kilomètre ce mois, 3 120 kilomètres, 312 litres dont deux pleins hors bande. Un garage partenaire reçoit l'ordre de vidange avec le kilométrage, comme dans [le guide sur le garage](" + L.garage + "). Véhicule, pleins, compteur, dates et coûts sont un exemple construit.",
      ] },
      { heading: 'Le tableau de la flotte : six véhicules, un coût par kilomètre', body: [
        "La figure montre ce que le gérant lit le lundi : chaque véhicule comparé à lui-même, et un chiffre pour décider.",
      ], visual: 'flotte', after: [
        "Six véhicules, et pour chacun le chauffeur, les kilomètres du mois depuis les relevés de tournée, la consommation réelle contre l'attendu du véhicule, le coût par kilomètre, l'état de l'entretien et des documents, et un signal. La camionnette B a deux pleins hors bande ; la camionnette D a dépassé sa vidange de 1 200 kilomètres parce que son chauffeur a changé et que l'alerte était partie à l'ancien, ce que la fiche corrige ; le fourgon F a une assurance qui expire dans six jours et sera bloqué au planning de tournée s'il n'est pas renouvelé. Le fourgon à 13,1 litres n'est pas une anomalie : son attendu est 12,8, il roule chargé.",
        "**Le coût par kilomètre** additionne carburant et entretien sur les kilomètres relevés : 17,1 dinars pour la flotte ce mois, de 12,3 pour l'utilitaire récent à 21,2 pour le fourgon. C'est ce chiffre, sur six mois, qui décide quel véhicule remplacer, pas l'âge au sentiment. Les véhicules frigorifiques ajoutent les relevés de température de [le guide sur la chaîne du froid](" + L.froid + ") à la même fiche. Véhicules, chauffeurs, kilomètres et coûts sont un exemple construit.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue chez un distributeur, et la réponse est un relevé et un calcul, pas de la méfiance.",
      ], visual: 'situations', after: [
        "**Le carburant coûte plus que prévu** : la consommation est calculée par plein et par véhicule, et le plein hors bande est signalé le jour même, avec le ticket et les relevés. **Le ticket ne correspond pas au compteur** : le calcul se fait au plein, et la question part au chauffeur immédiatement, pas au mois. **La vidange est faite trop tard** : l'entretien est dû par kilomètre depuis les relevés de tournée, et l'alerte part avant, au chauffeur du jour et au gérant.",
        "**L'assurance a expiré hier** : les dates sont sur la fiche, les alertes partent à trente et sept jours, et un véhicule dont un document est expiré est bloqué au planning de tournée. **Deux chauffeurs, un véhicule, un accident** : l'affectation est par jour et par tournée, et le relevé au départ est signé. **Quel véhicule remplacer ?** : le coût par kilomètre par véhicule, carburant et entretien séparés, sur six mois. Qui peut qualifier une anomalie ou modifier un relevé suit [le guide sur les rôles](" + L.roles + ").",
      ] },
      { heading: 'Un plein, en six temps', body: [
        "Le calcul est l'étape accentuée : il est fait à la pompe, et il compare le véhicule à lui-même.",
      ], visual: 'plein', after: [
        "**Relever le compteur** : photo, chiffres lus et confirmés, horodatage, hors ligne ; un relevé inférieur au précédent est refusé. **Scanner le ticket** : litres, montant, station lus sur la photo, corrigés si besoin ; le ticket reste attaché au plein. **Calculer** : litres divisés par les kilomètres depuis le plein précédent, fois cent ; comparé à la bande du véhicule. Trente secondes à la pompe, sans réseau.",
        "**Signaler** : hors bande, une question part au chauffeur avec le ticket et les deux relevés ; il répond, charge exceptionnelle, trajet en montagne, ou ne répond pas. **Qualifier** : le gérant code la cause, charge, trajet, fuite, conduite, ou confirme l'anomalie ; la bande ne s'ajuste pas toute seule. **Imputer** : le coût va au véhicule, au chauffeur, à la tournée, et part en comptabilité ; les tickets d'un mois tiennent dans un export, pas dans une boîte.",
      ] },
      { heading: 'Outiller une flotte en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour les fiches et les relevés, parce que sans relevé rien n'est vrai.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : la liste des véhicules, les plans d'entretien par kilomètre, les documents et leurs dates, la largeur de la bande, les causes de qualification ; avec le gérant et un chauffeur, parce que c'est lui qui relèvera. **Semaines 2 et 3, fiches et relevés** : fiche véhicule, affectation par tournée, relevé photo au départ, au retour et au plein, hors ligne, avec lecture des chiffres et refus d'un relevé en recul. **Semaine 4, calculs et alertes** : consommation par plein, bande par véhicule, entretien au kilomètre, échéances, questions et qualification.",
        "**Semaine 5, coûts** : carburant et entretien par véhicule et par kilomètre, imputation aux tournées, export comptable. **Semaine 6, reprise** : l'historique des pleins depuis les tickets de la boîte ou le fichier, avec [le guide sur l'import](" + L.excel + "), les compteurs de départ, les bandes initiales. **Semaine 7, mesure** : coût par kilomètre par véhicule, anomalies qualifiées, entretiens à l'heure, revue du lundi ; le fondateur en France lit le même tableau dans [le guide sur la gestion à distance](" + L.commerce + ").",
      ], list: [
        "**Ce que le gérant voit** : le tableau de la flotte le lundi, chaque véhicule contre son attendu, les alertes ouvertes, le coût par kilomètre, et les anomalies à qualifier.",
        "**Ce que le chauffeur ne fait plus** : garder les tickets, déclarer le compteur de mémoire, se souvenir de la vidange, découvrir l'assurance expirée.",
        "**Ce qui est mesuré** : consommation par plein et par véhicule, pleins hors bande et causes, entretiens faits à l'heure, documents à jour, coût par kilomètre.",
      ], faq: [
        { q: "Faut-il un boîtier GPS dans chaque véhicule ?", a: "Non pour commencer : le compteur photographié au départ, au retour et au plein donne les kilomètres, et le ticket donne les litres. Un boîtier peut ajouter la position et le kilométrage automatique plus tard ; ce guide construit ce qui tient avec un téléphone, et le boîtier s'y branche sans refaire le reste." },
        { q: "Comment la consommation est-elle calculée ?", a: "Litres du ticket divisés par les kilomètres entre ce plein et le précédent, fois cent ; plus la valeur est basse, plus le véhicule est économe, selon la définition courante. Le calcul se fait au plein, et il est comparé à la bande attendue du véhicule." },
        { q: "D'où vient la bande attendue ?", a: "De l'historique du véhicule lui-même : la médiane de ses pleins passés plus ou moins une marge écrite par le gérant, huit pour cent dans l'exemple. Pas d'une moyenne de la flotte, parce qu'un fourgon chargé et un utilitaire vide n'ont pas le même attendu." },
        { q: "Un plein hors bande, c'est une fraude ?", a: "C'est une question. La consommation varie avec la charge, le relief et la conduite ; le chauffeur répond, et le gérant qualifie avec une cause codée. Les causes qualifiées sur six mois disent ce qui relève de la route, du véhicule ou du comportement." },
        { q: "Et les dates d'assurance et de contrôle ?", a: "Elles sont saisies par le gérant sur la fiche du véhicule, et l'application alerte à trente et sept jours puis bloque le véhicule au planning de tournée si la date est passée. Ce guide ne traite pas des obligations réglementaires : il rappelle des dates." },
        { q: "Peut-on reprendre l'historique ?", a: "Oui, depuis les tickets de la boîte photographiés ou le fichier, avec un essai à blanc ; les compteurs de départ et les bandes initiales se calent sur les trois premiers pleins relevés. C'est la sixième semaine du calendrier type." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour les fiches et les relevés. Une entreprise qui a déjà l'application chauffeur des tournées et les fiches équipement prend moins ; une qui part d'une boîte de tickets prend les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La consommation n'est pas déclarée : elle est calculée depuis les litres du ticket et l'écart de compteur entre deux pleins, photo à l'appui." },
      { after: 2, text: "Chaque véhicule est comparé à lui-même, pas aux autres : un fourgon chargé à 13 litres n'est pas une anomalie, une camionnette à 15 en est une." },
    ],
    cta: { eyebrow: 'Envoyez-nous une boîte de tickets et vos compteurs, nous montrons la consommation réelle par véhicule', title: "Distributeur, société de livraison, mainteneur ou fondateur en France : nous construisons les relevés photographiés, la consommation calculée, l'entretien au kilomètre et le coût par kilomètre qui décide", body: "Un calcul à blanc sur vos propres tickets, les plans d'entretien et la bande écrits avec vous, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.tournees, kind: '2027', name: 'Le camion repasse deux fois : tournées, ordre des arrêts, replanification' },
      { href: L.fieldservice, kind: '2027', name: 'Le technicien est reparti sans la pièce : équipements, ordres de travail' },
      { href: L.photos, kind: '2027', name: 'Photos qui font foi : capture, horodatage, stockage' },
      { href: L.ia, kind: '2027', name: 'Lire factures et bons par IA : photo en champs vérifiés' },
    ] },
  },
  en: {
    kind: 'Fleet · Fuel · Maintenance · 2027', title: "“Fuel costs more than planned, and nobody knows why”: what gets built in an application in 2027 for a fleet, odometer readings, computed consumption, expected band, maintenance by kilometre, due dates, cost per kilometre",
    dek: "“We have six vehicles. Fuel receipts land in a box, the total rises every month, and nobody knows which vehicle or which driver. The oil change happens when the driver thinks of it, the insurance expired on a Tuesday, and when a vehicle must be replaced, we take the oldest, by feel.” A fleet is not a matter of more honest drivers, it is a construction: an odometer photographed at the start, the end and every fuel-up; consumption computed from the receipt and the odometer gap, not declared; an expected band per vehicle, from its own history; maintenance due by kilometre and documents coming due that alert beforehand; and a cost per kilometre, fuel and maintenance apart, that decides which vehicle to keep.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Fleet management', 'Consumption', 'Maintenance by kilometre', 'Cost per kilometre', 'Algeria 2027'],
    intro: [
      "**Short answer.** Every vehicle has a **record**: odometer, usual driver, assignment per day and per round, maintenance plans by kilometre, documents with their dates. The **odometer** is **photographed** at the start and end of every round and at every fuel-up, offline, timestamped; the digits are read and confirmed, never typed from memory. The **receipt** is scanned, litres and amount read from the photo. **Consumption** per fuel-up is **computed**, litres divided by the kilometres since the previous fuel-up, times a hundred, following the common definition, and compared with an **expected band** built on that vehicle’s own history; a fuel-up out of band triggers a **question** to the driver, with the receipt and both readings, then a **qualification** by the manager with a coded cause. **Maintenance** is due by kilometre, from round readings, and alerts before the due point; **documents** alert at thirty and seven days. **Cost per kilometre**, fuel and maintenance apart, per vehicle, is the figure that decides which vehicle to replace.",
      "This guide is for the distributor and the delivery company with five to fifty vehicles, the maintenance company whose technicians drive all day, the rental and transport company, and the founder based in France who wants to read every Monday what each vehicle costs. It does not repeat how a round is planned, described in [the rounds guide](" + L.tournees + "), nor how equipment and its interventions are managed, described in [the field service guide](" + L.fieldservice + "); a vehicle is equipment with an odometer, and this guide describes what the odometer adds, then it extends [our software engineering page](" + L.service + "). It does not cover vehicle regulatory obligations: document dates are entered by the manager, the application reminds.",
    ],
    sections: [
      { heading: 'Fleet management, in five layers', body: [
        "Readings are the accented layer: without a photographed odometer, nothing above is true.",
      ], visual: 'couches', after: [
        "**Vehicles and drivers.** One record per vehicle, equipment in the sense of [the field service guide](" + L.fieldservice + "), with an odometer added; assignments per day and per round come from the plan of [the rounds guide](" + L.tournees + "), and the start reading is signed by the day’s driver. **Readings.** The odometer photographed at start, end and every fuel-up, on the offline phone following [the offline guide](" + L.horsligne + "), timestamped and kept following [the trustworthy photos guide](" + L.photos + "); digits are read from the photo, confirmed by the driver, and a reading lower than the previous one is refused. The receipt is read by the same mechanism as [the AI invoice reading guide](" + L.ia + "), litres, amount, station, and corrected if needed.",
        "**Computations.** Consumption per fuel-up; expected band per vehicle, the median of its past fuel-ups plus or minus a written margin; cost per kilometre, fuel and maintenance over the kilometres read; recomputed every night by the jobs of [the background jobs guide](" + L.jobs + "). **Alerts.** Fuel-up out of band, maintenance due, document due; question to the driver through [the notifications guide](" + L.notif + "), task to the manager, qualification with cause. **Measurement and decision.** Cost per kilometre per vehicle in [the manager’s dashboard](" + L.dashboard + "), fuel and maintenance apart, kilometres per driver, qualified anomalies; export of costs per vehicle to accounting through [the integration guide](" + L.integrer + ").",
      ] },
      { heading: 'One van’s record: ten fuel-ups, a band, two anomalies', body: [
        "The figure follows a van since September. Every point is a computation, not a declaration.",
      ], visual: 'vehicule', after: [
        "**Ten fuel-ups**, each turned into litres per hundred kilometres from the receipt and the odometer gap: eight between 9.7 and 10.3, inside an **expected band** from 9.5 to 10.8 built on this vehicle’s median, plus or minus eight percent. Two fall outside: 13.6 on 2 October with a replacement driver, and 15.2 on 4 November, a 62-litre receipt for 408 kilometres. In both cases a question went to the driver with the receipt and both readings; in the first, no justification came back; in the second, the manager checks on Monday. Consumption varies with load, terrain and driving: the band is wide on purpose, and the manager qualifies, not the application.",
        "**Maintenance** is due by kilometre: the oil change at 90,000, in 3,580 kilometres at this month’s pace, that is an alert in ten days; tyres at 95,000, with wear noted at the fuel-up. **Documents**: insurance expires in 33 days, the alert went out at 30; inspection in 83. Three figures: 18.4 dinars per kilometre this month, 3,120 kilometres, 312 litres including two fuel-ups out of band. A partner garage receives the oil-change order with the mileage, as in [the garage guide](" + L.garage + "). Vehicle, fuel-ups, odometer, dates and costs are a constructed example.",
      ] },
      { heading: 'The fleet board: six vehicles, one cost per kilometre', body: [
        "The figure shows what the manager reads on Monday: every vehicle compared with itself, and one figure to decide.",
      ], visual: 'flotte', after: [
        "Six vehicles, and for each the driver, the month’s kilometres from round readings, actual consumption against the vehicle’s expected, cost per kilometre, maintenance and document state, and a flag. Van B has two fuel-ups out of band; van D overran its oil change by 1,200 kilometres because its driver changed and the alert went to the old one, which the record corrects; truck F has insurance expiring in six days and will be blocked in round planning if not renewed. The truck at 13.1 litres is not an anomaly: its expected is 12.8, it drives loaded.",
        "**Cost per kilometre** adds fuel and maintenance over the kilometres read: 17.1 dinars for the fleet this month, from 12.3 for the recent utility to 21.2 for the truck. That figure, over six months, decides which vehicle to replace, not age by feel. Refrigerated vehicles add the temperature readings of [the cold chain guide](" + L.froid + ") to the same record. Vehicles, drivers, kilometres and costs are a constructed example.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard at a distributor, and the answer is a reading and a computation, not suspicion.",
      ], visual: 'situations', after: [
        "**Fuel costs more than planned**: consumption is computed per fuel-up and per vehicle, and the out-of-band fuel-up is flagged the same day, with receipt and readings. **The receipt does not match the odometer**: the computation happens at the fuel-up, and the question goes to the driver immediately, not at month end. **The oil change is done too late**: maintenance is due by kilometre from round readings, and the alert goes out beforehand, to the day’s driver and the manager.",
        "**The insurance expired yesterday**: dates are on the record, alerts go out at thirty and seven days, and a vehicle with an expired document is blocked in round planning. **Two drivers, one vehicle, one accident**: assignment is per day and per round, and the start reading is signed. **Which vehicle to replace?**: cost per kilometre per vehicle, fuel and maintenance apart, over six months. Who may qualify an anomaly or edit a reading follows [the roles guide](" + L.roles + ").",
      ] },
      { heading: 'One fuel-up, in six beats', body: [
        "The computation is the accented beat: it is done at the pump, and it compares the vehicle with itself.",
      ], visual: 'plein', after: [
        "**Read the odometer**: photo, digits read and confirmed, timestamp, offline; a reading lower than the previous one is refused. **Scan the receipt**: litres, amount, station read from the photo, corrected if needed; the receipt stays attached to the fuel-up. **Compute**: litres divided by the kilometres since the previous fuel-up, times a hundred; compared with the vehicle’s band. Thirty seconds at the pump, without network.",
        "**Flag**: out of band, a question goes to the driver with the receipt and both readings; they answer, exceptional load, mountain route, or do not answer. **Qualify**: the manager codes the cause, load, route, leak, driving, or confirms the anomaly; the band does not adjust itself. **Allocate**: the cost goes to the vehicle, the driver, the round, and to accounting; a month of receipts fits in an export, not in a box.",
      ] },
      { heading: 'Tooling a fleet in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for records and readings, because without a reading nothing is true.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: the vehicle list, maintenance plans by kilometre, documents and their dates, the band width, qualification causes; with the manager and a driver, because they will do the readings. **Weeks 2 and 3, records and readings**: vehicle record, assignment per round, photo reading at start, end and fuel-up, offline, with digit reading and refusal of a reading that goes backwards. **Week 4, computations and alerts**: consumption per fuel-up, band per vehicle, maintenance by kilometre, due dates, questions and qualification.",
        "**Week 5, costs**: fuel and maintenance per vehicle and per kilometre, allocation to rounds, accounting export. **Week 6, take-over**: fuel-up history from the box of receipts or the file, with [the import guide](" + L.excel + "), starting odometers, initial bands. **Week 7, measurement**: cost per kilometre per vehicle, qualified anomalies, maintenance on time, Monday review; the founder in France reads the same board in [the remote management guide](" + L.commerce + ").",
      ], list: [
        "**What the manager sees**: the fleet board on Monday, every vehicle against its expected, open alerts, cost per kilometre, and anomalies to qualify.",
        "**What the driver no longer does**: keep receipts, declare the odometer from memory, remember the oil change, discover the expired insurance.",
        "**What is measured**: consumption per fuel-up and per vehicle, out-of-band fuel-ups and causes, maintenance done on time, documents up to date, cost per kilometre.",
      ], faq: [
        { q: "Is a GPS tracker needed in every vehicle?", a: "Not to start: the odometer photographed at start, end and fuel-up gives the kilometres, and the receipt gives the litres. A tracker can add position and automatic mileage later; this guide builds what works with a phone, and the tracker plugs in without redoing the rest." },
        { q: "How is consumption computed?", a: "Receipt litres divided by the kilometres between this fuel-up and the previous one, times a hundred; the lower the value, the more economical the vehicle, following the common definition. The computation happens at the fuel-up, and it is compared with the vehicle’s expected band." },
        { q: "Where does the expected band come from?", a: "From the vehicle’s own history: the median of its past fuel-ups plus or minus a margin written by the manager, eight percent in the example. Not from a fleet average, because a loaded truck and an empty utility do not have the same expected value." },
        { q: "Is a fuel-up out of band fraud?", a: "It is a question. Consumption varies with load, terrain and driving; the driver answers, and the manager qualifies with a coded cause. Qualified causes over six months tell what comes from the road, the vehicle or behaviour." },
        { q: "And insurance and inspection dates?", a: "They are entered by the manager on the vehicle record, and the application alerts at thirty and seven days then blocks the vehicle in round planning if the date has passed. This guide does not cover regulatory obligations: it reminds dates." },
        { q: "Can the history be taken over?", a: "Yes, from the photographed receipts in the box or the file, with a dry run; starting odometers and initial bands are set on the first three fuel-ups read. It is the sixth week of the typical calendar." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for records and readings. A company that already has the drivers’ round application and equipment records takes less; one starting from a box of receipts takes all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Consumption is not declared: it is computed from the receipt’s litres and the odometer gap between two fuel-ups, with the photo as evidence." },
      { after: 2, text: "Every vehicle is compared with itself, not with the others: a loaded truck at 13 litres is not an anomaly, a van at 15 is." },
    ],
    cta: { eyebrow: 'Send us a box of receipts and your odometers, we show the real consumption per vehicle', title: "Distributor, delivery company, maintainer or founder in France: we build photographed readings, computed consumption, maintenance by kilometre and the cost per kilometre that decides", body: "A dry-run computation on your own receipts, maintenance plans and the band written with you, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.tournees, kind: '2027', name: 'The van drives through twice: rounds, stop order, re-planning' },
      { href: L.fieldservice, kind: '2027', name: 'The technician left without the part: equipment, work orders' },
      { href: L.photos, kind: '2027', name: 'Trustworthy photos: capture, timestamp, storage' },
      { href: L.ia, kind: '2027', name: 'Reading invoices and notes by AI: photo into verified fields' },
    ] },
  },
  ar: {
    kind: 'أسطول · وقود · صيانة · 2027', title: "«الوقود يكلّف أكثر من المتوقع، ولا أحد يعرف لماذا»: ما يُبنى في تطبيق سنة 2027 لأسطول، قراءات عداد، استهلاك محسوب، نطاق متوقع، صيانة بالكيلومتر، استحقاقات، كلفة للكيلومتر",
    dek: "«لدينا ست مركبات. وصول الوقود تصل إلى علبة، والمجموع يرتفع كل شهر، ولا أحد يعرف أي مركبة ولا أي سائق. وتغيير الزيت يتم حين يتذكره السائق، والتأمين انتهى يوم ثلاثاء، وحين يجب استبدال مركبة نأخذ الأقدم بالإحساس.» الأسطول ليس مسألة سائقين أكثر أمانة بل بناء: عداد يُصوَّر عند الانطلاق والعودة وكل تعبئة؛ استهلاك يُحسب من الوصل وفارق العداد لا يُصرَّح به؛ نطاق متوقع لكل مركبة من تاريخها الخاص؛ صيانة مستحقة بالكيلومتر ووثائق تستحق تنبّه قبلاً؛ وكلفة للكيلومتر، وقود وصيانة منفصلان، تقرر أي مركبة تُبقى.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['إدارة الأسطول', 'الاستهلاك', 'صيانة بالكيلومتر', 'كلفة للكيلومتر', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** لكل مركبة **بطاقة**: عداد، سائق معتاد، تعيين لكل يوم وجولة، خطط صيانة بالكيلومتر، وثائق بتواريخها. و**العداد** **يُصوَّر** عند انطلاق كل جولة وعودتها وعند كل تعبئة، دون اتصال، موقَّتاً؛ والأرقام تُقرأ وتُؤكَّد ولا تُكتب من الذاكرة أبداً. و**الوصل** يُمسح، واللترات والمبلغ يُقرآن من الصورة. و**الاستهلاك** لكل تعبئة **يُحسب**، لترات مقسومة على الكيلومترات منذ التعبئة السابقة مضروبة في مائة، وفق التعريف الشائع، ويُقارَن **بنطاق متوقع** مبني على تاريخ تلك المركبة نفسها؛ والتعبئة خارج النطاق تطلق **سؤالاً** للسائق بالوصل والقراءتين، ثم **تصنيفاً** من المسيّر بسبب مرمَّز. و**الصيانة** مستحقة بالكيلومتر من قراءات الجولات وتنبّه قبل الاستحقاق؛ و**الوثائق** تنبّه عند ثلاثين وسبعة أيام. و**الكلفة للكيلومتر**، وقود وصيانة منفصلان، لكل مركبة، هي الرقم الذي يقرر أي مركبة تُستبدل.",
      "هذا الدليل موجَّه إلى الموزّع وشركة التوصيل اللذين لهما من خمس إلى خمسين مركبة، وإلى شركة الصيانة التي يقود تقنيوها طوال اليوم، وإلى المؤجّر والناقل، وإلى المؤسس المقيم في فرنسا الذي يريد أن يقرأ كل اثنين كم تكلّفه كل مركبة. وهو لا يعيد كيف تُخطط جولة، الموصوف في [دليل الجولات](" + L.tournees + ")، ولا كيف تُدار معدّة وتدخلاتها، الموصوف في [دليل التدخلات الميدانية](" + L.fieldservice + ")؛ فالمركبة معدّة بعداد، وهذا الدليل يصف ما يضيفه العداد، ثم يمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + "). ولا يتناول الالتزامات التنظيمية للمركبات: تواريخ الوثائق يدخلها المسيّر، والتطبيق يذكّر بها.",
    ],
    sections: [
      { heading: 'إدارة الأسطول، في خمس طبقات', body: [
        "القراءات هي الطبقة المميزة: بلا عداد مصوَّر لا شيء فوقها صحيح.",
      ], visual: 'couches', after: [
        "**المركبات والسائقون.** بطاقة لكل مركبة، معدّة بمعنى [دليل التدخلات الميدانية](" + L.fieldservice + ") بعداد إضافي؛ والتعيينات لكل يوم وجولة تأتي من خطة [دليل الجولات](" + L.tournees + ")، وقراءة الانطلاق يوقّعها سائق اليوم. **القراءات.** العداد مصوَّر عند الانطلاق والعودة وكل تعبئة على الهاتف دون اتصال وفق [دليل العمل دون اتصال](" + L.horsligne + ")، موقَّت ومحفوظ وفق [دليل الصور التي تثبت](" + L.photos + ")؛ والأرقام تُقرأ من الصورة ويؤكدها السائق، والقراءة الأدنى من السابقة تُرفض. والوصل يُقرأ بالآلية نفسها التي في [دليل قراءة الفواتير بالذكاء الاصطناعي](" + L.ia + ")، لترات ومبلغ ومحطة، ويُصحَّح عند الحاجة.",
        "**الحسابات.** استهلاك لكل تعبئة؛ نطاق متوقع لكل مركبة، وسيط تعبئاتها الماضية زائد أو ناقص هامش مكتوب؛ كلفة للكيلومتر، وقود وصيانة على الكيلومترات المقروءة؛ تُعاد كل ليلة بمهام [دليل مهام الخلفية](" + L.jobs + "). **التنبيهات.** تعبئة خارج النطاق، صيانة مستحقة، وثيقة تستحق؛ سؤال للسائق عبر [دليل الإشعارات](" + L.notif + ")، مهمة للمسيّر، تصنيف بسبب. **القياس والقرار.** كلفة للكيلومتر لكل مركبة في [لوحة المسيّر](" + L.dashboard + ")، وقود وصيانة منفصلان، كيلومترات لكل سائق، شذوذات مصنَّفة؛ تصدير الكلف لكل مركبة إلى المحاسبة عبر [دليل التكامل](" + L.integrer + ").",
      ] },
      { heading: 'بطاقة شاحنة صغيرة: عشر تعبئات، نطاق، شذوذان', body: [
        "يتتبع الشكل شاحنة صغيرة منذ سبتمبر. كل نقطة حساب لا تصريح.",
      ], visual: 'vehicule', after: [
        "**عشر تعبئات**، كل منها حُوّلت إلى لتر لكل مائة كيلومتر من الوصل وفارق العداد: ثمانٍ بين 9.7 و10.3 داخل **نطاق متوقع** من 9.5 إلى 10.8 مبني على وسيط هذه المركبة زائد أو ناقص ثمانية بالمائة. واثنتان تخرجان: 13.6 في 2 أكتوبر بسائق بديل، و15.2 في 4 نوفمبر، وصل 62 لتراً لـ 408 كيلومترات. وفي الحالتين خرج سؤال للسائق بالوصل والقراءتين؛ في الأولى لم يعد تبرير؛ وفي الثانية يفحص المسيّر يوم الاثنين. والاستهلاك يتغير بالحمولة والتضاريس والقيادة: النطاق عريض عمداً، والمسيّر هو من يصنّف لا التطبيق.",
        "**الصيانة** مستحقة بالكيلومتر: تغيير الزيت عند 90,000، بعد 3,580 كيلومتراً بوتيرة هذا الشهر، أي تنبيه بعد عشرة أيام؛ والإطارات عند 95,000 بتآكل ملاحَظ عند التعبئة. **الوثائق**: التأمين ينتهي بعد 33 يوماً والتنبيه خرج عند 30؛ والفحص بعد 83. ثلاثة أرقام: 18.4 دينار للكيلومتر هذا الشهر، 3,120 كيلومتراً، 312 لتراً منها تعبئتان خارج النطاق. ويتلقى مرأب شريك أمر تغيير الزيت بالكيلومترات كما في [دليل المرأب](" + L.garage + "). والمركبة والتعبئات والعداد والتواريخ والكلف مثال مبني.",
      ] },
      { heading: 'لوحة الأسطول: ست مركبات، كلفة للكيلومتر', body: [
        "يُظهر الشكل ما يقرؤه المسيّر يوم الاثنين: كل مركبة مقارَنة بنفسها، ورقم واحد للقرار.",
      ], visual: 'flotte', after: [
        "ست مركبات، ولكل منها السائق وكيلومترات الشهر من قراءات الجولات والاستهلاك الفعلي مقابل متوقع المركبة والكلفة للكيلومتر وحالة الصيانة والوثائق وإشارة. الشاحنة ب لها تعبئتان خارج النطاق؛ والشاحنة د تجاوزت تغيير زيتها بـ 1,200 كيلومتر لأن سائقها تغير وذهب التنبيه إلى القديم، وهو ما تصحّحه البطاقة؛ والشاحنة الكبيرة و لها تأمين ينتهي بعد ستة أيام وستُحجب في تخطيط الجولات إن لم يُجدَّد. والشاحنة الكبيرة عند 13.1 لتراً ليست شذوذاً: متوقعها 12.8 وهي تسير محمَّلة.",
        "**الكلفة للكيلومتر** تجمع الوقود والصيانة على الكيلومترات المقروءة: 17.1 دينار للأسطول هذا الشهر، من 12.3 للمركبة النفعية الحديثة إلى 21.2 للشاحنة الكبيرة. وهذا الرقم على ستة أشهر هو ما يقرر أي مركبة تُستبدل لا العمر بالإحساس. والمركبات المبرَّدة تضيف قراءات حرارة [دليل سلسلة التبريد](" + L.froid + ") إلى البطاقة نفسها. والمركبات والسائقون والكيلومترات والكلف مثال مبني.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت عند موزّع، والجواب قراءة وحساب لا ريبة.",
      ], visual: 'situations', after: [
        "**الوقود يكلّف أكثر من المتوقع**: الاستهلاك يُحسب لكل تعبئة ومركبة، والتعبئة خارج النطاق تُوسم في اليوم نفسه بالوصل والقراءات. **الوصل لا يطابق العداد**: الحساب عند التعبئة، والسؤال يذهب إلى السائق فوراً لا في الشهر. **تغيير الزيت متأخر**: الصيانة مستحقة بالكيلومتر من قراءات الجولات، والتنبيه يخرج قبلاً إلى سائق اليوم والمسيّر.",
        "**التأمين انتهى أمس**: التواريخ على البطاقة، والتنبيهات تخرج عند ثلاثين وسبعة أيام، والمركبة ذات الوثيقة المنتهية تُحجب في تخطيط الجولات. **سائقان، مركبة، حادث**: التعيين لكل يوم وجولة، وقراءة الانطلاق موقَّعة. **أي مركبة تُستبدل؟**: الكلفة للكيلومتر لكل مركبة، وقود وصيانة منفصلان، على ستة أشهر. ومن يستطيع تصنيف شذوذ أو تعديل قراءة يتبع [دليل الأدوار](" + L.roles + ").",
      ] },
      { heading: 'تعبئة واحدة، في ستة أوقات', body: [
        "الحساب هو الوقت المميز: يُجرى عند المضخة ويقارن المركبة بنفسها.",
      ], visual: 'plein', after: [
        "**قراءة العداد**: صورة، أرقام مقروءة ومؤكَّدة، توقيت، دون اتصال؛ والقراءة الأدنى من السابقة تُرفض. **مسح الوصل**: لترات ومبلغ ومحطة تُقرأ من الصورة وتُصحَّح عند الحاجة؛ ويبقى الوصل مرتبطاً بالتعبئة. **الحساب**: لترات مقسومة على الكيلومترات منذ التعبئة السابقة مضروبة في مائة؛ مقارَنة بنطاق المركبة. ثلاثون ثانية عند المضخة بلا شبكة.",
        "**الوسم**: خارج النطاق يذهب سؤال إلى السائق بالوصل والقراءتين؛ يجيب، حمولة استثنائية أو مسار جبلي، أو لا يجيب. **التصنيف**: يرمّز المسيّر السبب، حمولة أو مسار أو تسرب أو قيادة، أو يؤكد الشذوذ؛ والنطاق لا يتعدل وحده. **التحميل**: الكلفة تذهب إلى المركبة والسائق والجولة وإلى المحاسبة؛ ووصول شهر تسعها تصدير لا علبة.",
      ] },
      { heading: 'تجهيز أسطول سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان للبطاقات والقراءات، لأن بلا قراءة لا شيء صحيح.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: قائمة المركبات، خطط الصيانة بالكيلومتر، الوثائق وتواريخها، عرض النطاق، أسباب التصنيف؛ مع المسيّر وسائق لأنه هو من سيقرأ. **الأسبوعان 2 و3، البطاقات والقراءات**: بطاقة مركبة، تعيين لكل جولة، قراءة بالصورة عند الانطلاق والعودة والتعبئة، دون اتصال، بقراءة الأرقام ورفض قراءة تتراجع. **الأسبوع 4، الحسابات والتنبيهات**: استهلاك لكل تعبئة، نطاق لكل مركبة، صيانة بالكيلومتر، استحقاقات، أسئلة وتصنيف.",
        "**الأسبوع 5، الكلف**: وقود وصيانة لكل مركبة وكيلومتر، تحميل على الجولات، تصدير محاسبي. **الأسبوع 6، الاستلام**: تاريخ التعبئات من وصول العلبة أو الملف بـ[دليل الاستيراد](" + L.excel + ")، عدادات البداية، نطاقات أولية. **الأسبوع 7، القياس**: كلفة للكيلومتر لكل مركبة، شذوذات مصنَّفة، صيانات في وقتها، مراجعة الاثنين؛ ويقرأ المؤسس في فرنسا اللوحة نفسها في [دليل التسيير عن بعد](" + L.commerce + ").",
      ], list: [
        "**ما يراه المسيّر**: لوحة الأسطول يوم الاثنين، كل مركبة مقابل متوقعها، التنبيهات المفتوحة، الكلفة للكيلومتر، والشذوذات التي تُصنَّف.",
        "**ما لم يعد السائق يفعله**: حفظ الوصول، التصريح بالعداد من الذاكرة، تذكر تغيير الزيت، اكتشاف التأمين المنتهي.",
        "**ما يُقاس**: استهلاك لكل تعبئة ومركبة، تعبئات خارج النطاق وأسبابها، صيانات في وقتها، وثائق محدَّثة، كلفة للكيلومتر.",
      ], faq: [
        { q: "هل يلزم جهاز GPS في كل مركبة؟", a: "لا في البداية: العداد المصوَّر عند الانطلاق والعودة والتعبئة يعطي الكيلومترات، والوصل يعطي اللترات. ويمكن لجهاز أن يضيف الموقع والكيلومترات الآلية لاحقاً؛ وهذا الدليل يبني ما يصمد بهاتف، والجهاز يُوصَل به دون إعادة الباقي." },
        { q: "كيف يُحسب الاستهلاك؟", a: "لترات الوصل مقسومة على الكيلومترات بين هذه التعبئة والسابقة مضروبة في مائة؛ وكلما انخفضت القيمة كانت المركبة أوفر وفق التعريف الشائع. ويُجرى الحساب عند التعبئة ويُقارَن بالنطاق المتوقع للمركبة." },
        { q: "من أين يأتي النطاق المتوقع؟", a: "من تاريخ المركبة نفسها: وسيط تعبئاتها الماضية زائد أو ناقص هامش يكتبه المسيّر، ثمانية بالمائة في المثال. لا من متوسط الأسطول، لأن شاحنة محمَّلة ومركبة نفعية فارغة ليس لهما المتوقع نفسه." },
        { q: "هل التعبئة خارج النطاق غش؟", a: "إنها سؤال. الاستهلاك يتغير بالحمولة والتضاريس والقيادة؛ والسائق يجيب، والمسيّر يصنّف بسبب مرمَّز. والأسباب المصنَّفة على ستة أشهر تقول ما يعود إلى الطريق أو المركبة أو السلوك." },
        { q: "وتواريخ التأمين والفحص؟", a: "يدخلها المسيّر على بطاقة المركبة، وينبّه التطبيق عند ثلاثين وسبعة أيام ثم يحجب المركبة في تخطيط الجولات إن مضى التاريخ. ولا يتناول هذا الدليل الالتزامات التنظيمية: يذكّر بتواريخ." },
        { q: "هل يمكن استلام التاريخ؟", a: "نعم، من وصول العلبة المصوَّرة أو الملف بتجربة على الفارغ؛ وعدادات البداية والنطاقات الأولية تُضبط على أول ثلاث تعبئات مقروءة. وهو الأسبوع السادس في التقويم النموذجي." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان للبطاقات والقراءات. وشركة لديها تطبيق سائقي الجولات وبطاقات المعدّات تأخذ أقل؛ ومن تبدأ من علبة وصول تأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الاستهلاك لا يُصرَّح به: يُحسب من لترات الوصل وفارق العداد بين تعبئتين، والصورة دليلاً." },
      { after: 2, text: "كل مركبة تُقارَن بنفسها لا بالأخريات: شاحنة محمَّلة عند 13 لتراً ليست شذوذاً، وشاحنة صغيرة عند 15 شذوذ." },
    ],
    cta: { eyebrow: 'أرسلوا لنا علبة وصول وعداداتكم، نُريكم الاستهلاك الحقيقي لكل مركبة', title: "موزّع أو شركة توصيل أو صائن أو مؤسس في فرنسا: نبني القراءات المصوَّرة، والاستهلاك المحسوب، والصيانة بالكيلومتر، والكلفة للكيلومتر التي تقرر", body: "حساب على الفارغ على وصولكم أنتم، وخطط الصيانة والنطاق تُكتب معكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.tournees, kind: '2027', name: 'الشاحنة تمر مرتين: جولات، ترتيب المحطات، إعادة تخطيط' },
      { href: L.fieldservice, kind: '2027', name: 'التقني غادر بلا القطعة: معدّات، أوامر عمل' },
      { href: L.photos, kind: '2027', name: 'الصور التي تثبت: التقاط، توقيت، تخزين' },
      { href: L.ia, kind: '2027', name: 'قراءة الفواتير والوصول بالذكاء الاصطناعي: صورة إلى حقول محقَّقة' },
    ] },
  },
};

const KEYWORDS = "application gestion de flotte algérie 2027, suivi consommation carburant véhicules entreprise, relevé compteur photo application chauffeur, consommation litres aux 100 km calculée par plein, anomalie carburant chauffeur alerte, entretien véhicule par kilomètre vidange alerte, échéance assurance contrôle véhicule alerte application, coût par kilomètre par véhicule flotte, logiciel flotte distributeur société de livraison algérie, gestion carburant tickets scan, développement application flotte véhicules algérie, fleet management app algeria 2027 fuel consumption odometer maintenance cost per km, تطبيق إدارة الأسطول استهلاك الوقود عداد صيانة كلفة للكيلومتر الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
