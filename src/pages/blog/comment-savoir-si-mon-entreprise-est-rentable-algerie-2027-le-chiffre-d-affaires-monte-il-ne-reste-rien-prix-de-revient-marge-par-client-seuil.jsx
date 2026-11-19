import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil.mjs';

const SLUG = 'comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil';
const FIGURES = ['cascade', 'couches', 'temps', 'raisons', 'seuil', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  ventes: '/blog/comment-analyser-les-ventes-d-une-entreprise-algerie-2027-quels-produits-font-la-marge-quels-clients-partent-comparer-le-bon-mois-ramadan/',
  fabrication: '/blog/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier/',
  groupe: '/blog/trois-societes-un-gerant-trois-fichiers-application-multi-societes-algerie-2027-referentiels-partages-transferts-inter-societes-vue-groupe/',
  tournees: '/blog/le-camion-repasse-deux-fois-dans-le-meme-quartier-tournees-de-livraison-application-algerie-2027-zones-charge-ordre-des-arrets-replanification/',
  promo: '/blog/la-promo-a-marche-et-on-a-perdu-de-l-argent-moteur-de-promotions-application-algerie-2027-regles-cumul-codes-garde-de-marge-mesure-temoin/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  stock: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  gescom: '/blog/logiciel-gestion-commerciale-algerie-2027-devis-commande-bon-de-livraison-facture-stock-reglements-erp-ou-pas-sans-ressaisie/',
};

