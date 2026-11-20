import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere.mjs';

const SLUG = 'importer-un-fichier-excel-chaque-semaine-sans-casser-application-algerie-2027-correspondance-validation-essai-a-blanc-retour-arriere';
const FIGURES = ['correspondance', 'couches', 'import', 'etapes', 'situations', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  reprendre: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  api: '/blog/ouvrir-une-api-a-vos-partenaires-algerie-2027-cles-droits-quotas-webhooks-versions-documentation-sans-exposer-votre-systeme/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  ia: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  pharmacie: '/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Imports · Excel · Fournisseurs · 2027', title: "« Le fichier Excel du fournisseur arrive chaque semaine » : ce qu'on construit pour l'importer sans casser dans une application en Algérie en 2027, correspondance mémorisée, validation ligne par ligne, essai à blanc, lots, retour arrière",
    dek: "« Chaque lundi, le fournisseur envoie son tarif en Excel. Quelqu'un le copie dans l'application, une colonne décale, et les prix sont faux jusqu'au mercredi. Le mois dernier, le même fichier a été importé deux fois et les quantités reçues ont doublé. » L'import qui casse n'est pas une faute de la personne qui copie, c'est une construction : une application qui prend le fichier tel quel et écrit tout de suite ne peut ni relire, ni refuser, ni défaire. Ce guide décrit ce qu'on construit pour qu'un fichier récurrent s'importe sans casser : une correspondance mémorisée par fournisseur, une règle de lecture par colonne, un verdict par ligne avant toute écriture, un essai à blanc, une application en arrière-plan par lots, une clé qui empêche le double import, un journal et un retour arrière en un geste.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Import Excel', 'Fournisseurs', 'Validation', 'Arrière-plan', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Les en-têtes du fournisseur ne sont jamais les champs de l'application : une **table de correspondance**, mémorisée par fournisseur et versionnée, relie chaque colonne à un champ avec une **règle de lecture**, virgule décimale, espaces dans les codes, lignes de titre et de totaux à ignorer. Avant qu'une seule valeur ne soit écrite, un **essai à blanc** lit tout et rend un **verdict par ligne** : acceptée, avertissement à confirmer, ou rejet avec la raison. Le gérant confirme, et l'application se fait **en arrière-plan par lots**, avec une progression visible et une reprise après coupure ; chaque ligne porte une **clé d'idempotence**, et l'empreinte du fichier fait qu'un fichier redéposé ne fait rien. Chaque valeur remplacée est conservée avec le numéro d'import, ce qui permet le **retour arrière** en un geste. Un en-tête inconnu déclenche une question, pas un import faux. Six semaines, dont la première sans code.",
      "Ce guide s'adresse au gérant d'un grossiste, d'une pharmacie ou d'un commerce qui reçoit des tarifs, des catalogues et des feuilles de comptage en Excel chaque semaine, au fondateur installé en France dont l'équipe à Alger passe le lundi matin à copier-coller, et au responsable qui a déjà dû corriger un import faux à la main. Il ne redit pas comment on reprend un ancien fichier une fois pour toutes au moment d'une migration, décrit dans [le guide sur la reprise de données](" + L.reprendre + "), ni comment on se branche à un logiciel qui a une API, décrit dans [le guide sur l'intégration](" + L.integrer + ") ; il décrit ce qui se construit pour les fichiers qui reviennent, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Le fichier du fournisseur, colonne par colonne', body: [
        "La figure montre un tarif fournisseur tel qu'il arrive, et ce que l'application en fait colonne par colonne et ligne par ligne, avant d'écrire quoi que ce soit.",
      ], visual: 'correspondance', after: [
        "Le fichier a une ligne de titre fusionnée, des en-têtes dans les mots du fournisseur, des prix écrits « 1 250,00 », un code-barres avec des espaces, une référence vide, un « N/D » et une ligne de totaux. Aucun de ces détails n'est une erreur du fournisseur : c'est un fichier fait pour être lu par un humain. La correspondance relie « Réf. » à la référence fournisseur, qui est la clé, « PU HT » au prix d'achat avec la règle de lecture française, « Code EAN » au code-barres avec le chiffre de contrôle vérifié ; les lignes de titre et de totaux sont ignorées par le modèle.",
        "Chaque ligne reçoit un verdict : trois acceptées, dont une avec un code nettoyé ; une avec avertissement, parce que le prix monte de 40 % par rapport au dernier import et que le gérant a fixé ce seuil ; deux rejetées, référence vide et prix illisible, avec la raison. La correspondance est mémorisée pour ce fournisseur et réutilisée chaque semaine ; si une colonne change de nom, l'application demande au gérant de la relier, elle ne devine pas. Les données de la figure sont un exemple construit.",
      ] },
      { heading: 'Un import qui ne casse rien, en cinq couches', body: [
        "L'essai à blanc est la couche qui compte, mais il ne suffit pas : il faut une réception qui reconnaît le fichier, une correspondance qui dure, une application qui reprend, et un historique qui défait.",
      ], visual: 'couches', after: [
        "**Réception.** Dépôt par le gérant, boîte e-mail dédiée où le fournisseur envoie lui-même, ou dossier partagé ; formats .xlsx et .csv, détection de l'encodage et de la feuille, empreinte du fichier : le même fichier déposé deux fois n'est importé qu'une fois. **Correspondance.** Une table par fournisseur et par type de fichier : quelle colonne va dans quel champ, quelles lignes sont ignorées, quelle règle de lecture s'applique à chaque colonne ; mémorisée et versionnée, parce que les fournisseurs changent leurs modèles. **Validation.** L'essai à blanc lit tout et n'écrit rien ; verdict par ligne, seuils d'avertissement écrits, aperçu et rapport des rejets ; c'est la couche accentuée.",
        "**Application.** Après confirmation seulement : en arrière-plan, par lots, avec une progression visible et une reprise après coupure ; une clé d'idempotence par ligne, selon la même mécanique que [le guide sur le hors ligne](" + L.horsligne + "), et chaque valeur remplacée conservée avec le numéro d'import. **Historique.** Journal des imports, qui, quand, quel fichier, combien de lignes et de rejets ; retour arrière d'un import en un geste ; rapport des rejets envoyé au fournisseur par WhatsApp ou e-mail, selon [le guide sur les notifications](" + L.notif + "). Qui peut importer et qui peut confirmer un avertissement sont des droits, selon [le guide sur les rôles](" + L.roles + ").",
      ] },
      { heading: 'Un import, du dépôt au retour arrière', body: [
        "La figure suit un import de 1 842 lignes, du dépôt du fichier à l'annulation possible, avec le temps de chaque étape.",
      ], visual: 'import', after: [
        "Le fichier est déposé, le modèle du fournisseur est reconnu, et l'essai à blanc rend en deux secondes un verdict par ligne : 1 790 acceptées, 44 avertissements, 8 rejets. Le gérant voit les 44 avertissements, en confirme ou en écarte, et lance ; l'application se fait en arrière-plan par lots de 200, avec une barre de progression, et se termine en 38 secondes. Le journal enregistre l'import numéro 27, 1 790 prix mis à jour, et le rapport des 8 rejets part au fournisseur ; le gérant reçoit un message.",
        "Deux mécanismes rendent l'import sûr. Le retour arrière : chaque valeur remplacée a été conservée avec le numéro d'import, et l'import 27 se défait en un geste, l'annulation étant elle-même un import journalisé. L'idempotence : la clé fournisseur, référence et empreinte du fichier fait qu'un fichier redéposé ne fait rien, et qu'une ligne déjà appliquée n'est pas réappliquée après une coupure au lot 6. Les nombres de lignes et les durées sont un exemple construit ; la durée dépend du volume et du serveur.",
      ] },
      { heading: 'Le lundi matin, en six gestes', body: [
        "Ce que fait le gérant ou l'employé chargé des imports, dans l'ordre, et pourquoi le troisième geste est celui qui change tout.",
      ], visual: 'etapes', after: [
        "**Déposer le fichier**, en le glissant, ou ne rien faire parce qu'il est arrivé seul par l'e-mail dédié. **Vérifier le modèle** : fournisseur reconnu, colonnes reliées ; si une colonne a changé, la relier, et le modèle passe en version suivante. **Lire l'essai à blanc** : acceptées, avertissements, rejets, aperçu des premières lignes ; c'est l'étape accentuée, celle qui n'existe pas dans un copier-coller. **Trancher les avertissements** : confirmer en un geste, ou écarter des lignes. **Lancer**, et fermer l'écran si on veut. **Lire le journal** : ce qui a changé, le rapport des rejets parti au fournisseur, et annuler si besoin.",
        "Les cinq gestes mécaniques prennent deux minutes ; le troisième en prend cinq, et c'est lui qui évite une semaine de prix faux. Les prix importés alimentent le moteur de prix décrit dans [le guide sur le devis](" + L.devis + "), et les quantités d'une feuille de comptage deviennent des mouvements d'ajustement, selon [le guide sur le stock](" + L.stock + ").",
      ] },
      { heading: "Six situations réelles, et ce que l'application fait", body: [
        "Les six situations qu'on retrouve dans presque toutes les entreprises qui importent des fichiers chaque semaine, et la construction qui les règle.",
      ], visual: 'situations', after: [
        "Les deux premières lignes se règlent par la correspondance et les règles de lecture : un en-tête inconnu est une question, pas un décalage de colonne, et un prix à la française est lu comme tel. La troisième se règle par l'essai à blanc et un seuil écrit. Les deux suivantes se règlent par l'idempotence et les lots : l'empreinte du fichier et la clé par ligne empêchent le double import, et une coupure au milieu ne rejoue pas ce qui est fait. La dernière se règle par l'historique : chaque valeur remplacée est conservée, et l'import se défait en un geste. Aucune ne se règle par un employé plus attentif au copier-coller.",
      ] },
      { heading: "Vu ailleurs : les limites d'Excel, le CSV et les outils d'import du marché, et ce qui se transpose", body: [
        "Trois faits se transposent tels quels. **Les limites d'Excel** : une feuille compte au plus 1 048 576 lignes et 16 384 colonnes, et une cellule 32 767 caractères, selon la documentation de Microsoft ; ce qui se transpose, c'est qu'un fichier de dix mille lignes est petit pour l'application, mais que l'écran du gérant ne doit en afficher qu'un aperçu et un résumé. **Le CSV** : un format texte dont le séparateur, l'encodage et la marque d'ordre des octets varient selon l'outil qui l'a produit, et dont l'arabe sort illisible quand l'encodage est mal détecté ; ce qui se transpose, c'est une détection à la réception et un aperçu que le gérant lit avant de confirmer, selon les règles décrites dans [le guide sur l'application bilingue](" + L.bilingue + "). **Les outils d'import des logiciels du marché** : correspondance de colonnes, aperçu, rapport d'erreurs ; ce qui se transpose, c'est la mémorisation par fournisseur et le retour arrière, que les outils génériques ont rarement.",
        "Ce que ces faits ne décident pas pour vous : vos champs cibles, vos seuils d'avertissement, qui confirme, et ce qu'on fait d'une ligne rejetée ; la première semaine du projet y répond, et c'est le gérant qui signe.",
      ] },
      { heading: "Les règles d'un import qui ne casse rien", body: [
        "Six règles, écrites la première semaine. **Les en-têtes du fournisseur ne sont jamais les champs** : une correspondance mémorisée fait le lien. **Chaque colonne a une règle de lecture** écrite. **Rien n'est écrit avant l'essai à blanc** et la confirmation. **Un en-tête inconnu est une question**, pas un import. **Chaque ligne a une clé**, et chaque fichier une empreinte. **Chaque valeur remplacée est conservée** avec le numéro d'import, et l'import se défait en un geste.",
        "Et une règle de méthode : quand un fournisseur peut envoyer ses données autrement qu'en fichier, par une API ou un portail, on le fait, selon [le guide sur l'API partenaires](" + L.api + ") ; l'import de fichier est pour les fournisseurs qui n'ont que ça, et c'est la plupart.",
      ] },
      { heading: "Six entreprises, et l'import qui manquait", body: [
        "Six situations composées à partir de projets que nous rencontrons ; les noms sont génériques et les chiffres sont des exemples.",
      ], list: [
        "**Un grossiste alimentaire à Sétif, douze fournisseurs.** Douze tarifs Excel par mois, douze modèles différents, un lundi par semaine à copier. La construction : une correspondance par fournisseur, e-mail dédié, essai à blanc, seuil d'avertissement à 20 %. Le lundi matin est passé de trois heures à vingt minutes, en exemple.",
        "**Une pharmacie à trois officines.** Le catalogue du répartiteur changeait chaque semaine et les prix d'achat étaient faux une semaine sur quatre. La construction : import du catalogue avec règle de lecture, rejets rapportés au répartiteur, retour arrière ; le cas est décrit dans [le guide sur la pharmacie à trois officines](" + L.pharmacie + ").",
        "**Un fondateur à Paris, boutique en ligne à Alger.** Le fournisseur envoyait son fichier de stock le dimanche soir, et l'équipe le copiait le lundi avec des erreurs. La construction : dépôt par e-mail dédié, essai à blanc lisible depuis Paris, confirmation à distance ; la gestion à distance suit [le guide sur le commerce depuis la France](" + L.commerce + ").",
        "**Un distributeur à Oran, feuilles de comptage.** Les inventaires tournants arrivaient en Excel depuis les dépôts et étaient saisis à la main. La construction : import des feuilles de comptage en mouvements d'ajustement avec motif, écarts au-delà d'un seuil en avertissement.",
        "**Un détaillant à Constantine, portail B2B du grossiste.** Le grossiste exportait les commandes en CSV et le détaillant les ressaisissait. La construction : import CSV avec détection d'encodage, correspondance mémorisée, rapprochement avec les bons de livraison ; le portail est décrit dans [le guide sur le portail B2B](" + L.portail + ").",
        "**Une PME à Annaba, import doublé.** Le même fichier de réceptions importé deux fois, quantités doublées, découvert à l'inventaire. La construction : empreinte du fichier, clé par ligne, retour arrière ; le double import est devenu impossible.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Six semaines pour une entreprise qui reçoit déjà des fichiers récurrents ; la première semaine se passe sans code.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, fichiers et règles** : liste des fichiers récurrents, fournisseurs, fréquence, champs cibles, règles de lecture, seuils d'avertissement, qui confirme ; signés par le gérant. **Semaine 2, réception et correspondance** : dépôt, e-mail dédié, détection d'encodage et de feuille, table de correspondance par fournisseur mémorisée et versionnée. **Semaine 3, essai à blanc** : lecture complète sans écriture, verdict par ligne, seuils, aperçu, rapport des rejets.",
        "**Semaine 4, application et lots** : confirmation, application en arrière-plan par lots, progression, reprise, idempotence, valeurs remplacées conservées. **Semaine 5, historique et retour arrière** : journal des imports, annulation en un geste, rapport des rejets envoyé au fournisseur. **Semaine 6, mesure** : taux de lignes rejetées par fournisseur, imports annulés, temps du lundi matin avant et après, sur le tableau de bord selon [le guide sur le tableau de bord temps réel](" + L.dashboard + "). Chaque semaine se termine par une démonstration, selon [le guide sur la livraison sans casse](" + L.livrer + ").",
      ] },
      { heading: 'Ce qui fait échouer un import', body: [
        "Cinq causes, vues dans des applications qu'on reprend. **L'écriture immédiate** : le fichier est lu et écrit dans le même geste, et l'erreur se découvre en production. **La correspondance par position** : la troisième colonne va dans le troisième champ, jusqu'au jour où le fournisseur en ajoute une. **La lecture par défaut des nombres** : « 1 250,00 » devient 1 ou 125 000. **L'absence de clé** : le même fichier importé deux fois double tout. **L'absence d'historique** : un import faux se corrige à la main pendant trois jours.",
        "Et une cause de méthode : traiter chaque fichier comme un cas unique. Les fichiers qui reviennent méritent une correspondance mémorisée ; la première semaine est faite pour les lister.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que posent les gérants et les fondateurs quand ils nous décrivent le lundi matin des imports.",
      ], faq: [
        { q: "Pourquoi l'import Excel casse-t-il les données ?", a: "Parce que le fichier est écrit dans l'application au moment où il est lu, sans essai à blanc, avec une correspondance par position et une lecture des nombres par défaut. Une colonne ajoutée, un prix écrit à la française ou un fichier déposé deux fois suffisent. La construction qui règle cela : correspondance mémorisée, règle de lecture par colonne, essai à blanc, clé par ligne, retour arrière." },
        { q: "Qu'est-ce qu'un essai à blanc ?", a: "Une lecture complète du fichier qui n'écrit rien et rend un verdict par ligne : acceptée, avertissement à confirmer, ou rejet avec la raison. Le gérant voit ce qui va changer avant que ça change, confirme ou écarte des lignes, puis lance. C'est l'étape qui n'existe pas dans un copier-coller." },
        { q: "Que se passe-t-il si le fournisseur change ses colonnes ?", a: "Un en-tête inconnu déclenche une question au gérant, qui relie la colonne au bon champ ; rien n'est importé avant. La correspondance passe en version suivante et est réutilisée. L'application ne devine jamais une correspondance." },
        { q: "Comment éviter d'importer le même fichier deux fois ?", a: "Par une empreinte du fichier et une clé d'idempotence par ligne, fournisseur, référence et empreinte. Le même fichier redéposé ne fait rien, et une ligne déjà appliquée n'est pas réappliquée après une coupure. C'est la même mécanique que pour la synchronisation hors ligne." },
        { q: "Peut-on annuler un import ?", a: "Oui, en un geste, parce que chaque valeur remplacée est conservée avec le numéro de l'import. L'annulation restaure les valeurs précédentes et est elle-même un import journalisé. Un import faux se défait en une minute au lieu de trois jours de correction manuelle." },
        { q: "Le fichier arrive par e-mail, faut-il le déposer à la main ?", a: "Non si une boîte e-mail dédiée est mise en place : le fournisseur y envoie son fichier, l'application le reçoit, reconnaît le modèle et prépare l'essai à blanc ; le gérant n'a plus qu'à lire et confirmer. Quand le fournisseur a une API, on la préfère au fichier." },
        { q: "Combien de temps pour mettre cela en place ?", a: "Six semaines dans le calendrier type : une pour lister les fichiers et écrire les règles, une pour la réception et la correspondance, une pour l'essai à blanc, une pour l'application par lots, une pour l'historique et le retour arrière, une pour la mesure. Le délai dépend du nombre de fournisseurs et de la variété des fichiers." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Les en-têtes du fournisseur ne sont jamais les champs de l'application : une table de correspondance, mémorisée par fournisseur, fait le lien, et chaque colonne a une règle de lecture." },
      { after: 2, text: "Rien n'est écrit avant l'essai à blanc et la confirmation ; tout ce qui est écrit peut être défait en un geste." },
    ],
    cta: { eyebrow: 'Envoyez-nous trois fichiers fournisseurs, nous montrons l’essai à blanc', title: "Gérant en Algérie ou fondateur en France : nous construisons des imports qui se relisent avant d'écrire et se défont en un geste", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : réception par dépôt, e-mail dédié ou dossier partagé, détection d'encodage et de feuille, correspondance mémorisée et versionnée par fournisseur, règles de lecture par colonne, essai à blanc avec verdict par ligne et seuils d'avertissement, application en arrière-plan par lots avec reprise et idempotence, journal des imports, retour arrière en un geste, rapport des rejets au fournisseur, mesure par fournisseur. Code et règles dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.reprendre, kind: '2027', name: 'Reprendre ses données Excel et de l’ancien logiciel' },
      { href: L.integrer, kind: '2027', name: 'Intégrer un logiciel existant : API, webhooks, exports' },
      { href: L.devis, kind: '2027', name: 'Du devis à la facture : moteur de prix' },
      { href: L.stock, kind: '2027', name: 'Stock faux dans l’application : journal de mouvements' },
    ] },
  },
  en: {
    kind: 'Imports · Excel · Suppliers · 2027', title: "“The supplier's Excel file arrives every week”: what gets built to import it without breaking anything in an application in Algeria in 2027, remembered mapping, row-by-row validation, dry run, batches, undo",
    dek: "“Every Monday the supplier sends its price list in Excel. Someone copies it into the application, a column shifts, and prices are wrong until Wednesday. Last month the same file was imported twice and received quantities doubled.” An import that breaks is not the fault of the person copying, it is a construction: an application that takes the file as is and writes immediately can neither re-read, nor refuse, nor undo. This guide describes what gets built so that a recurring file imports without breaking: a mapping remembered per supplier, a reading rule per column, a verdict per row before any write, a dry run, a background apply in batches, a key that prevents double import, a journal and a one-gesture undo.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Excel import', 'Suppliers', 'Validation', 'Background jobs', 'Algeria 2027'],
    intro: [
      "**Short answer.** The supplier's headers are never the application's fields: a **mapping table**, remembered per supplier and versioned, links each column to a field with a **reading rule**, decimal comma, spaces in codes, title and totals rows to ignore. Before a single value is written, a **dry run** reads everything and gives a **verdict per row**: accepted, warning to confirm, or rejection with the reason. The manager confirms, and the apply runs **in the background in batches**, with visible progress and resume after a cut; every row carries an **idempotency key**, and the file fingerprint means a re-uploaded file does nothing. Every replaced value is kept with the import number, which allows a one-gesture **undo**. An unknown header triggers a question, not a wrong import. Six weeks, the first without code.",
      "This guide is for the manager of a wholesaler, a pharmacy or a shop that receives price lists, catalogues and count sheets in Excel every week, the founder settled in France whose team in Algiers spends Monday morning copy-pasting, and the person who has already had to fix a wrong import by hand. It does not repeat how an old file is taken over once and for all during a migration, described in [the data take-over guide](" + L.reprendre + "), nor how to connect to software that has an API, described in [the integration guide](" + L.integrer + "); it describes what gets built for files that keep coming back, and it extends [our software engineering page](" + L.service + ").",
    ],
    sections: [
      { heading: "The supplier's file, column by column", body: [
        "The figure shows a supplier price list as it arrives, and what the application does with it column by column and row by row, before writing anything.",
      ], visual: 'correspondance', after: [
        "The file has a merged title row, headers in the supplier's words, prices written “1 250,00”, a barcode with spaces, an empty reference, an “N/A” and a totals row. None of these details is a supplier error: it is a file made to be read by a human. The mapping links “Ref.” to the supplier reference, which is the key, “Unit price” to the purchase price with the French reading rule, “EAN code” to the barcode with the check digit verified; title and totals rows are ignored by the template.",
        "Every row gets a verdict: three accepted, one of them with a cleaned code; one with a warning, because the price rises 40 % since the last import and the manager set that threshold; two rejected, empty reference and unreadable price, with the reason. The mapping is remembered for this supplier and reused every week; if a column changes name, the application asks the manager to link it, it does not guess. The data in the figure is a constructed example.",
      ] },
      { heading: 'An import that breaks nothing, in five layers', body: [
        "The dry run is the layer that matters, but it is not enough: you need a receipt that recognises the file, a mapping that lasts, an apply that resumes, and a history that undoes.",
      ], visual: 'couches', after: [
        "**Receipt.** Upload by the manager, a dedicated mailbox the supplier sends to directly, or a shared folder; .xlsx and .csv, encoding and sheet detection, file fingerprint: the same file uploaded twice is imported once. **Mapping.** One table per supplier and file type: which column goes to which field, which rows are ignored, which reading rule applies to each column; remembered and versioned, because suppliers change their templates. **Validation.** The dry run reads everything and writes nothing; verdict per row, written warning thresholds, preview and rejection report; this is the accented layer.",
        "**Apply.** After confirmation only: in the background, in batches, with visible progress and resume after a cut; an idempotency key per row, following the same mechanics as [the offline guide](" + L.horsligne + "), and every replaced value kept with the import number. **History.** Import journal, who, when, which file, how many rows and rejections; one-gesture undo of an import; rejection report sent to the supplier by WhatsApp or e-mail, following [the notifications guide](" + L.notif + "). Who may import and who may confirm a warning are rights, following [the roles guide](" + L.roles + ").",
      ] },
      { heading: 'One import, from upload to undo', body: [
        "The figure follows an import of 1,842 rows, from file upload to the possible undo, with the time of each step.",
      ], visual: 'import', after: [
        "The file is uploaded, the supplier's template is recognised, and the dry run gives a verdict per row in two seconds: 1,790 accepted, 44 warnings, 8 rejections. The manager sees the 44 warnings, confirms or excludes some, and launches; the apply runs in the background in batches of 200, with a progress bar, and finishes in 38 seconds. The journal records import number 27, 1,790 prices updated, and the report of the 8 rejections goes to the supplier; the manager gets a message.",
        "Two mechanisms make the import safe. The undo: every replaced value was kept with the import number, and import 27 is undone in one gesture, the undo being itself a logged import. Idempotency: the key supplier, reference and file fingerprint means a re-uploaded file does nothing, and a row already applied is not reapplied after a cut at batch 6. Row counts and durations are a constructed example; duration depends on volume and server.",
      ] },
      { heading: 'Monday morning, in six gestures', body: [
        "What the manager or the employee in charge of imports does, in order, and why the third gesture is the one that changes everything.",
      ], visual: 'etapes', after: [
        "**Upload the file**, by dragging it, or do nothing because it arrived by itself through the dedicated e-mail. **Check the template**: supplier recognised, columns linked; if a column changed, link it, and the template moves to the next version. **Read the dry run**: accepted, warnings, rejections, preview of the first rows; this is the accented step, the one that does not exist in a copy-paste. **Settle the warnings**: confirm in one gesture, or exclude rows. **Launch**, and close the screen if you like. **Read the journal**: what changed, the rejection report gone to the supplier, and undo if needed.",
        "The five mechanical gestures take two minutes; the third takes five, and it is the one that avoids a week of wrong prices. Imported prices feed the pricing engine described in [the quote guide](" + L.devis + "), and the quantities of a count sheet become adjustment movements, following [the stock guide](" + L.stock + ").",
      ] },
      { heading: 'Six real situations, and what the application does', body: [
        "The six situations found in almost every company that imports files every week, and the construction that settles them.",
      ], visual: 'situations', after: [
        "The first two rows are settled by the mapping and the reading rules: an unknown header is a question, not a column shift, and a French-style price is read as such. The third is settled by the dry run and a written threshold. The next two are settled by idempotency and batches: the file fingerprint and the per-row key prevent double import, and a cut in the middle does not replay what is done. The last is settled by the history: every replaced value is kept, and the import is undone in one gesture. None is settled by an employee more careful with copy-paste.",
      ] },
      { heading: "Seen elsewhere: Excel's limits, CSV and market import tools, and what carries over", body: [
        "Three facts carry over as they are. **Excel's limits**: a worksheet holds at most 1,048,576 rows and 16,384 columns, and a cell 32,767 characters, according to Microsoft's documentation; what carries over is that a ten-thousand-row file is small for the application, but the manager's screen must show only a preview and a summary. **CSV**: a text format whose separator, encoding and byte-order mark vary with the tool that produced it, and whose Arabic comes out unreadable when the encoding is misdetected; what carries over is detection at receipt and a preview the manager reads before confirming, following the rules described in [the bilingual application guide](" + L.bilingue + "). **Market software import tools**: column mapping, preview, error report; what carries over is remembering per supplier and the undo, which generic tools rarely have.",
        "What those facts do not decide for you: your target fields, your warning thresholds, who confirms, and what is done with a rejected row; the project's first week answers that, and the manager signs.",
      ] },
      { heading: 'The rules of an import that breaks nothing', body: [
        "Six rules, written in the first week. **The supplier's headers are never the fields**: a remembered mapping makes the link. **Every column has a written reading rule.** **Nothing is written before the dry run** and the confirmation. **An unknown header is a question**, not an import. **Every row has a key**, and every file a fingerprint. **Every replaced value is kept** with the import number, and the import is undone in one gesture.",
        "And one rule of method: when a supplier can send its data other than as a file, through an API or a portal, you do that, following [the partner API guide](" + L.api + "); file import is for suppliers that have nothing else, and that is most of them.",
      ] },
      { heading: 'Six companies, and the import that was missing', body: [
        "Six situations composed from projects we meet; the names are generic and the figures are examples.",
      ], list: [
        "**A food wholesaler in Sétif, twelve suppliers.** Twelve Excel price lists a month, twelve different templates, one Monday a week spent copying. The construction: one mapping per supplier, dedicated e-mail, dry run, 20 % warning threshold. Monday morning went from three hours to twenty minutes, as an example.",
        "**A pharmacy with three branches.** The distributor's catalogue changed every week and purchase prices were wrong one week in four. The construction: catalogue import with reading rule, rejections reported to the distributor, undo; the case is described in [the three-branch pharmacy guide](" + L.pharmacie + ").",
        "**A founder in Paris, online shop in Algiers.** The supplier sent its stock file on Sunday evening, and the team copied it on Monday with errors. The construction: upload by dedicated e-mail, dry run readable from Paris, remote confirmation; remote management follows [the shop from France guide](" + L.commerce + ").",
        "**A distributor in Oran, count sheets.** Cycle counts arrived in Excel from the warehouses and were typed by hand. The construction: import of count sheets as adjustment movements with reason, variances beyond a threshold as warnings.",
        "**A retailer in Constantine, the wholesaler's B2B portal.** The wholesaler exported orders as CSV and the retailer retyped them. The construction: CSV import with encoding detection, remembered mapping, reconciliation with delivery notes; the portal is described in [the B2B portal guide](" + L.portail + ").",
        "**An SME in Annaba, doubled import.** The same receipts file imported twice, quantities doubled, found at stocktake. The construction: file fingerprint, per-row key, undo; double import became impossible.",
      ] },
      { heading: 'The 2027 calendar', body: [
        "Six weeks for a company that already receives recurring files; the first week passes without code.",
      ], visual: 'calendrier', after: [
        "**Week 1, files and rules**: list of recurring files, suppliers, frequency, target fields, reading rules, warning thresholds, who confirms; signed by the manager. **Week 2, receipt and mapping**: upload, dedicated e-mail, encoding and sheet detection, mapping table per supplier remembered and versioned. **Week 3, dry run**: full read without writing, verdict per row, thresholds, preview, rejection report.",
        "**Week 4, apply and batches**: confirmation, background apply in batches, progress, resume, idempotency, replaced values kept. **Week 5, history and undo**: import journal, one-gesture undo, rejection report sent to the supplier. **Week 6, measurement**: rejected-row rate per supplier, undone imports, Monday-morning time before and after, on the dashboard following [the real-time dashboard guide](" + L.dashboard + "). Every week ends with a demo, following [the delivery without breakage guide](" + L.livrer + ").",
      ] },
      { heading: 'What makes an import fail', body: [
        "Five causes, seen in applications we take over. **Immediate writing**: the file is read and written in the same gesture, and the error is found in production. **Mapping by position**: the third column goes into the third field, until the day the supplier adds one. **Default number reading**: “1 250,00” becomes 1 or 125,000. **No key**: the same file imported twice doubles everything. **No history**: a wrong import is fixed by hand for three days.",
        "And one cause of method: treating every file as a unique case. Files that keep coming back deserve a remembered mapping; the first week exists to list them.",
      ] },
      { heading: 'Frequently asked questions', body: [
        "The questions managers and founders ask when they describe the Monday morning of imports.",
      ], faq: [
        { q: "Why does the Excel import break the data?", a: "Because the file is written into the application the moment it is read, without a dry run, with mapping by position and default number reading. An added column, a French-style price or a file uploaded twice is enough. The construction that settles this: remembered mapping, reading rule per column, dry run, per-row key, undo." },
        { q: "What is a dry run?", a: "A full read of the file that writes nothing and gives a verdict per row: accepted, warning to confirm, or rejection with the reason. The manager sees what will change before it changes, confirms or excludes rows, then launches. It is the step that does not exist in a copy-paste." },
        { q: "What happens if the supplier changes its columns?", a: "An unknown header triggers a question to the manager, who links the column to the right field; nothing is imported before. The mapping moves to the next version and is reused. The application never guesses a mapping." },
        { q: "How do you avoid importing the same file twice?", a: "With a file fingerprint and an idempotency key per row, supplier, reference and fingerprint. The same file re-uploaded does nothing, and a row already applied is not reapplied after a cut. It is the same mechanics as for offline synchronisation." },
        { q: "Can an import be undone?", a: "Yes, in one gesture, because every replaced value is kept with the import number. The undo restores the previous values and is itself a logged import. A wrong import is undone in a minute instead of three days of manual fixing." },
        { q: "The file arrives by e-mail, must it be uploaded by hand?", a: "Not if a dedicated mailbox is set up: the supplier sends its file there, the application receives it, recognises the template and prepares the dry run; the manager only has to read and confirm. When the supplier has an API, it is preferred to the file." },
        { q: "How long does it take to set this up?", a: "Six weeks in the typical calendar: one to list the files and write the rules, one for receipt and mapping, one for the dry run, one for batch apply, one for history and undo, one for measurement. The duration depends on the number of suppliers and the variety of files." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The supplier's headers are never the application's fields: a mapping table, remembered per supplier, makes the link, and every column has a reading rule." },
      { after: 2, text: "Nothing is written before the dry run and the confirmation; everything written can be undone in one gesture." },
    ],
    cta: { eyebrow: 'Send us three supplier files, we show you the dry run', title: 'Manager in Algeria or founder in France: we build imports that read themselves back before writing and undo in one gesture', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: receipt by upload, dedicated e-mail or shared folder, encoding and sheet detection, mapping remembered and versioned per supplier, reading rules per column, dry run with verdict per row and warning thresholds, background apply in batches with resume and idempotency, import journal, one-gesture undo, rejection report to the supplier, measurement per supplier. Code and rules in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.reprendre, kind: '2027', name: 'Taking over Excel and old-software data' },
      { href: L.integrer, kind: '2027', name: 'Integrating existing software: API, webhooks, exports' },
      { href: L.devis, kind: '2027', name: 'From quote to invoice: pricing engine' },
      { href: L.stock, kind: '2027', name: 'Wrong stock in the application: movement ledger' },
    ] },
  },
  ar: {
    kind: 'استيراد · Excel · موردون · 2027', title: '«ملف Excel من المورد يصل كل أسبوع»: ما يُبنى لاستيراده دون كسر في تطبيق في الجزائر سنة 2027، مطابقة محفوظة، تحقق سطراً سطراً، تجربة على الفارغ، دفعات، تراجع',
    dek: '«كل اثنين يرسل المورد تعريفته في Excel. ينسخها أحدهم في التطبيق، فينزاح عمود، وتبقى الأسعار خاطئة حتى الأربعاء. وفي الشهر الماضي استُورد الملف نفسه مرتين فتضاعفت الكميات المستلَمة.» الاستيراد الذي يكسر ليس خطأ من ينسخ بل بناء: تطبيق يأخذ الملف كما هو ويكتب فوراً لا يستطيع المراجعة ولا الرفض ولا التراجع. يصف هذا الدليل ما يُبنى كي يُستورد ملف متكرر دون كسر: مطابقة محفوظة لكل مورد، قاعدة قراءة لكل عمود، حكم لكل سطر قبل أي كتابة، تجربة على الفارغ، تطبيق في الخلفية بدفعات، مفتاح يمنع الاستيراد المزدوج، سجل وتراجع بحركة واحدة.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['استيراد Excel', 'موردون', 'تحقق', 'مهام خلفية', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** رؤوس المورد ليست أبداً حقول التطبيق: **جدول مطابقة** محفوظ لكل مورد وبنسخ يربط كل عمود بحقل مع **قاعدة قراءة**، فاصلة عشرية، مسافات في الرموز، أسطر عنوان ومجاميع تُتجاهَل. وقبل كتابة قيمة واحدة تقرأ **تجربة على الفارغ** كل شيء وتعطي **حكماً لكل سطر**: مقبول، أو تحذير يُؤكَّد، أو رفض بسببه. يؤكد المسيّر فيجري التطبيق **في الخلفية بدفعات** بتقدم ظاهر واستئناف بعد انقطاع؛ ويحمل كل سطر **مفتاح عدم تكرار**، وبصمة الملف تجعل ملفاً معاد إيداعه لا يفعل شيئاً. وكل قيمة مستبدَلة تُحفظ برقم الاستيراد، ما يسمح **بالتراجع** بحركة واحدة. ورأس مجهول يطلق سؤالاً لا استيراداً خاطئاً. ستة أسابيع، أولها بلا كود.',
      'يتوجه هذا الدليل إلى مسيّر تاجر جملة أو صيدلية أو متجر يتلقى تعريفات وكتالوجات وأوراق جرد في Excel كل أسبوع، وإلى المؤسس المقيم في فرنسا الذي يقضي فريقه في الجزائر صباح الاثنين في النسخ واللصق، وإلى المسؤول الذي اضطر إلى تصحيح استيراد خاطئ يدوياً. لا يعيد شرح كيف يُستعاد ملف قديم مرة واحدة عند الترحيل، الموصوف في [دليل استعادة البيانات](' + L.reprendre + ')، ولا كيف نتصل ببرنامج له API، الموصوف في [دليل الدمج](' + L.integrer + ')؛ بل يصف ما يُبنى للملفات التي تعود، ويمتد من [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'ملف المورد، عموداً عموداً', body: [
        'يُظهر الشكل تعريفة مورد كما تصل، وما يفعله التطبيق بها عموداً عموداً وسطراً سطراً قبل كتابة أي شيء.',
      ], visual: 'correspondance', after: [
        'للملف سطر عنوان مدمج ورؤوس بكلمات المورد وأسعار مكتوبة «1 250,00» وباركود فيه مسافات ومرجع فارغ و«N/D» وسطر مجاميع. ولا واحد من هذه التفاصيل خطأ من المورد: إنه ملف صُنع ليقرأه إنسان. تربط المطابقة «مرجع» بمرجع المورد وهو المفتاح، و«سعر الوحدة» بسعر الشراء بقاعدة القراءة الفرنسية، و«رمز EAN» بالباركود مع التحقق من رقم التحقق؛ وسطرا العنوان والمجاميع يتجاهلهما القالب.',
        'ويتلقى كل سطر حكماً: ثلاثة مقبولة منها واحد برمز منظَّف؛ وواحد بتحذير لأن السعر يرتفع 40 % عن آخر استيراد والمسيّر حدد هذه العتبة؛ واثنان مرفوضان، مرجع فارغ وسعر غير مقروء، بسببهما. والمطابقة محفوظة لهذا المورد ويُعاد استعمالها كل أسبوع؛ وإن تغيّر اسم عمود يطلب التطبيق من المسيّر ربطه ولا يخمّن. وبيانات الشكل مثال مبني.',
      ] },
      { heading: 'استيراد لا يكسر شيئاً، في خمس طبقات', body: [
        'التجربة على الفارغ هي الطبقة المهمة لكنها لا تكفي: نحتاج استلاماً يعرف الملف، ومطابقة تدوم، وتطبيقاً يُستأنف، وتاريخاً يتراجع.',
      ], visual: 'couches', after: [
        '**الاستلام.** إيداع من المسيّر، أو صندوق بريد مخصص يرسل إليه المورد بنفسه، أو مجلد مشترك؛ صيغتا .xlsx و.csv، اكتشاف الترميز والورقة، بصمة الملف: الملف نفسه مودَعاً مرتين يُستورد مرة واحدة. **المطابقة.** جدول لكل مورد ونوع ملف: أي عمود يذهب إلى أي حقل، أي أسطر تُتجاهَل، أي قاعدة قراءة تنطبق على كل عمود؛ محفوظ وبنسخ لأن الموردين يغيّرون قوالبهم. **التحقق.** التجربة على الفارغ تقرأ كل شيء ولا تكتب شيئاً؛ حكم لكل سطر، عتبات تحذير مكتوبة، معاينة وتقرير رفض؛ وهي الطبقة المميزة.',
        '**التطبيق.** بعد التأكيد فقط: في الخلفية بدفعات بتقدم ظاهر واستئناف بعد انقطاع؛ مفتاح عدم تكرار لكل سطر بالآلية نفسها في [دليل العمل دون اتصال](' + L.horsligne + ')، وكل قيمة مستبدَلة محفوظة برقم الاستيراد. **التاريخ.** سجل الاستيرادات، من ومتى وأي ملف وكم سطراً ورفضاً؛ تراجع عن استيراد بحركة واحدة؛ تقرير الرفض مرسل إلى المورد عبر WhatsApp أو البريد وفق [دليل الإشعارات](' + L.notif + '). ومن يستورد ومن يؤكد تحذيراً حقوق وفق [دليل الأدوار](' + L.roles + ').',
      ] },
      { heading: 'استيراد واحد، من الإيداع إلى التراجع', body: [
        'يتتبع الشكل استيراد 1,842 سطراً من إيداع الملف إلى الإلغاء الممكن، مع وقت كل خطوة.',
      ], visual: 'import', after: [
        'يُودَع الملف ويُعرف قالب المورد وتعطي التجربة على الفارغ في ثانيتين حكماً لكل سطر: 1,790 مقبولة و44 تحذيراً و8 رفض. يرى المسيّر التحذيرات الأربعة والأربعين فيؤكد بعضها أو يستبعده ويطلق؛ ويجري التطبيق في الخلفية بدفعات من 200 بشريط تقدم وينتهي في 38 ثانية. ويسجّل السجل الاستيراد رقم 27 و1,790 سعراً محدَّثاً، وينطلق تقرير الرفض الثمانية إلى المورد؛ ويتلقى المسيّر رسالة.',
        'آليتان تجعلان الاستيراد آمناً. التراجع: كل قيمة مستبدَلة حُفظت برقم الاستيراد، ويُلغى الاستيراد 27 بحركة واحدة، والإلغاء نفسه استيراد مسجَّل. وعدم التكرار: مفتاح المورد والمرجع وبصمة الملف يجعل ملفاً معاد إيداعه لا يفعل شيئاً، وسطراً طُبّق لا يُعاد تطبيقه بعد انقطاع عند الدفعة 6. وأعداد الأسطر والمدد مثال مبني؛ وتتوقف المدة على الحجم والخادم.',
      ] },
      { heading: 'صباح الاثنين، في ست حركات', body: [
        'ما يفعله المسيّر أو الموظف المكلف بالاستيرادات بالترتيب، ولماذا الحركة الثالثة هي التي تغيّر كل شيء.',
      ], visual: 'etapes', after: [
        '**إيداع الملف** بسحبه، أو عدم فعل شيء لأنه وصل وحده عبر البريد المخصص. **مراجعة القالب**: المورد معروف والأعمدة مربوطة؛ وإن تغيّر عمود يُربط وينتقل القالب إلى النسخة التالية. **قراءة التجربة على الفارغ**: مقبولة وتحذيرات ورفض ومعاينة الأسطر الأولى؛ وهي الخطوة المميزة التي لا توجد في النسخ واللصق. **الفصل في التحذيرات**: تأكيد بحركة واحدة أو استبعاد أسطر. **الإطلاق**، وإغلاق الشاشة إن شئنا. **قراءة السجل**: ما تغيّر، وتقرير الرفض المرسل إلى المورد، والإلغاء عند الحاجة.',
        'الحركات الآلية الخمس تستغرق دقيقتين؛ والثالثة خمساً، وهي التي تجنّب أسبوعاً من الأسعار الخاطئة. والأسعار المستوردة تغذي محرك الأسعار الموصوف في [دليل عرض السعر](' + L.devis + ')، وكميات ورقة الجرد تصير حركات تسوية وفق [دليل المخزون](' + L.stock + ').',
      ] },
      { heading: 'ست حالات حقيقية، وما يفعله التطبيق', body: [
        'الحالات الست التي نجدها في كل الشركات التي تستورد ملفات كل أسبوع تقريباً، والبناء الذي يحلها.',
      ], visual: 'situations', after: [
        'السطران الأولان يُحلان بالمطابقة وقواعد القراءة: الرأس المجهول سؤال لا انزياح عمود، والسعر بالطريقة الفرنسية يُقرأ كذلك. والثالث بالتجربة على الفارغ وعتبة مكتوبة. والتاليان بعدم التكرار والدفعات: بصمة الملف ومفتاح كل سطر يمنعان الاستيراد المزدوج، وانقطاع في المنتصف لا يعيد ما تم. والأخير بالتاريخ: كل قيمة مستبدَلة محفوظة، والاستيراد يُلغى بحركة واحدة. ولا واحد يُحل بموظف أكثر انتباهاً في النسخ واللصق.',
      ] },
      { heading: 'ما رأيناه في مكان آخر: حدود Excel وCSV وأدوات الاستيراد في السوق، وما ينتقل', body: [
        'ثلاث حقائق تنتقل كما هي. **حدود Excel**: تحوي الورقة على الأكثر 1,048,576 سطراً و16,384 عموداً، والخلية 32,767 حرفاً، بحسب توثيق Microsoft؛ وما ينتقل هو أن ملفاً من عشرة آلاف سطر صغير للتطبيق لكن شاشة المسيّر يجب ألا تعرض إلا معاينة وملخصاً. **CSV**: صيغة نصية يختلف فاصلها وترميزها وعلامة ترتيب البايتات فيها حسب الأداة التي أنتجتها، وتخرج العربية فيها غير مقروءة حين يُخطأ اكتشاف الترميز؛ وما ينتقل هو اكتشاف عند الاستلام ومعاينة يقرؤها المسيّر قبل التأكيد وفق القواعد الموصوفة في [دليل التطبيق ثنائي اللغة](' + L.bilingue + '). **أدوات الاستيراد في برامج السوق**: مطابقة أعمدة ومعاينة وتقرير أخطاء؛ وما ينتقل هو الحفظ لكل مورد والتراجع، وهما نادران في الأدوات العامة.',
        'ما لا تقرره هذه الحقائق عنكم: حقولكم الهدف وعتبات تحذيركم ومن يؤكد وما يُفعل بسطر مرفوض؛ الأسبوع الأول من المشروع يجيب، والمسيّر يوقّع.',
      ] },
      { heading: 'قواعد استيراد لا يكسر شيئاً', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **رؤوس المورد ليست أبداً الحقول**: مطابقة محفوظة تربط. **لكل عمود قاعدة قراءة** مكتوبة. **لا شيء يُكتب قبل التجربة على الفارغ** والتأكيد. **الرأس المجهول سؤال** لا استيراد. **لكل سطر مفتاح** ولكل ملف بصمة. **كل قيمة مستبدَلة تُحفظ** برقم الاستيراد، ويُلغى الاستيراد بحركة واحدة.',
        'وقاعدة منهج: حين يستطيع المورد إرسال بياناته بغير ملف، عبر API أو بوابة، نفعل ذلك وفق [دليل API الشركاء](' + L.api + ')؛ واستيراد الملف للموردين الذين لا يملكون غيره، وهم الأغلب.',
      ] },
      { heading: 'ست شركات، والاستيراد الذي كان ناقصاً', body: [
        'ست حالات مركَّبة من مشاريع نصادفها؛ الأسماء عامة والأرقام أمثلة.',
      ], list: [
        '**تاجر جملة غذائي في سطيف، اثنا عشر مورداً.** اثنتا عشرة تعريفة Excel في الشهر، واثنا عشر قالباً مختلفاً، واثنين في الأسبوع للنسخ. البناء: مطابقة لكل مورد، بريد مخصص، تجربة على الفارغ، عتبة تحذير 20 %. انتقل صباح الاثنين من ثلاث ساعات إلى عشرين دقيقة، مثالاً.',
        '**صيدلية بثلاثة فروع.** كان كتالوج الموزع يتغير كل أسبوع وأسعار الشراء خاطئة أسبوعاً من أربعة. البناء: استيراد الكتالوج بقاعدة قراءة، رفض مرفوع إلى الموزع، تراجع؛ والحالة موصوفة في [دليل الصيدلية بثلاثة فروع](' + L.pharmacie + ').',
        '**مؤسس في باريس، متجر إلكتروني في الجزائر.** كان المورد يرسل ملف مخزونه مساء الأحد وينسخه الفريق الاثنين بأخطاء. البناء: إيداع ببريد مخصص، تجربة على الفارغ تُقرأ من باريس، تأكيد عن بعد؛ والتسيير عن بعد يتبع [دليل التجارة من فرنسا](' + L.commerce + ').',
        '**موزع في وهران، أوراق جرد.** كانت الجردات الدورية تصل في Excel من المستودعات وتُدخل يدوياً. البناء: استيراد أوراق الجرد حركاتِ تسوية بسبب، والفوارق فوق عتبة تحذيرات.',
        '**تاجر تجزئة في قسنطينة، بوابة B2B للجملة.** كان تاجر الجملة يصدّر الطلبيات CSV ويعيد التاجر إدخالها. البناء: استيراد CSV باكتشاف الترميز، مطابقة محفوظة، مطابقة مع وصولات التسليم؛ والبوابة موصوفة في [دليل بوابة B2B](' + L.portail + ').',
        '**مؤسسة في عنابة، استيراد مضاعف.** ملف الاستلامات نفسه استُورد مرتين، تضاعفت الكميات، اكتُشف عند الجرد. البناء: بصمة الملف، مفتاح لكل سطر، تراجع؛ صار الاستيراد المزدوج مستحيلاً.',
      ] },
      { heading: 'تقويم 2027', body: [
        'ستة أسابيع لشركة تتلقى ملفات متكررة أصلاً؛ والأسبوع الأول يمر بلا كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 1، الملفات والقواعد**: قائمة الملفات المتكررة، الموردون، التواتر، الحقول الهدف، قواعد القراءة، عتبات التحذير، من يؤكد؛ يوقّعها المسيّر. **الأسبوع 2، الاستلام والمطابقة**: إيداع، بريد مخصص، اكتشاف الترميز والورقة، جدول مطابقة لكل مورد محفوظ وبنسخ. **الأسبوع 3، التجربة على الفارغ**: قراءة كاملة بلا كتابة، حكم لكل سطر، عتبات، معاينة، تقرير الرفض.',
        '**الأسبوع 4، التطبيق والدفعات**: تأكيد، تطبيق في الخلفية بدفعات، تقدم، استئناف، عدم تكرار، قيم مستبدَلة محفوظة. **الأسبوع 5، التاريخ والتراجع**: سجل الاستيرادات، إلغاء بحركة واحدة، تقرير الرفض مرسل إلى المورد. **الأسبوع 6، القياس**: نسبة الأسطر المرفوضة لكل مورد، استيرادات ملغاة، وقت صباح الاثنين قبل وبعد، على لوحة القيادة وفق [دليل لوحة القيادة الآنية](' + L.dashboard + '). وكل أسبوع ينتهي بعرض وفق [دليل التسليم دون كسر](' + L.livrer + ').',
      ] },
      { heading: 'ما يُفشل استيراداً', body: [
        'خمسة أسباب رأيناها في تطبيقات نستلمها. **الكتابة الفورية**: يُقرأ الملف ويُكتب في الحركة نفسها، ويُكتشف الخطأ في الإنتاج. **المطابقة بالموضع**: العمود الثالث إلى الحقل الثالث، حتى يوم يضيف المورد عموداً. **القراءة الافتراضية للأرقام**: «1 250,00» تصير 1 أو 125,000. **غياب المفتاح**: الملف نفسه مستورداً مرتين يضاعف كل شيء. **غياب التاريخ**: استيراد خاطئ يُصحَّح يدوياً ثلاثة أيام.',
        'وسبب منهجي: معاملة كل ملف حالة فريدة. الملفات التي تعود تستحق مطابقة محفوظة؛ والأسبوع الأول موجود لإدراجها.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي يطرحها المسيّرون والمؤسسون حين يصفون لنا صباح الاثنين للاستيرادات.',
      ], faq: [
        { q: 'لماذا يكسر استيراد Excel البيانات؟', a: 'لأن الملف يُكتب في التطبيق لحظة قراءته، بلا تجربة على الفارغ، بمطابقة بالموضع وقراءة افتراضية للأرقام. ويكفي عمود مضاف أو سعر مكتوب بالطريقة الفرنسية أو ملف مودَع مرتين. والبناء الذي يحل ذلك: مطابقة محفوظة، قاعدة قراءة لكل عمود، تجربة على الفارغ، مفتاح لكل سطر، تراجع.' },
        { q: 'ما التجربة على الفارغ؟', a: 'قراءة كاملة للملف لا تكتب شيئاً وتعطي حكماً لكل سطر: مقبول، أو تحذير يُؤكَّد، أو رفض بسببه. يرى المسيّر ما سيتغير قبل أن يتغير، ويؤكد أو يستبعد أسطراً، ثم يطلق. وهي الخطوة التي لا توجد في النسخ واللصق.' },
        { q: 'ماذا يحدث إن غيّر المورد أعمدته؟', a: 'رأس مجهول يطلق سؤالاً للمسيّر الذي يربط العمود بالحقل الصحيح؛ ولا يُستورد شيء قبل ذلك. وتنتقل المطابقة إلى النسخة التالية ويُعاد استعمالها. والتطبيق لا يخمّن مطابقة أبداً.' },
        { q: 'كيف نتجنب استيراد الملف نفسه مرتين؟', a: 'ببصمة الملف ومفتاح عدم تكرار لكل سطر، المورد والمرجع والبصمة. الملف نفسه معاداً لا يفعل شيئاً، وسطر طُبّق لا يُعاد تطبيقه بعد انقطاع. وهي آلية المزامنة دون اتصال نفسها.' },
        { q: 'هل يمكن إلغاء استيراد؟', a: 'نعم، بحركة واحدة، لأن كل قيمة مستبدَلة تُحفظ برقم الاستيراد. ويستعيد الإلغاء القيم السابقة وهو نفسه استيراد مسجَّل. واستيراد خاطئ يُلغى في دقيقة بدل ثلاثة أيام تصحيح يدوي.' },
        { q: 'يصل الملف بالبريد، هل يجب إيداعه يدوياً؟', a: 'لا إن أُنشئ صندوق بريد مخصص: يرسل المورد ملفه إليه، ويستلمه التطبيق ويعرف القالب ويحضّر التجربة على الفارغ؛ ولا يبقى للمسيّر إلا القراءة والتأكيد. وحين يملك المورد API تُفضَّل على الملف.' },
        { q: 'كم من الوقت لإقامة ذلك؟', a: 'ستة أسابيع في التقويم النموذجي: واحد لإدراج الملفات وكتابة القواعد، وواحد للاستلام والمطابقة، وواحد للتجربة على الفارغ، وواحد للتطبيق بدفعات، وواحد للتاريخ والتراجع، وواحد للقياس. وتتوقف المدة على عدد الموردين وتنوع الملفات.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'رؤوس المورد ليست أبداً حقول التطبيق: جدول مطابقة محفوظ لكل مورد يربط بينها، ولكل عمود قاعدة قراءة.' },
      { after: 2, text: 'لا شيء يُكتب قبل التجربة على الفارغ والتأكيد؛ وكل ما يُكتب يمكن إلغاؤه بحركة واحدة.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا ثلاثة ملفات موردين، نُريكم التجربة على الفارغ', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نبني استيرادات تُراجَع قبل الكتابة وتُلغى بحركة واحدة', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: استلام بالإيداع أو البريد المخصص أو المجلد المشترك، اكتشاف الترميز والورقة، مطابقة محفوظة وبنسخ لكل مورد، قواعد قراءة لكل عمود، تجربة على الفارغ بحكم لكل سطر وعتبات تحذير، تطبيق في الخلفية بدفعات باستئناف وعدم تكرار، سجل استيرادات، تراجع بحركة واحدة، تقرير رفض إلى المورد، قياس لكل مورد. الكود والقواعد في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reprendre, kind: '2027', name: 'استعادة بيانات Excel والبرنامج القديم' },
      { href: L.integrer, kind: '2027', name: 'دمج برنامج موجود: API، webhooks، تصديرات' },
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة: محرك الأسعار' },
      { href: L.stock, kind: '2027', name: 'مخزون خاطئ في التطبيق: سجل الحركات' },
    ] },
  },
};

const KEYWORDS = "importer fichier excel application algérie 2027, import excel fournisseur chaque semaine, import tarif fournisseur application, import csv sans casser données, correspondance colonnes import excel, essai à blanc import validation ligne par ligne, annuler un import application, import en arrière-plan par lots, double import fichier idempotence, mise à jour des prix par excel application, catalogue fournisseur import automatique, feuille de comptage import excel stock, recurring excel import validation dry run undo algeria 2027, supplier price list import mapping, استيراد ملف Excel التطبيق الجزائر 2027, استيراد تعريفة المورد, تجربة على الفارغ استيراد";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
