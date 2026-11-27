import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-entretien-annuel-evaluation-du-personnel-algerie-2027-objectifs-notes-de-l-annee-grille-de-criteres-calibrage-plan-de-formation.mjs';

const SLUG = 'logiciel-entretien-annuel-evaluation-du-personnel-algerie-2027-objectifs-notes-de-l-annee-grille-de-criteres-calibrage-plan-de-formation';
const FIGURES = ['notes', 'campagne', 'memoire', 'couches', 'calendrier', 'situations'];
const DATE = '2026-11-23';
const I = (x) => '⁦' + x + '⁩';

const L = {
  objectifs: '/blog/comment-fixer-des-objectifs-de-vente-algerie-2027-objectif-par-vendeur-suivi-au-jour-le-jour-rythme-necessaire-visites-devis-equipe-commerciale/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  formation: '/blog/comment-creer-une-plateforme-de-formation-en-ligne-algerie-2027-e-learning-paiement-acces-videos-protegees-quiz-certificat-suivi-des-eleves/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  recrutement: '/blog/logiciel-de-recrutement-algerie-2027-gestion-des-candidatures-tri-des-cv-doublons-convocations-entretiens-notes-reponse-a-chaque-candidat/',
  excel: '/blog/comment-creer-un-logiciel-de-gestion-en-algerie-2027-excel-ne-suffit-plus-access-sans-code-logiciel-du-marche-ou-developpe-par-ou-commencer/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  planning: '/blog/personne-ne-sait-qui-travaille-demain-planning-des-equipes-application-algerie-2027-besoins-par-creneau-contraintes-echanges-pointage/',
};

