import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/data-center-algerie-2027-serveur-d-entreprise-dans-un-placard-colocation-housing-serveur-loue-ou-virtuel-disponibilite-second-lien-internet.mjs';

const SLUG = 'data-center-algerie-2027-serveur-d-entreprise-dans-un-placard-colocation-housing-serveur-loue-ou-virtuel-disponibilite-second-lien-internet';
const FIGURES = ['bureau', 'decider', 'fournit', 'formules', 'lien', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  heberger: '/blog/heberger-application-algerie-ou-europe-2027-ou-mettre-serveurs-et-donnees-latence-paiement-sauvegardes-reprise-montage-mixte/',
  sauvegarde: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  interconnecter: '/blog/interconnecter-deux-sites-distants-algerie-2027-vpn-siege-agences-depot-plan-d-adresses-debit-secours-logiciel-lent/',
  acces: '/blog/acces-a-distance-au-bureau-entreprise-algerie-2027-bureau-a-distance-qui-ne-fonctionne-pas-teletravail-tunnel-chiffre-sans-port-ouvert/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
  serveurlent: '/blog/serveur-lent-entreprise-algerie-2027-logiciel-qui-rame-le-matin-memoire-disques-sauvegarde-en-pleine-journee-mesurer-avant-de-remplacer/',
  reseau: '/blog/installation-reseau-informatique-entreprise-algerie-2027-cablage-baie-de-brassage-switch-wifi-pare-feu-lien-de-secours/',
};

