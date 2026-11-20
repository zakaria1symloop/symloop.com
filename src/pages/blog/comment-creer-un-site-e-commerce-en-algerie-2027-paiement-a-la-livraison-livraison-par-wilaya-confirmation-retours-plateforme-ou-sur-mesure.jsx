import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-un-site-e-commerce-en-algerie-2027-paiement-a-la-livraison-livraison-par-wilaya-confirmation-retours-plateforme-ou-sur-mesure.mjs';

const SLUG = 'comment-creer-un-site-e-commerce-en-algerie-2027-paiement-a-la-livraison-livraison-par-wilaya-confirmation-retours-plateforme-ou-sur-mesure';
const FIGURES = ['entonnoir', 'couches', 'choix', 'ordre', 'argent', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  livrer: '/blog/livrer-sans-adresse-algerie-2027-point-gps-repere-zones-de-livraison-geocodage-confirmation-whatsapp-ce-qu-on-construit/',
  produit: '/blog/le-meme-produit-existe-en-douze-lignes-fiche-produit-application-algerie-2027-variantes-conditionnements-codes-barres-prix-ce-qu-on-construit/',
  annulees: '/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/',
  client: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  marketplace: '/blog/apres-jumia-creer-marketplace-ecommerce-algerie-2027-verticale-logistique-paiement/',
};

