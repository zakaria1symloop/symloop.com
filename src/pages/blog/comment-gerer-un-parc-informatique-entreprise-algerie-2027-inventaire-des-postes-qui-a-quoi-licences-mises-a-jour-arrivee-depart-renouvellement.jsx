import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-gerer-un-parc-informatique-entreprise-algerie-2027-inventaire-des-postes-qui-a-quoi-licences-mises-a-jour-arrivee-depart-renouvellement.mjs';

const SLUG = 'comment-gerer-un-parc-informatique-entreprise-algerie-2027-inventaire-des-postes-qui-a-quoi-licences-mises-a-jour-arrivee-depart-renouvellement';
const FIGURES = ['registre', 'couches', 'vie', 'ages', 'mouvements', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
  audit: '/blog/cybersecurite-entreprise-algerie-2027-audit-de-securite-informatique-ou-test-d-intrusion-ce-qu-il-regarde-rapport-priorites-corrections/',
  fichiers: '/blog/partage-de-fichiers-entreprise-algerie-2027-serveur-de-fichiers-nas-ou-cloud-droits-par-dossier-versions-acces-a-distance/',
  sauvegardes: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  messagerie: '/blog/messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365/',
};

const CONTENT = {
  fr: {
    kind: 'Parc informatique · Algérie · 2027', title: "Comment gérer un parc informatique en Algérie (2027) : personne ne sait combien de postes on a ni qui a quoi, registre, installation type, mises à jour, licences, arrivées et départs, renouvellement par cinquièmes",
    dek: "« Nous avons une quarantaine d'ordinateurs, des portables, quelques imprimantes. Personne ne sait exactement combien, ni qui a quoi. Quand un employé arrive, on lui cherche un poste pendant trois jours ; quand il part, on ne sait pas ce qu'il rend ni quels comptes il garde. Les licences, on les découvre le jour où un logiciel affiche un bandeau rouge. Et tout tombe en panne la même année. Par où commence-t-on ? » Par un registre : une ligne par machine, tenue à jour par un petit programme installé sur chaque poste. Tout le reste en découle.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Gestion de parc informatique', 'Inventaire des postes', 'Licences logicielles', 'Mises à jour', 'Arrivée et départ d’un employé', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Cinq choses, dans cet ordre. **Un registre** : une ligne par machine, avec son numéro, son utilisateur, son âge, son système et la date de sa dernière mise à jour, relevés automatiquement. **Une installation type** par métier, pour qu'un poste soit prêt en deux heures. **Des mises à jour** poussées chaque mois. **Des licences comptées** : payées, installées, utilisées. **Un renouvellement par cinquièmes** : avec quarante postes et un cycle de cinq ans, huit par an, les plus anciens d'abord. Ajoutez une procédure d'arrivée et de départ. Le premier relevé prend une semaine, et il dit par où commencer.",
      "Ce guide s'adresse au gérant d'une entreprise de vingt à deux cents postes qui n'a pas de service informatique, ou un seul informaticien débordé, et au fondateur installé en France qui veut une entreprise qui tourne sans lui. Les définitions citées viennent de sources publiques : la gestion des licences logicielles, l'administration des appareils mobiles, le correctif, le chiffrement de disque, la fin du support de Windows 10. Le parc de quarante postes, sa répartition et ses âges sont un exemple construit. Ce guide ne donne aucun prix de matériel et ne traite pas des règles sur la surveillance des employés.",
    ],
    sections: [
      { heading: "Le premier inventaire : 19 postes sur 40 demandent une action", body: [
        "La figure montre quarante postes le jour du premier relevé, un carré par machine.",
      ], visual: 'registre', after: [
        "**Ce qu'on trouve.** Le premier relevé est rarement flatteur. Dans l'exemple, sept postes tournent encore sous un système que son éditeur ne suit plus : pour Windows 10, le support a pris fin le 14 octobre 2025, sauf pour les machines inscrites à un programme payant de correctifs prolongés, lui-même limité dans le temps. Cinq postes n'ont reçu aucun correctif depuis trois mois. Quatre n'ont pas d'utilisateur connu : un placard, un ancien employé, un poste « de passage ». Trois portables ne sont pas chiffrés.",
        "**Comment on relève.** Un petit programme, l'agent, est installé sur chaque poste ; il envoie au registre le modèle, le système, les logiciels installés, l'espace disque et la date de la dernière mise à jour. Une étiquette numérotée est collée sur la machine : le même numéro figure dans le registre. À la main, dans un tableur, le registre n'est juste que le jour où on l'écrit. **Ce qu'il change.** On répond en une minute à « combien de postes, et qui a quoi », et l'on sait lesquels traiter d'abord. C'est aussi le point de départ de l'entretien décrit dans [le guide sur l'infogérance](" + L.infogerance + ").",
      ] },
      { heading: "Gérer un parc, en cinq couches", body: [
        "La couche accentuée est la première : l'inventaire.",
      ], visual: 'couches', after: [
        "**L'installation type.** Pour chaque métier, comptabilité, commercial, atelier, une configuration décrite une fois : le système, les logiciels, les réglages, les imprimantes. Un poste neuf ou réinstallé est prêt en deux heures, et un poste en panne se remplace par un poste de prêt sans que l'employé perde sa journée. Cela suppose que les fichiers de travail ne vivent pas sur le poste, mais sur un espace partagé et sauvegardé : voir [le guide sur le partage de fichiers](" + L.fichiers + "). **Les mises à jour.** Un correctif est une modification apportée à un programme existant, souvent pour corriger des défauts et des failles de sécurité ; poussé chaque mois sur tous les postes, il ferme les portes connues. Le registre signale ceux qui sont en retard.",
        "**Les licences.** Gérer ses licences, c'est gérer et optimiser l'achat, le déploiement, l'entretien, l'utilisation et le retrait des logiciels dans l'entreprise. En pratique, trois nombres par logiciel : payées, installées, utilisées. L'écart entre les deux premiers est un risque ; l'écart entre les deux derniers est de l'argent dépensé pour personne. **La sécurité.** Le chiffrement de disque protège l'information en la convertissant en un code qui ne se déchiffre pas facilement : un portable chiffré et perdu ne livre rien. Les téléphones, les tablettes et les portables s'administrent à distance, verrouillage et effacement compris. Ces points sont ceux que regarde un auditeur : voir [le guide sur l'audit de sécurité](" + L.audit + ").",
      ] },
      { heading: "Six moments dans la vie d'un poste", body: [
        "La figure donne, pour six moments, ce qu'on fait et ce qu'on note.",
      ], visual: 'vie', after: [
        "**La seconde colonne.** Beaucoup d'entreprises font les gestes de la première colonne : elles achètent, attribuent, réparent. Ce qui manque, c'est la ligne écrite à chaque fois. Sans elle, personne ne sait si le portable du commercial parti en mars a été rendu, ni quelle machine est encore sous garantie. **La panne.** Elle se note avec sa durée d'arrêt : au bout d'un an, on voit quels modèles et quels postes coûtent des journées, et le remplacement se décide sur des faits.",
        "**La fin de vie.** Un poste ne quitte pas l'entreprise avec ses données : le disque est effacé, les licences sont récupérées, et la ligne du registre est fermée avec la date et la destination, don, revente ou recyclage. **Les données.** Ce qui était sur le poste doit déjà être ailleurs ; c'est la règle du [guide sur les sauvegardes](" + L.sauvegardes + ").",
      ] },
      { heading: "L'âge du parc : 12 postes sur 40 ont dépassé cinq ans", body: [
        "La figure classe les quarante postes par âge, puis montre ce que donne un remplacement de huit postes par an.",
      ], visual: 'ages', after: [
        "**Le calcul.** Nombre de postes divisé par la durée du cycle : quarante postes, cinq ans, huit postes par an. Dans l'exemple, douze postes ont déjà dépassé cinq ans. En remplaçant chaque année les huit plus anciens, il en reste douze au début de 2028, onze en 2029, neuf en 2030, cinq en 2031, et plus aucun en 2032. Ensuite, huit postes atteignent cinq ans chaque année, et huit sont remplacés.",
        "**Pourquoi cinq ans.** Ce n'est pas une règle : c'est un choix, à faire selon l'usage. Deux repères aident à le fixer. Le système : Windows 11 exige notamment un module de sécurité TPM 2.0, et sa prise en charge officielle est limitée aux processeurs récents ; un poste trop ancien reste donc sur un système qui n'est plus suivi. Les pannes : le registre dit à partir de quel âge elles se multiplient chez vous. **Le budget.** Par cinquièmes, la dépense est la même chaque année. Ce guide ne donne aucun prix : multipliez huit par le prix du poste que vous achetez.",
      ] },
      { heading: "L'arrivée et le départ d'un employé, en six temps", body: [
        "Le premier temps est accentué : l'annonce, cinq jours avant.",
      ], visual: 'mouvements', after: [
        "**L'arrivée.** Le responsable prévient cinq jours avant, en indiquant le métier. Le poste est préparé avec l'installation type, étiqueté, et les comptes sont créés : messagerie, applications, droits sur les dossiers. Le premier matin, l'employé signe la remise et travaille. Sans annonce, il attend, et quelqu'un lui prête ses identifiants « en attendant » : c'est ainsi que naissent les comptes partagés.",
        "**Le départ.** Le registre donne la liste de ce que la personne détient : poste, téléphone, badge, comptes, licences. Le jour même, le matériel est rendu, les comptes sont fermés ou transférés, la boîte est redirigée selon la règle décrite dans [le guide sur la messagerie](" + L.messagerie + "), et les licences reviennent dans le stock. Un compte d'ancien employé resté ouvert est une porte ; une licence restée attribuée est une dépense.",
      ] },
      { heading: "Six semaines pour reprendre la main, en 2027", body: [
        "Six semaines dans l'exemple, pour quarante postes.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, le relevé.** L'agent est installé, les étiquettes sont collées, le premier registre sort avec la liste des écarts. **Semaine 2, les urgences** : systèmes hors support, portables non chiffrés, comptes d'anciens employés. **Semaines 2 et 3, l'installation type**, essayée sur trois postes.",
        "**Semaines 3 à 5, les mises à jour et les licences.** **Semaines 5 et 6, les arrivées, les départs et le plan de renouvellement.** Ensuite, c'est un entretien : une heure par mois pour lire le registre, et une décision par an sur les huit postes à remplacer. Ces durées valent pour quarante postes ; comptez davantage au-delà de cent, ou sur plusieurs sites.",
      ], list: [
        "**Ce que le gérant reçoit** : le registre, avec pour chaque poste son utilisateur, son âge et son état ; la liste des écarts classée par urgence ; le nombre de licences payées, installées et utilisées ; le plan de renouvellement sur cinq ans.",
        "**Ce que l'entreprise ne fait plus** : chercher un poste le matin d'une arrivée, découvrir une licence expirée par un bandeau rouge, laisser ouvert le compte d'un employé parti, remplacer vingt postes la même année.",
        "**Ce qui est mesuré** : postes hors support, postes en retard de mise à jour, portables non chiffrés, licences payées et non utilisées, âge moyen du parc, heures entre une arrivée et un poste prêt.",
        "**Ce que fait Symloop** : le relevé et l'étiquetage, le registre et son agent, l'installation type, les mises à jour mensuelles, le compte des licences, la procédure d'arrivée et de départ, et le plan de renouvellement.",
      ], faq: [
        { q: "Comment gérer un parc informatique ?", a: "Avec cinq choses, dans l'ordre : un registre tenu à jour automatiquement, une installation type par métier, des mises à jour mensuelles, des licences comptées, et un renouvellement par cinquièmes. Tout part du registre : on ne gère pas ce qu'on n'a pas compté." },
        { q: "Comment faire l'inventaire d'un parc informatique ?", a: "En installant sur chaque poste un petit programme qui relève le modèle, le système, les logiciels et la dernière mise à jour, et en collant sur la machine une étiquette qui porte le même numéro que dans le registre. Un tableur rempli à la main n'est juste que le jour où on l'écrit." },
        { q: "Quel logiciel pour gérer un parc informatique ?", a: "Trois fonctions suffisent : un inventaire alimenté par un agent, un outil qui pousse les mises à jour et l'installation type, et, pour les téléphones et les portables, une administration à distance. Le choix dépend de la taille du parc ; l'essentiel est que le registre se mette à jour seul." },
        { q: "Tous les combien faut-il changer les ordinateurs d'une entreprise ?", a: "Il n'y a pas de règle : c'est un choix selon l'usage. Dans notre exemple, le cycle est de cinq ans, soit un cinquième du parc par an. Deux repères : le système doit encore être suivi par son éditeur, et le registre dit à quel âge les pannes se multiplient chez vous." },
        { q: "Que faire des ordinateurs encore sous Windows 10 ?", a: "Le support de Windows 10 a pris fin le 14 octobre 2025. Trois voies : passer à Windows 11 si la machine le permet, s'inscrire au programme payant de correctifs prolongés, qui est limité dans le temps, ou remplacer le poste. En attendant, ces postes sont traités en premier." },
        { q: "Comment savoir combien de licences nous utilisons vraiment ?", a: "En comptant trois nombres par logiciel : les licences payées, les installations relevées par l'agent, et les comptes réellement utilisés ces trois derniers mois. L'écart entre payées et installées est un risque ; l'écart entre installées et utilisées est une dépense inutile." },
        { q: "Que faire quand un employé quitte l'entreprise ?", a: "Sortir du registre la liste de ce qu'il détient, puis, le jour même : matériel rendu, comptes fermés ou transférés, boîte de messagerie redirigée, licences récupérées. Sans registre, on oublie toujours quelque chose, en général un compte." },
        { q: "Que faire si un ordinateur portable est perdu ou volé ?", a: "S'il est chiffré, les données ne se lisent pas. On l'efface à distance s'il est administré, on change les mots de passe de son utilisateur, et l'on note la perte dans le registre. S'il n'était pas chiffré, il faut considérer que ce qu'il contenait a été lu." },
        { q: "Faut-il un informaticien à plein temps pour quarante postes ?", a: "Pas nécessairement. Une fois le registre et l'installation type en place, l'entretien courant tient en quelques heures par mois, confiées à une personne en interne ou à un prestataire. Ce qui compte, c'est que quelqu'un en soit explicitement chargé." },
        { q: "Combien de temps pour mettre de l'ordre dans un parc de quarante postes ?", a: "Six semaines dans notre exemple : une pour relever et étiqueter, une pour les urgences, deux pour l'installation type, trois pour les mises à jour et les licences, deux pour les procédures et le plan de renouvellement, en partie en parallèle." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "On ne gère pas ce qu'on n'a pas compté." },
      { after: 4, text: "Un compte d'ancien employé resté ouvert est une porte ; une licence restée attribuée est une dépense." },
    ],
    cta: { eyebrow: "Dites-nous combien de postes vous pensez avoir, et sur combien de sites : nous faisons le premier relevé, et vous saurez en une semaine ce que vous avez vraiment, et par où commencer", title: "Personne ne sait qui a quoi, licences découvertes au bandeau rouge, comptes d'anciens employés encore ouverts, ou fondateur en France qui veut une entreprise qui tourne sans lui : nous tenons le registre et tout ce qui en découle", body: "Relevé, registre, installation type, mises à jour, licences, arrivées et départs, plan de renouvellement. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.infogerance, kind: '2027', name: 'Infogérance : contrat, délais, supervision, rapport mensuel' },
      { href: L.audit, kind: '2027', name: 'Cybersécurité d’entreprise : audit de sécurité ou test d’intrusion' },
      { href: L.fichiers, kind: '2027', name: 'Partage de fichiers : serveur, NAS ou cloud, droits par dossier' },
      { href: L.sauvegardes, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes, restauration testée, délai de reprise' },
    ] },
  },
  en: {
    kind: 'IT fleet · Algeria · 2027', title: "How to manage a fleet of company computers in Algeria (2027): nobody knows how many machines there are or who has what, register, standard build, updates, licences, arrivals and departures, renewal by fifths",
    dek: "“We have about forty computers, some laptops, a few printers. Nobody knows exactly how many, or who has what. When an employee arrives, we look for a machine for three days; when they leave, we do not know what they hand back or which accounts they keep. Licences, we discover them the day a program shows a red banner. And everything breaks down in the same year. Where do we start?” With a register: one line per machine, kept up to date by a small program installed on each one. Everything else follows from it.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['IT asset management', 'Inventory of machines', 'Software licences', 'Updates', 'Employee arrival and departure', 'Algeria 2027'],
    intro: [
      "**Short answer.** Five things, in this order. **A register**: one line per machine, with its number, its user, its age, its system and the date of its last update, read automatically. **A standard build** per job, so that a machine is ready in two hours. **Updates** pushed every month. **Licences counted**: paid, installed, used. **A renewal by fifths**: with forty machines and a five-year cycle, eight a year, the oldest first. Add a procedure for arrivals and departures. The first inventory takes a week, and it says where to start.",
      "This guide is for the manager of a company with twenty to two hundred machines that has no IT department, or one overloaded IT person, and for the founder based in France who wants a company that runs without them. The definitions quoted come from public sources: software asset management, mobile device management, the patch, disk encryption, the end of support for Windows 10. The fleet of forty machines, its breakdown and its ages are a constructed example. This guide gives no hardware prices and does not cover the rules on monitoring employees.",
    ],
    sections: [
      { heading: "The first inventory: 19 machines out of 40 need an action", body: [
        "The figure shows forty machines on the day of the first inventory, one square per machine.",
      ], visual: 'registre', after: [
        "**What you find.** The first inventory is rarely flattering. In the example, seven machines still run a system its publisher no longer supports: for Windows 10, support ended on October 14, 2025, except for machines enrolled in a paid extended security updates programme, itself limited in time. Five machines have received no fix for three months. Four have no known user: a cupboard, a former employee, a “spare” machine. Three laptops are not encrypted.",
        "**How it is read.** A small program, the agent, is installed on each machine; it sends the register the model, the system, the installed software, the disk space and the date of the last update. A numbered label is stuck on the machine: the same number is in the register. By hand, in a spreadsheet, the register is only right on the day it is written. **What it changes.** You answer in a minute “how many machines, and who has what”, and you know which to deal with first. It is also the starting point of the upkeep described in [the guide to managed IT](" + L.infogerance + ").",
      ] },
      { heading: "Managing a fleet, in five layers", body: [
        "The accented layer is the first: the inventory.",
      ], visual: 'couches', after: [
        "**The standard build.** For each job, accounts, sales, workshop, one configuration described once: the system, the software, the settings, the printers. A new or reinstalled machine is ready in two hours, and a broken machine is swapped for a loan machine without the employee losing the day. This assumes that working files do not live on the machine, but on a shared, backed-up space: see [the guide to file sharing](" + L.fichiers + "). **Updates.** A patch is data for modifying an existing software resource such as a program or a file, often to fix bugs and security vulnerabilities; pushed every month to every machine, it closes the known doors. The register flags the machines that are running late.",
        "**Licences.** Software asset management is a business practice that involves managing and optimizing the purchase, deployment, maintenance, utilization and disposal of software within an organization. In practice, three numbers per program: paid, installed, used. The gap between the first two is a risk; the gap between the last two is money spent on nobody. **Security.** Disk encryption is a technology which protects information by converting it into code that cannot be deciphered easily: an encrypted laptop that is lost gives up nothing. Mobile device management is the administration of mobile devices, such as smartphones, tablet computers, and laptops, remotely, locking and wiping included. These are the points an auditor looks at: see [the guide to the security audit](" + L.audit + ").",
      ] },
      { heading: "Six moments in the life of a machine", body: [
        "The figure gives, for six moments, what is done and what is noted.",
      ], visual: 'vie', after: [
        "**The second column.** Many companies do the actions in the first column: they buy, assign, repair. What is missing is the line written each time. Without it, nobody knows whether the laptop of the salesperson who left in March was returned, or which machine is still under warranty. **The breakdown.** It is noted with its downtime: after a year, you see which models and which machines cost whole days, and replacement is decided on facts.",
        "**End of life.** A machine does not leave the company with its data: the disk is wiped, the licences are taken back, and the register line is closed with the date and the destination, donation, resale or recycling. **The data.** What was on the machine must already be somewhere else; that is the rule in [the guide to backups](" + L.sauvegardes + ").",
      ] },
      { heading: "The age of the fleet: 12 machines out of 40 are over five years old", body: [
        "The figure sorts the forty machines by age, then shows what replacing eight machines a year gives.",
      ], visual: 'ages', after: [
        "**The sum.** Number of machines divided by the length of the cycle: forty machines, five years, eight machines a year. In the example, twelve machines are already over five years old. Replacing the eight oldest every year, twelve remain at the start of 2028, eleven in 2029, nine in 2030, five in 2031, and none in 2032. After that, eight machines reach five years every year, and eight are replaced.",
        "**Why five years.** It is not a rule: it is a choice, to be made according to use. Two reference points help to set it. The system: Windows 11 requires features such as Trusted Platform Module (TPM) version 2.0, and its official support is limited to recent processors; a machine that is too old therefore stays on a system that is no longer supported. Breakdowns: the register tells you from what age they multiply in your company. **The budget.** By fifths, the spend is the same every year. This guide gives no price: multiply eight by the price of the machine you buy.",
      ] },
      { heading: "An employee arrives and leaves, in six steps", body: [
        "The first step is accented: the notice, five days before.",
      ], visual: 'mouvements', after: [
        "**The arrival.** The manager gives notice five days before, stating the job. The machine is prepared with the standard build, labelled, and the accounts are created: email, applications, rights on the folders. On the first morning, the employee signs the handover and works. Without notice, they wait, and someone lends them their login “for now”: that is how shared accounts are born.",
        "**The departure.** The register gives the list of what the person holds: machine, phone, badge, accounts, licences. On the day itself, the equipment is returned, the accounts are closed or transferred, the mailbox is redirected according to the rule described in [the guide to professional email](" + L.messagerie + "), and the licences go back into stock. A former employee’s account left open is a door; a licence left assigned is an expense.",
      ] },
      { heading: "Six weeks to take back control, in 2027", body: [
        "Six weeks in the example, for forty machines.",
      ], visual: 'calendrier', after: [
        "**Week 1, the inventory.** The agent is installed, the labels are stuck on, the first register comes out with the list of gaps. **Week 2, the urgent items**: systems out of support, unencrypted laptops, former employees’ accounts. **Weeks 2 and 3, the standard build**, tried on three machines.",
        "**Weeks 3 to 5, updates and licences.** **Weeks 5 and 6, arrivals, departures and the renewal plan.** After that, it is upkeep: an hour a month to read the register, and one decision a year on the eight machines to replace. These durations hold for forty machines; allow more beyond a hundred, or over several sites.",
      ], list: [
        "**What the manager receives**: the register, with for each machine its user, its age and its condition; the list of gaps sorted by urgency; the number of licences paid, installed and used; the renewal plan over five years.",
        "**What the company no longer does**: look for a machine on the morning of an arrival, discover an expired licence through a red banner, leave a departed employee’s account open, replace twenty machines in the same year.",
        "**What is measured**: machines out of support, machines late on updates, unencrypted laptops, licences paid and not used, average age of the fleet, hours between an arrival and a machine being ready.",
        "**What Symloop does**: the inventory and labelling, the register and its agent, the standard build, the monthly updates, the licence count, the arrival and departure procedure, and the renewal plan.",
      ], faq: [
        { q: "How do you manage a fleet of company computers?", a: "With five things, in order: a register kept up to date automatically, a standard build per job, monthly updates, licences counted, and a renewal by fifths. Everything starts from the register: you cannot manage what you have not counted." },
        { q: "How do you take an inventory of the computers?", a: "By installing on each machine a small program that reads the model, the system, the software and the last update, and by sticking on the machine a label carrying the same number as in the register. A spreadsheet filled in by hand is only right on the day it is written." },
        { q: "What software do you need to manage a fleet?", a: "Three functions are enough: an inventory fed by an agent, a tool that pushes updates and the standard build, and, for phones and laptops, remote administration. The choice depends on the size of the fleet; what matters is that the register updates itself." },
        { q: "How often should a company replace its computers?", a: "There is no rule: it is a choice according to use. In our example, the cycle is five years, that is a fifth of the fleet a year. Two reference points: the system must still be supported by its publisher, and the register tells you at what age breakdowns multiply in your company." },
        { q: "What should we do with computers still on Windows 10?", a: "Support for Windows 10 ended on October 14, 2025. Three routes: move to Windows 11 if the machine allows it, enrol in the paid extended security updates programme, which is limited in time, or replace the machine. In the meantime, these machines are dealt with first." },
        { q: "How do we know how many licences we really use?", a: "By counting three numbers per program: the licences paid, the installations read by the agent, and the accounts actually used over the last three months. The gap between paid and installed is a risk; the gap between installed and used is a needless expense." },
        { q: "What should be done when an employee leaves the company?", a: "Take from the register the list of what they hold, then, on the day itself: equipment returned, accounts closed or transferred, mailbox redirected, licences taken back. Without a register, something is always forgotten, generally an account." },
        { q: "What should be done if a laptop is lost or stolen?", a: "If it is encrypted, the data cannot be read. You wipe it remotely if it is managed, change its user’s passwords, and note the loss in the register. If it was not encrypted, you have to assume that what it held has been read." },
        { q: "Do forty machines need a full-time IT person?", a: "Not necessarily. Once the register and the standard build are in place, routine upkeep takes a few hours a month, given to someone in-house or to a provider. What matters is that someone is explicitly in charge of it." },
        { q: "How long does it take to put a fleet of forty machines in order?", a: "Six weeks in our example: one to inventory and label, one for the urgent items, two for the standard build, three for updates and licences, two for the procedures and the renewal plan, partly in parallel." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "You cannot manage what you have not counted." },
      { after: 4, text: "A former employee’s account left open is a door; a licence left assigned is an expense." },
    ],
    cta: { eyebrow: "Tell us how many machines you think you have, and over how many sites: we do the first inventory, and within a week you will know what you really have, and where to start", title: "Nobody knows who has what, licences discovered through a red banner, former employees’ accounts still open, or a founder in France who wants a company that runs without them: we keep the register and everything that follows from it", body: "Inventory, register, standard build, updates, licences, arrivals and departures, renewal plan. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.infogerance, kind: '2027', name: 'Managed IT: contract, response times, monitoring, monthly report' },
      { href: L.audit, kind: '2027', name: 'Company cybersecurity: security audit or penetration test' },
      { href: L.fichiers, kind: '2027', name: 'File sharing: server, NAS or cloud, rights per folder' },
      { href: L.sauvegardes, kind: '2027', name: 'If the server dies tomorrow: backups, tested restore, recovery time' },
    ] },
  },
  ar: {
    kind: 'حظيرة الحواسيب · الجزائر · 2027', title: "كيف تُسيَّر حظيرة حواسيب المؤسسة في الجزائر (2027): لا أحد يعرف كم حاسوباً عندنا ولا من عنده ماذا، سجل، تنصيب نموذجي، تحديثات، رخص، قدوم ومغادرة، وتجديد بالأخماس",
    dek: "«عندنا نحو أربعين حاسوباً، وحواسيب محمولة، وبضع طابعات. لا أحد يعرف بالضبط كم، ولا من عنده ماذا. حين يأتي عامل، نبحث له عن حاسوب ثلاثة أيام؛ وحين يغادر، لا نعرف ما يعيده ولا أي حسابات يحتفظ بها. والرخص، نكتشفها يوم يعرض برنامج شريطاً أحمر. وكل شيء يتعطل في السنة نفسها. من أين نبدأ؟» من سجل: سطر لكل حاسوب، يحدّثه برنامج صغير منصَّب على كل واحد. وكل الباقي ينتج عنه.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تسيير حظيرة الحواسيب', 'جرد الحواسيب', 'رخص البرمجيات', 'التحديثات', 'قدوم عامل ومغادرته', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** خمسة أشياء، بهذا الترتيب. **سجل**: سطر لكل حاسوب، برقمه ومستعمله وعمره ونظامه وتاريخ آخر تحديث له، تُقرأ آلياً. **تنصيب نموذجي** لكل مهنة، ليكون الحاسوب جاهزاً في ساعتين. **تحديثات** تُدفع كل شهر. **رخص معدودة**: مدفوعة، منصَّبة، ومستعمَلة. **تجديد بالأخماس**: بأربعين حاسوباً ودورة من خمس سنوات، ثمانية في السنة، الأقدم أولاً. وأضيفوا إجراءً للقدوم والمغادرة. الجرد الأول يأخذ أسبوعاً، ويقول من أين نبدأ.",
      "هذا الدليل موجَّه إلى مسيّر مؤسسة فيها من عشرين إلى مئتي حاسوب دون مصلحة إعلام آلي، أو بتقني واحد مثقَل، وإلى المؤسس المقيم في فرنسا الذي يريد مؤسسة تسير دونه. التعريفات المذكورة آتية من مصادر علنية: تسيير رخص البرمجيات، إدارة الأجهزة المحمولة، التصحيح، تشفير القرص، ونهاية دعم " + I('Windows 10') + ". حظيرة الأربعين حاسوباً وتوزيعها وأعمارها مثال مركَّب. هذا الدليل لا يعطي أي سعر للعتاد ولا يتناول قواعد مراقبة العمّال.",
    ],
    sections: [
      { heading: "الجرد الأول: 19 حاسوباً من 40 تتطلب إجراءً", body: [
        "الشكل يبيّن أربعين حاسوباً يوم الجرد الأول، مربع لكل حاسوب.",
      ], visual: 'registre', after: [
        "**ما نجده.** الجرد الأول نادراً ما يكون مُرضياً. في المثال، سبعة حواسيب ما زالت بنظام لم يعد ناشره يتابعه: فدعم " + I('Windows 10') + " انتهى يوم 14 أكتوبر 2025، إلا للحواسيب المسجَّلة في برنامج مدفوع للتصحيحات الممدَّدة، وهو نفسه محدود في الزمن. خمسة حواسيب لم تتلقَّ أي تصحيح منذ ثلاثة أشهر. أربعة دون مستعمل معروف: خزانة، عامل سابق، أو حاسوب «عابر». وثلاثة محمولة غير مشفَّرة.",
        "**كيف نجرد.** برنامج صغير يُنصَّب على كل حاسوب؛ يرسل إلى السجل الطراز، النظام، البرامج المنصَّبة، مساحة القرص، وتاريخ آخر تحديث. وملصق مرقَّم يوضع على الحاسوب: الرقم نفسه موجود في السجل. وباليد، في جدول، لا يصحّ السجل إلا يوم يُكتب. **ما يغيّره.** نجيب في دقيقة عن «كم حاسوباً، ومن عنده ماذا»، ونعرف أيّها يُعالَج أولاً. وهو كذلك نقطة انطلاق الصيانة الموصوفة في [دليل تسيير الإعلام الآلي](" + L.infogerance + ").",
      ] },
      { heading: "تسيير حظيرة، في خمس طبقات", body: [
        "الطبقة المبرزة هي الأولى: الجرد.",
      ], visual: 'couches', after: [
        "**التنصيب النموذجي.** لكل مهنة، المحاسبة، التجارة، الورشة، إعداد يوصف مرة واحدة: النظام، البرامج، الضبط، والطابعات. الحاسوب الجديد أو المعاد تنصيبه جاهز في ساعتين، والحاسوب المعطَّل يُعوَّض بحاسوب إعارة دون أن يخسر العامل يومه. وهذا يفترض أن ملفات العمل لا تعيش على الحاسوب، بل في فضاء مشترك ومنسوخ احتياطياً: انظر [دليل مشاركة الملفات](" + L.fichiers + "). **التحديثات.** التصحيح تعديل يُدخل على برنامج موجود، غالباً لإصلاح العيوب والثغرات الأمنية؛ وحين يُدفع كل شهر إلى كل الحواسيب، يغلق الأبواب المعروفة. والسجل ينبّه إلى المتأخرة منها.",
        "**الرخص.** تسيير الرخص هو تسيير شراء البرمجيات ونشرها وصيانتها واستعمالها وسحبها في المؤسسة، وتحسين ذلك. وعملياً، ثلاثة أعداد لكل برنامج: المدفوعة، المنصَّبة، والمستعمَلة. الفارق بين الأولين خطر؛ والفارق بين الأخيرين مال يُنفق لا لأحد. **الأمن.** تشفير القرص يحمي المعلومة بتحويلها إلى رمز لا يُفكّ بسهولة: المحمول المشفَّر الضائع لا يسلّم شيئاً. والهواتف واللوحات والمحمولة تُدار عن بعد، بما في ذلك القفل والمحو. وهذه هي النقاط التي ينظر فيها المدقِّق: انظر [دليل التدقيق الأمني](" + L.audit + ").",
      ] },
      { heading: "ست لحظات في حياة حاسوب", body: [
        "الشكل يعطي، لست لحظات، ما نفعله وما نسجّله.",
      ], visual: 'vie', after: [
        "**العمود الثاني.** مؤسسات كثيرة تقوم بحركات العمود الأول: تشتري، تسند، وتصلح. وما ينقص هو السطر المكتوب في كل مرة. ودونه، لا أحد يعرف هل أُعيد محمول التاجر الذي غادر في مارس، ولا أي حاسوب ما زال تحت الضمان. **العطل.** يُسجَّل مع مدة توقفه: وبعد سنة، نرى أي الطرازات وأي الحواسيب تكلّف أياماً، ويُقرَّر التعويض على وقائع.",
        "**نهاية العمر.** الحاسوب لا يغادر المؤسسة ببياناته: القرص يُمحى، الرخص تُستعاد، وسطر السجل يُغلق بالتاريخ والوجهة، هبة أو بيع أو إعادة تدوير. **البيانات.** ما كان على الحاسوب يجب أن يكون أصلاً في مكان آخر؛ وهي قاعدة [دليل النسخ الاحتياطية](" + L.sauvegardes + ").",
      ] },
      { heading: "عمر الحظيرة: 12 حاسوباً من 40 تجاوزت خمس سنوات", body: [
        "الشكل يرتّب الحواسيب الأربعين حسب العمر، ثم يبيّن ما يعطيه استبدال ثمانية حواسيب في السنة.",
      ], visual: 'ages', after: [
        "**الحساب.** عدد الحواسيب مقسوماً على مدة الدورة: أربعون حاسوباً، خمس سنوات، ثمانية حواسيب في السنة. في المثال، اثنا عشر حاسوباً تجاوزت خمس سنوات. وباستبدال الثمانية الأقدم كل سنة، يبقى اثنا عشر في بداية 2028، أحد عشر في 2029، تسعة في 2030، خمسة في 2031، ولا شيء في 2032. وبعدها، ثمانية حواسيب تبلغ خمس سنوات كل سنة، وثمانية تُستبدل.",
        "**لماذا خمس سنوات.** ليست قاعدة: هي اختيار، حسب الاستعمال. ومعلَمان يساعدان على تحديده. النظام: " + I('Windows 11') + " يشترط خاصة وحدة الأمان " + I('TPM 2.0') + "، ودعمه الرسمي محصور في المعالجات الحديثة؛ فالحاسوب القديم جداً يبقى على نظام لم يعد متابَعاً. والأعطال: السجل يقول من أي عمر تتكاثر عندكم. **الميزانية.** بالأخماس، النفقة هي نفسها كل سنة. وهذا الدليل لا يعطي أي سعر: اضربوا ثمانية في سعر الحاسوب الذي تشترونه.",
      ] },
      { heading: "قدوم عامل ومغادرته، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: الإعلام، خمسة أيام قبل.",
      ], visual: 'mouvements', after: [
        "**القدوم.** المسؤول يُعلم خمسة أيام قبل، مع ذكر المهنة. الحاسوب يُحضَّر بالتنصيب النموذجي، يُلصق عليه رقمه، وتُنشأ الحسابات: البريد، التطبيقات، والصلاحيات على المجلدات. وفي الصباح الأول، يوقّع العامل على التسليم ويعمل. ودون إعلام، ينتظر، ويعيره أحدهم معرّفاته «مؤقتاً»: وهكذا تولد الحسابات المشتركة.",
        "**المغادرة.** السجل يعطي قائمة ما يحوزه الشخص: حاسوب، هاتف، شارة، حسابات، ورخص. وفي اليوم نفسه، يُعاد العتاد، تُغلق الحسابات أو تُحوَّل، تُعاد توجيه العلبة حسب القاعدة الموصوفة في [دليل البريد المهني](" + L.messagerie + ")، وتعود الرخص إلى المخزون. حساب عامل سابق بقي مفتوحاً باب؛ ورخصة بقيت مسنَدة نفقة.",
      ] },
      { heading: "ستة أسابيع لاستعادة التحكّم، سنة 2027", body: [
        "ستة أسابيع في المثال، لأربعين حاسوباً.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الجرد.** البرنامج يُنصَّب، الملصقات توضع، والسجل الأول يخرج مع قائمة الفوارق. **الأسبوع 2، المستعجل**: أنظمة خارج الدعم، محمولة غير مشفَّرة، وحسابات عمّال سابقين. **الأسبوعان 2 و3، التنصيب النموذجي**، يُجرَّب على ثلاثة حواسيب.",
        "**الأسابيع من 3 إلى 5، التحديثات والرخص.** **الأسبوعان 5 و6، القدوم والمغادرة ومخطط التجديد.** وبعدها، هي صيانة: ساعة في الشهر لقراءة السجل، وقرار في السنة حول الحواسيب الثمانية التي تُستبدل. هذه المدد لأربعين حاسوباً؛ واحسبوا أكثر فوق المئة، أو في عدة مواقع.",
      ], list: [
        "**ما يستلمه المسيّر**: السجل، ومعه لكل حاسوب مستعمله وعمره وحالته؛ قائمة الفوارق مرتَّبة حسب الاستعجال؛ عدد الرخص المدفوعة والمنصَّبة والمستعمَلة؛ ومخطط التجديد على خمس سنوات.",
        "**ما لم تعد المؤسسة تفعله**: البحث عن حاسوب صباح قدوم عامل، اكتشاف رخصة منتهية بشريط أحمر، ترك حساب عامل مغادر مفتوحاً، واستبدال عشرين حاسوباً في السنة نفسها.",
        "**ما يُقاس**: الحواسيب خارج الدعم، المتأخرة في التحديث، المحمولة غير المشفَّرة، الرخص المدفوعة وغير المستعمَلة، متوسط عمر الحظيرة، والساعات بين القدوم وحاسوب جاهز.",
        "**ما تفعله Symloop**: الجرد والملصقات، السجل وبرنامجه، التنصيب النموذجي، التحديثات الشهرية، عدّ الرخص، إجراء القدوم والمغادرة، ومخطط التجديد.",
      ], faq: [
        { q: "كيف تُسيَّر حظيرة الحواسيب؟", a: "بخمسة أشياء، بالترتيب: سجل يُحدَّث آلياً، تنصيب نموذجي لكل مهنة، تحديثات شهرية، رخص معدودة، وتجديد بالأخماس. وكل شيء ينطلق من السجل: لا نسيّر ما لم نعدّه." },
        { q: "كيف يُنجز جرد الحواسيب؟", a: "بتنصيب برنامج صغير على كل حاسوب يقرأ الطراز والنظام والبرامج وآخر تحديث، وبوضع ملصق على الحاسوب يحمل الرقم نفسه الموجود في السجل. والجدول المملوء باليد لا يصحّ إلا يوم يُكتب." },
        { q: "أي برنامج لتسيير حظيرة الحواسيب؟", a: "ثلاث وظائف تكفي: جرد يغذّيه برنامج منصَّب، أداة تدفع التحديثات والتنصيب النموذجي، وللهواتف والمحمولة إدارة عن بعد. والاختيار يتوقف على حجم الحظيرة؛ والأهم أن يتحدَّث السجل وحده." },
        { q: "كل كم يجب تغيير حواسيب المؤسسة؟", a: "لا توجد قاعدة: هو اختيار حسب الاستعمال. في مثالنا، الدورة خمس سنوات، أي خمس الحظيرة في السنة. ومعلَمان: النظام يجب أن يبقى متابَعاً من ناشره، والسجل يقول في أي عمر تتكاثر الأعطال عندكم." },
        { q: "ماذا نفعل بالحواسيب التي ما زالت على Windows 10؟", a: "دعم " + I('Windows 10') + " انتهى يوم 14 أكتوبر 2025. ثلاثة طرق: الانتقال إلى " + I('Windows 11') + " إذا كان الحاسوب يسمح، التسجيل في البرنامج المدفوع للتصحيحات الممدَّدة، وهو محدود في الزمن، أو استبدال الحاسوب. وفي الانتظار، تُعالَج هذه الحواسيب أولاً." },
        { q: "كيف نعرف كم رخصة نستعمل فعلاً؟", a: "بعدّ ثلاثة أعداد لكل برنامج: الرخص المدفوعة، التنصيبات التي يقرؤها البرنامج المنصَّب، والحسابات المستعمَلة فعلاً في الأشهر الثلاثة الأخيرة. الفارق بين المدفوعة والمنصَّبة خطر؛ والفارق بين المنصَّبة والمستعمَلة نفقة بلا فائدة." },
        { q: "ماذا نفعل حين يغادر عامل المؤسسة؟", a: "نُخرج من السجل قائمة ما يحوزه، ثم، في اليوم نفسه: عتاد يُعاد، حسابات تُغلق أو تُحوَّل، علبة بريد تُعاد توجيهها، ورخص تُستعاد. ودون سجل، يُنسى دائماً شيء، وهو في الغالب حساب." },
        { q: "ماذا نفعل إذا ضاع حاسوب محمول أو سُرق؟", a: "إذا كان مشفَّراً، فالبيانات لا تُقرأ. نمحوه عن بعد إذا كان مُداراً، نغيّر كلمات مرور مستعمله، ونسجّل الضياع في السجل. وإذا لم يكن مشفَّراً، يجب اعتبار أن ما كان فيه قد قُرئ." },
        { q: "هل يلزم تقني بدوام كامل لأربعين حاسوباً؟", a: "ليس بالضرورة. حين يوضع السجل والتنصيب النموذجي، تأخذ الصيانة اليومية بضع ساعات في الشهر، تُسند إلى شخص في الداخل أو إلى متعهّد. والمهم أن يكون أحد مكلَّفاً بها صراحة." },
        { q: "كم من الوقت لترتيب حظيرة من أربعين حاسوباً؟", a: "ستة أسابيع في مثالنا: أسبوع للجرد والملصقات، أسبوع للمستعجل، أسبوعان للتنصيب النموذجي، ثلاثة للتحديثات والرخص، وأسبوعان للإجراءات ومخطط التجديد، وبعضها بالتوازي." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "لا نسيّر ما لم نعدّه." },
      { after: 4, text: "حساب عامل سابق بقي مفتوحاً باب؛ ورخصة بقيت مسنَدة نفقة." },
    ],
    cta: { eyebrow: "قولوا لنا كم حاسوباً تظنون أنه عندكم، وفي كم موقعاً: ننجز الجرد الأول، وتعرفون في أسبوع ما عندكم فعلاً، ومن أين تبدؤون", title: "لا أحد يعرف من عنده ماذا، رخص تُكتشف بالشريط الأحمر، حسابات عمّال سابقين ما زالت مفتوحة، أو مؤسس في فرنسا يريد مؤسسة تسير دونه: نمسك السجل وكل ما ينتج عنه", body: "جرد، سجل، تنصيب نموذجي، تحديثات، رخص، قدوم ومغادرة، ومخطط تجديد. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.infogerance, kind: '2027', name: 'تسيير الإعلام الآلي: العقد، الآجال، المراقبة، والتقرير الشهري' },
      { href: L.audit, kind: '2027', name: 'الأمن السيبراني للمؤسسة: تدقيق أمني أم اختبار اختراق' },
      { href: L.fichiers, kind: '2027', name: 'مشاركة الملفات: خادم، NAS أم سحابة، وصلاحيات لكل مجلد' },
      { href: L.sauvegardes, kind: '2027', name: 'إذا مات الخادم غداً: النسخ الاحتياطية، الاسترجاع المجرَّب، أجل الاستئناف' },
    ] },
  },
};

const KEYWORDS = "comment gérer un parc informatique 2027, gestion de parc informatique algérie, inventaire parc informatique entreprise, logiciel gestion parc informatique, renouvellement des ordinateurs entreprise, windows 10 fin de support entreprise, gestion des licences logicielles, départ d'un employé informatique, arrivée nouvel employé poste de travail, chiffrement ordinateur portable entreprise, how to manage company computers algeria 2027, it asset management small business, كيف تسير حظيرة الحواسيب 2027, جرد حواسيب المؤسسة, تسيير رخص البرمجيات";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
