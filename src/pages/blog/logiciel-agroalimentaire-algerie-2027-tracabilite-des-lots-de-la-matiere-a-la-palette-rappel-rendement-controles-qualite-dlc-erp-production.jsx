import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-agroalimentaire-algerie-2027-tracabilite-des-lots-de-la-matiere-a-la-palette-rappel-rendement-controles-qualite-dlc-erp-production.mjs';

const SLUG = 'logiciel-agroalimentaire-algerie-2027-tracabilite-des-lots-de-la-matiere-a-la-palette-rappel-rendement-controles-qualite-dlc-erp-production';
const FIGURES = ['couches', 'flux', 'genealogie', 'bilan', 'crise', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  lots: '/blog/le-lot-qui-expire-en-premier-est-au-fond-tracabilite-par-lot-application-algerie-2027-reception-fefo-quarantaine-rappel-ce-qu-on-construit/',
  fabrication: '/blog/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier/',
  planif: '/blog/on-promet-des-delais-qu-on-ne-tient-pas-planification-de-production-application-algerie-2027-capacite-charge-goulot-date-promise-calculee/',
  reception: '/blog/le-meme-defaut-revient-et-on-paie-le-fournisseur-controle-a-la-reception-application-algerie-2027-plan-de-controle-non-conformite-reclamation/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  erp: '/blog/logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  etiquettes: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel agroalimentaire · Algérie · 2027', title: "Logiciel agroalimentaire en Algérie (2027) : deux jours pour retrouver un lot, un rendement qui baisse sans qu'on sache où, des fiches de contrôle sur papier ; traçabilité, bilan matière, qualité, et ce qu'on met en place",
    dek: "« Nous fabriquons des conserves. Un fournisseur nous signale un défaut sur un lot de matière, et il nous faut deux jours de cahiers pour savoir dans quels produits il est passé et chez quels clients ils sont partis. Le rendement baisse depuis un mois sans qu'on sache sur quelle ligne. Les fiches de contrôle sont remplies sur papier, parfois le lendemain. Existe-t-il un logiciel pour l'agroalimentaire ? » Une usine alimentaire se tient sur un lien : celui qui relie chaque lot de matière à chaque lot de produit. Pris à la pesée, il donne le rappel, le rendement et la preuve.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel agroalimentaire', 'Traçabilité des lots', 'Rappel de produit', 'Bilan matière et rendement', 'Contrôles qualité', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel agroalimentaire tient cinq choses : **les recettes**, versionnées ; **les lots**, de la matière au produit fini, reliés entre eux ; **la production**, ordre par ordre, avec ce qui est entré et ce qui est sorti ; **la qualité**, mesure par mesure ; **le stock et l'expédition**, avec les dates limites. Tout repose sur un geste : **scanner le lot de matière au moment de la pesée**. Ce lien donne trois réponses que les cahiers ne donnent pas à temps : **où est passé ce lot**, dans les deux sens ; **combien de matière est devenue du produit**, lot par lot ; **ce lot a-t-il passé ses contrôles**, et qui l'a mesuré.",
      "Cette page s'adresse à celles et ceux qui dirigent une conserverie, une laiterie, une biscuiterie, une unité de boissons ou toute fabrication alimentaire, ou qui en pilotent la production, et à celles et ceux qui, installés en France, possèdent une unité en Algérie et veulent en lire la production de loin. Les définitions viennent de sources publiques : traçabilité, numéro de lot, rappel de produit, analyse des dangers et points critiques, durée de conservation, fabrication par procédé, bilan matière, système d'exécution de la fabrication, allergènes. La conserverie, ses lots et ses rendements sont un exemple construit. La page ne dit pas ce que la réglementation exige de votre activité : cela relève de votre responsable qualité. Elle ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'un logiciel agroalimentaire doit tenir", body: [
        "La figure empile cinq couches ; la deuxième porte toutes les autres.",
      ], visual: 'couches', after: [
        "**Une fabrication par recette.** La fabrication par procédé est la branche de l'industrie qui travaille avec des formules et des recettes, par opposition à la fabrication d'unités que l'on assemble. Une fois le produit fait, on ne peut plus le décomposer en ses ingrédients : la seule mémoire de ce qu'il contient est ce qui a été noté au moment où on l'a fait. **Le lot.** Un numéro de lot identifie une quantité donnée de matière venant d'un même fabricant. Il permet de remonter aux ingrédients, de faire des contrôles de qualité, et de limiter un rappel à une partie de la production. Tout le logiciel est construit autour de lui.",
        "**ERP, MES : de quoi parle-t-on ?** Un [ERP](" + L.erp + ") réunit les principaux processus de l'entreprise autour d'une base commune. Un système d'exécution de la fabrication, souvent appelé MES, suit et documente la transformation des matières premières en produits finis ; c'est particulièrement important dans les industries réglementées, comme l'alimentaire. Pour une unité de taille moyenne, la question n'est pas le sigle : c'est de savoir si le logiciel relie les lots, à la pesée, sur la ligne. **Ce que cette page ne traite pas.** Le coût d'un produit fabriqué est détaillé dans [ce que coûte un produit fini](" + L.fabrication + ") ; le calendrier des lignes, dans [la planification de production](" + L.planif + ").",
      ] },
      { heading: "Du lot de matière à la palette, en six temps", body: [
        "La figure suit la matière, de la réception à l'expédition.",
      ], visual: 'flux', after: [
        "**La réception.** Chaque livraison reçoit le lot du fournisseur et une étiquette interne ; elle est contrôlée, puis libérée ou mise en quarantaine, comme dans [le contrôle à la réception](" + L.reception + "). **La pesée.** C'est le temps accentué. On scanne l'étiquette du sac ou du fût avant de peser : le logiciel vérifie que c'est la bonne matière, d'un lot libéré, dans la quantité de la recette, et il enregistre le lien. Quelques secondes par pesée ; sans elles, plus rien ne se retrouve. **La fabrication.** Un ordre de fabrication porte la recette et sa version, la ligne, l'équipe, l'heure.",
        "**Le contrôle.** Les mesures sont saisies sur une tablette, au poste, au moment où elles sont prises. **Le conditionnement.** Le lot de produit fini naît ici, avec sa date limite : la durée de conservation est le temps pendant lequel une denrée peut être stockée sans devenir impropre à l'usage, à la consommation ou à la vente. L'étiquette porte le lot et la date, imprimés depuis le logiciel, voir [l'impression d'étiquettes](" + L.etiquettes + "). **L'expédition.** Chaque palette a son numéro et ses lots ; les sorties se font par date, les plus proches d'abord, comme dans [la traçabilité par lot](" + L.lots + "). **Sans réseau.** Sur une ligne, le poste doit continuer à enregistrer quand le Wi-Fi tombe : voir [l'application hors ligne](" + L.horsligne + ").",
      ] },
      { heading: "Un lot douteux : où est-il passé ?", body: [
        "La figure suit un lot de matière jusqu'aux clients.",
      ], visual: 'genealogie', after: [
        "**En aval.** Un fournisseur signale un défaut sur un lot de concentré. En un écran : ce lot est entré dans trois lots de production, soit quatorze palettes. Six sont encore en stock et sont bloquées d'un geste ; huit sont chez cinq clients, avec les quantités et les dates. Un rappel est la demande faite par un fabricant de retourner un produit après la découverte d'un problème de sécurité : le limiter à huit palettes plutôt qu'à un mois de production, c'est toute la différence. **En amont.** La lecture inverse part d'un bocal rendu par un client : son lot, puis les matières, l'emballage, la ligne, l'équipe, les mesures.",
        "**Dans les deux sens.** La traçabilité est la capacité à vérifier l'historique, l'emplacement ou l'usage d'un article au moyen d'identifications enregistrées ; dans l'alimentaire, son moment décisif est celui où une contamination apparaît et où un rappel s'impose. Pour une fabrication par procédé, on parle de traçabilité des lots en avant et en arrière : ce sont les deux lectures de la figure. **L'exercice.** Une traçabilité qu'on n'a jamais essayée ne vaut pas grand-chose. Régulièrement, on choisit un lot au hasard et on chronomètre : combien de minutes pour la liste des clients ? C'est le seul vrai test, et il se fait un jour calme. **Après l'usine.** La température pendant le transport est une autre preuve, traitée dans [la chaîne du froid](" + L.froid + ").",
      ] },
      { heading: "Le bilan matière : ce qui entre doit ressortir", body: [
        "La figure pèse un lot, puis compare six lots successifs.",
      ], visual: 'bilan', after: [
        "**Le principe.** Un bilan matière applique la conservation de la masse : ce qui entre dans un système doit en sortir ou s'y accumuler. Dans l'exemple, 1 000 kg de matière entrent ; il en sort 912 kg de produit conforme, 50 kg de freinte prévue par la recette (l'eau qui s'évapore, ce qui reste dans les cuves) et 22 kg de rebuts déclarés. Il manque 16 kg. **Ce que cet écart peut être.** Une pesée approximative, une balance déréglée, un rebut non déclaré, une matière plus humide que d'habitude, une perte au changement de format. Le chiffre ne dit pas lequel ; il dit qu'il y a quelque chose à chercher.",
        "**La tendance.** Un lot à 91,2 % n'inquiète personne. Six lots de suite sur la même ligne, de 93,1 % à 89,6 %, racontent autre chose : quelque chose se dégrade, et l'on sait où et depuis quand. **Ce que vaut un point.** Sur une tonne, un point de rendement, ce sont dix kilos de matière payée qui ne deviennent pas du produit. À chaque unité de calculer ce que cela pèse sur son année. **Par quoi comparer.** Par ligne, par équipe, par recette, par fournisseur de matière : la même base, quatre lectures. Le rendement entre ensuite dans [le coût du produit fini](" + L.fabrication + "), lot par lot et non en moyenne annuelle.",
      ] },
      { heading: "Six questions d'un jour de crise", body: [
        "La figure compare six questions, avec des cahiers puis avec des lots reliés.",
      ], visual: 'crise', after: [
        "**Les contrôles.** L'analyse des dangers et points critiques est une approche préventive et systématique de la sécurité des aliments. Un point critique est une étape du procédé de fabrication ; une surveillance est nécessaire pour s'assurer que le procédé est maîtrisé à chacun de ces points, et des enregistrements en gardent la trace. Le logiciel ne décide pas de vos points critiques : il les connaît, demande la mesure au bon moment, signale une valeur hors limite et bloque le lot. **La fiche remplie après.** Une mesure saisie sur tablette porte son heure : on ne remplit plus la fiche le lendemain.",
        "**Les allergènes.** Les allergies alimentaires les plus courantes concernent le lait, l'œuf, l'arachide, les fruits à coque, le poisson, les crustacés, le soja et le blé ; un contact croisé se produit quand un allergène passe sans qu'on le veuille d'un aliment à un autre. La recette porte ses allergènes ; l'ordre de fabrication sait ce qui est passé avant sur la ligne et demande le nettoyage prévu. **Bloquer.** Un lot bloqué l'est partout à la fois : en stock, en préparation, sur le quai. **La version de la recette.** Un changement d'ingrédient crée une version ; chaque ordre garde la sienne. Le jour où un client demande ce que contenait un lot de mars, la réponse n'est pas « la recette actuelle ».",
      ] },
      { heading: "Huit semaines, dans l'exemple", body: [
        "Huit semaines pour une ligne et une famille de produits, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine dans l'usine : les recettes telles qu'elles sont appliquées, les fiches de pesée et de contrôle, les étiquettes, la façon dont les lots sont numérotés aujourd'hui. **Une ligne d'abord.** On ne trace pas toute l'usine d'un coup : une ligne, une famille de produits, de la réception à l'expédition. **Les postes.** Un lecteur et un écran à la pesée, une tablette au contrôle, une imprimante d'étiquettes au conditionnement : le matériel suit le geste, pas l'inverse. **L'exercice de rappel.** Le dernier jalon : un lot choisi au hasard, et le chronomètre.",
        "**Ce qui reste après.** Une généalogie par lot, un bilan matière par ordre, des contrôles horodatés, des palettes rattachées à leurs clients. **Les normes.** Des référentiels existent, comme la famille ISO 22000, sur le management de la sécurité des aliments, dont une norme, ISO 22005, porte sur la traçabilité ; le logiciel fournit les enregistrements, il ne remplace ni la démarche ni votre responsable qualité. **Du marché ou sur mesure.** Des logiciels spécialisés existent pour l'agroalimentaire ; ils conviennent quand votre procédé entre dans leur cadre. Le sur-mesure se justifie quand la ligne a ses particularités, ou quand il faut relier ce que vous avez déjà. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que la direction de production reçoit** : des recettes versionnées avec leurs allergènes ; un lien entre chaque lot de matière et chaque lot de produit ; un bilan matière par ordre de fabrication ; des contrôles saisis au poste et horodatés ; des palettes rattachées à leurs clients ; un exercice de rappel chronométré.",
        "**Ce que l'usine ne fait plus** : chercher deux jours dans des cahiers, rappeler tous les clients du mois, remplir les fiches de contrôle le lendemain, découvrir une baisse de rendement à l'inventaire, répondre « la recette actuelle » à une question sur un lot ancien.",
        "**Ce qui est mesuré** : temps pour retrouver les clients d'un lot ; rendement par lot, par ligne et par équipe ; écart inexpliqué du bilan matière ; contrôles faits à l'heure ; lots bloqués et délai de libération ; stock par date limite.",
        "**Ce que fait Symloop** : le relevé en usine, les recettes et les lots, les écrans de pesée et de contrôle, les étiquettes, le bilan matière, les palettes et l'expédition, le fonctionnement hors ligne sur la ligne, puis l'exercice de rappel avec vous.",
      ], faq: [
        { q: "Existe-t-il un logiciel pour l'agroalimentaire ?", a: "Oui. Il doit tenir les recettes, les lots de la matière au produit fini, la production, les contrôles qualité et le stock par date limite. Le point à vérifier : relie-t-il chaque lot de matière à chaque lot de produit, au moment de la pesée ?" },
        { q: "Qu'est-ce qu'un ERP agroalimentaire ?", a: "Un logiciel de gestion qui ajoute aux fonctions habituelles, achats, stock, ventes, ce que demande une fabrication alimentaire : recettes, lots, dates limites, contrôles, traçabilité dans les deux sens. Le nom compte moins que la capacité à relier les lots sur la ligne." },
        { q: "Comment assurer la traçabilité des lots ?", a: "En donnant un lot à chaque réception, en scannant ce lot à chaque pesée, et en donnant un lot à chaque fabrication et à chaque palette. Le lien pris à la pesée permet de lire dans les deux sens : de la matière au client, et du client à la matière." },
        { q: "Comment retrouver rapidement les clients d'un lot ?", a: "Si chaque palette expédiée porte ses lots et son client, la liste sort en un écran : palettes en stock à bloquer, palettes livrées avec dates et quantités. Sans cela, il faut recouper les bons de livraison à la main." },
        { q: "Comment calculer le rendement matière ?", a: "Produit conforme sorti, divisé par la matière entrée, pour chaque lot. Retirez ensuite la freinte prévue par la recette et les rebuts déclarés : ce qui reste est un écart à expliquer. Suivez-le par ligne et par équipe." },
        { q: "Pourquoi mon rendement baisse-t-il ?", a: "Les causes à écarter : un réglage de ligne, une balance, une matière plus humide ou d'un autre fournisseur, des rebuts non déclarés, des pertes aux changements de format. Six lots comparés sur la même ligne disent où regarder." },
        { q: "Comment gérer les dates limites ?", a: "La date naît au conditionnement, avec le lot. Le stock se sort ensuite par date, les plus proches d'abord, et le logiciel signale ce qui approche de l'échéance tant qu'il est encore temps de le vendre." },
        { q: "Peut-on remplacer les fiches de contrôle papier ?", a: "Oui : les mesures se saisissent sur une tablette au poste, à l'heure où elles sont prises. Une valeur hors limite déclenche une alerte et peut bloquer le lot. Le papier reste possible en secours." },
        { q: "Le logiciel fonctionne-t-il sans connexion sur la ligne ?", a: "Il le doit. Les postes de pesée et de contrôle enregistrent sur place et se synchronisent quand le réseau revient : une ligne ne s'arrête pas pour une coupure de Wi-Fi." },
        { q: "Combien de temps pour équiper une unité ?", a: "Huit semaines dans l'exemple de cette page, pour une ligne et une famille de produits, jusqu'à un exercice de rappel. Les autres lignes suivent, l'une après l'autre." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Quelques secondes par pesée ; sans elles, plus rien ne se retrouve." },
      { after: 3, text: "Un lot à 91 % ne dit rien. Six lots qui descendent disent où regarder." },
    ],
    cta: { eyebrow: "Dites-nous ce que vous fabriquez, sur combien de lignes, et comment vos lots sont numérotés aujourd'hui : nous commençons par une semaine en usine", title: "Deux jours pour retrouver un lot, rendement qui baisse, fiches de contrôle sur papier, rappel impossible à limiter, ou une unité en Algérie dont vous voulez lire la production depuis la France", body: "Symloop construit le lien entre vos lots : recettes, pesées scannées, bilan matière, contrôles au poste, palettes et clients. Décrivez-nous votre fabrication, vos matières, et la question à laquelle vous ne savez pas répondre en moins d'une heure." },
    related: { label: 'À lire aussi', items: [
      { href: L.lots, kind: '2027', name: 'Traçabilité par lot : réception, quarantaine, rappel' },
      { href: L.fabrication, kind: '2027', name: 'Fabrication : ce que coûte un produit fini' },
      { href: L.planif, kind: '2027', name: 'Planification de production : capacité, date promise' },
      { href: L.froid, kind: '2027', name: 'Chaîne du froid : sondes, alertes, preuve de livraison' },
    ] },
  },
  en: {
    kind: 'Food industry software · Algeria · 2027', title: "Food manufacturing software in Algeria (2027): two days to find one lot, a yield that falls without anyone knowing where, check sheets on paper; traceability, mass balance, quality, and what we put in place",
    dek: "“We make canned food. A supplier reports a defect on a lot of raw material, and it takes us two days of notebooks to find out which products it went into and which customers they went to. Yield has been falling for a month and nobody knows on which line. Check sheets are filled in on paper, sometimes the next day. Is there software for the food industry?” A food plant stands on one link: the one that ties each lot of material to each lot of product. Taken at the weighing, it gives the recall, the yield and the proof.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Food manufacturing software', 'Lot traceability', 'Product recall', 'Mass balance and yield', 'Quality checks', 'Algeria 2027'],
    intro: [
      "**Short answer.** Food manufacturing software holds five things: **the recipes**, versioned; **the lots**, from raw material to finished product, linked to one another; **production**, order by order, with what went in and what came out; **quality**, measurement by measurement; **stock and shipping**, with expiry dates. Everything rests on one gesture: **scanning the lot of material at the moment of weighing**. That link gives three answers that notebooks do not give in time: **where did this lot go**, in both directions; **how much material became product**, lot by lot; **did this lot pass its checks**, and who measured it.",
      "This page is for the manager or production lead of a cannery, a dairy, a biscuit plant, a beverage unit or any food manufacturing business, and for the founder based in France who owns a unit in Algeria and wants to read its production from afar. The definitions come from public sources: traceability, lot number, product recall, hazard analysis and critical control points, shelf life, process manufacturing, mass balance, manufacturing execution system, allergens. The cannery, its lots and its yields are a constructed example. The page does not say what regulation requires of your business: that is for your quality manager. It quotes no hardware price.",
    ],
    sections: [
      { heading: "What food manufacturing software must hold", body: [
        "The figure stacks five layers; the second carries all the others.",
      ], visual: 'couches', after: [
        "**Manufacturing by recipe.** Process manufacturing is a branch of manufacturing that is associated with formulas and manufacturing recipes, as opposed to the assembly of discrete units. Once the product is made, it cannot be broken down to its original ingredients: the only memory of what it contains is what was noted at the moment it was made. **The lot.** A lot number is an identification number assigned to a particular quantity of material from a single manufacturer. It enables tracing of the ingredients, quality control checks, and recall information for subsets of production. The whole software is built around it.",
        "**ERP, MES: what are we talking about?** An [ERP](" + L.erp + ") brings the company's main processes together around a shared database. A manufacturing execution system, often called MES, tracks and documents the transformation of raw materials to finished goods; this can be especially important in regulated industries, such as food and beverage. For a mid-sized unit, the question is not the acronym: it is whether the software links the lots, at the weighing, on the line. **What this page does not cover.** The cost of a manufactured product is detailed in [what a finished product costs](" + L.fabrication + "); the schedule of the lines, in [production planning](" + L.planif + ").",
      ] },
      { heading: "From the raw lot to the pallet, in six steps", body: [
        "The figure follows the material, from reception to shipping.",
      ], visual: 'flux', after: [
        "**Reception.** Each delivery receives the supplier's lot and an internal label; it is checked, then released or put in quarantine, as in [the check at reception](" + L.reception + "). **Weighing.** It is the accented step. The operator scans the label of the bag or drum before weighing: the software checks that it is the right material, from a released lot, in the recipe's quantity, and it records the link. A few seconds per weighing; without them, nothing can be found again. **Production.** A production order carries the recipe and its version, the line, the shift, the time.",
        "**The check.** Measurements are entered on a tablet, at the station, at the moment they are taken. **Packing.** The finished lot is born here, with its expiry date: shelf life is the length of time that a commodity may be stored without becoming unfit for use, consumption, or sale. The label carries the lot and the date, printed from the software, see [label printing](" + L.etiquettes + "). **Shipping.** Each pallet has its number and its lots; goods leave by date, the nearest first, as in [traceability by lot](" + L.lots + "). **Without a network.** On a line, the station must keep recording when Wi-Fi drops: see [the offline application](" + L.horsligne + ").",
      ] },
      { heading: "A doubtful lot: where did it go?", body: [
        "The figure follows a lot of material all the way to the customers.",
      ], visual: 'genealogie', after: [
        "**Forward.** A supplier reports a defect on a lot of concentrate. On one screen: that lot went into three production lots, that is fourteen pallets. Six are still in stock and are blocked in one gesture; eight are at five customers, with quantities and dates. A product recall is a request from a manufacturer to return a product after the discovery of safety issues: limiting it to eight pallets rather than a month of production makes all the difference. **Backward.** The reverse reading starts from a jar returned by a customer: its lot, then the materials, the packaging, the line, the shift, the measurements.",
        "**In both directions.** Traceability is the ability to verify the history, location, or application of an item by means of documented recorded identification; in food, its decisive moment is when an issue of contamination arises and a recall is required. For process manufacturing, people speak of forward and backward lot traceability: those are the two readings of the figure. **The drill.** Traceability that has never been tried is not worth much. Regularly, you pick a lot at random and time it: how many minutes for the list of customers? It is the only real test, and it is done on a quiet day. **After the plant.** Temperature during transport is another proof, covered in [the cold chain](" + L.froid + ").",
      ] },
      { heading: "The mass balance: what goes in must come out", body: [
        "The figure weighs one lot, then compares six successive lots.",
      ], visual: 'bilan', after: [
        "**The principle.** A mass balance applies conservation of mass: the mass that enters a system must either leave the system or accumulate within it. In the example, 1,000 kg of material go in; out come 912 kg of conforming product, 50 kg of loss planned by the recipe (water that evaporates, what stays in the tanks) and 22 kg of declared scrap. 16 kg are missing. **What that gap can be.** An approximate weighing, a scale out of adjustment, undeclared scrap, a material wetter than usual, a loss at a format change. The figure does not say which; it says there is something to look for.",
        "**The trend.** One lot at 91.2% worries nobody. Six lots in a row on the same line, from 93.1% to 89.6%, tell another story: something is deteriorating, and you know where and since when. **What a point is worth.** On one tonne, one point of yield is ten kilos of paid-for material that do not become product. Each unit can work out what that weighs over its year. **What to compare by.** By line, by shift, by recipe, by material supplier: the same base, four readings. Yield then enters [the cost of the finished product](" + L.fabrication + "), lot by lot and not as an annual average.",
      ] },
      { heading: "Six questions on a crisis day", body: [
        "The figure compares six questions, with notebooks and then with linked lots.",
      ], visual: 'crise', after: [
        "**The checks.** Hazard analysis and critical control points is a systematic preventive approach to food safety. A critical control point is a point, step, or procedure in a food manufacturing process; monitoring activities are necessary to ensure that the process is under control at each one, and records document that monitoring. The software does not decide your critical points: it knows them, asks for the measurement at the right moment, flags a value outside the limit and blocks the lot. **The sheet filled in later.** A measurement entered on a tablet carries its time: the sheet is no longer filled in the next day.",
        "**Allergens.** The most common food allergies are those to milk, egg, peanuts, tree nuts, fish, shellfish, soy, and wheat; cross-contact occurs when allergens are unintentionally transferred from one food item to another. The recipe carries its allergens; the production order knows what ran before on the line and asks for the planned cleaning. **Blocking.** A blocked lot is blocked everywhere at once: in stock, in picking, on the dock. **The recipe version.** A change of ingredient creates a version; each order keeps its own. The day a customer asks what a lot from March contained, the answer is not “the current recipe”.",
      ] },
      { heading: "Eight weeks, in the example", body: [
        "Eight weeks for one line and one product family, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week in the plant: the recipes as they are applied, the weighing and check sheets, the labels, how lots are numbered today. **One line first.** You do not trace the whole plant at once: one line, one product family, from reception to shipping. **The stations.** A scanner and a screen at weighing, a tablet at the check, a label printer at packing: the equipment follows the gesture, not the other way round. **The recall drill.** The last milestone: a lot picked at random, and the stopwatch.",
        "**What remains afterwards.** A genealogy per lot, a mass balance per order, time-stamped checks, pallets tied to their customers. **Standards.** Frameworks exist, such as the ISO 22000 family, on food safety management, one of whose standards, ISO 22005, covers food traceability; the software supplies the records, it replaces neither the approach nor your quality manager. **Off the shelf or custom.** Specialised software exists for the food industry; it fits when your process falls within its frame. Custom work is justified when the line has its particularities, or when what you already have must be connected. **The durations** are those of a constructed example.",
      ], list: [
        "**What the production lead receives**: versioned recipes with their allergens; a link between each lot of material and each lot of product; a mass balance per production order; checks entered at the station and time-stamped; pallets tied to their customers; a timed recall drill.",
        "**What the plant no longer does**: search notebooks for two days, call every customer of the month, fill in check sheets the next day, discover a fall in yield at stocktake, answer “the current recipe” to a question about an old lot.",
        "**What is measured**: time to find a lot's customers; yield per lot, per line and per shift; unexplained gap in the mass balance; checks done on time; lots blocked and time to release; stock by expiry date.",
        "**What Symloop does**: the survey in the plant, recipes and lots, the weighing and check screens, the labels, the mass balance, pallets and shipping, offline operation on the line, then the recall drill with you.",
      ], faq: [
        { q: "Is there software for the food industry?", a: "Yes. It must hold recipes, lots from raw material to finished product, production, quality checks and stock by expiry date. The point to check: does it link each lot of material to each lot of product, at the moment of weighing?" },
        { q: "What is a food ERP?", a: "Management software that adds to the usual functions, purchasing, stock, sales, what food manufacturing requires: recipes, lots, expiry dates, checks, traceability in both directions. The name matters less than the ability to link lots on the line." },
        { q: "How do you ensure lot traceability?", a: "By giving a lot to each reception, scanning that lot at each weighing, and giving a lot to each production run and each pallet. The link taken at weighing lets you read in both directions: from material to customer, and from customer to material." },
        { q: "How do you quickly find a lot's customers?", a: "If each shipped pallet carries its lots and its customer, the list comes out on one screen: pallets in stock to block, pallets delivered with dates and quantities. Without that, delivery notes have to be cross-checked by hand." },
        { q: "How do you calculate material yield?", a: "Conforming product out, divided by material in, for each lot. Then take away the loss planned by the recipe and the declared scrap: what remains is a gap to explain. Follow it per line and per shift." },
        { q: "Why is my yield falling?", a: "The causes to rule out: a line setting, a scale, a wetter material or one from another supplier, undeclared scrap, losses at format changes. Six lots compared on the same line say where to look." },
        { q: "How do you manage expiry dates?", a: "The date is born at packing, with the lot. Stock then leaves by date, the nearest first, and the software flags what is approaching its date while there is still time to sell it." },
        { q: "Can paper check sheets be replaced?", a: "Yes: measurements are entered on a tablet at the station, at the time they are taken. A value outside the limit triggers an alert and can block the lot. Paper remains possible as a fallback." },
        { q: "Does the software work without a connection on the line?", a: "It has to. Weighing and check stations record locally and synchronise when the network returns: a line does not stop for a Wi-Fi cut." },
        { q: "How long does it take to equip a unit?", a: "Eight weeks in this page's example, for one line and one product family, up to a recall drill. The other lines follow, one after another." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A few seconds per weighing; without them, nothing can be found again." },
      { after: 3, text: "One lot at 91% says nothing. Six lots going down say where to look." },
    ],
    cta: { eyebrow: "Tell us what you make, on how many lines, and how your lots are numbered today: we start with a week in the plant", title: "Two days to find one lot, a falling yield, check sheets on paper, a recall that cannot be limited, or a unit in Algeria whose production you want to read from France", body: "Symloop builds the link between your lots: recipes, scanned weighings, mass balance, checks at the station, pallets and customers. Describe your manufacturing to us, your materials, and the question you cannot answer in under an hour." },
    related: { label: 'Also read', items: [
      { href: L.lots, kind: '2027', name: 'Traceability by lot: reception, quarantine, recall' },
      { href: L.fabrication, kind: '2027', name: 'Manufacturing: what a finished product costs' },
      { href: L.planif, kind: '2027', name: 'Production planning: capacity, promised date' },
      { href: L.froid, kind: '2027', name: 'Cold chain: probes, alerts, proof of delivery' },
    ] },
  },
  ar: {
    kind: 'برنامج الصناعة الغذائية · الجزائر · 2027', title: "برنامج الصناعة الغذائية في الجزائر (2027): يومان للعثور على حصة، مردود ينزل دون أن يُعرف أين، وأوراق مراقبة على الورق؛ التتبّع، حصيلة المادة، الجودة، وما نضعه",
    dek: "«نصنع المصبَّرات. مورّد يبلّغنا عن عيب في حصة من المادة الأولية، ويلزمنا يومان من الدفاتر لنعرف في أي منتجات دخلت وعند أي زبائن ذهبت. المردود ينزل منذ شهر دون أن نعرف على أي خط. وأوراق المراقبة تُملأ على الورق، أحياناً في الغد. هل يوجد برنامج للصناعة الغذائية؟» المصنع الغذائي يقوم على رابط واحد: الذي يربط كل حصة مادة بكل حصة منتوج. وإذا أُخذ عند الوزن، أعطى السحب والمردود والدليل.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج الصناعة الغذائية', 'تتبّع الحصص', 'سحب المنتوج', 'حصيلة المادة والمردود', 'مراقبة الجودة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج الصناعة الغذائية يمسك خمسة أشياء: **الوصفات**، بنسخها؛ **الحصص**، من المادة الأولية إلى المنتوج النهائي، مربوطاً بعضها ببعض؛ **الإنتاج**، أمراً بأمر، مع ما دخل وما خرج؛ **الجودة**، قياساً بقياس؛ و**المخزون والإرسال**، مع تواريخ الصلاحية. وكل شيء يقوم على حركة واحدة: **مسح حصة المادة لحظة الوزن**. وهذا الرابط يعطي ثلاثة أجوبة لا تعطيها الدفاتر في وقتها: **أين ذهبت هذه الحصة**، في الاتجاهين؛ **كم من المادة صار منتوجاً**، حصة بحصة؛ و**هل اجتازت هذه الحصة مراقباتها**، ومن قاسها.",
      "هذه الصفحة موجّهة إلى مسيّر أو مسؤول إنتاج في مصنع مصبَّرات أو ملبنة أو مصنع بسكويت أو وحدة مشروبات أو أي تصنيع غذائي، وإلى المؤسس المقيم في فرنسا الذي يملك وحدة في الجزائر ويريد قراءة إنتاجها من بعيد. التعريفات من مصادر عمومية: التتبّع، رقم الحصة، سحب المنتوج، تحليل المخاطر والنقاط الحرجة، مدة الحفظ، التصنيع بالطريقة، حصيلة المادة، نظام تنفيذ التصنيع، ومسبّبات الحساسية. ومصنع المصبَّرات وحصصه ومردوداته مثال مركَّب. والصفحة لا تقول ما يفرضه التنظيم على نشاطكم: هذا من اختصاص مسؤول الجودة عندكم. ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يجب أن يمسكه برنامج الصناعة الغذائية", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية تحمل كل الأخريات.",
      ], visual: 'couches', after: [
        "**تصنيع بالوصفة.** التصنيع بالطريقة فرع من الصناعة يعمل بالتركيبات والوصفات، مقابل تصنيع الوحدات التي تُركَّب. وحين يُصنع المنتوج، لا يمكن تفكيكه إلى مكوّناته: والذاكرة الوحيدة لما يحتويه هي ما سُجّل لحظة صنعه. **الحصة.** رقم الحصة رقم تعريف يُسند إلى كمية معيّنة من مادة آتية من مصنّع واحد. ويسمح بالرجوع إلى المكوّنات، بإجراء مراقبات الجودة، وبحصر السحب في جزء من الإنتاج. والبرنامج كله مبني حوله.",
        "**ما المقصود بهذه التسميات؟** [النظام المتكامل](" + L.erp + ")، أي " + I('ERP') + "، يجمع العمليات الرئيسية للمؤسسة حول قاعدة مشتركة. ونظام تنفيذ التصنيع، المسمى غالباً " + I('MES') + "، يتابع ويوثّق تحويل المواد الأولية إلى منتجات نهائية؛ وهذا مهم بصفة خاصة في الصناعات المنظَّمة، مثل الغذائية. ولوحدة متوسطة الحجم، السؤال ليس التسمية: بل هل يربط البرنامج الحصص، عند الوزن، على الخط. **ما لا تعالجه هذه الصفحة.** كلفة المنتوج المصنَّع مفصَّلة في [ما يكلّفه المنتوج النهائي](" + L.fabrication + ")؛ ورزنامة الخطوط، في [تخطيط الإنتاج](" + L.planif + ").",
      ] },
      { heading: "من حصة المادة إلى المنصّة، في ست مراحل", body: [
        "الشكل يتابع المادة، من الاستلام إلى الإرسال.",
      ], visual: 'flux', after: [
        "**الاستلام.** كل تسليم يتلقى حصة المورّد وملصقاً داخلياً؛ ويُراقَب، ثم يُحرَّر أو يوضع في الحجر، كما في [المراقبة عند الاستلام](" + L.reception + "). **الوزن.** هو المرحلة المبرزة. العامل يمسح ملصق الكيس أو البرميل قبل الوزن: فيتحقق البرنامج أنها المادة الصحيحة، من حصة محرَّرة، بكمية الوصفة، ويسجّل الرابط. ثوانٍ قليلة لكل وزن؛ ودونها، لا يُعثر على شيء بعدها. **التصنيع.** أمر التصنيع يحمل الوصفة ونسختها، الخط، الفرقة، والساعة.",
        "**المراقبة.** القياسات تُدخَل على لوحة، في المركز، لحظة أخذها. **التعبئة.** حصة المنتوج النهائي تولد هنا، مع تاريخ صلاحيتها: مدة الحفظ هي المدة التي يمكن أن تُخزَّن فيها السلعة دون أن تصير غير صالحة للاستعمال أو الاستهلاك أو البيع. والملصق يحمل الحصة والتاريخ، مطبوعين من البرنامج، انظر [طباعة الملصقات](" + L.etiquettes + "). **الإرسال.** لكل منصّة رقمها وحصصها؛ والإخراج يجري حسب التاريخ، الأقرب أولاً، كما في [التتبّع بالحصة](" + L.lots + "). **دون شبكة.** على الخط، يجب أن يواصل المركز التسجيل حين يسقط الواي فاي: انظر [التطبيق دون اتصال](" + L.horsligne + ").",
      ] },
      { heading: "حصة مشكوك فيها: أين ذهبت؟", body: [
        "الشكل يتابع حصة مادة حتى الزبائن.",
      ], visual: 'genealogie', after: [
        "**نحو الأمام.** مورّد يبلّغ عن عيب في حصة من المعجون. في شاشة واحدة: هذه الحصة دخلت في ثلاث حصص إنتاج، أي أربع عشرة منصّة. ست ما زالت في المخزون وتُحجز بحركة واحدة؛ وثماني عند خمسة زبائن، مع الكميات والتواريخ. وسحب المنتوج هو طلب المصنّع إرجاع منتوج بعد اكتشاف مشكل في السلامة: وحصره في ثماني منصّات بدل شهر من الإنتاج هو كل الفرق. **نحو الخلف.** القراءة المعاكسة تنطلق من قارورة أعادها زبون: حصتها، ثم المواد، التغليف، الخط، الفرقة، والقياسات.",
        "**في الاتجاهين.** التتبّع هو القدرة على التحقق من تاريخ سلعة أو موضعها أو استعمالها بواسطة تعريفات مسجَّلة؛ وفي الغذاء، لحظته الحاسمة حين تظهر مشكلة تلوّث ويلزم السحب. وفي التصنيع بالطريقة، يُتحدث عن تتبّع الحصص إلى الأمام وإلى الخلف: وهما قراءتا الشكل. **التمرين.** التتبّع الذي لم يُجرَّب قط لا يساوي كثيراً. وبانتظام، تُختار حصة عشوائياً ويُحسب الوقت: كم دقيقة لقائمة الزبائن؟ هذا الاختبار الحقيقي الوحيد، ويُجرى في يوم هادئ. **بعد المصنع.** الحرارة أثناء النقل دليل آخر، في [سلسلة التبريد](" + L.froid + ").",
      ] },
      { heading: "حصيلة المادة: ما يدخل يجب أن يخرج", body: [
        "الشكل يزن حصة واحدة، ثم يقارن ست حصص متتالية.",
      ], visual: 'bilan', after: [
        "**المبدأ.** حصيلة المادة تطبّق حفظ الكتلة: ما يدخل إلى نظام يجب أن يخرج منه أو يتراكم فيه. في المثال، يدخل 1000 كلغ من المادة؛ ويخرج 912 كلغ من المنتوج المطابق، 50 كلغ من الفاقد المتوقَّع في الوصفة (الماء الذي يتبخر، وما يبقى في الأحواض)، و22 كلغ من المرفوضات المصرَّح بها. وينقص 16 كلغ. **ما قد يكونه هذا الفارق.** وزن تقريبي، ميزان غير مضبوط، مرفوضات لم يُصرَّح بها، مادة أكثر رطوبة من العادة، أو ضياع عند تغيير الحجم. الرقم لا يقول أيها؛ هو يقول إن هناك ما يُبحث عنه.",
        "**الاتجاه.** حصة عند 91,2 بالمئة لا تقلق أحداً. وست حصص متتالية على الخط نفسه، من 93,1 إلى 89,6 بالمئة، تحكي شيئاً آخر: شيء يتدهور، ونعرف أين ومنذ متى. **ما تساويه نقطة.** على طن واحد، نقطة مردود تعني عشرة كيلوغرامات من مادة مدفوعة لا تصير منتوجاً. ولكل وحدة أن تحسب ما يزنه ذلك في سنتها. **بماذا يُقارَن.** حسب الخط، الفرقة، الوصفة، ومورّد المادة: القاعدة نفسها، وأربع قراءات. ثم يدخل المردود في [كلفة المنتوج النهائي](" + L.fabrication + ")، حصة بحصة لا بمتوسط سنوي.",
      ] },
      { heading: "ستة أسئلة في يوم أزمة", body: [
        "الشكل يقارن ستة أسئلة، بالدفاتر ثم بحصص مربوطة.",
      ], visual: 'crise', after: [
        "**المراقبات.** تحليل المخاطر والنقاط الحرجة مقاربة وقائية ومنهجية لسلامة الأغذية. والنقطة الحرجة مرحلة من طريقة التصنيع؛ ويلزم رصد للتأكد من أن الطريقة متحكَّم فيها عند كل نقطة، وتسجيلات تحفظ أثر ذلك. والبرنامج لا يقرر نقاطكم الحرجة: هو يعرفها، يطلب القياس في اللحظة المناسبة، ينبّه إلى قيمة خارج الحد، ويحجز الحصة. **الورقة التي تُملأ بعد حين.** القياس المُدخَل على اللوحة يحمل ساعته: فلا تُملأ الورقة في الغد.",
        "**مسبّبات الحساسية.** أكثر الحساسيات الغذائية شيوعاً تخص الحليب، البيض، الفول السوداني، المكسّرات، السمك، القشريات، الصويا، والقمح؛ ويقع التلامس العرضي حين ينتقل مسبّب حساسية دون قصد من غذاء إلى آخر. الوصفة تحمل مسبّباتها؛ وأمر التصنيع يعرف ما مرّ قبله على الخط ويطلب التنظيف المقرَّر. **الحجز.** الحصة المحجوزة محجوزة في كل مكان دفعة واحدة: في المخزون، في التحضير، وعلى الرصيف. **نسخة الوصفة.** تغيير مكوّن يُنشئ نسخة؛ وكل أمر يحتفظ بنسخته. ويوم يسأل زبون عما كانت تحتويه حصة من مارس، ليس الجواب «الوصفة الحالية».",
      ] },
      { heading: "ثمانية أسابيع، في المثال", body: [
        "ثمانية أسابيع لخط واحد وصنف واحد من المنتجات، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع في المصنع: الوصفات كما تُطبَّق، أوراق الوزن والمراقبة، الملصقات، وطريقة ترقيم الحصص اليوم. **خط واحد أولاً.** لا يُتتبَّع المصنع كله دفعة واحدة: خط واحد، صنف واحد، من الاستلام إلى الإرسال. **المراكز.** قارئ وشاشة عند الوزن، لوحة عند المراقبة، وطابعة ملصقات عند التعبئة: العتاد يتبع الحركة، لا العكس. **تمرين السحب.** آخر محطة: حصة تُختار عشوائياً، وساعة التوقيت.",
        "**ما يبقى بعد ذلك.** نسب لكل حصة، حصيلة مادة لكل أمر، مراقبات مؤرَّخة بالساعة، ومنصّات مربوطة بزبائنها. **المعايير.** توجد مرجعيات، مثل عائلة " + I('ISO 22000') + " لإدارة سلامة الأغذية، ومنها معيار خاص بتتبّع الأغذية؛ والبرنامج يوفّر التسجيلات، ولا يعوّض المسعى ولا مسؤول الجودة عندكم. **جاهز أو على المقاس.** توجد برامج متخصصة للصناعة الغذائية؛ وتناسب حين تدخل طريقتكم في إطارها. والعمل على المقاس يُبرَّر حين تكون للخط خصوصياته، أو حين يجب ربط ما عندكم من قبل. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما يتلقاه المسؤول**: وصفات بنسخها مع مسبّبات حساسيتها؛ رابط بين كل حصة مادة وكل حصة منتوج؛ حصيلة مادة لكل أمر تصنيع؛ مراقبات تُدخَل في المركز ومؤرَّخة بالساعة؛ منصّات مربوطة بزبائنها؛ وتمرين سحب موقوت.",
        "**ما لا يفعله المصنع بعد الآن**: البحث يومين في الدفاتر، الاتصال بكل زبائن الشهر، ملء أوراق المراقبة في الغد، اكتشاف نزول المردود عند الجرد، والجواب بـ«الوصفة الحالية» عن سؤال حول حصة قديمة.",
        "**ما يُقاس**: الوقت اللازم للعثور على زبائن حصة؛ المردود لكل حصة، لكل خط، ولكل فرقة؛ الفارق دون تفسير في حصيلة المادة؛ المراقبات المنجزة في وقتها؛ الحصص المحجوزة وأجل تحريرها؛ والمخزون حسب تاريخ الصلاحية.",
        "**ما تفعله Symloop**: المعاينة في المصنع، الوصفات والحصص، شاشات الوزن والمراقبة، الملصقات، حصيلة المادة، المنصّات والإرسال، الاشتغال دون اتصال على الخط، ثم تمرين السحب معكم.",
      ], faq: [
        { q: "هل يوجد برنامج للصناعة الغذائية؟", a: "نعم. ويجب أن يمسك الوصفات، الحصص من المادة إلى المنتوج النهائي، الإنتاج، مراقبات الجودة، والمخزون حسب تاريخ الصلاحية. والنقطة التي تُراجَع: هل يربط كل حصة مادة بكل حصة منتوج، لحظة الوزن؟" },
        { q: "ما هو النظام المتكامل للصناعة الغذائية؟", a: "برنامج تسيير يضيف إلى الوظائف المعتادة، المشتريات والمخزون والمبيعات، ما يتطلبه التصنيع الغذائي: الوصفات، الحصص، تواريخ الصلاحية، المراقبات، والتتبّع في الاتجاهين. والاسم أقل أهمية من القدرة على ربط الحصص على الخط." },
        { q: "كيف يُضمن تتبّع الحصص؟", a: "بإعطاء حصة لكل استلام، مسح هذه الحصة عند كل وزن، وإعطاء حصة لكل تصنيع ولكل منصّة. والرابط المأخوذ عند الوزن يسمح بالقراءة في الاتجاهين: من المادة إلى الزبون، ومن الزبون إلى المادة." },
        { q: "كيف يُعثر بسرعة على زبائن حصة؟", a: "إذا كانت كل منصّة مُرسَلة تحمل حصصها وزبونها، خرجت القائمة في شاشة واحدة: منصّات في المخزون تُحجز، ومنصّات مسلَّمة بتواريخها وكمياتها. ودون ذلك، يجب مطابقة وصولات التسليم باليد." },
        { q: "كيف يُحسب مردود المادة؟", a: "المنتوج المطابق الخارج، مقسوماً على المادة الداخلة، لكل حصة. ثم انزعوا الفاقد المتوقَّع في الوصفة والمرفوضات المصرَّح بها: ما يبقى فارق يجب تفسيره. وتابعوه لكل خط ولكل فرقة." },
        { q: "لماذا ينزل مردودي؟", a: "الأسباب التي تُستبعد: ضبط الخط، ميزان، مادة أكثر رطوبة أو من مورّد آخر، مرفوضات لم يُصرَّح بها، وضياع عند تغيير الحجم. وست حصص مقارَنة على الخط نفسه تقول أين يُنظر." },
        { q: "كيف تُسيَّر تواريخ الصلاحية؟", a: "التاريخ يولد عند التعبئة، مع الحصة. ثم يخرج المخزون حسب التاريخ، الأقرب أولاً، والبرنامج ينبّه إلى ما يقترب من أجله ما دام بيعه ممكناً." },
        { q: "هل يمكن تعويض أوراق المراقبة؟", a: "نعم: القياسات تُدخَل على لوحة في المركز، في ساعة أخذها. والقيمة خارج الحد تطلق تنبيهاً وقد تحجز الحصة. ويبقى الورق ممكناً احتياطاً." },
        { q: "هل يشتغل البرنامج دون اتصال على الخط؟", a: "يجب ذلك. مراكز الوزن والمراقبة تسجّل في مكانها وتُزامَن حين تعود الشبكة: الخط لا يتوقف لانقطاع الواي فاي." },
        { q: "كم من الوقت لتجهيز وحدة؟", a: "ثمانية أسابيع في مثال هذه الصفحة، لخط واحد وصنف واحد من المنتجات، حتى تمرين السحب. والخطوط الأخرى تتبع، واحداً بعد واحد." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "ثوانٍ قليلة لكل وزن؛ ودونها، لا يُعثر على شيء بعدها." },
      { after: 3, text: "حصة عند 91 بالمئة لا تقول شيئاً. وست حصص تنزل تقول أين يُنظر." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا تصنعون، على كم خط، وكيف تُرقَّم حصصكم اليوم: نبدأ بأسبوع في المصنع", title: "يومان للعثور على حصة، مردود ينزل، أوراق مراقبة على الورق، سحب لا يمكن حصره، أو وحدة في الجزائر تريدون قراءة إنتاجها من فرنسا", body: "Symloop تبني الرابط بين حصصكم: الوصفات، الوزن بالمسح، حصيلة المادة، المراقبات في المركز، المنصّات والزبائن. صِفوا لنا تصنيعكم، موادكم، والسؤال الذي لا تستطيعون الإجابة عنه في أقل من ساعة." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.lots, kind: '2027', name: 'التتبّع بالحصة: الاستلام، الحجر، والسحب' },
      { href: L.fabrication, kind: '2027', name: 'التصنيع: ما يكلّفه المنتوج النهائي' },
      { href: L.planif, kind: '2027', name: 'تخطيط الإنتاج: الطاقة والتاريخ الموعود' },
      { href: L.froid, kind: '2027', name: 'سلسلة التبريد: المجسّات، التنبيهات، ودليل التسليم' },
    ] },
  },
};

const KEYWORDS = "logiciel agroalimentaire algérie 2027, logiciel de gestion agroalimentaire, logiciel erp agroalimentaire, logiciel traçabilité agroalimentaire, logiciel qualité agroalimentaire, logiciel de gestion de production agroalimentaire, logiciel mes agroalimentaire, traçabilité des lots, rappel de lot, bilan matière rendement, food manufacturing software algeria, food erp, lot traceability software, product recall, mass balance yield, برنامج الصناعة الغذائية, برنامج تسيير مصنع غذائي الجزائر, تتبّع الحصص, سحب المنتوج, حصيلة المادة, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
