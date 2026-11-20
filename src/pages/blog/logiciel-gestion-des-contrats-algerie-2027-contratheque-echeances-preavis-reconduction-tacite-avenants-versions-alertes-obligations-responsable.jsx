import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-gestion-des-contrats-algerie-2027-contratheque-echeances-preavis-reconduction-tacite-avenants-versions-alertes-obligations-responsable.mjs';

const SLUG = 'logiciel-gestion-des-contrats-algerie-2027-contratheque-echeances-preavis-reconduction-tacite-avenants-versions-alertes-obligations-responsable';
const FIGURES = ['trouvailles', 'echeancier', 'preavis', 'couches', 'calendrier', 'vie'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  archiver: '/blog/comment-archiver-des-documents-en-entreprise-en-algerie-2027-papier-et-numerique-plan-de-classement-nom-des-fichiers-numerisation-recherche/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  lecture: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  mesure: '/blog/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison/',
  achats: '/blog/tout-le-monde-achete-et-personne-ne-sait-combien-on-a-depense-demandes-d-achat-application-algerie-2027-approbation-budget-engage-bon-commande/',
  tresorerie: '/blog/comment-gerer-la-tresorerie-d-une-entreprise-algerie-2027-rentable-et-compte-vide-plan-sur-13-semaines-echeances-clients-fournisseurs-cycle/',
  infogerance: '/blog/infogerance-maintenance-informatique-entreprise-algerie-2027-contrat-delais-inventaire-supervision-rapport-mensuel/',
  courrier: '/blog/logiciel-gestion-de-courrier-bureau-d-ordre-algerie-2027-courrier-arrivee-depart-enregistrement-numerisation-affectation-delai-de-reponse/',
  offres: '/blog/logiciel-appel-d-offres-algerie-2027-ia-veille-des-avis-lecture-du-cahier-des-charges-pieces-a-fournir-memoire-technique-controle-avant-depot/',
};

