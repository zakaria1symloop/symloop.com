import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues.mjs';

const SLUG = 'logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues';
const FIGURES = ['signes', 'base', 'couches', 'choisir', 'fiches', 'vagues'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  gestion: '/blog/logiciel-gestion-commerciale-algerie-2027-devis-commande-bon-de-livraison-facture-stock-reglements-erp-ou-pas-sans-ressaisie/',
  reprendre: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  migrer: '/blog/migrer-vieux-logiciel-de-gestion-algerie-2027-windev-access-excel-vers-plateforme-web-mobile-sans-arreter/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  production: '/blog/on-promet-des-delais-qu-on-ne-tient-pas-planification-de-production-application-algerie-2027-capacite-charge-goulot-date-promise-calculee/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel ERP · Algérie · 2027', title: "Logiciel ERP en Algérie (2027) : quatre outils qui ne se parlent pas et des chiffres qui ne concordent jamais, ce qu'un ERP relie, quand il en faut un, par quels modules commencer, pourquoi les projets s'enlisent",
    dek: "« On a un logiciel pour la facturation, un tableur pour le stock, un autre pour les achats, et la comptabilité reçoit tout en fin de mois. Tout le monde ressaisit, et les chiffres ne concordent jamais. On nous dit qu'il faut un ERP. Qu'est-ce que c'est exactement, en a-t-on besoin, lequel choisir, et pourquoi tant de projets s'enlisent ? » Un ERP n'est pas un logiciel de plus : c'est une seule base où chaque donnée n'est saisie qu'une fois. Il se déploie par vagues, après avoir nettoyé les fiches.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel ERP', 'Progiciel de gestion intégré', 'Données de référence', 'Choisir un ERP', 'Déploiement par vagues', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un ERP, c'est **une seule base** que tous les services partagent : un article, un client, un fournisseur n'y existent qu'une fois, et une vente saisie une fois met à jour le stock, la créance et la marge. Il en faut un quand **la même information se ressaisit dans trois outils** et que les chiffres de fin de mois ne concordent pas, pas parce que l'entreprise a atteint une taille. Trois conditions de réussite : **nettoyer les fiches** avant de migrer ; **jouer vos propres scénarios** avant de choisir, pour compter ce que le logiciel ne fait pas ; **déployer par vagues**, en commençant par les ventes et le stock. Huit mois dans l'exemple, quatre vagues, chacune utilisée avant la suivante.",
      "Cette page s'adresse au gérant d'une entreprise de négoce, de distribution, de fabrication ou de services qui travaille avec plusieurs outils et des tableurs, et au fondateur installé en France qui veut lire les chiffres de son entreprise en Algérie sans attendre la fin du mois. Les définitions citées viennent de sources publiques : le progiciel de gestion intégré, la planification des besoins en composants dont il est issu, les données de référence, la source unique de vérité, la migration de données, l'adoption par phases ou d'un seul coup, la dépendance envers un fournisseur. L'entreprise, son article aux quatre quantités, ses 1 240 fiches et son calendrier sont un exemple construit. Cette page ne donne aucun prix et ne traite ni de fiscalité, ni de paie, ni des obligations comptables : voyez votre expert-comptable.",
    ],
    sections: [
      { heading: "Faut-il un ERP ? Six signes", body: [
        "La figure oppose, sur six points, une entreprise à qui ses outils suffisent et une entreprise à qui un ERP devient utile.",
      ], visual: 'signes', after: [
        "**Ce que c'est.** L'ERP, ou progiciel de gestion intégré, est la gestion intégrée des principaux processus d'une entreprise, souvent en temps réel, au moyen de logiciels. Le sigle est attribué au cabinet Gartner, qui l'a employé dans les années 1990 pour désigner le prolongement de la planification des besoins en composants, née dans les usines. Le mot qui compte est « intégrée » : les services ne partagent pas des fichiers, ils partagent une base.",
        "**Le bon critère.** Ce n'est ni le chiffre d'affaires ni l'effectif : c'est le nombre de fois où la même donnée est ressaisie, et le temps passé chaque mois à rapprocher des fichiers. Une entreprise de dix personnes qui fabrique, stocke et livre peut en avoir besoin ; une entreprise de cinquante personnes qui ne vend que des prestations, pas forcément. **Si deux signes seulement vous concernent**, un logiciel de gestion commerciale bien tenu suffit souvent : c'est l'objet de [la page sur le logiciel de gestion commerciale](" + L.gestion + ").",
      ] },
      { heading: "Le même article : quatre réponses, ou une seule", body: [
        "La figure montre la quantité disponible d'un article, selon quatre outils puis dans une seule base.",
      ], visual: 'base', after: [
        "**Quatre copies.** Dans l'exemple, le même matin, la facturation annonce 120 pièces disponibles, le tableur du magasin 96, celui des achats 104, la comptabilité 131. Personne ne ment : chaque outil tient sa copie, mise à jour à son rythme. La bonne quantité se trouve en allant compter. **Un seul maître.** Le principe a un nom, la source unique de vérité : organiser les données de sorte que chaque élément ne soit créé et modifié qu'à un seul endroit. C'est la définition pratique d'un ERP.",
        "**Ce que cela change.** Une vente saisie une fois diminue le stock, crée la créance, alimente la marge et prépare l'écriture pour la comptabilité. Un achat reçu augmente le stock et crée la dette envers le fournisseur. Plus personne ne retape, donc plus personne ne se trompe en retapant. **Le piège.** Un ERP installé à côté des tableurs, sans les remplacer, devient une cinquième copie : le projet réussit le jour où les tableurs s'arrêtent.",
      ] },
      { heading: "Un ERP, en cinq couches", body: [
        "La couche accentuée est celle des données de référence.",
      ], visual: 'couches', after: [
        "**Les données de référence.** Ce sont les données sur les entités de l'entreprise qui donnent leur contexte aux transactions : les articles, les clients, les fournisseurs. Une fiche article porte une référence, une unité, une famille ; si elle existe en double, le stock et les ventes se partagent entre deux fiches, et aucun chiffre n'est juste. **Les flux.** Un document naît du précédent : le devis devient commande, la commande devient livraison, la livraison devient facture. On ne ressaisit rien, on valide.",
        "**Les modules.** Ventes, achats, stock, production ou projets, finance : on n'active que ceux qui servent. Une entreprise de négoce n'a pas besoin du module de production ; un atelier, si, et la planification y obéit aux règles décrites dans [le guide sur la planification de production](" + L.production + "). **Le contrôle.** Qui saisit, qui approuve, qui a changé ce prix : c'est [le guide sur les rôles, les droits et le journal d'audit](" + L.roles + "). **La lecture.** Les chiffres se lisent dans la même base, le jour même, selon [le guide sur le tableau de bord du gérant](" + L.tableau + ").",
      ] },
      { heading: "Choisir un ERP, en six temps", body: [
        "Le premier temps est accentué : écrire vos flux.",
      ], visual: 'choisir', after: [
        "**Vos scénarios, pas la démonstration.** Écrivez dix situations réelles : une vente avec remise et livraison partielle, un retour, une commande fournisseur reçue incomplète, un article vendu au mètre et acheté au rouleau. Demandez à les voir jouées, avec vos fiches. Ce que le logiciel ne sait pas faire s'appelle un écart : on le compte, puis on décide, écart par écart, d'adapter le logiciel ou de changer sa façon de faire. **Standard ou sur mesure.** La plupart des ERP intègrent des pratiques éprouvées, et ils diffèrent par la facilité avec laquelle on peut les modifier.",
        "**Trois familles.** Un progiciel du marché, dont des suites comme Odoo, qui existe en une édition communautaire à code ouvert et une édition propriétaire ; un progiciel adapté par un intégrateur ; ou une application construite autour de vos flux, quand les écarts sont trop nombreux sur ce qui fait votre métier. **Les questions qui restent.** Où vivent vos données, et pouvez-vous les reprendre entières ? La dépendance envers un fournisseur est la situation d'un client qui ne peut plus en changer sans coûts importants : on la mesure avant de signer. Et ce que l'ERP ne remplace pas se branche, comme l'explique [le guide sur l'intégration d'un logiciel existant](" + L.integrer + ").",
      ] },
      { heading: "Nettoyer les fiches avant de migrer", body: [
        "La figure suit un fichier de 1 240 articles, en trois passes.",
      ], visual: 'fiches', after: [
        "**Pourquoi d'abord.** La migration de données consiste à sélectionner, préparer, extraire et transformer des données, puis à les transférer définitivement d'un système à un autre. Le mot important est « préparer ». Dans l'exemple, 180 fiches étaient des doublons et 150 n'avaient pas bougé depuis deux ans : plus d'un quart du fichier. Importées telles quelles, elles auraient faussé le stock dès le premier jour. **Dans l'ancien outil.** Le nettoyage se fait avant, là où les gens savent encore lire les fiches.",
        "**Trois fichiers.** Les articles, les clients, les fournisseurs. Pour chacun : fusionner les doublons, archiver ce qui ne sert plus, compléter ce qui manque, puis nommer un responsable, parce qu'un fichier propre sans gardien se salit de nouveau. La méthode complète, avec la répétition de la bascule, est dans [le guide pour reprendre ses données](" + L.reprendre + ") ; le passage depuis un ancien logiciel sur un poste, dans [le guide pour migrer un vieux logiciel de gestion](" + L.migrer + ").",
      ] },
      { heading: "Quatre vagues en huit mois, en 2027", body: [
        "Huit mois dans l'exemple, dont le premier pour cadrer et nettoyer.",
      ], visual: 'vagues', after: [
        "**Par vagues, pas d'un coup.** On oppose deux façons de mettre un système en service. L'adoption d'un seul coup : le nouveau système remplace l'ancien instantanément, sans période de transition. L'adoption par phases : les parties de l'organisation sont mises en service l'une après l'autre. Pour une entreprise qui ne peut pas s'arrêter, la seconde limite ce qui peut mal tourner à une vague. **L'ordre.** Les ventes et le stock d'abord, parce que c'est là que passent l'argent et les promesses faites aux clients ; les achats ensuite ; la production ou les projets ; la finance et la lecture en dernier, quand les chiffres qu'elles lisent sont devenus fiables.",
        "**Une vague est finie quand elle est utilisée**, pas quand elle est livrée : les tableurs qu'elle remplace sont fermés, et un chiffre se lit dans l'ERP et nulle part ailleurs. **Pourquoi les projets s'enlisent.** Trois causes sont à surveiller : des fiches importées sans nettoyage, un périmètre qui veut tout couvrir dès le premier jour, et des équipes qui gardent leurs tableurs « au cas où ». Les trois se traitent avant d'écrire une ligne de configuration.",
      ], list: [
        "**Ce que le gérant reçoit** : ses flux écrits, trois fichiers maîtres nettoyés, dix scénarios joués et les écarts comptés, un choix argumenté entre standard, adapté et sur mesure, puis quatre vagues, chacune avec ses tableurs fermés et ses chiffres lus dans la base.",
        "**Ce que l'entreprise ne fait plus** : retaper une vente dans trois outils, appeler le magasin avant de promettre, rapprocher des fichiers trois jours par mois, acheter un logiciel sur la foi d'une démonstration.",
        "**Ce qui est mesuré** : nombre de ressaisies par vente, écart entre le stock affiché et le stock compté, jours pour sortir les chiffres du mois, tableurs encore ouverts après chaque vague.",
        "**Ce que fait Symloop** : l'écriture des flux, le nettoyage et la reprise des données, les scénarios et le compte des écarts, la mise en place ou la construction, le branchement sur vos outils existants, puis le déploiement par vagues et la mesure.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel ERP ?", a: "C'est un logiciel de gestion intégré : une seule base que les ventes, les achats, le stock, la production et la finance partagent. Chaque donnée n'y est saisie qu'une fois, et tous les services lisent le même chiffre au même moment." },
        { q: "Mon entreprise a-t-elle besoin d'un ERP ?", a: "Si la même vente se ressaisit dans trois outils, si le stock affiché n'est pas celui du rayon et s'il faut plusieurs jours pour sortir les chiffres du mois, oui. Si un logiciel et quelques tableurs suffisent et que les chiffres concordent, non : la taille de l'entreprise n'est pas le critère." },
        { q: "Quel ERP choisir en Algérie ?", a: "Celui qui joue vos dix scénarios réels avec le moins d'écarts sur ce qui fait votre métier. Regardez aussi où vivent vos données, si vous pouvez les reprendre entières, qui assure la maintenance près de vous, et si les écrans existent dans les langues de vos équipes." },
        { q: "Quelle différence entre un ERP et un logiciel de gestion commerciale ?", a: "Le logiciel de gestion commerciale couvre la vente : devis, commande, livraison, facture, stock, règlements. L'ERP y ajoute les achats, la production ou les projets et la finance, dans la même base. On passe de l'un à l'autre quand les ressaisies se déplacent vers ces autres services." },
        { q: "Combien coûte un ERP en Algérie ?", a: "Cela dépend de quatre postes : le logiciel lui-même, par abonnement, licence ou construction ; son adaptation à vos flux ; la reprise des données ; la formation et l'accompagnement. Demandez un chiffrage poste par poste et vague par vague, pas un prix global." },
        { q: "Combien de temps faut-il pour déployer un ERP ?", a: "Huit mois dans l'exemple de cette page, en quatre vagues, pour une entreprise de taille moyenne. La première vague, ventes et stock, est en service au troisième mois. La durée dépend surtout de l'état des données et du nombre d'écarts à traiter." },
        { q: "Faut-il tout déployer d'un coup ?", a: "Non, sauf exception. Une mise en service par vagues limite à une vague ce qui peut mal tourner, et chaque vague apporte quelque chose d'utilisable. On commence par les ventes et le stock, on termine par la finance." },
        { q: "Pourquoi les projets ERP échouent-ils ?", a: "Trois causes sont à surveiller : des données importées sans nettoyage, un périmètre trop large dès le départ, et des tableurs que les équipes gardent à côté. Un projet réussit quand les anciens fichiers sont fermés et que les chiffres ne se lisent plus qu'à un endroit." },
        { q: "Peut-on garder notre logiciel de comptabilité ?", a: "Oui. L'ERP produit les écritures et les transmet à votre logiciel de comptabilité, par export ou par branchement. La tenue des comptes et les obligations déclaratives restent chez votre expert-comptable, avec ses outils." },
        { q: "ERP du marché ou sur mesure ?", a: "Un progiciel du marché si vos flux ressemblent à ceux de votre secteur et que les écarts sont peu nombreux. Une construction sur mesure si les écarts portent sur ce qui vous distingue. Entre les deux, un progiciel adapté. Le compte des écarts, sur vos scénarios, tranche." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un ERP installé à côté des tableurs devient une cinquième copie." },
      { after: 4, text: "On ne migre pas un logiciel, on migre des données." },
    ],
    cta: { eyebrow: "Dites-nous combien d'outils, quels flux, et où se font les ressaisies : nous écrivons vos flux avec vous, puis nous jouons vos scénarios avant tout choix", title: "Quatre outils qui ne se parlent pas, un stock que personne ne croit, trois jours pour sortir les chiffres du mois, ou fondateur en France qui veut lire son entreprise en Algérie le jour même : nous cadrons, nous nettoyons les données, puis nous déployons par vagues", body: "Flux écrits, fichiers maîtres nettoyés, scénarios joués, écarts comptés, choix entre standard, adapté et sur mesure, reprise des données, branchement sur l'existant, quatre vagues, mesure. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.gestion, kind: '2027', name: 'Logiciel de gestion commerciale : devis, commande, facture, stock' },
      { href: L.reprendre, kind: '2027', name: 'Reprendre ses données : nettoyage, doublons, bascule sans perte' },
      { href: L.migrer, kind: '2027', name: 'Migrer un vieux logiciel de gestion sans arrêter l’activité' },
      { href: L.integrer, kind: '2027', name: 'Intégrer un logiciel existant : API, exports, webhooks' },
    ] },
  },
  en: {
    kind: 'ERP software · Algeria · 2027', title: "ERP software in Algeria (2027): four tools that do not talk to each other and figures that never agree, what an ERP connects, when you need one, which modules to start with, why projects get bogged down",
    dek: "“We have one program for invoicing, a spreadsheet for stock, another for purchasing, and accounting receives everything at month end. Everyone retypes, and the figures never agree. We are told we need an ERP. What exactly is it, do we need one, which one should we choose, and why do so many projects get bogged down?” An ERP is not one more program: it is a single base where each piece of data is entered only once. It is rolled out in waves, after the records have been cleaned.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['ERP software', 'Integrated management software', 'Master data', 'Choosing an ERP', 'Roll-out in waves', 'Algeria 2027'],
    intro: [
      "**Short answer.** An ERP is **a single base** shared by every department: an article, a customer, a supplier exist in it only once, and a sale entered once updates stock, the receivable and the margin. You need one when **the same information is retyped in three tools** and month-end figures do not agree, not because the company has reached a certain size. Three conditions for success: **clean the records** before migrating; **play your own scenarios** before choosing, to count what the software does not do; **roll out in waves**, starting with sales and stock. Eight months in the example, four waves, each one used before the next.",
      "This page is for the manager of a trading, distribution, manufacturing or service company working with several tools and spreadsheets, and for the founder based in France who wants to read the figures of their company in Algeria without waiting for month end. The definitions quoted come from public sources: enterprise resource planning, the material requirements planning it grew out of, master data, the single source of truth, data migration, phased or big-bang adoption, vendor lock-in. The company, its article with four quantities, its 1,240 records and its calendar are a constructed example. This page gives no prices and does not cover tax, payroll or accounting obligations: see your accountant.",
    ],
    sections: [
      { heading: "Do you need an ERP? Six signs", body: [
        "The figure contrasts, on six points, a company whose tools are enough and a company for which an ERP becomes useful.",
      ], visual: 'signes', after: [
        "**What it is.** Enterprise resource planning is the integrated management of main business processes, often in real time and mediated by software and technology. The research firm Gartner is credited with first using the acronym in the 1990s, for a functional extension of material requirements planning, which was born in factories. The word that matters is “integrated”: departments do not share files, they share a base.",
        "**The right criterion.** It is neither turnover nor headcount: it is the number of times the same data is retyped, and the time spent each month reconciling files. A company of ten people that manufactures, stores and delivers may need one; a company of fifty that sells only services, not necessarily. **If only two signs apply to you**, a well-kept sales management program is often enough: that is the subject of [the page on sales management software](" + L.gestion + ").",
      ] },
      { heading: "The same article: four answers, or one", body: [
        "The figure shows the available quantity of one article, according to four tools then in a single base.",
      ], visual: 'base', after: [
        "**Four copies.** In the example, on the same morning, invoicing reports 120 pieces available, the warehouse spreadsheet 96, the purchasing one 104, accounting 131. Nobody is lying: each tool keeps its copy, updated at its own pace. The right quantity is found by going to count. **A single master.** The principle has a name, the single source of truth: structuring data so that every element is mastered, or edited, in only one place. That is the practical definition of an ERP.",
        "**What it changes.** A sale entered once lowers stock, creates the receivable, feeds the margin and prepares the entry for accounting. A purchase received raises stock and creates the debt to the supplier. Nobody retypes any more, so nobody makes a mistake retyping. **The trap.** An ERP installed beside the spreadsheets, without replacing them, becomes a fifth copy: the project succeeds on the day the spreadsheets stop.",
      ] },
      { heading: "An ERP, in five layers", body: [
        "The accented layer is master data.",
      ], visual: 'couches', after: [
        "**Master data.** It is the data about the business entities that provide context for business transactions: articles, customers, suppliers. An item record carries a reference, a unit, a family; if it exists twice, stock and sales are split between two records, and no figure is right. **Flows.** One document is born from the previous one: the quote becomes an order, the order becomes a delivery, the delivery becomes an invoice. Nothing is retyped; it is validated.",
        "**Modules.** Sales, purchasing, stock, production or projects, finance: only those that are used are switched on. A trading company has no need of the production module; a workshop does, and planning there follows the rules described in [the guide to production planning](" + L.production + "). **Control.** Who enters, who approves, who changed that price: that is [the guide to roles, rights and the audit log](" + L.roles + "). **Reading.** Figures are read from the same base, the same day, as in [the guide to the manager's dashboard](" + L.tableau + ").",
      ] },
      { heading: "Choosing an ERP, in six steps", body: [
        "The first step is accented: write your flows.",
      ], visual: 'choisir', after: [
        "**Your scenarios, not the demonstration.** Write ten real situations: a sale with a discount and a partial delivery, a return, a supplier order received incomplete, an article sold by the metre and bought by the roll. Ask to see them played, with your records. What the software cannot do is called a gap: count it, then decide, gap by gap, to adapt the software or to change your way of working. **Standard or bespoke.** Most ERP systems incorporate best practices, and they vary in how conveniently the customer can modify them.",
        "**Three families.** A package on the market, including suites such as Odoo, which is available in an open-source Community edition and a proprietary Enterprise edition; a package adapted by an integrator; or an application built around your flows, when the gaps are too many on what makes your business. **The questions that remain.** Where does your data live, and can you take it back whole? Vendor lock-in is the situation of a customer who cannot change vendor without substantial switching costs: measure it before signing. And what the ERP does not replace is connected, as explained in [the guide to integrating existing software](" + L.integrer + ").",
      ] },
      { heading: "Cleaning the records before migrating", body: [
        "The figure follows a file of 1,240 articles, in three passes.",
      ], visual: 'fiches', after: [
        "**Why first.** Data migration is the process of selecting, preparing, extracting and transforming data and permanently transferring it from one system to another. The important word is “preparing”. In the example, 180 records were duplicates and 150 had not moved for two years: more than a quarter of the file. Imported as they were, they would have distorted stock from day one. **In the old tool.** The cleaning is done beforehand, where people still know how to read the records.",
        "**Three files.** Articles, customers, suppliers. For each: merge the duplicates, archive what is no longer used, complete what is missing, then name an owner, because a clean file with no keeper gets dirty again. The full method, with the rehearsal of the switch, is in [the guide to taking over your data](" + L.reprendre + "); the move from old software on one computer, in [the guide to migrating old management software](" + L.migrer + ").",
      ] },
      { heading: "Four waves in eight months, in 2027", body: [
        "Eight months in the example, the first one to frame and clean.",
      ], visual: 'vagues', after: [
        "**In waves, not all at once.** There are two ways of putting a system into service. Big bang adoption: the new system is adopted instantly, with no transition period between the old and the new. Phased adoption: different parts of the organization are implemented in different subsequent time slots. For a company that cannot stop, the second limits what can go wrong to one wave. **The order.** Sales and stock first, because that is where the money and the promises made to customers pass; purchasing next; production or projects; finance and reading last, once the figures they read have become reliable.",
        "**A wave is finished when it is used**, not when it is delivered: the spreadsheets it replaces are closed, and a figure is read in the ERP and nowhere else. **Why projects get bogged down.** Three causes are to be watched: records imported without cleaning, a scope that wants to cover everything from day one, and teams that keep their spreadsheets “just in case”. All three are dealt with before writing a line of configuration.",
      ], list: [
        "**What the manager receives**: the flows written down, three master files cleaned, ten scenarios played and the gaps counted, a reasoned choice between standard, adapted and bespoke, then four waves, each with its spreadsheets closed and its figures read from the base.",
        "**What the company no longer does**: retype a sale in three tools, call the warehouse before promising, reconcile files three days a month, buy software on the strength of a demonstration.",
        "**What is measured**: number of re-typings per sale, gap between stock shown and stock counted, days to produce the month's figures, spreadsheets still open after each wave.",
        "**What Symloop does**: writing the flows, cleaning and taking over the data, the scenarios and the count of gaps, the set-up or the build, the connection to your existing tools, then the roll-out in waves and the measurement.",
      ], faq: [
        { q: "What is ERP software?", a: "It is integrated management software: a single base shared by sales, purchasing, stock, production and finance. Each piece of data is entered in it only once, and every department reads the same figure at the same moment." },
        { q: "Does my company need an ERP?", a: "If the same sale is retyped in three tools, if the stock shown is not the stock on the shelf and it takes several days to produce the month's figures, yes. If one program and a few spreadsheets are enough and the figures agree, no: company size is not the criterion." },
        { q: "Which ERP should we choose in Algeria?", a: "The one that plays your ten real scenarios with the fewest gaps on what makes your business. Also look at where your data lives, whether you can take it back whole, who maintains it near you, and whether the screens exist in your teams' languages." },
        { q: "What is the difference between an ERP and sales management software?", a: "Sales management software covers selling: quote, order, delivery, invoice, stock, payments. An ERP adds purchasing, production or projects and finance, in the same base. You move from one to the other when the re-typing shifts to those other departments." },
        { q: "How much does an ERP cost in Algeria?", a: "It depends on four items: the software itself, by subscription, licence or build; its adaptation to your flows; taking over the data; training and support. Ask for a costing item by item and wave by wave, not an overall price." },
        { q: "How long does it take to roll out an ERP?", a: "Eight months in this page's example, in four waves, for a medium-sized company. The first wave, sales and stock, is in service in the third month. The duration depends mostly on the state of the data and the number of gaps to deal with." },
        { q: "Must everything be rolled out at once?", a: "No, with rare exceptions. Going live in waves limits what can go wrong to one wave, and each wave delivers something usable. Start with sales and stock, finish with finance." },
        { q: "Why do ERP projects fail?", a: "Three causes are to be watched: data imported without cleaning, too wide a scope from the start, and spreadsheets the teams keep on the side. A project succeeds when the old files are closed and figures are read in one place only." },
        { q: "Can we keep our accounting software?", a: "Yes. The ERP produces the entries and passes them to your accounting software, by export or by connection. Bookkeeping and filing obligations stay with your accountant, with their tools." },
        { q: "Off-the-shelf ERP or bespoke?", a: "A package on the market if your flows resemble those of your sector and the gaps are few. A bespoke build if the gaps concern what sets you apart. Between the two, an adapted package. The count of gaps, on your scenarios, decides." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "An ERP installed beside the spreadsheets becomes a fifth copy." },
      { after: 4, text: "You do not migrate software, you migrate data." },
    ],
    cta: { eyebrow: "Tell us how many tools, which flows, and where the re-typing happens: we write your flows with you, then we play your scenarios before any choice", title: "Four tools that do not talk to each other, a stock nobody believes, three days to produce the month's figures, or a founder in France who wants to read their company in Algeria the same day: we frame, we clean the data, then we roll out in waves", body: "Flows written, master files cleaned, scenarios played, gaps counted, choice between standard, adapted and bespoke, data taken over, connection to what exists, four waves, measurement. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.gestion, kind: '2027', name: 'Sales management software: quote, order, invoice, stock' },
      { href: L.reprendre, kind: '2027', name: 'Taking over your data: cleaning, duplicates, a switch with no loss' },
      { href: L.migrer, kind: '2027', name: 'Migrating old management software without stopping the business' },
      { href: L.integrer, kind: '2027', name: 'Integrating existing software: API, exports, webhooks' },
    ] },
  },
  ar: {
    kind: 'برنامج ERP · الجزائر · 2027', title: "برنامج ERP في الجزائر (2027): أربع أدوات لا تتكلم مع بعضها وأرقام لا تتطابق أبداً، ما يربطه النظام المتكامل، متى يلزم، بأي وحدات نبدأ، ولماذا تتعثر المشاريع",
    dek: "«عندنا برنامج للفوترة، جدول للمخزون، آخر للمشتريات، والمحاسبة تستلم الكل في آخر الشهر. الجميع يعيد الإدخال، والأرقام لا تتطابق أبداً. يقولون لنا إنه يلزم " + I('ERP') + ". ما هو بالضبط، هل نحتاجه، أيّه نختار، ولماذا تتعثر مشاريع كثيرة؟» النظام المتكامل ليس برنامجاً إضافياً: هو قاعدة واحدة يُدخَل فيها كل معطى مرة واحدة. ويوضع في الخدمة على موجات، بعد تنظيف البطاقات.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج ERP', 'النظام المتكامل للتسيير', 'البيانات المرجعية', 'اختيار نظام متكامل', 'الوضع في الخدمة على موجات', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** النظام المتكامل " + I('ERP') + " هو **قاعدة واحدة** تتقاسمها كل المصالح: المادة والزبون والمورّد لا يوجدون فيها إلا مرة واحدة، والبيع المُدخَل مرة يحدّث المخزون والمستحَق والهامش. ويلزم حين **يُعاد إدخال المعلومة نفسها في ثلاث أدوات** وأرقام آخر الشهر لا تتطابق، لا لأن المؤسسة بلغت حجماً معيَّناً. وثلاثة شروط للنجاح: **تنظيف البطاقات** قبل الترحيل؛ **تجربة حالاتكم أنتم** قبل الاختيار، لعدّ ما لا يفعله البرنامج؛ و**الوضع في الخدمة على موجات**، بدءاً بالمبيعات والمخزون. ثمانية أشهر في المثال، أربع موجات، وكل واحدة مستعملة قبل الموالية.",
      "هذه الصفحة موجَّهة إلى مسيّر مؤسسة تجارة أو توزيع أو تصنيع أو خدمات تعمل بعدة أدوات وجداول، وإلى المؤسس المقيم في فرنسا الذي يريد قراءة أرقام مؤسسته في الجزائر دون انتظار آخر الشهر. التعريفات المذكورة آتية من مصادر علنية: تخطيط موارد المؤسسة، تخطيط الاحتياجات من المواد الذي نشأ منه، البيانات المرجعية، المصدر الوحيد للحقيقة، ترحيل البيانات، الاعتماد على مراحل أو دفعة واحدة، والتبعية لمورّد. المؤسسة ومادتها ذات الكميات الأربع وبطاقاتها الـ 1240 ورزنامتها مثال مركَّب. هذه الصفحة لا تعطي أي سعر ولا تتناول الجباية ولا الأجور ولا الواجبات المحاسبية: راجعوا محاسبكم.",
    ],
    sections: [
      { heading: "هل يلزم نظام متكامل؟ ست علامات", body: [
        "الشكل يقابل، في ست نقاط، مؤسسة تكفيها أدواتها ومؤسسة يصير لها النظام المتكامل نافعاً.",
      ], visual: 'signes', after: [
        "**ما هو.** تخطيط موارد المؤسسة هو التسيير المتكامل للعمليات الرئيسية في المؤسسة، غالباً في الوقت الحقيقي، بواسطة البرامج. والاختصار يُنسب إلى مكتب " + I('Gartner') + "، الذي استعمله في التسعينيات لتسمية امتداد تخطيط الاحتياجات من المواد، المولود في المصانع. والكلمة التي تهمّ هي «المتكامل»: المصالح لا تتقاسم ملفات، بل تتقاسم قاعدة.",
        "**المعيار الصحيح.** ليس رقم الأعمال ولا عدد العمّال: هو عدد المرات التي يُعاد فيها إدخال المعطى نفسه، والوقت المصروف كل شهر في مقاربة الملفات. مؤسسة من عشرة أشخاص تصنّع وتخزّن وتسلّم قد تحتاجه؛ ومؤسسة من خمسين لا تبيع إلا خدمات، ليس بالضرورة. **وإذا كانت علامتان فقط تخصّانكم**، فبرنامج تسيير تجاري محكم يكفي غالباً: وهو موضوع [صفحة برنامج التسيير التجاري](" + L.gestion + ").",
      ] },
      { heading: "المادة نفسها: أربعة أجوبة، أو واحد", body: [
        "الشكل يُظهر الكمية المتوفرة لمادة، حسب أربع أدوات ثم في قاعدة واحدة.",
      ], visual: 'base', after: [
        "**أربع نسخ.** في المثال، في الصباح نفسه، الفوترة تعلن 120 قطعة متوفرة، جدول المخزن 96، جدول المشتريات 104، والمحاسبة 131. لا أحد يكذب: كل أداة تمسك نسختها، محدَّثة على وتيرتها. والكمية الصحيحة تُعرف بالذهاب للعدّ. **مرجع واحد.** للمبدأ اسم، المصدر الوحيد للحقيقة: تنظيم البيانات بحيث لا يُنشأ كل عنصر ولا يُعدَّل إلا في مكان واحد. وهو التعريف العملي للنظام المتكامل.",
        "**ما يغيّره ذلك.** البيع المُدخَل مرة ينقص المخزون، يُنشئ المستحَق، يغذّي الهامش، ويحضّر القيد للمحاسبة. والشراء المستلَم يزيد المخزون ويُنشئ الدين نحو المورّد. لا أحد يعيد الكتابة، فلا أحد يخطئ وهو يعيدها. **الفخ.** النظام المتكامل الموضوع بجانب الجداول، دون أن يعوّضها، يصير نسخة خامسة: والمشروع ينجح يوم تتوقف الجداول.",
      ] },
      { heading: "النظام المتكامل، في خمس طبقات", body: [
        "الطبقة المبرزة هي البيانات المرجعية.",
      ], visual: 'couches', after: [
        "**البيانات المرجعية.** هي البيانات عن كيانات المؤسسة التي تعطي المعاملات سياقها: المواد، الزبائن، والمورّدون. بطاقة المادة تحمل مرجعاً، وحدة، وعائلة؛ وإذا وُجدت مرتين، فالمخزون والمبيعات يتوزعان بين بطاقتين، ولا رقم صحيح. **التدفقات.** الوثيقة تولد من سابقتها: عرض السعر يصير طلبية، الطلبية تصير تسليماً، والتسليم يصير فاتورة. لا شيء يُعاد إدخاله، بل يُصادَق عليه.",
        "**الوحدات.** المبيعات، المشتريات، المخزون، الإنتاج أو المشاريع، والمالية: لا يُفعَّل إلا ما ينفع. مؤسسة تجارة لا تحتاج وحدة الإنتاج؛ والورشة تحتاجها، والتخطيط فيها يتبع القواعد الموصوفة في [دليل تخطيط الإنتاج](" + L.production + "). **المراقبة.** من يُدخِل، من يوافق، ومن غيّر هذا السعر: هو [دليل الأدوار والصلاحيات وسجل التدقيق](" + L.roles + "). **القراءة.** الأرقام تُقرأ من القاعدة نفسها، في اليوم نفسه، حسب [دليل لوحة قيادة المسيّر](" + L.tableau + ").",
      ] },
      { heading: "اختيار نظام متكامل، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: كتابة تدفقاتكم.",
      ], visual: 'choisir', after: [
        "**حالاتكم، لا العرض التجريبي.** اكتبوا عشر حالات حقيقية: بيع بتخفيض وتسليم جزئي، مرتجع، طلبية مورّد استُلمت ناقصة، ومادة تُباع بالمتر وتُشترى باللفّة. واطلبوا رؤيتها مجرَّبة، ببطاقاتكم. وما لا يعرف البرنامج فعله يُسمّى فجوة: تُعدّ، ثم يُقرَّر، فجوة بعد فجوة، تكييف البرنامج أو تغيير طريقة العمل. **جاهز أم على المقاس.** أغلب الأنظمة المتكاملة تتضمن ممارسات مجرَّبة، وتختلف في سهولة تعديلها.",
        "**ثلاث عائلات.** برنامج جاهز من السوق، ومنه حزم مثل " + I('Odoo') + "، الموجودة في طبعة مفتوحة المصدر وطبعة مملوكة؛ برنامج يكيّفه مُدمِج؛ أو تطبيق مبني حول تدفقاتكم، حين تكثر الفجوات في ما يصنع مهنتكم. **الأسئلة الباقية.** أين تعيش بياناتكم، وهل تستطيعون استرجاعها كاملة؟ والتبعية لمورّد هي حالة زبون لا يستطيع تغييره دون تكاليف كبيرة: تُقاس قبل التوقيع. وما لا يعوّضه النظام المتكامل يُربط، كما يشرح [دليل إدماج برنامج موجود](" + L.integrer + ").",
      ] },
      { heading: "تنظيف البطاقات قبل الترحيل", body: [
        "الشكل يتبع ملفاً من 1240 مادة، في ثلاث مراجعات.",
      ], visual: 'fiches', after: [
        "**لماذا أولاً.** ترحيل البيانات هو اختيارها، تحضيرها، استخراجها، وتحويلها، ثم نقلها نهائياً من نظام إلى آخر. والكلمة المهمة هي «تحضيرها». في المثال، 180 بطاقة كانت مكرَّرة و150 لم تتحرك منذ سنتين: أكثر من ربع الملف. ولو استُوردت كما هي، لأفسدت المخزون من اليوم الأول. **في الأداة القديمة.** التنظيف يتم قبلاً، حيث ما زال الناس يعرفون قراءة البطاقات.",
        "**ثلاثة ملفات.** المواد، الزبائن، والمورّدون. ولكل واحد: دمج المكرَّرات، أرشفة ما لم يعد ينفع، إكمال ما ينقص، ثم تعيين مسؤول، لأن الملف النظيف دون حارس يتّسخ من جديد. والطريقة الكاملة، مع تكرار التبديل، في [دليل استرجاع البيانات](" + L.reprendre + ")؛ والانتقال من برنامج قديم على حاسوب، في [دليل ترحيل برنامج تسيير قديم](" + L.migrer + ").",
      ] },
      { heading: "أربع موجات في ثمانية أشهر، سنة 2027", body: [
        "ثمانية أشهر في المثال، والأول منها للتأطير والتنظيف.",
      ], visual: 'vagues', after: [
        "**على موجات، لا دفعة واحدة.** توجد طريقتان لوضع نظام في الخدمة. الاعتماد دفعة واحدة: النظام الجديد يعوّض القديم فوراً، دون فترة انتقالية. والاعتماد على مراحل: أجزاء المؤسسة توضع في الخدمة واحداً بعد آخر. ولمؤسسة لا تستطيع التوقف، الثانية تحصر ما قد يسوء في موجة واحدة. **الترتيب.** المبيعات والمخزون أولاً، لأن هناك يمر المال والوعود المقدَّمة للزبائن؛ ثم المشتريات؛ فالإنتاج أو المشاريع؛ والمالية والقراءة في الأخير، حين تصير الأرقام التي تقرؤانها موثوقة.",
        "**الموجة تنتهي حين تُستعمل**، لا حين تُسلَّم: الجداول التي تعوّضها مغلقة، والرقم يُقرأ في النظام المتكامل ولا مكان آخر. **لماذا تتعثر المشاريع.** ثلاثة أسباب تُراقَب: بطاقات مستورَدة دون تنظيف، نطاق يريد تغطية كل شيء من اليوم الأول، وفرق تحتفظ بجداولها «احتياطاً». والثلاثة تُعالَج قبل كتابة سطر إعداد واحد.",
      ], list: [
        "**ما يستلمه المسيّر**: تدفقاته مكتوبة، ثلاثة ملفات مرجعية منظَّفة، عشر حالات مجرَّبة والفجوات معدودة، اختيار معلَّل بين جاهز ومكيَّف وعلى المقاس، ثم أربع موجات، كل واحدة بجداولها المغلقة وأرقامها المقروءة من القاعدة.",
        "**ما لم تعد المؤسسة تفعله**: إعادة كتابة بيع في ثلاث أدوات، الاتصال بالمخزن قبل الوعد، مقاربة الملفات ثلاثة أيام في الشهر، وشراء برنامج اعتماداً على عرض تجريبي.",
        "**ما يُقاس**: عدد مرات إعادة الإدخال لكل بيع، الفارق بين المخزون المعروض والمخزون المعدود، الأيام اللازمة لإخراج أرقام الشهر، والجداول التي ما زالت مفتوحة بعد كل موجة.",
        "**ما تفعله Symloop**: كتابة التدفقات، تنظيف البيانات واسترجاعها، الحالات وعدّ الفجوات، الإعداد أو البناء، الربط بأدواتكم الموجودة، ثم الوضع في الخدمة على موجات والقياس.",
      ], faq: [
        { q: "ما هو برنامج ERP؟", a: "هو برنامج تسيير متكامل: قاعدة واحدة تتقاسمها المبيعات، المشتريات، المخزون، الإنتاج، والمالية. كل معطى يُدخَل فيها مرة واحدة، وكل المصالح تقرأ الرقم نفسه في اللحظة نفسها." },
        { q: "هل تحتاج مؤسستي نظاماً متكاملاً؟", a: "إذا كان البيع نفسه يُعاد إدخاله في ثلاث أدوات، والمخزون المعروض ليس مخزون الرف، وإخراج أرقام الشهر يأخذ عدة أيام، نعم. وإذا كان برنامج وبضعة جداول تكفي والأرقام تتطابق، لا: حجم المؤسسة ليس المعيار." },
        { q: "أي نظام متكامل نختار في الجزائر؟", a: "الذي يجرّب حالاتكم العشر الحقيقية بأقل فجوات في ما يصنع مهنتكم. وانظروا كذلك أين تعيش بياناتكم، هل تستطيعون استرجاعها كاملة، من يضمن الصيانة قربكم، وهل الشاشات موجودة بلغات فرقكم." },
        { q: "ما الفرق بين النظام المتكامل وبرنامج التسيير التجاري؟", a: "برنامج التسيير التجاري يغطي البيع: عرض سعر، طلبية، تسليم، فاتورة، مخزون، وتسديدات. والنظام المتكامل يضيف المشتريات، الإنتاج أو المشاريع، والمالية، في القاعدة نفسها. ويُنتقل من واحد إلى آخر حين تنتقل إعادة الإدخال إلى هذه المصالح." },
        { q: "كم يكلّف نظام متكامل في الجزائر؟", a: "يتوقف على أربعة أبواب: البرنامج نفسه، باشتراك أو رخصة أو بناء؛ تكييفه مع تدفقاتكم؛ استرجاع البيانات؛ والتكوين والمرافقة. اطلبوا تقديراً باباً بعد باب وموجة بعد موجة، لا سعراً إجمالياً." },
        { q: "كم يلزم من وقت لوضع نظام متكامل في الخدمة؟", a: "ثمانية أشهر في مثال هذه الصفحة، في أربع موجات، لمؤسسة متوسطة الحجم. والموجة الأولى، المبيعات والمخزون، في الخدمة في الشهر الثالث. والمدة تتوقف خاصة على حالة البيانات وعدد الفجوات." },
        { q: "هل يجب وضع الكل في الخدمة دفعة واحدة؟", a: "لا، إلا استثناء. الوضع في الخدمة على موجات يحصر ما قد يسوء في موجة واحدة، وكل موجة تأتي بشيء يُستعمل. يُبدأ بالمبيعات والمخزون، ويُختم بالمالية." },
        { q: "لماذا تفشل مشاريع الأنظمة المتكاملة؟", a: "ثلاثة أسباب تُراقَب: بيانات مستورَدة دون تنظيف، نطاق واسع جداً من البداية، وجداول تحتفظ بها الفرق جانباً. والمشروع ينجح حين تُغلق الملفات القديمة ولا تُقرأ الأرقام إلا في مكان واحد." },
        { q: "هل يمكن الاحتفاظ ببرنامج المحاسبة عندنا؟", a: "نعم. النظام المتكامل ينتج القيود ويرسلها إلى برنامج المحاسبة عندكم، بتصدير أو بربط. ومسك الحسابات والواجبات التصريحية تبقى عند محاسبكم، بأدواته." },
        { q: "نظام جاهز من السوق أم على المقاس؟", a: "برنامج جاهز إذا كانت تدفقاتكم تشبه تدفقات قطاعكم والفجوات قليلة. وبناء على المقاس إذا كانت الفجوات تخص ما يميّزكم. وبينهما، برنامج مكيَّف. وعدّ الفجوات، على حالاتكم، يحسم." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "النظام المتكامل الموضوع بجانب الجداول يصير نسخة خامسة." },
      { after: 4, text: "لا يُرحَّل برنامج، بل تُرحَّل بيانات." },
    ],
    cta: { eyebrow: "قولوا لنا كم أداة، أي تدفقات، وأين تتم إعادة الإدخال: نكتب تدفقاتكم معكم، ثم نجرّب حالاتكم قبل أي اختيار", title: "أربع أدوات لا تتكلم مع بعضها، مخزون لا يصدّقه أحد، ثلاثة أيام لإخراج أرقام الشهر، أو مؤسس في فرنسا يريد قراءة مؤسسته في الجزائر في اليوم نفسه: نؤطّر، ننظّف البيانات، ثم نضع في الخدمة على موجات", body: "تدفقات مكتوبة، ملفات مرجعية منظَّفة، حالات مجرَّبة، فجوات معدودة، اختيار بين جاهز ومكيَّف وعلى المقاس، استرجاع البيانات، ربط بالموجود، أربع موجات، وقياس. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.gestion, kind: '2027', name: 'برنامج التسيير التجاري: عرض سعر، طلبية، فاتورة، ومخزون' },
      { href: L.reprendre, kind: '2027', name: 'استرجاع البيانات: تنظيف، مكرَّرات، وتبديل دون ضياع' },
      { href: L.migrer, kind: '2027', name: 'ترحيل برنامج تسيير قديم دون إيقاف النشاط' },
      { href: L.integrer, kind: '2027', name: 'إدماج برنامج موجود: واجهات برمجة، وتصديرات' },
    ] },
  },
};

const KEYWORDS = "logiciel erp algérie 2027, erp algérie, erp prix algérie, meilleur erp algérie, logiciel erp algerie prix, qu'est-ce qu'un erp, choisir un erp, erp pme algérie, erp sur mesure ou progiciel, déploiement erp par étapes, erp software algeria 2027, choosing an erp for an sme, برنامج ERP في الجزائر 2027, نظام تخطيط موارد المؤسسة, اختيار برنامج ERP";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
