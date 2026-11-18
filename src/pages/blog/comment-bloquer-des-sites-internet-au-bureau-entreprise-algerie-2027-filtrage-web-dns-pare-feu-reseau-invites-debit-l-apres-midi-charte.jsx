import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-bloquer-des-sites-internet-au-bureau-entreprise-algerie-2027-filtrage-web-dns-pare-feu-reseau-invites-debit-l-apres-midi-charte.mjs';

const SLUG = 'comment-bloquer-des-sites-internet-au-bureau-entreprise-algerie-2027-filtrage-web-dns-pare-feu-reseau-invites-debit-l-apres-midi-charte';
const FIGURES = ['debit', 'regles', 'etapes', 'couches', 'moyens', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  reseau: '/blog/installation-reseau-informatique-entreprise-algerie-2027-cablage-baie-de-brassage-switch-wifi-pare-feu-lien-de-secours/',
  audit: '/blog/cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections/',
  piratage: '/blog/piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert/',
  parc: '/blog/comment-gerer-un-parc-informatique-entreprise-algerie-2027-inventaire-des-postes-qui-a-quoi-licences-mises-a-jour-arrivee-depart-renouvellement/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
  serveur: '/blog/serveur-lent-entreprise-algerie-2027-logiciel-qui-rame-le-matin-memoire-disques-sauvegarde-en-pleine-journee-mesurer-avant-de-remplacer/',
};