const CONTENT = {
  fr: {
    kind: 'Rentabilité · Algérie · 2027', title: "Comment savoir si mon entreprise est rentable en Algérie (2027) : le chiffre d'affaires monte et il ne reste rien, marge brute, prix de revient, marge par client, seuil de rentabilité, et ce qu'on construit pour le voir chaque mois",
    dek: "« Notre chiffre d'affaires a augmenté de vingt pour cent cette année, et pourtant il ne reste rien à la fin du mois. Le logiciel affiche trente pour cent de marge. Je ne sais pas quels clients nous rapportent, lesquels nous coûtent, ni combien il faut vendre chaque mois pour couvrir nos charges. Comment savoir si mon entreprise est rentable ? » Entre la marge brute qu'affiche le logiciel et le résultat qui reste, il y a quatre marches que personne n'additionne : les remises, la livraison, les retours, les charges fixes. Les relier aux ventes, c'est tout le travail.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Rentabilité de l’entreprise', 'Marge brute et résultat', 'Prix de revient', 'Marge par client', 'Seuil de rentabilité', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une entreprise est rentable quand ce qu'elle garde de ses ventes reste positif une fois retirés **le coût de ce qu'elle a vendu**, **les coûts directs de chaque vente** (remises, livraison, retours) et **les charges fixes du mois**. La marge brute seule ne le dit pas. Trois lectures suffisent : **la cascade du mois**, du chiffre d'affaires au résultat ; **la marge par client et par produit**, après coûts directs ; **le seuil de rentabilité**, c'est-à-dire le chiffre d'affaires à atteindre pour couvrir les charges fixes. Presque toujours, ces données existent déjà dans l'entreprise, mais elles ne sont rattachées à rien : c'est ce rattachement qu'un logiciel construit.",
      "Cette page s'adresse au gérant d'une entreprise de négoce, de distribution, de fabrication ou de services dont le chiffre monte sans que le résultat suive, et au fondateur installé en France qui veut savoir, de loin, si son entreprise en Algérie gagne de l'argent. Les définitions viennent de sources publiques : marge brute, coût variable et coût fixe, marge sur coût variable, seuil de rentabilité, frais généraux, rentabilité par client, comptabilité de gestion. Les montants sont ceux d'un exemple construit, en milliers de dinars. Il s'agit d'un résultat de gestion, lu par le gérant pour décider : la page ne traite ni de comptabilité légale, ni de fiscalité, ni de paie.",
    ],
    sections: [
      { heading: "Du chiffre d'affaires au résultat : la cascade d'un mois", body: [
        "La figure descend d'un mois de ventes jusqu'à ce qui reste.",
      ], visual: 'cascade', after: [
        "**Ce que la marge brute dit, et ne dit pas.** La marge brute est la différence entre le chiffre d'affaires et le coût des marchandises vendues, rapportée au chiffre d'affaires. Ce n'est pas forcément un bénéfice : d'autres dépenses, commerciales, administratives et financières, restent à retirer. Dans l'exemple, elle vaut 30 %. **Les marches du milieu.** Remises accordées, livraisons payées, retours repris : 1 200 sur 12 000. Aucune de ces sommes n'est grande ; ensemble, elles prennent un tiers de la marge brute. Il reste 20 %. **La dernière marche.** Les charges fixes du mois, 2 150, ne dépendent pas des ventes. Résultat : 250, soit 2 %.",
        "**Pourquoi personne ne le voit.** Chaque marche vit dans un endroit différent : la remise sur la facture, la livraison chez le transporteur ou dans le carburant, le retour sur un avoir, le loyer dans un classeur. Le logiciel de vente n'additionne que ce qu'il connaît. **Gestion, pas comptabilité.** La comptabilité de gestion sert aux gérants pour décider ; elle regarde surtout devant, là où la comptabilité financière regarde le passé. C'est d'elle qu'on parle ici. **Ce que cette page ne traite pas.** Classer les produits et comparer les mois est le sujet d'[analyser ses ventes](" + L.ventes + ") ; le coût d'un produit que l'on fabrique, celui de [ce que coûte un produit fini](" + L.fabrication + ").",
      ] },
      { heading: "Ce qu'il faut enregistrer pour le savoir", body: [
        "La figure empile cinq couches ; la deuxième est celle qui manque presque toujours.",
      ], visual: 'couches', after: [
        "**Le coût sur la ligne.** Tout commence là : le coût d'achat, porté sur chaque ligne de vente au moment où elle est faite. Sans lui, pas même de marge brute fiable. **Le prix de revient.** C'est ce que l'article vous a coûté une fois chez vous : l'achat, plus ce qu'il a fallu pour l'amener et le rendre vendable, transport d'approche, emballage, casse. Les coûts variables changent avec les quantités ; les coûts fixes n'en dépendent pas. Un prix de revient honnête ne contient que des coûts qui suivent l'article. **Les coûts directs d'une vente.** La remise, la livraison, le retour : chacun se rattache à une ligne, à une commande ou à un client.",
        "**Les charges fixes.** Un commerçant paie son loyer et ses factures quelles que soient ses ventes. La liste du mois est courte : loyers, équipe, véhicules, abonnements. Elle se saisit une fois, se date, et se répartit par activité quand il y en a plusieurs, comme dans [un groupe de plusieurs sociétés](" + L.groupe + "). **Les règles de répartition.** Les frais généraux ne se rattachent pas directement à un produit. Les répartir demande une règle : au chiffre d'affaires, au nombre de commandes, aux kilomètres. La méthode par activités affecte le coût de chaque activité aux produits selon ce qu'ils en consomment réellement. Peu importe la règle, pourvu qu'elle soit écrite, visible, et la même chaque mois.",
      ] },
      { heading: "Savoir si l'on est rentable, en six temps", body: [
        "La figure donne l'ordre des travaux ; le deuxième temps est le plus long.",
      ], visual: 'temps', after: [
        "**Rattacher, plutôt que saisir.** Presque rien n'est à saisir en plus : les remises sont sur les factures, les livraisons dans les tournées, les retours sur les avoirs. Ce qui manque, c'est le lien. Une livraison rattachée à sa commande donne un coût de livraison par commande, comme dans [les tournées de livraison](" + L.tournees + ") ; une remise rattachée à son vendeur donne une remise moyenne par vendeur, la matière d'[une garde de marge](" + L.promo + "). **La marge par axe.** Une fois les liens faits, la même cascade se lit par client, par produit, par activité, par vendeur.",
        "**La rentabilité par client.** C'est le bénéfice que l'entreprise tire d'un client sur une période. Souvent, on découvre que certaines relations ne sont pas rentables, et qu'un très petit nombre de clients fait une grande part du bénéfice. Dans l'exemple, deux clients ont la même marge brute de 30 %. L'un commande par palettes et paie comptant ; l'autre commande par cartons, se fait livrer trois fois par semaine et retourne un dixième de ce qu'il prend. Après coûts directs, le premier laisse 26 %, le second 9 %. **Lire à date fixe.** Le même jour chaque mois, les mêmes trois écrans : une lecture irrégulière ne change aucune décision.",
      ] },
      { heading: "Six raisons pour lesquelles le chiffre monte et le résultat non", body: [
        "La figure donne, pour chaque raison, ce qui se passe et ce qu'il faut mesurer.",
      ], visual: 'raisons', after: [
        "**Le mélange des ventes.** Vendre davantage du produit qui marge le moins fait monter le chiffre et baisser le taux : c'est la première raison à regarder, et la plus simple. **Les remises.** Accordées une à une, elles ne font jamais l'objet d'un total. Additionnées par vendeur et par client, elles deviennent une ligne de la cascade, et souvent la plus facile à corriger. **La livraison.** Dix petites commandes coûtent plus à livrer qu'une grande. Un minimum de commande, ou un jour de livraison par zone, change la marche sans toucher au prix.",
        "**Le client qui coûte.** Un gros client rassure par son chiffre. La marge après coûts directs dit s'il rapporte ; son délai de paiement dit ce qu'il immobilise, sujet du [crédit client](" + L.credit + "). **Résultat n'est pas trésorerie.** Être rentable ne veut pas dire avoir de l'argent disponible : une entreprise peut manquer de liquidités tout en étant bénéficiaire. Le résultat du mois peut dormir dans le stock, comme dans [le réapprovisionnement](" + L.stock + "), ou dans des factures non encaissées. La cascade dit si l'on gagne ; il faut une autre lecture pour dire quand l'argent arrive.",
      ] },
      { heading: "Le seuil de rentabilité : combien faut-il vendre", body: [
        "La figure place six mois de ventes face au seuil.",
      ], visual: 'seuil', after: [
        "**Le calcul.** Le seuil de rentabilité est le point où le total des coûts et le total des recettes sont égaux : le bénéfice y est nul. Il se calcule comme le point où la marge dégagée par les ventes égale les charges fixes. Dans l'exemple : 2 150 de charges fixes, 20 % de marge après coûts directs, donc 10 750 de chiffre d'affaires. **Ce que la figure montre.** Trois mois sur six sont sous le seuil. En six mois, 65 100 de ventes laissent 120. Le meilleur mois, à 12 000, ne dépasse le seuil que de 1 250 : c'est la marge de sécurité, ce dont les ventes peuvent baisser avant d'atteindre le seuil.",
        "**Deux leviers.** Baisser le seuil : une charge fixe en moins, ou partagée. Monter le taux : moins de remises, des livraisons regroupées, un mélange de ventes déplacé vers ce qui marge. Deux points de taux valent plus qu'il n'y paraît : à 22 % au lieu de 20 %, le seuil descend à environ 9 770, et les six mois passent au-dessus. **Le suivre dans le mois.** Le seuil se connaît le premier jour. Chaque semaine, le [tableau de bord](" + L.tableau + ") dit où en sont les ventes par rapport à lui : en avance, à l'heure, en retard. C'est le seul chiffre du mois qui dise s'il faut agir avant la fin.",
      ] },
      { heading: "Six semaines, dans l'exemple", body: [
        "Six semaines pour une première cascade lue avec le gérant, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine à regarder ce que les ventes enregistrent déjà : y a-t-il un coût sur les lignes ? Les remises sont-elles des lignes, ou des prix modifiés à la main ? Les avoirs renvoient-ils à une facture ? **Le plus long.** Porter le coût sur les lignes, puis rattacher livraisons et retours : trois semaines qui se chevauchent. **Les charges et les règles.** La liste des charges fixes et deux ou trois règles de répartition, écrites sur une page. **La première lecture.** Faite avec le gérant, chiffres en main : ce qui surprend est vérifié ligne par ligne avant d'être cru.",
        "**Ce qui reste après.** Trois écrans : la cascade du mois, la marge par client et par produit après coûts directs, le seuil et l'avance sur le seuil. Un rendez-vous mensuel à date fixe. **Ce que ce n'est pas.** Ni un bilan, ni une déclaration : un résultat de gestion, disponible quelques jours après la fin du mois, pour décider tant qu'il est encore temps. **Les durées** sont celles d'un exemple construit : elles dépendent surtout de ce que le logiciel de vente enregistre déjà, et de la possibilité de s'y brancher ou de le compléter, comme pour [une gestion commerciale](" + L.gescom + ").",
      ], list: [
        "**Ce que le gérant reçoit** : la cascade du mois, du chiffre d'affaires au résultat ; la marge par client et par produit après coûts directs ; le seuil de rentabilité et l'avance sur le seuil ; les règles de répartition écrites ; une lecture mensuelle à date fixe.",
        "**Ce que l'entreprise ne fait plus** : fêter un chiffre d'affaires sans savoir ce qu'il laisse, accorder des remises que personne n'additionne, garder un client parce qu'il est gros, découvrir en fin d'année que trois mois sur six étaient en perte.",
        "**Ce qui est mesuré** : taux de marge brute et taux après coûts directs ; remise moyenne par vendeur ; coût de livraison par commande ; taux de retour par client ; charges fixes du mois ; seuil et marge de sécurité.",
        "**Ce que fait Symloop** : le relevé des données, le coût porté sur les lignes, le rattachement des remises, livraisons et retours, la saisie des charges et les règles de répartition, les trois lectures, le branchement sur votre logiciel de gestion ou son complément, puis la première lecture avec vous.",
      ], faq: [
        { q: "Comment savoir si mon entreprise est rentable ?", a: "En descendant du chiffre d'affaires au résultat, mois par mois : coût des marchandises, puis remises, livraison et retours, puis charges fixes. Si ce qui reste est positif, le mois est rentable. La marge brute seule ne le dit pas." },
        { q: "Comment calculer le prix de revient ?", a: "Coût d'achat, plus ce qu'il a fallu pour amener l'article chez vous et le rendre vendable : transport, emballage, pertes. N'y mettez que des coûts qui suivent l'article ; les charges fixes se traitent à part, dans le seuil." },
        { q: "Comment calculer la marge brute ?", a: "Chiffre d'affaires moins coût des marchandises vendues, le tout divisé par le chiffre d'affaires. 12 000 de ventes pour 8 400 de coût donnent 3 600, soit 30 %. Ce n'est pas encore un bénéfice." },
        { q: "Quelle différence entre marge brute et résultat ?", a: "La marge brute ne retire que le coût de ce qui est vendu. Le résultat retire aussi les remises, la livraison, les retours et les charges fixes. Dans l'exemple de cette page : 30 % de marge brute, 2 % de résultat." },
        { q: "Comment calculer le seuil de rentabilité ?", a: "Divisez les charges fixes du mois par le taux de marge après coûts directs. Avec 2 150 de charges fixes et 20 %, il faut 10 750 de chiffre d'affaires pour ne rien perdre. En dessous, le mois coûte." },
        { q: "Comment savoir quels clients sont rentables ?", a: "En calculant, par client, la marge après remises, livraisons et retours, pas la marge brute. Deux clients au même taux de marge brute peuvent laisser 26 % et 9 % une fois ces coûts comptés, comme dans l'exemple de cette page." },
        { q: "Pourquoi le chiffre d'affaires monte-t-il sans que le résultat suive ?", a: "Six raisons courantes : on vend plus de ce qui marge le moins, les remises grossissent, la livraison coûte plus, un gros client coûte cher à servir, les charges fixes ont monté, ou le résultat dort dans le stock et les factures non encaissées." },
        { q: "Mon entreprise est rentable mais je n'ai pas de trésorerie : pourquoi ?", a: "Parce que résultat et trésorerie sont deux choses. Le bénéfice du mois peut se trouver dans le stock ou dans des factures non encaissées. Une entreprise peut manquer d'argent tout en étant bénéficiaire." },
        { q: "Peut-on suivre la rentabilité avec Excel ?", a: "Pour un premier calcul, oui : un export des ventes et la liste des charges suffisent. Chaque mois, c'est une autre affaire : rattacher remises, livraisons et retours à la main prend des jours. C'est ce rattachement qu'un outil automatise." },
        { q: "Est-ce la même chose que la comptabilité ?", a: "Non. C'est un résultat de gestion, fait pour décider chaque mois, avec vos propres règles de répartition. La comptabilité légale répond à d'autres obligations et à un autre calendrier ; les deux se complètent." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Trente pour cent de marge brute en haut, deux pour cent de résultat en bas." },
      { after: 4, text: "Le seuil se connaît le premier jour du mois, pas le dernier." },
    ],
    cta: { eyebrow: "Dites-nous quel logiciel enregistre vos ventes et ce qu'il sait de vos coûts : nous commençons par le relevé", title: "Chiffre d'affaires qui monte sans résultat, marge brute qui ne dit rien, clients dont on ne sait pas s'ils rapportent, ou fondateur en France qui veut savoir si son entreprise en Algérie gagne de l'argent", body: "Symloop relie vos ventes à leurs coûts : coût sur chaque ligne, remises, livraisons, retours, charges fixes. Vous lisez chaque mois la cascade, la marge par client et le seuil. Décrivez-nous votre activité, et la question à laquelle vous n'arrivez pas à répondre." },
    related: { label: 'À lire aussi', items: [
      { href: L.ventes, kind: '2027', name: 'Analyser ses ventes : marge par produit, clients partis' },
      { href: L.fabrication, kind: '2027', name: 'Fabrication : ce que coûte un produit fini' },
      { href: L.credit, kind: '2027', name: 'Crédit client : plafond, relevés, relances' },
      { href: L.tableau, kind: '2027', name: 'Tableau de bord en temps réel : une définition par chiffre' },
    ] },
  },
  en: {
    kind: 'Profitability · Algeria · 2027', title: "How to know whether my company is profitable in Algeria (2027): revenue rises and nothing is left, gross margin, cost price, margin per customer, break-even point, and what we build to see it every month",
    dek: "“Our revenue has grown by twenty percent this year, and yet nothing is left at the end of the month. The software shows thirty percent margin. I do not know which customers earn us money, which ones cost us, or how much we must sell each month to cover our costs. How do I know whether my company is profitable?” Between the gross margin the software displays and the result that remains, there are four steps nobody adds up: discounts, delivery, returns, fixed costs. Linking them to sales is the whole job.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Company profitability', 'Gross margin and result', 'Cost price', 'Margin per customer', 'Break-even point', 'Algeria 2027'],
    intro: [
      "**Short answer.** A company is profitable when what it keeps from its sales stays positive once you take away **the cost of what it sold**, **the direct costs of each sale** (discounts, delivery, returns) and **the month's fixed costs**. Gross margin alone does not say it. Three readings are enough: **the month's cascade**, from revenue to result; **margin per customer and per product**, after direct costs; **the break-even point**, that is, the revenue to reach in order to cover fixed costs. Almost always, the data already exists in the company, but it is attached to nothing: that attachment is what software builds.",
      "This page is for the manager of a trading, distribution, manufacturing or service company whose revenue rises without the result following, and for the founder based in France who wants to know, from afar, whether their company in Algeria is making money. The definitions come from public sources: gross margin, variable and fixed cost, contribution margin, break-even point, overhead, customer profitability, management accounting. The amounts are those of a constructed example, in thousands of dinars. This is a management result, read by the manager in order to decide: the page covers neither statutory accounting, nor taxation, nor payroll.",
    ],
    sections: [
      { heading: "From revenue to result: one month's cascade", body: [
        "The figure goes down from a month of sales to what remains.",
      ], visual: 'cascade', after: [
        "**What gross margin says, and does not say.** Gross margin is the difference between revenue and cost of goods sold, divided by revenue. It is not necessarily profit: other expenses, such as sales, administrative and financial costs, must still be deducted. In the example, it is 30%. **The middle steps.** Discounts granted, deliveries paid for, returns taken back: 1,200 out of 12,000. None of these sums is large; together, they take a third of the gross margin. 20% remains. **The last step.** The month's fixed costs, 2,150, do not depend on sales. Result: 250, that is 2%.",
        "**Why nobody sees it.** Each step lives in a different place: the discount on the invoice, delivery with the carrier or in the fuel, the return on a credit note, the rent in a binder. Sales software only adds up what it knows. **Management, not accounting.** Management accounting serves managers in decision-making; it is primarily forward-looking, where financial accounting is historical. That is what we are talking about here. **What this page does not cover.** Ranking products and comparing months is the subject of [analysing your sales](" + L.ventes + "); the cost of a product you manufacture, that of [what a finished product costs](" + L.fabrication + ").",
      ] },
      { heading: "What must be recorded to know it", body: [
        "The figure stacks five layers; the second is the one that is almost always missing.",
      ], visual: 'couches', after: [
        "**The cost on the line.** Everything starts there: the purchase cost, carried on every sales line at the moment it is made. Without it, there is not even a reliable gross margin. **The cost price.** It is what the item cost you once on your premises: the purchase, plus what it took to bring it in and make it saleable, inbound transport, packaging, breakage. Variable costs change with quantities; fixed costs do not depend on them. An honest cost price contains only costs that follow the item. **The direct costs of a sale.** The discount, the delivery, the return: each attaches to a line, an order or a customer.",
        "**Fixed costs.** A retailer must pay rent and utility bills irrespective of sales. The month's list is short: rents, team, vehicles, subscriptions. It is entered once, dated, and allocated per activity when there are several, as in [a group of several companies](" + L.groupe + "). **The allocation rules.** Overheads cannot be immediately associated with a product. Allocating them takes a rule: by revenue, by number of orders, by kilometres. Activity-based costing assigns the cost of each activity to products according to what they actually consume of it. The rule matters little, provided it is written, visible, and the same every month.",
      ] },
      { heading: "Knowing whether you are profitable, in six steps", body: [
        "The figure gives the order of the work; the second step is the longest.",
      ], visual: 'temps', after: [
        "**Attach, rather than enter.** Almost nothing more needs entering: discounts are on invoices, deliveries in the rounds, returns on credit notes. What is missing is the link. A delivery attached to its order gives a delivery cost per order, as in [delivery rounds](" + L.tournees + "); a discount attached to its seller gives an average discount per seller, the substance of [a margin guard](" + L.promo + "). **Margin per axis.** Once the links are made, the same cascade is read per customer, per product, per activity, per seller.",
        "**Customer profitability.** It is the profit the firm makes from serving a customer over a period. Often, the firm finds that some customer relationships are unprofitable, and that a very small percentage of its customers accounts for a large portion of profit. In the example, two customers have the same 30% gross margin. One orders by the pallet and pays cash; the other orders by the carton, is delivered three times a week and returns a tenth of what they take. After direct costs, the first leaves 26%, the second 9%. **Reading on a fixed date.** The same day every month, the same three screens: an irregular reading changes no decision.",
      ] },
      { heading: "Six reasons why revenue rises and the result does not", body: [
        "The figure gives, for each reason, what is happening and what to measure.",
      ], visual: 'raisons', after: [
        "**The sales mix.** Selling more of the product that earns least raises revenue and lowers the rate: it is the first reason to look at, and the simplest. **Discounts.** Granted one by one, they are never totalled. Added up per seller and per customer, they become a line of the cascade, and often the easiest to correct. **Delivery.** Ten small orders cost more to deliver than one large one. A minimum order, or one delivery day per zone, changes the step without touching the price.",
        "**The customer who costs.** A big customer reassures by their revenue. Margin after direct costs says whether they earn; their payment terms say what they tie up, the subject of [customer credit](" + L.credit + "). **Result is not cash.** Being profitable does not necessarily mean being liquid: a company can fail because of a shortage of cash even while profitable. The month's result can sleep in the stock, as in [replenishment](" + L.stock + "), or in invoices not yet collected. The cascade says whether you earn; another reading is needed to say when the money arrives.",
      ] },
      { heading: "The break-even point: how much must be sold", body: [
        "The figure sets six months of sales against the break-even line.",
      ], visual: 'seuil', after: [
        "**The calculation.** The break-even point is the point at which total cost and total revenue are equal: profit there is zero. It can be computed as the point where the contribution from sales equals fixed costs. In the example: 2,150 of fixed costs, a 20% margin after direct costs, hence 10,750 of revenue. **What the figure shows.** Three months out of six are under the line. Over six months, 65,100 of sales leave 120. The best month, at 12,000, is only 1,250 above the line: that is the margin of safety, how much sales can fall before reaching the break-even point.",
        "**Two levers.** Lower the line: one fixed cost less, or shared. Raise the rate: fewer discounts, grouped deliveries, a sales mix shifted towards what earns. Two points of rate are worth more than they look: at 22% instead of 20%, the line drops to about 9,770, and all six months move above it. **Following it during the month.** The break-even point is known on the first day. Each week, the [dashboard](" + L.tableau + ") says where sales stand against it: ahead, on time, behind. It is the only figure of the month that says whether to act before the end.",
      ] },
      { heading: "Six weeks, in the example", body: [
        "Six weeks for a first cascade read with the manager, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week looking at what sales already record: is there a cost on the lines? Are discounts lines, or prices changed by hand? Do credit notes point back to an invoice? **The longest part.** Carrying the cost on the lines, then attaching deliveries and returns: three overlapping weeks. **Costs and rules.** The list of fixed costs and two or three allocation rules, written on one page. **The first reading.** Done with the manager, figures in hand: whatever surprises is checked line by line before being believed.",
        "**What remains afterwards.** Three screens: the month's cascade, margin per customer and per product after direct costs, the break-even point and the lead over it. A monthly meeting on a fixed date. **What it is not.** Neither a balance sheet nor a return: a management result, available a few days after month end, to decide while there is still time. **The durations** are those of a constructed example: they depend above all on what the sales software already records, and on whether it can be connected to or completed, as for [sales management](" + L.gescom + ").",
      ], list: [
        "**What the manager receives**: the month's cascade, from revenue to result; margin per customer and per product after direct costs; the break-even point and the lead over it; the allocation rules written down; a monthly reading on a fixed date.",
        "**What the company no longer does**: celebrate revenue without knowing what it leaves, grant discounts nobody adds up, keep a customer because they are big, find out at year end that three months out of six were at a loss.",
        "**What is measured**: gross margin rate and rate after direct costs; average discount per seller; delivery cost per order; return rate per customer; the month's fixed costs; break-even point and margin of safety.",
        "**What Symloop does**: the survey of the data, the cost carried on the lines, attaching discounts, deliveries and returns, entering fixed costs and the allocation rules, the three readings, the connection to your management software or its complement, then the first reading with you.",
      ], faq: [
        { q: "How do I know whether my company is profitable?", a: "By going down from revenue to result, month by month: cost of goods, then discounts, delivery and returns, then fixed costs. If what remains is positive, the month is profitable. Gross margin alone does not say it." },
        { q: "How do you calculate the cost price?", a: "Purchase cost, plus what it took to bring the item to you and make it saleable: transport, packaging, losses. Put in only costs that follow the item; fixed costs are handled separately, in the break-even point." },
        { q: "How do you calculate gross margin?", a: "Revenue minus cost of goods sold, all divided by revenue. 12,000 of sales for 8,400 of cost give 3,600, that is 30%. It is not yet a profit." },
        { q: "What is the difference between gross margin and result?", a: "Gross margin only takes away the cost of what is sold. The result also takes away discounts, delivery, returns and fixed costs. In this page's example: 30% gross margin, 2% result." },
        { q: "How do you calculate the break-even point?", a: "Divide the month's fixed costs by the rate of margin after direct costs. With 2,150 of fixed costs and 20%, 10,750 of revenue is needed to lose nothing. Below that, the month costs money." },
        { q: "How do I know which customers are profitable?", a: "By calculating, per customer, the margin after discounts, deliveries and returns, not the gross margin. Two customers at the same gross margin rate can leave 26% and 9% once those costs are counted, as in this page's example." },
        { q: "Why does revenue rise without the result following?", a: "Six common reasons: you sell more of what earns least, discounts are growing, delivery costs more, a big customer is costly to serve, fixed costs have gone up, or the result is sleeping in stock and uncollected invoices." },
        { q: "My company is profitable but I have no cash: why?", a: "Because result and cash are two things. The month's profit can sit in stock or in invoices not yet collected. A company can run short of money even while profitable." },
        { q: "Can profitability be followed with Excel?", a: "For a first calculation, yes: an export of sales and the list of costs are enough. Every month is another matter: attaching discounts, deliveries and returns by hand takes days. That attachment is what a tool automates." },
        { q: "Is it the same thing as accounting?", a: "No. It is a management result, made to decide every month, with your own allocation rules. Statutory accounting answers other obligations and another calendar; the two complement each other." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Thirty percent gross margin at the top, two percent result at the bottom." },
      { after: 4, text: "The break-even point is known on the first day of the month, not the last." },
    ],
    cta: { eyebrow: "Tell us which software records your sales and what it knows about your costs: we start with the survey", title: "Revenue rising with no result, a gross margin that says nothing, customers you cannot tell are earning, or a founder in France who wants to know whether their company in Algeria is making money", body: "Symloop links your sales to their costs: cost on every line, discounts, deliveries, returns, fixed costs. Every month you read the cascade, the margin per customer and the break-even point. Describe your business to us, and the question you cannot answer." },
    related: { label: 'Also read', items: [
      { href: L.ventes, kind: '2027', name: 'Analysing your sales: margin per product, lost customers' },
      { href: L.fabrication, kind: '2027', name: 'Manufacturing: what a finished product costs' },
      { href: L.credit, kind: '2027', name: 'Customer credit: ceiling, statements, reminders' },
      { href: L.tableau, kind: '2027', name: 'Real-time dashboard: one definition per figure' },
    ] },
  },
  ar: {
    kind: 'المردودية · الجزائر · 2027', title: "كيف أعرف هل مؤسستي مربحة في الجزائر (2027): رقم الأعمال يرتفع ولا يبقى شيء، الهامش الإجمالي، سعر التكلفة، الهامش لكل زبون، عتبة المردودية، وما نبنيه لرؤية ذلك كل شهر",
    dek: "«رقم أعمالنا ارتفع بعشرين بالمئة هذه السنة، ومع ذلك لا يبقى شيء في آخر الشهر. البرنامج يعرض ثلاثين بالمئة من الهامش. لا أعرف أي الزبائن يربحنا، أيهم يكلّفنا، ولا كم يجب أن نبيع كل شهر لتغطية أعبائنا. كيف أعرف هل مؤسستي مربحة؟» بين الهامش الإجمالي الذي يعرضه البرنامج والنتيجة التي تبقى، أربع درجات لا يجمعها أحد: التخفيضات، التوصيل، المرتجعات، والأعباء الثابتة. وربطها بالمبيعات هو كل العمل.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['مردودية المؤسسة', 'الهامش الإجمالي والنتيجة', 'سعر التكلفة', 'الهامش لكل زبون', 'عتبة المردودية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** المؤسسة مربحة حين يبقى ما تحتفظ به من مبيعاتها موجباً بعد نزع **كلفة ما باعته**، **التكاليف المباشرة لكل بيع** (التخفيضات، التوصيل، المرتجعات)، و**الأعباء الثابتة للشهر**. والهامش الإجمالي وحده لا يقول ذلك. وثلاث قراءات تكفي: **شلال الشهر**، من رقم الأعمال إلى النتيجة؛ **الهامش لكل زبون ولكل منتج**، بعد التكاليف المباشرة؛ و**عتبة المردودية**، أي رقم الأعمال الواجب بلوغه لتغطية الأعباء الثابتة. وفي أغلب الأحيان، هذه البيانات موجودة من قبل في المؤسسة، لكنها غير مربوطة بشيء: وهذا الربط هو ما يبنيه البرنامج.",
      "هذه الصفحة موجّهة إلى مسيّر مؤسسة تجارة أو توزيع أو تصنيع أو خدمات يرتفع رقمها دون أن تتبعه النتيجة، وإلى المؤسس المقيم في فرنسا الذي يريد أن يعرف، من بعيد، هل مؤسسته في الجزائر تربح المال. التعريفات من مصادر عمومية: الهامش الإجمالي، التكلفة المتغيرة والتكلفة الثابتة، الهامش على التكلفة المتغيرة، عتبة المردودية، المصاريف العامة، مردودية الزبون، ومحاسبة التسيير. والمبالغ مبالغ مثال مركَّب، بآلاف الدنانير. والمقصود نتيجة تسيير، يقرؤها المسيّر ليقرر: والصفحة لا تعالج المحاسبة القانونية، ولا الجباية، ولا الأجور.",
    ],
    sections: [
      { heading: "من رقم الأعمال إلى النتيجة: شلال شهر واحد", body: [
        "الشكل ينزل من شهر من المبيعات إلى ما يبقى.",
      ], visual: 'cascade', after: [
        "**ما يقوله الهامش الإجمالي، وما لا يقوله.** الهامش الإجمالي هو الفرق بين رقم الأعمال وكلفة البضاعة المبيعة، مقسوماً على رقم الأعمال. وليس بالضرورة ربحاً: مصاريف أخرى، تجارية وإدارية ومالية، يجب أن تُنزع بعد. في المثال، يساوي 30 بالمئة. **الدرجات الوسطى.** تخفيضات مُنحت، توصيلات دُفعت، ومرتجعات استُرجعت: 1200 من 12 000. لا مبلغ منها كبير؛ ومجتمعةً، تأخذ ثلث الهامش الإجمالي. يبقى 20 بالمئة. **الدرجة الأخيرة.** الأعباء الثابتة للشهر، 2150، لا تتوقف على المبيعات. النتيجة: 250، أي 2 بالمئة.",
        "**لماذا لا يراه أحد.** كل درجة تعيش في مكان مختلف: التخفيض على الفاتورة، التوصيل عند الناقل أو في الوقود، المرتجع على إشعار دائن، والإيجار في ملف. وبرنامج البيع لا يجمع إلا ما يعرفه. **تسيير، لا محاسبة.** محاسبة التسيير يستعملها المسيّرون ليقرروا؛ وهي تنظر خصوصاً إلى الأمام، حيث المحاسبة المالية تنظر إلى الماضي. وعنها نتحدث هنا. **ما لا تعالجه هذه الصفحة.** ترتيب المنتجات ومقارنة الأشهر موضوع [تحليل المبيعات](" + L.ventes + ")؛ وكلفة منتج يُصنَّع، موضوع [ما يكلّفه المنتج النهائي](" + L.fabrication + ").",
      ] },
      { heading: "ما يجب تسجيله لمعرفة ذلك", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية هي التي تنقص في أغلب الأحيان.",
      ], visual: 'couches', after: [
        "**الكلفة على السطر.** كل شيء يبدأ من هنا: كلفة الشراء، محمولة على كل سطر بيع لحظة إنجازه. ودونها، لا هامش إجمالي موثوقاً حتى. **سعر التكلفة.** هو ما كلّفتكم السلعة وهي عندكم: الشراء، زائد ما لزم لجلبها وجعلها قابلة للبيع، من نقل وتغليف وكسر. التكاليف المتغيرة تتغير مع الكميات؛ والثابتة لا تتوقف عليها. وسعر التكلفة الصادق لا يحتوي إلا تكاليف تتبع السلعة. **التكاليف المباشرة للبيع.** التخفيض، التوصيل، المرتجع: كل واحد يُربط بسطر أو طلبية أو زبون.",
        "**الأعباء الثابتة.** التاجر يدفع إيجاره وفواتيره مهما كانت مبيعاته. وقائمة الشهر قصيرة: الإيجارات، الفريق، المركبات، والاشتراكات. تُدخَل مرة، تُؤرَّخ، وتُوزَّع حسب النشاط حين تتعدد الأنشطة، كما في [مجموعة من عدة شركات](" + L.groupe + "). **قواعد التوزيع.** المصاريف العامة لا تُربط مباشرة بمنتج. وتوزيعها يتطلب قاعدة: حسب رقم الأعمال، عدد الطلبيات، أو الكيلومترات. وطريقة التكاليف حسب الأنشطة تُسند كلفة كل نشاط إلى المنتجات حسب ما تستهلكه منه فعلاً. ولا تهم القاعدة كثيراً، ما دامت مكتوبة، ظاهرة، وهي نفسها كل شهر.",
      ] },
      { heading: "معرفة هل نحن مربحون، في ست مراحل", body: [
        "الشكل يعطي ترتيب الأشغال؛ والمرحلة الثانية هي الأطول.",
      ], visual: 'temps', after: [
        "**الربط، لا الإدخال.** لا شيء تقريباً يُدخَل زيادة: التخفيضات على الفواتير، التوصيلات في الجولات، والمرتجعات على إشعارات الدائن. ما ينقص هو الرابط. توصيل مربوط بطلبيته يعطي كلفة توصيل لكل طلبية، كما في [جولات التوصيل](" + L.tournees + ")؛ وتخفيض مربوط ببائعه يعطي متوسط تخفيض لكل بائع، وهو مادة [حفظ الهامش](" + L.promo + "). **الهامش حسب المحور.** حين تُنجز الروابط، يُقرأ الشلال نفسه لكل زبون، لكل منتج، لكل نشاط، ولكل بائع.",
        "**مردودية الزبون.** هي الربح الذي تجنيه المؤسسة من زبون خلال فترة. وغالباً، يُكتشف أن بعض العلاقات غير مربحة، وأن نسبة صغيرة جداً من الزبائن تصنع جزءاً كبيراً من الربح. في المثال، زبونان لهما الهامش الإجمالي نفسه، 30 بالمئة. الأول يطلب بالمنصّات ويدفع نقداً؛ والثاني يطلب بالكراتين، يُوصَّل له ثلاث مرات في الأسبوع، ويُرجع عُشر ما يأخذه. بعد التكاليف المباشرة، يترك الأول 26 بالمئة، والثاني 9 بالمئة. **القراءة بتاريخ ثابت.** اليوم نفسه كل شهر، والشاشات الثلاث نفسها: القراءة غير المنتظمة لا تغيّر أي قرار.",
      ] },
      { heading: "ستة أسباب تجعل الرقم يرتفع والنتيجة لا", body: [
        "الشكل يعطي، لكل سبب، ما يحدث وما يجب قياسه.",
      ], visual: 'raisons', after: [
        "**خليط المبيعات.** بيع أكثر من المنتج الأضعف هامشاً يرفع الرقم ويُنزل النسبة: هو أول سبب يُنظر فيه، والأبسط. **التخفيضات.** تُمنح واحدة واحدة، ولا تُجمع أبداً. وإذا جُمعت لكل بائع ولكل زبون، صارت سطراً في الشلال، وغالباً الأسهل تصحيحاً. **التوصيل.** عشر طلبيات صغيرة تكلّف في التوصيل أكثر من واحدة كبيرة. وحدّ أدنى للطلبية، أو يوم توصيل لكل منطقة، يغيّر الدرجة دون لمس السعر.",
        "**الزبون المكلف.** الزبون الكبير يُطمئن برقمه. والهامش بعد التكاليف المباشرة يقول هل يربح؛ وأجل دفعه يقول ما يجمّده، وهو موضوع [دَين الزبون](" + L.credit + "). **النتيجة ليست الخزينة.** أن تكون المؤسسة مربحة لا يعني أن عندها مالاً متوفراً: قد ينقصها النقد وهي رابحة. ونتيجة الشهر قد تنام في المخزون، كما في [إعادة التموين](" + L.stock + ")، أو في فواتير لم تُحصَّل. الشلال يقول هل نربح؛ وتلزم قراءة أخرى لنعرف متى يصل المال.",
      ] },
      { heading: "عتبة المردودية: كم يجب أن نبيع", body: [
        "الشكل يضع ستة أشهر من المبيعات أمام العتبة.",
      ], visual: 'seuil', after: [
        "**الحساب.** عتبة المردودية هي النقطة التي يتساوى فيها مجموع التكاليف ومجموع الإيرادات: والربح عندها صفر. وتُحسب كالنقطة التي يساوي فيها الهامش الناتج عن المبيعات الأعباء الثابتة. في المثال: 2150 من الأعباء الثابتة، 20 بالمئة من الهامش بعد التكاليف المباشرة، أي 10 750 من رقم الأعمال. **ما يُظهره الشكل.** ثلاثة أشهر من ستة تحت العتبة. وفي ستة أشهر، 65 100 من المبيعات تترك 120. وأحسن شهر، بـ 12 000، لا يتجاوز العتبة إلا بـ 1250: هذا هامش الأمان، أي ما يمكن أن تنزله المبيعات قبل بلوغ العتبة.",
        "**رافعتان.** إنزال العتبة: عبء ثابت أقل، أو مقتسَم. ورفع النسبة: تخفيضات أقل، توصيلات مجمَّعة، وخليط مبيعات يتحول نحو ما هامشه أحسن. ونقطتان في النسبة تساويان أكثر مما يبدو: بـ 22 بالمئة بدل 20، تنزل العتبة إلى نحو 9770، وتصير الأشهر الستة كلها فوقها. **متابعتها خلال الشهر.** العتبة تُعرف في اليوم الأول. وكل أسبوع، تقول [لوحة القيادة](" + L.tableau + ") أين المبيعات منها: متقدمة، في الوقت، أو متأخرة. وهو الرقم الوحيد في الشهر الذي يقول هل يجب التحرك قبل نهايته.",
      ] },
      { heading: "ستة أسابيع، في المثال", body: [
        "ستة أسابيع لأول شلال يُقرأ مع المسيّر، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع للنظر في ما تسجّله المبيعات من قبل: هل توجد كلفة على الأسطر؟ هل التخفيضات أسطر، أم أسعار عُدّلت باليد؟ وهل إشعارات الدائن تحيل إلى فاتورة؟ **الأطول.** حمل الكلفة على الأسطر، ثم ربط التوصيلات والمرتجعات: ثلاثة أسابيع متداخلة. **الأعباء والقواعد.** قائمة الأعباء الثابتة وقاعدتان أو ثلاث للتوزيع، مكتوبة في صفحة. **القراءة الأولى.** تُجرى مع المسيّر، والأرقام في اليد: ما يفاجئ يُراجَع سطراً بسطر قبل أن يُصدَّق.",
        "**ما يبقى بعد ذلك.** ثلاث شاشات: شلال الشهر، الهامش لكل زبون ولكل منتج بعد التكاليف المباشرة، والعتبة والتقدم عليها. وموعد شهري بتاريخ ثابت. **ما ليس هو.** لا ميزانية ولا تصريح: نتيجة تسيير، متوفرة أياماً قليلة بعد نهاية الشهر، ليُقرَّر ما دام في الوقت متسع. **المدد** هي مدد مثال مركَّب: تتوقف خصوصاً على ما يسجّله برنامج البيع من قبل، وعلى إمكانية الربط به أو تكميله، كما في [التسيير التجاري](" + L.gescom + ").",
      ], list: [
        "**ما يتلقاه المسيّر**: شلال الشهر، من رقم الأعمال إلى النتيجة؛ الهامش لكل زبون ولكل منتج بعد التكاليف المباشرة؛ عتبة المردودية والتقدم عليها؛ قواعد التوزيع مكتوبة؛ وقراءة شهرية بتاريخ ثابت.",
        "**ما لا تفعله المؤسسة بعد الآن**: الاحتفال برقم أعمال دون معرفة ما يتركه، منح تخفيضات لا يجمعها أحد، الاحتفاظ بزبون لأنه كبير، واكتشاف في آخر السنة أن ثلاثة أشهر من ستة كانت خاسرة.",
        "**ما يُقاس**: نسبة الهامش الإجمالي والنسبة بعد التكاليف المباشرة؛ متوسط التخفيض لكل بائع؛ كلفة التوصيل لكل طلبية؛ نسبة المرتجعات لكل زبون؛ الأعباء الثابتة للشهر؛ والعتبة وهامش الأمان.",
        "**ما تفعله Symloop**: معاينة البيانات، حمل الكلفة على الأسطر، ربط التخفيضات والتوصيلات والمرتجعات، إدخال الأعباء وقواعد التوزيع، القراءات الثلاث، الربط ببرنامج تسييركم أو تكميله، ثم القراءة الأولى معكم.",
      ], faq: [
        { q: "كيف أعرف هل مؤسستي مربحة؟", a: "بالنزول من رقم الأعمال إلى النتيجة، شهراً بشهر: كلفة البضاعة، ثم التخفيضات والتوصيل والمرتجعات، ثم الأعباء الثابتة. إذا كان ما يبقى موجباً، فالشهر مربح. والهامش الإجمالي وحده لا يقول ذلك." },
        { q: "كيف يُحسب سعر التكلفة؟", a: "كلفة الشراء، زائد ما لزم لجلب السلعة إليكم وجعلها قابلة للبيع: النقل، التغليف، والضياع. لا تضعوا فيه إلا تكاليف تتبع السلعة؛ والأعباء الثابتة تُعالج على حدة، في العتبة." },
        { q: "كيف يُحسب الهامش الإجمالي؟", a: "رقم الأعمال ناقص كلفة البضاعة المبيعة، والكل مقسوم على رقم الأعمال. مبيعات بـ 12 000 مقابل كلفة بـ 8400 تعطي 3600، أي 30 بالمئة. وهذا ليس ربحاً بعد." },
        { q: "ما الفرق بين الهامش الإجمالي والنتيجة؟", a: "الهامش الإجمالي لا ينزع إلا كلفة ما بيع. والنتيجة تنزع كذلك التخفيضات والتوصيل والمرتجعات والأعباء الثابتة. في مثال هذه الصفحة: 30 بالمئة من الهامش الإجمالي، و2 بالمئة من النتيجة." },
        { q: "كيف تُحسب عتبة المردودية؟", a: "اقسموا الأعباء الثابتة للشهر على نسبة الهامش بعد التكاليف المباشرة. بـ 2150 من الأعباء الثابتة و20 بالمئة، يلزم 10 750 من رقم الأعمال حتى لا نخسر شيئاً. وتحت ذلك، الشهر يكلّف." },
        { q: "كيف أعرف أي الزبائن مربحون؟", a: "بحساب، لكل زبون، الهامش بعد التخفيضات والتوصيلات والمرتجعات، لا الهامش الإجمالي. زبونان بالنسبة نفسها من الهامش الإجمالي قد يتركان 26 و9 بالمئة بعد حساب هذه التكاليف، كما في مثال هذه الصفحة." },
        { q: "لماذا يرتفع رقم الأعمال دون أن تتبعه النتيجة؟", a: "ستة أسباب شائعة: نبيع أكثر مما هامشه أضعف، التخفيضات تكبر، التوصيل يكلّف أكثر، زبون كبير خدمته مكلفة، الأعباء الثابتة ارتفعت، أو النتيجة تنام في المخزون والفواتير غير المحصَّلة." },
        { q: "مؤسستي مربحة لكن لا خزينة عندي: لماذا؟", a: "لأن النتيجة والخزينة شيئان مختلفان. ربح الشهر قد يوجد في المخزون أو في فواتير لم تُحصَّل. وقد ينقص المال مؤسسةً وهي رابحة." },
        { q: "هل يمكن متابعة المردودية بإكسل؟", a: "لحساب أول، نعم: تصدير المبيعات وقائمة الأعباء يكفيان بإكسل (" + I('Excel') + "). وكل شهر أمر آخر: ربط التخفيضات والتوصيلات والمرتجعات باليد يأخذ أياماً. وهذا الربط هو ما تجعله الأداة آلياً." },
        { q: "هل هو الشيء نفسه مع المحاسبة؟", a: "لا. هو نتيجة تسيير، تُصنع ليُقرَّر كل شهر، بقواعد توزيعكم أنتم. والمحاسبة القانونية تستجيب لالتزامات أخرى ورزنامة أخرى؛ والاثنتان تتكاملان." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "ثلاثون بالمئة من الهامش الإجمالي في الأعلى، واثنان بالمئة من النتيجة في الأسفل." },
      { after: 4, text: "العتبة تُعرف في أول يوم من الشهر، لا في آخره." },
    ],
    cta: { eyebrow: "قولوا لنا أي برنامج يسجّل مبيعاتكم وماذا يعرف عن تكاليفكم: نبدأ بالمعاينة", title: "رقم أعمال يرتفع دون نتيجة، هامش إجمالي لا يقول شيئاً، زبائن لا يُعرف هل يربحون، أو مؤسس في فرنسا يريد أن يعرف هل مؤسسته في الجزائر تربح المال", body: "Symloop تربط مبيعاتكم بتكاليفها: الكلفة على كل سطر، التخفيضات، التوصيلات، المرتجعات، والأعباء الثابتة. وتقرؤون كل شهر الشلال، الهامش لكل زبون، والعتبة. صِفوا لنا نشاطكم، والسؤال الذي لا تستطيعون الإجابة عنه." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.ventes, kind: '2027', name: 'تحليل المبيعات: الهامش لكل منتج، والزبائن المغادرون' },
      { href: L.fabrication, kind: '2027', name: 'التصنيع: ما يكلّفه المنتج النهائي' },
      { href: L.credit, kind: '2027', name: 'دَين الزبون: السقف، الكشوف، والتذكيرات' },
      { href: L.tableau, kind: '2027', name: 'لوحة القيادة في الوقت الحقيقي: تعريف واحد لكل رقم' },
    ] },
  },
};

const KEYWORDS = "comment savoir si mon entreprise est rentable 2027, comment voir la rentabilité d'une entreprise, comment suivre la performance d'une entreprise, comment calculer le prix de revient, comment calculer la marge brute, comment calculer la marge commerciale, comment calculer la marge nette, seuil de rentabilité, rentabilité par client, tableau de bord rentabilité algérie, how to know if my company is profitable, how to calculate gross margin, break-even point, customer profitability, cost price, كيف أعرف هل مؤسستي مربحة, حساب سعر التكلفة, حساب الهامش الإجمالي, عتبة المردودية, مردودية الزبون, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
