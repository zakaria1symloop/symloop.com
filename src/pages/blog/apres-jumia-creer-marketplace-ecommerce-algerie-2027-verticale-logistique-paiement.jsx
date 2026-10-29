import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/apres-jumia-creer-marketplace-ecommerce-algerie-2027-verticale-logistique-paiement.mjs';

const SLUG = 'apres-jumia-creer-marketplace-ecommerce-algerie-2027-verticale-logistique-paiement';
const FIGURES = ['why', 'verticals', 'stack', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Série · Vu en France, à construire en Algérie · #07', title: "Après Jumia : créer la marketplace e-commerce en Algérie en 2027, verticale, avec la logistique et le paiement maîtrisés.",
    dek: "En février 2026, Jumia a annoncé la fin de ses activités en Algérie après quatorze ans, et ses vendeurs se sont retrouvés sur Instagram et WhatsApp. Depuis, la question revient dans presque chaque conversation avec un fondateur : faut-il construire « l'Amazon algérien », ou le marché a-t-il déjà répondu ? Pourquoi le généraliste n'a pas tenu, ce qu'une marketplace verticale change, les quatre verticales où elle tient en 2027, la pile à construire, et le calendrier.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['E-commerce', 'Marketplace', 'Jumia', 'Logistique', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Ne construisez pas l'Amazon algérien. Le généraliste perd sur chaque ligne, parce qu'il doit tout faire partout : encaisser des espèces à la livraison sur tout le territoire, livrer tous les produits dans toutes les wilayas, vérifier des milliers de vendeurs, et acheter du trafic face à des géants chinois qui vendent moins cher. **La marketplace qui tient en Algérie en 2027 est verticale : une catégorie où l'acheteur est professionnel ou récurrent, où le produit exige une garantie, et où la logistique se maîtrise, pièces auto, matériaux et outillage, parapharmacie, électroménager reconditionné.** Elle a cinquante vendeurs vérifiés avant la première ligne de code, un paiement qui réduit le refus à la source, des transporteurs partenaires, et elle naît conforme au cadre que le projet de loi de finances 2027 impose désormais aussi aux plateformes étrangères.",
      "Ce guide est le septième de notre série sur les modèles vus en France à construire en Algérie, et il s'appuie sur trois pages écrites avant lui : [comment l'argent circule dans une marketplace](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/), [la plateforme de livraison en 2027](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/) et [les commandes refusées à la livraison](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/).",
    ],
    sections: [
      { heading: "Ce qui s'est passé, et ce que cela dit du marché", body: [
        "Les faits, tels que la presse économique les a rapportés en février 2026 : Jumia a annoncé l'arrêt de ses activités algériennes après quatorze ans, avec une marketplace hors ligne à partir du 10 mars 2026 et la résiliation des contrats des vendeurs tiers. Le groupe a expliqué que l'Algérie représentait une part marginale de son volume d'affaires, de l'ordre de deux pour cent selon les sources, et qu'il se recentrait sur ses marchés clés pour viser la rentabilité en 2027.",
      ], after: [
        "Les raisons de fond, elles, sont celles que tous les e-commerçants algériens connaissent : un paiement électronique encore minoritaire chez les marchands au moment de la décision, qui a obligé la plateforme à vivre d'espèces à la livraison et donc de refus ; une logistique nationale coûteuse pour des paniers petits ; et une pression sur les prix venue de plateformes chinoises qui livrent depuis l'étranger. Des acteurs internationaux et locaux se positionnent pour occuper le terrain, et le PLF 2027 les rattrape : identification au fisc, déclaration annuelle, TVA sur les ventes et les commissions, pour les plateformes étrangères comme pour les locales. Pour un fondateur algérien, c'est un marché qui vient de rendre son verdict sur le modèle généraliste, pas sur le e-commerce.",
      ] },
      { heading: "Pourquoi le généraliste n'a pas tenu, et ce que la verticale change", body: [
        "Six lignes, deux colonnes. Le généraliste n'a pas perdu sur une ligne, il a perdu sur toutes, parce qu'elles se tiennent.",
      ], visual: 'why', after: [
        "**Le paiement.** Le généraliste vit d'espèces à la livraison, donc de refus à la porte, donc d'une trésorerie lourde et d'une marge mangée par les tentatives inutiles. La verticale s'adresse à un acheteur professionnel ou récurrent, qui accepte un acompte ou paie électroniquement, par CIB, Edahabia ou QR, parce qu'il rachètera le mois prochain ; et le PLF 2027 pousse ses propres clients vers l'encaissement électronique. **La logistique.** Le généraliste livre tout, partout, avec des hubs dans chaque wilaya qu'il ne remplit pas ; la verticale commence dans une ville, avec une catégorie dont elle connaît le poids, le volume et la fragilité, et des transporteurs partenaires contractés avant le pilote. **Le catalogue.** Des milliers de vendeurs et des fiches inégales produisent des contrefaçons et des litiges ; cinquante vendeurs vérifiés et des fiches normalisées produisent une garantie. **L'acquisition.** La publicité massive contre des géants étrangers ne se gagne pas ; une communauté métier, garagistes, artisans, officines, se fidélise et achète chaque semaine. **La marge.** Une commission faible sur des produits génériques ne couvre pas la logistique ; la verticale facture des services, livraison lourde, financement, garantie, SAV, que le généraliste ne pouvait pas promettre. **Le cadre 2027.** Les plateformes étrangères doivent désormais s'identifier et collecter la TVA ; une plateforme locale née conforme part à égalité, et sur son terrain.",
      ] },
      { heading: 'Quatre verticales où une marketplace tient en 2027', body: [
        "Le point commun des quatre : un acheteur qui revient, un produit qui exige une garantie, une logistique qui se maîtrise.",
      ], visual: 'verticals', after: [
        "**Les pièces auto et l'équipement** ont un catalogue technique par véhicule, des vendeurs professionnels et des garagistes qui commandent chaque semaine ; le refus y est rare parce que la pièce est attendue. **Les matériaux et l'outillage** ont des artisans et des entrepreneurs qui commandent de façon récurrente, une livraison lourde qui s'organise avec des transporteurs dédiés, et un crédit fournisseur qui est la vraie valeur de la plateforme. **La parapharmacie et la santé** ont des officines vérifiées, des produits réglementés, une livraison contrôlée et une ordonnance quand il le faut ; c'est la verticale la plus exigeante et celle où une plateforme sérieuse n'a pas de concurrent crédible, nous l'avons vue depuis l'intérieur avec [la pharmacie à trois officines](/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/). **L'électroménager et le high-tech reconditionnés** vivent de ce que le généraliste ne pouvait pas offrir : la garantie, le SAV et le paiement échelonné.",
        "Ce que ces quatre ne sont pas : la mode à petit prix, les gadgets, les produits que les plateformes étrangères livrent moins cher depuis l'étranger. Sur ce terrain, [l'annonce entre particuliers](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/) et Instagram gardent l'avantage.",
      ] },
      { heading: 'La pile à construire', body: [
        "Cinq couches. Les deux qui ont coulé le généraliste, le paiement et la logistique, sont celles qu'une verticale peut maîtriser parce qu'elle est petite.",
      ], visual: 'stack', after: [
        "**Les acheteurs** ont une application et un site en arabe et en français, un catalogue normalisé, pièce par véhicule, matériau par unité, produit par référence, des prix affichés toutes taxes comprises et des avis vérifiés après livraison réelle. **Les vendeurs vérifiés** ont un extranet, stock, commandes, relevés, factures, et passent une vérification, registre, identité, premier contrôle humain, parce que le premier vendeur frauduleux coûte la confiance de cent acheteurs. **Le paiement** passe par la plateforme, CIB, Edahabia, QR, avec séquestre jusqu'à la livraison, et un acompte ou un paiement à la livraison enregistré pour réduire le refus à la source ; le circuit complet est dans [notre guide des marketplaces](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/). **La logistique** s'appuie sur des transporteurs partenaires contractés, avec confirmation avant ramassage, suivi, retours et paiement à la porte par SoftPos et QR à partir de 2027, comme décrit dans [la plateforme de livraison](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). **La conformité et l'IA** ferment la pile : plateforme identifiée au fisc, commissions facturées avec TVA, déclaration annuelle produite par le système, données hébergées selon la loi 18-07 ; confirmation automatisée des commandes et prédiction du refus par IA.",
        "Un projet de ce périmètre, deux applications, séquestre, extranet, logistique intégrée, se situe en catégorie 3 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/), avec un prix total écrit avant de commencer.",
      ] },
      { heading: 'Le calendrier : une verticale, une ville, neuf mois', body: [
        "Les cinquante vendeurs se recrutent avant le code, et les transporteurs se contractent avant le pilote.",
      ], visual: 'timeline', after: [
        "**Mois 1 et 2 : le choix de la verticale et cinquante vendeurs** recrutés à la main, garagistes, grossistes en matériaux, officines ou reconditionneurs, en comprenant ce qu'ils perdent aujourd'hui : des commandes par téléphone, des impayés, des livraisons ratées. **Mois 2 à 4 : le paiement et les transporteurs**, statut de web-marchand via la banque et le GIE Monétique, séquestre, contrats de livraison pour la ville pilote. **Mois 3 à 6 : le développement des deux faces** et du catalogue normalisé. **Mois 7 et 8 : le pilote**, Alger et une catégorie, avec trois chiffres mesurés chaque semaine, le taux de refus, le délai de livraison, le nombre de litiges. **Mois 9 : la deuxième ville ou la deuxième catégorie**, seulement si le pilote tient ses chiffres.",
        "Si vous êtes un fondateur de la diaspora, le recrutement des vendeurs et les contrats de transport sont ce qui exige d'être sur place ; nous avons placé ces voyages dans [le calendrier 2027](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).",
      ] },
      { heading: 'Les erreurs que nous voyons après Jumia', body: [], list: [
        "**Vouloir remplacer Jumia.** Un généraliste de plus perd sur les mêmes lignes. Une verticale, une ville.",
        "**Ouvrir à tous les vendeurs.** Les contrefaçons arrivent la première semaine. Cinquante vendeurs vérifiés, puis les suivants sur dossier.",
        "**Vivre d'espèces à la livraison.** C'est le modèle qui vient de fermer. Acompte, paiement électronique, confirmation avant ramassage.",
        "**Construire sa propre flotte de livraison au lancement.** Elle coûte avant de servir. Transporteurs partenaires contractés, flotte propre plus tard, si les volumes le justifient.",
        "**Concurrencer les plateformes étrangères sur le prix.** Elles livrent moins cher depuis l'étranger. La verticale vend la garantie, le SAV, le crédit, la disponibilité immédiate.",
        "**Ignorer le cadre 2027.** Identification, TVA sur commissions, déclaration annuelle. Né conforme, ou rattrapé.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Pourquoi Jumia a-t-il quitté l'Algérie ?", a: "Selon l'annonce de février 2026 rapportée par la presse, l'Algérie représentait une part marginale du volume du groupe, de l'ordre de deux pour cent, et le groupe se recentrait sur ses marchés clés pour viser la rentabilité en 2027. Les raisons de fond sont celles du marché : paiement électronique encore minoritaire chez les marchands, espèces à la livraison et refus, logistique coûteuse, pression des plateformes chinoises." },
        { q: "Faut-il construire l'Amazon algérien ?", a: "Non. Le généraliste perd sur chaque ligne, paiement, logistique, catalogue, acquisition, marge, parce qu'il doit tout faire partout. La marketplace qui tient en 2027 est verticale, avec un acheteur récurrent, un produit qui exige une garantie et une logistique maîtrisée." },
        { q: "Quelles verticales tiennent en Algérie ?", a: "Les pièces auto et l'équipement, les matériaux et l'outillage pour artisans, la parapharmacie et la santé, l'électroménager et le high-tech reconditionnés. Leur point commun : un acheteur professionnel ou récurrent, un produit qui exige une garantie, une logistique qui se maîtrise." },
        { q: "Comment éviter les refus à la livraison ?", a: "En s'adressant à des acheteurs récurrents qui acceptent un acompte ou paient électroniquement, en confirmant chaque commande avant ramassage, et en enregistrant le paiement à la livraison quand il reste. Le refus se décide à la confirmation, pas à la porte." },
        { q: "Que change le projet de loi de finances 2027 ?", a: "Le texte, encore un projet, prévoit l'identification des plateformes auprès du fisc, une déclaration annuelle des opérations de leurs vendeurs, et la TVA sur les ventes réalisées à travers elles et sur leurs commissions, pour les plateformes étrangères comme locales. Une plateforme née conforme part à égalité." },
        { q: "Combien de temps pour lancer une marketplace verticale ?", a: "Neuf mois : choix de la verticale et cinquante vendeurs recrutés en deux mois, paiement et transporteurs partenaires jusqu'au quatrième mois, développement jusqu'au sixième, pilote dans une ville et une catégorie aux mois sept et huit, extension au neuvième si le pilote tient ses chiffres." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le généraliste perd sur chaque ligne parce qu'il doit tout faire partout. La verticale gagne parce qu'elle choisit." },
      { after: 3, text: "Les deux couches qui ont coulé le généraliste sont celles qu'une verticale peut maîtriser parce qu'elle est petite." },
    ],
    cta: { eyebrow: 'Décrivez votre verticale', title: "La catégorie, les vendeurs que vous connaissez déjà, la ville, et comment vos acheteurs paient aujourd'hui. Nous vous rendons le circuit de paiement, la logistique partenaire à contracter, ce que les deux applications doivent contenir, et le prix total écrit.", body: "Symloop conçoit des marketplaces verticales pour l'Algérie : application et site acheteur en arabe et en français, extranet vendeur, vérification, paiement CIB/Edahabia et QR avec séquestre, intégration des transporteurs, confirmation et prédiction de refus par IA, conformité PLF 2027 et loi 18-07. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: "Une marketplace en Algérie en 2027 : comment l'argent circule" },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'Une plateforme de livraison en Algérie en 2027' },
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'Problème', name: 'Commandes refusées à la livraison' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'Série', name: 'Leboncoin et Vinted en Algérie' },
    ] },
  },
  en: {
    kind: 'Series · Seen in France, to build in Algeria · #07', title: 'After Jumia: building the e-commerce marketplace in Algeria in 2027, vertical, with logistics and payment under control.',
    dek: "In February 2026, Jumia announced the end of its activities in Algeria after fourteen years, and its sellers found themselves back on Instagram and WhatsApp. Since then, the question comes up in almost every conversation with a founder: should we build “the Algerian Amazon”, or has the market already answered? Why the generalist did not hold, what a vertical marketplace changes, the four verticals where it holds in 2027, the stack to build, and the calendar.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['E-commerce', 'Marketplace', 'Jumia', 'Logistics', 'Algeria 2027'],
    intro: [
      "**Short answer.** Do not build the Algerian Amazon. The generalist loses on every line, because it has to do everything everywhere: collect cash on delivery across the whole territory, deliver every product to every wilaya, verify thousands of sellers, and buy traffic against Chinese giants that sell cheaper. **The marketplace that holds in Algeria in 2027 is vertical: a category where the buyer is professional or recurring, where the product demands a warranty, and where logistics can be mastered, auto parts, building materials and tools, parapharmacy, refurbished appliances.** It has fifty verified sellers before the first line of code, payment that reduces refusal at the source, partner carriers, and it is born compliant with the framework the 2027 finance bill now imposes on foreign platforms too.",
      "This guide is the seventh in our series on models seen in France to build in Algeria, and it builds on three pages written before it: [how money flows in a marketplace](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/), [the delivery platform in 2027](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/) and [orders refused at delivery](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/).",
    ],
    sections: [
      { heading: 'What happened, and what it says about the market', body: [
        "The facts, as the business press reported them in February 2026: Jumia announced the end of its Algerian operations after fourteen years, with the marketplace offline from 10 March 2026 and third-party seller contracts terminated. The group explained that Algeria represented a marginal share of its business volume, around two percent according to sources, and that it was refocusing on its key markets to aim for profitability in 2027.",
      ], after: [
        "The underlying reasons are the ones every Algerian e-merchant knows: electronic payment still a minority among merchants at the time of the decision, which forced the platform to live off cash on delivery and therefore off refusals; costly nationwide logistics for small baskets; and price pressure from Chinese platforms delivering from abroad. International and local players are positioning to fill the gap, and the 2027 finance bill catches up with them: tax registration, annual declaration, VAT on sales and commissions, for foreign and local platforms alike. For an Algerian founder, this is a market that has just delivered its verdict on the generalist model, not on e-commerce.",
      ] },
      { heading: 'Why the generalist did not hold, and what the vertical changes', body: [
        "Six rows, two columns. The generalist did not lose on one row, it lost on all of them, because they hold together.",
      ], visual: 'why', after: [
        "**Payment.** The generalist lives off cash on delivery, hence refusals at the door, hence a heavy cash position and a margin eaten by useless attempts. The vertical addresses a professional or recurring buyer, who accepts a deposit or pays electronically, by CIB, Edahabia or QR, because they will buy again next month; and the 2027 finance bill pushes its own customers towards electronic collection. **Logistics.** The generalist delivers everything, everywhere, with hubs in every wilaya it does not fill; the vertical starts in one city, with one category whose weight, volume and fragility it knows, and partner carriers contracted before the pilot. **Catalogue.** Thousands of sellers and uneven listings produce counterfeits and disputes; fifty verified sellers and standardised listings produce a warranty. **Acquisition.** Massive advertising against foreign giants cannot be won; a trade community, garages, tradespeople, pharmacies, becomes loyal and buys every week. **Margin.** A low commission on generic products does not cover logistics; the vertical charges for services, heavy delivery, financing, warranty, after-sales, that the generalist could not promise. **The 2027 framework.** Foreign platforms must now register and collect VAT; a local platform born compliant starts level, and on its own ground.",
      ] },
      { heading: 'Four verticals where a marketplace holds in 2027', body: [
        "The common point of the four: a buyer who comes back, a product that demands a warranty, logistics that can be mastered.",
      ], visual: 'verticals', after: [
        "**Auto parts and equipment** have a technical catalogue by vehicle, professional sellers and garages ordering every week; refusal is rare there because the part is expected. **Building materials and tools** have tradespeople and contractors ordering on a recurring basis, heavy delivery organised with dedicated carriers, and supplier credit that is the platform's real value. **Parapharmacy and health** have verified pharmacies, regulated products, controlled delivery and a prescription when required; it is the most demanding vertical and the one where a serious platform has no credible competitor, we saw it from the inside with [the pharmacy with three branches](/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/). **Refurbished appliances and electronics** live off what the generalist could not offer: warranty, after-sales and instalment payment.",
        "What these four are not: cheap fashion, gadgets, products that foreign platforms deliver cheaper from abroad. On that ground, [classifieds between individuals](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/) and Instagram keep the advantage.",
      ] },
      { heading: 'The stack to build', body: [
        "Five layers. The two that sank the generalist, payment and logistics, are the ones a vertical can master because it is small.",
      ], visual: 'stack', after: [
        "**Buyers** have an app and a site in Arabic and French, a standardised catalogue, part by vehicle, material by unit, product by reference, prices shown including tax and reviews verified after real delivery. **Verified sellers** have an extranet, stock, orders, statements, invoices, and pass a verification, register, identity, first human check, because the first fraudulent seller costs the trust of a hundred buyers. **Payment** goes through the platform, CIB, Edahabia, QR, with escrow until delivery, and a deposit or recorded cash on delivery to reduce refusal at the source; the full circuit is in [our marketplace guide](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/). **Logistics** relies on contracted partner carriers, with confirmation before pickup, tracking, returns and payment at the door via SoftPos and QR from 2027, as described in [the delivery platform](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). **Compliance and AI** close the stack: platform registered with the tax administration, commissions invoiced with VAT, annual declaration produced by the system, data hosted under Law 18-07; automated order confirmation and AI refusal prediction.",
        "A project of this scope, two apps, escrow, extranet, integrated logistics, sits in category 3 of our [price grid](/blog/prix-application-mobile-algerie-2026/), with a total price written before starting.",
      ] },
      { heading: 'The calendar: one vertical, one city, nine months', body: [
        "The fifty sellers are recruited before the code, and the carriers are contracted before the pilot.",
      ], visual: 'timeline', after: [
        "**Months 1 and 2: the choice of vertical and fifty sellers** recruited by hand, garages, materials wholesalers, pharmacies or refurbishers, by understanding what they lose today: phone orders, unpaid bills, failed deliveries. **Months 2 to 4: payment and carriers**, online-merchant status through the bank and GIE Monétique, escrow, delivery contracts for the pilot city. **Months 3 to 6: development of both sides** and the standardised catalogue. **Months 7 and 8: the pilot**, Algiers and one category, with three numbers measured every week, refusal rate, delivery time, number of disputes. **Month 9: the second city or the second category**, only if the pilot holds its numbers.",
        "If you are a diaspora founder, recruiting sellers and contracting carriers are what require being there; we placed those trips in [the 2027 calendar](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).",
      ] },
      { heading: 'The mistakes we see after Jumia', body: [], list: [
        "**Wanting to replace Jumia.** One more generalist loses on the same rows. One vertical, one city.",
        "**Opening to every seller.** Counterfeits arrive in the first week. Fifty verified sellers, then the next ones on file.",
        "**Living off cash on delivery.** That is the model that just closed. Deposit, electronic payment, confirmation before pickup.",
        "**Building your own delivery fleet at launch.** It costs before it serves. Contracted partner carriers, own fleet later, if volumes justify it.",
        "**Competing with foreign platforms on price.** They deliver cheaper from abroad. The vertical sells warranty, after-sales, credit, immediate availability.",
        "**Ignoring the 2027 framework.** Registration, VAT on commissions, annual declaration. Born compliant, or caught up with.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Why did Jumia leave Algeria?', a: 'According to the February 2026 announcement reported by the press, Algeria represented a marginal share of the group’s volume, around two percent, and the group was refocusing on its key markets to aim for profitability in 2027. The underlying reasons are the market’s: electronic payment still a minority among merchants, cash on delivery and refusals, costly logistics, pressure from Chinese platforms.' },
        { q: 'Should we build the Algerian Amazon?', a: 'No. The generalist loses on every row, payment, logistics, catalogue, acquisition, margin, because it has to do everything everywhere. The marketplace that holds in 2027 is vertical, with a recurring buyer, a product that demands a warranty and mastered logistics.' },
        { q: 'Which verticals hold in Algeria?', a: 'Auto parts and equipment, building materials and tools for tradespeople, parapharmacy and health, refurbished appliances and electronics. Their common point: a professional or recurring buyer, a product that demands a warranty, logistics that can be mastered.' },
        { q: 'How do you avoid refusals at delivery?', a: 'By addressing recurring buyers who accept a deposit or pay electronically, by confirming every order before pickup, and by recording cash on delivery when it remains. Refusal is decided at confirmation, not at the door.' },
        { q: 'What does the 2027 finance bill change?', a: 'The text, still a bill, plans the registration of platforms with the tax administration, an annual declaration of their sellers’ operations, and VAT on sales made through them and on their commissions, for foreign and local platforms alike. A platform born compliant starts level.' },
        { q: 'How long to launch a vertical marketplace?', a: 'Nine months: choice of vertical and fifty sellers recruited in two months, payment and partner carriers by month four, development by month six, pilot in one city and one category in months seven and eight, extension in month nine if the pilot holds its numbers.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The generalist loses on every line because it has to do everything everywhere. The vertical wins because it chooses.' },
      { after: 3, text: 'The two layers that sank the generalist are the ones a vertical can master because it is small.' },
    ],
    cta: { eyebrow: 'Describe your vertical', title: 'The category, the sellers you already know, the city, and how your buyers pay today. We return the payment circuit, the partner logistics to contract, what the two apps must contain, and the written total price.', body: 'Symloop designs vertical marketplaces for Algeria: buyer app and site in Arabic and French, seller extranet, verification, CIB/Edahabia and QR payment with escrow, carrier integration, AI confirmation and refusal prediction, 2027 finance bill and Law 18-07 compliance. Senior engineers in Algiers and Setif, written scoping, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'A marketplace in Algeria in 2027: how the money flows' },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'A delivery platform in Algeria in 2027' },
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'Problem', name: 'Orders refused at delivery' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'Series', name: 'Leboncoin and Vinted in Algeria' },
    ] },
  },
  ar: {
    kind: 'سلسلة · رأيناه في فرنسا، نبنيه في الجزائر · #07', title: 'بعد جوميا: إنشاء سوق التجارة الإلكترونية في الجزائر سنة 2027، متخصصة، باللوجستيك والدفع المضبوطين.',
    dek: 'في فيفري 2026 أعلنت جوميا نهاية أنشطتها في الجزائر بعد أربعة عشر عاماً، وعاد بائعوها إلى إنستغرام وواتساب. ومنذ ذلك الحين يتكرر السؤال في كل محادثة تقريباً مع مؤسس: هل نبني «أمازون الجزائرية»، أم أن السوق أجابت أصلاً؟ لماذا لم تصمد السوق العامة، ما تغيّره السوق المتخصصة، المجالات الأربعة التي تصمد فيها في 2027، الطبقات التي تُبنى، والجدول.',
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'سيملوب', about: ['تجارة إلكترونية', 'سوق إلكترونية', 'جوميا', 'لوجستيك', 'الجزائر 2027'],
    intro: [
      '**الجواب المختصر.** لا تبنِ أمازون الجزائرية. تخسر السوق العامة في كل سطر لأنها مضطرة لفعل كل شيء في كل مكان: تحصيل النقد عند الاستلام في كامل التراب، توصيل كل المنتجات إلى كل الولايات، التحقق من آلاف البائعين، وشراء الزيارات في مواجهة عمالقة صينيين يبيعون أرخص. **السوق التي تصمد في الجزائر سنة 2027 متخصصة: فئة يكون فيها المشتري محترفاً أو متكرراً، ويتطلب فيها المنتج ضماناً، ويمكن فيها ضبط اللوجستيك، قطع غيار السيارات، مواد البناء والعدد، شبه الصيدلة، الأجهزة المجدَّدة.** لديها خمسون بائعاً متحقَّقاً منهم قبل أول سطر كود، دفع يقلّل الرفض من المصدر، ناقلون شركاء، وتولد مطابقة للإطار الذي يفرضه مشروع قانون المالية 2027 الآن على المنصات الأجنبية أيضاً.',
      'هذا الدليل السابع في سلسلتنا عن النماذج المرئية في فرنسا لبنائها في الجزائر، ويستند إلى ثلاث صفحات كُتبت قبله: [كيف يتحرك المال في سوق إلكترونية](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/)، [منصة التوصيل في 2027](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/)، و[الطلبات المرفوضة عند التسليم](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/).',
    ],
    sections: [
      { heading: 'ما حدث، وما يقوله عن السوق', body: [
        'الوقائع كما نقلتها الصحافة الاقتصادية في فيفري 2026: أعلنت جوميا وقف أنشطتها الجزائرية بعد أربعة عشر عاماً، مع سوق خارج الخط ابتداءً من 10 مارس 2026 وفسخ عقود البائعين. وأوضحت المجموعة أن الجزائر تمثل حصة هامشية من حجم أعمالها، نحو اثنين بالمئة حسب المصادر، وأنها تعيد التركيز على أسواقها الرئيسية لاستهداف الربحية في 2027.',
      ], after: [
        'أما الأسباب العميقة فهي التي يعرفها كل تاجر إلكتروني جزائري: دفع إلكتروني ما زال أقلية لدى التجار وقت القرار، ما أجبر المنصة على العيش من النقد عند الاستلام وبالتالي من الرفض؛ لوجستيك وطني مكلف لسلال صغيرة؛ وضغط على الأسعار من منصات صينية توصّل من الخارج. تتموضع جهات دولية ومحلية لملء الفراغ، ومشروع قانون المالية 2027 يلحق بها: تعريف لدى الضرائب، تصريح سنوي، TVA على المبيعات والعمولات، للمنصات الأجنبية والمحلية على السواء. بالنسبة لمؤسس جزائري، هذه سوق أصدرت للتو حكمها على النموذج العام، لا على التجارة الإلكترونية.',
      ] },
      { heading: 'لماذا لم تصمد السوق العامة، وما تغيّره المتخصصة', body: [
        'ستة أسطر وعمودان. لم تخسر السوق العامة في سطر واحد بل في كلها، لأنها متماسكة.',
      ], visual: 'why', after: [
        '**الدفع.** تعيش السوق العامة من النقد عند الاستلام، وبالتالي من الرفض عند الباب، وبالتالي من سيولة ثقيلة وهامش تأكله المحاولات غير المجدية. تتوجه المتخصصة إلى مشترٍ محترف أو متكرر يقبل عربوناً أو يدفع إلكترونياً عبر CIB أو الذهبية أو QR لأنه سيشتري مجدداً الشهر المقبل؛ ومشروع قانون المالية 2027 يدفع زبائنها نحو التحصيل الإلكتروني. **اللوجستيك.** توصّل السوق العامة كل شيء في كل مكان بمحاور في كل ولاية لا تملؤها؛ تبدأ المتخصصة في مدينة واحدة بفئة تعرف وزنها وحجمها وهشاشتها وبناقلين شركاء متعاقَد معهم قبل التجربة. **الكتالوج.** آلاف البائعين والبطاقات المتفاوتة تنتج تقليداً ونزاعات؛ خمسون بائعاً متحقَّقاً منهم وبطاقات موحَّدة تنتج ضماناً. **الاكتساب.** الإعلانات الضخمة ضد عمالقة أجانب لا تُربح؛ مجتمع مهني، ميكانيكيون، حرفيون، صيدليات، يصبح وفياً ويشتري كل أسبوع. **الهامش.** عمولة ضعيفة على منتجات عامة لا تغطي اللوجستيك؛ تفوتر المتخصصة خدمات، توصيل ثقيل، تمويل، ضمان، خدمة ما بعد البيع، لم تستطع السوق العامة الوعد بها. **إطار 2027.** باتت المنصات الأجنبية ملزمة بالتعريف وتحصيل TVA؛ ومنصة محلية تولد مطابقة تنطلق على قدم المساواة وفي أرضها.',
      ] },
      { heading: 'أربعة مجالات تصمد فيها سوق إلكترونية في 2027', body: [
        'القاسم المشترك بين الأربعة: مشترٍ يعود، منتج يتطلب ضماناً، لوجستيك يمكن ضبطه.',
      ], visual: 'verticals', after: [
        '**قطع غيار السيارات والتجهيزات** لها كتالوج تقني حسب المركبة وبائعون محترفون وميكانيكيون يطلبون كل أسبوع؛ الرفض نادر فيها لأن القطعة منتظَرة. **مواد البناء والعدد** لها حرفيون ومقاولون يطلبون بشكل متكرر، توصيل ثقيل يُنظَّم مع ناقلين مخصصين، وائتمان مورّد هو القيمة الحقيقية للمنصة. **شبه الصيدلة والصحة** لها صيدليات متحقَّق منها ومنتجات منظَّمة وتوصيل مراقَب ووصفة عند الحاجة؛ هي المجال الأكثر تطلباً والذي لا منافس جدياً فيه لمنصة جادة، ورأيناه من الداخل مع [الصيدلية بثلاث وكالات](/blog/pharmacie-trois-officines-stock-excel-dates-de-peremption-algerie-2026/). **الأجهزة الكهرومنزلية والإلكترونيات المجدَّدة** تعيش مما لم تستطع السوق العامة تقديمه: الضمان وخدمة ما بعد البيع والدفع بالتقسيط.',
        'ما ليست هذه الأربعة: الموضة الرخيصة، الأدوات الصغيرة، المنتجات التي توصّلها المنصات الأجنبية أرخص من الخارج. في هذا الميدان تحتفظ [الإعلانات بين الأفراد](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/) وإنستغرام بالأفضلية.',
      ] },
      { heading: 'الطبقات التي تُبنى', body: [
        'خمس طبقات. الطبقتان اللتان أغرقتا السوق العامة، الدفع واللوجستيك، هما ما تستطيع المتخصصة ضبطه لأنها صغيرة.',
      ], visual: 'stack', after: [
        '**المشترون** لهم تطبيق وموقع بالعربية والفرنسية، كتالوج موحَّد، قطعة حسب المركبة، مادة حسب الوحدة، منتج حسب المرجع، أسعار معروضة شاملة الرسوم وتقييمات موثَّقة بعد تسليم حقيقي. **البائعون المتحقَّق منهم** لهم بوابة، مخزون، طلبات، كشوف، فواتير، ويمرون بتحقق، سجل، هوية، مراقبة بشرية أولى، لأن أول بائع محتال يكلّف ثقة مئة مشترٍ. **الدفع** يمر عبر المنصة، CIB، الذهبية، QR، بحجز حتى التسليم، وعربون أو دفع عند الاستلام مسجَّل لتقليل الرفض من المصدر؛ الدورة الكاملة في [دليلنا للأسواق الإلكترونية](/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/). **اللوجستيك** يعتمد على ناقلين شركاء متعاقَد معهم، بتأكيد قبل الجمع وتتبع ومرتجعات ودفع عند الباب بـSoftPos وQR ابتداءً من 2027، كما وُصف في [منصة التوصيل](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). **الامتثال والذكاء الاصطناعي** يختمان الطبقات: منصة معرَّفة لدى الضرائب، عمولات مفوترة بـTVA، تصريح سنوي ينتجه النظام، بيانات مستضافة وفق القانون 18-07؛ تأكيد آلي للطلبات وتوقّع للرفض بالذكاء الاصطناعي.',
        'مشروع بهذا النطاق، تطبيقان، حجز، بوابة، لوجستيك مدمج، يقع في الفئة 3 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)، بسعر إجمالي مكتوب قبل البدء.',
      ] },
      { heading: 'الجدول: مجال واحد، مدينة واحدة، تسعة أشهر', body: [
        'يُجنَّد البائعون الخمسون قبل الكود، ويُتعاقد مع الناقلين قبل التجربة.',
      ], visual: 'timeline', after: [
        '**الشهران 1 و2: اختيار المجال وخمسون بائعاً** مجنَّدون يدوياً، ميكانيكيون، تجار جملة مواد، صيدليات أو مجدِّدون، بفهم ما يخسرونه اليوم: طلبات بالهاتف، ديون، توصيلات فاشلة. **الأشهر 2 إلى 4: الدفع والناقلون**، صفة التاجر الإلكتروني عبر البنك وGIE Monétique، حجز، عقود توصيل للمدينة التجريبية. **الأشهر 3 إلى 6: تطوير الوجهين** والكتالوج الموحَّد. **الشهران 7 و8: التجربة**، الجزائر العاصمة وفئة واحدة، بثلاثة أرقام تُقاس كل أسبوع، نسبة الرفض، أجل التوصيل، عدد النزاعات. **الشهر 9: المدينة الثانية أو الفئة الثانية**، فقط إن حافظت التجربة على أرقامها.',
        'إن كنت مؤسساً من الجالية، فتجنيد البائعين وعقود النقل هما ما يتطلب الحضور؛ وضعنا هذه الرحلات في [جدول 2027](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).',
      ] },
      { heading: 'الأخطاء التي نراها بعد جوميا', body: [], list: [
        '**الرغبة في تعويض جوميا.** سوق عامة أخرى تخسر في الأسطر نفسها. مجال واحد، مدينة واحدة.',
        '**الفتح لكل البائعين.** يصل التقليد في الأسبوع الأول. خمسون بائعاً متحقَّقاً منهم، ثم التالون على ملف.',
        '**العيش من النقد عند الاستلام.** هذا النموذج الذي أغلق للتو. عربون، دفع إلكتروني، تأكيد قبل الجمع.',
        '**بناء أسطول توصيل خاص عند الإطلاق.** يكلّف قبل أن يخدم. ناقلون شركاء متعاقَد معهم، وأسطول خاص لاحقاً إن بررته الأحجام.',
        '**منافسة المنصات الأجنبية على السعر.** توصّل أرخص من الخارج. تبيع المتخصصة الضمان وخدمة ما بعد البيع والائتمان والتوفر الفوري.',
        '**تجاهل إطار 2027.** تعريف، TVA على العمولات، تصريح سنوي. مولودة مطابقة، أو ملحوق بها.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'لماذا غادرت جوميا الجزائر؟', a: 'حسب إعلان فيفري 2026 الذي نقلته الصحافة، كانت الجزائر تمثل حصة هامشية من حجم المجموعة، نحو اثنين بالمئة، وكانت المجموعة تعيد التركيز على أسواقها الرئيسية لاستهداف الربحية في 2027. الأسباب العميقة هي أسباب السوق: دفع إلكتروني ما زال أقلية لدى التجار، نقد عند الاستلام ورفض، لوجستيك مكلف، ضغط المنصات الصينية.' },
        { q: 'هل نبني أمازون الجزائرية؟', a: 'لا. تخسر السوق العامة في كل سطر، دفع، لوجستيك، كتالوج، اكتساب، هامش، لأنها مضطرة لفعل كل شيء في كل مكان. السوق التي تصمد في 2027 متخصصة، بمشترٍ متكرر ومنتج يتطلب ضماناً ولوجستيك مضبوط.' },
        { q: 'أي المجالات تصمد في الجزائر؟', a: 'قطع غيار السيارات والتجهيزات، مواد البناء والعدد للحرفيين، شبه الصيدلة والصحة، الأجهزة الكهرومنزلية والإلكترونيات المجدَّدة. قاسمها المشترك: مشترٍ محترف أو متكرر، منتج يتطلب ضماناً، لوجستيك يمكن ضبطه.' },
        { q: 'كيف نتفادى الرفض عند التسليم؟', a: 'بالتوجه إلى مشترين متكررين يقبلون عربوناً أو يدفعون إلكترونياً، وبتأكيد كل طلب قبل الجمع، وبتسجيل الدفع عند الاستلام حين يبقى. يُقرَّر الرفض عند التأكيد لا عند الباب.' },
        { q: 'ما الذي يغيّره مشروع قانون المالية 2027؟', a: 'ينص النص، وهو ما زال مشروعاً، على تعريف المنصات لدى الضرائب، وتصريح سنوي بعمليات بائعيها، وTVA على المبيعات المنجزة عبرها وعلى عمولاتها، للمنصات الأجنبية والمحلية على السواء. المنصة المولودة مطابقة تنطلق على قدم المساواة.' },
        { q: 'كم من الوقت لإطلاق سوق متخصصة؟', a: 'تسعة أشهر: اختيار المجال وتجنيد خمسين بائعاً في شهرين، الدفع والناقلون الشركاء حتى الشهر الرابع، التطوير حتى السادس، تجربة في مدينة وفئة في الشهرين السابع والثامن، التوسع في التاسع إن حافظت التجربة على أرقامها.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'تخسر السوق العامة في كل سطر لأنها مضطرة لفعل كل شيء في كل مكان. وتربح المتخصصة لأنها تختار.' },
      { after: 3, text: 'الطبقتان اللتان أغرقتا السوق العامة هما ما تستطيع المتخصصة ضبطه لأنها صغيرة.' },
    ],
    cta: { eyebrow: 'صف مجالك', title: 'الفئة، البائعون الذين تعرفهم أصلاً، المدينة، وكيف يدفع مشتروك اليوم. نعيد إليك دورة الدفع، اللوجستيك الشريك الذي يجب التعاقد معه، ما يجب أن يحتويه التطبيقان، والسعر الإجمالي المكتوب.', body: 'تصمم سيملوب الأسواق المتخصصة للجزائر: تطبيق وموقع للمشتري بالعربية والفرنسية، بوابة بائع، تحقق، دفع CIB/الذهبية وQR بحجز، دمج الناقلين، تأكيد وتوقّع رفض بالذكاء الاصطناعي، امتثال لمشروع قانون المالية 2027 والقانون 18-07. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/', kind: '2027', name: 'سوق إلكترونية في الجزائر 2027: كيف يتحرك المال' },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'منصة توصيل في الجزائر سنة 2027' },
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'مشكلة', name: 'الطلبات المرفوضة عند التسليم' },
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'سلسلة', name: 'لوبونكوان وفينتد في الجزائر' },
    ] },
  },
};

const KEYWORDS = "équivalent jumia algérie 2027, créer marketplace e-commerce algérie, marketplace verticale algérie, jumia algérie fermeture remplaçant, plateforme e-commerce algérie 2027, marketplace pièces auto algérie, marketplace matériaux construction algérie, parapharmacie en ligne algérie plateforme, after jumia marketplace algeria 2027, بديل جوميا الجزائر 2027 سوق إلكترونية";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
