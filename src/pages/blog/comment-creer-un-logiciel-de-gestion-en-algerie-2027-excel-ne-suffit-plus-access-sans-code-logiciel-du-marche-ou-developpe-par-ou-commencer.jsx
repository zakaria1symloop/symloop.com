import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-un-logiciel-de-gestion-en-algerie-2027-excel-ne-suffit-plus-access-sans-code-logiciel-du-marche-ou-developpe-par-ou-commencer.mjs';

const SLUG = 'comment-creer-un-logiciel-de-gestion-en-algerie-2027-excel-ne-suffit-plus-access-sans-code-logiciel-du-marche-ou-developpe-par-ou-commencer';
const FIGURES = ['fichier', 'voies', 'temps', 'couches', 'tranche', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  migrer: '/blog/migrer-vieux-logiciel-de-gestion-algerie-2027-windev-access-excel-vers-plateforme-web-mobile-sans-arreter/',
  cahier: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
  reprendre: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  gescom: '/blog/logiciel-gestion-commerciale-algerie-2027-devis-commande-bon-de-livraison-facture-stock-reglements-erp-ou-pas-sans-ressaisie/',
  erp: '/blog/logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues/',
  livrer: '/blog/livrer-une-application-sans-la-casser-algerie-2027-demonstration-deux-semaines-recette-a-distance-tests-mise-en-production-retour-arriere/',
  bloquee: '/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/',
  vivre: '/blog/faire-vivre-une-application-algerie-2027-cout-annee-stores-serveurs-mises-a-jour/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel de gestion · Algérie · 2027', title: "Comment créer un logiciel de gestion en Algérie (2027) : toute la gestion tient dans des fichiers Excel, cinq versions du même tableau, une seule personne sait s'en servir, Access, sans code, logiciel du marché ou développé, et par où commencer",
    dek: "« Toute notre gestion tient dans des fichiers Excel : les commandes dans l'un, le stock dans un autre, les factures dans un troisième. Deux personnes ne peuvent pas y travailler en même temps, il existe cinq versions du même fichier, et celui qui a tout construit s'en va en mars. Comment créer un logiciel de gestion pour notre entreprise : avec Access, un outil sans code, un logiciel du marché, ou en le faisant développer ? » Un logiciel de gestion n'est pas un grand fichier : c'est une base où chaque donnée est saisie une fois, avec des règles, des droits et un journal. On le crée en commençant par une seule chaîne, de bout en bout.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Créer un logiciel de gestion', 'Excel et Access', 'Logiciel du marché ou sur mesure', 'Modèle de données', 'Tranche par tranche', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Créer un logiciel de gestion, c'est passer de fichiers que l'on recopie à **une base où chaque information est saisie une seule fois**. Cinq voies existent : le tableur ou Access fait en interne, l'outil sans code, le logiciel du marché paramétré, l'ERP adapté, le logiciel développé pour vous. Le choix dépend de trois choses : **combien de personnes écrivent en même temps**, **à quel point vos règles sont particulières**, **qui le fera vivre dans trois ans**. Quelle que soit la voie, on commence par **une seule chaîne de bout en bout**, par exemple du devis à la facture, et non par une liste de modules ; et par **le dessin des données**, avant celui des écrans.",
      "Cette page s'adresse au gérant d'une entreprise de dix à cent personnes dont la gestion repose sur des fichiers, au responsable qui a construit ces fichiers et sait qu'ils ne tiendront plus, et au fondateur installé en France qui veut une gestion lisible de loin pour son entreprise en Algérie. Les définitions viennent de sources publiques : tableur, Access, plateforme sans code, logiciel du marché, logiciel sur mesure, base relationnelle, règle de gestion, contrôle d'accès par rôles, journal d'audit, tranche verticale, maintenance. L'entreprise de 25 personnes, ses cinq fichiers et son calendrier sont un exemple construit. La page ne donne aucun tarif.",
    ],
    sections: [
      { heading: "Le fichier qui se multiplie", body: [
        "La figure montre le même fichier de commandes six mois plus tard, puis la même information dans une base.",
      ], visual: 'fichier', after: [
        "**Le tableur n'est pas en cause.** Un tableur est une application de calcul, d'organisation, d'analyse et de stockage de données sous forme de tableau. Il fait très bien ce travail pour une personne. Il casse quand il sert de registre à plusieurs : dans l'exemple, le fichier des commandes est devenu cinq fichiers, et la même question (combien de commandes ce mois-ci ?) reçoit cinq réponses, de 398 à 421. **Ce que disent les études.** Elles estiment qu'environ 1 % des formules des tableurs en service sont fausses. S'y ajoutent l'absence de contrôle sur qui voit et modifie quoi, et la difficulté de savoir qui a changé quoi, et quand. Les tableurs récents gardent un historique des versions : cela aide, sans faire un registre.",
        "**Trois signes.** Un nom de fichier qui finit par « v2 » ou « final ». Une personne sans qui le fichier ne s'ouvre plus. Une question simple qui demande une demi-journée de recopie. **Ce que change une base.** Chaque donnée y est tenue à un seul endroit : c'est le principe de la source unique, où chaque élément n'est modifié qu'en un lieu. Une base relationnelle range l'information en tables de lignes et de colonnes, organisées pour réduire les répétitions et protéger l'intégrité des données. Le client est écrit une fois ; la commande le désigne, elle ne le recopie pas. **Ce que cette page ne traite pas.** Sortir d'un ancien logiciel est un autre chantier, décrit dans [migrer son vieux logiciel de gestion](" + L.migrer + ").",
      ] },
      { heading: "Cinq façons d'y arriver, et où chacune casse", body: [
        "La figure met les cinq voies côte à côte : ce que chacune donne, et le point où elle cède.",
      ], visual: 'voies', after: [
        "**Access.** C'est un système de gestion de base de données : il gère plusieurs utilisateurs et le verrouillage des enregistrements, et convient souvent à une solution de service. Ses bornes sont connues : une base de bureau plafonne à 2 Go, et l'on recommande en général de rester sous 1 Go de données. Sa vraie limite est ailleurs : il repose sur la personne qui l'a construit. **Sans code.** Une plateforme sans code permet de créer un logiciel par une interface graphique. Elle convient à un formulaire, un suivi, un circuit de validation. Pour des applications de grande taille ou critiques, son adéquation reste discutée ; et il faut vérifier, avant de s'engager, comment vos données en sortent.",
        "**Du marché, ERP, ou développé.** Un logiciel du marché est un produit prêt à l'emploi : il s'obtient et s'exploite en général à moindre coût qu'un développement, et c'est le bon choix quand vos besoins sont ceux de tout le monde, comme pour [la gestion commerciale](" + L.gescom + "). Un [ERP](" + L.erp + ") intègre les principaux processus autour d'une base partagée. Un logiciel sur mesure est développé pour une organisation précise ; il est souvent considéré comme plus coûteux au départ. Mais le coût et le délai d'adaptation d'un produit du marché peuvent rejoindre ceux d'un développement : c'est le point à chiffrer avant de choisir. **La règle pratique.** Le standard pour ce que tout le monde fait ; le sur-mesure pour ce qui vous distingue ; et jamais deux saisies entre les deux.",
      ] },
      { heading: "Créer un logiciel de gestion, en six temps", body: [
        "La figure donne l'ordre ; le deuxième temps, les données, est celui qu'on saute le plus volontiers.",
      ], visual: 'temps', after: [
        "**Une chaîne, pas une liste de modules.** On ne commence pas par « ventes, stock, achats, comptabilité ». On commence par un trajet : par exemple, du devis à la facture encaissée. Tout ce que ce trajet touche est construit ; le reste attend. **Les données avant les écrans.** Trois sortes d'objets décrivent presque toute gestion : des fiches (client, article, fournisseur), des documents (devis, commande, bon de livraison, facture), des mouvements (une entrée en stock, un règlement). Pour chacun, deux questions : qui le crée, une seule fois ? Qui a le droit de le modifier ensuite ?",
        "**Les règles, dites à voix haute.** Une règle de gestion définit ou contraint un aspect de l'activité : pas de livraison au-delà du plafond de crédit, pas de remise au-dessus d'un seuil sans accord, pas de facture sans bon de livraison. Le plus souvent, elles ne sont écrites nulle part : elles vivent dans la tête de trois personnes. Les faire dire, puis les écrire, est la moitié du travail, et la matière d'un [cahier des charges](" + L.cahier + ") utile. **Reprendre l'existant.** Vos fichiers ne sont pas jetés : ils deviennent la matière de départ, nettoyés, dédoublonnés, importés à blanc plusieurs fois, comme dans [reprendre ses données](" + L.reprendre + ").",
      ] },
      { heading: "Ce dont un logiciel de gestion est fait", body: [
        "La figure empile cinq couches ; la première est celle qui survit à toutes les autres.",
      ], visual: 'couches', after: [
        "**Les données.** C'est la couche qui survit à tout : aux écrans qu'on refait, à l'outil qu'on change, au prestataire qu'on quitte. Exigez de pouvoir les emporter, dans un format lisible, à tout moment. La dépendance à un fournisseur, c'est ne plus pouvoir en changer sans coûts de transfert importants : elle se joue ici, et dans la remise du code, sujet de [l'application bloquée chez un développeur](" + L.bloquee + "). **Les règles.** La logique métier est la partie du programme qui encode les règles réelles déterminant comment les données sont créées et conservées. C'est elle qui refuse un stock négatif ou une facture en double. Et une opération y est entière ou sans effet : une commande à moitié enregistrée n'existe pas.",
        "**Les droits et le journal.** Le contrôle d'accès par rôles réserve chaque partie du système aux utilisateurs autorisés : le magasinier voit le stock, pas les marges. Un journal d'audit garde la trace chronologique de ce qui a été fait : qui a modifié ce prix, et quand. Ce sont les deux choses qu'un fichier partagé donne mal. **Les écrans et les états.** Un écran par geste, dans la langue de l'équipe, utilisable au téléphone là où le travail se fait ; des états que le gérant lit sans les demander. **Après la livraison.** La maintenance est la modification du logiciel après sa livraison ; l'article de référence lui attribue 80 à 90 % du coût sur la durée de vie. Un logiciel de gestion se fait vivre : voir [faire vivre une application](" + L.vivre + ").",
      ] },
      { heading: "Couche par couche, ou tranche par tranche", body: [
        "La figure construit le même logiciel dans deux ordres : seize cases, deux semaines chacune.",
      ], visual: 'tranche', after: [
        "**Deux ordres pour le même travail.** Dans l'exemple, quatre chaînes et quatre couches font seize cases. Construit couche par couche (toutes les données, puis toutes les règles), le logiciel avance partout et ne sert nulle part : la chaîne des ventes n'est complète qu'à la semaine 26. Construit tranche par tranche, elle tourne à la semaine 8. Une tranche verticale traverse toutes les couches du logiciel pour une seule fonction. **Ce que ça change.** À la semaine 8, de vraies commandes passent. Les équipes disent ce qui manque. Les trois tranches suivantes sont construites en le sachant.",
        "**La première version.** On parle de produit minimum viable : une version qui a juste assez de fonctions pour servir à ses premiers utilisateurs. Pour un logiciel de gestion, cela veut dire une chaîne complète, pas un peu de tout. **Ce qu'il faut demander.** Une démonstration à intervalle fixe, sur vos propres données. La date de la première chaîne utilisable. La façon de [livrer sans casser](" + L.livrer + ") ce qui tourne déjà. **Ce qu'il faut éviter.** Six mois de développement suivis d'une grande mise en service : c'est le schéma de gauche, celui où l'on découvre le dernier jour que la règle des remises était une autre.",
      ] },
      { heading: "Huit semaines, dans l'exemple", body: [
        "Huit semaines pour la chaîne des ventes d'une entreprise de 25 personnes, dont une de cadrage.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : la chaîne retenue, les fichiers ouverts un par un, les règles dites par ceux qui les appliquent, la liste des utilisateurs. **La tranche.** Quatre semaines pour la chaîne des ventes, montrée chaque semaine. **La reprise.** En parallèle : clients et articles nettoyés, soldes repris. **L'essai en double.** Deux semaines où fichiers et logiciel sont tenus ensemble ; chaque écart est expliqué, et l'on découvre souvent à cette occasion des erreurs anciennes du fichier. **La mise en service.** Les fichiers passent en lecture seule : on ne les supprime pas, on cesse d'y écrire.",
        "**Ensuite.** Les chaînes suivantes viennent par vagues, dans l'ordre où elles gênent : le stock, puis les achats, puis la trésorerie. **Les durées** sont celles d'un exemple construit : une entreprise de 25 personnes, une chaîne. Des règles plus nombreuses, plusieurs sites ou une reprise difficile demandent davantage. **Quand ne pas développer.** Si un logiciel du marché fait ce que vous faites, sans ressaisie, prenez-le : c'est aussi notre réponse. Le développement se justifie par ce que vous faites autrement que les autres.",
      ], list: [
        "**Ce que le gérant reçoit** : une chaîne complète en service ; ses données dans une base qu'il peut exporter ; ses règles écrites ; des droits par rôle et un journal ; le code et les comptes à son nom ; le plan des vagues suivantes.",
        "**Ce que l'entreprise ne fait plus** : recopier une commande d'un fichier à l'autre, chercher la bonne version, dépendre d'une seule personne, découvrir un stock négatif, refaire le même tableau à chaque fin de mois.",
        "**Ce qui est mesuré** : nombre de fichiers encore tenus à la main ; nombre de ressaisies par commande ; délai entre la livraison et la facture ; écarts relevés pendant l'essai en double ; semaine de mise en service de chaque chaîne.",
        "**Ce que fait Symloop** : le cadrage, le modèle de données, la construction tranche par tranche, la reprise des fichiers, l'essai en double, la mise en service, puis les vagues suivantes et la maintenance.",
      ], faq: [
        { q: "Comment créer un logiciel de gestion ?", a: "En partant d'une chaîne de bout en bout, pas d'une liste de modules : dessinez les données (fiches, documents, mouvements), écrivez les règles, construisez cette chaîne complète, reprenez vos fichiers, puis élargissez. L'outil vient après : tableur, Access, sans code, logiciel du marché ou développement." },
        { q: "Peut-on créer un logiciel de gestion avec Excel ?", a: "Pour une personne et un besoin simple, oui. Dès que plusieurs personnes écrivent en même temps, le fichier se multiplie en versions. Un tableur calcule ; il contrôle mal qui modifie quoi, et ne garantit pas qu'une donnée n'existe qu'une fois." },
        { q: "Peut-on créer un logiciel de gestion avec Access ?", a: "Oui, pour un service : Access gère plusieurs utilisateurs et le verrouillage des enregistrements. Ses bornes : 2 Go par base de bureau, et une dépendance forte à la personne qui l'a construit. C'est une étape honorable, rarement une destination." },
        { q: "Comment créer un logiciel de gestion commerciale ?", a: "Commencez par la chaîne devis, commande, livraison, facture, règlement, où chaque document naît du précédent sans ressaisie. Vérifiez d'abord si un logiciel du marché la couvre ; développez ce que vos règles ont de particulier." },
        { q: "Comment créer un logiciel de gestion de stock ?", a: "Par un journal de mouvements : chaque entrée, sortie ou transfert est une ligne datée, et le stock en est la somme. Un tableau qui ne garde que la quantité ne peut pas expliquer un écart." },
        { q: "Logiciel du marché ou logiciel sur mesure ?", a: "Du marché quand vos besoins sont ceux de votre secteur ; sur mesure quand vos règles sont ce qui vous distingue ; souvent les deux, reliés. Chiffrez l'adaptation du produit du marché : elle peut rejoindre le coût d'un développement." },
        { q: "Combien de temps pour créer un logiciel de gestion ?", a: "Dans l'exemple de cette page, huit semaines pour une première chaîne en service dans une entreprise de 25 personnes, puis une vague par chaîne. Demandez la date de la première chaîne utilisable, pas seulement la date de fin." },
        { q: "Par quel module commencer ?", a: "Par la chaîne qui produit le plus de ressaisies ou d'erreurs aujourd'hui, souvent celle des ventes. Ni par celle qui paraît la plus simple, ni par toutes à la fois." },
        { q: "À qui appartiennent le code et les données ?", a: "Posez la question avant de commencer. Vos données doivent rester exportables à tout moment, dans un format lisible ; la remise du code source et des comptes doit être prévue par écrit. Sans cela, changer de prestataire devient très difficile." },
        { q: "Que deviennent nos fichiers Excel ?", a: "Ils servent de matière de départ : nettoyés, importés, comparés au logiciel pendant l'essai en double. Puis ils passent en lecture seule. Excel reste utile pour analyser un export, plus pour tenir le registre." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Un tableur garde des cellules. Un logiciel de gestion garde des faits." },
      { after: 4, text: "Demandez la date de la première chaîne utilisable, pas la date de fin." },
    ],
    cta: { eyebrow: "Dites-nous quels fichiers tiennent votre gestion aujourd'hui et quelle chaîne vous gêne le plus : nous commençons par elle", title: "Cinq versions du même fichier, une personne sans qui rien ne s'ouvre, un logiciel du marché qui ne suit pas vos règles, ou un fondateur en France qui veut une gestion lisible de loin", body: "Symloop dessine le modèle de données, construit le logiciel chaîne par chaîne, reprend vos fichiers et le fait vivre ensuite. Décrivez-nous votre activité : ce que vous vendez, qui saisit quoi, et le fichier dont tout dépend." },
    related: { label: 'À lire aussi', items: [
      { href: L.migrer, kind: '2027', name: 'Migrer son vieux logiciel de gestion sans arrêter' },
      { href: L.cahier, kind: '2027', name: 'Cahier des charges : quoi écrire, comparer trois devis' },
      { href: L.gescom, kind: '2027', name: 'Logiciel de gestion commerciale : une seule chaîne' },
      { href: L.erp, kind: '2027', name: 'Logiciel ERP : quand il en faut un, par où commencer' },
    ] },
  },
  en: {
    kind: 'Management software · Algeria · 2027', title: "How to create management software in Algeria (2027): the whole business runs on Excel files, five versions of the same sheet, only one person knows how it works, Access, no-code, off-the-shelf or custom-built, and where to start",
    dek: "“Our whole management runs on Excel files: orders in one, stock in another, invoices in a third. Two people cannot work in them at the same time, there are five versions of the same file, and the person who built it all is leaving in March. How do we create management software for our company: with Access, a no-code tool, off-the-shelf software, or by having it developed?” Management software is not a big file: it is a base where each piece of data is entered once, with rules, rights and a log. It is created by starting with a single chain, from end to end.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Creating management software', 'Excel and Access', 'Off-the-shelf or custom software', 'Data model', 'Slice by slice', 'Algeria 2027'],
    intro: [
      "**Short answer.** Creating management software means moving from files that get copied to **a base where each piece of information is entered only once**. There are five routes: a spreadsheet or Access made in-house, a no-code tool, off-the-shelf software configured, an adapted ERP, software developed for you. The choice depends on three things: **how many people write at the same time**, **how particular your rules are**, **who will keep it alive in three years**. Whatever the route, you start with **a single chain from end to end**, for example from quote to invoice, and not with a list of modules; and with **the drawing of the data**, before that of the screens.",
      "This page is for the manager of a company of ten to a hundred people whose management rests on files, for the person who built those files and knows they will not hold, and for the founder based in France who wants management they can read from afar for their company in Algeria. The definitions come from public sources: spreadsheet, Access, no-code platform, off-the-shelf software, custom software, relational database, business rule, role-based access control, audit trail, vertical slice, maintenance. The 25-person company, its five files and its calendar are a constructed example. The page gives no prices.",
    ],
    sections: [
      { heading: "The file that multiplies", body: [
        "The figure shows the same order file six months later, then the same information in a base.",
      ], visual: 'fichier', after: [
        "**The spreadsheet is not to blame.** A spreadsheet is a computer application for computation, organization, analysis and storage of data in tabular form. It does that job very well for one person. It breaks when it serves as a register for several: in the example, the order file has become five files, and the same question (how many orders this month?) gets five answers, from 398 to 421. **What the studies say.** They estimate that around 1% of all formulas in operational spreadsheets are in error. Add the lack of controls on who can see and modify what, and the difficulty of knowing who changed what, and when. Modern spreadsheets keep a revision history: it helps, without making a register.",
        "**Three signs.** A file name ending in “v2” or “final”. One person without whom the file no longer opens. A simple question that takes half a day of copying. **What a base changes.** Each piece of data is kept in one place: that is the single source of truth, where every element is edited in only one place. A relational database arranges information in tables of rows and columns, organised to reduce redundancy and protect data integrity. The customer is written once; the order points to it, it does not copy it. **What this page does not cover.** Leaving an old piece of software is another job, described in [migrating old management software](" + L.migrer + ").",
      ] },
      { heading: "Five ways to get there, and where each breaks", body: [
        "The figure sets the five routes side by side: what each gives, and the point where it gives way.",
      ], visual: 'voies', after: [
        "**Access.** It is a database management system: it is multi-user and handles record-locking, and is often a good fit for department solutions. Its bounds are known: a desktop database is capped at 2 GB, and the generally accepted limit is 1 GB or less of data. Its real limit is elsewhere: it rests on the person who built it. **No-code.** A no-code platform supports creating software through a graphical user interface. It suits a form, a tracker, an approval circuit. For large-scale or mission-critical applications, its suitability is still questioned; and you should check, before committing, how your data gets out.",
        "**Off-the-shelf, ERP, or developed.** Off-the-shelf software is a ready-made product: it can generally be obtained and operated at a lower cost than development, and it is the right choice when your needs are everyone's, as for [sales management](" + L.gescom + "). An [ERP](" + L.erp + ") integrates the main processes around a shared database. Custom software is developed for a specific organisation; it is often considered more expensive at the start. But the cost and delay of customising an off-the-shelf product can add up to those of development: that is the point to price before choosing. **The practical rule.** Standard for what everybody does; custom for what sets you apart; and never two entries between the two.",
      ] },
      { heading: "Creating management software, in six steps", body: [
        "The figure gives the order; the second step, the data, is the one most readily skipped.",
      ], visual: 'temps', after: [
        "**A chain, not a list of modules.** You do not start with “sales, stock, purchasing, accounting”. You start with a path: for example, from the quote to the invoice paid. Everything that path touches is built; the rest waits. **Data before screens.** Three kinds of objects describe almost all management: records (customer, item, supplier), documents (quote, order, delivery note, invoice), movements (a stock entry, a payment). For each, two questions: who creates it, only once? Who has the right to change it afterwards?",
        "**The rules, said out loud.** A business rule defines or constrains some aspect of the business: no delivery beyond the credit ceiling, no discount above a threshold without approval, no invoice without a delivery note. Most often they are written nowhere: they live in the heads of three people. Getting them said, then writing them down, is half the work, and the substance of a useful [specification](" + L.cahier + "). **Taking over what exists.** Your files are not thrown away: they become the starting material, cleaned, de-duplicated, imported in rehearsal several times, as in [taking over your data](" + L.reprendre + ").",
      ] },
      { heading: "What management software is made of", body: [
        "The figure stacks five layers; the first is the one that outlives all the others.",
      ], visual: 'couches', after: [
        "**The data.** It is the layer that outlives everything: the screens that get redone, the tool that gets changed, the provider you leave. Insist on being able to take it with you, in a readable format, at any time. Vendor lock-in is no longer being able to change vendor without substantial switching costs: it is decided here, and in the handover of the code, the subject of [the application stuck with a developer](" + L.bloquee + "). **The rules.** Business logic is the part of the program that encodes the real-world rules determining how data can be created and stored. It is what refuses a negative stock or a duplicate invoice. And an operation there is complete or has no effect: a half-recorded order does not exist.",
        "**Rights and the log.** Role-based access control restricts each part of the system to authorised users: the storekeeper sees the stock, not the margins. An audit trail keeps a chronological record of what was done: who changed this price, and when. These are the two things a shared file gives poorly. **Screens and reports.** One screen per gesture, in the team's language, usable on a phone where the work is done; reports the manager reads without asking for them. **After delivery.** Maintenance is the modification of software after delivery; the reference article attributes 80 to 90 percent of the lifecycle cost to it. Management software has to be kept alive: see [keeping an application alive](" + L.vivre + ").",
      ] },
      { heading: "Layer by layer, or slice by slice", body: [
        "The figure builds the same software in two orders: sixteen cells, two weeks each.",
      ], visual: 'tranche', after: [
        "**Two orders for the same work.** In the example, four chains and four layers make sixteen cells. Built layer by layer (all the data, then all the rules), the software advances everywhere and is used nowhere: the sales chain is complete only at week 26. Built slice by slice, it runs at week 8. A vertical slice is a cross-section through all the layers of the software for a single function. **What it changes.** At week 8, real orders go through. The teams say what is missing. The next three slices are built knowing it.",
        "**The first version.** It is called a minimum viable product: a version with just enough features to be usable by its first users. For management software, that means one complete chain, not a little of everything. **What to ask for.** A demonstration at a fixed interval, on your own data. The date of the first usable chain. The way to [deliver without breaking](" + L.livrer + ") what already runs. **What to avoid.** Six months of development followed by one big go-live: that is the left-hand pattern, the one where you find out on the last day that the discount rule was a different one.",
      ] },
      { heading: "Eight weeks, in the example", body: [
        "Eight weeks for the sales chain of a 25-person company, one of them for scoping.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: the chain chosen, the files opened one by one, the rules said by those who apply them, the list of users. **The slice.** Four weeks for the sales chain, shown every week. **The take-over.** In parallel: customers and items cleaned, balances carried over. **The parallel run.** Two weeks in which files and software are kept together; every gap is explained, and old errors in the file are often found on that occasion. **Go-live.** The files become read-only: they are not deleted, people simply stop writing in them.",
        "**Afterwards.** The next chains come in waves, in the order in which they hurt: stock, then purchasing, then cash. **The durations** are those of a constructed example: a 25-person company, one chain. More rules, several sites or a difficult take-over need more. **When not to develop.** If off-the-shelf software does what you do, with no retyping, take it: that is our answer too. Development is justified by what you do differently from the others.",
      ], list: [
        "**What the manager receives**: one complete chain in service; their data in a base they can export; their rules written down; rights per role and a log; the code and the accounts in their name; the plan for the next waves.",
        "**What the company no longer does**: copy an order from one file to another, look for the right version, depend on a single person, discover a negative stock, redo the same table at every month end.",
        "**What is measured**: number of files still kept by hand; number of re-entries per order; time between delivery and invoice; gaps found during the parallel run; go-live week of each chain.",
        "**What Symloop does**: scoping, the data model, building slice by slice, taking over the files, the parallel run, go-live, then the next waves and maintenance.",
      ], faq: [
        { q: "How do you create management software?", a: "By starting from one chain end to end, not from a list of modules: draw the data (records, documents, movements), write the rules, build that complete chain, take over your files, then widen. The tool comes after: spreadsheet, Access, no-code, off-the-shelf software or development." },
        { q: "Can you create management software with Excel?", a: "For one person and a simple need, yes. As soon as several people write at the same time, the file multiplies into versions. A spreadsheet calculates; it controls poorly who changes what, and does not guarantee that a piece of data exists only once." },
        { q: "Can you create management software with Access?", a: "Yes, for a department: Access is multi-user and handles record-locking. Its bounds: 2 GB per desktop database, and a strong dependence on the person who built it. It is an honourable stage, rarely a destination." },
        { q: "How do you create sales management software?", a: "Start with the chain quote, order, delivery, invoice, payment, where each document is born from the previous one with no retyping. First check whether off-the-shelf software covers it; develop what is particular in your rules." },
        { q: "How do you create stock management software?", a: "With a log of movements: every entry, exit or transfer is a dated line, and the stock is their sum. A table that only keeps the quantity cannot explain a gap." },
        { q: "Off-the-shelf or custom software?", a: "Off-the-shelf when your needs are those of your sector; custom when your rules are what sets you apart; often both, connected. Price the customisation of the off-the-shelf product: it can add up to the cost of development." },
        { q: "How long does it take to create management software?", a: "In this page's example, eight weeks for a first chain in service in a 25-person company, then one wave per chain. Ask for the date of the first usable chain, not only the end date." },
        { q: "Which module should we start with?", a: "With the chain that produces the most retyping or errors today, often sales. Neither the one that looks simplest, nor all of them at once." },
        { q: "Who owns the code and the data?", a: "Ask the question before starting. Your data must remain exportable at any time, in a readable format; the handover of the source code and the accounts must be provided for in writing. Without that, changing provider becomes very hard." },
        { q: "What happens to our Excel files?", a: "They serve as starting material: cleaned, imported, compared with the software during the parallel run. Then they become read-only. Excel remains useful for analysing an export, no longer for keeping the register." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "A spreadsheet keeps cells. Management software keeps facts." },
      { after: 4, text: "Ask for the date of the first usable chain, not the end date." },
    ],
    cta: { eyebrow: "Tell us which files hold your management today and which chain hurts most: we start with that one", title: "Five versions of the same file, one person without whom nothing opens, off-the-shelf software that does not follow your rules, or a founder in France who wants management they can read from afar", body: "Symloop draws the data model, builds the software chain by chain, takes over your files and keeps it alive afterwards. Describe your business to us: what you sell, who enters what, and the file everything depends on." },
    related: { label: 'Also read', items: [
      { href: L.migrer, kind: '2027', name: 'Migrating old management software without stopping' },
      { href: L.cahier, kind: '2027', name: 'Specification: what to write, comparing three quotes' },
      { href: L.gescom, kind: '2027', name: 'Sales management software: one single chain' },
      { href: L.erp, kind: '2027', name: 'ERP software: when you need one, where to start' },
    ] },
  },
  ar: {
    kind: 'برنامج التسيير · الجزائر · 2027', title: "كيف يُنشأ برنامج تسيير في الجزائر (2027): كل التسيير في ملفات إكسل، خمس نسخ من الجدول نفسه، شخص واحد يعرف كيف يشتغل، أكسس، دون برمجة، برنامج جاهز أو مطوَّر، ومن أين نبدأ",
    dek: "«كل تسييرنا في ملفات إكسل: الطلبيات في واحد، المخزون في آخر، والفواتير في ثالث. لا يستطيع شخصان العمل فيها في الوقت نفسه، توجد خمس نسخ من الملف نفسه، والذي بنى كل شيء سيغادر في مارس. كيف ننشئ برنامج تسيير لمؤسستنا: بأكسس، بأداة دون برمجة، ببرنامج جاهز من السوق، أم بتطويره؟» برنامج التسيير ليس ملفاً كبيراً: هو قاعدة تُدخَل فيها كل معلومة مرة واحدة، مع قواعد وصلاحيات وسجل. ويُنشأ بالبدء بسلسلة واحدة، من أولها إلى آخرها.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['إنشاء برنامج تسيير', 'إكسل وأكسس', 'برنامج جاهز أم على المقاس', 'نموذج البيانات', 'شريحة بشريحة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** إنشاء برنامج تسيير هو الانتقال من ملفات تُنسخ إلى **قاعدة تُدخَل فيها كل معلومة مرة واحدة**. وتوجد خمس طرق: جدول البيانات أو أكسس يُصنع داخلياً، أداة دون برمجة، برنامج جاهز من السوق يُضبط، نظام متكامل يُكيَّف، أو برنامج يُطوَّر لكم. والاختيار يتوقف على ثلاثة أشياء: **كم شخصاً يكتب في الوقت نفسه**، **إلى أي حد قواعدكم خاصة**، و**من سيتعهده بعد ثلاث سنوات**. وأياً كانت الطريق، نبدأ بـ**سلسلة واحدة من أولها إلى آخرها**، مثلاً من عرض السعر إلى الفاتورة، لا بقائمة وحدات؛ وبـ**رسم البيانات**، قبل رسم الشاشات.",
      "هذه الصفحة موجّهة إلى مسيّر مؤسسة من عشرة إلى مئة شخص يقوم تسييرها على ملفات، إلى المسؤول الذي بنى هذه الملفات ويعرف أنها لن تصمد، وإلى المؤسس المقيم في فرنسا الذي يريد تسييراً يُقرأ من بعيد لمؤسسته في الجزائر. التعريفات من مصادر عمومية: جدول البيانات، أكسس، منصة دون برمجة، البرنامج الجاهز، البرنامج على المقاس، قاعدة البيانات العلائقية، قاعدة التسيير، التحكم في الوصول حسب الأدوار، سجل التدقيق، الشريحة العمودية، والصيانة. والمؤسسة ذات 25 شخصاً وملفاتها الخمسة ورزنامتها مثال مركَّب. والصفحة لا تعطي أي سعر.",
    ],
    sections: [
      { heading: "الملف الذي يتكاثر", body: [
        "الشكل يُظهر ملف الطلبيات نفسه بعد ستة أشهر، ثم المعلومة نفسها في قاعدة.",
      ], visual: 'fichier', after: [
        "**الجدول ليس المتهم.** جدول البيانات تطبيق للحساب والتنظيم والتحليل وتخزين البيانات في شكل جدول. وهو يؤدي هذا العمل جيداً لشخص واحد. وينكسر حين يصير سجلاً لعدة أشخاص: في المثال، صار ملف الطلبيات خمسة ملفات، والسؤال نفسه (كم طلبية هذا الشهر؟) يتلقى خمسة أجوبة، من 398 إلى 421. **ما تقوله الدراسات.** تقدّر أن نحو 1 بالمئة من صيغ الجداول المستعملة خاطئة. ويُضاف غياب المراقبة على من يرى ويعدّل ماذا، وصعوبة معرفة من غيّر ماذا، ومتى. والجداول الحديثة تحفظ تاريخ النسخ: هذا يساعد، دون أن يصنع سجلاً.",
        "**ثلاث علامات.** اسم ملف ينتهي بـ «" + I('v2') + "» أو «" + I('final') + "». شخص لا يُفتح الملف دونه. وسؤال بسيط يتطلب نصف يوم من النسخ. **ما تغيّره القاعدة.** كل معلومة فيها تُمسك في مكان واحد: هذا مبدأ المصدر الوحيد، حيث لا يُعدَّل كل عنصر إلا في موضع واحد. وقاعدة البيانات العلائقية ترتّب المعلومة في جداول من أسطر وأعمدة، منظَّمة لتقليل التكرار وحماية سلامة البيانات. الزبون يُكتب مرة؛ والطلبية تشير إليه، لا تنسخه. **ما لا تعالجه هذه الصفحة.** الخروج من برنامج قديم ورشة أخرى، في [ترحيل برنامج التسيير القديم](" + L.migrer + ").",
      ] },
      { heading: "خمس طرق للوصول، وأين تنكسر كل واحدة", body: [
        "الشكل يضع الطرق الخمس جنباً إلى جنب: ما تعطيه كل واحدة، والنقطة التي تستسلم عندها.",
      ], visual: 'voies', after: [
        "**أكسس.** هو نظام لتسيير قواعد البيانات: يدعم عدة مستعملين وقفل التسجيلات، ويناسب غالباً حلاً لمصلحة واحدة. وحدوده معروفة: قاعدة المكتب لا تتجاوز 2 جيغابايت، والمتعارف عليه البقاء تحت 1 جيغابايت من البيانات. وحدّه الحقيقي في مكان آخر: هو يقوم على الشخص الذي بناه. **دون برمجة.** المنصة دون برمجة تسمح بإنشاء برنامج عبر واجهة رسومية. وتناسب استمارة، متابعة، أو مسار موافقة. أما للتطبيقات الكبيرة أو الحساسة، فملاءمتها ما زالت موضع نقاش؛ ويجب التحقق، قبل الالتزام، من طريقة خروج بياناتكم منها.",
        "**جاهز، نظام متكامل، أو مطوَّر.** البرنامج الجاهز منتوج معدّ للاستعمال: يُقتنى ويُشغَّل عموماً بكلفة أقل من التطوير، وهو الاختيار الصحيح حين تكون حاجاتكم حاجات الجميع، كما في [التسيير التجاري](" + L.gescom + "). و[النظام المتكامل](" + L.erp + ") يجمع العمليات الرئيسية حول قاعدة مشتركة. والبرنامج على المقاس يُطوَّر لمنظمة بعينها؛ ويُعتبر غالباً أعلى كلفة في البداية. لكن كلفة تكييف منتوج جاهز وأجله قد يبلغان كلفة التطوير وأجله: وهذه هي النقطة التي تُحسب قبل الاختيار. **القاعدة العملية.** الجاهز لما يفعله الجميع؛ والمقاس لما يميّزكم؛ ولا إدخال مرتين بينهما أبداً.",
      ] },
      { heading: "إنشاء برنامج تسيير، في ست مراحل", body: [
        "الشكل يعطي الترتيب؛ والمرحلة الثانية، البيانات، هي التي تُتخطى بأسهل ما يكون.",
      ], visual: 'temps', after: [
        "**سلسلة، لا قائمة وحدات.** لا نبدأ بـ«المبيعات، المخزون، المشتريات، المحاسبة». نبدأ بمسار: مثلاً، من عرض السعر إلى الفاتورة المحصَّلة. كل ما يمسّه هذا المسار يُبنى؛ والباقي ينتظر. **البيانات قبل الشاشات.** ثلاثة أنواع من الأشياء تصف تقريباً كل تسيير: بطاقات (زبون، سلعة، مورّد)، وثائق (عرض سعر، طلبية، وصل تسليم، فاتورة)، وحركات (دخول إلى المخزون، تسديد). ولكل واحد سؤالان: من ينشئه، مرة واحدة؟ ومن له حق تعديله بعدها؟",
        "**القواعد، كما تُقال.** قاعدة التسيير تحدّد أو تقيّد جانباً من النشاط: لا تسليم فوق سقف الدَّين، لا تخفيض فوق عتبة دون موافقة، ولا فاتورة دون وصل تسليم. وهي في الغالب غير مكتوبة في أي مكان: تعيش في رؤوس ثلاثة أشخاص. وجعلها تُقال، ثم كتابتها، نصف العمل، ومادة [دفتر شروط](" + L.cahier + ") نافع. **استرجاع الموجود.** ملفاتكم لا تُرمى: تصير مادة البداية، منظَّفة، دون تكرار، ومستوردة تجريبياً عدة مرات، كما في [استرجاع البيانات](" + L.reprendre + ").",
      ] },
      { heading: "مما يتكوّن برنامج التسيير", body: [
        "الشكل يرتّب خمس طبقات؛ والأولى هي التي تعيش بعد كل الأخريات.",
      ], visual: 'couches', after: [
        "**البيانات.** هي الطبقة التي تنجو من كل شيء: من الشاشات التي تُعاد، من الأداة التي تُغيَّر، ومن المتعامل الذي تتركونه. اشترطوا أن تستطيعوا أخذها، في صيغة مقروءة، في أي وقت. والارتهان لمورّد هو ألا تستطيعوا تغييره دون تكاليف انتقال كبيرة: ويُحسم هنا، وفي تسليم الشفرة، موضوع [التطبيق العالق عند مطوّر](" + L.bloquee + "). **القواعد.** منطق المهنة هو جزء البرنامج الذي يُرمّز القواعد الحقيقية المحدِّدة لطريقة إنشاء البيانات وحفظها. وهو الذي يرفض مخزوناً سالباً أو فاتورة مكررة. والعملية فيه كاملة أو دون أثر: طلبية نصف مسجَّلة لا وجود لها.",
        "**الصلاحيات والسجل.** التحكم في الوصول حسب الأدوار يحصر كل جزء من النظام في المستعملين المأذون لهم: أمين المخزن يرى المخزون، لا الهوامش. وسجل التدقيق يحفظ الأثر الزمني لما فُعل: من عدّل هذا السعر، ومتى. وهذان هما الشيئان اللذان يعطيهما الملف المشترك بشكل سيئ. **الشاشات والكشوف.** شاشة لكل حركة، بلغة الفريق، تُستعمل على الهاتف حيث يجري العمل؛ وكشوف يقرؤها المسيّر دون أن يطلبها. **بعد التسليم.** الصيانة هي تعديل البرنامج بعد تسليمه؛ والمقال المرجعي ينسب إليها من 80 إلى 90 بالمئة من الكلفة على مدى عمره. وبرنامج التسيير يُتعهَّد: انظر [تعهّد تطبيق](" + L.vivre + ").",
      ] },
      { heading: "طبقة بطبقة، أو شريحة بشريحة", body: [
        "الشكل يبني البرنامج نفسه بترتيبين: ست عشرة خانة، أسبوعان لكل واحدة.",
      ], visual: 'tranche', after: [
        "**ترتيبان للعمل نفسه.** في المثال، أربع سلاسل وأربع طبقات تصنع ست عشرة خانة. إذا بُني طبقة بطبقة (كل البيانات، ثم كل القواعد)، تقدّم البرنامج في كل مكان ولم يُستعمل في أي مكان: سلسلة المبيعات لا تكتمل إلا في الأسبوع 26. وإذا بُني شريحة بشريحة، اشتغلت في الأسبوع 8. والشريحة العمودية مقطع يعبر كل طبقات البرنامج لوظيفة واحدة. **ما يتغير.** في الأسبوع 8، تمرّ طلبيات حقيقية. والفرق تقول ما ينقص. والشرائح الثلاث الموالية تُبنى مع معرفة ذلك.",
        "**النسخة الأولى.** تسمى المنتوج الأدنى القابل للاستعمال: نسخة فيها ما يكفي من الوظائف ليستعملها أوائل المستعملين. ولبرنامج التسيير، هذا يعني سلسلة كاملة، لا قليلاً من كل شيء. **ما يُطلب.** عرض في آجال ثابتة، على بياناتكم أنتم. تاريخ أول سلسلة قابلة للاستعمال. وطريقة [التسليم دون كسر](" + L.livrer + ") ما يشتغل من قبل. **ما يُتجنب.** ستة أشهر من التطوير ثم وضع كبير في الخدمة: هذا مخطط الطبقات، الذي يُكتشف فيه في اليوم الأخير أن قاعدة التخفيضات كانت غيرها.",
      ] },
      { heading: "ثمانية أسابيع، في المثال", body: [
        "ثمانية أسابيع لسلسلة المبيعات في مؤسسة من 25 شخصاً، منها أسبوع للتأطير.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: السلسلة المختارة، الملفات تُفتح واحداً واحداً، القواعد يقولها من يطبّقها، وقائمة المستعملين. **الشريحة.** أربعة أسابيع لسلسلة المبيعات، تُعرض كل أسبوع. **الاسترجاع.** بالتوازي: زبائن وسلع منظَّفة، وأرصدة مسترجَعة. **التشغيل المزدوج.** أسبوعان يُمسك فيهما الملفات والبرنامج معاً؛ كل فارق يُفسَّر، وتُكتشف غالباً بهذه المناسبة أخطاء قديمة في الملف. **الوضع في الخدمة.** الملفات تصير للقراءة فقط: لا تُحذف، بل يُتوقف عن الكتابة فيها.",
        "**بعد ذلك.** السلاسل الموالية تأتي بموجات، بالترتيب الذي تُزعج به: المخزون، ثم المشتريات، ثم الخزينة. **المدد** هي مدد مثال مركَّب: مؤسسة من 25 شخصاً، وسلسلة واحدة. وقواعد أكثر، أو عدة مواقع، أو استرجاع صعب، تتطلب أكثر. **متى لا يُطوَّر.** إذا كان برنامج جاهز يفعل ما تفعلون، دون إعادة إدخال، خذوه: هذا جوابنا كذلك. والتطوير يُبرَّر بما تفعلونه بشكل مختلف عن غيركم.",
      ], list: [
        "**ما يتلقاه المسيّر**: سلسلة كاملة في الخدمة؛ بياناته في قاعدة يستطيع تصديرها؛ قواعده مكتوبة؛ صلاحيات حسب الدور وسجل؛ الشفرة والحسابات باسمه؛ ومخطط الموجات الموالية.",
        "**ما لا تفعله المؤسسة بعد الآن**: نسخ طلبية من ملف إلى آخر، البحث عن النسخة الصحيحة، التوقف على شخص واحد، اكتشاف مخزون سالب، وإعادة الجدول نفسه كل آخر شهر.",
        "**ما يُقاس**: عدد الملفات التي ما زالت تُمسك باليد؛ عدد مرات إعادة الإدخال لكل طلبية؛ المدة بين التسليم والفاتورة؛ الفوارق المسجَّلة أثناء التشغيل المزدوج؛ وأسبوع وضع كل سلسلة في الخدمة.",
        "**ما تفعله Symloop**: التأطير، نموذج البيانات، البناء شريحة بشريحة، استرجاع الملفات، التشغيل المزدوج، الوضع في الخدمة، ثم الموجات الموالية والصيانة.",
      ], faq: [
        { q: "كيف يُنشأ برنامج تسيير؟", a: "بالانطلاق من سلسلة واحدة من أولها إلى آخرها، لا من قائمة وحدات: ارسموا البيانات (بطاقات، وثائق، حركات)، اكتبوا القواعد، ابنوا هذه السلسلة كاملة، استرجعوا ملفاتكم، ثم وسّعوا. والأداة تأتي بعد ذلك: جدول، أكسس، دون برمجة، برنامج جاهز، أو تطوير." },
        { q: "هل يمكن إنشاء برنامج تسيير بإكسل؟", a: "لشخص واحد وحاجة بسيطة، نعم. وما إن يكتب عدة أشخاص في الوقت نفسه، يتكاثر الملف في نسخ. الجدول يحسب؛ ويراقب بشكل سيئ من يعدّل ماذا، ولا يضمن أن المعلومة موجودة مرة واحدة." },
        { q: "هل يمكن إنشاء برنامج تسيير بأكسس؟", a: "نعم، لمصلحة واحدة: أكسس (" + I('Access') + ") يدعم عدة مستعملين وقفل التسجيلات. وحدوده: 2 جيغابايت لقاعدة المكتب، وتوقّف كبير على الشخص الذي بناه. هو مرحلة محترمة، ونادراً ما يكون وجهة." },
        { q: "كيف يُنشأ برنامج تسيير تجاري؟", a: "ابدؤوا بسلسلة عرض السعر، الطلبية، التسليم، الفاتورة، والتسديد، حيث تولد كل وثيقة من سابقتها دون إعادة إدخال. تحققوا أولاً هل يغطيها برنامج جاهز؛ وطوّروا ما هو خاص في قواعدكم." },
        { q: "كيف يُنشأ برنامج لتسيير المخزون؟", a: "بسجل حركات: كل دخول أو خروج أو تحويل سطر مؤرَّخ، والمخزون مجموعها. والجدول الذي لا يحفظ إلا الكمية لا يستطيع تفسير فارق." },
        { q: "برنامج جاهز أم برنامج على المقاس؟", a: "الجاهز حين تكون حاجاتكم حاجات قطاعكم؛ والمقاس حين تكون قواعدكم هي ما يميّزكم؛ وغالباً الاثنان، مربوطين. واحسبوا كلفة تكييف المنتوج الجاهز: قد تبلغ كلفة التطوير." },
        { q: "كم من الوقت لإنشاء برنامج تسيير؟", a: "في مثال هذه الصفحة، ثمانية أسابيع لأول سلسلة في الخدمة في مؤسسة من 25 شخصاً، ثم موجة لكل سلسلة. اسألوا عن تاريخ أول سلسلة قابلة للاستعمال، لا عن تاريخ النهاية فقط." },
        { q: "بأي وحدة نبدأ؟", a: "بالسلسلة التي تُنتج اليوم أكثر إعادة إدخال أو أخطاء، وغالباً سلسلة المبيعات. لا بالتي تبدو الأبسط، ولا بها كلها دفعة واحدة." },
        { q: "لمن تعود الشفرة والبيانات؟", a: "اطرحوا السؤال قبل البدء. بياناتكم يجب أن تبقى قابلة للتصدير في أي وقت، في صيغة مقروءة؛ وتسليم الشفرة المصدرية والحسابات يجب أن يُنصّ عليه كتابةً. ودون ذلك، يصير تغيير المتعامل صعباً جداً." },
        { q: "ماذا تصير ملفات إكسل عندنا؟", a: "تصير مادة البداية: تُنظَّف، تُستورد، وتُقارَن بالبرنامج أثناء التشغيل المزدوج. ثم تصير للقراءة فقط. ويبقى إكسل نافعاً لتحليل ما يُصدَّر، لا لمسك السجل." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "جدول البيانات يحفظ خانات. وبرنامج التسيير يحفظ وقائع." },
      { after: 4, text: "اسألوا عن تاريخ أول سلسلة قابلة للاستعمال، لا عن تاريخ النهاية." },
    ],
    cta: { eyebrow: "قولوا لنا أي الملفات تمسك تسييركم اليوم وأي سلسلة تزعجكم أكثر: نبدأ بها", title: "خمس نسخ من الملف نفسه، شخص لا يُفتح شيء دونه، برنامج جاهز لا يتبع قواعدكم، أو مؤسس في فرنسا يريد تسييراً يُقرأ من بعيد", body: "Symloop ترسم نموذج البيانات، تبني البرنامج سلسلة بسلسلة، تسترجع ملفاتكم، وتتعهده بعد ذلك. صِفوا لنا نشاطكم: ما تبيعونه، من يُدخل ماذا، والملف الذي يتوقف عليه كل شيء." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.migrer, kind: '2027', name: 'ترحيل برنامج التسيير القديم دون توقف' },
      { href: L.cahier, kind: '2027', name: 'دفتر الشروط: ماذا يُكتب، ومقارنة ثلاثة عروض' },
      { href: L.gescom, kind: '2027', name: 'برنامج التسيير التجاري: سلسلة واحدة' },
      { href: L.erp, kind: '2027', name: 'النظام المتكامل: متى يلزم، ومن أين نبدأ' },
    ] },
  },
};

const KEYWORDS = "comment créer un logiciel de gestion 2027, comment créer un logiciel de gestion commerciale, comment concevoir un logiciel de gestion, comment créer un logiciel de gestion de stock, comment créer un logiciel, logiciel de gestion avec excel, logiciel de gestion avec access, logiciel sur mesure algérie, développement logiciel de gestion algérie, remplacer excel par un logiciel, how to create management software, build business management software, custom business software algeria, replace excel with software, off-the-shelf or custom software, كيف أنشئ برنامج تسيير, برنامج تسيير الجزائر, برنامج على المقاس, بديل إكسل, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
