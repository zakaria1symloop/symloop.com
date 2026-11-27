import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp.mjs';

const SLUG = 'lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp';
const FIGURES = ['parcours', 'controles', 'exemple', 'documents', 'pieges', 'calendrier'];
const DATE = '2026-11-09';

const L = {
  ia: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  prive: '/blog/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  dentaire: '/blog/cabinet-dentaire-algerie-2027-patients-diaspora-ete-plan-de-traitement-a-distance-devis-radios-suivi/',
  appart: '/blog/gerer-appartement-loue-algerie-depuis-la-france-2027-espace-proprietaire-quittances-etat-des-lieux-travaux/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  service: '/services/ai/',
};

const CONTENT = {
  fr: {
    kind: 'Lecture de documents · IA · ERP · 2027', title: "Lire les factures, les bons de commande et les pièces par IA en Algérie en 2027 : d'une photo à des champs vérifiés dans l'ERP, comment le pipeline se construit, ce qu'il contrôle, et ce qu'un humain valide toujours",
    dek: "« On ressaisit trois cents factures par jour. » Deux personnes à plein temps recopient dans la comptabilité ce qui est déjà écrit sur un papier, et les erreurs se découvrent au rapprochement, un mois plus tard. Ce guide décrit comment une facture, un bon de commande ou une pièce d'identité photographiés deviennent des champs vérifiés dans votre ERP : la prise de vue, la lecture, la mise en champs par schéma, la confiance par champ, les cinq contrôles qui ne dépendent d'aucun modèle, l'écran de validation pour ce qui passe sous le seuil, et le journal qui garde l'image.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Lecture de documents', 'Factures', 'IA', 'ERP', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Lire un document par IA n'est pas « passer la facture dans un modèle » : c'est un **pipeline** en six temps. La **prise de vue** redresse, recadre et refuse la photo illisible tout de suite. La **lecture** transforme l'image en texte, arabe et français mêlés. La **mise en champs** contraint la sortie à un **schéma** : un montant est un nombre, une date est une date, et un champ a le droit de rester vide. Chaque champ reçoit une **confiance** ; sous le seuil écrit avec votre comptable, il part chez un humain avec l'image recadrée. **Cinq contrôles** qui ne demandent aucun modèle vérifient ensuite la justesse : somme des lignes, total, date plausible, fournisseur connu, doublon. Ce qui passe s'écrit dans l'ERP ; tout est **journalisé avec l'image**. Le schéma garantit la forme, pas la valeur : c'est l'arithmétique, votre base et un jeu de soixante documents réels qui garantissent le reste. Huit semaines, dont deux sans code.",
      "Ce guide s'adresse au distributeur, à la clinique, à l'agence et au cabinet comptable en Algérie dont l'équipe recopie des papiers, et au fondateur installé en France dont l'application doit accepter des pièces photographiées par ses clients. Il détaille la fonction que [le guide sur l'IA dans l'application](" + L.ia + ") présente en un paragraphe, et il prolonge [notre page sur les fonctions IA](" + L.service + ") ; il décrit ce qui se construit entre la photo et l'écriture comptable.",
    ],
    sections: [
      { heading: 'Ce que les chiffres disent', body: [
        "Un schéma garantit la forme, pas la justesse. La documentation d'OpenAI sur les sorties structurées dit que la fonction « garantit que le modèle génère toujours des réponses conformes » au schéma fourni, alors que le simple mode JSON ne garantit que du JSON valide ; celle d'Anthropic dit que les sorties structurées « garantissent des réponses conformes au schéma par décodage contraint », avec des types et des champs obligatoires assurés. Les deux listent les mêmes exceptions : un **refus** du modèle, ou une réponse **coupée par la limite de tokens**, peuvent ne pas respecter le schéma. Et aucune des deux ne dit que la valeur est juste : un total de 266 203 lu 266 208 est un nombre parfaitement conforme. Ce que cela impose : le schéma évite les erreurs de forme, et ce sont des règles autour du modèle qui attrapent les erreurs de valeur.",
        "La lecture de l'arabe et du français existe en ouvert, et elle se teste. Tesseract, le moteur de reconnaissance de caractères ouvert le plus répandu, fournit des données pour environ cent vingt langues, dont l'arabe et le français ; les modèles récents qui lisent directement l'image vont plus loin sur les tableaux, les cachets et les mises en page irrégulières. Nous ne citons pas de taux de réussite : ceux qu'on trouve sont mesurés sur des documents propres, pas sur une facture algérienne photographiée de travers avec un cachet sur le numéro. Ce que cela impose : le modèle de lecture se choisit sur soixante de vos documents réels, bons et mauvais, avec les valeurs justes saisies par votre comptable.",
        "Ce qui n'existe pas : un taux de lecture qui vaudrait pour vous. La part des documents qui passent sans humain dépend de vos fournisseurs, de vos téléphones, de vos cachets ; dans l'exemple plus bas nous posons 82 sur 100 comme hypothèse, et nous la disons telle. Ce qui se décide en revanche, par écrit, c'est le **seuil** : en dessous de quelle confiance un champ part chez un humain. Plus haut, l'équipe valide davantage ; plus bas, des erreurs passent seules. Et quand les documents sont sensibles, pièces d'identité, dossiers médicaux, le chemin se décide comme dans [le guide sur le déploiement privé](" + L.prive + ") : la lecture se fait sur vos serveurs.",
      ] },
      { heading: 'Une facture photographiée devient des champs', body: [
        "Le pipeline ne se décrit pas par son modèle mais par ce qui arrive à la photo, du comptoir de réception à la ligne de journal.",
      ], visual: 'parcours', after: [
        "**La prise de vue** se fait dans l'application : cadre guidé, redressement, recadrage, contrôle de netteté ; une photo illisible est refusée tout de suite, pendant que le papier est encore sur le comptoir, pas le lendemain. **La lecture** transforme l'image en texte et en structure, lignes, colonnes, zones, avec l'arabe et le français sur la même page. **La mise en champs** demande au modèle de remplir un schéma : fournisseur, numéro, date, lignes, total hors taxe, taxe, total toutes taxes ; un champ absent du document reste vide, et chaque valeur doit se retrouver dans le texte lu.",
        "**La confiance par champ** est ce qui rend le résultat utilisable : le numéro de facture lu 0418 ou 0413 sous le cachet reçoit 0,72, sous le seuil de 0,90, et il ne s'écrit pas ; il part dans la file de validation avec l'image recadrée sur le champ, la valeur proposée, et une touche pour valider ou corriger. Les cinq autres champs, au-dessus du seuil, continuent vers les contrôles. **L'écriture** dans l'ERP ou la comptabilité se fait par l'intégration décrite dans [le guide sur l'intégration des logiciels existants](" + L.integrer + "), avec une clé d'idempotence pour qu'un renvoi n'écrive pas deux fois. **Le journal** garde l'image d'origine, les champs, les scores, les contrôles et le nom de qui a validé quoi.",
      ] },
      { heading: "Cinq contrôles avant d'écrire", body: [
        "Entre la lecture et l'écriture, cinq contrôles qui ne demandent aucun modèle, seulement de l'arithmétique et votre base.",
      ], visual: 'controles', after: [
        "**La somme des lignes égale le total hors taxe** : c'est le contrôle qui attrape le chiffre mal lu dans une ligne et la page manquante d'une facture de quarante lignes. **Le hors taxe plus la taxe égale le toutes taxes** : il attrape le chiffre mal lu dans un total. **La date est plausible** : ni dans le futur, ni plus ancienne qu'une durée écrite ; il attrape le jour et le mois inversés. **Le fournisseur existe dans votre base**, retrouvé par son identifiant ou son nom ; un fournisseur inconnu n'est pas une erreur, c'est une fiche à créer par un humain. **Ce n'est pas un doublon** : même fournisseur, même numéro, même montant ; c'est le contrôle qui évite de payer deux fois la facture arrivée par e-mail puis sur papier.",
        "**Trois issues** : le document dont tous les champs sont au-dessus du seuil et qui passe les cinq contrôles s'écrit seul ; celui dont un champ est sous le seuil, ou dont un contrôle échoue de peu, part chez un humain, qui ne voit que ce champ ; celui qui est un doublon ou qui est illisible est rejeté et rattaché à sa raison. La répartition de la figure, 82, 15 et 3 sur cent, est une hypothèse : elle se mesure au pilote, et elle bouge avec le seuil. Ce qui ne bouge pas : aucun document ne s'écrit sans passer les cinq contrôles, et aucun humain ne ressaisit une facture entière.",
      ] },
      { heading: 'Un exemple chiffré', body: [
        "Un exemple sur des hypothèses de volume, avec des règles qui n'en sont pas : un distributeur, trois cents factures et bons de livraison par jour.",
      ], visual: 'exemple', after: [
        "**Trois cents documents par jour**, photographiés à la réception ou reçus en PDF : c'est notre hypothèse, à mesurer. **Un seuil de 0,90 par champ**, écrit avec le comptable la première semaine et réglé au pilote, champ par champ : le total peut exiger 0,95, le mode de règlement se contenter de 0,80. **Soixante documents réels** dans le jeu d'évaluation, par type, bons et mauvais, avec les valeurs justes : ils sont rejoués à chaque changement de modèle, d'instructions ou de seuil, et une livraison dont la note baisse est refusée, sur le principe décrit dans [le guide sur la livraison](" + L.livrer + ").",
        "**Cent pour cent des documents journalisés** avec l'image, les champs, les scores, les contrôles et le validateur : c'est ce qui permet de répondre, six mois plus tard, à « qui a saisi ce montant ». Si l'hypothèse de 82 documents sur cent écrits seuls se vérifie, l'équipe ne voit plus que cinquante-quatre documents par jour, et sur chacun un seul champ ; ce calcul est le vôtre à refaire avec votre volume et votre seuil. Ce que la lecture ne remplace pas : le comptable, qui passe de la ressaisie au contrôle des écarts.",
      ] },
      { heading: "Six documents, ce qu'on en extrait et ce qu'on contrôle", body: [
        "Six documents que nous lisons le plus souvent, et pour chacun ce qui est extrait et ce qui est contrôlé.",
      ], visual: 'documents', after: [
        "**La facture fournisseur** : fournisseur, numéro, date, lignes, totaux, mode de règlement ; contrôlée par l'arithmétique, le fournisseur, le doublon, et rapprochée du bon de commande. **Le bon de commande client**, photographié ou reçu sur WhatsApp : client, produits, quantités, unités ; chaque produit est retrouvé dans le catalogue avec les synonymes, l'unité vérifiée, le plafond de crédit et le stock consultés, comme dans [le guide sur le portail B2B](" + L.portail + "). **Le bon de livraison signé** : quantités livrées, cachet, signature ; comparées aux quantités commandées, l'écart signalé ; c'est la preuve que le prévendeur de [l'application de terrain](" + L.prevente + ") rapporte.",
        "**La pièce d'identité** : nom, prénom, date de naissance, numéro, expiration, dans les deux écritures ; comparées entre elles, et validées par un humain à chaque fois, parce qu'une identité ne se devine pas. **L'avis de virement et le relevé** : date, montant, donneur d'ordre, référence ; rapprochés d'une facture ouverte par une règle, jamais lettrés par intuition. **L'ordonnance et le résultat d'analyse** : classés dans le dossier du patient, sans aucune interprétation médicale, lus sur site et validés par le praticien, comme dans [le guide sur le cabinet](" + L.dentaire + "). Les trois premiers forment une chaîne, commande, livraison, facture, qui se rapproche seule et ne demande un humain que sur l'écart.",
      ] },
      { heading: 'Six pièges de la lecture de documents', body: [
        "Six pièges que nous voyons sur les lectures de documents que nous reprenons, et ce que le pipeline fait contre chacun.",
      ], visual: 'pieges', after: [
        "**La photo floue ou de travers** : redressement, recadrage et contrôle de netteté à la prise, et une nouvelle photo demandée tout de suite si rien n'est lisible. **L'arabe et le français mêlés**, chiffres latins et cachet par-dessus : un modèle de lecture qui tient les deux écritures, testé sur vos documents, et les champs écrits deux fois comparés entre eux. **Le champ inventé** : le modèle remplit une date qui n'est pas sur le document ; le champ a le droit de rester vide, la confiance est par champ, et chaque valeur doit se retrouver dans le texte lu.",
        "**Le tableau sur plusieurs pages** : lecture ligne par ligne, somme recalculée, page manquante détectée par l'écart avec le total. **Le doublon** : clé fournisseur, numéro et montant ; le second est bloqué et rattaché au premier. **Le document sensible envoyé dehors** : un chemin par type de document, sur site pour les pièces d'identité et les dossiers médicaux, Europe pour le reste, écrit la première semaine. Les deux premiers se règlent à la prise de vue et au choix du modèle ; les quatre autres dans les règles autour du modèle, et un pipeline qui ne fait que « lire » tombe dans les six.",
      ] },
      { heading: 'Vu ailleurs : les sorties structurées, Tesseract, et ce qui se transpose', body: [
        "Deux sources disent l'essentiel. Les documentations des éditeurs disent qu'une sortie structurée respecte le schéma, sauf refus ou réponse coupée, et ne disent rien de la justesse des valeurs ; ce qui se transpose, c'est qu'on arrête d'écrire du code pour réparer du JSON et qu'on écrit à la place des contrôles sur les valeurs. La liste des langues de Tesseract dit que la lecture de l'arabe et du français existe en ouvert depuis longtemps ; ce qui se transpose, c'est qu'un document simple se lit sans envoyer quoi que ce soit dehors, et qu'un modèle plus capable ne se justifie que sur les tableaux, les cachets et les mises en page difficiles.",
        "Ce que ces sources ne disent pas : quels documents arrivent chez vous, dans quel état, quels champs votre comptabilité attend, et quel seuil votre comptable accepte ; les deux premières semaines du projet y répondent, avec soixante de vos documents sur la table.",
      ] },
      { heading: "Les règles d'une lecture de documents qui tient", body: [
        "Six règles, écrites la première semaine. **Un type de document à la fois**, avec ses champs, ses contrôles et son seuil. **Le jeu d'évaluation avant le code** : soixante documents réels par type, valeurs justes saisies par votre comptable. **Un champ a le droit d'être vide** ; une valeur sans trace dans le texte lu est refusée. **Aucune écriture sans les cinq contrôles.** **L'humain voit un champ, pas un document** : l'image recadrée, la valeur proposée, une touche. **L'image est gardée**, avec les scores et le validateur, aussi longtemps que l'écriture.",
        "Une septième règle porte sur le devis : « OCR des factures » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « lecture des factures fournisseurs photographiées, champs X, Y, Z et lignes, schéma, confiance par champ, seuil réglable par champ, cinq contrôles listés, écran de validation par champ, écriture dans tel logiciel avec idempotence, journal avec image, note mesurée sur soixante documents réels à la recette, chemin des données par type de document », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui chiffre « un OCR » a chiffré la lecture, pas la fiabilité.",
      ] },
      { heading: "Six entreprises, et le document qu'on lit d'abord", body: [
        "Six entreprises que nous équipons souvent, et pour chacune le premier document retenu la première semaine.",
      ], list: [
        "**Le distributeur et le grossiste.** Factures fournisseurs et bons de livraison signés, rapprochés des commandes ; c'est là que la ressaisie est la plus lourde.",
        "**Le cabinet comptable.** Factures d'achat et de vente de dizaines de clients, chacun avec ses fournisseurs ; un schéma commun, une base fournisseurs par client, un écran de validation par dossier.",
        "**La clinique et le cabinet.** Ordonnances et résultats scannés dans le dossier du patient, sur site, sans interprétation, validés par le praticien.",
        "**L'agence immobilière et l'espace propriétaire**, décrits dans [le guide dédié](" + L.appart + "). Pièces d'un dossier de location et quittances, lues et classées, pièces d'identité validées à la main.",
        "**La plateforme de livraison et la prévente.** Bons de livraison signés photographiés sur le terrain, lus hors ligne ou à la synchronisation décrite dans [le guide sur le mode hors ligne](" + L.offline + ").",
        "**Le fondateur en France.** Pièces et justificatifs déposés par les clients de son application ; lecture, contrôle, et un tableau de bord des dossiers incomplets comme dans [le guide sur le tableau de bord](" + L.dashboard + ").",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une lecture de documents complète en huit semaines, dont deux sans code.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit les documents, les champs et les seuils : les deux ou trois types retenus, les champs par type, les contrôles, le seuil par champ, le chemin des données ; signés. **La semaine 1 à 2** constitue le jeu d'évaluation : soixante documents réels par type, propres et abîmés, avec les valeurs justes saisies par votre comptable. **Les semaines 2 à 4** construisent la prise de vue, la lecture, le schéma, la confiance, les cinq contrôles et le journal ; la note sur le jeu est mesurée dès la première livraison. **La semaine 4 à 5** construit l'écran de validation, celui qui décide de l'adoption : s'il faut plus de quelques secondes par champ, l'équipe retourne à la ressaisie.",
        "**La semaine 5 à 6** branche l'écriture dans l'ERP ou la comptabilité, avec le rapprochement commande, livraison, facture et l'idempotence. **Les semaines 6 à 8** sont le pilote sur les documents du jour : part écrite seule, part validée, part rejetée lues chaque jour, seuil réglé champ par champ, cas ajoutés au jeu d'évaluation. Chaque lot de deux semaines est démontré et recetté sur le jeu.",
      ] },
      { heading: 'Ce qui fait échouer la lecture de documents', body: [
        "Les lectures de documents que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**Un OCR sans contrôle.** Le texte est lu, écrit tel quel, et les erreurs se découvrent au rapprochement.",
        "**Pas de confiance par champ.** Tout passe, ou tout part chez un humain ; rien entre les deux.",
        "**L'humain ressaisit le document entier.** L'écran de validation montre la facture, pas le champ douteux ; le gain disparaît.",
        "**La recette sur des PDF propres.** Les documents du pilote sont des photos de travers avec un cachet.",
        "**Pas de contrôle de doublon.** La même facture, reçue deux fois, est payée deux fois.",
        "**L'image n'est pas gardée.** Six mois plus tard, personne ne peut dire d'où vient le montant.",
        "**Les pièces d'identité envoyées à un éditeur sans contrat.** Le chemin des données n'a jamais été écrit.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de comptables et de fondateurs.",
      ], faq: [
        { q: 'L’IA peut-elle lire nos factures en arabe et en français ?', a: "Oui, à condition de le mesurer sur vos documents : la lecture de l'arabe et du français existe en ouvert, et les modèles récents lisent directement l'image, tableaux et cachets compris. Nous choisissons le modèle sur soixante de vos documents réels, bons et abîmés, avec les valeurs justes saisies par votre comptable, et nous ne citons pas de taux avant de l'avoir mesuré." },
        { q: 'Que se passe-t-il quand la lecture se trompe ?', a: "Deux filets. La confiance par champ : sous le seuil écrit avec vous, le champ ne s'écrit pas et part chez un humain avec l'image recadrée. Les cinq contrôles : somme des lignes, total, date plausible, fournisseur connu, doublon ; une valeur conforme au schéma mais fausse est attrapée par l'arithmétique ou par votre base. Rien ne s'écrit dans la comptabilité sans les deux." },
        { q: 'Un humain doit-il encore intervenir ?', a: "Oui, sur ce qui le mérite : les champs sous le seuil, les fournisseurs inconnus, les écarts entre commande, livraison et facture, et toujours les pièces d'identité. Il ne ressaisit pas le document : il voit un champ, la valeur proposée, et valide ou corrige d'une touche. La part de documents concernée se mesure au pilote et se règle par le seuil." },
        { q: 'Où vont nos documents ?', a: "Là où le type de document a le droit d'aller, écrit la première semaine : les pièces d'identité et les dossiers médicaux sont lus sur vos serveurs ; les factures peuvent être lues par un éditeur hébergé en Europe avec un contrat à votre nom, ou sur site si vous le demandez. L'image d'origine reste dans votre base, avec le journal." },
        { q: 'Cela s’intègre-t-il à notre logiciel de comptabilité ?', a: "Oui, par l'API quand il en a une, par fichier d'import ou par une autre voie quand il n'en a pas, avec une clé d'idempotence pour qu'un renvoi n'écrive pas deux fois. Le rapprochement commande, livraison, facture se fait avant l'écriture, et l'écran de validation n'est pas dans votre logiciel : c'est une file légère, sur ordinateur ou téléphone." },
        { q: 'Combien de temps pour le mettre en place ?', a: "Huit semaines pour deux ou trois types de documents : une pour les champs, les contrôles et les seuils, une pour le jeu d'évaluation, deux pour la lecture et les contrôles, une pour l'écran de validation, une pour l'écriture dans l'ERP, deux de pilote avec réglage du seuil. Chaque lot de deux semaines est démontré et recetté sur le jeu." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Un schéma garantit qu'un montant est un nombre ; c'est l'arithmétique et votre base qui disent s'il est juste." },
      { after: 4, text: "L'humain ne ressaisit pas la facture : il voit un champ, la valeur proposée, et valide d'une touche." },
    ],
    cta: { eyebrow: 'Envoyez-nous dix documents que vos équipes ressaisissent', title: "Distributeur, cabinet, clinique, agence ou fondateur : nous construisons la lecture de vos documents, de la photo aux champs vérifiés dans votre ERP, avec la confiance par champ, les contrôles et l'écran de validation", body: "Symloop construit des fonctions IA en production pour les entreprises en Algérie et les fondateurs installés en France : prise de vue guidée, lecture de l'arabe et du français, schéma, confiance par champ, cinq contrôles, écran de validation par champ, écriture dans votre ERP ou votre comptabilité avec idempotence, journal avec image, jeu d'évaluation de soixante documents réels, lecture sur vos serveurs quand les documents ne doivent pas sortir. Code, modèles affinés et clés à votre nom ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.ia, kind: '2027', name: 'Mettre de l’IA dans une application : six fonctions, coût par requête' },
      { href: L.integrer, kind: '2027', name: 'Intégrer le logiciel existant par API' },
      { href: L.prive, kind: '2027', name: 'Déployer un modèle d’IA sur ses serveurs' },
      { href: L.portail, kind: '2027', name: 'Portail de commande B2B' },
    ] },
  },
  en: {
    kind: 'Document reading · AI · ERP · 2027', title: 'Reading invoices, purchase orders and IDs with AI in Algeria in 2027: from a photo to checked fields in the ERP, how the pipeline is built, what it checks, and what a human always validates',
    dek: '“We re-enter three hundred invoices a day.” Two people full time copy into accounting what is already written on paper, and errors are found at reconciliation, a month later. This guide describes how a photographed invoice, purchase order or ID becomes checked fields in your ERP: capture, reading, filling fields through a schema, confidence per field, the five checks that depend on no model, the validation screen for what falls below the threshold, and the log that keeps the image.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Document reading', 'Invoices', 'AI', 'ERP', 'Algeria 2027'],
    intro: [
      '**Short answer.** Reading a document with AI is not “running the invoice through a model”: it is a six-stage **pipeline**. **Capture** deskews, crops and refuses the unreadable photo right away. **Reading** turns the image into text, Arabic and French mixed. **Field filling** constrains the output to a **schema**: an amount is a number, a date is a date, and a field may stay empty. Each field gets a **confidence**; below the threshold written with your accountant, it goes to a human with the cropped image. **Five checks** that need no model then verify correctness: sum of lines, total, plausible date, known supplier, duplicate. What passes is written to the ERP; everything is **logged with the image**. The schema guarantees form, not value: arithmetic, your database and a set of sixty real documents guarantee the rest. Eight weeks, two without code.',
      'This guide is for the distributor, the clinic, the agency and the accounting firm in Algeria whose team copies papers, and the founder settled in France whose app must accept documents photographed by its customers. It details the function that [the guide on AI in the app](' + L.ia + ') presents in one paragraph, and extends [our page on AI functions](' + L.service + '); it describes what gets built between the photo and the accounting entry.',
    ],
    sections: [
      { heading: 'What the figures say', body: [
        'A schema guarantees form, not correctness. OpenAI’s documentation on structured outputs says the feature “ensures the model will always generate responses that adhere” to the supplied schema, whereas plain JSON mode only guarantees valid JSON; Anthropic’s says structured outputs “guarantee schema-compliant responses through constrained decoding”, with types and required fields assured. Both list the same exceptions: a model **refusal**, or a response **cut by the token limit**, may not match the schema. And neither says the value is right: a total of 266,203 read as 266,208 is a perfectly compliant number. What this imposes: the schema avoids errors of form, and rules around the model catch errors of value.',
        'Reading Arabic and French exists in the open, and it gets tested. Tesseract, the most widely used open character-recognition engine, ships data for about one hundred and twenty languages, including Arabic and French; recent models that read the image directly go further on tables, stamps and irregular layouts. We quote no success rate: those you find are measured on clean documents, not on an Algerian invoice photographed at an angle with a stamp over the number. What this imposes: the reading model is chosen on sixty of your real documents, good and bad, with the right values entered by your accountant.',
        'What does not exist: a reading rate that would hold for you. The share of documents that pass without a human depends on your suppliers, your phones, your stamps; in the example below we set 82 out of 100 as an assumption, and say so. What is decided, in writing, is the **threshold**: below which confidence a field goes to a human. Higher, the team validates more; lower, errors pass alone. And when documents are sensitive, IDs, medical files, the route is decided as in [the private deployment guide](' + L.prive + '): reading happens on your servers.',
      ] },
      { heading: 'A photographed invoice becomes fields', body: [
        'The pipeline is not described by its model but by what happens to the photo, from the reception counter to the log line.',
      ], visual: 'parcours', after: [
        '**Capture** happens in the app: guided frame, deskew, crop, sharpness check; an unreadable photo is refused right away, while the paper is still on the counter, not the next day. **Reading** turns the image into text and structure, lines, columns, zones, with Arabic and French on the same page. **Field filling** asks the model to fill a schema: supplier, number, date, lines, total before tax, tax, total including tax; a field absent from the document stays empty, and every value must be found in the text read.',
        '**Confidence per field** is what makes the result usable: the invoice number read 0418 or 0413 under the stamp gets 0.72, below the 0.90 threshold, and is not written; it goes to the validation queue with the image cropped on the field, the proposed value, and one key to validate or correct. The other five fields, above the threshold, continue to the checks. **Writing** to the ERP or accounting goes through the integration described in [the guide on integrating existing software](' + L.integrer + '), with an idempotency key so a resend does not write twice. **The log** keeps the original image, the fields, the scores, the checks and the name of who validated what.',
      ] },
      { heading: 'Five checks before writing', body: [
        'Between reading and writing, five checks that need no model, only arithmetic and your database.',
      ], visual: 'controles', after: [
        '**The sum of lines equals the total before tax**: the check that catches a misread digit in a line and the missing page of a forty-line invoice. **Before tax plus tax equals including tax**: it catches a misread digit in a total. **The date is plausible**: not in the future, not older than a written duration; it catches swapped day and month. **The supplier exists in your database**, found by identifier or name; an unknown supplier is not an error, it is a record for a human to create. **It is not a duplicate**: same supplier, same number, same amount; the check that avoids paying twice for the invoice that arrived by email then on paper.',
        '**Three outcomes**: the document whose fields are all above the threshold and which passes the five checks is written by itself; the one with a field below the threshold, or a narrowly failed check, goes to a human, who sees only that field; the one that is a duplicate or unreadable is rejected and attached to its reason. The split in the figure, 82, 15 and 3 out of one hundred, is an assumption: it is measured in the pilot, and it moves with the threshold. What does not move: no document is written without passing the five checks, and no human re-enters a whole invoice.',
      ] },
      { heading: 'A worked example', body: [
        'An example on volume assumptions, with rules that are not assumptions: a distributor, three hundred invoices and delivery notes a day.',
      ], visual: 'exemple', after: [
        '**Three hundred documents a day**, photographed at reception or received as PDF: that is our assumption, to be measured. **A 0.90 threshold per field**, written with the accountant in week one and tuned in the pilot, field by field: the total may require 0.95, the payment method settle for 0.80. **Sixty real documents** in the evaluation set, per type, good and bad, with the right values: replayed at every change of model, instructions or threshold, and a delivery whose score drops is refused, on the principle described in [the delivery guide](' + L.livrer + ').',
        '**One hundred per cent of documents logged** with the image, the fields, the scores, the checks and the validator: that is what lets you answer, six months later, “who entered this amount”. If the assumption of 82 documents out of a hundred written by themselves holds, the team only sees fifty-four documents a day, and on each a single field; that calculation is yours to redo with your volume and your threshold. What reading does not replace: the accountant, who moves from re-entry to checking the gaps.',
      ] },
      { heading: 'Six documents, what is extracted and what is checked', body: [
        'The six documents we read most often, and for each what is extracted and what is checked.',
      ], visual: 'documents', after: [
        '**The supplier invoice**: supplier, number, date, lines, totals, payment method; checked by arithmetic, supplier and duplicate, and matched with the purchase order. **The customer purchase order**, photographed or received on WhatsApp: customer, products, quantities, units; each product is found in the catalogue with synonyms, the unit verified, credit limit and stock consulted, as in [the B2B portal guide](' + L.portail + '). **The signed delivery note**: quantities delivered, stamp, signature; compared with quantities ordered, the gap flagged; it is the proof the pre-seller of [the field app](' + L.prevente + ') brings back.',
        '**The ID document**: surname, first name, date of birth, number, expiry, in both scripts; compared with each other, and validated by a human every time, because an identity is not guessed. **The transfer notice and the statement**: date, amount, payer, reference; matched with an open invoice by a rule, never reconciled by intuition. **The prescription and the test result**: filed in the patient record, with no medical interpretation, read on site and validated by the practitioner, as in [the practice guide](' + L.dentaire + '). The first three form a chain, order, delivery, invoice, that matches by itself and needs a human only on the gap.',
      ] },
      { heading: 'Six traps in document reading', body: [
        'Six traps we see on the document reading we take over, and what the pipeline does against each.',
      ], visual: 'pieges', after: [
        '**The blurred or skewed photo**: deskew, crop and sharpness check at capture, and a new photo requested right away if nothing is readable. **Arabic and French mixed**, Latin digits and a stamp on top: a reading model that holds both scripts, tested on your documents, and fields written twice compared with each other. **The invented field**: the model fills in a date that is not on the document; the field may stay empty, confidence is per field, and every value must be found in the text read.',
        '**The table across pages**: line-by-line reading, sum recomputed, missing page detected by the gap with the total. **The duplicate**: key supplier, number and amount; the second is blocked and attached to the first. **The sensitive document sent outside**: a route per document type, on site for IDs and medical files, Europe for the rest, written in week one. The first two are settled at capture and in the choice of model; the other four in the rules around the model, and a pipeline that only “reads” falls into all six.',
      ] },
      { heading: 'Seen elsewhere: structured outputs, Tesseract, and what transposes', body: [
        'Two sources say the essentials. The vendors’ documentation says a structured output respects the schema, except on refusal or a cut response, and says nothing about the correctness of values; what transposes is that we stop writing code to repair JSON and write checks on values instead. Tesseract’s language list says reading Arabic and French has existed in the open for a long time; what transposes is that a simple document is read without sending anything outside, and a more capable model is only justified on tables, stamps and difficult layouts.',
        'What these sources do not say: which documents arrive at your company, in what state, which fields your accounting expects, and what threshold your accountant accepts; the project’s first two weeks answer that, with sixty of your documents on the table.',
      ] },
      { heading: 'The rules of document reading that holds', body: [
        'Six rules, written in the first week. **One document type at a time**, with its fields, checks and threshold. **The evaluation set before the code**: sixty real documents per type, right values entered by your accountant. **A field may be empty**; a value with no trace in the text read is refused. **No write without the five checks.** **The human sees a field, not a document**: the cropped image, the proposed value, one key. **The image is kept**, with the scores and the validator, as long as the entry.',
        'A seventh rule concerns the quote: “invoice OCR” is not a requirement, it is a sentence; the requirement reads “reading of photographed supplier invoices, fields X, Y, Z and lines, schema, confidence per field, threshold adjustable per field, five listed checks, per-field validation screen, writing to such software with idempotency, log with image, score measured on sixty real documents at acceptance, data route per document type”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that prices “an OCR” has priced reading, not reliability.',
      ] },
      { heading: 'Six companies, and the document read first', body: [
        'Six companies we often equip, and for each the first document chosen in the first week.',
      ], list: [
        '**The distributor and the wholesaler.** Supplier invoices and signed delivery notes, matched with orders; that is where re-entry is heaviest.',
        '**The accounting firm.** Purchase and sales invoices of dozens of clients, each with its suppliers; a shared schema, a supplier base per client, a validation screen per file.',
        '**The clinic and the practice.** Prescriptions and results scanned into the patient record, on site, without interpretation, validated by the practitioner.',
        '**The real-estate agency and the owner’s space**, described in [the dedicated guide](' + L.appart + '). Documents of a rental file and receipts, read and filed, IDs validated by hand.',
        '**The delivery platform and pre-sales.** Signed delivery notes photographed in the field, read offline or at the synchronisation described in [the offline guide](' + L.offline + ').',
        '**The founder in France.** Documents and proofs uploaded by the customers of their app; reading, checking, and a dashboard of incomplete files as in [the dashboard guide](' + L.dashboard + ').',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of complete document reading in eight weeks, two without code.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes the documents, fields and thresholds: the two or three types chosen, the fields per type, the checks, the threshold per field, the data route; signed. **Week 1 to 2** builds the evaluation set: sixty real documents per type, clean and damaged, with the right values entered by your accountant. **Weeks 2 to 4** build capture, reading, schema, confidence, the five checks and the log; the score on the set is measured from the first delivery. **Week 4 to 5** builds the validation screen, the one that decides adoption: if it takes more than a few seconds per field, the team goes back to re-entry.',
        '**Week 5 to 6** wires writing to the ERP or accounting, with order, delivery, invoice matching and idempotency. **Weeks 6 to 8** are the pilot on the day’s documents: share written by itself, share validated, share rejected read every day, threshold tuned field by field, cases added to the evaluation set. Every two-week batch is demoed and accepted on the set.',
      ] },
      { heading: 'What makes document reading fail', body: [
        'The document reading we take over almost always failed for one of these reasons.',
      ], list: [
        '**OCR with no check.** The text is read, written as is, and errors are found at reconciliation.',
        '**No confidence per field.** Everything passes, or everything goes to a human; nothing in between.',
        '**The human re-enters the whole document.** The validation screen shows the invoice, not the doubtful field; the gain disappears.',
        '**Acceptance on clean PDFs.** The pilot’s documents are skewed photos with a stamp.',
        '**No duplicate check.** The same invoice, received twice, is paid twice.',
        '**The image is not kept.** Six months later, nobody can say where the amount came from.',
        '**IDs sent to a vendor with no contract.** The data route was never written.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, accountants and founders.',
      ], faq: [
        { q: 'Can AI read our invoices in Arabic and French?', a: 'Yes, provided it is measured on your documents: reading Arabic and French exists in the open, and recent models read the image directly, tables and stamps included. We choose the model on sixty of your real documents, good and damaged, with the right values entered by your accountant, and we quote no rate before measuring it.' },
        { q: 'What happens when the reading is wrong?', a: 'Two nets. Confidence per field: below the threshold written with you, the field is not written and goes to a human with the cropped image. The five checks: sum of lines, total, plausible date, known supplier, duplicate; a value that matches the schema but is wrong is caught by arithmetic or by your database. Nothing is written to accounting without both.' },
        { q: 'Does a human still have to step in?', a: 'Yes, on what deserves it: fields below the threshold, unknown suppliers, gaps between order, delivery and invoice, and always IDs. They do not re-enter the document: they see one field, the proposed value, and validate or correct with one key. The share of documents concerned is measured in the pilot and tuned by the threshold.' },
        { q: 'Where do our documents go?', a: 'Where the document type is allowed to go, written in week one: IDs and medical files are read on your servers; invoices may be read by a vendor hosted in Europe with a contract in your name, or on site if you ask. The original image stays in your database, with the log.' },
        { q: 'Does it integrate with our accounting software?', a: 'Yes, through the API when it has one, by import file or another route when it has none, with an idempotency key so a resend does not write twice. Order, delivery, invoice matching happens before writing, and the validation screen is not in your software: it is a light queue, on computer or phone.' },
        { q: 'How long to set it up?', a: 'Eight weeks for two or three document types: one for fields, checks and thresholds, one for the evaluation set, two for reading and checks, one for the validation screen, one for writing to the ERP, two of pilot with threshold tuning. Every two-week batch is demoed and accepted on the set.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'A schema guarantees that an amount is a number; arithmetic and your database say whether it is right.' },
      { after: 4, text: 'The human does not re-enter the invoice: they see one field, the proposed value, and validate with one key.' },
    ],
    cta: { eyebrow: 'Send us ten documents your teams re-enter', title: 'Distributor, firm, clinic, agency or founder: we build the reading of your documents, from the photo to checked fields in your ERP, with confidence per field, the checks and the validation screen', body: 'Symloop builds AI functions in production for companies in Algeria and founders settled in France: guided capture, reading Arabic and French, schema, confidence per field, five checks, per-field validation screen, writing to your ERP or accounting with idempotency, log with image, evaluation set of sixty real documents, reading on your servers when documents must not leave. Code, fine-tuned models and keys in your name; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.ia, kind: '2027', name: 'AI in the app: six functions, cost per request' },
      { href: L.integrer, kind: '2027', name: 'Integrating existing software by API' },
      { href: L.prive, kind: '2027', name: 'Deploying an AI model on your servers' },
      { href: L.portail, kind: '2027', name: 'B2B ordering portal' },
    ] },
  },
  ar: {
    kind: 'قراءة الوثائق · ذكاء اصطناعي · ERP · 2027', title: 'قراءة الفواتير والطلبيات والوثائق بالذكاء الاصطناعي في الجزائر سنة 2027: من صورة إلى حقول متحقَّق منها في ERP، كيف يُبنى الخط، ما الذي يفحصه، وما يتحقق منه إنسان دائماً',
    dek: '«نعيد إدخال ثلاثمائة فاتورة في اليوم.» شخصان بدوام كامل ينسخان في المحاسبة ما هو مكتوب أصلاً على ورق، والأخطاء تُكتشف عند المطابقة بعد شهر. يصف هذا الدليل كيف تصير فاتورة أو طلبية أو بطاقة هوية مصوَّرة حقولاً متحقَّقاً منها في نظام ERP: الالتقاط، القراءة، ملء الحقول بمخطط، الثقة لكل حقل، الفحوص الخمسة التي لا تتوقف على أي نموذج، شاشة التحقق لما ينزل تحت العتبة، والسجل الذي يحفظ الصورة.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['قراءة الوثائق', 'الفواتير', 'الذكاء الاصطناعي', 'ERP', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** قراءة وثيقة بالذكاء الاصطناعي ليست «تمرير الفاتورة على نموذج»: بل **خط** من ست مراحل. **الالتقاط** يقوّم ويقص ويرفض الصورة غير المقروءة فوراً. **القراءة** تحوّل الصورة إلى نص، بالعربية والفرنسية معاً. **ملء الحقول** يقيّد المخرج بـ **مخطط**: المبلغ رقم، والتاريخ تاريخ، والحقل يحق له أن يبقى فارغاً. ولكل حقل **درجة ثقة**؛ وتحت العتبة المكتوبة مع محاسبكم يذهب إلى إنسان مع الصورة مقصوصة. ثم **خمسة فحوص** لا تحتاج أي نموذج تتحقق من الصحة: مجموع السطور، المجموع، تاريخ معقول، مورّد معروف، تكرار. وما يمرّ يُكتب في ERP؛ وكل شيء **يُسجَّل مع الصورة**. المخطط يضمن الشكل لا القيمة: الحساب وقاعدتكم ومجموعة من ستين وثيقة حقيقية تضمن الباقي. ثمانية أسابيع، اثنان بلا كود.',
      'هذا الدليل موجّه إلى الموزّع والمصحة والوكالة ومكتب المحاسبة في الجزائر التي ينسخ فريقها الأوراق، وإلى المؤسس المقيم في فرنسا الذي يجب أن يقبل تطبيقه وثائق يصوّرها زبائنه. يفصّل الوظيفة التي يعرضها [دليل الذكاء الاصطناعي في التطبيق](' + L.ia + ') في فقرة، ويمدّ [صفحتنا عن وظائف الذكاء الاصطناعي](' + L.service + ')؛ ويصف ما يُبنى بين الصورة والقيد المحاسبي.',
    ],
    sections: [
      { heading: 'ما تقوله الأرقام', body: [
        'المخطط يضمن الشكل لا الصحة. تقول وثائق OpenAI عن المخرجات المنظَّمة إن الميزة «تضمن أن يولّد النموذج دائماً أجوبة مطابقة» للمخطط المقدَّم، بينما وضع JSON البسيط لا يضمن إلا JSON صالحاً؛ وتقول وثائق Anthropic إن المخرجات المنظَّمة «تضمن أجوبة مطابقة للمخطط عبر فك ترميز مقيَّد»، بأنواع وحقول إلزامية مضمونة. وكلتاهما تسرد الاستثناءات نفسها: **رفض** من النموذج، أو جواب **مقطوع بحد الرموز**، قد لا يطابقان المخطط. ولا واحدة تقول إن القيمة صحيحة: مجموع 266 203 مقروء 266 208 رقم مطابق تماماً. وما يفرضه ذلك: المخطط يجنّب أخطاء الشكل، والقواعد حول النموذج هي ما يلتقط أخطاء القيمة.',
        'قراءة العربية والفرنسية موجودة في المفتوح، وتُختبر. Tesseract، محرك التعرف على الحروف المفتوح الأكثر انتشاراً، يوفر بيانات لنحو مائة وعشرين لغة منها العربية والفرنسية؛ والنماذج الحديثة التي تقرأ الصورة مباشرة تذهب أبعد في الجداول والأختام والتنسيقات غير المنتظمة. ولا نذكر نسبة نجاح: ما يوجد منها مقاس على وثائق نظيفة لا على فاتورة جزائرية مصوَّرة مائلة وختم فوق رقمها. وما يفرضه ذلك: يُختار نموذج القراءة على ستين من وثائقكم الحقيقية، الجيدة والسيئة، بالقيم الصحيحة التي يدخلها محاسبكم.',
        'وما لا يوجد: نسبة قراءة تصح عندكم. حصة الوثائق التي تمر بلا إنسان تتوقف على مورّديكم وهواتفكم وأختامكم؛ وفي المثال أدناه نضع 82 من 100 فرضيةً ونقول إنها كذلك. أما ما يُقرَّر كتابةً فهو **العتبة**: تحت أي درجة ثقة يذهب الحقل إلى إنسان. أعلى، فيتحقق الفريق أكثر؛ أدنى، فتمر أخطاء وحدها. وحين تكون الوثائق حساسة، بطاقات هوية وملفات طبية، يُقرَّر الطريق كما في [دليل النشر الخاص](' + L.prive + '): القراءة تتم على خوادمكم.',
      ] },
      { heading: 'فاتورة مصوَّرة تصير حقولاً', body: [
        'الخط لا يوصف بنموذجه بل بما يحدث للصورة، من منضدة الاستلام إلى سطر السجل.',
      ], visual: 'parcours', after: [
        '**الالتقاط** يتم في التطبيق: إطار موجَّه، تقويم، قص، فحص وضوح؛ والصورة غير المقروءة تُرفض فوراً والورقة ما زالت على المنضدة، لا في الغد. **القراءة** تحوّل الصورة إلى نص وبنية، سطور وأعمدة ومناطق، بالعربية والفرنسية على الصفحة نفسها. **ملء الحقول** يطلب من النموذج ملء مخطط: المورّد، الرقم، التاريخ، السطور، المجموع خارج الرسم، الرسم، المجموع بكل الرسوم؛ والحقل الغائب عن الوثيقة يبقى فارغاً، وكل قيمة يجب أن توجد في النص المقروء.',
        '**الثقة لكل حقل** هي ما يجعل النتيجة قابلة للاستعمال: رقم الفاتورة المقروء 0418 أو 0413 تحت الختم ينال 0,72، تحت عتبة 0,90، فلا يُكتب؛ بل يذهب إلى طابور التحقق مع الصورة مقصوصة على الحقل والقيمة المقترحة وضغطة للتحقق أو التصحيح. والحقول الخمسة الأخرى، فوق العتبة، تواصل نحو الفحوص. **الكتابة** في ERP أو المحاسبة تتم عبر الدمج الموصوف في [دليل دمج البرامج القائمة](' + L.integrer + ')، بمفتاح عدم تكرار كي لا تكتب إعادة الإرسال مرتين. **السجل** يحفظ الصورة الأصلية والحقول والدرجات والفحوص واسم من تحقق من ماذا.',
      ] },
      { heading: 'خمسة فحوص قبل الكتابة', body: [
        'بين القراءة والكتابة خمسة فحوص لا تحتاج أي نموذج، بل الحساب وقاعدتكم فقط.',
      ], visual: 'controles', after: [
        '**مجموع السطور يساوي المجموع خارج الرسم**: الفحص الذي يلتقط الرقم المقروء خطأ في سطر والصفحة الناقصة من فاتورة بأربعين سطراً. **خارج الرسم زائد الرسم يساوي المجموع بكل الرسوم**: يلتقط الرقم المقروء خطأ في مجموع. **التاريخ معقول**: لا في المستقبل ولا أقدم من مدة مكتوبة؛ يلتقط اليوم والشهر المقلوبين. **المورّد موجود في قاعدتكم**، يُعثر عليه بمعرّفه أو اسمه؛ والمورّد المجهول ليس خطأ بل بطاقة ينشئها إنسان. **ليست مكررة**: المورّد نفسه والرقم نفسه والمبلغ نفسه؛ الفحص الذي يجنّب الدفع مرتين لفاتورة وصلت بالبريد ثم ورقياً.',
        '**ثلاث نتائج**: الوثيقة التي كل حقولها فوق العتبة وتجتاز الفحوص الخمسة تُكتب وحدها؛ والتي فيها حقل تحت العتبة أو فحص فشل بقليل تذهب إلى إنسان لا يرى إلا ذلك الحقل؛ والمكررة أو غير المقروءة تُرفض وتُلحق بسببها. والتوزيع في الشكل، 82 و15 و3 من مائة، فرضية: يُقاس في التجريب ويتحرك مع العتبة. وما لا يتحرك: لا وثيقة تُكتب دون اجتياز الفحوص الخمسة، ولا إنسان يعيد إدخال فاتورة كاملة.',
      ] },
      { heading: 'مثال محسوب', body: [
        'مثال على فرضيات حجم، بقواعد ليست فرضيات: موزّع، ثلاثمائة فاتورة ووصل تسليم يومياً.',
      ], visual: 'exemple', after: [
        '**ثلاثمائة وثيقة يومياً**، مصوَّرة عند الاستلام أو مستلَمة PDF: هذه فرضيتنا، تُقاس. **عتبة 0,90 لكل حقل**، تُكتب مع المحاسب في الأسبوع الأول وتُضبط في التجريب حقلاً حقلاً: المجموع قد يشترط 0,95 وطريقة الدفع تكتفي بـ 0,80. **ستون وثيقة حقيقية** في مجموعة التقييم لكل نوع، جيدة وسيئة، بالقيم الصحيحة: تُعاد مع كل تغيير في النموذج أو التعليمات أو العتبة، ويُرفض تسليم تنخفض درجته، على المبدأ الموصوف في [دليل التسليم](' + L.livrer + ').',
        '**مائة بالمائة من الوثائق مسجَّلة** بالصورة والحقول والدرجات والفحوص والمتحقِّق: هذا ما يتيح الجواب بعد ستة أشهر عن «من أدخل هذا المبلغ». وإن صحّت فرضية 82 وثيقة من مائة تُكتب وحدها، لا يرى الفريق إلا أربعاً وخمسين وثيقة في اليوم، وفي كل منها حقلاً واحداً؛ وهذا الحساب لكم أن تعيدوه بحجمكم وعتبتكم. وما لا تحل القراءة محله: المحاسب، الذي ينتقل من إعادة الإدخال إلى مراقبة الفوارق.',
      ] },
      { heading: 'ست وثائق، ما نستخرجه وما نتحقق منه', body: [
        'الوثائق الست التي نقرؤها أكثر، ولكل منها ما يُستخرج وما يُفحص.',
      ], visual: 'documents', after: [
        '**فاتورة المورّد**: المورّد، الرقم، التاريخ، السطور، المجاميع، طريقة الدفع؛ تُفحص بالحساب والمورّد والتكرار وتُطابَق مع طلبية الشراء. **طلبية الزبون**، مصوَّرة أو مستلَمة على WhatsApp: الزبون، المنتجات، الكميات، الوحدات؛ كل منتج يُعثر عليه في الكتالوج بالمرادفات، والوحدة تُتحقَّق، وسقف الائتمان والمخزون يُستشاران، كما في [دليل بوابة B2B](' + L.portail + '). **وصل التسليم الموقَّع**: الكميات المسلَّمة، الختم، التوقيع؛ تُقارَن بالكميات المطلوبة ويُشار إلى الفارق؛ وهو الإثبات الذي يعود به مندوب [تطبيق الميدان](' + L.prevente + ').',
        '**بطاقة الهوية**: اللقب، الاسم، تاريخ الميلاد، الرقم، الانتهاء، بالكتابتين؛ تُقارَنان ببعضهما ويتحقق منهما إنسان في كل مرة، لأن الهوية لا تُخمَّن. **إشعار التحويل والكشف**: التاريخ، المبلغ، الآمر بالدفع، المرجع؛ يُطابَق مع فاتورة مفتوحة بقاعدة ولا يُسوَّى بالحدس أبداً. **الوصفة ونتيجة التحليل**: تُصنَّفان في ملف المريض بلا أي تأويل طبي، تُقرآن في الموقع ويتحقق منهما الممارس، كما في [دليل العيادة](' + L.dentaire + '). والثلاث الأولى سلسلة، طلبية وتسليم وفاتورة، تتطابق وحدها ولا تطلب إنساناً إلا عند الفارق.',
      ] },
      { heading: 'ستة فخاخ في قراءة الوثائق', body: [
        'ستة فخاخ نراها في قراءات الوثائق التي نستلمها، وما يفعله الخط ضد كل منها.',
      ], visual: 'pieges', after: [
        '**الصورة الضبابية أو المائلة**: تقويم وقص وفحص وضوح عند الالتقاط، وصورة جديدة تُطلب فوراً إن لم يُقرأ شيء. **العربية والفرنسية مختلطتان**، أرقام لاتينية وختم فوقها: نموذج قراءة يتقن الكتابتين يُختبر على وثائقكم، والحقول المكتوبة مرتين تُقارَن ببعضها. **الحقل المخترَع**: يملأ النموذج تاريخاً ليس على الوثيقة؛ يحق للحقل أن يبقى فارغاً، والثقة لكل حقل، وكل قيمة يجب أن توجد في النص المقروء.',
        '**الجدول على عدة صفحات**: قراءة سطراً سطراً، مجموع يُعاد حسابه، صفحة ناقصة تُكشف بالفارق مع المجموع. **التكرار**: مفتاح المورّد والرقم والمبلغ؛ الثانية تُحجب وتُلحق بالأولى. **الوثيقة الحساسة المرسلة خارجاً**: طريق لكل نوع وثيقة، في الموقع لبطاقات الهوية والملفات الطبية وأوروبا للباقي، يُكتب في الأسبوع الأول. الفخان الأولان يُحسمان عند الالتقاط وفي اختيار النموذج؛ والأربعة الأخرى في القواعد حول النموذج، وخط لا يفعل إلا «القراءة» يقع في الستة.',
      ] },
      { heading: 'رأيناه في مكان آخر: المخرجات المنظَّمة وTesseract، وما ينتقل', body: [
        'مصدران يقولان الجوهر. تقول وثائق الناشرين إن المخرج المنظَّم يحترم المخطط إلا عند الرفض أو الجواب المقطوع، ولا تقول شيئاً عن صحة القيم؛ وما ينتقل هو أننا نتوقف عن كتابة كود لإصلاح JSON ونكتب بدله فحوصاً على القيم. وتقول قائمة لغات Tesseract إن قراءة العربية والفرنسية موجودة في المفتوح منذ زمن؛ وما ينتقل هو أن وثيقة بسيطة تُقرأ دون إرسال شيء إلى الخارج، وأن نموذجاً أقدر لا يتبرر إلا في الجداول والأختام والتنسيقات الصعبة.',
        'وما لا تقوله هذه المصادر: أي وثائق تصلكم وفي أي حال، وأي حقول تنتظرها محاسبتكم، وأي عتبة يقبلها محاسبكم؛ والأسبوعان الأولان من المشروع يجيبان، وستون من وثائقكم على الطاولة.',
      ] },
      { heading: 'قواعد قراءة وثائق تصمد', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **نوع وثيقة واحد في كل مرة**، بحقوله وفحوصه وعتبته. **مجموعة التقييم قبل الكود**: ستون وثيقة حقيقية لكل نوع، بالقيم الصحيحة التي يدخلها محاسبكم. **يحق للحقل أن يكون فارغاً**؛ وقيمة بلا أثر في النص المقروء تُرفض. **لا كتابة دون الفحوص الخمسة.** **الإنسان يرى حقلاً لا وثيقة**: الصورة المقصوصة، القيمة المقترحة، ضغطة. **الصورة تُحفظ** مع الدرجات والمتحقِّق ما دام القيد.',
        'قاعدة سابعة تخص عرض السعر: «OCR للفواتير» ليس متطلباً بل جملة؛ المتطلب يُكتب «قراءة فواتير المورّدين المصوَّرة، الحقول X وY وZ والسطور، مخطط، ثقة لكل حقل، عتبة قابلة للضبط لكل حقل، خمسة فحوص مسرودة، شاشة تحقق لكل حقل، كتابة في البرنامج كذا بعدم تكرار، سجل مع الصورة، درجة مقاسة على ستين وثيقة حقيقية عند القبول، طريق البيانات لكل نوع وثيقة»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يسعّر «OCR» سعّر القراءة لا الموثوقية.',
      ] },
      { heading: 'ست شركات، والوثيقة التي نقرؤها أولاً', body: [
        'ست شركات نجهّزها كثيراً، ولكل منها أول وثيقة تُختار في الأسبوع الأول.',
      ], list: [
        '**الموزّع وتاجر الجملة.** فواتير المورّدين ووصول التسليم الموقَّعة، مطابَقة مع الطلبيات؛ هنا أثقل إعادة إدخال.',
        '**مكتب المحاسبة.** فواتير شراء وبيع لعشرات الزبائن، لكل منهم مورّدوه؛ مخطط مشترك، قاعدة مورّدين لكل زبون، شاشة تحقق لكل ملف.',
        '**المصحة والعيادة.** وصفات ونتائج ممسوحة في ملف المريض، في الموقع، بلا تأويل، يتحقق منها الممارس.',
        '**الوكالة العقارية وفضاء المالك**، الموصوفان في [الدليل المخصص](' + L.appart + '). وثائق ملف الإيجار والوصولات تُقرأ وتُصنَّف، وبطاقات الهوية يُتحقَّق منها يدوياً.',
        '**منصة التوصيل والبيع المسبق.** وصول تسليم موقَّعة تُصوَّر في الميدان، تُقرأ دون اتصال أو عند المزامنة الموصوفة في [دليل العمل دون اتصال](' + L.offline + ').',
        '**المؤسس في فرنسا.** وثائق ومبررات يودعها زبائن تطبيقه؛ قراءة وفحص ولوحة قيادة للملفات الناقصة كما في [دليل لوحة القيادة](' + L.dashboard + ').',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم قراءة وثائق كاملة في ثمانية أسابيع، اثنان بلا كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب الوثائق والحقول والعتبات: النوعان أو الثلاثة المختارة، الحقول لكل نوع، الفحوص، العتبة لكل حقل، طريق البيانات؛ موقَّعة. **الأسبوع 1 إلى 2** يكوّن مجموعة التقييم: ستون وثيقة حقيقية لكل نوع، نظيفة ومتضررة، بالقيم الصحيحة التي يدخلها محاسبكم. **الأسبوعان 2 إلى 4** يبنيان الالتقاط والقراءة والمخطط والثقة والفحوص الخمسة والسجل؛ والدرجة على المجموعة تُقاس من أول تسليم. **الأسبوع 4 إلى 5** يبني شاشة التحقق، التي تقرر التبنّي: إن احتاجت أكثر من بضع ثوانٍ لكل حقل عاد الفريق إلى إعادة الإدخال.',
        '**الأسبوع 5 إلى 6** يوصل الكتابة في ERP أو المحاسبة، بمطابقة الطلبية والتسليم والفاتورة وعدم التكرار. **الأسبوعان 6 إلى 8** هما التجريب على وثائق اليوم: الحصة المكتوبة وحدها والمتحقَّق منها والمرفوضة تُقرأ كل يوم، العتبة تُضبط حقلاً حقلاً، وحالات تُضاف إلى مجموعة التقييم. وكل دفعة من أسبوعين تُعرض وتُقبل على المجموعة.',
      ] },
      { heading: 'ما يُفشل قراءة الوثائق', body: [
        'قراءات الوثائق التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**OCR بلا فحص.** النص يُقرأ ويُكتب كما هو، والأخطاء تُكتشف عند المطابقة.',
        '**لا ثقة لكل حقل.** كل شيء يمر، أو كل شيء يذهب إلى إنسان؛ ولا شيء بينهما.',
        '**الإنسان يعيد إدخال الوثيقة كلها.** شاشة التحقق تعرض الفاتورة لا الحقل المشكوك فيه؛ فيختفي الربح.',
        '**القبول على ملفات PDF نظيفة.** ووثائق التجريب صور مائلة عليها ختم.',
        '**لا فحص تكرار.** الفاتورة نفسها، المستلَمة مرتين، تُدفع مرتين.',
        '**الصورة لا تُحفظ.** بعد ستة أشهر لا أحد يستطيع أن يقول من أين جاء المبلغ.',
        '**بطاقات هوية مرسلة إلى ناشر بلا عقد.** طريق البيانات لم يُكتب قط.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومحاسبين ومؤسسين.',
      ], faq: [
        { q: 'هل يستطيع الذكاء الاصطناعي قراءة فواتيرنا بالعربية والفرنسية؟', a: 'نعم، شرط قياس ذلك على وثائقكم: قراءة العربية والفرنسية موجودة في المفتوح، والنماذج الحديثة تقرأ الصورة مباشرة بجداولها وأختامها. نختار النموذج على ستين من وثائقكم الحقيقية، الجيدة والمتضررة، بالقيم الصحيحة التي يدخلها محاسبكم، ولا نذكر نسبة قبل قياسها.' },
        { q: 'ماذا يحدث حين تخطئ القراءة؟', a: 'شبكتان. الثقة لكل حقل: تحت العتبة المكتوبة معكم لا يُكتب الحقل ويذهب إلى إنسان مع الصورة المقصوصة. والفحوص الخمسة: مجموع السطور، المجموع، تاريخ معقول، مورّد معروف، تكرار؛ وقيمة مطابقة للمخطط لكنها خاطئة يلتقطها الحساب أو قاعدتكم. ولا شيء يُكتب في المحاسبة دون الاثنتين.' },
        { q: 'هل يبقى على إنسان أن يتدخل؟', a: 'نعم، في ما يستحق: الحقول تحت العتبة، المورّدون المجهولون، الفوارق بين الطلبية والتسليم والفاتورة، وبطاقات الهوية دائماً. لا يعيد إدخال الوثيقة: يرى حقلاً والقيمة المقترحة ويتحقق أو يصحح بضغطة. وحصة الوثائق المعنية تُقاس في التجريب وتُضبط بالعتبة.' },
        { q: 'أين تذهب وثائقنا؟', a: 'حيث يحق لنوع الوثيقة أن يذهب، مكتوباً في الأسبوع الأول: بطاقات الهوية والملفات الطبية تُقرأ على خوادمكم؛ والفواتير يمكن أن يقرأها ناشر مستضاف في أوروبا بعقد باسمكم، أو في الموقع إن طلبتم. والصورة الأصلية تبقى في قاعدتكم مع السجل.' },
        { q: 'هل يندمج مع برنامج محاسبتنا؟', a: 'نعم، عبر API إن وُجد، وبملف استيراد أو طريق آخر إن لم يوجد، بمفتاح عدم تكرار كي لا تكتب إعادة الإرسال مرتين. ومطابقة الطلبية والتسليم والفاتورة تتم قبل الكتابة، وشاشة التحقق ليست في برنامجكم: هي طابور خفيف على الحاسوب أو الهاتف.' },
        { q: 'كم من الوقت لوضعه؟', a: 'ثمانية أسابيع لنوعين أو ثلاثة من الوثائق: واحد للحقول والفحوص والعتبات، واحد لمجموعة التقييم، اثنان للقراءة والفحوص، واحد لشاشة التحقق، واحد للكتابة في ERP، اثنان للتجريب مع ضبط العتبة. وكل دفعة من أسبوعين تُعرض وتُقبل على المجموعة.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'المخطط يضمن أن المبلغ رقم؛ والحساب وقاعدتكم هما ما يقولان هل هو صحيح.' },
      { after: 4, text: 'الإنسان لا يعيد إدخال الفاتورة: يرى حقلاً والقيمة المقترحة ويتحقق بضغطة.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا عشر وثائق تعيد فرقكم إدخالها', title: 'موزّع أو مكتب أو مصحة أو وكالة أو مؤسس: نبني قراءة وثائقكم، من الصورة إلى حقول متحقَّق منها في ERP، بالثقة لكل حقل والفحوص وشاشة التحقق', body: 'تبني Symloop وظائف ذكاء اصطناعي في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: التقاط موجَّه، قراءة العربية والفرنسية، مخطط، ثقة لكل حقل، خمسة فحوص، شاشة تحقق لكل حقل، كتابة في ERP أو المحاسبة بعدم تكرار، سجل مع الصورة، مجموعة تقييم من ستين وثيقة حقيقية، وقراءة على خوادمكم حين لا يجوز أن تخرج الوثائق. الكود والنماذج المضبوطة والمفاتيح باسمكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.ia, kind: '2027', name: 'الذكاء الاصطناعي في التطبيق: ست وظائف، تكلفة الطلب' },
      { href: L.integrer, kind: '2027', name: 'دمج البرنامج القائم عبر API' },
      { href: L.prive, kind: '2027', name: 'نشر نموذج ذكاء اصطناعي على خوادمكم' },
      { href: L.portail, kind: '2027', name: 'بوابة الطلبيات B2B' },
    ] },
  },
};

const KEYWORDS = "lecture factures ia algérie 2027, ocr factures arabe français, extraction factures automatique erp, automatiser saisie factures comptabilité algérie, lecture bons de commande ia, lecture pièce d'identité ia, sorties structurées schéma json, validation humaine ia documents, rapprochement commande livraison facture, invoice ocr arabic french algeria 2027, قراءة الفواتير بالذكاء الاصطناعي الجزائر, استخراج بيانات الفواتير";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
