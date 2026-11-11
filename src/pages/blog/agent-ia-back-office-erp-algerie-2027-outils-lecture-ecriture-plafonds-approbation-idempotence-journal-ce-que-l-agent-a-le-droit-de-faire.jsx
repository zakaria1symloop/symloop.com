import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/agent-ia-back-office-erp-algerie-2027-outils-lecture-ecriture-plafonds-approbation-idempotence-journal-ce-que-l-agent-a-le-droit-de-faire.mjs';

const SLUG = 'agent-ia-back-office-erp-algerie-2027-outils-lecture-ecriture-plafonds-approbation-idempotence-journal-ce-que-l-agent-a-le-droit-de-faire';
const FIGURES = ['actions', 'couches', 'toolcard', 'demandes', 'pieges', 'calendrier'];
const DATE = '2026-11-09';

const L = {
  commencer: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  evaluer: '/blog/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  ia: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  cdc: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  notif: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  prive: '/blog/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  offline: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  service: '/services/ai/',
};

const CONTENT = {
  fr: {
    kind: 'Agent IA · Back-office · ERP · Outils · 2027', title: "Un agent IA dans votre back-office et votre ERP en Algérie en 2027 : les outils qu'il a le droit d'appeler, ce qu'il lit, ce qu'il écrit sous plafond, ce qui demande une approbation, et comment chaque action laisse une trace",
    dek: "« L'IA peut-elle créer un avoir, relancer mes clients, passer une commande fournisseur ? » Oui, et c'est précisément là qu'un agent cesse d'être une démonstration et devient un risque, si rien ne se tient entre le modèle et votre comptabilité. Ce guide décrit comment un agent agit dans le back-office sans rien casser : des outils définis un par un, la lecture avant l'écriture, des plafonds, une approbation sur le téléphone de celui qui peut dire oui, une clé qui empêche de faire deux fois, un aperçu avant d'écrire, et une ligne de journal pour chaque appel, refus compris.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Agent IA', 'Back-office', 'ERP', 'Outils', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un agent IA n'a jamais accès à votre base : il a accès à des **outils**, écrits un par un, chacun faisant une chose nommée avec des paramètres typés. Le modèle **propose** un appel ; c'est votre serveur qui l'**exécute**, après être passé par la même **porte** à chaque fois : le rôle de celui qui parle à l'agent autorise-t-il cet outil, les paramètres existent-ils dans vos données, le montant est-il sous le **plafond**, cet appel a-t-il déjà été exécuté. Les **lectures** passent seules ; les **écritures** passent sous plafond avec un **aperçu** ; au-dessus du plafond, elles deviennent une **demande d'approbation** sur le téléphone de celui qui peut dire oui ; ce que le rôle n'a pas n'existe pas pour l'agent. Chaque appel, exécuté ou refusé, a une **ligne de journal**. L'agent n'a jamais plus de droits que la personne qu'il assiste. Huit semaines, dont deux où il ne peut rien écrire.",
      "Ce guide s'adresse au gérant qui veut que l'IA fasse enfin quelque chose dans son logiciel de gestion, au fondateur installé en France qui veut piloter son back-office par messages, et à la direction informatique qui doit dire oui ou non au branchement d'un agent sur la comptabilité. Il ne redit pas par où commencer ni quels usages paient, décrits dans [le guide sur l'agent en entreprise](" + L.commencer + "), ni comment l'agent vit sur WhatsApp, décrit dans [le guide dédié](" + L.whatsapp + ") ; il décrit ce qui se construit entre le modèle et votre ERP, et il prolonge [notre page sur les fonctions IA](" + L.service + ").",
    ],
    sections: [
      { heading: 'Ce que les chiffres disent', body: [
        "Le modèle propose, votre code exécute : c'est écrit chez les éditeurs eux-mêmes. La documentation d'Anthropic décrit l'usage d'outils ainsi : le modèle « détermine quand appeler un outil d'après la demande de l'utilisateur et la description de l'outil », puis « renvoie un appel structuré que votre application exécute » ; votre code fait l'opération et renvoie le résultat. Celle d'OpenAI dit la même chose : « quand le modèle appelle une fonction, vous devez l'exécuter et renvoyer le résultat ». Ce que cela impose : tout ce qui protège votre ERP se trouve dans votre code, entre la proposition du modèle et l'exécution, et aucun réglage du modèle ne remplace cette porte.",
        "La forme de l'appel peut être garantie, pas son sens. Les deux éditeurs proposent un mode strict qui, selon OpenAI, « garantit que les appels de fonction respectent fidèlement le schéma de la fonction, au lieu d'être au mieux », et recommandent de l'activer toujours. Mais la documentation d'Anthropic prévient aussi que, lorsqu'un paramètre obligatoire manque dans la demande, le modèle peut « inférer une valeur raisonnable » plutôt que de la demander, et que ce comportement « n'est pas garanti ». Ce que cela impose : un montant d'avoir proposé par le modèle est au bon format, mais il peut être inventé ; la porte le vérifie contre la facture, et l'aperçu le montre avant d'écrire.",
        "La liste d'outils a une taille raisonnable, écrite. OpenAI recommande « des noms de fonctions et des descriptions de paramètres clairs et détaillés », l'usage de valeurs énumérées « pour empêcher les états invalides », et de garder la liste « petite pour une meilleure exactitude », avec **moins de vingt fonctions** disponibles au début d'un tour ; sa règle pratique est le « test du stagiaire » : une personne qui ne verrait que la fiche de l'outil saurait-elle s'en servir correctement ? Ce que cela impose : pas d'outil « exécuter une requête » ni « modifier un champ », mais un outil par action métier, créer un avoir, envoyer une relance, et une liste par rôle. Ce que nous n'avons pas trouvé : une mesure publique des incidents causés par des agents dans des ERP ; ce que nous voyons, ce sont les six pièges décrits plus bas, et nous les disons comme une observation.",
      ] },
      { heading: "Une demande devient quatre appels d'outils", body: [
        "L'agent ne se comprend pas sur un schéma mais sur une demande réelle du gérant, et sur ce que chacun de ses appels devient.",
      ], visual: 'actions', after: [
        "**La demande** arrive à 9 h 12 avec le nom et le rôle du gérant : relancer les clients en retard de plus de trente jours, préparer les avoirs des retours de la semaine. L'agent la découpe en appels. **Le premier** lit les clients en retard : lecture autorisée pour ce rôle, vingt-trois clients, et la lecture elle-même est écrite au journal. **Le deuxième** envoie les relances : une écriture, mais sous plafond, vingt-trois envois pour une limite de cinquante par jour, avec un gabarit approuvé et aucun texte libre, et une clé d'idempotence pour que l'appel renvoyé après une coupure n'envoie pas deux fois ; exécuté.",
        "**Le troisième** crée un avoir de 12 400 dinars : la facture existe et appartient au bon client, le montant se retrouve dans la facture, mais il dépasse le plafond de 10 000 dinars écrit pour ce rôle ; l'appel devient un aperçu envoyé au gérant sur son téléphone par la notification décrite dans [le guide sur les notifications](" + L.notif + "), et l'avoir n'existe pas tant qu'il n'a pas approuvé d'une touche. **Le quatrième** veut supprimer une facture : cet outil n'est pas dans la liste du rôle « agent », il n'existe pas pour lui, aucun paramètre n'est même lu, et la tentative est écrite. Quatre appels, quatre lignes de journal, une seule décision humaine, et aucune action que le gérant n'aurait pas pu faire lui-même.",
      ] },
      { heading: 'Un agent dans le back-office, en cinq couches', body: [
        "Derrière ces quatre appels, cinq couches, et celle du milieu est la seule qui dit non.",
      ], visual: 'couches', after: [
        "**Le canal** : le gérant parle à l'agent depuis WhatsApp, le back-office ou un bouton dans l'écran ; la demande arrive avec son nom et son rôle, et l'agent n'a jamais plus de droits que lui, selon les règles décrites dans [le guide sur les rôles](" + L.roles + "). **L'agent** : le modèle lit la demande, choisit les outils, propose les paramètres et explique ce qu'il va faire ; il propose, il n'exécute pas, et ses instructions et ses limites sont versionnées dans votre dépôt. **Les outils et la porte** : une fiche par outil, lecture ou écriture, schéma strict ; la porte vérifie le rôle, les paramètres contre vos données, le plafond, l'idempotence, puis journalise ; c'est la couche qui vous appartient et qui ne dépend d'aucun éditeur.",
        "**L'ERP et les données** : votre logiciel de gestion ou votre comptabilité, appelés par leur API ou leur connecteur, jamais par la base en direct, avec les mêmes règles métier que pour un humain, stock, crédit, numérotation ; la manière de les brancher est celle du [guide sur l'intégration](" + L.integrer + "). **La supervision** : le journal des appels, les approbations en attente, les refus, le coût par tâche, et le jeu d'évaluation rejoué à chaque changement, selon [le guide sur la mesure](" + L.evaluer + ") ; un écran lu chaque semaine qui dit ce que l'agent a fait, ce qu'on lui a refusé, et ce qu'il a coûté.",
      ] },
      { heading: "Un outil, vu par l'agent et vérifié par le serveur", body: [
        "La fiche d'un outil est tout ce que le modèle sait ; la porte est tout ce que le serveur fait, quoi que le modèle envoie.",
      ], visual: 'toolcard', after: [
        "**Ce que le modèle lit** : un nom, créer un avoir ; une description qui dit quand s'en servir et quand ne pas le faire, « seulement pour un retour ou une erreur de prix constatés, ne jamais deviner le montant » ; et trois paramètres typés, le numéro de facture, le montant en dinars, le motif parmi trois valeurs et rien d'autre. Le schéma est strict : l'appel aura toujours cette forme. **Ce que le serveur vérifie, quoi que le modèle envoie** : le rôle « agent » a-t-il cet outil ; la facture existe-t-elle, pour ce client ; le montant est-il bien une ligne de la facture et est-il sous le plafond ; cet appel a-t-il déjà été exécuté, par sa clé ; l'aperçu a-t-il été montré ; la ligne de journal est-elle écrite.",
        "**La troisième vérification** est celle qui répond à l'avertissement des éditeurs : un modèle peut inventer un montant plausible quand il manque ; la porte refuse tout montant qui n'est pas dans la facture, et l'agent demande au lieu d'exécuter. **La cinquième** est celle qui rassure le gérant : rien ne s'écrit dans la comptabilité avant qu'un aperçu ait été montré, et au-dessus du plafond, approuvé. Le modèle propose ; le serveur dispose. Un paramètre deviné est arrêté ici, pas chez le client.",
      ] },
      { heading: "Six demandes d'un gérant, et les outils qu'elles deviennent", body: [
        "Six demandes que nous entendons, et pour chacune les outils, les plafonds et l'approbation qu'elle devient.",
      ], visual: 'demandes', after: [
        "**Relancer les retards** : lecture des soldes, puis envoi par gabarit approuvé, sous plafond quotidien, jamais de texte libre, et la liste des envoyés en retour. **Créer un avoir** : écriture sous plafond, montant pris dans la facture et jamais saisi, aperçu et approbation au-dessus. **Passer une commande fournisseur** : lecture du stock et des ventes, proposition, et création en brouillon seulement, validée par un humain, parce qu'une commande engage de l'argent qui sort.",
        "**Modifier un prix** : écriture sous plafond par rôle, approbation au-delà, ancienne valeur gardée, effet daté ; c'est la règle du [portail B2B](" + L.portail + "). **Répondre à un client** : lecture de la commande et de la tournée, réponse sourcée, et jamais une promesse qui n'est pas dans les données. **Sortir un état** : lecture des agrégats déjà définis pour [le tableau de bord](" + L.dashboard + "), aucun calcul inventé, pour que le chiffre de l'agent et celui de l'écran soient le même. Aucune de ces lignes ne contient un outil générique : chaque outil fait une chose nommée, et c'est ce qui rend l'agent prévisible.",
      ] },
      { heading: "Six pièges d'un agent dans l'ERP", body: [
        "Six pièges que nous voyons sur les agents que nous reprenons, et ce que l'architecture fait contre chacun.",
      ], visual: 'pieges', after: [
        "**L'outil trop large** : « exécuter une requête », « modifier n'importe quel champ » ; l'agent fait ce qu'il comprend, et personne ne peut dire d'avance quoi ; un outil par action métier, paramètres typés, valeurs énumérées, moins de vingt outils par agent. **Le paramètre deviné** : le gérant n'a pas dit le montant, le modèle en invente un plausible ; paramètre vérifié contre la donnée source, et s'il n'y est pas, l'agent demande. **La double exécution** : la connexion coupe, l'appel est renvoyé, deux avoirs ; clé d'idempotence par appel, la seconde exécution renvoie le résultat de la première, sur le principe décrit dans [le guide sur le mode hors ligne](" + L.offline + ").",
        "**L'écriture sans aperçu** : l'agent écrit dans la comptabilité avant que quiconque ait vu quoi ; aperçu systématique, approbation au-dessus du plafond. **L'agent plus puissant que l'humain** : un compte administrateur « pour simplifier », et le commercial lui fait faire ce qu'il ne peut pas ; l'agent hérite du rôle de celui qui lui parle, jamais plus, avec un rôle « agent » propre et plus étroit. **L'action sans trace** : personne ne sait que c'est l'agent qui a changé ce prix ; ligne de journal par appel, qui a demandé, quel outil, quels paramètres, avant, après, refus compris. Les deux premiers viennent de la fiche d'outil, les quatre autres de la porte, et tous se décident la première semaine.",
      ] },
      { heading: "Vu ailleurs : les documentations d'outils des éditeurs, et ce qui se transpose", body: [
        "Deux sources disent l'essentiel. Les documentations d'Anthropic et d'OpenAI disent que le modèle propose un appel structuré et que votre code l'exécute, que le mode strict garantit la forme de l'appel, et qu'un paramètre manquant peut être inféré plutôt que demandé ; ce qui se transpose, c'est que la sécurité d'un agent est une question de code côté serveur, pas de modèle, et que la forme garantie n'exempte pas de vérifier le sens. OpenAI dit encore de garder moins de vingt outils, avec des noms clairs et des valeurs énumérées ; ce qui se transpose, c'est une liste courte d'outils métier par rôle, pas un outil générique.",
        "Ce que ces sources ne disent pas : quelles actions votre gérant veut déléguer, quels plafonds il accepte, et qui approuve au-dessus ; la première semaine du projet y répond, avec les dix demandes qu'il fait vraiment.",
      ] },
      { heading: "Les règles d'un agent qu'on peut brancher sur l'ERP", body: [
        "Six règles, écrites la première semaine. **L'agent ne voit que des outils**, jamais la base. **Un outil fait une chose nommée**, avec des paramètres typés et des valeurs énumérées ; moins de vingt par rôle. **La lecture avant l'écriture**, et chaque écriture a un plafond et un aperçu. **Au-dessus du plafond, une approbation**, sur le téléphone de celui qui peut dire oui. **Une clé par appel** : rien ne s'exécute deux fois. **Une ligne de journal par appel**, refus compris, et l'agent n'a jamais plus de droits que la personne qu'il assiste.",
        "Une septième règle porte sur le devis : « agent IA connecté à l'ERP » n'est pas une exigence, c'est une phrase ; l'exigence s'écrit « liste des outils par rôle, lecture ou écriture, schéma strict et description par outil ; porte côté serveur vérifiant rôle, paramètres contre les données, plafonds, idempotence ; aperçu avant écriture ; approbation sur téléphone au-dessus du plafond ; journal par appel avec avant et après ; jeu d'évaluation de soixante demandes réelles incluant paramètres manquants, hors droits et doublons ; deux semaines de lecture seule avant la première écriture », et elle se vérifie comme [le guide sur le cahier des charges](" + L.cdc + ") le recommande. Un devis qui chiffre « l'accès de l'IA à la base » a chiffré le piège numéro un.",
      ] },
      { heading: "Six entreprises, et le premier outil d'écriture qu'on ouvre", body: [
        "Six entreprises que nous équipons souvent, et pour chacune le premier outil d'écriture ouvert après les deux semaines de lecture.",
      ], list: [
        "**Le distributeur et son portail**, décrit dans [le guide dédié](" + L.portail + "). La relance des retards par gabarit, sous plafond quotidien ; les avoirs restent en approbation plusieurs semaines.",
        "**Le cabinet comptable.** Le classement des pièces lues dans le bon dossier client ; aucune écriture comptable par l'agent avant le deuxième mois.",
        "**La clinique.** La prise de rendez-vous dans les créneaux libres ; jamais le dossier médical en écriture.",
        "**L'agence immobilière.** La génération des quittances du mois en brouillon, validées en lot par le gérant.",
        "**L'école privée.** Les rappels d'échéance aux parents par gabarit ; les remises sur frais de scolarité en approbation.",
        "**L'entreprise pilotée depuis la France.** L'état du jour par agence en lecture ; l'approbation des avoirs et des remises sur le téléphone du fondateur, où qu'il soit.",
      ] },
      { heading: 'Le calendrier 2027', body: [
        "Le calendrier est celui d'un agent branché sur le back-office en huit semaines, dont deux où il ne peut rien écrire.",
      ], visual: 'calendrier', after: [
        "**La semaine 0 à 1** écrit les demandes et les outils : les dix demandes que le gérant fait vraiment, la liste des outils avec lecture ou écriture, plafond et approbateur ; signée. **La semaine 1 à 2** écrit le jeu d'évaluation : soixante demandes réelles avec les appels attendus, et les pièges, paramètre manquant, demande hors droits, doublon. **Les semaines 2 à 4** construisent les outils de lecture et la porte : fiches, schémas stricts, vérification du rôle et des paramètres, journal ; l'agent répond et explique ce qu'il ferait, et n'écrit rien.",
        "**Les semaines 4 à 6** ouvrent les outils d'écriture, un à la fois : plafonds, idempotence, aperçu, approbation sur le téléphone. **Les semaines 6 à 8** sont le pilote avec le gérant et deux personnes : chaque refus et chaque approbation lus chaque jour, le coût par tâche mesuré, et chaque erreur ajoutée au jeu. Chaque lot est démontré comme [le guide sur la livraison](" + L.livrer + ") le décrit ; et quand les demandes contiennent des documents sensibles, le modèle tourne là où [le guide sur le déploiement privé](" + L.prive + ") le prévoit.",
      ] },
      { heading: "Ce qui fait échouer un agent dans l'ERP", body: [
        "Les agents que nous reprenons ont presque toujours échoué pour l'une de ces raisons.",
      ], list: [
        "**L'accès direct à la base.** Le modèle écrit des requêtes ; personne ne sait lesquelles à l'avance.",
        "**L'écriture dès le premier jour.** Pas de période de lecture seule ; la confiance n'a jamais été construite.",
        "**Pas de plafond.** Une remise de 40 % accordée parce que le client a insisté.",
        "**Pas de clé d'idempotence.** Une coupure réseau, et trois factures identiques.",
        "**L'agent administrateur.** Il fait pour le commercial ce que le commercial n'a pas le droit de faire.",
        "**Des outils génériques.** « Modifier un enregistrement » : l'agent a modifié le mauvais.",
        "**Pas de journal des refus.** On ne sait pas ce que l'agent a essayé, ni qui le lui a demandé.",
      ] },
      { heading: 'Questions fréquentes', body: [
        "Les questions que nous recevons de gérants, de fondateurs et de directions informatiques.",
      ], faq: [
        { q: 'L’agent peut-il écrire dans notre comptabilité ou notre ERP ?', a: "Oui, par des outils que nous écrivons un par un, jamais par la base : chaque outil fait une action nommée, créer un avoir, envoyer une relance, avec des paramètres typés. Le modèle propose l'appel ; votre serveur le vérifie, rôle, paramètres contre vos données, plafond, doublon, et l'exécute ou le refuse. Au-dessus d'un plafond, l'action devient une demande d'approbation sur le téléphone de celui qui peut dire oui." },
        { q: 'Que se passe-t-il si l’agent se trompe de montant ou de client ?', a: "La porte l'arrête avant l'écriture : un montant qui n'est pas une ligne de la facture est refusé, une facture qui n'appartient pas au client aussi, et un paramètre manquant fait que l'agent demande au lieu de deviner. Pour les écritures, un aperçu est montré avant d'écrire, et au-dessus du plafond, rien ne s'écrit sans approbation. Chaque refus est dans le journal." },
        { q: 'Et si la même action est exécutée deux fois ?', a: "Chaque appel porte une clé d'idempotence ; si la connexion coupe et que l'appel est renvoyé, la seconde exécution renvoie le résultat de la première au lieu de créer un deuxième avoir ou de renvoyer vingt-trois relances. C'est la même mécanique que pour une application hors ligne qui se resynchronise." },
        { q: 'L’agent a-t-il plus de droits que mes employés ?', a: "Jamais. Il hérite du rôle de la personne qui lui parle, et il a en plus un rôle « agent » propre, plus étroit : lecture du nécessaire, écritures sous plafond, pas de suppression, pas d'export. Un commercial ne peut pas lui faire faire ce qu'il n'a pas le droit de faire lui-même, et chaque action porte les deux noms dans le journal." },
        { q: 'Comment savoir ce que l’agent a fait ?', a: "Par le journal : une ligne par appel, qui a demandé, quel outil, quels paramètres, la valeur avant et après, et le résultat, exécuté, en attente ou refusé. Un écran hebdomadaire résume ce qu'il a fait, ce qu'on lui a refusé, ce qu'il a coûté, et le jeu d'évaluation est rejoué à chaque changement d'outil ou de modèle." },
        { q: 'Combien de temps pour brancher un agent ?', a: "Huit semaines : une pour écrire les demandes et la liste des outils, une pour le jeu d'évaluation, deux pour les outils de lecture et la porte, pendant lesquelles l'agent explique sans écrire, deux pour ouvrir les outils d'écriture un à un avec leurs plafonds, deux de pilote avec le gérant. L'agent n'écrit rien avant la cinquième semaine." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Le modèle propose ; le serveur dispose. Un paramètre deviné est arrêté à la porte, pas chez le client." },
      { after: 4, text: "L'agent n'a jamais plus de droits que la personne qu'il assiste, et ce que son rôle n'a pas n'existe pas pour lui." },
    ],
    cta: { eyebrow: 'Envoyez-nous les dix demandes que vous feriez à un assistant', title: "Gérant en Algérie ou fondateur en France : nous branchons un agent IA sur votre back-office et votre ERP, outil par outil, avec les plafonds, les approbations sur votre téléphone et le journal de chaque action", body: "Symloop construit des fonctions IA en production pour les entreprises en Algérie et les fondateurs installés en France, et les branche sur vos logiciels sans leur donner la base : liste d'outils par rôle, schémas stricts, porte côté serveur qui vérifie rôle, paramètres, plafonds et doublons, aperçu avant écriture, approbation sur téléphone, journal par appel refus compris, jeu d'évaluation de soixante demandes réelles, deux semaines de lecture seule avant la première écriture. Outils et instructions dans votre dépôt ; une démonstration toutes les deux semaines." },
    related: { label: 'À lire aussi', items: [
      { href: L.commencer, kind: '2027', name: 'Agent IA en entreprise : par où commencer' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit' },
      { href: L.evaluer, kind: '2027', name: 'Mesurer qu’une IA marche avant la production' },
      { href: L.integrer, kind: '2027', name: 'Intégrer le logiciel existant par API' },
    ] },
  },
  en: {
    kind: 'AI agent · Back office · ERP · Tools · 2027', title: 'An AI agent in your back office and ERP in Algeria in 2027: the tools it is allowed to call, what it reads, what it writes under a limit, what needs an approval, and how every action leaves a trace',
    dek: '“Can the AI create a credit note, chase my customers, place a supplier order?” Yes, and that is exactly where an agent stops being a demo and becomes a risk, if nothing stands between the model and your accounting. This guide describes how an agent acts in the back office without breaking anything: tools defined one by one, reading before writing, limits, an approval on the phone of whoever can say yes, a key that prevents doing it twice, a preview before writing, and a log line for every call, refusals included.',
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['AI agent', 'Back office', 'ERP', 'Tools', 'Algeria 2027'],
    intro: [
      '**Short answer.** An AI agent never has access to your database: it has access to **tools**, written one by one, each doing one named thing with typed parameters. The model **proposes** a call; your server **executes** it, after going through the same **gate** every time: does the role of whoever talks to the agent allow this tool, do the parameters exist in your data, is the amount under the **limit**, has this call already been executed. **Reads** pass alone; **writes** pass under a limit with a **preview**; above the limit they become an **approval request** on the phone of whoever can say yes; what the role does not have does not exist for the agent. Every call, executed or refused, has a **log line**. The agent never has more rights than the person it assists. Eight weeks, two of which it can write nothing.',
      'This guide is for the manager who wants the AI to finally do something in their management software, the founder settled in France who wants to run their back office by messages, and the IT department that must say yes or no to plugging an agent into accounting. It does not repeat where to start or which uses pay, described in [the guide on the agent in the company](' + L.commencer + '), nor how the agent lives on WhatsApp, described in [the dedicated guide](' + L.whatsapp + '); it describes what is built between the model and your ERP, and extends [our page on AI functions](' + L.service + ').',
    ],
    sections: [
      { heading: 'What the figures say', body: [
        'The model proposes, your code executes: the vendors themselves write it. Anthropic’s documentation describes tool use thus: the model “determines when to call a tool based on the user’s request and the tool’s description”, then “returns a structured call that your application runs”; your code does the operation and returns the result. OpenAI’s says the same: “when the model calls a function, you must execute it and return the result”. What this imposes: everything that protects your ERP lives in your code, between the model’s proposal and the execution, and no model setting replaces that gate.',
        'The shape of the call can be guaranteed, not its meaning. Both vendors offer a strict mode which, per OpenAI, “will ensure function calls reliably adhere to the function schema, instead of being best effort”, and recommend always enabling it. But Anthropic’s documentation also warns that, when a required parameter is missing from the request, the model may “infer a reasonable value” rather than ask, and that this behaviour “is not guaranteed”. What this imposes: a credit-note amount proposed by the model is in the right format, but it may be invented; the gate checks it against the invoice, and the preview shows it before writing.',
        'The tool list has a written, reasonable size. OpenAI recommends “clear and detailed function names, parameter descriptions, and instructions”, enums “to prevent invalid states”, and keeping the list “small for higher accuracy”, with **fewer than twenty functions** available at the start of a turn; its rule of thumb is the “intern test”: could someone use the function correctly given only what the model sees? What this imposes: no “run a query” or “modify a field” tool, but one tool per business action, create a credit note, send a reminder, and one list per role. What we did not find: a public measure of incidents caused by agents in ERPs; what we see are the six traps described below, and we say so as an observation.',
      ] },
      { heading: 'One request becomes four tool calls', body: [
        'The agent is not understood on a diagram but on a real request from the manager, and on what each of its calls becomes.',
      ], visual: 'actions', after: [
        '**The request** arrives at 9:12 with the manager’s name and role: chase customers more than thirty days late, prepare the credit notes for the week’s returns. The agent splits it into calls. **The first** reads late customers: a read allowed for this role, twenty-three customers, and the read itself is written to the log. **The second** sends the reminders: a write, but under the limit, twenty-three sends for a limit of fifty a day, with an approved template and no free text, and an idempotency key so that a call resent after a drop does not send twice; executed.',
        '**The third** creates a credit note of 12,400 dinars: the invoice exists and belongs to the right customer, the amount is found in the invoice, but it exceeds the 10,000-dinar limit written for this role; the call becomes a preview sent to the manager on their phone through the notification described in [the notifications guide](' + L.notif + '), and the credit note does not exist until they approve with one key. **The fourth** wants to delete an invoice: that tool is not in the “agent” role’s list, it does not exist for it, no parameter is even read, and the attempt is written. Four calls, four log lines, one human decision, and no action the manager could not have done themselves.',
      ] },
      { heading: 'An agent in the back office, in five layers', body: [
        'Behind those four calls, five layers, and the middle one is the only one that says no.',
      ], visual: 'couches', after: [
        '**The channel**: the manager talks to the agent from WhatsApp, the back office or a button in the screen; the request arrives with their name and role, and the agent never has more rights than them, per the rules described in [the roles guide](' + L.roles + '). **The agent**: the model reads the request, chooses the tools, proposes the parameters and explains what it will do; it proposes, it does not execute, and its instructions and limits are versioned in your repository. **The tools and the gate**: one card per tool, read or write, strict schema; the gate checks the role, the parameters against your data, the limit, idempotency, then logs; it is the layer that belongs to you and depends on no vendor.',
        '**The ERP and data**: your management software or accounting, called through their API or connector, never the database directly, with the same business rules as for a human, stock, credit, numbering; the way to connect them is that of [the integration guide](' + L.integrer + '). **Supervision**: the call log, pending approvals, refusals, cost per task, and the evaluation set replayed at every change, per [the measurement guide](' + L.evaluer + '); a screen read every week that says what the agent did, what it was refused, and what it cost.',
      ] },
      { heading: 'One tool, seen by the agent and checked by the server', body: [
        'A tool’s card is all the model knows; the gate is all the server does, whatever the model sends.',
      ], visual: 'toolcard', after: [
        '**What the model reads**: a name, create a credit note; a description saying when to use it and when not, “only for a confirmed return or price error, never guess the amount”; and three typed parameters, the invoice number, the amount in dinars, the reason among three values and nothing else. The schema is strict: the call will always have this shape. **What the server checks, whatever the model sends**: does the “agent” role have this tool; does the invoice exist, for this customer; is the amount a line of the invoice and under the limit; has this call already been executed, by its key; was the preview shown; is the log line written.',
        '**The third check** answers the vendors’ warning: a model may invent a plausible amount when one is missing; the gate refuses any amount that is not in the invoice, and the agent asks instead of executing. **The fifth** is the one that reassures the manager: nothing is written to accounting before a preview has been shown, and above the limit, approved. The model proposes; the server disposes. A guessed parameter is stopped here, not at the customer.',
      ] },
      { heading: 'Six requests from a manager, and the tools they become', body: [
        'Six requests we hear, and for each the tools, limits and approval it becomes.',
      ], visual: 'demandes', after: [
        '**Chase late payers**: read balances, then send through an approved template, under a daily limit, never free text, and the list of those sent in return. **Create a credit note**: write under limit, amount taken from the invoice and never typed, preview and approval above. **Place a supplier order**: read stock and sales, proposal, and creation as a draft only, validated by a human, because an order commits money going out.',
        '**Change a price**: write under limit per role, approval beyond, old value kept, dated effect; it is the rule of the [B2B portal](' + L.portail + '). **Answer a customer**: read the order and the route, sourced answer, and never a promise that is not in the data. **Produce a report**: read the aggregates already defined for [the dashboard](' + L.dashboard + '), no invented calculation, so that the agent’s figure and the screen’s are the same. None of these rows contains a generic tool: each tool does one named thing, and that is what makes the agent predictable.',
      ] },
      { heading: 'Six traps of an agent in the ERP', body: [
        'Six traps we see on the agents we take over, and what the architecture does against each.',
      ], visual: 'pieges', after: [
        '**The tool too broad**: “run a query”, “modify any field”; the agent does what it understands, and nobody can say in advance what; one tool per business action, typed parameters, enumerated values, fewer than twenty tools per agent. **The guessed parameter**: the manager did not say the amount, the model invents a plausible one; parameter checked against the source data, and if it is not there, the agent asks. **The double execution**: the connection drops, the call is resent, two credit notes; idempotency key per call, the second execution returns the result of the first, on the principle described in [the offline guide](' + L.offline + ').',
        '**The write with no preview**: the agent writes to accounting before anyone has seen anything; systematic preview, approval above the limit. **The agent more powerful than the human**: an administrator account “to keep things simple”, and the sales rep gets it to do what they cannot; the agent inherits the role of whoever talks to it, never more, with a narrower “agent” role of its own. **The action with no trace**: nobody knows the agent changed this price; log line per call, who asked, which tool, which parameters, before, after, refusals included. The first two come from the tool card, the other four from the gate, and all are decided in week one.',
      ] },
      { heading: 'Seen elsewhere: the vendors’ tool documentation, and what transposes', body: [
        'Two sources say the essentials. Anthropic’s and OpenAI’s documentation say the model proposes a structured call and your code executes it, that strict mode guarantees the call’s shape, and that a missing parameter may be inferred rather than asked for; what transposes is that an agent’s safety is a matter of server-side code, not of model, and that a guaranteed shape does not excuse checking the meaning. OpenAI also says to keep fewer than twenty tools, with clear names and enumerated values; what transposes is a short list of business tools per role, not a generic tool.',
        'What these sources do not say: which actions your manager wants to delegate, which limits they accept, and who approves above; the project’s first week answers that, with the ten requests they really make.',
      ] },
      { heading: 'The rules of an agent you can plug into the ERP', body: [
        'Six rules, written in the first week. **The agent sees only tools**, never the database. **A tool does one named thing**, with typed parameters and enumerated values; fewer than twenty per role. **Reading before writing**, and every write has a limit and a preview. **Above the limit, an approval**, on the phone of whoever can say yes. **One key per call**: nothing executes twice. **One log line per call**, refusals included, and the agent never has more rights than the person it assists.',
        'A seventh rule concerns the quote: “AI agent connected to the ERP” is not a requirement, it is a sentence; the requirement reads “tool list per role, read or write, strict schema and description per tool; server-side gate checking role, parameters against data, limits, idempotency; preview before writing; approval on the phone above the limit; log per call with before and after; evaluation set of sixty real requests including missing parameters, out-of-rights and duplicates; two read-only weeks before the first write”, and it is checked as [the specification guide](' + L.cdc + ') recommends. A quote that prices “the AI’s access to the database” has priced trap number one.',
      ] },
      { heading: 'Six companies, and the first write tool opened', body: [
        'Six companies we often equip, and for each the first write tool opened after the two read-only weeks.',
      ], list: [
        '**The distributor and its portal**, described in [the dedicated guide](' + L.portail + '). Chasing late payers by template, under a daily limit; credit notes stay in approval for several weeks.',
        '**The accounting firm.** Filing read documents in the right client folder; no accounting entry by the agent before the second month.',
        '**The clinic.** Booking appointments in free slots; never the medical record in write.',
        '**The real-estate agency.** Generating the month’s receipts as drafts, validated in bulk by the manager.',
        '**The private school.** Due-date reminders to parents by template; tuition discounts in approval.',
        '**The company run from France.** The day’s report per branch in read; approval of credit notes and discounts on the founder’s phone, wherever they are.',
      ] },
      { heading: 'The 2027 calendar', body: [
        'The calendar is that of an agent plugged into the back office in eight weeks, two of which it can write nothing.',
      ], visual: 'calendrier', after: [
        '**Week 0 to 1** writes the requests and the tools: the ten requests the manager really makes, the tool list with read or write, limit and approver; signed. **Week 1 to 2** writes the evaluation set: sixty real requests with the expected calls, and the traps, missing parameter, out-of-rights request, duplicate. **Weeks 2 to 4** build the read tools and the gate: cards, strict schemas, role and parameter checks, log; the agent answers and explains what it would do, and writes nothing.',
        '**Weeks 4 to 6** open the write tools, one at a time: limits, idempotency, preview, approval on the phone. **Weeks 6 to 8** are the pilot with the manager and two people: every refusal and approval read every day, cost per task measured, and every error added to the set. Every batch is demoed as [the delivery guide](' + L.livrer + ') describes; and when requests contain sensitive documents, the model runs where [the private deployment guide](' + L.prive + ') provides.',
      ] },
      { heading: 'What makes an agent in the ERP fail', body: [
        'The agents we take over almost always failed for one of these reasons.',
      ], list: [
        '**Direct access to the database.** The model writes queries; nobody knows which in advance.',
        '**Writing from day one.** No read-only period; trust was never built.',
        '**No limit.** A 40 % discount granted because the customer insisted.',
        '**No idempotency key.** A network drop, and three identical invoices.',
        '**The administrator agent.** It does for the sales rep what the sales rep is not allowed to do.',
        '**Generic tools.** “Modify a record”: the agent modified the wrong one.',
        '**No log of refusals.** Nobody knows what the agent tried, or who asked it.',
      ] },
      { heading: 'Frequently asked questions', body: [
        'The questions we receive from managers, founders and IT departments.',
      ], faq: [
        { q: 'Can the agent write to our accounting or ERP?', a: 'Yes, through tools we write one by one, never through the database: each tool does one named action, create a credit note, send a reminder, with typed parameters. The model proposes the call; your server checks it, role, parameters against your data, limit, duplicate, and executes or refuses it. Above a limit, the action becomes an approval request on the phone of whoever can say yes.' },
        { q: 'What happens if the agent gets the amount or the customer wrong?', a: 'The gate stops it before writing: an amount that is not a line of the invoice is refused, an invoice that does not belong to the customer too, and a missing parameter makes the agent ask instead of guessing. For writes, a preview is shown before writing, and above the limit nothing is written without approval. Every refusal is in the log.' },
        { q: 'And if the same action is executed twice?', a: 'Every call carries an idempotency key; if the connection drops and the call is resent, the second execution returns the result of the first instead of creating a second credit note or resending twenty-three reminders. It is the same mechanism as for an offline app that resynchronises.' },
        { q: 'Does the agent have more rights than my employees?', a: 'Never. It inherits the role of the person talking to it, and additionally has a narrower “agent” role of its own: reading what is needed, writes under a limit, no deletion, no export. A sales rep cannot get it to do what they are not allowed to do themselves, and every action carries both names in the log.' },
        { q: 'How do we know what the agent did?', a: 'Through the log: one line per call, who asked, which tool, which parameters, the value before and after, and the result, executed, pending or refused. A weekly screen summarises what it did, what it was refused, what it cost, and the evaluation set is replayed at every change of tool or model.' },
        { q: 'How long to plug in an agent?', a: 'Eight weeks: one to write the requests and the tool list, one for the evaluation set, two for the read tools and the gate, during which the agent explains without writing, two to open the write tools one by one with their limits, two of pilot with the manager. The agent writes nothing before week five.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'The model proposes; the server disposes. A guessed parameter is stopped at the gate, not at the customer.' },
      { after: 4, text: 'The agent never has more rights than the person it assists, and what its role does not have does not exist for it.' },
    ],
    cta: { eyebrow: 'Send us the ten requests you would make to an assistant', title: 'Manager in Algeria or founder in France: we plug an AI agent into your back office and ERP, tool by tool, with limits, approvals on your phone and a log of every action', body: 'Symloop builds AI functions in production for companies in Algeria and founders settled in France, and plugs them into your software without handing over the database: tool list per role, strict schemas, server-side gate checking role, parameters, limits and duplicates, preview before writing, approval on the phone, log per call refusals included, evaluation set of sixty real requests, two read-only weeks before the first write. Tools and instructions in your repository; a demo every two weeks.' },
    related: { label: 'Read next', items: [
      { href: L.commencer, kind: '2027', name: 'AI agent in the company: where to start' },
      { href: L.roles, kind: '2027', name: 'Roles, permissions and the audit log' },
      { href: L.evaluer, kind: '2027', name: 'Proving an AI works before production' },
      { href: L.integrer, kind: '2027', name: 'Integrating existing software by API' },
    ] },
  },
  ar: {
    kind: 'وكيل ذكاء اصطناعي · المكتب الخلفي · ERP · أدوات · 2027', title: 'وكيل ذكاء اصطناعي في مكتبكم الخلفي ونظام ERP في الجزائر سنة 2027: الأدوات التي يحق له استدعاؤها، ما يقرأ، ما يكتب تحت سقف، ما يتطلب موافقة، وكيف يترك كل فعل أثراً',
    dek: '«هل يستطيع الذكاء الاصطناعي إنشاء إشعار دائن، متابعة زبائني، طلب طلبية من مورّد؟» نعم، وهنا بالضبط يكفّ الوكيل عن كونه عرضاً تجريبياً ويصير خطراً، إن لم يقف شيء بين النموذج ومحاسبتكم. يصف هذا الدليل كيف يتصرف وكيل في المكتب الخلفي دون كسر شيء: أدوات تُعرَّف واحدة واحدة، القراءة قبل الكتابة، سقوف، موافقة على هاتف من يستطيع أن يقول نعم، مفتاح يمنع التكرار، معاينة قبل الكتابة، وسطر في السجل لكل استدعاء حتى المرفوض.',
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['وكيل ذكاء اصطناعي', 'المكتب الخلفي', 'ERP', 'أدوات', 'الجزائر 2027'],
    intro: [
      '**الجواب القصير.** وكيل الذكاء الاصطناعي لا يصل أبداً إلى قاعدتكم: يصل إلى **أدوات** تُكتب واحدة واحدة، كل منها تفعل شيئاً واحداً مسمّى بمعاملات منمَّطة. النموذج **يقترح** استدعاءً؛ وخادمكم **ينفّذه** بعد المرور بـ **الباب** نفسه كل مرة: هل يسمح دور من يخاطب الوكيل بهذه الأداة، هل المعاملات موجودة في بياناتكم، هل المبلغ تحت **السقف**، هل نُفّذ هذا الاستدعاء من قبل. **القراءات** تمر وحدها؛ و**الكتابات** تمر تحت سقف مع **معاينة**؛ وفوق السقف تصير **طلب موافقة** على هاتف من يستطيع أن يقول نعم؛ وما لا يملكه الدور لا وجود له عند الوكيل. ولكل استدعاء، منفَّذاً كان أو مرفوضاً، **سطر في السجل**. ولا يملك الوكيل أبداً حقوقاً أكثر من الشخص الذي يساعده. ثمانية أسابيع، اثنان منها لا يستطيع فيهما كتابة شيء.',
      'هذا الدليل موجّه إلى المسيّر الذي يريد أن يفعل الذكاء الاصطناعي أخيراً شيئاً في برنامج تسييره، وإلى المؤسس المقيم في فرنسا الذي يريد إدارة مكتبه الخلفي بالرسائل، وإلى مديرية الإعلام الآلي التي يجب أن تقول نعم أو لا لوصل وكيل بالمحاسبة. لا يعيد من أين نبدأ ولا أي الاستعمالات تربح، الموصوفة في [دليل الوكيل في الشركة](' + L.commencer + ')، ولا كيف يعيش الوكيل على WhatsApp، الموصوف في [الدليل المخصص](' + L.whatsapp + ')؛ بل يصف ما يُبنى بين النموذج ونظام ERP، ويمدّ [صفحتنا عن وظائف الذكاء الاصطناعي](' + L.service + ').',
    ],
    sections: [
      { heading: 'ما تقوله الأرقام', body: [
        'النموذج يقترح وكودكم ينفّذ: هذا مكتوب عند الناشرين أنفسهم. تصف وثائق Anthropic استعمال الأدوات هكذا: النموذج «يحدد متى يستدعي أداة بناءً على طلب المستعمل ووصف الأداة»، ثم «يعيد استدعاءً منظَّماً ينفّذه تطبيقكم»؛ كودكم يقوم بالعملية ويعيد النتيجة. وتقول وثائق OpenAI الشيء نفسه: «حين يستدعي النموذج دالة، عليكم تنفيذها وإعادة النتيجة». وما يفرضه ذلك: كل ما يحمي ERP يوجد في كودكم، بين اقتراح النموذج والتنفيذ، ولا إعداد للنموذج يعوّض هذا الباب.',
        'شكل الاستدعاء يمكن ضمانه، لا معناه. يقترح الناشران وضعاً صارماً «يضمن أن تلتزم استدعاءات الدوال بمخطط الدالة بدل أن تكون على قدر الإمكان» حسب OpenAI، ويوصيان بتفعيله دائماً. لكن وثائق Anthropic تحذّر أيضاً من أنه حين يغيب معامل إلزامي من الطلب، قد «يستنتج النموذج قيمة معقولة» بدل أن يسأل، وأن هذا السلوك «غير مضمون». وما يفرضه ذلك: مبلغ إشعار دائن يقترحه النموذج يكون بالصيغة الصحيحة، لكنه قد يكون مخترَعاً؛ والباب يتحقق منه مقابل الفاتورة، والمعاينة تعرضه قبل الكتابة.',
        'ولقائمة الأدوات حجم معقول مكتوب. توصي OpenAI بـ «أسماء دوال وأوصاف معاملات واضحة ومفصَّلة»، وباستعمال القيم المحصورة «لمنع الحالات غير الصالحة»، وبإبقاء القائمة «صغيرة لدقة أعلى»، بـ **أقل من عشرين دالة** متاحة في بداية الدور؛ وقاعدتها العملية «اختبار المتدرب»: هل يستطيع شخص لا يرى إلا بطاقة الأداة استعمالها صحيحاً؟ وما يفرضه ذلك: لا أداة «تنفيذ استعلام» ولا «تعديل حقل»، بل أداة لكل فعل عمل، إنشاء إشعار دائن، إرسال تذكير، وقائمة لكل دور. وما لم نجده: قياس علني للحوادث التي سبّبها وكلاء في أنظمة ERP؛ وما نراه هو الفخاخ الستة الموصوفة أدناه، ونقولها ملاحظةً.',
      ] },
      { heading: 'طلب واحد يصير أربعة استدعاءات لأدوات', body: [
        'الوكيل لا يُفهم على مخطط بل على طلب حقيقي من المسيّر، وعلى ما يصيره كل استدعاء من استدعاءاته.',
      ], visual: 'actions', after: [
        '**الطلب** يصل في 9:12 باسم المسيّر ودوره: متابعة الزبائن المتأخرين أكثر من ثلاثين يوماً، وتحضير إشعارات الدائن لمرتجعات الأسبوع. يقسّمه الوكيل إلى استدعاءات. **الأول** يقرأ الزبائن المتأخرين: قراءة مسموحة لهذا الدور، ثلاثة وعشرون زبوناً، والقراءة نفسها تُكتب في السجل. **الثاني** يرسل التذكيرات: كتابة، لكن تحت سقف، ثلاثة وعشرون إرسالاً لحد خمسين في اليوم، بقالب معتمد ولا نص حر، ومفتاح عدم تكرار كي لا يرسل الاستدعاء المُعاد بعد انقطاع مرتين؛ نُفّذ.',
        '**الثالث** ينشئ إشعار دائن بـ 12 400 دينار: الفاتورة موجودة وللزبون الصحيح، والمبلغ موجود في الفاتورة، لكنه يتجاوز سقف 10 000 دينار المكتوب لهذا الدور؛ فيصير الاستدعاء معاينة تُرسل إلى المسيّر على هاتفه بالإشعار الموصوف في [دليل الإشعارات](' + L.notif + ')، ولا يوجد إشعار الدائن حتى يوافق بضغطة. **الرابع** يريد حذف فاتورة: هذه الأداة ليست في قائمة دور «الوكيل»، لا وجود لها عنده، ولا يُقرأ منها معامل حتى، والمحاولة تُكتب. أربعة استدعاءات، أربعة سطور في السجل، قرار بشري واحد، ولا فعل ما كان المسيّر يستطيع فعله بنفسه.',
      ] },
      { heading: 'وكيل في المكتب الخلفي، في خمس طبقات', body: [
        'خلف هذه الاستدعاءات الأربعة خمس طبقات، والوسطى هي الوحيدة التي تقول لا.',
      ], visual: 'couches', after: [
        '**القناة**: يخاطب المسيّر الوكيل من WhatsApp أو المكتب الخلفي أو زر في الشاشة؛ يصل الطلب باسمه ودوره، ولا يملك الوكيل حقوقاً أكثر منه أبداً، وفق القواعد الموصوفة في [دليل الأدوار](' + L.roles + '). **الوكيل**: يقرأ النموذج الطلب ويختار الأدوات ويقترح المعاملات ويشرح ما سيفعله؛ يقترح ولا ينفّذ، وتعليماته وحدوده مُصدَرة في مستودعكم. **الأدوات والباب**: بطاقة لكل أداة، قراءة أو كتابة، مخطط صارم؛ الباب يتحقق من الدور والمعاملات مقابل بياناتكم والسقف وعدم التكرار ثم يسجّل؛ وهي الطبقة التي تخصكم ولا تتوقف على أي ناشر.',
        '**ERP والبيانات**: برنامج التسيير أو المحاسبة، يُستدعيان عبر واجهتهما أو موصّلهما لا عبر القاعدة مباشرة، بقواعد العمل نفسها كما للإنسان، المخزون والائتمان والترقيم؛ وطريقة وصلهما هي طريقة [دليل الدمج](' + L.integrer + '). **الإشراف**: سجل الاستدعاءات، الموافقات المعلَّقة، المرفوضات، التكلفة لكل مهمة، ومجموعة التقييم المُعادة مع كل تغيير وفق [دليل القياس](' + L.evaluer + ')؛ شاشة تُقرأ كل أسبوع تقول ما فعله الوكيل وما رُفض له وكم كلّف.',
      ] },
      { heading: 'أداة واحدة، يراها الوكيل ويتحقق منها الخادم', body: [
        'بطاقة الأداة هي كل ما يعرفه النموذج؛ والباب هو كل ما يفعله الخادم، مهما أرسل النموذج.',
      ], visual: 'toolcard', after: [
        '**ما يقرؤه النموذج**: اسم، إنشاء إشعار دائن؛ ووصف يقول متى تُستعمل ومتى لا، «فقط لمرتجع أو خطأ سعر مؤكَّد، ولا يُخمَّن المبلغ أبداً»؛ وثلاثة معاملات منمَّطة، رقم الفاتورة، المبلغ بالدينار، السبب من ثلاث قيم لا غير. والمخطط صارم: سيكون للاستدعاء هذا الشكل دائماً. **ما يتحقق منه الخادم مهما أرسل النموذج**: هل لدور «الوكيل» هذه الأداة؛ هل الفاتورة موجودة لهذا الزبون؛ هل المبلغ سطر في الفاتورة وتحت السقف؛ هل نُفّذ هذا الاستدعاء من قبل بمفتاحه؛ هل عُرضت المعاينة؛ هل كُتب سطر السجل.',
        '**الفحص الثالث** هو الذي يجيب عن تحذير الناشرين: قد يخترع النموذج مبلغاً معقولاً حين يغيب؛ والباب يرفض أي مبلغ ليس في الفاتورة، ويسأل الوكيل بدل أن ينفّذ. **والخامس** هو الذي يطمئن المسيّر: لا شيء يُكتب في المحاسبة قبل عرض معاينة، وفوق السقف قبل الموافقة. النموذج يقترح؛ والخادم يقرر. والمعامل المخمَّن يُوقَف هنا لا عند الزبون.',
      ] },
      { heading: 'ستة طلبات من مسيّر، والأدوات التي تصيرها', body: [
        'ستة طلبات نسمعها، ولكل منها الأدوات والسقوف والموافقة التي تصيرها.',
      ], visual: 'demandes', after: [
        '**متابعة المتأخرين**: قراءة الأرصدة، ثم إرسال بقالب معتمد تحت سقف يومي ولا نص حر أبداً، وقائمة المرسَل إليهم تعود. **إنشاء إشعار دائن**: كتابة تحت سقف، المبلغ من الفاتورة ولا يُكتب أبداً، ومعاينة وموافقة فوقه. **طلبية مورّد**: قراءة المخزون والمبيعات، اقتراح، وإنشاء مسودةً فقط يصادق عليها إنسان، لأن الطلبية تلتزم بمال يخرج.',
        '**تعديل سعر**: كتابة تحت سقف لكل دور، موافقة فوقه، القيمة القديمة تُحفظ، أثر مؤرَّخ؛ وهي قاعدة [بوابة B2B](' + L.portail + '). **الرد على زبون**: قراءة الطلبية والجولة، جواب بمصدره، ولا وعد ليس في البيانات أبداً. **إخراج كشف**: قراءة المجاميع المعرَّفة سلفاً لـ [لوحة القيادة](' + L.dashboard + ')، لا حساب مخترَع، كي يكون رقم الوكيل ورقم الشاشة واحداً. ولا سطر من هذه الأسطر يحتوي أداة عامة: كل أداة تفعل شيئاً واحداً مسمّى، وهذا ما يجعل الوكيل متوقَّعاً.',
      ] },
      { heading: 'ستة فخاخ لوكيل في ERP', body: [
        'ستة فخاخ نراها في الوكلاء الذين نستلمهم، وما تفعله الهندسة ضد كل منها.',
      ], visual: 'pieges', after: [
        '**الأداة الواسعة جداً**: «تنفيذ استعلام»، «تعديل أي حقل»؛ الوكيل يفعل ما يفهمه ولا أحد يستطيع أن يقول مسبقاً ماذا؛ أداة لكل فعل عمل، معاملات منمَّطة، قيم محصورة، أقل من عشرين أداة لكل وكيل. **المعامل المخمَّن**: لم يقل المسيّر المبلغ فيخترع النموذج مبلغاً معقولاً؛ المعامل يُتحقَّق منه مقابل البيانات المصدر، وإن لم يوجد يسأل الوكيل. **التنفيذ المزدوج**: ينقطع الاتصال ويُعاد الاستدعاء، إشعارا دائن؛ مفتاح عدم تكرار لكل استدعاء، والتنفيذ الثاني يعيد نتيجة الأول، على المبدأ الموصوف في [دليل العمل دون اتصال](' + L.offline + ').',
        '**الكتابة بلا معاينة**: يكتب الوكيل في المحاسبة قبل أن يرى أحد شيئاً؛ معاينة منهجية، وموافقة فوق السقف. **وكيل أقوى من الإنسان**: حساب مدير «للتبسيط»، فيجعله المندوب يفعل ما لا يستطيع؛ الوكيل يرث دور من يخاطبه ولا أكثر أبداً، بدور «وكيل» خاص أضيق. **الفعل بلا أثر**: لا أحد يعرف أن الوكيل هو من غيّر هذا السعر؛ سطر في السجل لكل استدعاء، من طلب، أي أداة، أي معاملات، قبل، بعد، حتى المرفوض. الفخان الأولان يأتيان من بطاقة الأداة، والأربعة الأخرى من الباب، وكلها تُقرَّر في الأسبوع الأول.',
      ] },
      { heading: 'رأيناه في مكان آخر: وثائق الأدوات عند الناشرين، وما ينتقل', body: [
        'مصدران يقولان الجوهر. تقول وثائق Anthropic وOpenAI إن النموذج يقترح استدعاءً منظَّماً وإن كودكم ينفّذه، وإن الوضع الصارم يضمن شكل الاستدعاء، وإن المعامل الناقص قد يُستنتج بدل أن يُطلب؛ وما ينتقل هو أن أمان الوكيل مسألة كود في الخادم لا مسألة نموذج، وأن الشكل المضمون لا يعفي من التحقق من المعنى. وتقول OpenAI أيضاً بإبقاء أقل من عشرين أداة، بأسماء واضحة وقيم محصورة؛ وما ينتقل هو قائمة قصيرة من أدوات العمل لكل دور لا أداة عامة.',
        'وما لا تقوله هذه المصادر: أي الأفعال يريد مسيّركم تفويضها، وأي السقوف يقبل، ومن يوافق فوقها؛ والأسبوع الأول من المشروع يجيب، بالطلبات العشرة التي يقدّمها فعلاً.',
      ] },
      { heading: 'قواعد وكيل يمكن وصله بـ ERP', body: [
        'ست قواعد تُكتب في الأسبوع الأول. **الوكيل لا يرى إلا أدوات**، لا القاعدة أبداً. **الأداة تفعل شيئاً واحداً مسمّى**، بمعاملات منمَّطة وقيم محصورة؛ أقل من عشرين لكل دور. **القراءة قبل الكتابة**، ولكل كتابة سقف ومعاينة. **فوق السقف موافقة**، على هاتف من يستطيع أن يقول نعم. **مفتاح لكل استدعاء**: لا شيء يُنفَّذ مرتين. **سطر في السجل لكل استدعاء** حتى المرفوض، ولا يملك الوكيل أبداً حقوقاً أكثر من الشخص الذي يساعده.',
        'قاعدة سابعة تخص عرض السعر: «وكيل ذكاء اصطناعي موصول بـ ERP» ليس متطلباً بل جملة؛ المتطلب يُكتب «قائمة أدوات لكل دور، قراءة أو كتابة، مخطط صارم ووصف لكل أداة؛ باب في الخادم يتحقق من الدور والمعاملات مقابل البيانات والسقوف وعدم التكرار؛ معاينة قبل الكتابة؛ موافقة على الهاتف فوق السقف؛ سجل لكل استدعاء بقبل وبعد؛ مجموعة تقييم من ستين طلباً حقيقياً تشمل المعاملات الناقصة وخارج الحقوق والتكرار؛ أسبوعان للقراءة فقط قبل أول كتابة»، ويُتحقَّق منه كما يوصي [دليل دفتر الشروط](' + L.cdc + '). وعرض السعر الذي يسعّر «وصول الذكاء الاصطناعي إلى القاعدة» سعّر الفخ رقم واحد.',
      ] },
      { heading: 'ست شركات، وأول أداة كتابة تُفتح', body: [
        'ست شركات نجهّزها كثيراً، ولكل منها أول أداة كتابة تُفتح بعد أسبوعَي القراءة.',
      ], list: [
        '**الموزّع وبوابته**، الموصوفان في [الدليل المخصص](' + L.portail + '). متابعة المتأخرين بقالب تحت سقف يومي؛ وإشعارات الدائن تبقى في الموافقة أسابيع.',
        '**مكتب المحاسبة.** تصنيف الوثائق المقروءة في ملف الزبون الصحيح؛ ولا قيد محاسبي من الوكيل قبل الشهر الثاني.',
        '**المصحة.** حجز المواعيد في الفترات الشاغرة؛ ولا كتابة في الملف الطبي أبداً.',
        '**الوكالة العقارية.** توليد وصولات الشهر مسودات يصادق عليها المسيّر دفعةً واحدة.',
        '**المدرسة الخاصة.** تذكيرات الاستحقاق للأولياء بقالب؛ والتخفيضات على الرسوم في الموافقة.',
        '**الشركة المُدارة من فرنسا.** كشف اليوم لكل وكالة للقراءة؛ والموافقة على إشعارات الدائن والتخفيضات على هاتف المؤسس أينما كان.',
      ] },
      { heading: 'تقويم 2027', body: [
        'التقويم تقويم وكيل يُوصل بالمكتب الخلفي في ثمانية أسابيع، اثنان منها لا يستطيع فيهما كتابة شيء.',
      ], visual: 'calendrier', after: [
        '**الأسبوع 0 إلى 1** يكتب الطلبات والأدوات: الطلبات العشرة التي يقدّمها المسيّر فعلاً، وقائمة الأدوات بالقراءة أو الكتابة والسقف والموافِق؛ موقَّعة. **الأسبوع 1 إلى 2** يكتب مجموعة التقييم: ستون طلباً حقيقياً بالاستدعاءات المنتظرة، والفخاخ، معامل ناقص وطلب خارج الحقوق وتكرار. **الأسبوعان 2 إلى 4** يبنيان أدوات القراءة والباب: بطاقات ومخططات صارمة وتحقق من الدور والمعاملات وسجل؛ الوكيل يجيب ويشرح ما كان سيفعله ولا يكتب شيئاً.',
        '**الأسبوعان 4 إلى 6** يفتحان أدوات الكتابة واحدة واحدة: سقوف، عدم تكرار، معاينة، موافقة على الهاتف. **الأسبوعان 6 إلى 8** هما التجريب مع المسيّر وشخصين: كل رفض وكل موافقة يُقرآن كل يوم، والتكلفة لكل مهمة تُقاس، وكل خطأ يُضاف إلى المجموعة. وكل دفعة تُعرض كما يصف [دليل التسليم](' + L.livrer + ')؛ وحين تحتوي الطلبات وثائق حساسة يعمل النموذج حيث ينص [دليل النشر الخاص](' + L.prive + ').',
      ] },
      { heading: 'ما يُفشل وكيلاً في ERP', body: [
        'الوكلاء الذين نستلمهم فشلوا دائماً تقريباً لأحد هذه الأسباب.',
      ], list: [
        '**الوصول المباشر إلى القاعدة.** النموذج يكتب استعلامات؛ ولا أحد يعرف أيّها مسبقاً.',
        '**الكتابة منذ اليوم الأول.** لا فترة قراءة فقط؛ والثقة لم تُبنَ قط.',
        '**لا سقف.** تخفيض 40 % مُنح لأن الزبون ألحّ.',
        '**لا مفتاح عدم تكرار.** انقطاع شبكة، وثلاث فواتير متطابقة.',
        '**الوكيل المدير.** يفعل للمندوب ما لا يحق للمندوب فعله.',
        '**أدوات عامة.** «تعديل سجل»: عدّل الوكيل السجل الخطأ.',
        '**لا سجل للمرفوضات.** لا نعرف ما حاوله الوكيل ولا من طلبه منه.',
      ] },
      { heading: 'أسئلة شائعة', body: [
        'الأسئلة التي نتلقاها من مسيّرين ومؤسسين ومديريات إعلام آلي.',
      ], faq: [
        { q: 'هل يستطيع الوكيل الكتابة في محاسبتنا أو نظام ERP؟', a: 'نعم، بأدوات نكتبها واحدة واحدة، لا عبر القاعدة أبداً: كل أداة تفعل فعلاً واحداً مسمّى، إنشاء إشعار دائن، إرسال تذكير، بمعاملات منمَّطة. النموذج يقترح الاستدعاء؛ وخادمكم يتحقق منه، الدور والمعاملات مقابل بياناتكم والسقف والتكرار، وينفّذه أو يرفضه. وفوق سقف، يصير الفعل طلب موافقة على هاتف من يستطيع أن يقول نعم.' },
        { q: 'ماذا يحدث إن أخطأ الوكيل في المبلغ أو الزبون؟', a: 'الباب يوقفه قبل الكتابة: مبلغ ليس سطراً في الفاتورة يُرفض، وفاتورة ليست للزبون كذلك، ومعامل ناقص يجعل الوكيل يسأل بدل أن يخمّن. وللكتابات تُعرض معاينة قبل الكتابة، وفوق السقف لا يُكتب شيء بلا موافقة. وكل رفض في السجل.' },
        { q: 'وإن نُفّذ الفعل نفسه مرتين؟', a: 'كل استدعاء يحمل مفتاح عدم تكرار؛ إن انقطع الاتصال وأُعيد الاستدعاء، يعيد التنفيذ الثاني نتيجة الأول بدل إنشاء إشعار دائن ثانٍ أو إعادة إرسال ثلاثة وعشرين تذكيراً. وهي الآلية نفسها كما لتطبيق دون اتصال يعيد مزامنته.' },
        { q: 'هل للوكيل حقوق أكثر من موظفيّ؟', a: 'أبداً. يرث دور الشخص الذي يخاطبه، وله فوق ذلك دور «وكيل» خاص أضيق: قراءة الضروري، كتابات تحت سقف، لا حذف، لا تصدير. ولا يستطيع مندوب أن يجعله يفعل ما لا يحق له هو نفسه، وكل فعل يحمل الاسمين في السجل.' },
        { q: 'كيف نعرف ما فعله الوكيل؟', a: 'بالسجل: سطر لكل استدعاء، من طلب، أي أداة، أي معاملات، القيمة قبل وبعد، والنتيجة، منفَّذ أو معلَّق أو مرفوض. وشاشة أسبوعية تلخّص ما فعله وما رُفض له وكم كلّف، ومجموعة التقييم تُعاد مع كل تغيير في أداة أو نموذج.' },
        { q: 'كم من الوقت لوصل وكيل؟', a: 'ثمانية أسابيع: واحد لكتابة الطلبات وقائمة الأدوات، واحد لمجموعة التقييم، اثنان لأدوات القراءة والباب يشرح فيهما الوكيل دون أن يكتب، اثنان لفتح أدوات الكتابة واحدة واحدة بسقوفها، اثنان للتجريب مع المسيّر. ولا يكتب الوكيل شيئاً قبل الأسبوع الخامس.' },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: 'النموذج يقترح؛ والخادم يقرر. والمعامل المخمَّن يُوقَف عند الباب لا عند الزبون.' },
      { after: 4, text: 'لا يملك الوكيل أبداً حقوقاً أكثر من الشخص الذي يساعده، وما لا يملكه دوره لا وجود له عنده.' },
    ],
    cta: { eyebrow: 'أرسلوا لنا الطلبات العشرة التي كنتم ستطلبونها من مساعد', title: 'مسيّر في الجزائر أو مؤسس في فرنسا: نصل وكيل ذكاء اصطناعي بمكتبكم الخلفي ونظام ERP، أداةً أداة، بالسقوف والموافقات على هاتفكم وسجل كل فعل', body: 'تبني Symloop وظائف ذكاء اصطناعي في الإنتاج للشركات في الجزائر والمؤسسين المقيمين في فرنسا، وتصلها ببرامجكم دون إعطائها القاعدة: قائمة أدوات لكل دور، مخططات صارمة، باب في الخادم يتحقق من الدور والمعاملات والسقوف والتكرار، معاينة قبل الكتابة، موافقة على الهاتف، سجل لكل استدعاء حتى المرفوض، مجموعة تقييم من ستين طلباً حقيقياً، أسبوعان للقراءة فقط قبل أول كتابة. الأدوات والتعليمات في مستودعكم؛ وعرض كل أسبوعين.' },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.commencer, kind: '2027', name: 'وكيل الذكاء الاصطناعي في الشركة: من أين نبدأ' },
      { href: L.roles, kind: '2027', name: 'الأدوار والصلاحيات وسجل التدقيق' },
      { href: L.evaluer, kind: '2027', name: 'إثبات أن الذكاء الاصطناعي يعمل قبل الإنتاج' },
      { href: L.integrer, kind: '2027', name: 'دمج البرنامج القائم عبر API' },
    ] },
  },
};

const KEYWORDS = "agent ia erp algérie 2027, agent ia back-office entreprise, ia connectée à la comptabilité, agent ia outils function calling, ia créer un avoir relancer clients, plafond approbation agent ia, idempotence agent ia, journal actions agent ia, agent ia odoo erp algérie, ai agent erp tools algeria 2027, وكيل ذكاء اصطناعي ERP الجزائر, وكيل ذكاء اصطناعي في المحاسبة";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
