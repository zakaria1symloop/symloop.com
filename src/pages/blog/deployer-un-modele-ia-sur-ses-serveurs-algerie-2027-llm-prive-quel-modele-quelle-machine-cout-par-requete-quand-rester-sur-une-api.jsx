import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api.mjs';

const SLUG = 'deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api';
const FIGURES = ['parcours', 'couches', 'dimension', 'situations', 'pannes', 'calendrier'];
const DATE = '2026-11-09';

const L = {
  ia: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  payer: '/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  saas: '/blog/construire-saas-multi-tenant-algerie-2027-isolation-clients-base-partagee-rls-plans-abonnement-mises-a-jour/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  vivre: '/blog/faire-vivre-une-application-algerie-2027-cout-annee-stores-serveurs-mises-a-jour/',
  service: '/services/ai/',
};

const CONTENT = {
  fr: {
    kind: 'IA privée · Modèles ouverts · Serveurs · 2027', title: "Déployer un modèle d'IA sur ses propres serveurs en Algérie en 2027 : quand le faire, quel modèle, quelle machine, comment on le sert, ce que coûte une requête, et quand rester sur une API en Europe",
    dek: "« Nos documents ne sortent pas. » La phrase vient d'une banque, d'une administration, d'une clinique, d'un industriel, et elle arrête le projet d'IA au premier rendez-vous, parce que tout ce qu'on leur a montré appelle une API à l'étranger. Ce guide décrit comment un modèle ouvert se déploie sur vos propres serveurs : la contrainte écrite qui décide de ce qui reste sur site, le modèle choisi sur votre jeu d'évaluation en arabe, en français et en darija, la carte dimensionnée sur la taille du modèle, le serveur d'inférence qui fait qu'une machine sert trente personnes, le coût fixe face au coût par requête, et les cas où une API en Europe reste la bonne réponse.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['IA privée', 'Modèles ouverts', 'Serveurs', 'Coût par requête', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Déployer un modèle sur ses serveurs n'est pas une marque de sérieux : c'est la réponse à **une contrainte écrite**, où les documents ont le droit d'aller. Quand elle existe, banque, administration, santé, site industriel isolé, on installe un **modèle ouvert** sur une machine à vous, derrière la **même orchestration** que pour une API : instructions, récupération de documents, schémas, repli humain, journal. Le modèle se choisit sur **votre jeu d'évaluation de soixante cas réels**, en arabe, en français et en darija, pas sur un classement : la taille ne dit pas la langue. La machine se dimensionne sur la mémoire des poids, environ **2 Go par milliard de paramètres en 16 bits et 0,6 Go en 4 bits**, plus le contexte. Un **serveur d'inférence** regroupe les requêtes, met le préfixe en cache et sert des poids quantifiés ; c'est ce qui fait qu'une carte sert une équipe. Le coût devient **fixe**, une machine et son exploitation, au lieu d'être à la requête. Et quand la contrainte n'existe pas, une API en Europe arrive plus vite et répond mieux. Dix semaines, et aucune carte achetée avant la quatrième.",
      "Ce guide s'adresse à la direction informatique d'une banque, d'une assurance ou d'une administration à qui l'on a dit que l'IA « c'est dans le cloud », à la clinique et à l'industriel dont les données ne sortent pas, et à l'éditeur de SaaS dont un client exige que tout reste en Algérie. Il ne redit pas quelles fonctions construire, décrit dans [le guide sur l'IA dans l'application](" + L.ia + "), ni où héberger l'application elle-même, décrit dans [le guide sur l'hébergement](" + L.heberger + ") ; il décrit ce qui se monte entre l'orchestration et la carte graphique, et il prolonge [notre page sur les fonctions IA](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les chiffres disent', body: [
        "La taille d'un modèle ne dit pas sa langue. La fiche du modèle Llama 3.3 de 70 milliards de paramètres, publiée par Meta le 6 décembre 2024 avec une fenêtre de contexte de 128 000 tokens, liste **huit langues officiellement prises en charge : anglais, allemand, français, italien, portugais, hindi, espagnol et thaï** ; l'arabe n'y figure pas, et la fiche précise que les développeurs peuvent l'affiner pour d'autres langues. À l'inverse, la famille Jais 3, annoncée le 15 octobre 2026 par l'institut des modèles de fondation de MBZUAI et Inception42, propose **six modèles ouverts de 900 millions à 375 milliards de paramètres** construits pour l'arabe standard et des dialectes « jusqu'à l'arabe d'Afrique du Nord » ; nous citons l'annonce de presse, et la licence se lit sur le dépôt. Ce que cela impose : le modèle se choisit sur vos documents et vos messages, en arabe, en français et en darija, pas sur le nombre de paramètres.",
        "Une machine sert plusieurs personnes à condition d'avoir le bon serveur. La documentation de vLLM, bibliothèque ouverte d'inférence que nous utilisons, liste le **regroupement continu des requêtes entrantes**, la **mise en cache du préfixe**, la gestion de la mémoire d'attention, des **poids quantifiés** en 8 et 4 bits dans plusieurs formats, une **API compatible** avec celle des éditeurs, la prise en charge des cartes NVIDIA et AMD, et le parallélisme sur plusieurs cartes. Ce que cela impose : passer d'une API à un modèle sur site ne réécrit pas l'application, puisque l'orchestration parle la même API ; et la question n'est pas « combien de tokens par seconde » mais « combien de personnes en même temps, avec quelle attente ».",
        "La mémoire se calcule avant d'acheter. Un poids stocké en 16 bits occupe deux octets : un modèle occupe donc environ **2 Go par milliard de paramètres**, et environ **0,6 Go en 4 bits** ; s'y ajoute la mémoire du contexte, qui grandit avec la longueur des documents et le nombre de requêtes simultanées. Ce sont des ordres de grandeur, pas une fiche technique : un modèle de 8 milliards tient en 4 bits sur une carte de 24 Go avec de la marge, un modèle de 32 milliards y tient juste, un modèle de 70 milliards demande 48 Go ou plusieurs cartes. Ce que nous n'avons pas trouvé et ne citons pas : un prix public des cartes en Algérie, qui dépend de l'importation et change ; c'est pourquoi le modèle se choisit d'abord sur des machines louées à l'heure, et la machine s'achète ensuite.",
      ] },
      { heading: 'Une requête, deux chemins', body: [
        "Le déploiement privé ne remplace pas l'API : il ajoute un chemin, et l'orchestration choisit, requête par requête.",
      ], visual: 'parcours', after: [
        "**Dans vos murs** : l'application appelle l'orchestration, qui prépare la requête, récupère les seuls documents utiles et appelle le modèle servi sur votre machine ; rien ne sort du réseau, ni le document, ni la question, ni la réponse, ni le journal. C'est le chemin de tout ce qui contient un document de client, un dossier médical, une pièce d'identité. **Hors de vos murs** : pour ce qui n'en contient pas, une rédaction générale, une traduction, une question sur un texte public, l'orchestration peut appeler un modèle plus capable hébergé en Europe, avec les seules données nécessaires et un contrat à votre nom. La règle est écrite la première semaine, par type de requête, et elle est appliquée par l'orchestration, pas laissée au jugement de l'utilisateur.",
        "**Ce que cela change** : les documents ne vont nulle part ; le coût devient fixe, une machine et son exploitation, au lieu de croître avec chaque requête et de se payer en devise comme [le guide sur le paiement du cloud](" + L.payer + ") le décrit ; et la qualité devient une question à mesurer, parce qu'un modèle ouvert de taille moyenne ne vaut pas le meilleur modèle fermé sur toutes les tâches, mais tient très bien une extraction, un tri ou une recherche dans vos documents. Un seul des deux chemins n'est presque jamais la bonne réponse : tout sur site prive des modèles les plus capables ce qui n'a rien de sensible, tout en Europe exclut ce qui ne doit pas sortir.",
      ] },
      { heading: 'Un modèle sur vos serveurs, en cinq couches', body: [
        "Cinq couches, dont deux sont exactement celles d'une fonction construite sur une API.",
      ], visual: 'couches', after: [
        "**L'application** ne change pas : elle appelle l'orchestration et ne sait pas où tourne le modèle. **L'orchestration** est la même que celle décrite dans [le guide sur l'IA dans l'application](" + L.ia + ") : instructions versionnées, récupération, schémas de sortie, seuils, repli humain, journal ; elle gagne une règle, le choix du chemin. **Le serveur de modèles** est la couche qu'on ajoute : un serveur d'inférence ouvert qui expose une API compatible, regroupe les requêtes qui arrivent ensemble, garde le préfixe commun en cache et sert des poids quantifiés ; changer de modèle est un fichier et un redémarrage, pas un projet.",
        "**La machine** porte une ou plusieurs cartes graphiques, de la mémoire, du stockage pour les poids et les index, un onduleur, un réseau interne et aucun accès sortant ; elle se dimensionne sur la taille du modèle retenu et le nombre de requêtes simultanées mesuré au pilote. **L'exploitation** lit chaque semaine la charge de la carte, la file d'attente, la latence et la note sur le jeu d'évaluation, sauvegarde les poids et les index, et fait passer toute mise à jour de modèle par le jeu d'évaluation avant la production, comme [le guide sur la livraison](" + L.livrer + ") le fait pour le code.",
      ] },
      { heading: 'Quel modèle tient sur quelle carte', body: [
        "La question « quelle machine faut-il » se répond dans l'autre sens : quel modèle tient la note sur vos cas, et quelle mémoire lui faut-il.",
      ], visual: 'dimension', after: [
        "**Les petits modèles, autour de 8 milliards de paramètres**, tiennent en 4 bits dans environ 5 Go : ils suffisent pour trier des messages en catégories fermées et extraire des champs simples, et répondent vite à beaucoup de monde. **Autour de 14 milliards**, environ 9 Go en 4 bits : extraction de documents plus variés, résumés. **Autour de 32 milliards**, environ 20 Go en 4 bits, donc sur une carte de 24 Go avec peu de marge pour le contexte, ou à l'aise sur 48 Go : recherche dans les documents avec réponse sourcée, agents avec outils. **Autour de 70 milliards**, environ 42 Go en 4 bits : raisonnement plus long et rédaction, sur une carte de 48 Go ou plusieurs cartes.",
        "**La quantification** en 4 bits divise la mémoire par plus de trois et coûte un peu de qualité ; combien, cela se mesure sur votre jeu d'évaluation, fonction par fonction, et ne se suppose pas. **La langue** passe avant la taille : un modèle de 70 milliards qui ne liste pas l'arabe peut faire moins bien sur un vocal en darija qu'un modèle arabe quatre fois plus petit, et la transcription des vocaux se fait avec un modèle de reconnaissance dédié. **La règle** : le plus petit modèle qui tient la note sur chaque fonction, souvent deux modèles sur la même machine, un petit pour le tri et un moyen pour la recherche, plutôt qu'un gros pour tout.",
      ] },
      { heading: "Six situations, et ce qu'on monte pour chacune", body: [
        "Six situations que nous rencontrons, et le montage retenu la première semaine pour chacune.",
      ], visual: 'situations', after: [
        "**La banque, l'assurance, l'administration** : les documents des clients ne sortent pas de l'établissement, parfois pas du réseau ; tout sur site, modèle ouvert, index et journal sur vos serveurs, aucun accès sortant, et une deuxième machine pour la reprise. **La clinique, le laboratoire** : lecture de dossiers et d'ordonnances sur site ; rédaction générale vers l'Europe sans données de patient ; montage mixte. **L'industriel, le site isolé** : la connexion ne tient pas ; petit modèle sur une carte, hors ligne, mises à jour apportées, journal synchronisé quand la liaison revient, sur le principe du [mode hors ligne](" + L.offline + ").",
        "**Le distributeur, le portail B2B** : catalogue et commandes peu sensibles ; API en Europe d'abord, avec cache et récupération ; le passage sur site se décide quand le volume mensuel rend la machine moins chère que les requêtes. **Le fondateur en France** : pas de salle serveur, un lancement à tenir ; API en Europe, orchestration à lui dès le départ, et le passage sur site reste possible sans réécrire. **L'éditeur de SaaS** : des clients qui acceptent l'Europe, d'autres qui exigent l'Algérie ou leurs murs ; les deux chemins dans la même orchestration, choisis par client, comme l'isolation décrite dans [le guide sur le SaaS multi-tenant](" + L.saas + "), et un modèle sur site vendu comme une offre.",
      ] },
      { heading: "Six échecs d'un modèle sur site", body: [
        "Six échecs que nous voyons sur les déploiements privés que nous reprenons, et ce que l'architecture fait contre chacun.",
      ], visual: 'pannes', after: [
        "**La carte saturée** : vingt personnes posent une question en même temps et chacune attend une minute ; requêtes regroupées par le serveur, file avec priorité, limite de tokens, petit modèle pour le tri, charge lue chaque semaine. **Le modèle trop grand** : on a pris le plus gros « pour être sûr », et il ne tient pas ou répond en dix secondes ; taille choisie par fonction sur le jeu d'évaluation, quantification mesurée, le plus petit qui tient la note. **L'arabe mal servi** : le modèle choisi sur un classement en anglais répond mal en arabe et en darija ; modèles comparés sur vos soixante cas réels dans les trois langues, modèle arabe pour la voix et le dialecte.",
        "**La mise à jour qui casse** : un nouveau modèle remplace l'ancien et trois fonctions régressent sans que personne le voie ; tout changement de modèle ou de quantification passe par le jeu d'évaluation, livraison refusée si la note baisse, retour arrière en une commande. **Le serveur exposé** : l'API du modèle répond sur le réseau sans authentification ; serveur joignable par l'orchestration seule, aucun accès sortant, journal par utilisateur, clés tournées. **La machine unique** : la carte tombe, ou le courant ; onduleur, sauvegarde des poids et des index, deuxième machine, ou repli écrit vers l'Europe pour ce qui a le droit d'y aller. Aucune ne se règle en achetant une carte plus grosse.",
      ] },
      { heading: 'Vu ailleurs : la fiche de Llama, Jais 3, vLLM, et ce qui se transpose', body: [
        "Trois sources disent l'essentiel. La fiche de Llama 3.3 dit qu'un modèle de 70 milliards de paramètres liste huit langues dont l'arabe ne fait pas partie ; ce qui se transpose, c'est qu'un grand modèle généraliste doit être testé sur votre arabe avant d'être installé. L'annonce de Jais 3 dit que des modèles ouverts construits pour l'arabe et ses dialectes existent en plusieurs tailles ; ce qui se transpose, c'est qu'un modèle arabe de taille moyenne est un candidat sérieux pour la voix et le dialecte, à comparer sur vos cas.",
        "La documentation de vLLM dit qu'un serveur ouvert regroupe les requêtes, met le préfixe en cache, sert des poids quantifiés et expose une API compatible ; ce qui se transpose, c'est qu'une fonction construite sur une API passe sur site sans réécriture si l'orchestration est à vous. Ce que ces sources ne disent pas : quels documents ont le droit de sortir chez vous, combien de personnes interrogeront le modèle en même temps, et quel modèle tient la note sur vos cas ; les quatre premières semaines du projet y répondent, sans achat.",
      ] },
      { heading: "Les règles d'un modèle sur site qui tient", body: [
        "Six règles, écrites la première semaine. **La contrainte d'abord** : où chaque type de document a le droit d'aller, par écrit, avant tout choix technique. **Le jeu d'évaluation choisit le modèle**, en arabe, en français et en darija ; pas un classement. **Rien ne s'achète avant la comparaison** sur des machines louées à l'heure. **Le plus petit modèle qui tient la note**, par fonction ; deux modèles plutôt qu'un gros. **L'orchestration est la même que pour une API**, et elle est à vous : le chemin est un réglage. **Toute mise à jour passe par le jeu d'évaluation**, avec retour arrière.",
        "Une septième règle porte sur le devis : « IA souveraine sur site » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « liste des types de documents et de leur chemin autorisé ; modèle ouvert choisi sur soixante cas réels dans les trois langues, note mesurée ; machine dimensionnée pour N requêtes simultanées avec temps d'attente mesuré au test de charge ; serveur d'inférence avec regroupement et cache ; aucun accès sortant ; journal par requête ; sauvegarde des poids et des index ; procédure de mise à jour et de retour arrière ; reprise écrite », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui chiffre « un serveur GPU » a chiffré une machine, pas une fonction.",
      ] },
      { heading: "Six fonctions, et sur quel chemin on les met", body: [
        "Six fonctions que nous construisons souvent, et le chemin retenu quand une contrainte existe.",
      ], list: [
        "**Lecture de factures, de pièces et de dossiers.** Sur site : c'est le document lui-même qui est sensible ; modèle de lecture puis modèle moyen pour la mise en champs.",
        "**Recherche dans les contrats et les procédures.** Sur site : index et documents sur vos serveurs, réponse sourcée ; la partie mots-clés suit [le guide sur la recherche](" + L.recherche + ").",
        "**Tri des messages et des courriers.** Sur site, petit modèle : catégories fermées, beaucoup de volume, réponse rapide.",
        "**Transcription de vocaux en darija.** Sur site quand les vocaux viennent de clients : modèle de reconnaissance arabe multidialectal, testé sur vos vocaux.",
        "**Agent sur WhatsApp.** Le message transite par Meta quel que soit le modèle, comme [le guide sur l'agent WhatsApp](" + L.whatsapp + ") le décrit ; le modèle peut être sur site, mais le canal ne l'est pas, et cela se dit au client.",
        "**Rédaction générale, traduction, résumé de textes publics.** Europe : aucune donnée sensible, et les modèles les plus capables y sont.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'un déploiement privé complet en dix semaines, dont deux sans code et aucune carte achetée avant la quatrième.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit la contrainte et les fonctions : où chaque type de document a le droit d'aller, les deux ou trois fonctions, ce qui reste sur site et ce qui peut sortir ; signé. **La semaine 1 à 2** écrit le jeu d'évaluation : soixante cas réels en arabe, en français et en darija, avec la bonne réponse. **Les semaines 2 à 4** choisissent le modèle : trois ou quatre modèles ouverts comparés sur le jeu, sur des machines louées à l'heure, en 16 et en 4 bits ; la taille et la quantification retenues décident de la machine. **Les semaines 4 à 6** installent la machine et le serveur de modèles, sans accès sortant, avec cache, file et test de charge au nombre réel d'utilisateurs.",
        "**Les semaines 6 à 9** branchent l'orchestration sur le modèle sur site et livrent les fonctions une à une, puis le pilote avec repli humain, la part passée à l'humain et l'attente lues chaque jour. **La semaine 9 à 10** installe l'exploitation : supervision hebdomadaire, sauvegarde des poids et des index, procédure de mise à jour par le jeu d'évaluation, et une répétition de la panne de la machine. Le coût de fonctionnement, électricité, maintenance, remplacement, rejoint le budget annuel décrit dans [le guide sur faire vivre une application](" + L.vivre + ").",
      ] },
      { heading: 'Ce qui fait échouer un déploiement privé', body: [
        "Les déploiements privés que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**La machine achetée d'abord.** Une carte choisie sur une fiche technique, puis un modèle qu'on cherche à y faire tenir.",
        "**Le modèle choisi sur un classement.** Premier en anglais, médiocre sur vos documents en arabe.",
        "**Pas de serveur d'inférence.** Un script qui charge le modèle et sert une personne à la fois.",
        "**Tout sur site par principe.** Des tâches sans aucune donnée sensible privées des meilleurs modèles.",
        "**Pas de jeu d'évaluation.** La qualité est une impression, et chaque mise à jour un pari.",
        "**L'API du modèle ouverte sur le réseau.** Sans authentification, sans journal ; personne ne sait qui a demandé quoi.",
        "**Pas de reprise.** Une seule machine, pas de sauvegarde des index ; la panne dure des semaines.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de directions informatiques, de gérants en Algérie et d'éditeurs de SaaS.",
      ], faq: [
        { q: 'Faut-il déployer le modèle sur nos serveurs ?', a: "Seulement si une contrainte écrite l'exige : des documents de clients, des dossiers de santé ou des données qui ne doivent pas sortir de l'établissement ou du pays, ou un site sans connexion fiable. Sans cette contrainte, une API hébergée en Europe, derrière une orchestration qui vous appartient, arrive plus vite et donne accès aux modèles les plus capables ; et le passage sur site reste possible plus tard sans réécrire." },
        { q: 'Quel modèle ouvert choisir pour l’arabe et le français ?', a: "Celui qui tient la note sur vos soixante cas réels, dans les trois langues, darija comprise. La taille ne dit pas la langue : la fiche d'un grand modèle généraliste de 70 milliards de paramètres liste huit langues sans l'arabe, alors que des familles construites pour l'arabe et ses dialectes existent en plusieurs tailles. Nous comparons trois ou quatre candidats sur des machines louées avant tout achat." },
        { q: 'Quelle machine faut-il ?', a: "Elle se déduit du modèle retenu : environ 2 Go de mémoire par milliard de paramètres en 16 bits et 0,6 Go en 4 bits, plus le contexte et les requêtes simultanées. Un modèle de 8 à 14 milliards tient à l'aise sur une carte de 24 Go en 4 bits ; 32 milliards y tient juste ou confortablement sur 48 Go ; 70 milliards demande 48 Go ou plusieurs cartes. Ce sont des ordres de grandeur ; le test de charge avec votre nombre réel d'utilisateurs tranche." },
        { q: 'Combien de personnes une machine peut-elle servir ?', a: "Cela dépend du serveur plus que de la carte : un serveur d'inférence qui regroupe les requêtes arrivant ensemble et garde le préfixe en cache sert une équipe là où un script sert une personne. Le nombre exact se mesure au test de charge de la cinquième semaine, avec vos documents et votre longueur de réponse, et la file d'attente est lue chaque semaine ensuite." },
        { q: 'Est-ce plus coûteux qu’une API ?', a: "Le coût change de nature : fixe, une machine, son électricité et son exploitation, au lieu d'être à la requête et en devise. En dessous d'un certain volume, l'API coûte moins ; au-delà, la machine se rembourse. Le seuil se calcule avec votre volume mesuré au pilote, pas avec un chiffre général, et la contrainte sur les documents décide souvent avant le coût." },
        { q: 'Combien de temps pour déployer ?', a: "Dix semaines : une pour la contrainte et les fonctions, une pour le jeu d'évaluation, deux pour choisir le modèle sur des machines louées, deux pour la machine et le serveur de modèles, trois pour les fonctions et le pilote, une pour l'exploitation et la reprise. Aucun achat de matériel avant la quatrième semaine." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Le déploiement sur site n'est pas une marque de sérieux : c'est la réponse à une contrainte écrite, où les documents ont le droit d'aller." },
      { after: 4, text: "La taille ne dit pas la langue : le modèle se choisit sur vos cas en arabe, en français et en darija, puis la machine se déduit du modèle." },
    ],
    cta: { eyebrow: 'Dites-nous quels documents ne doivent pas sortir', title: "Banque, administration, clinique, industriel ou éditeur de SaaS : nous déployons le modèle sur vos serveurs, choisi sur vos cas en arabe, en français et en darija, avec la même orchestration qu'une API, la charge et la qualité sous les yeux", body: "Symloop construit des fonctions IA en production pour les entreprises en Algérie et les fondateurs installés en France, et les déploie là où vos contrats l'exigent : modèle ouvert choisi sur votre jeu d'évaluation, machine dimensionnée sur le modèle et le nombre d'utilisateurs, serveur d'inférence avec regroupement et cache, aucun accès sortant, journal par requête, sauvegarde et reprise, mise à jour par le jeu d'évaluation. NOOR, notre plateforme IA souveraine, pour les établissements qui veulent une base déjà prête. Code, poids affinés et clés à votre nom." },
    related: { label: 'À lire aussi', items: [
      { href: L.ia, kind: '2027', name: 'Mettre de l’IA dans une application : six fonctions, coût par requête' },
      { href: L.heberger, kind: '2027', name: 'Héberger en Algérie ou en Europe' },
      { href: L.recherche, kind: '2027', name: 'La recherche en arabe, français et darija' },
      { href: L.whatsapp, kind: '2027', name: 'Agent IA sur WhatsApp : architecture et coût' },
    ] },
  },
  en: {
    kind: 'Private AI · Open models · Servers · 2027', title: 'Deploying an AI model on your own servers in Algeria in 2027: when to do it, which model, which machine, how it is served, what a request costs, and when to stay on an API in Europe',
    dek: '“Our documents do not leave.” The sentence comes from a bank, a government body, a clinic, a manufacturer, and it stops the AI project at the first meeting, because everything they were shown calls an API abroad. This guide describes how an open model is deployed on your own servers: the written constraint that decides what stays on site, the model chosen on your evaluation set in Arabic, French and darija, the card sized on the model, the inference server that lets one machine serve thirty people, the fixed cost against the cost per request, and the cases where an API in Europe remains the right answer.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Private AI', 'Open models', 'Servers', 'Cost per request', 'Algeria 2027'],
    intro: [
      '**Short answer.** Deploying a model on your servers is not a badge of seriousness: it is the answer to **a written constraint**, where documents are allowed to go. When it exists, bank, government, health, isolated industrial site, an **open model** is installed on a machine of yours, behind the **same orchestration** as for an API: instructions, document retrieval, schemas, human fallback, log. The model is chosen on **your evaluation set of sixty real cases**, in Arabic, French and darija, not on a leaderboard: size does not tell language. The machine is sized on weight memory, about **2 GB per billion parameters at 16 bits and 0.6 GB at 4 bits**, plus context. An **inference server** batches requests, caches the prefix and serves quantised weights; that is what lets one card serve a team. Cost becomes **fixed**, a machine and its operation, instead of per request. And when the constraint does not exist, an API in Europe arrives faster and answers better. Ten weeks, and no card bought before the fourth.',
      'This guide is for the IT department of a bank, insurer or government body that was told AI “is in the cloud”, the clinic and the manufacturer whose data does not leave, and the SaaS vendor whose customer requires everything to stay in Algeria. It does not repeat which functions to build, described in [the guide on AI in the app](' + L.ia + '), nor where to host the app itself, described in [the hosting guide](' + L.heberger + '); it describes what is set up between the orchestration and the graphics card, and extends [our page on AI functions](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the figures say', body: [
        'A model’s size does not tell its language. The model card of Llama 3.3 with 70 billion parameters, released by Meta on 6 December 2024 with a 128,000-token context window, lists **eight officially supported languages: English, German, French, Italian, Portuguese, Hindi, Spanish and Thai**; Arabic is not among them, and the card says developers may fine-tune it for others. Conversely the Jais 3 family, announced on 15 October 2026 by MBZUAI’s Institute of Foundation Models and Inception42, offers **six open models from 900 million to 375 billion parameters** built for Modern Standard Arabic and dialects “to North African Arabic”; we cite the press announcement, and the licence is read on the repository. What this imposes: the model is chosen on your documents and messages, in Arabic, French and darija, not on parameter count.',
        'One machine serves several people provided it has the right server. The documentation of vLLM, the open inference library we use, lists **continuous batching of incoming requests**, **prefix caching**, attention memory management, **quantised weights** at 8 and 4 bits in several formats, an **API compatible** with the vendors’, support for NVIDIA and AMD cards, and parallelism across several cards. What this imposes: moving from an API to an on-site model does not rewrite the app, since the orchestration speaks the same API; and the question is not “how many tokens per second” but “how many people at once, with what wait”.',
        'Memory is computed before buying. A weight stored at 16 bits takes two bytes: a model therefore takes about **2 GB per billion parameters**, and about **0.6 GB at 4 bits**; on top comes context memory, which grows with document length and the number of simultaneous requests. These are orders of magnitude, not a spec sheet: an 8-billion model fits at 4 bits on a 24 GB card with room to spare, a 32-billion model just fits, a 70-billion model needs 48 GB or several cards. What we did not find and do not quote: a public price for cards in Algeria, which depends on import and changes; that is why the model is first chosen on machines rented by the hour, and the machine bought afterwards.',
      ] },
      { heading: 'One request, two routes', body: [
        'Private deployment does not replace the API: it adds a route, and the orchestration chooses, request by request.',
      ], visual: 'parcours', after: [
        '**Inside your walls**: the app calls the orchestration, which prepares the request, retrieves only the useful documents and calls the model served on your machine; nothing leaves the network, not the document, not the question, not the answer, not the log. It is the route for anything containing a customer document, a medical file, an ID. **Outside your walls**: for what contains none, general drafting, a translation, a question on a public text, the orchestration may call a more capable model hosted in Europe, with only the necessary data and a contract in your name. The rule is written in the first week, per request type, and enforced by the orchestration, not left to the user’s judgement.',
        '**What it changes**: documents go nowhere; cost becomes fixed, a machine and its operation, instead of growing with every request and being paid in foreign currency as [the guide on paying for cloud](' + L.payer + ') describes; and quality becomes a question to measure, because a mid-size open model does not match the best closed model on every task, but handles extraction, sorting or search in your documents very well. One route alone is almost never the right answer: everything on site deprives non-sensitive work of the most capable models, everything in Europe excludes what must not leave.',
      ] },
      { heading: 'A model on your servers, in five layers', body: [
        'Five layers, two of which are exactly those of a function built on an API.',
      ], visual: 'couches', after: [
        '**The application** does not change: it calls the orchestration and does not know where the model runs. **The orchestration** is the one described in [the guide on AI in the app](' + L.ia + '): versioned instructions, retrieval, output schemas, thresholds, human fallback, log; it gains one rule, the choice of route. **The model server** is the added layer: an open inference server exposing a compatible API, batching requests that arrive together, keeping the shared prefix cached and serving quantised weights; switching model is a file and a restart, not a project.',
        '**The machine** carries one or more graphics cards, memory, storage for weights and indexes, a UPS, an internal network and no outbound access; it is sized on the chosen model and the number of simultaneous requests measured in the pilot. **Operations** reads every week the card load, the queue, the latency and the score on the evaluation set, backs up weights and indexes, and makes every model update go through the evaluation set before production, as [the delivery guide](' + L.livrer + ') does for code.',
      ] },
      { heading: 'Which model fits on which card', body: [
        'The question “which machine do we need” is answered the other way round: which model holds the score on your cases, and how much memory it needs.',
      ], visual: 'dimension', after: [
        '**Small models, around 8 billion parameters**, fit at 4 bits in about 5 GB: enough to sort messages into closed categories and extract simple fields, and they answer many people fast. **Around 14 billion**, about 9 GB at 4 bits: extraction from more varied documents, summaries. **Around 32 billion**, about 20 GB at 4 bits, so on a 24 GB card with little room for context, or comfortably on 48 GB: search in documents with sourced answers, agents with tools. **Around 70 billion**, about 42 GB at 4 bits: longer reasoning and drafting, on a 48 GB card or several cards.',
        '**Quantisation** to 4 bits divides memory by more than three and costs a little quality; how much is measured on your evaluation set, function by function, not assumed. **Language** comes before size: a 70-billion model that does not list Arabic can do worse on a darija voice note than an Arabic model four times smaller, and voice transcription uses a dedicated recognition model. **The rule**: the smallest model that holds the score on each function, often two models on the same machine, a small one for sorting and a mid-size one for search, rather than a big one for everything.',
      ] },
      { heading: 'Six situations, and what gets set up for each', body: [
        'Six situations we meet, and the set-up chosen in the first week for each.',
      ], visual: 'situations', after: [
        '**The bank, the insurer, the government body**: customers’ documents do not leave the institution, sometimes not the network; everything on site, open model, index and log on your servers, no outbound access, and a second machine for recovery. **The clinic, the laboratory**: reading files and prescriptions on site; general drafting to Europe without patient data; mixed set-up. **The manufacturer, the isolated site**: the connection does not hold; a small model on one card, offline, updates carried in, log synchronised when the link returns, on the principle of [offline mode](' + L.offline + ').',
        '**The distributor, the B2B portal**: catalogue and orders not very sensitive; API in Europe first, with cache and retrieval; moving on site is decided when monthly volume makes the machine cost less than the requests. **The founder in France**: no server room, a launch to keep; API in Europe, orchestration theirs from the start, and moving on site stays possible without rewriting. **The SaaS vendor**: customers who accept Europe, others who require Algeria or their own walls; both routes in the same orchestration, chosen per customer, like the isolation described in [the multi-tenant SaaS guide](' + L.saas + '), and an on-site model sold as a plan.',
      ] },
      { heading: 'Six failures of an on-site model', body: [
        'Six failures we see on the private deployments we take over, and what the architecture does against each.',
      ], visual: 'pannes', after: [
        '**The saturated card**: twenty people ask a question at once and each waits a minute; requests batched by the server, priority queue, token limit, small model for sorting, load read every week. **The oversized model**: the biggest was chosen “to be safe”, and it does not fit or answers in ten seconds; size chosen per function on the evaluation set, quantisation measured, the smallest that holds the score. **Arabic poorly served**: the model chosen on an English leaderboard answers badly in Arabic and darija; models compared on your sixty real cases in the three languages, an Arabic model for voice and dialect.',
        '**The update that breaks**: a new model replaces the old and three functions regress unseen; every change of model or quantisation goes through the evaluation set, release refused if the score drops, one-command rollback. **The exposed server**: the model API answers on the network without authentication; server reachable by the orchestration only, no outbound access, log per user, keys rotated. **The single machine**: the card fails, or the power; UPS, backup of weights and indexes, a second machine, or a written fallback to Europe for what is allowed to go there. None is solved by buying a bigger card.',
      ] },
      { heading: 'Seen elsewhere: the Llama card, Jais 3, vLLM, and what transposes', body: [
        'Three sources say the essentials. The Llama 3.3 card says a 70-billion-parameter model lists eight languages that do not include Arabic; what transposes is that a large general model must be tested on your Arabic before being installed. The Jais 3 announcement says open models built for Arabic and its dialects exist in several sizes; what transposes is that a mid-size Arabic model is a serious candidate for voice and dialect, to compare on your cases.',
        'The vLLM documentation says an open server batches requests, caches the prefix, serves quantised weights and exposes a compatible API; what transposes is that a function built on an API moves on site without rewriting if the orchestration is yours. What these sources do not say: which documents are allowed to leave at your company, how many people will query the model at once, and which model holds the score on your cases; the project’s first four weeks answer that, with no purchase.',
      ] },
      { heading: 'The rules of an on-site model that holds', body: [
        'Six rules, written in the first week. **The constraint first**: where each type of document is allowed to go, in writing, before any technical choice. **The evaluation set chooses the model**, in Arabic, French and darija; not a leaderboard. **Nothing is bought before the comparison** on machines rented by the hour. **The smallest model that holds the score**, per function; two models rather than a big one. **The orchestration is the same as for an API**, and it is yours: the route is a setting. **Every update goes through the evaluation set**, with rollback.',
        'A seventh rule concerns the quote: “sovereign on-site AI” is not a requirement, it is a sentence; the requirement reads “list of document types and their allowed route; open model chosen on sixty real cases in the three languages, score measured; machine sized for N simultaneous requests with wait time measured in the load test; inference server with batching and cache; no outbound access; log per request; backup of weights and indexes; update and rollback procedure; written recovery”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that prices “a GPU server” has priced a machine, not a function.',
      ] },
      { heading: 'Six functions, and which route they take', body: [
        'Six functions we often build, and the route chosen when a constraint exists.',
      ], list: [
        '**Reading invoices, IDs and files.** On site: the document itself is what is sensitive; a reading model then a mid-size model to fill the fields.',
        '**Search in contracts and procedures.** On site: index and documents on your servers, sourced answer; the keyword part follows [the search guide](' + L.recherche + ').',
        '**Sorting messages and mail.** On site, small model: closed categories, high volume, fast answer.',
        '**Transcribing darija voice notes.** On site when the voice notes come from customers: a multi-dialect Arabic recognition model, tested on your voice notes.',
        '**Agent on WhatsApp.** The message travels through Meta whatever the model, as [the WhatsApp agent guide](' + L.whatsapp + ') describes; the model can be on site, but the channel is not, and the customer is told so.',
        '**General drafting, translation, summarising public texts.** Europe: no sensitive data, and the most capable models are there.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of a complete private deployment in ten weeks, two without code and no card bought before the fourth.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes the constraint and the functions: where each type of document is allowed to go, the two or three functions, what stays on site and what may leave; signed. **Week 1 to 2** writes the evaluation set: sixty real cases in Arabic, French and darija, with the right answer. **Weeks 2 to 4** choose the model: three or four open models compared on the set, on machines rented by the hour, at 16 and 4 bits; the size and quantisation chosen decide the machine. **Weeks 4 to 6** install the machine and the model server, no outbound access, with cache, queue and a load test at the real number of users.',
        '**Weeks 6 to 9** wire the orchestration to the on-site model and deliver the functions one by one, then the pilot with human fallback, the share handed to a human and the wait read every day. **Week 9 to 10** installs operations: weekly supervision, backup of weights and indexes, update procedure through the evaluation set, and a rehearsal of the machine failure. The running cost, electricity, maintenance, replacement, joins the yearly budget described in [the guide on keeping an app alive](' + L.vivre + ').',
      ] },
      { heading: 'What makes a private deployment fail', body: [
        'The private deployments we take over almost always failed for one of these reasons.',
      ], list: [
        '**The machine bought first.** A card chosen on a spec sheet, then a model someone tries to fit on it.',
        '**The model chosen on a leaderboard.** First in English, mediocre on your documents in Arabic.',
        '**No inference server.** A script that loads the model and serves one person at a time.',
        '**Everything on site on principle.** Tasks with no sensitive data deprived of the best models.',
        '**No evaluation set.** Quality is an impression, and every update a bet.',
        '**The model API open on the network.** No authentication, no log; nobody knows who asked what.',
        '**No recovery.** A single machine, no backup of the indexes; the outage lasts weeks.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from IT departments, managers in Algeria and SaaS vendors.',
      ], faq: [
        { q: 'Should we deploy the model on our servers?', a: 'Only if a written constraint requires it: customers’ documents, health files or data that must not leave the institution or the country, or a site without a reliable connection. Without that constraint, an API hosted in Europe, behind an orchestration you own, arrives faster and gives access to the most capable models; and moving on site stays possible later without rewriting.' },
        { q: 'Which open model to choose for Arabic and French?', a: 'The one that holds the score on your sixty real cases, in the three languages, darija included. Size does not tell language: the card of a large 70-billion-parameter general model lists eight languages without Arabic, while families built for Arabic and its dialects exist in several sizes. We compare three or four candidates on rented machines before any purchase.' },
        { q: 'Which machine do we need?', a: 'It follows from the chosen model: about 2 GB of memory per billion parameters at 16 bits and 0.6 GB at 4 bits, plus context and simultaneous requests. An 8- to 14-billion model fits comfortably on a 24 GB card at 4 bits; 32 billion just fits there or comfortably on 48 GB; 70 billion needs 48 GB or several cards. These are orders of magnitude; the load test with your real number of users decides.' },
        { q: 'How many people can one machine serve?', a: 'It depends on the server more than on the card: an inference server that batches requests arriving together and keeps the prefix cached serves a team where a script serves one person. The exact number is measured in the week-five load test, with your documents and your answer length, and the queue is read every week afterwards.' },
        { q: 'Is it more costly than an API?', a: 'The cost changes nature: fixed, a machine, its electricity and its operation, instead of per request and in foreign currency. Below a certain volume, the API costs less; above it, the machine pays for itself. The threshold is computed with your volume measured in the pilot, not with a general figure, and the constraint on documents often decides before cost does.' },
        { q: 'How long to deploy?', a: 'Ten weeks: one for the constraint and functions, one for the evaluation set, two to choose the model on rented machines, two for the machine and the model server, three for the functions and the pilot, one for operations and recovery. No hardware purchase before week four.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'On-site deployment is not a badge of seriousness: it is the answer to a written constraint, where documents are allowed to go.' },
      { after: 4, text: 'Size does not tell language: the model is chosen on your cases in Arabic, French and darija, then the machine follows from the model.' },
    ],
    cta: { eyebrow: 'Tell us which documents must not leave', title: 'Bank, government, clinic, manufacturer or SaaS vendor: we deploy the model on your servers, chosen on your cases in Arabic, French and darija, with the same orchestration as an API, load and quality in plain sight', body: 'Symloop builds AI functions in production for companies in Algeria and founders settled in France, and deploys them where your contracts require: open model chosen on your evaluation set, machine sized on the model and the number of users, inference server with batching and cache, no outbound access, log per request, backup and recovery, updates through the evaluation set. NOOR, our sovereign AI platform, for institutions that want a ready base. Code, fine-tuned weights and keys in your name.' },
    related: { label: 'Read next', items: [
      { href: L.ia, kind: '2027', name: 'AI in the app: six functions, cost per request' },
      { href: L.heberger, kind: '2027', name: 'Hosting in Algeria or in Europe' },
      { href: L.recherche, kind: '2027', name: 'Search in Arabic, French and darija' },
      { href: L.whatsapp, kind: '2027', name: 'AI agent on WhatsApp: architecture and cost' },
    ] },
  },
  ar: {
    kind: 'ذكاء اصطناعي خاص · نماذج مفتوحة · خوادم · 2027', title: 'نشر نموذج ذكاء اصطناعي على خوادمكم في الجزائر سنة 2027: متى نفعل ذلك، أي نموذج، أي آلة، كيف يُخدَّم، كم يكلّف الطلب، ومتى نبقى على API في أوروبا',
    dek: '«وثائقنا لا تخرج.» تأتي الجملة من بنك أو إدارة أو مصحة أو صناعي، وتوقف مشروع الذكاء الاصطناعي في أول موعد، لأن كل ما عُرض عليهم يستدعي API في الخارج. يصف هذا الدليل كيف يُنشر نموذج مفتوح على خوادمكم: القيد المكتوب الذي يقرر ما يبقى في الموقع، النموذج المختار على مجموعة تقييمكم بالعربية والفرنسية والدارجة، البطاقة المحجَّمة على حجم النموذج، خادم الاستدلال الذي يجعل آلة واحدة تخدم ثلاثين شخصاً، التكلفة الثابتة مقابل التكلفة لكل طلب، والحالات التي يبقى فيها API في أوروبا الجواب الصحيح.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['ذكاء اصطناعي خاص', 'نماذج مفتوحة', 'خوادم', 'تكلفة الطلب', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** نشر نموذج على خوادمكم ليس علامة جدية: بل جواب عن **قيد مكتوب**، أين يحق للوثائق أن تذهب. حين يوجد، بنك أو إدارة أو صحة أو موقع صناعي معزول، يُثبَّت **نموذج مفتوح** على آلة لكم، خلف **التنسيق نفسه** كما مع API: تعليمات، استرجاع وثائق، مخططات، تحويل بشري، سجل. ويُختار النموذج على **مجموعة تقييمكم من ستين حالة حقيقية** بالعربية والفرنسية والدارجة، لا على ترتيب: الحجم لا يقول اللغة. وتُحجَّم الآلة على ذاكرة الأوزان، نحو **2 غيغابايت لكل مليار معلمة بـ 16 بت و0,6 غيغابايت بـ 4 بت**، زائد السياق. و**خادم استدلال** يجمّع الطلبات ويخزّن البادئة ويخدّم أوزاناً مكمَّمة؛ وهذا ما يجعل بطاقة واحدة تخدم فريقاً. وتصير التكلفة **ثابتة**، آلة وتشغيلها، بدل أن تكون لكل طلب. وحين لا يوجد القيد، يصل API في أوروبا أسرع ويجيب أفضل. عشرة أسابيع، ولا بطاقة تُشترى قبل الرابع.',
      'هذا الدليل موجّه إلى مديرية الإعلام الآلي في بنك أو شركة تأمين أو إدارة قيل لها إن الذكاء الاصطناعي «في السحابة»، وإلى المصحة والصناعي اللذين لا تخرج بياناتهما، وإلى ناشر SaaS الذي يشترط أحد زبائنه أن يبقى كل شيء في الجزائر. لا يعيد ذكر الوظائف التي تُبنى، الموصوفة في [دليل الذكاء الاصطناعي في التطبيق](' + L.ia + ')، ولا أين يُستضاف التطبيق نفسه، الموصوف في [دليل الاستضافة](' + L.heberger + ')؛ بل يصف ما يُركَّب بين التنسيق والبطاقة الرسومية، ويمدّ [صفحتنا عن وظائف الذكاء الاصطناعي](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله الأرقام', body: [
        'حجم النموذج لا يقول لغته. بطاقة نموذج Llama 3.3 بسبعين مليار معلمة، الصادرة عن Meta في 6 ديسمبر 2024 بنافذة سياق من 128 000 رمز، تسرد **ثماني لغات مدعومة رسمياً: الإنجليزية والألمانية والفرنسية والإيطالية والبرتغالية والهندية والإسبانية والتايلاندية**؛ والعربية ليست بينها، وتوضح البطاقة أن المطورين يستطيعون ضبطه للغات أخرى. وبالمقابل، عائلة Jais 3 المعلَنة في 15 أكتوبر 2026 من معهد النماذج الأساسية في MBZUAI وInception42 تقترح **ستة نماذج مفتوحة من 900 مليون إلى 375 مليار معلمة** مبنية للعربية الفصحى ولهجات «إلى عربية شمال أفريقيا»؛ ننقل الإعلان الصحفي، والرخصة تُقرأ على المستودع. وما يفرضه ذلك: يُختار النموذج على وثائقكم ورسائلكم، بالعربية والفرنسية والدارجة، لا على عدد المعلمات.',
        'آلة واحدة تخدم عدة أشخاص شرط الخادم المناسب. وثائق vLLM، مكتبة الاستدلال المفتوحة التي نستعملها، تسرد **التجميع المستمر للطلبات الواردة**، و**تخزين البادئة**، وإدارة ذاكرة الانتباه، و**أوزاناً مكمَّمة** بـ 8 و4 بت بعدة صيغ، و**API متوافقاً** مع واجهات الناشرين، ودعم بطاقات NVIDIA وAMD، والتوازي على عدة بطاقات. وما يفرضه ذلك: الانتقال من API إلى نموذج في الموقع لا يعيد كتابة التطبيق، لأن التنسيق يتكلم الواجهة نفسها؛ والسؤال ليس «كم رمزاً في الثانية» بل «كم شخصاً في الوقت نفسه، وبأي انتظار».',
        'الذاكرة تُحسب قبل الشراء. الوزن المخزَّن بـ 16 بت يأخذ بايتين: فالنموذج يأخذ نحو **2 غيغابايت لكل مليار معلمة**، ونحو **0,6 غيغابايت بـ 4 بت**؛ وتُضاف ذاكرة السياق التي تكبر مع طول الوثائق وعدد الطلبات المتزامنة. وهذه رتب حجم لا بطاقة تقنية: نموذج من 8 مليارات يتسع بـ 4 بت على بطاقة 24 غيغابايت بهامش، ونموذج من 32 مليار يتسع بالكاد، ونموذج من 70 مليار يطلب 48 غيغابايت أو عدة بطاقات. وما لم نجده ولا نذكره: سعر علني للبطاقات في الجزائر، وهو يتوقف على الاستيراد ويتغير؛ ولهذا يُختار النموذج أولاً على آلات مؤجَّرة بالساعة، وتُشترى الآلة بعد ذلك.',
      ] },
      { heading: 'طلب واحد، طريقان', body: [
        'النشر الخاص لا يحل محل API: بل يضيف طريقاً، والتنسيق يختار طلباً طلباً.',
      ], visual: 'parcours', after: [
        '**داخل أسواركم**: يستدعي التطبيق التنسيق، الذي يحضّر الطلب ويسترجع الوثائق المفيدة فقط ويستدعي النموذج المخدَّم على آلتكم؛ لا شيء يخرج من الشبكة، لا الوثيقة ولا السؤال ولا الجواب ولا السجل. هذا طريق كل ما يحتوي وثيقة زبون أو ملفاً طبياً أو بطاقة هوية. **خارج أسواركم**: لما لا يحتوي شيئاً من ذلك، صياغة عامة أو ترجمة أو سؤال عن نص علني، يستطيع التنسيق استدعاء نموذج أقدر مستضاف في أوروبا، بالبيانات الضرورية فقط وعقد باسمكم. تُكتب القاعدة في الأسبوع الأول، لكل نوع طلب، ويطبقها التنسيق، ولا تُترك لتقدير المستعمل.',
        '**ما يتغير**: الوثائق لا تذهب إلى أي مكان؛ والتكلفة تصير ثابتة، آلة وتشغيلها، بدل أن تكبر مع كل طلب وتُدفع بالعملة الأجنبية كما يصف [دليل دفع تكاليف السحابة](' + L.payer + ')؛ والجودة تصير سؤالاً يُقاس، لأن نموذجاً مفتوحاً متوسط الحجم لا يساوي أفضل نموذج مغلق في كل المهام، لكنه يتقن استخراجاً أو فرزاً أو بحثاً في وثائقكم. وطريق واحد وحده يكاد لا يكون الجواب الصحيح أبداً: الكل في الموقع يحرم ما ليس حساساً من النماذج الأقدر، والكل في أوروبا يستبعد ما لا يجوز أن يخرج.',
      ] },
      { heading: 'نموذج على خوادمكم، في خمس طبقات', body: [
        'خمس طبقات، اثنتان منها هما بالضبط طبقتا وظيفة مبنية على API.',
      ], visual: 'couches', after: [
        '**التطبيق** لا يتغير: يستدعي التنسيق ولا يعرف أين يعمل النموذج. **التنسيق** هو نفسه الموصوف في [دليل الذكاء الاصطناعي في التطبيق](' + L.ia + '): تعليمات مُصدَرة، استرجاع، مخططات مخرج، عتبات، تحويل بشري، سجل؛ ويكسب قاعدة واحدة، اختيار الطريق. **خادم النماذج** هو الطبقة المضافة: خادم استدلال مفتوح يعرض API متوافقاً، ويجمّع الطلبات التي تصل معاً، ويحفظ البادئة المشتركة مخزَّنة، ويخدّم أوزاناً مكمَّمة؛ وتبديل النموذج ملف وإعادة تشغيل لا مشروع.',
        '**الآلة** تحمل بطاقة رسومية أو أكثر، وذاكرة، وتخزيناً للأوزان والفهارس، ومزوّد طاقة احتياطياً، وشبكة داخلية، وبلا وصول خارجي؛ وتُحجَّم على النموذج المختار وعدد الطلبات المتزامنة المقاس في التجريب. **التشغيل** يقرأ كل أسبوع حمل البطاقة والطابور والكمون والدرجة على مجموعة التقييم، وينسخ الأوزان والفهارس، ويمرر كل تحديث للنموذج بمجموعة التقييم قبل الإنتاج، كما يفعل [دليل التسليم](' + L.livrer + ') مع الكود.',
      ] },
      { heading: 'أي نموذج يتسع على أي بطاقة', body: [
        'سؤال «أي آلة نحتاج» يُجاب عنه بالعكس: أي نموذج يحفظ الدرجة على حالاتكم، وكم ذاكرة يحتاج.',
      ], visual: 'dimension', after: [
        '**النماذج الصغيرة، نحو 8 مليارات معلمة**، تتسع بـ 4 بت في نحو 5 غيغابايت: تكفي لفرز الرسائل في فئات مغلقة واستخراج حقول بسيطة، وتجيب كثيرين بسرعة. **نحو 14 مليار**، قرابة 9 غيغابايت بـ 4 بت: استخراج من وثائق أكثر تنوعاً، ملخصات. **نحو 32 مليار**، قرابة 20 غيغابايت بـ 4 بت، أي على بطاقة 24 غيغابايت بهامش قليل للسياق أو براحة على 48: بحث في الوثائق بجواب مسنَد، وكلاء بأدوات. **نحو 70 مليار**، قرابة 42 غيغابايت بـ 4 بت: استدلال أطول وصياغة، على بطاقة 48 غيغابايت أو عدة بطاقات.',
        '**التكميم** بـ 4 بت يقسم الذاكرة على أكثر من ثلاثة ويكلّف قليلاً من الجودة؛ كم بالضبط، يُقاس على مجموعة تقييمكم وظيفةً وظيفة ولا يُفترض. **اللغة** قبل الحجم: نموذج من 70 مليار لا يذكر العربية قد يكون أسوأ على صوتية بالدارجة من نموذج عربي أصغر بأربع مرات، وتفريغ الصوت يتم بنموذج تعرف مخصص. **القاعدة**: أصغر نموذج يحفظ الدرجة لكل وظيفة، وكثيراً نموذجان على الآلة نفسها، صغير للفرز ومتوسط للبحث، بدل واحد كبير لكل شيء.',
      ] },
      { heading: 'ست حالات، وما نركّبه لكل منها', body: [
        'ست حالات نلقاها، والتركيب المختار في الأسبوع الأول لكل منها.',
      ], visual: 'situations', after: [
        '**البنك وشركة التأمين والإدارة**: وثائق الزبائن لا تخرج من المؤسسة وأحياناً لا من الشبكة؛ الكل في الموقع، نموذج مفتوح، فهرس وسجل على خوادمكم، بلا وصول خارجي، وآلة ثانية للاستعادة. **المصحة والمخبر**: قراءة الملفات والوصفات في الموقع؛ والصياغة العامة نحو أوروبا بلا بيانات مرضى؛ تركيب مختلط. **الصناعي والموقع المعزول**: الاتصال لا يصمد؛ نموذج صغير على بطاقة، دون اتصال، تحديثات تُحمل، سجل يتزامن حين يعود الربط، على مبدأ [العمل دون اتصال](' + L.offline + ').',
        '**الموزّع وبوابة B2B**: كتالوج وطلبيات قليلة الحساسية؛ API في أوروبا أولاً بتخزين واسترجاع؛ والانتقال إلى الموقع يُقرَّر حين يجعل الحجم الشهري الآلة أقل كلفة من الطلبات. **المؤسس في فرنسا**: لا قاعة خوادم وإطلاق يجب الوفاء به؛ API في أوروبا والتنسيق له منذ البداية، والانتقال إلى الموقع يبقى ممكناً بلا إعادة كتابة. **ناشر SaaS**: زبائن يقبلون أوروبا وآخرون يشترطون الجزائر أو أسوارهم؛ الطريقان في التنسيق نفسه يُختاران لكل زبون، كالعزل الموصوف في [دليل SaaS متعدد المستأجرين](' + L.saas + ')، ونموذج في الموقع يُباع كخطة.',
      ] },
      { heading: 'ستة إخفاقات لنموذج في الموقع', body: [
        'ستة إخفاقات نراها في عمليات النشر الخاصة التي نستلمها، وما تفعله الهندسة ضد كل منها.',
      ], visual: 'pannes', after: [
        '**البطاقة المشبعة**: عشرون شخصاً يسألون في اللحظة نفسها وكل واحد ينتظر دقيقة؛ طلبات يجمّعها الخادم، طابور بأولوية، حد للرموز، نموذج صغير للفرز، والحمل يُقرأ كل أسبوع. **النموذج الأكبر من اللازم**: اختير الأكبر «للاطمئنان» فلا يتسع أو يجيب في عشر ثوانٍ؛ الحجم يُختار لكل وظيفة على مجموعة التقييم، التكميم يُقاس، والأصغر الذي يحفظ الدرجة. **العربية مخدومة سيئاً**: النموذج المختار على ترتيب بالإنجليزية يجيب سيئاً بالعربية والدارجة؛ نماذج تُقارَن على حالاتكم الستين باللغات الثلاث، ونموذج عربي للصوت واللهجة.',
        '**التحديث الذي يكسر**: نموذج جديد يحل محل القديم وثلاث وظائف تتراجع دون أن يرى أحد؛ كل تغيير في النموذج أو التكميم يمر بمجموعة التقييم، يُرفض التسليم إن انخفضت الدرجة، وتراجع بأمر واحد. **الخادم المكشوف**: API النموذج يجيب على الشبكة بلا مصادقة؛ خادم لا يصله إلا التنسيق، بلا وصول خارجي، سجل لكل مستعمل، مفاتيح تُدوَّر. **الآلة الوحيدة**: تتعطل البطاقة أو الكهرباء؛ مزوّد طاقة احتياطي، نسخ الأوزان والفهارس، آلة ثانية، أو احتياط مكتوب نحو أوروبا لما يحق له. ولا واحد منها يُحل بشراء بطاقة أكبر.',
      ] },
      { heading: 'رأيناه في مكان آخر: بطاقة Llama وJais 3 وvLLM، وما ينتقل', body: [
        'ثلاثة مصادر تقول الجوهر. تقول بطاقة Llama 3.3 إن نموذجاً بسبعين مليار معلمة يسرد ثماني لغات ليست العربية بينها؛ وما ينتقل هو أن نموذجاً عاماً كبيراً يُختبر على عربيتكم قبل تثبيته. ويقول إعلان Jais 3 إن نماذج مفتوحة مبنية للعربية ولهجاتها توجد بعدة أحجام؛ وما ينتقل هو أن نموذجاً عربياً متوسط الحجم مرشح جدي للصوت واللهجة، يُقارَن على حالاتكم.',
        'وتقول وثائق vLLM إن خادماً مفتوحاً يجمّع الطلبات ويخزّن البادئة ويخدّم أوزاناً مكمَّمة ويعرض API متوافقاً؛ وما ينتقل هو أن وظيفة مبنية على API تنتقل إلى الموقع بلا إعادة كتابة إن كان التنسيق لكم. وما لا تقوله هذه المصادر: أي وثائق يحق لها الخروج عندكم، وكم شخصاً سيستعلم النموذج في الوقت نفسه، وأي نموذج يحفظ الدرجة على حالاتكم؛ والأسابيع الأربعة الأولى من المشروع تجيب، بلا شراء.',
      ] },
      { heading: 'قواعد نموذج في الموقع يصمد', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **القيد أولاً**: أين يحق لكل نوع وثيقة أن يذهب، كتابةً، قبل أي اختيار تقني. **مجموعة التقييم تختار النموذج**، بالعربية والفرنسية والدارجة؛ لا ترتيب. **لا شيء يُشترى قبل المقارنة** على آلات مؤجَّرة بالساعة. **أصغر نموذج يحفظ الدرجة** لكل وظيفة؛ نموذجان بدل واحد كبير. **التنسيق هو نفسه كما مع API** وهو لكم: الطريق ضبطٌ. **كل تحديث يمر بمجموعة التقييم**، مع تراجع.',
        'قاعدة سابعة تخص عرض السعر: «ذكاء اصطناعي سيادي في الموقع» ليس متطلباً بل جملة؛ المتطلب يُكتب «قائمة أنواع الوثائق وطريقها المسموح؛ نموذج مفتوح مختار على ستين حالة حقيقية باللغات الثلاث بدرجة مقاسة؛ آلة محجَّمة لـ N طلباً متزامناً بزمن انتظار مقاس في اختبار الحمل؛ خادم استدلال بتجميع وتخزين؛ بلا وصول خارجي؛ سجل لكل طلب؛ نسخ الأوزان والفهارس؛ إجراء تحديث وتراجع؛ استعادة مكتوبة»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يسعّر «خادم GPU» سعّر آلة لا وظيفة.',
      ] },
      { heading: 'ست وظائف، وعلى أي طريق نضعها', body: [
        'ست وظائف نبنيها كثيراً، والطريق المختار حين يوجد قيد.',
      ], list: [
        '**قراءة الفواتير والوثائق والملفات.** في الموقع: الوثيقة نفسها هي الحساسة؛ نموذج قراءة ثم نموذج متوسط لملء الحقول.',
        '**البحث في العقود والإجراءات.** في الموقع: الفهرس والوثائق على خوادمكم، جواب مسنَد؛ وجزء الكلمات المفتاحية يتبع [دليل البحث](' + L.recherche + ').',
        '**فرز الرسائل والبريد.** في الموقع، نموذج صغير: فئات مغلقة، حجم كبير، جواب سريع.',
        '**تفريغ الصوتيات بالدارجة.** في الموقع حين تأتي الصوتيات من زبائن: نموذج تعرف عربي متعدد اللهجات يُختبر على صوتياتكم.',
        '**الوكيل على WhatsApp.** الرسالة تمر عبر Meta أياً كان النموذج، كما يصف [دليل وكيل WhatsApp](' + L.whatsapp + ')؛ النموذج يمكن أن يكون في الموقع لكن القناة لا، ويُقال ذلك للزبون.',
        '**الصياغة العامة والترجمة وتلخيص النصوص العلنية.** أوروبا: لا بيانات حساسة، والنماذج الأقدر هناك.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم نشر خاص كامل في عشرة أسابيع، اثنان بلا كود ولا بطاقة تُشترى قبل الرابع.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب القيد والوظائف: أين يحق لكل نوع وثيقة أن يذهب، الوظيفتان أو الثلاث، ما يبقى في الموقع وما يجوز أن يخرج؛ موقَّع. **الأسبوع 1 إلى 2** يكتب مجموعة التقييم: ستون حالة حقيقية بالعربية والفرنسية والدارجة بالجواب الصحيح. **الأسبوعان 2 إلى 4** يختاران النموذج: ثلاثة أو أربعة نماذج مفتوحة تُقارَن على المجموعة، على آلات مؤجَّرة بالساعة، بـ 16 وبـ 4 بت؛ والحجم والتكميم المختاران يقرران الآلة. **الأسبوعان 4 إلى 6** يثبّتان الآلة وخادم النماذج، بلا وصول خارجي، بتخزين وطابور واختبار حمل بالعدد الحقيقي للمستعملين.',
        '**الأسابيع 6 إلى 9** توصل التنسيق بالنموذج في الموقع وتسلّم الوظائف واحدة واحدة، ثم التجريب بتحويل بشري، والحصة المحوَّلة إلى إنسان والانتظار تُقرأ كل يوم. **الأسبوع 9 إلى 10** يثبّت التشغيل: إشراف أسبوعي، نسخ الأوزان والفهارس، إجراء التحديث عبر مجموعة التقييم، وتمرين على عطل الآلة. وتكلفة التشغيل، كهرباء وصيانة واستبدال، تنضم إلى الميزانية السنوية الموصوفة في [دليل إبقاء التطبيق حياً](' + L.vivre + ').',
      ] },
      { heading: 'ما يُفشل النشر الخاص', body: [
        'عمليات النشر الخاصة التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**الآلة تُشترى أولاً.** بطاقة مختارة على بطاقة تقنية، ثم نموذج يُحاوَل إدخاله عليها.',
        '**النموذج مختار على ترتيب.** الأول بالإنجليزية، ومتوسط على وثائقكم بالعربية.',
        '**لا خادم استدلال.** سكربت يحمّل النموذج ويخدم شخصاً واحداً في كل مرة.',
        '**الكل في الموقع من حيث المبدأ.** مهام بلا أي بيانات حساسة محرومة من أفضل النماذج.',
        '**لا مجموعة تقييم.** الجودة انطباع، وكل تحديث رهان.',
        '**API النموذج مفتوح على الشبكة.** بلا مصادقة ولا سجل؛ ولا أحد يعرف من سأل ماذا.',
        '**لا استعادة.** آلة واحدة ولا نسخ للفهارس؛ والعطل يدوم أسابيع.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مديريات الإعلام الآلي ومسيّرين في الجزائر وناشري SaaS.',
      ], faq: [
        { q: 'هل يجب أن ننشر النموذج على خوادمنا؟', a: 'فقط إن اشترطه قيد مكتوب: وثائق زبائن أو ملفات صحية أو بيانات لا يجوز أن تخرج من المؤسسة أو البلد، أو موقع بلا اتصال موثوق. وبلا هذا القيد، يصل API مستضاف في أوروبا خلف تنسيق يخصكم أسرع ويتيح النماذج الأقدر؛ والانتقال إلى الموقع يبقى ممكناً لاحقاً بلا إعادة كتابة.' },
        { q: 'أي نموذج مفتوح نختار للعربية والفرنسية؟', a: 'الذي يحفظ الدرجة على حالاتكم الستين الحقيقية باللغات الثلاث، والدارجة منها. الحجم لا يقول اللغة: بطاقة نموذج عام كبير بسبعين مليار معلمة تسرد ثماني لغات بلا العربية، بينما توجد عائلات مبنية للعربية ولهجاتها بعدة أحجام. نقارن ثلاثة أو أربعة مرشحين على آلات مؤجَّرة قبل أي شراء.' },
        { q: 'أي آلة نحتاج؟', a: 'تُستنتج من النموذج المختار: نحو 2 غيغابايت ذاكرة لكل مليار معلمة بـ 16 بت و0,6 بـ 4 بت، زائد السياق والطلبات المتزامنة. نموذج من 8 إلى 14 مليار يتسع براحة على بطاقة 24 غيغابايت بـ 4 بت؛ و32 مليار يتسع بالكاد عليها أو براحة على 48؛ و70 مليار يطلب 48 أو عدة بطاقات. هذه رتب حجم؛ واختبار الحمل بعددكم الحقيقي من المستعملين يحسم.' },
        { q: 'كم شخصاً تخدم آلة واحدة؟', a: 'يتوقف ذلك على الخادم أكثر من البطاقة: خادم استدلال يجمّع الطلبات التي تصل معاً ويحفظ البادئة مخزَّنة يخدم فريقاً حيث يخدم سكربت شخصاً واحداً. والعدد الدقيق يُقاس في اختبار الحمل في الأسبوع الخامس، بوثائقكم وطول أجوبتكم، والطابور يُقرأ كل أسبوع بعد ذلك.' },
        { q: 'هل هو أكثر كلفة من API؟', a: 'التكلفة تغيّر طبيعتها: ثابتة، آلة وكهرباؤها وتشغيلها، بدل أن تكون لكل طلب وبالعملة الأجنبية. تحت حجم معين يكلّف API أقل؛ وفوقه تسترد الآلة ثمنها. والعتبة تُحسب بحجمكم المقاس في التجريب لا برقم عام، والقيد على الوثائق يقرر كثيراً قبل التكلفة.' },
        { q: 'كم من الوقت للنشر؟', a: 'عشرة أسابيع: واحد للقيد والوظائف، واحد لمجموعة التقييم، اثنان لاختيار النموذج على آلات مؤجَّرة، اثنان للآلة وخادم النماذج، ثلاثة للوظائف والتجريب، واحد للتشغيل والاستعادة. ولا شراء للعتاد قبل الأسبوع الرابع.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'النشر في الموقع ليس علامة جدية: بل جواب عن قيد مكتوب، أين يحق للوثائق أن تذهب.' },
      { after: 4, text: 'الحجم لا يقول اللغة: يُختار النموذج على حالاتكم بالعربية والفرنسية والدارجة، ثم تُستنتج الآلة من النموذج.' },
    ],
    cta: { eyebrow: 'قولوا لنا أي الوثائق لا يجوز أن تخرج', title: 'بنك أو إدارة أو مصحة أو صناعي أو ناشر SaaS: ننشر النموذج على خوادمكم، مختاراً على حالاتكم بالعربية والفرنسية والدارجة، بالتنسيق نفسه كما مع API، والحمل والجودة أمام أعينكم', body: 'تبني Symloop وظائف ذكاء اصطناعي في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا، وتنشرها حيث تشترط عقودكم: نموذج مفتوح مختار على مجموعة تقييمكم، آلة محجَّمة على النموذج وعدد المستعملين، خادم استدلال بتجميع وتخزين، بلا وصول خارجي، سجل لكل طلب، نسخ واستعادة، تحديث عبر مجموعة التقييم. وNOOR، منصتنا السيادية، للمؤسسات التي تريد قاعدة جاهزة. الكود والأوزان المضبوطة والمفاتيح باسمكم.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.ia, kind: '2027', name: 'الذكاء الاصطناعي في التطبيق: ست وظائف، تكلفة الطلب' },
      { href: L.heberger, kind: '2027', name: 'الاستضافة في الجزائر أم في أوروبا' },
      { href: L.recherche, kind: '2027', name: 'البحث بالعربية والفرنسية والدارجة' },
      { href: L.whatsapp, kind: '2027', name: 'وكيل ذكاء اصطناعي على WhatsApp: الهندسة والتكلفة' },
    ] },
  },
};

const KEYWORDS = "déployer modèle ia sur ses serveurs algérie 2027, llm privé on-premise algérie, ia souveraine algérie banque administration, modèle ouvert arabe llama mistral qwen jais, serveur gpu ia entreprise, vllm serveur d'inférence, quantification 4 bits mémoire gpu, coût par requête ia sur site vs api, ia documents confidentiels, private llm deployment algeria 2027, نشر نموذج ذكاء اصطناعي على خوادم خاصة الجزائر, ذكاء اصطناعي سيادي الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
