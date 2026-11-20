import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-une-plateforme-de-formation-en-ligne-algerie-2027-e-learning-paiement-acces-videos-protegees-quiz-certificat-suivi-des-eleves.mjs';

const SLUG = 'comment-creer-une-plateforme-de-formation-en-ligne-algerie-2027-e-learning-paiement-acces-videos-protegees-quiz-certificat-suivi-des-eleves';
const FIGURES = ['etapes', 'modeles', 'debit', 'parcours', 'calendrier', 'couches'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  euros: '/blog/client-en-france-paie-en-euros-service-en-algerie-application-2027-deux-encaissements-deux-devises-taux-fige-rapprochement-remboursement/',
  saas: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/',
  soutien: '/blog/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
};

const CONTENT = {
  fr: {
    kind: 'Formation en ligne · Algérie · 2027', title: "Comment créer une plateforme de formation en ligne en Algérie (2027) : des vidéos envoyées par messagerie qui circulent sans paiement, des reçus vérifiés à la main, des élèves qui abandonnent ; plateforme e-learning, paiement, vidéo protégée, quiz, certificat, et ce qu'on met en place",
    dek: "« Je donne des formations en langues et en bureautique. Mes cours se vendent sur les réseaux sociaux : on me paie par versement, on m'envoie la photo du reçu, et j'envoie les vidéos par messagerie. Elles circulent partout sans que personne paie, je passe mes soirées à vérifier des reçus, et je ne sais pas qui a regardé quoi. Comment créer une plateforme de formation en ligne ? » Une plateforme de formation ne sert pas à déposer des vidéos : elle encaisse, ouvre l'accès, diffuse sans laisser partir le fichier, et montre qui va au bout.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Plateforme de formation en ligne', 'E-learning', 'Paiement et ouverture d’accès', 'Vidéo en flux protégé', 'Quiz, certificat et suivi des abandons', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une plateforme de formation en ligne tient quatre choses. **Le paiement et l'accès** : carte en ligne ou reçu de versement vérifié, et l'accès s'ouvre seul. **La vidéo en flux** : encodée en plusieurs qualités, lue par un lien signé qui expire, marquée au nom de l'élève ; elle ne part pas comme un fichier. **Le parcours** : leçons courtes, quiz, devoirs, certificat vérifiable. **Le suivi** : qui a payé, qui a commencé, à quelle leçon on s'arrête. Dans l'exemple de cette page, sur 1 000 inscrits, 190 terminent le cours, et 150 s'arrêtent à la même leçon.",
      "Cette page s'adresse aux formatrices et aux formateurs, aux centres de formation, aux écoles de langues, aux entreprises qui forment leurs équipes, et aux fondateurs de la diaspora qui lancent une plateforme de cours en Algérie. Les définitions viennent de sources publiques : système de gestion de l'apprentissage, diffusion à débit adaptatif, filigrane numérique, gestion des droits numériques, micro-apprentissage, cours en ligne ouvert. La leçon de douze minutes, la connexion, le cours de vingt leçons et ses 1 000 inscrits sont un exemple construit. La page ne traite ni de l'agrément des organismes de formation et de la reconnaissance des diplômes, ni de la fiscalité, ni du droit d'auteur, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "De l'inscription au certificat, en six temps", body: [
        "La figure suit un élève, de son inscription à son certificat.",
      ], visual: 'etapes', after: [
        "**Le système.** Un système de gestion de l'apprentissage est un logiciel d'administration, de suivi et de compte rendu des formations : il diffuse les contenus, vidéos, cours et documents, permet de créer des évaluations passées en ligne, et rend compte de chiffres comme les taux d'achèvement. **L'inscription.** Un compte par numéro de téléphone, confirmé par un code, voir [la connexion par code](" + L.otp + ") : pas de mot de passe à retrouver, et un compte moins facile à prêter. **Le paiement.** C'est le temps accentué. Par carte en ligne, l'accès s'ouvre dans la minute, voir [le paiement en ligne](" + L.paiement + ").",
        "**Le reçu de versement.** Beaucoup d'élèves paieront encore par versement : la photo du reçu arrive dans une file, une personne la valide en un geste, et l'accès s'ouvre ; le montant, la date et l'élève restent liés. **Depuis l'étranger.** Les élèves de la diaspora paient en euros, voir [le client qui paie en euros](" + L.euros + "). **Les leçons.** La lecture reprend là où elle s'était arrêtée, sur téléphone comme sur ordinateur. **Le certificat.** Nominatif, avec un lien qui permet à un employeur de le vérifier.",
      ] },
      { heading: "Cinq façons de vendre un cours", body: [
        "La figure donne cinq modèles, et ce que chacun demande à la plateforme.",
      ], visual: 'modeles', after: [
        "**À l'unité.** Un cours, un prix, un accès limité dans le temps ou à vie : le modèle le plus simple à lancer. **L'abonnement.** Tout le catalogue tant que l'on paie : il faut gérer le renouvellement, la coupure et la reprise, voir [lancer un service par abonnement](" + L.saas + "). **Le direct.** Des séances à heure fixe, enregistrées et revues ensuite ; pour des cours particuliers avec un professeur, le modèle est celui de [la plateforme de soutien scolaire](" + L.soutien + ").",
        "**L'entreprise.** L'employeur achète des places ; l'entreprise veut un compte par personne, la progression de chacune et un rapport. **L'examen.** Une saison courte, un pic de connexions la veille de l'épreuve, des sujets corrigés. **Ce que cela change.** Le modèle décide des écrans, des paiements et de la charge à tenir : il se choisit au cadrage, pas après le développement. **Les extraits gratuits.** Une ou deux leçons ouvertes à tous : c'est la meilleure page de vente d'un cours.",
      ] },
      { heading: "La vidéo : un flux, pas un fichier", body: [
        "La figure suit la connexion d'un élève pendant une leçon de douze minutes.",
      ], visual: 'debit', after: [
        "**Le débit adaptatif.** C'est une technique de diffusion en continu : la source est encodée à plusieurs débits, chaque version est découpée en segments de quelques secondes, et le lecteur passe de l'une à l'autre selon les ressources disponibles. Il en résulte très peu d'attente et un démarrage plus rapide. **Dans l'exemple.** La leçon existe en quatre qualités, de 240p à 720p. La connexion de l'élève varie de 0,5 à 3,2 mégabits par seconde. Un fichier unique en 720p pèse 225 Mo et s'arrête 8 minutes sur 12. Le flux adaptatif ne s'arrête pas et consomme 91 Mo.",
        "**Ce que cela change pour l'élève.** La leçon va jusqu'au bout, et le forfait dure deux fois et demie plus longtemps. **Ce que cela change pour vous.** La vidéo n'est plus un fichier envoyé par messagerie : le lien de lecture est signé, il expire, et il est lié au compte. **Le filigrane.** Un filigrane numérique est une marque intégrée au signal ; l'un de ses usages est de remonter à la source d'une copie. Le nom ou le numéro de l'élève s'affiche sur l'image : une capture qui circule dit de quel compte elle vient. **La limite.** Aucune protection n'empêche de filmer un écran ; la gestion des droits numériques encadre l'accès, elle ne rend pas la copie impossible. L'objectif est que payer reste plus simple que contourner. **Sans réseau.** Dans l'application mobile, une leçon peut être gardée pour être vue hors connexion, chiffrée et liée au compte, voir [l'application hors ligne](" + L.horsligne + ").",
      ] },
      { heading: "Qui va au bout, et où les autres s'arrêtent", body: [
        "La figure suit 1 000 inscrits sur un cours de vingt leçons.",
      ], visual: 'parcours', after: [
        "**Le constat.** Les taux d'achèvement des cours en ligne ouverts à tous sont régulièrement très bas ; pour un cours payant, seule la mesure le dit. **Dans l'exemple.** Sur 1 000 inscrits, 780 terminent la première leçon : 220 n'ouvrent jamais le cours. Ensuite la courbe descend, leçon après leçon, jusqu'à 190 à la vingtième, soit 19 %. Une marche est plus haute que les autres : 150 élèves s'arrêtent à la leçon 6, la seule qui dure 48 minutes quand les autres en durent de 8 à 12.",
        "**Ce que l'on corrige.** La leçon 6 se découpe en quatre : les modules de micro-apprentissage sont en général conçus pour durer moins de vingt minutes, avec un seul objectif. **Ceux qui n'ont pas commencé.** Un message le lendemain de l'achat, puis au bout d'une semaine, par le canal qui arrive, voir [les notifications](" + L.notifications + "). **Ceux qui se sont arrêtés.** Une relance après dix jours sans connexion, avec le lien de la leçon suivante. **Ce que l'on mesure.** Inscrits, payants, élèves actifs sur sept jours, leçon médiane atteinte, taux d'achèvement, résultats aux quiz, par cours et par période, sur [un tableau de bord](" + L.dashboard + ").",
      ] },
      { heading: "Dix semaines, avec un cours pilote", body: [
        "Dix semaines dans l'exemple, en ouvrant d'abord un seul cours.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos cours, vos prix, vos modes de paiement, le modèle de vente, et ce que vous envoyez aujourd'hui par messagerie. **Les contenus.** Vos vidéos existantes sont reprises et encodées en plusieurs qualités ; les leçons trop longues se découpent à ce moment-là. **Le paiement.** L'ouverture du paiement par carte demande des démarches qui prennent du temps : elles se lancent dès la première semaine.",
        "**Le cours pilote.** Un cours, une centaine d'élèves, deux semaines : on corrige le parcours d'achat et la lecture vidéo avant d'ouvrir le catalogue. **La charge.** Une plateforme d'examen reçoit tout le monde le même soir : la tenue en charge se teste avant, pas ce soir-là. **Ce que la plateforme ne fait pas.** Elle ne fabrique pas un bon cours et ne délivre pas un diplôme reconnu : elle vend, diffuse, mesure et atteste ce qui a été suivi. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Ce qu'il y a dans une plateforme de formation", body: [
        "La figure empile cinq couches ; la deuxième décide si la plateforme vend sans vous.",
      ], visual: 'couches', after: [
        "**La vitrine.** Une page par cours, des extraits gratuits, le prix, l'inscription. **Le paiement et l'accès.** C'est la couche accentuée : tant qu'une personne doit ouvrir chaque accès à la main, la plateforme ne vend pas la nuit. **La vidéo.** Plusieurs qualités, un flux adaptatif, des liens signés, un filigrane, un nombre d'appareils limité par compte.",
        "**Le parcours et le pilotage.** Leçons, quiz, devoirs, certificat ; ventes, élèves actifs, leçon où l'on décroche. **Prêt à l'emploi ou sur mesure.** Des plateformes de cours prêtes à l'emploi et des logiciels libres existent, et suffisent pour tester un premier cours. Le sur-mesure se justifie quand il faut encaisser avec les moyens de paiement d'ici et valider des reçus, protéger des vidéos que l'on vend, proposer une application mobile à votre nom, relier des entreprises clientes, ou tenir un pic d'examen.",
      ], list: [
        "**Ce que vous recevez** : les pages de cours et l'inscription par téléphone ; le paiement par carte et la file de reçus ; l'ouverture d'accès automatique ; la vidéo en flux protégé ; les quiz, les devoirs et le certificat vérifiable ; le suivi des abandons ; une application mobile si vous la voulez.",
        "**Ce que vous évitez** : les vidéos qui circulent par messagerie, les soirées à vérifier des reçus, l'accès ouvert à la main, la leçon qui s'arrête en pleine lecture, le cours que personne ne termine sans que vous le sachiez.",
        "**Ce qui est mesuré** : inscrits et payants ; délai d'ouverture d'accès ; élèves actifs ; leçon médiane atteinte ; taux d'achèvement ; résultats aux quiz ; ventes par cours et par période.",
        "**Ce que fait Symloop** : le cadrage du modèle de vente, la plateforme web et l'application mobile, le paiement et la file de reçus, la diffusion vidéo protégée, le parcours et le certificat, le tableau de bord, en arabe et en français.",
      ], faq: [
        { q: "Comment créer une plateforme de formation en ligne ?", a: "En réglant quatre choses dans l'ordre : le modèle de vente, le paiement qui ouvre l'accès tout seul, la vidéo diffusée en flux protégé, et le parcours avec quiz et certificat. Un cours pilote précède l'ouverture du catalogue." },
        { q: "Comment vendre des cours en ligne en Algérie ?", a: "Par carte en ligne quand l'élève en a une, et par versement avec un reçu vérifié dans une file pour les autres. Dans les deux cas, l'accès s'ouvre sans échange de messages." },
        { q: "Comment empêcher que mes vidéos circulent ?", a: "En ne les envoyant plus comme des fichiers : lecture en flux, lien signé qui expire, filigrane au nom de l'élève, nombre d'appareils limité. Cela ne rend pas la copie impossible, cela la rend traçable et moins simple que payer." },
        { q: "Pourquoi la vidéo s'arrête-t-elle chez mes élèves ?", a: "Parce qu'un fichier unique demande un débit constant. Un flux adaptatif encode la leçon en plusieurs qualités et baisse la qualité quand la connexion faiblit, sans s'arrêter." },
        { q: "Combien de données consomme une leçon ?", a: "Cela dépend de la qualité lue. Dans l'exemple, une leçon de douze minutes consomme 91 Mo en flux adaptatif, contre 225 Mo pour un fichier en 720p." },
        { q: "Faut-il une application mobile ?", a: "Pas pour commencer : un site adapté au téléphone suffit pour un premier cours. L'application apporte les leçons gardées hors connexion et les notifications." },
        { q: "Peut-on utiliser une plateforme existante ?", a: "Oui pour tester : des plateformes prêtes à l'emploi et des logiciels libres existent. Le sur-mesure se justifie pour les paiements d'ici, la protection des vidéos, une application à votre nom ou des clients entreprises." },
        { q: "Comment savoir si mes élèves terminent le cours ?", a: "Chaque leçon terminée est enregistrée. La courbe montre combien commencent, combien finissent, et à quelle leçon le plus grand nombre s'arrête." },
        { q: "Le certificat a-t-il une valeur ?", a: "Il atteste que le cours a été suivi et les évaluations réussies, et un lien permet de le vérifier. Sa reconnaissance officielle dépend de votre statut, pas de la plateforme." },
        { q: "La plateforme tient-elle la veille d'un examen ?", a: "Si elle a été prévue pour : la vidéo est servie depuis un réseau de diffusion, et un essai de charge se fait avant la saison." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "La vidéo ne s'arrête plus : elle baisse en qualité et continue." },
      { after: 3, text: "Sur 1 000 inscrits, 190 terminent. Ce chiffre ne se devine pas : il se mesure, leçon par leçon." },
    ],
    cta: { eyebrow: "Dites-nous ce que vous enseignez, combien d'élèves vous avez, et comment ils vous paient aujourd'hui : nous commençons par une semaine de cadrage", title: "Vidéos qui circulent sans paiement, reçus vérifiés à la main, leçons qui s'arrêtent, élèves qui abandonnent, ou plateforme de cours que vous lancez en Algérie depuis la France", body: "Symloop construit la plateforme qui correspond à vos cours : inscription, paiement, accès automatique, vidéo protégée, quiz, certificat, suivi. Décrivez-nous vos cours, vos élèves et vos modes de paiement actuels." },
    related: { label: 'À lire aussi', items: [
      { href: L.paiement, kind: '2027', name: 'Intégrer le paiement en ligne : CIB, Edahabia, confirmation, rapprochement' },
      { href: L.otp, kind: '2027', name: 'La connexion par code : SMS, WhatsApp, coût par envoi, fraude' },
      { href: L.soutien, kind: '2027', name: 'Créer une plateforme de cours de soutien : professeur vérifié, séance suivie' },
      { href: L.saas, kind: '2027', name: 'Lancer un service par abonnement : paiement, calendrier' },
    ] },
  },
  en: {
    kind: 'Online training · Algeria · 2027', title: "How to create an online training platform in Algeria (2027): videos sent by messaging that circulate unpaid, receipts checked by hand, learners who drop out; e-learning platform, payment, protected video, quizzes, certificate, and what we put in place",
    dek: "“I teach languages and office software. My courses sell on social networks: people pay me by bank transfer, send me a photo of the receipt, and I send the videos by messaging. They circulate everywhere without anyone paying, I spend my evenings checking receipts, and I do not know who watched what. How do I create an online training platform?” A training platform is not a place to drop videos: it takes payment, opens access, streams without letting the file go, and shows who reaches the end.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Online training platform', 'E-learning', 'Payment and access', 'Protected video stream', 'Quizzes, certificate and drop-off tracking', 'Algeria 2027'],
    intro: [
      "**Short answer.** An online training platform holds four things. **Payment and access**: card online or a verified transfer receipt, and access opens by itself. **Streamed video**: encoded in several qualities, played through a signed link that expires, marked with the learner's name; it does not leave as a file. **The path**: short lessons, quizzes, assignments, a verifiable certificate. **Tracking**: who paid, who started, at which lesson people stop. In this page's example, of 1,000 enrolled, 190 finish the course, and 150 stop at the same lesson.",
      "This page is for trainers, training centres, language schools, companies that train their teams, and diaspora founders launching a course platform in Algeria. The definitions come from public sources: learning management system, adaptive bitrate streaming, digital watermark, digital rights management, microlearning, massive open online course. The twelve-minute lesson, the connection, the course of twenty lessons and its 1,000 enrolled learners are a constructed example. The page covers neither the approval of training bodies and the recognition of diplomas, nor tax, nor copyright, and quotes no hardware price.",
    ],
    sections: [
      { heading: "From enrolment to certificate, in six steps", body: [
        "The figure follows a learner, from enrolment to certificate.",
      ], visual: 'etapes', after: [
        "**The system.** A learning management system is a software application for the administration, tracking and reporting of training: it delivers content, videos, courses and documents, lets you create assessments taken online, and reports on figures such as completion rates. **Enrolment.** One account per phone number, confirmed by a code, see [sign-in by code](" + L.otp + "): no password to recover, and an account that is harder to lend. **Payment.** That is the accented step. By card online, access opens within the minute, see [online payment](" + L.paiement + ").",
        "**The transfer receipt.** Many learners will still pay by transfer: the photo of the receipt arrives in a queue, one person approves it in one action, and access opens; the amount, the date and the learner stay linked. **From abroad.** Diaspora learners pay in euros, see [the customer who pays in euros](" + L.euros + "). **Lessons.** Playback resumes where it stopped, on a phone as on a computer. **The certificate.** In the learner's name, with a link that lets an employer check it.",
      ] },
      { heading: "Five ways of selling a course", body: [
        "The figure gives five models, and what each asks of the platform.",
      ], visual: 'modeles', after: [
        "**Sold singly.** One course, one price, access limited in time or for life: the simplest model to launch. **Subscription.** The whole catalogue for as long as the learner pays: renewal, cutting off and restoring access have to be handled, see [launching a subscription service](" + L.saas + "). **Live.** Sessions at a fixed time, recorded and watched again later; for one-to-one lessons with a teacher, the model is that of [the tutoring platform](" + L.soutien + ").",
        "**Companies.** The employer buys seats; the company wants one account per person, each person's progress and a report. **Exams.** A short season, a peak of connections the evening before the exam, corrected papers. **What that changes.** The model decides the screens, the payments and the load to carry: it is chosen at scoping, not after development. **Free extracts.** One or two lessons open to everyone: that is a course's best sales page.",
      ] },
      { heading: "Video: a stream, not a file", body: [
        "The figure follows a learner's connection during a twelve-minute lesson.",
      ], visual: 'debit', after: [
        "**Adaptive bitrate.** It is a streaming technique: the source is encoded at multiple bit rates, each version is cut into segments of a few seconds, and the player switches between them depending on available resources. The result is very little buffering and a faster start. **In the example.** The lesson exists in four qualities, from 240p to 720p. The learner's connection varies from 0.5 to 3.2 megabits per second. A single 720p file weighs 225 MB and stops for 8 minutes of 12. The adaptive stream does not stop and uses 91 MB.",
        "**What that changes for the learner.** The lesson runs to the end, and the data allowance lasts two and a half times longer. **What that changes for you.** The video is no longer a file sent by messaging: the playback link is signed, it expires, and it is tied to the account. **The watermark.** A digital watermark is a marker embedded in the signal; one of its uses is to trace the source of a copy. The learner's name or number is shown on the picture: a screenshot that circulates says which account it came from. **The limit.** No protection stops someone filming a screen; digital rights management governs access, it does not make copying impossible. The aim is for paying to stay simpler than getting round it. **Without a network.** In the mobile application, a lesson can be kept to be watched offline, encrypted and tied to the account, see [the offline application](" + L.horsligne + ").",
      ] },
      { heading: "Who reaches the end, and where the others stop", body: [
        "The figure follows 1,000 enrolled learners through a course of twenty lessons.",
      ], visual: 'parcours', after: [
        "**The finding.** Completion rates of online courses open to everyone are consistently very low; for a paid course, only measurement tells you. **In the example.** Of 1,000 enrolled, 780 finish the first lesson: 220 never open the course. Then the curve goes down, lesson after lesson, to 190 at the twentieth, that is 19%. One step is higher than the others: 150 learners stop at lesson 6, the only one that lasts 48 minutes when the others last 8 to 12.",
        "**What gets corrected.** Lesson 6 is cut into four: microlearning modules are usually designed to last less than twenty minutes, with a single objective. **Those who have not started.** A message the day after the purchase, then after a week, through the channel that arrives, see [notifications](" + L.notifications + "). **Those who stopped.** A reminder after ten days without a connection, with the link to the next lesson. **What is measured.** Enrolled, paying, learners active over seven days, median lesson reached, completion rate, quiz results, per course and per period, on [a dashboard](" + L.dashboard + ").",
      ] },
      { heading: "Ten weeks, with a pilot course", body: [
        "Ten weeks in the example, opening a single course first.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your courses, your prices, your payment methods, the sales model, and what you send by messaging today. **Content.** Your existing videos are taken over and encoded in several qualities; lessons that are too long are cut at that point. **Payment.** Opening card payment involves formalities that take time: they start in the first week.",
        "**The pilot course.** One course, about a hundred learners, two weeks: the purchase path and video playback are corrected before the catalogue opens. **Load.** An exam platform receives everybody the same evening: load handling is tested beforehand, not that evening. **What the platform does not do.** It does not make a good course and does not award a recognised diploma: it sells, streams, measures and certifies what was followed. **The durations** are those of a constructed example.",
      ] },
      { heading: "What is inside a training platform", body: [
        "The figure stacks five layers; the second decides whether the platform sells without you.",
      ], visual: 'couches', after: [
        "**The shop window.** A page per course, free extracts, the price, enrolment. **Payment and access.** That is the accented layer: as long as a person has to open each access by hand, the platform does not sell at night. **Video.** Several qualities, an adaptive stream, signed links, a watermark, a limited number of devices per account.",
        "**The path and steering.** Lessons, quizzes, assignments, certificate; sales, active learners, the lesson where people drop off. **Ready-made or custom.** Ready-made course platforms and open-source software exist, and are enough to test a first course. Custom work is justified when you need to collect with local payment methods and approve receipts, protect videos you sell, offer a mobile application under your name, connect corporate customers, or carry an exam peak.",
      ], list: [
        "**What you receive**: course pages and enrolment by phone; card payment and the receipt queue; automatic opening of access; protected video streaming; quizzes, assignments and a verifiable certificate; drop-off tracking; a mobile application if you want one.",
        "**What you avoid**: videos circulating by messaging, evenings spent checking receipts, access opened by hand, the lesson that stops mid-playback, the course nobody finishes without your knowing.",
        "**What is measured**: enrolled and paying; time to open access; active learners; median lesson reached; completion rate; quiz results; sales per course and per period.",
        "**What Symloop does**: scoping the sales model, the web platform and the mobile application, payment and the receipt queue, protected video delivery, the path and the certificate, the dashboard, in Arabic and in French.",
      ], faq: [
        { q: "How do you create an online training platform?", a: "By settling four things in order: the sales model, payment that opens access by itself, video delivered as a protected stream, and the path with quizzes and a certificate. A pilot course comes before the catalogue opens." },
        { q: "How do you sell courses online in Algeria?", a: "By card online when the learner has one, and by transfer with a receipt verified in a queue for the others. In both cases, access opens without an exchange of messages." },
        { q: "How do I stop my videos circulating?", a: "By no longer sending them as files: streamed playback, a signed link that expires, a watermark in the learner's name, a limited number of devices. That does not make copying impossible; it makes it traceable and less simple than paying." },
        { q: "Why does the video stop for my learners?", a: "Because a single file needs a constant bit rate. An adaptive stream encodes the lesson in several qualities and lowers the quality when the connection weakens, without stopping." },
        { q: "How much data does a lesson use?", a: "It depends on the quality played. In the example, a twelve-minute lesson uses 91 MB as an adaptive stream, against 225 MB for a 720p file." },
        { q: "Is a mobile application needed?", a: "Not to begin with: a website that works well on a phone is enough for a first course. The application adds lessons kept offline and notifications." },
        { q: "Can an existing platform be used?", a: "Yes, to test: ready-made platforms and open-source software exist. Custom work is justified for local payments, protecting videos, an application under your name or corporate customers." },
        { q: "How do I know whether my learners finish the course?", a: "Each finished lesson is recorded. The curve shows how many start, how many finish, and at which lesson the largest number stop." },
        { q: "Does the certificate have any value?", a: "It certifies that the course was followed and the assessments passed, and a link lets anyone check it. Its official recognition depends on your status, not on the platform." },
        { q: "Does the platform hold up the evening before an exam?", a: "If it was planned for: video is served from a delivery network, and a load test is run before the season." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "The video no longer stops: it drops in quality and carries on." },
      { after: 3, text: "Of 1,000 enrolled, 190 finish. That figure cannot be guessed: it is measured, lesson by lesson." },
    ],
    cta: { eyebrow: "Tell us what you teach, how many learners you have, and how they pay you today: we start with a week of scoping", title: "Videos circulating unpaid, receipts checked by hand, lessons that stop, learners who drop out, or a course platform you are launching in Algeria from France", body: "Symloop builds the platform that fits your courses: enrolment, payment, automatic access, protected video, quizzes, certificate, tracking. Describe your courses to us, your learners and your current payment methods." },
    related: { label: 'Also read', items: [
      { href: L.paiement, kind: '2027', name: 'Integrating online payment: CIB, Edahabia, confirmation, reconciliation' },
      { href: L.otp, kind: '2027', name: 'Sign-in by code: SMS, WhatsApp, cost per message, fraud' },
      { href: L.soutien, kind: '2027', name: 'Creating a tutoring platform: verified teacher, tracked session' },
      { href: L.saas, kind: '2027', name: 'Launching a subscription service: payment, calendar' },
    ] },
  },
  ar: {
    kind: 'التكوين عبر الإنترنت · الجزائر · 2027', title: "كيف تُنشأ منصة تعليمية في الجزائر (2027): فيديوهات تُرسَل عبر المراسلة وتنتشر دون دفع، وصولات تُتحقَّق باليد، ومتعلّمون ينسحبون؛ منصة تكوين عبر الإنترنت، الدفع، الفيديو المحمي، الاختبارات، الشهادة، وما نضعه",
    dek: "«أقدّم دورات في اللغات والمكتبية. دوراتي تُباع على شبكات التواصل: يدفعون لي بالتحويل، يرسلون صورة الوصل، وأرسل الفيديوهات عبر المراسلة. فتنتشر في كل مكان دون أن يدفع أحد، وأقضي سهراتي في التحقق من الوصولات، ولا أعرف من شاهد ماذا. كيف أنشئ منصة تعليمية؟» المنصة التعليمية ليست مكاناً لوضع الفيديوهات: تحصّل الدفع، تفتح الدخول، تبث دون أن تترك الملف يخرج، وتُظهر من يصل إلى النهاية.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['منصة تعليمية', 'التكوين عبر الإنترنت', 'الدفع وفتح الدخول', 'فيديو ببث محمي', 'الاختبارات، الشهادة، ومتابعة الانسحاب', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** المنصة التعليمية تمسك أربعة أشياء. **الدفع والدخول**: بطاقة عبر الإنترنت أو وصل دفع متحقَّق منه، والدخول يُفتح وحده. **الفيديو بالبث**: مرمَّز بعدة جودات، يُشغَّل برابط موقَّع ينتهي، ومعلَّم باسم المتعلّم؛ ولا يخرج كملف. **المسار**: دروس قصيرة، اختبارات، واجبات، وشهادة يُتحقق منها. و**المتابعة**: من دفع، من بدأ، وعند أي درس يتوقفون. في مثال هذه الصفحة، من " + I('1 000') + " مسجَّل، 190 ينهون الدورة، و150 يتوقفون عند الدرس نفسه.",
      "هذه الصفحة موجّهة إلى المكوِّنات والمكوِّنين، مراكز التكوين، مدارس اللغات، المؤسسات التي تكوّن فرقها، ومؤسسي الجالية الذين يطلقون منصة دورات في الجزائر. التعريفات من مصادر عمومية: نظام تسيير التعلّم، البث بمعدل متكيّف، العلامة المائية الرقمية، تسيير الحقوق الرقمية، التعلّم المصغَّر، والدورة المفتوحة عبر الإنترنت. والدرس من اثنتي عشرة دقيقة، الاتصال، الدورة من عشرين درساً ومسجَّلوها الألف مثال مركَّب. والصفحة لا تتناول اعتماد هيئات التكوين والاعتراف بالشهادات، ولا الجباية، ولا حقوق المؤلف، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "من التسجيل إلى الشهادة، في ست مراحل", body: [
        "الشكل يتابع متعلّماً، من تسجيله إلى شهادته.",
      ], visual: 'etapes', after: [
        "**النظام.** نظام تسيير التعلّم برنامج لإدارة التكوينات، متابعتها، وإعداد تقاريرها: يبث المحتويات، فيديوهات ودورات ووثائق، يسمح بإنشاء تقييمات تُجتاز عبر الإنترنت، ويعطي أرقاماً مثل نسب الإتمام. **التسجيل.** حساب لكل رقم هاتف، يُؤكَّد برمز، انظر [الدخول بالرمز](" + L.otp + "): لا كلمة سر تُسترجَع، وحساب أقل سهولة للإعارة. **الدفع.** هو المرحلة المبرزة. ببطاقة عبر الإنترنت، يُفتح الدخول في الدقيقة نفسها، انظر [الدفع عبر الإنترنت](" + L.paiement + ").",
        "**وصل الدفع.** كثير من المتعلّمين سيدفعون بالتحويل بعد: صورة الوصل تصل إلى طابور، شخص يصادق عليها بحركة واحدة، والدخول يُفتح؛ والمبلغ والتاريخ والمتعلّم تبقى مربوطة. **من الخارج.** متعلّمو الجالية يدفعون بالأورو، انظر [الزبون الذي يدفع بالأورو](" + L.euros + "). **الدروس.** التشغيل يتواصل من حيث توقف، على الهاتف كما على الحاسوب. **الشهادة.** اسمية، برابط يسمح لمستخدِم بالتحقق منها.",
      ] },
      { heading: "خمس طرق لبيع دورة", body: [
        "الشكل يعطي خمسة نماذج، وما يطلبه كل واحد من المنصة.",
      ], visual: 'modeles', after: [
        "**منفردة.** دورة واحدة، سعر واحد، ودخول محدود في الزمن أو دائم: أبسط نموذج للانطلاق. **الاشتراك.** كل الكتالوغ ما دام المتعلّم يدفع: يجب تسيير التجديد، قطع الدخول، وإعادته، انظر [إطلاق خدمة بالاشتراك](" + L.saas + "). **المباشر.** حصص في ساعة محدّدة، تُسجَّل وتُشاهَد بعد ذلك؛ وللدروس الخصوصية مع أستاذ، النموذج هو نموذج [منصة دروس الدعم](" + L.soutien + ").",
        "**المؤسسة.** المستخدِم يشتري مقاعد؛ والمؤسسة تريد حساباً لكل شخص، تقدّم كل واحد، وتقريراً. **الامتحان.** موسم قصير، ذروة اتصالات ليلة الامتحان، ومواضيع مصحَّحة. **ما يغيّره ذلك.** النموذج يقرّر الشاشات، الدفع، والضغط الذي يجب تحمّله: يُختار عند التأطير، لا بعد التطوير. **المقتطفات المجانية.** درس أو درسان مفتوحان للجميع: هي أفضل صفحة بيع للدورة.",
      ] },
      { heading: "الفيديو: بث، لا ملف", body: [
        "الشكل يتابع اتصال متعلّم خلال درس من اثنتي عشرة دقيقة.",
      ], visual: 'debit', after: [
        "**المعدل المتكيّف.** تقنية للبث المتواصل: المصدر يُرمَّز بعدة معدلات، كل نسخة تُقطَّع إلى أجزاء من بضع ثوانٍ، والمشغّل ينتقل من واحدة إلى أخرى حسب الموارد المتاحة. والنتيجة انتظار قليل جداً وانطلاق أسرع. **في المثال.** الدرس موجود بأربع جودات، من " + I('240p') + " إلى " + I('720p') + ". واتصال المتعلّم يتغيّر من " + I('0,5') + " إلى " + I('3,2') + " ميغابت في الثانية. ملف واحد بجودة " + I('720p') + " يزن 225 ميغابايت ويتوقف 8 دقائق من 12. والبث المتكيّف لا يتوقف ويستهلك 91 ميغابايت.",
        "**ما يغيّره ذلك للمتعلّم.** الدرس يصل إلى نهايته، ورصيد الإنترنت يدوم مرتين ونصفاً أكثر. **ما يغيّره ذلك لكم.** الفيديو لم يعد ملفاً يُرسَل عبر المراسلة: رابط التشغيل موقَّع، ينتهي، ومربوط بالحساب. **العلامة المائية.** العلامة المائية الرقمية علامة مدمجة في الإشارة؛ ومن استعمالاتها تتبّع مصدر نسخة. اسم المتعلّم أو رقمه يظهر على الصورة: لقطة شاشة تنتشر تقول من أي حساب جاءت. **الحد.** لا حماية تمنع تصوير شاشة؛ وتسيير الحقوق الرقمية ينظّم الدخول، ولا يجعل النسخ مستحيلاً. والهدف أن يبقى الدفع أبسط من التحايل. **دون شبكة.** في تطبيق الهاتف، يمكن حفظ درس لمشاهدته دون اتصال، مشفَّراً ومربوطاً بالحساب، انظر [التطبيق دون اتصال](" + L.horsligne + ").",
      ] },
      { heading: "من يصل إلى النهاية، وأين يتوقف الآخرون", body: [
        "الشكل يتابع ألف مسجَّل في دورة من عشرين درساً.",
      ], visual: 'parcours', after: [
        "**المعاينة.** نسب إتمام الدورات المفتوحة للجميع عبر الإنترنت منخفضة جداً بانتظام؛ وللدورة المدفوعة، القياس وحده يقول. **في المثال.** من " + I('1 000') + " مسجَّل، 780 ينهون الدرس الأول: 220 لا يفتحون الدورة أبداً. ثم ينزل المنحنى، درساً بعد درس، إلى 190 عند العشرين، أي 19 بالمئة. ودرجة واحدة أعلى من البقية: 150 متعلّماً يتوقفون عند الدرس 6، الوحيد الذي يدوم 48 دقيقة بينما تدوم البقية من 8 إلى 12.",
        "**ما يُصحَّح.** الدرس 6 يُقسَّم إلى أربعة: وحدات التعلّم المصغَّر تُصمَّم في العادة لتدوم أقل من عشرين دقيقة، بهدف واحد. **من لم يبدؤوا.** رسالة في اليوم التالي للشراء، ثم بعد أسبوع، بالقناة التي تصل، انظر [الإشعارات](" + L.notifications + "). **من توقفوا.** تذكير بعد عشرة أيام دون اتصال، مع رابط الدرس التالي. **ما يُقاس.** المسجَّلون، الدافعون، النشطون على سبعة أيام، الدرس الوسيط المبلوغ، نسبة الإتمام، ونتائج الاختبارات، لكل دورة ولكل فترة، على [لوحة قيادة](" + L.dashboard + ").",
      ] },
      { heading: "عشرة أسابيع، مع دورة تجريبية", body: [
        "عشرة أسابيع في المثال، بفتح دورة واحدة أولاً.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: دوراتكم، أسعاركم، طرق الدفع عندكم، نموذج البيع، وما ترسلونه اليوم عبر المراسلة. **المحتويات.** فيديوهاتكم الموجودة تُؤخذ وتُرمَّز بعدة جودات؛ والدروس الطويلة جداً تُقسَّم في هذا الوقت. **الدفع.** فتح الدفع بالبطاقة يتطلب إجراءات تأخذ وقتاً: تنطلق منذ الأسبوع الأول.",
        "**الدورة التجريبية.** دورة واحدة، نحو مئة متعلّم، أسبوعان: يُصحَّح مسار الشراء وتشغيل الفيديو قبل فتح الكتالوغ. **الضغط.** منصة الامتحان تستقبل الجميع في السهرة نفسها: تحمّل الضغط يُجرَّب من قبل، لا في تلك السهرة. **ما لا تفعله المنصة.** لا تصنع دورة جيدة ولا تمنح شهادة معترفاً بها: تبيع، تبث، تقيس، وتشهد بما تمت متابعته. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "ما يوجد في منصة تعليمية", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية تقرّر هل تبيع المنصة دونكم.",
      ], visual: 'couches', after: [
        "**الواجهة.** صفحة لكل دورة، مقتطفات مجانية، السعر، والتسجيل. **الدفع والدخول.** هي الطبقة المبرزة: ما دام شخص يفتح كل دخول باليد، المنصة لا تبيع في الليل. **الفيديو.** عدة جودات، بث متكيّف، روابط موقَّعة، علامة مائية، وعدد محدود من الأجهزة لكل حساب.",
        "**المسار والقيادة.** الدروس، الاختبارات، الواجبات، والشهادة؛ المبيعات، المتعلّمون النشطون، والدرس الذي يُنسحَب عنده. **جاهز أو على المقاس.** توجد منصات دورات جاهزة وبرامج حرة، وتكفي لتجربة دورة أولى. والعمل على المقاس يُبرَّر حين يلزم التحصيل بوسائل الدفع المحلية والمصادقة على الوصولات، حماية فيديوهات تُباع، تطبيق هاتف باسمكم، ربط مؤسسات زبونة، أو تحمّل ذروة امتحان.",
      ], list: [
        "**ما تتلقونه**: صفحات الدورات والتسجيل بالهاتف؛ الدفع بالبطاقة وطابور الوصولات؛ فتح الدخول تلقائياً؛ الفيديو ببث محمي؛ الاختبارات، الواجبات، والشهادة التي يُتحقق منها؛ متابعة الانسحاب؛ وتطبيق هاتف إذا أردتموه.",
        "**ما تتفادونه**: الفيديوهات التي تنتشر عبر المراسلة، السهرات في التحقق من الوصولات، الدخول الذي يُفتح باليد، الدرس الذي يتوقف وسط التشغيل، والدورة التي لا ينهيها أحد دون علمكم.",
        "**ما يُقاس**: المسجَّلون والدافعون؛ مهلة فتح الدخول؛ المتعلّمون النشطون؛ الدرس الوسيط المبلوغ؛ نسبة الإتمام؛ نتائج الاختبارات؛ والمبيعات لكل دورة ولكل فترة.",
        "**ما تفعله Symloop**: تأطير نموذج البيع، المنصة على الويب وتطبيق الهاتف، الدفع وطابور الوصولات، بث الفيديو المحمي، المسار والشهادة، ولوحة القيادة، بالعربية والفرنسية.",
      ], faq: [
        { q: "كيف تُنشأ منصة تعليمية؟", a: "بضبط أربعة أشياء بالترتيب: نموذج البيع، الدفع الذي يفتح الدخول وحده، الفيديو المبثوث ببث محمي، والمسار باختبارات وشهادة. ودورة تجريبية تسبق فتح الكتالوغ." },
        { q: "كيف تُباع الدورات عبر الإنترنت في الجزائر؟", a: "ببطاقة عبر الإنترنت حين يملك المتعلّم واحدة، وبالتحويل مع وصل يُتحقَّق منه في طابور للآخرين. وفي الحالتين، يُفتح الدخول دون تبادل رسائل." },
        { q: "كيف أمنع انتشار فيديوهاتي؟", a: "بعدم إرسالها كملفات بعد الآن: تشغيل بالبث، رابط موقَّع ينتهي، علامة مائية باسم المتعلّم، وعدد محدود من الأجهزة. ذلك لا يجعل النسخ مستحيلاً، بل يجعله قابلاً للتتبّع وأقل بساطة من الدفع." },
        { q: "لماذا يتوقف الفيديو عند متعلّميّ؟", a: "لأن الملف الواحد يتطلب معدلاً ثابتاً. والبث المتكيّف يرمّز الدرس بعدة جودات وينزل بالجودة حين يضعف الاتصال، دون توقف." },
        { q: "كم يستهلك الدرس من البيانات؟", a: "ذلك يتوقف على الجودة المشغَّلة. في المثال، درس من اثنتي عشرة دقيقة يستهلك 91 ميغابايت بالبث المتكيّف، مقابل 225 ميغابايت لملف بجودة " + I('720p') + "." },
        { q: "هل يلزم تطبيق هاتف؟", a: "ليس للبداية: موقع متكيّف مع الهاتف يكفي لدورة أولى. والتطبيق يضيف الدروس المحفوظة دون اتصال والإشعارات." },
        { q: "هل يمكن استعمال منصة موجودة؟", a: "نعم للتجربة: توجد منصات جاهزة وبرامج حرة. والعمل على المقاس يُبرَّر للدفع المحلي، حماية الفيديوهات، تطبيق باسمكم، أو زبائن من المؤسسات." },
        { q: "كيف أعرف هل ينهي متعلّميّ الدورة؟", a: "كل درس منتهٍ يُسجَّل. والمنحنى يُظهر كم يبدؤون، كم ينهون، وعند أي درس يتوقف العدد الأكبر." },
        { q: "هل للشهادة قيمة؟", a: "تشهد بأن الدورة توبعت والتقييمات نُجح فيها، ورابط يسمح بالتحقق منها. أما الاعتراف الرسمي بها فيتوقف على وضعكم، لا على المنصة." },
        { q: "هل تصمد المنصة ليلة الامتحان؟", a: "إذا صُمّمت لذلك: الفيديو يُقدَّم من شبكة توزيع، وتجربة ضغط تُجرى قبل الموسم." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "الفيديو لم يعد يتوقف: ينزل في الجودة ويواصل." },
      { after: 3, text: "من ألف مسجَّل، 190 ينهون. هذا الرقم لا يُخمَّن: يُقاس، درساً بدرس." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا تدرّسون، كم متعلّماً عندكم، وكيف يدفعون لكم اليوم: نبدأ بأسبوع تأطير", title: "فيديوهات تنتشر دون دفع، وصولات تُتحقَّق باليد، دروس تتوقف، متعلّمون ينسحبون، أو منصة دورات تطلقونها في الجزائر من فرنسا", body: "Symloop تبني المنصة التي تناسب دوراتكم: التسجيل، الدفع، الدخول التلقائي، الفيديو المحمي، الاختبارات، الشهادة، والمتابعة. صِفوا لنا دوراتكم، متعلّميكم، وطرق الدفع الحالية عندكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.paiement, kind: '2027', name: 'إدماج الدفع عبر الإنترنت: التأكيد، المطابقة، والاسترجاع' },
      { href: L.otp, kind: '2027', name: 'الدخول بالرمز: الرسائل القصيرة، الكلفة لكل إرسال، والاحتيال' },
      { href: L.soutien, kind: '2027', name: 'إنشاء منصة لدروس الدعم: أستاذ متحقَّق منه، وحصة متابَعة' },
      { href: L.saas, kind: '2027', name: 'إطلاق خدمة بالاشتراك: الدفع والرزنامة' },
    ] },
  },
};

const KEYWORDS = "comment créer une plateforme de formation en ligne, comment créer une plateforme de formation en ligne en algérie 2027, plateforme e learning algerie, plateforme cours en ligne algerie, créer une plateforme e-learning, comment créer une plateforme de cours en ligne, comment vendre des cours en ligne, comment vendre des formations en ligne, plateforme lms, protéger ses vidéos de formation, e-learning platform algeria, how to create an online course platform, sell online courses algeria, adaptive bitrate streaming course video, course completion rate, كيف انشئ منصة تعليمية, كيفية انشاء منصة تعليمية الكترونية, منصة تعليمية الجزائر, بيع الدورات عبر الإنترنت, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
