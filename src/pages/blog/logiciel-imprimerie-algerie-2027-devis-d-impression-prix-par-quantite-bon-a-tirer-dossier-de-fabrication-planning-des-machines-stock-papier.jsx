import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-imprimerie-algerie-2027-devis-d-impression-prix-par-quantite-bon-a-tirer-dossier-de-fabrication-planning-des-machines-stock-papier.mjs';

const SLUG = 'logiciel-imprimerie-algerie-2027-devis-d-impression-prix-par-quantite-bon-a-tirer-dossier-de-fabrication-planning-des-machines-stock-papier';
const FIGURES = ['commande', 'quantite', 'couches', 'travaux', 'pose', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  config: '/blog/chaque-devis-prend-deux-heures-configurateur-produit-sur-mesure-application-algerie-2027-options-contraintes-regles-de-prix-nomenclature/',
  planif: '/blog/on-promet-des-delais-qu-on-ne-tient-pas-planification-de-production-application-algerie-2027-capacite-charge-goulot-date-promise-calculee/',
  fabrication: '/blog/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier/',
  espace: '/blog/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien/',
  catalogue: '/blog/comment-creer-un-catalogue-en-ligne-en-algerie-2027-catalogue-pdf-jamais-a-jour-fiches-produits-prix-par-client-demande-de-devis-sans-boutique/',
  soustraitance: '/blog/le-sous-traitant-a-livre-en-retard-et-on-l-a-paye-quand-meme-sous-traitance-application-algerie-2027-ordres-matieres-confiees-reception-facture/',
  rentab: '/blog/comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel imprimerie · Algérie · 2027', title: "Logiciel imprimerie en Algérie (2027) : des devis faits de mémoire, le même prix pour 300 et 3 000 exemplaires, des fichiers et des bons à tirer dans WhatsApp, un atelier sans planning ; prix par quantité, dossier de fabrication, et ce qu'on met en place",
    dek: "« Je dirige une imprimerie de douze personnes : offset, numérique, grand format. Chaque devis se fait de mémoire, par la seule personne qui sait chiffrer, et il met une demi-journée à partir. Les fichiers et les validations des clients sont dans WhatsApp, nous avons réimprimé deux fois ce mois-ci une version que le client n'avait pas approuvée, et personne ne sait dire à midi ce qui sort ce soir. Existe-t-il un logiciel pour une imprimerie ? » Une imprimerie vend des travaux tous différents : le prix se calcule, il ne se devine pas. Et chaque commande a besoin d'une fiche qui la suit, de l'épreuve validée à la livraison.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel imprimerie', "Devis d'impression", 'Offset et numérique', 'Imposition et papier', 'Bon à tirer et dossier de fabrication', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel d'imprimerie tient cinq choses : **le devis**, avec un prix calculé pour chaque quantité ; **le dossier de fabrication**, une fiche par commande ; **le planning** des machines et du façonnage ; **le papier**, en stock et réservé ; **les clients**, avec leurs fichiers et leurs recommandes. Deux mécanismes font l'essentiel : **un moteur de prix** qui choisit le procédé et compte les poses, les feuilles et les finitions, pour que le devis parte en quelques minutes et non en une demi-journée ; **un bon à tirer** validé en ligne, daté, attaché à la commande, sans lequel rien ne part en machine.",
      "Cette page s'adresse à celles et ceux qui dirigent une imprimerie offset ou numérique, un atelier de grand format et d'enseignes, une entreprise d'étiquettes ou d'emballages, un atelier de marquage d'objets et de textile, et à celles et ceux qui en possèdent une en Algérie et la suivent depuis la France. Les définitions viennent de sources publiques : impression offset, impression numérique, imposition, épreuve contractuelle, prépresse, formats de papier, grammage, rame, fond perdu, quadrichromie, ton direct, impression en ligne, coûts fixes et variables. L'imprimerie de douze personnes, ses prix et ses feuilles sont un exemple construit ; les montants sont fictifs. La page ne traite pas des mentions à porter sur les documents imprimés, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "La vie d'une commande d'impression", body: [
        "La figure suit une commande en six temps.",
      ], visual: 'commande', after: [
        "**La demande.** Format, papier, couleurs, quantités, finition, date : six réponses sans lesquelles aucun prix n'est juste. Un formulaire qui les exige évite trois allers-retours. **Le devis.** Il donne un prix pour plusieurs quantités, parce que le client hésite presque toujours entre deux. **Le bon à tirer.** C'est le temps accentué. Une épreuve contractuelle sert d'accord entre le client et l'imprimeur, signé avant que l'impression commence. Dans le logiciel, le client ouvre l'épreuve, la valide ou la commente ; la validation est datée, nominative, attachée à la commande.",
        "**Ce que cela évite.** La version « finale » envoyée sur WhatsApp à 23 h, puis la « finale 2 » le lendemain : l'atelier imprime celle qu'il a sous la main. Avec une seule épreuve valide par commande, la question ne se pose plus. **Le prépresse.** On appelle ainsi ce qui se passe entre la création de la maquette et l'impression : contrôle du fichier, fond perdu, couleurs. Le fond perdu est l'impression qui dépasse la ligne où la feuille sera coupée ; il mesure en général de 2 à 5 mm. Un fichier sans fond perdu se détecte à la réception, pas au massicot. **Ensuite.** Impression, façonnage, livraison : chaque étape se pointe sur le dossier ; le bon de livraison signé ferme la commande et déclenche la facture, dans [la chaîne du devis à la facture](" + L.devis + ").",
      ] },
      { heading: "Offset ou numérique : le prix selon la quantité", body: [
        "La figure chiffre le même flyer dans les deux procédés.",
      ], visual: 'quantite', after: [
        "**Deux procédés, deux structures de coût.** L'impression offset est une technique courante où l'image encrée est transférée vers le support ; elle convient le mieux à la production économique de grands volumes, et elle a un coût d'entrée : le temps et le coût des plaques et du réglage de la presse. L'impression numérique imprime directement à partir d'un fichier : son coût à la page est plus élevé, mais elle évite les étapes de fabrication des plaques. **Fixe et variable.** Les coûts fixes ne dépendent pas de la quantité produite ; les coûts variables changent avec elle. Dans l'exemple : 12 000 DA puis 6 DA par exemplaire en offset, 1 500 DA puis 14 DA en numérique.",
        "**Le point d'égalité.** Les deux droites se croisent là où l'écart de frais fixes est rattrapé par l'écart de coût à l'exemplaire : (12 000 − 1 500) ÷ (14 − 6), soit 1 313 exemplaires. En dessous, le numérique coûte moins ; au-dessus, l'offset. **Ce que le moteur fait.** Pour chaque demande, il calcule les deux, retient le procédé le plus avantageux, ajoute papier, finitions et marge, et sort trois quantités sur le même devis. **Ce que la mémoire fait.** Elle applique le prix à l'unité de 1 000 exemplaires à une commande de 500 : en offset, l'unité y revient à 30 DA, pas à 18. **Vos chiffres.** Ceux de l'exemple sont fictifs ; les vôtres se tirent de vos devis passés. Les règles de prix à options sont détaillées dans [le configurateur de produit sur mesure](" + L.config + ").",
      ] },
      { heading: "Ce que tient un logiciel d'imprimerie", body: [
        "La figure empile cinq couches ; la deuxième suit la commande partout.",
      ], visual: 'couches', after: [
        "**Le dossier de fabrication.** C'est la fiche que tout le monde lit : le travail, le papier, la machine, les quantités, la finition, l'épreuve validée, la date promise, les consignes. Le secteur a d'ailleurs une norme technique pour ces fiches de travail, le format JDF. Sans aller jusque-là, une fiche unique remplace le bout de papier agrafé et la mémoire de l'atelier. **Le planning.** Chaque commande occupe une machine un certain temps, puis passe au façonnage : massicot, plieuse, agrafage, pelliculage. Le planning dit ce qui sort aujourd'hui, et ce qui ne sortira pas si l'on accepte l'urgence de 16 h. Le calcul de charge est celui de [la planification de production](" + L.planif + ").",
        "**Le papier.** Il se suit par format et par grammage : le grammage est la masse du papier par unité de surface, en grammes par mètre carré, et une rame compte 500 feuilles identiques. Une commande acceptée réserve ses feuilles ; le disponible est ce qui reste après réservation, pas ce qui est sur l'étagère. **Les couleurs.** La quadrichromie emploie quatre encres : cyan, magenta, jaune et noir. Un ton direct est une couleur obtenue par une encre imprimée en un seul passage : il s'ajoute au devis comme une couleur de plus. **La sous-traitance.** Dorure, vernis sélectif, découpe : ce qui part chez un confrère se suit comme dans [la sous-traitance](" + L.soustraitance + "). **Le coût réel.** Papier consommé, temps machine et finitions donnent le coût de chaque commande, comme dans [le coût d'un produit fini](" + L.fabrication + ").",
      ] },
      { heading: "Six familles de travaux, six façons de chiffrer", body: [
        "La figure dit, pour six familles, ce qui fait le prix et ce que le devis doit demander.",
      ], visual: 'travaux', after: [
        "**Pourquoi un formulaire par famille.** Un flyer se chiffre à la pose et à la quantité ; une brochure, au nombre de pages et à la reliure ; une bâche, à la surface et aux œillets ; un carnet, aux feuillets et à la numérotation. Un devis à champs libres oblige à tout savoir par cœur ; un formulaire par famille pose les six ou sept questions qui changent le prix, et rien d'autre. **Les formats.** Les formats de la série A sont normalisés : A4 mesure 210 × 297 mm, A5 148 × 210 mm, A6 105 × 148 mm. Chacun est la moitié du précédent, ce qui simplifie les poses.",
        "**Les recommandes.** Certains travaux reviennent : les mêmes cartes, le même carnet, la même étiquette. La commande précédente garde son fichier, son épreuve et son prix ; la recommande se fait en un geste, et le client peut la passer lui-même depuis [son espace client](" + L.espace + "). **La commande en ligne.** On appelle impression en ligne, ou web-to-print, l'impression commerciale qui passe par des sites web. Pour les travaux standard, un [catalogue en ligne](" + L.catalogue + ") avec un prix par quantité suffit souvent pour commencer. **L'impression à la demande.** Les produits ne sont fabriqués qu'une fois la commande passée, plutôt que d'avance et en quantité : imprimer à l'unité n'était pas économique avec les procédés traditionnels.",
      ] },
      { heading: "Le papier : combien de poses par feuille", body: [
        "La figure pose le même flyer dans les deux sens, sur la même feuille.",
      ], visual: 'pose', after: [
        "**L'imposition.** C'est la disposition des pages du produit imprimé sur la feuille de l'imprimeur, pour imprimer plus vite, simplifier la reliure et réduire la gâche de papier. Dans l'exemple, le flyer A6 mesure 111 × 154 mm avec son fond perdu ; sur une feuille dont la zone utile fait 310 × 440 mm, il tient 4 fois couché et 6 fois debout. **Ce que cela change.** Pour 3 000 exemplaires : 750 feuilles ou 500. Un tiers de papier, mais aussi un tiers de passages en machine et de coupes. **La passe.** Les feuilles de réglage s'ajoutent : 40 dans l'exemple, à mesurer chez vous par machine et par type de travail.",
        "**Ce que le moteur calcule.** Pour chaque format de feuille en stock et chaque sens, le nombre de poses, donc de feuilles, donc le coût du papier et le temps machine ; il retient le meilleur montage et l'écrit sur le dossier de fabrication, pour que l'atelier pose comme le devis a compté. **Ce que le stock en tire.** 540 feuilles réservées, et une commande au fournisseur si le disponible ne suffit pas. **La marge.** Un devis qui compte 790 feuilles quand l'atelier en passe 540 est trop haut et perd la commande ; l'inverse la gagne à perte. Dans les deux cas, [la rentabilité](" + L.rentab + ") se joue au devis.",
      ] },
      { heading: "Sept semaines, dans l'exemple", body: [
        "Sept semaines du relevé aux premières recommandes, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine dans l'atelier : vos travaux types, vos machines, vos papiers, et vos devis des derniers mois, d'où se tirent les règles de prix. **Le moteur de prix d'abord.** C'est lui qui libère la personne qui chiffre : il se construit sur deux ou trois familles de travaux, celles qui font le plus de devis. **Le dossier et le bon à tirer.** Ils suivent aussitôt, parce que c'est là que se perdent les fichiers. **Le planning et le papier** viennent ensuite, quand les commandes passent déjà par le logiciel.",
        "**Ce qui reste après.** Des devis qui partent dans l'heure, une épreuve validée par commande, un atelier qui sait ce qui sort ce soir, un stock de papier qui tient compte des commandes acceptées, des recommandes en un geste. **Du marché ou sur mesure.** Des logiciels spécialisés existent pour l'imprimerie, et certains sont très complets ; ils conviennent quand vos travaux et vos machines entrent dans leur cadre. Le sur-mesure se justifie quand vous mêlez plusieurs métiers, offset, numérique, grand format, marquage, ou quand il faut relier ce que vous avez déjà. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que la direction reçoit** : un devis calculé pour plusieurs quantités ; un dossier de fabrication par commande ; une épreuve validée, datée, attachée ; un planning des machines et du façonnage ; un stock de papier avec réservations ; le coût réel et la marge de chaque commande.",
        "**Ce que l'atelier ne fait plus** : attendre la seule personne qui sait chiffrer, chercher la bonne version dans WhatsApp, imprimer sans validation, découvrir à 17 h qu'il manque du papier, redemander au client le fichier de l'an dernier.",
        "**Ce qui est mesuré** : délai entre la demande et le devis ; part des devis acceptés ; commandes livrées à la date promise ; feuilles prévues contre feuilles consommées ; réimpressions et leur cause ; marge par commande et par famille de travaux.",
        "**Ce que fait Symloop** : le relevé dans l'atelier, le moteur de prix par famille de travaux, le dossier de fabrication, le bon à tirer en ligne, le planning, le stock de papier, l'espace client et la recommande, puis les premiers devis chiffrés avec vous.",
      ], faq: [
        { q: "Existe-t-il un logiciel pour une imprimerie ?", a: "Oui. Il doit tenir le devis, le dossier de fabrication, le planning, le papier et les clients. Le point à vérifier : calcule-t-il vraiment le prix, procédé, poses, papier, finitions, ou se contente-t-il de mettre en forme un prix saisi à la main ?" },
        { q: "Comment calculer le prix d'un travail d'impression ?", a: "Frais fixes du procédé, plus coût à l'exemplaire multiplié par la quantité, plus papier selon le nombre de poses, plus finitions, plus marge. Le calcul se refait pour chaque quantité demandée : le prix à l'unité baisse quand la quantité monte." },
        { q: "Offset ou numérique : comment choisir ?", a: "Par la quantité. L'offset a des frais fixes plus élevés et un coût à l'exemplaire plus bas ; le numérique, l'inverse. Le point d'égalité se calcule : dans l'exemple de cette page, il tombe vers 1 313 exemplaires." },
        { q: "Comment faire un devis d'imprimerie rapidement ?", a: "Avec un formulaire par famille de travaux, qui pose les seules questions qui changent le prix, et un moteur qui calcule. Le devis part en quelques minutes, et il ne dépend plus d'une seule personne." },
        { q: "Qu'est-ce qu'un bon à tirer ?", a: "L'épreuve que le client valide avant l'impression : elle sert d'accord entre lui et l'imprimeur. Dans le logiciel, la validation est datée, nominative et attachée à la commande ; rien ne part en machine sans elle." },
        { q: "Qu'est-ce que l'imposition ?", a: "La disposition des pages sur la feuille de l'imprimeur. Elle fixe le nombre de poses par feuille, donc le nombre de feuilles, de passages et de coupes. Le même flyer peut tenir 4 ou 6 fois sur la même feuille selon son sens." },
        { q: "Comment suivre les commandes dans l'atelier ?", a: "Par un dossier de fabrication par commande, pointé à chaque étape : prépresse, impression, façonnage, livraison. Le planning montre ce qui sort aujourd'hui et ce qui est en retard." },
        { q: "Comment gérer le stock de papier d'une imprimerie ?", a: "Par format et par grammage, en feuilles, avec une réservation dès que la commande est acceptée. Le disponible est ce qui reste après réservation ; il déclenche la commande au fournisseur avant la rupture." },
        { q: "Les clients peuvent-ils recommander en ligne ?", a: "Oui : un espace client garde leurs commandes, leurs fichiers et leurs prix. Une recommande à l'identique se passe en un geste, sans nouveau devis ni nouvel envoi de fichier." },
        { q: "Combien de temps pour équiper une imprimerie ?", a: "Sept semaines dans l'exemple de cette page, relevé compris, en commençant par le moteur de prix sur deux ou trois familles de travaux. Les autres familles suivent." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le prix se calcule, il ne se devine pas." },
      { after: 4, text: "Le même flyer, la même feuille : 750 feuilles ou 500, selon le sens." },
    ],
    cta: { eyebrow: "Dites-nous quels travaux vous imprimez, sur quelles machines, et qui chiffre aujourd'hui : nous commençons par une semaine dans l'atelier", title: "Devis faits de mémoire, même prix pour 300 et 3 000 exemplaires, fichiers et validations dans WhatsApp, atelier sans planning, papier qui manque à 17 h, ou imprimerie en Algérie que vous suivez depuis la France", body: "Symloop construit ce qui relie votre atelier : moteur de prix, dossier de fabrication, bon à tirer en ligne, planning et stock de papier. Décrivez-nous vos travaux, vos machines, et le devis que vous mettez le plus de temps à sortir." },
    related: { label: 'À lire aussi', items: [
      { href: L.devis, kind: '2027', name: 'Du devis à la facture sans ressaisie' },
      { href: L.config, kind: '2027', name: 'Configurateur de produit sur mesure : options, règles de prix' },
      { href: L.planif, kind: '2027', name: 'Planification de production : capacité, date promise' },
      { href: L.fabrication, kind: '2027', name: 'Fabrication : ce que coûte un produit fini' },
    ] },
  },
  en: {
    kind: 'Print shop software · Algeria · 2027', title: "Print shop software in Algeria (2027): quotes made from memory, the same price for 300 and 3,000 copies, files and proof approvals in WhatsApp, a workshop with no schedule; price per quantity, job ticket, and what we put in place",
    dek: "“I run a print shop of twelve people: offset, digital, large format. Every quote is made from memory, by the one person who knows how to cost, and it takes half a day to go out. Client files and approvals are in WhatsApp, twice this month we reprinted a version the client had not approved, and at noon nobody can say what ships tonight. Is there software for a print shop?” A print shop sells jobs that are all different: the price is calculated, not guessed. And each order needs a record that follows it, from the approved proof to delivery.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Print shop software', 'Print quotes', 'Offset and digital', 'Imposition and paper', 'Proof approval and job ticket', 'Algeria 2027'],
    intro: [
      "**Short answer.** Print shop software holds five things: **the quote**, with a price calculated for each quantity; **the job ticket**, one record per order; **the schedule** of presses and finishing; **the paper**, in stock and reserved; **the clients**, with their files and their reorders. Two mechanisms do most of the work: **a pricing engine** that chooses the process and counts how many fit a sheet, the sheets and the finishes, so the quote goes out in minutes rather than half a day; **a proof approval** given online, dated, attached to the order, without which nothing goes to press.",
      "This page is for those who run an offset or digital print shop, a large-format and signage workshop, a label or packaging company, a workshop marking objects and textiles, and for those who own one in Algeria and follow it from France. The definitions come from public sources: offset printing, digital printing, imposition, contract proof, prepress, paper sizes, grammage, ream, bleed, four-colour process, spot colour, web-to-print, fixed and variable costs. The print shop of twelve, its prices and its sheets are a constructed example; the amounts are fictitious. The page does not cover what must appear on printed documents, and quotes no hardware price.",
    ],
    sections: [
      { heading: "The life of a print order", body: [
        "The figure follows an order in six steps.",
      ], visual: 'commande', after: [
        "**The request.** Format, paper, colours, quantities, finish, date: six answers without which no price is right. A form that requires them saves three round trips. **The quote.** It gives a price for several quantities, because the client almost always hesitates between two. **Proof approval.** It is the accented step. A contract proof works as the agreement between client and printer, signed off before printing begins. In the software, the client opens the proof, approves it or comments; the approval is dated, named, attached to the order.",
        "**What it avoids.** The “final” version sent on WhatsApp at 11 pm, then “final 2” the next day: the workshop prints the one it has to hand. With a single valid proof per order, the question no longer arises. **Prepress.** That is the name for what happens between creating the layout and printing: checking the file, bleed, colours. Bleed is printing that goes past the line where the sheet will be trimmed; it is generally 2 to 5 mm. A file with no bleed is caught on receipt, not at the guillotine. **Then.** Printing, finishing, delivery: each step is ticked on the job ticket; the signed delivery note closes the order and triggers the invoice, in [the quote-to-invoice chain](" + L.devis + ").",
      ] },
      { heading: "Offset or digital: the price by quantity", body: [
        "The figure costs the same flyer in both processes.",
      ], visual: 'quantite', after: [
        "**Two processes, two cost structures.** Offset printing is a common technique in which the inked image is transferred to the printing surface; it is best suited to producing large volumes economically, and it has an entry cost: the time and cost of plates and press set-up. Digital printing prints directly from a file: its cost per page is higher, but it avoids the steps needed to make plates. **Fixed and variable.** Fixed costs do not depend on the quantity produced; variable costs change with it. In the example: DA 12,000 then DA 6 per copy in offset, DA 1,500 then DA 14 in digital.",
        "**The break-even point.** The two lines cross where the gap in fixed costs is made up by the gap in cost per copy: (12,000 − 1,500) ÷ (14 − 6), that is 1,313 copies. Below, digital costs less; above, offset. **What the engine does.** For each request, it calculates both, keeps the more advantageous process, adds paper, finishes and margin, and puts three quantities on the same quote. **What memory does.** It applies the unit price of 1,000 copies to an order of 500: in offset, the unit there comes to DA 30, not 18. **Your figures.** Those of the example are fictitious; yours are drawn from your past quotes. Pricing rules with options are detailed in [the made-to-order product configurator](" + L.config + ").",
      ] },
      { heading: "What print shop software holds", body: [
        "The figure stacks five layers; the second follows the order everywhere.",
      ], visual: 'couches', after: [
        "**The job ticket.** It is the record everyone reads: the job, the paper, the press, the quantities, the finish, the approved proof, the promised date, the instructions. The industry even has a technical standard for these job tickets, the JDF format. Without going that far, a single record replaces the scrap of paper stapled to the file and the workshop's memory. **The schedule.** Each order occupies a press for a certain time, then moves to finishing: guillotine, folder, stapling, laminating. The schedule says what ships today, and what will not ship if the 4 pm rush job is accepted. The load calculation is that of [production planning](" + L.planif + ").",
        "**The paper.** It is tracked by format and by grammage: grammage is the mass of paper per unit of area, in grams per square metre, and a ream is 500 identical sheets. An accepted order reserves its sheets; what is available is what remains after reservation, not what is on the shelf. **The colours.** Four-colour process uses four inks: cyan, magenta, yellow and black. A spot colour is a colour produced by one ink printed in a single run: it is added to the quote as one more colour. **Subcontracting.** Foil stamping, spot varnish, die cutting: what goes to another printer is followed as in [subcontracting](" + L.soustraitance + "). **The real cost.** Paper consumed, press time and finishes give the cost of each order, as in [the cost of a finished product](" + L.fabrication + ").",
      ] },
      { heading: "Six families of jobs, six ways of costing", body: [
        "The figure says, for six families, what drives the price and what the quote must ask.",
      ], visual: 'travaux', after: [
        "**Why one form per family.** A flyer is costed by how many fit a sheet and by quantity; a brochure, by page count and binding; a banner, by surface and eyelets; a pad, by leaves and numbering. A free-text quote means knowing everything by heart; one form per family asks the six or seven questions that change the price, and nothing else. **The formats.** A-series sizes are standardised: A4 is 210 × 297 mm, A5 148 × 210 mm, A6 105 × 148 mm. Each is half the previous one, which simplifies layouts.",
        "**Reorders.** Some jobs come back: the same cards, the same pad, the same label. The previous order keeps its file, its proof and its price; the reorder is done in one gesture, and the client can place it themselves from [their client area](" + L.espace + "). **Ordering online.** Web-to-print is the name for commercial printing done through websites. For standard jobs, an [online catalogue](" + L.catalogue + ") with a price per quantity is often enough to start. **Print on demand.** Products are made only once the order is placed, rather than in advance and in bulk: printing single copies was not economical with traditional processes.",
      ] },
      { heading: "The paper: how many fit a sheet", body: [
        "The figure lays out the same flyer in both directions, on the same sheet.",
      ], visual: 'pose', after: [
        "**Imposition.** It is the arrangement of the printed product's pages on the printer's sheet, to print faster, simplify binding and reduce paper waste. In the example, the A6 flyer measures 111 × 154 mm with its bleed; on a sheet whose usable area is 310 × 440 mm, it fits 4 times on its side and 6 times upright. **What that changes.** For 3,000 copies: 750 sheets or 500. A third of the paper, but also a third of the press passes and cuts. **Set-up waste.** Set-up sheets are added: 40 in the example, to be measured in your shop per press and per type of job.",
        "**What the engine calculates.** For each sheet format in stock and each direction, the number that fit, hence the sheets, hence the paper cost and press time; it keeps the best layout and writes it on the job ticket, so the workshop lays out the way the quote counted. **What stock gets from it.** 540 sheets reserved, and an order to the supplier if what is available is not enough. **The margin.** A quote that counts 790 sheets when the workshop runs 540 is too high and loses the order; the reverse wins it at a loss. Either way, [profitability](" + L.rentab + ") is decided at the quote.",
      ] },
      { heading: "Seven weeks, in the example", body: [
        "Seven weeks from the survey to the first reorders, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week in the workshop: your typical jobs, your presses, your papers, and your quotes of recent months, from which the pricing rules are drawn. **The pricing engine first.** It is what frees the person who costs: it is built on two or three families of jobs, those that generate the most quotes. **The job ticket and proof approval.** They follow at once, because that is where files get lost. **The schedule and the paper** come next, once orders already pass through the software.",
        "**What remains afterwards.** Quotes that go out within the hour, one approved proof per order, a workshop that knows what ships tonight, a paper stock that takes accepted orders into account, reorders in one gesture. **Off the shelf or custom.** Specialised software exists for print shops, and some of it is very complete; it fits when your jobs and your presses fall within its frame. Custom work is justified when you mix several trades, offset, digital, large format, marking, or when what you already have must be connected. **The durations** are those of a constructed example.",
      ], list: [
        "**What management receives**: a quote calculated for several quantities; a job ticket per order; an approved proof, dated, attached; a schedule of presses and finishing; a paper stock with reservations; the real cost and margin of each order.",
        "**What the workshop no longer does**: wait for the one person who knows how to cost, look for the right version in WhatsApp, print without approval, discover at 5 pm that paper is missing, ask the client again for last year's file.",
        "**What is measured**: time between request and quote; share of quotes accepted; orders delivered on the promised date; sheets planned against sheets consumed; reprints and their cause; margin per order and per family of jobs.",
        "**What Symloop does**: the survey in the workshop, the pricing engine per family of jobs, the job ticket, online proof approval, the schedule, the paper stock, the client area and reorders, then the first quotes costed with you.",
      ], faq: [
        { q: "Is there software for a print shop?", a: "Yes. It must hold the quote, the job ticket, the schedule, the paper and the clients. The point to check: does it really calculate the price, process, layout, paper, finishes, or does it only format a price typed in by hand?" },
        { q: "How do you calculate the price of a print job?", a: "Fixed costs of the process, plus cost per copy times quantity, plus paper according to how many fit a sheet, plus finishes, plus margin. The calculation is redone for each quantity asked: the unit price falls as quantity rises." },
        { q: "Offset or digital: how do you choose?", a: "By quantity. Offset has higher fixed costs and a lower cost per copy; digital, the reverse. The break-even point can be calculated: in this page's example, it falls at about 1,313 copies." },
        { q: "How do you produce a print quote quickly?", a: "With one form per family of jobs, asking only the questions that change the price, and an engine that calculates. The quote goes out in minutes, and it no longer depends on one person." },
        { q: "What is proof approval?", a: "The proof the client signs off before printing: it works as the agreement between them and the printer. In the software, the approval is dated, named and attached to the order; nothing goes to press without it." },
        { q: "What is imposition?", a: "The arrangement of pages on the printer's sheet. It sets how many fit a sheet, hence the number of sheets, passes and cuts. The same flyer can fit 4 or 6 times on the same sheet depending on its direction." },
        { q: "How do you follow orders in the workshop?", a: "With a job ticket per order, ticked at each step: prepress, printing, finishing, delivery. The schedule shows what ships today and what is late." },
        { q: "How do you manage a print shop's paper stock?", a: "By format and by grammage, in sheets, with a reservation as soon as the order is accepted. What is available is what remains after reservation; it triggers the supplier order before stock runs out." },
        { q: "Can clients reorder online?", a: "Yes: a client area keeps their orders, their files and their prices. An identical reorder is placed in one gesture, with no new quote and no new file to send." },
        { q: "How long does it take to equip a print shop?", a: "Seven weeks in this page's example, survey included, starting with the pricing engine on two or three families of jobs. The other families follow." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The price is calculated, not guessed." },
      { after: 4, text: "The same flyer, the same sheet: 750 sheets or 500, depending on its direction." },
    ],
    cta: { eyebrow: "Tell us which jobs you print, on which presses, and who costs them today: we start with a week in the workshop", title: "Quotes made from memory, the same price for 300 and 3,000 copies, files and approvals in WhatsApp, a workshop with no schedule, paper missing at 5 pm, or a print shop in Algeria that you follow from France", body: "Symloop builds what ties your workshop together: pricing engine, job ticket, online proof approval, schedule and paper stock. Describe your jobs to us, your presses, and the quote that takes you longest to send out." },
    related: { label: 'Also read', items: [
      { href: L.devis, kind: '2027', name: 'From quote to invoice without re-entry' },
      { href: L.config, kind: '2027', name: 'Made-to-order product configurator: options, pricing rules' },
      { href: L.planif, kind: '2027', name: 'Production planning: capacity, promised date' },
      { href: L.fabrication, kind: '2027', name: 'Manufacturing: what a finished product costs' },
    ] },
  },
  ar: {
    kind: 'برنامج المطبعة · الجزائر · 2027', title: "برنامج المطبعة في الجزائر (2027): عروض أسعار من الذاكرة، السعر نفسه لـ300 و3000 نسخة، ملفات وموافقات على الطبع في واتساب، وورشة دون تخطيط؛ سعر لكل كمية، ملف التصنيع، وما نضعه",
    dek: "«أسيّر مطبعة من اثني عشر شخصاً: أوفست، رقمي، وقياسات كبيرة. كل عرض سعر يُعدّ من الذاكرة، على يد الشخص الوحيد الذي يعرف التسعير، ويأخذ نصف يوم حتى يخرج. ملفات الزبائن وموافقاتهم في واتساب، أعدنا الطبع مرتين هذا الشهر لنسخة لم يوافق عليها الزبون، ولا أحد يستطيع أن يقول عند منتصف النهار ما الذي يخرج هذا المساء. هل يوجد برنامج للمطبعة؟» المطبعة تبيع أشغالاً كلها مختلفة: السعر يُحسب، ولا يُخمَّن. وكل طلبية تحتاج بطاقة ترافقها، من النموذج المصادَق عليه إلى التسليم.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج المطبعة', 'عرض سعر الطباعة', 'الأوفست والرقمي', 'التوضيب والورق', 'الموافقة على الطبع وملف التصنيع', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج المطبعة يمسك خمسة أشياء: **عرض السعر**، بسعر محسوب لكل كمية؛ **ملف التصنيع**، بطاقة لكل طلبية؛ **تخطيط** الآلات والتشطيب؛ **الورق**، في المخزون ومحجوزاً؛ و**الزبائن**، بملفاتهم وإعادة طلباتهم. وآليتان تصنعان الأهم: **محرّك أسعار** يختار الطريقة ويعدّ النسخ في الورقة، الأوراق، والتشطيبات، ليخرج عرض السعر في دقائق لا في نصف يوم؛ و**موافقة على الطبع** تُعطى عبر الإنترنت، مؤرَّخة، مرفقة بالطلبية، ودونها لا شيء يذهب إلى الآلة.",
      "هذه الصفحة موجّهة إلى من يسيّر مطبعة أوفست أو رقمية، ورشة للقياسات الكبيرة واللافتات، مؤسسة للملصقات أو التغليف، ورشة للطبع على الأغراض والأقمشة، وإلى من يملك واحدة في الجزائر ويتابعها من فرنسا. التعريفات من مصادر عمومية: طباعة الأوفست، الطباعة الرقمية، التوضيب على الورقة، النموذج التعاقدي، ما قبل الطباعة، قياسات الورق، وزن الورق، الرزمة، هامش القص، الألوان الأربعة، اللون الخاص، الطباعة عبر الإنترنت، والتكاليف الثابتة والمتغيرة. والمطبعة ذات الاثني عشر شخصاً وأسعارها وأوراقها مثال مركَّب؛ والمبالغ خيالية. والصفحة لا تتناول البيانات الواجب ظهورها على الوثائق المطبوعة، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "حياة طلبية طباعة", body: [
        "الشكل يتابع طلبية في ست مراحل.",
      ], visual: 'commande', after: [
        "**الطلب.** القياس، الورق، الألوان، الكميات، التشطيب، والتاريخ: ستة أجوبة لا يصحّ سعر دونها. واستمارة تفرضها تجنّب ثلاث مراسلات. **عرض السعر.** يعطي سعراً لعدة كميات، لأن الزبون يتردد في الغالب بين اثنتين. **الموافقة على الطبع.** هي المرحلة المبرزة. النموذج التعاقدي بمثابة اتفاق بين الزبون والمطبعة، يُوقَّع قبل أن تبدأ الطباعة. وفي البرنامج، يفتح الزبون النموذج، يصادق عليه أو يعلّق؛ والمصادقة مؤرَّخة، باسم صاحبها، ومرفقة بالطلبية.",
        "**ما يُتفادى.** النسخة «النهائية» المرسَلة على " + I('WhatsApp') + " في الحادية عشرة ليلاً، ثم «النهائية 2» في الغد: الورشة تطبع التي بين يديها. وبنموذج صالح واحد لكل طلبية، لا يُطرح السؤال. **ما قبل الطباعة.** يُسمّى هكذا ما يجري بين إنشاء التصميم والطباعة: مراقبة الملف، هامش القص، والألوان. وهامش القص هو الطباعة التي تتجاوز الخط الذي ستُقصّ عنده الورقة؛ ويكون عموماً من 2 إلى 5 ملم. وملف دون هامش قص يُكتشف عند الاستلام، لا عند المقصّ. **بعد ذلك.** الطباعة، التشطيب، والتسليم: كل مرحلة تُسجَّل على الملف؛ ووصل التسليم الموقَّع يغلق الطلبية ويطلق الفاتورة، في [سلسلة عرض السعر إلى الفاتورة](" + L.devis + ").",
      ] },
      { heading: "أوفست أم رقمي: السعر حسب الكمية", body: [
        "الشكل يسعّر المطوية نفسها بالطريقتين.",
      ], visual: 'quantite', after: [
        "**طريقتان، وبنيتان للكلفة.** طباعة الأوفست تقنية شائعة تُنقل فيها الصورة المحبَّرة إلى السطح المطبوع؛ وهي الأنسب لإنتاج الكميات الكبيرة اقتصادياً، ولها كلفة دخول: وقت وكلفة الألواح وضبط الآلة. والطباعة الرقمية تطبع مباشرة من ملف: كلفتها للصفحة أعلى، لكنها تتفادى مراحل صنع الألواح. **الثابت والمتغير.** التكاليف الثابتة لا تتوقف على الكمية المنتَجة؛ والمتغيرة تتبدل معها. في المثال: 12000 دج ثم 6 دج للنسخة بالأوفست، و1500 دج ثم 14 دج بالرقمي.",
        "**نقطة التعادل.** الخطان يتقاطعان حيث يُعوَّض فارق المصاريف الثابتة بفارق كلفة النسخة: " + I('(12000 − 1500) ÷ (14 − 6)') + "، أي 1313 نسخة. تحتها، الرقمي يكلّف أقل؛ وفوقها، الأوفست. **ما يفعله المحرّك.** لكل طلب، يحسب الاثنين، يحتفظ بالطريقة الأنسب، يضيف الورق والتشطيبات والهامش، ويُخرج ثلاث كميات في عرض السعر نفسه. **ما تفعله الذاكرة.** تطبّق سعر النسخة لـ1000 نسخة على طلبية من 500: بالأوفست، النسخة هناك بـ30 دج، لا 18. **أرقامكم.** أرقام المثال خيالية؛ وأرقامكم تُستخرج من عروض أسعاركم السابقة. وقواعد السعر ذات الخيارات مفصَّلة في [مُعِدّ المنتوج على المقاس](" + L.config + ").",
      ] },
      { heading: "ما يمسكه برنامج المطبعة", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية ترافق الطلبية في كل مكان.",
      ], visual: 'couches', after: [
        "**ملف التصنيع.** هو البطاقة التي يقرؤها الجميع: الشغل، الورق، الآلة، الكميات، التشطيب، النموذج المصادَق عليه، التاريخ الموعود، والتعليمات. وللقطاع معيار تقني لبطاقات الشغل هذه، هو صيغة " + I('JDF') + ". ودون الذهاب إلى ذلك، بطاقة واحدة تعوّض قصاصة الورق المدبَّسة وذاكرة الورشة. **التخطيط.** كل طلبية تشغل آلة مدة معيّنة، ثم تمرّ إلى التشطيب: المقصّ، الطيّ، التدبيس، والتغليف. والتخطيط يقول ما يخرج اليوم، وما لن يخرج إذا قُبلت الطلبية المستعجلة عند الرابعة. وحساب الحِمل هو حساب [تخطيط الإنتاج](" + L.planif + ").",
        "**الورق.** يُتابَع حسب القياس والوزن: وزن الورق هو كتلته لكل وحدة مساحة، بالغرام للمتر المربع، والرزمة 500 ورقة متماثلة. والطلبية المقبولة تحجز أوراقها؛ والمتاح هو ما يبقى بعد الحجز، لا ما على الرف. **الألوان.** الطباعة بالألوان الأربعة تستعمل أربعة أحبار: السماوي، الأرجواني، الأصفر، والأسود. واللون الخاص لون يُحصل عليه بحبر يُطبع في مرور واحد: ويُضاف إلى عرض السعر كلون إضافي. **المناولة.** التذهيب، الورنيش الموضعي، والقص بالقالب: ما يذهب إلى مطبعة أخرى يُتابَع كما في [المناولة](" + L.soustraitance + "). **الكلفة الفعلية.** الورق المستهلك، وقت الآلة، والتشطيبات تعطي كلفة كل طلبية، كما في [كلفة المنتوج النهائي](" + L.fabrication + ").",
      ] },
      { heading: "ست عائلات من الأشغال، وست طرق للتسعير", body: [
        "الشكل يقول، لست عائلات، ما يصنع السعر وما يجب أن يسأل عنه عرض السعر.",
      ], visual: 'travaux', after: [
        "**لماذا استمارة لكل عائلة.** المطوية تُسعَّر بعدد النسخ في الورقة وبالكمية؛ الكتيّب، بعدد الصفحات والتجليد؛ اللافتة، بالمساحة والحلقات؛ والدفتر، بالأوراق والترقيم. وعرض سعر بخانات حرة يفرض حفظ كل شيء عن ظهر قلب؛ واستمارة لكل عائلة تطرح الأسئلة الستة أو السبعة التي تغيّر السعر، ولا شيء غيرها. **القياسات.** قياسات السلسلة " + I('A') + " موحَّدة: " + I('A4') + " يقيس " + I('210 × 297') + " ملم، " + I('A5') + " يقيس " + I('148 × 210') + " ملم، و" + I('A6') + " يقيس " + I('105 × 148') + " ملم. وكل واحد نصف سابقه، وهذا يبسّط التوضيب.",
        "**إعادة الطلب.** بعض الأشغال تعود: البطاقات نفسها، الدفتر نفسه، الملصق نفسه. والطلبية السابقة تحتفظ بملفها، نموذجها، وسعرها؛ وإعادة الطلب تجري بحركة واحدة، ويستطيع الزبون أن يقوم بها بنفسه من [فضاء الزبون](" + L.espace + "). **الطلب عبر الإنترنت.** تُسمّى الطباعة عبر الإنترنت الطباعة التجارية التي تمرّ عبر المواقع. وللأشغال المعتادة، [كتالوغ على الإنترنت](" + L.catalogue + ") بسعر لكل كمية يكفي غالباً للبدء. **الطباعة عند الطلب.** لا تُصنع المنتجات إلا بعد تقديم الطلبية، بدل صنعها مسبقاً وبالجملة: وطباعة النسخة الواحدة لم تكن اقتصادية بالطرق التقليدية.",
      ] },
      { heading: "الورق: كم نسخة في الورقة", body: [
        "الشكل يضع المطوية نفسها في الاتجاهين، على الورقة نفسها.",
      ], visual: 'pose', after: [
        "**التوضيب على الورقة.** هو ترتيب صفحات المنتوج المطبوع على ورقة المطبعة، للطبع أسرع، لتبسيط التجليد، ولتقليل ضياع الورق. في المثال، المطوية من قياس " + I('A6') + " تقيس " + I('111 × 154') + " ملم مع هامش القص؛ وعلى ورقة مساحتها النافعة " + I('310 × 440') + " ملم، تدخل 4 مرات مستلقية و6 مرات واقفة. **ما يغيّره ذلك.** لـ3000 نسخة: 750 ورقة أو 500. ثلث الورق، وكذلك ثلث المرورات في الآلة والقصّات. **أوراق الضبط.** تُضاف أوراق الضبط: 40 في المثال، وتُقاس عندكم لكل آلة ولكل نوع شغل.",
        "**ما يحسبه المحرّك.** لكل قياس ورقة في المخزون ولكل اتجاه، عدد النسخ في الورقة، إذن عدد الأوراق، إذن كلفة الورق ووقت الآلة؛ ويحتفظ بأفضل توضيب ويكتبه على ملف التصنيع، لتوضّب الورشة كما حسب عرض السعر. **ما يستفيده المخزون.** 540 ورقة محجوزة، وطلب من المورّد إذا لم يكفِ المتاح. **الهامش.** عرض سعر يحسب 790 ورقة والورشة تمرّر 540 مرتفع ويخسر الطلبية؛ والعكس يربحها بخسارة. وفي الحالتين، [المردودية](" + L.rentab + ") تُحسم عند عرض السعر.",
      ] },
      { heading: "سبعة أسابيع، في المثال", body: [
        "سبعة أسابيع من المعاينة إلى أولى إعادات الطلب، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع في الورشة: أشغالكم المعتادة، آلاتكم، أوراقكم، وعروض أسعاركم للأشهر الأخيرة، ومنها تُستخرج قواعد السعر. **محرّك الأسعار أولاً.** هو الذي يحرّر الشخص الذي يسعّر: ويُبنى على عائلتين أو ثلاث من الأشغال، التي تصنع أكثر عروض الأسعار. **الملف والموافقة على الطبع.** يتبعان فوراً، لأن الملفات تضيع هناك. **التخطيط والورق** يأتيان بعد ذلك، حين تمرّ الطلبيات فعلاً عبر البرنامج.",
        "**ما يبقى بعد ذلك.** عروض أسعار تخرج في الساعة، نموذج مصادَق عليه لكل طلبية، ورشة تعرف ما يخرج هذا المساء، مخزون ورق يأخذ الطلبيات المقبولة في الحساب، وإعادة طلب بحركة واحدة. **جاهز أو على المقاس.** توجد برامج متخصصة للمطابع، وبعضها كامل جداً؛ وتناسب حين تدخل أشغالكم وآلاتكم في إطارها. والعمل على المقاس يُبرَّر حين تجمعون عدة حِرف، أوفست، رقمي، قياسات كبيرة، وطبع على الأغراض، أو حين يجب ربط ما عندكم من قبل. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقاه الإدارة**: عرض سعر محسوب لعدة كميات؛ ملف تصنيع لكل طلبية؛ نموذج مصادَق عليه، مؤرَّخ، ومرفق؛ تخطيط للآلات والتشطيب؛ مخزون ورق بحجوزاته؛ والكلفة الفعلية والهامش لكل طلبية.",
        "**ما لا تفعله الورشة بعد الآن**: انتظار الشخص الوحيد الذي يعرف التسعير، البحث عن النسخة الصحيحة في " + I('WhatsApp') + "، الطبع دون مصادقة، اكتشاف نقص الورق عند الخامسة مساءً، وطلب ملف السنة الماضية من الزبون من جديد.",
        "**ما يُقاس**: المدة بين الطلب وعرض السعر؛ نسبة عروض الأسعار المقبولة؛ الطلبيات المسلَّمة في التاريخ الموعود؛ الأوراق المقرَّرة مقابل المستهلكة؛ إعادات الطبع وسببها؛ والهامش لكل طلبية ولكل عائلة أشغال.",
        "**ما تفعله Symloop**: المعاينة في الورشة، محرّك الأسعار لكل عائلة أشغال، ملف التصنيع، الموافقة على الطبع عبر الإنترنت، التخطيط، مخزون الورق، فضاء الزبون وإعادة الطلب، ثم أولى عروض الأسعار المحسوبة معكم.",
      ], faq: [
        { q: "هل يوجد برنامج للمطبعة؟", a: "نعم. ويجب أن يمسك عرض السعر، ملف التصنيع، التخطيط، الورق، والزبائن. والنقطة التي تُراجَع: هل يحسب السعر فعلاً، الطريقة والتوضيب والورق والتشطيبات، أم يكتفي بتنسيق سعر يُدخَل باليد؟" },
        { q: "كيف يُحسب سعر شغل طباعة؟", a: "المصاريف الثابتة للطريقة، زائد كلفة النسخة مضروبة في الكمية، زائد الورق حسب عدد النسخ في الورقة، زائد التشطيبات، زائد الهامش. والحساب يُعاد لكل كمية مطلوبة: سعر النسخة ينزل حين تصعد الكمية." },
        { q: "أوفست أم رقمي: كيف يُختار؟", a: "بالكمية. للأوفست مصاريف ثابتة أعلى وكلفة نسخة أدنى؛ وللرقمي العكس. ونقطة التعادل تُحسب: في مثال هذه الصفحة، تقع قرب 1313 نسخة." },
        { q: "كيف يُعدّ عرض سعر الطباعة بسرعة؟", a: "باستمارة لكل عائلة أشغال، تطرح فقط الأسئلة التي تغيّر السعر، ومحرّك يحسب. فيخرج عرض السعر في دقائق، ولا يتوقف على شخص واحد." },
        { q: "ما هي الموافقة على الطبع؟", a: "هي النموذج الذي يصادق عليه الزبون قبل الطباعة: وهو بمثابة اتفاق بينه وبين المطبعة. وفي البرنامج، المصادقة مؤرَّخة، باسم صاحبها، ومرفقة بالطلبية؛ ولا شيء يذهب إلى الآلة دونها." },
        { q: "ما هو التوضيب على الورقة؟", a: "هو ترتيب الصفحات على ورقة المطبعة. وهو يحدد عدد النسخ في الورقة، إذن عدد الأوراق والمرورات والقصّات. والمطوية نفسها قد تدخل 4 أو 6 مرات في الورقة نفسها حسب اتجاهها." },
        { q: "كيف تُتابَع الطلبيات في الورشة؟", a: "بملف تصنيع لكل طلبية، يُسجَّل عند كل مرحلة: ما قبل الطباعة، الطباعة، التشطيب، والتسليم. والتخطيط يبيّن ما يخرج اليوم وما هو متأخر." },
        { q: "كيف يُسيَّر مخزون الورق في المطبعة؟", a: "حسب القياس والوزن، بالورقة، مع حجز فور قبول الطلبية. والمتاح هو ما يبقى بعد الحجز؛ وهو يطلق الطلب من المورّد قبل النفاد." },
        { q: "هل يستطيع الزبائن إعادة الطلب عبر الإنترنت؟", a: "نعم: فضاء الزبون يحفظ طلبياتهم، ملفاتهم، وأسعارهم. وإعادة طلب مطابقة تجري بحركة واحدة، دون عرض سعر جديد ولا إرسال ملف من جديد." },
        { q: "كم من الوقت لتجهيز مطبعة؟", a: "سبعة أسابيع في مثال هذه الصفحة، المعاينة منها، بدءاً بمحرّك الأسعار على عائلتين أو ثلاث من الأشغال. والعائلات الأخرى تتبع." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "السعر يُحسب، ولا يُخمَّن." },
      { after: 4, text: "المطوية نفسها، الورقة نفسها: 750 ورقة أو 500، حسب الاتجاه." },
    ],
    cta: { eyebrow: "قولوا لنا أي أشغال تطبعون، على أي آلات، ومن يسعّر اليوم: نبدأ بأسبوع في الورشة", title: "عروض أسعار من الذاكرة، السعر نفسه لـ300 و3000 نسخة، ملفات وموافقات في واتساب، ورشة دون تخطيط، ورق ينقص عند الخامسة مساءً، أو مطبعة في الجزائر تتابعونها من فرنسا", body: "Symloop تبني ما يربط ورشتكم: محرّك الأسعار، ملف التصنيع، الموافقة على الطبع عبر الإنترنت، التخطيط، ومخزون الورق. صِفوا لنا أشغالكم، آلاتكم، وعرض السعر الذي يأخذ منكم أطول وقت حتى يخرج." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة دون إعادة إدخال' },
      { href: L.config, kind: '2027', name: 'مُعِدّ المنتوج على المقاس: الخيارات وقواعد السعر' },
      { href: L.planif, kind: '2027', name: 'تخطيط الإنتاج: الطاقة والتاريخ الموعود' },
      { href: L.fabrication, kind: '2027', name: 'التصنيع: ما يكلّفه المنتوج النهائي' },
    ] },
  },
};

const KEYWORDS = "logiciel imprimerie algérie 2027, logiciel de gestion imprimerie, logiciel devis imprimerie, logiciel imposition imprimerie, logiciel erp imprimerie, logiciel gpao imprimerie, logiciel facturation imprimerie, devis d'impression, bon à tirer, dossier de fabrication, offset ou numérique, print shop software algeria, print quoting software, print estimating, imposition, proof approval, job ticket, برنامج المطبعة, برنامج تسيير مطبعة الجزائر, عرض سعر الطباعة, الموافقة على الطبع, ملف التصنيع, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
