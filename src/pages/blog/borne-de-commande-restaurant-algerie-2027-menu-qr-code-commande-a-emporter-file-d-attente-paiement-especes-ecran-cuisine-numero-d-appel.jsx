import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/borne-de-commande-restaurant-algerie-2027-menu-qr-code-commande-a-emporter-file-d-attente-paiement-especes-ecran-cuisine-numero-d-appel.mjs';

const SLUG = 'borne-de-commande-restaurant-algerie-2027-menu-qr-code-commande-a-emporter-file-d-attente-paiement-especes-ecran-cuisine-numero-d-appel';
const FIGURES = ['goulot', 'canaux', 'couches', 'parcours', 'etapes', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  resto: '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/',
  caisse: '/blog/caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement/',
  sessions: '/blog/la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque/',
  fidelite: '/blog/programme-de-fidelite-algerie-2027-cafe-fast-food-chaine-application-points-caisse-relance/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  imprimer: '/blog/imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation/',
};

const CONTENT = {
  fr: {
    kind: 'Borne de commande · restaurant · Algérie · 2027', title: "Borne de commande pour restaurant en Algérie (2027) : la file sort jusqu'au trottoir à midi, combien de bornes, menu QR code, paiement en espèces, écran de cuisine et numéro d'appel",
    dek: "« À midi, la file sort jusqu'au trottoir et la moitié des gens repartent. La caissière prend les commandes aussi vite qu'elle peut, la cuisine attend, puis reçoit tout d'un coup. Un fournisseur me propose des bornes de commande comme dans les fast-foods en France. Est-ce que ça règle le problème ? Combien en faut-il ? Et chez nous, les gens paient en espèces : comment fait-on ? » La borne enlève la file à la caisse et la déplace en cuisine. Avant d'en commander, on mesure deux chiffres. Puis on équipe la cuisine d'abord, et on garde une caisse ouverte.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Borne de commande', 'Menu QR code', 'Commande à emporter', 'Écran de cuisine', 'File d’attente en restauration', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une borne règle la file quand elle se forme à la prise de commande, pas quand elle se forme en cuisine. Mesurez deux chiffres : les secondes par commande à la caisse, et le nombre de commandes que la cuisine sort en une heure de pointe. Une caisse à 75 secondes prend 48 commandes par heure ; si la cuisine peut en sortir 90, deux bornes suffisent, et la troisième n'apporte rien. Le reste se joue derrière l'écran : un écran de cuisine à la place des tickets, un numéro d'appel, un point de paiement pour les espèces, un seul menu pour tous les canaux, et une caisse qui reste ouverte.",
      "Ce guide s'adresse au gérant d'un fast-food, d'une pizzeria, d'un café ou d'une petite chaîne, et au fondateur installé en France qui veut ouvrir en Algérie un restaurant comme ceux qu'il fréquente là-bas. Les notions citées viennent de sources publiques : le goulot d'étranglement, la borne interactive, le code QR. Le restaurant, les durées et les capacités de l'exemple sont construits : remplacez-les par vos mesures. Ce guide ne donne aucun prix de matériel et ne traite pas des règles fiscales de la caisse.",
    ],
    sections: [
      { heading: "À midi, où se forme la file : à la caisse, puis en cuisine", body: [
        "La figure compare, pour la même heure de pointe, une caisse seule et une caisse aidée de trois bornes.",
      ], visual: 'goulot', after: [
        "**Le goulot.** Un goulot d'étranglement est, dans une chaîne d'étapes, celle dont la capacité limitée réduit la capacité de toute la chaîne. Dans un restaurant rapide, où le service à table est minimal, la chaîne a trois étapes : prendre la commande, la préparer, la remettre. **Le calcul.** Commandes par heure = 3 600 ÷ secondes par commande × nombre de points de commande. Une caissière qui met 75 secondes par client, encaissement compris, en prend 48 par heure. Si cent personnes se présentent entre midi et treize heures, 52 attendent ou repartent, pendant que la cuisine, capable d'en sortir 90, attend des tickets.",
        "**Avec des bornes.** Un client met plus longtemps qu'une caissière : comptons deux minutes. Une borne prend alors 30 commandes par heure, trois bornes 90, et avec la caisse 138. Le goulot change de place : la cuisine sort ses 90 commandes, et dix clients attendent, assis, avec un numéro. **Combien de bornes.** Dans cet exemple, deux suffisent : 48 + 60 = 108, déjà au-dessus de la cuisine et de la demande. La troisième ne sert rien de plus tant que la cuisine reste à 90. D'où la règle : on mesure la cuisine avant de commander des bornes. Chronométrez dix commandes à la caisse et dix plats au passe, un jour d'affluence.",
      ] },
      { heading: "Cinq façons de commander, et ce qu'il faut derrière chacune", body: [
        "La figure rapproche cinq façons de commander du service auquel chacune convient.",
      ], visual: 'canaux', after: [
        "**La borne.** Une borne interactive est un terminal informatique doté d'un matériel et d'un logiciel spécialisés. Dans la restauration rapide, les déploiements de commande en libre-service se sont beaucoup étendus, et certains restaurants ne reçoivent plus leurs commandes que par téléphone ou par borne. Elle convient à l'affluence à heures fixes et à un menu court. **Le menu QR.** Le code QR est un code-barres matriciel à deux dimensions, inventé en 1994 par Masahiro Hara chez Denso Wave, au Japon. Collé sur la table, il ouvre le menu sur le téléphone du client, sans application à installer ; il porte le numéro de la table, et l'addition se règle à la fin, comme avant.",
        "**À emporter.** Le client commande depuis son téléphone et choisit un créneau de retrait. Le risque est la commande jamais retirée ; on le réduit avec un numéro confirmé par code, un montant maximum sans paiement d'avance, et une préparation lancée au dernier moment utile. **La caisse reste.** Certains clients sont pressés, d'autres préfèrent parler à quelqu'un : la caisse reste ouverte, sur le même menu. **La livraison** arrive sur le même écran de cuisine, avec son heure de départ. Le détail de la salle et de la caisse est dans [le guide de la caisse pour restaurant](" + L.resto + ") ; un client reconnu sur l'un de ces canaux peut cumuler des points, comme dans [le guide du programme de fidélité](" + L.fidelite + ").",
      ] },
      { heading: "Ce qu'il y a derrière l'écran, en cinq couches", body: [
        "La couche accentuée est la cuisine.",
      ], visual: 'couches', after: [
        "**Un seul menu.** Produits, options, suppléments, prix et photos sont saisis une fois, en français et en arabe ; la borne, le menu QR, le téléphone et la caisse lisent le même catalogue. Un prix changé le matin est juste partout. **Une seule file.** Toutes les commandes reçoivent un numéro dans la même suite, quel que soit le canal ; personne ne recopie une commande d'un écran sur un ticket.",
        "**Le paiement.** Une grande partie des clients paient encore en espèces : le client valide sa commande à la borne, reçoit un numéro, règle au point de paiement, et la commande part en cuisine à ce moment-là. Là où un terminal est installé, la carte, CIB ou Edahabia, se règle à la borne ou au comptoir ; le rapprochement est décrit dans [le guide de la caisse et du paiement par carte](" + L.caisse + "). Chaque soir, les espèces se comptent par session, comme dans [le guide des sessions de caisse](" + L.sessions + "). **Le pilotage.** Ventes par heure et par canal, temps de préparation, produits épuisés : on voit à quelle heure la file se forme, et à quelle étape.",
      ] },
      { heading: "Une commande, quatre écrans, un seul numéro", body: [
        "La figure suit la commande n° 47, de l'écran où elle est saisie à l'écran où elle est appelée.",
      ], visual: 'parcours', after: [
        "**L'écran de cuisine.** Il remplace les tickets papier : chaque poste, grill, friteuse, boissons, voit ce qui le concerne, dans l'ordre d'arrivée, avec un minuteur ; un geste marque le plat prêt. **L'écran d'appel.** Deux colonnes, « en préparation » et « prête » : le client sait où en est son numéro sans le demander au comptoir, et il attend assis. **Le ticket.** Le numéro est imprimé, ou affiché sur le téléphone ; l'impression depuis une application est décrite dans [le guide de l'impression des tickets](" + L.imprimer + ").",
        "**Les ruptures.** Quand un produit est épuisé, la cuisine le retire d'un geste ; il disparaît au même instant de la borne, du menu sur téléphone et de la caisse, et personne ne commande ce qu'on ne peut plus servir. **Sans internet.** Les écrans du restaurant se parlent sur le réseau local : une coupure d'internet n'arrête ni la prise de commande ni la cuisine ; les commandes passées de l'extérieur et les rapports se rattrapent au retour de la connexion. Le principe est celui du [guide des applications hors ligne](" + L.horsligne + ").",
      ] },
      { heading: "Mettre en place, dans cet ordre", body: [
        "Le premier temps est accentué : mesurer.",
      ], visual: 'etapes', after: [
        "**Mesurer, puis simplifier.** Deux chiffres suffisent pour commencer : les secondes par commande, les plats sortis par heure. Puis le menu : un écran ne répond pas aux questions comme une caissière ; il faut des noms clairs, des photos, des options que l'on comprend sans aide, en deux langues. **La cuisine d'abord.** Une borne branchée sur une cuisine à tickets remplit le passe plus vite, sans rien servir de plus.",
        "**Un canal à la fois.** La borne ou le menu QR, sur un seul service, avec un employé à côté pendant les premières semaines : c'est lui qui apprend le geste aux clients, et qui vous dit où ils hésitent. **Garder la caisse.** Elle reste ouverte ; elle sert ceux qui ne veulent pas de l'écran et prend le relais en cas de panne. **Régler.** Les enseignes qui installent des bornes disent souvent que la commande moyenne augmente, parce que l'écran propose chaque fois le supplément. Nous n'avons pas de chiffre vérifié à vous donner : mesurez-le chez vous, semaine après semaine.",
      ] },
      { heading: "Huit semaines, de la mesure à l'ouverture, en 2027", body: [
        "Huit semaines dans l'exemple, dont trois pour la cuisine.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, mesurer et cadrer.** **Semaines 2 et 3, le menu et le parcours**, essayés avec de vrais clients. **Semaines 3 à 5, la cuisine** : écran par poste, écran d'appel, branchement à la caisse, fonctionnement sans internet.",
        "**Semaines 6 et 7, un premier canal** sur un seul service. **Semaine 8, l'ouverture** à tous les services et les premiers réglages. Si votre caisse actuelle sait recevoir des commandes d'un autre logiciel, on s'y branche ; sinon, on la remplace par une caisse qui fait partie du même ensemble. Les durées dépendent du nombre de points de vente et de l'état de la caisse existante.",
      ], list: [
        "**Ce que le gérant reçoit** : les deux mesures de départ, le nombre de points de commande calculé, le menu unique en deux langues, les écrans de cuisine et d'appel, et un tableau des ventes par heure et par canal.",
        "**Ce que le restaurant ne fait plus** : recopier une commande, crier un numéro, vendre un produit épuisé, laisser la cuisine attendre des tickets pendant que la file s'allonge.",
        "**Ce qui est mesuré** : secondes par commande, commandes par heure à chaque étape, temps entre le paiement et le « prêt », part de chaque canal, commandes à emporter non retirées.",
        "**Ce que fait Symloop** : la mesure, le logiciel de commande sur borne, sur téléphone et à la caisse, l'écran de cuisine et l'écran d'appel, le fonctionnement sans internet, le branchement à votre caisse ou son remplacement, puis le suivi des chiffres.",
      ], faq: [
        { q: "Une borne de commande réduit-elle vraiment la file d'attente ?", a: "Oui quand la file se forme à la prise de commande, et seulement jusqu'à la capacité de la cuisine. Dans notre exemple, on passe de 48 à 90 commandes servies par heure ; au-delà, c'est la cuisine qu'il faut accélérer. L'attente qui reste se fait assis, avec un numéro." },
        { q: "Combien de bornes faut-il pour mon restaurant ?", a: "Divisez le nombre de commandes à prendre à l'heure de pointe par ce qu'une borne en prend : 3 600 divisé par les secondes par commande. À deux minutes par client, une borne en prend 30 par heure. Arrêtez-vous quand la prise de commande dépasse ce que la cuisine sort : une borne de plus ne servirait rien de plus." },
        { q: "Comment le client paie-t-il à la borne s'il n'a que des espèces ?", a: "Il valide sa commande à la borne, reçoit un numéro et règle au point de paiement ; la commande part en cuisine à ce moment-là. Par carte, là où un terminal est installé, elle part dès la validation. En service à table, l'addition se règle à la fin." },
        { q: "Menu QR code ou borne de commande : que choisir ?", a: "La borne pour le comptoir et l'affluence à heures fixes ; le menu QR pour le service à table, où le client est déjà assis. Beaucoup de restaurants ont les deux, sur le même menu. Le QR demande moins de matériel, mais suppose que le client ait un téléphone et du réseau." },
        { q: "Le menu QR code a-t-il besoin d'une application ?", a: "Non. Le code ouvre une page web dans le navigateur du téléphone. Elle doit être légère, lisible en français et en arabe, et rapide sur le réseau mobile ; une photo du menu papier en PDF ne suffit pas." },
        { q: "Que se passe-t-il quand internet coupe ?", a: "Les bornes, la caisse, l'écran de cuisine et l'écran d'appel continuent sur le réseau du restaurant. Seules les commandes passées de l'extérieur attendent le retour de la connexion ; les rapports se mettent à jour ensuite." },
        { q: "Faut-il changer de logiciel de caisse ?", a: "Pas toujours. Si la caisse actuelle peut recevoir des commandes d'un autre logiciel, on s'y branche. Sinon, on la remplace par une caisse qui partage le même menu et la même file de commandes : deux menus à tenir à jour finissent toujours par diverger." },
        { q: "Les clients sauront-ils se servir de la borne ?", a: "La plupart, si le menu est court, les photos claires et le parcours en trois ou quatre écrans. Un employé à côté pendant les premières semaines fait la différence. Et la caisse reste ouverte pour ceux qui la préfèrent." },
        { q: "Comment éviter les commandes à emporter jamais récupérées ?", a: "Un numéro de téléphone confirmé par code, un montant maximum sans paiement d'avance, une préparation lancée au dernier moment utile avant le créneau, et un compte suspendu après plusieurs commandes non retirées." },
        { q: "Combien de temps pour mettre en place des bornes de commande ?", a: "Huit semaines dans notre exemple : une pour mesurer, deux pour le menu, trois pour la cuisine, deux pour un premier canal sur un seul service, puis l'ouverture. Le délai dépend du nombre de points de vente et de la caisse existante." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "La borne ne fait pas cuire plus vite : elle déplace l'attente, de la file debout vers la table." },
      { after: 4, text: "Une borne branchée sur une cuisine à tickets remplit le passe plus vite, sans rien servir de plus." },
    ],
    cta: { eyebrow: "Chronométrez dix commandes à la caisse et dix plats au passe, un midi d'affluence, et envoyez-nous les deux chiffres : nous vous disons où est le goulot et combien de points de commande il vous faut", title: "File jusqu'au trottoir, cuisine qui attend puis déborde, numéros criés au comptoir, ou fondateur en France qui prépare une ouverture en Algérie : nous construisons la commande, la cuisine et l'appel sur un seul menu", body: "Borne, menu QR, commande à emporter, écran de cuisine, écran d'appel, fonctionnement sans internet, branchement à la caisse. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.caisse, kind: '2027', name: 'Caisse de commerce : paiement par QR code et par carte, rapprochement' },
      { href: L.fidelite, kind: '2027', name: 'Programme de fidélité : café, fast-food, chaîne, points à la caisse' },
      { href: L.horsligne, kind: '2027', name: 'Application hors ligne : base locale, file d’attente, synchronisation' },
      { href: L.sessions, kind: '2027', name: 'Sessions de caisse : fond de caisse, comptage à l’aveugle, écart' },
    ] },
  },
  en: {
    kind: 'Ordering kiosk · restaurant · Algeria · 2027', title: "Ordering kiosk for a restaurant in Algeria (2027): the queue reaches the pavement at lunchtime, how many kiosks, QR code menu, paying in cash, kitchen screen and call number",
    dek: "“At lunchtime the queue reaches the pavement and half the people leave. The cashier takes orders as fast as she can, the kitchen waits, then gets everything at once. A supplier is offering me ordering kiosks like the ones in fast-food restaurants in France. Does that solve the problem? How many do I need? And here people pay in cash: how does that work?” The kiosk removes the queue at the till and moves it to the kitchen. Before ordering any, you measure two figures. Then you equip the kitchen first, and keep a till open.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Ordering kiosk', 'QR code menu', 'Take-away ordering', 'Kitchen screen', 'Queues in restaurants', 'Algeria 2027'],
    intro: [
      "**Short answer.** A kiosk fixes the queue when it forms at order taking, not when it forms in the kitchen. Measure two figures: the seconds per order at the till, and the number of orders the kitchen turns out in a peak hour. A till at 75 seconds takes 48 orders an hour; if the kitchen can turn out 90, two kiosks are enough, and the third adds nothing. The rest is decided behind the screen: a kitchen screen in place of paper tickets, a call number, a pay point for cash, a single menu for every channel, and a till that stays open.",
      "This guide is for the manager of a fast-food restaurant, a pizzeria, a café or a small chain, and for the founder based in France who wants to open in Algeria a restaurant like the ones they go to there. The notions quoted come from public sources: the bottleneck, the interactive kiosk, the QR code. The restaurant, durations and capacities in the example are constructed: replace them with your own measurements. This guide gives no hardware prices and does not cover the tax rules that apply to tills.",
    ],
    sections: [
      { heading: "At lunchtime, where the queue forms: at the till, then in the kitchen", body: [
        "The figure compares, for the same peak hour, a till on its own and a till helped by three kiosks.",
      ], visual: 'goulot', after: [
        "**The bottleneck.** A bottleneck is a process in a chain of processes, such that its limited capacity reduces the capacity of the whole chain. In a fast-food restaurant, where table service is minimal, the chain has three stages: taking the order, preparing it, handing it over. **The sum.** Orders per hour = 3,600 ÷ seconds per order × number of ordering points. A cashier who takes 75 seconds per customer, payment included, takes 48 an hour. If a hundred people turn up between noon and one o'clock, 52 wait or leave, while the kitchen, able to turn out 90, waits for tickets.",
        "**With kiosks.** A customer takes longer than a cashier: let us say two minutes. A kiosk then takes 30 orders an hour, three kiosks 90, and with the till 138. The bottleneck moves: the kitchen turns out its 90 orders, and ten customers wait, seated, with a number. **How many kiosks.** In this example, two are enough: 48 + 60 = 108, already above both the kitchen and the demand. The third serves nothing more as long as the kitchen stays at 90. Hence the rule: you measure the kitchen before ordering kiosks. Time ten orders at the till and ten dishes at the pass, on a busy day.",
      ] },
      { heading: "Five ways to order, and what each needs behind it", body: [
        "The figure sets five ways of ordering against the service each one suits.",
      ], visual: 'canaux', after: [
        "**The kiosk.** An interactive kiosk is a computer terminal featuring specialized hardware and software. In quick-service restaurants, self-order deployments have greatly expanded, and some restaurants now take orders only by mobile or kiosk. It suits traffic at fixed hours and a short menu. **The QR menu.** The QR code is a type of two-dimensional matrix barcode, invented in 1994 by Masahiro Hara at Denso Wave, in Japan. Stuck on the table, it opens the menu on the customer's phone, with no app to install; it carries the table number, and the bill is paid at the end, as before.",
        "**Take-away.** The customer orders from their phone and chooses a pick-up slot. The risk is the order nobody collects; you reduce it with a number confirmed by code, a maximum amount without advance payment, and preparation started at the last useful moment. **The till stays.** Some customers are in a hurry, others prefer to talk to someone: the till stays open, on the same menu. **Delivery** arrives on the same kitchen screen, with its departure time. The detail of the dining room and the till is in [the guide to the restaurant till](" + L.resto + "); a customer recognised on one of these channels can collect points, as in [the guide to the loyalty programme](" + L.fidelite + ").",
      ] },
      { heading: "What is behind the screen, in five layers", body: [
        "The accented layer is the kitchen.",
      ], visual: 'couches', after: [
        "**A single menu.** Items, options, extras, prices and photos are entered once, in French and Arabic; the kiosk, the QR menu, the phone and the till read the same catalogue. A price changed in the morning is right everywhere. **A single queue.** Every order gets a number in the same sequence, whatever the channel; nobody copies an order from a screen onto a ticket.",
        "**Payment.** A large share of customers still pay in cash: the customer confirms the order at the kiosk, gets a number, pays at the pay point, and the order goes to the kitchen at that moment. Where a terminal is installed, a card, CIB or Edahabia, is paid at the kiosk or the counter; reconciliation is described in [the guide to the till and card payment](" + L.caisse + "). Every evening, cash is counted per session, as in [the guide to till sessions](" + L.sessions + "). **Steering.** Sales per hour and per channel, preparation times, sold-out items: you see at what time the queue forms, and at which stage.",
      ] },
      { heading: "One order, four screens, a single number", body: [
        "The figure follows order no. 47, from the screen where it is entered to the screen where it is called.",
      ], visual: 'parcours', after: [
        "**The kitchen screen.** It replaces paper tickets: each station, grill, fryer, drinks, sees what concerns it, in order of arrival, with a timer; one tap marks the dish ready. **The call screen.** Two columns, “in preparation” and “ready”: the customer knows where their number stands without asking at the counter, and waits seated. **The ticket.** The number is printed, or shown on the phone; printing from an application is described in [the guide to printing tickets](" + L.imprimer + ").",
        "**Sold-out items.** When an item runs out, the kitchen removes it in one tap; it disappears at the same moment from the kiosk, the phone menu and the till, and nobody orders what can no longer be served. **Without the internet.** The restaurant's screens talk to each other over the local network: an internet outage stops neither order taking nor the kitchen; orders placed from outside and the reports catch up when the connection returns. The principle is that of [the guide to offline applications](" + L.horsligne + ").",
      ] },
      { heading: "Putting it in place, in this order", body: [
        "The first step is accented: measure.",
      ], visual: 'etapes', after: [
        "**Measure, then simplify.** Two figures are enough to start: seconds per order, dishes out per hour. Then the menu: a screen does not answer questions the way a cashier does; it needs clear names, photos, options that are understood without help, in two languages. **The kitchen first.** A kiosk plugged into a kitchen run on paper tickets fills the pass faster, without serving anything more.",
        "**One channel at a time.** The kiosk or the QR menu, on a single shift, with a staff member alongside for the first weeks: they teach customers the gesture, and tell you where people hesitate. **Keep the till.** It stays open; it serves those who do not want the screen and takes over if something breaks down. **Adjust.** Brands that install kiosks often say that the average order goes up, because the screen offers the extra every time. We have no verified figure to give you: measure it in your own restaurant, week after week.",
      ] },
      { heading: "Eight weeks, from measuring to opening, in 2027", body: [
        "Eight weeks in the example, three of them for the kitchen.",
      ], visual: 'calendrier', after: [
        "**Week 1, measure and scope.** **Weeks 2 and 3, the menu and the journey**, tried with real customers. **Weeks 3 to 5, the kitchen**: screen per station, call screen, connection to the till, running without the internet.",
        "**Weeks 6 and 7, a first channel** on a single shift. **Week 8, opening** on every shift and the first adjustments. If your current till can receive orders from another piece of software, we connect to it; otherwise it is replaced by a till that is part of the same system. Durations depend on the number of outlets and on the state of the existing till.",
      ], list: [
        "**What the manager receives**: the two starting measurements, the calculated number of ordering points, the single menu in two languages, the kitchen and call screens, and a table of sales per hour and per channel.",
        "**What the restaurant no longer does**: copy an order, shout a number, sell a sold-out item, leave the kitchen waiting for tickets while the queue grows.",
        "**What is measured**: seconds per order, orders per hour at each stage, time between payment and “ready”, share of each channel, take-away orders not collected.",
        "**What Symloop does**: the measurement, the ordering software on kiosk, phone and till, the kitchen screen and the call screen, running without the internet, the connection to your till or its replacement, then following the figures.",
      ], faq: [
        { q: "Does an ordering kiosk really shorten the queue?", a: "Yes when the queue forms at order taking, and only up to the kitchen's capacity. In our example, orders served go from 48 to 90 an hour; beyond that, it is the kitchen that has to speed up. The remaining wait is spent seated, with a number." },
        { q: "How many kiosks does my restaurant need?", a: "Divide the number of orders to take in the peak hour by what one kiosk takes: 3,600 divided by the seconds per order. At two minutes per customer, a kiosk takes 30 an hour. Stop when order taking exceeds what the kitchen turns out: one more kiosk would serve nothing more." },
        { q: "How does a customer pay at the kiosk with cash only?", a: "They confirm the order at the kiosk, get a number and pay at the pay point; the order goes to the kitchen at that moment. By card, where a terminal is installed, it goes as soon as it is confirmed. With table service, the bill is paid at the end." },
        { q: "QR code menu or ordering kiosk: which to choose?", a: "The kiosk for the counter and traffic at fixed hours; the QR menu for table service, where the customer is already seated. Many restaurants have both, on the same menu. The QR needs less hardware, but assumes the customer has a phone and a signal." },
        { q: "Does a QR code menu need an app?", a: "No. The code opens a web page in the phone's browser. It has to be light, readable in French and Arabic, and fast on the mobile network; a photographed PDF of the paper menu is not enough." },
        { q: "What happens when the internet goes down?", a: "The kiosks, the till, the kitchen screen and the call screen carry on over the restaurant's network. Only orders placed from outside wait for the connection to return; the reports update afterwards." },
        { q: "Do we have to change our till software?", a: "Not always. If the current till can receive orders from another piece of software, we connect to it. Otherwise it is replaced by a till that shares the same menu and the same order queue: two menus to keep up to date always end up diverging." },
        { q: "Will customers know how to use the kiosk?", a: "Most will, if the menu is short, the photos clear and the journey takes three or four screens. A staff member alongside for the first weeks makes the difference. And the till stays open for those who prefer it." },
        { q: "How do we avoid take-away orders nobody collects?", a: "A phone number confirmed by code, a maximum amount without advance payment, preparation started at the last useful moment before the slot, and an account suspended after several uncollected orders." },
        { q: "How long does it take to set up ordering kiosks?", a: "Eight weeks in our example: one to measure, two for the menu, three for the kitchen, two for a first channel on a single shift, then opening. The time depends on the number of outlets and on the existing till." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The kiosk does not cook faster: it moves the wait, from the standing queue to the table." },
      { after: 4, text: "A kiosk plugged into a kitchen run on paper tickets fills the pass faster, without serving anything more." },
    ],
    cta: { eyebrow: "Time ten orders at the till and ten dishes at the pass, on a busy lunchtime, and send us the two figures: we tell you where the bottleneck is and how many ordering points you need", title: "A queue out to the pavement, a kitchen that waits then overflows, numbers shouted at the counter, or a founder in France preparing an opening in Algeria: we build ordering, kitchen and call on a single menu", body: "Kiosk, QR menu, take-away ordering, kitchen screen, call screen, running without the internet, connection to the till. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.caisse, kind: '2027', name: 'Shop till: payment by QR code and by card, reconciliation' },
      { href: L.fidelite, kind: '2027', name: 'Loyalty programme: café, fast food, chain, points at the till' },
      { href: L.horsligne, kind: '2027', name: 'Offline application: local database, queue, synchronisation' },
      { href: L.sessions, kind: '2027', name: 'Till sessions: float, blind count, discrepancy' },
    ] },
  },
  ar: {
    kind: 'كشك الطلب · مطعم · الجزائر · 2027', title: "كشك الطلب للمطاعم في الجزائر (2027): الطابور يصل إلى الرصيف في منتصف النهار، كم كشكاً يلزم، قائمة QR، الدفع نقداً، شاشة المطبخ ورقم النداء",
    dek: "«في منتصف النهار، يصل الطابور إلى الرصيف ونصف الناس يغادرون. عاملة الصندوق تأخذ الطلبات بأسرع ما تستطيع، والمطبخ ينتظر، ثم يصله كل شيء دفعة واحدة. مورّد يعرض عليّ أكشاك طلب مثل التي في المطاعم السريعة في فرنسا. هل يحلّ ذلك المشكلة؟ كم يلزم منها؟ وعندنا الناس يدفعون نقداً: كيف نفعل؟» الكشك يزيل الطابور عند الصندوق وينقله إلى المطبخ. وقبل طلب أي كشك، نقيس رقمين. ثم نجهّز المطبخ أولاً، ونُبقي صندوقاً مفتوحاً.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['كشك الطلب', 'قائمة QR', 'الطلب للأخذ', 'شاشة المطبخ', 'الطابور في المطاعم', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الكشك يحلّ مشكلة الطابور حين يتشكّل عند أخذ الطلبات، لا حين يتشكّل في المطبخ. قيسوا رقمين: الثواني لكل طلبية عند الصندوق، وعدد الطلبيات التي يخرجها المطبخ في ساعة ذروة. صندوق بـ 75 ثانية يأخذ 48 طلبية في الساعة؛ وإذا كان المطبخ يستطيع إخراج 90، فكشكان يكفيان، والثالث لا يضيف شيئاً. والباقي يُحسم وراء الشاشة: شاشة مطبخ مكان التذاكر الورقية، رقم نداء، نقطة دفع للنقد، قائمة واحدة لكل القنوات، وصندوق يبقى مفتوحاً.",
      "هذا الدليل موجَّه إلى مسيّر مطعم سريع أو بيتزيريا أو مقهى أو سلسلة صغيرة، وإلى المؤسس المقيم في فرنسا الذي يريد أن يفتح في الجزائر مطعماً مثل التي يرتادها هناك. المفاهيم المذكورة آتية من مصادر علنية: نقطة الاختناق، الكشك التفاعلي، ورمز " + I('QR') + ". المطعم والمدد والطاقات في المثال مركَّبة: عوّضوها بقياساتكم. هذا الدليل لا يعطي أي سعر للعتاد ولا يتناول القواعد الجبائية للصندوق.",
    ],
    sections: [
      { heading: "في منتصف النهار، أين يتشكّل الطابور: عند الصندوق، ثم في المطبخ", body: [
        "الشكل يقارن، في ساعة الذروة نفسها، صندوقاً وحده بصندوق تساعده ثلاثة أكشاك.",
      ], visual: 'goulot', after: [
        "**الاختناق.** نقطة الاختناق هي، في سلسلة من المراحل، المرحلة التي تُنقص طاقتُها المحدودة طاقةَ السلسلة كلها. وفي مطعم سريع، حيث الخدمة على الطاولة في حدّها الأدنى، للسلسلة ثلاث مراحل: أخذ الطلبية، تحضيرها، وتسليمها. **الحساب.** الطلبيات في الساعة = " + I('3 600') + " ÷ الثواني لكل طلبية × عدد نقاط الطلب. عاملة صندوق تأخذ 75 ثانية لكل زبون، مع القبض، تأخذ 48 في الساعة. وإذا حضر مئة شخص بين منتصف النهار والواحدة، فإن 52 ينتظرون أو يغادرون، والمطبخ، القادر على إخراج 90، ينتظر التذاكر.",
        "**مع الأكشاك.** الزبون يأخذ وقتاً أطول من عاملة الصندوق: لنحسب دقيقتين. فالكشك يأخذ 30 طلبية في الساعة، وثلاثة أكشاك 90، ومع الصندوق 138. والاختناق يغيّر مكانه: المطبخ يخرج طلبياته التسعين، وعشرة زبائن ينتظرون، جالسين، برقم. **كم كشكاً.** في هذا المثال، كشكان يكفيان: " + I('48 + 60 = 108') + "، وهو فوق طاقة المطبخ وفوق الطلب. والثالث لا يخدم شيئاً إضافياً ما دام المطبخ عند 90. ومن هنا القاعدة: نقيس المطبخ قبل طلب الأكشاك. قيسوا زمن عشر طلبيات عند الصندوق وعشرة أطباق عند منضدة التسليم، في يوم إقبال.",
      ] },
      { heading: "خمس طرق للطلب، وما يلزم وراء كل واحدة", body: [
        "الشكل يقرّب خمس طرق للطلب من الخدمة التي تناسبها كل واحدة.",
      ], visual: 'canaux', after: [
        "**الكشك.** الكشك التفاعلي طرفية حاسوبية مزوَّدة بعتاد وبرمجيات متخصصة. وفي المطاعم السريعة، توسّع كثيراً نشر الطلب الذاتي، وبعض المطاعم لم تعد تستقبل طلبياتها إلا عبر الهاتف أو الكشك. وهو يناسب الإقبال في ساعات ثابتة وقائمة قصيرة. **قائمة " + I('QR') + ".** رمز " + I('QR') + " نوع من الرموز الشريطية المصفوفية ثنائية الأبعاد، اخترعه سنة 1994 " + I('Masahiro Hara') + " في شركة " + I('Denso Wave') + " باليابان. ملصقاً على الطاولة، يفتح القائمة على هاتف الزبون، دون تطبيق يُنصَّب؛ ويحمل رقم الطاولة، والحساب يُسدَّد في النهاية، كما من قبل.",
        "**للأخذ.** الزبون يطلب من هاتفه ويختار موعد استلام. والخطر هو الطلبية التي لا يستلمها أحد؛ ونقلّصه برقم مؤكَّد برمز، ومبلغ أقصى دون دفع مسبق، وتحضير يُطلق في آخر لحظة نافعة. **الصندوق يبقى.** بعض الزبائن مستعجلون، وآخرون يفضّلون الحديث إلى شخص: الصندوق يبقى مفتوحاً، على القائمة نفسها. **والتوصيل** يصل إلى شاشة المطبخ نفسها، مع ساعة انطلاقه. وتفاصيل القاعة والصندوق في [دليل صندوق المطعم](" + L.resto + ")؛ والزبون المعروف في إحدى هذه القنوات يستطيع جمع النقاط، كما في [دليل برنامج الوفاء](" + L.fidelite + ").",
      ] },
      { heading: "ما يوجد وراء الشاشة، في خمس طبقات", body: [
        "الطبقة المبرزة هي المطبخ.",
      ], visual: 'couches', after: [
        "**قائمة واحدة.** المنتَجات والخيارات والإضافات والأسعار والصور تُدخَل مرة واحدة، بالفرنسية والعربية؛ والكشك وقائمة " + I('QR') + " والهاتف والصندوق تقرأ الفهرس نفسه. والسعر المغيَّر صباحاً صحيح في كل مكان. **طابور واحد.** كل الطلبيات تأخذ رقماً في التسلسل نفسه، مهما كانت القناة؛ ولا أحد ينسخ طلبية من شاشة إلى تذكرة.",
        "**الدفع.** جزء كبير من الزبائن ما زالوا يدفعون نقداً: الزبون يؤكّد طلبيته على الكشك، يأخذ رقماً، يسدّد عند نقطة الدفع، والطلبية تذهب إلى المطبخ في تلك اللحظة. وحيث يوجد جهاز دفع، تُسدَّد البطاقة، " + I('CIB') + " أو " + I('Edahabia') + "، على الكشك أو عند المنضدة؛ والمطابقة موصوفة في [دليل الصندوق والدفع بالبطاقة](" + L.caisse + "). وكل مساء، يُعدّ النقد حسب الجلسة، كما في [دليل جلسات الصندوق](" + L.sessions + "). **القيادة.** المبيعات بالساعة وبالقناة، مدد التحضير، وما نفد: نرى في أي ساعة يتشكّل الطابور، وفي أي مرحلة.",
      ] },
      { heading: "طلبية واحدة، أربع شاشات، ورقم واحد", body: [
        "الشكل يتابع الطلبية رقم 47، من الشاشة التي تُدخَل فيها إلى الشاشة التي تُنادى فيها.",
      ], visual: 'parcours', after: [
        "**شاشة المطبخ.** تعوّض التذاكر الورقية: كل محطة، الشواية، المقلاة، المشروبات، ترى ما يخصّها، بترتيب الوصول، مع مؤقِّت؛ وحركة واحدة تعلّم الطبق جاهزاً. **شاشة النداء.** عمودان، «في التحضير» و«جاهزة»: الزبون يعرف أين وصل رقمه دون أن يسأل عند المنضدة، وينتظر جالساً. **التذكرة.** الرقم يُطبع، أو يُعرض على الهاتف؛ والطباعة من تطبيق موصوفة في [دليل طباعة التذاكر](" + L.imprimer + ").",
        "**النفاد.** حين ينفد منتَج، يسحبه المطبخ بحركة؛ فيختفي في اللحظة نفسها من الكشك وقائمة الهاتف والصندوق، ولا أحد يطلب ما لم يعد ممكناً خدمته. **دون إنترنت.** شاشات المطعم تتحادث على الشبكة المحلية: انقطاع الإنترنت لا يوقف أخذ الطلبات ولا المطبخ؛ والطلبيات القادمة من الخارج والتقارير تُستدرَك عند عودة الاتصال. والمبدأ هو مبدأ [دليل التطبيقات دون اتصال](" + L.horsligne + ").",
      ] },
      { heading: "الوضع في الخدمة، بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: القياس.",
      ], visual: 'etapes', after: [
        "**القياس، ثم التبسيط.** رقمان يكفيان للبدء: الثواني لكل طلبية، والأطباق الخارجة في الساعة. ثم القائمة: الشاشة لا تجيب عن الأسئلة كما تفعل عاملة الصندوق؛ تلزم أسماء واضحة، صور، وخيارات تُفهَم دون مساعدة، بلغتين. **المطبخ أولاً.** كشك موصول بمطبخ يعمل بالتذاكر الورقية يملأ منضدة التسليم أسرع، دون أن يخدم شيئاً إضافياً.",
        "**قناة واحدة في كل مرة.** الكشك أو قائمة " + I('QR') + "، في خدمة واحدة، مع عامل بجانبه في الأسابيع الأولى: هو من يعلّم الزبائن الحركة، ويقول لكم أين يتردّدون. **إبقاء الصندوق.** يبقى مفتوحاً؛ يخدم من لا يريدون الشاشة ويعوّض عند العطل. **الضبط.** العلامات التي تنصّب أكشاكاً تقول غالباً إن متوسط الطلبية يرتفع، لأن الشاشة تقترح الإضافة في كل مرة. ليس لدينا رقم موثَّق نعطيكم إياه: قيسوه عندكم، أسبوعاً بعد أسبوع.",
      ] },
      { heading: "ثمانية أسابيع، من القياس إلى الفتح، سنة 2027", body: [
        "ثمانية أسابيع في المثال، منها ثلاثة للمطبخ.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، القياس والتأطير.** **الأسبوعان 2 و3، القائمة والمسار**، يُجرَّبان مع زبائن حقيقيين. **الأسابيع من 3 إلى 5، المطبخ**: شاشة لكل محطة، شاشة نداء، ربط بالصندوق، والعمل دون إنترنت.",
        "**الأسبوعان 6 و7، أول قناة** في خدمة واحدة. **الأسبوع 8، الفتح** في كل الخدمات وأولى عمليات الضبط. إذا كان صندوقكم الحالي يستطيع استقبال طلبيات من برنامج آخر، نرتبط به؛ وإلا يُعوَّض بصندوق هو جزء من المجموعة نفسها. والمدد تتوقف على عدد نقاط البيع وحالة الصندوق الموجود.",
      ], list: [
        "**ما يستلمه المسيّر**: قياسا البداية، عدد نقاط الطلب المحسوب، القائمة الواحدة بلغتين، شاشتا المطبخ والنداء، وجدول المبيعات بالساعة وبالقناة.",
        "**ما لم يعد المطعم يفعله**: نسخ طلبية، الصياح برقم، بيع منتَج نفد، وترك المطبخ ينتظر التذاكر والطابور يطول.",
        "**ما يُقاس**: الثواني لكل طلبية، الطلبيات في الساعة في كل مرحلة، المدة بين الدفع و«جاهزة»، حصة كل قناة، والطلبيات للأخذ غير المستلَمة.",
        "**ما تفعله Symloop**: القياس، برنامج الطلب على الكشك والهاتف والصندوق، شاشة المطبخ وشاشة النداء، العمل دون إنترنت، الربط بصندوقكم أو تعويضه، ثم متابعة الأرقام.",
      ], faq: [
        { q: "هل يقلّص كشك الطلب الطابور فعلاً؟", a: "نعم حين يتشكّل الطابور عند أخذ الطلبات، وفقط إلى حدّ طاقة المطبخ. في مثالنا، ننتقل من 48 إلى 90 طلبية مخدومة في الساعة؛ وبعد ذلك، المطبخ هو الذي يجب تسريعه. والانتظار الباقي يكون جلوساً، برقم." },
        { q: "كم كشكاً يلزم لمطعمي؟", a: "اقسموا عدد الطلبيات التي يجب أخذها في ساعة الذروة على ما يأخذه كشك واحد: " + I('3 600') + " مقسومة على الثواني لكل طلبية. بدقيقتين لكل زبون، الكشك يأخذ 30 في الساعة. وتوقفوا حين يتجاوز أخذ الطلبات ما يخرجه المطبخ: كشك إضافي لن يخدم شيئاً إضافياً." },
        { q: "كيف يدفع الزبون على الكشك إذا لم يكن معه إلا النقد؟", a: "يؤكّد طلبيته على الكشك، يأخذ رقماً ويسدّد عند نقطة الدفع؛ والطلبية تذهب إلى المطبخ في تلك اللحظة. وبالبطاقة، حيث يوجد جهاز دفع، تذهب فور التأكيد. وفي الخدمة على الطاولة، يُسدَّد الحساب في النهاية." },
        { q: "قائمة QR أم كشك طلب: ماذا نختار؟", a: "الكشك للمنضدة والإقبال في ساعات ثابتة؛ وقائمة " + I('QR') + " للخدمة على الطاولة، حيث الزبون جالس أصلاً. ومطاعم كثيرة عندها الاثنان، على القائمة نفسها. و" + I('QR') + " يتطلب عتاداً أقل، لكنه يفترض أن مع الزبون هاتفاً وشبكة." },
        { q: "هل تحتاج قائمة QR إلى تطبيق؟", a: "لا. الرمز يفتح صفحة ويب في متصفح الهاتف. ويجب أن تكون خفيفة، مقروءة بالفرنسية والعربية، وسريعة على شبكة الهاتف؛ وصورة القائمة الورقية في ملف " + I('PDF') + " لا تكفي." },
        { q: "ماذا يحدث حين ينقطع الإنترنت؟", a: "الأكشاك والصندوق وشاشة المطبخ وشاشة النداء تواصل على شبكة المطعم. والطلبيات القادمة من الخارج وحدها تنتظر عودة الاتصال؛ والتقارير تُحدَّث بعد ذلك." },
        { q: "هل يجب تغيير برنامج الصندوق؟", a: "ليس دائماً. إذا كان الصندوق الحالي يستطيع استقبال طلبيات من برنامج آخر، نرتبط به. وإلا يُعوَّض بصندوق يتقاسم القائمة نفسها وطابور الطلبيات نفسه: قائمتان تُحدَّثان تنتهيان دائماً بالاختلاف." },
        { q: "هل سيعرف الزبائن استعمال الكشك؟", a: "أغلبهم، إذا كانت القائمة قصيرة، والصور واضحة، والمسار في ثلاث أو أربع شاشات. وعامل بجانبه في الأسابيع الأولى يصنع الفرق. والصندوق يبقى مفتوحاً لمن يفضّله." },
        { q: "كيف نتفادى الطلبيات للأخذ التي لا يستلمها أحد؟", a: "رقم هاتف مؤكَّد برمز، مبلغ أقصى دون دفع مسبق، تحضير يُطلق في آخر لحظة نافعة قبل الموعد، وحساب يُعلَّق بعد عدة طلبيات غير مستلَمة." },
        { q: "كم من الوقت لوضع أكشاك الطلب في الخدمة؟", a: "ثمانية أسابيع في مثالنا: أسبوع للقياس، أسبوعان للقائمة، ثلاثة للمطبخ، أسبوعان لأول قناة في خدمة واحدة، ثم الفتح. والأجل يتوقف على عدد نقاط البيع والصندوق الموجود." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الكشك لا يطبخ أسرع: ينقل الانتظار، من الطابور وقوفاً إلى الطاولة." },
      { after: 4, text: "كشك موصول بمطبخ يعمل بالتذاكر الورقية يملأ منضدة التسليم أسرع، دون أن يخدم شيئاً إضافياً." },
    ],
    cta: { eyebrow: "قيسوا زمن عشر طلبيات عند الصندوق وعشرة أطباق عند منضدة التسليم، في منتصف نهار مزدحم، وأرسلوا إلينا الرقمين: نقول لكم أين الاختناق وكم نقطة طلب تلزمكم", title: "طابور إلى الرصيف، مطبخ ينتظر ثم يفيض، أرقام يُصاح بها عند المنضدة، أو مؤسس في فرنسا يحضّر افتتاحاً في الجزائر: نبني الطلب والمطبخ والنداء على قائمة واحدة", body: "كشك، قائمة QR، طلب للأخذ، شاشة مطبخ، شاشة نداء، عمل دون إنترنت، وربط بالصندوق. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.caisse, kind: '2027', name: 'صندوق المتجر: الدفع برمز QR وبالبطاقة، والمطابقة' },
      { href: L.fidelite, kind: '2027', name: 'برنامج الوفاء: مقهى، مطعم سريع، سلسلة، ونقاط عند الصندوق' },
      { href: L.horsligne, kind: '2027', name: 'تطبيق دون اتصال: قاعدة محلية، طابور، ومزامنة' },
      { href: L.sessions, kind: '2027', name: 'جلسات الصندوق: رصيد البداية، العدّ الأعمى، والفارق' },
    ] },
  },
};

const KEYWORDS = "borne de commande restaurant algérie 2027, borne de commande fast food, menu qr code restaurant algérie, menu digital restaurant, commande à emporter application restaurant, écran cuisine restaurant, numéro d'appel commande, file d'attente restaurant, logiciel restaurant algérie, self ordering kiosk restaurant algeria 2027, qr code menu restaurant, kitchen display screen restaurant, كشك الطلب مطعم الجزائر 2027, قائمة QR مطعم, شاشة المطبخ";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
