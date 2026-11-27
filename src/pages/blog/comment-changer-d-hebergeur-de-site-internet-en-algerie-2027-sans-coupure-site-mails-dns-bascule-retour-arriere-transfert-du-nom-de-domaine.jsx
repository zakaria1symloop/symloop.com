import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-changer-d-hebergeur-de-site-internet-en-algerie-2027-sans-coupure-site-mails-dns-bascule-retour-arriere-transfert-du-nom-de-domaine.mjs';

const SLUG = 'comment-changer-d-hebergeur-de-site-internet-en-algerie-2027-sans-coupure-site-mails-dns-bascule-retour-arriere-transfert-du-nom-de-domaine';
const FIGURES = ['temps', 'demenager', 'avant', 'bascule', 'deux', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  domaine: '/blog/nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main/',
  panne: '/blog/site-internet-ne-fonctionne-plus-que-faire-entreprise-algerie-2027-site-inaccessible-message-d-erreur-nom-de-domaine-certificat-hebergement/',
  messagerie: '/blog/messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365/',
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  sauvegardes: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  surveiller: '/blog/savoir-que-votre-application-est-en-panne-avant-vos-clients-algerie-2027-surveillance-alertes-astreinte-rapport-du-lundi/',
};

const CONTENT = {
  fr: {
    kind: 'Changer d’hébergeur · Algérie · 2027', title: "Comment changer d'hébergeur de site internet en Algérie (2027) : site lent, hébergeur qui ne répond plus, peur de perdre les mails et le référencement, la bascule sans coupure et le transfert du nom de domaine",
    dek: "« Notre site est lent, l'hébergeur ne répond plus aux demandes, et le prestataire qui s'en occupait est parti. On veut changer d'hébergeur, mais on a peur de perdre le site, les mails et le référencement. Comment changer d'hébergeur sans coupure, et faut-il transférer le nom de domaine en même temps ? » Changer d'hébergeur et transférer le nom sont deux opérations. On déménage d'abord, en gardant l'ancien serveur allumé ; le nom se transfère plus tard, s'il le faut.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Changer d’hébergeur', 'Migration de site web', 'Transfert de nom de domaine', 'DNS et durée de cache', 'Migration des boîtes mail', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Changer d'hébergeur, c'est copier le site ailleurs, l'essayer, puis changer une adresse dans les DNS. Dans l'ordre : **l'inventaire** des sept choses à déménager, dont les boîtes mail ; **la durée de cache des DNS abaissée** deux jours avant ; **la copie et les essais** sur le nouveau serveur, sous une adresse provisoire ; **un gel** de quelques heures et une dernière copie ; **la bascule** ; puis **l'ancien serveur gardé allumé sept jours**, pour pouvoir revenir en arrière en repointant les DNS. Les adresses des pages ne changent pas, ce qui protège les liens et le référencement. **Le transfert du nom de domaine** est une autre opération, facultative : jamais la même semaine.",
      "Ce guide s'adresse au gérant dont le site est lent ou mal hébergé, à celui dont le prestataire a disparu, et au fondateur installé en France qui veut déplacer le site de son entreprise en Algérie. Les définitions et les faits cités viennent de sources publiques : le service d'hébergement web, le système des noms de domaine et sa durée de cache, l'enregistrement MX, le transfert de nom de domaine, le protocole IMAP, le fichier hosts, la redirection 301, le certificat. Le site, ses sept éléments et ses heures de bascule sont un exemple construit. Ce guide ne compare pas les hébergeurs et ne donne aucun prix.",
    ],
    sections: [
      { heading: "Déménager un site, en six temps", body: [
        "Le premier temps est accentué : inventorier.",
      ], visual: 'temps', after: [
        "**Ce qu'on déménage.** Un service d'hébergement web fournit l'infrastructure nécessaire pour héberger des sites et les rendre accessibles sur le web. Changer d'hébergeur, c'est refaire fonctionner le même site sur une autre infrastructure, puis y envoyer les visiteurs. **Les accès d'abord.** L'inventaire commence par une question : qui a les accès de l'hébergement actuel, de la zone DNS et du nom de domaine ? S'ils sont chez un ancien prestataire, la première étape est décrite dans [le guide sur le nom de domaine et l'hébergement](" + L.domaine + ").",
        "**Pourquoi cet ordre.** Tout ce qui précède la bascule se fait sans que les visiteurs ne voient rien : l'ancien site continue de servir. La bascule elle-même est un seul changement, et tout ce qui la suit consiste à vérifier. **Où aller.** Le choix du nouvel emplacement, en Algérie, en Europe ou les deux, a ses propres critères, traités dans [le guide sur l'hébergement en Algérie ou en Europe](" + L.heberger + ").",
      ] },
      { heading: "Sept choses à déménager, pas une", body: [
        "La figure fait passer sept éléments de l'ancien hébergeur au nouveau.",
      ], visual: 'demenager', after: [
        "**Le site et sa base.** Les fichiers se copient ; la base de données s'exporte puis s'importe. Sur un site qui prend des commandes ou des inscriptions, la base change à chaque minute : c'est pour elle qu'on gèle l'ancien site avant la dernière copie. **Les boîtes mail.** Si elles sont chez le même hébergeur, elles déménagent aussi : l'enregistrement MX indique le serveur chargé d'accepter les messages pour un nom de domaine, et il devra pointer vers le nouveau. Le contenu des boîtes se copie avec IMAP, le protocole standard par lequel un logiciel de messagerie récupère les messages sur un serveur. La configuration complète est dans [le guide sur la messagerie professionnelle](" + L.messagerie + ").",
        "**Ce qui ne se voit pas.** Les tâches planifiées, lancées par un planificateur à heures fixes : l'envoi de rappels, un export nocturne, une sauvegarde. Les messages que le site envoie lui-même, confirmation de commande ou formulaire de contact, qui dépendent d'un réglage d'envoi propre à chaque hébergeur. Et la zone DNS, à recréer ligne par ligne, y compris celles dont personne ne se souvient. **Une méthode et un essai par ligne.** L'inventaire se termine quand chaque élément a les deux.",
      ] },
      { heading: "Avant de basculer : cinq couches à essayer", body: [
        "La couche accentuée est le courrier.",
      ], visual: 'avant', after: [
        "**Essayer sans visiteurs.** Le nouveau site s'essaie avant que les DNS ne changent : par une adresse provisoire fournie par l'hébergeur, ou en modifiant sur un poste le fichier hosts, ce fichier du système qui associe des noms à des adresses. Ce poste voit alors le nouveau serveur sous le vrai nom, pendant que tout le monde voit encore l'ancien. **Les mêmes adresses.** Chaque page garde son adresse. Si une adresse doit changer, une redirection 301, le code utilisé pour une redirection permanente, conduit l'ancienne vers la nouvelle : c'est ce qui protège les liens déjà partagés et le référencement.",
        "**Le certificat.** Un certificat est un document électronique qui prouve qu'une clé publique appartient bien à son titulaire ; il s'émet sur le nouveau serveur, pour le nom avec et sans « www ». Sans lui, le navigateur affiche une alerte au premier visiteur, comme dans les pannes décrites dans [le guide sur le site qui ne fonctionne plus](" + L.panne + "). **Un essai par parcours.** Pas seulement la page d'accueil : un formulaire envoyé, un compte ouvert, une commande passée, un message reçu. **Et la suite.** La sauvegarde du nouveau serveur est en place avant la bascule, pas après : voir [le guide sur les sauvegardes](" + L.sauvegardes + ").",
      ] },
      { heading: "La bascule, heure par heure", body: [
        "La figure suit quatre lignes, de 72 heures avant à 48 heures après.",
      ], visual: 'bascule', after: [
        "**La durée de cache.** Quand un résolveur DNS reçoit une réponse, il la garde en mémoire pendant la durée, en secondes, indiquée par le TTL. Cette durée est souvent abaissée par l'administrateur avant le déplacement d'un service, afin de réduire les perturbations : avec un TTL de 300 secondes, les enregistrements expirent en cinq minutes. On l'abaisse donc deux jours avant, le temps que l'ancienne valeur longue s'efface partout. Une réserve : certains serveurs de cache appliquent leur propre durée, quelle que soit celle réglée.",
        "**Le gel.** Quelques heures avant, l'ancien site passe en lecture seule ou affiche un message d'entretien ; on fait la dernière copie de la base, on vérifie, puis on change l'adresse dans les DNS. **Le retour arrière.** L'ancien serveur reste allumé et intact : si un problème apparaît, on repointe les DNS, et quelques minutes plus tard les visiteurs y reviennent. **Après.** Une sonde vérifie le site toutes les quelques minutes pendant la première semaine, selon [le guide sur la surveillance](" + L.surveiller + ") ; le TTL remonte à sa valeur longue au bout d'un jour.",
      ] },
      { heading: "Changer d'hébergeur, transférer le nom : deux opérations", body: [
        "La figure compare les deux opérations sur six points.",
      ], visual: 'deux', after: [
        "**Deux choses différentes.** Le transfert d'un nom de domaine est le changement du bureau d'enregistrement désigné pour ce nom. Il ne déplace ni le site ni les mails : le nom peut rester enregistré où il est, et pointer vers n'importe quel hébergeur. Il suffit d'avoir la main sur sa zone DNS. **Comment il se fait.** Le nouveau bureau demande un code d'authentification, fourni par l'ancien ; l'opération peut prendre environ cinq jours, et un nom transféré ne peut pas l'être de nouveau pendant un délai, longtemps fixé à 60 jours, qu'une décision de 2025 prévoit de ramener à 30 jours. Vérifiez la règle en vigueur auprès de votre bureau.",
        "**Les noms en .dz.** Ils sont administrés par le DZ Network Internet Center, une subdivision du CERIST, et suivent leurs propres procédures : renseignez-vous auprès du bureau qui a enregistré le vôtre. **L'ordre.** On déménage d'abord, on vérifie une semaine, et seulement ensuite on transfère le nom si l'on veut tout regrouper. Faire les deux en même temps, c'est perdre le retour arrière au moment où l'on en a besoin.",
      ] },
      { heading: "Trois semaines, de l'inventaire à la résiliation, en 2027", body: [
        "Trois semaines dans l'exemple, dont la première pour l'inventaire.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, l'inventaire** : les sept éléments, les accès, la durée de cache actuelle, la date de bascule choisie un jour calme. **Semaines 1 et 2, la copie et les essais** : le site, la base, les boîtes, puis les cinq couches essayées une par une.",
        "**Semaine 2, la bascule**, un matin de faible activité, jamais un vendredi soir. **Semaine 3, l'ancien serveur gardé, puis la résiliation** : on ne résilie qu'après avoir vérifié les mails, les formulaires, les tâches planifiées et une restauration de sauvegarde sur le nouveau serveur. Le transfert du nom, s'il est voulu, vient après.",
      ], list: [
        "**Ce que le gérant reçoit** : l'inventaire des sept éléments, les accès à son nom, le site essayé sur le nouveau serveur, une bascule datée avec son retour arrière, l'ancien serveur gardé sept jours, et un compte rendu de vérification avant la résiliation.",
        "**Ce que l'entreprise ne fait plus** : changer d'hébergeur un vendredi soir, découvrir le lundi que les mails n'arrivent plus, résilier l'ancien serveur le jour même, transférer le nom au milieu du déménagement.",
        "**Ce qui est mesuré** : minutes d'indisponibilité pendant la bascule, messages reçus et envoyés après, pages qui répondent à la même adresse qu'avant, tâches planifiées qui ont tourné.",
        "**Ce que fait Symloop** : l'inventaire, la récupération des accès, la copie et les essais, la bascule et son retour arrière, la surveillance de la première semaine, puis, si vous le voulez, le transfert du nom.",
      ], faq: [
        { q: "Comment changer d'hébergeur de site internet ?", a: "En six temps : inventorier ce qu'il y a à déménager, abaisser la durée de cache des DNS, copier le site et l'essayer sur le nouveau serveur, geler l'ancien et faire une dernière copie, changer l'adresse dans les DNS, puis garder l'ancien serveur allumé une semaine avant de résilier." },
        { q: "Faut-il transférer le nom de domaine pour changer d'hébergeur ?", a: "Non. Le nom peut rester enregistré où il est : il suffit de modifier sa zone DNS pour qu'il pointe vers le nouvel hébergeur. Le transfert du nom est une autre opération, facultative, à faire plus tard." },
        { q: "Comment transférer un nom de domaine ?", a: "On demande à l'ancien bureau d'enregistrement un code d'authentification, on le fournit au nouveau, et l'opération prend environ cinq jours. Avant, vérifiez que la zone DNS sera reprise à l'identique. Pour un nom en .dz, la procédure est celle du registre algérien : renseignez-vous auprès de votre bureau." },
        { q: "Va-t-on perdre les mails ?", a: "Pas si les boîtes font partie de l'inventaire : chaque boîte est copiée, les redirections recréées, et l'enregistrement qui dirige le courrier change au même moment que le site ou séparément. On essaie l'envoi et la réception avant et après la bascule." },
        { q: "Le site sera-t-il coupé pendant le changement ?", a: "Avec une durée de cache abaissée et un nouveau serveur déjà essayé, la bascule se voit en quelques minutes. Sur un site qui enregistre des commandes, il y a un gel de quelques heures pendant lequel on peut consulter mais pas modifier." },
        { q: "Va-t-on perdre le référencement ?", a: "Le risque vient des adresses qui changent, pas de l'hébergeur. Gardez les mêmes adresses de pages, posez une redirection permanente pour celles qui changent, et vérifiez le certificat et la vitesse sur le nouveau serveur." },
        { q: "Combien de temps dure la propagation des DNS ?", a: "Elle dépend de la durée de cache réglée dans votre zone : si elle est de 24 heures, comptez jusqu'à un jour ; si vous l'avez abaissée à cinq minutes deux jours avant, quelques minutes. Certains serveurs de cache gardent l'ancienne adresse un peu plus longtemps." },
        { q: "Que faire si l'ancien hébergeur ou le prestataire ne répond plus ?", a: "Commencez par reprendre la main sur le nom de domaine et sa zone DNS : c'est ce qui permet de pointer ailleurs. Récupérez ensuite une copie du site et de la base, depuis l'hébergement si vous y avez accès, sinon depuis une sauvegarde." },
        { q: "Quand résilier l'ancien hébergement ?", a: "Pas avant sept jours, et seulement après avoir vérifié les mails, les formulaires, les tâches planifiées et une sauvegarde restaurée sur le nouveau serveur. Tant qu'il est allumé, revenir en arrière ne prend que quelques minutes." },
        { q: "Combien de temps faut-il, et par quoi commencer ?", a: "Trois semaines dans l'exemple de ce guide, dont une matinée pour la bascule elle-même. Commencez par l'inventaire et par la question des accès : qui peut se connecter à l'hébergement actuel, à la zone DNS et au nom de domaine ?" },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La page d'accueil est la première chose qu'on vérifie ; les mails sont celle qu'on oublie." },
      { after: 3, text: "Tant que l'ancien serveur reste allumé, la décision se défait en quelques minutes." },
    ],
    cta: { eyebrow: "Dites-nous où est hébergé le site, qui en a les accès, et si les mails sont au même endroit : nous faisons l'inventaire, puis nous préparons la bascule et son retour arrière", title: "Site lent, hébergeur qui ne répond plus, prestataire parti avec les accès, ou fondateur en France qui veut déplacer le site de son entreprise : nous déménageons le site et les mails sans coupure, en gardant l'ancien serveur une semaine", body: "Inventaire, récupération des accès, copie et essais, bascule, retour arrière, surveillance, sauvegarde, puis transfert du nom si vous le voulez. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.domaine, kind: '2027', name: 'Nom de domaine et hébergement : qui possède quoi, reprendre la main' },
      { href: L.messagerie, kind: '2027', name: 'Messagerie professionnelle : domaine, boîtes, SPF, DKIM, DMARC' },
      { href: L.panne, kind: '2027', name: 'Site internet qui ne fonctionne plus : que faire' },
      { href: L.heberger, kind: '2027', name: 'Héberger en Algérie ou en Europe : où mettre serveurs et données' },
    ] },
  },
  en: {
    kind: 'Changing host · Algeria · 2027', title: "How to change your website's host in Algeria (2027): a slow site, a host that no longer answers, the fear of losing mail and search ranking, the switch with no cut and the domain name transfer",
    dek: "“Our site is slow, the host no longer answers requests, and the contractor who looked after it has left. We want to change host, but we are afraid of losing the site, the mail and our search ranking. How do we change host with no cut, and must the domain name be transferred at the same time?” Changing host and transferring the name are two operations. Move first, keeping the old server on; the name is transferred later, if needed.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Changing host', 'Website migration', 'Domain name transfer', 'DNS and cache time', 'Mailbox migration', 'Algeria 2027'],
    intro: [
      "**Short answer.** Changing host means copying the site elsewhere, testing it, then changing one address in the DNS. In order: **the inventory** of the seven things to move, including the mailboxes; **the DNS cache time lowered** two days before; **the copy and the tests** on the new server, under a temporary address; **a freeze** of a few hours and one last copy; **the switch**; then **the old server kept on for seven days**, so you can go back by pointing the DNS back. The page addresses do not change, which protects links and search ranking. **The domain name transfer** is another operation, optional: never in the same week.",
      "This guide is for the manager whose site is slow or badly hosted, for the one whose contractor has disappeared, and for the founder based in France who wants to move their company's site in Algeria. The definitions and facts quoted come from public sources: the web hosting service, the domain name system and its cache time, the MX record, the domain name transfer, the IMAP protocol, the hosts file, the 301 redirect, the certificate. The site, its seven items and its switch hours are a constructed example. This guide does not compare hosts and gives no prices.",
    ],
    sections: [
      { heading: "Moving a site, in six steps", body: [
        "The first step is accented: take inventory.",
      ], visual: 'temps', after: [
        "**What is moved.** A web hosting service provides the infrastructure required to host websites and make them accessible on the World Wide Web. Changing host means making the same site work on another infrastructure, then sending visitors there. **Access first.** The inventory starts with one question: who has the access to the current hosting, the DNS zone and the domain name? If it is with a former contractor, the first step is described in [the guide to the domain name and hosting](" + L.domaine + ").",
        "**Why this order.** Everything before the switch is done without visitors seeing anything: the old site keeps serving. The switch itself is a single change, and everything after it is checking. **Where to go.** The choice of the new location, in Algeria, in Europe or both, has its own criteria, covered in [the guide to hosting in Algeria or in Europe](" + L.heberger + ").",
      ] },
      { heading: "Seven things to move, not one", body: [
        "The figure moves seven items from the old host to the new one.",
      ], visual: 'demenager', after: [
        "**The site and its database.** Files are copied; the database is exported then imported. On a site that takes orders or enrolments, the database changes every minute: it is for the database that the old site is frozen before the last copy. **The mailboxes.** If they are at the same host, they move too: the MX record specifies the mail server responsible for accepting email messages on behalf of a domain name, and it will have to point to the new one. The content of the mailboxes is copied with IMAP, the standard protocol used by email clients to retrieve messages from a mail server. The full configuration is in [the guide to professional email](" + L.messagerie + ").",
        "**What is not seen.** Scheduled tasks, launched by a time-based job scheduler: sending reminders, a nightly export, a backup. The messages the site sends by itself, order confirmation or contact form, which depend on a sending setting specific to each host. And the DNS zone, to be recreated line by line, including the lines nobody remembers. **One method and one test per line.** The inventory is finished when each item has both.",
      ] },
      { heading: "Before switching: five layers to test", body: [
        "The accented layer is mail.",
      ], visual: 'avant', after: [
        "**Testing with no visitors.** The new site is tested before the DNS changes: through a temporary address supplied by the host, or by editing on one computer the hosts file, the operating system file that maps hostnames to IP addresses. That computer then sees the new server under the real name, while everyone else still sees the old one. **The same addresses.** Each page keeps its address. If an address must change, a 301 redirect, the status code used for permanent redirecting, leads the old one to the new one: that is what protects links already shared and search ranking.",
        "**The certificate.** A certificate is an electronic document used to prove that a public key belongs to its holder; it is issued on the new server, for the name with and without “www”. Without it, the browser shows a warning to the first visitor, as in the outages described in [the guide to the site that no longer works](" + L.panne + "). **One test per journey.** Not just the home page: a form sent, an account opened, an order placed, a message received. **And afterwards.** The new server's backup is in place before the switch, not after: see [the guide to backups](" + L.sauvegardes + ").",
      ] },
      { heading: "The switch, hour by hour", body: [
        "The figure follows four lanes, from 72 hours before to 48 hours after.",
      ], visual: 'bascule', after: [
        "**The cache time.** When a DNS resolver receives an answer, it caches that record for the time, in seconds, specified by the TTL. TTLs are often lowered by the DNS administrator prior to a service being moved, in order to reduce possible disruptions: a 300-second TTL helps records expire in five minutes. So it is lowered two days before, long enough for the old long value to fade everywhere. One caveat: some caching nameservers set their own TTLs regardless of the one configured.",
        "**The freeze.** A few hours before, the old site goes read-only or shows a maintenance message; the last copy of the database is made, checked, then the address is changed in the DNS. **Going back.** The old server stays on and intact: if a problem appears, the DNS is pointed back, and a few minutes later visitors return to it. **Afterwards.** A probe checks the site every few minutes during the first week, as in [the guide to monitoring](" + L.surveiller + "); the TTL goes back to its long value after a day.",
      ] },
      { heading: "Changing host, transferring the name: two operations", body: [
        "The figure compares the two operations on six points.",
      ], visual: 'deux', after: [
        "**Two different things.** A domain name transfer is the process of changing the designated registrar of a domain name. It moves neither the site nor the mail: the name can stay registered where it is, and point to any host. All you need is control of its DNS zone. **How it is done.** The new registrar asks for an authentication code, supplied by the old one; the process may take about five days, and a transferred name cannot be transferred again for a period, long set at 60 days, which a 2025 decision plans to bring down to 30 days. Check the rule in force with your registrar.",
        "**Names in .dz.** They are administered by the DZ Network Internet Center, a subdivision of CERIST, and follow their own procedures: ask the office that registered yours. **The order.** Move first, check for a week, and only then transfer the name if you want everything in one place. Doing both at once means losing the way back at the moment you need it.",
      ] },
      { heading: "Three weeks, from the inventory to cancellation, in 2027", body: [
        "Three weeks in the example, the first one for the inventory.",
      ], visual: 'calendrier', after: [
        "**Week 1, the inventory**: the seven items, the access, the current cache time, the switch date chosen on a quiet day. **Weeks 1 and 2, the copy and the tests**: the site, the database, the mailboxes, then the five layers tested one by one.",
        "**Week 2, the switch**, on a morning of low activity, never on a Friday evening. **Week 3, the old server kept, then cancellation**: cancel only after checking mail, forms, scheduled tasks and a backup restored on the new server. The name transfer, if wanted, comes afterwards.",
      ], list: [
        "**What the manager receives**: the inventory of the seven items, the access in their own name, the site tested on the new server, a dated switch with its way back, the old server kept for seven days, and a verification report before cancellation.",
        "**What the company no longer does**: change host on a Friday evening, find out on Monday that mail no longer arrives, cancel the old server the same day, transfer the name in the middle of the move.",
        "**What is measured**: minutes of unavailability during the switch, messages received and sent afterwards, pages answering at the same address as before, scheduled tasks that ran.",
        "**What Symloop does**: the inventory, recovering the access, the copy and the tests, the switch and its way back, monitoring during the first week, then, if you wish, the name transfer.",
      ], faq: [
        { q: "How do you change a website's host?", a: "In six steps: take inventory of what has to move, lower the DNS cache time, copy the site and test it on the new server, freeze the old one and make a last copy, change the address in the DNS, then keep the old server on for a week before cancelling." },
        { q: "Must the domain name be transferred to change host?", a: "No. The name can stay registered where it is: you only need to edit its DNS zone so that it points to the new host. Transferring the name is another operation, optional, to be done later." },
        { q: "How do you transfer a domain name?", a: "Ask the old registrar for an authentication code, give it to the new one, and the process takes about five days. Beforehand, check that the DNS zone will be taken over identically. For a name in .dz, the procedure is the Algerian registry's: ask your office." },
        { q: "Will we lose our mail?", a: "Not if the mailboxes are part of the inventory: each mailbox is copied, the forwards recreated, and the record that directs mail changes at the same time as the site or separately. Sending and receiving are tested before and after the switch." },
        { q: "Will the site be down during the change?", a: "With a lowered cache time and a new server already tested, the switch shows within a few minutes. On a site that records orders, there is a freeze of a few hours during which it can be consulted but not modified." },
        { q: "Will we lose our search ranking?", a: "The risk comes from addresses that change, not from the host. Keep the same page addresses, set a permanent redirect for those that change, and check the certificate and the speed on the new server." },
        { q: "How long does DNS propagation take?", a: "It depends on the cache time set in your zone: if it is 24 hours, allow up to a day; if you lowered it to five minutes two days before, a few minutes. Some caching servers keep the old address a little longer." },
        { q: "What if the old host or the contractor no longer answers?", a: "Start by regaining control of the domain name and its DNS zone: that is what lets you point elsewhere. Then recover a copy of the site and the database, from the hosting if you have access, otherwise from a backup." },
        { q: "When should the old hosting be cancelled?", a: "Not before seven days, and only after checking mail, forms, scheduled tasks and a backup restored on the new server. As long as it is on, going back takes only a few minutes." },
        { q: "How long does it take, and where do we start?", a: "Three weeks in this guide's example, including one morning for the switch itself. Start with the inventory and with the question of access: who can sign in to the current hosting, the DNS zone and the domain name?" },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The home page is the first thing people check; mail is the one they forget." },
      { after: 3, text: "As long as the old server stays on, the decision can be undone in a few minutes." },
    ],
    cta: { eyebrow: "Tell us where the site is hosted, who has the access, and whether the mail is in the same place: we take the inventory, then we prepare the switch and its way back", title: "A slow site, a host that no longer answers, a contractor gone with the access, or a founder in France who wants to move their company's site: we move the site and the mail with no cut, keeping the old server for a week", body: "Inventory, recovering the access, copy and tests, switch, way back, monitoring, backup, then the name transfer if you wish. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.domaine, kind: '2027', name: 'Domain name and hosting: who owns what, taking back control' },
      { href: L.messagerie, kind: '2027', name: 'Professional email: domain, mailboxes, SPF, DKIM, DMARC' },
      { href: L.panne, kind: '2027', name: 'A website that no longer works: what to do' },
      { href: L.heberger, kind: '2027', name: 'Hosting in Algeria or in Europe: where to put servers and data' },
    ] },
  },
  ar: {
    kind: 'تغيير المستضيف · الجزائر · 2027', title: "كيف يُغيَّر مستضيف الموقع في الجزائر (2027): موقع بطيء، مستضيف لم يعد يجيب، خوف من ضياع البريد والترتيب في البحث، التبديل دون انقطاع ونقل اسم النطاق",
    dek: "«موقعنا بطيء، المستضيف لم يعد يجيب عن الطلبات، ومقدّم الخدمة الذي كان يتكفل به غادر. نريد تغيير المستضيف، لكننا نخاف ضياع الموقع والبريد والترتيب في البحث. كيف نغيّر المستضيف دون انقطاع، وهل يجب نقل اسم النطاق في الوقت نفسه؟» تغيير المستضيف ونقل الاسم عمليتان. يُنقل الموقع أولاً، مع إبقاء الخادم القديم مشغَّلاً؛ والاسم يُنقل لاحقاً، إن لزم.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تغيير المستضيف', 'ترحيل موقع ويب', 'نقل اسم النطاق', 'أسماء النطاقات ومدة الحفظ', 'ترحيل علب البريد', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** تغيير المستضيف هو نسخ الموقع إلى مكان آخر، تجربته، ثم تغيير عنوان واحد في أسماء النطاقات. بالترتيب: **جرد** الأشياء السبعة التي تُنقل، ومنها علب البريد؛ **تخفيض مدة حفظ أسماء النطاقات** قبل يومين؛ **النسخ والتجارب** على الخادم الجديد، تحت عنوان مؤقت؛ **تجميد** لبضع ساعات ونسخة أخيرة؛ **التبديل**؛ ثم **إبقاء الخادم القديم مشغَّلاً سبعة أيام**، ليمكن الرجوع بإعادة توجيه الأسماء. وعناوين الصفحات لا تتغيّر، وهو ما يحمي الروابط والترتيب في البحث. **ونقل اسم النطاق** عملية أخرى، اختيارية: وأبداً في الأسبوع نفسه.",
      "هذا الدليل موجَّه إلى المسيّر الذي موقعه بطيء أو سيئ الاستضافة، إلى من اختفى مقدّم خدمته، وإلى المؤسس المقيم في فرنسا الذي يريد نقل موقع مؤسسته في الجزائر. التعريفات والوقائع المذكورة آتية من مصادر علنية: خدمة استضافة الويب، نظام أسماء النطاقات ومدة حفظه، سجل " + I('MX') + "، نقل اسم النطاق، بروتوكول " + I('IMAP') + "، ملف " + I('hosts') + "، إعادة التوجيه " + I('301') + "، والشهادة. الموقع وعناصره السبعة وساعات تبديله مثال مركَّب. هذا الدليل لا يقارن المستضيفين ولا يعطي أي سعر.",
    ],
    sections: [
      { heading: "نقل موقع، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: الجرد.",
      ], visual: 'temps', after: [
        "**ما يُنقل.** خدمة استضافة الويب توفّر البنية اللازمة لاستضافة المواقع وجعلها قابلة للوصول على الويب. وتغيير المستضيف هو جعل الموقع نفسه يعمل على بنية أخرى، ثم إرسال الزوّار إليها. **الدخول أولاً.** الجرد يبدأ بسؤال: من عنده الدخول إلى الاستضافة الحالية، منطقة أسماء النطاقات، واسم النطاق؟ وإذا كان عند مقدّم خدمة سابق، فالمرحلة الأولى موصوفة في [دليل اسم النطاق والاستضافة](" + L.domaine + ").",
        "**لماذا هذا الترتيب.** كل ما يسبق التبديل يُنجز دون أن يرى الزوّار شيئاً: الموقع القديم يواصل الخدمة. والتبديل نفسه تغيير واحد، وكل ما يتبعه مراجعة. **إلى أين.** اختيار المكان الجديد، في الجزائر أو أوروبا أو كليهما، له معاييره، المشروحة في [دليل الاستضافة في الجزائر أو في أوروبا](" + L.heberger + ").",
      ] },
      { heading: "سبعة أشياء تُنقل، لا واحد", body: [
        "الشكل ينقل سبعة عناصر من المستضيف القديم إلى الجديد.",
      ], visual: 'demenager', after: [
        "**الموقع وقاعدته.** الملفات تُنسخ؛ وقاعدة البيانات تُصدَّر ثم تُستورَد. وفي موقع يأخذ طلبيات أو تسجيلات، القاعدة تتغيّر كل دقيقة: ومن أجلها يُجمَّد الموقع القديم قبل النسخة الأخيرة. **علب البريد.** إذا كانت عند المستضيف نفسه، فتُنقل كذلك: سجل " + I('MX') + " يحدّد الخادم المكلَّف بقبول الرسائل لاسم نطاق، وسيجب أن يشير إلى الجديد. ومحتوى العلب يُنسخ بـ " + I('IMAP') + "، وهو البروتوكول المعياري الذي يسترجع به برنامج البريد الرسائل من خادم. والإعداد الكامل في [دليل البريد المهني](" + L.messagerie + ").",
        "**ما لا يُرى.** المهام المبرمجة، التي يُطلقها مبرمِج في ساعات محدَّدة: إرسال تذكيرات، تصدير ليلي، أو نسخة احتياطية. والرسائل التي يرسلها الموقع بنفسه، تأكيد طلبية أو استمارة اتصال، وتتوقف على إعداد إرسال خاص بكل مستضيف. ومنطقة أسماء النطاقات، تُعاد سطراً بسطر، ومنها الأسطر التي لا يتذكرها أحد. **طريقة وتجربة لكل سطر.** الجرد ينتهي حين يكون لكل عنصر الاثنتان.",
      ] },
      { heading: "قبل التبديل: خمس طبقات تُجرَّب", body: [
        "الطبقة المبرزة هي البريد.",
      ], visual: 'avant', after: [
        "**التجربة دون زوّار.** الموقع الجديد يُجرَّب قبل أن تتغيّر أسماء النطاقات: بعنوان مؤقت يعطيه المستضيف، أو بتعديل ملف " + I('hosts') + " على حاسوب، وهو ملف في النظام يربط الأسماء بالعناوين. فيرى هذا الحاسوب الخادم الجديد بالاسم الحقيقي، بينما الجميع ما زال يرى القديم. **العناوين نفسها.** كل صفحة تحتفظ بعنوانها. وإذا لزم تغيير عنوان، فإعادة توجيه " + I('301') + "، وهو الرمز المستعمل لإعادة التوجيه الدائمة، تقود القديم إلى الجديد: وهو ما يحمي الروابط المتقاسَمة والترتيب في البحث.",
        "**الشهادة.** الشهادة وثيقة إلكترونية تثبت أن مفتاحاً عمومياً يعود فعلاً لصاحبه؛ وتُصدَر على الخادم الجديد، للاسم بالبادئة ودونها. ودونها، المتصفح يعرض تنبيهاً لأول زائر، كما في الأعطال الموصوفة في [دليل الموقع الذي لم يعد يعمل](" + L.panne + "). **تجربة لكل مسار.** لا الصفحة الرئيسية فقط: استمارة مرسَلة، حساب مفتوح، طلبية منجزة، ورسالة مستلَمة. **وما بعدها.** النسخ الاحتياطي للخادم الجديد موضوع قبل التبديل، لا بعده: انظر [دليل النسخ الاحتياطي](" + L.sauvegardes + ").",
      ] },
      { heading: "التبديل، ساعة بعد ساعة", body: [
        "الشكل يتبع أربعة أسطر، من 72 ساعة قبل إلى 48 ساعة بعد.",
      ], visual: 'bascule', after: [
        "**مدة الحفظ.** حين يستلم محلِّل الأسماء جواباً، يحتفظ به في الذاكرة طيلة المدة، بالثواني، المحدَّدة في " + I('TTL') + ". وهذه المدة يخفّضها المسؤول غالباً قبل نقل خدمة، للتقليل من الاضطرابات: بمدة 300 ثانية، تنتهي السجلات في خمس دقائق. فتُخفَّض قبل يومين، حتى تزول القيمة الطويلة القديمة في كل مكان. وتحفّظ: بعض خوادم الحفظ تطبّق مدتها الخاصة، مهما كانت المضبوطة.",
        "**التجميد.** قبل بضع ساعات، الموقع القديم يصير للقراءة فقط أو يعرض رسالة صيانة؛ تُنجز النسخة الأخيرة للقاعدة، تُراجَع، ثم يُغيَّر العنوان في أسماء النطاقات. **الرجوع.** الخادم القديم يبقى مشغَّلاً وسليماً: وإذا ظهر مشكل، يُعاد توجيه الأسماء، وبعد بضع دقائق يعود الزوّار إليه. **بعدها.** مسبار يراجع الموقع كل بضع دقائق خلال الأسبوع الأول، حسب [دليل المراقبة](" + L.surveiller + ")؛ والمدة ترجع إلى قيمتها الطويلة بعد يوم.",
      ] },
      { heading: "تغيير المستضيف، ونقل الاسم: عمليتان", body: [
        "الشكل يقارن العمليتين في ست نقاط.",
      ], visual: 'deux', after: [
        "**شيئان مختلفان.** نقل اسم النطاق هو تغيير مكتب التسجيل المعيَّن لهذا الاسم. ولا ينقل الموقع ولا البريد: الاسم قد يبقى مسجَّلاً حيث هو، ويشير إلى أي مستضيف. ويكفي التحكم في منطقة أسمائه. **كيف يتم.** المكتب الجديد يطلب رمز مصادقة، يعطيه القديم؛ والعملية قد تأخذ نحو خمسة أيام، والاسم المنقول لا يُنقل من جديد خلال أجل، حُدِّد طويلاً بـ 60 يوماً، وقرار من سنة 2025 يتوقع إنزاله إلى 30 يوماً. راجعوا القاعدة السارية عند مكتبكم.",
        "**الأسماء في " + I('.dz') + ".** يسيّرها " + I('DZ Network Internet Center') + "، وهو فرع من " + I('CERIST') + "، وتتبع إجراءاتها الخاصة: استعلموا عند المكتب الذي سجّل اسمكم. **الترتيب.** يُنقل الموقع أولاً، يُراجَع أسبوعاً، وبعدها فقط يُنقل الاسم إن أُريد جمع الكل. وإنجاز الاثنين معاً هو فقدان الرجوع في اللحظة التي نحتاجه فيها.",
      ] },
      { heading: "ثلاثة أسابيع، من الجرد إلى الفسخ، سنة 2027", body: [
        "ثلاثة أسابيع في المثال، والأول منها للجرد.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الجرد**: العناصر السبعة، الدخول، مدة الحفظ الحالية، وتاريخ التبديل مختاراً في يوم هادئ. **الأسبوعان 1 و2، النسخ والتجارب**: الموقع، القاعدة، العلب، ثم الطبقات الخمس مجرَّبة واحدة واحدة.",
        "**الأسبوع 2، التبديل**، في صباح قليل النشاط، وأبداً مساء جمعة. **الأسبوع 3، الخادم القديم يبقى، ثم الفسخ**: لا يُفسخ إلا بعد مراجعة البريد، الاستمارات، المهام المبرمجة، واسترجاع نسخة احتياطية على الخادم الجديد. ونقل الاسم، إن أُريد، يأتي بعدها.",
      ], list: [
        "**ما يستلمه المسيّر**: جرد العناصر السبعة، الدخول باسمه، الموقع مجرَّباً على الخادم الجديد، تبديل مؤرَّخ مع رجوعه، الخادم القديم مبقى سبعة أيام، ومحضر مراجعة قبل الفسخ.",
        "**ما لم تعد المؤسسة تفعله**: تغيير المستضيف مساء جمعة، اكتشاف يوم الاثنين أن البريد لم يعد يصل، فسخ الخادم القديم في اليوم نفسه، ونقل الاسم وسط النقل.",
        "**ما يُقاس**: دقائق التوقف أثناء التبديل، الرسائل المستلَمة والمرسَلة بعده، الصفحات التي تجيب بالعنوان نفسه كما كانت، والمهام المبرمجة التي اشتغلت.",
        "**ما تفعله Symloop**: الجرد، استرجاع الدخول، النسخ والتجارب، التبديل ورجوعه، مراقبة الأسبوع الأول، ثم، إن أردتم، نقل الاسم.",
      ], faq: [
        { q: "كيف يُغيَّر مستضيف الموقع؟", a: "في ست مراحل: جرد ما يُنقل، تخفيض مدة حفظ أسماء النطاقات، نسخ الموقع وتجربته على الخادم الجديد، تجميد القديم وإنجاز نسخة أخيرة، تغيير العنوان في أسماء النطاقات، ثم إبقاء الخادم القديم مشغَّلاً أسبوعاً قبل الفسخ." },
        { q: "هل يجب نقل اسم النطاق لتغيير المستضيف؟", a: "لا. الاسم قد يبقى مسجَّلاً حيث هو: يكفي تعديل منطقة أسمائه ليشير إلى المستضيف الجديد. ونقل الاسم عملية أخرى، اختيارية، تُنجز لاحقاً." },
        { q: "كيف يُنقل اسم نطاق؟", a: "يُطلب من مكتب التسجيل القديم رمز مصادقة، يُعطى للجديد، والعملية تأخذ نحو خمسة أيام. وقبلها، تحققوا أن منطقة الأسماء ستُعاد كما هي. ولاسم في نطاق الجزائر، الإجراء إجراء السجل الجزائري: استعلموا عند مكتبكم." },
        { q: "هل سنفقد البريد؟", a: "لا، إذا كانت العلب جزءاً من الجرد: كل علبة تُنسخ، التحويلات تُعاد، والسجل الذي يوجّه البريد يتغيّر مع الموقع أو على حدة. ويُجرَّب الإرسال والاستلام قبل التبديل وبعده." },
        { q: "هل سيتوقف الموقع أثناء التغيير؟", a: "بمدة حفظ مخفَّضة وخادم جديد مجرَّب من قبل، التبديل يُرى في بضع دقائق. وفي موقع يسجّل طلبيات، يوجد تجميد لبضع ساعات يمكن خلاله التصفح دون تعديل." },
        { q: "هل سنفقد الترتيب في البحث؟", a: "الخطر يأتي من العناوين التي تتغيّر، لا من المستضيف. احتفظوا بعناوين الصفحات نفسها، ضعوا إعادة توجيه دائمة للتي تتغيّر، وراجعوا الشهادة والسرعة على الخادم الجديد." },
        { q: "كم يدوم انتشار أسماء النطاقات؟", a: "يتوقف على مدة الحفظ المضبوطة في منطقتكم: إذا كانت 24 ساعة، فإلى يوم؛ وإذا خفّضتموها إلى خمس دقائق قبل يومين، فبضع دقائق. وبعض خوادم الحفظ تحتفظ بالعنوان القديم مدة أطول قليلاً." },
        { q: "ماذا نفعل إذا لم يعد المستضيف القديم أو مقدّم الخدمة يجيب؟", a: "ابدؤوا باسترجاع التحكم في اسم النطاق ومنطقة أسمائه: هو ما يسمح بالتوجيه إلى مكان آخر. ثم استرجعوا نسخة من الموقع والقاعدة، من الاستضافة إن كان لكم الدخول، وإلا من نسخة احتياطية." },
        { q: "متى تُفسخ الاستضافة القديمة؟", a: "ليس قبل سبعة أيام، وفقط بعد مراجعة البريد، الاستمارات، المهام المبرمجة، ونسخة احتياطية مسترجَعة على الخادم الجديد. وما دامت مشغَّلة، فالرجوع لا يأخذ إلا بضع دقائق." },
        { q: "كم يلزم من وقت، ومن أين نبدأ؟", a: "ثلاثة أسابيع في مثال هذا الدليل، منها صباح للتبديل نفسه. وابدؤوا بالجرد وبسؤال الدخول: من يستطيع الدخول إلى الاستضافة الحالية، منطقة الأسماء، واسم النطاق؟" },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الصفحة الرئيسية أول ما يُراجَع؛ والبريد هو ما يُنسى." },
      { after: 3, text: "ما دام الخادم القديم مشغَّلاً، فالقرار يُلغى في بضع دقائق." },
    ],
    cta: { eyebrow: "قولوا لنا أين يُستضاف الموقع، من عنده الدخول، وهل البريد في المكان نفسه: ننجز الجرد، ثم نحضّر التبديل ورجوعه", title: "موقع بطيء، مستضيف لم يعد يجيب، مقدّم خدمة غادر ومعه الدخول، أو مؤسس في فرنسا يريد نقل موقع مؤسسته: ننقل الموقع والبريد دون انقطاع، مع إبقاء الخادم القديم أسبوعاً", body: "جرد، استرجاع الدخول، نسخ وتجارب، تبديل، رجوع، مراقبة، نسخ احتياطي، ثم نقل الاسم إن أردتم. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.domaine, kind: '2027', name: 'اسم النطاق والاستضافة: من يملك ماذا، واسترجاع التحكم' },
      { href: L.messagerie, kind: '2027', name: 'البريد المهني: النطاق، العلب، وإعدادات المصادقة' },
      { href: L.panne, kind: '2027', name: 'موقع لم يعد يعمل: ماذا نفعل' },
      { href: L.heberger, kind: '2027', name: 'الاستضافة في الجزائر أو في أوروبا: أين توضع الخوادم والبيانات' },
    ] },
  },
};

const KEYWORDS = "comment changer d'hébergeur de site internet 2027, changer d'hébergeur sans coupure, comment transférer un nom de domaine, migration de site web algérie, migrer un site vers un autre hébergeur, changer d'hébergeur mails, propagation dns durée, ttl dns, transfert nom de domaine .dz, migration site sans perdre référencement, how to change web host algeria 2027, website migration without downtime, كيف أغيّر مستضيف الموقع 2027, نقل اسم النطاق, ترحيل موقع دون انقطاع";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
