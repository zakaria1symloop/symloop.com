import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/site-vitrine-algerie-2027-site-qui-ne-ramene-aucune-demande-pages-par-service-et-par-ville-poids-des-pages-contact-a-chaque-ecran-mesure.mjs';

const SLUG = 'site-vitrine-algerie-2027-site-qui-ne-ramene-aucune-demande-pages-par-service-et-par-ville-poids-des-pages-contact-a-chaque-ecran-mesure';
const FIGURES = ['demandes', 'poids', 'parcours', 'situations', 'calendrier', 'couches'];
const DATE = '2026-11-23';
const I = (x) => '⁦' + x + '⁩';

const L = {
  lente: '/blog/application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  formulaire: '/blog/comment-faire-un-formulaire-en-ligne-en-algerie-2027-inscriptions-demandes-de-devis-reponses-dans-un-tableur-doublons-spam-accuse-de-reception/',
  domaine: '/blog/nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main/',
  hebergeur: '/blog/comment-changer-d-hebergeur-de-site-internet-en-algerie-2027-sans-coupure-site-mails-dns-bascule-retour-arriere-transfert-du-nom-de-domaine/',
  ecommerce: '/blog/comment-creer-un-site-e-commerce-en-algerie-2027-paiement-a-la-livraison-livraison-par-wilaya-confirmation-retours-plateforme-ou-sur-mesure/',
  catalogue: '/blog/comment-creer-un-catalogue-en-ligne-en-algerie-2027-catalogue-pdf-jamais-a-jour-fiches-produits-prix-par-client-demande-de-devis-sans-boutique/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  prix: '/blog/prix-site-web-algerie-2026/',
};

