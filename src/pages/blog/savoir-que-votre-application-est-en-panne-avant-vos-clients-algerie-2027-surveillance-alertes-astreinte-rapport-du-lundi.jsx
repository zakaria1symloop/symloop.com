import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/savoir-que-votre-application-est-en-panne-avant-vos-clients-algerie-2027-surveillance-alertes-astreinte-rapport-du-lundi.mjs';

const SLUG = 'savoir-que-votre-application-est-en-panne-avant-vos-clients-algerie-2027-surveillance-alertes-astreinte-rapport-du-lundi';
const FIGURES = ['signaux', 'nuit', 'couches', 'mois', 'astreinte', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  sauvegarde: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  vivre: '/blog/faire-vivre-une-application-algerie-2027-cout-annee-stores-serveurs-mises-a-jour/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  lente: '/blog/application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure/',
  mobile: '/blog/mettre-a-jour-une-application-mobile-sans-la-casser-algerie-2027-compatibilite-api-deploiement-progressif-mise-a-jour-forcee-correctif/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  api: '/blog/ouvrir-une-api-a-vos-partenaires-algerie-2027-cles-droits-quotas-webhooks-versions-documentation-sans-exposer-votre-systeme/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  billetterie: '/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/',
  livraison: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/',
  saas: '/blog/construire-saas-multi-tenant-algerie-2027-isolation-clients-base-partagee-rls-plans-abonnement-mises-a-jour/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  service: '/services/cloud/',
};

