import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif.mjs';

const SLUG = 'le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif';
const FIGURES = ['equipement', 'situations', 'couches', 'intervention', 'repartition', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  sav: '/blog/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  tournees: '/blog/le-camion-repasse-deux-fois-dans-le-meme-quartier-tournees-de-livraison-application-algerie-2027-zones-charge-ordre-des-arrets-replanification/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  jobs: '/blog/rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  imprimer: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  solaire: '/blog/installateur-solaire-algerie-2027-devis-chantier-monitoring-installations-maintenance/',
  garage: '/blog/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  excel: '/blog/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Interventions · Maintenance · Techniciens · 2027', title: "« Le technicien est reparti sans la pièce » : ce qu'on construit dans une application en 2027 pour les interventions terrain, fiche équipement, ordres de travail, répartition, application technicien, préventif",
    dek: "« Le client appelle : la chambre froide ne refroidit plus. On envoie le technicien le plus proche. Il arrive, il diagnostique, il n'a pas la pièce, il repart. Deuxième visite le lendemain. Personne ne sait quand cet équipement a été révisé la dernière fois, le contrat prévoyait deux visites par an et une a été faite, et le rapport sera écrit ce soir, de mémoire. » Les interventions terrain ne sont pas une affaire de techniciens plus consciencieux, c'est une construction : une fiche par équipement installé avec son étiquette, son contrat et son historique ; un ordre de travail qui relie équipement, technicien, pièces, heures et rapport ; une répartition par compétence, zone et pièce ; une application technicien hors ligne qui saisit tout sur place ; et un plan préventif qui génère les visites au lieu de les attendre.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Interventions terrain', 'Parc d’équipements', 'Ordres de travail', 'Maintenance préventive', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Chaque équipement installé chez un client a une **fiche** : modèle, numéro de série, emplacement, **étiquette QR** collée dessus, contrat, garantie, et l'**historique** de toutes les interventions. Chaque intervention est un **ordre de travail** : équipement, type, correctif ou préventif, priorité, états datés, technicien, **pièces réservées** avant le départ, heures, rapport ; c'est lui qui devient la facture ou s'impute au contrat. La **répartition** est un tableau par technicien et par jour, où un ordre se place sur quelqu'un qui a la **compétence**, qui est dans la **zone**, et dont le véhicule ou le dépôt a la **pièce** ; une urgence déplace une préventive et prévient le client déplacé. L'**application technicien** fonctionne hors ligne : scan de l'étiquette à l'arrivée, liste de contrôle par type d'équipement, cause codée, pièces du stock véhicule décomptées, heures, photos, signature, rapport envoyé sur place. Les **plans préventifs** des contrats génèrent les ordres à l'avance, et une note de visite devient une intervention planifiée. Trois chiffres : résolu en une visite, délai d'intervention, pannes par équipement.",
      "Ce guide s'adresse à l'installateur et au mainteneur en froid, climatisation, électricité, ascenseurs, solaire, matériel médical ou informatique, au distributeur qui entretient ce qu'il vend, à l'entreprise qui a des dizaines de sites à visiter, et au fondateur installé en France qui veut savoir combien d'interventions ont été résolues en une visite cette semaine. Il ne redit pas comment on traite une réclamation, décrit dans [le guide sur le service après-vente](" + L.sav + "), ni comment on planifie une tournée de livraison, décrit dans [le guide sur les tournées](" + L.tournees + ") ; il décrit ce qui se passe quand un ticket exige qu'un technicien se déplace avec une pièce, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + "). [Le guide sur l'installateur solaire](" + L.solaire + ") en est un cas particulier ; celui-ci est la construction commune.",
    ],
    sections: [
      { heading: 'La fiche d’un équipement installé', body: [
        "La figure suit une chambre froide installée dans une supérette, de sa mise en service à l'urgence de ce matin.",
      ], visual: 'equipement', after: [
        "L'**équipement** existe avant la panne : une fiche avec modèle, numéro de série, emplacement géocodé, contact du gérant, mode d'accès, contrat avec ses visites incluses, garantie, et une **étiquette QR** collée sur le tableau. Le code de l'étiquette ne porte qu'un identifiant ; tout le reste est dans la fiche, qui peut changer sans réimprimer. L'**historique** est la liste des ordres de travail clôturés : installation avec liste de contrôle, visites préventives, pannes avec cause codée, chacune avec le technicien, la durée et les pièces. La note d'une visite préventive, « usure du joint de porte », est devenue une intervention planifiée cinq mois plus tard, pas un souvenir du technicien.",
        "Les **pièces** consommées sont des mouvements du journal de [le guide sur le stock](" + L.stock + "), avec un stock par véhicule : le relais venait du stock de Sofiane, le joint a été commandé et posé en une visite, le compresseur d'aujourd'hui est réservé au dépôt depuis 9 h 26, avant le départ du technicien. Trois chiffres par équipement : pannes sur la période, heures d'intervention, jours depuis la dernière préventive. Le client voit la même fiche dans son espace, avec les rapports. Équipement, dates, techniciens et pièces sont un exemple construit ; la reprise du parc existant se fait étiquette par étiquette, la deuxième et la troisième semaine.",
      ] },
      { heading: 'Six situations réelles, et ce que l’application fait', body: [
        "Chaque ligne est une phrase entendue chez un installateur ou un mainteneur, et la réponse est une construction.",
      ], visual: 'situations', after: [
        "**Le technicien repart sans la pièce** : l'historique et la cause probable sont connus avant le départ, la pièce est réservée au dépôt ou identifiée dans le stock véhicule, et l'ordre ne part pas sans elle ; la mesure est le taux de résolution en une visite. **Personne ne sait quand c'était révisé** : la fiche porte l'historique, et le scan de l'étiquette l'ouvre sur place. **L'urgence tombe sur le mauvais technicien** : la répartition propose par compétence, zone et pièce.",
        "**Le rapport est écrit le soir, de mémoire** : la liste de contrôle, les heures, les pièces et les photos sont saisies sur place, hors ligne, selon [le guide sur le hors-ligne](" + L.horsligne + ") et [le guide sur les photos qui font foi](" + L.photos + "). **Le contrat prévoit deux visites, une est faite** : le plan préventif génère les ordres à l'avance, et les visites restantes du contrat sont visibles du gérant et du client. **La facture ne correspond pas au travail** : elle sort de l'ordre clôturé, pièces, heures, forfait du contrat, par le moteur de [le guide sur le devis et la facture](" + L.devis + "), sans ressaisie.",
      ] },
      { heading: 'Les interventions terrain, en cinq couches', body: [
        "L'ordre de travail est la couche accentuée : il relie tout, et il devient la facture.",
      ], visual: 'couches', after: [
        "**Parc d'équipements.** Une fiche par équipement installé, avec étiquette, contrat, garantie et historique ; un équipement se remplace ou se retire, il ne se supprime pas. **Ordres de travail.** Un ordre par intervention, avec états datés, créé, planifié, affecté, en route, sur place, terminé, clôturé, facturé ; le ticket de [le guide sur le service après-vente](" + L.sav + ") devient un ordre dès qu'il faut se déplacer, et garde son lien. **Répartition.** Un tableau par technicien et par jour ; le placement par compétence, zone et pièce ; l'ordre de passage dans la journée suit la logique de [le guide sur les tournées](" + L.tournees + ") ; une urgence déplace une préventive, jamais une autre urgence, et le client déplacé est prévenu par [le guide sur les notifications](" + L.notif + ").",
        "**Application technicien.** Hors ligne par construction ; scan de l'étiquette ; liste de contrôle par type d'équipement, écrite la première semaine avec un technicien senior ; cause codée dans une liste ; pièces du stock véhicule décomptées ; heures ; photos avant et après ; signature du client ; rapport imprimable selon [le guide sur l'impression](" + L.imprimer + "). **Préventif et mesure.** Plans par contrat qui génèrent les ordres à l'avance par les tâches de [le guide sur les tâches en arrière-plan](" + L.jobs + ") ; alertes de visites dues ; résolu en une visite, délai d'intervention, pannes par équipement et par modèle dans [le tableau de bord du gérant](" + L.dashboard + "). Qui peut clôturer, facturer ou rouvrir un ordre suit [le guide sur les rôles](" + L.roles + ").",
      ] },
      { heading: 'Une intervention, en six temps', body: [
        "Le scan de l'étiquette est l'étape accentuée : il ouvre la bonne fiche et horodate l'arrivée. Tout le reste est saisi sur place.",
      ], visual: 'intervention', after: [
        "**Recevoir l'ordre** : l'équipement, son historique, le diagnostic probable déduit des pannes précédentes et de la cause déclarée, la pièce réservée, le créneau convenu avec le client. **Se déplacer** : l'ordre du jour est sur le téléphone, et le client reçoit l'heure prévue. **Scanner l'étiquette** : la fiche s'ouvre, l'arrivée est horodatée, et un équipement qui n'est pas celui de l'ordre est refusé, ce qui évite le rapport écrit sur la mauvaise machine.",
        "**Contrôler et diagnostiquer** : la liste de contrôle du type d'équipement, la cause codée, la photo avant. **Réparer et saisir** : les pièces du stock véhicule sont décomptées en les scannant, les heures sont celles du téléphone, la photo après. **Clôturer sur place** : signature du client, rapport envoyé par WhatsApp ou e-mail, facture ou imputation au contrat ; si une pièce manque malgré tout, l'ordre passe en « attente pièce » avec la commande liée, et la seconde visite est planifiée avant de quitter le site, pas le lendemain au téléphone. Pour les équipements du froid, les relevés de température s'attachent au même ordre, selon [le guide sur la chaîne du froid](" + L.froid + ").",
      ] },
      { heading: 'La répartition de mercredi : une urgence à 9 h 20', body: [
        "La figure suit le tableau d'un mercredi : quatre techniciens, quatorze ordres, et une urgence placée en quatre minutes.",
      ], visual: 'repartition', after: [
        "Le tableau montre, par technicien, ses compétences, sa zone, ses ordres du jour et ses déplacements. À 9 h 20, la supérette appelle : le compresseur de la chambre froide est en défaut, marchandise à risque. L'application cherche qui a la compétence froid, qui est ou sera dans la zone Est, et où est la pièce : Nadir finit une préventive à 9 h 15 à dix minutes de là, et un compresseur est au dépôt. L'ordre urgent est placé sur lui à 9 h 24, la pièce est réservée à 9 h 26, et sa visite préventive de 11 h est déplacée à jeudi 9 h ; le client déplacé reçoit la nouvelle date avant que Nadir ne change de route.",
        "Le répartiteur a confirmé une proposition, il n'a pas eu à chercher. Les règles sont écrites la première semaine : une urgence déplace une préventive, jamais une autre urgence ; un apprenti ne prend pas un ordre seul sur un équipement sous garantie ; une pièce réservée bloque la pièce pour les autres ordres. Le soir, trois chiffres : quatorze ordres, douze résolus en une visite, une heure dix de déplacement par technicien. Techniciens, ordres et horaires sont un exemple construit, et la définition de « résolu en une visite », clôturé sans seconde intervention sur le même défaut, est celle que l'entreprise écrit.",
      ] },
      { heading: 'Outiller les interventions en 2027, en semaines', body: [
        "Sept semaines, la première sans code, et deux pour le parc et les ordres, parce que la reprise du parc existant est ce qui prend du temps.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, règles** : types d'équipements et leurs listes de contrôle, compétences des techniciens, zones, priorités et délais d'intervention, contrats et visites incluses, causes codées ; avec le gérant et un technicien senior. **Semaines 2 et 3, parc et ordres** : la fiche équipement, les étiquettes QR imprimées et collées, la reprise du parc existant depuis les anciennes factures et les carnets, avec le même essai à blanc que [le guide sur l'import](" + L.excel + "), l'ordre de travail avec ses états et le lien avec le ticket. **Semaine 4, application technicien** : hors ligne, scan, liste de contrôle, pièces du véhicule, heures, photos, signature, rapport.",
        "**Semaine 5, répartition** : tableau par technicien et par jour, placement par compétence, zone et pièce, urgence et préventive déplacée, messages aux clients. **Semaine 6, préventif et facture** : plans par contrat, visites dues, facture issue de l'ordre clôturé, export comptable. **Semaine 7, mesure** : résolu en une visite, délai d'intervention, pannes par équipement et par modèle, visites de contrat faites, revue du lundi. Un garage qui tient le carnet d'entretien des véhicules de ses clients, comme dans [le guide sur le garage](" + L.garage + "), suit la même construction avec le véhicule comme équipement.",
      ], list: [
        "**Ce que le gérant voit** : le parc avec ses contrats et ses visites dues, le tableau du jour, les ordres en attente de pièce, et trois chiffres le lundi.",
        "**Ce que le technicien ne fait plus** : partir sans la pièce, chercher le dernier rapport, écrire le rapport le soir, deviner quel équipement il a devant lui.",
        "**Ce qui est mesuré** : résolu en une visite, délai d'intervention par priorité, pannes par équipement et par modèle, visites de contrat faites, heures et pièces par ordre.",
      ], faq: [
        { q: "Pourquoi une fiche par équipement et pas une liste de clients ?", a: "Parce que l'historique, le contrat, la garantie et la pièce probable appartiennent à l'équipement, pas au client ; un client peut avoir dix équipements de cinq modèles. La fiche existe dès l'installation, et chaque ordre de travail la prolonge. L'étiquette QR sur l'équipement ouvre la bonne fiche à l'arrivée." },
        { q: "Comment éviter que le technicien reparte sans la pièce ?", a: "En connaissant l'historique et la cause probable avant le départ, en réservant la pièce au dépôt ou en la repérant dans le stock véhicule, et en ne laissant pas partir un ordre sans elle quand elle est connue. Quand elle manque malgré tout, l'ordre passe en attente de pièce et la seconde visite est planifiée avant de quitter le site." },
        { q: "Qui décide de la répartition ?", a: "Le répartiteur, en confirmant une proposition : compétence, zone, pièce disponible, créneau client. Les règles, une urgence déplace une préventive et jamais une autre urgence, un apprenti n'intervient pas seul sous garantie, sont écrites la première semaine et exécutées par l'application." },
        { q: "Et les contrats de maintenance ?", a: "Chaque contrat porte ses visites incluses et sa périodicité ; un plan préventif génère les ordres à l'avance, et les visites dues et faites sont visibles du gérant et du client. Une visite non faite est une alerte, pas une découverte à la fin du contrat." },
        { q: "Ça marche sans réseau dans un local technique ?", a: "Oui, l'application technicien fonctionne hors ligne : la fiche, la liste de contrôle, les pièces, les heures, les photos et la signature sont saisies sur place et synchronisées au retour du réseau. Seule la répartition se fait côté serveur." },
        { q: "Peut-on reprendre le parc existant ?", a: "Oui, depuis les anciennes factures, les carnets et les fichiers, avec un essai à blanc et des lignes refusées remontées au gérant ; puis étiquette par étiquette lors des premières visites, où le technicien complète la fiche sur place. C'est la deuxième et la troisième semaine du calendrier type." },
        { q: "Combien de temps pour mettre ça en place ?", a: "Sept semaines dans le calendrier type, la première sans code et deux pour le parc et les ordres. Une entreprise qui a déjà le ticket du service après-vente et le journal de stock prend moins ; une qui part de carnets et d'appels prend les sept." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "L'équipement est une fiche, pas une ligne sur une facture : il a une identité, un contrat et un historique que chaque intervention prolonge." },
      { after: 4, text: "Un ordre se place sur un technicien qui a la compétence, qui est dans la zone, et dont le véhicule ou le dépôt a la pièce : le tableau le sait avant le répartiteur." },
    ],
    cta: { eyebrow: 'Envoyez-nous un mois d’interventions, nous montrons celles qui auraient tenu en une visite', title: "Installateur, mainteneur, distributeur ou fondateur en France : nous construisons la fiche équipement, l'ordre de travail, la répartition par compétence et pièce, l'application technicien hors ligne et le plan préventif", body: "Une reprise à blanc de votre parc depuis vos factures, les listes de contrôle écrites avec un de vos techniciens, et un calendrier en semaines. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.sav, kind: '2027', name: 'Le client a appelé trois fois : ticket unique, priorités, escalade' },
      { href: L.stock, kind: '2027', name: 'Stock faux : journal de mouvements, réservations, inventaire tournant' },
      { href: L.tournees, kind: '2027', name: 'Le camion repasse deux fois : tournées, ordre des arrêts, replanification' },
      { href: L.solaire, kind: '2027', name: 'Installateur solaire : devis, chantier, monitoring, maintenance' },
    ] },
  },
  en: {
    kind: 'Field service · Maintenance · Technicians · 2027', title: "“The technician left without the part”: what gets built in an application in 2027 for field interventions, equipment record, work orders, dispatch, technician app, preventive plan",
    dek: "“The customer calls: the cold room is not cooling any more. We send the nearest technician. He arrives, diagnoses, does not have the part, leaves. Second visit the next day. Nobody knows when this equipment was last serviced, the contract included two visits a year and one was done, and the report will be written tonight, from memory.” Field interventions are not a matter of more conscientious technicians, they are a construction: one record per installed piece of equipment with its tag, contract and history; a work order that links equipment, technician, parts, hours and report; dispatch by skill, zone and part; an offline technician app that enters everything on site; and a preventive plan that generates visits instead of waiting for them.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Field service', 'Equipment base', 'Work orders', 'Preventive maintenance', 'Algeria 2027'],
    intro: [
      "**Short answer.** Every piece of equipment installed at a customer’s has a **record**: model, serial number, location, **QR tag** stuck on it, contract, warranty, and the **history** of all interventions. Every intervention is a **work order**: equipment, type, corrective or preventive, priority, dated states, technician, **parts reserved** before leaving, hours, report; it is what becomes the invoice or is charged to the contract. **Dispatch** is a board per technician and day, where an order is placed on someone who has the **skill**, who is in the **zone**, and whose van or depot has the **part**; an emergency moves a preventive visit and warns the moved customer. The **technician app** works offline: tag scan on arrival, checklist per equipment type, coded cause, van-stock parts deducted, hours, photos, signature, report sent on site. Contracts’ **preventive plans** generate orders in advance, and a visit note becomes a planned intervention. Three figures: fixed in one visit, response time, breakdowns per equipment.",
      "This guide is for the installer and maintainer in refrigeration, air conditioning, electrical, lifts, solar, medical or IT equipment, the distributor who maintains what it sells, the company with dozens of sites to visit, and the founder based in France who wants to know how many interventions were fixed in one visit this week. It does not repeat how a complaint is handled, described in [the after-sales guide](" + L.sav + "), nor how a delivery round is planned, described in [the rounds guide](" + L.tournees + "); it describes what happens when a ticket requires a technician to travel with a part, and it extends [our software engineering page](" + L.service + "). [The solar installer guide](" + L.solaire + ") is one special case; this one is the common construction.",
    ],
    sections: [
      { heading: 'One installed piece of equipment', body: [
        "The figure follows a cold room installed in a minimarket, from commissioning to this morning’s emergency.",
      ], visual: 'equipement', after: [
        "The **equipment** exists before the breakdown: a record with model, serial number, geocoded location, manager contact, access mode, contract with its included visits, warranty, and a **QR tag** stuck on the panel. The tag’s code carries only an identifier; everything else is in the record, which can change without reprinting. The **history** is the list of closed work orders: installation with checklist, preventive visits, breakdowns with coded cause, each with the technician, duration and parts. The note from a preventive visit, “door seal wear”, became a planned intervention five months later, not a technician’s memory.",
        "**Parts** consumed are movements in the ledger of [the stock guide](" + L.stock + "), with a stock per van: the relay came from Sofiane’s stock, the seal was ordered and fitted in one visit, today’s compressor has been reserved at the depot since 9:26, before the technician left. Three figures per equipment: breakdowns over the period, intervention hours, days since the last preventive visit. The customer sees the same record in their space, with the reports. Equipment, dates, technicians and parts are a constructed example; the take-over of the existing base is done tag by tag, in the second and third weeks.",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "Every row is a sentence heard at an installer or maintainer, and the answer is a construction.",
      ], visual: 'situations', after: [
        "**The technician leaves without the part**: the history and likely cause are known before leaving, the part is reserved at the depot or located in the van stock, and the order does not leave without it; the measure is the first-visit fix rate. **Nobody knows when it was serviced**: the record carries the history, and the tag scan opens it on site. **The emergency lands on the wrong technician**: dispatch proposes by skill, zone and part.",
        "**The report is written in the evening, from memory**: the checklist, hours, parts and photos are entered on site, offline, following [the offline guide](" + L.horsligne + ") and [the trustworthy photos guide](" + L.photos + "). **The contract includes two visits, one is done**: the preventive plan generates orders in advance, and the contract’s remaining visits are visible to the manager and the customer. **The invoice does not match the work**: it comes out of the closed order, parts, hours, contract flat rate, through the engine of [the quote and invoice guide](" + L.devis + "), without retyping.",
      ] },
      { heading: 'Field interventions, in five layers', body: [
        "The work order is the accented layer: it links everything, and it becomes the invoice.",
      ], visual: 'couches', after: [
        "**Equipment base.** One record per installed piece, with tag, contract, warranty and history; equipment is replaced or retired, not deleted. **Work orders.** One order per intervention, with dated states, created, planned, assigned, en route, on site, done, closed, invoiced; the ticket of [the after-sales guide](" + L.sav + ") becomes an order as soon as someone has to travel, and keeps its link. **Dispatch.** A board per technician and day; placement by skill, zone and part; the order of visits within the day follows the logic of [the rounds guide](" + L.tournees + "); an emergency moves a preventive visit, never another emergency, and the moved customer is warned through [the notifications guide](" + L.notif + ").",
        "**Technician app.** Offline by construction; tag scan; checklist per equipment type, written in the first week with a senior technician; cause coded from a list; van-stock parts deducted; hours; before and after photos; customer signature; printable report following [the printing guide](" + L.imprimer + "). **Preventive and measurement.** Plans per contract that generate orders in advance through the jobs of [the background jobs guide](" + L.jobs + "); due-visit alerts; fixed in one visit, response time, breakdowns per equipment and per model in [the manager’s dashboard](" + L.dashboard + "). Who can close, invoice or reopen an order follows [the roles guide](" + L.roles + ").",
      ] },
      { heading: 'One intervention, in six beats', body: [
        "The tag scan is the accented beat: it opens the right record and timestamps arrival. Everything else is entered on site.",
      ], visual: 'intervention', after: [
        "**Receive the order**: the equipment, its history, the likely diagnosis deduced from previous breakdowns and the reported cause, the reserved part, the window agreed with the customer. **Travel**: the day’s orders are on the phone, and the customer receives the planned time. **Scan the tag**: the record opens, arrival is timestamped, and equipment that is not the order’s is refused, which avoids the report written on the wrong machine.",
        "**Check and diagnose**: the equipment type’s checklist, the coded cause, the before photo. **Repair and enter**: van-stock parts are deducted by scanning them, hours are the phone’s, the after photo. **Close on site**: customer signature, report sent by WhatsApp or e-mail, invoice or charge to the contract; if a part is missing after all, the order goes to “awaiting part” with the linked order, and the second visit is planned before leaving the site, not the next day on the phone. For refrigeration equipment, temperature readings attach to the same order, following [the cold chain guide](" + L.froid + ").",
      ] },
      { heading: 'Wednesday’s dispatch: one emergency at 9:20', body: [
        "The figure follows one Wednesday’s board: four technicians, fourteen orders, and an emergency placed in four minutes.",
      ], visual: 'repartition', after: [
        "The board shows, per technician, their skills, zone, orders of the day and travel. At 9:20, the minimarket calls: the cold room’s compressor is faulty, goods at risk. The application looks for who has the refrigeration skill, who is or will be in the East zone, and where the part is: Nadir finishes a preventive visit at 9:15 ten minutes away, and a compressor is at the depot. The urgent order is placed on him at 9:24, the part is reserved at 9:26, and his 11:00 preventive visit is moved to Thursday 9:00; the moved customer receives the new date before Nadir changes route.",
        "The dispatcher confirmed a proposal, they did not search. The rules are written in the first week: an emergency moves a preventive visit, never another emergency; an apprentice does not take an order alone on equipment under warranty; a reserved part blocks the part for other orders. In the evening, three figures: fourteen orders, twelve fixed in one visit, one hour ten of travel per technician. Technicians, orders and times are a constructed example, and the definition of “fixed in one visit”, closed without a second intervention on the same fault, is the one the company writes.",
      ] },
      { heading: 'Tooling field interventions in 2027, in weeks', body: [
        "Seven weeks, the first without code, and two for the base and the orders, because taking over the existing base is what takes time.",
      ], visual: 'calendrier', after: [
        "**Week 1, rules**: equipment types and their checklists, technicians’ skills, zones, priorities and response times, contracts and included visits, coded causes; with the manager and a senior technician. **Weeks 2 and 3, base and orders**: the equipment record, QR tags printed and stuck, take-over of the existing base from old invoices and notebooks, with the same dry run as [the import guide](" + L.excel + "), the work order with its states and the link with the ticket. **Week 4, technician app**: offline, scan, checklist, van parts, hours, photos, signature, report.",
        "**Week 5, dispatch**: board per technician and day, placement by skill, zone and part, emergency and moved preventive visit, customer messages. **Week 6, preventive and invoice**: plans per contract, due visits, invoice from the closed order, accounting export. **Week 7, measurement**: fixed in one visit, response time, breakdowns per equipment and per model, contract visits done, Monday review. A garage keeping the service record of its customers’ vehicles, as in [the garage guide](" + L.garage + "), follows the same construction with the vehicle as equipment.",
      ], list: [
        "**What the manager sees**: the base with its contracts and due visits, the day’s board, orders awaiting parts, and three figures on Monday.",
        "**What the technician no longer does**: leave without the part, look for the last report, write the report in the evening, guess which equipment is in front of them.",
        "**What is measured**: fixed in one visit, response time per priority, breakdowns per equipment and per model, contract visits done, hours and parts per order.",
      ], faq: [
        { q: "Why one record per equipment and not a customer list?", a: "Because the history, contract, warranty and likely part belong to the equipment, not to the customer; one customer may have ten pieces of five models. The record exists from installation, and every work order extends it. The QR tag on the equipment opens the right record on arrival." },
        { q: "How do you avoid the technician leaving without the part?", a: "By knowing the history and likely cause before leaving, reserving the part at the depot or locating it in the van stock, and not letting an order leave without it when it is known. When it is missing after all, the order goes to awaiting part and the second visit is planned before leaving the site." },
        { q: "Who decides the dispatch?", a: "The dispatcher, by confirming a proposal: skill, zone, available part, customer window. The rules, an emergency moves a preventive visit and never another emergency, an apprentice does not intervene alone under warranty, are written in the first week and run by the application." },
        { q: "And maintenance contracts?", a: "Each contract carries its included visits and frequency; a preventive plan generates orders in advance, and due and done visits are visible to the manager and the customer. A visit not done is an alert, not a discovery at the end of the contract." },
        { q: "Does it work without network in a plant room?", a: "Yes, the technician app works offline: the record, checklist, parts, hours, photos and signature are entered on site and synced when the network returns. Only dispatch happens server side." },
        { q: "Can the existing base be taken over?", a: "Yes, from old invoices, notebooks and files, with a dry run and refused lines raised to the manager; then tag by tag during the first visits, where the technician completes the record on site. It is the second and third week of the typical calendar." },
        { q: "How long to set this up?", a: "Seven weeks in the typical calendar, the first without code and two for the base and orders. A company that already has the after-sales ticket and the stock ledger takes less; one starting from notebooks and calls takes all seven." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The equipment is a record, not a line on an invoice: it has an identity, a contract and a history that every intervention extends." },
      { after: 4, text: "An order goes to a technician who has the skill, who is in the zone, and whose van or depot has the part: the board knows it before the dispatcher does." },
    ],
    cta: { eyebrow: 'Send us a month of interventions, we show which ones would have held in one visit', title: "Installer, maintainer, distributor or founder in France: we build the equipment record, the work order, dispatch by skill and part, the offline technician app and the preventive plan", body: "A dry-run take-over of your base from your invoices, checklists written with one of your technicians, and a calendar in weeks. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Read next', items: [
      { href: L.sav, kind: '2027', name: 'The customer called three times: single ticket, priorities, escalation' },
      { href: L.stock, kind: '2027', name: 'Wrong stock: movement ledger, reservations, cycle counts' },
      { href: L.tournees, kind: '2027', name: 'The van drives through twice: rounds, stop order, re-planning' },
      { href: L.solaire, kind: '2027', name: 'Solar installer: quotes, site, monitoring, maintenance' },
    ] },
  },
  ar: {
    kind: 'تدخلات · صيانة · تقنيون · 2027', title: "«التقني غادر بلا القطعة»: ما يُبنى في تطبيق سنة 2027 للتدخلات الميدانية، بطاقة معدّة، أوامر عمل، توزيع، تطبيق تقني، خطة وقائية",
    dek: "«يتصل الزبون: غرفة التبريد لم تعد تبرّد. نرسل أقرب تقني. يصل، يشخّص، لا يملك القطعة، يغادر. زيارة ثانية في الغد. لا أحد يعرف متى صينت هذه المعدّة آخر مرة، والعقد ينص على زيارتين في السنة أُنجزت واحدة، والتقرير سيُكتب الليلة من الذاكرة.» التدخلات الميدانية ليست مسألة تقنيين أكثر ضميراً بل بناء: بطاقة لكل معدّة مركَّبة بوسمها وعقدها وتاريخها؛ أمر عمل يربط المعدّة والتقني والقطع والساعات والتقرير؛ توزيع بالمهارة والمنطقة والقطعة؛ تطبيق تقني دون اتصال يُدخل كل شيء في المكان؛ وخطة وقائية تولّد الزيارات بدل انتظارها.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تدخلات ميدانية', 'قاعدة المعدّات', 'أوامر العمل', 'صيانة وقائية', 'الجزائر 2027'],
    intro: [
      "**الجواب القصير.** لكل معدّة مركَّبة عند زبون **بطاقة**: طراز، رقم تسلسلي، موقع، **وسم QR** ملصق عليها، عقد، ضمان، و**تاريخ** كل التدخلات. وكل تدخل **أمر عمل**: معدّة، نوع تصحيحي أو وقائي، أولوية، حالات مؤرَّخة، تقني، **قطع محجوزة** قبل الانطلاق، ساعات، تقرير؛ وهو ما يصير الفاتورة أو يُحمَّل على العقد. و**التوزيع** لوحة لكل تقني ويوم يوضع فيها الأمر على من يملك **المهارة** وهو في **المنطقة** وفي شاحنته أو المستودع **القطعة**؛ والطارئ ينقل وقائية وينبّه الزبون المنقول. و**تطبيق التقني** يعمل دون اتصال: مسح الوسم عند الوصول، قائمة تحقق لكل نوع معدّة، سبب مرمَّز، قطع مخزون الشاحنة تُخصم، ساعات، صور، توقيع، تقرير يُرسل في المكان. و**الخطط الوقائية** للعقود تولّد الأوامر مسبقاً، وملاحظة الزيارة تصير تدخلاً مخططاً. ثلاثة أرقام: حُلّ في زيارة، مهلة التدخل، أعطال لكل معدّة.",
      "هذا الدليل موجَّه إلى المركّب والصائن في التبريد والتكييف والكهرباء والمصاعد والطاقة الشمسية والمعدات الطبية أو المعلوماتية، وإلى الموزّع الذي يصون ما يبيع، وإلى الشركة التي لها عشرات المواقع لزيارتها، وإلى المؤسس المقيم في فرنسا الذي يريد أن يعرف كم تدخلاً حُلّ في زيارة واحدة هذا الأسبوع. وهو لا يعيد كيف تُعالَج شكوى، الموصوف في [دليل ما بعد البيع](" + L.sav + ")، ولا كيف تُخطط جولة توصيل، الموصوف في [دليل الجولات](" + L.tournees + ")؛ بل يصف ما يحدث حين تستلزم تذكرة أن ينتقل تقني بقطعة، ويمدّ [صفحتنا عن هندسة البرمجيات](" + L.service + "). و[دليل مركّب الطاقة الشمسية](" + L.solaire + ") حالة خاصة منه؛ وهذا هو البناء المشترك.",
    ],
    sections: [
      { heading: 'بطاقة معدّة مركَّبة', body: [
        "يتتبع الشكل غرفة تبريد مركَّبة في سوبيرات، من تشغيلها إلى طارئ هذا الصباح.",
      ], visual: 'equipement', after: [
        "**المعدّة** موجودة قبل العطل: بطاقة بطراز ورقم تسلسلي وموقع مرمَّز وجهة اتصال المسيّر وطريقة الدخول وعقد بزياراته المشمولة وضمان، و**وسم QR** ملصق على اللوحة. ورمز الوسم لا يحمل إلا معرّفاً؛ وكل الباقي في البطاقة التي قد تتغير دون إعادة طباعة. و**التاريخ** قائمة أوامر العمل المغلقة: تركيب بقائمة تحقق، زيارات وقائية، أعطال بسبب مرمَّز، كل منها بالتقني والمدة والقطع. وملاحظة زيارة وقائية، «تآكل جوان الباب»، صارت تدخلاً مخططاً بعد خمسة أشهر، لا ذكرى تقني.",
        "و**القطع** المستهلكة حركات في سجل [دليل المخزون](" + L.stock + ") بمخزون لكل شاحنة: المرحّل جاء من مخزون سفيان، والجوان طُلب ورُكّب في زيارة واحدة، وضاغط اليوم محجوز في المستودع منذ 09:26 قبل انطلاق التقني. ثلاثة أرقام لكل معدّة: أعطال في الفترة، ساعات تدخل، أيام منذ آخر وقائية. ويرى الزبون البطاقة نفسها في فضائه مع التقارير. والمعدّة والتواريخ والتقنيون والقطع مثال مبني؛ واستلام القاعدة الموجودة يتم وسماً وسماً في الأسبوعين الثاني والثالث.",
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        "كل سطر جملة سُمعت عند مركّب أو صائن، والجواب بناء.",
      ], visual: 'situations', after: [
        "**التقني يغادر بلا القطعة**: التاريخ والسبب المحتمل معروفان قبل الانطلاق، والقطعة محجوزة في المستودع أو محددة في مخزون الشاحنة، والأمر لا ينطلق بدونها؛ والمقياس نسبة الحل في زيارة واحدة. **لا أحد يعرف متى صينت**: البطاقة تحمل التاريخ، ومسح الوسم يفتحها في المكان. **الطارئ يقع على التقني الخطأ**: التوزيع يقترح بالمهارة والمنطقة والقطعة.",
        "**التقرير يُكتب مساءً من الذاكرة**: قائمة التحقق والساعات والقطع والصور تُدخَل في المكان دون اتصال وفق [دليل العمل دون اتصال](" + L.horsligne + ") و[دليل الصور التي تثبت](" + L.photos + "). **العقد ينص على زيارتين، أُنجزت واحدة**: الخطة الوقائية تولّد الأوامر مسبقاً، والزيارات المتبقية من العقد مرئية للمسيّر والزبون. **الفاتورة لا تطابق العمل**: تخرج من الأمر المغلق، قطع وساعات ومبلغ العقد، بمحرك [دليل عرض السعر والفاتورة](" + L.devis + ") بلا إعادة كتابة.",
      ] },
      { heading: 'التدخلات الميدانية، في خمس طبقات', body: [
        "أمر العمل هو الطبقة المميزة: يربط كل شيء ويصير الفاتورة.",
      ], visual: 'couches', after: [
        "**قاعدة المعدّات.** بطاقة لكل معدّة مركَّبة بوسم وعقد وضمان وتاريخ؛ والمعدّة تُستبدل أو تُسحب ولا تُحذف. **أوامر العمل.** أمر لكل تدخل بحالات مؤرَّخة: منشأ، مخطط، مُسند، في الطريق، في المكان، منجز، مغلق، مفوتر؛ وتذكرة [دليل ما بعد البيع](" + L.sav + ") تصير أمراً حالما يلزم التنقل وتحتفظ برابطها. **التوزيع.** لوحة لكل تقني ويوم؛ وضع بالمهارة والمنطقة والقطعة؛ وترتيب الزيارات في اليوم يتبع منطق [دليل الجولات](" + L.tournees + ")؛ والطارئ ينقل وقائية لا طارئاً آخر أبداً، ويُنبَّه الزبون المنقول عبر [دليل الإشعارات](" + L.notif + ").",
        "**تطبيق التقني.** دون اتصال بالبناء؛ مسح الوسم؛ قائمة تحقق لكل نوع معدّة تُكتب في الأسبوع الأول مع تقني أقدم؛ سبب مرمَّز من قائمة؛ قطع مخزون الشاحنة تُخصم؛ ساعات؛ صور قبل وبعد؛ توقيع الزبون؛ تقرير قابل للطباعة وفق [دليل الطباعة](" + L.imprimer + "). **الوقائي والقياس.** خطط لكل عقد تولّد الأوامر مسبقاً بمهام [دليل مهام الخلفية](" + L.jobs + ")؛ تنبيهات زيارات مستحقة؛ حُلّ في زيارة، مهلة التدخل، أعطال لكل معدّة ولكل طراز في [لوحة المسيّر](" + L.dashboard + "). ومن يستطيع إغلاق أمر أو فوترته أو إعادة فتحه يتبع [دليل الأدوار](" + L.roles + ").",
      ] },
      { heading: 'تدخل واحد، في ستة أوقات', body: [
        "مسح الوسم هو الوقت المميز: يفتح البطاقة الصحيحة ويوقّت الوصول. وكل الباقي يُدخَل في المكان.",
      ], visual: 'intervention', after: [
        "**استلام الأمر**: المعدّة وتاريخها والتشخيص المحتمل المستنتج من الأعطال السابقة والسبب المصرَّح به، والقطعة المحجوزة، والنافذة المتفق عليها مع الزبون. **التنقل**: أوامر اليوم على الهاتف، والزبون يتلقى الوقت المخطط. **مسح الوسم**: تنفتح البطاقة ويوقَّت الوصول وتُرفض معدّة ليست معدّة الأمر، ما يجنّب التقرير المكتوب على الآلة الخطأ.",
        "**الفحص والتشخيص**: قائمة تحقق نوع المعدّة، السبب المرمَّز، صورة قبل. **الإصلاح والإدخال**: قطع مخزون الشاحنة تُخصم بمسحها، والساعات ساعات الهاتف، وصورة بعد. **الإغلاق في المكان**: توقيع الزبون، تقرير يُرسل بـ WhatsApp أو البريد، فاتورة أو تحميل على العقد؛ وإن نقصت قطعة رغم كل شيء ينتقل الأمر إلى «انتظار قطعة» بطلب مرتبط، وتُخطط الزيارة الثانية قبل مغادرة الموقع لا في الغد بالهاتف. ولمعدّات التبريد تُربط قراءات الحرارة بالأمر نفسه وفق [دليل سلسلة التبريد](" + L.froid + ").",
      ] },
      { heading: 'توزيع الأربعاء: طارئ عند 09:20', body: [
        "يتتبع الشكل لوحة يوم أربعاء: أربعة تقنيين، أربعة عشر أمراً، وطارئ وُضع في أربع دقائق.",
      ], visual: 'repartition', after: [
        "تُظهر اللوحة لكل تقني مهاراته ومنطقته وأوامر يومه وتنقلاته. عند 09:20 يتصل السوبيرات: ضاغط غرفة التبريد معطّل، بضاعة في خطر. يبحث التطبيق عمّن يملك مهارة التبريد، ومن هو أو سيكون في المنطقة الشرقية، وأين القطعة: نذير ينهي وقائية عند 09:15 على بعد عشر دقائق، وضاغط في المستودع. يوضع الأمر العاجل عليه عند 09:24، وتُحجز القطعة عند 09:26، وتُنقل زيارته الوقائية عند 11:00 إلى الخميس 09:00؛ ويتلقى الزبون المنقول التاريخ الجديد قبل أن يغيّر نذير طريقه.",
        "أكد الموزّع اقتراحاً ولم يبحث. والقواعد تُكتب في الأسبوع الأول: الطارئ ينقل وقائية لا طارئاً آخر أبداً؛ المتدرب لا يأخذ أمراً وحده على معدّة تحت الضمان؛ القطعة المحجوزة تحجب القطعة عن الأوامر الأخرى. ومساءً ثلاثة أرقام: أربعة عشر أمراً، اثنا عشر حُلّت في زيارة واحدة، ساعة وعشر دقائق تنقل لكل تقني. والتقنيون والأوامر والأوقات مثال مبني، وتعريف «حُلّ في زيارة واحدة»، أُغلق دون تدخل ثانٍ على العطل نفسه، هو ما تكتبه الشركة.",
      ] },
      { heading: 'تجهيز التدخلات سنة 2027، بالأسابيع', body: [
        "سبعة أسابيع، الأول بلا كود، واثنان للقاعدة والأوامر لأن استلام القاعدة الموجودة هو ما يأخذ الوقت.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القواعد**: أنواع المعدّات وقوائم تحققها، مهارات التقنيين، المناطق، الأولويات ومهل التدخل، العقود والزيارات المشمولة، الأسباب المرمَّزة؛ مع المسيّر وتقني أقدم. **الأسبوعان 2 و3، القاعدة والأوامر**: بطاقة المعدّة، وسوم QR مطبوعة وملصقة، استلام القاعدة الموجودة من الفواتير القديمة والدفاتر بالتجربة على الفارغ نفسها التي في [دليل الاستيراد](" + L.excel + ")، أمر العمل بحالاته والربط بالتذكرة. **الأسبوع 4، تطبيق التقني**: دون اتصال، مسح، قائمة تحقق، قطع الشاحنة، ساعات، صور، توقيع، تقرير.",
        "**الأسبوع 5، التوزيع**: لوحة لكل تقني ويوم، وضع بالمهارة والمنطقة والقطعة، طارئ ووقائية منقولة، رسائل للزبائن. **الأسبوع 6، الوقائي والفاتورة**: خطط لكل عقد، زيارات مستحقة، فاتورة من الأمر المغلق، تصدير محاسبي. **الأسبوع 7، القياس**: حُلّ في زيارة، مهلة التدخل، أعطال لكل معدّة ولكل طراز، زيارات العقد المنجزة، مراجعة الاثنين. والمرأب الذي يمسك دفتر صيانة مركبات زبائنه، كما في [دليل المرأب](" + L.garage + ")، يتبع البناء نفسه والمركبة معدّة.",
      ], list: [
        "**ما يراه المسيّر**: القاعدة بعقودها وزياراتها المستحقة، لوحة اليوم، الأوامر في انتظار قطعة، وثلاثة أرقام يوم الاثنين.",
        "**ما لم يعد التقني يفعله**: الانطلاق بلا القطعة، البحث عن آخر تقرير، كتابة التقرير مساءً، تخمين أي معدّة أمامه.",
        "**ما يُقاس**: حُلّ في زيارة، مهلة التدخل لكل أولوية، أعطال لكل معدّة ولكل طراز، زيارات العقد المنجزة، ساعات وقطع لكل أمر.",
      ], faq: [
        { q: "لماذا بطاقة لكل معدّة لا قائمة زبائن؟", a: "لأن التاريخ والعقد والضمان والقطعة المحتملة ملك للمعدّة لا للزبون؛ وقد يكون لزبون عشر معدّات من خمسة طرز. البطاقة موجودة منذ التركيب، وكل أمر عمل يمدّها. ووسم QR على المعدّة يفتح البطاقة الصحيحة عند الوصول." },
        { q: "كيف نتجنب أن يغادر التقني بلا القطعة؟", a: "بمعرفة التاريخ والسبب المحتمل قبل الانطلاق، وحجز القطعة في المستودع أو تحديدها في مخزون الشاحنة، وعدم ترك أمر ينطلق بدونها حين تكون معروفة. وحين تنقص رغم كل شيء ينتقل الأمر إلى انتظار قطعة وتُخطط الزيارة الثانية قبل مغادرة الموقع." },
        { q: "من يقرر التوزيع؟", a: "الموزّع بتأكيد اقتراح: مهارة، منطقة، قطعة متاحة، نافذة الزبون. والقواعد، الطارئ ينقل وقائية لا طارئاً آخر أبداً، والمتدرب لا يتدخل وحده تحت الضمان، تُكتب في الأسبوع الأول وينفذها التطبيق." },
        { q: "وعقود الصيانة؟", a: "كل عقد يحمل زياراته المشمولة ودوريته؛ وخطة وقائية تولّد الأوامر مسبقاً، والزيارات المستحقة والمنجزة مرئية للمسيّر والزبون. والزيارة غير المنجزة تنبيه لا اكتشاف في نهاية العقد." },
        { q: "هل يعمل دون شبكة في غرفة تقنية؟", a: "نعم، يعمل تطبيق التقني دون اتصال: البطاقة وقائمة التحقق والقطع والساعات والصور والتوقيع تُدخَل في المكان وتُزامَن عند عودة الشبكة. والتوزيع وحده على الخادم." },
        { q: "هل يمكن استلام القاعدة الموجودة؟", a: "نعم، من الفواتير القديمة والدفاتر والملفات، بتجربة على الفارغ وأسطر مرفوضة تُرفع إلى المسيّر؛ ثم وسماً وسماً في الزيارات الأولى حيث يكمل التقني البطاقة في المكان. وهما الأسبوعان الثاني والثالث في التقويم النموذجي." },
        { q: "كم من الوقت لإقامة ذلك؟", a: "سبعة أسابيع في التقويم النموذجي، الأول بلا كود واثنان للقاعدة والأوامر. وشركة لديها تذكرة ما بعد البيع وسجل المخزون تأخذ أقل؛ ومن تبدأ من دفاتر ومكالمات تأخذ السبعة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "المعدّة بطاقة لا سطر في فاتورة: لها هوية وعقد وتاريخ يمدّه كل تدخل." },
      { after: 4, text: "يوضع الأمر على تقني يملك المهارة وهو في المنطقة وفي شاحنته أو المستودع القطعة: اللوحة تعرف ذلك قبل الموزّع." },
    ],
    cta: { eyebrow: 'أرسلوا لنا شهراً من التدخلات، نُريكم أيها كان سيُحل في زيارة واحدة', title: "مركّب أو صائن أو موزّع أو مؤسس في فرنسا: نبني بطاقة المعدّة، وأمر العمل، والتوزيع بالمهارة والقطعة، وتطبيق التقني دون اتصال، والخطة الوقائية", body: "استلام على الفارغ لقاعدتكم من فواتيركم، وقوائم تحقق تُكتب مع أحد تقنييكم، وتقويم بالأسابيع. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.sav, kind: '2027', name: 'الزبون اتصل ثلاث مرات: تذكرة واحدة، أولويات، تصعيد' },
      { href: L.stock, kind: '2027', name: 'مخزون خاطئ: سجل حركات، حجوزات، جرد دوري' },
      { href: L.tournees, kind: '2027', name: 'الشاحنة تمر مرتين: جولات، ترتيب المحطات، إعادة تخطيط' },
      { href: L.solaire, kind: '2027', name: 'مركّب الطاقة الشمسية: عروض أسعار، ورشة، مراقبة، صيانة' },
    ] },
  },
};

const KEYWORDS = "application gestion interventions terrain algérie 2027, logiciel maintenance techniciens algérie, ordre de travail application technicien hors ligne, fiche équipement installé qr code historique, parc d'équipements contrat de maintenance visites préventives, répartition techniciens compétence zone pièce, application technicien liste de contrôle photos signature, maintenance préventive planification ordres, résolu en une visite first time fix, gestion sav terrain froid climatisation ascenseurs, développement application field service algérie, field service management app algeria 2027 work orders dispatch technician app, تطبيق التدخلات الميدانية أوامر العمل تطبيق التقني الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