const CONTENT = {
  fr: {
    kind: 'Filtrage web · bureau · Algérie · 2027', title: "Comment bloquer des sites internet au bureau en Algérie (2027) : internet rame tous les après-midi, filtrage web, sites dangereux bloqués pour tous, Wi-Fi invités séparé, vidéo limitée plutôt qu'interdite",
    dek: "« Tous les après-midi, internet rame : le logiciel de gestion tourne dans le vide et la visioconférence coupe. Je sais que la moitié du bureau regarde des vidéos, et la semaine dernière un poste a attrapé un virus sur un site de téléchargement. Comment bloquer ces sites, sans transformer le bureau en caserne et sans passer mes journées à surveiller ? » Ne commencez pas par une liste de sites interdits. Mesurez une semaine où part le débit ; puis protégez, séparez, limitez, et écrivez la règle sur une page.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Filtrage web en entreprise', 'Bloquer des sites internet', 'Internet lent au bureau', 'Wi-Fi invités', 'Pare-feu et DNS', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Cinq gestes, dans cet ordre. **Mesurer** une semaine où part le débit, par catégorie et par heure, sans regarder qui. **Écrire** la règle sur une page et la remettre à chacun. **Protéger** : les sites qui volent des mots de passe ou installent un logiciel malveillant sont bloqués pour tous, sans exception. **Séparer** : le Wi-Fi des invités et des téléphones personnels n'entre pas dans le réseau du bureau. **Limiter** plutôt qu'interdire : le travail passe en premier, la vidéo est ralentie, les téléchargements partent la nuit. Le blocage se fait au DNS et au pare-feu, pas poste par poste. Dans notre exemple, le travail passe de 4 à 8 Mbit/s sur une ligne de 20.",
      "Ce guide s'adresse au gérant d'un bureau, d'un magasin ou d'une agence dont la connexion ne suffit plus l'après-midi, et au fondateur installé en France qui gère un bureau à distance. Les définitions citées viennent de sources publiques : le blocage DNS, le DNS chiffré, l'indication du nom de serveur, le résolveur Quad9, le lissage de trafic, la charte d'utilisation. La ligne, sa répartition et la règle de l'exemple sont construites. Ce guide ne traite pas des règles de droit sur la surveillance des salariés : faites relire votre charte par votre conseil.",
    ],
    sections: [
      { heading: "Où part le débit à 15 heures : mesurer avant de bloquer", body: [
        "La figure montre la même ligne de 20 Mbit/s, avant et après.",
      ], visual: 'debit', after: [
        "**Mesurer avant de bloquer.** Le boîtier qui relie le bureau à internet sait déjà à quoi sert la ligne : beaucoup de boîtiers professionnels donnent un relevé par catégorie et par heure. Regardez-le une semaine, sans chercher qui : la question n'est pas « qui regarde des vidéos », mais « qu'est-ce qui occupe la ligne à 15 heures ». Dans l'exemple, sur 20 Mbit/s, la vidéo en prend 9, les téléchargements 4, les réseaux sociaux 3 ; le travail n'en obtient que 4 quand il en demande 8.",
        "**Deux leviers.** La priorité : le logiciel de gestion, la messagerie et la visioconférence passent d'abord. Le lissage de trafic : c'est une technique de gestion du débit qui retarde une partie des paquets ; la vidéo passe toujours, en moins bonne qualité, et ne mange plus la ligne. Les téléchargements et les mises à jour, eux, se planifient la nuit. **Si le problème est ailleurs.** Quand la mesure montre une ligne peu occupée et un logiciel quand même lent, la cause est sur le serveur ou dans le réseau interne : voir [le guide sur le serveur lent](" + L.serveur + ").",
      ] },
      { heading: "Qui a droit à quoi : trois groupes, cinq catégories de sites", body: [
        "La figure donne la règle d'un bureau, une case par groupe d'appareils et par catégorie de sites.",
      ], visual: 'regles', after: [
        "**Une règle sans exception.** Les sites dangereux, ceux qui imitent une banque pour voler un mot de passe ou qui installent un logiciel malveillant, sont bloqués pour tout le monde, dirigeant compris. Des résolveurs publics le font à la source : Quad9, par exemple, est un résolveur DNS public mondial qui bloque l'accès aux domaines associés aux logiciels malveillants et à l'hameçonnage. C'est la première ligne de défense contre ce que décrit [le guide sur le piratage](" + L.piratage + ").",
        "**Trois groupes.** Les postes du bureau gardent la vidéo au débit limité et les réseaux sociaux à l'heure du déjeuner. La caisse et le serveur n'ont besoin que du travail : tout le reste leur est fermé. Le Wi-Fi des invités et des téléphones personnels donne internet, et rien du réseau interne : un téléphone infecté ne voit ni le serveur ni la caisse. Cette séparation se prévoit au câblage et au Wi-Fi, comme dans [le guide sur l'installation du réseau](" + L.reseau + "). **Ce que voit le filtre.** Pas le contenu des pages : le nom du site demandé, et le groupe d'où vient la demande.",
      ] },
      { heading: "Mettre un filtre en place, dans cet ordre", body: [
        "Le premier temps est accentué : mesurer.",
      ], visual: 'etapes', after: [
        "**Mesurer, écrire.** La charte se remet avant le premier blocage. Une charte d'utilisation est un ensemble formel de règles fixé par celui qui administre un réseau ; ici, une page suffit : ce qui est bloqué pour tous, ce qui est limité, ce qui est mesuré et ce qui ne l'est pas, à qui demander une exception. Une règle annoncée est acceptée ; une règle découverte par un message d'erreur est contournée. Faites-la relire par votre conseil : ce guide ne traite pas du droit.",
        "**Protéger, séparer, limiter.** Les deux premiers ne se discutent pas. Le troisième se règle : on commence large, on regarde le relevé, on ajuste. **Revoir.** Chaque trimestre, avec la liste des exceptions demandées : si la moitié du bureau a demandé le même site pour travailler, c'est la règle qui est fausse.",
      ] },
      { heading: "Un filtrage qui tient, en cinq couches", body: [
        "La couche accentuée est la protection.",
      ], visual: 'couches', after: [
        "**La mesure** vient en premier et reste : le relevé de la semaine suivante dit si la règle a servi. **La protection** est la seule couche qui vaille pour tous. **La séparation** fait plus pour la sécurité que n'importe quelle liste : un visiteur, un téléphone personnel, un téléviseur de salle d'attente n'ont rien à faire sur le réseau où se trouvent le serveur et la caisse.",
        "**Les limites** servent le confort de tous : personne ne regrette une vidéo ralentie le jour où sa visioconférence ne coupe plus. **La charte** tient l'ensemble. Ces cinq couches font partie de ce qu'un auditeur vérifie, voir [le guide sur l'audit de sécurité](" + L.audit + "), et s'entretiennent comme le reste : voir [le guide sur l'infogérance](" + L.infogerance + ").",
      ] },
      { heading: "Cinq façons de bloquer, et comment on les contourne", body: [
        "La figure rapproche cinq moyens de ce qu'ils bloquent et de ce qui les contourne.",
      ], visual: 'moyens', after: [
        "**Sur le poste.** Le fichier hosts est un fichier du système qui fait correspondre des noms de machines à des adresses : on peut y détourner un site, poste par poste. C'est fragile et vite défait ; cela suppose aussi que l'utilisateur ne soit pas administrateur de sa machine, ce qui se règle dans [la gestion du parc](" + L.parc + "). **Au DNS.** Le blocage DNS consiste à rendre difficile la localisation de certains domaines : un seul réglage, tout le réseau. Deux contournements : changer de DNS sur le poste, ou utiliser le DNS chiffré du navigateur. Le DNS sur HTTPS a déjà servi à contourner des contrôles parentaux placés au niveau du DNS, et l'agence américaine NSA a déconseillé aux entreprises les résolveurs chiffrés externes, parce qu'ils empêchent le filtrage et l'audit des requêtes.",
        "**Au pare-feu.** Même quand la page est chiffrée, le nom du site demandé circule en clair au début de la connexion : c'est l'indication du nom de serveur, visible sur le réseau et utilisée par les logiciels de sécurité pour filtrer. Le pare-feu peut donc appliquer une règle par catégorie, par groupe et par horaire, et bloquer les DNS chiffrés externes et les VPN non autorisés. **Le débit et le réseau invités** sont les deux moyens que personne ne cherche à contourner : l'un ne bloque rien, l'autre donne internet. **Aucun n'est infranchissable.** Un téléphone en 4G passe à côté de tout : le filtre protège la ligne et le réseau de l'entreprise, pas le temps de chacun.",
      ] },
      { heading: "Quatre semaines, de la mesure à la règle, en 2027", body: [
        "Quatre semaines dans l'exemple, dont la première sans rien bloquer.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, la mesure.** Rien n'est bloqué ; on relève. **Semaine 2, la charte et les groupes.** **Semaines 2 et 3, la protection et la séparation** : sites dangereux, réseau de la caisse, Wi-Fi invités.",
        "**Semaines 3 et 4, les limites et les priorités**, puis un second relevé à comparer au premier. Si le bureau a déjà un pare-feu qui sait filtrer par catégorie, tout se fait par réglage ; sinon, c'est le moment de le prévoir. Ce guide ne donne aucun prix de matériel.",
      ], list: [
        "**Ce que le gérant reçoit** : le relevé d'une semaine par catégorie et par heure, avant et après ; la charte d'une page ; la règle par groupe ; la liste des exceptions accordées.",
        "**Ce que l'entreprise ne fait plus** : bloquer un site un lundi parce qu'on s'est fâché, laisser le téléphone d'un visiteur sur le réseau de la caisse, lancer les mises à jour à 15 heures, surveiller les écrans.",
        "**Ce qui est mesuré** : débit par catégorie et par heure, débit obtenu par le travail aux heures de pointe, sites dangereux bloqués par semaine, exceptions demandées.",
        "**Ce que fait Symloop** : la mesure, la séparation des réseaux, le filtrage au DNS et au pare-feu, les priorités et les limites de débit, la charte à faire relire, puis le relevé de chaque mois.",
      ], faq: [
        { q: "Comment bloquer des sites internet au bureau ?", a: "Au niveau du réseau, pas poste par poste : un DNS filtrant pour tout le monde et un pare-feu qui applique une règle par groupe et par horaire. Avant cela, mesurez une semaine ce qui occupe la ligne, et écrivez la règle sur une page remise à chacun." },
        { q: "Comment bloquer YouTube ou Facebook sur tous les postes d'un coup ?", a: "Par une règle au pare-feu ou au DNS, qui vaut pour tout le réseau. Mais posez-vous d'abord la question du but : si c'est la lenteur, limiter le débit de la vidéo ou l'autoriser à l'heure du déjeuner règle le problème sans interdire, et se contourne moins." },
        { q: "Pourquoi internet est-il lent l'après-midi au bureau ?", a: "Parce que la ligne est partagée sans priorité : vidéo en continu, téléchargements et mises à jour prennent la place du logiciel de gestion et de la visioconférence. Le relevé du boîtier par catégorie et par heure le montre. Si la ligne est peu occupée, cherchez du côté du serveur." },
        { q: "Peut-on bloquer un site sur un seul ordinateur ?", a: "Oui, par un fichier du système ou une extension du navigateur. C'est fragile : un autre navigateur ou un droit d'administrateur suffit à le défaire. Pour une règle qui tient, on bloque au niveau du réseau, en plaçant le poste dans un groupe." },
        { q: "Les employés peuvent-ils contourner le blocage ?", a: "Oui : en changeant de DNS sur leur poste, avec le DNS chiffré du navigateur, par un VPN, ou tout simplement avec leur téléphone en 4G. Le pare-feu ferme les trois premiers. Le quatrième ne se ferme pas : le filtre protège la ligne et le réseau, pas le temps de chacun." },
        { q: "Le filtre voit-il ce que font les employés ?", a: "Il voit le nom des sites demandés et le groupe d'où vient la demande, pas le contenu des pages. Ce que l'on choisit de mesurer et de conserver s'écrit dans la charte. Pour ce que le droit permet ou impose, voyez votre conseil : ce guide n'en traite pas." },
        { q: "Faut-il un Wi-Fi séparé pour les invités ?", a: "Oui. Les visiteurs et les téléphones personnels reçoivent internet, et rien du réseau interne. C'est la mesure qui protège le plus : un appareil infecté ne voit ni le serveur ni la caisse. Elle se prévoit dès l'installation du réseau." },
        { q: "Vaut-il mieux interdire ou limiter ?", a: "Interdire ce qui est dangereux, pour tous. Limiter le reste : un débit réduit pour la vidéo, une plage de midi pour les réseaux sociaux, la nuit pour les téléchargements. Une règle qui laisse vivre est acceptée, et le relevé montre qu'elle suffit." },
        { q: "Quel matériel faut-il pour filtrer ?", a: "Un pare-feu capable de filtrer par catégorie, par groupe et par horaire, et de séparer plusieurs réseaux ; un DNS filtrant ; des bornes Wi-Fi qui diffusent un réseau invités. Beaucoup de bureaux ont déjà une partie de cela. Ce guide ne donne aucun prix." },
        { q: "Combien de temps pour mettre en place un filtrage ?", a: "Quatre semaines dans notre exemple : une de mesure sans rien bloquer, une pour la charte et les groupes, deux pour la protection, la séparation et les limites, puis un second relevé à comparer au premier." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "La question n'est pas « qui regarde des vidéos », mais « qu'est-ce qui occupe la ligne à 15 heures »." },
      { after: 4, text: "Le filtre protège la ligne et le réseau de l'entreprise, pas le temps de chacun." },
    ],
    cta: { eyebrow: "Dites-nous combien de postes, quelle ligne, et à quelle heure ça rame : nous relevons une semaine, et vous saurez ce qui occupe votre débit avant de bloquer quoi que ce soit", title: "Internet lent tous les après-midi, un poste infecté par un site de téléchargement, des visiteurs sur le réseau de la caisse, ou fondateur en France qui gère un bureau à distance : nous mesurons, séparons, filtrons, et la règle tient sur une page", body: "Mesure, réseaux séparés, filtrage au DNS et au pare-feu, priorités et limites de débit, charte, relevé mensuel. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.reseau, kind: '2027', name: 'Installation d’un réseau d’entreprise : câblage, Wi-Fi, pare-feu, lien de secours' },
      { href: L.audit, kind: '2027', name: 'Cybersécurité d’entreprise : audit de sécurité ou test d’intrusion' },
      { href: L.piratage, kind: '2027', name: 'Piratage en entreprise : boîte mail piratée, faux RIB, double vérification' },
      { href: L.parc, kind: '2027', name: 'Gérer un parc informatique : registre, mises à jour, licences' },
    ] },
  },
  en: {
    kind: 'Web filtering · office · Algeria · 2027', title: "How to block websites at the office in Algeria (2027): the internet crawls every afternoon, web filtering, dangerous sites blocked for all, guest Wi-Fi kept apart, video limited rather than forbidden",
    dek: "“Every afternoon the internet crawls: the management software spins and the video call drops. I know half the office is watching videos, and last week a computer caught a virus on a download site. How do I block those sites, without turning the office into a barracks and without spending my days watching people?” Do not start with a list of forbidden sites. Measure for a week where the bandwidth goes; then protect, separate, limit, and write the rule on one page.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Web filtering in a company', 'Blocking websites', 'Slow internet at the office', 'Guest Wi-Fi', 'Firewall and DNS', 'Algeria 2027'],
    intro: [
      "**Short answer.** Five actions, in this order. **Measure** for a week where the bandwidth goes, by category and by hour, without looking at who. **Write** the rule on one page and hand it to everyone. **Protect**: the sites that steal passwords or install malware are blocked for all, without exception. **Separate**: the Wi-Fi for guests and personal phones does not enter the office network. **Limit** rather than forbid: work comes first, video is slowed, downloads run at night. Blocking is done at the DNS and at the firewall, not machine by machine. In our example, work goes from 4 to 8 Mbit/s on a 20 Mbit/s line.",
      "This guide is for the manager of an office, a shop or a branch whose connection is no longer enough in the afternoon, and for the founder based in France who runs an office from a distance. The definitions quoted come from public sources: DNS blocking, encrypted DNS, Server Name Indication, the Quad9 resolver, traffic shaping, the acceptable use policy. The line, its breakdown and the rule in the example are constructed. This guide does not cover the legal rules on monitoring employees: have your policy checked by your legal adviser.",
    ],
    sections: [
      { heading: "Where the bandwidth goes at 3 pm: measure before blocking", body: [
        "The figure shows the same 20 Mbit/s line, before and after.",
      ], visual: 'debit', after: [
        "**Measure before blocking.** The box that connects the office to the internet already knows what the line is used for: many business-grade boxes give a reading by category and by hour. Look at it for a week, without asking who: the question is not “who is watching videos”, but “what is using the line at 3 pm”. In the example, out of 20 Mbit/s, video takes 9, downloads 4, social networks 3; work only gets 4 when it needs 8.",
        "**Two levers.** Priority: the management software, email and video calls go first. Traffic shaping: a bandwidth management technique which delays some of the packets; video still goes through, at lower quality, and no longer eats the line. Downloads and updates are scheduled at night. **If the problem is elsewhere.** When the measurement shows a line that is barely used and software that is slow all the same, the cause is on the server or in the internal network: see [the guide to the slow server](" + L.serveur + ").",
      ] },
      { heading: "Who is allowed what: three groups, five categories of sites", body: [
        "The figure gives the rule of an office, one cell per group of devices and per category of sites.",
      ], visual: 'regles', after: [
        "**One rule with no exception.** Dangerous sites, those that imitate a bank to steal a password or that install malware, are blocked for everyone, the manager included. Public resolvers do it at the source: Quad9, for example, is a global public recursive DNS resolver that blocks access to domains associated with malware and phishing. It is the first line of defence against what [the guide to hacking](" + L.piratage + ") describes.",
        "**Three groups.** Office computers keep video at limited speed and social networks at lunchtime. The till and the server only need work: everything else is closed to them. The Wi-Fi for guests and personal phones gives the internet, and nothing of the internal network: an infected phone sees neither the server nor the till. This separation is planned in the cabling and the Wi-Fi, as in [the guide to installing a network](" + L.reseau + "). **What the filter sees.** Not the content of the pages: the name of the site asked for, and the group the request comes from.",
      ] },
      { heading: "Putting a filter in place, in this order", body: [
        "The first step is accented: measure.",
      ], visual: 'etapes', after: [
        "**Measure, write.** The policy is handed out before the first block. An acceptable use policy is a formal set of guidelines established by whoever administers a network; here, one page is enough: what is blocked for all, what is limited, what is measured and what is not, who to ask for an exception. A rule that is announced is accepted; a rule discovered through an error message is bypassed. Have it checked by your legal adviser: this guide does not cover the law.",
        "**Protect, separate, limit.** The first two are not up for discussion. The third is tuned: you start wide, look at the reading, adjust. **Review.** Every quarter, with the list of exceptions requested: if half the office asked for the same site in order to work, it is the rule that is wrong.",
      ] },
      { heading: "Filtering that holds, in five layers", body: [
        "The accented layer is protection.",
      ], visual: 'couches', after: [
        "**Measurement** comes first and stays: the following week's reading says whether the rule helped. **Protection** is the only layer that applies to everyone. **Separation** does more for security than any list: a visitor, a personal phone, a waiting-room television have no business on the network where the server and the till sit.",
        "**Limits** serve everyone's comfort: nobody misses a slowed video on the day their video call stops dropping. **The policy** holds it together. These five layers are part of what an auditor checks, see [the guide to the security audit](" + L.audit + "), and are kept up like the rest: see [the guide to managed IT](" + L.infogerance + ").",
      ] },
      { heading: "Five ways to block, and how they are bypassed", body: [
        "The figure sets five means against what they block and what bypasses them.",
      ], visual: 'moyens', after: [
        "**On the machine.** The hosts file is an operating system file that maps hostnames to IP addresses: a site can be diverted there, machine by machine. It is fragile and quickly undone; it also assumes that the user is not an administrator of their machine, which is settled in [fleet management](" + L.parc + "). **At the DNS.** DNS blocking is a strategy for making it difficult to locate certain domains: one setting, the whole network. Two ways round it: changing the DNS on the machine, or using the browser's encrypted DNS. DNS over HTTPS has been used to bypass parental controls which operate at the DNS level, and the American agency NSA warned enterprises against external encrypted resolvers because they prevent DNS query filtering, inspection, and audit.",
        "**At the firewall.** Even when the page is encrypted, the name of the site asked for travels in the clear at the start of the connection: this is the Server Name Indication, visible on the network and used by security software for filtering. So the firewall can apply a rule by category, by group and by time slot, and block external encrypted DNS and unauthorised VPNs. **Speed and the guest network** are the two means nobody tries to bypass: one blocks nothing, the other gives the internet. **None is impassable.** A phone on 4G goes round everything: the filter protects the company's line and network, not each person's time.",
      ] },
      { heading: "Four weeks, from measuring to the rule, in 2027", body: [
        "Four weeks in the example, the first without blocking anything.",
      ], visual: 'calendrier', after: [
        "**Week 1, measurement.** Nothing is blocked; you take the reading. **Week 2, the policy and the groups.** **Weeks 2 and 3, protection and separation**: dangerous sites, the till network, guest Wi-Fi.",
        "**Weeks 3 and 4, limits and priorities**, then a second reading to compare with the first. If the office already has a firewall able to filter by category, everything is done by settings; if not, this is the moment to plan for one. This guide gives no hardware prices.",
      ], list: [
        "**What the manager receives**: one week's reading by category and by hour, before and after; the one-page policy; the rule per group; the list of exceptions granted.",
        "**What the company no longer does**: block a site on a Monday out of annoyance, leave a visitor's phone on the till network, launch updates at 3 pm, watch people's screens.",
        "**What is measured**: bandwidth by category and by hour, bandwidth obtained by work at peak hours, dangerous sites blocked per week, exceptions requested.",
        "**What Symloop does**: the measurement, the separation of networks, filtering at the DNS and the firewall, priorities and speed limits, the policy to be checked, then the reading every month.",
      ], faq: [
        { q: "How do you block websites at the office?", a: "At network level, not machine by machine: a filtering DNS for everyone and a firewall that applies a rule per group and per time slot. Before that, measure for a week what is using the line, and write the rule on one page handed to everyone." },
        { q: "How do you block YouTube or Facebook on every computer at once?", a: "With a rule at the firewall or the DNS, which applies to the whole network. But first ask what the aim is: if it is slowness, limiting the speed of video or allowing it at lunchtime solves the problem without forbidding, and is bypassed less." },
        { q: "Why is the internet slow in the afternoon at the office?", a: "Because the line is shared without priority: streaming video, downloads and updates take the place of the management software and the video call. The box's reading by category and by hour shows it. If the line is barely used, look at the server." },
        { q: "Can you block a site on a single computer?", a: "Yes, through a system file or a browser extension. It is fragile: another browser or an administrator right is enough to undo it. For a rule that holds, you block at network level, by placing the machine in a group." },
        { q: "Can employees get round the block?", a: "Yes: by changing the DNS on their machine, with the browser's encrypted DNS, through a VPN, or simply with their phone on 4G. The firewall closes the first three. The fourth cannot be closed: the filter protects the line and the network, not each person's time." },
        { q: "Does the filter see what employees are doing?", a: "It sees the names of the sites asked for and the group the request comes from, not the content of the pages. What you choose to measure and to keep is written in the policy. For what the law allows or requires, see your legal adviser: this guide does not cover it." },
        { q: "Do guests need a separate Wi-Fi?", a: "Yes. Visitors and personal phones get the internet, and nothing of the internal network. It is the measure that protects the most: an infected device sees neither the server nor the till. It is planned when the network is installed." },
        { q: "Is it better to forbid or to limit?", a: "Forbid what is dangerous, for everyone. Limit the rest: reduced speed for video, a lunchtime window for social networks, the night for downloads. A rule people can live with is accepted, and the reading shows that it is enough." },
        { q: "What equipment is needed for filtering?", a: "A firewall able to filter by category, by group and by time slot, and to separate several networks; a filtering DNS; Wi-Fi access points that broadcast a guest network. Many offices already have part of this. This guide gives no prices." },
        { q: "How long does it take to set up filtering?", a: "Four weeks in our example: one of measuring without blocking anything, one for the policy and the groups, two for protection, separation and limits, then a second reading to compare with the first." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The question is not “who is watching videos”, but “what is using the line at 3 pm”." },
      { after: 4, text: "The filter protects the company's line and network, not each person's time." },
    ],
    cta: { eyebrow: "Tell us how many machines, which line, and at what time it crawls: we take a week's reading, and you will know what is using your bandwidth before blocking anything", title: "Slow internet every afternoon, a computer infected by a download site, visitors on the till network, or a founder in France running an office from a distance: we measure, separate, filter, and the rule fits on one page", body: "Measurement, separate networks, filtering at the DNS and the firewall, priorities and speed limits, policy, monthly reading. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.reseau, kind: '2027', name: 'Installing a company network: cabling, Wi-Fi, firewall, backup link' },
      { href: L.audit, kind: '2027', name: 'Company cybersecurity: security audit or penetration test' },
      { href: L.piratage, kind: '2027', name: 'Hacking in a company: hacked mailbox, forged bank details, two-step verification' },
      { href: L.parc, kind: '2027', name: 'Managing a fleet of computers: register, updates, licences' },
    ] },
  },
  ar: {
    kind: 'ترشيح الويب · المكتب · الجزائر · 2027', title: "كيف تُحجب مواقع الإنترنت في المكتب في الجزائر (2027): الإنترنت يتثاقل كل مساء، ترشيح الويب، مواقع خطيرة محجوبة للجميع، واي فاي ضيوف مفصول، وفيديو محدود لا ممنوع",
    dek: "«كل مساء، الإنترنت يتثاقل: برنامج التسيير يدور في الفراغ والاجتماع بالفيديو ينقطع. أعرف أن نصف المكتب يشاهد فيديوهات، وفي الأسبوع الماضي أُصيب حاسوب بفيروس من موقع تحميل. كيف أحجب هذه المواقع، دون أن أحوّل المكتب إلى ثكنة ودون أن أقضي أيامي في المراقبة؟» لا تبدؤوا بقائمة مواقع ممنوعة. قيسوا أسبوعاً أين يذهب التدفق؛ ثم احموا، افصلوا، حدّدوا، واكتبوا القاعدة في صفحة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['ترشيح الويب في المؤسسة', 'حجب مواقع الإنترنت', 'إنترنت بطيء في المكتب', 'واي فاي الضيوف', 'الجدار الناري و DNS', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** خمس حركات، بهذا الترتيب. **القياس** أسبوعاً أين يذهب التدفق، حسب الصنف وحسب الساعة، دون النظر في من. **كتابة** القاعدة في صفحة وتسليمها لكل واحد. **الحماية**: المواقع التي تسرق كلمات المرور أو تنصّب برمجية خبيثة محجوبة للجميع، دون استثناء. **الفصل**: واي فاي الضيوف والهواتف الشخصية لا يدخل شبكة المكتب. **التحديد** بدل المنع: العمل يمرّ أولاً، الفيديو يُبطَّأ، والتحميلات تجري ليلاً. والحجب يتم عند " + I('DNS') + " وعند الجدار الناري، لا حاسوباً حاسوباً. في مثالنا، ينتقل العمل من 4 إلى " + I('8 Mbit/s') + " على خط من 20.",
      "هذا الدليل موجَّه إلى مسيّر مكتب أو محل أو وكالة لم يعد اتصالها يكفي مساءً، وإلى المؤسس المقيم في فرنسا الذي يسيّر مكتباً عن بعد. التعريفات المذكورة آتية من مصادر علنية: الحجب عبر " + I('DNS') + "، " + I('DNS') + " المشفَّر، بيان اسم الخادم، محلِّل " + I('Quad9') + "، تنظيم التدفق، وميثاق الاستعمال. الخط وتوزيعه والقاعدة في المثال مركَّبة. هذا الدليل لا يتناول القواعد القانونية لمراقبة العمّال: اعرضوا ميثاقكم على مستشاركم.",
    ],
    sections: [
      { heading: "أين يذهب التدفق على الساعة 15: القياس قبل الحجب", body: [
        "الشكل يبيّن الخط نفسه من 20 ميغابت في الثانية، قبل وبعد.",
      ], visual: 'debit', after: [
        "**القياس قبل الحجب.** العلبة التي تربط المكتب بالإنترنت تعرف أصلاً فيمَ يُستعمل الخط: علب مهنية كثيرة تعطي قراءة حسب الصنف وحسب الساعة. انظروا فيها أسبوعاً، دون البحث عن من: السؤال ليس «من يشاهد الفيديوهات»، بل «ما الذي يشغل الخط على الساعة 15». في المثال، من 20 ميغابت في الثانية، الفيديو يأخذ 9، التحميلات 4، وشبكات التواصل 3؛ والعمل لا ينال إلا 4 وهو يطلب 8.",
        "**رافعتان.** الأولوية: برنامج التسيير والبريد والاجتماع بالفيديو تمرّ أولاً. وتنظيم التدفق: تقنية لتسيير التدفق تؤخّر جزءاً من الحزم؛ الفيديو يمرّ دائماً، بجودة أقل، ولا يعود يأكل الخط. والتحميلات والتحديثات تُبرمَج ليلاً. **إذا كانت المشكلة في مكان آخر.** حين يبيّن القياس خطاً قليل الانشغال وبرنامجاً بطيئاً مع ذلك، فالسبب في الخادم أو في الشبكة الداخلية: انظر [دليل الخادم البطيء](" + L.serveur + ").",
      ] },
      { heading: "من له حق في ماذا: ثلاث مجموعات، وخمسة أصناف من المواقع", body: [
        "الشكل يعطي قاعدة مكتب، خانة لكل مجموعة أجهزة ولكل صنف من المواقع.",
      ], visual: 'regles', after: [
        "**قاعدة دون استثناء.** المواقع الخطيرة، التي تقلّد بنكاً لسرقة كلمة مرور أو تنصّب برمجية خبيثة، محجوبة للجميع، والمدير معهم. ومحلِّلات عمومية تفعل ذلك من المصدر: " + I('Quad9') + "، مثلاً، محلِّل " + I('DNS') + " عمومي عالمي يحجب الوصول إلى النطاقات المرتبطة بالبرمجيات الخبيثة والتصيّد. وهو أول خط دفاع ضد ما يصفه [دليل الاختراق](" + L.piratage + ").",
        "**ثلاث مجموعات.** حواسيب المكتب تحتفظ بالفيديو بتدفق محدود وبشبكات التواصل ساعة الغداء. والصندوق والخادم لا يحتاجان إلا العمل: وكل الباقي مغلق أمامهما. وواي فاي الضيوف والهواتف الشخصية يعطي الإنترنت، ولا شيء من الشبكة الداخلية: الهاتف المصاب لا يرى الخادم ولا الصندوق. وهذا الفصل يُحسب في الكوابل والواي فاي، كما في [دليل تنصيب الشبكة](" + L.reseau + "). **ما يراه المرشِّح.** لا محتوى الصفحات: اسم الموقع المطلوب، والمجموعة التي يأتي منها الطلب.",
      ] },
      { heading: "وضع المرشِّح في الخدمة، بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: القياس.",
      ], visual: 'etapes', after: [
        "**القياس، ثم الكتابة.** الميثاق يُسلَّم قبل أول حجب. ميثاق الاستعمال مجموعة رسمية من القواعد يضعها من يدير شبكة؛ وهنا تكفي صفحة: ما يُحجب للجميع، ما يُحدَّد، ما يُقاس وما لا يُقاس، ومن يُطلب منه الاستثناء. القاعدة المعلَنة تُقبل؛ والقاعدة التي تُكتشف برسالة خطأ يُتحايَل عليها. اعرضوه على مستشاركم: هذا الدليل لا يتناول القانون.",
        "**الحماية، الفصل، والتحديد.** الأوليان لا تُناقَشان. والثالثة تُضبط: نبدأ واسعاً، ننظر في القراءة، ونعدّل. **المراجعة.** كل ثلاثة أشهر، مع قائمة الاستثناءات المطلوبة: إذا طلب نصف المكتب الموقع نفسه للعمل، فالقاعدة هي الخاطئة.",
      ] },
      { heading: "ترشيح يصمد، في خمس طبقات", body: [
        "الطبقة المبرزة هي الحماية.",
      ], visual: 'couches', after: [
        "**القياس** يأتي أولاً ويبقى: قراءة الأسبوع الموالي تقول هل نفعت القاعدة. **الحماية** هي الطبقة الوحيدة التي تسري على الجميع. **الفصل** ينفع الأمن أكثر من أي قائمة: زائر، هاتف شخصي، أو تلفاز قاعة انتظار لا شأن لها بالشبكة التي فيها الخادم والصندوق.",
        "**الحدود** تخدم راحة الجميع: لا أحد يأسف على فيديو مبطَّأ يوم لا ينقطع اجتماعه بالفيديو. **والميثاق** يمسك الكل. وهذه الطبقات الخمس جزء مما يتحقق منه المدقِّق، انظر [دليل التدقيق الأمني](" + L.audit + ")، وتُصان كالباقي: انظر [دليل تسيير الإعلام الآلي](" + L.infogerance + ").",
      ] },
      { heading: "خمس طرق للحجب، وكيف يُتحايَل عليها", body: [
        "الشكل يقرّب خمس وسائل مما تحجبه ومما يتحايل عليها.",
      ], visual: 'moyens', after: [
        "**على الحاسوب.** ملف " + I('hosts') + " ملف من النظام يربط أسماء الأجهزة بالعناوين: يمكن تحويل موقع فيه، حاسوباً حاسوباً. وهو هشّ وسريع الإبطال؛ ويفترض كذلك ألا يكون المستعمل مسؤولاً على حاسوبه، وهذا يُسوّى في [تسيير الحظيرة](" + L.parc + "). **عند " + I('DNS') + ".** الحجب عبر " + I('DNS') + " يجعل تحديد مكان بعض النطاقات صعباً: ضبط واحد، والشبكة كلها. وتحايلان: تغيير " + I('DNS') + " على الحاسوب، أو استعمال " + I('DNS') + " المشفَّر للمتصفح. وقد استُعمل " + I('DNS over HTTPS') + " للتحايل على رقابة أبوية موضوعة عند " + I('DNS') + "، ونصحت الوكالة الأمريكية " + I('NSA') + " المؤسسات بعدم استعمال المحلِّلات المشفَّرة الخارجية، لأنها تمنع ترشيح الطلبات وتدقيقها.",
        "**عند الجدار الناري.** حتى حين تكون الصفحة مشفَّرة، اسم الموقع المطلوب يمرّ مكشوفاً في بداية الاتصال: هو بيان اسم الخادم، مرئي على الشبكة وتستعمله برمجيات الأمن للترشيح. فالجدار الناري يستطيع تطبيق قاعدة حسب الصنف والمجموعة والساعة، وحجب " + I('DNS') + " المشفَّر الخارجي و" + I('VPN') + " غير المسموح به. **التدفق وشبكة الضيوف** هما الوسيلتان اللتان لا يحاول أحد التحايل عليهما: الأولى لا تحجب شيئاً، والثانية تعطي الإنترنت. **ولا واحدة منيعة.** هاتف على " + I('4G') + " يمرّ بجانب كل شيء: المرشِّح يحمي خط المؤسسة وشبكتها، لا وقت كل واحد.",
      ] },
      { heading: "أربعة أسابيع، من القياس إلى القاعدة، سنة 2027", body: [
        "أربعة أسابيع في المثال، والأول منها دون حجب شيء.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القياس.** لا شيء يُحجب؛ نقرأ. **الأسبوع 2، الميثاق والمجموعات.** **الأسبوعان 2 و3، الحماية والفصل**: المواقع الخطيرة، شبكة الصندوق، وواي فاي الضيوف.",
        "**الأسبوعان 3 و4، الحدود والأولويات**، ثم قراءة ثانية تُقارَن بالأولى. إذا كان في المكتب جدار ناري يعرف الترشيح حسب الصنف، فكل شيء يتم بالضبط؛ وإلا فهذا وقت التفكير فيه. وهذا الدليل لا يعطي أي سعر للعتاد.",
      ], list: [
        "**ما يستلمه المسيّر**: قراءة أسبوع حسب الصنف وحسب الساعة، قبل وبعد؛ الميثاق في صفحة؛ القاعدة لكل مجموعة؛ وقائمة الاستثناءات الممنوحة.",
        "**ما لم تعد المؤسسة تفعله**: حجب موقع يوم اثنين عن غضب، ترك هاتف زائر على شبكة الصندوق، إطلاق التحديثات على الساعة 15، ومراقبة الشاشات.",
        "**ما يُقاس**: التدفق حسب الصنف وحسب الساعة، التدفق الذي يناله العمل في ساعات الذروة، المواقع الخطيرة المحجوبة في الأسبوع، والاستثناءات المطلوبة.",
        "**ما تفعله Symloop**: القياس، فصل الشبكات، الترشيح عند " + I('DNS') + " والجدار الناري، الأولويات وحدود التدفق، الميثاق المعروض للمراجعة، ثم قراءة كل شهر.",
      ], faq: [
        { q: "كيف تُحجب مواقع الإنترنت في المكتب؟", a: "على مستوى الشبكة، لا حاسوباً حاسوباً: " + I('DNS') + " مرشِّح للجميع وجدار ناري يطبّق قاعدة حسب المجموعة والساعة. وقبل ذلك، قيسوا أسبوعاً ما يشغل الخط، واكتبوا القاعدة في صفحة تُسلَّم لكل واحد." },
        { q: "كيف يُحجب يوتيوب أو فيسبوك على كل الحواسيب دفعة واحدة؟", a: "بقاعدة عند الجدار الناري أو " + I('DNS') + "، تسري على الشبكة كلها. لكن اسألوا أولاً عن الهدف: إذا كان البطء، فتحديد تدفق الفيديو أو السماح به ساعة الغداء يحلّ المشكلة دون منع، ويُتحايَل عليه أقل." },
        { q: "لماذا يكون الإنترنت بطيئاً مساءً في المكتب؟", a: "لأن الخط مقتسَم دون أولوية: الفيديو المتواصل والتحميلات والتحديثات تأخذ مكان برنامج التسيير والاجتماع بالفيديو. وقراءة العلبة حسب الصنف والساعة تبيّن ذلك. وإذا كان الخط قليل الانشغال، ابحثوا جهة الخادم." },
        { q: "هل يمكن حجب موقع على حاسوب واحد؟", a: "نعم، بملف من النظام أو بإضافة للمتصفح. وهو هشّ: متصفح آخر أو صلاحية مسؤول تكفي لإبطاله. ولقاعدة تصمد، نحجب على مستوى الشبكة، بوضع الحاسوب في مجموعة." },
        { q: "هل يستطيع العمّال التحايل على الحجب؟", a: "نعم: بتغيير " + I('DNS') + " على حاسوبهم، ب" + I('DNS') + " المشفَّر للمتصفح، ب" + I('VPN') + "، أو ببساطة بهاتفهم على " + I('4G') + ". والجدار الناري يغلق الثلاثة الأولى. والرابع لا يُغلق: المرشِّح يحمي الخط والشبكة، لا وقت كل واحد." },
        { q: "هل يرى المرشِّح ما يفعله العمّال؟", a: "يرى أسماء المواقع المطلوبة والمجموعة التي يأتي منها الطلب، لا محتوى الصفحات. وما نختار قياسه وحفظه يُكتب في الميثاق. ولما يسمح به القانون أو يفرضه، راجعوا مستشاركم: هذا الدليل لا يتناوله." },
        { q: "هل يلزم واي فاي مفصول للضيوف؟", a: "نعم. الزوّار والهواتف الشخصية ينالون الإنترنت، ولا شيء من الشبكة الداخلية. وهو الإجراء الذي يحمي أكثر: الجهاز المصاب لا يرى الخادم ولا الصندوق. ويُحسب منذ تنصيب الشبكة." },
        { q: "هل الأفضل المنع أم التحديد؟", a: "منع ما هو خطير، للجميع. وتحديد الباقي: تدفق منخفض للفيديو، فترة منتصف النهار لشبكات التواصل، والليل للتحميلات. القاعدة التي تترك متنفَّساً تُقبل، والقراءة تبيّن أنها تكفي." },
        { q: "أي عتاد يلزم للترشيح؟", a: "جدار ناري قادر على الترشيح حسب الصنف والمجموعة والساعة، وعلى فصل عدة شبكات؛ " + I('DNS') + " مرشِّح؛ ونقاط واي فاي تبثّ شبكة ضيوف. ومكاتب كثيرة عندها جزء من ذلك أصلاً. وهذا الدليل لا يعطي أي سعر." },
        { q: "كم من الوقت لوضع ترشيح في الخدمة؟", a: "أربعة أسابيع في مثالنا: أسبوع قياس دون حجب شيء، أسبوع للميثاق والمجموعات، أسبوعان للحماية والفصل والحدود، ثم قراءة ثانية تُقارَن بالأولى." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "السؤال ليس «من يشاهد الفيديوهات»، بل «ما الذي يشغل الخط على الساعة 15»." },
      { after: 4, text: "المرشِّح يحمي خط المؤسسة وشبكتها، لا وقت كل واحد." },
    ],
    cta: { eyebrow: "قولوا لنا كم حاسوباً، أي خط، وفي أي ساعة يتثاقل: نقرأ أسبوعاً، وتعرفون ما يشغل تدفقكم قبل حجب أي شيء", title: "إنترنت بطيء كل مساء، حاسوب أُصيب من موقع تحميل، زوّار على شبكة الصندوق، أو مؤسس في فرنسا يسيّر مكتباً عن بعد: نقيس، نفصل، نرشّح، والقاعدة تسعها صفحة", body: "قياس، شبكات مفصولة، ترشيح عند DNS والجدار الناري، أولويات وحدود تدفق، ميثاق، وقراءة شهرية. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reseau, kind: '2027', name: 'تنصيب شبكة المؤسسة: الكوابل، الواي فاي، الجدار الناري، وخط الإسعاف' },
      { href: L.audit, kind: '2027', name: 'الأمن السيبراني للمؤسسة: تدقيق أمني أم اختبار اختراق' },
      { href: L.piratage, kind: '2027', name: 'الاختراق في المؤسسة: بريد مخترَق، بيانات بنكية مزوَّرة، وتحقق بخطوتين' },
      { href: L.parc, kind: '2027', name: 'تسيير حظيرة الحواسيب: السجل، التحديثات، والرخص' },
    ] },
  },
};

const KEYWORDS = "comment bloquer des sites internet au bureau 2027, comment bloquer un site internet, bloquer youtube facebook entreprise, filtrage web entreprise algérie, internet lent au bureau l'après-midi, wifi invités entreprise, pare-feu filtrage par catégorie, filtrage dns entreprise, priorité du trafic visioconférence, charte informatique entreprise, how to block websites at the office algeria 2027, web filtering small business, كيف احجب مواقع الانترنت في المكتب 2027, ترشيح الويب في الشركة, واي فاي الضيوف";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