const CONTENT = {
  fr: {
    kind: 'Surveillance · Alertes · Astreinte · 2027', title: "Savoir que votre application est en panne avant vos clients en Algérie en 2027 : ce qu'on construit pour surveiller, alerter et réparer, les quatre signaux, les seuils, l'astreinte et le rapport du lundi",
    dek: "« J'ai appris la panne par un client, sur WhatsApp, à 9 h du matin ; elle durait depuis 2 h. » Le serveur répondait au ping, le site s'affichait, et aucun paiement ne passait depuis sept heures. Ce guide décrit ce qu'on construit pour qu'une application dise elle-même qu'elle va mal, avant ses clients : quatre signaux mesurés et deux de plus, des sondes qui font ce qu'un client fait depuis Alger et Paris, des seuils écrits avant la mise en ligne, un téléphone qui sonne sur le symptôme et jamais pour rien, un document d'intervention par alerte, un budget d'erreur par mois et le rapport du lundi que le gérant lit en deux minutes.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Surveillance', 'Alertes', 'Astreinte', 'Fiabilité', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une application se surveille sur **quatre signaux**, erreurs, latence, trafic, saturation, auxquels nous ajoutons toujours deux lignes : des **sondes externes** qui font ce qu'un client fait, toutes les minutes, depuis Alger et depuis Paris, et un **signal métier**, des commandes payées par heure, que le gérant comprend sans explication. Chaque signal a un **seuil écrit** avant la mise en ligne et une **destination** : le téléphone d'astreinte pour ce qui exige une action immédiate, le canal de l'équipe pour ce qui attend le matin, le rapport pour le reste. Les alertes sonnent sur le **symptôme**, ce que les clients voient, jamais sur la cause ; la cause se lit dans des **journaux structurés** et des erreurs regroupées. Chaque alerte qui réveille a un **document d'intervention**, écrit au calme. Un **objectif de disponibilité** est écrit dans le contrat, 99,5 % par mois par défaut, et le **rapport du lundi** dit s'il est tenu, ce qui est tombé, combien de temps, et quel seuil change. Six semaines, dont une où l'on provoque les pannes pour vérifier que tout sonne.",
      "Ce guide s'adresse au gérant qui apprend les pannes par ses clients, au fondateur installé en France qui ne saura rien de la nuit algérienne s'il n'est pas prévenu, et au responsable qui doit comparer deux contrats de maintenance. Il ne redit pas comment on revient après la panne, décrit dans [le guide sur les sauvegardes](" + L.sauvegarde + "), ni ce que coûte une application chaque année, décrit dans [le guide sur sa vie](" + L.vivre + ") ; il décrit ce qui se construit pour qu'on sache, et il prolonge [notre page sur le cloud et l'infrastructure](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les équipes de fiabilité disent', body: [
        "La surveillance a un vocabulaire, et il vient des équipes qui tiennent les plus grands services. Le livre de référence des ingénieurs de fiabilité de Google nomme « les quatre signaux d'or de la surveillance : la latence, le trafic, les erreurs et la saturation », et pose la question que tout système de surveillance doit savoir poser : « qu'est-ce qui est cassé, et pourquoi ? », le quoi étant le symptôme et le pourquoi la cause. Ce que cela impose : on alerte sur le symptôme, les paiements qui échouent, et on garde les causes, un disque plein, une passerelle en panne, pour les journaux et le document d'intervention ; une alerte sur chaque cause possible réveille dix fois pour rien.",
        "Le même livre dit ce qu'une alerte qui réveille doit être : « chaque fois que le téléphone sonne, je dois pouvoir réagir avec un sentiment d'urgence », « chaque alerte doit être actionnable », et « chaque réponse à une alerte doit demander de l'intelligence », c'est-à-dire ne pas être une réaction mécanique qu'un script pourrait faire. Il met aussi en garde contre les moyennes : « il est tentant de concevoir un système à partir de la moyenne d'une quantité », alors que ce sont les queues, le 99e percentile, qui disent qu'un service sature. Ce que cela impose : les seuils de latence sont écrits au 99e percentile, pas en moyenne ; et chaque alerte qui a sonné sans demander d'action est retirée au rapport suivant, parce qu'un téléphone qui sonne pour rien finit en mode silencieux.",
        "Ce que nous n'avons pas trouvé : une mesure publique de la disponibilité des applications d'entreprise en Algérie, ni du temps moyen entre une panne et le moment où quelqu'un la remarque. Ce que nous voyons sur les applications que nous reprenons, c'est une panne apprise par un client dans la majorité des cas, et une surveillance réduite au ping du serveur dans presque tous ; nous le disons comme une observation, et c'est la raison des deux lignes que nous ajoutons aux quatre signaux.",
      ] },
      { heading: "Ce qu'on mesure, et où ça sonne", body: [
        "La surveillance tient dans un tableau de six lignes, et c'est ce tableau qu'on écrit la première semaine.",
      ], visual: 'signaux', after: [
        "**Les erreurs** : la part des requêtes en échec, par écran et par fonction ; au-dessus de 2 % sur cinq minutes pour une fonction critique, le téléphone ; au-dessus de 0,5 %, le canal. **La latence** : au 99e percentile, par route ; au-dessus de 3 000 ms, le canal ; au-dessus de dix secondes, le téléphone, parce qu'à ce point les clients abandonnent. **Le trafic** : requêtes et commandes par heure comparées à la même heure la semaine passée ; une chute de moitié pendant quinze minutes aux heures ouvrées réveille, parce que c'est souvent le seul signe d'une panne en amont, chez l'opérateur ou le fournisseur de SMS. **La saturation** : disque, mémoire, connexions, file ; 80 % le canal, 90 % le téléphone.",
        "**Les sondes externes** : toutes les minutes, depuis Alger et depuis Paris, une requête complète qui ouvre, se connecte et lit une commande ; deux échecs consécutifs depuis les deux villes réveillent, depuis une seule c'est le réseau local et cela va au canal. **Le métier** : zéro commande payée pendant une heure ouvrée réveille ; c'est l'alerte que le gérant comprend sans explication, et celle qui aurait sonné à 2 h 16 dans l'exemple qui suit. Les seuils sont ceux que nous écrivons par défaut ; ils se discutent la première semaine, et se relisent chaque mois.",
      ] },
      { heading: 'Une nuit de panne, vue par la surveillance', body: [
        "La surveillance ne se comprend pas sur un tableau mais sur une nuit, minute par minute, sur deux courbes.",
      ], visual: 'nuit', after: [
        "**2 h 14**, la passerelle de paiement cesse de répondre : les requêtes de paiement attendent, puis échouent ; le taux d'erreur passe de 0,3 % à 12 %, la latence au 99e percentile de 420 ms à huit secondes. **2 h 16**, le seuil de 2 % d'erreurs sur cinq minutes est franchi et le téléphone d'astreinte sonne ; l'alerte dit quoi, depuis quand, et quel document ouvrir. **2 h 19**, accusé de réception ; le document d'intervention « erreurs de paiement » dit où regarder : les journaux groupés montrent des délais dépassés vers le fournisseur, pas une erreur de notre code. **2 h 27**, la parade prévue au document est appliquée : le paiement à la livraison est proposé à la place, par un drapeau, sans déploiement, et les erreurs retombent, parce que les clients qui commandent à cette heure-là ne voient plus la passerelle.",
        "**2 h 41**, la passerelle revient ; les erreurs repassent sous 1 %. **2 h 45**, le drapeau est retiré, et le rapport d'incident est ouvert pour la revue du lundi, sans blâme : vingt-sept minutes pendant lesquelles les clients ont vu un autre mode de paiement, pas une erreur. Sans surveillance, la même nuit aurait été découverte à 9 h par un message WhatsApp, et la passerelle serait revenue d'elle-même sans que personne ne sache ce qui s'était passé, ni pour combien de clients. L'exemple est construit ; les seuils de 2 % et de 3 000 ms sont ceux que nous écrivons par défaut pour le paiement, selon [le guide sur son intégration](" + L.paiement + ").",
      ] },
      { heading: "La surveillance d'une application, en cinq couches", body: [
        "Derrière ces deux courbes, cinq couches, et celle qui sépare la surveillance de la décoration.",
      ], visual: 'couches', after: [
        "**Les sondes externes** : une requête complète toutes les minutes depuis deux villes, qui fait ce qu'un client fait ; c'est la seule couche qui voit ce que les clients voient, réseau compris, et elle est indépendante du serveur qu'elle surveille. **L'application** : des journaux structurés avec un identifiant par requête, des erreurs regroupées par cause avec leur fréquence, des traces du parcours d'une requête ; c'est ici qu'on lit le pourquoi quand les sondes disent le quoi. **L'infrastructure** : processeur, mémoire, disque, connexions, file, et les certificats et le domaine qui expirent ; les pannes de samedi soir viennent presque toutes d'ici.",
        "**Les alertes et l'astreinte** : des seuils écrits par signal, une destination par gravité, une personne d'astreinte nommée avec une seconde en secours, et un document d'intervention par alerte qui réveille ; toute alerte qui réveille doit demander une action, sinon elle rejoint le rapport. **Le rapport** : le lundi, la disponibilité du mois face à l'objectif, les incidents et leurs durées, les actions ouvertes, le bruit des alertes ; ce que le gérant lit en deux minutes, et ce qu'on relit chaque mois pour abaisser ou relever les seuils ; il se bâtit sur les mêmes principes que [le tableau de bord du gérant](" + L.dashboard + "). Des graphiques que personne ne regarde ne réveillent personne : une alerte est une phrase, un seuil, une destination et un document.",
      ] },
      { heading: "Un mois de disponibilité, face à l'objectif", body: [
        "L'objectif est écrit dans le contrat, et le mois se lit en trente cases.",
      ], visual: 'mois', after: [
        "**L'objectif** : 99,5 % de disponibilité par mois, mesurée par les sondes externes, soit trois heures trente-six d'indisponibilité tolérée ; ce chiffre est le budget d'erreur du mois, et il se dépense. **Le jour 8**, vingt-sept minutes : la nuit de la passerelle, parée par un drapeau. **Le jour 19**, une heure vingt-cinq : le disque de la base s'est rempli, l'alerte de saturation a sonné à 90 %, quand il était déjà presque plein, et la base s'est arrêtée avant que l'astreinte ait fini de libérer de l'espace. **Le budget consommé** : une heure cinquante-deux sur trois heures trente-six ; objectif tenu, à 99,74 %.",
        "**L'action du rapport** : le seuil de saturation du disque passe de 90 à 80 %, pour que l'alerte arrive quand il reste le temps d'agir ; c'est exactement le genre de ligne qui sort d'un rapport et qui n'existe pas sans lui. Un budget d'erreur a aussi une autre vertu : quand il est presque dépensé en milieu de mois, on arrête de livrer des nouveautés et on répare, et c'est une décision que le gérant peut prendre en lisant trois lignes. Les valeurs sont un exemple construit ; l'objectif de 99,5 % est celui que nous écrivons par défaut pour une application de gestion, et il se discute selon ce que [le guide sur l'hébergement](" + L.heberger + ") a décidé.",
      ] },
      { heading: 'Quand le téléphone sonne, en six étapes', body: [
        "L'astreinte n'est pas une personne qui sait tout ; c'est une procédure écrite à quatorze heures pour être jouée à trois heures du matin.",
      ], visual: 'astreinte', after: [
        "**Le téléphone sonne**, sur un symptôme et un seuil écrits ; l'alerte dit quoi, depuis quand, et quel document ouvrir. **Accusé en cinq minutes**, sinon la seconde personne est appelée ; l'heure est notée, parce que le délai de réaction fait partie du rapport. **Le document d'intervention** : une page par alerte qui peut réveiller, où regarder, quoi vérifier, quelles parades existent ; personne ne réfléchit bien à trois heures du matin, et le document a été écrit au calme. **La parade, pas le correctif** : drapeau, bascule, redémarrage, remise en file ; on fait cesser le symptôme d'abord, on comprend ensuite.",
        "**Dire ce qui se passe** : un bandeau dans l'application et un message au gérant, deux lignes, par les canaux décrits dans [le guide sur les notifications](" + L.notif + "). **Le correctif et la revue** : le correctif part en journée, par le chemin normal de [la livraison](" + L.livrer + "), et la revue du lundi est sans blâme, avec au moins une action ; le rapport dit ce qui a sonné, en combien de temps on a réagi, et ce qui change. Quand la panne a touché les données, c'est [le guide sur les sauvegardes](" + L.sauvegarde + ") qui prend le relais à la quatrième étape.",
      ] },
      { heading: 'Vu ailleurs : les équipes de fiabilité, et ce qui se transpose', body: [
        "Une source dit l'essentiel. Le livre des ingénieurs de fiabilité de Google nomme les quatre signaux, sépare le symptôme de la cause, exige que chaque alerte qui réveille soit urgente et actionnable, et met en garde contre les moyennes au profit des percentiles ; ce qui se transpose, c'est le tableau des six lignes, les seuils au 99e percentile, et la règle qu'une alerte qui a sonné pour rien est retirée. Ce qui ne se transpose pas tel quel, c'est l'échelle : une application de gestion n'a pas besoin d'une équipe de nuit, elle a besoin d'une personne, d'une seconde en secours, et de documents écrits.",
        "Ce que cette source ne dit pas : quelles fonctions sont critiques chez vous, et quel pourcentage de disponibilité vous acceptez de payer ; la première semaine du projet y répond, et c'est le gérant qui signe.",
      ] },
      { heading: "Les règles d'une surveillance qui prévient avant les clients", body: [
        "Six règles, écrites la première semaine. **Six signaux**, les quatre d'or plus les sondes externes et le métier. **Des seuils écrits avant la mise en ligne**, au 99e percentile pour la latence. **On alerte sur le symptôme**, et on lit la cause dans les journaux. **Toute alerte qui réveille demande une action** et a un document d'intervention ; sinon elle va au rapport. **Un objectif de disponibilité dans le contrat**, et un budget d'erreur qu'on dépense en connaissance de cause. **Le rapport du lundi**, lu par le gérant, et les seuils relus chaque mois.",
        "Une septième règle porte sur le devis : « supervision 24/7 » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « sondes externes depuis deux villes toutes les minutes ; journaux structurés avec identifiant de requête, erreurs regroupées, traces ; seuils écrits par signal avec destination téléphone, canal ou rapport ; personne d'astreinte nommée et seconde en secours, accusé en cinq minutes ; document d'intervention par alerte qui réveille ; objectif de disponibilité mensuel et budget d'erreur ; panne provoquée avant la mise en ligne ; rapport hebdomadaire avec disponibilité, incidents, durées, actions, bruit », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui écrit « monitoring inclus » sans dire qui est réveillé, par quoi, et en combien de temps, a écrit le ping du serveur.",
      ] },
      { heading: "Six applications, et l'alerte qui les a sauvées", body: [
        "Six applications que nous surveillons souvent, et pour chacune l'alerte qui a sonné avant les clients.",
      ], list: [
        "**Le commerce piloté depuis la France**, décrit dans [le guide dédié](" + L.commerce + "). Zéro vente encaissée pendant une heure ouvrée un mardi : la caisse d'Alger avait perdu le réseau ; le fondateur l'a su à Lyon avant le gérant à Alger.",
        "**La billetterie**, décrite dans [le guide dédié](" + L.billetterie + "). Le trafic du soir de mise en vente triple ; l'alerte de saturation de la file a sonné à 80 %, et la file a été élargie avant que les billets ne se vendent deux fois.",
        "**La plateforme de livraison**, décrite dans [le guide dédié](" + L.livraison + "). Le fournisseur de SMS ne répond plus ; la chute des SMS envoyés a réveillé, et le second fournisseur a pris le relais par bascule.",
        "**L'application de paiement**, décrite dans [le guide dédié](" + L.paiement + "). La nuit de la figure 2 : vingt-sept minutes, un drapeau, aucun client perdu.",
        "**La plateforme SaaS**, décrite dans [le guide dédié](" + L.saas + "). Un objectif par client dans le contrat ; le rapport du lundi se décline par client, et un seul client lent se voit avant qu'il n'appelle.",
        "**La chaîne du froid**, décrite dans [le guide dédié](" + L.froid + "). Les sondes de température sont elles-mêmes surveillées : une sonde muette pendant quinze minutes réveille, parce qu'un silence n'est pas une bonne nouvelle.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une application mise sous surveillance en six semaines, dont une pour provoquer les pannes.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit ce qu'on surveille et l'objectif : les fonctions critiques nommées, l'objectif de disponibilité, les seuils par signal, qui est d'astreinte et qui est en secours. **La semaine 1 à 2** installe les sondes externes depuis Alger et Paris et la vérification de santé de chaque service. **La semaine 2 à 3** structure les journaux avec un identifiant par requête, regroupe les erreurs, ajoute les traces, et écrit la durée de rétention. **La semaine 3 à 4** écrit les alertes avec leurs destinations et un document d'intervention par alerte qui réveille.",
        "**La semaine 4 à 5** provoque les pannes : on coupe la base, on remplit le disque, on arrête la passerelle de paiement, on expire un certificat en test ; chaque alerte doit sonner, chaque document doit servir, et ce qui n'a pas sonné est corrigé. **La semaine 5 à 6** installe le rapport du lundi et la revue mensuelle des seuils. Une surveillance qu'on n'a jamais vue sonner est une hypothèse, comme une sauvegarde jamais restaurée ; et quand l'application est lente plutôt que cassée, c'est [le guide sur la vitesse](" + L.lente + ") qui prend la suite, avec les mêmes percentiles.",
      ] },
      { heading: 'Ce qui fait échouer une surveillance', body: [
        "Les surveillances que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**Le ping du serveur comme seule sonde.** Le serveur répond, l'application refuse tous les paiements.",
        "**Des graphiques sans alertes.** Tout était visible sur un écran que personne ne regardait à 2 h du matin.",
        "**Des alertes sur les causes.** Cinquante alertes possibles, dix sonneries par nuit, et le téléphone en mode silencieux au bout d'une semaine.",
        "**La moyenne au lieu du percentile.** La moyenne était bonne ; un client sur vingt attendait dix secondes.",
        "**Pas de document d'intervention.** L'alerte a sonné, et la personne a cherché pendant une heure ce qu'il fallait regarder.",
        "**Une seule personne d'astreinte.** Elle dormait, ou elle était en congé, ou elle a quitté l'entreprise.",
        "**Jamais provoqué.** La première vraie panne a aussi été le premier test des alertes.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et de responsables informatiques.",
      ], faq: [
        { q: 'Pourquoi apprend-on les pannes par les clients alors que le serveur est surveillé ?', a: "Parce que ce qui est surveillé est souvent le serveur, pas l'application : il répond au ping, et pourtant les paiements échouent ou la connexion ne passe plus. Il faut des sondes qui font ce qu'un client fait, depuis l'extérieur, toutes les minutes, et un signal métier, des commandes payées par heure, qui sonne quand il tombe à zéro aux heures ouvrées." },
        { q: 'Qui est réveillé, et par quoi ?', a: "Une personne d'astreinte nommée, avec une seconde en secours si l'accusé de réception n'arrive pas en cinq minutes. Elle est réveillée par les symptômes qui exigent une action immédiate : erreurs d'une fonction critique au-dessus de 2 % sur cinq minutes, sondes externes en échec depuis deux villes, zéro commande payée pendant une heure ouvrée, saturation à 90 %. Tout le reste va dans le canal de l'équipe ou le rapport." },
        { q: 'Qu’est-ce qu’un document d’intervention ?', a: "Une page par alerte qui peut réveiller, écrite au calme : où regarder, quoi vérifier, quelles parades existent, qui prévenir. Personne ne réfléchit bien à trois heures du matin ; le document fait que la réaction ne dépend pas de la mémoire de la personne de garde. Il est relu après chaque incident et corrigé." },
        { q: 'Que veut dire 99,5 % de disponibilité ?', a: "Trois heures trente-six d'indisponibilité tolérée par mois, mesurée par les sondes externes. C'est un budget d'erreur : chaque incident le dépense, et le rapport du lundi dit ce qui reste. Quand il est presque épuisé, on arrête les nouveautés et on répare. L'objectif est écrit dans le contrat et se discute selon ce que l'application fait : une caisse et un catalogue n'ont pas la même tolérance." },
        { q: 'Comment éviter que le téléphone sonne pour rien ?', a: "En alertant sur les symptômes plutôt que sur les causes, en écrivant les seuils au 99e percentile plutôt qu'en moyenne, et en retirant au rapport suivant chaque alerte qui a sonné sans demander d'action. Une alerte qui réveille doit être urgente et actionnable ; sinon elle rejoint le canal ou le rapport. Le bruit des alertes est une ligne du rapport du lundi." },
        { q: 'Combien de temps pour mettre une application sous surveillance ?', a: "Six semaines : une pour écrire ce qu'on surveille et l'objectif, une pour les sondes et la santé, une pour les journaux et les traces, une pour les alertes et les documents, une pour provoquer les pannes et vérifier que tout sonne, une pour le rapport du lundi. Sur une application existante, les deux premières semaines suffisent souvent à ne plus apprendre les pannes par les clients." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "On alerte sur le symptôme, ce que les clients voient ; on lit la cause dans les journaux. Une alerte sur chaque cause possible réveille dix fois pour rien." },
      { after: 5, text: "Une surveillance qu'on n'a jamais vue sonner est une hypothèse, comme une sauvegarde qu'on n'a jamais restaurée." },
    ],
    cta: { eyebrow: 'Envoyez-nous la dernière panne que vos clients ont vue avant vous', title: "Gérant en Algérie ou fondateur en France : nous mettons votre application sous surveillance, avec des sondes depuis deux villes, des seuils écrits, une astreinte et le rapport du lundi", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : sondes externes depuis Alger et Paris, journaux structurés et erreurs regroupées, seuils par signal au 99e percentile, alertes sur le symptôme avec destination téléphone, canal ou rapport, astreinte nommée et seconde en secours, document d'intervention par alerte, panne provoquée avant la mise en ligne, objectif de disponibilité et budget d'erreur, rapport du lundi. Configuration et documents dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.sauvegarde, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes et reprise' },
      { href: L.vivre, kind: '2027', name: 'Faire vivre une application : ce que coûte chaque année' },
      { href: L.lente, kind: '2027', name: 'Application lente sur un réseau faible' },
      { href: L.livrer, kind: '2027', name: 'Livrer une application sans la casser' },
    ] },
  },
  en: {
    kind: 'Monitoring · Alerts · On-call · 2027', title: 'Knowing your application is down before your customers do in Algeria in 2027: what gets built to monitor, alert and repair, the four signals, the thresholds, on-call and the Monday report',
    dek: '“I learnt about the outage from a customer, on WhatsApp, at 9 in the morning; it had been going on since 2.” The server answered the ping, the site displayed, and no payment had gone through for seven hours. This guide describes what gets built so that an application says itself that it is unwell, before its customers: four measured signals and two more, probes that do what a customer does from Algiers and Paris, thresholds written before launch, a phone that rings on the symptom and never for nothing, a runbook per alert, a monthly error budget and the Monday report the manager reads in two minutes.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Monitoring', 'Alerts', 'On-call', 'Reliability', 'Algeria 2027'],
    intro: [
      '**Short answer.** An application is monitored on **four signals**, errors, latency, traffic, saturation, to which we always add two rows: **external probes** that do what a customer does, every minute, from Algiers and from Paris, and a **business signal**, paid orders per hour, which the manager understands without explanation. Each signal has a **written threshold** before launch and a **destination**: the on-call phone for what demands immediate action, the team channel for what can wait until morning, the report for the rest. Alerts fire on the **symptom**, what customers see, never on the cause; the cause is read in **structured logs** and grouped errors. Every alert that wakes someone has a **runbook**, written calmly. An **availability objective** is written in the contract, 99.5 % per month by default, and the **Monday report** says whether it was met, what fell, for how long, and which threshold changes. Six weeks, one of them spent inducing failures to check that everything rings.',
      'This guide is for the manager who learns about outages from customers, the founder settled in France who will know nothing of the Algerian night unless warned, and the person who must compare two maintenance contracts. It does not repeat how you come back after the failure, described in [the backups guide](' + L.sauvegarde + '), nor what an application costs every year, described in [the guide on its life](' + L.vivre + '); it describes what is built so that you know, and extends [our page on cloud and infrastructure](' + L.service + ').',
    ],
    sections: [
      { heading: 'What reliability teams say', body: [
        'Monitoring has a vocabulary, and it comes from the teams that run the largest services. Google’s reliability engineering reference book names “the four golden signals of monitoring: latency, traffic, errors, and saturation”, and asks the question every monitoring system must be able to answer: “what’s broken, and why?”, the what being the symptom and the why the cause. What this imposes: you alert on the symptom, payments failing, and keep causes, a full disk, a gateway down, for the logs and the runbook; an alert on every possible cause wakes someone ten times for nothing.',
        'The same book says what an alert that wakes someone must be: “every time the pager goes off, I should be able to react with a sense of urgency”, “every page should be actionable”, and “every page response should require intelligence”, that is, not be a mechanical reaction a script could perform. It also warns against averages: “it’s tempting to design a system based upon the mean of some quantity”, when it is the tails, the 99th percentile, that say a service is saturating. What this imposes: latency thresholds are written at the 99th percentile, not the mean; and every alert that rang without demanding an action is removed at the next report, because a phone that rings for nothing ends up on silent.',
        'What we did not find: a public measure of the availability of business applications in Algeria, or of the mean time between an outage and someone noticing it. What we see on the applications we take over is an outage learnt from a customer in most cases, and monitoring reduced to pinging the server in almost all; we say so as an observation, and it is the reason for the two rows we add to the four signals.',
      ] },
      { heading: 'What is measured, and where it rings', body: [
        'Monitoring fits in a six-row table, and that table is written in week one.',
      ], visual: 'signaux', after: [
        '**Errors**: the share of failed requests, per screen and per function; above 2 % over five minutes for a critical function, the phone; above 0.5 %, the channel. **Latency**: at the 99th percentile, per route; above 3,000 ms, the channel; above ten seconds, the phone, because at that point customers give up. **Traffic**: requests and orders per hour compared with the same hour last week; a drop by half for fifteen minutes in business hours wakes someone, because it is often the only sign of an upstream outage, at the operator or the SMS provider. **Saturation**: disk, memory, connections, queue; 80 % the channel, 90 % the phone.',
        '**External probes**: every minute, from Algiers and from Paris, a full request that opens, logs in and reads an order; two consecutive failures from both cities wake someone, from one only it is the local network and goes to the channel. **Business**: zero paid orders during a business hour wakes someone; it is the alert the manager understands without explanation, and the one that would have rung at 2:16 in the example that follows. The thresholds are the ones we write by default; they are discussed in week one, and reread every month.',
      ] },
      { heading: 'One night incident, seen by monitoring', body: [
        'Monitoring is not understood on a table but on a night, minute by minute, on two curves.',
      ], visual: 'nuit', after: [
        '**2:14**, the payment gateway stops answering: payment requests wait, then fail; the error rate goes from 0.3 % to 12 %, 99th-percentile latency from 420 ms to eight seconds. **2:16**, the 2 % errors-over-five-minutes threshold is crossed and the on-call phone rings; the alert says what, since when, and which runbook to open. **2:19**, acknowledged; the “payment errors” runbook says where to look: grouped logs show timeouts towards the provider, not an error in our code. **2:27**, the workaround planned in the runbook is applied: cash on delivery is offered instead, through a flag, without deployment, and errors drop, because customers ordering at that hour no longer see the gateway.',
        '**2:41**, the gateway returns; errors fall back under 1 %. **2:45**, the flag is removed, and the incident report is opened for Monday’s blameless review: twenty-seven minutes during which customers saw another payment method, not an error. Without monitoring, the same night would have been discovered at 9 by a WhatsApp message, and the gateway would have come back on its own without anyone knowing what had happened, or for how many customers. The example is constructed; the 2 % and 3,000 ms thresholds are the ones we write by default for payment, per [the guide on its integration](' + L.paiement + ').',
      ] },
      { heading: 'Monitoring an application, in five layers', body: [
        'Behind those two curves, five layers, and the one that separates monitoring from decoration.',
      ], visual: 'couches', after: [
        '**External probes**: a full request every minute from two cities, doing what a customer does; it is the only layer that sees what customers see, network included, and it is independent of the server it watches. **The application**: structured logs with an id per request, errors grouped by cause with their frequency, traces of a request’s path; this is where you read the why when the probes say the what. **Infrastructure**: CPU, memory, disk, connections, queue, and expiring certificates and domain; Saturday-night outages almost all come from here.',
        '**Alerts and on-call**: thresholds written per signal, a destination per severity, a named on-call person with a second as backup, and a runbook per alert that wakes someone; every alert that wakes someone must demand an action, otherwise it joins the report. **The report**: on Monday, the month’s availability against the objective, incidents and their durations, open actions, alert noise; what the manager reads in two minutes, and what is reread every month to lower or raise thresholds; it is built on the same principles as [the manager’s dashboard](' + L.dashboard + '). Charts nobody looks at wake nobody: an alert is a sentence, a threshold, a destination and a runbook.',
      ] },
      { heading: 'A month of availability, against the objective', body: [
        'The objective is written in the contract, and the month reads in thirty cells.',
      ], visual: 'mois', after: [
        '**The objective**: 99.5 % availability per month, measured by the external probes, that is three hours thirty-six of tolerated downtime; that figure is the month’s error budget, and it gets spent. **Day 8**, twenty-seven minutes: the gateway night, worked around by a flag. **Day 19**, one hour twenty-five: the database disk filled up, the saturation alert rang at 90 %, when it was already almost full, and the database stopped before on-call had finished freeing space. **Budget consumed**: one hour fifty-two out of three hours thirty-six; objective met, at 99.74 %.',
        '**The report’s action**: the disk saturation threshold goes from 90 to 80 %, so that the alert arrives while there is still time to act; it is exactly the kind of line that comes out of a report and does not exist without it. An error budget has another virtue: when it is almost spent mid-month, you stop shipping new features and repair, and that is a decision the manager can take by reading three lines. The values are a constructed example; the 99.5 % objective is the one we write by default for a management application, and it is discussed according to what [the hosting guide](' + L.heberger + ') decided.',
      ] },
      { heading: 'When the phone rings, in six steps', body: [
        'On-call is not a person who knows everything; it is a procedure written at two in the afternoon to be played at three in the morning.',
      ], visual: 'astreinte', after: [
        '**The phone rings**, on a written symptom and threshold; the alert says what, since when, and which runbook to open. **Acknowledged in five minutes**, otherwise the second person is called; the time is noted, because reaction time is part of the report. **The runbook**: one page per alert that can wake someone, where to look, what to check, which workarounds exist; nobody thinks well at three in the morning, and the runbook was written calmly. **The workaround, not the fix**: flag, failover, restart, re-queue; you stop the symptom first, understand afterwards.',
        '**Say what is happening**: a banner in the app and a message to the manager, two lines, through the channels described in [the notifications guide](' + L.notif + '). **The fix and the review**: the fix ships in daytime, by the normal path of [delivery](' + L.livrer + '), and the Monday review is blameless, with at least one action; the report says what rang, how fast you reacted, and what changes. When the failure touched the data, [the backups guide](' + L.sauvegarde + ') takes over at step four.',
      ] },
      { heading: 'Seen elsewhere: reliability teams, and what transposes', body: [
        'One source says the essentials. Google’s reliability engineering book names the four signals, separates symptom from cause, requires every alert that wakes someone to be urgent and actionable, and warns against averages in favour of percentiles; what transposes is the six-row table, thresholds at the 99th percentile, and the rule that an alert that rang for nothing is removed. What does not transpose as is, is scale: a management application does not need a night team, it needs one person, a second as backup, and written documents.',
        'What this source does not say: which functions are critical at your end, and what availability percentage you accept to pay for; the project’s first week answers that, and the manager signs.',
      ] },
      { heading: 'The rules of monitoring that warns before customers', body: [
        'Six rules, written in week one. **Six signals**, the golden four plus external probes and business. **Thresholds written before launch**, at the 99th percentile for latency. **Alert on the symptom**, and read the cause in the logs. **Every alert that wakes someone demands an action** and has a runbook; otherwise it goes to the report. **An availability objective in the contract**, and an error budget spent knowingly. **The Monday report**, read by the manager, and thresholds reread every month.',
        'A seventh rule concerns the quote: “24/7 monitoring” is not a requirement, it is a sentence; the requirement reads “external probes from two cities every minute; structured logs with request id, grouped errors, traces; thresholds written per signal with phone, channel or report destination; named on-call person and backup, acknowledgement in five minutes; runbook per alert that wakes someone; monthly availability objective and error budget; induced failure before launch; weekly report with availability, incidents, durations, actions, noise”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that writes “monitoring included” without saying who is woken, by what, and how fast, has written the server ping.',
      ] },
      { heading: 'Six applications, and the alert that saved them', body: [
        'Six applications we often monitor, and for each the alert that rang before the customers.',
      ], list: [
        '**The shop run from France**, described in [the dedicated guide](' + L.commerce + '). Zero sales taken during a business hour on a Tuesday: the Algiers till had lost the network; the founder knew in Lyon before the manager in Algiers.',
        '**Ticketing**, described in [the dedicated guide](' + L.billetterie + '). Traffic on the evening tickets go on sale triples; the queue saturation alert rang at 80 %, and the queue was widened before tickets sold twice.',
        '**The delivery platform**, described in [the dedicated guide](' + L.livraison + '). The SMS provider stops answering; the drop in SMS sent woke someone, and the second provider took over by failover.',
        '**The payment app**, described in [the dedicated guide](' + L.paiement + '). The night of figure 2: twenty-seven minutes, one flag, no customer lost.',
        '**The SaaS platform**, described in [the dedicated guide](' + L.saas + '). One objective per client in the contract; the Monday report breaks down per client, and a single slow client is seen before they call.',
        '**The cold chain**, described in [the dedicated guide](' + L.froid + '). The temperature probes are themselves monitored: a probe silent for fifteen minutes wakes someone, because silence is not good news.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of an application put under monitoring in six weeks, one of them to induce failures.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes what is monitored and the objective: critical functions named, the availability objective, thresholds per signal, who is on call and who is backup. **Week 1 to 2** installs the external probes from Algiers and Paris and the health check of every service. **Week 2 to 3** structures the logs with an id per request, groups errors, adds traces, and writes the retention. **Week 3 to 4** writes the alerts with their destinations and a runbook per alert that wakes someone.',
        '**Week 4 to 5** induces failures: cut the database, fill the disk, stop the payment gateway, expire a certificate in test; every alert must ring, every runbook must serve, and what did not ring is fixed. **Week 5 to 6** installs the Monday report and the monthly threshold review. Monitoring never seen ringing is a hypothesis, like a backup never restored; and when the app is slow rather than broken, [the speed guide](' + L.lente + ') takes over, with the same percentiles.',
      ] },
      { heading: 'What makes monitoring fail', body: [
        'The monitoring we take over almost always failed for one of these reasons.',
      ], list: [
        '**The server ping as the only probe.** The server answers, the app refuses every payment.',
        '**Charts without alerts.** Everything was visible on a screen nobody watched at 2 am.',
        '**Alerts on causes.** Fifty possible alerts, ten rings a night, and the phone on silent after a week.',
        '**The average instead of the percentile.** The average was fine; one customer in twenty waited ten seconds.',
        '**No runbook.** The alert rang, and the person spent an hour looking for what to check.',
        '**A single on-call person.** They were asleep, or on leave, or had left the company.',
        '**Never induced.** The first real outage was also the first test of the alerts.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and IT managers.',
      ], faq: [
        { q: 'Why do we learn about outages from customers when the server is monitored?', a: 'Because what is monitored is often the server, not the application: it answers the ping, and yet payments fail or login no longer works. You need probes that do what a customer does, from outside, every minute, and a business signal, paid orders per hour, that rings when it drops to zero in business hours.' },
        { q: 'Who is woken, and by what?', a: 'A named on-call person, with a second as backup if the acknowledgement does not arrive in five minutes. They are woken by the symptoms that demand immediate action: errors of a critical function above 2 % over five minutes, external probes failing from two cities, zero paid orders during a business hour, saturation at 90 %. Everything else goes to the team channel or the report.' },
        { q: 'What is a runbook?', a: 'One page per alert that can wake someone, written calmly: where to look, what to check, which workarounds exist, who to notify. Nobody thinks well at three in the morning; the runbook makes the reaction independent of the on-call person’s memory. It is reread after every incident and corrected.' },
        { q: 'What does 99.5 % availability mean?', a: 'Three hours thirty-six of tolerated downtime per month, measured by the external probes. It is an error budget: every incident spends it, and the Monday report says what is left. When it is almost exhausted, you stop new features and repair. The objective is written in the contract and discussed according to what the app does: a till and a catalogue do not have the same tolerance.' },
        { q: 'How do you keep the phone from ringing for nothing?', a: 'By alerting on symptoms rather than causes, writing thresholds at the 99th percentile rather than the average, and removing at the next report every alert that rang without demanding an action. An alert that wakes someone must be urgent and actionable; otherwise it joins the channel or the report. Alert noise is a line of the Monday report.' },
        { q: 'How long to put an application under monitoring?', a: 'Six weeks: one to write what is monitored and the objective, one for probes and health, one for logs and traces, one for alerts and runbooks, one to induce failures and check everything rings, one for the Monday report. On an existing application, the first two weeks are often enough to stop learning about outages from customers.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'Alert on the symptom, what customers see; read the cause in the logs. An alert on every possible cause wakes someone ten times for nothing.' },
      { after: 5, text: 'Monitoring never seen ringing is a hypothesis, like a backup never restored.' },
    ],
    cta: { eyebrow: 'Send us the last outage your customers saw before you did', title: 'Manager in Algeria or founder in France: we put your application under monitoring, with probes from two cities, written thresholds, on-call and the Monday report', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: external probes from Algiers and Paris, structured logs and grouped errors, thresholds per signal at the 99th percentile, alerts on the symptom with phone, channel or report destination, named on-call and backup, runbook per alert, induced failure before launch, availability objective and error budget, Monday report. Configuration and documents in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.sauvegarde, kind: '2027', name: 'If the server dies tomorrow: backups and recovery' },
      { href: L.vivre, kind: '2027', name: 'Keeping an app alive: what it costs each year' },
      { href: L.lente, kind: '2027', name: 'A slow application on a weak network' },
      { href: L.livrer, kind: '2027', name: 'Delivering an application without breaking it' },
    ] },
  },
  ar: {
    kind: 'مراقبة · تنبيهات · مناوبة · 2027', title: 'معرفة أن تطبيقكم معطَّل قبل زبائنكم في الجزائر سنة 2027: ما يُبنى للمراقبة والتنبيه والإصلاح، الإشارات الأربع، العتبات، المناوبة وتقرير الاثنين',
    dek: '«عرفت بالعطل من زبون، على WhatsApp، في التاسعة صباحاً؛ وكان مستمراً منذ الثانية.» كان الخادم يرد على الـ ping، والموقع يُعرض، ولم تمر أي دفعة منذ سبع ساعات. يصف هذا الدليل ما يُبنى كي يقول التطبيق بنفسه إنه مريض، قبل زبائنه: أربع إشارات مقيسة واثنتان أخريان، مسابر تفعل ما يفعله الزبون من الجزائر العاصمة وباريس، عتبات تُكتب قبل الإطلاق، هاتف يرن على العَرَض ولا يرن لغير شيء أبداً، مستند تدخل لكل تنبيه، ميزانية خطأ شهرية وتقرير الاثنين الذي يقرؤه المسيّر في دقيقتين.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['مراقبة', 'تنبيهات', 'مناوبة', 'موثوقية', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** يُراقَب التطبيق على **أربع إشارات**، الأخطاء والكمونية والحركة والتشبع، نضيف إليها دائماً سطرين: **مسابر خارجية** تفعل ما يفعله الزبون كل دقيقة من الجزائر العاصمة ومن باريس، و**إشارة عمل**، طلبيات مدفوعة في الساعة، يفهمها المسيّر بلا شرح. لكل إشارة **عتبة مكتوبة** قبل الإطلاق و**وجهة**: هاتف المناوبة لما يتطلب فعلاً فورياً، قناة الفريق لما ينتظر الصباح، التقرير للباقي. ترن التنبيهات على **العَرَض**، ما يراه الزبائن، لا على السبب أبداً؛ ويُقرأ السبب في **سجلات منظَّمة** وأخطاء مجمَّعة. ولكل تنبيه يوقظ **مستند تدخل** كُتب بهدوء. **هدف توفر** مكتوب في العقد، 99,5 % في الشهر افتراضياً، و**تقرير الاثنين** يقول إن تحقق، وما سقط، وكم من الوقت، وأي عتبة تتغير. ستة أسابيع، واحد منها نفتعل فيه الأعطال للتحقق من أن كل شيء يرن.',
      'هذا الدليل موجّه إلى المسيّر الذي يعرف الأعطال من زبائنه، وإلى المؤسس المقيم في فرنسا الذي لن يعرف شيئاً عن الليل الجزائري إن لم يُنبَّه، وإلى المسؤول الذي يجب أن يقارن عقدَي صيانة. لا يعيد كيف نعود بعد العطل، الموصوف في [دليل النسخ الاحتياطية](' + L.sauvegarde + ')، ولا ما يكلّفه التطبيق كل سنة، الموصوف في [دليل حياته](' + L.vivre + ')؛ بل يصف ما يُبنى كي نعرف، ويمدّ [صفحتنا عن السحابة والبنية التحتية](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله فرق الموثوقية', body: [
        'للمراقبة مفردات، وهي تأتي من الفرق التي تشغّل أكبر الخدمات. يسمّي الكتاب المرجعي لمهندسي الموثوقية في Google «الإشارات الذهبية الأربع للمراقبة: الكمونية والحركة والأخطاء والتشبع»، ويطرح السؤال الذي يجب أن يعرف كل نظام مراقبة طرحه: «ما المعطَّل، ولماذا؟»، فالماذا هو العَرَض واللماذا هو السبب. وما يفرضه ذلك: ننبّه على العَرَض، الدفعات التي تفشل، ونحتفظ بالأسباب، قرص ممتلئ أو بوابة معطَّلة، للسجلات ومستند التدخل؛ فتنبيه على كل سبب ممكن يوقظ عشر مرات لغير شيء.',
        'ويقول الكتاب نفسه ما يجب أن يكونه تنبيه يوقظ: «كلما رن الهاتف يجب أن أستطيع الرد بإحساس بالعجلة»، و«كل تنبيه يجب أن يكون قابلاً للفعل»، و«كل رد على تنبيه يجب أن يتطلب ذكاءً»، أي ألا يكون رد فعل آلياً يستطيع سكريبت القيام به. ويحذّر أيضاً من المتوسطات: «من المغري تصميم نظام على أساس متوسط كمية ما»، بينما الأذيال، المئين 99، هي التي تقول إن الخدمة تتشبع. وما يفرضه ذلك: تُكتب عتبات الكمونية عند المئين 99 لا بالمتوسط؛ وكل تنبيه رن دون أن يطلب فعلاً يُزال في التقرير التالي، لأن هاتفاً يرن لغير شيء ينتهي في الوضع الصامت.',
        'وما لم نجده: قياس علني لتوفر تطبيقات الشركات في الجزائر، ولا لمتوسط الوقت بين العطل ولحظة ملاحظة أحد له. وما نراه في التطبيقات التي نستلمها عطل يُعرف من زبون في معظم الحالات، ومراقبة مختزلة في ping الخادم في كلها تقريباً؛ ونقولها ملاحظةً، وهي سبب السطرين اللذين نضيفهما إلى الإشارات الأربع.',
      ] },
      { heading: 'ما يُقاس، وأين يرن', body: [
        'المراقبة تتسع في جدول من ستة أسطر، وهذا الجدول يُكتب في الأسبوع الأول.',
      ], visual: 'signaux', after: [
        '**الأخطاء**: حصة الطلبات الفاشلة، لكل شاشة ووظيفة؛ فوق 2 % على خمس دقائق لوظيفة حرجة، الهاتف؛ فوق 0,5 %، القناة. **الكمونية**: عند المئين 99، لكل مسار؛ فوق 3 000 م.ث، القناة؛ فوق عشر ثوانٍ، الهاتف، لأن الزبائن يتخلون عند تلك النقطة. **الحركة**: طلبات وطلبيات في الساعة مقارنةً بالساعة نفسها من الأسبوع الماضي؛ هبوط بالنصف خمس عشرة دقيقة في ساعات العمل يوقظ، لأنه غالباً العلامة الوحيدة لعطل في الأعلى، عند المشغّل أو مزوّد الرسائل. **التشبع**: قرص، ذاكرة، اتصالات، طابور؛ 80 % القناة، 90 % الهاتف.',
        '**المسابر الخارجية**: كل دقيقة، من الجزائر العاصمة ومن باريس، طلب كامل يفتح ويسجّل الدخول ويقرأ طلبية؛ فشلان متتاليان من المدينتين يوقظان، ومن واحدة فقط هي الشبكة المحلية وتذهب إلى القناة. **العمل**: صفر طلبية مدفوعة خلال ساعة عمل يوقظ؛ وهو التنبيه الذي يفهمه المسيّر بلا شرح، والذي كان سيرن في 2:16 في المثال التالي. والعتبات هي ما نكتبه افتراضياً؛ وتُناقش في الأسبوع الأول، وتُعاد قراءتها كل شهر.',
      ] },
      { heading: 'ليلة عطل، تراها المراقبة', body: [
        'المراقبة لا تُفهم على جدول بل على ليلة، دقيقة بدقيقة، على منحنيين.',
      ], visual: 'nuit', after: [
        '**2:14**، تتوقف بوابة الدفع عن الرد: تنتظر طلبات الدفع ثم تفشل؛ تنتقل نسبة الخطأ من 0,3 % إلى 12 %، والكمونية عند المئين 99 من 420 م.ث إلى ثماني ثوانٍ. **2:16**، تُتجاوز عتبة 2 % أخطاء على خمس دقائق ويرن هاتف المناوبة؛ يقول التنبيه ماذا، ومنذ متى، وأي مستند يُفتح. **2:19**، إقرار بالاستلام؛ يقول مستند التدخل «أخطاء الدفع» أين ننظر: تُظهر السجلات المجمَّعة مهلاً منتهية نحو المزوّد، لا خطأ في كودنا. **2:27**، يُطبَّق الحل المنصوص في المستند: يُقترح الدفع عند التسليم بدلاً، بعلم، بلا نشر، وتهبط الأخطاء، لأن الزبائن الذين يطلبون في تلك الساعة لم يعودوا يرون البوابة.',
        '**2:41**، تعود البوابة؛ وتعود الأخطاء تحت 1 %. **2:45**، يُزال العلم، ويُفتح تقرير الحادث لمراجعة الاثنين بلا لوم: سبع وعشرون دقيقة رأى فيها الزبائن طريقة دفع أخرى لا خطأ. بلا مراقبة كانت الليلة نفسها ستُكتشف في التاسعة برسالة WhatsApp، وكانت البوابة ستعود من تلقاء نفسها دون أن يعرف أحد ما حدث ولا لكم زبوناً. والمثال مبني؛ وعتبتا 2 % و3 000 م.ث هما ما نكتبه افتراضياً للدفع، وفق [دليل دمجه](' + L.paiement + ').',
      ] },
      { heading: 'مراقبة تطبيق، في خمس طبقات', body: [
        'خلف هذين المنحنيين خمس طبقات، والطبقة التي تفصل المراقبة عن الزينة.',
      ], visual: 'couches', after: [
        '**المسابر الخارجية**: طلب كامل كل دقيقة من مدينتين، يفعل ما يفعله الزبون؛ وهي الطبقة الوحيدة التي ترى ما يراه الزبائن بما فيه الشبكة، ومستقلة عن الخادم الذي تراقبه. **التطبيق**: سجلات منظَّمة بمعرّف لكل طلب، أخطاء مجمَّعة حسب السبب بتواترها، تتبع مسار الطلب؛ هنا نقرأ اللماذا حين تقول المسابر الماذا. **البنية التحتية**: المعالج والذاكرة والقرص والاتصالات والطابور، والشهادات والنطاق المنتهية؛ أعطال مساء السبت تأتي كلها تقريباً من هنا.',
        '**التنبيهات والمناوبة**: عتبات مكتوبة لكل إشارة، وجهة حسب الخطورة، شخص مناوب مسمّى وثانٍ احتياطياً، ومستند تدخل لكل تنبيه يوقظ؛ كل تنبيه يوقظ يجب أن يطلب فعلاً وإلا انضم إلى التقرير. **التقرير**: يوم الاثنين، توفر الشهر مقابل الهدف، الحوادث ومددها، الإجراءات المفتوحة، ضجيج التنبيهات؛ ما يقرؤه المسيّر في دقيقتين، وما يُعاد قراءته كل شهر لخفض العتبات أو رفعها؛ ويُبنى على المبادئ نفسها كما [لوحة قيادة المسيّر](' + L.dashboard + '). رسوم لا ينظر إليها أحد لا توقظ أحداً: التنبيه جملة وعتبة ووجهة ومستند.',
      ] },
      { heading: 'شهر من التوفر، مقابل الهدف', body: [
        'الهدف مكتوب في العقد، والشهر يُقرأ في ثلاثين خانة.',
      ], visual: 'mois', after: [
        '**الهدف**: توفر 99,5 % في الشهر، مقيساً بالمسابر الخارجية، أي ثلاث ساعات وست وثلاثون دقيقة من التوقف المسموح؛ هذا الرقم ميزانية خطأ الشهر، وهو يُنفَق. **اليوم 8**، سبع وعشرون دقيقة: ليلة البوابة، حُلت بعلم. **اليوم 19**، ساعة وخمس وعشرون دقيقة: امتلأ قرص القاعدة، ورن تنبيه التشبع عند 90 % وهو شبه ممتلئ أصلاً، وتوقفت القاعدة قبل أن تنتهي المناوبة من تحرير المساحة. **الميزانية المستهلكة**: ساعة واثنتان وخمسون دقيقة من ثلاث ساعات وست وثلاثين؛ الهدف محقَّق عند 99,74 %.',
        '**إجراء التقرير**: تنتقل عتبة تشبع القرص من 90 إلى 80 %، كي يصل التنبيه وما زال وقت للفعل؛ وهذا بالضبط نوع السطر الذي يخرج من تقرير ولا يوجد بدونه. ولميزانية الخطأ فضيلة أخرى: حين تكاد تُنفَق في منتصف الشهر، نتوقف عن تسليم الجديد ونصلح، وهذا قرار يستطيع المسيّر اتخاذه بقراءة ثلاثة أسطر. والقيم مثال مبني؛ وهدف 99,5 % هو ما نكتبه افتراضياً لتطبيق تسيير، ويُناقش وفق ما قرره [دليل الاستضافة](' + L.heberger + ').',
      ] },
      { heading: 'حين يرن الهاتف، في ست خطوات', body: [
        'المناوبة ليست شخصاً يعرف كل شيء؛ بل إجراء كُتب في الثانية ظهراً ليُجرى في الثالثة فجراً.',
      ], visual: 'astreinte', after: [
        '**الهاتف يرن**، على عَرَض وعتبة مكتوبين؛ يقول التنبيه ماذا ومنذ متى وأي مستند يُفتح. **إقرار في خمس دقائق**، وإلا يُتصل بالشخص الثاني؛ يُدوَّن الوقت لأن زمن الرد جزء من التقرير. **مستند التدخل**: صفحة لكل تنبيه يمكن أن يوقظ، أين ننظر، ماذا نتحقق، أي حلول موجودة؛ لا أحد يفكر جيداً في الثالثة فجراً، والمستند كُتب بهدوء. **الحل المؤقت لا التصحيح**: علم، تحويل، إعادة تشغيل، إعادة إلى الطابور؛ نوقف العَرَض أولاً ونفهم بعده.',
        '**قول ما يحدث**: شريط في التطبيق ورسالة للمسيّر، سطران، عبر القنوات الموصوفة في [دليل الإشعارات](' + L.notif + '). **التصحيح والمراجعة**: يخرج التصحيح نهاراً بالمسار العادي لـ [التسليم](' + L.livrer + ')، ومراجعة الاثنين بلا لوم بإجراء واحد على الأقل؛ ويقول التقرير ما رن، وفي كم من الوقت رددنا، وما يتغير. وحين يمس العطل البيانات، يتولى [دليل النسخ الاحتياطية](' + L.sauvegarde + ') من الخطوة الرابعة.',
      ] },
      { heading: 'رأيناه في مكان آخر: فرق الموثوقية، وما ينتقل', body: [
        'مصدر واحد يقول الجوهر. يسمّي كتاب مهندسي الموثوقية في Google الإشارات الأربع، ويفصل العَرَض عن السبب، ويشترط أن يكون كل تنبيه يوقظ عاجلاً وقابلاً للفعل، ويحذّر من المتوسطات لصالح المئينات؛ وما ينتقل هو جدول الأسطر الستة، والعتبات عند المئين 99، وقاعدة أن التنبيه الذي رن لغير شيء يُزال. وما لا ينتقل كما هو، هو المقياس: تطبيق تسيير لا يحتاج فريق ليل، يحتاج شخصاً وثانياً احتياطياً ومستندات مكتوبة.',
        'وما لا يقوله هذا المصدر: أي الوظائف حرجة عندكم، وأي نسبة توفر تقبلون دفع ثمنها؛ الأسبوع الأول من المشروع يجيب، والمسيّر يوقّع.',
      ] },
      { heading: 'قواعد مراقبة تنبّه قبل الزبائن', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **ست إشارات**، الذهبية الأربع مع المسابر الخارجية والعمل. **عتبات تُكتب قبل الإطلاق**، عند المئين 99 للكمونية. **ننبّه على العَرَض**، ونقرأ السبب في السجلات. **كل تنبيه يوقظ يطلب فعلاً** وله مستند تدخل؛ وإلا ذهب إلى التقرير. **هدف توفر في العقد**، وميزانية خطأ تُنفَق عن علم. **تقرير الاثنين**، يقرؤه المسيّر، والعتبات تُعاد قراءتها كل شهر.',
        'قاعدة سابعة تخص عرض السعر: «مراقبة 24/7» ليس متطلباً بل جملة؛ المتطلب يُكتب «مسابر خارجية من مدينتين كل دقيقة؛ سجلات منظَّمة بمعرّف طلب، أخطاء مجمَّعة، تتبع؛ عتبات مكتوبة لكل إشارة بوجهة هاتف أو قناة أو تقرير؛ شخص مناوب مسمّى وثانٍ احتياطي، إقرار في خمس دقائق؛ مستند تدخل لكل تنبيه يوقظ؛ هدف توفر شهري وميزانية خطأ؛ عطل مفتعَل قبل الإطلاق؛ تقرير أسبوعي بالتوفر والحوادث والمدد والإجراءات والضجيج»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يكتب «مراقبة مشمولة» دون أن يقول من يُوقَظ وبماذا وفي كم من الوقت كتب ping الخادم.',
      ] },
      { heading: 'ستة تطبيقات، والتنبيه الذي أنقذها', body: [
        'ستة تطبيقات نراقبها كثيراً، ولكل منها التنبيه الذي رن قبل الزبائن.',
      ], list: [
        '**المتجر المُدار من فرنسا**، الموصوف في [الدليل المخصص](' + L.commerce + '). صفر بيع محصَّل خلال ساعة عمل يوم ثلاثاء: صندوق الجزائر فقد الشبكة؛ عرف المؤسس في ليون قبل المسيّر في الجزائر.',
        '**بيع التذاكر**، الموصوف في [الدليل المخصص](' + L.billetterie + '). حركة مساء طرح التذاكر تتضاعف ثلاثاً؛ رن تنبيه تشبع الطابور عند 80 %، ووُسّع الطابور قبل أن تُباع التذاكر مرتين.',
        '**منصة التوصيل**، الموصوفة في [الدليل المخصص](' + L.livraison + '). مزوّد الرسائل القصيرة لا يرد؛ هبوط الرسائل المرسلة أيقظ أحداً، وتولى المزوّد الثاني بالتحويل.',
        '**تطبيق الدفع**، الموصوف في [الدليل المخصص](' + L.paiement + '). ليلة الشكل 2: سبع وعشرون دقيقة، علم واحد، لا زبون مفقود.',
        '**منصة SaaS**، الموصوفة في [الدليل المخصص](' + L.saas + '). هدف لكل زبون في العقد؛ وتقرير الاثنين يُفصَّل لكل زبون، وزبون واحد بطيء يُرى قبل أن يتصل.',
        '**سلسلة التبريد**، الموصوفة في [الدليل المخصص](' + L.froid + '). مسابر الحرارة نفسها مراقَبة: مسبار صامت خمس عشرة دقيقة يوقظ أحداً، لأن الصمت ليس خبراً جيداً.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم تطبيق يوضع تحت المراقبة في ستة أسابيع، واحد منها لافتعال الأعطال.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب ما نراقب والهدف: الوظائف الحرجة مسمّاة، هدف التوفر، العتبات لكل إشارة، من في المناوبة ومن احتياطي. **الأسبوع 1 إلى 2** يثبّت المسابر الخارجية من الجزائر العاصمة وباريس وفحص صحة كل خدمة. **الأسبوع 2 إلى 3** ينظّم السجلات بمعرّف لكل طلب، ويجمّع الأخطاء، ويضيف التتبع، ويكتب مدة الاحتفاظ. **الأسبوع 3 إلى 4** يكتب التنبيهات بوجهاتها ومستند تدخل لكل تنبيه يوقظ.',
        '**الأسبوع 4 إلى 5** يفتعل الأعطال: نقطع القاعدة، نملأ القرص، نوقف بوابة الدفع، ننهي شهادة في الاختبار؛ كل تنبيه يجب أن يرن، وكل مستند يجب أن ينفع، وما لم يرن يُصحَّح. **الأسبوع 5 إلى 6** يثبّت تقرير الاثنين والمراجعة الشهرية للعتبات. مراقبة لم نرَها ترن قط فرضية، كنسخة احتياطية لم تُستعد قط؛ وحين يكون التطبيق بطيئاً لا معطَّلاً يتولى [دليل السرعة](' + L.lente + ') بالمئينات نفسها.',
      ] },
      { heading: 'ما يُفشل مراقبة', body: [
        'المراقبات التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**ping الخادم كمسبار وحيد.** الخادم يرد، والتطبيق يرفض كل الدفعات.',
        '**رسوم بلا تنبيهات.** كل شيء كان مرئياً على شاشة لا ينظر إليها أحد في الثانية فجراً.',
        '**تنبيهات على الأسباب.** خمسون تنبيهاً ممكناً، عشر رنات في الليلة، والهاتف صامت بعد أسبوع.',
        '**المتوسط بدل المئين.** كان المتوسط جيداً؛ وزبون من عشرين ينتظر عشر ثوانٍ.',
        '**لا مستند تدخل.** رن التنبيه، وبحث الشخص ساعة عما يجب النظر فيه.',
        '**شخص مناوب واحد.** كان نائماً، أو في إجازة، أو غادر الشركة.',
        '**لم يُفتعَل قط.** كان أول عطل حقيقي أول اختبار للتنبيهات أيضاً.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين ومسؤولي إعلام آلي.',
      ], faq: [
        { q: 'لماذا نعرف الأعطال من الزبائن بينما الخادم مراقَب؟', a: 'لأن ما يُراقَب غالباً هو الخادم لا التطبيق: يرد على الـ ping، ومع ذلك تفشل الدفعات أو لا يمر تسجيل الدخول. تلزم مسابر تفعل ما يفعله الزبون من الخارج كل دقيقة، وإشارة عمل، طلبيات مدفوعة في الساعة، ترن حين تهبط إلى الصفر في ساعات العمل.' },
        { q: 'من يُوقَظ، وبماذا؟', a: 'شخص مناوب مسمّى، وثانٍ احتياطي إن لم يصل الإقرار في خمس دقائق. يوقظه العَرَض الذي يتطلب فعلاً فورياً: أخطاء وظيفة حرجة فوق 2 % على خمس دقائق، مسابر خارجية فاشلة من مدينتين، صفر طلبية مدفوعة خلال ساعة عمل، تشبع عند 90 %. وكل الباقي يذهب إلى قناة الفريق أو التقرير.' },
        { q: 'ما مستند التدخل؟', a: 'صفحة لكل تنبيه يمكن أن يوقظ، تُكتب بهدوء: أين ننظر، ماذا نتحقق، أي حلول موجودة، من نُبلغ. لا أحد يفكر جيداً في الثالثة فجراً؛ والمستند يجعل الرد مستقلاً عن ذاكرة الشخص المناوب. ويُعاد قراءته بعد كل حادث ويُصحَّح.' },
        { q: 'ماذا يعني توفر 99,5 %؟', a: 'ثلاث ساعات وست وثلاثون دقيقة من التوقف المسموح في الشهر، مقيسة بالمسابر الخارجية. إنها ميزانية خطأ: كل حادث ينفقها، وتقرير الاثنين يقول ما بقي. وحين تكاد تنفد نتوقف عن الجديد ونصلح. والهدف مكتوب في العقد ويُناقش وفق ما يفعله التطبيق: الصندوق والكتالوج ليس لهما التحمل نفسه.' },
        { q: 'كيف نمنع الهاتف من الرنين لغير شيء؟', a: 'بالتنبيه على الأعراض لا الأسباب، وكتابة العتبات عند المئين 99 لا بالمتوسط، وإزالة كل تنبيه رن دون أن يطلب فعلاً في التقرير التالي. التنبيه الذي يوقظ يجب أن يكون عاجلاً وقابلاً للفعل؛ وإلا انضم إلى القناة أو التقرير. وضجيج التنبيهات سطر في تقرير الاثنين.' },
        { q: 'كم من الوقت لوضع تطبيق تحت المراقبة؟', a: 'ستة أسابيع: واحد لكتابة ما نراقب والهدف، واحد للمسابر والصحة، واحد للسجلات والتتبع، واحد للتنبيهات والمستندات، واحد لافتعال الأعطال والتحقق من أن كل شيء يرن، واحد لتقرير الاثنين. وفي تطبيق قائم يكفي الأسبوعان الأولان غالباً كي لا نعرف الأعطال من الزبائن بعد ذلك.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'ننبّه على العَرَض، ما يراه الزبائن؛ ونقرأ السبب في السجلات. تنبيه على كل سبب ممكن يوقظ عشر مرات لغير شيء.' },
      { after: 5, text: 'مراقبة لم نرَها ترن قط فرضية، كنسخة احتياطية لم تُستعد قط.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا آخر عطل رآه زبائنكم قبلكم', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نضع تطبيقكم تحت المراقبة، بمسابر من مدينتين وعتبات مكتوبة ومناوبة وتقرير الاثنين', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: مسابر خارجية من الجزائر العاصمة وباريس، سجلات منظَّمة وأخطاء مجمَّعة، عتبات لكل إشارة عند المئين 99، تنبيهات على العَرَض بوجهة هاتف أو قناة أو تقرير، مناوب مسمّى واحتياطي، مستند تدخل لكل تنبيه، عطل مفتعَل قبل الإطلاق، هدف توفر وميزانية خطأ، تقرير الاثنين. الإعداد والمستندات في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.sauvegarde, kind: '2027', name: 'إن مات الخادم غداً: النسخ الاحتياطية والاستئناف' },
      { href: L.vivre, kind: '2027', name: 'إبقاء التطبيق حياً: ما يكلّفه كل سنة' },
      { href: L.lente, kind: '2027', name: 'تطبيق بطيء على شبكة ضعيفة' },
      { href: L.livrer, kind: '2027', name: 'تسليم تطبيق دون كسره' },
    ] },
  },
};

const KEYWORDS = "surveillance application entreprise algérie 2027, savoir que l'application est en panne avant les clients, alertes application mobile seuils, astreinte application qui est prévenu, monitoring application algérie, quatre signaux d'or latence erreurs trafic saturation, sondes externes disponibilité, objectif de disponibilité 99,5 budget d'erreur, document d'intervention runbook, rapport hebdomadaire disponibilité incidents, application monitoring alerting on-call algeria 2027, error budget availability objective, مراقبة التطبيق الجزائر, تنبيهات ومناوبة التطبيق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
