import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture.mjs';

const SLUG = 'comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture';
const FIGURES = ['accueil', 'etapes', 'couches', 'besoins', 'lecture', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  fichiers: '/blog/partage-de-fichiers-entreprise-algerie-2027-serveur-de-fichiers-nas-ou-cloud-droits-par-dossier-versions-acces-a-distance/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  parc: '/blog/comment-gerer-un-parc-informatique-entreprise-algerie-2027-inventaire-des-postes-qui-a-quoi-licences-mises-a-jour-arrivee-depart-renouvellement/',
  achat: '/blog/tout-le-monde-achete-et-personne-ne-sait-combien-on-a-depense-demandes-d-achat-application-algerie-2027-approbation-budget-engage-bon-commande/',
  digitaliser: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/',
  portail: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
};

const CONTENT = {
  fr: {
    kind: 'Intranet d’entreprise · Algérie · 2027', title: "Comment créer un intranet d'entreprise en Algérie (2027) : les notes de service se perdent dans les groupes de messagerie, cinq blocs, documents en vigueur, annuaire, demandes internes suivies, accusé de lecture",
    dek: "« Les notes de service partent dans un groupe WhatsApp et sont enfouies le lendemain. La dernière version de la procédure, personne ne sait dans quel dossier elle est. Un nouvel employé met trois semaines à savoir à qui demander quoi, et une demande de matériel est un papier qui se promène. On me dit qu'il faut un intranet. C'est quoi, concrètement, et comment en créer un que les gens ouvrent vraiment ? » Cinq blocs, un responsable par bloc, rempli avant d'ouvrir, et une mesure : qui a lu.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Intranet d’entreprise', 'Notes de service', 'Demandes internes', 'Annuaire d’entreprise', 'Communication interne', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un intranet est l'endroit, réservé à l'entreprise, où se trouve la version qui fait foi. Créez-le en six temps : **listez** les dix questions qu'on vous pose le plus souvent ; **choisissez** cinq blocs, notes de service, documents, annuaire, demandes, applications ; **nommez** un responsable par bloc ; **remplissez** avant d'ouvrir ; **ouvrez** avec une vraie note et un accusé de lecture ; **élaguez** chaque mois. L'outil compte moins que ces six temps : une suite bureautique en ligne que vous payez déjà suffit souvent pour commencer. Dans notre exemple, une note atteint 60 % des destinataires en deux jours, et 91 % après une relance ciblée. Comptez six semaines.",
      "Ce guide s'adresse au gérant d'une entreprise de vingt à quelques centaines de personnes, sur un ou plusieurs sites, et au fondateur installé en France qui veut que l'information circule sans lui. Les définitions citées viennent de sources publiques : l'intranet, l'extranet, l'authentification unique, la communication interne, le flux de travail. L'entreprise de 45 personnes, sa page d'accueil et ses chiffres de lecture sont un exemple construit. Ce guide ne traite ni de paie ni de droit du travail : la demande d'absence y est un exemple de circuit, pas une règle.",
    ],
    sections: [
      { heading: "La page d'accueil d'un intranet : cinq blocs, pas vingt", body: [
        "La figure montre la page d'accueil d'un intranet, avec ses cinq blocs.",
      ], visual: 'accueil', after: [
        "**Ce que c'est.** Un intranet est un réseau informatique qui sert, à l'intérieur d'une organisation, à partager l'information, à communiquer plus facilement et à donner accès aux outils de travail. Concrètement : un site réservé aux employés, où chacun se connecte avec son propre compte. Ce n'est pas un extranet, qui est un réseau privé contrôlé ouvert à des partenaires extérieurs : pour vos clients ou vos revendeurs, c'est un portail, décrit dans [le guide du portail de commande](" + L.portail + ").",
        "**Cinq blocs.** Les notes de service, datées, avec un accusé de lecture pour celles qui engagent. Les demandes, avec leur état. Les documents, dans leur seule version en vigueur. L'annuaire : qui fait quoi, sur quel site, et qui remplace qui. Les applications : une porte d'entrée. **Pourquoi pas vingt.** Chaque bloc demande une personne qui le tient à jour. Un bloc sans responsable affiche au bout de quelques mois des informations fausses, et c'est toute la page qui perd sa valeur : mieux vaut cinq blocs vrais que vingt blocs approximatifs.",
      ] },
      { heading: "Créer un intranet, dans cet ordre", body: [
        "Le premier temps est accentué : lister les questions.",
      ], visual: 'etapes', after: [
        "**Lister.** Demandez à trois personnes, l'accueil, l'administration, le responsable d'atelier ou de magasin, quelles questions reviennent chaque semaine : où est le modèle de bon, qui signe cette demande, quels sont les horaires de tel site. Ces dix questions sont le plan de votre intranet. **Choisir, nommer.** Cinq blocs au plus, et un nom en face de chacun.",
        "**Remplir avant d'ouvrir.** Une page vide le premier jour, et personne ne revient le deuxième. On ouvre quand les procédures en vigueur, les modèles et l'annuaire y sont. **Ouvrir avec une vraie note.** Pas une annonce de l'intranet : une information que tout le monde attend, publiée là et nulle part ailleurs. **Élaguer.** Chaque mois, le responsable retire ce qui est périmé ; la mesure dit quelles pages personne n'ouvre.",
      ] },
      { heading: "Un intranet qui sert, en cinq couches", body: [
        "La couche accentuée est celle des contenus.",
      ], visual: 'couches', after: [
        "**Les comptes.** Un compte par personne, jamais partagé, fermé le jour du départ : c'est la procédure d'arrivée et de départ décrite dans [le guide sur le parc informatique](" + L.parc + "). L'authentification unique permet de se connecter une seule fois, avec un seul identifiant, à plusieurs logiciels : l'intranet devient la porte d'entrée des applications. Les droits se donnent par service et par site, comme dans [le guide sur les rôles et les droits](" + L.roles + ").",
        "**Les contenus et la recherche.** Chaque page porte un responsable et une date de revue. Les documents eux-mêmes restent rangés dans l'espace de fichiers de l'entreprise, voir [le guide sur le partage de fichiers](" + L.fichiers + "), et l'intranet pointe vers la version en vigueur. Une seule barre de recherche trouve une procédure, une personne ou un formulaire ; ce qui est tapé et jamais trouvé est relevé : c'est la liste de ce qui manque.",
      ] },
      { heading: "Six situations, aujourd'hui et avec un intranet", body: [
        "La figure compare six situations ordinaires, avant et après.",
      ], visual: 'besoins', after: [
        "**Les demandes.** Un flux de travail est un enchaînement d'activités organisé et répétable. Pour une demande de matériel : un formulaire, le responsable qui valide, le magasin qui remet, et un état que le demandeur voit à chaque étape. Commencez par deux formulaires, ceux qui produisent le plus de papier. Quand la demande engage une dépense, le circuit est celui du [guide sur les demandes d'achat](" + L.achat + ").",
        "**Le nouvel employé.** Une page lui est réservée : ses comptes, les dix documents à lire, les personnes à connaître, les demandes qu'il peut faire. Les semaines passées à comprendre qui fait quoi se réduisent à quelques jours. **Ce que l'intranet ne remplace pas.** La messagerie reste là pour la conversation ; l'intranet garde ce qui doit rester vrai et retrouvable. La note part toujours sur le téléphone de chacun, mais sous la forme d'un lien vers la page qui fait foi.",
      ] },
      { heading: "Qui a lu la note : 60 % au deuxième jour, 91 % après une relance", body: [
        "La figure suit le nombre de lecteurs d'une note pendant une semaine.",
      ], visual: 'lecture', after: [
        "**Mesurer la lecture.** La communication interne est la fonction chargée de faire circuler l'information entre les membres d'une organisation ; elle se mesure. Dans l'exemple, une note publiée un lundi est lue par 21 personnes sur 45 le mardi, 27 le mercredi : 60 %. Sans rien faire, la courbe s'aplatit vers 30. Une relance envoyée le mercredi aux seuls 18 qui n'ont pas lu amène 41 lecteurs le lundi suivant : 91 %. Les quatre derniers se voient en personne.",
        "**Un accusé de lecture, pas un contrôle.** Le bouton « j'ai lu » se réserve aux notes qui engagent : une consigne de sécurité, une nouvelle procédure, un changement d'horaires. L'appliquer à tout le rend sans valeur. **Les autres mesures.** Les pages jamais ouvertes, les recherches sans réponse, le délai moyen d'une demande : quatre chiffres par mois suffisent à savoir si l'intranet sert.",
      ] },
      { heading: "Six semaines jusqu'à la première note lue, en 2027", body: [
        "Six semaines dans l'exemple, dont trois pour les contenus.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, les questions et les blocs.** **Semaine 2, les comptes** et la connexion unique. **Semaines 2 à 4, les contenus** : c'est le vrai travail, et il revient à vos responsables, pas à un prestataire. **Semaines 4 et 5, deux formulaires de demande.** **Semaine 6, l'ouverture**, avec une vraie note et sa mesure.",
        "**Quel outil.** Si l'entreprise paie déjà une suite bureautique en ligne, son outil de sites internes suffit souvent pour commencer. Le sur-mesure se justifie quand les demandes doivent parler au logiciel de gestion, quand il y a plusieurs sites et plusieurs langues, ou quand l'intranet devient l'accueil de toutes les applications. C'est une étape de la feuille de route décrite dans [le guide pour digitaliser une PME](" + L.digitaliser + ").",
      ], list: [
        "**Ce que le gérant reçoit** : la page d'accueil et ses cinq blocs, le nom du responsable de chacun, deux formulaires de demande avec leur circuit, et chaque mois quatre chiffres : lectures, pages jamais ouvertes, recherches sans réponse, délai des demandes.",
        "**Ce que l'entreprise ne fait plus** : envoyer une consigne dans un groupe et espérer, chercher la bonne version d'une procédure, faire signer un papier qui se perd, expliquer dix fois les mêmes choses à chaque arrivée.",
        "**Ce qui est mesuré** : taux de lecture des notes qui engagent, part des pages revues à leur date, recherches sans résultat, jours entre une demande et sa réponse.",
        "**Ce que fait Symloop** : le cadrage à partir de vos dix questions, les comptes et la connexion unique, la page d'accueil et la recherche, les formulaires de demande et leur circuit, la mesure ; sur votre suite bureautique quand elle suffit, sur mesure quand l'intranet doit parler à vos applications.",
      ], faq: [
        { q: "Comment créer un intranet d'entreprise ?", a: "En six temps : lister les dix questions qui reviennent le plus, choisir cinq blocs, nommer un responsable par bloc, remplir avant d'ouvrir, ouvrir avec une vraie note de service, élaguer chaque mois. L'outil se choisit après, et compte moins que les responsables." },
        { q: "C'est quoi un intranet, concrètement ?", a: "Un site réservé aux employés, où chacun se connecte avec son compte. On y trouve les notes de service, les documents dans leur version en vigueur, l'annuaire, les demandes internes et l'accès aux applications. C'est l'endroit où se trouve la version qui fait foi." },
        { q: "Quelle différence entre un intranet et un groupe WhatsApp ?", a: "Le groupe sert à converser : un message chasse l'autre, et l'on ne sait pas qui a lu. L'intranet garde ce qui doit rester vrai et retrouvable : une note datée, une procédure en vigueur, l'état d'une demande. Les deux se complètent : le message porte le lien vers la page." },
        { q: "Quel outil choisir pour créer un intranet ?", a: "Si vous payez déjà une suite bureautique en ligne, son outil de sites internes suffit souvent pour commencer. Le sur-mesure se justifie quand les demandes doivent être reliées à votre logiciel de gestion, ou quand l'intranet devient la porte d'entrée de toutes vos applications." },
        { q: "Que mettre dans un intranet ?", a: "Cinq blocs : les notes de service, les documents en vigueur, l'annuaire avec les remplaçants, les demandes internes avec leur état, et les liens vers les applications. Partez des dix questions qu'on vous pose chaque semaine : ce sont elles qui disent quoi y mettre." },
        { q: "Pourquoi personne n'utilise notre intranet ?", a: "En général pour trois raisons : il a ouvert vide, personne n'est responsable de le tenir à jour, et rien ne s'y trouve qu'on ne puisse obtenir ailleurs. Le remède : publier là, et seulement là, ce que tout le monde attend, et retirer ce qui est périmé." },
        { q: "Comment savoir si une note de service a été lue ?", a: "Avec un bouton « j'ai lu » sur la note, réservé à celles qui engagent. Il donne le taux de lecture et la liste de ceux qui n'ont pas lu, que l'on relance seuls. Dans notre exemple, on passe de 60 % à 91 % avec une relance." },
        { q: "Peut-on consulter l'intranet depuis un téléphone ?", a: "Oui, et il faut le concevoir d'abord pour cela : une partie des employés, sur le terrain, en atelier ou en magasin, n'a que son téléphone. La connexion se fait avec le compte de chacun, et les pages doivent se lire sur un petit écran." },
        { q: "Combien de temps faut-il pour créer un intranet ?", a: "Six semaines dans notre exemple : une pour les questions et les blocs, une pour les comptes, trois pour les contenus, deux pour les formulaires de demande, en partie en parallèle. Les contenus sont le vrai travail, et ils reviennent à vos équipes." },
        { q: "Un intranet est-il utile pour une entreprise de vingt personnes ?", a: "Oui dès que les mêmes questions reviennent chaque semaine, qu'il y a plus d'un site, ou que les arrivées sont fréquentes. À vingt personnes, cinq blocs simples suffisent, sur un outil que vous avez déjà." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Mieux vaut cinq blocs vrais que vingt blocs approximatifs." },
      { after: 4, text: "Une note de service n'est pas faite quand elle est envoyée : elle est faite quand ceux qu'elle concerne l'ont lue." },
    ],
    cta: { eyebrow: "Envoyez-nous les dix questions qu'on vous pose chaque semaine et le nombre de sites : nous vous disons quels blocs il vous faut, et sur quel outil commencer", title: "Notes de service enfouies, trois versions de la même procédure, demandes sur papier, ou fondateur en France qui veut que l'information circule sans lui : nous construisons l'intranet autour de vos questions, et nous mesurons qui a lu", body: "Cadrage, comptes et connexion unique, page d'accueil, recherche, formulaires de demande, mesure. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.fichiers, kind: '2027', name: 'Partage de fichiers : serveur, NAS ou cloud, droits par dossier, versions' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi, qui modifie quoi' },
      { href: L.achat, kind: '2027', name: 'Demandes d’achat : approbation, budget engagé, bon de commande' },
      { href: L.digitaliser, kind: '2027', name: 'Digitaliser une PME : feuille de route sur douze mois' },
    ] },
  },
  en: {
    kind: 'Company intranet · Algeria · 2027', title: "How to create a company intranet in Algeria (2027): memos get lost in messaging groups, five blocks, current documents, a directory, internal requests you can follow, read receipts",
    dek: "“Memos go out in a WhatsApp group and are buried the next day. The latest version of the procedure, nobody knows which folder it is in. A new employee takes three weeks to learn who to ask for what, and an equipment request is a piece of paper wandering about. I am told we need an intranet. What is it, in practice, and how do we create one that people actually open?” Five blocks, one owner per block, filled before it opens, and one measurement: who has read it.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Company intranet', 'Memos', 'Internal requests', 'Company directory', 'Internal communications', 'Algeria 2027'],
    intro: [
      "**Short answer.** An intranet is the place, reserved for the company, where the authoritative version is. Create it in six steps: **list** the ten questions you are asked most often; **choose** five blocks, memos, documents, directory, requests, applications; **name** one owner per block; **fill** it before opening; **open** with a real memo and a read receipt; **prune** every month. The tool matters less than these six steps: an online office suite you already pay for is often enough to start. In our example, a memo reaches 60 % of recipients in two days, and 91 % after a targeted reminder. Allow six weeks.",
      "This guide is for the manager of a company of twenty to a few hundred people, on one or several sites, and for the founder based in France who wants information to circulate without them. The definitions quoted come from public sources: the intranet, the extranet, single sign-on, internal communications, the workflow. The company of 45 people, its home page and its reading figures are a constructed example. This guide covers neither payroll nor labour law: the absence request is an example of a route, not a rule.",
    ],
    sections: [
      { heading: "The home page of an intranet: five blocks, not twenty", body: [
        "The figure shows the home page of an intranet, with its five blocks.",
      ], visual: 'accueil', after: [
        "**What it is.** An intranet is a computer network for sharing information, easier communication and access to working tools within an organization. In practice: a site reserved for employees, where each person signs in with their own account. It is not an extranet, which is a controlled private network that allows communication with business partners: for your customers or resellers, that is a portal, described in [the guide to the ordering portal](" + L.portail + ").",
        "**Five blocks.** Memos, dated, with a read receipt for those that commit people. Requests, with their status. Documents, in their one current version. The directory: who does what, on which site, and who stands in for whom. Applications: one way in. **Why not twenty.** Each block needs a person who keeps it up to date. A block with no owner shows wrong information after a few months, and the whole page loses its value: five true blocks are better than twenty approximate ones.",
      ] },
      { heading: "Creating an intranet, in this order", body: [
        "The first step is accented: list the questions.",
      ], visual: 'etapes', after: [
        "**List.** Ask three people, reception, administration, the workshop or shop manager, which questions come back every week: where is the form template, who signs this request, what are the opening hours of that site. Those ten questions are the plan of your intranet. **Choose, name.** Five blocks at most, and a name against each.",
        "**Fill before opening.** An empty page on day one, and nobody comes back on day two. You open when the procedures in force, the templates and the directory are there. **Open with a real memo.** Not an announcement of the intranet: a piece of information everybody is waiting for, published there and nowhere else. **Prune.** Every month, the owner removes what is out of date; measurement says which pages nobody opens.",
      ] },
      { heading: "An intranet that is used, in five layers", body: [
        "The accented layer is content.",
      ], visual: 'couches', after: [
        "**Accounts.** One account per person, never shared, closed on the day they leave: this is the arrival and departure procedure described in [the guide to the IT fleet](" + L.parc + "). Single sign-on is an authentication scheme that allows a user to log in with a single ID to several software systems: the intranet becomes the way in to the applications. Rights are given by department and by site, as in [the guide to roles and rights](" + L.roles + ").",
        "**Content and search.** Each page carries an owner and a review date. The documents themselves stay in the company's file space, see [the guide to file sharing](" + L.fichiers + "), and the intranet points to the current version. A single search bar finds a procedure, a person or a form; what is typed and never found is recorded: that is the list of what is missing.",
      ] },
      { heading: "Six situations, today and with an intranet", body: [
        "The figure compares six ordinary situations, before and after.",
      ], visual: 'besoins', after: [
        "**Requests.** A workflow is an orchestrated and repeatable pattern of activity. For an equipment request: a form, the manager who approves, the store that hands it over, and a status the requester sees at each step. Start with two forms, the ones that produce the most paper. When the request commits a spend, the route is that of [the guide to purchase requests](" + L.achat + ").",
        "**The new employee.** A page is reserved for them: their accounts, the ten documents to read, the people to know, the requests they can make. The weeks spent working out who does what shrink to a few days. **What the intranet does not replace.** Messaging stays for conversation; the intranet keeps what has to remain true and findable. The memo still goes to everyone's phone, but as a link to the authoritative page.",
      ] },
      { heading: "Who has read the memo: 60 % on day two, 91 % after one reminder", body: [
        "The figure follows the number of readers of a memo over a week.",
      ], visual: 'lecture', after: [
        "**Measuring reads.** Internal communications is the function responsible for effective communications among participants within an organization; it can be measured. In the example, a memo published on a Monday is read by 21 people out of 45 on Tuesday, 27 on Wednesday: 60 %. Left alone, the curve flattens at around 30. A reminder sent on Wednesday only to the 18 who have not read it brings 41 readers by the next Monday: 91 %. The last four are seen in person.",
        "**A read receipt, not a check on people.** The “I have read it” button is kept for memos that commit: a safety instruction, a new procedure, a change of hours. Applying it to everything makes it worthless. **The other measurements.** Pages never opened, searches with no answer, the average time a request takes: four figures a month are enough to know whether the intranet is used.",
      ] },
      { heading: "Six weeks to the first memo that is read, in 2027", body: [
        "Six weeks in the example, three of them for content.",
      ], visual: 'calendrier', after: [
        "**Week 1, the questions and the blocks.** **Week 2, accounts** and single sign-on. **Weeks 2 to 4, content**: this is the real work, and it falls to your managers, not to a provider. **Weeks 4 and 5, two request forms.** **Week 6, opening**, with a real memo and its measurement.",
        "**Which tool.** If the company already pays for an online office suite, its internal-sites tool is often enough to start. Custom-built is justified when requests have to talk to the management software, when there are several sites and several languages, or when the intranet becomes the front door to every application. It is one step of the roadmap described in [the guide to digitalising an SME](" + L.digitaliser + ").",
      ], list: [
        "**What the manager receives**: the home page and its five blocks, the name of each block's owner, two request forms with their route, and four figures a month: reads, pages never opened, searches with no answer, time taken by requests.",
        "**What the company no longer does**: send an instruction to a group and hope, hunt for the right version of a procedure, have a paper signed that gets lost, explain the same things ten times at each arrival.",
        "**What is measured**: read rate of the memos that commit, share of pages reviewed on their date, searches with no result, days between a request and its answer.",
        "**What Symloop does**: scoping from your ten questions, accounts and single sign-on, the home page and search, request forms and their route, measurement; on your office suite when it is enough, custom-built when the intranet has to talk to your applications.",
      ], faq: [
        { q: "How do you create a company intranet?", a: "In six steps: list the ten questions that come back most, choose five blocks, name one owner per block, fill it before opening, open with a real memo, prune every month. The tool is chosen afterwards, and matters less than the owners." },
        { q: "What is an intranet, in practice?", a: "A site reserved for employees, where each person signs in with their account. It holds the memos, the documents in their current version, the directory, internal requests and access to the applications. It is the place where the authoritative version is." },
        { q: "What is the difference between an intranet and a WhatsApp group?", a: "The group is for conversation: one message pushes out the last, and nobody knows who has read it. The intranet keeps what has to remain true and findable: a dated memo, a procedure in force, the status of a request. The two go together: the message carries the link to the page." },
        { q: "Which tool should we choose to create an intranet?", a: "If you already pay for an online office suite, its internal-sites tool is often enough to start. Custom-built is justified when requests have to be linked to your management software, or when the intranet becomes the front door to all your applications." },
        { q: "What should go into an intranet?", a: "Five blocks: memos, documents in force, the directory with stand-ins, internal requests with their status, and links to the applications. Start from the ten questions you are asked every week: they tell you what to put in." },
        { q: "Why does nobody use our intranet?", a: "Generally for three reasons: it opened empty, nobody is responsible for keeping it up to date, and nothing is there that cannot be had elsewhere. The remedy: publish there, and only there, what everybody is waiting for, and remove what is out of date." },
        { q: "How do we know whether a memo has been read?", a: "With an “I have read it” button on the memo, kept for those that commit people. It gives the read rate and the list of those who have not read it, who alone are reminded. In our example, one reminder takes it from 60 % to 91 %." },
        { q: "Can the intranet be used from a phone?", a: "Yes, and it should be designed for that first: some employees, in the field, in the workshop or in the shop, only have their phone. Each person signs in with their own account, and the pages have to read well on a small screen." },
        { q: "How long does it take to create an intranet?", a: "Six weeks in our example: one for the questions and the blocks, one for accounts, three for content, two for the request forms, partly in parallel. Content is the real work, and it falls to your own teams." },
        { q: "Is an intranet useful for a company of twenty people?", a: "Yes, as soon as the same questions come back every week, there is more than one site, or arrivals are frequent. At twenty people, five simple blocks are enough, on a tool you already have." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Five true blocks are better than twenty approximate ones." },
      { after: 4, text: "A memo is not done when it is sent: it is done when the people it concerns have read it." },
    ],
    cta: { eyebrow: "Send us the ten questions you are asked every week and the number of sites: we tell you which blocks you need, and on which tool to start", title: "Buried memos, three versions of the same procedure, requests on paper, or a founder in France who wants information to circulate without them: we build the intranet around your questions, and we measure who has read", body: "Scoping, accounts and single sign-on, home page, search, request forms, measurement. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.fichiers, kind: '2027', name: 'File sharing: server, NAS or cloud, rights per folder, versions' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log: who sees what, who changes what' },
      { href: L.achat, kind: '2027', name: 'Purchase requests: approval, committed budget, purchase order' },
      { href: L.digitaliser, kind: '2027', name: 'Digitalising an SME: a twelve-month roadmap' },
    ] },
  },
  ar: {
    kind: 'إنترانت المؤسسة · الجزائر · 2027', title: "كيف يُنشأ إنترانت للمؤسسة في الجزائر (2027): المذكرات تضيع في مجموعات المراسلة، خمس خانات، وثائق سارية، دليل، طلبات داخلية متابَعة، وإشعار بالقراءة",
    dek: "«المذكرات تُرسَل في مجموعة واتساب وتُدفن في الغد. آخر نسخة من الإجراء، لا أحد يعرف في أي مجلد هي. العامل الجديد يحتاج ثلاثة أسابيع ليعرف من يسأل عن ماذا، وطلب العتاد ورقة تتجوّل. يقولون لي إنه يلزم إنترانت. ما هو، عملياً، وكيف ننشئ واحداً يفتحه الناس فعلاً؟» خمس خانات، مسؤول لكل خانة، يُملأ قبل الفتح، وقياس واحد: من قرأ.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['إنترانت المؤسسة', 'المذكرات', 'الطلبات الداخلية', 'دليل المؤسسة', 'الاتصال الداخلي', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الإنترانت هو المكان، الخاص بالمؤسسة، الذي توجد فيه النسخة المعتمَدة. أنشئوه في ست مراحل: **اجردوا** الأسئلة العشرة الأكثر طرحاً عليكم؛ **اختاروا** خمس خانات، مذكرات، وثائق، دليل، طلبات، وتطبيقات؛ **سمّوا** مسؤولاً لكل خانة؛ **املؤوه** قبل الفتح؛ **افتحوه** بمذكرة حقيقية وإشعار بالقراءة؛ **شذّبوا** كل شهر. والأداة تهمّ أقل من هذه المراحل الست: حزمة مكتبية على الخط تدفعون ثمنها أصلاً تكفي غالباً للبداية. في مثالنا، تبلغ المذكرة 60 بالمئة من المرسَل إليهم في يومين، و91 بالمئة بعد تذكير موجَّه. واحسبوا ستة أسابيع.",
      "هذا الدليل موجَّه إلى مسيّر مؤسسة فيها من عشرين إلى بضع مئات من الأشخاص، في موقع أو عدة مواقع، وإلى المؤسس المقيم في فرنسا الذي يريد أن تسري المعلومة دونه. التعريفات المذكورة آتية من مصادر علنية: الإنترانت، الإكسترانت، تسجيل الدخول الموحَّد، الاتصال الداخلي، ومسار العمل. المؤسسة ذات الخمسة والأربعين شخصاً وصفحتها الرئيسية وأرقام القراءة مثال مركَّب. هذا الدليل لا يتناول الأجور ولا قانون العمل: طلب الغياب فيه مثال لمسار، لا قاعدة.",
    ],
    sections: [
      { heading: "الصفحة الرئيسية للإنترانت: خمس خانات، لا عشرون", body: [
        "الشكل يبيّن الصفحة الرئيسية لإنترانت، بخاناتها الخمس.",
      ], visual: 'accueil', after: [
        "**ما هو.** الإنترانت شبكة معلوماتية تخدم، داخل منظمة، تقاسم المعلومة، تسهيل التواصل، والوصول إلى أدوات العمل. وعملياً: موقع خاص بالعمّال، يدخله كل واحد بحسابه. وليس إكسترانت، وهو شبكة خاصة مراقَبة مفتوحة لشركاء خارجيين: فلزبائنكم أو موزّعيكم، ذلك بوابة، موصوفة في [دليل بوابة الطلبيات](" + L.portail + ").",
        "**خمس خانات.** المذكرات، مؤرَّخة، مع إشعار بالقراءة للمُلزِمة منها. الطلبات، مع حالتها. الوثائق، في نسختها السارية الوحيدة. الدليل: من يفعل ماذا، في أي موقع، ومن يعوّض من. والتطبيقات: مدخل واحد. **لماذا ليست عشرين.** كل خانة تتطلب شخصاً يحدّثها. والخانة دون مسؤول تعرض بعد بضعة أشهر معلومات خاطئة، فتفقد الصفحة كلها قيمتها: خمس خانات صحيحة خير من عشرين تقريبية.",
      ] },
      { heading: "إنشاء إنترانت، بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: جرد الأسئلة.",
      ], visual: 'etapes', after: [
        "**الجرد.** اسألوا ثلاثة أشخاص، الاستقبال، الإدارة، ومسؤول الورشة أو المحل، أي الأسئلة تعود كل أسبوع: أين نموذج الوصل، من يوقّع هذا الطلب، ما هي أوقات ذلك الموقع. هذه الأسئلة العشرة هي مخطط إنترانتكم. **الاختيار، والتسمية.** خمس خانات على الأكثر، واسم أمام كل واحدة.",
        "**الملء قبل الفتح.** صفحة فارغة في اليوم الأول، ولا أحد يعود في الثاني. نفتح حين تكون الإجراءات السارية والنماذج والدليل موجودة. **الفتح بمذكرة حقيقية.** لا إعلان عن الإنترانت: معلومة ينتظرها الجميع، تُنشر هناك ولا في أي مكان آخر. **التشذيب.** كل شهر، يسحب المسؤول ما انتهت صلاحيته؛ والقياس يقول أي الصفحات لا يفتحها أحد.",
      ] },
      { heading: "إنترانت ينفع، في خمس طبقات", body: [
        "الطبقة المبرزة هي المحتويات.",
      ], visual: 'couches', after: [
        "**الحسابات.** حساب لكل شخص، لا يُتقاسَم أبداً، ويُغلق يوم المغادرة: هو إجراء القدوم والمغادرة الموصوف في [دليل حظيرة الحواسيب](" + L.parc + "). وتسجيل الدخول الموحَّد يسمح بالدخول مرة واحدة، بمعرّف واحد، إلى عدة برامج: فيصير الإنترانت مدخل التطبيقات. والصلاحيات تُمنح حسب المصلحة والموقع، كما في [دليل الأدوار والصلاحيات](" + L.roles + ").",
        "**المحتويات والبحث.** كل صفحة تحمل مسؤولاً وتاريخ مراجعة. والوثائق نفسها تبقى مرتَّبة في فضاء ملفات المؤسسة، انظر [دليل مشاركة الملفات](" + L.fichiers + ")، والإنترانت يشير إلى النسخة السارية. وشريط بحث واحد يجد إجراءً أو شخصاً أو استمارة؛ وما يُكتب ولا يُعثر عليه يُسجَّل: هو قائمة ما ينقص.",
      ] },
      { heading: "ست حالات، اليوم ومع إنترانت", body: [
        "الشكل يقارن ست حالات عادية، قبل وبعد.",
      ], visual: 'besoins', after: [
        "**الطلبات.** مسار العمل تسلسل من الأنشطة منظَّم وقابل للتكرار. لطلب عتاد: استمارة، المسؤول الذي يصادق، المخزن الذي يسلّم، وحالة يراها صاحب الطلب في كل مرحلة. ابدؤوا باستمارتين، اللتين تنتجان أكثر ورق. وحين يُلزم الطلب نفقة، فالمسار هو مسار [دليل طلبات الشراء](" + L.achat + ").",
        "**العامل الجديد.** صفحة مخصَّصة له: حساباته، الوثائق العشر التي تُقرأ، الأشخاص الذين يجب معرفتهم، والطلبات التي يستطيع تقديمها. والأسابيع التي تُقضى في فهم من يفعل ماذا تتقلص إلى بضعة أيام. **ما لا يعوّضه الإنترانت.** المراسلة تبقى للمحادثة؛ والإنترانت يحفظ ما يجب أن يبقى صحيحاً وقابلاً للعثور عليه. والمذكرة تذهب دائماً إلى هاتف كل واحد، لكن في شكل رابط نحو الصفحة المعتمَدة.",
      ] },
      { heading: "من قرأ المذكرة: 60 بالمئة في اليوم الثاني، و91 بالمئة بعد تذكير", body: [
        "الشكل يتابع عدد قرّاء مذكرة طوال أسبوع.",
      ], visual: 'lecture', after: [
        "**قياس القراءة.** الاتصال الداخلي هو الوظيفة المكلَّفة بإيصال المعلومة بين أعضاء منظمة؛ وهو يُقاس. في المثال، مذكرة نُشرت يوم اثنين يقرؤها 21 شخصاً من 45 يوم الثلاثاء، و27 يوم الأربعاء: 60 بالمئة. ودون فعل شيء، يتسطّح المنحنى نحو 30. وتذكير يُرسَل يوم الأربعاء للثمانية عشر الذين لم يقرؤوا وحدهم يأتي بـ 41 قارئاً يوم الاثنين الموالي: 91 بالمئة. والأربعة الأخيرون نراهم شخصياً.",
        "**إشعار بالقراءة، لا مراقبة.** زر «قرأت» يُخصَّص للمذكرات المُلزِمة: تعليمة أمن، إجراء جديد، أو تغيير في الأوقات. وتطبيقه على كل شيء يُفقده قيمته. **القياسات الأخرى.** الصفحات التي لم تُفتح، البحث دون جواب، ومتوسط أجل الطلب: أربعة أرقام في الشهر تكفي لمعرفة هل ينفع الإنترانت.",
      ] },
      { heading: "ستة أسابيع إلى أول مذكرة مقروءة، سنة 2027", body: [
        "ستة أسابيع في المثال، منها ثلاثة للمحتويات.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الأسئلة والخانات.** **الأسبوع 2، الحسابات** وتسجيل الدخول الموحَّد. **الأسابيع من 2 إلى 4، المحتويات**: هو العمل الحقيقي، ويعود إلى مسؤوليكم، لا إلى متعهّد. **الأسبوعان 4 و5، استمارتا طلب.** **الأسبوع 6، الفتح**، بمذكرة حقيقية وقياسها.",
        "**أي أداة.** إذا كانت المؤسسة تدفع ثمن حزمة مكتبية على الخط، فأداتها للمواقع الداخلية تكفي غالباً للبداية. والبناء على المقاس يُبرَّر حين يجب أن تتحادث الطلبات مع برنامج التسيير، حين توجد عدة مواقع وعدة لغات، أو حين يصير الإنترانت مدخل كل التطبيقات. وهو مرحلة من خارطة الطريق الموصوفة في [دليل رقمنة المؤسسة الصغيرة](" + L.digitaliser + ").",
      ], list: [
        "**ما يستلمه المسيّر**: الصفحة الرئيسية وخاناتها الخمس، اسم مسؤول كل واحدة، استمارتا طلب بمسارهما، وكل شهر أربعة أرقام: القراءات، الصفحات التي لم تُفتح، البحث دون جواب، وآجال الطلبات.",
        "**ما لم تعد المؤسسة تفعله**: إرسال تعليمة في مجموعة والتمني، البحث عن النسخة الصحيحة من إجراء، توقيع ورقة تضيع، وشرح الأشياء نفسها عشر مرات عند كل قدوم.",
        "**ما يُقاس**: نسبة قراءة المذكرات المُلزِمة، حصة الصفحات المراجَعة في تاريخها، البحث دون نتيجة، والأيام بين الطلب وجوابه.",
        "**ما تفعله Symloop**: التأطير انطلاقاً من أسئلتكم العشرة، الحسابات وتسجيل الدخول الموحَّد، الصفحة الرئيسية والبحث، استمارات الطلب ومسارها، والقياس؛ على حزمتكم المكتبية حين تكفي، وعلى المقاس حين يجب أن يتحادث الإنترانت مع تطبيقاتكم.",
      ], faq: [
        { q: "كيف يُنشأ إنترانت للمؤسسة؟", a: "في ست مراحل: جرد الأسئلة العشرة الأكثر تكراراً، اختيار خمس خانات، تسمية مسؤول لكل خانة، الملء قبل الفتح، الفتح بمذكرة حقيقية، والتشذيب كل شهر. والأداة تُختار بعدها، وتهمّ أقل من المسؤولين." },
        { q: "ما هو الإنترانت، عملياً؟", a: "موقع خاص بالعمّال، يدخله كل واحد بحسابه. فيه المذكرات، الوثائق في نسختها السارية، الدليل، الطلبات الداخلية، والوصول إلى التطبيقات. هو المكان الذي توجد فيه النسخة المعتمَدة." },
        { q: "ما الفرق بين الإنترانت ومجموعة واتساب؟", a: "المجموعة للمحادثة: رسالة تطرد أخرى، ولا نعرف من قرأ. والإنترانت يحفظ ما يجب أن يبقى صحيحاً وقابلاً للعثور عليه: مذكرة مؤرَّخة، إجراء سارٍ، وحالة طلب. والاثنان يتكاملان: الرسالة تحمل الرابط نحو الصفحة." },
        { q: "أي أداة نختار لإنشاء إنترانت؟", a: "إذا كنتم تدفعون ثمن حزمة مكتبية على الخط، فأداتها للمواقع الداخلية تكفي غالباً للبداية. والبناء على المقاس يُبرَّر حين يجب ربط الطلبات ببرنامج تسييركم، أو حين يصير الإنترانت مدخل كل تطبيقاتكم." },
        { q: "ماذا نضع في الإنترانت؟", a: "خمس خانات: المذكرات، الوثائق السارية، الدليل مع المعوِّضين، الطلبات الداخلية مع حالتها، وروابط التطبيقات. وانطلقوا من الأسئلة العشرة التي تُطرح عليكم كل أسبوع: هي التي تقول ماذا نضع." },
        { q: "لماذا لا يستعمل أحد إنترانتنا؟", a: "في الغالب لثلاثة أسباب: فُتح فارغاً، لا أحد مسؤول عن تحديثه، ولا شيء فيه لا يمكن الحصول عليه في مكان آخر. والعلاج: نشر ما ينتظره الجميع هناك، وهناك فقط، وسحب ما انتهت صلاحيته." },
        { q: "كيف نعرف هل قُرئت مذكرة؟", a: "بزر «قرأت» على المذكرة، يُخصَّص للمُلزِمة منها. يعطي نسبة القراءة وقائمة من لم يقرؤوا، فنذكّرهم وحدهم. في مثالنا، ننتقل من 60 إلى 91 بالمئة بتذكير واحد." },
        { q: "هل يُفتح الإنترانت من هاتف؟", a: "نعم، ويجب تصميمه لذلك أولاً: جزء من العمّال، في الميدان أو الورشة أو المحل، ليس معهم إلا هاتفهم. والدخول يتم بحساب كل واحد، والصفحات يجب أن تُقرأ على شاشة صغيرة." },
        { q: "كم من الوقت يلزم لإنشاء إنترانت؟", a: "ستة أسابيع في مثالنا: أسبوع للأسئلة والخانات، أسبوع للحسابات، ثلاثة للمحتويات، وأسبوعان لاستمارات الطلب، وبعضها بالتوازي. والمحتويات هي العمل الحقيقي، وتعود إلى فرقكم." },
        { q: "هل ينفع الإنترانت مؤسسة من عشرين شخصاً؟", a: "نعم حالما تعود الأسئلة نفسها كل أسبوع، أو يوجد أكثر من موقع، أو يتكرر قدوم عمّال جدد. وبعشرين شخصاً، خمس خانات بسيطة تكفي، على أداة عندكم أصلاً." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "خمس خانات صحيحة خير من عشرين تقريبية." },
      { after: 4, text: "المذكرة لا تُنجَز حين تُرسَل: تُنجَز حين يقرؤها من تعنيهم." },
    ],
    cta: { eyebrow: "أرسلوا إلينا الأسئلة العشرة التي تُطرح عليكم كل أسبوع وعدد المواقع: نقول لكم أي خانات تلزمكم، وعلى أي أداة تبدؤون", title: "مذكرات مدفونة، ثلاث نسخ من الإجراء نفسه، طلبات على الورق، أو مؤسس في فرنسا يريد أن تسري المعلومة دونه: نبني الإنترانت حول أسئلتكم، ونقيس من قرأ", body: "تأطير، حسابات وتسجيل دخول موحَّد، صفحة رئيسية، بحث، استمارات طلب، وقياس. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.fichiers, kind: '2027', name: 'مشاركة الملفات: خادم، NAS أم سحابة، صلاحيات لكل مجلد، ونسخ' },
      { href: L.roles, kind: '2027', name: 'الأدوار والصلاحيات وسجل التدقيق: من يرى ماذا، ومن يعدّل ماذا' },
      { href: L.achat, kind: '2027', name: 'طلبات الشراء: المصادقة، الميزانية الملتزَم بها، ووصل الطلب' },
      { href: L.digitaliser, kind: '2027', name: 'رقمنة المؤسسة الصغيرة: خارطة طريق على اثني عشر شهراً' },
    ] },
  },
};

const KEYWORDS = "comment créer un intranet 2027, comment créer un intranet dans une entreprise, intranet entreprise algérie, créer un intranet d'entreprise, notes de service intranet, annuaire d'entreprise, demandes internes formulaire, accusé de lecture note de service, communication interne entreprise, intranet ou whatsapp, how to create a company intranet algeria 2027, intranet for small business, كيف انشئ انترانت للشركة 2027, الاتصال الداخلي في المؤسسة, المذكرات الداخلية";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