const CONTENT = {
  fr: {
    kind: 'Site vitrine · Algérie · 2027', title: "Site vitrine en Algérie (2027) : notre site ne ramène aucune demande, il met seize secondes à s'ouvrir sur un téléphone et personne ne sait combien de gens le visitent ; pages par service et par ville, contact à chaque écran, vitesse, mesure, et ce qu'on met en place",
    dek: "« Nous avons un site vitrine depuis quatre ans. Personne ne nous appelle grâce à lui, nous ne savons pas combien de personnes le visitent, il n'apparaît pas quand on cherche notre métier et notre ville, il met une éternité à s'ouvrir sur un téléphone, le formulaire arrive dans une boîte que personne ne lit, et c'est l'ancien prestataire qui a les accès. Faut-il le refaire, et que doit contenir un site vitrine ? » Un site vitrine se juge sur les demandes qu'il ramène : il se mesure d'abord, puis se refait autour de quatre choses, être trouvé, s'ouvrir vite, montrer comment vous joindre, et compter les demandes.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Site vitrine', 'Refonte de site web', 'Pages par service et par ville', 'Poids et vitesse sur mobile', 'Mesure des demandes', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un site vitrine présente en ligne les produits ou les services d'une organisation ; il se juge sur une chose, les demandes qu'il ramène : appels, messages, formulaires. Il lui faut une page par service et par ville servie, écrite avec les mots de vos clients ; des pages qui s'ouvrent vite sur un téléphone ; un moyen de vous joindre visible à chaque écran ; et un comptage des demandes. Dans l'exemple de cette page, le site actuel reçoit 1 200 visites par mois et ramène 9 demandes, soit 0,75 % ; sa page d'accueil pèse 8 mégaoctets et met 16 secondes à se charger. Refait, il en ramène 46.",
      "Cette page s'adresse aux entreprises, cabinets, cliniques, écoles, artisans et commerces qui ont un site vitrine ou en veulent un, en Algérie, et aux fondatrices et fondateurs de la diaspora qui lancent une activité ici. Les faits viennent de sources publiques : la définition du site vitrine et du taux de conversion, les guides de Google sur le référencement, l'indexation mobile, les résultats locaux, les signaux web essentiels et le déplacement d'un site, et le poids médian d'une page selon le Web Almanac 2024. L'entreprise, ses visites, ses demandes et ses poids de page sont un exemple construit. La page ne promet aucune position dans Google et ne cite aucun prix.",
    ],
    sections: [
      { heading: "Cent visiteurs, et ce qu'ils font", body: [
        "La figure ramène un mois de visites à cent visiteurs, sur le site actuel puis sur le site refait.",
      ], visual: 'demandes', after: [
        "**Le site vitrine.** C'est un site web qui présente en ligne les produits ou les services d'une organisation. Il ne vend pas en ligne : il doit donner envie d'appeler, d'écrire ou de venir. **Le taux de conversion.** C'est la part des visiteurs qui accomplissent le but fixé par le propriétaire du site ; ici, vous joindre. **Dans l'exemple.** Un mois de mesure sur le site actuel : 1 200 visites, dont 62 % sur téléphone. 168 arrivent jusqu'à la page Contact, la seule où figurent le numéro et le formulaire : 14 %. 9 demandes : 5 appels, 3 formulaires, 1 message. Soit 0,75 %.",
        "**Ce que cela dit.** Sur cent visiteurs, quatre-vingt-six repartent sans avoir vu comment vous joindre. Et deux formulaires sur trois arrivaient dans une boîte que personne ne lit : sept demandes traitées sur neuf. **Après la refonte.** Dans l'exemple, 1 450 visites, un moyen de contact à chaque écran, 46 demandes : 21 appels, 17 messages, 8 formulaires, soit 3,2 %. **La limite de la mesure.** Un appel se compte au clic sur le numéro, un message au clic sur le bouton : ce sont des intentions, à rapprocher des appels réellement reçus. Et un exemple n'est pas une promesse : votre métier, votre zone et vos concurrents décident du reste.",
      ] },
      { heading: "Huit mégaoctets, seize secondes", body: [
        "La figure met le poids de la page d'accueil et son temps de téléchargement sur une même barre.",
      ], visual: 'poids', after: [
        "**Le poids.** La page d'accueil de l'exemple pèse 8 mégaoctets : trois photos de diaporama à 2,2 chacune, 1 de scripts, 0,4 pour le reste. À titre de repère, le poids médian d'une page sur mobile, mesuré en octobre 2024 par le Web Almanac, est de 2,3 mégaoctets. **Le temps.** Sur un téléphone à 4 mégabits par seconde, débit mesuré dans l'exemple : 8 fois 8, divisé par 4, soit 16 secondes. Avec les mêmes photos redimensionnées et compressées, et des scripts triés : 0,8 mégaoctet, 1,6 seconde. Le même raisonnement vaut pour une application, voir [une application lente sur réseau faible](" + L.lente + ").",
        "**Les repères de Google.** Google utilise la version mobile d'un site pour l'indexer et le classer. Ses signaux web essentiels fixent trois seuils : le contenu principal affiché en 2,5 secondes au plus, une réaction aux gestes en 200 millisecondes au plus, et une mise en page stable. Google écrit que ces signaux vont dans le sens de ce que ses systèmes de classement cherchent à récompenser. **La simplification.** Notre calcul compte le téléchargement complet de la page ; le contenu principal peut s'afficher avant. Mesurez sur un vrai téléphone, là où sont vos clients.",
      ] },
      { heading: "De la recherche à la réponse, en six temps", body: [
        "La figure suit un client, du mot qu'il tape jusqu'à la réponse qu'il reçoit.",
      ], visual: 'parcours', after: [
        "**Être trouvé.** Google écrit que le référencement consiste à aider les moteurs à comprendre votre contenu, qu'il découvre surtout les pages par les liens d'autres pages, et qu'aucun secret ne classe automatiquement un site premier. Ce qui dépend de vous : une page par service et par ville servie, écrite avec les mots qu'un client taperait. « Climatisation » ne suffit pas ; « installation de chambre froide à Blida » est une page. **Les résultats locaux.** Selon Google, ils reposent surtout sur la pertinence, la distance et la notoriété, et les entreprises dont les informations sont complètes et exactes ont plus de chances d'y apparaître. Même nom, même adresse, même numéro sur le site et sur votre fiche d'établissement.",
        "**La preuve.** Vos photos, vos réalisations, les références que vous avez le droit de citer : ce qu'un concurrent ne peut pas copier. **Le contact.** Un bouton d'appel, un bouton de message, un formulaire de trois champs, visibles à chaque écran, en arabe et en français, voir [une application dans les deux langues](" + L.bilingue + "). **La réponse.** Chaque demande entre dans une liste avec un statut, pas dans une boîte que personne n'ouvre : voir [le formulaire en ligne](" + L.formulaire + ").",
      ] },
      { heading: "Cinq situations, et ce que la refonte change", body: [
        "La figure reprend cinq situations, avec le site actuel puis avec le site refait.",
      ], visual: 'situations', after: [
        "**Les accès.** Le nom de domaine, l'hébergement et les comptes doivent être à votre nom : voir [qui possède quoi](" + L.domaine + ") et, si vous changez d'hébergeur, [changer sans coupure](" + L.hebergeur + "). **Les anciennes adresses.** Quand les adresses des pages changent, Google recommande des redirections permanentes des anciennes vers les nouvelles, gardées le plus longtemps possible, en général au moins un an. Sans elles, les liens déjà acquis mènent à une page introuvable.",
        "**Vitrine ou boutique.** Si le client commande et paie en ligne, c'est un autre projet, voir [le site e-commerce](" + L.ecommerce + ") ; si vous publiez un catalogue avec demande de devis, voir [le catalogue en ligne](" + L.catalogue + "). **Le prix.** Cette page n'en cite aucun ; la question est traitée dans [le prix d'un site web](" + L.prix + "). **Ce que le site ne fait pas.** Il ne remplace ni la qualité du service ni la rapidité de la réponse : il amène la demande jusqu'à vous.",
      ] },
      { heading: "Huit semaines, en commençant par la mesure", body: [
        "Huit semaines dans l'exemple, dont quatre de mesure menées en parallèle du contenu.",
      ], visual: 'calendrier', after: [
        "**Mesurer d'abord.** Quatre semaines de comptage sur le site actuel, pendant que le contenu se prépare : sans ce point de départ, personne ne saura si le nouveau site fait mieux. **Le contenu.** C'est la partie que vous seul pouvez fournir : la liste des services, les villes servies, les photos de vos réalisations, les références. Un site sans contenu propre ressemble à tous les autres.",
        "**Le téléphone d'abord.** Les maquettes commencent par l'écran du téléphone : c'est la version que Google indexe, et 62 % des visites de l'exemple en viennent. **Le poids.** Chaque page a un budget ; dans l'exemple, moins d'un mégaoctet. **Après la mise en ligne.** Les mêmes compteurs tournent : demandes par mois, par page et par source, suivies dans [le tableau de bord](" + L.tableau + ").",
      ] },
      { heading: "Ce qu'il y a dans un site vitrine qui travaille", body: [
        "La figure empile cinq couches ; la deuxième, le contact, est celle qui transforme une visite en demande.",
      ], visual: 'couches', after: [
        "**Contenu et contact.** Une page par service et par ville, avec vos preuves ; un moyen de vous joindre à chaque écran. Le contact est la couche accentuée : dans l'exemple, c'est son absence qui faisait repartir 86 visiteurs sur 100. **Vitesse et technique.** Un budget de poids par page ; des titres qui disent le service et le lieu ; des données structurées d'établissement local, avec lesquelles on indique à Google ses horaires et ses différents départements ; un plan du site ; des redirections.",
        "**Mesure et propriété.** Les demandes comptées par source et par page ; les accès, le domaine et l'hébergement à votre nom. **Prêt à l'emploi ou sur mesure.** Des outils de création de site prêts à l'emploi existent ; ils conviennent à une présence simple, quand quelqu'un chez vous a le temps de s'en occuper. Le sur-mesure se justifie quand il faut des pages par service et par ville en deux langues, un poids contrôlé, des demandes qui entrent dans vos outils, et un site capable d'évoluer vers un catalogue, un espace client ou une prise de rendez-vous.",
      ], list: [
        "**Ce que vous recevez** : un mois de mesure du site actuel ; une page par service et par ville servie ; le contact à chaque écran ; un budget de poids par page ; l'arabe et le français ; les données structurées et le plan du site ; les redirections des anciennes adresses ; les demandes dans une liste avec statut ; les accès à votre nom.",
        "**Ce que l'entreprise évite** : le site que personne ne trouve, la page qui s'ouvre en seize secondes, le numéro caché dans une page Contact, le formulaire qui part dans le vide, les accès détenus par un ancien prestataire, la refonte dont personne ne sait si elle a servi.",
        "**Ce qui est mesuré** : visites par mois et par source ; part des visites sur téléphone ; poids et temps d'ouverture de chaque page ; clics d'appel et de message, formulaires envoyés ; taux de conversion ; délai de réponse aux demandes.",
        "**Ce que fait Symloop** : la mesure du site actuel, la liste des pages avec vous, les maquettes sur téléphone, le développement en deux langues, le contrôle du poids, les données structurées, les redirections, la liste des demandes, la remise des accès. Le contenu, les photos et les références viennent de vous.",
      ], faq: [
        { q: "Qu'est-ce qu'un site vitrine ?", a: "Un site web qui présente en ligne les produits ou les services d'une organisation, sans vente en ligne. Il se juge sur les demandes qu'il ramène : appels, messages, formulaires." },
        { q: "Que doit contenir un site vitrine ?", a: "Une page par service et par ville servie, vos preuves, un moyen de contact à chaque écran, des pages légères, les deux langues, et un comptage des demandes." },
        { q: "Pourquoi mon site ne ramène-t-il aucun client ?", a: "Le plus souvent pour l'une de quatre raisons : il n'est pas trouvé, il s'ouvre trop lentement sur téléphone, le moyen de vous joindre est caché, ou les demandes ne sont lues par personne. Un mois de mesure dit laquelle." },
        { q: "Faut-il refaire le site ou l'améliorer ?", a: "Mesurez d'abord. Si le contenu est bon et que seuls le poids et le contact posent problème, une amélioration suffit. Si les pages par service n'existent pas et que les accès ne sont pas à vous, la refonte est plus sûre." },
        { q: "Comment apparaître sur Google pour mon métier et ma ville ?", a: "Avec une page par service et par ville, écrite avec les mots des clients, et des informations d'établissement complètes et identiques partout. Aucune méthode ne garantit la première place." },
        { q: "Combien de temps un site doit-il mettre à s'ouvrir ?", a: "Google juge bon un affichage du contenu principal en 2,5 secondes au plus. À 4 mégabits par seconde, cela revient à garder la page autour d'un mégaoctet." },
        { q: "Site vitrine ou site e-commerce ?", a: "Vitrine si le client vous appelle, vous écrit ou vient ; e-commerce s'il commande et paie en ligne. On peut commencer par une vitrine avec demande de devis." },
        { q: "Que deviennent les anciennes adresses du site ?", a: "Chacune est redirigée de façon permanente vers la nouvelle page, pendant au moins un an, pour ne perdre ni les liens ni les visiteurs." },
        { q: "À qui appartient le site ?", a: "À vous : le nom de domaine, l'hébergement et les comptes sont à votre nom, et les accès vous sont remis." },
        { q: "Par quoi commencer ?", a: "Par un mois de mesure du site actuel, et par la liste de vos services et des villes que vous servez." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Sur cent visiteurs, quatre-vingt-six repartent sans avoir vu comment vous joindre." },
      { after: 1, text: "À débit égal, le temps suit le poids : diviser le poids par dix divise l'attente par dix." },
    ],
    cta: { eyebrow: "Dites-nous l'adresse de votre site, vos services et les villes que vous servez : nous commençons par un mois de mesure", title: "Site que personne ne trouve, page qui met seize secondes à s'ouvrir, numéro caché, formulaire qui part dans le vide, accès chez un ancien prestataire, ou activité que vous lancez en Algérie depuis la France", body: "Symloop construit le site vitrine qui ramène des demandes : pages par service et par ville, contact à chaque écran, pages légères, arabe et français, demandes comptées, accès à votre nom. Décrivez-nous votre métier, votre zone et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.domaine, kind: '2027', name: 'Nom de domaine et hébergement : qui possède quoi' },
      { href: L.formulaire, kind: '2027', name: 'Formulaire en ligne : demandes de devis, doublons, accusé de réception' },
      { href: L.catalogue, kind: '2027', name: 'Catalogue en ligne : fiches produits, demande de devis' },
      { href: L.ecommerce, kind: '2027', name: 'Site e-commerce : paiement à la livraison, livraison par wilaya' },
    ] },
  },
  en: {
    kind: 'Showcase website · Algeria · 2027', title: "Showcase website in Algeria (2027): our site brings no requests, takes sixteen seconds to open on a phone and nobody knows how many people visit it; pages per service and per city, contact on every screen, speed, measurement, and what we put in place",
    dek: "“We have had a showcase website for four years. Nobody calls us because of it, we do not know how many people visit it, it does not appear when someone searches our trade and our city, it takes forever to open on a phone, the form lands in a mailbox nobody reads, and the former provider holds the access. Should we rebuild it, and what should a showcase website contain?” A showcase website is judged on the requests it brings: it is measured first, then rebuilt around four things, being found, opening fast, showing how to reach you, and counting the requests.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Showcase website', 'Website redesign', 'Pages per service and per city', 'Weight and speed on mobile', 'Measuring requests', 'Algeria 2027'],
    intro: [
      "**Short answer.** A showcase website presents an organisation's products or services online; it is judged on one thing, the requests it brings: calls, messages, forms. It needs one page per service and per city served, written in your customers' words; pages that open fast on a phone; a way to reach you visible on every screen; and a count of the requests. In this page's example, the current site gets 1,200 visits a month and brings 9 requests, that is 0.75%; its home page weighs 8 megabytes and takes 16 seconds to load. Rebuilt, it brings 46.",
      "This page is for companies, practices, clinics, schools, tradespeople and shops that have a showcase website or want one, in Algeria, and for diaspora founders launching a business here. The facts come from public sources: the definition of a showcase website and of the conversion rate, Google's guides on search optimisation, mobile indexing, local results, Core Web Vitals and moving a site, and the median page weight according to the Web Almanac 2024. The company, its visits, its requests and its page weights are a constructed example. The page promises no position in Google and quotes no price.",
    ],
    sections: [
      { heading: "One hundred visitors, and what they do", body: [
        "The figure brings one month of visits down to one hundred visitors, on the current site and then on the rebuilt one.",
      ], visual: 'demandes', after: [
        "**The showcase website.** It is a website that presents an organisation's products or services online. It does not sell online: it has to make people want to call, write or come. **The conversion rate.** It is the share of visitors who complete the goal set by the site owner; here, reaching you. **In the example.** One month of measurement on the current site: 1,200 visits, 62% of them on a phone. 168 get to the Contact page, the only place with the number and the form: 14%. 9 requests: 5 calls, 3 forms, 1 message. That is 0.75%.",
        "**What this says.** Out of one hundred visitors, eighty-six leave without having seen how to reach you. And two forms out of three landed in a mailbox nobody reads: seven requests handled out of nine. **After the rebuild.** In the example, 1,450 visits, a way to reach you on every screen, 46 requests: 21 calls, 17 messages, 8 forms, that is 3.2%. **The limit of the measurement.** A call is counted at the click on the number, a message at the click on the button: these are intentions, to be compared with the calls actually received. And an example is not a promise: your trade, your area and your competitors decide the rest.",
      ] },
      { heading: "Eight megabytes, sixteen seconds", body: [
        "The figure puts the weight of the home page and its download time on one bar.",
      ], visual: 'poids', after: [
        "**The weight.** The home page of the example weighs 8 megabytes: three slider photos at 2.2 each, 1 of scripts, 0.4 for the rest. As a reference, the median weight of a mobile page, measured in October 2024 by the Web Almanac, is 2.3 megabytes. **The time.** On a phone at 4 megabits per second, the speed measured in the example: 8 times 8, divided by 4, that is 16 seconds. With the same photos resized and compressed, and the scripts sorted: 0.8 megabytes, 1.6 seconds. The same reasoning applies to an application, see [a slow application on a weak network](" + L.lente + ").",
        "**Google's reference points.** Google uses the mobile version of a site to index and rank it. Its Core Web Vitals set three thresholds: the main content displayed within 2.5 seconds, a response to gestures within 200 milliseconds, and a stable layout. Google writes that these signals align with what its ranking systems seek to reward. **The simplification.** Our arithmetic counts the full download of the page; the main content can display earlier. Measure on a real phone, where your customers are.",
      ] },
      { heading: "From the search to the answer, in six steps", body: [
        "The figure follows a customer, from the words they type to the answer they receive.",
      ], visual: 'parcours', after: [
        "**Being found.** Google writes that search optimisation is about helping search engines understand your content, that it mostly finds pages through links from other pages, and that no secret automatically ranks a site first. What depends on you: one page per service and per city served, written with the words a customer would type. “Air conditioning” is not enough; “cold room installation in Blida” is a page. **Local results.** According to Google, they are mainly based on relevance, distance and prominence, and businesses with complete and accurate information are more likely to show up. Same name, same address, same number on the site and on your business profile.",
        "**Proof.** Your photos, your work, the references you are allowed to name: what a competitor cannot copy. **Contact.** A call button, a message button, a three-field form, visible on every screen, in Arabic and French, see [an application in both languages](" + L.bilingue + "). **The answer.** Each request enters a list with a status, not a mailbox nobody opens: see [the online form](" + L.formulaire + ").",
      ] },
      { heading: "Five situations, and what the rebuild changes", body: [
        "The figure takes five situations, with the current site and then with the rebuilt one.",
      ], visual: 'situations', after: [
        "**Access.** The domain name, the hosting and the accounts must be in your name: see [who owns what](" + L.domaine + ") and, if you change host, [changing without downtime](" + L.hebergeur + "). **The old addresses.** When page addresses change, Google recommends permanent redirects from the old ones to the new ones, kept as long as possible, generally at least one year. Without them, the links already earned lead to a page that cannot be found.",
        "**Showcase or shop.** If the customer orders and pays online, it is another project, see [the e-commerce site](" + L.ecommerce + "); if you publish a catalogue with quote requests, see [the online catalogue](" + L.catalogue + "). **The price.** This page quotes none; the question is covered in [the price of a website](" + L.prix + "). **What the site does not do.** It replaces neither the quality of the service nor the speed of the answer: it brings the request to you.",
      ] },
      { heading: "Eight weeks, starting with measurement", body: [
        "Eight weeks in the example, four of them measuring while the content is prepared.",
      ], visual: 'calendrier', after: [
        "**Measure first.** Four weeks of counting on the current site, while the content is being prepared: without that starting point, nobody will know whether the new site does better. **The content.** It is the part only you can provide: the list of services, the cities served, the photos of your work, the references. A site with no content of its own looks like all the others.",
        "**The phone first.** The mock-ups start with the phone screen: it is the version Google indexes, and 62% of the visits in the example come from it. **The weight.** Each page has a budget; in the example, under one megabyte. **After the launch.** The same counters keep running: requests per month, per page and per source, followed in [the dashboard](" + L.tableau + ").",
      ] },
      { heading: "What is inside a showcase website that works", body: [
        "The figure stacks five layers; the second, the contact, is the one that turns a visit into a request.",
      ], visual: 'couches', after: [
        "**Content and contact.** One page per service and per city, with your proof; a way to reach you on every screen. The contact is the accented layer: in the example, its absence is what made 86 visitors out of 100 leave. **Speed and technical.** A weight budget per page; titles that say the service and the place; local business structured data, with which you tell Google your opening hours and your different departments; a site map; redirects.",
        "**Measurement and ownership.** Requests counted by source and by page; the access, the domain and the hosting in your name. **Off the shelf or custom.** Ready-made site builders exist; they fit a simple presence, when someone on your side has the time to look after it. Custom work is justified when you need pages per service and per city in two languages, a controlled weight, requests that enter your tools, and a site able to grow into a catalogue, a customer area or appointment booking.",
      ], list: [
        "**What you receive**: one month of measurement of the current site; one page per service and per city served; the contact on every screen; a weight budget per page; Arabic and French; structured data and the site map; redirects from the old addresses; the requests in a list with a status; the access in your name.",
        "**What the company avoids**: the site nobody finds, the page that opens in sixteen seconds, the number hidden in a Contact page, the form that goes nowhere, the access held by a former provider, the rebuild nobody can say was worth it.",
        "**What is measured**: visits per month and per source; share of visits on a phone; weight and opening time of each page; call and message clicks, forms sent; conversion rate; time to answer requests.",
        "**What Symloop does**: measuring the current site, the list of pages with you, the mock-ups on a phone, development in two languages, weight control, structured data, redirects, the list of requests, handing over the access. The content, the photos and the references come from you.",
      ], faq: [
        { q: "What is a showcase website?", a: "A website that presents an organisation's products or services online, with no online sales. It is judged on the requests it brings: calls, messages, forms." },
        { q: "What should a showcase website contain?", a: "One page per service and per city served, your proof, a way to reach you on every screen, light pages, both languages, and a count of the requests." },
        { q: "Why does my website bring no customers?", a: "Most often for one of four reasons: it is not found, it opens too slowly on a phone, the way to reach you is hidden, or nobody reads the requests. One month of measurement says which." },
        { q: "Should we rebuild the site or improve it?", a: "Measure first. If the content is good and only the weight and the contact are the problem, an improvement is enough. If the pages per service do not exist and the access is not yours, a rebuild is safer." },
        { q: "How do we appear on Google for our trade and our city?", a: "With one page per service and per city, written in the customers' words, and business information that is complete and identical everywhere. No method guarantees first place." },
        { q: "How long should a site take to open?", a: "Google considers a main content display within 2.5 seconds good. At 4 megabits per second, that means keeping the page around one megabyte." },
        { q: "Showcase website or e-commerce site?", a: "Showcase if the customer calls, writes or comes; e-commerce if they order and pay online. You can start with a showcase site and quote requests." },
        { q: "What happens to the site's old addresses?", a: "Each one is permanently redirected to the new page, for at least one year, so that neither the links nor the visitors are lost." },
        { q: "Who owns the site?", a: "You do: the domain name, the hosting and the accounts are in your name, and the access is handed over to you." },
        { q: "Where do we start?", a: "With one month of measurement of the current site, and with the list of your services and of the cities you serve." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Out of one hundred visitors, eighty-six leave without having seen how to reach you." },
      { after: 1, text: "At equal speed, time follows weight: dividing the weight by ten divides the wait by ten." },
    ],
    cta: { eyebrow: "Tell us your site's address, your services and the cities you serve: we start with one month of measurement", title: "A site nobody finds, a page that takes sixteen seconds to open, a hidden number, a form that goes nowhere, access held by a former provider, or a business you are launching in Algeria from France", body: "Symloop builds the showcase website that brings requests: pages per service and per city, contact on every screen, light pages, Arabic and French, requests counted, access in your name. Describe your trade, your area and your tools." },
    related: { label: 'Also read', items: [
      { href: L.domaine, kind: '2027', name: 'Domain name and hosting: who owns what' },
      { href: L.formulaire, kind: '2027', name: 'Online form: quote requests, duplicates, acknowledgement' },
      { href: L.catalogue, kind: '2027', name: 'Online catalogue: product pages, quote requests' },
      { href: L.ecommerce, kind: '2027', name: 'E-commerce site: cash on delivery, delivery by wilaya' },
    ] },
  },
  ar: {
    kind: 'موقع تعريفي · الجزائر · 2027', title: "موقع تعريفي للشركة في الجزائر (2027): موقعنا لا يجلب أي طلب، يحتاج ست عشرة ثانية ليُفتَح على الهاتف، ولا أحد يعرف كم يزوره؛ صفحة لكل خدمة ولكل مدينة، وسيلة اتصال في كل شاشة، السرعة، القياس، وما نضعه",
    dek: "«عندنا موقع تعريفي منذ أربع سنوات. لا أحد يتصل بنا بفضله، لا نعرف كم شخصاً يزوره، لا يظهر حين يبحثون عن مهنتنا ومدينتنا، يحتاج وقتاً طويلاً ليُفتَح على الهاتف، الاستمارة تصل إلى بريد لا يقرؤه أحد، والمزوّد القديم هو من يملك مفاتيح الدخول. هل نعيد بناءه، وماذا يجب أن يحتوي موقع تعريفي؟» الموقع التعريفي يُحكَم عليه بالطلبات التي يجلبها: يُقاس أولاً، ثم يُعاد بناؤه حول أربعة أمور، أن يوجد، أن يُفتَح بسرعة، أن يُظهر كيف يُتَّصل بكم، وأن يحسب الطلبات.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['موقع تعريفي', 'إعادة بناء موقع', 'صفحة لكل خدمة ولكل مدينة', 'الوزن والسرعة على الهاتف', 'قياس الطلبات', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الموقع التعريفي يعرض على الإنترنت منتجات مؤسسة أو خدماتها؛ ويُحكَم عليه بأمر واحد، الطلبات التي يجلبها: مكالمات، رسائل، واستمارات. ويلزمه صفحة لكل خدمة ولكل مدينة تخدمونها، مكتوبة بكلمات زبائنكم؛ صفحات تُفتَح بسرعة على الهاتف؛ وسيلة اتصال ظاهرة في كل شاشة؛ وعدّ للطلبات. في مثال هذه الصفحة، الموقع الحالي يستقبل " + I('1 200') + " زيارة في الشهر ويجلب 9 طلبات، أي أقل من واحد بالمئة؛ وصفحته الرئيسية تزن 8 ميغابايت وتحتاج 16 ثانية لتُحمَّل. وبعد إعادة بنائه، يجلب 46.",
      "هذه الصفحة موجّهة إلى المؤسسات، المكاتب، العيادات، المدارس، الحرفيين، والمحلات ممن لهم موقع تعريفي أو يريدون واحداً، في الجزائر، وإلى مؤسِّسات ومؤسِّسي الجالية الذين يطلقون نشاطاً هنا. الوقائع من مصادر عمومية: تعريف الموقع التعريفي ومعدل التحويل، أدلة " + I('Google') + " حول تحسين الظهور، الفهرسة على الهاتف، النتائج المحلية، مؤشرات الويب الأساسية، ونقل موقع، والوزن الوسيط لصفحة حسب تقرير " + I('Web Almanac') + " لسنة 2024. والمؤسسة، زياراتها، طلباتها، وأوزان صفحاتها مثال مركَّب. والصفحة لا تعد بأي مرتبة في محركات البحث ولا تذكر أي سعر.",
    ],
    sections: [
      { heading: "مئة زائر، وما يفعلونه", body: [
        "الشكل يحسب شهراً من الزيارات على مئة زائر، في الموقع الحالي ثم في الموقع المُعاد بناؤه.",
      ], visual: 'demandes', after: [
        "**الموقع التعريفي.** هو موقع يعرض على الإنترنت منتجات مؤسسة أو خدماتها. لا يبيع على الإنترنت: عليه أن يدفع إلى الاتصال، الكتابة، أو المجيء. **معدل التحويل.** هو حصة الزوار الذين ينجزون الهدف الذي حدده صاحب الموقع؛ وهنا، الاتصال بكم. **في المثال.** شهر من القياس على الموقع الحالي: " + I('1 200') + " زيارة، منها 62 بالمئة على الهاتف. 168 تصل إلى صفحة الاتصال، وهي الوحيدة التي فيها الرقم والاستمارة: 14 بالمئة. 9 طلبات: 5 مكالمات، 3 استمارات، ورسالة. أي " + I('0,75') + " بالمئة.",
        "**ما يقوله هذا.** من مئة زائر، ستة وثمانون يغادرون دون أن يروا كيف يتصلون بكم. واستمارتان من ثلاث كانتا تصلان إلى بريد لا يقرؤه أحد: سبعة طلبات معالَجة من تسعة. **بعد إعادة البناء.** في المثال، " + I('1 450') + " زيارة، وسيلة اتصال في كل شاشة، و46 طلباً: 21 مكالمة، 17 رسالة، و8 استمارات، أي " + I('3,2') + " بالمئة. **حدود القياس.** المكالمة تُحسَب عند النقر على الرقم، والرسالة عند النقر على الزر: هي نوايا، تُقارَن بالمكالمات المستقبَلة فعلاً. والمثال ليس وعداً: مهنتكم، منطقتكم، ومنافسوكم يقرّرون الباقي.",
      ] },
      { heading: "ثمانية ميغابايت، ست عشرة ثانية", body: [
        "الشكل يضع وزن الصفحة الرئيسية ووقت تحميلها على عمود واحد.",
      ], visual: 'poids', after: [
        "**الوزن.** الصفحة الرئيسية في المثال تزن 8 ميغابايت: ثلاث صور عرض بـ" + I('2,2') + " لكل واحدة، 1 للسكريبتات، و" + I('0,4') + " للباقي. وكمعلم، الوزن الوسيط لصفحة على الهاتف، كما قاسه تقرير " + I('Web Almanac') + " في أكتوبر 2024، هو " + I('2,3') + " ميغابايت. **الوقت.** على هاتف بسرعة 4 ميغابت في الثانية، وهي السرعة المقيسة في المثال: 8 في 8، مقسومة على 4، أي 16 ثانية. ومع الصور نفسها بعد تغيير أبعادها وضغطها، وسكريبتات مفروزة: " + I('0,8') + " ميغابايت، و" + I('1,6') + " ثانية. والمنطق نفسه يصح لتطبيق، انظر [تطبيق بطيء على شبكة ضعيفة](" + L.lente + ").",
        "**معالم " + I('Google') + ".** " + I('Google') + " تستعمل نسخة الهاتف من الموقع لفهرسته وترتيبه. ومؤشراتها الأساسية للويب تحدد ثلاث عتبات: عرض المحتوى الرئيسي في " + I('2,5') + " ثانية على الأكثر، استجابة للحركات في 200 ميلي ثانية على الأكثر، وتخطيط ثابت. وتكتب أن هذه المؤشرات تسير في اتجاه ما تسعى أنظمة ترتيبها إلى مكافأته. **التبسيط.** حسابنا يعدّ التحميل الكامل للصفحة؛ والمحتوى الرئيسي قد يُعرَض قبل ذلك. قيسوا على هاتف حقيقي، حيث يوجد زبائنكم.",
      ] },
      { heading: "من البحث إلى الجواب، في ست مراحل", body: [
        "الشكل يتابع زبوناً، من الكلمة التي يكتبها إلى الجواب الذي يتلقاه.",
      ], visual: 'parcours', after: [
        "**أن توجدوا.** تكتب " + I('Google') + " أن تحسين الظهور يعني مساعدة المحركات على فهم محتواكم، أنها تكتشف الصفحات خصوصاً عبر روابط صفحات أخرى، وأنه لا سرّ يضع موقعاً في المرتبة الأولى تلقائياً. وما يتوقف عليكم: صفحة لكل خدمة ولكل مدينة تخدمونها، مكتوبة بالكلمات التي يكتبها الزبون. «التكييف» لا تكفي؛ «تركيب غرفة تبريد في البليدة» صفحة. **النتائج المحلية.** حسب " + I('Google') + "، تستند خصوصاً إلى الملاءمة، المسافة، والشهرة، والمؤسسات التي معلوماتها كاملة ودقيقة حظوظها أكبر في الظهور فيها. الاسم نفسه، العنوان نفسه، والرقم نفسه في الموقع وفي بطاقة مؤسستكم.",
        "**الإثبات.** صوركم، إنجازاتكم، والمراجع التي يحق لكم ذكرها: ما لا يستطيع منافس نسخه. **الاتصال.** زر مكالمة، زر رسالة، واستمارة من ثلاثة حقول، ظاهرة في كل شاشة، بالعربية والفرنسية، انظر [تطبيق باللغتين](" + L.bilingue + "). **الجواب.** كل طلب يدخل قائمة لها حالة، لا بريداً لا يفتحه أحد: انظر [الاستمارة على الإنترنت](" + L.formulaire + ").",
      ] },
      { heading: "خمس حالات، وما تغيّره إعادة البناء", body: [
        "الشكل يأخذ خمس حالات، مع الموقع الحالي ثم مع الموقع الجديد.",
      ], visual: 'situations', after: [
        "**مفاتيح الدخول.** اسم النطاق، الاستضافة، والحسابات يجب أن تكون باسمكم: انظر [من يملك ماذا](" + L.domaine + ")، وإذا غيّرتم المستضيف، [التغيير دون انقطاع](" + L.hebergeur + "). **العناوين القديمة.** حين تتغيّر عناوين الصفحات، توصي " + I('Google') + " بإعادة توجيه دائمة من القديمة إلى الجديدة، تُحفَظ أطول مدة ممكنة، وعموماً سنة على الأقل. ودونها، الروابط المكتسَبة تقود إلى صفحة غير موجودة.",
        "**موقع تعريفي أم متجر.** إذا كان الزبون يطلب ويدفع على الإنترنت، فهو مشروع آخر، انظر [موقع التجارة الإلكترونية](" + L.ecommerce + ")؛ وإذا كنتم تنشرون فهرساً مع طلب عرض سعر، انظر [الفهرس على الإنترنت](" + L.catalogue + "). **السعر.** هذه الصفحة لا تذكر أي سعر؛ والمسألة معالَجة في [سعر موقع ويب](" + L.prix + "). **ما لا يفعله الموقع.** لا يعوّض جودة الخدمة ولا سرعة الجواب: يوصل الطلب إليكم.",
      ] },
      { heading: "ثمانية أسابيع، بدءاً بالقياس", body: [
        "ثمانية أسابيع في المثال، منها أربعة للقياس تجري بالتوازي مع تحضير المحتوى.",
      ], visual: 'calendrier', after: [
        "**القياس أولاً.** أربعة أسابيع من العدّ على الموقع الحالي، أثناء تحضير المحتوى: دون هذه النقطة، لن يعرف أحد إن كان الموقع الجديد أفضل. **المحتوى.** هو الجزء الذي لا يستطيع تقديمه غيركم: قائمة الخدمات، المدن التي تخدمونها، صور إنجازاتكم، والمراجع. الموقع الذي لا محتوى خاصاً له يشبه كل المواقع.",
        "**الهاتف أولاً.** النماذج تبدأ بشاشة الهاتف: هي النسخة التي تفهرسها " + I('Google') + "، و62 بالمئة من زيارات المثال تأتي منها. **الوزن.** لكل صفحة ميزانية؛ وفي المثال، أقل من ميغابايت واحد. **بعد الوضع على الخط.** العدّادات نفسها تعمل: الطلبات في الشهر، لكل صفحة ولكل مصدر، متابَعة في [لوحة القيادة](" + L.tableau + ").",
      ] },
      { heading: "ما يوجد في موقع تعريفي يعمل", body: [
        "الشكل يرصّ خمس طبقات؛ والثانية، الاتصال، هي التي تحوّل الزيارة إلى طلب.",
      ], visual: 'couches', after: [
        "**المحتوى والاتصال.** صفحة لكل خدمة ولكل مدينة، مع إثباتاتكم؛ ووسيلة اتصال في كل شاشة. الاتصال هو الطبقة المبرزة: في المثال، غيابه هو ما كان يجعل 86 زائراً من 100 يغادرون. **السرعة والتقنية.** ميزانية وزن لكل صفحة؛ عناوين تقول الخدمة والمكان؛ بيانات منظَّمة للمؤسسة المحلية، تُبلَّغ بها " + I('Google') + " أوقات العمل والأقسام المختلفة؛ خريطة للموقع؛ وإعادات توجيه.",
        "**القياس والملكية.** الطلبات محسوبة حسب المصدر والصفحة؛ والدخول، النطاق، والاستضافة باسمكم. **جاهز أم على المقاس.** توجد أدوات جاهزة لإنشاء المواقع؛ وهي مناسبة لحضور بسيط، حين يكون عندكم من يملك الوقت للاعتناء به. والتطوير على المقاس مبرَّر حين تلزم صفحات لكل خدمة ولكل مدينة بلغتين، وزن مراقَب، طلبات تدخل أدواتكم، وموقع قادر على التطور نحو فهرس، فضاء للزبون، أو حجز مواعيد.",
      ], list: [
        "**ما تتسلّمونه**: شهر من قياس الموقع الحالي؛ صفحة لكل خدمة ولكل مدينة؛ وسيلة الاتصال في كل شاشة؛ ميزانية وزن لكل صفحة؛ العربية والفرنسية؛ البيانات المنظَّمة وخريطة الموقع؛ إعادة توجيه العناوين القديمة؛ الطلبات في قائمة لها حالة؛ ومفاتيح الدخول باسمكم.",
        "**ما تتجنّبه المؤسسة**: الموقع الذي لا يجده أحد، الصفحة التي تُفتَح في ست عشرة ثانية، الرقم المخفي في صفحة الاتصال، الاستمارة التي تذهب إلى الفراغ، مفاتيح الدخول عند مزوّد قديم، وإعادة البناء التي لا يعرف أحد إن كانت نافعة.",
        "**ما يُقاس**: الزيارات في الشهر وحسب المصدر؛ حصة الزيارات على الهاتف؛ وزن كل صفحة ووقت فتحها؛ النقرات على المكالمة والرسالة، والاستمارات المرسَلة؛ معدل التحويل؛ وأجل الجواب على الطلبات.",
        "**ما تفعله Symloop**: قياس الموقع الحالي، قائمة الصفحات معكم، النماذج على الهاتف، التطوير بلغتين، مراقبة الوزن، البيانات المنظَّمة، إعادات التوجيه، قائمة الطلبات، وتسليم مفاتيح الدخول. والمحتوى، الصور، والمراجع تأتي منكم.",
      ], faq: [
        { q: "ما هو الموقع التعريفي؟", a: "موقع يعرض على الإنترنت منتجات مؤسسة أو خدماتها، دون بيع على الإنترنت. ويُحكَم عليه بالطلبات التي يجلبها: مكالمات، رسائل، واستمارات." },
        { q: "ماذا يجب أن يحتوي موقع تعريفي؟", a: "صفحة لكل خدمة ولكل مدينة تخدمونها، إثباتاتكم، وسيلة اتصال في كل شاشة، صفحات خفيفة، اللغتان، وعدّ للطلبات." },
        { q: "لماذا لا يجلب موقعي أي زبون؟", a: "في الغالب لواحد من أربعة أسباب: لا يوجد في البحث، يُفتَح ببطء على الهاتف، وسيلة الاتصال مخفية، أو الطلبات لا يقرؤها أحد. وشهر من القياس يقول أيها." },
        { q: "هل نعيد بناء الموقع أم نحسّنه؟", a: "قيسوا أولاً. إذا كان المحتوى جيداً والمشكل في الوزن ووسيلة الاتصال فقط، يكفي التحسين. وإذا لم تكن صفحات الخدمات موجودة ومفاتيح الدخول ليست عندكم، فإعادة البناء آمَن." },
        { q: "كيف نظهر في البحث عن مهنتنا ومدينتنا؟", a: "بصفحة لكل خدمة ولكل مدينة، مكتوبة بكلمات الزبائن، وبمعلومات عن المؤسسة كاملة ومتطابقة في كل مكان. ولا طريقة تضمن المرتبة الأولى." },
        { q: "كم يجب أن يستغرق فتح موقع؟", a: "عرض المحتوى الرئيسي في ثانيتين ونصف على الأكثر يُعتبَر جيداً. وبسرعة 4 ميغابت في الثانية، معناه إبقاء الصفحة في حدود ميغابايت واحد." },
        { q: "موقع تعريفي أم موقع تجارة إلكترونية؟", a: "تعريفي إذا كان الزبون يتصل بكم، يكتب، أو يأتي؛ وتجارة إلكترونية إذا كان يطلب ويدفع على الإنترنت. ويمكن البدء بموقع تعريفي مع طلب عرض سعر." },
        { q: "ماذا تصير عناوين الموقع القديمة؟", a: "كل واحد يُعاد توجيهه بصفة دائمة نحو الصفحة الجديدة، لسنة على الأقل، حتى لا تضيع الروابط ولا الزوار." },
        { q: "لمن يعود الموقع؟", a: "لكم: اسم النطاق، الاستضافة، والحسابات باسمكم، ومفاتيح الدخول تُسلَّم لكم." },
        { q: "بماذا يُبدأ؟", a: "بشهر من قياس الموقع الحالي، وبقائمة خدماتكم والمدن التي تخدمونها." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "من مئة زائر، ستة وثمانون يغادرون دون أن يروا كيف يتصلون بكم." },
      { after: 1, text: "بسرعة ثابتة، الوقت يتبع الوزن: قسمة الوزن على عشرة تقسم الانتظار على عشرة." },
    ],
    cta: { eyebrow: "قولوا لنا عنوان موقعكم، خدماتكم، والمدن التي تخدمونها: نبدأ بشهر من القياس", title: "موقع لا يجده أحد، صفحة تحتاج ست عشرة ثانية لتُفتَح، رقم مخفي، استمارة تذهب إلى الفراغ، مفاتيح دخول عند مزوّد قديم، أو نشاط تطلقونه في الجزائر من فرنسا", body: "Symloop تبني الموقع التعريفي الذي يجلب الطلبات: صفحة لكل خدمة ولكل مدينة، وسيلة اتصال في كل شاشة، صفحات خفيفة، العربية والفرنسية، طلبات محسوبة، ومفاتيح دخول باسمكم. صِفوا لنا مهنتكم، منطقتكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.domaine, kind: '2027', name: 'اسم النطاق والاستضافة: من يملك ماذا' },
      { href: L.formulaire, kind: '2027', name: 'الاستمارة على الإنترنت: طلبات عروض السعر، التكرارات، وإشعار الاستلام' },
      { href: L.catalogue, kind: '2027', name: 'الفهرس على الإنترنت: بطاقات المنتجات، وطلب عرض السعر' },
      { href: L.ecommerce, kind: '2027', name: 'موقع التجارة الإلكترونية: الدفع عند الاستلام، والتوصيل حسب الولاية' },
    ] },
  },
};

const KEYWORDS = "site vitrine algérie, site vitrine algérie 2027, création site vitrine algérie, site vitrine entreprise, créer un site vitrine, refonte site vitrine, refonte site web algérie, site vitrine qui ramène des clients, que doit contenir un site vitrine, site vitrine ou e-commerce, site vitrine c'est quoi, création site web algérie, agence web algérie, showcase website Algeria, business website Algeria, website redesign Algeria, موقع تعريفي, موقع تعريفي لشركة, تصميم موقع تعريفي للشركات, انشاء موقع الكتروني لشركة, تصميم مواقع الجزائر, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
