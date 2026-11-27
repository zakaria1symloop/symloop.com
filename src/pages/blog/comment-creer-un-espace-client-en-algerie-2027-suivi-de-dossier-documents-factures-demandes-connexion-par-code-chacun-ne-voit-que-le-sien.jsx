import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien.mjs';

const SLUG = 'comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien';
const FIGURES = ['appels', 'blocs', 'dossier', 'droits', 'ordre', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  pwa: '/blog/pwa-ou-application-native-algerie-2027-quand-application-web-installable-suffit-quand-il-faut-les-stores/',
  reclamations: '/blog/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client/',
  b2b: '/blog/portail-de-commande-b2b-grossiste-algerie-2027-detaillants-commandent-eux-memes-prix-credit-heure-limite/',
  fichier: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
};

const CONTENT = {
  fr: {
    kind: 'Espace client · Algérie · 2027', title: "Comment créer un espace client en Algérie (2027) : vos clients appellent dix fois par jour pour savoir où en est leur dossier, ce qu'on y met, qui voit quoi, et comment faire qu'ils s'en servent",
    dek: "« Nos clients appellent sans arrêt pour savoir où en est leur dossier, redemandent une facture déjà envoyée, et envoient leurs pièces par WhatsApp à trois personnes différentes. Je veux un espace client où chacun voit son dossier, ses documents et ses factures. Que mettre dedans, par où commencer, et est-ce qu'ils s'en serviront ? » Ils s'en servent quand l'espace répond à la question qu'ils posent au téléphone. Commencez par l'état du dossier, pas par une liste de fonctions.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Espace client', 'Portail client', 'Suivi de dossier', 'Dépôt de documents', 'Connexion par code', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un espace client est adopté quand il répond à la question que vos clients posent au téléphone. Comptez vos appels pendant une semaine, par motif : dans l'exemple de ce guide, trois appels sur quatre demandent où en est le dossier, une facture à renvoyer, ou si une pièce est bien arrivée. Construisez donc dans cet ordre : **l'état du dossier** d'abord, avec ce qui bloque et qui doit agir ; puis **les documents** dans les deux sens, **les factures**, et **un fil de demandes**. Dessous, un socle : **connexion par code**, sans mot de passe, **chaque client ne voit que le sien**, et **un message à chaque changement**. Six semaines dans l'exemple, un bloc à la fois.",
      "Ce guide s'adresse au gérant d'une société de services dont le téléphone sonne pour des questions d'état : cabinet, agence, bureau d'études, installateur, centre de formation, promoteur, atelier. Et au fondateur installé en France dont les clients, ou lui-même, suivent de loin un dossier traité en Algérie, à des heures où personne ne décroche. Les définitions citées viennent de sources publiques : le portail client, le mot de passe à usage unique, la référence directe non sécurisée à un objet, l'application web progressive ; le classement cité est celui de l'OWASP, édition 2021. L'entreprise, ses cent appels et son calendrier sont un exemple construit. Ce guide ne traite pas des règles de droit sur les données personnelles ni sur la conservation des documents : voyez votre conseil.",
    ],
    sections: [
      { heading: "Pourquoi vos clients appellent : cent appels triés", body: [
        "La figure classe cent appels d'une semaine par motif.",
      ], visual: 'appels', after: [
        "**Le relevé.** Pendant une semaine, chaque personne qui décroche coche un motif sur une feuille : état du dossier, document à renvoyer, pièce reçue ou non, rendez-vous, vraie question. Cinq colonnes suffisent. Dans l'exemple, 76 appels sur 100 portent sur une information qui existe déjà dans l'entreprise ; le client ne peut simplement pas la lire sans passer par quelqu'un. **Ce que cela prend.** Chaque appel d'état interrompt deux personnes, celle qui décroche et celle qui sait ; et la réponse dépend de qui répond.",
        "**Ce que l'espace client n'est pas.** Un portail client est une porte d'entrée électronique vers un ensemble de fichiers, de services et d'informations, accessible par Internet depuis un navigateur. Ce n'est ni un site vitrine avec un bouton « connexion », ni un outil de commande : si vos clients sont des revendeurs qui passent commande, lisez [le guide sur le portail de commande B2B](" + L.b2b + ") ; si vos appels sont des réclamations sur un produit livré, [le guide sur les réclamations et le SAV](" + L.reclamations + "). Ici, il s'agit de dossiers qui durent : une prestation, un chantier, une démarche, une inscription.",
      ] },
      { heading: "Ce qu'on met dans un espace client : quatre blocs et un socle", body: [
        "La couche accentuée est l'état du dossier.",
      ], visual: 'blocs', after: [
        "**Quatre blocs.** L'état : l'étape, ce qui bloque, qui doit agir, la suite et sa date. Les documents, dans les deux sens : ce que vous remettez au client, et ce qu'il doit vous fournir, sous forme de liste. Les factures et les règlements : ce qui est dû, ce qui est payé, le reçu. Les demandes : un seul fil par dossier, au lieu de messages dispersés sur trois téléphones. **Un bloc à la fois.** L'état se livre seul et sert dès le premier jour ; les autres s'ajoutent quand celui-ci est utilisé.",
        "**Le socle.** Il ne se voit pas : la connexion, les droits, les messages, le journal. Et une condition préalable : un client, une fiche. Si le même client existe trois fois, sous trois orthographes, ses dossiers ne se rassembleront pas ; c'est l'objet [du guide sur le fichier client unique](" + L.fichier + "). **Et votre logiciel actuel ?** Si les dossiers vivent déjà dans un logiciel de gestion, l'espace client ne les ressaisit pas : il les lit. La façon de brancher les deux, avec ou sans interface de programmation, est décrite dans [le guide sur l'intégration d'un logiciel existant](" + L.integrer + ").",
      ] },
      { heading: "Le dossier, tel que le client le voit", body: [
        "La figure montre l'écran d'un dossier, arrêté à l'étape des pièces.",
      ], visual: 'dossier', after: [
        "**Quatre réponses.** Où en est mon dossier : l'étape, parmi cinq. Qu'attend-on de moi : « en attente de vous », et la liste de ce qui manque. Que se passe-t-il ensuite, et quand : la prochaine étape et son délai. Que s'est-il déjà passé : le journal. Un écran qui affiche seulement « en cours » ne supprime aucun appel. **Qui doit agir.** C'est l'information la plus utile de l'écran, pour le client comme pour vous : un dossier arrêté porte toujours un nom, le sien ou celui de votre équipe.",
        "**La liste des pièces.** Chaque pièce a un état : reçue, manquante, à refaire, avec la raison du refus, par exemple une photo floue. Le client dépose depuis son téléphone ; le dépôt est horodaté et rattaché au dossier, et non à la conversation d'un collaborateur. **Chaque changement prévient.** Un changement d'étape, une pièce refusée, un document remis : un message part, avec un lien vers le dossier ; sans cela, personne ne revient voir. Le choix du canal, et ce que représente chaque envoi, sont traités dans [le guide sur les notifications](" + L.notifications + ").",
      ] },
      { heading: "Qui voit quoi : chacun ne voit que le sien", body: [
        "La figure liste six acteurs, et ce qui reste fermé à chacun.",
      ], visual: 'droits', after: [
        "**La faille classique.** Elle a un nom : la référence directe non sécurisée à un objet, un type de vulnérabilité du contrôle d'accès. Elle apparaît quand une application utilise un identifiant pour accéder directement à un objet de sa base sans vérifier le droit d'accès : si l'adresse contient un numéro facile à deviner, comme un dossier 1234, il suffit de le changer pour lire ceux des autres. Dans l'édition 2021 du classement de l'OWASP, le contrôle d'accès défaillant occupe la première place, après être monté de la cinquième. **Le test.** Avant l'ouverture, on se connecte comme un client et on remplace le numéro de son dossier par un autre : la seule réponse acceptable est une page introuvable. Il se refait à chaque nouvel écran.",
        "**Sans mot de passe.** Un client qui se connecte quatre fois par an oubliera son mot de passe, et rappellera. La connexion par code évite cela : un mot de passe à usage unique n'est valable que pour une seule session ou une seule opération ; il arrive sur le téléphone ou l'adresse e-mail que vous connaissez déjà. Les canaux, ce que représente chaque envoi et les fraudes sont décrits dans [le guide sur la connexion par code](" + L.otp + "). **Côté équipe.** Un chargé de dossier voit son portefeuille, un responsable voit tout, et le journal garde qui a changé quoi : voir [le guide sur les rôles, les droits et le journal d'audit](" + L.roles + ").",
      ] },
      { heading: "Faire qu'ils s'en servent, dans cet ordre", body: [
        "Le premier temps est accentué : compter.",
      ], visual: 'ordre', after: [
        "**Rien à installer.** Un client ouvre son dossier quelques fois, pendant quelques semaines : il n'installera rien pour cela. L'espace s'ouvre depuis un lien, dans le navigateur du téléphone. Une application web progressive est un type d'application web qui peut s'installer sur un appareil comme une application autonome : elle suffit ici, et [le guide sur l'application web installable](" + L.pwa + ") dit quand elle ne suffit plus. **L'invitation.** Elle part à l'ouverture du dossier, pas dans une campagne : un message, un lien, un code. Le premier écran montre son dossier, pas un formulaire d'inscription.",
        "**Au téléphone.** L'équipe ne refuse pas de répondre : elle répond, puis ajoute que c'est dans l'espace du client, et renvoie le lien. Les pièces qui arrivent encore par WhatsApp sont rangées dans le dossier par celui qui les reçoit, les premières semaines. **Trois chiffres, lus chaque lundi.** Le taux d'activation : la part des clients ayant un dossier ouvert qui se sont connectés au moins une fois. La part des appels d'état, sur le même relevé qu'au début. La part des dossiers complets au premier dépôt. Si l'activation reste basse, regardez d'abord l'invitation, puis l'écran d'état : dit-il vraiment ce qui bloque ?",
      ] },
      { heading: "Six semaines, du relevé d'appels au premier bilan, en 2027", body: [
        "Six semaines dans l'exemple, dont la première pour compter.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, le relevé** : les appels par motif, et les étapes d'un dossier écrites sur une page. **Semaines 2 et 3, l'état et le socle** : étapes, qui doit agir, connexion par code, droits, et l'essai d'accès croisé ; les dossiers en cours sont repris. **Semaines 3 et 4, les documents** : dépôt depuis le téléphone, liste des pièces, raison du refus.",
        "**Semaines 4 et 5, les factures et les demandes.** **Semaines 5 et 6, l'invitation et le bilan** : chaque nouveau dossier s'ouvre avec son invitation, puis le relevé d'appels est refait. Dans l'exemple, l'objectif fixé au départ est de ramener les appels d'état de 76 sur 100 à moins de 30 ; le relevé dit s'il est atteint. La durée dépend du nombre de types de dossiers et de l'existence d'un logiciel où ils vivent déjà.",
      ], list: [
        "**Ce que le gérant reçoit** : le relevé d'appels, l'écran d'état des dossiers, la liste des pièces, les factures et les demandes dans un seul espace, l'essai d'accès croisé passé, et trois chiffres chaque lundi.",
        "**Ce que l'entreprise ne fait plus** : répondre de mémoire à « où en est mon dossier », fouiller le téléphone d'un collaborateur pour retrouver une pièce, renvoyer trois fois la même facture, découvrir qu'un dossier attend depuis dix jours.",
        "**Ce qui est mesuré** : taux d'activation, part des appels d'état, part des dossiers complets au premier dépôt, dossiers arrêtés et depuis quand.",
        "**Ce que fait Symloop** : le relevé et les étapes, l'espace client par blocs, la connexion par code, les droits et leur essai, les messages d'étape, le branchement sur votre logiciel s'il existe, puis la mesure.",
      ], faq: [
        { q: "Comment créer un espace client ?", a: "En commençant par compter vos appels pendant une semaine, par motif. Puis un bloc à la fois : l'état des dossiers d'abord, ensuite les documents, les factures et les demandes. Dessous, un socle : connexion par code, droits par client, un message à chaque changement d'étape." },
        { q: "Que mettre dans un espace client ?", a: "Quatre choses : l'état de chaque dossier avec ce qui bloque et qui doit agir, les documents dans les deux sens avec la liste des pièces attendues, les factures et les règlements, et un fil de demandes par dossier. Rien que le client n'ait déjà demandé au téléphone." },
        { q: "Mes clients vont-ils s'en servir ?", a: "Oui, si l'espace contient la réponse à leur question, si le message d'étape y conduit par un lien, et si votre équipe y renvoie au lieu de répondre de mémoire. Un espace annoncé une fois, puis oublié par l'équipe, reste vide." },
        { q: "Faut-il une application mobile ou un site ?", a: "Pour un dossier qu'on ouvre quelques fois, un espace web qui s'ouvre depuis un lien dans le navigateur du téléphone suffit : personne n'installe une application pour cela. Une application se justifie quand le client revient chaque semaine." },
        { q: "Comment les clients se connectent-ils sans mot de passe ?", a: "Par un code à usage unique envoyé sur leur téléphone ou leur adresse e-mail, valable pour une seule session. Ils n'ont rien à retenir, et vous n'avez aucun mot de passe à réinitialiser." },
        { q: "Comment être sûr qu'un client ne voit pas le dossier d'un autre ?", a: "Par un contrôle du droit d'accès sur chaque page et chaque document, pas seulement à la connexion, et par un essai avant l'ouverture : connecté comme un client, on remplace le numéro de son dossier par un autre dans l'adresse. La réponse doit être une page introuvable." },
        { q: "Peut-on brancher l'espace client sur notre logiciel actuel ?", a: "Souvent, oui : si le logiciel expose ses données par une interface de programmation ou par des exports réguliers, l'espace client lit les dossiers au lieu de les ressaisir. Cela se vérifie sur votre logiciel avant de promettre un délai." },
        { q: "Le client peut-il payer depuis son espace ?", a: "Il peut au minimum y voir ce qui est dû, télécharger sa facture et déposer une preuve de virement. Le paiement par carte en ligne est un chantier à part, avec ses propres démarches : il s'ajoute ensuite, si votre activité le justifie." },
        { q: "Que devient WhatsApp ?", a: "Il reste, pour parler. Mais l'état, les pièces et les factures vivent dans le dossier : l'équipe répond, puis renvoie le lien de l'espace, et range dans le dossier les pièces reçues par message. L'habitude se prend dossier après dossier." },
        { q: "Combien de temps faut-il, et par quoi commencer ?", a: "Six semaines dans l'exemple de ce guide, un bloc à la fois ; davantage s'il y a plusieurs types de dossiers ou un logiciel à brancher. Commencez par la semaine de relevé d'appels : elle ne demande aucun outil et dit quel bloc livrer d'abord." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Un écran qui affiche seulement « en cours » ne supprime aucun appel." },
      { after: 4, text: "L'invitation part à l'ouverture du dossier, pas dans une campagne." },
    ],
    cta: { eyebrow: "Dites-nous quels dossiers vous suivez, combien sont ouverts, et dans quel outil ils vivent : nous faisons le relevé d'appels avec vous, puis nous livrons l'écran d'état en premier", title: "Téléphone qui sonne pour « où en est mon dossier », pièces dispersées sur trois téléphones, factures renvoyées trois fois, ou clients installés en France qui suivent de loin un dossier traité en Algérie : nous construisons l'espace client, un bloc à la fois", body: "Relevé d'appels, état des dossiers, liste des pièces, factures, fil de demandes, connexion par code, droits et essai d'accès croisé, messages d'étape, branchement sur votre logiciel. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.otp, kind: '2027', name: 'Connexion par code : SMS, WhatsApp, fraude, clés d’accès' },
      { href: L.notifications, kind: '2027', name: 'Notifications : quel canal pour quel message' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi' },
      { href: L.reclamations, kind: '2027', name: 'Réclamations et SAV : un ticket unique, des délais' },
    ] },
  },
  en: {
    kind: 'Customer area · Algeria · 2027', title: "How to build a customer area in Algeria (2027): your customers call ten times a day to ask where their file is, what goes in it, who sees what, and how to get them to use it",
    dek: "“Our customers call all the time to ask where their file is, ask again for an invoice we already sent, and send their documents on WhatsApp to three different people. I want a customer area where each one sees their file, their documents and their invoices. What should go in it, where do we start, and will they use it?” They use it when the area answers the question they ask on the phone. Start with the status of the file, not with a list of features.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Customer area', 'Customer portal', 'File tracking', 'Document upload', 'Sign-in by code', 'Algeria 2027'],
    intro: [
      "**Short answer.** A customer area is adopted when it answers the question your customers ask on the phone. Count your calls for a week, by reason: in this guide's example, three calls out of four ask where the file is, for an invoice to be sent again, or whether a document has arrived. So build in this order: **the status of the file** first, with what is blocking and who must act; then **documents** both ways, **invoices**, and **one request thread**. Underneath, a base: **sign-in by code**, with no password, **each customer sees only their own**, and **a message at every change**. Six weeks in the example, one block at a time.",
      "This guide is for the manager of a service company whose phone rings for status questions: a firm, an agency, a design office, an installer, a training centre, a developer, a workshop. And for the founder based in France whose customers, or who personally, follow from afar a file handled in Algeria, at hours when nobody picks up. The definitions quoted come from public sources: the client portal, the one-time password, the insecure direct object reference, the progressive web app; the ranking quoted is OWASP's, 2021 edition. The company, its hundred calls and its calendar are a constructed example. This guide does not cover the legal rules on personal data or on document retention: see your legal adviser.",
    ],
    sections: [
      { heading: "Why your customers call: one hundred calls sorted", body: [
        "The figure sorts one hundred calls in a week by reason.",
      ], visual: 'appels', after: [
        "**The log.** For a week, each person who picks up ticks a reason on a sheet: status of the file, document to resend, document received or not, appointment, real question. Five columns are enough. In the example, 76 calls out of 100 are about information that already exists in the company; the customer simply cannot read it without going through someone. **What it takes.** Each status call interrupts two people, the one who picks up and the one who knows; and the answer depends on who answers.",
        "**What a customer area is not.** A client portal is an electronic gateway to a collection of digital files, services, and information, accessible over the Internet through a web browser. It is neither a brochure site with a “sign in” button nor an ordering tool: if your customers are retailers placing orders, read [the guide to the B2B ordering portal](" + L.b2b + "); if your calls are complaints about a delivered product, [the guide to complaints and after-sales](" + L.reclamations + "). Here the subject is files that last: a service, a building job, a procedure, an enrolment.",
      ] },
      { heading: "What goes into a customer area: four blocks and a base", body: [
        "The accented layer is the status of the file.",
      ], visual: 'blocs', after: [
        "**Four blocks.** Status: the stage, what is blocking, who must act, what comes next and when. Documents, both ways: what you hand over to the customer, and what they must provide, as a list. Invoices and payments: what is due, what is paid, the receipt. Requests: a single thread per file, instead of messages scattered over three phones. **One block at a time.** Status can be delivered alone and is useful from day one; the others are added once it is in use.",
        "**The base.** It is not seen: sign-in, rights, messages, the log. And one precondition: one customer, one record. If the same customer exists three times, under three spellings, their files will not come together; that is the subject of [the guide to the single customer file](" + L.fichier + "). **And your current software?** If the files already live in management software, the customer area does not retype them: it reads them. How to connect the two, with or without a programming interface, is described in [the guide to integrating existing software](" + L.integrer + ").",
      ] },
      { heading: "The file, as the customer sees it", body: [
        "The figure shows the screen of a file, stopped at the documents stage.",
      ], visual: 'dossier', after: [
        "**Four answers.** Where is my file: the stage, out of five. What is expected of me: “waiting for you”, and the list of what is missing. What happens next, and when: the next step and its time limit. What has already happened: the log. A screen that only shows “in progress” removes no call. **Who must act.** It is the most useful information on the screen, for the customer as for you: a stopped file always carries a name, theirs or your team's.",
        "**The list of documents.** Each document has a status: received, missing, to redo, with the reason for the refusal, for example a blurred photo. The customer uploads from their phone; the upload is timestamped and attached to the file, not to one employee's conversation. **Every change notifies.** A change of stage, a refused document, a document handed over: a message goes out, with a link to the file; without it, nobody comes back to look. The choice of channel, and what each send represents, are covered in [the guide to notifications](" + L.notifications + ").",
      ] },
      { heading: "Who sees what: each sees only their own", body: [
        "The figure lists six actors, and what stays closed to each.",
      ], visual: 'droits', after: [
        "**The classic flaw.** It has a name: insecure direct object reference, a type of access control vulnerability. It occurs when an application uses an identifier for direct access to an object in its database but does not check for access control: if the address contains an easily enumerated number, such as file 1234, changing it is enough to read other people's. In the 2021 edition of the OWASP ranking, broken access control holds first place, having moved up from fifth. **The test.** Before opening, sign in as a customer and replace the number of your file with another: the only acceptable answer is a not-found page. It is redone for every new screen.",
        "**No password.** A customer who signs in four times a year will forget their password, and call back. Sign-in by code avoids that: a one-time password is valid for only one login session or transaction; it arrives on the phone or the email address you already know. The channels, what each send represents and the frauds are described in [the guide to sign-in by code](" + L.otp + "). **On the team's side.** A case officer sees their portfolio, a manager sees everything, and the log keeps who changed what: see [the guide to roles, rights and the audit log](" + L.roles + ").",
      ] },
      { heading: "Getting them to use it, in this order", body: [
        "The first step is accented: count.",
      ], visual: 'ordre', after: [
        "**Nothing to install.** A customer opens their file a few times, over a few weeks: they will install nothing for that. The area opens from a link, in the phone's browser. A progressive web app is a type of web app that can be installed on a device as a standalone application: it is enough here, and [the guide to the installable web app](" + L.pwa + ") says when it no longer is. **The invitation.** It goes out when the file opens, not in a campaign: a message, a link, a code. The first screen shows their file, not a registration form.",
        "**On the phone.** The team does not refuse to answer: it answers, then adds that it is in the customer's area, and sends the link again. Documents that still arrive on WhatsApp are filed in the right place by whoever receives them, during the first weeks. **Three figures, read every Monday.** The activation rate: the share of customers with an open file who have signed in at least once. The share of status calls, on the same log as at the start. The share of files complete on the first upload. If activation stays low, look first at the invitation, then at the status screen: does it really say what is blocking?",
      ] },
      { heading: "Six weeks, from the call log to the first review, in 2027", body: [
        "Six weeks in the example, the first one to count.",
      ], visual: 'calendrier', after: [
        "**Week 1, the log**: calls by reason, and the stages of a file written on one page. **Weeks 2 and 3, status and the base**: stages, who must act, sign-in by code, rights, and the cross-access test; open files are taken over. **Weeks 3 and 4, documents**: upload from the phone, list of documents, reason for refusal.",
        "**Weeks 4 and 5, invoices and requests.** **Weeks 5 and 6, the invitation and the review**: each new file opens with its invitation, then the call log is redone. In the example, the target set at the start is to bring status calls down from 76 out of 100 to fewer than 30; the log says whether it is met. The duration depends on the number of types of file and on whether software already holds them.",
      ], list: [
        "**What the manager receives**: the call log, the status screen for files, the list of documents, invoices and requests in one area, the cross-access test passed, and three figures every Monday.",
        "**What the company no longer does**: answer “where is my file” from memory, search an employee's phone for a document, send the same invoice three times, find out that a file has been waiting for ten days.",
        "**What is measured**: activation rate, share of status calls, share of files complete on the first upload, stopped files and since when.",
        "**What Symloop does**: the log and the stages, the customer area block by block, sign-in by code, rights and their test, stage messages, the connection to your software if there is one, then the measurement.",
      ], faq: [
        { q: "How do you build a customer area?", a: "By starting with a count of your calls for a week, by reason. Then one block at a time: the status of files first, then documents, invoices and requests. Underneath, a base: sign-in by code, rights per customer, a message at every change of stage." },
        { q: "What should go into a customer area?", a: "Four things: the status of each file with what is blocking and who must act, documents both ways with the list of documents expected, invoices and payments, and one request thread per file. Nothing the customer has not already asked for on the phone." },
        { q: "Will my customers use it?", a: "Yes, if the area holds the answer to their question, if the stage message leads to it through a link, and if your team points to it instead of answering from memory. An area announced once, then forgotten by the team, stays empty." },
        { q: "Do we need a mobile app or a website?", a: "For a file opened a few times, a web area that opens from a link in the phone's browser is enough: nobody installs an app for that. An app is justified when the customer comes back every week." },
        { q: "How do customers sign in without a password?", a: "With a one-time code sent to their phone or email address, valid for a single session. They have nothing to remember, and you have no passwords to reset." },
        { q: "How can we be sure a customer does not see someone else's file?", a: "With an access check on every page and every document, not only at sign-in, and with a test before opening: signed in as a customer, replace the number of your file with another in the address. The answer must be a not-found page." },
        { q: "Can the customer area be connected to our current software?", a: "Often, yes: if the software exposes its data through a programming interface or regular exports, the customer area reads the files instead of retyping them. This is checked on your software before promising a date." },
        { q: "Can the customer pay from their area?", a: "At the least they can see what is due, download their invoice and upload proof of a transfer. Online card payment is a separate piece of work, with its own formalities: it is added afterwards, if your business justifies it." },
        { q: "What happens to WhatsApp?", a: "It stays, for talking. But status, documents and invoices live in the file: the team answers, then sends the link to the area, and files the documents received by message. The habit forms file after file." },
        { q: "How long does it take, and where do we start?", a: "Six weeks in this guide's example, one block at a time; longer if there are several types of file or software to connect. Start with the week of call logging: it needs no tool and says which block to deliver first." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "A screen that only shows “in progress” removes no call." },
      { after: 4, text: "The invitation goes out when the file opens, not in a campaign." },
    ],
    cta: { eyebrow: "Tell us which files you follow, how many are open, and in which tool they live: we do the call log with you, then we deliver the status screen first", title: "A phone that rings for “where is my file”, documents scattered over three phones, invoices sent three times, or customers based in France following from afar a file handled in Algeria: we build the customer area, one block at a time", body: "Call log, status of files, list of documents, invoices, request thread, sign-in by code, rights and cross-access test, stage messages, connection to your software. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.otp, kind: '2027', name: 'Sign-in by code: SMS, WhatsApp, fraud, passkeys' },
      { href: L.notifications, kind: '2027', name: 'Notifications: which channel for which message' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and the audit log: who sees what' },
      { href: L.reclamations, kind: '2027', name: 'Complaints and after-sales: one ticket, time limits' },
    ] },
  },
  ar: {
    kind: 'فضاء الزبون · الجزائر · 2027', title: "كيف يُنشأ فضاء للزبون في الجزائر (2027): زبائنكم يتصلون عشر مرات في اليوم ليسألوا أين وصل ملفهم، ما يوضع فيه، من يرى ماذا، وكيف يستعملونه",
    dek: "«زبائننا يتصلون دون توقف ليسألوا أين وصل ملفهم، ويطلبون من جديد فاتورة أُرسلت من قبل، ويرسلون وثائقهم عبر " + I('WhatsApp') + " إلى ثلاثة أشخاص مختلفين. أريد فضاء للزبون يرى فيه كل واحد ملفه ووثائقه وفواتيره. ماذا نضع فيه، من أين نبدأ، وهل سيستعملونه؟» يستعملونه حين يجيب الفضاء عن السؤال الذي يطرحونه في الهاتف. ابدؤوا بحالة الملف، لا بقائمة وظائف.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['فضاء الزبون', 'بوابة الزبائن', 'متابعة الملف', 'إيداع الوثائق', 'الدخول برمز', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** فضاء الزبون يُعتمَد حين يجيب عن السؤال الذي يطرحه زبائنكم في الهاتف. عدّوا مكالماتكم أسبوعاً، حسب السبب: في مثال هذا الدليل، ثلاث مكالمات من أربع تسأل أين وصل الملف، أو تطلب إعادة فاتورة، أو هل وصلت وثيقة. فابنوا بهذا الترتيب: **حالة الملف** أولاً، مع ما يعطّل ومن عليه أن يتحرك؛ ثم **الوثائق** في الاتجاهين، **الفواتير**، و**خيط واحد للطلبات**. وتحتها، قاعدة: **دخول برمز**، دون كلمة مرور، **كل زبون لا يرى إلا ملفه**، و**رسالة عند كل تغيير**. ستة أسابيع في المثال، جزءاً بعد جزء.",
      "هذا الدليل موجَّه إلى مسيّر مؤسسة خدمات يرنّ هاتفها لأسئلة عن الحالة: مكتب، وكالة، مكتب دراسات، مركِّب، مركز تكوين، مرقٍّ، أو ورشة. وإلى المؤسس المقيم في فرنسا الذي يتابع زبائنه، أو هو نفسه، من بعيد ملفاً يُعالَج في الجزائر، في ساعات لا يجيب فيها أحد. التعريفات المذكورة آتية من مصادر علنية: بوابة الزبائن، كلمة المرور الصالحة لمرة واحدة، المرجع المباشر غير الآمن إلى كائن، وتطبيق الويب التقدّمي؛ والترتيب المذكور هو ترتيب " + I('OWASP') + "، طبعة 2021. المؤسسة ومكالماتها المئة ورزنامتها مثال مركَّب. هذا الدليل لا يتناول القواعد القانونية للبيانات الشخصية ولا لحفظ الوثائق: راجعوا مستشاركم.",
    ],
    sections: [
      { heading: "لماذا يتصل زبائنكم: مئة مكالمة مرتَّبة", body: [
        "الشكل يرتّب مئة مكالمة في أسبوع حسب السبب.",
      ], visual: 'appels', after: [
        "**السجل.** طيلة أسبوع، كل من يرفع السماعة يضع علامة على سبب في ورقة: حالة الملف، وثيقة تُعاد، وثيقة استُلمت أم لا، موعد، أو سؤال حقيقي. خمسة أعمدة تكفي. في المثال، 76 مكالمة من 100 تخص معلومة موجودة أصلاً في المؤسسة؛ لكن الزبون لا يستطيع قراءتها دون المرور بأحد. **ما يأخذه ذلك.** كل مكالمة عن الحالة تقطع شخصين، من يرفع السماعة ومن يعرف؛ والجواب يتوقف على من يجيب.",
        "**ما ليس فضاء الزبون.** بوابة الزبائن مدخل إلكتروني إلى مجموعة ملفات وخدمات ومعلومات، يُوصَل إليه عبر الإنترنت من متصفح. ليست موقعاً تعريفياً بزر «دخول»، ولا أداة طلبيات: إذا كان زبائنكم بائعين يطلبون سلعاً، فاقرؤوا [دليل بوابة الطلبيات بين المؤسسات](" + L.b2b + ")؛ وإذا كانت مكالماتكم شكاوى على منتوج سُلِّم، [دليل الشكاوى وخدمة ما بعد البيع](" + L.reclamations + "). وهنا، الأمر يخص ملفات تدوم: خدمة، ورشة بناء، إجراء، أو تسجيل.",
      ] },
      { heading: "ما يوضع في فضاء الزبون: أربعة أجزاء وقاعدة", body: [
        "الطبقة المبرزة هي حالة الملف.",
      ], visual: 'blocs', after: [
        "**أربعة أجزاء.** الحالة: المرحلة، ما يعطّل، من عليه أن يتحرك، ما يأتي بعدها ومتى. الوثائق، في الاتجاهين: ما تسلّمونه للزبون، وما عليه تقديمه لكم، في قائمة. الفواتير والتسديدات: ما هو مستحَق، ما سُدِّد، والوصل. الطلبات: خيط واحد لكل ملف، بدل رسائل متفرقة على ثلاثة هواتف. **جزء بعد جزء.** الحالة تُسلَّم وحدها وتنفع من اليوم الأول؛ والباقي يُضاف حين تُستعمل.",
        "**القاعدة.** لا تُرى: الدخول، الصلاحيات، الرسائل، والسجل. وشرط مسبق: زبون واحد، بطاقة واحدة. إذا وُجد الزبون نفسه ثلاث مرات، بثلاث كتابات، فلن تجتمع ملفاته؛ وهو موضوع [دليل ملف الزبون الموحَّد](" + L.fichier + "). **وبرنامجكم الحالي؟** إذا كانت الملفات تعيش أصلاً في برنامج تسيير، ففضاء الزبون لا يعيد إدخالها: يقرؤها. وطريقة ربط الاثنين، بواجهة برمجة أو دونها، موصوفة في [دليل إدماج برنامج موجود](" + L.integrer + ").",
      ] },
      { heading: "الملف، كما يراه الزبون", body: [
        "الشكل يُظهر شاشة ملف، متوقف عند مرحلة الوثائق.",
      ], visual: 'dossier', after: [
        "**أربعة أجوبة.** أين وصل ملفي: المرحلة، من خمس. ماذا يُنتظر مني: «في انتظاركم»، وقائمة ما ينقص. ماذا يجري بعدها، ومتى: الخطوة المقبلة وأجلها. ماذا جرى إلى الآن: السجل. وشاشة لا تعرض إلا «قيد المعالجة» لا تلغي أي مكالمة. **من عليه أن يتحرك.** هي أنفع معلومة في الشاشة، للزبون ولكم: الملف المتوقف يحمل دائماً اسماً، اسمه أو اسم فريقكم.",
        "**قائمة الوثائق.** لكل وثيقة حالة: مستلَمة، ناقصة، أو تُعاد، مع سبب الرفض، مثلاً صورة غير واضحة. الزبون يودِع من هاتفه؛ والإيداع مؤرَّخ بالساعة ومربوط بالملف، لا بمحادثة أحد العمّال. **كل تغيير يُعلِم.** تغيير مرحلة، وثيقة مرفوضة، أو وثيقة سُلِّمت: تخرج رسالة، برابط نحو الملف؛ ودونها، لا أحد يعود ليرى. واختيار القناة، وما يمثّله كل إرسال، مشروحان في [دليل الإشعارات](" + L.notifications + ").",
      ] },
      { heading: "من يرى ماذا: كل واحد لا يرى إلا ملفه", body: [
        "الشكل يسرد ستة أطراف، وما يبقى مغلقاً على كل واحد.",
      ], visual: 'droits', after: [
        "**الثغرة المعروفة.** لها اسم: المرجع المباشر غير الآمن إلى كائن، وهو نوع من ثغرات التحكم في الوصول. تظهر حين يستعمل تطبيق معرّفاً للوصول مباشرة إلى كائن في قاعدته دون التحقق من حق الوصول: فإذا احتوى العنوان رقماً يسهل تخمينه، مثل ملف 1234، يكفي تغييره لقراءة ملفات الآخرين. وفي طبعة 2021 من ترتيب " + I('OWASP') + "، يحتل التحكم المعطوب في الوصول المرتبة الأولى، بعد صعوده من الخامسة. **الاختبار.** قبل الفتح، يُدخَل كزبون ويُستبدل رقم ملفه برقم آخر: والجواب الوحيد المقبول صفحة غير موجودة. ويُعاد عند كل شاشة جديدة.",
        "**دون كلمة مرور.** الزبون الذي يدخل أربع مرات في السنة سينسى كلمة مروره، وسيتصل. والدخول برمز يجنّب ذلك: كلمة المرور الصالحة لمرة واحدة لا تصلح إلا لجلسة دخول واحدة أو عملية واحدة؛ وتصل إلى الهاتف أو البريد الذي تعرفونه أصلاً. والقنوات، وما يمثّله كل إرسال، والاحتيالات، موصوفة في [دليل الدخول برمز](" + L.otp + "). **من جهة الفريق.** المكلَّف بالملف يرى محفظته، المسؤول يرى الكل، والسجل يحفظ من غيّر ماذا: انظر [دليل الأدوار والصلاحيات وسجل التدقيق](" + L.roles + ").",
      ] },
      { heading: "كي يستعملوه، بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: العدّ.",
      ], visual: 'ordre', after: [
        "**لا شيء يُثبَّت.** الزبون يفتح ملفه بضع مرات، خلال بضعة أسابيع: ولن يثبّت شيئاً من أجل ذلك. الفضاء يُفتح من رابط، في متصفح الهاتف. وتطبيق الويب التقدّمي نوع من تطبيقات الويب يمكن تثبيته على جهاز كتطبيق مستقل: وهو كافٍ هنا، و[دليل تطبيق الويب القابل للتثبيت](" + L.pwa + ") يقول متى لا يكفي. **الدعوة.** تخرج عند فتح الملف، لا في حملة: رسالة، رابط، ورمز. والشاشة الأولى تُظهر ملفه، لا استمارة تسجيل.",
        "**في الهاتف.** الفريق لا يرفض الجواب: يجيب، ثم يضيف أن ذلك في فضاء الزبون، ويعيد إرسال الرابط. والوثائق التي ما زالت تصل عبر " + I('WhatsApp') + " يرتّبها في الملف من يستلمها، في الأسابيع الأولى. **ثلاثة أرقام، تُقرأ كل اثنين.** نسبة التفعيل: حصة الزبائن أصحاب ملف مفتوح الذين دخلوا مرة على الأقل. حصة مكالمات الحالة، على السجل نفسه كما في البداية. وحصة الملفات الكاملة من أول إيداع. وإذا بقي التفعيل ضعيفاً، فانظروا أولاً إلى الدعوة، ثم إلى شاشة الحالة: هل تقول فعلاً ما يعطّل؟",
      ] },
      { heading: "ستة أسابيع، من سجل المكالمات إلى أول حصيلة، سنة 2027", body: [
        "ستة أسابيع في المثال، والأول منها للعدّ.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، السجل**: المكالمات حسب السبب، ومراحل الملف مكتوبة في صفحة. **الأسبوعان 2 و3، الحالة والقاعدة**: المراحل، من عليه أن يتحرك، الدخول برمز، الصلاحيات، واختبار الدخول المتقاطع؛ وتُدخَل الملفات الجارية. **الأسبوعان 3 و4، الوثائق**: الإيداع من الهاتف، قائمة الوثائق، وسبب الرفض.",
        "**الأسبوعان 4 و5، الفواتير والطلبات.** **الأسبوعان 5 و6، الدعوة والحصيلة**: كل ملف جديد يُفتح مع دعوته، ثم يُعاد سجل المكالمات. في المثال، الهدف المحدَّد في البداية هو إنزال مكالمات الحالة من 76 من 100 إلى أقل من 30؛ والسجل يقول هل تحقق. والمدة تتوقف على عدد أنواع الملفات وعلى وجود برنامج تعيش فيه أصلاً.",
      ], list: [
        "**ما يستلمه المسيّر**: سجل المكالمات، شاشة حالة الملفات، قائمة الوثائق، الفواتير والطلبات في فضاء واحد، اختبار الدخول المتقاطع ناجحاً، وثلاثة أرقام كل اثنين.",
        "**ما لم تعد المؤسسة تفعله**: الجواب من الذاكرة عن «أين وصل ملفي»، التفتيش في هاتف عامل عن وثيقة، إرسال الفاتورة نفسها ثلاث مرات، واكتشاف أن ملفاً ينتظر منذ عشرة أيام.",
        "**ما يُقاس**: نسبة التفعيل، حصة مكالمات الحالة، حصة الملفات الكاملة من أول إيداع، والملفات المتوقفة ومنذ متى.",
        "**ما تفعله Symloop**: السجل والمراحل، فضاء الزبون جزءاً بعد جزء، الدخول برمز، الصلاحيات واختبارها، رسائل المراحل، الربط ببرنامجكم إن وُجد، ثم القياس.",
      ], faq: [
        { q: "كيف يُنشأ فضاء للزبون؟", a: "بالبدء بعدّ مكالماتكم أسبوعاً، حسب السبب. ثم جزءاً بعد جزء: حالة الملفات أولاً، ثم الوثائق، الفواتير، والطلبات. وتحتها، قاعدة: دخول برمز، صلاحيات لكل زبون، ورسالة عند كل تغيير في المرحلة." },
        { q: "ماذا نضع في فضاء الزبون؟", a: "أربعة أشياء: حالة كل ملف مع ما يعطّل ومن عليه أن يتحرك، الوثائق في الاتجاهين مع قائمة الوثائق المنتظَرة، الفواتير والتسديدات، وخيط طلبات لكل ملف. ولا شيء لم يطلبه الزبون من قبل في الهاتف." },
        { q: "هل سيستعمله زبائني؟", a: "نعم، إذا كان الفضاء يحتوي جواب سؤالهم، وإذا كانت رسالة المرحلة تقود إليه برابط، وإذا كان فريقكم يُحيل عليه بدل الجواب من الذاكرة. والفضاء الذي أُعلن عنه مرة ثم نسيه الفريق يبقى فارغاً." },
        { q: "هل يلزم تطبيق للهاتف أم موقع؟", a: "لملف يُفتح بضع مرات، يكفي فضاء ويب يُفتح من رابط في متصفح الهاتف: لا أحد يثبّت تطبيقاً من أجل ذلك. والتطبيق يُبرَّر حين يعود الزبون كل أسبوع." },
        { q: "كيف يدخل الزبائن دون كلمة مرور؟", a: "برمز صالح لمرة واحدة يُرسَل إلى هاتفهم أو بريدهم، يصلح لجلسة واحدة. لا شيء يحفظونه، ولا كلمات مرور تعيدون ضبطها." },
        { q: "كيف نتأكد أن زبوناً لا يرى ملف غيره؟", a: "بمراقبة حق الوصول على كل صفحة وكل وثيقة، لا عند الدخول فقط، وباختبار قبل الفتح: بعد الدخول كزبون، يُستبدل في العنوان رقم ملفه برقم آخر. والجواب يجب أن يكون صفحة غير موجودة." },
        { q: "هل يمكن ربط فضاء الزبون ببرنامجنا الحالي؟", a: "غالباً، نعم: إذا كان البرنامج يعرض بياناته بواجهة برمجة أو بتصديرات منتظمة، ففضاء الزبون يقرأ الملفات بدل إعادة إدخالها. ويُتحقَّق من ذلك على برنامجكم قبل الوعد بأجل." },
        { q: "هل يستطيع الزبون الدفع من فضائه؟", a: "يستطيع على الأقل أن يرى ما هو مستحَق، يحمّل فاتورته، ويودِع إثبات تحويل. والدفع بالبطاقة على الخط ورشة مستقلة، بإجراءاتها: يُضاف بعدها، إذا كان نشاطكم يبرّره." },
        { q: "وماذا عن WhatsApp؟", a: "يبقى، للكلام. لكن الحالة والوثائق والفواتير تعيش في الملف: الفريق يجيب، ثم يرسل رابط الفضاء، ويرتّب في الملف الوثائق المستلَمة برسالة. والعادة تُكتسَب ملفاً بعد ملف." },
        { q: "كم يلزم من وقت، ومن أين نبدأ؟", a: "ستة أسابيع في مثال هذا الدليل، جزءاً بعد جزء؛ وأكثر إذا تعددت أنواع الملفات أو وُجد برنامج يُربط. وابدؤوا بأسبوع سجل المكالمات: لا يتطلب أي أداة ويقول أي جزء يُسلَّم أولاً." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "شاشة لا تعرض إلا «قيد المعالجة» لا تلغي أي مكالمة." },
      { after: 4, text: "الدعوة تخرج عند فتح الملف، لا في حملة." },
    ],
    cta: { eyebrow: "قولوا لنا أي ملفات تتابعون، كم منها مفتوح، وفي أي أداة تعيش: ننجز سجل المكالمات معكم، ثم نسلّم شاشة الحالة أولاً", title: "هاتف يرنّ من أجل «أين وصل ملفي»، وثائق متفرقة على ثلاثة هواتف، فواتير تُرسَل ثلاث مرات، أو زبائن مقيمون في فرنسا يتابعون من بعيد ملفاً يُعالَج في الجزائر: نبني فضاء الزبون، جزءاً بعد جزء", body: "سجل المكالمات، حالة الملفات، قائمة الوثائق، الفواتير، خيط الطلبات، الدخول برمز، الصلاحيات واختبار الدخول المتقاطع، رسائل المراحل، والربط ببرنامجكم. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.otp, kind: '2027', name: 'الدخول برمز: رسالة نصية، واتساب، احتيال، ومفاتيح مرور' },
      { href: L.notifications, kind: '2027', name: 'الإشعارات: أي قناة لأي رسالة' },
      { href: L.roles, kind: '2027', name: 'الأدوار والصلاحيات وسجل التدقيق: من يرى ماذا' },
      { href: L.reclamations, kind: '2027', name: 'الشكاوى وخدمة ما بعد البيع: تذكرة واحدة، وآجال' },
    ] },
  },
};

const KEYWORDS = "comment créer un espace client 2027, espace client algérie, portail client entreprise, créer un portail client, suivi de dossier en ligne, dépôt de documents en ligne client, connexion par code sans mot de passe, extranet client, espace client société de services, où en est mon dossier, how to build a customer portal algeria 2027, client portal file tracking, كيف أنشئ فضاء للزبون 2027, بوابة الزبائن, متابعة الملف على الخط";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
