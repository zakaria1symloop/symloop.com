import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-securiser-un-reseau-informatique-d-entreprise-en-algerie-2027-mots-de-passe-d-origine-wifi-mises-a-jour-ports-ouverts-reseau-invites.mjs';

const SLUG = 'comment-securiser-un-reseau-informatique-d-entreprise-en-algerie-2027-mots-de-passe-d-origine-wifi-mises-a-jour-ports-ouverts-reseau-invites';
const FIGURES = ['ordre', 'appareils', 'chemin', 'cle', 'couches', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  reseau: '/blog/installation-reseau-informatique-entreprise-algerie-2027-cablage-baie-de-brassage-switch-wifi-pare-feu-lien-de-secours/',
  audit: '/blog/cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections/',
  acces: '/blog/acces-a-distance-au-bureau-entreprise-algerie-2027-bureau-a-distance-qui-ne-fonctionne-pas-teletravail-tunnel-chiffre-sans-port-ouvert/',
  video: '/blog/videosurveillance-ip-entreprise-algerie-2027-cameras-enregistreur-jours-de-conservation-acces-a-distance-image-exploitable/',
  parc: '/blog/comment-gerer-un-parc-informatique-entreprise-algerie-2027-inventaire-des-postes-qui-a-quoi-licences-mises-a-jour-arrivee-depart-renouvellement/',
  filtrage: '/blog/comment-bloquer-des-sites-internet-au-bureau-entreprise-algerie-2027-filtrage-web-dns-pare-feu-reseau-invites-debit-l-apres-midi-charte/',
  ransomware: '/blog/ransomware-entreprise-algerie-2027-que-faire-premiere-heure-fichiers-chiffres-cinq-barrieres-sauvegarde-reprise/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
};

