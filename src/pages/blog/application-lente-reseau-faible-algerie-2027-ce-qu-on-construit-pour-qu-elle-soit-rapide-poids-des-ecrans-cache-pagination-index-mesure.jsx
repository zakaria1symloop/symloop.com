import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure.mjs';

const SLUG = 'application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure';
const FIGURES = ['cascade', 'lenteurs', 'couches', 'budget', 'ecrans', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  livraison: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  mobile: '/blog/mettre-a-jour-une-application-mobile-sans-la-casser-algerie-2027-compatibilite-api-deploiement-progressif-mise-a-jour-forcee-correctif/',
  pwa: '/blog/pwa-ou-application-native-algerie-2027-quand-application-web-installable-suffit-quand-il-faut-les-stores/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  bloque: '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/',
  service: '/services/software-engineering/',
};

const CONTENT = {
  fr: {
    kind: 'Performance · Réseau faible · Application · 2027', title: "Votre application est lente chez vos clients en Algérie ? Ce qu'on construit en 2027 pour qu'elle soit rapide sur un réseau faible : poids des écrans, cache, pagination, index, et la mesure chez vos vrais utilisateurs",
    dek: "« Chez moi ça marche, chez le client ça rame. » C'est la phrase que nous entendons au premier rendez-vous sur presque toutes les applications que nous reprenons, et elle est vraie des deux côtés : l'application a été testée sur le téléphone du développeur, en wifi, à Alger, et elle est utilisée sur un Android de 2019, en 3G, à Sétif. Ce guide décrit ce qui rend une application lente, ce qu'on construit pour qu'elle soit rapide chez les gens qui l'utilisent vraiment, et comment on le prouve : un budget de performance écrit avant le code, des écrans légers, des images à la taille de l'écran, un appel d'API agrégé et paginé, des index, un cache, et la mesure au 75e percentile chez vos utilisateurs.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Performance', 'Réseau faible', 'Application mobile', 'Mesure', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une application est lente pour cinq raisons qui se règlent dans le code et une seule qui se règle dans l'hébergement. Les cinq : des écrans qui chargent tout le code et des images originales de 4 Mo ; des listes sans **pagination** ; **une requête par ligne** au lieu d'un appel agrégé ; des recherches **sans index** ; et tout rechargé à chaque ouverture faute de **cache**. Ce qu'on construit : un **budget par écran** écrit avant le code, cinq cents kilo-octets, trois requêtes, contenu principal affiché en 2,5 secondes sur un Android de 2019 en 3G simulée ; des images réduites et converties à l'envoi ; un appel d'API par écran, paginé, compressé, mis en cache ; des index sur ce qui est cherché et trié ; et la **mesure au 75e percentile** chez les vrais utilisateurs, par écran et par réseau, vérifiée par la chaîne de livraison. Six semaines, dont la première sans une ligne de code.",
      "Ce guide s'adresse au gérant dont les vendeurs attendent devant l'écran, au fondateur installé en France qui ne voit l'application que depuis la fibre, et au responsable qui doit comparer un devis « optimisation » avec un autre. Il ne redit pas où placer les serveurs, décrit dans [le guide sur l'hébergement](" + L.heberger + "), ni comment une application travaille sans réseau, décrit dans [le guide sur la synchronisation](" + L.offline + ") ; il décrit ce qui se construit pour qu'elle soit rapide quand il y a du réseau, même mauvais, et il prolonge [notre page sur l'ingénierie logicielle](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les chiffres disent', body: [
        "Les seuils de vitesse ont une définition publique, et elle est exigeante. Les indicateurs que Google utilise pour juger une page, les Core Web Vitals, fixent trois seuils « bons » : le contenu principal affiché « dans les 2,5 secondes » suivant le début du chargement, une réaction aux gestes de « 200 millisecondes ou moins », et un décalage visuel de « 0,1 ou moins » ; et ils demandent de mesurer « le 75e percentile des chargements, séparément sur mobile et sur ordinateur ». Ce que cela impose : on ne mesure pas une moyenne, qui cache le quart des utilisateurs les plus mal servis, mais le point au-dessous duquel trois clients sur quatre se trouvent ; et on le mesure sur mobile, séparément.",
        "Les images sont le premier poste, et le gain est documenté. Google indique qu'une image WebP avec pertes est « 25 à 34 % plus petite qu'une image JPEG comparable » à qualité égale, et qu'en sans perte elle est « 26 % plus petite » qu'un PNG ; mais le gain qui compte vraiment vient avant le format : une photo prise au téléphone pèse plusieurs méga-octets et s'affiche dans un carré de 300 pixels, et la réduire à cette taille divise son poids par dix ou plus avant toute conversion. Ce que cela impose : les images sont redimensionnées et converties à l'envoi, côté serveur, en plusieurs tailles, et l'écran demande la taille qu'il affiche.",
        "Le réseau de vos clients n'est pas celui du développeur, et les chiffres publics ne vous diront pas lequel c'est. Les médianes de débit mobile publiées pour l'Algérie varient fortement selon la source et la période, de l'ordre de quarante à soixante-dix mégabits par seconde dans les rapports de 2025 et 2026 qui s'appuient sur les mesures de Speedtest ; nous ne retenons aucun de ces chiffres, parce qu'une médiane nationale ne dit rien du vendeur dans l'arrière-boutique en 3G ni du client dans un sous-sol. Ce que cela impose : on relève les temps réels chez vos utilisateurs, par type de réseau et par wilaya, et on construit pour le 75e percentile de ce qu'on a mesuré, pas pour la moyenne nationale. Ce que nous n'avons pas trouvé : une étude publique des téléphones réellement utilisés en Algérie par année de fabrication ; ce que nous voyons dans les journaux de nos projets, c'est encore des téléphones de 2019, et nous le disons comme une observation.",
      ] },
      { heading: 'Le même écran, sur un réseau faible, avant et après', body: [
        "La vitesse ne se comprend pas sur un principe mais sur un écran réel, chargé deux fois sur le même réseau.",
      ], visual: 'cascade', after: [
        "**Avant.** La page HTML pèse 180 Ko et met plus d'une seconde. Trois scripts de 1,4 Mo au total, tout le code de l'application alors que l'écran n'en utilise qu'une fraction, en prennent trois et demie de plus. Douze images arrivent telles que le téléphone qui les a prises les a envoyées, 3,2 Mo, et occupent le réseau pendant sept secondes. Puis l'API : un premier appel renvoie toutes les commandes de l'année, 640 Ko, et cinq autres appels suivent l'un après l'autre pour les clients, les produits et les statuts, parce que le code en fait un par type d'information. L'écran est utilisable à 9,8 secondes, et le vendeur a déjà rappuyé deux fois.",
        "**Après.** La même liste, le même réseau. La page HTML pèse 40 Ko. Un seul script, celui de cet écran, 220 Ko, et le reste de l'application se charge plus tard, quand on en a besoin. Quatre images, celles qui sont visibles, réduites à la taille affichée et converties, 280 Ko ; les suivantes viennent au défilement. Un seul appel d'API, agrégé, paginé à cinquante lignes, compressé, 38 Ko, qui renvoie la page avec ses clients et ses produits. L'écran est utilisable à 1,9 seconde, et à la deuxième ouverture, le cache sert la page sans réseau. Les chiffres sont un exemple construit à partir de cas réels ; l'ordre de grandeur, cinq fois plus rapide sans changer de serveur, est celui que nous mesurons.",
      ] },
      { heading: "Six lenteurs que nous trouvons presque toujours", body: [
        "Six lenteurs reviennent sur presque toutes les applications que nous reprenons, et chacune a une construction qui la règle.",
      ], visual: 'lenteurs', after: [
        "**L'écran de 5 Mo** : tout le code chargé d'un coup et des images originales ; budget par écran, code découpé, images réduites et converties à l'envoi. **La liste de 2 000 lignes** : toutes les commandes de l'année dans un appel, puis l'écran qui bloque en les dessinant ; pagination côté serveur à cinquante lignes, tri et filtre dans la requête, défilement qui charge la suite. **Une requête par ligne** : pour chaque commande un appel pour le client et un pour le produit, deux cents appels pour une page ; un appel agrégé, et côté base une jointure plutôt qu'une boucle ; c'est la lenteur la plus fréquente et la plus invisible sur le wifi du développeur.",
        "**La recherche sans index** : chercher un client par téléphone parcourt toute la table, quatre secondes à cent mille lignes et pire chaque mois ; index sur les colonnes cherchées et triées, plan d'exécution lu avant la mise en production, seuil de 300 ms au 75e percentile ; la recherche dans un catalogue a ses propres règles, décrites dans [le guide sur la recherche](" + L.recherche + "). **Tout rechargé à chaque ouverture** : catalogue, images et réglages repartent de zéro ; cache HTTP avec validation, cache local des données stables, réseau seulement pour ce qui a changé. **Le serveur loin et lent** : c'est la seule lenteur qui se règle dans l'hébergement, et seulement après les cinq autres, parce qu'un écran qui fait vingt appels est lent même sur le meilleur serveur.",
      ] },
      { heading: "La vitesse d'une application, en cinq couches", body: [
        "Derrière ces six lenteurs, cinq couches, et celle où l'on gagne le plus n'est pas celle qu'on croit.",
      ], visual: 'couches', after: [
        "**Le téléphone et le réseau** : un Android de 2019, une 3G ou un wifi partagé, une batterie en mode économie ; vous ne les changez pas, vous construisez pour eux et vous testez dessus. **L'écran** : le code de cet écran seulement, des images à la taille affichée, un rendu qui montre quelque chose avant d'avoir tout reçu ; chaque écran a son budget. **L'API** : un appel agrégé par écran, pagination, compression, en-têtes de cache, temps de réponse mesuré au 75e percentile ; c'est la couche où l'on gagne le plus, en supprimant des appels plutôt qu'en les accélérant.",
        "**La base de données** : index sur ce qui est cherché et trié, jointures au lieu de boucles, plan d'exécution lu, requêtes lentes journalisées ; une table qui grossit chaque mois fait apparaître ce qui n'était pas visible au lancement, et c'est pour cela que la mesure continue après la mise en production. **La mesure** : temps réels relevés chez les utilisateurs, par écran, par type de réseau, par wilaya, au 75e percentile, et budget vérifié à chaque livraison, sur un écran bâti comme [le tableau de bord du gérant](" + L.dashboard + ") ; sans elle, « ça rame » et « ça marche » sont deux opinions, et la discussion avec le prestataire ne finit jamais.",
      ] },
      { heading: "Le budget de performance, écrit avant le code", body: [
        "Le budget est la pièce qui change tout : six chiffres par écran, écrits avant la première ligne et vérifiés à chaque livraison.",
      ], visual: 'budget', after: [
        "**Six mesures pour l'écran « liste des commandes »**, sur un Android de 2019 en 3G simulée : le poids du premier écran, HTML, scripts et images visibles compressés, 500 Ko ; les images visibles, 200 Ko ; les scripts avant affichage, 250 Ko ; les requêtes avant affichage, trois ; le temps de réponse de l'API au 75e percentile, 300 ms ; et le contenu principal affiché, 2,5 secondes, le seuil public. Sur le dessin, une barre dépasse : les images pèsent 280 Ko parce qu'une photo de produit arrive encore à sa taille d'origine ; la livraison est refusée, et la démonstration suivante montre la correction.",
        "**Trois règles tiennent le budget.** Il est écrit par écran, pas pour l'application, parce que la caisse se joue en centaines de millisecondes par geste et la carte en secondes. Il est mesuré sur le téléphone et le réseau de vos clients, pas sur ceux du développeur. Et il vit dans le dépôt de code, vérifié par la chaîne de livraison à chaque version, pas dans un document relu une fois : c'est ce qui empêche la vitesse de repartir à la version suivante, comme [le guide sur la livraison](" + L.livrer + ") le décrit pour les tests. Les valeurs du dessin sont un exemple ; les seuils de 2,5 secondes et de 300 ms sont ceux que nous écrivons par défaut.",
      ] },
      { heading: "Six écrans, et le budget que nous écrivons pour chacun", body: [
        "Un budget par écran, parce que six écrans n'ont pas la même vitesse à tenir.",
      ], visual: 'ecrans', after: [
        "**La liste des commandes** : cinquante lignes avec client, montant et statut ; 500 Ko, trois requêtes, 2,5 secondes, API à 300 ms. **La fiche produit avec photos** : 600 Ko dont 300 Ko d'images visibles, les suivantes au défilement ; c'est l'écran du [portail B2B](" + L.portail + ") que les détaillants ouvrent le plus. **La recherche dans le catalogue** : résultats pendant la frappe sur dix mille références, 200 ms par frappe au 75e percentile, index de recherche et jamais de parcours de table. **Le tableau de bord du gérant** : six chiffres par agence en une requête sur des agrégats précalculés, 1,5 seconde, rafraîchi toutes les soixante secondes et pas à chaque geste.",
        "**La caisse en magasin** : 100 ms par geste, catalogue en cache local, et elle fonctionne sans réseau, comme [le guide sur la caisse](" + L.caisse + ") l'exige. **La carte des livraisons** : deux cents points regroupés, fond de carte en cache, deux secondes, mise à jour par événements et non par rechargement, selon [le guide sur la plateforme de livraison](" + L.livraison + "). Chaque ligne est écrite au cahier des charges et mesurée à chaque démonstration ; un écran qui n'a pas de budget est un écran dont personne ne saura dire s'il est lent.",
      ] },
      { heading: "Vu ailleurs : les seuils publics, et ce qui se transpose", body: [
        "Deux sources disent l'essentiel. Les Core Web Vitals disent qu'une page est bonne quand le contenu principal s'affiche en 2,5 secondes, qu'elle réagit en 200 ms et ne bouge pas, mesurés au 75e percentile sur mobile ; ce qui se transpose, c'est le percentile et la séparation mobile, pas seulement les seuils, parce qu'une moyenne cache le quart de vos clients. La documentation de Google sur WebP dit 25 à 34 % de gain sur le JPEG ; ce qui se transpose, c'est que le format vient après la taille, et que les deux se font à l'envoi, côté serveur, une fois pour toutes.",
        "Ce que ces sources ne disent pas : quels téléphones et quels réseaux ont vos clients, et quel écran est vraiment lent ; la première semaine du projet y répond, sans une ligne de code, en relevant les temps réels chez vos utilisateurs.",
      ] },
      { heading: "Les règles d'une application rapide chez vos clients", body: [
        "Six règles, écrites la première semaine. **Un budget par écran**, écrit avant le code. **Mesuré sur le téléphone et le réseau de vos clients**, pas du développeur, au 75e percentile. **Les images sont réduites et converties à l'envoi**, et l'écran demande la taille qu'il affiche. **Un appel d'API par écran**, agrégé, paginé, compressé, mis en cache. **Des index sur ce qui est cherché et trié**, et les requêtes lentes journalisées. **Le budget vit dans la chaîne de livraison**, et une version qui le dépasse ne part pas.",
        "Une septième règle porte sur le devis : « optimisation des performances » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « budget par écran avec poids, requêtes, contenu principal en 2,5 s et API en 300 ms au 75e percentile ; mesure chez les vrais utilisateurs par écran, réseau et wilaya ; images redimensionnées et converties à l'envoi en plusieurs tailles ; code découpé par écran ; pagination côté serveur ; un appel agrégé par écran, pas de requête par ligne ; index et plan d'exécution ; cache HTTP et local ; tests sur Android de 2019 en 3G simulée ; budget vérifié par la chaîne de livraison », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui propose « un serveur plus puissant » en première ligne a proposé la sixième lenteur avant les cinq autres.",
      ] },
      { heading: "Six applications, et l'écran qui les ralentissait", body: [
        "Six applications que nous avons reprises ou construites, et pour chacune l'écran qui était lent et ce qui l'a réglé.",
      ], list: [
        "**L'application des commerciaux terrain**, décrite dans [le guide dédié](" + L.prevente + "). La fiche client chargeait l'historique complet des commandes ; pagination et agrégats, et la tournée du matin ne commence plus par une attente.",
        "**Le portail de commande B2B**, décrit dans [le guide dédié](" + L.portail + "). Le catalogue envoyait les photos originales des fournisseurs ; réduites à l'envoi, le catalogue passe de 11 Mo à 600 Ko.",
        "**La caisse**, décrite dans [le guide dédié](" + L.caisse + "). Chaque article ajouté faisait un appel au serveur ; catalogue en cache local, 100 ms par geste, et la file au comptoir a disparu.",
        "**Le tableau de bord**, décrit dans [le guide dédié](" + L.dashboard + "). Six chiffres recalculés sur toute la table à chaque ouverture ; agrégats précalculés, une requête, 1,5 seconde.",
        "**L'application reprise d'un prestataire disparu**, décrite dans [le guide dédié](" + L.bloque + "). Deux cents requêtes par page sans que personne ne le sache ; la première semaine de mesure l'a montré, la troisième l'a réglé.",
        "**Le commerce piloté depuis la France**, décrit dans [le guide dédié](" + L.commerce + "). Le fondateur voyait une application rapide depuis la fibre ; le tableau au 75e percentile par wilaya lui a montré ce que voyaient ses vendeurs.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une application rendue rapide en six semaines, dont la première sans une ligne de code.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** mesure chez les vrais utilisateurs : temps réels par écran, réseau et wilaya, téléphones réellement présents dans les journaux, et budget écrit par écran ; l'écran lent n'est presque jamais celui qu'on croyait. **La semaine 1 à 2** traite les écrans : code découpé, images réduites et converties à l'envoi, chargement de ce qui est visible d'abord ; c'est là que les gains sont les plus grands. **La semaine 2 à 3** traite l'API : un appel agrégé par écran, pagination, compression, en-têtes de cache, appels superflus supprimés. **La semaine 3 à 4** traite la base : index, jointures, requêtes lentes journalisées et corrigées.",
        "**La semaine 4 à 5** mesure chaque écran sur un Android de 2019 en 3G simulée et charge l'API comme un jour de pointe. **La semaine 5 à 6** fait entrer le budget dans la chaîne de livraison et installe le tableau au 75e percentile lu chaque semaine. Chaque lot est démontré comme [le guide sur la livraison](" + L.livrer + ") le décrit ; et quand l'application est mobile, la même discipline s'applique à chaque version, selon [le guide sur les mises à jour](" + L.mobile + "). Si après tout cela le serveur reste le goulot, [le guide sur l'hébergement](" + L.heberger + ") dit où le mettre ; c'est la sixième étape, pas la première.",
      ] },
      { heading: "Ce qui fait échouer une application rapide", body: [
        "Les applications lentes que nous reprenons le sont presque toujours pour l'une de ces raisons.",
      ], list: [
        "**Testée sur le téléphone du développeur.** Récent, en wifi, à Alger ; les clients ont des Android de 2019, en 3G, à Sétif.",
        "**Pas de budget.** Personne ne peut dire si l'écran est lent, donc personne ne le corrige.",
        "**Les photos originales.** Quatre méga-octets pour un carré de 300 pixels, multipliés par douze.",
        "**Une requête par ligne.** Invisible sur le wifi, dévastatrice en 3G.",
        "**La liste sans pagination.** Rapide au lancement, lente au sixième mois, bloquée au douzième.",
        "**Un serveur plus gros à la place du code.** La facture monte, l'écran fait toujours vingt appels.",
        "**Mesuré une fois.** La version suivante reperd tout, et personne ne le voit avant les clients.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et de responsables informatiques.",
      ], faq: [
        { q: 'Pourquoi l’application est-elle rapide chez nous et lente chez les clients ?', a: "Parce qu'elle a été testée sur un téléphone récent en wifi et qu'elle est utilisée sur des téléphones plus anciens en 3G ou sur un wifi partagé. Un écran qui fait vingt appels et charge cinq méga-octets passe inaperçu sur la fibre et prend dix secondes en 3G. On construit et on mesure pour le téléphone et le réseau de vos clients, au 75e percentile, pas pour ceux du développeur." },
        { q: 'Faut-il un serveur plus puissant ?', a: "Presque jamais en premier. Cinq des six lenteurs se règlent dans le code : poids des écrans, images, pagination, requête par ligne, index, cache. Un écran qui fait un appel au lieu de vingt est rapide même sur un serveur moyen. Le serveur vient en sixième, après la mesure, et le guide sur l'hébergement dit alors où le placer." },
        { q: 'Qu’est-ce qu’un budget de performance ?', a: "Six chiffres par écran, écrits avant le code et vérifiés à chaque livraison : poids du premier écran, images visibles, scripts avant affichage, nombre de requêtes, temps de réponse de l'API au 75e percentile, et affichage du contenu principal en 2,5 secondes sur un Android de 2019 en 3G simulée. Une version qui dépasse une de ces valeurs n'est pas livrée tant qu'elle n'est pas corrigée." },
        { q: 'Pourquoi le 75e percentile et pas la moyenne ?', a: "Parce que la moyenne cache le quart des utilisateurs les plus mal servis. Le 75e percentile est le temps au-dessous duquel trois clients sur quatre se trouvent ; c'est le point que les seuils publics de Google demandent de mesurer, séparément sur mobile, et c'est celui que nous écrivons au contrat." },
        { q: 'Combien gagne-t-on sur les images ?', a: "Le gain documenté par Google pour le format WebP est de 25 à 34 % par rapport au JPEG à qualité égale ; mais le gain qui compte vient avant : une photo de téléphone pèse plusieurs méga-octets et s'affiche dans un carré de 300 pixels, et la réduire à cette taille divise son poids par dix ou plus. Les deux se font à l'envoi, côté serveur, en plusieurs tailles, une fois pour toutes." },
        { q: 'Combien de temps pour rendre une application rapide ?', a: "Six semaines : une pour mesurer chez les vrais utilisateurs et écrire les budgets, une pour les écrans, une pour l'API, une pour la base, une pour mesurer sur un téléphone ancien en 3G simulée et charger l'API, une pour faire entrer le budget dans la chaîne de livraison. La première semaine est sans code, et elle décide de l'ordre des cinq autres." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Cinq fois plus rapide sans changer de serveur : c'est l'ordre de grandeur que nous mesurons quand l'écran passe de vingt appels à un." },
      { after: 4, text: "Sans mesure chez les vrais utilisateurs, « ça rame » et « ça marche » sont deux opinions, et la discussion ne finit jamais." },
    ],
    cta: { eyebrow: "Envoyez-nous l'écran dont vos vendeurs se plaignent", title: "Gérant en Algérie ou fondateur en France : nous rendons votre application rapide chez vos clients, sur leurs téléphones et leurs réseaux, et nous le prouvons par la mesure", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : mesure au 75e percentile chez les vrais utilisateurs, budget par écran, images réduites et converties à l'envoi, code découpé, pagination, appel agrégé par écran, index et plan d'exécution, cache HTTP et local, tests sur Android de 2019 en 3G simulée, budget vérifié par la chaîne de livraison. Code et mesures dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.heberger, kind: '2027', name: 'Héberger en Algérie ou en Europe' },
      { href: L.offline, kind: '2027', name: 'Application hors ligne et synchronisation' },
      { href: L.recherche, kind: '2027', name: 'La recherche dans une application' },
      { href: L.mobile, kind: '2027', name: 'Mettre à jour une application mobile sans la casser' },
    ] },
  },
  en: {
    kind: 'Performance · Weak network · Application · 2027', title: 'Is your application slow at your customers’ in Algeria? What gets built in 2027 to make it fast on a weak network: screen weight, cache, pagination, indexes, and measurement on your real users',
    dek: '“It works on my machine, it crawls at the customer’s.” That is the sentence we hear at the first meeting on almost every application we take over, and it is true on both sides: the app was tested on the developer’s phone, on wifi, in Algiers, and it is used on a 2019 Android, on 3G, in Sétif. This guide describes what makes an application slow, what gets built to make it fast for the people who actually use it, and how that is proved: a performance budget written before the code, light screens, images at screen size, one aggregated and paginated API call, indexes, a cache, and measurement at the 75th percentile on your users.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Performance', 'Weak network', 'Mobile app', 'Measurement', 'Algeria 2027'],
    intro: [
      '**Short answer.** An application is slow for five reasons fixed in the code and one fixed in hosting. The five: screens that load the whole code and 4 MB original images; lists with no **pagination**; **one request per row** instead of an aggregated call; searches **with no index**; and everything reloaded at every opening for lack of a **cache**. What gets built: a **budget per screen** written before the code, five hundred kilobytes, three requests, main content displayed in 2.5 seconds on a 2019 Android over simulated 3G; images resized and converted on upload; one API call per screen, paginated, compressed, cached; indexes on what is searched and sorted; and **measurement at the 75th percentile** on real users, per screen and per network, checked by the delivery pipeline. Six weeks, the first without a line of code.',
      'This guide is for the manager whose sales staff wait in front of the screen, the founder settled in France who only sees the app from a fibre connection, and the person who must compare one “optimisation” quote with another. It does not repeat where to place servers, described in [the hosting guide](' + L.heberger + '), nor how an app works without network, described in [the synchronisation guide](' + L.offline + '); it describes what is built so that it is fast when there is network, even bad, and extends [our page on software engineering](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the figures say', body: [
        'Speed thresholds have a public definition, and it is demanding. The indicators Google uses to judge a page, the Core Web Vitals, set three “good” thresholds: main content displayed “within 2.5 seconds” of the start of loading, a reaction to gestures of “200 milliseconds or less”, and a visual shift of “0.1 or less”; and they ask to measure “the 75th percentile of page loads, segmented across mobile and desktop devices”. What this imposes: you do not measure an average, which hides the worst-served quarter of users, but the point below which three customers out of four fall; and you measure it on mobile, separately.',
        'Images are the first item, and the gain is documented. Google states that a lossy WebP image is “25-34% smaller than comparable JPEG images” at equivalent quality, and that lossless it is “26% smaller” than PNG; but the gain that really counts comes before the format: a photo taken on a phone weighs several megabytes and is displayed in a 300-pixel square, and resizing it to that size divides its weight by ten or more before any conversion. What this imposes: images are resized and converted on upload, server-side, in several sizes, and the screen asks for the size it displays.',
        'Your customers’ network is not the developer’s, and public figures will not tell you which one it is. Published mobile speed medians for Algeria vary widely by source and period, roughly forty to seventy megabits per second in 2025 and 2026 reports drawing on Speedtest measurements; we keep none of these figures, because a national median says nothing about the salesperson in the back room on 3G or the customer in a basement. What this imposes: real timings are collected from your users, by network type and by wilaya, and you build for the 75th percentile of what was measured, not for the national average. What we did not find: a public study of the phones actually used in Algeria by year of manufacture; what we see in our projects’ logs is still 2019 phones, and we say so as an observation.',
      ] },
      { heading: 'The same screen, on a weak network, before and after', body: [
        'Speed is not understood on a principle but on a real screen, loaded twice on the same network.',
      ], visual: 'cascade', after: [
        '**Before.** The HTML page weighs 180 KB and takes over a second. Three scripts totalling 1.4 MB, the whole app’s code while the screen uses a fraction of it, take three and a half more. Twelve images arrive as the phone that took them sent them, 3.2 MB, and occupy the network for seven seconds. Then the API: a first call returns all the year’s orders, 640 KB, and five more calls follow one after another for customers, products and statuses, because the code makes one per kind of information. The screen is usable at 9.8 seconds, and the salesperson has already tapped twice more.',
        '**After.** The same list, the same network. The HTML page weighs 40 KB. One script, this screen’s, 220 KB, and the rest of the app loads later, when needed. Four images, the visible ones, resized to displayed size and converted, 280 KB; the next ones come on scroll. One API call, aggregated, paginated to fifty rows, compressed, 38 KB, returning the page with its customers and products. The screen is usable at 1.9 seconds, and on the second opening the cache serves the page without network. The figures are an example built from real cases; the order of magnitude, five times faster without changing server, is the one we measure.',
      ] },
      { heading: 'Six slownesses we almost always find', body: [
        'Six slownesses recur on almost every application we take over, and each has a build that fixes it.',
      ], visual: 'lenteurs', after: [
        '**The 5 MB screen**: all the code loaded at once and original images; budget per screen, code split, images resized and converted on upload. **The 2,000-row list**: all the year’s orders in one call, then the screen freezing while drawing them; server-side pagination at fifty rows, sort and filter in the query, scroll loading the next page. **One request per row**: for each order a call for the customer and one for the product, two hundred calls for a page; one aggregated call, and on the database side a join rather than a loop; it is the most frequent slowness and the most invisible on the developer’s wifi.',
        '**Search with no index**: finding a customer by phone scans the whole table, four seconds at a hundred thousand rows and worse every month; indexes on searched and sorted columns, execution plan read before production, 300 ms threshold at the 75th percentile; catalogue search has its own rules, described in [the search guide](' + L.recherche + '). **Everything reloaded on every opening**: catalogue, images and settings start from scratch; HTTP cache with validation, local cache of stable data, network only for what changed. **The far, slow server**: it is the only slowness fixed in hosting, and only after the other five, because a screen making twenty calls is slow even on the best server.',
      ] },
      { heading: 'An application’s speed, in five layers', body: [
        'Behind those six slownesses, five layers, and the one where you gain most is not the one people think.',
      ], visual: 'couches', after: [
        '**The phone and the network**: a 2019 Android, 3G or a shared wifi, a battery in saving mode; you do not change them, you build for them and test on them. **The screen**: this screen’s code only, images at displayed size, a render that shows something before receiving everything; every screen has its budget. **The API**: one aggregated call per screen, pagination, compression, cache headers, response time measured at the 75th percentile; it is the layer where you gain most, by removing calls rather than speeding them up.',
        '**The database**: indexes on what is searched and sorted, joins instead of loops, execution plan read, slow queries logged; a table growing every month reveals what was not visible at launch, which is why measurement continues after production. **Measurement**: real timings collected from users, per screen, per network type, per wilaya, at the 75th percentile, and the budget checked at every delivery, on a screen built like [the manager’s dashboard](' + L.dashboard + '); without it, “it crawls” and “it works” are two opinions, and the discussion with the supplier never ends.',
      ] },
      { heading: 'The performance budget, written before the code', body: [
        'The budget is the piece that changes everything: six figures per screen, written before the first line and checked at every delivery.',
      ], visual: 'budget', after: [
        '**Six measures for the “order list” screen**, on a 2019 Android over simulated 3G: first-screen weight, HTML, scripts and visible images compressed, 500 KB; visible images, 200 KB; scripts before display, 250 KB; requests before display, three; API response time at the 75th percentile, 300 ms; and main content displayed, 2.5 seconds, the public threshold. On the drawing one bar exceeds: images weigh 280 KB because one product photo still arrives at its original size; delivery is refused, and the next demo shows the fix.',
        '**Three rules hold the budget.** It is written per screen, not for the application, because the point of sale is a matter of hundreds of milliseconds per gesture and the map of seconds. It is measured on your customers’ phone and network, not the developer’s. And it lives in the code repository, checked by the delivery pipeline at every version, not in a document read once: that is what keeps speed from leaving with the next version, as [the delivery guide](' + L.livrer + ') describes for tests. The drawing’s values are an example; the 2.5-second and 300 ms thresholds are the ones we write by default.',
      ] },
      { heading: 'Six screens, and the budget we write for each', body: [
        'One budget per screen, because six screens do not have the same speed to hold.',
      ], visual: 'ecrans', after: [
        '**The order list**: fifty rows with customer, amount and status; 500 KB, three requests, 2.5 seconds, API at 300 ms. **The product sheet with photos**: 600 KB of which 300 KB visible images, the next on scroll; it is the [B2B portal](' + L.portail + ') screen retailers open most. **Catalogue search**: results while typing over ten thousand references, 200 ms per keystroke at the 75th percentile, a search index and never a table scan. **The manager’s dashboard**: six figures per branch in one request over precomputed aggregates, 1.5 seconds, refreshed every sixty seconds and not on every gesture.',
        '**The in-store point of sale**: 100 ms per gesture, catalogue in local cache, and it works without network, as [the point-of-sale guide](' + L.caisse + ') requires. **The delivery map**: two hundred clustered points, map tiles cached, two seconds, updated by events and not by reload, per [the delivery platform guide](' + L.livraison + '). Each row is written in the specification and measured at every demo; a screen with no budget is a screen nobody will be able to call slow.',
      ] },
      { heading: 'Seen elsewhere: the public thresholds, and what transposes', body: [
        'Two sources say the essentials. The Core Web Vitals say a page is good when main content shows in 2.5 seconds, it reacts in 200 ms and does not move, measured at the 75th percentile on mobile; what transposes is the percentile and the mobile split, not only the thresholds, because an average hides a quarter of your customers. Google’s WebP documentation says 25 to 34 % gain over JPEG; what transposes is that format comes after size, and both are done on upload, server-side, once and for all.',
        'What these sources do not say: which phones and networks your customers have, and which screen is really slow; the project’s first week answers that, without a line of code, by collecting real timings from your users.',
      ] },
      { heading: 'The rules of an application that is fast at your customers’', body: [
        'Six rules, written in week one. **A budget per screen**, written before the code. **Measured on your customers’ phone and network**, not the developer’s, at the 75th percentile. **Images are resized and converted on upload**, and the screen asks for the size it displays. **One API call per screen**, aggregated, paginated, compressed, cached. **Indexes on what is searched and sorted**, and slow queries logged. **The budget lives in the delivery pipeline**, and a version that exceeds it does not ship.',
        'A seventh rule concerns the quote: “performance optimisation” is not a requirement, it is a sentence; the requirement reads “budget per screen with weight, requests, main content in 2.5 s and API at 300 ms at the 75th percentile; measurement on real users per screen, network and wilaya; images resized and converted on upload in several sizes; code split per screen; server-side pagination; one aggregated call per screen, no request per row; indexes and execution plan; HTTP and local cache; tests on a 2019 Android over simulated 3G; budget checked by the delivery pipeline”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote proposing “a more powerful server” on its first line has proposed the sixth slowness before the other five.',
      ] },
      { heading: 'Six applications, and the screen that slowed them down', body: [
        'Six applications we took over or built, and for each the screen that was slow and what fixed it.',
      ], list: [
        '**The field sales app**, described in [the dedicated guide](' + L.prevente + '). The customer sheet loaded the full order history; pagination and aggregates, and the morning round no longer starts with a wait.',
        '**The B2B ordering portal**, described in [the dedicated guide](' + L.portail + '). The catalogue sent suppliers’ original photos; resized on upload, the catalogue goes from 11 MB to 600 KB.',
        '**The point of sale**, described in [the dedicated guide](' + L.caisse + '). Every added item made a server call; catalogue in local cache, 100 ms per gesture, and the queue at the counter is gone.',
        '**The dashboard**, described in [the dedicated guide](' + L.dashboard + '). Six figures recomputed over the whole table at every opening; precomputed aggregates, one request, 1.5 seconds.',
        '**The app taken over from a vanished supplier**, described in [the dedicated guide](' + L.bloque + '). Two hundred requests per page without anyone knowing; the first week of measurement showed it, the third fixed it.',
        '**The shop run from France**, described in [the dedicated guide](' + L.commerce + '). The founder saw a fast app from a fibre connection; the 75th-percentile board per wilaya showed them what their sales staff saw.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of an application made fast in six weeks, the first without a line of code.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** measures on real users: real timings per screen, network and wilaya, phones actually present in the logs, and a budget written per screen; the slow screen is almost never the one people thought. **Week 1 to 2** handles screens: code split, images resized and converted on upload, visible content loaded first; that is where gains are largest. **Week 2 to 3** handles the API: one aggregated call per screen, pagination, compression, cache headers, superfluous calls removed. **Week 3 to 4** handles the database: indexes, joins, slow queries logged and fixed.',
        '**Week 4 to 5** measures every screen on a 2019 Android over simulated 3G and loads the API like a peak day. **Week 5 to 6** puts the budget into the delivery pipeline and installs the 75th-percentile board read every week. Every batch is demoed as [the delivery guide](' + L.livrer + ') describes; and when the app is mobile, the same discipline applies to every version, per [the updates guide](' + L.mobile + '). If after all that the server remains the bottleneck, [the hosting guide](' + L.heberger + ') says where to put it; that is the sixth step, not the first.',
      ] },
      { heading: 'What makes a fast application fail', body: [
        'The slow applications we take over are almost always slow for one of these reasons.',
      ], list: [
        '**Tested on the developer’s phone.** Recent, on wifi, in Algiers; customers have 2019 Androids, on 3G, in Sétif.',
        '**No budget.** Nobody can say whether the screen is slow, so nobody fixes it.',
        '**Original photos.** Four megabytes for a 300-pixel square, times twelve.',
        '**One request per row.** Invisible on wifi, devastating on 3G.',
        '**The list without pagination.** Fast at launch, slow in month six, frozen in month twelve.',
        '**A bigger server instead of code.** The bill rises, the screen still makes twenty calls.',
        '**Measured once.** The next version loses it all, and nobody sees it before the customers.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and IT managers.',
      ], faq: [
        { q: 'Why is the app fast for us and slow for customers?', a: 'Because it was tested on a recent phone over wifi and is used on older phones over 3G or a shared wifi. A screen making twenty calls and loading five megabytes goes unnoticed on fibre and takes ten seconds on 3G. We build and measure for your customers’ phone and network, at the 75th percentile, not for the developer’s.' },
        { q: 'Do we need a more powerful server?', a: 'Almost never first. Five of the six slownesses are fixed in the code: screen weight, images, pagination, request per row, indexes, cache. A screen making one call instead of twenty is fast even on an average server. The server comes sixth, after measurement, and the hosting guide then says where to place it.' },
        { q: 'What is a performance budget?', a: 'Six figures per screen, written before the code and checked at every delivery: first-screen weight, visible images, scripts before display, number of requests, API response time at the 75th percentile, and main content displayed in 2.5 seconds on a 2019 Android over simulated 3G. A version exceeding one of these values is not delivered until fixed.' },
        { q: 'Why the 75th percentile and not the average?', a: 'Because the average hides the worst-served quarter of users. The 75th percentile is the time below which three customers out of four fall; it is the point Google’s public thresholds ask to measure, separately on mobile, and the one we write into the contract.' },
        { q: 'How much do you gain on images?', a: 'The gain Google documents for WebP is 25 to 34 % over JPEG at equal quality; but the gain that counts comes before: a phone photo weighs several megabytes and is displayed in a 300-pixel square, and resizing it to that size divides its weight by ten or more. Both are done on upload, server-side, in several sizes, once and for all.' },
        { q: 'How long to make an application fast?', a: 'Six weeks: one to measure on real users and write the budgets, one for screens, one for the API, one for the database, one to measure on an old phone over simulated 3G and load the API, one to put the budget into the delivery pipeline. The first week has no code, and it decides the order of the other five.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'Five times faster without changing server: that is the order of magnitude we measure when a screen goes from twenty calls to one.' },
      { after: 4, text: 'Without measurement on real users, “it crawls” and “it works” are two opinions, and the discussion never ends.' },
    ],
    cta: { eyebrow: 'Send us the screen your sales staff complain about', title: 'Manager in Algeria or founder in France: we make your application fast at your customers’, on their phones and networks, and prove it by measurement', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: measurement at the 75th percentile on real users, budget per screen, images resized and converted on upload, code split, pagination, aggregated call per screen, indexes and execution plan, HTTP and local cache, tests on a 2019 Android over simulated 3G, budget checked by the delivery pipeline. Code and measurements in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.heberger, kind: '2027', name: 'Hosting in Algeria or in Europe' },
      { href: L.offline, kind: '2027', name: 'Offline application and synchronisation' },
      { href: L.recherche, kind: '2027', name: 'Search inside an application' },
      { href: L.mobile, kind: '2027', name: 'Updating a mobile app without breaking it' },
    ] },
  },
  ar: {
    kind: 'الأداء · شبكة ضعيفة · تطبيق · 2027', title: 'تطبيقكم بطيء عند زبائنكم في الجزائر؟ ما يُبنى سنة 2027 ليكون سريعاً على شبكة ضعيفة: وزن الشاشات، الذاكرة المخبأة، التصفيح، الفهارس، والقياس عند مستعمليكم الحقيقيين',
    dek: '«عندي يعمل، وعند الزبون يزحف.» هذه الجملة نسمعها في أول لقاء عن كل التطبيقات التي نستلمها تقريباً، وهي صحيحة من الجانبين: اختُبر التطبيق على هاتف المطوّر، على الواي فاي، في الجزائر العاصمة، ويُستعمل على Android من 2019، بـ 3G، في سطيف. يصف هذا الدليل ما يجعل التطبيق بطيئاً، وما يُبنى ليكون سريعاً عند من يستعملونه فعلاً، وكيف نثبت ذلك: ميزانية أداء تُكتب قبل الكود، شاشات خفيفة، صور بحجم الشاشة، استدعاء واجهة واحد مجمَّع ومُصفَّح، فهارس، ذاكرة مخبأة، وقياس عند المئين 75 عند مستعمليكم.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الأداء', 'شبكة ضعيفة', 'تطبيق محمول', 'القياس', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** التطبيق بطيء لخمسة أسباب تُحل في الكود وسبب واحد يُحل في الاستضافة. الخمسة: شاشات تحمّل كل الكود وصوراً أصلية بـ 4 م.ب؛ قوائم بلا **تصفيح**؛ **طلب لكل سطر** بدل استدعاء مجمَّع؛ بحث **بلا فهارس**؛ وكل شيء يُعاد تحميله عند كل فتح لغياب **ذاكرة مخبأة**. وما يُبنى: **ميزانية لكل شاشة** تُكتب قبل الكود، خمسمئة كيلوبايت، ثلاثة طلبات، محتوى رئيسي يُعرض في 2,5 ثانية على Android من 2019 بـ 3G محاكاة؛ صور تُصغَّر وتُحوَّل عند الرفع؛ استدعاء واجهة واحد لكل شاشة، مُصفَّح، مضغوط، مخبأ؛ فهارس على ما يُبحث ويُرتَّب؛ و**قياس عند المئين 75** عند المستعملين الحقيقيين، لكل شاشة وشبكة، تفحصه سلسلة التسليم. ستة أسابيع، الأول بلا سطر كود.',
      'هذا الدليل موجّه إلى المسيّر الذي ينتظر بائعوه أمام الشاشة، وإلى المؤسس المقيم في فرنسا الذي لا يرى التطبيق إلا من الألياف، وإلى المسؤول الذي يجب أن يقارن عرض «تحسين» بآخر. لا يعيد أين توضع الخوادم، الموصوف في [دليل الاستضافة](' + L.heberger + ')، ولا كيف يعمل تطبيق دون شبكة، الموصوف في [دليل المزامنة](' + L.offline + ')؛ بل يصف ما يُبنى ليكون سريعاً حين توجد شبكة ولو رديئة، ويمدّ [صفحتنا عن هندسة البرمجيات](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله الأرقام', body: [
        'لعتبات السرعة تعريف علني، وهو صارم. المؤشرات التي تستعملها Google للحكم على صفحة، Core Web Vitals، تضع ثلاث عتبات «جيدة»: المحتوى الرئيسي يُعرض «خلال 2,5 ثانية» من بداية التحميل، ورد على الحركات بـ «200 ميلي ثانية أو أقل»، وانزياح بصري «0,1 أو أقل»؛ وتطلب قياس «المئين 75 من تحميلات الصفحة، مفصولاً بين الهاتف والحاسوب». وما يفرضه ذلك: لا نقيس متوسطاً يخفي ربع المستعملين الأسوأ خدمة، بل النقطة التي يقع تحتها ثلاثة زبائن من أربعة؛ ونقيسها على الهاتف منفصلة.',
        'الصور البند الأول، والمكسب موثَّق. تذكر Google أن صورة WebP بفقدان «أصغر بـ 25 إلى 34 % من صورة JPEG مماثلة» بجودة متساوية، وبلا فقدان «أصغر بـ 26 %» من PNG؛ لكن المكسب الذي يهم فعلاً يأتي قبل الصيغة: صورة ملتقطة بالهاتف تزن عدة ميغابايتات وتُعرض في مربع 300 بكسل، وتصغيرها إلى هذا الحجم يقسم وزنها على عشرة أو أكثر قبل أي تحويل. وما يفرضه ذلك: تُصغَّر الصور وتُحوَّل عند الرفع، في الخادم، بعدة أحجام، والشاشة تطلب الحجم الذي تعرضه.',
        'شبكة زبائنكم ليست شبكة المطوّر، والأرقام العلنية لن تقول لكم أيها هي. الوسيطات المنشورة لسرعة الهاتف في الجزائر تتباين كثيراً حسب المصدر والفترة، نحو أربعين إلى سبعين ميغابت في الثانية في تقارير 2025 و2026 المستندة إلى قياسات Speedtest؛ ولا نعتمد أياً منها، لأن وسيطاً وطنياً لا يقول شيئاً عن البائع في المخزن الخلفي بـ 3G ولا عن الزبون في قبو. وما يفرضه ذلك: تُجمع الأزمنة الحقيقية عند مستعمليكم حسب نوع الشبكة والولاية، ونبني للمئين 75 مما قسناه لا للمتوسط الوطني. وما لم نجده: دراسة علنية للهواتف المستعملة فعلاً في الجزائر حسب سنة الصنع؛ وما نراه في سجلات مشاريعنا هو هواتف من 2019 ما زالت، ونقولها ملاحظةً.',
      ] },
      { heading: 'الشاشة نفسها، على شبكة ضعيفة، قبل وبعد', body: [
        'السرعة لا تُفهم على مبدأ بل على شاشة حقيقية تُحمَّل مرتين على الشبكة نفسها.',
      ], visual: 'cascade', after: [
        '**قبل.** صفحة HTML تزن 180 ك.ب وتستغرق أكثر من ثانية. ثلاثة سكريبتات بـ 1,4 م.ب، كل كود التطبيق بينما الشاشة لا تستعمل إلا جزءاً منه، تأخذ ثلاث ثوانٍ ونصف إضافية. اثنتا عشرة صورة تصل كما أرسلها الهاتف الذي التقطها، 3,2 م.ب، وتشغل الشبكة سبع ثوانٍ. ثم الواجهة: استدعاء أول يعيد كل طلبيات السنة، 640 ك.ب، وخمسة استدعاءات أخرى تتبعه واحداً بعد الآخر للزبائن والمنتجات والحالات، لأن الكود يجري واحداً لكل نوع معلومة. الشاشة قابلة للاستعمال عند 9,8 ثوانٍ، والبائع ضغط مرتين أخريين.',
        '**بعد.** القائمة نفسها، الشبكة نفسها. صفحة HTML تزن 40 ك.ب. سكريبت واحد، سكريبت هذه الشاشة، 220 ك.ب، وباقي التطبيق يُحمَّل لاحقاً عند الحاجة. أربع صور، المرئية، مصغَّرة إلى حجم العرض ومحوَّلة، 280 ك.ب؛ والتالية تأتي عند التمرير. استدعاء واجهة واحد، مجمَّع، مُصفَّح على خمسين سطراً، مضغوط، 38 ك.ب، يعيد الصفحة بزبائنها ومنتجاتها. الشاشة قابلة للاستعمال عند 1,9 ثانية، وفي الفتح الثاني تخدم الذاكرة المخبأة الصفحة بلا شبكة. والأرقام مثال مبني من حالات حقيقية؛ أما الرتبة، أسرع خمس مرات دون تغيير الخادم، فهي التي نقيسها.',
      ] },
      { heading: 'ستة أسباب بطء نجدها دائماً تقريباً', body: [
        'ستة أسباب بطء تتكرر في كل التطبيقات التي نستلمها تقريباً، ولكل منها بناء يحله.',
      ], visual: 'lenteurs', after: [
        '**شاشة 5 م.ب**: كل الكود يُحمَّل دفعة واحدة وصور أصلية؛ ميزانية لكل شاشة، كود مقسَّم، صور تُصغَّر وتُحوَّل عند الرفع. **قائمة 2 000 سطر**: كل طلبيات السنة في استدعاء، ثم الشاشة تتجمد وهي ترسمها؛ تصفيح في الخادم على خمسين سطراً، ترتيب وتصفية في الاستعلام، تمرير يحمّل التالي. **طلب لكل سطر**: لكل طلبية استدعاء للزبون وآخر للمنتج، مئتا استدعاء لصفحة؛ استدعاء مجمَّع واحد، وفي القاعدة ربط لا حلقة؛ وهو البطء الأكثر تكراراً والأكثر خفاءً على واي فاي المطوّر.',
        '**بحث بلا فهرس**: البحث عن زبون بالهاتف يمسح الجدول كله، أربع ثوانٍ عند مئة ألف سطر وأسوأ كل شهر؛ فهارس على الأعمدة المبحوثة والمرتَّبة، خطة تنفيذ تُقرأ قبل الإنتاج، عتبة 300 م.ث عند المئين 75؛ وللبحث في كتالوج قواعده الخاصة الموصوفة في [دليل البحث](' + L.recherche + '). **كل شيء يُعاد تحميله عند كل فتح**: الكتالوج والصور والإعدادات تبدأ من الصفر؛ ذاكرة HTTP مخبأة بتحقق، ذاكرة محلية للبيانات المستقرة، شبكة فقط لما تغيّر. **الخادم البعيد البطيء**: هو البطء الوحيد الذي يُحل في الاستضافة، وبعد الخمسة الأخرى فقط، لأن شاشة تجري عشرين استدعاءً بطيئة حتى على أفضل خادم.',
      ] },
      { heading: 'سرعة التطبيق، في خمس طبقات', body: [
        'خلف أسباب البطء الستة خمس طبقات، والطبقة التي نربح فيها أكثر ليست التي يُظن.',
      ], visual: 'couches', after: [
        '**الهاتف والشبكة**: Android من 2019، 3G أو واي فاي مشترك، بطارية في وضع التوفير؛ لا تغيّرونها، تبنون لها وتختبرون عليها. **الشاشة**: كود هذه الشاشة فقط، صور بحجم العرض، رسم يُظهر شيئاً قبل استلام كل شيء؛ لكل شاشة ميزانيتها. **الواجهة**: استدعاء مجمَّع واحد لكل شاشة، تصفيح، ضغط، ترويسات ذاكرة مخبأة، زمن رد مقيس عند المئين 75؛ وهي الطبقة التي نربح فيها أكثر، بحذف الاستدعاءات لا بتسريعها.',
        '**قاعدة البيانات**: فهارس على ما يُبحث ويُرتَّب، روابط بدل الحلقات، خطة تنفيذ مقروءة، استعلامات بطيئة مسجَّلة؛ وجدول يكبر كل شهر يُظهر ما لم يكن مرئياً عند الإطلاق، ولهذا يستمر القياس بعد الإنتاج. **القياس**: أزمنة حقيقية تُجمع من المستعملين، لكل شاشة ونوع شبكة وولاية، عند المئين 75، وميزانية تُفحص عند كل تسليم، على شاشة تُبنى مثل [لوحة قيادة المسيّر](' + L.dashboard + ')؛ وبدونه «يزحف» و«يعمل» رأيان، والنقاش مع مقدّم الخدمة لا ينتهي أبداً.',
      ] },
      { heading: 'ميزانية الأداء، تُكتب قبل الكود', body: [
        'الميزانية هي القطعة التي تغيّر كل شيء: ستة أرقام لكل شاشة، تُكتب قبل أول سطر وتُفحص عند كل تسليم.',
      ], visual: 'budget', after: [
        '**ستة قياسات لشاشة «قائمة الطلبيات»**، على Android من 2019 بـ 3G محاكاة: وزن الشاشة الأولى، HTML وسكريبتات وصور مرئية مضغوطة، 500 ك.ب؛ الصور المرئية، 200 ك.ب؛ السكريبتات قبل العرض، 250 ك.ب؛ الطلبات قبل العرض، ثلاثة؛ زمن رد الواجهة عند المئين 75، 300 م.ث؛ وعرض المحتوى الرئيسي، 2,5 ثانية، العتبة العلنية. وفي الرسم يتجاوز شريط: الصور تزن 280 ك.ب لأن صورة منتج ما زالت تصل بحجمها الأصلي؛ يُرفض التسليم، ويُظهر العرض التالي التصحيح.',
        '**ثلاث قواعد تحمل الميزانية.** تُكتب لكل شاشة لا للتطبيق، لأن الصندوق مسألة مئات الميلي ثانية لكل حركة والخريطة مسألة ثوانٍ. وتُقاس على هاتف زبائنكم وشبكتهم لا على هاتف المطوّر. وتعيش في مستودع الكود، تفحصها سلسلة التسليم عند كل نسخة، لا في وثيقة تُقرأ مرة: وهذا ما يمنع السرعة من الذهاب مع النسخة التالية، كما يصف [دليل التسليم](' + L.livrer + ') للاختبارات. وقيم الرسم مثال؛ أما عتبتا 2,5 ثانية و300 م.ث فهما ما نكتبه افتراضياً.',
      ] },
      { heading: 'ست شاشات، والميزانية التي نكتبها لكل منها', body: [
        'ميزانية لكل شاشة، لأن ست شاشات لا تحمل السرعة نفسها.',
      ], visual: 'ecrans', after: [
        '**قائمة الطلبيات**: خمسون سطراً بالزبون والمبلغ والحالة؛ 500 ك.ب، ثلاثة طلبات، 2,5 ثانية، واجهة عند 300 م.ث. **بطاقة المنتج بصور**: 600 ك.ب منها 300 ك.ب صور مرئية، والتالية عند التمرير؛ وهي شاشة [بوابة B2B](' + L.portail + ') التي يفتحها تجار التجزئة أكثر. **البحث في الكتالوج**: نتائج أثناء الكتابة على عشرة آلاف مرجع، 200 م.ث لكل ضغطة عند المئين 75، فهرس بحث ولا مسح جدول أبداً. **لوحة قيادة المسيّر**: ستة أرقام لكل وكالة في طلب واحد على مجاميع محسوبة سلفاً، 1,5 ثانية، تُحدَّث كل ستين ثانية لا عند كل حركة.',
        '**الصندوق في المحل**: 100 م.ث لكل حركة، كتالوج في ذاكرة محلية، ويعمل دون شبكة كما يشترط [دليل الصندوق](' + L.caisse + '). **خريطة التوصيل**: مئتا نقطة مجمَّعة، بلاطات خريطة مخبأة، ثانيتان، تحديث بالأحداث لا بإعادة التحميل وفق [دليل منصة التوصيل](' + L.livraison + '). وكل سطر يُكتب في دفتر الشروط ويُقاس عند كل عرض؛ وشاشة بلا ميزانية شاشة لن يستطيع أحد القول إنها بطيئة.',
      ] },
      { heading: 'رأيناه في مكان آخر: العتبات العلنية، وما ينتقل', body: [
        'مصدران يقولان الجوهر. تقول Core Web Vitals إن الصفحة جيدة حين يُعرض المحتوى الرئيسي في 2,5 ثانية وترد في 200 م.ث ولا تتحرك، مقيسة عند المئين 75 على الهاتف؛ وما ينتقل هو المئين وفصل الهاتف، لا العتبات وحدها، لأن المتوسط يخفي ربع زبائنكم. وتقول وثائق Google عن WebP مكسباً من 25 إلى 34 % على JPEG؛ وما ينتقل هو أن الصيغة تأتي بعد الحجم، وأن الاثنين يتمان عند الرفع في الخادم مرة واحدة.',
        'وما لا تقوله هذه المصادر: أي الهواتف والشبكات يملك زبائنكم، وأي شاشة بطيئة فعلاً؛ والأسبوع الأول من المشروع يجيب، بلا سطر كود، بجمع الأزمنة الحقيقية عند مستعمليكم.',
      ] },
      { heading: 'قواعد تطبيق سريع عند زبائنكم', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **ميزانية لكل شاشة** تُكتب قبل الكود. **مقيسة على هاتف زبائنكم وشبكتهم** لا المطوّر، عند المئين 75. **الصور تُصغَّر وتُحوَّل عند الرفع**، والشاشة تطلب الحجم الذي تعرضه. **استدعاء واجهة واحد لكل شاشة**، مجمَّع، مُصفَّح، مضغوط، مخبأ. **فهارس على ما يُبحث ويُرتَّب**، والاستعلامات البطيئة مسجَّلة. **الميزانية تعيش في سلسلة التسليم**، والنسخة التي تتجاوزها لا تخرج.',
        'قاعدة سابعة تخص عرض السعر: «تحسين الأداء» ليس متطلباً بل جملة؛ المتطلب يُكتب «ميزانية لكل شاشة بالوزن والطلبات والمحتوى الرئيسي في 2,5 ث والواجهة في 300 م.ث عند المئين 75؛ قياس عند المستعملين الحقيقيين لكل شاشة وشبكة وولاية؛ صور تُصغَّر وتُحوَّل عند الرفع بعدة أحجام؛ كود مقسَّم لكل شاشة؛ تصفيح في الخادم؛ استدعاء مجمَّع واحد لكل شاشة، لا طلب لكل سطر؛ فهارس وخطة تنفيذ؛ ذاكرة HTTP ومحلية؛ اختبارات على Android من 2019 بـ 3G محاكاة؛ ميزانية تفحصها سلسلة التسليم»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يقترح «خادماً أقوى» في سطره الأول اقترح البطء السادس قبل الخمسة الأخرى.',
      ] },
      { heading: 'ستة تطبيقات، والشاشة التي كانت تبطئها', body: [
        'ستة تطبيقات استلمناها أو بنيناها، ولكل منها الشاشة التي كانت بطيئة وما حلها.',
      ], list: [
        '**تطبيق المندوبين الميدانيين**، الموصوف في [الدليل المخصص](' + L.prevente + '). بطاقة الزبون كانت تحمّل تاريخ الطلبيات كاملاً؛ تصفيح ومجاميع، ولم تعد جولة الصباح تبدأ بانتظار.',
        '**بوابة الطلب B2B**، الموصوفة في [الدليل المخصص](' + L.portail + '). الكتالوج كان يرسل صور الموردين الأصلية؛ مصغَّرة عند الرفع، ينتقل الكتالوج من 11 م.ب إلى 600 ك.ب.',
        '**الصندوق**، الموصوف في [الدليل المخصص](' + L.caisse + '). كل سلعة مضافة كانت تجري استدعاءً للخادم؛ كتالوج في ذاكرة محلية، 100 م.ث لكل حركة، واختفى الطابور عند الكاونتر.',
        '**لوحة القيادة**، الموصوفة في [الدليل المخصص](' + L.dashboard + '). ستة أرقام تُعاد حسابها على الجدول كله عند كل فتح؛ مجاميع محسوبة سلفاً، طلب واحد، 1,5 ثانية.',
        '**التطبيق المستلَم من مقدّم خدمة اختفى**، الموصوف في [الدليل المخصص](' + L.bloque + '). مئتا طلب لكل صفحة دون أن يعرف أحد؛ أسبوع القياس الأول أظهره، والثالث حله.',
        '**المتجر المُدار من فرنسا**، الموصوف في [الدليل المخصص](' + L.commerce + '). كان المؤسس يرى تطبيقاً سريعاً من الألياف؛ ولوحة المئين 75 لكل ولاية أرته ما يراه بائعوه.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم تطبيق يُجعل سريعاً في ستة أسابيع، الأول بلا سطر كود.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يقيس عند المستعملين الحقيقيين: أزمنة حقيقية لكل شاشة وشبكة وولاية، هواتف موجودة فعلاً في السجلات، وميزانية تُكتب لكل شاشة؛ والشاشة البطيئة لا تكاد تكون التي ظُنت. **الأسبوع 1 إلى 2** يعالج الشاشات: كود مقسَّم، صور تُصغَّر وتُحوَّل عند الرفع، المرئي يُحمَّل أولاً؛ وهناك المكاسب الأكبر. **الأسبوع 2 إلى 3** يعالج الواجهة: استدعاء مجمَّع واحد لكل شاشة، تصفيح، ضغط، ترويسات ذاكرة مخبأة، الاستدعاءات الزائدة تُحذف. **الأسبوع 3 إلى 4** يعالج القاعدة: فهارس، روابط، استعلامات بطيئة تُسجَّل وتُصحَّح.',
        '**الأسبوع 4 إلى 5** يقيس كل شاشة على Android من 2019 بـ 3G محاكاة ويحمّل الواجهة كيوم ذروة. **الأسبوع 5 إلى 6** يُدخل الميزانية في سلسلة التسليم ويثبّت لوحة المئين 75 المقروءة كل أسبوع. وكل دفعة تُعرض كما يصف [دليل التسليم](' + L.livrer + ')؛ وحين يكون التطبيق محمولاً يُطبَّق الانضباط نفسه على كل نسخة وفق [دليل التحديثات](' + L.mobile + '). وإن بقي الخادم بعد كل ذلك هو عنق الزجاجة، يقول [دليل الاستضافة](' + L.heberger + ') أين يوضع؛ وهي الخطوة السادسة لا الأولى.',
      ] },
      { heading: 'ما يُفشل تطبيقاً سريعاً', body: [
        'التطبيقات البطيئة التي نستلمها بطيئة دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**مختبَر على هاتف المطوّر.** حديث، على الواي فاي، في الجزائر العاصمة؛ والزبائن على Android من 2019، بـ 3G، في سطيف.',
        '**لا ميزانية.** لا أحد يستطيع القول إن الشاشة بطيئة، فلا أحد يصلحها.',
        '**الصور الأصلية.** أربعة ميغابايتات لمربع 300 بكسل، مضروبة في اثني عشر.',
        '**طلب لكل سطر.** خفيّ على الواي فاي، مدمّر على 3G.',
        '**القائمة بلا تصفيح.** سريعة عند الإطلاق، بطيئة في الشهر السادس، متجمدة في الثاني عشر.',
        '**خادم أكبر بدل الكود.** الفاتورة ترتفع، والشاشة ما زالت تجري عشرين استدعاءً.',
        '**قياس مرة واحدة.** النسخة التالية تخسر كل شيء، ولا أحد يراه قبل الزبائن.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين ومسؤولي إعلام آلي.',
      ], faq: [
        { q: 'لماذا التطبيق سريع عندنا وبطيء عند الزبائن؟', a: 'لأنه اختُبر على هاتف حديث بالواي فاي ويُستعمل على هواتف أقدم بـ 3G أو واي فاي مشترك. شاشة تجري عشرين استدعاءً وتحمّل خمسة ميغابايتات تمر دون أن تُلاحظ على الألياف وتأخذ عشر ثوانٍ على 3G. نبني ونقيس لهاتف زبائنكم وشبكتهم عند المئين 75، لا لهاتف المطوّر.' },
        { q: 'هل نحتاج خادماً أقوى؟', a: 'لا يكاد يكون أولاً أبداً. خمسة من أسباب البطء الستة تُحل في الكود: وزن الشاشات، الصور، التصفيح، الطلب لكل سطر، الفهارس، الذاكرة المخبأة. شاشة تجري استدعاءً واحداً بدل عشرين سريعة حتى على خادم متوسط. ويأتي الخادم سادساً بعد القياس، ويقول دليل الاستضافة حينها أين يوضع.' },
        { q: 'ما ميزانية الأداء؟', a: 'ستة أرقام لكل شاشة تُكتب قبل الكود وتُفحص عند كل تسليم: وزن الشاشة الأولى، الصور المرئية، السكريبتات قبل العرض، عدد الطلبات، زمن رد الواجهة عند المئين 75، وعرض المحتوى الرئيسي في 2,5 ثانية على Android من 2019 بـ 3G محاكاة. والنسخة التي تتجاوز إحدى هذه القيم لا تُسلَّم حتى تُصحَّح.' },
        { q: 'لماذا المئين 75 لا المتوسط؟', a: 'لأن المتوسط يخفي ربع المستعملين الأسوأ خدمة. المئين 75 هو الزمن الذي يقع تحته ثلاثة زبائن من أربعة؛ وهو النقطة التي تطلب عتبات Google العلنية قياسها منفصلة على الهاتف، وهو ما نكتبه في العقد.' },
        { q: 'كم نربح في الصور؟', a: 'المكسب الذي توثّقه Google لصيغة WebP من 25 إلى 34 % مقارنة بـ JPEG بجودة متساوية؛ لكن المكسب الذي يهم يأتي قبله: صورة الهاتف تزن عدة ميغابايتات وتُعرض في مربع 300 بكسل، وتصغيرها إلى هذا الحجم يقسم وزنها على عشرة أو أكثر. والاثنان يتمان عند الرفع في الخادم بعدة أحجام مرة واحدة.' },
        { q: 'كم من الوقت لجعل تطبيق سريعاً؟', a: 'ستة أسابيع: واحد للقياس عند المستعملين الحقيقيين وكتابة الميزانيات، واحد للشاشات، واحد للواجهة، واحد للقاعدة، واحد للقياس على هاتف قديم بـ 3G محاكاة وتحميل الواجهة، واحد لإدخال الميزانية في سلسلة التسليم. والأسبوع الأول بلا كود، وهو الذي يقرر ترتيب الخمسة الأخرى.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'أسرع خمس مرات دون تغيير الخادم: هذه الرتبة التي نقيسها حين تنتقل الشاشة من عشرين استدعاءً إلى واحد.' },
      { after: 4, text: 'بلا قياس عند المستعملين الحقيقيين، «يزحف» و«يعمل» رأيان، والنقاش لا ينتهي أبداً.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا الشاشة التي يشكو منها بائعوكم', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نجعل تطبيقكم سريعاً عند زبائنكم، على هواتفهم وشبكاتهم، ونثبت ذلك بالقياس', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: قياس عند المئين 75 عند المستعملين الحقيقيين، ميزانية لكل شاشة، صور تُصغَّر وتُحوَّل عند الرفع، كود مقسَّم، تصفيح، استدعاء مجمَّع لكل شاشة، فهارس وخطة تنفيذ، ذاكرة HTTP ومحلية، اختبارات على Android من 2019 بـ 3G محاكاة، ميزانية تفحصها سلسلة التسليم. الكود والقياسات في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.heberger, kind: '2027', name: 'الاستضافة في الجزائر أو أوروبا' },
      { href: L.offline, kind: '2027', name: 'تطبيق دون اتصال والمزامنة' },
      { href: L.recherche, kind: '2027', name: 'البحث داخل التطبيق' },
      { href: L.mobile, kind: '2027', name: 'تحديث تطبيق محمول دون كسره' },
    ] },
  },
};

const KEYWORDS = "application lente algérie 2027, application mobile lente réseau faible, optimiser application 3G algérie, pourquoi mon application est lente, performance application mobile algérie, budget de performance écran, core web vitals 75e percentile mobile, pagination api requête par ligne, images webp redimensionner à l'envoi, index base de données application lente, slow app weak network algeria 2027, performance budget mobile app, تطبيق بطيء الجزائر, تسريع تطبيق على شبكة ضعيفة";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
