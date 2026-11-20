import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-de-gestion-cabinet-medical-algerie-2027-agenda-salle-d-attente-dossier-patient-ordonnances-imprimees-recettes-du-jour-qui-voit-quoi.mjs';

const SLUG = 'logiciel-de-gestion-cabinet-medical-algerie-2027-agenda-salle-d-attente-dossier-patient-ordonnances-imprimees-recettes-du-jour-qui-voit-quoi';
const FIGURES = ['couches', 'dossier', 'visite', 'roles', 'quinze', 'calendrier'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  reservation: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  file: '/blog/systeme-de-gestion-de-file-d-attente-algerie-2027-tickets-appel-au-guichet-temps-d-attente-file-virtuelle-par-telephone-nombre-de-guichets/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  sauvegarde: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  labo: '/blog/logiciel-laboratoire-analyses-medicales-algerie-2027-tubes-code-barres-automates-validation-compte-rendu-whatsapp/',
  dentaire: '/blog/cabinet-dentaire-algerie-2027-patients-diaspora-ete-plan-de-traitement-a-distance-devis-radios-suivi/',
  reprise: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
};

const CONTENT = {
  fr: {
    kind: 'Cabinet médical · Algérie · 2027', title: "Logiciel de gestion de cabinet médical en Algérie (2027) : des dossiers papier introuvables, une salle d'attente qui déborde, des ordonnances recopiées à la main, des recettes comptées le soir sur un cahier ; agenda, dossier du patient, ordonnance, accès, et ce qu'on met en place",
    dek: "« Je suis médecin, avec un cabinet et un secrétariat. Les dossiers sont dans des chemises en carton : quand un patient revient après un an, on cherche le sien dix minutes, et parfois on ne le retrouve pas. Je recopie les mêmes ordonnances à la main, la salle d'attente déborde le matin, et le soir je compte les recettes sur un cahier. On me propose des logiciels, mais je ne veux pas passer mes consultations devant un écran. Existe-t-il un logiciel de gestion de cabinet médical qui me rende du temps ? » Un cabinet n'a pas besoin de plus d'écrans : il a besoin que le dossier soit ouvert avant que le patient ne s'assoie.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de gestion de cabinet médical', 'Dossier du patient', 'Agenda et salle d’attente', 'Ordonnances imprimées', 'Accès par rôle et sauvegarde', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de cabinet médical tient quatre choses. **L'agenda** : des rendez-vous dont la durée dépend du type de visite, et une salle d'attente que l'on voit à l'écran. **Le dossier du patient** : antécédents, allergies, traitements, consultations et pièces, ouvert à l'arrivée du patient. **L'ordonnance** : composée depuis le traitement habituel et les favoris, imprimée lisible. **Les accès** : le secrétariat organise sans lire le médical, et une sauvegarde part chaque nuit. Dans l'exemple de cette page, sur une consultation de quinze minutes, le temps passé avec le patient passe de 9 à 13 minutes.",
      "Cette page s'adresse aux médecins, généralistes ou spécialistes, qui exercent seuls ou à plusieurs, et à celles et ceux qui gèrent leur cabinet, en Algérie ou depuis la France pour un projet d'installation. Les définitions viennent de sources publiques : logiciel de gestion de cabinet médical, dossier médical, dossier de santé électronique, anamnèse, ordonnance, prescription électronique, contrôle d'accès par rôle, sauvegarde, salle d'attente. Le patient, son dossier et les durées sont un exemple construit, sans aucune donnée réelle. La page ne donne aucun avis médical ; elle ne traite ni des règles de la profession, ni des conventions avec les caisses, ni de la réglementation des données de santé, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans un logiciel de cabinet médical", body: [
        "La figure empile cinq couches ; la deuxième est celle dont tout dépend.",
      ], visual: 'couches', after: [
        "**La définition.** Un logiciel de gestion de cabinet médical est une catégorie de logiciels de santé qui s'occupe du fonctionnement quotidien d'un cabinet : il permet le plus souvent de saisir l'identité des patients, de planifier les rendez-vous, de tenir la facturation et de produire des rapports. **Le dossier.** Le dossier médical est la documentation systématique de l'histoire médicale et des soins d'un seul patient dans le temps. Sa version électronique peut contenir l'identité, les antécédents, les médicaments et les allergies, les résultats d'analyses, l'imagerie, les constantes. **L'agenda.** Il gère rendez-vous et réservations ; ses mécanismes, créneaux, rappels, liste d'attente, sont décrits dans [la réservation en ligne](" + L.reservation + ").",
        "**La consultation, les recettes, les accès** ont chacun leur section. **Sans Internet.** Un cabinet ne s'arrête pas quand la connexion tombe : l'agenda, les dossiers et l'impression continuent sur place, voir [l'application hors ligne](" + L.horsligne + "). **Les autres métiers.** Un laboratoire a ses tubes et ses automates, voir [le logiciel de laboratoire](" + L.labo + ") ; un cabinet dentaire a ses plans de traitement et ses devis, voir [le cabinet dentaire](" + L.dentaire + "). Le socle, agenda, dossier, accès, est le même.",
      ] },
      { heading: "Le dossier, ouvert avant le patient", body: [
        "La figure montre le dossier d'un patient sur trois ans.",
      ], visual: 'dossier', after: [
        "**L'anamnèse.** L'histoire médicale d'un patient est l'ensemble des informations que le médecin recueille au fil des entretiens. Sur papier, elle est éparpillée dans des feuilles datées ; dans le logiciel, les éléments durables, antécédents, allergies, traitement habituel, restent en tête du dossier, et les consultations s'ajoutent dessous. **Cinq lignes.** Dans l'exemple : 12 consultations, 9 ordonnances, 5 analyses, 2 examens d'imagerie, 2 certificats, soit 30 pièces en trois ans. **Ce qui est attendu.** Une analyse demandée le mois dernier n'a pas de résultat : le dossier le signale avant que le patient n'entre.",
        "**Les pièces.** Un résultat apporté par le patient se photographie ou se scanne à l'accueil et se range sous la consultation qui l'a demandé. **Les mesures.** Tension, poids, glycémie : saisies comme des nombres, elles se lisent en courbe d'une visite à l'autre. **La recherche.** Par nom, par téléphone, par date de naissance : le dossier s'ouvre en quelques secondes, y compris celui d'un patient absent depuis deux ans. **La reprise.** On ne ressaisit pas vingt ans de chemises : les patients actifs entrent d'abord, les autres à leur prochaine visite, voir [la reprise des données](" + L.reprise + ").",
      ] },
      { heading: "Une visite, en six temps", body: [
        "La figure suit une visite en six temps.",
      ], visual: 'visite', after: [
        "**Le rendez-vous.** Une première visite ne dure pas comme un renouvellement : chaque type de visite a sa durée, et l'agenda cesse de promettre quatre patients par heure quand ce n'est pas vrai. **L'arrivée.** Une salle d'attente est un lieu où l'on attend que le rendez-vous commence ; le secrétariat pointe l'arrivée, le médecin voit à l'écran qui attend et depuis quand. Pour un cabinet à fort passage, les mécanismes sont ceux de [la gestion de file d'attente](" + L.file + "). **La consultation.** C'est le temps accentué : les notes se prennent en phrases courtes ou en modèles, sans formulaire à trente cases.",
        "**L'ordonnance.** Une ordonnance est une communication formelle d'un médecin à un pharmacien, pour un médicament précis et un patient précis. La prescription électronique est sa production par ordinateur, à la place du papier manuscrit ; ici, elle se compose en choisissant dans le traitement habituel du patient et les favoris du médecin, et elle s'imprime, signée de sa main. **Le règlement.** L'acte est enregistré, le reçu remis ; le soir, la clôture donne le total par type d'acte. **La suite.** Le prochain rendez-vous se prend avant de sortir, et les résultats attendus restent visibles.",
      ] },
      { heading: "Qui voit quoi", body: [
        "La figure donne, pour cinq rôles, ce que chacun fait et ce qu'il ne voit pas.",
      ], visual: 'roles', after: [
        "**Le principe.** Le contrôle d'accès par rôle restreint l'accès au système aux utilisateurs autorisés, selon des rôles et des privilèges. Dans un cabinet : le secrétariat tient l'agenda et l'accueil sans lire les notes ; la comptabilité voit les recettes sans voir un seul nom de maladie. Les détails sont dans [les rôles et droits](" + L.roles + "). **La trace.** Chaque ouverture de dossier est enregistrée : qui, quand. **Le remplacement.** Un médecin remplaçant reçoit un accès limité dans le temps, et ce qu'il écrit reste signé de son nom.",
        "**La sauvegarde.** Une sauvegarde est une copie des données, conservée ailleurs, pour pouvoir restaurer l'original après une perte. Les dossiers d'un cabinet sont irremplaçables : une copie chiffrée part chaque nuit hors du cabinet, et la restauration se teste, voir [si le serveur meurt demain](" + L.sauvegarde + "). **Où sont les données.** Sur un poste du cabinet, chez un hébergeur, ou les deux : le choix se fait avec vous, selon votre connexion et vos obligations, que cette page ne traite pas. **Le départ.** Si vous changez de logiciel, vos dossiers sortent dans un format lisible : c'est à écrire dans le contrat dès le début.",
      ] },
      { heading: "Quinze minutes, avant et après", body: [
        "La figure découpe une consultation de quinze minutes, de deux façons.",
      ], visual: 'quinze', after: [
        "**Sur papier.** Dans l'exemple : neuf minutes avec le patient, quatre à écrire l'ordonnance et le certificat à la main, deux à chercher le dossier et à relire la dernière visite. **Avec le logiciel.** Treize minutes avec le patient, une pour l'ordonnance, une pour le dossier. **La différence.** Quatre minutes par consultation ; sur vingt-quatre consultations, 96 minutes par jour. Ce ne sont pas des minutes de travail en moins : ce sont des minutes rendues à l'examen et à l'écoute.",
        "**L'objection de l'écran.** Un logiciel mal conçu fait l'inverse : il ajoute des cases à cocher et tourne le médecin vers l'écran. Le critère est simple : pendant la consultation, combien de clics et combien de secondes sans regarder le patient ? **Ce que l'on mesure.** Pour le cabinet, pas pour le patient : nombre de consultations par type ; rendez-vous non honorés ; attente moyenne en salle ; durée réelle par type de visite ; recettes par jour. **À mesurer chez vous.** Ces durées sont fictives : une semaine de chronométrage, avant, dit où sont vos minutes.",
      ] },
      { heading: "Six semaines pour un cabinet", body: [
        "Six semaines dans l'exemple, pour un cabinet d'un à trois médecins.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos types de visite et leurs durées, vos modèles d'ordonnance et de certificat, vos rôles, et ce que vous avez déjà, cahier, tableur ou ancien logiciel. **Le matériel.** Un poste à l'accueil, un poste ou une tablette dans le bureau du médecin, une imprimante : ce que la plupart des cabinets ont déjà. **La bascule.** Une semaine en double avec le papier, puis le papier s'arrête ; les anciennes chemises restent consultables.",
        "**Prêt à l'emploi ou sur mesure.** Des logiciels médicaux existent, et un cabinet seul avec des besoins courants peut s'en contenter. Le sur-mesure se justifie pour un cabinet de groupe, une spécialité avec ses propres mesures et ses propres documents, plusieurs sites, l'arabe et le français, ou un lien avec un laboratoire ou un centre d'imagerie. **Ce que le logiciel ne fait pas.** Il n'interprète rien et ne prescrit rien : il range, il rappelle, il imprime. La décision médicale reste entièrement celle du médecin. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que vous recevez** : un agenda par type de visite avec rappels ; l'accueil et la salle d'attente à l'écran ; le dossier du patient avec ses pièces ; l'ordonnance et le certificat depuis vos modèles ; les reçus et la clôture du jour ; des droits par rôle ; une sauvegarde chaque nuit.",
        "**Ce que le cabinet évite** : le dossier introuvable, l'ordonnance recopiée, la salle d'attente sans visibilité, le résultat d'analyse oublié, les recettes recomptées sur un cahier, la perte de vingt ans de dossiers.",
        "**Ce qui est mesuré** : consultations par jour et par type ; rendez-vous non honorés ; attente moyenne ; durée réelle par type de visite ; recettes par jour et par type d'acte.",
        "**Ce que fait Symloop** : le cadrage des visites et des modèles, l'agenda et l'accueil, le dossier et la consultation, l'ordonnance, les recettes, les accès et la sauvegarde, la reprise des patients actifs, en arabe et en français.",
      ], faq: [
        { q: "Quel logiciel pour un cabinet médical ?", a: "Un logiciel qui tient l'agenda, le dossier du patient, l'ordonnance, les recettes et les accès, et qui fonctionne sans Internet. Le critère de choix : le temps qu'il demande au médecin pendant la consultation." },
        { q: "Comment gérer un cabinet médical ?", a: "En séparant ce que tient le secrétariat, agenda, accueil, reçus, de ce que tient le médecin, dossier, ordonnance, et en mesurant chaque semaine les consultations, l'attente et les rendez-vous non honorés." },
        { q: "Comment informatiser les dossiers des patients ?", a: "En commençant par les patients actifs : identité, antécédents, traitement habituel. Les autres entrent à leur prochaine visite. Les anciennes chemises restent consultables et ne sont pas ressaisies." },
        { q: "Le médecin doit-il taper pendant la consultation ?", a: "Le moins possible. Des notes courtes, des modèles par motif, une ordonnance composée en quelques gestes : le logiciel se juge au nombre de secondes passées sans regarder le patient." },
        { q: "Comment imprimer une ordonnance depuis le logiciel ?", a: "En choisissant les lignes dans le traitement habituel du patient et dans vos favoris, avec la posologie déjà écrite. L'ordonnance s'imprime à l'en-tête du cabinet et se signe à la main." },
        { q: "Le secrétariat voit-il le dossier médical ?", a: "Non, si les rôles sont bien réglés : le secrétariat voit l'agenda, l'identité et les reçus, pas les notes ni les ordonnances. Chaque ouverture de dossier est enregistrée." },
        { q: "Que se passe-t-il si Internet tombe ?", a: "Rien pour le cabinet, si le logiciel a été conçu pour cela : l'agenda, les dossiers et l'impression continuent sur place, et la synchronisation reprend au retour de la connexion." },
        { q: "Comment protéger les dossiers contre la perte ?", a: "Par une sauvegarde chiffrée, chaque nuit, hors du cabinet, et par une restauration testée. Un seul disque dans un seul ordinateur n'est pas une sauvegarde." },
        { q: "Comment réduire les rendez-vous manqués ?", a: "Par un rappel la veille, un moyen simple d'annuler, et une liste d'attente qui remplit le créneau libéré. Le logiciel compte les absences, par jour et par type de visite." },
        { q: "Peut-on récupérer ses dossiers si l'on change de logiciel ?", a: "Il le faut. L'export des dossiers dans un format lisible se prévoit au contrat, avant de commencer, et se teste une fois." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un cabinet n'a pas besoin de plus d'écrans : il a besoin que le dossier soit ouvert avant que le patient ne s'assoie." },
      { after: 4, text: "Ce ne sont pas des minutes de travail en moins : ce sont des minutes rendues à l'examen et à l'écoute." },
    ],
    cta: { eyebrow: "Dites-nous combien de médecins, combien de consultations par jour, et ce que vous utilisez aujourd'hui : nous commençons par une semaine de cadrage", title: "Dossiers papier introuvables, ordonnances recopiées, salle d'attente qui déborde, recettes sur un cahier, ou cabinet que vous préparez depuis la France", body: "Symloop construit le logiciel qui correspond à votre exercice : agenda, dossier du patient, ordonnance, recettes, accès, sauvegarde. Décrivez-nous vos types de visite, vos modèles et votre équipe." },
    related: { label: 'À lire aussi', items: [
      { href: L.reservation, kind: '2027', name: 'La réservation en ligne : créneaux, liste d’attente, rappels' },
      { href: L.file, kind: '2027', name: 'Système de gestion de file d’attente : tickets, appel, attente estimée' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi' },
      { href: L.sauvegarde, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes et restauration testée' },
    ] },
  },
  en: {
    kind: 'Medical practice · Algeria · 2027', title: "Medical practice management software in Algeria (2027): paper files nobody can find, a waiting room that overflows, prescriptions copied out by hand, takings counted in a ledger in the evening; diary, patient file, prescription, access, and what we put in place",
    dek: "“I am a doctor, with a practice and a front desk. The files are in cardboard folders: when a patient comes back after a year, we look for theirs for ten minutes, and sometimes we do not find it. I copy out the same prescriptions by hand, the waiting room overflows in the morning, and in the evening I count the takings in a ledger. I am offered software, but I do not want to spend my consultations in front of a screen. Is there medical practice management software that gives me time back?” A practice does not need more screens: it needs the file to be open before the patient sits down.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Medical practice management software', 'The patient file', 'Diary and waiting room', 'Printed prescriptions', 'Role-based access and backup', 'Algeria 2027'],
    intro: [
      "**Short answer.** Medical practice software holds four things. **The diary**: appointments whose length depends on the type of visit, and a waiting room you can see on screen. **The patient file**: history, allergies, treatments, consultations and attached items, open when the patient arrives. **The prescription**: composed from the usual treatment and favourites, printed legibly. **Access**: the front desk organises without reading anything medical, and a backup leaves every night. In this page's example, in a fifteen-minute consultation, the time spent with the patient goes from 9 to 13 minutes.",
      "This page is for doctors, general practitioners or specialists, working alone or in a group, and for those who manage their practice, in Algeria or from France for a plan to set up. The definitions come from public sources: medical practice management software, medical record, electronic health record, medical history, prescription, electronic prescribing, role-based access control, backup, waiting room. The patient, the file and the durations are a constructed example, with no real data. The page gives no medical advice; it covers neither the rules of the profession, nor agreements with insurance funds, nor health-data regulation, nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside medical practice software", body: [
        "The figure stacks five layers; the second is the one everything depends on.",
      ], visual: 'couches', after: [
        "**The definition.** Medical practice management software is a category of healthcare software that deals with the day-to-day operations of a medical practice: it frequently lets users capture patient demographics, schedule appointments, perform billing tasks and generate reports. **The file.** The medical record is the systematic documentation of a single patient's medical history and care across time. Its electronic form may include demographics, medical history, medication and allergies, laboratory test results, radiology images, vital signs. **The diary.** It manages appointments and bookings; its mechanisms, slots, reminders, waiting list, are described in [online booking](" + L.reservation + ").",
        "**The consultation, takings and access** each have their section. **Without the internet.** A practice does not stop when the connection drops: the diary, the files and printing carry on locally, see [the offline application](" + L.horsligne + "). **Other trades.** A laboratory has its tubes and its analysers, see [laboratory software](" + L.labo + "); a dental practice has its treatment plans and its quotes, see [the dental practice](" + L.dentaire + "). The base, diary, file, access, is the same.",
      ] },
      { heading: "The file, open before the patient", body: [
        "The figure shows one patient's file over three years.",
      ], visual: 'dossier', after: [
        "**The history.** A patient's medical history is the set of information the physician collects over medical interviews. On paper it is scattered across dated sheets; in the software, the lasting elements, history, allergies, usual treatment, stay at the top of the file, and consultations are added underneath. **Five lanes.** In the example: 12 consultations, 9 prescriptions, 5 lab tests, 2 imaging exams, 2 certificates, that is 30 items in three years. **What is awaited.** A test requested last month has no result: the file flags it before the patient walks in.",
        "**Items.** A result brought by the patient is photographed or scanned at the desk and filed under the consultation that requested it. **Measurements.** Blood pressure, weight, blood sugar: entered as numbers, they read as a curve from one visit to the next. **Search.** By name, by phone, by date of birth: the file opens in a few seconds, including that of a patient not seen for two years. **Taking over.** Twenty years of folders are not re-entered: active patients go in first, the others at their next visit, see [taking over the data](" + L.reprise + ").",
      ] },
      { heading: "A visit, in six steps", body: [
        "The figure follows a visit in six steps.",
      ], visual: 'visite', after: [
        "**The appointment.** A first visit does not last as long as a renewal: each type of visit has its own duration, and the diary stops promising four patients an hour when that is not true. **Arrival.** A waiting room is a place where people wait until the appointment begins; the front desk checks the patient in, and the doctor sees on screen who is waiting and since when. For a practice with heavy footfall, the mechanisms are those of [queue management](" + L.file + "). **The consultation.** That is the accented step: notes are taken in short sentences or templates, with no thirty-box form.",
        "**The prescription.** A prescription is a formal communication from a physician to a pharmacist, for a specific drug and a specific patient. Electronic prescribing is its computer-based generation, taking the place of handwritten paper; here it is composed by choosing from the patient's usual treatment and the doctor's favourites, and it is printed, then signed by hand. **Payment.** The act is recorded, the receipt handed over; in the evening, closing gives the total per type of act. **Follow-up.** The next appointment is made before leaving, and results awaited stay visible.",
      ] },
      { heading: "Who sees what", body: [
        "The figure gives, for five roles, what each does and what it does not see.",
      ], visual: 'roles', after: [
        "**The principle.** Role-based access control restricts system access to authorised users, around roles and privileges. In a practice: the front desk runs the diary and reception without reading the notes; accounts see the takings without seeing a single name of an illness. The details are in [roles and rights](" + L.roles + "). **The trace.** Each opening of a file is recorded: who, when. **Cover.** A locum doctor receives access limited in time, and what they write stays signed with their name.",
        "**Backup.** A backup is a copy of data, stored elsewhere, so that the original can be restored after a loss. A practice's files are irreplaceable: an encrypted copy leaves the practice every night, and restoration is tested, see [if the server dies tomorrow](" + L.sauvegarde + "). **Where the data is.** On a workstation in the practice, with a host, or both: the choice is made with you, according to your connection and your obligations, which this page does not cover. **Leaving.** If you change software, your files come out in a readable format: that is to be written into the contract from the start.",
      ] },
      { heading: "Fifteen minutes, before and after", body: [
        "The figure breaks down a fifteen-minute consultation, in two ways.",
      ], visual: 'quinze', after: [
        "**On paper.** In the example: nine minutes with the patient, four writing the prescription and the certificate by hand, two finding the file and rereading the last visit. **With the software.** Thirteen minutes with the patient, one for the prescription, one for the file. **The difference.** Four minutes per consultation; over twenty-four consultations, 96 minutes a day. They are not minutes of work saved: they are minutes given back to examining and listening.",
        "**The screen objection.** Badly designed software does the opposite: it adds boxes to tick and turns the doctor towards the screen. The test is simple: during the consultation, how many clicks and how many seconds without looking at the patient? **What is measured.** For the practice, not for the patient: number of consultations per type; missed appointments; average wait in the room; real duration per type of visit; takings per day. **To be measured in your practice.** These durations are fictitious: a week of timing, beforehand, tells you where your minutes go.",
      ] },
      { heading: "Six weeks for a practice", body: [
        "Six weeks in the example, for a practice of one to three doctors.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your types of visit and their durations, your prescription and certificate templates, your roles, and what you already have, ledger, spreadsheet or old software. **Equipment.** A workstation at the desk, a workstation or a tablet in the doctor's office, a printer: what most practices already have. **The switch.** One week in parallel with paper, then paper stops; the old folders remain available for reference.",
        "**Ready-made or custom.** Medical software exists, and a solo practice with ordinary needs can make do with it. Custom work is justified for a group practice, a speciality with its own measurements and its own documents, several sites, Arabic and French, or a link with a laboratory or an imaging centre. **What the software does not do.** It interprets nothing and prescribes nothing: it files, it reminds, it prints. The medical decision remains entirely the doctor's. **The durations** are those of a constructed example.",
      ], list: [
        "**What you receive**: a diary by type of visit with reminders; reception and the waiting room on screen; the patient file with its items; the prescription and the certificate from your templates; receipts and the closing of the day; rights per role; a backup every night.",
        "**What the practice avoids**: the file nobody can find, the prescription copied out again, the waiting room with no visibility, the forgotten test result, the takings recounted in a ledger, the loss of twenty years of files.",
        "**What is measured**: consultations per day and per type; missed appointments; average wait; real duration per type of visit; takings per day and per type of act.",
        "**What Symloop does**: scoping the visits and the templates, the diary and reception, the file and the consultation, the prescription, takings, access and backup, taking over active patients, in Arabic and in French.",
      ], faq: [
        { q: "What software for a medical practice?", a: "Software that holds the diary, the patient file, the prescription, takings and access, and that works without the internet. The test for choosing: the time it asks of the doctor during the consultation." },
        { q: "How do you manage a medical practice?", a: "By separating what the front desk holds, diary, reception, receipts, from what the doctor holds, file, prescription, and by measuring each week the consultations, the wait and missed appointments." },
        { q: "How do you computerise patient files?", a: "By starting with active patients: identity, history, usual treatment. The others go in at their next visit. The old folders remain available and are not re-entered." },
        { q: "Does the doctor have to type during the consultation?", a: "As little as possible. Short notes, templates per reason for visiting, a prescription composed in a few gestures: the software is judged by the seconds spent not looking at the patient." },
        { q: "How do you print a prescription from the software?", a: "By choosing the lines from the patient's usual treatment and from your favourites, with the dosage already written. The prescription prints on the practice letterhead and is signed by hand." },
        { q: "Does the front desk see the medical file?", a: "No, if roles are set properly: the front desk sees the diary, identity and receipts, not the notes or the prescriptions. Each opening of a file is recorded." },
        { q: "What happens if the internet goes down?", a: "Nothing for the practice, if the software was designed for it: the diary, the files and printing carry on locally, and synchronisation resumes when the connection returns." },
        { q: "How do you protect the files against loss?", a: "With an encrypted backup, every night, outside the practice, and a tested restoration. A single disk in a single computer is not a backup." },
        { q: "How do you reduce missed appointments?", a: "With a reminder the day before, a simple way to cancel, and a waiting list that fills the freed slot. The software counts no-shows, per day and per type of visit." },
        { q: "Can the files be recovered if you change software?", a: "They must be. Export of the files in a readable format is provided for in the contract, before starting, and tested once." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A practice does not need more screens: it needs the file to be open before the patient sits down." },
      { after: 4, text: "They are not minutes of work saved: they are minutes given back to examining and listening." },
    ],
    cta: { eyebrow: "Tell us how many doctors, how many consultations a day, and what you use today: we start with a week of scoping", title: "Paper files nobody can find, prescriptions copied out again, a waiting room that overflows, takings in a ledger, or a practice you are preparing from France", body: "Symloop builds the software that fits the way you practise: diary, patient file, prescription, takings, access, backup. Describe your types of visit to us, your templates and your team." },
    related: { label: 'Also read', items: [
      { href: L.reservation, kind: '2027', name: 'Online booking: slots, waiting list, reminders' },
      { href: L.file, kind: '2027', name: 'Queue management system: tickets, calling, estimated wait' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log: who sees what' },
      { href: L.sauvegarde, kind: '2027', name: 'If the server dies tomorrow: backups and tested restoration' },
    ] },
  },
  ar: {
    kind: 'العيادة الطبية · الجزائر · 2027', title: "برنامج تسيير العيادة الطبية في الجزائر (2027): ملفات ورقية لا يُعثر عليها، قاعة انتظار تفيض، وصفات تُنسخ باليد، ومداخيل تُعدّ مساءً في دفتر؛ المواعيد، ملف المريض، الوصفة، الدخول، وما نضعه",
    dek: "«أنا طبيب، عندي عيادة وأمانة. الملفات في حافظات من الورق المقوّى: حين يعود مريض بعد سنة، نبحث عن ملفه عشر دقائق، وأحياناً لا نجده. أنسخ الوصفات نفسها باليد، قاعة الانتظار تفيض صباحاً، وفي المساء أعدّ المداخيل في دفتر. تُعرض عليّ برامج، لكني لا أريد أن أقضي فحوصي أمام شاشة. هل يوجد برنامج تسيير عيادة طبية يعيد إليّ الوقت؟» العيادة لا تحتاج إلى شاشات أكثر: تحتاج إلى أن يكون الملف مفتوحاً قبل أن يجلس المريض.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج تسيير العيادة الطبية', 'ملف المريض', 'المواعيد وقاعة الانتظار', 'الوصفات المطبوعة', 'الدخول حسب الدور والنسخ الاحتياطي', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج العيادة الطبية يمسك أربعة أشياء. **المواعيد**: مواعيد تتوقف مدتها على نوع الزيارة، وقاعة انتظار تُرى على الشاشة. **ملف المريض**: السوابق، الحساسيات، العلاجات، الفحوص، والوثائق، مفتوحاً عند وصول المريض. **الوصفة**: تُركَّب من العلاج المعتاد ومن المفضّلة، وتُطبع مقروءة. و**الدخول**: الأمانة تنظّم دون أن تقرأ ما هو طبي، ونسخة احتياطية تخرج كل ليلة. في مثال هذه الصفحة، في فحص من خمس عشرة دقيقة، ينتقل الوقت المقضي مع المريض من 9 إلى 13 دقيقة.",
      "هذه الصفحة موجّهة إلى الأطباء، عامّين أو مختصين، الذين يمارسون وحدهم أو في جماعة، وإلى من يسيّر عيادتهم، في الجزائر أو من فرنسا لمشروع استقرار. التعريفات من مصادر عمومية: برنامج تسيير العيادة الطبية، الملف الطبي، الملف الصحي الإلكتروني، السوابق المرضية، الوصفة الطبية، الوصف الإلكتروني، التحكم في الدخول حسب الدور، النسخ الاحتياطي، وقاعة الانتظار. والمريض وملفه والمدد مثال مركَّب، دون أي معطى حقيقي. والصفحة لا تعطي أي رأي طبي؛ ولا تتناول قواعد المهنة، ولا الاتفاقيات مع الصناديق، ولا تنظيم المعطيات الصحية، ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في برنامج العيادة الطبية", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية هي التي يتوقف عليها كل شيء.",
      ], visual: 'couches', after: [
        "**التعريف.** برنامج تسيير العيادة الطبية صنف من برامج الصحة يتكفّل بالسير اليومي لعيادة: يسمح في الغالب بإدخال هوية المرضى، برمجة المواعيد، مسك الفوترة، وإنتاج التقارير. **الملف.** الملف الطبي هو التوثيق المنهجي للتاريخ الطبي والعلاجات لمريض واحد عبر الزمن. ونسخته الإلكترونية قد تضم الهوية، السوابق، الأدوية والحساسيات، نتائج التحاليل، صور الأشعة، والعلامات الحيوية. **المواعيد.** البرنامج يسيّر المواعيد والحجوزات؛ وآلياته، المواقيت، التذكيرات، وقائمة الانتظار، موصوفة في [الحجز عبر الإنترنت](" + L.reservation + ").",
        "ولكل من **الفحص، المداخيل، والدخول** قسمه. **دون إنترنت.** العيادة لا تتوقف حين ينقطع الاتصال: المواعيد، الملفات، والطباعة تستمر في المكان، انظر [التطبيق دون اتصال](" + L.horsligne + "). **المهن الأخرى.** للمخبر أنابيبه وأجهزته، انظر [برنامج المخبر](" + L.labo + ")؛ ولعيادة الأسنان مخططات علاجها وكشوفها، انظر [عيادة الأسنان](" + L.dentaire + "). والقاعدة، المواعيد، الملف، والدخول، واحدة.",
      ] },
      { heading: "الملف، مفتوحاً قبل المريض", body: [
        "الشكل يعرض ملف مريض على ثلاث سنوات.",
      ], visual: 'dossier', after: [
        "**السوابق.** التاريخ الطبي لمريض هو مجموع المعلومات التي يجمعها الطبيب عبر المقابلات. على الورق، هو مبعثر في أوراق مؤرَّخة؛ وفي البرنامج، العناصر الدائمة، السوابق، الحساسيات، والعلاج المعتاد، تبقى في رأس الملف، والفحوص تُضاف تحتها. **خمسة أسطر.** في المثال: 12 فحصاً، 9 وصفات، 5 تحاليل، فحصان بالتصوير، وشهادتان، أي 30 وثيقة في ثلاث سنوات. **ما هو منتظَر.** تحليل طُلب الشهر الماضي لا نتيجة له: الملف يشير إليه قبل أن يدخل المريض.",
        "**الوثائق.** نتيجة يحملها المريض تُصوَّر أو تُمسح في الاستقبال وتُرتَّب تحت الفحص الذي طلبها. **القياسات.** الضغط، الوزن، والسكر: تُدخَل كأرقام، فتُقرأ كمنحنى من زيارة إلى أخرى. **البحث.** بالاسم، بالهاتف، أو بتاريخ الميلاد: الملف يُفتح في ثوانٍ، حتى ملف مريض غائب منذ سنتين. **الاسترجاع.** لا تُعاد كتابة عشرين سنة من الحافظات: المرضى النشطون يدخلون أولاً، والآخرون عند زيارتهم القادمة، انظر [استرجاع المعطيات](" + L.reprise + ").",
      ] },
      { heading: "زيارة، في ست مراحل", body: [
        "الشكل يتابع زيارة في ست مراحل.",
      ], visual: 'visite', after: [
        "**الموعد.** زيارة أولى لا تدوم كتجديد وصفة: لكل نوع من الزيارة مدته، والمواعيد تكفّ عن الوعد بأربعة مرضى في الساعة حين لا يكون ذلك صحيحاً. **الوصول.** قاعة الانتظار مكان يُنتظر فيه حتى يبدأ الموعد؛ الأمانة تسجّل الوصول، والطبيب يرى على الشاشة من ينتظر ومنذ متى. ولعيادة كثيرة المرور، الآليات هي آليات [تسيير الطوابير](" + L.file + "). **الفحص.** هو المرحلة المبرزة: الملاحظات تُؤخذ بجمل قصيرة أو بنماذج، دون استمارة من ثلاثين خانة.",
        "**الوصفة.** الوصفة الطبية تبليغ رسمي من طبيب إلى صيدلي، لدواء محدَّد ومريض محدَّد. والوصف الإلكتروني هو إنتاجها بالحاسوب، مكان الورق المكتوب باليد؛ وهنا، تُركَّب بالاختيار من العلاج المعتاد للمريض ومن مفضّلة الطبيب، وتُطبع، ثم تُمضى بيده. **الدفع.** العمل يُسجَّل، والوصل يُسلَّم؛ وفي المساء، يعطي الإغلاق المجموع لكل نوع عمل. **المتابعة.** الموعد القادم يُؤخذ قبل الخروج، والنتائج المنتظَرة تبقى ظاهرة.",
      ] },
      { heading: "من يرى ماذا", body: [
        "الشكل يعطي، لخمسة أدوار، ما يفعله كل واحد وما لا يراه.",
      ], visual: 'roles', after: [
        "**المبدأ.** التحكم في الدخول حسب الدور يحصر الدخول إلى النظام في المستعملين المرخَّص لهم، حسب أدوار وامتيازات. وفي العيادة: الأمانة تمسك المواعيد والاستقبال دون قراءة الملاحظات؛ والمحاسبة ترى المداخيل دون أن ترى اسم مرض واحد. والتفاصيل في [الأدوار والحقوق](" + L.roles + "). **الأثر.** كل فتح لملف يُسجَّل: من، ومتى. **التعويض.** الطبيب المعوِّض يأخذ دخولاً محدوداً في الزمن، وما يكتبه يبقى موقَّعاً باسمه.",
        "**النسخ الاحتياطي.** النسخة الاحتياطية نسخة من المعطيات، محفوظة في مكان آخر، لاسترجاع الأصل بعد ضياع. وملفات العيادة لا تُعوَّض: نسخة مشفَّرة تخرج كل ليلة من العيادة، والاسترجاع يُجرَّب، انظر [إذا مات الخادم غداً](" + L.sauvegarde + "). **أين المعطيات.** على جهاز في العيادة، عند مستضيف، أو الاثنين: الاختيار يتم معكم، حسب اتصالكم والتزاماتكم، التي لا تتناولها هذه الصفحة. **المغادرة.** إذا غيّرتم البرنامج، تخرج ملفاتكم في صيغة مقروءة: وهذا يُكتب في العقد منذ البداية.",
      ] },
      { heading: "خمس عشرة دقيقة، قبل وبعد", body: [
        "الشكل يقسّم فحصاً من خمس عشرة دقيقة، بطريقتين.",
      ], visual: 'quinze', after: [
        "**على الورق.** في المثال: تسع دقائق مع المريض، أربع في كتابة الوصفة والشهادة باليد، ودقيقتان في البحث عن الملف وقراءة آخر زيارة. **بالبرنامج.** ثلاث عشرة دقيقة مع المريض، دقيقة للوصفة، ودقيقة للملف. **الفرق.** أربع دقائق في كل فحص؛ وعلى أربعة وعشرين فحصاً، 96 دقيقة في اليوم. وليست دقائق عمل ناقصة: هي دقائق تُعاد إلى الفحص والإصغاء.",
        "**اعتراض الشاشة.** برنامج سيّئ التصميم يفعل العكس: يضيف خانات تُعلَّم ويدير الطبيب نحو الشاشة. والمعيار بسيط: أثناء الفحص، كم نقرة وكم ثانية دون النظر إلى المريض؟ **ما يُقاس.** للعيادة، لا للمريض: عدد الفحوص لكل نوع؛ المواعيد الضائعة؛ متوسط الانتظار في القاعة؛ المدة الفعلية لكل نوع من الزيارة؛ والمداخيل في اليوم. **يُقاس عندكم.** هذه المدد خيالية: أسبوع من التوقيت، قبل البدء، يقول أين تذهب دقائقكم.",
      ] },
      { heading: "ستة أسابيع لعيادة", body: [
        "ستة أسابيع في المثال، لعيادة من طبيب إلى ثلاثة.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: أنواع الزيارة عندكم ومددها، نماذج الوصفات والشهادات، الأدوار، وما عندكم حالياً، دفتر، جدول، أو برنامج قديم. **العتاد.** جهاز في الاستقبال، جهاز أو لوحة في مكتب الطبيب، وطابعة: ما تملكه أغلب العيادات. **الانتقال.** أسبوع بالتوازي مع الورق، ثم يتوقف الورق؛ والحافظات القديمة تبقى للاطلاع.",
        "**جاهز أو على المقاس.** توجد برامج طبية، وعيادة فردية بحاجات عادية قد تكتفي بها. والعمل على المقاس يُبرَّر لعيادة جماعية، لاختصاص له قياساته ووثائقه، لعدة مواقع، للعربية والفرنسية، أو لربط بمخبر أو مركز تصوير. **ما لا يفعله البرنامج.** لا يفسّر شيئاً ولا يصف شيئاً: يرتّب، يذكّر، ويطبع. والقرار الطبي يبقى كله للطبيب. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقونه**: مواعيد حسب نوع الزيارة مع تذكيرات؛ الاستقبال وقاعة الانتظار على الشاشة؛ ملف المريض بوثائقه؛ الوصفة والشهادة من نماذجكم؛ الوصولات وإغلاق اليوم؛ حقوق لكل دور؛ ونسخة احتياطية كل ليلة.",
        "**ما تتفاداه العيادة**: الملف الذي لا يُعثر عليه، الوصفة المنسوخة، قاعة الانتظار دون رؤية، نتيجة التحليل المنسية، المداخيل المعدودة في دفتر، وضياع عشرين سنة من الملفات.",
        "**ما يُقاس**: الفحوص لكل يوم ولكل نوع؛ المواعيد الضائعة؛ متوسط الانتظار؛ المدة الفعلية لكل نوع من الزيارة؛ والمداخيل لكل يوم ولكل نوع عمل.",
        "**ما تفعله Symloop**: تأطير الزيارات والنماذج، المواعيد والاستقبال، الملف والفحص، الوصفة، المداخيل، الدخول والنسخ الاحتياطي، واسترجاع المرضى النشطين، بالعربية والفرنسية.",
      ], faq: [
        { q: "أي برنامج لعيادة طبية؟", a: "برنامج يمسك المواعيد، ملف المريض، الوصفة، المداخيل، والدخول، ويشتغل دون إنترنت. ومعيار الاختيار: الوقت الذي يطلبه من الطبيب أثناء الفحص." },
        { q: "كيف تُسيَّر عيادة طبية؟", a: "بفصل ما تمسكه الأمانة، المواعيد، الاستقبال، والوصولات، عما يمسكه الطبيب، الملف والوصفة، وبقياس الفحوص والانتظار والمواعيد الضائعة كل أسبوع." },
        { q: "كيف تُرقمَن ملفات المرضى؟", a: "بالبدء بالمرضى النشطين: الهوية، السوابق، والعلاج المعتاد. والآخرون يدخلون عند زيارتهم القادمة. والحافظات القديمة تبقى للاطلاع ولا تُعاد كتابتها." },
        { q: "هل يجب أن يكتب الطبيب على الحاسوب أثناء الفحص؟", a: "أقل ما يمكن. ملاحظات قصيرة، نماذج لكل سبب زيارة، ووصفة تُركَّب في بضع حركات: البرنامج يُحكم عليه بعدد الثواني المقضية دون النظر إلى المريض." },
        { q: "كيف تُطبع وصفة من البرنامج؟", a: "باختيار الأسطر من العلاج المعتاد للمريض ومن مفضّلتكم، والجرعة مكتوبة مسبقاً. الوصفة تُطبع بترويسة العيادة وتُمضى باليد." },
        { q: "هل ترى الأمانة الملف الطبي؟", a: "لا، إذا ضُبطت الأدوار جيداً: الأمانة ترى المواعيد، الهوية، والوصولات، لا الملاحظات ولا الوصفات. وكل فتح لملف يُسجَّل." },
        { q: "ماذا يحدث إذا انقطعت الإنترنت؟", a: "لا شيء للعيادة، إذا صُمّم البرنامج لذلك: المواعيد، الملفات، والطباعة تستمر في المكان، والتزامن يعود عند عودة الاتصال." },
        { q: "كيف تُحمى الملفات من الضياع؟", a: "بنسخة احتياطية مشفَّرة، كل ليلة، خارج العيادة، وباسترجاع مجرَّب. وقرص واحد في حاسوب واحد ليس نسخة احتياطية." },
        { q: "كيف تُقلَّص المواعيد الضائعة؟", a: "بتذكير في اليوم السابق، وسيلة بسيطة للإلغاء، وقائمة انتظار تملأ الموعد المحرَّر. والبرنامج يعدّ الغيابات، لكل يوم ولكل نوع من الزيارة." },
        { q: "هل يمكن استرجاع الملفات عند تغيير البرنامج؟", a: "يجب ذلك. تصدير الملفات في صيغة مقروءة يُنصّ عليه في العقد، قبل البدء، ويُجرَّب مرة واحدة." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "العيادة لا تحتاج إلى شاشات أكثر: تحتاج إلى أن يكون الملف مفتوحاً قبل أن يجلس المريض." },
      { after: 4, text: "ليست دقائق عمل ناقصة: هي دقائق تُعاد إلى الفحص والإصغاء." },
    ],
    cta: { eyebrow: "قولوا لنا كم طبيباً، كم فحصاً في اليوم، وما تستعملونه اليوم: نبدأ بأسبوع تأطير", title: "ملفات ورقية لا يُعثر عليها، وصفات منسوخة، قاعة انتظار تفيض، مداخيل في دفتر، أو عيادة تحضّرونها من فرنسا", body: "Symloop تبني البرنامج الذي يناسب ممارستكم: المواعيد، ملف المريض، الوصفة، المداخيل، الدخول، والنسخ الاحتياطي. صِفوا لنا أنواع الزيارة عندكم، نماذجكم، وفريقكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reservation, kind: '2027', name: 'الحجز عبر الإنترنت: المواقيت، قائمة الانتظار، والتذكيرات' },
      { href: L.file, kind: '2027', name: 'نظام تسيير الطوابير: التذاكر، النداء، والانتظار المقدَّر' },
      { href: L.roles, kind: '2027', name: 'الأدوار، الحقوق، وسجل التدقيق: من يرى ماذا' },
      { href: L.sauvegarde, kind: '2027', name: 'إذا مات الخادم غداً: النسخ الاحتياطية والاسترجاع المجرَّب' },
    ] },
  },
};

const KEYWORDS = "logiciel de gestion cabinet médical algérie, logiciel gestion cabinet médical algérie 2027, logiciel cabinet médical algérie, logiciel médical algérie, logiciel de gestion de cabinet médical, comment gérer un cabinet médical, comment organiser un cabinet médical, dossier patient informatisé, logiciel ordonnance médecin, agenda médecin rendez-vous, medical practice management software algeria, doctor's practice software, patient file software, printed prescriptions software, برنامج تسيير العيادة الطبية, برنامج عيادة طبية الجزائر, ملف المريض, الوصفة الطبية, مواعيد الطبيب, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
