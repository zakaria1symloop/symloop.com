import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable.mjs';

const SLUG = 'si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable';
const FIGURES = ['incident', 'couches', 'methodes', 'drill', 'pannes', 'calendrier'];
const DATE = '2026-11-10';

const L = {
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  bloque: '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  vivre: '/blog/faire-vivre-une-application-algerie-2027-cout-annee-stores-serveurs-mises-a-jour/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  reprendre: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  saas: '/blog/construire-saas-multi-tenant-algerie-2027-isolation-clients-base-partagee-rls-plans-abonnement-mises-a-jour/',
  commerce: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  promoteur: '/blog/promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier/',
  dentaire: '/blog/cabinet-dentaire-algerie-2027-patients-diaspora-ete-plan-de-traitement-a-distance-devis-radios-suivi/',
  prive: '/blog/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api/',
  service: '/services/cloud/',
};

const CONTENT = {
  fr: {
    kind: 'Sauvegardes · Reprise · Données · 2027', title: "Si le serveur meurt demain, que reste-t-il de votre application en Algérie en 2027 ? Sauvegardes, restauration testée, perte maximale, délai de reprise et copie inaltérable",
    dek: "« On a des sauvegardes. » C'est la réponse que nous obtenons à chaque première réunion, et la question suivante la fait tomber presque à chaque fois : « Quand a-t-on restauré pour la dernière fois, et combien de temps cela a-t-il pris ? » Ce guide décrit ce qu'on construit pour qu'une application survive à son serveur, à une mauvaise requête, à un rançongiciel, à un prestataire disparu ou à un compte hébergeur fermé : deux chiffres écrits par système, la perte de données maximale et le délai de reprise ; une base restaurable à la minute près ; des fichiers versionnés sur un second site et impossibles à effacer ; des secrets hors du serveur ; et un exercice de restauration chronométré chaque mois, joué par la personne qui n'a pas écrit la procédure.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Sauvegardes', 'Reprise', 'Données', 'Sécurité', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** On écrit d'abord **deux chiffres par système** : combien de minutes de données on accepte de perdre, et combien de temps on accepte d'être arrêté. Pour une application de gestion, nous écrivons par défaut **quinze minutes et deux heures**. Puis on construit ce qui les tient : le **code et la configuration dans un dépôt** hors du serveur, pour recréer un serveur neuf en minutes ; la **base** avec une copie régulière et l'**archivage continu de ses journaux** vers un autre site, pour revenir à n'importe quelle minute ; les **fichiers** dans un stockage versionné sur un second site, avec une période pendant laquelle **rien ne peut être effacé**, même par un administrateur ; les **secrets** dans un gestionnaire, les comptes et le domaine **au nom de l'entreprise**, deux personnes qui savent ; et un **exercice de restauration complet chaque mois**, sur un serveur vide chez un autre hébergeur, chronométré, consigné, lu par le gérant. Une sauvegarde jamais restaurée n'est pas une sauvegarde.",
      "Ce guide s'adresse au gérant qui a déjà perdu une journée de ventes, au fondateur installé en France qui ne saura qu'au téléphone que le serveur est mort, et au responsable informatique qui doit répondre à « et si… ». Il ne redit pas où placer les serveurs, décrit dans [le guide sur l'hébergement](" + L.heberger + "), ni comment reprendre une application dont le prestataire a disparu, décrit dans [le guide dédié](" + L.bloque + ") ; il décrit ce qui se construit pour que la panne soit un mardi matin ordinaire, et il prolonge [notre page sur le cloud et l'infrastructure](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les documentations disent', body: [
        "La base de données peut revenir à la minute près, mais pas avec n'importe quelle sauvegarde. La documentation de PostgreSQL décrit l'archivage continu des journaux de transactions combiné à une copie de base : « cette technique permet la récupération à un instant donné : il est possible de restaurer la base dans l'état où elle était à n'importe quel moment depuis la copie de base ». Elle prévient aussi que les sauvegardes logiques, celles qu'on fait chaque nuit avec un export, « ne produisent pas de sauvegardes au niveau du système de fichiers et ne peuvent pas faire partie d'une solution d'archivage continu », qu'il faut « une séquence continue de journaux archivés » remontant au moins au début de la copie, et qu'on est « invité à surveiller le processus d'archivage ». Ce que cela impose : l'export nocturne garde sa place, mais ce qui tient un objectif de quinze minutes, c'est l'archivage continu, vers un autre site, surveillé par une alerte quand il s'arrête.",
        "Les fichiers peuvent devenir impossibles à effacer, même par vous. La documentation du stockage d'objets d'un grand fournisseur décrit un verrouillage « écrire une fois, lire plusieurs fois » : en mode conformité, « une version d'objet protégée ne peut être ni écrasée ni supprimée par aucun utilisateur, y compris l'utilisateur racine du compte », pendant une période de rétention qui ne peut être raccourcie ; et elle cite comme usage « une fenêtre de récupération configurable contre les rançongiciels ou la suppression accidentelle ». Ce que cela impose : les copies de fichiers et de base sont versionnées et verrouillées pour une durée écrite, trente jours par exemple, et un attaquant qui a pris le serveur ne peut pas les effacer ; ni un administrateur pressé.",
        "La règle que les agences de sécurité répètent tient en trois chiffres : trois copies, sur deux supports, dont une ailleurs ; nous y ajoutons un quatrième mot, inaltérable, et un cinquième, restaurée. Ce que nous n'avons pas trouvé : une statistique publique des pertes de données subies par les entreprises en Algérie, ni du temps moyen de reprise ; ce que nous voyons sur les applications que nous reprenons, c'est une sauvegarde nocturne sur le même serveur dans la majorité des cas, et une restauration jamais essayée dans presque tous, et nous le disons comme une observation.",
      ] },
      { heading: 'Le jour où le serveur meurt, sur l’horloge', body: [
        "La reprise ne se comprend pas sur un principe mais sur une matinée, minute par minute.",
      ], visual: 'incident', after: [
        "**9 h 14**, le disque du serveur de production meurt. **9 h 16**, l'alerte arrive sur deux téléphones, pas un. **9 h 20**, la décision est prise et le document de reprise ouvert : il dit qui fait quoi, dans quel ordre, et où sont les copies. **9 h 25**, un serveur neuf existe chez l'hébergeur de secours, créé depuis le dépôt de code qui décrit le serveur ; personne n'installe rien à la main. **9 h 40**, la base est restaurée au point de 9 h 13 : la dernière copie de base plus les journaux archivés en continu jusqu'à la minute qui précède la panne. Une minute de données perdue, pour un objectif écrit de quinze.",
        "**10 h 05**, les fichiers, photos, documents, exports, sont revenus depuis la copie versionnée du second site ; c'est l'étape la plus longue, et c'est pour cela qu'on la mesure chaque mois. **10 h 20**, le nom de domaine pointe vers le nouveau serveur. **10 h 30**, douze vérifications métier sont passées : une commande, une facture, un paiement, un export, une connexion. **10 h 35**, les clients travaillent à nouveau. Une heure vingt et une d'indisponibilité pour un objectif de deux heures. Rien n'a été improvisé : chaque étape avait été jouée lors de l'exercice du mois précédent, et le fondateur, à Lyon, a suivi la matinée sur le même document que l'équipe. L'exemple est construit à partir de cas réels ; les deux objectifs sont ceux que nous écrivons par défaut.",
      ] },
      { heading: 'Ce qu’il faut pour survivre à son serveur, en cinq couches', body: [
        "Derrière cette matinée, cinq couches, et une seule qui prouve que les quatre autres existent.",
      ], visual: 'couches', after: [
        "**Le code et la configuration** : le code de l'application, la description du serveur, les réglages et les scripts de déploiement vivent dans un dépôt hors du serveur ; un serveur neuf se recrée depuis ce dépôt en minutes, et rien n'est « installé à la main » une fois, comme [le guide sur la livraison](" + L.livrer + ") le décrit. **La base de données** : une copie de base régulière et l'archivage continu des journaux vers un autre site, pour revenir à n'importe quelle minute ; un réplica si l'activité exige de ne pas s'arrêter du tout. **Les fichiers** : photos, documents et exports dans un stockage d'objets versionné sur un second site, avec une période pendant laquelle rien ne peut être effacé.",
        "**Les secrets et les accès** : mots de passe, clés et certificats dans un gestionnaire de secrets, jamais sur le serveur ni dans le code ; les comptes hébergeur et le domaine au nom de l'entreprise, avec deux personnes qui savent, pour que ni le serveur mort ni le prestataire disparu n'emportent quoi que ce soit ; c'est la discipline décrite dans [le guide sur les droits](" + L.roles + "). **L'exercice et la supervision** : une restauration complète chaque mois sur un serveur vide, chronométrée et consignée, et des alertes si une sauvegarde manque ou si l'archivage s'arrête. C'est la seule couche qui prouve l'existence des quatre autres : une sauvegarde qu'on n'a jamais restaurée est une hypothèse.",
      ] },
      { heading: 'Six façons de sauvegarder, et ce qu’on perd vraiment', body: [
        "« On a des sauvegardes » recouvre six réalités très différentes, et le serveur qui meurt à quinze heures les départage.",
      ], visual: 'methodes', after: [
        "**La copie logique nocturne sur le même serveur** meurt avec le disque : on perd tout, et on revient d'une vieille copie retrouvée par hasard, ou jamais. **La copie logique nocturne envoyée ailleurs** perd la journée, les ventes depuis deux heures du matin, et revient en quelques heures si quelqu'un sait restaurer et si la copie est lisible ; c'est la plus répandue des méthodes honnêtes. **La copie de base plus les journaux archivés en continu** perd quelques minutes au plus et revient en moins d'une heure si l'exercice a été fait ; c'est la seule ligne qui tienne un objectif de quinze minutes.",
        "**L'instantané de l'hébergeur seul** ne perd rien tant que l'hébergeur existe et que le compte est ouvert, et c'est précisément ce qui n'existe plus dans deux des six pannes du guide. **Les fichiers copiés sans versions** perdent chaque fichier supprimé ou chiffré avant la copie suivante, et la copie de la veille peut elle-même avoir été chiffrée. **Tout cela sans exercice** : la perte est inconnue, le délai est inconnu, et c'est le jour de la panne qu'on l'apprend ; c'est la ligne la plus fréquente de toutes, et la raison de ce guide.",
      ] },
      { heading: 'L’exercice de restauration du mois, chronométré et consigné', body: [
        "L'exercice est la pièce qui transforme les sauvegardes en reprise, et il se lit en huit lignes.",
      ], visual: 'drill', after: [
        "**Le premier mardi du mois**, sur un serveur vide chez un autre hébergeur, la personne qui n'a pas écrit la procédure la joue. Serveur créé depuis le dépôt, quatre minutes. Secrets récupérés par la seconde personne, trois : aucun mot de passe n'était sur le serveur mort. Base restaurée au point choisi, dix-huit : copie de base plus journaux jusqu'à 14 h 02 la veille, le point est arbitraire et change chaque mois. Fichiers restaurés depuis le second site, vingt-deux : deux fois plus long que le mois dernier, et l'écart est ouvert. Application démarrée, trois. Douze vérifications métier, neuf. Nom de domaine basculé en test puis remis, deux. Rapport écrit et signé, cinq.",
        "**Soixante-six minutes** pour un objectif de cent vingt : tenu. Mais le rapport dit aussi ce qui a doublé, et pourquoi on le saura avant le prochain exercice ; c'est ainsi qu'on apprend que les fichiers ont grossi, que le second site a changé de débit, ou qu'une étape manuelle s'est glissée dans la procédure. Le gérant lit le verdict sans comprendre une seule des huit lignes, et c'est voulu ; le fondateur en France le reçoit par e-mail le même jour. C'est le même principe que [la recette à distance](" + L.livrer + ") : on ne croit pas ce qu'on n'a pas vu se faire.",
      ] },
      { heading: 'Six pannes, et ce qui rend la reprise possible', body: [
        "Six pannes que nous avons vues ou reprises, et pour chacune ce qui a rendu, ou aurait rendu, la reprise possible.",
      ], visual: 'pannes', after: [
        "**Le disque meurt** : serveur recréé depuis le dépôt, base restaurée au point de la panne, fichiers depuis le second site ; c'est la matinée de la première figure. **La mauvaise requête** : un script efface trois mille clients à 15 h 12, personne ne le voit avant 17 h ; on restaure la base au point 15 h 11 sur un serveur à côté, on réinjecte les clients, et le journal d'audit dit exactement quoi ; c'est le cas où l'archivage continu vaut le plus, parce que la copie nocturne aurait déjà perdu la journée. **Le rançongiciel** : le serveur et les sauvegardes qui lui sont attachées sont chiffrés la même nuit ; les copies du second site, versionnées et verrouillées pour trente jours, ne peuvent pas l'être, et le serveur se recrée propre depuis le dépôt.",
        "**Le prestataire disparu** : il avait les accès, les mots de passe et le dépôt ; si le dépôt, les comptes et le domaine sont au nom de l'entreprise, que les secrets sont dans un gestionnaire et que deux personnes savent, la reprise est un désagrément, pas une catastrophe ; sinon c'est [le guide dédié](" + L.bloque + ") qui commence. **Le compte hébergeur fermé** : carte refusée au renouvellement, compte suspendu, instantanés inaccessibles ; les copies vivent chez un second fournisseur, et la reprise se joue là, exactement comme à l'exercice. **Le fichier supprimé** : un employé supprime le dossier des contrats partagé et la synchronisation propage la suppression ; les versions sont conservées, et le dossier revient à la date de la veille en quelques minutes. Deux des six pannes n'ont rien de technique, et ce sont celles qui coûtent le plus.",
      ] },
      { heading: 'Vu ailleurs : les documentations de référence, et ce qui se transpose', body: [
        "Deux sources disent l'essentiel. La documentation de PostgreSQL dit que l'archivage continu des journaux permet de revenir à n'importe quel instant depuis la copie de base, que l'export logique n'y suffit pas, et que l'archivage se surveille ; ce qui se transpose, c'est l'objectif de quinze minutes et l'alerte quand l'archivage s'arrête. La documentation du verrouillage d'objets dit qu'en mode conformité personne, pas même le compte racine, ne peut effacer une version pendant sa rétention, et nomme le rançongiciel comme cas d'usage ; ce qui se transpose, c'est la copie inaltérable pour trente jours, chez un second fournisseur.",
        "Ce que ces sources ne disent pas : combien de minutes votre entreprise accepte de perdre, et combien d'heures elle accepte d'attendre ; ces deux chiffres sont les vôtres, ils se décident la première semaine, et ils décident de tout le reste.",
      ] },
      { heading: "Les règles d'une application qui survit à son serveur", body: [
        "Six règles, écrites la première semaine. **Deux chiffres par système**, perte maximale et délai de reprise, signés par le gérant. **Trois copies, deux supports, une ailleurs**, et la copie ailleurs est versionnée et inaltérable pour une durée écrite. **La base s'archive en continu** vers un autre site, et une alerte sonne quand l'archivage s'arrête. **Le serveur se recrée depuis le dépôt** ; rien n'est installé à la main. **Les secrets, les comptes et le domaine** sont hors du serveur, au nom de l'entreprise, connus de deux personnes. **Un exercice complet chaque mois**, chronométré, consigné, joué par quelqu'un d'autre.",
        "Une septième règle porte sur le devis : « sauvegardes quotidiennes » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « perte maximale et délai de reprise écrits par système ; copie de base et archivage continu des journaux vers un second site avec alerte ; fichiers dans un stockage versionné sur un second site avec verrouillage de trente jours ; serveur recréable depuis le dépôt ; secrets dans un gestionnaire, comptes et domaine au nom du client, deux détenteurs ; document de reprise ; exercice de restauration complet mensuel sur serveur vide chez un autre hébergeur, chronométré, rapport remis », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui écrit « sauvegarde automatique incluse » sans un chiffre de perte ni de délai a écrit la sixième ligne du tableau.",
      ] },
      { heading: 'Six entreprises, et le chiffre qu’elles ont écrit', body: [
        "Six entreprises que nous équipons souvent, et pour chacune les deux chiffres écrits et ce qui les tient.",
      ], list: [
        "**Le commerce piloté depuis la France**, décrit dans [le guide dédié](" + L.commerce + "). Quinze minutes et deux heures ; le fondateur reçoit le rapport d'exercice chaque mois et sait, depuis Lyon, que la caisse d'Alger repartira.",
        "**La caisse en magasin**, décrite dans [le guide dédié](" + L.caisse + "). Elle continue d'encaisser sans serveur grâce au mode hors ligne du [guide sur la synchronisation](" + L.offline + ") ; la reprise du serveur a donc quatre heures, mais zéro minute de ventes perdues.",
        "**Le promoteur immobilier**, décrit dans [le guide dédié](" + L.promoteur + "). Les contrats et les reçus des acquéreurs sont dans le stockage versionné et verrouillé pour un an ; aucun fichier signé ne peut disparaître.",
        "**Le cabinet dentaire**, décrit dans [le guide dédié](" + L.dentaire + "). Cinq minutes et une heure pour les dossiers patients ; l'exercice est joué un samedi, quand le cabinet est fermé.",
        "**La plateforme SaaS**, décrite dans [le guide dédié](" + L.saas + "). Un objectif par client écrit dans le contrat, et l'exercice restaure un client à la fois pour prouver l'isolation.",
        "**L'entreprise qui migre**, décrite dans [le guide sur la reprise de données](" + L.reprendre + "). Le premier exercice de restauration est joué avant la bascule, parce que la semaine de la bascule est la pire pour découvrir qu'on ne sait pas restaurer.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'une application rendue capable de survivre à son serveur en huit semaines, dont la première sans un octet copié.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** fait l'inventaire et écrit les deux chiffres : ce qui existe et où, la perte maximale et le délai de reprise par système, signés par le gérant. **Les semaines 1 à 3** traitent la base : copie de base et archivage continu des journaux vers un autre site, et une première restauration à la minute vérifiée. **La semaine 3 à 4** traite les fichiers : stockage d'objets versionné sur un second site, période d'inaltérabilité, test de restauration d'un dossier. **La semaine 4 à 5** rend le serveur recréable depuis le dépôt, met les secrets dans un gestionnaire, et passe les comptes et le domaine au nom de l'entreprise, avec deux détenteurs.",
        "**La semaine 5 à 6** joue le premier exercice complet sur un serveur vide chez un autre hébergeur, chronométré, et corrige la procédure. **Les semaines 6 à 8** installent l'exercice mensuel, le premier mardi, les alertes si une sauvegarde manque, et le rapport lu par le gérant. Le coût de ces copies et de l'exercice entre dans le budget annuel décrit dans [le guide sur la vie d'une application](" + L.vivre + ") ; et quand un modèle d'IA tourne sur vos serveurs, [le guide sur le déploiement privé](" + L.prive + ") ajoute ses propres copies au même exercice.",
      ] },
      { heading: 'Ce qui fait échouer une reprise', body: [
        "Les reprises que nous avons vues échouer l'ont presque toujours été pour l'une de ces raisons.",
      ], list: [
        "**La sauvegarde sur le même serveur.** Elle meurt avec le disque, et on le découvre ce matin-là.",
        "**Jamais restaurée.** La copie existe, elle est illisible, incomplète ou chiffrée, et personne ne le savait.",
        "**Les mots de passe sur le serveur mort.** La base est restaurée, et personne ne peut s'y connecter.",
        "**Un seul détenteur.** Il est en congé, ou c'est le prestataire disparu.",
        "**Les copies effaçables.** Le rançongiciel les a chiffrées en même temps que le serveur.",
        "**Le serveur installé à la main.** Trois jours pour le refaire, et personne ne se souvient de tout.",
        "**Pas de chiffre écrit.** Chacun avait un objectif différent en tête, et la reprise a duré ce qu'elle a duré.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et de responsables informatiques.",
      ], faq: [
        { q: 'Nous avons une sauvegarde chaque nuit, n’est-ce pas suffisant ?', a: "Cela dépend de deux chiffres que vous seuls pouvez écrire : combien de minutes de données vous acceptez de perdre, et combien d'heures d'arrêt. Une copie nocturne perd jusqu'à une journée et revient en quelques heures, si elle est ailleurs que sur le serveur et si quelqu'un l'a déjà restaurée. Pour tenir quinze minutes, il faut l'archivage continu des journaux de la base ; pour tenir deux heures, il faut un exercice qui l'a déjà fait." },
        { q: 'À quoi sert l’exercice de restauration si les sauvegardes sont automatiques ?', a: "À prouver qu'elles se restaurent, et en combien de temps. La plupart des échecs de reprise que nous voyons viennent de copies illisibles, incomplètes, chiffrées ou de mots de passe perdus, et aucune automatisation ne le détecte : seule une restauration complète, sur un serveur vide, par quelqu'un qui n'a pas écrit la procédure, le montre. Le rapport chronométré est aussi ce qui permet au gérant de lire un verdict sans comprendre la technique." },
        { q: 'Comment se protéger d’un rançongiciel qui chiffre aussi les sauvegardes ?', a: "Par des copies qu'il ne peut pas atteindre : sur un second site, chez un autre fournisseur, versionnées, et verrouillées pour une durée écrite pendant laquelle personne, pas même le compte administrateur, ne peut les effacer ou les écraser. Le serveur compromis est alors recréé propre depuis le dépôt de code, et la base et les fichiers reviennent des copies verrouillées." },
        { q: 'Que se passe-t-il si le prestataire disparaît avec les accès ?', a: "Si le dépôt de code, les comptes hébergeur, le domaine et les copies sont au nom de votre entreprise, que les secrets sont dans un gestionnaire et que deux personnes de chez vous savent, la disparition est un désagrément : un autre prestataire reprend depuis le dépôt et les copies. Si tout était au nom du prestataire, c'est une autre histoire, et c'est le guide sur l'application bloquée qui s'applique." },
        { q: 'Combien de données perd-on vraiment ?', a: "Avec l'archivage continu des journaux de la base, quelques minutes au plus : on revient au point juste avant la panne. Avec une copie nocturne, jusqu'à une journée. Pour les fichiers, les versions conservées permettent de revenir à la veille, ou à l'heure qui précède si le stockage le permet. Les deux chiffres sont écrits par système, parce qu'une caisse et un catalogue n'ont pas la même tolérance." },
        { q: 'Combien de temps pour mettre tout cela en place ?', a: "Huit semaines : une pour l'inventaire et les deux chiffres, deux pour la base et sa première restauration à la minute, une pour les fichiers, une pour le serveur recréable, les secrets et les comptes, une pour le premier exercice complet, deux pour installer l'exercice mensuel et les alertes. Sur une application existante, les trois premières semaines suffisent souvent à passer de « on a des sauvegardes » à « on a restauré »." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Une sauvegarde jamais restaurée n'est pas une sauvegarde ; c'est l'exercice qui la rend réelle, et le rapport qui la rend vérifiable." },
      { after: 5, text: "Deux des six pannes n'ont rien de technique, le prestataire et le compte ; ce sont celles qui coûtent le plus." },
    ],
    cta: { eyebrow: 'Envoyez-nous la date de votre dernière restauration', title: "Gérant en Algérie ou fondateur en France : nous rendons votre application capable de survivre à son serveur, et nous le prouvons chaque mois par un exercice chronométré", body: "Symloop construit et reprend des applications en production pour les entreprises en Algérie et les fondateurs installés en France : perte maximale et délai de reprise écrits par système, copie de base et archivage continu des journaux vers un second site, fichiers versionnés et verrouillés, serveur recréable depuis le dépôt, secrets dans un gestionnaire, comptes et domaine au nom du client, document de reprise, exercice de restauration mensuel chronométré avec rapport. Code, copies et rapports dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.heberger, kind: '2027', name: 'Héberger en Algérie ou en Europe' },
      { href: L.bloque, kind: '2027', name: 'Reprendre une application bloquée chez un prestataire disparu' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit' },
      { href: L.vivre, kind: '2027', name: 'Faire vivre une application : ce que coûte chaque année' },
    ] },
  },
  en: {
    kind: 'Backups · Recovery · Data · 2027', title: 'If the server dies tomorrow, what is left of your application in Algeria in 2027? Backups, tested restore, maximum loss, recovery time and immutable copy',
    dek: '“We have backups.” That is the answer we get at every first meeting, and the next question brings it down almost every time: “When did you last restore, and how long did it take?” This guide describes what gets built so that an application survives its server, a bad query, ransomware, a vanished supplier or a closed hosting account: two figures written per system, the maximum data loss and the recovery time; a database restorable to the minute; files versioned on a second site and impossible to erase; secrets off the server; and a timed restore drill every month, played by the person who did not write the procedure.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Backups', 'Recovery', 'Data', 'Security', 'Algeria 2027'],
    intro: [
      '**Short answer.** You first write **two figures per system**: how many minutes of data you accept to lose, and how long you accept to be down. For a management application we write **fifteen minutes and two hours** by default. Then you build what holds them: **code and configuration in a repository** off the server, to recreate a new server in minutes; the **database** with a regular copy and **continuous archiving of its logs** to another site, to come back to any minute; **files** in a versioned store on a second site, with a period during which **nothing can be erased**, even by an administrator; **secrets** in a manager, accounts and domain **in the company’s name**, two people who know; and a **full restore drill every month**, on an empty server at another provider, timed, recorded, read by the manager. A backup never restored is not a backup.',
      'This guide is for the manager who has already lost a day of sales, the founder settled in France who will only learn by phone that the server is dead, and the IT manager who must answer “what if…”. It does not repeat where to place servers, described in [the hosting guide](' + L.heberger + '), nor how to take over an application whose supplier vanished, described in [the dedicated guide](' + L.bloque + '); it describes what is built so that the failure is an ordinary Tuesday morning, and extends [our page on cloud and infrastructure](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the documentation says', body: [
        'The database can come back to the minute, but not with just any backup. PostgreSQL’s documentation describes continuous archiving of transaction logs combined with a base backup: “this technique supports point-in-time recovery: it is possible to restore the database to its state at any time since your base backup was taken”. It also warns that logical dumps, the ones made every night with an export, “do not produce file-system-level backups and cannot be used as part of a continuous-archiving solution”, that you need “a continuous sequence of archived WAL files” going back at least to the start of the backup, and that you are “advised to monitor the archiving process”. What this imposes: the nightly export keeps its place, but what holds a fifteen-minute objective is continuous archiving, to another site, watched by an alert when it stops.',
        'Files can become impossible to erase, even by you. The object-storage documentation of a large provider describes a “write-once-read-many” lock: in compliance mode, “a protected object version can’t be overwritten or deleted by any user, including the root user in your AWS account”, for a retention period that cannot be shortened; and it names as a use “a configurable recovery window against ransomware or accidental deletion”. What this imposes: file and database copies are versioned and locked for a written duration, thirty days for instance, and an attacker who has taken the server cannot erase them; nor can a hurried administrator.',
        'The rule security agencies repeat fits in three figures: three copies, on two media, one elsewhere; we add a fourth word, immutable, and a fifth, restored. What we did not find: a public statistic of data losses suffered by companies in Algeria, or of average recovery time; what we see on the applications we take over is a nightly backup on the same server in most cases, and a restore never attempted in almost all, and we say so as an observation.',
      ] },
      { heading: 'The day the server dies, on the clock', body: [
        'Recovery is not understood on a principle but on a morning, minute by minute.',
      ], visual: 'incident', after: [
        '**9:14**, the production server’s disk dies. **9:16**, the alert reaches two phones, not one. **9:20**, the decision is taken and the recovery document opened: it says who does what, in what order, and where the copies are. **9:25**, a new server exists at the backup provider, created from the code repository that describes the server; nobody installs anything by hand. **9:40**, the database is restored to the 9:13 point: the last base copy plus the logs archived continuously up to the minute before the failure. One minute of data lost, for a written objective of fifteen.',
        '**10:05**, files, photos, documents, exports, are back from the versioned copy on the second site; it is the longest step, which is why it is measured every month. **10:20**, the domain name points to the new server. **10:30**, twelve business checks pass: an order, an invoice, a payment, an export, a login. **10:35**, customers are working again. One hour twenty-one of downtime for a two-hour objective. Nothing was improvised: every step had been played during the previous month’s drill, and the founder, in Lyon, followed the morning on the same document as the team. The example is built from real cases; the two objectives are the ones we write by default.',
      ] },
      { heading: 'What it takes to survive your server, in five layers', body: [
        'Behind that morning, five layers, and only one that proves the other four exist.',
      ], visual: 'couches', after: [
        '**Code and configuration**: the application’s code, the server description, settings and deployment scripts live in a repository off the server; a new server is recreated from that repository in minutes, and nothing is “installed by hand” once, as [the delivery guide](' + L.livrer + ') describes. **The database**: a regular base copy and continuous archiving of logs to another site, to come back to any minute; a replica if activity requires never stopping at all. **Files**: photos, documents and exports in a versioned object store on a second site, with a period during which nothing can be erased.',
        '**Secrets and access**: passwords, keys and certificates in a secrets manager, never on the server or in the code; hosting accounts and the domain in the company’s name, with two people who know, so that neither the dead server nor the vanished supplier takes anything away; it is the discipline described in [the rights guide](' + L.roles + '). **Drill and supervision**: a full restore every month on an empty server, timed and recorded, and alerts if a backup is missing or archiving stops. It is the only layer that proves the other four exist: a backup never restored is a hypothesis.',
      ] },
      { heading: 'Six ways to back up, and what you really lose', body: [
        '“We have backups” covers six very different realities, and the server dying at three in the afternoon tells them apart.',
      ], visual: 'methodes', after: [
        '**The nightly logical copy on the same server** dies with the disk: you lose everything, and come back from an old copy found by chance, or never. **The nightly logical copy sent elsewhere** loses the day, sales since two in the morning, and comes back in a few hours if someone knows how to restore and the copy is readable; it is the most widespread of the honest methods. **The base copy plus continuously archived logs** loses a few minutes at most and comes back in under an hour if the drill was done; it is the only row that holds a fifteen-minute objective.',
        '**The provider snapshot alone** loses nothing as long as the provider exists and the account is open, which is exactly what no longer exists in two of the guide’s six failures. **Files copied without versions** lose every file deleted or encrypted before the next copy, and yesterday’s copy may itself have been encrypted. **All of that without a drill**: the loss is unknown, the delay is unknown, and you find out on the day of the failure; it is the most common row of all, and the reason for this guide.',
      ] },
      { heading: 'The monthly restore drill, timed and recorded', body: [
        'The drill is the piece that turns backups into recovery, and it reads in eight lines.',
      ], visual: 'drill', after: [
        '**On the first Tuesday of the month**, on an empty server at another provider, the person who did not write the procedure plays it. Server created from the repository, four minutes. Secrets retrieved by the second person, three: no password was on the dead server. Database restored to the chosen point, eighteen: base copy plus logs up to 14:02 the day before, the point is arbitrary and changes every month. Files restored from the second site, twenty-two: twice as long as last month, and the deviation is opened. Application started, three. Twelve business checks, nine. Domain name switched in test then reverted, two. Report written and signed, five.',
        '**Sixty-six minutes** for an objective of one hundred and twenty: met. But the report also says what doubled, and why it will be known before the next drill; that is how you learn that files have grown, that the second site changed bandwidth, or that a manual step crept into the procedure. The manager reads the verdict without understanding a single one of the eight lines, and that is intended; the founder in France receives it by e-mail the same day. It is the same principle as [remote acceptance](' + L.livrer + '): you do not believe what you have not seen done.',
      ] },
      { heading: 'Six failures, and what makes recovery possible', body: [
        'Six failures we have seen or taken over, and for each what made, or would have made, recovery possible.',
      ], visual: 'pannes', after: [
        '**The disk dies**: server recreated from the repository, database restored to the failure point, files from the second site; it is the morning of the first figure. **The bad query**: a script wipes three thousand customers at 15:12, nobody sees it before 17:00; the database is restored to the 15:11 point on a server alongside, customers are reinjected, and the audit log says exactly what; it is the case where continuous archiving is worth most, because the nightly copy would already have lost the day. **Ransomware**: the server and the backups attached to it are encrypted the same night; the second-site copies, versioned and locked for thirty days, cannot be, and the server is recreated clean from the repository.',
        '**The vanished supplier**: they had the access, the passwords and the repository; if the repository, accounts and domain are in the company’s name, secrets are in a manager and two people know, the recovery is an inconvenience, not a disaster; otherwise [the dedicated guide](' + L.bloque + ') begins. **The closed hosting account**: card refused at renewal, account suspended, snapshots inaccessible; copies live at a second provider, and recovery is played there, exactly as in the drill. **The deleted file**: an employee deletes the shared contracts folder and synchronisation propagates the deletion; versions are kept, and the folder comes back to yesterday’s date in minutes. Two of the six failures are not technical at all, and they are the ones that cost most.',
      ] },
      { heading: 'Seen elsewhere: the reference documentation, and what transposes', body: [
        'Two sources say the essentials. PostgreSQL’s documentation says continuous log archiving allows coming back to any point since the base copy, that a logical export is not enough, and that archiving is to be monitored; what transposes is the fifteen-minute objective and the alert when archiving stops. The object-lock documentation says that in compliance mode nobody, not even the root account, can erase a version during its retention, and names ransomware as a use case; what transposes is the immutable copy for thirty days, at a second provider.',
        'What these sources do not say: how many minutes your company accepts to lose, and how many hours it accepts to wait; those two figures are yours, they are decided in week one, and they decide everything else.',
      ] },
      { heading: 'The rules of an application that survives its server', body: [
        'Six rules, written in week one. **Two figures per system**, maximum loss and recovery time, signed by the manager. **Three copies, two media, one elsewhere**, and the copy elsewhere is versioned and immutable for a written duration. **The database archives continuously** to another site, and an alert rings when archiving stops. **The server is recreated from the repository**; nothing is installed by hand. **Secrets, accounts and domain** are off the server, in the company’s name, known to two people. **One full drill every month**, timed, recorded, played by someone else.',
        'A seventh rule concerns the quote: “daily backups” is not a requirement, it is a sentence; the requirement reads “maximum loss and recovery time written per system; base copy and continuous log archiving to a second site with alert; files in a versioned store on a second site with thirty-day lock; server recreatable from the repository; secrets in a manager, accounts and domain in the client’s name, two holders; recovery document; monthly full restore drill on an empty server at another provider, timed, report delivered”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that writes “automatic backup included” with no loss or delay figure has written the sixth row of the table.',
      ] },
      { heading: 'Six companies, and the figure they wrote', body: [
        'Six companies we often equip, and for each the two figures written and what holds them.',
      ], list: [
        '**The shop run from France**, described in [the dedicated guide](' + L.commerce + '). Fifteen minutes and two hours; the founder receives the drill report every month and knows, from Lyon, that the Algiers till will restart.',
        '**The in-store point of sale**, described in [the dedicated guide](' + L.caisse + '). It keeps taking payments without a server thanks to the offline mode of [the synchronisation guide](' + L.offline + '); server recovery therefore has four hours, but zero minutes of lost sales.',
        '**The property developer**, described in [the dedicated guide](' + L.promoteur + '). Buyers’ contracts and receipts are in the versioned store locked for a year; no signed file can disappear.',
        '**The dental practice**, described in [the dedicated guide](' + L.dentaire + '). Five minutes and one hour for patient records; the drill is played on a Saturday, when the practice is closed.',
        '**The SaaS platform**, described in [the dedicated guide](' + L.saas + '). One objective per client written in the contract, and the drill restores one client at a time to prove isolation.',
        '**The company migrating**, described in [the data migration guide](' + L.reprendre + '). The first restore drill is played before the switch-over, because switch-over week is the worst time to discover you cannot restore.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of an application made able to survive its server in eight weeks, the first without a byte copied.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** takes the inventory and writes the two figures: what exists and where, maximum loss and recovery time per system, signed by the manager. **Weeks 1 to 3** handle the database: base copy and continuous log archiving to another site, and a first restore to the minute verified. **Week 3 to 4** handles files: versioned object store on a second site, immutability period, restore test of one folder. **Week 4 to 5** makes the server recreatable from the repository, puts secrets in a manager, and moves accounts and domain into the company’s name, with two holders.',
        '**Week 5 to 6** plays the first full drill on an empty server at another provider, timed, and corrects the procedure. **Weeks 6 to 8** install the monthly drill, on the first Tuesday, the alerts if a backup is missing, and the report read by the manager. The cost of these copies and of the drill enters the yearly budget described in [the guide on keeping an app alive](' + L.vivre + '); and when an AI model runs on your servers, [the private deployment guide](' + L.prive + ') adds its own copies to the same drill.',
      ] },
      { heading: 'What makes a recovery fail', body: [
        'The recoveries we have seen fail almost always did for one of these reasons.',
      ], list: [
        '**The backup on the same server.** It dies with the disk, and you find out that morning.',
        '**Never restored.** The copy exists, it is unreadable, incomplete or encrypted, and nobody knew.',
        '**Passwords on the dead server.** The database is restored, and nobody can connect to it.',
        '**A single holder.** They are on leave, or they are the vanished supplier.',
        '**Erasable copies.** The ransomware encrypted them along with the server.',
        '**The hand-installed server.** Three days to rebuild it, and nobody remembers everything.',
        '**No written figure.** Everyone had a different objective in mind, and the recovery took as long as it took.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and IT managers.',
      ], faq: [
        { q: 'We have a backup every night, is that not enough?', a: 'It depends on two figures only you can write: how many minutes of data you accept to lose, and how many hours of downtime. A nightly copy loses up to a day and comes back in a few hours, if it is elsewhere than on the server and someone has already restored it. To hold fifteen minutes you need continuous archiving of the database logs; to hold two hours you need a drill that has already done it.' },
        { q: 'What is the restore drill for if backups are automatic?', a: 'To prove that they restore, and in how long. Most recovery failures we see come from unreadable, incomplete or encrypted copies or lost passwords, and no automation detects that: only a full restore, on an empty server, by someone who did not write the procedure, shows it. The timed report is also what lets the manager read a verdict without understanding the technology.' },
        { q: 'How do you protect against ransomware that also encrypts the backups?', a: 'With copies it cannot reach: on a second site, at another provider, versioned, and locked for a written duration during which nobody, not even the administrator account, can erase or overwrite them. The compromised server is then recreated clean from the code repository, and the database and files come back from the locked copies.' },
        { q: 'What happens if the supplier vanishes with the access?', a: 'If the code repository, hosting accounts, domain and copies are in your company’s name, secrets are in a manager and two people at your end know, the disappearance is an inconvenience: another supplier takes over from the repository and the copies. If everything was in the supplier’s name, it is another story, and the guide on the blocked application applies.' },
        { q: 'How much data do you really lose?', a: 'With continuous archiving of the database logs, a few minutes at most: you come back to the point just before the failure. With a nightly copy, up to a day. For files, kept versions allow coming back to yesterday, or to the previous hour if the store allows it. The two figures are written per system, because a till and a catalogue do not have the same tolerance.' },
        { q: 'How long to put all this in place?', a: 'Eight weeks: one for the inventory and the two figures, two for the database and its first restore to the minute, one for files, one for the recreatable server, secrets and accounts, one for the first full drill, two to install the monthly drill and the alerts. On an existing application, the first three weeks are often enough to go from “we have backups” to “we have restored”.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'A backup never restored is not a backup; the drill makes it real, and the report makes it verifiable.' },
      { after: 5, text: 'Two of the six failures are not technical at all, the supplier and the account; they are the ones that cost most.' },
    ],
    cta: { eyebrow: 'Send us the date of your last restore', title: 'Manager in Algeria or founder in France: we make your application able to survive its server, and prove it every month with a timed drill', body: 'Symloop builds and takes over applications in production for companies in Algeria and founders settled in France: maximum loss and recovery time written per system, base copy and continuous log archiving to a second site, versioned and locked files, server recreatable from the repository, secrets in a manager, accounts and domain in the client’s name, recovery document, monthly timed restore drill with report. Code, copies and reports in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.heberger, kind: '2027', name: 'Hosting in Algeria or in Europe' },
      { href: L.bloque, kind: '2027', name: 'Taking over an app stuck with a vanished developer' },
      { href: L.roles, kind: '2027', name: 'Roles, permissions and the audit log' },
      { href: L.vivre, kind: '2027', name: 'Keeping an app alive: what it costs each year' },
    ] },
  },
  ar: {
    kind: 'نسخ احتياطية · استئناف · بيانات · 2027', title: 'إن مات الخادم غداً، ماذا يبقى من تطبيقكم في الجزائر سنة 2027؟ النسخ الاحتياطية، الاستعادة المختبَرة، أقصى فقدان، أجل الاستئناف والنسخة غير القابلة للتعديل',
    dek: '«لدينا نسخ احتياطية.» هذا الجواب الذي نحصل عليه في كل اجتماع أول، والسؤال التالي يُسقطه كل مرة تقريباً: «متى استعدتم آخر مرة، وكم استغرق ذلك؟» يصف هذا الدليل ما يُبنى كي ينجو التطبيق من خادمه، ومن استعلام خاطئ، ومن برنامج فدية، ومن مقدّم خدمة اختفى، ومن حساب مستضيف مغلق: رقمان يُكتبان لكل نظام، أقصى فقدان للبيانات وأجل الاستئناف؛ قاعدة قابلة للاستعادة إلى الدقيقة؛ ملفات مرقَّمة على موقع ثانٍ يستحيل محوها؛ أسرار خارج الخادم؛ وتمرين استعادة مؤقَّت كل شهر يجريه الشخص الذي لم يكتب الإجراء.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['نسخ احتياطية', 'استئناف', 'بيانات', 'أمان', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** نكتب أولاً **رقمين لكل نظام**: كم دقيقة من البيانات نقبل فقدانها، وكم من الوقت نقبل التوقف. لتطبيق تسيير نكتب افتراضياً **خمس عشرة دقيقة وساعتين**. ثم نبني ما يحققهما: **الكود والإعداد في مستودع** خارج الخادم لإعادة إنشاء خادم جديد في دقائق؛ **القاعدة** بنسخة منتظمة و**أرشفة مستمرة لسجلاتها** إلى موقع آخر للعودة إلى أي دقيقة؛ **الملفات** في تخزين مرقَّم على موقع ثانٍ بفترة **لا يمكن خلالها محو شيء** حتى من مدير؛ **الأسرار** في مدير، والحسابات والنطاق **باسم الشركة**، وشخصان يعرفان؛ و**تمرين استعادة كامل كل شهر** على خادم فارغ عند مستضيف آخر، مؤقَّت، مدوَّن، يقرؤه المسيّر. نسخة احتياطية لم تُستعد قط ليست نسخة احتياطية.',
      'هذا الدليل موجّه إلى المسيّر الذي خسر يوم مبيعات من قبل، وإلى المؤسس المقيم في فرنسا الذي لن يعرف إلا بالهاتف أن الخادم مات، وإلى مسؤول الإعلام الآلي الذي يجب أن يجيب عن «وماذا لو…». لا يعيد أين توضع الخوادم، الموصوف في [دليل الاستضافة](' + L.heberger + ')، ولا كيف يُستلم تطبيق اختفى مقدّم خدمته، الموصوف في [الدليل المخصص](' + L.bloque + ')؛ بل يصف ما يُبنى كي يكون العطل صباح ثلاثاء عادياً، ويمدّ [صفحتنا عن السحابة والبنية التحتية](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله الوثائق', body: [
        'يمكن للقاعدة أن تعود إلى الدقيقة، لكن ليس بأي نسخة احتياطية. تصف وثائق PostgreSQL الأرشفة المستمرة لسجلات المعاملات مع نسخة أساس: «تدعم هذه التقنية الاستعادة إلى نقطة زمنية: يمكن استعادة القاعدة إلى حالتها في أي وقت منذ أخذ نسخة الأساس». وتحذّر أيضاً من أن النسخ المنطقية، تلك التي تُؤخذ كل ليلة بتصدير، «لا تنتج نسخاً على مستوى نظام الملفات ولا يمكن استعمالها في حل أرشفة مستمرة»، وأن المطلوب «تسلسل مستمر من ملفات السجل المؤرشفة» يعود إلى بداية النسخة على الأقل، وأنكم «مدعوّون إلى مراقبة عملية الأرشفة». وما يفرضه ذلك: يحتفظ التصدير الليلي بمكانه، لكن ما يحقق هدف خمس عشرة دقيقة هو الأرشفة المستمرة إلى موقع آخر يراقبها تنبيه حين تتوقف.',
        'يمكن للملفات أن تصير مستحيلة المحو حتى منكم. تصف وثائق تخزين الكائنات عند مزوّد كبير قفلاً «يُكتب مرة ويُقرأ مرات»: في وضع الامتثال «لا يمكن لأي مستعمل، بما فيه المستعمل الجذر للحساب، أن يكتب فوق نسخة كائن محمية أو يحذفها» خلال فترة احتفاظ لا يمكن تقصيرها؛ وتذكر كاستعمال «نافذة استرداد قابلة للضبط ضد برامج الفدية أو الحذف العرضي». وما يفرضه ذلك: نسخ الملفات والقاعدة مرقَّمة ومقفلة لمدة مكتوبة، ثلاثين يوماً مثلاً، ومهاجم استولى على الخادم لا يستطيع محوها؛ ولا مدير مستعجل.',
        'والقاعدة التي تكررها وكالات الأمن في ثلاثة أرقام: ثلاث نسخ، على وسيطين، إحداها في مكان آخر؛ ونضيف كلمة رابعة، غير قابلة للتعديل، وخامسة، مستعادة. وما لم نجده: إحصاء علني لخسائر البيانات التي تتكبدها الشركات في الجزائر، ولا لمتوسط وقت الاستئناف؛ وما نراه في التطبيقات التي نستلمها نسخة ليلية على الخادم نفسه في معظم الحالات، واستعادة لم تُجرَّب قط في كلها تقريباً، ونقولها ملاحظةً.',
      ] },
      { heading: 'يوم يموت الخادم، على الساعة', body: [
        'الاستئناف لا يُفهم على مبدأ بل على صباح، دقيقة بدقيقة.',
      ], visual: 'incident', after: [
        '**9:14**، يموت قرص خادم الإنتاج. **9:16**، يصل التنبيه إلى هاتفين لا واحد. **9:20**، يُتخذ القرار ويُفتح مستند الاستئناف: يقول من يفعل ماذا، بأي ترتيب، وأين النسخ. **9:25**، يوجد خادم جديد عند المستضيف الاحتياطي، أُنشئ من مستودع الكود الذي يصف الخادم؛ لا أحد يثبّت شيئاً يدوياً. **9:40**، تُستعاد القاعدة إلى نقطة 9:13: آخر نسخة أساس مع السجلات المؤرشفة باستمرار حتى الدقيقة التي تسبق العطل. دقيقة واحدة من البيانات مفقودة، لهدف مكتوب خمس عشرة.',
        '**10:05**، عادت الملفات والصور والوثائق والتصديرات من النسخة المرقَّمة على الموقع الثاني؛ وهي الخطوة الأطول، ولهذا تُقاس كل شهر. **10:20**، يشير اسم النطاق إلى الخادم الجديد. **10:30**، تجتاز اثنتا عشرة عملية تحقق: طلبية، فاتورة، دفعة، تصدير، تسجيل دخول. **10:35**، يعمل الزبائن من جديد. ساعة وإحدى وعشرون دقيقة من التوقف لهدف ساعتين. لم يُرتجل شيء: كل خطوة أُجريت في تمرين الشهر السابق، والمؤسس في ليون تابع الصباح على المستند نفسه مع الفريق. والمثال مبني من حالات حقيقية؛ والهدفان هما ما نكتبه افتراضياً.',
      ] },
      { heading: 'ما يلزم للنجاة من الخادم، في خمس طبقات', body: [
        'خلف ذلك الصباح خمس طبقات، وواحدة فقط تثبت أن الأربع الأخرى موجودة.',
      ], visual: 'couches', after: [
        '**الكود والإعداد**: كود التطبيق ووصف الخادم والإعدادات وسكريبتات النشر تعيش في مستودع خارج الخادم؛ وخادم جديد يُعاد إنشاؤه من هذا المستودع في دقائق، ولا شيء «يُثبَّت يدوياً» مرة، كما يصف [دليل التسليم](' + L.livrer + '). **قاعدة البيانات**: نسخة أساس منتظمة وأرشفة مستمرة للسجلات إلى موقع آخر للعودة إلى أي دقيقة؛ ونسخة متماثلة إن اقتضى النشاط عدم التوقف أبداً. **الملفات**: صور ووثائق وتصديرات في تخزين كائنات مرقَّم على موقع ثانٍ، بفترة لا يمكن خلالها محو شيء.',
        '**الأسرار والوصول**: كلمات المرور والمفاتيح والشهادات في مدير أسرار، لا على الخادم ولا في الكود أبداً؛ حسابات المستضيف والنطاق باسم الشركة، مع شخصين يعرفان، كي لا يأخذ الخادم الميت ولا مقدّم الخدمة المختفي شيئاً؛ وهو الانضباط الموصوف في [دليل الحقوق](' + L.roles + '). **التمرين والمراقبة**: استعادة كاملة كل شهر على خادم فارغ، مؤقَّتة ومدوَّنة، وتنبيهات إن غابت نسخة أو توقفت الأرشفة. وهي الطبقة الوحيدة التي تثبت وجود الأربع الأخرى: نسخة احتياطية لم تُستعد قط فرضية.',
      ] },
      { heading: 'ست طرق للنسخ الاحتياطي، وما نفقده فعلاً', body: [
        '«لدينا نسخ احتياطية» تغطي ست حقائق مختلفة جداً، والخادم الذي يموت في الثالثة مساءً يفصل بينها.',
      ], visual: 'methodes', after: [
        '**النسخة المنطقية الليلية على الخادم نفسه** تموت مع القرص: نفقد كل شيء، ونعود من نسخة قديمة وُجدت صدفة، أو لا نعود. **النسخة المنطقية الليلية المرسلة إلى مكان آخر** تفقد اليوم، المبيعات منذ الثانية فجراً، وتعود في بضع ساعات إن عرف أحد كيف يستعيد وكانت النسخة قابلة للقراءة؛ وهي الأكثر انتشاراً بين الطرق الصادقة. **نسخة الأساس مع السجلات المؤرشفة باستمرار** تفقد بضع دقائق على الأكثر وتعود في أقل من ساعة إن أُجري التمرين؛ وهي السطر الوحيد الذي يحقق هدف خمس عشرة دقيقة.',
        '**لقطة المستضيف وحدها** لا تفقد شيئاً ما دام المستضيف موجوداً والحساب مفتوحاً، وهذا بالضبط ما لم يعد موجوداً في اثنين من أعطال الدليل الستة. **الملفات المنسوخة بلا نسخ** تفقد كل ملف حُذف أو شُفّر قبل النسخة التالية، ونسخة الأمس قد تكون هي نفسها شُفّرت. **كل ذلك بلا تمرين**: الفقدان مجهول، والأجل مجهول، ويوم العطل نعرف؛ وهو السطر الأكثر شيوعاً على الإطلاق، وسبب هذا الدليل.',
      ] },
      { heading: 'تمرين الاستعادة الشهري، مؤقَّت ومدوَّن', body: [
        'التمرين هو القطعة التي تحوّل النسخ الاحتياطية إلى استئناف، ويُقرأ في ثمانية أسطر.',
      ], visual: 'drill', after: [
        '**أول ثلاثاء من الشهر**، على خادم فارغ عند مستضيف آخر، يجريه الشخص الذي لم يكتب الإجراء. خادم يُنشأ من المستودع، أربع دقائق. الأسرار يسترجعها الشخص الثاني، ثلاث: لم تكن أي كلمة مرور على الخادم الميت. القاعدة تُستعاد إلى النقطة المختارة، ثماني عشرة: نسخة أساس مع سجلات حتى 14:02 أمس، والنقطة اعتباطية وتتغير كل شهر. الملفات تُستعاد من الموقع الثاني، اثنتان وعشرون: ضعف الشهر الماضي، والفارق مفتوح. التطبيق يُشغَّل، ثلاث. اثنا عشر تحققاً، تسع. اسم النطاق يُحوَّل في الاختبار ثم يُعاد، دقيقتان. تقرير يُكتب ويُوقَّع، خمس.',
        '**ست وستون دقيقة** لهدف مئة وعشرين: محقَّق. لكن التقرير يقول أيضاً ما تضاعف، ولماذا سنعرفه قبل التمرين المقبل؛ هكذا نعلم أن الملفات كبرت، أو أن الموقع الثاني غيّر سرعته، أو أن خطوة يدوية تسللت إلى الإجراء. يقرأ المسيّر الحكم دون أن يفهم سطراً واحداً من الثمانية، وهذا مقصود؛ ويتلقاه المؤسس في فرنسا بالبريد في اليوم نفسه. وهو المبدأ نفسه كما في [القبول عن بُعد](' + L.livrer + '): لا نصدّق ما لم نرَه يُفعل.',
      ] },
      { heading: 'ستة أعطال، وما يجعل الاستئناف ممكناً', body: [
        'ستة أعطال رأيناها أو استلمناها، ولكل منها ما جعل، أو كان سيجعل، الاستئناف ممكناً.',
      ], visual: 'pannes', after: [
        '**القرص يموت**: خادم يُعاد إنشاؤه من المستودع، قاعدة تُستعاد إلى نقطة العطل، ملفات من الموقع الثاني؛ وهو صباح الشكل الأول. **الاستعلام الخاطئ**: سكريبت يمحو ثلاثة آلاف زبون في 15:12، ولا أحد يراه قبل 17:00؛ نستعيد القاعدة إلى نقطة 15:11 على خادم مجاور، ونعيد حقن الزبائن، وسجل التدقيق يقول بالضبط ماذا؛ وهي الحالة التي تساوي فيها الأرشفة المستمرة أكثر، لأن النسخة الليلية كانت ستفقد اليوم. **برنامج الفدية**: الخادم والنسخ المرفقة به تُشفَّر في الليلة نفسها؛ ونسخ الموقع الثاني، المرقَّمة والمقفلة ثلاثين يوماً، لا يمكن تشفيرها، والخادم يُعاد إنشاؤه نظيفاً من المستودع.',
        '**مقدّم الخدمة المختفي**: كانت لديه الوصولات وكلمات المرور والمستودع؛ إن كان المستودع والحسابات والنطاق باسم الشركة، والأسرار في مدير، وشخصان يعرفان، فالاستئناف إزعاج لا كارثة؛ وإلا يبدأ [الدليل المخصص](' + L.bloque + '). **حساب المستضيف المغلق**: بطاقة مرفوضة عند التجديد، حساب معلَّق، لقطات غير متاحة؛ النسخ تعيش عند مزوّد ثانٍ، والاستئناف يُجرى هناك تماماً كما في التمرين. **الملف المحذوف**: موظف يحذف مجلد العقود المشترك والمزامنة تنشر الحذف؛ النسخ محفوظة، والمجلد يعود إلى تاريخ الأمس في دقائق. واثنان من الأعطال الستة ليسا تقنيين أبداً، وهما الأكثر كلفة.',
      ] },
      { heading: 'رأيناه في مكان آخر: الوثائق المرجعية، وما ينتقل', body: [
        'مصدران يقولان الجوهر. تقول وثائق PostgreSQL إن الأرشفة المستمرة للسجلات تتيح العودة إلى أي لحظة منذ نسخة الأساس، وإن التصدير المنطقي لا يكفي، وإن الأرشفة تُراقَب؛ وما ينتقل هو هدف خمس عشرة دقيقة والتنبيه حين تتوقف الأرشفة. وتقول وثائق قفل الكائنات إن في وضع الامتثال لا أحد، ولا حتى الحساب الجذر، يستطيع محو نسخة خلال احتفاظها، وتسمّي برنامج الفدية حالة استعمال؛ وما ينتقل هو النسخة غير القابلة للتعديل ثلاثين يوماً عند مزوّد ثانٍ.',
        'وما لا تقوله هذه المصادر: كم دقيقة تقبل شركتكم فقدانها، وكم ساعة تقبل الانتظار؛ هذان الرقمان لكم، يُقرَّران في الأسبوع الأول، ويقرران كل الباقي.',
      ] },
      { heading: 'قواعد تطبيق ينجو من خادمه', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **رقمان لكل نظام**، أقصى فقدان وأجل استئناف، يوقّعهما المسيّر. **ثلاث نسخ، وسيطان، واحدة في مكان آخر**، والنسخة في المكان الآخر مرقَّمة وغير قابلة للتعديل لمدة مكتوبة. **القاعدة تُؤرشَف باستمرار** إلى موقع آخر، وتنبيه يرن حين تتوقف الأرشفة. **الخادم يُعاد إنشاؤه من المستودع**؛ لا شيء يُثبَّت يدوياً. **الأسرار والحسابات والنطاق** خارج الخادم، باسم الشركة، يعرفها شخصان. **تمرين كامل كل شهر**، مؤقَّت، مدوَّن، يجريه شخص آخر.',
        'قاعدة سابعة تخص عرض السعر: «نسخ احتياطية يومية» ليس متطلباً بل جملة؛ المتطلب يُكتب «أقصى فقدان وأجل استئناف مكتوبان لكل نظام؛ نسخة أساس وأرشفة مستمرة للسجلات إلى موقع ثانٍ مع تنبيه؛ ملفات في تخزين مرقَّم على موقع ثانٍ بقفل ثلاثين يوماً؛ خادم قابل لإعادة الإنشاء من المستودع؛ أسرار في مدير، حسابات ونطاق باسم الزبون، حاملان؛ مستند استئناف؛ تمرين استعادة كامل شهري على خادم فارغ عند مستضيف آخر، مؤقَّت، تقرير مسلَّم»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يكتب «نسخ احتياطي آلي مشمول» بلا رقم فقدان ولا أجل كتب السطر السادس من الجدول.',
      ] },
      { heading: 'ست شركات، والرقم الذي كتبته', body: [
        'ست شركات نجهّزها كثيراً، ولكل منها الرقمان المكتوبان وما يحققهما.',
      ], list: [
        '**المتجر المُدار من فرنسا**، الموصوف في [الدليل المخصص](' + L.commerce + '). خمس عشرة دقيقة وساعتان؛ يتلقى المؤسس تقرير التمرين كل شهر ويعرف، من ليون، أن صندوق الجزائر سيعود.',
        '**الصندوق في المحل**، الموصوف في [الدليل المخصص](' + L.caisse + '). يواصل التحصيل بلا خادم بفضل وضع عدم الاتصال في [دليل المزامنة](' + L.offline + ')؛ فلاستئناف الخادم أربع ساعات، لكن صفر دقيقة من مبيعات مفقودة.',
        '**المرقّي العقاري**، الموصوف في [الدليل المخصص](' + L.promoteur + '). عقود المقتنين ووصولاتهم في التخزين المرقَّم المقفل سنة؛ لا ملف موقَّع يمكن أن يختفي.',
        '**عيادة طب الأسنان**، الموصوفة في [الدليل المخصص](' + L.dentaire + '). خمس دقائق وساعة لملفات المرضى؛ ويُجرى التمرين يوم سبت حين تكون العيادة مغلقة.',
        '**منصة SaaS**، الموصوفة في [الدليل المخصص](' + L.saas + '). هدف لكل زبون مكتوب في العقد، والتمرين يستعيد زبوناً واحداً في كل مرة لإثبات العزل.',
        '**الشركة التي تهاجر**، الموصوفة في [دليل استعادة البيانات](' + L.reprendre + '). يُجرى تمرين الاستعادة الأول قبل التحويل، لأن أسبوع التحويل أسوأ وقت لاكتشاف أننا لا نعرف الاستعادة.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم تطبيق يُجعل قادراً على النجاة من خادمه في ثمانية أسابيع، الأول بلا بايت منسوخ.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يجري الجرد ويكتب الرقمين: ما يوجد وأين، أقصى فقدان وأجل استئناف لكل نظام، يوقّعهما المسيّر. **الأسبوعان 1 إلى 3** يعالجان القاعدة: نسخة أساس وأرشفة مستمرة للسجلات إلى موقع آخر، وأول استعادة إلى الدقيقة مُتحقَّق منها. **الأسبوع 3 إلى 4** يعالج الملفات: تخزين كائنات مرقَّم على موقع ثانٍ، فترة عدم قابلية التعديل، اختبار استعادة مجلد. **الأسبوع 4 إلى 5** يجعل الخادم قابلاً لإعادة الإنشاء من المستودع، ويضع الأسرار في مدير، وينقل الحسابات والنطاق إلى اسم الشركة بحاملين.',
        '**الأسبوع 5 إلى 6** يجري التمرين الكامل الأول على خادم فارغ عند مستضيف آخر، مؤقَّتاً، ويصحح الإجراء. **الأسبوعان 6 إلى 8** يثبّتان التمرين الشهري، أول ثلاثاء، والتنبيهات إن غابت نسخة، والتقرير الذي يقرؤه المسيّر. وتدخل كلفة هذه النسخ والتمرين في الميزانية السنوية الموصوفة في [دليل حياة التطبيق](' + L.vivre + ')؛ وحين يعمل نموذج ذكاء اصطناعي على خوادمكم يضيف [دليل النشر الخاص](' + L.prive + ') نسخه إلى التمرين نفسه.',
      ] },
      { heading: 'ما يُفشل استئنافاً', body: [
        'عمليات الاستئناف التي رأيناها تفشل فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**النسخة الاحتياطية على الخادم نفسه.** تموت مع القرص، ونكتشف ذلك في ذلك الصباح.',
        '**لم تُستعد قط.** النسخة موجودة، وهي غير قابلة للقراءة أو ناقصة أو مشفَّرة، ولا أحد كان يعلم.',
        '**كلمات المرور على الخادم الميت.** القاعدة مستعادة، ولا أحد يستطيع الاتصال بها.',
        '**حامل واحد.** هو في إجازة، أو هو مقدّم الخدمة المختفي.',
        '**نسخ قابلة للمحو.** شفّرها برنامج الفدية مع الخادم.',
        '**الخادم المثبَّت يدوياً.** ثلاثة أيام لإعادة بنائه، ولا أحد يتذكر كل شيء.',
        '**لا رقم مكتوب.** كان لكل واحد هدف مختلف في ذهنه، واستغرق الاستئناف ما استغرق.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين ومسؤولي إعلام آلي.',
      ], faq: [
        { q: 'لدينا نسخة احتياطية كل ليلة، أليس ذلك كافياً؟', a: 'يتوقف على رقمين أنتم وحدكم من يكتبهما: كم دقيقة من البيانات تقبلون فقدانها، وكم ساعة من التوقف. النسخة الليلية تفقد حتى يوم وتعود في بضع ساعات، إن كانت في مكان غير الخادم وإن كان أحد قد استعادها من قبل. ولتحقيق خمس عشرة دقيقة تلزم الأرشفة المستمرة لسجلات القاعدة؛ ولتحقيق ساعتين يلزم تمرين فعل ذلك من قبل.' },
        { q: 'ما فائدة تمرين الاستعادة إن كانت النسخ آلية؟', a: 'إثبات أنها تُستعاد، وفي كم من الوقت. معظم إخفاقات الاستئناف التي نراها تأتي من نسخ غير قابلة للقراءة أو ناقصة أو مشفَّرة أو كلمات مرور ضائعة، ولا أتمتة تكتشف ذلك: فقط استعادة كاملة، على خادم فارغ، من شخص لم يكتب الإجراء، تُظهره. والتقرير المؤقَّت هو أيضاً ما يتيح للمسيّر قراءة حكم دون فهم التقنية.' },
        { q: 'كيف نحتمي من برنامج فدية يشفّر النسخ الاحتياطية أيضاً؟', a: 'بنسخ لا يستطيع بلوغها: على موقع ثانٍ، عند مزوّد آخر، مرقَّمة، ومقفلة لمدة مكتوبة لا يستطيع خلالها أحد، ولا حتى حساب المدير، محوها أو الكتابة فوقها. ويُعاد عندها إنشاء الخادم المخترَق نظيفاً من مستودع الكود، وتعود القاعدة والملفات من النسخ المقفلة.' },
        { q: 'ماذا يحدث إن اختفى مقدّم الخدمة بالوصولات؟', a: 'إن كان مستودع الكود وحسابات المستضيف والنطاق والنسخ باسم شركتكم، والأسرار في مدير، وشخصان عندكم يعرفان، فالاختفاء إزعاج: مقدّم خدمة آخر يستلم من المستودع والنسخ. وإن كان كل شيء باسم مقدّم الخدمة فهذه قصة أخرى، ويُطبَّق دليل التطبيق المحجوز.' },
        { q: 'كم من البيانات نفقد فعلاً؟', a: 'مع الأرشفة المستمرة لسجلات القاعدة، بضع دقائق على الأكثر: نعود إلى النقطة التي تسبق العطل مباشرة. ومع نسخة ليلية، حتى يوم. وللملفات، تتيح النسخ المحفوظة العودة إلى الأمس، أو إلى الساعة السابقة إن سمح التخزين. ويُكتب الرقمان لكل نظام، لأن الصندوق والكتالوج ليس لهما التحمل نفسه.' },
        { q: 'كم من الوقت لوضع كل ذلك؟', a: 'ثمانية أسابيع: واحد للجرد والرقمين، اثنان للقاعدة وأول استعادة لها إلى الدقيقة، واحد للملفات، واحد للخادم القابل لإعادة الإنشاء والأسرار والحسابات، واحد للتمرين الكامل الأول، اثنان لتثبيت التمرين الشهري والتنبيهات. وفي تطبيق قائم تكفي الأسابيع الثلاثة الأولى غالباً للانتقال من «لدينا نسخ احتياطية» إلى «استعدنا».' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'نسخة احتياطية لم تُستعد قط ليست نسخة احتياطية؛ التمرين يجعلها حقيقية، والتقرير يجعلها قابلة للتحقق.' },
      { after: 5, text: 'اثنان من الأعطال الستة ليسا تقنيين أبداً، مقدّم الخدمة والحساب؛ وهما الأكثر كلفة.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا تاريخ آخر استعادة لكم', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نجعل تطبيقكم قادراً على النجاة من خادمه، ونثبت ذلك كل شهر بتمرين مؤقَّت', body: 'تبني Symloop وتستلم تطبيقات في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا: أقصى فقدان وأجل استئناف مكتوبان لكل نظام، نسخة أساس وأرشفة مستمرة للسجلات إلى موقع ثانٍ، ملفات مرقَّمة ومقفلة، خادم قابل لإعادة الإنشاء من المستودع، أسرار في مدير، حسابات ونطاق باسم الزبون، مستند استئناف، تمرين استعادة شهري مؤقَّت مع تقرير. الكود والنسخ والتقارير في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.heberger, kind: '2027', name: 'الاستضافة في الجزائر أو أوروبا' },
      { href: L.bloque, kind: '2027', name: 'استلام تطبيق محجوز عند مطوّر اختفى' },
      { href: L.roles, kind: '2027', name: 'الأدوار والصلاحيات وسجل التدقيق' },
      { href: L.vivre, kind: '2027', name: 'إبقاء التطبيق حياً: ما يكلّفه كل سنة' },
    ] },
  },
};

const KEYWORDS = "sauvegarde application entreprise algérie 2027, si le serveur tombe que reste-t-il, restauration testée sauvegarde, perte de données maximale délai de reprise, rpo rto application gestion, archivage continu base de données restauration à la minute, copie inaltérable rançongiciel sauvegarde, exercice de restauration mensuel, sauvegarde hors site second hébergeur, prestataire disparu accès sauvegardes, backup and recovery drill algeria 2027, point in time recovery immutable backup, نسخ احتياطية استعادة الجزائر, إن مات الخادم ماذا يبقى";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
