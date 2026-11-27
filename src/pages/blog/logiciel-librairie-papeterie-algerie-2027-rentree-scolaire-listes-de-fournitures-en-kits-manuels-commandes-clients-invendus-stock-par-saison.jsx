import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-librairie-papeterie-algerie-2027-rentree-scolaire-listes-de-fournitures-en-kits-manuels-commandes-clients-invendus-stock-par-saison.mjs';

const SLUG = 'logiciel-librairie-papeterie-algerie-2027-rentree-scolaire-listes-de-fournitures-en-kits-manuels-commandes-clients-invendus-stock-par-saison';
const FIGURES = ['couches', 'familles', 'commande', 'rentree', 'liste', 'calendrier'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  fiche: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  panier: '/blog/comment-augmenter-le-panier-moyen-en-magasin-algerie-2027-articles-par-ticket-produits-achetes-ensemble-suggestion-a-la-caisse-lots-mesure/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  imprimerie: '/blog/logiciel-imprimerie-algerie-2027-devis-d-impression-prix-par-quantite-bon-a-tirer-dossier-de-fabrication-planning-des-machines-stock-papier/',
  boutique: '/blog/logiciel-boutique-pret-a-porter-magasin-de-vetements-algerie-2027-stock-par-taille-et-couleur-echanges-mise-de-cote-instagram-fin-de-saison/',
  caisse: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
};

