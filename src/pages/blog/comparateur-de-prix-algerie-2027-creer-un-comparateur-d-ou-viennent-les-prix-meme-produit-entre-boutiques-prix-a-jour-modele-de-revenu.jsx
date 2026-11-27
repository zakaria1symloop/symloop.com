import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comparateur-de-prix-algerie-2027-creer-un-comparateur-d-ou-viennent-les-prix-meme-produit-entre-boutiques-prix-a-jour-modele-de-revenu.mjs';

const SLUG = 'comparateur-de-prix-algerie-2027-creer-un-comparateur-d-ou-viennent-les-prix-meme-produit-entre-boutiques-prix-a-jour-modele-de-revenu';
const FIGURES = ['couches', 'appariement', 'sources', 'lancer', 'fraicheur', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  marketplace: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/',
  fiche: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  api: '/blog/ouvrir-une-api-a-vos-partenaires-algerie-2027-cles-droits-quotas-webhooks-versions-documentation-sans-exposer-votre-systeme/',
  taches: '/blog/rapport-de-nuit-jamais-parti-taches-en-arriere-plan-application-algerie-2027-file-de-travaux-reprises-idempotence-planification-echecs/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  catalogue: '/blog/comment-creer-un-catalogue-en-ligne-en-algerie-2027-catalogue-pdf-jamais-a-jour-fiches-produits-prix-par-client-demande-de-devis-sans-boutique/',
};

