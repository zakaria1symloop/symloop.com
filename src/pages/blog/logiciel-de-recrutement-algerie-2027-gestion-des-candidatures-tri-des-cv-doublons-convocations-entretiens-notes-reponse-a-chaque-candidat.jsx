import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-de-recrutement-algerie-2027-gestion-des-candidatures-tri-des-cv-doublons-convocations-entretiens-notes-reponse-a-chaque-candidat.mjs';

const SLUG = 'logiciel-de-recrutement-algerie-2027-gestion-des-candidatures-tri-des-cv-doublons-convocations-entretiens-notes-reponse-a-chaque-candidat';
const FIGURES = ['criteres', 'parcours', 'couches', 'delais', 'calendrier', 'candidat'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  formulaire: '/blog/comment-faire-un-formulaire-en-ligne-en-algerie-2027-inscriptions-demandes-de-devis-reponses-dans-un-tableur-doublons-spam-accuse-de-reception/',
  unique: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  reservation: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  mesure: '/blog/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison/',
  reprise: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  espace: '/blog/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien/',
  lecture: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel de recrutement · Algérie · 2027', title: "Logiciel de recrutement en Algérie (2027) : trois mille candidatures pour vingt postes, des CV dans trois boîtes mail, un tableur jamais à jour, et des gens qui rappellent pour savoir où en est leur dossier ; gestion des candidatures, tri, convocations, réponse à chacun, et ce qu'on met en place",
    dek: "« Nous ouvrons vingt postes et nous recevons trois mille candidatures : par mail, par le site, sur papier à l'accueil. Les CV sont dans trois boîtes, le tableur n'est jamais à jour, la même personne postule quatre fois, et les gens appellent pour savoir où en est leur dossier. Le tri prend un mois, et quand nous rappelons, les meilleurs profils ont déjà signé ailleurs. Quel logiciel de recrutement nous faut-il ? » Un seul formulaire, un dossier par personne, des critères écrits appliqués de la même façon à tout le monde, un tableau d'étapes, et une réponse à chaque candidature ; le tri par la machine s'arrête là où il faut juger un parcours.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de recrutement', 'Gestion des candidatures', 'Tri des CV et doublons', 'Convocations et entretiens', 'Réponse à chaque candidature', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de recrutement fait cinq choses : il reçoit toutes les candidatures par un seul formulaire, garde un dossier par personne en fusionnant les doublons, applique à tout le monde les critères écrits dans l'annonce, montre sur un tableau à quelle étape en est chaque dossier, et envoie un message à chaque changement d'étape. Il ne choisit pas à la place des personnes qui recrutent. Dans l'exemple de cette page, 3 000 candidatures pour vingt postes deviennent 2 580 dossiers, et le délai entre la clôture et la proposition d'embauche passe de 62 à 23 jours.",
      "Cette page s'adresse aux entreprises qui recrutent en nombre, usines, enseignes, banques, centres d'appels, chantiers, aux cabinets de recrutement, aux organismes qui organisent des campagnes, en Algérie, et aux fondatrices et fondateurs de la diaspora qui montent une équipe ici. Les définitions viennent de sources publiques : système de suivi des candidatures, recrutement, analyse de CV, entretien structuré, rapprochement d'enregistrements, biais algorithmique, intégration. Les candidatures, les étapes et les délais sont un exemple construit. La page ne traite ni du droit du travail, ni des contrats, ni des déclarations et obligations liées à l'embauche, ni des règles sur les données personnelles, et ne cite aucun prix.",
    ],
    sections: [
      { heading: "Ce que la règle trie seule, et ce qu'une personne décide", body: [
        "La figure sépare cinq tâches du tri : celles qu'une règle fait seule, et celles où une personne lit et décide.",
      ], visual: 'criteres', after: [
        "**Le logiciel.** Un système de suivi des candidatures est une application qui permet de traiter par voie électronique le recrutement et l'embauche : rechercher et filtrer une base de candidatures, classer et noter, suivre chaque personne d'étape en étape. Le recrutement lui-même reste une suite d'étapes humaines : trouver, trier, présélectionner, recevoir en entretien, embaucher. **Ce que la règle fait seule.** Vérifier qu'un dossier est complet, et appliquer les critères écrits dans l'annonce : un diplôme exigé, un permis, une disponibilité. Ces critères sont publics, et se vérifient sans jugement.",
        "**Ce qu'une personne décide.** Dès qu'il faut apprécier un parcours, une personne lit, avec une grille écrite. Un filtre par mots-clés peut écarter un bon profil qui n'a pas employé le mot attendu, et pousse les gens à écrire leur CV pour la machine. **L'IA.** Un modèle peut lire un CV et en extraire les champs, voir [la lecture de pièces par IA](" + L.lecture + ") ; il peut proposer un ordre de lecture. Il ne refuse personne. Un biais algorithmique est une tendance néfaste, systématique et répétable, d'un système informatique, et le recrutement fait partie des domaines où il est apparu : une entreprise a arrêté un système d'IA qu'elle avait développé pour trier des candidatures, après avoir constaté qu'il était biaisé contre les femmes. **Notre règle.** Tout classement par un modèle se mesure sur vos anciens dossiers avant d'être utilisé, voir [mesurer qu'une IA marche](" + L.mesure + ").",
      ] },
      { heading: "Vingt postes, trois mille candidatures", body: [
        "La figure suit une campagne sur un tableau à six colonnes, et un dossier d'un bout à l'autre.",
      ], visual: 'parcours', after: [
        "**Dans l'exemple.** Vingt postes ouverts, 3 000 candidatures reçues par un seul formulaire. 420 sont des doublons : la même personne a postulé plusieurs fois, avec un autre mail ou un autre numéro. Restent 2 580 dossiers. 1 290 sont éligibles selon les critères de l'annonce, soit la moitié. 240 dossiers sont présélectionnés après lecture, 120 personnes sont convoquées, 96 sont reçues en entretien, 24 ne sont pas venues, et 20 propositions sont faites. **Le dossier suivi.** Déposé et déclaré éligible le jour même, présélectionné au jour 4, convoqué au jour 6, reçu au jour 13, proposition au jour 21.",
        "**Un dossier par personne.** Rapprocher des enregistrements, c'est retrouver ceux qui désignent la même entité dans des sources différentes : ici, le téléphone, le mail, le nom et la date de naissance. La règle propose la fusion, une personne confirme, parce que deux homonymes ne sont pas un doublon ; le principe est celui du [fichier client unique](" + L.unique + "). **Une seule porte.** Le mail, le papier déposé à l'accueil et le site finissent dans le même formulaire, voir [le formulaire en ligne](" + L.formulaire + "). **Ce que l'on mesure.** Candidatures par annonce et par source ; doublons ; part éligible ; dossiers par étape ; absences aux entretiens ; jours passés dans chaque étape.",
      ] },
      { heading: "Ce qu'il y a dans un logiciel de recrutement", body: [
        "La figure empile cinq couches ; la troisième, les règles, est celle qui se décide avant tout le reste.",
      ], visual: 'couches', after: [
        "**L'entrée et le dossier.** Une page des postes, un formulaire par annonce avec les pièces demandées, un accusé de réception. L'analyse de CV importe le document et en extrait les informations pour qu'on puisse les trier et les chercher ; ce qu'elle extrait reste à vérifier. Chaque personne a un dossier, avec ses candidatures, ses pièces et l'historique des échanges. **Les règles.** C'est la couche accentuée : les critères de chaque annonce, la grille de lecture, la grille d'entretien, et qui a le droit de voir, de noter et de décider, voir [les rôles et le journal d'audit](" + L.roles + ").",
        "**Les étapes et le suivi.** Le tableau de la campagne, les convocations, les créneaux, les messages ; puis les délais par étape, les absences, les sources, et un vivier pour les prochains postes. **Prêt à l'emploi ou sur mesure.** Des logiciels de recrutement prêts à l'emploi existent, et conviennent quand votre processus ressemble au leur. Le sur-mesure se justifie quand la campagne a ses propres règles : des critères par poste et par site, des pièces à contrôler, des épreuves ou des tests, plusieurs commissions, l'arabe et le français, un lien avec votre logiciel du personnel, et des données gardées chez vous.",
      ] },
      { heading: "Où se gagnent les jours", body: [
        "La figure compare la même campagne, de la clôture des candidatures à la proposition, avant et avec la plateforme.",
      ], visual: 'delais', after: [
        "**Quatre phases.** Dans l'exemple, avant : 30 jours de tri, 12 jours pour convoquer, 14 jours d'entretiens, 6 jours pour décider et répondre, soit 62 jours. Avec la plateforme : 6, 2, 12 et 3, soit 23 jours. **Où est le gain.** Dans le tri, 24 jours : les critères écrits s'appliquent seuls, les doublons sont déjà fusionnés, et la lecture commence par les dossiers complets. Dans les convocations, 10 jours : un message avec un créneau à choisir remplace les appels sans réponse, voir [la réservation de créneaux](" + L.reservation + ").",
        "**Où il n'y en a pas.** Les entretiens passent de 14 à 12 jours : le temps des personnes ne se compresse pas. Un entretien structuré pose à chaque personne exactement les mêmes questions dans le même ordre ; avec une grille notée, les avis se comparent au lieu de se discuter. **Les messages.** Accusé de réception, convocation, rappel la veille, réponse : chaque changement d'étape en envoie un, par le canal qui arrive, voir [les notifications](" + L.notifications + "). **Pourquoi cela compte.** Trente-neuf jours de moins, ce sont des profils encore disponibles quand vous rappelez. **Les délais** sont ceux d'un exemple construit.",
      ] },
      { heading: "Dix semaines, en commençant par une campagne passée", body: [
        "Dix semaines dans l'exemple, avant la première campagne réelle.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** On repart d'une campagne passée : par où sont arrivées les candidatures, combien de doublons, quels critères ont réellement servi à trier, combien de jours par étape. C'est de là que sortent le formulaire, les critères et les grilles. **Le formulaire et le dossier.** Une page des postes, un formulaire par annonce, les pièces demandées, la fusion des doublons. **Les règles et les grilles.** Elles s'écrivent avec les personnes qui recrutent, pas à leur place.",
        "**La reprise.** Les candidatures en cours, dans les boîtes mail et les tableurs, sont importées, dédoublonnées et rangées par annonce, voir [reprendre ses données](" + L.reprise + "). **La première campagne.** Un poste d'abord, puis la campagne entière, avec les délais mesurés à chaque étape. **Ce que le logiciel ne fait pas.** Il ne décide pas qui embaucher, ne remplace pas l'entretien, et ne dit rien de vos obligations d'employeur. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Ce que vit la personne qui postule", body: [
        "La figure suit une candidature en six temps, du côté de la personne qui postule.",
      ], visual: 'candidat', after: [
        "**Le dépôt et l'accusé de réception.** Un formulaire qui se remplit depuis un téléphone, en arabe ou en français, et un numéro de dossier envoyé tout de suite. **Le suivi.** Avec ce numéro, la personne voit où en est son dossier, sans appeler, voir [l'espace de suivi de dossier](" + L.espace + "). **L'éligibilité, la lecture, l'entretien.** La même règle pour tout le monde, une lecture par deux personnes, les mêmes questions dans le même ordre.",
        "**La réponse.** C'est le temps accentué : chaque candidature reçoit une réponse, retenue ou non. Une entreprise qui répond à 2 580 personnes n'a pas besoin de trois personnes au téléphone pour dire « votre dossier est en cours ». **Après.** L'intégration, c'est-à-dire la façon dont une nouvelle recrue acquiert les connaissances, les compétences et les comportements nécessaires, commence avec un dossier déjà constitué : pièces, coordonnées, poste. Les dossiers non retenus mais solides restent dans le vivier, avec l'accord des personnes selon vos obligations.",
      ], list: [
        "**Ce que vous recevez** : la page des postes et un formulaire par annonce ; un dossier par personne, doublons fusionnés ; les critères et les grilles écrits ; le tableau de la campagne ; les convocations avec créneaux ; un message à chaque étape ; le suivi par numéro de dossier ; les délais par étape.",
        "**Ce que l'entreprise évite** : les CV dans trois boîtes mail, le tableur jamais à jour, la même personne lue quatre fois, les journées d'appels pour convoquer, les gens qui rappellent pour savoir, le bon profil rappelé trop tard.",
        "**Ce qui est mesuré** : candidatures par annonce et par source ; doublons ; part éligible ; dossiers par étape ; absences aux entretiens ; jours par étape ; jours de la clôture à la proposition ; candidatures restées sans réponse, qui doivent être zéro.",
        "**Ce que fait Symloop** : le cadrage sur une campagne passée, le formulaire et le dossier unique, les règles et les grilles, le tableau et les messages, la reprise des candidatures en cours, le lien avec vos outils, le suivi après la première campagne, en arabe et en français.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel de recrutement ?", a: "Une application qui reçoit les candidatures, garde un dossier par personne, applique les critères de l'annonce, montre l'étape de chaque dossier et envoie les messages. On l'appelle aussi système de suivi des candidatures, ou ATS." },
        { q: "C'est quoi un logiciel ATS ?", a: "ATS désigne en anglais un système de suivi des candidatures : le même outil. Il filtre, classe et suit les candidatures d'étape en étape ; il ne décide pas à la place des personnes qui recrutent." },
        { q: "Comment trier 3 000 CV ?", a: "En ne lisant pas 3 000 CV. On fusionne d'abord les doublons, on applique les critères écrits dans l'annonce, puis deux personnes lisent les dossiers éligibles avec une grille. Dans l'exemple, la lecture porte sur 1 290 dossiers, pas sur 3 000." },
        { q: "Une IA peut-elle trier les CV ?", a: "Elle peut extraire les informations d'un CV et proposer un ordre de lecture. Nous ne lui faisons refuser personne : un modèle peut reproduire un biais, et tout classement se mesure d'abord sur vos anciens dossiers." },
        { q: "Comment éviter qu'une même personne postule plusieurs fois ?", a: "On ne l'empêche pas, on le détecte : même téléphone, même mail, même nom et même date de naissance. Le logiciel propose la fusion, une personne confirme." },
        { q: "Comment gérer les candidatures reçues par mail ?", a: "En leur donnant la même porte que les autres : le lien du formulaire est renvoyé à la personne, ou l'équipe saisit la candidature à l'accueil. Tout finit dans le même dossier." },
        { q: "Comment convoquer des centaines de candidates et candidats ?", a: "Par un message qui propose des créneaux à choisir, avec un rappel la veille. Les personnes qui ne répondent pas sont relancées, puis appelées : le téléphone ne sert plus qu'aux cas qui en ont besoin." },
        { q: "Faut-il répondre à toutes les candidatures ?", a: "Nous le recommandons, et le logiciel le rend possible : un message type par étape, envoyé à chaque changement. Une personne sans réponse rappelle, écrit, et garde une mauvaise image de l'entreprise." },
        { q: "Un tableur ne suffit-il pas ?", a: "Pour trois postes par an, si. Pour une campagne, non : il ne fusionne pas les doublons, n'envoie pas de message, ne dit pas qui a modifié quoi, et deux personnes ne peuvent pas y travailler sans se gêner." },
        { q: "Par quoi commencer ?", a: "Par une campagne passée : compter les candidatures par canal, les doublons, et les jours passés à chaque étape. Puis par le formulaire unique et le dossier par personne." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La même personne qui postule quatre fois, c'est un dossier, pas quatre." },
      { after: 3, text: "Le gain n'est pas dans les entretiens : il est dans tout ce qui les précède." },
    ],
    cta: { eyebrow: "Dites-nous combien de postes vous ouvrez, combien de candidatures vous recevez, et par où elles arrivent : nous commençons par une campagne passée", title: "Candidatures dans trois boîtes mail, tableur jamais à jour, doublons, journées d'appels pour convoquer, gens qui rappellent pour savoir, ou équipe que vous montez en Algérie depuis la France", body: "Symloop construit le logiciel de recrutement qui correspond à vos campagnes : formulaire unique, dossier par personne, règles et grilles écrites, tableau d'étapes, convocations, réponse à chaque candidature. Décrivez-nous vos postes, vos canaux et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.formulaire, kind: '2027', name: 'Formulaire en ligne : inscriptions, doublons, accusé de réception' },
      { href: L.espace, kind: '2027', name: 'Espace de suivi de dossier : chacun ne voit que le sien' },
      { href: L.unique, kind: '2027', name: 'Fichier unique : une personne, pas trois fiches' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi, qui modifie quoi' },
    ] },
  },
  en: {
    kind: 'Recruitment software · Algeria · 2027', title: "Recruitment software in Algeria (2027): three thousand applications for twenty jobs, CVs in three mailboxes, a spreadsheet that is never up to date, and people calling back to ask where their file stands; application management, sorting, invitations, an answer to everyone, and what we put in place",
    dek: "“We open twenty jobs and receive three thousand applications: by email, through the site, on paper at the front desk. The CVs sit in three mailboxes, the spreadsheet is never up to date, the same person applies four times, and people call to ask where their file stands. Sorting takes a month, and by the time we call back, the best profiles have signed elsewhere. Which recruitment software do we need?” A single form, one file per person, written criteria applied the same way to everyone, a board of stages, and an answer to every application; sorting by machine stops where a career has to be judged.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Recruitment software', 'Application management', 'CV sorting and duplicates', 'Invitations and interviews', 'An answer to every application', 'Algeria 2027'],
    intro: [
      "**Short answer.** Recruitment software does five things: it receives every application through a single form, keeps one file per person by merging duplicates, applies to everyone the criteria written in the posting, shows on a board which stage each file has reached, and sends a message at each change of stage. It does not choose in place of the people who recruit. In this page's example, 3,000 applications for twenty jobs become 2,580 files, and the time between the closing date and the job offer falls from 62 to 23 days.",
      "This page is for companies that recruit in numbers, factories, retail chains, banks, call centres, construction sites, for recruitment firms, for organisations that run campaigns, in Algeria, and for diaspora founders building a team here. The definitions come from public sources: applicant tracking system, recruitment, résumé parsing, structured interview, record linkage, algorithmic bias, onboarding. The applications, the stages and the delays are a constructed example. The page covers neither labour law, nor contracts, nor the declarations and obligations tied to hiring, nor the rules on personal data, and quotes no price.",
    ],
    sections: [
      { heading: "What the rule sorts alone, and what a person decides", body: [
        "The figure separates five sorting tasks: those a rule does alone, and those where a person reads and decides.",
      ], visual: 'criteres', after: [
        "**The software.** An applicant tracking system is software that handles recruitment and hiring electronically: searching and filtering a base of applications, ranking and scoring, following each person from stage to stage. Recruitment itself remains a chain of human steps: finding people, screening, shortlisting, interviewing, hiring. **What the rule does alone.** Checking that a file is complete, and applying the criteria written in the posting: a required diploma, a driving licence, an availability. Those criteria are public, and can be checked without judgement.",
        "**What a person decides.** As soon as a career has to be assessed, a person reads, with a written grid. A keyword filter can discard a good profile that did not use the expected word, and pushes people to write their CV for the machine. **AI.** A model can read a CV and extract its fields, see [reading documents with AI](" + L.lecture + "); it can suggest a reading order. It rejects nobody. Algorithmic bias is a harmful tendency of a computer system that is systematic and repeatable, and hiring is one of the fields where it has appeared: one company switched off an AI system it had built to screen job applications after realising it was biased against women. **Our rule.** Any ranking by a model is measured on your past files before it is used, see [measuring that an AI works](" + L.mesure + ").",
      ] },
      { heading: "Twenty jobs, three thousand applications", body: [
        "The figure follows a campaign on a six-column board, and one file from end to end.",
      ], visual: 'parcours', after: [
        "**In the example.** Twenty jobs open, 3,000 applications received through a single form. 420 are duplicates: the same person applied several times, with another email or another number. That leaves 2,580 files. 1,290 are eligible on the posting's criteria, that is half. 240 files are shortlisted after reading, 120 people are invited, 96 are interviewed, 24 did not come, and 20 offers are made. **The file followed.** Submitted and declared eligible the same day, shortlisted on day 4, invited on day 6, interviewed on day 13, offer on day 21.",
        "**One file per person.** Record linkage means finding the records that refer to the same entity across different sources: here, the phone, the email, the name and the date of birth. The rule suggests the merge, a person confirms, because two people with the same name are not a duplicate; the principle is that of the [single customer file](" + L.unique + "). **One door.** Email, paper left at the front desk and the site all end in the same form, see [the online form](" + L.formulaire + "). **What is measured.** Applications per posting and per source; duplicates; eligible share; files per stage; interview no-shows; days spent in each stage.",
      ] },
      { heading: "What is inside recruitment software", body: [
        "The figure stacks five layers; the third, the rules, is the one decided before everything else.",
      ], visual: 'couches', after: [
        "**Entry and the file.** A jobs page, one form per posting with the documents requested, an acknowledgement. Résumé parsing imports the document and pulls the information out of it so that it can be sorted and searched; what it extracts still has to be checked. Each person has a file, with their applications, their documents and the history of exchanges. **The rules.** That is the accented layer: each posting's criteria, the reading grid, the interview grid, and who is allowed to see, score and decide, see [roles and the audit log](" + L.roles + ").",
        "**Stages and follow-up.** The campaign board, invitations, slots, messages; then the delays per stage, no-shows, sources, and a pool for the next jobs. **Ready-made or custom.** Ready-made recruitment software exists, and suits you when your process resembles theirs. Custom work is justified when the campaign has its own rules: criteria per job and per site, documents to check, tests, several panels, Arabic and French, a link with your personnel software, and data kept on your premises.",
      ] },
      { heading: "Where the days are gained", body: [
        "The figure compares the same campaign, from the closing date to the offer, before and with the platform.",
      ], visual: 'delais', after: [
        "**Four phases.** In the example, before: 30 days of sorting, 12 days to invite, 14 days of interviews, 6 days to decide and answer, that is 62 days. With the platform: 6, 2, 12 and 3, that is 23 days. **Where the gain is.** In sorting, 24 days: the written criteria apply by themselves, duplicates are already merged, and reading starts with complete files. In invitations, 10 days: a message with a slot to choose replaces unanswered calls, see [slot booking](" + L.reservation + ").",
        "**Where there is none.** Interviews go from 14 to 12 days: people's time does not compress. A structured interview puts exactly the same questions to each person, in the same order; with a scored grid, opinions are compared instead of argued. **Messages.** Acknowledgement, invitation, reminder the day before, answer: each change of stage sends one, through the channel that arrives, see [notifications](" + L.notifications + "). **Why it matters.** Thirty-nine days fewer means profiles still available when you call back. **The delays** are those of a constructed example.",
      ] },
      { heading: "Ten weeks, starting from a past campaign", body: [
        "Ten weeks in the example, before the first real campaign.",
      ], visual: 'calendrier', after: [
        "**Scoping.** We start from a past campaign: where the applications came from, how many duplicates, which criteria were actually used to sort, how many days per stage. That is where the form, the criteria and the grids come from. **The form and the file.** A jobs page, one form per posting, the documents requested, the merging of duplicates. **Rules and grids.** They are written with the people who recruit, not in their place.",
        "**Taking over.** Applications in progress, in mailboxes and spreadsheets, are imported, deduplicated and filed by posting, see [taking over your data](" + L.reprise + "). **The first campaign.** One job first, then the whole campaign, with the delays measured at each stage. **What the software does not do.** It does not decide whom to hire, does not replace the interview, and says nothing about your obligations as an employer. **The durations** are those of a constructed example.",
      ] },
      { heading: "What the person applying goes through", body: [
        "The figure follows an application in six steps, from the side of the person applying.",
      ], visual: 'candidat', after: [
        "**Submission and acknowledgement.** A form that can be filled in from a phone, in Arabic or in French, and a file number sent at once. **Tracking.** With that number, the person sees where their file stands, without calling, see [the file-tracking space](" + L.espace + "). **Eligibility, reading, interview.** The same rule for everyone, a reading by two people, the same questions in the same order.",
        "**The answer.** That is the accented step: every application receives an answer, selected or not. A company that answers 2,580 people does not need three people on the phone to say “your file is being processed”. **Afterwards.** Onboarding, the way a new employee acquires the knowledge, skills and behaviours they need, starts with a file already built: documents, contact details, job. Files that were not selected but are solid stay in the pool, with people's agreement according to your obligations.",
      ], list: [
        "**What you receive**: the jobs page and one form per posting; one file per person, duplicates merged; the criteria and grids in writing; the campaign board; invitations with slots; a message at each stage; tracking by file number; the delays per stage.",
        "**What the company avoids**: CVs in three mailboxes, the spreadsheet that is never up to date, the same person read four times, days of calls to invite people, people calling back to find out, the good profile called back too late.",
        "**What is measured**: applications per posting and per source; duplicates; eligible share; files per stage; interview no-shows; days per stage; days from closing date to offer; applications left without an answer, which must be zero.",
        "**What Symloop does**: scoping on a past campaign, the form and the single file, rules and grids, the board and the messages, taking over applications in progress, the link with your tools, follow-up after the first campaign, in Arabic and in French.",
      ], faq: [
        { q: "What is recruitment software?", a: "An application that receives applications, keeps one file per person, applies the posting's criteria, shows the stage of each file and sends the messages. It is also called an applicant tracking system, or ATS." },
        { q: "What is an ATS?", a: "ATS stands for applicant tracking system: the same tool. It filters, ranks and follows applications from stage to stage; it does not decide in place of the people who recruit." },
        { q: "How do you sort 3,000 CVs?", a: "By not reading 3,000 CVs. Duplicates are merged first, the criteria written in the posting are applied, then two people read the eligible files with a grid. In the example, reading covers 1,290 files, not 3,000." },
        { q: "Can an AI sort CVs?", a: "It can extract the information in a CV and suggest a reading order. We do not let it reject anyone: a model can reproduce a bias, and any ranking is first measured on your past files." },
        { q: "How do you stop the same person applying several times?", a: "You do not stop it, you detect it: same phone, same email, same name and same date of birth. The software suggests the merge, a person confirms." },
        { q: "How do you handle applications received by email?", a: "By giving them the same door as the others: the form link is sent back to the person, or the team enters the application at the front desk. Everything ends in the same file." },
        { q: "How do you invite hundreds of applicants?", a: "With a message offering slots to choose, and a reminder the day before. Those who do not answer are reminded, then called: the phone is kept for the cases that need it." },
        { q: "Should every application get an answer?", a: "We recommend it, and the software makes it possible: one template message per stage, sent at each change. A person left without an answer calls, writes, and keeps a poor image of the company." },
        { q: "Is a spreadsheet not enough?", a: "For three jobs a year, yes. For a campaign, no: it does not merge duplicates, sends no message, does not say who changed what, and two people cannot work in it without getting in each other's way." },
        { q: "Where do you start?", a: "With a past campaign: counting applications per channel, duplicates, and the days spent at each stage. Then with the single form and the file per person." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The same person applying four times is one file, not four." },
      { after: 3, text: "The gain is not in the interviews: it is in everything before them." },
    ],
    cta: { eyebrow: "Tell us how many jobs you open, how many applications you receive, and where they come from: we start from a past campaign", title: "Applications in three mailboxes, a spreadsheet never up to date, duplicates, days of calls to invite people, people calling back to find out, or a team you are building in Algeria from France", body: "Symloop builds the recruitment software that fits your campaigns: a single form, one file per person, written rules and grids, a board of stages, invitations, an answer to every application. Describe your jobs to us, your channels and your tools." },
    related: { label: 'Also read', items: [
      { href: L.formulaire, kind: '2027', name: 'Online form: registrations, duplicates, acknowledgement' },
      { href: L.espace, kind: '2027', name: 'File-tracking space: each person sees only their own' },
      { href: L.unique, kind: '2027', name: 'Single file: one person, not three records' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log: who sees what, who changes what' },
    ] },
  },
  ar: {
    kind: 'برنامج التوظيف · الجزائر · 2027', title: "برنامج التوظيف في الجزائر (2027): ثلاثة آلاف ترشح لعشرين منصباً، سير ذاتية في ثلاث علب بريد، جدول لا يُحدَّث أبداً، وأناس يتصلون ليعرفوا أين وصل ملفهم؛ تسيير الترشحات، الفرز، الاستدعاءات، جواب لكل واحد، وما نضعه",
    dek: "«نفتح عشرين منصباً ونستقبل ثلاثة آلاف ترشح: بالبريد الإلكتروني، عبر الموقع، وعلى الورق في الاستقبال. السير الذاتية في ثلاث علب بريد، الجدول لا يُحدَّث أبداً، الشخص نفسه يترشح أربع مرات، والناس يتصلون ليعرفوا أين وصل ملفهم. الفرز يأخذ شهراً، وحين نتصل، تكون أفضل الكفاءات قد وقّعت في مكان آخر. أي برنامج توظيف نحتاج؟» استمارة واحدة، ملف لكل شخص، معايير مكتوبة تُطبَّق بالطريقة نفسها على الجميع، لوحة مراحل، وجواب لكل ترشح؛ والفرز بالآلة يتوقف حيث يجب تقدير مسار.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج التوظيف', 'تسيير الترشحات', 'فرز السير الذاتية والتكرارات', 'الاستدعاءات والمقابلات', 'جواب لكل ترشح', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج التوظيف يقوم بخمسة أشياء: يستقبل كل الترشحات باستمارة واحدة، يحفظ ملفاً لكل شخص بدمج التكرارات، يطبّق على الجميع المعايير المكتوبة في الإعلان، يُظهر على لوحة المرحلة التي وصلها كل ملف، ويرسل رسالة عند كل تغيير مرحلة. ولا يختار مكان الأشخاص الذين يوظّفون. في مثال هذه الصفحة، " + I('3 000') + " ترشح لعشرين منصباً تصير " + I('2 580') + " ملفاً، والمدة بين إغلاق الترشحات وعرض التوظيف تنزل من 62 إلى 23 يوماً.",
      "هذه الصفحة موجّهة إلى المؤسسات التي توظّف بأعداد كبيرة، مصانع، علامات تجارية، بنوك، مراكز اتصال، وورشات، إلى مكاتب التوظيف، وإلى الهيئات التي تنظّم حملات، في الجزائر، وإلى مؤسسي الجالية الذين يبنون فريقاً هنا. التعريفات من مصادر عمومية: نظام متابعة الترشحات، التوظيف، تحليل السير الذاتية، المقابلة المنظَّمة، ربط السجلات، الانحياز الخوارزمي، والإدماج. والترشحات، المراحل، والآجال مثال مركَّب. والصفحة لا تتناول قانون العمل، ولا العقود، ولا التصريحات والالتزامات المرتبطة بالتوظيف، ولا قواعد المعطيات الشخصية، ولا تذكر أي سعر.",
    ],
    sections: [
      { heading: "ما تفرزه القاعدة وحدها، وما يقرّره شخص", body: [
        "الشكل يفصل خمس مهام في الفرز: ما تقوم به قاعدة وحدها، وما يقرأه شخص ويقرّره.",
      ], visual: 'criteres', after: [
        "**البرنامج.** نظام متابعة الترشحات تطبيق يسمح بمعالجة التوظيف إلكترونياً: البحث في قاعدة الترشحات وتصفيتها، الترتيب والتنقيط، ومتابعة كل شخص من مرحلة إلى أخرى. والتوظيف نفسه يبقى سلسلة مراحل بشرية: البحث، الفرز، الانتقاء الأولي، المقابلة، ثم التوظيف. **ما تقوم به القاعدة وحدها.** التحقق من أن الملف كامل، وتطبيق المعايير المكتوبة في الإعلان: شهادة مطلوبة، رخصة سياقة، أو جاهزية. هذه المعايير معلنة، ويُتحقَّق منها دون تقدير.",
        "**ما يقرّره شخص.** حين يجب تقدير مسار، شخص يقرأ، بشبكة مكتوبة. والتصفية بالكلمات المفتاحية قد تُبعد كفاءة جيدة لم تستعمل الكلمة المنتظرة، وتدفع الناس إلى كتابة سيرهم من أجل الآلة. **الذكاء الاصطناعي.** نموذج يستطيع قراءة سيرة ذاتية واستخراج حقولها، انظر [قراءة الوثائق بالذكاء الاصطناعي](" + L.lecture + ")؛ ويستطيع اقتراح ترتيب للقراءة. لكنه لا يرفض أحداً. والانحياز الخوارزمي ميل مضر، منتظم ومتكرر، في نظام معلوماتي، والتوظيف من الميادين التي ظهر فيها: مؤسسة أوقفت نظام ذكاء اصطناعي طوّرته لفرز الترشحات، بعدما تبيّن لها أنه منحاز ضد النساء. **قاعدتنا.** كل ترتيب يقوم به نموذج يُقاس على ملفاتكم القديمة قبل استعماله، انظر [قياس أن الذكاء الاصطناعي يشتغل](" + L.mesure + ").",
      ] },
      { heading: "عشرون منصباً، وثلاثة آلاف ترشح", body: [
        "الشكل يتابع حملة على لوحة من ستة أعمدة، وملفاً من أولها إلى آخرها.",
      ], visual: 'parcours', after: [
        "**في المثال.** عشرون منصباً مفتوحاً، و" + I('3 000') + " ترشح مستلَم باستمارة واحدة. منها 420 تكراراً: الشخص نفسه ترشح عدة مرات، ببريد آخر أو برقم آخر. يبقى " + I('2 580') + " ملفاً. " + I('1 290') + " منها مؤهَّلة حسب معايير الإعلان، أي النصف. 240 ملفاً تُنتقى بعد القراءة، 120 شخصاً يُستدعون، 96 يُجرون المقابلة، 24 لم يحضروا، و20 عرضاً يُقدَّم. **الملف المتابَع.** مودَع ومؤهَّل في اليوم نفسه، منتقى في اليوم 4، مستدعى في اليوم 6، مقابلة في اليوم 13، وعرض في اليوم 21.",
        "**ملف لكل شخص.** ربط السجلات هو إيجاد السجلات التي تدل على الكيان نفسه في مصادر مختلفة: هنا، الهاتف، البريد الإلكتروني، الاسم، وتاريخ الميلاد. القاعدة تقترح الدمج، وشخص يؤكّد، لأن شخصين بالاسم نفسه ليسا تكراراً؛ والمبدأ هو مبدأ [الملف الواحد للزبون](" + L.unique + "). **باب واحد.** البريد الإلكتروني، الورق المودَع في الاستقبال، والموقع تنتهي كلها في الاستمارة نفسها، انظر [الاستمارة على الإنترنت](" + L.formulaire + "). **ما يُقاس.** الترشحات لكل إعلان ولكل مصدر؛ التكرارات؛ الحصة المؤهَّلة؛ الملفات لكل مرحلة؛ الغيابات عن المقابلات؛ والأيام المقضية في كل مرحلة.",
      ] },
      { heading: "ما يوجد في برنامج توظيف", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة، القواعد، هي التي تُحدَّد قبل كل الباقي.",
      ], visual: 'couches', after: [
        "**الدخول والملف.** صفحة للمناصب، استمارة لكل إعلان مع الوثائق المطلوبة، وإشعار استلام. وتحليل السير الذاتية يستورد الوثيقة ويستخرج منها المعلومات ليمكن فرزها والبحث فيها؛ وما يستخرجه يبقى للتحقق. ولكل شخص ملف، فيه ترشحاته، وثائقه، وتاريخ المراسلات. **القواعد.** هي الطبقة المبرزة: معايير كل إعلان، شبكة القراءة، شبكة المقابلة، ومن يحق له أن يرى، ينقّط، ويقرّر، انظر [الأدوار وسجل التدقيق](" + L.roles + ").",
        "**المراحل والمتابعة.** لوحة الحملة، الاستدعاءات، الفترات، والرسائل؛ ثم الآجال لكل مرحلة، الغيابات، المصادر، وقاعدة مترشحين للمناصب القادمة. **جاهز أو على المقاس.** توجد برامج توظيف جاهزة، وتناسب حين تشبه طريقتكم طريقتها. والعمل على المقاس يُبرَّر حين تكون للحملة قواعدها: معايير لكل منصب ولكل موقع، وثائق تُراقَب، اختبارات، عدة لجان، العربية والفرنسية، ربط ببرنامج المستخدَمين عندكم، وبيانات تبقى عندكم.",
      ] },
      { heading: "أين تُربَح الأيام", body: [
        "الشكل يقارن الحملة نفسها، من إغلاق الترشحات إلى العرض، قبل المنصة ومعها.",
      ], visual: 'delais', after: [
        "**أربع مراحل.** في المثال، قبل: 30 يوماً للفرز، 12 يوماً للاستدعاء، 14 يوماً للمقابلات، و6 أيام للقرار والجواب، أي 62 يوماً. ومع المنصة: 6، 2، 12، و3، أي 23 يوماً. **أين الربح.** في الفرز، 24 يوماً: المعايير المكتوبة تُطبَّق وحدها، التكرارات مدموجة من قبل، والقراءة تبدأ بالملفات الكاملة. وفي الاستدعاءات، 10 أيام: رسالة بفترة تُختار تعوّض الاتصالات دون رد، انظر [حجز الفترات](" + L.reservation + ").",
        "**أين لا ربح.** المقابلات تنزل من 14 إلى 12 يوماً: وقت الأشخاص لا يُضغَط. والمقابلة المنظَّمة تطرح على كل شخص الأسئلة نفسها تماماً وبالترتيب نفسه؛ ومع شبكة تنقيط، تُقارَن الآراء بدل أن تُناقَش. **الرسائل.** إشعار استلام، استدعاء، تذكير في اليوم السابق، وجواب: كل تغيير مرحلة يرسل رسالة، عبر القناة التي تصل، انظر [الإشعارات](" + L.notifications + "). **لماذا يهم ذلك.** تسعة وثلاثون يوماً أقل، أي كفاءات ما زالت متاحة حين تتصلون. **الآجال** هي آجال مثال مركَّب.",
      ] },
      { heading: "عشرة أسابيع، بدءاً بحملة سابقة", body: [
        "عشرة أسابيع في المثال، قبل أول حملة حقيقية.",
      ], visual: 'calendrier', after: [
        "**التأطير.** ننطلق من حملة سابقة: من أين وصلت الترشحات، كم تكراراً، أي المعايير استُعملت فعلاً للفرز، وكم يوماً لكل مرحلة. من هنا تخرج الاستمارة، المعايير، والشبكات. **الاستمارة والملف.** صفحة للمناصب، استمارة لكل إعلان، الوثائق المطلوبة، ودمج التكرارات. **القواعد والشبكات.** تُكتَب مع الأشخاص الذين يوظّفون، لا مكانهم.",
        "**الاسترجاع.** الترشحات الجارية، في علب البريد والجداول، تُستورَد، تُزال تكراراتها، وتُرتَّب حسب الإعلان، انظر [استرجاع البيانات](" + L.reprise + "). **الحملة الأولى.** منصب واحد أولاً، ثم الحملة كلها، مع قياس الآجال في كل مرحلة. **ما لا يفعله البرنامج.** لا يقرّر من يُوظَّف، لا يعوّض المقابلة، ولا يقول شيئاً عن التزاماتكم كصاحب عمل. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "ما يعيشه من يترشح", body: [
        "الشكل يتابع ترشحاً في ست مراحل، من جهة من يترشح.",
      ], visual: 'candidat', after: [
        "**الإيداع وإشعار الاستلام.** استمارة تُملأ من الهاتف، بالعربية أو بالفرنسية، ورقم ملف يُرسَل في الحين. **المتابعة.** بهذا الرقم، يرى الشخص أين وصل ملفه، دون أن يتصل، انظر [فضاء متابعة الملف](" + L.espace + "). **الأهلية، القراءة، والمقابلة.** القاعدة نفسها للجميع، قراءة من شخصين، والأسئلة نفسها بالترتيب نفسه.",
        "**الجواب.** هو المرحلة المبرزة: كل ترشح يتلقى جواباً، قُبل أو لم يُقبَل. ومؤسسة تجيب " + I('2 580') + " شخصاً لا تحتاج ثلاثة أشخاص على الهاتف ليقولوا «ملفكم قيد الدراسة». **بعد ذلك.** الإدماج، أي الطريقة التي يكتسب بها الموظف الجديد المعارف، المهارات، والسلوكات اللازمة، يبدأ بملف جاهز: الوثائق، معلومات الاتصال، والمنصب. والملفات غير المقبولة لكنها متينة تبقى في قاعدة المترشحين، بموافقة أصحابها حسب التزاماتكم.",
      ], list: [
        "**ما تتلقونه**: صفحة المناصب واستمارة لكل إعلان؛ ملف لكل شخص، بتكرارات مدموجة؛ المعايير والشبكات مكتوبة؛ لوحة الحملة؛ الاستدعاءات بفترات؛ رسالة في كل مرحلة؛ المتابعة برقم الملف؛ والآجال لكل مرحلة.",
        "**ما تتفاداه المؤسسة**: السير الذاتية في ثلاث علب بريد، الجدول الذي لا يُحدَّث أبداً، الشخص نفسه يُقرأ أربع مرات، أيام من الاتصالات للاستدعاء، الناس الذين يتصلون ليعرفوا، والكفاءة الجيدة التي يُتصَل بها بعد فوات الأوان.",
        "**ما يُقاس**: الترشحات لكل إعلان ولكل مصدر؛ التكرارات؛ الحصة المؤهَّلة؛ الملفات لكل مرحلة؛ الغيابات عن المقابلات؛ الأيام لكل مرحلة؛ الأيام من الإغلاق إلى العرض؛ والترشحات الباقية دون جواب، ويجب أن تكون صفراً.",
        "**ما تفعله Symloop**: التأطير على حملة سابقة، الاستمارة والملف الواحد، القواعد والشبكات، اللوحة والرسائل، استرجاع الترشحات الجارية، الربط بأدواتكم، والمتابعة بعد الحملة الأولى، بالعربية والفرنسية.",
      ], faq: [
        { q: "ما هو برنامج التوظيف؟", a: "تطبيق يستقبل الترشحات، يحفظ ملفاً لكل شخص، يطبّق معايير الإعلان، يُظهر مرحلة كل ملف، ويرسل الرسائل. ويُسمّى أيضاً نظام متابعة الترشحات." },
        { q: "ما هو نظام متابعة الترشحات " + I('ATS') + "؟", a: "هو الاسم الإنجليزي المختصر للأداة نفسها. يصفّي، يرتّب، ويتابع الترشحات من مرحلة إلى أخرى؛ ولا يقرّر مكان الأشخاص الذين يوظّفون." },
        { q: "كيف تُفرَز " + I('3 000') + " سيرة ذاتية؟", a: "بعدم قراءة " + I('3 000') + " سيرة. تُدمَج التكرارات أولاً، تُطبَّق المعايير المكتوبة في الإعلان، ثم يقرأ شخصان الملفات المؤهَّلة بشبكة. في المثال، القراءة تخص " + I('1 290') + " ملفاً، لا " + I('3 000') + "." },
        { q: "هل يستطيع الذكاء الاصطناعي فرز السير الذاتية؟", a: "يستطيع استخراج معلومات السيرة واقتراح ترتيب للقراءة. ولا نجعله يرفض أحداً: النموذج قد يعيد إنتاج انحياز، وكل ترتيب يُقاس أولاً على ملفاتكم القديمة." },
        { q: "كيف نتفادى أن يترشح الشخص نفسه عدة مرات؟", a: "لا نمنعه، بل نكشفه: الهاتف نفسه، البريد نفسه، الاسم نفسه وتاريخ الميلاد نفسه. البرنامج يقترح الدمج، وشخص يؤكّد." },
        { q: "كيف نسيّر الترشحات التي تصل بالبريد الإلكتروني؟", a: "بإعطائها الباب نفسه: يُرسَل رابط الاستمارة إلى الشخص، أو يُدخل الفريق الترشح في الاستقبال. وكل شيء ينتهي في الملف نفسه." },
        { q: "كيف نستدعي مئات المترشحين؟", a: "برسالة تقترح فترات تُختار، مع تذكير في اليوم السابق. ومن لا يجيب يُذكَّر، ثم يُتصَل به: الهاتف لا يبقى إلا للحالات التي تحتاجه." },
        { q: "هل يجب الرد على كل الترشحات؟", a: "ننصح بذلك، والبرنامج يجعله ممكناً: رسالة نموذجية لكل مرحلة، تُرسَل عند كل تغيير. ومن لا يتلقى جواباً يتصل، يكتب، ويحتفظ بصورة سيئة عن المؤسسة." },
        { q: "ألا يكفي جدول؟", a: "لثلاثة مناصب في السنة، نعم. لحملة، لا: لا يدمج التكرارات، لا يرسل رسالة، لا يقول من غيّر ماذا، ولا يستطيع شخصان العمل فيه دون أن يتعارضا." },
        { q: "بماذا يُبدأ؟", a: "بحملة سابقة: عدّ الترشحات لكل قناة، التكرارات، والأيام المقضية في كل مرحلة. ثم بالاستمارة الواحدة والملف لكل شخص." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الشخص نفسه الذي يترشح أربع مرات ملف واحد، لا أربعة." },
      { after: 3, text: "الربح ليس في المقابلات: هو في كل ما يسبقها." },
    ],
    cta: { eyebrow: "قولوا لنا كم منصباً تفتحون، كم ترشحاً تستقبلون، ومن أين تصل: نبدأ بحملة سابقة", title: "ترشحات في ثلاث علب بريد، جدول لا يُحدَّث أبداً، تكرارات، أيام من الاتصالات للاستدعاء، أناس يتصلون ليعرفوا، أو فريق تبنونه في الجزائر من فرنسا", body: "Symloop تبني برنامج التوظيف الذي يناسب حملاتكم: استمارة واحدة، ملف لكل شخص، قواعد وشبكات مكتوبة، لوحة مراحل، استدعاءات، وجواب لكل ترشح. صِفوا لنا مناصبكم، قنواتكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.formulaire, kind: '2027', name: 'الاستمارة على الإنترنت: التسجيلات، التكرارات، وإشعار الاستلام' },
      { href: L.espace, kind: '2027', name: 'فضاء متابعة الملف: كل واحد لا يرى إلا ملفه' },
      { href: L.unique, kind: '2027', name: 'الملف الواحد: شخص واحد، لا ثلاث بطاقات' },
      { href: L.roles, kind: '2027', name: 'الأدوار، الصلاحيات، وسجل التدقيق: من يرى ماذا، ومن يغيّر ماذا' },
    ] },
  },
};

const KEYWORDS = "logiciel de recrutement, logiciel de recrutement algérie 2027, logiciel gestion des candidatures, logiciel de recrutement en ligne, logiciel de recrutement rh, logiciel de recrutement ia, logiciel ats, logiciel ats recrutement, système de suivi des candidatures, outil de recrutement, plateforme de recrutement, plateforme recrutement algerie, comment trier les cv, ia tri cv, tri automatique cv, recruitment software algeria, applicant tracking system, برنامج التوظيف, منصة توظيف الجزائر, برنامج فرز السير الذاتية, تسيير الترشحات, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
