import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/site-web-pirate-que-faire-entreprise-algerie-2027-premiere-heure-site-redirige-avertissement-google-nettoyer-ou-reconstruire-sauvegarde-saine.mjs';

const SLUG = 'site-web-pirate-que-faire-entreprise-algerie-2027-premiere-heure-site-redirige-avertissement-google-nettoyer-ou-reconstruire-sauvegarde-saine';
const FIGURES = ['signes', 'etapes', 'chronologie', 'portes', 'couches', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  domaine: '/blog/nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main/',
  audit: '/blog/cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections/',
  piratage: '/blog/piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert/',
  ransomware: '/blog/ransomware-entreprise-algerie-2027-que-faire-premiere-heure-fichiers-chiffres-cinq-barrieres-sauvegarde-reprise/',
  sauvegardes: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
};

const CONTENT = {
  fr: {
    kind: 'Site web piraté · Algérie · 2027', title: "Site web piraté, que faire en Algérie (2027) : la première heure, puis cinq jours pour reconstruire, quand le site redirige vers un autre ou que Google affiche un avertissement",
    dek: "« Ce matin, notre site envoie les visiteurs vers un site de paris. Sur Google, sous notre nom, il est écrit “Ce site est peut-être piraté”, et l'hébergeur menace de suspendre le compte. Le site a été fait il y a quatre ans par une agence qu'on ne joint plus ; personne ne l'a mis à jour depuis. Que fait-on, dans quel ordre, sans tout perdre ? Faut-il tout refaire ? » On ne supprime rien et on ne « nettoie » pas à la main. On isole, on copie, on trouve la date de l'entrée, on reconstruit propre, on ferme la porte, puis on demande la levée de l'avertissement.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Site web piraté', 'Sécurité d’un site d’entreprise', 'Porte dérobée', 'Sauvegarde et restauration', 'Avertissement des moteurs de recherche', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Six temps, dans cet ordre. **Isoler** : une page de maintenance, sans rien supprimer. **Copier** l'état infecté, pour le diagnostic. **Dater** l'entrée : c'est elle, et non le jour où l'on s'en aperçoit, qui dit quelle sauvegarde est saine. **Reconstruire** : une installation propre, le logiciel repris à la source, le contenu vérifié, ou la restauration d'une copie antérieure à l'entrée. **Fermer** : tous les mots de passe, les comptes inconnus, les mises à jour. **Faire revoir** le site par le moteur de recherche, puis surveiller. Ce qu'il ne faut pas faire : effacer la page visible et croire que c'est fini. Comptez une heure pour isoler, et environ cinq jours pour rouvrir proprement.",
      "Ce guide s'adresse au gérant dont le site d'entreprise affiche autre chose que ce qu'il devrait, redirige ses visiteurs, ou porte un avertissement dans un moteur de recherche ou un navigateur, et au fondateur installé en France qui découvre le problème à distance. Les notions citées viennent de sources publiques : la défiguration de site, la porte dérobée, l'interface de commande à distance, le service de navigation sécurisée de Google et l'aide de sa console de recherche. Le site, les dates et l'extension de l'exemple sont construits. Ce guide ne traite ni des obligations de déclaration ni des suites judiciaires : si des données de clients ont pu être consultées, voyez votre conseil.",
    ],
    sections: [
      { heading: "Six signes d'un site piraté, et le premier geste", body: [
        "La figure donne, pour six signes, ce qu'ils veulent dire et ce que l'on fait d'abord.",
      ], visual: 'signes', after: [
        "**Ce qu'on voit.** Une défiguration est une attaque qui change l'apparence visuelle d'un site ou d'une page : c'est le cas le plus visible. D'autres attaques laissent le site intact en apparence pour vous, et le font se comporter autrement pour un visiteur venu d'un moteur de recherche ou sur un téléphone. Vérifiez donc toujours depuis un autre appareil et depuis une recherche. **Les avertissements.** La navigation sécurisée de Google est un service qui avertit les utilisateurs lorsqu'ils tentent de visiter un site dangereux ; Chrome, Safari et Firefox, entre autres, s'en servent. Dans les résultats de recherche, la mention « Ce site est peut-être piraté » apparaît sous votre nom ; d'après l'aide de Google, elle ne disparaît qu'après une action du propriétaire du site.",
        "**Le spam.** Des pages qui ne sont pas les vôtres, en langue étrangère ou vantant des produits sans rapport, publiées sous votre nom de domaine : c'est une manipulation délibérée des index des moteurs de recherche, faite à vos frais. **L'hébergeur.** S'il suspend le compte, demandez-lui son rapport : le fichier détecté et la date. **Le premier geste, toujours le même.** Mettre le site en maintenance sans rien supprimer, et noter ce que l'on voit, avec des captures d'écran. Si le site ne s'affiche plus du tout, la cause peut être ailleurs, un nom de domaine expiré par exemple : voir [le guide sur le nom de domaine](" + L.domaine + ").",
      ] },
      { heading: "Remettre un site en état, en six temps", body: [
        "Le premier temps est accentué : isoler, sans rien supprimer.",
      ], visual: 'etapes', after: [
        "**Isoler.** Une page de maintenance remplace le site ; les fichiers restent en place. Les mots de passe sont changés tout de suite, depuis un ordinateur dont on est sûr : hébergement, base de données, comptes d'administration, accès aux fichiers. **Copier.** L'état infecté est copié tel quel : c'est la seule pièce qui dira par où l'intrus est entré. **Dater.** Les fichiers modifiés, les comptes créés et les journaux du serveur donnent le jour de l'entrée.",
        "**Reconstruire.** Sur une installation propre : le cœur du logiciel, le thème et les extensions sont repris à leur source officielle ; le contenu, textes et images, est vérifié puis remis ; les fichiers que personne ne reconnaît ne reviennent pas. **Fermer.** La porte d'entrée est identifiée et fermée : mise à jour, extension retirée, compte supprimé, mot de passe changé une seconde fois après la remise en ligne. **Faire revoir.** La demande de revue se fait dans la console de recherche, quand le site entier est propre ; d'après l'aide de Google, une demande faite trop tôt ne fait que prolonger le signalement.",
      ] },
      { heading: "Le piratage a six semaines de plus que ses signes", body: [
        "La figure remonte le temps, du jour où l'on s'en aperçoit au jour de l'entrée, puis regarde les sauvegardes.",
      ], visual: 'chronologie', after: [
        "**L'entrée est discrète.** Dans l'exemple, une extension qui n'avait pas été mise à jour laisse entrer un intrus le 3 mars. Le lendemain, il dépose une porte dérobée, un moyen caché de contourner l'authentification normale. Puis il ne se passe rien de visible : des pages de spam sont créées hors du menu, les moteurs de recherche les indexent, et c'est seulement le 14 avril, quarante-deux jours plus tard, qu'une redirection alerte quelqu'un.",
        "**Les sauvegardes.** L'hébergeur garde quatorze copies quotidiennes : toutes ont été prises après le 3 mars, toutes contiennent la porte dérobée. Restaurer « la sauvegarde d'hier » remet le site dans l'état d'hier, piraté. Avec des copies hebdomadaires gardées douze semaines, il en existe une du 26 février, antérieure à l'entrée : c'est elle qui sert, complétée par le contenu publié depuis, une fois vérifié. La règle générale est dans [le guide sur les sauvegardes](" + L.sauvegardes + ") ; pour un site, elle se résume à garder longtemps, et ailleurs que sur le serveur.",
      ] },
      { heading: "Ce qu'un nettoyage rapide laisse derrière lui", body: [
        "La figure montre six endroits d'un site piraté, et ce qu'il reste quand on n'a supprimé que la page visible.",
      ], visual: 'portes', after: [
        "**Cinq portes sur six.** Un fichier glissé parmi les images : une interface de commande à distance, qui donne accès au serveur depuis un navigateur. Un compte administrateur que personne n'a créé. Quelques lignes ajoutées dans un fichier légitime du thème. Des liens injectés dans la base de données. Une tâche planifiée qui réinstalle le tout chaque nuit. Supprimer la page d'accueil modifiée ne touche à rien de cela.",
        "**Pourquoi reconstruire.** On ne peut pas prouver qu'un site nettoyé à la main est propre ; on peut prouver qu'un site reconstruit l'est, parce que chaque fichier vient d'une source connue. C'est plus long d'un jour ou deux, et c'est la seule façon de ne pas recommencer le mois suivant. **Les gestionnaires de contenu.** Le plus répandu, WordPress, équipait en décembre 2024 près de 62 % des sites dont le gestionnaire de contenu est connu : il est donc aussi très visé, et ses extensions demandent un suivi. Un site qui n'a besoin que de quelques pages peut être refait plus simplement, avec moins de pièces à mettre à jour.",
      ] },
      { heading: "Un site qui reste propre, en cinq couches", body: [
        "La couche accentuée est la première : les mises à jour.",
      ], visual: 'couches', after: [
        "**Mises à jour** : chaque mois, par quelqu'un dont c'est la tâche ; les extensions inutiles sont retirées, et rien n'est installé hors des sources officielles. **Comptes** : peu d'administrateurs, un compte par personne, la double vérification ; le compte de l'agence d'il y a quatre ans est fermé. Les règles sont celles du [guide sur le piratage des comptes](" + L.piratage + ").",
        "**Hébergement, sauvegardes, surveillance.** Une alerte quand un fichier change ou qu'un compte apparaît ramène le délai de découverte de six semaines à un jour. L'ensemble relève de l'entretien courant décrit dans [le guide sur l'infogérance](" + L.infogerance + "), et se contrôle une fois par an par un regard extérieur, comme dans [le guide sur l'audit de sécurité](" + L.audit + "). Si l'attaque a aussi touché vos postes et vos fichiers, la marche à suivre est celle du [guide sur le ransomware](" + L.ransomware + ").",
      ] },
      { heading: "Cinq jours pour rouvrir proprement, en 2027", body: [
        "Cinq jours dans l'exemple, dont deux pour reconstruire.",
      ], visual: 'calendrier', after: [
        "**Jour 1, isoler et copier.** **Jour 2, dater et diagnostiquer** : on sait par où et quand, et quelle copie est saine. **Jours 3 et 4, reconstruire** : installation propre, contenu vérifié, extensions réduites au nécessaire.",
        "**Jour 5, rouvrir et faire revoir.** Le site est remis en ligne et la demande de revue est envoyée. D'après l'aide de Google, l'examen prend quelques jours pour un logiciel malveillant, et peut aller jusqu'à plusieurs semaines pour du spam : l'avertissement ne disparaît donc pas le jour même. Pendant un mois, les fichiers sont surveillés de près.",
      ], list: [
        "**Ce que le gérant reçoit** : la date et le chemin de l'entrée, ce qui a été touché, ce qui a été reconstruit, les mots de passe changés, et la date de la demande de revue.",
        "**Ce que l'entreprise ne fait plus** : effacer la page visible et attendre, restaurer la sauvegarde de la veille, laisser un site sans mise à jour pendant quatre ans, garder le compte d'un ancien prestataire.",
        "**Ce qui est mesuré** : jours depuis la dernière mise à jour, nombre d'administrateurs, âge de la plus ancienne sauvegarde, délai entre un changement de fichier et l'alerte.",
        "**Ce que fait Symloop** : l'isolement dans l'heure, le diagnostic, la reconstruction propre, la fermeture de l'entrée, la demande de revue, puis l'entretien et la surveillance ; et, quand le site le justifie, sa refonte avec moins de pièces à maintenir.",
      ], faq: [
        { q: "Mon site web a été piraté, que faire en premier ?", a: "Le mettre en maintenance sans rien supprimer, changer tous les mots de passe depuis un ordinateur sûr, et copier l'état actuel. Ensuite seulement on cherche par où l'intrus est entré. Ne répondez à aucun message laissé sur le site." },
        { q: "Comment savoir si mon site est piraté ?", a: "Six signes : page remplacée, redirection vers un autre site, avertissement du navigateur, mention « Ce site est peut-être piraté » dans les résultats de recherche, pages inconnues publiées sous votre nom, compte suspendu par l'hébergeur. Vérifiez depuis un téléphone et depuis une recherche, pas seulement depuis votre poste." },
        { q: "Suffit-il de supprimer la page ajoutée par le pirate ?", a: "Non. Il reste en général autre chose : un fichier caché, un compte, du code ajouté, une tâche planifiée. Tant que ces accès sont là, le site est repris. Il faut reconstruire sur une installation propre, ou restaurer une copie antérieure à l'entrée." },
        { q: "Puis-je restaurer la sauvegarde d'hier ?", a: "Seulement si vous êtes sûr que l'entrée date d'hier. Un site est souvent piraté plusieurs semaines avant qu'on le voie ; la sauvegarde de la veille contient alors déjà l'accès de l'intrus. Il faut une copie antérieure à l'entrée, d'où l'intérêt de garder des copies sur plusieurs semaines." },
        { q: "Comment enlever l'avertissement de Google ?", a: "En nettoyant d'abord tout le site, puis en demandant une revue dans la console de recherche. D'après l'aide de Google, l'examen prend quelques jours pour un logiciel malveillant et jusqu'à plusieurs semaines pour du spam ; une demande faite avant que le site soit propre prolonge le signalement." },
        { q: "Comment un site d'entreprise se fait-il pirater ?", a: "Les entrées habituelles : un composant qui n'a pas été mis à jour, un mot de passe d'administration faible ou réutilisé, une extension téléchargée hors des sources officielles, un compte d'hébergement compromis. Ces attaques sont en général menées par des outils automatiques qui balaient internet, pas par quelqu'un qui vous vise." },
        { q: "Faut-il refaire tout le site ?", a: "Pas le contenu : les textes et les images se récupèrent après vérification. Le logiciel, lui, se réinstalle proprement. C'est aussi le moment de se demander si un site de quelques pages a besoin d'un gestionnaire de contenu et de vingt extensions." },
        { q: "Combien de temps pour remettre le site en ligne ?", a: "Une heure pour l'isoler. Environ cinq jours dans notre exemple pour dater l'entrée, reconstruire et rouvrir. L'avertissement des moteurs de recherche peut rester quelques jours à quelques semaines de plus, le temps de la revue." },
        { q: "Les données de mes clients ont-elles été volées ?", a: "Cela dépend de ce que le site contenait et de ce que l'intrus a pu lire : formulaires, comptes clients, commandes. Le diagnostic le dit à partir des journaux. Si des données personnelles ont pu être consultées, voyez votre conseil pour la suite." },
        { q: "Comment éviter que cela recommence ?", a: "Des mises à jour chaque mois, peu d'administrateurs avec la double vérification, des sauvegardes gardées plusieurs semaines hors du serveur, et une alerte quand un fichier change. Et quelqu'un dont c'est explicitement la tâche." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Restaurer la sauvegarde d'hier remet le site dans l'état d'hier, piraté." },
      { after: 3, text: "On ne peut pas prouver qu'un site nettoyé à la main est propre ; on peut prouver qu'un site reconstruit l'est." },
    ],
    cta: { eyebrow: "Ne supprimez rien. Envoyez-nous l'adresse du site et ce que vous voyez : nous vous disons dans l'heure comment l'isoler, puis par où l'intrus est entré", title: "Site qui redirige, avertissement dans Google, hébergeur qui suspend, ou fondateur en France qui découvre le problème à distance : nous isolons, diagnostiquons, reconstruisons propre et fermons l'entrée", body: "Une heure pour isoler, cinq jours pour rouvrir proprement, une demande de revue, puis un site mis à jour et surveillé. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.domaine, kind: '2027', name: 'Nom de domaine et hébergement : qui possède quoi, reprendre les accès' },
      { href: L.audit, kind: '2027', name: 'Cybersécurité d’entreprise : audit de sécurité ou test d’intrusion' },
      { href: L.piratage, kind: '2027', name: 'Piratage en entreprise : boîte mail piratée, faux RIB, double vérification' },
      { href: L.sauvegardes, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes, restauration testée, délai de reprise' },
    ] },
  },
  en: {
    kind: 'Hacked website · Algeria · 2027', title: "Hacked website, what to do in Algeria (2027): the first hour, then five days to rebuild, for when the site redirects elsewhere or Google shows a warning",
    dek: "“This morning our site is sending visitors to a betting site. On Google, under our name, it says ‘This site may be hacked’, and the host is threatening to suspend the account. The site was built four years ago by an agency we can no longer reach; nobody has updated it since. What do we do, in what order, without losing everything? Do we have to redo it all?” You delete nothing and you do not ‘clean’ by hand. You isolate, copy, find the date of entry, rebuild clean, close the door, then ask for the warning to be lifted.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Hacked website', 'Company website security', 'Backdoor', 'Backup and restore', 'Search engine warning', 'Algeria 2027'],
    intro: [
      "**Short answer.** Six steps, in this order. **Isolate**: a maintenance page, without deleting anything. **Copy** the infected state, for the diagnosis. **Date** the entry: it, and not the day you noticed, tells you which backup is clean. **Rebuild**: a clean installation, software taken from the source, content checked, or the restore of a copy from before the entry. **Close**: all passwords, unknown accounts, updates. **Get the site reviewed** by the search engine, then monitor. What not to do: delete the visible page and believe it is over. Allow an hour to isolate, and about five days to reopen cleanly.",
      "This guide is for the manager whose company site shows something other than it should, redirects its visitors, or carries a warning in a search engine or a browser, and for the founder based in France who discovers the problem from a distance. The notions quoted come from public sources: website defacement, the backdoor, the web shell, Google's Safe Browsing service and the help pages of its search console. The site, dates and plugin in the example are constructed. This guide covers neither reporting obligations nor legal action: if customer data may have been read, see your legal adviser.",
    ],
    sections: [
      { heading: "Six signs of a hacked site, and the first action", body: [
        "The figure gives, for six signs, what they mean and what is done first.",
      ], visual: 'signes', after: [
        "**What you see.** A defacement is an attack that changes the visual appearance of a website or a page: it is the most visible case. Other attacks leave the site looking intact to you, and make it behave differently for a visitor coming from a search engine or on a phone. So always check from another device and from a search. **The warnings.** Google Safe Browsing is a service that warns users when they try to visit a dangerous website; Chrome, Safari and Firefox, among others, use it. In search results, the label “This site may be hacked” appears under your name; according to Google's help pages, it only goes away after the site owner acts.",
        "**Spam.** Pages that are not yours, in a foreign language or pushing unrelated products, published under your domain name: it is a deliberate manipulation of search engine indexes, done at your expense. **The host.** If it suspends the account, ask for its report: the file detected and the date. **The first action, always the same.** Put the site in maintenance without deleting anything, and note what you see, with screenshots. If the site does not display at all, the cause may lie elsewhere, an expired domain name for example: see [the guide to the domain name](" + L.domaine + ").",
      ] },
      { heading: "Putting a site back in order, in six steps", body: [
        "The first step is accented: isolate, without deleting anything.",
      ], visual: 'etapes', after: [
        "**Isolate.** A maintenance page replaces the site; the files stay in place. Passwords are changed at once, from a computer you are sure of: hosting, database, administration accounts, file access. **Copy.** The infected state is copied as it is: it is the only piece of evidence that will show where the intruder came in. **Date.** Modified files, accounts created and the server logs give the day of the entry.",
        "**Rebuild.** On a clean installation: the software core, the theme and the plugins are taken from their official source; the content, texts and images, is checked then put back; files nobody recognises do not return. **Close.** The way in is identified and closed: update, plugin removed, account deleted, password changed a second time after going back online. **Get it reviewed.** The review request is made in the search console, when the whole site is clean; according to Google's help pages, a request made too early only prolongs the flag.",
      ] },
      { heading: "The hack is six weeks older than its signs", body: [
        "The figure goes back in time, from the day people notice to the day of the entry, then looks at the backups.",
      ], visual: 'chronologie', after: [
        "**The entry is quiet.** In the example, a plugin that had not been updated lets an intruder in on 3 March. The next day they plant a backdoor, a hidden way of bypassing normal authentication. Then nothing visible happens: spam pages are created off the menu, search engines index them, and it is only on 14 April, forty-two days later, that a redirect alerts someone.",
        "**The backups.** The host keeps fourteen daily copies: all were taken after 3 March, all contain the backdoor. Restoring “yesterday's backup” puts the site back in yesterday's state, hacked. With weekly copies kept twelve weeks, there is one from 26 February, before the entry: that is the one to use, completed with the content published since, once checked. The general rule is in [the guide to backups](" + L.sauvegardes + "); for a website, it comes down to keeping copies for a long time, and somewhere other than the server.",
      ] },
      { heading: "What a quick clean leaves behind", body: [
        "The figure shows six places in a hacked site, and what remains when only the visible page has been deleted.",
      ], visual: 'portes', after: [
        "**Five doors out of six.** A file slipped in among the images: a web shell, which gives access to the server from a browser. An administrator account nobody created. A few lines added to a legitimate theme file. Links injected into the database. A scheduled task that reinstalls everything every night. Deleting the modified home page touches none of that.",
        "**Why rebuild.** You cannot prove that a site cleaned by hand is clean; you can prove that a rebuilt site is, because every file comes from a known source. It takes a day or two longer, and it is the only way not to start again the following month. **Content management systems.** The most widespread, WordPress, ran in December 2024 on nearly 62 % of the sites whose content management system is known: so it is also heavily targeted, and its plugins need following. A site that only needs a few pages can be redone more simply, with fewer parts to keep updated.",
      ] },
      { heading: "A site that stays clean, in five layers", body: [
        "The accented layer is the first: updates.",
      ], visual: 'couches', after: [
        "**Updates**: every month, by someone whose task it is; unused plugins are removed, and nothing is installed from outside the official sources. **Accounts**: few administrators, one account per person, two-step verification; the account of the agency from four years ago is closed. The rules are those in [the guide to hacked accounts](" + L.piratage + ").",
        "**Hosting, backups, monitoring.** An alert when a file changes or an account appears brings the discovery time down from six weeks to one day. All of this belongs to the routine upkeep described in [the guide to managed IT](" + L.infogerance + "), and is checked once a year by an outside eye, as in [the guide to the security audit](" + L.audit + "). If the attack also reached your PCs and files, what to do is in [the guide to ransomware](" + L.ransomware + ").",
      ] },
      { heading: "Five days to reopen cleanly, in 2027", body: [
        "Five days in the example, two of them to rebuild.",
      ], visual: 'calendrier', after: [
        "**Day 1, isolate and copy.** **Day 2, date and diagnose**: you know through where and when, and which copy is clean. **Days 3 and 4, rebuild**: clean installation, checked content, plugins cut to what is needed.",
        "**Day 5, reopen and get it reviewed.** The site goes back online and the review request is sent. According to Google's help pages, the review takes a few days for malware, and can take up to several weeks for spam: so the warning does not disappear the same day. For a month, the files are watched closely.",
      ], list: [
        "**What the manager receives**: the date and path of the entry, what was touched, what was rebuilt, the passwords changed, and the date of the review request.",
        "**What the company no longer does**: delete the visible page and wait, restore the previous day's backup, leave a site without updates for four years, keep a former provider's account.",
        "**What is measured**: days since the last update, number of administrators, age of the oldest backup, time between a file change and the alert.",
        "**What Symloop does**: isolation within the hour, the diagnosis, the clean rebuild, closing the way in, the review request, then upkeep and monitoring; and, when the site justifies it, a redesign with fewer parts to maintain.",
      ], faq: [
        { q: "My website has been hacked, what do I do first?", a: "Put it in maintenance without deleting anything, change all the passwords from a safe computer, and copy the current state. Only then do you look for where the intruder came in. Do not reply to any message left on the site." },
        { q: "How do I know if my site is hacked?", a: "Six signs: page replaced, redirect to another site, browser warning, the label “This site may be hacked” in search results, unknown pages published under your name, account suspended by the host. Check from a phone and from a search, not only from your own computer." },
        { q: "Is it enough to delete the page the hacker added?", a: "No. Something else generally remains: a hidden file, an account, added code, a scheduled task. As long as those accesses are there, the site is taken again. You have to rebuild on a clean installation, or restore a copy from before the entry." },
        { q: "Can I restore yesterday's backup?", a: "Only if you are sure the entry dates from yesterday. A site is often hacked several weeks before anyone sees it; the previous day's backup then already contains the intruder's access. You need a copy from before the entry, hence the value of keeping copies over several weeks." },
        { q: "How do I remove the Google warning?", a: "By first cleaning the whole site, then asking for a review in the search console. According to Google's help pages, the review takes a few days for malware and up to several weeks for spam; a request made before the site is clean prolongs the flag." },
        { q: "How does a company website get hacked?", a: "The usual ways in: a component that was not updated, a weak or reused administration password, a plugin downloaded from outside the official sources, a compromised hosting account. These attacks are generally run by automated tools scanning the internet, not by someone targeting you." },
        { q: "Do we have to redo the whole site?", a: "Not the content: texts and images are recovered after checking. The software is reinstalled cleanly. It is also the moment to ask whether a site of a few pages needs a content management system and twenty plugins." },
        { q: "How long does it take to get the site back online?", a: "One hour to isolate it. About five days in our example to date the entry, rebuild and reopen. The search engines' warning may stay a few days to a few weeks longer, for the time of the review." },
        { q: "Was my customers' data stolen?", a: "It depends on what the site held and what the intruder could read: forms, customer accounts, orders. The diagnosis tells you from the logs. If personal data may have been read, see your legal adviser about what follows." },
        { q: "How do we stop it happening again?", a: "Updates every month, few administrators with two-step verification, backups kept several weeks off the server, and an alert when a file changes. And someone whose task this explicitly is." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Restoring yesterday's backup puts the site back in yesterday's state, hacked." },
      { after: 3, text: "You cannot prove that a site cleaned by hand is clean; you can prove that a rebuilt site is." },
    ],
    cta: { eyebrow: "Delete nothing. Send us the site's address and what you see: within the hour we tell you how to isolate it, then where the intruder came in", title: "A site that redirects, a warning in Google, a host that suspends, or a founder in France discovering the problem from a distance: we isolate, diagnose, rebuild clean and close the way in", body: "One hour to isolate, five days to reopen cleanly, a review request, then a site that is updated and monitored. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.domaine, kind: '2027', name: 'Domain name and hosting: who owns what, taking back access' },
      { href: L.audit, kind: '2027', name: 'Company cybersecurity: security audit or penetration test' },
      { href: L.piratage, kind: '2027', name: 'Hacking in a company: hacked mailbox, forged bank details, two-step verification' },
      { href: L.sauvegardes, kind: '2027', name: 'If the server dies tomorrow: backups, tested restore, recovery time' },
    ] },
  },
  ar: {
    kind: 'موقع مخترَق · الجزائر · 2027', title: "موقع مخترَق، ما العمل في الجزائر (2027): الساعة الأولى، ثم خمسة أيام لإعادة البناء، حين يحوّل الموقع زوّاره إلى موقع آخر أو يعرض غوغل تحذيراً",
    dek: "«هذا الصباح، موقعنا يرسل الزوّار إلى موقع مراهنات. وفي غوغل، تحت اسمنا، مكتوب “قد يكون هذا الموقع مخترَقاً”، والمستضيف يهدّد بإيقاف الحساب. الموقع أنجزته قبل أربع سنوات وكالة لم نعد نصل إليها؛ ولم يحدّثه أحد منذ ذلك الحين. ماذا نفعل، وبأي ترتيب، دون أن نخسر كل شيء؟ هل يجب إعادة كل شيء؟» لا نحذف شيئاً ولا «ننظّف» باليد. نعزل، ننسخ، نجد تاريخ الدخول، نعيد البناء نظيفاً، نغلق الباب، ثم نطلب رفع التحذير.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['موقع مخترَق', 'أمن موقع المؤسسة', 'الباب الخلفي', 'النسخ الاحتياطي والاسترجاع', 'تحذير محرّكات البحث', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** ست مراحل، بهذا الترتيب. **العزل**: صفحة صيانة، دون حذف شيء. **نسخ** الحالة المصابة، من أجل التشخيص. **تأريخ** الدخول: هو، لا اليوم الذي انتبهنا فيه، ما يقول أي نسخة احتياطية سليمة. **إعادة البناء**: تنصيب نظيف، برمجيات من المصدر، ومحتوى مراجَع، أو استرجاع نسخة سابقة للدخول. **الإغلاق**: كل كلمات المرور، الحسابات المجهولة، والتحديثات. **طلب مراجعة** الموقع من محرّك البحث، ثم المراقبة. وما لا يجب فعله: محو الصفحة الظاهرة والاعتقاد أن الأمر انتهى. احسبوا ساعة للعزل، ونحو خمسة أيام لإعادة الفتح نظيفاً.",
      "هذا الدليل موجَّه إلى المسيّر الذي يعرض موقع مؤسسته غير ما يجب، أو يحوّل زوّاره، أو يحمل تحذيراً في محرّك بحث أو متصفح، وإلى المؤسس المقيم في فرنسا الذي يكتشف المشكلة عن بعد. المفاهيم المذكورة آتية من مصادر علنية: تشويه المواقع، الباب الخلفي، واجهة التحكّم عن بعد، خدمة التصفح الآمن لغوغل، ومساعدة لوحة البحث التابعة لها. الموقع والتواريخ والإضافة في المثال مركَّبة. هذا الدليل لا يتناول واجبات التصريح ولا المتابعات القضائية: إذا أمكن أن تكون بيانات زبائن قد قُرئت، راجعوا مستشاركم.",
    ],
    sections: [
      { heading: "ست علامات لموقع مخترَق، والحركة الأولى", body: [
        "الشكل يعطي، لست علامات، ما معناها وما نفعله أولاً.",
      ], visual: 'signes', after: [
        "**ما نراه.** التشويه هجوم يغيّر المظهر المرئي لموقع أو صفحة: وهو الحالة الأظهر. وهجمات أخرى تترك الموقع سليماً في الظاهر بالنسبة لكم، وتجعله يتصرف بشكل آخر مع زائر قادم من محرّك بحث أو على هاتف. فتحققوا دائماً من جهاز آخر ومن بحث. **التحذيرات.** التصفح الآمن لغوغل خدمة تحذّر المستعملين حين يحاولون زيارة موقع خطير؛ ويستعملها " + I('Chrome') + " و" + I('Safari') + " و" + I('Firefox') + "، من بين متصفحات أخرى. وفي نتائج البحث تظهر عبارة «قد يكون هذا الموقع مخترَقاً» تحت اسمكم؛ وحسب مساعدة غوغل، لا تزول إلا بعد تدخل صاحب الموقع.",
        "**الصفحات المزعجة.** صفحات ليست لكم، بلغة أجنبية أو تروّج لمنتَجات لا علاقة لها، تُنشر باسم نطاقكم: هو تلاعب متعمَّد بفهارس محرّكات البحث، على حسابكم. **المستضيف.** إذا أوقف الحساب، اطلبوا تقريره: الملف المكتشَف والتاريخ. **الحركة الأولى، دائماً نفسها.** وضع الموقع في الصيانة دون حذف شيء، وتسجيل ما نراه، مع لقطات شاشة. وإذا لم يعد الموقع يُعرض إطلاقاً، فالسبب قد يكون في مكان آخر، اسم نطاق انتهى أجله مثلاً: انظر [دليل اسم النطاق](" + L.domaine + ").",
      ] },
      { heading: "إعادة موقع إلى حاله، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: العزل، دون حذف شيء.",
      ], visual: 'etapes', after: [
        "**العزل.** صفحة صيانة تعوّض الموقع؛ والملفات تبقى في مكانها. وكلمات المرور تُغيَّر فوراً، من حاسوب موثوق: الاستضافة، قاعدة البيانات، حسابات الإدارة، والوصول إلى الملفات. **النسخ.** الحالة المصابة تُنسخ كما هي: هي القطعة الوحيدة التي ستقول من أين دخل المتسلّل. **التأريخ.** الملفات المعدَّلة والحسابات المنشأة وسجلات الخادم تعطي يوم الدخول.",
        "**إعادة البناء.** على تنصيب نظيف: نواة البرنامج والقالب والإضافات تُؤخذ من مصدرها الرسمي؛ والمحتوى، نصوصاً وصوراً، يُراجَع ثم يُعاد؛ والملفات التي لا يعرفها أحد لا تعود. **الإغلاق.** يُحدَّد باب الدخول ويُغلق: تحديث، إضافة تُسحب، حساب يُحذف، وكلمة مرور تُغيَّر مرة ثانية بعد العودة إلى الخدمة. **طلب المراجعة.** يُقدَّم الطلب في لوحة البحث، حين يكون الموقع كله نظيفاً؛ وحسب مساعدة غوغل، الطلب المقدَّم مبكراً لا يفعل إلا إطالة مدة التنبيه.",
      ] },
      { heading: "الاختراق أقدم بستة أسابيع من علاماته", body: [
        "الشكل يعود في الزمن، من اليوم الذي ننتبه فيه إلى يوم الدخول، ثم ينظر في النسخ الاحتياطية.",
      ], visual: 'chronologie', after: [
        "**الدخول صامت.** في المثال، إضافة لم تُحدَّث تسمح بدخول متسلّل يوم 3 مارس. وفي الغد يضع باباً خلفياً، وهو وسيلة مخفية لتجاوز التحقق العادي من الهوية. ثم لا يحدث شيء ظاهر: تُنشأ صفحات مزعجة خارج القائمة، وتفهرسها محرّكات البحث، ولا ينبّه أحداً إلا تحويل يوم 14 أفريل، بعد اثنين وأربعين يوماً.",
        "**النسخ الاحتياطية.** المستضيف يحفظ أربع عشرة نسخة يومية: أُخذت كلها بعد 3 مارس، وكلها تحتوي الباب الخلفي. واسترجاع «نسخة الأمس» يعيد الموقع إلى حال الأمس، مخترَقاً. وبنسخ أسبوعية تُحفظ اثني عشر أسبوعاً، توجد نسخة 26 فيفري، السابقة للدخول: هي التي تنفع، مكمَّلة بالمحتوى المنشور بعدها، بعد مراجعته. والقاعدة العامة في [دليل النسخ الاحتياطية](" + L.sauvegardes + ")؛ وللموقع تتلخص في الحفظ طويلاً، وفي مكان غير الخادم.",
      ] },
      { heading: "ما يتركه التنظيف السريع وراءه", body: [
        "الشكل يبيّن ستة مواضع في موقع مخترَق، وما يبقى حين لا تُحذف إلا الصفحة الظاهرة.",
      ], visual: 'portes', after: [
        "**خمسة أبواب من ستة.** ملف مدسوس بين الصور: واجهة تحكّم عن بعد، تعطي الوصول إلى الخادم من متصفح. حساب مسؤول لم ينشئه أحد. بضعة أسطر مضافة في ملف سليم من القالب. روابط محقونة في قاعدة البيانات. ومهمة مجدوَلة تعيد تنصيب كل شيء كل ليلة. وحذف الصفحة الرئيسية المعدَّلة لا يمسّ شيئاً من ذلك.",
        "**لماذا نعيد البناء.** لا يمكن إثبات أن موقعاً نُظِّف باليد نظيف؛ ويمكن إثبات أن موقعاً أُعيد بناؤه نظيف، لأن كل ملف آتٍ من مصدر معروف. وهو أطول بيوم أو يومين، وهو الطريقة الوحيدة لعدم البدء من جديد في الشهر الموالي. **أنظمة تسيير المحتوى.** أكثرها انتشاراً، " + I('WordPress') + "، كان في ديسمبر 2024 يشغّل نحو 62 بالمئة من المواقع التي يُعرَف نظام تسيير محتواها: فهو كذلك مستهدَف كثيراً، وإضافاته تتطلب متابعة. والموقع الذي لا يحتاج إلا بضع صفحات يمكن إعادته بشكل أبسط، بقطع أقل تُحدَّث.",
      ] },
      { heading: "موقع يبقى نظيفاً، في خمس طبقات", body: [
        "الطبقة المبرزة هي الأولى: التحديثات.",
      ], visual: 'couches', after: [
        "**التحديثات**: كل شهر، على يد شخص هي مهمته؛ الإضافات غير اللازمة تُسحب، ولا شيء يُنصَّب من خارج المصادر الرسمية. **الحسابات**: مسؤولون قليلون، حساب لكل شخص، وتحقق بخطوتين؛ وحساب الوكالة قبل أربع سنوات يُغلق. والقواعد هي قواعد [دليل اختراق الحسابات](" + L.piratage + ").",
        "**الاستضافة، النسخ الاحتياطية، والمراقبة.** تنبيه حين يتغيّر ملف أو يظهر حساب يُنزل مدة الاكتشاف من ستة أسابيع إلى يوم. وكل ذلك من الصيانة اليومية الموصوفة في [دليل تسيير الإعلام الآلي](" + L.infogerance + ")، ويُراقَب مرة في السنة بنظرة خارجية، كما في [دليل التدقيق الأمني](" + L.audit + "). وإذا مسّ الهجوم كذلك حواسيبكم وملفاتكم، فما يجب فعله في [دليل فيروس الفدية](" + L.ransomware + ").",
      ] },
      { heading: "خمسة أيام لإعادة الفتح نظيفاً، سنة 2027", body: [
        "خمسة أيام في المثال، منها يومان لإعادة البناء.",
      ], visual: 'calendrier', after: [
        "**اليوم 1، العزل والنسخ.** **اليوم 2، التأريخ والتشخيص**: نعرف من أين ومتى، وأي نسخة سليمة. **اليومان 3 و4، إعادة البناء**: تنصيب نظيف، محتوى مراجَع، وإضافات تُقلَّص إلى الضروري.",
        "**اليوم 5، الفتح وطلب المراجعة.** يعود الموقع إلى الخدمة ويُرسَل طلب المراجعة. وحسب مساعدة غوغل، الفحص يأخذ بضعة أيام لبرمجية خبيثة، وقد يصل إلى عدة أسابيع للصفحات المزعجة: فالتحذير لا يزول في اليوم نفسه. وطوال شهر، تُراقَب الملفات عن قرب.",
      ], list: [
        "**ما يستلمه المسيّر**: تاريخ ومسار الدخول، ما مُسّ، ما أُعيد بناؤه، كلمات المرور المغيَّرة، وتاريخ طلب المراجعة.",
        "**ما لم تعد المؤسسة تفعله**: محو الصفحة الظاهرة والانتظار، استرجاع نسخة الأمس، ترك موقع دون تحديث أربع سنوات، والإبقاء على حساب متعهّد سابق.",
        "**ما يُقاس**: الأيام منذ آخر تحديث، عدد المسؤولين، عمر أقدم نسخة احتياطية، والمدة بين تغيّر ملف والتنبيه.",
        "**ما تفعله Symloop**: العزل خلال الساعة، التشخيص، إعادة البناء نظيفاً، إغلاق المدخل، طلب المراجعة، ثم الصيانة والمراقبة؛ وحين يبرّر الموقع ذلك، إعادة تصميمه بقطع أقل تُصان.",
      ], faq: [
        { q: "اختُرق موقعي، ماذا أفعل أولاً؟", a: "وضعه في الصيانة دون حذف شيء، تغيير كل كلمات المرور من حاسوب آمن، ونسخ الحالة الحالية. وبعد ذلك فقط نبحث من أين دخل المتسلّل. ولا تجيبوا عن أي رسالة تُركت في الموقع." },
        { q: "كيف أعرف أن موقعي مخترَق؟", a: "ست علامات: صفحة مستبدَلة، تحويل نحو موقع آخر، تحذير المتصفح، عبارة «قد يكون هذا الموقع مخترَقاً» في نتائج البحث، صفحات مجهولة تُنشر باسمكم، وحساب أوقفه المستضيف. تحققوا من هاتف ومن بحث، لا من حاسوبكم فقط." },
        { q: "هل يكفي حذف الصفحة التي أضافها المخترِق؟", a: "لا. يبقى في الغالب شيء آخر: ملف مخبَّأ، حساب، شيفرة مضافة، أو مهمة مجدوَلة. وما دامت هذه المداخل موجودة، يُستعاد الموقع. يجب إعادة البناء على تنصيب نظيف، أو استرجاع نسخة سابقة للدخول." },
        { q: "هل أستطيع استرجاع نسخة الأمس؟", a: "فقط إذا كنتم متأكدين أن الدخول وقع أمس. الموقع يُخترَق غالباً أسابيع قبل أن نراه؛ فنسخة الأمس تحتوي حينها وصول المتسلّل. تلزم نسخة سابقة للدخول، ومن هنا فائدة حفظ نسخ على عدة أسابيع." },
        { q: "كيف يُرفع تحذير غوغل؟", a: "بتنظيف الموقع كله أولاً، ثم طلب مراجعة في لوحة البحث. وحسب مساعدة غوغل، الفحص يأخذ بضعة أيام لبرمجية خبيثة وقد يصل إلى عدة أسابيع للصفحات المزعجة؛ والطلب المقدَّم قبل أن يكون الموقع نظيفاً يطيل التنبيه." },
        { q: "كيف يُخترَق موقع مؤسسة؟", a: "المداخل المعتادة: مكوّن لم يُحدَّث، كلمة مرور إدارة ضعيفة أو مستعمَلة في مكان آخر، إضافة محمَّلة من خارج المصادر الرسمية، أو حساب استضافة مخترَق. وهذه الهجمات تقوم بها في الغالب أدوات آلية تمسح الإنترنت، لا شخص يستهدفكم." },
        { q: "هل يجب إعادة الموقع كله؟", a: "ليس المحتوى: النصوص والصور تُستعاد بعد المراجعة. أما البرنامج فيُعاد تنصيبه نظيفاً. وهي كذلك فرصة للتساؤل هل يحتاج موقع من بضع صفحات إلى نظام تسيير محتوى وعشرين إضافة." },
        { q: "كم من الوقت لإعادة الموقع إلى الخدمة؟", a: "ساعة لعزله. ونحو خمسة أيام في مثالنا لتأريخ الدخول وإعادة البناء والفتح. وتحذير محرّكات البحث قد يبقى بضعة أيام إلى بضعة أسابيع إضافية، مدة المراجعة." },
        { q: "هل سُرقت بيانات زبائني؟", a: "هذا يتوقف على ما كان في الموقع وما استطاع المتسلّل قراءته: استمارات، حسابات زبائن، طلبيات. والتشخيص يقول ذلك انطلاقاً من السجلات. وإذا أمكن أن تكون بيانات شخصية قد قُرئت، راجعوا مستشاركم لما يتبع." },
        { q: "كيف نتفادى أن يتكرر ذلك؟", a: "تحديثات كل شهر، مسؤولون قليلون بالتحقق بخطوتين، نسخ احتياطية تُحفظ عدة أسابيع خارج الخادم، وتنبيه حين يتغيّر ملف. وشخص تكون هذه مهمته صراحة." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "استرجاع نسخة الأمس يعيد الموقع إلى حال الأمس، مخترَقاً." },
      { after: 3, text: "لا يمكن إثبات أن موقعاً نُظِّف باليد نظيف؛ ويمكن إثبات أن موقعاً أُعيد بناؤه نظيف." },
    ],
    cta: { eyebrow: "لا تحذفوا شيئاً. أرسلوا إلينا عنوان الموقع وما ترونه: نقول لكم خلال الساعة كيف تعزلونه، ثم من أين دخل المتسلّل", title: "موقع يحوّل الزوّار، تحذير في غوغل، مستضيف يوقف الحساب، أو مؤسس في فرنسا يكتشف المشكلة عن بعد: نعزل، نشخّص، نعيد البناء نظيفاً ونغلق المدخل", body: "ساعة للعزل، خمسة أيام لإعادة الفتح نظيفاً، طلب مراجعة، ثم موقع محدَّث ومراقَب. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.domaine, kind: '2027', name: 'اسم النطاق والاستضافة: من يملك ماذا، واستعادة الوصول' },
      { href: L.audit, kind: '2027', name: 'الأمن السيبراني للمؤسسة: تدقيق أمني أم اختبار اختراق' },
      { href: L.piratage, kind: '2027', name: 'الاختراق في المؤسسة: بريد مخترَق، بيانات بنكية مزوَّرة، وتحقق بخطوتين' },
      { href: L.sauvegardes, kind: '2027', name: 'إذا مات الخادم غداً: النسخ الاحتياطية، الاسترجاع المجرَّب، أجل الاستئناف' },
    ] },
  },
};

const KEYWORDS = "site web piraté que faire 2027, site internet piraté, site web piraté algérie, mon site a été piraté, site redirige vers un autre site, ce site est peut-être piraté google, nettoyer site wordpress piraté, restaurer site piraté sauvegarde, sécuriser site web entreprise, hacked website what to do algeria 2027, this site may be hacked fix, wordpress site hacked recovery, موقع مخترَق ما العمل 2027, اختراق موقع الشركة, استرجاع موقع مخترَق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
