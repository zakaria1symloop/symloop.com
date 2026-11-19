import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-boutique-pret-a-porter-magasin-de-vetements-algerie-2027-stock-par-taille-et-couleur-echanges-mise-de-cote-instagram-fin-de-saison.mjs';

const SLUG = 'logiciel-boutique-pret-a-porter-magasin-de-vetements-algerie-2027-stock-par-taille-et-couleur-echanges-mise-de-cote-instagram-fin-de-saison';
const FIGURES = ['piece', 'couches', 'grille', 'comptoir', 'saison', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  fiche: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  client: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  caisse: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  ecommerce: '/blog/comment-creer-un-site-e-commerce-en-algerie-2027-paiement-a-la-livraison-livraison-par-wilaya-confirmation-retours-plateforme-ou-sur-mesure/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  etiquettes: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel boutique · Algérie · 2027', title: "Logiciel boutique de prêt-à-porter et magasin de vêtements en Algérie (2027) : le modèle est en stock mais pas dans la bonne taille, la pièce vendue deux fois entre la boutique et Instagram, les échanges notés sur papier, et ce qu'on met en place",
    dek: "« J'ai deux boutiques de prêt-à-porter et une page Instagram. Le logiciel dit qu'il reste cinquante-huit robes, mais jamais dans la taille qu'on me demande. Une pièce vendue sur Instagram l'est aussi en boutique une heure après, les échanges se notent sur un bout de papier, et en fin de saison je brade ce qui reste sans savoir pourquoi c'est resté. Existe-t-il un logiciel pour magasin de vêtements ? » Une boutique ne vend pas des articles : elle vend une taille et une couleur. Tout logiciel qui compte par modèle se trompe dès la première cliente.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel boutique de prêt-à-porter', 'Stock par taille et couleur', 'Échanges et mises de côté', 'Vente sur Instagram', 'Fin de saison', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de boutique de prêt-à-porter tient cinq choses : **le modèle et sa grille** de tailles et de couleurs, avec un code-barres par case ; **le stock par boutique**, case par case ; **la caisse**, avec les échanges, les avoirs et les mises de côté ; **les clientes**, leurs tailles et leurs demandes non servies ; **la saison**, c'est-à-dire l'écoulement de chaque modèle. Deux règles font l'essentiel : **compter le stock comme il se vend**, par taille et par couleur ; et tenir **un seul stock** pour la boutique et la vente sur Instagram ou WhatsApp. Le réassort, les transferts et la démarque de fin de saison en découlent.",
      "Cette page s'adresse à la gérante ou au gérant d'une boutique de vêtements, de chaussures ou d'accessoires, avec une ou plusieurs boutiques, avec ou sans vente en ligne, et au fondateur installé en France qui possède une boutique en Algérie et veut en suivre le stock de loin. Les définitions viennent de sources publiques : unité de gestion de stock, prêt-à-porter, tailles, taux d'écoulement, rupture, retour de produit, mise de côté, commerce social. Le modèle de robe, sa grille, la collection de 400 pièces et le calendrier sont un exemple construit. La page ne traite ni des règles sur les soldes, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "La vie d'une pièce, de la réception à la fin de saison", body: [
        "La figure suit une pièce, du carton à la fin de saison.",
      ], visual: 'piece', after: [
        "**Un vêtement n'est pas un article.** Le prêt-à-porter désigne des vêtements vendus finis, dans des tailles standardisées. Une robe existe donc en six tailles et quatre couleurs : vingt-quatre pièces différentes sous un même nom. Une unité de gestion de stock se définit par tous les attributs qui distinguent un article d'un autre, dont la taille et la couleur : chaque case de la grille en est une. **Six temps.** À chacun, la pièce doit garder sa taille et sa couleur : à la réception, au rayon, à la vente, à l'échange, au réassort, à la démarque. Dès qu'un temps la traite comme « une robe », le stock devient faux.",
        "**Pourquoi la vente est accentuée.** Parce qu'elle se fait désormais à deux endroits. Le commerce social est la branche du commerce électronique qui passe par les réseaux sociaux ; pour une boutique, c'est souvent une page Instagram et des messages. Si la page et la caisse ne puisent pas dans le même stock, la même pièce est promise deux fois. **Ce que cette page ne traite pas.** Construire une boutique en ligne complète est le sujet du [site e-commerce](" + L.ecommerce + ") ; la fiche produit et ses variantes en général, celui de [la fiche produit](" + L.fiche + "). Ici, on reste dans la boutique.",
      ] },
      { heading: "Ce qu'un logiciel de boutique doit tenir", body: [
        "La figure empile cinq couches ; la première porte toutes les autres.",
      ], visual: 'couches', after: [
        "**Le modèle et sa grille.** Une fiche par modèle : le nom, la photo, le prix, la saison. Dessous, la grille : les tailles en colonnes, les couleurs en lignes, un code-barres par case, imprimé sur l'étiquette comme dans [l'impression d'étiquettes](" + L.etiquettes + "). **Les tailles.** Les systèmes de tailles varient selon le pays et le type de vêtement, et d'un fabricant à l'autre : le 40 d'un fournisseur n'est pas toujours le 40 d'un autre. La fiche garde la taille de l'étiquette et, si besoin, une correspondance. **Le stock par boutique.** La même grille, par boutique et par réserve, avec les transferts entre elles, tenus comme dans [un stock par mouvements](" + L.stock + ").",
        "**La caisse.** Elle scanne l'étiquette : la bonne case sort du stock, sans choisir dans une liste. Elle sait faire un échange, émettre un avoir, enregistrer une mise de côté ; elle se clôture chaque soir, comme dans [les sessions de caisse](" + L.caisse + "). **Les clientes.** Un numéro de téléphone suffit comme clé : il porte les achats, les tailles et surtout les demandes non servies, comme dans [le fichier client unique](" + L.client + "). La cliente qui voulait le 40 noir est prévenue le jour où il revient. **La saison.** Chaque modèle appartient à une collection, avec sa date de réception : c'est ce qui permet de lire son écoulement.",
      ] },
      { heading: "58 pièces en stock, et la taille demandée manque", body: [
        "La figure ouvre la grille d'un modèle : quatre couleurs, six tailles.",
      ], visual: 'grille', after: [
        "**Deux lectures du même stock.** Par modèle : 58 pièces, tout va bien. Par case : six cases vides sur vingt-quatre, toutes en 38, 40 ou 42. Par taille : 6 pièces en 38 et 40 pour 20 demandes dans la semaine ; 34 pièces en 44 et 46 pour 4 demandes. Le stock n'est pas insuffisant : il est mal réparti. **Ce que fait la cliente.** Devant une rupture, un acheteur peut changer de magasin, prendre un produit de remplacement, remettre son achat ou y renoncer. Les ruptures font perdre des ventes et entament la fidélité. Dans une boutique, la rupture ne se voit pas dans le stock par modèle : elle se voit au comptoir.",
        "**Noter la demande.** La ligne la plus utile de la figure est celle des demandes. Elle n'existe que si, au comptoir, on peut noter en un geste « 40 noir demandé, pas en stock ». Sans elle, le réassort se fait sur les ventes, donc sur les tailles qu'on avait, pas sur celles qu'on voulait. **Le réassort.** On recommande par case, pas par modèle : des 38 et des 40, aucun 46. Les règles de [réapprovisionnement](" + L.reappro + ") s'appliquent, taille par taille. **Le transfert.** Avant de recommander, on regarde l'autre boutique : le 40 noir y dort peut-être.",
      ] },
      { heading: "Six situations du comptoir", body: [
        "La figure compare, pour six situations, ce qui se passe aujourd'hui et avec le logiciel.",
      ], visual: 'comptoir', after: [
        "**L'échange.** Le retour de produit est le fait, pour un client, de rapporter au commerçant une marchandise déjà achetée ; pour un vêtement, la raison peut être une taille qui ne va pas. Un échange bien fait, ce sont deux mouvements : la robe en 38 rentre en stock, la robe en 40 en sort. Noté sur un papier, il laisse deux cases fausses. **L'avoir.** Quand la taille voulue manque, la cliente repart avec un avoir : un numéro, un montant, une date, utilisable dans les deux boutiques. **La mise de côté.** Le commerçant réserve un article pour un client jusqu'à ce qu'il ait fini de le payer. Avec un acompte et une date limite, la pièce est retenue dans le stock ; passé la date, elle revient en rayon.",
        "**Instagram et WhatsApp.** Une commande reçue par message est saisie comme une vente en attente : la pièce est retenue dès cet instant, et la boutique ne peut plus la vendre. La confirmation, la livraison et le paiement suivent leur cours. Quand les messages deviennent trop nombreux, les premières réponses (taille disponible, prix, délai) peuvent être préparées par [un agent sur WhatsApp](" + L.whatsapp + "), branché sur le même stock. **Deux boutiques.** Au comptoir, on voit le stock de l'autre boutique, on réserve la pièce, et la cliente passe la prendre ou se la fait apporter. **Sans réseau.** La caisse continue hors ligne et se synchronise ensuite.",
      ] },
      { heading: "La saison : décider à mi-parcours", body: [
        "La figure suit une collection de 400 pièces pendant douze semaines.",
      ], visual: 'saison', after: [
        "**Le taux d'écoulement.** C'est la part d'un produit vendue par le commerçant après sa livraison par le fournisseur, exprimée en pourcentage. Lu chaque semaine, modèle par modèle, il sépare vite ce qui part de ce qui reste. Dans l'exemple, la moitié de la collection est vendue à la semaine 6 ; mais cette moyenne cache des modèles presque épuisés et d'autres à peine entamés. **Sans décision.** Les modèles lents continuent de ne pas partir : 120 pièces restent à la fin, 30 % de la collection. **Avec une décision à mi-saison.** Démarquer les seuls modèles lents, pendant qu'il reste des clientes pour la saison : 40 pièces restent.",
        "**Ce que la démarque coûte, et ce qu'elle évite.** Une vente de déstockage est une vente à prix réduit : elle coûte de la marge sur chaque pièce. Mais une pièce invendue immobilise tout son prix d'achat, occupe la réserve, et sera plus difficile à vendre l'an prochain. Le logiciel ne décide pas à votre place : il montre, à la semaine 6, la liste des modèles sous le seuil que vous avez fixé. **Les tailles orphelines.** En fin de saison, il reste souvent un 36 et un 46 d'un modèle qui a bien marché : regroupés dans une boutique, ils se vendent ; dispersés, non. **La rotation.** La rotation des stocks mesure combien de fois le stock est vendu sur une période : par famille, elle dit où l'argent dort.",
      ] },
      { heading: "Six semaines, dans l'exemple", body: [
        "Six semaines pour une boutique de quelques centaines de modèles, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine en boutique : comment les modèles sont nommés, comment tailles et couleurs sont notées (souvent dans le nom de l'article), ce que fait la caisse, comment les commandes Instagram sont suivies. **Les grilles et les étiquettes.** Chaque modèle reçoit sa fiche et sa grille ; chaque pièce, son étiquette. C'est le travail le plus long, et il se fait par arrivage : les nouveautés d'abord. **Le stock de départ.** Un inventaire par case, au scan, boutique fermée ou le soir. **La caisse, puis la vente en ligne.** La caisse d'abord, parce que c'est elle qui tient le stock juste ; la saisie des commandes Instagram ensuite, sur le même stock.",
        "**Ce qui reste après.** Une grille par modèle, lisible sur un téléphone. Une liste de demandes non servies. Une lecture de saison chaque semaine. **Du marché ou sur mesure.** Si un logiciel de caisse existant gère les grilles, les échanges et plusieurs boutiques, prenez-le. Le sur-mesure se justifie quand il faut un seul stock entre votre page Instagram, vos boutiques et votre façon de faire les mises de côté. **Les durées** sont celles d'un exemple construit : une seule boutique sans vente en ligne demande moins ; plusieurs boutiques et un site, davantage.",
      ], list: [
        "**Ce que la gérante ou le gérant reçoit** : une fiche et une grille par modèle ; un code-barres par pièce ; le stock par case et par boutique ; une caisse qui fait échanges, avoirs et mises de côté ; un seul stock avec la vente en ligne ; la liste des demandes non servies ; une lecture de saison.",
        "**Ce que la boutique ne fait plus** : dire non pour une taille qui dort à côté, vendre deux fois la même pièce, noter un échange sur un papier, recommander des tailles qui ne partent pas, découvrir le stock restant le dernier jour de la saison.",
        "**Ce qui est mesuré** : cases vides par modèle ; demandes non servies par taille ; taux d'écoulement par modèle et par semaine ; taux d'échange ; pièces mises de côté et leur date limite ; stock restant en fin de saison.",
        "**Ce que fait Symloop** : le relevé en boutique, les fiches et les grilles, les étiquettes, l'inventaire de départ, la caisse, le stock partagé avec la vente en ligne, la lecture de saison, puis l'accompagnement de l'équipe pendant les premières semaines.",
      ], faq: [
        { q: "Existe-t-il un logiciel pour magasin de vêtements ?", a: "Oui. Vérifiez qu'il gère une grille de tailles et de couleurs par modèle, avec un code-barres par case, le stock par boutique, les échanges, les avoirs et les mises de côté. Un logiciel qui compte par modèle ne suffit pas." },
        { q: "Comment gérer le stock d'une boutique de vêtements ?", a: "Par taille et par couleur, case par case, et par boutique. Chaque pièce porte une étiquette ; chaque vente, échange ou transfert déplace la bonne case. C'est la seule façon de savoir ce qui manque vraiment." },
        { q: "Pourquoi le stock de ma boutique est-il faux ?", a: "Presque toujours pour trois raisons : des ventes saisies sur le modèle sans la taille, des échanges notés sur papier, et des ventes en ligne qui ne sortent pas du stock de la boutique. Une caisse qui scanne l'étiquette règle les deux premières." },
        { q: "Comment éviter de vendre deux fois la même pièce sur Instagram et en boutique ?", a: "En tenant un seul stock. La commande reçue par message est saisie comme une vente en attente : la pièce est retenue aussitôt, et la caisse de la boutique ne peut plus la vendre." },
        { q: "Comment gérer les échanges et les avoirs ?", a: "Un échange, ce sont deux mouvements : la pièce rendue rentre en stock, la nouvelle en sort. Si la taille manque, la caisse émet un avoir numéroté et daté, utilisable plus tard, dans n'importe quelle boutique." },
        { q: "Comment gérer les mises de côté ?", a: "Comme une réservation : la pièce, la cliente, l'acompte et une date limite. La pièce est retenue dans le stock. Passé la date, la boutique est prévenue et décide de la remettre en rayon." },
        { q: "Comment faire l'inventaire d'un magasin de vêtements ?", a: "Au scan, case par case, par zone : rayon, cabines, réserve. Avec une étiquette par pièce, l'inventaire est un comptage, pas une recopie, et l'écart se lit par taille et par couleur. Un inventaire tournant, une famille à la fois, évite de fermer la boutique." },
        { q: "Quand démarquer en fin de saison ?", a: "Plus tôt qu'on ne le fait d'habitude, et pas tout. À mi-saison, le taux d'écoulement par modèle montre ceux qui ne partiront pas au prix plein : ce sont eux qu'il faut traiter, pendant qu'il reste des clientes pour la saison." },
        { q: "Peut-on gérer plusieurs boutiques ?", a: "Oui : la même grille, par boutique. Au comptoir, on voit le stock de l'autre boutique, on réserve une pièce, on demande un transfert. Le réassort regarde l'ensemble avant de recommander." },
        { q: "Combien de temps pour équiper une boutique ?", a: "Six semaines dans l'exemple de cette page, pour quelques centaines de modèles : fiches et étiquettes, inventaire de départ, caisse, puis vente en ligne sur le même stock. Les nouveautés sont étiquetées en premier." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Le stock n'est pas insuffisant : il est mal réparti." },
      { after: 4, text: "Ce qui reste en fin de saison se décide à mi-saison." },
    ],
    cta: { eyebrow: "Dites-nous combien de boutiques vous avez et comment vous notez tailles et couleurs aujourd'hui : nous commençons par une semaine en boutique", title: "Taille demandée qui manque, pièce vendue deux fois, échanges sur papier, saison qui finit en braderie, ou propriétaire en France qui veut suivre le stock de sa boutique en Algérie", body: "Symloop construit le stock par taille et par couleur, la caisse avec échanges et mises de côté, le stock partagé avec votre page Instagram, et la lecture de saison. Décrivez-nous votre boutique : ce que vous vendez, où vous vendez, et la question à laquelle votre stock ne répond pas." },
    related: { label: 'À lire aussi', items: [
      { href: L.fiche, kind: '2027', name: 'Fiche produit : variantes, codes-barres, prix' },
      { href: L.caisse, kind: '2027', name: 'Sessions de caisse : la caisse qui tombe juste' },
      { href: L.ecommerce, kind: '2027', name: 'Créer un site e-commerce : paiement à la livraison, retours' },
      { href: L.client, kind: '2027', name: 'Fichier client unique : le téléphone comme clé' },
    ] },
  },
  en: {
    kind: 'Boutique software · Algeria · 2027', title: "Clothing shop and ready-to-wear boutique software in Algeria (2027): the model is in stock but not in the right size, the piece sold twice between the shop and Instagram, exchanges noted on paper, and what we put in place",
    dek: "“I have two ready-to-wear shops and an Instagram page. The software says fifty-eight dresses are left, but never in the size I am asked for. A piece sold on Instagram is sold again in the shop an hour later, exchanges are noted on a scrap of paper, and at the end of the season I sell off what is left without knowing why it stayed. Is there software for a clothing shop?” A boutique does not sell items: it sells a size and a colour. Any software that counts per model is wrong from the first customer.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Ready-to-wear boutique software', 'Stock per size and colour', 'Exchanges and items put aside', 'Selling on Instagram', 'End of season', 'Algeria 2027'],
    intro: [
      "**Short answer.** Ready-to-wear boutique software holds five things: **the model and its grid** of sizes and colours, with one barcode per cell; **stock per shop**, cell by cell; **the till**, with exchanges, credit notes and items put aside; **customers**, their sizes and their requests not served; **the season**, that is, the sell-through of each model. Two rules do most of the work: **count stock the way it is sold**, per size and per colour; and keep **one single stock** for the shop and for sales on Instagram or WhatsApp. Reordering, transfers and the end-of-season markdown follow from that.",
      "This page is for the manager of a clothing, shoe or accessories shop, with one or several shops, with or without online sales, and for the founder based in France who owns a shop in Algeria and wants to follow its stock from afar. The definitions come from public sources: stock keeping unit, ready-to-wear, clothing sizes, sell-through, stockout, product return, layaway, social commerce. The dress model, its grid, the 400-piece collection and the calendar are a constructed example. The page covers neither the rules on sales periods nor taxation, and quotes no hardware price.",
    ],
    sections: [
      { heading: "The life of one piece, from reception to end of season", body: [
        "The figure follows one piece, from the box to the end of the season.",
      ], visual: 'piece', after: [
        "**A garment is not an item.** Ready-to-wear is the term for garments sold in finished condition in standardized sizes. A dress therefore exists in six sizes and four colours: twenty-four different pieces under one name. A stock keeping unit is defined by all the attributes that distinguish one item from another, including size and colour: each cell of the grid is one. **Six steps.** At each one, the piece must keep its size and its colour: at reception, on the shelf, at the sale, at the exchange, at the reorder, at the markdown. As soon as one step treats it as “a dress”, the stock goes wrong.",
        "**Why the sale is accented.** Because it now happens in two places. Social commerce is the subset of electronic commerce that involves social media; for a boutique, it is often an Instagram page and messages. If the page and the till do not draw on the same stock, the same piece is promised twice. **What this page does not cover.** Building a full online shop is the subject of [the e-commerce site](" + L.ecommerce + "); the product record and its variants in general, that of [the product record](" + L.fiche + "). Here, we stay in the shop.",
      ] },
      { heading: "What boutique software must hold", body: [
        "The figure stacks five layers; the first carries all the others.",
      ], visual: 'couches', after: [
        "**The model and its grid.** One record per model: the name, the photo, the price, the season. Underneath, the grid: sizes in columns, colours in rows, one barcode per cell, printed on the label as in [label printing](" + L.etiquettes + "). **Sizes.** Sizing systems vary based on the country and the type of garment, and from one manufacturer to another: one supplier's 40 is not always another's. The record keeps the size on the label and, if needed, a correspondence. **Stock per shop.** The same grid, per shop and per stockroom, with the transfers between them, kept as in [stock by movements](" + L.stock + ").",
        "**The till.** It scans the label: the right cell leaves stock, with no picking from a list. It can do an exchange, issue a credit note, record an item put aside; it is closed every evening, as in [till sessions](" + L.caisse + "). **Customers.** A phone number is enough as a key: it carries the purchases, the sizes and above all the requests not served, as in [the single customer file](" + L.client + "). The customer who wanted the black 40 is told the day it comes back. **The season.** Each model belongs to a collection, with its reception date: that is what makes its sell-through readable.",
      ] },
      { heading: "58 pieces in stock, and the size asked for is missing", body: [
        "The figure opens one model's grid: four colours, six sizes.",
      ], visual: 'grille', after: [
        "**Two readings of the same stock.** Per model: 58 pieces, all is well. Per cell: six empty cells out of twenty-four, all in 38, 40 or 42. Per size: 6 pieces in 38 and 40 for 20 requests in the week; 34 pieces in 44 and 46 for 4 requests. The stock is not insufficient: it is badly spread. **What the customer does.** Faced with a stockout, a shopper might switch stores, purchase a substitute item, postpone the purchase or decide not to buy at all. Stockouts cause lost sales and diminish store loyalty. In a boutique, the stockout does not show in stock per model: it shows at the counter.",
        "**Noting the request.** The most useful row of the figure is the requests. It only exists if, at the counter, someone can note in one gesture “black 40 asked for, not in stock”. Without it, reordering is based on sales, so on the sizes you had, not on the ones that were wanted. **Reordering.** You reorder per cell, not per model: some 38s and 40s, no 46. The rules of [replenishment](" + L.reappro + ") apply, size by size. **The transfer.** Before reordering, you look at the other shop: the black 40 may be sleeping there.",
      ] },
      { heading: "Six situations at the counter", body: [
        "The figure compares, for six situations, what happens today and with the software.",
      ], visual: 'comptoir', after: [
        "**The exchange.** A product return is the process of a customer taking previously purchased merchandise back to the retailer; for clothing, the reason may be a lack of a correct fit. An exchange done properly is two movements: the dress in 38 comes back into stock, the dress in 40 leaves it. Noted on a slip of paper, it leaves two cells wrong. **The credit note.** When the wanted size is missing, the customer leaves with a credit note: a number, an amount, a date, usable in both shops. **Putting aside.** The seller reserves an item for a consumer until the consumer completes all the payments. With a deposit and a deadline, the piece is held in stock; after the date, it goes back on the shelf.",
        "**Instagram and WhatsApp.** An order received by message is entered as a pending sale: the piece is held from that moment, and the shop can no longer sell it. Confirmation, delivery and payment follow their course. When messages become too many, the first answers (size available, price, lead time) can be prepared by [an agent on WhatsApp](" + L.whatsapp + "), connected to the same stock. **Two shops.** At the counter, you see the other shop's stock, reserve the piece, and the customer collects it or has it brought over. **Without a network.** The till keeps working offline and synchronises afterwards.",
      ] },
      { heading: "The season: deciding halfway", body: [
        "The figure follows a 400-piece collection over twelve weeks.",
      ], visual: 'saison', after: [
        "**Sell-through.** It is the percentage of a product that is sold by a retailer after being shipped by its supplier. Read every week, model by model, it quickly separates what goes from what stays. In the example, half the collection is sold at week 6; but that average hides models that are nearly gone and others barely touched. **With no decision.** The slow models go on not selling: 120 pieces remain at the end, 30% of the collection. **With a decision at mid-season.** Marking down only the slow models, while there are still customers for the season: 40 pieces remain.",
        "**What the markdown costs, and what it avoids.** A clearance sale is a discount sale of inventory: it costs margin on each piece. But an unsold piece ties up its whole purchase price, takes up the stockroom, and will be harder to sell next year. The software does not decide for you: at week 6, it shows the list of models under the threshold you set. **Orphan sizes.** At the end of the season, there is often a 36 and a 46 left of a model that sold well: gathered in one shop, they sell; scattered, they do not. **Turnover.** Inventory turnover measures the number of times inventory is sold in a period: per family, it says where the money is sleeping.",
      ] },
      { heading: "Six weeks, in the example", body: [
        "Six weeks for a shop of a few hundred models, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week in the shop: how models are named, how sizes and colours are noted (often inside the item name), what the till does, how Instagram orders are followed. **Grids and labels.** Each model receives its record and its grid; each piece, its label. It is the longest job, and it is done by arrival: new models first. **Opening stock.** A stocktake per cell, by scan, with the shop closed or in the evening. **The till, then online sales.** The till first, because it is what keeps stock right; entering Instagram orders next, on the same stock.",
        "**What remains afterwards.** One grid per model, readable on a phone. A list of requests not served. A season reading every week. **Off the shelf or custom.** If existing till software handles grids, exchanges and several shops, take it. Custom work is justified when you need one single stock between your Instagram page, your shops and your way of putting items aside. **The durations** are those of a constructed example: a single shop with no online sales takes less; several shops and a website, more.",
      ], list: [
        "**What the manager receives**: one record and one grid per model; one barcode per piece; stock per cell and per shop; a till that does exchanges, credit notes and items put aside; one single stock with online sales; the list of requests not served; a season reading.",
        "**What the shop no longer does**: say no for a size that is sleeping next door, sell the same piece twice, note an exchange on a slip of paper, reorder sizes that do not move, discover the remaining stock on the last day of the season.",
        "**What is measured**: empty cells per model; requests not served per size; sell-through per model and per week; exchange rate; pieces put aside and their deadline; stock remaining at the end of the season.",
        "**What Symloop does**: the survey in the shop, the records and the grids, the labels, the opening stocktake, the till, the stock shared with online sales, the season reading, then support for the team during the first weeks.",
      ], faq: [
        { q: "Is there software for a clothing shop?", a: "Yes. Check that it handles a grid of sizes and colours per model, with one barcode per cell, stock per shop, exchanges, credit notes and items put aside. Software that counts per model is not enough." },
        { q: "How do you manage the stock of a clothing boutique?", a: "Per size and per colour, cell by cell, and per shop. Each piece carries a label; each sale, exchange or transfer moves the right cell. It is the only way to know what is really missing." },
        { q: "Why is my shop's stock wrong?", a: "Almost always for three reasons: sales entered on the model without the size, exchanges noted on paper, and online sales that do not leave the shop's stock. A till that scans the label settles the first two." },
        { q: "How do you avoid selling the same piece twice on Instagram and in the shop?", a: "By keeping one single stock. The order received by message is entered as a pending sale: the piece is held at once, and the shop's till can no longer sell it." },
        { q: "How do you manage exchanges and credit notes?", a: "An exchange is two movements: the piece returned comes back into stock, the new one leaves it. If the size is missing, the till issues a numbered and dated credit note, usable later, in any shop." },
        { q: "How do you manage items put aside?", a: "Like a reservation: the piece, the customer, the deposit and a deadline. The piece is held in stock. After the date, the shop is told and decides to put it back on the shelf." },
        { q: "How do you take stock in a clothing shop?", a: "By scan, cell by cell, by zone: shelf, fitting rooms, stockroom. With one label per piece, the stocktake is a count, not a copy, and the gap is read per size and per colour. A rolling stocktake, one family at a time, avoids closing the shop." },
        { q: "When should you mark down at the end of the season?", a: "Earlier than is usually done, and not everything. At mid-season, sell-through per model shows those that will not go at full price: those are the ones to deal with, while there are still customers for the season." },
        { q: "Can several shops be managed?", a: "Yes: the same grid, per shop. At the counter, you see the other shop's stock, reserve a piece, ask for a transfer. Reordering looks at the whole before ordering again." },
        { q: "How long does it take to equip a shop?", a: "Six weeks in this page's example, for a few hundred models: records and labels, opening stocktake, till, then online sales on the same stock. New models are labelled first." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "The stock is not insufficient: it is badly spread." },
      { after: 4, text: "What is left at the end of the season is decided at mid-season." },
    ],
    cta: { eyebrow: "Tell us how many shops you have and how you note sizes and colours today: we start with a week in the shop", title: "The size asked for is missing, a piece sold twice, exchanges on paper, a season ending in a sell-off, or an owner in France who wants to follow the stock of their shop in Algeria", body: "Symloop builds stock per size and per colour, the till with exchanges and items put aside, the stock shared with your Instagram page, and the season reading. Describe your shop to us: what you sell, where you sell, and the question your stock cannot answer." },
    related: { label: 'Also read', items: [
      { href: L.fiche, kind: '2027', name: 'Product record: variants, barcodes, prices' },
      { href: L.caisse, kind: '2027', name: 'Till sessions: the till that balances' },
      { href: L.ecommerce, kind: '2027', name: 'Creating an e-commerce site: cash on delivery, returns' },
      { href: L.client, kind: '2027', name: 'Single customer file: the phone as the key' },
    ] },
  },
  ar: {
    kind: 'برنامج محل الملابس · الجزائر · 2027', title: "برنامج محل الملابس الجاهزة في الجزائر (2027): الموديل في المخزون لكن ليس بالمقاس المطلوب، القطعة تُباع مرتين بين المحل وإنستغرام، التبديل يُكتب على ورقة، وما نضعه",
    dek: "«عندي محلان للملابس الجاهزة وصفحة على إنستغرام. البرنامج يقول إنه بقي ثمانية وخمسون فستاناً، لكن ليس أبداً بالمقاس الذي يُطلب مني. قطعة بيعت على إنستغرام تُباع كذلك في المحل بعد ساعة، التبديل يُكتب على قصاصة ورق، وفي نهاية الموسم أبيع ما بقي بأي سعر دون أن أعرف لماذا بقي. هل يوجد برنامج لمحل الملابس؟» محل الملابس لا يبيع سلعاً: يبيع مقاساً ولوناً. وكل برنامج يعدّ حسب الموديل يخطئ من أول زبونة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج محل الملابس الجاهزة', 'المخزون حسب المقاس واللون', 'التبديل وحجز القطع', 'البيع على إنستغرام', 'نهاية الموسم', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج محل الملابس الجاهزة يمسك خمسة أشياء: **الموديل وشبكته** من المقاسات والألوان، برمز شريطي لكل خانة؛ **المخزون لكل محل**، خانة بخانة؛ **الصندوق**، مع التبديل والأرصدة وحجز القطع؛ **الزبونات**، مقاساتهن وطلباتهن التي لم تُلبَّ؛ و**الموسم**، أي تصريف كل موديل. وقاعدتان تقومان بأغلب العمل: **عدّ المخزون كما يُباع**، حسب المقاس واللون؛ ومسك **مخزون واحد** للمحل وللبيع على إنستغرام أو واتساب. وإعادة التموين والتحويلات وتخفيض نهاية الموسم تنتج عن ذلك.",
      "هذه الصفحة موجّهة إلى مسيّرة أو مسيّر محل ملابس أو أحذية أو إكسسوارات، بمحل واحد أو عدة محلات، مع بيع على الإنترنت أو دونه، وإلى المؤسس المقيم في فرنسا الذي يملك محلاً في الجزائر ويريد متابعة مخزونه من بعيد. التعريفات من مصادر عمومية: وحدة تسيير المخزون، الملابس الجاهزة، المقاسات، نسبة التصريف، نفاد المخزون، إرجاع المنتج، حجز القطعة، والتجارة عبر الشبكات الاجتماعية. وموديل الفستان وشبكته والتشكيلة من 400 قطعة والرزنامة مثال مركَّب. والصفحة لا تعالج قواعد التخفيضات الموسمية ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "حياة قطعة، من الاستلام إلى نهاية الموسم", body: [
        "الشكل يتابع قطعة، من الكرتون إلى نهاية الموسم.",
      ], visual: 'piece', after: [
        "**اللباس ليس سلعة واحدة.** الملابس الجاهزة ملابس تُباع منتهية، بمقاسات موحَّدة. فالفستان موجود بستة مقاسات وأربعة ألوان: أربع وعشرون قطعة مختلفة تحت اسم واحد. ووحدة تسيير المخزون تُعرَّف بكل الصفات التي تميّز سلعة عن أخرى، ومنها المقاس واللون: وكل خانة في الشبكة وحدة. **ست مراحل.** في كل واحدة، يجب أن تحتفظ القطعة بمقاسها ولونها: عند الاستلام، على الرف، عند البيع، عند التبديل، عند إعادة التموين، وعند التخفيض. وما إن تعاملها مرحلة على أنها «فستان»، حتى يصير المخزون خاطئاً.",
        "**لماذا أُبرز البيع.** لأنه صار يجري في مكانين. التجارة عبر الشبكات الاجتماعية فرع من التجارة الإلكترونية؛ ولمحل الملابس، هي غالباً صفحة على إنستغرام (" + I('Instagram') + ") ورسائل. وإذا لم تأخذ الصفحة والصندوق من المخزون نفسه، وُعد بالقطعة نفسها مرتين. **ما لا تعالجه هذه الصفحة.** بناء متجر إلكتروني كامل موضوع [موقع التجارة الإلكترونية](" + L.ecommerce + ")؛ وبطاقة المنتج وصيغها عموماً، موضوع [بطاقة المنتج](" + L.fiche + "). هنا، نبقى في المحل.",
      ] },
      { heading: "ما يجب أن يمسكه برنامج المحل", body: [
        "الشكل يرتّب خمس طبقات؛ والأولى تحمل كل الأخريات.",
      ], visual: 'couches', after: [
        "**الموديل وشبكته.** بطاقة لكل موديل: الاسم، الصورة، السعر، والموسم. وتحتها الشبكة: المقاسات في الأعمدة، الألوان في الأسطر، ورمز شريطي لكل خانة، يُطبع على الملصق كما في [طباعة الملصقات](" + L.etiquettes + "). **المقاسات.** أنظمة المقاسات تختلف حسب البلد ونوع اللباس، ومن مصنّع إلى آخر: المقاس 40 عند مورّد ليس دائماً 40 عند غيره. والبطاقة تحفظ مقاس الملصق، ومقابلة عند الحاجة. **المخزون لكل محل.** الشبكة نفسها، لكل محل ولكل مخزن، مع التحويلات بينها، تُمسك كما في [المخزون بالحركات](" + L.stock + ").",
        "**الصندوق.** يمسح الملصق: فتخرج الخانة الصحيحة من المخزون، دون اختيار من قائمة. ويعرف التبديل، وإصدار رصيد، وتسجيل حجز قطعة؛ ويُغلق كل مساء، كما في [جلسات الصندوق](" + L.caisse + "). **الزبونات.** رقم الهاتف يكفي مفتاحاً: يحمل المشتريات، المقاسات، وخصوصاً الطلبات التي لم تُلبَّ، كما في [ملف الزبون الواحد](" + L.client + "). والزبونة التي أرادت المقاس 40 الأسود تُعلَم يوم يعود. **الموسم.** كل موديل ينتمي إلى تشكيلة، بتاريخ استلامها: وهذا ما يجعل تصريفه مقروءاً.",
      ] },
      { heading: "58 قطعة في المخزون، والمقاس المطلوب ناقص", body: [
        "الشكل يفتح شبكة موديل: أربعة ألوان، ستة مقاسات.",
      ], visual: 'grille', after: [
        "**قراءتان للمخزون نفسه.** حسب الموديل: 58 قطعة، وكل شيء بخير. حسب الخانة: ست خانات فارغة من أربع وعشرين، كلها في 38 أو 40 أو 42. وحسب المقاس: 6 قطع في 38 و40 مقابل 20 طلباً في الأسبوع؛ و34 قطعة في 44 و46 مقابل 4 طلبات. المخزون ليس ناقصاً: هو سيئ التوزيع. **ما تفعله الزبونة.** أمام نفاد المخزون، قد يغيّر المشتري المحل، يأخذ منتجاً بديلاً، يؤجّل الشراء، أو يتخلى عنه. والنفاد يُضيّع مبيعات ويُضعف الوفاء. وفي محل الملابس، النفاد لا يُرى في المخزون حسب الموديل: يُرى عند الصندوق.",
        "**تسجيل الطلب.** أنفع سطر في الشكل هو سطر الطلبات. ولا يوجد إلا إذا أمكن، عند الصندوق، تسجيل «المقاس 40 الأسود مطلوب، وغير موجود» بحركة واحدة. ودونه، يُعاد التموين حسب المبيعات، أي حسب المقاسات التي كانت موجودة، لا التي كانت مرغوبة. **إعادة التموين.** يُعاد الطلب حسب الخانة، لا حسب الموديل: مقاسات 38 و40، ولا شيء في 46. وقواعد [إعادة التموين](" + L.reappro + ") تُطبَّق، مقاساً بمقاس. **التحويل.** قبل إعادة الطلب، يُنظر في المحل الآخر: المقاس 40 الأسود ربما نائم هناك.",
      ] },
      { heading: "ست حالات عند الصندوق", body: [
        "الشكل يقارن، لست حالات، ما يحدث اليوم ومع البرنامج.",
      ], visual: 'comptoir', after: [
        "**التبديل.** إرجاع المنتج هو أن يعيد الزبون إلى التاجر سلعة اشتراها من قبل؛ وفي الملابس، قد يكون السبب مقاساً لا يناسب. والتبديل الصحيح حركتان: الفستان بمقاس 38 يعود إلى المخزون، والفستان بمقاس 40 يخرج منه. وإذا كُتب على ورقة، ترك خانتين خاطئتين. **الرصيد.** حين ينقص المقاس المطلوب، تغادر الزبونة برصيد: رقم، مبلغ، وتاريخ، يُستعمل في المحلين. **حجز القطعة.** التاجر يحجز سلعة لزبون حتى يُكمل دفعها. وبعربون وتاريخ أقصى، تُحتجز القطعة في المخزون؛ وبعد التاريخ، تعود إلى الرف.",
        "**إنستغرام وواتساب.** الطلبية التي تصل برسالة تُدخَل بيعاً في الانتظار: القطعة محتجزة من تلك اللحظة، والمحل لا يستطيع بيعها. والتأكيد والتوصيل والدفع تأخذ مجراها. وحين تكثر الرسائل، يمكن أن يحضّر الأجوبة الأولى (المقاس المتوفر، السعر، الأجل) [وكيل على واتساب](" + L.whatsapp + ")، موصول بالمخزون نفسه. **محلان.** عند الصندوق، يُرى مخزون المحل الآخر، تُحجز القطعة، والزبونة تمرّ لأخذها أو تُحمل إليها. **دون شبكة.** الصندوق يواصل دون اتصال ويُزامَن بعدها.",
      ] },
      { heading: "الموسم: القرار في منتصف الطريق", body: [
        "الشكل يتابع تشكيلة من 400 قطعة طيلة اثني عشر أسبوعاً.",
      ], visual: 'saison', after: [
        "**نسبة التصريف.** هي نسبة ما باعه التاجر من منتج بعد أن سلّمه له المورّد. وإذا قُرئت كل أسبوع، موديلاً بموديل، فصلت بسرعة ما يخرج عما يبقى. في المثال، نصف التشكيلة مبيع في الأسبوع 6؛ لكن هذا المتوسط يخفي موديلات كادت تنفد وأخرى لم تُمسّ تقريباً. **دون قرار.** الموديلات البطيئة تواصل عدم الخروج: تبقى 120 قطعة في النهاية، 30 بالمئة من التشكيلة. **بقرار في منتصف الموسم.** تخفيض الموديلات البطيئة وحدها، ما دام للموسم زبونات: تبقى 40 قطعة.",
        "**ما يكلّفه التخفيض، وما يجنّبه.** بيع التصفية بيع بسعر مخفَّض: يكلّف هامشاً على كل قطعة. لكن القطعة غير المبيعة تجمّد سعر شرائها كله، تشغل المخزن، وستكون أصعب بيعاً السنة القادمة. والبرنامج لا يقرر مكانكم: هو يُظهر، في الأسبوع 6، قائمة الموديلات التي تحت العتبة التي حددتموها. **المقاسات اليتيمة.** في نهاية الموسم، يبقى غالباً مقاس 36 ومقاس 46 من موديل نجح: مجموعةً في محل واحد، تُباع؛ ومتفرقةً، لا. **الدوران.** دوران المخزون يقيس عدد المرات التي يُباع فيها المخزون خلال فترة: وحسب الصنف، يقول أين ينام المال.",
      ] },
      { heading: "ستة أسابيع، في المثال", body: [
        "ستة أسابيع لمحل من بضع مئات من الموديلات، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع في المحل: كيف تُسمّى الموديلات، كيف تُسجَّل المقاسات والألوان (غالباً داخل اسم السلعة)، ماذا يفعل الصندوق، وكيف تُتابَع طلبيات إنستغرام. **الشبكات والملصقات.** كل موديل يتلقى بطاقته وشبكته؛ وكل قطعة ملصقها. وهو أطول عمل، ويُنجز حسب الوصول: الجديد أولاً. **مخزون البداية.** جرد خانة بخانة، بالمسح، والمحل مغلق أو في المساء. **الصندوق، ثم البيع على الإنترنت.** الصندوق أولاً، لأنه هو الذي يُبقي المخزون صحيحاً؛ ثم إدخال طلبيات إنستغرام، على المخزون نفسه.",
        "**ما يبقى بعد ذلك.** شبكة لكل موديل، تُقرأ على الهاتف. قائمة بالطلبات التي لم تُلبَّ. وقراءة للموسم كل أسبوع. **جاهز أو على المقاس.** إذا كان برنامج صندوق موجود يسيّر الشبكات والتبديل وعدة محلات، خذوه. والعمل على المقاس يُبرَّر حين يلزم مخزون واحد بين صفحتكم على إنستغرام، محلاتكم، وطريقتكم في حجز القطع. **المدد** هي مدد مثال مركَّب: محل واحد دون بيع على الإنترنت يتطلب أقل؛ وعدة محلات وموقع، أكثر.",
      ], list: [
        "**ما تتلقاه المسيّرة أو المسيّر**: بطاقة وشبكة لكل موديل؛ رمز شريطي لكل قطعة؛ المخزون لكل خانة ولكل محل؛ صندوق يُجري التبديل والأرصدة وحجز القطع؛ مخزون واحد مع البيع على الإنترنت؛ قائمة الطلبات التي لم تُلبَّ؛ وقراءة للموسم.",
        "**ما لا يفعله المحل بعد الآن**: قول لا من أجل مقاس نائم في الجوار، بيع القطعة نفسها مرتين، كتابة تبديل على ورقة، إعادة طلب مقاسات لا تخرج، واكتشاف المخزون الباقي في آخر يوم من الموسم.",
        "**ما يُقاس**: الخانات الفارغة لكل موديل؛ الطلبات التي لم تُلبَّ لكل مقاس؛ نسبة التصريف لكل موديل ولكل أسبوع؛ نسبة التبديل؛ القطع المحجوزة وتاريخها الأقصى؛ والمخزون الباقي في نهاية الموسم.",
        "**ما تفعله Symloop**: المعاينة في المحل، البطاقات والشبكات، الملصقات، جرد البداية، الصندوق، المخزون المشترك مع البيع على الإنترنت، قراءة الموسم، ثم مرافقة الفريق خلال الأسابيع الأولى.",
      ], faq: [
        { q: "هل يوجد برنامج لمحل الملابس؟", a: "نعم. تأكدوا أنه يسيّر شبكة مقاسات وألوان لكل موديل، برمز شريطي لكل خانة، المخزون لكل محل، التبديل، الأرصدة، وحجز القطع. والبرنامج الذي يعدّ حسب الموديل لا يكفي." },
        { q: "كيف يُسيَّر مخزون محل الملابس؟", a: "حسب المقاس واللون، خانة بخانة، ولكل محل. كل قطعة تحمل ملصقاً؛ وكل بيع أو تبديل أو تحويل يحرّك الخانة الصحيحة. وهذه الطريقة الوحيدة لمعرفة ما ينقص فعلاً." },
        { q: "لماذا مخزون محلي خاطئ؟", a: "في أغلب الأحيان لثلاثة أسباب: مبيعات تُدخَل على الموديل دون المقاس، تبديل يُكتب على ورقة، ومبيعات على الإنترنت لا تخرج من مخزون المحل. والصندوق الذي يمسح الملصق يحلّ الأولين." },
        { q: "كيف نتجنب بيع القطعة نفسها مرتين على إنستغرام وفي المحل؟", a: "بمسك مخزون واحد. الطلبية التي تصل برسالة تُدخَل بيعاً في الانتظار: القطعة تُحتجز حالاً، وصندوق المحل لا يستطيع بيعها." },
        { q: "كيف يُسيَّر التبديل والأرصدة؟", a: "التبديل حركتان: القطعة المُرجَعة تعود إلى المخزون، والجديدة تخرج منه. وإذا نقص المقاس، يُصدر الصندوق رصيداً مرقَّماً ومؤرَّخاً، يُستعمل لاحقاً، في أي محل." },
        { q: "كيف يُسيَّر حجز القطع؟", a: "مثل حجز: القطعة، الزبونة، العربون، وتاريخ أقصى. والقطعة تُحتجز في المخزون. وبعد التاريخ، يُعلَم المحل ويقرر إعادتها إلى الرف." },
        { q: "كيف يُجرى جرد محل الملابس؟", a: "بالمسح، خانة بخانة، حسب المنطقة: الرف، غرف القياس، والمخزن. وبملصق لكل قطعة، يصير الجرد عدّاً لا نسخاً، والفارق يُقرأ حسب المقاس واللون. والجرد الدوري، صنفاً بعد صنف، يجنّب إغلاق المحل." },
        { q: "متى يُخفَّض السعر في نهاية الموسم؟", a: "أبكر مما يُفعل عادة، وليس كل شيء. في منتصف الموسم، تُظهر نسبة التصريف لكل موديل التي لن تخرج بالسعر الكامل: هي التي يجب معالجتها، ما دام للموسم زبونات." },
        { q: "هل يمكن تسيير عدة محلات؟", a: "نعم: الشبكة نفسها، لكل محل. عند الصندوق، يُرى مخزون المحل الآخر، تُحجز قطعة، ويُطلب تحويل. وإعادة التموين تنظر إلى المجموع قبل إعادة الطلب." },
        { q: "كم من الوقت لتجهيز محل؟", a: "ستة أسابيع في مثال هذه الصفحة، لبضع مئات من الموديلات: البطاقات والملصقات، جرد البداية، الصندوق، ثم البيع على الإنترنت على المخزون نفسه. والجديد يُلصق أولاً." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "المخزون ليس ناقصاً: هو سيئ التوزيع." },
      { after: 4, text: "ما يبقى في نهاية الموسم يُقرَّر في منتصفه." },
    ],
    cta: { eyebrow: "قولوا لنا كم محلاً عندكم وكيف تسجّلون المقاسات والألوان اليوم: نبدأ بأسبوع في المحل", title: "مقاس مطلوب ناقص، قطعة تُباع مرتين، تبديل على ورق، موسم ينتهي بتصفية، أو مالك في فرنسا يريد متابعة مخزون محله في الجزائر", body: "Symloop تبني المخزون حسب المقاس واللون، الصندوق مع التبديل وحجز القطع، المخزون المشترك مع صفحتكم على إنستغرام، وقراءة الموسم. صِفوا لنا محلكم: ما تبيعونه، أين تبيعونه، والسؤال الذي لا يجيب عنه مخزونكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.fiche, kind: '2027', name: 'بطاقة المنتج: الصيغ، الرموز الشريطية، والأسعار' },
      { href: L.caisse, kind: '2027', name: 'جلسات الصندوق: الصندوق الذي يطابق' },
      { href: L.ecommerce, kind: '2027', name: 'إنشاء موقع تجارة إلكترونية: الدفع عند الاستلام والمرتجعات' },
      { href: L.client, kind: '2027', name: 'ملف الزبون الواحد: الهاتف مفتاحاً' },
    ] },
  },
};

const KEYWORDS = "logiciel boutique prêt-à-porter algérie 2027, logiciel pour magasin de vêtement, logiciel boutique, logiciel de gestion boutique, logiciel caisse boutique prêt-à-porter, logiciel gestion de stock boutique, application pour gérer ma boutique, gestion de stock taille couleur, comment gérer un magasin, comment faire l'inventaire d'un magasin, vendre sur instagram et en boutique, clothing store software algeria, boutique management software, fashion retail pos size and colour, برنامج محل الملابس, برنامج تسيير محل الملابس الجاهزة الجزائر, المخزون حسب المقاس واللون, البيع على إنستغرام والمحل, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
