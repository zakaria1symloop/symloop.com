import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-suivi-budgetaire-algerie-2027-budget-par-centre-de-cout-engage-realise-reste-a-engager-atterrissage-ecarts-transferts-entre-lignes.mjs';

const SLUG = 'logiciel-suivi-budgetaire-algerie-2027-budget-par-centre-de-cout-engage-realise-reste-a-engager-atterrissage-ecarts-transferts-entre-lignes';
const FIGURES = ['depense', 'ligne', 'pont', 'situations', 'calendrier', 'couches'];
const DATE = '2026-11-23';
const I = (x) => '⁦' + x + '⁩';

const L = {
  achats: '/blog/tout-le-monde-achete-et-personne-ne-sait-combien-on-a-depense-demandes-d-achat-application-algerie-2027-approbation-budget-engage-bon-commande/',
  contrats: '/blog/logiciel-gestion-des-contrats-algerie-2027-contratheque-echeances-preavis-reconduction-tacite-avenants-versions-alertes-obligations-responsable/',
  tresorerie: '/blog/comment-gerer-la-tresorerie-d-une-entreprise-algerie-2027-rentable-et-compte-vide-plan-sur-13-semaines-echeances-clients-fournisseurs-cycle/',
  rentable: '/blog/comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  multi: '/blog/trois-societes-un-gerant-trois-fichiers-application-multi-societes-algerie-2027-referentiels-partages-transferts-inter-societes-vue-groupe/',
  excel: '/blog/comment-creer-un-logiciel-de-gestion-en-algerie-2027-excel-ne-suffit-plus-access-sans-code-logiciel-du-marche-ou-developpe-par-ou-commencer/',
};