const CONTENT = {
  fr: {
    kind: 'Comparateur de prix · Algérie · 2027', title: "Comparateur de prix en Algérie (2027) : créer un comparateur quand les boutiques n'ont pas de flux, d'où viennent les prix, comment reconnaître le même produit d'une boutique à l'autre, des prix à jour, comment il gagne sa vie",
    dek: "« Je vis en France, j'utilise des comparateurs de prix tous les jours, et je veux en lancer un en Algérie, pour l'électroménager et les téléphones. Mais les boutiques n'ont pas de flux de produits, le même réfrigérateur s'écrit de dix façons, les prix changent sans prévenir, et je ne sais pas comment un comparateur gagne de l'argent. Comment créer un comparateur de prix en Algérie ? » Un comparateur ne vend rien : il reconnaît le même produit chez plusieurs marchands et affiche leurs prix du jour. Presque tout le travail est là : l'appariement, et la fraîcheur.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Comparateur de prix', 'Appariement de produits', 'Flux de produits', 'Fraîcheur des prix', 'Affiliation et paiement au clic', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un comparateur de prix ne vend rien : il **reconnaît le même produit** chez plusieurs marchands et **affiche leurs prix du jour**. En Algérie, où peu de boutiques produisent un flux, il se construit sur quatre décisions : **une seule catégorie et une seule ville** pour commencer ; **plusieurs sources de prix**, de l'espace où le marchand saisit lui-même au relevé de ses pages avec son accord ; **un appariement par marque et référence**, vérifié à la main au début ; **des prix datés**, masqués quand ils vieillissent. Il gagne sa vie au clic envoyé vers la boutique. Douze semaines dans l'exemple pour ouvrir la première catégorie.",
      "Cette page s'adresse au fondateur installé en France qui veut lancer en Algérie un service qu'il utilise tous les jours, et à l'entreprise algérienne, média, distributeur ou regroupement de commerçants, qui veut publier une comparaison sérieuse. Les définitions viennent de sources publiques : comparateur de prix, flux de produits, identifiant GTIN, rapprochement d'enregistrements, extraction de données web, fichier robots.txt, affiliation, paiement au clic, et le vocabulaire schema.org pour décrire une offre. Le produit, la marque, les prix, les seuils et le calendrier sont un exemple construit. Cette page ne donne aucun prix de marché ; elle ne traite ni de fiscalité, ni du droit applicable à la collecte de données sur le site d'un tiers : voyez votre conseil avant tout relevé automatique. Le modèle d'une place de marché, où l'on achète sur la plateforme, est décrit dans [un autre guide](" + L.marketplace + ").",
    ],
    sections: [
      { heading: "Un comparateur de prix, en cinq couches", body: [
        "La couche accentuée est l'appariement.",
      ], visual: 'couches', after: [
        "**Ce que c'est.** Un comparateur de prix est un moteur de recherche vertical que les acheteurs utilisent pour filtrer et comparer des produits selon le prix, les caractéristiques et les avis. Vertical : il se concentre sur un segment précis, là où un moteur généraliste cherche partout. Et il ne vend pas lui-même : ces sites tirent leurs revenus d'accords d'affiliation avec les marchands. **Les modèles.** Ceux qu'un fondateur installé en France connaît ont un quart de siècle : Kelkoo, service européen de comparaison de prix, a été fondé en France en 1999 ; idealo a été lancé en Allemagne en 2000.",
        "**Ce qui change en Algérie.** Ces sites reçoivent leurs prix des marchands : les détaillants qui veulent y figurer fournissent leur liste de produits et de prix. Ici, peu de boutiques savent le faire, beaucoup vendent par les réseaux sociaux, et le paiement se fait souvent à la livraison. Le comparateur doit donc aller chercher les prix, et accepter des sources lentes. C'est possible, à condition de commencer étroit : une catégorie, une ville.",
      ] },
      { heading: "Le même produit, trois écritures", body: [
        "La figure suit trois offres du même produit jusqu'à une seule fiche.",
      ], visual: 'appariement', after: [
        "**Le vrai travail.** Reconnaître que trois offres désignent le même produit s'appelle le rapprochement d'enregistrements : trouver, dans des sources différentes, les enregistrements qui se rapportent à la même entité. Quand le marchand fournit le code-barres, c'est simple : le GTIN est un identifiant d'article développé par l'organisation GS1, long de 8, 12, 13 ou 14 chiffres, et deux offres qui portent le même sont le même produit. **Sans code-barres.** On normalise : la marque dans une liste fermée, la référence sans espaces ni tirets, puis une caractéristique qui tranche, la capacité, la mémoire, la couleur.",
        "**Les faux jumeaux.** Deux références qui ne diffèrent que d'une lettre peuvent être deux produits : la règle est de ne jamais fusionner en cas de doute, et d'envoyer l'offre vers un écran où une personne décide en dix secondes. Dans l'exemple, 40 % des offres s'apparient par le code-barres, 35 % par la marque et la référence, 25 % à la main. **La fiche.** Ce qui sort de l'appariement est une fiche produit propre, sujet du [guide sur la fiche produit](" + L.fiche + ") ; ce que le visiteur tape pour la trouver relève de [la recherche](" + L.recherche + ").",
      ] },
      { heading: "D'où viennent les prix : six sources", body: [
        "La figure donne, pour chaque source, ce qu'elle apporte et ce qu'elle demande.",
      ], visual: 'sources', after: [
        "**Le flux.** Un flux de produits est un fichier composé d'une liste de produits et de leurs attributs. C'est la source idéale, et la plus rare. Pour les boutiques qui ont un site sans flux, leurs pages peuvent déjà porter l'information sous une forme lisible par les machines : le vocabulaire schema.org décrit une offre, son prix, et la date après laquelle ce prix n'est plus disponible. **L'espace boutique.** Pour les autres, un écran simple où le marchand met à jour ses prix depuis son téléphone : il le fera s'il y voit, chaque semaine, les clics que vous lui envoyez. Brancher un marchand équipé passe par une interface, décrite dans [le guide pour ouvrir une API](" + L.api + ").",
        "**Le relevé des pages.** L'extraction de données web consiste à extraire automatiquement des données de sites. Sa légalité varie selon les pays, et elle peut être contraire aux conditions d'utilisation de certains sites : demandez l'accord écrit du marchand, respectez les consignes que son site adresse aux robots dans le fichier robots.txt, et voyez votre conseil. Un accord vaut mieux qu'un robot : le marchand qui a dit oui vous prévient quand il change son site. **Planifier.** Flux et relevés repassent à heure fixe, comme toute tâche de fond décrite dans [le guide sur les tâches en arrière-plan](" + L.taches + ").",
      ] },
      { heading: "Lancer un comparateur, en six temps", body: [
        "Le premier temps est accentué : choisir une catégorie et une ville.",
      ], visual: 'lancer', after: [
        "**Étroit d'abord.** Une catégorie où les références sont claires et les écarts de prix réels : l'électroménager, les téléphones, le petit matériel informatique. Une ville, parce que le prix livré dépend du lieu. Dix boutiques, rencontrées une par une. **Le seuil d'ouverture.** Une fiche ne s'affiche qu'avec trois offres fraîches au moins ; une catégorie ne s'ouvre qu'avec dix boutiques et trois cents produits appariés. En dessous, le visiteur voit un annuaire, pas un comparateur.",
        "**Comment il gagne sa vie.** L'affiliation est un arrangement dans lequel l'affilié reçoit une commission pour chaque visite, inscription ou vente qu'il apporte à un marchand ; dans le paiement au clic, l'annonceur paie chaque fois qu'un utilisateur clique. En Algérie, où beaucoup de ventes se concluent par téléphone et se paient à la livraison, la vente est difficile à suivre : le clic, ou l'appel déclenché depuis la fiche, est l'unité qui se compte. **L'ordre.** D'abord gratuit pour les boutiques, le temps de prouver les clics ; puis payant pour la mise en avant, jamais pour le classement par prix : un comparateur qui vend sa première place n'en est plus un.",
      ] },
      { heading: "Un prix a un âge", body: [
        "La figure montre l'âge du dernier prix connu de huit boutiques.",
      ], visual: 'fraicheur', after: [
        "**Dater.** Chaque prix porte l'heure à laquelle il a été vu. Dans l'exemple, les sources automatiques repassent toutes les six heures ; au-delà de quarante-huit heures sans confirmation, le prix n'est plus affiché. Ces seuils se règlent par catégorie : un téléphone change de prix plus vite qu'une cuisinière. **Ce que le visiteur voit.** « Relevé il y a 3 heures », à côté du prix, et la disponibilité quand la boutique la donne. Un visiteur qui s'est déplacé pour un prix périmé ne revient pas.",
        "**L'historique.** Garder chaque prix relevé permet de montrer la courbe sur trois mois : c'est elle qui dit si une « promotion » en est une. **Nettoyer.** Un prix dix fois trop bas est une faute de frappe, pas une affaire : le nettoyage de données consiste à repérer et corriger, ou retirer, les enregistrements inexacts avant qu'ils ne s'affichent. **Mesurer.** Prix périmés, fiches sans assez d'offres, clics par boutique : ces chiffres se lisent chaque matin, comme dans [le guide sur le tableau de bord](" + L.tableau + ").",
      ] },
      { heading: "Douze semaines jusqu'à la première catégorie, en 2027", body: [
        "Douze semaines dans l'exemple, dont les trois premières sans une ligne de code.",
      ], visual: 'calendrier', after: [
        "**Les boutiques d'abord.** Le calendrier commence par des visites : dix boutiques, ce qu'elles vendent, comment elles tiennent leurs prix, ce qu'elles accepteraient de partager. Leurs réponses décident des sources, donc de ce qu'il faut construire. **En parallèle.** La collecte et l'appariement avancent ensemble : chaque nouvelle boutique révèle une nouvelle façon d'écrire une référence. L'écran où l'on valide les appariements douteux est le premier outil livré, avant le site public.",
        "**L'ouverture.** La catégorie s'ouvre quand le seuil est atteint, pas à une date. Puis trois chiffres chaque semaine : visiteurs, clics envoyés par boutique, part de prix périmés. **Ne pas se tromper de projet.** Un distributeur qui veut seulement publier ses propres prix n'a pas besoin d'un comparateur : un [catalogue en ligne](" + L.catalogue + ") suffit, et se construit en bien moins de temps.",
      ], list: [
        "**Ce que le fondateur reçoit** : une catégorie et une ville choisies sur des visites ; les accords écrits de dix boutiques ; plusieurs sources de prix branchées ; un appariement par clés avec son écran de validation ; des fiches et des filtres ; des prix datés avec leurs seuils ; des clics comptés par boutique.",
        "**Ce que le projet ne fait pas** : ouvrir dix catégories à la fois, fusionner deux produits dans le doute, afficher un prix sans date, relever les pages d'un marchand sans son accord, vendre la première place du classement.",
        "**Ce qui est mesuré** : boutiques actives et produits appariés par catégorie, part d'offres appariées automatiquement, part de prix de moins de six heures et de plus de quarante-huit, fiches à moins de trois offres, clics envoyés à chaque boutique.",
        "**Ce que fait Symloop** : le cadrage avec les boutiques, la collecte par flux, espace boutique, relevé avec accord et saisie, l'appariement et son écran de validation, le catalogue et la recherche en français et en arabe, la fraîcheur et l'historique, le comptage des clics, puis la mesure et l'ouverture des catégories suivantes.",
      ], faq: [
        { q: "Comment créer un comparateur de prix en Algérie ?", a: "En commençant étroit : une catégorie, une ville, dix boutiques convaincues une par une. Puis quatre briques : plusieurs sources de prix, un appariement par marque et référence, des fiches avec filtres, et des prix datés masqués quand ils vieillissent. Douze semaines dans l'exemple." },
        { q: "Existe-t-il déjà des comparateurs de prix en Algérie ?", a: "Des sites et des pages de comparaison existent, par catégorie ; cette page ne les recense pas et n'en classe aucun. Avant de vous lancer, comparez dix produits chez eux : fraîcheur des prix, nombre de boutiques, erreurs d'appariement. Leurs faiblesses sont votre cahier des charges." },
        { q: "D'où viennent les prix d'un comparateur ?", a: "De six sources possibles : le flux fourni par la boutique, un espace où le marchand saisit lui-même, le relevé de ses pages avec son accord, la saisie par votre équipe, le signalement des visiteurs et le catalogue du fabricant. En Algérie, on en combine quatre ou cinq." },
        { q: "Comment reconnaître le même produit d'une boutique à l'autre ?", a: "Par le code-barres quand la boutique le fournit ; sinon par la marque et la référence, écrites sans espaces ni tirets, complétées d'une caractéristique comme la capacité. Les cas douteux vont vers un écran où une personne tranche : on ne fusionne jamais dans le doute." },
        { q: "A-t-on le droit de relever les prix sur le site d'une boutique ?", a: "Cela dépend du pays, des conditions d'utilisation du site et de la manière de faire : cette page ne tranche pas, voyez votre conseil. La voie sûre est l'accord écrit du marchand, qui a intérêt à être comparé, et le respect des consignes que son site donne aux robots." },
        { q: "Comment un comparateur de prix gagne-t-il de l'argent ?", a: "En général par l'affiliation ou le paiement au clic : la boutique paie pour les visiteurs qu'elle reçoit. Là où la vente se conclut par téléphone, on compte le clic ou l'appel. La mise en avant peut se vendre ; le classement par prix, jamais." },
        { q: "Par quelle catégorie commencer ?", a: "Par une catégorie où les produits ont une référence claire, où plusieurs boutiques vendent le même, et où l'écart de prix vaut le déplacement : électroménager, téléphones, petit matériel informatique. Les produits sans référence, vêtements ou meubles, se comparent très mal." },
        { q: "Peut-on comparer des billets de bateau ou d'avion ?", a: "Le mécanisme est le même, les sources non : les prix des traversées et des vols viennent des compagnies et de leurs distributeurs, changent d'heure en heure et dépendent de la date. C'est un projet à part, qui commence par des accords avec ces sources." },
        { q: "Faut-il une application mobile ?", a: "Pas au départ. Un site rapide sur téléphone suffit pour chercher et comparer, et il se trouve par les moteurs de recherche. L'application devient utile ensuite, pour les alertes de baisse de prix et pour lire un code-barres en magasin." },
        { q: "Combien de temps pour lancer un comparateur de prix ?", a: "Douze semaines dans l'exemple pour la première catégorie : trois pour choisir et convaincre les boutiques, puis la collecte, l'appariement, le catalogue, la fraîcheur, et l'ouverture quand le seuil de dix boutiques et trois cents produits est atteint." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "On ne compare pas des titres, on compare des clés." },
      { after: 4, text: "Un prix sans date est une promesse que personne ne tient." },
    ],
    cta: { eyebrow: "Dites-nous quelle catégorie, quelle ville et combien de boutiques vous connaissez déjà : nous commençons par leurs réponses, pas par le code", title: "Fondateur en France qui veut lancer en Algérie le comparateur qu'il utilise tous les jours, média ou distributeur qui veut publier des prix fiables : nous cadrons avec les boutiques, puis nous construisons la collecte, l'appariement et la fraîcheur", body: "Une catégorie et une ville, des accords écrits, plusieurs sources de prix, un appariement par clés avec validation, des fiches et des filtres, des prix datés, des clics comptés, puis la mesure. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.marketplace, kind: '2027', name: 'Créer une marketplace : comment l’argent circule, quel modèle tient' },
      { href: L.fiche, kind: '2027', name: 'La fiche produit : variantes, conditionnements, codes-barres' },
      { href: L.recherche, kind: '2027', name: 'La recherche dans une application : arabe, français, darija' },
      { href: L.taches, kind: '2027', name: 'Tâches en arrière-plan : files, reprises, planification' },
    ] },
  },
  en: {
    kind: 'Price comparison · Algeria · 2027', title: "Price comparison site in Algeria (2027): building one when shops have no product feed, where prices come from, how to recognise the same product from one shop to another, up-to-date prices, how it earns its living",
    dek: "“I live in France, I use price comparison sites every day, and I want to launch one in Algeria, for household appliances and phones. But shops have no product feed, the same refrigerator is written ten ways, prices change without warning, and I do not know how a comparison site makes money. How do you build a price comparison site in Algeria?” A comparison site sells nothing: it recognises the same product at several merchants and shows their prices of the day. Almost all the work is there: matching, and freshness.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Price comparison site', 'Product matching', 'Product feed', 'Price freshness', 'Affiliation and pay-per-click', 'Algeria 2027'],
    intro: [
      "**Short answer.** A price comparison site sells nothing: it **recognises the same product** at several merchants and **shows their prices of the day**. In Algeria, where few shops produce a feed, it is built on four decisions: **a single category and a single city** to start with; **several sources of prices**, from the area where the merchant types them in to reading their pages with their agreement; **matching by brand and reference**, checked by hand at first; **dated prices**, hidden when they age. It earns its living from the click sent to the shop. Twelve weeks in the example to open the first category.",
      "This page is for the founder based in France who wants to launch in Algeria a service they use every day, and for the Algerian company, media, distributor or group of traders, that wants to publish a serious comparison. The definitions come from public sources: comparison shopping website, product feed, GTIN identifier, record linkage, web scraping, the robots.txt file, affiliate marketing, pay-per-click, and the schema.org vocabulary for describing an offer. The product, the brand, the prices, the thresholds and the calendar are a constructed example. This page gives no market price; it does not cover tax, or the law applicable to collecting data from a third party's site: see your adviser before any automatic reading. The model of a marketplace, where people buy on the platform, is described in [another guide](" + L.marketplace + ").",
    ],
    sections: [
      { heading: "A price comparison site, in five layers", body: [
        "The accented layer is matching.",
      ], visual: 'couches', after: [
        "**What it is.** A comparison shopping website is a vertical search engine that shoppers use to filter and compare products based on price, features and reviews. Vertical: it focuses on a specific segment, where a general search engine looks everywhere. And it does not sell: these sites do not directly sell products themselves, instead earning money from affiliate marketing agreements. **The models.** Those a founder based in France knows are a quarter of a century old: Kelkoo, a European price comparison service, was founded in France in 1999; idealo was launched in Germany in 2000.",
        "**What changes in Algeria.** Those sites receive their prices from merchants: retailers who want to be listed supply their own lists of products and prices. Here, few shops know how, many sell through social networks, and payment is often made on delivery. The comparison site therefore has to go and get the prices, and accept slow sources. It can be done, provided it starts narrow: one category, one city.",
      ] },
      { heading: "The same product, written three ways", body: [
        "The figure follows three offers of the same product to a single record.",
      ], visual: 'appariement', after: [
        "**The real work.** Recognising that three offers refer to the same product is called record linkage: the task of finding records that refer to the same entity across different data sources. When the merchant supplies the barcode, it is simple: the GTIN is an identifier for trade items developed by the organisation GS1, eight, 12, 13 or 14 digits long, and two offers that carry the same one are the same product. **Without a barcode.** You normalise: the brand from a closed list, the reference with no spaces or hyphens, then a feature that settles it, capacity, memory, colour.",
        "**False twins.** Two references that differ by one letter can be two products: the rule is never to merge when in doubt, and to send the offer to a screen where a person decides in ten seconds. In the example, 40% of offers are matched by barcode, 35% by brand and reference, 25% by hand. **The record.** What comes out of matching is a clean product record, the subject of [the guide to the product record](" + L.fiche + "); what the visitor types to find it belongs to [search](" + L.recherche + ").",
      ] },
      { heading: "Where prices come from: six sources", body: [
        "The figure gives, for each source, what it brings and what it requires.",
      ], visual: 'sources', after: [
        "**The feed.** A product feed is a file made up of a list of products and attributes of those products. It is the ideal source, and the rarest. For shops that have a site with no feed, their pages can already carry the information in a machine-readable form: the schema.org vocabulary describes an offer, its price, and the date after which the price is no longer available. **The shop area.** For the others, a simple screen where the merchant updates prices from a phone: they will do it if they see there, every week, the clicks you send them. Connecting an equipped merchant goes through an interface, described in [the guide to opening an API](" + L.api + ").",
        "**Reading the pages.** Web scraping is data scraping used for extracting data from websites. Its legality varies across the world, and it may be against the terms of service of some websites: ask for the merchant's written agreement, respect the instructions its site gives to robots in the robots.txt file, and see your adviser. An agreement is worth more than a robot: the merchant who said yes warns you when the site changes. **Scheduling.** Feeds and readings run at fixed times, like any background job described in [the guide to background tasks](" + L.taches + ").",
      ] },
      { heading: "Launching a comparison site, in six steps", body: [
        "The first step is accented: choose a category and a city.",
      ], visual: 'lancer', after: [
        "**Narrow first.** A category where references are clear and price gaps are real: household appliances, phones, small computer equipment. One city, because the delivered price depends on the place. Ten shops, met one by one. **The opening threshold.** A record is shown only with at least three fresh offers; a category opens only with ten shops and three hundred matched products. Below that, the visitor sees a directory, not a comparison.",
        "**How it earns its living.** Affiliate marketing is an arrangement in which affiliates receive a commission for each visit, signup or sale they generate for a merchant; in pay-per-click, advertisers pay each time a user clicks. In Algeria, where many sales are concluded by phone and paid on delivery, the sale is hard to follow: the click, or the call triggered from the record, is the unit that gets counted. **The order.** Free for shops at first, long enough to prove the clicks; then paid for prominence, never for the ranking by price: a comparison site that sells its first place is no longer one.",
      ] },
      { heading: "A price has an age", body: [
        "The figure shows the age of the last known price of eight shops.",
      ], visual: 'fraicheur', after: [
        "**Dating.** Each price carries the time at which it was seen. In the example, automatic sources run every six hours; beyond forty-eight hours without confirmation, the price is no longer shown. These thresholds are set per category: a phone changes price faster than a cooker. **What the visitor sees.** “Read 3 hours ago”, next to the price, and availability when the shop gives it. A visitor who travelled for a stale price does not come back.",
        "**History.** Keeping every price read makes it possible to show the curve over three months: it is the curve that says whether a “promotion” is one. **Cleaning.** A price ten times too low is a typing error, not a bargain: data cleansing is the process of identifying and correcting, or removing, inaccurate records before they are shown. **Measuring.** Stale prices, records with too few offers, clicks per shop: these figures are read every morning, as in [the guide to the dashboard](" + L.tableau + ").",
      ] },
      { heading: "Twelve weeks to the first category, in 2027", body: [
        "Twelve weeks in the example, the first three without a line of code.",
      ], visual: 'calendrier', after: [
        "**Shops first.** The calendar starts with visits: ten shops, what they sell, how they keep their prices, what they would agree to share. Their answers decide the sources, and so what has to be built. **In parallel.** Collection and matching move forward together: each new shop reveals a new way of writing a reference. The screen where doubtful matches are validated is the first tool delivered, before the public site.",
        "**The opening.** The category opens when the threshold is reached, not on a date. Then three figures every week: visitors, clicks sent per shop, share of stale prices. **Do not pick the wrong project.** A distributor who only wants to publish its own prices does not need a comparison site: an [online catalogue](" + L.catalogue + ") is enough, and is built in far less time.",
      ], list: [
        "**What the founder receives**: a category and a city chosen from visits; the written agreements of ten shops; several sources of prices connected; matching by keys with its validation screen; records and filters; dated prices with their thresholds; clicks counted per shop.",
        "**What the project does not do**: open ten categories at once, merge two products when in doubt, show a price with no date, read a merchant's pages without their agreement, sell the first place in the ranking.",
        "**What is measured**: active shops and matched products per category, share of offers matched automatically, share of prices under six hours old and over forty-eight, records with fewer than three offers, clicks sent to each shop.",
        "**What Symloop does**: framing with the shops, collection by feed, shop area, reading with agreement and typing, matching and its validation screen, the catalogue and search in French and Arabic, freshness and history, counting clicks, then measuring and opening the next categories.",
      ], faq: [
        { q: "How do you build a price comparison site in Algeria?", a: "By starting narrow: one category, one city, ten shops convinced one by one. Then four building blocks: several sources of prices, matching by brand and reference, records with filters, and dated prices hidden when they age. Twelve weeks in the example." },
        { q: "Are there already price comparison sites in Algeria?", a: "Comparison sites and pages exist, by category; this page does not list them and ranks none. Before you start, compare ten products on them: freshness of prices, number of shops, matching errors. Their weaknesses are your specification." },
        { q: "Where do a comparison site's prices come from?", a: "From six possible sources: the feed supplied by the shop, an area where the merchant types them in, reading its pages with its agreement, typing by your team, reports from visitors and the manufacturer's catalogue. In Algeria, four or five are combined." },
        { q: "How do you recognise the same product from one shop to another?", a: "By the barcode when the shop supplies it; otherwise by the brand and the reference, written with no spaces or hyphens, completed by a feature such as capacity. Doubtful cases go to a screen where a person decides: never merge when in doubt." },
        { q: "Is it allowed to read prices from a shop's website?", a: "It depends on the country, the site's terms of use and the way it is done: this page does not settle it, see your adviser. The safe way is the written agreement of the merchant, who has an interest in being compared, and respect for the instructions its site gives to robots." },
        { q: "How does a price comparison site make money?", a: "Usually through affiliate marketing or pay-per-click: the shop pays for the visitors it receives. Where the sale is concluded by phone, the click or the call is counted. Prominence can be sold; the ranking by price, never." },
        { q: "Which category should we start with?", a: "A category where products have a clear reference, where several shops sell the same one, and where the price gap is worth the trip: household appliances, phones, small computer equipment. Products with no reference, clothes or furniture, compare very badly." },
        { q: "Can boat or plane tickets be compared?", a: "The mechanism is the same, the sources are not: prices of crossings and flights come from the companies and their distributors, change by the hour and depend on the date. It is a project of its own, which starts with agreements with those sources." },
        { q: "Is a mobile application needed?", a: "Not at the start. A site that is fast on a phone is enough to search and compare, and it is found through search engines. The application becomes useful later, for price-drop alerts and for reading a barcode in a shop." },
        { q: "How long does it take to launch a price comparison site?", a: "Twelve weeks in the example for the first category: three to choose and convince the shops, then collection, matching, the catalogue, freshness, and the opening when the threshold of ten shops and three hundred products is reached." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "You do not compare titles, you compare keys." },
      { after: 4, text: "A price with no date is a promise nobody keeps." },
    ],
    cta: { eyebrow: "Tell us which category, which city and how many shops you already know: we start with their answers, not with code", title: "A founder in France who wants to launch in Algeria the comparison site they use every day, a media outlet or distributor that wants to publish reliable prices: we frame it with the shops, then we build collection, matching and freshness", body: "One category and one city, written agreements, several sources of prices, matching by keys with validation, records and filters, dated prices, clicks counted, then measurement. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.marketplace, kind: '2027', name: 'Building a marketplace: how the money flows, which model holds' },
      { href: L.fiche, kind: '2027', name: 'The product record: variants, packaging, barcodes' },
      { href: L.recherche, kind: '2027', name: 'Search in an application: Arabic, French, Darija' },
      { href: L.taches, kind: '2027', name: 'Background tasks: queues, retries, scheduling' },
    ] },
  },
  ar: {
    kind: 'مقارنة الأسعار · الجزائر · 2027', title: "موقع مقارنة الأسعار في الجزائر (2027): إنشاؤه حين لا تملك المتاجر تدفق منتجات، من أين تأتي الأسعار، كيف يُعرف المنتج نفسه من متجر إلى آخر، أسعار محدَّثة، وكيف يكسب عيشه",
    dek: "«أعيش في فرنسا، أستعمل مواقع مقارنة الأسعار كل يوم، وأريد إطلاق واحد في الجزائر، للأجهزة الكهرومنزلية والهواتف. لكن المتاجر لا تملك تدفق منتجات، الثلاجة نفسها تُكتب بعشر طرق، الأسعار تتغير دون إنذار، ولا أعرف كيف يربح موقع مقارنة. كيف يُنشأ موقع لمقارنة الأسعار في الجزائر؟» موقع المقارنة لا يبيع شيئاً: يعرف المنتج نفسه عند عدة تجار ويعرض أسعارهم لليوم. وكل العمل تقريباً هناك: المطابقة، والطزاجة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['موقع مقارنة الأسعار', 'مطابقة المنتجات', 'تدفق المنتجات', 'طزاجة الأسعار', 'العمولة والدفع بالنقرة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** موقع مقارنة الأسعار لا يبيع شيئاً: **يعرف المنتج نفسه** عند عدة تجار و**يعرض أسعارهم لليوم**. وفي الجزائر، حيث قليل من المتاجر ينتج تدفقاً، يُبنى على أربعة قرارات: **فئة واحدة ومدينة واحدة** للبداية؛ **عدة مصادر للأسعار**، من الفضاء الذي يُدخِل فيه التاجر بنفسه إلى قراءة صفحاته بموافقته؛ **مطابقة بالعلامة والمرجع**، تُراجَع باليد في البداية؛ و**أسعار مؤرَّخة**، تُخفى حين تشيخ. ويكسب عيشه من النقرة المرسَلة نحو المتجر. اثنا عشر أسبوعاً في المثال لفتح الفئة الأولى.",
      "هذه الصفحة موجَّهة إلى المؤسس المقيم في فرنسا الذي يريد أن يطلق في الجزائر خدمة يستعملها كل يوم، وإلى المؤسسة الجزائرية، وسيلة إعلام أو موزّع أو تجمّع تجار، التي تريد نشر مقارنة جادة. التعريفات آتية من مصادر علنية: موقع مقارنة الأسعار، تدفق المنتجات، معرّف " + I('GTIN') + "، ربط السجلات، الاستخراج الآلي لبيانات الويب، ملف " + I('robots.txt') + "، التسويق بالعمولة، الدفع بالنقرة، ومفردات " + I('schema.org') + " لوصف عرض. المنتج والعلامة والأسعار والعتبات والرزنامة مثال مركَّب. هذه الصفحة لا تعطي أي سعر من السوق؛ ولا تتناول الجباية، ولا القانون المطبَّق على جمع البيانات من موقع الغير: راجعوا مستشاركم قبل أي قراءة آلية. ونموذج سوق إلكترونية، حيث يُشترى على المنصة، موصوف في [دليل آخر](" + L.marketplace + ").",
    ],
    sections: [
      { heading: "موقع مقارنة الأسعار، في خمس طبقات", body: [
        "الطبقة المبرزة هي المطابقة.",
      ], visual: 'couches', after: [
        "**ما هو.** موقع مقارنة الأسعار محرّك بحث عمودي يستعمله المشترون لترشيح المنتجات ومقارنتها حسب السعر والخصائص والآراء. عمودي: يركّز على قطاع محدَّد، حيث يبحث المحرّك العام في كل مكان. ولا يبيع بنفسه: هذه المواقع تكسب مالها من اتفاقات عمولة مع التجار. **النماذج.** التي يعرفها مؤسس مقيم في فرنسا عمرها ربع قرن: " + I('Kelkoo') + "، خدمة أوروبية لمقارنة الأسعار، تأسست في فرنسا سنة 1999؛ و" + I('idealo') + " أُطلقت في ألمانيا سنة 2000.",
        "**ما يتغير في الجزائر.** هذه المواقع تستلم أسعارها من التجار: الباعة الذين يريدون الظهور فيها يقدّمون قائمة منتجاتهم وأسعارهم. وهنا، قليل من المتاجر يعرف ذلك، كثير منها يبيع عبر الشبكات الاجتماعية، والدفع يتم غالباً عند التسليم. فعلى موقع المقارنة إذن أن يذهب للبحث عن الأسعار، وأن يقبل مصادر بطيئة. وهذا ممكن، بشرط البدء ضيّقاً: فئة واحدة، ومدينة واحدة.",
      ] },
      { heading: "المنتج نفسه، بثلاث كتابات", body: [
        "الشكل يتبع ثلاثة عروض للمنتج نفسه حتى بطاقة واحدة.",
      ], visual: 'appariement', after: [
        "**العمل الحقيقي.** معرفة أن ثلاثة عروض تعني المنتج نفسه تسمّى ربط السجلات: إيجاد السجلات التي تخص الكيان نفسه في مصادر بيانات مختلفة. وحين يقدّم التاجر الرمز الشريطي، فالأمر بسيط: " + I('GTIN') + " معرّف للمواد التجارية طوّرته منظمة " + I('GS1') + "، طوله 8 أو 12 أو 13 أو 14 رقماً، وعرضان يحملان الرقم نفسه هما المنتج نفسه. **دون رمز شريطي.** يُوحَّد: العلامة من قائمة مغلقة، المرجع دون فراغات ولا شرطات، ثم خاصية تحسم، السعة أو الذاكرة أو اللون.",
        "**التوائم الكاذبة.** مرجعان لا يختلفان إلا بحرف قد يكونان منتجين: والقاعدة ألّا يُدمَج أبداً عند الشك، وأن يُرسَل العرض إلى شاشة يحسم فيها شخص في عشر ثوانٍ. في المثال، " + I('40%') + " من العروض تُطابَق بالرمز الشريطي، " + I('35%') + " بالعلامة والمرجع، و" + I('25%') + " باليد. **البطاقة.** وما يخرج من المطابقة بطاقة منتج نظيفة، موضوع [دليل بطاقة المنتج](" + L.fiche + ")؛ وما يكتبه الزائر لإيجادها يدخل في [البحث](" + L.recherche + ").",
      ] },
      { heading: "من أين تأتي الأسعار: ستة مصادر", body: [
        "الشكل يعطي، لكل مصدر، ما يقدّمه وما يتطلبه.",
      ], visual: 'sources', after: [
        "**التدفق.** تدفق المنتجات ملف مكوَّن من قائمة منتجات وخصائصها. وهو المصدر المثالي، والأندر. وللمتاجر التي لها موقع دون تدفق، صفحاتها قد تحمل المعلومة أصلاً في شكل تقرؤه الآلات: مفردات " + I('schema.org') + " تصف عرضاً، سعره، والتاريخ الذي لم يعد السعر متاحاً بعده. **فضاء المتجر.** وللباقي، شاشة بسيطة يحدّث فيها التاجر أسعاره من هاتفه: وسيفعل إذا رأى فيها، كل أسبوع، النقرات التي ترسلونها إليه. وربط تاجر مجهَّز يمر عبر واجهة، موصوفة في [دليل فتح واجهة برمجة](" + L.api + ").",
        "**قراءة الصفحات.** الاستخراج الآلي لبيانات الويب يعني استخراج البيانات من المواقع آلياً. ومشروعيته تختلف حسب البلدان، وقد يخالف شروط استعمال بعض المواقع: اطلبوا الموافقة المكتوبة للتاجر، احترموا التعليمات التي يوجّهها موقعه للروبوتات في ملف " + I('robots.txt') + "، وراجعوا مستشاركم. والاتفاق خير من روبوت: التاجر الذي قال نعم ينبّهكم حين يغيّر موقعه. **البرمجة الزمنية.** التدفقات والقراءات تُعاد في ساعات ثابتة، مثل كل مهمة خلفية موصوفة في [دليل المهام الخلفية](" + L.taches + ").",
      ] },
      { heading: "إطلاق موقع مقارنة، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: اختيار فئة ومدينة.",
      ], visual: 'lancer', after: [
        "**ضيّقاً أولاً.** فئة مراجعها واضحة وفوارق أسعارها حقيقية: الأجهزة الكهرومنزلية، الهواتف، والعتاد المعلوماتي الصغير. مدينة واحدة، لأن السعر عند التسليم يتوقف على المكان. وعشرة متاجر، تُزار واحداً واحداً. **عتبة الافتتاح.** البطاقة لا تُعرض إلا بثلاثة عروض طازجة على الأقل؛ والفئة لا تُفتح إلا بعشرة متاجر وثلاثمئة منتج مطابَق. وتحت ذلك، يرى الزائر دليلاً، لا مقارنة.",
        "**كيف يكسب عيشه.** التسويق بالعمولة ترتيب يتلقى فيه الشريك عمولة عن كل زيارة أو تسجيل أو بيع يجلبه لتاجر؛ وفي الدفع بالنقرة، يدفع المعلِن كلما نقر مستعمل. وفي الجزائر، حيث تُختَم مبيعات كثيرة بالهاتف وتُدفع عند التسليم، يصعب تتبّع البيع: والنقرة، أو الاتصال المنطلق من البطاقة، هي الوحدة التي تُعدّ. **الترتيب.** مجاناً للمتاجر أولاً، مدة تكفي لإثبات النقرات؛ ثم بمقابل للإبراز، ولا أبداً للترتيب حسب السعر: موقع المقارنة الذي يبيع مرتبته الأولى لم يعد موقع مقارنة.",
      ] },
      { heading: "للسعر عمر", body: [
        "الشكل يُظهر عمر آخر سعر معروف لثمانية متاجر.",
      ], visual: 'fraicheur', after: [
        "**التأريخ.** كل سعر يحمل الساعة التي شوهد فيها. في المثال، المصادر الآلية تُعاد كل ست ساعات؛ وبعد ثمانٍ وأربعين ساعة دون تأكيد، لم يعد السعر يُعرض. وهذه العتبات تُضبط حسب الفئة: الهاتف يتغير سعره أسرع من الطبّاخة. **ما يراه الزائر.** «قُرئ منذ 3 ساعات»، بجانب السعر، والتوفر حين يعطيه المتجر. والزائر الذي تنقّل من أجل سعر قديم لا يرجع.",
        "**السجل.** حفظ كل سعر مقروء يسمح بعرض المنحنى على ثلاثة أشهر: وهو الذي يقول هل «التخفيض» تخفيض فعلاً. **التنظيف.** السعر الأدنى بعشر مرات خطأ كتابة، لا صفقة: تنظيف البيانات يعني كشف السجلات غير الصحيحة وتصحيحها، أو حذفها، قبل أن تُعرض. **القياس.** الأسعار القديمة، البطاقات التي تنقصها العروض، والنقرات لكل متجر: هذه الأرقام تُقرأ كل صباح، كما في [دليل لوحة القيادة](" + L.tableau + ").",
      ] },
      { heading: "اثنا عشر أسبوعاً حتى الفئة الأولى، سنة 2027", body: [
        "اثنا عشر أسبوعاً في المثال، والثلاثة الأولى دون سطر شيفرة واحد.",
      ], visual: 'calendrier', after: [
        "**المتاجر أولاً.** الرزنامة تبدأ بزيارات: عشرة متاجر، ماذا تبيع، كيف تمسك أسعارها، وماذا تقبل أن تتقاسمه. وأجوبتها تحسم المصادر، وإذن ما يجب بناؤه. **بالتوازي.** الجمع والمطابقة يتقدمان معاً: كل متجر جديد يكشف طريقة جديدة في كتابة مرجع. والشاشة التي تُصادَق فيها المطابقات المشكوك فيها هي أول أداة تُسلَّم، قبل الموقع العمومي.",
        "**الافتتاح.** الفئة تُفتح حين تُبلَغ العتبة، لا في تاريخ. ثم ثلاثة أرقام كل أسبوع: الزوار، النقرات المرسَلة لكل متجر، وحصة الأسعار القديمة. **عدم الخطأ في المشروع.** الموزّع الذي يريد فقط نشر أسعاره هو لا يحتاج موقع مقارنة: [فهرس عبر الإنترنت](" + L.catalogue + ") يكفيه، ويُبنى في وقت أقل بكثير.",
      ], list: [
        "**ما يستلمه المؤسس**: فئة ومدينة مختارتان بعد زيارات؛ الاتفاقات المكتوبة لعشرة متاجر؛ عدة مصادر للأسعار مربوطة؛ مطابقة بالمفاتيح مع شاشة مصادقتها؛ بطاقات ومرشِّحات؛ أسعار مؤرَّخة بعتباتها؛ ونقرات معدودة لكل متجر.",
        "**ما لا يفعله المشروع**: فتح عشر فئات دفعة واحدة، دمج منتجين عند الشك، عرض سعر دون تاريخ، قراءة صفحات تاجر دون موافقته، وبيع المرتبة الأولى في الترتيب.",
        "**ما يُقاس**: المتاجر النشِطة والمنتجات المطابَقة لكل فئة، حصة العروض المطابَقة آلياً، حصة الأسعار الأقل من ست ساعات والأكثر من ثمانٍ وأربعين، البطاقات بأقل من ثلاثة عروض، والنقرات المرسَلة لكل متجر.",
        "**ما تفعله Symloop**: التأطير مع المتاجر، الجمع بالتدفق وفضاء المتجر والقراءة بموافقة والإدخال، المطابقة وشاشة مصادقتها، الفهرس والبحث بالفرنسية والعربية، الطزاجة والسجل، عدّ النقرات، ثم القياس وفتح الفئات الموالية.",
      ], faq: [
        { q: "كيف يُنشأ موقع لمقارنة الأسعار في الجزائر؟", a: "بالبدء ضيّقاً: فئة واحدة، مدينة واحدة، وعشرة متاجر تُقنَع واحداً واحداً. ثم أربع لبنات: عدة مصادر للأسعار، مطابقة بالعلامة والمرجع، بطاقات بمرشِّحات، وأسعار مؤرَّخة تُخفى حين تشيخ. اثنا عشر أسبوعاً في المثال." },
        { q: "هل توجد مواقع مقارنة أسعار في الجزائر؟", a: "توجد مواقع وصفحات مقارنة، حسب الفئة؛ وهذه الصفحة لا تحصيها ولا ترتّب أياً منها. وقبل الانطلاق، قارنوا عشرة منتجات عندها: طزاجة الأسعار، عدد المتاجر، وأخطاء المطابقة. ونقاط ضعفها هي دفتر شروطكم." },
        { q: "من أين تأتي أسعار موقع المقارنة؟", a: "من ستة مصادر ممكنة: التدفق الذي يقدّمه المتجر، فضاء يُدخِل فيه التاجر بنفسه، قراءة صفحاته بموافقته، إدخال فريقكم، تبليغ الزوار، وفهرس المصنِّع. وفي الجزائر، يُجمع بين أربعة أو خمسة." },
        { q: "كيف يُعرف المنتج نفسه من متجر إلى آخر؟", a: "بالرمز الشريطي حين يقدّمه المتجر؛ وإلا بالعلامة والمرجع، مكتوبين دون فراغات ولا شرطات، مع خاصية مثل السعة. والحالات المشكوك فيها تذهب إلى شاشة يحسم فيها شخص: لا يُدمَج أبداً عند الشك." },
        { q: "هل يحق قراءة الأسعار من موقع متجر؟", a: "يتوقف على البلد، على شروط استعمال الموقع، وعلى الطريقة: هذه الصفحة لا تحسم، راجعوا مستشاركم. والطريق الآمن هو الموافقة المكتوبة للتاجر، الذي له مصلحة في أن يُقارَن، واحترام التعليمات التي يعطيها موقعه للروبوتات." },
        { q: "كيف يربح موقع مقارنة الأسعار؟", a: "عادةً بالتسويق بالعمولة أو الدفع بالنقرة: المتجر يدفع عن الزوار الذين يستقبلهم. وحيث يُختَم البيع بالهاتف، تُعدّ النقرة أو الاتصال. والإبراز يمكن بيعه؛ والترتيب حسب السعر، أبداً." },
        { q: "بأي فئة نبدأ؟", a: "بفئة لمنتجاتها مرجع واضح، تبيع عدة متاجر المنتج نفسه منها، وفارق السعر فيها يستحق التنقل: الأجهزة الكهرومنزلية، الهواتف، والعتاد المعلوماتي الصغير. والمنتجات دون مرجع، الملابس أو الأثاث، تُقارَن بصعوبة كبيرة." },
        { q: "هل يمكن مقارنة تذاكر الباخرة أو الطائرة؟", a: "الآلية نفسها، والمصادر لا: أسعار الرحلات البحرية والجوية تأتي من الشركات وموزّعيها، تتغير من ساعة إلى أخرى، وتتوقف على التاريخ. وهو مشروع قائم بذاته، يبدأ باتفاقات مع هذه المصادر." },
        { q: "هل يلزم تطبيق هاتف؟", a: "ليس في البداية. موقع سريع على الهاتف يكفي للبحث والمقارنة، ويُوجد عبر محركات البحث. والتطبيق يصير نافعاً بعدها، لتنبيهات انخفاض السعر ولقراءة رمز شريطي في المتجر." },
        { q: "كم يلزم من وقت لإطلاق موقع مقارنة أسعار؟", a: "اثنا عشر أسبوعاً في المثال للفئة الأولى: ثلاثة لاختيار المتاجر وإقناعها، ثم الجمع، المطابقة، الفهرس، الطزاجة، والافتتاح حين تُبلَغ عتبة عشرة متاجر وثلاثمئة منتج." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "لا تُقارَن العناوين، بل تُقارَن المفاتيح." },
      { after: 4, text: "السعر دون تاريخ وعد لا يفي به أحد." },
    ],
    cta: { eyebrow: "قولوا لنا أي فئة، أي مدينة، وكم متجراً تعرفون أصلاً: نبدأ بأجوبتهم، لا بالشيفرة", title: "مؤسس في فرنسا يريد أن يطلق في الجزائر موقع المقارنة الذي يستعمله كل يوم، وسيلة إعلام أو موزّع يريد نشر أسعار موثوقة: نؤطّر مع المتاجر، ثم نبني الجمع والمطابقة والطزاجة", body: "فئة ومدينة، اتفاقات مكتوبة، عدة مصادر للأسعار، مطابقة بالمفاتيح مع مصادقة، بطاقات ومرشِّحات، أسعار مؤرَّخة، نقرات معدودة، ثم القياس. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.marketplace, kind: '2027', name: 'إنشاء سوق إلكترونية: كيف يدور المال، وأي نموذج يصمد' },
      { href: L.fiche, kind: '2027', name: 'بطاقة المنتج: الأنواع، التعبئات، والرموز الشريطية' },
      { href: L.recherche, kind: '2027', name: 'البحث داخل تطبيق: العربية، الفرنسية، والدارجة' },
      { href: L.taches, kind: '2027', name: 'المهام الخلفية: الطوابير، إعادة المحاولة، والبرمجة الزمنية' },
    ] },
  },
};

const KEYWORDS = "comparateur de prix algérie 2027, comparateur de prix algérie, créer un comparateur de prix, comparateur de prix électroménager algérie, comparateur de prix téléphone algérie, site comparateur de prix, comment fonctionne un comparateur de prix, price comparison site algeria 2027, build a price comparison website, مقارنة الأسعار في الجزائر 2027, موقع مقارنة الأسعار, إنشاء موقع لمقارنة الأسعار";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
