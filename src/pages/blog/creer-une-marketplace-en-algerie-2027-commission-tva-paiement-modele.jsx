import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele.mjs';

const SLUG = 'creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele';
const FIGURES = ['money', 'revenue', 'inside', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · Plateforme de mise en relation', title: "Créer une marketplace en Algérie en 2027 : comment l'argent circule, quel modèle de revenu tient, et ce que le PLF 2027 impose aux plateformes.",
    dek: "Vous voulez mettre en relation des vendeurs et des acheteurs, des artisans et des particuliers, des médecins et des patients, des propriétaires et des locataires. Vous avez peut-être déjà un groupe Facebook ou une page Instagram qui le fait, gratuitement, et vous vous demandez comment en faire une entreprise : comment l'argent passe, comment vous êtes payé, et ce que le fisc attend d'une plateforme en 2027. Le circuit de l'argent, les modèles de revenu qui tiennent, ce qu'il y a dans la plateforme, les obligations du projet de loi de finances 2027, et le calendrier.",
    publishedAt: 'Octobre 2026', readTime: '12 min de lecture', author: 'Symloop', about: ['Marketplace', 'Plateforme', 'Commission', 'PLF 2027', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une marketplace existe le jour où l'argent passe par elle. **Le client paie la plateforme**, par carte CIB/Edahabia, par QR ou en espèces à la livraison enregistrées ; **la plateforme garde l'argent en séquestre** jusqu'à la livraison ou au rendez-vous et facture sa commission au vendeur, avec TVA ; **le vendeur livre, le client confirme** ; **la plateforme reverse** au vendeur, commission déduite. Celle qui laisse le client payer le vendeur directement n'a ni commission, ni données, ni raison d'exister. En 2027, le projet de loi de finances ajoute trois obligations aux plateformes, locales comme étrangères : s'identifier auprès de l'administration fiscale, déclarer chaque année les opérations de leurs vendeurs, et appliquer la TVA aux ventes et aux commissions. Un seul modèle de revenu au lancement, trente vendeurs recrutés à la main avant le code, une ville, une catégorie.",
      "Ce guide est le socle de notre série sur les modèles vus en France à construire en Algérie, [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/), [Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/), [Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/), [Leboncoin et Vinted](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/), [Uber et BlaBlaCar](/blog/creer-equivalent-uber-blablacar-algerie-2026/) : chacun est une marketplace, et tous butent sur les mêmes trois questions, l'argent, la confiance et le démarrage.",
    ],
    sections: [
      { heading: "Ce que le PLF 2027 impose aux plateformes", body: [
        "Le projet de loi de finances 2027, tel que la presse économique l'a détaillé en octobre 2026, consacre pour la première fois un régime aux plateformes de mise en relation. C'est un projet, amendable jusqu'au vote, et les numéros d'articles varient selon les sources ; les trois mesures, elles, sont constantes.",
      ], list: [
        "**L'identification.** Tout opérateur de plateforme, résident ou non, qui met en relation des vendeurs ou des prestataires avec des clients pour des opérations réalisées en Algérie devrait s'identifier auprès de l'administration fiscale, sur une procédure dédiée.",
        "**La déclaration annuelle.** Au plus tard le 31 janvier de chaque année, la plateforme transmettrait une déclaration des opérations réalisées par ses vendeurs et prestataires. Autrement dit : la plateforme devient la source du fisc sur ce que ses vendeurs ont vendu.",
        "**La TVA.** Les ventes de biens et les prestations réalisées à travers des plateformes de commerce électronique, locales ou étrangères, ainsi que les commissions perçues par les opérateurs, seraient soumises à la TVA. Les plateformes étrangères sans établissement en Algérie devraient s'enregistrer, déclarer leur chiffre d'affaires algérien et reverser la taxe. Une amende est évoquée pour les manquements.",
      ], after: [
        "Pour un fondateur algérien, c'est une bonne nouvelle déguisée en contrainte. Les plateformes étrangères qui vendaient aux Algériens sans TVA ni déclaration entrent dans le même cadre que vous ; et une plateforme qui, dès le premier jour, facture ses commissions avec TVA, tient le relevé de chaque vendeur et peut produire sa déclaration de janvier en un clic, a un avantage sur le groupe Facebook qui fera la même chose dans la douleur. Ces obligations se construisent dans le produit, pas dans un tableur en décembre.",
      ] },
      { heading: "Comment l'argent circule, étape par étape", body: [
        "La question « comment je suis payé » a une seule bonne réponse : l'argent passe par vous. Voici le circuit, et pourquoi chaque étape existe.",
      ], visual: 'money', after: [
        "**Le client paie la plateforme.** Par carte CIB/Edahabia grâce à votre statut de web-marchand, par QR DZMobPay devenu interopérable entre les banques, ou en espèces à la livraison ; dans ce dernier cas, le livreur ou le vendeur enregistre l'encaissement dans l'application et le paiement à la livraison reste tracé. **La plateforme garde l'argent** jusqu'à ce que la prestation soit faite : c'est le séquestre, et c'est ce qui donne au client une raison de payer par la plateforme plutôt que de main à main. La commission est facturée au vendeur à chaque transaction, avec TVA, et apparaît sur son relevé. **Le vendeur livre, le client confirme** dans l'application, ou un délai automatique confirme à sa place ; un litige ouvert bloque l'argent. **La plateforme reverse** par virements groupés, à J+2 ou J+7, commission déduite, avec un relevé mensuel qui servira à la déclaration de janvier.",
        "Le contournement est le risque numéro un : le client et le vendeur se trouvent sur votre plateforme et concluent sur WhatsApp. Il se combat par ce que seule la plateforme offre, le séquestre qui protège le client, la facture et le relevé qui protègent le vendeur, l'avis qui construit sa réputation, et par une commission raisonnable, parce qu'une commission trop élevée est une invitation à vous contourner.",
      ] },
      { heading: 'Les modèles de revenu, et lesquels tiennent en Algérie', body: [
        "Six façons de gagner de l'argent avec une marketplace. Trois tiennent dès le lancement, deux parfois, une jamais au départ.",
      ], visual: 'revenue', after: [
        "**La commission sur transaction** tient dès que l'argent passe par la plateforme, et seulement dans ce cas. **L'abonnement vendeur professionnel** tient avec des vendeurs qui vivent de vous : agences immobilières, cabinets médicaux, boutiques ; nous avons détaillé [qui paie un abonnement en Algérie en 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **La mise en avant payée** est le modèle qui a fait les grands sites d'annonces, Ouedkniss en tête, et il exige du trafic avant tout. **Le lead payé** marche en B2B et sur les services à forte valeur, travaux, équipement, assurance, où une mise en relation vaut un devis. **Les frais côté client** se tolèrent s'ils sont faibles et visibles ; au-delà, le client passe par WhatsApp. **La publicité** ne rapporte rien avant des centaines de milliers de visites par mois.",
        "La règle : un modèle au lancement, celui qui correspond à votre catégorie. Une plateforme de services à domicile vit de la commission ; une plateforme immobilière, de l'abonnement des agences ; une plateforme d'annonces entre particuliers, de la mise en avant. Les trois à la fois le premier jour, c'est aucun.",
      ] },
      { heading: "Ce qu'il y a dans une plateforme de mise en relation", body: [
        "Deux applications visibles, trois couches invisibles. Les vendeurs paient pour les trois couches invisibles.",
      ], visual: 'inside', after: [
        "**Les deux faces** sont l'application client, recherche, commande ou réservation, paiement, suivi, en arabe et en français, et l'application ou le portail vendeur, annonces, commandes, agenda, relevés et reversements. **La confiance** est ce qui fait qu'un client paie un inconnu : vérification des vendeurs avec un premier contrôle humain, avis après transaction, litiges avec argent bloqué. **L'argent** est le circuit décrit plus haut, encaissement, séquestre, commission facturée, reversements groupés. **Les opérations** sont le support en arabe, français et darija, humain au départ puis assisté par IA sur vos règles, et la logistique si vous vendez des biens, transporteurs, paiement à la livraison et retours ; nous avons détaillé [comment réduire les commandes refusées à la livraison](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/). **La conformité** est la couche que le PLF 2027 rend obligatoire : plateforme identifiée au fisc, déclaration annuelle produite par le système, données hébergées dans le respect de la loi 18-07.",
        "Un projet de ce périmètre, deux applications, séquestre et reversements, back-office, se situe en catégorie 3 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/) ; il se cadre par écrit avec un prix total avant de commencer, et les [sept décisions d'une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/) s'appliquent aux deux faces.",
      ] },
      { heading: "L'œuf et la poule : une ville, une catégorie, trente vendeurs avant le code", body: [
        "Toutes les marketplaces ont le même problème de démarrage : sans vendeurs, pas de clients ; sans clients, pas de vendeurs. La réponse n'est pas technique.",
      ], visual: 'timeline', after: [
        "**Les trente premiers vendeurs se recrutent à la main, avant toute ligne de code**, dans une ville et une catégorie : les plombiers d'Alger-Est, les cabinets dentaires de Sétif, les locations meublées d'Oran. Vous les rencontrez, vous comprenez comment ils encaissent et ce qu'ils perdent, et vous leur promettez des clients, pas une application. **En parallèle**, la société, le statut de web-marchand via la banque et le GIE Monétique, et l'identification de la plateforme auprès du fisc. **De mars à juin**, le développement des deux faces et du séquestre. **Juillet-août**, le pilote : trente vendeurs, de vraies transactions, de vrais litiges, de vrais reversements chaque semaine. **Septembre**, la deuxième catégorie ou la deuxième ville, seulement si le pilote reverse de l'argent chaque semaine. Une marketplace vide le jour du lancement ne se remplit jamais ; une marketplace avec trente vendeurs actifs dans un quartier se remplit toute seule.",
        "Si vous construisez depuis la France, le recrutement des vendeurs est précisément ce qui exige d'être sur place ; nous avons placé ces voyages dans [le calendrier 2027 du fondateur de la diaspora](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).",
      ] },
      { heading: 'Les erreurs que nous voyons dans les marketplaces algériennes', body: [], list: [
        "**Laisser le client payer le vendeur directement.** Pas de commission, pas de données, pas de plateforme. L'argent passe par vous, avec séquestre.",
        "**Lancer avec trois modèles de revenu.** Commission, abonnement et mise en avant le premier jour : les vendeurs ne comprennent pas ce qu'ils paient. Un modèle, celui de votre catégorie.",
        "**Ouvrir tout le pays et toutes les catégories.** Dix vendeurs par wilaya, aucun client servi. Une ville, une catégorie, trente vendeurs actifs.",
        "**Une commission trop élevée.** C'est une invitation à vous contourner sur WhatsApp. La commission se compare à ce que le vendeur gagne grâce à vous.",
        "**Vérifier personne.** Le premier vendeur frauduleux coûte la confiance de cent clients. Identité, registre, premier contrôle humain.",
        "**Découvrir la déclaration de janvier en décembre.** Relevés par vendeur et commissions avec TVA se construisent dans le produit dès le premier jour.",
        "**Développer avant de recruter les vendeurs.** L'application est prête, elle est vide. Trente vendeurs d'abord.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Comment une marketplace gagne-t-elle de l'argent en Algérie ?", a: "Par la commission sur chaque transaction quand l'argent passe par la plateforme, par l'abonnement des vendeurs professionnels qui vivent d'elle, ou par la mise en avant payée quand elle a du trafic. Un seul modèle au lancement, celui de votre catégorie. La publicité ne rapporte rien avant des centaines de milliers de visites par mois." },
        { q: "Comment fonctionne le paiement avec séquestre ?", a: "Le client paie la plateforme, par carte CIB/Edahabia, QR DZMobPay ou espèces à la livraison enregistrées. La plateforme garde l'argent jusqu'à la livraison ou au rendez-vous, facture sa commission au vendeur avec TVA, puis reverse au vendeur par virement à J+2 ou J+7. Un litige bloque l'argent." },
        { q: "Que change le projet de loi de finances 2027 pour une plateforme ?", a: "Le texte, encore un projet, prévoit que les plateformes locales et étrangères s'identifient auprès de l'administration fiscale, transmettent avant le 31 janvier une déclaration annuelle des opérations de leurs vendeurs, et appliquent la TVA aux ventes réalisées à travers elles et à leurs commissions. Ces obligations se construisent dans le produit." },
        { q: "Comment éviter que clients et vendeurs se contournent sur WhatsApp ?", a: "Par ce que seule la plateforme offre : le séquestre qui protège le client, la facture et le relevé qui protègent le vendeur, les avis qui construisent la réputation, et une commission raisonnable. Une commission trop élevée est une invitation au contournement." },
        { q: "Par où commencer une marketplace ?", a: "Par trente vendeurs recrutés à la main dans une ville et une catégorie, avant toute ligne de code. En parallèle, la société, le statut de web-marchand et l'identification de la plateforme. Puis le développement, le pilote en été, et la deuxième catégorie seulement si le pilote reverse de l'argent chaque semaine." },
        { q: "Faut-il gérer la livraison soi-même ?", a: "Si vous vendez des biens, la logistique fait partie de la plateforme : transporteurs partenaires, paiement à la livraison enregistré, retours. Si vous mettez en relation des services ou des rendez-vous, il n'y a pas de livraison, mais il y a la confirmation du client et le litige." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Une marketplace existe le jour où l'argent passe par elle." },
      { after: 4, text: "Une marketplace vide le jour du lancement ne se remplit jamais ; une marketplace avec trente vendeurs actifs dans un quartier se remplit toute seule." },
    ],
    cta: { eyebrow: 'Décrivez votre plateforme', title: "Qui vous mettez en relation avec qui, dans quelle ville, et comment l'argent devrait circuler. Nous vous rendons le modèle de revenu adapté à votre catégorie, le circuit de paiement, ce que la plateforme doit contenir pour les obligations 2027, et le prix total écrit.", body: "Symloop conçoit des plateformes de mise en relation pour l'Algérie : application client et portail vendeur en arabe et en français, encaissement CIB/Edahabia et QR avec séquestre, commissions facturées avec TVA, reversements groupés, relevés et déclaration annuelle, vérification des vendeurs, litiges, support assisté par IA, hébergement conforme à la loi 18-07. Ingénieurs seniors à Alger et Sétif, cadrage écrit, code à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'Série', name: 'Leboncoin et Vinted en Algérie : la transaction protégée' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
      { href: '/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/', kind: '2027', name: 'Lancer depuis la France en 2027 : quatre voyages' },
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'Problème', name: 'Commandes refusées à la livraison' },
    ] },
  },
  en: {
    kind: 'Problem · Marketplace platform', title: 'Building a marketplace in Algeria in 2027: how the money flows, which revenue model holds, and what the 2027 finance bill imposes on platforms.',
    dek: "You want to connect sellers and buyers, tradespeople and households, doctors and patients, owners and tenants. You may already have a Facebook group or an Instagram page doing it for free, and you wonder how to turn it into a company: how the money passes, how you get paid, and what the tax administration expects from a platform in 2027. The money circuit, the revenue models that hold, what is inside the platform, the obligations of the 2027 finance bill, and the calendar.",
    publishedAt: 'October 2026', readTime: '12 min read', author: 'Symloop', about: ['Marketplace', 'Platform', 'Commission', '2027 finance bill', 'Algeria 2027'],
    intro: [
      "**Short answer.** A marketplace exists the day the money goes through it. **The customer pays the platform**, by CIB/Edahabia card, by QR or by recorded cash on delivery; **the platform holds the money in escrow** until delivery or the appointment and invoices its commission to the seller, with VAT; **the seller delivers, the customer confirms**; **the platform pays out** to the seller, commission deducted. One that lets the customer pay the seller directly has no commission, no data and no reason to exist. In 2027 the finance bill adds three obligations for platforms, local and foreign alike: register with the tax administration, declare their sellers' operations every year, and apply VAT to sales and commissions. One revenue model at launch, thirty sellers recruited by hand before the code, one city, one category.",
      "This guide is the foundation of our series on models seen in France to build in Algeria, [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/), [Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/), [Airbnb](/blog/creer-equivalent-airbnb-algerie-2026/), [Leboncoin and Vinted](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/), [Uber and BlaBlaCar](/blog/creer-equivalent-uber-blablacar-algerie-2026/): each is a marketplace, and all hit the same three questions, money, trust and the cold start.",
    ],
    sections: [
      { heading: 'What the 2027 finance bill imposes on platforms', body: [
        "The 2027 finance bill, as the business press detailed it in October 2026, creates for the first time a regime for marketplace platforms. It is a bill, amendable until the vote, and article numbers vary between sources; the three measures, however, are consistent.",
      ], list: [
        "**Registration.** Any platform operator, resident or not, connecting sellers or providers with customers for operations carried out in Algeria would have to register with the tax administration through a dedicated procedure.",
        "**Annual declaration.** By 31 January each year, the platform would submit a declaration of the operations carried out by its sellers and providers. In other words: the platform becomes the tax administration's source on what its sellers sold.",
        "**VAT.** Sales of goods and services made through e-commerce platforms, local or foreign, as well as the commissions collected by operators, would be subject to VAT. Foreign platforms without an establishment in Algeria would have to register, declare their Algerian turnover and remit the tax. A fine is mentioned for breaches.",
      ], after: [
        "For an Algerian founder this is good news dressed as a constraint. Foreign platforms that sold to Algerians without VAT or declaration enter the same framework as you; and a platform that, from day one, invoices its commissions with VAT, keeps each seller's statement and can produce its January declaration in one click has an edge over the Facebook group that will do the same thing painfully. These obligations are built into the product, not into a spreadsheet in December.",
      ] },
      { heading: 'How the money flows, step by step', body: [
        "The question “how do I get paid” has only one good answer: the money goes through you. Here is the circuit, and why each step exists.",
      ], visual: 'money', after: [
        "**The customer pays the platform.** By CIB/Edahabia card thanks to your online-merchant status, by QR DZMobPay now interoperable between banks, or by cash on delivery; in the latter case the courier or seller records the collection in the app and cash on delivery stays traced. **The platform holds the money** until the service is done: that is escrow, and it is what gives the customer a reason to pay through the platform rather than hand to hand. The commission is invoiced to the seller on each transaction, with VAT, and appears on their statement. **The seller delivers, the customer confirms** in the app, or an automatic delay confirms on their behalf; an open dispute freezes the money. **The platform pays out** in batched transfers, at D+2 or D+7, commission deducted, with a monthly statement that will feed the January declaration.",
        "Bypassing is risk number one: the customer and the seller meet on your platform and close on WhatsApp. It is fought with what only the platform offers, the escrow that protects the customer, the invoice and statement that protect the seller, the review that builds their reputation, and with a reasonable commission, because a commission that is too high is an invitation to bypass you.",
      ] },
      { heading: 'Revenue models, and which ones hold in Algeria', body: [
        "Six ways to make money with a marketplace. Three hold from launch, two sometimes, one never at the start.",
      ], visual: 'revenue', after: [
        "**Commission on transactions** holds as soon as the money goes through the platform, and only then. **Professional seller subscription** holds with sellers who live off you: real-estate agencies, medical practices, shops; we detailed [who pays a subscription in Algeria in 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **Paid promotion** is the model that built the big classifieds sites, Ouedkniss first, and it requires traffic above all. **Paid leads** work in B2B and high-value services, works, equipment, insurance, where a match is worth a quote. **Customer-side fees** are tolerated if low and visible; beyond that, the customer moves to WhatsApp. **Advertising** yields nothing before hundreds of thousands of visits a month.",
        "The rule: one model at launch, the one that fits your category. A home-services platform lives off commission; a real-estate platform, off agency subscriptions; a classifieds platform between individuals, off promotion. All three on day one means none.",
      ] },
      { heading: 'What is inside a marketplace platform', body: [
        "Two visible apps, three invisible layers. Sellers pay for the three invisible layers.",
      ], visual: 'inside', after: [
        "**The two sides** are the customer app, search, order or booking, payment, tracking, in Arabic and French, and the seller app or portal, listings, orders, calendar, statements and payouts. **Trust** is what makes a customer pay a stranger: seller verification with a first human check, reviews after transaction, disputes with frozen money. **Money** is the circuit described above, collection, escrow, invoiced commission, batched payouts. **Operations** are support in Arabic, French and darija, human at first then AI-assisted on your rules, and logistics if you sell goods, carriers, cash on delivery and returns; we detailed [how to reduce orders refused at delivery](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/). **Compliance** is the layer the 2027 finance bill makes mandatory: platform registered with the tax administration, annual declaration produced by the system, data hosted in compliance with Law 18-07.",
        "A project of this scope, two apps, escrow and payouts, back-office, sits in category 3 of our [price grid](/blog/prix-application-mobile-algerie-2026/); it is scoped in writing with a total price before starting, and the [seven decisions of a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/) apply to both sides.",
      ] },
      { heading: 'Chicken and egg: one city, one category, thirty sellers before the code', body: [
        "Every marketplace has the same cold-start problem: no sellers, no customers; no customers, no sellers. The answer is not technical.",
      ], visual: 'timeline', after: [
        "**The first thirty sellers are recruited by hand, before any line of code**, in one city and one category: plumbers in east Algiers, dental practices in Setif, furnished rentals in Oran. You meet them, you understand how they collect and what they lose, and you promise them customers, not an app. **In parallel**, the company, online-merchant status through the bank and GIE Monétique, and the platform's registration with the tax administration. **March to June**, development of both sides and the escrow. **July-August**, the pilot: thirty sellers, real transactions, real disputes, real payouts every week. **September**, the second category or second city, only if the pilot pays out money every week. A marketplace empty on launch day never fills up; a marketplace with thirty active sellers in one neighbourhood fills up by itself.",
        "If you are building from France, recruiting sellers is precisely what requires being there; we placed those trips in [the 2027 calendar of the diaspora founder](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).",
      ] },
      { heading: 'The mistakes we see in Algerian marketplaces', body: [], list: [
        "**Letting the customer pay the seller directly.** No commission, no data, no platform. The money goes through you, with escrow.",
        "**Launching with three revenue models.** Commission, subscription and promotion on day one: sellers do not understand what they pay for. One model, the one of your category.",
        "**Opening the whole country and every category.** Ten sellers per wilaya, no customer served. One city, one category, thirty active sellers.",
        "**A commission that is too high.** It is an invitation to bypass you on WhatsApp. The commission is compared to what the seller earns thanks to you.",
        "**Verifying nobody.** The first fraudulent seller costs the trust of a hundred customers. Identity, register, first human check.",
        "**Discovering the January declaration in December.** Per-seller statements and commissions with VAT are built into the product from day one.",
        "**Developing before recruiting sellers.** The app is ready, it is empty. Thirty sellers first.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'How does a marketplace make money in Algeria?', a: 'Through commission on each transaction when the money goes through the platform, through subscriptions from professional sellers who live off it, or through paid promotion once it has traffic. One model at launch, the one of your category. Advertising yields nothing before hundreds of thousands of visits a month.' },
        { q: 'How does escrow payment work?', a: 'The customer pays the platform, by CIB/Edahabia card, QR DZMobPay or recorded cash on delivery. The platform holds the money until delivery or the appointment, invoices its commission to the seller with VAT, then pays out to the seller by transfer at D+2 or D+7. A dispute freezes the money.' },
        { q: 'What does the 2027 finance bill change for a platform?', a: 'The text, still a bill, plans that local and foreign platforms register with the tax administration, submit before 31 January an annual declaration of their sellers’ operations, and apply VAT to the sales made through them and to their commissions. These obligations are built into the product.' },
        { q: 'How do I stop customers and sellers bypassing me on WhatsApp?', a: 'With what only the platform offers: the escrow that protects the customer, the invoice and statement that protect the seller, the reviews that build reputation, and a reasonable commission. A commission that is too high is an invitation to bypass.' },
        { q: 'Where do I start a marketplace?', a: 'With thirty sellers recruited by hand in one city and one category, before any line of code. In parallel, the company, online-merchant status and the platform’s registration. Then development, the pilot in summer, and the second category only if the pilot pays out money every week.' },
        { q: 'Do I have to handle delivery myself?', a: 'If you sell goods, logistics is part of the platform: partner carriers, recorded cash on delivery, returns. If you connect services or appointments, there is no delivery, but there is customer confirmation and the dispute.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'A marketplace exists the day the money goes through it.' },
      { after: 4, text: 'A marketplace empty on launch day never fills up; a marketplace with thirty active sellers in one neighbourhood fills up by itself.' },
    ],
    cta: { eyebrow: 'Describe your platform', title: 'Who you connect with whom, in which city, and how the money should flow. We return the revenue model suited to your category, the payment circuit, what the platform must contain for the 2027 obligations, and the written total price.', body: 'Symloop designs marketplace platforms for Algeria: customer app and seller portal in Arabic and French, CIB/Edahabia and QR collection with escrow, commissions invoiced with VAT, batched payouts, statements and annual declaration, seller verification, disputes, AI-assisted support, Law 18-07 compliant hosting. Senior engineers in Algiers and Setif, written scoping, code in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'Series', name: 'Leboncoin and Vinted in Algeria: the protected transaction' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
      { href: '/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/', kind: '2027', name: 'Launching from France in 2027: four trips' },
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'Problem', name: 'Orders refused at delivery' },
    ] },
  },
  ar: {
    kind: 'مشكلة · منصة وساطة', title: 'إنشاء سوق إلكترونية في الجزائر سنة 2027: كيف يتحرك المال، أي نموذج إيراد يصمد، وما يفرضه مشروع قانون المالية 2027 على المنصات.',
    dek: 'تريد الربط بين بائعين ومشترين، حرفيين وعائلات، أطباء ومرضى، ملاك ومستأجرين. ربما لديك أصلاً مجموعة فيسبوك أو صفحة إنستغرام تفعل ذلك مجاناً، وتتساءل كيف تجعلها شركة: كيف يمر المال، كيف تُدفع لك أجرتك، وما الذي تنتظره الضرائب من منصة في 2027. دورة المال، نماذج الإيراد التي تصمد، ما داخل المنصة، التزامات مشروع قانون المالية 2027، والجدول.',
    publishedAt: 'أكتوبر 2026', readTime: '12 دقيقة قراءة', author: 'سيملوب', about: ['سوق إلكترونية', 'منصة', 'عمولة', 'قانون المالية 2027', 'الجزائر 2027'],
    intro: [
      '**الجواب المختصر.** توجد السوق الإلكترونية يوم يمر المال عبرها. **الزبون يدفع للمنصة** ببطاقة CIB/الذهبية أو QR أو نقداً عند الاستلام مسجَّلاً؛ **المنصة تحتفظ بالمال محجوزاً** حتى التسليم أو الموعد وتفوتر عمولتها للبائع بـTVA؛ **البائع يسلّم والزبون يؤكد**؛ **المنصة تحوّل** للبائع بعد خصم العمولة. أما التي تترك الزبون يدفع للبائع مباشرة فلا عمولة لها ولا بيانات ولا سبب لوجودها. في 2027 يضيف مشروع قانون المالية ثلاثة التزامات على المنصات المحلية والأجنبية: التعريف لدى إدارة الضرائب، التصريح السنوي بعمليات بائعيها، وتطبيق TVA على المبيعات والعمولات. نموذج إيراد واحد عند الإطلاق، ثلاثون بائعاً مجنَّدون يدوياً قبل الكود، مدينة واحدة، فئة واحدة.',
      'هذا الدليل أساس سلسلتنا عن النماذج المرئية في فرنسا لبنائها في الجزائر، [دوكتوليب](/blog/creer-equivalent-doctolib-algerie-2026/)، [أوبر إيتس](/blog/creer-equivalent-uber-eats-algerie-2026/)، [إير بي إن بي](/blog/creer-equivalent-airbnb-algerie-2026/)، [لوبونكوان وفينتد](/blog/creer-equivalent-leboncoin-vinted-algerie-2026/)، [أوبر وبلابلاكار](/blog/creer-equivalent-uber-blablacar-algerie-2026/): كل منها سوق إلكترونية، وكلها تصطدم بالأسئلة الثلاثة نفسها، المال والثقة والانطلاق.',
    ],
    sections: [
      { heading: 'ما يفرضه مشروع قانون المالية 2027 على المنصات', body: [
        'يكرّس مشروع قانون المالية 2027، كما فصّلته الصحافة الاقتصادية في أكتوبر 2026، لأول مرة نظاماً لمنصات الوساطة. هو مشروع قابل للتعديل حتى التصويت، وأرقام المواد تختلف حسب المصادر؛ أما الإجراءات الثلاثة فثابتة.',
      ], list: [
        '**التعريف.** كل مشغّل منصة، مقيماً كان أم لا، يربط بائعين أو مقدمي خدمات بزبائن لعمليات تُنجز في الجزائر، سيكون عليه التعريف بنفسه لدى إدارة الضرائب عبر إجراء مخصص.',
        '**التصريح السنوي.** في أجل أقصاه 31 جانفي من كل سنة، ترسل المنصة تصريحاً بالعمليات التي أنجزها بائعوها ومقدمو خدماتها. بعبارة أخرى: تصبح المنصة مصدر الضرائب عمّا باعه بائعوها.',
        '**TVA.** مبيعات السلع والخدمات المنجزة عبر منصات التجارة الإلكترونية، محلية أو أجنبية، وكذلك العمولات التي يحصّلها المشغلون، ستخضع لـTVA. وعلى المنصات الأجنبية بلا مؤسسة في الجزائر التسجيل والتصريح برقم أعمالها الجزائري ودفع الضريبة. وتُذكر غرامة للمخالفات.',
      ], after: [
        'بالنسبة لمؤسس جزائري هذا خبر سار في ثوب قيد. المنصات الأجنبية التي كانت تبيع للجزائريين بلا TVA ولا تصريح تدخل الإطار نفسه الذي أنت فيه؛ ومنصة تفوتر منذ اليوم الأول عمولاتها بـTVA وتمسك كشف كل بائع وتستطيع إنتاج تصريح جانفي بنقرة، لها أفضلية على مجموعة فيسبوك التي ستفعل الشيء نفسه بعناء. تُبنى هذه الالتزامات في المنتج لا في جدول إكسل في ديسمبر.',
      ] },
      { heading: 'كيف يتحرك المال، خطوة بخطوة', body: [
        'لسؤال «كيف أُدفَع» جواب واحد صحيح: المال يمر عبرك. هذه الدورة، ولماذا توجد كل خطوة.',
      ], visual: 'money', after: [
        '**الزبون يدفع للمنصة.** ببطاقة CIB/الذهبية بفضل صفة التاجر الإلكتروني، أو برمز QR DZMobPay الذي أصبح متوافقاً بين البنوك، أو نقداً عند الاستلام؛ وفي هذه الحالة يسجّل الموصّل أو البائع التحصيل في التطبيق ويبقى الدفع عند الاستلام متتبَّعاً. **المنصة تحتفظ بالمال** حتى تُنجز الخدمة: هذا هو الحجز، وهو ما يعطي الزبون سبباً للدفع عبر المنصة بدل اليد إلى اليد. تُفوتر العمولة للبائع في كل معاملة بـTVA وتظهر في كشفه. **البائع يسلّم والزبون يؤكد** في التطبيق، أو تؤكد مهلة تلقائية بدلاً عنه؛ والنزاع المفتوح يجمّد المال. **المنصة تحوّل** بتحويلات مجمَّعة في ي+2 أو ي+7 بعد خصم العمولة، مع كشف شهري يُستعمل في تصريح جانفي.',
        'التجاوز هو الخطر الأول: يلتقي الزبون والبائع على منصتك ويتفقان على واتساب. يُحارَب بما لا تقدمه إلا المنصة، الحجز الذي يحمي الزبون، الفاتورة والكشف اللذان يحميان البائع، التقييم الذي يبني سمعته، وبعمولة معقولة، لأن العمولة المرتفعة جداً دعوة لتجاوزك.',
      ] },
      { heading: 'نماذج الإيراد، وأيها يصمد في الجزائر', body: [
        'ست طرق لكسب المال بسوق إلكترونية. ثلاث تصمد منذ الإطلاق، واثنتان أحياناً، وواحدة لا تصمد أبداً في البداية.',
      ], visual: 'revenue', after: [
        '**العمولة على المعاملة** تصمد بمجرد أن يمر المال عبر المنصة، وفي هذه الحالة فقط. **اشتراك البائع المحترف** يصمد مع بائعين يعيشون منك: وكالات عقارية، عيادات، محلات؛ فصّلنا [من يدفع اشتراكاً في الجزائر سنة 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **الإبراز المدفوع** هو النموذج الذي صنع مواقع الإعلانات الكبرى، وعلى رأسها واد كنيس، ويتطلب الزيارات قبل كل شيء. **العميل المحتمل المدفوع** ينجح في B2B والخدمات عالية القيمة، أشغال، تجهيزات، تأمين، حيث تساوي الوساطة طلب تسعير. **الرسوم على الزبون** تُحتمل إن كانت منخفضة ومرئية؛ فوق ذلك ينتقل الزبون إلى واتساب. **الإعلانات** لا تدرّ شيئاً قبل مئات آلاف الزيارات شهرياً.',
        'القاعدة: نموذج واحد عند الإطلاق، الذي يناسب فئتك. منصة خدمات منزلية تعيش من العمولة؛ منصة عقارية من اشتراك الوكالات؛ منصة إعلانات بين الأفراد من الإبراز. الثلاثة معاً في اليوم الأول تعني لا شيء.',
      ] },
      { heading: 'ما داخل منصة وساطة', body: [
        'تطبيقان مرئيان وثلاث طبقات غير مرئية. يدفع البائعون مقابل الطبقات الثلاث غير المرئية.',
      ], visual: 'inside', after: [
        '**الوجهان** هما تطبيق الزبون، بحث، طلب أو حجز، دفع، متابعة، بالعربية والفرنسية، وتطبيق أو بوابة البائع، إعلانات، طلبات، أجندة، كشوف وتحويلات. **الثقة** هي ما يجعل الزبون يدفع لغريب: التحقق من البائعين بمراقبة بشرية أولى، تقييمات بعد المعاملة، نزاعات بمال مجمَّد. **المال** هو الدورة الموصوفة أعلاه، تحصيل، حجز، عمولة مفوترة، تحويلات مجمَّعة. **العمليات** هي الدعم بالعربية والفرنسية والدارجة، بشري في البداية ثم بمساعدة الذكاء الاصطناعي على قواعدك، واللوجستيك إن كنت تبيع سلعاً، ناقلون، دفع عند الاستلام ومرتجعات؛ فصّلنا [كيف تقلّل الطلبات المرفوضة عند التسليم](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/). **الامتثال** هو الطبقة التي يجعلها مشروع قانون المالية 2027 إلزامية: منصة معرَّفة لدى الضرائب، تصريح سنوي ينتجه النظام، بيانات مستضافة وفق القانون 18-07.',
        'مشروع بهذا النطاق، تطبيقان، حجز وتحويلات، مكتب خلفي، يقع في الفئة 3 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/)؛ يُؤطَّر كتابياً بسعر إجمالي قبل البدء، و[القرارات السبعة لتطبيق جوّال في 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/) تنطبق على الوجهين.',
      ] },
      { heading: 'البيضة والدجاجة: مدينة واحدة، فئة واحدة، ثلاثون بائعاً قبل الكود', body: [
        'لكل الأسواق الإلكترونية مشكلة الانطلاق نفسها: بلا بائعين لا زبائن؛ وبلا زبائن لا بائعين. الجواب ليس تقنياً.',
      ], visual: 'timeline', after: [
        '**يُجنَّد البائعون الثلاثون الأوائل يدوياً قبل أي سطر كود**، في مدينة واحدة وفئة واحدة: سبّاكو شرق العاصمة، عيادات الأسنان في سطيف، الشقق المفروشة في وهران. تلتقيهم، تفهم كيف يحصّلون وما يخسرون، وتعدهم بزبائن لا بتطبيق. **بالتوازي**، الشركة، صفة التاجر الإلكتروني عبر البنك وGIE Monétique، وتعريف المنصة لدى الضرائب. **من مارس إلى جوان**، تطوير الوجهين والحجز. **جويلية-أوت**، التجربة: ثلاثون بائعاً، معاملات حقيقية، نزاعات حقيقية، تحويلات حقيقية كل أسبوع. **سبتمبر**، الفئة الثانية أو المدينة الثانية، فقط إن كانت التجربة تحوّل المال كل أسبوع. سوق فارغة يوم الإطلاق لا تمتلئ أبداً؛ وسوق بثلاثين بائعاً نشطاً في حي واحد تمتلئ من تلقاء نفسها.',
        'إن كنت تبني من فرنسا، فتجنيد البائعين هو بالضبط ما يتطلب الحضور؛ وضعنا هذه الرحلات في [جدول 2027 لمؤسس الجالية](/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/).',
      ] },
      { heading: 'الأخطاء التي نراها في الأسواق الإلكترونية الجزائرية', body: [], list: [
        '**ترك الزبون يدفع للبائع مباشرة.** لا عمولة، لا بيانات، لا منصة. المال يمر عبرك، بحجز.',
        '**الإطلاق بثلاثة نماذج إيراد.** عمولة واشتراك وإبراز في اليوم الأول: لا يفهم البائعون ما يدفعون مقابله. نموذج واحد، نموذج فئتك.',
        '**فتح البلد كله وكل الفئات.** عشرة بائعين في كل ولاية ولا زبون مخدوم. مدينة واحدة، فئة واحدة، ثلاثون بائعاً نشطاً.',
        '**عمولة مرتفعة جداً.** دعوة لتجاوزك على واتساب. تُقارن العمولة بما يكسبه البائع بفضلك.',
        '**عدم التحقق من أحد.** أول بائع محتال يكلّف ثقة مئة زبون. هوية، سجل، مراقبة بشرية أولى.',
        '**اكتشاف تصريح جانفي في ديسمبر.** كشوف كل بائع والعمولات بـTVA تُبنى في المنتج منذ اليوم الأول.',
        '**التطوير قبل تجنيد البائعين.** التطبيق جاهز وهو فارغ. ثلاثون بائعاً أولاً.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'كيف تكسب سوق إلكترونية المال في الجزائر؟', a: 'بالعمولة على كل معاملة حين يمر المال عبر المنصة، أو باشتراك البائعين المحترفين الذين يعيشون منها، أو بالإبراز المدفوع حين تملك زيارات. نموذج واحد عند الإطلاق، نموذج فئتك. الإعلانات لا تدرّ شيئاً قبل مئات آلاف الزيارات شهرياً.' },
        { q: 'كيف يعمل الدفع بالحجز؟', a: 'يدفع الزبون للمنصة ببطاقة CIB/الذهبية أو QR DZMobPay أو نقداً عند الاستلام مسجَّلاً. تحتفظ المنصة بالمال حتى التسليم أو الموعد، تفوتر عمولتها للبائع بـTVA، ثم تحوّل للبائع في ي+2 أو ي+7. النزاع يجمّد المال.' },
        { q: 'ما الذي يغيّره مشروع قانون المالية 2027 لمنصة؟', a: 'ينص النص، وهو ما زال مشروعاً، على أن تعرّف المنصات المحلية والأجنبية بنفسها لدى إدارة الضرائب، وترسل قبل 31 جانفي تصريحاً سنوياً بعمليات بائعيها، وتطبّق TVA على المبيعات المنجزة عبرها وعلى عمولاتها. تُبنى هذه الالتزامات في المنتج.' },
        { q: 'كيف أمنع الزبائن والبائعين من تجاوزي على واتساب؟', a: 'بما لا تقدمه إلا المنصة: الحجز الذي يحمي الزبون، الفاتورة والكشف اللذان يحميان البائع، التقييمات التي تبني السمعة، وعمولة معقولة. العمولة المرتفعة جداً دعوة للتجاوز.' },
        { q: 'من أين أبدأ سوقاً إلكترونية؟', a: 'بثلاثين بائعاً مجنَّدين يدوياً في مدينة واحدة وفئة واحدة قبل أي سطر كود. بالتوازي، الشركة وصفة التاجر الإلكتروني وتعريف المنصة. ثم التطوير، التجربة في الصيف، والفئة الثانية فقط إن كانت التجربة تحوّل المال كل أسبوع.' },
        { q: 'هل يجب أن أتولى التوصيل بنفسي؟', a: 'إن كنت تبيع سلعاً فاللوجستيك جزء من المنصة: ناقلون شركاء، دفع عند الاستلام مسجَّل، مرتجعات. وإن كنت تربط خدمات أو مواعيد فلا توصيل، لكن هناك تأكيد الزبون والنزاع.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'توجد السوق الإلكترونية يوم يمر المال عبرها.' },
      { after: 4, text: 'سوق فارغة يوم الإطلاق لا تمتلئ أبداً؛ وسوق بثلاثين بائعاً نشطاً في حي واحد تمتلئ من تلقاء نفسها.' },
    ],
    cta: { eyebrow: 'صف منصتك', title: 'من تربط بمن، في أي مدينة، وكيف يجب أن يتحرك المال. نعيد إليك نموذج الإيراد المناسب لفئتك، دورة الدفع، ما يجب أن تحتويه المنصة لالتزامات 2027، والسعر الإجمالي المكتوب.', body: 'تصمم سيملوب منصات الوساطة للجزائر: تطبيق زبون وبوابة بائع بالعربية والفرنسية، تحصيل CIB/الذهبية وQR بحجز، عمولات مفوترة بـTVA، تحويلات مجمَّعة، كشوف وتصريح سنوي، تحقق من البائعين، نزاعات، دعم بمساعدة الذكاء الاصطناعي، استضافة مطابقة للقانون 18-07. مهندسون خبراء في الجزائر وسطيف، تأطير مكتوب، كود باسمك.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/creer-equivalent-leboncoin-vinted-algerie-2026/', kind: 'سلسلة', name: 'لوبونكوان وفينتد في الجزائر: المعاملة المحمية' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
      { href: '/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/', kind: '2027', name: 'الإطلاق من فرنسا في 2027: أربع رحلات' },
      { href: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/', kind: 'مشكلة', name: 'الطلبات المرفوضة عند التسليم' },
    ] },
  },
};

const KEYWORDS = "créer une marketplace en algérie 2027, plateforme de mise en relation algérie, commission marketplace algérie, paiement séquestre marketplace cib edahabia, plf 2027 plateformes identification tva commissions, modèle de revenu marketplace, lancer une plateforme en algérie, build marketplace algeria 2027, إنشاء سوق إلكترونية في الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