const CONTENT = {
  fr: {
    kind: 'Suivi budgétaire · Algérie · 2027', title: "Logiciel de suivi budgétaire en Algérie (2027) : un budget voté en janvier, quatorze fichiers Excel, chacun « dans son budget », et vingt-cinq millions de dépassement découverts en octobre ; engagé, réalisé, reste à engager, atterrissage, et ce qu'on met en place",
    dek: "« Nous votons un budget en janvier : un fichier Excel par direction, envoyé par mail, consolidé à la main. Toute l'année, chaque direction dit qu'elle est dans son budget. En octobre, nous découvrons vingt-cinq millions de dépassement. Les commandes déjà passées n'apparaissaient nulle part, les chiffres de la comptabilité arrivent avec deux mois de retard, et personne ne sait dire combien il reste vraiment sur une ligne. Quel logiciel faut-il pour suivre un budget ? » Trois colonnes que le tableur confond, l'engagé, le réalisé et le reste à engager, et un atterrissage recalculé chaque mois, ligne par ligne.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de suivi budgétaire', 'Gestion budgétaire', 'Engagé, réalisé, reste à engager', 'Atterrissage de fin d’année', 'Écarts et transferts entre lignes', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de suivi budgétaire tient, pour chaque ligne du budget, quatre chiffres : le voté, réparti par mois ; l'engagé, c'est-à-dire ce qui est commandé et pas encore facturé ; le réalisé, ce qui est facturé et comptabilisé ; et l'atterrissage, la prévision de fin d'année recalculée chaque mois. Le chiffre qui manque dans un tableur est l'engagé : sans lui, une ligne déjà dépassée paraît tenue. Dans l'exemple de cette page, fin août, un budget de 240 millions de dinars affiche 152 de réalisé, soit 63 %. Avec les 67 d'engagé, il est consommé à 91 %, et l'atterrissage donne 265 : le dépassement de 25 est connu en août, pas en octobre.",
      "Cette page s'adresse aux entreprises qui votent un budget par direction, par site ou par projet, industrie, distribution, services, cliniques, écoles, groupes à plusieurs sociétés, en Algérie, et aux fondatrices et fondateurs de la diaspora qui pilotent une société ici. Les définitions viennent de sources publiques : budget, gestion budgétaire, centre de coût, écart, engagement, prévision financière, bon de commande, dépassement de coûts. Le budget de 240 millions, ses six centres et ses montants sont un exemple construit. La page ne traite ni des règles comptables et fiscales, ni des budgets publics et de leurs procédures, ni de la paie, et ne cite aucun prix.",
    ],
    sections: [
      { heading: "Une dépense, en six temps", body: [
        "La figure suit une dépense, du besoin à la clôture du mois, et marque le moment où le budget est consommé.",
      ], visual: 'depense', after: [
        "**Le budget.** Un budget est un plan chiffré, le plus souvent financier, pour une période définie, souvent un an ; la gestion budgétaire est un état prévisionnel des recettes et des dépenses. Un centre de coût est une activité de l'entreprise à laquelle des coûts peuvent être rattachés : une direction, un atelier, un site. **Le moment qui compte.** Une dépense passe par six temps : le besoin, l'engagement, la réception, la facture, le paiement, la clôture du mois. Le budget est consommé au deuxième : le jour où la commande est passée.",
        "**L'engagé.** En comptabilité, l'engagement est un outil de gestion qui fait apparaître les dépenses déjà promises et cherche à éviter le dépassement ; le bon de commande en est l'exemple type. Le circuit qui crée cet engagement est décrit dans [les demandes d'achat](" + L.achats + "), et un contrat signé en crée un pour toute sa durée, voir [la gestion des contrats](" + L.contrats + "). **Le réalisé.** La facture comptabilisée transforme l'engagé en réalisé. **Le paiement.** Il relève de la trésorerie, qui est un autre sujet : une ligne peut être tenue et la caisse vide, voir [la trésorerie](" + L.tresorerie + ").",
      ] },
      { heading: "La même ligne, lue trois fois", body: [
        "La figure lit la même ligne de maintenance de trois façons, fin août : le facturé seul, puis avec l'engagé, puis avec l'atterrissage.",
      ], visual: 'ligne', after: [
        "**Dans l'exemple.** La ligne maintenance a 30 millions de dinars votés. Fin août, 22 sont facturés : 73 %, pour deux tiers de l'année écoulés. Le tableur dit que tout va bien, et qu'il reste 8. **Avec l'engagé.** 11 millions de commandes sont déjà passées et pas encore facturées, des pièces et un contrat d'entretien. La ligne est à 33, soit 110 % : elle est dépassée de 3 avant la moindre facture. **Avec l'atterrissage.** Il reste 6 millions de besoins prévus d'ici décembre. La ligne finira à 39, soit 130 %.",
        "**Ce que cela dit.** Le tableur ne ment pas : il montre ce qui est comptabilisé. Mais une décision se prend sur ce qui est déjà promis et sur ce qui reste à faire. **Le reste à engager.** C'est le voté moins l'engagé et le réalisé : ici, moins 3. C'est le chiffre qu'une personne devrait voir avant de signer une commande de plus. **Les seuils.** Une alerte à 80 % de consommation, une autre à 100 %, adressées à la personne responsable de la ligne. **Ce que l'on mesure.** Consommation par ligne, engagé compris ; lignes au-dessus de 100 % ; engagés sans facture depuis plus de trois mois ; jour du mois où le réalisé est à jour.",
      ] },
      { heading: "D'où viennent les vingt-cinq millions", body: [
        "La figure va du budget voté à l'atterrissage, centre par centre.",
      ], visual: 'pont', after: [
        "**Dans l'exemple.** Six centres, 240 millions votés. Fin août : 152 de réalisé, 67 d'engagé, soit 219 consommés, 91 % du budget. Il reste 46 de besoins prévus d'ici décembre. L'atterrissage est de 265 : un dépassement de 25, environ 10 %. **L'écart.** Un écart est la différence entre ce qui était budgété et le montant réel ; il est favorable ou défavorable. Ici, trois centres font 24 des 25 millions : la maintenance plus 9, la production plus 8, la logistique plus 7. Un seul finit sous son budget, l'administration, de 1.",
        "**Ce que cela dit.** Un dépassement de 10 % sur l'ensemble ne dit pas quoi faire. Neuf millions sur la maintenance disent à qui parler. **L'explication.** Chaque écart porte une cause, saisie par la personne responsable du centre : un volume plus fort, un prix plus haut, un imprévu. **Les quatre réponses.** Reporter une dépense, renégocier un prix, transférer d'une ligne à une autre, ou assumer le dépassement : fin août, il reste quatre mois pour choisir. **La rentabilité.** Un dépassement de dépenses pour un volume vendu plus fort n'est pas forcément une mauvaise nouvelle : il se lit avec la marge, voir [savoir si l'entreprise est rentable](" + L.rentable + "). **Les montants** sont ceux d'un exemple construit.",
      ] },
      { heading: "Cinq situations, et ce que le suivi change", body: [
        "La figure reprend cinq situations, avec des tableurs puis avec le suivi budgétaire.",
      ], visual: 'situations', after: [
        "**« C'est prévu au budget ».** La phrase se vérifie en dix secondes : le reste à engager de la ligne s'affiche au moment de la demande. **Le transfert.** Prendre sur une ligne pour en couvrir une autre est une décision : elle se demande, s'approuve et laisse une trace, avec les deux lignes à jour, voir [les rôles et le journal d'audit](" + L.roles + "). **Le budget voté ne change pas.** On garde la version votée et la version courante : l'écart se lit toujours par rapport à ce qui a été décidé en janvier.",
        "**Bâtir le budget.** Quatorze fichiers envoyés par mail deviennent une saisie par centre, dans un même outil, avec des versions : la proposition, l'arbitrage, le voté. Le total se met à jour tout seul, et l'on voit qui a changé quoi. **La prévision.** Une prévision financière est une estimation des résultats à venir ; elle n'a de valeur que si elle est refaite. L'atterrissage se recalcule à chaque clôture mensuelle, à partir de l'engagé, du réalisé et du reste à faire saisi par chaque responsable. **Les chiffres du jour.** Ils alimentent le tableau de la direction, voir [le tableau de bord](" + L.tableau + ").",
      ] },
      { heading: "Onze semaines, en commençant par l'an dernier", body: [
        "Onze semaines dans l'exemple, avant de bâtir le budget suivant dans l'outil.",
      ], visual: 'calendrier', after: [
        "**L'an dernier.** On reprend le budget et le réalisé de l'année passée, ligne par ligne : ce qui a dérapé, et le mois où on l'a su. C'est le jeu d'essai, et souvent la première surprise. **Le plan des lignes.** Les centres de coût, les natures de dépense, et la correspondance avec vos comptes : c'est elle qui permet d'importer le réalisé sans ressaisie. **Les engagés.** Ils viennent de vos achats et de vos contrats, chacun rattaché à une ligne.",
        "**Le réalisé.** Il est importé chaque mois de votre logiciel de comptabilité, par fichier ou par connexion, voir [intégrer un logiciel existant](" + L.integrer + "). **Plusieurs sociétés.** Un groupe suit un budget par société et une vue consolidée, voir [l'application multi-sociétés](" + L.multi + "). **Ce que le logiciel ne fait pas.** Il ne tient pas la comptabilité et ne décide pas d'un arbitrage : il montre où en est chaque ligne et où elle finira. **Du tableur à l'outil.** Le passage se fait ligne par ligne, voir [quand Excel ne suffit plus](" + L.excel + "). **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Ce qu'il y a dans le logiciel", body: [
        "La figure empile cinq couches ; la deuxième, l'engagé, est celle que le tableur de l'exemple n'avait pas.",
      ], visual: 'couches', after: [
        "**Les lignes.** Le budget voté, par centre de coût et par nature de dépense, réparti par mois, avec une personne responsable par ligne. **L'engagé et le réalisé.** L'engagé est la couche accentuée : commandes et contrats rattachés à une ligne dès qu'ils sont passés. Le réalisé vient de la comptabilité, et chaque facture se rapproche de son engagement, ce qui évite de compter deux fois la même dépense.",
        "**L'atterrissage et les règles.** Le reste à faire par ligne, mis à jour à chaque clôture ; les seuils d'alerte, les transferts avec approbation, les versions, le journal. **Prêt à l'emploi ou sur mesure.** Des logiciels de gestion budgétaire prêts à l'emploi existent, et beaucoup de logiciels de gestion intégrés ont un module de budget ; ils conviennent quand votre plan de lignes et votre circuit entrent dans leur modèle. Le sur-mesure se justifie quand le budget se suit par direction, par site et par projet à la fois, quand l'engagé vient de vos propres outils d'achats et de contrats, quand il faut l'arabe et le français, et quand les chiffres doivent rester chez vous.",
      ], list: [
        "**Ce que vous recevez** : le budget voté par ligne et par mois ; l'engagé rattaché à chaque ligne ; le réalisé importé de la comptabilité ; le reste à engager à la demande ; l'atterrissage recalculé à chaque clôture ; les écarts expliqués par centre ; les transferts approuvés et tracés ; la construction du budget suivant.",
        "**Ce que l'entreprise évite** : le dépassement découvert en octobre, la ligne qui paraît tenue et qui est déjà promise, le transfert décidé au téléphone, les quatorze fichiers et leurs versions, la prévision faite une fois, la commande signée sans savoir ce qu'il reste.",
        "**Ce qui est mesuré** : consommation par ligne, engagé compris ; lignes au-dessus de 80 et de 100 % ; atterrissage par centre et écart au voté ; engagés anciens sans facture ; transferts du mois ; jour du mois où le réalisé est à jour.",
        "**Ce que fait Symloop** : la reprise du budget et du réalisé de l'an dernier, le plan des lignes, le rattachement des engagés, l'import du réalisé, l'atterrissage et les alertes, la construction du budget suivant, le lien avec vos outils, en arabe et en français.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel de suivi budgétaire ?", a: "Un outil qui tient, pour chaque ligne du budget, le voté, l'engagé, le réalisé et la prévision de fin d'année, par centre de coût et par mois, avec des alertes et la trace des décisions." },
        { q: "Comment suivre un budget d'entreprise ?", a: "En comparant chaque mois, ligne par ligne, le voté à ce qui est déjà consommé, engagé compris, et en recalculant où la ligne finira. Suivre seulement le facturé, c'est découvrir en octobre un dépassement visible dès août." },
        { q: "Quelle est la différence entre l'engagé et le réalisé ?", a: "L'engagé est ce qui est commandé ou signé et pas encore facturé. Le réalisé est ce qui est facturé et comptabilisé. Le budget est consommé dès l'engagement." },
        { q: "Qu'est-ce que l'atterrissage budgétaire ?", a: "La prévision du total de fin d'année : le réalisé, plus l'engagé, plus le reste à faire prévu. Il se recalcule à chaque clôture mensuelle." },
        { q: "Un tableau Excel de suivi budgétaire suffit-il ?", a: "Pour un budget tenu par une seule personne, souvent. À plusieurs directions, il lui manque l'engagé, les versions, les alertes et la trace des transferts, et sa consolidation dépend de copier-coller." },
        { q: "Comment éviter un dépassement de budget ?", a: "En le voyant à temps : une alerte à 80 % de consommation engagé compris, le reste à engager affiché avant chaque commande, et un atterrissage mensuel. Reste à décider : reporter, renégocier, transférer ou assumer." },
        { q: "Peut-on transférer du budget d'une ligne à une autre ?", a: "Oui, c'est une décision de gestion : le logiciel la fait demander, approuver et tracer, et garde le budget voté d'origine à côté du budget courant." },
        { q: "Faut-il changer de logiciel de comptabilité ?", a: "Non. Le réalisé est importé de votre comptabilité chaque mois, par fichier ou par connexion ; le suivi budgétaire vient à côté." },
        { q: "Comment construire le budget de l'année suivante ?", a: "Chaque responsable saisit sa proposition dans l'outil, à partir du réalisé et de l'atterrissage de l'année ; les versions gardent la proposition, l'arbitrage et le voté." },
        { q: "Par quoi commencer ?", a: "Par l'an dernier : le budget, le réalisé, et le mois où chaque dépassement a été connu. Puis par le rattachement des commandes en cours à leurs lignes." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un budget se consomme à la commande, pas à la facture." },
      { after: 2, text: "Dix pour cent de dépassement ne disent pas quoi faire ; neuf millions sur la maintenance disent à qui parler." },
    ],
    cta: { eyebrow: "Dites-nous combien de lignes compte votre budget, qui le suit, et quand vous avez appris le dernier dépassement : nous commençons par l'an dernier", title: "Budget en quatorze fichiers, dépassement découvert trop tard, commandes qui n'apparaissent nulle part, transferts sans trace, prévision jamais revue, ou société que vous pilotez en Algérie depuis la France", body: "Symloop construit le suivi budgétaire qui correspond à votre entreprise : lignes par centre, engagé, réalisé, reste à engager, atterrissage mensuel, alertes, transferts tracés. Décrivez-nous votre budget, vos outils d'achats et votre comptabilité." },
    related: { label: 'À lire aussi', items: [
      { href: L.achats, kind: '2027', name: 'Demandes d’achat : approbation, budget engagé, bon de commande' },
      { href: L.contrats, kind: '2027', name: 'Logiciel de gestion des contrats : échéances, préavis, reconduction' },
      { href: L.tresorerie, kind: '2027', name: 'Trésorerie : plan sur 13 semaines, échéances clients et fournisseurs' },
      { href: L.tableau, kind: '2027', name: 'Tableau de bord du gérant : une définition par chiffre, alertes' },
    ] },
  },
  en: {
    kind: 'Budget tracking · Algeria · 2027', title: "Budget tracking software in Algeria (2027): a budget voted in January, fourteen Excel files, everyone “within budget”, and a twenty-five-million overrun discovered in October; committed, actual, left to commit, year-end forecast, and what we put in place",
    dek: "“We vote a budget in January: one Excel file per department, sent by email, consolidated by hand. All year, every department says it is within its budget. In October we discover a twenty-five-million overrun. The orders already placed appeared nowhere, the accounting figures arrive two months late, and nobody can say how much is really left on a line. Which software do we need to track a budget?” Three columns the spreadsheet mixes up, committed, actual and left to commit, and a year-end forecast recomputed every month, line by line.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Budget tracking software', 'Budget management', 'Committed, actual, left to commit', 'Year-end forecast', 'Variances and transfers between lines', 'Algeria 2027'],
    intro: [
      "**Short answer.** Budget tracking software keeps four figures for each line of the budget: the voted amount, phased by month; the committed amount, meaning what is ordered and not yet invoiced; the actual, what is invoiced and booked; and the year-end forecast, recomputed every month. The figure missing from a spreadsheet is the commitment: without it, a line that is already over looks on track. In this page's example, at the end of August, a budget of 240 million dinars shows 152 of actuals, that is 63%. With the 67 of commitments it is 91% consumed, and the forecast gives 265: the overrun of 25 is known in August, not in October.",
      "This page is for companies that vote a budget per department, per site or per project, industry, distribution, services, clinics, schools, multi-company groups, in Algeria, and for diaspora founders steering a company here. The definitions come from public sources: budget, budget management, cost centre, variance, encumbrance, financial forecast, purchase order, cost overrun. The budget of 240 million, its six centres and its amounts are a constructed example. The page covers neither accounting and tax rules, nor public budgets and their procedures, nor payroll, and quotes no price.",
    ],
    sections: [
      { heading: "An expense, in six steps", body: [
        "The figure follows an expense, from the need to the month-end close, and marks the moment the budget is consumed.",
      ], visual: 'depense', after: [
        "**The budget.** A budget is a plan in figures, most often financial, for a defined period, often a year; budget management is a forecast statement of income and expenses. A cost centre is an activity of the business to which costs can be allocated: a department, a workshop, a site. **The moment that counts.** An expense goes through six steps: the need, the commitment, the receipt, the invoice, the payment, the month-end close. The budget is consumed at the second: the day the order is placed.",
        "**The commitment.** In accounting, an encumbrance is a management tool that shows spending already promised and tries to prevent overspending; the purchase order is its typical example. The circuit that creates that commitment is described in [purchase requests](" + L.achats + "), and a signed contract creates one for its whole term, see [contract management](" + L.contrats + "). **The actual.** The booked invoice turns the commitment into an actual. **The payment.** It belongs to cash management, which is another subject: a line can be on track and the bank account empty, see [cash management](" + L.tresorerie + ").",
      ] },
      { heading: "The same line, read three times", body: [
        "The figure reads the same maintenance line three ways at the end of August: invoiced amounts only, then with commitments, then with the forecast.",
      ], visual: 'ligne', after: [
        "**In the example.** The maintenance line has 30 million dinars voted. At the end of August, 22 are invoiced: 73%, with two thirds of the year gone. The spreadsheet says all is well, and that 8 are left. **With commitments.** 11 million of orders are already placed and not yet invoiced, parts and a service contract. The line stands at 33, that is 110%: it is over by 3 before a single invoice. **With the forecast.** 6 million of needs remain planned until December. The line will end at 39, that is 130%.",
        "**What that says.** The spreadsheet does not lie: it shows what is booked. But a decision is taken on what is already promised and on what remains to be done. **Left to commit.** It is the voted amount minus commitments and actuals: here, minus 3. It is the figure a person should see before signing one more order. **Thresholds.** One alert at 80% consumption, another at 100%, sent to the person in charge of the line. **What is measured.** Consumption per line, commitments included; lines above 100%; commitments with no invoice for more than three months; the day of the month on which actuals are up to date.",
      ] },
      { heading: "Where the twenty-five million come from", body: [
        "The figure goes from the voted budget to the year-end forecast, centre by centre.",
      ], visual: 'pont', after: [
        "**In the example.** Six centres, 240 million voted. At the end of August: 152 of actuals, 67 of commitments, that is 219 consumed, 91% of the budget. 46 of needs remain planned until December. The forecast is 265: an overrun of 25, about 10%. **The variance.** A variance is the difference between what was budgeted and the actual amount; it is favourable or unfavourable. Here, three centres make 24 of the 25 million: maintenance plus 9, production plus 8, logistics plus 7. Only one ends under its budget, administration, by 1.",
        "**What that says.** A 10% overrun on the whole does not say what to do. Nine million on maintenance says whom to talk to. **The explanation.** Each variance carries a cause, entered by the person in charge of the centre: a higher volume, a higher price, something unforeseen. **The four answers.** Postpone an expense, renegotiate a price, transfer from one line to another, or accept the overrun: at the end of August, four months remain to choose. **Profitability.** Overspending for a higher volume sold is not necessarily bad news: it is read with the margin, see [knowing whether the company is profitable](" + L.rentable + "). **The amounts** are those of a constructed example.",
      ] },
      { heading: "Five situations, and what tracking changes", body: [
        "The figure takes five situations, with spreadsheets and then with budget tracking.",
      ], visual: 'situations', after: [
        "**“It is in the budget”.** The sentence is checked in ten seconds: what is left to commit on the line is displayed at the time of the request. **The transfer.** Taking from one line to cover another is a decision: it is requested, approved and leaves a record, with both lines up to date, see [roles and the audit log](" + L.roles + "). **The voted budget does not change.** The voted version and the current version are both kept: the variance is always read against what was decided in January.",
        "**Building the budget.** Fourteen files sent by email become one entry per centre, in the same tool, with versions: the proposal, the arbitration, the voted budget. The total updates by itself, and you see who changed what. **The forecast.** A financial forecast is an estimate of future outcomes; it is only worth something if it is redone. The year-end forecast is recomputed at each month-end close, from commitments, actuals and the remaining spend entered by each person in charge. **Today's figures.** They feed management's dashboard, see [the dashboard](" + L.tableau + ").",
      ] },
      { heading: "Eleven weeks, starting from last year", body: [
        "Eleven weeks in the example, before next year's budget is built in the tool.",
      ], visual: 'calendrier', after: [
        "**Last year.** We take last year's budget and actuals, line by line: what slipped, and the month it was known. That is the test set, and often the first surprise. **The plan of lines.** Cost centres, kinds of expense, and the mapping to your accounts: it is what lets actuals be imported with no retyping. **Commitments.** They come from your purchasing and your contracts, each tied to a line.",
        "**Actuals.** They are imported every month from your accounting software, by file or by connection, see [integrating existing software](" + L.integrer + "). **Several companies.** A group tracks one budget per company and a consolidated view, see [the multi-company application](" + L.multi + "). **What the software does not do.** It does not keep the accounts and does not decide an arbitration: it shows where each line stands and where it will end. **From spreadsheet to tool.** The move is made line by line, see [when Excel is no longer enough](" + L.excel + "). **The durations** are those of a constructed example.",
      ] },
      { heading: "What is inside the software", body: [
        "The figure stacks five layers; the second, commitments, is the one the spreadsheet in the example did not have.",
      ], visual: 'couches', after: [
        "**The lines.** The voted budget, by cost centre and by kind of expense, phased by month, with one person in charge per line. **Commitments and actuals.** Commitments are the accented layer: orders and contracts tied to a line as soon as they are placed. Actuals come from accounting, and each invoice is matched with its commitment, which avoids counting the same expense twice.",
        "**The forecast and the rules.** The remaining spend per line, updated at each close; alert thresholds, transfers with approval, versions, the log. **Ready-made or custom.** Ready-made budget management software exists, and many integrated management systems have a budget module; they suit you when your plan of lines and your circuit fit their model. Custom work is justified when the budget is tracked by department, by site and by project at once, when commitments come from your own purchasing and contract tools, when Arabic and French are needed, and when the figures must stay on your premises.",
      ], list: [
        "**What you receive**: the voted budget per line and per month; commitments tied to each line; actuals imported from accounting; what is left to commit, on request; the forecast recomputed at each close; variances explained per centre; transfers approved and recorded; the building of next year's budget.",
        "**What the company avoids**: the overrun discovered in October, the line that looks on track and is already promised, the transfer decided on the phone, the fourteen files and their versions, the forecast done once, the order signed without knowing what is left.",
        "**What is measured**: consumption per line, commitments included; lines above 80 and 100%; forecast per centre and variance against the voted budget; old commitments with no invoice; the month's transfers; the day of the month on which actuals are up to date.",
        "**What Symloop does**: taking over last year's budget and actuals, the plan of lines, tying commitments to lines, importing actuals, the forecast and the alerts, building next year's budget, the link with your tools, in Arabic and in French.",
      ], faq: [
        { q: "What is budget tracking software?", a: "A tool that keeps, for each line of the budget, the voted amount, commitments, actuals and the year-end forecast, per cost centre and per month, with alerts and a record of decisions." },
        { q: "How do you track a company budget?", a: "By comparing every month, line by line, the voted amount with what is already consumed, commitments included, and recomputing where the line will end. Tracking invoices only means discovering in October an overrun visible since August." },
        { q: "What is the difference between committed and actual?", a: "Committed is what is ordered or signed and not yet invoiced. Actual is what is invoiced and booked. The budget is consumed from the commitment." },
        { q: "What is a year-end forecast?", a: "The forecast of the year's total: actuals, plus commitments, plus the planned remaining spend. It is recomputed at each month-end close." },
        { q: "Is an Excel budget tracker enough?", a: "For a budget kept by one person, often. With several departments, it lacks commitments, versions, alerts and a record of transfers, and its consolidation depends on copy and paste." },
        { q: "How do you avoid a budget overrun?", a: "By seeing it in time: an alert at 80% consumption with commitments included, what is left to commit displayed before each order, and a monthly forecast. Then a decision remains: postpone, renegotiate, transfer or accept." },
        { q: "Can budget be transferred from one line to another?", a: "Yes, it is a management decision: the software has it requested, approved and recorded, and keeps the original voted budget next to the current one." },
        { q: "Do we have to change accounting software?", a: "No. Actuals are imported from your accounting every month, by file or by connection; budget tracking sits beside it." },
        { q: "How do you build next year's budget?", a: "Each person in charge enters a proposal in the tool, starting from the year's actuals and forecast; versions keep the proposal, the arbitration and the voted budget." },
        { q: "Where do you start?", a: "With last year: the budget, the actuals, and the month each overrun became known. Then with tying the orders in progress to their lines." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A budget is consumed at the order, not at the invoice." },
      { after: 2, text: "A ten per cent overrun does not say what to do; nine million on maintenance says whom to talk to." },
    ],
    cta: { eyebrow: "Tell us how many lines your budget has, who tracks it, and when you learned of the last overrun: we start from last year", title: "A budget in fourteen files, an overrun discovered too late, orders that appear nowhere, transfers with no record, a forecast never revised, or a company you steer in Algeria from France", body: "Symloop builds the budget tracking that fits your company: lines per centre, committed, actual, left to commit, monthly forecast, alerts, recorded transfers. Describe your budget to us, your purchasing tools and your accounting." },
    related: { label: 'Also read', items: [
      { href: L.achats, kind: '2027', name: 'Purchase requests: approval, committed budget, purchase order' },
      { href: L.contrats, kind: '2027', name: 'Contract management software: deadlines, notice dates, renewal' },
      { href: L.tresorerie, kind: '2027', name: 'Cash management: 13-week plan, customer and supplier due dates' },
      { href: L.tableau, kind: '2027', name: 'The manager’s dashboard: one definition per figure, alerts' },
    ] },
  },
  ar: {
    kind: 'متابعة الميزانية · الجزائر · 2027', title: "برنامج متابعة الميزانية في الجزائر (2027): ميزانية مصادَق عليها في جانفي، أربعة عشر ملف جدول، الكل «ضمن ميزانيته»، وتجاوز بخمسة وعشرين مليوناً يُكتشَف في أكتوبر؛ الملتزَم به، المنجَز، الباقي للالتزام، توقع نهاية السنة، وما نضعه",
    dek: "«نصادق على ميزانية في جانفي: ملف جدول لكل مديرية، يُرسَل بالبريد الإلكتروني، ويُجمَّع يدوياً. طوال السنة، كل مديرية تقول إنها ضمن ميزانيتها. وفي أكتوبر، نكتشف تجاوزاً بخمسة وعشرين مليوناً. الطلبيات الصادرة لم تكن تظهر في أي مكان، أرقام المحاسبة تصل متأخرة بشهرين، ولا أحد يستطيع أن يقول كم بقي فعلاً في بند. أي برنامج نحتاج لمتابعة ميزانية؟» ثلاثة أعمدة يخلطها الجدول، الملتزَم به، المنجَز، والباقي للالتزام، وتوقع لنهاية السنة يُعاد حسابه كل شهر، بنداً ببند.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج متابعة الميزانية', 'تسيير الميزانية', 'الملتزَم به، المنجَز، والباقي للالتزام', 'توقع نهاية السنة', 'الفوارق والتحويلات بين البنود', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج متابعة الميزانية يمسك، لكل بند من الميزانية، أربعة أرقام: المصادَق عليه، موزَّعاً على الأشهر؛ الملتزَم به، أي ما طُلب ولم يُفوتَر بعد؛ المنجَز، أي ما فُوتر وسُجّل في المحاسبة؛ وتوقع نهاية السنة، يُعاد حسابه كل شهر. والرقم الذي ينقص في الجدول هو الملتزَم به: دونه، بند متجاوَز يبدو محترَماً. في مثال هذه الصفحة، في نهاية أوت، ميزانية من 240 مليون دينار تُظهر 152 منجَزة، أي 63 بالمئة. ومع 67 ملتزَماً بها، هي مستهلَكة بنسبة 91 بالمئة، والتوقع يعطي 265: التجاوز بـ25 معروف في أوت، لا في أكتوبر.",
      "هذه الصفحة موجّهة إلى المؤسسات التي تصادق على ميزانية لكل مديرية، لكل موقع، أو لكل مشروع، الصناعة، التوزيع، الخدمات، العيادات، المدارس، والمجمّعات ذات عدة شركات، في الجزائر، وإلى مؤسسي الجالية الذين يسيّرون شركة هنا. التعريفات من مصادر عمومية: الميزانية، تسيير الميزانية، مركز الكلفة، الفارق، الالتزام، التوقع المالي، أمر الشراء، وتجاوز التكاليف. والميزانية من 240 مليوناً، مراكزها الستة، ومبالغها مثال مركَّب. والصفحة لا تتناول القواعد المحاسبية والجبائية، ولا الميزانيات العمومية وإجراءاتها، ولا الأجور، ولا تذكر أي سعر.",
    ],
    sections: [
      { heading: "نفقة، في ست مراحل", body: [
        "الشكل يتابع نفقة، من الحاجة إلى إقفال الشهر، ويشير إلى اللحظة التي تُستهلَك فيها الميزانية.",
      ], visual: 'depense', after: [
        "**الميزانية.** الميزانية مخطط بالأرقام، مالي في الغالب، لفترة محدَّدة، سنة في الغالب؛ وتسيير الميزانية بيان تقديري للإيرادات والنفقات. ومركز الكلفة نشاط في المؤسسة يمكن أن تُربَط به تكاليف: مديرية، ورشة، أو موقع. **اللحظة المهمة.** النفقة تمر بست مراحل: الحاجة، الالتزام، الاستلام، الفاتورة، الدفع، وإقفال الشهر. والميزانية تُستهلَك في الثانية: يوم صدور الطلبية.",
        "**الملتزَم به.** في المحاسبة، الالتزام أداة تسيير تُظهر النفقات الموعود بها من قبل وتسعى إلى تفادي التجاوز؛ وأمر الشراء مثاله النموذجي. والمسار الذي ينشئ هذا الالتزام موصوف في [طلبات الشراء](" + L.achats + ")، والعقد الموقَّع ينشئ التزاماً لكل مدته، انظر [تسيير العقود](" + L.contrats + "). **المنجَز.** الفاتورة المسجَّلة تحوّل الملتزَم به إلى منجَز. **الدفع.** هو من شأن الخزينة، وهي موضوع آخر: قد يكون البند محترَماً والحساب فارغاً، انظر [الخزينة](" + L.tresorerie + ").",
      ] },
      { heading: "البند نفسه، مقروءاً ثلاث مرات", body: [
        "الشكل يقرأ بند الصيانة نفسه بثلاث طرق، في نهاية أوت: المفوتَر وحده، ثم مع الملتزَم به، ثم مع توقع نهاية السنة.",
      ], visual: 'ligne', after: [
        "**في المثال.** بند الصيانة له 30 مليون دينار مصادَق عليها. في نهاية أوت، 22 مفوتَرة: 73 بالمئة، وثلثا السنة مضيا. الجدول يقول إن كل شيء بخير، وإنه بقي 8. **مع الملتزَم به.** 11 مليوناً من الطلبيات صدرت ولم تُفوتَر بعد، قطع غيار وعقد صيانة. البند عند 33، أي 110 بالمئة: هو متجاوَز بـ3 قبل أي فاتورة. **مع توقع نهاية السنة.** تبقى 6 ملايين من حاجات متوقعة حتى ديسمبر. البند سينتهي عند 39، أي 130 بالمئة.",
        "**ما يقوله ذلك.** الجدول لا يكذب: يُظهر ما سُجّل في المحاسبة. لكن القرار يُتَّخذ على ما وُعد به وعلى ما بقي إنجازه. **الباقي للالتزام.** هو المصادَق عليه ناقص الملتزَم به والمنجَز: هنا، ناقص 3. هو الرقم الذي يجب أن يراه الشخص قبل توقيع طلبية أخرى. **العتبات.** تنبيه عند 80 بالمئة من الاستهلاك، وآخر عند 100 بالمئة، يُرسَلان إلى الشخص المسؤول عن البند. **ما يُقاس.** الاستهلاك لكل بند، بما فيه الملتزَم به؛ البنود فوق 100 بالمئة؛ الملتزَم به دون فاتورة منذ أكثر من ثلاثة أشهر؛ ويوم الشهر الذي يكون فيه المنجَز محدَّثاً.",
      ] },
      { heading: "من أين تأتي الخمسة والعشرون مليوناً", body: [
        "الشكل يذهب من الميزانية المصادَق عليها إلى توقع نهاية السنة، مركزاً بمركز.",
      ], visual: 'pont', after: [
        "**في المثال.** ستة مراكز، و240 مليوناً مصادَق عليها. في نهاية أوت: 152 منجَزة، 67 ملتزَماً بها، أي 219 مستهلَكة، 91 بالمئة من الميزانية. وتبقى 46 من حاجات متوقعة حتى ديسمبر. التوقع 265: تجاوز بـ25، نحو 10 بالمئة. **الفارق.** الفارق هو الفرق بين ما كان في الميزانية والمبلغ الفعلي؛ وهو إيجابي أو سلبي. هنا، ثلاثة مراكز تصنع 24 من 25 مليوناً: الصيانة زائد 9، الإنتاج زائد 8، واللوجستيك زائد 7. ومركز واحد ينتهي تحت ميزانيته، الإدارة، بـ1.",
        "**ما يقوله ذلك.** تجاوز بـ10 بالمئة على المجموع لا يقول ماذا نفعل. وتسعة ملايين على الصيانة تقول مع من نتكلم. **الشرح.** كل فارق يحمل سبباً، يُدخله الشخص المسؤول عن المركز: حجم أكبر، سعر أعلى، أو شيء غير متوقع. **الأجوبة الأربعة.** تأجيل نفقة، إعادة التفاوض على سعر، التحويل من بند إلى آخر، أو تحمّل التجاوز: في نهاية أوت، تبقى أربعة أشهر للاختيار. **المردودية.** تجاوز في النفقات لحجم مبيعات أكبر ليس بالضرورة خبراً سيئاً: يُقرأ مع الهامش، انظر [معرفة إن كانت المؤسسة مربحة](" + L.rentable + "). **المبالغ** هي مبالغ مثال مركَّب.",
      ] },
      { heading: "خمس حالات، وما تغيّره المتابعة", body: [
        "الشكل يعرض خمس حالات، مع الجداول ثم مع متابعة الميزانية.",
      ], visual: 'situations', after: [
        "**«هذا متوقع في الميزانية».** الجملة يُتحقَّق منها في عشر ثوانٍ: الباقي للالتزام في البند يظهر عند الطلب. **التحويل.** الأخذ من بند لتغطية آخر قرار: يُطلَب، يُصادَق عليه، ويترك أثراً، والبندان محدَّثان، انظر [الأدوار وسجل التدقيق](" + L.roles + "). **الميزانية المصادَق عليها لا تتغيّر.** نحتفظ بالنسخة المصادَق عليها وبالنسخة الجارية: الفارق يُقرأ دائماً بالنسبة إلى ما تقرّر في جانفي.",
        "**بناء الميزانية.** أربعة عشر ملفاً تُرسَل بالبريد تصير إدخالاً لكل مركز، في أداة واحدة، مع نسخ: الاقتراح، التحكيم، والمصادَق عليه. المجموع يتحدّث وحده، ونرى من غيّر ماذا. **التوقع.** التوقع المالي تقدير للنتائج القادمة؛ ولا قيمة له إلا إذا أُعيد. وتوقع نهاية السنة يُعاد حسابه عند كل إقفال شهري، انطلاقاً من الملتزَم به، المنجَز، والباقي إنجازه الذي يُدخله كل مسؤول. **أرقام اليوم.** تغذّي لوحة المديرية، انظر [لوحة القيادة](" + L.tableau + ").",
      ] },
      { heading: "أحد عشر أسبوعاً، بدءاً بالسنة الماضية", body: [
        "أحد عشر أسبوعاً في المثال، قبل بناء الميزانية القادمة في الأداة.",
      ], visual: 'calendrier', after: [
        "**السنة الماضية.** نأخذ ميزانية السنة الماضية ومنجَزها، بنداً ببند: ما الذي انحرف، وفي أي شهر عُرف. هي مجموعة التجارب، وغالباً المفاجأة الأولى. **مخطط البنود.** مراكز الكلفة، طبيعة النفقات، والمطابقة مع حساباتكم: هي التي تسمح باستيراد المنجَز دون إعادة إدخال. **الملتزَم به.** يأتي من مشترياتكم وعقودكم، وكل واحد مربوط ببند.",
        "**المنجَز.** يُستورَد كل شهر من برنامج محاسبتكم، بملف أو بربط، انظر [الربط ببرنامج موجود](" + L.integrer + "). **عدة شركات.** المجمّع يتابع ميزانية لكل شركة ونظرة مجمَّعة، انظر [التطبيق متعدد الشركات](" + L.multi + "). **ما لا يفعله البرنامج.** لا يمسك المحاسبة ولا يقرّر تحكيماً: يُظهر أين وصل كل بند وأين سينتهي. **من الجدول إلى الأداة.** الانتقال يتم بنداً ببند، انظر [حين لا يكفي الجدول](" + L.excel + "). **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "ما يوجد في البرنامج", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية، الملتزَم به، هي التي لم تكن في جدول المثال.",
      ], visual: 'couches', after: [
        "**البنود.** الميزانية المصادَق عليها، حسب مركز الكلفة وطبيعة النفقة، موزَّعة على الأشهر، مع شخص مسؤول عن كل بند. **الملتزَم به والمنجَز.** الملتزَم به هو الطبقة المبرزة: طلبيات وعقود مربوطة ببند فور صدورها. والمنجَز يأتي من المحاسبة، وكل فاتورة تُقارَب مع التزامها، وهذا يمنع حساب النفقة نفسها مرتين.",
        "**التوقع والقواعد.** الباقي إنجازه لكل بند، محدَّثاً عند كل إقفال؛ عتبات التنبيه، التحويلات بمصادقة، النسخ، والسجل. **جاهز أو على المقاس.** توجد برامج جاهزة لتسيير الميزانية، وكثير من أنظمة التسيير المتكاملة فيها وحدة للميزانية؛ وتناسب حين يدخل مخطط بنودكم ومساركم في نموذجها. والعمل على المقاس يُبرَّر حين تُتابَع الميزانية حسب المديرية، الموقع، والمشروع معاً، حين يأتي الملتزَم به من أدواتكم الخاصة للمشتريات والعقود، حين تلزم العربية والفرنسية، وحين يجب أن تبقى الأرقام عندكم.",
      ], list: [
        "**ما تتلقونه**: الميزانية المصادَق عليها لكل بند ولكل شهر؛ الملتزَم به مربوطاً بكل بند؛ المنجَز مستورداً من المحاسبة؛ الباقي للالتزام عند الطلب؛ التوقع مُعاداً حسابه عند كل إقفال؛ الفوارق مشروحة لكل مركز؛ التحويلات مصادَقاً عليها ومسجَّلة؛ وبناء الميزانية القادمة.",
        "**ما تتفاداه المؤسسة**: التجاوز الذي يُكتشَف في أكتوبر، البند الذي يبدو محترَماً وهو موعود به من قبل، التحويل الذي يتقرّر بالهاتف، الملفات الأربعة عشر ونسخها، التوقع الذي يُنجَز مرة واحدة، والطلبية الموقَّعة دون معرفة ما بقي.",
        "**ما يُقاس**: الاستهلاك لكل بند، بما فيه الملتزَم به؛ البنود فوق 80 و100 بالمئة؛ التوقع لكل مركز والفارق عن المصادَق عليه؛ الملتزَم به القديم دون فاتورة؛ تحويلات الشهر؛ ويوم الشهر الذي يكون فيه المنجَز محدَّثاً.",
        "**ما تفعله Symloop**: استرجاع ميزانية السنة الماضية ومنجَزها، مخطط البنود، ربط الملتزَم به بالبنود، استيراد المنجَز، التوقع والتنبيهات، بناء الميزانية القادمة، والربط بأدواتكم، بالعربية والفرنسية.",
      ], faq: [
        { q: "ما هو برنامج متابعة الميزانية؟", a: "أداة تمسك، لكل بند من الميزانية، المصادَق عليه، الملتزَم به، المنجَز، وتوقع نهاية السنة، لكل مركز كلفة ولكل شهر، مع تنبيهات وأثر للقرارات." },
        { q: "كيف نتابع ميزانية مؤسسة؟", a: "بمقارنة المصادَق عليه كل شهر، بنداً ببند، بما استُهلك من قبل، بما فيه الملتزَم به، وبإعادة حساب أين سينتهي البند. ومتابعة المفوتَر فقط تعني اكتشاف تجاوز في أكتوبر كان مرئياً منذ أوت." },
        { q: "ما الفرق بين الملتزَم به والمنجَز؟", a: "الملتزَم به هو ما طُلب أو وُقّع ولم يُفوتَر بعد. والمنجَز هو ما فُوتر وسُجّل في المحاسبة. والميزانية تُستهلَك منذ الالتزام." },
        { q: "ما هو توقع نهاية السنة؟", a: "هو توقع مجموع نهاية السنة: المنجَز، زائد الملتزَم به، زائد الباقي المتوقع إنجازه. ويُعاد حسابه عند كل إقفال شهري." },
        { q: "هل يكفي جدول لمتابعة الميزانية؟", a: "لميزانية يمسكها شخص واحد، غالباً. ومع عدة مديريات، ينقصه الملتزَم به، النسخ، التنبيهات، وأثر التحويلات، وتجميعه يتوقف على النسخ واللصق." },
        { q: "كيف نتفادى تجاوز الميزانية؟", a: "برؤيته في وقته: تنبيه عند 80 بالمئة من الاستهلاك بما فيه الملتزَم به، الباقي للالتزام ظاهراً قبل كل طلبية، وتوقع شهري. ثم يبقى القرار: التأجيل، إعادة التفاوض، التحويل، أو التحمّل." },
        { q: "هل يمكن تحويل ميزانية من بند إلى آخر؟", a: "نعم، هو قرار تسيير: البرنامج يجعله يُطلَب، يُصادَق عليه، ويُسجَّل، ويحتفظ بالميزانية المصادَق عليها الأصلية بجانب الميزانية الجارية." },
        { q: "هل يجب تغيير برنامج المحاسبة؟", a: "لا. المنجَز يُستورَد من محاسبتكم كل شهر، بملف أو بربط؛ ومتابعة الميزانية تأتي بجانبها." },
        { q: "كيف تُبنى ميزانية السنة القادمة؟", a: "كل مسؤول يُدخل اقتراحه في الأداة، انطلاقاً من منجَز السنة وتوقعها؛ والنسخ تحفظ الاقتراح، التحكيم، والمصادَق عليه." },
        { q: "بماذا يُبدأ؟", a: "بالسنة الماضية: الميزانية، المنجَز، والشهر الذي عُرف فيه كل تجاوز. ثم بربط الطلبيات الجارية ببنودها." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الميزانية تُستهلَك عند الطلبية، لا عند الفاتورة." },
      { after: 2, text: "عشرة بالمئة من التجاوز لا تقول ماذا نفعل؛ وتسعة ملايين على الصيانة تقول مع من نتكلم." },
    ],
    cta: { eyebrow: "قولوا لنا كم بنداً في ميزانيتكم، من يتابعها، ومتى علمتم بآخر تجاوز: نبدأ بالسنة الماضية", title: "ميزانية في أربعة عشر ملفاً، تجاوز يُكتشَف متأخراً، طلبيات لا تظهر في أي مكان، تحويلات دون أثر، توقع لا يُراجَع، أو شركة تسيّرونها في الجزائر من فرنسا", body: "Symloop تبني متابعة الميزانية التي تناسب مؤسستكم: بنود لكل مركز، الملتزَم به، المنجَز، الباقي للالتزام، توقع شهري، تنبيهات، وتحويلات مسجَّلة. صِفوا لنا ميزانيتكم، أدوات مشترياتكم، ومحاسبتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.achats, kind: '2027', name: 'طلبات الشراء: المصادقة، الميزانية الملتزَم بها، وأمر الشراء' },
      { href: L.contrats, kind: '2027', name: 'برنامج تسيير العقود: الآجال، الإشعار، والتجديد' },
      { href: L.tresorerie, kind: '2027', name: 'الخزينة: مخطط على 13 أسبوعاً، وآجال الزبائن والموردين' },
      { href: L.tableau, kind: '2027', name: 'لوحة قيادة المسيّر: تعريف لكل رقم، وتنبيهات' },
    ] },
  },
};

const KEYWORDS = "logiciel suivi budgétaire, logiciel suivi budgétaire algérie 2027, logiciel de gestion budgétaire, outil suivi budgétaire, application suivi budgétaire, logiciel suivi budget, suivi budgétaire excel, tableau de suivi budgétaire, tableau de suivi budgétaire entreprise, contrôle budgétaire, écart budgétaire, comment suivre un budget, comment gérer un budget d'entreprise, comment faire un suivi de budget, atterrissage budgétaire, engagé réalisé reste à engager, budget tracking software, budgeting software for business, برنامج الميزانية, متابعة الميزانية, متابعة تنفيذ الميزانية, مراقبة الميزانية, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