const CONTENT = {
  fr: {
    kind: 'Data center · Algérie · 2027', title: "Data center en Algérie (2027) : le serveur de l'entreprise vit dans un placard, s'arrête à chaque coupure de courant et chauffe l'été, colocation, serveur loué ou virtuel, ce qu'on loue vraiment, les questions à poser avant de signer, le lien qui devient vital",
    dek: "« Notre serveur est dans un placard, au bureau, à côté de la photocopieuse. Il s'arrête à chaque coupure de courant, il chauffe l'été, et n'importe qui peut le débrancher. On nous conseille de le mettre dans un data center. Qu'est-ce qu'on y loue exactement, est-ce que cela existe en Algérie, que faut-il demander avant de signer, et que se passe-t-il si internet coupe au bureau ? » Un centre de données fournit ce qu'un bureau fournit mal : le courant, le froid, l'accès contrôlé et les liaisons. Mais il déplace le risque : le serveur parti, c'est le lien du bureau qui devient vital.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Data center', 'Colocation de serveur', 'Serveur dédié', 'Taux de disponibilité', 'Lien de secours', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un centre de données loue ce qu'un bureau fournit mal : **un courant qui ne s'arrête pas, du froid, un accès contrôlé et plusieurs liaisons**. On peut y poser sa propre machine (la colocation, ou « housing », vendue à l'unité de baie), y louer un serveur entier, ou y louer un serveur virtuel. L'offre existe en Algérie : en novembre 2026, deux opérateurs au moins affichent une offre de colocation sur leur site. Avant de signer, **traduisez le taux de disponibilité en heures** : 99,99 % par an, c'est 53 minutes d'arrêt. Et prévoyez **un second lien internet au bureau** : le serveur parti, le bureau dépend de son lien. Six semaines dans l'exemple, dont un seul week-end d'arrêt.",
      "Cette page s'adresse au gérant d'une entreprise dont le serveur, logiciel de gestion et fichiers, vit dans un placard ou un coin de bureau, et au fondateur installé en France dont les agences en Algérie dépendent d'une machine que personne ne surveille. Les définitions viennent de sources publiques : centre de données, salle serveur, colocation, unité de baie, onduleur, redondance, haute disponibilité, point de défaillance unique, accord de niveau de service. Ce que nous disons de deux opérateurs algériens est ce que leurs sites affichent en novembre 2026 ; nous ne classons personne. L'entreprise, ses 38 postes, ses 31 heures d'arrêt et son calendrier sont un exemple construit. Cette page ne donne aucun prix et ne traite pas des règles sur les données personnelles : voyez votre conseil. Où placer une application destinée au public, en Algérie ou en Europe, est l'objet d'[un autre guide](" + L.heberger + ").",
    ],
    sections: [
      { heading: "Le serveur au bureau ou au centre de données : six points", body: [
        "La figure compare, sur six points, le serveur dans un placard et le serveur dans un centre de données.",
      ], visual: 'bureau', after: [
        "**Le placard n'est pas une salle serveur.** Une salle serveur est une pièce, habituellement climatisée, consacrée au fonctionnement continu des serveurs ; et maintenir une température et une humidité stables, dans des tolérances serrées, est essentiel à la fiabilité des machines. Un placard à côté de la photocopieuse n'offre ni l'un ni l'autre. **L'onduleur ne tient pas la coupure.** L'autonomie sur batterie de la plupart des onduleurs est courte, typiquement de 5 à 15 minutes : assez pour démarrer une source de secours ou arrêter proprement le matériel, pas pour traverser deux heures sans courant. Sans groupe derrière lui et sans arrêt automatique réglé, le serveur tombe brutalement.",
        "**Comptez.** Dans l'exemple, l'an dernier : quatre coupures de courant, dont une un jeudi soir découverte le dimanche matin, et un disque mort en août après une surchauffe. Trente et une heures d'arrêt, soit 99,65 % de disponibilité sur les 8 760 heures de l'année. **Quand le placard suffit.** Si tous ceux qui utilisent le serveur sont dans le même bureau, et qu'une demi-journée d'arrêt se supporte, améliorez la pièce : un froid dédié, un onduleur qui arrête le serveur proprement, une porte fermée à clé, et une copie hors du bâtiment, selon [le guide sur les sauvegardes](" + L.sauvegarde + "). Un serveur lent est une autre question, traitée dans [le guide sur le serveur lent](" + L.serveurlent + ").",
      ] },
      { heading: "Sortir le serveur du bureau : décider en six temps", body: [
        "Le troisième temps est accentué : mesurer le lien du bureau.",
      ], visual: 'decider', after: [
        "**Trois comptes avant tout devis.** Les heures d'arrêt de l'an dernier : 31 dans l'exemple. Les utilisateurs par site : 38 postes, dont trente au siège et quatre dans chacune des deux agences. Et le lien internet du siège, mesuré pendant deux semaines : le débit réel aux heures de travail, le nombre de coupures, leur durée. Dans l'exemple, trois coupures et cinq heures en deux semaines : assez pour savoir qu'un seul lien ne suffira pas.",
        "**La règle.** Plus les utilisateurs sont dispersés, agences, télétravail, clients, plus le centre de données se justifie : ils y accèdent tous de la même façon, et la panne d'un site n'arrête plus les autres. S'ils sont tous au même endroit, avec un lien fragile, sortir le serveur ajoute une panne au lieu d'en retirer une. Le lien de secours du bureau se prévoit avec le câblage et le pare-feu, comme le décrit [le guide sur l'installation d'un réseau d'entreprise](" + L.reseau + ").",
      ] },
      { heading: "Ce qu'un centre de données fournit, en cinq couches", body: [
        "La couche accentuée est le courant.",
      ], visual: 'fournit', after: [
        "**Ce que c'est.** Un centre de données est une installation, en général un bâtiment ou une salle, consacrée à l'hébergement d'équipements informatiques. Un centre de colocation fournit l'espace, le courant, le froid et la sécurité physique pour les serveurs de ses clients. Le mot qui revient est redondance : une forme de résilience qui maintient le système disponible quand un composant tombe en panne. **Le taux, en heures.** Un taux de disponibilité se lit sur un an : 99 %, c'est 3,7 jours d'arrêt ; 99,9 %, près de 9 heures ; 99,99 %, 53 minutes ; 99,999 %, 5,3 minutes. Comparez avec vos propres heures : 31 dans l'exemple.",
        "**En Algérie, en novembre 2026.** Icosnet, qui se dit présent depuis 1999 avec ses propres centres de données en Algérie, vend sur son site un hébergement « housing » au nombre de U, où le client apporte son serveur et loue l'espace, et écrit s'engager sur un taux de disponibilité annuel de 99,99 % pour cet hébergement. Algérie Télécom propose de louer un espace physique dans ses centres de données, de 1 U à la baie entière de 42 U, en passant par le quart et la demi-baie ; sa page précise que la puissance électrique n'est pas incluse, et n'affiche pas de taux. **Six questions par écrit.** Sur quoi porte le taux, et que se passe-t-il s'il n'est pas tenu ? Quelle puissance électrique pour mon emplacement, incluse ou non ? Quels opérateurs et quel débit garanti ? Qui entre, à quelles heures ? Quels gestes sur place, dans quel délai ? Comment reprend-on sa machine ou ses données, et avec quel préavis ? Un accord de niveau de service est un contrat qui engage : si un niveau ou une certification est annoncé, demandez le certificat.",
      ] },
      { heading: "Quatre formules : qui s'occupe de quoi", body: [
        "La figure montre, pour quatre formules, ce qui reste à votre charge.",
      ], visual: 'formules', after: [
        "**La colocation.** Vous apportez la machine ; l'opérateur loue l'emplacement. L'espace se compte en U, l'unité de hauteur d'une baie : 44,45 mm. Une baie standard en compte typiquement 42, et certains fournisseurs vendent des demi-baies, des quarts de baie ou la place d'un seul serveur. **Le serveur loué.** Dans un hébergement dédié, le client loue un serveur entier : la machine appartient à l'opérateur, et ses pannes aussi. **Le serveur virtuel.** C'est une machine virtuelle vendue comme un service : une part des machines de l'opérateur, qui grandit avec le besoin.",
        "**Comment choisir.** Une machine récente, ou un matériel particulier que votre logiciel exige : la colocation. Une machine qui a fait son temps : ne la déménagez pas, louez. Une charge modeste appelée à grandir : le serveur virtuel. **Ce qui ne change pas.** Dans les quatre cas, les mises à jour du système, les logiciels et les sauvegardes restent à vous. Écrivez un nom en face de chacune de ces trois lignes : le vôtre, celui d'un informaticien, ou celui d'un prestataire sous contrat, comme le décrit [le guide sur l'infogérance](" + L.infogerance + ").",
      ] },
      { heading: "Le serveur parti, le lien du bureau devient vital", body: [
        "La figure montre la même entreprise, avant et après le déménagement du serveur.",
      ], visual: 'lien', after: [
        "**Le risque se déplace.** Un point de défaillance unique est une partie d'un système dont la panne arrête le système entier. Avant, c'était la prise du placard : une coupure de courant au siège arrêtait les 38 postes, agences comprises. Après, c'est le lien du siège : le courant peut tomber au siège sans arrêter les agences, mais une coupure d'internet y arrête trente postes. **Deux liens, deux opérateurs.** Le second lien doit venir d'un autre opérateur, par un autre chemin si possible, et prendre le relais tout seul. On l'essaie en débranchant le premier, un mardi matin, pas en lisant la notice.",
        "**Le chemin.** Entre le bureau et le serveur, les données passent par un tunnel chiffré, pas par un port ouvert sur internet : c'est le montage du [guide pour interconnecter des sites](" + L.interconnecter + "), et, pour les personnes en déplacement, celui du [guide sur l'accès à distance](" + L.acces + "). **Ce qu'on laisse au bureau.** Les fichiers très lourds que l'on ouvre toute la journée supportent mal un lien modeste : mesurez avant, et gardez-en au besoin une copie locale synchronisée.",
      ] },
      { heading: "Six semaines, du compte au déménagement, en 2027", body: [
        "Six semaines dans l'exemple, dont les deux premières pour compter et mesurer.",
      ], visual: 'calendrier', after: [
        "**L'ordre.** Compter et mesurer d'abord. Choisir la formule et envoyer les questions écrites. Doubler le lien et monter le tunnel avant que le serveur ne bouge : si le second lien n'est pas prêt, on attend. **La répétition.** Une copie du serveur est installée au centre de données, et cinq personnes y travaillent une semaine, depuis le siège et depuis une agence. C'est là que l'on découvre l'imprimante qui ne répond plus ou le fichier trop lourd, pas le dimanche qui suit le déménagement.",
        "**Le week-end.** Dernière copie le jeudi soir, bascule, essais le samedi. L'ancien serveur reste dans son placard, éteint mais intact, pendant une semaine : revenir en arrière, c'est le rallumer. **Après.** On restaure une sauvegarde pour essai, on recompte les heures d'arrêt au bout de trois mois, et on vide le placard.",
      ], list: [
        "**Ce que le gérant reçoit** : trois comptes, heures d'arrêt, utilisateurs par site, tenue du lien ; une formule choisie et justifiée ; les réponses écrites de l'opérateur aux six questions ; un second lien essayé ; un déménagement répété puis fait en un week-end ; un nom en face de chaque ligne qui reste à sa charge.",
        "**Ce que l'entreprise ne fait plus** : découvrir la panne le dimanche matin, redémarrer le serveur à la main après chaque coupure, compter sur la climatisation du bureau en août, laisser le serveur à portée de tous.",
        "**Ce qui est mesuré** : heures d'arrêt par an, comparées au taux écrit dans le contrat ; coupures du lien principal et bascules sur le second ; délai des gestes sur place ; date de la dernière restauration essayée.",
        "**Ce que fait Symloop** : les comptes et la mesure du lien, le choix de la formule, les questions à l'opérateur et la lecture des réponses, le second lien et le tunnel chiffré, la répétition, le déménagement, puis la surveillance, les mises à jour et les sauvegardes si vous nous les confiez.",
      ], faq: [
        { q: "Qu'est-ce qu'un data center ?", a: "Un centre de données est une installation, en général un bâtiment ou une salle, consacrée à l'hébergement d'équipements informatiques. Il fournit ce qu'un bureau fournit mal : un courant qui ne s'arrête pas, du froid, un accès contrôlé et plusieurs liaisons." },
        { q: "Y a-t-il des data centers en Algérie ?", a: "Oui. En novembre 2026, Icosnet et Algérie Télécom affichent sur leur site une offre de colocation dans leurs centres de données en Algérie, et d'autres acteurs proposent du cloud. Posez à chacun les mêmes questions écrites, et comparez les réponses ligne par ligne." },
        { q: "Qu'est-ce que la colocation, ou housing ?", a: "Vous apportez votre serveur, l'opérateur loue l'emplacement : l'espace, le courant, le froid, la sécurité physique et la liaison. L'espace se compte en U, l'unité de hauteur d'une baie, 44,45 mm, ou en quart de baie, demi-baie et baie entière." },
        { q: "Faut-il sortir notre serveur du bureau ?", a: "Si des agences, des personnes en télétravail ou des clients en dépendent, et que les coupures vous ont coûté des dizaines d'heures l'an dernier, oui. Si tous les utilisateurs sont dans le même bureau et que le lien internet est fragile, améliorez d'abord la pièce." },
        { q: "Colocation, serveur dédié ou serveur virtuel : que choisir ?", a: "La colocation si votre machine est récente ou si votre logiciel exige un matériel particulier. Le serveur dédié, loué, si la vôtre a fait son temps. Le serveur virtuel si la charge est modeste et doit grandir. Dans les trois cas, les sauvegardes restent à vous." },
        { q: "Que veut dire 99,99 % de disponibilité ?", a: "Sur un an, 53 minutes d'arrêt. 99,9 %, c'est près de 9 heures ; 99 %, 3,7 jours. Demandez sur quoi porte le taux, courant, réseau ou les deux, comment il est mesuré, et ce que le contrat prévoit s'il n'est pas tenu." },
        { q: "Que se passe-t-il si internet coupe au bureau ?", a: "Si le serveur est au centre de données, le bureau ne peut plus travailler, sauf si un second lien prend le relais. C'est pourquoi on installe et on essaie ce second lien, chez un autre opérateur, avant de déménager le serveur." },
        { q: "Le data center fait-il nos sauvegardes ?", a: "Non, pas par défaut. Il fournit le bâtiment, le courant, le froid et les liaisons. Les sauvegardes, leur copie dans un autre lieu et l'essai de restauration restent à votre charge, sauf service ajouté au contrat." },
        { q: "Combien coûte un hébergement en data center en Algérie ?", a: "Cela dépend de quatre lignes : l'espace, en U ou en fraction de baie ; la puissance électrique, parfois facturée à part ; la liaison et son débit ; les services ajoutés. Demandez un devis ligne par ligne, et ajoutez-y le second lien du bureau." },
        { q: "Combien de temps pour déménager un serveur ?", a: "Six semaines dans l'exemple de cette page : deux pour compter et mesurer, puis le choix, le second lien, une répétition d'une semaine et le déménagement en un week-end. L'ancien serveur reste intact une semaine de plus." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Un taux de disponibilité ne se lit pas en pourcentage : il se lit en heures." },
      { after: 4, text: "On ne déménage pas un serveur sans doubler le lien." },
    ],
    cta: { eyebrow: "Dites-nous où est le serveur, combien de postes en dépendent et depuis combien de sites : nous comptons les heures d'arrêt et nous mesurons le lien avant tout devis", title: "Serveur dans un placard qui tombe à chaque coupure, agences arrêtées quand le siège n'a plus de courant, ou fondateur en France dont l'entreprise en Algérie dépend d'une machine que personne ne surveille : nous comptons, nous choisissons la formule avec vous, puis nous déménageons en un week-end", body: "Heures d'arrêt comptées, lien mesuré, formule choisie, questions écrites à l'opérateur, second lien et tunnel chiffré, répétition, déménagement, surveillance et sauvegardes. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.heberger, kind: '2027', name: 'Héberger une application en Algérie ou en Europe' },
      { href: L.sauvegarde, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes et restauration testée' },
      { href: L.interconnecter, kind: '2027', name: 'Interconnecter le siège, les agences et le dépôt' },
      { href: L.infogerance, kind: '2027', name: 'Infogérance : contrat, délais, inventaire, rapport mensuel' },
    ] },
  },
  en: {
    kind: 'Data center · Algeria · 2027', title: "Data center in Algeria (2027): the company server lives in a cupboard, stops at every power cut and overheats in summer, colocation, rented or virtual server, what you really rent, the questions to ask before signing, the link that becomes vital",
    dek: "“Our server is in a cupboard at the office, next to the photocopier. It stops at every power cut, it overheats in summer, and anyone can unplug it. We are advised to put it in a data center. What exactly do you rent there, does it exist in Algeria, what should we ask before signing, and what happens if the internet goes down at the office?” A data center provides what an office provides badly: power, cooling, controlled access and links. But it moves the risk: once the server has left, it is the office link that becomes vital.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Data center', 'Server colocation', 'Dedicated server', 'Availability rate', 'Backup link', 'Algeria 2027'],
    intro: [
      "**Short answer.** A data center rents out what an office provides badly: **power that does not stop, cooling, controlled access and several links**. You can place your own machine there (colocation, or “housing”, sold by the rack unit), rent a whole server there, or rent a virtual server. The offer exists in Algeria: in November 2026, at least two operators show a colocation offer on their site. Before signing, **turn the availability rate into hours**: 99.99% a year is 53 minutes of downtime. And plan **a second internet link at the office**: once the server has left, the office depends on its link. Six weeks in the example, with a single weekend of downtime.",
      "This page is for the manager of a company whose server, management software and files, lives in a cupboard or a corner of the office, and for the founder based in France whose branches in Algeria depend on a machine nobody watches. The definitions come from public sources: data center, server room, colocation, rack unit, uninterruptible power supply, redundancy, high availability, single point of failure, service-level agreement. What we say about two Algerian operators is what their sites show in November 2026; we rank nobody. The company, its 38 computers, its 31 hours of downtime and its calendar are a constructed example. This page gives no prices and does not cover the rules on personal data: see your adviser. Where to place an application meant for the public, in Algeria or in Europe, is the subject of [another guide](" + L.heberger + ").",
    ],
    sections: [
      { heading: "The server at the office or in a data center: six points", body: [
        "The figure compares, on six points, the server in a cupboard and the server in a data center.",
      ], visual: 'bureau', after: [
        "**The cupboard is not a server room.** A server room is a room, usually air-conditioned, devoted to the continuous operation of computer servers; and maintaining a stable temperature and humidity within tight tolerances is critical to the reliability of the machines. A cupboard next to the photocopier offers neither. **The battery unit does not last through the cut.** The on-battery run-time of most uninterruptible power supplies is relatively short, typically 5 to 15 minutes: enough to start a standby power source or shut the equipment down properly, not to get through two hours without power. With no generator behind it and no automatic shutdown set up, the server goes down abruptly.",
        "**Count.** In the example, last year: four power cuts, one of them on a Thursday evening and found on Sunday morning, and a disk that died in August after overheating. Thirty-one hours of downtime, or 99.65% availability over the 8,760 hours of the year. **When the cupboard is enough.** If everyone who uses the server is in the same office, and half a day of downtime can be lived with, improve the room: dedicated cooling, a battery unit that shuts the server down properly, a locked door, and a copy outside the building, as in [the guide to backups](" + L.sauvegarde + "). A slow server is another question, dealt with in [the guide to the slow server](" + L.serveurlent + ").",
      ] },
      { heading: "Taking the server out of the office: deciding in six steps", body: [
        "The third step is accented: measure the office link.",
      ], visual: 'decider', after: [
        "**Three counts before any quote.** Last year's hours of downtime: 31 in the example. The users per site: 38 computers, thirty at head office and four in each of the two branches. And the head-office internet link, measured for two weeks: the real speed during working hours, the number of cuts, their length. In the example, three cuts and five hours in two weeks: enough to know that a single link will not do.",
        "**The rule.** The more scattered the users, branches, remote work, customers, the more a data center is justified: they all reach it the same way, and a failure on one site no longer stops the others. If they are all in the same place, with a fragile link, taking the server out adds a failure instead of removing one. The office's backup link is planned with the cabling and the firewall, as described in [the guide to installing a company network](" + L.reseau + ").",
      ] },
      { heading: "What a data center provides, in five layers", body: [
        "The accented layer is power.",
      ], visual: 'fournit', after: [
        "**What it is.** A data center is a facility, typically a building or a room, dedicated to housing computer equipment. A colocation facility provides space, power, cooling and physical security for its customers' servers. The word that keeps coming back is redundancy: a form of resilience that ensures system availability in the event of component failure. **The rate, in hours.** An availability rate is read over a year: 99% is 3.7 days of downtime; 99.9%, about 9 hours; 99.99%, 53 minutes; 99.999%, 5.3 minutes. Compare with your own hours: 31 in the example.",
        "**In Algeria, in November 2026.** Icosnet, which says it has been on the market since 1999 with its own data centers in Algeria, sells on its site a “housing” service by the number of U, where the customer brings the server and rents the space, and writes that it commits to an annual availability rate of 99.99% for that service. Algérie Télécom offers to rent physical space in its data centers, from 1U to a full 42U rack, with quarter and half racks in between; its page states that electrical power is not included, and shows no rate. **Six questions in writing.** What does the rate cover, and what happens if it is not met? What electrical power for my space, included or not? Which operators and what guaranteed speed? Who goes in, at what hours? Which hands-on tasks on site, within what delay? How do you take back your machine or your data, and with what notice? A service-level agreement is a binding contract: if a level or a certification is announced, ask for the certificate.",
      ] },
      { heading: "Four ways: who looks after what", body: [
        "The figure shows, for four ways of running a server, what stays with you.",
      ], visual: 'formules', after: [
        "**Colocation.** You bring the machine; the operator rents the space. Space is counted in U, the rack unit of height: 44.45 mm. A standard rack cabinet is typically 42U high, and some providers sell half cabinets, quarter cabinets or space for a single server. **The rented server.** In dedicated hosting, the client leases an entire server: the machine belongs to the operator, and so do its failures. **The virtual server.** It is a virtual machine sold as a service: a share of the operator's machines, which grows with the need.",
        "**How to choose.** A recent machine, or particular hardware your software requires: colocation. A machine that has had its day: do not move it, rent. A modest load expected to grow: the virtual server. **What does not change.** In all four cases, system updates, software and backups stay with you. Write a name against each of these three lines: yours, an IT person's, or a contractor's under contract, as described in [the guide to managed IT](" + L.infogerance + ").",
      ] },
      { heading: "Once the server has left, the office link becomes vital", body: [
        "The figure shows the same company, before and after the server moves.",
      ], visual: 'lien', after: [
        "**The risk moves.** A single point of failure is a part of a system that, if it fails, stops the entire system from working. Before, it was the socket in the cupboard: a power cut at head office stopped all 38 computers, branches included. After, it is the head-office link: power can go down at head office without stopping the branches, but an internet cut there stops thirty computers. **Two links, two operators.** The second link must come from another operator, by another route if possible, and take over by itself. It is tested by unplugging the first, on a Tuesday morning, not by reading the manual.",
        "**The path.** Between the office and the server, data travels through an encrypted tunnel, not through a port open to the internet: that is the set-up of [the guide to interconnecting sites](" + L.interconnecter + "), and, for people on the move, of [the guide to remote access](" + L.acces + "). **What is left at the office.** Very heavy files opened all day long cope badly with a modest link: measure first, and keep a synchronised local copy if needed.",
      ] },
      { heading: "Six weeks, from the count to the move, in 2027", body: [
        "Six weeks in the example, the first two to count and measure.",
      ], visual: 'calendrier', after: [
        "**The order.** Count and measure first. Choose the option and send the written questions. Double the link and set up the tunnel before the server moves: if the second link is not ready, wait. **The rehearsal.** A copy of the server is installed in the data center, and five people work on it for a week, from head office and from a branch. That is when the printer that no longer answers or the file that is too heavy is found, not on the Sunday after the move.",
        "**The weekend.** Last copy on Thursday evening, the switch, tests on Saturday. The old server stays in its cupboard, switched off but intact, for a week: going back means switching it on again. **Afterwards.** A backup is restored as a test, the hours of downtime are counted again after three months, and the cupboard is emptied.",
      ], list: [
        "**What the manager receives**: three counts, hours of downtime, users per site, how the link holds; an option chosen and justified; the operator's written answers to the six questions; a second link tested; a move rehearsed then done in a weekend; a name against each line that stays with the company.",
        "**What the company no longer does**: find the failure on Sunday morning, restart the server by hand after each cut, rely on the office air conditioning in August, leave the server within everyone's reach.",
        "**What is measured**: hours of downtime per year, compared with the rate written in the contract; cuts of the main link and switches to the second; the delay of hands-on tasks on site; the date of the last restore tested.",
        "**What Symloop does**: the counts and the link measurement, the choice of option, the questions to the operator and the reading of the answers, the second link and the encrypted tunnel, the rehearsal, the move, then the monitoring, updates and backups if you entrust them to us.",
      ], faq: [
        { q: "What is a data center?", a: "A data center is a facility, typically a building or a room, dedicated to housing computer equipment. It provides what an office provides badly: power that does not stop, cooling, controlled access and several links." },
        { q: "Are there data centers in Algeria?", a: "Yes. In November 2026, Icosnet and Algérie Télécom show on their sites a colocation offer in their data centers in Algeria, and other players offer cloud services. Put the same written questions to each, and compare the answers line by line." },
        { q: "What is colocation, or housing?", a: "You bring your server, the operator rents the space: room, power, cooling, physical security and the link. Space is counted in U, the rack unit of height, 44.45 mm, or in quarter racks, half racks and full racks." },
        { q: "Should we take our server out of the office?", a: "If branches, remote workers or customers depend on it, and the cuts cost you dozens of hours last year, yes. If all users are in the same office and the internet link is fragile, improve the room first." },
        { q: "Colocation, dedicated server or virtual server: which to choose?", a: "Colocation if your machine is recent or your software requires particular hardware. A dedicated, rented server if yours has had its day. A virtual server if the load is modest and must grow. In all three cases, backups stay with you." },
        { q: "What does 99.99% availability mean?", a: "Over a year, 53 minutes of downtime. 99.9% is about 9 hours; 99% is 3.7 days. Ask what the rate covers, power, network or both, how it is measured, and what the contract provides if it is not met." },
        { q: "What happens if the internet goes down at the office?", a: "If the server is in the data center, the office can no longer work, unless a second link takes over. That is why this second link, from another operator, is installed and tested before the server moves." },
        { q: "Does the data center do our backups?", a: "No, not by default. It provides the building, power, cooling and links. Backups, their copy in another place and the restore test stay with you, unless a service is added to the contract." },
        { q: "How much does data center hosting cost in Algeria?", a: "It depends on four lines: space, in U or in a fraction of a rack; electrical power, sometimes billed separately; the link and its speed; added services. Ask for a quote line by line, and add the office's second link to it." },
        { q: "How long does it take to move a server?", a: "Six weeks in this page's example: two to count and measure, then the choice, the second link, a one-week rehearsal and the move in a weekend. The old server stays intact for one more week." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "An availability rate is not read as a percentage: it is read in hours." },
      { after: 4, text: "Never move a server without doubling the link." },
    ],
    cta: { eyebrow: "Tell us where the server is, how many computers depend on it and from how many sites: we count the hours of downtime and measure the link before any quote", title: "A server in a cupboard that goes down at every cut, branches stopped when head office loses power, or a founder in France whose company in Algeria depends on a machine nobody watches: we count, we choose the option with you, then we move in a weekend", body: "Hours of downtime counted, link measured, option chosen, written questions to the operator, second link and encrypted tunnel, rehearsal, move, monitoring and backups. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.heberger, kind: '2027', name: 'Hosting an application in Algeria or in Europe' },
      { href: L.sauvegarde, kind: '2027', name: 'If the server dies tomorrow: backups and a tested restore' },
      { href: L.interconnecter, kind: '2027', name: 'Interconnecting head office, branches and the depot' },
      { href: L.infogerance, kind: '2027', name: 'Managed IT: contract, delays, inventory, monthly report' },
    ] },
  },
  ar: {
    kind: 'مركز البيانات · الجزائر · 2027', title: "مركز بيانات في الجزائر (2027): خادم المؤسسة يعيش في خزانة بالمكتب، يتوقف عند كل انقطاع كهرباء ويسخن صيفاً، إيواء أم خادم مؤجَّر أم افتراضي، ما يُستأجَر فعلاً، الأسئلة قبل التوقيع، والخط الذي يصير حيوياً",
    dek: "«خادمنا في خزانة بالمكتب، بجانب آلة النسخ. يتوقف عند كل انقطاع كهرباء، يسخن صيفاً، وأي شخص يستطيع فصله. ينصحوننا بوضعه في مركز بيانات. ماذا يُستأجَر هناك بالضبط، هل يوجد هذا في الجزائر، ماذا نسأل قبل التوقيع، وماذا يحدث إذا انقطع الإنترنت في المكتب؟» مركز البيانات يوفّر ما يوفّره المكتب بصعوبة: الكهرباء، التبريد، الدخول المراقَب، والخطوط. لكنه ينقل الخطر: حين يغادر الخادم، يصير خط المكتب هو الحيوي.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['مركز البيانات', 'إيواء الخوادم', 'الخادم المؤجَّر', 'نسبة التوفر', 'خط النجدة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** مركز البيانات يؤجّر ما يوفّره المكتب بصعوبة: **كهرباء لا تتوقف، تبريد، دخول مراقَب، وعدة خطوط**. يمكن وضع آلتكم فيه (الإيواء، ويسمّى " + I('Housing') + "، ويُباع بوحدة الحامل)، أو استئجار خادم كامل، أو استئجار خادم افتراضي. والعرض موجود في الجزائر: في نوفمبر 2026، متعاملان على الأقل يعرضان الإيواء على موقعيهما. وقبل التوقيع، **حوّلوا نسبة التوفر إلى ساعات**: " + I('99.99%') + " في السنة تعني 53 دقيقة توقف. وحضّروا **خط إنترنت ثانياً في المكتب**: حين يغادر الخادم، يتوقف المكتب على خطه. ستة أسابيع في المثال، منها نهاية أسبوع واحدة من التوقف.",
      "هذه الصفحة موجَّهة إلى مسيّر مؤسسة يعيش خادمها، برنامج التسيير والملفات، في خزانة أو ركن من المكتب، وإلى المؤسس المقيم في فرنسا الذي تتوقف وكالاته في الجزائر على آلة لا يراقبها أحد. التعريفات آتية من مصادر علنية: مركز البيانات، قاعة الخوادم، الإيواء، وحدة الحامل، المموّج، التكرار، التوفر العالي، نقطة العطل الوحيدة، واتفاق مستوى الخدمة. وما نقوله عن متعاملَين جزائريَّين هو ما يعرضه موقعاهما في نوفمبر 2026؛ ولا نرتّب أحداً. المؤسسة وحواسيبها الـ 38 وساعات توقفها الـ 31 ورزنامتها مثال مركَّب. هذه الصفحة لا تعطي أي سعر ولا تتناول قواعد المعطيات الشخصية: راجعوا مستشاركم. وأين يوضع تطبيق موجَّه للعموم، في الجزائر أو في أوروبا، هو موضوع [دليل آخر](" + L.heberger + ").",
    ],
    sections: [
      { heading: "الخادم في المكتب أم في مركز البيانات: ست نقاط", body: [
        "الشكل يقارن، في ست نقاط، الخادم داخل خزانة والخادم في مركز بيانات.",
      ], visual: 'bureau', after: [
        "**الخزانة ليست قاعة خوادم.** قاعة الخوادم غرفة، مكيَّفة عادةً، مخصَّصة للتشغيل المتواصل للخوادم؛ والحفاظ على حرارة ورطوبة ثابتتين، في حدود ضيقة، أساسي لموثوقية الآلات. وخزانة بجانب آلة النسخ لا توفّر هذا ولا ذاك. **المموّج لا يصمد أمام الانقطاع.** استقلالية أغلب المموّجات على البطارية قصيرة، من 5 إلى 15 دقيقة عادةً: تكفي لتشغيل مصدر احتياطي أو لإيقاف العتاد بطريقة سليمة، لا لعبور ساعتين دون كهرباء. ودون مولّد خلفه ودون إيقاف آلي مضبوط، يسقط الخادم فجأة.",
        "**عُدّوا.** في المثال، في السنة الماضية: أربعة انقطاعات للكهرباء، منها واحد مساء الخميس اكتُشف صباح الأحد، وقرص مات في أوت بعد سخونة زائدة. واحد وثلاثون ساعة توقف، أي " + I('99.65%') + " من التوفر على 8760 ساعة في السنة. **متى تكفي الخزانة.** إذا كان كل من يستعمل الخادم في المكتب نفسه، ونصف يوم من التوقف يُحتمل، فحسّنوا الغرفة: تبريد خاص، مموّج يوقف الخادم بطريقة سليمة، باب مقفل، ونسخة خارج المبنى، حسب [دليل النسخ الاحتياطية](" + L.sauvegarde + "). والخادم البطيء مسألة أخرى، يعالجها [دليل الخادم البطيء](" + L.serveurlent + ").",
      ] },
      { heading: "إخراج الخادم من المكتب: القرار في ست مراحل", body: [
        "المرحلة الثالثة مبرزة: قياس خط المكتب.",
      ], visual: 'decider', after: [
        "**ثلاثة حسابات قبل أي عرض سعر.** ساعات التوقف في السنة الماضية: 31 في المثال. المستعملون حسب الموقع: 38 حاسوباً، ثلاثون في المقر وأربعة في كل وكالة من الوكالتين. وخط إنترنت المقر، مقيساً مدة أسبوعين: الصبيب الحقيقي في ساعات العمل، عدد الانقطاعات، ومدتها. في المثال، ثلاثة انقطاعات وخمس ساعات في أسبوعين: ما يكفي لمعرفة أن خطاً واحداً لن يكفي.",
        "**القاعدة.** كلما تفرّق المستعملون، وكالات، عمل عن بعد، وزبائن، كلما تبرَّر مركز البيانات: يصلون إليه كلهم بالطريقة نفسها، وعطل موقع لم يعد يوقف الآخرين. وإذا كانوا كلهم في المكان نفسه، بخط هشّ، فإخراج الخادم يضيف عطلاً بدل أن ينزع واحداً. وخط النجدة في المكتب يُحضَّر مع الكوابل وجدار الحماية، كما يصفه [دليل تركيب شبكة المؤسسة](" + L.reseau + ").",
      ] },
      { heading: "ما يوفّره مركز البيانات، في خمس طبقات", body: [
        "الطبقة المبرزة هي الكهرباء.",
      ], visual: 'fournit', after: [
        "**ما هو.** مركز البيانات منشأة، مبنى أو قاعة عادةً، مخصَّصة لإيواء التجهيزات المعلوماتية. ومركز الإيواء يوفّر المساحة، الكهرباء، التبريد، والأمن المادي لخوادم زبائنه. والكلمة التي تتكرر هي التكرار: شكل من الصمود يُبقي النظام متوفراً حين يتعطل مكوّن. **النسبة، بالساعات.** نسبة التوفر تُقرأ على سنة: " + I('99%') + " تعني 3.7 أيام توقف؛ " + I('99.9%') + " قرابة 9 ساعات؛ " + I('99.99%') + " 53 دقيقة؛ و" + I('99.999%') + " 5.3 دقائق. قارنوها بساعاتكم أنتم: 31 في المثال.",
        "**في الجزائر، في نوفمبر 2026.** " + I('Icosnet') + "، التي تقول إنها حاضرة منذ 1999 بمراكز بياناتها الخاصة في الجزائر، تبيع على موقعها إيواءً بعدد وحدات " + I('U') + "، حيث يأتي الزبون بخادمه ويستأجر المساحة، وتكتب أنها تلتزم بنسبة توفر سنوية قدرها " + I('99.99%') + " لهذا الإيواء. واتصالات الجزائر تعرض استئجار مساحة مادية في مراكز بياناتها، من " + I('1U') + " إلى الحامل الكامل ذي " + I('42U') + "، مروراً بالربع والنصف؛ وصفحتها توضح أن القدرة الكهربائية غير مشمولة، ولا تعرض نسبة. **ستة أسئلة كتابياً.** علامَ تنطبق النسبة، وماذا يحدث إن لم تُحترم؟ أي قدرة كهربائية لموضعي، مشمولة أم لا؟ أي متعاملين وأي صبيب مضمون؟ من يدخل، وفي أي ساعات؟ أي تدخلات في عين المكان، وفي أي أجل؟ وكيف تُسترجع الآلة أو البيانات، وبأي إشعار مسبق؟ واتفاق مستوى الخدمة عقد مُلزِم: إذا أُعلن مستوى أو شهادة، فاطلبوا الشهادة.",
      ] },
      { heading: "أربع صيغ: من يتكفل بماذا", body: [
        "الشكل يُظهر، لأربع صيغ، ما يبقى على عاتقكم.",
      ], visual: 'formules', after: [
        "**الإيواء.** تأتون بالآلة؛ والمتعامل يؤجّر الموضع. المساحة تُحسب بوحدة " + I('U') + "، وحدة ارتفاع الحامل: " + I('44.45') + " ملم. والحامل القياسي يضم عادةً 42 وحدة، وبعض المورّدين يبيعون نصف حامل أو ربع حامل أو مكان خادم واحد. **الخادم المؤجَّر.** في الاستضافة المخصَّصة، الزبون يستأجر خادماً كاملاً: الآلة ملك المتعامل، وأعطالها كذلك. **الخادم الافتراضي.** هو آلة افتراضية تُباع كخدمة: حصة من آلات المتعامل، تكبر مع الحاجة.",
        "**كيف نختار.** آلة حديثة، أو عتاد خاص يتطلبه برنامجكم: الإيواء. آلة شاخت: لا تنقلوها، استأجروا. حِمل متواضع مرشَّح للنمو: الخادم الافتراضي. **ما لا يتغير.** في الصيغ الأربع، تحديثات النظام والبرامج والنسخ الاحتياطية تبقى عليكم. اكتبوا اسماً أمام كل سطر من هذه الثلاثة: اسمكم، اسم تقني معلوماتية، أو اسم مقدّم خدمة بعقد، كما يصفه [دليل التسيير المفوَّض للمعلوماتية](" + L.infogerance + ").",
      ] },
      { heading: "الخادم غادر، فخط المكتب صار حيوياً", body: [
        "الشكل يُظهر المؤسسة نفسها، قبل نقل الخادم وبعده.",
      ], visual: 'lien', after: [
        "**الخطر ينتقل.** نقطة العطل الوحيدة جزء من نظام يوقف عطلُه النظام كله. قبل، كانت مأخذ الخزانة: انقطاع الكهرباء في المقر كان يوقف الحواسيب الـ 38، والوكالتان معها. وبعد، هي خط المقر: الكهرباء قد تنقطع في المقر دون إيقاف الوكالتين، لكن انقطاع الإنترنت فيه يوقف ثلاثين حاسوباً. **خطان، متعاملان.** الخط الثاني يجب أن يأتي من متعامل آخر، عبر مسار آخر إن أمكن، وأن يأخذ المشعل وحده. ويُجرَّب بفصل الأول، صباح يوم عمل، لا بقراءة الدليل.",
        "**المسار.** بين المكتب والخادم، تمر البيانات عبر نفق مشفَّر، لا عبر منفذ مفتوح على الإنترنت: وهو تركيب [دليل ربط المواقع](" + L.interconnecter + ")، وللأشخاص المتنقلين، تركيب [دليل الوصول عن بعد](" + L.acces + "). **ما يُترك في المكتب.** الملفات الثقيلة جداً التي تُفتح طوال اليوم لا تتحمل خطاً متواضعاً: قيسوا قبلاً، واحتفظوا عند الحاجة بنسخة محلية متزامنة.",
      ] },
      { heading: "ستة أسابيع، من العدّ إلى النقل، سنة 2027", body: [
        "ستة أسابيع في المثال، والأسبوعان الأولان للعدّ والقياس.",
      ], visual: 'calendrier', after: [
        "**الترتيب.** العدّ والقياس أولاً. ثم اختيار الصيغة وإرسال الأسئلة المكتوبة. ثم مضاعفة الخط وتركيب النفق قبل أن يتحرك الخادم: إذا لم يكن الخط الثاني جاهزاً، ننتظر. **التجربة.** نسخة من الخادم توضع في مركز البيانات، وخمسة أشخاص يعملون عليها أسبوعاً، من المقر ومن وكالة. وهناك تُكتشف الطابعة التي لم تعد تجيب أو الملف الثقيل جداً، لا يوم الأحد الموالي للنقل.",
        "**نهاية الأسبوع.** آخر نسخة مساء الخميس، التبديل، والتجارب يوم السبت. والخادم القديم يبقى في خزانته، مطفأً لكن كما هو، مدة أسبوع: الرجوع يعني إعادة تشغيله. **بعد ذلك.** تُسترجع نسخة احتياطية للتجربة، تُعدّ ساعات التوقف من جديد بعد ثلاثة أشهر، وتُفرَّغ الخزانة.",
      ], list: [
        "**ما يستلمه المسيّر**: ثلاثة حسابات، ساعات التوقف، المستعملون حسب الموقع، وصمود الخط؛ صيغة مختارة ومعلَّلة؛ أجوبة المتعامل المكتوبة عن الأسئلة الستة؛ خط ثانٍ مجرَّب؛ نقل مجرَّب ثم منجز في نهاية أسبوع؛ واسم أمام كل سطر يبقى على عاتقه.",
        "**ما لم تعد المؤسسة تفعله**: اكتشاف العطل صباح الأحد، إعادة تشغيل الخادم باليد بعد كل انقطاع، الاعتماد على مكيّف المكتب في أوت، وترك الخادم في متناول الجميع.",
        "**ما يُقاس**: ساعات التوقف في السنة، مقارَنة بالنسبة المكتوبة في العقد؛ انقطاعات الخط الرئيسي والتبديلات نحو الثاني؛ أجل التدخلات في عين المكان؛ وتاريخ آخر استرجاع مجرَّب.",
        "**ما تفعله Symloop**: الحسابات وقياس الخط، اختيار الصيغة، الأسئلة للمتعامل وقراءة الأجوبة، الخط الثاني والنفق المشفَّر، التجربة، النقل، ثم المراقبة والتحديثات والنسخ الاحتياطية إذا أسندتموها إلينا.",
      ], faq: [
        { q: "ما هو مركز البيانات؟", a: "مركز البيانات منشأة، مبنى أو قاعة عادةً، مخصَّصة لإيواء التجهيزات المعلوماتية. ويوفّر ما يوفّره المكتب بصعوبة: كهرباء لا تتوقف، تبريد، دخول مراقَب، وعدة خطوط." },
        { q: "هل توجد مراكز بيانات في الجزائر؟", a: "نعم. في نوفمبر 2026، " + I('Icosnet') + " واتصالات الجزائر تعرضان على موقعيهما إيواء الخوادم في مراكز بياناتهما بالجزائر، وفاعلون آخرون يعرضون خدمات سحابية. اطرحوا على كل واحد الأسئلة المكتوبة نفسها، وقارنوا الأجوبة سطراً بسطر." },
        { q: "ما هو إيواء الخوادم؟", a: "تأتون بخادمكم، والمتعامل يؤجّر الموضع: المساحة، الكهرباء، التبريد، الأمن المادي، والخط. والمساحة تُحسب بوحدة " + I('U') + "، وحدة ارتفاع الحامل، " + I('44.45') + " ملم، أو بربع حامل، نصف حامل، وحامل كامل." },
        { q: "هل يجب إخراج خادمنا من المكتب؟", a: "إذا كانت وكالات أو عاملون عن بعد أو زبائن يتوقفون عليه، والانقطاعات كلّفتكم عشرات الساعات في السنة الماضية، نعم. وإذا كان كل المستعملين في المكتب نفسه وخط الإنترنت هشّاً، فحسّنوا الغرفة أولاً." },
        { q: "إيواء، خادم مخصَّص، أم خادم افتراضي: ماذا نختار؟", a: "الإيواء إذا كانت آلتكم حديثة أو برنامجكم يتطلب عتاداً خاصاً. الخادم المخصَّص، المؤجَّر، إذا شاخت آلتكم. والخادم الافتراضي إذا كان الحِمل متواضعاً وسينمو. وفي الحالات الثلاث، النسخ الاحتياطية تبقى عليكم." },
        { q: "ماذا تعني نسبة توفر 99.99 بالمئة؟", a: "على سنة، 53 دقيقة توقف. و" + I('99.9%') + " قرابة 9 ساعات؛ و" + I('99%') + " 3.7 أيام. اسألوا علامَ تنطبق النسبة، الكهرباء أم الشبكة أم كلاهما، كيف تُقاس، وماذا ينص العقد إن لم تُحترم." },
        { q: "ماذا يحدث إذا انقطع الإنترنت في المكتب؟", a: "إذا كان الخادم في مركز البيانات، لم يعد المكتب يستطيع العمل، إلا إذا أخذ خط ثانٍ المشعل. ولهذا يُركَّب هذا الخط الثاني ويُجرَّب، عند متعامل آخر، قبل نقل الخادم." },
        { q: "هل يقوم مركز البيانات بنسخنا الاحتياطية؟", a: "لا، ليس تلقائياً. هو يوفّر المبنى، الكهرباء، التبريد، والخطوط. والنسخ الاحتياطية، نسختها في مكان آخر، وتجربة الاسترجاع تبقى على عاتقكم، إلا بخدمة مضافة في العقد." },
        { q: "كم تكلّف الاستضافة في مركز بيانات في الجزائر؟", a: "يتوقف على أربعة أسطر: المساحة، بوحدة " + I('U') + " أو بجزء من حامل؛ القدرة الكهربائية، وتُفوتَر أحياناً على حدة؛ الخط وصبيبه؛ والخدمات المضافة. اطلبوا عرض سعر سطراً بسطر، وأضيفوا إليه الخط الثاني للمكتب." },
        { q: "كم يلزم من وقت لنقل خادم؟", a: "ستة أسابيع في مثال هذه الصفحة: أسبوعان للعدّ والقياس، ثم الاختيار، الخط الثاني، تجربة من أسبوع، والنقل في نهاية أسبوع. والخادم القديم يبقى كما هو أسبوعاً إضافياً." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "نسبة التوفر لا تُقرأ بالمئة: تُقرأ بالساعات." },
      { after: 4, text: "لا يُنقل خادم دون مضاعفة الخط." },
    ],
    cta: { eyebrow: "قولوا لنا أين الخادم، كم حاسوباً يتوقف عليه، ومن كم موقع: نعدّ ساعات التوقف ونقيس الخط قبل أي عرض سعر", title: "خادم في خزانة يسقط عند كل انقطاع، وكالات تتوقف حين تنقطع الكهرباء في المقر، أو مؤسس في فرنسا تتوقف مؤسسته في الجزائر على آلة لا يراقبها أحد: نعدّ، نختار الصيغة معكم، ثم ننقل في نهاية أسبوع", body: "ساعات التوقف معدودة، الخط مقيس، الصيغة مختارة، أسئلة مكتوبة للمتعامل، خط ثانٍ ونفق مشفَّر، تجربة، نقل، مراقبة ونسخ احتياطية. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.heberger, kind: '2027', name: 'استضافة تطبيق في الجزائر أو في أوروبا' },
      { href: L.sauvegarde, kind: '2027', name: 'لو مات الخادم غداً: النسخ الاحتياطية واسترجاع مجرَّب' },
      { href: L.interconnecter, kind: '2027', name: 'ربط المقر والوكالات والمستودع' },
      { href: L.infogerance, kind: '2027', name: 'التسيير المفوَّض للمعلوماتية: العقد، الآجال، والتقرير الشهري' },
    ] },
  },
};

const KEYWORDS = "data center algérie 2027, data center algerie, datacenter algérie, data center algeria, colocation serveur algérie, housing serveur algérie, hébergement serveur entreprise algérie, serveur dédié algérie, sortir le serveur du bureau, taux de disponibilité 99,99, data center algeria 2027, server colocation algeria, مركز بيانات في الجزائر 2027, إيواء الخوادم في الجزائر, استضافة خادم المؤسسة";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
