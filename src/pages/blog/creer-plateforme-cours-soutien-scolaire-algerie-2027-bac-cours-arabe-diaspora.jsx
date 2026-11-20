import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora.mjs';

const SLUG = 'creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora';
const FIGURES = ['journey', 'stack', 'impayes', 'parents', 'saison', 'models'];
const DATE = '2026-11-01';

const CONTENT = {
  fr: {
    kind: 'Série · Vu en France #13', title: "Créer une plateforme de cours de soutien en Algérie en 2027 : le prof vérifié, la séance suivie, le paiement tracé, du bac à Alger aux cours d'arabe pour les enfants de la diaspora.",
    dek: "En France, on trouve un professeur particulier sur Superprof, on lit les avis, on réserve un cours d'essai. En Algérie, les cours de soutien sont presque une seconde école, mais ils se choisissent au bouche-à-oreille, se paient en espèces à la porte et ne laissent aucune trace de ce qui s'est passé pendant la séance. Ce qu'un cours de soutien doit tenir à chaque moment, ce qu'il faut construire en premier, ce que coûtent les mois non payés, ce que les parents ignorent, les cours d'arabe pour la diaspora, et un calendrier jusqu'au bac 2027.",
    publishedAt: 'Novembre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Cours de soutien', 'Éducation', 'Plateforme', 'Diaspora', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une plateforme de cours de soutien en Algérie en 2027 ne se juge pas à son catalogue de vidéos : elle se juge **à ce que les parents savent après chaque séance**. Il faut un profil de professeur vérifié, avec diplôme, avis de parents et cours d'essai ; des groupes à taille plafonnée, en salle ou en ligne ; un paiement mensuel tracé, en espèces avec reçu, par CIB, Edahabia ou en euros ; et surtout **un suivi de séance que le professeur remplit en deux minutes** : présence, chapitre, devoir, une remarque, envoyés aux parents le jour même. C'est ce suivi qui fait payer à l'heure, revenir l'année suivante et recommander.",
      "Ce guide est le treizième de la série « Vu en France, à construire en Algérie », après [les salles de sport](/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/) et [la billetterie en ligne](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/). Il s'adresse aux écoles de soutien et aux réseaux de centres qui veulent sortir du cahier et de l'espèce non tracée, et au fondateur de la diaspora qui a vu Superprof ou Acadomia et veut lancer l'équivalent, en Algérie ou entre la France et l'Algérie.",
    ],
    sections: [
      { heading: 'Un marché qui existe déjà, hors ligne', body: [
        "Le soutien scolaire n'est pas une idée à faire naître en Algérie : c'est une habitude. Une étude de l'Université Constantine 1, publiée en 2019 sur un échantillon de 1 093 lycéens de trois wilayas, trouvait que **32,3 % des élèves de première année, 45,9 % de deuxième année et 80,9 % de troisième année** prenaient des cours de soutien privés, pour un coût moyen d'environ 16 500 DA par élève et par an à l'époque. Au bac 2025, il y avait **878 873 candidats**, dont 330 612 candidats libres, pour 367 122 admis ; au BEM, environ 827 000 inscrits. Comptez autour de **2 000 DA par mois et par matière** selon des estimations de presse, avec de gros écarts selon la ville et le niveau.",
        "Ce qui manque n'est donc pas la demande, mais la confiance et la trace. Les cours se donnent dans des écoles agréées, chez des professeurs, parfois dans des garages ou des appartements. Selon TSA, le ministère du Commerce a rappelé que les cours particuliers ne sont pas interdits, mais que des écoles de langues qui en donnaient hors de leur registre de commerce devaient régulariser : le cadre administratif se vérifie au cas par cas. Côté numérique, Algérie Télécom a lancé dès 2022 Dorouscom, des cours et exercices en ligne à 500 DA par mois et par matière. **Le contenu en ligne existe ; ce qui n'existe pas encore à grande échelle, c'est le professeur vérifié, la séance suivie et le paiement tracé.**",
      ] },
      { heading: 'Un cours de soutien qui tient, en six moments', body: [
        "Le système doit tenir chacun de ces six moments. Les trois premiers se jouent à l'inscription ; les trois derniers, chaque semaine et chaque mois.",
      ], visual: 'journey', after: [
        "**Le besoin** se note précisément : niveau, matière, objectif, BEM, bac, rattrapage ou langue. **Le choix du professeur** passe par un profil vérifié : diplôme contrôlé une fois par la plateforme ou l'école, avis de parents réels, et **un cours d'essai** avant tout engagement. **Le groupe et l'horaire** sont annoncés à l'inscription : nombre maximal d'élèves, salle ou classe en ligne, créneau fixe.",
        "**Le paiement** est mensuel, comme aujourd'hui, mais tracé : espèces saisies avec reçu, CIB, Edahabia, ou carte en euros pour une famille en France. **Le suivi** tient en deux lignes après chaque séance. **Le résultat**, enfin, se mesure par des examens blancs réguliers et une courbe de progression que les parents voient avant le vrai examen ; c'est elle qui décide de la réinscription.",
      ] },
      { heading: "Ce qu'il faut construire : le suivi de séance d'abord", body: [
        "La tentation est de commencer par une belle plateforme de vidéos ou une place de marché de professeurs. Ce sont les parties visibles, et celles qui retiennent le moins.",
      ], visual: 'stack', after: [
        "**Le suivi de séance** est le cœur. À la fin du cours, le professeur ouvre l'application sur son téléphone : la liste du groupe est déjà là, il coche les absents, choisit le chapitre dans le programme, tape le devoir et, s'il le veut, une remarque pour un élève. **Deux minutes.** Les parents reçoivent une notification dans la soirée ; l'absent du jour déclenche un message le jour même, pas au bulletin. Si ce geste prend plus de deux minutes, il ne sera pas fait, et tout le reste s'effondre.",
        "**Les paiements** viennent ensuite : un rappel avant l'échéance, un lien de paiement CIB ou Edahabia, le reçu dans l'application, et la part de chaque professeur calculée automatiquement à partir des séances réellement données. **Les profils vérifiés** et **les examens blancs** complètent le socle. Les données concernent des mineurs : elles restent au nom de l'école ou de la plateforme, protégées selon la loi 18-07, et ne servent qu'au suivi de l'élève. L'IA peut aider à corriger des exercices ou générer des séries d'entraînement, comme nous le détaillons dans [l'IA dans l'éducation](/blog/ia-education-elearning-algerie-2026/), mais elle ne remplace pas le suivi humain.",
      ] },
      { heading: 'Ce que coûtent les mois non payés', body: [
        "Un exemple sur des hypothèses, à refaire avec vos chiffres : un centre de 300 inscriptions-matières, à 2 000 DA par mois.",
      ], visual: 'impayes', after: [
        "Si 15 % des mois sont payés en retard ou pas du tout, faute de rappel et de reçu, le centre perd ou attend **90 000 DA chaque mois**. Avec un rappel avant l'échéance, le paiement en ligne et des parents qui voient ce qu'ils paient, ce taux peut descendre à 5 % : **environ 540 000 DA récupérés sur neuf mois d'année scolaire**. Nous ne connaissons pas de mesure publique des impayés dans les écoles de soutien ; ces taux sont des hypothèses pour montrer l'ordre de grandeur.",
        "La vérification se fait dès ce mois-ci, même sur un cahier : comptez les inscriptions au 1er du mois, puis celles qui restent impayées le 15. Le même calcul vaut pour les absences : un élève absent trois séances de suite sans que les parents le sachent est un élève qui ne se réinscrira pas. La gestion complète d'une école privée ou d'un centre de formation, inscriptions, paiements et présences, est détaillée dans [notre guide pour les écoles privées](/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/).",
      ] },
      { heading: 'Ce que les parents ignorent aujourd’hui', body: [
        "Six questions reviennent chez tous les parents. Aujourd'hui, la plupart restent sans réponse.",
      ], visual: 'parents', after: [
        "La plus importante est la plus simple : **« Mon enfant était-il là ? »** Un parent qui apprend au bulletin que son enfant a manqué la moitié des séances payées ne fait plus confiance à l'école, même si l'école n'y est pour rien. Un message le jour même règle la question et protège l'école. La deuxième est **la taille du groupe** : un groupe plafonné et affiché à l'inscription est un argument que le cours donné à trente dans un garage ne peut pas opposer.",
        "Les examens blancs, enfin, transforment une impression en une note. Trois examens blancs entre février et mai, corrigés et rendus dans l'application, montrent aux parents où en est leur enfant avant le vrai examen, et à l'école quels groupes ont besoin de séances supplémentaires.",
      ] },
      { heading: "L'arabe en ligne pour les enfants de la diaspora", body: [
        "La deuxième demande vient de France. L'arabe y est enseigné dans le secondaire public, mais à peu d'élèves : **15 408 élèves dans 382 établissements** à la rentrée 2020, selon une réponse du ministère de l'Éducation nationale à une question parlementaire. Une autre question parlementaire évoquait **plus de 50 000 élèves** qui suivent l'arabe dans un cadre associatif. Depuis la rentrée 2021, l'Algérie fait partie des pays partenaires du dispositif d'enseignement international de langues étrangères en primaire, gratuit, mais ouvert selon le nombre de demandes dans chaque école. **Beaucoup de familles cherchent donc ailleurs, le mercredi ou le week-end.**",
        "Une classe en ligne avec un professeur en Algérie répond à cette demande avec un avantage concret : **l'Algérie est à la même heure que la France en hiver et une heure derrière en été**, et beaucoup d'écoliers français n'ont pas classe le mercredi après-midi. Le mécanisme est le même que pour le soutien local : professeur vérifié, petit groupe par âge et niveau, suivi de séance envoyé aux parents, abonnement mensuel payé par carte en euros. La façon de rémunérer des professeurs en Algérie à partir de paiements en euros se cadre avec un comptable avant le lancement ; c'est un point d'organisation, pas un obstacle au produit.",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles possibles, de l'école de soutien qui veut son outil à la plateforme entre les deux rives.",
      ], visual: 'models', after: [
        "**Une école de soutien ou un réseau de centres qui a déjà ses élèves** est le point de départ le plus sûr : les groupes existent, les parents aussi, et l'outil paie dès que les impayés et les absences silencieuses baissent. **La place de marché**, type Superprof, qui annonce sur son site 40 millions de professeurs dans 56 pays, est le modèle le plus visible et le plus fragile : une fois le professeur trouvé, le parent et le professeur peuvent continuer en direct. Ce qui retient les deux sur la plateforme, c'est le suivi, le paiement et les examens blancs, pas l'annuaire. Les règles d'une [marketplace en 2027](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/) s'appliquent : commission, reversement, litiges.",
        "**L'arabe en ligne pour la diaspora** est un abonnement en euros, avec des professeurs en Algérie et des familles en France, à condition de poser dès le départ le cadre de rémunération. **Les contenus en ligne par abonnement** coûtent peu par élève supplémentaire mais perdent les élèves sans professeur pour les relancer. **Les stages intensifs avant le bac** concentrent la demande sur quelques semaines : rentables, mais exigeants en planning.",
      ] },
      { heading: 'Le calendrier pour 2027', body: [
        "Une douzaine de semaines entre le cadrage et un pilote réel, pour être prêt avant les révisions de printemps.",
      ], visual: 'saison', after: [
        "**Novembre : le cadrage**, la vérification des profils et la reprise des élèves et des groupes existants. **Novembre et décembre : les groupes, le planning et les paiements**, puis le suivi de séance et l'application des parents. **Fin décembre : le pilote pendant les vacances d'hiver**, avec les classes d'examen d'un centre, quand les cours intensifs commencent. Le Ramadan, attendu vers le 8 février, déplace ensuite les séances vers la soirée.",
        "**Février à avril : la classe en ligne et les cours pour la diaspora**, sur les créneaux du mercredi et du week-end. **Mai et juin : les révisions du BEM et du bac**, avec examens blancs et stages intensifs ; le bac se tient d'ordinaire mi-juin, la date 2027 restant à confirmer par le ministère. Ces durées sont cohérentes avec celles que nous détaillons dans [combien de temps pour développer une application ou une plateforme](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'Ce qui fait échouer ce type de projet', body: [], list: [
        "**Commencer par les vidéos.** Des cours enregistrés sans professeur pour suivre l'élève ne changent ni les résultats ni la réinscription.",
        "**Un suivi trop long à remplir.** Au-delà de deux minutes par séance, les professeurs arrêtent au bout de trois semaines.",
        "**Des profils non vérifiés.** Une place de marché qui laisse n'importe qui se dire professeur perd la confiance des parents au premier incident.",
        "**Des groupes sans plafond.** Le nombre d'élèves annoncé doit être celui de la salle, et le système doit refuser l'inscription de trop.",
        "**Des espèces sans reçu.** Chaque paiement doit laisser une trace pour le parent et pour l'école.",
        "**Oublier qu'il s'agit de mineurs.** Données protégées, accès limité, messages aux parents et non aux enfants seuls.",
        "**Les comptes au nom du développeur.** Serveur, domaine, données et compte de paiement au nom de l'école ou de la plateforme dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Les cours de soutien sont-ils autorisés en Algérie ?", a: "Selon TSA, le ministère du Commerce a rappelé que les cours particuliers ne sont pas interdits, tout en demandant à certaines écoles de langues qui en donnaient hors de leur registre de commerce de régulariser leur activité. Le cadre administratif d'une école de soutien se vérifie au cas par cas, avec un comptable ou un juriste ; la plateforme, elle, sert à organiser et tracer l'activité." },
        { q: "Combien coûtent les cours de soutien en Algérie ?", a: "Les estimations de presse tournent autour de 2 000 DA par mois et par matière, avec de gros écarts selon la ville, le niveau et la taille du groupe. Une étude de l'Université Constantine 1 publiée en 2019 estimait le coût moyen à environ 16 500 DA par lycéen et par an à l'époque." },
        { q: "Comment les parents savent-ils ce qui se passe pendant la séance ?", a: "Par un suivi de séance que le professeur remplit en deux minutes à la fin du cours : présence, chapitre, devoir, remarque. Les parents le reçoivent le jour même dans l'application, et un message part immédiatement en cas d'absence." },
        { q: "Peut-on donner des cours d'arabe en ligne à des enfants en France depuis l'Algérie ?", a: "Oui : l'heure est la même en hiver et décalée d'une heure en été, et les créneaux du mercredi et du week-end conviennent à beaucoup de familles. Il faut une classe en ligne fiable, de petits groupes par âge, un suivi envoyé aux parents et un abonnement en euros. La rémunération des professeurs en Algérie se cadre avec un comptable avant le lancement." },
        { q: "Faut-il une application mobile ?", a: "Pour les parents, une application ou un espace web avec notifications suffit au début. Pour les professeurs, l'outil de suivi doit marcher sur téléphone, en deux minutes. Nous détaillons les choix d'une [application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "Combien de temps pour être prêt ?", a: "Environ douze semaines entre le cadrage et un pilote dans un centre, avec les profils, les groupes, les paiements et le suivi de séance. La classe en ligne et les cours pour la diaspora suivent sur deux à trois mois, pour être prêt avant les révisions du BEM et du bac." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le contenu en ligne existe ; ce qui manque, c'est le professeur vérifié, la séance suivie et le paiement tracé." },
      { after: 4, text: "Un parent qui apprend l'absence au bulletin ne fait plus confiance à l'école." },
    ],
    cta: { eyebrow: 'Décrivez votre projet', title: "École de soutien, réseau de centres, cours d'arabe pour la diaspora ou place de marché à lancer : le nombre d'élèves et de professeurs, comment vous inscrivez, suivez et encaissez aujourd'hui, et la date visée. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des plateformes de cours de soutien, des applications parents, des classes en ligne et des outils de suivi pour les écoles et centres algériens, en arabe, en français et en anglais, avec le paiement en dinars et en euros. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/', kind: 'Éducation', name: 'École privée et centre de formation : inscriptions, paiements, présences' },
      { href: '/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/', kind: 'Série #12', name: 'Créer une application de salle de sport en Algérie en 2027' },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'Créer une marketplace en Algérie en 2027' },
      { href: '/blog/ia-education-elearning-algerie-2026/', kind: 'IA', name: "L'IA dans l'éducation en Algérie" },
    ] },
  },
  en: {
    kind: 'Series · Seen in France #13', title: 'Building a tutoring platform in Algeria in 2027: the vetted tutor, the tracked session, the traced payment, from the bac in Algiers to Arabic lessons for diaspora children.',
    dek: "In France you find a private tutor on Superprof, read the reviews and book a trial lesson. In Algeria tutoring is almost a second school system, but tutors are chosen by word of mouth, paid in cash at the door, and leave no trace of what happened in the session. What a tutoring course must hold at each moment, what to build first, what unpaid months cost, what parents do not know, Arabic lessons for the diaspora, and a calendar to the 2027 bac.",
    publishedAt: 'November 2026', readTime: '11 min read', author: 'Symloop', about: ['Tutoring', 'Education', 'Platform', 'Diaspora', 'Algeria 2027'],
    intro: [
      "**Short answer.** A tutoring platform in Algeria in 2027 is not judged by its video catalogue: it is judged **by what parents know after each session**. You need a vetted tutor profile, with a diploma, parent reviews and a trial lesson; groups with a capped size, in a room or online; a traced monthly payment, in cash with a receipt, by CIB, Edahabia or in euros; and above all **session follow-up the tutor fills in within two minutes**: attendance, chapter, homework, one remark, sent to parents the same day. That follow-up is what gets fees paid on time, brings families back next year, and earns recommendations.",
      "This guide is the thirteenth in the series “Seen in France, to build in Algeria”, after [gyms](/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/) and [online ticketing](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/). It is written for tutoring schools and networks of centres that want to move beyond notebooks and untraced cash, and for the diaspora founder who has seen Superprof or Acadomia and wants to launch the equivalent, in Algeria or between France and Algeria.",
    ],
    sections: [
      { heading: 'A market that already exists, offline', body: [
        "Tutoring is not an idea that needs creating in Algeria: it is a habit. A study by Université Constantine 1, published in 2019 on a sample of 1,093 secondary pupils in three wilayas, found that **32.3% of first-year, 45.9% of second-year and 80.9% of third-year pupils** took private tutoring, at an average cost of about 16,500 DA per pupil per year at the time. The 2025 bac had **878,873 candidates**, including 330,612 independent candidates, and 367,122 passed; the BEM had about 827,000 registered. Expect around **2,000 DA per month per subject** according to press estimates, with wide differences by city and level.",
        "What is missing is not demand but trust and traceability. Lessons are given in approved schools, at tutors’ homes, sometimes in garages or flats. According to TSA, the Commerce Ministry stated that private lessons are not banned, but that language schools giving them outside their trade registration had to regularise: the administrative framework is checked case by case. On the digital side, Algérie Télécom launched Dorouscom back in 2022, online lessons and exercises at 500 DA per month per subject. **Online content exists; what does not yet exist at scale is the vetted tutor, the tracked session and the traced payment.**",
      ] },
      { heading: 'A tutoring course that holds, in six moments', body: [
        "The system has to hold each of these six moments. The first three happen at enrolment; the last three, every week and every month.",
      ], visual: 'journey', after: [
        "**The need** is recorded precisely: level, subject, goal, BEM, bac, catch-up or language. **Choosing a tutor** goes through a vetted profile: a diploma checked once by the platform or the school, reviews from real parents, and **a trial lesson** before any commitment. **The group and time** are stated at enrolment: maximum number of pupils, room or online class, fixed slot.",
        "**Payment** is monthly, as today, but traced: cash entered with a receipt, CIB, Edahabia, or a euro card for a family in France. **Follow-up** fits in two lines after each session. **The result**, finally, is measured by regular mock exams and a progress curve that parents see before the real exam; that curve decides re-enrolment.",
      ] },
      { heading: 'What to build: session follow-up first', body: [
        "The temptation is to start with a beautiful video platform or a tutor marketplace. Those are the visible parts, and the ones that retain the least.",
      ], visual: 'stack', after: [
        "**Session follow-up** is the heart of it. At the end of the lesson the tutor opens the app on their phone: the group list is already there, they tick the absentees, pick the chapter from the curriculum, type the homework and, if they wish, a remark for one pupil. **Two minutes.** Parents get a notification that evening; a pupil absent today triggers a message the same day, not on the school report. If this takes more than two minutes it will not be done, and everything else collapses.",
        "**Payments** come next: a reminder before the due date, a CIB or Edahabia payment link, the receipt in the app, and each tutor’s share calculated automatically from the sessions actually given. **Vetted profiles** and **mock exams** complete the base. The data concerns minors: it stays in the name of the school or platform, protected under law 18-07, and is used only to follow the pupil. AI can help mark exercises or generate practice sets, as we describe in [AI in education](/blog/ia-education-elearning-algerie-2026/), but it does not replace human follow-up.",
      ] },
      { heading: 'What unpaid months cost', body: [
        "An example on assumptions, to redo with your figures: a centre with 300 subject enrolments at 2,000 DA a month.",
      ], visual: 'impayes', after: [
        "If 15% of months are paid late or not at all, for lack of reminders and receipts, the centre loses or waits for **90,000 DA every month**. With a reminder before the due date, online payment and parents who see what they are paying for, that rate can fall to 5%: **about 540,000 DA recovered over a nine-month school year**. We know of no public measurement of unpaid fees in tutoring schools; these rates are assumptions to show the order of magnitude.",
        "You can check this month, even in a notebook: count enrolments on the 1st of the month, then those still unpaid on the 15th. The same applies to absences: a pupil absent three sessions in a row without their parents knowing is a pupil who will not re-enrol. Full management of a private school or training centre, enrolments, payments and attendance, is covered in [our guide for private schools](/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/).",
      ] },
      { heading: 'What parents do not know today', body: [
        "Six questions come up with every parent. Today most of them go unanswered.",
      ], visual: 'parents', after: [
        "The most important is the simplest: **“Was my child there?”** A parent who learns from the school report that their child missed half the sessions they paid for stops trusting the school, even if the school is not at fault. A same-day message settles the question and protects the school. The second is **group size**: a capped group shown at enrolment is an argument that a lesson given to thirty pupils in a garage cannot match.",
        "Mock exams, finally, turn an impression into a mark. Three mock exams between February and May, marked and returned in the app, show parents where their child stands before the real exam, and show the school which groups need extra sessions.",
      ] },
      { heading: 'Online Arabic for diaspora children', body: [
        "The second demand comes from France. Arabic is taught in French public secondary schools, but to few pupils: **15,408 pupils in 382 schools** at the start of the 2020 school year, according to an Education Ministry answer to a parliamentary question. Another parliamentary question mentioned **more than 50,000 pupils** learning Arabic through associations. Since September 2021 Algeria has been one of the partner countries of the international foreign-language teaching scheme in primary schools, which is free but opens according to the number of requests in each school. **Many families therefore look elsewhere, on Wednesdays or at weekends.**",
        "An online class with a tutor in Algeria meets that demand with a concrete advantage: **Algeria is on the same time as France in winter and one hour behind in summer**, and many French primary pupils have no school on Wednesday afternoons. The mechanism is the same as for local tutoring: vetted tutor, small group by age and level, session follow-up sent to parents, monthly subscription paid by euro card. How to pay tutors in Algeria from euro payments is set up with an accountant before launch; it is a question of organisation, not an obstacle to the product.",
      ] },
      { heading: 'Which model to build', body: [
        "Six possible models, from the tutoring school that wants its own tool to the platform spanning both shores.",
      ], visual: 'models', after: [
        "**A tutoring school or network of centres that already has its pupils** is the safest starting point: the groups exist, so do the parents, and the tool pays as soon as unpaid fees and silent absences fall. **The marketplace**, Superprof style, which states on its site that it has 40 million tutors in 56 countries, is the most visible model and the most fragile: once the tutor is found, parent and tutor can carry on directly. What keeps both on the platform is follow-up, payment and mock exams, not the directory. The rules of a [marketplace in 2027](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/) apply: commission, payouts, disputes.",
        "**Online Arabic for the diaspora** is a subscription in euros, with tutors in Algeria and families in France, provided the payment framework is set from the start. **Online content by subscription** costs little per extra pupil but loses pupils who have no tutor to chase them. **Intensive bac courses** concentrate demand into a few weeks: profitable, but demanding on scheduling.",
      ] },
      { heading: 'The calendar for 2027', body: [
        "About twelve weeks between scoping and a real pilot, to be ready before spring revision.",
      ], visual: 'saison', after: [
        "**November: scoping**, vetting profiles and importing existing pupils and groups. **November and December: groups, schedule and payments**, then session follow-up and the parent app. **Late December: the pilot during the winter holidays**, with a centre’s exam classes, when intensive lessons start. Ramadan, expected around 8 February, then moves sessions into the evening.",
        "**February to April: the online classroom and courses for the diaspora**, on Wednesday and weekend slots. **May and June: BEM and bac revision**, with mock exams and intensive courses; the bac is usually held in mid-June, with the 2027 date still to be confirmed by the ministry. These durations are consistent with those we set out in [how long it takes to build an app or platform](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with videos.** Recorded lessons with no tutor following the pupil change neither results nor re-enrolment.",
        "**Follow-up that takes too long.** Beyond two minutes per session, tutors stop after three weeks.",
        "**Unvetted profiles.** A marketplace that lets anyone call themselves a tutor loses parents’ trust at the first incident.",
        "**Groups with no cap.** The number of pupils announced must be the room’s, and the system must refuse the extra enrolment.",
        "**Cash with no receipt.** Every payment must leave a trace for the parent and for the school.",
        "**Forgetting these are minors.** Protected data, limited access, messages to parents and not to children alone.",
        "**Accounts in the developer’s name.** Server, domain, data and payment account in the name of the school or platform from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Is private tutoring allowed in Algeria?', a: "According to TSA, the Commerce Ministry stated that private lessons are not banned, while asking some language schools that gave them outside their trade registration to regularise. The administrative framework of a tutoring school is checked case by case with an accountant or lawyer; the platform’s job is to organise and trace the activity." },
        { q: 'How much does tutoring cost in Algeria?', a: "Press estimates are around 2,000 DA per month per subject, with wide differences by city, level and group size. A Université Constantine 1 study published in 2019 put the average cost at about 16,500 DA per secondary pupil per year at the time." },
        { q: 'How do parents know what happens in the session?', a: "Through session follow-up that the tutor fills in within two minutes at the end of the lesson: attendance, chapter, homework, a remark. Parents receive it the same day in the app, and a message goes out immediately if the pupil is absent." },
        { q: 'Can Arabic be taught online to children in France from Algeria?', a: "Yes: the time is the same in winter and one hour apart in summer, and Wednesday and weekend slots suit many families. You need a reliable online classroom, small groups by age, follow-up sent to parents and a subscription in euros. How tutors in Algeria are paid is set up with an accountant before launch." },
        { q: 'Is a mobile app needed?', a: "For parents, an app or web space with notifications is enough at first. For tutors, the follow-up tool must work on a phone, in two minutes. We cover the choices behind a [mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: 'How long does it take to be ready?', a: "About twelve weeks between scoping and a pilot in a centre, with profiles, groups, payments and session follow-up. The online classroom and diaspora courses follow over two to three months, to be ready before BEM and bac revision." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'Online content exists; what is missing is the vetted tutor, the tracked session and the traced payment.' },
      { after: 4, text: 'A parent who learns of absences from the school report stops trusting the school.' },
    ],
    cta: { eyebrow: 'Tell us about your project', title: 'Tutoring school, network of centres, Arabic lessons for the diaspora or marketplace to launch: the number of pupils and tutors, how you enrol, follow up and collect fees today, and the target date. We send back the scope, the calendar and the total price, in writing, before we start.', body: 'Symloop builds tutoring platforms, parent apps, online classrooms and follow-up tools for Algerian schools and centres, in Arabic, French and English, with payment in dinars and euros. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/', kind: 'Education', name: 'Private schools and training centres: enrolment, payments, attendance' },
      { href: '/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/', kind: 'Series #12', name: 'Building a gym app and platform in Algeria in 2027' },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'Building a marketplace in Algeria in 2027' },
      { href: '/blog/ia-education-elearning-algerie-2026/', kind: 'AI', name: 'AI in education in Algeria' },
    ] },
  },
  ar: {
    kind: 'سلسلة · رأيناه في فرنسا #13', title: 'إنشاء منصة لدروس الدعم في الجزائر سنة 2027: الأستاذ الموثَّق، الحصة المتابَعة، الدفع المتتبَّع، من البكالوريا في العاصمة إلى دروس العربية لأبناء الجالية.',
    dek: 'في فرنسا يجد المرء أستاذاً خصوصياً على Superprof، يقرأ الآراء ويحجز حصة تجريبية. في الجزائر صارت دروس الدعم شبه مدرسة ثانية، لكن الأستاذ يُختار بالسماع، ويُدفع له نقداً عند الباب، ولا يبقى أثر لما جرى في الحصة. ما يجب أن يصمد عنده درس الدعم في كل لحظة، وما يُبنى أولاً، وكم تكلّف الأشهر غير المدفوعة، وما يجهله الأولياء، ودروس العربية للجالية، وجدول زمني حتى بكالوريا 2027.',
    publishedAt: 'نوفمبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['دروس الدعم', 'التعليم', 'منصة', 'الجالية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** منصة دروس الدعم في الجزائر سنة 2027 لا تُقاس بمكتبة الفيديوهات: تُقاس **بما يعرفه الأولياء بعد كل حصة**. يلزم ملف أستاذ موثَّق، بشهادة وآراء أولياء وحصة تجريبية؛ وأفواج بعدد محدود، في القاعة أو عن بُعد؛ ودفع شهري متتبَّع، نقداً بوصل أو بـCIB أو الذهبية أو باليورو؛ وقبل كل شيء **متابعة حصة يملؤها الأستاذ في دقيقتين**: الحضور، الفصل، الواجب، ملاحظة، تُرسل للأولياء في اليوم نفسه. هذه المتابعة هي ما يجعل الدفع في وقته، والعودة في السنة التالية، والتوصية.",
      "هذا الدليل هو الثالث عشر في سلسلة «رأيناه في فرنسا، لنبنيه في الجزائر»، بعد [قاعات الرياضة](/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/) و[بيع التذاكر عبر الإنترنت](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/). وهو موجّه لمدارس الدعم وشبكات المراكز التي تريد الخروج من الدفتر والنقد غير المتتبَّع، وللمؤسس من الجالية الذي رأى Superprof أو Acadomia ويريد إطلاق مقابلهما، في الجزائر أو بين فرنسا والجزائر.",
    ],
    sections: [
      { heading: 'سوق موجودة أصلاً، خارج الإنترنت', body: [
        "الدعم المدرسي ليس فكرة يجب خلقها في الجزائر: إنه عادة. وجدت دراسة لجامعة قسنطينة 1، نُشرت سنة 2019 على عيّنة من 1093 تلميذاً في الثانوي بثلاث ولايات، أن **32,3 % من تلاميذ السنة الأولى و45,9 % من الثانية و80,9 % من الثالثة** يتلقّون دروس دعم خاصة، بكلفة متوسطة نحو 16500 دج للتلميذ في السنة آنذاك. وفي بكالوريا 2025 كان هناك **878873 مترشحاً**، منهم 330612 مترشحاً حراً، ونجح 367122؛ وفي شهادة التعليم المتوسط نحو 827000 مسجَّل. احسب نحو **2000 دج في الشهر للمادة** حسب تقديرات صحفية، مع فوارق كبيرة حسب المدينة والمستوى.",
        "الناقص إذن ليس الطلب، بل الثقة والأثر. تُعطى الدروس في مدارس معتمدة، وعند الأساتذة، وأحياناً في مرائب أو شقق. وحسب موقع TSA، ذكّرت وزارة التجارة بأن الدروس الخصوصية غير ممنوعة، لكن مدارس لغات تقدّمها خارج سجلّها التجاري مطالبة بتسوية وضعيتها: الإطار الإداري يُتحقق منه حالة بحالة. ورقمياً، أطلقت اتصالات الجزائر منذ 2022 منصة «دروسكم»، دروس وتمارين عبر الإنترنت بـ500 دج في الشهر للمادة. **المحتوى الرقمي موجود؛ أما ما لا يوجد بعد على نطاق واسع فهو الأستاذ الموثَّق والحصة المتابَعة والدفع المتتبَّع.**",
      ] },
      { heading: 'درس دعم يصمد، في ست لحظات', body: [
        "على النظام أن يصمد في كل لحظة من هذه اللحظات الست. الثلاث الأولى تجري عند التسجيل؛ والثلاث الأخيرة كل أسبوع وكل شهر.",
      ], visual: 'journey', after: [
        "**الحاجة** تُدوَّن بدقة: المستوى، المادة، الهدف، شهادة التعليم المتوسط، البكالوريا، الاستدراك أو اللغة. **اختيار الأستاذ** يمرّ عبر ملف موثَّق: شهادة تتحقق منها المنصة أو المدرسة مرة واحدة، وآراء أولياء حقيقيين، و**حصة تجريبية** قبل أي التزام. **الفوج والتوقيت** يُعلنان عند التسجيل: العدد الأقصى للتلاميذ، القاعة أو القسم عن بُعد، الوقت الثابت.",
        "**الدفع** شهري كما اليوم، لكنه متتبَّع: نقد مسجَّل بوصل، CIB، الذهبية، أو بطاقة باليورو لعائلة في فرنسا. **المتابعة** سطران بعد كل حصة. وأخيراً **النتيجة** تُقاس بامتحانات تجريبية منتظمة ومنحنى تقدّم يراه الأولياء قبل الامتحان الحقيقي؛ وهو ما يقرّر إعادة التسجيل.",
      ] },
      { heading: 'ما يجب بناؤه: متابعة الحصة أولاً', body: [
        "الإغراء هو البدء بمنصة فيديوهات جميلة أو بسوق للأساتذة. إنها الأجزاء الظاهرة، والأقل قدرة على الاحتفاظ بالتلاميذ.",
      ], visual: 'stack', after: [
        "**متابعة الحصة** هي القلب. في نهاية الدرس يفتح الأستاذ التطبيق على هاتفه: قائمة الفوج جاهزة، يؤشّر على الغائبين، يختار الفصل من البرنامج، يكتب الواجب، وإن شاء ملاحظة لتلميذ. **دقيقتان.** يتلقّى الأولياء إشعاراً في المساء؛ والغائب اليوم يُطلق رسالة في اليوم نفسه، لا في كشف النقاط. إن تجاوز ذلك دقيقتين فلن يُنجز، وينهار كل الباقي.",
        "**المدفوعات** تأتي بعدها: تذكير قبل الموعد، رابط دفع بـCIB أو الذهبية، الوصل في التطبيق، وحصة كل أستاذ محسوبة تلقائياً من الحصص المقدّمة فعلاً. و**الملفات الموثَّقة** و**الامتحانات التجريبية** تكمّل القاعدة. البيانات تخصّ قُصّراً: تبقى باسم المدرسة أو المنصة، محمية وفق القانون 18-07، ولا تُستعمل إلا لمتابعة التلميذ. ويمكن للذكاء الاصطناعي أن يساعد في تصحيح التمارين أو توليد سلاسل تدريب، كما نفصّل في [الذكاء الاصطناعي في التعليم](/blog/ia-education-elearning-algerie-2026/)، لكنه لا يعوّض المتابعة البشرية.",
      ] },
      { heading: 'كم تكلّف الأشهر غير المدفوعة', body: [
        "مثال مبني على فرضيات، أعده بأرقامك: مركز بـ300 تسجيل في المواد، بـ2000 دج في الشهر.",
      ], visual: 'impayes', after: [
        "إذا دُفع 15 % من الأشهر متأخرة أو لم تُدفع، لغياب التذكير والوصل، يخسر المركز أو ينتظر **90000 دج كل شهر**. ومع تذكير قبل الموعد ودفع إلكتروني وأولياء يرون ما يدفعون مقابله، يمكن أن تنزل النسبة إلى 5 %: **نحو 540000 دج مسترجعة خلال تسعة أشهر من السنة الدراسية**. لا نعرف قياساً علنياً للمستحقات غير المدفوعة في مدارس الدعم؛ هذه النسب فرضيات لإظهار حجم الأمر.",
        "التحقق ممكن من هذا الشهر، ولو في دفتر: عُدّ التسجيلات في أول الشهر، ثم ما بقي منها غير مدفوع يوم 15. والحساب نفسه يصحّ على الغيابات: تلميذ يغيب ثلاث حصص متتالية دون علم أوليائه تلميذ لن يعيد التسجيل. والتسيير الكامل لمدرسة خاصة أو مركز تكوين، تسجيلات ومدفوعات وحضور، مفصّل في [دليلنا للمدارس الخاصة](/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/).",
      ] },
      { heading: 'ما يجهله الأولياء اليوم', body: [
        "ستة أسئلة تتكرّر عند كل الأولياء. واليوم يبقى أغلبها بلا جواب.",
      ], visual: 'parents', after: [
        "أهمها أبسطها: **«هل حضر ابني؟»** الولي الذي يعرف من كشف النقاط أن ابنه غاب عن نصف الحصص المدفوعة يفقد ثقته في المدرسة، حتى لو لم تكن مسؤولة. رسالة في اليوم نفسه تحسم السؤال وتحمي المدرسة. والثاني **عدد التلاميذ في الفوج**: فوج محدود العدد ومعلن عند التسجيل حجة لا يملكها درس يُعطى لثلاثين في مرآب.",
        "وأخيراً الامتحانات التجريبية تحوّل الانطباع إلى علامة. ثلاثة امتحانات تجريبية بين فيفري وماي، مصحَّحة ومعادة في التطبيق، تُري الأولياء أين وصل ابنهم قبل الامتحان الحقيقي، وتُري المدرسة أي الأفواج تحتاج حصصاً إضافية.",
      ] },
      { heading: 'العربية عن بُعد لأبناء الجالية', body: [
        "الطلب الثاني يأتي من فرنسا. تُدرَّس العربية في الثانوي العمومي هناك، لكن لعدد قليل: **15408 تلميذاً في 382 مؤسسة** عند دخول 2020، حسب جواب وزارة التربية الفرنسية على سؤال برلماني. وذكر سؤال برلماني آخر **أكثر من 50000 تلميذ** يتعلّمون العربية في إطار جمعوي. ومنذ دخول 2021 صارت الجزائر من البلدان الشريكة لجهاز التعليم الدولي للغات الأجنبية في الابتدائي، وهو مجاني لكنه يُفتح حسب عدد الطلبات في كل مدرسة. **لذلك تبحث عائلات كثيرة في مكان آخر، يوم الأربعاء أو في نهاية الأسبوع.**",
        "قسم عن بُعد مع أستاذ في الجزائر يستجيب لهذا الطلب بميزة ملموسة: **الجزائر في التوقيت نفسه مع فرنسا شتاءً ومتأخرة عنها بساعة صيفاً**، وكثير من تلاميذ الابتدائي في فرنسا لا يدرسون مساء الأربعاء. الآلية هي نفسها التي في الدعم المحلي: أستاذ موثَّق، فوج صغير حسب السن والمستوى، متابعة حصة تُرسل للأولياء، واشتراك شهري يُدفع ببطاقة باليورو. أما طريقة دفع أجور أساتذة في الجزائر انطلاقاً من مدفوعات باليورو فتُضبط مع محاسب قبل الإطلاق؛ إنها مسألة تنظيم لا عائق أمام المنتج.",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج ممكنة، من مدرسة الدعم التي تريد أداتها إلى المنصة بين الضفتين.",
      ], visual: 'models', after: [
        "**مدرسة دعم أو شبكة مراكز لها تلاميذها** هي نقطة الانطلاق الأكثر أماناً: الأفواج موجودة، والأولياء كذلك، والأداة تُربح فور انخفاض المستحقات غير المدفوعة والغيابات الصامتة. **السوق**، على طريقة Superprof التي تعلن على موقعها 40 مليون أستاذ في 56 بلداً، هي النموذج الأكثر ظهوراً والأكثر هشاشة: بعد إيجاد الأستاذ يمكن للولي والأستاذ مواصلة التعامل مباشرة. ما يُبقي الطرفين على المنصة هو المتابعة والدفع والامتحانات التجريبية، لا الدليل. وتنطبق قواعد [السوق الإلكترونية سنة 2027](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/): العمولة، التحويل، النزاعات.",
        "**العربية عن بُعد للجالية** اشتراك باليورو، بأساتذة في الجزائر وعائلات في فرنسا، بشرط وضع إطار الأجور منذ البداية. **المحتوى الرقمي بالاشتراك** يكلّف قليلاً عن كل تلميذ إضافي لكنه يفقد التلاميذ الذين لا أستاذ يتابعهم. **التربّصات المكثّفة قبل البكالوريا** تركّز الطلب في أسابيع قليلة: مربحة لكنها متطلّبة في التخطيط.",
      ] },
      { heading: 'الجدول الزمني لسنة 2027', body: [
        "نحو اثني عشر أسبوعاً بين التأطير وتجربة حقيقية، للجاهزية قبل مراجعات الربيع.",
      ], visual: 'saison', after: [
        "**نوفمبر: التأطير**، وتوثيق الملفات، ونقل التلاميذ والأفواج الحالية. **نوفمبر وديسمبر: الأفواج والتخطيط والدفع**، ثم متابعة الحصة وتطبيق الأولياء. **نهاية ديسمبر: التجربة خلال عطلة الشتاء** مع أقسام الامتحانات في مركز واحد، حين تبدأ الدروس المكثّفة. ثم ينقل رمضان، المنتظر نحو 8 فيفري، الحصص إلى المساء.",
        "**من فيفري إلى أفريل: القسم عن بُعد ودروس الجالية** في أوقات الأربعاء ونهاية الأسبوع. **ماي وجوان: مراجعة الشهادتين** بامتحانات تجريبية وتربّصات مكثّفة؛ وتُجرى البكالوريا عادة في منتصف جوان، وتاريخ 2027 تؤكّده الوزارة. وهذه المدد متّسقة مع ما نفصّله في [كم من الوقت لتطوير تطبيق أو منصة](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بالفيديوهات.** دروس مسجَّلة دون أستاذ يتابع التلميذ لا تغيّر النتائج ولا إعادة التسجيل.",
        "**متابعة طويلة الملء.** أكثر من دقيقتين لكل حصة، ويتوقف الأساتذة بعد ثلاثة أسابيع.",
        "**ملفات غير موثَّقة.** سوق تسمح لأي كان بأن يقدّم نفسه أستاذاً تفقد ثقة الأولياء عند أول حادث.",
        "**أفواج بلا سقف.** العدد المعلن يجب أن يكون عدد القاعة، وعلى النظام أن يرفض التسجيل الزائد.",
        "**نقد بلا وصل.** كل دفعة يجب أن تترك أثراً للولي وللمدرسة.",
        "**نسيان أن الأمر يخصّ قُصّراً.** بيانات محمية، ووصول محدود، ورسائل للأولياء لا للأطفال وحدهم.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والبيانات وحساب الدفع باسم المدرسة أو المنصة منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "هل دروس الدعم مسموح بها في الجزائر؟", a: "حسب موقع TSA، ذكّرت وزارة التجارة بأن الدروس الخصوصية غير ممنوعة، مع مطالبة بعض مدارس اللغات التي تقدّمها خارج سجلّها التجاري بتسوية نشاطها. الإطار الإداري لمدرسة الدعم يُتحقق منه حالة بحالة مع محاسب أو قانوني؛ أما المنصة فدورها تنظيم النشاط وتتبّعه." },
        { q: "كم تكلّف دروس الدعم في الجزائر؟", a: "تدور التقديرات الصحفية حول 2000 دج في الشهر للمادة، مع فوارق كبيرة حسب المدينة والمستوى وحجم الفوج. وقدّرت دراسة لجامعة قسنطينة 1 نُشرت سنة 2019 الكلفة المتوسطة بنحو 16500 دج لتلميذ الثانوي في السنة آنذاك." },
        { q: "كيف يعرف الأولياء ما يجري في الحصة؟", a: "بمتابعة حصة يملؤها الأستاذ في دقيقتين في نهاية الدرس: الحضور، الفصل، الواجب، ملاحظة. يتلقّاها الأولياء في اليوم نفسه في التطبيق، وتنطلق رسالة فوراً عند الغياب." },
        { q: "هل يمكن تقديم دروس العربية عن بُعد لأطفال في فرنسا من الجزائر؟", a: "نعم: التوقيت نفسه شتاءً وبفارق ساعة صيفاً، وأوقات الأربعاء ونهاية الأسبوع تناسب عائلات كثيرة. يلزم قسم عن بُعد موثوق، وأفواج صغيرة حسب السن، ومتابعة تُرسل للأولياء، واشتراك باليورو. وتُضبط أجور الأساتذة في الجزائر مع محاسب قبل الإطلاق." },
        { q: "هل يلزم تطبيق للهاتف؟", a: "للأولياء يكفي في البداية تطبيق أو فضاء ويب مع إشعارات. أما للأساتذة فيجب أن تعمل أداة المتابعة على الهاتف في دقيقتين. نفصّل خيارات [تطبيق الهاتف سنة 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "كم من الوقت يلزم للجاهزية؟", a: "نحو اثني عشر أسبوعاً بين التأطير وتجربة في مركز، بالملفات والأفواج والدفع ومتابعة الحصة. ثم يأتي القسم عن بُعد ودروس الجالية خلال شهرين إلى ثلاثة، للجاهزية قبل مراجعة الشهادتين." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "المحتوى الرقمي موجود؛ الناقص هو الأستاذ الموثَّق والحصة المتابَعة والدفع المتتبَّع." },
      { after: 4, text: "الولي الذي يعرف الغياب من كشف النقاط يفقد ثقته في المدرسة." },
    ],
    cta: { eyebrow: 'صف لنا مشروعك', title: "مدرسة دعم، أو شبكة مراكز، أو دروس عربية للجالية، أو سوق للإطلاق: عدد التلاميذ والأساتذة، كيف تسجّل وتتابع وتحصّل اليوم، والتاريخ المستهدف. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop منصات دروس الدعم وتطبيقات الأولياء والأقسام عن بُعد وأدوات المتابعة للمدارس والمراكز الجزائرية، بالعربية والفرنسية والإنجليزية، مع الدفع بالدينار واليورو. مهندسون ذوو خبرة في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، والخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/ecole-privee-centre-formation-inscriptions-paiements-presences-algerie-2026/', kind: 'تعليم', name: 'المدرسة الخاصة ومركز التكوين: التسجيلات والمدفوعات والحضور' },
      { href: '/blog/creer-application-salle-de-sport-algerie-2027-abonnement-acces-renouvellement/', kind: 'سلسلة #12', name: 'إنشاء تطبيق لقاعة رياضة في الجزائر سنة 2027' },
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'إنشاء سوق إلكترونية في الجزائر سنة 2027' },
      { href: '/blog/ia-education-elearning-algerie-2026/', kind: 'ذكاء اصطناعي', name: 'الذكاء الاصطناعي في التعليم بالجزائر' },
    ] },
  },
};

const KEYWORDS = "plateforme cours de soutien algérie 2027, application soutien scolaire algérie, cours particuliers algérie bac, équivalent superprof algérie, logiciel école de soutien algérie, cours d'arabe en ligne enfants diaspora, cours d'arabe en ligne france algérie, tutoring platform algeria, منصة دروس الدعم الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
