import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/acces-a-distance-au-bureau-entreprise-algerie-2027-bureau-a-distance-qui-ne-fonctionne-pas-teletravail-tunnel-chiffre-sans-port-ouvert.mjs';

const SLUG = 'acces-a-distance-au-bureau-entreprise-algerie-2027-bureau-a-distance-qui-ne-fonctionne-pas-teletravail-tunnel-chiffre-sans-port-ouvert';
const FIGURES = ['chemins', 'causes', 'gestes', 'ligne', 'couches', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  intersites: '/blog/interconnecter-deux-sites-distants-algerie-2027-vpn-siege-agences-depot-plan-d-adresses-debit-secours-logiciel-lent/',
  fichiers: '/blog/partage-de-fichiers-entreprise-algerie-2027-serveur-de-fichiers-nas-ou-cloud-droits-par-dossier-versions-acces-a-distance/',
  ransomware: '/blog/ransomware-entreprise-algerie-2027-que-faire-premiere-heure-fichiers-chiffres-cinq-barrieres-sauvegarde-reprise/',
  piratage: '/blog/piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
  migrer: '/blog/migrer-vieux-logiciel-de-gestion-algerie-2027-windev-access-excel-vers-plateforme-web-mobile-sans-arreter/',
  serveur: '/blog/serveur-lent-entreprise-algerie-2027-logiciel-qui-rame-le-matin-memoire-disques-sauvegarde-en-pleine-journee-mesurer-avant-de-remplacer/',
};

