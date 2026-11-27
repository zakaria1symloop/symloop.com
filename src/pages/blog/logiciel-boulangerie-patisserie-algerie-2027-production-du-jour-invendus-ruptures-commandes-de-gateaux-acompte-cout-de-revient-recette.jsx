import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-boulangerie-patisserie-algerie-2027-production-du-jour-invendus-ruptures-commandes-de-gateaux-acompte-cout-de-revient-recette.mjs';

const SLUG = 'logiciel-boulangerie-patisserie-algerie-2027-production-du-jour-invendus-ruptures-commandes-de-gateaux-acompte-cout-de-revient-recette';
const FIGURES = ['stock', 'couches', 'commande', 'fiche', 'situations', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  sessions: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  superette: '/blog/logiciel-superette-supermarche-algerie-2027-caisse-hors-ligne-code-barres-balance-dlc-marge-cloture/',
  fidelite: '/blog/programme-de-fidelite-algerie-2027-cafe-fast-food-chaine-application-points-caisse-relance/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  planning: '/blog/personne-ne-sait-qui-travaille-demain-planning-des-equipes-application-algerie-2027-besoins-par-creneau-contraintes-echanges-pointage/',
  france: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  restaurant: '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/',
};

const CONTENT = {
  fr: {
    kind: 'Boulangerie-pâtisserie · Algérie · 2027', title: "Logiciel boulangerie pâtisserie en Algérie (2027) : production du jour, invendus, ruptures et gâteaux sur commande, quand on jette le soir ce qui manquait à seize heures",
    dek: "« J'ai une boulangerie-pâtisserie avec un laboratoire et deux boutiques. Chaque soir on jette ou on donne des viennoiseries, et le même jour on a refusé des clients à seize heures parce qu'il n'y avait plus de millefeuilles. Les commandes de gâteaux sont dans un cahier : la semaine dernière, on a oublié un gâteau de fiançailles. Le beurre a augmenté et je ne sais pas ce que me coûte un croissant. Quel logiciel me faut-il ? » Une caisse enregistre ce qui s'est vendu. Ici, il faut aussi noter ce qui n'a pas été vendu et ce qui a manqué, tenir les commandes avec leur acompte et leur date, et savoir ce que coûte chaque recette.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de boulangerie', 'Pâtisserie', 'Plan de production', 'Invendus et ruptures', 'Coût de revient d’une recette', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de boulangerie-pâtisserie se juge sur quatre choses qu'une caisse ne fait pas. **Deux chiffres par produit, chaque soir** : les invendus et l'heure de la rupture ; c'est d'eux que sort la quantité du lendemain. **Les commandes** : date, heure, parts, parfum, inscription, modèle, acompte et reste à payer, rangées dans le planning du laboratoire. **La fiche technique** de chaque recette, qui donne le coût par pièce et le recalcule quand un ingrédient change de prix. **La répartition** entre le laboratoire et les boutiques, avec les retours. Autour : une vente au comptoir rapide, à la pièce, au poids et au plateau.",
      "Ce guide s'adresse au gérant d'une boulangerie-pâtisserie, d'une pâtisserie de commande ou d'un laboratoire qui fournit plusieurs boutiques, et au fondateur installé en France qui suit l'affaire familiale. Les notions citées viennent de sources publiques : la rupture de stock, la nomenclature d'un produit, et le modèle dit du vendeur de journaux, qui traite précisément d'un produit périssable à demande incertaine. Les quantités, les fournées et les prix des figures sont un exemple construit, pas des prix de marché. Ce guide ne traite ni des prix réglementés ni des règles d'hygiène et d'étiquetage : elles se voient avec les services concernés.",
    ],
    sections: [
      { heading: "Une journée, deux produits : trop de l'un, pas assez de l'autre", body: [
        "La figure suit le stock de deux produits, de l'ouverture à la fermeture.",
      ], visual: 'stock', after: [
        "**Les croissants.** Soixante à l'ouverture, quarante à 9 h, vingt à 14 h : 120 produits. Quatre-vingt-seize se vendent ; vingt-quatre restent, un sur cinq, et c'est à peu près pareil tous les soirs. La troisième fournée était de trop, mais personne ne le sait, parce que les invendus ne sont écrits nulle part. **Les millefeuilles.** Quarante produits le matin, tous vendus, et plus rien avant 17 h. Une rupture de stock est l'événement qui épuise le stock ; elle fait perdre des ventes et mécontente les clients, et elle ne laisse aucune trace : pendant trois heures, douze personnes ont demandé un millefeuille.",
        "**Le relevé du soir.** À la fermeture, pour chaque produit, deux saisies : ce qui reste, et l'heure à laquelle il n'y en a plus eu. Une minute. Au bout d'une semaine, le logiciel sait que le mardi il faut cent croissants et non cent vingt, et cinquante-cinq millefeuilles le samedi. **Le plan de fournées.** Il part des ventes du même jour de la semaine, corrige avec les invendus et les ruptures, ajoute les commandes, et tient compte des fêtes de l'an passé. Le chef le lit le matin ; il reste libre de le changer, et le logiciel note ce qu'il a changé. Pour les matières, farine, beurre, œufs, la logique est celle du [guide sur le réapprovisionnement](" + L.reappro + ").",
      ] },
      { heading: "Un logiciel de boulangerie-pâtisserie, en cinq couches", body: [
        "La couche accentuée est la production du jour : c'est celle qu'aucune caisse ne fait.",
      ], visual: 'couches', after: [
        "**Vente au comptoir.** Pas de code-barres sur un croissant : des touches avec la photo du produit, une vente à la pièce, au poids pour les gâteaux secs, au plateau pour les assortiments, et une caisse qui continue quand internet coupe, comme dans [le guide pour la supérette](" + L.superette + "). La caisse se clôture chaque soir selon [le guide sur les sessions de caisse](" + L.sessions + "). **Production du jour**, puis **commandes**.",
        "**Recettes et matières.** La fiche technique dit ce qu'il faut pour une fournée ; multipliée par la production, elle dit ce qui aurait dû être consommé, à comparer avec ce qui l'a été. **Boutiques et pilotage.** Le laboratoire répartit ; chaque boutique vend, rend ses invendus et remonte ses ruptures. Le planning des équipes du laboratoire, qui commence avant l'aube, se tient comme dans [le guide sur le planning des équipes](" + L.planning + "). Une carte de fidélité, le dixième café offert, reprend [le guide sur les programmes de fidélité](" + L.fidelite + ").",
      ] },
      { heading: "Un gâteau sur commande, en six temps", body: [
        "Le premier temps est accentué : ce qui est noté à la prise de commande ne sera plus redemandé.",
      ], visual: 'commande', after: [
        "**Noter.** La date et l'heure du retrait, le nombre de parts, le parfum, l'inscription lettre par lettre, la photo du modèle choisi, le nom et le téléphone du client. Dans un cahier, ces informations tiennent sur une ligne griffonnée ; dans le logiciel, aucune ne peut manquer. **Prendre l'acompte.** Le reçu est remis, le reste à payer est affiché, et la commande n'entre au planning qu'une fois l'acompte reçu.",
        "**Planifier et produire.** Le laboratoire voit, pour chaque jour, les commandes à sortir, avec la photo et l'inscription ; une semaine de fête se lit trois semaines à l'avance. **Remettre et solder.** Le client est prévenu la veille ; au retrait, le solde est encaissé et la commande fermée. **Garder.** L'an prochain, à la même date, le logiciel sait que ce client avait commandé un gâteau pour vingt personnes.",
      ] },
      { heading: "La fiche d'une recette : ce que coûte un croissant", body: [
        "La figure additionne les ingrédients d'une fournée de soixante croissants, puis découpe le prix de vente.",
      ], visual: 'fiche', after: [
        "**La fiche technique.** Une nomenclature est la liste des matières premières et des quantités nécessaires pour fabriquer un produit ; en pâtisserie, c'est la recette, avec son rendement. Dans l'exemple, la fournée de soixante croissants consomme 2 400 DA de matière, soit 40 DA la pièce ; vendu 65 DA, le croissant laisse 25 DA avant le travail et les charges. **Quand le beurre monte.** Il pèse 1 800 DA sur 2 400. S'il augmente d'un quart, le coût passe à 47,50 DA et la marge à 17,50 DA : 30 % de moins, sans que rien ne change en boutique. La fiche le dit le jour de l'achat.",
        "**Combien en produire.** Le modèle dit du vendeur de journaux traite d'un produit périssable, à prix fixe et à demande incertaine. Sa solution tient en un rapport : le prix moins le coût, divisé par le prix. Pour le croissant, 25 ÷ 65, soit 38 % : on vise la quantité que la demande ne dépasse que 38 jours sur 100. Autrement dit, quand l'invendu coûte cher par rapport à la marge, être en rupture certains soirs est le bon réglage, et n'avoir jamais de rupture veut dire qu'on jette trop. Pour un millefeuille à 60 DA de matière vendu 150 DA, le rapport monte à 60 % : on accepte moins de ruptures. C'est un repère, qui ne compte ni le client déçu ni l'invendu revendu le lendemain ; le relevé du soir fait le reste.",
      ] },
      { heading: "Six situations de boulangerie-pâtisserie", body: [
        "La figure compare, pour six situations de la semaine, ce qui se passe aujourd'hui et ce que fait le logiciel.",
      ], visual: 'situations', after: [
        "**Les fêtes.** L'Aïd, le Mouloud, la rentrée, les mariages de l'été : la demande double ou triple, et l'on prépare de mémoire. Le logiciel garde les ventes de la même fête l'an passé, produit par produit, et les commandes déjà prises : la semaine se prépare avec des chiffres. **Les boutiques.** Le laboratoire envoie ; la boutique reçoit, vend, rend. Un bon de répartition et un retour compté par boutique suffisent à savoir où un produit se vend et où il s'entasse.",
        "**Ce que le logiciel ne fait pas.** Il ne remplace ni le chef ni son coup d'œil sur la pâte ; il lui donne les deux chiffres qu'il n'a jamais eus, les invendus et les ruptures, et le coût de ce qu'il fabrique. Si vous servez aussi à table, la prise de commande en salle relève du [guide sur le logiciel de restaurant](" + L.restaurant + ").",
      ] },
      { heading: "Une boulangerie-pâtisserie équipée en 2027, en semaines", body: [
        "Cinq semaines dans l'exemple ; la deuxième est celle qui change les décisions.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, produits et comptoir.** **Semaine 2, invendus et ruptures** : le relevé de fermeture chaque soir ; au bout de sept jours, le premier plan de fournées. **Semaine 3, commandes** : le cahier est repris, les acomptes et le planning du laboratoire suivent.",
        "**Semaine 4, recettes et matières** : les fiches des vingt produits qui se vendent le plus. **Semaine 5, boutiques et pilotage** : répartition, retours, marge par produit, et le tableau que le gérant lit sur son téléphone, y compris depuis la France, comme dans [le guide pour gérer son commerce à distance](" + L.france + ").",
      ], list: [
        "**Ce que le gérant voit** : par produit, les quantités produites, vendues, invendues et l'heure de rupture ; les commandes des jours à venir ; le coût et la marge par pièce ; les ventes par boutique.",
        "**Ce que la boutique ne fait plus** : produire au jugé, jeter sans compter, dire « il n'y en a plus » sans le noter, oublier une commande, découvrir une hausse d'ingrédient à la fin du mois.",
        "**Ce qui est mesuré** : invendus en pourcentage de la production, heures de rupture, commandes remises à l'heure, écart entre matières consommées et matières prévues.",
        "**Ce que fait Symloop** : la caisse du comptoir, le relevé du soir et le plan de fournées, les commandes avec acompte, les fiches techniques avec votre chef, la répartition entre boutiques, puis l'entretien.",
      ], faq: [
        { q: "Quel logiciel pour une boulangerie-pâtisserie en Algérie ?", a: "Un logiciel qui ajoute à la caisse le relevé des invendus et des ruptures, le plan de production du jour, les commandes avec acompte et les fiches techniques. Une caisse seule dit ce qui s'est vendu ; elle ne dit ni ce qui a été jeté ni ce qui a manqué." },
        { q: "Comment savoir combien produire chaque jour ?", a: "En partant des ventes du même jour de la semaine, corrigées par les invendus et les heures de rupture des semaines précédentes, plus les commandes. Le logiciel propose ; le chef décide. Une semaine de relevés suffit à corriger les plus gros écarts." },
        { q: "Comment réduire les invendus ?", a: "D'abord en les comptant, produit par produit, chaque soir. Ils se concentrent souvent sur quelques produits et sur la dernière fournée ; on la réduit ou on la supprime, et l'on regarde si une rupture apparaît. Ce qui reste peut être transformé ou vendu autrement le lendemain, mais cela se décide produit par produit." },
        { q: "Est-il normal d'être en rupture ?", a: "Sur un produit du jour, oui, certains soirs. Si un produit n'est jamais en rupture, c'est qu'on en jette ; s'il l'est tous les jours à seize heures, c'est qu'on en fait trop peu. Le repère est le rapport entre la marge et le prix : plus l'invendu coûte cher par rapport à la marge, plus la rupture est acceptable." },
        { q: "Comment gérer les commandes de gâteaux ?", a: "Chaque commande porte la date et l'heure du retrait, les parts, le parfum, l'inscription, la photo du modèle, l'acompte et le reste à payer. Elle apparaît dans le planning du laboratoire le jour voulu, et le client est prévenu la veille. Le cahier ne sert plus qu'en secours." },
        { q: "Comment calculer le coût de revient d'un gâteau ?", a: "Par sa fiche technique : la liste des ingrédients et leurs quantités pour une fournée, multipliées par le dernier prix d'achat, divisées par le nombre de pièces. On obtient le coût matière ; le travail et les charges s'ajoutent ensuite. La fiche se recalcule à chaque achat." },
        { q: "Comment gérer plusieurs boutiques avec un seul laboratoire ?", a: "Par des bons de répartition du laboratoire vers chaque boutique, et un retour d'invendus compté par boutique. On voit alors où chaque produit se vend, et la répartition du lendemain s'ajuste boutique par boutique." },
        { q: "Le logiciel fonctionne-t-il sans code-barres ?", a: "Oui : la vente se fait par des touches avec la photo du produit, à la pièce, au poids ou au plateau. Les produits emballés peuvent porter une étiquette imprimée sur place." },
        { q: "Combien de temps pour mettre en place le logiciel ?", a: "Cinq semaines dans notre exemple : la caisse la première semaine, le relevé des invendus et des ruptures la deuxième, les commandes la troisième, les fiches techniques la quatrième, les boutiques la cinquième. Les décisions changent dès la deuxième semaine." },
        { q: "Combien coûte un logiciel de boulangerie-pâtisserie ?", a: "Cela dépend du nombre de caisses et de boutiques, du volume de commandes, et du nombre de recettes à mettre en fiche. Le travail le plus utile n'est pas l'écran de caisse, c'est le relevé du soir et les fiches techniques, faits avec votre chef. Nous chiffrons après une journée passée dans votre laboratoire et à votre comptoir." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "L'invendu se voit dans le bac ; la rupture ne se voit nulle part." },
      { after: 3, text: "Si un produit n'est jamais en rupture, c'est qu'on en jette." },
    ],
    cta: { eyebrow: "Notez pendant une semaine, pour vos cinq produits principaux, ce qui reste le soir et l'heure où il n'y en a plus : nous vous montrons le plan de fournées que cela donne", title: "Boulangerie-pâtisserie, pâtisserie de commande, laboratoire qui fournit plusieurs boutiques, ou fondateur en France qui suit l'affaire familiale : nous construisons la caisse, le relevé du soir, les commandes avec acompte et les fiches techniques", body: "Deux chiffres par produit chaque soir, un plan de fournées le matin, des commandes qui ne s'oublient plus, un coût par recette. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.superette, kind: '2027', name: 'Logiciel supérette et supermarché : caisse hors ligne, dates limites, marge' },
      { href: L.sessions, kind: '2027', name: 'La caisse ne tombe jamais juste : sessions de caisse, comptage, écart' },
      { href: L.reappro, kind: '2027', name: 'Réapprovisionnement : point de commande, délai mesuré, proposition d’achat' },
      { href: L.planning, kind: '2027', name: 'Planning des équipes : besoins par créneau, contraintes, échanges' },
    ] },
  },
  en: {
    kind: 'Bakery and pastry · Algeria · 2027', title: "Bakery and pastry shop software in Algeria (2027): the day's production, unsold goods, shortages and cakes to order, for when you throw away in the evening what was missing at four o'clock",
    dek: "“I run a bakery and pastry shop with a kitchen and two shops. Every evening we throw away or give away pastries, and on the same day we turned customers away at four o'clock because there were no millefeuilles left. Cake orders are in a notebook: last week we forgot an engagement cake. Butter has gone up and I do not know what a croissant costs me. Which software do I need?” A till records what was sold. Here you also have to note what was not sold and what ran out, keep orders with their deposit and their date, and know what each recipe costs.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Bakery software', 'Pastry shop', 'Production plan', 'Unsold goods and shortages', 'Recipe costing', 'Algeria 2027'],
    intro: [
      "**Short answer.** Bakery and pastry software is judged on four things a till does not do. **Two figures per product, every evening**: the unsold and the time it ran out; the next day's quantity comes from them. **Orders**: date, time, portions, flavour, inscription, model, deposit and balance due, filed in the kitchen's schedule. **The recipe sheet** for each recipe, which gives the cost per piece and recalculates it when an ingredient changes price. **Dispatch** between the kitchen and the shops, with returns. Around these: a fast counter sale, by the piece, by weight and by the tray.",
      "This guide is for the manager of a bakery and pastry shop, a made-to-order pastry shop or a kitchen that supplies several shops, and for the founder based in France who follows the family business. The notions quoted come from public sources: the stockout, the bill of materials, and the so-called newsvendor model, which deals precisely with a perishable product with uncertain demand. The quantities, batches and prices in the figures are a constructed example, not market prices. This guide covers neither regulated prices nor hygiene and labelling rules: those are matters for the relevant authorities.",
    ],
    sections: [
      { heading: "One day, two products: too much of one, not enough of the other", body: [
        "The figure follows the stock of two products, from opening to closing.",
      ], visual: 'stock', after: [
        "**The croissants.** Sixty at opening, forty at 9 a.m., twenty at 2 p.m.: 120 made. Ninety-six sell; twenty-four remain, one in five, and it is about the same every evening. The third batch was one too many, but nobody knows, because the unsold goods are written down nowhere. **The millefeuilles.** Forty made in the morning, all sold, and none left before 5 p.m. A stockout is the event that exhausts the stock; it causes lost sales and dissatisfies customers, and it leaves no trace: for three hours, twelve people asked for a millefeuille.",
        "**The evening record.** At closing, for each product, two entries: what is left, and the time at which there was none. One minute. After a week, the software knows that on Tuesday you need a hundred croissants and not a hundred and twenty, and fifty-five millefeuilles on Saturday. **The batch plan.** It starts from the sales of the same weekday, corrects with the unsold and the shortages, adds the orders, and takes last year's feast days into account. The chef reads it in the morning; they remain free to change it, and the software notes what they changed. For ingredients, flour, butter, eggs, the logic is that of [the guide to replenishment](" + L.reappro + ").",
      ] },
      { heading: "Bakery and pastry software, in five layers", body: [
        "The accented layer is the day's production: it is the one no till does.",
      ], visual: 'couches', after: [
        "**Counter sales.** There is no barcode on a croissant: buttons with the photo of the product, sale by the piece, by weight for dry cakes, by the tray for assortments, and a till that carries on when the internet drops, as in [the guide for the mini-market](" + L.superette + "). The till is closed every evening following [the guide to till sessions](" + L.sessions + "). **The day's production**, then **orders**.",
        "**Recipes and ingredients.** The recipe sheet says what a batch needs; multiplied by production, it says what should have been used, to be compared with what was. **Shops and steering.** The kitchen dispatches; each shop sells, returns its unsold goods and reports its shortages. The schedule of the kitchen teams, who start before dawn, is kept as in [the guide to team scheduling](" + L.planning + "). A loyalty card, the tenth coffee free, reuses [the guide to loyalty programmes](" + L.fidelite + ").",
      ] },
      { heading: "A cake to order, in six steps", body: [
        "The first step is accented: what is written down when the order is taken will not be asked again.",
      ], visual: 'commande', after: [
        "**Write it down.** The date and time of collection, the number of portions, the flavour, the inscription letter by letter, the photo of the chosen model, the customer's name and phone number. In a notebook, this information fits on one scribbled line; in the software, none of it can be missing. **Take the deposit.** The receipt is handed over, the balance due is shown, and the order only enters the schedule once the deposit is received.",
        "**Schedule and make.** The kitchen sees, for each day, the orders to turn out, with the photo and the inscription; a feast week can be read three weeks ahead. **Hand over and settle.** The customer is told the day before; at collection, the balance is paid and the order closed. **Keep.** Next year, on the same date, the software knows that this customer ordered a cake for twenty people.",
      ] },
      { heading: "A recipe sheet: what a croissant costs", body: [
        "The figure adds up the ingredients of a batch of sixty croissants, then splits the selling price.",
      ], visual: 'fiche', after: [
        "**The recipe sheet.** A bill of materials is the list of raw materials and of the quantities needed to make a product; in pastry, it is the recipe, with its yield. In the example, the batch of sixty croissants uses 2,400 DZD of ingredients, that is 40 DZD a piece; sold at 65 DZD, the croissant leaves 25 DZD before labour and overheads. **When butter goes up.** It weighs 1,800 DZD out of 2,400. If it rises by a quarter, the cost becomes 47.50 DZD and the margin 17.50 DZD: 30 % less, with nothing changing in the shop. The sheet says so on the day of purchase.",
        "**How many to make.** The so-called newsvendor model deals with a perishable product, with a fixed price and uncertain demand. Its solution comes down to one ratio: the price minus the cost, divided by the price. For the croissant, 25 ÷ 65, that is 38 %: you aim for the quantity that demand exceeds only 38 days in 100. In other words, when the unsold costs a lot relative to the margin, running out on some evenings is the right setting, and never running out means too much is thrown away. For a millefeuille with 60 DZD of ingredients sold at 150 DZD, the ratio rises to 60 %: you accept fewer shortages. It is a marker, which counts neither the disappointed customer nor the unsold goods sold the next day; the evening record does the rest.",
      ] },
      { heading: "Six bakery and pastry situations", body: [
        "The figure compares, for six situations of the week, what happens today and what the software does.",
      ], visual: 'situations', after: [
        "**Feast days.** Eid, the Mawlid, the start of the school year, summer weddings: demand doubles or triples, and preparation is done from memory. The software keeps the sales of the same feast last year, product by product, and the orders already taken: the week is prepared with figures. **The shops.** The kitchen sends; the shop receives, sells, returns. A dispatch slip and a return counted per shop are enough to know where a product sells and where it piles up.",
        "**What the software does not do.** It replaces neither the chef nor their eye on the dough; it gives them the two figures they never had, the unsold and the shortages, and the cost of what they make. If you also serve at tables, taking orders in the dining room belongs to [the guide to restaurant software](" + L.restaurant + ").",
      ] },
      { heading: "A bakery and pastry shop equipped in 2027, in weeks", body: [
        "Five weeks in the example; the second is the one that changes decisions.",
      ], visual: 'calendrier', after: [
        "**Week 1, products and counter.** **Week 2, unsold and shortages**: the closing record every evening; after seven days, the first batch plan. **Week 3, orders**: the notebook is taken over, deposits and the kitchen schedule follow.",
        "**Week 4, recipes and ingredients**: the sheets for the twenty best-selling products. **Week 5, shops and steering**: dispatch, returns, margin per product, and the board the manager reads on their phone, including from France, as in [the guide to running your shop remotely](" + L.france + ").",
      ], list: [
        "**What the manager sees**: per product, the quantities made, sold, unsold and the time it ran out; the orders for the coming days; the cost and margin per piece; sales per shop.",
        "**What the shop no longer does**: produce by guesswork, throw away without counting, say “there is none left” without noting it, forget an order, discover an ingredient increase at the end of the month.",
        "**What is measured**: unsold as a percentage of production, times of shortage, orders handed over on time, difference between ingredients used and ingredients planned.",
        "**What Symloop does**: the counter till, the evening record and the batch plan, orders with a deposit, recipe sheets with your chef, dispatch between shops, then upkeep.",
      ], faq: [
        { q: "Which software for a bakery and pastry shop in Algeria?", a: "Software that adds to the till the record of unsold goods and shortages, the day's production plan, orders with a deposit and recipe sheets. A till alone says what was sold; it says neither what was thrown away nor what ran out." },
        { q: "How do you know how much to produce each day?", a: "By starting from the sales of the same weekday, corrected by the unsold and the shortage times of the previous weeks, plus the orders. The software proposes; the chef decides. One week of records is enough to correct the biggest gaps." },
        { q: "How do you reduce unsold goods?", a: "First by counting them, product by product, every evening. They often concentrate on a few products and on the last batch; you reduce or drop it, and see whether a shortage appears. What is left can be transformed or sold differently the next day, but that is decided product by product." },
        { q: "Is it normal to run out?", a: "On a same-day product, yes, on some evenings. If a product never runs out, some of it is being thrown away; if it runs out every day at four o'clock, too little is being made. The marker is the ratio between the margin and the price: the more the unsold costs relative to the margin, the more acceptable a shortage is." },
        { q: "How do you manage cake orders?", a: "Each order carries the date and time of collection, the portions, the flavour, the inscription, the photo of the model, the deposit and the balance due. It appears in the kitchen's schedule on the right day, and the customer is told the day before. The notebook is only a fallback." },
        { q: "How do you calculate the cost of a cake?", a: "From its recipe sheet: the list of ingredients and their quantities for a batch, multiplied by the last purchase price, divided by the number of pieces. That gives the ingredient cost; labour and overheads are added afterwards. The sheet is recalculated at every purchase." },
        { q: "How do you manage several shops with one kitchen?", a: "With dispatch slips from the kitchen to each shop, and a return of unsold goods counted per shop. You then see where each product sells, and the next day's dispatch is adjusted shop by shop." },
        { q: "Does the software work without barcodes?", a: "Yes: sales go through buttons with the photo of the product, by the piece, by weight or by the tray. Packaged products can carry a label printed on site." },
        { q: "How long does it take to set up the software?", a: "Five weeks in our example: the till in the first week, the record of unsold goods and shortages in the second, orders in the third, recipe sheets in the fourth, shops in the fifth. Decisions change from the second week." },
        { q: "How much does bakery and pastry software cost?", a: "It depends on the number of tills and shops, the volume of orders, and the number of recipes to put on sheets. The most useful work is not the till screen, it is the evening record and the recipe sheets, done with your chef. We quote after a day spent in your kitchen and at your counter." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The unsold shows in the bin; the shortage shows nowhere." },
      { after: 3, text: "If a product never runs out, some of it is being thrown away." },
    ],
    cta: { eyebrow: "For one week, note for your five main products what is left in the evening and the time there is none left: we show you the batch plan that comes out of it", title: "A bakery and pastry shop, a made-to-order pastry shop, a kitchen supplying several shops, or a founder in France following the family business: we build the till, the evening record, orders with a deposit and the recipe sheets", body: "Two figures per product every evening, a batch plan in the morning, orders that are no longer forgotten, a cost per recipe. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.superette, kind: '2027', name: 'Mini-market and supermarket software: offline till, use-by dates, margin' },
      { href: L.sessions, kind: '2027', name: 'The till never balances: till sessions, counting, differences' },
      { href: L.reappro, kind: '2027', name: 'Replenishment: reorder point, measured lead time, purchase proposal' },
      { href: L.planning, kind: '2027', name: 'Team scheduling: needs per slot, constraints, swaps' },
    ] },
  },
  ar: {
    kind: 'المخبزة والحلويات · الجزائر · 2027', title: "برنامج المخبزة والحلويات في الجزائر (2027): إنتاج اليوم، غير المباع، النفاد والحلويات بالطلبية، حين نرمي مساءً ما كان ينقص على الرابعة",
    dek: "«عندي مخبزة وحلويات بمخبر ومحلّين. كل مساء نرمي أو نعطي معجّنات، وفي اليوم نفسه رفضنا زبائن على الرابعة لأن الميلفاي نفد. طلبيات الحلوى في دفتر: الأسبوع الماضي نسينا حلوى خطوبة. الزبدة ارتفعت ولا أعرف كم يكلّفني الكرواسان. أي برنامج يلزمني؟» الصندوق يسجّل ما بيع. وهنا يجب كذلك تسجيل ما لم يُبَع وما نقص، ومسك الطلبيات بتسبيقها وتاريخها، ومعرفة كم تكلّف كل وصفة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج المخبزة', 'الحلويات', 'خطة الإنتاج', 'غير المباع والنفاد', 'تكلفة الوصفة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج المخبزة والحلويات يُحكم عليه بأربعة أشياء لا يفعلها الصندوق. **رقمان لكل منتَج، كل مساء**: غير المباع وساعة النفاد؛ ومنهما تخرج كمية الغد. **الطلبيات**: التاريخ، الساعة، الحصص، النكهة، الكتابة، النموذج، التسبيق والباقي، مرتَّبة في برنامج المخبر. **البطاقة التقنية** لكل وصفة، تعطي تكلفة القطعة وتعيد حسابها حين يتغيّر سعر مكوّن. **التوزيع** بين المخبر والمحلات، مع الإرجاع. وحول ذلك: بيع سريع في المحل، بالقطعة وبالوزن وبالطبق.",
      "هذا الدليل موجَّه إلى مسيّر مخبزة وحلويات، أو محل حلويات بالطلبية، أو مخبر يموّن عدة محلات، وإلى المؤسس المقيم في فرنسا الذي يتابع مشروع العائلة. المفاهيم المذكورة آتية من مصادر علنية: نفاد المخزون، قائمة مواد المنتَج، والنموذج المسمّى بائع الجرائد، الذي يعالج بالضبط منتَجاً سريع التلف بطلب غير مؤكَّد. الكميات والخبزات والأسعار في الأشكال مثال مركَّب، وليست أسعار السوق. هذا الدليل لا يتناول الأسعار المقنَّنة ولا قواعد النظافة والوسم: تُراجَع مع المصالح المعنية.",
    ],
    sections: [
      { heading: "يوم واحد، منتَجان: كثير من هذا، وقليل من ذاك", body: [
        "الشكل يتابع مخزون منتَجين، من الفتح إلى الإغلاق.",
      ], visual: 'stock', after: [
        "**الكرواسان.** ستون عند الفتح، أربعون على التاسعة، وعشرون على الثانية: 120 منتَجة. تُباع ست وتسعون؛ وتبقى أربع وعشرون، واحدة من خمس، والأمر نفسه تقريباً كل مساء. الخبزة الثالثة كانت زائدة، لكن لا أحد يعرف، لأن غير المباع غير مكتوب في أي مكان. **الميلفاي.** أربعون منتَجة صباحاً، بيعت كلها، ولا شيء قبل الخامسة. نفاد المخزون هو الحدث الذي يستنفد المخزون؛ يُضيّع مبيعات ويُغضب الزبائن، ولا يترك أثراً: طوال ثلاث ساعات، طلب اثنا عشر شخصاً ميلفاي.",
        "**كشف المساء.** عند الإغلاق، لكل منتَج، إدخالان: ما بقي، والساعة التي لم يبقَ فيها شيء. دقيقة واحدة. وبعد أسبوع يعرف البرنامج أن الثلاثاء يحتاج مئة كرواسان لا مئة وعشرين، وخمسة وخمسين ميلفاي يوم السبت. **خطة الخبزات.** تنطلق من مبيعات اليوم نفسه من الأسبوع، تُصحَّح بغير المباع والنفاد، تضيف الطلبيات، وتأخذ في الحسبان أعياد السنة الماضية. الشاف يقرؤها صباحاً؛ ويبقى حرّاً في تغييرها، والبرنامج يسجّل ما غيّره. وللمواد، الدقيق والزبدة والبيض، المنطق هو منطق [دليل إعادة التموين](" + L.reappro + ").",
      ] },
      { heading: "برنامج المخبزة والحلويات، في خمس طبقات", body: [
        "الطبقة المبرزة هي إنتاج اليوم: هي التي لا يفعلها أي صندوق.",
      ], visual: 'couches', after: [
        "**البيع في المحل.** لا رمز شريطي على الكرواسان: أزرار بصورة المنتَج، بيع بالقطعة، بالوزن للحلويات الجافة، وبالطبق للتشكيلات، وصندوق يواصل حين ينقطع الإنترنت، كما في [دليل السوبيرات](" + L.superette + "). والصندوق يُقفَل كل مساء حسب [دليل حصص الصندوق](" + L.sessions + "). **إنتاج اليوم**، ثم **الطلبيات**.",
        "**الوصفات والمواد.** البطاقة التقنية تقول ما يلزم لخبزة؛ ومضروبة في الإنتاج تقول ما كان يجب أن يُستهلَك، ليُقارَن بما استُهلك. **المحلات والقيادة.** المخبر يوزّع؛ وكل محل يبيع، يُرجع غير المباع ويبلّغ عن النفاد. وبرنامج فرق المخبر، التي تبدأ قبل الفجر، يُمسَك كما في [دليل برنامج الفرق](" + L.planning + "). وبطاقة الوفاء، القهوة العاشرة المجانية، تستعمل [دليل برامج الوفاء](" + L.fidelite + ").",
      ] },
      { heading: "حلوى بالطلبية، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: ما يُسجَّل عند أخذ الطلبية لن يُطلب من جديد.",
      ], visual: 'commande', after: [
        "**التسجيل.** تاريخ وساعة الاستلام، عدد الحصص، النكهة، الكتابة حرفاً بحرف، صورة النموذج المختار، واسم الزبون وهاتفه. في الدفتر، هذه المعلومات تسع في سطر مخربَش؛ وفي البرنامج لا يمكن أن تنقص واحدة. **أخذ التسبيق.** الوصل يُسلَّم، الباقي معروض، والطلبية لا تدخل البرنامج إلا بعد قبض التسبيق.",
        "**البرمجة والإنتاج.** المخبر يرى، لكل يوم، الطلبيات التي تخرج، بالصورة والكتابة؛ وأسبوع العيد يُقرأ قبل ثلاثة أسابيع. **التسليم والتسوية.** الزبون يُعلَم في اليوم السابق؛ وعند الاستلام يُقبَض الباقي وتُغلق الطلبية. **الحفظ.** في السنة المقبلة، في التاريخ نفسه، يعرف البرنامج أن هذا الزبون طلب حلوى لعشرين شخصاً.",
      ] },
      { heading: "بطاقة الوصفة: كم يكلّف الكرواسان", body: [
        "الشكل يجمع مكوّنات خبزة من ستين كرواسان، ثم يقسّم سعر البيع.",
      ], visual: 'fiche', after: [
        "**البطاقة التقنية.** قائمة المواد هي قائمة المواد الأولية والكميات اللازمة لصنع منتَج؛ وفي الحلويات هي الوصفة، بمردودها. في المثال، خبزة الستين كرواسان تستهلك 2400 دج من المواد، أي 40 دج للقطعة؛ وبسعر بيع 65 دج يترك الكرواسان 25 دج قبل العمل والتكاليف. **حين ترتفع الزبدة.** تزن 1800 دج من 2400. وإذا ارتفعت بالربع، صارت التكلفة 47,50 دج والهامش 17,50 دج: 30 بالمئة أقل، دون أن يتغيّر شيء في المحل. والبطاقة تقول ذلك يوم الشراء.",
        "**كم ننتج.** النموذج المسمّى بائع الجرائد يعالج منتَجاً سريع التلف، بسعر ثابت وطلب غير مؤكَّد. وحلّه يتلخص في نسبة: السعر ناقص التكلفة، مقسوماً على السعر. للكرواسان، " + I('25 ÷ 65') + "، أي 38 بالمئة: نستهدف الكمية التي لا يتجاوزها الطلب إلا 38 يوماً من 100. بعبارة أخرى، حين يكلّف غير المباع كثيراً مقارنة بالهامش، يكون النفاد في بعض الأمسيات هو الضبط الصحيح، وعدم النفاد أبداً يعني أننا نرمي كثيراً. ولميلفاي بـ 60 دج من المواد يُباع بـ 150 دج، ترتفع النسبة إلى 60 بالمئة: نقبل نفاداً أقل. وهي علامة، لا تحسب الزبون الخائب ولا غير المباع الذي يُباع في الغد؛ وكشف المساء يتكفل بالباقي.",
      ] },
      { heading: "ست حالات في المخبزة والحلويات", body: [
        "الشكل يقارن، في ست حالات من الأسبوع، ما يحدث اليوم وما يفعله البرنامج.",
      ], visual: 'situations', after: [
        "**الأعياد.** العيد، المولد، الدخول المدرسي، وأعراس الصيف: الطلب يتضاعف مرتين أو ثلاثاً، ونحضّر من الذاكرة. البرنامج يحفظ مبيعات العيد نفسه السنة الماضية، منتَجاً بمنتَج، والطلبيات المسجَّلة: فيُحضَّر الأسبوع بالأرقام. **المحلات.** المخبر يرسل؛ والمحل يستلم، يبيع، ويُرجع. وصل توزيع وإرجاع يُعدّ لكل محل يكفيان لمعرفة أين يُباع المنتَج وأين يتراكم.",
        "**ما لا يفعله البرنامج.** لا يعوّض الشاف ولا نظرته إلى العجين؛ يعطيه الرقمين اللذين لم يكونا عنده قط، غير المباع والنفاد، وتكلفة ما يصنع. وإذا كنتم تخدمون كذلك على الطاولات، فأخذ الطلبات في القاعة يعود إلى [دليل برنامج المطعم](" + L.restaurant + ").",
      ] },
      { heading: "مخبزة وحلويات مجهَّزة سنة 2027، بالأسابيع", body: [
        "خمسة أسابيع في المثال؛ والثاني هو الذي يغيّر القرارات.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، المنتَجات والمحل.** **الأسبوع 2، غير المباع والنفاد**: كشف الإغلاق كل مساء؛ وبعد سبعة أيام، أول خطة خبزات. **الأسبوع 3، الطلبيات**: يُستعاد الدفتر، وتتبع التسبيقات وبرنامج المخبر.",
        "**الأسبوع 4، الوصفات والمواد**: بطاقات العشرين منتَجاً الأكثر مبيعاً. **الأسبوع 5، المحلات والقيادة**: التوزيع، الإرجاع، الهامش لكل منتَج، واللوحة التي يقرؤها المسيّر على هاتفه، حتى من فرنسا، كما في [دليل تسيير المحل عن بعد](" + L.france + ").",
      ], list: [
        "**ما يراه المسيّر**: لكل منتَج، الكميات المنتَجة والمباعة وغير المباعة وساعة النفاد؛ طلبيات الأيام القادمة؛ التكلفة والهامش لكل قطعة؛ والمبيعات لكل محل.",
        "**ما لم يعد المحل يفعله**: الإنتاج بالتقدير، الرمي دون عدّ، قول «لم يبقَ» دون تسجيله، نسيان طلبية، واكتشاف ارتفاع مكوّن في نهاية الشهر.",
        "**ما يُقاس**: غير المباع بالنسبة المئوية من الإنتاج، ساعات النفاد، الطلبيات المسلَّمة في وقتها، والفارق بين المواد المستهلَكة والمتوقَّعة.",
        "**ما تفعله Symloop**: صندوق المحل، كشف المساء وخطة الخبزات، الطلبيات بالتسبيق، البطاقات التقنية مع الشاف، التوزيع بين المحلات، ثم الصيانة.",
      ], faq: [
        { q: "أي برنامج لمخبزة وحلويات في الجزائر؟", a: "برنامج يضيف إلى الصندوق كشف غير المباع والنفاد، خطة إنتاج اليوم، الطلبيات بالتسبيق، والبطاقات التقنية. الصندوق وحده يقول ما بيع؛ ولا يقول ما رُمي ولا ما نقص." },
        { q: "كيف نعرف كم ننتج كل يوم؟", a: "بالانطلاق من مبيعات اليوم نفسه من الأسبوع، مصحَّحة بغير المباع وساعات النفاد في الأسابيع السابقة، مع الطلبيات. البرنامج يقترح؛ والشاف يقرّر. وأسبوع من التسجيل يكفي لتصحيح أكبر الفوارق." },
        { q: "كيف نقلّص غير المباع؟", a: "أولاً بعدّه، منتَجاً بمنتَج، كل مساء. وهو يتركّز غالباً في بعض المنتَجات وفي الخبزة الأخيرة؛ فنقلّصها أو نحذفها، وننظر هل يظهر نفاد. وما يبقى يمكن تحويله أو بيعه بشكل آخر في الغد، لكن ذلك يُقرَّر منتَجاً بمنتَج." },
        { q: "هل من العادي أن ينفد منتَج؟", a: "لمنتَج اليوم، نعم، في بعض الأمسيات. إذا لم ينفد منتَج أبداً فمعناه أننا نرمي منه؛ وإذا نفد كل يوم على الرابعة فمعناه أننا نصنع منه قليلاً. والعلامة هي النسبة بين الهامش والسعر: كلما كلّف غير المباع أكثر مقارنة بالهامش، كان النفاد مقبولاً أكثر." },
        { q: "كيف تُسيَّر طلبيات الحلوى؟", a: "كل طلبية تحمل تاريخ وساعة الاستلام، الحصص، النكهة، الكتابة، صورة النموذج، التسبيق والباقي. وتظهر في برنامج المخبر في اليوم المطلوب، والزبون يُعلَم في اليوم السابق. والدفتر لا يبقى إلا احتياطاً." },
        { q: "كيف تُحسب تكلفة حلوى؟", a: "ببطاقتها التقنية: قائمة المكوّنات وكمياتها لخبزة، مضروبة في آخر سعر شراء، مقسومة على عدد القطع. نحصل على تكلفة المواد؛ والعمل والتكاليف تُضاف بعد ذلك. والبطاقة يُعاد حسابها عند كل شراء." },
        { q: "كيف تُسيَّر عدة محلات بمخبر واحد؟", a: "بوصولات توزيع من المخبر إلى كل محل، وإرجاع لغير المباع يُعدّ لكل محل. فنرى أين يُباع كل منتَج، وتوزيع الغد يُضبط محلاً بمحل." },
        { q: "هل يعمل البرنامج دون رمز شريطي؟", a: "نعم: البيع يتم بأزرار فيها صورة المنتَج، بالقطعة أو بالوزن أو بالطبق. والمنتَجات المعبَّأة يمكن أن تحمل ملصقاً يُطبع في المكان." },
        { q: "كم من الوقت لوضع البرنامج في الخدمة؟", a: "خمسة أسابيع في مثالنا: الصندوق في الأسبوع الأول، كشف غير المباع والنفاد في الثاني، الطلبيات في الثالث، البطاقات التقنية في الرابع، والمحلات في الخامس. والقرارات تتغيّر منذ الأسبوع الثاني." },
        { q: "كم يكلّف برنامج المخبزة والحلويات؟", a: "هذا يتوقف على عدد الصناديق والمحلات، وحجم الطلبيات، وعدد الوصفات التي توضع في بطاقات. والعمل الأنفع ليس شاشة الصندوق، بل كشف المساء والبطاقات التقنية، يُنجَزان مع الشاف. ونحن نقدّر الكلفة بعد يوم نقضيه في مخبركم ومحلّكم." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "غير المباع يُرى في الصندوق؛ والنفاد لا يُرى في أي مكان." },
      { after: 3, text: "إذا لم ينفد منتَج أبداً، فمعناه أننا نرمي منه." },
    ],
    cta: { eyebrow: "سجّلوا مدة أسبوع، لمنتَجاتكم الخمسة الرئيسية، ما يبقى مساءً والساعة التي ينفد فيها: نبيّن لكم خطة الخبزات التي تنتج عن ذلك", title: "مخبزة وحلويات، محل حلويات بالطلبية، مخبر يموّن عدة محلات، أو مؤسس في فرنسا يتابع مشروع العائلة: نبني الصندوق، كشف المساء، الطلبيات بالتسبيق والبطاقات التقنية", body: "رقمان لكل منتَج كل مساء، خطة خبزات في الصباح، طلبيات لا تُنسى، وتكلفة لكل وصفة. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.superette, kind: '2027', name: 'برنامج السوبيرات والسوبرماركت: صندوق دون اتصال، تواريخ الصلاحية، والهامش' },
      { href: L.sessions, kind: '2027', name: 'الصندوق لا يتوازن أبداً: حصص الصندوق، العدّ، والفارق' },
      { href: L.reappro, kind: '2027', name: 'إعادة التموين: نقطة الطلب، الأجل المقاس، اقتراح الشراء' },
      { href: L.planning, kind: '2027', name: 'برنامج الفرق: الحاجات لكل فترة، القيود، والتبادلات' },
    ] },
  },
};

const KEYWORDS = "logiciel boulangerie algérie 2027, logiciel boulangerie patisserie, logiciel de gestion boulangerie, logiciel pâtisserie algérie, logiciel caisse boulangerie, gestion des invendus boulangerie, plan de production boulangerie, commande de gâteaux logiciel, coût de revient recette pâtisserie, fiche technique pâtisserie, bakery software algeria 2027, pastry shop pos production planning, برنامج المخبزة والحلويات الجزائر 2027, برنامج تسيير المخبزة, برنامج محل الحلويات";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