const CONTENT = {
  fr: {
    kind: 'Évaluation du personnel · Algérie · 2027', title: "Logiciel d'entretien annuel et d'évaluation du personnel en Algérie (2027) : tout le monde a « bien », les objectifs de janvier sont oubliés, les fiches sont remplies la veille ; objectifs mesurables, notes de l'année, critères décrits, calibrage, et ce qu'on met en place",
    dek: "« Chaque année en décembre, nous faisons les entretiens annuels sur une fiche Word. Tout le monde a “bien” ou “très bien”, les objectifs fixés en janvier sont oubliés, les responsables remplissent les fiches la veille, de mémoire, deux services ne notent pas du tout de la même façon, et les formations demandées restent dans un classeur. Quand il faut décider d'une promotion, nous n'avons rien de fiable. Quel logiciel pour évaluer le personnel ? » Des objectifs peu nombreux et mesurables, des faits notés toute l'année, des critères décrits par des comportements, et un calibrage entre responsables.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel d’entretien annuel', 'Évaluation du personnel', 'Objectifs et notes de l’année', 'Grille de critères et calibrage', 'Plan de formation suivi', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel d'entretien annuel conduit une campagne en six temps : des objectifs peu nombreux et mesurables en début d'année, des faits notés au fil des mois, un point de mi-année, une auto-évaluation, la note du responsable relue en calibrage avec les autres responsables, puis l'entretien et un plan suivi. Le plus difficile n'est pas la fiche : c'est qu'une note veuille dire la même chose d'un service à l'autre, et qu'elle repose sur toute l'année. Dans l'exemple de cette page, 71 % des 180 personnes ont « 4 sur 5 », les moyennes de deux responsables diffèrent de 1,5 point, et 74 % des faits cités datent des trois derniers mois.",
      "Cette page s'adresse aux entreprises de cinquante à quelques centaines de personnes, industrie, distribution, services, cliniques, écoles, en Algérie, et aux fondatrices et fondateurs de la diaspora qui dirigent une équipe ici. Les définitions viennent de sources publiques : évaluation des performances, direction par objectifs, critères SMART, échelles ancrées sur des comportements, effet de halo, biais de récence, évaluation à 360 degrés, classement forcé. L'entreprise de 180 personnes, ses notes et ses fiches sont un exemple construit. La page ne traite ni du droit du travail, ni de la paie, des primes ou des sanctions, et ne cite aucun prix.",
    ],
    sections: [
      { heading: "Tout le monde a 4 : ce que disent vos fiches de l'an dernier", body: [
        "La figure compte les notes de l'an dernier, puis la moyenne donnée par chaque responsable.",
      ], visual: 'notes', after: [
        "**L'évaluation.** L'évaluation des performances est un processus périodique où le travail d'une personne est documenté et évalué ; elle a longtemps été annuelle, et beaucoup d'entreprises passent à des cycles plus courts. **Dans l'exemple.** 180 personnes, douze responsables, une échelle de 1 à 5. L'an dernier : aucun 1, 3 notes à 2, 21 à 3, 128 à 4, 28 à 5. Soit 71 % de « 4 » et 87 % de 4 ou de 5 : la note ne distingue plus personne. **Par responsable.** La moyenne va de 3,2 à 4,7 : un écart de 1,5 point sur une échelle de cinq. À équipes comparables, le même travail vaut 3 dans un service et 4,5 dans un autre.",
        "**Ce que cela dit.** Des travaux cités dans l'article consacré à l'évaluation des performances concluent que la note mesure surtout les habitudes de celui qui note. On y lit aussi que les responsables notent parfois plus favorablement que la performance réelle, et que l'effet de halo, la bonne impression sur un point qui déteint sur tout le reste, fausse l'évaluation. **Ce que cela ne dit pas.** Qu'il faudrait un quota de mauvaises notes : le classement forcé, qui range les personnes les unes par rapport aux autres, peut conduire à des décisions biaisées, et des entreprises qui l'utilisaient l'ont abandonné. Le but est qu'une note veuille dire la même chose partout.",
      ] },
      { heading: "Une campagne, en six temps", body: [
        "La figure suit une campagne, des objectifs de janvier au plan qui suit l'entretien.",
      ], visual: 'campagne', after: [
        "**Les objectifs.** La direction par objectifs a été popularisée par Peter Drucker dans un livre de 1954 ; les critères dits SMART, proposés par George T. Doran en 1981, demandent un objectif spécifique, mesurable, attribué à quelqu'un, réaliste et daté. Dans l'exemple, sur 900 objectifs fixés en janvier, 310 avaient une mesure et une date : un sur trois. Le logiciel demande, pour chaque objectif, une mesure et une échéance, et en limite le nombre à cinq. Pour une équipe de vente, voir [les objectifs de vente](" + L.objectifs + "). **La mi-année.** Un objectif qui n'a plus de sens en juin est changé en juin, pas constaté en décembre.",
        "**L'auto-évaluation.** La personne se situe d'abord elle-même, critère par critère : l'entretien part de deux lectures, pas d'une. **La note et le calibrage.** Le responsable note ; puis les responsables relisent ensemble les cas limites, une pratique courante sous le nom de calibrage. Dans l'exemple : les notes extrêmes, 42 sur 180, et les cas où l'auto-évaluation et la note diffèrent de deux niveaux. **L'entretien et le plan.** Le compte rendu est validé par les deux ; les formations demandées et les objectifs suivants deviennent des lignes suivies, pas un paragraphe.",
      ] },
      { heading: "Une année, pas un trimestre", body: [
        "La figure compte les faits datés cités dans quarante fiches, mois par mois.",
      ], visual: 'memoire', after: [
        "**Le biais de récence.** C'est un biais cognitif qui favorise les événements récents par rapport aux plus anciens. Une fiche écrite de mémoire en décembre y est exposée par construction. **Dans l'exemple.** Quarante fiches de l'an dernier sont relues : 82 faits datés, deux par fiche, le reste étant des appréciations générales. 61 de ces faits, 74 %, datent d'octobre, novembre et décembre. Le travail de janvier à septembre pèse un quart de l'évaluation.",
        "**La note de l'année.** Un fait, une date, deux lignes, rattachés à un objectif ou à un critère : « 12 mars, a repris seul la commande d'un client en retard, livrée à la date promise ». Notre conseil : la note est dite à la personne le jour même, pas gardée pour décembre. **La charge.** Une note par personne et par mois, c'est quinze notes par mois pour un responsable de quinze personnes : moins d'une par jour ouvré. **Ce que cela change.** Dans l'exemple, les quarante fiches suivantes citent 212 faits, cinq par fiche, et les trois derniers mois n'en pèsent plus que 33 %.",
      ] },
      { heading: "Ce qu'il y a dans le logiciel", body: [
        "La figure empile cinq couches ; la deuxième, les notes de l'année, est celle que la fiche Word n'avait pas.",
      ], visual: 'couches', after: [
        "**Les critères.** Les échelles ancrées sur des comportements attachent à chaque niveau des exemples concrets de bonne, de moyenne et de mauvaise performance. Pour « respect des délais », le niveau 2 peut se lire « des retards chaque mois, signalés après coup », le niveau 4 « délais tenus, retard annoncé avant l'échéance ». Notre conseil : cinq à sept critères. **Le 360 degrés.** Ce retour de plusieurs sources, collègues, équipe, clients, est controversé comme outil de notation, pour des raisons de subjectivité et d'équité : nous le proposons pour le développement, pas pour la note.",
        "**Les droits.** Chacun voit sa fiche, le responsable celles de son équipe, les ressources humaines l'ensemble ; chaque lecture et chaque modification laissent une trace, voir [rôles, droits et journal](" + L.roles + "). **Les liens.** La liste du personnel vient de votre logiciel de paie ou de gestion du personnel, voir [intégrer un logiciel existant](" + L.integrer + ") ; les formations décidées peuvent alimenter [une plateforme de formation](" + L.formation + ") ; les fiches sont en arabe et en français, voir [une application dans les deux langues](" + L.bilingue + "). **En amont.** Les notes prises à l'embauche sont un autre sujet, voir [le logiciel de recrutement](" + L.recrutement + ").",
      ] },
      { heading: "Dix semaines, en commençant par les fiches de l'an dernier", body: [
        "Dix semaines dans l'exemple, avant d'ouvrir la campagne suivante.",
      ], visual: 'calendrier', after: [
        "**Les fiches de l'an dernier.** Deux comptages, faisables en une semaine : les notes par niveau et la moyenne par responsable ; puis quarante fiches relues, les faits datés et leur mois. Ils disent où est le problème : des notes qui ne distinguent pas, des responsables qui ne notent pas pareil, ou des fiches sans faits. **Les critères.** Ils s'écrivent avec les responsables, pas pour eux : c'est en décrivant ensemble ce qu'est un « 3 » qu'ils commencent à noter de la même façon.",
        "**Les responsables.** La formation porte sur trois gestes : noter un fait le jour même, noter sur des faits et non sur une impression, mener l'entretien. Un service fait l'essai avant les autres. **Sortir de Word.** Le passage d'un fichier à un outil suit la même logique que pour tout logiciel de gestion, voir [quand Excel ne suffit plus](" + L.excel + "). **Le suivi.** Taux d'entretiens tenus, objectifs revus à mi-année, formations faites : quelques chiffres suffisent, voir [le tableau de bord](" + L.tableau + ").",
      ] },
      { heading: "Cinq situations, et ce que le logiciel change", body: [
        "La figure reprend cinq situations, avec une fiche Word puis avec le logiciel.",
      ], visual: 'situations', after: [
        "**La promotion.** Trois années de fiches côte à côte, avec leurs faits, ne décident pas à votre place : elles évitent de décider sur le souvenir du dernier trimestre. **La formation.** Une demande faite en entretien devient une ligne : décidée ou refusée, planifiée, faite. À la campagne suivante, la fiche montre ce qu'elle est devenue. **Le planning.** L'évaluation ne dit pas qui travaille demain, voir [le planning des équipes](" + L.planning + ").",
        "**Ce que le logiciel ne fait pas.** Il ne note pas à la place du responsable, ne fixe pas de quota, et ne décide ni d'une prime ni d'une sanction : ces règles sont les vôtres, et cette page ne les traite pas. **Prêt à l'emploi ou sur mesure.** Des logiciels d'entretien annuel prêts à l'emploi existent, et beaucoup de logiciels de gestion du personnel ont un module d'évaluation ; ils conviennent quand vos fiches et votre circuit entrent dans leur modèle. Le sur-mesure se justifie quand vos critères diffèrent par métier, quand il faut l'arabe et le français, quand l'outil doit se relier à vos logiciels, et quand les fiches doivent rester chez vous.",
      ], list: [
        "**Ce que vous recevez** : des objectifs limités en nombre, avec mesure et échéance ; les notes de l'année rattachées aux objectifs et aux critères ; le point de mi-année ; l'auto-évaluation ; des critères décrits par des comportements ; la répartition des notes et la moyenne par responsable pour le calibrage ; le compte rendu validé par les deux ; le suivi des formations demandées.",
        "**Ce que l'entreprise évite** : la note que tout le monde a, l'écart d'un point et demi entre deux responsables, la fiche écrite la veille, l'objectif redécouvert en décembre, la formation qui reste dans un classeur, la promotion décidée sur le dernier trimestre.",
        "**Ce qui est mesuré** : répartition des notes et moyenne par responsable ; faits datés par fiche et part des trois derniers mois ; objectifs avec mesure et échéance ; objectifs revus à mi-année ; entretiens tenus à la date prévue ; formations demandées, décidées, faites.",
        "**Ce que fait Symloop** : les deux comptages sur vos fiches de l'an dernier, les critères écrits avec vos responsables, le format des objectifs, les fiches et leur circuit, les droits, les notes de l'année sur mobile, le calibrage, le suivi du plan, le lien avec vos logiciels, en arabe et en français.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel d'entretien annuel ?", a: "Un outil qui conduit la campagne d'évaluation : objectifs, notes prises dans l'année, point de mi-année, auto-évaluation, note du responsable, calibrage, compte rendu d'entretien et suivi du plan, avec l'historique année après année." },
        { q: "Comment évaluer le personnel d'une entreprise ?", a: "Sur des objectifs peu nombreux et mesurables, et sur des critères décrits par des comportements, à partir de faits notés toute l'année. Puis en relisant entre responsables les cas limites, pour qu'une note veuille dire la même chose partout." },
        { q: "Une fiche d'évaluation Word ou Excel suffit-elle ?", a: "Pour une petite équipe notée par une seule personne, souvent. À plusieurs responsables, il lui manque les faits de l'année, la comparaison entre responsables, le rappel de mi-année et le suivi de ce qui a été décidé." },
        { q: "Pourquoi tout le monde a-t-il la même note ?", a: "Souvent parce que des niveaux non décrits laissent chacun noter à sa façon, et qu'une note moyenne ou généreuse évite une discussion difficile. Des critères décrits par des comportements et un calibrage réduisent cet effet." },
        { q: "Que doit contenir une grille d'évaluation du personnel ?", a: "Cinq à sept critères, et pour chaque niveau de l'échelle un comportement observable. Plus les objectifs de l'année, chacun avec sa mesure et son échéance." },
        { q: "Qu'est-ce que le calibrage ?", a: "Une réunion où les responsables relisent ensemble les cas limites, critère par critère, avant l'entretien. Elle ne fixe pas de quota : elle aligne ce que veut dire chaque note." },
        { q: "Combien d'objectifs par personne ?", a: "Trois à cinq, chacun avec une mesure et une échéance. Dans l'exemple, un objectif sur trois seulement en avait." },
        { q: "Faut-il un entretien par an ou plus souvent ?", a: "Beaucoup d'entreprises raccourcissent le cycle. Un point de mi-année et des notes au fil des mois donnent déjà l'essentiel : l'entretien annuel n'a plus rien à découvrir." },
        { q: "Qui voit les évaluations ?", a: "Chacun voit sa fiche, le responsable celles de son équipe, les ressources humaines l'ensemble. Chaque consultation et chaque modification sont tracées." },
        { q: "Par quoi commencer ?", a: "Par les fiches de l'an dernier : compter les notes par niveau et par responsable, puis relire quarante fiches et compter les faits datés." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Quand tout le monde a 4, la note ne dit plus rien ; quand deux responsables notent à un point et demi d'écart, elle dit surtout qui a noté." },
      { after: 2, text: "Un entretien annuel écrit de mémoire juge un trimestre, pas une année." },
    ],
    cta: { eyebrow: "Dites-nous combien de personnes vous évaluez, sur quelle fiche, et ce que donnent vos notes de l'an dernier : nous commençons par les compter", title: "Tout le monde a « bien », objectifs oubliés, fiches remplies la veille, deux services qui ne notent pas pareil, formations jamais suivies, ou équipe que vous dirigez en Algérie depuis la France", body: "Symloop construit le logiciel d'entretien annuel qui correspond à votre entreprise : objectifs mesurables, notes de l'année, critères décrits, calibrage, compte rendu, plan suivi. Décrivez-nous vos fiches actuelles, vos métiers et vos logiciels." },
    related: { label: 'À lire aussi', items: [
      { href: L.recrutement, kind: '2027', name: 'Logiciel de recrutement : candidatures, entretiens, notes' },
      { href: L.objectifs, kind: '2027', name: 'Objectifs de vente : objectif par vendeur, suivi au jour le jour' },
      { href: L.planning, kind: '2027', name: 'Planning des équipes : besoins par créneau, contraintes, échanges' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi' },
    ] },
  },
  en: {
    kind: 'Staff appraisal · Algeria · 2027', title: "Yearly appraisal and staff evaluation software in Algeria (2027): everyone gets “good”, January's objectives are forgotten, forms are filled in the day before; measurable objectives, notes of the year, described criteria, calibration, and what we put in place",
    dek: "“Every December we hold the yearly appraisals on a Word form. Everyone gets ‘good’ or ‘very good’, the objectives set in January are forgotten, managers fill in the forms the day before, from memory, two departments do not mark the same way at all, and the training requested stays in a binder. When a promotion has to be decided, we have nothing reliable. Which software do we need to appraise staff?” A few measurable objectives, facts noted all year, criteria described by behaviours, and calibration between managers.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Yearly appraisal software', 'Staff evaluation', 'Objectives and notes of the year', 'Criteria grid and calibration', 'Training plan that is followed', 'Algeria 2027'],
    intro: [
      "**Short answer.** Yearly appraisal software runs a campaign in six steps: a few measurable objectives at the start of the year, facts noted month after month, a mid-year review, a self-assessment, the manager's mark reread in calibration with the other managers, then the interview and a plan that is followed. The hard part is not the form: it is that a mark means the same thing from one department to another, and that it rests on the whole year. In this page's example, 71% of the 180 people get “4 out of 5”, the averages of two managers differ by 1.5 points, and 74% of the facts quoted date from the last three months.",
      "This page is for companies of fifty to a few hundred people, industry, distribution, services, clinics, schools, in Algeria, and for diaspora founders who lead a team here. The definitions come from public sources: performance appraisal, management by objectives, SMART criteria, behaviourally anchored rating scales, halo effect, recency bias, 360-degree feedback, forced ranking. The company of 180 people, its marks and its forms are a constructed example. The page covers neither labour law nor pay, bonuses or sanctions, and quotes no price.",
    ],
    sections: [
      { heading: "Everyone gets 4: what last year's forms say", body: [
        "The figure counts last year's marks, then the average given by each manager.",
      ], visual: 'notes', after: [
        "**Appraisal.** Performance appraisal is a periodic process in which a person's work is documented and evaluated; it was long done yearly, and many companies are moving to shorter cycles. **In the example.** 180 people, twelve managers, a scale from 1 to 5. Last year: no 1, 3 marks at 2, 21 at 3, 128 at 4, 28 at 5. That is 71% of “4” and 87% of 4 or 5: the mark no longer tells anyone apart. **By manager.** The average runs from 3.2 to 4.7: 1.5 points apart on a five-point scale. With comparable teams, the same work is worth 3 in one department and 4.5 in another.",
        "**What this says.** Studies cited in the article on performance appraisal conclude that the mark mostly measures the habits of the person marking. It also says that managers sometimes rate more favourably than the real performance, and that the halo effect, a good impression on one point that spreads to everything else, distorts the appraisal. **What it does not say.** That a quota of bad marks is needed: forced ranking, which ranks people against one another, may lead to biased decisions, and companies that used it have dropped it. The aim is for a mark to mean the same thing everywhere.",
      ] },
      { heading: "A campaign, in six steps", body: [
        "The figure follows a campaign, from January's objectives to the plan that follows the interview.",
      ], visual: 'campagne', after: [
        "**Objectives.** Management by objectives was popularised by Peter Drucker in a 1954 book; the SMART criteria, proposed by George T. Doran in 1981, ask for an objective that is specific, measurable, assigned to someone, realistic and dated. In the example, of 900 objectives set in January, 310 had a measure and a date: one in three. The software asks, for each objective, for a measure and a deadline, and limits their number to five. For a sales team, see [sales targets](" + L.objectifs + "). **Mid-year.** An objective that no longer makes sense in June is changed in June, not noticed in December.",
        "**Self-assessment.** The person first places themself, criterion by criterion: the interview starts from two readings, not one. **Mark and calibration.** The manager marks; then the managers reread the borderline cases together, a common practice known as calibration. In the example: the extreme marks, 42 out of 180, and the cases where the self-assessment and the mark differ by two levels. **Interview and plan.** The record is validated by both; the training requested and the next objectives become lines that are followed, not a paragraph.",
      ] },
      { heading: "A year, not a quarter", body: [
        "The figure counts the dated facts quoted in forty forms, month by month.",
      ], visual: 'memoire', after: [
        "**Recency bias.** It is a cognitive bias that favours recent events over older ones. A form written from memory in December is exposed to it by construction. **In the example.** Forty of last year's forms are reread: 82 dated facts, two per form, the rest being general appreciations. 61 of those facts, 74%, date from October, November and December. The work from January to September weighs a quarter of the appraisal.",
        "**The note of the year.** One fact, one date, two lines, attached to an objective or a criterion: “12 March, took over a late customer order alone, delivered on the promised date”. Our advice: the note is said to the person the same day, not kept for December. **The workload.** One note per person per month means fifteen notes a month for a manager of fifteen people: less than one per working day. **What this changes.** In the example, the next forty forms quote 212 facts, five per form, and the last three months weigh only 33% of them.",
      ] },
      { heading: "What is inside the software", body: [
        "The figure stacks five layers; the second, the notes of the year, is the one the Word form did not have.",
      ], visual: 'couches', after: [
        "**Criteria.** Behaviourally anchored rating scales attach to each level concrete examples of good, moderate and poor performance. For “meeting deadlines”, level 2 may read “delays every month, reported after the fact”, level 4 “deadlines met, a delay announced before the due date”. Our advice: five to seven criteria. **360 degrees.** This feedback from several sources, colleagues, team, customers, is controversial as a marking tool, over concerns about subjectivity and fairness: we offer it for development, not for the mark.",
        "**Rights.** Each person sees their own form, the manager those of their team, human resources the whole; every reading and every change leaves a trace, see [roles, rights and audit log](" + L.roles + "). **Links.** The staff list comes from your payroll or personnel software, see [integrating existing software](" + L.integrer + "); the training decided can feed [a training platform](" + L.formation + "); the forms are in Arabic and French, see [an application in both languages](" + L.bilingue + "). **Upstream.** The notes taken at hiring are another subject, see [recruitment software](" + L.recrutement + ").",
      ] },
      { heading: "Ten weeks, starting with last year's forms", body: [
        "Ten weeks in the example, before opening the next campaign.",
      ], visual: 'calendrier', after: [
        "**Last year's forms.** Two counts, doable in a week: the marks by level and the average per manager; then forty forms reread, the dated facts and their month. They say where the problem is: marks that tell nobody apart, managers who do not mark alike, or forms with no facts. **Criteria.** They are written with the managers, not for them: it is by describing together what a “3” is that they start marking the same way.",
        "**Managers.** Training covers three habits: noting a fact the same day, marking on facts and not on an impression, leading the interview. One department runs the trial before the others. **Leaving Word.** Moving from a file to a tool follows the same logic as for any business software, see [when Excel is no longer enough](" + L.excel + "). **Follow-up.** Share of interviews held, objectives reviewed at mid-year, training done: a few figures are enough, see [the dashboard](" + L.tableau + ").",
      ] },
      { heading: "Five situations, and what the software changes", body: [
        "The figure takes five situations, with a Word form and then with the software.",
      ], visual: 'situations', after: [
        "**Promotion.** Three years of forms side by side, with their facts, do not decide for you: they keep you from deciding on the memory of the last quarter. **Training.** A request made in the interview becomes a line: accepted or refused, planned, done. At the next campaign, the form shows what became of it. **Scheduling.** Appraisal does not say who works tomorrow, see [team scheduling](" + L.planning + ").",
        "**What the software does not do.** It does not mark in the manager's place, sets no quota, and decides neither a bonus nor a sanction: those rules are yours, and this page does not cover them. **Off the shelf or custom.** Ready-made yearly appraisal software exists, and many personnel management packages have an appraisal module; they fit when your forms and your process fit their model. Custom work is justified when your criteria differ by trade, when Arabic and French are needed, when the tool must connect to your software, and when the forms must stay on your side.",
      ], list: [
        "**What you receive**: objectives limited in number, with a measure and a deadline; the notes of the year attached to objectives and criteria; the mid-year review; self-assessment; criteria described by behaviours; the distribution of marks and the average per manager for calibration; the record validated by both; follow-up of the training requested.",
        "**What the company avoids**: the mark everybody gets, the point and a half between two managers, the form written the day before, the objective rediscovered in December, the training that stays in a binder, the promotion decided on the last quarter.",
        "**What is measured**: distribution of marks and average per manager; dated facts per form and share of the last three months; objectives with a measure and a deadline; objectives reviewed at mid-year; interviews held on the planned date; training requested, decided, done.",
        "**What Symloop does**: the two counts on your forms from last year, the criteria written with your managers, the format of objectives, the forms and their workflow, the rights, the notes of the year on mobile, calibration, follow-up of the plan, the link with your software, in Arabic and French.",
      ], faq: [
        { q: "What is yearly appraisal software?", a: "A tool that runs the appraisal campaign: objectives, notes taken during the year, mid-year review, self-assessment, manager's mark, calibration, interview record and follow-up of the plan, with the history year after year." },
        { q: "How do you appraise the staff of a company?", a: "On a few measurable objectives and on criteria described by behaviours, from facts noted all year. Then by having managers reread the borderline cases together, so that a mark means the same thing everywhere." },
        { q: "Is a Word or Excel appraisal form enough?", a: "For a small team marked by one person, often. With several managers, it lacks the facts of the year, the comparison between managers, the mid-year reminder and the follow-up of what was decided." },
        { q: "Why does everyone get the same mark?", a: "Often because levels that are not described let everyone mark their own way, and because an average or generous mark avoids a difficult discussion. Criteria described by behaviours and calibration reduce this effect." },
        { q: "What should a staff appraisal grid contain?", a: "Five to seven criteria, and for each level of the scale an observable behaviour. Plus the objectives of the year, each with its measure and its deadline." },
        { q: "What is calibration?", a: "A meeting where managers reread the borderline cases together, criterion by criterion, before the interview. It sets no quota: it aligns what each mark means." },
        { q: "How many objectives per person?", a: "Three to five, each with a measure and a deadline. In the example, only one objective in three had them." },
        { q: "One appraisal a year, or more often?", a: "Many companies are shortening the cycle. A mid-year review and notes month after month already give the essential: the yearly interview has nothing left to discover." },
        { q: "Who sees the appraisals?", a: "Each person sees their own form, the manager those of their team, human resources the whole. Every consultation and every change is recorded." },
        { q: "Where do we start?", a: "With last year's forms: count the marks by level and by manager, then reread forty forms and count the dated facts." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "When everyone gets 4, the mark says nothing; when two managers are a point and a half apart, it mostly says who gave it." },
      { after: 2, text: "A yearly appraisal written from memory judges a quarter, not a year." },
    ],
    cta: { eyebrow: "Tell us how many people you appraise, on which form, and what last year's marks look like: we start by counting them", title: "Everyone gets “good”, forgotten objectives, forms filled in the day before, two departments that do not mark alike, training never followed, or a team you lead in Algeria from France", body: "Symloop builds the yearly appraisal software that fits your company: measurable objectives, notes of the year, described criteria, calibration, interview record, a plan that is followed. Describe your current forms, your trades and your software." },
    related: { label: 'Also read', items: [
      { href: L.recrutement, kind: '2027', name: 'Recruitment software: applications, interviews, marks' },
      { href: L.objectifs, kind: '2027', name: 'Sales targets: a target per salesperson, day-by-day tracking' },
      { href: L.planning, kind: '2027', name: 'Team scheduling: needs per slot, constraints, swaps' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log: who sees what' },
    ] },
  },
  ar: {
    kind: 'تقييم الموظفين · الجزائر · 2027', title: "برنامج المقابلة السنوية وتقييم الموظفين في الجزائر (2027): الكل ينال «جيد»، أهداف جانفي منسية، والبطاقات تُملأ في الليلة السابقة؛ أهداف قابلة للقياس، ملاحظات السنة، معايير موصوفة، معايرة، وما نضعه",
    dek: "«كل سنة في ديسمبر، نجري المقابلات السنوية على بطاقة ورقية. الكل ينال “جيد” أو “جيد جداً”، الأهداف المحددة في جانفي منسية، المسؤولون يملؤون البطاقات في الليلة السابقة، من الذاكرة، مصلحتان لا تنقّطان بالطريقة نفسها إطلاقاً، والتكوينات المطلوبة تبقى في حافظة. وحين يجب أن نقرر ترقية، لا نملك شيئاً موثوقاً. أي برنامج لتقييم الموظفين؟» أهداف قليلة وقابلة للقياس، وقائع تُدوَّن طوال السنة، معايير موصوفة بسلوكات، ومعايرة بين المسؤولين.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج المقابلة السنوية', 'تقييم الموظفين', 'الأهداف وملاحظات السنة', 'شبكة المعايير والمعايرة', 'خطة تكوين متابَعة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج المقابلة السنوية يقود حملة في ست مراحل: أهداف قليلة وقابلة للقياس في بداية السنة، وقائع تُدوَّن على مرّ الأشهر، مراجعة في منتصف السنة، تقييم ذاتي، علامة المسؤول التي تُعاد قراءتها في معايرة مع المسؤولين الآخرين، ثم المقابلة وخطة متابَعة. الأصعب ليس البطاقة: بل أن تعني العلامة الشيء نفسه من مصلحة إلى أخرى، وأن تستند إلى السنة كلها. في مثال هذه الصفحة، 71 بالمئة من 180 شخصاً نالوا «4 من 5»، ومتوسطا مسؤولَين يختلفان بنقطة ونصف، و74 بالمئة من الوقائع المذكورة تعود إلى الأشهر الثلاثة الأخيرة.",
      "هذه الصفحة موجّهة إلى المؤسسات من خمسين إلى بضع مئات من الأشخاص، الصناعة، التوزيع، الخدمات، العيادات، والمدارس، في الجزائر، وإلى مؤسِّسات ومؤسِّسي الجالية الذين يديرون فريقاً هنا. التعريفات من مصادر عمومية: تقييم الأداء، الإدارة بالأهداف، معايير " + I('SMART') + "، السلالم المرتكزة على السلوكات، أثر الهالة، انحياز الحداثة، التقييم من عدة مصادر، والترتيب الإجباري. والمؤسسة من 180 شخصاً، علاماتها، وبطاقاتها مثال مركَّب. والصفحة لا تتناول قانون العمل، ولا الأجور والمنح والعقوبات، ولا تذكر أي سعر.",
    ],
    sections: [
      { heading: "الكل ينال 4: ما تقوله بطاقات السنة الماضية", body: [
        "الشكل يعدّ علامات السنة الماضية، ثم المتوسط الذي أعطاه كل مسؤول.",
      ], visual: 'notes', after: [
        "**التقييم.** تقييم الأداء مسار دوري يُوثَّق فيه عمل الشخص ويُقيَّم؛ وقد كان سنوياً لزمن طويل، ومؤسسات كثيرة تنتقل إلى دورات أقصر. **في المثال.** 180 شخصاً، اثنا عشر مسؤولاً، وسلّم من 1 إلى 5. السنة الماضية: لا أحد نال 1، 3 علامات عند 2، 21 عند 3، 128 عند 4، و28 عند 5. أي 71 بالمئة نالوا «4» و87 بالمئة نالوا 4 أو 5: العلامة لم تعد تميّز أحداً. **لكل مسؤول.** المتوسط يذهب من " + I('3,2') + " إلى " + I('4,7') + ": فارق نقطة ونصف على سلّم من خمس. وبين فرق متقاربة، العمل نفسه يساوي 3 في مصلحة و" + I('4,5') + " في أخرى.",
        "**ما يقوله هذا.** أعمال مذكورة في المقال المخصَّص لتقييم الأداء تخلص إلى أن العلامة تقيس خصوصاً عادات من ينقّط. ونقرأ فيه أيضاً أن المسؤولين ينقّطون أحياناً بأفضل من الأداء الحقيقي، وأن أثر الهالة، أي الانطباع الجيد عن نقطة واحدة الذي يمتد إلى الباقي، يشوّه التقييم. **ما لا يقوله.** أنه يجب تحديد حصة من العلامات السيئة: الترتيب الإجباري، الذي يرتّب الأشخاص بعضهم بالنسبة إلى بعض، قد يقود إلى قرارات منحازة، ومؤسسات كانت تستعمله تخلّت عنه. الغاية أن تعني العلامة الشيء نفسه في كل مكان.",
      ] },
      { heading: "حملة، في ست مراحل", body: [
        "الشكل يتابع حملة، من أهداف جانفي إلى الخطة التي تلي المقابلة.",
      ], visual: 'campagne', after: [
        "**الأهداف.** الإدارة بالأهداف عرّف بها " + I('Peter Drucker') + " في كتاب صدر سنة 1954؛ ومعايير " + I('SMART') + "، التي اقترحها " + I('George T. Doran') + " سنة 1981، تطلب هدفاً محدداً، قابلاً للقياس، مسنداً إلى شخص، واقعياً، ومؤرَّخاً. في المثال، من 900 هدف حُدِّدت في جانفي، 310 كان لها قياس وتاريخ: واحد من ثلاثة. والبرنامج يطلب لكل هدف قياساً وأجلاً، ويحدّ عددها بخمسة. ولفريق بيع، انظر [أهداف البيع](" + L.objectifs + "). **منتصف السنة.** الهدف الذي لم يعد له معنى في جوان يُغيَّر في جوان، لا يُعايَن في ديسمبر.",
        "**التقييم الذاتي.** الشخص يحدد موقعه أولاً بنفسه، معياراً بمعيار: المقابلة تنطلق من قراءتين، لا من واحدة. **العلامة والمعايرة.** المسؤول ينقّط؛ ثم يعيد المسؤولون معاً قراءة الحالات الحدّية، وهي ممارسة شائعة تُسمّى المعايرة. في المثال: العلامات القصوى، 42 من 180، والحالات التي يختلف فيها التقييم الذاتي عن العلامة بمستويين. **المقابلة والخطة.** المحضر يصادق عليه الطرفان؛ والتكوينات المطلوبة والأهداف القادمة تصير سطوراً متابَعة، لا فقرة.",
      ] },
      { heading: "سنة كاملة، لا فصل واحد", body: [
        "الشكل يعدّ الوقائع المؤرَّخة المذكورة في أربعين بطاقة، شهراً بشهر.",
      ], visual: 'memoire', after: [
        "**انحياز الحداثة.** هو انحياز معرفي يفضّل الأحداث الحديثة على الأقدم منها. والبطاقة المكتوبة من الذاكرة في ديسمبر معرَّضة له بطبيعتها. **في المثال.** أُعيدت قراءة أربعين بطاقة من السنة الماضية: 82 واقعة مؤرَّخة، اثنتان في البطاقة، والباقي تقديرات عامة. 61 من هذه الوقائع، أي 74 بالمئة، تعود إلى أكتوبر، نوفمبر، وديسمبر. عمل جانفي إلى سبتمبر يزن ربع التقييم.",
        "**ملاحظة السنة.** واقعة، تاريخ، وسطران، مربوطة بهدف أو بمعيار: «12 مارس، تكفّل وحده بطلبية زبون متأخرة، وسُلِّمت في التاريخ الموعود». نصيحتنا: الملاحظة تُقال للشخص في اليوم نفسه، ولا تُحفَظ لديسمبر. **العبء.** ملاحظة لكل شخص في الشهر، أي خمس عشرة ملاحظة في الشهر لمسؤول عن خمسة عشر شخصاً: أقل من واحدة في يوم العمل. **ما يغيّره هذا.** في المثال، البطاقات الأربعون التالية تذكر 212 واقعة، خمساً في البطاقة، والأشهر الثلاثة الأخيرة لا تزن فيها أكثر من 33 بالمئة.",
      ] },
      { heading: "ما يوجد في البرنامج", body: [
        "الشكل يرصّ خمس طبقات؛ والثانية، ملاحظات السنة، هي التي لم تكن في البطاقة الورقية.",
      ], visual: 'couches', after: [
        "**المعايير.** السلالم المرتكزة على السلوكات تربط بكل مستوى أمثلة ملموسة عن أداء جيد، متوسط، وضعيف. ففي «احترام الآجال»، قد يُقرأ المستوى 2 «تأخرات كل شهر، يُبلَّغ عنها بعد وقوعها»، والمستوى 4 «آجال محترمة، والتأخر يُعلَن قبل الأجل». ونصيحتنا: خمسة إلى سبعة معايير. **التقييم من عدة مصادر.** هذا الرأي الآتي من الزملاء، الفريق، والزبائن، مثير للجدل كأداة تنقيط، لأسباب تخص الذاتية والإنصاف: نقترحه للتطوير، لا للعلامة.",
        "**الصلاحيات.** كل شخص يرى بطاقته، المسؤول يرى بطاقات فريقه، والموارد البشرية ترى الكل؛ وكل قراءة وكل تعديل يتركان أثراً، انظر [الأدوار، الصلاحيات، والسجل](" + L.roles + "). **الروابط.** قائمة الموظفين تأتي من برنامج الأجور أو تسيير الموظفين عندكم، انظر [ربط برنامج موجود](" + L.integrer + ")؛ والتكوينات المقرَّرة يمكن أن تغذّي [منصة تكوين](" + L.formation + ")؛ والبطاقات بالعربية والفرنسية، انظر [تطبيق باللغتين](" + L.bilingue + "). **قبل ذلك.** العلامات المدوَّنة عند التوظيف موضوع آخر، انظر [برنامج التوظيف](" + L.recrutement + ").",
      ] },
      { heading: "عشرة أسابيع، بدءاً ببطاقات السنة الماضية", body: [
        "عشرة أسابيع في المثال، قبل فتح الحملة القادمة.",
      ], visual: 'calendrier', after: [
        "**بطاقات السنة الماضية.** عدّان يمكن إنجازهما في أسبوع: العلامات حسب المستوى والمتوسط لكل مسؤول؛ ثم إعادة قراءة أربعين بطاقة، وعدّ الوقائع المؤرَّخة وشهرها. وهما يقولان أين المشكل: علامات لا تميّز، مسؤولون لا ينقّطون بالطريقة نفسها، أو بطاقات دون وقائع. **المعايير.** تُكتَب مع المسؤولين، لا من أجلهم: حين يصفون معاً ما هو «3»، يبدؤون في التنقيط بالطريقة نفسها.",
        "**المسؤولون.** التكوين يخص ثلاث حركات: تدوين واقعة في يومها، التنقيط على وقائع لا على انطباع، وإدارة المقابلة. ومصلحة واحدة تجرّب قبل الأخرى. **الخروج من الملف.** الانتقال من ملف إلى أداة يتبع المنطق نفسه لكل برنامج تسيير، انظر [حين لا يكفي الجدول](" + L.excel + "). **المتابعة.** نسبة المقابلات المنجَزة، الأهداف المراجَعة في منتصف السنة، والتكوينات المنجَزة: بضعة أرقام تكفي، انظر [لوحة القيادة](" + L.tableau + ").",
      ] },
      { heading: "خمس حالات، وما يغيّره البرنامج", body: [
        "الشكل يأخذ خمس حالات، مع بطاقة ورقية ثم مع البرنامج.",
      ], visual: 'situations', after: [
        "**الترقية.** ثلاث سنوات من البطاقات جنباً إلى جنب، مع وقائعها، لا تقرّر مكانكم: تجنّبكم أن تقرّروا على ذكرى الفصل الأخير. **التكوين.** الطلب المقدَّم في المقابلة يصير سطراً: مقبول أو مرفوض، مبرمَج، ثم منجَز. وفي الحملة القادمة، تُظهر البطاقة ما آل إليه. **التخطيط.** التقييم لا يقول من يعمل غداً، انظر [تخطيط الفرق](" + L.planning + ").",
        "**ما لا يفعله البرنامج.** لا ينقّط مكان المسؤول، لا يحدد حصصاً، ولا يقرّر منحة ولا عقوبة: هذه القواعد قواعدكم، وهذه الصفحة لا تتناولها. **جاهز أم على المقاس.** توجد برامج جاهزة للمقابلة السنوية، وكثير من برامج تسيير الموظفين فيها وحدة للتقييم؛ وهي مناسبة حين تدخل بطاقاتكم ومساركم في نموذجها. والتطوير على المقاس مبرَّر حين تختلف معاييركم حسب المهنة، حين تلزم العربية والفرنسية، حين يجب ربط الأداة ببرامجكم، وحين يجب أن تبقى البطاقات عندكم.",
      ], list: [
        "**ما تتسلّمونه**: أهداف محدودة العدد، بقياس وأجل؛ ملاحظات السنة مربوطة بالأهداف والمعايير؛ مراجعة منتصف السنة؛ التقييم الذاتي؛ معايير موصوفة بسلوكات؛ توزيع العلامات والمتوسط لكل مسؤول من أجل المعايرة؛ محضر يصادق عليه الطرفان؛ ومتابعة التكوينات المطلوبة.",
        "**ما تتجنّبه المؤسسة**: العلامة التي ينالها الجميع، فارق نقطة ونصف بين مسؤولَين، البطاقة المكتوبة في الليلة السابقة، الهدف الذي يُكتشَف من جديد في ديسمبر، التكوين الذي يبقى في حافظة، والترقية المقرَّرة على الفصل الأخير.",
        "**ما يُقاس**: توزيع العلامات والمتوسط لكل مسؤول؛ الوقائع المؤرَّخة في كل بطاقة وحصة الأشهر الثلاثة الأخيرة؛ الأهداف التي لها قياس وأجل؛ الأهداف المراجَعة في منتصف السنة؛ المقابلات المنجَزة في تاريخها؛ والتكوينات المطلوبة، المقرَّرة، والمنجَزة.",
        "**ما تفعله Symloop**: العدّان على بطاقات السنة الماضية، المعايير المكتوبة مع مسؤوليكم، صيغة الأهداف، البطاقات ومسارها، الصلاحيات، ملاحظات السنة على الهاتف، المعايرة، متابعة الخطة، والربط ببرامجكم، بالعربية والفرنسية.",
      ], faq: [
        { q: "ما هو برنامج المقابلة السنوية؟", a: "أداة تقود حملة التقييم: الأهداف، الملاحظات المدوَّنة خلال السنة، مراجعة منتصف السنة، التقييم الذاتي، علامة المسؤول، المعايرة، محضر المقابلة، ومتابعة الخطة، مع السجل سنة بعد سنة." },
        { q: "كيف يُقيَّم موظفو مؤسسة؟", a: "على أهداف قليلة وقابلة للقياس، وعلى معايير موصوفة بسلوكات، انطلاقاً من وقائع تُدوَّن طوال السنة. ثم بإعادة قراءة الحالات الحدّية بين المسؤولين، حتى تعني العلامة الشيء نفسه في كل مكان." },
        { q: "هل تكفي بطاقة تقييم في ملف أو جدول؟", a: "لفريق صغير ينقّطه شخص واحد، غالباً. ومع عدة مسؤولين، ينقصها وقائع السنة، المقارنة بين المسؤولين، تذكير منتصف السنة، ومتابعة ما تقرَّر." },
        { q: "لماذا ينال الجميع العلامة نفسها؟", a: "غالباً لأن المستويات غير الموصوفة تترك كل واحد ينقّط بطريقته، ولأن علامة متوسطة أو سخية تجنّب نقاشاً صعباً. والمعايير الموصوفة بسلوكات والمعايرة تخففان هذا الأثر." },
        { q: "ماذا يجب أن تحتوي شبكة تقييم الموظفين؟", a: "خمسة إلى سبعة معايير، ولكل مستوى في السلّم سلوك يمكن ملاحظته. ومعها أهداف السنة، كل واحد بقياسه وأجله." },
        { q: "ما هي المعايرة؟", a: "اجتماع يعيد فيه المسؤولون معاً قراءة الحالات الحدّية، معياراً بمعيار، قبل المقابلة. لا تحدد حصصاً: توحّد ما تعنيه كل علامة." },
        { q: "كم هدفاً لكل شخص؟", a: "ثلاثة إلى خمسة، كل واحد بقياس وأجل. في المثال، هدف واحد من ثلاثة فقط كان له ذلك." },
        { q: "مقابلة واحدة في السنة أم أكثر؟", a: "مؤسسات كثيرة تقصّر الدورة. ومراجعة في منتصف السنة وملاحظات على مرّ الأشهر تعطيان الأهم: المقابلة السنوية لا يبقى لها ما تكتشفه." },
        { q: "من يرى التقييمات؟", a: "كل شخص يرى بطاقته، المسؤول يرى بطاقات فريقه، والموارد البشرية ترى الكل. وكل اطلاع وكل تعديل مسجَّلان." },
        { q: "بماذا يُبدأ؟", a: "ببطاقات السنة الماضية: عدّ العلامات حسب المستوى وحسب المسؤول، ثم إعادة قراءة أربعين بطاقة وعدّ الوقائع المؤرَّخة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "حين ينال الكل 4، لا تقول العلامة شيئاً؛ وحين يختلف مسؤولان بنقطة ونصف، تقول خصوصاً من الذي نقّط." },
      { after: 2, text: "المقابلة السنوية المكتوبة من الذاكرة تحكم على فصل، لا على سنة." },
    ],
    cta: { eyebrow: "قولوا لنا كم شخصاً تقيّمون، على أي بطاقة، وما تعطيه علامات السنة الماضية: نبدأ بعدّها", title: "الكل ينال «جيد»، أهداف منسية، بطاقات تُملأ في الليلة السابقة، مصلحتان لا تنقّطان بالطريقة نفسها، تكوينات لا تُتابَع، أو فريق تديرونه في الجزائر من فرنسا", body: "Symloop تبني برنامج المقابلة السنوية الذي يناسب مؤسستكم: أهداف قابلة للقياس، ملاحظات السنة، معايير موصوفة، معايرة، محضر، وخطة متابَعة. صِفوا لنا بطاقاتكم الحالية، مهنكم، وبرامجكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.recrutement, kind: '2027', name: 'برنامج التوظيف: الترشيحات، المقابلات، والعلامات' },
      { href: L.objectifs, kind: '2027', name: 'أهداف البيع: هدف لكل بائع، ومتابعة يومية' },
      { href: L.planning, kind: '2027', name: 'تخطيط الفرق: الحاجات لكل فترة، القيود، والتبادلات' },
      { href: L.roles, kind: '2027', name: 'الأدوار، الصلاحيات، وسجل التدقيق: من يرى ماذا' },
    ] },
  },
};

const KEYWORDS = "logiciel entretien annuel, logiciel entretien annuel algérie 2027, logiciel d'évaluation du personnel, logiciel entretien annuel d'évaluation, application entretien annuel, logiciel rh entretien annuel, comment évaluer le personnel d'une entreprise, comment évaluer un employé, comment évaluer la performance d'un employé, grille d'évaluation du personnel, fiche d'évaluation du personnel, critères d'évaluation du personnel, entretien annuel d'évaluation, évaluation des performances du personnel, logiciel gestion des compétences, logiciel rh algérie, performance appraisal software, employee evaluation software, performance review software Algeria, برنامج تقييم الموظفين, تقييم أداء الموظفين, نموذج تقييم الموظفين, برنامج تقييم أداء الموظفين, المقابلة السنوية, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
