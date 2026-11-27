import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-augmenter-le-panier-moyen-en-magasin-algerie-2027-articles-par-ticket-produits-achetes-ensemble-suggestion-a-la-caisse-lots-mesure.mjs';

const SLUG = 'comment-augmenter-le-panier-moyen-en-magasin-algerie-2027-articles-par-ticket-produits-achetes-ensemble-suggestion-a-la-caisse-lots-mesure';
const FIGURES = ['leviers', 'couches', 'arbre', 'paires', 'regle', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  ventes: '/blog/comment-analyser-les-ventes-d-une-entreprise-algerie-2027-quels-produits-font-la-marge-quels-clients-partent-comparer-le-bon-mois-ramadan/',
  promo: '/blog/la-promo-a-marche-et-on-a-perdu-de-l-argent-moteur-de-promotions-application-algerie-2027-regles-cumul-codes-garde-de-marge-mesure-temoin/',
  fidelite: '/blog/programme-de-fidelite-algerie-2027-cafe-fast-food-chaine-application-points-caisse-relance/',
  superette: '/blog/logiciel-superette-supermarche-algerie-2027-caisse-hors-ligne-code-barres-balance-dlc-marge-cloture/',
  objectifs: '/blog/comment-fixer-des-objectifs-de-vente-algerie-2027-objectif-par-vendeur-suivi-au-jour-le-jour-rythme-necessaire-visites-devis-equipe-commerciale/',
  rentab: '/blog/comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  quincaillerie: '/blog/logiciel-quincaillerie-materiaux-de-construction-algerie-2027-caisse-stock-unites-multiples-credit-artisans-marchandise-payee-non-enlevee/',
  boutique: '/blog/logiciel-boutique-pret-a-porter-magasin-de-vetements-algerie-2027-stock-par-taille-et-couleur-echanges-mise-de-cote-instagram-fin-de-saison/',
};

