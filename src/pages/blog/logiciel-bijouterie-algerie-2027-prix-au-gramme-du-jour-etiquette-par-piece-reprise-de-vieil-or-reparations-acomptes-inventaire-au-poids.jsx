import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-bijouterie-algerie-2027-prix-au-gramme-du-jour-etiquette-par-piece-reprise-de-vieil-or-reparations-acomptes-inventaire-au-poids.mjs';

const SLUG = 'logiciel-bijouterie-algerie-2027-prix-au-gramme-du-jour-etiquette-par-piece-reprise-de-vieil-or-reparations-acomptes-inventaire-au-poids';
const FIGURES = ['couches', 'etiquette', 'vente', 'plateau', 'comptoir', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  serie: '/blog/l-appareil-revient-en-panne-et-personne-ne-sait-si-on-l-a-vendu-numero-de-serie-application-algerie-2027-garantie-reparation-retour-fournisseur/',
  caisse: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  etiquettes: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  france: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/',
  soustraitance: '/blog/le-sous-traitant-a-livre-en-retard-et-on-l-a-paye-quand-meme-sous-traitance-application-algerie-2027-ordres-matieres-confiees-reception-facture/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel bijouterie · Algérie · 2027', title: "Logiciel bijouterie en Algérie (2027) : mille étiquettes à refaire quand l'or bouge, des acomptes et des réparations sur des carnets, un inventaire qu'on ne fait qu'une fois l'an ; prix du gramme du jour, fiche par pièce, reprise de vieil or, et ce qu'on met en place",
    dek: "« J'ai une bijouterie, avec plus de six cents pièces en vitrine. Quand l'or monte, je refais les étiquettes à la main, et je ne suis jamais sûr de vendre au bon prix. Les acomptes, les réparations et le vieil or que je reprends sont dans trois carnets. Des pièces qu'un fournisseur m'a confiées sont mélangées aux miennes. Et l'inventaire, je le fais une fois par an, en fermant deux jours. Existe-t-il un logiciel pour une bijouterie ? » Une bijouterie ne vend pas des articles : elle vend des grammes, à un prix qui change, sur des pièces toutes différentes. Une caisse ordinaire ne connaît ni le poids, ni le titre, ni le cours du jour.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel bijouterie', 'Prix au gramme du jour', 'Fiche par pièce', 'Reprise de vieil or', 'Inventaire au scan et au poids', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de bijouterie tient cinq choses : **la pièce**, une fiche par bijou avec son poids, son titre et sa façon ; **le prix du jour**, un prix du gramme par titre saisi chaque matin ; **le comptoir**, avec la reprise de vieil or, les acomptes et les commandes ; **l'atelier**, pour les réparations et les pièces confiées ; **le contrôle**, un inventaire au scan et au poids. Deux mécanismes font l'essentiel : **le prix calculé à la vente**, poids multiplié par le prix du gramme plus la façon, pour ne plus refaire d'étiquettes ; **le comptage par plateau**, qui dit quelle pièce manque, et non qu'il « manque quelque chose ».",
      "Cette page s'adresse à celles et ceux qui tiennent une bijouterie, une ou plusieurs boutiques, un atelier de fabrication ou un commerce de gros de bijoux, et à celles et ceux qui en possèdent une en Algérie et la suivent depuis la France. Les définitions viennent de sources publiques : titre et carat, poinçon, essai des métaux, cours de l'or, dépôt-vente, carat des pierres, inventaire physique. Le bracelet, le plateau et tous les prix sont un exemple construit ; les montants sont fictifs et ne reflètent pas le cours réel. La page ne traite ni du poinçonnage et de la garantie, ni des obligations liées au commerce des métaux précieux, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce que tient un logiciel de bijouterie", body: [
        "La figure empile cinq couches ; la première porte toutes les autres.",
      ], visual: 'couches', after: [
        "**Une fiche par pièce.** Dans la plupart des commerces, un article se compte : il en reste douze. En bijouterie, deux bagues du même modèle n'ont pas le même poids, donc pas le même prix : chaque pièce a sa fiche, son numéro, sa photo, son étiquette. C'est la logique du suivi unitaire décrit dans [le numéro de série](" + L.serie + "), appliquée à des grammes. **Le titre.** Le titre d'un objet en métal précieux exprime le poids de métal fin qu'il contient. Le carat le mesure en parts sur vingt-quatre : 18 carats, c'est 18/24, soit 75 % d'or, noté 750 ; 22 carats se note 916, et 24 carats, 999. **À ne pas confondre.** Le carat des pierres est une unité de masse, 200 milligrammes : c'est un autre usage du même mot.",
        "**Le poinçon.** Un poinçon est une marque officielle frappée sur un objet en métal, le plus souvent pour certifier sa teneur en métal noble ; l'essai est l'analyse qui établit cette teneur. La fiche note le titre ; les règles du poinçonnage relèvent de l'administration, pas de cette page. **L'étiquette.** Elle porte un code à scanner, le poids et la référence, pas de prix, voir [l'impression d'étiquettes](" + L.etiquettes + ") pour les petits formats. **Les pierres.** Une pièce peut porter une valeur de pierres et une façon propre : ce sont deux lignes de plus sur la fiche, pas un prix global où l'on ne retrouve plus rien. **Ce que cette page ne traite pas.** La caisse et ses écarts sont dans [les sessions de caisse](" + L.caisse + ") ; le stock par mouvements, dans [le stock juste](" + L.stock + ").",
      ] },
      { heading: "Le prix du jour : un poids, un cours, une façon", body: [
        "La figure calcule le prix d'un bracelet, puis le suit sur trente jours.",
      ], visual: 'etiquette', after: [
        "**Le calcul.** Poids multiplié par le prix du gramme du jour, plus la façon. Pour le bracelet : 12,4 g × 20 000 DA = 248 000 DA d'or, 12,4 g × 2 500 DA = 31 000 DA de façon, soit 279 000 DA. Le lendemain, si le gramme passe à 20 300 DA, le même bracelet vaut 282 720 DA sans que personne ait touché à l'étiquette. **Pourquoi le cours bouge.** Le prix de l'or se cote sur des marchés internationaux, en dollars par once troy, avec depuis longtemps Londres pour référence ; ce marché est soumis à la spéculation et à la volatilité, comme les autres. Chaque boutique en tire son prix du gramme, selon ses achats et sa place : c'est ce chiffre, le vôtre, que l'on saisit le matin.",
        "**Un chiffre, pas mille.** Un prix du gramme par titre : toutes les pièces de ce titre sont recalculées. **Le prix expliqué.** La cliente ou le client voit le détail : poids, titre, prix du gramme, façon. Un prix que l'on peut expliquer se discute moins. **La remise.** Elle porte sur la façon, pas sur l'or : le logiciel garde un plancher, le coût de l'or au cours du jour, en dessous duquel la vente demande un accord. Qui a changé un prix ou accordé une remise se lit dans [le journal d'audit](" + L.roles + "). **La valeur du stock.** Elle bouge chaque matin avec le cours : sur 3 kg d'or, 1 500 DA de plus par gramme font 4 500 000 DA. C'est une lecture de gestion ; son traitement comptable relève de votre comptable.",
      ] },
      { heading: "Une vente avec reprise de vieil or", body: [
        "La figure suit une vente en six temps.",
      ], visual: 'vente', after: [
        "**La reprise.** C'est le temps accentué. La cliente apporte une chaîne ancienne : elle est pesée devant elle, son titre est noté, et sa valeur, au prix de reprise du jour, vient en déduction. Dans l'exemple : 8 g repris à 17 000 DA le gramme, soit 136 000 DA ; pour le bracelet à 279 000 DA, il reste 143 000 DA à régler. **Deux mouvements.** Une vente et une entrée : le vieil or entre dans un stock à part, au poids, en attendant la fonte ou la revente. Sans cela, le poids d'or réellement présent dans la boutique n'est plus connu au bout d'un mois.",
        "**L'acompte.** La parure réservée pour un mariage se paie souvent en plusieurs fois. La règle doit être écrite sur le reçu : le prix est-il figé au jour de la réservation, ou recalculé au jour du retrait ? Les deux se pratiquent ; ce qui ne peut pas durer, c'est de ne pas l'avoir dit. Les échéances se suivent comme dans [le crédit client](" + L.credit + "). **Le reçu.** Poids, titre, prix du gramme, façon, reprise, acompte, reste dû : tout ce qui permettra, dans deux ans, de savoir ce qui a été vendu. **La commande sur mesure.** Un dessin, un poids estimé, un acompte ; à la livraison, le poids réel remplace l'estimation et le solde se recalcule.",
      ] },
      { heading: "L'inventaire, plateau par plateau", body: [
        "La figure compte un plateau de 24 bagues de deux façons.",
      ], visual: 'plateau', after: [
        "**Deux comptes.** Un inventaire physique est la vérification des quantités et de l'état des articles détenus. En bijouterie, il se fait deux fois d'un coup : chaque étiquette est scannée, puis le plateau est pesé. Dans l'exemple : 24 pièces et 186,4 g attendus, 23 pièces et 178,1 g trouvés. L'écart, 8,3 g, correspond à une bague, dont la fiche donne le dernier mouvement : sortie en essayage la veille. **Pourquoi les deux.** Le scan seul ne voit pas une pièce échangée contre une plus légère ; la balance seule ne dit pas laquelle manque.",
        "**Chaque jour, un peu.** Un plateau le matin avant l'ouverture, à tour de rôle : la vitrine entière est recomptée régulièrement sans fermer. **Les sorties d'essayage.** Une pièce sortie du plateau est scannée, et rescannée à son retour ; une pièce dehors depuis trop longtemps s'affiche. **Le coffre.** Le soir, les plateaux rentrent au coffre par numéro ; le matin, ils en sortent de même. **Plusieurs boutiques.** Un transfert est une sortie ici et une entrée là, au gramme près, visible de loin comme dans [la gestion d'un commerce depuis la France](" + L.france + ").",
      ] },
      { heading: "Six situations du comptoir", body: [
        "La figure met en regard six situations, ce qui se perd, et ce que garde le logiciel.",
      ], visual: 'comptoir', after: [
        "**Les réparations.** Un collier laissé pour une soudure est un objet qui n'appartient pas à la boutique : il entre avec un reçu, son poids, son état, une photo, une date promise, et il sort contre ce reçu. Le poids noté à l'entrée évite la discussion à la sortie. **Les pièces confiées.** Le dépôt-vente est un arrangement où le déposant garde la pleine propriété de la marchandise jusqu'à sa vente au client final : il transfère la possession, pas la propriété. Les pièces qu'un fournisseur vous confie vivent donc dans un stock à part ; vendues, elles créent une dette envers lui ; invendues, elles repartent, pièce par pièce.",
        "**L'or confié à l'atelier.** À l'inverse, l'or que vous remettez à un artisan pour fabrication reste le vôtre : poids remis, poids rendu en pièces, perte admise, façon due. C'est le suivi des matières confiées décrit dans [la sous-traitance](" + L.soustraitance + "). **Ce qu'une caisse ordinaire ne sait pas faire.** Elle vend un article à un prix. Elle ne sait ni peser une reprise, ni figer un prix sur un acompte, ni distinguer ce qui est à vous de ce qui vous est confié. **La confiance.** Dans un commerce où une pièce tient dans la main, savoir qui a ouvert quel plateau et qui a modifié quelle fiche protège d'abord l'équipe.",
      ] },
      { heading: "Six semaines, dans l'exemple", body: [
        "Six semaines pour une boutique, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine avec vous : vos pièces, vos titres, votre façon de fixer le prix, vos carnets d'acomptes et de réparations. **La mise en fiche.** Plateau par plateau, boutique ouverte : chaque pièce est pesée, photographiée, étiquetée. C'est le gros du travail, et c'est aussi votre premier inventaire complet. **Le prix du jour.** Dès que les fiches existent, le calcul à la vente remplace les étiquettes de prix. **Les carnets.** Acomptes, réparations et reprises en cours sont repris un par un, avec leur reçu.",
        "**Ce qui reste après.** Une fiche par pièce, un prix recalculé chaque matin, des reçus détaillés, un stock en pièces et en grammes, des plateaux recomptés à tour de rôle. **Du marché ou sur mesure.** Des logiciels existent pour la bijouterie ; vérifiez qu'ils calculent le prix au gramme du jour, qu'ils pèsent les reprises et qu'ils séparent les pièces confiées. Le sur-mesure se justifie quand vous avez vos règles, plusieurs titres et façons, un atelier, plusieurs boutiques, ou une vente en ligne à relier au même stock. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que la direction reçoit** : une fiche par pièce avec poids, titre, façon et photo ; un prix calculé au gramme du jour ; des reçus détaillés ; les reprises de vieil or pesées et stockées à part ; les acomptes, commandes et réparations avec leur échéance ; un inventaire par plateau au scan et au poids ; la valeur du stock au cours du jour.",
        "**Ce que la boutique ne fait plus** : refaire les étiquettes quand l'or bouge, vendre au prix du mois dernier, chercher un acompte dans un carnet, mélanger ses pièces et celles qu'on lui a confiées, fermer deux jours pour compter.",
        "**Ce qui est mesuré** : poids d'or en stock par titre ; valeur au cours du jour ; pièces et grammes vendus ; façon moyenne par gramme ; reprises en grammes ; acomptes en cours ; réparations en retard ; écarts par plateau.",
        "**Ce que fait Symloop** : le relevé avec vous, les fiches et les étiquettes, le calcul du prix du jour, la caisse avec reprise, acompte et commande, le suivi des réparations et des pièces confiées, l'inventaire au scan et au poids, puis la reprise de vos carnets en cours.",
      ], faq: [
        { q: "Existe-t-il un logiciel pour une bijouterie ?", a: "Oui. Il doit suivre chaque pièce avec son poids et son titre, calculer le prix au gramme du jour, peser les reprises de vieil or, tenir acomptes, commandes et réparations, et compter le stock en pièces et en grammes." },
        { q: "Comment calculer le prix d'un bijou en or ?", a: "Poids multiplié par le prix du gramme du jour pour son titre, plus la façon, plus la valeur des pierres s'il y en a. Dans l'exemple : 12,4 g × 20 000 DA + 12,4 g × 2 500 DA = 279 000 DA." },
        { q: "Comment gérer le stock d'une bijouterie ?", a: "Pièce par pièce, pas en quantités : une fiche et une étiquette par bijou, et un stock lu à la fois en nombre de pièces et en grammes par titre. Le vieil or repris et les pièces confiées vivent dans des stocks à part." },
        { q: "Que faire quand le prix de l'or change ?", a: "Changer un seul chiffre : le prix du gramme par titre. Toutes les pièces sont recalculées à la vente, parce que l'étiquette porte un poids et non un prix." },
        { q: "Comment gérer la reprise de vieil or ?", a: "La pièce reprise est pesée, son titre noté, sa valeur déduite de la vente. Elle entre dans un stock à part, au poids. Le reçu garde le détail, pour la cliente ou le client comme pour vous." },
        { q: "Comment gérer les acomptes et les commandes ?", a: "Chaque acompte est rattaché à une pièce ou à une commande, avec une règle écrite : prix figé au jour de la réservation, ou recalculé au retrait. Les échéances et le reste dû se lisent à l'écran." },
        { q: "Comment suivre les réparations ?", a: "Chaque objet déposé reçoit un reçu avec son poids, son état, une photo et une date promise. Il n'entre pas dans votre stock : il est suivi à part et ne sort que contre son reçu." },
        { q: "Comment faire l'inventaire sans fermer la boutique ?", a: "Plateau par plateau, le matin : chaque étiquette est scannée, puis le plateau est pesé. Les deux comptes doivent s'accorder ; sinon, le logiciel dit quelle pièce manque." },
        { q: "Que veut dire 18 carats ?", a: "C'est un titre : 18 parts d'or sur 24, soit 75 %, noté 750. Le carat des pierres est autre chose : une unité de masse de 200 milligrammes." },
        { q: "Combien de temps pour équiper une bijouterie ?", a: "Six semaines dans l'exemple de cette page, relevé compris. Le plus long est la mise en fiche des pièces, plateau par plateau, qui fait aussi office de premier inventaire complet." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "L'étiquette porte un poids, pas un prix." },
      { after: 3, text: "Le scan seul ne voit pas une pièce échangée contre une plus légère ; la balance seule ne dit pas laquelle manque." },
    ],
    cta: { eyebrow: "Dites-nous combien de pièces vous avez, dans combien de boutiques, et comment vous fixez le prix aujourd'hui : nous commençons par une semaine avec vous", title: "Étiquettes à refaire quand l'or bouge, acomptes et réparations sur des carnets, vieil or repris sans trace, pièces confiées mélangées aux vôtres, inventaire une fois l'an, ou bijouterie en Algérie que vous suivez depuis la France", body: "Symloop construit ce qui tient une bijouterie : fiche par pièce, prix au gramme du jour, reprise, acomptes, réparations, inventaire au scan et au poids. Décrivez-nous votre boutique, vos titres, et le carnet que vous aimeriez ne plus tenir." },
    related: { label: 'À lire aussi', items: [
      { href: L.serie, kind: '2027', name: 'Numéro de série : garantie, réparation, retour fournisseur' },
      { href: L.caisse, kind: '2027', name: 'Sessions de caisse : comptage, écart, dépôt en banque' },
      { href: L.stock, kind: '2027', name: 'Stock juste : journal de mouvements, inventaire tournant' },
      { href: L.france, kind: '2027', name: 'Gérer son commerce en Algérie depuis la France' },
    ] },
  },
  en: {
    kind: 'Jewellery shop software · Algeria · 2027', title: "Jewellery shop software in Algeria (2027): a thousand tags to redo when gold moves, deposits and repairs in notebooks, a stock count done once a year; gram price of the day, one record per piece, old gold trade-in, and what we put in place",
    dek: "“I have a jewellery shop, with more than six hundred pieces on display. When gold rises, I redo the tags by hand, and I am never sure I am selling at the right price. Deposits, repairs and the old gold I take back are in three notebooks. Pieces a supplier left with me are mixed in with my own. And I count stock once a year, closing for two days. Is there software for a jewellery shop?” A jewellery shop does not sell items: it sells grams, at a price that changes, on pieces that are all different. An ordinary till knows neither the weight, nor the fineness, nor the day's price.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Jewellery shop software', 'Gram price of the day', 'One record per piece', 'Old gold trade-in', 'Stock count by scan and by weight', 'Algeria 2027'],
    intro: [
      "**Short answer.** Jewellery shop software holds five things: **the piece**, one record per item with its weight, fineness and making charge; **the price of the day**, a gram price per fineness entered every morning; **the counter**, with old gold trade-in, deposits and orders; **the workshop**, for repairs and pieces left in your care; **control**, a count by scan and by weight. Two mechanisms do most of the work: **the price calculated at the sale**, weight times the gram price plus the making charge, so tags never need redoing; **the count per tray**, which says which piece is missing, and not that “something is missing”.",
      "This page is for those who run a jewellery shop, one or several, a manufacturing workshop or a jewellery wholesale business, and for those who own one in Algeria and follow it from France. The definitions come from public sources: fineness and karat, hallmark, metal assay, gold price, consignment, gemstone carat, stock-taking. The bracelet, the tray and all the prices are a constructed example; the amounts are fictitious and do not reflect the real price. The page covers neither hallmarking and guarantee, nor obligations tied to trading precious metals, nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What jewellery shop software holds", body: [
        "The figure stacks five layers; the first carries all the others.",
      ], visual: 'couches', after: [
        "**One record per piece.** In most shops, an item is counted: twelve are left. In jewellery, two rings of the same model do not weigh the same, so they do not cost the same: each piece has its record, its number, its photo, its tag. It is the logic of unit tracking described in [the serial number page](" + L.serie + "), applied to grams. **Fineness.** The fineness of a precious-metal object expresses the weight of fine metal it contains. The karat measures it in parts out of twenty-four: 18 karat is 18/24, that is 75% gold, written 750; 22 karat is written 916, and 24 karat 999. **Not to be confused.** The carat of gemstones is a unit of mass, 200 milligrams: another use of the same word.",
        "**The hallmark.** A hallmark is an official mark struck on a metal item, mostly to certify its content of noble metal; an assay is the analysis that establishes that content. The record notes the fineness; the rules of hallmarking are a matter for the authorities, not for this page. **The tag.** It carries a code to scan, the weight and the reference, no price, see [label printing](" + L.etiquettes + ") for small formats. **Stones.** A piece can carry a stone value and its own making charge: those are two more lines on the record, not one overall price in which nothing can be found again. **What this page does not cover.** The till and its gaps are in [till sessions](" + L.caisse + "); stock by movements, in [accurate stock](" + L.stock + ").",
      ] },
      { heading: "The price of the day: a weight, a rate, a making charge", body: [
        "The figure calculates the price of a bracelet, then follows it over thirty days.",
      ], visual: 'etiquette', after: [
        "**The calculation.** Weight times the gram price of the day, plus the making charge. For the bracelet: 12.4 g × DA 20,000 = DA 248,000 of gold, 12.4 g × DA 2,500 = DA 31,000 of making, that is DA 279,000. The next day, if the gram goes to DA 20,300, the same bracelet is worth DA 282,720 without anyone touching the tag. **Why the rate moves.** Gold is priced on international markets, in dollars per troy ounce, with London long the benchmark; that market is subject to speculation and volatility, like others. Each shop draws its gram price from it, according to its purchases and its location: that figure, yours, is what is entered in the morning.",
        "**One figure, not a thousand.** One gram price per fineness: every piece of that fineness is recalculated. **The explained price.** The customer sees the detail: weight, fineness, gram price, making charge. A price that can be explained is argued over less. **The discount.** It applies to the making charge, not to the gold: the software keeps a floor, the cost of the gold at the day's price, below which the sale needs approval. Who changed a price or granted a discount can be read in [the audit log](" + L.roles + "). **The value of stock.** It moves every morning with the rate: on 3 kg of gold, DA 1,500 more per gram makes DA 4,500,000. That is a management reading; its accounting treatment is for your accountant.",
      ] },
      { heading: "A sale with old gold traded in", body: [
        "The figure follows a sale in six steps.",
      ], visual: 'vente', after: [
        "**The trade-in.** It is the accented step. The customer brings an old chain: it is weighed in front of them, its fineness is noted, and its value, at the day's buy-back price, is deducted. In the example: 8 g taken back at DA 17,000 a gram, that is DA 136,000; for the bracelet at DA 279,000, DA 143,000 remains to be paid. **Two movements.** A sale and an entry: the old gold goes into a separate stock, by weight, awaiting melting or resale. Without that, the weight of gold really present in the shop is no longer known after a month.",
        "**The deposit.** A set reserved for a wedding is often paid in several instalments. The rule must be written on the receipt: is the price fixed on the day of reservation, or recalculated on the day of collection? Both are practised; what cannot last is not having said which. Instalments are followed as in [customer credit](" + L.credit + "). **The receipt.** Weight, fineness, gram price, making charge, trade-in, deposit, balance due: everything that will make it possible, two years on, to know what was sold. **The custom order.** A drawing, an estimated weight, a deposit; on delivery, the real weight replaces the estimate and the balance is recalculated.",
      ] },
      { heading: "The stock count, tray by tray", body: [
        "The figure counts a tray of 24 rings in two ways.",
      ], visual: 'plateau', after: [
        "**Two counts.** Stock-taking is the physical verification of the quantities and condition of items held. In jewellery it is done twice at once: each tag is scanned, then the tray is weighed. In the example: 24 pieces and 186.4 g expected, 23 pieces and 178.1 g found. The gap, 8.3 g, matches one ring, whose record gives the last movement: taken out for a fitting the day before. **Why both.** The scan alone does not see a piece swapped for a lighter one; the scale alone does not say which is missing.",
        "**A little every day.** One tray in the morning before opening, in turn: the whole display is recounted regularly without closing. **Pieces out for fitting.** A piece taken off the tray is scanned, and scanned again when it returns; a piece out for too long shows up. **The safe.** In the evening, trays go into the safe by number; in the morning, they come out the same way. **Several shops.** A transfer is an exit here and an entry there, to the gram, visible from afar as in [running a business in Algeria from France](" + L.france + ").",
      ] },
      { heading: "Six situations at the counter", body: [
        "The figure sets out six situations, what gets lost, and what the software keeps.",
      ], visual: 'comptoir', after: [
        "**Repairs.** A necklace left for soldering is an object that does not belong to the shop: it comes in with a receipt, its weight, its condition, a photo, a promised date, and it leaves against that receipt. The weight noted on arrival avoids the argument on collection. **Pieces on consignment.** Consignment is an arrangement in which the consignor keeps full ownership of the goods until they are sold to the final buyer: possession is transferred, not ownership. The pieces a supplier leaves with you therefore live in a separate stock; sold, they create a debt to that supplier; unsold, they go back, piece by piece.",
        "**Gold handed to the workshop.** Conversely, the gold you hand to a craftsman for making remains yours: weight handed over, weight returned as pieces, accepted loss, making charge due. It is the tracking of entrusted materials described in [subcontracting](" + L.soustraitance + "). **What an ordinary till cannot do.** It sells an item at a price. It cannot weigh a trade-in, fix a price on a deposit, or tell what is yours from what has been left with you. **Trust.** In a trade where a piece fits in the hand, knowing who opened which tray and who changed which record protects the team first of all.",
      ] },
      { heading: "Six weeks, in the example", body: [
        "Six weeks for one shop, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week with you: your pieces, your finenesses, how you set the price, your deposit and repair notebooks. **Recording the pieces.** Tray by tray, with the shop open: each piece is weighed, photographed, tagged. It is the bulk of the work, and it is also your first complete stock count. **The price of the day.** As soon as the records exist, the calculation at the sale replaces price tags. **The notebooks.** Deposits, repairs and trade-ins in progress are taken over one by one, with their receipt.",
        "**What remains afterwards.** One record per piece, a price recalculated every morning, detailed receipts, a stock in pieces and in grams, trays recounted in turn. **Off the shelf or custom.** Software exists for jewellery shops; check that it calculates the price at the gram of the day, weighs trade-ins and separates consigned pieces. Custom work is justified when you have your own rules, several finenesses and making charges, a workshop, several shops, or online sales to tie to the same stock. **The durations** are those of a constructed example.",
      ], list: [
        "**What management receives**: one record per piece with weight, fineness, making charge and photo; a price calculated at the gram of the day; detailed receipts; old gold trade-ins weighed and stocked separately; deposits, orders and repairs with their due date; a count per tray by scan and by weight; the value of stock at the day's price.",
        "**What the shop no longer does**: redo tags when gold moves, sell at last month's price, look for a deposit in a notebook, mix its own pieces with those left in its care, close for two days to count.",
        "**What is measured**: weight of gold in stock per fineness; value at the day's price; pieces and grams sold; average making charge per gram; trade-ins in grams; deposits outstanding; repairs overdue; gaps per tray.",
        "**What Symloop does**: the survey with you, the records and tags, the calculation of the day's price, the till with trade-in, deposit and order, the tracking of repairs and consigned pieces, the count by scan and by weight, then taking over your notebooks in progress.",
      ], faq: [
        { q: "Is there software for a jewellery shop?", a: "Yes. It must follow each piece with its weight and fineness, calculate the price at the gram of the day, weigh old gold trade-ins, keep deposits, orders and repairs, and count stock in pieces and in grams." },
        { q: "How do you calculate the price of a gold piece?", a: "Weight times the gram price of the day for its fineness, plus the making charge, plus the value of stones if any. In the example: 12.4 g × DA 20,000 + 12.4 g × DA 2,500 = DA 279,000." },
        { q: "How do you manage a jewellery shop's stock?", a: "Piece by piece, not in quantities: one record and one tag per item, and a stock read both in number of pieces and in grams per fineness. Old gold taken back and consigned pieces live in separate stocks." },
        { q: "What do you do when the gold price changes?", a: "Change a single figure: the gram price per fineness. Every piece is recalculated at the sale, because the tag carries a weight and not a price." },
        { q: "How do you handle old gold trade-ins?", a: "The piece taken back is weighed, its fineness noted, its value deducted from the sale. It goes into a separate stock, by weight. The receipt keeps the detail, for the customer as for you." },
        { q: "How do you manage deposits and orders?", a: "Each deposit is tied to a piece or an order, with a written rule: price fixed on the day of reservation, or recalculated on collection. Instalments and the balance due are read on screen." },
        { q: "How do you follow repairs?", a: "Each object left receives a receipt with its weight, its condition, a photo and a promised date. It does not enter your stock: it is followed separately and only leaves against its receipt." },
        { q: "How do you count stock without closing the shop?", a: "Tray by tray, in the morning: each tag is scanned, then the tray is weighed. The two counts must agree; if not, the software says which piece is missing." },
        { q: "What does 18 karat mean?", a: "It is a fineness: 18 parts of gold out of 24, that is 75%, written 750. The carat of gemstones is something else: a unit of mass of 200 milligrams." },
        { q: "How long does it take to equip a jewellery shop?", a: "Six weeks in this page's example, survey included. The longest part is recording the pieces, tray by tray, which also serves as a first complete stock count." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The tag carries a weight, not a price." },
      { after: 3, text: "The scan alone does not see a piece swapped for a lighter one; the scale alone does not say which is missing." },
    ],
    cta: { eyebrow: "Tell us how many pieces you have, in how many shops, and how you set the price today: we start with a week with you", title: "Tags to redo when gold moves, deposits and repairs in notebooks, old gold taken back with no trace, consigned pieces mixed with your own, a stock count once a year, or a jewellery shop in Algeria that you follow from France", body: "Symloop builds what holds a jewellery shop together: one record per piece, price at the gram of the day, trade-in, deposits, repairs, count by scan and by weight. Describe your shop to us, your finenesses, and the notebook you would like to stop keeping." },
    related: { label: 'Also read', items: [
      { href: L.serie, kind: '2027', name: 'Serial number: warranty, repair, return to supplier' },
      { href: L.caisse, kind: '2027', name: 'Till sessions: counting, gap, bank deposit' },
      { href: L.stock, kind: '2027', name: 'Accurate stock: movement journal, cycle counts' },
      { href: L.france, kind: '2027', name: 'Running a business in Algeria from France' },
    ] },
  },
  ar: {
    kind: 'برنامج محل المجوهرات · الجزائر · 2027', title: "برنامج محل المجوهرات في الجزائر (2027): ألف ملصق يُعاد حين يتحرك الذهب، عربون وتصليحات على الدفاتر، وجرد لا يُجرى إلا مرة في السنة؛ سعر غرام اليوم، بطاقة لكل قطعة، استرجاع الذهب القديم، وما نضعه",
    dek: "«عندي محل مجوهرات، فيه أكثر من ستمئة قطعة في الواجهة. حين يصعد الذهب، أعيد كتابة الملصقات باليد، ولست متأكداً أبداً أنني أبيع بالسعر الصحيح. العربون، التصليحات، والذهب القديم الذي أسترجعه في ثلاثة دفاتر. وقطع أودعها عندي مورّد مختلطة بقطعي. والجرد أجريه مرة في السنة، بإغلاق يومين. هل يوجد برنامج لمحل المجوهرات؟» محل المجوهرات لا يبيع سلعاً: يبيع غرامات، بسعر يتغير، على قطع كلها مختلفة. وصندوق عادي لا يعرف الوزن، ولا العيار، ولا سعر اليوم.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج محل المجوهرات', 'سعر غرام اليوم', 'بطاقة لكل قطعة', 'استرجاع الذهب القديم', 'الجرد بالمسح وبالوزن', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج محل المجوهرات يمسك خمسة أشياء: **القطعة**، بطاقة لكل حلية بوزنها وعيارها وصنعتها؛ **سعر اليوم**، سعر غرام لكل عيار يُدخَل كل صباح؛ **المنضدة**، مع استرجاع الذهب القديم والعربون والطلبيات؛ **الورشة**، للتصليحات والقطع المودَعة؛ و**المراقبة**، جرد بالمسح وبالوزن. وآليتان تصنعان الأهم: **السعر المحسوب عند البيع**، الوزن مضروباً في سعر الغرام زائد الصنعة، حتى لا تُعاد الملصقات؛ و**العدّ صينية بصينية**، الذي يقول أي قطعة ناقصة، لا أن «شيئاً ناقص».",
      "هذه الصفحة موجّهة إلى من يسيّر محل مجوهرات، محلاً أو عدة محلات، ورشة تصنيع، أو تجارة جملة للمجوهرات، وإلى من يملك واحداً في الجزائر ويتابعه من فرنسا. التعريفات من مصادر عمومية: العيار، الدمغة، فحص المعادن، سعر الذهب، البيع بالإيداع، قيراط الأحجار، والجرد المادي. والسوار والصينية وكل الأسعار مثال مركَّب؛ والمبالغ خيالية ولا تعكس السعر الحقيقي. والصفحة لا تتناول الدمغ والضمان، ولا الالتزامات المرتبطة بتجارة المعادن الثمينة، ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يمسكه برنامج محل المجوهرات", body: [
        "الشكل يرتّب خمس طبقات؛ والأولى تحمل كل الأخريات.",
      ], visual: 'couches', after: [
        "**بطاقة لكل قطعة.** في معظم المحلات، السلعة تُعدّ: بقي منها اثنتا عشرة. وفي المجوهرات، خاتمان من الموديل نفسه ليس لهما الوزن نفسه، فليس لهما السعر نفسه: لكل قطعة بطاقتها، رقمها، صورتها، وملصقها. وهو منطق المتابعة بالوحدة الموصوف في [الرقم التسلسلي](" + L.serie + ")، مطبَّقاً على الغرامات. **العيار.** عيار غرض من معدن ثمين يعبّر عن وزن المعدن الخالص فيه. والقيراط يقيسه بأجزاء من أربعة وعشرين: عيار 18 يعني " + I('18/24') + "، أي 75 بالمئة ذهباً، ويُكتب 750؛ وعيار 22 يُكتب 916، وعيار 24 يُكتب 999. **لا يُخلط.** قيراط الأحجار وحدة كتلة، 200 ميليغرام: وهو استعمال آخر للكلمة نفسها.",
        "**الدمغة.** الدمغة علامة رسمية تُضرب على غرض معدني، غالباً لإثبات محتواه من المعدن النفيس؛ والفحص هو التحليل الذي يثبت هذا المحتوى. والبطاقة تسجّل العيار؛ وقواعد الدمغ من شأن الإدارة، لا من شأن هذه الصفحة. **الملصق.** يحمل رمزاً يُمسح، الوزن، والمرجع، ودون سعر، انظر [طباعة الملصقات](" + L.etiquettes + ") للقياسات الصغيرة. **الأحجار.** قد تحمل القطعة قيمة أحجار وصنعة خاصة: وهما سطران إضافيان في البطاقة، لا سعر إجمالي لا يُعثر فيه على شيء. **ما لا تعالجه هذه الصفحة.** الصندوق وفوارقه في [حصص الصندوق](" + L.caisse + ")؛ والمخزون بالحركات في [المخزون الصحيح](" + L.stock + ").",
      ] },
      { heading: "سعر اليوم: وزن، سعر، وصنعة", body: [
        "الشكل يحسب سعر سوار، ثم يتابعه على ثلاثين يوماً.",
      ], visual: 'etiquette', after: [
        "**الحساب.** الوزن مضروباً في سعر غرام اليوم، زائد الصنعة. للسوار: " + I('12,4 × 20000') + " دج، أي 248000 دج ذهباً، و" + I('12,4 × 2500') + " دج، أي 31000 دج صنعة، والمجموع 279000 دج. وفي الغد، إذا انتقل الغرام إلى 20300 دج، ساوى السوار نفسه 282720 دج دون أن يمسّ أحد الملصق. **لماذا يتحرك السعر.** سعر الذهب يُحدَّد في أسواق دولية، بالدولار للأونصة، ولندن مرجعه منذ زمن طويل؛ وهذه السوق عرضة للمضاربة والتقلب، كغيرها. وكل محل يستخرج منها سعر غرامه، حسب مشترياته وموقعه: وهذا الرقم، رقمكم، هو الذي يُدخَل في الصباح.",
        "**رقم واحد، لا ألف.** سعر غرام لكل عيار: كل القطع من هذا العيار يُعاد حسابها. **السعر المشروح.** الزبون يرى التفصيل: الوزن، العيار، سعر الغرام، والصنعة. والسعر الذي يُشرح يُجادَل فيه أقل. **التخفيض.** يقع على الصنعة، لا على الذهب: البرنامج يحتفظ بحد أدنى، كلفة الذهب بسعر اليوم، دونه يتطلب البيع موافقة. ومن غيّر سعراً أو منح تخفيضاً يُقرأ في [سجل التدقيق](" + L.roles + "). **قيمة المخزون.** تتحرك كل صباح مع السعر: على 3 كلغ من الذهب، 1500 دج إضافية للغرام تصنع 4500000 دج. وهذه قراءة تسيير؛ ومعالجتها المحاسبية من اختصاص محاسبكم.",
      ] },
      { heading: "بيع مع استرجاع ذهب قديم", body: [
        "الشكل يتابع بيعاً في ست مراحل.",
      ], visual: 'vente', after: [
        "**الاسترجاع.** هو المرحلة المبرزة. الزبونة تأتي بسلسلة قديمة: توزَن أمامها، يُسجَّل عيارها، وتُطرح قيمتها، بسعر الاسترجاع لليوم. في المثال: 8 غرامات مسترجَعة بـ17000 دج للغرام، أي 136000 دج؛ وللسوار بـ279000 دج، يبقى 143000 دج للدفع. **حركتان.** بيع ودخول: الذهب القديم يدخل مخزوناً منفصلاً، بالوزن، في انتظار الصهر أو إعادة البيع. ودون ذلك، لا يُعرف بعد شهر وزن الذهب الموجود فعلاً في المحل.",
        "**العربون.** الطقم المحجوز لعرس يُدفع غالباً على عدة مرات. والقاعدة يجب أن تُكتب على الوصل: هل السعر ثابت في يوم الحجز، أم يُعاد حسابه يوم الاستلام؟ الاثنان يُعمل بهما؛ وما لا يمكن أن يدوم هو ألّا يُقال أيهما. والآجال تُتابَع كما في [دين الزبون](" + L.credit + "). **الوصل.** الوزن، العيار، سعر الغرام، الصنعة، الاسترجاع، العربون، والباقي: كل ما يسمح، بعد سنتين، بمعرفة ما بيع. **الطلبية على المقاس.** رسم، وزن مقدَّر، وعربون؛ وعند التسليم، يعوّض الوزن الفعلي التقدير ويُعاد حساب الباقي.",
      ] },
      { heading: "الجرد، صينية بصينية", body: [
        "الشكل يعدّ صينية من 24 خاتماً بطريقتين.",
      ], visual: 'plateau', after: [
        "**عدّان.** الجرد المادي هو التحقق من كميات السلع الموجودة ومن حالتها. وفي المجوهرات، يُجرى مرتين دفعة واحدة: كل ملصق يُمسح، ثم توزَن الصينية. في المثال: 24 قطعة و" + I('186,4') + " غ منتظرة، و23 قطعة و" + I('178,1') + " غ موجودة. والفارق، " + I('8,3') + " غ، يوافق خاتماً واحداً، تعطي بطاقته آخر حركة له: خروج للتجربة في اليوم السابق. **لماذا الاثنان.** المسح وحده لا يرى قطعة بُدّلت بأخفّ منها؛ والميزان وحده لا يقول أيها ناقصة.",
        "**كل يوم، قليلاً.** صينية في الصباح قبل الفتح، بالتناوب: الواجهة كلها يُعاد عدّها بانتظام دون إغلاق. **الخروج للتجربة.** القطعة التي تخرج من الصينية تُمسح، وتُمسح من جديد عند رجوعها؛ والقطعة التي بقيت خارجاً أطول من اللازم تظهر. **الخزنة.** في المساء، تدخل الصواني الخزنة بأرقامها؛ وفي الصباح، تخرج منها كذلك. **عدة محلات.** التحويل خروج من هنا ودخول إلى هناك، بالغرام، ويُرى من بعيد كما في [تسيير تجارة في الجزائر من فرنسا](" + L.france + ").",
      ] },
      { heading: "ست حالات عند المنضدة", body: [
        "الشكل يقابل ست حالات، ما يضيع، وما يحفظه البرنامج.",
      ], visual: 'comptoir', after: [
        "**التصليحات.** عقد يُترك للحام غرض ليس ملكاً للمحل: يدخل بوصل، بوزنه، حالته، صورة، وتاريخ موعود، ويخرج مقابل هذا الوصل. والوزن المسجَّل عند الدخول يجنّب النقاش عند الخروج. **القطع المودَعة.** البيع بالإيداع ترتيب يحتفظ فيه المودِع بالملكية الكاملة للبضاعة حتى بيعها للمشتري النهائي: ينقل الحيازة، لا الملكية. فالقطع التي يودعها عندكم مورّد تعيش في مخزون منفصل؛ إذا بيعت، أنشأت ديناً نحوه؛ وإذا لم تُبَع، رجعت، قطعة بقطعة.",
        "**الذهب المسلَّم للورشة.** وبالعكس، الذهب الذي تسلّمونه لحرفي للتصنيع يبقى ملككم: وزن مسلَّم، وزن مسترجَع قطعاً، فاقد مقبول، وصنعة مستحَقة. وهي متابعة المواد المسلَّمة الموصوفة في [المناولة](" + L.soustraitance + "). **ما لا يعرفه صندوق عادي.** يبيع سلعة بسعر. ولا يعرف وزن استرجاع، ولا تثبيت سعر على عربون، ولا التمييز بين ما هو لكم وما أُودع عندكم. **الثقة.** في تجارة تدخل فيها القطعة في اليد، معرفة من فتح أي صينية ومن عدّل أي بطاقة تحمي الفريق أولاً.",
      ] },
      { heading: "ستة أسابيع، في المثال", body: [
        "ستة أسابيع لمحل واحد، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع معكم: قطعكم، عياراتكم، طريقتكم في تحديد السعر، ودفاتر العربون والتصليح. **تسجيل القطع.** صينية بصينية، والمحل مفتوح: كل قطعة توزَن، تُصوَّر، ويوضع ملصقها. وهو معظم العمل، وهو كذلك أول جرد كامل لكم. **سعر اليوم.** منذ وجود البطاقات، يعوّض الحساب عند البيع ملصقات الأسعار. **الدفاتر.** العربون والتصليحات والاسترجاعات الجارية تُنقل واحدة واحدة، مع وصلها.",
        "**ما يبقى بعد ذلك.** بطاقة لكل قطعة، سعر يُعاد حسابه كل صباح، وصولات مفصَّلة، مخزون بالقطع وبالغرامات، وصوانٍ يُعاد عدّها بالتناوب. **جاهز أو على المقاس.** توجد برامج لمحلات المجوهرات؛ راجعوا أنها تحسب السعر بغرام اليوم، توزن الاسترجاعات، وتفصل القطع المودَعة. والعمل على المقاس يُبرَّر حين تكون لكم قواعدكم، عدة عيارات وصنعات، ورشة، عدة محلات، أو بيع عبر الإنترنت يُربط بالمخزون نفسه. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقاه الإدارة**: بطاقة لكل قطعة بوزنها، عيارها، صنعتها، وصورتها؛ سعر محسوب بغرام اليوم؛ وصولات مفصَّلة؛ استرجاعات الذهب القديم موزونة ومخزَّنة منفصلة؛ العربون والطلبيات والتصليحات بآجالها؛ جرد لكل صينية بالمسح وبالوزن؛ وقيمة المخزون بسعر اليوم.",
        "**ما لا يفعله المحل بعد الآن**: إعادة الملصقات حين يتحرك الذهب، البيع بسعر الشهر الماضي، البحث عن عربون في دفتر، خلط قطعه بالقطع المودَعة عنده، والإغلاق يومين للعدّ.",
        "**ما يُقاس**: وزن الذهب في المخزون لكل عيار؛ القيمة بسعر اليوم؛ القطع والغرامات المبيعة؛ متوسط الصنعة للغرام؛ الاسترجاعات بالغرام؛ العربون الجاري؛ التصليحات المتأخرة؛ والفوارق لكل صينية.",
        "**ما تفعله Symloop**: المعاينة معكم، البطاقات والملصقات، حساب سعر اليوم، الصندوق مع الاسترجاع والعربون والطلبية، متابعة التصليحات والقطع المودَعة، الجرد بالمسح وبالوزن، ثم نقل دفاتركم الجارية.",
      ], faq: [
        { q: "هل يوجد برنامج لمحل المجوهرات؟", a: "نعم. ويجب أن يتابع كل قطعة بوزنها وعيارها، يحسب السعر بغرام اليوم، يوزن استرجاعات الذهب القديم، يمسك العربون والطلبيات والتصليحات، ويعدّ المخزون بالقطع وبالغرامات." },
        { q: "كيف يُحسب سعر حلية ذهبية؟", a: "الوزن مضروباً في سعر غرام اليوم لعيارها، زائد الصنعة، زائد قيمة الأحجار إن وُجدت. في المثال: " + I('12,4 × 20000 + 12,4 × 2500') + "، أي 279000 دج." },
        { q: "كيف يُسيَّر مخزون محل المجوهرات؟", a: "قطعة بقطعة، لا بالكميات: بطاقة وملصق لكل حلية، ومخزون يُقرأ بعدد القطع وبالغرامات لكل عيار معاً. والذهب القديم المسترجَع والقطع المودَعة تعيش في مخازن منفصلة." },
        { q: "ما العمل حين يتغير سعر الذهب؟", a: "تغيير رقم واحد: سعر الغرام لكل عيار. وكل القطع يُعاد حسابها عند البيع، لأن الملصق يحمل وزناً لا سعراً." },
        { q: "كيف يُسيَّر استرجاع الذهب القديم؟", a: "القطعة المسترجَعة توزَن، يُسجَّل عيارها، وتُطرح قيمتها من البيع. وتدخل مخزوناً منفصلاً، بالوزن. والوصل يحفظ التفصيل، للزبون كما لكم." },
        { q: "كيف يُسيَّر العربون والطلبيات؟", a: "كل عربون يُربط بقطعة أو بطلبية، بقاعدة مكتوبة: سعر ثابت في يوم الحجز، أو يُعاد حسابه عند الاستلام. والآجال والباقي تُقرأ على الشاشة." },
        { q: "كيف تُتابَع التصليحات؟", a: "كل غرض يُودَع يتلقى وصلاً بوزنه، حالته، صورة، وتاريخ موعود. ولا يدخل مخزونكم: يُتابَع منفصلاً ولا يخرج إلا مقابل وصله." },
        { q: "كيف يُجرى الجرد دون إغلاق المحل؟", a: "صينية بصينية، في الصباح: كل ملصق يُمسح، ثم توزَن الصينية. ويجب أن يتوافق العدّان؛ وإلا قال البرنامج أي قطعة ناقصة." },
        { q: "ماذا يعني عيار 18؟", a: "هو عيار: 18 جزءاً من الذهب من 24، أي 75 بالمئة، ويُكتب 750. وقيراط الأحجار شيء آخر: وحدة كتلة من 200 ميليغرام." },
        { q: "كم من الوقت لتجهيز محل مجوهرات؟", a: "ستة أسابيع في مثال هذه الصفحة، المعاينة منها. والأطول هو تسجيل القطع، صينية بصينية، وهو كذلك أول جرد كامل." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الملصق يحمل وزناً، لا سعراً." },
      { after: 3, text: "المسح وحده لا يرى قطعة بُدّلت بأخفّ منها؛ والميزان وحده لا يقول أيها ناقصة." },
    ],
    cta: { eyebrow: "قولوا لنا كم قطعة عندكم، في كم محل، وكيف تحددون السعر اليوم: نبدأ بأسبوع معكم", title: "ملصقات تُعاد حين يتحرك الذهب، عربون وتصليحات على الدفاتر، ذهب قديم يُسترجَع دون أثر، قطع مودَعة مختلطة بقطعكم، جرد مرة في السنة، أو محل مجوهرات في الجزائر تتابعونه من فرنسا", body: "Symloop تبني ما يمسك محل المجوهرات: بطاقة لكل قطعة، سعر بغرام اليوم، استرجاع، عربون، تصليحات، وجرد بالمسح وبالوزن. صِفوا لنا محلكم، عياراتكم، والدفتر الذي تودّون ألّا تمسكوه بعد الآن." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.serie, kind: '2027', name: 'الرقم التسلسلي: الضمان، التصليح، والإرجاع إلى المورّد' },
      { href: L.caisse, kind: '2027', name: 'حصص الصندوق: العدّ، الفارق، والإيداع في البنك' },
      { href: L.stock, kind: '2027', name: 'المخزون الصحيح: سجل الحركات والجرد الدوري' },
      { href: L.france, kind: '2027', name: 'تسيير تجارة في الجزائر من فرنسا' },
    ] },
  },
};

const KEYWORDS = "logiciel bijouterie algérie 2027, logiciel de gestion bijouterie, logiciel gestion de stock bijouterie, logiciel caisse bijouterie, application bijouterie, prix du gramme d'or du jour, reprise de vieil or, étiquette bijou, inventaire bijouterie, logiciel bijouterie maroc, jewellery shop software algeria, jewelry store software, gold price per gram, old gold trade-in, jewellery stock by weight, برنامج محل المجوهرات, برنامج تسيير محل الذهب الجزائر, سعر غرام الذهب اليوم, استرجاع الذهب القديم, جرد المجوهرات, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