const CONTENT = {
  fr: {
    kind: 'Librairie-papeterie · Algérie · 2027', title: "Logiciel librairie-papeterie en Algérie (2027) : la file de la rentrée, les listes scolaires lues ligne à ligne, les ruptures en pleine saison, les livres commandés qu'on ne retrouve pas ; kits, commande de saison, commandes clients, invendus, et ce qu'on met en place",
    dek: "« Je tiens une librairie-papeterie. Pendant la rentrée, la file sort du magasin : chaque parent arrive avec une liste, et l'on cherche douze articles un par un. Les cahiers les plus demandés manquent dès la deuxième semaine, le fournisseur livre quand tout est fini, et il me reste des cartons du reste jusqu'à l'année suivante. Les livres commandés pour des clients se perdent en rayon. Existe-t-il un logiciel de librairie-papeterie pour cela ? » Une librairie-papeterie n'est pas un commerce comme les autres : dans l'exemple de cette page, six semaines font 44 % des ventes de fournitures de l'année, sur une commande passée trois mois plus tôt.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de librairie-papeterie', 'Listes scolaires en kits', 'Commande de saison', 'Commandes clients de livres', 'Invendus et stock par saison', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de librairie-papeterie se distingue d'une caisse ordinaire par quatre mécanismes. **Les listes scolaires en kits** : la liste d'une classe est saisie une fois, en juin, puis vendue d'un scan en septembre. **La commande de saison** : proposée référence par référence, d'après la rentrée précédente et les listes des écoles. **Les commandes clients** : un livre commandé est rattaché à la personne qui l'attend, et un message part à son arrivée. **Les invendus** : comptés à la fin de la saison, avant la commande suivante. Dans l'exemple de cette page, six semaines font 44 % des ventes de fournitures de l'année.",
      "Cette page s'adresse à celles et ceux qui dirigent une librairie, une papeterie ou une librairie-papeterie, un seul magasin ou plusieurs, et à qui veut en ouvrir une, depuis l'Algérie ou depuis la France. Les définitions viennent de sources publiques : librairie, ISBN, code-barres EAN, papeterie, rentrée scolaire, saisonnalité, modèle du vendeur de journaux, commande en attente, biens substituables, délai. Le magasin, son indice de ventes, sa liste et ses effectifs sont un exemple construit. La page ne traite ni des règles de prix du livre ou du manuel scolaire, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans un logiciel de librairie-papeterie", body: [
        "La figure empile cinq couches ; la deuxième est celle qui fait la rentrée.",
      ], visual: 'couches', after: [
        "**Les articles.** La librairie est le commerce des livres, c'est-à-dire la partie vente et distribution de la chaîne de l'édition. Un livre s'identifie par son ISBN : un identifiant numérique commercial, conçu pour être unique, de treize chiffres depuis 2007, et différent pour chaque édition et chaque variante d'un même titre. L'EAN est un standard mondial qui définit un format de code-barres et un système de numérotation unique utilisés dans le commerce ; le préfixe 978, puis 979, y a été attribué aux livres, pour que les ISBN se rangent dans le même système de codes que le reste du commerce : la douchette de la caisse lit un livre comme elle lit un cahier. La papeterie, elle, va des feuilles et des blocs aux enveloppes et aux cahiers sur lesquels on écrit. Une fiche par article, avec ses codes, comme dans [la fiche produit](" + L.fiche + ").",
        "**Les listes.** C'est la couche accentuée, détaillée plus bas. **La caisse.** Un scan, un ticket, et un fonctionnement qui continue quand la connexion tombe, voir [l'application hors ligne](" + L.horsligne + ") ; la clôture se fait comme dans [les sessions de caisse](" + L.caisse + "). **Les commandes clients** et **la saison** ont chacune leur section. **Deux langues.** Titres en arabe et en français, recherche dans les deux : le titre d'un livre se cherche dans la langue où il est écrit.",
      ] },
      { heading: "Cinq familles, cinq façons de vendre", body: [
        "La figure met côte à côte cinq familles vendues dans le même magasin.",
      ], visual: 'familles', after: [
        "**Les fournitures scolaires.** La rentrée scolaire, au sens du commerce, est la période où les élèves et leurs parents achètent fournitures et vêtements pour l'école. La saisonnalité désigne des variations qui reviennent à intervalles réguliers de moins d'un an : ici, une fois par an, et presque tout d'un coup. **Les manuels.** Un manuel est un ouvrage qui rassemble le contenu d'une matière pour l'expliquer, produit pour répondre aux besoins des enseignants ; il se vend par niveau, et l'édition compte : l'ISBN change d'une édition à l'autre, et c'est lui qu'on commande. **Les livres.** Un exemplaire par titre, des centaines de titres : le stock se suit titre par titre.",
        "**La papeterie de bureau.** Toute l'année, à des entreprises, des écoles, des administrations : des clients en compte, des bons de livraison, un relevé en fin de mois, comme dans [le crédit client](" + L.credit + "). **Les services.** Photocopies, impressions, reliures : un tarif par quantité, expliqué dans [le logiciel d'imprimerie](" + L.imprimerie + "), et des compteurs relevés à la clôture. **Les articles de saison.** Cartables, trousses : un modèle, des couleurs, et une fin de saison à gérer comme dans [la boutique de prêt-à-porter](" + L.boutique + "). **Ce que cela change.** Un rapport qui mélange les cinq ne dit rien : la marge, la rotation et les restes se lisent famille par famille.",
      ] },
      { heading: "Le livre qu'on n'a pas en rayon", body: [
        "La figure suit une commande client en six temps.",
      ], visual: 'commande', after: [
        "**La commande en attente.** C'est une commande passée pour un article qui n'est pas en stock, en attente d'être servie. Aucune librairie ne tient tous les titres : la commande client fait partie du métier. **La demande.** Le titre se cherche par ISBN, par nom ou par auteur ; la fiche se crée à ce moment si elle n'existe pas. **La réservation.** Un nom, un numéro de téléphone, éventuellement un acompte. **La commande.** Les demandes de la semaine sont regroupées par distributeur : une seule commande au lieu de dix appels.",
        "**La réception.** C'est le temps accentué. Au scan du livre reçu, l'écran affiche « réservé pour… » : le livre va dans le casier des commandes, pas en rayon. **Le message.** Il part à la réception, par le canal qui arrive vraiment, voir [les notifications](" + L.notifications + "). **Le retrait.** Passé un délai que vous fixez, le livre non retiré retourne en rayon, et la liste des commandes non retirées se lit chaque semaine. **Ce que l'on mesure.** Délai entre demande et arrivée, par distributeur ; part des commandes retirées ; titres demandés plusieurs fois, qui méritent d'être tenus en stock.",
      ] },
      { heading: "Six semaines, et une commande passée en juin", body: [
        "La figure suit les ventes de fournitures sur cinquante-deux semaines.",
      ], visual: 'rentree', after: [
        "**Le pic.** Dans l'exemple, les semaines 35 à 40 font 44 % des ventes de fournitures de l'année, avec un sommet en semaine 37. **Le délai.** Un délai est le temps entre le lancement d'un processus et son achèvement ; ici, entre la commande et la livraison. S'il est de deux semaines, un réassort commandé au sommet arrive en semaine 39, quand l'essentiel est vendu. Le point de commande qui sert le reste de l'année, décrit dans [le réapprovisionnement](" + L.reappro + "), ne suffit donc plus : la saison se joue sur une commande passée avant.",
        "**Une seule commande.** La recherche opérationnelle a un nom pour ce problème : le modèle du vendeur de journaux, un modèle mathématique qui sert à déterminer le niveau de stock optimal, caractérisé par des prix fixes et une demande incertaine pour un produit qui ne se garde pas. Un cahier se garde, mais il immobilise de l'argent et de la place jusqu'à la rentrée suivante : le raisonnement est le même. **Les deux erreurs, chiffrées.** Chiffres fictifs : un cahier acheté 60 dinars et vendu 100. S'il en manque 200 au pic, ce sont 8 000 dinars de marge perdus, et des parents partis finir leur liste ailleurs. S'il en reste 200 à la fin, ce sont 12 000 dinars immobilisés jusqu'à la rentrée suivante, mais le cahier se revendra. **Ce que le logiciel propose.** Par référence : les ventes de la dernière rentrée, semaine par semaine, les jours de rupture, ce qui restait en fin de saison, et une quantité proposée que vous corrigez.",
      ] },
      { heading: "Une liste, un scan", body: [
        "La figure suit une liste scolaire de douze lignes.",
      ], visual: 'liste', after: [
        "**La liste saisie une fois.** Chaque niveau, et parfois chaque école : une liste, saisie en juin dès qu'elle est connue. **Le kit.** En septembre, un scan du code de la liste ajoute ses douze lignes au ticket : 33 articles dans l'exemple. Neuf lignes sont en stock. **Le remplacement.** Deux lignes manquent : le logiciel propose un article équivalent. Deux biens substituables sont deux biens qui servent au même usage ; pour une boîte de douze crayons de couleur, une autre marque. La personne choisit, le ticket le note. **La commande.** Une ligne n'a pas d'équivalent : elle est réservée, et un message prévient à l'arrivée.",
        "**Préparer d'avance.** Les listes les plus demandées se préparent en sachets, aux heures creuses : au comptoir, le kit sort en trente secondes au lieu de dix minutes. Une commande envoyée la veille, par message ou en ligne, se retire sans attendre. **Prévoir.** 96 élèves dans ce niveau, six cahiers de 96 pages par liste : 576 cahiers pour cette seule liste, connus dès juin. Toutes les familles n'achètent pas chez vous : la part réellement vendue l'an dernier, par école, corrige le calcul. **Vendre plus juste.** Le kit n'interdit pas d'ajouter : le protège-cahier oublié, le cartable. Sur ce point, voir [le panier moyen](" + L.panier + ").",
      ] },
      { heading: "Huit semaines, à terminer avant juin", body: [
        "Huit semaines dans l'exemple, à terminer avant juin.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : les familles, les écoles du quartier et leurs niveaux, les distributeurs, et les ventes de la dernière rentrée, même tenues sur cahier. **Le moment.** Le logiciel doit être en service avant que les listes ne soient connues : commencer au printemps, pas en août. **La reprise.** Les articles existants sont repris avec leurs codes ; les livres se créent au scan de leur ISBN.",
        "**Les invendus.** À la fin de la saison, un comptage par famille dit ce qui reste : ce qui se revendra l'an prochain, ce qui doit partir avant, en lots ou à prix réduit, et ce que le fournisseur peut reprendre lorsque ses conditions le prévoient. Ce reste entre dans la commande suivante : on commande ce qu'il faut, moins ce qu'on a. **Prêt à l'emploi ou sur mesure.** Des logiciels de caisse existent et conviennent à un magasin qui vend des articles un par un. Le sur-mesure se justifie quand les listes, la commande de saison et les commandes clients font la différence, ou quand plusieurs magasins partagent un stock. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que vous recevez** : une fiche par article avec ISBN ou code-barres ; les listes scolaires par école et par niveau, vendues en kit ; une caisse qui continue sans connexion ; les commandes clients avec message à l'arrivée ; une commande de saison proposée par référence ; les ventes par famille et par semaine.",
        "**Ce que le magasin évite** : la liste lue ligne à ligne pendant que la file attend, la rupture en semaine 37, le réassort qui arrive après le pic, le livre commandé vendu à quelqu'un d'autre, les cartons qui dorment jusqu'à la rentrée suivante.",
        "**Ce qui est mesuré** : ventes par semaine et par famille ; jours de rupture par référence pendant la saison ; restes en fin de saison ; kits vendus par école et par niveau ; délai des commandes clients par distributeur ; part des commandes retirées.",
        "**Ce que fait Symloop** : le cadrage des familles et des listes, la reprise des articles, la caisse, les kits, les commandes clients, la commande de saison et ses tableaux, en arabe et en français, pour un magasin ou plusieurs.",
      ], faq: [
        { q: "Quel logiciel pour une librairie-papeterie ?", a: "Un logiciel qui gère les livres par ISBN, les fournitures par code-barres, les listes scolaires en kits, les commandes clients et la commande de saison. Une caisse ordinaire suffit pour vendre article par article, pas pour tenir la rentrée." },
        { q: "Comment gérer la rentrée scolaire dans une librairie ?", a: "En saisissant les listes des écoles en juin, en préparant la commande de saison d'après la rentrée précédente, et en vendant chaque liste d'un scan, avec des kits préparés aux heures creuses." },
        { q: "Comment réduire la file d'attente pendant la rentrée ?", a: "Par les kits : une liste ajoutée d'un scan, des sachets préparés d'avance pour les listes les plus demandées, et des commandes envoyées la veille que le parent vient seulement retirer." },
        { q: "Comment savoir combien commander pour la rentrée ?", a: "Par référence : les ventes de la dernière rentrée, les jours où l'article a manqué, ce qui restait à la fin, et les listes des écoles multipliées par les effectifs. Le logiciel propose, vous corrigez." },
        { q: "Que faire quand un article de la liste manque ?", a: "Proposer un équivalent enregistré d'avance, que la personne accepte ou non. S'il n'y en a pas, réserver l'article et prévenir par message à son arrivée." },
        { q: "Comment gérer les commandes de livres des clients ?", a: "Chaque commande porte un nom et un téléphone. À la réception, le scan du livre affiche pour qui il est réservé ; un message part, et le livre non retiré retourne en rayon après un délai." },
        { q: "Faut-il un code-barres sur chaque article ?", a: "Les livres en ont un, lié à leur ISBN, et la plupart des fournitures aussi. Pour le reste, le logiciel imprime des étiquettes. Sans scan, la caisse de septembre ne suit pas." },
        { q: "Que faire des invendus après la rentrée ?", a: "Les compter par famille, garder ce qui se revendra, écouler le reste en lots avant la saison suivante, et déduire ce qui reste de la prochaine commande." },
        { q: "Peut-on vendre les fournitures en ligne ?", a: "Oui : la liste se commande en ligne ou par message, le kit se prépare et se retire en magasin ou se livre. Le stock est le même que celui de la caisse." },
        { q: "Le logiciel fonctionne-t-il sans connexion ?", a: "La caisse doit continuer à vendre quand la connexion tombe, puis se synchroniser. C'est un choix de construction à poser dès le départ, surtout pour les semaines de rentrée." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "Ce qui manque au pic arrive quand le pic est passé." },
      { after: 4, text: "La liste d'une classe se saisit une fois et se vend quatre-vingt-seize fois." },
    ],
    cta: { eyebrow: "Dites-nous combien d'écoles autour de vous, combien de références, et comment s'est passée la dernière rentrée : nous commençons par une semaine de cadrage", title: "File d'attente de la rentrée, ruptures en pleine saison, cartons d'invendus, livres commandés introuvables, ou librairie-papeterie que vous voulez ouvrir en Algérie depuis la France", body: "Symloop construit ce qui fait tenir une librairie-papeterie pendant ses six semaines : articles et codes, listes en kits, caisse, commandes clients, commande de saison. Décrivez-nous vos familles, vos écoles et vos distributeurs." },
    related: { label: 'À lire aussi', items: [
      { href: L.fiche, kind: '2027', name: 'La fiche produit : variantes, conditionnements, codes-barres, prix' },
      { href: L.reappro, kind: '2027', name: 'Le réapprovisionnement : point de commande, délai mesuré, proposition' },
      { href: L.panier, kind: '2027', name: 'Augmenter le panier moyen en magasin' },
      { href: L.boutique, kind: '2027', name: 'Logiciel de boutique de prêt-à-porter : tailles, couleurs, fin de saison' },
    ] },
  },
  en: {
    kind: 'Bookshop & stationery · Algeria · 2027', title: "Bookshop and stationery software in Algeria (2027): the back-to-school queue, school lists read line by line, stock-outs in mid-season, ordered books nobody can find; kits, the season's order, customer orders, unsold stock, and what we put in place",
    dek: "“I run a bookshop and stationery shop. During back-to-school the queue goes out of the door: every parent arrives with a list, and we look for twelve items one by one. The most requested notebooks run out in the second week, the supplier delivers when it is all over, and I am left with boxes of the rest until the following year. Books ordered for customers get lost on the shelves. Is there bookshop and stationery software for that?” A bookshop and stationery shop is not a shop like the others: in this page's example, six weeks make 44% of the year's supply sales, on an order placed three months earlier.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Bookshop and stationery software', 'School lists as kits', 'The season’s order', 'Customer book orders', 'Unsold stock by season', 'Algeria 2027'],
    intro: [
      "**Short answer.** Bookshop and stationery software differs from an ordinary till in four mechanisms. **School lists as kits**: a class list is entered once, in June, then sold with one scan in September. **The season's order**: proposed reference by reference, from the previous season and the schools' lists. **Customer orders**: an ordered book is tied to the person waiting for it, and a message goes out when it arrives. **Unsold stock**: counted at the end of the season, before the next order. In this page's example, six weeks make 44% of the year's supply sales.",
      "This page is for those who run a bookshop, a stationery shop or both, one shop or several, and for anyone who wants to open one, from Algeria or from France. The definitions come from public sources: bookselling, ISBN, EAN barcode, stationery, back-to-school, seasonality, the newsvendor model, backorder, substitute goods, lead time. The shop, its sales index, its list and its pupil numbers are a constructed example. The page covers neither pricing rules for books or textbooks nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside bookshop and stationery software", body: [
        "The figure stacks five layers; the second is the one that makes the season.",
      ], visual: 'couches', after: [
        "**Items.** Bookselling is the commercial trading of books, the retail and distribution end of the publishing process. A book is identified by its ISBN: a numeric commercial identifier, intended to be unique, thirteen digits long since 2007, and different for each edition and each variation of the same title. EAN is a global standard that defines a barcode format and a unique numbering system used in retail and trade; the prefix 978, later 979, was allocated in it to books, so that ISBNs sit in the same code system as the rest of trade: the scanner at the till reads a book the way it reads a notebook. Stationery, for its part, runs from sheets and pads to envelopes and books for writing in. One record per item, with its codes, as in [the product record](" + L.fiche + ").",
        "**Lists.** That is the accented layer, detailed below. **The till.** A scan, a ticket, and operation that carries on when the connection drops, see [the offline application](" + L.horsligne + "); closing is done as in [till sessions](" + L.caisse + "). **Customer orders** and **the season** each have their own section. **Two languages.** Titles in Arabic and in French, search in both: a book's title is searched in the language it is written in.",
      ] },
      { heading: "Five families, five ways of selling", body: [
        "The figure sets side by side five families sold in the same shop.",
      ], visual: 'familles', after: [
        "**School supplies.** Back-to-school, in the retail sense, is the period in which pupils and their parents buy supplies and clothing for school. Seasonality refers to variations that recur at regular intervals of less than a year: here, once a year, and almost all at once. **Textbooks.** A textbook is a work that gathers the content of a subject in order to explain it, produced to meet the needs of educators; it sells by year group, and the edition matters: the ISBN changes from one edition to the next, and that is what gets ordered. **Books.** One copy per title, hundreds of titles: stock is tracked title by title.",
        "**Office stationery.** All year, to companies, schools, administrations: customers on account, delivery notes, a statement at the end of the month, as in [customer credit](" + L.credit + "). **Services.** Photocopies, printing, binding: a price by quantity, explained in [print shop software](" + L.imprimerie + "), and counters read at closing. **Seasonal items.** School bags, pencil cases: a model, colours, and an end of season to manage as in [the clothing shop](" + L.boutique + "). **What that changes.** A report that mixes the five says nothing: margin, turnover and leftovers are read family by family.",
      ] },
      { heading: "The book that is not on the shelf", body: [
        "The figure follows a customer order in six steps.",
      ], visual: 'commande', after: [
        "**The backorder.** It is an order placed for an item that is out of stock and awaiting fulfilment. No bookshop holds every title: the customer order is part of the trade. **The request.** The title is searched by ISBN, by name or by author; the record is created at that moment if it does not exist. **The reservation.** A name, a phone number, possibly a deposit. **The order.** The week's requests are grouped per distributor: one order instead of ten calls.",
        "**Receipt.** It is the accented step. When the received book is scanned, the screen shows “reserved for…”: the book goes to the orders shelf, not to the sales floor. **The message.** It goes out at receipt, through the channel that actually arrives, see [notifications](" + L.notifications + "). **Collection.** After a delay you set, the uncollected book goes back on the shelf, and the list of uncollected orders is read every week. **What is measured.** Time between request and arrival, per distributor; share of orders collected; titles requested several times, which deserve to be held in stock.",
      ] },
      { heading: "Six weeks, and an order placed in June", body: [
        "The figure follows supply sales over fifty-two weeks.",
      ], visual: 'rentree', after: [
        "**The peak.** In the example, weeks 35 to 40 make 44% of the year's supply sales, peaking in week 37. **Lead time.** A lead time is the time between the start of a process and its completion; here, between the order and the delivery. If it is two weeks, a top-up ordered at the peak arrives in week 39, when most of it has been sold. The reorder point that serves the rest of the year, described in [replenishment](" + L.reappro + "), is therefore no longer enough: the season is decided by an order placed beforehand.",
        "**A single order.** Operations research has a name for this problem: the newsvendor model, a mathematical model used to determine optimal inventory levels, characterised by fixed prices and uncertain demand for a product that does not keep. A notebook keeps, but it ties up money and space until the next season: the reasoning is the same. **The two errors, in figures.** Fictitious figures: a notebook bought for 60 dinars and sold for 100. If 200 are missing at the peak, that is 8,000 dinars of margin lost, and parents gone to finish their list elsewhere. If 200 are left at the end, that is 12,000 dinars tied up until the next season, but the notebook will sell. **What the software proposes.** Per reference: last season's sales, week by week, the days out of stock, what was left at the end of the season, and a proposed quantity that you correct.",
      ] },
      { heading: "One list, one scan", body: [
        "The figure follows a school list of twelve lines.",
      ], visual: 'liste', after: [
        "**A list entered once.** Each year group, and sometimes each school: a list, entered in June as soon as it is known. **The kit.** In September, one scan of the list's code adds its twelve lines to the ticket: 33 items in the example. Nine lines are in stock. **Replacement.** Two lines are missing: the software offers an equivalent item. Substitute goods are two goods that can be used for the same purpose; for a box of twelve coloured pencils, another brand. The customer chooses, the ticket records it. **The order.** One line has no equivalent: it is reserved, and a message gives notice on arrival.",
        "**Preparing in advance.** The most requested lists are prepared in bags, during quiet hours: at the counter, the kit leaves in thirty seconds instead of ten minutes. An order sent the day before, by message or online, is collected without waiting. **Planning.** 96 pupils in that year group, six notebooks of 96 pages per list: 576 notebooks for that list alone, known in June. Not every family buys from you: the share actually sold last year, per school, corrects the calculation. **Selling more accurately.** The kit does not prevent additions: the forgotten notebook cover, the school bag. On that point, see [the average basket](" + L.panier + ").",
      ] },
      { heading: "Eight weeks, to finish before June", body: [
        "Eight weeks in the example, to finish before June.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: the families, the neighbourhood schools and their year groups, the distributors, and last season's sales, even if kept in a notebook. **Timing.** The software has to be in service before the lists are known: start in spring, not in August. **Taking over.** Existing items are taken over with their codes; books are created by scanning their ISBN.",
        "**Unsold stock.** At the end of the season, a count per family says what is left: what will sell next year, what has to go before then, in bundles or at a reduced price, and what the supplier can take back where its terms provide for it. That remainder goes into the next order: you order what is needed, minus what you have. **Ready-made or custom.** Till software exists and suits a shop that sells items one by one. Custom work is justified when the lists, the season's order and customer orders make the difference, or when several shops share a stock. **The durations** are those of a constructed example.",
      ], list: [
        "**What you receive**: one record per item with ISBN or barcode; school lists per school and per year group, sold as kits; a till that carries on without a connection; customer orders with a message on arrival; a season's order proposed per reference; sales per family and per week.",
        "**What the shop avoids**: the list read line by line while the queue waits, the stock-out in week 37, the top-up that arrives after the peak, the ordered book sold to someone else, the boxes that sleep until the next season.",
        "**What is measured**: sales per week and per family; days out of stock per reference during the season; leftovers at the end of the season; kits sold per school and per year group; lead time of customer orders per distributor; share of orders collected.",
        "**What Symloop does**: scoping the families and the lists, taking over the items, the till, the kits, customer orders, the season's order and its tables, in Arabic and in French, for one shop or several.",
      ], faq: [
        { q: "What software for a bookshop and stationery shop?", a: "Software that handles books by ISBN, supplies by barcode, school lists as kits, customer orders and the season's order. An ordinary till is enough to sell item by item, not to hold through back-to-school." },
        { q: "How do you manage back-to-school in a bookshop?", a: "By entering the schools' lists in June, preparing the season's order from the previous season, and selling each list with one scan, with kits prepared during quiet hours." },
        { q: "How do you shorten the queue during back-to-school?", a: "With kits: a list added with one scan, bags prepared in advance for the most requested lists, and orders sent the day before that the parent only comes to collect." },
        { q: "How do you know how much to order for back-to-school?", a: "Per reference: last season's sales, the days the item was missing, what was left at the end, and the schools' lists multiplied by pupil numbers. The software proposes, you correct." },
        { q: "What do you do when an item on the list is missing?", a: "Offer an equivalent recorded in advance, which the customer accepts or not. If there is none, reserve the item and give notice by message when it arrives." },
        { q: "How do you manage customers' book orders?", a: "Each order carries a name and a phone number. At receipt, scanning the book shows who it is reserved for; a message goes out, and the uncollected book goes back on the shelf after a delay." },
        { q: "Is a barcode needed on every item?", a: "Books have one, linked to their ISBN, and so do most supplies. For the rest, the software prints labels. Without scanning, the till cannot keep up in September." },
        { q: "What do you do with unsold stock after back-to-school?", a: "Count it per family, keep what will sell, clear the rest in bundles before the next season, and deduct what remains from the next order." },
        { q: "Can supplies be sold online?", a: "Yes: the list is ordered online or by message, the kit is prepared and collected in the shop or delivered. The stock is the same as the till's." },
        { q: "Does the software work without a connection?", a: "The till has to keep selling when the connection drops, then synchronise. It is a construction choice to make from the start, above all for the back-to-school weeks." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "What is missing at the peak arrives once the peak has passed." },
      { after: 4, text: "A class list is entered once and sold ninety-six times." },
    ],
    cta: { eyebrow: "Tell us how many schools are around you, how many references, and how the last season went: we start with a week of scoping", title: "The back-to-school queue, stock-outs in mid-season, boxes of unsold stock, ordered books nobody can find, or a bookshop and stationery shop you want to open in Algeria from France", body: "Symloop builds what makes a bookshop and stationery shop hold through its six weeks: items and codes, lists as kits, the till, customer orders, the season's order. Describe your families, your schools and your distributors to us." },
    related: { label: 'Also read', items: [
      { href: L.fiche, kind: '2027', name: 'The product record: variants, packaging, barcodes, prices' },
      { href: L.reappro, kind: '2027', name: 'Replenishment: reorder point, measured lead time, proposal' },
      { href: L.panier, kind: '2027', name: 'Raising the average basket in a shop' },
      { href: L.boutique, kind: '2027', name: 'Clothing shop software: sizes, colours, end of season' },
    ] },
  },
  ar: {
    kind: 'مكتبة ووراقة · الجزائر · 2027', title: "برنامج مكتبة ووراقة في الجزائر (2027): طابور الدخول المدرسي، قوائم تُقرأ سطراً بسطر، انقطاعات في عزّ الموسم، وكتب مطلوبة لا يُعثر عليها؛ الحزم، طلبية الموسم، طلبيات الزبائن، ما لم يُبع، وما نضعه",
    dek: "«أسيّر مكتبة ووراقة. في الدخول المدرسي يخرج الطابور من المحل: كل وليّ يأتي بقائمة، ونبحث عن اثنتي عشرة سلعة واحدة واحدة. الكراريس الأكثر طلباً تنقص منذ الأسبوع الثاني، والمورّد يسلّم حين ينتهي كل شيء، وتبقى عندي علب من الباقي حتى السنة التالية. والكتب المطلوبة للزبائن تضيع على الرفوف. هل يوجد برنامج مكتبة ووراقة لهذا؟» المكتبة والوراقة ليست تجارة كغيرها: في مثال هذه الصفحة، ستة أسابيع تصنع 44 بالمئة من مبيعات اللوازم المدرسية في السنة، على طلبية أُبرمت قبل ثلاثة أشهر.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج المكتبة والوراقة', 'القوائم المدرسية في حزم', 'طلبية الموسم', 'طلبيات الكتب للزبائن', 'ما لم يُبع والمخزون حسب الموسم', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج المكتبة والوراقة يتميّز عن صندوق عادي بأربع آليات. **القوائم المدرسية في حزم**: قائمة القسم تُدخَل مرة واحدة، في جوان، ثم تُباع بمسح واحد في سبتمبر. **طلبية الموسم**: تُقترح مرجعاً بمرجع، حسب الدخول السابق وقوائم المدارس. **طلبيات الزبائن**: الكتاب المطلوب يُربط بمن ينتظره، ورسالة تنطلق عند وصوله. و**ما لم يُبع**: يُعدّ في نهاية الموسم، قبل الطلبية التالية. في مثال هذه الصفحة، ستة أسابيع تصنع 44 بالمئة من مبيعات اللوازم (الأدوات) المدرسية في السنة.",
      "هذه الصفحة موجّهة إلى من يسيّر مكتبة، وراقة، أو مكتبة ووراقة، محلاً واحداً أو عدة محلات، وإلى من يريد فتح واحدة، من الجزائر أو من فرنسا. التعريفات من مصادر عمومية: بيع الكتب، رقم " + I('ISBN') + "، الرمز الشريطي " + I('EAN') + "، الوراقة، الدخول المدرسي، الموسمية، نموذج بائع الجرائد، الطلبية المعلَّقة، السلع البديلة، والأجل. والمحل ومؤشر مبيعاته وقائمته وأعداد تلاميذه مثال مركَّب. والصفحة لا تتناول قواعد أسعار الكتاب أو الكتاب المدرسي ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في برنامج مكتبة ووراقة", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية هي التي تصنع الدخول المدرسي.",
      ], visual: 'couches', after: [
        "**السلع.** بيع الكتب هو تجارة الكتب، أي طرف البيع والتوزيع من سلسلة النشر. والكتاب يُعرَّف برقمه " + I('ISBN') + ": معرِّف رقمي تجاري، وُضع ليكون وحيداً، من ثلاثة عشر رقماً منذ 2007، ومختلف لكل طبعة ولكل صيغة من العنوان نفسه. ونظام " + I('EAN') + " معيار عالمي يحدّد شكل رمز شريطي ونظام ترقيم وحيداً يُستعملان في التجارة؛ وقد خُصّصت فيه البادئة 978، ثم 979، للكتب، لتُرتَّب أرقام " + I('ISBN') + " في نظام الرموز نفسه كباقي التجارة: فقارئ الرموز في الصندوق يقرأ الكتاب كما يقرأ الكراس. أما الوراقة فتشمل الأوراق، الدفاتر، الأظرفة، والكراريس التي يُكتب عليها. بطاقة لكل سلعة، برموزها، كما في [بطاقة المنتج](" + L.fiche + ").",
        "**القوائم.** هي الطبقة المبرزة، ومفصَّلة أسفله. **الصندوق.** مسح، تذكرة، وعمل يستمر حين ينقطع الاتصال، انظر [التطبيق دون اتصال](" + L.horsligne + ")؛ والإغلاق يتم كما في [حصص الصندوق](" + L.caisse + "). ولكل من **طلبيات الزبائن** و**الموسم** قسمه. **لغتان.** العناوين بالعربية والفرنسية، والبحث في الاثنتين: عنوان الكتاب يُبحث عنه باللغة التي كُتب بها.",
      ] },
      { heading: "خمس عائلات، وخمس طرق للبيع", body: [
        "الشكل يضع جنباً إلى جنب خمس عائلات تُباع في المحل نفسه.",
      ], visual: 'familles', after: [
        "**اللوازم المدرسية.** الدخول المدرسي، بمعنى التجارة، هو الفترة التي يشتري فيها التلاميذ وأولياؤهم اللوازم والملابس للمدرسة. والموسمية تعني تغيّرات تعود على فترات منتظمة أقل من سنة: هنا، مرة في السنة، وتقريباً دفعة واحدة. **الكتب المدرسية.** الكتاب المدرسي مؤلَّف يجمع محتوى مادة ليشرحها، يُنتَج لتلبية حاجات المدرّسين؛ ويُباع حسب المستوى، والطبعة مهمّة: رقم " + I('ISBN') + " يتغيّر من طبعة إلى أخرى، وهو ما يُطلب. **الكتب.** نسخة لكل عنوان، ومئات العناوين: المخزون يُتتبَّع عنواناً بعنوان.",
        "**وراقة المكاتب.** طوال السنة، للمؤسسات والمدارس والإدارات: زبائن بحساب، وصولات تسليم، وكشف في نهاية الشهر، كما في [دَين الزبون](" + L.credit + "). **الخدمات.** نسخ، طباعة، وتجليد: تسعيرة حسب الكمية، مشروحة في [برنامج المطبعة](" + L.imprimerie + ")، وعدّادات تُرفع عند الإغلاق. **سلع الموسم.** محافظ ومقالم: موديل، ألوان، ونهاية موسم تُسيَّر كما في [محل الملابس](" + L.boutique + "). **ما يغيّره ذلك.** تقرير يخلط الخمس لا يقول شيئاً: الهامش، الدوران، والباقي تُقرأ عائلة بعائلة.",
      ] },
      { heading: "الكتاب الذي ليس على الرف", body: [
        "الشكل يتابع طلبية زبون في ست مراحل.",
      ], visual: 'commande', after: [
        "**الطلبية المعلَّقة.** هي طلبية على سلعة غير موجودة في المخزون، تنتظر أن تُلبّى. ولا مكتبة تملك كل العناوين: طلبية الزبون جزء من المهنة. **الطلب.** العنوان يُبحث عنه برقم " + I('ISBN') + "، بالاسم، أو بالمؤلف؛ والبطاقة تُنشأ في تلك اللحظة إن لم توجد. **الحجز.** اسم، رقم هاتف، وعربون إن لزم. **الطلبية.** طلبات الأسبوع تُجمَّع لكل موزّع: طلبية واحدة بدل عشر مكالمات.",
        "**الوصول.** هو المرحلة المبرزة. عند مسح الكتاب المستلَم، تعرض الشاشة «محجوز لـ…»: الكتاب يذهب إلى رف الطلبيات، لا إلى رف البيع. **الرسالة.** تنطلق عند الوصول، بالقناة التي تصل فعلاً، انظر [الإشعارات](" + L.notifications + "). **الاستلام.** بعد أجل تحدّدونه، يعود الكتاب الذي لم يُستلم إلى الرف، وقائمة الطلبيات غير المستلمة تُقرأ كل أسبوع. **ما يُقاس.** المدة بين الطلب والوصول، لكل موزّع؛ نسبة الطلبيات المستلمة؛ والعناوين المطلوبة عدة مرات، التي تستحق أن تكون في المخزون.",
      ] },
      { heading: "ستة أسابيع، وطلبية تُبرم في جوان", body: [
        "الشكل يتابع مبيعات اللوازم على اثنين وخمسين أسبوعاً.",
      ], visual: 'rentree', after: [
        "**القمة.** في المثال، الأسابيع من 35 إلى 40 تصنع 44 بالمئة من مبيعات اللوازم في السنة، بقمة في الأسبوع 37. **الأجل.** الأجل هو الزمن بين انطلاق عملية واكتمالها؛ وهنا، بين الطلبية والتسليم. فإذا كان أسبوعين، وصلت إعادة تموين طُلبت في القمة في الأسبوع 39، حين يكون الأهم قد بيع. فنقطة الطلب التي تخدم باقي السنة، الموصوفة في [إعادة التموين](" + L.reappro + ")، لا تكفي: الموسم يُحسم بطلبية تُبرم قبله.",
        "**طلبية واحدة.** لبحوث العمليات اسم لهذه المسألة: نموذج بائع الجرائد، نموذج رياضي يُستعمل لتحديد مستوى المخزون الأمثل، يتميّز بأسعار ثابتة وطلب غير مؤكَّد على منتوج لا يُحفظ. والكراس يُحفظ، لكنه يجمّد مالاً ومكاناً حتى الدخول القادم: فالمنطق واحد. **الخطآن، بالأرقام.** أرقام خيالية: كراس يُشترى بـ60 ديناراً ويُباع بـ100. إذا نقص منه 200 في القمة، ضاع " + I('8 000') + " دينار من الهامش، وذهب أولياء لإتمام قوائمهم في مكان آخر. وإذا بقي منه 200 في النهاية، تجمّد " + I('12 000') + " دينار حتى الدخول القادم، لكن الكراس سيُباع. **ما يقترحه البرنامج.** لكل مرجع: مبيعات الدخول الأخير، أسبوعاً بأسبوع، أيام الانقطاع، ما بقي في نهاية الموسم، وكمية مقترحة تصحّحونها.",
      ] },
      { heading: "قائمة، ومسح واحد", body: [
        "الشكل يتابع قائمة مدرسية من اثني عشر سطراً.",
      ], visual: 'liste', after: [
        "**قائمة تُدخَل مرة واحدة.** كل مستوى، وأحياناً كل مدرسة: قائمة، تُدخَل في جوان فور معرفتها. **الحزمة.** في سبتمبر، مسح واحد لرمز القائمة يضيف أسطرها الاثني عشر إلى التذكرة: 33 سلعة في المثال. تسعة أسطر في المخزون. **التعويض.** سطران ناقصان: البرنامج يقترح سلعة معادلة. والسلعتان البديلتان سلعتان تصلحان للاستعمال نفسه؛ ولعلبة من اثني عشر قلماً ملوّناً، علامة أخرى. الزبون يختار، والتذكرة تسجّل. **الطلبية.** سطر لا معادل له: يُحجز، ورسالة تنبّه عند وصوله.",
        "**التحضير المسبق.** القوائم الأكثر طلباً تُحضَّر في أكياس، في الساعات الهادئة: عند المنضدة، تخرج الحزمة في ثلاثين ثانية بدل عشر دقائق. وطلبية تُرسَل في اليوم السابق، برسالة أو عبر الإنترنت، تُستلم دون انتظار. **التوقّع.** 96 تلميذاً في هذا المستوى، وستة كراريس من 96 صفحة في القائمة: 576 كراساً لهذه القائمة وحدها، تُعرف منذ جوان. وليست كل العائلات تشتري عندكم: النسبة المباعة فعلاً في السنة الماضية، لكل مدرسة، تصحّح الحساب. **بيع أدقّ.** الحزمة لا تمنع الإضافة: غلاف الكراس المنسي، والمحفظة. وفي هذا، انظر [متوسط السلة](" + L.panier + ").",
      ] },
      { heading: "ثمانية أسابيع، تنتهي قبل جوان", body: [
        "ثمانية أسابيع في المثال، تنتهي قبل جوان.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: العائلات، مدارس الحي ومستوياتها، الموزّعون، ومبيعات الدخول الأخير، ولو كانت على كراس. **التوقيت.** يجب أن يكون البرنامج في الخدمة قبل أن تُعرف القوائم: البدء في الربيع، لا في أوت. **الاسترجاع.** السلع الموجودة تُسترجع برموزها؛ والكتب تُنشأ بمسح رقمها " + I('ISBN') + ".",
        "**ما لم يُبع.** في نهاية الموسم، عدّ لكل عائلة يقول ما بقي: ما سيُباع في السنة القادمة، ما يجب أن يخرج قبلها، في حزم أو بسعر مخفَّض، وما يمكن أن يستعيده المورّد حين تنص شروطه على ذلك. وهذا الباقي يدخل في الطلبية التالية: يُطلب ما يلزم، ناقص ما هو موجود. **جاهز أو على المقاس.** توجد برامج صندوق جاهزة وتناسب محلاً يبيع السلع واحدة واحدة. والعمل على المقاس يُبرَّر حين تصنع القوائم وطلبية الموسم وطلبيات الزبائن الفرق، أو حين تتقاسم عدة محلات مخزوناً. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقونه**: بطاقة لكل سلعة برقم " + I('ISBN') + " أو برمز شريطي؛ القوائم المدرسية لكل مدرسة ولكل مستوى، تُباع في حزم؛ صندوق يستمر دون اتصال؛ طلبيات الزبائن برسالة عند الوصول؛ طلبية موسم مقترحة لكل مرجع؛ والمبيعات لكل عائلة ولكل أسبوع.",
        "**ما يتفاداه المحل**: القائمة التي تُقرأ سطراً بسطر والطابور ينتظر، الانقطاع في الأسبوع 37، إعادة التموين التي تصل بعد القمة، الكتاب المطلوب الذي يُباع لغير صاحبه، والعلب التي تنام حتى الدخول القادم.",
        "**ما يُقاس**: المبيعات لكل أسبوع ولكل عائلة؛ أيام الانقطاع لكل مرجع أثناء الموسم؛ الباقي في نهاية الموسم؛ الحزم المباعة لكل مدرسة ولكل مستوى؛ مدة طلبيات الزبائن لكل موزّع؛ ونسبة الطلبيات المستلمة.",
        "**ما تفعله Symloop**: تأطير العائلات والقوائم، استرجاع السلع، الصندوق، الحزم، طلبيات الزبائن، طلبية الموسم وجداولها، بالعربية والفرنسية، لمحل واحد أو لعدة محلات.",
      ], faq: [
        { q: "أي برنامج لمكتبة ووراقة؟", a: "برنامج يسيّر الكتب برقم " + I('ISBN') + "، اللوازم بالرمز الشريطي، القوائم المدرسية في حزم، طلبيات الزبائن، وطلبية الموسم. والصندوق العادي يكفي للبيع سلعة بسلعة، لا للصمود في الدخول المدرسي." },
        { q: "كيف يُسيَّر الدخول المدرسي في مكتبة؟", a: "بإدخال قوائم المدارس في جوان، تحضير طلبية الموسم حسب الدخول السابق، وبيع كل قائمة بمسح واحد، مع حزم تُحضَّر في الساعات الهادئة." },
        { q: "كيف يُقلَّص الطابور في الدخول المدرسي؟", a: "بالحزم: قائمة تُضاف بمسح واحد، أكياس محضَّرة مسبقاً للقوائم الأكثر طلباً، وطلبيات تُرسَل في اليوم السابق ويأتي الوليّ لاستلامها فقط." },
        { q: "كيف يُعرف كم يُطلب للدخول المدرسي؟", a: "لكل مرجع: مبيعات الدخول الأخير، الأيام التي نقصت فيها السلعة، ما بقي في النهاية، وقوائم المدارس مضروبة في أعداد التلاميذ. البرنامج يقترح، وأنتم تصحّحون." },
        { q: "ما العمل حين تنقص سلعة من القائمة؟", a: "اقتراح معادل مسجَّل مسبقاً، يقبله الزبون أو لا. وإن لم يوجد، تُحجز السلعة ويُنبَّه برسالة عند وصولها." },
        { q: "كيف تُسيَّر طلبيات الكتب للزبائن؟", a: "كل طلبية تحمل اسماً وهاتفاً. عند الوصول، مسح الكتاب يعرض لمن هو محجوز؛ رسالة تنطلق، والكتاب الذي لم يُستلم يعود إلى الرف بعد أجل." },
        { q: "هل يلزم رمز شريطي على كل سلعة؟", a: "الكتب لها رمز، مرتبط برقمها " + I('ISBN') + "، وأغلب اللوازم كذلك. وللباقي، يطبع البرنامج ملصقات. ودون مسح، صندوق سبتمبر لا يلحق." },
        { q: "ما العمل بما لم يُبع بعد الدخول المدرسي؟", a: "عدّه لكل عائلة، الاحتفاظ بما سيُباع، تصريف الباقي في حزم قبل الموسم القادم، وطرح ما بقي من الطلبية القادمة." },
        { q: "هل يمكن بيع اللوازم المدرسية عبر الإنترنت؟", a: "نعم: القائمة تُطلب عبر الإنترنت أو برسالة، الحزمة تُحضَّر وتُستلم في المحل أو تُسلَّم. والمخزون هو نفسه مخزون الصندوق." },
        { q: "هل يشتغل البرنامج دون اتصال؟", a: "الصندوق يجب أن يواصل البيع حين ينقطع الاتصال، ثم يتزامن. وهذا خيار بناء يُطرح منذ البداية، خاصة لأسابيع الدخول المدرسي." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "ما ينقص في القمة يصل حين تكون القمة قد مرّت." },
      { after: 4, text: "قائمة القسم تُدخَل مرة واحدة وتُباع ستاً وتسعين مرة." },
    ],
    cta: { eyebrow: "قولوا لنا كم مدرسة حولكم، كم مرجعاً، وكيف مرّ الدخول الأخير: نبدأ بأسبوع تأطير", title: "طابور الدخول المدرسي، انقطاعات في عزّ الموسم، علب لم تُبع، كتب مطلوبة لا يُعثر عليها، أو مكتبة ووراقة تريدون فتحها في الجزائر من فرنسا", body: "Symloop تبني ما يجعل المكتبة والوراقة تصمد في أسابيعها الستة: السلع والرموز، القوائم في حزم، الصندوق، طلبيات الزبائن، وطلبية الموسم. صِفوا لنا عائلاتكم، مدارسكم، وموزّعيكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.fiche, kind: '2027', name: 'بطاقة المنتج: الصيغ، التعبئات، الرموز الشريطية، والأسعار' },
      { href: L.reappro, kind: '2027', name: 'إعادة التموين: نقطة الطلب، الأجل المقاس، والاقتراح' },
      { href: L.panier, kind: '2027', name: 'رفع متوسط السلة في المحل' },
      { href: L.boutique, kind: '2027', name: 'برنامج محل الملابس: المقاسات، الألوان، ونهاية الموسم' },
    ] },
  },
};

const KEYWORDS = "logiciel librairie, logiciel librairie papeterie algérie 2027, logiciel de gestion librairie, logiciel de gestion de librairie, logiciel caisse librairie, logiciel gestion de stock librairie, logiciel papeterie, application librairie, fournitures scolaires rentrée, listes scolaires en kits, bookshop software, bookstore management software algeria, stationery shop software, school supply lists as kits, back to school stock, برنامج مكتبة, برنامج تسيير مكتبة ووراقة, اللوازم المدرسية, الأدوات المدرسية, الدخول المدرسي, القوائم المدرسية, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
