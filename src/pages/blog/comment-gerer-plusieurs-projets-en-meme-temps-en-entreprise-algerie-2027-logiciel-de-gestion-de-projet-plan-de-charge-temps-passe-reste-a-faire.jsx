import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-gerer-plusieurs-projets-en-meme-temps-en-entreprise-algerie-2027-logiciel-de-gestion-de-projet-plan-de-charge-temps-passe-reste-a-faire.mjs';

const SLUG = 'comment-gerer-plusieurs-projets-en-meme-temps-en-entreprise-algerie-2027-logiciel-de-gestion-de-projet-plan-de-charge-temps-passe-reste-a-faire';
const FIGURES = ['mesures', 'couches', 'vie', 'charge', 'atterrissage', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  btp: '/blog/logiciel-entreprise-batiment-btp-algerie-2027-devis-metre-suivi-de-chantier-situations-de-travaux-achats-pointage-marge-par-chantier/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  crm: '/blog/logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux/',
  tresorerie: '/blog/comment-gerer-la-tresorerie-d-une-entreprise-algerie-2027-rentable-et-compte-vide-plan-sur-13-semaines-echeances-clients-fournisseurs-cycle/',
  rentab: '/blog/comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil/',
  equipes: '/blog/personne-ne-sait-qui-travaille-demain-planning-des-equipes-application-algerie-2027-besoins-par-creneau-contraintes-echanges-pointage/',
  espace: '/blog/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
};