const CONTENT = {
  fr: {
    kind: 'Panier moyen · Algérie · 2027', title: "Comment augmenter le panier moyen en magasin en Algérie (2027) : autant de clients, le même chiffre, quatre tickets sur dix à un seul article ; articles achetés ensemble, suggestion à la caisse, lots, seuils, et ce qu'on met en place",
    dek: "« J'ai deux magasins de peinture et de décoration. Il entre autant de monde qu'avant, mais le chiffre ne bouge pas : les clients prennent leur pot de peinture et repartent, puis achètent le rouleau ailleurs le lendemain. En caisse, l'équipe n'ose pas proposer, ou propose n'importe quoi. Comment augmenter le panier moyen en magasin sans faire de remises ? » Le panier moyen ne monte pas par des consignes données à l'équipe : il monte quand la caisse sait quel article proposer, à qui, et que l'on mesure ce que cela donne.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Panier moyen', 'Articles par ticket', 'Articles achetés ensemble', 'Suggestion à la caisse', 'Mesure contre un témoin', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Le panier moyen se décompose en deux chiffres : **le nombre d'articles par ticket** et **le prix moyen par article**. Pour le faire monter sans remise, trois choses : **lire dans vos tickets les articles achetés ensemble**, et surtout les clients qui repartent sans le second ; **faire proposer cet article par la caisse**, au moment où le premier est scanné, en une ligne ; **mesurer** ce qui est accepté, règle par règle, contre un magasin ou une période témoin. Dans l'exemple de cette page, un article de plus sur un ticket sur dix vaut 4 % de chiffre d'affaires, sans un client de plus.",
      "Cette page s'adresse à celles et ceux qui dirigent un magasin ou une petite chaîne, peinture et décoration, bricolage, cosmétique, téléphonie, puériculture, articles de sport, alimentation spécialisée, et à celles et ceux qui possèdent un magasin en Algérie et le suivent depuis la France. Les définitions viennent de sources publiques : analyse d'affinité, règles d'association, vente croisée, montée en gamme, vente par lots, achat d'impulsion, biens complémentaires, test A/B, planogramme. Le magasin, ses 4 000 tickets et ses prix sont un exemple construit ; les montants sont fictifs. La page ne traite ni des règles sur les promotions et les soldes, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Six leviers, et le piège de chacun", body: [
        "La figure passe en revue six façons de faire monter le panier.",
      ], visual: 'leviers', after: [
        "**Vente croisée et montée en gamme.** La vente croisée est une technique qui consiste à vendre un produit ou un service supplémentaire à un client existant ; la montée en gamme invite le client à prendre un article plus coûteux, une version supérieure ou des options. La première ajoute un article au ticket ; la seconde élève le prix d'un article. **Le lot.** La vente par lots propose plusieurs produits comme un seul ensemble. Son piège : un lot avec remise, vendu à des clients qui auraient pris les deux articles au prix normal, ne fait que baisser la marge. **Le seuil.** Un avantage à partir d'un montant, une livraison ou un petit cadeau, ne fonctionne que s'il est placé juste au-dessus du panier habituel.",
        "**Les articles de caisse.** Un achat d'impulsion est une décision d'achat non planifiée ; les confiseries sont mises bien en vue aux caisses pour le déclencher. Cela ajoute des articles, rarement beaucoup de valeur. **Le placement.** Un planogramme est un plan qui fixe la place de chaque produit sur les rayons ; mettre le rouleau à côté de la peinture se décide sur les tickets, pas sur l'intuition. **Ce que cette page ne traite pas.** Les remises, les codes et leur effet sur la marge sont dans [le moteur de promotions](" + L.promo + ") ; les points et les récompenses, dans [le programme de fidélité](" + L.fidelite + "). Ici, il s'agit de vendre un article de plus au prix normal.",
      ] },
      { heading: "Ce que le logiciel tient", body: [
        "La figure empile cinq couches ; la quatrième est la seule que le client voit.",
      ], visual: 'couches', after: [
        "**Les tickets.** Tout part d'eux, à condition qu'ils soient enregistrés ligne par ligne, avec l'article, la quantité, le prix, l'heure et la personne en caisse. Une caisse qui ne garde que le total ne permet rien de ce qui suit ; c'est le premier point du relevé, voir [le logiciel de supérette et de supermarché](" + L.superette + ") pour ce qu'une caisse doit enregistrer. **Les paires.** Elles se recalculent chaque mois : une association vraie en été ne l'est pas forcément en hiver. **Les règles.** Chaque suggestion est une règle écrite : l'article déclencheur, l'article proposé, la phrase, les dates, les magasins. On en lance trois ou quatre, pas quarante.",
        "**La caisse.** Au scan du pot de peinture, une ligne s'affiche : « Rouleau ? 450 DA ». Un geste pour l'ajouter, un geste pour dire non. La règle ne se déclenche pas si le rouleau est déjà sur le ticket. Un système de recommandation est un système de filtrage qui cherche à suggérer les articles les plus pertinents ; à la caisse, « pertinent » veut dire une seule proposition, la meilleure. **Hors ligne.** La caisse propose même sans réseau : les règles sont sur le poste. **La mesure.** Chaque proposition est enregistrée, acceptée ou non. Le taux d'acceptation par personne ne sert pas à classer l'équipe : il montre qui a trouvé la bonne phrase, pour la donner aux autres, dans l'esprit des [objectifs de vente](" + L.objectifs + ").",
      ] },
      { heading: "Le panier moyen, c'est deux chiffres", body: [
        "La figure décompose le chiffre d'affaires d'un mois.",
      ], visual: 'arbre', after: [
        "**La décomposition.** Le chiffre d'affaires est le produit du nombre de tickets par le panier moyen : 4 000 × 1 500 DA = 6 000 000 DA. Le panier est lui-même le produit du nombre d'articles par ticket par le prix moyen de l'article : 2,5 × 600 DA. Deux magasins peuvent avoir le même panier pour des raisons opposées : beaucoup de petits articles, ou peu d'articles coûteux. Le remède n'est pas le même. **Ce que vaut un dixième.** Si un ticket sur dix prend un article de plus, le nombre d'articles par ticket passe de 2,5 à 2,6, le panier à 1 560 DA, le chiffre à 6 240 000 DA : 240 000 DA de plus par mois.",
        "**Où regarder.** La répartition des tickets dit où se trouve la réserve : dans l'exemple, 38 % n'ont qu'un article. Un client qui en prend déjà cinq n'en prendra guère un sixième ; celui qui repart avec un seul pot a oublié quelque chose, ou l'achètera ailleurs. **Par qui, quand, où.** Le même chiffre se lit par magasin, par heure et par personne en caisse : un panier plus bas le samedi après-midi peut simplement dire que la file est trop longue pour proposer quoi que ce soit. **Avec la marge.** Un article de plus vendu au prix normal apporte sa marge entière ; c'est ce qui le distingue d'un client de plus obtenu par la publicité. Le calcul d'ensemble est celui de [l'analyse des ventes](" + L.ventes + ") et de [la rentabilité](" + L.rentab + ").",
      ] },
      { heading: "Les articles achetés ensemble", body: [
        "La figure lit trois paires dans les mêmes 4 000 tickets.",
      ], visual: 'paires', after: [
        "**L'analyse des paniers.** L'analyse d'affinité relève de la fouille de données : elle met au jour des corrélations significatives entre des éléments. Appliquée aux tickets, elle aide les commerçants à comprendre les habitudes d'achat, pour la vente croisée, la montée en gamme ou l'agencement du magasin. On parle de règles d'association. **Trois nombres.** La fréquence de la paire : 360 tickets sur 4 000, soit 9 %. La part : sur 800 tickets avec peinture, 360 ont un rouleau, soit 45 %. L'indice, souvent appelé lift : 45 % rapportés aux 12 % de tickets qui contiennent un rouleau, soit 3,75. Un acheteur de peinture prend un rouleau 3,75 fois plus souvent qu'un client quelconque.",
        "**Ceux qui repartent sans.** L'autre lecture est la plus utile : 440 acheteurs de peinture sur 800 n'ont pas pris de rouleau. Certains en ont un chez eux ; d'autres l'achèteront ailleurs. C'est à eux que la caisse le propose. **Ce que cela donne.** Avec une suggestion acceptée sur cinq, hypothèse à vérifier chez vous : 88 rouleaux, 128 rubans, 45 couteaux, soit 87 350 DA par mois pour trois règles. **Les biens complémentaires.** Un bien complémentaire est un bien dont l'attrait augmente avec le succès d'un autre : la paire a un sens que l'on peut expliquer au client. **Le stock.** Une règle qui marche vide le rayon des rouleaux : elle se relie au [réapprovisionnement](" + L.reappro + "). Pour un magasin de matériaux, voir aussi [le logiciel de quincaillerie](" + L.quincaillerie + ").",
      ] },
      { heading: "Une règle, de l'idée à la décision", body: [
        "La figure suit une règle en six temps ; le cinquième décide de tout.",
      ], visual: 'regle', after: [
        "**La phrase.** « Vous avez un rouleau ? » nomme l'article et donne une raison ; « Autre chose ? » ne propose rien. La phrase fait partie de la règle : elle s'affiche à la caisse, et elle se change quand elle ne prend pas. **Une seule proposition.** Deux suggestions sur le même ticket, et la file s'allonge ; la caisse retient la règle au meilleur indice. **Le témoin.** Un test A/B est une expérience aléatoire qui compare en général deux variantes. En magasin : la règle active dans un magasin et pas dans l'autre, ou une semaine sur deux, puis la comparaison des tickets qui contiennent l'article déclencheur.",
        "**Pourquoi un témoin.** Le panier peut monter seul à certaines périodes, avant une fête ou à la rentrée ; sans comparaison, on attribue à la règle ce qui vient du calendrier. **Trois chiffres par règle.** Les propositions faites, les propositions acceptées, la marge ajoutée. Une règle acceptée une fois sur vingt se retire ; une règle acceptée une fois sur trois dit que l'article devrait être en rayon, à côté du premier. **Le piège de la double promotion.** Mettre en promotion en même temps les deux articles d'une paire n'apporte pas de hausse sensible du revenu : qui achète l'un achète déjà l'autre. **Trois niveaux.** L'ajout d'une troisième option peu attirante peut changer la préférence entre les deux autres. À manier honnêtement : le but est que le client reparte avec ce qu'il lui faut.",
      ] },
      { heading: "Cinq semaines, dans l'exemple", body: [
        "Cinq semaines des tickets à la première règle mesurée, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine : vos tickets des douze derniers mois, votre caisse, vos rayons, vos marges. Si la caisse actuelle ne garde pas le détail des tickets, c'est par là que l'on commence. **Les paires.** Elles se lisent avec vous : certaines sont évidentes, d'autres surprennent, quelques-unes sont des hasards. **Les règles.** Trois à cinq pour commencer, sur les paires au meilleur indice et à la meilleure marge. **La caisse.** L'affichage s'ajoute à votre caisse si elle le permet, ou vient avec la nouvelle.",
        "**Ce qui reste après.** Un panier moyen décomposé, par magasin et par heure ; des paires recalculées chaque mois ; des règles datées et mesurées ; une équipe qui sait quoi proposer sans avoir à y penser. **Du marché ou sur mesure.** Certaines caisses du marché proposent des articles associés ; vérifiez qu'elles mesurent l'acceptation et qu'elles tirent les paires de vos tickets, pas d'une liste saisie à la main. Le sur-mesure se justifie quand il faut lire les tickets d'une caisse existante, relier plusieurs magasins, ou étendre les mêmes règles à la vente en ligne. Pour le prêt-à-porter, où l'on vend une taille et une couleur, voir [le logiciel de boutique](" + L.boutique + "). **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que la direction reçoit** : le panier moyen décomposé en articles par ticket et prix par article ; la répartition des tickets ; les paires du mois avec leur part et leur indice ; des règles de suggestion datées ; l'acceptation par règle, par magasin et par personne ; la marge ajoutée, contre un témoin.",
        "**Ce que le magasin ne fait plus** : demander à l'équipe de « proposer plus » sans dire quoi, placer les articles à l'intuition, faire une remise pour vendre ce qui se vendait déjà, juger une action sur l'impression d'une semaine.",
        "**Ce qui est mesuré** : articles par ticket ; prix moyen par article ; part des tickets à un seul article ; propositions faites et acceptées ; marge ajoutée par règle ; panier par magasin, par heure et par personne en caisse.",
        "**Ce que fait Symloop** : le relevé de vos tickets, le calcul des paires, l'écriture des premières règles avec vous, l'affichage à la caisse, hors ligne compris, le suivi de l'acceptation et le premier bilan contre un témoin.",
      ], faq: [
        { q: "Comment augmenter le panier moyen en magasin ?", a: "En faisant proposer par la caisse l'article que les tickets désignent : celui que beaucoup d'acheteurs du premier article prennent déjà, et que les autres oublient. Puis en mesurant ce qui est accepté, contre un témoin." },
        { q: "Comment calculer le panier moyen ?", a: "Chiffre d'affaires divisé par le nombre de tickets, sur la même période. Décomposez-le ensuite : articles par ticket, multipliés par le prix moyen de l'article. Les deux ne se travaillent pas de la même façon." },
        { q: "Comment augmenter le panier moyen sans faire de remises ?", a: "Par un article de plus au prix normal : suggestion à la caisse, articles associés placés côte à côte, seuil avec un avantage qui ne touche pas au prix. La remise fait monter le panier et baisser la marge." },
        { q: "Qu'est-ce que la vente additionnelle ?", a: "Vendre un article de plus au même client : c'est la vente croisée. La montée en gamme, elle, propose un modèle au-dessus. La première ajoute une ligne au ticket ; la seconde élève le prix d'une ligne." },
        { q: "Comment savoir quels produits proposer ensemble ?", a: "En lisant les tickets : pour chaque article, quels autres se retrouvent le plus souvent avec lui, et combien de fois plus que la moyenne. Les paires se recalculent chaque mois, parce qu'elles changent avec la saison." },
        { q: "Comment amener l'équipe en caisse à proposer ?", a: "En lui retirant le choix : la caisse affiche l'article et la phrase. Le taux d'acceptation par personne montre ensuite quelle phrase marche, pour la partager, pas pour classer l'équipe." },
        { q: "Les lots font-ils monter le panier ?", a: "Oui, s'ils réunissent des articles que le client n'aurait pas tous pris. Un lot avec remise sur deux articles que presque tout le monde achetait déjà ensemble ne fait que baisser la marge." },
        { q: "Comment mesurer si cela marche vraiment ?", a: "Avec un témoin : la règle active dans un magasin et pas dans l'autre, ou une semaine sur deux. On compare les tickets qui contiennent l'article déclencheur. Sans témoin, on mesure le calendrier." },
        { q: "Faut-il changer de caisse ?", a: "Pas toujours. Si la caisse enregistre les tickets ligne par ligne et permet d'afficher un message, les règles s'y ajoutent. Si elle ne garde que les totaux, il n'y a rien à lire : c'est le premier point à vérifier." },
        { q: "Combien de temps pour voir un résultat ?", a: "Cinq semaines dans l'exemple de cette page, relevé compris, jusqu'au premier bilan de trois à cinq règles. Le résultat se lit sur quelques semaines de tickets, pas sur un jour." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Celui qui repart avec un seul pot a oublié quelque chose, ou l'achètera ailleurs." },
      { after: 4, text: "Sans témoin, on mesure le calendrier." },
    ],
    cta: { eyebrow: "Dites-nous ce que vous vendez, dans combien de magasins, et ce que votre caisse enregistre aujourd'hui : nous commençons par lire vos tickets", title: "Autant de clients et le même chiffre, quatre tickets sur dix à un seul article, une équipe qui n'ose pas proposer, des remises qui mangent la marge, ou un magasin en Algérie que vous suivez depuis la France", body: "Symloop construit ce qui fait monter le panier sans remise : lecture des tickets, paires, règles de suggestion à la caisse et mesure contre un témoin. Décrivez-nous votre magasin, votre caisse, et l'article que vos clients oublient le plus souvent." },
    related: { label: 'À lire aussi', items: [
      { href: L.ventes, kind: '2027', name: "Comment analyser les ventes d'une entreprise" },
      { href: L.promo, kind: '2027', name: 'Moteur de promotions : règles, cumul, garde de marge' },
      { href: L.fidelite, kind: '2027', name: 'Programme de fidélité : points, caisse, relance' },
      { href: L.objectifs, kind: '2027', name: 'Comment fixer des objectifs de vente' },
    ] },
  },
  en: {
    kind: 'Average basket · Algeria · 2027', title: "How to raise the average basket in a shop in Algeria (2027): as many customers, the same revenue, four tickets in ten with a single item; items bought together, suggestion at the till, bundles, thresholds, and what we put in place",
    dek: "“I have two paint and decoration shops. As many people come in as before, but revenue does not move: customers take their tin of paint and leave, then buy the roller somewhere else the next day. At the till, the team does not dare to offer anything, or offers anything at all. How do you raise the average basket in a shop without giving discounts?” The average basket does not rise through instructions given to the team: it rises when the till knows which item to offer, to whom, and when you measure what comes of it.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Average basket', 'Items per ticket', 'Items bought together', 'Suggestion at the till', 'Measurement against a control', 'Algeria 2027'],
    intro: [
      "**Short answer.** The average basket breaks down into two figures: **the number of items per ticket** and **the average price per item**. To raise it without a discount, three things: **read in your tickets the items bought together**, and above all the customers who leave without the second one; **have the till offer that item**, at the moment the first is scanned, in one line; **measure** what is accepted, rule by rule, against a control shop or period. In this page's example, one more item on one ticket in ten is worth 4% of revenue, without one more customer.",
      "This page is for those who run a shop or a small chain, paint and decoration, DIY, cosmetics, phones, baby goods, sports goods, specialist food, and for those who own a shop in Algeria and follow it from France. The definitions come from public sources: affinity analysis, association rules, cross-selling, upselling, product bundling, impulse purchase, complementary goods, A/B testing, planogram. The shop, its 4,000 tickets and its prices are a constructed example; the amounts are fictitious. The page covers neither the rules on promotions and sales periods nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "Six levers, and the trap in each", body: [
        "The figure reviews six ways of raising the basket.",
      ], visual: 'leviers', after: [
        "**Cross-selling and trading up.** Cross-selling is a technique that consists of selling an additional product or service to an existing customer; upselling invites the customer to take a more expensive item, an upgrade or add-ons. The first adds an item to the ticket; the second raises the price of an item. **The bundle.** Product bundling offers several products as one combined package. Its trap: a discounted bundle, sold to customers who would have taken both items at the normal price, only lowers the margin. **The threshold.** A benefit from a given amount, a delivery or a small gift, only works if it is set just above the usual basket.",
        "**Till-side items.** An impulse purchase is an unplanned buying decision; sweets are displayed prominently at checkouts to trigger it. That adds items, rarely much value. **Placement.** A planogram is a plan that sets where each product sits on the shelves; putting the roller next to the paint is decided on tickets, not on intuition. **What this page does not cover.** Discounts, codes and their effect on margin are in [the promotions engine](" + L.promo + "); points and rewards, in [the loyalty programme](" + L.fidelite + "). Here, the point is to sell one more item at the normal price.",
      ] },
      { heading: "What the software holds", body: [
        "The figure stacks five layers; the fourth is the only one the customer sees.",
      ], visual: 'couches', after: [
        "**The tickets.** Everything starts from them, provided they are recorded line by line, with the item, the quantity, the price, the time and the person at the till. A till that keeps only the total allows none of what follows; it is the first point of the survey, see [the mini-market and supermarket software](" + L.superette + ") for what a till must record. **The pairs.** They are recalculated every month: an association that is true in summer is not necessarily true in winter. **The rules.** Each suggestion is a written rule: the trigger item, the item offered, the sentence, the dates, the shops. You launch three or four, not forty.",
        "**The till.** When the tin of paint is scanned, one line appears: “Roller? DA 450”. One gesture to add it, one gesture to say no. The rule does not fire if the roller is already on the ticket. A recommender system is a filtering system that aims to suggest the most relevant items; at the till, “relevant” means a single offer, the best one. **Offline.** The till offers even without a network: the rules are on the terminal. **Measurement.** Each offer is recorded, accepted or not. The acceptance rate per person is not there to rank the team: it shows who found the right sentence, so it can be given to the others, in the spirit of [sales targets](" + L.objectifs + ").",
      ] },
      { heading: "The average basket is two figures", body: [
        "The figure breaks down one month's revenue.",
      ], visual: 'arbre', after: [
        "**The breakdown.** Revenue is the number of tickets times the average basket: 4,000 × DA 1,500 = DA 6,000,000. The basket is itself the number of items per ticket times the average price of an item: 2.5 × DA 600. Two shops can have the same basket for opposite reasons: many small items, or few expensive ones. The remedy is not the same. **What a tenth is worth.** If one ticket in ten takes one more item, items per ticket go from 2.5 to 2.6, the basket to DA 1,560, revenue to DA 6,240,000: DA 240,000 more a month.",
        "**Where to look.** The split of tickets says where the reserve is: in the example, 38% have a single item. A customer who already takes five will hardly take a sixth; the one who leaves with a single tin has forgotten something, or will buy it elsewhere. **By whom, when, where.** The same figure is read per shop, per hour and per person at the till: a lower basket on Saturday afternoon may simply mean the queue is too long to offer anything. **With the margin.** One more item sold at the normal price brings its whole margin; that is what sets it apart from one more customer won through advertising. The overall calculation is that of [sales analysis](" + L.ventes + ") and [profitability](" + L.rentab + ").",
      ] },
      { heading: "The items bought together", body: [
        "The figure reads three pairs in the same 4,000 tickets.",
      ], visual: 'paires', after: [
        "**Basket analysis.** Affinity analysis belongs to data mining: it uncovers meaningful correlations between entities. Applied to tickets, it helps retailers understand buying behaviour, for cross-selling, upselling or shop layout. The usual name is association rules. **Three numbers.** The frequency of the pair: 360 tickets out of 4,000, that is 9%. The share: out of 800 tickets with paint, 360 have a roller, that is 45%. The index, often called lift: 45% set against the 12% of tickets that contain a roller, that is 3.75. A paint buyer takes a roller 3.75 times more often than any customer.",
        "**Those who leave without.** The other reading is the most useful: 440 paint buyers out of 800 did not take a roller. Some have one at home; others will buy it elsewhere. They are the ones the till offers it to. **What it gives.** With one suggestion in five accepted, an assumption to check in your shop: 88 rollers, 128 tapes, 45 knives, that is DA 87,350 a month for three rules. **Complementary goods.** A complementary good is one whose appeal grows with the popularity of another: the pair has a meaning that can be explained to the customer. **Stock.** A rule that works empties the roller shelf: it ties in with [replenishment](" + L.reappro + "). For a building-materials shop, see also [the hardware shop software](" + L.quincaillerie + ").",
      ] },
      { heading: "A rule, from idea to decision", body: [
        "The figure follows a rule in six steps; the fifth decides everything.",
      ], visual: 'regle', after: [
        "**The sentence.** “Do you have a roller?” names the item and gives a reason; “Anything else?” offers nothing. The sentence is part of the rule: it is shown at the till, and it is changed when it does not take. **A single offer.** Two suggestions on the same ticket, and the queue grows; the till keeps the rule with the best index. **The control.** An A/B test is a randomised experiment that usually compares two variants. In a shop: the rule active in one shop and not in the other, or every other week, then a comparison of the tickets that contain the trigger item.",
        "**Why a control.** The basket can rise on its own at certain times, before a holiday or at the start of the school year; without a comparison, you credit the rule with what comes from the calendar. **Three figures per rule.** Offers made, offers accepted, margin added. A rule accepted one time in twenty is withdrawn; a rule accepted one time in three says the item should be on the shelf, next to the first. **The double-promotion trap.** Putting both items of a pair on promotion at the same time does not bring a significant rise in revenue: whoever buys one already buys the other. **Three levels.** Adding a third, unattractive option can change the preference between the other two. To be handled honestly: the aim is that the customer leaves with what they need.",
      ] },
      { heading: "Five weeks, in the example", body: [
        "Five weeks from the tickets to the first measured rule, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week: your tickets of the last twelve months, your till, your shelves, your margins. If the current till does not keep ticket detail, that is where to start. **The pairs.** They are read with you: some are obvious, others surprise, a few are chance. **The rules.** Three to five to begin with, on the pairs with the best index and the best margin. **The till.** The display is added to your till if it allows it, or comes with the new one.",
        "**What remains afterwards.** An average basket broken down, per shop and per hour; pairs recalculated every month; dated and measured rules; a team that knows what to offer without having to think about it. **Off the shelf or custom.** Some tills on the market offer associated items; check that they measure acceptance and draw the pairs from your tickets, not from a list typed in by hand. Custom work is justified when the tickets of an existing till must be read, several shops tied together, or the same rules extended to online sales. For clothing, where a size and a colour are sold, see [the boutique software](" + L.boutique + "). **The durations** are those of a constructed example.",
      ], list: [
        "**What management receives**: the average basket broken down into items per ticket and price per item; the split of tickets; the month's pairs with their share and index; dated suggestion rules; acceptance per rule, per shop and per person; the margin added, against a control.",
        "**What the shop no longer does**: ask the team to “offer more” without saying what, place items by intuition, give a discount to sell what was selling anyway, judge an action on one week's impression.",
        "**What is measured**: items per ticket; average price per item; share of single-item tickets; offers made and accepted; margin added per rule; basket per shop, per hour and per person at the till.",
        "**What Symloop does**: the survey of your tickets, the calculation of pairs, writing the first rules with you, the display at the till, offline included, the tracking of acceptance and the first review against a control.",
      ], faq: [
        { q: "How do you raise the average basket in a shop?", a: "By having the till offer the item the tickets point to: the one many buyers of the first item already take, and the others forget. Then by measuring what is accepted, against a control." },
        { q: "How do you calculate the average basket?", a: "Revenue divided by the number of tickets, over the same period. Then break it down: items per ticket, times the average price of an item. The two are not worked on in the same way." },
        { q: "How do you raise the average basket without discounts?", a: "With one more item at the normal price: suggestion at the till, associated items placed side by side, a threshold with a benefit that does not touch the price. A discount raises the basket and lowers the margin." },
        { q: "What is add-on selling?", a: "Selling one more item to the same customer: that is cross-selling. Upselling, for its part, offers a model above. The first adds a line to the ticket; the second raises the price of a line." },
        { q: "How do you know which products to offer together?", a: "By reading the tickets: for each item, which others are most often found with it, and how many times more than average. Pairs are recalculated every month, because they change with the season." },
        { q: "How do you get the team at the till to offer?", a: "By taking the choice away from them: the till shows the item and the sentence. The acceptance rate per person then shows which sentence works, to share it, not to rank the team." },
        { q: "Do bundles raise the basket?", a: "Yes, if they bring together items the customer would not all have taken. A discounted bundle of two items that almost everyone already bought together only lowers the margin." },
        { q: "How do you measure whether it really works?", a: "With a control: the rule active in one shop and not in the other, or every other week. You compare the tickets that contain the trigger item. Without a control, you are measuring the calendar." },
        { q: "Do we have to change tills?", a: "Not always. If the till records tickets line by line and can display a message, the rules are added to it. If it keeps only totals, there is nothing to read: that is the first point to check." },
        { q: "How long before a result shows?", a: "Five weeks in this page's example, survey included, up to the first review of three to five rules. The result is read over a few weeks of tickets, not over one day." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "The one who leaves with a single tin has forgotten something, or will buy it elsewhere." },
      { after: 4, text: "Without a control, you are measuring the calendar." },
    ],
    cta: { eyebrow: "Tell us what you sell, in how many shops, and what your till records today: we start by reading your tickets", title: "As many customers and the same revenue, four tickets in ten with a single item, a team that does not dare to offer, discounts eating the margin, or a shop in Algeria that you follow from France", body: "Symloop builds what raises the basket without a discount: reading the tickets, pairs, suggestion rules at the till and measurement against a control. Describe your shop to us, your till, and the item your customers forget most often." },
    related: { label: 'Also read', items: [
      { href: L.ventes, kind: '2027', name: "How to analyse a company's sales" },
      { href: L.promo, kind: '2027', name: 'Promotions engine: rules, stacking, margin guard' },
      { href: L.fidelite, kind: '2027', name: 'Loyalty programme: points, till, follow-up' },
      { href: L.objectifs, kind: '2027', name: 'How to set sales targets' },
    ] },
  },
  ar: {
    kind: 'متوسط السلة · الجزائر · 2027', title: "كيف يُرفع متوسط السلة في المحل في الجزائر (2027): الزبائن أنفسهم، رقم الأعمال نفسه، وأربع تذاكر من كل عشر بسلعة واحدة؛ السلع التي تُشترى معاً، الاقتراح عند الصندوق، الحزم، العتبات، وما نضعه",
    dek: "«عندي محلان للطلاء والديكور. يدخل من الناس مثل ما كان يدخل، لكن رقم الأعمال لا يتحرك: الزبائن يأخذون علبة الطلاء ويغادرون، ثم يشترون الأسطوانة من مكان آخر في الغد. وعند الصندوق، الفريق لا يجرؤ على الاقتراح، أو يقترح أي شيء. كيف يُرفع متوسط السلة في المحل دون تخفيضات؟» متوسط السلة لا يصعد بتعليمات تُعطى للفريق: يصعد حين يعرف الصندوق أي سلعة يقترح، ولمن، وحين يُقاس ما ينتج عن ذلك.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['متوسط السلة', 'السلع في التذكرة', 'السلع التي تُشترى معاً', 'الاقتراح عند الصندوق', 'القياس مقابل شاهد', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** متوسط السلة يتفكك إلى رقمين: **عدد السلع في التذكرة** و**متوسط سعر السلعة**. ولرفعه دون تخفيض، ثلاثة أشياء: **أن تُقرأ في تذاكركم السلع التي تُشترى معاً**، وخصوصاً الزبائن الذين يغادرون دون الثانية؛ **أن يقترح الصندوق هذه السلعة**، لحظة مسح الأولى، في سطر واحد؛ و**أن يُقاس** ما يُقبل، قاعدة بقاعدة، مقابل محل أو فترة شاهدة. في مثال هذه الصفحة، سلعة إضافية في تذكرة من كل عشر تساوي 4 بالمئة من رقم الأعمال، دون زبون إضافي واحد.",
      "هذه الصفحة موجّهة إلى من يسيّر محلاً أو سلسلة صغيرة، طلاء وديكور، لوازم الأشغال، مستحضرات التجميل، الهواتف، لوازم الأطفال، لوازم الرياضة، أو تغذية متخصصة، وإلى من يملك محلاً في الجزائر ويتابعه من فرنسا. التعريفات من مصادر عمومية: تحليل التقارب، قواعد الارتباط، البيع المتقاطع، الارتقاء في الصنف، البيع بالحزم، الشراء الاندفاعي، السلع المتكاملة، الاختبار بنسختين، ومخطط الرفوف. والمحل وتذاكره الـ4000 وأسعاره مثال مركَّب؛ والمبالغ خيالية. والصفحة لا تتناول قواعد التخفيضات ومواسمها ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ست روافع، وفخّ كل واحدة", body: [
        "الشكل يستعرض ست طرق لرفع السلة.",
      ], visual: 'leviers', after: [
        "**البيع المتقاطع والارتقاء في الصنف.** البيع المتقاطع تقنية تتمثل في بيع منتوج أو خدمة إضافية لزبون موجود؛ والارتقاء في الصنف يدعو الزبون إلى أخذ سلعة أغلى، نسخة أعلى، أو إضافات. الأول يضيف سلعة إلى التذكرة؛ والثاني يرفع سعر سلعة. **الحزمة.** البيع بالحزم يعرض عدة منتجات كمجموعة واحدة. وفخّه: حزمة بتخفيض، تُباع لزبائن كانوا سيأخذون السلعتين بالسعر العادي، لا تفعل سوى إنزال الهامش. **العتبة.** مزية ابتداءً من مبلغ، توصيل أو هدية صغيرة، لا تنفع إلا إذا وُضعت فوق السلة المعتادة بقليل.",
        "**سلع الصندوق.** الشراء الاندفاعي قرار شراء غير مخطَّط؛ والحلويات تُوضع بارزة عند الصناديق لإثارته. وهذا يضيف سلعاً، ونادراً قيمة كبيرة. **الموضع.** مخطط الرفوف مخطط يحدد مكان كل منتوج على الرفوف؛ ووضع الأسطوانة بجانب الطلاء يُقرَّر على التذاكر، لا بالحدس. **ما لا تعالجه هذه الصفحة.** التخفيضات والرموز وأثرها على الهامش في [محرّك العروض الترويجية](" + L.promo + ")؛ والنقاط والمكافآت في [برنامج الوفاء](" + L.fidelite + "). وهنا، المقصود بيع سلعة إضافية بالسعر العادي.",
      ] },
      { heading: "ما يمسكه البرنامج", body: [
        "الشكل يرتّب خمس طبقات؛ والرابعة هي الوحيدة التي يراها الزبون.",
      ], visual: 'couches', after: [
        "**التذاكر.** كل شيء ينطلق منها، بشرط أن تُسجَّل سطراً بسطر، بالسلعة، الكمية، السعر، الساعة، والشخص عند الصندوق. وصندوق لا يحتفظ إلا بالمجموع لا يسمح بشيء مما يأتي؛ وهذه أول نقطة في المعاينة، انظر [برنامج السوبيرات والسوبرماركت](" + L.superette + ") لما يجب أن يسجّله الصندوق. **الثنائيات.** يُعاد حسابها كل شهر: ارتباط صحيح في الصيف ليس بالضرورة صحيحاً في الشتاء. **القواعد.** كل اقتراح قاعدة مكتوبة: السلعة المحرِّكة، السلعة المقترَحة، الجملة، التواريخ، والمحلات. ويُطلَق منها ثلاث أو أربع، لا أربعون.",
        "**الصندوق.** عند مسح علبة الطلاء، يظهر سطر: «أسطوانة؟ 450 دج». حركة لإضافتها، وحركة للرفض. والقاعدة لا تنطلق إذا كانت الأسطوانة في التذكرة من قبل. ونظام التوصية نظام تصفية يسعى إلى اقتراح السلع الأنسب؛ وعند الصندوق، «الأنسب» يعني اقتراحاً واحداً، الأفضل. **دون اتصال.** الصندوق يقترح حتى دون شبكة: القواعد على الجهاز. **القياس.** كل اقتراح يُسجَّل، قُبل أم لا. ونسبة القبول لكل شخص لا تصلح لترتيب الفريق: هي تبيّن من وجد الجملة الصحيحة، لتُعطى للآخرين، بروح [أهداف البيع](" + L.objectifs + ").",
      ] },
      { heading: "متوسط السلة رقمان", body: [
        "الشكل يفكك رقم أعمال شهر واحد.",
      ], visual: 'arbre', after: [
        "**التفكيك.** رقم الأعمال حاصل عدد التذاكر في متوسط السلة: " + I('4000 × 1500') + " دج، أي 6000000 دج. والسلة نفسها حاصل عدد السلع في التذكرة في متوسط سعر السلعة: " + I('2,5 × 600') + " دج. وقد يكون لمحلين متوسط السلة نفسه لسببين متعاكسين: سلع صغيرة كثيرة، أو سلع غالية قليلة. والعلاج ليس واحداً. **ما يساويه العُشر.** إذا أخذت تذكرة من كل عشر سلعة إضافية، انتقل عدد السلع في التذكرة من " + I('2,5') + " إلى " + I('2,6') + "، والسلة إلى 1560 دج، ورقم الأعمال إلى 6240000 دج: 240000 دج إضافية في الشهر.",
        "**أين يُنظر.** توزيع التذاكر يقول أين يوجد الاحتياط: في المثال، 38 بالمئة فيها سلعة واحدة. والزبون الذي يأخذ خمساً لن يأخذ سادسة في الغالب؛ والذي يغادر بعلبة واحدة نسي شيئاً، أو سيشتريه من مكان آخر. **من، متى، وأين.** الرقم نفسه يُقرأ لكل محل، لكل ساعة، ولكل شخص عند الصندوق: سلة أدنى بعد ظهر السبت قد تعني فقط أن الطابور أطول من أن يُقترَح فيه شيء. **مع الهامش.** سلعة إضافية تُباع بالسعر العادي تجلب هامشها كاملاً؛ وهذا ما يميّزها عن زبون إضافي يُكسَب بالإشهار. والحساب الشامل هو حساب [تحليل المبيعات](" + L.ventes + ") و[المردودية](" + L.rentab + ").",
      ] },
      { heading: "السلع التي تُشترى معاً", body: [
        "الشكل يقرأ ثلاث ثنائيات في التذاكر الـ4000 نفسها.",
      ], visual: 'paires', after: [
        "**تحليل السلال.** تحليل التقارب من التنقيب في البيانات: يكشف ارتباطات ذات معنى بين العناصر. وإذا طُبّق على التذاكر، ساعد التجار على فهم عادات الشراء، للبيع المتقاطع، الارتقاء في الصنف، أو تنظيم المحل. ويُتحدث عن قواعد الارتباط. **ثلاثة أعداد.** تكرار الثنائية: 360 تذكرة من 4000، أي 9 بالمئة. النسبة: من 800 تذكرة فيها طلاء، 360 فيها أسطوانة، أي 45 بالمئة. والمؤشر، المسمى غالباً " + I('lift') + ": 45 بالمئة منسوبة إلى 12 بالمئة من التذاكر التي فيها أسطوانة، أي " + I('3,75') + ". مشتري الطلاء يأخذ أسطوانة " + I('3,75') + " مرة أكثر من أي زبون.",
        "**الذين يغادرون دونها.** القراءة الأخرى هي الأنفع: 440 مشترياً للطلاء من 800 لم يأخذوا أسطوانة. بعضهم عنده واحدة في البيت؛ وآخرون سيشترونها من مكان آخر. ولهؤلاء يقترحها الصندوق. **ما ينتج عن ذلك.** باقتراح مقبول من كل خمسة، وهي فرضية تُراجَع عندكم: 88 أسطوانة، 128 شريطاً، و45 سكيناً، أي 87350 دج في الشهر لثلاث قواعد. **السلع المتكاملة.** السلعة المتكاملة سلعة يزيد إقبال الناس عليها مع رواج سلعة أخرى: للثنائية معنى يمكن شرحه للزبون. **المخزون.** القاعدة التي تنجح تفرغ رف الأسطوانات: فتُربط بـ[إعادة التموين](" + L.reappro + "). ولمحل مواد البناء، انظر كذلك [برنامج محل الخردوات](" + L.quincaillerie + ").",
      ] },
      { heading: "قاعدة، من الفكرة إلى القرار", body: [
        "الشكل يتابع قاعدة في ست مراحل؛ والخامسة تحسم كل شيء.",
      ], visual: 'regle', after: [
        "**الجملة.** «هل عندكم أسطوانة؟» تسمّي السلعة وتعطي سبباً؛ و«شيء آخر؟» لا تقترح شيئاً. والجملة جزء من القاعدة: تظهر عند الصندوق، وتُغيَّر حين لا تنفع. **اقتراح واحد.** اقتراحان في التذكرة نفسها، فيطول الطابور؛ والصندوق يحتفظ بالقاعدة ذات المؤشر الأفضل. **الشاهد.** الاختبار بنسختين، أي " + I('A/B') + "، تجربة عشوائية تقارن في العادة بين نسختين. وفي المحل: القاعدة مفعَّلة في محل دون الآخر، أو أسبوعاً من كل اثنين، ثم مقارنة التذاكر التي فيها السلعة المحرِّكة.",
        "**لماذا شاهد.** قد تصعد السلة وحدها في فترات معيّنة، قبل عيد أو عند الدخول المدرسي؛ ودون مقارنة، يُنسب إلى القاعدة ما يأتي من الرزنامة. **ثلاثة أرقام لكل قاعدة.** الاقتراحات المقدَّمة، الاقتراحات المقبولة، والهامش المضاف. قاعدة تُقبل مرة من كل عشرين تُسحب؛ وقاعدة تُقبل مرة من كل ثلاث تقول إن السلعة يجب أن تكون في الرف، بجانب الأولى. **فخّ التخفيض المزدوج.** وضع سلعتي ثنائية في تخفيض في الوقت نفسه لا يجلب ارتفاعاً محسوساً في الإيراد: من يشتري الواحدة يشتري الأخرى من قبل. **ثلاثة مستويات.** إضافة خيار ثالث قليل الجاذبية قد تغيّر التفضيل بين الاثنين الآخرين. ويُستعمل ذلك بنزاهة: الغاية أن يغادر الزبون بما يحتاجه.",
      ] },
      { heading: "خمسة أسابيع، في المثال", body: [
        "خمسة أسابيع من التذاكر إلى أول قاعدة مقيسة، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع: تذاكركم للاثني عشر شهراً الأخيرة، صندوقكم، رفوفكم، وهوامشكم. وإذا كان الصندوق الحالي لا يحتفظ بتفصيل التذاكر، فمن هناك يُبدأ. **الثنائيات.** تُقرأ معكم: بعضها بديهي، بعضها يفاجئ، وقليل منها صدفة. **القواعد.** ثلاث إلى خمس للبدء، على الثنائيات ذات المؤشر الأفضل والهامش الأفضل. **الصندوق.** العرض يُضاف إلى صندوقكم إذا سمح بذلك، أو يأتي مع الجديد.",
        "**ما يبقى بعد ذلك.** متوسط سلة مفكَّك، لكل محل ولكل ساعة؛ ثنائيات يُعاد حسابها كل شهر؛ قواعد مؤرَّخة ومقيسة؛ وفريق يعرف ماذا يقترح دون أن يفكر. **جاهز أو على المقاس.** بعض الصناديق في السوق تقترح سلعاً مرتبطة؛ راجعوا أنها تقيس القبول وأنها تستخرج الثنائيات من تذاكركم، لا من قائمة تُدخَل باليد. والعمل على المقاس يُبرَّر حين يجب قراءة تذاكر صندوق موجود، ربط عدة محلات، أو مدّ القواعد نفسها إلى البيع عبر الإنترنت. وللملابس الجاهزة، حيث يُباع مقاس ولون، انظر [برنامج محل الملابس](" + L.boutique + "). **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقاه الإدارة**: متوسط السلة مفكَّكاً إلى سلع في التذكرة وسعر للسلعة؛ توزيع التذاكر؛ ثنائيات الشهر بنسبتها ومؤشرها؛ قواعد اقتراح مؤرَّخة؛ القبول لكل قاعدة، لكل محل، ولكل شخص؛ والهامش المضاف، مقابل شاهد.",
        "**ما لا يفعله المحل بعد الآن**: مطالبة الفريق بـ«اقتراح أكثر» دون قول ماذا، وضع السلع بالحدس، تقديم تخفيض لبيع ما كان يُباع أصلاً، والحكم على عمل بانطباع أسبوع.",
        "**ما يُقاس**: السلع في التذكرة؛ متوسط سعر السلعة؛ نسبة التذاكر ذات السلعة الواحدة؛ الاقتراحات المقدَّمة والمقبولة؛ الهامش المضاف لكل قاعدة؛ والسلة لكل محل، لكل ساعة، ولكل شخص عند الصندوق.",
        "**ما تفعله Symloop**: معاينة تذاكركم، حساب الثنائيات، كتابة القواعد الأولى معكم، العرض عند الصندوق، دون اتصال كذلك، متابعة القبول، وأول حصيلة مقابل شاهد.",
      ], faq: [
        { q: "كيف يُرفع متوسط السلة في المحل؟", a: "بأن يقترح الصندوق السلعة التي تدلّ عليها التذاكر: التي يأخذها كثير من مشتري السلعة الأولى من قبل، وينساها الآخرون. ثم بقياس ما يُقبل، مقابل شاهد." },
        { q: "كيف يُحسب متوسط السلة؟", a: "رقم الأعمال مقسوماً على عدد التذاكر، في الفترة نفسها. ثم يُفكَّك: السلع في التذكرة، مضروبة في متوسط سعر السلعة. والاثنان لا يُشتغل عليهما بالطريقة نفسها." },
        { q: "كيف يُرفع متوسط السلة دون تخفيضات؟", a: "بسلعة إضافية بالسعر العادي: اقتراح عند الصندوق، سلع مرتبطة توضع جنباً إلى جنب، وعتبة بمزية لا تمسّ السعر. التخفيض يرفع السلة وينزل الهامش." },
        { q: "ما هو البيع الإضافي؟", a: "بيع سلعة إضافية للزبون نفسه: هذا هو البيع المتقاطع. أما الارتقاء في الصنف فيقترح الموديل الأعلى. الأول يضيف سطراً إلى التذكرة؛ والثاني يرفع سعر سطر." },
        { q: "كيف يُعرف أي المنتجات تُقترح معاً؟", a: "بقراءة التذاكر: لكل سلعة، أي السلع الأخرى توجد معها أكثر، وكم مرة أكثر من المتوسط. والثنائيات يُعاد حسابها كل شهر، لأنها تتغير مع الموسم." },
        { q: "كيف يُدفع الفريق عند الصندوق إلى الاقتراح؟", a: "بسحب الاختيار منه: الصندوق يعرض السلعة والجملة. ثم تبيّن نسبة القبول لكل شخص أي جملة تنفع، لتُتقاسم، لا لترتيب الفريق." },
        { q: "هل ترفع الحزم السلة؟", a: "نعم، إذا جمعت سلعاً لم يكن الزبون ليأخذها كلها. وحزمة بتخفيض على سلعتين كان يشتريهما معاً تقريباً كل الناس لا تفعل سوى إنزال الهامش." },
        { q: "كيف يُقاس أن ذلك ينفع فعلاً؟", a: "بشاهد: القاعدة مفعَّلة في محل دون الآخر، أو أسبوعاً من كل اثنين. وتُقارَن التذاكر التي فيها السلعة المحرِّكة. ودون شاهد، تُقاس الرزنامة." },
        { q: "هل يجب تغيير الصندوق؟", a: "ليس دائماً. إذا كان الصندوق يسجّل التذاكر سطراً بسطر ويسمح بعرض رسالة، أُضيفت القواعد إليه. وإذا كان لا يحتفظ إلا بالمجاميع، فلا شيء يُقرأ: وهذه أول نقطة تُراجَع." },
        { q: "كم من الوقت لرؤية نتيجة؟", a: "خمسة أسابيع في مثال هذه الصفحة، المعاينة منها، حتى أول حصيلة لثلاث إلى خمس قواعد. والنتيجة تُقرأ على أسابيع من التذاكر، لا على يوم." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "الذي يغادر بعلبة واحدة نسي شيئاً، أو سيشتريه من مكان آخر." },
      { after: 4, text: "دون شاهد، تُقاس الرزنامة." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا تبيعون، في كم محل، وماذا يسجّل صندوقكم اليوم: نبدأ بقراءة تذاكركم", title: "الزبائن أنفسهم ورقم الأعمال نفسه، أربع تذاكر من كل عشر بسلعة واحدة، فريق لا يجرؤ على الاقتراح، تخفيضات تأكل الهامش، أو محل في الجزائر تتابعونه من فرنسا", body: "Symloop تبني ما يرفع السلة دون تخفيض: قراءة التذاكر، الثنائيات، قواعد الاقتراح عند الصندوق، والقياس مقابل شاهد. صِفوا لنا محلكم، صندوقكم، والسلعة التي ينساها زبائنكم أكثر." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.ventes, kind: '2027', name: 'كيف تُحلَّل مبيعات المؤسسة' },
      { href: L.promo, kind: '2027', name: 'محرّك العروض الترويجية: القواعد، الجمع، وحماية الهامش' },
      { href: L.fidelite, kind: '2027', name: 'برنامج الوفاء: النقاط، الصندوق، والتذكير' },
      { href: L.objectifs, kind: '2027', name: 'كيف تُحدَّد أهداف البيع' },
    ] },
  },
};

const KEYWORDS = "comment augmenter le panier moyen en magasin, comment augmenter le panier moyen, comment calculer le panier moyen, augmenter le panier moyen sans remise, vente additionnelle, vente croisée, articles achetés ensemble, suggestion à la caisse, panier moyen algérie 2027, how to increase average basket in store, average transaction value, cross-selling at the till, market basket analysis, items bought together, كيف يُرفع متوسط السلة, متوسط السلة في المحل, البيع المتقاطع, السلع التي تُشترى معاً, الاقتراح عند الصندوق, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
