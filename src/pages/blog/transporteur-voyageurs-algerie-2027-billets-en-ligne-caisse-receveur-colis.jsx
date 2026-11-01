import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/transporteur-voyageurs-algerie-2027-billets-en-ligne-caisse-receveur-colis.mjs';

const SLUG = 'transporteur-voyageurs-algerie-2027-billets-en-ligne-caisse-receveur-colis';
const FIGURES = ['journey', 'stack', 'caisse', 'fuites', 'saison', 'models'];
const DATE = '2026-11-02';

const CONTENT = {
  fr: {
    kind: 'Série · Vu en France #14', title: "Transporteur de voyageurs en Algérie en 2027 : vendre ses places en ligne à côté de Mahatati, tenir la caisse du receveur et tracer les colis.",
    dek: "En France, FlixBus vend des places sur des cars qu'il ne possède pas : il garde la marque, le réseau et la vente, et confie la route à des transporteurs partenaires. En Algérie, la vente en ligne a démarré dans les gares de la SOGRAL avec l'application Mahatati, mais chez le transporteur privé, une grande partie de l'argent circule encore en espèces à bord, loin du bureau. Ce qu'un voyage doit tenir à chaque moment, ce qu'il faut construire en premier, ce que coûte un billet vendu à bord sans trace, six fuites et leur parade, et un calendrier jusqu'à l'Aïd el-Adha 2027.",
    publishedAt: 'Novembre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Transport de voyageurs', 'Billetterie', 'Logistique', 'Diaspora', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Pour un transporteur de voyageurs en Algérie en 2027, la première application à construire n'est pas celle du voyageur : c'est **le téléphone du receveur**. Il porte la liste des passagers, vend et saisit les billets achetés en route avec un reçu, enregistre chaque colis avec une photo et un code pour le destinataire, et fonctionne sans réseau entre deux wilayas. Derrière, un **stock de places unique** évite de vendre deux fois la même place entre le guichet, le site et les agents, et chaque voyage se clôture par une caisse rapprochée : billets, colis, carburant. Les tarifs étant encadrés, **c'est le remplissage et la caisse qui font la marge**, pas le prix.",
      "Ce guide est le quatorzième de la série « Vu en France, à construire en Algérie », après [les cours de soutien](/blog/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora/) et [la billetterie en ligne](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/). Il s'adresse aux transporteurs privés de voyageurs, aux sociétés de transport du personnel et aux agences, et au fondateur de la diaspora qui a vu FlixBus et veut construire l'équivalent avec des transporteurs algériens.",
    ],
    sections: [
      { heading: 'Ce que Mahatati a déjà montré', body: [
        "La vente de billets de car en ligne n'est plus une hypothèse en Algérie. La SOGRAL, qui gère les gares routières, a lancé l'application **Mahatati** début 2023 : on y choisit un horaire, on réserve un siège et on paie par CIB ou Edahabia, puis on présente le billet numérique à l'embarquement. Selon l'APS, l'application a vendu **2 026 784 billets en 2025, en hausse de 160 %**, dans **60 gares routières**, Alger, Jijel, Tlemcen et Annaba en tête. Depuis le 18 mai 2026, l'aller-retour est proposé, d'abord sur Alger–Biskra, Alger–Sétif et Alger–Tlemcen. **Les voyageurs paient donc déjà en ligne quand on le leur propose.**",
        "Ce que Mahatati ne règle pas, c'est ce qui se passe chez le transporteur : le car qui part d'un arrêt hors gare, les places vendues à bord, les colis, le carburant. Les pics sont connus : pour l'Aïd el-Adha 2025, la SOGRAL annonçait 2 650 dessertes supplémentaires, et 2 200 pour celui de 2026. Et la marge est sous contrainte : selon Maghreb Émergent, les tarifs du transport public de voyageurs datent de 2018 et les demandes de hausse ont été rejetées. Le secteur privé emploierait environ un million de personnes, chauffeurs et receveurs compris, selon une fédération de transporteurs citée par la presse. **Quand le prix ne bouge pas, chaque place vide et chaque billet non saisi se lisent directement dans le résultat.**",
      ] },
      { heading: 'Un voyage qui tient, en six moments', body: [
        "Le système doit tenir chacun de ces six moments. Les trois premiers se jouent avant le départ ; les trois derniers, sur la route et à l'arrivée.",
      ], visual: 'journey', after: [
        "**Le départ** se décrit avec sa ligne, son horaire, son car, son chauffeur et le nombre de places réservé à chaque canal : guichet, vente en ligne, agents, gare. **La vente** puise dans **un seul stock** : quand une place est vendue au guichet, elle disparaît du site à la même seconde. **L'embarquement** se fait avec la liste des passagers sur le téléphone du receveur, par QR ou par nom, et les places restées libres sont proposées jusqu'au dernier moment.",
        "**À bord**, le billet vendu entre deux arrêts est saisi sur le téléphone, avec un reçu au voyageur. **Les colis** confiés au car sont enregistrés au dépôt, photographiés, et remis contre un code envoyé au destinataire. **La clôture**, enfin, rapproche pour chaque voyage les billets, les colis, le carburant et le nombre de passagers comptés à l'arrivée.",
      ] },
      { heading: "Ce qu'il faut construire : le téléphone du receveur d'abord", body: [
        "La tentation est de commencer par une belle application de réservation. C'est utile, mais une grande partie de l'argent ne passe pas par elle.",
      ], visual: 'stack', after: [
        "**Le téléphone du receveur** est le cœur. Au départ, il télécharge la liste du voyage ; en route, il vend et saisit les billets et les colis, imprime ou envoie un reçu, et garde tout en mémoire quand le réseau disparaît dans les gorges ou sur les Hauts Plateaux ; il synchronise dès que le réseau revient. Chaque vente porte l'heure, l'arrêt et le receveur. **Si la saisie prend plus de temps que la vente en espèces, elle ne sera pas faite** : l'écran doit tenir en trois touches.",
        "**Le stock de places unique** vient ensuite, parce que c'est lui qui permet d'ouvrir la vente en ligne sans vendre deux fois la même place. **Le tableau par ligne** montre au propriétaire le remplissage, les recettes, les colis et le carburant de chaque voyage ; beaucoup de sociétés de transport sont familiales, et l'associé qui vit en France peut suivre les chiffres sans appeler, comme nous le décrivons dans [gérer son commerce en Algérie depuis la France](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/). La logique hors ligne est la même que celle de la porte d'un concert, détaillée dans [la billetterie en ligne](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/).",
      ] },
      { heading: 'Ce que coûte un billet vendu à bord sans trace', body: [
        "Un exemple sur des hypothèses, à refaire avec vos lignes : dix cars, deux départs par jour, 50 places, 70 % de remplissage, 1 000 DA de billet moyen.",
      ], visual: 'caisse', after: [
        "Cela fait 700 passagers par jour. Si 30 % des billets sont vendus à bord, **210 000 DA passent chaque jour par les mains des receveurs**. Si 10 % de ces ventes ne sont pas saisies, ce sont 21 000 DA par jour, **environ 630 000 DA par mois**. Nous ne connaissons aucune mesure publique de ces taux, et ils varient énormément d'une société à l'autre ; ce sont des hypothèses pour montrer l'ordre de grandeur, pas une accusation contre les receveurs.",
        "La vérification ne demande aucun logiciel : pendant une semaine, faites compter les passagers à l'arrivée sur deux lignes et comparez avec les billets en caisse. L'écart, s'il existe, donne la valeur du projet. Et la parade la plus efficace est souvent sociale autant que technique : **une part du receveur calculée sur les ventes saisies** aligne son intérêt sur celui de la société.",
      ] },
      { heading: 'Six fuites, six parades', body: [
        "Un transporteur perd de l'argent par de petites portes, sur la route et au guichet. Six reviennent partout.",
      ], visual: 'fuites', after: [
        "**La place vendue deux fois** est la fuite qui coûte le plus en réputation : deux voyageurs pour un siège un veille d'Aïd, c'est une dispute au départ et un client perdu. Elle disparaît avec un stock unique, verrouillé à la vente. **Le colis sans trace** coûte en litiges : une photo au dépôt et un code de retrait envoyé au destinataire suffisent à savoir qui a remis quoi, à qui.",
        "**Le car parti à moitié vide** est une fuite silencieuse : les places restantes doivent rester en vente, au guichet et en ligne, jusqu'au départ, et apparaître sur le téléphone du receveur pour les arrêts suivants. **Le retard non annoncé**, enfin, se règle par un SMS avec l'heure estimée, calculée à partir de la position du car.",
      ] },
      { heading: "L'été, la diaspora et les navettes", body: [
        "L'été, une partie de la diaspora arrive par avion ou par ferry, avec des bagages, souvent en famille, et doit encore rejoindre sa wilaya. C'est une demande précise : une place réservée et payée depuis la France, en euros, sur une navette qui attend le ferry ou le vol, même en retard, et qui dépose chaque famille à sa ville.",
        "Le mécanisme est celui du reste de l'article, avec deux ajouts : **le suivi de l'arrivée** du ferry ou du vol, pour décaler le départ de la navette, et **une limite de bagages écrite** à la réservation, pour éviter la discussion devant le car. Pour un transporteur, ce sont des places payées d'avance, en devises, à la période où les cars sont le plus demandés ; pour un fondateur, c'est un point d'entrée simple avant un réseau plus large. Les principes de réservation depuis la France sont les mêmes que pour [les hôtels](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/).",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles possibles, du transporteur qui équipe ses cars au réseau qui vend pour plusieurs.",
      ], visual: 'models', after: [
        "**Un transporteur et une ligne** sont le point de départ le plus sûr : l'effet se mesure en semaines, sur la caisse et le remplissage. **Le réseau de lignes**, type FlixBus, qui annonce plus de 65 millions de voyageurs transportés en France depuis 2015, est le modèle le plus ambitieux : une marque et une vente communes pour des cars appartenant à plusieurs transporteurs. Il exige des règles écrites, ponctualité, propreté, saisie à bord, et un partage des recettes que chaque transporteur peut vérifier.",
        "**Le transport du personnel** est souvent le modèle le plus rentable à court terme : des contrats d'entreprise, une facture au mois, mais des circuits, des présences et des retards à justifier ; c'est un cousin de nos [plateformes de transport et de livraison](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). **Les colis par car** ajoutent une recette à chaque voyage, à condition d'être tracés. Le covoiturage et le VTC, eux, relèvent d'une autre logique, que nous traitons dans [créer l'équivalent d'Uber ou de BlaBlaCar](/blog/creer-equivalent-uber-blablacar-algerie-2026/).",
      ] },
      { heading: 'Le calendrier pour 2027', body: [
        "Une quinzaine de semaines entre le cadrage et un pilote mesuré, pour être prêt avant l'Aïd el-Fitr.",
      ], visual: 'saison', after: [
        "**Novembre : le cadrage**, les lignes, les horaires, les cars et les tarifs en vigueur. **Novembre et décembre : le stock de places unique et le guichet**, puis **le téléphone du receveur**, essayé hors réseau sur une vraie ligne. **Janvier et février : le pilote sur une ligne**, en comptant les passagers à l'arrivée et en comparant avec la caisse. **Début mars : l'Aïd el-Fitr**, attendu vers le 9 mars, premier pic où les places en temps réel montrent leur valeur.",
        "**Mars à mai : la vente en ligne et les colis**, avant l'Aïd el-Adha, attendu vers le 16 mai, puis l'été et l'arrivée de la diaspora. Ces durées sont cohérentes avec celles que nous détaillons dans [combien de temps pour développer une application ou une plateforme](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'Ce qui fait échouer ce type de projet', body: [], list: [
        "**Commencer par l'application du voyageur.** Une belle réservation en ligne ne change rien si la caisse à bord reste invisible.",
        "**Un téléphone du receveur qui exige le réseau.** Sur la route, le réseau tombe ; la vente doit continuer et se synchroniser après.",
        "**Une saisie plus lente que l'espèce.** Au-delà de trois touches par billet, le receveur revient au carnet.",
        "**Deux stocks de places.** Guichet et site séparés, c'est la place vendue deux fois la veille de l'Aïd.",
        "**Des colis sans photo ni code.** Le premier litige coûte plus cher que le système.",
        "**Un projet contre les receveurs.** Sans part liée aux ventes saisies, le système sera contourné.",
        "**Les comptes au nom du développeur.** Serveur, domaine, données et compte de paiement au nom du transporteur dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Mahatati existe déjà : pourquoi un transporteur aurait-il son propre système ?", a: "Mahatati vend des places dans les gares de la SOGRAL et a vendu plus de deux millions de billets en 2025. Mais elle ne gère pas la caisse à bord, les colis, le carburant ni les départs hors gare du transporteur. Un système propre au transporteur tient ces moments et peut garder un stock de places unique avec les différents canaux de vente." },
        { q: "Peut-on vendre des billets à bord sans réseau ?", a: "Oui, si le téléphone du receveur télécharge la liste du voyage au départ, saisit les ventes et les colis hors ligne avec l'heure et l'arrêt, et synchronise dès que le réseau revient. L'essai se fait sur une vraie ligne avant le lancement." },
        { q: "Les tarifs sont-ils libres ?", a: "Non : selon la presse, les tarifs du transport public de voyageurs sont encadrés et datent de 2018. Vérifiez la grille en vigueur pour vos lignes. C'est justement pourquoi le remplissage et la caisse sont les vrais leviers de marge." },
        { q: "Comment tracer les colis transportés par car ?", a: "Par un enregistrement au dépôt avec photo, expéditeur et destinataire, un code de retrait envoyé au destinataire, et une remise contre ce code à l'arrivée. Chaque colis est rattaché à un voyage et apparaît dans sa caisse." },
        { q: "Faut-il une application mobile pour les voyageurs ?", a: "Pas au départ. Un site de réservation avec paiement CIB, Edahabia ou en euros et un billet par SMS suffisent. L'application vient quand les voyageurs reviennent souvent ; nous détaillons ces choix dans [créer une application mobile en 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "Combien de temps pour être prêt ?", a: "Environ quinze semaines entre le cadrage et la fin d'un pilote mesuré sur une ligne, avec le stock de places, le guichet et le téléphone du receveur. La vente en ligne et les colis suivent sur deux à trois mois, avant l'Aïd el-Adha et l'été." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Quand le prix ne bouge pas, chaque place vide et chaque billet non saisi se lisent dans le résultat." },
      { after: 3, text: "L'application de réservation est ce que l'on montre ; le téléphone du receveur est ce qui fait rentrer l'argent." },
    ],
    cta: { eyebrow: 'Décrivez votre projet', title: "Transporteur de voyageurs, transport du personnel, navettes ou réseau à lancer : le nombre de cars et de lignes, comment vous vendez, encaissez et suivez les colis aujourd'hui, et la date visée. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des systèmes de billetterie, des applications de receveur et de chauffeur, des outils de suivi des colis et des tableaux de bord pour les transporteurs algériens, en arabe, en français et en anglais, avec le paiement en dinars et en euros. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/', kind: 'Série #11', name: 'Créer une billetterie en ligne en Algérie en 2027' },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'Plateforme de livraison et de transport en Algérie en 2027' },
      { href: '/blog/creer-equivalent-uber-blablacar-algerie-2026/', kind: 'Série', name: "Créer l'équivalent d'Uber ou de BlaBlaCar en Algérie" },
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'Gérer son commerce en Algérie depuis la France en 2027' },
    ] },
  },
  en: {
    kind: 'Series · Seen in France #14', title: 'Coach operators in Algeria in 2027: selling seats online alongside Mahatati, controlling the conductor’s cash and tracking parcels.',
    dek: "In France, FlixBus sells seats on coaches it does not own: it keeps the brand, the network and the sales, and leaves the driving to partner operators. In Algeria, online sales have started in SOGRAL bus stations with the Mahatati app, but at private operators much of the money still moves in cash on board, far from the office. What a trip must hold at each moment, what to build first, what an untraced on-board ticket costs, six leaks and their counters, and a calendar to Eid al-Adha 2027.",
    publishedAt: 'November 2026', readTime: '11 min read', author: 'Symloop', about: ['Passenger transport', 'Ticketing', 'Logistics', 'Diaspora', 'Algeria 2027'],
    intro: [
      "**Short answer.** For a coach operator in Algeria in 2027, the first app to build is not the traveller’s: it is **the conductor’s phone**. It carries the passenger list, sells and records tickets bought en route with a receipt, registers each parcel with a photo and a code for the recipient, and works with no network between two wilayas. Behind it, a **single seat stock** prevents the same seat being sold twice between the counter, the website and agents, and each trip closes with reconciled cash: tickets, parcels, fuel. With fares regulated, **load and cash control make the margin**, not price.",
      "This guide is the fourteenth in the series “Seen in France, to build in Algeria”, after [tutoring](/blog/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora/) and [online ticketing](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/). It is written for private coach operators, staff transport companies and agencies, and for the diaspora founder who has seen FlixBus and wants to build the equivalent with Algerian operators.",
    ],
    sections: [
      { heading: 'What Mahatati has already shown', body: [
        "Selling coach tickets online is no longer a hypothesis in Algeria. SOGRAL, which runs the bus stations, launched the **Mahatati** app in early 2023: you choose a departure, reserve a seat and pay by CIB or Edahabia, then show the digital ticket at boarding. According to APS, the app sold **2,026,784 tickets in 2025, up 160%**, across **60 bus stations**, led by Algiers, Jijel, Tlemcen and Annaba. Since 18 May 2026 return tickets have been offered, first on Algiers–Biskra, Algiers–Sétif and Algiers–Tlemcen. **Travellers already pay online when they are offered the chance.**",
        "What Mahatati does not solve is what happens at the operator: the coach leaving from a stop outside a station, seats sold on board, parcels, fuel. The peaks are known: for Eid al-Adha 2025 SOGRAL announced 2,650 extra departures, and 2,200 for 2026. And margins are squeezed: according to Maghreb Émergent, public passenger transport fares date from 2018 and requests to raise them have been rejected. The private sector reportedly employs about a million people, drivers and conductors included, according to an operators’ federation quoted in the press. **When the price does not move, every empty seat and every unrecorded ticket shows straight up in the result.**",
      ] },
      { heading: 'A trip that holds, in six moments', body: [
        "The system has to hold each of these six moments. The first three happen before departure; the last three, on the road and on arrival.",
      ], visual: 'journey', after: [
        "**Departure** is described by its line, time, coach, driver and the number of seats allocated to each channel: counter, online, agents, station. **The sale** draws from **a single stock**: when a seat is sold at the counter, it disappears from the website in the same second. **Boarding** uses the passenger list on the conductor’s phone, by QR or by name, and seats left free are offered until the last moment.",
        "**On board**, a ticket sold between two stops is entered on the phone, with a receipt for the traveller. **Parcels** entrusted to the coach are registered at drop-off, photographed, and handed over against a code sent to the recipient. **Closing**, finally, reconciles for each trip the tickets, parcels, fuel and the number of passengers counted on arrival.",
      ] },
      { heading: 'What to build: the conductor’s phone first', body: [
        "The temptation is to start with a beautiful booking app. It is useful, but a large share of the money does not go through it.",
      ], visual: 'stack', after: [
        "**The conductor’s phone** is the heart of it. At departure it downloads the trip list; en route it sells and records tickets and parcels, prints or sends a receipt, and keeps everything in memory when the network drops in the gorges or on the High Plateaus; it syncs as soon as the network returns. Every sale carries the time, the stop and the conductor. **If recording takes longer than a cash sale, it will not be done**: the screen has to fit in three taps.",
        "**The single seat stock** comes next, because it is what allows online sales to open without selling the same seat twice. **The dashboard per line** shows the owner each trip’s load, revenue, parcels and fuel; many transport companies are family businesses, and the partner living in France can follow the figures without calling, as we describe in [running a business in Algeria from France](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/). The offline logic is the same as at a concert gate, covered in [online ticketing](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/).",
      ] },
      { heading: 'What an untraced on-board ticket costs', body: [
        "An example on assumptions, to redo with your lines: ten coaches, two departures a day, 50 seats, 70% load, 1,000 DA average ticket.",
      ], visual: 'caisse', after: [
        "That makes 700 passengers a day. If 30% of tickets are sold on board, **210,000 DA pass through conductors’ hands every day**. If 10% of those sales are not recorded, that is 21,000 DA a day, **about 630,000 DA a month**. We know of no public measurement of these rates, and they vary enormously from one company to another; they are assumptions to show the order of magnitude, not an accusation against conductors.",
        "Checking needs no software: for one week, have passengers counted on arrival on two lines and compare with the tickets in the till. The gap, if there is one, gives the value of the project. And the most effective counter is often social as much as technical: **a conductor’s share calculated on recorded sales** aligns their interest with the company’s.",
      ] },
      { heading: 'Six leaks, six counters', body: [
        "An operator loses money through small doors, on the road and at the counter. Six come up everywhere.",
      ], visual: 'fuites', after: [
        "**The seat sold twice** is the leak that costs most in reputation: two travellers for one seat on the eve of Eid means an argument at departure and a customer lost. It disappears with a single stock, locked at the sale. **The untraced parcel** costs in disputes: a photo at drop-off and a pickup code sent to the recipient are enough to know who handed what to whom.",
        "**The coach leaving half empty** is a silent leak: remaining seats must stay on sale, at the counter and online, until departure, and show on the conductor’s phone for the next stops. **The unannounced delay**, finally, is fixed with an SMS giving the estimated time, calculated from the coach’s position.",
      ] },
      { heading: 'Summer, the diaspora and shuttles', body: [
        "In summer part of the diaspora arrives by plane or ferry, with luggage, often as a family, and still has to reach their wilaya. It is a precise demand: a seat booked and paid from France, in euros, on a shuttle that waits for the ferry or flight, even when late, and drops each family in its town.",
        "The mechanism is the rest of this article, with two additions: **tracking the arrival** of the ferry or flight, to move the shuttle’s departure, and **a written luggage limit** at booking, to avoid an argument in front of the coach. For an operator, these are seats paid in advance, in foreign currency, at the time coaches are most in demand; for a founder, it is a simple entry point before a wider network. The principles of booking from France are the same as for [hotels](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/).",
      ] },
      { heading: 'Which model to build', body: [
        "Six possible models, from the operator equipping its coaches to the network that sells for several.",
      ], visual: 'models', after: [
        "**One operator and one line** are the safest starting point: the effect shows within weeks, in cash and load. **The line network**, FlixBus style, which reports more than 65 million passengers carried in France since 2015, is the most ambitious model: a shared brand and sales for coaches owned by several operators. It needs written rules, punctuality, cleanliness, on-board recording, and a revenue split that each operator can check.",
        "**Staff transport** is often the most profitable model in the short term: company contracts, a monthly invoice, but routes, attendance and delays to justify; it is a cousin of our [transport and delivery platforms](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). **Parcels by coach** add revenue to every trip, provided they are tracked. Car-sharing and ride-hailing follow a different logic, which we cover in [building the Uber or BlaBlaCar of Algeria](/blog/creer-equivalent-uber-blablacar-algerie-2026/).",
      ] },
      { heading: 'The calendar for 2027', body: [
        "About fifteen weeks between scoping and a measured pilot, to be ready before Eid al-Fitr.",
      ], visual: 'saison', after: [
        "**November: scoping**, lines, timetables, coaches and current fares. **November and December: the single seat stock and the counter**, then **the conductor’s phone**, tested offline on a real line. **January and February: the pilot on one line**, counting passengers on arrival and comparing with the till. **Early March: Eid al-Fitr**, expected around 9 March, the first peak where live seats show their value.",
        "**March to May: online sales and parcels**, before Eid al-Adha, expected around 16 May, then summer and the arrival of the diaspora. These durations are consistent with those we set out in [how long it takes to build an app or platform](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with the traveller app.** A beautiful online booking changes nothing if on-board cash stays invisible.",
        "**A conductor’s phone that needs the network.** On the road the network drops; sales must continue and sync afterwards.",
        "**Recording slower than cash.** Beyond three taps per ticket, the conductor goes back to the paper book.",
        "**Two seat stocks.** Separate counter and website means a seat sold twice on the eve of Eid.",
        "**Parcels with no photo or code.** The first dispute costs more than the system.",
        "**A project against conductors.** Without a share tied to recorded sales, the system will be bypassed.",
        "**Accounts in the developer’s name.** Server, domain, data and payment account in the operator’s name from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Mahatati already exists: why would an operator have its own system?', a: "Mahatati sells seats in SOGRAL stations and sold more than two million tickets in 2025. But it does not handle on-board cash, parcels, fuel or the operator’s departures outside stations. An operator’s own system holds those moments and can keep a single seat stock across the different sales channels." },
        { q: 'Can tickets be sold on board without a network?', a: "Yes, if the conductor’s phone downloads the trip list at departure, records sales and parcels offline with time and stop, and syncs as soon as the network returns. The test is done on a real line before launch." },
        { q: 'Are fares free?', a: "No: according to the press, public passenger transport fares are regulated and date from 2018. Check the scale in force for your lines. That is exactly why load and cash control are the real margin levers." },
        { q: 'How do you track parcels carried by coach?', a: "Through registration at drop-off with a photo, sender and recipient, a pickup code sent to the recipient, and handover against that code on arrival. Each parcel is tied to a trip and appears in its cash." },
        { q: 'Do travellers need a mobile app?', a: "Not at first. A booking website with payment by CIB, Edahabia or euros and a ticket by SMS is enough. The app comes when travellers return often; we cover those choices in [building a mobile app in 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: 'How long does it take to be ready?', a: "About fifteen weeks between scoping and the end of a measured pilot on one line, with the seat stock, the counter and the conductor’s phone. Online sales and parcels follow over two to three months, before Eid al-Adha and summer." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'When the price does not move, every empty seat and every unrecorded ticket shows in the result.' },
      { after: 3, text: 'The booking app is what you show; the conductor’s phone is what brings the money in.' },
    ],
    cta: { eyebrow: 'Tell us about your project', title: 'Coach operator, staff transport, shuttles or network to launch: the number of coaches and lines, how you sell, collect cash and track parcels today, and the target date. We send back the scope, the calendar and the total price, in writing, before we start.', body: 'Symloop builds ticketing systems, conductor and driver apps, parcel tracking tools and dashboards for Algerian transport operators, in Arabic, French and English, with payment in dinars and euros. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name.' },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/', kind: 'Series #11', name: 'Building an online ticketing platform in Algeria in 2027' },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'Delivery and transport platforms in Algeria in 2027' },
      { href: '/blog/creer-equivalent-uber-blablacar-algerie-2026/', kind: 'Series', name: 'Building the Uber or BlaBlaCar of Algeria' },
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'Running a business in Algeria from France in 2027' },
    ] },
  },
  ar: {
    kind: 'سلسلة · رأيناه في فرنسا #14', title: 'ناقل المسافرين في الجزائر سنة 2027: بيع المقاعد عبر الإنترنت إلى جانب «محطتي»، وضبط صندوق القابض، وتتبّع الطرود.',
    dek: 'في فرنسا تبيع FlixBus مقاعد في حافلات لا تملكها: تحتفظ بالعلامة والشبكة والبيع، وتترك الطريق لناقلين شركاء. في الجزائر بدأ البيع عبر الإنترنت في محطات «سوقرال» بتطبيق «محطتي»، لكن عند الناقل الخاص ما زال جزء كبير من المال يدور نقداً على متن الحافلة، بعيداً عن المكتب. ما يجب أن تصمد عنده الرحلة في كل لحظة، وما يُبنى أولاً، وكم تكلّف تذكرة تُباع على المتن بلا أثر، وستة تسرّبات وردودها، وجدول زمني حتى عيد الأضحى 2027.',
    publishedAt: 'نوفمبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['نقل المسافرين', 'التذاكر', 'اللوجستيك', 'الجالية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** بالنسبة لناقل المسافرين في الجزائر سنة 2027، أول تطبيق يُبنى ليس تطبيق المسافر: إنه **هاتف القابض**. يحمل قائمة المسافرين، ويبيع ويسجّل التذاكر المشتراة في الطريق بوصل، ويسجّل كل طرد بصورة ورمز للمستلم، ويعمل دون شبكة بين ولايتين. ووراءه **مخزون مقاعد واحد** يمنع بيع المقعد نفسه مرتين بين الشباك والموقع والوكلاء، وتُغلق كل رحلة بصندوق مطابَق: التذاكر، الطرود، الوقود. وبما أن التسعيرة مؤطَّرة، **فنسبة الملء والصندوق هما ما يصنع الهامش**، لا السعر.",
      "هذا الدليل هو الرابع عشر في سلسلة «رأيناه في فرنسا، لنبنيه في الجزائر»، بعد [دروس الدعم](/blog/creer-plateforme-cours-soutien-scolaire-algerie-2027-bac-cours-arabe-diaspora/) و[بيع التذاكر عبر الإنترنت](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/). وهو موجّه للناقلين الخواص للمسافرين، ولشركات نقل العمال والوكالات، وللمؤسس من الجالية الذي رأى FlixBus ويريد بناء مقابلها مع ناقلين جزائريين.",
    ],
    sections: [
      { heading: 'ما أظهره تطبيق «محطتي»', body: [
        "بيع تذاكر الحافلات عبر الإنترنت لم يعد فرضية في الجزائر. أطلقت «سوقرال»، التي تسيّر المحطات البرية، تطبيق **«محطتي»** مطلع 2023: يُختار فيه الموعد ويُحجز المقعد ويُدفع بـCIB أو الذهبية، ثم تُقدَّم التذكرة الرقمية عند الصعود. وحسب وكالة الأنباء الجزائرية، باع التطبيق **2026784 تذكرة سنة 2025، بارتفاع 160 %**، في **60 محطة برية**، تتقدّمها الجزائر وجيجل وتلمسان وعنابة. ومنذ 18 ماي 2026 صار الذهاب والإياب متاحاً، أولاً على خطوط الجزائر–بسكرة والجزائر–سطيف والجزائر–تلمسان. **المسافرون يدفعون إذن عبر الإنترنت حين يُعرض عليهم ذلك.**",
        "ما لا يحلّه «محطتي» هو ما يجري عند الناقل: الحافلة التي تنطلق من موقف خارج المحطة، والمقاعد المبيعة على المتن، والطرود، والوقود. والذروات معروفة: لعيد الأضحى 2025 أعلنت «سوقرال» عن 2650 رحلة إضافية، و2200 لعيد 2026. والهامش تحت الضغط: حسب «مغرب إمرجنت»، تعود تسعيرة النقل العمومي للمسافرين إلى 2018 ورُفضت طلبات رفعها. ويشغّل القطاع الخاص نحو مليون شخص، بين سائقين وقابضين، حسب فدرالية ناقلين نقلت عنها الصحافة. **حين لا يتحرّك السعر، يظهر كل مقعد فارغ وكل تذكرة غير مسجَّلة مباشرة في النتيجة.**",
      ] },
      { heading: 'رحلة تصمد، في ست لحظات', body: [
        "على النظام أن يصمد في كل لحظة من هذه اللحظات الست. الثلاث الأولى تجري قبل الانطلاق؛ والثلاث الأخيرة على الطريق وعند الوصول.",
      ], visual: 'journey', after: [
        "**الانطلاق** يُوصف بخطه وموعده وحافلته وسائقه وعدد المقاعد المخصّص لكل قناة: الشباك، الإنترنت، الوكلاء، المحطة. **البيع** يأخذ من **مخزون واحد**: حين يُباع مقعد في الشباك يختفي من الموقع في الثانية نفسها. **الصعود** يتم بقائمة المسافرين على هاتف القابض، برمز QR أو بالاسم، وتُعرض المقاعد الشاغرة حتى اللحظة الأخيرة.",
        "**على المتن** تُسجَّل التذكرة المبيعة بين محطتين على الهاتف، مع وصل للمسافر. **الطرود** المسلَّمة للحافلة تُسجَّل عند الإيداع وتُصوَّر وتُسلَّم مقابل رمز يُرسل للمستلم. وأخيراً **الإغلاق** يطابق لكل رحلة التذاكر والطرود والوقود وعدد المسافرين المعدودين عند الوصول.",
      ] },
      { heading: 'ما يجب بناؤه: هاتف القابض أولاً', body: [
        "الإغراء هو البدء بتطبيق حجز جميل. إنه مفيد، لكن جزءاً كبيراً من المال لا يمرّ عبره.",
      ], visual: 'stack', after: [
        "**هاتف القابض** هو القلب. عند الانطلاق يحمّل قائمة الرحلة؛ وفي الطريق يبيع ويسجّل التذاكر والطرود، ويطبع وصلاً أو يرسله، ويحفظ كل شيء حين تختفي الشبكة في المضايق أو في الهضاب العليا؛ ويتزامن فور عودتها. كل بيع يحمل الوقت والمحطة والقابض. **إذا استغرق التسجيل وقتاً أطول من البيع نقداً فلن يُنجز**: يجب أن تكفي الشاشة ثلاث لمسات.",
        "**مخزون المقاعد الواحد** يأتي بعده، لأنه ما يسمح بفتح البيع عبر الإنترنت دون بيع المقعد نفسه مرتين. و**اللوحة لكل خط** تُري المالك نسبة ملء كل رحلة ومداخيلها وطرودها ووقودها؛ كثير من شركات النقل عائلية، والشريك المقيم في فرنسا يستطيع متابعة الأرقام دون اتصال، كما نصف في [تسيير تجارتك في الجزائر من فرنسا](/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/). ومنطق العمل دون شبكة هو نفسه الذي في بوابة الحفل، المفصّل في [بيع التذاكر عبر الإنترنت](/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/).",
      ] },
      { heading: 'كم تكلّف تذكرة تُباع على المتن بلا أثر', body: [
        "مثال مبني على فرضيات، أعده على خطوطك: عشر حافلات، رحلتان في اليوم، 50 مقعداً، 70 % نسبة ملء، 1000 دج متوسط التذكرة.",
      ], visual: 'caisse', after: [
        "هذا يعني 700 مسافر في اليوم. إذا بيع 30 % من التذاكر على المتن، **تمرّ 210000 دج كل يوم بين أيدي القابضين**. وإذا لم يُسجَّل 10 % من هذه المبيعات، فهي 21000 دج في اليوم، **نحو 630000 دج في الشهر**. لا نعرف أي قياس علني لهذه النسب، وهي تختلف كثيراً من شركة لأخرى؛ إنها فرضيات لإظهار حجم الأمر، لا اتهام للقابضين.",
        "التحقق لا يحتاج أي برنامج: طوال أسبوع، اطلب عدّ المسافرين عند الوصول على خطين وقارن بالتذاكر في الصندوق. الفارق، إن وُجد، هو قيمة المشروع. وأنجع رد غالباً اجتماعي بقدر ما هو تقني: **حصة للقابض تُحسب على المبيعات المسجَّلة** تجعل مصلحته من مصلحة الشركة.",
      ] },
      { heading: 'ستة تسرّبات وستة ردود', body: [
        "يخسر الناقل المال من أبواب صغيرة، على الطريق وفي الشباك. ستة منها تتكرّر في كل مكان.",
      ], visual: 'fuites', after: [
        "**المقعد المبيع مرتين** هو التسرّب الأكثر كلفة على السمعة: مسافران لمقعد واحد عشية العيد يعني شجاراً عند الانطلاق وزبوناً ضائعاً. ويختفي بمخزون واحد يُقفل عند البيع. **الطرد بلا أثر** يكلّف نزاعات: صورة عند الإيداع ورمز سحب يُرسل للمستلم يكفيان لمعرفة من سلّم ماذا ولمن.",
        "**الحافلة التي تنطلق نصف فارغة** تسرّب صامت: يجب أن تبقى المقاعد المتبقية معروضة للبيع، في الشباك وعبر الإنترنت، حتى الانطلاق، وأن تظهر على هاتف القابض للمحطات التالية. وأخيراً **التأخير غير المعلن** يُحلّ برسالة قصيرة بالوقت المقدَّر، محسوباً من موقع الحافلة.",
      ] },
      { heading: 'الصيف والجالية والنقل المكوكي', body: [
        "في الصيف يصل جزء من الجالية بالطائرة أو بالباخرة، مع أمتعة وغالباً مع العائلة، ولا يزال عليه الوصول إلى ولايته. إنه طلب محدّد: مقعد محجوز ومدفوع من فرنسا، باليورو، في حافلة مكوكية تنتظر الباخرة أو الرحلة الجوية حتى لو تأخرت، وتوصل كل عائلة إلى مدينتها.",
        "الآلية هي بقية هذا المقال، مع إضافتين: **تتبّع وصول** الباخرة أو الطائرة لتأخير انطلاق الحافلة، و**حدّ مكتوب للأمتعة** عند الحجز لتفادي النقاش أمام الحافلة. بالنسبة للناقل هي مقاعد مدفوعة مسبقاً، بالعملة الصعبة، في الفترة التي تكون فيها الحافلات أكثر طلباً؛ وبالنسبة للمؤسس هي نقطة دخول بسيطة قبل شبكة أوسع. ومبادئ الحجز من فرنسا هي نفسها التي في [الفنادق](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/).",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج ممكنة، من الناقل الذي يجهّز حافلاته إلى الشبكة التي تبيع لعدة ناقلين.",
      ], visual: 'models', after: [
        "**ناقل واحد وخط واحد** هما نقطة الانطلاق الأكثر أماناً: يظهر الأثر خلال أسابيع في الصندوق ونسبة الملء. **شبكة الخطوط** على طريقة FlixBus، التي تعلن أكثر من 65 مليون مسافر في فرنسا منذ 2015، هي النموذج الأكثر طموحاً: علامة وبيع مشتركان لحافلات يملكها عدة ناقلين. وتحتاج قواعد مكتوبة، الانضباط في المواعيد والنظافة والتسجيل على المتن، وتقاسماً للمداخيل يستطيع كل ناقل التحقق منه.",
        "**نقل العمال** غالباً النموذج الأكثر ربحاً على المدى القصير: عقود مؤسسات وفاتورة شهرية، لكن مسارات وحضور وتأخيرات يجب تبريرها؛ وهو قريب من [منصات النقل والتوصيل](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). و**الطرود عبر الحافلات** تضيف مدخولاً لكل رحلة بشرط تتبّعها. أما التنقل المشترك وسيارات النقل بالسائق فلهما منطق آخر نتناوله في [إنشاء مقابل Uber أو BlaBlaCar](/blog/creer-equivalent-uber-blablacar-algerie-2026/).",
      ] },
      { heading: 'الجدول الزمني لسنة 2027', body: [
        "نحو خمسة عشر أسبوعاً بين التأطير وتجربة مقاسة، للجاهزية قبل عيد الفطر.",
      ], visual: 'saison', after: [
        "**نوفمبر: التأطير**، الخطوط والمواعيد والحافلات والتسعيرة السارية. **نوفمبر وديسمبر: مخزون المقاعد الواحد والشباك**، ثم **هاتف القابض** مجرَّباً دون شبكة على خط حقيقي. **جانفي وفيفري: التجربة على خط واحد** بعدّ المسافرين عند الوصول ومقارنتهم بالصندوق. **بداية مارس: عيد الفطر**، المنتظر نحو 9 مارس، الذروة الأولى التي تُظهر فيها المقاعد في الوقت الحقيقي قيمتها.",
        "**من مارس إلى ماي: البيع عبر الإنترنت والطرود**، قبل عيد الأضحى المنتظر نحو 16 ماي، ثم الصيف ووصول الجالية. وهذه المدد متّسقة مع ما نفصّله في [كم من الوقت لتطوير تطبيق أو منصة](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/).",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بتطبيق المسافر.** حجز جميل عبر الإنترنت لا يغيّر شيئاً إذا بقي صندوق المتن غير مرئي.",
        "**هاتف قابض يحتاج الشبكة.** على الطريق تسقط الشبكة؛ يجب أن يستمر البيع ويتزامن بعدها.",
        "**تسجيل أبطأ من النقد.** أكثر من ثلاث لمسات لكل تذكرة، ويعود القابض إلى الدفتر.",
        "**مخزونان للمقاعد.** شباك وموقع منفصلان يعني مقعداً مبيعاً مرتين عشية العيد.",
        "**طرود بلا صورة ولا رمز.** أول نزاع يكلّف أكثر من النظام.",
        "**مشروع ضد القابضين.** دون حصة مرتبطة بالمبيعات المسجَّلة سيُتحايل على النظام.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والبيانات وحساب الدفع باسم الناقل منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "«محطتي» موجود أصلاً: لماذا يملك الناقل نظامه الخاص؟", a: "يبيع «محطتي» مقاعد في محطات «سوقرال» وباع أكثر من مليوني تذكرة سنة 2025. لكنه لا يسيّر صندوق المتن ولا الطرود ولا الوقود ولا انطلاقات الناقل خارج المحطات. نظام خاص بالناقل يضبط هذه اللحظات ويمكنه الإبقاء على مخزون مقاعد واحد عبر قنوات البيع المختلفة." },
        { q: "هل يمكن بيع التذاكر على المتن دون شبكة؟", a: "نعم، إذا حمّل هاتف القابض قائمة الرحلة عند الانطلاق، وسجّل المبيعات والطرود دون شبكة بالوقت والمحطة، وتزامن فور عودة الشبكة. وتُجرى التجربة على خط حقيقي قبل الإطلاق." },
        { q: "هل التسعيرة حرة؟", a: "لا: حسب الصحافة، تسعيرة النقل العمومي للمسافرين مؤطَّرة وتعود إلى 2018. تحقّق من الجدول الساري على خطوطك. ولهذا بالضبط تكون نسبة الملء والصندوق رافعتَي الهامش الحقيقيتين." },
        { q: "كيف تُتتبَّع الطرود المنقولة بالحافلات؟", a: "بتسجيل عند الإيداع مع صورة والمرسل والمستلم، ورمز سحب يُرسل للمستلم، وتسليم مقابل هذا الرمز عند الوصول. كل طرد مربوط برحلة ويظهر في صندوقها." },
        { q: "هل يحتاج المسافرون إلى تطبيق للهاتف؟", a: "ليس في البداية. يكفي موقع حجز بالدفع بـCIB أو الذهبية أو اليورو وتذكرة برسالة قصيرة. ويأتي التطبيق حين يعود المسافرون كثيراً؛ نفصّل هذه الخيارات في [إنشاء تطبيق للهاتف سنة 2027](/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/)." },
        { q: "كم من الوقت يلزم للجاهزية؟", a: "نحو خمسة عشر أسبوعاً بين التأطير ونهاية تجربة مقاسة على خط واحد، بمخزون المقاعد والشباك وهاتف القابض. ثم يأتي البيع عبر الإنترنت والطرود خلال شهرين إلى ثلاثة، قبل عيد الأضحى والصيف." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "حين لا يتحرّك السعر، يظهر كل مقعد فارغ وكل تذكرة غير مسجَّلة في النتيجة." },
      { after: 3, text: "تطبيق الحجز هو ما نعرضه؛ وهاتف القابض هو ما يُدخل المال." },
    ],
    cta: { eyebrow: 'صف لنا مشروعك', title: "ناقل مسافرين، أو نقل عمال، أو نقل مكوكي، أو شبكة للإطلاق: عدد الحافلات والخطوط، كيف تبيع وتحصّل وتتابع الطرود اليوم، والتاريخ المستهدف. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop أنظمة التذاكر وتطبيقات القابض والسائق وأدوات تتبّع الطرود ولوحات القيادة للناقلين الجزائريين، بالعربية والفرنسية والإنجليزية، مع الدفع بالدينار واليورو. مهندسون ذوو خبرة في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، والخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/creer-plateforme-billetterie-en-ligne-algerie-2027-billet-qr-porte-paiement/', kind: 'سلسلة #11', name: 'إنشاء منصة لبيع التذاكر عبر الإنترنت في الجزائر سنة 2027' },
      { href: '/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/', kind: '2027', name: 'منصات التوصيل والنقل في الجزائر سنة 2027' },
      { href: '/blog/creer-equivalent-uber-blablacar-algerie-2026/', kind: 'سلسلة', name: 'إنشاء مقابل Uber أو BlaBlaCar في الجزائر' },
      { href: '/blog/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance/', kind: '2027', name: 'تسيير تجارتك في الجزائر من فرنسا سنة 2027' },
    ] },
  },
};

const KEYWORDS = "transporteur de voyageurs algérie 2027, logiciel transport de voyageurs algérie, billetterie autocar en ligne algérie, application receveur bus, vente billets bus interwilaya en ligne, suivi colis par bus algérie, mahatati sogral alternative transporteur, équivalent flixbus algérie, coach operator software algeria, نقل المسافرين الجزائر تطبيق";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
