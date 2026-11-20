import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/mettre-a-jour-une-application-mobile-sans-la-casser-algerie-2027-compatibilite-api-deploiement-progressif-mise-a-jour-forcee-correctif.mjs';

const SLUG = 'mettre-a-jour-une-application-mobile-sans-la-casser-algerie-2027-compatibilite-api-deploiement-progressif-mise-a-jour-forcee-correctif';
const FIGURES = ['couches', 'deploiement', 'changements', 'compat', 'pannes', 'calendrier'];
const DATE = '2026-11-09';

const L = {
  vivre: '/blog/faire-vivre-une-application-algerie-2027-cout-annee-stores-serveurs-mises-a-jour/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  pwa: '/blog/pwa-ou-application-native-algerie-2027-quand-application-web-installable-suffit-quand-il-faut-les-stores/',
  decisions: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  bloque: '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/',
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  livraison: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/',
  sport: '/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  omra: '/blog/agence-omra-algerie-2027-dossier-pelerin-paiement-par-tranches-suivi-groupes/',
  cours: '/blog/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora/',
  service: '/services/mobile/',
};

const CONTENT = {
  fr: {
    kind: 'Application mobile · Mises à jour · Stores · 2027', title: "Mettre à jour une application mobile sans casser ce que vos clients ont installé en Algérie en 2027 : versions, compatibilité de l'API, déploiement progressif, mise à jour forcée, et le correctif qui part en un jour",
    dek: "« La moitié de mes clients ont encore l'ancienne version, et depuis la mise à jour, rien ne marche pour eux. » Une application mobile vit sur des téléphones que vous ne contrôlez pas : certains se mettent à jour la nuit en wifi, d'autres jamais, certains datent de 2019. Ce guide décrit comment on livre une nouvelle version sans rien casser : une API qui sert plusieurs versions à la fois, une version minimale décidée par le serveur et relevée seulement après l'adoption, un déploiement progressif sur les deux stores qu'on arrête au premier signal, les six types de changement et le chemin de chacun, les tests sur les appareils que vos clients ont vraiment, et le correctif qui part en un jour.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Application mobile', 'Mises à jour', 'Stores', 'Compatibilité', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Vous ne contrôlez ni quand un client met à jour, ni s'il le fait ; vous contrôlez ce que l'application fait au démarrage et ce que l'API répond. Donc : **chaque appel porte la version de l'application**, l'API **ajoute des champs et n'en retire jamais sans date**, les anciennes routes sont **maintenues jusqu'à une date écrite**, et c'est **le serveur qui décide** qui voit un bandeau souple et qui voit un écran de mise à jour requise. La nouvelle version part sur les deux stores par **déploiement progressif**, 5 % puis 20 % puis 100 % sur Android, sept jours par phases sur iOS, avec un **seuil de plantage écrit avant** et un **arrêt** si on le franchit. Les textes, écrans et promotions passent par des **drapeaux** et par l'API, pas par une soumission. Un correctif critique part **en un jour**, par le même chemin. La version minimale n'est relevée qu'**après 90 % d'adoption**, jamais le jour de la sortie.",
      "Ce guide s'adresse au gérant dont l'application est installée chez des centaines de clients ou de livreurs, au fondateur installé en France qui ne peut pas tester sur les téléphones de ses utilisateurs en Algérie, et au responsable qui doit comparer deux devis de maintenance. Il ne redit pas ce que coûte une application chaque année, décrit dans [le guide sur la vie d'une application](" + L.vivre + "), ni comment on livre une plateforme web sans la casser, décrit dans [le guide sur la livraison](" + L.livrer + ") ; il décrit ce qui se construit pour qu'une mise à jour mobile soit un événement sans risque, et il prolonge [notre page sur les applications mobiles](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les stores disent', body: [
        "La validation est plus rapide que ce qu'on croit, et moins que ce qu'il faudrait pour un correctif. Apple écrit que l'App Review traite « au moins 50 % des soumissions en moins de 24 heures et 90 % en moins de 48 heures », et qu'une revue accélérée peut être demandée « pour corriger un bogue critique », avec les étapes de reproduction. Ce que cela impose : un correctif critique iOS est une affaire d'un à deux jours même avec la demande accélérée, et c'est pour cela que l'application doit pouvoir continuer à marcher pendant ce temps, avec la fonction en cause désactivée par un drapeau servi par l'API.",
        "Le déploiement progressif existe sur les deux stores, mais pas de la même façon. Sur l'App Store, la diffusion par phases « libère la mise à jour progressivement sur 7 jours », 1 %, 2 %, 5 %, 10 %, 20 %, 50 % puis 100 % des utilisateurs en mise à jour automatique, peut être mise en pause « jusqu'à 30 jours », et n'empêche personne de télécharger la version à la main. Sur Google Play, le déploiement par étapes est piloté à la main : vous choisissez le pourcentage, vous le relevez, et vous pouvez « arrêter un déploiement par étapes » si vous trouvez un problème, auquel cas « aucun utilisateur supplémentaire ne recevra » la version, ceux qui l'ont déjà la gardant. Ce que cela impose : sur iOS on surveille et on met en pause ; sur Android on décide chaque palier, et le palier suivant n'est franchi que lorsque le taux de plantage du jour est sous le seuil.",
        "Le store peut proposer la mise à jour dans l'application elle-même. Les mises à jour dans l'application de Google Play, prises en charge « sur les appareils exécutant Android 5.0 ou plus », offrent deux parcours : le parcours « flexible », téléchargement en arrière-plan pendant que l'utilisateur continue, et le parcours « immédiat », un écran plein qui « exige de l'utilisateur qu'il mette à jour et redémarre l'application pour continuer ». Apple n'a pas d'équivalent : sur iOS, l'écran de mise à jour requise est le vôtre, et il renvoie vers l'App Store. Enfin, chaque année, Google Play relève l'API cible exigée pour les mises à jour, Android 16 au 31 août 2026 selon la page d'aide, et une application en retard « cesse d'être disponible pour les nouveaux utilisateurs » dont le téléphone est plus récent que sa cible, les utilisateurs existants la gardant. Ce que nous n'avons pas trouvé : une répartition publique des versions Android en Algérie ; ce que nous voyons sur nos projets, c'est encore des téléphones de 2019, et nous le disons comme une observation.",
      ] },
      { heading: 'Une mise à jour mobile, en cinq couches', body: [
        "Avant le jour par jour, les cinq couches, et celle qui rend les quatre autres possibles.",
      ], visual: 'couches', after: [
        "**Le téléphone du client** : l'application installée, sa version, sa base locale, le système, parfois un Android de 2019 ; vous ne décidez ni quand il met à jour, ni s'il le fait. **Les stores** : la validation, le déploiement progressif ou par phases, l'arrêt ou la pause, la mise à jour dans l'application, et les exigences annuelles de version cible. **Votre API** : la version de l'application lue à chaque appel, la version minimale acceptée, les champs ajoutés jamais retirés, les anciennes routes maintenues jusqu'à une date ; c'est la couche qui doit parler à toutes les versions installées en même temps, et c'est elle qui décide qui doit mettre à jour.",
        "**L'observabilité** : plantages pour mille sessions par version, adoption par jour, erreurs d'API par version, appareils et systèmes réellement présents ; le seuil est écrit avant le déploiement, et le chiffre est lu chaque matin pendant dix jours, sur un écran bâti comme [le tableau de bord du gérant](" + L.dashboard + "). **Le processus** : gel du code, tests sur appareils anciens, train de versions à dates fixes, notes de version, correctif en un jour, drapeaux de fonctionnalité. Une application dont l'API casse les anciennes versions n'a pas le choix : elle doit tout mettre à jour d'un coup, et c'est précisément ce qu'on ne peut pas faire sur des téléphones qu'on ne contrôle pas ; tout le reste découle de cette phrase.",
      ] },
      { heading: 'Une mise à jour, jour par jour, sur les deux stores', body: [
        "Une version se comprend sur dix jours, deux pistes, et un arrêt.",
      ], visual: 'deploiement', after: [
        "**Jour 0** : tests internes sur Android via la piste interne, soumission sur iOS. **Jour 1** : 5 % des clients Android reçoivent la version ; iOS est validée. **Jour 2** : 5 % maintenus, le taux de plantage est à 0,5 pour mille sessions, sous le seuil de 1,0 ; iOS commence sa phase à 1 %. **Jour 3** : passage à 20 % sur Android, et le chiffre du matin dit 2,1 : un plantage au paiement sur certains Android anciens, que les 5 % n'avaient pas montré parce qu'ils ne comptaient pas assez de ces téléphones. Le déploiement est arrêté ; personne au-delà de 20 % ne recevra cette version. **Jour 4** : correctif 2.4.1, testé sur un Android 8, soumis ; la fonction de paiement en cause était déjà désactivée par drapeau la veille au soir, sans soumission, pour les 20 % touchés.",
        "**Jour 5** : la 2.4.1 part à 20 %, le taux retombe à 0,3. **Jour 6** : 50 %. **Jour 7** : 100 % sur Android ; iOS en est à 50 % de sa courbe et finit le jour 8. Pendant ces dix jours, l'API a servi la 2.3 et la 2.4 en même temps : personne n'a été bloqué, et les 71 % de clients encore en 2.3 ont continué à commander. Les chiffres de plantage de ce récit sont un exemple construit ; ce qui ne l'est pas, c'est l'ordre des décisions, et le fait que l'arrêt a été décidé par un chiffre lu le matin, pas par un client au téléphone.",
      ] },
      { heading: 'Six types de changement, et le chemin que chacun emprunte', body: [
        "Tout ne passe pas par les stores, et la plupart des changements ne devraient pas.",
      ], visual: 'changements', after: [
        "**Un texte, une couleur, un écran** : drapeau de fonctionnalité ou contenu servi par l'API ; actif le jour même, pour toutes les versions. **Un nouveau champ** : ajouté à la réponse, jamais obligatoire ; l'ancienne version l'ignore sans erreur, la nouvelle le lit ; c'est le changement le plus fréquent et il ne coûte rien quand la règle est tenue. **Un correctif critique** : version corrective le jour même, revue accélérée demandée avec les étapes de reproduction, mise à jour immédiate proposée dans l'application sur Android, écran de mise à jour sur iOS une fois la version visible.",
        "**La base locale change** : migration versionnée exécutée au démarrage, testée sur une base pleine et sur un appareil ancien, jamais de suppression de colonne dans la même version ; c'est la partie fragile d'une application qui travaille hors ligne, décrite dans [le guide sur la synchronisation](" + L.offline + "). **Un écran disparaît** : drapeau éteint d'abord pour tous, code retiré deux versions plus tard. **L'API change de forme** : nouvelle route v2, v1 maintenue jusqu'à une date écrite, version minimale relevée après 90 % d'adoption. Quatre des six changements ne passent pas par les stores, ou pas tout de suite ; le réflexe « on sort une version » est réservé à ce qui change vraiment le code installé.",
      ] },
      { heading: "Une seule API, trois versions installées au même moment", body: [
        "La compatibilité ne se décide pas dans l'application mais dans l'API, et elle se voit sur trois téléphones.",
      ], visual: 'compat', after: [
        "**Chaque appel porte la version** de l'application dans un en-tête, et le serveur répond différemment à chacune. La 2.2, sur un Android de 2019 jamais mis à jour, est sous la version minimale : elle reçoit une réponse qui dit « version trop ancienne », et l'application affiche l'écran de mise à jour requise, avec le lien vers le store et, sur Android, la mise à jour immédiate dans l'application. La 2.3, la version courante chez 71 % des clients, reçoit ses données et un bandeau souple ; le champ ajouté par la 2.4 est présent dans la réponse et elle l'ignore sans erreur. La 2.4 lit les nouveaux champs sur la route v2.",
        "**Trois règles tiennent ce dessin.** On ajoute des champs, on n'en retire jamais sans date : tant qu'une version servie lit un champ, il reste. Les anciennes routes sont maintenues jusqu'à une date écrite dans le contrat, pas « quand tout le monde aura migré ». La version minimale est relevée par le serveur, après 90 % d'adoption et un taux de plantage stable, jamais le jour de la sortie, et jamais vers une version qui n'est pas encore visible dans les deux stores. Les parts du dessin sont un exemple ; le journal des appels par version, lu chaque semaine, donne les vraies, et c'est lui qui dit quand relever la version minimale.",
      ] },
      { heading: "Six pannes de mise à jour, et ce que l'architecture fait", body: [
        "Six pannes que nous voyons sur les applications que nous reprenons, et la parade de chacune.",
      ], visual: 'pannes', after: [
        "**L'application refuse de démarrer** sur les téléphones de 2019 : la version minimale du système se décide sur les appareils réellement présents dans le journal, pas sur les statistiques mondiales, et l'ancienne application continue d'être servie. **Un champ retiré de l'API** fait planter toutes les anciennes versions le même matin : tests de contrat joués contre les trois dernières versions avant chaque mise en production. **La migration locale corrompt la base** et les commandes hors ligne de la semaine disparaissent : migration testée sur une base pleine, sauvegarde locale avant migration, 5 % d'abord.",
        "**Mise à jour forcée vers une version absente** : le serveur exige la 2.4 encore en validation, tout le monde est bloqué ; la version minimale n'est relevée qu'une fois la version visible dans les deux stores et adoptée. **Le correctif aggrave** : sorti sans test à 100 % ; même chemin que toute version. **Personne ne regarde** : le taux double et on l'apprend par un client ; tableau par version lu chaque matin, alerte au-dessus du seuil. Toutes ces pannes se voient à 5 % avant de se voir à 100 %, et c'est la seule raison du déploiement progressif ; une application reprise d'un prestataire disparu, comme dans [le guide dédié](" + L.bloque + "), commence par ce tableau.",
      ] },
      { heading: 'Vu ailleurs : les documentations des stores, et ce qui se transpose', body: [
        "Trois sources disent l'essentiel. Apple documente la diffusion par phases sur sept jours, la pause jusqu'à trente jours, les délais de revue et la revue accélérée pour un bogue critique ; ce qui se transpose, c'est qu'un correctif iOS est une affaire d'un à deux jours, et que l'application doit tenir ce temps avec la fonction désactivée par drapeau. Google documente le déploiement par étapes piloté à la main, l'arrêt, et les mises à jour dans l'application, flexible ou immédiate ; ce qui se transpose, c'est que chaque palier Android est une décision prise sur le chiffre du matin, et que la mise à jour immédiate est l'outil de la version minimale. Google documente aussi la cible annuelle, Android 16 au 31 août 2026 ; ce qui se transpose, c'est une version de plus dans le train chaque été, planifiée en juin.",
        "Ce que ces sources ne disent pas : quels téléphones ont vos clients, quel seuil de plantage vous acceptez, et combien de versions vous servez en même temps ; le journal des appels par version répond à la première question, le cahier des charges aux deux autres.",
      ] },
      { heading: "Les règles d'une mise à jour qu'on peut livrer sans trembler", body: [
        "Six règles, écrites avant la première version. **Chaque appel porte la version** de l'application. **L'API ajoute et ne retire jamais sans date.** **Le serveur décide** de la version minimale, après l'adoption, jamais le jour de la sortie. **Déploiement progressif** sur les deux stores avec un seuil de plantage écrit avant et un arrêt possible. **Tests sur les appareils réellement présents**, dont les anciens, et sur une base locale pleine. **Les textes, écrans et promotions passent par des drapeaux**, pas par une soumission.",
        "Une septième règle porte sur le devis : « maintenance et mises à jour de l'application » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « version de l'application dans chaque appel ; règle d'ajout sans retrait et routes maintenues jusqu'à une date ; version minimale décidée côté serveur après adoption ; déploiement progressif avec seuil de plantage et arrêt ; mise à jour dans l'application sur Android et écran de mise à jour requise sur iOS ; drapeaux de fonctionnalité ; migrations locales versionnées testées sur base pleine ; tests de contrat contre les trois dernières versions ; tableau de plantages et d'adoption par version ; correctif en un jour par le même chemin ; version de cible Android chaque été », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui chiffre « la publication sur les stores » a chiffré le jour 0 d'un processus de dix jours.",
      ] },
      { heading: "Six applications, et la mise à jour qui leur fait le plus peur", body: [
        "Six applications que nous maintenons souvent, et pour chacune la mise à jour qui demande le plus de soin.",
      ], list: [
        "**L'application des commerciaux terrain**, décrite dans [le guide dédié](" + L.prevente + "). La base locale pleine de commandes de la tournée ; la migration locale est testée sur un téléphone revenu de trois jours sans réseau.",
        "**L'application des livreurs**, décrite dans [le guide dédié](" + L.livraison + "). Deux cents téléphones hétérogènes ; la version minimale du système se décide sur le journal, et la mise à jour immédiate se fait au dépôt, en wifi, pas en tournée.",
        "**L'application de la salle de sport**, décrite dans [le guide dédié](" + L.sport + "). Le contrôle d'accès doit marcher avec l'ancienne version le jour de la sortie ; le nouveau format de badge est ajouté, l'ancien reste servi.",
        "**L'application de paiement**, décrite dans [le guide sur le paiement en ligne](" + L.paiement + "). Un correctif au paiement part en un jour, et la fonction est coupée par drapeau en attendant.",
        "**L'application de l'agence Omra**, décrite dans [le guide dédié](" + L.omra + "). Les pèlerins sont à l'étranger pendant la saison ; aucune mise à jour forcée pendant le voyage, drapeaux seulement.",
        "**L'application pilotée depuis la France**, décrite dans [le guide dédié](" + L.commerce + "). Le fondateur ne voit pas les téléphones de ses clients ; le tableau par version est son seul œil, et il le lit chaque matin pendant dix jours.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une version livrée en huit semaines, dont une seule de déploiement.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** gèle le code et écrit les notes de version, pour le client et pour les stores. **La semaine 1 à 2** teste sur les appareils anciens, Android 8 et 10, un iPhone de six ans, un réseau lent, la migration locale sur une base pleine, et joue les tests de contrat contre les trois dernières versions. **La semaine 2 à 3** soumet aux deux stores, avec la piste interne Google Play en parallèle. **La semaine 3 à 4** est le déploiement progressif, 5 %, 20 %, 50 %, 100 % sur Android et les phases iOS, avec arrêt si le seuil est franchi.",
        "**Les semaines 3 à 5** surveillent, plantages et erreurs d'API par version chaque matin, et sortent un correctif en un jour si besoin, par le même chemin. **Les semaines 6 à 8** relèvent la version minimale, après 90 % d'adoption et un taux stable ; les retardataires voient l'écran de mise à jour requise. Chaque version est démontrée au client avant soumission, comme [le guide sur la livraison](" + L.livrer + ") le décrit ; et chaque été, le 31 août, la cible Android exigée par Google Play est une version de plus dans le train, planifiée en juin. Le choix entre application native et application web installable, décrit dans [le guide dédié](" + L.pwa + "), change ce calendrier : une application web installable n'a pas de jour 2 à 3.",
      ] },
      { heading: 'Ce qui fait échouer une mise à jour mobile', body: [
        "Les applications que nous reprenons ont presque toujours échoué sur une mise à jour pour l'une de ces raisons.",
      ], list: [
        "**L'API qui ne connaît pas la version** de l'application. Impossible de savoir qui plante, impossible de forcer qui que ce soit proprement.",
        "**Un champ retiré « parce que plus personne ne s'en sert »**. Les 6 % qui s'en servaient appellent le lendemain.",
        "**100 % d'un coup.** Le plantage se voit chez tous les clients au lieu de 5 %.",
        "**La version minimale relevée le jour de la sortie.** La version n'est pas encore visible sur l'App Store ; tout le monde est bloqué.",
        "**Les tests sur le téléphone du développeur.** Un modèle récent, en wifi, à Alger ; les clients ont des Android de 2019, en 3G, à Sétif.",
        "**La migration locale sans sauvegarde.** Les commandes hors ligne de la semaine disparaissent et ne reviennent pas.",
        "**Personne ne regarde le tableau.** Le taux de plantage double, et on l'apprend par un client.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et de responsables informatiques.",
      ], faq: [
        { q: 'Pourquoi la moitié de mes clients ont-ils encore l’ancienne version ?', a: "Parce que la mise à jour dépend du téléphone : réglages de mise à jour automatique, wifi, espace libre, version du système. Sur iOS, la diffusion par phases ne touche que les utilisateurs en mise à jour automatique, 1 % le premier jour et 100 % le septième ; sur Android, c'est vous qui choisissez le pourcentage. Une application bien construite n'a pas besoin que tout le monde soit à jour : l'API sert plusieurs versions à la fois, et la version minimale n'est relevée qu'après l'adoption." },
        { q: 'Peut-on forcer la mise à jour ?', a: "Oui, mais par le serveur, pas par l'application : chaque appel porte la version, et au-dessous de la version minimale, l'API répond « version trop ancienne » et l'application affiche l'écran de mise à jour requise, avec sur Android la mise à jour immédiate dans l'application. On ne relève la version minimale qu'après 90 % d'adoption et un taux de plantage stable, et jamais vers une version qui n'est pas encore visible dans les deux stores." },
        { q: 'Combien de temps pour corriger un bogue critique ?', a: "Un jour pour la version corrective, puis la validation : Apple dit traiter au moins 50 % des soumissions en moins de 24 heures et 90 % en moins de 48, et une revue accélérée peut être demandée pour un bogue critique. Pendant ce temps, la fonction en cause est désactivée par un drapeau servi par l'API, sans soumission, et l'application continue de marcher." },
        { q: 'Faut-il tout faire passer par les stores ?', a: "Non. Les textes, l'ordre des écrans, les promotions et les contenus passent par des drapeaux et par l'API, actifs le jour même pour toutes les versions. Un nouveau champ est ajouté à l'API sans soumission. Seul ce qui change vraiment le code installé, un écran nouveau, une base locale modifiée, un correctif de plantage, passe par une version." },
        { q: 'Comment tester sur des téléphones que je ne vois pas ?', a: "Le journal des appels par version et par appareil dit quels téléphones et quels systèmes sont réellement présents chez vos clients ; nous testons sur ces modèles-là, dont les anciens, et sur un réseau lent. Puis le déploiement progressif fait le reste : 5 % des clients sont le dernier test, et le seuil de plantage décide de la suite." },
        { q: 'Que se passe-t-il avec Google Play chaque année ?', a: "Chaque 31 août, Google Play relève la version Android cible exigée pour les mises à jour, Android 16 au 31 août 2026 selon sa page d'aide ; une application en retard cesse d'être proposée aux nouveaux utilisateurs dont le téléphone est plus récent que sa cible, les utilisateurs existants la gardant. C'est une version de plus dans le train, planifiée en juin, et un poste du contrat de maintenance." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Une application dont l'API casse les anciennes versions doit tout mettre à jour d'un coup, et c'est précisément ce qu'on ne peut pas faire sur des téléphones qu'on ne contrôle pas." },
      { after: 4, text: "On ajoute des champs, on n'en retire jamais sans date ; et c'est le serveur qui décide qui doit mettre à jour." },
    ],
    cta: { eyebrow: 'Envoyez-nous votre application et sa dernière mise à jour', title: "Gérant en Algérie ou fondateur en France : nous mettons à jour votre application mobile sans casser ce que vos clients ont installé, avec un déploiement progressif, une API compatible et un correctif en un jour", body: "Symloop construit et maintient des applications mobiles en production pour les entreprises en Algérie et les fondateurs installés en France : version dans chaque appel, API qui ajoute sans retirer, version minimale décidée côté serveur, déploiement progressif sur les deux stores avec seuil de plantage, mise à jour dans l'application, drapeaux de fonctionnalité, migrations locales testées sur base pleine, tableau de plantages par version, correctif en un jour. Code et documentation dans votre dépôt ; une démonstration avant chaque soumission." },
    related: { label: 'À lire aussi', items: [
      { href: L.vivre, kind: '2027', name: 'Faire vivre une application : ce que coûte chaque année' },
      { href: L.livrer, kind: '2027', name: 'Livrer une application sans la casser' },
      { href: L.offline, kind: '2027', name: 'Application hors ligne et synchronisation' },
      { href: L.decisions, kind: '2027', name: 'Créer une application mobile : sept décisions' },
    ] },
  },
  en: {
    kind: 'Mobile app · Updates · Stores · 2027', title: 'Updating a mobile application without breaking what your customers have installed in Algeria in 2027: versions, API compatibility, staged rollout, forced update, and the hotfix that ships in a day',
    dek: '“Half my customers still have the old version, and since the update nothing works for them.” A mobile application lives on phones you do not control: some update overnight on wifi, some never, some date from 2019. This guide describes how a new version is delivered without breaking anything: an API that serves several versions at once, a minimum version decided by the server and raised only after adoption, a staged rollout on both stores halted at the first signal, the six kinds of change and the path of each, tests on the devices your customers really have, and the hotfix that ships in a day.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Mobile app', 'Updates', 'Stores', 'Compatibility', 'Algeria 2027'],
    intro: [
      '**Short answer.** You control neither when a customer updates nor whether they do; you control what the app does at startup and what the API answers. So: **every call carries the app version**, the API **adds fields and never removes one without a date**, old routes are **kept until a written date**, and **the server decides** who sees a soft banner and who sees an update-required screen. The new version ships on both stores by **staged rollout**, 5 % then 20 % then 100 % on Android, seven phased days on iOS, with a **crash threshold written beforehand** and a **halt** if it is crossed. Texts, screens and promotions go through **flags** and the API, not through a submission. A critical fix ships **in a day**, by the same path. The minimum version is raised only **after 90 % adoption**, never on release day.',
      'This guide is for the manager whose app is installed on hundreds of customers’ or couriers’ phones, the founder settled in France who cannot test on their users’ phones in Algeria, and the person who must compare two maintenance quotes. It does not repeat what an app costs every year, described in [the guide on keeping an app alive](' + L.vivre + '), nor how a web platform is delivered without breaking it, described in [the delivery guide](' + L.livrer + '); it describes what is built so that a mobile update is a risk-free event, and extends [our page on mobile applications](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the stores say', body: [
        'Review is faster than people think, and slower than a hotfix needs. Apple writes that App Review handles “at least 50 % of submissions in less than 24 hours and 90 % in less than 48 hours”, and that an expedited review can be requested “to fix a critical bug”, with reproduction steps. What this imposes: a critical iOS fix is a one-to-two-day affair even with the expedited request, which is why the app must keep working meanwhile, with the faulty function switched off by a flag served by the API.',
        'Staged rollout exists on both stores, but not the same way. On the App Store, phased release “will release your app’s update gradually over 7 days”, 1 %, 2 %, 5 %, 10 %, 20 %, 50 % then 100 % of users with automatic updates, can be paused “for up to 30 days”, and does not stop anyone downloading the version manually. On Google Play, the staged rollout is driven by hand: you pick the percentage, you raise it, and you can “halt a staged rollout” if you find an issue, in which case “no additional users will receive” the version while those who have it keep it. What this imposes: on iOS you watch and pause; on Android you decide each step, and the next step is taken only when the day’s crash rate is under the threshold.',
        'The store can offer the update inside the app itself. Google Play in-app updates, supported “on devices running Android 5.0 or higher”, offer two flows: the “flexible” flow, background download while the user carries on, and the “immediate” flow, a full-screen flow that “requires the user to update and restart the app in order to continue”. Apple has no equivalent: on iOS the update-required screen is yours, and it links to the App Store. Finally, every year Google Play raises the target API required for updates, Android 16 by 31 August 2026 per its help page, and a lagging app “will stop being available to all new users” whose phone runs a newer Android than its target, existing users keeping it. What we did not find: a public breakdown of Android versions in Algeria; what we see on our projects is still 2019 phones, and we say so as an observation.',
      ] },
      { heading: 'A mobile update, in five layers', body: [
        'Before the day by day, the five layers, and the one that makes the other four possible.',
      ], visual: 'couches', after: [
        '**The customer’s phone**: the installed app, its version, its local database, the OS, sometimes a 2019 Android; you decide neither when they update nor whether they do. **The stores**: review, staged or phased rollout, halt or pause, in-app update, and the yearly target-version requirements. **Your API**: the app version read on every call, the minimum accepted version, fields added never removed, old routes kept until a date; it is the layer that must talk to every installed version at once, and it decides who must update.',
        '**Observability**: crashes per thousand sessions per version, adoption per day, API errors per version, devices and OS versions actually present; the threshold is written before the rollout, and the figure is read every morning for ten days, on a screen built like [the manager’s dashboard](' + L.dashboard + '). **Process**: code freeze, tests on old devices, release train on fixed dates, release notes, one-day hotfix, feature flags. An app whose API breaks old versions has no choice: it must update everyone at once, which is exactly what you cannot do on phones you do not control; everything else follows from that sentence.',
      ] },
      { heading: 'One update, day by day, on both stores', body: [
        'A version is understood over ten days, two tracks, and one halt.',
      ], visual: 'deploiement', after: [
        '**Day 0**: internal tests on Android through the internal track, submission on iOS. **Day 1**: 5 % of Android customers receive the version; iOS is approved. **Day 2**: 5 % held, the crash rate is 0.5 per thousand sessions, under the 1.0 threshold; iOS starts its phase at 1 %. **Day 3**: step to 20 % on Android, and the morning figure says 2.1: a crash at payment on some old Androids, which the 5 % had not shown because they did not include enough of those phones. The rollout is halted; nobody beyond 20 % will receive this version. **Day 4**: hotfix 2.4.1, tested on an Android 8, submitted; the payment function in question had already been switched off by flag the evening before, without submission, for the 20 % affected.',
        '**Day 5**: 2.4.1 ships at 20 %, the rate drops to 0.3. **Day 6**: 50 %. **Day 7**: 100 % on Android; iOS is at 50 % of its curve and finishes on day 8. During these ten days the API served 2.3 and 2.4 at the same time: nobody was blocked, and the 71 % of customers still on 2.3 kept ordering. The crash figures in this story are a constructed example; what is not constructed is the order of decisions, and the fact that the halt was decided by a figure read in the morning, not by a customer on the phone.',
      ] },
      { heading: 'Six kinds of change, and the path each one takes', body: [
        'Not everything goes through the stores, and most changes should not.',
      ], visual: 'changements', after: [
        '**A text, a colour, a screen**: feature flag or content served by the API; live the same day, for every version. **A new field**: added to the response, never required; the old version ignores it without error, the new one reads it; it is the most frequent change and costs nothing when the rule holds. **A critical fix**: patch version the same day, expedited review requested with reproduction steps, immediate update offered in the app on Android, update screen on iOS once the build is visible.',
        '**The local database changes**: versioned migration run at startup, tested on a full database and on an old device, never a column removal in the same version; it is the fragile part of an app that works offline, described in [the synchronisation guide](' + L.offline + '). **A screen disappears**: flag turned off for everyone first, code removed two versions later. **The API changes shape**: new v2 route, v1 kept until a written date, minimum version raised after 90 % adoption. Four of the six changes do not go through the stores, or not right away; the reflex “we ship a version” is reserved for what really changes the installed code.',
      ] },
      { heading: 'One API, three versions installed at the same time', body: [
        'Compatibility is not decided in the app but in the API, and it shows on three phones.',
      ], visual: 'compat', after: [
        '**Every call carries the app version** in a header, and the server answers each one differently. Version 2.2, on a 2019 Android never updated, is below the minimum: it receives an answer saying “version too old”, and the app shows the update-required screen, with the link to the store and, on Android, the immediate in-app update. Version 2.3, current for 71 % of customers, receives its data and a soft banner; the field added by 2.4 is present in the response and it ignores it without error. Version 2.4 reads the new fields on the v2 route.',
        '**Three rules hold this drawing.** Fields are added, never removed without a date: as long as a served version reads a field, it stays. Old routes are kept until a date written in the contract, not “once everyone has migrated”. The minimum version is raised by the server, after 90 % adoption and a stable crash rate, never on release day, and never to a version not yet visible in both stores. The shares in the drawing are an example; the log of calls per version, read every week, gives the real ones, and it is what says when to raise the minimum version.',
      ] },
      { heading: 'Six update failures, and what the architecture does', body: [
        'Six failures we see on the apps we take over, and the defence for each.',
      ], visual: 'pannes', after: [
        '**The app refuses to start** on 2019 phones: the minimum OS version is decided on the devices actually present in the log, not on worldwide statistics, and the old app keeps being served. **A field removed from the API** crashes every old version the same morning: contract tests run against the last three versions before every production release. **The local migration corrupts the database** and the week’s offline orders vanish: migration tested on a full database, local backup before migration, 5 % first.',
        '**Forced update to a missing version**: the server requires 2.4 still in review, everyone is blocked; the minimum version is raised only once the build is visible in both stores and adopted. **The fix makes it worse**: shipped untested at 100 %; same path as any version. **Nobody is watching**: the rate doubles and you learn it from a customer; per-version board read every morning, alert above the threshold. All these failures are visible at 5 % before they are visible at 100 %, and that is the only reason for a staged rollout; an app taken over from a vanished supplier, as in [the dedicated guide](' + L.bloque + '), starts with that board.',
      ] },
      { heading: 'Seen elsewhere: the stores’ documentation, and what transposes', body: [
        'Three sources say the essentials. Apple documents the seven-day phased release, the pause up to thirty days, review times and expedited review for a critical bug; what transposes is that an iOS fix is a one-to-two-day affair, and the app must hold that long with the function switched off by flag. Google documents the hand-driven staged rollout, the halt, and in-app updates, flexible or immediate; what transposes is that each Android step is a decision taken on the morning figure, and that the immediate update is the tool of the minimum version. Google also documents the yearly target, Android 16 by 31 August 2026; what transposes is one more version in the train every summer, planned in June.',
        'What these sources do not say: which phones your customers have, which crash threshold you accept, and how many versions you serve at once; the log of calls per version answers the first question, the specification the other two.',
      ] },
      { heading: 'The rules of an update you can ship without flinching', body: [
        'Six rules, written before the first version. **Every call carries the app version.** **The API adds and never removes without a date.** **The server decides** the minimum version, after adoption, never on release day. **Staged rollout** on both stores with a crash threshold written beforehand and a possible halt. **Tests on the devices actually present**, including old ones, and on a full local database. **Texts, screens and promotions go through flags**, not through a submission.',
        'A seventh rule concerns the quote: “app maintenance and updates” is not a requirement, it is a sentence; the requirement reads “app version in every call; add-without-remove rule and routes kept until a date; minimum version decided server-side after adoption; staged rollout with crash threshold and halt; in-app update on Android and update-required screen on iOS; feature flags; versioned local migrations tested on a full database; contract tests against the last three versions; crash and adoption board per version; one-day hotfix by the same path; Android target version every summer”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that prices “publishing to the stores” has priced day 0 of a ten-day process.',
      ] },
      { heading: 'Six apps, and the update they fear most', body: [
        'Six apps we often maintain, and for each the update that needs the most care.',
      ], list: [
        '**The field sales app**, described in [the dedicated guide](' + L.prevente + '). A local database full of the round’s orders; the local migration is tested on a phone back from three days without network.',
        '**The couriers’ app**, described in [the dedicated guide](' + L.livraison + '). Two hundred heterogeneous phones; the minimum OS version is decided on the log, and the immediate update is done at the depot, on wifi, not on the road.',
        '**The gym app**, described in [the dedicated guide](' + L.sport + '). Access control must work with the old version on release day; the new badge format is added, the old one stays served.',
        '**The payment app**, described in [the online payment guide](' + L.paiement + '). A payment fix ships in a day, and the function is cut by flag meanwhile.',
        '**The Umrah agency app**, described in [the dedicated guide](' + L.omra + '). Pilgrims are abroad during the season; no forced update during the trip, flags only.',
        '**The app run from France**, described in [the dedicated guide](' + L.commerce + '). The founder does not see their customers’ phones; the per-version board is their only eye, and they read it every morning for ten days.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of a version delivered in eight weeks, only one of them rollout.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** freezes the code and writes the release notes, for the client and for the stores. **Week 1 to 2** tests on old devices, Android 8 and 10, a six-year-old iPhone, a slow network, the local migration on a full database, and runs contract tests against the last three versions. **Week 2 to 3** submits to both stores, with the Google Play internal track in parallel. **Week 3 to 4** is the staged rollout, 5 %, 20 %, 50 %, 100 % on Android and the iOS phases, halted if the threshold is crossed.',
        '**Weeks 3 to 5** watch, crashes and API errors per version every morning, and ship a hotfix in a day if needed, by the same path. **Weeks 6 to 8** raise the minimum version, after 90 % adoption and a stable rate; stragglers see the update-required screen. Every version is demoed to the client before submission, as [the delivery guide](' + L.livrer + ') describes; and every summer, on 31 August, the Android target required by Google Play is one more version in the train, planned in June. The choice between a native app and an installable web app, described in [the dedicated guide](' + L.pwa + '), changes this calendar: an installable web app has no week 2 to 3.',
      ] },
      { heading: 'What makes a mobile update fail', body: [
        'The apps we take over almost always failed on an update for one of these reasons.',
      ], list: [
        '**The API that does not know the app version.** Impossible to know who crashes, impossible to force anyone cleanly.',
        '**A field removed “because nobody uses it any more”.** The 6 % who used it call the next day.',
        '**100 % in one go.** The crash shows on every customer instead of 5 %.',
        '**The minimum version raised on release day.** The build is not yet visible on the App Store; everyone is blocked.',
        '**Tests on the developer’s phone.** A recent model, on wifi, in Algiers; customers have 2019 Androids, on 3G, in Sétif.',
        '**The local migration with no backup.** The week’s offline orders vanish and do not come back.',
        '**Nobody watches the board.** The crash rate doubles, and you learn it from a customer.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and IT managers.',
      ], faq: [
        { q: 'Why do half my customers still have the old version?', a: 'Because the update depends on the phone: automatic update settings, wifi, free space, OS version. On iOS, phased release only reaches users with automatic updates, 1 % on the first day and 100 % on the seventh; on Android, you choose the percentage. A well-built app does not need everyone to be up to date: the API serves several versions at once, and the minimum version is raised only after adoption.' },
        { q: 'Can the update be forced?', a: 'Yes, but by the server, not by the app: every call carries the version, and below the minimum version the API answers “version too old” and the app shows the update-required screen, with the immediate in-app update on Android. The minimum version is raised only after 90 % adoption and a stable crash rate, and never to a version not yet visible in both stores.' },
        { q: 'How long to fix a critical bug?', a: 'One day for the patch version, then review: Apple says it handles at least 50 % of submissions in under 24 hours and 90 % in under 48, and an expedited review can be requested for a critical bug. Meanwhile, the faulty function is switched off by a flag served by the API, without submission, and the app keeps working.' },
        { q: 'Must everything go through the stores?', a: 'No. Texts, screen order, promotions and content go through flags and the API, live the same day for every version. A new field is added to the API without submission. Only what really changes the installed code, a new screen, a changed local database, a crash fix, goes through a version.' },
        { q: 'How do you test on phones you cannot see?', a: 'The log of calls per version and device says which phones and OS versions are actually present among your customers; we test on those models, including old ones, and on a slow network. Then the staged rollout does the rest: 5 % of customers are the last test, and the crash threshold decides what comes next.' },
        { q: 'What happens with Google Play every year?', a: 'Every 31 August, Google Play raises the Android target version required for updates, Android 16 by 31 August 2026 per its help page; a lagging app stops being offered to new users whose phone is newer than its target, existing users keeping it. It is one more version in the train, planned in June, and a line in the maintenance contract.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'An app whose API breaks old versions must update everyone at once, which is exactly what you cannot do on phones you do not control.' },
      { after: 4, text: 'Fields are added, never removed without a date; and the server decides who must update.' },
    ],
    cta: { eyebrow: 'Send us your app and its last update', title: 'Manager in Algeria or founder in France: we update your mobile app without breaking what your customers have installed, with a staged rollout, a compatible API and a one-day hotfix', body: 'Symloop builds and maintains mobile applications in production for companies in Algeria and founders settled in France: version in every call, API that adds without removing, minimum version decided server-side, staged rollout on both stores with a crash threshold, in-app update, feature flags, local migrations tested on a full database, crash board per version, one-day hotfix. Code and documentation in your repository; a demo before every submission.' },
    related: { label: 'Read next', items: [
      { href: L.vivre, kind: '2027', name: 'Keeping an app alive: what it costs each year' },
      { href: L.livrer, kind: '2027', name: 'Delivering an application without breaking it' },
      { href: L.offline, kind: '2027', name: 'Offline application and synchronisation' },
      { href: L.decisions, kind: '2027', name: 'Building a mobile app: seven decisions' },
    ] },
  },
  ar: {
    kind: 'تطبيق محمول · تحديثات · المتاجر · 2027', title: 'تحديث تطبيق محمول دون كسر ما ثبّته زبائنكم في الجزائر سنة 2027: النسخ، توافق الواجهة، النشر التدريجي، التحديث الإجباري، والتصحيح الذي يخرج في يوم',
    dek: '«نصف زبائني ما زالوا على النسخة القديمة، ومنذ التحديث لا شيء يعمل عندهم.» التطبيق المحمول يعيش على هواتف لا تتحكمون فيها: بعضها يحدّث ليلاً على الواي فاي، وبعضها لا يحدّث أبداً، وبعضها من 2019. يصف هذا الدليل كيف تُسلَّم نسخة جديدة دون كسر شيء: واجهة تخدم عدة نسخ معاً، نسخة دنيا يقررها الخادم ولا تُرفع إلا بعد الاعتماد، نشر تدريجي على المتجرين يُوقَف عند أول إشارة، أنواع التغيير الستة ومسار كل منها، اختبارات على الأجهزة التي يملكها زبائنكم فعلاً، والتصحيح الذي يخرج في يوم.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تطبيق محمول', 'تحديثات', 'المتاجر', 'التوافق', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** لا تتحكمون متى يحدّث الزبون ولا إن كان يحدّث؛ تتحكمون فيما يفعله التطبيق عند البدء وفيما تجيبه الواجهة. إذن: **كل استدعاء يحمل نسخة التطبيق**، والواجهة **تضيف حقولاً ولا تحذف حقلاً بلا تاريخ أبداً**، والمسارات القديمة **مُبقاة حتى تاريخ مكتوب**، و**الخادم هو من يقرر** من يرى شريطاً ليّناً ومن يرى شاشة التحديث المطلوب. النسخة الجديدة تخرج على المتجرين بـ **نشر تدريجي**، 5 % ثم 20 % ثم 100 % على Android، وسبعة أيام مرحلية على iOS، بـ **عتبة انهيار تُكتب مسبقاً** و**إيقاف** إن تُجوزت. النصوص والشاشات والعروض تمر بـ **أعلام** وبالواجهة لا بتقديم. والتصحيح الحرج يخرج **في يوم** بالمسار نفسه. ولا تُرفع النسخة الدنيا إلا **بعد اعتماد 90 %**، لا يوم الإصدار أبداً.',
      'هذا الدليل موجّه إلى المسيّر الذي يُثبَّت تطبيقه عند مئات الزبائن أو الموصّلين، وإلى المؤسس المقيم في فرنسا الذي لا يستطيع الاختبار على هواتف مستعمليه في الجزائر، وإلى المسؤول الذي يجب أن يقارن عرضَي صيانة. لا يعيد ما يكلّفه التطبيق كل سنة، الموصوف في [دليل حياة التطبيق](' + L.vivre + ')، ولا كيف تُسلَّم منصة ويب دون كسرها، الموصوف في [دليل التسليم](' + L.livrer + ')؛ بل يصف ما يُبنى كي يكون تحديث المحمول حدثاً بلا خطر، ويمدّ [صفحتنا عن التطبيقات المحمولة](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله المتاجر', body: [
        'المراجعة أسرع مما يُظن، وأبطأ مما يحتاجه التصحيح. تكتب Apple أن مراجعة التطبيقات تعالج «50 % على الأقل من الطلبات في أقل من 24 ساعة و90 % في أقل من 48 ساعة»، وأنه يمكن طلب مراجعة معجَّلة «لإصلاح خطأ حرج» مع خطوات إعادة الإنتاج. وما يفرضه ذلك: التصحيح الحرج على iOS مسألة يوم إلى يومين حتى مع الطلب المعجَّل، ولهذا يجب أن يستمر التطبيق في العمل خلال ذلك، والوظيفة المعنية مطفأة بعلم تخدمه الواجهة.',
        'النشر التدريجي موجود في المتجرين، لكن ليس بالطريقة نفسها. في App Store، الإصدار المرحلي «يطلق تحديث تطبيقكم تدريجياً على 7 أيام»، 1 %، 2 %، 5 %، 10 %، 20 %، 50 % ثم 100 % من المستعملين ذوي التحديث الآلي، ويمكن إيقافه مؤقتاً «حتى 30 يوماً»، ولا يمنع أحداً من تنزيل النسخة يدوياً. في Google Play، النشر على مراحل يُدار يدوياً: تختارون النسبة وترفعونها، ويمكنكم «إيقاف نشر على مراحل» إن وجدتم مشكلة، وعندها «لن يتلقى أي مستعمل إضافي» النسخة، ومن حصل عليها يحتفظ بها. وما يفرضه ذلك: على iOS نراقب ونوقف مؤقتاً؛ وعلى Android نقرر كل درجة، ولا تُتجاوز الدرجة التالية إلا حين تكون نسبة انهيار اليوم تحت العتبة.',
        'المتجر يستطيع اقتراح التحديث داخل التطبيق نفسه. تحديثات Google Play داخل التطبيق، المدعومة «على الأجهزة التي تعمل بـ Android 5.0 أو أحدث»، تقدّم مسارين: المسار «المرن»، تنزيل في الخلفية بينما يواصل المستعمل، والمسار «الفوري»، شاشة كاملة «تتطلب من المستعمل التحديث وإعادة تشغيل التطبيق للمتابعة». ولا مقابل لذلك عند Apple: على iOS شاشة التحديث المطلوب شاشتكم أنتم، وتحيل إلى App Store. وأخيراً، كل سنة يرفع Google Play مستوى API المستهدف المطلوب للتحديثات، Android 16 بحلول 31 أوت 2026 حسب صفحة المساعدة، والتطبيق المتأخر «يتوقف عن التوفر لكل المستعملين الجدد» الذين يعمل هاتفهم بنظام أحدث من هدفه، ويحتفظ به المستعملون الحاليون. وما لم نجده: توزيع علني لنسخ Android في الجزائر؛ وما نراه في مشاريعنا هو هواتف من 2019 ما زالت، ونقولها ملاحظةً.',
      ] },
      { heading: 'تحديث محمول، في خمس طبقات', body: [
        'قبل اليوم بيوم، الطبقات الخمس، والطبقة التي تجعل الأربع الأخرى ممكنة.',
      ], visual: 'couches', after: [
        '**هاتف الزبون**: التطبيق المثبَّت، نسخته، قاعدته المحلية، النظام، وأحياناً Android من 2019؛ لا تقررون متى يحدّث ولا إن كان يحدّث. **المتاجر**: المراجعة، النشر التدريجي أو المرحلي، الإيقاف أو التوقف المؤقت، التحديث داخل التطبيق، ومتطلبات النسخة المستهدفة السنوية. **واجهتكم**: نسخة التطبيق تُقرأ في كل استدعاء، النسخة الدنيا المقبولة، حقول تُضاف ولا تُحذف، مسارات قديمة مُبقاة حتى تاريخ؛ وهي الطبقة التي يجب أن تخاطب كل النسخ المثبَّتة معاً، وهي التي تقرر من يجب أن يحدّث.',
        '**المراقبة**: الانهيارات لكل ألف جلسة لكل نسخة، الاعتماد يومياً، أخطاء الواجهة لكل نسخة، الأجهزة والأنظمة الموجودة فعلاً؛ العتبة تُكتب قبل النشر، والرقم يُقرأ كل صباح عشرة أيام على شاشة تُبنى مثل [لوحة قيادة المسيّر](' + L.dashboard + '). **المسار**: تجميد الكود، اختبارات على أجهزة قديمة، قطار إصدارات بتواريخ ثابتة، ملاحظات الإصدار، تصحيح في يوم، أعلام الميزات. وتطبيق تكسر واجهته النسخ القديمة لا خيار له: عليه تحديث الجميع دفعة واحدة، وهذا بالضبط ما لا يمكن فعله على هواتف لا تتحكمون فيها؛ وكل الباقي ينبع من هذه الجملة.',
      ] },
      { heading: 'تحديث واحد، يوماً بيوم، على المتجرين', body: [
        'النسخة تُفهم على عشرة أيام، ومسارين، وتوقف واحد.',
      ], visual: 'deploiement', after: [
        '**اليوم 0**: اختبارات داخلية على Android عبر المسار الداخلي، وتقديم على iOS. **اليوم 1**: 5 % من زبائن Android يتلقون النسخة؛ وiOS مقبولة. **اليوم 2**: 5 % مُبقاة، نسبة الانهيار 0,5 لكل ألف جلسة تحت عتبة 1,0؛ وiOS تبدأ مرحلتها عند 1 %. **اليوم 3**: الانتقال إلى 20 % على Android، ورقم الصباح يقول 2,1: انهيار عند الدفع على بعض أجهزة Android القديمة، لم تُظهره الـ 5 % لأنها لم تضم ما يكفي من تلك الهواتف. يُوقَف النشر؛ ولن يتلقى أحد بعد 20 % هذه النسخة. **اليوم 4**: تصحيح 2.4.1، مختبَر على Android 8، مقدَّم؛ ووظيفة الدفع المعنية كانت مطفأة بعلم منذ مساء الأمس، بلا تقديم، للـ 20 % المتأثرين.',
        '**اليوم 5**: تخرج 2.4.1 عند 20 %، والنسبة تهبط إلى 0,3. **اليوم 6**: 50 %. **اليوم 7**: 100 % على Android؛ وiOS عند 50 % من منحناها وتنتهي في اليوم 8. خلال هذه الأيام العشرة خدمت الواجهة 2.3 و2.4 معاً: لم يُحجب أحد، والـ 71 % من الزبائن الباقين على 2.3 واصلوا الطلب. وأرقام الانهيار في هذه الحكاية مثال مبني؛ وما ليس مبنياً هو ترتيب القرارات، وكون التوقف قُرر برقم قُرئ في الصباح لا بزبون على الهاتف.',
      ] },
      { heading: 'ستة أنواع من التغيير، والمسار الذي يسلكه كل منها', body: [
        'ليس كل شيء يمر بالمتاجر، ومعظم التغييرات لا ينبغي أن تمر.',
      ], visual: 'changements', after: [
        '**نص، لون، شاشة**: علم ميزة أو محتوى تخدمه الواجهة؛ فعّال في اليوم نفسه لكل النسخ. **حقل جديد**: يُضاف إلى الرد ولا يكون إلزامياً أبداً؛ النسخة القديمة تتجاهله بلا خطأ، والجديدة تقرؤه؛ وهو التغيير الأكثر تكراراً ولا يكلّف شيئاً حين تُحترم القاعدة. **تصحيح حرج**: نسخة تصحيحية في اليوم نفسه، مراجعة معجَّلة تُطلب مع خطوات إعادة الإنتاج، تحديث فوري يُقترح داخل التطبيق على Android، وشاشة تحديث على iOS بعد ظهور النسخة.',
        '**القاعدة المحلية تتغير**: ترحيل مُرقَّم يُنفَّذ عند البدء، مختبَر على قاعدة ممتلئة وجهاز قديم، ولا حذف عمود في النسخة نفسها أبداً؛ وهو الجزء الهش في تطبيق يعمل دون اتصال، الموصوف في [دليل المزامنة](' + L.offline + '). **شاشة تختفي**: العلم يُطفأ أولاً للجميع، والكود يُحذف بعد نسختين. **الواجهة تغيّر شكلها**: مسار v2 جديد، v1 مُبقى حتى تاريخ مكتوب، النسخة الدنيا تُرفع بعد اعتماد 90 %. أربعة من التغييرات الستة لا تمر بالمتاجر أو لا تمر فوراً؛ وردّ الفعل «نُخرج نسخة» يُحتفظ به لما يغيّر الكود المثبَّت فعلاً.',
      ] },
      { heading: 'واجهة واحدة، ثلاث نسخ مثبَّتة في اللحظة نفسها', body: [
        'التوافق لا يُقرَّر في التطبيق بل في الواجهة، ويُرى على ثلاثة هواتف.',
      ], visual: 'compat', after: [
        '**كل استدعاء يحمل نسخة** التطبيق في ترويسة، والخادم يجيب كلاً منها بشكل مختلف. النسخة 2.2، على Android من 2019 لم يُحدَّث قط، تحت النسخة الدنيا: تتلقى رداً يقول «نسخة قديمة جداً»، ويعرض التطبيق شاشة التحديث المطلوب برابط المتجر، وعلى Android التحديث الفوري داخل التطبيق. والنسخة 2.3، الحالية عند 71 % من الزبائن، تتلقى بياناتها وشريطاً ليّناً؛ والحقل الذي أضافته 2.4 موجود في الرد وتتجاهله بلا خطأ. والنسخة 2.4 تقرأ الحقول الجديدة على مسار v2.',
        '**ثلاث قواعد تحمل هذا الرسم.** نضيف حقولاً ولا نحذف بلا تاريخ أبداً: ما دامت نسخة مخدومة تقرأ حقلاً فهو يبقى. المسارات القديمة تُبقى حتى تاريخ مكتوب في العقد، لا «حين يهاجر الجميع». والنسخة الدنيا يرفعها الخادم، بعد اعتماد 90 % ونسبة انهيار مستقرة، لا يوم الإصدار أبداً، ولا إلى نسخة لم تظهر بعد في المتجرين. وحصص الرسم مثال؛ وسجل الاستدعاءات لكل نسخة، المقروء كل أسبوع، يعطي الحقيقية، وهو ما يقول متى تُرفع النسخة الدنيا.',
      ] },
      { heading: 'ستة أعطال تحديث، وما تفعله الهندسة', body: [
        'ستة أعطال نراها في التطبيقات التي نستلمها، ودفاع كل منها.',
      ], visual: 'pannes', after: [
        '**التطبيق يرفض البدء** على هواتف 2019: النسخة الدنيا للنظام تُقرَّر على الأجهزة الموجودة فعلاً في السجل لا على الإحصاءات العالمية، والتطبيق القديم يستمر في الخدمة. **حقل حُذف من الواجهة** يُسقط كل النسخ القديمة في الصباح نفسه: اختبارات عقد تُجرى على آخر ثلاث نسخ قبل كل إنتاج. **الترحيل المحلي يفسد القاعدة** وتختفي طلبيات الأسبوع دون اتصال: ترحيل مختبَر على قاعدة ممتلئة، نسخة احتياطية محلية قبل الترحيل، 5 % أولاً.',
        '**تحديث إجباري إلى نسخة غائبة**: الخادم يطلب 2.4 وهي قيد المراجعة فيُحجب الجميع؛ لا تُرفع النسخة الدنيا إلا بعد ظهور النسخة في المتجرين واعتمادها. **التصحيح يزيد سوءاً**: خرج بلا اختبار إلى 100 %؛ المسار نفسه كأي نسخة. **لا أحد يراقب**: النسبة تتضاعف ونعرفها من زبون؛ لوحة لكل نسخة تُقرأ كل صباح، تنبيه فوق العتبة. وكل هذه الأعطال تُرى عند 5 % قبل أن تُرى عند 100 %، وهذا هو السبب الوحيد للنشر التدريجي؛ والتطبيق المستلَم من مقدّم خدمة اختفى، كما في [الدليل المخصص](' + L.bloque + ')، يبدأ بهذه اللوحة.',
      ] },
      { heading: 'رأيناه في مكان آخر: وثائق المتاجر، وما ينتقل', body: [
        'ثلاثة مصادر تقول الجوهر. توثّق Apple الإصدار المرحلي على سبعة أيام، والتوقف المؤقت حتى ثلاثين يوماً، وآجال المراجعة والمراجعة المعجَّلة لخطأ حرج؛ وما ينتقل هو أن تصحيح iOS مسألة يوم إلى يومين، وأن التطبيق يجب أن يصمد تلك المدة والوظيفة مطفأة بعلم. وتوثّق Google النشر على مراحل المُدار يدوياً، والإيقاف، والتحديثات داخل التطبيق المرنة أو الفورية؛ وما ينتقل هو أن كل درجة على Android قرار يُتخذ على رقم الصباح، وأن التحديث الفوري أداة النسخة الدنيا. وتوثّق Google أيضاً الهدف السنوي، Android 16 بحلول 31 أوت 2026؛ وما ينتقل هو نسخة إضافية في القطار كل صيف تُخطَّط في جوان.',
        'وما لا تقوله هذه المصادر: أي الهواتف يملك زبائنكم، وأي عتبة انهيار تقبلون، وكم نسخة تخدمون معاً؛ سجل الاستدعاءات لكل نسخة يجيب عن الأول، ودفتر الشروط عن الآخرين.',
      ] },
      { heading: 'قواعد تحديث يمكن تسليمه دون ارتجاف', body: [
        'ست قواعد تُكتب قبل النسخة الأولى. **كل استدعاء يحمل نسخة التطبيق.** **الواجهة تضيف ولا تحذف بلا تاريخ أبداً.** **الخادم يقرر** النسخة الدنيا، بعد الاعتماد، لا يوم الإصدار أبداً. **نشر تدريجي** على المتجرين بعتبة انهيار تُكتب مسبقاً وإيقاف ممكن. **اختبارات على الأجهزة الموجودة فعلاً**، ومنها القديمة، وعلى قاعدة محلية ممتلئة. **النصوص والشاشات والعروض تمر بأعلام** لا بتقديم.',
        'قاعدة سابعة تخص عرض السعر: «صيانة التطبيق وتحديثاته» ليس متطلباً بل جملة؛ المتطلب يُكتب «نسخة التطبيق في كل استدعاء؛ قاعدة الإضافة بلا حذف ومسارات مُبقاة حتى تاريخ؛ نسخة دنيا تُقرَّر في الخادم بعد الاعتماد؛ نشر تدريجي بعتبة انهيار وإيقاف؛ تحديث داخل التطبيق على Android وشاشة التحديث المطلوب على iOS؛ أعلام الميزات؛ ترحيلات محلية مُرقَّمة مختبَرة على قاعدة ممتلئة؛ اختبارات عقد على آخر ثلاث نسخ؛ لوحة انهيارات واعتماد لكل نسخة؛ تصحيح في يوم بالمسار نفسه؛ نسخة Android المستهدفة كل صيف»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يسعّر «النشر في المتاجر» سعّر اليوم 0 من مسار عشرة أيام.',
      ] },
      { heading: 'ستة تطبيقات، والتحديث الذي يخيفها أكثر', body: [
        'ستة تطبيقات نصونها كثيراً، ولكل منها التحديث الذي يتطلب أكبر عناية.',
      ], list: [
        '**تطبيق المندوبين الميدانيين**، الموصوف في [الدليل المخصص](' + L.prevente + '). قاعدة محلية مليئة بطلبيات الجولة؛ الترحيل المحلي يُختبر على هاتف عائد من ثلاثة أيام بلا شبكة.',
        '**تطبيق الموصّلين**، الموصوف في [الدليل المخصص](' + L.livraison + '). مئتا هاتف متباينة؛ النسخة الدنيا للنظام تُقرَّر على السجل، والتحديث الفوري يتم في المستودع على الواي فاي لا في الجولة.',
        '**تطبيق قاعة الرياضة**، الموصوف في [الدليل المخصص](' + L.sport + '). مراقبة الدخول يجب أن تعمل مع النسخة القديمة يوم الإصدار؛ صيغة الشارة الجديدة تُضاف والقديمة تبقى مخدومة.',
        '**تطبيق الدفع**، الموصوف في [دليل الدفع الإلكتروني](' + L.paiement + '). تصحيح الدفع يخرج في يوم، والوظيفة تُقطع بعلم في الانتظار.',
        '**تطبيق وكالة العمرة**، الموصوف في [الدليل المخصص](' + L.omra + '). الحجاج في الخارج خلال الموسم؛ لا تحديث إجباري أثناء الرحلة، أعلام فقط.',
        '**التطبيق المُدار من فرنسا**، الموصوف في [الدليل المخصص](' + L.commerce + '). المؤسس لا يرى هواتف زبائنه؛ لوحة النسخ عينه الوحيدة، ويقرؤها كل صباح عشرة أيام.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم نسخة تُسلَّم في ثمانية أسابيع، واحد منها فقط للنشر.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يجمّد الكود ويكتب ملاحظات الإصدار للزبون وللمتاجر. **الأسبوع 1 إلى 2** يختبر على أجهزة قديمة، Android 8 و10، iPhone عمره ست سنوات، شبكة بطيئة، الترحيل المحلي على قاعدة ممتلئة، ويجري اختبارات العقد على آخر ثلاث نسخ. **الأسبوع 2 إلى 3** يقدّم إلى المتجرين، مع المسار الداخلي في Google Play بالتوازي. **الأسبوع 3 إلى 4** هو النشر التدريجي، 5 %، 20 %، 50 %، 100 % على Android ومراحل iOS، مع إيقاف إن تُجوزت العتبة.',
        '**الأسبوعان 3 إلى 5** يراقبان، الانهيارات وأخطاء الواجهة لكل نسخة كل صباح، ويُخرجان تصحيحاً في يوم عند الحاجة بالمسار نفسه. **الأسبوعان 6 إلى 8** يرفعان النسخة الدنيا بعد اعتماد 90 % ونسبة مستقرة؛ والمتأخرون يرون شاشة التحديث المطلوب. وكل نسخة تُعرض على الزبون قبل التقديم كما يصف [دليل التسليم](' + L.livrer + ')؛ وكل صيف في 31 أوت، هدف Android الذي يطلبه Google Play نسخة إضافية في القطار تُخطَّط في جوان. والاختيار بين تطبيق أصلي وتطبيق ويب قابل للتثبيت، الموصوف في [الدليل المخصص](' + L.pwa + ')، يغيّر هذا التقويم: تطبيق الويب القابل للتثبيت لا أسبوع 2 إلى 3 له.',
      ] },
      { heading: 'ما يُفشل تحديثاً محمولاً', body: [
        'التطبيقات التي نستلمها فشلت دائماً تقريباً في تحديث لأحد هذه الأسباب.',
      ], list: [
        '**واجهة لا تعرف نسخة** التطبيق. يستحيل معرفة من ينهار، ويستحيل إجبار أحد بنظافة.',
        '**حقل حُذف «لأن لا أحد يستعمله»**. الـ 6 % الذين كانوا يستعملونه يتصلون في الغد.',
        '**100 % دفعة واحدة.** الانهيار يُرى عند كل الزبائن بدل 5 %.',
        '**النسخة الدنيا رُفعت يوم الإصدار.** النسخة لم تظهر بعد في App Store؛ الجميع محجوب.',
        '**الاختبارات على هاتف المطوّر.** طراز حديث، على الواي فاي، في الجزائر العاصمة؛ والزبائن على Android من 2019، بشبكة 3G، في سطيف.',
        '**الترحيل المحلي بلا نسخة احتياطية.** طلبيات الأسبوع دون اتصال تختفي ولا تعود.',
        '**لا أحد ينظر إلى اللوحة.** نسبة الانهيار تتضاعف، ونعرفها من زبون.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين ومسؤولي إعلام آلي.',
      ], faq: [
        { q: 'لماذا ما زال نصف زبائني على النسخة القديمة؟', a: 'لأن التحديث يتوقف على الهاتف: إعدادات التحديث الآلي، الواي فاي، المساحة الحرة، نسخة النظام. على iOS لا يصل الإصدار المرحلي إلا إلى ذوي التحديث الآلي، 1 % في اليوم الأول و100 % في السابع؛ وعلى Android أنتم من يختار النسبة. والتطبيق المبني جيداً لا يحتاج إلى أن يكون الجميع محدَّثين: الواجهة تخدم عدة نسخ معاً، والنسخة الدنيا لا تُرفع إلا بعد الاعتماد.' },
        { q: 'هل يمكن إجبار التحديث؟', a: 'نعم، لكن بالخادم لا بالتطبيق: كل استدعاء يحمل النسخة، وتحت النسخة الدنيا تجيب الواجهة «نسخة قديمة جداً» ويعرض التطبيق شاشة التحديث المطلوب، وعلى Android التحديث الفوري داخل التطبيق. ولا تُرفع النسخة الدنيا إلا بعد اعتماد 90 % ونسبة انهيار مستقرة، ولا إلى نسخة لم تظهر بعد في المتجرين أبداً.' },
        { q: 'كم من الوقت لإصلاح خطأ حرج؟', a: 'يوم للنسخة التصحيحية، ثم المراجعة: تقول Apple إنها تعالج 50 % على الأقل من الطلبات في أقل من 24 ساعة و90 % في أقل من 48، ويمكن طلب مراجعة معجَّلة لخطأ حرج. وخلال ذلك تُطفأ الوظيفة المعنية بعلم تخدمه الواجهة، بلا تقديم، ويستمر التطبيق في العمل.' },
        { q: 'هل يجب أن يمر كل شيء بالمتاجر؟', a: 'لا. النصوص وترتيب الشاشات والعروض والمحتويات تمر بأعلام وبالواجهة، فعّالة في اليوم نفسه لكل النسخ. والحقل الجديد يُضاف إلى الواجهة بلا تقديم. ولا يمر بنسخة إلا ما يغيّر الكود المثبَّت فعلاً: شاشة جديدة، قاعدة محلية معدَّلة، تصحيح انهيار.' },
        { q: 'كيف تختبرون على هواتف لا أراها؟', a: 'سجل الاستدعاءات لكل نسخة وجهاز يقول أي الهواتف والأنظمة موجودة فعلاً عند زبائنكم؛ نختبر على تلك الطرازات، ومنها القديمة، وعلى شبكة بطيئة. ثم يفعل النشر التدريجي الباقي: 5 % من الزبائن هم الاختبار الأخير، وعتبة الانهيار تقرر ما يلي.' },
        { q: 'ماذا يحدث مع Google Play كل سنة؟', a: 'كل 31 أوت يرفع Google Play نسخة Android المستهدفة المطلوبة للتحديثات، Android 16 بحلول 31 أوت 2026 حسب صفحة مساعدته؛ والتطبيق المتأخر يتوقف عن العرض على المستعملين الجدد الذين يكون هاتفهم أحدث من هدفه، ويحتفظ به المستعملون الحاليون. وهي نسخة إضافية في القطار تُخطَّط في جوان، وبند في عقد الصيانة.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'تطبيق تكسر واجهته النسخ القديمة عليه تحديث الجميع دفعة واحدة، وهذا بالضبط ما لا يمكن فعله على هواتف لا تتحكمون فيها.' },
      { after: 4, text: 'نضيف حقولاً ولا نحذف بلا تاريخ أبداً؛ والخادم هو من يقرر من يجب أن يحدّث.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا تطبيقكم وآخر تحديث له', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نحدّث تطبيقكم المحمول دون كسر ما ثبّته زبائنكم، بنشر تدريجي وواجهة متوافقة وتصحيح في يوم', body: 'تبني Symloop وتصون تطبيقات محمولة في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: النسخة في كل استدعاء، واجهة تضيف دون حذف، نسخة دنيا تُقرَّر في الخادم، نشر تدريجي على المتجرين بعتبة انهيار، تحديث داخل التطبيق، أعلام الميزات، ترحيلات محلية مختبَرة على قاعدة ممتلئة، لوحة انهيارات لكل نسخة، تصحيح في يوم. الكود والوثائق في مستودعكم؛ وعرض قبل كل تقديم.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.vivre, kind: '2027', name: 'إبقاء التطبيق حياً: ما يكلّفه كل سنة' },
      { href: L.livrer, kind: '2027', name: 'تسليم تطبيق دون كسره' },
      { href: L.offline, kind: '2027', name: 'تطبيق دون اتصال والمزامنة' },
      { href: L.decisions, kind: '2027', name: 'إنشاء تطبيق محمول: سبعة قرارات' },
    ] },
  },
};

const KEYWORDS = "mettre à jour application mobile algérie 2027, mise à jour application sans casser, déploiement progressif play store app store, mise à jour forcée application mobile, compatibilité api anciennes versions application, maintenance application mobile algérie, correctif application mobile urgence, versions application android ancien téléphone, publier mise à jour app store validation délai, drapeaux de fonctionnalité application mobile, mobile app update rollout algeria 2027, forced update api versioning mobile app, تحديث تطبيق محمول الجزائر, النشر التدريجي للتطبيق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
