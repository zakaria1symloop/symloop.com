import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-securiser-une-application-mobile-ou-web-en-algerie-2027-donnees-clients-acces-verifies-sur-le-serveur-mots-de-passe-haches-mises-a-jour.mjs';

const SLUG = 'comment-securiser-une-application-mobile-ou-web-en-algerie-2027-donnees-clients-acces-verifies-sur-le-serveur-mots-de-passe-haches-mises-a-jour';
const FIGURES = ['acces', 'couches', 'coffre', 'etapes', 'questions', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  cybersecurite: '/blog/cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections/',
  sauvegarde: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  vivre: '/blog/faire-vivre-une-application-algerie-2027-cout-annee-stores-serveurs-mises-a-jour/',
  api: '/blog/ouvrir-une-api-a-vos-partenaires-algerie-2027-cles-droits-quotas-webhooks-versions-documentation-sans-exposer-votre-systeme/',
  reprendre: '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/',
};

const CONTENT = {
  fr: {
    kind: 'Sécurité des applications · Algérie · 2027', title: "Comment sécuriser une application mobile ou web en Algérie (2027) : elle garde les données de nos clients et personne ne sait dire si elle est sûre, un chiffre changé dans l'adresse montre la commande d'un autre, ce qu'il faut vérifier, corriger, et demander au prestataire",
    dek: "« Notre application garde les noms, les téléphones et les commandes de nos clients. C'est un prestataire qui l'a faite, et personne chez nous ne sait dire si elle est sûre. Un client nous a montré qu'en changeant un chiffre dans l'adresse, il voyait la commande d'un autre. Comment sécuriser une application, par où commencer, et comment vérifier ce qui a été fait ? » La sécurité d'une application ne se joue pas dans ses écrans : elle se joue sur le serveur, qui doit vérifier chaque demande. Le reste suit un ordre : les accès, les mots de passe, les secrets, les mises à jour.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Sécurité des applications', 'Contrôle d’accès', 'Stockage des mots de passe', 'Application mobile', 'Test d’intrusion', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une application est sûre quand **le serveur vérifie chaque demande** : qui êtes-vous, et ceci est-il à vous. C'est le défaut le plus répandu : l'édition 2025 du classement de l'OWASP le garde au premier rang. Commencez par quatre vérifications, dans cet ordre : **les accès** (changer un numéro dans l'adresse ne doit rien montrer), **les mots de passe** (hachés, jamais lisibles), **les secrets** (aucune clé dans le code du téléphone), **les mises à jour** (système, composants, application). Puis fermez les comptes inutiles, tenez un journal, et faites rejouer les essais par un tiers. Six semaines dans l'exemple, pour une application existante.",
      "Cette page s'adresse au gérant dont l'application, mobile ou web, garde des données de clients sans que personne dans l'entreprise puisse dire comment, et au fondateur installé en France qui a fait développer une plateforme pour l'Algérie et veut savoir ce qu'il a entre les mains. Les règles citées viennent de sources publiques : le classement de l'OWASP des dix principaux risques des applications web, édition 2025, sa liste pour le mobile, édition 2024, sa fiche sur le stockage des mots de passe, et des définitions d'encyclopédie. L'application de commande, ses numéros 1042 et 1043, ses quatre comptes et son calendrier sont un exemple construit. Cette page ne traite pas des obligations légales sur les données personnelles : voyez votre conseil. La sécurité de l'entreprise entière, postes, réseau, messagerie, relève d'[un autre guide](" + L.cybersecurite + ").",
    ],
    sections: [
      { heading: "Changer un chiffre dans l'adresse : le défaut le plus répandu", body: [
        "La figure montre la même demande, reçue par une application fragile puis par une application sûre.",
      ], visual: 'acces', after: [
        "**Le nom du défaut.** Le contrôle d'accès applique une règle telle que les utilisateurs ne peuvent pas agir en dehors des permissions prévues pour eux. La variante de la figure, voir le compte ou la commande d'un autre en fournissant son identifiant, s'appelle référence directe non sécurisée. **Le plus répandu.** L'OWASP, qui publie un classement des dix principaux risques des applications web, garde le contrôle d'accès défaillant au premier rang de son édition 2025, et écrit que 100 % des applications testées en présentaient une forme.",
        "**Où se fait la vérification.** Le contrôle d'accès n'est efficace que dans du code de confiance, côté serveur. Cacher un bouton dans l'écran ne protège rien : une demande peut être écrite à la main, sans passer par l'écran. La règle de construction tient en trois mots, refuser par défaut : sauf pour ce qui est public, tout est interdit tant qu'une règle ne le permet pas. **Qui voit quoi.** Encore faut-il avoir écrit ces règles, par rôle, par agence, par client : c'est l'objet du [guide sur les rôles, les droits et le journal d'audit](" + L.roles + ").",
      ] },
      { heading: "Une application sûre, en cinq couches", body: [
        "La couche accentuée est le serveur.",
      ], visual: 'couches', after: [
        "**Le téléphone.** L'OWASP tient aussi une liste propre aux applications mobiles : son édition 2024 place en tête le mauvais usage des identifiants, et compte parmi ses dix risques le stockage non sécurisé des données et la communication non sécurisée. En clair : pas de clé ni de mot de passe écrits dans le code, parce qu'une application installée se démonte et se lit ; et sur l'appareil, seulement ce dont l'écran a besoin. **Le chemin.** TLS est un protocole cryptographique conçu pour sécuriser les communications sur un réseau : c'est le cadenas de l'adresse. Il protège le trajet, pas ce qui arrive au bout : une application peut être entièrement en HTTPS et renvoyer la commande d'un autre.",
        "**Le serveur et la base.** Le principe du moindre privilège veut que chaque composant n'accède qu'aux informations et aux ressources nécessaires à sa tâche : le compte qu'utilise l'application pour lire la base n'a pas besoin de pouvoir tout effacer. **La connexion.** « Qui êtes-vous ? » se règle par un code envoyé au téléphone ou par un mot de passe, selon [le guide sur la connexion par code](" + L.otp + ") ; les comptes d'administration ajoutent une seconde vérification. **Les partenaires.** Si d'autres systèmes se branchent sur le vôtre, chaque clé a ses droits et ses limites, comme le décrit [le guide pour ouvrir une API](" + L.api + ").",
      ] },
      { heading: "Ce que trouve celui qui vole la base", body: [
        "La figure montre la table des comptes, en clair puis hachée et salée.",
      ], visual: 'coffre', after: [
        "**Haché, pas lisible.** Le hachage est une opération mathématique à sens unique, rapide à calculer et difficile à inverser. L'OWASP recommande de hacher les mots de passe avec des algorithmes modernes et lents, comme Argon2id, bcrypt ou PBKDF2. Le serveur ne garde donc pas votre mot de passe : il garde de quoi vérifier que vous le connaissez. **Le sel.** Un sel est une chaîne unique, générée au hasard, ajoutée à chaque mot de passe au moment du hachage : deux clients qui ont choisi « 123456 » n'ont pas la même empreinte, et une liste d'empreintes toutes faites ne sert plus à rien.",
        "**L'essai.** Cliquez sur « mot de passe oublié ». Si l'on vous renvoie votre ancien mot de passe, c'est qu'il est gardé lisible ; une application bien faite ne peut que vous en faire choisir un nouveau. **Les autres secrets.** Les clés des services de paiement, d'envoi de SMS ou de cartographie vivent sur le serveur, hors du code, et se changent quand quelqu'un quitte l'équipe. **Les sauvegardes.** Une copie de la base contient tout ce que contient la base : elle se protège autant, selon [le guide sur les sauvegardes](" + L.sauvegarde + ").",
      ] },
      { heading: "Sécuriser une application existante, en six temps", body: [
        "Le deuxième temps est accentué : essayer les accès.",
      ], visual: 'etapes', after: [
        "**Inventorier, essayer, fermer.** Quelles données l'application garde-t-elle, qui a un accès d'administration, quelles clés existent, quels composants sont installés ? Puis l'essai des accès, écran par écran. Puis on ferme : comptes d'anciens employés ou d'anciens prestataires, clés qui ne servent plus, pages d'administration ouvertes à tous. L'édition 2025 du classement de l'OWASP met au deuxième rang la mauvaise configuration de sécurité, et au troisième les défaillances de la chaîne d'approvisionnement logicielle : les composants que l'application embarque et que personne ne suit.",
        "**Corriger.** Les accès d'abord. Puis les saisies : l'injection SQL est une technique qui glisse du code dans une saisie pour attaquer une application appuyée sur une base de données ; on s'en protège en ne mélangeant jamais ce que tape l'utilisateur et les ordres donnés à la base. Puis les essais de connexion : la limitation de débit sert à contrôler le rythme des demandes, pour qu'on ne puisse pas essayer mille mots de passe en une nuit. **Surveiller.** Le même classement range au neuvième rang les défaillances de journalisation et d'alerte : une tentative que personne n'a notée recommencera. Les mises à jour, elles, se prévoient à l'année, comme le décrit [le guide pour faire vivre une application](" + L.vivre + ").",
      ] },
      { heading: "Six questions à poser à celui qui a fait l'application", body: [
        "Pour chaque question, une réponse qui rassure et une réponse qui inquiète.",
      ], visual: 'questions', after: [
        "**Par écrit.** Posez ces six questions par écrit, à votre prestataire ou à votre équipe, et demandez à voir, pas seulement à entendre : la liste des comptes d'administration, la date de la dernière mise à jour, le résultat de l'essai des accès. **Ce qui doit être à vous.** Le code source, les comptes des magasins d'applications, le nom de domaine, les accès au serveur : au nom de l'entreprise, pas à celui d'une personne. Si ce n'est pas le cas, commencez par là, avec [le guide pour reprendre une application](" + L.reprendre + ").",
        "**Faire vérifier.** Un test d'intrusion est une cyberattaque simulée et autorisée, menée pour évaluer la sécurité d'un système. Il vient après les corrections, pas avant : il n'a pas à trouver ce que l'essai des accès trouve en une heure. Ce qu'il regarde, et ce que doit contenir son rapport, est décrit dans le guide cité plus haut sur l'audit de sécurité et le test d'intrusion.",
      ] },
      { heading: "Six semaines pour une application existante, en 2027", body: [
        "Six semaines dans l'exemple, dont la première pour inventorier et essayer.",
      ], visual: 'calendrier', after: [
        "**L'ordre.** L'inventaire et les essais la première semaine : à la fin, on sait ce qui est grave. On ferme ensuite ce qui ne sert plus, ce qui ne demande aucun code. Les corrections d'accès prennent trois semaines dans l'exemple, parce que chaque demande du serveur est reprise une à une. **La nouvelle version.** Côté mobile, les corrections qui touchent l'application passent par une nouvelle version sur les magasins ; tant que d'anciennes versions circulent, c'est le serveur qui doit refuser ce qu'elles ne devraient plus demander.",
        "**Après.** Les mêmes essais sont rejoués, puis confiés à un tiers. Et la sécurité devient une ligne de l'année : mises à jour mensuelles, revue des comptes à chaque départ, essai des accès à chaque nouvel écran. Une application neuve, elle, se construit ainsi dès le premier jour : les règles d'accès s'écrivent avec les écrans, pas après.",
      ], list: [
        "**Ce que le gérant reçoit** : l'inventaire des données, des comptes et des clés ; le résultat de l'essai des accès, écran par écran ; la liste de ce qui a été fermé ; les corrections, par ordre de gravité ; une nouvelle version publiée ; un rapport qu'un tiers peut relire.",
        "**Ce que l'entreprise ne fait plus** : découvrir un défaut par un client, garder un compte d'administration partagé, laisser une application deux ans sans mise à jour, croire qu'un cadenas dans l'adresse suffit.",
        "**Ce qui est mesuré** : écrans essayés, défauts d'accès trouvés puis corrigés, comptes d'administration nommés, âge de la dernière mise à jour, tentatives refusées inscrites au journal.",
        "**Ce que fait Symloop** : l'inventaire, l'essai des accès, la fermeture des comptes et des clés inutiles, la correction des accès côté serveur, la reprise du stockage des mots de passe et des secrets, les mises à jour et la publication, puis la surveillance et la préparation d'un test par un tiers.",
      ], faq: [
        { q: "Comment sécuriser une application ?", a: "Dans cet ordre : vérifier sur le serveur que chaque demande est permise, garder les mots de passe hachés, sortir les clés du code, mettre à jour le système et les composants, fermer les comptes inutiles, puis journaliser et surveiller. La première étape trouve le plus de défauts." },
        { q: "Comment sécuriser une application mobile ?", a: "Comme une application web, avec trois règles de plus : aucun secret dans le code de l'application, le moins de données possible sur le téléphone, et un serveur qui ne fait jamais confiance à ce que l'application lui envoie. Une application installée se démonte et se lit." },
        { q: "Comment savoir si notre application est sûre ?", a: "Faites trois essais sur la vôtre : changez un numéro dans une adresse, cliquez sur « mot de passe oublié », et demandez la date de la dernière mise à jour. Si une autre commande s'affiche, si l'ancien mot de passe revient ou si la date a deux ans, il y a du travail." },
        { q: "Qu'est-ce que le contrôle d'accès ?", a: "C'est la règle qui empêche un utilisateur d'agir en dehors de ses permissions : voir la commande d'un autre, modifier un prix, ouvrir une page d'administration. Il se vérifie sur le serveur, à chaque demande, et refuse par défaut." },
        { q: "Comment doivent être gardés les mots de passe ?", a: "Hachés, avec un algorithme lent comme Argon2id, bcrypt ou PBKDF2, et un sel propre à chaque compte. Personne, pas même l'administrateur, ne doit pouvoir les lire. Si l'application peut vous renvoyer votre mot de passe, il est mal gardé." },
        { q: "Peut-on mettre une clé dans le code de l'application ?", a: "Non. Une application installée sur un téléphone se démonte, et tout ce qui est écrit dedans se lit. Les clés des services de paiement, de SMS ou de cartographie restent sur le serveur, et l'application passe par lui." },
        { q: "Le HTTPS suffit-il à sécuriser une application ?", a: "Non. Il protège le trajet entre le téléphone et le serveur, ce qui est indispensable. Mais il ne dit rien de ce que le serveur accepte de répondre : une application entièrement en HTTPS peut renvoyer les données d'un autre client." },
        { q: "Faut-il faire un test d'intrusion ?", a: "Oui, après les corrections, et par quelqu'un d'autre que celui qui a écrit l'application. Avant, il coûte du temps pour trouver ce que quelques essais simples montrent déjà. Demandez un rapport classé par gravité, avec la façon de reproduire chaque défaut." },
        { q: "À quelle fréquence mettre à jour une application ?", a: "Chaque mois pour le système et les composants, et sans attendre quand un défaut grave est annoncé. Une application livrée il y a deux ans et jamais mise à jour embarque deux ans de défauts connus de tous." },
        { q: "Combien de temps pour sécuriser une application existante ?", a: "Six semaines dans l'exemple de cette page : une pour inventorier et essayer, une pour fermer, trois pour corriger les accès, puis les données, les mises à jour et la vérification. La durée dépend surtout du nombre d'écrans et de demandes." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Cacher un bouton ne protège rien : une demande s'écrit aussi à la main." },
      { after: 3, text: "Une application sûre à la livraison ne le reste pas toute seule." },
    ],
    cta: { eyebrow: "Dites-nous ce que l'application garde, qui l'a faite et de quand date sa dernière mise à jour : nous commençons par l'inventaire et l'essai des accès", title: "Application qui garde les données de vos clients sans que personne sache comment, défaut signalé par un client, prestataire parti, ou fondateur en France qui veut savoir ce que vaut la plateforme qu'il a fait développer : nous inventorions, nous essayons, nous corrigeons dans l'ordre", body: "Inventaire, essai des accès écran par écran, fermeture des comptes et des clés inutiles, accès vérifiés sur le serveur, mots de passe hachés, secrets hors du code, mises à jour, journal, vérification par un tiers. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi, qui modifie quoi' },
      { href: L.otp, kind: '2027', name: 'Connexion par code SMS ou WhatsApp : coût, fraude, passkeys' },
      { href: L.cybersecurite, kind: '2027', name: 'Audit de sécurité ou test d’intrusion : ce qu’il regarde' },
      { href: L.vivre, kind: '2027', name: 'Faire vivre une application : stores, serveurs, mises à jour' },
    ] },
  },
  en: {
    kind: 'Application security · Algeria · 2027', title: "How to secure a mobile or web application in Algeria (2027): it holds our customers' data and nobody can say whether it is safe, one digit changed in the address shows someone else's order, what to check, fix, and ask the contractor",
    dek: "“Our application holds the names, phone numbers and orders of our customers. A contractor built it, and nobody here can say whether it is safe. A customer showed us that by changing one digit in the address, he could see someone else's order. How do you secure an application, where do you start, and how do you check what was done?” An application's security is not decided on its screens: it is decided on the server, which must check every request. The rest follows an order: access, passwords, secrets, updates.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Application security', 'Access control', 'Password storage', 'Mobile application', 'Penetration test', 'Algeria 2027'],
    intro: [
      "**Short answer.** An application is safe when **the server checks every request**: who are you, and is this yours. That is the most widespread flaw: the 2025 edition of the OWASP ranking keeps it in first place. Start with four checks, in this order: **access** (changing a number in the address must show nothing), **passwords** (hashed, never readable), **secrets** (no key in the code on the phone), **updates** (system, components, application). Then close unused accounts, keep a log, and have the tests replayed by a third party. Six weeks in the example, for an existing application.",
      "This page is for the manager whose application, mobile or web, holds customer data without anyone in the company being able to say how, and for the founder based in France who had a platform built for Algeria and wants to know what they have in their hands. The rules quoted come from public sources: the OWASP ranking of the ten main risks of web applications, 2025 edition, its list for mobile, 2024 edition, its sheet on password storage, and encyclopaedia definitions. The ordering application, its numbers 1042 and 1043, its four accounts and its calendar are a constructed example. This page does not cover legal obligations on personal data: see your adviser. The security of the whole company, computers, network, mail, belongs to [another guide](" + L.cybersecurite + ").",
    ],
    sections: [
      { heading: "Changing one digit in the address: the most widespread flaw", body: [
        "The figure shows the same request, received by a fragile application then by a safe one.",
      ], visual: 'acces', after: [
        "**The name of the flaw.** Access control enforces policy such that users cannot act outside of their intended permissions. The variant in the figure, viewing someone else's account or order by providing its identifier, is called insecure direct object reference. **The most widespread.** OWASP, which publishes a ranking of the ten main risks of web applications, keeps broken access control in first place in its 2025 edition, and writes that 100% of the applications tested were found to have some form of it.",
        "**Where the check is made.** Access control is only effective in trusted server-side code. Hiding a button on the screen protects nothing: a request can be written by hand, without going through the screen. The building rule fits in three words, deny by default: except for what is public, everything is forbidden until a rule allows it. **Who sees what.** Those rules still have to be written, by role, by branch, by customer: that is the subject of [the guide to roles, rights and the audit log](" + L.roles + ").",
      ] },
      { heading: "A safe application, in five layers", body: [
        "The accented layer is the server.",
      ], visual: 'couches', after: [
        "**The phone.** OWASP also keeps a list specific to mobile applications: its 2024 edition puts improper credential usage first, and counts insecure data storage and insecure communication among its ten risks. In plain words: no key or password written in the code, because an installed application can be taken apart and read; and on the device, only what the screen needs. **The path.** TLS is a cryptographic protocol designed to provide secured communications over a network: it is the padlock in the address. It protects the journey, not what arrives at the end: an application can be entirely on HTTPS and return someone else's order.",
        "**The server and the database.** The principle of least privilege says that each component must be able to access only the information and resources necessary for its purpose: the account the application uses to read the database does not need to be able to erase everything. **Signing in.** “Who are you?” is settled by a code sent to the phone or by a password, as in [the guide to sign-in by code](" + L.otp + "); admin accounts add a second check. **Partners.** If other systems connect to yours, each key has its rights and its limits, as described in [the guide to opening an API](" + L.api + ").",
      ] },
      { heading: "What the thief of the database finds", body: [
        "The figure shows the accounts table, in clear then hashed and salted.",
      ], visual: 'coffre', after: [
        "**Hashed, unreadable.** Hashing is a one-directional mathematical operation, quick to calculate yet hard to reverse. OWASP recommends hashing passwords with modern, slow algorithms such as Argon2id, bcrypt or PBKDF2. So the server does not keep your password: it keeps enough to check that you know it. **The salt.** A salt is a unique, randomly generated string added to each password as part of the hashing process: two customers who chose “123456” do not have the same fingerprint, and a ready-made list of fingerprints is no longer of any use.",
        "**The test.** Click on “forgot password”. If your old password is sent back to you, it is kept readable; a well-built application can only make you choose a new one. **The other secrets.** The keys of payment, text-message or mapping services live on the server, out of the code, and are changed when someone leaves the team. **Backups.** A copy of the database contains everything the database contains: it is protected just as much, as in [the guide to backups](" + L.sauvegarde + ").",
      ] },
      { heading: "Securing an existing application, in six steps", body: [
        "The second step is accented: test access.",
      ], visual: 'etapes', after: [
        "**Inventory, test, close.** What data does the application keep, who has admin access, which keys exist, which components are installed? Then the access test, screen by screen. Then closing: accounts of former employees or former contractors, keys no longer used, admin pages open to all. The 2025 edition of the OWASP ranking puts security misconfiguration in second place, and software supply chain failures in third: the components the application carries and nobody tracks.",
        "**Fix.** Access first. Then inputs: SQL injection is a code injection technique used to attack data-driven applications; the protection is never to mix what the user types with the commands given to the database. Then sign-in attempts: rate limiting is used to control the rate of requests, so that nobody can try a thousand passwords in one night. **Watch.** The same ranking puts logging and alerting failures in ninth place: an attempt nobody recorded will be made again. Updates are planned by the year, as described in [the guide to keeping an application alive](" + L.vivre + ").",
      ] },
      { heading: "Six questions to put to whoever built the application", body: [
        "For each question, an answer that reassures and an answer that worries.",
      ], visual: 'questions', after: [
        "**In writing.** Put these six questions in writing, to your contractor or your team, and ask to see, not only to hear: the list of admin accounts, the date of the last update, the result of the access test. **What must be yours.** The source code, the app store accounts, the domain name, access to the server: in the company's name, not a person's. If that is not the case, start there, with [the guide to taking an application back](" + L.reprendre + ").",
        "**Having it checked.** A penetration test is an authorized simulated cyberattack on a computer system, performed to evaluate its security. It comes after the fixes, not before: it should not have to find what the access test finds in an hour. What it looks at, and what its report must contain, is described in the guide quoted above on the security audit and the penetration test.",
      ] },
      { heading: "Six weeks for an existing application, in 2027", body: [
        "Six weeks in the example, the first to inventory and test.",
      ], visual: 'calendrier', after: [
        "**The order.** Inventory and tests in the first week: at the end, you know what is serious. What is no longer used is then closed, which needs no code. Access fixes take three weeks in the example, because each request to the server is gone over one by one. **The new version.** On mobile, fixes that touch the application go through a new version on the stores; as long as old versions are in circulation, it is the server that must refuse what they should no longer ask for.",
        "**Afterwards.** The same tests are replayed, then entrusted to a third party. And security becomes a line of the year: monthly updates, a review of accounts at each departure, an access test for each new screen. A new application is built this way from the first day: access rules are written with the screens, not after.",
      ], list: [
        "**What the manager receives**: the inventory of data, accounts and keys; the result of the access test, screen by screen; the list of what was closed; the fixes, in order of severity; a new version published; a report a third party can read.",
        "**What the company no longer does**: learn of a flaw from a customer, keep a shared admin account, leave an application two years without an update, believe that a padlock in the address is enough.",
        "**What is measured**: screens tested, access flaws found then fixed, named admin accounts, age of the last update, refused attempts written to the log.",
        "**What Symloop does**: the inventory, the access test, closing unused accounts and keys, fixing access on the server, redoing the storage of passwords and secrets, updates and publication, then monitoring and preparing a test by a third party.",
      ], faq: [
        { q: "How do you secure an application?", a: "In this order: check on the server that every request is allowed, keep passwords hashed, take the keys out of the code, update the system and components, close unused accounts, then log and watch. The first step finds the most flaws." },
        { q: "How do you secure a mobile application?", a: "Like a web application, with three more rules: no secret in the application's code, as little data as possible on the phone, and a server that never trusts what the application sends it. An installed application can be taken apart and read." },
        { q: "How do we know whether our application is safe?", a: "Run three tests on your own: change a number in an address, click on “forgot password”, and ask for the date of the last update. If another order shows, if the old password comes back or if the date is two years old, there is work to do." },
        { q: "What is access control?", a: "It is the rule that stops a user acting outside their permissions: seeing someone else's order, changing a price, opening an admin page. It is checked on the server, on every request, and denies by default." },
        { q: "How should passwords be kept?", a: "Hashed, with a slow algorithm such as Argon2id, bcrypt or PBKDF2, and a salt of its own for each account. Nobody, not even the administrator, should be able to read them. If the application can send you your password, it is badly kept." },
        { q: "Can a key be put in the application's code?", a: "No. An application installed on a phone can be taken apart, and everything written in it can be read. The keys of payment, text-message or mapping services stay on the server, and the application goes through it." },
        { q: "Is HTTPS enough to secure an application?", a: "No. It protects the journey between the phone and the server, which is essential. But it says nothing about what the server agrees to answer: an application entirely on HTTPS can return another customer's data." },
        { q: "Do we need a penetration test?", a: "Yes, after the fixes, and by someone other than the person who wrote the application. Before, it spends time finding what a few simple tests already show. Ask for a report ranked by severity, with the way to reproduce each flaw." },
        { q: "How often should an application be updated?", a: "Every month for the system and components, and without waiting when a serious flaw is announced. An application delivered two years ago and never updated carries two years of flaws known to everyone." },
        { q: "How long does it take to secure an existing application?", a: "Six weeks in this page's example: one to inventory and test, one to close, three to fix access, then the data, the updates and the check. The duration depends mostly on the number of screens and requests." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Hiding a button protects nothing: a request can also be written by hand." },
      { after: 3, text: "An application that is safe at delivery does not stay safe by itself." },
    ],
    cta: { eyebrow: "Tell us what the application keeps, who built it and when it was last updated: we start with the inventory and the access test", title: "An application holding your customers' data without anyone knowing how, a flaw reported by a customer, a contractor who has left, or a founder in France who wants to know what the platform they had built is worth: we inventory, we test, we fix in order", body: "Inventory, access test screen by screen, closing unused accounts and keys, access checked on the server, passwords hashed, secrets out of the code, updates, a log, a check by a third party. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.roles, kind: '2027', name: 'Roles, rights and the audit log: who sees what, who changes what' },
      { href: L.otp, kind: '2027', name: 'Sign-in by SMS or WhatsApp code: cost, fraud, passkeys' },
      { href: L.cybersecurite, kind: '2027', name: 'Security audit or penetration test: what it looks at' },
      { href: L.vivre, kind: '2027', name: 'Keeping an application alive: stores, servers, updates' },
    ] },
  },
  ar: {
    kind: 'أمن التطبيقات · الجزائر · 2027', title: "كيف يُؤمَّن تطبيق هاتف أو ويب في الجزائر (2027): يحفظ بيانات زبائننا ولا أحد يعرف هل هو آمن، رقم واحد يتغيّر في العنوان فتظهر طلبية زبون آخر، ما يُراجَع، ما يُصحَّح، وما يُسأل عنه مقدّم الخدمة",
    dek: "«تطبيقنا يحفظ أسماء زبائننا وهواتفهم وطلبياتهم. أنجزه مقدّم خدمة، ولا أحد عندنا يستطيع القول هل هو آمن. زبون أرانا أنه بتغيير رقم واحد في العنوان يرى طلبية زبون آخر. كيف يُؤمَّن تطبيق، من أين نبدأ، وكيف نتحقق مما أُنجز؟» أمن التطبيق لا يُحسم في شاشاته: يُحسم على الخادم، الذي عليه أن يراجع كل طلب. والباقي يتبع ترتيباً: الصلاحيات، كلمات المرور، الأسرار، ثم التحديثات.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['أمن التطبيقات', 'التحكم في الوصول', 'تخزين كلمات المرور', 'تطبيق الهاتف', 'اختبار الاختراق', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** التطبيق آمن حين **يراجع الخادم كل طلب**: من أنتم، وهل هذا لكم. وهو العيب الأكثر انتشاراً: طبعة 2025 من تصنيف " + I('OWASP') + " تبقيه في المرتبة الأولى. ابدؤوا بأربع مراجعات، بهذا الترتيب: **الصلاحيات** (تغيير رقم في العنوان يجب ألّا يُظهر شيئاً)، **كلمات المرور** (مجزَّأة، لا تُقرأ أبداً)، **الأسرار** (لا مفتاح في شيفرة الهاتف)، و**التحديثات** (النظام، المكوّنات، والتطبيق). ثم أغلقوا الحسابات غير المستعملة، امسكوا سجلاً، ودعوا طرفاً ثالثاً يعيد التجارب. ستة أسابيع في المثال، لتطبيق موجود.",
      "هذه الصفحة موجَّهة إلى المسيّر الذي يحفظ تطبيقه، هاتفاً أو ويب، بيانات الزبائن دون أن يستطيع أحد في المؤسسة القول كيف، وإلى المؤسس المقيم في فرنسا الذي كلّف بتطوير منصة للجزائر ويريد أن يعرف ما بين يديه. القواعد المذكورة آتية من مصادر علنية: تصنيف " + I('OWASP') + " لأهم عشرة مخاطر في تطبيقات الويب، طبعة 2025، قائمته للهاتف، طبعة 2024، بطاقته عن تخزين كلمات المرور، وتعريفات موسوعية. تطبيق الطلبيات ورقماه 1042 و1043 وحساباته الأربعة ورزنامته مثال مركَّب. هذه الصفحة لا تتناول الواجبات القانونية حول المعطيات الشخصية: راجعوا مستشاركم. وأمن المؤسسة كلها، الحواسيب والشبكة والبريد، موضوع [دليل آخر](" + L.cybersecurite + ").",
    ],
    sections: [
      { heading: "تغيير رقم واحد في العنوان: العيب الأكثر انتشاراً", body: [
        "الشكل يُظهر الطلب نفسه، يستقبله تطبيق هشّ ثم تطبيق آمن.",
      ], visual: 'acces', after: [
        "**اسم العيب.** التحكم في الوصول يطبّق قاعدة تمنع المستعملين من التصرف خارج الصلاحيات المخصَّصة لهم. والصورة التي في الشكل، رؤية حساب أو طلبية شخص آخر بتقديم معرّفها، تسمّى المرجع المباشر غير الآمن. **الأكثر انتشاراً.** " + I('OWASP') + "، التي تنشر تصنيفاً لأهم عشرة مخاطر في تطبيقات الويب، تبقي خلل التحكم في الوصول في المرتبة الأولى من طبعة 2025، وتكتب أن " + I('100%') + " من التطبيقات المختبَرة كان فيها شكل منه.",
        "**أين تتم المراجعة.** التحكم في الوصول لا يكون فعّالاً إلا في شيفرة موثوقة، من جهة الخادم. وإخفاء زر في الشاشة لا يحمي شيئاً: الطلب يمكن أن يُكتب باليد، دون المرور بالشاشة. وقاعدة البناء تسعها كلمتان، الرفض أصلاً: ما عدا ما هو عمومي، كل شيء ممنوع ما لم تسمح به قاعدة. **من يرى ماذا.** ويبقى أن تُكتب هذه القواعد، حسب الدور، حسب الوكالة، وحسب الزبون: وهو موضوع [دليل الأدوار والصلاحيات وسجل التدقيق](" + L.roles + ").",
      ] },
      { heading: "تطبيق آمن، في خمس طبقات", body: [
        "الطبقة المبرزة هي الخادم.",
      ], visual: 'couches', after: [
        "**الهاتف.** " + I('OWASP') + " تمسك كذلك قائمة خاصة بتطبيقات الهاتف: طبعتها لسنة 2024 تضع في المقدمة سوء استعمال بيانات الاعتماد، وتعدّ بين مخاطرها العشرة التخزين غير الآمن للبيانات والاتصال غير الآمن. وبكلام واضح: لا مفتاح ولا كلمة مرور مكتوبة في الشيفرة، لأن التطبيق المثبَّت يُفكَّك ويُقرأ؛ وعلى الجهاز، فقط ما تحتاجه الشاشة. **الطريق.** " + I('TLS') + " بروتوكول تشفير مصمَّم لتأمين الاتصالات عبر شبكة: هو القفل الذي في العنوان. يحمي الرحلة، لا ما يصل في آخرها: التطبيق قد يكون كله عبر " + I('HTTPS') + " ويعيد طلبية زبون آخر.",
        "**الخادم والقاعدة.** مبدأ أقل الصلاحيات يقضي بأن يصل كل مكوّن إلى المعلومات والموارد اللازمة لمهمته فقط: الحساب الذي يستعمله التطبيق لقراءة القاعدة لا يحتاج أن يستطيع محو كل شيء. **الدخول.** «من أنتم؟» يُحسم برمز يُرسَل إلى الهاتف أو بكلمة مرور، حسب [دليل الدخول بالرمز](" + L.otp + ")؛ وحسابات الإدارة تضيف تحققاً ثانياً. **الشركاء.** وإذا كانت أنظمة أخرى ترتبط بنظامكم، فلكل مفتاح صلاحياته وحدوده، كما يصفه [دليل فتح واجهة برمجة](" + L.api + ").",
      ] },
      { heading: "ما يجده من يسرق القاعدة", body: [
        "الشكل يُظهر جدول الحسابات، كما هو ثم مجزَّأً ومملَّحاً.",
      ], visual: 'coffre', after: [
        "**مجزَّأة، لا تُقرأ.** التجزئة عملية رياضية في اتجاه واحد، سريعة الحساب وصعبة العكس. و" + I('OWASP') + " توصي بتجزئة كلمات المرور بخوارزميات حديثة وبطيئة، مثل " + I('Argon2id') + " أو " + I('bcrypt') + " أو " + I('PBKDF2') + ". فالخادم إذن لا يحفظ كلمة مروركم: يحفظ ما يكفي للتحقق من أنكم تعرفونها. **الملح.** الملح سلسلة فريدة، مولَّدة عشوائياً، تُضاف إلى كل كلمة مرور عند التجزئة: زبونان اختارا «" + I('123456') + "» ليست لهما البصمة نفسها، وقائمة بصمات جاهزة لم تعد تنفع في شيء.",
        "**التجربة.** انقروا على «نسيت كلمة المرور». إذا أُرسلت إليكم كلمتكم القديمة، فهي محفوظة مقروءة؛ والتطبيق المحكم لا يستطيع إلا أن يجعلكم تختارون كلمة جديدة. **الأسرار الأخرى.** مفاتيح خدمات الدفع، الرسائل القصيرة، أو الخرائط تعيش على الخادم، خارج الشيفرة، وتُغيَّر حين يغادر أحد الفريق. **النسخ الاحتياطية.** نسخة القاعدة تحتوي كل ما تحتويه القاعدة: تُحمى بالقدر نفسه، حسب [دليل النسخ الاحتياطية](" + L.sauvegarde + ").",
      ] },
      { heading: "تأمين تطبيق موجود، في ست مراحل", body: [
        "المرحلة الثانية مبرزة: تجربة الصلاحيات.",
      ], visual: 'etapes', after: [
        "**الجرد، التجربة، والإغلاق.** أي بيانات يحفظ التطبيق، من له دخول الإدارة، أي مفاتيح موجودة، وأي مكوّنات مثبَّتة؟ ثم تجربة الصلاحيات، شاشة بعد شاشة. ثم الإغلاق: حسابات عمّال سابقين أو مقدّمي خدمة سابقين، مفاتيح لم تعد تُستعمل، وصفحات إدارة مفتوحة للجميع. وطبعة 2025 من تصنيف " + I('OWASP') + " تضع في المرتبة الثانية سوء إعداد الأمن، وفي الثالثة إخفاقات سلسلة توريد البرمجيات: المكوّنات التي يحملها التطبيق ولا يتابعها أحد.",
        "**التصحيح.** الصلاحيات أولاً. ثم الإدخالات: حقن " + I('SQL') + " تقنية تدسّ شيفرة في إدخال لمهاجمة تطبيق يعتمد على قاعدة بيانات؛ والحماية ألّا يُخلط أبداً ما يكتبه المستعمل بالأوامر المعطاة للقاعدة. ثم محاولات الدخول: تحديد الوتيرة يُستعمل لضبط إيقاع الطلبات، حتى لا تُجرَّب ألف كلمة مرور في ليلة. **المراقبة.** والتصنيف نفسه يضع في المرتبة التاسعة إخفاقات التسجيل والتنبيه: المحاولة التي لم يسجّلها أحد ستُعاد. والتحديثات تُبرمَج على السنة، كما يصفه [دليل إبقاء التطبيق حياً](" + L.vivre + ").",
      ] },
      { heading: "ستة أسئلة تُطرح على من أنجز التطبيق", body: [
        "لكل سؤال، جواب يُطمئن وجواب يُقلق.",
      ], visual: 'questions', after: [
        "**كتابياً.** اطرحوا هذه الأسئلة الستة كتابياً، على مقدّم الخدمة أو على فريقكم، واطلبوا أن تروا، لا أن تسمعوا فقط: قائمة حسابات الإدارة، تاريخ آخر تحديث، ونتيجة تجربة الصلاحيات. **ما يجب أن يكون لكم.** الشيفرة المصدرية، حسابات متاجر التطبيقات، اسم النطاق، والدخول إلى الخادم: باسم المؤسسة، لا باسم شخص. وإذا لم يكن الأمر كذلك، فابدؤوا من هنا، مع [دليل استرجاع تطبيق](" + L.reprendre + ").",
        "**المراجعة من طرف آخر.** اختبار الاختراق هجوم إلكتروني محاكى ومرخَّص له، يُنجز لتقييم أمن نظام. ويأتي بعد التصحيحات، لا قبلها: ليس عليه أن يجد ما تجده تجربة الصلاحيات في ساعة. وما ينظر فيه، وما يجب أن يحتويه تقريره، موصوف في الدليل المذكور أعلاه عن تدقيق الأمن واختبار الاختراق.",
      ] },
      { heading: "ستة أسابيع لتطبيق موجود، سنة 2027", body: [
        "ستة أسابيع في المثال، والأول منها للجرد والتجربة.",
      ], visual: 'calendrier', after: [
        "**الترتيب.** الجرد والتجارب في الأسبوع الأول: وفي آخره، يُعرف ما هو خطير. ثم يُغلق ما لم يعد يُستعمل، وهذا لا يتطلب أي شيفرة. وتصحيح الصلاحيات يأخذ ثلاثة أسابيع في المثال، لأن كل طلب للخادم يُراجَع واحداً واحداً. **النسخة الجديدة.** في الهاتف، التصحيحات التي تمسّ التطبيق تمر بنسخة جديدة على المتاجر؛ وما دامت نسخ قديمة متداولة، فالخادم هو الذي يجب أن يرفض ما لم يعد لها أن تطلبه.",
        "**بعد ذلك.** التجارب نفسها تُعاد، ثم تُسنَد إلى طرف ثالث. ويصير الأمن سطراً من السنة: تحديثات شهرية، مراجعة الحسابات عند كل مغادرة، وتجربة الصلاحيات عند كل شاشة جديدة. والتطبيق الجديد يُبنى هكذا من اليوم الأول: قواعد الوصول تُكتب مع الشاشات، لا بعدها.",
      ], list: [
        "**ما يستلمه المسيّر**: جرد البيانات والحسابات والمفاتيح؛ نتيجة تجربة الصلاحيات، شاشة بعد شاشة؛ قائمة ما أُغلق؛ التصحيحات، حسب الخطورة؛ نسخة جديدة منشورة؛ وتقرير يستطيع طرف ثالث قراءته.",
        "**ما لم تعد المؤسسة تفعله**: اكتشاف عيب عن طريق زبون، الاحتفاظ بحساب إدارة مشترك، ترك تطبيق سنتين دون تحديث، والاعتقاد أن قفلاً في العنوان يكفي.",
        "**ما يُقاس**: الشاشات المجرَّبة، عيوب الصلاحيات الموجودة ثم المصحَّحة، حسابات الإدارة المسمّاة، عمر آخر تحديث، والمحاولات المرفوضة المسجَّلة.",
        "**ما تفعله Symloop**: الجرد، تجربة الصلاحيات، إغلاق الحسابات والمفاتيح غير المستعملة، تصحيح الصلاحيات من جهة الخادم، إعادة تخزين كلمات المرور والأسرار، التحديثات والنشر، ثم المراقبة وتحضير اختبار من طرف ثالث.",
      ], faq: [
        { q: "كيف يُؤمَّن تطبيق؟", a: "بهذا الترتيب: التحقق على الخادم من أن كل طلب مسموح، حفظ كلمات المرور مجزَّأة، إخراج المفاتيح من الشيفرة، تحديث النظام والمكوّنات، إغلاق الحسابات غير المستعملة، ثم التسجيل والمراقبة. والمرحلة الأولى تجد أكثر العيوب." },
        { q: "كيف يُؤمَّن تطبيق هاتف؟", a: "مثل تطبيق ويب، مع ثلاث قواعد إضافية: لا سرّ في شيفرة التطبيق، أقل ما يمكن من البيانات على الهاتف، وخادم لا يثق أبداً في ما يرسله التطبيق. والتطبيق المثبَّت يُفكَّك ويُقرأ." },
        { q: "كيف نعرف هل تطبيقنا آمن؟", a: "أنجزوا ثلاث تجارب على تطبيقكم: غيّروا رقماً في عنوان، انقروا على «نسيت كلمة المرور»، واسألوا عن تاريخ آخر تحديث. إذا ظهرت طلبية أخرى، أو عادت الكلمة القديمة، أو كان التاريخ قبل سنتين، فهناك عمل." },
        { q: "ما هو التحكم في الوصول؟", a: "هو القاعدة التي تمنع المستعمل من التصرف خارج صلاحياته: رؤية طلبية شخص آخر، تغيير سعر، أو فتح صفحة إدارة. ويُراجَع على الخادم، عند كل طلب، والأصل فيه الرفض." },
        { q: "كيف يجب أن تُحفظ كلمات المرور؟", a: "مجزَّأة، بخوارزمية بطيئة مثل " + I('Argon2id') + " أو " + I('bcrypt') + " أو " + I('PBKDF2') + "، وبملح خاص بكل حساب. ولا أحد، ولا المسؤول نفسه، يجب أن يستطيع قراءتها. وإذا استطاع التطبيق أن يرسل لكم كلمتكم، فهي محفوظة بطريقة سيئة." },
        { q: "هل يمكن وضع مفتاح في شيفرة التطبيق؟", a: "لا. التطبيق المثبَّت على الهاتف يُفكَّك، وكل ما كُتب فيه يُقرأ. ومفاتيح خدمات الدفع والرسائل القصيرة والخرائط تبقى على الخادم، والتطبيق يمر به." },
        { q: "هل يكفي القفل في العنوان لتأمين تطبيق؟", a: "لا. هو يحمي الرحلة بين الهاتف والخادم، وهذا ضروري. لكنه لا يقول شيئاً عما يقبل الخادم أن يجيب به: تطبيق كله مشفَّر في الطريق قد يعيد بيانات زبون آخر." },
        { q: "هل يلزم اختبار اختراق؟", a: "نعم، بعد التصحيحات، ومن طرف غير الذي كتب التطبيق. وقبلها، يصرف وقتاً في إيجاد ما تُظهره بضع تجارب بسيطة. اطلبوا تقريراً مرتَّباً حسب الخطورة، مع طريقة إعادة كل عيب." },
        { q: "كم مرة يُحدَّث التطبيق؟", a: "كل شهر للنظام والمكوّنات، ودون انتظار حين يُعلن عن عيب خطير. والتطبيق المسلَّم قبل سنتين ولم يُحدَّث أبداً يحمل سنتين من العيوب المعروفة للجميع." },
        { q: "كم يلزم من وقت لتأمين تطبيق موجود؟", a: "ستة أسابيع في مثال هذه الصفحة: أسبوع للجرد والتجربة، أسبوع للإغلاق، ثلاثة لتصحيح الصلاحيات، ثم البيانات، التحديثات، والمراجعة. والمدة تتوقف خاصة على عدد الشاشات والطلبات." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "إخفاء زر لا يحمي شيئاً: الطلب يُكتب باليد كذلك." },
      { after: 3, text: "التطبيق الآمن يوم التسليم لا يبقى آمناً وحده." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا يحفظ التطبيق، من أنجزه، ومتى كان آخر تحديث له: نبدأ بالجرد وتجربة الصلاحيات", title: "تطبيق يحفظ بيانات زبائنكم دون أن يعرف أحد كيف، عيب نبّه إليه زبون، مقدّم خدمة غادر، أو مؤسس في فرنسا يريد أن يعرف قيمة المنصة التي كلّف بتطويرها: نجرد، نجرّب، ونصحّح بالترتيب", body: "جرد، تجربة الصلاحيات شاشة بعد شاشة، إغلاق الحسابات والمفاتيح غير المستعملة، صلاحيات تُراجَع على الخادم، كلمات مرور مجزَّأة، أسرار خارج الشيفرة، تحديثات، سجل، ومراجعة من طرف ثالث. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.roles, kind: '2027', name: 'الأدوار والصلاحيات وسجل التدقيق: من يرى ماذا، ومن يغيّر ماذا' },
      { href: L.otp, kind: '2027', name: 'الدخول برمز عبر رسالة قصيرة أو واتساب: الكلفة والاحتيال' },
      { href: L.cybersecurite, kind: '2027', name: 'تدقيق الأمن أم اختبار الاختراق: ما ينظر فيه' },
      { href: L.vivre, kind: '2027', name: 'إبقاء التطبيق حياً: المتاجر، الخوادم، والتحديثات' },
    ] },
  },
};

const KEYWORDS = "comment sécuriser une application 2027, comment sécuriser une application mobile, sécurité application mobile algérie, sécurité application web algérie, contrôle d'accès application, stockage des mots de passe, test d'intrusion application, audit sécurité application algérie, how to secure a mobile application, application security algeria 2027, broken access control, كيف يُؤمَّن تطبيق 2027, أمن تطبيقات الهاتف في الجزائر, حماية بيانات الزبائن في التطبيق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
