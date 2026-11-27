import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/site-internet-ne-fonctionne-plus-que-faire-entreprise-algerie-2027-site-inaccessible-message-d-erreur-nom-de-domaine-certificat-hebergement.mjs';

const SLUG = 'site-internet-ne-fonctionne-plus-que-faire-entreprise-algerie-2027-site-inaccessible-message-d-erreur-nom-de-domaine-certificat-hebergement';
const FIGURES = ['ordre', 'trajet', 'messages', 'decouverte', 'couches', 'heure'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  domaine: '/blog/nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main/',
  pirate: '/blog/site-web-pirate-que-faire-entreprise-algerie-2027-premiere-heure-site-redirige-avertissement-google-nettoyer-ou-reconstruire-sauvegarde-saine/',
  messagerie: '/blog/messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365/',
  sauvegardes: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
  lente: '/blog/application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure/',
};

const CONTENT = {
  fr: {
    kind: 'Site en panne · Algérie · 2027', title: "Mon site internet ne fonctionne plus, que faire en Algérie (2027) : vérifier d'ailleurs, cinq maillons dans l'ordre, lire le message d'erreur, savoir qui appeler, et l'apprendre avant vos clients",
    dek: "« Depuis ce matin, notre site ne s'affiche plus. Chez moi, le navigateur écrit “Ce site est inaccessible” ; un client me dit qu'il voit un avertissement de sécurité. Je ne sais pas si c'est le nom de domaine, l'hébergement ou le site lui-même, ni qui appeler : l'agence qui l'a fait ne répond plus. Par où commencer ? » Par le message d'erreur : il dit déjà à quel maillon la visite s'arrête. Puis une vérification depuis votre téléphone, et cinq maillons à regarder dans l'ordre.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Site internet en panne', 'Message d’erreur du navigateur', 'Nom de domaine et DNS', 'Certificat de sécurité', 'Hébergement', 'Surveillance de site'],
    intro: [
      "**Réponse courte.** Notez d'abord le message d'erreur mot pour mot, avec l'heure. Puis ouvrez le site depuis un autre réseau, le téléphone en 4G : s'il s'ouvre, la panne est chez vous. Sinon, cinq maillons, dans cet ordre. **Le nom de domaine** : est-il expiré ? **Le DNS** : le nom mène-t-il encore au serveur ? **L'hébergement** : le compte est-il actif, le serveur répond-il ? **Le certificat** : sa date est-elle passée ? **L'application** : qu'est-ce qui a changé hier ? « Introuvable », « délai dépassé », « connexion non privée » et « erreur 500 » ne désignent ni le même maillon ni la même personne à appeler. Pour la suite : un test extérieur chaque minute, qui vous prévient avant vos clients.",
      "Ce guide s'adresse au gérant dont le site d'entreprise ne s'affiche plus, ou affiche une erreur, et au fondateur installé en France qui l'apprend par un client. Les définitions citées viennent de sources publiques : les codes de réponse d'un serveur web, le système de noms de domaine, le certificat, la surveillance de site. Les messages sont ceux qu'affiche Chrome ; les mots changent d'un navigateur à l'autre. La panne, ses horaires et le nombre de visites sont un exemple construit. Si le site affiche autre chose que le vôtre ou renvoie ailleurs, ce n'est pas une panne mais une intrusion : voir [le guide sur le site piraté](" + L.pirate + ").",
    ],
    sections: [
      { heading: "D'abord d'ailleurs, puis cinq maillons dans l'ordre", body: [
        "Le premier temps est accentué : ouvrir le site depuis un autre réseau.",
      ], visual: 'ordre', after: [
        "**D'ailleurs.** Ouvrez le site depuis le téléphone, Wi-Fi coupé, ou demandez à quelqu'un hors de l'entreprise. S'il s'ouvre, le site va bien : le problème est dans votre réseau, votre poste ou votre navigateur, qui gardent parfois en mémoire une ancienne adresse. S'il ne s'ouvre nulle part, la panne est réelle. **Le nom de domaine.** Il se loue à l'année ; sa date d'expiration se lit dans l'espace client du bureau d'enregistrement. S'il est expiré, tout s'arrête, le courrier aussi : voir [le guide sur le nom de domaine](" + L.domaine + ") et, pour les boîtes, [le guide sur la messagerie](" + L.messagerie + ").",
        "**Le DNS.** Le nom doit mener à l'adresse du serveur ; un enregistrement supprimé ou un changement de serveurs de noms suffit à tout couper, et la correction met de quelques minutes à quelques heures à être vue partout, selon la durée de mise en mémoire réglée dans la zone. **L'hébergement.** L'espace client dit en une minute si le compte est suspendu, la facture impayée ou le disque plein. **Le certificat.** Un clic sur l'avertissement du navigateur donne sa date de fin. **L'application.** Si tout le reste est en ordre, demandez-vous ce qui a changé la veille : une mise à jour, une extension, un fichier remplacé.",
      ] },
      { heading: "Où la visite s'arrête : cinq maillons, cinq messages", body: [
        "La figure montre, pour chaque maillon qui casse, jusqu'où arrive la visite et ce que voit le visiteur.",
      ], visual: 'trajet', after: [
        "**Le chemin.** Pour afficher une page, une visite traverse cinq maillons, toujours dans le même ordre. Le nom de domaine, d'abord, qu'il faut avoir renouvelé. Le DNS ensuite, un service de noms hiérarchique et distribué qui fournit un système de nommage pour les ordinateurs et les services : c'est lui qui traduit le nom en adresse. Puis le serveur, loué chez un hébergeur. Puis le certificat, un document électronique qui sert à prouver qu'une clé publique appartient bien à son titulaire : c'est lui qui met le cadenas dans la barre d'adresse. Enfin l'application, c'est-à-dire le code du site et sa base de données.",
        "**Lire la figure.** Plus la barre est courte, plus la cause est en amont, et plus elle emporte de choses avec elle : un nom de domaine expiré coupe le site, le courrier et tout ce qui porte ce nom. **Trois interlocuteurs.** Le bureau d'enregistrement pour le nom, l'hébergeur pour le serveur, le développeur pour l'application ; le DNS et le certificat sont gérés par l'un ou par l'autre, selon l'installation. Savoir lequel appeler fait gagner des heures. Si vous n'avez les accès d'aucun des trois, c'est le premier chantier, panne ou pas.",
      ] },
      { heading: "Lire le message d'erreur : il dit où chercher", body: [
        "La figure rapproche six messages de ce qu'ils veulent dire et de la personne à appeler.",
      ], visual: 'messages', after: [
        "**Les messages du navigateur.** « Ce site est inaccessible », accompagné de NXDOMAIN, veut dire que le nom ne mène à aucune adresse : cherchez du côté du nom de domaine, puis du DNS. « Délai dépassé » ou « connexion refusée » : le nom mène quelque part, mais rien ne répond. « Votre connexion n'est pas privée » : le serveur répond, c'est le certificat qui est expiré ou qui ne correspond pas au nom.",
        "**Les codes à trois chiffres.** Ils viennent du serveur ; ceux qui commencent par 5 signifient qu'il sait avoir rencontré une erreur. Le code 500 est un message générique, donné quand une situation inattendue s'est produite et qu'aucun message plus précis ne convient : cherchez dans l'application. 502 et 504 : le serveur servait d'intermédiaire et a reçu une réponse invalide, ou pas de réponse à temps, de la machine placée derrière lui. 503 : il ne peut pas traiter la demande, parce qu'il est surchargé ou en maintenance. 404 : la ressource demandée est introuvable, ce qui concerne une page, pas le site. 403 : la demande était valide, mais le serveur refuse d'agir. Certains gestionnaires de contenu écrivent en toutes lettres « erreur de connexion à la base de données » : c'est alors la base qu'il faut regarder.",
      ] },
      { heading: "La panne dure surtout le temps de l'apprendre", body: [
        "La figure déroule deux fois la même panne, sans surveillance puis avec un test chaque minute.",
      ], visual: 'decouverte', after: [
        "**L'exemple.** Un certificat expire un vendredi à 23 heures. Sans surveillance, personne ne le sait pendant 33 heures 30 : c'est un client qui appelle le dimanche matin. Il faut encore une heure et demie pour trouver qui appeler et réparer. Total : 35 heures d'arrêt, et, à cinq visites par heure, environ 175 visiteurs devant un avertissement de sécurité. Avec un test chaque minute, l'alerte part à 23 h 03 et le site revient à 23 h 45.",
        "**Ce que fait la surveillance.** Surveiller un site, c'est tester et vérifier que les utilisateurs peuvent s'en servir comme prévu. En pratique, un robot placé hors de votre réseau ouvre la vraie page chaque minute, vérifie qu'un texte attendu s'y trouve et mesure le temps de réponse ; après trois échecs de suite, il prévient deux personnes. Il suit aussi deux dates, celle du certificat et celle du nom de domaine, et alerte trente jours avant. **Un repère.** Une disponibilité de 99,9 % sur l'année laisse environ 8 heures 46 minutes d'arrêt ; 99 %, un peu plus de trois jours et demi. Demandez à votre hébergeur lequel il s'engage à tenir. Un site lent sans être arrêté relève d'un autre diagnostic : voir [le guide sur l'application lente](" + L.lente + ").",
      ] },
      { heading: "Ce qui tient un site debout, en cinq couches", body: [
        "La couche accentuée est la surveillance.",
      ], visual: 'couches', after: [
        "**Le nom, le DNS, l'hébergement.** Les comptes sont au nom de l'entreprise, avec deux contacts à jour ; le renouvellement est automatique et une alerte part soixante jours avant l'échéance. Le disque et la mémoire du serveur sont suivis, et les sauvegardes sortent du serveur, comme dans [le guide sur les sauvegardes](" + L.sauvegardes + "). **Le certificat.** Les certificats de Let's Encrypt sont valables 90 jours par défaut et, d'après les informations publiées sur l'organisme, il prévoit de ramener cette durée à 64 jours à partir de février 2027 ; le forum qui réunit autorités de certification et navigateurs a approuvé en avril 2025 une réduction de la durée de vie des certificats jusqu'à 47 jours en 2029. Un renouvellement fait à la main ne tient plus : il doit être automatique, et l'automatisme lui-même doit être surveillé.",
        "**L'application.** Une mise à jour s'essaie d'abord sur une copie du site ; un retour arrière se fait en un geste ; le journal d'erreurs est lu, pas seulement rempli. **La surveillance.** Sans elle, les quatre autres couches lâchent sans bruit. L'ensemble relève de l'entretien courant décrit dans [le guide sur l'infogérance](" + L.infogerance + ").",
      ] },
      { heading: "La première heure, minute par minute, en 2027", body: [
        "Une heure dans l'exemple, dont les cinq premières minutes décident du reste.",
      ], visual: 'heure', after: [
        "**Minutes 0 à 5.** Le message, l'heure, un essai depuis un autre réseau : vous savez déjà si la panne est chez vous, et quel maillon regarder. **Minutes 5 à 15.** Le nom de domaine et le DNS : une date, quelques enregistrements. **Minutes 15 à 30.** L'hébergeur : l'espace client, puis un ticket qui cite le message exact et l'heure.",
        "**Minutes 30 à 50.** Le certificat se renouvelle, la dernière mise à jour s'annule, le journal d'erreurs se lit. **Minutes 50 à 60.** Le site est ouvert depuis deux réseaux, un formulaire est essayé, les clients sont prévenus, et la cause est notée avec ce qui l'évitera. Toutes les pannes ne tiennent pas dans une heure ; celles qui durent sont souvent celles dont personne n'a les accès.",
      ], list: [
        "**Ce que le gérant reçoit** : la liste des cinq maillons avec, pour chacun, qui le gère, où sont les accès et quelle est la prochaine échéance ; et, après chaque panne, l'heure, la cause et la correction.",
        "**Ce que l'entreprise ne fait plus** : apprendre la panne par un client, appeler le développeur pour un nom de domaine expiré, renouveler un certificat à la main, chercher un mot de passe un dimanche.",
        "**Ce qui est mesuré** : minutes d'arrêt par mois, délai entre la panne et l'alerte, délai entre l'alerte et le retour, jours restants avant la fin du certificat et du nom de domaine.",
        "**Ce que fait Symloop** : le diagnostic et la remise en service, la reprise des accès au nom de l'entreprise, les renouvellements automatiques, la surveillance avec alerte, les mises à jour et, quand le site le justifie, son déplacement vers un hébergement suivi.",
      ], faq: [
        { q: "Mon site internet ne fonctionne plus, par où commencer ?", a: "Notez le message d'erreur mot pour mot et l'heure, puis ouvrez le site depuis votre téléphone en 4G. S'il s'ouvre, la panne est dans votre réseau ou votre poste. Sinon, vérifiez dans l'ordre le nom de domaine, le DNS, l'hébergement, le certificat, puis l'application." },
        { q: "Pourquoi mon site ne s'affiche plus alors qu'il marchait hier ?", a: "Parce qu'une échéance est passée ou que quelque chose a changé. Les échéances : le nom de domaine, la facture d'hébergement, le certificat. Les changements : une mise à jour, une extension, un enregistrement DNS modifié. Le message d'erreur dit dans quelle famille chercher." },
        { q: "Comment savoir si le problème vient de mon ordinateur ou du site ?", a: "En ouvrant le site depuis un autre réseau : le téléphone en 4G, Wi-Fi coupé, ou une personne hors de l'entreprise. S'il s'ouvre ailleurs, le site va bien. Le problème est alors chez vous : mémoire du navigateur, réseau du bureau, pare-feu." },
        { q: "Que veut dire « Ce site est inaccessible » ?", a: "Que le navigateur n'a pas atteint le site. Avec la mention NXDOMAIN, le nom ne mène à aucune adresse : nom de domaine expiré ou zone DNS modifiée. Avec « délai dépassé » ou « connexion refusée », le nom mène à un serveur qui ne répond pas : voyez l'hébergeur." },
        { q: "Que veut dire « Votre connexion n'est pas privée » ?", a: "Que le certificat du site est expiré, ou qu'il ne correspond pas au nom. Le site lui-même fonctionne, mais le navigateur refuse de l'afficher sans avertissement. Il faut renouveler le certificat, puis comprendre pourquoi le renouvellement automatique n'a pas eu lieu." },
        { q: "Que veulent dire les erreurs 500, 502, 503 et 504 ?", a: "Que le serveur a répondu, et qu'il sait avoir rencontré une erreur. 500 : une situation inattendue dans l'application. 502 et 504 : il attendait une réponse d'une autre machine, reçue invalide ou trop tard. 503 : il est surchargé ou en maintenance." },
        { q: "Mon site est en panne et l'agence qui l'a créé ne répond plus : que faire ?", a: "Contactez directement le bureau d'enregistrement et l'hébergeur : ce sont eux qui tiennent le nom et le serveur, et ils peuvent rendre la main au titulaire légitime. Rassemblez ce qui prouve que le site est le vôtre. Ensuite, faites reprendre tous les accès au nom de l'entreprise." },
        { q: "Qui dois-je appeler : l'hébergeur ou le développeur ?", a: "Le message le dit. Nom introuvable : le bureau d'enregistrement. Serveur qui ne répond pas, erreurs 502 à 504, certificat : l'hébergeur d'abord. Erreur 500, page blanche, erreur de base de données après une mise à jour : le développeur." },
        { q: "Mes e-mails ne marchent plus non plus : est-ce lié ?", a: "Souvent, oui. Si le site et le courrier tombent en même temps, la cause est en amont : le nom de domaine a expiré, ou la zone DNS a été modifiée. Si le courrier fonctionne et pas le site, cherchez plus bas : hébergement, certificat, application." },
        { q: "Comment être prévenu quand le site tombe ?", a: "Avec un test extérieur qui ouvre la page chaque minute et prévient deux personnes après quelques échecs de suite, par SMS et par courriel. Le même outil suit la date de fin du certificat et du nom de domaine, et alerte trente jours avant." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Plus la cause est en amont, plus elle emporte de choses : un nom de domaine expiré coupe le site et le courrier." },
      { after: 3, text: "Un test extérieur ne répare rien ; il fait d'une panne de week-end un incident de trois quarts d'heure." },
    ],
    cta: { eyebrow: "Envoyez-nous l'adresse du site, le message d'erreur mot pour mot et l'heure : nous vous disons quel maillon a lâché et qui doit agir", title: "Site qui ne s'affiche plus, avertissement de sécurité, erreur 500, agence injoignable, ou fondateur en France qui l'apprend par un client : nous remettons le site en service, et vous le saurez désormais avant eux", body: "Diagnostic, remise en service, accès repris au nom de l'entreprise, renouvellements automatiques, surveillance chaque minute avec alerte. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.domaine, kind: '2027', name: 'Nom de domaine et hébergement : qui possède quoi, reprendre les accès' },
      { href: L.pirate, kind: '2027', name: 'Site web piraté : la première heure, puis cinq jours pour reconstruire' },
      { href: L.infogerance, kind: '2027', name: 'Infogérance : contrat, délais, supervision, rapport mensuel' },
      { href: L.sauvegardes, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes, restauration testée, délai de reprise' },
    ] },
  },
  en: {
    kind: 'Website down · Algeria · 2027', title: "My website has stopped working, what to do in Algeria (2027): check from elsewhere, five links in order, read the error message, know who to call, and find out before your customers",
    dek: "“Since this morning our site no longer displays. On my computer the browser says ‘This site can’t be reached’; a customer tells me he sees a security warning. I do not know whether it is the domain name, the hosting or the site itself, nor who to call: the agency that built it no longer answers. Where do I start?” With the error message: it already says at which link the visit stops. Then one check from your phone, and five links to look at in order.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Website down', 'Browser error message', 'Domain name and DNS', 'Security certificate', 'Hosting', 'Website monitoring'],
    intro: [
      "**Short answer.** First note the error message word for word, with the time. Then open the site from another network, your phone on 4G: if it opens, the fault is at your end. If not, five links, in this order. **The domain name**: has it expired? **DNS**: does the name still lead to the server? **Hosting**: is the account active, does the server answer? **The certificate**: has its date passed? **The application**: what changed yesterday? “Not found”, “timed out”, “connection not private” and “error 500” point neither to the same link nor to the same person to call. For afterwards: an outside test every minute, which warns you before your customers.",
      "This guide is for the manager whose company site no longer displays, or shows an error, and for the founder based in France who hears about it from a customer. The definitions quoted come from public sources: the response codes of a web server, the Domain Name System, the certificate, website monitoring. The messages are those Chrome displays; the words change from one browser to another. The outage, its times and the number of visits are a constructed example. If the site shows something other than yours or sends visitors elsewhere, it is not an outage but an intrusion: see [the guide to the hacked website](" + L.pirate + ").",
    ],
    sections: [
      { heading: "First from elsewhere, then five links in order", body: [
        "The first step is accented: open the site from another network.",
      ], visual: 'ordre', after: [
        "**From elsewhere.** Open the site from your phone with Wi-Fi off, or ask someone outside the company. If it opens, the site is fine: the problem is in your network, your computer or your browser, which sometimes keep an old address in memory. If it opens nowhere, the outage is real. **The domain name.** It is rented by the year; its expiry date can be read in the registrar's customer area. If it has expired, everything stops, email too: see [the guide to the domain name](" + L.domaine + ") and, for mailboxes, [the guide to professional email](" + L.messagerie + ").",
        "**DNS.** The name has to lead to the server's address; one deleted record or a change of name servers is enough to cut everything, and the correction takes from a few minutes to a few hours to be seen everywhere, depending on the caching time set in the zone. **Hosting.** The customer area tells you in a minute whether the account is suspended, the invoice unpaid or the disk full. **The certificate.** A click on the browser's warning gives its end date. **The application.** If everything else is in order, ask what changed the day before: an update, a plugin, a replaced file.",
      ] },
      { heading: "Where the visit stops: five links, five messages", body: [
        "The figure shows, for each link that breaks, how far the visit gets and what the visitor sees.",
      ], visual: 'trajet', after: [
        "**The path.** To display a page, a visit crosses five links, always in the same order. The domain name first, which has to have been renewed. Then DNS, a hierarchical and distributed name service that provides a naming system for computers, services and other resources: it is what translates the name into an address. Then the server, rented from a host. Then the certificate, an electronic document used to prove the valid attribution of a public key to the identity of its holder: it is what puts the padlock in the address bar. Finally the application, meaning the site's code and its database.",
        "**Reading the figure.** The shorter the bar, the further upstream the cause, and the more it takes down with it: an expired domain name cuts the site, email and everything carrying that name. **Three people to call.** The registrar for the name, the host for the server, the developer for the application; DNS and the certificate are managed by one or the other, depending on the set-up. Knowing which one to call saves hours. If you hold the access for none of the three, that is the first job, outage or not.",
      ] },
      { heading: "Reading the error message: it says where to look", body: [
        "The figure sets six messages against what they mean and the person to call.",
      ], visual: 'messages', after: [
        "**The browser's messages.** “This site can’t be reached”, with NXDOMAIN, means the name leads to no address: look at the domain name, then DNS. “Timed out” or “connection refused”: the name leads somewhere, but nothing answers. “Your connection is not private”: the server answers, it is the certificate that has expired or does not match the name.",
        "**The three-digit codes.** They come from the server; those beginning with 5 indicate that the server is aware that it has encountered an error. Code 500 is a generic error message, given when an unexpected condition was encountered and no more specific message is suitable: look in the application. 502 and 504: the server was acting as a gateway and received an invalid response, or no timely response, from the machine behind it. 503: it cannot handle the request, because it is overloaded or down for maintenance. 404: the requested resource could not be found, which concerns one page, not the site. 403: the request was valid, but the server refuses action. Some content management systems spell it out as “error establishing a database connection”: then it is the database to look at.",
      ] },
      { heading: "An outage lasts mostly as long as it takes to find out", body: [
        "The figure runs the same outage twice, without monitoring and then with a test every minute.",
      ], visual: 'decouverte', after: [
        "**The example.** A certificate expires on a Friday at 11 pm. Without monitoring, nobody knows for 33 and a half hours: it is a customer who calls on Sunday morning. It takes another hour and a half to find who to call and repair. Total: 35 hours down and, at five visits an hour, about 175 visitors facing a security warning. With a test every minute, the alert goes out at 11.03 pm and the site is back at 11.45 pm.",
        "**What monitoring does.** Website monitoring is the process of testing and verifying that end-users can interact with a website as expected. In practice, a robot placed outside your network opens the real page every minute, checks that an expected text is there and measures the response time; after three failures in a row, it warns two people. It also follows two dates, the certificate's and the domain name's, and alerts thirty days before. **A reference point.** An availability of 99.9 % over the year leaves about 8 hours 46 minutes of downtime; 99 %, a little over three and a half days. Ask your host which one it commits to. A site that is slow without being down calls for another diagnosis: see [the guide to the slow application](" + L.lente + ").",
      ] },
      { heading: "What keeps a site up, in five layers", body: [
        "The accented layer is monitoring.",
      ], visual: 'couches', after: [
        "**Name, DNS, hosting.** The accounts are in the company's name, with two up-to-date contacts; renewal is automatic and an alert goes out sixty days before the due date. The server's disk and memory are followed, and backups leave the server, as in [the guide to backups](" + L.sauvegardes + "). **The certificate.** Let's Encrypt certificates are valid for 90 days by default and, according to the public information about the organisation, it plans to reduce that period to 64 days from February 2027; the forum that brings together certificate authorities and browsers approved in April 2025 a reduction of certificate lifespans down to 47 days by 2029. A renewal done by hand no longer holds: it has to be automatic, and the automation itself has to be watched.",
        "**The application.** An update is first tried on a copy of the site; a rollback takes one action; the error log is read, not just filled. **Monitoring.** Without it, the other four layers give way silently. All of this belongs to the routine upkeep described in [the guide to managed IT](" + L.infogerance + ").",
      ] },
      { heading: "The first hour, minute by minute, in 2027", body: [
        "One hour in the example, whose first five minutes decide the rest.",
      ], visual: 'heure', after: [
        "**Minutes 0 to 5.** The message, the time, a try from another network: you already know whether the fault is at your end, and which link to look at. **Minutes 5 to 15.** The domain name and DNS: a date, a few records. **Minutes 15 to 30.** The host: the customer area, then a ticket quoting the exact message and the time.",
        "**Minutes 30 to 50.** The certificate is renewed, the last update is rolled back, the error log is read. **Minutes 50 to 60.** The site is opened from two networks, a form is tried, customers are told, and the cause is noted with what will avoid it. Not every outage fits into an hour; the ones that last are often those for which nobody holds the access.",
      ], list: [
        "**What the manager receives**: the list of the five links with, for each, who manages it, where the access is and what the next due date is; and, after each outage, the time, the cause and the fix.",
        "**What the company no longer does**: hear about the outage from a customer, call the developer about an expired domain name, renew a certificate by hand, hunt for a password on a Sunday.",
        "**What is measured**: minutes of downtime per month, time between the outage and the alert, time between the alert and the return, days left before the certificate and the domain name end.",
        "**What Symloop does**: the diagnosis and getting the site back up, taking the access back in the company's name, automatic renewals, monitoring with alerts, updates and, when the site justifies it, its move to hosting that is looked after.",
      ], faq: [
        { q: "My website has stopped working, where do I start?", a: "Note the error message word for word and the time, then open the site from your phone on 4G. If it opens, the fault is in your network or your computer. If not, check in order the domain name, DNS, hosting, the certificate, then the application." },
        { q: "Why does my site no longer display when it worked yesterday?", a: "Because a due date has passed or something has changed. The due dates: the domain name, the hosting invoice, the certificate. The changes: an update, a plugin, a modified DNS record. The error message says in which family to look." },
        { q: "How do I know whether the problem is my computer or the site?", a: "By opening the site from another network: your phone on 4G with Wi-Fi off, or a person outside the company. If it opens elsewhere, the site is fine. The problem is then at your end: browser memory, office network, firewall." },
        { q: "What does “This site can’t be reached” mean?", a: "That the browser did not reach the site. With NXDOMAIN, the name leads to no address: expired domain name or modified DNS zone. With “timed out” or “connection refused”, the name leads to a server that does not answer: see the host." },
        { q: "What does “Your connection is not private” mean?", a: "That the site's certificate has expired, or does not match the name. The site itself works, but the browser refuses to display it without a warning. The certificate has to be renewed, and then you need to understand why the automatic renewal did not happen." },
        { q: "What do errors 500, 502, 503 and 504 mean?", a: "That the server answered, and is aware that it encountered an error. 500: an unexpected condition in the application. 502 and 504: it was waiting for an answer from another machine, received invalid or too late. 503: it is overloaded or down for maintenance." },
        { q: "My site is down and the agency that built it no longer answers: what do I do?", a: "Contact the registrar and the host directly: they hold the name and the server, and can hand control back to the legitimate holder. Gather what proves the site is yours. Then have every access taken back in the company's name." },
        { q: "Who do I call: the host or the developer?", a: "The message tells you. Name not found: the registrar. Server not answering, errors 502 to 504, certificate: the host first. Error 500, blank page, database error after an update: the developer." },
        { q: "My email has stopped working too: is it related?", a: "Often, yes. If the site and email go down together, the cause is upstream: the domain name has expired, or the DNS zone was modified. If email works and the site does not, look further down: hosting, certificate, application." },
        { q: "How can I be warned when the site goes down?", a: "With an outside test that opens the page every minute and warns two people after a few failures in a row, by SMS and by email. The same tool follows the end date of the certificate and of the domain name, and alerts thirty days before." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The further upstream the cause, the more it takes down: an expired domain name cuts both the site and email." },
      { after: 3, text: "An outside test repairs nothing; it turns a weekend outage into a three-quarter-hour incident." },
    ],
    cta: { eyebrow: "Send us the site's address, the error message word for word and the time: we tell you which link gave way and who has to act", title: "A site that no longer displays, a security warning, an error 500, an agency that cannot be reached, or a founder in France hearing it from a customer: we get the site back up, and from then on you will know before they do", body: "Diagnosis, getting the site back up, access taken back in the company's name, automatic renewals, monitoring every minute with alerts. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.domaine, kind: '2027', name: 'Domain name and hosting: who owns what, taking back access' },
      { href: L.pirate, kind: '2027', name: 'Hacked website: the first hour, then five days to rebuild' },
      { href: L.infogerance, kind: '2027', name: 'Managed IT: contract, response times, monitoring, monthly report' },
      { href: L.sauvegardes, kind: '2027', name: 'If the server dies tomorrow: backups, tested restore, recovery time' },
    ] },
  },
  ar: {
    kind: 'موقع معطَّل · الجزائر · 2027', title: "موقعي لم يعد يعمل، ما العمل في الجزائر (2027): التحقق من مكان آخر، خمس حلقات بالترتيب، قراءة رسالة الخطأ، معرفة من نتصل به، والعلم بالعطل قبل زبائنكم",
    dek: "«منذ هذا الصباح، موقعنا لم يعد يُعرض. عندي، المتصفح يكتب “لا يمكن الوصول إلى هذا الموقع”؛ وزبون يقول لي إنه يرى تحذيراً أمنياً. لا أعرف هل المشكلة في اسم النطاق، في الاستضافة أم في الموقع نفسه، ولا بمن أتصل: الوكالة التي أنجزته لم تعد تجيب. من أين أبدأ؟» من رسالة الخطأ: فهي تقول عند أي حلقة تتوقف الزيارة. ثم تحقق واحد من هاتفكم، وخمس حلقات تُراجَع بالترتيب.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['موقع معطَّل', 'رسالة خطأ المتصفح', 'اسم النطاق و DNS', 'شهادة الأمان', 'الاستضافة', 'مراقبة المواقع'],
    intro: [
      "**الجواب المختصر.** سجّلوا أولاً رسالة الخطأ كلمة بكلمة، مع الساعة. ثم افتحوا الموقع من شبكة أخرى، الهاتف على " + I('4G') + ": إذا فُتح، فالعطل عندكم. وإلا، خمس حلقات، بهذا الترتيب. **اسم النطاق**: هل انتهى أجله؟ **" + I('DNS') + "**: هل ما زال الاسم يقود إلى الخادم؟ **الاستضافة**: هل الحساب نشط، وهل الخادم يجيب؟ **الشهادة**: هل فات تاريخها؟ **التطبيق**: ماذا تغيّر أمس؟ «غير موجود»، «انتهت المهلة»، «الاتصال ليس خاصاً» و«خطأ 500» لا تدلّ على الحلقة نفسها ولا على الشخص نفسه. ولما بعد: اختبار خارجي كل دقيقة، ينبّهكم قبل زبائنكم.",
      "هذا الدليل موجَّه إلى المسيّر الذي لم يعد موقع مؤسسته يُعرض، أو يعرض خطأ، وإلى المؤسس المقيم في فرنسا الذي يعلم بذلك من زبون. التعريفات المذكورة آتية من مصادر علنية: رموز جواب خادم الويب، نظام أسماء النطاقات، الشهادة، ومراقبة المواقع. الرسائل هي التي يعرضها " + I('Chrome') + "؛ والكلمات تتغيّر من متصفح إلى آخر. العطل وساعاته وعدد الزيارات مثال مركَّب. وإذا كان الموقع يعرض غير موقعكم أو يحوّل إلى مكان آخر، فليس ذلك عطلاً بل تسلّلاً: انظر [دليل الموقع المخترَق](" + L.pirate + ").",
    ],
    sections: [
      { heading: "أولاً من مكان آخر، ثم خمس حلقات بالترتيب", body: [
        "المرحلة الأولى مبرزة: فتح الموقع من شبكة أخرى.",
      ], visual: 'ordre', after: [
        "**من مكان آخر.** افتحوا الموقع من الهاتف، والواي فاي مقطوع، أو اطلبوا ذلك من شخص خارج المؤسسة. إذا فُتح، فالموقع بخير: المشكلة في شبكتكم أو حاسوبكم أو متصفحكم، التي تحتفظ أحياناً بعنوان قديم في الذاكرة. وإذا لم يُفتح في أي مكان، فالعطل حقيقي. **اسم النطاق.** يُكترى بالسنة؛ وتاريخ انتهائه يُقرأ في فضاء الزبون عند مكتب التسجيل. وإذا انتهى، يتوقف كل شيء، والبريد كذلك: انظر [دليل اسم النطاق](" + L.domaine + ")، وللعلب، [دليل البريد المهني](" + L.messagerie + ").",
        "**" + I('DNS') + ".** يجب أن يقود الاسم إلى عنوان الخادم؛ سجل محذوف أو تغيير لخوادم الأسماء يكفي لقطع كل شيء، والتصحيح يأخذ من بضع دقائق إلى بضع ساعات حتى يُرى في كل مكان، حسب مدة الحفظ في الذاكرة المضبوطة في المنطقة. **الاستضافة.** فضاء الزبون يقول في دقيقة هل الحساب موقوف، أو الفاتورة غير مدفوعة، أو القرص ممتلئ. **الشهادة.** نقرة على تحذير المتصفح تعطي تاريخ نهايتها. **التطبيق.** إذا كان كل ما سبق سليماً، اسألوا ماذا تغيّر في اليوم السابق: تحديث، إضافة، أو ملف عُوِّض.",
      ] },
      { heading: "أين تتوقف الزيارة: خمس حلقات، وخمس رسائل", body: [
        "الشكل يبيّن، لكل حلقة تنكسر، إلى أين تصل الزيارة وما يراه الزائر.",
      ], visual: 'trajet', after: [
        "**المسار.** لعرض صفحة، تعبر الزيارة خمس حلقات، دائماً بالترتيب نفسه. اسم النطاق أولاً، ويجب أن يكون مجدَّداً. ثم " + I('DNS') + "، وهو خدمة أسماء هرمية وموزَّعة توفّر نظام تسمية للحواسيب والخدمات: هو الذي يترجم الاسم إلى عنوان. ثم الخادم، المكترى عند مستضيف. ثم الشهادة، وهي وثيقة إلكترونية تُستعمل لإثبات أن مفتاحاً عمومياً يعود فعلاً إلى صاحبه: هي التي تضع القفل في شريط العنوان. وأخيراً التطبيق، أي شيفرة الموقع وقاعدة بياناته.",
        "**قراءة الشكل.** كلما قصر الشريط، كان السبب أبعد في الأعلى، وأخذ معه أشياء أكثر: اسم نطاق منتهٍ يقطع الموقع والبريد وكل ما يحمل هذا الاسم. **ثلاث جهات.** مكتب التسجيل للاسم، المستضيف للخادم، والمطوِّر للتطبيق؛ و" + I('DNS') + " والشهادة يسيّرهما هذا أو ذاك، حسب التنصيب. ومعرفة من نتصل به تربح ساعات. وإذا لم تكن بيدكم مفاتيح الوصول عند أي من الثلاثة، فتلك أول ورشة، بعطل أو بدونه.",
      ] },
      { heading: "قراءة رسالة الخطأ: تقول أين نبحث", body: [
        "الشكل يقرّب ست رسائل من معناها ومن الشخص الذي نتصل به.",
      ], visual: 'messages', after: [
        "**رسائل المتصفح.** «لا يمكن الوصول إلى هذا الموقع»، مع " + I('NXDOMAIN') + "، تعني أن الاسم لا يقود إلى أي عنوان: ابحثوا جهة اسم النطاق، ثم " + I('DNS') + ". «انتهت المهلة» أو «الاتصال مرفوض»: الاسم يقود إلى مكان ما، لكن لا شيء يجيب. «اتصالك ليس خاصاً»: الخادم يجيب، والشهادة هي المنتهية أو التي لا تطابق الاسم.",
        "**الرموز ذات الأرقام الثلاثة.** تأتي من الخادم؛ والتي تبدأ بـ 5 تعني أنه يعلم أنه صادف خطأ. الرمز 500 رسالة عامة، تُعطى حين تقع حالة غير متوقعة ولا تناسب أي رسالة أدقّ: ابحثوا في التطبيق. 502 و504: الخادم كان وسيطاً وتلقّى جواباً غير صالح، أو لم يتلقَّ جواباً في الوقت، من الآلة الموجودة وراءه. 503: لا يستطيع معالجة الطلب، لأنه مثقَل أو في صيانة. 404: المورد المطلوب غير موجود، وهذا يخصّ صفحة، لا الموقع. 403: الطلب كان صالحاً، لكن الخادم يرفض التنفيذ. وبعض أنظمة تسيير المحتوى تكتب صراحة «خطأ في الاتصال بقاعدة البيانات»: فالقاعدة حينها هي التي تُراجَع.",
      ] },
      { heading: "العطل يدوم خاصة مدة العلم به", body: [
        "الشكل يعرض العطل نفسه مرتين، دون مراقبة ثم باختبار كل دقيقة.",
      ], visual: 'decouverte', after: [
        "**المثال.** شهادة تنتهي يوم جمعة على الساعة 23. دون مراقبة، لا أحد يعلم طوال 33 ساعة ونصف: زبون هو الذي يتصل صباح الأحد. وتلزم ساعة ونصف أخرى لإيجاد من نتصل به والإصلاح. المجموع: 35 ساعة توقف، وبخمس زيارات في الساعة، نحو 175 زائراً أمام تحذير أمني. وباختبار كل دقيقة، ينطلق التنبيه على " + I('23:03') + " ويعود الموقع على " + I('23:45') + ".",
        "**ما تفعله المراقبة.** مراقبة موقع هي اختبار أن المستعملين يستطيعون استعماله كما هو متوقَّع، والتحقق من ذلك. وعملياً، روبوت موضوع خارج شبكتكم يفتح الصفحة الحقيقية كل دقيقة، يتحقق من وجود نص منتظَر فيها ويقيس زمن الجواب؛ وبعد ثلاث إخفاقات متتالية، ينبّه شخصين. ويتابع كذلك تاريخين، تاريخ الشهادة وتاريخ اسم النطاق، وينبّه ثلاثين يوماً قبلهما. **معلَم.** توفّر بنسبة 99,9 بالمئة في السنة يترك نحو 8 ساعات و46 دقيقة من التوقف؛ و99 بالمئة، أكثر بقليل من ثلاثة أيام ونصف. اسألوا مستضيفكم بأيهما يلتزم. والموقع البطيء دون أن يتوقف تشخيصه آخر: انظر [دليل التطبيق البطيء](" + L.lente + ").",
      ] },
      { heading: "ما يُبقي الموقع واقفاً، في خمس طبقات", body: [
        "الطبقة المبرزة هي المراقبة.",
      ], visual: 'couches', after: [
        "**الاسم، " + I('DNS') + "، والاستضافة.** الحسابات باسم المؤسسة، بجهتي اتصال محدَّثتين؛ والتجديد آلي وتنبيه ينطلق ستين يوماً قبل الأجل. وقرص الخادم وذاكرته متابَعان، والنسخ الاحتياطية تخرج من الخادم، كما في [دليل النسخ الاحتياطية](" + L.sauvegardes + "). **الشهادة.** شهادات " + I("Let's Encrypt") + " صالحة 90 يوماً افتراضياً، وحسب المعلومات المنشورة عن الهيئة، تعتزم إنزال هذه المدة إلى 64 يوماً ابتداءً من فيفري 2027؛ والمنتدى الذي يجمع سلطات التصديق والمتصفحات صادق في أفريل 2025 على تقليص عمر الشهادات إلى 47 يوماً في 2029. والتجديد باليد لم يعد يصمد: يجب أن يكون آلياً، والآلية نفسها يجب أن تُراقَب.",
        "**التطبيق.** التحديث يُجرَّب أولاً على نسخة من الموقع؛ والرجوع إلى الوراء يتم بحركة؛ وسجل الأخطاء يُقرأ، لا يُملأ فقط. **المراقبة.** دونها، تنفلت الطبقات الأربع الأخرى في صمت. وكل ذلك من الصيانة اليومية الموصوفة في [دليل تسيير الإعلام الآلي](" + L.infogerance + ").",
      ] },
      { heading: "الساعة الأولى، دقيقة بدقيقة، سنة 2027", body: [
        "ساعة في المثال، ودقائقها الخمس الأولى تحسم الباقي.",
      ], visual: 'heure', after: [
        "**الدقائق من 0 إلى 5.** الرسالة، الساعة، ومحاولة من شبكة أخرى: تعرفون هل العطل عندكم، وأي حلقة تُراجَع. **الدقائق من 5 إلى 15.** اسم النطاق و" + I('DNS') + ": تاريخ، وبضعة سجلات. **الدقائق من 15 إلى 30.** المستضيف: فضاء الزبون، ثم تذكرة تذكر الرسالة بالضبط والساعة.",
        "**الدقائق من 30 إلى 50.** الشهادة تُجدَّد، آخر تحديث يُلغى، وسجل الأخطاء يُقرأ. **الدقائق من 50 إلى 60.** الموقع يُفتح من شبكتين، استمارة تُجرَّب، الزبائن يُعلَمون، والسبب يُسجَّل مع ما سيتفاداه. وليست كل الأعطال تسعها ساعة؛ والتي تطول هي غالباً التي لا يملك أحد مفاتيح الوصول إليها.",
      ], list: [
        "**ما يستلمه المسيّر**: قائمة الحلقات الخمس مع من يسيّر كل واحدة، أين مفاتيح الوصول، وما هو الأجل القادم؛ وبعد كل عطل، الساعة والسبب والتصحيح.",
        "**ما لم تعد المؤسسة تفعله**: العلم بالعطل من زبون، الاتصال بالمطوِّر من أجل اسم نطاق منتهٍ، تجديد شهادة باليد، والبحث عن كلمة مرور يوم أحد.",
        "**ما يُقاس**: دقائق التوقف في الشهر، المدة بين العطل والتنبيه، المدة بين التنبيه والعودة، والأيام الباقية قبل نهاية الشهادة واسم النطاق.",
        "**ما تفعله Symloop**: التشخيص وإعادة الموقع إلى الخدمة، استعادة مفاتيح الوصول باسم المؤسسة، التجديدات الآلية، المراقبة مع التنبيه، التحديثات، وحين يبرّر الموقع ذلك، نقله إلى استضافة متابَعة.",
      ], faq: [
        { q: "موقعي لم يعد يعمل، من أين أبدأ؟", a: "سجّلوا رسالة الخطأ كلمة بكلمة والساعة، ثم افتحوا الموقع من هاتفكم على " + I('4G') + ". إذا فُتح، فالعطل في شبكتكم أو حاسوبكم. وإلا، راجعوا بالترتيب اسم النطاق، " + I('DNS') + "، الاستضافة، الشهادة، ثم التطبيق." },
        { q: "لماذا لم يعد موقعي يُعرض وقد كان يعمل أمس؟", a: "لأن أجلاً فات أو شيئاً تغيّر. الآجال: اسم النطاق، فاتورة الاستضافة، والشهادة. والتغييرات: تحديث، إضافة، أو سجل " + I('DNS') + " عُدِّل. ورسالة الخطأ تقول في أي صنف نبحث." },
        { q: "كيف أعرف هل المشكلة في حاسوبي أم في الموقع؟", a: "بفتح الموقع من شبكة أخرى: الهاتف على " + I('4G') + " والواي فاي مقطوع، أو شخص من خارج المؤسسة. إذا فُتح في مكان آخر، فالموقع بخير. والمشكلة حينها عندكم: ذاكرة المتصفح، شبكة المكتب، أو الجدار الناري." },
        { q: "ماذا تعني «لا يمكن الوصول إلى هذا الموقع»؟", a: "أن المتصفح لم يبلغ الموقع. مع " + I('NXDOMAIN') + "، الاسم لا يقود إلى أي عنوان: اسم نطاق منتهٍ أو منطقة " + I('DNS') + " معدَّلة. ومع «انتهت المهلة» أو «الاتصال مرفوض»، الاسم يقود إلى خادم لا يجيب: راجعوا المستضيف." },
        { q: "ماذا تعني «اتصالك ليس خاصاً»؟", a: "أن شهادة الموقع منتهية، أو لا تطابق الاسم. الموقع نفسه يعمل، لكن المتصفح يرفض عرضه دون تحذير. يجب تجديد الشهادة، ثم فهم لماذا لم يقع التجديد الآلي." },
        { q: "ماذا تعني الأخطاء 500 و502 و503 و504؟", a: "أن الخادم أجاب، وهو يعلم أنه صادف خطأ. 500: حالة غير متوقعة في التطبيق. 502 و504: كان ينتظر جواباً من آلة أخرى، فوصله غير صالح أو متأخراً. 503: هو مثقَل أو في صيانة." },
        { q: "موقعي معطَّل والوكالة التي أنجزته لم تعد تجيب: ما العمل؟", a: "اتصلوا مباشرة بمكتب التسجيل وبالمستضيف: هما من يمسك الاسم والخادم، ويستطيعان إعادة التحكّم إلى صاحبه الشرعي. اجمعوا ما يثبت أن الموقع لكم. ثم استعيدوا كل مفاتيح الوصول باسم المؤسسة." },
        { q: "بمن أتصل: المستضيف أم المطوِّر؟", a: "الرسالة تقول ذلك. اسم غير موجود: مكتب التسجيل. خادم لا يجيب، أخطاء 502 إلى 504، أو شهادة: المستضيف أولاً. خطأ 500، صفحة بيضاء، أو خطأ قاعدة بيانات بعد تحديث: المطوِّر." },
        { q: "بريدي الإلكتروني توقف كذلك: هل الأمران مرتبطان؟", a: "غالباً، نعم. إذا سقط الموقع والبريد معاً، فالسبب في الأعلى: اسم النطاق انتهى، أو منطقة " + I('DNS') + " عُدِّلت. وإذا كان البريد يعمل والموقع لا، ابحثوا في الأسفل: الاستضافة، الشهادة، التطبيق." },
        { q: "كيف أُنبَّه حين يسقط الموقع؟", a: "باختبار خارجي يفتح الصفحة كل دقيقة وينبّه شخصين بعد بضع إخفاقات متتالية، برسالة قصيرة وبالبريد. والأداة نفسها تتابع تاريخ نهاية الشهادة واسم النطاق، وتنبّه ثلاثين يوماً قبله." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "كلما كان السبب أبعد في الأعلى، أخذ معه أكثر: اسم نطاق منتهٍ يقطع الموقع والبريد." },
      { after: 3, text: "الاختبار الخارجي لا يصلح شيئاً؛ يجعل من عطل نهاية أسبوع حادثاً من ثلاثة أرباع الساعة." },
    ],
    cta: { eyebrow: "أرسلوا إلينا عنوان الموقع، رسالة الخطأ كلمة بكلمة، والساعة: نقول لكم أي حلقة انفلتت ومن عليه أن يتحرك", title: "موقع لم يعد يُعرض، تحذير أمني، خطأ 500، وكالة لا تجيب، أو مؤسس في فرنسا يعلم بذلك من زبون: نعيد الموقع إلى الخدمة، وتعلمون بعدها قبلهم", body: "تشخيص، إعادة إلى الخدمة، مفاتيح وصول مستعادة باسم المؤسسة، تجديدات آلية، ومراقبة كل دقيقة مع تنبيه. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.domaine, kind: '2027', name: 'اسم النطاق والاستضافة: من يملك ماذا، واستعادة الوصول' },
      { href: L.pirate, kind: '2027', name: 'موقع مخترَق: الساعة الأولى، ثم خمسة أيام لإعادة البناء' },
      { href: L.infogerance, kind: '2027', name: 'تسيير الإعلام الآلي: العقد، الآجال، المراقبة، والتقرير الشهري' },
      { href: L.sauvegardes, kind: '2027', name: 'إذا مات الخادم غداً: النسخ الاحتياطية، الاسترجاع المجرَّب، أجل الاستئناف' },
    ] },
  },
};

const KEYWORDS = "mon site internet ne fonctionne plus 2027, site internet ne s'affiche pas, pourquoi mon site ne fonctionne pas, site inaccessible que faire, site internet en panne algérie, ce site est inaccessible, votre connexion n'est pas privée, erreur 500 site web, erreur 502 503 504, certificat ssl expiré, surveillance site web, my website is down what to do algeria 2027, website not working error message, موقعي لا يعمل ما العمل 2027, الموقع لا يفتح, رسالة خطأ الموقع";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
