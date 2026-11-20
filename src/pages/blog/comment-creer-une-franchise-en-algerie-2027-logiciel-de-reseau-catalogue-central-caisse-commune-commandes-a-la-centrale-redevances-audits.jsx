import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-une-franchise-en-algerie-2027-logiciel-de-reseau-catalogue-central-caisse-commune-commandes-a-la-centrale-redevances-audits.mjs';

const SLUG = 'comment-creer-une-franchise-en-algerie-2027-logiciel-de-reseau-catalogue-central-caisse-commune-commandes-a-la-centrale-redevances-audits';
const FIGURES = ['couches', 'etapes', 'redevance', 'couloir', 'calendrier', 'roles'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  caisse: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  fidelite: '/blog/programme-de-fidelite-algerie-2027-cafe-fast-food-chaine-application-points-caisse-relance/',
  rentable: '/blog/comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  ventes: '/blog/comment-analyser-les-ventes-d-une-entreprise-algerie-2027-quels-produits-font-la-marge-quels-clients-partent-comparer-le-bon-mois-ramadan/',
};

const CONTENT = {
  fr: {
    kind: 'Franchise · Algérie · 2027', title: "Comment créer une franchise en Algérie (2027) : on veut ouvrir sous votre enseigne, et rien ne garantit qu'on y vendra la même chose au même prix ; logiciel de réseau, catalogue central, caisse commune, redevances, audits, et ce qu'on met en place",
    dek: "« J'ai trois fast-foods qui marchent bien. On me demande d'ouvrir sous mon enseigne à Oran, à Sétif, à Constantine. Comment créer une franchise ? Je ne sais pas comment m'assurer qu'ils vendront la même chose au même prix, comment calculer ce qu'ils me doivent chaque mois, ni comment savoir ce qui se passe chez eux sans y aller. » Une franchise, c'est un concept qui se transmet : tant que les recettes, les prix et les chiffres vivent dans votre tête et dans vos trois caisses, il n'y a rien à transmettre.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Créer une franchise', 'Logiciel de réseau', 'Catalogue central et caisse commune', 'Calcul des redevances', 'Audits et comparaison des points', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Avant le premier franchisé, un réseau construit quatre choses. **Un catalogue central** : articles, recettes et prix, poussés à tous les points le même jour. **Une caisse commune** : le même logiciel partout, chaque ticket remonté. **Des commandes à la centrale** : les mêmes produits dans chaque point. **Des redevances calculées** sur les ventes de la caisse, et non sur une déclaration, avec une grille d'audit et un tableau qui compare les points. Dans l'exemple de cette page, un point franchisé déclare 52 600 000 dinars sur l'année quand la caisse en enregistre 56 550 000.",
      "Cette page s'adresse à celles et ceux qui ont un concept qui marche, restauration rapide, café, boulangerie, boutique, salle de sport, et à qui l'on propose d'ouvrir sous leur enseigne, en Algérie ou depuis la France. Les définitions viennent de sources publiques : franchise, redevance, chaîne de magasins, procédure opératoire, ventes à périmètre constant, client mystère, point de vente. Le réseau de huit points, ses ventes, ses taux et ses couloirs sont un exemple construit, avec des chiffres fictifs. La page ne traite ni du contrat de franchise et de la protection de la marque, ni de la fiscalité, ni des transferts vers l'étranger, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans la plateforme d'un réseau", body: [
        "La figure empile cinq couches ; la première fait l'enseigne.",
      ], visual: 'couches', after: [
        "**La franchise.** C'est une pratique par laquelle une entreprise concède son modèle d'affaires à une autre : son savoir-faire, ses procédures, sa marque. En retour, la personne franchisée paie des droits et s'engage à respecter des obligations. Une chaîne, elle, est un ensemble de points qui partagent une marque, une direction centrale et des pratiques normalisées. Dans les deux cas, le client doit retrouver la même chose partout. **Le catalogue central.** C'est la couche accentuée : un article, une recette, un prix, décidés une fois et appliqués partout. Un point ne modifie que ce que le réseau lui permet, voir [les rôles et les droits](" + L.roles + ").",
        "**La caisse commune.** Le même logiciel de caisse dans chaque point, qui fonctionne sans connexion et remonte chaque ticket, voir [l'application hors ligne](" + L.horsligne + ") et [les sessions de caisse](" + L.caisse + "). **La centrale.** Chaque point commande à la centrale ou aux fournisseurs référencés ; les quantités suivent les ventes, voir [le réapprovisionnement](" + L.reappro + "). **Les procédures.** Une procédure opératoire est une façon normalisée d'accomplir une tâche, pas à pas ; elles vivent dans la plateforme, avec les recettes et les fiches de poste. **La fidélité.** Une seule carte pour tout le réseau, voir [le programme de fidélité](" + L.fidelite + ").",
      ] },
      { heading: "Franchiser un concept, en six temps", body: [
        "La figure donne six temps ; l'outil vient avant le premier franchisé.",
      ], visual: 'etapes', after: [
        "**Le concept prouvé.** Un point rentable, dont vous connaissez les chiffres : ventes par jour, ticket moyen, coût matière, voir [savoir si l'entreprise est rentable](" + L.rentable + "). **Le concept écrit.** Ce qui est dans votre tête devient un catalogue, des recettes pesées, des procédures et une grille d'audit. Les réseaux accompagnent l'installation avec des manuels opératoires, et la normalisation exigée est forte. **L'outil commun.** C'est le temps accentué : il s'installe d'abord dans vos propres points.",
        "**Le point pilote.** Un premier franchisé, suivi de près, sert à corriger le manuel et l'outil avant les suivants. **L'ouverture.** Formation de l'équipe, stock initial, liste à cocher du premier jour. **Le suivi.** Redevances, audits, comparaison : ce sont les deux figures suivantes. **Ce qui reste local.** Les horaires, le planning, parfois quelques articles ou un prix par zone : le réseau décide de ce qui est libre, et l'outil l'applique.",
      ] },
      { heading: "La redevance, calculée sur la caisse", body: [
        "La figure montre douze mois d'un point franchisé.",
      ], visual: 'redevance', after: [
        "**La redevance.** C'est un paiement versé à la partie qui possède un actif, pour le droit de continuer à l'utiliser ; elle est le plus souvent convenue comme un pourcentage du chiffre d'affaires. Dans une franchise, les paiements cités sont une redevance pour la marque, le remboursement de la formation, et un pourcentage des ventes de chaque point. **Dans l'exemple.** Redevance de 5 % des ventes et fonds de communication de 1 %, des taux fictifs. Sur douze mois, la caisse commune enregistre 56 550 000 dinars ; le franchisé en a déclaré 52 600 000. Écart : 3 950 000 dinars, soit 7,0 %.",
        "**Ce que cela représente.** À 5 %, 2 827 500 dinars de redevance sur la caisse contre 2 630 000 sur la déclaration ; avec le fonds de communication, 237 000 dinars d'écart pour un seul point. **D'où vient l'écart.** Rarement d'une intention : des ventes en livraison oubliées, des tickets annulés, des jours manquants, des arrondis. **Ce que change la caisse commune.** Personne ne déclare rien : le premier du mois, la facture de redevance se calcule sur les tickets, point par point, et part seule. Le suivi des règlements est celui du [crédit client](" + L.credit + "). **Ce que voit la personne franchisée.** Le même chiffre que vous, ticket par ticket : la confiance vient de là.",
      ] },
      { heading: "Comparer les points, sans y aller", body: [
        "La figure place huit points de vente sur quatre chiffres.",
      ], visual: 'couloir', after: [
        "**Les quatre chiffres.** Ventes par jour, ticket moyen, coût matière, c'est-à-dire la part des ventes qui part en ingrédients, et score d'audit. Parce que la caisse et le catalogue sont les mêmes, ils se calculent de la même façon partout. **Le couloir.** Pour chaque chiffre, le réseau fixe une plage acceptable. Dans l'exemple, 28 valeurs sur 32 y sont ; quatre en sortent : Constantine vend 96 000 dinars par jour quand le couloir commence à 130 000, Annaba a un ticket moyen de 640 dinars, Sétif un coût matière de 38 %, Tlemcen un score d'audit de 71 %.",
        "**Ce que dit un écart.** Pas la cause : un coût matière élevé peut venir des portions, du gaspillage ou d'un fournisseur hors liste. Il dit où aller cette semaine. **L'audit.** Une grille de points à vérifier, avec des photos prises sur place, voir [les photos qui font foi](" + L.photos + ") ; certains réseaux y ajoutent le client mystère, une personne qui se présente comme cliente pour observer la qualité du service. **Dans le temps.** Les ventes à périmètre constant comparent le chiffre des points existants d'une période à l'autre : c'est ce qui dit si le réseau progresse, ou s'il ne fait qu'ouvrir. **L'analyse.** Par produit, par heure et par point, voir [l'analyse des ventes](" + L.ventes + ").",
      ] },
      { heading: "Dix semaines avant le premier franchisé", body: [
        "Dix semaines dans l'exemple, en commençant par vos propres points.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : ce qui est commun à tous les points, ce qui reste local, et les chiffres que vous voulez suivre. **Le catalogue.** Vos articles, vos recettes pesées, vos prix, saisis une fois. **La caisse commune.** Elle remplace d'abord la caisse de vos propres points : c'est là que l'outil se rode, avec vos équipes.",
        "**La centrale.** Même si elle se réduit au début à un dépôt et une camionnette, les commandes des points passent par l'outil. **Les redevances.** Le calcul tourne à blanc sur vos propres points avant de facturer qui que ce soit. **Ce que la plateforme ne fait pas.** Elle ne rédige pas le contrat, ne protège pas la marque et ne choisit pas les franchisés : elle rend le concept transmissible et vérifiable. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Qui voit quoi dans le réseau", body: [
        "La figure donne cinq rôles, ce que chacun voit et ce que chacun modifie.",
      ], visual: 'roles', after: [
        "**La direction du réseau.** Elle voit tout et tient le catalogue, les prix, les couloirs. **L'animation du réseau.** Elle suit un groupe de points, leurs chiffres et leurs audits, et tient les plans d'action. **La personne franchisée.** Elle voit ses points, ses ventes et ses factures de redevance, jamais celles des autres.",
        "**La gérance d'un point.** La caisse, le stock, le planning, les commandes du jour. **La centrale.** Les commandes de tous les points et son propre stock. **De trois à trente points.** L'outil est le même ; ce qui change, c'est le nombre de personnes qui animent le réseau, et le découpage par région. **Prêt à l'emploi ou sur mesure.** Un logiciel de caisse multi-magasins du marché convient à une chaîne simple de points propres. Le sur-mesure se justifie quand il faut des redevances calculées, des droits distincts pour des franchisés indépendants, une centrale, des audits, ou une application de commande et de fidélité à votre enseigne.",
      ], list: [
        "**Ce que vous recevez** : un catalogue central avec prix par zone ; une caisse commune qui fonctionne sans connexion ; les commandes à la centrale ; les redevances calculées et facturées chaque mois ; les grilles d'audit avec photos ; le tableau du réseau avec ses couloirs ; des droits par rôle.",
        "**Ce que le réseau évite** : le même produit vendu à cinq prix, la recette qui change d'une ville à l'autre, la redevance discutée chaque mois, le point qui décroche sans que personne le voie, l'ouverture sans liste à cocher.",
        "**Ce qui est mesuré** : ventes par jour et par point ; ticket moyen ; coût matière ; score d'audit ; ventes à périmètre constant ; redevances facturées et encaissées ; écarts au catalogue.",
        "**Ce que fait Symloop** : le cadrage de ce qui est commun et de ce qui reste local, le catalogue central, la caisse commune, les commandes à la centrale, le calcul des redevances, les audits, le tableau du réseau, les droits par rôle, en arabe et en français.",
      ], faq: [
        { q: "Comment créer une franchise ?", a: "En rendant d'abord le concept transmissible : un point rentable dont les chiffres sont connus, un catalogue, des recettes et des procédures écrits, et un outil commun installé dans vos propres points avant le premier franchisé." },
        { q: "Quel logiciel pour gérer un réseau de franchise ?", a: "Une plateforme qui tient le catalogue central, la caisse commune de tous les points, les commandes à la centrale, le calcul des redevances, les audits et la comparaison des points." },
        { q: "Comment calculer la redevance d'un franchisé ?", a: "En appliquant le taux convenu aux ventes enregistrées par la caisse commune. Dans l'exemple : 5 % de 56 550 000 dinars, soit 2 827 500 dinars sur l'année." },
        { q: "Comment s'assurer que tous les points vendent au même prix ?", a: "Par un catalogue central : le prix est décidé une fois et poussé à toutes les caisses. Un point ne modifie que les prix que le réseau lui laisse." },
        { q: "Comment savoir ce qui se passe dans un point sans y aller ?", a: "Par quatre chiffres lus chaque matin, ventes, ticket moyen, coût matière, score d'audit, et un couloir pour chacun. Seuls les points qui en sortent demandent une visite." },
        { q: "Un franchisé voit-il les chiffres des autres points ?", a: "Non, sauf si vous le décidez. Chaque personne franchisée voit ses points, ses ventes et ses factures de redevance." },
        { q: "Faut-il une centrale d'achat dès le début ?", a: "Pas forcément un entrepôt : au début, un dépôt et des fournisseurs référencés suffisent. Ce qui compte, c'est que les commandes passent par l'outil et que les produits soient les mêmes." },
        { q: "Que se passe-t-il si un point n'a plus Internet ?", a: "La caisse continue à vendre hors connexion et remonte les tickets dès que le réseau revient." },
        { q: "Peut-on commencer avec ses propres points ?", a: "Oui, et c'est la bonne méthode : l'outil se rode dans vos points, et le calcul des redevances tourne à blanc avant le premier franchisé." },
        { q: "La plateforme s'occupe-t-elle du contrat de franchise ?", a: "Non. Le contrat, la marque et le choix des franchisés relèvent de vos conseils ; la plateforme rend le concept transmissible et vérifiable." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Personne ne déclare rien : la facture du mois se calcule sur les tickets, et le chiffre ne se discute plus." },
      { after: 3, text: "Le réseau ne regarde pas trente-deux chiffres : il traite les quatre ronds qui sortent du couloir." },
    ],
    cta: { eyebrow: "Dites-nous combien de points vous avez, combien on vous en demande, et ce qui doit rester identique partout : nous commençons par une semaine de cadrage", title: "Concept qui marche et demandes d'ouverture sous votre enseigne, prix qui dérivent d'un point à l'autre, redevances discutées, points qu'on ne voit pas, ou réseau que vous lancez en Algérie depuis la France", body: "Symloop construit la plateforme de votre réseau : catalogue central, caisse commune, commandes à la centrale, redevances, audits, tableau des points. Décrivez-nous votre concept, vos points actuels et ce que vous voulez garder sous contrôle." },
    related: { label: 'À lire aussi', items: [
      { href: L.fidelite, kind: '2027', name: 'Programme de fidélité : café, fast-food, chaîne, points à la caisse' },
      { href: L.caisse, kind: '2027', name: 'Les sessions de caisse : fond de caisse, comptage, écart, dépôt' },
      { href: L.rentable, kind: '2027', name: 'Savoir si l’entreprise est rentable : prix de revient, marge, seuil' },
      { href: L.ventes, kind: '2027', name: 'Analyser les ventes : quels produits font la marge, quels clients partent' },
    ] },
  },
  en: {
    kind: 'Franchise · Algeria · 2027', title: "How to create a franchise in Algeria (2027): people want to open under your brand, and nothing guarantees they will sell the same thing at the same price; network software, central catalogue, common till, royalties, audits, and what we put in place",
    dek: "“I have three fast-food outlets that are doing well. People are asking me to open under my brand in Oran, Sétif and Constantine. How do I create a franchise? I do not know how to make sure they will sell the same thing at the same price, how to calculate what they owe me each month, or how to know what is going on there without travelling.” A franchise is a concept that can be handed over: as long as the recipes, the prices and the figures live in your head and in your three tills, there is nothing to hand over.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Creating a franchise', 'Network software', 'Central catalogue and common till', 'Royalty calculation', 'Audits and comparison of outlets', 'Algeria 2027'],
    intro: [
      "**Short answer.** Before the first franchisee, a network builds four things. **A central catalogue**: items, recipes and prices, pushed to every outlet the same day. **A common till**: the same software everywhere, every ticket sent up. **Orders to the central unit**: the same products in each outlet. **Royalties calculated** on the till's sales, not on a declaration, with an audit checklist and a dashboard that compares outlets. In this page's example, a franchised outlet declares 52,600,000 dinars over the year when the till records 56,550,000.",
      "This page is for those who have a concept that works, fast food, café, bakery, shop, gym, and who are being asked to let others open under their brand, in Algeria or from France. The definitions come from public sources: franchising, royalty, chain store, standard operating procedure, same-store sales, mystery shopping, point of sale. The network of eight outlets, its sales, its rates and its corridors are a constructed example, with fictitious figures. The page covers neither the franchise agreement and trademark protection, nor tax, nor transfers abroad, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside a network's platform", body: [
        "The figure stacks five layers; the first one makes the brand.",
      ], visual: 'couches', after: [
        "**Franchising.** It is a practice in which a company licenses its business model to another: its know-how, its procedures, its brand. In return, the franchisee pays fees and agrees to comply with obligations. A chain, for its part, is a set of outlets that share a brand, central management and standardised practices. In both cases the customer must find the same thing everywhere. **The central catalogue.** That is the accented layer: an item, a recipe, a price, decided once and applied everywhere. An outlet changes only what the network allows, see [roles and rights](" + L.roles + ").",
        "**The common till.** The same till software in each outlet, which works without a connection and sends up every ticket, see [the offline application](" + L.horsligne + ") and [till sessions](" + L.caisse + "). **The central unit.** Each outlet orders from the central unit or from listed suppliers; quantities follow sales, see [replenishment](" + L.reappro + "). **Procedures.** A standard operating procedure is a standardised way of doing a task, step by step; they live in the platform, with the recipes and the job sheets. **Loyalty.** One card for the whole network, see [the loyalty programme](" + L.fidelite + ").",
      ] },
      { heading: "Franchising a concept, in six steps", body: [
        "The figure gives six steps; the tool comes before the first franchisee.",
      ], visual: 'etapes', after: [
        "**The proven concept.** A profitable outlet whose figures you know: sales per day, average ticket, food cost, see [knowing whether the company is profitable](" + L.rentable + "). **The written concept.** What is in your head becomes a catalogue, weighed recipes, procedures and an audit checklist. Networks support the set-up with operating manuals, and a great deal of standardisation is required. **The common tool.** That is the accented step: it is installed first in your own outlets.",
        "**The pilot outlet.** A first franchisee, followed closely, is used to correct the manual and the tool before the next ones. **Opening.** Team training, opening stock, first-day checklist. **Follow-up.** Royalties, audits, comparison: those are the next two figures. **What stays local.** Opening hours, the schedule, sometimes a few items or a price per zone: the network decides what is free, and the tool applies it.",
      ] },
      { heading: "The royalty, calculated on the till", body: [
        "The figure shows twelve months of a franchised outlet.",
      ], visual: 'redevance', after: [
        "**The royalty.** It is a payment made to the party that owns an asset, for the right to go on using it; it is typically agreed as a percentage of revenue. In a franchise, the payments cited are a royalty for the trademark, reimbursement for training, and a percentage of each outlet's sales. **In the example.** A royalty of 5% of sales and a marketing fund of 1%, fictitious rates. Over twelve months, the common till records 56,550,000 dinars; the franchisee declared 52,600,000. Gap: 3,950,000 dinars, that is 7.0%.",
        "**What that amounts to.** At 5%, 2,827,500 dinars of royalty on the till against 2,630,000 on the declaration; with the marketing fund, a gap of 237,000 dinars for a single outlet. **Where the gap comes from.** Rarely from intent: delivery sales left out, voided tickets, missing days, rounding. **What the common till changes.** Nobody declares anything: on the first of the month, the royalty invoice is calculated on the tickets, outlet by outlet, and goes out by itself. Payments are followed as in [customer credit](" + L.credit + "). **What the franchisee sees.** The same figure as you, ticket by ticket: that is where trust comes from.",
      ] },
      { heading: "Comparing outlets, without travelling", body: [
        "The figure places eight outlets on four figures.",
      ], visual: 'couloir', after: [
        "**The four figures.** Sales per day, average ticket, food cost, meaning the share of sales that goes into ingredients, and audit score. Because the till and the catalogue are the same, they are calculated the same way everywhere. **The corridor.** For each figure, the network sets an acceptable range. In the example, 28 values of 32 are inside; four leave it: Constantine sells 96,000 dinars a day when the corridor starts at 130,000, Annaba has an average ticket of 640 dinars, Sétif a food cost of 38%, Tlemcen an audit score of 71%.",
        "**What a gap says.** Not the cause: a high food cost can come from portions, from waste or from a supplier off the list. It says where to go this week. **The audit.** A checklist of points to verify, with photos taken on site, see [photos that stand as proof](" + L.photos + "); some networks add mystery shopping, a person who poses as a customer to observe the quality of service. **Over time.** Same-store sales compare the revenue of existing outlets from one period to another: that is what says whether the network is growing, or only opening. **Analysis.** By product, by hour and by outlet, see [sales analysis](" + L.ventes + ").",
      ] },
      { heading: "Ten weeks before the first franchisee", body: [
        "Ten weeks in the example, starting with your own outlets.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: what is common to every outlet, what stays local, and the figures you want to follow. **The catalogue.** Your items, your weighed recipes, your prices, entered once. **The common till.** It first replaces the till in your own outlets: that is where the tool is run in, with your teams.",
        "**The central unit.** Even if at first it comes down to a depot and a van, the outlets' orders go through the tool. **Royalties.** The calculation runs dry on your own outlets before invoicing anyone. **What the platform does not do.** It does not draft the agreement, does not protect the trademark and does not choose the franchisees: it makes the concept transferable and verifiable. **The durations** are those of a constructed example.",
      ] },
      { heading: "Who sees what in the network", body: [
        "The figure gives five roles, what each one sees and what each one changes.",
      ], visual: 'roles', after: [
        "**Network management.** It sees everything and holds the catalogue, the prices, the corridors. **The field team.** It follows a group of outlets, their figures and their audits, and holds the action plans. **The franchisee.** They see their outlets, their sales and their royalty invoices, never those of the others.",
        "**An outlet's manager.** The till, the stock, the schedule, the day's orders. **The central unit.** The orders of every outlet and its own stock. **From three to thirty outlets.** The tool is the same; what changes is the number of people running the network, and the split by region. **Ready-made or custom.** Multi-store till software on the market suits a simple chain of company-owned outlets. Custom work is justified when you need calculated royalties, separate rights for independent franchisees, a central unit, audits, or an ordering and loyalty application under your brand.",
      ], list: [
        "**What you receive**: a central catalogue with prices per zone; a common till that works without a connection; orders to the central unit; royalties calculated and invoiced every month; audit checklists with photos; the network dashboard with its corridors; rights per role.",
        "**What the network avoids**: the same product sold at five prices, the recipe that changes from one city to another, the royalty argued over every month, the outlet that slips without anyone seeing it, the opening without a checklist.",
        "**What is measured**: sales per day and per outlet; average ticket; food cost; audit score; same-store sales; royalties invoiced and collected; deviations from the catalogue.",
        "**What Symloop does**: scoping what is common and what stays local, the central catalogue, the common till, orders to the central unit, royalty calculation, audits, the network dashboard, rights per role, in Arabic and in French.",
      ], faq: [
        { q: "How do you create a franchise?", a: "By first making the concept transferable: a profitable outlet whose figures are known, a written catalogue, recipes and procedures, and a common tool installed in your own outlets before the first franchisee." },
        { q: "What software to manage a franchise network?", a: "A platform that holds the central catalogue, the common till of every outlet, orders to the central unit, royalty calculation, audits and the comparison of outlets." },
        { q: "How do you calculate a franchisee's royalty?", a: "By applying the agreed rate to the sales recorded by the common till. In the example: 5% of 56,550,000 dinars, that is 2,827,500 dinars over the year." },
        { q: "How do you make sure every outlet sells at the same price?", a: "With a central catalogue: the price is decided once and pushed to every till. An outlet changes only the prices the network leaves to it." },
        { q: "How do you know what is going on in an outlet without travelling?", a: "With four figures read every morning, sales, average ticket, food cost, audit score, and a corridor for each. Only the outlets that leave it call for a visit." },
        { q: "Does a franchisee see the other outlets' figures?", a: "No, unless you decide so. Each franchisee sees their outlets, their sales and their royalty invoices." },
        { q: "Is a central purchasing unit needed from the start?", a: "Not necessarily a warehouse: at first, a depot and listed suppliers are enough. What matters is that orders go through the tool and that the products are the same." },
        { q: "What happens if an outlet loses its internet connection?", a: "The till goes on selling offline and sends up the tickets as soon as the network is back." },
        { q: "Can you start with your own outlets?", a: "Yes, and it is the right method: the tool is run in within your outlets, and the royalty calculation runs dry before the first franchisee." },
        { q: "Does the platform deal with the franchise agreement?", a: "No. The agreement, the trademark and the choice of franchisees are matters for your advisers; the platform makes the concept transferable and verifiable." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Nobody declares anything: the month's invoice is calculated on the tickets, and the figure is no longer argued over." },
      { after: 3, text: "The network does not look at thirty-two figures: it deals with the four dots that leave the corridor." },
    ],
    cta: { eyebrow: "Tell us how many outlets you have, how many you are being asked for, and what must stay identical everywhere: we start with a week of scoping", title: "A concept that works and requests to open under your brand, prices drifting from one outlet to another, royalties argued over, outlets you cannot see, or a network you are launching in Algeria from France", body: "Symloop builds your network's platform: central catalogue, common till, orders to the central unit, royalties, audits, dashboard of outlets. Describe your concept to us, your current outlets and what you want to keep under control." },
    related: { label: 'Also read', items: [
      { href: L.fidelite, kind: '2027', name: 'Loyalty programme: café, fast food, chain, points at the till' },
      { href: L.caisse, kind: '2027', name: 'Till sessions: float, counting, variance, bank deposit' },
      { href: L.rentable, kind: '2027', name: 'Knowing whether the company is profitable: cost price, margin, break-even' },
      { href: L.ventes, kind: '2027', name: 'Analysing sales: which products make the margin, which customers leave' },
    ] },
  },
  ar: {
    kind: 'الامتياز التجاري · الجزائر · 2027', title: "كيف يُنشأ امتياز تجاري في الجزائر (2027): يريدون الافتتاح تحت علامتكم، ولا شيء يضمن أنهم سيبيعون الشيء نفسه بالسعر نفسه؛ برنامج الشبكة، كتالوغ مركزي، صندوق موحَّد، إتاوات، تدقيق، وما نضعه",
    dek: "«عندي ثلاثة مطاعم للوجبات السريعة تشتغل جيداً. يطلبون مني الافتتاح تحت علامتي في وهران، سطيف، وقسنطينة. كيف أنشئ امتيازاً تجارياً؟ لا أعرف كيف أتأكد أنهم سيبيعون الشيء نفسه بالسعر نفسه، ولا كيف أحسب ما يدينون لي به كل شهر، ولا كيف أعرف ما يجري عندهم دون الذهاب.» الامتياز مفهوم يُنقَل: وما دامت الوصفات والأسعار والأرقام تعيش في رأسكم وفي صناديقكم الثلاثة، فلا شيء يُنقَل.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['إنشاء امتياز تجاري', 'برنامج الشبكة', 'الكتالوغ المركزي والصندوق الموحَّد', 'حساب الإتاوات', 'التدقيق ومقارنة النقاط', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** قبل أول صاحب امتياز، تبني الشبكة أربعة أشياء. **كتالوغ مركزي**: الأصناف، الوصفات، والأسعار، تُدفَع إلى كل النقاط في اليوم نفسه. **صندوق موحَّد**: البرنامج نفسه في كل مكان، وكل تذكرة تُرفَع. **طلبيات إلى المركزية**: المنتجات نفسها في كل نقطة. و**إتاوات تُحسب** على مبيعات الصندوق، لا على تصريح، مع شبكة تدقيق ولوحة تقارن النقاط. في مثال هذه الصفحة، نقطة بامتياز تصرّح بـ" + I('52 600 000') + " دينار في السنة حين يسجّل الصندوق " + I('56 550 000') + ".",
      "هذه الصفحة موجّهة إلى من عنده مفهوم ناجح، وجبات سريعة، مقهى، مخبزة، محل، أو قاعة رياضة، ويُعرض عليه الافتتاح تحت علامته، في الجزائر أو من فرنسا. التعريفات من مصادر عمومية: الامتياز التجاري، الإتاوة، سلسلة المحلات، إجراء التشغيل الموحَّد، المبيعات على النقاط نفسها، الزبون الخفي، ونقطة البيع. وشبكة النقاط الثماني، مبيعاتها، نسبها، ومجالاتها مثال مركَّب، بأرقام خيالية. والصفحة لا تتناول عقد الامتياز وحماية العلامة، ولا الجباية، ولا التحويلات نحو الخارج، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في منصة الشبكة", body: [
        "الشكل يرتّب خمس طبقات؛ والأولى تصنع العلامة.",
      ], visual: 'couches', after: [
        "**الامتياز التجاري.** ممارسة تمنح فيها مؤسسة نموذج أعمالها لمؤسسة أخرى: خبرتها، إجراءاتها، وعلامتها. وفي المقابل، يدفع صاحب الامتياز حقوقاً ويلتزم باحترام واجبات. أما السلسلة فمجموعة نقاط تتقاسم علامة، إدارة مركزية، وممارسات موحَّدة. وفي الحالتين، يجب أن يجد الزبون الشيء نفسه في كل مكان. **الكتالوغ المركزي.** هو الطبقة المبرزة: صنف، وصفة، وسعر، تُقرَّر مرة وتُطبَّق في كل مكان. والنقطة لا تعدّل إلا ما تسمح به الشبكة، انظر [الأدوار والصلاحيات](" + L.roles + ").",
        "**الصندوق الموحَّد.** برنامج الصندوق نفسه في كل نقطة، يشتغل دون اتصال ويرفع كل تذكرة، انظر [التطبيق دون اتصال](" + L.horsligne + ") و[جلسات الصندوق](" + L.caisse + "). **المركزية.** كل نقطة تطلب من المركزية أو من المورّدين المعتمَدين؛ والكميات تتبع المبيعات، انظر [إعادة التموين](" + L.reappro + "). **الإجراءات.** إجراء التشغيل الموحَّد طريقة موحَّدة لإنجاز مهمة، خطوة بخطوة؛ وهي تعيش في المنصة، مع الوصفات وبطاقات المناصب. **الوفاء.** بطاقة واحدة لكل الشبكة، انظر [برنامج الوفاء](" + L.fidelite + ").",
      ] },
      { heading: "منح امتياز لمفهوم، في ست مراحل", body: [
        "الشكل يعطي ست مراحل؛ والأداة تأتي قبل أول صاحب امتياز.",
      ], visual: 'etapes', after: [
        "**المفهوم المُثبَت.** نقطة رابحة تعرفون أرقامها: المبيعات في اليوم، متوسط التذكرة، وكلفة المواد، انظر [معرفة هل المؤسسة رابحة](" + L.rentable + "). **المفهوم المكتوب.** ما في رأسكم يصير كتالوغاً، وصفات موزونة، إجراءات، وشبكة تدقيق. والشبكات ترافق الانطلاق بأدلّة تشغيل، والتوحيد المطلوب كبير. **الأداة المشتركة.** هي المرحلة المبرزة: تُثبَّت أولاً في نقاطكم الخاصة.",
        "**النقطة التجريبية.** أول صاحب امتياز، متابَع عن قرب، يُستعمل لتصحيح الدليل والأداة قبل من يأتي بعده. **الافتتاح.** تكوين الفريق، المخزون الأولي، وقائمة تأشير اليوم الأول. **المتابعة.** الإتاوات، التدقيق، والمقارنة: هما الشكلان التاليان. **ما يبقى محلياً.** التوقيت، برنامج العمل، وأحياناً بعض الأصناف أو سعر حسب المنطقة: الشبكة تقرّر ما هو حر، والأداة تطبّقه.",
      ] },
      { heading: "الإتاوة، تُحسب على الصندوق", body: [
        "الشكل يعرض اثني عشر شهراً لنقطة بامتياز.",
      ], visual: 'redevance', after: [
        "**الإتاوة.** دفعة تُدفَع للطرف الذي يملك أصلاً، مقابل حق مواصلة استعماله؛ ويُتفق عليها في الغالب كنسبة من رقم الأعمال. وفي الامتياز، الدفعات المذكورة هي إتاوة للعلامة، تعويض التكوين، ونسبة من مبيعات كل نقطة. **في المثال.** إتاوة 5 بالمئة من المبيعات وصندوق إشهار 1 بالمئة، ونسب خيالية. على اثني عشر شهراً، يسجّل الصندوق الموحَّد " + I('56 550 000') + " دينار؛ وصاحب الامتياز صرّح بـ" + I('52 600 000') + ". الفارق: " + I('3 950 000') + " دينار، أي " + I('7,0') + " بالمئة.",
        "**ما يمثّله ذلك.** بنسبة 5 بالمئة، " + I('2 827 500') + " دينار إتاوة على الصندوق مقابل " + I('2 630 000') + " على التصريح؛ ومع صندوق الإشهار، فارق " + I('237 000') + " دينار لنقطة واحدة. **من أين يأتي الفارق.** قلّما عن قصد: مبيعات توصيل منسية، تذاكر ملغاة، أيام ناقصة، وتقريب. **ما يغيّره الصندوق الموحَّد.** لا أحد يصرّح بشيء: في أول الشهر، فاتورة الإتاوة تُحسب على التذاكر، نقطة بنقطة، وتنطلق وحدها. ومتابعة التسديد هي متابعة [دَين الزبون](" + L.credit + "). **ما يراه صاحب الامتياز.** الرقم نفسه الذي ترونه، تذكرة بتذكرة: من هنا تأتي الثقة.",
      ] },
      { heading: "مقارنة النقاط، دون الذهاب إليها", body: [
        "الشكل يضع ثماني نقاط بيع على أربعة أرقام.",
      ], visual: 'couloir', after: [
        "**الأرقام الأربعة.** المبيعات في اليوم، متوسط التذكرة، كلفة المواد، أي حصة المبيعات التي تذهب في المكوّنات، ونتيجة التدقيق. ولأن الصندوق والكتالوغ واحد، تُحسب بالطريقة نفسها في كل مكان. **المجال.** لكل رقم، تحدّد الشبكة مجالاً مقبولاً. في المثال، 28 قيمة من 32 داخله؛ وأربع تخرج منه: قسنطينة تبيع " + I('96 000') + " دينار في اليوم والمجال يبدأ من " + I('130 000') + "، عنابة بمتوسط تذكرة 640 ديناراً، سطيف بكلفة مواد 38 بالمئة، وتلمسان بنتيجة تدقيق 71 بالمئة.",
        "**ما يقوله الفارق.** لا يقول السبب: كلفة مواد مرتفعة قد تأتي من الحصص، من التبذير، أو من مورّد خارج القائمة. يقول إلى أين يُذهَب هذا الأسبوع. **التدقيق.** شبكة نقاط للتحقق، بصور تُلتقط في المكان، انظر [الصور التي تُعتمد دليلاً](" + L.photos + ")؛ وبعض الشبكات تضيف الزبون الخفي، شخص يتقدّم كزبون ليلاحظ نوعية الخدمة. **في الزمن.** المبيعات على النقاط نفسها تقارن رقم النقاط الموجودة من فترة إلى أخرى: هي التي تقول هل الشبكة تتقدّم، أم تكتفي بالافتتاح. **التحليل.** حسب المنتوج، الساعة، والنقطة، انظر [تحليل المبيعات](" + L.ventes + ").",
      ] },
      { heading: "عشرة أسابيع قبل أول صاحب امتياز", body: [
        "عشرة أسابيع في المثال، بدءاً بنقاطكم الخاصة.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: ما هو مشترك بين كل النقاط، ما يبقى محلياً، والأرقام التي تريدون متابعتها. **الكتالوغ.** أصنافكم، وصفاتكم الموزونة، وأسعاركم، تُدخَل مرة واحدة. **الصندوق الموحَّد.** يعوّض أولاً صندوق نقاطكم الخاصة: هناك تُجرَّب الأداة، مع فرقكم.",
        "**المركزية.** حتى لو اقتصرت في البداية على مستودع وشاحنة صغيرة، طلبيات النقاط تمر عبر الأداة. **الإتاوات.** الحساب يدور تجريبياً على نقاطكم الخاصة قبل فوترة أي أحد. **ما لا تفعله المنصة.** لا تحرّر العقد، لا تحمي العلامة، ولا تختار أصحاب الامتياز: تجعل المفهوم قابلاً للنقل وللتحقق. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "من يرى ماذا في الشبكة", body: [
        "الشكل يعطي خمسة أدوار، ما يراه كل دور وما يعدّله.",
      ], visual: 'roles', after: [
        "**إدارة الشبكة.** ترى كل شيء وتمسك الكتالوغ، الأسعار، والمجالات. **تنشيط الشبكة.** يتابع مجموعة نقاط، أرقامها وتدقيقاتها، ويمسك خطط العمل. **صاحب الامتياز.** يرى نقاطه، مبيعاته، وفواتير إتاوته، ولا يرى أبداً ما يخص الآخرين.",
        "**تسيير نقطة البيع.** الصندوق، المخزون، برنامج العمل، وطلبيات اليوم. **المركزية.** طلبيات كل النقاط ومخزونها الخاص. **من ثلاث إلى ثلاثين نقطة.** الأداة نفسها؛ وما يتغيّر هو عدد من ينشّطون الشبكة، والتقسيم حسب الجهة. **جاهز أو على المقاس.** برنامج صندوق لعدة محلات من السوق يناسب سلسلة بسيطة من النقاط الخاصة. والعمل على المقاس يُبرَّر حين تلزم إتاوات محسوبة، صلاحيات منفصلة لأصحاب امتياز مستقلين، مركزية، تدقيق، أو تطبيق طلب ووفاء بعلامتكم.",
      ], list: [
        "**ما تتلقونه**: كتالوغ مركزي بأسعار حسب المنطقة؛ صندوق موحَّد يشتغل دون اتصال؛ الطلبيات إلى المركزية؛ إتاوات تُحسب وتُفوتَر كل شهر؛ شبكات تدقيق بالصور؛ لوحة الشبكة بمجالاتها؛ وصلاحيات حسب الدور.",
        "**ما تتفاداه الشبكة**: المنتوج نفسه بخمسة أسعار، الوصفة التي تتغيّر من مدينة إلى أخرى، الإتاوة محل نقاش كل شهر، النقطة التي تتراجع دون أن يراها أحد، والافتتاح دون قائمة تأشير.",
        "**ما يُقاس**: المبيعات في اليوم ولكل نقطة؛ متوسط التذكرة؛ كلفة المواد؛ نتيجة التدقيق؛ المبيعات على النقاط نفسها؛ الإتاوات المفوتَرة والمحصَّلة؛ والفوارق عن الكتالوغ.",
        "**ما تفعله Symloop**: تأطير ما هو مشترك وما يبقى محلياً، الكتالوغ المركزي، الصندوق الموحَّد، الطلبيات إلى المركزية، حساب الإتاوات، التدقيق، لوحة الشبكة، والصلاحيات حسب الدور، بالعربية والفرنسية.",
      ], faq: [
        { q: "كيف يُنشأ امتياز تجاري؟", a: "بجعل المفهوم قابلاً للنقل أولاً: نقطة رابحة أرقامها معروفة، كتالوغ ووصفات وإجراءات مكتوبة، وأداة مشتركة مثبَّتة في نقاطكم الخاصة قبل أول صاحب امتياز." },
        { q: "أي برنامج لتسيير شبكة امتياز؟", a: "منصة تمسك الكتالوغ المركزي، الصندوق الموحَّد لكل النقاط، الطلبيات إلى المركزية، حساب الإتاوات، التدقيق، ومقارنة النقاط." },
        { q: "كيف تُحسب إتاوة صاحب الامتياز؟", a: "بتطبيق النسبة المتفق عليها على المبيعات التي يسجّلها الصندوق الموحَّد. في المثال: 5 بالمئة من " + I('56 550 000') + " دينار، أي " + I('2 827 500') + " دينار في السنة." },
        { q: "كيف يُضمن أن كل النقاط تبيع بالسعر نفسه؟", a: "بكتالوغ مركزي: السعر يُقرَّر مرة ويُدفَع إلى كل الصناديق. والنقطة لا تعدّل إلا الأسعار التي تتركها لها الشبكة." },
        { q: "كيف يُعرف ما يجري في نقطة دون الذهاب إليها؟", a: "بأربعة أرقام تُقرأ كل صباح، المبيعات، متوسط التذكرة، كلفة المواد، ونتيجة التدقيق، ومجال لكل واحد. والنقاط التي تخرج منه وحدها تستدعي زيارة." },
        { q: "هل يرى صاحب الامتياز أرقام النقاط الأخرى؟", a: "لا، إلا إذا قرّرتم ذلك. كل صاحب امتياز يرى نقاطه، مبيعاته، وفواتير إتاوته." },
        { q: "هل تلزم مركزية شراء منذ البداية؟", a: "ليس بالضرورة مخزناً كبيراً: في البداية، مستودع ومورّدون معتمَدون يكفون. والمهم أن تمر الطلبيات عبر الأداة وأن تكون المنتجات نفسها." },
        { q: "ماذا يحدث إذا انقطعت الإنترنت عن نقطة؟", a: "الصندوق يواصل البيع دون اتصال ويرفع التذاكر فور عودة الشبكة." },
        { q: "هل يمكن البدء بالنقاط الخاصة؟", a: "نعم، وهي الطريقة الصحيحة: الأداة تُجرَّب في نقاطكم، وحساب الإتاوات يدور تجريبياً قبل أول صاحب امتياز." },
        { q: "هل تتكفّل المنصة بعقد الامتياز؟", a: "لا. العقد، العلامة، واختيار أصحاب الامتياز من شأن مستشاريكم؛ والمنصة تجعل المفهوم قابلاً للنقل وللتحقق." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "لا أحد يصرّح بشيء: فاتورة الشهر تُحسب على التذاكر، والرقم لا يعود محل نقاش." },
      { after: 3, text: "الشبكة لا تنظر إلى اثنين وثلاثين رقماً: تعالج الدوائر الأربع التي تخرج من المجال." },
    ],
    cta: { eyebrow: "قولوا لنا كم نقطة عندكم، كم يُطلب منكم، وما يجب أن يبقى مطابقاً في كل مكان: نبدأ بأسبوع تأطير", title: "مفهوم ناجح وطلبات افتتاح تحت علامتكم، أسعار تنحرف من نقطة إلى أخرى، إتاوات محل نقاش، نقاط لا تُرى، أو شبكة تطلقونها في الجزائر من فرنسا", body: "Symloop تبني منصة شبكتكم: كتالوغ مركزي، صندوق موحَّد، طلبيات إلى المركزية، إتاوات، تدقيق، ولوحة النقاط. صِفوا لنا مفهومكم، نقاطكم الحالية، وما تريدون إبقاءه تحت المراقبة." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.fidelite, kind: '2027', name: 'برنامج الوفاء: مقهى، وجبات سريعة، سلسلة، ونقاط عند الصندوق' },
      { href: L.caisse, kind: '2027', name: 'جلسات الصندوق: رصيد البداية، العدّ، الفارق، والإيداع' },
      { href: L.rentable, kind: '2027', name: 'معرفة هل المؤسسة رابحة: سعر التكلفة، الهامش، والعتبة' },
      { href: L.ventes, kind: '2027', name: 'تحليل المبيعات: أي المنتجات تصنع الهامش، وأي الزبائن يغادرون' },
    ] },
  },
};

const KEYWORDS = "comment créer une franchise, comment créer une franchise en algérie 2027, comment franchiser son concept, comment devenir franchiseur, créer un réseau de franchise, comment gérer une franchise, logiciel gestion franchise, logiciel franchise, logiciel multi magasin, logiciel caisse multi magasin, redevance franchise calcul, ouvrir une franchise en algérie, how to create a franchise algeria, franchise management software, royalty calculation franchise, multi-store pos software, same-store sales, كيف افتح فرنشايز, الامتياز التجاري في الجزائر, برنامج تسيير شبكة امتياز, حساب الإتاوة, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
