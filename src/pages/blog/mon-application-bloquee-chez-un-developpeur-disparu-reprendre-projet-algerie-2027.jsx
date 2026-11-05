import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027.mjs';

const SLUG = 'mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027';
const FIGURES = ['steps', 'assets', 'kit', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · Projet bloqué', title: "Mon application est bloquée chez un développeur qui a disparu : reprendre le projet en 2027 (Algérie).",
    dek: "Le freelance ou l'agence qui a construit votre application ne répond plus. Les comptes Google Play et App Store sont à son nom, le serveur aussi, vous n'avez jamais vu le code, et l'application tourne encore mais plus personne ne peut la mettre à jour. Vous avez payé, parfois cher. Ce qui se récupère et comment, l'audit qui décide entre garder, réparer et réécrire, pourquoi 2027 rend la reprise urgente, le kit de propriété pour que ça n'arrive plus, et les six semaines de la reprise.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Reprise de projet', 'Audit de code', 'Propriété du code', 'Google Play', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** La reprise se fait en quatre étapes et six semaines : **l'inventaire** de ce que vous avez et de ce qui est à votre nom ; **la récupération**, actif par actif, des comptes stores, du domaine, de l'hébergement, du code, des données et des clés, avec une mise en demeure si le contrat le permet ; **l'audit** du code et des données, qui décide ce qui se garde, se répare ou se réécrit ; **la remise en route**, accès verrouillés, dépendances à jour, stores repris, documentation d'une page. **La décision de réécrire se prend en semaine quatre, sur l'audit, pas en semaine zéro sur la colère.** Et 2027 rend la reprise urgente : les stores retirent les applications non mises à jour, et la vérification mondiale des développeurs Android ferme la porte à l'APK distribué à la main.",
      "Ce guide répond à des messages que nous recevons chaque mois, d'entreprises algériennes et de fondateurs de la diaspora, et il complète [peut-on connaître le prix total avant de commencer](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/) et [freelance, agence ou atelier d'ingénierie](/blog/freelance-vs-agence-vs-atelier-ingenierie-algerie-2026/), écrits avant le projet. Ici, le projet a déjà mal tourné.",
    ],
    sections: [
      { heading: 'Pourquoi 2027 rend la reprise urgente', body: [
        "Une application abandonnée pouvait, jusqu'ici, tourner des années sans que personne n'y touche. Trois choses changent en 2027.",
      ], list: [
        "**Les stores retirent les applications non mises à jour.** Google Play et l'App Store exigent chaque année que les applications ciblent une version récente du système ; une application figée cesse d'être proposée aux nouveaux utilisateurs, puis disparaît des résultats. Si le compte est au nom du prestataire disparu, personne ne peut la mettre à jour.",
        "**La vérification mondiale des développeurs Android.** Google a annoncé qu'à partir de 2027, les applications installées sur les appareils Android certifiés devront provenir d'un développeur identifié, y compris hors Play Store. La solution de secours « on envoie l'APK sur WhatsApp » a une date de fin.",
        "**Le paiement et les données.** Avec le projet de loi de finances 2027 qui pousse vers l'encaissement électronique et la loi 18-07 sur les données personnelles, une application dont vous ne contrôlez ni le paiement ni la base de données est un risque juridique, pas seulement technique.",
      ], after: [
        "Nous avons détaillé ces échéances dans [les sept décisions d'une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/). Pour une application déjà construite, elles se résument en une phrase : ce qui n'est pas à votre nom ne vous appartient pas, et ce qui n'est pas mis à jour disparaît.",
      ] },
      { heading: "Les quatre étapes d'une reprise", body: [
        "L'ordre compte. Les entreprises qui appellent un nouveau développeur en lui demandant de « tout refaire » sautent les deux premières étapes et paient un projet entier pour un code qui aurait peut-être tenu.",
      ], visual: 'steps', after: [
        "**L'inventaire** tient sur une page : les comptes Google Play et App Store, le nom de domaine, l'hébergeur et les serveurs, le dépôt de code, la base de données, les services tiers, SMS, paiement, cartes, notifications, et pour chacun, qui détient l'accès et à quel nom il est enregistré. Relisez le contrat et les factures : ce qui est écrit sur la propriété du code et sur la remise des accès décide de la suite. **La récupération** se fait actif par actif, par les procédures des plateformes elles-mêmes, et par une mise en demeure écrite au prestataire lorsque le contrat le permet ; le détail est dans la figure suivante. **L'audit** regarde le code récupéré avec trois questions : est-il lisible par un autre développeur, ses dépendances sont-elles à jour et sans faille connue, les données sont-elles exportables et saines ? **La remise en route** verrouille tout à votre nom, met à jour, reprend les publications sur les stores, teste une restauration de sauvegarde et écrit la documentation d'une page.",
      ] },
      { heading: 'Ce qui se récupère, et comment', body: [
        "La question « est-ce que je peux récupérer mon application » a six réponses, une par actif. La colonne de gauche prend une journée ; la colonne de droite, des semaines.",
      ], visual: 'assets', after: [
        "**Les comptes stores.** S'ils sont à votre nom, changez les mots de passe et activez la double authentification sur votre propre téléphone. S'ils sont au nom du prestataire, Google Play et l'App Store ont une procédure de transfert d'application vers un autre compte, qui exige la coopération du titulaire ; sans elle, l'application se republie sous votre compte, avec un nouvel identifiant, et vos utilisateurs doivent la réinstaller. **Le domaine** se vérifie chez le registrar : le titulaire doit être vous ; sinon, exigez le transfert par écrit, et préparez un nouveau domaine avec redirection si le prestataire ne répond pas. **L'hébergement** : si vous avez les accès, exportez immédiatement une sauvegarde complète ; sinon, l'hébergeur peut parfois fournir un export de la base au titulaire du contrat. **Le code** : vérifiez que le dépôt contient la dernière version déployée, pas une version d'il y a six mois ; s'il n'y a pas de dépôt, le build en production se récupère et s'analyse, mais il ne remplace pas le code source. **Les données de vos clients vous appartiennent**, et la loi 18-07 vous rend responsable de leur protection ; l'export est exigible. **Les clés** des services tiers, SMS, paiement CIB/Edahabia, cartes, se révoquent et se recréent toutes, à votre nom, sans exception : une clé laissée au prestataire est une porte ouverte.",
      ] },
      { heading: "L'audit : garder, réparer ou réécrire", body: [
        "C'est l'étape que la colère fait sauter. Trois cas, décidés sur le code récupéré, avec un prix total écrit pour chacun.",
      ], list: [
        "**Garder.** Le code est lisible, les dépendances se mettent à jour sans casser, les données sont saines. On reprend la maintenance, on verrouille, on publie une mise à jour. C'est plus fréquent qu'on ne le croit quand le prestataire était compétent mais indisponible.",
        "**Réparer.** Le code tient mais une partie est fragile : paiement bricolé, hors-ligne absent, base sans sauvegarde. On remplace cette partie, on garde le reste. Le prix se compare à la partie, pas au projet.",
        "**Réécrire.** Le code est illisible, ou construit sur une technologie que plus personne ne maintient, ou les données sont irrécupérables. On repart du cadrage, en reprenant les données et les utilisateurs. C'est la seule situation où le projet entier est justifié, et elle se constate, elle ne se décrète pas.",
      ], after: [
        "Un audit se livre par écrit : ce qui a été regardé, ce qui a été trouvé, les trois options avec leur prix total, et une recommandation. Un prestataire qui recommande la réécriture sans avoir lu le code vous vend un projet, pas une reprise.",
      ] },
      { heading: "Le kit de propriété, pour que ça n'arrive plus", body: [
        "Que vous gardiez ou réécriviez, la remise en route installe cinq couches qui font qu'aucun prestataire, y compris nous, ne peut plus bloquer votre application.",
      ], visual: 'kit', after: [
        "**Les comptes** stores, domaine et hébergeur sont à votre nom, avec la double authentification sur votre téléphone ; le prestataire est invité avec un rôle, jamais propriétaire. **Le code** vit dans un dépôt à votre nom, où le prestataire est invité et d'où il se révoque en un clic ; il est livré à chaque étape, pas à la fin. **L'infrastructure** : les accès administrateur des serveurs et de la base sont chez vous, les clés des services tiers dans un coffre à votre nom, et les sauvegardes ont été restaurées au moins une fois, parce qu'une sauvegarde jamais testée n'existe pas. **Le contrat** écrit la propriété du code, cédée à chaque paiement, et une clause de réversibilité : accès et documentation remis sous quinze jours à la demande. **La documentation** tient sur une page, où est quoi et comment déployer, lisible par un autre développeur en une heure. C'est ce que nous livrons sur chaque projet, et c'est ce qu'il faut exiger de quiconque ; nous l'avons expliqué dans [comment choisir un développeur en Algérie](/blog/comment-choisir-developpeur-algerie/).",
      ] },
      { heading: 'Les six semaines de la reprise', body: [
        "Six semaines, dont quatre avant la décision la plus chère.",
      ], visual: 'timeline', after: [
        "**Semaine 1, l'inventaire**, avec vous : la liste, le contrat, les factures, les captures d'écran de ce qui existe. **Semaines 2 et 3, la récupération**, en parallèle sur tous les actifs, avec la mise en demeure envoyée le premier jour si le prestataire ne répond pas ; chaque jour sans accès au compte store est un jour de risque de retrait. **Semaines 3 et 4, l'audit** du code et des données récupérés, par écrit. **Semaine 4, la décision**, sur l'audit, avec trois prix totaux. **Semaines 5 et 6, la remise en route** : tout à votre nom, dépendances à jour, publication sur les stores reprise, restauration testée, documentation. Si la décision est de réécrire, les semaines 5 et 6 deviennent le cadrage du nouveau projet, avec les données et les utilisateurs repris.",
        "Une reprise, inventaire, récupération, audit, remise en route, se situe en catégorie 1 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/) ; la réparation ou la réécriture, si l'audit les justifie, se chiffrent séparément, par écrit.",
      ] },
      { heading: 'Les erreurs que nous voyons dans les reprises', body: [], list: [
        "**Demander « tout refaire » au premier appel.** Un projet entier payé pour un code qui aurait tenu. Inventaire, récupération, audit, puis décision.",
        "**Attendre que le prestataire réponde.** Les stores n'attendent pas. La mise en demeure part le premier jour, la récupération par les plateformes en parallèle.",
        "**Laisser une seule clé à l'ancien prestataire.** SMS, paiement, serveur : une clé oubliée est une porte ouverte. Toutes révoquées, toutes recréées.",
        "**Republier sous un nouveau compte sans prévenir les utilisateurs.** Ils gardent l'ancienne application, qui meurt. Message dans l'ancienne version, migration des données, redirection.",
        "**Reprendre sans sauvegarde testée.** Le premier incident après la reprise efface tout. Une restauration réelle avant de toucher à quoi que ce soit.",
        "**Refaire la même erreur avec le nouveau prestataire.** Comptes à son nom, code livré à la fin. Le kit de propriété s'installe le premier jour de la reprise.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Mon développeur a disparu avec le code, que faire en premier ?", a: "L'inventaire : listez les comptes stores, le domaine, l'hébergeur, le dépôt de code, la base et les services tiers, et notez pour chacun à quel nom il est enregistré. Relisez le contrat. Puis la récupération actif par actif, avec une mise en demeure écrite le premier jour si le contrat le permet." },
        { q: "Peut-on récupérer une application publiée sous le compte Google Play du prestataire ?", a: "Google Play et l'App Store ont une procédure de transfert vers un autre compte, qui exige la coopération du titulaire. Sans elle, l'application se republie sous votre compte avec un nouvel identifiant, et vos utilisateurs doivent la réinstaller, avec un message dans l'ancienne version et une migration des données." },
        { q: "Les données de mes clients m'appartiennent-elles ?", a: "Oui. Les données de vos clients vous appartiennent et la loi 18-07 vous rend responsable de leur protection. L'export est exigible du prestataire ou de l'hébergeur, et il est la première chose à sauvegarder une fois l'accès récupéré." },
        { q: "Faut-il tout réécrire ?", a: "Seulement si l'audit le constate : code illisible, technologie plus maintenue ou données irrécupérables. Dans les autres cas, on garde ou on répare la partie fragile. La décision se prend en semaine quatre, sur l'audit écrit, avec trois prix totaux, pas au premier appel." },
        { q: "Pourquoi est-ce plus urgent en 2027 ?", a: "Parce que les stores retirent les applications qui ne ciblent pas une version récente du système, que la vérification mondiale des développeurs Android annoncée pour 2027 ferme la porte à l'APK distribué à la main, et que le paiement et les données personnelles sont désormais encadrés. Une application que personne ne peut mettre à jour a une date de fin." },
        { q: "Comment éviter que ça se reproduise ?", a: "Par le kit de propriété : comptes stores, domaine et hébergeur à votre nom avec double authentification, dépôt de code à votre nom où le prestataire est invité, accès et clés chez vous, contrat avec cession du code à chaque paiement et clause de réversibilité, documentation d'une page. Installé le premier jour de la reprise." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La décision de réécrire se prend en semaine quatre, sur l'audit, pas en semaine zéro sur la colère." },
      { after: 4, text: "Rien d'essentiel ne doit exister uniquement sur l'ordinateur ou dans le téléphone du prestataire." },
    ],
    cta: { eyebrow: 'Décrivez la situation', title: "Ce que fait l'application, depuis quand le prestataire ne répond plus, et ce que vous avez : comptes, contrat, accès. Nous vous rendons l'inventaire, la procédure de récupération par actif, et l'audit écrit avec les trois options et leur prix total.", body: "Symloop reprend des applications et des plateformes bloquées en Algérie : récupération des comptes stores, du domaine, de l'hébergement, du code, des données et des clés, audit écrit, maintenance ou réécriture avec reprise des données et des utilisateurs, kit de propriété installé le premier jour. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code et comptes à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problème', name: 'Peut-on connaître le prix total avant de commencer ?' },
      { href: '/blog/freelance-vs-agence-vs-atelier-ingenierie-algerie-2026/', kind: 'Guide', name: "Freelance, agence ou atelier d'ingénierie" },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'Une application mobile en Algérie en 2027 : sept décisions' },
      { href: '/blog/comment-choisir-developpeur-algerie/', kind: 'Guide', name: 'Comment choisir un développeur en Algérie' },
    ] },
  },
  en: {
    kind: 'Problem · Stuck project', title: 'My app is stuck with a developer who vanished: taking the project back in 2027 (Algeria).',
    dek: "The freelancer or agency that built your app no longer answers. The Google Play and App Store accounts are in their name, so is the server, you have never seen the code, and the app still runs but nobody can update it anymore. You paid, sometimes a lot. What can be recovered and how, the audit that decides between keeping, repairing and rewriting, why 2027 makes the takeover urgent, the ownership kit so it never happens again, and the six weeks of the takeover.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['Project takeover', 'Code audit', 'Code ownership', 'Google Play', 'Algeria 2027'],
    intro: [
      "**Short answer.** The takeover happens in four steps and six weeks: **the inventory** of what you have and what is in your name; **the recovery**, asset by asset, of the store accounts, the domain, the hosting, the code, the data and the keys, with a formal notice if the contract allows it; **the audit** of the code and data, which decides what is kept, repaired or rewritten; **the restart**, access locked down, dependencies updated, stores taken over, one-page documentation. **The decision to rewrite is made in week four, on the audit, not in week zero on anger.** And 2027 makes the takeover urgent: the stores remove apps that are not updated, and worldwide Android developer verification closes the door on hand-distributed APKs.",
      "This guide answers messages we receive every month, from Algerian companies and diaspora founders, and it complements [can you know the total price before starting](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/) and [freelancer, agency or engineering studio](/blog/freelance-vs-agence-vs-atelier-ingenierie-algerie-2026/), written before the project. Here, the project has already gone wrong.",
    ],
    sections: [
      { heading: 'Why 2027 makes the takeover urgent', body: [
        "Until now, an abandoned app could run for years with nobody touching it. Three things change in 2027.",
      ], list: [
        "**The stores remove apps that are not updated.** Google Play and the App Store require every year that apps target a recent system version; a frozen app stops being offered to new users, then disappears from results. If the account is in the vanished vendor's name, nobody can update it.",
        "**Worldwide Android developer verification.** Google announced that from 2027, apps installed on certified Android devices must come from an identified developer, including outside the Play Store. The fallback of “we'll send the APK on WhatsApp” has an end date.",
        "**Payment and data.** With the 2027 finance bill pushing towards electronic collection and Law 18-07 on personal data, an app whose payment and database you do not control is a legal risk, not only a technical one.",
      ], after: [
        "We detailed these deadlines in [the seven decisions of a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/). For an app already built, they come down to one sentence: what is not in your name does not belong to you, and what is not updated disappears.",
      ] },
      { heading: 'The four steps of a takeover', body: [
        "The order matters. Companies that call a new developer asking them to “redo everything” skip the first two steps and pay for a whole project for code that might have held.",
      ], visual: 'steps', after: [
        "**The inventory** fits on one page: the Google Play and App Store accounts, the domain name, the host and servers, the code repository, the database, the third-party services, SMS, payment, maps, notifications, and for each one, who holds the access and in whose name it is registered. Reread the contract and invoices: what is written about code ownership and handover of access decides what comes next. **Recovery** is done asset by asset, through the platforms' own procedures, and through a written formal notice to the vendor when the contract allows it; the detail is in the next figure. **The audit** looks at the recovered code with three questions: is it readable by another developer, are its dependencies up to date and free of known flaws, is the data exportable and sound? **The restart** locks everything in your name, updates, resumes store publications, tests a backup restore and writes the one-page documentation.",
      ] },
      { heading: 'What can be recovered, and how', body: [
        "The question “can I get my app back” has six answers, one per asset. The left-hand column takes a day; the right-hand column, weeks.",
      ], visual: 'assets', after: [
        "**Store accounts.** If they are in your name, change the passwords and enable two-factor authentication on your own phone. If they are in the vendor's name, Google Play and the App Store have an app transfer procedure to another account, which requires the holder's cooperation; without it, the app is republished under your account, with a new identifier, and your users must reinstall it. **The domain** is checked at the registrar: the registrant must be you; otherwise, demand the transfer in writing, and prepare a new domain with a redirect if the vendor does not answer. **Hosting**: if you have the access, export a full backup immediately; otherwise, the host can sometimes provide a database export to the contract holder. **The code**: check the repository holds the last deployed version, not one from six months ago; if there is no repository, the production build can be recovered and analysed, but it does not replace source code. **Your customers' data belongs to you**, and Law 18-07 makes you responsible for protecting it; the export can be demanded. **The keys** of third-party services, SMS, CIB/Edahabia payment, maps, are all revoked and recreated, in your name, without exception: a key left with the vendor is an open door.",
      ] },
      { heading: 'The audit: keep, repair or rewrite', body: [
        "This is the step anger skips. Three cases, decided on the recovered code, with a written total price for each.",
      ], list: [
        "**Keep.** The code is readable, dependencies update without breaking, data is sound. Maintenance resumes, everything is locked down, an update is published. More common than people think when the vendor was competent but unavailable.",
        "**Repair.** The code holds but one part is fragile: patched-together payment, no offline mode, database without backup. That part is replaced, the rest is kept. The price compares to the part, not the project.",
        "**Rewrite.** The code is unreadable, or built on a technology nobody maintains anymore, or the data is unrecoverable. We start again from scoping, importing the data and users. It is the only situation where a whole project is justified, and it is observed, not decreed.",
      ], after: [
        "An audit is delivered in writing: what was examined, what was found, the three options with their total price, and a recommendation. A vendor who recommends a rewrite without having read the code is selling you a project, not a takeover.",
      ] },
      { heading: 'The ownership kit, so it never happens again', body: [
        "Whether you keep or rewrite, the restart installs five layers that make sure no vendor, including us, can ever block your app again.",
      ], visual: 'kit', after: [
        "**The accounts** for stores, domain and host are in your name, with two-factor authentication on your phone; the vendor is invited with a role, never as owner. **The code** lives in a repository in your name, where the vendor is a guest and can be removed in one click; it is delivered at every stage, not at the end. **The infrastructure**: admin access to servers and database is on your side, third-party keys are in a vault in your name, and backups have been restored at least once, because a backup never tested does not exist. **The contract** writes code ownership, assigned at each payment, and a reversibility clause: access and documentation handed over within fifteen days on request. **The documentation** fits on one page, where is what and how to deploy, readable by another developer in an hour. It is what we deliver on every project, and it is what to demand from anyone; we explained it in [how to choose a developer in Algeria](/blog/comment-choisir-developpeur-algerie/).",
      ] },
      { heading: 'The six weeks of the takeover', body: [
        "Six weeks, four of them before the most expensive decision.",
      ], visual: 'timeline', after: [
        "**Week 1, the inventory**, with you: the list, the contract, the invoices, screenshots of what exists. **Weeks 2 and 3, recovery**, in parallel on all assets, with the formal notice sent on day one if the vendor does not answer; every day without access to the store account is a day of removal risk. **Weeks 3 and 4, the audit** of the recovered code and data, in writing. **Week 4, the decision**, on the audit, with three total prices. **Weeks 5 and 6, the restart**: everything in your name, dependencies updated, store publication resumed, restore tested, documentation. If the decision is to rewrite, weeks 5 and 6 become the scoping of the new project, with data and users carried over.",
        "A takeover, inventory, recovery, audit, restart, sits in category 1 of our [price grid](/blog/prix-application-mobile-algerie-2026/); repair or rewrite, if the audit justifies them, are priced separately, in writing.",
      ] },
      { heading: 'The mistakes we see in takeovers', body: [], list: [
        "**Asking to “redo everything” on the first call.** A whole project paid for code that would have held. Inventory, recovery, audit, then decision.",
        "**Waiting for the vendor to answer.** The stores do not wait. The formal notice goes out on day one, recovery through the platforms in parallel.",
        "**Leaving a single key with the old vendor.** SMS, payment, server: a forgotten key is an open door. All revoked, all recreated.",
        "**Republishing under a new account without telling users.** They keep the old app, which dies. Message in the old version, data migration, redirect.",
        "**Restarting without a tested backup.** The first incident after the takeover wipes everything. A real restore before touching anything.",
        "**Making the same mistake with the new vendor.** Accounts in their name, code delivered at the end. The ownership kit is installed on day one of the takeover.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'My developer vanished with the code, what do I do first?', a: 'The inventory: list the store accounts, the domain, the host, the code repository, the database and the third-party services, and note in whose name each is registered. Reread the contract. Then recovery asset by asset, with a written formal notice on day one if the contract allows it.' },
        { q: 'Can an app published under the vendor’s Google Play account be recovered?', a: 'Google Play and the App Store have a transfer procedure to another account, which requires the holder’s cooperation. Without it, the app is republished under your account with a new identifier, and your users must reinstall it, with a message in the old version and a data migration.' },
        { q: 'Does my customers’ data belong to me?', a: 'Yes. Your customers’ data belongs to you and Law 18-07 makes you responsible for protecting it. The export can be demanded from the vendor or the host, and it is the first thing to back up once access is recovered.' },
        { q: 'Do I have to rewrite everything?', a: 'Only if the audit finds it: unreadable code, unmaintained technology or unrecoverable data. Otherwise, keep or repair the fragile part. The decision is made in week four, on the written audit, with three total prices, not on the first call.' },
        { q: 'Why is it more urgent in 2027?', a: 'Because the stores remove apps that do not target a recent system version, because the worldwide Android developer verification announced for 2027 closes the door on hand-distributed APKs, and because payment and personal data are now regulated. An app nobody can update has an end date.' },
        { q: 'How do I stop it happening again?', a: 'With the ownership kit: store, domain and host accounts in your name with two-factor, code repository in your name where the vendor is a guest, access and keys on your side, a contract with code assignment at each payment and a reversibility clause, one-page documentation. Installed on day one of the takeover.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The decision to rewrite is made in week four, on the audit, not in week zero on anger.' },
      { after: 4, text: 'Nothing essential should exist only on the vendor’s computer or phone.' },
    ],
    cta: { eyebrow: 'Describe the situation', title: 'What the app does, since when the vendor stopped answering, and what you have: accounts, contract, access. We return the inventory, the recovery procedure per asset, and the written audit with the three options and their total price.', body: 'Symloop takes over stuck apps and platforms in Algeria: recovery of store accounts, domain, hosting, code, data and keys, written audit, maintenance or rewrite with data and users carried over, ownership kit installed on day one. Senior engineers in Algiers and Setif, written scoping, code and accounts in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problem', name: 'Can you know the total price before starting?' },
      { href: '/blog/freelance-vs-agence-vs-atelier-ingenierie-algerie-2026/', kind: 'Guide', name: 'Freelancer, agency or engineering studio' },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'A mobile app in Algeria in 2027: seven decisions' },
      { href: '/blog/comment-choisir-developpeur-algerie/', kind: 'Guide', name: 'How to choose a developer in Algeria' },
    ] },
  },
  ar: {
    kind: 'مشكلة · مشروع معلّق', title: 'تطبيقي معلّق عند مطوّر اختفى: استعادة المشروع في 2027 (الجزائر).',
    dek: 'المستقل أو الوكالة التي بنت تطبيقك لم تعد تجيب. حسابا Google Play وApp Store باسمها، والخادم كذلك، لم ترَ الكود أبداً، والتطبيق ما زال يعمل لكن لا أحد يستطيع تحديثه. دفعتَ، وأحياناً كثيراً. ما يُسترجع وكيف، التدقيق الذي يحسم بين الاحتفاظ والإصلاح وإعادة الكتابة، لماذا تجعل 2027 الاستعادة عاجلة، عدّة الملكية حتى لا يتكرر ذلك، والأسابيع الستة للاستعادة.',
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'سيملوب', about: ['استعادة مشروع', 'تدقيق كود', 'ملكية الكود', 'Google Play', 'الجزائر 2027'],
    intro: [
      '**الجواب المختصر.** تتم الاستعادة في أربع خطوات وستة أسابيع: **الجرد** لما تملكه وما هو باسمك؛ **الاسترجاع** أصلاً أصلاً لحسابات المتاجر والنطاق والاستضافة والكود والبيانات والمفاتيح، مع إعذار إن سمح العقد؛ **التدقيق** للكود والبيانات الذي يحسم ما يُحتفظ به أو يُصلح أو يُعاد كتابته؛ **إعادة التشغيل**، وصول مقفل، تبعيات محدَّثة، متاجر مستعادة، توثيق في صفحة. **يُتخذ قرار إعادة الكتابة في الأسبوع الرابع على التدقيق، لا في الأسبوع صفر على الغضب.** و2027 تجعل الاستعادة عاجلة: تسحب المتاجر التطبيقات غير المحدَّثة، والتحقق العالمي من مطوري أندرويد يغلق باب APK الموزَّع يدوياً.',
      'يجيب هذا الدليل عن رسائل نتلقاها كل شهر من شركات جزائرية ومؤسسين من الجالية، ويكمّل [هل يمكن معرفة السعر الإجمالي قبل البدء](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/) و[مستقل أم وكالة أم ورشة هندسية](/blog/freelance-vs-agence-vs-atelier-ingenierie-algerie-2026/) المكتوبَين قبل المشروع. هنا، المشروع ساء أصلاً.',
    ],
    sections: [
      { heading: 'لماذا تجعل 2027 الاستعادة عاجلة', body: [
        'كان التطبيق المهجور يستطيع حتى الآن العمل سنوات دون أن يلمسه أحد. ثلاثة أشياء تتغير في 2027.',
      ], list: [
        '**تسحب المتاجر التطبيقات غير المحدَّثة.** يشترط Google Play وApp Store كل سنة أن تستهدف التطبيقات إصداراً حديثاً من النظام؛ التطبيق المتجمّد يتوقف عرضه على المستخدمين الجدد ثم يختفي من النتائج. وإن كان الحساب باسم المزوّد المختفي فلا أحد يستطيع تحديثه.',
        '**التحقق العالمي من مطوري أندرويد.** أعلنت Google أنه من 2027 يجب أن تأتي التطبيقات المثبتة على أجهزة أندرويد المعتمدة من مطوّر معرَّف حتى خارج Play Store. حل الطوارئ «نرسل APK على واتساب» له تاريخ انتهاء.',
        '**الدفع والبيانات.** مع مشروع قانون المالية 2027 الذي يدفع نحو التحصيل الإلكتروني والقانون 18-07 للبيانات الشخصية، التطبيق الذي لا تتحكم في دفعه ولا في قاعدة بياناته خطر قانوني لا تقني فقط.',
      ], after: [
        'فصّلنا هذه المواعيد في [القرارات السبعة لتطبيق جوّال في 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/). ولتطبيق مبني أصلاً تُلخَّص في جملة: ما ليس باسمك ليس ملكك، وما لا يُحدَّث يختفي.',
      ] },
      { heading: 'الخطوات الأربع للاستعادة', body: [
        'الترتيب مهم. الشركات التي تتصل بمطوّر جديد طالبةً منه «إعادة كل شيء» تقفز عن الخطوتين الأوليين وتدفع مشروعاً كاملاً لكود ربما كان سيصمد.',
      ], visual: 'steps', after: [
        '**الجرد** في صفحة واحدة: حسابا Google Play وApp Store، اسم النطاق، المستضيف والخوادم، مستودع الكود، قاعدة البيانات، خدمات الغير، SMS، دفع، خرائط، إشعارات، ولكل منها من يحوز الوصول وباسم من هو مسجَّل. أعد قراءة العقد والفواتير: ما هو مكتوب عن ملكية الكود وتسليم الوصول يقرر ما يلي. **الاسترجاع** يتم أصلاً أصلاً عبر إجراءات المنصات نفسها وبإعذار كتابي للمزوّد حين يسمح العقد؛ والتفصيل في الشكل التالي. **التدقيق** ينظر في الكود المسترجَع بثلاثة أسئلة: هل يقرؤه مطوّر آخر، هل تبعياته محدَّثة وبلا ثغرة معروفة، هل البيانات قابلة للتصدير وسليمة؟ **إعادة التشغيل** تقفل كل شيء باسمك وتحدّث وتستأنف النشر على المتاجر وتختبر استعادة نسخة احتياطية وتكتب توثيق الصفحة الواحدة.',
      ] },
      { heading: 'ما يُسترجع، وكيف', body: [
        'لسؤال «هل أستطيع استرجاع تطبيقي» ستة أجوبة، واحد لكل أصل. العمود الأيمن يستغرق يوماً؛ والأيسر أسابيع.',
      ], visual: 'assets', after: [
        '**حسابات المتاجر.** إن كانت باسمك فغيّر كلمات السر وفعّل التحقق الثنائي على هاتفك. وإن كانت باسم المزوّد فلدى Google Play وApp Store إجراء لنقل التطبيق إلى حساب آخر يتطلب تعاون صاحب الحساب؛ وبدونه يُعاد نشر التطبيق تحت حسابك بمعرّف جديد وعلى مستخدميك إعادة تثبيته. **النطاق** يُتحقق منه عند المسجِّل: يجب أن يكون صاحب التسجيل أنت؛ وإلا طالب بالنقل كتابياً وحضّر نطاقاً جديداً بإعادة توجيه إن لم يجب المزوّد. **الاستضافة**: إن كان لديك الوصول فصدّر فوراً نسخة احتياطية كاملة؛ وإلا فقد يزود المستضيف أحياناً صاحب العقد بتصدير القاعدة. **الكود**: تحقق أن المستودع يحوي آخر نسخة منشورة لا نسخة من ستة أشهر؛ وإن لم يوجد مستودع فيُسترجع البناء الموجود في الإنتاج ويُحلَّل لكنه لا يعوّض الكود المصدري. **بيانات زبائنك ملكك**، والقانون 18-07 يجعلك مسؤولاً عن حمايتها؛ والتصدير مستحَق. **مفاتيح** خدمات الغير، SMS، دفع CIB/الذهبية، خرائط، تُلغى كلها وتُعاد إنشاؤها باسمك دون استثناء: المفتاح المتروك عند المزوّد باب مفتوح.',
      ] },
      { heading: 'التدقيق: احتفاظ، إصلاح أم إعادة كتابة', body: [
        'هذه الخطوة التي يقفز عنها الغضب. ثلاث حالات تُحسم على الكود المسترجَع بسعر إجمالي مكتوب لكل منها.',
      ], list: [
        '**الاحتفاظ.** الكود مقروء، التبعيات تُحدَّث دون كسر، البيانات سليمة. تُستأنف الصيانة ويُقفل كل شيء ويُنشر تحديث. أكثر شيوعاً مما يُعتقد حين كان المزوّد كفؤاً لكن غير متاح.',
        '**الإصلاح.** الكود يصمد لكن جزءاً منه هش: دفع مرقَّع، لا وضع دون اتصال، قاعدة بلا نسخ احتياطي. يُستبدل هذا الجزء ويُحتفظ بالباقي. يُقارن السعر بالجزء لا بالمشروع.',
        '**إعادة الكتابة.** الكود غير مقروء، أو مبني على تقنية لم يعد أحد يصونها، أو البيانات غير قابلة للاسترجاع. نعيد البدء من التأطير مع استرجاع البيانات والمستخدمين. هي الحالة الوحيدة التي يُبرَّر فيها مشروع كامل، وهي تُلاحَظ لا تُقرَّر.',
      ], after: [
        'يُسلَّم التدقيق كتابياً: ما فُحص، ما وُجد، الخيارات الثلاثة بسعرها الإجمالي، وتوصية. مزوّد يوصي بإعادة الكتابة دون أن يقرأ الكود يبيعك مشروعاً لا استعادة.',
      ] },
      { heading: 'عدّة الملكية، حتى لا يتكرر ذلك', body: [
        'سواء احتفظت أو أعدت الكتابة، تثبّت إعادة التشغيل خمس طبقات تجعل أي مزوّد، بمن فيهم نحن، عاجزاً عن تعليق تطبيقك مجدداً.',
      ], visual: 'kit', after: [
        '**الحسابات** للمتاجر والنطاق والمستضيف باسمك بتحقق ثنائي على هاتفك؛ المزوّد مدعو بدور لا مالكاً أبداً. **الكود** يعيش في مستودع باسمك، المزوّد فيه ضيف ويُزال بنقرة؛ ويُسلَّم في كل مرحلة لا في النهاية. **البنية التحتية**: وصول المسؤول للخوادم والقاعدة عندك، مفاتيح خدمات الغير في خزنة باسمك، والنسخ الاحتياطية استُعيدت مرة على الأقل لأن نسخة لم تُختبر أبداً غير موجودة. **العقد** يكتب ملكية الكود المتنازَل عنها عند كل دفعة وبند قابلية الرجوع: تسليم الوصول والتوثيق خلال خمسة عشر يوماً عند الطلب. **التوثيق** في صفحة واحدة، أين ماذا وكيف يُنشر، يقرؤه مطوّر آخر في ساعة. هذا ما نسلّمه في كل مشروع وما يجب المطالبة به من أي كان؛ شرحناه في [كيف تختار مطوّراً في الجزائر](/blog/comment-choisir-developpeur-algerie/).',
      ] },
      { heading: 'الأسابيع الستة للاستعادة', body: [
        'ستة أسابيع، أربعة منها قبل القرار الأغلى.',
      ], visual: 'timeline', after: [
        '**الأسبوع 1، الجرد** معك: القائمة، العقد، الفواتير، لقطات شاشة لما هو موجود. **الأسبوعان 2 و3، الاسترجاع** بالتوازي على كل الأصول، مع إرسال الإعذار في اليوم الأول إن لم يجب المزوّد؛ كل يوم بلا وصول إلى حساب المتجر يوم خطر سحب. **الأسبوعان 3 و4، التدقيق** للكود والبيانات المسترجَعة، كتابياً. **الأسبوع 4، القرار** على التدقيق بثلاثة أسعار إجمالية. **الأسبوعان 5 و6، إعادة التشغيل**: كل شيء باسمك، تبعيات محدَّثة، نشر مستأنف على المتاجر، استعادة مختبَرة، توثيق. وإن كان القرار إعادة الكتابة يصبح الأسبوعان 5 و6 تأطيراً للمشروع الجديد مع استرجاع البيانات والمستخدمين.',
        'الاستعادة، جرد واسترجاع وتدقيق وإعادة تشغيل، تقع في الفئة 1 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)؛ والإصلاح أو إعادة الكتابة إن برّرهما التدقيق يُسعَّران على حدة كتابياً.',
      ] },
      { heading: 'الأخطاء التي نراها في الاستعادات', body: [], list: [
        '**طلب «إعادة كل شيء» في أول مكالمة.** مشروع كامل مدفوع لكود كان سيصمد. جرد، استرجاع، تدقيق، ثم قرار.',
        '**انتظار أن يجيب المزوّد.** المتاجر لا تنتظر. الإعذار يُرسل في اليوم الأول والاسترجاع عبر المنصات بالتوازي.',
        '**ترك مفتاح واحد عند المزوّد القديم.** SMS، دفع، خادم: المفتاح المنسي باب مفتوح. تُلغى كلها وتُعاد إنشاؤها.',
        '**إعادة النشر تحت حساب جديد دون إخبار المستخدمين.** يحتفظون بالتطبيق القديم الذي يموت. رسالة في النسخة القديمة، ترحيل البيانات، إعادة توجيه.',
        '**إعادة التشغيل بلا نسخة احتياطية مختبَرة.** أول حادث بعد الاستعادة يمحو كل شيء. استعادة حقيقية قبل لمس أي شيء.',
        '**تكرار الخطأ نفسه مع المزوّد الجديد.** حسابات باسمه، كود يُسلَّم في النهاية. تُثبَّت عدّة الملكية في أول يوم من الاستعادة.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'اختفى مطوّري بالكود، ماذا أفعل أولاً؟', a: 'الجرد: اذكر حسابات المتاجر والنطاق والمستضيف ومستودع الكود والقاعدة وخدمات الغير، وسجّل لكل منها باسم من هو مسجَّل. أعد قراءة العقد. ثم الاسترجاع أصلاً أصلاً بإعذار كتابي في اليوم الأول إن سمح العقد.' },
        { q: 'هل يمكن استرجاع تطبيق منشور تحت حساب Google Play الخاص بالمزوّد؟', a: 'لدى Google Play وApp Store إجراء نقل إلى حساب آخر يتطلب تعاون صاحب الحساب. وبدونه يُعاد نشر التطبيق تحت حسابك بمعرّف جديد وعلى مستخدميك إعادة تثبيته، مع رسالة في النسخة القديمة وترحيل للبيانات.' },
        { q: 'هل بيانات زبائني ملكي؟', a: 'نعم. بيانات زبائنك ملكك والقانون 18-07 يجعلك مسؤولاً عن حمايتها. التصدير مستحَق من المزوّد أو المستضيف، وهو أول ما يُحفظ احتياطياً بمجرد استرجاع الوصول.' },
        { q: 'هل يجب إعادة كتابة كل شيء؟', a: 'فقط إن أثبت التدقيق ذلك: كود غير مقروء، تقنية لم تعد تُصان، أو بيانات غير قابلة للاسترجاع. وإلا نحتفظ أو نصلح الجزء الهش. يُتخذ القرار في الأسبوع الرابع على التدقيق المكتوب بثلاثة أسعار إجمالية، لا في أول مكالمة.' },
        { q: 'لماذا الأمر أكثر إلحاحاً في 2027؟', a: 'لأن المتاجر تسحب التطبيقات التي لا تستهدف إصداراً حديثاً من النظام، ولأن التحقق العالمي من مطوري أندرويد المعلن لـ2027 يغلق باب APK الموزَّع يدوياً، ولأن الدفع والبيانات الشخصية أصبحا مؤطَّرين. التطبيق الذي لا يستطيع أحد تحديثه له تاريخ انتهاء.' },
        { q: 'كيف أمنع تكرار ذلك؟', a: 'بعدّة الملكية: حسابات المتاجر والنطاق والمستضيف باسمك بتحقق ثنائي، مستودع كود باسمك المزوّد فيه ضيف، وصول ومفاتيح عندك، عقد بتنازل عن الكود عند كل دفعة وبند قابلية الرجوع، توثيق في صفحة. تُثبَّت في أول يوم من الاستعادة.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'يُتخذ قرار إعادة الكتابة في الأسبوع الرابع على التدقيق، لا في الأسبوع صفر على الغضب.' },
      { after: 4, text: 'لا شيء أساسي يجب أن يوجد فقط على حاسوب المزوّد أو هاتفه.' },
    ],
    cta: { eyebrow: 'صف الوضع', title: 'ما يفعله التطبيق، منذ متى توقف المزوّد عن الإجابة، وما تملكه: حسابات، عقد، وصول. نعيد إليك الجرد وإجراء الاسترجاع لكل أصل والتدقيق المكتوب بالخيارات الثلاثة وسعرها الإجمالي.', body: 'تستعيد سيملوب التطبيقات والمنصات المعلّقة في الجزائر: استرجاع حسابات المتاجر والنطاق والاستضافة والكود والبيانات والمفاتيح، تدقيق مكتوب، صيانة أو إعادة كتابة مع استرجاع البيانات والمستخدمين، عدّة ملكية تُثبَّت في اليوم الأول. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود وحسابات باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'مشكلة', name: 'هل يمكن معرفة السعر الإجمالي قبل البدء؟' },
      { href: '/blog/freelance-vs-agence-vs-atelier-ingenierie-algerie-2026/', kind: 'دليل', name: 'مستقل أم وكالة أم ورشة هندسية' },
      { href: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/', kind: '2027', name: 'تطبيق جوّال في الجزائر 2027: سبعة قرارات' },
      { href: '/blog/comment-choisir-developpeur-algerie/', kind: 'دليل', name: 'كيف تختار مطوّراً في الجزائر' },
    ] },
  },
};

const KEYWORDS = "développeur disparu récupérer application, reprendre projet application abandonné algérie 2027, récupérer code source prestataire, transfert application google play app store autre compte, audit application mobile algérie, propriété du code application contrat, mon prestataire ne répond plus application, app stuck with developer algeria 2027, تطبيقي معلق عند مطور اختفى الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
