import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-analyser-les-ventes-d-une-entreprise-algerie-2027-quels-produits-font-la-marge-quels-clients-partent-comparer-le-bon-mois-ramadan.mjs';

const SLUG = 'comment-analyser-les-ventes-d-une-entreprise-algerie-2027-quels-produits-font-la-marge-quels-clients-partent-comparer-le-bon-mois-ramadan';
const FIGURES = ['questions', 'classements', 'analyser', 'couches', 'ramadan', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  promo: '/blog/la-promo-a-marche-et-on-a-perdu-de-l-argent-moteur-de-promotions-application-algerie-2027-regles-cumul-codes-garde-de-marge-mesure-temoin/',
  fiche: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  crm: '/blog/logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux/',
  erp: '/blog/logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  reprendre: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
};

const CONTENT = {
  fr: {
    kind: 'Analyse des ventes · Algérie · 2027', title: "Comment analyser les ventes d'une entreprise en Algérie (2027) : on a des chiffres mais pas de réponses, quels produits font la marge, quels clients sont partis, si le mois est bon, comparer à calendrier égal, ce qu'il faut dans les données",
    dek: "« Notre logiciel sort un chiffre d'affaires par mois, et c'est tout. Je ne sais pas dire quels produits me font gagner de l'argent, quels clients sont partis, ni si ce mois est meilleur que le même mois l'an dernier, puisque Ramadan n'est jamais à la même date. Comment analyser les ventes de mon entreprise ? » Analyser, ce n'est pas additionner : c'est poser six questions et lire, pour chacune, le bon classement ou la bonne comparaison. Presque toujours, il manque trois choses dans les données : le coût, le client, et le calendrier.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Analyse des ventes', 'Marge par produit', 'Règle de Pareto', 'Saisonnalité et Ramadan', 'Clients perdus', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Analyser ses ventes, c'est répondre à **six questions** : qu'est-ce qui me fait vivre, de qui je dépends, le mois est-il bon, qui est parti, qu'ai-je raté, où part la marge. Chacune a sa lecture : **classer par marge** et non par chiffre d'affaires ; **comparer à période égale**, pas à date égale, parce que Ramadan avance d'environ onze jours par an ; **compter les clients qui ne reviennent pas**. Et chacune exige une donnée : **le coût d'achat sur chaque ligne de vente, le client identifié, une seule fiche par produit**. Six semaines dans l'exemple pour passer d'un total mensuel à six lectures.",
      "Cette page s'adresse au gérant d'une entreprise de négoce, de distribution, de fabrication ou de services qui a un logiciel plein de chiffres et peu de réponses, et au fondateur installé en France qui veut lire, de loin, ce que vend réellement son entreprise en Algérie. Les définitions viennent de sources publiques : principe de Pareto, analyse ABC, marge brute, saisonnalité, calendrier hégirien, ventes à périmètre constant, moyenne mobile, analyse par cohortes, attrition, rupture de stock, schéma en étoile, table de faits, qualité des données. Les huit produits, leurs indices, les douze semaines et le calendrier sont un exemple construit. Cette page ne traite ni de comptabilité ni de fiscalité : la marge dont il est question est une marge de gestion, et les comptes relèvent de votre expert-comptable. Le tableau de bord en temps réel, sa fraîcheur et ses alertes font l'objet d'[un autre guide](" + L.tableau + ").",
    ],
    sections: [
      { heading: "Six questions, et la lecture qui y répond", body: [
        "La figure associe, à chaque question, sa lecture et la donnée qu'elle exige.",
      ], visual: 'questions', after: [
        "**Un total ne répond à rien.** « Douze millions ce mois-ci » ne dit ni d'où ils viennent, ni ce qu'il en reste. Les six questions de la figure découpent ce total selon un axe à la fois : par produit, par client, par période. **Le principe de Pareto.** Pour beaucoup de phénomènes, environ 80 % des effets viennent de 20 % des causes ; c'est un adage du commerce que 80 % des ventes viennent de 20 % des clients. Ce n'est pas une loi : c'est une première lecture, à vérifier sur vos chiffres. Elle dit où regarder d'abord.",
        "**Trois classes.** L'analyse ABC range les articles en trois catégories, des plus importants aux moins importants : appliquée aux ventes, elle sépare la poignée de produits qui pèsent, le milieu, et la longue liste qui occupe les rayons. **Une question, une décision.** Une lecture qui ne change aucune décision ne mérite pas un écran. « De qui je dépends ? » sert à décider qui visiter ; « qui est parti ? », qui rappeler, avec les outils du [guide sur le CRM](" + L.crm + ").",
      ] },
      { heading: "Les mêmes produits, deux classements", body: [
        "La figure classe huit produits par chiffre d'affaires, puis par marge.",
      ], visual: 'classements', after: [
        "**Le chiffre n'est pas le gain.** La marge brute est la différence entre le chiffre d'affaires et le coût de ce qui a été vendu, rapportée au chiffre d'affaires. Dans l'exemple, le produit le plus vendu a une marge de 6 % : il occupe le magasin, les livreurs et la trésorerie, et rapporte moins que cinq autres. Trois produits sur huit font près de 60 % de la marge. **Ce qu'on en fait.** Pousser ce qui rapporte, renégocier l'achat de ce qui occupe, et cesser de fêter un record de ventes fait sur un produit à 6 %.",
        "**La condition.** Pour classer par marge, chaque ligne de vente doit porter son coût d'achat au jour de la vente. C'est la donnée qui manque le plus souvent : le logiciel connaît le prix de vente, pas ce que l'article a coûté. **Les remises.** La seconde fuite est la remise : elle se lit par vendeur et par client, en comparant le prix catalogue au prix vendu. Une promotion qui gonfle les ventes peut détruire la marge, comme le montre [le guide sur les promotions](" + L.promo + ").",
      ] },
      { heading: "Analyser ses ventes, en six temps", body: [
        "Le deuxième temps est accentué : compléter chaque ligne de vente.",
      ], visual: 'analyser', after: [
        "**Nettoyer, compléter.** Un produit saisi sous deux fiches a ses ventes coupées en deux, et ne sera premier nulle part ; un client en trois exemplaires ne paraîtra jamais dans les vingt premiers. La qualité des données, exactitude, complétude, cohérence, se règle avant toute analyse : c'est le travail décrit dans [le guide sur la fiche produit](" + L.fiche + ") et dans [le guide pour reprendre ses données](" + L.reprendre + "). **Classer, comparer.** Puis les deux gestes de base : classer selon un axe, comparer deux périodes qui se ressemblent.",
        "**Expliquer, décider.** Un écart n'est pas une explication. Une baisse peut venir d'une rupture, un événement qui épuise le stock, et que le chiffre des ventes ne montre pas : on ne vend pas ce qu'on n'a pas. Noter les demandes non servies est la seule façon de la voir, avec un stock juste, sujet du [guide sur le stock](" + L.stock + "). **Une action par lecture.** Chaque lecture se termine par une décision, un nom et une date ; sinon l'analyse devient un rapport de plus.",
      ] },
      { heading: "Une analyse des ventes, en cinq couches", body: [
        "La couche accentuée est la ligne de vente.",
      ], visual: 'couches', after: [
        "**La ligne de vente.** Tout part d'elle. En entrepôt de données, une table de faits contient les mesures d'un processus, ici une ligne par article vendu ; le schéma en étoile, le plus simple et le plus répandu, relie cette table à des tables de dimensions : les produits, les clients, les vendeurs, le temps. C'est ce montage qui permet de regrouper la même vente par produit le matin et par client l'après-midi. **Les fiches.** Une dimension vaut ce que valent ses fiches : une famille par produit, une ville par client.",
        "**Une définition par chiffre.** « Chiffre d'affaires » : retours déduits ou non, à la commande ou à la livraison ? La définition est écrite une fois et appliquée partout, sinon deux écrans donnent deux totaux. **D'où viennent les lignes.** D'un logiciel de gestion qui enregistre réellement les ventes : quand il y en a quatre qui ne se parlent pas, l'analyse commence par [une seule base](" + L.erp + "). **Chaque matin.** Les lectures de cette page se calculent la nuit ; ce qui doit se voir dans l'heure relève du tableau de bord cité plus haut.",
      ] },
      { heading: "Comparer la bonne semaine", body: [
        "La figure compare douze semaines de ventes sur deux années.",
      ], visual: 'ramadan', after: [
        "**La saisonnalité.** Elle désigne les variations qui reviennent à intervalles réguliers de moins d'un an : la semaine, le mois, le trimestre. En Algérie, une partie de la saison ne suit pas le calendrier solaire : l'année du calendrier hégirien compte douze mois de 29 ou 30 jours, soit 354 ou 355 jours, environ onze jours de moins que l'année solaire, et ses mois remontent donc à travers les saisons. Ramadan, neuvième mois, commence chaque année plus tôt. **Ce que cela casse.** Toute comparaison « ce mois-ci contre le même mois l'an dernier » qui touche Ramadan ou une fête.",
        "**À calendrier égal.** Les enseignes à plusieurs magasins comparent à périmètre constant : le chiffre des mêmes points de vente sur une même période. La même prudence s'applique au temps : la deuxième semaine de Ramadan contre la deuxième semaine de Ramadan, la semaine de la rentrée contre celle de la rentrée, et le même nombre de jours ouvrés. **Lisser.** Une moyenne mobile, qui remplace chaque point par la moyenne de ses voisins, enlève le bruit d'un jour férié. **Qui est parti.** L'analyse par cohortes découpe les clients en groupes, par exemple ceux gagnés la même année, et suit chacun : elle montre l'attrition, la perte de clients, que le total cache quand de nouveaux arrivent.",
      ] },
      { heading: "Six semaines jusqu'à la première lecture, en 2027", body: [
        "Six semaines dans l'exemple, dont la première pour ouvrir les données.",
      ], visual: 'calendrier', after: [
        "**Commencer par regarder.** La première semaine ne produit aucun écran : on ouvre la table des ventes du logiciel et on note ce qu'une vente enregistre vraiment. Y a-t-il un client, ou « client comptoir » partout ? Un coût, ou un champ vide ? Un vendeur ? Cette liste décide du reste. **Le plus long.** Porter le coût et le client sur les lignes, pour le passé quand c'est possible, pour l'avenir dans tous les cas : une règle de saisie change, et l'analyse devient possible trois mois plus tard.",
        "**La première lecture.** Les six lectures sont lues une fois avec le gérant, chiffres en main : ce qui surprend est vérifié ligne par ligne avant d'être cru. Puis une décision par lecture. **Ensuite.** Un rendez-vous fixe, le dimanche matin, vingt minutes, toujours les mêmes six lectures : c'est la régularité, pas l'outil, qui fait qu'une entreprise connaît ses ventes.",
      ], list: [
        "**Ce que le gérant reçoit** : l'inventaire de ce que ses ventes enregistrent et de ce qui manque ; des fiches produits et clients sans doublons ; une table des ventes alimentée chaque nuit ; six lectures, dont la marge par produit et la comparaison à calendrier égal ; le calendrier de son activité ; un rendez-vous hebdomadaire.",
        "**Ce que l'entreprise ne fait plus** : fêter un record de chiffre d'affaires fait sur un produit sans marge, comparer mars à mars une année de Ramadan, découvrir en fin d'année qu'un gros client est parti, refaire chaque mois le même tableau à la main.",
        "**Ce qui est mesuré** : part des lignes de vente portant un coût et un client, produits et clients qui font 80 % de la marge, évolution à période égale, clients de l'an dernier sans achat, demandes non servies, remise moyenne par vendeur.",
        "**Ce que fait Symloop** : l'inventaire des données, le nettoyage des fiches, le report du coût et du client sur les lignes, la table des ventes et ses axes, les six lectures, le calendrier de l'activité, le branchement sur votre logiciel de gestion ou sa remise à plat, puis la première lecture avec vous.",
      ], faq: [
        { q: "Comment analyser les ventes d'une entreprise ?", a: "En posant six questions et en lisant, pour chacune, un classement ou une comparaison : produits par marge, clients par chiffre et par marge, mois à période égale, clients qui ne reviennent pas, demandes non servies, remises. Avant cela, vérifiez que chaque ligne de vente porte un coût et un client." },
        { q: "Quels indicateurs suivre pour analyser ses ventes ?", a: "Peu, mais toujours les mêmes : chiffre d'affaires et marge, par produit et par client ; évolution à période égale ; nombre de clients actifs et de clients perdus ; remise moyenne ; demandes non servies. Six lectures lues chaque semaine valent mieux que trente regardées une fois." },
        { q: "Comment savoir quels produits rapportent le plus ?", a: "En les classant par marge et non par chiffre d'affaires. Il faut pour cela le coût d'achat sur chaque ligne de vente. Dans l'exemple de cette page, le produit le plus vendu n'est que sixième par la marge, et trois produits sur huit en font près de 60 %." },
        { q: "Comment comparer un mois à l'année précédente quand Ramadan change de date ?", a: "En comparant des périodes qui se ressemblent, pas des dates : la deuxième semaine de Ramadan avec la deuxième semaine de Ramadan, la rentrée avec la rentrée. L'année lunaire compte 354 ou 355 jours : Ramadan commence environ onze jours plus tôt chaque année." },
        { q: "Comment savoir quels clients sont partis ?", a: "En listant les clients qui ont acheté l'an dernier et rien depuis un délai fixé, par exemple trois fois leur rythme habituel. Cela suppose que le client soit identifié sur chaque vente. Le total des ventes cache ces départs tant que de nouveaux clients arrivent." },
        { q: "Peut-on analyser ses ventes avec Excel ?", a: "Oui, pour commencer : un export des ventes et un tableau croisé donnent les premiers classements. Les limites arrivent vite : fiches en double, coût absent, travail à refaire chaque mois. Un outil prend le relais quand la lecture devient hebdomadaire." },
        { q: "Que faut-il dans les données pour analyser les ventes ?", a: "Sur chaque ligne de vente : le produit, le client, la date, la quantité, le prix vendu, le coût d'achat et le vendeur. Autour : une seule fiche par produit et par client, avec leur famille. Sans le coût, pas de marge ; sans le client, pas de fidélité." },
        { q: "Qu'est-ce que la règle des 80/20 dans les ventes ?", a: "C'est le principe de Pareto : environ 80 % des effets viennent de 20 % des causes, et l'on dit souvent que 80 % des ventes viennent de 20 % des clients. C'est un ordre de grandeur, pas une loi : calculez la vraie proportion sur vos chiffres." },
        { q: "Faut-il un outil de business intelligence ?", a: "Pas d'abord. L'outil ne crée pas les données qui manquent : commencez par le coût et le client sur les lignes, puis six lectures simples. Un outil de tableaux devient utile quand ces lectures sont stables et que plusieurs personnes les consultent." },
        { q: "Combien de temps pour mettre en place une analyse des ventes ?", a: "Six semaines dans l'exemple de cette page : une pour inventorier les données, deux pour les fiches et les coûts, puis la table des ventes, les six lectures et le calendrier de l'activité. La marge sur le passé dépend des coûts que l'on peut retrouver." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Classer par le chiffre d'affaires, c'est regarder le travail, pas le gain." },
      { after: 4, text: "On ne compare pas deux dates : on compare deux périodes qui se ressemblent." },
    ],
    cta: { eyebrow: "Dites-nous quel logiciel enregistre vos ventes et ce qu'il sort aujourd'hui : nous commençons par regarder ce qu'une ligne de vente contient", title: "Chiffre d'affaires sans marge, clients qui partent sans qu'on le voie, mois incomparables à cause de Ramadan, ou fondateur en France qui veut lire ce que vend son entreprise en Algérie : nous complétons les données, puis nous construisons six lectures", body: "Inventaire des données, fiches sans doublons, coût et client sur chaque ligne, table des ventes alimentée chaque nuit, marge par produit et par client, comparaison à calendrier égal, clients perdus, remises. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.tableau, kind: '2027', name: 'Tableau de bord en temps réel : une définition par chiffre' },
      { href: L.promo, kind: '2027', name: 'La promo a marché et on a perdu de l’argent : garder la marge' },
      { href: L.crm, kind: '2027', name: 'Logiciel CRM : portefeuille clients, relances, prévision' },
      { href: L.erp, kind: '2027', name: 'Logiciel ERP : une seule base, pas un outil de plus' },
    ] },
  },
  en: {
    kind: 'Sales analysis · Algeria · 2027', title: "How to analyse a company's sales in Algeria (2027): figures but no answers, which products make the margin, which customers have left, whether the month is good, comparing like for like, what the data must hold",
    dek: "“Our software gives a revenue figure per month, and that is all. I cannot say which products earn me money, which customers have left, or whether this month is better than the same month last year, since Ramadan is never on the same date. How do I analyse my company's sales?” Analysing is not adding up: it is asking six questions and reading, for each, the right ranking or the right comparison. Almost always, three things are missing from the data: the cost, the customer, and the calendar.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Sales analysis', 'Margin per product', 'Pareto principle', 'Seasonality and Ramadan', 'Lost customers', 'Algeria 2027'],
    intro: [
      "**Short answer.** Analysing your sales means answering **six questions**: what keeps me alive, who do I depend on, is the month good, who has left, what did I miss, where does the margin go. Each has its reading: **rank by margin** and not by revenue; **compare like periods**, not like dates, because Ramadan moves about eleven days earlier each year; **count the customers who do not come back**. And each requires a piece of data: **the purchase cost on every sales line, the customer identified, a single record per product**. Six weeks in the example to go from a monthly total to six readings.",
      "This page is for the manager of a trading, distribution, manufacturing or service company that has software full of figures and few answers, and for the founder based in France who wants to read, from afar, what their company in Algeria really sells. The definitions come from public sources: Pareto principle, ABC analysis, gross margin, seasonality, the Hijri calendar, same-store sales, moving average, cohort analysis, customer attrition, stockout, star schema, fact table, data quality. The eight products, their indices, the twelve weeks and the calendar are a constructed example. This page does not cover accounting or tax: the margin discussed here is a management margin, and the accounts belong to your accountant. The real-time dashboard, its freshness and its alerts are the subject of [another guide](" + L.tableau + ").",
    ],
    sections: [
      { heading: "Six questions, and the reading that answers each", body: [
        "The figure pairs each question with its reading and the data it requires.",
      ], visual: 'questions', after: [
        "**A total answers nothing.** “Twelve million this month” says neither where it comes from nor what is left of it. The six questions in the figure cut that total along one axis at a time: by product, by customer, by period. **The Pareto principle.** For many outcomes, roughly 80% of consequences come from 20% of causes; it is an adage of business management that 80% of sales come from 20% of clients. It is not a law: it is a first reading, to be checked on your figures. It says where to look first.",
        "**Three classes.** ABC analysis divides items into three categories, from the most important to the least: applied to sales, it separates the handful of products that weigh, the middle, and the long list that fills the shelves. **One question, one decision.** A reading that changes no decision does not deserve a screen. “Who do I depend on?” serves to decide whom to visit; “who has left?”, whom to call back, with the tools of [the guide to CRM](" + L.crm + ").",
      ] },
      { heading: "The same products, two rankings", body: [
        "The figure ranks eight products by revenue, then by margin.",
      ], visual: 'classements', after: [
        "**Revenue is not gain.** Gross margin is the difference between revenue and the cost of what was sold, divided by revenue. In the example, the best seller has a margin of 6%: it takes up the warehouse, the drivers and the cash, and earns less than five others. Three products out of eight make almost 60% of the margin. **What to do with it.** Push what earns, renegotiate the purchase of what keeps you busy, and stop celebrating a sales record made on a 6% product.",
        "**The condition.** To rank by margin, every sales line must carry its purchase cost on the day of the sale. It is the data most often missing: the software knows the selling price, not what the item cost. **Discounts.** The second leak is the discount: it is read by seller and by customer, by comparing the list price with the price sold. A promotion that swells sales can destroy the margin, as [the guide to promotions](" + L.promo + ") shows.",
      ] },
      { heading: "Analysing your sales, in six steps", body: [
        "The second step is accented: complete every sales line.",
      ], visual: 'analyser', after: [
        "**Clean, complete.** A product entered under two records has its sales cut in two, and will be first nowhere; a customer in three copies will never appear in the top twenty. Data quality, accuracy, completeness, consistency, is settled before any analysis: that is the work described in [the guide to the product record](" + L.fiche + ") and in [the guide to taking over your data](" + L.reprendre + "). **Rank, compare.** Then the two basic moves: rank along an axis, compare two periods that resemble each other.",
        "**Explain, decide.** A gap is not an explanation. A fall may come from a stockout, an event that causes inventory to be exhausted, and which the sales figure does not show: you do not sell what you do not have. Noting the requests not served is the only way to see it, along with a correct stock, the subject of [the guide to stock](" + L.stock + "). **One action per reading.** Each reading ends with a decision, a name and a date; otherwise analysis becomes one more report.",
      ] },
      { heading: "A sales analysis, in five layers", body: [
        "The accented layer is the sales line.",
      ], visual: 'couches', after: [
        "**The sales line.** Everything starts from it. In data warehousing, a fact table consists of the measurements of a business process, here one line per item sold; the star schema, the simplest and most widely used, links that table to dimension tables: products, customers, sellers, time. That arrangement is what lets the same sale be grouped by product in the morning and by customer in the afternoon. **Records.** A dimension is worth what its records are worth: a family per product, a city per customer.",
        "**One definition per figure.** “Revenue”: returns deducted or not, at order or at delivery? The definition is written once and applied everywhere, otherwise two screens give two totals. **Where the lines come from.** From management software that really records sales: when there are four that do not talk to each other, analysis starts with [a single base](" + L.erp + "). **Every morning.** The readings on this page are computed overnight; what must be seen within the hour belongs to the dashboard mentioned above.",
      ] },
      { heading: "Comparing the right week", body: [
        "The figure compares twelve weeks of sales over two years.",
      ], visual: 'ramadan', after: [
        "**Seasonality.** It refers to the trends that occur at regular intervals of less than a year: weekly, monthly, quarterly. In Algeria, part of the season does not follow the solar calendar: the year of the Hijri calendar has twelve months of 29 or 30 days, 354 or 355 days in all, about eleven days fewer than the solar year, so its months cycle in reverse through the seasons. Ramadan, the ninth month, starts earlier every year. **What that breaks.** Any comparison of “this month against the same month last year” that touches Ramadan or a holiday.",
        "**Like for like.** Chains with several shops compare same-store sales: the revenue of the same outlets over a given period. The same care applies to time: the second week of Ramadan against the second week of Ramadan, the back-to-school week against the back-to-school week, and the same number of working days. **Smoothing.** A moving average, which replaces each point with the average of its neighbours, removes the noise of a public holiday. **Who has left.** Cohort analysis breaks customers into groups, for example those won in the same year, and follows each one: it shows attrition, the loss of customers, which the total hides when new ones arrive.",
      ] },
      { heading: "Six weeks to the first reading, in 2027", body: [
        "Six weeks in the example, the first to open the data.",
      ], visual: 'calendrier', after: [
        "**Start by looking.** The first week produces no screen: the software's sales table is opened and what a sale really records is noted. Is there a customer, or “counter customer” everywhere? A cost, or an empty field? A seller? That list decides the rest. **The longest part.** Carrying the cost and the customer on the lines, for the past when possible, for the future in every case: one entry rule changes, and analysis becomes possible three months later.",
        "**The first reading.** The six readings are read once with the manager, figures in hand: what surprises is checked line by line before it is believed. Then one decision per reading. **Afterwards.** A fixed appointment, Sunday morning, twenty minutes, always the same six readings: it is regularity, not the tool, that makes a company know its sales.",
      ], list: [
        "**What the manager receives**: the inventory of what the sales record and what is missing; product and customer records with no duplicates; a sales table fed every night; six readings, including margin per product and the like-for-like comparison; the calendar of the business; a weekly appointment.",
        "**What the company no longer does**: celebrate a revenue record made on a product with no margin, compare March with March in a Ramadan year, find out at year end that a big customer has left, redo the same table by hand every month.",
        "**What is measured**: share of sales lines carrying a cost and a customer, products and customers that make 80% of the margin, like-for-like change, last year's customers with no purchase, requests not served, average discount per seller.",
        "**What Symloop does**: the data inventory, cleaning the records, carrying the cost and the customer on the lines, the sales table and its axes, the six readings, the business calendar, the connection to your management software or its overhaul, then the first reading with you.",
      ], faq: [
        { q: "How do you analyse a company's sales?", a: "By asking six questions and reading, for each, a ranking or a comparison: products by margin, customers by revenue and by margin, the month like for like, customers who do not come back, requests not served, discounts. Before that, check that every sales line carries a cost and a customer." },
        { q: "Which indicators should be followed to analyse sales?", a: "Few, but always the same: revenue and margin, by product and by customer; like-for-like change; number of active and lost customers; average discount; requests not served. Six readings read every week are worth more than thirty looked at once." },
        { q: "How do we know which products earn the most?", a: "By ranking them by margin and not by revenue. That requires the purchase cost on every sales line. In this page's example, the best seller is only sixth by margin, and three products out of eight make almost 60% of it." },
        { q: "How do you compare a month with the previous year when Ramadan changes date?", a: "By comparing periods that resemble each other, not dates: the second week of Ramadan with the second week of Ramadan, back-to-school with back-to-school. The lunar year has 354 or 355 days: Ramadan starts about eleven days earlier each year." },
        { q: "How do we know which customers have left?", a: "By listing the customers who bought last year and nothing since a set delay, for example three times their usual rhythm. That assumes the customer is identified on every sale. The sales total hides these departures as long as new customers arrive." },
        { q: "Can sales be analysed with Excel?", a: "Yes, to start with: an export of sales and a pivot table give the first rankings. The limits come quickly: duplicate records, missing cost, work to redo every month. A tool takes over when the reading becomes weekly." },
        { q: "What must the data hold to analyse sales?", a: "On every sales line: the product, the customer, the date, the quantity, the price sold, the purchase cost and the seller. Around it: a single record per product and per customer, with their family. Without the cost, no margin; without the customer, no loyalty." },
        { q: "What is the 80/20 rule in sales?", a: "It is the Pareto principle: roughly 80% of consequences come from 20% of causes, and it is often said that 80% of sales come from 20% of clients. It is an order of magnitude, not a law: work out the real proportion on your figures." },
        { q: "Is a business intelligence tool needed?", a: "Not first. The tool does not create the missing data: start with the cost and the customer on the lines, then six simple readings. A charting tool becomes useful when those readings are stable and several people consult them." },
        { q: "How long does it take to set up a sales analysis?", a: "Six weeks in this page's example: one to inventory the data, two for records and costs, then the sales table, the six readings and the business calendar. The margin on the past depends on the costs that can be recovered." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Ranking by revenue looks at the work, not at the gain." },
      { after: 4, text: "You do not compare two dates: you compare two periods that resemble each other." },
    ],
    cta: { eyebrow: "Tell us which software records your sales and what it gives today: we start by looking at what a sales line contains", title: "Revenue with no margin, customers leaving unseen, months that cannot be compared because of Ramadan, or a founder in France who wants to read what their company in Algeria sells: we complete the data, then we build six readings", body: "Data inventory, records with no duplicates, cost and customer on every line, a sales table fed every night, margin per product and per customer, like-for-like comparison, lost customers, discounts. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.tableau, kind: '2027', name: 'Real-time dashboard: one definition per figure' },
      { href: L.promo, kind: '2027', name: 'The promotion worked and we lost money: keeping the margin' },
      { href: L.crm, kind: '2027', name: 'CRM software: customer portfolio, follow-ups, forecast' },
      { href: L.erp, kind: '2027', name: 'ERP software: a single base, not one more tool' },
    ] },
  },
  ar: {
    kind: 'تحليل المبيعات · الجزائر · 2027', title: "كيف تُحلَّل مبيعات المؤسسة في الجزائر (2027): أرقام بلا أجوبة، أي المنتجات تصنع الهامش، أي الزبائن غادروا، هل الشهر جيد، المقارنة برزنامة متساوية، وما يجب أن يكون في البيانات",
    dek: "«برنامجنا يُخرج رقم أعمال لكل شهر، وهذا كل شيء. لا أستطيع القول أي المنتجات تربحني المال، أي الزبائن غادروا، ولا هل هذا الشهر أحسن من الشهر نفسه في السنة الماضية، ما دام رمضان لا يأتي أبداً في التاريخ نفسه. كيف أحلّل مبيعات مؤسستي؟» التحليل ليس جمعاً: هو طرح ستة أسئلة وقراءة، لكل واحد، الترتيب الصحيح أو المقارنة الصحيحة. وفي أغلب الأحيان، تنقص البيانات ثلاثة أشياء: الكلفة، الزبون، والرزنامة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['تحليل المبيعات', 'الهامش لكل منتج', 'مبدأ باريتو', 'الموسمية ورمضان', 'الزبائن المغادرون', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** تحليل المبيعات هو الإجابة عن **ستة أسئلة**: ما الذي أعيش منه، على من أتوقف، هل الشهر جيد، من غادر، ماذا فاتني، وأين يذهب الهامش. ولكل واحد قراءته: **الترتيب بالهامش** لا برقم الأعمال؛ **المقارنة بالفترة نفسها**، لا بالتاريخ نفسه، لأن رمضان يتقدم بنحو أحد عشر يوماً كل سنة؛ و**عدّ الزبائن الذين لا يرجعون**. وكل واحد يتطلب معطى: **كلفة الشراء على كل سطر بيع، الزبون معرَّفاً، وبطاقة واحدة لكل منتج**. ستة أسابيع في المثال للانتقال من مجموع شهري إلى ست قراءات.",
      "هذه الصفحة موجَّهة إلى مسيّر مؤسسة تجارة أو توزيع أو تصنيع أو خدمات لها برنامج مملوء بالأرقام وقليل الأجوبة، وإلى المؤسس المقيم في فرنسا الذي يريد أن يقرأ، من بعيد، ما تبيعه مؤسسته في الجزائر فعلاً. التعريفات آتية من مصادر علنية: مبدأ " + I('Pareto') + "، تحليل " + I('ABC') + "، الهامش الإجمالي، الموسمية، التقويم الهجري، المبيعات بمحيط ثابت، المتوسط المتحرك، تحليل الأفواج، فقدان الزبائن، نفاد المخزون، المخطط النجمي، جدول الوقائع، وجودة البيانات. المنتجات الثمانية ومؤشراتها والأسابيع الاثنا عشر والرزنامة مثال مركَّب. هذه الصفحة لا تتناول المحاسبة ولا الجباية: الهامش المقصود هنا هامش تسيير، والحسابات عند محاسبكم. ولوحة القيادة في الوقت الحقيقي، بطزاجتها وتنبيهاتها، موضوع [دليل آخر](" + L.tableau + ").",
    ],
    sections: [
      { heading: "ستة أسئلة، والقراءة التي تجيب عنها", body: [
        "الشكل يربط كل سؤال بقراءته وبالمعطى الذي يتطلبه.",
      ], visual: 'questions', after: [
        "**المجموع لا يجيب عن شيء.** «اثنا عشر مليوناً هذا الشهر» لا يقول من أين أتت، ولا ما بقي منها. والأسئلة الستة في الشكل تقطّع هذا المجموع حسب محور واحد في كل مرة: المنتج، الزبون، والفترة. **مبدأ " + I('Pareto') + ".** في ظواهر كثيرة، نحو 80 بالمئة من النتائج تأتي من 20 بالمئة من الأسباب؛ ومن أقوال التجارة أن 80 بالمئة من المبيعات تأتي من 20 بالمئة من الزبائن. وليس قانوناً: هو قراءة أولى، تُراجَع على أرقامكم. ويقول أين يُنظر أولاً.",
        "**ثلاثة أصناف.** تحليل " + I('ABC') + " يرتّب المواد في ثلاثة أصناف، من الأهم إلى الأقل أهمية: ومطبَّقاً على المبيعات، يفصل القلة من المنتجات التي تزن، الوسط، والقائمة الطويلة التي تملأ الرفوف. **سؤال، وقرار.** القراءة التي لا تغيّر أي قرار لا تستحق شاشة. «على من أتوقف؟» يفيد في تقرير من يُزار؛ و«من غادر؟»، من يُعاد الاتصال به، بأدوات [دليل تسيير علاقة الزبائن](" + L.crm + ").",
      ] },
      { heading: "المنتجات نفسها، بترتيبين", body: [
        "الشكل يرتّب ثمانية منتجات برقم الأعمال، ثم بالهامش.",
      ], visual: 'classements', after: [
        "**الرقم ليس الربح.** الهامش الإجمالي هو الفرق بين رقم الأعمال وكلفة ما بيع، مقسوماً على رقم الأعمال. في المثال، المنتج الأكثر مبيعاً هامشه 6 بالمئة: يشغل المخزن والموزّعين والخزينة، ويربح أقل من خمسة آخرين. وثلاثة منتجات من ثمانية تصنع قرابة 60 بالمئة من الهامش. **ما يُفعل بذلك.** دفع ما يربح، إعادة التفاوض على شراء ما يشغل، والكفّ عن الاحتفال برقم قياسي للمبيعات صُنع على منتج هامشه 6 بالمئة.",
        "**الشرط.** للترتيب بالهامش، يجب أن يحمل كل سطر بيع كلفة شرائه يوم البيع. وهو المعطى الناقص في أغلب الأحيان: البرنامج يعرف سعر البيع، لا ما كلّفته المادة. **التخفيضات.** والتسرب الثاني هو التخفيض: يُقرأ حسب البائع وحسب الزبون، بمقارنة السعر المعلَن بالسعر المباع. والعرض الترويجي الذي ينفخ المبيعات قد يهدم الهامش، كما يُظهر [دليل العروض الترويجية](" + L.promo + ").",
      ] },
      { heading: "تحليل المبيعات، في ست مراحل", body: [
        "المرحلة الثانية مبرزة: إكمال كل سطر بيع.",
      ], visual: 'analyser', after: [
        "**التنظيف، والإكمال.** المنتج المُدخَل في بطاقتين تنقسم مبيعاته إلى اثنين، ولن يكون أولاً في أي مكان؛ والزبون في ثلاث نسخ لن يظهر أبداً بين العشرين الأوائل. وجودة البيانات، الصحة والاكتمال والاتساق، تُحسم قبل أي تحليل: وهو العمل الموصوف في [دليل بطاقة المنتج](" + L.fiche + ") وفي [دليل استرجاع البيانات](" + L.reprendre + "). **الترتيب، والمقارنة.** ثم الحركتان الأساسيتان: الترتيب حسب محور، ومقارنة فترتين متشابهتين.",
        "**التفسير، والقرار.** الفارق ليس تفسيراً. الانخفاض قد يأتي من نفاد المخزون، وهو حدث يُستنفد فيه المخزون، ولا يُظهره رقم المبيعات: لا يُباع ما ليس موجوداً. وتسجيل الطلبات غير الملبّاة هو الطريقة الوحيدة لرؤيته، مع مخزون صحيح، موضوع [دليل المخزون](" + L.stock + "). **عمل لكل قراءة.** كل قراءة تنتهي بقرار، باسم، وبتاريخ؛ وإلا صار التحليل تقريراً إضافياً.",
      ] },
      { heading: "تحليل المبيعات، في خمس طبقات", body: [
        "الطبقة المبرزة هي سطر البيع.",
      ], visual: 'couches', after: [
        "**سطر البيع.** كل شيء ينطلق منه. في مستودعات البيانات، جدول الوقائع يحتوي مقاييس عملية، وهنا سطر لكل مادة مباعة؛ والمخطط النجمي، الأبسط والأكثر انتشاراً، يربط هذا الجدول بجداول الأبعاد: المنتجات، الزبائن، الباعة، والزمن. وهذا التركيب هو الذي يسمح بتجميع البيع نفسه حسب المنتج صباحاً وحسب الزبون مساءً. **البطاقات.** البُعد يساوي ما تساويه بطاقاته: عائلة لكل منتج، ومدينة لكل زبون.",
        "**تعريف واحد لكل رقم.** «رقم الأعمال»: بطرح المرتجعات أم لا، عند الطلبية أم عند التسليم؟ التعريف يُكتب مرة واحدة ويُطبَّق في كل مكان، وإلا أعطت شاشتان مجموعين. **من أين تأتي الأسطر.** من برنامج تسيير يسجّل المبيعات فعلاً: وحين توجد أربعة لا تتكلم مع بعضها، يبدأ التحليل من [قاعدة واحدة](" + L.erp + "). **كل صباح.** قراءات هذه الصفحة تُحسب ليلاً؛ وما يجب أن يُرى خلال ساعة يدخل في لوحة القيادة المذكورة أعلاه.",
      ] },
      { heading: "مقارنة الأسبوع الصحيح", body: [
        "الشكل يقارن اثني عشر أسبوعاً من المبيعات على سنتين.",
      ], visual: 'ramadan', after: [
        "**الموسمية.** تعني التغيرات التي تعود على فترات منتظمة أقل من سنة: الأسبوع، الشهر، والفصل. وفي الجزائر، جزء من الموسم لا يتبع التقويم الشمسي: سنة التقويم الهجري فيها اثنا عشر شهراً من 29 أو 30 يوماً، أي 354 أو 355 يوماً، أقل بنحو أحد عشر يوماً من السنة الشمسية، فأشهرها تدور عكسياً عبر الفصول. ورمضان، الشهر التاسع، يبدأ كل سنة أبكر. **ما يكسره ذلك.** كل مقارنة «هذا الشهر مقابل الشهر نفسه في السنة الماضية» تمسّ رمضان أو عيداً.",
        "**برزنامة متساوية.** السلاسل ذات عدة متاجر تقارن بمحيط ثابت: رقم نقاط البيع نفسها على فترة محدَّدة. والحذر نفسه يُطبَّق على الزمن: الأسبوع الثاني من رمضان مقابل الأسبوع الثاني من رمضان، أسبوع الدخول مقابل أسبوع الدخول، والعدد نفسه من أيام العمل. **التمليس.** المتوسط المتحرك، الذي يعوّض كل نقطة بمتوسط جيرانها، ينزع ضجيج يوم عطلة. **من غادر.** تحليل الأفواج يقسّم الزبائن إلى مجموعات، مثلاً الذين كُسبوا في السنة نفسها، ويتابع كل واحدة: يُظهر فقدان الزبائن، الذي يخفيه المجموع حين يصل زبائن جدد.",
      ] },
      { heading: "ستة أسابيع حتى القراءة الأولى، سنة 2027", body: [
        "ستة أسابيع في المثال، والأول منها لفتح البيانات.",
      ], visual: 'calendrier', after: [
        "**البدء بالنظر.** الأسبوع الأول لا ينتج أي شاشة: يُفتح جدول المبيعات في البرنامج ويُسجَّل ما يحفظه البيع فعلاً. هل هناك زبون، أم «زبون الشباك» في كل مكان؟ كلفة، أم حقل فارغ؟ بائع؟ وهذه القائمة تحسم الباقي. **الأطول.** حمل الكلفة والزبون على الأسطر، للماضي حين يمكن، وللمستقبل في كل الحالات: قاعدة إدخال تتغير، ويصير التحليل ممكناً بعد ثلاثة أشهر.",
        "**القراءة الأولى.** القراءات الست تُقرأ مرة مع المسيّر، والأرقام في اليد: وما يُفاجئ يُراجَع سطراً بسطر قبل تصديقه. ثم قرار لكل قراءة. **بعد ذلك.** موعد ثابت، صباح الأحد، عشرون دقيقة، ودائماً القراءات الست نفسها: الانتظام، لا الأداة، هو الذي يجعل المؤسسة تعرف مبيعاتها.",
      ], list: [
        "**ما يستلمه المسيّر**: جرد ما تسجّله مبيعاته وما ينقص؛ بطاقات منتجات وزبائن دون مكرَّرات؛ جدول مبيعات يُغذّى كل ليلة؛ ست قراءات، منها الهامش لكل منتج والمقارنة برزنامة متساوية؛ رزنامة نشاطه؛ وموعد أسبوعي.",
        "**ما لم تعد المؤسسة تفعله**: الاحتفال برقم قياسي صُنع على منتج دون هامش، مقارنة مارس بمارس في سنة رمضان، اكتشاف مغادرة زبون كبير في آخر السنة، وإعادة الجدول نفسه باليد كل شهر.",
        "**ما يُقاس**: حصة أسطر البيع التي تحمل كلفة وزبوناً، المنتجات والزبائن الذين يصنعون 80 بالمئة من الهامش، التطور بالفترة نفسها، زبائن السنة الماضية دون شراء، الطلبات غير الملبّاة، ومتوسط التخفيض لكل بائع.",
        "**ما تفعله Symloop**: جرد البيانات، تنظيف البطاقات، حمل الكلفة والزبون على الأسطر، جدول المبيعات ومحاوره، القراءات الست، رزنامة النشاط، الربط ببرنامج التسيير عندكم أو إعادة ترتيبه، ثم القراءة الأولى معكم.",
      ], faq: [
        { q: "كيف تُحلَّل مبيعات المؤسسة؟", a: "بطرح ستة أسئلة وقراءة، لكل واحد، ترتيب أو مقارنة: المنتجات بالهامش، الزبائن بالرقم وبالهامش، الشهر بالفترة نفسها، الزبائن الذين لا يرجعون، الطلبات غير الملبّاة، والتخفيضات. وقبل ذلك، تحققوا أن كل سطر بيع يحمل كلفة وزبوناً." },
        { q: "أي مؤشرات تُتابَع لتحليل المبيعات؟", a: "قليلة، لكن دائماً نفسها: رقم الأعمال والهامش، لكل منتج ولكل زبون؛ التطور بالفترة نفسها؛ عدد الزبائن النشِطين والمغادرين؛ متوسط التخفيض؛ والطلبات غير الملبّاة. وست قراءات تُقرأ كل أسبوع خير من ثلاثين يُنظر إليها مرة." },
        { q: "كيف نعرف أي المنتجات تربح أكثر؟", a: "بترتيبها بالهامش لا برقم الأعمال. ويلزم لذلك كلفة الشراء على كل سطر بيع. وفي مثال هذه الصفحة، المنتج الأكثر مبيعاً سادس فقط بالهامش، وثلاثة منتجات من ثمانية تصنع قرابة 60 بالمئة منه." },
        { q: "كيف يُقارَن شهر بالسنة الماضية حين يتغير تاريخ رمضان؟", a: "بمقارنة فترات متشابهة، لا تواريخ: الأسبوع الثاني من رمضان بالأسبوع الثاني من رمضان، والدخول بالدخول. السنة القمرية فيها 354 أو 355 يوماً: ورمضان يبدأ أبكر بنحو أحد عشر يوماً كل سنة." },
        { q: "كيف نعرف أي الزبائن غادروا؟", a: "بسرد الزبائن الذين اشتروا السنة الماضية ولا شيء منذ أجل محدَّد، مثلاً ثلاث مرات وتيرتهم المعتادة. وهذا يفترض أن الزبون معرَّف على كل بيع. ومجموع المبيعات يخفي هذه المغادرات ما دام زبائن جدد يصلون." },
        { q: "هل يمكن تحليل المبيعات بجدول إلكتروني؟", a: "نعم، للبداية: تصدير للمبيعات وجدول محوري يعطيان الترتيبات الأولى. والحدود تصل بسرعة: بطاقات مكرَّرة، كلفة غائبة، وعمل يُعاد كل شهر. والأداة تأخذ المشعل حين تصير القراءة أسبوعية." },
        { q: "ماذا يجب أن يكون في البيانات لتحليل المبيعات؟", a: "على كل سطر بيع: المنتج، الزبون، التاريخ، الكمية، السعر المباع، كلفة الشراء، والبائع. وحوله: بطاقة واحدة لكل منتج ولكل زبون، مع عائلتهما. دون الكلفة، لا هامش؛ ودون الزبون، لا وفاء." },
        { q: "ما هي قاعدة 80 و20 في المبيعات؟", a: "هي مبدأ باريتو: نحو 80 بالمئة من النتائج تأتي من 20 بالمئة من الأسباب، ويُقال كثيراً إن 80 بالمئة من المبيعات تأتي من 20 بالمئة من الزبائن. وهي ترتيب مقدار، لا قانون: احسبوا النسبة الحقيقية على أرقامكم." },
        { q: "هل يلزم برنامج لذكاء الأعمال؟", a: "ليس أولاً. الأداة لا تُنشئ البيانات الناقصة: ابدؤوا بالكلفة والزبون على الأسطر، ثم ست قراءات بسيطة. وأداة الجداول تصير نافعة حين تستقر هذه القراءات ويراجعها عدة أشخاص." },
        { q: "كم يلزم من وقت لوضع تحليل للمبيعات؟", a: "ستة أسابيع في مثال هذه الصفحة: أسبوع لجرد البيانات، أسبوعان للبطاقات والتكاليف، ثم جدول المبيعات، القراءات الست، ورزنامة النشاط. والهامش على الماضي يتوقف على التكاليف التي يمكن استرجاعها." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الترتيب برقم الأعمال ينظر إلى العمل، لا إلى الربح." },
      { after: 4, text: "لا يُقارَن تاريخان: تُقارَن فترتان متشابهتان." },
    ],
    cta: { eyebrow: "قولوا لنا أي برنامج يسجّل مبيعاتكم وماذا يُخرج اليوم: نبدأ بالنظر في ما يحتويه سطر البيع", title: "رقم أعمال دون هامش، زبائن يغادرون دون أن يُرى ذلك، أشهر لا تُقارَن بسبب رمضان، أو مؤسس في فرنسا يريد قراءة ما تبيعه مؤسسته في الجزائر: نكمل البيانات، ثم نبني ست قراءات", body: "جرد البيانات، بطاقات دون مكرَّرات، كلفة وزبون على كل سطر، جدول مبيعات يُغذّى كل ليلة، الهامش لكل منتج ولكل زبون، مقارنة برزنامة متساوية، زبائن مغادرون، وتخفيضات. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.tableau, kind: '2027', name: 'لوحة القيادة في الوقت الحقيقي: تعريف واحد لكل رقم' },
      { href: L.promo, kind: '2027', name: 'العرض الترويجي نجح وخسرنا المال: حفظ الهامش' },
      { href: L.crm, kind: '2027', name: 'برنامج تسيير علاقة الزبائن: المحفظة، التذكيرات، والتوقع' },
      { href: L.erp, kind: '2027', name: 'النظام المتكامل: قاعدة واحدة، لا أداة إضافية' },
    ] },
  },
};

const KEYWORDS = "comment analyser les ventes d'une entreprise 2027, analyse des ventes, comment analyser ses ventes, tableau de bord commercial algérie, marge par produit, règle des 80/20 ventes, comparer les ventes ramadan, business intelligence algérie, how to analyse sales, sales analysis algeria 2027, كيف تُحلَّل مبيعات المؤسسة 2027, تحليل المبيعات في الجزائر, الهامش لكل منتج";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
