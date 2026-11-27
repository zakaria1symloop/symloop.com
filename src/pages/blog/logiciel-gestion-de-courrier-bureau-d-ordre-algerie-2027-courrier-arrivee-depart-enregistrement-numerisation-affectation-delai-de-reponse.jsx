import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-gestion-de-courrier-bureau-d-ordre-algerie-2027-courrier-arrivee-depart-enregistrement-numerisation-affectation-delai-de-reponse.mjs';

const SLUG = 'logiciel-gestion-de-courrier-bureau-d-ordre-algerie-2027-courrier-arrivee-depart-enregistrement-numerisation-affectation-delai-de-reponse';
const FIGURES = ['couches', 'vie', 'trajets', 'types', 'encours', 'calendrier'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  archiver: '/blog/comment-archiver-des-documents-en-entreprise-en-algerie-2027-papier-et-numerique-plan-de-classement-nom-des-fichiers-numerisation-recherche/',
  intranet: '/blog/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  factures: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  sav: '/blog/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
};

const CONTENT = {
  fr: {
    kind: 'Gestion du courrier · Algérie · 2027', title: "Logiciel de gestion de courrier en Algérie (2027) : un courrier resté trois semaines sur un bureau, une réponse partie hors délai, personne ne sait qui l'a ; bureau d'ordre, enregistrement, numérisation, affectation, échéances, et ce qu'on met en place",
    dek: "« Un courrier important est arrivé chez nous il y a un mois. Il a été noté dans le cahier du bureau d'ordre, puis il est monté à la direction, puis dans un service, et la réponse est partie avec huit jours de retard. Personne n'a pu me dire où il était pendant trois semaines. Chaque service a son propre classeur, et pour retrouver une lettre de l'an dernier il faut une matinée. Existe-t-il un logiciel de gestion de courrier pour cela ? » Le cahier dit qu'un courrier est arrivé ; il ne dit ni qui l'a, ni depuis quand, ni pour quand.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de gestion de courrier', "Bureau d'ordre", 'Courrier arrivée et départ', 'Affectation et échéances', 'Suivi et recherche du courrier', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de gestion de courrier remplace le cahier du bureau d'ordre par un registre qui fait quatre choses. **Enregistrer** : chaque courrier arrivé ou parti reçoit un numéro d'ordre, une date, un expéditeur, un objet. **Numériser** : le courrier est scanné à l'arrivée ; c'est l'image qui circule, l'original est rangé une fois. **Affecter** : un service, une personne, une échéance. **Suivre** : ce qui attend, chez qui, depuis quand, avec un rappel avant l'échéance. Dans l'exemple de cette page, le même courrier met 23 jours de main en main et 7 jours avec le registre, pour trois jours de travail réel.",
      "Cette page s'adresse à celles et ceux qui dirigent une entreprise, un établissement ou une administration où le courrier papier compte encore : marchés, banques, clients, fournisseurs, organismes. Les définitions viennent de sources publiques : courrier, salle de courrier numérique, gestion des documents d'activité, flux de travail, reconnaissance optique de caractères, métadonnées, piste d'audit, courrier recommandé, délai de traitement. Le courrier suivi, ses trajets et le registre d'un matin sont un exemple construit. La page ne traite ni de la valeur juridique des documents, ni des durées légales de conservation, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans un logiciel de gestion de courrier", body: [
        "La figure empile cinq couches ; la troisième est celle qui manque au cahier.",
      ], visual: 'couches', after: [
        "**Le courrier.** Le courrier, ou la poste, est un système de transport physique de cartes, de lettres et de colis ; ce qui arrive chez vous est du papier, daté, parfois unique. **La salle de courrier numérique.** C'est l'automatisation du traitement du courrier arrivé : les entreprises numérisent le courrier entrant et automatisent son classement et sa distribution dans l'organisation. **L'enregistrement.** Un numéro d'ordre par année, dans la numérotation que vous utilisez déjà ; une date ; un expéditeur choisi dans une liste qui se construit ; un objet. Ce sont les métadonnées du courrier : des données qui définissent et décrivent les caractéristiques d'autres données.",
        "**La numérisation.** Un scanner convertit le document en image ; la reconnaissance optique de caractères convertit l'image d'un texte imprimé ou manuscrit en texte lisible par la machine. Le courrier devient cherchable par son contenu, comme dans [la recherche dans une application](" + L.recherche + "). **L'affectation.** C'est la couche accentuée, détaillée plus bas. **Les droits.** Tout le monde ne voit pas tout : un courrier confidentiel n'est visible que de la direction et de son destinataire, voir [les rôles et droits](" + L.roles + "). **L'archive.** Une fois clos, le courrier rejoint le plan de classement décrit dans [l'archivage des documents](" + L.archiver + ").",
      ] },
      { heading: "La vie d'un courrier arrivé", body: [
        "La figure suit un courrier arrivé en six temps.",
      ], visual: 'vie', after: [
        "**Le flux.** Un flux de travail est un enchaînement d'activités orchestré et répétable. Celui du courrier existe déjà chez vous, dans les habitudes ; le logiciel le rend visible. **À l'accueil.** Le pli est ouvert, daté, enregistré et scanné en une seule manipulation ; une étiquette à code-barres, collée sur l'original, porte son numéro. **L'affectation.** La direction, ou la personne qu'elle délègue, lit l'image à l'écran, choisit le service, écrit une consigne et fixe l'échéance. C'est l'annotation en marge, sans le papier qui attend dans un parapheur.",
        "**Dans le service.** La personne désignée reçoit une notification, voir [les notifications](" + L.notifications + "), ouvre le courrier et accuse lecture ; le principe est celui de [l'intranet](" + L.intranet + ") et de son accusé de lecture. **La réponse.** Le projet se prépare à partir du courrier, se valide, se signe ; le courrier parti reçoit son propre numéro et reste lié au courrier arrivé. **La clôture.** Répondu, transmis pour information, ou classé sans suite : chaque courrier finit dans un état, avec une date. **La trace.** Chaque action est horodatée : une piste d'audit est un enregistrement chronologique qui documente la suite des opérations ayant touché un dossier.",
      ] },
      { heading: "Le même courrier, deux trajets", body: [
        "La figure compare deux trajets du même courrier, pour un délai de réponse de quinze jours.",
      ], visual: 'trajets', after: [
        "**De main en main.** Deux jours à l'accueil, cinq à la direction, neuf dans le service, cinq à la signature, deux au départ : vingt-trois jours, huit de trop. Personne n'a mal travaillé ; le courrier a attendu, et personne ne le savait. **Avec le registre.** Enregistré et affecté le jour même, trois jours dans le service, un à la signature, un au départ : sept jours. **Le délai de traitement.** C'est le temps pris pour accomplir un processus ou répondre à une demande. Ici, il se décompose en trois jours de travail et, selon le trajet, vingt ou quatre jours d'attente.",
        "**Ce qui fait la différence.** Rien de spectaculaire : une date à chaque passage, un nom à chaque étape, et un rappel. Trois jours avant l'échéance, la personne qui détient le courrier est prévenue ; le jour de l'échéance, sa hiérarchie l'est aussi. **Les délais.** Ils se règlent par type de courrier : une demande d'information n'a pas l'urgence d'une réclamation. Pour celle-ci, le suivi rejoint celui des [réclamations clients](" + L.sav + "). **Ce que l'on mesure.** Délai moyen de réponse par type et par service ; part des courriers répondus dans le délai ; temps passé à chaque étape.",
      ] },
      { heading: "Six sortes de courrier, un seul registre", body: [
        "La figure donne, pour six sortes de courrier, ce qu'on enregistre et ce qu'on suit.",
      ], visual: 'types', after: [
        "**Arrivé et parti.** Deux numérotations, liées entre elles : la réponse renvoie au courrier qui l'a provoquée. **Le recommandé.** Le courrier recommandé est un service postal qui donne à l'expéditeur une preuve de dépôt par un reçu et, sur demande, une vérification de la remise. Le registre conserve la référence de l'envoi et l'image de l'accusé de réception à côté du courrier parti. **La remise en main propre.** La décharge signée est photographiée et jointe.",
        "**La note interne.** Elle part vers plusieurs services ; le registre dit qui l'a lue. **Le message électronique.** Certains messages valent courrier : une commande, une réclamation, une convocation. Leur destinataire les verse au registre d'un geste, et ils suivent le même chemin. **La facture fournisseur.** Elle arrive par le même guichet ; ses champs peuvent être lus automatiquement, voir [la lecture des factures par IA](" + L.factures + "), puis elle part vers la comptabilité avec son numéro. **Un seul registre.** L'intérêt n'est pas de tout traiter de la même façon, mais de pouvoir tout retrouver au même endroit.",
      ] },
      { heading: "Ce qui attend une réponse, ce matin", body: [
        "La figure montre le registre un matin : un carré par courrier en attente de réponse.",
      ], visual: 'encours', after: [
        "**Trois couleurs.** Sur 64 courriers en attente, 41 sont dans les délais, 14 arrivent à échéance dans les cinq jours, 9 sont en retard. **Où sont les retards.** Quatre à la direction technique, dont un depuis 31 jours ; trois au service juridique ; deux au service commercial. Ce n'est pas un classement des services : c'est la liste de ce qu'il faut débloquer aujourd'hui. **Les quatorze.** Ce sont eux qui comptent le plus : ils peuvent encore partir à temps.",
        "**La vue du matin.** Elle tient sur un écran, et peut vivre à côté des autres chiffres sur [un tableau de bord](" + L.dashboard + "). **La gestion des documents d'activité.** C'est la fonction qui gère l'information d'une organisation tout au long de son cycle de vie, de sa création ou de sa réception jusqu'à son sort final ; le registre en est la porte d'entrée. **Retrouver.** Par numéro, par expéditeur, par date, par objet, par mot contenu dans le texte : une lettre de l'an dernier se retrouve en quelques secondes, avec sa réponse. **Ce que l'on mesure.** Courriers en attente par service ; retards et leur ancienneté ; courriers sans détenteur ; courriers sans échéance.",
      ] },
      { heading: "Sept semaines pour un siège", body: [
        "Sept semaines dans l'exemple, pour un site.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos types de courrier, vos services, vos délais, et la numérotation déjà en usage, que l'on garde. **Le matériel.** Un scanner à l'accueil et les postes existants : rien d'autre n'est indispensable pour commencer. **Le passé.** On ne ressaisit pas dix ans de cahiers : le registre démarre à une date, et les courriers encore ouverts à cette date y entrent.",
        "**Les habitudes.** Le projet réussit quand l'accueil enregistre tout, sans exception, et quand la direction affecte à l'écran : deux gestes, à tenir dès le premier jour. **Prêt à l'emploi ou sur mesure.** Des logiciels de gestion de courrier existent, y compris libres, et suffisent pour un registre simple. Le sur-mesure se justifie quand il faut vos circuits de validation, plusieurs sites, l'arabe et le français, ou un lien avec votre logiciel métier. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que vous recevez** : un registre arrivée et départ avec votre numérotation ; la numérisation à l'accueil et la lecture du texte ; l'affectation avec consigne et échéance ; les rappels ; la réponse liée au courrier ; la vue du matin ; la recherche ; l'historique de chaque courrier.",
        "**Ce que l'entreprise évite** : le courrier resté trois semaines sur un bureau, la réponse partie hors délai, la lettre introuvable, le classeur par service, la question « qui l'a ? ».",
        "**Ce qui est mesuré** : courriers arrivés et partis par mois et par type ; délai moyen de réponse ; part des réponses dans le délai ; courriers en attente par service ; retards et leur ancienneté.",
        "**Ce que fait Symloop** : le cadrage des types et des délais, l'enregistrement et la numérisation, l'affectation et les rappels, le circuit de réponse, la vue de suivi, la recherche, en arabe et en français, pour un site ou plusieurs.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel de gestion de courrier ?", a: "Un registre informatisé du courrier arrivé et parti : chaque courrier y reçoit un numéro, est numérisé, affecté à une personne avec une échéance, et suivi jusqu'à sa réponse ou son classement." },
        { q: "Qu'est-ce qu'un bureau d'ordre ?", a: "Le point où tout le courrier d'une organisation est reçu, enregistré et réparti, et d'où le courrier part. Le logiciel en reprend le registre et y ajoute le suivi." },
        { q: "Comment enregistrer le courrier arrivée et départ ?", a: "Par un numéro d'ordre, une date, un expéditeur ou un destinataire, un objet et un type, saisis à l'accueil en même temps que le scan. Arrivée et départ ont chacun leur numérotation, liées entre elles." },
        { q: "Comment suivre un courrier dans l'entreprise ?", a: "En l'affectant à une personne avec une échéance. Le registre montre alors, pour chaque courrier, qui le détient, depuis quand, et combien de jours il reste." },
        { q: "Comment ne plus répondre hors délai ?", a: "Avec un délai par type de courrier, un rappel à la personne quelques jours avant l'échéance, une alerte à sa hiérarchie le jour même, et une vue quotidienne des retards." },
        { q: "Faut-il scanner tout le courrier ?", a: "Tout ce qui est enregistré, oui : c'est l'image qui circule, et l'original n'est manipulé qu'une fois. Les plis sans intérêt, publicités ou doublons, ne sont ni enregistrés ni scannés." },
        { q: "Peut-on retrouver un ancien courrier rapidement ?", a: "Oui, par numéro, expéditeur, date, objet ou mot du texte, puisque le contenu scanné est lu. La réponse apparaît à côté du courrier qui l'a provoquée." },
        { q: "Les messages électroniques entrent-ils dans le registre ?", a: "Ceux qui valent courrier, oui : leur destinataire les y verse, et ils reçoivent un numéro, un détenteur et une échéance comme un courrier papier." },
        { q: "Qui voit quel courrier ?", a: "Chacun voit ce qui lui est affecté et ce que son rôle autorise. Un courrier marqué confidentiel n'est visible que de la direction et des personnes désignées." },
        { q: "Combien de temps faut-il pour mettre en place un tel logiciel ?", a: "Sept semaines dans l'exemple de cette page, pour un site, cadrage compris. Le registre démarre à une date, sans ressaisie des anciens cahiers." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Personne n'a mal travaillé ; le courrier a attendu, et personne ne le savait." },
      { after: 4, text: "Un registre papier dit ce qui est arrivé ; un registre tenu dans un logiciel dit ce qui attend, chez qui, et depuis quand." },
    ],
    cta: { eyebrow: "Dites-nous combien de courriers par jour, combien de services, et comment vous numérotez aujourd'hui : nous commençons par une semaine de cadrage", title: "Courrier introuvable, réponse hors délai, cahier du bureau d'ordre, classeur par service, ou plusieurs sites à suivre depuis le siège", body: "Symloop construit le registre de courrier qui correspond à votre organisation : enregistrement, numérisation, affectation, rappels, réponse, suivi. Décrivez-nous vos types de courrier, vos délais et vos circuits de validation." },
    related: { label: 'À lire aussi', items: [
      { href: L.archiver, kind: '2027', name: 'Archiver les documents de l’entreprise : plan de classement, numérisation, recherche' },
      { href: L.intranet, kind: '2027', name: 'Créer un intranet : notes de service, demandes internes, accusé de lecture' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi, qui modifie quoi' },
      { href: L.factures, kind: '2027', name: 'Lire les factures et les bons de commande par IA' },
    ] },
  },
  en: {
    kind: 'Mail registry · Algeria · 2027', title: "Mail management software in Algeria (2027): a letter left on a desk for three weeks, a reply sent after the deadline, nobody knows who has it; mail registry, registration, scanning, assignment, due dates, and what we put in place",
    dek: "“An important letter reached us a month ago. It was noted in the mail registry ledger, then it went up to management, then to a department, and the reply went out eight days late. Nobody could tell me where it was for three weeks. Each department has its own binder, and finding a letter from last year takes a morning. Is there mail management software for that?” The ledger says that a letter arrived; it says neither who has it, nor since when, nor by when.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Mail management software', 'Mail registry', 'Incoming and outgoing mail', 'Assignment and due dates', 'Tracking and searching mail', 'Algeria 2027'],
    intro: [
      "**Short answer.** Mail management software replaces the mail registry ledger with a register that does four things. **Register**: every letter received or sent gets an order number, a date, a sender, a subject. **Scan**: the letter is scanned on arrival; it is the image that circulates, and the original is filed once. **Assign**: a department, a person, a due date. **Track**: what is waiting, with whom, since when, with a reminder before the due date. In this page's example, the same letter takes 23 days from hand to hand and 7 days with the register, for three days of real work.",
      "This page is for those who run a company, an institution or an administration where paper mail still matters: contracts, banks, customers, suppliers, public bodies. The definitions come from public sources: mail, digital mailroom, records management, workflow, optical character recognition, metadata, audit trail, registered mail, turnaround time. The letter followed, its journeys and the register on one morning are a constructed example. The page covers neither the legal value of documents, nor legal retention periods, nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside mail management software", body: [
        "The figure stacks five layers; the third is the one the ledger lacks.",
      ], visual: 'couches', after: [
        "**Mail.** The mail, or post, is a system for physically transporting postcards, letters, and parcels; what reaches you is paper, dated, sometimes unique. **The digital mailroom.** It is the automation of incoming mail processes: companies digitise incoming mail and automate its classification and distribution within the organisation. **Registration.** An order number per year, in the numbering you already use; a date; a sender chosen from a list that builds up; a subject. That is the letter's metadata: data that defines and describes the characteristics of other data.",
        "**Scanning.** A scanner converts the document into an image; optical character recognition converts the image of printed or handwritten text into machine-encoded text. The letter becomes searchable by its content, as in [search in an application](" + L.recherche + "). **Assignment.** That is the accented layer, detailed below. **Rights.** Not everyone sees everything: a confidential letter is visible only to management and its addressee, see [roles and rights](" + L.roles + "). **The archive.** Once closed, the letter joins the filing plan described in [archiving documents](" + L.archiver + ").",
      ] },
      { heading: "The life of an incoming letter", body: [
        "The figure follows an incoming letter in six steps.",
      ], visual: 'vie', after: [
        "**The workflow.** A workflow is an orchestrated and repeatable pattern of activity. The one for mail already exists in your organisation, in its habits; the software makes it visible. **At reception.** The envelope is opened, dated, registered and scanned in a single handling; a barcode label, stuck on the original, carries its number. **Assignment.** Management, or the person it delegates, reads the image on screen, chooses the department, writes an instruction and sets the due date. It is the note in the margin, without the paper waiting in a signature folder.",
        "**In the department.** The person named receives a notification, see [notifications](" + L.notifications + "), opens the letter and acknowledges reading it; the principle is that of [the intranet](" + L.intranet + ") and its read receipt. **The reply.** The draft is prepared from the letter, approved, signed; the outgoing letter gets its own number and stays linked to the incoming one. **Closing.** Answered, passed on for information, or filed with no action: every letter ends in a state, with a date. **The trace.** Each action is timestamped: an audit trail is a chronological record that documents the sequence of activities that have affected a file.",
      ] },
      { heading: "The same letter, two journeys", body: [
        "The figure compares two journeys of the same letter, for a fifteen-day reply deadline.",
      ], visual: 'trajets', after: [
        "**From hand to hand.** Two days at reception, five with management, nine in the department, five at signature, two at dispatch: twenty-three days, eight too many. Nobody worked badly; the letter waited, and nobody knew. **With the register.** Registered and assigned the same day, three days in the department, one at signature, one at dispatch: seven days. **Turnaround time.** It is the amount of time taken to complete a process or fulfil a request. Here it breaks down into three days of work and, depending on the journey, twenty or four days of waiting.",
        "**What makes the difference.** Nothing spectacular: a date at each handover, a name at each step, and a reminder. Three days before the due date, the person holding the letter is warned; on the due date, their manager is too. **Deadlines.** They are set per type of mail: a request for information does not have the urgency of a complaint. For the latter, tracking joins that of [customer complaints](" + L.sav + "). **What is measured.** Average reply time per type and per department; share of letters answered within the deadline; time spent at each step.",
      ] },
      { heading: "Six kinds of mail, a single register", body: [
        "The figure gives, for six kinds of mail, what is registered and what is tracked.",
      ], visual: 'types', after: [
        "**Incoming and outgoing.** Two numberings, linked to each other: the reply points back to the letter that prompted it. **Registered mail.** Registered mail is a postal service that allows the sender proof of mailing via a receipt and, upon request, verification that the item was delivered. The register keeps the sending reference and the image of the acknowledgement next to the outgoing letter. **Delivery by hand.** The signed receipt is photographed and attached.",
        "**The internal memo.** It goes to several departments; the register says who has read it. **The e-mail.** Some messages count as mail: an order, a complaint, a summons to a meeting. Their recipient files them in the register in one gesture, and they follow the same path. **The supplier invoice.** It arrives through the same counter; its fields can be read automatically, see [reading invoices with AI](" + L.factures + "), then it goes to accounts with its number. **A single register.** The point is not to handle everything the same way, but to be able to find everything in the same place.",
      ] },
      { heading: "What is awaiting a reply, this morning", body: [
        "The figure shows the register one morning: one square per letter awaiting a reply.",
      ], visual: 'encours', after: [
        "**Three colours.** Of 64 letters waiting, 41 are on time, 14 fall due within five days, 9 are overdue. **Where the overdue ones are.** Four with the technical department, one of them for 31 days; three with the legal department; two with the sales department. It is not a ranking of departments: it is the list of what has to be unblocked today. **The fourteen.** They are the ones that matter most: they can still go out on time.",
        "**The morning view.** It fits on one screen, and can live next to the other figures on [a dashboard](" + L.dashboard + "). **Records management.** It is the function that manages an organisation's information throughout its life cycle, from the time of creation or receipt to its eventual disposition; the register is its front door. **Finding.** By number, by sender, by date, by subject, by a word in the text: a letter from last year is found in a few seconds, with its reply. **What is measured.** Letters waiting per department; overdue ones and their age; letters with no holder; letters with no due date.",
      ] },
      { heading: "Seven weeks for a head office", body: [
        "Seven weeks in the example, for one site.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your types of mail, your departments, your deadlines, and the numbering already in use, which is kept. **Equipment.** A scanner at reception and the existing workstations: nothing else is essential to begin. **The past.** Ten years of ledgers are not re-entered: the register starts on a date, and the letters still open on that date go into it.",
        "**Habits.** The project succeeds when reception registers everything, without exception, and when management assigns on screen: two gestures, to be kept from the first day. **Ready-made or custom.** Mail management software exists, including open-source products, and is enough for a simple register. Custom work is justified when you need your own approval circuits, several sites, Arabic and French, or a link with your business software. **The durations** are those of a constructed example.",
      ], list: [
        "**What you receive**: an incoming and outgoing register with your numbering; scanning at reception and text reading; assignment with an instruction and a due date; reminders; the reply linked to the letter; the morning view; search; the history of each letter.",
        "**What the company avoids**: the letter left on a desk for three weeks, the reply sent after the deadline, the letter nobody can find, the binder per department, the question “who has it?”.",
        "**What is measured**: letters received and sent per month and per type; average reply time; share of replies within the deadline; letters waiting per department; overdue ones and their age.",
        "**What Symloop does**: scoping the types and deadlines, registration and scanning, assignment and reminders, the reply circuit, the tracking view, search, in Arabic and in French, for one site or several.",
      ], faq: [
        { q: "What is mail management software?", a: "A computerised register of incoming and outgoing mail: each letter gets a number, is scanned, assigned to a person with a due date, and tracked until it is answered or filed." },
        { q: "What is a mail registry?", a: "The point where all of an organisation's mail is received, registered and distributed, and from which mail leaves. The software takes over its register and adds tracking." },
        { q: "How do you register incoming and outgoing mail?", a: "With an order number, a date, a sender or a recipient, a subject and a type, entered at reception at the same time as the scan. Incoming and outgoing each have their own numbering, linked to each other." },
        { q: "How do you track a letter inside the company?", a: "By assigning it to a person with a due date. The register then shows, for each letter, who holds it, since when, and how many days are left." },
        { q: "How do you stop replying after the deadline?", a: "With a deadline per type of mail, a reminder to the person a few days before the due date, an alert to their manager on the day, and a daily view of what is overdue." },
        { q: "Does all mail have to be scanned?", a: "Everything that is registered, yes: it is the image that circulates, and the original is handled only once. Items of no interest, advertising or duplicates, are neither registered nor scanned." },
        { q: "Can an old letter be found quickly?", a: "Yes, by number, sender, date, subject or a word in the text, since the scanned content is read. The reply appears next to the letter that prompted it." },
        { q: "Do e-mails go into the register?", a: "Those that count as mail, yes: their recipient files them there, and they get a number, a holder and a due date like a paper letter." },
        { q: "Who sees which letter?", a: "Each person sees what is assigned to them and what their role allows. A letter marked confidential is visible only to management and the people named." },
        { q: "How long does it take to put such software in place?", a: "Seven weeks in this page's example, for one site, scoping included. The register starts on a date, without re-entering the old ledgers." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Nobody worked badly; the letter waited, and nobody knew." },
      { after: 4, text: "A paper register says what arrived; a register kept in software says what is waiting, with whom, and since when." },
    ],
    cta: { eyebrow: "Tell us how many letters a day, how many departments, and how you number them today: we start with a week of scoping", title: "A letter nobody can find, a reply after the deadline, the mail registry ledger, a binder per department, or several sites to follow from head office", body: "Symloop builds the mail register that fits your organisation: registration, scanning, assignment, reminders, reply, tracking. Describe your types of mail to us, your deadlines and your approval circuits." },
    related: { label: 'Also read', items: [
      { href: L.archiver, kind: '2027', name: 'Archiving company documents: filing plan, scanning, search' },
      { href: L.intranet, kind: '2027', name: 'Building an intranet: memos, internal requests, read receipts' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log: who sees what, who changes what' },
      { href: L.factures, kind: '2027', name: 'Reading invoices and purchase orders with AI' },
    ] },
  },
  ar: {
    kind: 'تسيير البريد · الجزائر · 2027', title: "برنامج تسيير البريد في الجزائر (2027): رسالة بقيت ثلاثة أسابيع على مكتب، ردّ خرج بعد الأجل، ولا أحد يعرف عند من هي؛ مكتب التنظيم، التسجيل، الرقمنة، الإحالة، الآجال، وما نضعه",
    dek: "«وصلت إلينا رسالة مهمة منذ شهر. سُجّلت في دفتر مكتب التنظيم، ثم صعدت إلى المديرية، ثم إلى مصلحة، وخرج الردّ بثمانية أيام تأخراً. لم يستطع أحد أن يقول لي أين كانت طوال ثلاثة أسابيع. لكل مصلحة حافظتها، وللعثور على رسالة من السنة الماضية يلزم صباح كامل. هل يوجد برنامج تسيير بريد لهذا؟» الدفتر يقول إن رسالة وصلت؛ ولا يقول عند من هي، ولا منذ متى، ولا متى أجلها.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج تسيير البريد', 'مكتب التنظيم', 'البريد الوارد والصادر', 'الإحالة والآجال', 'متابعة البريد والبحث فيه', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج تسيير البريد يعوّض دفتر مكتب التنظيم بسجل يفعل أربعة أشياء. **التسجيل**: كل بريد وارد أو صادر يأخذ رقماً ترتيبياً، تاريخاً، مرسِلاً، وموضوعاً. **الرقمنة**: الرسالة تُمسح عند الوصول؛ والصورة هي التي تتنقّل، والأصل يُرتَّب مرة واحدة. **الإحالة**: مصلحة، شخص، وأجل. و**المتابعة**: ما ينتظر، عند من، ومنذ متى، مع تذكير قبل الأجل. في مثال هذه الصفحة، الرسالة نفسها تأخذ 23 يوماً من يد إلى يد و7 أيام بالسجل، لثلاثة أيام من العمل الفعلي.",
      "هذه الصفحة موجّهة إلى من يسيّر مؤسسة، هيئة، أو إدارة ما زال البريد الورقي مهماً فيها: الصفقات، البنوك، الزبائن، المورّدون، والهيئات. التعريفات من مصادر عمومية: البريد، غرفة البريد الرقمية، تسيير الوثائق، سير العمل، التعرف الضوئي على الحروف، البيانات الوصفية، مسار التدقيق، البريد المضمون، ومدة المعالجة. والرسالة المتابَعة ومساراها وسجل ذات صباح مثال مركَّب. والصفحة لا تتناول القيمة القانونية للوثائق، ولا المدد القانونية للحفظ، ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في برنامج تسيير البريد", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة هي التي تنقص الدفتر.",
      ], visual: 'couches', after: [
        "**البريد.** البريد نظام لنقل البطاقات والرسائل والطرود نقلاً مادياً؛ وما يصلكم ورق، مؤرَّخ، وأحياناً وحيد. **غرفة البريد الرقمية.** هي أتمتة معالجة البريد الوارد: المؤسسات ترقمن البريد الوارد وتؤتمت تصنيفه وتوزيعه داخل التنظيم. **التسجيل.** رقم ترتيبي لكل سنة، بالترقيم الذي تستعملونه؛ تاريخ؛ مرسِل يُختار من قائمة تُبنى؛ وموضوع. وهذه هي البيانات الوصفية للرسالة: بيانات تعرّف وتصف خصائص بيانات أخرى.",
        "**الرقمنة.** الماسح الضوئي يحوّل الوثيقة إلى صورة؛ والتعرف الضوئي على الحروف يحوّل صورة نص مطبوع أو مكتوب باليد إلى نص تقرؤه الآلة. فتصير الرسالة قابلة للبحث بمحتواها، كما في [البحث في تطبيق](" + L.recherche + "). **الإحالة.** هي الطبقة المبرزة، ومفصَّلة أسفله. **الحقوق.** لا يرى الجميع كل شيء: رسالة سرّية لا تظهر إلا للمديرية ولمن وُجّهت إليه، انظر [الأدوار والحقوق](" + L.roles + "). **الأرشيف.** بعد الإغلاق، تلتحق الرسالة بمخطط الترتيب الموصوف في [أرشفة الوثائق](" + L.archiver + ").",
      ] },
      { heading: "حياة رسالة واردة", body: [
        "الشكل يتابع رسالة واردة في ست مراحل.",
      ], visual: 'vie', after: [
        "**سير العمل.** سير العمل تسلسل أنشطة منسَّق وقابل للتكرار. وسير البريد موجود عندكم، في العادات؛ والبرنامج يجعله ظاهراً. **في الاستقبال.** الظرف يُفتح، يؤرَّخ، يُسجَّل، ويُمسح في حركة واحدة؛ وملصق برمز شريطي، يُلصق على الأصل، يحمل رقمه. **الإحالة.** المديرية، أو من تفوّضه، تقرأ الصورة على الشاشة، تختار المصلحة، تكتب تعليمة، وتحدّد الأجل. وهي التأشيرة في الهامش، دون الورقة التي تنتظر في حافظة الإمضاء.",
        "**في المصلحة.** الشخص المعيَّن يتلقى إشعاراً، انظر [الإشعارات](" + L.notifications + ")، يفتح الرسالة ويؤكّد قراءتها؛ والمبدأ هو مبدأ [الشبكة الداخلية](" + L.intranet + ") وإشعار القراءة فيها. **الردّ.** المشروع يُحضَّر انطلاقاً من الرسالة، يُصادَق عليه، ويُمضى؛ والبريد الصادر يأخذ رقمه ويبقى مرتبطاً بالوارد. **الإغلاق.** رُدّ عليها، أُحيلت للإعلام، أو حُفظت دون متابعة: كل رسالة تنتهي في حالة، بتاريخ. **الأثر.** كل عملية مؤرَّخة: مسار التدقيق تسجيل زمني يوثّق تسلسل العمليات التي مسّت ملفاً.",
      ] },
      { heading: "الرسالة نفسها، ومساران", body: [
        "الشكل يقارن مسارين للرسالة نفسها، لأجل ردّ من خمسة عشر يوماً.",
      ], visual: 'trajets', after: [
        "**من يد إلى يد.** يومان في الاستقبال، خمسة عند المديرية، تسعة في المصلحة، خمسة عند الإمضاء، ويومان عند الإرسال: ثلاثة وعشرون يوماً، ثمانية زائدة. لم يُسئ أحد العمل؛ الرسالة انتظرت، ولم يعرف أحد. **بالسجل.** مسجَّلة ومحالة في اليوم نفسه، ثلاثة أيام في المصلحة، يوم عند الإمضاء، ويوم عند الإرسال: سبعة أيام. **مدة المعالجة.** هي الوقت اللازم لإتمام عملية أو تلبية طلب. وهنا، تنقسم إلى ثلاثة أيام من العمل و، حسب المسار، عشرين أو أربعة أيام من الانتظار.",
        "**ما يصنع الفرق.** لا شيء مبهر: تاريخ عند كل انتقال، اسم عند كل مرحلة، وتذكير. قبل الأجل بثلاثة أيام، يُنبَّه من يحوز الرسالة؛ ويوم الأجل، يُنبَّه مسؤوله أيضاً. **الآجال.** تُضبط لكل نوع من البريد: طلب معلومات ليس له استعجال شكوى. ولهذه الأخيرة، تلتحق المتابعة بمتابعة [شكاوى الزبائن](" + L.sav + "). **ما يُقاس.** متوسط مدة الردّ لكل نوع ولكل مصلحة؛ نسبة الرسائل المردود عليها في الأجل؛ والوقت المقضي في كل مرحلة.",
      ] },
      { heading: "ستة أنواع من البريد، وسجل واحد", body: [
        "الشكل يعطي، لستة أنواع من البريد، ما يُسجَّل وما يُتابَع.",
      ], visual: 'types', after: [
        "**الوارد والصادر.** ترقيمان، مرتبطان: الردّ يحيل إلى الرسالة التي سبّبته. **المضمون.** البريد المضمون خدمة بريدية تعطي المرسِل إثبات الإيداع بوصل و، عند الطلب، تحققاً من التسليم. والسجل يحفظ مرجع الإرسال وصورة إشعار الاستلام بجانب البريد الصادر. **التسليم يداً بيد.** وصل التسليم الممضى يُصوَّر ويُرفق.",
        "**المذكّرة الداخلية.** تذهب إلى عدة مصالح؛ والسجل يقول من قرأها. **الرسالة الإلكترونية.** بعض الرسائل الإلكترونية في حكم البريد: طلبية، شكوى، أو استدعاء. مستلمها يُدرجها في السجل بحركة واحدة، وتسلك الطريق نفسه. **فاتورة المورّد.** تصل من الشبّاك نفسه؛ وخاناتها يمكن أن تُقرأ آلياً، انظر [قراءة الفواتير بالذكاء الاصطناعي](" + L.factures + ")، ثم تذهب إلى المحاسبة برقمها. **سجل واحد.** الفائدة ليست في معالجة كل شيء بالطريقة نفسها، بل في إمكان العثور على كل شيء في المكان نفسه.",
      ] },
      { heading: "ما ينتظر ردّاً، هذا الصباح", body: [
        "الشكل يعرض السجل ذات صباح: مربّع لكل رسالة تنتظر ردّاً.",
      ], visual: 'encours', after: [
        "**ثلاثة ألوان.** من 64 رسالة في الانتظار، 41 في الآجال، 14 يحلّ أجلها في خمسة أيام، و9 متأخرة. **أين التأخرات.** أربع عند المديرية التقنية، إحداها منذ 31 يوماً؛ ثلاث عند المصلحة القانونية؛ واثنتان عند المصلحة التجارية. وليس هذا ترتيباً للمصالح: هو قائمة ما يجب فكّه اليوم. **الأربع عشرة.** هي الأهم: ما زال ممكناً أن تخرج في وقتها.",
        "**عرض الصباح.** يسع في شاشة واحدة، ويمكن أن يعيش بجانب باقي الأرقام على [لوحة قيادة](" + L.dashboard + "). **تسيير الوثائق.** هو الوظيفة التي تسيّر معلومات تنظيم طوال دورة حياتها، منذ إنشائها أو استلامها إلى مصيرها النهائي؛ والسجل بابها. **العثور.** بالرقم، بالمرسِل، بالتاريخ، بالموضوع، أو بكلمة في النص: رسالة من السنة الماضية يُعثر عليها في ثوانٍ، مع ردّها. **ما يُقاس.** الرسائل في الانتظار لكل مصلحة؛ التأخرات وأقدميتها؛ الرسائل دون حائز؛ والرسائل دون أجل.",
      ] },
      { heading: "سبعة أسابيع لمقر واحد", body: [
        "سبعة أسابيع في المثال، لموقع واحد.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: أنواع بريدكم، مصالحكم، آجالكم، والترقيم المعمول به، الذي يُحتفظ به. **العتاد.** ماسح ضوئي في الاستقبال والمناصب الموجودة: لا شيء آخر ضروري للبدء. **الماضي.** لا تُعاد كتابة عشر سنوات من الدفاتر: السجل ينطلق في تاريخ، والرسائل التي ما زالت مفتوحة في ذلك التاريخ تدخله.",
        "**العادات.** ينجح المشروع حين يسجّل الاستقبال كل شيء، دون استثناء، وحين تحيل المديرية على الشاشة: حركتان، يُلتزم بهما منذ اليوم الأول. **جاهز أو على المقاس.** توجد برامج تسيير بريد، منها الحرّة، وتكفي لسجل بسيط. والعمل على المقاس يُبرَّر حين تلزم مسارات المصادقة عندكم، عدة مواقع، العربية والفرنسية، أو ربط ببرنامجكم المهني. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقونه**: سجل للوارد والصادر بترقيمكم؛ الرقمنة في الاستقبال وقراءة النص؛ الإحالة بتعليمة وأجل؛ التذكيرات؛ الردّ المرتبط بالرسالة؛ عرض الصباح؛ البحث؛ وتاريخ كل رسالة.",
        "**ما تتفاداه المؤسسة**: الرسالة التي بقيت ثلاثة أسابيع على مكتب، الردّ الخارج بعد الأجل، الرسالة التي لا يُعثر عليها، الحافظة لكل مصلحة، وسؤال «عند من هي؟».",
        "**ما يُقاس**: الرسائل الواردة والصادرة لكل شهر ولكل نوع؛ متوسط مدة الردّ؛ نسبة الردود في الأجل؛ الرسائل في الانتظار لكل مصلحة؛ والتأخرات وأقدميتها.",
        "**ما تفعله Symloop**: تأطير الأنواع والآجال، التسجيل والرقمنة، الإحالة والتذكيرات، مسار الردّ، عرض المتابعة، والبحث، بالعربية والفرنسية، لموقع واحد أو لعدة مواقع.",
      ], faq: [
        { q: "ما هو برنامج تسيير البريد؟", a: "سجل معلوماتي للبريد الوارد والصادر: كل رسالة تأخذ فيه رقماً، تُمسح، تُحال إلى شخص بأجل، وتُتابَع حتى الردّ عليها أو حفظها." },
        { q: "ما هو مكتب التنظيم؟", a: "النقطة التي يُستلم فيها كل بريد التنظيم، يُسجَّل، ويوزَّع، ومنها يخرج البريد. والبرنامج يأخذ سجله ويضيف إليه المتابعة." },
        { q: "كيف يُسجَّل البريد الوارد والصادر؟", a: "برقم ترتيبي، تاريخ، مرسِل أو مرسَل إليه، موضوع، ونوع، تُدخَل في الاستقبال مع المسح. وللوارد والصادر ترقيمان، مرتبطان." },
        { q: "كيف تُتابَع رسالة داخل المؤسسة؟", a: "بإحالتها إلى شخص بأجل. فيعرض السجل، لكل رسالة، من يحوزها، منذ متى، وكم يوماً بقي." },
        { q: "كيف يُتفادى الردّ بعد الأجل؟", a: "بأجل لكل نوع من البريد، تذكير للشخص قبل الأجل بأيام، تنبيه لمسؤوله يوم الأجل، وعرض يومي للتأخرات." },
        { q: "هل يجب مسح كل البريد؟", a: "كل ما يُسجَّل، نعم: الصورة هي التي تتنقّل، والأصل لا يُمسّ إلا مرة واحدة. والأظرفة دون فائدة، إشهار أو مكرَّرات، لا تُسجَّل ولا تُمسح." },
        { q: "هل يمكن العثور على رسالة قديمة بسرعة؟", a: "نعم، بالرقم، المرسِل، التاريخ، الموضوع، أو كلمة من النص، لأن المحتوى الممسوح يُقرأ. والردّ يظهر بجانب الرسالة التي سبّبته." },
        { q: "هل تدخل الرسائل الإلكترونية في السجل؟", a: "التي هي في حكم البريد، نعم: مستلمها يُدرجها فيه، وتأخذ رقماً، حائزاً، وأجلاً كالرسالة الورقية." },
        { q: "من يرى أي رسالة؟", a: "كل واحد يرى ما أُحيل إليه وما يسمح به دوره. ورسالة معلَّمة سرّية لا تظهر إلا للمديرية وللأشخاص المعيَّنين." },
        { q: "كم من الوقت يلزم لوضع مثل هذا البرنامج؟", a: "سبعة أسابيع في مثال هذه الصفحة، لموقع واحد، التأطير منها. والسجل ينطلق في تاريخ، دون إعادة كتابة الدفاتر القديمة." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "لم يُسئ أحد العمل؛ الرسالة انتظرت، ولم يعرف أحد." },
      { after: 4, text: "السجل الورقي يقول ما وصل؛ والسجل الممسوك في برنامج يقول ما ينتظر، عند من، ومنذ متى." },
    ],
    cta: { eyebrow: "قولوا لنا كم رسالة في اليوم، كم مصلحة، وكيف ترقّمون اليوم: نبدأ بأسبوع تأطير", title: "رسالة لا يُعثر عليها، ردّ بعد الأجل، دفتر مكتب التنظيم، حافظة لكل مصلحة، أو عدة مواقع تُتابَع من المقر", body: "Symloop تبني سجل البريد الذي يناسب تنظيمكم: التسجيل، الرقمنة، الإحالة، التذكيرات، الردّ، والمتابعة. صِفوا لنا أنواع بريدكم، آجالكم، ومسارات المصادقة عندكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.archiver, kind: '2027', name: 'أرشفة وثائق المؤسسة: مخطط الترتيب، الرقمنة، والبحث' },
      { href: L.intranet, kind: '2027', name: 'إنشاء شبكة داخلية: المذكّرات، الطلبات الداخلية، وإشعار القراءة' },
      { href: L.roles, kind: '2027', name: 'الأدوار، الحقوق، وسجل التدقيق: من يرى ماذا، ومن يعدّل ماذا' },
      { href: L.factures, kind: '2027', name: 'قراءة الفواتير وسندات الطلب بالذكاء الاصطناعي' },
    ] },
  },
};

const KEYWORDS = "logiciel gestion de courrier, logiciel de gestion de courrier algérie 2027, logiciel de gestion de courrier administratif, logiciel gestion courrier arrivée départ, logiciel bureau d'ordre, bureau d'ordre digital, application gestion de courrier, application suivi de courrier, gestion électronique du courrier, système de gestion électronique du courrier, mail management software, mail registry software algeria, incoming and outgoing mail register, correspondence tracking software, digital mailroom, برنامج تسيير البريد الصادر والوارد, برنامج تسيير البريد, مكتب التنظيم, البريد الوارد والصادر, متابعة البريد, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
