import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-gerer-la-tresorerie-d-une-entreprise-algerie-2027-rentable-et-compte-vide-plan-sur-13-semaines-echeances-clients-fournisseurs-cycle.mjs';

const SLUG = 'comment-gerer-la-tresorerie-d-une-entreprise-algerie-2027-rentable-et-compte-vide-plan-sur-13-semaines-echeances-clients-fournisseurs-cycle';
const FIGURES = ['raisons', 'temps', 'plan', 'couches', 'cycle', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  rentable: '/blog/comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  achats: '/blog/tout-le-monde-achete-et-personne-ne-sait-combien-on-a-depense-demandes-d-achat-application-algerie-2027-approbation-budget-engage-bon-commande/',
  stock: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  gescom: '/blog/logiciel-gestion-commerciale-algerie-2027-devis-commande-bon-de-livraison-facture-stock-reglements-erp-ou-pas-sans-ressaisie/',
  euros: '/blog/client-en-france-paie-en-euros-service-en-algerie-application-2027-deux-encaissements-deux-devises-taux-fige-rapprochement-remboursement/',
  groupe: '/blog/trois-societes-un-gerant-trois-fichiers-application-multi-societes-algerie-2027-referentiels-partages-transferts-inter-societes-vue-groupe/',
};

const CONTENT = {
  fr: {
    kind: 'Trésorerie · Algérie · 2027', title: "Comment gérer la trésorerie d'une entreprise en Algérie (2027) : on gagne de l'argent et le compte est vide à la fin du mois, plan de trésorerie sur treize semaines, échéances des clients et des fournisseurs, et ce qu'on construit",
    dek: "« Notre entreprise est rentable, les comptes le confirment, et pourtant chaque fin de mois je me demande comment payer les fournisseurs et l'équipe. Je découvre le problème en ouvrant le relevé de la banque, quand il est trop tard pour faire autre chose qu'appeler un client. Comment gérer la trésorerie de mon entreprise ? » Le relevé dit ce qui s'est passé. Un plan de trésorerie dit ce qui va se passer, semaine par semaine, assez tôt pour déplacer une date. Le construire, c'est ranger chaque facture dans la semaine où elle sera vraiment payée.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Trésorerie de l’entreprise', 'Plan de trésorerie', 'Prévision sur treize semaines', 'Délais clients et fournisseurs', 'Cycle de conversion', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Gérer sa trésorerie, c'est **prévoir le solde semaine par semaine** au lieu de le constater. Le plan part du **solde du jour**, banque et caisse rapprochées ; il y ajoute **les encaissements attendus**, à leur date probable et non à leur échéance ; il en retire **les décaissements prévus**, fournisseurs, équipe, loyers, à leur date. Sur **treize semaines**, un creux apparaît plusieurs semaines avant d'arriver : c'est le temps qu'il faut pour relancer un client, décaler une commande ou étaler un paiement. Le reste se joue sur trois durées : les jours de stock, le délai accordé aux clients, le délai obtenu des fournisseurs.",
      "Cette page s'adresse au gérant d'une entreprise de négoce, de distribution, de fabrication ou de services qui gagne de l'argent sur le papier et en manque sur le compte, et au fondateur installé en France qui finance une entreprise en Algérie et veut savoir, de loin, si elle tiendra le trimestre. Les définitions viennent de sources publiques : flux de trésorerie, prévision de trésorerie, fonds de roulement, cycle de conversion, délai client, délai fournisseur, jours de stock, rapprochement. Les montants, en milliers de dinars, sont ceux d'un exemple construit. Il s'agit de gestion : la page ne traite ni de comptabilité légale, ni de fiscalité, ni de paie, ni de crédit bancaire.",
    ],
    sections: [
      { heading: "Rentable, et pourtant à court d'argent : six raisons", body: [
        "La figure donne six raisons, et ce qu'un plan fait apparaître pour chacune.",
      ], visual: 'raisons', after: [
        "**Résultat et trésorerie.** Les flux de trésorerie sont les paiements qui entrent dans une entreprise ou en sortent. Être rentable ne veut pas dire être liquide : une entreprise peut échouer par manque d'argent tout en étant bénéficiaire. Le résultat compte une vente le jour où elle est faite ; le compte en banque, le jour où elle est payée. Entre les deux, il y a un délai, et ce délai se finance. **Le fonds de roulement.** C'est la liquidité dont l'entreprise dispose pour son exploitation : ce qu'elle possède à court terme, moins ce qu'elle doit à court terme. Quand le stock et les créances grossissent plus vite que les dettes fournisseurs, il se vide, même en gagnant de l'argent.",
        "**La raison la plus simple.** Les clients paient plus tard que ce qui est écrit sur la facture. Les créances clients sont des sommes dues pour des biens ou des services livrés et pas encore payés : tant qu'elles ne sont pas encaissées, elles ne paient personne. **La croissance.** Vendre plus, c'est acheter plus et accorder plus de délai avant d'encaisser : une entreprise qui grandit vite a besoin de plus d'argent, pas de moins. **Ce que cette page ne traite pas.** Savoir si l'on gagne de l'argent est le sujet de [la rentabilité](" + L.rentable + ") ; relancer un client et fixer son plafond, celui du [crédit client](" + L.credit + "). Ici, la question est : quand l'argent arrive-t-il ?",
      ] },
      { heading: "Tenir un plan de trésorerie, en six temps", body: [
        "La figure donne l'ordre ; le quatrième temps est celui qu'on lit.",
      ], visual: 'temps', after: [
        "**Un solde de départ exact.** Le rapprochement consiste à s'assurer que deux séries d'écritures concordent : ici, le relevé de la banque et ce que l'entreprise a enregistré. Sans lui, le plan part d'un chiffre faux. **La méthode directe.** Elle range les encaissements et les décaissements à leur date ; elle convient à l'horizon court, et permet une prévision à la semaine, voire au jour. On conseille de voir venir l'argent sur au moins 90 jours : c'est à peu près treize semaines, un trimestre. **Les encaissements.** Chaque facture ouverte reçoit deux dates : son échéance, et la date à laquelle ce client paie d'habitude.",
        "**Les décaissements.** Trois familles : les factures fournisseurs, à leur échéance ; les commandes déjà passées, qui deviendront des factures, comme dans [les demandes d'achat](" + L.achats + ") ; les sorties fixes, loyers, équipe, abonnements, à leur jour du mois. **Un plancher.** C'est le solde en dessous duquel on ne veut pas descendre : de quoi tenir une semaine de sorties, par exemple. Le plan signale chaque semaine qui passe dessous. **La mise à jour.** Chaque semaine, le réel remplace le prévu et une nouvelle semaine s'ajoute au bout. L'écart entre les deux apprend quelque chose : ce client paie toujours dix jours après ce qu'on croyait.",
      ] },
      { heading: "Treize semaines : le creux se voit six semaines avant", body: [
        "La figure montre le solde de fin de semaine d'un trimestre, avec et sans décision.",
      ], visual: 'plan', after: [
        "**Ce que montre la figure.** Le trimestre commence avec 1 800. En treize semaines, 35 000 entrent et 35 700 sortent : presque l'équilibre. Pourtant, en semaine 7, le solde tombe à moins 1 200. La cause tient en deux lignes : un client qui devait payer en semaine 6 paiera en semaine 8, et la semaine 7 porte une échéance fournisseur en plus des sorties de fin de mois. **Vu en semaine 1.** Six semaines avant, deux décisions suffisent : relancer ce client pour encaisser à la date prévue, et décaler une commande fournisseur de quatre semaines. Le point bas du trimestre devient 600, au-dessus du plancher.",
        "**Ce que le plan ne fait pas.** Il ne crée pas d'argent, et il ne remplace pas une discussion avec la banque quand le besoin est durable. Il donne du temps : celui de choisir quelle date bouger, plutôt que de subir celle qui tombe. **Les scénarios.** Avant de signer un gros achat ou d'accorder un délai à un client important, on l'essaie dans le plan : que devient la semaine 9 ? **Deux monnaies.** Pour un fondateur qui encaisse en euros et dépense en dinars, le plan se tient par devise, comme dans [deux encaissements, deux devises](" + L.euros + "). **Sur le téléphone.** Le solde par semaine se lit dans le [tableau de bord](" + L.tableau + ") du gérant.",
      ] },
      { heading: "Ce qu'un logiciel de trésorerie doit tenir", body: [
        "La figure empile cinq couches ; la deuxième décide de la justesse du plan.",
      ], visual: 'couches', after: [
        "**La date probable.** Une facture à trente jours payée à soixante-dix n'est pas en retard pour le plan : elle est à sa place, en semaine dix. Le logiciel calcule, pour chaque client, le délai réel de ses paiements passés, et l'applique aux factures ouvertes. Le délai moyen de règlement des clients sert justement à estimer la taille des créances. **Le classement par âge.** Les créances se rangent par ancienneté : moins de trente jours, trente à soixante, plus de soixante. Dans un tel classement, les dettes d'un certain âge sont rangées par niveau de risque : le plan peut compter une vieille créance à moitié, ou pas du tout.",
        "**Brancher plutôt que ressaisir.** Les factures clients et fournisseurs existent déjà, dans le [logiciel de gestion commerciale](" + L.gescom + ") ou la comptabilité : le plan les lit, il ne les redemande pas. Les relevés de banque s'importent. Ce qui se saisit à la main est court : les sorties fixes et les décisions. **Plusieurs comptes, plusieurs sociétés.** Un plan par compte, et une vue d'ensemble : dans [un groupe de plusieurs sociétés](" + L.groupe + "), l'argent de l'une ne couvre pas le creux de l'autre sans décision. **Qui le lit.** Le gérant, une fois par semaine, le même jour ; la personne qui paie les fournisseurs, tous les jours.",
      ] },
      { heading: "Le cycle de l'argent : 75 jours, ou 35", body: [
        "La figure mesure, en jours, le temps pendant lequel l'argent est immobilisé.",
      ], visual: 'cycle', after: [
        "**Trois durées.** Les jours de stock mesurent le nombre moyen de jours pendant lesquels l'entreprise garde sa marchandise avant de la vendre. Le délai client estime ce que les clients doivent, en jours de ventes. Le délai fournisseur mesure le nombre moyen de jours que l'entreprise met à payer ses fournisseurs. Le cycle de conversion mesure combien de temps l'entreprise est privée de son argent : stock plus délai client, moins délai fournisseur. **Dans l'exemple.** 45 jours de stock, 60 jours de crédit client, 30 jours de crédit fournisseur : 75 jours. À 280 de marchandise par jour, cela fait 21 000 immobilisés en permanence.",
        "**Trois réglages.** Dix jours de stock en moins, par un [réapprovisionnement](" + L.stock + ") mieux réglé. Quinze jours de crédit client en moins, par des relances faites à date. Quinze jours de crédit fournisseur en plus, négociés. Le cycle passe à 35 jours : 9 800 immobilisés, 11 200 rendus à la trésorerie. C'est un ordre de grandeur, pas une promesse ; mais aucun de ces réglages ne demande de vendre davantage. **Le crédit fournisseur.** C'est un prêt accordé par un commerçant à un autre quand la marchandise est achetée à crédit. Payer plus tôt que convenu, c'est rendre ce prêt sans y être obligé.",
      ] },
      { heading: "Cinq semaines, dans l'exemple", body: [
        "Cinq semaines pour un premier plan lu avec le gérant, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine : les comptes et les caisses, les factures ouvertes des deux côtés, les sorties fixes, et surtout les habitudes de paiement des dix plus gros clients. **Le solde.** Relevés importés, écritures rapprochées : le point de départ devient fiable. **Les deux colonnes.** Encaissements à leur date probable, décaissements à leur date : trois semaines qui se chevauchent. **Le plan.** Treize semaines, un plancher, deux ou trois scénarios. **La première lecture.** Faite avec le gérant ; puis chaque semaine, une vingtaine de minutes, le prévu contre le réel.",
        "**Ce qui reste après.** Un écran : le solde par semaine, les semaines sous le plancher, les trois durées du cycle. Une liste : les encaissements à relancer cette semaine. **Avec un tableur ?** Pour commencer, oui : un plan de trésorerie tient dans une feuille. Il cesse d'être tenu le jour où le mettre à jour prend une demi-journée ; c'est alors qu'il faut le brancher sur les factures. **Les durées** sont celles d'un exemple construit : elles dépendent surtout de l'état des factures dans vos outils.",
      ], list: [
        "**Ce que le gérant reçoit** : un solde du jour fiable ; un plan sur treize semaines, mis à jour chaque semaine ; les encaissements à leur date probable ; un plancher et une alerte ; des scénarios ; les trois durées du cycle.",
        "**Ce que l'entreprise ne fait plus** : découvrir le creux sur le relevé de la banque, payer un fournisseur avant son échéance par habitude, signer un gros achat sans voir son effet, compter sur une facture qui ne sera payée que dans deux mois.",
        "**Ce qui est mesuré** : solde par semaine et semaines sous le plancher ; écart entre prévu et réel ; délai réel de paiement par client ; créances par âge ; jours de stock ; durée du cycle.",
        "**Ce que fait Symloop** : le relevé, l'import des relevés de banque et le rapprochement, la lecture des factures dans vos outils, le calcul des dates probables, le plan et ses scénarios, l'écran du gérant, puis les premières lectures hebdomadaires avec vous.",
      ], faq: [
        { q: "Comment gérer la trésorerie d'une entreprise ?", a: "En prévoyant le solde semaine par semaine : solde du jour, plus les encaissements à leur date probable, moins les décaissements à leur date. Sur treize semaines, un creux se voit assez tôt pour agir. Le plan se met à jour chaque semaine." },
        { q: "Qu'est-ce qu'un plan de trésorerie ?", a: "Un tableau, semaine par semaine ou mois par mois, de ce qui va entrer sur le compte et en sortir, et du solde qui en résulte. Ce n'est pas un relevé : il regarde devant." },
        { q: "Pourquoi une entreprise rentable manque-t-elle de trésorerie ?", a: "Parce que le résultat compte la vente le jour où elle est faite, et le compte le jour où elle est payée. Si les clients paient à 60 jours et que le stock dort 45 jours, l'argent gagné n'est pas encore là." },
        { q: "Sur quelle durée faire un plan de trésorerie ?", a: "Treize semaines est un bon horizon : un trimestre, assez court pour être juste, assez long pour agir. Au-delà, un plan mois par mois suffit, avec moins de précision." },
        { q: "Comment prévoir les encaissements des clients ?", a: "Facture par facture, à la date où ce client paie d'habitude, pas à l'échéance écrite. Le délai réel se calcule sur ses paiements passés. Les créances très anciennes se comptent avec prudence." },
        { q: "Que faire quand le plan annonce un solde négatif ?", a: "Agir tant qu'il reste des semaines : relancer les encaissements attendus avant le creux, décaler une commande ou un achat, étaler une sortie avec l'accord du fournisseur. Si le besoin est durable, en parler à sa banque, le plan en main." },
        { q: "Qu'est-ce que le cycle de conversion de l'argent ?", a: "Le nombre de jours pendant lesquels l'argent est immobilisé : jours de stock, plus délai accordé aux clients, moins délai obtenu des fournisseurs. Dans l'exemple de cette page : 45 + 60 − 30 = 75 jours." },
        { q: "Peut-on gérer sa trésorerie avec Excel ?", a: "Oui, pour commencer. La limite est la mise à jour : recopier chaque semaine les factures ouvertes prend du temps, et le plan finit par ne plus être tenu. Un outil branché sur les factures le garde à jour." },
        { q: "Quelle différence avec la comptabilité ?", a: "La comptabilité enregistre ce qui s'est passé, selon ses règles. Le plan de trésorerie prévoit ce qui va se passer sur le compte. Il s'appuie sur les mêmes factures, mais sert une autre décision." },
        { q: "Combien de temps pour mettre en place un plan de trésorerie ?", a: "Cinq semaines dans l'exemple de cette page : relevé, solde fiable, encaissements, décaissements, plan et scénarios. Ensuite, une vingtaine de minutes par semaine." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le résultat compte la vente le jour où elle est faite ; le compte, le jour où elle est payée." },
      { after: 2, text: "Le problème n'est pas le trimestre, c'est la semaine 7." },
    ],
    cta: { eyebrow: "Dites-nous où sont vos factures clients et fournisseurs aujourd'hui, et combien de comptes vous suivez : nous commençons par le relevé", title: "Rentable et à court d'argent, creux découvert sur le relevé de la banque, clients qui paient à soixante-dix jours, ou fondateur en France qui veut savoir si son entreprise en Algérie tiendra le trimestre", body: "Symloop construit le plan de trésorerie branché sur vos factures : solde du jour, encaissements à leur date probable, décaissements, treize semaines, scénarios. Décrivez-nous votre activité, vos délais de paiement, et la semaine du mois que vous redoutez." },
    related: { label: 'À lire aussi', items: [
      { href: L.rentable, kind: '2027', name: 'Savoir si son entreprise est rentable : cascade, seuil' },
      { href: L.credit, kind: '2027', name: 'Crédit client : plafond, relevés, relances' },
      { href: L.achats, kind: '2027', name: 'Demandes d’achat : approbation, budget engagé' },
      { href: L.tableau, kind: '2027', name: 'Tableau de bord en temps réel : une définition par chiffre' },
    ] },
  },
  en: {
    kind: 'Cash management · Algeria · 2027', title: "How to manage a company's cash in Algeria (2027): the business makes money and the account is empty at the end of the month, a thirteen-week cash plan, customer and supplier due dates, and what we build",
    dek: "“Our company is profitable, the accounts confirm it, and yet every month end I wonder how to pay the suppliers and the team. I discover the problem when I open the bank statement, when it is too late to do anything but call a customer. How do I manage my company's cash?” The statement says what happened. A cash plan says what is going to happen, week by week, early enough to move a date. Building it means placing every invoice in the week in which it will really be paid.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Company cash management', 'Cash plan', 'Thirteen-week forecast', 'Customer and supplier terms', 'Cash conversion cycle', 'Algeria 2027'],
    intro: [
      "**Short answer.** Managing cash means **forecasting the balance week by week** instead of observing it. The plan starts from **today's balance**, bank and cash reconciled; it adds **expected receipts**, at their likely date and not at their due date; it takes away **planned payments**, suppliers, team, rents, on their date. Over **thirteen weeks**, a dip shows several weeks before it arrives: that is the time it takes to chase a customer, move an order or spread a payment. The rest is decided by three durations: days of stock, the terms granted to customers, the terms obtained from suppliers.",
      "This page is for the manager of a trading, distribution, manufacturing or service company that makes money on paper and lacks it in the account, and for the founder based in France who finances a company in Algeria and wants to know, from afar, whether it will hold through the quarter. The definitions come from public sources: cash flow, cash flow forecasting, working capital, cash conversion cycle, days sales outstanding, days payable outstanding, days in inventory, reconciliation. The amounts, in thousands of dinars, are those of a constructed example. This is management: the page covers neither statutory accounting, nor taxation, nor payroll, nor bank credit.",
    ],
    sections: [
      { heading: "Profitable, and yet short of cash: six reasons", body: [
        "The figure gives six reasons, and what a plan brings to light for each.",
      ], visual: 'raisons', after: [
        "**Result and cash.** Cash flow refers to payments made into or out of a business. Being profitable does not necessarily mean being liquid: a company can fail because of a shortage of cash even while profitable. The result counts a sale on the day it is made; the bank account, on the day it is paid. Between the two there is a delay, and that delay has to be financed. **Working capital.** It represents the operating liquidity available to a business: current assets minus current liabilities. When stock and receivables grow faster than what is owed to suppliers, it empties, even while making money.",
        "**The simplest reason.** Customers pay later than what is written on the invoice. Accounts receivable are claims for payment for goods supplied or services rendered that customers have not yet paid for: as long as they are not collected, they pay nobody. **Growth.** Selling more means buying more and granting more time before collecting: a company that grows fast needs more cash, not less. **What this page does not cover.** Knowing whether you make money is the subject of [profitability](" + L.rentable + "); chasing a customer and setting their ceiling, that of [customer credit](" + L.credit + "). Here, the question is: when does the money arrive?",
      ] },
      { heading: "Keeping a cash plan, in six steps", body: [
        "The figure gives the order; the fourth step is the one you read.",
      ], visual: 'temps', after: [
        "**An exact opening balance.** Reconciliation is the process of ensuring that two sets of records are in agreement: here, the bank statement and what the company has recorded. Without it, the plan starts from a wrong figure. **The direct method.** It schedules the company's cash receipts and disbursements; it suits the short-term horizon, and allows the forecasting period to be weekly or even daily. The advice is to see cash coming out to at least 90 days: that is about thirteen weeks, one quarter. **Receipts.** Each open invoice gets two dates: its due date, and the date on which that customer usually pays.",
        "**Payments.** Three families: supplier invoices, on their due date; orders already placed, which will become invoices, as in [purchase requests](" + L.achats + "); fixed outgoings, rents, team, subscriptions, on their day of the month. **A floor.** It is the balance you do not want to go below: enough to cover a week of outgoings, for example. The plan flags every week that goes under it. **The update.** Every week, the actual replaces the forecast and a new week is added at the end. The gap between the two teaches something: this customer always pays ten days after what was assumed.",
      ] },
      { heading: "Thirteen weeks: the dip is visible six weeks ahead", body: [
        "The figure shows a quarter's end-of-week balance, with and without a decision.",
      ], visual: 'plan', after: [
        "**What the figure shows.** The quarter starts with 1,800. In thirteen weeks, 35,000 comes in and 35,700 goes out: almost balanced. Yet in week 7 the balance falls to minus 1,200. The cause fits in two lines: a customer who was to pay in week 6 will pay in week 8, and week 7 carries a supplier due date on top of the month-end outgoings. **Seen in week 1.** Six weeks ahead, two decisions are enough: chase that customer to collect on the planned date, and move a supplier order by four weeks. The quarter's low point becomes 600, above the floor.",
        "**What the plan does not do.** It does not create money, and it does not replace a discussion with the bank when the need is lasting. It gives time: time to choose which date to move, rather than suffer the one that falls. **Scenarios.** Before signing a big purchase or granting terms to an important customer, you try it in the plan: what becomes of week 9? **Two currencies.** For a founder who collects in euros and spends in dinars, the plan is kept per currency, as in [two receipts, two currencies](" + L.euros + "). **On the phone.** The balance per week is read in the manager's [dashboard](" + L.tableau + ").",
      ] },
      { heading: "What cash software must hold", body: [
        "The figure stacks five layers; the second decides how accurate the plan is.",
      ], visual: 'couches', after: [
        "**The likely date.** A 30-day invoice paid at seventy days is not late for the plan: it is in its place, in week ten. The software calculates, for each customer, the real delay of their past payments, and applies it to open invoices. Days sales outstanding is precisely a calculation used to estimate the size of outstanding receivables. **The ageing schedule.** Receivables are sorted by age: under thirty days, thirty to sixty, over sixty. In such a schedule, debts of a certain age are classified by risk: the plan can count an old receivable at half, or not at all.",
        "**Connect rather than retype.** Customer and supplier invoices already exist, in the [sales management software](" + L.gescom + ") or the accounts: the plan reads them, it does not ask for them again. Bank statements are imported. What is entered by hand is short: fixed outgoings and decisions. **Several accounts, several companies.** One plan per account, and an overall view: in [a group of several companies](" + L.groupe + "), one company's money does not cover another's dip without a decision. **Who reads it.** The manager, once a week, on the same day; the person who pays suppliers, every day.",
      ] },
      { heading: "The cash cycle: 75 days, or 35", body: [
        "The figure measures, in days, how long money is tied up.",
      ], visual: 'cycle', after: [
        "**Three durations.** Days in inventory measures the average number of days a company holds its inventory before selling it. Days sales outstanding estimates what customers owe, in days of sales. Days payable outstanding measures the average number of days a company takes to pay its suppliers. The cash conversion cycle measures how long a firm will be deprived of cash: stock plus customer terms, minus supplier terms. **In the example.** 45 days of stock, 60 days of customer credit, 30 days of supplier credit: 75 days. At 280 of goods a day, that is 21,000 permanently tied up.",
        "**Three adjustments.** Ten days of stock fewer, through better-tuned [replenishment](" + L.stock + "). Fifteen days of customer credit fewer, through reminders sent on time. Fifteen days of supplier credit more, negotiated. The cycle falls to 35 days: 9,800 tied up, 11,200 returned to cash. It is an order of magnitude, not a promise; but none of these adjustments requires selling more. **Supplier credit.** Trade credit is the loan extended by one trader to another when goods are bought on credit. Paying earlier than agreed means giving that loan back without being obliged to.",
      ] },
      { heading: "Five weeks, in the example", body: [
        "Five weeks for a first plan read with the manager, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week: accounts and tills, open invoices on both sides, fixed outgoings, and above all the payment habits of the ten biggest customers. **The balance.** Statements imported, entries reconciled: the starting point becomes reliable. **The two columns.** Receipts at their likely date, payments on their date: three overlapping weeks. **The plan.** Thirteen weeks, a floor, two or three scenarios. **The first reading.** Done with the manager; then every week, about twenty minutes, forecast against actual.",
        "**What remains afterwards.** One screen: the balance per week, the weeks under the floor, the three durations of the cycle. One list: the receipts to chase this week. **With a spreadsheet?** To begin with, yes: a cash plan fits on one sheet. It stops being kept the day updating it takes half a day; that is when it must be connected to the invoices. **The durations** are those of a constructed example: they depend above all on the state of the invoices in your tools.",
      ], list: [
        "**What the manager receives**: a reliable balance for today; a thirteen-week plan, updated every week; receipts at their likely date; a floor and an alert; scenarios; the three durations of the cycle.",
        "**What the company no longer does**: discover the dip on the bank statement, pay a supplier before the due date out of habit, sign a big purchase without seeing its effect, count on an invoice that will only be paid in two months.",
        "**What is measured**: balance per week and weeks under the floor; gap between forecast and actual; real payment delay per customer; receivables by age; days of stock; length of the cycle.",
        "**What Symloop does**: the survey, importing bank statements and reconciling, reading invoices in your tools, calculating likely dates, the plan and its scenarios, the manager's screen, then the first weekly readings with you.",
      ], faq: [
        { q: "How do you manage a company's cash?", a: "By forecasting the balance week by week: today's balance, plus receipts at their likely date, minus payments on their date. Over thirteen weeks, a dip shows early enough to act. The plan is updated every week." },
        { q: "What is a cash plan?", a: "A table, week by week or month by month, of what will come into the account and go out of it, and of the resulting balance. It is not a statement: it looks ahead." },
        { q: "Why does a profitable company run short of cash?", a: "Because the result counts the sale on the day it is made, and the account on the day it is paid. If customers pay at 60 days and stock sleeps for 45, the money earned is not there yet." },
        { q: "Over what period should a cash plan run?", a: "Thirteen weeks is a good horizon: one quarter, short enough to be accurate, long enough to act. Beyond that, a month-by-month plan is enough, with less precision." },
        { q: "How do you forecast customer receipts?", a: "Invoice by invoice, at the date on which that customer usually pays, not at the written due date. The real delay is calculated from their past payments. Very old receivables are counted with caution." },
        { q: "What should you do when the plan announces a negative balance?", a: "Act while there are still weeks left: chase the receipts expected before the dip, move an order or a purchase, spread a payment with the supplier's agreement. If the need is lasting, talk to your bank, plan in hand." },
        { q: "What is the cash conversion cycle?", a: "The number of days during which money is tied up: days of stock, plus the terms granted to customers, minus the terms obtained from suppliers. In this page's example: 45 + 60 − 30 = 75 days." },
        { q: "Can you manage cash with Excel?", a: "Yes, to begin with. The limit is updating: copying open invoices every week takes time, and the plan ends up no longer being kept. A tool connected to the invoices keeps it up to date." },
        { q: "What is the difference from accounting?", a: "Accounting records what happened, according to its rules. The cash plan forecasts what will happen in the account. It relies on the same invoices, but serves another decision." },
        { q: "How long does it take to set up a cash plan?", a: "Five weeks in this page's example: survey, reliable balance, receipts, payments, plan and scenarios. After that, about twenty minutes a week." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The result counts the sale on the day it is made; the account, on the day it is paid." },
      { after: 2, text: "The problem is not the quarter, it is week 7." },
    ],
    cta: { eyebrow: "Tell us where your customer and supplier invoices are today, and how many accounts you follow: we start with the survey", title: "Profitable and short of cash, a dip discovered on the bank statement, customers paying at seventy days, or a founder in France who wants to know whether their company in Algeria will hold through the quarter", body: "Symloop builds the cash plan connected to your invoices: today's balance, receipts at their likely date, payments, thirteen weeks, scenarios. Describe your business to us, your payment terms, and the week of the month you dread." },
    related: { label: 'Also read', items: [
      { href: L.rentable, kind: '2027', name: 'Knowing whether your company is profitable: cascade, break-even' },
      { href: L.credit, kind: '2027', name: 'Customer credit: ceiling, statements, reminders' },
      { href: L.achats, kind: '2027', name: 'Purchase requests: approval, committed budget' },
      { href: L.tableau, kind: '2027', name: 'Real-time dashboard: one definition per figure' },
    ] },
  },
  ar: {
    kind: 'الخزينة · الجزائر · 2027', title: "كيف تُسيَّر خزينة المؤسسة في الجزائر (2027): نربح المال والحساب فارغ في آخر الشهر، مخطط خزينة على ثلاثة عشر أسبوعاً، استحقاقات الزبائن والمورّدين، وما نبنيه",
    dek: "«مؤسستنا مربحة، والحسابات تؤكد ذلك، ومع ذلك أتساءل كل آخر شهر كيف أدفع للمورّدين وللفريق. وأكتشف المشكل حين أفتح كشف البنك، حين يفوت وقت فعل أي شيء غير الاتصال بزبون. كيف أسيّر خزينة مؤسستي؟» الكشف يقول ما حدث. ومخطط الخزينة يقول ما سيحدث، أسبوعاً بأسبوع، باكراً بما يكفي لتحريك تاريخ. وبناؤه هو وضع كل فاتورة في الأسبوع الذي ستُدفع فيه فعلاً.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['خزينة المؤسسة', 'مخطط الخزينة', 'توقّع على ثلاثة عشر أسبوعاً', 'آجال الزبائن والمورّدين', 'دورة النقد', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** تسيير الخزينة هو **توقّع الرصيد أسبوعاً بأسبوع** بدل معاينته. المخطط ينطلق من **رصيد اليوم**، البنك والصندوق مطابَقان؛ يضيف **المقبوضات المنتظرة**، في تاريخها المرجَّح لا في تاريخ استحقاقها؛ وينزع **المدفوعات المتوقعة**، مورّدين وفريقاً وإيجارات، في تاريخها. وعلى **ثلاثة عشر أسبوعاً**، يظهر الهبوط أسابيع قبل وقوعه: وهو الوقت اللازم لتذكير زبون، تأجيل طلبية، أو تقسيط دفع. والباقي يُحسم بثلاث مدد: أيام المخزون، الأجل الممنوح للزبائن، والأجل المحصَّل من المورّدين.",
      "هذه الصفحة موجّهة إلى مسيّر مؤسسة تجارة أو توزيع أو تصنيع أو خدمات تربح المال على الورق وينقصها في الحساب، وإلى المؤسس المقيم في فرنسا الذي يموّل مؤسسة في الجزائر ويريد أن يعرف، من بعيد، هل ستصمد خلال الفصل. التعريفات من مصادر عمومية: التدفقات النقدية، توقّع الخزينة، رأس المال العامل، دورة تحويل النقد، أجل الزبائن، أجل المورّدين، أيام المخزون، والمطابقة. والمبالغ، بآلاف الدنانير، مبالغ مثال مركَّب. والمقصود تسيير: والصفحة لا تعالج المحاسبة القانونية، ولا الجباية، ولا الأجور، ولا القرض البنكي.",
    ],
    sections: [
      { heading: "مربحة، ومع ذلك ينقصها المال: ستة أسباب", body: [
        "الشكل يعطي ستة أسباب، وما يُظهره المخطط لكل واحد.",
      ], visual: 'raisons', after: [
        "**النتيجة والخزينة.** التدفقات النقدية هي المدفوعات التي تدخل إلى المؤسسة أو تخرج منها. وأن تكون المؤسسة مربحة لا يعني أن عندها سيولة: قد تفشل لنقص النقد وهي رابحة. النتيجة تحسب البيع يوم يُنجز؛ وحساب البنك، يوم يُدفع. وبين الاثنين أجل، وهذا الأجل يُموَّل. **رأس المال العامل.** هو السيولة المتوفرة للمؤسسة في استغلالها: ما تملكه على المدى القصير، ناقص ما عليها على المدى القصير. وحين يكبر المخزون والمستحقات أسرع من ديون المورّدين، يفرغ، حتى مع ربح المال.",
        "**أبسط سبب.** الزبائن يدفعون أبعد مما هو مكتوب على الفاتورة. ومستحقات الزبائن مبالغ مستحقة عن سلع سُلّمت أو خدمات قُدّمت ولم تُدفع بعد: وما دامت لم تُحصَّل، فهي لا تدفع لأحد. **النمو.** بيع أكثر يعني شراء أكثر ومنح أجل أطول قبل التحصيل: المؤسسة التي تكبر بسرعة تحتاج مالاً أكثر، لا أقل. **ما لا تعالجه هذه الصفحة.** معرفة هل نربح المال موضوع [المردودية](" + L.rentable + ")؛ وتذكير زبون وتحديد سقفه، موضوع [دَين الزبون](" + L.credit + "). هنا، السؤال هو: متى يصل المال؟",
      ] },
      { heading: "مسك مخطط الخزينة، في ست مراحل", body: [
        "الشكل يعطي الترتيب؛ والمرحلة الرابعة هي التي تُقرأ.",
      ], visual: 'temps', after: [
        "**رصيد بداية دقيق.** المطابقة هي التأكد من أن سلسلتين من القيود متفقتان: هنا، كشف البنك وما سجّلته المؤسسة. ودونها، ينطلق المخطط من رقم خاطئ. **الطريقة المباشرة.** تضع المقبوضات والمدفوعات في تواريخها؛ وتناسب الأفق القصير، وتسمح بتوقّع أسبوعي، بل يومي. ويُنصح برؤية المال القادم على 90 يوماً على الأقل: أي نحو ثلاثة عشر أسبوعاً، فصل واحد. **المقبوضات.** كل فاتورة مفتوحة تتلقى تاريخين: استحقاقها، والتاريخ الذي يدفع فيه هذا الزبون عادة.",
        "**المدفوعات.** ثلاث فئات: فواتير المورّدين، في استحقاقها؛ الطلبيات التي أُرسلت من قبل وستصير فواتير، كما في [طلبات الشراء](" + L.achats + ")؛ والمدفوعات الثابتة، إيجارات وفريق واشتراكات، في يومها من الشهر. **حد أدنى.** هو الرصيد الذي لا نريد النزول تحته: ما يكفي لأسبوع من المدفوعات، مثلاً. والمخطط ينبّه إلى كل أسبوع ينزل تحته. **التحديث.** كل أسبوع، يحلّ الفعلي محل المتوقَّع ويُضاف أسبوع جديد في النهاية. والفارق بينهما يعلّم شيئاً: هذا الزبون يدفع دائماً عشرة أيام بعد ما كنا نظن.",
      ] },
      { heading: "ثلاثة عشر أسبوعاً: الهبوط يُرى قبل ستة أسابيع", body: [
        "الشكل يُظهر رصيد نهاية الأسبوع لفصل، بقرار ودونه.",
      ], visual: 'plan', after: [
        "**ما يُظهره الشكل.** الفصل يبدأ بـ 1800. وفي ثلاثة عشر أسبوعاً، يدخل 35 000 ويخرج 35 700: توازن تقريباً. ومع ذلك، في الأسبوع 7، ينزل الرصيد إلى ناقص 1200. والسبب في سطرين: زبون كان سيدفع في الأسبوع 6 سيدفع في الأسبوع 8، والأسبوع 7 يحمل استحقاق مورّد زيادة على مدفوعات آخر الشهر. **إذا رُئي في الأسبوع 1.** قبل ستة أسابيع، يكفي قراران: تذكير هذا الزبون للتحصيل في التاريخ المتوقَّع، وتأجيل طلبية مورّد بأربعة أسابيع. فتصير أدنى نقطة في الفصل 600، فوق الحد الأدنى.",
        "**ما لا يفعله المخطط.** لا يصنع مالاً، ولا يعوّض حديثاً مع البنك حين تكون الحاجة دائمة. هو يعطي الوقت: وقت اختيار التاريخ الذي يُحرَّك، بدل تحمّل الذي يقع. **الفرضيات.** قبل توقيع شراء كبير أو منح أجل لزبون مهم، يُجرَّب في المخطط: ماذا يصير الأسبوع 9؟ **عملتان.** للمؤسس الذي يحصّل بالأورو وينفق بالدينار، يُمسك المخطط لكل عملة، كما في [تحصيلان بعملتين](" + L.euros + "). **على الهاتف.** الرصيد لكل أسبوع يُقرأ في [لوحة قيادة](" + L.tableau + ") المسيّر.",
      ] },
      { heading: "ما يجب أن يمسكه برنامج الخزينة", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية تحسم دقة المخطط.",
      ], visual: 'couches', after: [
        "**التاريخ المرجَّح.** فاتورة بأجل ثلاثين يوماً تُدفع في سبعين ليست متأخرة عند المخطط: هي في مكانها، في الأسبوع العاشر. والبرنامج يحسب، لكل زبون، الأجل الفعلي لمدفوعاته السابقة، ويطبّقه على الفواتير المفتوحة. ومتوسط أجل تحصيل الزبائن يُستعمل بالضبط لتقدير حجم المستحقات. **الترتيب حسب العمر.** المستحقات تُرتَّب حسب القِدم: أقل من ثلاثين يوماً، من ثلاثين إلى ستين، وأكثر من ستين. وفي مثل هذا الترتيب، تُصنَّف الديون ذات عمر معيّن حسب الخطر: والمخطط قد يحسب مستحقاً قديماً بنصفه، أو لا يحسبه.",
        "**الربط بدل إعادة الإدخال.** فواتير الزبائن والمورّدين موجودة من قبل، في [برنامج التسيير التجاري](" + L.gescom + ") أو المحاسبة: المخطط يقرؤها، لا يطلبها من جديد. وكشوف البنك تُستورد. وما يُدخَل باليد قصير: المدفوعات الثابتة والقرارات. **عدة حسابات، عدة شركات.** مخطط لكل حساب، ونظرة شاملة: في [مجموعة من عدة شركات](" + L.groupe + ")، مال شركة لا يغطي هبوط أخرى دون قرار. **من يقرؤه.** المسيّر، مرة في الأسبوع، في اليوم نفسه؛ والشخص الذي يدفع للمورّدين، كل يوم.",
      ] },
      { heading: "دورة النقد: 75 يوماً، أو 35", body: [
        "الشكل يقيس، بالأيام، المدة التي يبقى فيها المال مجمَّداً.",
      ], visual: 'cycle', after: [
        "**ثلاث مدد.** أيام المخزون تقيس متوسط عدد الأيام التي تحتفظ فيها المؤسسة ببضاعتها قبل بيعها. وأجل الزبائن يقدّر ما على الزبائن، بأيام من المبيعات. وأجل المورّدين يقيس متوسط عدد الأيام التي تستغرقها المؤسسة للدفع لمورّديها. ودورة تحويل النقد تقيس كم من الوقت تُحرم المؤسسة من مالها: المخزون زائد أجل الزبائن، ناقص أجل المورّدين. **في المثال.** 45 يوماً من المخزون، 60 يوماً من أجل الزبون، و30 يوماً من أجل المورّد: 75 يوماً. وبـ 280 من البضاعة في اليوم، هذا يعني 21 000 مجمَّدة باستمرار.",
        "**ثلاثة تعديلات.** عشرة أيام مخزون أقل، ب[إعادة تموين](" + L.stock + ") أحسن ضبطاً. خمسة عشر يوماً من أجل الزبون أقل، بتذكيرات تُجرى في وقتها. وخمسة عشر يوماً من أجل المورّد أكثر، بالتفاوض. فتنزل الدورة إلى 35 يوماً: 9800 مجمَّدة، و11 200 تعود إلى الخزينة. وهذا تقدير تقريبي، لا وعد؛ لكن لا واحد من هذه التعديلات يتطلب بيعاً أكثر. **أجل المورّد.** هو قرض يمنحه تاجر لآخر حين تُشترى البضاعة بالأجل. والدفع قبل المتفق عليه هو ردّ هذا القرض دون أن يكون ذلك لازماً.",
      ] },
      { heading: "خمسة أسابيع، في المثال", body: [
        "خمسة أسابيع لأول مخطط يُقرأ مع المسيّر، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع: الحسابات والصناديق، الفواتير المفتوحة من الجهتين، المدفوعات الثابتة، وخصوصاً عادات الدفع عند أكبر عشرة زبائن. **الرصيد.** كشوف مستوردة، وقيود مطابَقة: نقطة البداية تصير موثوقة. **العمودان.** المقبوضات في تاريخها المرجَّح، والمدفوعات في تاريخها: ثلاثة أسابيع متداخلة. **المخطط.** ثلاثة عشر أسبوعاً، حد أدنى، وفرضيتان أو ثلاث. **القراءة الأولى.** تُجرى مع المسيّر؛ ثم كل أسبوع، نحو عشرين دقيقة، المتوقَّع مقابل الفعلي.",
        "**ما يبقى بعد ذلك.** شاشة: الرصيد لكل أسبوع، الأسابيع تحت الحد الأدنى، والمدد الثلاث للدورة. وقائمة: المقبوضات التي تُذكَّر هذا الأسبوع. **بجدول بيانات؟** للبداية، نعم: مخطط الخزينة يسعه جدول. ويتوقف مسكه يوم يأخذ تحديثه نصف يوم؛ وعندها يجب ربطه بالفواتير. **المدد** هي مدد مثال مركَّب: تتوقف خصوصاً على حالة الفواتير في أدواتكم.",
      ], list: [
        "**ما يتلقاه المسيّر**: رصيد يوم موثوق؛ مخطط على ثلاثة عشر أسبوعاً، يُحدَّث كل أسبوع؛ المقبوضات في تاريخها المرجَّح؛ حد أدنى وتنبيه؛ فرضيات؛ والمدد الثلاث للدورة.",
        "**ما لا تفعله المؤسسة بعد الآن**: اكتشاف الهبوط في كشف البنك، الدفع لمورّد قبل استحقاقه بحكم العادة، توقيع شراء كبير دون رؤية أثره، والاعتماد على فاتورة لن تُدفع إلا بعد شهرين.",
        "**ما يُقاس**: الرصيد لكل أسبوع والأسابيع تحت الحد الأدنى؛ الفارق بين المتوقَّع والفعلي؛ الأجل الفعلي للدفع لكل زبون؛ المستحقات حسب العمر؛ أيام المخزون؛ ومدة الدورة.",
        "**ما تفعله Symloop**: المعاينة، استيراد كشوف البنك والمطابقة، قراءة الفواتير في أدواتكم، حساب التواريخ المرجَّحة، المخطط وفرضياته، شاشة المسيّر، ثم القراءات الأسبوعية الأولى معكم.",
      ], faq: [
        { q: "كيف تُسيَّر خزينة المؤسسة؟", a: "بتوقّع الرصيد أسبوعاً بأسبوع: رصيد اليوم، زائد المقبوضات في تاريخها المرجَّح، ناقص المدفوعات في تاريخها. وعلى ثلاثة عشر أسبوعاً، يُرى الهبوط باكراً بما يكفي للتحرك. والمخطط يُحدَّث كل أسبوع." },
        { q: "ما هو مخطط الخزينة؟", a: "جدول، أسبوعاً بأسبوع أو شهراً بشهر، لما سيدخل إلى الحساب وما سيخرج منه، وللرصيد الناتج. وليس كشفاً: هو ينظر إلى الأمام." },
        { q: "لماذا ينقص المال مؤسسة مربحة؟", a: "لأن النتيجة تحسب البيع يوم يُنجز، والحساب يوم يُدفع. فإذا دفع الزبائن في 60 يوماً ونام المخزون 45 يوماً، فالمال المكسوب لم يصل بعد." },
        { q: "على أي مدة يُعدّ مخطط الخزينة؟", a: "ثلاثة عشر أسبوعاً أفق جيد: فصل واحد، قصير بما يكفي ليكون دقيقاً، وطويل بما يكفي للتحرك. وبعد ذلك، يكفي مخطط شهراً بشهر، بدقة أقل." },
        { q: "كيف تُتوقَّع مقبوضات الزبائن؟", a: "فاتورة بفاتورة، في التاريخ الذي يدفع فيه هذا الزبون عادة، لا في الاستحقاق المكتوب. والأجل الفعلي يُحسب من مدفوعاته السابقة. والمستحقات القديمة جداً تُحسب بحذر." },
        { q: "ما العمل حين يعلن المخطط رصيداً سالباً؟", a: "التحرك ما دامت هناك أسابيع: تذكير المقبوضات المنتظرة قبل الهبوط، تأجيل طلبية أو شراء، وتقسيط دفع بموافقة المورّد. وإذا كانت الحاجة دائمة، الحديث مع البنك، والمخطط في اليد." },
        { q: "ما هي دورة تحويل النقد؟", a: "عدد الأيام التي يبقى فيها المال مجمَّداً: أيام المخزون، زائد الأجل الممنوح للزبائن، ناقص الأجل المحصَّل من المورّدين. في مثال هذه الصفحة: 45 زائد 60 ناقص 30، أي 75 يوماً." },
        { q: "هل يمكن تسيير الخزينة بإكسل؟", a: "نعم، للبداية، بإكسل (" + I('Excel') + "). والحد هو التحديث: نسخ الفواتير المفتوحة كل أسبوع يأخذ وقتاً، وينتهي المخطط بألا يُمسك. والأداة الموصولة بالفواتير تُبقيه محدَّثاً." },
        { q: "ما الفرق مع المحاسبة؟", a: "المحاسبة تسجّل ما حدث، حسب قواعدها. ومخطط الخزينة يتوقع ما سيحدث في الحساب. يعتمد على الفواتير نفسها، لكنه يخدم قراراً آخر." },
        { q: "كم من الوقت لوضع مخطط خزينة؟", a: "خمسة أسابيع في مثال هذه الصفحة: المعاينة، رصيد موثوق، المقبوضات، المدفوعات، ثم المخطط والفرضيات. وبعدها، نحو عشرين دقيقة في الأسبوع." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "النتيجة تحسب البيع يوم يُنجز؛ والحساب، يوم يُدفع." },
      { after: 2, text: "المشكل ليس الفصل، بل الأسبوع 7." },
    ],
    cta: { eyebrow: "قولوا لنا أين فواتير زبائنكم ومورّديكم اليوم، وكم حساباً تتابعون: نبدأ بالمعاينة", title: "مربحة وينقصها المال، هبوط يُكتشف في كشف البنك، زبائن يدفعون في سبعين يوماً، أو مؤسس في فرنسا يريد أن يعرف هل ستصمد مؤسسته في الجزائر خلال الفصل", body: "Symloop تبني مخطط الخزينة الموصول بفواتيركم: رصيد اليوم، المقبوضات في تاريخها المرجَّح، المدفوعات، ثلاثة عشر أسبوعاً، وفرضيات. صِفوا لنا نشاطكم، آجال الدفع عندكم، والأسبوع من الشهر الذي تخشونه." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.rentable, kind: '2027', name: 'معرفة هل المؤسسة مربحة: الشلال والعتبة' },
      { href: L.credit, kind: '2027', name: 'دَين الزبون: السقف، الكشوف، والتذكيرات' },
      { href: L.achats, kind: '2027', name: 'طلبات الشراء: الموافقة والميزانية الملتزَم بها' },
      { href: L.tableau, kind: '2027', name: 'لوحة القيادة في الوقت الحقيقي: تعريف واحد لكل رقم' },
    ] },
  },
};

const KEYWORDS = "comment gérer la trésorerie d'une entreprise 2027, comment gérer sa trésorerie, comment gérer la trésorerie, plan de trésorerie, prévision de trésorerie, tableau de trésorerie, trésorerie à 13 semaines, entreprise rentable sans trésorerie, délai de paiement clients, logiciel de trésorerie algérie, how to manage company cash, cash flow forecast, 13-week cash plan, cash conversion cycle, profitable but no cash, كيف أسيّر خزينة المؤسسة, مخطط الخزينة, توقّع الخزينة, دورة النقد, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