const CONTENT = {
  fr: {
    kind: 'Gestion de projets · Algérie · 2027', title: "Comment gérer plusieurs projets en même temps en Algérie (2027) : tous sont « à 90 % » depuis un mois, les mêmes personnes sont demandées partout, les heures se découvrent à la facture ; plan de charge, temps passé, atterrissage, et ce qu'on met en place",
    dek: "« Nous sommes huit, dont cinq sur les projets, et nous en menons onze à la fois. Dans mon tableau, tous sont à 90 % depuis un mois. Les mêmes personnes sont demandées partout, on promet des dates qu'on ne tient pas, et je découvre à la facture qu'un projet a mangé près d'une fois et demie les heures vendues. Comment gérer plusieurs projets en même temps ? Existe-t-il un logiciel de gestion de projet pour une entreprise comme la nôtre ? » Onze projets ne se pilotent pas avec onze tableaux : ils se partagent les mêmes personnes. Il faut une grille commune, le temps réellement passé, et un calcul d'atterrissage refait chaque semaine.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Gestion de projets', 'Plan de charge', 'Temps passé par projet', 'Reste à faire et atterrissage', 'Marge par projet', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Gérer plusieurs projets en même temps demande trois choses que le tableau ne donne pas. **Un plan de charge commun** : les heures de chaque personne, semaine par semaine, tous projets réunis, parce que les projets se disputent les mêmes personnes. **Le temps réellement passé**, saisi chaque jour par projet. **Un calcul d'atterrissage** refait chaque semaine : à ce rythme, combien d'heures à la fin, et à quelle date. Avec ces trois éléments, on sait en semaine 3 ce qu'on découvre aujourd'hui à la facture, et l'on sait, avant de promettre, si un projet de plus tient.",
      "Cette page s'adresse à celles et ceux qui dirigent un bureau d'études, une entreprise d'installation, une agence, un intégrateur, un atelier qui fabrique à la commande, toute société qui vend du travail par projet, et à celles et ceux qui la dirigent depuis la France. Les définitions viennent de sources publiques : gestion de projet, gestion de portefeuille de projets, valeur acquise, chemin critique, diagramme de Gantt, jalon, découpage du travail, dérive du périmètre, relevé de temps, lissage des ressources. La société de huit personnes, ses onze projets et ses heures sont un exemple construit. Le relevé de temps sert ici au coût des projets : la page ne traite ni de paie ni de règles du travail, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Pourquoi « 90 % terminé » ne veut rien dire", body: [
        "La figure compare six façons de mesurer l'avancement.",
      ], visual: 'mesures', after: [
        "**La règle des 90 %.** Un vieil adage de programmeurs dit que les premiers 90 % du code prennent les premiers 90 % du temps, et que les 10 % restants prennent les autres 90 %. Ce qui vaut pour du code vaut pour une étude ou une installation : l'avancement estimé à l'œil monte vite, puis s'arrête à 90 %. **Dépenser n'est pas avancer.** Les heures consommées disent ce que le projet a coûté, pas ce qu'il a produit : un projet qui a mangé 70 % de ses heures peut en être à la moitié. **Ce qui se compte.** Une tâche est terminée ou elle ne l'est pas ; un jalon est accepté par le client ou il ne l'est pas. C'est sur ces faits que se calcule un avancement.",
        "**Le reste à faire.** La question utile n'est pas « où en es-tu ? » mais « combien d'heures te faut-il encore ? ». Reposée chaque semaine, tâche par tâche, elle donne une date de fin qui bouge quand la réalité bouge. **Deux pentes naturelles.** La loi de Parkinson dit que le travail s'étend jusqu'à occuper tout le temps dont on dispose pour le finir ; et l'on appelle « syndrome de l'étudiant » le fait de ne s'y mettre vraiment qu'au dernier moment avant l'échéance. Des tâches courtes, d'une semaine au plus, laissent moins de place à l'une comme à l'autre. **Ce que cette page ne traite pas.** Le suivi d'un chantier de bâtiment, avec métrés et situations de travaux, est détaillé dans [le logiciel BTP](" + L.btp + ").",
      ] },
      { heading: "Ce que tient un suivi de projets", body: [
        "La figure empile cinq couches ; la troisième est la seule commune à tous les projets.",
      ], visual: 'couches', after: [
        "**Trois contraintes.** Gérer un projet, c'est conduire le travail d'une équipe pour en atteindre les objectifs dans des contraintes données ; les principales sont le périmètre, le temps et le budget. La fiche projet porte les trois : ce qui a été vendu, pour quelle date, en combien d'heures. **Le découpage.** Une structure de découpage du travail décompose un projet en éléments plus petits ; les jalons marquent des points précis de son calendrier. **Le périmètre.** On appelle dérive du périmètre sa croissance continue ou incontrôlée, le plus souvent une fois le projet commencé : une demande supplémentaire se note comme telle, avec ses heures, avant d'être faite, pas après.",
        "**Plusieurs projets.** La gestion de portefeuille de projets est la gestion centralisée des processus, des méthodes et des outils qu'emploient les chefs de projet. Pour une société de huit personnes, cela tient en une vue : tous les projets sur une même grille, avec les mêmes personnes. **Gantt et chemin critique.** Un diagramme de Gantt est un diagramme à barres qui montre le calendrier d'un projet. Le chemin critique est la plus longue suite d'activités qui dépendent l'une de l'autre ; il fixe le délai le plus court possible. Utile sur un gros projet ; sur onze petits, c'est le plan de charge qui commande. **Ce qui existe déjà.** Le devis vient de [la chaîne du devis à la facture](" + L.devis + ") ; le client, de [la fiche du CRM](" + L.crm + ").",
      ] },
      { heading: "La vie d'un projet, du devis au bilan", body: [
        "La figure suit un projet en six temps.",
      ], visual: 'vie', after: [
        "**Le devis.** Il fixe les heures vendues, la date promise et les jalons de facturation : ce sont les trois chiffres auxquels tout le reste sera comparé. **Le lancement.** Le périmètre est écrit, l'équipe nommée, les tâches créées. **La planification.** C'est le temps accentué : avant de confirmer la date au client, le projet est posé sur le plan de charge. Si les personnes prévues sont déjà à 130 % ces semaines-là, la date est fausse avant d'avoir commencé. **L'exécution.** Chaque jour, chacun note son temps par projet et ferme ses tâches.",
        "**Le temps passé.** Un relevé de temps enregistre le temps qu'une personne consacre à chaque travail ; il sert de plus en plus au calcul des coûts, à l'estimation et au suivi des projets, et l'un de ses grands usages est de comparer le prévu au réel. **Moins d'une minute.** Une saisie qui prend cinq minutes ne sera pas faite : trois ou quatre projets proposés, une durée, un geste, sur le téléphone, y compris sans réseau chez un client, voir [l'application hors ligne](" + L.horsligne + "). **Les jalons.** Un jalon accepté déclenche la facture prévue ; les échéances alimentent [le plan de trésorerie](" + L.tresorerie + "). **Le bilan.** Heures vendues, heures passées, et ce qu'on retiendra pour le prochain devis du même type.",
      ] },
      { heading: "Onze projets, cinq personnes : le plan de charge", body: [
        "La figure pose les heures de cinq personnes sur six semaines, tous projets réunis.",
      ], visual: 'charge', after: [
        "**Ce que la grille montre.** En semaine 4, l'équipe a 168 h de travail pour 160 h de capacité : rien d'alarmant. Mais une personne en a 52 pour 32, parce que trois rendus d'étude tombent la même semaine, pendant qu'une autre, de même compétence, en a 24. Aucun des onze tableaux de projet ne le montrait : chacun, pris seul, était raisonnable. **La capacité.** Dans l'exemple, on compte 32 h de projet par semaine pour 40 h de présence : le reste part en réunions, en devis, en appels. Planifier à 40 h, c'est être en retard dès le dimanche.",
        "**Lisser.** Le lissage des ressources est une technique où les dates de début et de fin s'ajustent aux limites des ressources ; en pratique, il s'agit surtout de résoudre les conflits et les surcharges du plan. Ici, deux leviers : confier une étude à la personne disponible, ou décaler un rendu de deux semaines. **Faire moins à la fois.** Mener plusieurs tâches de front fait perdre du temps à chaque changement de contexte et rend plus sujet aux erreurs ; d'où l'idée, dans la méthode Kanban, de limiter le travail en cours. Dans l'exemple : deux projets actifs par personne plutôt que cinq. **Accepter un projet.** Le douzième se pose sur la grille avant la promesse : elle dit quelle date est tenable. L'emploi du temps au jour le jour relève, lui, [du planning des équipes](" + L.equipes + ").",
      ] },
      { heading: "L'atterrissage : ce que le projet aura coûté à la fin", body: [
        "La figure lit un projet de 400 h en semaine 6, puis le prolonge au même rythme.",
      ], visual: 'atterrissage', after: [
        "**La valeur acquise.** C'est une technique de gestion de projet qui mesure la performance et l'avancement de façon objective. Trois grandeurs : le travail prévu à cette date ; le travail acquis, c'est-à-dire l'avancement de chaque tâche multiplié par sa valeur prévue ; le coût réel. Dans l'exemple, en semaine 6 : 240 h prévues, 200 h acquises, 290 h consommées. **Le rapport.** L'indice de performance des coûts est le rapport du travail acquis au coût réel : 200 ÷ 290, soit 0,69. Chaque heure passée produit 0,69 heure de ce qui a été vendu.",
        "**L'atterrissage.** Le budget divisé par cet indice donne l'estimation à l'achèvement : 400 ÷ 0,69, soit 580 h pour 400 vendues. Et à 33 h acquises par semaine, la fin tombe en semaine 12, pas en semaine 10. **Tôt.** Le même calcul, en semaine 3, donnait 105 h acquises pour 140 consommées : l'écart se lisait sept semaines avant la date promise. **Que faire à 580 h ?** Réduire le périmètre, renégocier, ou accepter la perte en le sachant. Ajouter du monde est rarement la réponse : la loi de Brooks, écrite pour le logiciel, dit qu'ajouter des personnes à un projet en retard le retarde encore. **La marge.** Heures passées et achats donnent la marge par projet, à relier à [la rentabilité de l'entreprise](" + L.rentab + ").",
      ] },
      { heading: "Six semaines, dans l'exemple", body: [
        "Six semaines pour passer du tableau à un suivi commun, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine avec vous : les projets en cours, le tableau actuel, qui fait quoi, comment vous facturez. **Reprendre l'existant.** Les projets en cours sont repris avec leurs heures vendues et une estimation honnête du reste à faire ; on ne reconstitue pas le passé. **La saisie.** Elle commence tôt, sur téléphone, avec un rappel en fin de journée. **La revue du dimanche.** Le dernier jalon : le premier point hebdomadaire tenu sur l'écran, projet par projet, en commençant par ceux dont l'atterrissage dépasse.",
        "**Ce que le client voit.** Un [espace client](" + L.espace + ") peut montrer l'avancement, les jalons et les documents, sans appel ni courriel. **Ce que la direction voit.** Les projets en dépassement, la charge des semaines à venir et les jalons à facturer remontent dans [le tableau de bord](" + L.tableau + "). **Du marché ou sur mesure.** Des logiciels de gestion de projet existent, et beaucoup sont très bons pour les tâches. Ils conviennent quand votre façon de vendre entre dans leur cadre. Le sur-mesure se justifie quand il faut relier devis, temps, facturation par jalons et marge, ou quand le travail se fait sur site, sans réseau. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que la direction reçoit** : une grille de charge par personne et par semaine, tous projets réunis ; le temps passé par projet et par tâche ; un atterrissage en heures et en date pour chaque projet ; les jalons à facturer ; la marge par projet ; une revue hebdomadaire tenue sur l'écran.",
        "**Ce que l'équipe ne fait plus** : mettre à jour onze tableaux, annoncer « 90 % » pendant un mois, promettre une date sans regarder la charge, découvrir un dépassement à la facture, demander à la même personne trois rendus la même semaine.",
        "**Ce qui est mesuré** : charge par personne contre capacité ; heures consommées contre heures vendues ; travail acquis ; atterrissage en heures et en date ; projets actifs par personne ; jalons livrés à la date ; marge par projet.",
        "**Ce que fait Symloop** : le relevé avec vous, les fiches projet et les tâches, le plan de charge, la saisie du temps sur téléphone, le calcul d'atterrissage, les jalons et leur facturation, l'espace client, puis la première revue du dimanche avec vous.",
      ], faq: [
        { q: "Comment gérer plusieurs projets en même temps ?", a: "En les posant sur une même grille : les heures de chaque personne, semaine par semaine, tous projets réunis. Les projets se partagent les mêmes personnes ; c'est là que naissent les retards, pas dans chaque projet pris seul." },
        { q: "Comment gérer un projet en entreprise ?", a: "Trois chiffres au départ, heures vendues, date promise, jalons ; des tâches courtes ; le temps saisi chaque jour ; et chaque semaine, le reste à faire et l'atterrissage. Le reste est une affaire de régularité." },
        { q: "Existe-t-il un logiciel de gestion de projet adapté à une PME ?", a: "Oui, il en existe de nombreux, souvent très bons pour les tâches. Vérifiez deux choses : montre-t-il la charge par personne tous projets réunis, et relie-t-il le temps passé aux heures vendues ? Sinon, c'est une liste de tâches." },
        { q: "Comment calculer le temps passé sur un projet ?", a: "Par une saisie quotidienne, par projet et par tâche, qui prend moins d'une minute sur le téléphone. Reconstitué en fin de mois, le temps est faux : on se souvient des gros projets, pas des interruptions." },
        { q: "Comment savoir si un projet est en retard ?", a: "En comparant le travail acquis au travail prévu à cette date, et en recalculant la date de fin au rythme actuel. Un pourcentage estimé à l'œil ne le dit pas : il reste à 90 %." },
        { q: "Un tableau de suivi de projet sur Excel suffit-il ?", a: "Pour un ou deux projets, oui. Dès que plusieurs projets se partagent les mêmes personnes, le tableau ne montre plus la charge commune, et il n'est à jour que le jour où quelqu'un le remplit." },
        { q: "Comment éviter qu'une personne soit sur tous les projets ?", a: "En voyant sa charge avant d'affecter : le plan de charge montre les semaines où elle dépasse sa capacité. Ensuite, deux leviers : confier à quelqu'un d'autre, ou décaler une échéance. Et limiter le nombre de projets actifs par personne." },
        { q: "Peut-on accepter un nouveau projet ?", a: "La grille répond : on pose le projet sur les semaines prévues et l'on regarde qui dépasse. La date tenable est celle où la charge passe, pas celle que le client demande." },
        { q: "Comment connaître la marge d'un projet ?", a: "Heures passées valorisées à leur coût, plus les achats, comparées au prix vendu. Suivie en cours de route avec l'atterrissage, elle se connaît avant la fin, quand il est encore temps d'agir." },
        { q: "Combien de temps pour mettre en place un suivi de projets ?", a: "Six semaines dans l'exemple de cette page, relevé compris, jusqu'à une première revue hebdomadaire tenue sur l'écran. Les projets en cours sont repris avec leur reste à faire." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "La question utile n'est pas « où en es-tu ? » mais « combien d'heures te faut-il encore ? »." },
      { after: 3, text: "Aucun des onze tableaux ne le montrait : chacun, pris seul, était raisonnable." },
    ],
    cta: { eyebrow: "Dites-nous combien de projets vous menez, avec combien de personnes, et comment vous les suivez aujourd'hui : nous commençons par une semaine de relevé", title: "Projets tous « à 90 % », mêmes personnes demandées partout, dates promises sans regarder la charge, dépassements découverts à la facture, ou société en Algérie que vous dirigez depuis la France", body: "Symloop construit le suivi qui relie vos projets : plan de charge, temps passé, atterrissage, jalons et marge. Décrivez-nous votre activité, votre équipe, et le projet dont vous ne savez pas dire aujourd'hui quand il finira." },
    related: { label: 'À lire aussi', items: [
      { href: L.btp, kind: '2027', name: 'Logiciel BTP : devis, suivi de chantier, marge par chantier' },
      { href: L.devis, kind: '2027', name: 'Du devis à la facture sans ressaisie' },
      { href: L.equipes, kind: '2027', name: 'Planning des équipes : besoins par créneau, contraintes' },
      { href: L.rentab, kind: '2027', name: 'Comment savoir si mon entreprise est rentable' },
    ] },
  },
  en: {
    kind: 'Project management · Algeria · 2027', title: "How to manage several projects at the same time in Algeria (2027): all of them “at 90%” for a month, the same people wanted everywhere, hours discovered at invoicing; load plan, time spent, landing, and what we put in place",
    dek: "“There are eight of us, five on projects, and we run eleven at once. In my spreadsheet, all of them have been at 90% for a month. The same people are wanted everywhere, we promise dates we do not keep, and I find out at invoicing that one project ate close to one and a half times the hours sold. How do you manage several projects at the same time? Is there project management software for a company like ours?” Eleven projects are not steered with eleven spreadsheets: they share the same people. What is needed is one common grid, the time really spent, and a landing calculation redone every week.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Project management', 'Load plan', 'Time spent per project', 'Remaining work and landing', 'Margin per project', 'Algeria 2027'],
    intro: [
      "**Short answer.** Managing several projects at the same time takes three things a spreadsheet does not give. **One common load plan**: each person's hours, week by week, all projects together, because projects compete for the same people. **The time really spent**, entered every day per project. **A landing calculation** redone every week: at this pace, how many hours at the end, and on what date. With those three, you know in week 3 what you discover today at invoicing, and you know, before promising, whether one more project fits.",
      "This page is for those who run a design office, an installation company, an agency, an integrator, a workshop that makes to order, any company that sells work by the project, and for those who run one from France. The definitions come from public sources: project management, project portfolio management, earned value, critical path, Gantt chart, milestone, work breakdown, scope creep, timesheet, resource levelling. The company of eight, its eleven projects and its hours are a constructed example. The timesheet is used here for project cost: the page covers neither payroll nor labour rules, and quotes no hardware price.",
    ],
    sections: [
      { heading: "Why “90% done” means nothing", body: [
        "The figure compares six ways to measure progress.",
      ], visual: 'mesures', after: [
        "**The 90% rule.** An old programmers' saying has it that the first 90% of the code takes the first 90% of the time, and the last 10% takes the other 90%. What holds for code holds for a study or an installation: progress estimated by eye climbs fast, then stops at 90%. **Spending is not progressing.** Hours consumed say what the project has cost, not what it has produced: a project that has eaten 70% of its hours may be halfway. **What can be counted.** A task is finished or it is not; a milestone is accepted by the client or it is not. Progress is calculated on those facts.",
        "**The remaining work.** The useful question is not “where are you?” but “how many hours do you still need?”. Asked again every week, task by task, it gives an end date that moves when reality moves. **Two natural slopes.** Parkinson's law says work stretches to fill all the time available for finishing it; and “student syndrome” is the name for only really getting down to it at the last moment before the deadline. Short tasks, a week at most, leave less room for either. **What this page does not cover.** Following a building site, with quantity take-offs and progress claims, is detailed in [the construction software page](" + L.btp + ").",
      ] },
      { heading: "What project tracking holds", body: [
        "The figure stacks five layers; the third is the only one shared by every project.",
      ], visual: 'couches', after: [
        "**Three constraints.** Managing a project means leading a team's work so that its goals are met within given constraints; the main ones are scope, time and budget. The project record carries all three: what was sold, for which date, in how many hours. **The breakdown.** A work breakdown structure splits a project into smaller components; milestones mark specific points on its timeline. **The scope.** Scope creep is the name for its continuous or uncontrolled growth, usually once the project has started: an extra request is recorded as such, with its hours, before it is done, not after.",
        "**Several projects.** Project portfolio management is the centralised management of the processes, methods and tools project managers use. For a company of eight, that comes down to one view: all the projects on one grid, with the same people. **Gantt and critical path.** A Gantt chart is a bar chart that shows a project schedule. The critical path is the longest chain of activities that depend on one another; it sets the shortest possible duration. Useful on one large project; on eleven small ones, the load plan is what rules. **What already exists.** The quote comes from [the quote-to-invoice chain](" + L.devis + "); the client, from [the CRM record](" + L.crm + ").",
      ] },
      { heading: "The life of a project, from quote to review", body: [
        "The figure follows a project in six steps.",
      ], visual: 'vie', after: [
        "**The quote.** It sets the hours sold, the promised date and the invoicing milestones: those are the three figures everything else will be compared with. **Kick-off.** The scope is written, the team named, the tasks created. **Planning.** It is the accented step: before the date is confirmed to the client, the project is placed on the load plan. If the people planned are already at 130% in those weeks, the date is wrong before work has begun. **Execution.** Every day, each person notes their time per project and closes their tasks.",
        "**Time spent.** A timesheet records the time a person gives to each job; it is used more and more for costing, estimating and tracking projects, and one of its main uses is comparing planned with actual. **Under a minute.** An entry that takes five minutes will not be made: three or four projects offered, a duration, one gesture, on the phone, including without a network at a client's site, see [the offline application](" + L.horsligne + "). **Milestones.** An accepted milestone triggers the planned invoice; the due dates feed [the cash plan](" + L.tresorerie + "). **The review.** Hours sold, hours spent, and what to remember for the next quote of the same kind.",
      ] },
      { heading: "Eleven projects, five people: the load plan", body: [
        "The figure lays out five people's hours over six weeks, all projects together.",
      ], visual: 'charge', after: [
        "**What the grid shows.** In week 4, the team has 168 h of work for 160 h of capacity: nothing alarming. But one person has 52 for 32, because three study deliverables fall in the same week, while another, with the same skill, has 24. None of the eleven project spreadsheets showed it: each one, taken alone, was reasonable. **Capacity.** In the example, 32 project hours a week are counted for 40 hours present: the rest goes to meetings, quotes, calls. Planning at 40 h means being late from Sunday.",
        "**Levelling.** Resource levelling is a technique in which start and finish dates are adjusted to the limits of resources; in practice it is mostly about resolving conflicts and over-allocations in the plan. Here, two levers: give one study to the person who is free, or move one deliverable by two weeks. **Doing less at once.** Working on several tasks at once wastes time at every switch of context and makes people more prone to errors; hence the idea, in the Kanban method, of limiting work in progress. In the example: two active projects per person rather than five. **Accepting a project.** The twelfth is placed on the grid before the promise: it says which date can be kept. The day-to-day rota belongs to [team scheduling](" + L.equipes + ").",
      ] },
      { heading: "The landing: what the project will have cost at the end", body: [
        "The figure reads a 400 h project in week 6, then extends it at the same pace.",
      ], visual: 'atterrissage', after: [
        "**Earned value.** It is a project management technique that measures performance and progress objectively. Three quantities: the work planned by this date; the work earned, that is each task's progress multiplied by its planned value; the actual cost. In the example, in week 6: 240 h planned, 200 h earned, 290 h consumed. **The ratio.** The cost performance index is the ratio of earned work to actual cost: 200 ÷ 290, that is 0.69. Each hour spent produces 0.69 hour of what was sold.",
        "**The landing.** The budget divided by that index gives the estimate at completion: 400 ÷ 0.69, that is 580 h for 400 sold. And at 33 h earned a week, the end falls in week 12, not week 10. **Early.** The same calculation, in week 3, gave 105 h earned for 140 consumed: the gap could be read seven weeks before the promised date. **What to do at 580 h?** Reduce the scope, renegotiate, or accept the loss knowingly. Adding people is rarely the answer: Brooks's law, written for software, says that adding people to a late project makes it later still. **The margin.** Hours spent and purchases give the margin per project, to be tied to [the company's profitability](" + L.rentab + ").",
      ] },
      { heading: "Six weeks, in the example", body: [
        "Six weeks to go from the spreadsheet to shared tracking, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week with you: the projects under way, the current spreadsheet, who does what, how you invoice. **Taking over what exists.** Projects under way are taken over with their hours sold and an honest estimate of the remaining work; the past is not reconstructed. **Time entry.** It starts early, on the phone, with a reminder at the end of the day. **The Sunday review.** The last milestone: the first weekly meeting held on the screen, project by project, starting with those whose landing overruns.",
        "**What the client sees.** A [client area](" + L.espace + ") can show progress, milestones and documents, without a call or an email. **What management sees.** Projects overrunning, the load of the coming weeks and the milestones to invoice go up into [the dashboard](" + L.tableau + "). **Off the shelf or custom.** Project management software exists, and much of it is very good at tasks. It fits when your way of selling falls within its frame. Custom work is justified when quotes, time, milestone invoicing and margin have to be tied together, or when the work is done on site, without a network. **The durations** are those of a constructed example.",
      ], list: [
        "**What management receives**: a load grid per person and per week, all projects together; time spent per project and per task; a landing in hours and in date for each project; the milestones to invoice; margin per project; a weekly review held on the screen.",
        "**What the team no longer does**: update eleven spreadsheets, announce “90%” for a month, promise a date without looking at the load, discover an overrun at invoicing, ask the same person for three deliverables in the same week.",
        "**What is measured**: load per person against capacity; hours consumed against hours sold; earned work; landing in hours and in date; active projects per person; milestones delivered on the date; margin per project.",
        "**What Symloop does**: the survey with you, project records and tasks, the load plan, time entry on the phone, the landing calculation, milestones and their invoicing, the client area, then the first Sunday review with you.",
      ], faq: [
        { q: "How do you manage several projects at the same time?", a: "By placing them on one grid: each person's hours, week by week, all projects together. Projects share the same people; that is where delays are born, not inside each project taken alone." },
        { q: "How do you manage a project in a company?", a: "Three figures at the start, hours sold, promised date, milestones; short tasks; time entered every day; and every week, the remaining work and the landing. The rest is a matter of regularity." },
        { q: "Is there project management software suited to a small company?", a: "Yes, there is plenty, often very good at tasks. Check two things: does it show the load per person across all projects, and does it tie time spent to hours sold? If not, it is a task list." },
        { q: "How do you calculate time spent on a project?", a: "By a daily entry, per project and per task, that takes under a minute on the phone. Reconstructed at the end of the month, time is wrong: people remember the big projects, not the interruptions." },
        { q: "How do you know whether a project is late?", a: "By comparing the work earned with the work planned by this date, and recalculating the end date at the current pace. A percentage estimated by eye does not say it: it stays at 90%." },
        { q: "Is a project tracking spreadsheet in Excel enough?", a: "For one or two projects, yes. As soon as several projects share the same people, the spreadsheet no longer shows the common load, and it is only up to date on the day someone fills it in." },
        { q: "How do you avoid one person being on every project?", a: "By seeing their load before assigning: the load plan shows the weeks in which they exceed their capacity. Then two levers: give the work to someone else, or move a deadline. And limit the number of active projects per person." },
        { q: "Can we accept a new project?", a: "The grid answers: you place the project on the planned weeks and look at who goes over. The date that can be kept is the one where the load fits, not the one the client asks for." },
        { q: "How do you know a project's margin?", a: "Hours spent valued at their cost, plus purchases, compared with the price sold. Followed along the way with the landing, it is known before the end, while there is still time to act." },
        { q: "How long does it take to set up project tracking?", a: "Six weeks in this page's example, survey included, up to a first weekly review held on the screen. Projects under way are taken over with their remaining work." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The useful question is not “where are you?” but “how many hours do you still need?”." },
      { after: 3, text: "None of the eleven spreadsheets showed it: each one, taken alone, was reasonable." },
    ],
    cta: { eyebrow: "Tell us how many projects you run, with how many people, and how you follow them today: we start with a week of survey", title: "Projects all “at 90%”, the same people wanted everywhere, dates promised without looking at the load, overruns discovered at invoicing, or a company in Algeria that you run from France", body: "Symloop builds the tracking that ties your projects together: load plan, time spent, landing, milestones and margin. Describe your business to us, your team, and the project whose end date you cannot give today." },
    related: { label: 'Also read', items: [
      { href: L.btp, kind: '2027', name: 'Construction software: quotes, site tracking, margin per site' },
      { href: L.devis, kind: '2027', name: 'From quote to invoice without re-entry' },
      { href: L.equipes, kind: '2027', name: 'Team scheduling: needs per slot, constraints' },
      { href: L.rentab, kind: '2027', name: 'How to know whether my company is profitable' },
    ] },
  },
  ar: {
    kind: 'تسيير المشاريع · الجزائر · 2027', title: "كيف تُسيَّر عدة مشاريع في الوقت نفسه في الجزائر (2027): كلها «عند 90 بالمئة» منذ شهر، الأشخاص أنفسهم مطلوبون في كل مكان، والساعات تُكتشف عند الفاتورة؛ مخطط الحِمل، الوقت المستغرَق، النهاية المتوقعة، وما نضعه",
    dek: "«نحن ثمانية، خمسة منا على المشاريع، ونسيّر أحد عشر مشروعاً في آن واحد. في جدولي، كلها عند 90 بالمئة منذ شهر. الأشخاص أنفسهم مطلوبون في كل مكان، نعد بتواريخ لا نحترمها، وأكتشف عند الفاتورة أن مشروعاً أكل قرابة مرة ونصف الساعات المبيعة. كيف تُسيَّر عدة مشاريع في الوقت نفسه؟ وهل يوجد برنامج لتسيير المشاريع لمؤسسة مثلنا؟» أحد عشر مشروعاً لا تُقاد بأحد عشر جدولاً: هي تتقاسم الأشخاص أنفسهم. يلزم شبكة مشتركة، الوقت المقضي فعلاً، وحساب للنهاية المتوقعة يُعاد كل أسبوع.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تسيير المشاريع', 'مخطط الحِمل', 'الوقت المستغرَق لكل مشروع', 'الباقي للإنجاز والنهاية المتوقعة', 'هامش كل مشروع', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** تسيير عدة مشاريع في الوقت نفسه يتطلب ثلاثة أشياء لا يعطيها الجدول. **مخطط حِمل مشترك**: ساعات كل شخص، أسبوعاً بأسبوع، كل المشاريع مجتمعة، لأن المشاريع تتنازع الأشخاص أنفسهم. **الوقت المقضي فعلاً**، يُدخَل كل يوم لكل مشروع. و**حساب للنهاية المتوقعة** يُعاد كل أسبوع: بهذه الوتيرة، كم ساعة في الآخر، وفي أي تاريخ. بهذه الثلاثة، نعرف في الأسبوع الثالث ما نكتشفه اليوم عند الفاتورة، ونعرف، قبل أن نعد، هل يتّسع المكان لمشروع إضافي.",
      "هذه الصفحة موجّهة إلى من يسيّر مكتب دراسات، مؤسسة تركيب، وكالة، مؤسسة إدماج أنظمة، ورشة تصنع حسب الطلب، أو أي مؤسسة تبيع العمل بالمشروع، وإلى من يسيّرها من فرنسا. التعريفات من مصادر عمومية: تسيير المشروع، تسيير محفظة المشاريع، القيمة المكتسبة، المسار الحرج، مخطط غانت، المحطة، تقسيم العمل، انزلاق النطاق، كشف الوقت، وتسوية الموارد. والمؤسسة ذات الثمانية أشخاص ومشاريعها الأحد عشر وساعاتها مثال مركَّب. وكشف الوقت هنا لكلفة المشاريع: الصفحة لا تتناول الأجور ولا قواعد العمل، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "لماذا «منتهٍ بنسبة 90 بالمئة» لا تعني شيئاً", body: [
        "الشكل يقارن ست طرق لقياس التقدّم.",
      ], visual: 'mesures', after: [
        "**قاعدة التسعين بالمئة.** مثل قديم عند المبرمجين يقول إن التسعين بالمئة الأولى من الشيفرة تأخذ التسعين بالمئة الأولى من الوقت، وإن العشرة الباقية تأخذ التسعين الأخرى. وما يصحّ على الشيفرة يصحّ على دراسة أو تركيب: التقدّم المقدَّر بالعين يصعد سريعاً، ثم يتوقف عند 90 بالمئة. **الصرف ليس تقدّماً.** الساعات المستهلكة تقول ما كلّفه المشروع، لا ما أنتجه: مشروع أكل 70 بالمئة من ساعاته قد يكون في منتصفه. **ما يُعدّ.** المهمة منتهية أو غير منتهية؛ والمحطة مقبولة من الزبون أو غير مقبولة. وعلى هذه الوقائع يُحسب التقدّم.",
        "**الباقي للإنجاز.** السؤال النافع ليس «أين وصلت؟» بل «كم ساعة ما زالت تلزمك؟». وإذا طُرح من جديد كل أسبوع، مهمة بمهمة، أعطى تاريخ نهاية يتحرك حين يتحرك الواقع. **منحدران طبيعيان.** قانون باركنسون يقول إن العمل يتمدّد حتى يملأ كل الوقت المتاح لإنهائه؛ ويُسمّى «متلازمة الطالب» ألّا يُشرَع فيه حقاً إلا في آخر لحظة قبل الأجل. والمهام القصيرة، أسبوع على الأكثر، تترك مجالاً أقل لهذا ولذاك. **ما لا تعالجه هذه الصفحة.** متابعة ورشة بناء، بكشوف الكميات ووضعيات الأشغال، مفصَّلة في [برنامج مؤسسة البناء](" + L.btp + ").",
      ] },
      { heading: "ما تمسكه متابعة المشاريع", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة هي الوحيدة المشتركة بين كل المشاريع.",
      ], visual: 'couches', after: [
        "**ثلاثة قيود.** تسيير مشروع هو قيادة عمل فريق لبلوغ أهدافه ضمن قيود معيّنة؛ وأهمها النطاق، الوقت، والميزانية. وبطاقة المشروع تحمل الثلاثة: ما بيع، لأي تاريخ، وبكم ساعة. **التقسيم.** هيكل تقسيم العمل يفكّك المشروع إلى عناصر أصغر؛ والمحطات تعلّم نقاطاً محددة في رزنامته. **النطاق.** يُسمّى انزلاق النطاق نموَّه المستمر أو غير المتحكَّم فيه، غالباً بعد انطلاق المشروع: والطلب الإضافي يُسجَّل بصفته هذه، مع ساعاته، قبل أن يُنجَز، لا بعده.",
        "**عدة مشاريع.** تسيير محفظة المشاريع هو التسيير المركزي للعمليات والطرق والأدوات التي يستعملها رؤساء المشاريع. ولمؤسسة من ثمانية أشخاص، يُختصر ذلك في نظرة واحدة: كل المشاريع على شبكة واحدة، بالأشخاص أنفسهم. **غانت والمسار الحرج.** مخطط غانت مخطط بالأعمدة يبيّن رزنامة مشروع. والمسار الحرج أطول سلسلة من الأنشطة المتوقفة بعضها على بعض؛ وهو يحدد أقصر مدة ممكنة. نافع في مشروع كبير؛ وفي أحد عشر مشروعاً صغيراً، مخطط الحِمل هو الذي يحكم. **ما هو موجود من قبل.** عرض السعر يأتي من [سلسلة عرض السعر إلى الفاتورة](" + L.devis + ")؛ والزبون، من [بطاقته في إدارة علاقات الزبائن](" + L.crm + ").",
      ] },
      { heading: "حياة مشروع، من عرض السعر إلى الحصيلة", body: [
        "الشكل يتابع مشروعاً في ست مراحل.",
      ], visual: 'vie', after: [
        "**عرض السعر.** يحدد الساعات المبيعة، التاريخ الموعود، ومحطات الفوترة: هذه الأرقام الثلاثة التي سيُقارَن بها كل الباقي. **الانطلاق.** النطاق مكتوب، الفريق مسمّى، والمهام منشأة. **التخطيط.** هو المرحلة المبرزة: قبل تأكيد التاريخ للزبون، يوضع المشروع على مخطط الحِمل. وإذا كان الأشخاص المقرَّرون عند 130 بالمئة في تلك الأسابيع، فالتاريخ خاطئ قبل البدء. **التنفيذ.** كل يوم، يسجّل كل واحد وقته لكل مشروع ويغلق مهامه.",
        "**الوقت المستغرَق.** كشف الوقت يسجّل ما يخصصه شخص من وقت لكل عمل؛ وهو يُستعمل أكثر فأكثر لحساب الكلفة والتقدير ومتابعة المشاريع، ومن أهم استعمالاته مقارنة المبرمج بالفعلي. **أقل من دقيقة.** إدخال يأخذ خمس دقائق لن يُنجَز: ثلاثة أو أربعة مشاريع مقترحة، مدة، وحركة واحدة، على الهاتف، حتى دون شبكة عند زبون، انظر [التطبيق دون اتصال](" + L.horsligne + "). **المحطات.** المحطة المقبولة تطلق الفاتورة المقرَّرة؛ والآجال تغذي [مخطط الخزينة](" + L.tresorerie + "). **الحصيلة.** الساعات المبيعة، الساعات المقضية، وما يُحفظ لعرض السعر القادم من النوع نفسه.",
      ] },
      { heading: "أحد عشر مشروعاً، خمسة أشخاص: مخطط الحِمل", body: [
        "الشكل يضع ساعات خمسة أشخاص على ستة أسابيع، كل المشاريع مجتمعة.",
      ], visual: 'charge', after: [
        "**ما تبيّنه الشبكة.** في الأسبوع الرابع، عند الفريق 168 ساعة عمل مقابل 160 ساعة طاقة: لا شيء مقلق. لكن عند شخص واحد 52 مقابل 32، لأن ثلاثة تسليمات دراسة تقع في الأسبوع نفسه، بينما عند آخر، بالكفاءة نفسها، 24. ولم يكن أي من جداول المشاريع الأحد عشر يبيّن ذلك: كل واحد، مأخوذاً وحده، كان معقولاً. **الطاقة.** في المثال، تُحسب 32 ساعة مشروع في الأسبوع مقابل 40 ساعة حضور: الباقي يذهب في الاجتماعات، عروض الأسعار، والمكالمات. والتخطيط على 40 ساعة يعني التأخر منذ أول يوم في الأسبوع.",
        "**التسوية.** تسوية الموارد تقنية تُعدَّل فيها تواريخ البداية والنهاية حسب حدود الموارد؛ وعملياً، هي في الغالب حلّ التعارضات والأحمال الزائدة في المخطط. وهنا رافعتان: إسناد دراسة إلى الشخص المتاح، أو تأخير تسليم بأسبوعين. **عمل أقل في آن واحد.** القيام بعدة مهام معاً يضيّع وقتاً عند كل تغيير سياق ويجعل صاحبه أكثر عرضة للأخطاء؛ ومن هنا الفكرة، في طريقة كانبان، بتحديد العمل الجاري. وفي المثال: مشروعان نشطان لكل شخص بدل خمسة. **قبول مشروع.** الثاني عشر يوضع على الشبكة قبل الوعد: هي تقول أي تاريخ يمكن احترامه. أما جدول العمل اليومي فمن شأن [تخطيط الفرق](" + L.equipes + ").",
      ] },
      { heading: "النهاية المتوقعة: ما سيكون المشروع قد كلّفه في آخره", body: [
        "الشكل يقرأ مشروعاً من 400 ساعة في الأسبوع السادس، ثم يمدّده بالوتيرة نفسها.",
      ], visual: 'atterrissage', after: [
        "**القيمة المكتسبة.** هي تقنية في تسيير المشاريع تقيس الأداء والتقدّم بطريقة موضوعية. ثلاثة مقادير: العمل المبرمج إلى هذا التاريخ؛ العمل المكتسب، أي تقدّم كل مهمة مضروباً في قيمتها المبرمجة؛ والكلفة الفعلية. في المثال، في الأسبوع السادس: 240 ساعة مبرمجة، 200 مكتسبة، و290 مستهلكة. **النسبة.** مؤشر أداء الكلفة هو نسبة العمل المكتسب إلى الكلفة الفعلية: " + I('200 ÷ 290') + "، أي " + I('0,69') + ". كل ساعة مقضية تنتج " + I('0,69') + " ساعة مما بيع.",
        "**النهاية المتوقعة.** الميزانية مقسومة على هذا المؤشر تعطي التقدير عند الإتمام: " + I('400 ÷ 0,69') + "، أي 580 ساعة مقابل 400 مبيعة. وبـ33 ساعة مكتسبة في الأسبوع، تقع النهاية في الأسبوع 12، لا في الأسبوع 10. **مبكراً.** الحساب نفسه، في الأسبوع الثالث، كان يعطي 105 ساعات مكتسبة مقابل 140 مستهلكة: الفارق كان يُقرأ سبعة أسابيع قبل التاريخ الموعود. **ما العمل عند 580 ساعة؟** تقليص النطاق، إعادة التفاوض، أو قبول الخسارة عن علم. وإضافة أشخاص نادراً ما تكون الجواب: قانون بروكس، المكتوب للبرمجيات، يقول إن إضافة أشخاص إلى مشروع متأخر تزيده تأخراً. **الهامش.** الساعات المقضية والمشتريات تعطي هامش كل مشروع، ويُربط بـ[مردودية المؤسسة](" + L.rentab + ").",
      ] },
      { heading: "ستة أسابيع، في المثال", body: [
        "ستة أسابيع للانتقال من الجدول إلى متابعة مشتركة، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع معكم: المشاريع الجارية، الجدول الحالي، من يفعل ماذا، وكيف تفوترون. **استلام الموجود.** المشاريع الجارية تُنقل بساعاتها المبيعة وبتقدير صادق للباقي؛ ولا يُعاد بناء الماضي. **الإدخال.** يبدأ مبكراً، على الهاتف، مع تذكير في آخر اليوم. **مراجعة أول الأسبوع.** آخر محطة: أول اجتماع أسبوعي يُعقد على الشاشة، مشروعاً بمشروع، بدءاً بالتي تتجاوز نهايتها المتوقعة.",
        "**ما يراه الزبون.** [فضاء الزبون](" + L.espace + ") يمكن أن يبيّن التقدّم، المحطات، والوثائق، دون مكالمة ولا بريد. **ما تراه الإدارة.** المشاريع المتجاوزة، حِمل الأسابيع القادمة، والمحطات الواجب فوترتها تصعد إلى [لوحة القيادة](" + L.tableau + "). **جاهز أو على المقاس.** توجد برامج لتسيير المشاريع، وكثير منها ممتاز في المهام. وتناسب حين تدخل طريقتكم في البيع في إطارها. والعمل على المقاس يُبرَّر حين يجب ربط عروض الأسعار، الوقت، الفوترة بالمحطات، والهامش، أو حين يُنجَز العمل في الموقع، دون شبكة. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقاه الإدارة**: شبكة حِمل لكل شخص ولكل أسبوع، كل المشاريع مجتمعة؛ الوقت المستغرَق لكل مشروع ولكل مهمة؛ نهاية متوقعة بالساعات والتاريخ لكل مشروع؛ المحطات الواجب فوترتها؛ هامش كل مشروع؛ ومراجعة أسبوعية تُعقد على الشاشة.",
        "**ما لا يفعله الفريق بعد الآن**: تحيين أحد عشر جدولاً، إعلان «90 بالمئة» طوال شهر، الوعد بتاريخ دون النظر إلى الحِمل، اكتشاف تجاوز عند الفاتورة، وطلب ثلاثة تسليمات من الشخص نفسه في الأسبوع نفسه.",
        "**ما يُقاس**: حِمل كل شخص مقابل طاقته؛ الساعات المستهلكة مقابل المبيعة؛ العمل المكتسب؛ النهاية المتوقعة بالساعات والتاريخ؛ المشاريع النشطة لكل شخص؛ المحطات المسلَّمة في تاريخها؛ وهامش كل مشروع.",
        "**ما تفعله Symloop**: المعاينة معكم، بطاقات المشاريع والمهام، مخطط الحِمل، إدخال الوقت على الهاتف، حساب النهاية المتوقعة، المحطات وفوترتها، فضاء الزبون، ثم أول مراجعة أسبوعية معكم.",
      ], faq: [
        { q: "كيف تُسيَّر عدة مشاريع في الوقت نفسه؟", a: "بوضعها على شبكة واحدة: ساعات كل شخص، أسبوعاً بأسبوع، كل المشاريع مجتمعة. المشاريع تتقاسم الأشخاص أنفسهم؛ وهناك تولد التأخرات، لا في كل مشروع مأخوذاً وحده." },
        { q: "كيف يُسيَّر مشروع في المؤسسة؟", a: "ثلاثة أرقام في البداية، الساعات المبيعة، التاريخ الموعود، والمحطات؛ مهام قصيرة؛ وقت يُدخَل كل يوم؛ وكل أسبوع، الباقي للإنجاز والنهاية المتوقعة. والباقي مسألة انتظام." },
        { q: "هل يوجد برنامج لتسيير المشاريع يناسب مؤسسة صغيرة؟", a: "نعم، توجد برامج كثيرة، وغالباً ممتازة في المهام. راجعوا أمرين: هل يبيّن حِمل كل شخص في كل المشاريع مجتمعة، وهل يربط الوقت المستغرَق بالساعات المبيعة؟ وإلا فهو قائمة مهام." },
        { q: "كيف يُحسب الوقت المستغرَق في مشروع؟", a: "بإدخال يومي، لكل مشروع ولكل مهمة، يأخذ أقل من دقيقة على الهاتف. وإذا أُعيد بناؤه في آخر الشهر كان خاطئاً: نتذكر المشاريع الكبيرة، لا المقاطعات." },
        { q: "كيف يُعرف أن مشروعاً متأخر؟", a: "بمقارنة العمل المكتسب بالعمل المبرمج إلى هذا التاريخ، وإعادة حساب تاريخ النهاية بالوتيرة الحالية. والنسبة المقدَّرة بالعين لا تقول ذلك: تبقى عند 90 بالمئة." },
        { q: "هل يكفي جدول " + I('Excel') + " لمتابعة المشاريع؟", a: "لمشروع أو اثنين، نعم. وحين تتقاسم عدة مشاريع الأشخاص أنفسهم، لا يعود الجدول يبيّن الحِمل المشترك، ولا يكون محيَّناً إلا يوم يملؤه أحد." },
        { q: "كيف يُتفادى أن يكون شخص واحد في كل المشاريع؟", a: "برؤية حِمله قبل الإسناد: مخطط الحِمل يبيّن الأسابيع التي يتجاوز فيها طاقته. ثم رافعتان: الإسناد إلى غيره، أو تأخير أجل. وتحديد عدد المشاريع النشطة لكل شخص." },
        { q: "هل يمكن قبول مشروع جديد؟", a: "الشبكة تجيب: يوضع المشروع على الأسابيع المقرَّرة ويُنظر من يتجاوز. والتاريخ الممكن احترامه هو الذي يمرّ فيه الحِمل، لا الذي يطلبه الزبون." },
        { q: "كيف يُعرف هامش مشروع؟", a: "الساعات المقضية مقيَّمة بكلفتها، زائد المشتريات، مقارنةً بسعر البيع. وإذا تُوبع في الطريق مع النهاية المتوقعة، عُرف قبل الآخر، ما دام التصرف ممكناً." },
        { q: "كم من الوقت لوضع متابعة للمشاريع؟", a: "ستة أسابيع في مثال هذه الصفحة، المعاينة منها، حتى أول مراجعة أسبوعية تُعقد على الشاشة. والمشاريع الجارية تُنقل بالباقي للإنجاز فيها." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "السؤال النافع ليس «أين وصلت؟» بل «كم ساعة ما زالت تلزمك؟»." },
      { after: 3, text: "لم يكن أي من الجداول الأحد عشر يبيّن ذلك: كل واحد، مأخوذاً وحده، كان معقولاً." },
    ],
    cta: { eyebrow: "قولوا لنا كم مشروعاً تسيّرون، بكم شخص، وكيف تتابعونها اليوم: نبدأ بأسبوع معاينة", title: "مشاريع كلها «عند 90 بالمئة»، الأشخاص أنفسهم مطلوبون في كل مكان، تواريخ يُوعَد بها دون النظر إلى الحِمل، تجاوزات تُكتشف عند الفاتورة، أو مؤسسة في الجزائر تسيّرونها من فرنسا", body: "Symloop تبني المتابعة التي تربط مشاريعكم: مخطط الحِمل، الوقت المستغرَق، النهاية المتوقعة، المحطات، والهامش. صِفوا لنا نشاطكم، فريقكم، والمشروع الذي لا تستطيعون اليوم أن تقولوا متى ينتهي." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.btp, kind: '2027', name: 'برنامج مؤسسة البناء: عروض الأسعار، متابعة الورشة، والهامش' },
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة دون إعادة إدخال' },
      { href: L.equipes, kind: '2027', name: 'تخطيط الفرق: الحاجات لكل فترة والقيود' },
      { href: L.rentab, kind: '2027', name: 'كيف أعرف أن مؤسستي رابحة' },
    ] },
  },
};

const KEYWORDS = "comment gérer plusieurs projets en même temps, comment gérer un projet en entreprise, logiciel de gestion de projet algérie 2027, gestion de projet algérie, comment calculer le temps passé sur un projet, tableau de suivi de projet excel, plan de charge, reste à faire, valeur acquise, logiciel bureau d'études, logiciel planning bureau d'études, how to manage multiple projects, project management software algeria, load plan, time tracking per project, earned value, كيف تُسيَّر عدة مشاريع, برنامج تسيير المشاريع الجزائر, مخطط الحِمل, الوقت المستغرَق في المشروع, القيمة المكتسبة, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