const CONTENT = {
  fr: {
    kind: 'Gestion des contrats · Algérie · 2027', title: "Logiciel de gestion des contrats en Algérie (2027) : trois cents contrats dans des classeurs, un contrat reconduit parce que personne n'a vu le préavis, un abonnement payé pour un site fermé, et une version signée introuvable ; contrathèque, échéances, alertes, obligations, et ce qu'on met en place",
    dek: "« Nous avons trois cents contrats : fournisseurs, clients, maintenance, baux, assurances, abonnements. Ils sont dans des classeurs et dans les boîtes mail de ceux qui les ont signés. Un contrat de maintenance vient d'être reconduit pour un an parce que personne n'a vu la date de préavis, nous payons encore un abonnement pour un site fermé, et pour certains contrats personne ne retrouve la version signée. Quel logiciel faut-il pour suivre nos contrats ? » Un registre avec une fiche par contrat, le document signé et ses avenants, un échéancier qui alerte avant chaque date qui compte, et une personne responsable par contrat.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de gestion des contrats', 'Contrathèque', 'Échéances et préavis', 'Reconduction tacite', 'Avenants, versions et obligations', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de gestion des contrats tient quatre choses : un registre, avec une fiche par contrat, les parties, l'objet, le montant, les dates et la personne responsable ; les documents, c'est-à-dire le contrat signé, ses avenants et ses versions ; un échéancier, qui alerte avant chaque date qui compte, préavis, fin de terme, révision de prix, fin de garantie ; et les obligations de chaque partie, avec leur suivi. La date qui compte le plus n'est pas la fin du contrat : c'est le dernier jour où l'on peut encore le dénoncer. Dans l'exemple de cette page, 300 contrats portent 148 dates sur douze mois, dont 23 préavis dans les 90 jours.",
      "Cette page s'adresse aux entreprises qui ont des dizaines ou des centaines de contrats en cours, en Algérie : industrie, distribution, services, bâtiment, santé, groupes à plusieurs sites, et aux fondatrices et fondateurs de la diaspora qui dirigent une société ici. Les définitions viennent de sources publiques : gestion des contrats, cycle de vie d'un contrat, tacite reconduction, clause de renouvellement automatique, avenant, accord de niveau de service, gestion électronique des documents, piste d'audit. Les 300 contrats, leurs dates et les montants sont un exemple construit. La page ne traite ni du droit des contrats, ni de la validité d'une clause, ni des contrats de travail, ni de la signature électronique, et ne remplace pas un conseil juridique : l'outil suit ce que vos contrats disent, il ne dit pas ce qu'ils valent.",
    ],
    sections: [
      { heading: "Ce que l'inventaire des contrats trouve", body: [
        "La figure liste cinq choses que l'on trouve en rassemblant tous les contrats d'une entreprise, et ce que le logiciel fait de chacune.",
      ], visual: 'trouvailles', after: [
        "**La gestion des contrats.** C'est la gestion des contrats passés avec les clients, les fournisseurs, les partenaires ou le personnel : veiller au respect des conditions, documenter et faire accepter chaque modification. **Dans l'exemple.** 300 contrats : 96 fournisseurs, 74 clients, 48 de maintenance et de services, 28 abonnements, 22 baux et locations, 18 assurances, 14 de financement. L'inventaire trouve 41 contrats sans responsable, 17 dont la version signée est introuvable, 132 qui se renouvellent seuls, et 9 que l'on paie pour un site ou un service fermé.",
        "**Par où l'on trouve les contrats.** Par les classeurs, par les boîtes mail, et surtout par la comptabilité : ce qui est payé régulièrement a un contrat, même si personne ne sait où il est. Le rapprochement avec les échéances de paiement se fait une fois, voir [la trésorerie](" + L.tresorerie + "). **Ce que fait le logiciel.** Un nom par contrat, le signé dans la fiche, une date de préavis calculée, un site et un usage pour chaque contrat, des obligations listées. **Ce qu'il ne fait pas.** Il ne dit pas si une clause est valable ni si un contrat peut être rompu : il vous dit quand la question se pose, et à qui.",
      ] },
      { heading: "Cent quarante-huit dates en douze mois", body: [
        "La figure empile, mois par mois, les dates que portent les 300 contrats sur les douze mois à venir.",
      ], visual: 'echeancier', after: [
        "**Quatre sortes de dates.** Le dernier jour du préavis, la fin du terme, la révision de prix, la fin de garantie. Dans l'exemple : 59 préavis, 53 fins de terme, 24 révisions de prix et 12 fins de garantie, soit 148 dates. **Les 90 prochains jours.** 23 préavis tombent dans les trois premiers mois : 9, puis 6, puis 8. Ce sont 23 décisions à prendre, par 23 personnes qui ne le savent pas forcément.",
        "**Les alertes.** Chaque date a une personne responsable et trois alertes, à 90, 60 et 30 jours. Une alerte sans réponse remonte au niveau au-dessus : une date ne passe pas en silence. **Le calendrier.** Les dates se voient par mois, par site, par fournisseur, par responsable ; elles s'exportent vers l'agenda. **Ce que l'on mesure.** Dates à venir à 90 jours ; alertes sans réponse ; contrats reconduits sans décision, qui doivent être zéro ; contrats sans responsable ; contrats sans document signé.",
      ] },
      { heading: "La seule date qui décide", body: [
        "La figure suit un contrat de maintenance d'un an, et ce qui se passe selon que le préavis est vu ou non.",
      ], visual: 'preavis', after: [
        "**La reconduction.** La tacite reconduction veut dire que l'accord se renouvelle automatiquement si aucune des parties ne manifeste sa volonté d'y mettre fin ; on parle aussi de clause de renouvellement automatique. Ce que prévoit votre contrat, durée, préavis, forme de la dénonciation, c'est lui qui le dit, et c'est lui que l'on saisit. **Dans l'exemple.** Un contrat de maintenance d'un an, 1 800 000 dinars par an, reconduit par périodes d'un an, avec un préavis de trois mois. Le dernier jour pour dénoncer tombe à la fin du neuvième mois.",
        "**Deux suites.** Si quelqu'un répond avant cette date, le contrat est reconduit, renégocié ou résilié : c'est choisi. Si personne ne répond, il repart pour douze mois, et 1 800 000 dinars sont engagés sans décision. **Ce que cela dit.** Reconduire est une décision comme une autre ; elle se prend avant le préavis, pas après. **Les services.** Un accord de niveau de service lie un prestataire et son client sur le service attendu. Savoir s'il a été tenu est la première question au moment de reconduire, voir [le contrat d'infogérance](" + L.infogerance + "). **Les montants** sont ceux d'un exemple construit.",
      ] },
      { heading: "Ce qu'il y a dans le logiciel", body: [
        "La figure empile cinq couches ; la troisième, les échéances, est celle que l'on attend en premier.",
      ], visual: 'couches', after: [
        "**Le registre et les documents.** Une fiche par contrat : parties, objet, montant, dates, type, site, responsable. Dans la fiche, le contrat signé, ses annexes et ses avenants ; un avenant est l'acte qui ajoute ou modifie une clause, et il se range avec le contrat qu'il modifie. Un système de gestion des documents sert à stocker, partager et suivre des fichiers, avec leurs versions : ici, la version signée est marquée comme telle, voir [archiver ses documents](" + L.archiver + ").",
        "**Les échéances et les obligations.** C'est la couche accentuée, puis ce que chaque partie doit : livrables, délais, pénalités, garanties, avec une date et une preuve. **Les droits et le journal.** Un contrat n'est pas lisible par tous : les droits disent qui voit quel contrat, et une piste d'audit garde la trace de qui a modifié quoi, voir [les rôles et le journal d'audit](" + L.roles + "). **L'arrivée d'un contrat.** Un contrat reçu par courrier s'enregistre comme le reste du courrier, voir [le bureau d'ordre](" + L.courrier + "), et un marché gagné devient une fiche, voir [les appels d'offres](" + L.offres + ").",
      ] },
      { heading: "Douze semaines, en commençant par l'inventaire", body: [
        "Douze semaines dans l'exemple, avant le circuit des nouveaux contrats.",
      ], visual: 'calendrier', after: [
        "**L'inventaire.** Trois semaines pour rassembler : les classeurs, les boîtes mail, et la liste de ce qui est payé. **Les fiches et les documents.** Une fiche par contrat ; le signé est retrouvé, ou réclamé à l'autre partie. **Les dates et les alertes.** Préavis, fins de terme, révisions, garanties, avec un nom pour chaque date. C'est le premier résultat visible : la liste des décisions des 90 prochains jours.",
        "**La lecture assistée.** Un modèle peut lire un contrat et proposer les dates, les montants et les clauses de durée, chacune avec sa page, voir [la lecture de pièces par IA](" + L.lecture + "). Une personne valide chaque date avant qu'elle n'entre dans l'échéancier : une date fausse est pire qu'une date absente. La précision se mesure d'abord sur des contrats dont vous connaissez déjà les dates, voir [mesurer qu'une IA marche](" + L.mesure + "). **Les obligations et les droits.** Puis le circuit des nouveaux contrats. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "La vie d'un contrat, en six temps", body: [
        "La figure suit un contrat, de la demande à l'échéance.",
      ], visual: 'vie', after: [
        "**Avant la signature.** Le cycle de vie d'un contrat va de la demande à la négociation, à la validation et à la signature, puis à l'exécution et au renouvellement. La demande dit le besoin, le budget et la personne responsable ; elle suit le même circuit qu'un achat, voir [les demandes d'achat](" + L.achats + "). La négociation garde les versions, et dit laquelle est la dernière. La validation dépend du montant. **La signature.** Le jour où le signé est classé, la fiche et les dates sont créées : pas trois mois après.",
        "**L'exécution et l'échéance.** Les obligations sont suivies, les avenants rattachés. L'échéance est le temps accentué : le préavis est vu à temps, et l'on choisit de reconduire, de renégocier ou de résilier. **Prêt à l'emploi ou sur mesure.** Des logiciels de gestion des contrats prêts à l'emploi existent, et conviennent quand vos contrats et votre circuit de validation entrent dans leur modèle. Le sur-mesure se justifie quand il faut plusieurs sociétés et plusieurs sites, des contrats en arabe et en français, des droits fins, un lien avec votre comptabilité et vos achats, et des documents gardés chez vous.",
      ], list: [
        "**Ce que vous recevez** : le registre des contrats ; le signé, les avenants et les versions dans chaque fiche ; l'échéancier et ses alertes ; la liste des décisions à 90 jours ; les obligations suivies ; les droits par contrat et le journal ; le circuit des nouveaux contrats ; la lecture assistée, validée par une personne.",
        "**Ce que l'entreprise évite** : le contrat reconduit sans décision, l'abonnement payé pour un site fermé, la version signée introuvable, la garantie expirée avant la panne, la révision de prix découverte sur la facture, le contrat que seule une personne partie connaissait.",
        "**Ce qui est mesuré** : contrats au registre et contrats payés sans fiche ; contrats sans responsable ; contrats sans document signé ; dates à 90 jours ; alertes sans réponse ; contrats reconduits sans décision ; obligations en retard.",
        "**Ce que fait Symloop** : l'inventaire avec vos équipes, le registre, les documents et leurs versions, l'échéancier et les alertes, la lecture assistée et ses essais, les droits et le journal, le lien avec vos outils, en arabe et en français.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel de gestion des contrats ?", a: "Un registre de tous vos contrats, avec pour chacun une fiche, le document signé et ses avenants, les dates qui comptent et leurs alertes, les obligations, et une personne responsable. On parle aussi de contrathèque." },
        { q: "C'est quoi une contrathèque ?", a: "L'endroit unique où sont rangés tous les contrats d'une entreprise et leurs avenants, avec une recherche. Un logiciel de gestion des contrats y ajoute les dates, les alertes et les obligations." },
        { q: "Comment suivre les échéances de ses contrats ?", a: "En saisissant pour chaque contrat sa durée, son mode de reconduction et son préavis. Le logiciel calcule le dernier jour du préavis et alerte à 90, 60 et 30 jours, avec une remontée si personne ne répond." },
        { q: "Comment éviter qu'un contrat se renouvelle sans qu'on le veuille ?", a: "En connaissant le dernier jour du préavis, pas seulement la date de fin, et en le confiant à une personne. Dans l'exemple, ce jour tombe trois mois avant la fin du terme." },
        { q: "Un tableau Excel de suivi des contrats suffit-il ?", a: "Pour vingt contrats tenus par une seule personne, oui. Au-delà, il n'alerte pas, ne garde pas les documents, ne dit pas qui a modifié une date, et dépend de la personne qui l'ouvre." },
        { q: "Une IA peut-elle lire nos contrats ?", a: "Elle peut proposer les dates, les montants et les clauses de durée, avec la page d'où ils viennent. Une personne valide chaque date avant qu'elle n'entre dans l'échéancier, et l'outil est d'abord mesuré sur des contrats dont vous connaissez les dates." },
        { q: "Qui a le droit de voir les contrats ?", a: "Vous le décidez, contrat par contrat ou par type : la direction, le service concerné, le juridique, la finance. Chaque consultation et chaque modification laisse une trace." },
        { q: "Par où commencer quand les contrats sont partout ?", a: "Par la comptabilité : la liste de ce qui est payé chaque mois ou chaque année. Chaque ligne a un contrat ; on retrouve ensuite le document, puis les dates." },
        { q: "Le logiciel dit-il si une clause est valable ?", a: "Non. Il suit ce que le contrat prévoit et vous alerte au bon moment. Ce qu'une clause vaut relève de votre conseil juridique." },
        { q: "Le logiciel gère-t-il les contrats de maintenance et les baux ?", a: "Oui : ce sont des types de contrat, chacun avec ses champs et ses dates propres, révision de prix pour l'un, renouvellement pour l'autre. Les types sont définis avec vous." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La date qui compte n'est pas la fin du contrat : c'est le dernier jour où l'on peut encore dire non." },
      { after: 2, text: "Reconduire est une décision comme une autre : elle se prend avant le préavis, pas après." },
    ],
    cta: { eyebrow: "Dites-nous combien de contrats vous avez, où ils sont rangés, et lequel s'est renouvelé sans vous : nous commençons par l'inventaire", title: "Contrats dans des classeurs et des boîtes mail, reconduction que personne n'a vue, abonnement payé pour rien, version signée introuvable, garantie expirée, ou société que vous dirigez en Algérie depuis la France", body: "Symloop construit le logiciel de gestion des contrats qui correspond à votre entreprise : registre, documents et versions, échéancier et alertes, obligations, droits et journal. Décrivez-nous vos contrats, vos sites et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.archiver, kind: '2027', name: 'Archiver ses documents : plan de classement, noms des fichiers, recherche' },
      { href: L.roles, kind: '2027', name: 'Rôles, droits et journal d’audit : qui voit quoi, qui modifie quoi' },
      { href: L.achats, kind: '2027', name: 'Demandes d’achat : approbation, budget engagé, bon de commande' },
      { href: L.offres, kind: '2027', name: 'Logiciel appel d’offres : veille, lecture du cahier des charges, pièces à fournir' },
    ] },
  },
  en: {
    kind: 'Contract management · Algeria · 2027', title: "Contract management software in Algeria (2027): three hundred contracts in binders, a contract renewed because nobody saw the notice date, a subscription paid for a closed site, and a signed version nobody can find; contract register, deadlines, alerts, obligations, and what we put in place",
    dek: "“We have three hundred contracts: suppliers, customers, maintenance, leases, insurance, subscriptions. They sit in binders and in the mailboxes of the people who signed them. A maintenance contract has just been renewed for a year because nobody saw the notice date, we are still paying a subscription for a closed site, and for some contracts nobody can find the signed version. Which software do we need to track our contracts?” A register with one record per contract, the signed document and its amendments, a schedule that alerts before each date that matters, and one person in charge per contract.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Contract management software', 'Contract register', 'Deadlines and notice dates', 'Automatic renewal', 'Amendments, versions and obligations', 'Algeria 2027'],
    intro: [
      "**Short answer.** Contract management software keeps four things: a register, with one record per contract, the parties, the subject, the amount, the dates and the person in charge; the documents, meaning the signed contract, its amendments and its versions; a schedule, which alerts before each date that matters, notice, end of term, price review, end of warranty; and each party's obligations, with their follow-up. The date that matters most is not the end of the contract: it is the last day on which it can still be terminated. In this page's example, 300 contracts carry 148 dates over twelve months, 23 of them notice dates within 90 days.",
      "This page is for companies with dozens or hundreds of contracts in force, in Algeria: industry, distribution, services, construction, health, multi-site groups, and for diaspora founders running a company here. The definitions come from public sources: contract management, contract lifecycle, tacit renewal, automatic renewal clause, amendment, service-level agreement, document management system, audit trail. The 300 contracts, their dates and the amounts are a constructed example. The page covers neither contract law, nor the validity of a clause, nor employment contracts, nor electronic signature, and does not replace legal advice: the tool follows what your contracts say, it does not say what they are worth.",
    ],
    sections: [
      { heading: "What the contract inventory finds", body: [
        "The figure lists five things found when all of a company's contracts are gathered, and what the software does with each.",
      ], visual: 'trouvailles', after: [
        "**Contract management.** It is the management of the contracts made with customers, suppliers, partners or staff: seeing that the terms are respected, documenting each change and having it agreed. **In the example.** 300 contracts: 96 supplier, 74 customer, 48 maintenance and service, 28 subscriptions, 22 leases and rentals, 18 insurance, 14 financing. The inventory finds 41 contracts with nobody in charge, 17 whose signed version cannot be found, 132 that renew by themselves, and 9 that are paid for a closed site or service.",
        "**Where the contracts are found.** In the binders, in the mailboxes, and above all in the accounts: whatever is paid regularly has a contract, even if nobody knows where it is. Matching against payment schedules is done once, see [cash management](" + L.tresorerie + "). **What the software does.** A name per contract, the signed copy in the record, a computed notice date, a site and a use for each contract, obligations listed. **What it does not do.** It does not say whether a clause is valid or whether a contract can be ended: it tells you when the question arises, and for whom.",
      ] },
      { heading: "One hundred and forty-eight dates in twelve months", body: [
        "The figure stacks, month by month, the dates the 300 contracts carry over the next twelve months.",
      ], visual: 'echeancier', after: [
        "**Four kinds of dates.** The last day of notice, the end of term, the price review, the end of warranty. In the example: 59 notice dates, 53 ends of term, 24 price reviews and 12 ends of warranty, that is 148 dates. **The next 90 days.** 23 notice dates fall in the first three months: 9, then 6, then 8. That is 23 decisions to take, by 23 people who do not necessarily know it.",
        "**Alerts.** Each date has a person in charge and three alerts, at 90, 60 and 30 days. An unanswered alert goes up one level: a date does not pass in silence. **The calendar.** Dates can be seen by month, by site, by supplier, by person in charge; they export to the diary. **What is measured.** Dates coming within 90 days; unanswered alerts; contracts renewed with no decision, which must be zero; contracts with nobody in charge; contracts with no signed document.",
      ] },
      { heading: "The only date that decides", body: [
        "The figure follows a one-year maintenance contract, and what happens depending on whether the notice date is seen.",
      ], visual: 'preavis', after: [
        "**Renewal.** Tacit renewal means the agreement renews automatically if neither party expresses the wish to end it; it is also called an automatic renewal clause. What your contract provides, term, notice, form of termination, is for the contract to say, and that is what gets entered. **In the example.** A one-year maintenance contract, 1,800,000 dinars a year, renewed by one-year periods, with three months of notice. The last day to give notice falls at the end of the ninth month.",
        "**Two outcomes.** If someone answers before that date, the contract is renewed, renegotiated or terminated: by choice. If nobody answers, it runs for another twelve months, and 1,800,000 dinars are committed with no decision. **What that says.** Renewing is a decision like any other; it is taken before the notice date, not after. **Services.** A service-level agreement binds a provider and its customer on the service expected. Knowing whether it was kept is the first question when renewing, see [the managed IT contract](" + L.infogerance + "). **The amounts** are those of a constructed example.",
      ] },
      { heading: "What is inside the software", body: [
        "The figure stacks five layers; the third, the deadlines, is the one people wait for first.",
      ], visual: 'couches', after: [
        "**The register and the documents.** One record per contract: parties, subject, amount, dates, type, site, person in charge. In the record, the signed contract, its annexes and its amendments; an amendment is the act that adds or changes a clause, and it is filed with the contract it changes. A document management system is used to store, share and track files, with their versions: here, the signed version is marked as such, see [archiving your documents](" + L.archiver + ").",
        "**Deadlines and obligations.** That is the accented layer, then what each party owes: deliverables, deadlines, penalties, warranties, with a date and a proof. **Rights and the log.** A contract is not readable by everyone: rights say who sees which contract, and an audit trail keeps the record of who changed what, see [roles and the audit log](" + L.roles + "). **When a contract arrives.** A contract received by post is registered like the rest of the mail, see [the mail registry](" + L.courrier + "), and a contract won becomes a record, see [tenders](" + L.offres + ").",
      ] },
      { heading: "Twelve weeks, starting with the inventory", body: [
        "Twelve weeks in the example, before the circuit for new contracts.",
      ], visual: 'calendrier', after: [
        "**The inventory.** Three weeks to gather: the binders, the mailboxes, and the list of what is paid. **Records and documents.** One record per contract; the signed copy is found, or requested from the other party. **Dates and alerts.** Notice dates, ends of term, reviews, warranties, with a name for each date. That is the first visible result: the list of decisions for the next 90 days.",
        "**Assisted reading.** A model can read a contract and propose the dates, the amounts and the term clauses, each with its page, see [reading documents with AI](" + L.lecture + "). A person validates each date before it enters the schedule: a wrong date is worse than a missing one. Accuracy is first measured on contracts whose dates you already know, see [measuring that an AI works](" + L.mesure + "). **Obligations and rights.** Then the circuit for new contracts. **The durations** are those of a constructed example.",
      ] },
      { heading: "The life of a contract, in six steps", body: [
        "The figure follows a contract, from the request to the deadline.",
      ], visual: 'vie', after: [
        "**Before signature.** The lifecycle of a contract goes from request to negotiation, approval and signature, then to performance and renewal. The request states the need, the budget and the person in charge; it follows the same circuit as a purchase, see [purchase requests](" + L.achats + "). Negotiation keeps the versions, and says which one is the latest. Approval depends on the amount. **Signature.** The day the signed copy is filed, the record and the dates are created: not three months later.",
        "**Performance and the deadline.** Obligations are tracked, amendments attached. The deadline is the accented step: the notice is seen in time, and you choose to renew, renegotiate or terminate. **Ready-made or custom.** Ready-made contract management software exists, and suits you when your contracts and your approval circuit fit its model. Custom work is justified when several companies and several sites are involved, contracts in Arabic and in French, fine-grained rights, a link with your accounting and your purchasing, and documents kept on your premises.",
      ], list: [
        "**What you receive**: the contract register; the signed copy, amendments and versions in each record; the schedule and its alerts; the list of decisions at 90 days; obligations tracked; rights per contract and the log; the circuit for new contracts; assisted reading, validated by a person.",
        "**What the company avoids**: the contract renewed with no decision, the subscription paid for a closed site, the signed version nobody can find, the warranty that expired before the breakdown, the price review discovered on the invoice, the contract only a departed employee knew about.",
        "**What is measured**: contracts in the register and contracts paid with no record; contracts with nobody in charge; contracts with no signed document; dates within 90 days; unanswered alerts; contracts renewed with no decision; overdue obligations.",
        "**What Symloop does**: the inventory with your teams, the register, the documents and their versions, the schedule and the alerts, assisted reading and its trials, rights and the log, the link with your tools, in Arabic and in French.",
      ], faq: [
        { q: "What is contract management software?", a: "A register of all your contracts, with for each one a record, the signed document and its amendments, the dates that matter and their alerts, the obligations, and a person in charge. It is also called a contract repository." },
        { q: "What is a contract repository?", a: "The single place where all of a company's contracts and their amendments are filed, with a search. Contract management software adds the dates, the alerts and the obligations." },
        { q: "How do you track contract deadlines?", a: "By entering for each contract its term, its renewal mode and its notice. The software computes the last day of notice and alerts at 90, 60 and 30 days, with an escalation if nobody answers." },
        { q: "How do you stop a contract renewing when you did not want it to?", a: "By knowing the last day of notice, not only the end date, and giving it to a person. In the example, that day falls three months before the end of the term." },
        { q: "Is an Excel contract tracker enough?", a: "For twenty contracts kept by one person, yes. Beyond that, it does not alert, does not keep the documents, does not say who changed a date, and depends on the person who opens it." },
        { q: "Can an AI read our contracts?", a: "It can propose the dates, the amounts and the term clauses, with the page they come from. A person validates each date before it enters the schedule, and the tool is first measured on contracts whose dates you know." },
        { q: "Who is allowed to see the contracts?", a: "You decide, contract by contract or by type: management, the department concerned, legal, finance. Every consultation and every change leaves a trace." },
        { q: "Where do you start when contracts are everywhere?", a: "With the accounts: the list of what is paid every month or every year. Each line has a contract; then the document is found, then the dates." },
        { q: "Does the software say whether a clause is valid?", a: "No. It follows what the contract provides and alerts you at the right moment. What a clause is worth is a matter for your legal adviser." },
        { q: "Does the software handle maintenance contracts and leases?", a: "Yes: they are contract types, each with its own fields and dates, price review for one, renewal for the other. The types are defined with you." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The date that matters is not the end of the contract: it is the last day you can still say no." },
      { after: 2, text: "Renewing is a decision like any other: it is taken before the notice date, not after." },
    ],
    cta: { eyebrow: "Tell us how many contracts you have, where they are kept, and which one renewed without you: we start with the inventory", title: "Contracts in binders and mailboxes, a renewal nobody saw, a subscription paid for nothing, a signed version nobody can find, an expired warranty, or a company you run in Algeria from France", body: "Symloop builds the contract management software that fits your company: register, documents and versions, schedule and alerts, obligations, rights and log. Describe your contracts to us, your sites and your tools." },
    related: { label: 'Also read', items: [
      { href: L.archiver, kind: '2027', name: 'Archiving company documents: filing plan, file names, search' },
      { href: L.roles, kind: '2027', name: 'Roles, rights and audit log: who sees what, who changes what' },
      { href: L.achats, kind: '2027', name: 'Purchase requests: approval, committed budget, purchase order' },
      { href: L.offres, kind: '2027', name: 'Tender software: watch, reading the tender document, documents to supply' },
    ] },
  },
  ar: {
    kind: 'تسيير العقود · الجزائر · 2027', title: "برنامج تسيير العقود في الجزائر (2027): ثلاثمئة عقد في الملفات، عقد تجدّد لأن لا أحد رأى أجل الإشعار، اشتراك يُدفَع لموقع مغلق، ونسخة موقَّعة لا يجدها أحد؛ سجل العقود، الآجال، التنبيهات، الالتزامات، وما نضعه",
    dek: "«عندنا ثلاثمئة عقد: موردون، زبائن، صيانة، إيجارات، تأمينات، واشتراكات. هي في الملفات وفي علب بريد من وقّعوها. عقد صيانة تجدّد لسنة لأن لا أحد رأى تاريخ الإشعار، ما زلنا ندفع اشتراكاً لموقع مغلق، ولبعض العقود لا أحد يجد النسخة الموقَّعة. أي برنامج نحتاج لمتابعة عقودنا؟» سجل فيه بطاقة لكل عقد، الوثيقة الموقَّعة وملحقاتها، رزنامة آجال تنبّه قبل كل تاريخ مهم، وشخص مسؤول عن كل عقد.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج تسيير العقود', 'برنامج إدارة العقود ومتابعتها', 'الآجال والإشعار المسبق', 'التجديد الضمني', 'الملحقات، النسخ، والالتزامات', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج تسيير العقود يمسك أربعة أشياء: سجلاً، فيه بطاقة لكل عقد، الأطراف، الموضوع، المبلغ، التواريخ، والشخص المسؤول؛ الوثائق، أي العقد الموقَّع، ملحقاته، ونسخه؛ رزنامة آجال، تنبّه قبل كل تاريخ مهم، الإشعار، نهاية المدة، مراجعة السعر، ونهاية الضمان؛ والتزامات كل طرف، مع متابعتها. والتاريخ الأهم ليس نهاية العقد: هو آخر يوم يمكن فيه إنهاؤه. في مثال هذه الصفحة، 300 عقد تحمل 148 تاريخاً في اثني عشر شهراً، منها 23 إشعاراً في 90 يوماً.",
      "هذه الصفحة موجّهة إلى المؤسسات التي لها عشرات أو مئات العقود الجارية، في الجزائر: الصناعة، التوزيع، الخدمات، البناء، الصحة، والمجمّعات ذات المواقع المتعددة، وإلى مؤسسي الجالية الذين يسيّرون شركة هنا. التعريفات من مصادر عمومية: تسيير العقود، دورة حياة العقد، التجديد الضمني، بند التجديد التلقائي، الملحق، اتفاق مستوى الخدمة، نظام تسيير الوثائق، وسجل التدقيق. والعقود الـ300، تواريخها، والمبالغ مثال مركَّب. والصفحة لا تتناول قانون العقود، ولا صحة بند، ولا عقود العمل، ولا التوقيع الإلكتروني، ولا تعوّض استشارة قانونية: الأداة تتابع ما تقوله عقودكم، ولا تقول ما قيمتها.",
    ],
    sections: [
      { heading: "ما يجده جرد العقود", body: [
        "الشكل يعرض خمسة أشياء نجدها حين نجمع كل عقود مؤسسة، وما يفعله البرنامج بكل واحد.",
      ], visual: 'trouvailles', after: [
        "**تسيير العقود.** هو تسيير العقود المبرمة مع الزبائن، الموردين، الشركاء، أو المستخدَمين: السهر على احترام الشروط، وتوثيق كل تعديل والاتفاق عليه. **في المثال.** 300 عقد: 96 مع موردين، 74 مع زبائن، 48 للصيانة والخدمات، 28 اشتراكاً، 22 عقد إيجار، 18 تأميناً، و14 للتمويل. والجرد يجد 41 عقداً دون مسؤول، 17 لا توجد نسختها الموقَّعة، 132 تتجدّد وحدها، و9 ندفعها لموقع أو خدمة مغلقة.",
        "**من أين نجد العقود.** من الملفات، من علب البريد، وخاصة من المحاسبة: ما يُدفَع بانتظام له عقد، حتى إن لم يعرف أحد أين هو. والمقاربة مع آجال الدفع تتم مرة واحدة، انظر [الخزينة](" + L.tresorerie + "). **ما يفعله البرنامج.** اسم لكل عقد، النسخة الموقَّعة في البطاقة، تاريخ إشعار محسوب، موقع واستعمال لكل عقد، والتزامات مسجَّلة. **ما لا يفعله.** لا يقول إن كان بند صحيحاً ولا إن كان عقد يمكن إنهاؤه: يقول لكم متى يُطرَح السؤال، وعلى من.",
      ] },
      { heading: "مئة وثمانية وأربعون تاريخاً في اثني عشر شهراً", body: [
        "الشكل يرصّ، شهراً بشهر، التواريخ التي تحملها العقود الـ300 في الاثني عشر شهراً القادمة.",
      ], visual: 'echeancier', after: [
        "**أربعة أنواع من التواريخ.** آخر يوم للإشعار، نهاية المدة، مراجعة السعر، ونهاية الضمان. في المثال: 59 إشعاراً، 53 نهاية مدة، 24 مراجعة سعر، و12 نهاية ضمان، أي 148 تاريخاً. **الأيام التسعون القادمة.** 23 إشعاراً تقع في الأشهر الثلاثة الأولى: 9، ثم 6، ثم 8. هي 23 قراراً يُتَّخذ، من 23 شخصاً لا يعلمون ذلك بالضرورة.",
        "**التنبيهات.** لكل تاريخ شخص مسؤول وثلاثة تنبيهات، قبل 90، 60، و30 يوماً. والتنبيه الذي لا يُجاب عنه يصعد إلى المستوى الأعلى: التاريخ لا يمر في صمت. **الرزنامة.** التواريخ تُرى حسب الشهر، الموقع، المورد، والمسؤول؛ وتُصدَّر نحو المفكرة. **ما يُقاس.** التواريخ القادمة في 90 يوماً؛ التنبيهات دون جواب؛ العقود المجدَّدة دون قرار، ويجب أن تكون صفراً؛ العقود دون مسؤول؛ والعقود دون وثيقة موقَّعة.",
      ] },
      { heading: "التاريخ الوحيد الذي يقرّر", body: [
        "الشكل يتابع عقد صيانة من سنة، وما يحدث حسب أن يُرى الإشعار أو لا.",
      ], visual: 'preavis', after: [
        "**التجديد.** التجديد الضمني يعني أن الاتفاق يتجدّد تلقائياً إذا لم يُبدِ أي طرف رغبته في إنهائه؛ ويُسمّى أيضاً بند التجديد التلقائي. وما ينص عليه عقدكم، المدة، الإشعار، وشكل الإنهاء، هو الذي يقوله، وهو ما يُدخَل. **في المثال.** عقد صيانة من سنة، " + I('1 800 000') + " دينار في السنة، يتجدّد بفترات من سنة، بإشعار مسبق من ثلاثة أشهر. وآخر يوم للإنهاء يقع في نهاية الشهر التاسع.",
        "**مساران.** إذا أجاب أحد قبل هذا التاريخ، يُجدَّد العقد، يُعاد التفاوض عليه، أو يُفسَخ: هو اختيار. وإذا لم يجب أحد، ينطلق لاثني عشر شهراً، ويُلتزَم بـ" + I('1 800 000') + " دينار دون قرار. **ما يقوله ذلك.** التجديد قرار كغيره؛ يُتَّخذ قبل الإشعار، لا بعده. **الخدمات.** اتفاق مستوى الخدمة يربط مقدّم خدمة بزبونه حول الخدمة المنتظَرة. ومعرفة إن كان احتُرم هو السؤال الأول عند التجديد، انظر [عقد التسيير المعلوماتي](" + L.infogerance + "). **المبالغ** هي مبالغ مثال مركَّب.",
      ] },
      { heading: "ما يوجد في البرنامج", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة، الآجال، هي التي تُنتظَر أولاً.",
      ], visual: 'couches', after: [
        "**السجل والوثائق.** بطاقة لكل عقد: الأطراف، الموضوع، المبلغ، التواريخ، النوع، الموقع، والمسؤول. وفي البطاقة، العقد الموقَّع، مرفقاته، وملحقاته؛ والملحق هو العقد الذي يضيف بنداً أو يعدّله، ويُحفَظ مع العقد الذي يعدّله. ونظام تسيير الوثائق يُستعمَل لحفظ الملفات، تقاسمها، ومتابعتها، مع نسخها: هنا، النسخة الموقَّعة مُعلَّمة كذلك، انظر [أرشفة الوثائق](" + L.archiver + ").",
        "**الآجال والالتزامات.** هي الطبقة المبرزة، ثم ما على كل طرف: التسليمات، الآجال، الغرامات، والضمانات، بتاريخ ودليل. **الصلاحيات والسجل.** العقد لا يقرؤه الجميع: الصلاحيات تقول من يرى أي عقد، وسجل التدقيق يحفظ أثر من غيّر ماذا، انظر [الأدوار وسجل التدقيق](" + L.roles + "). **وصول عقد.** العقد الذي يصل بالبريد يُسجَّل مثل باقي البريد، انظر [مكتب التنظيم](" + L.courrier + ")، والصفقة المربوحة تصير بطاقة، انظر [المناقصات](" + L.offres + ").",
      ] },
      { heading: "اثنا عشر أسبوعاً، بدءاً بالجرد", body: [
        "اثنا عشر أسبوعاً في المثال، قبل مسار العقود الجديدة.",
      ], visual: 'calendrier', after: [
        "**الجرد.** ثلاثة أسابيع للجمع: الملفات، علب البريد، وقائمة ما يُدفَع. **البطاقات والوثائق.** بطاقة لكل عقد؛ والنسخة الموقَّعة تُوجَد، أو تُطلَب من الطرف الآخر. **التواريخ والتنبيهات.** الإشعار، نهايات المدة، المراجعات، والضمانات، مع اسم لكل تاريخ. هي النتيجة الأولى المرئية: قائمة قرارات الأيام التسعين القادمة.",
        "**القراءة المدعومة.** نموذج يستطيع قراءة عقد واقتراح التواريخ، المبالغ، وبنود المدة، كل واحد مع صفحته، انظر [قراءة الوثائق بالذكاء الاصطناعي](" + L.lecture + "). وشخص يصادق على كل تاريخ قبل دخوله الرزنامة: تاريخ خاطئ أسوأ من تاريخ غائب. والدقة تُقاس أولاً على عقود تعرفون تواريخها، انظر [قياس أن الذكاء الاصطناعي يشتغل](" + L.mesure + "). **الالتزامات والصلاحيات.** ثم مسار العقود الجديدة. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "حياة عقد، في ست مراحل", body: [
        "الشكل يتابع عقداً، من الطلب إلى الأجل.",
      ], visual: 'vie', after: [
        "**قبل التوقيع.** دورة حياة العقد تذهب من الطلب إلى التفاوض، المصادقة، والتوقيع، ثم التنفيذ والتجديد. الطلب يقول الحاجة، الميزانية، والشخص المسؤول؛ ويتبع المسار نفسه كأي شراء، انظر [طلبات الشراء](" + L.achats + "). والتفاوض يحفظ النسخ، ويقول أيها الأخيرة. والمصادقة تتوقف على المبلغ. **التوقيع.** في اليوم الذي تُحفَظ فيه النسخة الموقَّعة، تُنشأ البطاقة والتواريخ: لا بعد ثلاثة أشهر.",
        "**التنفيذ والأجل.** الالتزامات تُتابَع، والملحقات تُربَط. والأجل هو المرحلة المبرزة: الإشعار يُرى في وقته، ونختار التجديد، إعادة التفاوض، أو الفسخ. **جاهز أو على المقاس.** توجد برامج جاهزة لتسيير العقود، وتناسب حين تدخل عقودكم ومسار المصادقة عندكم في نموذجها. والعمل على المقاس يُبرَّر حين يلزم عدة شركات وعدة مواقع، عقود بالعربية والفرنسية، صلاحيات دقيقة، ربط بمحاسبتكم ومشترياتكم، ووثائق تبقى عندكم.",
      ], list: [
        "**ما تتلقونه**: سجل العقود؛ النسخة الموقَّعة، الملحقات، والنسخ في كل بطاقة؛ رزنامة الآجال وتنبيهاتها؛ قائمة القرارات في 90 يوماً؛ الالتزامات متابَعة؛ الصلاحيات لكل عقد والسجل؛ مسار العقود الجديدة؛ والقراءة المدعومة، يصادق عليها شخص.",
        "**ما تتفاداه المؤسسة**: العقد المجدَّد دون قرار، الاشتراك المدفوع لموقع مغلق، النسخة الموقَّعة غير الموجودة، الضمان المنتهي قبل العطب، مراجعة السعر التي تُكتشَف في الفاتورة، والعقد الذي لم يكن يعرفه إلا شخص غادر.",
        "**ما يُقاس**: العقود في السجل والعقود المدفوعة دون بطاقة؛ العقود دون مسؤول؛ العقود دون وثيقة موقَّعة؛ التواريخ في 90 يوماً؛ التنبيهات دون جواب؛ العقود المجدَّدة دون قرار؛ والالتزامات المتأخرة.",
        "**ما تفعله Symloop**: الجرد مع فرقكم، السجل، الوثائق ونسخها، رزنامة الآجال والتنبيهات، القراءة المدعومة وتجاربها، الصلاحيات والسجل، والربط بأدواتكم، بالعربية والفرنسية.",
      ], faq: [
        { q: "ما هو برنامج تسيير العقود؟", a: "سجل لكل عقودكم، فيه لكل واحد بطاقة، الوثيقة الموقَّعة وملحقاتها، التواريخ المهمة وتنبيهاتها، الالتزامات، وشخص مسؤول. ويُسمّى أيضاً مكتبة العقود." },
        { q: "ما هي مكتبة العقود؟", a: "المكان الوحيد الذي تُحفَظ فيه كل عقود المؤسسة وملحقاتها، مع بحث. وبرنامج تسيير العقود يضيف إليها التواريخ، التنبيهات، والالتزامات." },
        { q: "كيف نتابع آجال عقودنا؟", a: "بإدخال مدة كل عقد، طريقة تجديده، وإشعاره. البرنامج يحسب آخر يوم للإشعار وينبّه قبل 90، 60، و30 يوماً، مع تصعيد إذا لم يجب أحد." },
        { q: "كيف نتفادى أن يتجدّد عقد دون أن نريد؟", a: "بمعرفة آخر يوم للإشعار، لا تاريخ النهاية فقط، وبإسناده إلى شخص. في المثال، هذا اليوم يقع قبل نهاية المدة بثلاثة أشهر." },
        { q: "هل يكفي جدول لمتابعة العقود؟", a: "لعشرين عقداً يمسكها شخص واحد، نعم. فوق ذلك، لا ينبّه، لا يحفظ الوثائق، لا يقول من غيّر تاريخاً، ويتوقف على من يفتحه." },
        { q: "هل يستطيع الذكاء الاصطناعي قراءة عقودنا؟", a: "يستطيع اقتراح التواريخ، المبالغ، وبنود المدة، مع الصفحة التي جاءت منها. وشخص يصادق على كل تاريخ قبل دخوله الرزنامة، والأداة تُقاس أولاً على عقود تعرفون تواريخها." },
        { q: "من يحق له أن يرى العقود؟", a: "أنتم تقرّرون، عقداً بعقد أو حسب النوع: المديرية، المصلحة المعنية، القانوني، والمالية. وكل اطلاع وكل تعديل يترك أثراً." },
        { q: "من أين نبدأ حين تكون العقود في كل مكان؟", a: "من المحاسبة: قائمة ما يُدفَع كل شهر أو كل سنة. لكل سطر عقد؛ ثم نجد الوثيقة، ثم التواريخ." },
        { q: "هل يقول البرنامج إن كان بند صحيحاً؟", a: "لا. يتابع ما ينص عليه العقد وينبّهكم في الوقت المناسب. وما قيمة بند من اختصاص مستشاركم القانوني." },
        { q: "هل يسيّر البرنامج عقود الصيانة والإيجار؟", a: "نعم: هي أنواع من العقود، لكل واحد حقوله وتواريخه، مراجعة السعر لهذا، والتجديد لذاك. والأنواع تُحدَّد معكم." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "التاريخ المهم ليس نهاية العقد: هو آخر يوم يمكن فيه أن نقول لا." },
      { after: 2, text: "التجديد قرار كغيره: يُتَّخذ قبل الإشعار، لا بعده." },
    ],
    cta: { eyebrow: "قولوا لنا كم عقداً عندكم، أين هي محفوظة، وأيها تجدّد دونكم: نبدأ بالجرد", title: "عقود في الملفات وعلب البريد، تجديد لم يره أحد، اشتراك يُدفَع دون مقابل، نسخة موقَّعة غير موجودة، ضمان منتهٍ، أو شركة تسيّرونها في الجزائر من فرنسا", body: "Symloop تبني برنامج تسيير العقود الذي يناسب مؤسستكم: سجل، وثائق ونسخ، رزنامة آجال وتنبيهات، التزامات، صلاحيات وسجل. صِفوا لنا عقودكم، مواقعكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.archiver, kind: '2027', name: 'أرشفة وثائق المؤسسة: مخطط الترتيب، التسمية، والبحث' },
      { href: L.roles, kind: '2027', name: 'الأدوار، الصلاحيات، وسجل التدقيق: من يرى ماذا، ومن يغيّر ماذا' },
      { href: L.achats, kind: '2027', name: 'طلبات الشراء: المصادقة، الميزانية الملتزَم بها، وأمر الشراء' },
      { href: L.offres, kind: '2027', name: 'برنامج المناقصات: الرصد، قراءة دفتر الشروط، والوثائق المطلوبة' },
    ] },
  },
};

const KEYWORDS = "logiciel gestion des contrats, logiciel gestion des contrats algérie 2027, logiciel suivi des contrats, outil gestion des contrats, contrathèque, logiciel contrathèque, tableau de suivi des contrats, suivi des contrats excel, gestion des contrats fournisseurs, logiciel de gestion des contrats de maintenance, logiciel gestion des baux, tacite reconduction, préavis contrat, ia analyse de contrat, contract management software, contract lifecycle management, برنامج إدارة العقود, برنامج متابعة العقود, نظام إدارة العقود, برنامج تسيير العقود, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
