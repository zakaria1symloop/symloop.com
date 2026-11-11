import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement.mjs';

const SLUG = 'caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement';
const FIGURES = ['journey', 'stack', 'pointage', 'erreurs', 'saison', 'models'];
const DATE = '2026-11-02';

const CONTENT = {
  fr: {
    kind: 'Commerces · Paiement · 2027', title: "Encaisser par QR code, carte et espèces en 2027 : la caisse qui lie chaque paiement à sa vente et n'accepte plus les captures d'écran.",
    dek: "En huit mois, le nombre de terminaux de paiement en Algérie est passé de 78 000 à 126 000, et les paiements par QR code entre banques ont été multipliés par treize sur un an. Pour un commerçant, cela veut dire une journée encaissée en quatre façons différentes, et une clôture du soir qui ne tombe plus juste si la caisse ne sait pas quelle vente a été payée comment. Ce qu'une vente doit tenir à chaque moment, ce qu'il faut construire en premier, le temps perdu à pointer, six erreurs de caisse et leur parade, et un calendrier pour être prêt avant le Ramadan 2027.",
    publishedAt: 'Novembre 2026', readTime: '10 min de lecture', author: 'Symloop', about: ['Caisse', 'Paiement électronique', 'QR code', 'Commerce', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** En 2027, un commerce algérien encaissera en espèces, par carte au terminal, par QR code depuis l'application bancaire du client, et peut-être bientôt sur un téléphone transformé en terminal. La caisse à construire n'est pas celle qui accepte le plus de moyens de paiement : c'est celle qui **lie chaque paiement à sa vente**. Un QR propre à chaque ticket, avec son montant et sa référence ; une vente qui ne se ferme que sur **la confirmation de la banque, jamais sur une capture d'écran** ; un montant envoyé ou contrôlé au terminal ; un carnet de crédit numérique ; et une clôture du soir par mode de paiement, où chaque écart a une explication. **Ce qui ne se voit plus au tiroir doit se voir dans la caisse.**",
      "Ce guide s'adresse aux commerçants, supérettes, boutiques, cafés, pharmacies et chaînes de magasins qui voient la part des paiements électroniques grandir, au propriétaire qui suit ses magasins à distance, et au fondateur qui veut lancer une caisse en ligne pour les commerces algériens. Il ne traite pas des obligations réglementaires d'acceptation, qui se vérifient avec votre banque et votre comptable.",
    ],
    sections: [
      { heading: 'Ce qui a changé au comptoir en 2026', body: [
        "Les chiffres du GIE Monétique décrivent un basculement. Le nombre de terminaux de paiement est passé de **78 000 en décembre 2025 à 126 000 en août 2026**, et la valeur des paiements par terminal a progressé de 165 % sur la période, selon Algérie Eco. Au premier semestre 2026, les paiements sur terminal ont dépassé **8 millions d'opérations, en hausse de 81 %**, pour 82 milliards de dinars, avec un record de 1,64 million d'opérations en mai, selon l'APS. Environ 23 millions de cartes sont en circulation, dont 19 millions d'Edahabia et plus de 4 millions de CIB, et les paiements dépassent désormais 20 % des opérations par carte, contre environ 10 % auparavant.",
        "Le paiement par QR code suit. Au premier semestre 2026, les paiements QR à l'intérieur d'une même banque ont atteint 32 milliards de dinars, et les paiements QR **entre banques** ont progressé de 1 200 %, à partir d'une base encore faible, avec sept banques pilotes du service DZ Mob Pay. Fin 2025, le GIE Monétique visait 15 banques interopérables en 2026, comptait environ 11 900 commerçants inscrits, et annonçait un paiement validé en moins de dix secondes ainsi qu'un téléphone transformé en terminal pour fin 2026 : vérifiez où en est votre banque. **Pour un commerçant, la question n'est plus « faut-il accepter la carte ou le QR ? » mais « comment ma caisse sait-elle qui a payé quoi ? ».**",
      ] },
      { heading: 'Une vente bien encaissée, en six moments', body: [
        "La caisse doit tenir chacun de ces six moments, à chaque vente, y compris le soir du Ramadan quand la file déborde.",
      ], visual: 'journey', after: [
        "**La vente** se termine par un choix explicite du mode de paiement, même pour un paiement partagé : une partie en espèces, le reste par carte. **Le QR de la vente** porte le montant exact et une référence propre au ticket : un QR fixe collé au comptoir, sur lequel le client tape lui-même le montant, ne permet ni de rattacher le paiement ni de repérer l'erreur. **La confirmation** vient de la banque : soit elle arrive directement dans la caisse, si votre banque le permet, soit le caissier la lit dans l'application commerçant avant de rendre le ticket.",
        "**La carte au terminal** reçoit le montant envoyé par la caisse quand le terminal le permet, ou recopié puis contrôlé contre le ticket de la banque. **Les espèces et le crédit** restent, mais tracés : monnaie rendue calculée, carnet de crédit numérique avec plafond par client. **La clôture**, enfin, se fait par colonne : espèces comptées, carte selon les tickets du terminal, QR selon les confirmations, crédit selon le carnet. Chaque écart s'explique ligne par ligne.",
      ] },
      { heading: "Ce qu'il faut construire : le rapprochement d'abord", body: [
        "La tentation est de choisir une caisse sur la beauté de son écran ou le nombre de moyens de paiement annoncés. Ce qui compte est ailleurs.",
      ], visual: 'stack', after: [
        "**Le rapprochement** est le cœur. Chaque vente porte un identifiant ; chaque paiement électronique, carte ou QR, est rattaché à cet identifiant au moment où il est confirmé ; un paiement reçu sans vente, ou une vente marquée payée sans confirmation, apparaît immédiatement en écart. Le niveau d'automatisme dépend de votre banque et de votre terminal : certains permettent une remontée automatique, d'autres seulement une lecture dans l'application. **Dans les deux cas, la règle est la même : la vente ne se ferme qu'une fois le paiement vu.**",
        "**Le crédit client** mérite une place à part : le « carnet » du quartier est une réalité, et il coûte cher quand il est oublié. Un carnet numérique, avec un plafond par client et un rappel, garde la relation sans perdre l'argent. **Le tableau du gérant** montre la journée par mode, par caissier et par magasin ; c'est lui qui permet au propriétaire installé en France de suivre ses magasins sans appeler, comme nous le décrivons dans [gérer son commerce en Algérie depuis la France](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/). Pour un restaurant, la caisse s'ajoute à la gestion des commandes entre la salle et la cuisine, détaillée dans [notre guide des caisses de restaurant](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/).",
      ] },
      { heading: 'Le temps perdu à pointer les paiements', body: [
        "Un exemple sur des hypothèses, à refaire avec vos chiffres : une supérette de 300 ventes par jour, dont un quart payées par carte ou par QR.",
      ], visual: 'pointage', after: [
        "Vérifier 75 paiements par jour dans l'application de la banque, à une minute chacun, prend **75 minutes par jour, soit environ 30 heures par mois** sur 24 jours d'ouverture, le plus souvent celles du gérant, le soir. Et plus la part électronique grandit, plus le pointage devient long, et plus une erreur ou une fausse confirmation a de chances de passer. Le rapprochement automatique rend ces heures, et surtout il fait apparaître l'écart le jour même, quand on se souvient encore du client.",
        "Pour mesurer votre situation dès ce mois-ci : comptez pendant une semaine les paiements par carte et par QR, et le temps passé chaque soir à les retrouver. Notez aussi combien de fois la clôture ne tombe pas juste et pourquoi. Ces deux chiffres, le temps et les écarts, sont la base de tout projet de caisse sérieux.",
      ] },
      { heading: 'Six erreurs de caisse, six parades', body: [
        "Les espèces avaient leurs erreurs ; les paiements électroniques en ajoutent qui ne se voient pas au tiroir.",
      ], visual: 'erreurs', after: [
        "**La capture d'écran falsifiée** est l'erreur la plus simple à éviter et la plus coûteuse quand on la laisse passer : une image de confirmation se fabrique en quelques minutes, et elle ne prouve rien. Les spécialistes de la sécurité le répètent : la seule preuve d'un paiement est l'argent visible sur votre propre compte. La caisse doit donc refuser de clôturer une vente QR tant que la confirmation n'est pas vue, et le caissier doit être couvert par cette règle quand le client insiste.",
        "**Le double encaissement** est l'erreur inverse : un paiement QR semble échouer, le client paie en espèces, puis le QR passe quand même. Un statut « paiement en attente » visible dans la caisse, et un remboursement tracé sur le même mode, règlent le cas sans dispute. **Le montant faux au terminal**, 1 500 tapé 150, disparaît quand la caisse envoie le montant au terminal, ou quand le ticket de la banque est contrôlé contre le ticket de caisse.",
      ] },
      { heading: 'Au-delà du comptoir : la livraison et le marché', body: [
        "Les mêmes règles valent hors du magasin. **À la livraison**, un QR propre à la commande permet au client de payer sur le pas de la porte, et au livreur de rapporter moins d'espèces ; la confirmation doit pouvoir se lire même avec un réseau faible, et la commande ne se clôture qu'une fois le paiement vu. C'est le prolongement naturel des [plateformes de livraison et de paiement à la livraison](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/).",
        "**Sur les marchés et pour la vente ambulante**, le téléphone transformé en terminal, annoncé pour fin 2026, pourrait remplacer le terminal fixe : il faudra vérifier son déploiement réel et ses conditions auprès des banques. La logique de rapprochement reste identique : une vente, un paiement vu, une colonne.",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six cas, du commerce qui veut une caisse juste au fondateur qui veut en vendre à des milliers de commerçants.",
      ], visual: 'models', after: [
        "**Un commerce ou une chaîne** gagne d'abord en clôtures justes et en temps rendu au gérant ; une chaîne gagne en plus la vue par magasin, à condition de synchroniser les articles et les prix. **La caisse en abonnement pour commerçants** est un marché qui grandit avec les 126 000 terminaux et les 23 millions de cartes, mais c'est un métier de support autant que de logiciel : installation, matériel, formation, réponse le soir de l'Aïd. Les règles d'un [SaaS en Algérie](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/) s'appliquent.",
        "**Les cafés et la restauration rapide** demandent surtout de la vitesse : une confirmation lente crée une file. **Le paiement QR à la livraison** réduit les espèces chez les livreurs, à condition de fonctionner sur le pas de la porte. Pour une PME qui démarre sa transformation, la caisse est souvent la première brique, comme nous le détaillons dans [digitaliser une PME en 2027](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/).",
      ] },
      { heading: 'Le calendrier pour 2027', body: [
        "Une douzaine de semaines entre le cadrage et un pilote comparé, pour être prêt avant le Ramadan.",
      ], visual: 'saison', after: [
        "**Novembre : le cadrage**, le catalogue, les prix, et la question à poser à votre banque : quelle confirmation de paiement QR et quelle liaison avec le terminal sont possibles pour votre compte. **Novembre et décembre : la caisse multi-mode**, puis **la liaison avec le terminal et le QR** selon ce que la banque propose. **Janvier : le pilote sur une caisse**, en comparant chaque soir la clôture de la nouvelle caisse avec l'ancienne méthode.",
        "**Février et mars : le Ramadan**, attendu vers le 8 février, pic de ventes pour beaucoup de commerces d'alimentation, avec les files du soir et les paiements partagés. **Mars et avril : tous les postes et le tableau du gérant**, magasin par magasin. Ces durées sont cohérentes avec celles que nous détaillons dans [combien de temps pour développer une application ou une plateforme](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'Ce qui fait échouer ce type de projet', body: [], list: [
        "**Accepter les captures d'écran.** Une seule fausse confirmation acceptée coûte plus que le rapprochement.",
        "**Un QR fixe au comptoir.** Sans montant ni référence, le paiement ne se rattache à aucune vente.",
        "**Ne pas demander à la banque ce qu'elle permet.** La liaison avec le terminal et la confirmation QR dépendent de son offre ; il faut le savoir avant de construire.",
        "**Une clôture globale.** Un seul total pour la journée cache les écarts ; il faut une colonne par mode.",
        "**Oublier le crédit client.** Le carnet du quartier existe ; s'il reste sur papier, il échappe à la caisse.",
        "**Ignorer le soir du Ramadan.** Une caisse lente aux heures de pointe crée une file et des erreurs.",
        "**Les comptes au nom du développeur.** Serveur, domaine et données au nom du commerçant dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Comment vérifier qu'un client a vraiment payé par QR code ?", a: "Par la confirmation de votre banque, jamais par la capture d'écran du client. Selon ce que votre banque propose, la confirmation arrive directement dans la caisse ou se lit dans l'application commerçant. La vente ne doit se clôturer qu'une fois cette confirmation vue." },
        { q: "Combien de terminaux de paiement y a-t-il en Algérie ?", a: "Environ 126 000 en août 2026, contre 78 000 en décembre 2025, selon les chiffres du GIE Monétique repris par Algérie Eco. Au premier semestre 2026, les paiements sur terminal ont dépassé 8 millions d'opérations, en hausse de 81 %." },
        { q: "La caisse peut-elle envoyer le montant au terminal de paiement ?", a: "Cela dépend du modèle de terminal et de ce que la banque autorise. Quand ce n'est pas possible, le montant est recopié et contrôlé contre le ticket de la banque à la clôture. Posez la question à votre banque dès le cadrage." },
        { q: "Le paiement par téléphone sans terminal est-il disponible ?", a: "Le GIE Monétique l'annonçait pour fin 2026, en transformant un téléphone compatible en terminal de paiement. Vérifiez auprès de votre banque où en est le déploiement et à quelles conditions avant de l'intégrer à votre projet." },
        { q: "Une caisse peut-elle gérer le crédit client ?", a: "Oui : un carnet numérique par client, avec un plafond, un historique et des rappels, remplace le cahier sans changer la relation. Les remboursements de crédit entrent dans la clôture comme les autres paiements." },
        { q: "Combien de temps pour être prêt ?", a: "Environ douze semaines entre le cadrage et la fin d'un pilote comparé sur une caisse, avec l'encaissement multi-mode et la liaison au terminal et au QR selon l'offre de la banque. Le déploiement sur tous les postes et le tableau du gérant suivent sur un à deux mois." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La question n'est plus « faut-il accepter le QR ? » mais « comment ma caisse sait-elle qui a payé quoi ? »." },
      { after: 4, text: "Une capture d'écran n'est qu'une image ; seule la confirmation de la banque prouve que l'argent est arrivé." },
    ],
    cta: { eyebrow: 'Décrivez votre commerce', title: "Supérette, boutique, café, pharmacie, chaîne ou caisse à lancer pour d'autres commerçants : le nombre de caisses et de magasins, la part des paiements par carte et QR aujourd'hui, votre banque et votre terminal. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des caisses, des systèmes de rapprochement des paiements, des carnets de crédit numériques et des tableaux de bord pour les commerces et chaînes algériens, en arabe, en français et en anglais. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'Gérer son commerce en Algérie depuis la France en 2027' },
      { href: '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/', kind: 'Caisse', name: 'Caisse de restaurant : commandes, salle et cuisine' },
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'Digitaliser une PME en Algérie en 2027' },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'Plateforme de livraison en Algérie en 2027' },
    ] },
  },
  en: {
    kind: 'Retail · Payments · 2027', title: 'Taking QR, card and cash payments in 2027: the till that ties every payment to its sale and no longer accepts screenshots.',
    dek: "In eight months the number of payment terminals in Algeria rose from 78,000 to 126,000, and QR payments between banks grew thirteenfold in a year. For a retailer that means a day taken in four different ways, and an evening close that no longer balances if the till does not know which sale was paid how. What a sale must hold at each moment, what to build first, the time lost checking payments, six till errors and their counters, and a calendar to be ready before Ramadan 2027.",
    publishedAt: 'November 2026', readTime: '10 min read', author: 'Symloop', about: ['Till', 'Electronic payment', 'QR code', 'Retail', 'Algeria 2027'],
    intro: [
      "**Short answer.** In 2027 an Algerian shop will take payment in cash, by card at the terminal, by QR code from the customer’s banking app, and perhaps soon on a phone turned into a terminal. The till to build is not the one that accepts the most payment methods: it is the one that **ties every payment to its sale**. A QR specific to each receipt, with its amount and reference; a sale that only closes on **the bank’s confirmation, never on a screenshot**; an amount sent to or checked at the terminal; a digital credit tab; and an evening close by payment type, where every gap has an explanation. **What no longer shows in the drawer has to show in the till.**",
      "This guide is for retailers, grocery stores, shops, cafés, pharmacies and chains that see the share of electronic payments growing, for the owner who follows their shops remotely, and for the founder who wants to launch an online till for Algerian retailers. It does not cover regulatory acceptance obligations, which you should check with your bank and accountant.",
    ],
    sections: [
      { heading: 'What changed at the counter in 2026', body: [
        "GIE Monétique’s figures describe a tipping point. The number of payment terminals rose from **78,000 in December 2025 to 126,000 in August 2026**, and the value of terminal payments grew 165% over the period, according to Algérie Eco. In the first half of 2026, terminal payments passed **8 million operations, up 81%**, worth 82 billion dinars, with a record 1.64 million operations in May, according to APS. About 23 million cards are in circulation, 19 million Edahabia and more than 4 million CIB, and payments now exceed 20% of card operations, up from about 10%.",
        "QR payment is following. In the first half of 2026, QR payments within the same bank reached 32 billion dinars, and QR payments **between banks** grew 1,200% from a still small base, with seven pilot banks on the DZ Mob Pay service. At the end of 2025 GIE Monétique was aiming for 15 interoperable banks in 2026, counted about 11,900 registered merchants, and announced payments validated in under ten seconds as well as a phone-as-terminal service for the end of 2026: check where your bank stands. **For a retailer the question is no longer “should I accept card or QR?” but “how does my till know who paid for what?”.**",
      ] },
      { heading: 'A properly paid sale, in six moments', body: [
        "The till has to hold each of these six moments, on every sale, including Ramadan evenings when the queue spills over.",
      ], visual: 'journey', after: [
        "**The sale** ends with an explicit choice of payment type, even for a split payment: part in cash, the rest by card. **The sale’s QR** carries the exact amount and a reference specific to the receipt: a fixed QR stuck on the counter, where the customer types the amount themselves, allows neither matching the payment nor spotting the error. **Confirmation** comes from the bank: either it arrives directly in the till, if your bank allows it, or the cashier reads it in the merchant app before handing over the receipt.",
        "**The card at the terminal** receives the amount sent by the till when the terminal supports it, or keyed and then checked against the bank receipt. **Cash and credit** remain, but traced: change calculated, a digital credit tab with a limit per customer. **Closing**, finally, is done by column: cash counted, card from the terminal receipts, QR from confirmations, credit from the tab. Every gap is explained line by line.",
      ] },
      { heading: 'What to build: reconciliation first', body: [
        "The temptation is to choose a till for its good-looking screen or the number of payment methods it claims. What matters is elsewhere.",
      ], visual: 'stack', after: [
        "**Reconciliation** is the heart of it. Every sale carries an identifier; every electronic payment, card or QR, is tied to that identifier when it is confirmed; a payment received with no sale, or a sale marked paid with no confirmation, shows up immediately as a gap. The level of automation depends on your bank and terminal: some allow automatic feeds, others only a reading in the app. **Either way the rule is the same: the sale only closes once the payment has been seen.**",
        "**Customer credit** deserves its own place: the neighbourhood tab is real, and it is expensive when forgotten. A digital tab, with a limit per customer and a reminder, keeps the relationship without losing the money. **The manager dashboard** shows the day by payment type, cashier and shop; it is what lets an owner based in France follow their shops without calling, as we describe in [running a business in Algeria from France](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/). For a restaurant, the till adds to order management between the floor and the kitchen, covered in [our restaurant till guide](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/).",
      ] },
      { heading: 'The time lost checking payments', body: [
        "An example on assumptions, to redo with your figures: a grocery store with 300 sales a day, a quarter of them paid by card or QR.",
      ], visual: 'pointage', after: [
        "Checking 75 payments a day in the banking app, at one minute each, takes **75 minutes a day, about 30 hours a month** over 24 trading days, usually the manager’s, in the evening. And the larger the electronic share, the longer the checking, and the better the odds that an error or a fake confirmation slips through. Automatic reconciliation gives those hours back and, above all, shows the gap the same day, while the customer is still remembered.",
        "To measure your situation this month: for one week, count card and QR payments and the time spent each evening tracking them down. Also note how often the close does not balance and why. Those two figures, time and gaps, are the basis of any serious till project.",
      ] },
      { heading: 'Six till errors, six counters', body: [
        "Cash had its errors; electronic payments add some that do not show in the drawer.",
      ], visual: 'erreurs', after: [
        "**The faked screenshot** is the easiest error to avoid and the most expensive when it gets through: a confirmation image can be made in a few minutes, and it proves nothing. Security specialists keep repeating it: the only proof of payment is money visible in your own account. So the till must refuse to close a QR sale until the confirmation has been seen, and the cashier must be covered by that rule when the customer insists.",
        "**Being paid twice** is the opposite error: a QR payment seems to fail, the customer pays cash, then the QR goes through anyway. A “payment pending” status visible in the till, and a refund traced on the same payment type, settle it without argument. **The wrong amount at the terminal**, 1,500 keyed as 150, disappears when the till sends the amount to the terminal, or when the bank receipt is checked against the till receipt.",
      ] },
      { heading: 'Beyond the counter: delivery and markets', body: [
        "The same rules apply outside the shop. **On delivery**, a QR specific to the order lets the customer pay on the doorstep and the courier bring back less cash; the confirmation must be readable even on a weak network, and the order only closes once the payment has been seen. It is the natural extension of [delivery and cash-on-delivery platforms](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/).",
        "**At markets and for street vendors**, the phone turned into a terminal, announced for the end of 2026, could replace the fixed terminal: its actual rollout and conditions will need checking with the banks. The reconciliation logic stays the same: one sale, one payment seen, one column.",
      ] },
      { heading: 'Which model to build', body: [
        "Six cases, from the shop that wants a till that balances to the founder who wants to sell one to thousands of retailers.",
      ], visual: 'models', after: [
        "**A shop or a chain** first gains closes that balance and time given back to the manager; a chain also gains the view per shop, provided items and prices are synced. **The till as a subscription for retailers** is a market growing with the 126,000 terminals and 23 million cards, but it is a support business as much as a software one: installation, hardware, training, answering on the evening of Eid. The rules of a [SaaS in Algeria](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/) apply.",
        "**Cafés and fast food** mainly need speed: a slow confirmation creates a queue. **QR payment on delivery** reduces the cash held by couriers, provided it works on the doorstep. For an SME starting its transformation, the till is often the first building block, as we set out in [digitalising an SME in 2027](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/).",
      ] },
      { heading: 'The calendar for 2027', body: [
        "About twelve weeks between scoping and a compared pilot, to be ready before Ramadan.",
      ], visual: 'saison', after: [
        "**November: scoping**, the catalogue, prices, and the question to put to your bank: which QR payment confirmation and which terminal link are possible for your account. **November and December: the multi-type till**, then **the terminal and QR link** depending on what the bank offers. **January: the pilot on one till**, comparing every evening the new till’s close with the old method.",
        "**February and March: Ramadan**, expected around 8 February, the sales peak for many food retailers, with evening queues and split payments. **March and April: all tills and the manager dashboard**, shop by shop. These durations are consistent with those we set out in [how long it takes to build an app or platform](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Accepting screenshots.** A single fake confirmation accepted costs more than reconciliation.",
        "**A fixed QR on the counter.** With no amount or reference, the payment ties to no sale.",
        "**Not asking the bank what it allows.** The terminal link and QR confirmation depend on its offer; you need to know before building.",
        "**A single overall close.** One total for the day hides the gaps; you need one column per payment type.",
        "**Forgetting customer credit.** The neighbourhood tab exists; left on paper, it escapes the till.",
        "**Ignoring Ramadan evenings.** A till that is slow at peak times creates queues and errors.",
        "**Accounts in the developer’s name.** Server, domain and data in the retailer’s name from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'How do you check that a customer really paid by QR code?', a: "Through your bank’s confirmation, never the customer’s screenshot. Depending on what your bank offers, the confirmation arrives directly in the till or is read in the merchant app. The sale should only close once that confirmation has been seen." },
        { q: 'How many payment terminals are there in Algeria?', a: "About 126,000 in August 2026, up from 78,000 in December 2025, according to GIE Monétique figures reported by Algérie Eco. In the first half of 2026 terminal payments passed 8 million operations, up 81%." },
        { q: 'Can the till send the amount to the payment terminal?', a: "It depends on the terminal model and what the bank allows. When it is not possible, the amount is keyed and checked against the bank receipt at closing. Ask your bank during scoping." },
        { q: 'Is phone payment without a terminal available?', a: "GIE Monétique announced it for the end of 2026, turning a compatible phone into a payment terminal. Check with your bank where the rollout stands and on what terms before building it into your project." },
        { q: 'Can a till handle customer credit?', a: "Yes: a digital tab per customer, with a limit, a history and reminders, replaces the notebook without changing the relationship. Credit repayments go into the close like any other payment." },
        { q: 'How long does it take to be ready?', a: "About twelve weeks between scoping and the end of a compared pilot on one till, with multi-type checkout and the terminal and QR link depending on the bank’s offer. Rollout to all tills and the manager dashboard follow over one to two months." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The question is no longer “should I accept QR?” but “how does my till know who paid for what?”.' },
      { after: 4, text: 'A screenshot is only a picture; only the bank’s confirmation proves the money arrived.' },
    ],
    cta: { eyebrow: 'Tell us about your shop', title: 'Grocery store, shop, café, pharmacy, chain, or a till to launch for other retailers: the number of tills and shops, today’s share of card and QR payments, your bank and your terminal. We send back the scope, the calendar and the total price, in writing, before we start.', body: 'Symloop builds tills, payment reconciliation systems, digital credit tabs and dashboards for Algerian shops and chains, in Arabic, French and English. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'Running a business in Algeria from France in 2027' },
      { href: '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/', kind: 'Till', name: 'Restaurant tills: orders, floor and kitchen' },
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'Digitalising an SME in Algeria in 2027' },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'Delivery platforms in Algeria in 2027' },
    ] },
  },
  ar: {
    kind: 'التجارة · الدفع · 2027', title: 'التحصيل بالـQR والبطاقة والنقد سنة 2027: الصندوق الذي يربط كل دفعة ببيعها ولا يقبل لقطات الشاشة بعد اليوم.',
    dek: 'في ثمانية أشهر ارتفع عدد أجهزة الدفع في الجزائر من 78000 إلى 126000، وتضاعفت مدفوعات QR بين البنوك ثلاث عشرة مرة خلال سنة. بالنسبة للتاجر يعني ذلك يوماً يُحصَّل بأربع طرق مختلفة، وإغلاقاً مسائياً لا يستقيم إن لم يعرف الصندوق أي بيع دُفع وكيف. ما يجب أن يصمد عنده البيع في كل لحظة، وما يُبنى أولاً، والوقت الضائع في المراجعة، وستة أخطاء صندوق وردودها، وجدول زمني للجاهزية قبل رمضان 2027.',
    publishedAt: 'نوفمبر 2026', readTime: '10 دقائق قراءة', author: 'Symloop', about: ['الصندوق', 'الدفع الإلكتروني', 'رمز QR', 'التجارة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** سنة 2027 سيحصّل المحل الجزائري نقداً، وبالبطاقة في جهاز الدفع، وبرمز QR من تطبيق الزبون البنكي، وربما قريباً على هاتف يتحوّل إلى جهاز دفع. الصندوق الذي يجب بناؤه ليس الذي يقبل أكبر عدد من طرق الدفع: إنه الذي **يربط كل دفعة ببيعها**. رمز QR خاص بكل تذكرة بمبلغه ومرجعه؛ وبيع لا يُغلق إلا **بتأكيد البنك، أبداً بلقطة شاشة**؛ ومبلغ يُرسل إلى الجهاز أو يُراقب فيه؛ ودفتر كريدي رقمي؛ وإغلاق مسائي حسب طريقة الدفع يكون لكل فارق فيه تفسير. **ما لم يعد يظهر في الدرج يجب أن يظهر في الصندوق.**",
      "هذا الدليل موجّه للتجار ومحلات المواد الغذائية والمتاجر والمقاهي والصيدليات وسلاسل المحلات التي ترى حصة المدفوعات الإلكترونية تكبر، وللمالك الذي يتابع محلاته عن بُعد، وللمؤسس الذي يريد إطلاق صندوق عبر الإنترنت للتجار الجزائريين. ولا يتناول الالتزامات التنظيمية للقبول، فهي تُتحقق مع بنكك ومحاسبك.",
    ],
    sections: [
      { heading: 'ما تغيّر عند الكاونتر سنة 2026', body: [
        "تصف أرقام تجمّع النقد الآلي تحوّلاً حاسماً. انتقل عدد أجهزة الدفع من **78000 في ديسمبر 2025 إلى 126000 في أوت 2026**، وارتفعت قيمة المدفوعات عبر الأجهزة بـ165 % خلال الفترة، حسب «الجزائر إيكو». وفي السداسي الأول من 2026 تجاوزت المدفوعات عبر الأجهزة **8 ملايين عملية، بارتفاع 81 %**، بقيمة 82 مليار دينار، مع رقم قياسي بلغ 1,64 مليون عملية في ماي، حسب وكالة الأنباء الجزائرية. وتتداول نحو 23 مليون بطاقة، منها 19 مليون بطاقة ذهبية وأكثر من 4 ملايين CIB، وصارت المدفوعات تتجاوز 20 % من عمليات البطاقات بعد أن كانت نحو 10 %.",
        "والدفع برمز QR يتبع. في السداسي الأول من 2026 بلغت مدفوعات QR داخل البنك الواحد 32 مليار دينار، وارتفعت مدفوعات QR **بين البنوك** بـ1200 % انطلاقاً من قاعدة لا تزال ضعيفة، مع سبعة بنوك تجريبية في خدمة DZ Mob Pay. وفي نهاية 2025 كان التجمّع يستهدف 15 بنكاً متوافقاً سنة 2026، وأحصى نحو 11900 تاجر مسجَّل، وأعلن دفعاً يُصادَق عليه في أقل من عشر ثوانٍ وهاتفاً يتحوّل إلى جهاز دفع في نهاية 2026: تحقّق أين وصل بنكك. **بالنسبة للتاجر لم يعد السؤال «هل أقبل البطاقة أو الـQR؟» بل «كيف يعرف صندوقي من دفع ماذا؟».**",
      ] },
      { heading: 'بيع محصَّل كما يجب، في ست لحظات', body: [
        "على الصندوق أن يصمد في كل لحظة من هذه اللحظات الست، في كل بيع، بما في ذلك سهرات رمضان حين يطول الطابور.",
      ], visual: 'journey', after: [
        "**البيع** ينتهي باختيار صريح لطريقة الدفع، حتى في الدفع المقسَّم: جزء نقداً والباقي بالبطاقة. **رمز QR للبيع** يحمل المبلغ الدقيق ومرجعاً خاصاً بالتذكرة: رمز ثابت ملصق على الكاونتر يكتب عليه الزبون المبلغ بنفسه لا يسمح بربط الدفعة ولا باكتشاف الخطأ. **التأكيد** يأتي من البنك: إما يصل مباشرة إلى الصندوق إن سمح بنكك بذلك، وإما يقرؤه الصندوقي في تطبيق التاجر قبل تسليم التذكرة.",
        "**البطاقة في الجهاز** تتلقّى المبلغ الذي يرسله الصندوق حين يسمح الجهاز بذلك، أو يُكتب ثم يُراقب مقابل وصل البنك. **النقد والكريدي** باقيان لكن متتبَّعان: الباقي محسوب، ودفتر كريدي رقمي بسقف لكل زبون. وأخيراً **الإغلاق** يتم عموداً عموداً: النقد معدود، والبطاقة حسب وصولات الجهاز، والـQR حسب التأكيدات، والكريدي حسب الدفتر. وكل فارق يُفسَّر سطراً سطراً.",
      ] },
      { heading: 'ما يجب بناؤه: المطابقة أولاً', body: [
        "الإغراء هو اختيار صندوق لجمال شاشته أو لعدد طرق الدفع التي يعلنها. ما يهمّ في مكان آخر.",
      ], visual: 'stack', after: [
        "**المطابقة** هي القلب. كل بيع يحمل معرّفاً؛ وكل دفعة إلكترونية، بطاقة أو QR، تُربط بهذا المعرّف لحظة تأكيدها؛ والدفعة الواصلة دون بيع، أو البيع المؤشَّر عليه مدفوعاً دون تأكيد، يظهران فوراً كفارق. ودرجة الأتمتة تتوقف على بنكك وجهازك: بعضها يسمح بتغذية آلية، وبعضها بقراءة في التطبيق فقط. **وفي الحالتين القاعدة واحدة: لا يُغلق البيع إلا بعد رؤية الدفعة.**",
        "**كريدي الزبائن** يستحق مكاناً خاصاً: «كرني» الحي حقيقة، ويكلّف غالياً حين يُنسى. دفتر رقمي بسقف لكل زبون وتذكير يحفظ العلاقة دون خسارة المال. و**لوحة المسيّر** تُري اليوم حسب الطريقة والصندوقي والمحل؛ وهي ما يسمح للمالك المقيم في فرنسا بمتابعة محلاته دون اتصال، كما نصف في [تسيير تجارتك في الجزائر من فرنسا](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/). وفي المطعم يُضاف الصندوق إلى تسيير الطلبات بين القاعة والمطبخ، المفصّل في [دليلنا لصناديق المطاعم](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/).",
      ] },
      { heading: 'الوقت الضائع في مراجعة المدفوعات', body: [
        "مثال مبني على فرضيات، أعده بأرقامك: محل مواد غذائية بـ300 بيعة في اليوم، ربعها بالبطاقة أو QR.",
      ], visual: 'pointage', after: [
        "مراجعة 75 دفعة يومياً في تطبيق البنك، بدقيقة لكل منها، تأخذ **75 دقيقة يومياً، أي نحو 30 ساعة في الشهر** على 24 يوم عمل، وغالباً هي ساعات المسيّر في المساء. وكلما كبرت الحصة الإلكترونية طالت المراجعة، وزادت فرص مرور خطأ أو تأكيد مزيّف. والمطابقة الآلية تعيد هذه الساعات، والأهم أنها تُظهر الفارق في اليوم نفسه، حين لا يزال الزبون في الذاكرة.",
        "لقياس وضعك من هذا الشهر: عُدّ طوال أسبوع المدفوعات بالبطاقة والـQR والوقت المصروف كل مساء في إيجادها. وسجّل كم مرة لم يستقم الإغلاق ولماذا. هذان الرقمان، الوقت والفوارق، أساس أي مشروع صندوق جاد.",
      ] },
      { heading: 'ستة أخطاء صندوق وستة ردود', body: [
        "للنقد أخطاؤه؛ والمدفوعات الإلكترونية تضيف أخطاء لا تظهر في الدرج.",
      ], visual: 'erreurs', after: [
        "**لقطة الشاشة المزوَّرة** أسهل خطأ يُتفادى وأكثرها كلفة حين يمرّ: صورة التأكيد تُصنع في دقائق ولا تثبت شيئاً. ويكرّر مختصّو الأمن ذلك: الدليل الوحيد على الدفع هو المال الظاهر في حسابك أنت. لذلك يجب أن يرفض الصندوق إغلاق بيع QR ما دام التأكيد لم يُرَ، وأن تحمي هذه القاعدة الصندوقي حين يُلحّ الزبون.",
        "**التحصيل المزدوج** هو الخطأ المعاكس: دفعة QR تبدو فاشلة، فيدفع الزبون نقداً، ثم تمرّ الـQR رغم ذلك. حالة «دفعة معلّقة» ظاهرة في الصندوق، واسترجاع متتبَّع على الطريقة نفسها، يحلّان الأمر دون نزاع. و**المبلغ الخاطئ في الجهاز**، 1500 كُتب 150، يختفي حين يرسل الصندوق المبلغ إلى الجهاز، أو حين يُراقب وصل البنك مقابل تذكرة الصندوق.",
      ] },
      { heading: 'ما بعد الكاونتر: التسليم والأسواق', body: [
        "القواعد نفسها تصحّ خارج المحل. **عند التسليم** يسمح رمز QR خاص بالطلبية للزبون بالدفع على عتبة الباب، وللموزّع بإرجاع نقد أقل؛ ويجب أن يُقرأ التأكيد حتى مع شبكة ضعيفة، ولا تُغلق الطلبية إلا بعد رؤية الدفعة. إنه الامتداد الطبيعي [لمنصات التوصيل والدفع عند الاستلام](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/).",
        "**في الأسواق وللباعة المتجوّلين** قد يحلّ الهاتف المتحوّل إلى جهاز دفع، المعلن لنهاية 2026، محلّ الجهاز الثابت: يجب التحقق من نشره الفعلي وشروطه لدى البنوك. ومنطق المطابقة يبقى نفسه: بيع واحد، دفعة مرئية واحدة، عمود واحد.",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ست حالات، من المحل الذي يريد صندوقاً مضبوطاً إلى المؤسس الذي يريد بيعه لآلاف التجار.",
      ], visual: 'models', after: [
        "**المحل أو السلسلة** يربح أولاً إغلاقات صحيحة ووقتاً يُعاد للمسيّر؛ وتربح السلسلة إضافة إلى ذلك رؤية كل محل، بشرط مزامنة السلع والأسعار. **الصندوق بالاشتراك للتجار** سوق تكبر مع 126000 جهاز و23 مليون بطاقة، لكنه مهنة دعم بقدر ما هو برنامج: تركيب، عتاد، تكوين، ورد في ليلة العيد. وتنطبق قواعد [SaaS في الجزائر](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/).",
        "**المقاهي والوجبات السريعة** تحتاج السرعة أساساً: تأكيد بطيء يصنع طابوراً. و**الدفع بالـQR عند التسليم** يقلّل النقد عند الموزّعين، بشرط أن يعمل على عتبة الباب. وبالنسبة لمؤسسة صغيرة أو متوسطة تبدأ تحوّلها، كثيراً ما يكون الصندوق أول لبنة، كما نفصّل في [رقمنة المؤسسة الصغيرة والمتوسطة سنة 2027](/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/).",
      ] },
      { heading: 'الجدول الزمني لسنة 2027', body: [
        "نحو اثني عشر أسبوعاً بين التأطير وتجربة مقارَنة، للجاهزية قبل رمضان.",
      ], visual: 'saison', after: [
        "**نوفمبر: التأطير**، الكتالوج والأسعار، والسؤال الذي يُطرح على بنكك: أي تأكيد لدفع QR وأي ربط بالجهاز ممكنان لحسابك. **نوفمبر وديسمبر: الصندوق متعدد الطرق**، ثم **ربط الجهاز والـQR** حسب ما يقدّمه البنك. **جانفي: التجربة على صندوق واحد** بمقارنة إغلاق الصندوق الجديد كل مساء بالطريقة القديمة.",
        "**فيفري ومارس: رمضان**، المنتظر نحو 8 فيفري، ذروة المبيعات لكثير من محلات المواد الغذائية، بطوابير المساء والدفع المقسَّم. **مارس وأفريل: كل الصناديق ولوحة المسيّر**، محلاً محلاً. وهذه المدد متّسقة مع ما نفصّله في [كم من الوقت لتطوير تطبيق أو منصة](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**قبول لقطات الشاشة.** تأكيد مزيّف واحد مقبول يكلّف أكثر من المطابقة.",
        "**رمز QR ثابت على الكاونتر.** دون مبلغ ولا مرجع لا تُربط الدفعة بأي بيع.",
        "**عدم سؤال البنك عمّا يسمح به.** ربط الجهاز وتأكيد الـQR يتوقفان على عرضه؛ يجب معرفة ذلك قبل البناء.",
        "**إغلاق إجمالي.** مجموع واحد لليوم يخفي الفوارق؛ يلزم عمود لكل طريقة.",
        "**نسيان كريدي الزبائن.** «كرني» الحي موجود؛ وإذا بقي على الورق أفلت من الصندوق.",
        "**تجاهل سهرات رمضان.** صندوق بطيء في ساعات الذروة يصنع طوابير وأخطاء.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والبيانات باسم التاجر منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "كيف أتحقق من أن الزبون دفع فعلاً برمز QR؟", a: "بتأكيد بنكك، أبداً بلقطة شاشة الزبون. وحسب ما يقدّمه بنكك، يصل التأكيد مباشرة إلى الصندوق أو يُقرأ في تطبيق التاجر. ولا يجب أن يُغلق البيع إلا بعد رؤية هذا التأكيد." },
        { q: "كم عدد أجهزة الدفع في الجزائر؟", a: "نحو 126000 في أوت 2026، مقابل 78000 في ديسمبر 2025، حسب أرقام تجمّع النقد الآلي التي نقلتها «الجزائر إيكو». وفي السداسي الأول من 2026 تجاوزت المدفوعات عبر الأجهزة 8 ملايين عملية، بارتفاع 81 %." },
        { q: "هل يستطيع الصندوق إرسال المبلغ إلى جهاز الدفع؟", a: "يتوقف ذلك على طراز الجهاز وما يسمح به البنك. وحين لا يكون ذلك ممكناً، يُكتب المبلغ ويُراقب مقابل وصل البنك عند الإغلاق. اطرح السؤال على بنكك منذ التأطير." },
        { q: "هل الدفع بالهاتف دون جهاز متاح؟", a: "أعلنه تجمّع النقد الآلي لنهاية 2026، بتحويل هاتف متوافق إلى جهاز دفع. تحقّق لدى بنكك أين وصل النشر وبأي شروط قبل إدماجه في مشروعك." },
        { q: "هل يستطيع الصندوق تسيير كريدي الزبائن؟", a: "نعم: دفتر رقمي لكل زبون، بسقف وسجل وتذكيرات، يعوّض الكراس دون تغيير العلاقة. وتدخل تسديدات الكريدي في الإغلاق مثل باقي المدفوعات." },
        { q: "كم من الوقت يلزم للجاهزية؟", a: "نحو اثني عشر أسبوعاً بين التأطير ونهاية تجربة مقارَنة على صندوق واحد، بالتحصيل متعدد الطرق وربط الجهاز والـQR حسب عرض البنك. ثم يأتي النشر على كل الصناديق ولوحة المسيّر خلال شهر إلى شهرين." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "لم يعد السؤال «هل أقبل الـQR؟» بل «كيف يعرف صندوقي من دفع ماذا؟»." },
      { after: 4, text: "لقطة الشاشة مجرد صورة؛ وحده تأكيد البنك يثبت أن المال وصل." },
    ],
    cta: { eyebrow: 'صف لنا محلك', title: "محل مواد غذائية، أو متجر، أو مقهى، أو صيدلية، أو سلسلة، أو صندوق للإطلاق لتجار آخرين: عدد الصناديق والمحلات، وحصة المدفوعات بالبطاقة والـQR اليوم، وبنكك وجهازك. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop الصناديق وأنظمة مطابقة المدفوعات ودفاتر الكريدي الرقمية ولوحات القيادة للمحلات والسلاسل الجزائرية، بالعربية والفرنسية والإنجليزية. مهندسون ذوو خبرة في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، والخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'تسيير تجارتك في الجزائر من فرنسا سنة 2027' },
      { href: '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/', kind: 'صندوق', name: 'صندوق المطعم: الطلبات والقاعة والمطبخ' },
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'رقمنة المؤسسة الصغيرة والمتوسطة في الجزائر سنة 2027' },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'منصات التوصيل في الجزائر سنة 2027' },
    ] },
  },
};

const KEYWORDS = "caisse enregistreuse algérie 2027, logiciel de caisse algérie, paiement QR code commerçant algérie, accepter paiement QR DZ Mob Pay, TPE paiement carte CIB Edahabia commerçant, rapprochement paiements caisse, fausse capture d'écran paiement, logiciel caisse supérette algérie, POS software algeria QR payment, صندوق تسجيل الدفع QR الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
