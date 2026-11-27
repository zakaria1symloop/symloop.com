import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-station-service-algerie-2027-compteurs-des-pompes-jaugeage-des-cuves-ecart-de-caisse-par-equipe-clients-en-compte-boutique.mjs';

const SLUG = 'logiciel-station-service-algerie-2027-compteurs-des-pompes-jaugeage-des-cuves-ecart-de-caisse-par-equipe-clients-en-compte-boutique';
const FIGURES = ['litre', 'couches', 'equipe', 'cuve', 'ecarts', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  flotte: '/blog/le-carburant-coute-plus-que-prevu-et-personne-ne-sait-pourquoi-gestion-de-flotte-application-algerie-2027-releves-consommation-entretien-au-km/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
  superette: '/blog/logiciel-superette-supermarche-algerie-2027-caisse-hors-ligne-code-barres-balance-dlc-marge-cloture/',
  lavage: '/blog/logiciel-lavage-auto-algerie-2027-application-station-de-lavage-file-d-attente-ticket-par-voiture-laveurs-abonnements-lavage-a-domicile/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  planning: '/blog/personne-ne-sait-qui-travaille-demain-planning-des-equipes-application-algerie-2027-besoins-par-creneau-contraintes-echanges-pointage/',
  stock: '/blog/stock-faux-dans-l-application-algerie-2027-journal-de-mouvements-reservations-inventaire-tournant-multi-depots-hors-ligne-ce-qu-on-construit/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
};

