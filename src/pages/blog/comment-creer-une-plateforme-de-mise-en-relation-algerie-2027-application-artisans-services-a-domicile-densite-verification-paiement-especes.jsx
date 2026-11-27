import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-une-plateforme-de-mise-en-relation-algerie-2027-application-artisans-services-a-domicile-densite-verification-paiement-especes.mjs';

const SLUG = 'comment-creer-une-plateforme-de-mise-en-relation-algerie-2027-application-artisans-services-a-domicile-densite-verification-paiement-especes';
const FIGURES = ['demande', 'densite', 'modeles', 'encaissement', 'calendrier', 'couches'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  adresse: '/blog/livrer-sans-adresse-algerie-2027-point-gps-repere-zones-de-livraison-geocodage-confirmation-whatsapp-ce-qu-on-construit/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  mobile: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/',
  annonces: '/blog/comment-creer-un-site-d-annonces-en-algerie-2027-depot-d-annonce-moderation-fausses-annonces-recherche-mise-en-avant-comptes-pro/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  marketplace: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/',
};

const CONTENT = {
  fr: {
    kind: 'Mise en relation · Algérie · 2027', title: "Comment créer une plateforme de mise en relation en Algérie (2027) : une application d'artisans et de services à domicile, des demandes sans réponse, des espèces qui ne passent pas par vous, des clients qui se passent de la plateforme ; densité, vérification, modèle de revenu, et ce qu'on met en place",
    dek: "« Je veux lancer une application pour trouver un plombier, un électricien ou une aide à domicile à Alger. Aujourd'hui les gens cherchent sur les réseaux sociaux, appellent trois numéros, personne ne vient ou le prix change sur place. Comment créer une plateforme de mise en relation ? Je ne sais pas par où commencer, comment vérifier les artisans, comment me payer si tout se règle en espèces, ni comment éviter que le client et l'artisan se passent de moi dès la deuxième fois. » Une plateforme de mise en relation ne manque jamais d'idées : elle manque de demandes qui trouvent preneur, et d'argent qui lui revient.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Plateforme de mise en relation', 'Application d’artisans et de services à domicile', 'Densité par zone', 'Vérification et avis', 'Modèle de revenu en espèces', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Une plateforme de mise en relation tient sur quatre décisions. **La densité** : une seule zone et trois métiers, jusqu'à ce que chaque demande trouve un artisan en quelques minutes. **La confiance** : des artisans vérifiés, des avis donnés après une intervention réelle. **Le revenu** : quand tout se paie en espèces, l'argent de la plateforme doit arriver avant l'intervention, pas après. **La raison de revenir** : reprise du travail, reçu, historique. Dans l'exemple de cette page, les douze mêmes artisans répondent en 4 minutes dans trois communes, et ne répondent pas dans toute une wilaya.",
      "Cette page s'adresse aux fondatrices et aux fondateurs, en Algérie ou dans la diaspora, qui veulent lancer une application d'artisans, de dépannage ou de services à domicile, et aux entreprises qui veulent organiser leur propre réseau d'intervenants. Les définitions viennent de sources publiques : marché biface, effet de réseau, place de marché en ligne, désintermédiation, génération de contacts, système de réputation. Les cartes, les distances, les montants et les taux sont un exemple construit, avec des chiffres fictifs. La page ne traite ni du statut juridique de la plateforme et des artisans, ni de la fiscalité, ni des assurances, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Une demande, en six temps", body: [
        "La figure suit une demande, du besoin à l'avis.",
      ], visual: 'demande', after: [
        "**Le marché.** Un marché biface est une plateforme intermédiaire qui réunit deux groupes d'utilisateurs distincts ; ici, des clients et des artisans. Les effets de réseau croisés apparaissent quand deux groupes dépendent l'un de l'autre : les clients viennent s'il y a des artisans, les artisans restent s'il y a des demandes. C'est le problème de l'œuf et de la poule, et il se règle zone par zone. **Le besoin.** Trois écrans : le métier, le problème avec des photos, le lieu et le créneau. Le lieu est un point sur la carte, pas une adresse à dicter, voir [livrer sans adresse](" + L.adresse + ").",
        "**L'envoi.** C'est le temps accentué : la demande part aux artisans du bon métier, proches et disponibles, par le canal qui arrive, voir [les notifications](" + L.notifications + "). **L'accord.** Pour un travail courant, le premier qui accepte ; pour un travail à estimer, deux ou trois devis. **L'intervention.** L'heure d'arrivée, le travail, le prix confirmé avant de commencer. **Le paiement.** En espèces à l'artisan, le plus souvent ; l'application garde un reçu. **L'avis.** Seulement après une intervention réelle, sinon il ne vaut rien.",
      ] },
      { heading: "La densité avant le nombre", body: [
        "La figure place les douze mêmes artisans sur deux cartes.",
      ], visual: 'densite', after: [
        "**Dans l'exemple.** Douze artisans du même métier, une demande, un rayon d'envoi de 3 km. Dans trois communes voisines, sept artisans sont dans le rayon, cinq sont disponibles : la demande est acceptée en 4 minutes. Répartis dans toute la wilaya, un seul est dans le rayon, et il est occupé : au bout de 15 minutes, personne n'a répondu. **Ce que cela dit.** Le nombre d'artisans inscrits ne mesure rien ; ce qui compte, c'est combien sont libres à dix minutes d'une demande.",
        "**Par où commencer.** Une zone que vous connaissez, trois métiers où l'urgence est réelle, plomberie, électricité, serrurerie par exemple, et cinquante artisans rencontrés un par un. **Ce que l'on mesure.** La part des demandes acceptées en moins de quinze minutes ; tant qu'elle n'est pas haute dans la première zone, on n'en ouvre pas une deuxième. **L'élargissement du rayon.** Il ne sauve rien : personne n'accepte un petit travail à vingt kilomètres. **Le côté à aider.** Pour attirer un groupe, une plateforme peut en subventionner un autre : au lancement, ce sont les artisans que l'on va chercher et que l'on équipe, parce que les clients, eux, cherchent déjà.",
      ] },
      { heading: "Cinq façons de se rémunérer", body: [
        "La figure donne cinq modèles, et ce qui peut mal tourner dans chacun.",
      ], visual: 'modeles', after: [
        "**La commission.** Un pourcentage du prix, reversé par l'artisan après l'intervention : naturel sur une place de marché où le paiement passe en ligne, fragile quand il se fait en espèces. **Le frais par demande.** Un montant fixe, prélevé sur un crédit acheté d'avance, quand l'artisan accepte : c'est une forme de génération de contacts payée à l'unité. **L'abonnement.** Un forfait mensuel : simple, mais invendable tant que les demandes sont rares.",
        "**Le prix fixe en ligne.** Le client paie par carte et la plateforme reverse : le plus propre, quand le client a une carte et que le prix se connaît d'avance, voir [le paiement en ligne](" + L.paiement + "). **La mise en avant.** Les artisans paient pour apparaître en premier : un revenu d'appoint, à manier avec prudence. **La désintermédiation.** C'est le fait de supprimer l'intermédiaire. Dès la deuxième fois, le client a le numéro de l'artisan : aucun modèle ne l'empêche. Ce qui le ramène, c'est ce que le téléphone ne donne pas : un artisan trouvé en quatre minutes quand le sien ne répond pas, un reçu, une reprise du travail si le problème revient.",
      ] },
      { heading: "Être payé avant, pas après", body: [
        "La figure suit l'argent de la plateforme, en jours autour de l'intervention.",
      ], visual: 'encaissement', after: [
        "**Dans l'exemple.** 1 000 interventions à 4 000 dinars, payées en espèces à l'artisan. Avec une commission de 10 %, 400 000 dinars sont dus à la plateforme : 220 000 arrivent à temps, 60 000 après relance, 120 000 jamais. Avec un frais fixe de 250 dinars prélevé à l'accord sur un crédit prépayé, 250 000 dinars sont encaissés, avant l'intervention. **Ce que cela dit.** Les deux montants se ressemblent ; l'un demande de relancer des centaines de personnes, l'autre non.",
        "**Pourquoi la commission fuit.** Elle dépend de ce que l'artisan déclare : le prix réel, et même le fait que l'intervention a eu lieu. **Ce que demande le crédit prépayé.** Des demandes sérieuses : une demande fausse ou annulée se rembourse automatiquement, sinon les artisans partent. Et un moyen simple d'acheter du crédit : carte, versement validé, ou point de recharge. **Les comptes.** Chaque achat, chaque prélèvement et chaque remboursement s'écrit dans un journal, voir [les rôles et le journal d'audit](" + L.roles + "). **Rien n'est définitif.** Le modèle se teste sur une zone, se mesure, et se change avant d'ouvrir la suivante.",
      ] },
      { heading: "Douze semaines, pour une zone et trois métiers", body: [
        "Douze semaines dans l'exemple, avant un lancement fermé.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : la zone, les trois métiers, des prix repères pour les travaux courants, le modèle de revenu à tester. **L'application artisan d'abord.** Inscription, pièces, zone d'intervention, disponibilité : c'est elle qui se montre aux cinquante premiers. La connexion se fait par numéro de téléphone et code, voir [la connexion par code](" + L.otp + "). **La vérification.** Identité, numéro, métier, et un premier travail observé : elle se fait à la main, au début.",
        "**L'application client.** Elle vient ensuite, et tient en trois écrans. **Le lancement fermé.** Une zone, des demandes réelles, des corrections chaque semaine. **Ce que la plateforme ne fait pas.** Elle ne rend personne compétent et ne remplace pas la rencontre : elle organise la demande, la réponse, la trace et la confiance. **Les durées** sont celles d'un exemple construit ; les décisions de départ sont décrites dans [créer une application mobile](" + L.mobile + ").",
      ] },
      { heading: "Ce qu'il y a dans une plateforme de mise en relation", body: [
        "La figure empile cinq couches ; la troisième fait la différence entre une annonce et une plateforme.",
      ], visual: 'couches', after: [
        "**Deux applications.** Celle du client, pour demander sans téléphoner ; celle de l'artisan, pour répondre en un geste depuis un chantier. **La répartition.** C'est la couche accentuée : métier, zone, disponibilité, rayon, délai. Un site d'annonces laisse le client appeler ; une plateforme envoie la demande et sait si elle a trouvé preneur, voir [le site d'annonces](" + L.annonces + ").",
        "**La confiance.** Un système de réputation permet aux membres de se noter les uns les autres : pièces vérifiées, avis après intervention, litiges tracés. **Le pilotage.** Demandes servies, délai d'accord, annulations, par zone et par métier, sur [un tableau de bord](" + L.dashboard + "). **Prêt à l'emploi ou sur mesure.** Des modèles d'applications de mise en relation existent et suffisent pour une démonstration. Le sur-mesure se justifie pour la répartition par zone et par disponibilité, le crédit prépayé et ses remboursements, la vérification, et tout ce qui fait qu'une demande trouve preneur ; pour une place de marché de produits, voir [créer une marketplace](" + L.marketplace + ").",
      ], list: [
        "**Ce que vous recevez** : l'application client et l'application artisan ; la répartition par métier, zone et disponibilité ; la vérification des artisans ; le crédit prépayé avec prélèvement à l'accord et remboursement ; les reçus et les avis ; le tableau de bord par zone.",
        "**Ce que la plateforme évite** : la demande sans réponse, le profil inscrit qui n'existe pas, l'avis écrit par un ami, la commission que personne ne reverse, la deuxième zone ouverte avant que la première fonctionne.",
        "**Ce qui est mesuré** : demandes acceptées en moins de quinze minutes ; délai d'arrivée ; annulations et absences ; demandes par client ; crédit acheté et consommé ; note moyenne ; par zone et par métier.",
        "**Ce que fait Symloop** : le cadrage du modèle, les deux applications, la répartition, la vérification, le crédit et le journal des mouvements, les notifications, le tableau de bord, en arabe et en français.",
      ], faq: [
        { q: "Comment créer une plateforme de mise en relation ?", a: "En commençant petit : une zone, trois métiers, cinquante artisans vérifiés. On construit d'abord l'application de l'artisan et la répartition des demandes, puis l'application du client, et l'on mesure la part des demandes acceptées en quelques minutes." },
        { q: "Par quoi commencer : les clients ou les artisans ?", a: "Par les artisans d'une seule zone. Les clients cherchent déjà ; ce qui manque, c'est quelqu'un qui réponde vite. Sans artisans libres à proximité, la première demande est aussi la dernière." },
        { q: "Comment vérifier les artisans ?", a: "À la main au début : identité, numéro de téléphone, métier, et un premier travail observé. Ensuite par les avis, donnés seulement après une intervention réelle." },
        { q: "Comment gagner de l'argent si tout se paie en espèces ?", a: "En étant payé avant l'intervention : un montant fixe prélevé sur un crédit acheté d'avance quand l'artisan accepte une demande. Une commission réclamée après coup dépend de ce que l'artisan déclare." },
        { q: "Comment éviter que le client et l'artisan se passent de la plateforme ?", a: "On ne l'empêche pas : on donne une raison de revenir. Un artisan trouvé en quelques minutes quand le sien ne répond pas, un reçu, une reprise du travail si le problème revient." },
        { q: "Faut-il deux applications ?", a: "Oui : celle du client et celle de l'artisan n'ont pas les mêmes écrans. Elles partagent le même serveur, et peuvent être développées avec une base de code commune." },
        { q: "Combien coûte une plateforme de mise en relation ?", a: "Cela dépend du périmètre. Le poste qui pèse le plus n'est pas l'écran du client, mais la répartition des demandes, le crédit et la vérification. Un cadrage d'une semaine donne un chiffrage." },
        { q: "Faut-il fixer les prix des interventions ?", a: "Pour les travaux courants, des prix repères rassurent le client et évitent le prix qui change sur place. Pour le reste, un devis après diagnostic." },
        { q: "Que faire d'une demande sans réponse ?", a: "La relancer vers d'autres artisans, prévenir le client au bout de quelques minutes, et l'enregistrer : c'est le chiffre qui dit si la zone est assez dense." },
        { q: "Quand ouvrir une deuxième zone ?", a: "Quand la première répond : la plupart des demandes acceptées en moins de quinze minutes, des clients qui reviennent, des artisans qui rachètent du crédit." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le nombre d'artisans inscrits ne mesure rien ; ce qui compte, c'est combien sont libres à dix minutes d'une demande." },
      { after: 3, text: "Ce qui se prélève à l'accord ne se relance pas." },
    ],
    cta: { eyebrow: "Dites-nous quelle zone, quels métiers, et comment vous pensez vous rémunérer : nous commençons par une semaine de cadrage", title: "Application d'artisans ou de services à domicile à lancer, demandes sans réponse, espèces qui ne passent pas par vous, clients qui se passent de la plateforme, ou projet que vous montez en Algérie depuis la France", body: "Symloop construit la plateforme qui correspond à votre projet : application client, application artisan, répartition, vérification, crédit prépayé, tableau de bord. Décrivez-nous votre zone, vos métiers et votre modèle." },
    related: { label: 'À lire aussi', items: [
      { href: L.annonces, kind: '2027', name: 'Créer un site d’annonces : modération, fausses annonces, comptes pro' },
      { href: L.marketplace, kind: '2027', name: 'Créer une marketplace : commission, paiement, modèle' },
      { href: L.paiement, kind: '2027', name: 'Intégrer le paiement en ligne : CIB, Edahabia, confirmation, rapprochement' },
      { href: L.mobile, kind: '2027', name: 'Créer une application mobile : sept décisions de départ' },
    ] },
  },
  en: {
    kind: 'Matching platform · Algeria · 2027', title: "How to create a matching platform in Algeria (2027): an app for tradespeople and home services, requests with no answer, cash that does not go through you, customers who bypass the platform; density, vetting, revenue model, and what we put in place",
    dek: "“I want to launch an app to find a plumber, an electrician or home help in Algiers. Today people search on social networks, call three numbers, nobody comes or the price changes on site. How do I create a matching platform? I do not know where to start, how to vet tradespeople, how to get paid if everything is settled in cash, or how to stop the customer and the tradesperson doing without me from the second time on.” A matching platform is never short of ideas: it is short of requests that find a taker, and of money that comes back to it.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Matching platform', 'App for tradespeople and home services', 'Density per zone', 'Vetting and reviews', 'Revenue model with cash', 'Algeria 2027'],
    intro: [
      "**Short answer.** A matching platform rests on four decisions. **Density**: a single zone and three trades, until every request finds a tradesperson within minutes. **Trust**: vetted tradespeople, reviews given after a real job. **Revenue**: when everything is paid in cash, the platform's money has to arrive before the job, not after. **A reason to come back**: the work redone if needed, a receipt, a history. In this page's example, the same twelve tradespeople answer in 4 minutes across three communes, and do not answer across a whole wilaya.",
      "This page is for founders, in Algeria or in the diaspora, who want to launch an app for tradespeople, repairs or home services, and for companies that want to organise their own network of field workers. The definitions come from public sources: two-sided market, network effect, online marketplace, disintermediation, lead generation, reputation system. The maps, the distances, the amounts and the rates are a constructed example, with fictitious figures. The page covers neither the legal status of the platform and of the tradespeople, nor tax, nor insurance, and quotes no hardware price.",
    ],
    sections: [
      { heading: "A request, in six steps", body: [
        "The figure follows a request, from the need to the review.",
      ], visual: 'demande', after: [
        "**The market.** A two-sided market is an intermediary platform that brings together two distinct user groups; here, customers and tradespeople. Cross-group network effects arise when two groups depend on each other: customers come if there are tradespeople, tradespeople stay if there are requests. It is the chicken-and-egg problem, and it is solved zone by zone. **The need.** Three screens: the trade, the problem with photos, the place and the time slot. The place is a point on the map, not an address to dictate, see [delivering without an address](" + L.adresse + ").",
        "**Dispatch.** That is the accented step: the request goes to tradespeople of the right trade who are near and free, through the channel that arrives, see [notifications](" + L.notifications + "). **Acceptance.** For a routine job, the first to accept; for a job that needs estimating, two or three quotes. **The job.** The arrival time, the work, the price confirmed before starting. **Payment.** In cash to the tradesperson, most of the time; the app keeps a receipt. **The review.** Only after a real job, otherwise it is worth nothing.",
      ] },
      { heading: "Density before numbers", body: [
        "The figure places the same twelve tradespeople on two maps.",
      ], visual: 'densite', after: [
        "**In the example.** Twelve tradespeople of the same trade, one request, a dispatch radius of 3 km. In three neighbouring communes, seven tradespeople are within the radius and five are free: the request is accepted in 4 minutes. Spread across the wilaya, only one is within the radius, and they are busy: after 15 minutes nobody has answered. **What that says.** The number of tradespeople signed up measures nothing; what counts is how many are free ten minutes from a request.",
        "**Where to start.** A zone you know, three trades where urgency is real, plumbing, electrics and locks for example, and fifty tradespeople met one by one. **What is measured.** The share of requests accepted in under fifteen minutes; as long as it is not high in the first zone, you do not open a second. **Widening the radius.** It saves nothing: nobody accepts a small job twenty kilometres away. **The side to help.** To attract one group, a platform may subsidise the other: at launch it is the tradespeople you go and find and equip, because customers are already looking.",
      ] },
      { heading: "Five ways of earning", body: [
        "The figure gives five models, and what can go wrong in each.",
      ], visual: 'modeles', after: [
        "**Commission.** A percentage of the price, paid over by the tradesperson after the job: natural on a marketplace where payment goes through online, fragile when it is made in cash. **A fee per request.** A fixed amount, taken from credit bought in advance, when the tradesperson accepts: it is a form of lead generation paid by the unit. **Subscription.** A monthly flat fee: simple, but unsellable while requests are rare.",
        "**A fixed price online.** The customer pays by card and the platform pays out: the cleanest, when the customer has a card and the price is known in advance, see [online payment](" + L.paiement + "). **Paid promotion.** Tradespeople pay to appear first: a side income, to be handled with care. **Disintermediation.** It is the removal of the intermediary. From the second time on, the customer has the tradesperson's number: no model prevents it. What brings them back is what the phone does not give: a tradesperson found in four minutes when their own does not answer, a receipt, the work redone if the problem returns.",
      ] },
      { heading: "Getting paid before, not after", body: [
        "The figure follows the platform's money, in days around the job.",
      ], visual: 'encaissement', after: [
        "**In the example.** 1,000 jobs at 4,000 dinars, paid in cash to the tradesperson. With a 10% commission, 400,000 dinars are due to the platform: 220,000 arrive on time, 60,000 after a reminder, 120,000 never. With a fixed fee of 250 dinars taken at acceptance from prepaid credit, 250,000 dinars are collected, before the job. **What that says.** The two amounts look alike; one means chasing hundreds of people, the other does not.",
        "**Why commission leaks.** It depends on what the tradesperson declares: the real price, and even the fact that the job took place. **What prepaid credit requires.** Serious requests: a fake or cancelled request is refunded automatically, otherwise tradespeople leave. And a simple way to buy credit: card, approved transfer, or a top-up point. **The accounts.** Every purchase, every deduction and every refund is written to a journal, see [roles and the audit journal](" + L.roles + "). **Nothing is final.** The model is tested on one zone, measured, and changed before the next is opened.",
      ] },
      { heading: "Twelve weeks, for one zone and three trades", body: [
        "Twelve weeks in the example, before a closed launch.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: the zone, the three trades, reference prices for routine jobs, the revenue model to test. **The tradesperson app first.** Sign-up, documents, working zone, availability: it is the one shown to the first fifty. Sign-in is by phone number and code, see [sign-in by code](" + L.otp + "). **Vetting.** Identity, number, trade, and a first job observed: it is done by hand, at the start.",
        "**The customer app.** It comes next, and fits in three screens. **The closed launch.** One zone, real requests, corrections every week. **What the platform does not do.** It makes nobody competent and does not replace meeting people: it organises the request, the answer, the record and the trust. **The durations** are those of a constructed example; the starting decisions are described in [creating a mobile application](" + L.mobile + ").",
      ] },
      { heading: "What is inside a matching platform", body: [
        "The figure stacks five layers; the third is the difference between a listing and a platform.",
      ], visual: 'couches', after: [
        "**Two apps.** The customer's, to ask without phoning; the tradesperson's, to answer in one tap from a job site. **Dispatch.** That is the accented layer: trade, zone, availability, radius, time limit. A classifieds site leaves the customer to call; a platform sends the request and knows whether it found a taker, see [the classifieds site](" + L.annonces + ").",
        "**Trust.** A reputation system lets the members of a community rate each other: documents checked, reviews after a job, disputes traced. **Steering.** Requests served, time to accept, cancellations, per zone and per trade, on [a dashboard](" + L.dashboard + "). **Ready-made or custom.** Templates for matching apps exist and are enough for a demonstration. Custom work is justified for dispatch by zone and availability, prepaid credit and its refunds, vetting, and everything that makes a request find a taker; for a marketplace of products, see [creating a marketplace](" + L.marketplace + ").",
      ], list: [
        "**What you receive**: the customer app and the tradesperson app; dispatch by trade, zone and availability; vetting of tradespeople; prepaid credit with deduction at acceptance and refund; receipts and reviews; the dashboard per zone.",
        "**What the platform avoids**: the request with no answer, the signed-up profile that does not exist, the review written by a friend, the commission nobody pays over, the second zone opened before the first one works.",
        "**What is measured**: requests accepted in under fifteen minutes; time to arrive; cancellations and no-shows; requests per customer; credit bought and used; average rating; per zone and per trade.",
        "**What Symloop does**: scoping the model, the two apps, dispatch, vetting, credit and the movement journal, notifications, the dashboard, in Arabic and in French.",
      ], faq: [
        { q: "How do you create a matching platform?", a: "By starting small: one zone, three trades, fifty vetted tradespeople. You build the tradesperson app and the dispatch of requests first, then the customer app, and you measure the share of requests accepted within minutes." },
        { q: "What comes first: customers or tradespeople?", a: "The tradespeople of a single zone. Customers are already looking; what is missing is someone who answers fast. With no free tradespeople nearby, the first request is also the last." },
        { q: "How do you vet tradespeople?", a: "By hand at first: identity, phone number, trade, and a first job observed. Then through reviews, given only after a real job." },
        { q: "How do you earn money if everything is paid in cash?", a: "By being paid before the job: a fixed amount taken from credit bought in advance when the tradesperson accepts a request. A commission claimed afterwards depends on what the tradesperson declares." },
        { q: "How do you stop customer and tradesperson bypassing the platform?", a: "You do not stop it: you give a reason to come back. A tradesperson found within minutes when their own does not answer, a receipt, the work redone if the problem returns." },
        { q: "Are two apps needed?", a: "Yes: the customer's and the tradesperson's do not have the same screens. They share the same server, and can be developed from a common code base." },
        { q: "How much does a matching platform cost?", a: "It depends on the scope. The heaviest item is not the customer's screen but the dispatch of requests, the credit and the vetting. A week of scoping gives a costing." },
        { q: "Should job prices be fixed?", a: "For routine jobs, reference prices reassure the customer and avoid the price that changes on site. For the rest, a quote after diagnosis." },
        { q: "What do you do with a request that gets no answer?", a: "Re-send it to other tradespeople, warn the customer after a few minutes, and record it: that is the figure that says whether the zone is dense enough." },
        { q: "When do you open a second zone?", a: "When the first one answers: most requests accepted in under fifteen minutes, customers who come back, tradespeople who buy credit again." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The number of tradespeople signed up measures nothing; what counts is how many are free ten minutes from a request." },
      { after: 3, text: "What is taken at acceptance never needs chasing." },
    ],
    cta: { eyebrow: "Tell us which zone, which trades, and how you plan to earn: we start with a week of scoping", title: "An app for tradespeople or home services to launch, requests with no answer, cash that does not go through you, customers who bypass the platform, or a project you are setting up in Algeria from France", body: "Symloop builds the platform that fits your project: customer app, tradesperson app, dispatch, vetting, prepaid credit, dashboard. Describe your zone to us, your trades and your model." },
    related: { label: 'Also read', items: [
      { href: L.annonces, kind: '2027', name: 'Creating a classifieds site: moderation, fake listings, pro accounts' },
      { href: L.marketplace, kind: '2027', name: 'Creating a marketplace: commission, payment, model' },
      { href: L.paiement, kind: '2027', name: 'Integrating online payment: CIB, Edahabia, confirmation, reconciliation' },
      { href: L.mobile, kind: '2027', name: 'Creating a mobile application: seven starting decisions' },
    ] },
  },
  ar: {
    kind: 'منصة ربط · الجزائر · 2027', title: "كيف تُنشأ منصة ربط في الجزائر (2027): تطبيق للحرفيين والخدمات المنزلية، طلبات دون جواب، نقد لا يمر عبركم، وزبائن يستغنون عن المنصة؛ الكثافة، التحقق، نموذج الدخل، وما نضعه",
    dek: "«أريد إطلاق تطبيق للعثور على سبّاك، كهربائي، أو مساعدة منزلية في الجزائر العاصمة. اليوم يبحث الناس في شبكات التواصل، يتصلون بثلاثة أرقام، ولا يأتي أحد أو يتغيّر السعر في المكان. كيف أنشئ منصة ربط؟ لا أعرف من أين أبدأ، كيف أتحقق من الحرفيين، كيف أُدفَع إذا كان كل شيء يُسوَّى نقداً، ولا كيف أتفادى أن يستغني الزبون والحرفي عني منذ المرة الثانية.» منصة الربط لا تنقصها الأفكار أبداً: تنقصها طلبات تجد من يقبلها، ومال يعود إليها.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['منصة ربط', 'تطبيق الحرفيين والخدمات المنزلية', 'الكثافة حسب المنطقة', 'التحقق والتقييمات', 'نموذج الدخل مع النقد', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** منصة الربط تقوم على أربعة قرارات. **الكثافة**: منطقة واحدة وثلاث مهن، إلى أن يجد كل طلب حرفياً في بضع دقائق. **الثقة**: حرفيون متحقَّق منهم، وتقييمات تُعطى بعد تدخل حقيقي. **الدخل**: حين يُدفَع كل شيء نقداً، مال المنصة يجب أن يصل قبل التدخل، لا بعده. و**سبب العودة**: إعادة العمل عند الحاجة، وصل، وسجل. في مثال هذه الصفحة، الحرفيون الاثنا عشر أنفسهم يجيبون في 4 دقائق في ثلاث بلديات، ولا يجيبون في ولاية كاملة.",
      "هذه الصفحة موجّهة إلى المؤسِّسات والمؤسِّسين، في الجزائر أو في الجالية، الذين يريدون إطلاق تطبيق للحرفيين، التصليح، أو الخدمات المنزلية، وإلى المؤسسات التي تريد تنظيم شبكتها الخاصة من المتدخلين. التعريفات من مصادر عمومية: السوق ذات الجانبين، أثر الشبكة، السوق الإلكترونية، إلغاء الوساطة، توليد جهات الاتصال، ونظام السمعة. والخرائط والمسافات والمبالغ والنسب مثال مركَّب، بأرقام خيالية. والصفحة لا تتناول الوضع القانوني للمنصة وللحرفيين، ولا الجباية، ولا التأمين، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "طلب، في ست مراحل", body: [
        "الشكل يتابع طلباً، من الحاجة إلى التقييم.",
      ], visual: 'demande', after: [
        "**السوق.** السوق ذات الجانبين منصة وسيطة تجمع فئتين مختلفتين من المستعملين؛ هنا، زبائن وحرفيون. وآثار الشبكة المتقاطعة تظهر حين تتوقف فئتان إحداهما على الأخرى: الزبائن يأتون إذا وُجد حرفيون، والحرفيون يبقون إذا وُجدت طلبات. هي مشكلة البيضة والدجاجة، وتُحَل منطقة بمنطقة. **الحاجة.** ثلاث شاشات: المهنة، المشكل بالصور، والمكان والفترة. والمكان نقطة على الخريطة، لا عنوان يُملى، انظر [التوصيل دون عنوان](" + L.adresse + ").",
        "**الإرسال.** هو المرحلة المبرزة: الطلب يذهب إلى حرفيي المهنة المناسبة، القريبين والمتاحين، بالقناة التي تصل، انظر [الإشعارات](" + L.notifications + "). **القبول.** لعمل عادي، أول من يقبل؛ ولعمل يحتاج تقديراً، عرضان أو ثلاثة. **التدخل.** ساعة الوصول، العمل، والسعر مؤكَّداً قبل البدء. **الدفع.** نقداً للحرفي، في الغالب؛ والتطبيق يحفظ وصلاً. **التقييم.** فقط بعد تدخل حقيقي، وإلا فلا قيمة له.",
      ] },
      { heading: "الكثافة قبل العدد", body: [
        "الشكل يضع الحرفيين الاثني عشر أنفسهم على خريطتين.",
      ], visual: 'densite', after: [
        "**في المثال.** اثنا عشر حرفياً من المهنة نفسها، طلب واحد، ومحيط إرسال من 3 كلم. في ثلاث بلديات متجاورة، سبعة حرفيين داخل المحيط، وخمسة متاحون: الطلب يُقبَل في 4 دقائق. وموزَّعين على كامل الولاية، واحد فقط داخل المحيط، وهو مشغول: بعد 15 دقيقة، لم يجب أحد. **ما يقوله ذلك.** عدد الحرفيين المسجَّلين لا يقيس شيئاً؛ والمهم هو كم منهم متاح على عشر دقائق من الطلب.",
        "**من أين يُبدأ.** منطقة تعرفونها، ثلاث مهن فيها استعجال حقيقي، السباكة والكهرباء والأقفال مثلاً، وخمسون حرفياً يُلتقى بهم واحداً واحداً. **ما يُقاس.** حصة الطلبات المقبولة في أقل من خمس عشرة دقيقة؛ وما دامت غير مرتفعة في المنطقة الأولى، لا تُفتح ثانية. **توسيع المحيط.** لا ينقذ شيئاً: لا أحد يقبل عملاً صغيراً على عشرين كيلومتراً. **الجانب الذي يُساعَد.** لجلب فئة، قد تدعم المنصة الفئة الأخرى: عند الانطلاق، الحرفيون هم من يُبحث عنهم ويُجهَّزون، لأن الزبائن يبحثون من قبل.",
      ] },
      { heading: "خمس طرق للكسب", body: [
        "الشكل يعطي خمسة نماذج، وما قد يسوء في كل واحد.",
      ], visual: 'modeles', after: [
        "**العمولة.** نسبة من السعر، يدفعها الحرفي بعد التدخل: طبيعية في سوق يمر فيها الدفع عبر الإنترنت، وهشّة حين يتم نقداً. **الرسم لكل طلب.** مبلغ ثابت، يُقتطَع من رصيد مُشترى مسبقاً، حين يقبل الحرفي: هو شكل من توليد جهات الاتصال يُدفَع بالوحدة. **الاشتراك.** مبلغ جزافي شهري: بسيط، لكنه لا يُباع ما دامت الطلبات قليلة.",
        "**السعر الثابت عبر الإنترنت.** الزبون يدفع بالبطاقة والمنصة تحوّل: الأنظف، حين يملك الزبون بطاقة ويُعرف السعر مسبقاً، انظر [الدفع عبر الإنترنت](" + L.paiement + "). **الإبراز المدفوع.** الحرفيون يدفعون للظهور أولاً: دخل إضافي، يُستعمل بحذر. **إلغاء الوساطة.** هو حذف الوسيط. منذ المرة الثانية، يملك الزبون رقم الحرفي: لا نموذج يمنع ذلك. وما يعيده هو ما لا يعطيه الهاتف: حرفي يوجد في أربع دقائق حين لا يجيب حرفيّه، وصل، وإعادة العمل إذا عاد المشكل.",
      ] },
      { heading: "الدفع قبل، لا بعد", body: [
        "الشكل يتابع مال المنصة، بالأيام حول التدخل.",
      ], visual: 'encaissement', after: [
        "**في المثال.** " + I('1 000') + " تدخل بـ" + I('4 000') + " دينار، تُدفَع نقداً للحرفي. بعمولة 10 بالمئة، " + I('400 000') + " دينار مستحقة للمنصة: " + I('220 000') + " تصل في وقتها، " + I('60 000') + " بعد تذكير، و" + I('120 000') + " لا تصل أبداً. وبرسم ثابت من 250 ديناراً يُقتطَع عند القبول من رصيد مسبق، " + I('250 000') + " دينار تُحصَّل، قبل التدخل. **ما يقوله ذلك.** المبلغان متقاربان؛ أحدهما يتطلب تذكير مئات الأشخاص، والآخر لا.",
        "**لماذا تتسرّب العمولة.** تتوقف على ما يصرّح به الحرفي: السعر الحقيقي، وحتى وقوع التدخل أصلاً. **ما يتطلبه الرصيد المسبق.** طلبات جادة: الطلب الوهمي أو الملغى يُرَدّ تلقائياً، وإلا غادر الحرفيون. ووسيلة بسيطة لشراء الرصيد: بطاقة، تحويل مصادَق عليه، أو نقطة تعبئة. **الحسابات.** كل شراء، كل اقتطاع، وكل رد يُكتب في سجل، انظر [الأدوار وسجل التدقيق](" + L.roles + "). **لا شيء نهائي.** النموذج يُجرَّب على منطقة، يُقاس، ويُغيَّر قبل فتح التالية.",
      ] },
      { heading: "اثنا عشر أسبوعاً، لمنطقة واحدة وثلاث مهن", body: [
        "اثنا عشر أسبوعاً في المثال، قبل انطلاق مغلق.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: المنطقة، المهن الثلاث، أسعار مرجعية للأعمال العادية، ونموذج الدخل الذي يُجرَّب. **تطبيق الحرفي أولاً.** التسجيل، الوثائق، منطقة التدخل، والتوفر: هو الذي يُعرَض على الخمسين الأوائل. والدخول برقم الهاتف والرمز، انظر [الدخول بالرمز](" + L.otp + "). **التحقق.** الهوية، الرقم، المهنة، وعمل أول يُلاحَظ: يتم باليد، في البداية.",
        "**تطبيق الزبون.** يأتي بعد ذلك، ويسع في ثلاث شاشات. **الانطلاق المغلق.** منطقة واحدة، طلبات حقيقية، وتصحيحات كل أسبوع. **ما لا تفعله المنصة.** لا تجعل أحداً كفؤاً ولا تعوّض اللقاء: تنظّم الطلب، الجواب، الأثر، والثقة. **المدد** هي مدد مثال مركَّب؛ وقرارات البداية موصوفة في [إنشاء تطبيق هاتف](" + L.mobile + ").",
      ] },
      { heading: "ما يوجد في منصة ربط", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة تصنع الفرق بين إعلان ومنصة.",
      ], visual: 'couches', after: [
        "**تطبيقان.** تطبيق الزبون، للطلب دون اتصال هاتفي؛ وتطبيق الحرفي، للرد بحركة واحدة من ورشة العمل. **التوزيع.** هو الطبقة المبرزة: المهنة، المنطقة، التوفر، المحيط، والأجل. موقع الإعلانات يترك الزبون يتصل؛ والمنصة ترسل الطلب وتعرف هل وجد من يقبله، انظر [موقع الإعلانات](" + L.annonces + ").",
        "**الثقة.** نظام السمعة يسمح لأعضاء مجموعة بتقييم بعضهم: وثائق متحقَّق منها، تقييمات بعد التدخل، ونزاعات موثَّقة. **القيادة.** الطلبات الملبّاة، أجل القبول، والإلغاءات، لكل منطقة ولكل مهنة، على [لوحة قيادة](" + L.dashboard + "). **جاهز أو على المقاس.** توجد قوالب لتطبيقات الربط، وتكفي لعرض تجريبي. والعمل على المقاس يُبرَّر للتوزيع حسب المنطقة والتوفر، للرصيد المسبق ورده، للتحقق، ولكل ما يجعل الطلب يجد من يقبله؛ ولسوق منتجات، انظر [إنشاء سوق إلكترونية](" + L.marketplace + ").",
      ], list: [
        "**ما تتلقونه**: تطبيق الزبون وتطبيق الحرفي؛ التوزيع حسب المهنة، المنطقة، والتوفر؛ التحقق من الحرفيين؛ الرصيد المسبق باقتطاع عند القبول ورد؛ الوصولات والتقييمات؛ ولوحة القيادة لكل منطقة.",
        "**ما تتفاداه المنصة**: الطلب دون جواب، الحساب المسجَّل الذي لا وجود له، التقييم الذي يكتبه صديق، العمولة التي لا يدفعها أحد، والمنطقة الثانية التي تُفتح قبل أن تشتغل الأولى.",
        "**ما يُقاس**: الطلبات المقبولة في أقل من خمس عشرة دقيقة؛ أجل الوصول؛ الإلغاءات والغيابات؛ الطلبات لكل زبون؛ الرصيد المُشترى والمستهلَك؛ متوسط التقييم؛ لكل منطقة ولكل مهنة.",
        "**ما تفعله Symloop**: تأطير النموذج، التطبيقان، التوزيع، التحقق، الرصيد وسجل الحركات، الإشعارات، ولوحة القيادة، بالعربية والفرنسية.",
      ], faq: [
        { q: "كيف تُنشأ منصة ربط؟", a: "بالبدء صغيراً: منطقة واحدة، ثلاث مهن، وخمسون حرفياً متحقَّقاً منهم. يُبنى أولاً تطبيق الحرفي وتوزيع الطلبات، ثم تطبيق الزبون، وتُقاس حصة الطلبات المقبولة في بضع دقائق." },
        { q: "بماذا يُبدأ: الزبائن أم الحرفيون؟", a: "بحرفيي منطقة واحدة. الزبائن يبحثون من قبل؛ وما ينقص هو من يجيب بسرعة. ودون حرفيين متاحين في الجوار، الطلب الأول هو الأخير أيضاً." },
        { q: "كيف يُتحقَّق من الحرفيين؟", a: "باليد في البداية: الهوية، رقم الهاتف، المهنة، وعمل أول يُلاحَظ. ثم بالتقييمات، التي تُعطى فقط بعد تدخل حقيقي." },
        { q: "كيف يُكسَب المال إذا كان كل شيء يُدفَع نقداً؟", a: "بالدفع قبل التدخل: مبلغ ثابت يُقتطَع من رصيد مُشترى مسبقاً حين يقبل الحرفي طلباً. والعمولة التي تُطلَب بعد ذلك تتوقف على ما يصرّح به الحرفي." },
        { q: "كيف يُتفادى أن يستغني الزبون والحرفي عن المنصة؟", a: "لا يُمنَع ذلك: يُعطى سبب للعودة. حرفي يوجد في بضع دقائق حين لا يجيب الآخر، وصل، وإعادة العمل إذا عاد المشكل." },
        { q: "هل يلزم تطبيقان؟", a: "نعم: تطبيق الزبون وتطبيق الحرفي ليست لهما الشاشات نفسها. يتقاسمان الخادم نفسه، ويمكن تطويرهما بقاعدة برمجية مشتركة." },
        { q: "كم تكلّف منصة ربط؟", a: "ذلك يتوقف على النطاق. والبند الأثقل ليس شاشة الزبون، بل توزيع الطلبات، الرصيد، والتحقق. وأسبوع تأطير يعطي تقديراً." },
        { q: "هل يجب تحديد أسعار التدخلات؟", a: "للأعمال العادية، أسعار مرجعية تطمئن الزبون وتجنّب السعر الذي يتغيّر في المكان. وللباقي، عرض سعر بعد التشخيص." },
        { q: "ما العمل مع طلب دون جواب؟", a: "يُعاد إرساله إلى حرفيين آخرين، يُنبَّه الزبون بعد بضع دقائق، ويُسجَّل: هو الرقم الذي يقول هل المنطقة كثيفة كفاية." },
        { q: "متى تُفتح منطقة ثانية؟", a: "حين تجيب الأولى: أغلب الطلبات مقبولة في أقل من خمس عشرة دقيقة، زبائن يعودون، وحرفيون يشترون الرصيد من جديد." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "عدد الحرفيين المسجَّلين لا يقيس شيئاً؛ والمهم هو كم منهم متاح على عشر دقائق من الطلب." },
      { after: 3, text: "ما يُقتطَع عند القبول لا يحتاج تذكيراً." },
    ],
    cta: { eyebrow: "قولوا لنا أي منطقة، أي مهن، وكيف تفكرون في الكسب: نبدأ بأسبوع تأطير", title: "تطبيق حرفيين أو خدمات منزلية تريدون إطلاقه، طلبات دون جواب، نقد لا يمر عبركم، زبائن يستغنون عن المنصة، أو مشروع تقيمونه في الجزائر من فرنسا", body: "Symloop تبني المنصة التي تناسب مشروعكم: تطبيق الزبون، تطبيق الحرفي، التوزيع، التحقق، الرصيد المسبق، ولوحة القيادة. صِفوا لنا منطقتكم، مهنكم، ونموذجكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.annonces, kind: '2027', name: 'إنشاء موقع إعلانات: الإشراف، الإعلانات الوهمية، وحسابات المحترفين' },
      { href: L.marketplace, kind: '2027', name: 'إنشاء سوق إلكترونية: العمولة، الدفع، والنموذج' },
      { href: L.paiement, kind: '2027', name: 'إدماج الدفع عبر الإنترنت: التأكيد، المطابقة، والاسترجاع' },
      { href: L.mobile, kind: '2027', name: 'إنشاء تطبيق هاتف: سبعة قرارات في البداية' },
    ] },
  },
};

const KEYWORDS = "comment créer une plateforme de mise en relation, créer une plateforme de mise en relation en algérie 2027, creer une application de mise en relation, application artisan algerie, application plombier algérie, application depannage algerie, application service algerie, application bricolage algérie, application femme de menage algerie, plombier à domicile alger, application services à domicile, home services marketplace algeria, how to build a two-sided marketplace, tradespeople app, pay per lead model, marketplace disintermediation, تطبيق الحرفيين في الجزائر, تطبيق للحرفيين في الجزائر, منصة ربط الحرفيين, الخدمات المنزلية الجزائر, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