const CONTENT = {
  fr: {
    kind: 'Site e-commerce · Algérie · 2027', title: "Comment créer un site e-commerce en Algérie (2027) : les commandes se perdent dans les messages et un colis sur quatre revient, catalogue, confirmation, paiement à la livraison ou par carte, tarif par wilaya, retours",
    dek: "« Je vends sur Instagram et Facebook depuis deux ans. Les commandes arrivent par messages, on les note dans un cahier, on rappelle pour confirmer quand on a le temps, et un colis sur quatre revient. Je veux un vrai site : WordPress, une plateforme, ou sur mesure ? Paiement à la livraison ou par carte ? Et combien de temps avant la première commande ? » Le site est la partie facile. Ce qui fait qu'il rapporte, c'est ce qui se passe après le clic : la confirmation, la livraison, et l'argent qui revient des transporteurs.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Créer un site e-commerce', 'Paiement à la livraison', 'Livraison par wilaya', 'Taux de conversion', 'Retours de colis', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un site e-commerce qui marche ici tient en cinq couches : **un catalogue** au stock réel, **une commande** en trois écrans avec les frais affichés avant de valider, **un paiement** à la livraison d'abord et par carte ensuite, **une livraison** au tarif connu par wilaya, **un après-vente** qui confirme dans l'heure et rappelle le jour de la livraison. Commencez par mesurer cinq taux, de la visite à la commande payée : le plus faible dit où travailler. Dans notre exemple, 240 commandes passées donnent 135 commandes payées, et deux corrections en ramènent 44. Comptez dix semaines jusqu'à la première commande livrée.",
      "Ce guide s'adresse au commerçant qui vend déjà par les réseaux sociaux ou en boutique et veut un vrai site, et au fondateur installé en France qui veut vendre en Algérie. Les définitions citées viennent de sources publiques : le paiement à la livraison, le taux de conversion, l'abandon de panier, l'extension WooCommerce, la date d'ouverture du paiement sur internet par carte CIB. La boutique, ses visites, ses taux et ses délais sont un exemple construit. Ce guide ne traite ni des obligations légales du commerce en ligne ni de fiscalité : voyez votre conseil avant d'ouvrir.",
    ],
    sections: [
      { heading: "Où se perdent les commandes : cinq taux, dont deux après le clic", body: [
        "La figure suit un mois d'une boutique en ligne, de la visite à la commande livrée et payée.",
      ], visual: 'entonnoir', after: [
        "**Cinq taux.** Le taux de conversion est la part des visiteurs d'un site qui vont au-delà de la simple visite et font l'action attendue. On le découpe en cinq : voir une fiche, ajouter au panier, commander, être confirmé, être livré et payé. **L'abandon de panier** est partout : l'institut Baymard, qui fait la moyenne de cinquante études, le situe autour de 70 %. Dans l'exemple, 600 paniers donnent 240 commandes : c'est dans la norme. **Ce qui est propre à ici.** Deux étapes de plus, après le clic. Avec le paiement à la livraison, une commande n'est pas encore une vente : il faut la confirmer, puis que le client ouvre sa porte et paie.",
        "**Le calcul.** Sur 240 commandes passées, 180 sont confirmées et 135 livrées et payées : 105 se perdent après le clic. En appelant ou en écrivant dans l'heure, la confirmation passe de 75 à 88 % ; en affichant les frais de livraison avant la validation et en rappelant le client le jour même, la livraison passe de 75 à 85 %. Résultat : 179 commandes payées au lieu de 135, sans un visiteur de plus. Ces chiffres sont inventés pour montrer le calcul ; les causes des refus et les parades sont détaillées dans [le guide sur les commandes annulées à la livraison](" + L.annulees + ").",
      ] },
      { heading: "Un site e-commerce, en cinq couches", body: [
        "La couche accentuée est la livraison.",
      ], visual: 'couches', after: [
        "**Le catalogue.** Une fiche par produit, ses variantes de taille ou de couleur, des photos qui pèsent peu, et surtout un stock réel : vendre un article épuisé, c'est un appel d'excuses et un client perdu. La construction est celle du [guide sur la fiche produit](" + L.produit + "). **La commande.** Trois écrans : le panier, les coordonnées, la confirmation. Pas de compte obligatoire : le numéro de téléphone suffit à reconnaître un client, comme dans [le guide sur le fichier client unique](" + L.client + "). Les frais de livraison s'affichent dès que la wilaya est choisie, avant de valider.",
        "**Le paiement.** Le paiement à la livraison, c'est la vente à distance où le paiement se fait à la remise du colis plutôt qu'à l'avance : beaucoup d'acheteurs ne commandent pas sans lui, et il faut le proposer. Le paiement sur internet par carte CIB est opérationnel en Algérie depuis octobre 2016 ; l'ajouter retire le refus à la porte pour ceux qui s'en servent. L'intégration est décrite dans [le guide sur le paiement en ligne](" + L.paiement + "). **La livraison.** Un tarif et un délai par wilaya, plusieurs transporteurs pour ne dépendre d'aucun, une étiquette imprimée, un suivi. Quand l'adresse n'existe pas, on livre à un point : voir [le guide pour livrer sans adresse](" + L.livrer + ").",
      ] },
      { heading: "Cinq façons de vendre en ligne : plateforme, WordPress ou sur mesure", body: [
        "La figure rapproche cinq façons de vendre de ce qu'on y gagne et de ce qu'il faut vérifier.",
      ], visual: 'choix', after: [
        "**Les réseaux sociaux seuls.** C'est par là que beaucoup commencent, et c'est une bonne école : on y apprend ce qui se vend, et vers où. La limite arrive quand les commandes se perdent dans les messages et que personne ne sait ce qui reste en stock. **Une plateforme hébergée.** La boutique est en ligne en quelques jours, et l'entretien n'est pas votre affaire. À vérifier avant de s'engager : le paiement local, les tarifs par wilaya, la langue arabe, et l'abonnement, souvent facturé en devises.",
        "**WordPress.** WooCommerce est une extension de commerce en ligne, libre, pour WordPress : le site vous appartient et les modules abondent. La contrepartie est l'entretien : mises à jour, sécurité, vitesse. **Une marketplace** apporte des visiteurs dès le premier jour, contre une commission et des clients qui restent les siens ; le modèle est décrit dans [le guide sur les marketplaces](" + L.marketplace + "). **Le sur-mesure** se justifie quand le volume ou le métier dépasse les modules : stock partagé avec une boutique physique, plusieurs dépôts, règles de confirmation, rapprochement des transporteurs. Ce n'est pas le point de départ de tout le monde.",
      ] },
      { heading: "Construire dans cet ordre", body: [
        "Le premier temps est accentué : mesurer.",
      ], visual: 'ordre', after: [
        "**Mesurer d'abord.** Combien de commandes par semaine aujourd'hui, vers quelles wilayas, avec combien de retours, et pour quelles raisons : ces quatre chiffres décident du reste. **Catalogue, commande, livraison.** Dans cet ordre, parce que chaque couche s'appuie sur la précédente : on ne confirme pas une commande sur un stock faux, on ne promet pas un délai sans transporteur.",
        "**Le paiement en ligne** vient ensuite : il demande un dossier auprès de la banque, qui a son propre délai, et le site vend déjà sans lui. **L'acquisition en dernier.** La publicité amène des visiteurs en haut de l'entonnoir. Si près d'une commande sur deux se perd après le clic, une bonne part de la publicité paie des colis qui reviennent : on répare d'abord, on achète des visites ensuite.",
      ] },
      { heading: "Où est le colis, où est l'argent : dix jours d'une commande", body: [
        "La figure suit, sur dix jours, le colis d'un côté et l'argent de l'autre.",
      ], visual: 'argent', after: [
        "**Deux files.** Le colis part le lendemain de la commande et arrive au troisième jour. L'argent, lui, suit un autre chemin : le client paie le livreur, le livreur remet les espèces au transporteur, et le transporteur vous verse le total une fois par semaine, moins ses frais. Dans l'exemple, dix jours séparent la commande de l'argent sur le compte. **Ce que cela implique.** Une semaine de ventes est en permanence chez les transporteurs, alors que la marchandise, l'emballage et la publicité sont déjà payés.",
        "**Le rapprochement.** Chaque versement se vérifie colis par colis : livrés, refusés, en cours, frais retenus. Sans cela, un colis encaissé et jamais versé ne se voit pas. **Le refus.** Un colis refusé coûte l'aller et le retour, et immobilise le produit six jours dans l'exemple. D'où l'intérêt de la confirmation, du rappel, et de la carte pour ceux qui l'acceptent : le colis part déjà payé.",
      ] },
      { heading: "Dix semaines jusqu'à la première commande livrée, en 2027", body: [
        "Dix semaines dans l'exemple, dont trois pour la livraison.",
      ], visual: 'calendrier', after: [
        "**Semaines 1 à 3, la mesure et le catalogue.** **Semaines 3 à 5, la commande et la confirmation** : c'est ici que se gagnent les treize points de l'exemple. **Semaines 5 à 7, la livraison** : tarifs, transporteurs, étiquettes, retours, rapprochement.",
        "**Semaines 6 à 9, le paiement en ligne**, en parallèle. **Semaines 9 et 10, l'ouverture** : de vraies commandes, cinq taux regardés chaque semaine, et la publicité seulement quand ils tiennent. Avec une plateforme hébergée et un petit catalogue, c'est plus court ; avec un stock partagé entre boutique et site, c'est plus long.",
      ], list: [
        "**Ce que le gérant reçoit** : un site à son nom, un tableau des cinq taux chaque semaine, l'état de chaque commande et de chaque colis, et le rapprochement des versements de chaque transporteur.",
        "**Ce que l'entreprise ne fait plus** : noter les commandes dans un cahier, vendre un article épuisé, annoncer les frais au téléphone après la commande, découvrir trop tard un colis jamais versé.",
        "**Ce qui est mesuré** : les cinq taux, le délai entre la commande et la confirmation, les refus par wilaya et par transporteur, les jours entre la livraison et le versement.",
        "**Ce que fait Symloop** : la mesure de départ, le catalogue au stock réel, la commande et la confirmation, les tarifs par wilaya et le branchement aux transporteurs, le paiement par carte, le rapprochement, puis le suivi des cinq taux ; sur une base existante quand elle suffit, sur mesure quand le métier le demande.",
      ], faq: [
        { q: "Comment créer un site e-commerce en Algérie ?", a: "En construisant cinq couches dans l'ordre : un catalogue au stock réel, une commande en trois écrans, un paiement à la livraison puis par carte, une livraison au tarif connu par wilaya, et un après-vente qui confirme dans l'heure. Avant cela, mesurez ce que vous vendez déjà et combien de colis reviennent." },
        { q: "Combien de temps faut-il pour lancer un site e-commerce ?", a: "Dix semaines dans notre exemple, jusqu'à la première commande livrée : trois pour la mesure et le catalogue, trois pour la commande et la confirmation, trois pour la livraison, le paiement en ligne en parallèle. Quelques semaines de moins avec une plateforme hébergée et un petit catalogue." },
        { q: "WordPress, une plateforme ou un site sur mesure : que choisir ?", a: "Une plateforme hébergée pour ouvrir vite avec un catalogue simple, après avoir vérifié le paiement local et les tarifs par wilaya. WordPress si quelqu'un l'entretient. Le sur-mesure quand le métier dépasse les modules : stock partagé avec une boutique, plusieurs dépôts, rapprochement des transporteurs." },
        { q: "Faut-il proposer le paiement à la livraison ou le paiement par carte ?", a: "Les deux. Le paiement à la livraison parce que beaucoup d'acheteurs ne commandent pas sans lui ; la carte, CIB ou Edahabia, parce qu'un colis déjà payé n'est pas refusé à la porte pour une question d'argent, et que l'argent n'attend pas le transporteur." },
        { q: "Pourquoi autant de colis reviennent-ils ?", a: "Parce que la commande n'a pas été confirmée, que les frais ont été découverts à la porte, que le délai a été trop long ou que le client était absent. Les parades : un appel ou un message dans l'heure, les frais affichés avant de valider, un rappel le jour de la livraison." },
        { q: "Comment fixer les frais de livraison ?", a: "Avec une grille par wilaya, tirée des tarifs de vos transporteurs, et affichée au client dès qu'il choisit sa wilaya, avant qu'il valide. Un tarif découvert au téléphone ou à la porte est une cause de refus. La livraison offerte au-delà d'un montant se décide sur votre marge." },
        { q: "Peut-on continuer à vendre sur Instagram et Facebook avec un site ?", a: "Oui, et c'est recommandé : les réseaux amènent les clients, le site prend la commande. La différence est que chaque commande arrive dans le même carnet, avec le stock décompté et un numéro de suivi, au lieu de rester dans une conversation." },
        { q: "À partir de quand un site e-commerce sur mesure se justifie-t-il ?", a: "Pas à partir d'un nombre de commandes, mais de trois signes : le stock est partagé avec une boutique ou plusieurs dépôts, les règles de confirmation et de livraison ne rentrent plus dans les modules, et le rapprochement des transporteurs se fait à la main chaque semaine." },
        { q: "Quand l'argent des commandes arrive-t-il sur mon compte ?", a: "Pour une commande payée à la livraison, après le versement du transporteur : dix jours après la commande dans notre exemple, avec un versement par semaine. Demandez à chaque transporteur son rythme. Pour une commande payée par carte, selon les délais de votre banque." },
        { q: "Faut-il faire de la publicité dès l'ouverture ?", a: "Non. Ouvrez avec vos clients actuels, suivez les cinq taux pendant quelques semaines, corrigez la confirmation et la livraison, puis achetez des visites. La publicité versée dans un entonnoir qui fuit paie surtout des colis qui reviennent." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Avec le paiement à la livraison, une commande n'est pas encore une vente." },
      { after: 4, text: "Une semaine de ventes est en permanence chez les transporteurs." },
    ],
    cta: { eyebrow: "Envoyez-nous vos chiffres d'un mois : commandes reçues, confirmées, livrées, revenues, et vers quelles wilayas. Nous vous disons quelle étape vous coûte le plus, et ce qu'il faut construire en premier", title: "Commandes perdues dans les messages, colis qui reviennent, argent des transporteurs jamais vérifié, ou fondateur en France qui veut vendre en Algérie : nous construisons le site, et surtout ce qui se passe après le clic", body: "Catalogue au stock réel, commande courte, confirmation, tarifs par wilaya, transporteurs, paiement par carte, rapprochement, suivi des cinq taux. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.paiement, kind: '2027', name: 'Intégrer le paiement en ligne CIB et Edahabia : page de paiement, états de commande' },
      { href: L.livrer, kind: '2027', name: 'Livrer sans adresse : point GPS, repère, zones de livraison' },
      { href: L.produit, kind: '2027', name: 'La fiche produit : variantes, conditionnements, codes-barres, prix' },
      { href: L.annulees, kind: '2026', name: 'Commandes annulées à la livraison : causes et parades' },
    ] },
  },
  en: {
    kind: 'E-commerce site · Algeria · 2027', title: "How to create an e-commerce site in Algeria (2027): orders get lost in the messages and one parcel in four comes back, catalogue, confirmation, cash on delivery or card, fee per wilaya, returns",
    dek: "“I have been selling on Instagram and Facebook for two years. Orders come in by message, we write them in a notebook, we call back to confirm when we have time, and one parcel in four comes back. I want a real site: WordPress, a platform, or custom-built? Cash on delivery or card? And how long before the first order?” The site is the easy part. What makes it pay is what happens after the click: confirmation, delivery, and the money coming back from the carriers.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Creating an e-commerce site', 'Cash on delivery', 'Delivery per wilaya', 'Conversion rate', 'Parcel returns', 'Algeria 2027'],
    intro: [
      "**Short answer.** An e-commerce site that works here comes down to five layers: **a catalogue** with real stock, **an order** in three screens with the fees shown before confirming, **payment** on delivery first and by card next, **delivery** at a known fee per wilaya, **after-sales** that confirms within the hour and reminds on delivery day. Start by measuring five rates, from the visit to the paid order: the lowest says where to work. In our example, 240 orders placed give 135 paid orders, and two fixes bring 44 back. Allow ten weeks to the first delivered order.",
      "This guide is for the trader who already sells through social networks or in a shop and wants a real site, and for the founder based in France who wants to sell in Algeria. The definitions quoted come from public sources: cash on delivery, the conversion rate, basket abandonment, the WooCommerce plugin, the date online payment by CIB card opened. The shop, its visits, its rates and its delays are a constructed example. This guide covers neither the legal obligations of online trade nor tax: see your adviser before opening.",
    ],
    sections: [
      { heading: "Where orders are lost: five rates, two of them after the click", body: [
        "The figure follows one month of an online shop, from the visit to the order delivered and paid.",
      ], visual: 'entonnoir', after: [
        "**Five rates.** The conversion rate is the proportion of visitors to a website who take action to go beyond a casual visit. It is split into five: see a product page, add to the basket, order, be confirmed, be delivered and paid. **Basket abandonment** is everywhere: the Baymard Institute, which averages fifty studies, puts it at around 70 %. In the example, 600 baskets give 240 orders: that is within the norm. **What is specific here.** Two more steps, after the click. With cash on delivery, an order is not yet a sale: it has to be confirmed, and then the customer has to open the door and pay.",
        "**The sum.** Out of 240 orders placed, 180 are confirmed and 135 delivered and paid: 105 are lost after the click. By calling or writing within the hour, confirmation rises from 75 to 88 %; by showing the delivery fee before confirmation and reminding the customer on the day, delivery rises from 75 to 85 %. Result: 179 paid orders instead of 135, without one more visitor. These figures are invented to show the calculation; the causes of refusals and the remedies are detailed in [the guide to orders cancelled on delivery](" + L.annulees + ").",
      ] },
      { heading: "An e-commerce site, in five layers", body: [
        "The accented layer is delivery.",
      ], visual: 'couches', after: [
        "**The catalogue.** One page per product, its size or colour variants, photos that weigh little, and above all real stock: selling an item that has run out means an apology call and a lost customer. The construction is that of [the guide to the product record](" + L.produit + "). **The order.** Three screens: the basket, the contact details, the confirmation. No compulsory account: the phone number is enough to recognise a customer, as in [the guide to the single customer file](" + L.client + "). The delivery fee appears as soon as the wilaya is chosen, before confirming.",
        "**Payment.** Cash on delivery is the sale of goods by mail order where payment is made on delivery rather than in advance: many buyers will not order without it, and it has to be offered. Online payment by CIB card has been operational in Algeria since October 2016; adding it removes the refusal at the door for those who use it. The integration is described in [the guide to online payment](" + L.paiement + "). **Delivery.** A fee and a time per wilaya, several carriers so as to depend on none, a printed label, tracking. When the address does not exist, you deliver to a point: see [the guide to delivering without an address](" + L.livrer + ").",
      ] },
      { heading: "Five ways to sell online: platform, WordPress or custom-built", body: [
        "The figure sets five ways of selling against what you gain and what to check.",
      ], visual: 'choix', after: [
        "**Social networks alone.** That is where many start, and it is a good school: you learn what sells, and where to. The limit comes when orders get lost in the messages and nobody knows what is left in stock. **A hosted platform.** The shop is online in a few days, and the upkeep is not your concern. To check before committing: local payment, fees per wilaya, the Arabic language, and the subscription, often billed in foreign currency.",
        "**WordPress.** WooCommerce is an open-source e-commerce plugin for WordPress: the site is yours and modules abound. The price is upkeep: updates, security, speed. **A marketplace** brings visitors from the first day, in exchange for a commission and customers who remain its own; the model is described in [the guide to marketplaces](" + L.marketplace + "). **Custom-built** is justified when the volume or the trade outgrows the modules: stock shared with a physical shop, several warehouses, confirmation rules, reconciliation of carriers. It is not everyone's starting point.",
      ] },
      { heading: "Build in this order", body: [
        "The first step is accented: measure.",
      ], visual: 'ordre', after: [
        "**Measure first.** How many orders a week today, to which wilayas, with how many returns, and for what reasons: those four figures decide the rest. **Catalogue, order, delivery.** In that order, because each layer rests on the one before: you do not confirm an order on wrong stock, you do not promise a delivery time without a carrier.",
        "**Online payment** comes next: it requires a file with the bank, which has its own timing, and the site already sells without it. **Acquisition last.** Advertising brings visitors to the top of the funnel. If nearly one order in two is lost after the click, a good share of the advertising pays for parcels that come back: you repair first, and buy visits afterwards.",
      ] },
      { heading: "Where the parcel is, where the money is: ten days of an order", body: [
        "The figure follows, over ten days, the parcel on one side and the money on the other.",
      ], visual: 'argent', after: [
        "**Two queues.** The parcel leaves the day after the order and arrives on the third day. The money follows another path: the customer pays the driver, the driver hands the cash to the carrier, and the carrier pays you the total once a week, less its fees. In the example, ten days separate the order from the money in the account. **What that implies.** A week of sales is permanently with the carriers, while the goods, the packaging and the advertising are already paid for.",
        "**Reconciliation.** Each payout is checked parcel by parcel: delivered, refused, in progress, fees withheld. Without that, a parcel collected and never paid out is not seen. **The refusal.** A refused parcel costs the trip out and the trip back, and ties the product up for six days in the example. Hence the value of confirmation, of the reminder, and of the card for those who accept it: the parcel leaves already paid.",
      ] },
      { heading: "Ten weeks to the first delivered order, in 2027", body: [
        "Ten weeks in the example, three of them for delivery.",
      ], visual: 'calendrier', after: [
        "**Weeks 1 to 3, measurement and the catalogue.** **Weeks 3 to 5, the order and confirmation**: this is where the thirteen points of the example are won. **Weeks 5 to 7, delivery**: fees, carriers, labels, returns, reconciliation.",
        "**Weeks 6 to 9, online payment**, in parallel. **Weeks 9 and 10, opening**: real orders, five rates looked at every week, and advertising only once they hold. With a hosted platform and a small catalogue, it is shorter; with stock shared between shop and site, it is longer.",
      ], list: [
        "**What the manager receives**: a site in their name, a table of the five rates every week, the status of each order and each parcel, and the reconciliation of each carrier's payouts.",
        "**What the company no longer does**: write orders in a notebook, sell an item that has run out, announce the fees by phone after the order, discover too late a parcel never paid out.",
        "**What is measured**: the five rates, the time between the order and the confirmation, refusals per wilaya and per carrier, the days between delivery and payout.",
        "**What Symloop does**: the starting measurement, the catalogue with real stock, the order and confirmation, the fees per wilaya and the connection to carriers, card payment, reconciliation, then following the five rates; on an existing base when it is enough, custom-built when the trade requires it.",
      ], faq: [
        { q: "How do you create an e-commerce site in Algeria?", a: "By building five layers in order: a catalogue with real stock, an order in three screens, payment on delivery then by card, delivery at a known fee per wilaya, and after-sales that confirms within the hour. Before that, measure what you already sell and how many parcels come back." },
        { q: "How long does it take to launch an e-commerce site?", a: "Ten weeks in our example, to the first delivered order: three for measurement and the catalogue, three for the order and confirmation, three for delivery, online payment in parallel. A few weeks less with a hosted platform and a small catalogue." },
        { q: "WordPress, a platform or a custom-built site: which to choose?", a: "A hosted platform to open quickly with a simple catalogue, after checking local payment and fees per wilaya. WordPress if someone maintains it. Custom-built when the trade outgrows the modules: stock shared with a shop, several warehouses, reconciliation of carriers." },
        { q: "Should we offer cash on delivery or card payment?", a: "Both. Cash on delivery because many buyers will not order without it; the card, CIB or Edahabia, because a parcel already paid for is not refused at the door over money, and the money does not wait for the carrier." },
        { q: "Why do so many parcels come back?", a: "Because the order was not confirmed, the fees were discovered at the door, the delivery took too long or the customer was out. The remedies: a call or a message within the hour, the fees shown before confirming, a reminder on delivery day." },
        { q: "How do you set delivery fees?", a: "With a grid per wilaya, drawn from your carriers' rates, and shown to the customer as soon as they choose their wilaya, before they confirm. A fee discovered on the phone or at the door is a cause of refusal. Free delivery above an amount is decided on your margin." },
        { q: "Can we keep selling on Instagram and Facebook with a site?", a: "Yes, and it is recommended: the networks bring the customers, the site takes the order. The difference is that every order arrives in the same book, with stock deducted and a tracking number, instead of staying in a conversation." },
        { q: "When is a custom-built e-commerce site justified?", a: "Not from a number of orders, but from three signs: stock is shared with a shop or several warehouses, the confirmation and delivery rules no longer fit the modules, and the reconciliation of carriers is done by hand every week." },
        { q: "When does the money from orders reach my account?", a: "For a cash-on-delivery order, after the carrier's payout: ten days after the order in our example, with one payout a week. Ask each carrier for its rhythm. For an order paid by card, according to your bank's timing." },
        { q: "Should we advertise from the opening?", a: "No. Open with your current customers, follow the five rates for a few weeks, fix confirmation and delivery, then buy visits. Advertising poured into a leaking funnel mostly pays for parcels that come back." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "With cash on delivery, an order is not yet a sale." },
      { after: 4, text: "A week of sales is permanently sitting with the carriers." },
    ],
    cta: { eyebrow: "Send us your figures for one month: orders received, confirmed, delivered, returned, and to which wilayas. We tell you which step costs you the most, and what to build first", title: "Orders lost in the messages, parcels that come back, carriers' money never checked, or a founder in France who wants to sell in Algeria: we build the site, and above all what happens after the click", body: "Catalogue with real stock, short order, confirmation, fees per wilaya, carriers, card payment, reconciliation, following the five rates. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.paiement, kind: '2027', name: 'Integrating CIB and Edahabia online payment: payment page, order states' },
      { href: L.livrer, kind: '2027', name: 'Delivering without an address: GPS point, landmark, delivery zones' },
      { href: L.produit, kind: '2027', name: 'The product record: variants, packaging, barcodes, prices' },
      { href: L.annulees, kind: '2026', name: 'Orders cancelled on delivery: causes and remedies' },
    ] },
  },
  ar: {
    kind: 'موقع تجارة إلكترونية · الجزائر · 2027', title: "كيف يُنشأ موقع تجارة إلكترونية في الجزائر (2027): الطلبيات تضيع في الرسائل وطرد من أربعة يعود، فهرس، تأكيد، دفع عند التسليم أو بالبطاقة، تسعيرة لكل ولاية، وإرجاع",
    dek: "«أبيع على إنستغرام وفيسبوك منذ سنتين. الطلبيات تصل برسائل، نسجّلها في كراس، نعاود الاتصال للتأكيد حين يتوفر الوقت، وطرد من أربعة يعود. أريد موقعاً حقيقياً: ووردبريس، منصة، أم على المقاس؟ دفع عند التسليم أم بالبطاقة؟ وكم من الوقت قبل أول طلبية؟» الموقع هو الجزء السهل. وما يجعله مربحاً هو ما يحدث بعد النقرة: التأكيد، التسليم، والمال الذي يعود من الناقلين.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['إنشاء موقع تجارة إلكترونية', 'الدفع عند التسليم', 'التوصيل حسب الولاية', 'نسبة التحويل', 'إرجاع الطرود', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** موقع التجارة الإلكترونية الذي ينجح هنا خمس طبقات: **فهرس** بمخزون حقيقي، **طلبية** في ثلاث شاشات مع عرض المصاريف قبل التأكيد، **دفع** عند التسليم أولاً ثم بالبطاقة، **توصيل** بتسعيرة معروفة لكل ولاية، و**ما بعد البيع** يؤكّد خلال الساعة ويذكّر يوم التسليم. ابدؤوا بقياس خمس نسب، من الزيارة إلى الطلبية المدفوعة: أضعفها تقول أين نعمل. في مثالنا، 240 طلبية تعطي 135 طلبية مدفوعة، وتصحيحان يستعيدان 44. واحسبوا عشرة أسابيع إلى أول طلبية مسلَّمة.",
      "هذا الدليل موجَّه إلى التاجر الذي يبيع أصلاً عبر شبكات التواصل أو في محل ويريد موقعاً حقيقياً، وإلى المؤسس المقيم في فرنسا الذي يريد البيع في الجزائر. التعريفات المذكورة آتية من مصادر علنية: الدفع عند التسليم، نسبة التحويل، التخلي عن السلة، إضافة " + I('WooCommerce') + "، وتاريخ فتح الدفع على الإنترنت ببطاقة " + I('CIB') + ". المتجر وزياراته ونسبه وآجاله مثال مركَّب. هذا الدليل لا يتناول الواجبات القانونية للتجارة الإلكترونية ولا الجباية: راجعوا مستشاركم قبل الفتح.",
    ],
    sections: [
      { heading: "أين تضيع الطلبيات: خمس نسب، منها اثنتان بعد النقرة", body: [
        "الشكل يتابع شهراً من متجر إلكتروني، من الزيارة إلى الطلبية المسلَّمة والمدفوعة.",
      ], visual: 'entonnoir', after: [
        "**خمس نسب.** نسبة التحويل هي حصة زوّار الموقع الذين يتجاوزون مجرد الزيارة ويقومون بالفعل المنتظَر. ونقسّمها إلى خمس: رؤية بطاقة، الإضافة إلى السلة، الطلب، التأكيد، ثم التسليم والدفع. **التخلي عن السلة** في كل مكان: معهد " + I('Baymard') + "، الذي يحسب متوسط خمسين دراسة، يضعه حول 70 بالمئة. في المثال، 600 سلة تعطي 240 طلبية: وهذا في المعتاد. **ما يخصّ هنا.** مرحلتان إضافيتان، بعد النقرة. فمع الدفع عند التسليم، الطلبية ليست بيعاً بعد: يجب تأكيدها، ثم أن يفتح الزبون بابه ويدفع.",
        "**الحساب.** من 240 طلبية، 180 تُؤكَّد و135 تُسلَّم وتُدفع: 105 تضيع بعد النقرة. وبالاتصال أو الكتابة خلال الساعة، يرتفع التأكيد من 75 إلى 88 بالمئة؛ وبعرض مصاريف التوصيل قبل التأكيد وتذكير الزبون في اليوم نفسه، يرتفع التسليم من 75 إلى 85 بالمئة. النتيجة: 179 طلبية مدفوعة بدل 135، دون زائر إضافي. هذه الأرقام مخترَعة لبيان الحساب؛ وأسباب الرفض وعلاجها مفصَّلة في [دليل الطلبيات الملغاة عند التسليم](" + L.annulees + ").",
      ] },
      { heading: "موقع تجارة إلكترونية، في خمس طبقات", body: [
        "الطبقة المبرزة هي التوصيل.",
      ], visual: 'couches', after: [
        "**الفهرس.** بطاقة لكل منتَج، متغيّراته من مقاس أو لون، صور خفيفة الوزن، وخاصة مخزون حقيقي: بيع منتَج نفد يعني مكالمة اعتذار وزبوناً ضائعاً. والبناء هو بناء [دليل بطاقة المنتَج](" + L.produit + "). **الطلبية.** ثلاث شاشات: السلة، المعلومات، والتأكيد. دون حساب إجباري: رقم الهاتف يكفي لمعرفة الزبون، كما في [دليل ملف الزبون الواحد](" + L.client + "). ومصاريف التوصيل تُعرض حالما تُختار الولاية، قبل التأكيد.",
        "**الدفع.** الدفع عند التسليم هو البيع عن بعد الذي يتم فيه الدفع عند تسليم الطرد لا مسبقاً: مشترون كثيرون لا يطلبون دونه، ويجب اقتراحه. والدفع على الإنترنت ببطاقة " + I('CIB') + " يعمل في الجزائر منذ أكتوبر 2016؛ وإضافته تزيل الرفض عند الباب لمن يستعمله. والربط موصوف في [دليل الدفع الإلكتروني](" + L.paiement + "). **التوصيل.** تسعيرة وأجل لكل ولاية، عدة ناقلين لعدم الارتهان لواحد، ملصق مطبوع، وتتبّع. وحين لا يوجد العنوان، نسلّم في نقطة: انظر [دليل التوصيل دون عنوان](" + L.livrer + ").",
      ] },
      { heading: "خمس طرق للبيع على الإنترنت: منصة، ووردبريس أم على المقاس", body: [
        "الشكل يقرّب خمس طرق للبيع مما نربحه ومما يجب التحقق منه.",
      ], visual: 'choix', after: [
        "**شبكات التواصل وحدها.** من هنا يبدأ كثيرون، وهي مدرسة جيدة: نتعلم فيها ما يُباع، ونحو أين. والحدّ يأتي حين تضيع الطلبيات في الرسائل ولا يعرف أحد ما بقي في المخزون. **منصة مستضافة.** المتجر على الخط في بضعة أيام، والصيانة ليست شأنكم. وما يجب التحقق منه قبل الالتزام: الدفع المحلي، تسعيرات الولايات، اللغة العربية، والاشتراك، المفوتَر غالباً بالعملة الصعبة.",
        "**ووردبريس.** " + I('WooCommerce') + " إضافة تجارة إلكترونية، مفتوحة المصدر، لووردبريس: الموقع ملككم والإضافات وفيرة. والمقابل هو الصيانة: تحديثات، أمن، وسرعة. **السوق الإلكترونية** تأتي بزوّار من اليوم الأول، مقابل عمولة وزبائن يبقون زبائنها؛ والنموذج موصوف في [دليل الأسواق الإلكترونية](" + L.marketplace + "). **الموقع على المقاس** يُبرَّر حين يتجاوز الحجم أو المهنة الإضافات: مخزون مشترك مع محل، عدة مستودعات، قواعد تأكيد، ومطابقة الناقلين. وليس نقطة انطلاق الجميع.",
      ] },
      { heading: "البناء بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: القياس.",
      ], visual: 'ordre', after: [
        "**القياس أولاً.** كم طلبية في الأسبوع اليوم، نحو أي ولايات، بكم إرجاعاً، ولأي أسباب: هذه الأرقام الأربعة تحسم الباقي. **الفهرس، الطلبية، التوصيل.** بهذا الترتيب، لأن كل طبقة تستند إلى السابقة: لا نؤكّد طلبية على مخزون خاطئ، ولا نعد بأجل دون ناقل.",
        "**الدفع الإلكتروني** يأتي بعدها: يتطلب ملفاً لدى البنك، وله أجله الخاص، والموقع يبيع دونه. **جلب الزبائن آخراً.** الإشهار يأتي بزوّار إلى أعلى القمع. وإذا كانت نحو طلبية من اثنتين تضيع بعد النقرة، فجزء معتبر من الإشهار يدفع ثمن طرود تعود: نصلح أولاً، ونشتري الزيارات بعدها.",
      ] },
      { heading: "أين الطرد، وأين المال: عشرة أيام من عمر طلبية", body: [
        "الشكل يتابع، على عشرة أيام، الطرد من جهة والمال من جهة أخرى.",
      ], visual: 'argent', after: [
        "**طابوران.** الطرد ينطلق غداة الطلبية ويصل في اليوم الثالث. والمال يسلك طريقاً آخر: الزبون يدفع للموصِّل، الموصِّل يسلّم النقد للناقل، والناقل يصرف لكم المجموع مرة في الأسبوع، ناقص مصاريفه. في المثال، عشرة أيام تفصل الطلبية عن المال في الحساب. **ما يترتب عن ذلك.** أسبوع من المبيعات موجود باستمرار عند الناقلين، بينما السلعة والتغليف والإشهار مدفوعة أصلاً.",
        "**المطابقة.** كل صرف يُراجَع طرداً طرداً: المسلَّمة، المرفوضة، الجارية، والمصاريف المقتطَعة. ودون ذلك، طرد قُبض ثمنه ولم يُصرف لا يُرى. **الرفض.** الطرد المرفوض يكلّف الذهاب والعودة، ويجمّد المنتَج ستة أيام في المثال. ومن هنا فائدة التأكيد، التذكير، والبطاقة لمن يقبلها: الطرد ينطلق مدفوعاً.",
      ] },
      { heading: "عشرة أسابيع إلى أول طلبية مسلَّمة، سنة 2027", body: [
        "عشرة أسابيع في المثال، منها ثلاثة للتوصيل.",
      ], visual: 'calendrier', after: [
        "**الأسابيع من 1 إلى 3، القياس والفهرس.** **الأسابيع من 3 إلى 5، الطلبية والتأكيد**: هنا تُربح النقاط الثلاث عشرة في المثال. **الأسابيع من 5 إلى 7، التوصيل**: تسعيرات، ناقلون، ملصقات، إرجاع، ومطابقة.",
        "**الأسابيع من 6 إلى 9، الدفع الإلكتروني**، بالتوازي. **الأسبوعان 9 و10، الفتح**: طلبيات حقيقية، خمس نسب تُراجَع كل أسبوع، والإشهار فقط حين تثبت. بمنصة مستضافة وفهرس صغير، المدة أقصر؛ وبمخزون مشترك بين المحل والموقع، أطول.",
      ], list: [
        "**ما يستلمه المسيّر**: موقع باسمه، جدول النسب الخمس كل أسبوع، حالة كل طلبية وكل طرد، ومطابقة ما يصرفه كل ناقل.",
        "**ما لم تعد المؤسسة تفعله**: تسجيل الطلبيات في كراس، بيع منتَج نفد، إعلان المصاريف بالهاتف بعد الطلبية، واكتشاف متأخر لطرد لم يُصرف ثمنه.",
        "**ما يُقاس**: النسب الخمس، المدة بين الطلبية والتأكيد، الرفض حسب الولاية وحسب الناقل، والأيام بين التسليم والصرف.",
        "**ما تفعله Symloop**: قياس البداية، الفهرس بالمخزون الحقيقي، الطلبية والتأكيد، تسعيرات الولايات والربط بالناقلين، الدفع بالبطاقة، المطابقة، ثم متابعة النسب الخمس؛ على قاعدة موجودة حين تكفي، وعلى المقاس حين تتطلب المهنة ذلك.",
      ], faq: [
        { q: "كيف يُنشأ موقع تجارة إلكترونية في الجزائر؟", a: "ببناء خمس طبقات بالترتيب: فهرس بمخزون حقيقي، طلبية في ثلاث شاشات، دفع عند التسليم ثم بالبطاقة، توصيل بتسعيرة معروفة لكل ولاية، وما بعد البيع يؤكّد خلال الساعة. وقبل ذلك، قيسوا ما تبيعونه أصلاً وكم طرداً يعود." },
        { q: "كم من الوقت يلزم لإطلاق موقع تجارة إلكترونية؟", a: "عشرة أسابيع في مثالنا، إلى أول طلبية مسلَّمة: ثلاثة للقياس والفهرس، ثلاثة للطلبية والتأكيد، ثلاثة للتوصيل، والدفع الإلكتروني بالتوازي. وبضعة أسابيع أقل بمنصة مستضافة وفهرس صغير." },
        { q: "ووردبريس، منصة، أم موقع على المقاس: ماذا نختار؟", a: "منصة مستضافة للفتح بسرعة بفهرس بسيط، بعد التحقق من الدفع المحلي وتسعيرات الولايات. ووردبريس إذا كان أحد يصونه. وعلى المقاس حين تتجاوز المهنة الإضافات: مخزون مشترك مع محل، عدة مستودعات، ومطابقة الناقلين." },
        { q: "هل نقترح الدفع عند التسليم أم الدفع بالبطاقة؟", a: "الاثنين. الدفع عند التسليم لأن مشترين كثيرين لا يطلبون دونه؛ والبطاقة، " + I('CIB') + " أو " + I('Edahabia') + "، لأن الطرد المدفوع لا يُرفض عند الباب بسبب المال، ولأن المال لا ينتظر الناقل." },
        { q: "لماذا تعود طرود كثيرة؟", a: "لأن الطلبية لم تُؤكَّد، أو المصاريف اكتُشفت عند الباب، أو الأجل طال، أو الزبون كان غائباً. والعلاج: اتصال أو رسالة خلال الساعة، مصاريف معروضة قبل التأكيد، وتذكير يوم التسليم." },
        { q: "كيف تُحدَّد مصاريف التوصيل؟", a: "بجدول لكل ولاية، مأخوذ من تسعيرات ناقليكم، ويُعرض على الزبون حالما يختار ولايته، قبل أن يؤكّد. والتسعيرة التي تُكتشف بالهاتف أو عند الباب سبب للرفض. والتوصيل المجاني فوق مبلغ معيّن يُقرَّر حسب هامشكم." },
        { q: "هل نواصل البيع على إنستغرام وفيسبوك مع الموقع؟", a: "نعم، وهو مستحسَن: الشبكات تأتي بالزبائن، والموقع يأخذ الطلبية. والفرق أن كل طلبية تصل إلى الدفتر نفسه، بمخزون مخصوم ورقم تتبّع، بدل أن تبقى في محادثة." },
        { q: "متى يُبرَّر موقع تجارة إلكترونية على المقاس؟", a: "ليس من عدد معيّن من الطلبيات، بل من ثلاث علامات: المخزون مشترك مع محل أو عدة مستودعات، قواعد التأكيد والتوصيل لم تعد تدخل في الإضافات، ومطابقة الناقلين تتم باليد كل أسبوع." },
        { q: "متى يصل مال الطلبيات إلى حسابي؟", a: "للطلبية المدفوعة عند التسليم، بعد صرف الناقل: عشرة أيام بعد الطلبية في مثالنا، بصرف واحد في الأسبوع. اسألوا كل ناقل عن وتيرته. وللطلبية المدفوعة بالبطاقة، حسب آجال بنككم." },
        { q: "هل نقوم بالإشهار منذ الفتح؟", a: "لا. افتحوا بزبائنكم الحاليين، تابعوا النسب الخمس بضعة أسابيع، صحّحوا التأكيد والتسليم، ثم اشتروا الزيارات. والإشهار المصبوب في قمع يتسرّب يدفع خاصة ثمن طرود تعود." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "مع الدفع عند التسليم، الطلبية ليست بيعاً بعد." },
      { after: 4, text: "أسبوع من المبيعات موجود باستمرار عند الناقلين." },
    ],
    cta: { eyebrow: "أرسلوا إلينا أرقام شهر: الطلبيات المستلَمة، المؤكَّدة، المسلَّمة، العائدة، ونحو أي ولايات. نقول لكم أي مرحلة تكلّفكم أكثر، وما يجب بناؤه أولاً", title: "طلبيات تضيع في الرسائل، طرود تعود، مال الناقلين لا يُراجَع أبداً، أو مؤسس في فرنسا يريد البيع في الجزائر: نبني الموقع، وخاصة ما يحدث بعد النقرة", body: "فهرس بمخزون حقيقي، طلبية قصيرة، تأكيد، تسعيرات الولايات، ناقلون، دفع بالبطاقة، مطابقة، ومتابعة النسب الخمس. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.paiement, kind: '2027', name: 'ربط الدفع الإلكتروني CIB و Edahabia: صفحة الدفع وحالات الطلبية' },
      { href: L.livrer, kind: '2027', name: 'التوصيل دون عنوان: نقطة GPS، معلَم، ومناطق التوصيل' },
      { href: L.produit, kind: '2027', name: 'بطاقة المنتَج: المتغيّرات، التعبئة، الرموز الشريطية، والأسعار' },
      { href: L.annulees, kind: '2026', name: 'الطلبيات الملغاة عند التسليم: الأسباب والعلاج' },
    ] },
  },
};

const KEYWORDS = "comment créer un site e-commerce 2027, créer un site e-commerce en algérie, création site e-commerce algérie, site e-commerce algérie prix, comment vendre en ligne en algérie, boutique en ligne algérie, paiement à la livraison algérie, livraison par wilaya tarif, retour de colis e-commerce, woocommerce algérie, paiement en ligne cib edahabia site marchand, how to create an e-commerce website algeria 2027, cash on delivery ecommerce algeria, كيف انشئ موقع تجارة الكترونية 2027, انشاء متجر الكتروني الجزائر, الدفع عند الاستلام";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