const CONTENT = {
  fr: {
    kind: 'Logiciel station-service · Algérie · 2027', title: "Logiciel station-service en Algérie (2027) : la caisse ne correspond pas aux compteurs, la cuve contient moins que le calcul, les bons des clients en compte se perdent, et ce qu'on met en place",
    dek: "« J'ai une station-service avec quatre pistolets, trois équipes et une boutique. Chaque équipe tient son cahier, je découvre les écarts en fin de mois, quand il est trop tard pour demander quoi que ce soit à qui que ce soit. La cuve ne contient jamais ce que le calcul annonce, et les bons des entreprises clientes traînent dans un tiroir. Existe-t-il un logiciel de gestion de station-service ? » Une station se pilote sur deux comparaisons : les compteurs contre la caisse à chaque équipe, le stock calculé contre le stock jaugé chaque matin. Le reste s'accroche à ces deux-là.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel station-service', 'Clôture de caisse par équipe', 'Écart de cuve', 'Jaugeage et livraisons', 'Clients en compte', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de station-service tient cinq choses : **les index des compteurs** à chaque changement d'équipe, **la caisse par équipe**, **les cuves** (jaugeage du matin, livraisons, écart), **les clients en compte** et leurs bons, **la boutique et les services**. Deux comparaisons font presque tout le travail : **les litres aux compteurs multipliés par le prix, contre ce que l'équipe remet** ; et **le stock calculé, contre le stock jaugé**. Faites tous les jours, elles donnent à chaque écart une date et le nom d'une équipe. Faites en fin de mois, elles ne donnent plus qu'un total. Le sur-mesure se justifie quand la station a ses propres règles : comptes d'entreprises, boutique, lavage, plusieurs sites.",
      "Cette page s'adresse au gérant d'une station-service, au propriétaire de plusieurs stations, et au fondateur installé en France qui possède ou finance une station en Algérie et veut en lire les écarts de loin. Les définitions viennent de sources publiques : station-service, pompe et compteurs, jauge, démarque, carte carburant, dilatation de l'essence. La station de quatre pistolets, ses index, ses volumes et son calendrier sont un exemple construit ; les prix au litre de l'exemple sont arrondis et ne sont pas un tarif. La page ne traite ni des prix des carburants, ni des règles de la profession, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Du camion à la banque : six endroits où un litre se perd", body: [
        "La figure suit un litre de la livraison jusqu'au versement.",
      ], visual: 'litre', after: [
        "**Une station vend un produit qu'on ne voit pas.** Une station-service est un établissement qui vend du carburant et des lubrifiants pour les véhicules ; beaucoup proposent aussi une boutique. Le carburant ne se compte pas sur une étagère : il arrive par camion, attend dans une cuve enterrée, sort par un pistolet. Entre les trois, la seule trace est un chiffre : le bon de livraison, la jauge, le compteur. **Six endroits.** À chaque étape de la figure, la question est la même : ce qui est écrit correspond-il à ce qui est passé ? Un cahier répond une fois par mois. Un logiciel répond à chaque relève.",
        "**Pourquoi la caisse est accentuée.** C'est l'étape où l'argent change de main plusieurs fois par jour. Tant que la caisse est comptée une seule fois, le soir, l'écart appartient à toute la journée, donc à personne. Comptée à chaque changement d'équipe, elle appartient à une équipe. **Ce que cette page ne traite pas.** Le carburant vu depuis une entreprise qui a des véhicules et veut savoir ce qu'ils consomment est un autre sujet, traité dans [la gestion de flotte](" + L.flotte + "). Ici, on se place du côté de celui qui vend.",
      ] },
      { heading: "Ce qu'un logiciel de station doit tenir", body: [
        "La figure empile les cinq couches, des compteurs à la boutique.",
      ], visual: 'couches', after: [
        "**Les compteurs d'abord.** Une pompe réunit un moteur, une unité de pompage, des compteurs et des vannes ; les modèles récents transforment le mouvement du compteur en impulsions électriques. Chaque pistolet a donc un index qui ne fait qu'avancer. Relevé au début et à la fin de chaque équipe, il donne les litres vendus sans que personne ait à les déclarer. **À la main ou en automatique.** Sur un téléphone, la relève prend deux minutes : une photo de l'afficheur, le chiffre saisi, l'heure enregistrée. Quand les distributeurs et leur automate le permettent, l'index peut être lu directement ; cela se vérifie sur place, modèle par modèle, avant d'être promis.",
        "**Les clients en compte.** Ce sont les entreprises qui se servent toute la semaine et règlent en fin de mois. Chaque passage laisse un bon, et l'ensemble forme un crédit à suivre comme tout [crédit client](" + L.credit + "), avec un plafond et un relevé. Une carte carburant est une carte de paiement utilisée le plus souvent pour l'essence, le gasoil et les autres carburants en station : le compte client en est la version maison. **La boutique et les services.** Lubrifiants, articles, [lavage](" + L.lavage + ") : ils ont leur propre stock et leur propre caisse, tenus comme ceux d'un [commerce de proximité](" + L.superette + "). Mélangés à la caisse du carburant, ils rendent tout écart illisible.",
      ] },
      { heading: "La clôture d'une équipe : les compteurs contre la caisse", body: [
        "La figure clôture l'équipe du matin d'une station de quatre pistolets.",
      ], visual: 'equipe', after: [
        "**Le calcul.** Les index donnent 3 200 litres d'essence, 2 500 de gasoil et 900 de GPL carburant. Aux prix de l'exemple, l'équipe doit 227 800 dinars. Elle remet 171 300 dinars en espèces, 18 400 en paiements par carte et 33 500 en bons signés : 223 200. Il manque 4 600 dinars, l'équivalent de 100 litres d'essence. **Ce qui change.** L'écart est connu à 14 h, devant l'équipe qui part et celle qui arrive. Un bon resté dans une poche se retrouve ; une erreur de rendu de monnaie se reconnaît ; un écart sans explication est signé. Le lendemain, il ne se mélange pas à celui d'une autre équipe.",
        "**Les cas à prévoir.** Un essai de pompe reversé en cuve, un changement de prix en cours d'équipe, une dépense réglée avec la caisse : chacun a sa ligne, sinon il devient un écart. **Les paiements.** Ce qui est payé par carte ou par code QR se rapproche du relevé de la banque, comme pour [la caisse d'un commerce](" + L.caisse + "). **Qui était de quart.** La clôture suppose de savoir qui travaillait : le [planning des équipes](" + L.planning + ") et la caisse parlent des mêmes personnes. **Sans réseau.** La relève s'enregistre sur le téléphone même sans connexion et se synchronise ensuite : une station ne s'arrête pas quand le réseau tombe.",
      ] },
      { heading: "La cuve : le stock calculé contre le stock jaugé", body: [
        "La figure suit une cuve d'essence pendant huit matins, avec une livraison le mardi.",
      ], visual: 'cuve', after: [
        "**Deux chiffres pour un même stock.** Le stock théorique part du stock de la veille, ajoute les livraisons, retire les litres passés aux compteurs. Le stock jaugé se lit dans la cuve : une jauge sert à mesurer la quantité de carburant qui reste dans un réservoir. L'écart entre les deux est une démarque : il y a démarque quand un commerçant a moins d'articles en stock que ce que sa liste annonce. **Dans l'exemple.** En huit matins, l'écart cumulé atteint 410 litres pour 32 000 vendus. Mais il n'est pas arrivé d'un coup : 20 à 30 litres par jour, et 260 litres le jour de la livraison.",
        "**La marche et la pente.** Une marche le jour d'une livraison se contrôle au dépotage : jauger avant, jauger après, comparer au bon. Une pente régulière se fait vérifier : un compteur qui délivre un peu plus qu'il ne compte, ou une cuve à faire contrôler. Dans beaucoup de pays, des inspections régulières sont imposées pour s'assurer de l'exactitude des pompes, et il existe des systèmes de surveillance de cuve capables de détecter de petites fuites. **La température.** L'essence se dilate et se contracte nettement : selon l'article de référence sur les pompes, dix volumes mesurés à 15 °C en deviennent environ 10,15 à 29 °C. Une part d'un écart de livraison peut donc venir de là : raison de plus pour le suivre livraison après livraison, comme tout [stock tenu par mouvements](" + L.stock + ").",
      ] },
      { heading: "Six écarts, et ce qu'on vérifie d'abord", body: [
        "La figure donne, pour chaque écart, la première cause à écarter et l'écran qui tranche.",
      ], visual: 'ecarts', after: [
        "**Un écart n'accuse pas, il oriente.** Chaque ligne de la figure commence par la cause la plus banale : un bon oublié, une saisie fausse, une livraison mesurée chaude. Le logiciel ne désigne personne ; il réduit le champ à une équipe, une cuve, un pistolet, un jour. **Les clients en compte.** Un relevé contesté se règle bon par bon : le numéro, le véhicule, les litres, l'heure, l'équipe, la signature du chauffeur. Le plafond arrête un compte avant que l'encours ne devienne un problème, et le relevé de fin de mois sort sans ressaisie.",
        "**Ce que le gérant lit le matin.** Quatre lignes : l'écart de chaque équipe de la veille, l'écart de chaque cuve, les litres par produit comparés au même jour de la semaine précédente, l'encours des comptes. C'est un [tableau de bord](" + L.tableau + ") court, lisible sur un téléphone, à Alger comme à Lyon. **Plusieurs stations.** Les mêmes écrans, une station par ligne : celle dont l'écart sort du lot se voit sans appeler personne. **L'autonomie.** Le stock jaugé divisé par la vente moyenne donne les jours restants par cuve : la commande part avant la panne sèche, pas après.",
      ] },
      { heading: "Six semaines, dans l'exemple", body: [
        "Six semaines pour une station de quatre pistolets avec boutique, dont la première pour lire les cahiers.",
      ], visual: 'calendrier', after: [
        "**Commencer par les cahiers.** La première semaine se passe à lire ce que la station note déjà : cahier de caisse, cahier de jauge, carnet de bons. Ce qui existe est repris tel quel ; ce qui manque est ajouté. **L'ordre.** Compteurs et équipes d'abord, parce que c'est là que l'argent passe chaque jour ; les cuves ensuite ; les comptes clients quand les deux premiers tournent. **En double.** Pendant deux semaines, cahier et application sont tenus ensemble : c'est la comparaison qui donne confiance aux équipes, et qui montre ce que le cahier ne voyait pas.",
        "**Ce qui reste après.** Une clôture qui tient sur un écran, signée par l'équipe qui part et celle qui arrive. Un jaugeage qui prend le temps de descendre la jauge et de saisir un chiffre. Un relevé par entreprise, sorti sans ressaisie. **Du marché ou sur mesure.** Si un logiciel existant couvre vos équipes, vos cuves et vos comptes, prenez-le. Le sur-mesure se justifie quand vos règles ne rentrent pas dans ses cases : bons d'entreprise, boutique, lavage, plusieurs sites. **Les durées** sont celles d'un exemple construit : une station sans boutique ni comptes clients demande moins ; plusieurs stations, davantage.",
      ], list: [
        "**Ce que le gérant reçoit** : une clôture par équipe avec son écart ; le jaugeage du matin et l'écart par cuve ; chaque livraison contrôlée avant et après dépotage ; les comptes clients avec bons, plafonds et relevés ; le stock de la boutique ; un tableau du matin sur son téléphone.",
        "**Ce que la station ne fait plus** : découvrir l'écart en fin de mois, chercher un bon dans un tiroir, recalculer la cuve à la main, attendre qu'un client conteste pour retrouver un passage, tomber en panne sèche faute d'avoir vu baisser la cuve.",
        "**Ce qui est mesuré** : écart de caisse par équipe, en dinars et en litres ; écart de cuve par produit, par jour et par livraison ; litres par pistolet et par heure ; encours et retard des comptes ; jours d'autonomie par cuve.",
        "**Ce que fait Symloop** : le relevé de l'existant, l'application de relève et de clôture, le suivi des cuves et des livraisons, les comptes clients, la caisse de la boutique, le tableau du gérant, la lecture automatique des compteurs quand l'installation le permet, puis la période en double avec les équipes.",
      ], faq: [
        { q: "Existe-t-il un logiciel de gestion de station-service ?", a: "Oui. Il doit tenir cinq choses : les index des compteurs par équipe, la caisse par équipe, les cuves et les livraisons, les clients en compte, la boutique. Vérifiez qu'il compare chaque jour les compteurs à la caisse, et le stock calculé au stock jaugé : ce sont les deux écrans qui comptent." },
        { q: "Comment contrôler la caisse d'une station-service ?", a: "À chaque changement d'équipe : relevez l'index de chaque pistolet, multipliez les litres par le prix, comparez à ce que l'équipe remet en espèces, par carte et en bons. L'écart est connu tout de suite, au nom d'une équipe, au lieu de se diluer dans le mois." },
        { q: "Comment calculer l'écart de cuve ?", a: "Stock de la veille, plus les livraisons, moins les litres passés aux compteurs : c'est le stock théorique. Comparez-le chaque matin au stock jaugé. Suivez l'écart jour par jour : une pente régulière et une marche le jour d'une livraison n'ont pas la même cause." },
        { q: "Pourquoi la cuve contient-elle moins que le calcul ?", a: "Les causes à écarter, dans l'ordre : une livraison plus courte que le bon, un compteur qui délivre un peu plus qu'il ne compte, une erreur de jaugeage, la température, plus rarement une fuite. Seul un suivi quotidien dit laquelle est en jeu." },
        { q: "Comment gérer les bons des clients en compte ?", a: "Un bon numéroté par passage, avec le véhicule, les litres, l'heure, l'équipe et la signature. Un plafond par entreprise, un relevé en fin de mois. Dans la clôture de l'équipe, le bon compte comme un paiement : il ne peut plus se perdre sans laisser d'écart." },
        { q: "Peut-on relier le logiciel aux pompes ?", a: "Cela dépend des distributeurs installés et de leur automate : certains donnent accès à leurs compteurs, d'autres non. Cela se vérifie sur place. Sans liaison, la relève se fait à la main sur un téléphone, en deux minutes par équipe." },
        { q: "Le logiciel fonctionne-t-il sans connexion Internet ?", a: "Il le doit : une station ne s'arrête pas quand le réseau tombe. La relève, la clôture et les bons s'enregistrent sur l'appareil et se synchronisent quand la connexion revient." },
        { q: "Peut-on suivre plusieurs stations ?", a: "Oui : les mêmes écrans, une station par ligne. Le propriétaire voit chaque matin l'écart de caisse et l'écart de cuve de chaque site, et repère celui qui sort du lot sans appeler personne." },
        { q: "Logiciel du marché ou logiciel sur mesure ?", a: "Si un logiciel existant couvre vos équipes, vos cuves et vos comptes clients, prenez-le. Le sur-mesure se justifie quand vos règles ne rentrent pas dedans : bons d'entreprise, boutique, lavage, plusieurs sites, ou liaison avec vos autres outils." },
        { q: "Combien de temps pour équiper une station ?", a: "Six semaines dans l'exemple de cette page, pour quatre pistolets, trois équipes, des comptes clients et une boutique, dont deux semaines en double avec les cahiers. Une station plus simple demande moins." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Compté le soir, l'écart appartient à la journée. Compté à la relève, il appartient à une équipe." },
      { after: 3, text: "Une cuve jaugée chaque matin dit quel jour l'écart est arrivé." },
    ],
    cta: { eyebrow: "Dites-nous combien de pistolets, de cuves et d'équipes compte votre station : nous commençons par lire vos cahiers", title: "Caisse qui ne correspond pas aux compteurs, cuve qui contient moins que le calcul, bons qui se perdent, ou propriétaire en France qui veut lire les écarts de sa station en Algérie", body: "Symloop construit l'application de relève et de clôture par équipe, le suivi des cuves et des livraisons, les comptes clients avec leurs bons, la caisse de la boutique et le tableau du gérant. Décrivez-nous votre station : les produits, les équipes, et l'écart que vous n'arrivez pas à expliquer." },
    related: { label: 'À lire aussi', items: [
      { href: L.flotte, kind: '2027', name: 'Gestion de flotte : le carburant coûte plus que prévu' },
      { href: L.credit, kind: '2027', name: 'Crédit client : plafond, relevés, relances' },
      { href: L.superette, kind: '2027', name: 'Logiciel supérette : caisse hors ligne, stock, clôture' },
      { href: L.lavage, kind: '2027', name: 'Logiciel lavage auto : un ticket par voiture' },
    ] },
  },
  en: {
    kind: 'Filling station software · Algeria · 2027', title: "Filling station software in Algeria (2027): the till does not match the meters, the tank holds less than the calculation, account customers' vouchers get lost, and what we put in place",
    dek: "“I run a petrol station with four nozzles, three shifts and a shop. Each shift keeps its own notebook, I discover the gaps at the end of the month, when it is too late to ask anyone anything. The tank never holds what the calculation says, and the vouchers of our company customers sit in a drawer. Is there management software for a filling station?” A station is run on two comparisons: the meters against the till at every shift, calculated stock against dipped stock every morning. Everything else hangs on those two.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Filling station software', 'Till closing per shift', 'Tank gap', 'Dipping and deliveries', 'Account customers', 'Algeria 2027'],
    intro: [
      "**Short answer.** Filling station software holds five things: **the meter readings** at every shift change, **the till per shift**, **the tanks** (morning dip, deliveries, gap), **account customers** and their vouchers, **the shop and the services**. Two comparisons do nearly all the work: **the litres on the meters multiplied by the price, against what the shift hands over**; and **calculated stock, against dipped stock**. Done every day, they give each gap a date and the name of a shift. Done at month end, they only give a total. Custom software is justified when the station has its own rules: company accounts, a shop, a car wash, several sites.",
      "This page is for the manager of a filling station, the owner of several stations, and the founder based in France who owns or finances a station in Algeria and wants to read its gaps from afar. The definitions come from public sources: filling station, pump and meters, dipstick, shrinkage, fuel card, thermal expansion of petrol. The four-nozzle station, its readings, its volumes and its calendar are a constructed example; the example's prices per litre are rounded and are not a tariff. The page covers neither fuel prices, nor the rules of the trade, nor taxation, and quotes no hardware price.",
    ],
    sections: [
      { heading: "From the tanker to the bank: six places where a litre is lost", body: [
        "The figure follows a litre from delivery to banking.",
      ], visual: 'litre', after: [
        "**A station sells a product nobody sees.** A filling station is a facility that sells fuel and engine lubricants for motor vehicles; many also provide a convenience store. Fuel is not counted on a shelf: it arrives by tanker, waits in an underground tank, leaves through a nozzle. Between the three, the only trace is a figure: the delivery note, the dip, the meter. **Six places.** At each step of the figure, the question is the same: does what is written match what went through? A notebook answers once a month. Software answers at every shift change.",
        "**Why the till is accented.** It is the step where money changes hands several times a day. As long as the till is counted once, in the evening, the gap belongs to the whole day, and so to nobody. Counted at every shift change, it belongs to one shift. **What this page does not cover.** Fuel seen from a company that has vehicles and wants to know what they consume is another subject, covered in [fleet management](" + L.flotte + "). Here, we stand on the side of the one who sells.",
      ] },
      { heading: "What station software must hold", body: [
        "The figure stacks the five layers, from the meters to the shop.",
      ], visual: 'couches', after: [
        "**The meters first.** A pump brings together a motor, a pumping unit, meters and valves; newer models turn the meter's movement into electrical pulses. Each nozzle therefore has a reading that only moves forward. Read at the start and the end of every shift, it gives the litres sold without anyone having to declare them. **By hand or automatically.** On a phone, the reading takes two minutes: a photo of the display, the figure entered, the time recorded. When the dispensers and their controller allow it, the reading can be taken directly; that is checked on site, model by model, before being promised.",
        "**Account customers.** These are the companies that fill up all week and settle at the end of the month. Each visit leaves a voucher, and together they form a credit to follow like any [customer credit](" + L.credit + "), with a ceiling and a statement. A fuel card is a payment card used most commonly for petrol, diesel and other fuels at stations: the customer account is its in-house version. **The shop and the services.** Lubricants, goods, [car wash](" + L.lavage + "): they have their own stock and their own till, kept like those of a [convenience shop](" + L.superette + "). Mixed with the fuel till, they make every gap unreadable.",
      ] },
      { heading: "Closing a shift: the meters against the till", body: [
        "The figure closes the morning shift of a four-nozzle station.",
      ], visual: 'equipe', after: [
        "**The calculation.** The readings give 3,200 litres of petrol, 2,500 of diesel and 900 of LPG motor fuel. At the example prices, the shift owes 227,800 dinars. It hands over 171,300 dinars in cash, 18,400 in card payments and 33,500 in signed vouchers: 223,200. 4,600 dinars are missing, the equivalent of 100 litres of petrol. **What changes.** The gap is known at 2 pm, in front of the shift that leaves and the one that arrives. A voucher left in a pocket is found; a change error is recognised; a gap with no explanation is signed. The next day, it does not mix with another shift's.",
        "**Cases to plan for.** A pump test poured back into the tank, a price change during a shift, an expense paid from the till: each has its line, otherwise it becomes a gap. **Payments.** What is paid by card or by QR code is reconciled with the bank statement, as for [a shop's till](" + L.caisse + "). **Who was on shift.** Closing assumes knowing who was working: the [staff schedule](" + L.planning + ") and the till speak of the same people. **Without a network.** The reading is saved on the phone even with no connection and synchronises afterwards: a station does not stop when the network drops.",
      ] },
      { heading: "The tank: calculated stock against dipped stock", body: [
        "The figure follows one petrol tank over eight mornings, with a delivery on Tuesday.",
      ], visual: 'cuve', after: [
        "**Two figures for one stock.** Book stock starts from the previous day's stock, adds deliveries, takes away the litres that went through the meters. Dipped stock is read in the tank: a dipstick is used to measure the amount of fuel remaining in a tank. The gap between the two is shrinkage: shrinkage occurs when a retailer has fewer items in stock than were expected by the inventory list. **In the example.** Over eight mornings, the cumulative gap reaches 410 litres for 32,000 sold. But it did not arrive all at once: 20 to 30 litres a day, and 260 litres on delivery day.",
        "**The step and the slope.** A step on a delivery day is controlled at unloading: dip before, dip after, compare with the note. A steady slope is to be checked: a meter that delivers a little more than it counts, or a tank to have inspected. In many jurisdictions, regular required inspections are conducted to ensure the accuracy of pumps, and there are tank monitoring systems capable of detecting small leaks. **Temperature.** Petrol expands and contracts significantly: according to the reference article on pumps, ten volumes measured at 15 °C become about 10.15 at 29 °C. Part of a delivery gap can therefore come from there: one more reason to follow it delivery after delivery, like any [stock kept by movements](" + L.stock + ").",
      ] },
      { heading: "Six gaps, and what to check first", body: [
        "The figure gives, for each gap, the first cause to rule out and the screen that settles it.",
      ], visual: 'ecarts', after: [
        "**A gap does not accuse, it points.** Each line of the figure starts with the most ordinary cause: a forgotten voucher, a wrong entry, a delivery measured warm. The software names nobody; it narrows the field to one shift, one tank, one nozzle, one day. **Account customers.** A disputed statement is settled voucher by voucher: the number, the vehicle, the litres, the time, the shift, the driver's signature. The ceiling stops an account before the balance becomes a problem, and the month-end statement comes out with no retyping.",
        "**What the manager reads in the morning.** Four lines: the gap of each of yesterday's shifts, the gap of each tank, litres per product compared with the same day of the previous week, the balance of the accounts. It is a short [dashboard](" + L.tableau + "), readable on a phone, in Algiers as in Lyon. **Several stations.** The same screens, one station per line: the one whose gap stands out is seen without calling anyone. **Days of stock.** Dipped stock divided by average sales gives the days left per tank: the order goes out before the tank runs dry, not after.",
      ] },
      { heading: "Six weeks, in the example", body: [
        "Six weeks for a four-nozzle station with a shop, the first of them to read the notebooks.",
      ], visual: 'calendrier', after: [
        "**Start with the notebooks.** The first week is spent reading what the station already notes: till notebook, dip notebook, voucher book. What exists is taken over as it is; what is missing is added. **The order.** Meters and shifts first, because that is where money passes every day; tanks next; customer accounts once the first two are running. **In parallel.** For two weeks, notebook and application are kept together: it is the comparison that gives the shifts confidence, and that shows what the notebook did not see.",
        "**What remains afterwards.** A closing that fits on one screen, signed by the shift that leaves and the one that arrives. A dip that takes the time to lower the stick and enter a figure. A statement per company, produced with no retyping. **Off the shelf or custom.** If existing software covers your shifts, your tanks and your accounts, take it. Custom work is justified when your rules do not fit its boxes: company vouchers, a shop, a car wash, several sites. **The durations** are those of a constructed example: a station with no shop and no customer accounts takes less; several stations, more.",
      ], list: [
        "**What the manager receives**: a closing per shift with its gap; the morning dip and the gap per tank; every delivery checked before and after unloading; customer accounts with vouchers, ceilings and statements; the shop stock; a morning board on their phone.",
        "**What the station no longer does**: discover the gap at month end, look for a voucher in a drawer, recalculate the tank by hand, wait for a customer to dispute before finding a visit, run dry for not having seen the tank go down.",
        "**What is measured**: till gap per shift, in dinars and in litres; tank gap per product, per day and per delivery; litres per nozzle and per hour; balance and lateness of accounts; days of stock per tank.",
        "**What Symloop does**: the survey of what exists, the reading and closing application, the follow-up of tanks and deliveries, customer accounts, the shop till, the manager's board, automatic meter reading when the installation allows it, then the parallel period with the shifts.",
      ], faq: [
        { q: "Is there management software for a filling station?", a: "Yes. It must hold five things: meter readings per shift, the till per shift, tanks and deliveries, account customers, the shop. Check that it compares the meters with the till every day, and calculated stock with dipped stock: those are the two screens that matter." },
        { q: "How do you control the till of a petrol station?", a: "At every shift change: read each nozzle's meter, multiply the litres by the price, compare with what the shift hands over in cash, by card and in vouchers. The gap is known at once, in the name of one shift, instead of dissolving into the month." },
        { q: "How do you calculate the tank gap?", a: "Yesterday's stock, plus deliveries, minus the litres that went through the meters: that is book stock. Compare it every morning with dipped stock. Follow the gap day by day: a steady slope and a step on a delivery day do not have the same cause." },
        { q: "Why does the tank hold less than the calculation?", a: "The causes to rule out, in order: a delivery shorter than the note, a meter that delivers a little more than it counts, a dipping error, temperature, more rarely a leak. Only daily follow-up says which one is at play." },
        { q: "How do you manage account customers' vouchers?", a: "One numbered voucher per visit, with the vehicle, the litres, the time, the shift and the signature. A ceiling per company, a statement at month end. In the shift's closing, the voucher counts as a payment: it can no longer be lost without leaving a gap." },
        { q: "Can the software be connected to the pumps?", a: "It depends on the dispensers installed and their controller: some give access to their meters, others do not. It is checked on site. Without a link, the reading is done by hand on a phone, in two minutes per shift." },
        { q: "Does the software work without an Internet connection?", a: "It has to: a station does not stop when the network drops. Readings, closings and vouchers are saved on the device and synchronise when the connection returns." },
        { q: "Can several stations be followed?", a: "Yes: the same screens, one station per line. Every morning the owner sees the till gap and the tank gap of each site, and spots the one that stands out without calling anyone." },
        { q: "Off-the-shelf or custom software?", a: "If existing software covers your shifts, your tanks and your customer accounts, take it. Custom work is justified when your rules do not fit: company vouchers, a shop, a car wash, several sites, or a link with your other tools." },
        { q: "How long does it take to equip a station?", a: "Six weeks in this page's example, for four nozzles, three shifts, customer accounts and a shop, two of them in parallel with the notebooks. A simpler station takes less." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Counted in the evening, the gap belongs to the day. Counted at shift change, it belongs to one shift." },
      { after: 3, text: "A tank dipped every morning says which day the gap arrived." },
    ],
    cta: { eyebrow: "Tell us how many nozzles, tanks and shifts your station has: we start by reading your notebooks", title: "A till that does not match the meters, a tank that holds less than the calculation, vouchers that get lost, or an owner in France who wants to read the gaps of their station in Algeria", body: "Symloop builds the reading and closing application per shift, the follow-up of tanks and deliveries, customer accounts with their vouchers, the shop till and the manager's board. Describe your station to us: the products, the shifts, and the gap you cannot explain." },
    related: { label: 'Also read', items: [
      { href: L.flotte, kind: '2027', name: 'Fleet management: fuel costs more than planned' },
      { href: L.credit, kind: '2027', name: 'Customer credit: ceiling, statements, reminders' },
      { href: L.superette, kind: '2027', name: 'Mini-market software: offline till, stock, closing' },
      { href: L.lavage, kind: '2027', name: 'Car wash software: one ticket per car' },
    ] },
  },
  ar: {
    kind: 'برنامج محطة الوقود · الجزائر · 2027', title: "برنامج تسيير محطة الوقود في الجزائر (2027): الصندوق لا يطابق العدّادات، الخزان يحتوي أقل من الحساب، وصولات زبائن الحساب تضيع، وما نضعه",
    dek: "«عندي محطة وقود بأربع فوهات، ثلاث مناوبات، ومتجر. كل مناوبة تمسك دفترها، وأكتشف الفوارق آخر الشهر، حين يفوت وقت سؤال أي أحد عن أي شيء. الخزان لا يحتوي أبداً ما يعلنه الحساب، ووصولات المؤسسات الزبونة تبقى في درج. هل يوجد برنامج لتسيير محطة الخدمات؟» المحطة تُقاد بمقارنتين: العدّادات مقابل الصندوق عند كل مناوبة، والمخزون المحسوب مقابل المخزون المقيس كل صباح. والباقي كله يتعلق بهاتين.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج محطة الوقود', 'إغلاق الصندوق لكل مناوبة', 'فارق الخزان', 'القياس والتسليمات', 'زبائن الحساب', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج محطة الوقود يمسك خمسة أشياء: **مؤشرات العدّادات** عند كل تبديل مناوبة، **الصندوق لكل مناوبة**، **الخزانات** (قياس الصباح، التسليمات، الفارق)، **زبائن الحساب** ووصولاتهم، و**المتجر والخدمات**. ومقارنتان تقومان بأغلب العمل: **لترات العدّادات مضروبة في السعر، مقابل ما تسلّمه المناوبة**؛ و**المخزون المحسوب، مقابل المخزون المقيس**. إذا أُجريتا كل يوم، أعطتا كل فارق تاريخاً واسم مناوبة. وإذا أُجريتا آخر الشهر، لم تعطيا إلا مجموعاً. والبرنامج على المقاس يُبرَّر حين تكون للمحطة قواعدها: حسابات مؤسسات، متجر، غسل، أو عدة مواقع.",
      "هذه الصفحة موجّهة إلى مسيّر محطة وقود، إلى مالك عدة محطات، وإلى المؤسس المقيم في فرنسا الذي يملك أو يموّل محطة في الجزائر ويريد قراءة فوارقها من بعيد. التعريفات من مصادر عمومية: محطة الوقود، المضخة وعدّاداتها، مسطرة القياس، النقص في المخزون، بطاقة الوقود، وتمدد البنزين. والمحطة ذات الفوهات الأربع ومؤشراتها وأحجامها ورزنامتها مثال مركَّب؛ وأسعار اللتر في المثال مقرَّبة وليست تسعيرة. والصفحة لا تعالج أسعار الوقود، ولا قواعد المهنة، ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "من الشاحنة إلى البنك: ستة مواضع يضيع فيها اللتر", body: [
        "الشكل يتابع لتراً من التسليم إلى الإيداع.",
      ], visual: 'litre', after: [
        "**المحطة تبيع منتجاً لا يُرى.** محطة الوقود منشأة تبيع الوقود وزيوت المحركات للمركبات؛ وكثير منها يوفّر متجراً كذلك. والوقود لا يُعدّ على رف: يصل بالشاحنة، ينتظر في خزان مدفون، ويخرج من فوهة. وبين الثلاثة، الأثر الوحيد رقم: وصل التسليم، القياس، والعدّاد. **ستة مواضع.** في كل مرحلة من الشكل، السؤال هو نفسه: هل ما كُتب يطابق ما مرّ؟ الدفتر يجيب مرة في الشهر. والبرنامج يجيب عند كل تبديل مناوبة.",
        "**لماذا أُبرز الصندوق.** هو المرحلة التي ينتقل فيها المال من يد إلى يد عدة مرات في اليوم. وما دام الصندوق يُعدّ مرة واحدة، في المساء، فالفارق ملك اليوم كله، أي لا أحد. وإذا عُدّ عند كل تبديل، صار ملك مناوبة. **ما لا تعالجه هذه الصفحة.** الوقود من جهة مؤسسة لها مركبات وتريد معرفة ما تستهلكه موضوع آخر، في [تسيير الأسطول](" + L.flotte + "). هنا، نقف في جهة من يبيع.",
      ] },
      { heading: "ما يجب أن يمسكه برنامج المحطة", body: [
        "الشكل يرتّب الطبقات الخمس، من العدّادات إلى المتجر.",
      ], visual: 'couches', after: [
        "**العدّادات أولاً.** المضخة تجمع محركاً، وحدة ضخ، عدّادات، وصمامات؛ والطرازات الحديثة تحوّل حركة العدّاد إلى نبضات كهربائية. فلكل فوهة مؤشر لا يفعل إلا التقدم. وإذا قُرئ في بداية كل مناوبة ونهايتها، أعطى اللترات المبيعة دون أن يصرّح بها أحد. **باليد أو آلياً.** على الهاتف، تأخذ القراءة دقيقتين: صورة للشاشة، الرقم المُدخَل، والساعة المسجَّلة. وحين تسمح الموزّعات وجهاز تحكمها، يمكن قراءة المؤشر مباشرة؛ وهذا يُتحقق منه في المكان، طرازاً بطراز، قبل أن يُوعَد به.",
        "**زبائن الحساب.** هم المؤسسات التي تتزود طيلة الأسبوع وتسدد آخر الشهر. كل مرور يترك وصلاً، والمجموع دَين يُتابَع مثل كل [دَين زبون](" + L.credit + ")، بسقف وكشف. وبطاقة الوقود بطاقة دفع تُستعمل غالباً للبنزين والمازوت وباقي الوقود في المحطات: وحساب الزبون هو نسختها الداخلية. **المتجر والخدمات.** الزيوت، السلع، [الغسل](" + L.lavage + "): لها مخزونها وصندوقها، يُمسكان كما في [متجر الحي](" + L.superette + "). وإذا اختلطت بصندوق الوقود، صار كل فارق غير مقروء.",
      ] },
      { heading: "إغلاق المناوبة: العدّادات مقابل الصندوق", body: [
        "الشكل يُغلق مناوبة الصباح في محطة من أربع فوهات.",
      ], visual: 'equipe', after: [
        "**الحساب.** المؤشرات تعطي 3200 لتر من البنزين، 2500 من المازوت، و900 من غاز البترول المميَّع. بأسعار المثال، المناوبة مدينة بـ 227 800 دينار. وهي تسلّم 171 300 دينار نقداً، 18 400 بالبطاقة، و33 500 بوصولات موقَّعة: 223 200. ينقص 4600 دينار، ما يعادل 100 لتر من البنزين. **ما يتغير.** الفارق معروف على الساعة 14، أمام المناوبة المنصرفة والقادمة. وصل بقي في جيب يُعثر عليه؛ خطأ في الصرف يُعترف به؛ وفارق دون تفسير يُوقَّع. وفي الغد، لا يختلط بفارق مناوبة أخرى.",
        "**حالات يجب توقعها.** تجربة مضخة أُعيدت إلى الخزان، تغيير سعر أثناء المناوبة، أو مصروف دُفع من الصندوق: لكل واحد سطره، وإلا صار فارقاً. **المدفوعات.** ما يُدفع بالبطاقة أو برمز " + I('QR') + " يُطابَق مع كشف البنك، كما في [صندوق المتجر](" + L.caisse + "). **من كان في المناوبة.** الإغلاق يفترض معرفة من كان يعمل: [برنامج الفرق](" + L.planning + ") والصندوق يتحدثان عن الأشخاص أنفسهم. **دون شبكة.** القراءة تُسجَّل على الهاتف حتى دون اتصال وتُزامَن بعدها: المحطة لا تتوقف حين تسقط الشبكة.",
      ] },
      { heading: "الخزان: المخزون المحسوب مقابل المخزون المقيس", body: [
        "الشكل يتابع خزان بنزين طيلة ثمانية صباحات، مع تسليم يوم الثلاثاء.",
      ], visual: 'cuve', after: [
        "**رقمان لمخزون واحد.** المخزون النظري ينطلق من مخزون الأمس، يضيف التسليمات، وينزع اللترات التي مرّت في العدّادات. والمخزون المقيس يُقرأ في الخزان: مسطرة القياس تُستعمل لقياس كمية الوقود الباقية في خزان. والفارق بينهما نقص في المخزون: يقع النقص حين يكون عند التاجر أقل مما تعلنه قائمة مخزونه. **في المثال.** في ثمانية صباحات، بلغ الفارق المتراكم 410 لتر مقابل 32 000 مبيعة. لكنه لم يأتِ دفعة واحدة: من 20 إلى 30 لتراً في اليوم، و260 لتراً يوم التسليم.",
        "**الدرجة والميل.** الدرجة يوم التسليم تُراقَب عند التفريغ: قياس قبله، قياس بعده، ومقارنة بالوصل. والميل المنتظم يستدعي المراجعة: عدّاد يسلّم أكثر قليلاً مما يعدّ، أو خزان يجب فحصه. وفي بلدان كثيرة، تُفرض مراقبات منتظمة للتأكد من دقة المضخات، وتوجد أنظمة مراقبة للخزانات قادرة على كشف التسربات الصغيرة. **الحرارة.** البنزين يتمدد وينكمش بوضوح: حسب المقال المرجعي عن المضخات، عشرة أحجام مقيسة عند 15 درجة مئوية تصير نحو 10,15 عند 29 درجة. فجزء من فارق التسليم قد يأتي من هنا: سبب إضافي لمتابعته تسليماً بعد تسليم، مثل كل [مخزون يُمسك بالحركات](" + L.stock + ").",
      ] },
      { heading: "ستة فوارق، وما يُراجَع أولاً", body: [
        "الشكل يعطي، لكل فارق، أول سبب يُستبعد والشاشة التي تحسم.",
      ], visual: 'ecarts', after: [
        "**الفارق لا يتهم، بل يوجّه.** كل سطر في الشكل يبدأ بالسبب الأبسط: وصل منسي، إدخال خاطئ، أو تسليم قيس ساخناً. والبرنامج لا يسمّي أحداً؛ هو يضيّق المجال إلى مناوبة، خزان، فوهة، ويوم. **زبائن الحساب.** الكشف المعترَض عليه يُحسم وصلاً بوصل: الرقم، المركبة، اللترات، الساعة، المناوبة، وتوقيع السائق. والسقف يوقف الحساب قبل أن يصير الرصيد المستحق مشكلاً، وكشف آخر الشهر يخرج دون إعادة إدخال.",
        "**ما يقرؤه المسيّر في الصباح.** أربعة أسطر: فارق كل مناوبة من الأمس، فارق كل خزان، اللترات لكل منتج مقارنةً باليوم نفسه من الأسبوع الماضي، وأرصدة الحسابات. هي [لوحة قيادة](" + L.tableau + ") قصيرة، تُقرأ على الهاتف، في الجزائر العاصمة كما في ليون. **عدة محطات.** الشاشات نفسها، محطة في كل سطر: والتي يخرج فارقها عن المعتاد تُرى دون الاتصال بأحد. **أيام المخزون.** المخزون المقيس مقسوماً على متوسط البيع يعطي الأيام الباقية لكل خزان: فتُرسَل الطلبية قبل نفاد الوقود، لا بعده.",
      ] },
      { heading: "ستة أسابيع، في المثال", body: [
        "ستة أسابيع لمحطة من أربع فوهات مع متجر، أولها لقراءة الدفاتر.",
      ], visual: 'calendrier', after: [
        "**البدء بالدفاتر.** الأسبوع الأول يُقضى في قراءة ما تسجّله المحطة من قبل: دفتر الصندوق، دفتر القياس، ودفتر الوصولات. ما هو موجود يُؤخذ كما هو؛ وما ينقص يُضاف. **الترتيب.** العدّادات والمناوبات أولاً، لأن المال يمرّ من هناك كل يوم؛ ثم الخزانات؛ ثم حسابات الزبائن حين يشتغل الأولان. **بالتوازي.** مدة أسبوعين، يُمسك الدفتر والتطبيق معاً: والمقارنة هي التي تعطي الفرق الثقة، وتُظهر ما لم يكن الدفتر يراه.",
        "**ما يبقى بعد ذلك.** إغلاق يسعه شاشة واحدة، توقّعه المناوبة المنصرفة والقادمة. قياس يأخذ وقت إنزال المسطرة وإدخال رقم. وكشف لكل مؤسسة، يخرج دون إعادة إدخال. **جاهز أو على المقاس.** إذا كان برنامج موجود يغطي مناوباتكم وخزاناتكم وحساباتكم، خذوه. والعمل على المقاس يُبرَّر حين لا تدخل قواعدكم في خاناته: وصولات المؤسسات، المتجر، الغسل، أو عدة مواقع. **المدد** هي مدد مثال مركَّب: محطة دون متجر ولا حسابات زبائن تتطلب أقل؛ وعدة محطات، أكثر.",
      ], list: [
        "**ما يتلقاه المسيّر**: إغلاق لكل مناوبة مع فارقه؛ قياس الصباح والفارق لكل خزان؛ كل تسليم مراقَب قبل التفريغ وبعده؛ حسابات الزبائن بوصولاتها وسقوفها وكشوفها؛ مخزون المتجر؛ ولوحة الصباح على هاتفه.",
        "**ما لا تفعله المحطة بعد الآن**: اكتشاف الفارق آخر الشهر، البحث عن وصل في درج، إعادة حساب الخزان باليد، انتظار اعتراض زبون للعثور على مرور، ونفاد الوقود لأن أحداً لم يرَ الخزان ينزل.",
        "**ما يُقاس**: فارق الصندوق لكل مناوبة، بالدينار وباللتر؛ فارق الخزان لكل منتج، لكل يوم ولكل تسليم؛ اللترات لكل فوهة ولكل ساعة؛ أرصدة الحسابات وتأخرها؛ وأيام المخزون لكل خزان.",
        "**ما تفعله Symloop**: معاينة الموجود، تطبيق القراءة والإغلاق، متابعة الخزانات والتسليمات، حسابات الزبائن، صندوق المتجر، لوحة المسيّر، القراءة الآلية للعدّادات حين تسمح المنشأة، ثم فترة التوازي مع الفرق.",
      ], faq: [
        { q: "هل يوجد برنامج لتسيير محطة الوقود؟", a: "نعم. ويجب أن يمسك خمسة أشياء: مؤشرات العدّادات لكل مناوبة، الصندوق لكل مناوبة، الخزانات والتسليمات، زبائن الحساب، والمتجر. تأكدوا أنه يقارن كل يوم العدّادات بالصندوق، والمخزون المحسوب بالمخزون المقيس: هاتان هما الشاشتان المهمتان." },
        { q: "كيف يُراقَب صندوق محطة الوقود؟", a: "عند كل تبديل مناوبة: اقرؤوا مؤشر كل فوهة، اضربوا اللترات في السعر، وقارنوا بما تسلّمه المناوبة نقداً وبالبطاقة وبالوصولات. الفارق يُعرف حالاً، باسم مناوبة، بدل أن يذوب في الشهر." },
        { q: "كيف يُحسب فارق الخزان؟", a: "مخزون الأمس، زائد التسليمات، ناقص اللترات التي مرّت في العدّادات: هذا هو المخزون النظري. قارنوه كل صباح بالمخزون المقيس. وتابعوا الفارق يوماً بيوم: الميل المنتظم والدرجة يوم التسليم ليس لهما السبب نفسه." },
        { q: "لماذا يحتوي الخزان أقل من الحساب؟", a: "الأسباب التي تُستبعد، بالترتيب: تسليم أنقص من الوصل، عدّاد يسلّم أكثر قليلاً مما يعدّ، خطأ في القياس، الحرارة، ونادراً تسرب. والمتابعة اليومية وحدها تقول أيها المقصود." },
        { q: "كيف تُسيَّر وصولات زبائن الحساب؟", a: "وصل مرقَّم لكل مرور، فيه المركبة، اللترات، الساعة، المناوبة، والتوقيع. سقف لكل مؤسسة، وكشف آخر الشهر. وفي إغلاق المناوبة، يُحسب الوصل دفعاً: فلا يضيع دون أن يترك فارقاً." },
        { q: "هل يمكن ربط البرنامج بالمضخات؟", a: "هذا يتوقف على الموزّعات المركَّبة وجهاز تحكمها: بعضها يتيح الوصول إلى عدّاداته، وبعضها لا. ويُتحقق منه في المكان. ودون ربط، تُجرى القراءة باليد على الهاتف، في دقيقتين لكل مناوبة." },
        { q: "هل يشتغل البرنامج دون اتصال بالإنترنت؟", a: "يجب ذلك: المحطة لا تتوقف حين تسقط الشبكة. القراءة والإغلاق والوصولات تُسجَّل على الجهاز وتُزامَن حين يعود الاتصال." },
        { q: "هل يمكن متابعة عدة محطات؟", a: "نعم: الشاشات نفسها، محطة في كل سطر. المالك يرى كل صباح فارق الصندوق وفارق الخزان لكل موقع، ويلاحظ الذي يخرج عن المعتاد دون الاتصال بأحد." },
        { q: "برنامج جاهز أم برنامج على المقاس؟", a: "إذا كان برنامج موجود يغطي مناوباتكم وخزاناتكم وحسابات زبائنكم، خذوه. والعمل على المقاس يُبرَّر حين لا تدخل قواعدكم فيه: وصولات المؤسسات، المتجر، الغسل، عدة مواقع، أو الربط بأدواتكم الأخرى." },
        { q: "كم من الوقت لتجهيز محطة؟", a: "ستة أسابيع في مثال هذه الصفحة، لأربع فوهات، ثلاث مناوبات، حسابات زبائن، ومتجر، منها أسبوعان بالتوازي مع الدفاتر. ومحطة أبسط تتطلب أقل." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "إذا عُدّ في المساء، فالفارق ملك اليوم. وإذا عُدّ عند التبديل، فهو ملك مناوبة." },
      { after: 3, text: "الخزان المقيس كل صباح يقول في أي يوم وقع الفارق." },
    ],
    cta: { eyebrow: "قولوا لنا كم فوهة وخزاناً ومناوبة في محطتكم: نبدأ بقراءة دفاتركم", title: "صندوق لا يطابق العدّادات، خزان يحتوي أقل من الحساب، وصولات تضيع، أو مالك في فرنسا يريد قراءة فوارق محطته في الجزائر", body: "Symloop تبني تطبيق القراءة والإغلاق لكل مناوبة، متابعة الخزانات والتسليمات، حسابات الزبائن بوصولاتها، صندوق المتجر، ولوحة المسيّر. صِفوا لنا محطتكم: المنتجات، المناوبات، والفارق الذي لا تستطيعون تفسيره." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.flotte, kind: '2027', name: 'تسيير الأسطول: الوقود يكلّف أكثر من المتوقع' },
      { href: L.credit, kind: '2027', name: 'دَين الزبون: السقف، الكشوف، والتذكيرات' },
      { href: L.superette, kind: '2027', name: 'برنامج متجر الحي: صندوق دون اتصال، مخزون، وإغلاق' },
      { href: L.lavage, kind: '2027', name: 'برنامج غسل السيارات: تذكرة لكل سيارة' },
    ] },
  },
};

const KEYWORDS = "logiciel station service algérie 2027, logiciel de gestion de station service, logiciel gestion station service, logiciel caisse station service, application station service, gestion station service algérie, écart de cuve, jaugeage cuve carburant, clôture de caisse par équipe, bons carburant clients en compte, filling station software algeria, petrol station management software, fuel station software, shift closing fuel station, tank reconciliation, برنامج تسيير محطة الوقود, برنامج محطة الخدمات الجزائر, برنامج محطة البنزين, فارق الخزان, إغلاق المناوبة, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