const CONTENT = {
  fr: {
    kind: 'Accès à distance · Algérie · 2027', title: "Accès à distance au bureau en Algérie (2027) : travailler de chez soi ou de l'étranger sur le logiciel de l'entreprise, quand le bureau à distance ne fonctionne pas ou reste ouvert à tout internet",
    dek: "« Ma comptable veut travailler de chez elle deux jours par semaine, mon commercial est sur la route, et je passe l'été en France. On a essayé le bureau à distance : un jour ça marche, le lendemain non. Un informaticien nous a “ouvert un port” sur la box, et on utilise aussi un outil de prise en main gratuit qui se déconnecte sans arrêt. Comment accéder au logiciel du bureau de l'extérieur, de façon fiable, sans se faire pirater ? » Trois chemins existent : un port ouvert, qu'il faut fermer ; un tunnel chiffré jusqu'au bureau, qui convient presque toujours ; et le logiciel lui-même sur le web, qui supprime le problème. Le reste est une affaire de comptes, de postes allumés et de débit montant.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Accès à distance au bureau', 'Bureau à distance', 'Travail à distance', 'Réseau privé virtuel d’entreprise', 'Sécurité informatique', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** On n'ouvre pas le bureau à distance sur internet : on entre d'abord dans le réseau du bureau par un **tunnel chiffré**, avec un **compte par personne et un second code**, puis on ouvre sa session comme sur place. Microsoft l'écrit lui-même : rediriger un port ouvre le poste à internet, ce qui n'est pas recommandé, et un réseau privé virtuel est préférable. Quand le bureau à distance « ne fonctionne pas », la cause est presque toujours l'une de six : poste éteint, adresse qui a changé, adresse partagée par l'opérateur, édition Famille de Windows, compte, ligne saturée. Et la sortie durable, quand le logiciel le permet, est de le passer en application web.",
      "Ce guide s'adresse au gérant d'une entreprise de cinq à deux cents postes dont une partie de l'équipe travaille hors du bureau, comptable à domicile, commerciaux, direction en déplacement, et au fondateur installé en France qui veut ouvrir le logiciel de sa société algérienne. Les faits cités viennent de sources publiques : la documentation de Microsoft sur le bureau à distance, les définitions du protocole, de la traduction d'adresses chez l'opérateur et du réveil par le réseau. Les personnes, les débits et les délais de l'exemple sont construits. Ce guide ne donne pas de prix de matériel et ne traite pas des règles applicables aux équipements de réseau et au chiffrement : elles se vérifient avec votre opérateur et votre conseil.",
    ],
    sections: [
      { heading: "Trois chemins vers le bureau : un seul laisse la porte ouverte", body: [
        "La figure suit la même personne par trois chemins : un port ouvert sur la box, un tunnel chiffré, puis le logiciel devenu application web.",
      ], visual: 'chemins', after: [
        "**Le port ouvert.** Le protocole de bureau à distance écoute par défaut sur le port 3389. Pour l'atteindre de l'extérieur, on redirige ce port sur la box : la redirection associe simplement un port de l'adresse publique à un poste du bureau. Cela marche, et c'est le problème : le poste répond alors à n'importe qui. La documentation de Microsoft le dit sans détour : vous ouvrez votre PC à internet, ce qui n'est pas recommandé. En mai 2019, une faille baptisée BlueKeep, dans l'implémentation du bureau à distance de Microsoft, permettait l'exécution de code à distance ; face à un service exposé et non mis à jour, l'attaquant n'a alors même plus besoin de deviner un mot de passe. Les suites possibles sont décrites dans [le guide sur le ransomware](" + L.ransomware + ").",
        "**Le tunnel.** Avec un réseau privé virtuel, on n'ouvre rien vers les postes : l'ordinateur de la comptable établit un tunnel chiffré jusqu'au routeur du bureau, avec son compte et un second code, et se retrouve dans le réseau comme si elle y était. Elle ouvre ensuite sa session de bureau à distance sur son propre poste, ou sur un serveur. C'est le principe du tunnel entre deux sites du [guide sur l'interconnexion](" + L.intersites + "), appliqué à une personne. **L'application web.** Si le logiciel de gestion existe en version web, ou peut être reconstruit ainsi, il n'y a plus de poste à joindre : chacun ouvre un navigateur. C'est le chemin décrit dans [le guide pour migrer un vieux logiciel](" + L.migrer + "). **Les outils de prise en main.** Ils dépannent, mais un compte gratuit partagé par cinq personnes n'est pas un accès de travail : pas de comptes nominatifs, pas de journal, et une dépendance à un service extérieur.",
      ] },
      { heading: "Le bureau à distance ne fonctionne pas : six causes, dans l'ordre où on les vérifie", body: [
        "La figure donne, pour chaque cause, le signe qui la trahit et ce que l'on fait.",
      ], visual: 'causes', after: [
        "**Le poste est éteint ou en veille.** C'est la cause la plus banale : quelqu'un a éteint le poste en partant, ou il s'est mis en veille. On désactive la veille sur les postes concernés, et l'on active le réveil par le réseau, une norme qui permet d'allumer un ordinateur ou de le sortir de veille par un message réseau. **L'adresse a changé.** L'adresse publique d'une ligne ordinaire change ; une connexion notée en dur cherche alors une adresse qui n'est plus la vôtre. Le tunnel s'appuie sur un nom tenu à jour automatiquement, ce que fait le DNS dynamique. **L'opérateur partage l'adresse.** Certains accès, mobiles notamment, passent par une traduction d'adresses chez l'opérateur, qui empêche en général ses clients d'utiliser la redirection de port : rien n'entre, quelle que soit la configuration de la box. On demande une adresse publique, ou l'on utilise un tunnel établi depuis le bureau vers l'extérieur.",
        "**L'édition de Windows.** Le poste auquel on se connecte doit être en édition Pro ; l'ordinateur d'où l'on se connecte peut être dans n'importe quelle édition. Un poste en édition Famille n'acceptera pas de connexion entrante. **Le compte.** Un mot de passe changé au bureau, un compte non autorisé à se connecter à distance, ou un compte partagé que deux personnes utilisent en même temps : en pratique, sur un poste Windows ordinaire, la connexion à distance prend la place de la session ouverte sur place. **La ligne.** L'image qui gèle et la frappe en retard viennent de la ligne du bureau, traitée plus bas. Si c'est le logiciel lui-même qui est lent, même sur place, la cause est ailleurs : voir [le guide sur le serveur lent](" + L.serveur + ").",
      ] },
      { heading: "Un accès à distance propre, en six gestes", body: [
        "Le deuxième geste est accentué : avant d'installer quoi que ce soit, on ferme ce qui est ouvert.",
      ], visual: 'gestes', after: [
        "**Lister** : qui a besoin de quoi, et depuis où. La comptable a besoin du logiciel de comptabilité, pas de tout le réseau ; le gérant, de ses tableaux et de sa messagerie. **Fermer** : toutes les redirections de port de la box sont relevées et supprimées, y compris celle « faite un jour pour dépanner ». **Installer le tunnel** : sur le routeur du bureau, avec un chiffrement actuel, et un client sur chaque ordinateur autorisé.",
        "**Créer les comptes** : un par personne, avec un second code, et l'accès limité aux postes ou au serveur dont chacun a besoin ; la conduite à tenir quand un compte est compromis est dans [le guide sur le piratage](" + L.piratage + "). **Préparer les postes** : édition Pro, veille coupée, réveil par le réseau, mises à jour. **Essayer** : de l'extérieur, en 4G, avec chaque personne, avant d'annoncer que « ça marche ». Pour les fichiers seuls, un espace partagé suffit souvent, sans session distante : voir [le guide sur le partage de fichiers](" + L.fichiers + ").",
      ] },
      { heading: "Ce que la ligne du bureau doit envoyer : le débit montant et le délai", body: [
        "La figure calcule le débit que le bureau envoie pour six personnes à distance, puis place trois délais sur une échelle.",
      ], visual: 'ligne', after: [
        "**Le débit.** Le bureau à distance envoie l'image de l'écran ; c'est donc le débit montant du bureau qui compte. Microsoft publie des repères pour un écran de 1920 × 1080 : 100 à 150 kbit/s pour un traitement de texte, 150 à 200 pour un tableur, mais 6 à 6,5 Mbit/s pour de la navigation web dans la session et 8,5 à 9,5 pour une vidéo. Dans l'exemple, six personnes sur le logiciel de gestion demandent 1,2 Mbit/s ; qu'une seule ouvre un site d'actualités dans sa session, et le total passe à 7,5 ; qu'elle lance une vidéo, il dépasse les 10 Mbit/s de la ligne, et les cinq autres ralentissent. La règle est simple : dans la session, on travaille ; le web et la vidéo se regardent sur son propre ordinateur.",
        "**Le délai.** Le délai aller-retour entre l'ordinateur distant et le bureau ne se corrige pas avec du débit. Pour ses bureaux virtuels, Microsoft indique qu'un délai jusqu'à 150 ms ne gêne pas un travail sans vidéo, qu'entre 150 et 200 ms le travail sur du texte reste correct, et qu'au-delà de 200 ms l'expérience peut se dégrader. Il se mesure depuis l'endroit où l'on travaille, à l'heure où l'on travaille. **Un serveur pour plusieurs.** Quand plusieurs personnes doivent utiliser le même logiciel en même temps, on les connecte à un serveur de sessions plutôt qu'à des postes individuels ; chaque utilisateur ou appareil qui s'y connecte doit alors disposer d'une licence d'accès, à prévoir avec votre revendeur.",
      ] },
      { heading: "Un accès à distance sérieux, en cinq couches", body: [
        "La couche accentuée est celle du chemin : c'est elle qui décide de ce qu'un inconnu peut essayer.",
      ], visual: 'couches', after: [
        "**Qui** : des comptes nominatifs et un second code ; quand quelqu'un part, on ferme son compte le jour même. **Par où** : un tunnel ou une passerelle, jamais un port de bureau à distance sur la box. **Vers quoi** : son poste, un serveur de sessions, ou l'application web.",
        "**Avec quoi** : un ordinateur de l'entreprise, à jour et chiffré, plutôt que l'ordinateur familial ; si l'ordinateur personnel est la seule option, la session distante garde au moins les données au bureau. **Suivi** : un journal des connexions, des alertes sur les échecs répétés, une revue des comptes chaque trimestre ; c'est le travail courant décrit dans [le guide sur l'infogérance](" + L.infogerance + ").",
      ] },
      { heading: "Un accès à distance en place en 2027, en semaines", body: [
        "Trois semaines dans l'exemple, la première sans rien changer.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, inventaire et mesure** : qui se connecte et à quoi, quelles redirections sont ouvertes sur la box, quelle édition de Windows sur chaque poste, quel débit montant et quel délai mesurés de l'extérieur. **Semaine 2, tunnel et comptes** : le tunnel est installé, les comptes sont créés, et deux personnes l'utilisent pendant une semaine.",
        "**Semaine 3, bascule et fermeture** : tout le monde passe par le tunnel, les ports sont fermés, les outils de prise en main retirés, le journal en place. **Et ensuite.** Si le logiciel reste pénible à distance, parce qu'il est lourd ou que la ligne ne suit pas, la question n'est plus l'accès : c'est le logiciel, qu'il faut héberger autrement ou reconstruire en application web.",
      ], list: [
        "**Ce que le gérant voit** : qui a un accès à distance, depuis quand, la dernière connexion de chacun, et aucun port de bureau à distance ouvert sur la box.",
        "**Ce que l'entreprise ne fait plus** : partager un mot de passe de prise en main, laisser un port ouvert « provisoirement », appeler le bureau pour faire rallumer un poste, découvrir un accès oublié après un départ.",
        "**Ce qui est mesuré** : débit montant et délai aller-retour depuis l'extérieur, connexions réussies et refusées, comptes inactifs depuis trente jours.",
        "**Ce que fait Symloop** : l'inventaire et la mesure, le tunnel et les comptes, la préparation des postes ou du serveur de sessions, puis, quand le logiciel le justifie, sa reconstruction en application web et mobile.",
      ], faq: [
        { q: "Comment accéder à l'ordinateur du bureau depuis chez moi ?", a: "En deux temps. D'abord un tunnel chiffré vers le réseau du bureau, avec votre compte et un second code ; ensuite le bureau à distance vers votre poste, qui doit être allumé et en édition Pro de Windows. On ne redirige pas de port sur la box pour cela." },
        { q: "Pourquoi le bureau à distance ne fonctionne-t-il pas ?", a: "Six causes reviennent : le poste est éteint ou en veille, l'adresse publique du bureau a changé, l'opérateur partage l'adresse et rien ne peut entrer, le poste est en édition Famille, le compte n'est pas autorisé ou son mot de passe a changé, ou la ligne est saturée. On les vérifie dans cet ordre." },
        { q: "Est-il dangereux d'ouvrir le port du bureau à distance sur la box ?", a: "Oui. Le poste devient joignable par n'importe qui sur internet, et il ne reste que le mot de passe, ou la dernière mise à jour, entre un inconnu et votre réseau. La documentation de Microsoft indique que ce n'est pas recommandé et qu'un réseau privé virtuel est préférable." },
        { q: "Qu'est-ce qu'un VPN d'entreprise, et en faut-il un ?", a: "C'est un tunnel chiffré entre un ordinateur extérieur et le réseau du bureau, installé sur le routeur du bureau. Il n'a rien à voir avec les services grand public qui servent à changer de pays. Il en faut un dès qu'une personne doit atteindre un poste, un serveur ou un dossier du bureau depuis l'extérieur." },
        { q: "Peut-on travailler depuis la France sur le logiciel du bureau en Algérie ?", a: "Oui, par le même tunnel. Ce qui décide du confort, c'est le délai aller-retour entre les deux pays et le débit montant du bureau : mesurez-les un jour ordinaire. Un logiciel de gestion passe bien ; un logiciel de dessin ou une vidéo dans la session passent mal." },
        { q: "Faut-il laisser les ordinateurs du bureau allumés ?", a: "Le poste auquel on se connecte doit être allumé et ne pas se mettre en veille. Le réveil par le réseau permet de le rallumer à distance. Quand plusieurs personnes travaillent à distance tous les jours, un serveur de sessions toujours allumé est plus simple que des postes individuels." },
        { q: "Plusieurs personnes peuvent-elles se connecter au même poste ?", a: "Pas en même temps : en pratique, un poste Windows ordinaire ne tient qu'une session, et la connexion à distance prend la place de celle ouverte sur place. Pour plusieurs personnes sur le même logiciel, on utilise un serveur de sessions, avec une licence d'accès par utilisateur ou par appareil." },
        { q: "Quel débit faut-il pour le bureau à distance ?", a: "Peu pour un logiciel de gestion : les repères de Microsoft sont de 150 à 200 kbit/s pour un tableur. Beaucoup dès qu'on navigue sur le web ou qu'on regarde une vidéo dans la session : de 6 à 9,5 Mbit/s. C'est le débit montant du bureau qui compte, pas le débit de la maison." },
        { q: "Les outils de prise en main à distance gratuits suffisent-ils ?", a: "Pour dépanner un collègue, oui. Pour travailler tous les jours, non : pas de comptes nominatifs, pas de journal des connexions, un compte souvent partagé, et un service extérieur dont dépend tout l'accès. Un accès de travail est installé chez vous, à votre nom." },
        { q: "Peut-on se connecter depuis son ordinateur personnel ?", a: "On peut, mais c'est le point faible : un ordinateur familial partagé, pas à jour, ouvre la session du bureau. Au minimum, un compte séparé sur cet ordinateur, des mises à jour, et aucune copie locale des fichiers. L'idéal reste un ordinateur de l'entreprise." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "La question n'est pas comment ouvrir le bureau à distance, mais par où l'on entre dans le réseau du bureau." },
      { after: 3, text: "Dans la session, on travaille ; le web et la vidéo se regardent sur son propre ordinateur." },
    ],
    cta: { eyebrow: "Dites-nous combien de personnes travaillent hors du bureau, sur quel logiciel, et quel est le débit montant de votre ligne : nous revenons avec le chemin qui convient et ce qu'il faut fermer", title: "Comptable à domicile, commerciaux sur la route, direction en déplacement, ou fondateur en France qui ouvre le logiciel de sa société : nous fermons les ports, installons le tunnel, créons les comptes et mesurons la ligne", body: "Un inventaire d'une semaine, un tunnel chiffré, un compte par personne avec un second code, et, quand le logiciel le justifie, sa reconstruction en application web. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.intersites, kind: '2027', name: 'Interconnecter deux sites distants : tunnels chiffrés, débit, secours' },
      { href: L.fichiers, kind: '2027', name: 'Partage de fichiers en entreprise : serveur, NAS ou cloud, droits et versions' },
      { href: L.ransomware, kind: '2027', name: 'Ransomware en entreprise : la première heure, les cinq barrières' },
      { href: L.infogerance, kind: '2027', name: 'Infogérance et maintenance informatique : supervision, délais, rapport mensuel' },
    ] },
  },
  en: {
    kind: 'Remote access · Algeria · 2027', title: "Remote access to the office in Algeria (2027): working from home or abroad on the company software, for when remote desktop does not work or is left open to the whole internet",
    dek: "“My accountant wants to work from home two days a week, my salesperson is on the road, and I spend the summer in France. We tried remote desktop: one day it works, the next day it does not. An IT person ‘opened a port’ on our router, and we also use a free remote-control tool that keeps disconnecting. How do we reach the office software from outside, reliably, without getting hacked?” There are three routes: an open port, which has to be closed; an encrypted tunnel to the office, which suits almost every case; and the software itself on the web, which removes the problem. The rest is a matter of accounts, PCs that stay on, and upload rate.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Remote access to the office', 'Remote desktop', 'Remote work', 'Company virtual private network', 'IT security', 'Algeria 2027'],
    intro: [
      "**Short answer.** You do not open remote desktop to the internet: you first enter the office network through an **encrypted tunnel**, with **one account per person and a second code**, then open your session as if on site. Microsoft says so itself: forwarding a port opens the PC to the internet, which is not recommended, and a virtual private network is preferable. When remote desktop “does not work”, the cause is almost always one of six: PC switched off, address that changed, address shared by the operator, Windows Home edition, account, saturated line. And the lasting way out, when the software allows it, is to turn it into a web application.",
      "This guide is for the manager of a company with five to two hundred workstations where part of the team works away from the office, an accountant at home, salespeople, travelling management, and for the founder based in France who wants to open the software of their Algerian company. The facts quoted come from public sources: Microsoft's documentation on remote desktop, and the definitions of the protocol, of address translation at the operator and of wake-on-LAN. The people, rates and delays in the example are constructed. This guide gives no hardware prices and does not cover the rules that apply to network equipment and encryption: check those with your operator and your legal adviser.",
    ],
    sections: [
      { heading: "Three ways into the office: only one leaves the door open", body: [
        "The figure follows the same person along three routes: a port opened on the router, an encrypted tunnel, then the software turned into a web application.",
      ], visual: 'chemins', after: [
        "**The open port.** The remote desktop protocol listens by default on port 3389. To reach it from outside, that port is forwarded on the router: forwarding simply maps a port on the public address to a PC in the office. It works, and that is the problem: the PC then answers anyone. Microsoft's documentation says it plainly: you are opening your PC up to the internet, which is not recommended. In May 2019, a flaw named BlueKeep, in Microsoft's remote desktop implementation, allowed remote code execution; against an exposed and unpatched service, the attacker no longer even needs to guess a password. What can follow is described in [the guide to ransomware](" + L.ransomware + ").",
        "**The tunnel.** With a virtual private network, nothing is opened towards the PCs: the accountant's computer sets up an encrypted tunnel to the office router, with her account and a second code, and finds itself in the network as if she were there. She then opens her remote desktop session on her own PC, or on a server. It is the principle of the tunnel between two sites in [the guide to linking sites](" + L.intersites + "), applied to one person. **The web application.** If the management software exists as a web version, or can be rebuilt that way, there is no PC left to reach: everyone opens a browser. That is the route described in [the guide to migrating old software](" + L.migrer + "). **Remote-control tools.** They are fine for fixing things, but a free account shared by five people is not working access: no named accounts, no log, and a dependence on an outside service.",
      ] },
      { heading: "Remote desktop does not work: six causes, in the order they are checked", body: [
        "The figure gives, for each cause, the sign that reveals it and what is done.",
      ], visual: 'causes', after: [
        "**The PC is off or asleep.** It is the most ordinary cause: someone switched the PC off when leaving, or it went to sleep. Sleep is turned off on the PCs concerned, and wake-on-LAN is turned on, a standard that allows a computer to be switched on or woken from sleep by a network message. **The address changed.** The public address of an ordinary line changes; a hard-coded connection then looks for an address that is no longer yours. The tunnel relies on a name that is updated automatically, which is what dynamic DNS does. **The operator shares the address.** Some connections, mobile ones in particular, go through address translation at the operator, which usually prevents its customers from using port forwarding: nothing gets in, whatever the router's configuration. You ask for a public address, or use a tunnel set up from the office outwards.",
        "**The Windows edition.** The PC you connect to must run the Pro edition; the computer you connect from can run any edition. A PC on the Home edition will not accept an incoming connection. **The account.** A password changed at the office, an account not allowed to connect remotely, or a shared account that two people use at once: in practice, on an ordinary Windows PC, the remote connection takes the place of the session open on site. **The line.** A frozen picture and lagging typing come from the office line, dealt with below. If the software itself is slow, even on site, the cause lies elsewhere: see [the guide to the slow server](" + L.serveur + ").",
      ] },
      { heading: "Clean remote access, in six steps", body: [
        "The second step is accented: before installing anything, you close what is open.",
      ], visual: 'gestes', after: [
        "**List**: who needs what, and from where. The accountant needs the accounting software, not the whole network; the manager, their dashboards and their mail. **Close**: every port forwarding on the router is listed and removed, including the one “set up one day to fix something”. **Install the tunnel**: on the office router, with current encryption, and a client on each authorised computer.",
        "**Create the accounts**: one per person, with a second code, and access limited to the PCs or the server each one needs; what to do when an account is compromised is in [the guide to hacking](" + L.piratage + "). **Prepare the PCs**: Pro edition, sleep turned off, wake-on-LAN, updates. **Try it**: from outside, on 4G, with each person, before announcing that “it works”. For files alone, a shared space is often enough, with no remote session: see [the guide to file sharing](" + L.fichiers + ").",
      ] },
      { heading: "What the office line must send: upload rate and delay", body: [
        "The figure calculates the bandwidth the office sends for six remote people, then places three delays on a scale.",
      ], visual: 'ligne', after: [
        "**Bandwidth.** Remote desktop sends the picture of the screen; so it is the office's upload rate that counts. Microsoft publishes figures for a 1920 × 1080 screen: 100 to 150 kbit/s for a word processor, 150 to 200 for a spreadsheet, but 6 to 6.5 Mbit/s for web browsing inside the session and 8.5 to 9.5 for video. In the example, six people on the management software need 1.2 Mbit/s; if just one opens a news site inside the session, the total goes to 7.5; if they play a video, it exceeds the line's 10 Mbit/s, and the other five slow down. The rule is simple: in the session, you work; web and video are watched on your own computer.",
        "**Delay.** The round-trip delay between the remote computer and the office is not fixed by more bandwidth. For its virtual desktops, Microsoft indicates that a delay of up to 150 ms does not hinder work without video, that between 150 and 200 ms text work remains fine, and that beyond 200 ms the experience may suffer. It is measured from the place where you work, at the time you work. **One server for several.** When several people must use the same software at the same time, they connect to a session server rather than to individual PCs; each user or device that connects to it then needs a client access licence, to be planned with your reseller.",
      ] },
      { heading: "Serious remote access, in five layers", body: [
        "The accented layer is the route: it decides what a stranger can try.",
      ], visual: 'couches', after: [
        "**Who**: named accounts and a second code; when someone leaves, their account is closed the same day. **Through where**: a tunnel or a gateway, never a remote desktop port on the router. **To what**: your own PC, a session server, or the web application.",
        "**With what**: a company computer, up to date and encrypted, rather than the family computer; if the personal computer is the only option, the remote session at least keeps the data at the office. **Follow-up**: a connection log, alerts on repeated failures, an account review every quarter; this is the routine work described in [the guide to managed IT](" + L.infogerance + ").",
      ] },
      { heading: "Remote access in place in 2027, in weeks", body: [
        "Three weeks in the example, the first with nothing changed.",
      ], visual: 'calendrier', after: [
        "**Week 1, stock-take and measurement**: who connects and to what, which forwardings are open on the router, which Windows edition on each PC, what upload rate and what delay measured from outside. **Week 2, tunnel and accounts**: the tunnel is installed, the accounts are created, and two people use it for a week.",
        "**Week 3, switch-over and closing**: everyone goes through the tunnel, the ports are closed, the remote-control tools removed, the log in place. **And after.** If the software stays painful from a distance, because it is heavy or the line cannot keep up, the question is no longer access: it is the software, which has to be hosted differently or rebuilt as a web application.",
      ], list: [
        "**What the manager sees**: who has remote access, since when, each person's last connection, and no remote desktop port open on the router.",
        "**What the company no longer does**: share a remote-control password, leave a port open “for now”, call the office to have a PC switched back on, discover a forgotten access after someone leaves.",
        "**What is measured**: upload rate and round-trip delay from outside, successful and refused connections, accounts inactive for thirty days.",
        "**What Symloop does**: the stock-take and the measurement, the tunnel and the accounts, preparing the PCs or the session server, then, when the software justifies it, rebuilding it as a web and mobile application.",
      ], faq: [
        { q: "How do I reach my office computer from home?", a: "In two stages. First an encrypted tunnel to the office network, with your account and a second code; then remote desktop to your PC, which must be switched on and running the Pro edition of Windows. No port is forwarded on the router for this." },
        { q: "Why does remote desktop not work?", a: "Six causes keep coming back: the PC is off or asleep, the office's public address has changed, the operator shares the address and nothing can get in, the PC runs the Home edition, the account is not allowed or its password has changed, or the line is saturated. They are checked in that order." },
        { q: "Is it dangerous to open the remote desktop port on the router?", a: "Yes. The PC becomes reachable by anyone on the internet, and only the password, or the latest update, stands between a stranger and your network. Microsoft's documentation states that it is not recommended and that a virtual private network is preferable." },
        { q: "What is a company VPN, and do we need one?", a: "It is an encrypted tunnel between an outside computer and the office network, installed on the office router. It has nothing to do with the consumer services used to change country. You need one as soon as a person has to reach a PC, a server or a folder at the office from outside." },
        { q: "Can I work from France on the office software in Algeria?", a: "Yes, through the same tunnel. What decides the comfort is the round-trip delay between the two countries and the office's upload rate: measure them on an ordinary day. Management software gets through well; design software or a video inside the session gets through badly." },
        { q: "Do the office computers have to stay on?", a: "The PC you connect to must be on and must not go to sleep. Wake-on-LAN allows it to be switched back on remotely. When several people work remotely every day, a session server that is always on is simpler than individual PCs." },
        { q: "Can several people connect to the same PC?", a: "Not at the same time: in practice, an ordinary Windows PC holds only one session, and the remote connection takes the place of the one open on site. For several people on the same software, a session server is used, with a client access licence per user or per device." },
        { q: "How much bandwidth does remote desktop need?", a: "Little for management software: Microsoft's figures are 150 to 200 kbit/s for a spreadsheet. A lot as soon as someone browses the web or watches a video inside the session: 6 to 9.5 Mbit/s. It is the office's upload rate that counts, not the rate at home." },
        { q: "Are free remote-control tools enough?", a: "For helping a colleague, yes. For working every day, no: no named accounts, no connection log, an account that is often shared, and an outside service on which all access depends. Working access is installed on your premises, in your name." },
        { q: "Can I connect from my personal computer?", a: "You can, but it is the weak point: a shared family computer that is not up to date opens the office session. At the very least, a separate account on that computer, updates, and no local copy of the files. The ideal remains a company computer." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The question is not how to open remote desktop, but through where you enter the office network." },
      { after: 3, text: "In the session, you work; web and video are watched on your own computer." },
    ],
    cta: { eyebrow: "Tell us how many people work away from the office, on which software, and what your line's upload rate is: we come back with the route that fits and what has to be closed", title: "An accountant at home, salespeople on the road, travelling management, or a founder in France opening their company's software: we close the ports, install the tunnel, create the accounts and measure the line", body: "A one-week stock-take, an encrypted tunnel, one account per person with a second code, and, when the software justifies it, its rebuild as a web application. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.intersites, kind: '2027', name: 'Linking two remote sites: encrypted tunnels, throughput, backup link' },
      { href: L.fichiers, kind: '2027', name: 'File sharing in a company: server, NAS or cloud, rights and versions' },
      { href: L.ransomware, kind: '2027', name: 'Ransomware in a company: the first hour, the five barriers' },
      { href: L.infogerance, kind: '2027', name: 'Managed IT and maintenance: monitoring, response times, monthly report' },
    ] },
  },
  ar: {
    kind: 'الوصول عن بعد · الجزائر · 2027', title: "الوصول إلى المكتب عن بعد في الجزائر (2027): العمل من البيت أو من الخارج على برنامج المؤسسة، حين لا يعمل سطح المكتب البعيد أو يبقى مفتوحاً لكل الإنترنت",
    dek: "«محاسِبتي تريد العمل من بيتها يومين في الأسبوع، وبائعي على الطريق، وأنا أقضي الصيف في فرنسا. جرّبنا سطح المكتب البعيد: يوماً يعمل ويوماً لا. تقني في الإعلام الآلي “فتح لنا منفذاً” على الموجِّه، ونستعمل كذلك أداة تحكم عن بعد مجانية تنقطع باستمرار. كيف نصل إلى برنامج المكتب من الخارج، بشكل موثوق، ودون أن نُخترَق؟» توجد ثلاث طرق: منفذ مفتوح، يجب إغلاقه؛ نفق مشفَّر حتى المكتب، يناسب أغلب الحالات؛ والبرنامج نفسه على الويب، وهو ما يلغي المشكلة. والباقي مسألة حسابات، وحواسيب تبقى مشغَّلة، وتدفق رفع.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الوصول إلى المكتب عن بعد', 'سطح المكتب البعيد', 'العمل عن بعد', 'الشبكة الافتراضية الخاصة للمؤسسة', 'أمن الإعلام الآلي', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** لا يُفتح سطح المكتب البعيد على الإنترنت: ندخل أولاً إلى شبكة المكتب عبر **نفق مشفَّر**، **بحساب لكل شخص ورمز ثانٍ**، ثم نفتح الجلسة كما لو كنا في المكان. ومايكروسوفت تكتب ذلك بنفسها: إعادة توجيه منفذ تفتح الحاسوب على الإنترنت، وهو أمر غير موصى به، والشبكة الافتراضية الخاصة أفضل. وحين «لا يعمل» سطح المكتب البعيد، فالسبب في الغالب واحد من ستة: حاسوب مطفأ، عنوان تغيّر، عنوان يتقاسمه المتعامل، إصدار " + I('Home') + " من ويندوز، الحساب، أو خط مشبَع. والمخرج الدائم، حين يسمح البرنامج بذلك، هو تحويله إلى تطبيق ويب.",
      "هذا الدليل موجَّه إلى مسيّر مؤسسة فيها من خمسة إلى مئتي حاسوب يعمل جزء من فريقها خارج المكتب، محاسِبة في بيتها، باعة، وإدارة في تنقل، وإلى المؤسس المقيم في فرنسا الذي يريد أن يفتح برنامج شركته الجزائرية. الوقائع المذكورة آتية من مصادر علنية: وثائق مايكروسوفت حول سطح المكتب البعيد، وتعريفات البروتوكول، وترجمة العناوين عند المتعامل، والإيقاظ عبر الشبكة. الأشخاص والتدفقات والأزمنة في المثال مركَّبة. هذا الدليل لا يعطي أسعار عتاد ولا يتناول القواعد المطبَّقة على تجهيزات الشبكة والتشفير: تُراجَع مع متعاملكم ومستشاركم.",
    ],
    sections: [
      { heading: "ثلاث طرق إلى المكتب: واحدة فقط تترك الباب مفتوحاً", body: [
        "الشكل يتابع الشخص نفسه عبر ثلاث طرق: منفذ مفتوح على الموجِّه، نفق مشفَّر، ثم البرنامج وقد صار تطبيق ويب.",
      ], visual: 'chemins', after: [
        "**المنفذ المفتوح.** بروتوكول سطح المكتب البعيد يستمع افتراضياً على المنفذ " + I('3389') + ". وللوصول إليه من الخارج، يُعاد توجيه هذا المنفذ على الموجِّه: إعادة التوجيه تربط ببساطة منفذاً من العنوان العمومي بحاسوب في المكتب. وهذا يعمل، وتلك هي المشكلة: الحاسوب يجيب حينها أي أحد. ووثائق مايكروسوفت تقولها صراحة: أنتم تفتحون حاسوبكم على الإنترنت، وهو أمر غير موصى به. وفي ماي 2019، ثغرة سُمّيت " + I('BlueKeep') + "، في تنفيذ مايكروسوفت لسطح المكتب البعيد، كانت تسمح بتنفيذ برمجيات عن بعد؛ وأمام خدمة معروضة وغير محدَّثة، لم يعد المهاجم يحتاج حتى إلى تخمين كلمة مرور. وما قد يتبع ذلك موصوف في [دليل فيروس الفدية](" + L.ransomware + ").",
        "**النفق.** بالشبكة الافتراضية الخاصة، لا يُفتح شيء نحو الحواسيب: حاسوب المحاسِبة يُنشئ نفقاً مشفَّراً حتى موجِّه المكتب، بحسابها ورمز ثانٍ، ويصير داخل الشبكة كأنها هناك. ثم تفتح جلسة سطح المكتب البعيد على حاسوبها في المكتب، أو على خادم. وهو مبدأ النفق بين موقعين في [دليل ربط المواقع](" + L.intersites + ")، مطبَّقاً على شخص واحد. **تطبيق الويب.** إذا كان برنامج التسيير موجوداً في نسخة ويب، أو يمكن إعادة بنائه كذلك، لم يعد هناك حاسوب يُوصَل إليه: كل واحد يفتح متصفحاً. وهي الطريق الموصوفة في [دليل ترحيل برنامج قديم](" + L.migrer + "). **أدوات التحكم عن بعد.** تصلح للإصلاح، لكن حساباً مجانياً يتقاسمه خمسة أشخاص ليس وصول عمل: لا حسابات اسمية، ولا سجل، وتبعية لخدمة خارجية.",
      ] },
      { heading: "سطح المكتب البعيد لا يعمل: ستة أسباب، بالترتيب الذي نتحقق منها به", body: [
        "الشكل يعطي، لكل سبب، العلامة التي تكشفه وما نفعله.",
      ], visual: 'causes', after: [
        "**الحاسوب مطفأ أو في وضع السكون.** هو أبسط الأسباب: أحدهم أطفأ الحاسوب وهو يغادر، أو دخل في السكون. يُلغى السكون على الحواسيب المعنية، ويُفعَّل الإيقاظ عبر الشبكة، وهو معيار يسمح بتشغيل حاسوب أو إخراجه من السكون برسالة على الشبكة. **العنوان تغيّر.** العنوان العمومي لخط عادي يتغيّر؛ والاتصال المكتوب بعنوان ثابت يبحث حينها عن عنوان لم يعد لكم. والنفق يعتمد على اسم يُحدَّث آلياً، وهو ما يفعله نظام الأسماء الديناميكي. **المتعامل يتقاسم العنوان.** بعض الاتصالات، وخصوصاً عبر الهاتف النقال، تمرّ بترجمة عناوين عند المتعامل، تمنع في الغالب زبائنه من استعمال إعادة توجيه المنافذ: لا شيء يدخل، مهما كان إعداد الموجِّه. فيُطلب عنوان عمومي، أو يُستعمل نفق يُنشأ من المكتب نحو الخارج.",
        "**إصدار ويندوز.** الحاسوب الذي نتصل به يجب أن يكون بإصدار " + I('Pro') + "؛ والحاسوب الذي نتصل منه يمكن أن يكون بأي إصدار. والحاسوب بإصدار " + I('Home') + " لن يقبل اتصالاً وارداً. **الحساب.** كلمة مرور تغيّرت في المكتب، حساب غير مسموح له بالاتصال عن بعد، أو حساب متقاسَم يستعمله شخصان في الوقت نفسه: عملياً، على حاسوب ويندوز عادي، الاتصال عن بعد يأخذ مكان الجلسة المفتوحة في المكان. **الخط.** الصورة التي تتجمّد والكتابة التي تتأخر تأتيان من خط المكتب، ونتناوله أسفله. وإذا كان البرنامج نفسه بطيئاً، حتى في المكان، فالسبب في موضع آخر: انظر [دليل الخادم البطيء](" + L.serveur + ").",
      ] },
      { heading: "وصول عن بعد كما يجب، في ست خطوات", body: [
        "الخطوة الثانية مبرزة: قبل تنصيب أي شيء، نغلق ما هو مفتوح.",
      ], visual: 'gestes', after: [
        "**الجرد**: من يحتاج ماذا، ومن أين. المحاسِبة تحتاج برنامج المحاسبة، لا كل الشبكة؛ والمسيّر يحتاج لوحاته وبريده. **الإغلاق**: كل إعادات توجيه المنافذ على الموجِّه تُجرَد وتُحذف، بما فيها التي «وُضعت يوماً لإصلاح عطل». **تنصيب النفق**: على موجِّه المكتب، بتشفير حديث، مع برنامج زبون على كل حاسوب مسموح له.",
        "**إنشاء الحسابات**: حساب لكل شخص، مع رمز ثانٍ، ووصول محصور في الحواسيب أو الخادم الذي يحتاجه كل واحد؛ وما يجب فعله حين يُخترَق حساب موجود في [دليل الاختراق](" + L.piratage + "). **تحضير الحواسيب**: إصدار " + I('Pro') + "، إلغاء السكون، الإيقاظ عبر الشبكة، والتحديثات. **التجربة**: من الخارج، بالجيل الرابع، مع كل شخص، قبل الإعلان أن «الأمر يعمل». وللملفات وحدها، يكفي في الغالب فضاء مشترك، دون جلسة عن بعد: انظر [دليل مشاركة الملفات](" + L.fichiers + ").",
      ] },
      { heading: "ما يجب أن يرسله خط المكتب: تدفق الرفع والزمن", body: [
        "الشكل يحسب التدفق الذي يرسله المكتب لستة أشخاص عن بعد، ثم يضع ثلاثة أزمنة على سلّم.",
      ], visual: 'ligne', after: [
        "**التدفق.** سطح المكتب البعيد يرسل صورة الشاشة؛ فالمهم إذن هو تدفق الرفع في المكتب. ومايكروسوفت تنشر أرقاماً لشاشة " + I('1920 × 1080') + ": من 100 إلى 150 كيلوبت في الثانية لمعالج نصوص، ومن 150 إلى 200 لجدول، لكن من 6 إلى 6,5 ميغابت في الثانية لتصفّح الويب داخل الجلسة، ومن 8,5 إلى 9,5 للفيديو. في المثال، ستة أشخاص على برنامج التسيير يحتاجون 1,2 ميغابت في الثانية؛ وإذا فتح واحد منهم فقط موقع أخبار داخل جلسته، انتقل المجموع إلى 7,5؛ وإذا شغّل فيديو، تجاوز 10 ميغابت التي للخط، وتباطأ الخمسة الآخرون. والقاعدة بسيطة: داخل الجلسة نعمل؛ والويب والفيديو يُشاهَدان على الحاسوب الشخصي.",
        "**الزمن.** زمن الذهاب والإياب بين الحاسوب البعيد والمكتب لا يُصلَح بتدفق أكبر. وبخصوص مكاتبها الافتراضية، تذكر مايكروسوفت أن زمناً حتى 150 ميلي ثانية لا يزعج عملاً دون فيديو، وأن العمل على النصوص يبقى مقبولاً بين 150 و200، وأن التجربة قد تسوء بعد 200. ويُقاس من المكان الذي نعمل منه، في الساعة التي نعمل فيها. **خادم لعدة أشخاص.** حين يجب أن يستعمل عدة أشخاص البرنامج نفسه في الوقت نفسه، يُربطون بخادم جلسات بدل حواسيب فردية؛ وكل مستعمل أو جهاز يتصل به يحتاج حينها رخصة وصول، تُحسب مع مورِّدكم.",
      ] },
      { heading: "وصول عن بعد جادّ، في خمس طبقات", body: [
        "الطبقة المبرزة هي الطريق: هي التي تحدّد ما يمكن أن يجرّبه مجهول.",
      ], visual: 'couches', after: [
        "**من**: حسابات اسمية ورمز ثانٍ؛ وحين يغادر أحدهم يُغلق حسابه في اليوم نفسه. **من أين**: نفق أو بوابة، ولا منفذ لسطح المكتب البعيد على الموجِّه أبداً. **إلى ماذا**: الحاسوب الشخصي في المكتب، خادم جلسات، أو تطبيق الويب.",
        "**بماذا**: حاسوب للمؤسسة، محدَّث ومشفَّر، بدل حاسوب العائلة؛ وإذا كان الحاسوب الشخصي هو الخيار الوحيد، فالجلسة عن بعد تُبقي البيانات في المكتب على الأقل. **المتابعة**: سجل للاتصالات، تنبيهات على الإخفاقات المتكررة، ومراجعة للحسابات كل ثلاثة أشهر؛ وهو العمل اليومي الموصوف في [دليل تسيير الإعلام الآلي](" + L.infogerance + ").",
      ] },
      { heading: "وصول عن بعد جاهز سنة 2027، بالأسابيع", body: [
        "ثلاثة أسابيع في المثال، الأول دون تغيير شيء.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الجرد والقياس**: من يتصل وبماذا، أي إعادات توجيه مفتوحة على الموجِّه، أي إصدار ويندوز على كل حاسوب، وأي تدفق رفع وأي زمن مقاسان من الخارج. **الأسبوع 2، النفق والحسابات**: يُنصَّب النفق، وتُنشأ الحسابات، ويستعمله شخصان مدة أسبوع.",
        "**الأسبوع 3، الانتقال والإغلاق**: الجميع يمرّ عبر النفق، تُغلق المنافذ، تُسحب أدوات التحكم عن بعد، ويقوم السجل. **وبعد ذلك.** إذا بقي البرنامج مزعجاً عن بعد، لأنه ثقيل أو لأن الخط لا يساير، فالمسألة لم تعد الوصول: هي البرنامج، الذي يجب أن يُستضاف بشكل آخر أو يُعاد بناؤه كتطبيق ويب.",
      ], list: [
        "**ما يراه المسيّر**: من له وصول عن بعد، منذ متى، آخر اتصال لكل واحد، ولا منفذ لسطح المكتب البعيد مفتوح على الموجِّه.",
        "**ما لم تعد المؤسسة تفعله**: تقاسم كلمة مرور أداة التحكم، ترك منفذ مفتوح «مؤقتاً»، الاتصال بالمكتب لإعادة تشغيل حاسوب، واكتشاف وصول منسي بعد مغادرة.",
        "**ما يُقاس**: تدفق الرفع وزمن الذهاب والإياب من الخارج، الاتصالات الناجحة والمرفوضة، والحسابات غير النشطة منذ ثلاثين يوماً.",
        "**ما تفعله Symloop**: الجرد والقياس، النفق والحسابات، تحضير الحواسيب أو خادم الجلسات، ثم، حين يبرّر البرنامج ذلك، إعادة بنائه كتطبيق ويب وجوال.",
      ], faq: [
        { q: "كيف أصل إلى حاسوب المكتب من بيتي؟", a: "على مرحلتين. أولاً نفق مشفَّر نحو شبكة المكتب، بحسابكم ورمز ثانٍ؛ ثم سطح المكتب البعيد نحو حاسوبكم، الذي يجب أن يكون مشغَّلاً وبإصدار " + I('Pro') + " من ويندوز. ولا يُعاد توجيه أي منفذ على الموجِّه من أجل ذلك." },
        { q: "لماذا لا يعمل سطح المكتب البعيد؟", a: "ستة أسباب تتكرر: الحاسوب مطفأ أو في السكون، العنوان العمومي للمكتب تغيّر، المتعامل يتقاسم العنوان ولا شيء يدخل، الحاسوب بإصدار " + I('Home') + "، الحساب غير مسموح له أو تغيّرت كلمة مروره، أو الخط مشبَع. ونتحقق منها بهذا الترتيب." },
        { q: "هل من الخطر فتح منفذ سطح المكتب البعيد على الموجِّه؟", a: "نعم. يصير الحاسوب في متناول أي أحد على الإنترنت، ولا يبقى بين مجهول وشبكتكم إلا كلمة المرور، أو آخر تحديث. ووثائق مايكروسوفت تذكر أن ذلك غير موصى به وأن الشبكة الافتراضية الخاصة أفضل." },
        { q: "ما هي الشبكة الافتراضية الخاصة للمؤسسة، وهل نحتاجها؟", a: "هي نفق مشفَّر بين حاسوب خارجي وشبكة المكتب، يُنصَّب على موجِّه المكتب. ولا علاقة لها بالخدمات الموجَّهة للعموم التي تُستعمل لتغيير البلد. تلزم حالما يحتاج شخص إلى الوصول إلى حاسوب أو خادم أو مجلد في المكتب من الخارج." },
        { q: "هل يمكن العمل من فرنسا على برنامج المكتب في الجزائر؟", a: "نعم، عبر النفق نفسه. وما يحدّد الراحة هو زمن الذهاب والإياب بين البلدين وتدفق الرفع في المكتب: قيسوهما في يوم عادي. برنامج التسيير يمرّ جيداً؛ وبرنامج الرسم أو فيديو داخل الجلسة يمرّان بصعوبة." },
        { q: "هل يجب ترك حواسيب المكتب مشغَّلة؟", a: "الحاسوب الذي نتصل به يجب أن يكون مشغَّلاً وألا يدخل في السكون. والإيقاظ عبر الشبكة يسمح بإعادة تشغيله عن بعد. وحين يعمل عدة أشخاص عن بعد كل يوم، فخادم جلسات يعمل دائماً أبسط من حواسيب فردية." },
        { q: "هل يمكن لعدة أشخاص الاتصال بالحاسوب نفسه؟", a: "ليس في الوقت نفسه: عملياً، حاسوب ويندوز عادي لا يحمل إلا جلسة واحدة، والاتصال عن بعد يأخذ مكان الجلسة المفتوحة في المكان. ولعدة أشخاص على البرنامج نفسه، يُستعمل خادم جلسات، برخصة وصول لكل مستعمل أو لكل جهاز." },
        { q: "أي تدفق يلزم لسطح المكتب البعيد؟", a: "قليل لبرنامج تسيير: أرقام مايكروسوفت من 150 إلى 200 كيلوبت في الثانية لجدول. وكثير حالما نتصفّح الويب أو نشاهد فيديو داخل الجلسة: من 6 إلى 9,5 ميغابت في الثانية. والمهم هو تدفق الرفع في المكتب، لا تدفق البيت." },
        { q: "هل تكفي أدوات التحكم عن بعد المجانية؟", a: "لمساعدة زميل، نعم. وللعمل كل يوم، لا: لا حسابات اسمية، ولا سجل اتصالات، وحساب متقاسَم في الغالب، وخدمة خارجية يتوقف عليها كل الوصول. وصول العمل يُنصَّب عندكم، وباسمكم." },
        { q: "هل يمكن الاتصال من الحاسوب الشخصي؟", a: "يمكن، لكنه نقطة الضعف: حاسوب عائلي متقاسَم وغير محدَّث يفتح جلسة المكتب. وكحدّ أدنى: حساب منفصل على هذا الحاسوب، تحديثات، ولا نسخة محلية من الملفات. والأفضل يبقى حاسوباً للمؤسسة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "السؤال ليس كيف نفتح سطح المكتب البعيد، بل من أين ندخل إلى شبكة المكتب." },
      { after: 3, text: "داخل الجلسة نعمل؛ والويب والفيديو يُشاهَدان على الحاسوب الشخصي." },
    ],
    cta: { eyebrow: "قولوا لنا كم شخصاً يعمل خارج المكتب، وعلى أي برنامج، وما هو تدفق الرفع في خطكم: نعود إليكم بالطريق المناسب وبما يجب إغلاقه", title: "محاسِبة في بيتها، باعة على الطريق، إدارة في تنقل، أو مؤسس في فرنسا يفتح برنامج شركته: نغلق المنافذ، ننصّب النفق، ننشئ الحسابات ونقيس الخط", body: "جرد من أسبوع، نفق مشفَّر، حساب لكل شخص مع رمز ثانٍ، وحين يبرّر البرنامج ذلك، إعادة بنائه كتطبيق ويب. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.intersites, kind: '2027', name: 'ربط موقعين متباعدين: أنفاق مشفَّرة، التدفق، الخط الاحتياطي' },
      { href: L.fichiers, kind: '2027', name: 'مشاركة الملفات في المؤسسة: خادم، تخزين شبكي أم سحابة، صلاحيات وإصدارات' },
      { href: L.ransomware, kind: '2027', name: 'فيروس الفدية في المؤسسة: الساعة الأولى، والحواجز الخمسة' },
      { href: L.infogerance, kind: '2027', name: 'صيانة الإعلام الآلي وتسييره: المتابعة، الآجال، التقرير الشهري' },
    ] },
  },
};

const KEYWORDS = "accès à distance au bureau 2027, bureau à distance ne fonctionne pas, comment accéder au bureau à distance, comment travailler à distance, comment accéder à un pc à distance, vpn entreprise algérie, télétravail entreprise algérie accès au logiciel, bureau à distance port 3389 sécurité, accès au serveur à distance, remote access to office algeria 2027, remote desktop not working company, الوصول إلى حاسوب المكتب عن بعد 2027, سطح المكتب البعيد لا يعمل, العمل عن بعد للمؤسسات في الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
