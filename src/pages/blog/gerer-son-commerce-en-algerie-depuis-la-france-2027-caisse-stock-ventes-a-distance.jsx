import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance.mjs';

const SLUG = 'gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance';
const FIGURES = ['stack', 'types', 'ritual', 'rollout'];
const DATE = '2026-10-31';

const CONTENT = {
  fr: {
    kind: 'Problème · Diaspora', title: "Gérer son commerce en Algérie depuis la France en 2027 : voir la caisse, le stock et les ventes sans être sur place.",
    dek: "Vous vivez à Lyon, à Marseille ou à Paris. Le restaurant, la supérette ou l'agence de location est à Oran, à Sétif ou à Tizi Ouzou, tenu par un frère, un cousin ou un gérant. Chaque soir, une photo du cahier arrive sur WhatsApp, et vous ne savez toujours pas si la caisse est juste ni où part le stock. Ce qu'il faut enregistrer sur place, comment cela arrive sur votre téléphone, ce qu'il faut regarder selon le commerce, le rituel du soir, et huit semaines pour le mettre en place sans fermer.",
    publishedAt: 'Octobre 2026', readTime: '10 min de lecture', author: 'Symloop', about: ['Diaspora', 'Caisse', 'Gestion de stock', 'Tableau de bord', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Pour piloter un commerce en Algérie depuis la France en 2027, il ne faut ni plus d'appels ni plus de caméras : il faut que **quatre choses soient enregistrées là où elles se passent**, chaque vente à la caisse, chaque entrée de marchandise, chaque dépense avec sa photo, et le comptage des espèces à la fermeture, et qu'elles arrivent seules sur un serveur à votre nom, **même après une coupure d'électricité ou de réseau**. De là, un seul écran sur votre téléphone, chaque soir : cinq chiffres et les alertes qui comptent pour votre type de commerce. Sur un commerce qui tourne déjà, cela se met en place en **six à dix semaines, sans fermer un seul jour**, et cela ne tient que si celui qui tient le commerce y gagne aussi.",
      "Ce guide s'adresse aux propriétaires qui vivent en France et dont l'affaire est en Algérie, et prolonge [lancer une startup tech en Algérie depuis la France](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/). Il ne traite ni de droit des sociétés ni de procuration : il traite de ce que vous voyez chaque soir, et de ce qui rend ce que vous voyez fiable.",
    ],
    sections: [
      { heading: 'Pourquoi la photo du cahier ne suffit plus', body: [
        "La photo du cahier vous montre le total que quelqu'un a écrit, pas les ventes qui ont eu lieu. La caméra vous montre qui était là, pas ce qui a été vendu ni ce qui manque. L'appel du soir vous donne une impression, et use la relation : vous vérifiez, l'autre se sent soupçonné, et personne n'a de chiffre que les deux acceptent.",
        "**Le problème n'est pas la confiance, c'est l'absence de chiffres communs.** Une vente annulée, une remise accordée à un voisin, une livraison payée en espèces sans reçu, une caisse ouverte pour faire la monnaie : rien de cela n'est forcément malhonnête, et rien de cela n'apparaît sur une photo. À distance, l'écart s'accumule pendant des mois avant d'être visible, et quand il l'est, il est impossible à expliquer.",
        "Deux évolutions rendent 2027 favorable. Les paiements par carte au comptoir progressent vite : au premier semestre 2026, le GIE Monétique a compté environ 8 millions de transactions sur TPE, en hausse de 81 %, et chaque paiement électronique laisse une trace. Et le projet de loi de finances 2027 prévoit une réduction d'impôt pour les commerçants dont au moins la moitié des recettes sont électroniques : s'il est adopté en l'état, enregistrer chaque encaissement devient aussi un argument fiscal. Reste l'espèce, qui est justement ce que le cahier ne retient pas.",
      ] },
      { heading: 'Du comptoir à votre téléphone : quatre couches', body: [
        "Le système tient en quatre couches. Seule la dernière est en France.",
      ], visual: 'stack', after: [
        "**Sur place**, quatre gestes sont enregistrés : la vente à la caisse, sur une tablette ou un TPE-caisse, avec un ticket pour chaque vente ; l'entrée de marchandise, avec le bon du fournisseur photographié ; la dépense, avec son montant et la photo du reçu ; et le comptage des espèces à la fermeture. **La synchronisation** fonctionne hors-ligne d'abord : la caisse continue de tourner pendant une coupure, garde tout localement et l'envoie au retour du réseau, à l'heure exacte où cela s'est passé. Une caisse qui s'arrête quand le réseau tombe renvoie l'équipe au cahier dès la première coupure, et pour de bon.",
        "**Le serveur est à votre nom** : le compte, le domaine, la sauvegarde quotidienne et l'historique, pas au nom du gérant ni du prestataire, pour les raisons que nous avons décrites dans [mon application est bloquée chez un développeur qui a disparu](/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/). Le détail qui change tout est la traçabilité : chaque ligne dit qui l'a saisie et quand, et une vente encaissée ne se modifie pas, elle s'annule, et l'annulation reste visible. **Votre téléphone**, enfin, affiche un écran du soir et quelques alertes, en arabe ou en français, avec des droits séparés : vous voyez tout, le gérant voit son commerce, le comptable voit ses exports.",
      ] },
      { heading: 'Ce que vous regardez chaque soir, selon le commerce', body: [
        "Cinq chiffres suffisent, mais ce ne sont pas les mêmes pour un restaurant et pour une agence de location. Voici ce que nous mettons sur l'écran du soir, et l'alerte qui mérite une notification.",
      ], visual: 'types', after: [
        "**Au restaurant**, le nombre de couverts, le ticket moyen et l'écart de caisse disent presque tout ; l'alerte qui compte est le ticket annulé après encaissement, comme nous l'avons détaillé pour [la caisse d'un restaurant, de la salle à la cuisine](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/). **À la supérette**, c'est la marge par rayon et l'écart entre stock compté et stock théorique, le sujet de [la gestion de stock en Algérie](/blog/application-gestion-stock-algerie-2026/). **En boutique**, les ventes par vendeur et les remises au-delà du plafond. **En location** de voitures ou d'appartements, le taux d'occupation, les cautions, et toute sortie ou réservation sans paiement enregistré. **Chez un grossiste**, les créances et le crédit client au-delà de sa limite. **Avec plusieurs points de vente**, les mêmes chiffres côte à côte, et celui qui décroche des autres.",
        "Une alerte qui sonne dix fois par jour est une alerte qu'on n'ouvre plus. Nous en réglons trois à cinq, sur votre commerce, pas trente.",
      ] },
      { heading: 'Le rituel du soir, en cinq gestes', body: [
        "Le système ne remplace pas la fermeture : il la rend courte et vérifiable. Dix minutes côté commerce, deux minutes côté France.",
      ], visual: 'ritual', after: [
        "**La clôture** se fait d'un geste, et le total du jour est calculé, pas recopié. **Le comptage des espèces** est saisi par la personne de garde, et l'écart entre ce qui est dans le tiroir et ce que la caisse attend s'affiche seul. **Les dépenses du jour**, payées en espèces dans la caisse, ont chacune leur montant et la photo de leur reçu. **L'envoi** est automatique : rien à photographier ni à envoyer sur WhatsApp. **Votre écran du soir** arrive sur votre téléphone ; en hiver, l'Algérie et la France sont à la même heure, en été Paris a une heure d'avance, et la clôture de 21 h à Oran s'affiche à 22 h à Lyon.",
        "L'écart de caisse est calculé par le système, pas annoncé par quelqu'un. C'est ce qui protège celui qui ferme autant que celui qui regarde, et c'est l'argument qui fait accepter l'outil : les chiffres parlent à la place de la personne. Une fois par semaine, un inventaire tournant de dix références suffit ; l'inventaire complet reste annuel.",
      ] },
      { heading: 'Huit semaines pour le mettre en place, sans fermer', body: [
        "Sur un commerce qui tourne déjà, le calendrier honnête ressemble à ceci.",
      ], visual: 'rollout', after: [
        "**Semaine 1, le cadrage** et le choix du matériel : tablette, imprimante de tickets, onduleur si les coupures sont fréquentes, et le TPE que vous avez déjà. **Semaines 1 à 2, l'inventaire de départ** : un comptage complet, une seule fois, sans lequel aucun écart de stock ne veut rien dire. **Semaines 2 à 4, la caisse tourne en double avec le cahier** : l'équipe compare les deux chaque soir, constate qu'ils concordent, puis fait confiance ; c'est l'étape qui fait accepter l'outil, et celle qu'on ne saute pas. **Semaines 3 à 5, la réception de stock et les dépenses.** **Semaines 4 à 6, l'écran du soir** sur votre téléphone. **Semaines 6 à 8, les alertes sont réglées et le cahier est arrêté.**",
        "C'est le bas de la fourchette de six à dix semaines que nous donnons pour une web-app dans [combien de temps pour développer une application en 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/) ; chaque point de vente supplémentaire se déploie ensuite en une à deux semaines. Et si une caisse du marché couvre votre commerce, nous vous le disons : le sur-mesure se justifie quand le métier s'en écarte, plusieurs points de vente à regrouper, location, crédit client, livraisons, ou un seul écran pour plusieurs affaires.",
      ] },
      { heading: 'Ce qui fait échouer ce genre de projet', body: [], list: [
        "**Le présenter comme une surveillance.** Celui qui tient le commerce freine, et il a raison. Présentez-le comme ce qui le protège du soupçon : les chiffres parlent à sa place.",
        "**Pas d'inventaire de départ.** Sans stock compté le premier jour, chaque écart devient une dispute. Un comptage complet, une fois, au début.",
        "**Une caisse qui s'arrête quand le réseau tombe.** L'équipe revient au cahier à la première coupure et ne le quitte plus. Hors-ligne d'abord, synchronisation ensuite.",
        "**Des ventes modifiables.** Si un ticket encaissé peut être corrigé sans trace, les chiffres ne valent rien. On annule, on ne modifie pas.",
        "**Trente alertes.** Personne ne les lit au bout d'une semaine. Trois à cinq, réglées sur votre commerce.",
        "**Les comptes au nom du gérant ou du prestataire.** Le jour où l'un des deux part, l'historique part avec lui. Serveur, domaine et données à votre nom, dès la semaine 1.",
        "**Tout faire d'un coup.** Caisse, stock, dépenses, livraisons et comptabilité le même mois : l'équipe décroche. Une couche après l'autre, dans l'ordre du calendrier.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Peut-on suivre la caisse d'un commerce en Algérie depuis la France en temps réel ?", a: "Oui. Chaque vente enregistrée à la caisse arrive sur le serveur et sur votre téléphone en quelques secondes quand le réseau est là, et dès son retour après une coupure. En pratique, la plupart des propriétaires regardent un écran de clôture chaque soir plutôt que le temps réel." },
        { q: "Les caméras ne suffisent-elles pas ?", a: "Elles montrent qui était là, pas ce qui a été vendu ni ce qui manque. Une caméra aide à comprendre un écart que les chiffres ont signalé ; elle ne le signale pas." },
        { q: "Que se passe-t-il pendant une coupure d'électricité ou d'internet ?", a: "La caisse continue de fonctionner sur la tablette, avec un onduleur si les coupures sont fréquentes. Les ventes sont gardées localement et envoyées au retour du réseau, dans l'ordre et à l'heure où elles ont eu lieu." },
        { q: "Mon gérant va-t-il l'accepter ?", a: "S'il y gagne, oui : une fermeture en dix minutes au lieu d'un cahier, moins d'appels, et des chiffres qui le protègent du soupçon. Le présenter comme un outil de contrôle est la façon la plus sûre de le voir contourné." },
        { q: "Combien de temps faut-il pour le mettre en place ?", a: "Six à dix semaines sur un commerce qui tourne déjà, sans fermer : inventaire de départ, caisse en double avec le cahier, réception et dépenses, écran du soir, puis alertes. Chaque point de vente supplémentaire se déploie ensuite en une à deux semaines." },
        { q: "Faut-il un logiciel sur mesure ?", a: "Pas toujours. Si une caisse du marché couvre votre commerce, nous vous le disons. Le sur-mesure se justifie quand le métier s'en écarte : plusieurs points de vente à regrouper, location, crédit client, livraisons, ou un seul écran pour plusieurs affaires." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le problème n'est pas la confiance, c'est l'absence de chiffres que les deux côtés acceptent." },
      { after: 3, text: "L'écart de caisse est calculé par le système, pas annoncé par quelqu'un." },
    ],
    cta: { eyebrow: 'Décrivez votre commerce', title: "Le type de commerce, la ville, le nombre de points de vente, ce que vous utilisez aujourd'hui (cahier, caisse, Excel, WhatsApp) et ce que vous voulez voir chaque soir depuis la France. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des caisses, des outils de stock et des tableaux de bord pour les commerces algériens, hors-ligne d'abord, en arabe et en français, avec un écran pour le propriétaire où qu'il vive. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Diaspora', name: 'Lancer une startup tech en Algérie depuis la France' },
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'Digitaliser une PME en Algérie en 2027 : la feuille de route' },
      { href: '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/', kind: 'Problème', name: 'La caisse d’un restaurant, de la salle à la cuisine' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
    ] },
  },

  en: {
    kind: 'Problem · Diaspora', title: "Running a business in Algeria from France in 2027: seeing the till, the stock and the sales without being there.",
    dek: "You live in Lyon, Marseille or Paris. The restaurant, the convenience store or the rental agency is in Oran, Sétif or Tizi Ouzou, run by a brother, a cousin or a manager. Every evening a photo of the notebook arrives on WhatsApp, and you still do not know whether the till is right or where the stock goes. What to record on site, how it reaches your phone, what to look at for each type of business, the evening routine, and eight weeks to set it up without closing.",
    publishedAt: 'October 2026', readTime: '10 min read', author: 'Symloop', about: ['Diaspora', 'Point of sale', 'Stock management', 'Dashboard', 'Algeria 2027'],
    intro: [
      "**Short answer.** To run a business in Algeria from France in 2027 you need neither more calls nor more cameras: you need **four things recorded where they happen**, every sale at the till, every stock delivery, every expense with its photo, and the cash count at closing, and you need them to reach a server in your name on their own, **even after a power or network outage**. From there, one screen on your phone every evening: five numbers and the alerts that matter for your type of business. On a business that is already trading, this takes **six to ten weeks to set up, without closing a single day**, and it only holds if the person running the business gains from it too.",
      "This guide is for owners who live in France and whose business is in Algeria, and extends [launching a tech startup in Algeria from France](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/). It does not cover company law or powers of attorney: it covers what you see every evening, and what makes what you see reliable.",
    ],
    sections: [
      { heading: 'Why the photo of the notebook is no longer enough', body: [
        "The photo of the notebook shows you the total someone wrote, not the sales that happened. The camera shows you who was there, not what was sold or what is missing. The evening call gives you an impression and wears the relationship down: you check, the other person feels suspected, and nobody has a number both sides accept.",
        "**The problem is not trust, it is the lack of shared numbers.** A cancelled sale, a discount given to a neighbour, a delivery paid in cash without a receipt, a till opened to make change: none of this is necessarily dishonest, and none of it shows on a photo. From a distance, the gap builds up for months before it becomes visible, and when it does, it cannot be explained.",
        "Two changes make 2027 a good moment. Card payments at the counter are growing fast: in the first half of 2026, GIE Monétique counted about 8 million transactions on card terminals, up 81 %, and every electronic payment leaves a trace. And the 2027 finance bill provides a tax reduction for traders whose receipts are at least half electronic: if it is passed as drafted, recording every payment also becomes a tax argument. What remains is cash, which is exactly what the notebook does not keep.",
      ] },
      { heading: 'From the counter to your phone: four layers', body: [
        "The system fits in four layers. Only the last one is in France.",
      ], visual: 'stack', after: [
        "**On site**, four actions are recorded: the sale at the till, on a tablet or a card terminal with a till app, with a receipt for every sale; the stock delivery, with the supplier's note photographed; the expense, with its amount and a photo of the receipt; and the cash count at closing. **Sync** works offline first: the till keeps running during an outage, keeps everything locally and sends it when the network returns, with the exact time it happened. A till that stops when the network drops sends the team back to the notebook at the first outage, for good.",
        "**The server is in your name**: the account, the domain, the daily backup and the history, not in the manager's or the contractor's name, for the reasons we described in [my app is stuck with a developer who vanished](/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/). The detail that changes everything is traceability: every line says who entered it and when, and a paid sale is never edited, it is cancelled, and the cancellation stays visible. **Your phone**, finally, shows an evening screen and a few alerts, in Arabic or French, with separate rights: you see everything, the manager sees the business, the accountant sees the exports.",
      ] },
      { heading: 'What you look at every evening, by type of business', body: [
        "Five numbers are enough, but they are not the same for a restaurant and for a rental agency. Here is what we put on the evening screen, and the alert that deserves a notification.",
      ], visual: 'types', after: [
        "**In a restaurant**, covers, average ticket and the cash gap say almost everything; the alert that matters is a ticket cancelled after payment, as we detailed for [a restaurant till, from the floor to the kitchen](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/). **In a convenience store**, it is margin by aisle and the gap between counted and expected stock, the subject of [stock management in Algeria](/blog/application-gestion-stock-algerie-2026/). **In a shop**, sales by seller and discounts above the ceiling. **In car or apartment rental**, occupancy, deposits, and any car out or booking without a recorded payment. **In wholesale**, receivables and customer credit above its limit. **With several outlets**, the same numbers side by side, and the one drifting from the others.",
        "An alert that rings ten times a day is an alert nobody opens. We tune three to five, to your business, not thirty.",
      ] },
      { heading: 'The evening routine, in five steps', body: [
        "The system does not replace closing: it makes it short and verifiable. Ten minutes at the business, two minutes in France.",
      ], visual: 'ritual', after: [
        "**Closing** takes one tap, and the day's total is calculated, not copied. **The cash count** is entered by the person on duty, and the gap between what is in the drawer and what the till expects shows on its own. **The day's expenses**, paid in cash from the till, each have their amount and a photo of their receipt. **Sending** is automatic: nothing to photograph or send on WhatsApp. **Your evening screen** reaches your phone; in winter Algeria and France share the same time, in summer Paris is one hour ahead, and a 9 pm closing in Oran shows at 10 pm in Lyon.",
        "The cash gap is calculated by the system, not announced by someone. That protects the person closing as much as the person watching, and it is the argument that gets the tool accepted: the numbers speak instead of the person. Once a week, a rolling count of ten items is enough; the full stock count stays yearly.",
      ] },
      { heading: 'Eight weeks to set it up, without closing', body: [
        "On a business that is already trading, the honest calendar looks like this.",
      ], visual: 'rollout', after: [
        "**Week 1, scoping** and the choice of hardware: tablet, receipt printer, a UPS if outages are frequent, and the card terminal you already have. **Weeks 1 to 2, the opening stock count**: one full count, once, without which no stock gap means anything. **Weeks 2 to 4, the till runs in parallel with the notebook**: the team compares both every evening, sees that they match, then trusts it; this is the step that gets the tool accepted, and the one you do not skip. **Weeks 3 to 5, stock deliveries and expenses.** **Weeks 4 to 6, the evening screen** on your phone. **Weeks 6 to 8, alerts are tuned and the notebook is stopped.**",
        "This is the low end of the six-to-ten-week range we give for a web app in [how long it takes to build an app in 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/); each extra outlet then takes one to two weeks. And if an off-the-shelf till covers your business, we tell you so: custom work is justified when the trade departs from it, several outlets to bring together, rental, customer credit, deliveries, or one screen for several businesses.",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Presenting it as surveillance.** The person running the business pushes back, and rightly so. Present it as what protects them from suspicion: the numbers speak for them.",
        "**No opening stock count.** Without stock counted on day one, every gap becomes an argument. One full count, once, at the start.",
        "**A till that stops when the network drops.** The team goes back to the notebook at the first outage and never leaves it. Offline first, sync after.",
        "**Editable sales.** If a paid ticket can be corrected without a trace, the numbers are worthless. You cancel, you never edit.",
        "**Thirty alerts.** Nobody reads them after a week. Three to five, tuned to your business.",
        "**Accounts in the manager's or the contractor's name.** The day either leaves, the history leaves with them. Server, domain and data in your name, from week 1.",
        "**Doing everything at once.** Till, stock, expenses, deliveries and accounting in the same month: the team gives up. One layer after another, in calendar order.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: "Can I follow the till of a business in Algeria from France in real time?", a: "Yes. Every sale recorded at the till reaches the server and your phone within seconds when the network is up, and as soon as it returns after an outage. In practice, most owners look at a closing screen every evening rather than in real time." },
        { q: "Aren't cameras enough?", a: "They show who was there, not what was sold or what is missing. A camera helps understand a gap the numbers have flagged; it does not flag it." },
        { q: "What happens during a power or internet outage?", a: "The till keeps working on the tablet, with a UPS if outages are frequent. Sales are kept locally and sent when the network returns, in the order and at the time they happened." },
        { q: "Will my manager accept it?", a: "If they gain from it, yes: a ten-minute closing instead of a notebook, fewer calls, and numbers that protect them from suspicion. Presenting it as a control tool is the surest way to see it worked around." },
        { q: "How long does it take to set up?", a: "Six to ten weeks on a business already trading, without closing: opening count, till in parallel with the notebook, deliveries and expenses, evening screen, then alerts. Each extra outlet then takes one to two weeks." },
        { q: "Do I need custom software?", a: "Not always. If an off-the-shelf till covers your business, we tell you so. Custom work is justified when the trade departs from it: several outlets to bring together, rental, customer credit, deliveries, or one screen for several businesses." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The problem is not trust, it is the lack of numbers both sides accept." },
      { after: 3, text: "The cash gap is calculated by the system, not announced by someone." },
    ],
    cta: { eyebrow: 'Describe your business', title: "The type of business, the city, the number of outlets, what you use today (notebook, till, Excel, WhatsApp) and what you want to see every evening from France. We send back the scope, the calendar and the total price, in writing, before we start.", body: "Symloop builds tills, stock tools and dashboards for Algerian businesses, offline first, in Arabic and French, with a screen for the owner wherever they live. Senior engineers in Algiers and Sétif, written total price and calendar, server and data in your name." },
    related: { label: 'Read next', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Diaspora', name: 'Launching a tech startup in Algeria from France' },
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'Digitising an SME in Algeria in 2027: the roadmap' },
      { href: '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/', kind: 'Problem', name: 'A restaurant till, from the floor to the kitchen' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
    ] },
  },

  ar: {
    kind: 'مشكلة · الجالية', title: "إدارة تجارتك في الجزائر من فرنسا سنة 2027: رؤية الصندوق والمخزون والمبيعات دون أن تكون هناك.",
    dek: "تعيش في ليون أو مرسيليا أو باريس، والمطعم أو السوبيرات أو وكالة الكراء في وهران أو سطيف أو تيزي وزو، يديره أخ أو ابن عم أو مسيّر. كل مساء تصلك صورة الدفتر على واتساب، ولا تعرف بعد إن كان الصندوق صحيحاً ولا أين يذهب المخزون. ما يجب تسجيله في عين المكان، وكيف يصل إلى هاتفك، وما تراقبه حسب نوع التجارة، وطقس المساء، وثمانية أسابيع لوضعه دون إغلاق.",
    publishedAt: 'أكتوبر 2026', readTime: '10 دقائق قراءة', author: 'Symloop', about: ['الجالية', 'الصندوق', 'تسيير المخزون', 'لوحة القيادة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** لإدارة تجارة في الجزائر من فرنسا سنة 2027 لا تحتاج إلى مكالمات أكثر ولا إلى كاميرات أكثر، بل تحتاج إلى **تسجيل أربعة أشياء حيث تحدث**: كل عملية بيع في الصندوق، وكل دخول للسلع، وكل مصروف مع صورته، وعدّ النقود عند الإغلاق، وأن تصل وحدها إلى خادم باسمك **حتى بعد انقطاع الكهرباء أو الشبكة**. ومن هناك شاشة واحدة على هاتفك كل مساء: خمسة أرقام والتنبيهات المهمة لنوع تجارتك. في تجارة قائمة يستغرق ذلك **من ستة إلى عشرة أسابيع دون إغلاق يوم واحد**، ولا يصمد إلا إذا استفاد منه من يدير المحل أيضاً.",
      "هذا الدليل موجّه إلى المالكين الذين يعيشون في فرنسا وتجارتهم في الجزائر، وهو امتداد لـ [إطلاق شركة ناشئة تقنية في الجزائر من فرنسا](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/). لا يتناول قانون الشركات ولا الوكالات، بل ما تراه كل مساء وما يجعل ما تراه موثوقاً.",
    ],
    sections: [
      { heading: 'لماذا لم تعد صورة الدفتر كافية', body: [
        "صورة الدفتر تُريك المجموع الذي كتبه أحدهم، لا المبيعات التي حدثت. والكاميرا تُريك من كان حاضراً، لا ما بيع ولا ما نقص. ومكالمة المساء تعطيك انطباعاً وتُتعب العلاقة: أنت تتحقق، والآخر يشعر بأنه موضع شك، ولا أحد يملك رقماً يقبله الطرفان.",
        "**المشكلة ليست الثقة، بل غياب أرقام مشتركة.** بيع ملغى، تخفيض لجار، تسليم دُفع نقداً دون وصل، صندوق فُتح لصرف النقود: لا شيء من هذا بالضرورة غير نزيه، ولا شيء منه يظهر في صورة. ومن بعيد يتراكم الفارق أشهراً قبل أن يظهر، وحين يظهر يستحيل تفسيره.",
        "تطوّران يجعلان 2027 مناسبة. الدفع بالبطاقة عند الكاونتر ينمو بسرعة: في السداسي الأول من 2026 أحصى تجمع النقد الآلي (GIE Monétique) نحو 8 ملايين عملية على أجهزة الدفع، بارتفاع 81 %، وكل دفع إلكتروني يترك أثراً. ومشروع قانون المالية 2027 ينص على تخفيض ضريبي للتجار الذين تكون نصف مداخيلهم على الأقل إلكترونية: إذا اعتُمد كما هو، يصبح تسجيل كل تحصيل حجة جبائية أيضاً. يبقى النقد، وهو بالضبط ما لا يحفظه الدفتر.",
      ] },
      { heading: 'من الكاونتر إلى هاتفك: أربع طبقات', body: [
        "يقوم النظام على أربع طبقات، الأخيرة وحدها في فرنسا.",
      ], visual: 'stack', after: [
        "**في عين المكان** تُسجَّل أربعة أفعال: البيع في الصندوق، على لوحة أو جهاز دفع بتطبيق صندوق، مع وصل لكل عملية؛ ودخول السلع مع وصل المورّد مصوَّراً؛ والمصروف بمبلغه وصورة وصله؛ وعدّ النقود عند الإغلاق. **المزامنة** تعمل دون اتصال أولاً: يواصل الصندوق العمل أثناء الانقطاع، ويحفظ كل شيء محلياً ويرسله عند عودة الشبكة بالساعة الدقيقة التي حدث فيها. والصندوق الذي يتوقف حين تنقطع الشبكة يُعيد الفريق إلى الدفتر عند أول انقطاع، وإلى الأبد.",
        "**الخادم باسمك**: الحساب والنطاق والنسخ الاحتياطي اليومي والسجل، لا باسم المسيّر ولا باسم مقدّم الخدمة، للأسباب التي شرحناها في [تطبيقي عالق عند مطوّر اختفى](/blog/mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027/). والتفصيل الذي يغيّر كل شيء هو التتبّع: كل سطر يقول من أدخله ومتى، والبيع المحصَّل لا يُعدَّل بل يُلغى، ويبقى الإلغاء ظاهراً. وأخيراً **هاتفك** يعرض شاشة المساء وبعض التنبيهات، بالعربية أو الفرنسية، بصلاحيات منفصلة: أنت ترى كل شيء، والمسيّر يرى محله، والمحاسب يرى ملفات التصدير.",
      ] },
      { heading: 'ما تراقبه كل مساء حسب نوع التجارة', body: [
        "خمسة أرقام تكفي، لكنها ليست نفسها لمطعم ولوكالة كراء. هذا ما نضعه على شاشة المساء، والتنبيه الذي يستحق إشعاراً.",
      ], visual: 'types', after: [
        "**في المطعم** يقول عدد الزبائن ومتوسط الوصل وفارق الصندوق كل شيء تقريباً، والتنبيه المهم هو الوصل الملغى بعد التحصيل، كما فصّلنا في [صندوق المطعم من القاعة إلى المطبخ](/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/). **في السوبيرات** الهامش حسب الرف والفارق بين المخزون المعدود والنظري، وهو موضوع [تسيير المخزون في الجزائر](/blog/application-gestion-stock-algerie-2026/). **في المحل** المبيعات حسب البائع والتخفيضات فوق السقف. **في كراء** السيارات أو الشقق نسبة الإشغال والضمانات وكل خروج أو حجز دون دفع مسجَّل. **عند تاجر الجملة** الديون ودين الزبون فوق حدّه. **مع عدة نقاط بيع** الأرقام نفسها جنباً إلى جنب، والنقطة التي تبتعد عن البقية.",
        "التنبيه الذي يرنّ عشر مرات في اليوم لا يفتحه أحد. نضبط من ثلاثة إلى خمسة تنبيهات حسب تجارتك، لا ثلاثين.",
      ] },
      { heading: 'طقس المساء في خمس خطوات', body: [
        "النظام لا يعوّض الإغلاق بل يجعله قصيراً وقابلاً للتحقق: عشر دقائق في المحل، ودقيقتان في فرنسا.",
      ], visual: 'ritual', after: [
        "**الإغلاق** بلمسة واحدة، ومجموع اليوم يُحسب ولا يُنسخ. **عدّ النقود** يُدخله المناوب، فيظهر وحده الفارق بين ما في الدرج وما ينتظره الصندوق. **مصاريف اليوم** المدفوعة نقداً من الصندوق لكل منها مبلغه وصورة وصله. **الإرسال** تلقائي: لا شيء يُصوَّر ولا يُرسل على واتساب. **شاشة مسائك** تصل إلى هاتفك؛ في الشتاء الجزائر وفرنسا على التوقيت نفسه، وفي الصيف تتقدم باريس بساعة، فإغلاق التاسعة في وهران يظهر في العاشرة في ليون.",
        "فارق الصندوق يحسبه النظام ولا يعلنه أحد. هذا ما يحمي من يُغلق بقدر ما يحمي من يراقب، وهو الحجة التي تجعل الأداة مقبولة: الأرقام تتكلم بدل الشخص. ومرة في الأسبوع يكفي جرد دوري لعشرة أصناف، ويبقى الجرد الكامل سنوياً.",
      ] },
      { heading: 'ثمانية أسابيع لوضعه دون إغلاق', body: [
        "في تجارة قائمة، يبدو الجدول الصادق هكذا.",
      ], visual: 'rollout', after: [
        "**الأسبوع 1: التأطير** واختيار العتاد: لوحة، طابعة وصولات، مموّج إن كانت الانقطاعات متكررة، وجهاز الدفع الذي تملكه. **الأسبوعان 1 و2: جرد الانطلاق**، عدّ كامل مرة واحدة، دونه لا معنى لأي فارق في المخزون. **الأسابيع 2 إلى 4: الصندوق يعمل بالتوازي مع الدفتر**، يقارن الفريق بينهما كل مساء، فيرى أنهما متطابقان ثم يثق؛ إنها الخطوة التي تجعل الأداة مقبولة، ولا تُتجاوز. **الأسابيع 3 إلى 5: دخول السلع والمصاريف.** **الأسابيع 4 إلى 6: شاشة المساء** على هاتفك. **الأسابيع 6 إلى 8: ضبط التنبيهات وإيقاف الدفتر.**",
        "هذا هو الحد الأدنى من مجال ستة إلى عشرة أسابيع الذي نعطيه لتطبيق ويب في [كم من الوقت لتطوير تطبيق سنة 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/)، وكل نقطة بيع إضافية تُنشر بعد ذلك في أسبوع إلى أسبوعين. وإذا كان صندوق جاهز في السوق يغطي تجارتك، نقول لك ذلك: التطوير حسب الطلب يُبرَّر حين يبتعد النشاط عنه، كعدة نقاط بيع تُجمع، أو الكراء، أو دين الزبائن، أو التسليمات، أو شاشة واحدة لعدة أنشطة.",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**تقديمه كمراقبة.** من يدير المحل يعرقله، وله الحق. قدّمه كما يحميه من الشك: الأرقام تتكلم بدلاً منه.",
        "**غياب جرد الانطلاق.** دون مخزون معدود في اليوم الأول يصبح كل فارق خلافاً. عدّ كامل مرة واحدة في البداية.",
        "**صندوق يتوقف حين تنقطع الشبكة.** يعود الفريق إلى الدفتر عند أول انقطاع ولا يتركه. العمل دون اتصال أولاً، ثم المزامنة.",
        "**مبيعات قابلة للتعديل.** إذا أمكن تصحيح وصل محصَّل دون أثر فلا قيمة للأرقام. نُلغي ولا نعدّل.",
        "**ثلاثون تنبيهاً.** لا يقرؤها أحد بعد أسبوع. من ثلاثة إلى خمسة حسب تجارتك.",
        "**الحسابات باسم المسيّر أو مقدّم الخدمة.** يوم يغادر أحدهما يغادر السجل معه. الخادم والنطاق والبيانات باسمك من الأسبوع الأول.",
        "**فعل كل شيء دفعة واحدة.** الصندوق والمخزون والمصاريف والتسليمات والمحاسبة في الشهر نفسه: يتخلى الفريق. طبقة بعد طبقة، بترتيب الجدول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "هل يمكن متابعة صندوق تجارة في الجزائر من فرنسا في الوقت الحقيقي؟", a: "نعم. كل بيع يُسجَّل في الصندوق يصل إلى الخادم وإلى هاتفك في ثوانٍ حين تكون الشبكة متوفرة، وفور عودتها بعد الانقطاع. عملياً، يكتفي معظم المالكين بشاشة الإغلاق كل مساء بدل الوقت الحقيقي." },
        { q: "ألا تكفي الكاميرات؟", a: "تُريك من كان حاضراً، لا ما بيع ولا ما نقص. الكاميرا تساعد على فهم فارق أشارت إليه الأرقام، لكنها لا تشير إليه." },
        { q: "ماذا يحدث أثناء انقطاع الكهرباء أو الإنترنت؟", a: "يواصل الصندوق العمل على اللوحة، مع مموّج إن كانت الانقطاعات متكررة. تُحفظ المبيعات محلياً وتُرسل عند عودة الشبكة، بالترتيب والساعة اللذين حدثت فيهما." },
        { q: "هل سيقبله المسيّر؟", a: "إذا استفاد منه، نعم: إغلاق في عشر دقائق بدل الدفتر، مكالمات أقل، وأرقام تحميه من الشك. تقديمه كأداة رقابة هو أضمن طريقة لرؤيته يُتحايل عليه." },
        { q: "كم من الوقت يستغرق وضعه؟", a: "من ستة إلى عشرة أسابيع في تجارة قائمة دون إغلاق: جرد الانطلاق، الصندوق بالتوازي مع الدفتر، السلع والمصاريف، شاشة المساء، ثم التنبيهات. كل نقطة بيع إضافية تُنشر بعد ذلك في أسبوع إلى أسبوعين." },
        { q: "هل أحتاج إلى برنامج حسب الطلب؟", a: "ليس دائماً. إذا كان صندوق جاهز يغطي تجارتك نقول لك ذلك. التطوير حسب الطلب يُبرَّر حين يبتعد النشاط عنه: عدة نقاط بيع تُجمع، أو الكراء، أو دين الزبائن، أو التسليمات، أو شاشة واحدة لعدة أنشطة." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "المشكلة ليست الثقة، بل غياب أرقام يقبلها الطرفان." },
      { after: 3, text: "فارق الصندوق يحسبه النظام ولا يعلنه أحد." },
    ],
    cta: { eyebrow: 'صف لنا تجارتك', title: "نوع التجارة، المدينة، عدد نقاط البيع، ما تستعمله اليوم (دفتر، صندوق، Excel، واتساب) وما تريد رؤيته كل مساء من فرنسا. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop صناديق وأدوات مخزون ولوحات قيادة للتجارة الجزائرية، تعمل دون اتصال أولاً، بالعربية والفرنسية، مع شاشة للمالك أينما عاش. مهندسون كبار في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، الخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'الجالية', name: 'إطلاق شركة ناشئة تقنية في الجزائر من فرنسا' },
      { href: '/blog/digitaliser-pme-algerie-2027-feuille-de-route-12-mois-par-ou-commencer/', kind: '2027', name: 'رقمنة مؤسسة صغيرة في الجزائر سنة 2027' },
      { href: '/blog/caisse-pos-restaurant-commandes-salle-cuisine-algerie-2026/', kind: 'مشكلة', name: 'صندوق المطعم من القاعة إلى المطبخ' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
    ] },
  },
};

const KEYWORDS = "gérer commerce algérie depuis la france 2027, suivre caisse à distance algérie, gestion magasin algérie depuis l'étranger, logiciel caisse algérie hors-ligne, tableau de bord commerce algérie, diaspora commerce algérie, gérant magasin algérie contrôle caisse, manage business in algeria from france, remote till monitoring algeria, إدارة تجارة في الجزائر من فرنسا 2027, متابعة الصندوق عن بعد الجزائر";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
