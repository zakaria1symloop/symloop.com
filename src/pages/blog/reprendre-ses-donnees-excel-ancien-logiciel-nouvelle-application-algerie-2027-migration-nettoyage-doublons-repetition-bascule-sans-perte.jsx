import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte.mjs';

const SLUG = 'reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte';
const FIGURES = ['nettoyage', 'etapes', 'bascule', 'sources', 'pieges', 'calendrier'];
const DATE = '2026-11-09';

const L = {
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  lire: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  saas: '/blog/construire-saas-multi-tenant-algerie-2027-isolation-clients-base-partagee-rls-plans-abonnement-mises-a-jour/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  dentaire: '/blog/cabinet-dentaire-algerie-2027-patients-diaspora-ete-plan-de-traitement-a-distance-devis-radios-suivi/',
  appart: '/blog/gerer-appartement-loue-algerie-depuis-la-france-2027-espace-proprietaire-quittances-etat-des-lieux-travaux/',
};

const CONTENT = {
  fr: {
    kind: 'Reprise des données · Excel · Bascule · 2027', title: "Reprendre ses données Excel et son ancien logiciel dans une nouvelle application en Algérie en 2027 : ce qu'on récupère, comment on nettoie, comment on prouve que rien n'est perdu, et comment on bascule en un week-end",
    dek: "« Et nos dix ans de fichiers Excel ? » La question arrive à la dernière réunion, quand l'application est presque prête, et la réponse « on fera un import » cache trois semaines de travail et le risque d'ouvrir un lundi avec des soldes faux. Ce guide décrit comment les données d'un tableur ou d'un ancien logiciel entrent dans la nouvelle application : l'inventaire des sources, la table de correspondance colonne par colonne, le nettoyage et la fusion des doublons, les trois chargements à blanc, le rapprochement des totaux à l'unité et au dinar près, et la bascule en un week-end avec un retour arrière écrit.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Reprise des données', 'Excel', 'Migration', 'Bascule', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Reprendre ses données n'est pas un import la veille du lancement : c'est un chantier de six semaines mené **en parallèle** de la construction de l'application. Il commence par un **inventaire** des sources et de ce qui fait foi, puis une **table de correspondance** signée : d'où vient chaque champ, avec quelle règle, et ce qu'on laisse derrière. Le **nettoyage** prend plus de temps que tout le reste : noms, téléphones, dates et montants normalisés, doublons fusionnés par règle, et les valeurs que le tableur a abîmées, une date devenue nombre, un identifiant de vingt chiffres tronqué à quinze, **redemandées et jamais devinées**. Tout est ensuite **chargé à blanc trois fois** dans une copie, avec un rapport des rejets. La preuve que rien n'est perdu est un **rapprochement** : nombre de clients, factures ouvertes, solde total, stock, égaux dans l'ancien et le nouveau. La **bascule** se fait en un week-end, ancien système en lecture seule, avec un retour arrière daté. On ne reprend que ce qui vit encore ; le reste s'archive.",
      "Ce guide s'adresse au gérant en Algérie dont l'activité tient dans des classeurs Excel et un logiciel de dix ans, au fondateur installé en France qui reprend une entreprise familiale et ses fichiers, et à celui qui compare des devis où « migration des données » tient en une ligne. Il ne traite pas de la connexion permanente entre deux logiciels, décrite dans [le guide sur l'intégration](" + L.integrer + ") ; il décrit le passage, fait une fois, de l'ancien au nouveau.",
    ],
    sections: [
      { heading: 'Ce que les chiffres disent', body: [
        "Un tableur stocke ce qu'on lui tape, et il a ses limites écrites. La page des spécifications d'Excel publiée par Microsoft donne une feuille de **1 048 576 lignes sur 16 384 colonnes**, une **précision numérique de quinze chiffres**, et des dates calculées à partir du **1er janvier 1900**. Ces trois lignes expliquent trois pannes de reprise. Les dates sont des nombres : 45123 est le 16 juillet 2023, et une colonne exportée sans son format arrive comme une suite de nombres. Un identifiant de plus de quinze chiffres saisi comme un nombre perd ses derniers chiffres, remplacés par des zéros : c'est le cas d'un RIB de vingt chiffres, et aucune règle ne les retrouve. Et un fichier qui dépasse le million de lignes a été coupé en plusieurs, quelque part.",
        "Les dates ont une autre surprise, documentée. Microsoft explique qu'Excel **considère à tort 1900 comme une année bissextile**, par compatibilité avec le tableur Lotus 1-2-3, et que corriger ce comportement décalerait d'un jour presque toutes les dates des classeurs existants ; il existe aussi un second système de dates qui commence en 1904. Ce que cela impose : la conversion des dates se fait avec la règle du tableur, pas avec une soustraction naïve, et elle se vérifie sur des dates connues, la date de création de l'entreprise, la première facture, avant d'être appliquée à cent mille lignes.",
        "Le chargement lui-même est la partie facile. La documentation de PostgreSQL recommande de charger les lignes avec la commande de copie en masse plutôt qu'une série d'insertions, parce qu'elle a « nettement moins de surcoût pour les gros chargements », de créer les index après le chargement, et de lancer l'analyse des tables ensuite ; un chargement dans une seule transaction a un autre avantage, écrit dans la même page : si une ligne échoue, tout est annulé, et l'on n'est pas « coincé avec des données partiellement chargées ». Ce que cela impose : cent mille factures se chargent en minutes, et tout le temps du chantier est ailleurs, dans le nettoyage et le rapprochement. Ce que nous n'avons pas trouvé : une statistique sur l'état des fichiers des entreprises algériennes ; ce que nous voyons, c'est qu'un fichier clients de dix ans contient en général quelques pour cent de doublons, et nous le disons comme une observation.",
      ] },
      { heading: 'Deux lignes Excel deviennent une fiche client', body: [
        "La reprise ne se comprend pas sur un schéma de bases de données mais sur deux lignes d'un vrai fichier.",
      ], visual: 'nettoyage', after: [
        "**Le nom** : « sarl el baraka » avec une espace à la fin et « EL-BARAKA (SARL) » sont le même client ; la casse, les espaces et les tirets sont normalisés, et la forme juridique part dans son propre champ. **Le téléphone** : deux numéros dans la même cellule, l'un avec le zéro, l'autre sans ; un numéro par champ, au format international avec l'indicatif +213, celui qui servira à la connexion décrite dans [le guide sur l'OTP](" + L.otp + "). **La date** : 45123 dans une ligne et 16/07/23 dans l'autre sont la même date ; la première est convertie depuis le numéro de série du tableur, la seconde est lue avec le format du poste qui l'a saisie, et quand le jour et le mois peuvent s'inverser, la ligne est listée.",
        "**L'identifiant bancaire** : vingt chiffres saisis comme un nombre, affichés en notation scientifique, dont les cinq derniers sont perdus ; la seconde ligne l'a en texte mais tronqué ; il est marqué « à redemander au client » et la fiche entre sans lui. Aucune règle ne reconstruit un chiffre perdu, et une application qui devine un RIB est une application qui envoie un virement au mauvais compte. **La ville** : « blida » et « Blida ctr » sont rattachées au code de wilaya 09. **La fusion** : les deux lignes ont le même téléphone et un nom proche ; elles deviennent une fiche, leurs soldes s'additionnent, et les deux lignes d'origine restent attachées à la fiche pour qu'on puisse défaire la fusion.",
      ] },
      { heading: 'La reprise des données, en six étapes', body: [
        "Derrière ces deux lignes, six étapes, et la troisième prend plus de temps que les cinq autres.",
      ], visual: 'etapes', after: [
        "**L'inventaire** liste chaque source, qui la tient, depuis quand, et surtout ce qui fait foi quand deux sources se contredisent : le fichier du comptable ou celui du commercial. **La correspondance** est une table, colonne par colonne : d'où vient chaque champ de la nouvelle application, avec quelle règle de transformation, et ce qui est laissé derrière ; elle est signée par le gérant, et elle sert aussi aux développeurs, qui y découvrent les champs que l'activité utilise vraiment. **Le nettoyage** applique les règles, détecte les doublons, et produit la liste de ce qui ne peut pas être réparé et doit être redemandé ; cette liste part aux équipes dès la deuxième semaine, parce que rappeler deux cents clients prend du temps.",
        "**Le chargement à blanc** charge tout dans une copie de la nouvelle application, chronomètre l'opération, et produit un rapport : tant de lignes entrées, tant de rejetées, et pourquoi. Il se fait trois fois : le premier révèle les règles oubliées, le deuxième les corrige, le troisième est la répétition générale de la bascule. **Le rapprochement** compare des totaux entre l'ancien et le nouveau. **La bascule** suit un déroulé écrit heure par heure, répété, avec un retour arrière. Le tout se déroule pendant que l'application se construit, selon la méthode par lots décrite dans [le guide sur la livraison](" + L.livrer + ").",
      ] },
      { heading: 'La bascule en un week-end', body: [
        "La bascule est le moment où l'entreprise change de système ; elle tient en un week-end parce que tout ce qui pouvait échouer a déjà échoué trois fois.",
      ], visual: 'bascule', after: [
        "**Vendredi 18 h**, l'ancien système passe en lecture seule : on peut consulter, on ne saisit plus ; c'est ce qui garantit que les chiffres comparés le lendemain ne bougent pas. **Samedi**, le dernier chargement, identique au troisième chargement à blanc, puis le rapprochement. **Samedi soir**, quatre chiffres sont lus des deux côtés : le nombre de clients actifs, les factures ouvertes une par une, le solde total des clients au dinar près, les références en stock avec leurs quantités par dépôt. Ils sont égaux, ou l'on n'ouvre pas lundi. Les doublons fusionnés ne sont pas un écart : ils sont listés, avec les lignes d'origine.",
        "**Lundi 8 h**, la nouvelle application ouvre, et l'ancien reste consultable. **Jusqu'à lundi midi**, le retour arrière est possible : l'ancien système repasse en écriture et la matinée est ressaisie ; passé cette heure, les nouvelles saisies sont trop nombreuses et l'on corrige en avant. Cette heure limite est écrite avant le week-end, pas décidée dans l'urgence. **La semaine suivante**, les équipes signalent les écarts qu'elles voient, un client introuvable, un solde contesté, et chacun est tracé jusqu'à sa ligne d'origine ; la sauvegarde datée de l'ancien système est gardée, comme [le guide sur l'hébergement](" + L.heberger + ") le prévoit.",
      ] },
      { heading: "Six sources, comment on les récupère et ce qu'on contrôle", body: [
        "Six sources que nous rencontrons, et pour chacune la façon de la lire et ce qu'on y contrôle.",
      ], visual: 'sources', after: [
        "**Les fichiers Excel** se lisent feuille par feuille, en écartant les cellules fusionnées, les totaux en bas de colonne et les lignes de titre qui se font passer pour des données ; on y contrôle les dates en nombres, les identifiants longs, les zéros de tête et l'encodage de l'arabe. **L'ancien logiciel avec une base** se lit par export ou en lecture seule, sans jamais y écrire ; on y trouve des champs détournés de leur usage, le champ « fax » qui contient le nom du commercial, et des codes sans libellé. **Le logiciel sans export** se reprend par ses impressions en PDF, relues comme dans [le guide sur la lecture de documents](" + L.lire + "), avec le total de chaque état comme chiffre de contrôle.",
        "**Le papier et les carnets** sont photographiés et lus, ou saisis à la main, avec une double saisie sur un échantillon et des soldes confirmés auprès des clients concernés. **Plusieurs fichiers par agence** demandent de construire une clé commune, téléphone et identifiant, parce que le même client y figure sous trois noms. **Les messages et les photos** ne se reprennent que pour ce qui a encore un effet, un solde ouvert, une commande non livrée. Et tout ne se reprend pas : dix ans de commandes livrées et payées restent consultables dans une archive ; ce qui doit entrer propre, c'est ce qui vit encore, clients, produits, soldes, stock, commandes ouvertes.",
      ] },
      { heading: 'Six pièges de la reprise', body: [
        "Six pièges que nous voyons sur les reprises que nous rattrapons, et ce que la méthode fait contre chacun.",
      ], visual: 'pieges', after: [
        "**Le doublon** : le même client existe trois fois et son solde est réparti ; clé sur le téléphone et l'identifiant, noms comparés avec tolérance, fusion par règle, liste validée par le gérant. **La date devenue nombre** : conversion depuis le numéro de série du tableur, et les dates dont le jour et le mois peuvent s'inverser listées plutôt que devinées. **L'identifiant abîmé** : détecté par sa longueur et ses zéros de fin, redemandé au client, jamais reconstruit.",
        "**Le solde qui ne tombe pas juste** : le total des soldes clients diffère de celui de la comptabilité avant même la reprise ; l'écart est expliqué ligne par ligne, ou la bascule attend, parce qu'un écart importé devient un écart inexplicable. **L'arabe illisible** : les noms deviennent des points d'interrogation ; l'encodage est détecté fichier par fichier, converti, et vérifié à l'œil sur un échantillon. **La bascule sans retour** : un chiffre est faux lundi et l'ancien système a été modifié entre-temps ; lecture seule, sauvegarde datée, retour arrière écrit avec son heure limite. Les trois premiers viennent du tableur lui-même ; les trois derniers, de la méthode ; aucun ne se voit avant le premier chargement à blanc.",
      ] },
      { heading: 'Vu ailleurs : les limites d\'Excel, PostgreSQL, et ce qui se transpose', body: [
        "Deux sources disent l'essentiel. Les spécifications d'Excel disent qu'un nombre n'a que quinze chiffres de précision et que les dates sont des nombres comptés depuis 1900, avec une année bissextile de trop ; ce qui se transpose, c'est que trois des six pièges ne sont pas des erreurs de saisie mais le comportement normal du tableur, et qu'ils se traitent par des règles, pas en reprochant le fichier à l'équipe. La documentation de PostgreSQL dit que le chargement en masse est rapide et qu'une transaction unique annule tout en cas d'échec ; ce qui se transpose, c'est qu'on peut charger trois fois sans crainte, et qu'un chargement à moitié fait n'existe pas.",
        "Ce que ces sources ne disent pas : quelles sources vous avez, laquelle fait foi, combien de doublons, et quels chiffres votre comptable veut voir égaux le samedi soir ; la première semaine du projet y répond, avec les fichiers ouverts sur la table.",
      ] },
      { heading: "Les règles d'une reprise qui ne perd rien", body: [
        "Six règles, écrites la première semaine. **La reprise commence avec le projet**, pas à la fin. **Une table de correspondance signée** : chaque champ a une source et une règle, ou il est laissé derrière par écrit. **On ne devine jamais** : ce qui est abîmé est listé et redemandé. **Trois chargements à blanc**, chronométrés, avec rapport des rejets. **Le rapprochement fait foi** : des totaux égaux des deux côtés, choisis avec le comptable, ou la bascule attend. **Un retour arrière écrit**, avec son heure limite, et l'ancien système en lecture seule.",
        "Une septième règle porte sur le devis : « migration des données » n'est pas une exigence, c'est une ligne ; l'exigence s'écrit « inventaire des sources, table de correspondance validée, règles de nettoyage et de fusion des doublons, liste des valeurs à redemander, trois chargements à blanc avec rapport des rejets, rapprochement sur tels totaux, bascule en un week-end avec déroulé et retour arrière, archive consultable de l'historique non repris », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui chiffre « un import Excel » a chiffré le chargement, pas la reprise.",
      ] },
      { heading: "Six entreprises, et ce qu'on reprend d'abord", body: [
        "Six entreprises que nous accompagnons souvent, et pour chacune ce qui se reprend en premier.",
      ], list: [
        "**Le grossiste et le distributeur**, avant d'ouvrir le portail décrit dans [le guide dédié](" + L.portail + "). Clients avec leur solde et leur plafond, catalogue avec les prix par client, stock par dépôt ; l'historique des commandes en archive.",
        "**La clinique et le cabinet**, décrits dans [le guide sur le cabinet](" + L.dentaire + "). Patients dédoublonnés sur le téléphone et la date de naissance, rendez-vous à venir, plans de traitement ouverts ; les dossiers anciens scannés et rattachés.",
        "**L'agence immobilière et l'espace propriétaire**, décrits dans [le guide dédié](" + L.appart + "). Biens, propriétaires, baux en cours, loyers impayés ; les quittances passées en archive.",
        "**L'école privée.** Élèves et parents avec leurs téléphones normalisés, inscriptions de l'année, échéances restant dues.",
        "**L'éditeur de SaaS**, décrit dans [le guide sur le multi-tenant](" + L.saas + "). Un outil d'import par client, avec la même table de correspondance et le même rapport des rejets, parce que chaque nouveau client arrive avec ses fichiers.",
        "**L'entreprise reprise depuis la France.** Tout ce qui tient dans la tête et les classeurs du gérant précédent : la reprise est aussi le moment où l'on découvre ce que l'entreprise sait d'elle-même, et le tableau de bord décrit dans [le guide dédié](" + L.dashboard + ") en sort.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une reprise complète en six semaines, menée pendant que l'application se construit.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** fait l'inventaire et la correspondance : toutes les sources, ce qui fait foi, la table colonne par colonne, ce qui est repris, archivé ou laissé ; signés. **Les semaines 1 à 3** écrivent le nettoyage : règles de normalisation, détection des doublons, et la liste des valeurs à redemander envoyée aux équipes dès qu'elle existe. **La semaine 3 à 4** fait le premier chargement à blanc, avec son rapport des rejets et un premier rapprochement presque toujours faux, ce qui est son rôle.",
        "**La semaine 4 à 5** fait le deuxième et le troisième : règles corrigées, doublons validés un par un par le gérant quand la règle hésite, durée mesurée, rapprochement juste. **La semaine 5 à 6** est la bascule et le suivi : le week-end, l'ouverture, et une semaine à tracer chaque écart signalé jusqu'à sa ligne d'origine. Les noms et produits nettoyés servent aussi à la recherche, dont la normalisation est décrite dans [le guide sur la recherche](" + L.recherche + ").",
      ] },
      { heading: 'Ce qui fait échouer une reprise', body: [
        "Les reprises que nous rattrapons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**L'import la veille.** Découvert en dernière semaine, fait une seule fois, un vendredi soir.",
        "**Tout reprendre.** Dix ans d'historique importés avec leurs erreurs, au lieu de ce qui vit encore.",
        "**Deviner.** Un identifiant complété, une date supposée ; l'erreur se découvre au premier virement.",
        "**Pas de règle sur les doublons.** Fusionnés à la main, différemment par chaque personne.",
        "**Pas de rapprochement.** « Ça a l'air bon » ; le solde total n'a jamais été comparé.",
        "**L'ancien système encore ouvert.** Des saisies des deux côtés pendant la bascule.",
        "**Pas de retour arrière.** Lundi matin, il n'y a plus de chemin pour revenir.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de comptables et de fondateurs.",
      ], faq: [
        { q: 'Peut-on récupérer nos fichiers Excel dans la nouvelle application ?', a: "Oui, et c'est un chantier à part entière : inventaire des fichiers, table de correspondance colonne par colonne, nettoyage, trois chargements à blanc et un rapprochement des totaux. On reprend ce qui vit encore, clients, produits, soldes, stock, commandes ouvertes ; l'historique ancien reste consultable dans une archive plutôt que d'être importé avec ses erreurs." },
        { q: 'Que deviennent les doublons ?', a: "Ils sont détectés par une clé, le téléphone et l'identifiant, puis par une comparaison tolérante des noms, et fusionnés par une règle écrite ; quand la règle hésite, la liste est validée par le gérant. Les soldes s'additionnent, les lignes d'origine restent attachées à la fiche, et chaque fusion peut être défaite." },
        { q: 'Comment prouve-t-on que rien n’est perdu ?', a: "Par un rapprochement lu le samedi de la bascule : des totaux choisis avec votre comptable, nombre de clients actifs, factures ouvertes une par une, solde total au dinar près, stock par dépôt, égaux dans l'ancien système et dans le nouveau. Si un chiffre diffère, l'ouverture est repoussée ; ce n'est pas une impression, c'est une égalité." },
        { q: 'Pourquoi nos dates et nos numéros sont-ils faux dans l’export ?', a: "Parce que le tableur stocke les dates comme des nombres comptés depuis 1900 et ne garde que quinze chiffres de précision pour un nombre : 45123 est une date, et un identifiant de vingt chiffres saisi comme un nombre a perdu ses derniers chiffres. Les dates se convertissent avec la règle du tableur ; un chiffre perdu ne se retrouve pas, il se redemande." },
        { q: 'L’activité s’arrête-t-elle pendant la bascule ?', a: "Non, si elle est préparée : l'ancien système passe en lecture seule le vendredi soir, le chargement et le rapprochement se font le week-end, et la nouvelle application ouvre lundi matin. Un retour arrière reste possible jusqu'à une heure limite écrite à l'avance, et l'ancien système reste consultable ensuite." },
        { q: 'Combien de temps pour reprendre les données ?', a: "Six semaines, en parallèle de la construction de l'application : une pour l'inventaire et la correspondance, deux pour le nettoyage, deux pour les trois chargements à blanc, une pour la bascule et le suivi. La liste des valeurs à redemander part aux équipes dès la deuxième semaine, parce que c'est elle qui prend le plus de temps calendaire." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Aucune règle ne reconstruit un chiffre perdu : ce que le tableur a abîmé se redemande, il ne se devine pas." },
      { after: 4, text: "La preuve que rien n'est perdu, ce sont quatre totaux lus le samedi soir, égaux des deux côtés." },
    ],
    cta: { eyebrow: 'Envoyez-nous un de vos fichiers, tel qu’il est', title: "Gérant en Algérie ou fondateur en France : nous reprenons vos données Excel et votre ancien logiciel dans la nouvelle application, nettoyées, rapprochées, avec une bascule en un week-end et un retour arrière écrit", body: "Symloop construit des applications, des plateformes et des agents IA pour les entreprises en Algérie et les fondateurs installés en France, et reprend ce qui existe déjà : inventaire des sources, table de correspondance signée, règles de nettoyage et de fusion des doublons, liste des valeurs à redemander, trois chargements à blanc avec rapport des rejets, rapprochement sur les totaux choisis avec votre comptable, bascule répétée, archive consultable de l'historique. Scripts de reprise dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.integrer, kind: '2027', name: 'Intégrer le logiciel existant par API' },
      { href: L.lire, kind: '2027', name: 'Lire les factures et les pièces par IA' },
      { href: L.livrer, kind: '2027', name: 'Livrer une application sans la casser' },
      { href: L.cdc, kind: '2027', name: 'Cahier des charges : comparer trois devis' },
    ] },
  },
  en: {
    kind: 'Data migration · Excel · Switch-over · 2027', title: 'Bringing your Excel data and old software into a new application in Algeria in 2027: what is retrieved, how it is cleaned, how you prove nothing is lost, and how you switch over in one weekend',
    dek: '“And our ten years of Excel files?” The question comes at the last meeting, when the app is almost ready, and the answer “we’ll do an import” hides three weeks of work and the risk of opening on a Monday with wrong balances. This guide describes how the data of a spreadsheet or an old system gets into the new application: the inventory of sources, the column-by-column mapping table, cleaning and merging duplicates, three dry-run loads, reconciling totals to the unit and to the dinar, and the switch-over in one weekend with a written rollback.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Data migration', 'Excel', 'Migration', 'Switch-over', 'Algeria 2027'],
    intro: [
      '**Short answer.** Migrating your data is not an import the day before launch: it is a six-week workstream run **alongside** the building of the application. It starts with an **inventory** of sources and of what prevails, then a signed **mapping table**: where each field comes from, by which rule, and what is left behind. **Cleaning** takes longer than everything else: names, phones, dates and amounts normalised, duplicates merged by rule, and the values the spreadsheet damaged, a date turned number, a twenty-digit identifier truncated to fifteen, **asked again and never guessed**. Everything is then **dry-run loaded three times** into a copy, with a rejection report. The proof that nothing is lost is a **reconciliation**: number of customers, open invoices, total balance, stock, equal in the old and the new. The **switch-over** happens in one weekend, old system read-only, with a dated rollback. Only what is still alive is migrated; the rest is archived.',
      'This guide is for the manager in Algeria whose business lives in Excel workbooks and a ten-year-old system, the founder settled in France taking over a family business and its files, and anyone comparing quotes where “data migration” is one line. It does not cover the permanent connection between two systems, described in [the integration guide](' + L.integrer + '); it describes the passage, done once, from the old to the new.',
    ],
    sections: [
      { heading: 'What the figures say', body: [
        'A spreadsheet stores what is typed, and it has written limits. Microsoft’s Excel specifications page gives a sheet of **1,048,576 rows by 16,384 columns**, a **numeric precision of fifteen digits**, and dates calculated from **1 January 1900**. Those three lines explain three migration failures. Dates are numbers: 45123 is 16 July 2023, and a column exported without its format arrives as a series of numbers. An identifier longer than fifteen digits entered as a number loses its last digits, replaced by zeros: that is the case of a twenty-digit bank identifier, and no rule gets them back. And a file exceeding a million rows was split into several, somewhere.',
        'Dates hold another documented surprise. Microsoft explains that Excel **wrongly assumes 1900 is a leap year**, for compatibility with the Lotus 1-2-3 spreadsheet, and that fixing this would shift almost every date in existing workbooks by one day; there is also a second date system starting in 1904. What this imposes: date conversion uses the spreadsheet’s rule, not a naive subtraction, and is checked on known dates, the company’s creation date, the first invoice, before being applied to a hundred thousand rows.',
        'The load itself is the easy part. The PostgreSQL documentation recommends loading rows with the bulk copy command rather than a series of inserts, because it “incurs significantly less overhead for large data loads”, creating indexes after the load, and running table analysis afterwards; a load in a single transaction has another advantage, written on the same page: if one row fails, everything is rolled back, and you are not “stuck with partially loaded data”. What this imposes: a hundred thousand invoices load in minutes, and all the time is elsewhere, in cleaning and reconciliation. What we did not find: a statistic on the state of Algerian companies’ files; what we see is that a ten-year customer file usually contains a few per cent of duplicates, and we say so as an observation.',
      ] },
      { heading: 'Two Excel rows become one customer record', body: [
        'Migration is not understood on a database diagram but on two rows of a real file.',
      ], visual: 'nettoyage', after: [
        '**The name**: “sarl el baraka” with a trailing space and “EL-BARAKA (SARL)” are the same customer; case, spaces and hyphens are normalised, and the legal form goes into its own field. **The phone**: two numbers in the same cell, one with the zero, one without; one number per field, in international format with the +213 code, the one that will serve for the login described in [the OTP guide](' + L.otp + '). **The date**: 45123 in one row and 16/07/23 in the other are the same date; the first is converted from the spreadsheet serial number, the second read with the format of the workstation that entered it, and when day and month can swap, the row is listed.',
        '**The bank identifier**: twenty digits entered as a number, shown in scientific notation, the last five lost; the second row has it as text but truncated; it is flagged “to ask the customer again” and the record goes in without it. No rule rebuilds a lost digit, and an app that guesses a bank identifier is an app that sends a transfer to the wrong account. **The town**: “blida” and “Blida ctr” are attached to wilaya code 09. **The merge**: the two rows share the same phone and a close name; they become one record, their balances add up, and the two original rows stay attached to the record so the merge can be undone.',
      ] },
      { heading: 'Data migration, in six steps', body: [
        'Behind those two rows, six steps, and the third takes longer than the other five.',
      ], visual: 'etapes', after: [
        '**The inventory** lists every source, who keeps it, since when, and above all what prevails when two sources disagree: the accountant’s file or the sales rep’s. **The mapping** is a table, column by column: where each field of the new application comes from, by which transformation rule, and what is left behind; it is signed by the manager, and it also serves the developers, who discover in it the fields the business really uses. **The cleaning** applies the rules, detects duplicates, and produces the list of what cannot be repaired and must be asked again; that list goes to the teams from week two, because calling two hundred customers back takes time.',
        '**The dry-run load** loads everything into a copy of the new application, times the operation, and produces a report: so many rows in, so many rejected, and why. It is done three times: the first reveals forgotten rules, the second fixes them, the third is the dress rehearsal of the switch-over. **The reconciliation** compares totals between old and new. **The switch-over** follows a written hour-by-hour run sheet, rehearsed, with a rollback. All of it runs while the application is being built, with the batch method described in [the delivery guide](' + L.livrer + ').',
      ] },
      { heading: 'The switch-over in one weekend', body: [
        'The switch-over is the moment the company changes systems; it fits in a weekend because everything that could fail has already failed three times.',
      ], visual: 'bascule', after: [
        '**Friday 6 pm**, the old system becomes read-only: you can consult, you no longer enter; that is what guarantees the figures compared the next day do not move. **Saturday**, the last load, identical to the third dry run, then the reconciliation. **Saturday evening**, four figures are read on both sides: the number of active customers, open invoices one by one, total customer balance to the dinar, stock references with their quantities per depot. They are equal, or we do not open on Monday. Merged duplicates are not a gap: they are listed, with the original rows.',
        '**Monday 8 am**, the new application opens, and the old one stays consultable. **Until Monday noon**, rollback is possible: the old system goes back to write mode and the morning is re-entered; past that hour, new entries are too many and corrections go forward. That deadline is written before the weekend, not decided in a rush. **The following week**, teams report the gaps they see, a customer not found, a disputed balance, and each is traced to its original row; the dated backup of the old system is kept, as [the hosting guide](' + L.heberger + ') provides.',
      ] },
      { heading: 'Six sources, how they are retrieved and what is checked', body: [
        'Six sources we meet, and for each the way to read it and what is checked.',
      ], visual: 'sources', after: [
        '**Excel files** are read sheet by sheet, discarding merged cells, column-bottom totals and title rows posing as data; checks cover dates as numbers, long identifiers, leading zeros and Arabic encoding. **Old software with a database** is read by export or read-only access, never writing to it; it holds fields diverted from their use, the “fax” field containing the sales rep’s name, and codes with no label. **Software with no export** is migrated through its PDF printouts, read back as in [the document reading guide](' + L.lire + '), with each report’s total as the control figure.',
        '**Paper and notebooks** are photographed and read, or entered by hand, with double entry on a sample and balances confirmed with the customers concerned. **Several files per branch** require building a common key, phone and identifier, because the same customer appears under three names. **Messages and photos** are migrated only for what still has an effect, an open balance, an undelivered order. And not everything is migrated: ten years of delivered and paid orders stay searchable in an archive; what must enter clean is what is still alive, customers, products, balances, stock, open orders.',
      ] },
      { heading: 'Six migration traps', body: [
        'Six traps we see on the migrations we rescue, and what the method does against each.',
      ], visual: 'pieges', after: [
        '**The duplicate**: the same customer exists three times and their balance is split; key on phone and identifier, names compared with tolerance, merge by rule, list validated by the manager. **The date turned number**: conversion from the spreadsheet serial number, and dates whose day and month can swap are listed rather than guessed. **The damaged identifier**: detected by its length and trailing zeros, asked from the customer again, never rebuilt.',
        '**The balance that does not add up**: the total of customer balances differs from accounting even before migration; the gap is explained line by line, or the switch-over waits, because an imported gap becomes an unexplainable gap. **Unreadable Arabic**: names turn into question marks; encoding is detected file by file, converted, and checked by eye on a sample. **The switch with no return**: a figure is wrong on Monday and the old system was changed in the meantime; read-only, dated backup, rollback written with its deadline. The first three come from the spreadsheet itself; the last three, from the method; none shows before the first dry-run load.',
      ] },
      { heading: 'Seen elsewhere: Excel’s limits, PostgreSQL, and what transposes', body: [
        'Two sources say the essentials. Excel’s specifications say a number has only fifteen digits of precision and dates are numbers counted from 1900, with one leap year too many; what transposes is that three of the six traps are not entry errors but the spreadsheet’s normal behaviour, and they are handled by rules, not by blaming the file on the team. The PostgreSQL documentation says bulk loading is fast and a single transaction rolls everything back on failure; what transposes is that you can load three times without fear, and that a half-done load does not exist.',
        'What these sources do not say: which sources you have, which prevails, how many duplicates, and which figures your accountant wants to see equal on Saturday evening; the project’s first week answers that, with the files open on the table.',
      ] },
      { heading: 'The rules of a migration that loses nothing', body: [
        'Six rules, written in the first week. **Migration starts with the project**, not at the end. **A signed mapping table**: every field has a source and a rule, or is left behind in writing. **We never guess**: what is damaged is listed and asked again. **Three dry-run loads**, timed, with a rejection report. **The reconciliation prevails**: equal totals on both sides, chosen with the accountant, or the switch-over waits. **A written rollback**, with its deadline, and the old system read-only.',
        'A seventh rule concerns the quote: “data migration” is not a requirement, it is a line; the requirement reads “inventory of sources, validated mapping table, cleaning and duplicate-merging rules, list of values to ask again, three dry-run loads with rejection report, reconciliation on such totals, switch-over in one weekend with run sheet and rollback, searchable archive of the history not migrated”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that prices “an Excel import” has priced the load, not the migration.',
      ] },
      { heading: 'Six companies, and what is migrated first', body: [
        'Six companies we often support, and for each what is migrated first.',
      ], list: [
        '**The wholesaler and the distributor**, before opening the portal described in [the dedicated guide](' + L.portail + '). Customers with their balance and limit, catalogue with per-customer prices, stock per depot; order history in the archive.',
        '**The clinic and the practice**, described in [the practice guide](' + L.dentaire + '). Patients deduplicated on phone and date of birth, upcoming appointments, open treatment plans; old files scanned and attached.',
        '**The real-estate agency and the owner’s space**, described in [the dedicated guide](' + L.appart + '). Properties, owners, current leases, unpaid rents; past receipts in the archive.',
        '**The private school.** Pupils and parents with normalised phones, this year’s enrolments, instalments still due.',
        '**The SaaS vendor**, described in [the multi-tenant guide](' + L.saas + '). An import tool per customer, with the same mapping table and the same rejection report, because every new customer arrives with their files.',
        '**The business taken over from France.** Everything that lives in the previous manager’s head and workbooks: migration is also when you discover what the company knows about itself, and the dashboard described in [the dedicated guide](' + L.dashboard + ') comes out of it.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of a complete migration in six weeks, run while the application is being built.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** does the inventory and mapping: all sources, what prevails, the table column by column, what is migrated, archived or left; signed. **Weeks 1 to 3** write the cleaning: normalisation rules, duplicate detection, and the list of values to ask again sent to the teams as soon as it exists. **Week 3 to 4** does the first dry-run load, with its rejection report and a first reconciliation that is almost always wrong, which is its job.',
        '**Week 4 to 5** does the second and third: rules corrected, duplicates validated one by one by the manager where the rule hesitates, duration measured, reconciliation right. **Week 5 to 6** is the switch-over and follow-up: the weekend, the opening, and a week tracing every reported gap to its original row. Cleaned names and products also serve search, whose normalisation is described in [the search guide](' + L.recherche + ').',
      ] },
      { heading: 'What makes a migration fail', body: [
        'The migrations we rescue almost always failed for one of these reasons.',
      ], list: [
        '**The import the day before.** Discovered in the last week, done once, on a Friday evening.',
        '**Migrating everything.** Ten years of history imported with its errors, instead of what is still alive.',
        '**Guessing.** An identifier completed, a date assumed; the error is found at the first transfer.',
        '**No rule on duplicates.** Merged by hand, differently by each person.',
        '**No reconciliation.** “It looks fine”; the total balance was never compared.',
        '**The old system still open.** Entries on both sides during the switch-over.',
        '**No rollback.** Monday morning, there is no way back.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, accountants and founders.',
      ], faq: [
        { q: 'Can our Excel files be brought into the new application?', a: 'Yes, and it is a workstream of its own: inventory of files, column-by-column mapping table, cleaning, three dry-run loads and a reconciliation of totals. What is still alive is migrated, customers, products, balances, stock, open orders; old history stays searchable in an archive rather than being imported with its errors.' },
        { q: 'What happens to duplicates?', a: 'They are detected by a key, phone and identifier, then by a tolerant comparison of names, and merged by a written rule; where the rule hesitates, the list is validated by the manager. Balances add up, the original rows stay attached to the record, and every merge can be undone.' },
        { q: 'How do you prove nothing is lost?', a: 'By a reconciliation read on the switch-over Saturday: totals chosen with your accountant, number of active customers, open invoices one by one, total balance to the dinar, stock per depot, equal in the old system and the new. If one figure differs, opening is postponed; it is not an impression, it is an equality.' },
        { q: 'Why are our dates and numbers wrong in the export?', a: 'Because the spreadsheet stores dates as numbers counted from 1900 and keeps only fifteen digits of precision for a number: 45123 is a date, and a twenty-digit identifier entered as a number has lost its last digits. Dates are converted with the spreadsheet’s rule; a lost digit is not found again, it is asked again.' },
        { q: 'Does the business stop during the switch-over?', a: 'No, if it is prepared: the old system becomes read-only on Friday evening, loading and reconciliation happen over the weekend, and the new application opens Monday morning. A rollback stays possible until a deadline written in advance, and the old system stays consultable afterwards.' },
        { q: 'How long to migrate the data?', a: 'Six weeks, alongside the building of the application: one for inventory and mapping, two for cleaning, two for the three dry-run loads, one for the switch-over and follow-up. The list of values to ask again goes to the teams from week two, because it is what takes the most calendar time.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'No rule rebuilds a lost digit: what the spreadsheet damaged is asked again, not guessed.' },
      { after: 4, text: 'The proof that nothing is lost is four totals read on Saturday evening, equal on both sides.' },
    ],
    cta: { eyebrow: 'Send us one of your files, as it is', title: 'Manager in Algeria or founder in France: we bring your Excel data and your old software into the new application, cleaned, reconciled, with a switch-over in one weekend and a written rollback', body: 'Symloop builds apps, platforms and AI agents for companies in Algeria and founders settled in France, and takes over what already exists: inventory of sources, signed mapping table, cleaning and duplicate-merging rules, list of values to ask again, three dry-run loads with rejection report, reconciliation on totals chosen with your accountant, rehearsed switch-over, searchable archive of the history. Migration scripts in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.integrer, kind: '2027', name: 'Integrating existing software by API' },
      { href: L.lire, kind: '2027', name: 'Reading invoices and documents with AI' },
      { href: L.livrer, kind: '2027', name: 'Delivering an app without breaking it' },
      { href: L.cdc, kind: '2027', name: 'Specification: comparing three quotes' },
    ] },
  },
  ar: {
    kind: 'استرجاع البيانات · Excel · التحويل · 2027', title: 'نقل بيانات Excel والبرنامج القديم إلى تطبيق جديد في الجزائر سنة 2027: ما الذي نسترجعه، كيف ننظّفه، كيف نثبت أن لا شيء ضاع، وكيف نحوّل في عطلة نهاية أسبوع',
    dek: '«وعشر سنوات من ملفات Excel؟» يأتي السؤال في آخر اجتماع، والتطبيق شبه جاهز، والجواب «سنقوم باستيراد» يخفي ثلاثة أسابيع من العمل وخطر الفتح يوم اثنين بأرصدة خاطئة. يصف هذا الدليل كيف تدخل بيانات جدول أو برنامج قديم إلى التطبيق الجديد: جرد المصادر، جدول المطابقة عموداً عموداً، التنظيف ودمج المكررات، ثلاثة تحميلات تجريبية، مطابقة المجاميع بالوحدة وبالدينار، والتحويل في عطلة نهاية أسبوع بتراجع مكتوب.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['استرجاع البيانات', 'Excel', 'الترحيل', 'التحويل', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** استرجاع البيانات ليس استيراداً عشية الإطلاق: بل ورشة من ستة أسابيع تُدار **بالتوازي** مع بناء التطبيق. تبدأ بـ **جرد** للمصادر وما هو المرجع، ثم **جدول مطابقة** موقَّع: من أين يأتي كل حقل، بأي قاعدة، وما يُترك خلفنا. و**التنظيف** يأخذ وقتاً أكثر من كل الباقي: أسماء وهواتف وتواريخ ومبالغ تُطبَّع، مكررات تُدمج بقاعدة، والقيم التي أتلفها الجدول، تاريخ صار رقماً ومعرّف من عشرين رقماً قُطع إلى خمسة عشر، **تُطلب من جديد ولا تُخمَّن أبداً**. ثم يُحمَّل كل شيء **تجريبياً ثلاث مرات** في نسخة، بتقرير للمرفوضات. ودليل أن لا شيء ضاع **مطابقة**: عدد الزبائن، الفواتير المفتوحة، الرصيد الإجمالي، المخزون، متساوية في القديم والجديد. و**التحويل** يتم في عطلة نهاية أسبوع، والنظام القديم للقراءة فقط، بتراجع مؤرَّخ. ولا يُسترجع إلا ما زال حياً؛ والباقي يُؤرشَف.',
      'هذا الدليل موجّه إلى المسيّر في الجزائر الذي يعيش نشاطه في مصنفات Excel وبرنامج عمره عشر سنوات، وإلى المؤسس المقيم في فرنسا الذي يستلم مؤسسة عائلية وملفاتها، وإلى من يقارن عروضاً يكون فيها «ترحيل البيانات» سطراً واحداً. لا يتناول الربط الدائم بين برنامجين، الموصوف في [دليل الدمج](' + L.integrer + ')؛ بل يصف العبور، مرة واحدة، من القديم إلى الجديد.',
    ],
    sections: [
      { heading: 'ما تقوله الأرقام', body: [
        'الجدول يخزّن ما يُكتب فيه، وله حدود مكتوبة. صفحة مواصفات Excel التي تنشرها Microsoft تعطي ورقة من **1 048 576 سطراً على 16 384 عموداً**، و**دقة رقمية من خمسة عشر رقماً**، وتواريخ تُحسب من **1 يناير 1900**. هذه الأسطر الثلاثة تفسّر ثلاثة أعطال في الاسترجاع. التواريخ أرقام: 45123 هو 16 يوليو 2023، وعمود يُصدَّر بلا تنسيقه يصل سلسلة أرقام. ومعرّف أطول من خمسة عشر رقماً يُدخل رقماً يفقد أرقامه الأخيرة وتحل محلها أصفار: هذا حال RIB من عشرين رقماً، ولا قاعدة تستعيدها. وملف يتجاوز مليون سطر قُسم إلى عدة ملفات في مكان ما.',
        'وللتواريخ مفاجأة أخرى موثَّقة. تشرح Microsoft أن Excel **يعتبر خطأً سنة 1900 كبيسة**، للتوافق مع جدول Lotus 1-2-3، وأن تصحيح ذلك سيزيح كل تواريخ المصنفات الموجودة تقريباً بيوم واحد؛ ويوجد أيضاً نظام تواريخ ثانٍ يبدأ سنة 1904. وما يفرضه ذلك: تحويل التواريخ يتم بقاعدة الجدول لا بطرح بسيط، ويُتحقَّق منه على تواريخ معروفة، تاريخ إنشاء الشركة وأول فاتورة، قبل تطبيقه على مائة ألف سطر.',
        'والتحميل نفسه هو الجزء السهل. توصي وثائق PostgreSQL بتحميل السطور بأمر النسخ بالجملة بدل سلسلة إدراجات، لأن له «كلفة إضافية أقل بوضوح في التحميلات الكبيرة»، وبإنشاء الفهارس بعد التحميل، وتشغيل تحليل الجداول بعده؛ ولتحميل في معاملة واحدة ميزة أخرى مكتوبة في الصفحة نفسها: إن فشل سطر أُلغي كل شيء، فلا «نعلق ببيانات محمَّلة جزئياً». وما يفرضه ذلك: مائة ألف فاتورة تُحمَّل في دقائق، وكل الوقت في مكان آخر، في التنظيف والمطابقة. وما لم نجده: إحصائية عن حال ملفات الشركات الجزائرية؛ وما نراه أن ملف زبائن عمره عشر سنوات يحتوي عادةً بضعة بالمائة من المكررات، ونقوله ملاحظةً.',
      ] },
      { heading: 'سطران من Excel يصيران بطاقة زبون', body: [
        'الاسترجاع لا يُفهم على مخطط قواعد بيانات بل على سطرين من ملف حقيقي.',
      ], visual: 'nettoyage', after: [
        '**الاسم**: «sarl el baraka» بمسافة في آخره و«EL-BARAKA (SARL)» هما الزبون نفسه؛ حالة الأحرف والمسافات والشرطات تُطبَّع، والشكل القانوني يذهب إلى حقله. **الهاتف**: رقمان في الخلية نفسها، أحدهما بالصفر والآخر بدونه؛ رقم واحد لكل حقل، بالصيغة الدولية برمز 213+، وهو الذي سيخدم الدخول الموصوف في [دليل OTP](' + L.otp + '). **التاريخ**: 45123 في سطر و16/07/23 في الآخر هما التاريخ نفسه؛ الأول يُحوَّل من الرقم التسلسلي للجدول، والثاني يُقرأ بتنسيق الحاسوب الذي أدخله، وحين يمكن أن ينقلب اليوم والشهر يُسرد السطر.',
        '**المعرّف البنكي**: عشرون رقماً أُدخلت رقماً، معروضة بالترميز العلمي، وضاعت الخمسة الأخيرة؛ والسطر الثاني يحمله نصاً لكنه مبتور؛ فيُعلَّم «يُطلب من الزبون من جديد» وتدخل البطاقة بدونه. لا قاعدة تعيد بناء رقم ضائع، وتطبيق يخمّن RIB تطبيق يرسل تحويلاً إلى الحساب الخطأ. **المدينة**: «blida» و«Blida ctr» تُلحقان برمز الولاية 09. **الدمج**: السطران لهما الهاتف نفسه واسم متقارب؛ فيصيران بطاقة واحدة، ويُجمع رصيداهما، ويبقى السطران الأصليان ملحقين بالبطاقة ليمكن فكّ الدمج.',
      ] },
      { heading: 'استرجاع البيانات، في ست خطوات', body: [
        'خلف هذين السطرين ست خطوات، والثالثة تأخذ وقتاً أكثر من الخمس الأخرى.',
      ], visual: 'etapes', after: [
        '**الجرد** يسرد كل مصدر ومن يمسكه ومنذ متى، وخصوصاً ما المرجع حين يتناقض مصدران: ملف المحاسب أم ملف المندوب. **المطابقة** جدول، عموداً عموداً: من أين يأتي كل حقل في التطبيق الجديد، بأي قاعدة تحويل، وما يُترك خلفنا؛ يوقّعه المسيّر، ويخدم المطورين أيضاً، الذين يكتشفون فيه الحقول التي يستعملها النشاط فعلاً. **التنظيف** يطبّق القواعد ويكشف المكررات وينتج قائمة ما لا يُصلَح ويجب طلبه من جديد؛ وتذهب هذه القائمة إلى الفرق منذ الأسبوع الثاني، لأن معاودة الاتصال بمائتي زبون تأخذ وقتاً.',
        '**التحميل التجريبي** يحمّل كل شيء في نسخة من التطبيق الجديد، ويوقّت العملية، وينتج تقريراً: كذا سطراً دخل وكذا رُفض ولماذا. ويُنجَز ثلاث مرات: الأول يكشف القواعد المنسية، والثاني يصححها، والثالث هو التمرين العام للتحويل. **المطابقة الحسابية** تقارن مجاميع بين القديم والجديد. **التحويل** يتبع مساراً مكتوباً ساعةً بساعة، مجرَّباً، مع تراجع. وكل ذلك يجري والتطبيق يُبنى، بمنهج الدفعات الموصوف في [دليل التسليم](' + L.livrer + ').',
      ] },
      { heading: 'التحويل في عطلة نهاية أسبوع', body: [
        'التحويل هو اللحظة التي تغيّر فيها الشركة نظامها؛ ويتسع في عطلة لأن كل ما كان يمكن أن يفشل فشل ثلاث مرات من قبل.',
      ], visual: 'bascule', after: [
        '**الجمعة السادسة مساءً** يصير النظام القديم للقراءة فقط: يُستشار ولا يُدخل فيه؛ وهذا ما يضمن ألا تتحرك الأرقام التي تُقارَن في الغد. **السبت** آخر تحميل، مطابق للتحميل التجريبي الثالث، ثم المطابقة. **مساء السبت** تُقرأ أربعة أرقام من الجهتين: عدد الزبائن النشطين، الفواتير المفتوحة واحدة واحدة، الرصيد الإجمالي للزبائن بالدينار الواحد، مراجع المخزون بكمياتها لكل مستودع. تتساوى، أو لا نفتح يوم الاثنين. والمكررات المدموجة ليست فارقاً: هي مسرودة مع السطور الأصلية.',
        '**الاثنين الثامنة صباحاً** يفتح التطبيق الجديد، ويبقى القديم قابلاً للاستشارة. **حتى ظهر الاثنين** التراجع ممكن: يعود النظام القديم للكتابة ويُعاد إدخال الصباح؛ وبعد هذه الساعة تكثر الإدخالات الجديدة فيكون التصحيح إلى الأمام. وهذه المهلة تُكتب قبل العطلة ولا تُقرَّر في العجلة. **في الأسبوع التالي** تبلّغ الفرق عن الفوارق التي تراها، زبون غير موجود أو رصيد معترَض عليه، ويُتتبَّع كل منها إلى سطره الأصلي؛ وتُحفظ النسخة المؤرَّخة من النظام القديم، كما ينص [دليل الاستضافة](' + L.heberger + ').',
      ] },
      { heading: 'ستة مصادر، كيف نسترجعها وما نتحقق منه', body: [
        'ستة مصادر نلقاها، ولكل منها طريقة قراءته وما يُفحص فيه.',
      ], visual: 'sources', after: [
        '**ملفات Excel** تُقرأ ورقةً ورقة، مع استبعاد الخلايا المدموجة ومجاميع أسفل الأعمدة وأسطر العناوين المتنكرة في بيانات؛ ويُفحص فيها التواريخ الرقمية والمعرّفات الطويلة والأصفار البادئة وترميز العربية. **البرنامج القديم بقاعدة بيانات** يُقرأ بالتصدير أو بوصول للقراءة فقط، دون كتابة فيه أبداً؛ وتوجد فيه حقول حُوّلت عن استعمالها، حقل «الفاكس» الذي يحتوي اسم المندوب، ورموز بلا تسمية. **البرنامج بلا تصدير** يُسترجع من مطبوعاته PDF التي تُقرأ كما في [دليل قراءة الوثائق](' + L.lire + ')، ومجموع كل كشف رقم تحقق.',
        '**الورق والدفاتر** تُصوَّر وتُقرأ أو تُدخل يدوياً، بإدخال مزدوج على عينة وأرصدة تُؤكَّد مع الزبائن المعنيين. **عدة ملفات لكل وكالة** تتطلب بناء مفتاح مشترك، الهاتف والمعرّف، لأن الزبون نفسه يظهر بثلاثة أسماء. **الرسائل والصور** لا تُسترجع إلا لما له أثر بعد، رصيد مفتوح أو طلبية غير مسلَّمة. وليس كل شيء يُسترجع: عشر سنوات من الطلبيات المسلَّمة والمدفوعة تبقى قابلة للبحث في أرشيف؛ وما يجب أن يدخل نظيفاً هو ما زال حياً، الزبائن والمنتجات والأرصدة والمخزون والطلبيات المفتوحة.',
      ] },
      { heading: 'ستة فخاخ في الاسترجاع', body: [
        'ستة فخاخ نراها في عمليات الاسترجاع التي نتداركها، وما تفعله المنهجية ضد كل منها.',
      ], visual: 'pieges', after: [
        '**المكرر**: الزبون نفسه موجود ثلاث مرات ورصيده موزَّع؛ مفتاح على الهاتف والمعرّف، أسماء تُقارَن بتسامح، دمج بقاعدة، قائمة يتحقق منها المسيّر. **التاريخ الذي صار رقماً**: تحويل من الرقم التسلسلي للجدول، والتواريخ التي يمكن أن ينقلب يومها وشهرها تُسرد ولا تُخمَّن. **المعرّف التالف**: يُكشف بطوله وأصفاره الأخيرة، يُطلب من الزبون من جديد، ولا يُعاد بناؤه أبداً.',
        '**الرصيد الذي لا يتطابق**: مجموع أرصدة الزبائن يختلف عن المحاسبة حتى قبل الاسترجاع؛ الفارق يُشرح سطراً سطراً أو ينتظر التحويل، لأن فارقاً مستورَداً يصير فارقاً لا يُفسَّر. **العربية غير المقروءة**: الأسماء تصير علامات استفهام؛ الترميز يُكشف ملفاً ملفاً، يُحوَّل، ويُتحقَّق بالعين على عينة. **التحويل بلا عودة**: رقم خاطئ يوم الاثنين والنظام القديم عُدّل في الأثناء؛ قراءة فقط، نسخة مؤرَّخة، تراجع مكتوب بمهلته. الثلاثة الأولى تأتي من الجدول نفسه؛ والثلاثة الأخيرة من المنهجية؛ ولا واحد يظهر قبل أول تحميل تجريبي.',
      ] },
      { heading: 'رأيناه في مكان آخر: حدود Excel وPostgreSQL، وما ينتقل', body: [
        'مصدران يقولان الجوهر. تقول مواصفات Excel إن للرقم خمسة عشر رقماً من الدقة فقط وإن التواريخ أرقام تُعدّ من 1900 بسنة كبيسة زائدة؛ وما ينتقل هو أن ثلاثة من الفخاخ الستة ليست أخطاء إدخال بل السلوك العادي للجدول، وتُعالَج بقواعد لا بلوم الفريق على الملف. وتقول وثائق PostgreSQL إن التحميل بالجملة سريع وإن معاملة واحدة تلغي كل شيء عند الفشل؛ وما ينتقل هو أننا نحمّل ثلاث مرات بلا خوف، وأن تحميلاً نصف منجز لا وجود له.',
        'وما لا تقوله هذه المصادر: أي مصادر لديكم، وأيها المرجع، وكم مكرراً، وأي أرقام يريد محاسبكم أن يراها متساوية مساء السبت؛ والأسبوع الأول من المشروع يجيب، والملفات مفتوحة على الطاولة.',
      ] },
      { heading: 'قواعد استرجاع لا يضيّع شيئاً', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **الاسترجاع يبدأ مع المشروع** لا في نهايته. **جدول مطابقة موقَّع**: لكل حقل مصدر وقاعدة، أو يُترك خلفنا كتابةً. **لا نخمّن أبداً**: التالف يُسرد ويُطلب من جديد. **ثلاثة تحميلات تجريبية** بتوقيت وتقرير للمرفوضات. **المطابقة هي المرجع**: مجاميع متساوية من الجهتين تُختار مع المحاسب، أو ينتظر التحويل. **تراجع مكتوب** بمهلته، والنظام القديم للقراءة فقط.',
        'قاعدة سابعة تخص عرض السعر: «ترحيل البيانات» ليس متطلباً بل سطر؛ المتطلب يُكتب «جرد المصادر، جدول مطابقة متحقَّق منه، قواعد التنظيف ودمج المكررات، قائمة القيم التي تُطلب من جديد، ثلاثة تحميلات تجريبية بتقرير المرفوضات، مطابقة على المجاميع كذا، تحويل في عطلة نهاية أسبوع بمسار وتراجع، أرشيف قابل للبحث للتاريخ غير المسترجَع»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يسعّر «استيراد Excel» سعّر التحميل لا الاسترجاع.',
      ] },
      { heading: 'ست شركات، وما نسترجعه أولاً', body: [
        'ست شركات نرافقها كثيراً، ولكل منها ما يُسترجع أولاً.',
      ], list: [
        '**تاجر الجملة والموزّع**، قبل فتح البوابة الموصوفة في [الدليل المخصص](' + L.portail + '). الزبائن برصيدهم وسقفهم، الكتالوج بالأسعار لكل زبون، المخزون لكل مستودع؛ وتاريخ الطلبيات في الأرشيف.',
        '**المصحة والعيادة**، الموصوفتان في [دليل العيادة](' + L.dentaire + '). المرضى بلا مكررات على الهاتف وتاريخ الميلاد، المواعيد القادمة، خطط العلاج المفتوحة؛ والملفات القديمة ممسوحة وملحقة.',
        '**الوكالة العقارية وفضاء المالك**، الموصوفان في [الدليل المخصص](' + L.appart + '). العقارات، الملاك، عقود الإيجار الجارية، الإيجارات غير المدفوعة؛ والوصولات السابقة في الأرشيف.',
        '**المدرسة الخاصة.** التلاميذ والأولياء بهواتفهم المطبَّعة، تسجيلات السنة، الأقساط المتبقية.',
        '**ناشر SaaS**، الموصوف في [دليل تعدد المستأجرين](' + L.saas + '). أداة استيراد لكل زبون، بجدول المطابقة نفسه وتقرير المرفوضات نفسه، لأن كل زبون جديد يأتي بملفاته.',
        '**المؤسسة المستلَمة من فرنسا.** كل ما يعيش في رأس المسيّر السابق ومصنفاته: الاسترجاع هو أيضاً لحظة اكتشاف ما تعرفه المؤسسة عن نفسها، ومنه تخرج لوحة القيادة الموصوفة في [الدليل المخصص](' + L.dashboard + ').',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم استرجاع كامل في ستة أسابيع، يُدار والتطبيق يُبنى.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** ينجز الجرد والمطابقة: كل المصادر، ما المرجع، الجدول عموداً عموداً، ما يُسترجع أو يُؤرشَف أو يُترك؛ موقَّعة. **الأسابيع 1 إلى 3** تكتب التنظيف: قواعد التطبيع، كشف المكررات، وقائمة القيم التي تُطلب من جديد تُرسل للفرق فور وجودها. **الأسبوع 3 إلى 4** ينجز أول تحميل تجريبي، بتقرير مرفوضاته ومطابقة أولى خاطئة دائماً تقريباً، وهذا دورها.',
        '**الأسبوع 4 إلى 5** ينجز الثاني والثالث: قواعد مصحَّحة، مكررات يتحقق منها المسيّر واحداً واحداً حين تتردد القاعدة، مدة مقاسة، مطابقة صحيحة. **الأسبوع 5 إلى 6** هو التحويل والمتابعة: العطلة، الفتح، وأسبوع لتتبّع كل فارق مبلَّغ عنه إلى سطره الأصلي. والأسماء والمنتجات المنظَّفة تخدم البحث أيضاً، وتطبيعه موصوف في [دليل البحث](' + L.recherche + ').',
      ] },
      { heading: 'ما يُفشل الاسترجاع', body: [
        'عمليات الاسترجاع التي نتداركها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**الاستيراد عشية الإطلاق.** يُكتشف في الأسبوع الأخير ويُنجَز مرة واحدة مساء جمعة.',
        '**استرجاع كل شيء.** عشر سنوات من التاريخ تُستورَد بأخطائها بدل ما زال حياً.',
        '**التخمين.** معرّف يُكمَّل وتاريخ يُفترض؛ والخطأ يُكتشف عند أول تحويل.',
        '**لا قاعدة للمكررات.** تُدمج يدوياً، وبطريقة مختلفة عند كل شخص.',
        '**لا مطابقة.** «يبدو جيداً»؛ والرصيد الإجمالي لم يُقارَن قط.',
        '**النظام القديم ما زال مفتوحاً.** إدخالات من الجهتين أثناء التحويل.',
        '**لا تراجع.** صباح الاثنين لا طريق للعودة.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومحاسبين ومؤسسين.',
      ], faq: [
        { q: 'هل يمكن إدخال ملفات Excel إلى التطبيق الجديد؟', a: 'نعم، وهي ورشة قائمة بذاتها: جرد الملفات، جدول مطابقة عموداً عموداً، تنظيف، ثلاثة تحميلات تجريبية، ومطابقة للمجاميع. يُسترجع ما زال حياً، الزبائن والمنتجات والأرصدة والمخزون والطلبيات المفتوحة؛ والتاريخ القديم يبقى قابلاً للبحث في أرشيف بدل أن يُستورَد بأخطائه.' },
        { q: 'ماذا يحدث للمكررات؟', a: 'تُكشف بمفتاح، الهاتف والمعرّف، ثم بمقارنة متسامحة للأسماء، وتُدمج بقاعدة مكتوبة؛ وحين تتردد القاعدة يتحقق المسيّر من القائمة. تُجمع الأرصدة، وتبقى السطور الأصلية ملحقة بالبطاقة، وكل دمج يمكن فكّه.' },
        { q: 'كيف نثبت أن لا شيء ضاع؟', a: 'بمطابقة تُقرأ يوم سبت التحويل: مجاميع تُختار مع محاسبكم، عدد الزبائن النشطين، الفواتير المفتوحة واحدة واحدة، الرصيد الإجمالي بالدينار الواحد، المخزون لكل مستودع، متساوية في النظام القديم والجديد. وإن اختلف رقم واحد يُؤجَّل الفتح؛ ليست انطباعاً بل مساواة.' },
        { q: 'لماذا تواريخنا وأرقامنا خاطئة في التصدير؟', a: 'لأن الجدول يخزّن التواريخ أرقاماً تُعدّ من 1900 ولا يحفظ للرقم إلا خمسة عشر رقماً من الدقة: 45123 تاريخ، ومعرّف من عشرين رقماً أُدخل رقماً فقد أرقامه الأخيرة. التواريخ تُحوَّل بقاعدة الجدول؛ والرقم الضائع لا يُسترجع بل يُطلب من جديد.' },
        { q: 'هل يتوقف النشاط أثناء التحويل؟', a: 'لا، إن حُضّر: يصير النظام القديم للقراءة فقط مساء الجمعة، والتحميل والمطابقة يتمّان في العطلة، ويفتح التطبيق الجديد صباح الاثنين. ويبقى التراجع ممكناً حتى مهلة مكتوبة مسبقاً، ويبقى النظام القديم قابلاً للاستشارة بعدها.' },
        { q: 'كم من الوقت لاسترجاع البيانات؟', a: 'ستة أسابيع، بالتوازي مع بناء التطبيق: واحد للجرد والمطابقة، اثنان للتنظيف، اثنان للتحميلات التجريبية الثلاثة، واحد للتحويل والمتابعة. وقائمة القيم التي تُطلب من جديد تذهب إلى الفرق منذ الأسبوع الثاني، لأنها ما يأخذ أكثر وقت تقويمي.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'لا قاعدة تعيد بناء رقم ضائع: ما أتلفه الجدول يُطلب من جديد ولا يُخمَّن.' },
      { after: 4, text: 'دليل أن لا شيء ضاع أربعة مجاميع تُقرأ مساء السبت، متساوية من الجهتين.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا أحد ملفاتكم كما هو', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: ننقل بيانات Excel وبرنامجكم القديم إلى التطبيق الجديد، منظَّفة ومطابَقة، بتحويل في عطلة نهاية أسبوع وتراجع مكتوب', body: 'تبني Symloop تطبيقات ومنصات ووكلاء ذكاء اصطناعي للشركات في الجزائر والمؤسسين المقيمين في فرنسا، وتستلم ما هو موجود: جرد المصادر، جدول مطابقة موقَّع، قواعد التنظيف ودمج المكررات، قائمة القيم التي تُطلب من جديد، ثلاثة تحميلات تجريبية بتقرير المرفوضات، مطابقة على المجاميع المختارة مع محاسبكم، تحويل مجرَّب، وأرشيف قابل للبحث للتاريخ. سكربتات الاسترجاع في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.integrer, kind: '2027', name: 'دمج البرنامج القائم عبر API' },
      { href: L.lire, kind: '2027', name: 'قراءة الفواتير والوثائق بالذكاء الاصطناعي' },
      { href: L.livrer, kind: '2027', name: 'تسليم تطبيق دون كسره' },
      { href: L.cdc, kind: '2027', name: 'دفتر الشروط: مقارنة ثلاثة عروض' },
    ] },
  },
};

const KEYWORDS = "reprise des données excel application algérie 2027, migration données ancien logiciel, importer fichiers excel dans une application, nettoyage données doublons clients, migrer excel vers erp algérie, bascule nouveau logiciel week-end, rapprochement données migration, dates excel nombre 45123, rib 20 chiffres excel, data migration excel to app algeria 2027, ترحيل بيانات Excel إلى تطبيق الجزائر, نقل البيانات من البرنامج القديم";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