const CONTENT = {
  fr: {
    kind: 'Sécurité réseau · Algérie · 2027', title: "Comment sécuriser un réseau informatique d'entreprise en Algérie (2027) : la clé du Wi-Fi n'a jamais changé, les caméras ont encore le mot de passe d'origine, par quoi commencer avant d'acheter un pare-feu",
    dek: "« Notre réseau marche : une box, un switch, du Wi-Fi, des caméras, une imprimante, un petit serveur. Mais la clé du Wi-Fi n'a jamais changé, d'anciens employés et des visiteurs la connaissent, et je ne sais même pas si les caméras ont encore leur mot de passe d'usine. Comment sécuriser tout ça, par quoi commencer, et faut-il acheter un pare-feu ? » Commencez par des réglages, pas par un achat : la liste de ce qui est branché, les mots de passe d'origine, les mises à jour, les portes ouvertes sur internet.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Sécurité du réseau d’entreprise', 'Mots de passe d’origine', 'Sécurité du Wi-Fi', 'Ports ouverts', 'Réseau invités', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Commencez par des réglages, pas par un achat. Dans l'ordre : **l'inventaire** de tout ce qui est branché, par câble et en Wi-Fi ; **les mots de passe d'origine** remplacés sur chaque équipement, box, bornes, caméras, imprimante, serveur ; **les mises à jour** de leurs logiciels internes ; **les portes ouvertes depuis internet** fermées, l'accès distant passant par un tunnel chiffré ; **le Wi-Fi** en WPA2 ou WPA3, sans WPS, avec les visiteurs sur un réseau à part ; **des zones séparées**, pour qu'une caméra ne voie pas le serveur ; enfin **un journal** et une revue chaque trimestre. Quatre semaines dans l'exemple. Un pare-feu se choisit ensuite, quand on sait ce qu'il doit séparer.",
      "Ce guide s'adresse au gérant dont le réseau a été installé il y a quelques années et n'a pas été touché depuis : bureau, cabinet, magasin, dépôt, clinique, école. Et au fondateur installé en France qui ne peut pas passer voir ce qui est branché. Les définitions et les faits cités viennent de sources publiques : le mot de passe par défaut, le logiciel malveillant Mirai, WPA3, WPS, UPnP, la segmentation, la norme 802.1X, le gestionnaire de mots de passe, la défense en profondeur. Le bureau, son chemin d'intrusion et sa clé Wi-Fi connue de 46 personnes sont un exemple construit. Ce guide ne donne aucun prix de matériel et ne traite pas des règles de droit.",
    ],
    sections: [
      { heading: "Sécuriser un réseau, dans cet ordre", body: [
        "Le premier temps est accentué : inventorier.",
      ], visual: 'ordre', after: [
        "**Inventorier.** La liste de tout ce qui a une adresse sur le réseau : postes, serveur, box, switch, bornes, caméras, enregistreur, imprimantes, téléphones, pointeuse, téléviseur de la salle de réunion. L'écran d'administration de la box donne déjà la liste des appareils connectés ; on la confronte à ce qu'on voit dans les locaux. Tout appareil que personne ne sait nommer est une question à régler avant le reste. Les postes ont leur propre inventaire, décrit dans [le guide sur la gestion du parc informatique](" + L.parc + ").",
        "**Pourquoi cet ordre.** Les trois temps suivants, changer, mettre à jour, fermer, ne demandent que du temps et les accès d'administration : ils se font sur le matériel en place. Séparer peut demander un matériel qui sait le faire. Surveiller vient en dernier mais ne s'arrête pas : un réseau réglé une fois et jamais relu se défait au fil des ajouts. **Et le pare-feu ?** Un pare-feu est un système de sécurité réseau qui surveille et contrôle le trafic entrant et sortant ; votre box en contient déjà un, simple. Un modèle dédié se choisit ensuite, quand l'inventaire dit ce qu'il doit séparer.",
      ] },
      { heading: "Six équipements, ce qu'on y change", body: [
        "La figure donne, pour six équipements, le réglage à changer.",
      ], visual: 'appareils', after: [
        "**Les mots de passe d'origine.** Les fabricants livrent typiquement tous leurs appareils avec un mot de passe simple, comme « admin » ou « password » ; laisser un tel mot de passe sur un appareil accessible est un risque majeur. Le logiciel malveillant Mirai, découvert en août 2016, vise surtout des caméras IP et des routeurs : il repère les appareils vulnérables à l'aide d'une table de plus de 60 identifiants et mots de passe d'usine courants. **Où les ranger.** Un mot de passe par équipement, long, et tous dans un gestionnaire de mots de passe, un logiciel qui conserve identifiants et mots de passe dans un coffre ; deux personnes y ont accès, pas une seule.",
        "**Les mises à jour.** Le micrologiciel est le logiciel qui pilote le matériel de l'appareil ; celui d'une caméra ou d'une borne se met à jour depuis son écran d'administration, et personne ne le fait si ce n'est écrit nulle part. Notez la version et la date dans l'inventaire. Un équipement que son fabricant ne met plus à jour se remplace ou s'isole. **Les caméras.** Elles cumulent souvent les trois défauts : mot de passe d'origine, logiciel ancien, port ouvert pour les voir à distance. Le guide sur [la vidéosurveillance IP](" + L.video + ") décrit comment les consulter de loin sans ouvrir le réseau.",
      ] },
      { heading: "Un appareil oublié, et jusqu'où il mène", body: [
        "La figure montre le même bureau, avant et après trois réglages.",
      ], visual: 'chemin', after: [
        "**Le chemin.** Dans l'exemple, personne n'a attaqué le poste du comptable. Un port avait été ouvert sur la box pour consulter les caméras à distance ; l'enregistreur avait gardé son mot de passe d'origine ; et il partageait le réseau du serveur de fichiers. Trois négligences ordinaires, mises bout à bout. **Les portes ouvertes.** Une redirection de port rend un appareil interne joignable depuis internet. Certaines s'ouvrent seules : le protocole UPnP permet à un appareil du réseau de demander lui-même l'ouverture d'un port, et, par défaut, il ne met en œuvre aucune authentification. On le désactive sur la box, puis on relit la liste des redirections : chacune a une raison écrite, ou disparaît.",
        "**L'accès distant.** L'écran d'administration de la box ne doit pas répondre depuis internet. Pour travailler ou voir les caméras de l'extérieur, on passe par un tunnel chiffré, comme l'explique [le guide sur l'accès à distance au bureau](" + L.acces + "). **Plusieurs barrières.** La défense en profondeur est un principe de sécurité qui superpose plusieurs couches de contrôle : ici, le port fermé, le mot de passe changé, la zone séparée. Chacune aurait suffi à couper le chemin ; aucune n'est sûre de tenir seule. Ce qui se trouve au bout du chemin est décrit dans [le guide sur le rançongiciel](" + L.ransomware + ").",
      ] },
      { heading: "La clé du Wi-Fi que tout le monde connaît", body: [
        "La figure compte, mois après mois, ceux qui connaissent la clé.",
      ], visual: 'cle', after: [
        "**Le chiffrement.** WPA, WPA2 et WPA3 sont les programmes de certification de sécurité de la Wi-Fi Alliance ; WPA3 a été annoncé en janvier 2018 pour remplacer WPA2. L'ancien WEP a été abandonné à cause de ses vulnérabilités importantes : un réseau encore en WEP se règle aujourd'hui. **WPS.** Cette fonction, prévue pour simplifier la configuration du Wi-Fi à la maison et au petit bureau, a une faille connue : elle permet à un attaquant de retrouver le code PIN par essais successifs en 4 à 10 heures, et il est recommandé de la désactiver. Elle se coupe dans les réglages de la box et de chaque borne.",
        "**Qui a la clé.** Le chiffrement ne protège pas de ceux à qui la clé a été donnée. Trois niveaux, du plus simple au plus sûr. Un réseau invités, séparé, dont la clé peut s'afficher à l'accueil : il sert aussi au filtrage décrit dans [le guide pour bloquer des sites au bureau](" + L.filtrage + "). Une clé des bureaux changée à chaque départ. Ou un compte par personne : la norme IEEE 802.1X, un standard de contrôle d'accès réseau par port, permet à chacun de se connecter avec son identifiant ; un départ retire un compte, sans toucher aux autres.",
      ] },
      { heading: "Un réseau sécurisé, en cinq couches", body: [
        "La couche accentuée est celle des équipements.",
      ], visual: 'couches', after: [
        "**Les zones.** La segmentation d'un réseau consiste à le diviser en sous-réseaux ; ses avantages sont d'abord la performance et la sécurité. En pratique : les postes et le serveur dans une zone, les caméras et les imprimantes dans une autre, les invités dans une troisième, et des règles qui disent qui peut parler à qui. La construction, avec les switchs et le pare-feu qu'elle suppose, est décrite dans [le guide sur l'installation d'un réseau d'entreprise](" + L.reseau + "). **Les prises.** Une prise murale libre dans une salle d'attente est une porte : on la désactive sur le switch.",
        "**La surveillance.** Trois choses suffisent pour un petit bureau : le journal des connexions activé sur la box ou le pare-feu, une alerte quand un appareil inconnu apparaît, et une revue chaque trimestre, où l'on relit l'inventaire, les redirections de ports et la liste de ceux qui ont un accès d'administration. **Faire vérifier.** Une fois ces réglages faits, un regard extérieur dit ce qui reste : c'est le rôle de l'audit décrit dans [le guide sur l'audit de sécurité](" + L.audit + ").",
      ] },
      { heading: "Quatre semaines, de l'inventaire à la revue, en 2027", body: [
        "Quatre semaines dans l'exemple, dont la première pour inventorier.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, l'inventaire** : tout ce qui est branché, et qui détient quel mot de passe. **Semaines 1 et 2, les mots de passe** : identifiants d'origine remplacés, rangés dans le gestionnaire. **Semaines 2 et 3, les mises à jour et les portes** : micrologiciels, accès distant, redirections de ports, UPnP.",
        "**Semaines 3 et 4, le Wi-Fi et les zones** : chiffrement, WPS, réseau invités, équipements séparés ; on prévient les utilisateurs la veille, parce que chacun devra se reconnecter. **Semaine 4, le journal et la revue** : le journal activé, l'alerte réglée, la date de la prochaine revue fixée. Qui la fera dans trois mois ? Si personne en interne, c'est une ligne d'un contrat de maintenance, décrit dans [le guide sur l'infogérance](" + L.infogerance + ").",
      ], list: [
        "**Ce que le gérant reçoit** : l'inventaire de ce qui est branché, la preuve qu'aucun mot de passe d'origine ne subsiste, la liste des ports ouverts avec leur raison, un Wi-Fi invités séparé, des zones, un journal, et la date de la prochaine revue.",
        "**Ce que l'entreprise ne fait plus** : donner la clé des bureaux aux visiteurs, laisser un port ouvert « pour voir les caméras », découvrir un appareil inconnu sur le réseau, dépendre d'une seule personne qui connaît les mots de passe.",
        "**Ce qui est mesuré** : appareils inventoriés et appareils inconnus, équipements à jour, ports ouverts, personnes ayant un accès d'administration, date de la dernière revue.",
        "**Ce que fait Symloop** : l'inventaire, le remplacement des mots de passe et leur rangement, les mises à jour, la fermeture des accès depuis internet, le Wi-Fi et le réseau invités, la séparation en zones, le journal, puis la revue trimestrielle.",
      ], faq: [
        { q: "Comment sécuriser un réseau informatique d'entreprise ?", a: "Dans l'ordre : inventorier tout ce qui est branché, remplacer les mots de passe d'origine, mettre à jour les équipements, fermer ce qui est ouvert depuis internet, séparer les invités et les équipements des postes, puis surveiller avec un journal et une revue chaque trimestre." },
        { q: "Comment sécuriser un réseau Wi-Fi ?", a: "Chiffrement WPA2 ou WPA3, fonction WPS désactivée, mot de passe d'administration des bornes changé, visiteurs sur un réseau invités séparé, et pour les bureaux une clé changée à chaque départ ou un compte par personne." },
        { q: "Faut-il acheter un pare-feu ?", a: "Pas en premier. Votre box en contient déjà un, simple, et les premiers réglages de ce guide se font sur le matériel en place. Un pare-feu dédié se justifie quand il faut séparer des zones, relier des sites ou garder un journal détaillé : l'inventaire le dit." },
        { q: "Pourquoi changer le mot de passe d'une caméra ou d'une imprimante ?", a: "Parce que ce sont des ordinateurs branchés sur votre réseau, livrés avec un mot de passe identique sur tous les appareils du même modèle. Des logiciels malveillants comme Mirai essaient ces identifiants d'usine automatiquement." },
        { q: "Comment savoir ce qui est branché sur mon réseau ?", a: "L'écran d'administration de la box liste les appareils connectés, par câble et en Wi-Fi. On confronte cette liste à un tour des locaux. Un appareil que personne ne sait nommer est la première question à régler." },
        { q: "Qu'est-ce qu'un port ouvert, et comment le fermer ?", a: "C'est une redirection qui rend un appareil interne joignable depuis internet. La liste se trouve dans les réglages de la box : on désactive UPnP, qui en ouvre automatiquement, puis on supprime chaque redirection qui n'a pas de raison écrite." },
        { q: "Faut-il changer la clé du Wi-Fi quand un employé part ?", a: "Oui, si tout le bureau partage une seule clé : c'est la seule façon de la lui reprendre. Pour ne plus avoir à le faire, on passe à un compte par personne : un départ retire un compte, sans toucher aux autres." },
        { q: "Le réseau invités est-il vraiment utile ?", a: "Oui. Les visiteurs ont internet sans voir les imprimantes, le serveur ni les caméras, et la clé de ce réseau peut s'afficher et changer souvent sans déranger les bureaux." },
        { q: "À quelle fréquence faut-il revoir ces réglages ?", a: "Une revue chaque trimestre : inventaire, ports ouverts, mises à jour, personnes ayant un accès d'administration. Et à chaque événement : un départ, un nouvel équipement, un prestataire qui a eu un accès." },
        { q: "Combien de temps faut-il, et par quoi commencer ?", a: "Quatre semaines dans l'exemple de ce guide, sans arrêter le travail. Commencez par l'inventaire ; les mots de passe d'origine se remplacent la même semaine." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un mot de passe d'origine est le même sur tous les appareils du même modèle." },
      { after: 3, text: "Une clé partagée ne se retire à personne." },
    ],
    cta: { eyebrow: "Dites-nous combien de postes, quels équipements, et qui a installé le réseau : nous faisons l'inventaire, puis nous réglons ce qui est en place avant de parler d'achat", title: "Clé Wi-Fi connue de tous, caméras au mot de passe d'origine, port ouvert dont personne ne sait pourquoi, box jamais mise à jour, ou fondateur en France qui ne peut pas passer voir ce qui est branché : nous sécurisons le réseau dans l'ordre", body: "Inventaire, mots de passe et gestionnaire, mises à jour, accès depuis internet fermés, Wi-Fi et réseau invités, zones, journal, revue trimestrielle. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.reseau, kind: '2027', name: 'Installation d’un réseau d’entreprise : câblage, switchs, Wi-Fi, pare-feu' },
      { href: L.audit, kind: '2027', name: 'Audit de sécurité ou test d’intrusion : ce qu’il regarde' },
      { href: L.acces, kind: '2027', name: 'Accès à distance au bureau : un tunnel chiffré, sans port ouvert' },
      { href: L.ransomware, kind: '2027', name: 'Rançongiciel : la première heure, cinq barrières' },
    ] },
  },
  en: {
    kind: 'Network security · Algeria · 2027', title: "How to secure a company's computer network in Algeria (2027): the Wi-Fi key has never changed, the cameras still have the factory password, where to start before buying a firewall",
    dek: "“Our network works: a box, a switch, Wi-Fi, cameras, a printer, a small server. But the Wi-Fi key has never changed, former employees and visitors know it, and I do not even know whether the cameras still have their factory password. How do we secure all that, where do we start, and do we need to buy a firewall?” Start with settings, not with a purchase: the list of what is plugged in, factory passwords, updates, the doors open to the internet.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Company network security', 'Factory passwords', 'Wi-Fi security', 'Open ports', 'Guest network', 'Algeria 2027'],
    intro: [
      "**Short answer.** Start with settings, not with a purchase. In order: **the inventory** of everything plugged in, by cable and on Wi-Fi; **factory passwords** replaced on every device, box, access points, cameras, printer, server; **updates** of their internal software; **the doors open from the internet** closed, with remote access going through an encrypted tunnel; **the Wi-Fi** on WPA2 or WPA3, without WPS, with visitors on a separate network; **separate zones**, so that a camera does not see the server; and finally **a log** and a review every quarter. Four weeks in the example. A firewall is chosen afterwards, once you know what it must separate.",
      "This guide is for the manager whose network was installed a few years ago and has not been touched since: an office, a firm, a shop, a warehouse, a clinic, a school. And for the founder based in France who cannot drop by to see what is plugged in. The definitions and facts quoted come from public sources: the default password, the Mirai malware, WPA3, WPS, UPnP, segmentation, the 802.1X standard, the password manager, defence in depth. The office, its intrusion path and its Wi-Fi key known to 46 people are a constructed example. This guide gives no hardware prices and does not cover legal rules.",
    ],
    sections: [
      { heading: "Securing a network, in this order", body: [
        "The first step is accented: take inventory.",
      ], visual: 'ordre', after: [
        "**Take inventory.** The list of everything that has an address on the network: computers, server, box, switch, access points, cameras, recorder, printers, phones, time clock, the meeting-room television. The box's administration screen already lists the connected devices; compare it with what you see on the premises. Any device nobody can name is a question to settle before the rest. Computers have their own inventory, described in [the guide to managing an IT estate](" + L.parc + ").",
        "**Why this order.** The next three steps, change, update, close, need only time and the administration credentials: they are done on the equipment in place. Separating may need equipment that can do it. Watching comes last but does not stop: a network set once and never reread comes undone as things are added. **And the firewall?** A firewall is a network security system that monitors and controls incoming and outgoing network traffic; your box already contains a simple one. A dedicated model is chosen afterwards, once the inventory says what it must separate.",
      ] },
      { heading: "Six devices, what to change on each", body: [
        "The figure gives, for six devices, the setting to change.",
      ], visual: 'appareils', after: [
        "**Factory passwords.** Manufacturers typically use a simple password, such as admin or password, on all the equipment they ship; leaving such a password on a device that can be reached is a major security risk. The Mirai malware, first found in August 2016, primarily targets IP cameras and home routers: it identifies vulnerable devices using a table of more than 60 common factory default usernames and passwords. **Where to keep them.** One password per device, long, and all of them in a password manager, software that stores usernames and passwords in a vault; two people have access to it, not just one.",
        "**Updates.** Firmware is the software that provides low-level control of the device's hardware; a camera's or an access point's is updated from its administration screen, and nobody does it if it is written nowhere. Note the version and the date in the inventory. A device its manufacturer no longer updates is replaced or isolated. **Cameras.** They often combine the three defects: factory password, old software, a port opened to view them remotely. The guide to [IP video surveillance](" + L.video + ") describes how to view them from afar without opening the network.",
      ] },
      { heading: "A forgotten device, and how far it leads", body: [
        "The figure shows the same office, before and after three settings.",
      ], visual: 'chemin', after: [
        "**The path.** In the example, nobody attacked the accountant's computer. A port had been opened on the box to view the cameras remotely; the recorder had kept its factory password; and it shared the network of the file server. Three ordinary oversights, placed end to end. **Open doors.** A port forward makes an internal device reachable from the internet. Some open by themselves: the UPnP protocol lets a device on the network request the opening of a port itself, and, by default, it does not implement any authentication. Turn it off on the box, then reread the list of forwards: each one has a written reason, or goes.",
        "**Remote access.** The box's administration screen must not answer from the internet. To work or view the cameras from outside, go through an encrypted tunnel, as explained in [the guide to remote access to the office](" + L.acces + "). **Several barriers.** Defence in depth is a security principle in which multiple layers of controls are stacked: here, the closed port, the changed password, the separate zone. Each would have been enough to cut the path; none is sure to hold alone. What lies at the end of the path is described in [the guide to ransomware](" + L.ransomware + ").",
      ] },
      { heading: "The Wi-Fi key that everyone knows", body: [
        "The figure counts, month after month, those who know the key.",
      ], visual: 'cle', after: [
        "**Encryption.** WPA, WPA2 and WPA3 are the security certification programs of the Wi-Fi Alliance; WPA3 was announced in January 2018 as a replacement to WPA2. The older WEP was abandoned because of its significant vulnerabilities: a network still on WEP is fixed today. **WPS.** This feature, designed to ease the setup of Wi-Fi in home and small office environments, has a known flaw: it allows an attacker to recover the PIN in 4 to 10 hours with a brute-force attack, and users have been urged to turn it off. It is switched off in the settings of the box and of each access point.",
        "**Who has the key.** Encryption does not protect against those the key was given to. Three levels, from the simplest to the safest. A separate guest network, whose key can be displayed at reception: it also serves the filtering described in [the guide to blocking websites at the office](" + L.filtrage + "). An office key changed at every departure. Or one account per person: IEEE 802.1X, a standard for port-based network access control, lets each person connect with their own sign-in; a departure removes one account, without touching the others.",
      ] },
      { heading: "A secured network, in five layers", body: [
        "The accented layer is devices.",
      ], visual: 'couches', after: [
        "**Zones.** Network segmentation is the practice of splitting a network into subnetworks; its advantages are primarily performance and security. In practice: computers and the server in one zone, cameras and printers in another, guests in a third, and rules that say who may talk to whom. The build, with the switches and the firewall it assumes, is described in [the guide to installing a company network](" + L.reseau + "). **Sockets.** A free wall socket in a waiting room is a door: it is turned off on the switch.",
        "**Watching.** Three things are enough for a small office: the connection log turned on in the box or the firewall, an alert when an unknown device appears, and a review every quarter, in which you reread the inventory, the port forwards and the list of those who have administration access. **Having it checked.** Once these settings are done, an outside look says what is left: that is the role of the audit described in [the guide to the security audit](" + L.audit + ").",
      ] },
      { heading: "Four weeks, from the inventory to the review, in 2027", body: [
        "Four weeks in the example, the first one to take inventory.",
      ], visual: 'calendrier', after: [
        "**Week 1, the inventory**: everything plugged in, and who holds which password. **Weeks 1 and 2, passwords**: factory credentials replaced, kept in the manager. **Weeks 2 and 3, updates and doors**: firmware, remote access, port forwards, UPnP.",
        "**Weeks 3 and 4, Wi-Fi and zones**: encryption, WPS, guest network, devices separated; users are warned the day before, because everyone will have to reconnect. **Week 4, the log and the review**: the log turned on, the alert set, the date of the next review fixed. Who will do it in three months? If nobody in-house, it is a line in a maintenance contract, described in [the guide to managed IT](" + L.infogerance + ").",
      ], list: [
        "**What the manager receives**: the inventory of what is plugged in, proof that no factory password remains, the list of open ports with their reason, a separate guest Wi-Fi, zones, a log, and the date of the next review.",
        "**What the company no longer does**: give the office key to visitors, leave a port open “to see the cameras”, discover an unknown device on the network, depend on a single person who knows the passwords.",
        "**What is measured**: devices inventoried and unknown devices, devices up to date, open ports, people with administration access, date of the last review.",
        "**What Symloop does**: the inventory, replacing the passwords and storing them, updates, closing access from the internet, the Wi-Fi and the guest network, separation into zones, the log, then the quarterly review.",
      ], faq: [
        { q: "How do you secure a company's computer network?", a: "In order: take inventory of everything plugged in, replace factory passwords, update the devices, close what is open from the internet, separate guests and devices from computers, then watch with a log and a review every quarter." },
        { q: "How do you secure a Wi-Fi network?", a: "WPA2 or WPA3 encryption, the WPS feature turned off, the access points' administration password changed, visitors on a separate guest network, and for the office a key changed at every departure or one account per person." },
        { q: "Do we need to buy a firewall?", a: "Not first. Your box already contains a simple one, and the first settings in this guide are done on the equipment in place. A dedicated firewall is justified when zones must be separated, sites linked or a detailed log kept: the inventory says so." },
        { q: "Why change the password of a camera or a printer?", a: "Because they are computers plugged into your network, shipped with the same password on every device of the same model. Malware such as Mirai tries these factory credentials automatically." },
        { q: "How do I know what is plugged into my network?", a: "The box's administration screen lists the connected devices, by cable and on Wi-Fi. Compare that list with a walk round the premises. A device nobody can name is the first question to settle." },
        { q: "What is an open port, and how do you close it?", a: "It is a forward that makes an internal device reachable from the internet. The list is in the box's settings: turn off UPnP, which opens some automatically, then delete every forward that has no written reason." },
        { q: "Should the Wi-Fi key be changed when an employee leaves?", a: "Yes, if the whole office shares a single key: it is the only way to take it back. To stop having to, move to one account per person: a departure removes one account, without touching the others." },
        { q: "Is a guest network really useful?", a: "Yes. Visitors get internet without seeing the printers, the server or the cameras, and the key of that network can be displayed and changed often without disturbing the office." },
        { q: "How often should these settings be reviewed?", a: "A review every quarter: inventory, open ports, updates, people with administration access. And at every event: a departure, a new device, a contractor who was given access." },
        { q: "How long does it take, and where do we start?", a: "Four weeks in this guide's example, without stopping work. Start with the inventory; factory passwords are replaced the same week." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A factory password is the same on every device of the same model." },
      { after: 3, text: "A shared key cannot be taken back from anyone." },
    ],
    cta: { eyebrow: "Tell us how many computers, which devices, and who installed the network: we take the inventory, then we set what is in place before talking about a purchase", title: "A Wi-Fi key known to everyone, cameras on their factory password, an open port nobody can explain, a box never updated, or a founder in France who cannot drop by to see what is plugged in: we secure the network in order", body: "Inventory, passwords and manager, updates, access from the internet closed, Wi-Fi and guest network, zones, log, quarterly review. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.reseau, kind: '2027', name: 'Installing a company network: cabling, switches, Wi-Fi, firewall' },
      { href: L.audit, kind: '2027', name: 'Security audit or penetration test: what it looks at' },
      { href: L.acces, kind: '2027', name: 'Remote access to the office: an encrypted tunnel, no open port' },
      { href: L.ransomware, kind: '2027', name: 'Ransomware: the first hour, five barriers' },
    ] },
  },
  ar: {
    kind: 'أمن الشبكة · الجزائر · 2027', title: "كيف تُؤمَّن شبكة المؤسسة المعلوماتية في الجزائر (2027): مفتاح الواي فاي لم يتغيّر أبداً، والكاميرات ما زالت بكلمة المرور الأصلية، من أين نبدأ قبل شراء جدار ناري",
    dek: "«شبكتنا تعمل: علبة، موزِّع، واي فاي، كاميرات، طابعة، وخادم صغير. لكن مفتاح الواي فاي لم يتغيّر أبداً، وعمّال سابقون وزوّار يعرفونه، ولا أعرف حتى هل ما زالت الكاميرات بكلمة مرور المصنع. كيف نؤمّن كل هذا، من أين نبدأ، وهل يلزم شراء جدار ناري؟» ابدؤوا بالإعدادات، لا بالشراء: قائمة ما هو موصول، كلمات المرور الأصلية، التحديثات، والأبواب المفتوحة على الإنترنت.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['أمن شبكة المؤسسة', 'كلمات المرور الأصلية', 'أمن الواي فاي', 'المنافذ المفتوحة', 'شبكة الزوّار', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** ابدؤوا بالإعدادات، لا بالشراء. بالترتيب: **جرد** كل ما هو موصول، بكابل أو واي فاي؛ **كلمات المرور الأصلية** مستبدَلة على كل جهاز، العلبة، نقاط الوصول، الكاميرات، الطابعة، والخادم؛ **تحديثات** برامجها الداخلية؛ **الأبواب المفتوحة من الإنترنت** مغلقة، والدخول عن بعد يمر بنفق مشفَّر؛ **الواي فاي** بـ " + I('WPA2') + " أو " + I('WPA3') + "، دون " + I('WPS') + "، والزوّار على شبكة منفصلة؛ **مناطق مفصولة**، حتى لا ترى كاميرا الخادم؛ وأخيراً **سجل** ومراجعة كل ثلاثة أشهر. أربعة أسابيع في المثال. والجدار الناري يُختار بعدها، حين نعرف ما عليه أن يفصل.",
      "هذا الدليل موجَّه إلى المسيّر الذي رُكِّبت شبكته منذ سنوات ولم تُمَسّ من يومها: مكتب، عيادة، محل، مستودع، أو مدرسة. وإلى المؤسس المقيم في فرنسا الذي لا يستطيع المرور ليرى ما هو موصول. التعريفات والوقائع المذكورة آتية من مصادر علنية: كلمة المرور الافتراضية، البرنامج الخبيث " + I('Mirai') + "، " + I('WPA3') + "، " + I('WPS') + "، " + I('UPnP') + "، التقسيم، معيار " + I('802.1X') + "، مسيّر كلمات المرور، والدفاع في العمق. المكتب وطريق اختراقه ومفتاحه الذي يعرفه 46 شخصاً مثال مركَّب. هذا الدليل لا يعطي أي سعر للعتاد ولا يتناول القواعد القانونية.",
    ],
    sections: [
      { heading: "تأمين شبكة، بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: الجرد.",
      ], visual: 'ordre', after: [
        "**الجرد.** قائمة كل ما له عنوان على الشبكة: الحواسيب، الخادم، العلبة، الموزِّع، نقاط الوصول، الكاميرات، المسجِّل، الطابعات، الهواتف، آلة تسجيل الحضور، وتلفاز قاعة الاجتماعات. شاشة إدارة العلبة تعطي أصلاً قائمة الأجهزة المتصلة؛ وتُقابَل بما يُرى في المحل. وكل جهاز لا يعرف أحد تسميته سؤال يُحسم قبل الباقي. وللحواسيب جردها الخاص، الموصوف في [دليل تسيير الحظيرة المعلوماتية](" + L.parc + ").",
        "**لماذا هذا الترتيب.** المراحل الثلاث الموالية، التغيير والتحديث والإغلاق، لا تتطلب إلا وقتاً ومعرّفات الإدارة: تُنجز على العتاد الموجود. والفصل قد يتطلب عتاداً يعرف فعله. والمراقبة تأتي في الأخير لكنها لا تتوقف: شبكة ضُبطت مرة ولم تُراجَع أبداً تنحلّ مع الإضافات. **والجدار الناري؟** الجدار الناري نظام أمن شبكي يراقب حركة البيانات الداخلة والخارجة ويتحكم فيها؛ وعلبتكم تحتوي واحداً بسيطاً أصلاً. والطراز المخصَّص يُختار بعدها، حين يقول الجرد ما عليه أن يفصل.",
      ] },
      { heading: "ستة أجهزة، وما يُغيَّر فيها", body: [
        "الشكل يعطي، لستة أجهزة، الإعداد الذي يُغيَّر.",
      ], visual: 'appareils', after: [
        "**كلمات المرور الأصلية.** المصنّعون يسلّمون عادةً كل أجهزتهم بكلمة مرور بسيطة، مثل " + I('admin') + " أو " + I('password') + "؛ وترك كلمة كهذه على جهاز يمكن الوصول إليه خطر كبير. والبرنامج الخبيث " + I('Mirai') + "، المكتشَف في أوت 2016، يستهدف خاصة كاميرات " + I('IP') + " والموجِّهات: يتعرّف على الأجهزة الهشة بجدول من أكثر من 60 اسم مستعمل وكلمة مرور مصنعية شائعة. **أين تُحفظ.** كلمة مرور لكل جهاز، طويلة، وكلها في مسيّر كلمات المرور، وهو برنامج يحفظ المعرّفات وكلمات المرور في خزنة؛ وشخصان لهما الدخول إليه، لا واحد.",
        "**التحديثات.** البرنامج الثابت هو البرنامج الذي يتحكم في عتاد الجهاز؛ وبرنامج كاميرا أو نقطة وصول يُحدَّث من شاشة إدارتها، ولا أحد يفعله إن لم يكن مكتوباً في مكان ما. دوّنوا الإصدار والتاريخ في الجرد. والجهاز الذي لم يعد مصنّعه يحدّثه يُستبدل أو يُعزل. **الكاميرات.** تجمع غالباً العيوب الثلاثة: كلمة مرور أصلية، برنامج قديم، ومنفذ مفتوح لرؤيتها عن بعد. ودليل [المراقبة بالفيديو](" + L.video + ") يصف كيف تُشاهَد من بعيد دون فتح الشبكة.",
      ] },
      { heading: "جهاز منسي، وإلى أين يقود", body: [
        "الشكل يُظهر المكتب نفسه، قبل ثلاثة إعدادات وبعدها.",
      ], visual: 'chemin', after: [
        "**الطريق.** في المثال، لم يهاجم أحد حاسوب المحاسب. منفذ كان قد فُتح على العلبة لمشاهدة الكاميرات عن بعد؛ والمسجِّل احتفظ بكلمة مروره الأصلية؛ وكان يتقاسم شبكة خادم الملفات. ثلاث غفلات عادية، وُضعت واحدة بعد أخرى. **الأبواب المفتوحة.** تحويل منفذ يجعل جهازاً داخلياً قابلاً للوصول من الإنترنت. وبعضها يُفتح وحده: بروتوكول " + I('UPnP') + " يسمح لجهاز في الشبكة بأن يطلب بنفسه فتح منفذ، وهو، افتراضياً، لا يطبّق أي مصادقة. يُعطَّل على العلبة، ثم تُراجَع قائمة التحويلات: لكل واحد سبب مكتوب، أو يُحذف.",
        "**الدخول عن بعد.** شاشة إدارة العلبة يجب ألا تجيب من الإنترنت. وللعمل أو مشاهدة الكاميرات من الخارج، يُمَرّ بنفق مشفَّر، كما يشرح [دليل الدخول عن بعد إلى المكتب](" + L.acces + "). **عدة حواجز.** الدفاع في العمق مبدأ أمني يضع عدة طبقات من المراقبة فوق بعضها: هنا، المنفذ المغلق، كلمة المرور المغيَّرة، والمنطقة المفصولة. كل واحد كان يكفي لقطع الطريق؛ ولا واحد مضمون أن يصمد وحده. وما يوجد في آخر الطريق موصوف في [دليل فيروس الفدية](" + L.ransomware + ").",
      ] },
      { heading: "مفتاح الواي فاي الذي يعرفه الجميع", body: [
        "الشكل يعدّ، شهراً بعد شهر، من يعرفون المفتاح.",
      ], visual: 'cle', after: [
        "**التشفير.** " + I('WPA') + " و" + I('WPA2') + " و" + I('WPA3') + " هي برامج شهادات الأمن لدى " + I('Wi-Fi Alliance') + "؛ وقد أُعلن عن " + I('WPA3') + " في جانفي 2018 ليعوّض " + I('WPA2') + ". أما " + I('WEP') + " القديم فتُرك بسبب ثغراته الكبيرة: وشبكة ما زالت عليه تُضبط اليوم. **" + I('WPS') + ".** هذه الوظيفة، المصمَّمة لتسهيل إعداد الواي فاي في البيت والمكتب الصغير، لها ثغرة معروفة: تسمح لمهاجم باسترجاع الرمز بمحاولات متتالية في 4 إلى 10 ساعات، ويُنصح بتعطيلها. وتُقطع في إعدادات العلبة وكل نقطة وصول.",
        "**من عنده المفتاح.** التشفير لا يحمي ممن أُعطي لهم المفتاح. ثلاثة مستويات، من الأبسط إلى الآمن. شبكة للزوّار، مفصولة، يمكن تعليق مفتاحها في الاستقبال: وتنفع كذلك للحجب الموصوف في [دليل حجب المواقع في المكتب](" + L.filtrage + "). مفتاح المكاتب يُغيَّر عند كل مغادرة. أو حساب لكل شخص: معيار " + I('IEEE 802.1X') + "، وهو معيار للتحكم في الوصول إلى الشبكة حسب المنفذ، يسمح لكل واحد بالاتصال بمعرّفه؛ والمغادرة تسحب حساباً، دون المساس بالآخرين.",
      ] },
      { heading: "شبكة مؤمَّنة، في خمس طبقات", body: [
        "الطبقة المبرزة هي الأجهزة.",
      ], visual: 'couches', after: [
        "**المناطق.** تقسيم الشبكة هو تجزئتها إلى شبكات فرعية؛ وفوائده أولاً الأداء والأمن. عملياً: الحواسيب والخادم في منطقة، الكاميرات والطابعات في أخرى، الزوّار في ثالثة، وقواعد تقول من يكلّم من. والبناء، بالموزِّعات والجدار الناري الذي يفترضه، موصوف في [دليل تركيب شبكة المؤسسة](" + L.reseau + "). **المآخذ.** مأخذ جداري حر في قاعة انتظار باب: يُعطَّل على الموزِّع.",
        "**المراقبة.** ثلاثة أشياء تكفي لمكتب صغير: سجل الاتصالات مفعَّل على العلبة أو الجدار الناري، تنبيه حين يظهر جهاز مجهول، ومراجعة كل ثلاثة أشهر، يُعاد فيها قراءة الجرد، تحويلات المنافذ، وقائمة من لهم دخول الإدارة. **التحقق من الخارج.** بعد إنجاز هذه الإعدادات، نظرة خارجية تقول ما بقي: وهو دور التدقيق الموصوف في [دليل التدقيق الأمني](" + L.audit + ").",
      ] },
      { heading: "أربعة أسابيع، من الجرد إلى المراجعة، سنة 2027", body: [
        "أربعة أسابيع في المثال، والأول منها للجرد.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الجرد**: كل ما هو موصول، ومن يملك أي كلمة مرور. **الأسبوعان 1 و2، كلمات المرور**: المعرّفات الأصلية مستبدَلة، ومحفوظة في المسيّر. **الأسبوعان 2 و3، التحديثات والأبواب**: البرامج الثابتة، الدخول عن بعد، تحويلات المنافذ، و" + I('UPnP') + ".",
        "**الأسبوعان 3 و4، الواي فاي والمناطق**: التشفير، " + I('WPS') + "، شبكة الزوّار، والأجهزة المفصولة؛ ويُعلَم المستعملون عشية ذلك، لأن كل واحد سيعيد الاتصال. **الأسبوع 4، السجل والمراجعة**: السجل مفعَّل، التنبيه مضبوط، وتاريخ المراجعة المقبلة محدَّد. من سينجزها بعد ثلاثة أشهر؟ إن لم يكن أحد في الداخل، فهي سطر في عقد صيانة، موصوف في [دليل التسيير المعلوماتي المفوَّض](" + L.infogerance + ").",
      ], list: [
        "**ما يستلمه المسيّر**: جرد ما هو موصول، الدليل أن لا كلمة مرور أصلية بقيت، قائمة المنافذ المفتوحة مع سببها، واي فاي للزوّار منفصل، مناطق، سجل، وتاريخ المراجعة المقبلة.",
        "**ما لم تعد المؤسسة تفعله**: إعطاء مفتاح المكاتب للزوّار، ترك منفذ مفتوح «لرؤية الكاميرات»، اكتشاف جهاز مجهول على الشبكة، والارتباط بشخص واحد يعرف كلمات المرور.",
        "**ما يُقاس**: الأجهزة المجرودة والأجهزة المجهولة، الأجهزة المحدَّثة، المنافذ المفتوحة، من لهم دخول الإدارة، وتاريخ آخر مراجعة.",
        "**ما تفعله Symloop**: الجرد، استبدال كلمات المرور وحفظها، التحديثات، إغلاق الدخول من الإنترنت، الواي فاي وشبكة الزوّار، الفصل إلى مناطق، السجل، ثم المراجعة كل ثلاثة أشهر.",
      ], faq: [
        { q: "كيف تُؤمَّن شبكة المؤسسة المعلوماتية؟", a: "بالترتيب: جرد كل ما هو موصول، استبدال كلمات المرور الأصلية، تحديث الأجهزة، إغلاق ما هو مفتوح من الإنترنت، فصل الزوّار والأجهزة عن الحواسيب، ثم المراقبة بسجل ومراجعة كل ثلاثة أشهر." },
        { q: "كيف تُؤمَّن شبكة الواي فاي؟", a: "تشفير " + I('WPA2') + " أو " + I('WPA3') + "، وظيفة " + I('WPS') + " معطَّلة، كلمة مرور إدارة نقاط الوصول مغيَّرة، الزوّار على شبكة منفصلة، وللمكاتب مفتاح يُغيَّر عند كل مغادرة أو حساب لكل شخص." },
        { q: "هل يلزم شراء جدار ناري؟", a: "ليس أولاً. علبتكم تحتوي واحداً بسيطاً أصلاً، والإعدادات الأولى في هذا الدليل تُنجز على العتاد الموجود. والجدار الناري المخصَّص يُبرَّر حين يلزم فصل مناطق، ربط مواقع، أو حفظ سجل مفصَّل: والجرد يقول ذلك." },
        { q: "لماذا تُغيَّر كلمة مرور كاميرا أو طابعة؟", a: "لأنها حواسيب موصولة بشبكتكم، سُلِّمت بكلمة مرور واحدة على كل الأجهزة من الطراز نفسه. وبرامج خبيثة مثل " + I('Mirai') + " تجرّب هذه المعرّفات المصنعية آلياً." },
        { q: "كيف أعرف ما هو موصول بشبكتي؟", a: "شاشة إدارة العلبة تسرد الأجهزة المتصلة، بكابل أو واي فاي. وتُقابَل هذه القائمة بجولة في المحل. والجهاز الذي لا يعرف أحد تسميته أول سؤال يُحسم." },
        { q: "ما هو المنفذ المفتوح، وكيف يُغلق؟", a: "هو تحويل يجعل جهازاً داخلياً قابلاً للوصول من الإنترنت. والقائمة في إعدادات العلبة: يُعطَّل " + I('UPnP') + "، الذي يفتح بعضها آلياً، ثم يُحذف كل تحويل ليس له سبب مكتوب." },
        { q: "هل يُغيَّر مفتاح الواي فاي حين يغادر عامل؟", a: "نعم، إذا كان المكتب كله يتقاسم مفتاحاً واحداً: هي الطريقة الوحيدة لاسترجاعه منه. وكي لا يلزم ذلك بعدها، يُنتقل إلى حساب لكل شخص: المغادرة تسحب حساباً، دون المساس بالآخرين." },
        { q: "هل شبكة الزوّار نافعة فعلاً؟", a: "نعم. الزوّار يحصلون على الإنترنت دون أن يروا الطابعات ولا الخادم ولا الكاميرات، ومفتاح هذه الشبكة يمكن تعليقه وتغييره كثيراً دون إزعاج المكاتب." },
        { q: "كل كم تُراجَع هذه الإعدادات؟", a: "مراجعة كل ثلاثة أشهر: الجرد، المنافذ المفتوحة، التحديثات، ومن لهم دخول الإدارة. وعند كل حدث: مغادرة، جهاز جديد، أو مقدّم خدمة أُعطي دخولاً." },
        { q: "كم يلزم من وقت، ومن أين نبدأ؟", a: "أربعة أسابيع في مثال هذا الدليل، دون إيقاف العمل. ابدؤوا بالجرد؛ وكلمات المرور الأصلية تُستبدل في الأسبوع نفسه." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "كلمة المرور الأصلية هي نفسها على كل الأجهزة من الطراز نفسه." },
      { after: 3, text: "المفتاح المشترك لا يُسحب من أحد." },
    ],
    cta: { eyebrow: "قولوا لنا كم حاسوباً، أي أجهزة، ومن ركّب الشبكة: ننجز الجرد، ثم نضبط ما هو موجود قبل الكلام عن شراء", title: "مفتاح واي فاي يعرفه الجميع، كاميرات بكلمة المرور الأصلية، منفذ مفتوح لا يعرف أحد سببه، علبة لم تُحدَّث أبداً، أو مؤسس في فرنسا لا يستطيع المرور ليرى ما هو موصول: نؤمّن الشبكة بالترتيب", body: "جرد، كلمات المرور ومسيّرها، تحديثات، إغلاق الدخول من الإنترنت، واي فاي وشبكة للزوّار، مناطق، سجل، ومراجعة كل ثلاثة أشهر. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reseau, kind: '2027', name: 'تركيب شبكة المؤسسة: الكوابل، الموزِّعات، الواي فاي، والجدار الناري' },
      { href: L.audit, kind: '2027', name: 'تدقيق أمني أم اختبار اختراق: ما ينظر فيه' },
      { href: L.acces, kind: '2027', name: 'الدخول عن بعد إلى المكتب: نفق مشفَّر، دون منفذ مفتوح' },
      { href: L.ransomware, kind: '2027', name: 'فيروس الفدية: الساعة الأولى، وخمسة حواجز' },
    ] },
  },
};

const KEYWORDS = "comment sécuriser un réseau informatique 2027, comment sécuriser un réseau d'entreprise, comment sécuriser un réseau wifi, sécurité réseau entreprise algérie, mot de passe par défaut caméra routeur, désactiver wps, wpa3 entreprise, fermer les ports ouverts box, réseau invités wifi, changer la clé wifi départ employé, how to secure a company network algeria 2027, secure office wifi default passwords, كيف أؤمّن شبكة المؤسسة 2027, أمن الواي فاي في المكتب, كلمة المرور الأصلية للكاميرات";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
