import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations.mjs';

const SLUG = 'roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations';
const FIGURES = ['ecran', 'couches', 'journal', 'demandes', 'failles', 'calendrier'];
const DATE = '2026-11-09';

const L = {
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  saas: '/blog/construire-saas-multi-tenant-algerie-2027-isolation-clients-base-partagee-rls-plans-abonnement-mises-a-jour/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  ia: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  donnees: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  dentaire: '/blog/cabinet-dentaire-algerie-2027-patients-diaspora-ete-plan-de-traitement-a-distance-devis-radios-suivi/',
};

const CONTENT = {
  fr: {
    kind: 'Rôles · Droits · Journal d’audit · 2027', title: "Rôles, droits et journal d'audit dans une application en Algérie en 2027 : qui voit quoi, qui modifie quoi, qui a changé ce prix, et comment on le construit pour qu'un départ ou une erreur ne coûte rien",
    dek: "« Qui a changé ce prix ? » Personne ne sait : trois personnes utilisent le même compte, le commercial voit les marges, et l'employé parti en mars a encore l'application sur son téléphone. Ce guide décrit comment les accès d'une application se construisent : une personne par compte, des rôles écrits à partir d'une phrase du gérant, des règles par ligne, par agence et par montant appliquées par la base elle-même, des approbations qui partent sur le téléphone de celui qui peut dire oui, un journal qu'on ne peut ni modifier ni effacer, et l'accès coupé en une action le jour du départ.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Rôles', 'Droits d’accès', 'Journal d’audit', 'Sécurité', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Les accès d'une application ne sont pas un écran de connexion : ce sont **cinq couches**. Une **identité** par personne, sans compte partagé, qui donne un nom à chaque action. Des **rôles**, gérant, commercial, magasinier, comptable, prestataire, agent IA, chacun écrit à partir d'une phrase du gérant. Des **règles par ligne** : ses clients, son dépôt, son agence, son plafond de remise ; **refusé par défaut, autorisé par règle**, et appliquées par la base et le serveur, pas seulement par l'interface. Des **approbations** : ce qui dépasse une limite part sur le téléphone de celui qui peut dire oui. Et un **journal** en ajout seul, qui garde qui, quand, d'où, la valeur avant et la valeur après, les refus et les lectures sensibles. Une donnée « masquée » n'est pas cachée à l'écran : elle n'est pas envoyée. Et le départ d'un employé est une action, pas un oubli. Six semaines, construites avec l'application et non après.",
      "Ce guide s'adresse au gérant en Algérie qui a prêté son mot de passe à trois personnes, au fondateur installé en France qui pilote une équipe qu'il ne voit pas, et à celui qui compare des devis où « gestion des utilisateurs » tient en une ligne. Il ne redit pas comment un client se connecte, décrit dans [le guide sur l'OTP](" + L.otp + "), ni comment deux entreprises sont isolées dans un SaaS, décrit dans [le guide sur le multi-tenant](" + L.saas + ") ; il décrit ce qui se passe à l'intérieur d'une entreprise, entre ses propres employés.",
    ],
    sections: [
      { heading: 'Ce que les chiffres disent', body: [
        "Le contrôle d'accès est la première faille des applications, et de loin. Le classement 2025 des dix risques de l'OWASP, la référence ouverte de la sécurité applicative, garde le **contrôle d'accès défaillant à la première place** : une forme de ce défaut a été trouvée dans **100 % des applications testées**, avec un taux d'incidence moyen de 3,74 % et plus de 1,8 million d'occurrences relevées. La liste de ses formes se lit comme un inventaire de ce que nous reprenons : accès accordé à tous au lieu d'être refusé par défaut, contournement en modifiant l'adresse, consultation du compte d'un autre en changeant son identifiant, actions de modification sans contrôle. Ce que cela impose : la question n'est pas « sommes-nous concernés » mais « où ».",
        "Les remèdes sont écrits, et ils sont simples à énoncer. La même page de l'OWASP commence par : **« sauf pour les ressources publiques, refuser par défaut »** ; puis construire le contrôle d'accès une fois et le réutiliser partout, imposer que chaque enregistrement ait un propriétaire, **journaliser les échecs de contrôle d'accès** et alerter, et invalider les sessions à la déconnexion. La documentation de PostgreSQL décrit l'outil qui les rend applicables : des politiques de sécurité au niveau des lignes, qui restreignent, par utilisateur, les lignes qu'une requête peut lire ou modifier ; quand elles sont activées sans politique, « une politique de refus par défaut est utilisée », et elles peuvent différer pour la lecture, l'insertion, la modification et la suppression. Ce que cela impose : la règle « ses clients seulement » vit dans la base, pas dans un écran.",
        "Ce qui n'est écrit nulle part : vos rôles. Aucune norme ne dit si votre magasinier doit voir les prix de vente ni à partir de quel montant une remise demande votre accord ; cela se décide avec vous, en une phrase par rôle. Ce que nous n'avons pas trouvé : une mesure publique des fuites internes dans les entreprises algériennes ; ce que nous voyons sur les applications que nous reprenons, c'est que les six fuites décrites plus bas sont des habitudes, pas des attaques, et qu'on les trouve dans presque toutes.",
      ] },
      { heading: 'Les mêmes données, cinq rôles', body: [
        "Les accès ne se comprennent pas sur un schéma mais sur une grille : les mêmes six données, vues par cinq rôles.",
      ], visual: 'ecran', after: [
        "**Le gérant** modifie presque tout, sur toute l'entreprise, et ses exports sont journalisés comme ceux des autres. **Le commercial** voit les prix de vente et le solde de ses clients, pas ceux des autres ; il accorde une remise jusqu'à son plafond ; le prix d'achat et la marge ne lui sont pas masqués à l'écran, ils ne sont **pas envoyés** à son téléphone, ce qui est la seule façon qu'ils n'y soient pas. **Le magasinier** modifie le stock de son dépôt, voit les prix de vente, et ne voit ni les prix d'achat ni les soldes. **Le comptable** voit tout, en lecture, et peut exporter ; il ne supprime rien.",
        "**L'agent IA** est la colonne qu'on oublie : celui qui répond aux clients sur WhatsApp, décrit dans [le guide dédié](" + L.whatsapp + "), est un rôle comme les autres, avec moins de droits que la personne qu'il assiste. Il lit ce qu'il lui faut pour répondre, propose une remise sans l'accorder, ne voit jamais la marge et n'exporte rien ; ses actions portent son nom dans le journal. La grille s'écrit la première semaine, avec vous, et elle sert trois fois : elle dit aux développeurs quoi construire, elle sert de scénario de recette, et elle est le document qu'on relit quand quelqu'un demande un droit de plus.",
      ] },
      { heading: "Les accès d'une application, en cinq couches", body: [
        "Derrière la grille, cinq couches, et celle du milieu est celle qui manque le plus souvent.",
      ], visual: 'couches', after: [
        "**L'identité** : une personne, un compte, connectée par son numéro de téléphone avec un code ou une clé d'accès, sur des appareils connus, avec une session qui expire ; il n'y a pas de mot de passe à prêter, donc pas de compte partagé. **Les rôles** disent ce que chaque fonction voit et fait, par écran et par action ; une personne peut en porter deux, et un rôle ne se déforme pas pour arranger quelqu'un. **Les règles par ligne** disent *lesquelles* : ses clients, son dépôt, son agence, avec des limites, un plafond de remise, un montant maximal ; elles sont appliquées par la base et par le serveur à chaque requête, parce qu'une règle qui n'existe que dans l'interface se contourne en changeant un numéro dans l'adresse.",
        "**Les approbations** évitent que la limite bloque le travail : la remise au-delà du plafond, l'annulation d'une facture, l'export, la suppression partent chez celui qui peut dire oui, sur son téléphone, par la notification décrite dans [le guide sur les notifications](" + L.notif + "), et la réponse revient en une touche. **Le journal** écrit qui, quand, d'où, la valeur avant et la valeur après, le motif et l'approbateur, mais aussi les refus et les lectures de données sensibles ; il est en ajout seul, hors de portée des rôles métier, sauvegardé à part comme [le guide sur l'hébergement](" + L.heberger + ") le prévoit, et il est lu : une revue hebdomadaire et des alertes sur l'inhabituel.",
      ] },
      { heading: '« Qui a changé ce prix ? »', body: [
        "Le journal ne sert pas à surveiller : il sert à répondre à une question précise, en une minute, six mois plus tard.",
      ], visual: 'journal', after: [
        "**14 h 02**, Karim, commercial, tente une remise de 10 % sur la commande 1042 depuis son téléphone : refusée, son plafond est de 5 %. La tentative est écrite ; c'est la ligne la plus utile du journal, parce qu'elle dit où une limite est mal placée ou qui la teste. **14 h 02**, la demande d'approbation part au gérant avec la commande, le client et le motif saisi. **14 h 05**, le gérant approuve d'une touche ; son nom et l'heure sont attachés à la décision. **14 h 05**, le prix passe de 4 800 à 4 320 dinars ; l'ancienne valeur est gardée, rien n'est écrasé.",
        "**14 h 06**, l'agent IA lit le nouveau prix pour répondre au client sur WhatsApp : la lecture d'une donnée sensible est une action, et elle a une ligne. Six mois plus tard, la question « qui a changé ce prix » a une réponse en cinq lignes, avec deux noms, deux heures, un motif et les deux valeurs. Ce que le journal garde pour chaque ligne : la personne et non un compte, l'heure et l'appareil, avant et après, le pourquoi, ce qui a été refusé, ce qui a été lu. Et une règle sans exception : on ajoute des lignes, on n'en modifie et on n'en supprime aucune, gérant compris.",
      ] },
      { heading: "Six demandes d'accès, et la règle qu'on écrit", body: [
        "Six demandes que nous entendons de gérants, et la règle que chacune devient.",
      ], visual: 'demandes', after: [
        "**Le commercial**, « qu'il ne voie que ses clients, et pas mes marges » : lignes filtrées sur son portefeuille par la base, prix d'achat et marge jamais envoyés, remise jusqu'à son plafond et approbation au-delà ; c'est le rôle du prévendeur de [l'application de terrain](" + L.prevente + "). **Le magasinier**, « qu'il gère le stock sans voir les prix » : stock de son dépôt en écriture, prix de vente en lecture, prix d'achat masqué, inventaire validé par une seconde personne. **Le comptable externe**, « qu'il voie tout mais ne touche à rien » : lecture seule, export autorisé et journalisé, aucune suppression, accès revu chaque année.",
        "**Le chef d'agence**, « qu'il pilote son agence, pas les autres » : tout sur la sienne, rien sur les autres, ses totaux visibles par la direction dans [le tableau de bord](" + L.dashboard + ") et pas l'inverse. **Le prestataire**, « qu'il dépanne sans garder un accès » : accès nominatif, limité dans le temps et sur un périmètre, coupé automatiquement à la date. **L'agent IA**, « qu'il réponde aux clients sans tout savoir » : un rôle propre, la lecture du nécessaire, des actions sous plafond, jamais la marge ni l'export. Chaque ligne commence par une phrase du gérant ; si une demande ne se laisse pas écrire en une phrase, le rôle est mal découpé.",
      ] },
      { heading: "Six fuites d'accès", body: [
        "Six fuites que nous trouvons sur les applications que nous reprenons ; aucune n'est une attaque, toutes sont des habitudes.",
      ], visual: 'failles', after: [
        "**L'employé parti** : il a quitté l'entreprise il y a trois mois et son compte marche encore sur son téléphone ; le départ est une action unique, sessions coupées, appareils retirés, clients réattribués, et une revue mensuelle liste les comptes inactifs. **Le compte partagé** : trois personnes utilisent le compte du gérant et le journal dit « gérant » partout ; un compte par personne, connexion par téléphone, et une délégation écrite plutôt qu'un partage. **Le numéro changé dans l'adresse** : le commercial remplace 1042 par 1043 et voit la commande d'un autre ; la règle par ligne est vérifiée côté serveur et dans la base à chaque requête, et le refus est journalisé.",
        "**L'export de toute la base** : la liste des clients part dans un fichier, puis chez un concurrent ; l'export est réservé, limité, journalisé, avec une alerte, et l'interface montre sans tout donner. **Tout le monde administrateur** : pour aller vite, chacun a reçu tous les droits « en attendant » ; les rôles sont écrits la première semaine, les droits ajoutés par demande, et revus chaque trimestre. **Le journal modifiable** : celui qui a changé le prix peut effacer la ligne ; le journal est en ajout seul, hors de portée des rôles métier, sauvegardé à part. Les trois premières se voient dans le journal si quelqu'un le lit ; les trois dernières se décident la première semaine.",
      ] },
      { heading: "Vu ailleurs : l'OWASP, PostgreSQL, et ce qui se transpose", body: [
        "Deux sources disent l'essentiel. Le classement de l'OWASP dit que le contrôle d'accès défaillant est le premier risque et qu'il a été trouvé sous une forme ou une autre dans toutes les applications testées ; ce qui se transpose, c'est sa première recommandation, refuser par défaut, et sa moins suivie, journaliser les refus. La documentation de PostgreSQL dit que la base peut restreindre les lignes par utilisateur et par type d'opération, et refuse tout quand aucune politique n'existe ; ce qui se transpose, c'est qu'une règle écrite dans la base protège tous les écrans, y compris ceux qu'on ajoutera dans deux ans et l'agent IA qu'on branchera dessus.",
        "Ce que ces sources ne disent pas : vos rôles, vos plafonds, et qui approuve quoi ; la première semaine du projet y répond, avec une phrase par rôle et la grille sous les yeux.",
      ] },
      { heading: "Les règles d'un accès qui tient", body: [
        "Six règles, écrites la première semaine. **Une personne, un compte** ; aucun compte partagé, aucune exception pour le gérant. **Refusé par défaut** : un droit existe parce qu'une règle l'accorde. **La règle vit dans la base et le serveur**, pas dans l'interface. **Masqué veut dire non envoyé.** **Ce qui dépasse une limite demande une approbation**, pas un contournement. **Le journal est en ajout seul et il est lu** : avant, après, refus, lectures sensibles, revue hebdomadaire.",
        "Une septième règle porte sur le devis : « gestion des utilisateurs et des rôles » n'est pas une exigence, c'est une ligne ; l'exigence s'écrit « grille des rôles validée ; un compte par personne ; règles par ligne pour le portefeuille, le dépôt et l'agence appliquées dans la base ; plafonds et approbations listés ; données masquées non envoyées ; journal en ajout seul avec valeurs avant et après, refus compris ; départ en une action ; recette où chaque rôle tente ce qu'il n'a pas le droit de faire », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui chiffre « un écran d'administration » a chiffré un écran, pas un contrôle.",
      ] },
      { heading: "Six entreprises, et la règle qu'on écrit d'abord", body: [
        "Six entreprises que nous équipons souvent, et pour chacune la première règle retenue.",
      ], list: [
        "**Le distributeur et son portail**, décrits dans [le guide dédié](" + L.portail + "). Chaque commercial voit son portefeuille, le prix d'achat n'est envoyé à personne sur le terrain, la remise a un plafond par rôle.",
        "**Le réseau d'agences.** Chaque agence voit la sienne ; la direction voit les totaux de toutes ; un chef d'agence ne voit pas la caisse de l'autre.",
        "**La clinique et le cabinet**, décrits dans [le guide sur le cabinet](" + L.dentaire + "). Le praticien voit ses patients, l'accueil voit les rendez-vous sans le dossier, et chaque ouverture d'un dossier est journalisée.",
        "**L'école privée.** L'enseignant voit ses classes, la scolarité voit les paiements, le parent voit son enfant ; aucune liste d'élèves ne s'exporte sans trace.",
        "**L'entreprise pilotée depuis la France.** Le fondateur ne voit pas son équipe : c'est le journal et les approbations sur son téléphone qui lui donnent le contrôle, sans appeler chaque soir.",
        "**L'éditeur de SaaS**, décrit dans [le guide sur le multi-tenant](" + L.saas + "). L'isolation entre clients d'abord, puis des rôles par client que chaque client configure, et l'accès du support de l'éditeur limité dans le temps et journalisé.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'un contrôle d'accès complet en six semaines, construit avec l'application.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit les rôles : une phrase du gérant par rôle, la grille de qui voit et modifie quoi, les plafonds et qui approuve ; signés. **La semaine 1 à 2** construit l'identité et les sessions : un compte par personne, connexion par téléphone, appareils connus, expiration, et le départ en une action. **Les semaines 2 à 4** construisent les règles par ligne, portefeuille, dépôt, agence, plafonds, dans la base et côté serveur, avec des tests d'accès croisés automatisés : chaque rôle essaie de lire et de modifier ce qui appartient à un autre.",
        "**La semaine 4 à 5** construit les approbations et le journal : la demande qui part sur le téléphone de l'approbateur, le journal en ajout seul avec les valeurs avant et après. **La semaine 5 à 6** est la recette et la revue : chaque rôle tente ce qu'il n'a pas le droit de faire, devant vous, et l'écran de revue des accès est livré avec ses alertes. Ces tests rejoignent ceux qui tournent à chaque livraison, selon [le guide sur la livraison](" + L.livrer + ") ; et quand les données viennent d'un ancien système, les comptes se créent pendant la reprise décrite dans [le guide sur la reprise des données](" + L.donnees + ").",
      ] },
      { heading: 'Ce qui fait échouer un contrôle d\'accès', body: [
        "Les contrôles d'accès que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**Des rôles sans règles par ligne.** Le commercial a le bon rôle, et voit les clients de tous.",
        "**La règle dans l'interface seulement.** Le bouton est caché ; l'adresse fonctionne.",
        "**La donnée masquée mais envoyée.** La marge est dans la réponse du serveur ; il suffit de regarder.",
        "**Le compte du gérant prêté.** Le journal existe, et il ne dit plus rien.",
        "**Des limites sans approbation.** Bloqués, les employés demandent le mot de passe de quelqu'un d'autre.",
        "**Le journal que personne ne lit.** Tout y est écrit ; personne n'a regardé depuis un an.",
        "**Le départ oublié.** Aucune procédure ; le compte vit des mois après la personne.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et d'équipes qui comparent des devis.",
      ], faq: [
        { q: 'Comment empêcher un commercial de voir les clients des autres et mes marges ?', a: "Par une règle par ligne appliquée dans la base : ses requêtes ne renvoient que les clients de son portefeuille, quelle que soit la façon dont il les demande. Et par le fait que le prix d'achat et la marge ne sont pas envoyés à son téléphone ; une donnée masquée seulement à l'écran se retrouve en regardant ce que le serveur répond." },
        { q: 'Comment savoir qui a modifié un prix ou annulé une facture ?', a: "Par un journal en ajout seul qui écrit, pour chaque modification, la personne, l'heure, l'appareil, la valeur avant, la valeur après, le motif et l'approbateur. Cela suppose un compte par personne : avec un compte partagé, le journal existe et ne dit rien. Les tentatives refusées y figurent aussi." },
        { q: 'Que se passe-t-il quand un employé quitte l’entreprise ?', a: "Une seule action : ses sessions sont coupées sur tous ses appareils, son compte est désactivé, ses clients et ses dossiers sont réattribués, et tout ce qu'il a fait reste dans le journal sous son nom. Une revue mensuelle liste les comptes inactifs, pour le cas où le départ n'a pas été signalé." },
        { q: 'L’agent IA a-t-il accès à toutes nos données ?', a: "Non : c'est un rôle comme les autres, avec moins de droits que la personne qu'il assiste. Il lit ce qu'il lui faut pour répondre, agit sous un plafond, ne voit jamais la marge et n'exporte rien ; ses actions et ses lectures de données sensibles sont dans le journal sous son nom. Les mêmes règles par ligne s'appliquent à lui." },
        { q: 'Les limites ne vont-elles pas bloquer le travail ?', a: "Pas si elles ont une sortie : ce qui dépasse une limite, une remise au-delà du plafond, une annulation, un export, part en demande d'approbation sur le téléphone de celui qui peut dire oui, et la réponse revient en une touche. Une limite sans approbation pousse les employés à emprunter le compte d'un autre." },
        { q: 'Combien de temps pour construire les rôles et le journal ?', a: "Six semaines, en même temps que l'application : une pour écrire les rôles et la grille, une pour l'identité et les sessions, deux pour les règles par ligne dans la base, une pour les approbations et le journal, une de recette où chaque rôle tente ce qu'il n'a pas le droit de faire. Les ajouter après coup oblige à rouvrir chaque écran." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Une donnée masquée n'est pas cachée à l'écran : elle n'est pas envoyée, et c'est la seule façon qu'elle n'y soit pas." },
      { after: 4, text: "La ligne la plus utile du journal est une tentative refusée : elle dit où une limite est mal placée, ou qui la teste." },
    ],
    cta: { eyebrow: 'Envoyez-nous une phrase par rôle', title: "Gérant en Algérie ou fondateur en France : nous construisons les rôles, les droits et le journal de votre application, pour que chacun voie ce qu'il doit voir et que chaque modification ait un nom", body: "Symloop construit des applications, des plateformes et des agents IA pour les entreprises en Algérie et les fondateurs installés en France, avec un contrôle d'accès qui vous appartient : un compte par personne, grille des rôles validée, règles par ligne appliquées dans la base, données masquées non envoyées, plafonds et approbations sur le téléphone, journal en ajout seul avec les valeurs avant et après, départ en une action, recette où chaque rôle tente ce qu'il n'a pas le droit de faire. Code dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.otp, kind: '2027', name: 'Connexion par code SMS ou WhatsApp, passkeys' },
      { href: L.saas, kind: '2027', name: 'SaaS multi-tenant : isolation des clients' },
      { href: L.dashboard, kind: '2027', name: 'Tableau de bord temps réel du gérant' },
      { href: L.livrer, kind: '2027', name: 'Livrer une application sans la casser' },
    ] },
  },
  en: {
    kind: 'Roles · Permissions · Audit log · 2027', title: 'Roles, permissions and the audit log in an application in Algeria in 2027: who sees what, who changes what, who changed this price, and how to build it so that a departure or a mistake costs nothing',
    dek: '“Who changed this price?” Nobody knows: three people use the same account, the sales rep sees the margins, and the employee who left in March still has the app on their phone. This guide describes how an application’s access is built: one person per account, roles written from one sentence by the manager, rules per row, per branch and per amount enforced by the database itself, approvals that reach the phone of whoever can say yes, a log that cannot be altered or erased, and access cut in one action the day someone leaves.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Roles', 'Access rights', 'Audit log', 'Security', 'Algeria 2027'],
    intro: [
      '**Short answer.** An application’s access is not a login screen: it is **five layers**. One **identity** per person, no shared account, which gives every action a name. **Roles**, manager, sales rep, storekeeper, accountant, contractor, AI agent, each written from one sentence by the manager. **Row rules**: their customers, their depot, their branch, their discount limit; **denied by default, allowed by rule**, and enforced by the database and the server, not only the interface. **Approvals**: what exceeds a limit goes to the phone of whoever can say yes. And an append-only **log**, which keeps who, when, from where, the value before and the value after, refusals and sensitive reads. “Hidden” data is not hidden on screen: it is not sent. And an employee leaving is an action, not an oversight. Six weeks, built with the application and not after.',
      'This guide is for the manager in Algeria who lent their password to three people, the founder settled in France running a team they do not see, and anyone comparing quotes where “user management” is one line. It does not repeat how a customer logs in, described in [the OTP guide](' + L.otp + '), nor how two companies are isolated in a SaaS, described in [the multi-tenant guide](' + L.saas + '); it describes what happens inside one company, between its own employees.',
    ],
    sections: [
      { heading: 'What the figures say', body: [
        'Access control is the first weakness of applications, by far. The 2025 ranking of the OWASP top ten risks, the open reference for application security, keeps **broken access control in first place**: some form of it was found in **100 % of the applications tested**, with an average incidence rate of 3.74 % and more than 1.8 million occurrences recorded. Its list of forms reads like an inventory of what we take over: access granted to anyone instead of denied by default, bypass by altering the address, viewing someone else’s account by changing its identifier, modifying actions with no check. What this imposes: the question is not “are we concerned” but “where”.',
        'The remedies are written, and simple to state. The same OWASP page starts with: **“except for public resources, deny by default”**; then build access control once and reuse it everywhere, enforce that every record has an owner, **log access control failures** and alert, and invalidate sessions at logout. The PostgreSQL documentation describes the tool that makes them enforceable: row security policies, which restrict, per user, the rows a query can read or modify; when enabled with no policy, “a default-deny policy is used”, and they can differ for select, insert, update and delete. What this imposes: the rule “their customers only” lives in the database, not in a screen.',
        'What is written nowhere: your roles. No standard says whether your storekeeper should see selling prices or from what amount a discount needs your approval; that is decided with you, one sentence per role. What we did not find: a public measure of internal leaks in Algerian companies; what we see on the apps we take over is that the six leaks described below are habits, not attacks, and they are found in almost all of them.',
      ] },
      { heading: 'The same data, five roles', body: [
        'Access is not understood on a diagram but on a grid: the same six pieces of data, seen by five roles.',
      ], visual: 'ecran', after: [
        '**The manager** changes almost everything, across the company, and their exports are logged like everyone else’s. **The sales rep** sees selling prices and their own customers’ balance, not the others’; grants a discount up to their limit; purchase price and margin are not hidden on their screen, they are **not sent** to their phone, which is the only way they are not there. **The storekeeper** changes the stock of their depot, sees selling prices, and sees neither purchase prices nor balances. **The accountant** sees everything, read-only, and may export; they delete nothing.',
        '**The AI agent** is the column people forget: the one answering customers on WhatsApp, described in [the dedicated guide](' + L.whatsapp + '), is a role like the others, with fewer rights than the person it assists. It reads what it needs to answer, proposes a discount without granting it, never sees the margin and exports nothing; its actions carry its name in the log. The grid is written in the first week, with you, and it serves three times: it tells developers what to build, it is the acceptance scenario, and it is the document reread when someone asks for one more right.',
      ] },
      { heading: 'An application’s access, in five layers', body: [
        'Behind the grid, five layers, and the middle one is the one most often missing.',
      ], visual: 'couches', after: [
        '**Identity**: one person, one account, logged in by phone number with a code or a passkey, on known devices, with a session that expires; there is no password to lend, hence no shared account. **Roles** say what each function sees and does, per screen and per action; a person can hold two, and a role is not bent to suit someone. **Row rules** say *which ones*: their customers, their depot, their branch, with limits, a discount limit, a maximum amount; they are enforced by the database and the server on every request, because a rule that exists only in the interface is bypassed by changing a number in the address.',
        '**Approvals** keep the limit from blocking work: a discount above the limit, an invoice cancellation, an export, a deletion go to whoever can say yes, on their phone, through the notification described in [the notifications guide](' + L.notif + '), and the answer comes back with one key. **The log** writes who, when, from where, the value before and the value after, the reason and the approver, but also refusals and reads of sensitive data; it is append-only, out of reach of business roles, backed up separately as [the hosting guide](' + L.heberger + ') provides, and it is read: a weekly review and alerts on the unusual.',
      ] },
      { heading: '“Who changed this price?”', body: [
        'The log is not for watching people: it is for answering one precise question, in one minute, six months later.',
      ], visual: 'journal', after: [
        '**14:02**, Karim, sales rep, attempts a 10 % discount on order 1042 from his phone: refused, his limit is 5 %. The attempt is written; it is the most useful line of the log, because it says where a limit is badly placed or who is testing it. **14:02**, the approval request goes to the manager with the order, the customer and the reason entered. **14:05**, the manager approves with one key; their name and the time are attached to the decision. **14:05**, the price goes from 4,800 to 4,320 dinars; the old value is kept, nothing is overwritten.',
        '**14:06**, the AI agent reads the new price to answer the customer on WhatsApp: reading sensitive data is an action, and it has a line. Six months later, the question “who changed this price” has an answer in five lines, with two names, two times, a reason and both values. What the log keeps for each line: the person and not an account, the time and device, before and after, the why, what was refused, what was read. And one rule with no exception: lines are added, none is changed and none deleted, manager included.',
      ] },
      { heading: 'Six access requests, and the rule that gets written', body: [
        'Six requests we hear from managers, and the rule each becomes.',
      ], visual: 'demandes', after: [
        '**The sales rep**, “they should only see their customers, not my margins”: rows filtered on their portfolio by the database, purchase price and margin never sent, discount up to their limit and approval beyond; it is the role of the pre-seller in [the field app](' + L.prevente + '). **The storekeeper**, “they manage stock without seeing prices”: their depot’s stock writable, selling price readable, purchase price hidden, stock count validated by a second person. **The external accountant**, “they see everything but touch nothing”: read-only, export allowed and logged, no deletion, access reviewed every year.',
        '**The branch manager**, “they run their branch, not the others”: everything on theirs, nothing on the others, their totals visible to head office in [the dashboard](' + L.dashboard + ') and not the reverse. **The contractor**, “they fix things without keeping access”: named access, limited in time and scope, cut automatically at the date. **The AI agent**, “it answers customers without knowing everything”: its own role, reading what is needed, actions under a limit, never the margin or the export. Every row starts with a sentence from the manager; if a request cannot be written in one sentence, the role is badly cut.',
      ] },
      { heading: 'Six access leaks', body: [
        'Six leaks we find on the apps we take over; none is an attack, all are habits.',
      ], visual: 'failles', after: [
        '**The employee who left**: they left three months ago and their account still works on their phone; leaving is a single action, sessions cut, devices removed, customers reassigned, and a monthly review lists inactive accounts. **The shared account**: three people use the manager’s account and the log says “manager” everywhere; one account per person, login by phone, and a written delegation rather than sharing. **The number changed in the address**: the sales rep replaces 1042 with 1043 and sees someone else’s order; the row rule is checked server-side and in the database on every request, and the refusal is logged.',
        '**The export of the whole base**: the customer list leaves in a file, then to a competitor; export is reserved, limited, logged, with an alert, and the interface shows without handing everything over. **Everyone an administrator**: to move fast, everyone got all rights “for now”; roles are written in week one, rights added on request, and reviewed every quarter. **The editable log**: whoever changed the price can delete the line; the log is append-only, out of reach of business roles, backed up separately. The first three show in the log if someone reads it; the last three are decided in week one.',
      ] },
      { heading: 'Seen elsewhere: OWASP, PostgreSQL, and what transposes', body: [
        'Two sources say the essentials. The OWASP ranking says broken access control is the first risk and was found in one form or another in every application tested; what transposes is its first recommendation, deny by default, and its least followed, log refusals. The PostgreSQL documentation says the database can restrict rows per user and per operation type, and denies everything when no policy exists; what transposes is that a rule written in the database protects every screen, including those added in two years and the AI agent plugged onto it.',
        'What these sources do not say: your roles, your limits, and who approves what; the project’s first week answers that, with one sentence per role and the grid in front of you.',
      ] },
      { heading: 'The rules of access that holds', body: [
        'Six rules, written in the first week. **One person, one account**; no shared account, no exception for the manager. **Denied by default**: a right exists because a rule grants it. **The rule lives in the database and the server**, not in the interface. **Hidden means not sent.** **What exceeds a limit asks for an approval**, not a workaround. **The log is append-only and it is read**: before, after, refusals, sensitive reads, weekly review.',
        'A seventh rule concerns the quote: “user and role management” is not a requirement, it is a line; the requirement reads “validated role grid; one account per person; row rules for portfolio, depot and branch enforced in the database; limits and approvals listed; hidden data not sent; append-only log with values before and after, refusals included; leaving in one action; acceptance where each role attempts what it is not allowed to do”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that prices “an admin screen” has priced a screen, not a control.',
      ] },
      { heading: 'Six companies, and the rule written first', body: [
        'Six companies we often equip, and for each the first rule chosen.',
      ], list: [
        '**The distributor and its portal**, described in [the dedicated guide](' + L.portail + '). Each sales rep sees their portfolio, the purchase price is sent to nobody in the field, the discount has a limit per role.',
        '**The branch network.** Each branch sees its own; head office sees the totals of all; one branch manager does not see the other’s cash.',
        '**The clinic and the practice**, described in [the practice guide](' + L.dentaire + '). The practitioner sees their patients, reception sees appointments without the record, and every opening of a record is logged.',
        '**The private school.** The teacher sees their classes, the office sees payments, the parent sees their child; no pupil list is exported without a trace.',
        '**The company run from France.** The founder does not see their team: the log and approvals on their phone give them control, without calling every evening.',
        '**The SaaS vendor**, described in [the multi-tenant guide](' + L.saas + '). Isolation between customers first, then roles per customer that each customer configures, and the vendor’s support access limited in time and logged.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of complete access control in six weeks, built with the application.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes the roles: one sentence from the manager per role, the grid of who sees and changes what, the limits and who approves; signed. **Week 1 to 2** builds identity and sessions: one account per person, login by phone, known devices, expiry, and leaving in one action. **Weeks 2 to 4** build the row rules, portfolio, depot, branch, limits, in the database and server-side, with automated cross-access tests: each role tries to read and modify what belongs to another.',
        '**Week 4 to 5** builds approvals and the log: the request reaching the approver’s phone, the append-only log with values before and after. **Week 5 to 6** is acceptance and review: each role attempts what it is not allowed to do, in front of you, and the access review screen is delivered with its alerts. These tests join those run at every delivery, per [the delivery guide](' + L.livrer + '); and when data comes from an old system, accounts are created during the migration described in [the data migration guide](' + L.donnees + ').',
      ] },
      { heading: 'What makes access control fail', body: [
        'The access controls we take over almost always failed for one of these reasons.',
      ], list: [
        '**Roles with no row rules.** The sales rep has the right role, and sees everyone’s customers.',
        '**The rule in the interface only.** The button is hidden; the address works.',
        '**Data hidden but sent.** The margin is in the server’s response; you only have to look.',
        '**The manager’s account lent.** The log exists, and no longer says anything.',
        '**Limits with no approval.** Blocked, employees ask for someone else’s password.',
        '**The log nobody reads.** Everything is written there; nobody has looked for a year.',
        '**The forgotten departure.** No procedure; the account lives months after the person.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and teams comparing quotes.',
      ], faq: [
        { q: 'How do we stop a sales rep seeing other reps’ customers and my margins?', a: 'By a row rule enforced in the database: their queries only return the customers in their portfolio, however they ask. And by the fact that purchase price and margin are not sent to their phone; data hidden only on screen is found by looking at what the server answers.' },
        { q: 'How do we know who changed a price or cancelled an invoice?', a: 'By an append-only log that writes, for every change, the person, the time, the device, the value before, the value after, the reason and the approver. That requires one account per person: with a shared account, the log exists and says nothing. Refused attempts are in it too.' },
        { q: 'What happens when an employee leaves the company?', a: 'One action: their sessions are cut on all their devices, their account is disabled, their customers and files are reassigned, and everything they did stays in the log under their name. A monthly review lists inactive accounts, in case the departure was not reported.' },
        { q: 'Does the AI agent have access to all our data?', a: 'No: it is a role like the others, with fewer rights than the person it assists. It reads what it needs to answer, acts under a limit, never sees the margin and exports nothing; its actions and its reads of sensitive data are in the log under its name. The same row rules apply to it.' },
        { q: 'Won’t the limits block the work?', a: 'Not if they have a way out: what exceeds a limit, a discount above the limit, a cancellation, an export, goes as an approval request to the phone of whoever can say yes, and the answer comes back with one key. A limit with no approval pushes employees to borrow someone else’s account.' },
        { q: 'How long to build roles and the log?', a: 'Six weeks, at the same time as the application: one to write the roles and the grid, one for identity and sessions, two for row rules in the database, one for approvals and the log, one of acceptance where each role attempts what it is not allowed to do. Adding them afterwards means reopening every screen.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'Hidden data is not hidden on screen: it is not sent, and that is the only way it is not there.' },
      { after: 4, text: 'The most useful line of the log is a refused attempt: it says where a limit is badly placed, or who is testing it.' },
    ],
    cta: { eyebrow: 'Send us one sentence per role', title: 'Manager in Algeria or founder in France: we build your application’s roles, permissions and log, so that everyone sees what they should and every change has a name', body: 'Symloop builds apps, platforms and AI agents for companies in Algeria and founders settled in France, with access control that belongs to you: one account per person, validated role grid, row rules enforced in the database, hidden data not sent, limits and approvals on the phone, append-only log with values before and after, leaving in one action, acceptance where each role attempts what it is not allowed to do. Code in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.otp, kind: '2027', name: 'Login by SMS or WhatsApp code, passkeys' },
      { href: L.saas, kind: '2027', name: 'Multi-tenant SaaS: isolating customers' },
      { href: L.dashboard, kind: '2027', name: 'The owner’s real-time dashboard' },
      { href: L.livrer, kind: '2027', name: 'Delivering an app without breaking it' },
    ] },
  },
  ar: {
    kind: 'الأدوار · الصلاحيات · سجل التدقيق · 2027', title: 'الأدوار والصلاحيات وسجل التدقيق في تطبيق في الجزائر سنة 2027: من يرى ماذا، من يعدّل ماذا، من غيّر هذا السعر، وكيف نبنيه كي لا تكلّف مغادرة أو خطأ شيئاً',
    dek: '«من غيّر هذا السعر؟» لا أحد يعرف: ثلاثة أشخاص يستعملون الحساب نفسه، والمندوب يرى الهوامش، والموظف الذي غادر في مارس ما زال التطبيق على هاتفه. يصف هذا الدليل كيف تُبنى صلاحيات تطبيق: شخص واحد لكل حساب، أدوار تُكتب من جملة للمسيّر، قواعد لكل سطر ولكل وكالة ولكل مبلغ تطبقها القاعدة نفسها، موافقات تصل هاتف من يستطيع أن يقول نعم، سجل لا يُعدَّل ولا يُمحى، ووصول يُقطع بفعل واحد يوم المغادرة.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الأدوار', 'صلاحيات الوصول', 'سجل التدقيق', 'الأمن', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** صلاحيات التطبيق ليست شاشة دخول: بل **خمس طبقات**. **هوية** لكل شخص، بلا حساب مشترك، تعطي اسماً لكل فعل. و**أدوار**، مسيّر ومندوب وأمين مخزن ومحاسب ومقدّم خدمة ووكيل ذكاء اصطناعي، يُكتب كل منها من جملة للمسيّر. و**قواعد للسطور**: زبائنه، مستودعه، وكالته، سقف تخفيضه؛ **مرفوض افتراضياً ومسموح بقاعدة**، وتطبقها القاعدة والخادم لا الواجهة وحدها. و**موافقات**: ما يتجاوز حداً يذهب إلى هاتف من يستطيع أن يقول نعم. و**سجل** للإضافة فقط يحفظ من ومتى ومن أين والقيمة قبل والقيمة بعد والمرفوضات والقراءات الحساسة. والمعطى «المخفي» ليس مخفياً على الشاشة: لا يُرسل أصلاً. ومغادرة موظف فعلٌ لا نسيان. ستة أسابيع، تُبنى مع التطبيق لا بعده.',
      'هذا الدليل موجّه إلى المسيّر في الجزائر الذي أعار كلمة مروره لثلاثة أشخاص، وإلى المؤسس المقيم في فرنسا الذي يدير فريقاً لا يراه، وإلى من يقارن عروضاً يكون فيها «تسيير المستعملين» سطراً واحداً. لا يعيد كيف يدخل زبون، الموصوف في [دليل OTP](' + L.otp + ')، ولا كيف تُعزل شركتان في SaaS، الموصوف في [دليل تعدد المستأجرين](' + L.saas + ')؛ بل يصف ما يحدث داخل شركة واحدة، بين موظفيها.',
    ],
    sections: [
      { heading: 'ما تقوله الأرقام', body: [
        'التحكم في الوصول هو أول ثغرات التطبيقات، وبفارق. ترتيب 2025 للمخاطر العشرة عند OWASP، المرجع المفتوح لأمن التطبيقات، يُبقي **التحكم المعطوب في الوصول في المرتبة الأولى**: وُجد شكل منه في **100 % من التطبيقات المختبَرة**، بمعدل وقوع متوسط 3,74 % وأكثر من 1,8 مليون حالة مسجَّلة. وقائمة أشكاله تُقرأ كجرد لما نستلمه: وصول يُمنح للجميع بدل أن يُرفض افتراضياً، تجاوز بتعديل العنوان، رؤية حساب الغير بتغيير معرّفه، أفعال تعديل بلا فحص. وما يفرضه ذلك: السؤال ليس «هل نحن معنيون» بل «أين».',
        'والعلاجات مكتوبة وبسيطة الصياغة. الصفحة نفسها عند OWASP تبدأ بـ: **«ما عدا الموارد العلنية، الرفض افتراضياً»**؛ ثم بناء التحكم في الوصول مرة واحدة وإعادة استعماله في كل مكان، وفرض مالك لكل سجل، و**تسجيل إخفاقات التحكم في الوصول** والتنبيه، وإبطال الجلسات عند الخروج. وتصف وثائق PostgreSQL الأداة التي تجعلها قابلة للتطبيق: سياسات أمن على مستوى السطور، تقيّد لكل مستعمل السطور التي يستطيع استعلام قراءتها أو تعديلها؛ وحين تُفعَّل بلا سياسة «تُستعمل سياسة رفض افتراضي»، ويمكن أن تختلف للقراءة والإدراج والتعديل والحذف. وما يفرضه ذلك: قاعدة «زبائنه فقط» تعيش في القاعدة لا في شاشة.',
        'وما ليس مكتوباً في أي مكان: أدواركم. لا معيار يقول هل يرى أمين مخزنكم أسعار البيع ولا من أي مبلغ يطلب التخفيض موافقتكم؛ هذا يُقرَّر معكم، بجملة لكل دور. وما لم نجده: قياس علني للتسريبات الداخلية في الشركات الجزائرية؛ وما نراه في التطبيقات التي نستلمها أن التسريبات الستة الموصوفة أدناه عادات لا هجمات، وتوجد في أغلبها.',
      ] },
      { heading: 'البيانات نفسها، خمسة أدوار', body: [
        'الصلاحيات لا تُفهم على مخطط بل على شبكة: المعطيات الستة نفسها، كما يراها خمسة أدوار.',
      ], visual: 'ecran', after: [
        '**المسيّر** يعدّل كل شيء تقريباً على الشركة كلها، وتصديراته مسجَّلة كغيره. **المندوب** يرى أسعار البيع ورصيد زبائنه لا زبائن غيره؛ يمنح تخفيضاً حتى سقفه؛ وسعر الشراء والهامش ليسا مخفيين على شاشته، بل **لا يُرسلان** إلى هاتفه، وهي الطريقة الوحيدة كي لا يكونا فيه. **أمين المخزن** يعدّل مخزون مستودعه، يرى أسعار البيع، ولا يرى أسعار الشراء ولا الأرصدة. **المحاسب** يرى كل شيء للقراءة ويستطيع التصدير؛ ولا يحذف شيئاً.',
        '**وكيل الذكاء الاصطناعي** هو العمود المنسيّ: الذي يجيب الزبائن على WhatsApp، الموصوف في [الدليل المخصص](' + L.whatsapp + ')، دور كغيره بحقوق أقل من الشخص الذي يساعده. يقرأ ما يلزمه ليجيب، يقترح تخفيضاً دون أن يمنحه، لا يرى الهامش أبداً ولا يصدّر شيئاً؛ وأفعاله تحمل اسمه في السجل. تُكتب الشبكة في الأسبوع الأول معكم، وتخدم ثلاث مرات: تقول للمطورين ما يبنون، وهي سيناريو القبول، وهي الوثيقة التي تُعاد قراءتها حين يطلب أحد حقاً إضافياً.',
      ] },
      { heading: 'صلاحيات التطبيق، في خمس طبقات', body: [
        'خلف الشبكة خمس طبقات، والوسطى هي الأكثر غياباً.',
      ], visual: 'couches', after: [
        '**الهوية**: شخص واحد وحساب واحد، يدخل برقم هاتفه برمز أو مفتاح دخول، على أجهزة معروفة، بجلسة تنتهي؛ لا كلمة مرور تُعار، فلا حساب مشترك. **الأدوار** تقول ما تراه كل وظيفة وتفعله، لكل شاشة ولكل فعل؛ يمكن لشخص أن يحمل دورين، ولا يُلوى دور لإرضاء أحد. **قواعد السطور** تقول *أيّها*: زبائنه، مستودعه، وكالته، بحدود، سقف تخفيض ومبلغ أقصى؛ تطبقها القاعدة والخادم مع كل طلب، لأن قاعدة لا توجد إلا في الواجهة تُتجاوز بتغيير رقم في العنوان.',
        '**الموافقات** تمنع الحد من تعطيل العمل: التخفيض فوق السقف، إلغاء فاتورة، التصدير، الحذف، تذهب إلى من يستطيع أن يقول نعم على هاتفه، بالإشعار الموصوف في [دليل الإشعارات](' + L.notif + ')، ويعود الجواب بضغطة. **السجل** يكتب من ومتى ومن أين والقيمة قبل والقيمة بعد والسبب والموافِق، وكذلك المرفوضات وقراءات البيانات الحساسة؛ وهو للإضافة فقط، بعيد عن أدوار العمل، منسوخ على حدة كما ينص [دليل الاستضافة](' + L.heberger + ')، ويُقرأ: مراجعة أسبوعية وتنبيهات على غير المعتاد.',
      ] },
      { heading: '«من غيّر هذا السعر؟»', body: [
        'السجل ليس للمراقبة: بل للجواب عن سؤال دقيق، في دقيقة، بعد ستة أشهر.',
      ], visual: 'journal', after: [
        '**14:02**، كريم، مندوب، يحاول تخفيضاً بـ 10 % على الطلبية 1042 من هاتفه: مرفوض، سقفه 5 %. والمحاولة تُكتب؛ وهي أنفع سطر في السجل، لأنها تقول أين وُضع حد خطأً أو من يختبره. **14:02**، يذهب طلب الموافقة إلى المسيّر مع الطلبية والزبون والسبب المُدخل. **14:05**، يوافق المسيّر بضغطة؛ واسمه والساعة مرفقان بالقرار. **14:05**، ينتقل السعر من 4 800 إلى 4 320 ديناراً؛ والقيمة القديمة تُحفظ ولا شيء يُمحى.',
        '**14:06**، يقرأ وكيل الذكاء الاصطناعي السعر الجديد ليجيب الزبون على WhatsApp: قراءة معطى حساس فعل، وله سطر. وبعد ستة أشهر، لسؤال «من غيّر هذا السعر» جواب في خمسة سطور، باسمين وساعتين وسبب والقيمتين. وما يحفظه السجل لكل سطر: الشخص لا الحساب، الساعة والجهاز، قبل وبعد، السبب، ما رُفض، وما قُرئ. وقاعدة بلا استثناء: تُضاف سطور، ولا يُعدَّل سطر ولا يُحذف، حتى من المسيّر.',
      ] },
      { heading: 'ستة طلبات صلاحية، والقاعدة التي تُكتب', body: [
        'ستة طلبات نسمعها من مسيّرين، والقاعدة التي يصيرها كل منها.',
      ], visual: 'demandes', after: [
        '**المندوب**، «ألا يرى إلا زبائنه ولا هوامشي»: سطور مرشَّحة على محفظته من القاعدة، سعر الشراء والهامش لا يُرسلان أبداً، تخفيض حتى سقفه وموافقة فوقه؛ وهو دور مندوب [تطبيق الميدان](' + L.prevente + '). **أمين المخزن**، «أن يسيّر المخزون دون رؤية الأسعار»: مخزون مستودعه للكتابة، سعر البيع للقراءة، سعر الشراء مخفي، الجرد يتحقق منه شخص ثانٍ. **المحاسب الخارجي**، «أن يرى كل شيء ولا يمسّ شيئاً»: قراءة فقط، تصدير مسموح ومسجَّل، لا حذف، ووصول يُراجَع كل سنة.',
        '**رئيس الوكالة**، «أن يدير وكالته لا الأخريات»: كل شيء على وكالته، لا شيء على الأخريات، ومجاميعه مرئية للإدارة في [لوحة القيادة](' + L.dashboard + ') لا العكس. **مقدّم الخدمة**، «أن يصلح دون أن يحتفظ بوصول»: وصول اسمي محدود في الزمن والنطاق، يُقطع آلياً في التاريخ. **وكيل الذكاء الاصطناعي**، «أن يجيب الزبائن دون أن يعرف كل شيء»: دور خاص، قراءة الضروري، أفعال تحت سقف، لا الهامش ولا التصدير أبداً. وكل سطر يبدأ بجملة من المسيّر؛ وإن لم يُكتب طلب في جملة فالدور مقطَّع خطأً.',
      ] },
      { heading: 'ستة تسريبات صلاحية', body: [
        'ستة تسريبات نجدها في التطبيقات التي نستلمها؛ لا واحد منها هجوم، وكلها عادات.',
      ], visual: 'failles', after: [
        '**الموظف المغادر**: غادر منذ ثلاثة أشهر وحسابه ما زال يعمل على هاتفه؛ المغادرة فعل واحد، جلسات تُقطع وأجهزة تُزال وزبائن يُعاد إسنادهم، ومراجعة شهرية تسرد الحسابات الخاملة. **الحساب المشترك**: ثلاثة أشخاص يستعملون حساب المسيّر والسجل يقول «المسيّر» في كل مكان؛ حساب لكل شخص، دخول بالهاتف، وتفويض مكتوب بدل المشاركة. **الرقم المغيَّر في العنوان**: يستبدل المندوب 1042 بـ 1043 فيرى طلبية غيره؛ قاعدة السطر تُتحقَّق في الخادم وفي القاعدة مع كل طلب، والرفض يُسجَّل.',
        '**تصدير القاعدة كلها**: قائمة الزبائن تخرج في ملف ثم إلى منافس؛ التصدير محجوز ومحدود ومسجَّل بتنبيه، والواجهة تعرض ولا تعطي كل شيء. **الكل مدير**: للسرعة نال كل واحد كل الحقوق «مؤقتاً»؛ الأدوار تُكتب في الأسبوع الأول، والحقوق تُضاف بطلب، وتُراجَع كل فصل. **السجل القابل للتعديل**: من غيّر السعر يستطيع أن يمحو السطر؛ السجل للإضافة فقط، بعيد عن أدوار العمل، منسوخ على حدة. الثلاثة الأولى تظهر في السجل إن قرأه أحد؛ والثلاثة الأخيرة تُقرَّر في الأسبوع الأول.',
      ] },
      { heading: 'رأيناه في مكان آخر: OWASP وPostgreSQL، وما ينتقل', body: [
        'مصدران يقولان الجوهر. يقول ترتيب OWASP إن التحكم المعطوب في الوصول هو الخطر الأول وإنه وُجد بشكل أو بآخر في كل التطبيقات المختبَرة؛ وما ينتقل هو توصيته الأولى، الرفض افتراضياً، والأقل اتباعاً، تسجيل المرفوضات. وتقول وثائق PostgreSQL إن القاعدة تستطيع تقييد السطور لكل مستعمل ولكل نوع عملية، وترفض كل شيء حين لا توجد سياسة؛ وما ينتقل هو أن قاعدة مكتوبة في قاعدة البيانات تحمي كل الشاشات، ومنها ما سيُضاف بعد سنتين ووكيل الذكاء الاصطناعي الذي سيُوصل بها.',
        'وما لا تقوله هذه المصادر: أدواركم وسقوفكم ومن يوافق على ماذا؛ والأسبوع الأول من المشروع يجيب، بجملة لكل دور والشبكة أمام أعينكم.',
      ] },
      { heading: 'قواعد وصول يصمد', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **شخص واحد وحساب واحد**؛ لا حساب مشترك، ولا استثناء للمسيّر. **مرفوض افتراضياً**: الحق موجود لأن قاعدة تمنحه. **القاعدة تعيش في قاعدة البيانات والخادم** لا في الواجهة. **مخفي يعني غير مُرسَل.** **ما يتجاوز حداً يطلب موافقة** لا تحايلاً. **السجل للإضافة فقط ويُقرأ**: قبل، بعد، مرفوضات، قراءات حساسة، مراجعة أسبوعية.',
        'قاعدة سابعة تخص عرض السعر: «تسيير المستعملين والأدوار» ليس متطلباً بل سطر؛ المتطلب يُكتب «شبكة أدوار متحقَّق منها؛ حساب لكل شخص؛ قواعد سطور للمحفظة والمستودع والوكالة مطبَّقة في القاعدة؛ سقوف وموافقات مسرودة؛ بيانات مخفية غير مُرسَلة؛ سجل للإضافة فقط بالقيم قبل وبعد والمرفوضات؛ مغادرة بفعل واحد؛ قبول يحاول فيه كل دور ما لا يحق له»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يسعّر «شاشة إدارة» سعّر شاشة لا تحكّماً.',
      ] },
      { heading: 'ست شركات، والقاعدة التي نكتبها أولاً', body: [
        'ست شركات نجهّزها كثيراً، ولكل منها أول قاعدة تُختار.',
      ], list: [
        '**الموزّع وبوابته**، الموصوفان في [الدليل المخصص](' + L.portail + '). كل مندوب يرى محفظته، سعر الشراء لا يُرسل لأحد في الميدان، وللتخفيض سقف لكل دور.',
        '**شبكة الوكالات.** كل وكالة ترى نفسها؛ الإدارة ترى مجاميع الجميع؛ ورئيس وكالة لا يرى صندوق الأخرى.',
        '**المصحة والعيادة**، الموصوفتان في [دليل العيادة](' + L.dentaire + '). الممارس يرى مرضاه، الاستقبال يرى المواعيد بلا الملف، وكل فتح لملف يُسجَّل.',
        '**المدرسة الخاصة.** الأستاذ يرى أقسامه، الإدارة ترى المدفوعات، الولي يرى ولده؛ ولا قائمة تلاميذ تُصدَّر بلا أثر.',
        '**الشركة المُدارة من فرنسا.** المؤسس لا يرى فريقه: السجل والموافقات على هاتفه هي ما يعطيه التحكم، دون اتصال كل مساء.',
        '**ناشر SaaS**، الموصوف في [دليل تعدد المستأجرين](' + L.saas + '). العزل بين الزبائن أولاً، ثم أدوار لكل زبون يضبطها بنفسه، ووصول دعم الناشر محدود في الزمن ومسجَّل.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم تحكم كامل في الوصول في ستة أسابيع، يُبنى مع التطبيق.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب الأدوار: جملة من المسيّر لكل دور، شبكة من يرى ويعدّل ماذا، السقوف ومن يوافق؛ موقَّعة. **الأسبوع 1 إلى 2** يبني الهوية والجلسات: حساب لكل شخص، دخول بالهاتف، أجهزة معروفة، انتهاء، ومغادرة بفعل واحد. **الأسبوعان 2 إلى 4** يبنيان قواعد السطور، المحفظة والمستودع والوكالة والسقوف، في القاعدة وفي الخادم، باختبارات وصول متقاطعة آلية: كل دور يحاول قراءة وتعديل ما يخص غيره.',
        '**الأسبوع 4 إلى 5** يبني الموافقات والسجل: الطلب الذي يصل هاتف الموافِق، والسجل للإضافة فقط بالقيم قبل وبعد. **الأسبوع 5 إلى 6** هو القبول والمراجعة: كل دور يحاول ما لا يحق له، أمامكم، وتُسلَّم شاشة مراجعة الوصول بتنبيهاتها. وتنضم هذه الاختبارات إلى ما يُشغَّل مع كل تسليم، وفق [دليل التسليم](' + L.livrer + ')؛ وحين تأتي البيانات من نظام قديم تُنشأ الحسابات أثناء الاسترجاع الموصوف في [دليل استرجاع البيانات](' + L.donnees + ').',
      ] },
      { heading: 'ما يُفشل التحكم في الوصول', body: [
        'أنظمة التحكم في الوصول التي نستلمها فشلت دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**أدوار بلا قواعد سطور.** للمندوب الدور الصحيح، ويرى زبائن الجميع.',
        '**القاعدة في الواجهة فقط.** الزر مخفي؛ والعنوان يعمل.',
        '**المعطى مخفي لكنه مُرسَل.** الهامش في جواب الخادم؛ يكفي أن تنظر.',
        '**حساب المسيّر معار.** السجل موجود ولم يعد يقول شيئاً.',
        '**حدود بلا موافقة.** الموظفون المعطَّلون يطلبون كلمة مرور غيرهم.',
        '**السجل الذي لا يقرؤه أحد.** كل شيء مكتوب فيه؛ ولم ينظر أحد منذ سنة.',
        '**المغادرة المنسية.** لا إجراء؛ والحساب يعيش شهوراً بعد صاحبه.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين وفرق تقارن عروض الأسعار.',
      ], faq: [
        { q: 'كيف أمنع مندوباً من رؤية زبائن غيره وهوامشي؟', a: 'بقاعدة سطور مطبَّقة في قاعدة البيانات: استعلاماته لا تعيد إلا زبائن محفظته، أياً كانت طريقة طلبه. وبأن سعر الشراء والهامش لا يُرسلان إلى هاتفه؛ فمعطى مخفي على الشاشة فقط يُعثر عليه بالنظر إلى ما يجيب به الخادم.' },
        { q: 'كيف أعرف من عدّل سعراً أو ألغى فاتورة؟', a: 'بسجل للإضافة فقط يكتب لكل تعديل الشخص والساعة والجهاز والقيمة قبل والقيمة بعد والسبب والموافِق. وهذا يفترض حساباً لكل شخص: مع حساب مشترك، السجل موجود ولا يقول شيئاً. والمحاولات المرفوضة فيه أيضاً.' },
        { q: 'ماذا يحدث حين يغادر موظف الشركة؟', a: 'فعل واحد: تُقطع جلساته على كل أجهزته، يُعطَّل حسابه، يُعاد إسناد زبائنه وملفاته، ويبقى كل ما فعله في السجل باسمه. ومراجعة شهرية تسرد الحسابات الخاملة، لحالة مغادرة لم يُبلَّغ عنها.' },
        { q: 'هل لوكيل الذكاء الاصطناعي وصول إلى كل بياناتنا؟', a: 'لا: هو دور كغيره بحقوق أقل من الشخص الذي يساعده. يقرأ ما يلزمه ليجيب، يتصرف تحت سقف، لا يرى الهامش أبداً ولا يصدّر شيئاً؛ وأفعاله وقراءاته للبيانات الحساسة في السجل باسمه. وقواعد السطور نفسها تنطبق عليه.' },
        { q: 'ألن تعطّل الحدود العمل؟', a: 'لا إن كان لها مخرج: ما يتجاوز حداً، تخفيض فوق السقف أو إلغاء أو تصدير، يذهب طلب موافقة إلى هاتف من يستطيع أن يقول نعم، ويعود الجواب بضغطة. وحدٌّ بلا موافقة يدفع الموظفين إلى استعارة حساب غيرهم.' },
        { q: 'كم من الوقت لبناء الأدوار والسجل؟', a: 'ستة أسابيع، مع بناء التطبيق: واحد لكتابة الأدوار والشبكة، واحد للهوية والجلسات، اثنان لقواعد السطور في القاعدة، واحد للموافقات والسجل، واحد للقبول يحاول فيه كل دور ما لا يحق له. وإضافتها لاحقاً تفرض فتح كل شاشة من جديد.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'المعطى المخفي ليس مخفياً على الشاشة: لا يُرسل أصلاً، وهي الطريقة الوحيدة كي لا يكون هناك.' },
      { after: 4, text: 'أنفع سطر في السجل محاولة مرفوضة: تقول أين وُضع حد خطأً، أو من يختبره.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا جملة لكل دور', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نبني أدوار تطبيقكم وصلاحياته وسجله، ليرى كل واحد ما يجب أن يراه ويكون لكل تعديل اسم', body: 'تبني Symloop تطبيقات ومنصات ووكلاء ذكاء اصطناعي للشركات في الجزائر والمؤسسين المقيمين في فرنسا، بتحكم في الوصول يخصكم: حساب لكل شخص، شبكة أدوار متحقَّق منها، قواعد سطور مطبَّقة في القاعدة، بيانات مخفية غير مُرسَلة، سقوف وموافقات على الهاتف، سجل للإضافة فقط بالقيم قبل وبعد، مغادرة بفعل واحد، وقبول يحاول فيه كل دور ما لا يحق له. الكود في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.otp, kind: '2027', name: 'الدخول برمز SMS أو WhatsApp ومفاتيح الدخول' },
      { href: L.saas, kind: '2027', name: 'SaaS متعدد المستأجرين: عزل الزبائن' },
      { href: L.dashboard, kind: '2027', name: 'لوحة قيادة المسيّر في الزمن الحقيقي' },
      { href: L.livrer, kind: '2027', name: 'تسليم تطبيق دون كسره' },
    ] },
  },
};

const KEYWORDS = "rôles et permissions application algérie 2027, droits d'accès utilisateurs logiciel entreprise, journal d'audit application, qui a modifié ce prix, contrôle d'accès par agence, sécurité au niveau des lignes postgresql, owasp broken access control 2025, approbation remise plafond, désactiver accès employé parti, roles permissions audit log app algeria 2027, الأدوار والصلاحيات في تطبيق الجزائر, سجل التدقيق من غيّر السعر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
